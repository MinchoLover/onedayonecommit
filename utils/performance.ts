import { performance } from 'perf_hooks';

/**
 * 비동기 또는 동기 함수의 실행 시간을 측정합니다.
 * @param task 실행할 함수
 * @param label 측정 결과에 표시할 이름
 */
export async function measurePerformance<T>(
  task: () => Promise<T> | T,
  label: string = 'Task'
): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  
  try {
    const result = await task();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`[Performance] ${label}: ${duration.toFixed(4)}ms`);
    return { result, duration };
  } catch (error) {
    console.error(`[Performance] ${label} failed after ${performance.now() - start}ms`);
    throw error;
  }
}