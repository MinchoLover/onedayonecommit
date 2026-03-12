# 🛠 Engineering Utilities & Patterns
[![Node.js CI](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node.ci.yml/badge.svg)](https://github.com/MinchoLover/onedayonecommit/actions/workflows/node.ci.yml)

이 저장소는 실무 수준의 엔지니어링 패턴과 유틸리티를 구현하고, 자동화된 테스트로 품질을 검증하는 개인 프로젝트입니다.

## ⚙️ CI/CD 인프라
- **GitHub Actions**: 모든 Push 및 Pull Request에 대해 `Node.js 20` 환경에서 자동 테스트 실행.
- **Jest**: 단위 테스트 프레임워크를 통한 코드 무결성 검증.

## 🛠 구현된 유틸리티 목록
- **withRetry**: 지수 백오프 및 무작위 지터를 적용한 안정적인 비동기 재시도 로직. (2026-03-09)
  - 🧪 **Jest 단위 테스트 추가**: 성공, 간헐적 실패 후 성공, 최종 실패 엣지 케이스 검증 완료. (2026-03-10)
  - 🤖 **CI 파이프라인 연동**: GitHub Actions를 통한 자동 테스트 환경 구축 완료. (2026-03-11)
- **measurePerformance**: 고해상도 타이머를 사용해 특정 로직의 실행 시간을 정밀하게 측정하는 유틸리티. (2026-03-12)
  - 📊 **프로파일링 지원**: 함수 실행 결과와 소요 시간(ms)을 객체로 반환하여 데이터 기반 최적화 지원.
  - ⚡ **고정밀 측정**: Node.js `perf_hooks`를 통해 마이크로초 단위의 정확도 확보.