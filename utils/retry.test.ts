import { withRetry } from './retry';

describe('withRetry 유틸리티 테스트', () => {
  it('작업이 한 번에 성공하면 결과를 즉시 반환해야 한다', async () => {
    const task = jest.fn().mockResolvedValue('Success');
    const result = await withRetry(task);
    
    expect(result).toBe('Success');
    expect(task).toHaveBeenCalledTimes(1);
  });

  it('실패하더라도 최대 재시도 횟수 내에 성공하면 결과를 반환해야 한다', async () => {
    const task = jest.fn()
      .mockRejectedValueOnce(new Error('First fail'))
      .mockResolvedValueOnce('Success at second time');

    const result = await withRetry(task, { maxRetries: 2, baseDelay: 10 });
    
    expect(result).toBe('Success at second time');
    expect(task).toHaveBeenCalledTimes(2);
  });

  it('최대 재시도 횟수를 초과하면 에러를 던져야 한다', async () => {
    const task = jest.fn().mockRejectedValue(new Error('Persistent fail'));

    await expect(withRetry(task, { maxRetries: 2, baseDelay: 10 }))
      .rejects.toThrow('최대 재시도 횟수(2)를 초과했습니다.');
    
    expect(task).toHaveBeenCalledTimes(3); 
  });
});