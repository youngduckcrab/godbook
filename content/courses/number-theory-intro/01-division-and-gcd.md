---
title: 나눗셈과 최대공약수
summary: 정렬 원리에서 출발해 나눗셈 정리, 최대공약수, 유클리드 호제법, 베주 항등식을 차례로 증명한다.
concepts:
  - well-ordering-principle
  - division-theorem
  - greatest-common-divisor
  - gcd-subtract-multiple
  - euclidean-algorithm
  - bezout-identity
  - common-divisor-divides-gcd
---

"수학의 언어"에서 [[divisibility|나누어떨어짐]]과 [[prime-number|소수]]를 정의했지만, "정수 $a$를 양의 정수 $b$로 나누면 몫과 나머지가 정해진다"는 사실은 쓰지 못했습니다. 이 단원은 그 사실을 정리로 만드는 데서 시작합니다. 그러려면 먼저 "가장 작은 것이 있다"는 성질이 필요하므로 첫 항목이 [[well-ordering-principle|정렬 원리]]입니다. 이것은 앞 강의에서 받아들인 [[mathematical-induction|수학적 귀납법]]의 원리에서 증명되고, 같은 항목에서 정수의 순서에 관해 새로 받아들이는 사실을 밝혀 둡니다.

[[division-theorem|나눗셈 정리]]는 이 단원에서 정렬 원리를 처음 쓰는 정리입니다. 이 정리로 "모든 정수는 짝수이거나 홀수이고 둘 다는 아니다"가, 나누는 수가 $2$인 경우로 증명됩니다. "수학의 언어"에서 증명 없이 받아들였던 사실 하나가 여기서 정리가 되는 셈입니다. 이어서 [[greatest-common-divisor|최대공약수]]를 정의하는데, 공약수 가운데 가장 큰 것이 있다는 것도 정렬 원리(최대 원소 판)에서 나옵니다. 나눗셈 정리는 뒤의 호제법과 베주 항등식에서 다시 쓰입니다.

[[gcd-subtract-multiple|배수를 빼는 성질]]과 [[euclidean-algorithm|유클리드 호제법]]은 최대공약수를 실제로 계산하는 길입니다. 한 수에서 다른 수의 배수를 빼도 최대공약수가 변하지 않으므로, 나눗셈의 나머지로 문제를 작게 바꾸어 나갈 수 있습니다. 마지막 두 항목은 계산 너머의 구조를 보여 줍니다. [[bezout-identity|베주 항등식]]은 최대공약수가 두 수의 정수배의 합으로 쓰인다는 것이고, [[common-divisor-divides-gcd|공약수는 최대공약수를 나눈다]]는 그 따름 정리입니다. 이 사실들은 이후에 소수와 합동식을 다룰 때 도구로 쓸 예정입니다. 증명 없이 받아들이는 사실은 각 항목의 진술에 밝혀 두었습니다.
