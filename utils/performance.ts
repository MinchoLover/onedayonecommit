import { performance } from 'perf_hooks';

// 1. 인터페이스 정의 (데이터 원본은 number로 관리하는 게 국룰!)
export interface PerfResult {
  label: string;
  size: number;
  duration: number; // ms (나중에 계산하기 편하게 number로!)
}

/**
 * 함수의 실행 시간을 정밀하게 측정하는 유틸리티
 */
export async function measurePerformance<T>(
  task: () => Promise<T> | T,
  label: string = 'Task',
  size: number = 0 // 벤치마크 시 데이터 크기를 기록하기 위해 추가
): Promise<{ result: T; perf: PerfResult }> {
  const start = performance.now();
  try {
    const result = await task();
    const end = performance.now();
    const duration = end - start;
    
    // 로그는 보기 좋게 출력만!
    console.log(`🚀 [${label}] 소요 시간: ${duration.toFixed(4)}ms`);
    
    return { 
      result, 
      perf: { label, size, duration } // 결과 객체와 성능 데이터를 분리해서 반환
    };
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`❌ [${label}] 실패 (소요 시간: ${duration.toFixed(4)}ms)`);
    throw error;
  }
}