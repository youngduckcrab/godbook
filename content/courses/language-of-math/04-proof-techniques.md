---
title: 증명 기법
summary: 정의를 풀어 쓰는 직접 증명, 대우를 이용하는 증명, 부정을 가정하는 귀류법.
concepts:
  - even-and-odd
  - divisibility
  - direct-proof
  - odd-square-is-odd
  - divisibility-is-transitive
  - proof-by-contrapositive
  - even-square-implies-even
  - proof-by-contradiction
  - rational-and-irrational-numbers
  - sqrt2-is-irrational
---

앞의 세 단원에서는 명제, 집합, 한정 기호라는 말을 정했습니다. 이 단원은 그 말로 실제로 정리를 증명하는 법을 배웁니다. 이 단원의 증명은 모두 정의를 풀어 쓰는 일에서 시작하므로, 먼저 [[even-and-odd]]와 [[divisibility]]라는 두 정의를 읽습니다. 증명에서 "홀수이다"는 "$2a + 1$ 꼴이다"로 바뀌고, "나눈다"는 "곱으로 쓸 수 있다"로 바뀝니다. 이 두 정의는 이후 증명의 재료가 됩니다. [[even-and-odd]]는 정수의 합·곱이 정수라는 사실과 모든 정수는 짝수이거나 홀수라는 사실도 증명 없이 받아들인다고 밝히는데, 이 단원의 뒤 증명들이 이 사실들을 인용합니다.

첫 번째 기법은 [[direct-proof]]입니다. 조건문의 가정에서 출발해 결론에 도달하는 가장 기본적인 틀이고, [[odd-square-is-odd]]와 [[divisibility-is-transitive]]에서 직접 써 봅니다. 두 증명 모두 정의를 풀어 쓰고, 식을 정리한 뒤, 다시 정의로 묶는 같은 모양입니다.

가정에서 결론으로 가는 길이 잘 보이지 않을 때 [[proof-by-contrapositive]]가 길을 열어 주는 경우가 있습니다. 1단원의 [[contrapositive-law]]가 조건문과 대우가 같은 말임을 보장하므로, 결론의 부정에서 가정의 부정으로 가는 직접 증명이 원래 명제의 증명이 됩니다. 이 기법으로 [[even-square-implies-even]]를 증명하고, 그 사실이 뒤의 증명에 쓰입니다.

마지막 기법인 [[proof-by-contradiction]]은 증명할 명제의 부정을 가정하는 방법입니다. 부정을 정확히 세워야 하므로 3단원의 [[negation-of-quantified-statements]]와 [[negation-of-conditional]]이 여기서 쓰입니다. 이 기법의 대표 예가 [[sqrt2-is-irrational]]이고, 그 전에 [[rational-and-irrational-numbers]]에서 유리수와 무리수의 정의를 읽습니다. 세 기법의 차이는 출발점입니다. 직접 증명은 가정에서 결론으로 곧장 가고, 대우 증명은 가정과 결론을 부정해 자리를 바꾼 뒤 직접 증명합니다.

귀류법은 명제 전체의 부정을 가정하고 모순이라는 새 개념을 씁니다.
