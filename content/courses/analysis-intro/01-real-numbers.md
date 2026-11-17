---
title: "실수: 순서와 완비성"
summary: 실수의 계산 법칙 위에 순서 공리와 최소상계 성질을 받아들이고, 부등식의 규칙, 상한과 하한, 아르키메데스 성질, 유리수의 조밀성, 제곱근의 존재를 증명한다.
concepts:
  - real-order-axioms
  - order-properties-of-reals
  - upper-bound-and-supremum
  - least-upper-bound-property
  - infimum-exists
  - archimedean-property
  - rationals-are-dense
  - square-root-exists
  - supremum-and-arithmetic
---

이 단원을 읽기 전에 다른 강의의 항목 둘을 먼저 읽습니다. 선형대수 1단원의 [[real-number-arithmetic|실수의 계산 법칙]] 항목 하나와, 정수론 입문 1단원의 [[well-ordering-principle|정렬 원리]](정수의 순서 (Z5)–(Z8)과 (L1)–(L3)이 여기에 있습니다)입니다. 나머지 선행 지식은 "수학의 언어"의 1단원부터 9단원까지입니다.

해석학의 증명은 대부분 실수에 관한 부등식을 다루고, 이 단원은 실수를 무엇으로 받아들이는지 정하는 일에서 시작합니다. 덧셈과 곱셈은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K7)을 그대로 쓰고, 여기에 [[real-order-axioms|실수의 순서]]의 네 공리 (W1)–(W4)를 더합니다. [[order-properties-of-reals|실수의 순서의 성질]]은 고등학교에서 익숙하게 쓰던 부등식의 규칙을 이 공리들에서 하나씩 증명하고, [[prime-number|소수]] 항목과 [[well-ordering-principle|정렬 원리]]에서 받아들인 정수의 순서가 정수 위에서 실수의 순서와 같다는 것도 보입니다. 뒤의 항목들은 이 목록을 번호로 인용합니다.

다음으로 [[upper-bound-and-supremum|상계와 상한]]이 집합의 위쪽 경계와 가장 작은 상계를 정의하고, [[least-upper-bound-property|최소상계 성질]]이 마지막 공리 (U)를 받아들입니다. 공집합이 아니고 위로 유계인 실수의 집합은 상한을 갖는다는 것입니다. 이 강의가 실수에 관해 받아들이는 것은 이 셋, 곧 계산 법칙과 순서 공리와 (U)이고, 실수를 유리수에서 구성하는 일은 다루지 않습니다. 정의와 공리를 앞쪽 네 항목에 모은 것은 뒤의 증명이 모두 그것들을 인용하기 때문입니다.

후반의 다섯 항목은 (U)에서 나오는 결과입니다. [[infimum-exists|하한의 존재]]는 부호를 바꾸어 하한에 대한 같은 성질을 얻습니다. [[archimedean-property|아르키메데스 성질]]은 어떤 실수보다도 큰 자연수가 있다는 것이고, 이것으로 [[rationals-are-dense|유리수의 조밀성]]을 증명합니다. [[square-root-exists|제곱근의 존재]]는 $0$ 이상의 모든 실수에 제곱근이 꼭 하나 있음을 상한으로 보이고, 유리수만으로는 최소상계 성질이 성립하지 않는다는 것도 보입니다. [[supremum-and-arithmetic|상한과 덧셈·곱셈]]은 집합을 옮기거나 수를 곱할 때 상한과 하한이 어떻게 바뀌는지를 정리합니다.

이 단원에서 다른 항목이 증명 없이 받아들였던 사실 몇 가지가 증명됩니다. 선형대수의 "고윳값이 없는 행렬과 대각화할 수 없는 행렬" 항목이 받아들인 (Y1)($aa + bb = 0$이면 $a = b = 0$)과 [[bernoulli-inequality|베르누이 부등식]]이 증명 첫머리에 받아들인 순서에 관한 사실 (R3)–(R6)은 [[order-properties-of-reals|실수의 순서의 성질]]에서, [[sqrt2-is-irrational|√2가 무리수라는 정리]]가 받아들인 "제곱하여 $2$가 되는 양의 실수가 꼭 하나 있다"는 [[square-root-exists|제곱근의 존재]]에서 증명됩니다. 그 항목들은 고치지 않고 그대로 둡니다.
