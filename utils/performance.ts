import { performance } from 'perf_hooks';

/**
 * 함수의 실행 시간을 정밀하게 측정하는 유틸리티
 */
export async function measurePerformance<T>(
  task: () => Promise<T> | T,
  label: string = 'Task'
): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  try {
    const result = await task();
    const duration = performance.now() - start;
    console.log(`🚀 [${label}] 소요 시간: ${duration.toFixed(4)}ms`);
    return { result, duration };
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`❌ [${label}] 실패 (소요 시간: ${duration.toFixed(4)}ms)`);
    throw error;
  }
}