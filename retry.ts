/**
 * Exponential Backoff와 Jitter를 적용한 재시도 유틸리티
 * * @param task 실행할 비동기 함수
 * @param options maxRetries: 최대 시도 횟수, baseDelay: 기본 대기 시간(ms)
 */
export async function withRetry<T>(
  task: () => Promise<T>,
  options: { maxRetries: number; baseDelay: number } = { maxRetries: 3, baseDelay: 1000 }
): Promise<T> {
  let lastError: any;

  for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
    try {
      return await task();
    } catch (error) {
      lastError = error;
      
      if (attempt < options.maxRetries) {
        // 지수 백오프: 실패할수록 대기 시간이 기하급수적으로 증가 (2^attempt)
        const backoff = Math.pow(2, attempt) * options.baseDelay;
        
        // 지터(Jitter): 여러 클라이언트가 동시에 재시도하여 서버를 마비시키는 것을 방지하기 위해 
        // 0.5 ~ 1.5 사이의 무작위성을 부여합니다.
        const jitter = backoff * (Math.random() + 0.5); 
        
        console.warn(`[Retry] 시도 ${attempt + 1} 실패. ${Math.round(jitter)}ms 후 다시 시도합니다.`);
        await new Promise(resolve => setTimeout(resolve, jitter));
      }
    }
  }

  throw new Error(`최대 재시도 횟수(${options.maxRetries})를 초과했습니다. 마지막 오류: ${lastError?.message}`);
}
