# 🛠 Engineering Utilities & Patterns
[![Node.js CI](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node-ci.yml/badge.svg)](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node-ci.yml)

이 저장소는 실무 수준의 엔지니어링 패턴과 유틸리티를 구현하고, 수학적 분석과 자동화된 테스트로 품질을 검증하는 개인 프로젝트입니다. 단순히 코드를 짜는 것을 넘어, **이론적 시간 복잡도가 실제 런타임에 미치는 영향**을 탐구합니다.

---

## 🧪 Benchmarks & 실전 활용
구현된 `measurePerformance` 유틸리티를 사용하여 알고리즘의 이론적 성능($\Theta$)과 실제 실행 시간을 비교 분석합니다.

### 1. Insertion Sort 시간 복잡도 검증
이산수학적 **Inversion** 개념을 바탕으로 평균 시간 복잡도가 $\Theta(n^2)$인 Insertion Sort의 성능을 측정했습니다.

* **이론적 배경**: 배열 내의 반전(Inversion) 쌍의 개수가 삽입 정렬의 시프트 횟수와 일치함을 수학적으로 증명.
* **측정 결과**:
    | 데이터 크기 ($n$) | 실행 시간 (ms) | 비고 |
    | :--- | :--- | :--- |
    | **1,000** | ~1.2ms | |
    | **10,000** | ~115.4ms | $n$이 10배 증가 시, 시간은 약 100배 증가 ($n^2$) |

> **분석 결과**: 데이터 규모가 커질수록 최고차항인 $n^2$이 전체 성능을 지배함을 실제 데이터로 확인했습니다.

---

## 🛠 구현된 유틸리티 목록

### ⏱️ Performance & Analysis
* **measurePerformance** (2026-03-16)
    * **고해상도 타이머**: Node.js `perf_hooks`를 사용하여 마이크로초($\mu s$) 단위의 정밀한 실행 시간 측정.
    * **프로파일링 지원**: 함수 실행 결과와 소요 시간(ms)을 객체로 반환하여 데이터 기반 최적화 지원.

### 🛡️ Reliability & Async
* **withRetry** (2026-03-09)
    * **재시도 로직**: 지수 백오프(Exponential Backoff) 및 무작위 지터(Jitter)를 적용한 안정적인 비동기 재시도 처리.
    * **검증 완료**: 간헐적 실패 및 최종 실패 엣지 케이스에 대한 **Jest** 단위 테스트 100% 통과.

---

## ⚙️ Infrastructure
* **GitHub Actions**: 모든 Push 및 Pull Request에 대해 `Node.js 20` 환경에서 자동 테스트(CI) 수행.
* **Jest**: 단위 테스트 프레임워크를 통한 코드 무결성 검증.