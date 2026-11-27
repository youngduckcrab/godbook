---
title: 다항식환
summary: 다항식을 계수의 열로 정의해 다항식환을 만들고, 차수, 대입과 계수 사상, 최고차계수가 가역원인 다항식으로 나누는 나눗셈 정리, 인수 정리와 근의 개수, 형식적 도함수와 중근의 판정을 다룬다.
concepts:
  - polynomial-ring
  - degree-of-a-polynomial
  - evaluation-homomorphism
  - division-algorithm-for-polynomials
  - factor-theorem-for-polynomials
  - formal-derivative
  - multiple-roots-and-derivative
  - polynomial-ring-examples
---

이 단원은 계수가 환의 원소인 다항식을 다룹니다. [[polynomial-ring|다항식환]]은 다항식을 "$0$번째부터 차례로 놓은 계수들로서 어느 번호부터는 모두 $0$인 것"으로 정의하고, 계수별 합과 합성곱으로 다항식환 $R[X]$가 단위원을 갖는 가환환임을 보입니다. 곱의 결합법칙과 교환법칙의 증명에는 1단원의 [[rearranging-finite-sums-in-a-ring|유한 합의 재배열과 이중 합]]을 씁니다. 이렇게 정의한 다항식은 수를 넣어 얻는 함수가 아닙니다. 상수 다항식은 계수환의 원소 자체가 아니라 $0$차 계수 말고는 계수가 모두 $0$인 다항식이고, 이것을 계수환의 원소로 읽는 약속을 그 항목의 진술에 둡니다.

[[degree-of-a-polynomial|다항식의 차수]]는 영다항식이 아닌 다항식에만 정합니다. 영다항식이 아닌 두 다항식의 곱의 차수가 두 차수의 합이 되는 것은 두 최고차계수의 곱이 $0$이 아닐 때이고, 그래서 최고차계수가 가역원인 경우와 계수환이 정역인 경우를 따로 진술합니다. [[evaluation-homomorphism|대입 준동형]]은 다항식에 원소를 넣는 일이 환 준동형이라는 것과, 계수를 다른 환으로 옮기는 계수 사상을 다룹니다. 정수 계수를 법 $m$으로 줄이는 것과 $X$를 $X + c$로 옮기는 것도 여기에 있습니다.

[[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]는 정수의 나눗셈 정리와 같은 꼴이고, 나누는 다항식의 최고차계수가 가역원이면 몫과 나머지가 하나씩 정해집니다. 이것을 $X - c$에 쓴 것이 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]이고, 정역 위에서는 영이 아닌 다항식의 근의 개수가 차수를 넘지 않습니다. [[formal-derivative|형식적 도함수]]는 극한 없이 계수만으로 정한 도함수이고, [[multiple-roots-and-derivative|중근과 도함수]]는 이것으로 $(X - c)^2$이 나누는지를 판정합니다. 마지막의 [[polynomial-ring-examples|다항식환의 예]]는 정역이 아닌 계수환, 유한한 계수환, 정수 계수와 실수 계수의 다항식으로 앞 항목들의 가정이 필요한 까닭을 보여 줍니다.

출처 Judson 은 다항식을 식으로 정의하고 영다항식의 차수를 $-\infty$로 둡니다. 이 단원은 다항식을 함수로 정의하고 영다항식에 차수를 정하지 않으며, 나눗셈 정리와 인수 정리를 체가 아닌 가환환에서 진술합니다. 출처가 연습문제로 돌린 곱의 교환법칙과 분배법칙, 형식적 도함수의 곱의 법칙도 이 단원에서 증명합니다.
