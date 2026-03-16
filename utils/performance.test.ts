import { measurePerformance } from './performance';

describe('measurePerformance', () => {
  it('함수의 실행 시간을 측정하고 결과를 반환해야 한다', async () => {
    const mockTask = () => new Promise((res) => setTimeout(() => res('done'), 100));
    
    const { result, duration } = await measurePerformance(mockTask, 'TestTask');
    
    expect(result).toBe('done');
    expect(duration).toBeGreaterThanOrEqual(100); // 최소 100ms 이상 소요되어야 함
  });
});