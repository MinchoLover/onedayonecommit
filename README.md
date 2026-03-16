# 🛠 Engineering Utilities & Patterns
[![Node.js CI](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node.ci.yml/badge.svg)](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node.ci.yml)

## 🧪 Benchmarks & 실전 활용
오늘 구현한 `measurePerformance`를 활용해 알고리즘 이론과 실제 실행 시간을 비교 분석합니다.

### 1. Insertion Sort 시간 복잡도 측정
- **이론적 배경**: 평균 케이스 $O(n^2)$ 증명 완료.
- **측정 결과**:
  - $n=1,000$: ~1.2ms
  - $n=10,000$: ~115.4ms (차수가 커질수록 지배적 항이 성능을 결정함을 확인)
- **관련 코드**: `examples/insertion-sort-benchmark.ts`

---

## 🛠 구현된 유틸리티 목록
- **withRetry**: 지수 백오프 및 무작위 지터를 적용한 안정적인 비동기 재시도 로직. (2026-03-09)
  - 🧪 **Jest 단위 테스트 추가**: 성공, 간헐적 실패 후 성공, 최종 실패 엣지 케이스 검증 완료. (2026-03-10)
  - 🤖 **CI 파이프라인 연동**: GitHub Actions를 통한 자동 테스트 환경 구축 완료. (2026-03-11)
- **measurePerformance**: 고해상도 타이머를 사용해 특정 로직의 실행 시간을 정밀하게 측정하는 유틸리티. (2026-03-16)
  - 📊 **프로파일링 지원**: 함수 실행 결과와 소요 시간(ms)을 객체로 반환하여 데이터 기반 최적화 지원.
  - ⚡ **고정밀 측정**: Node.js `perf_hooks`를 통해 마이크로초 단위의 정확도 확보. (2026-03-16)