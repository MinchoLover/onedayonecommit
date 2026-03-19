import { measurePerformance } from '../utils/performance';

// 1. 과제에서 배운 Insertion Sort ($O(n^2)$)
function insertionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// 2. 벤치마크 실행 함수
async function runBenchmark() {
  const sizes = [1000, 10000]; // 데이터 개수

  for (const size of sizes) {
    console.log(`\n--- 데이터 개수: ${size.toLocaleString()}개 ---`);
    const data = Array.from({ length: size }, () => Math.floor(Math.random() * size));

    // Insertion Sort 측정
    await measurePerformance(() => insertionSort([...data]), `Insertion Sort ($O(n^2)$)`);

    // Built-in Sort 측정
    await measurePerformance(() => [...data].sort((a, b) => a - b), `Built-in Sort ($O(n \log n)$)`);
  }
}

runBenchmark();