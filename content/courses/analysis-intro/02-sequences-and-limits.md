---
title: 절댓값과 수열의 극한
summary: 절댓값과 삼각부등식으로 실수 사이의 거리를 다루고, 수열과 그 극한을 정의한 뒤 극한의 유일성, 수렴하는 수열의 유계성, 단조수렴정리, 꼬리와 극한의 관계를 증명한다.
concepts:
  - absolute-value
  - triangle-inequality
  - sequence
  - limit-of-sequence
  - limit-is-unique
  - basic-limits
  - convergent-sequence-is-bounded
  - monotone-convergence-theorem
  - tail-of-a-sequence
---

1단원 "실수: 순서와 완비성"에서 실수의 순서와 최소상계 성질을 받아들이고 부등식의 규칙을 증명했습니다. 이 단원은 그 위에서 "두 수가 가깝다"는 말을 정확히 하고, 그것으로 수열의 극한을 정의합니다.

먼저 [[absolute-value|절댓값]]을 정의하고, 절댓값이 들어간 부등식을 두 개의 부등식으로 바꾸는 방법과 두 수의 최대·최소를 정리합니다. [[triangle-inequality|삼각부등식]]은 두 거리를 더해 다른 거리를 위에서 누르는 도구이고, 이 단원의 증명에서 여러 번 쓰입니다. 다음으로 [[sequence|수열]]을 자연수 전체에서 실수로의 함수로 정의하고, 수열과 그 값의 집합을 구별하며 유계와 단조를 정의합니다. [[limit-of-sequence|수열의 극한]]은 "모든 양수 $\varepsilon$에 대하여 어떤 번호 $M$이 있어 그 뒤의 모든 항이 $\varepsilon$ 안에 있다"는 정의를 한정 기호로 쓰고, 그 부정까지 풀어 둡니다.

후반의 다섯 항목은 이 정의에서 나오는 첫 결과들입니다. [[limit-is-unique|극한의 유일성]]을 증명한 뒤에야 극한을 기호 $\lim$으로 쓸 수 있습니다. [[basic-limits|기본적인 극한]]은 상수 수열과 $n^{-1}$의 극한, 그리고 발산하는 두 수열을 번호로 정리합니다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]는 처음 몇 항을 귀납법으로 누르는 방법을 함께 진술합니다.

[[monotone-convergence-theorem|단조수렴정리]]는 이 단원에서 1단원의 최소상계 성질 (U)를 직접 쓰는 항목으로, 단조증가이고 위로 유계인 수열은 값의 집합의 상한으로 수렴합니다. 마지막 [[tail-of-a-sequence|수열의 꼬리]]는 처음 유한 개의 항을 떼어 내도 수렴과 극한, 유계가 바뀌지 않는다는 것을 보입니다.
