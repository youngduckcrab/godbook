---
title: 다항함수
summary: x 를 xᵏ 으로 보내는 함수 tᵏ 들의 일차결합으로 다항함수를 정의하고, 곱, 인수 정리, 근의 개수의 상계, 계수의 유일성과 차수, 근의 중복도를 증명한다.
concepts:
  - polynomial-function
  - product-of-polynomial-functions
  - factor-theorem
  - roots-of-polynomial-function
  - coefficients-of-polynomial-function
  - multiplicity-of-a-root
---

이 단원은 실수에서 실수로 가는 함수 가운데 $x$의 거듭제곱들을 실수배해 더한 다항함수를 정의하고, 그 근과 근의 중복도를 다룹니다. 행렬식은 쓰지 않고, 강의 "선형대수"의 벡터공간, 일차결합, 일차독립, 기저, 차원과 해석학 입문의 [[power-of-a-real-number|실수의 거듭제곱]], 그리고 이 강의 2단원의 [[finite-product-of-reals|실수의 유한 곱]]을 씁니다.

출처의 다항식은 식인지 함수인지가 밝혀져 있지 않습니다. 이 강의는 다항함수를 실함수로 정합니다. [[polynomial-function|다항함수]]는 $x$를 $x^k$으로 보내는 함수 $t^k$들을 실수배해 더한 것이고, $\mathcal{P}_n$은 $t^0, \dots, t^n$의 생성입니다. [[product-of-polynomial-functions|다항함수의 곱]]은 두 다항함수의 곱이 다시 다항함수라는 것을 생성의 성질로 보입니다.

그다음 순서가 중요합니다. 다항함수는 함수로 정의했으므로, 한 다항함수를 나타내는 계수가 하나뿐이라는 것은 정의에서 바로 나오지 않습니다. 그래서 계수의 유일성을 쓰지 않는 [[factor-theorem|인수 정리]]와 [[roots-of-polynomial-function|다항함수의 근의 개수]]를 먼저 증명하고, 근의 개수 정리로 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]에서 $t^0, \dots, t^n$이 일차독립이라는 것을 보입니다. 차수는 계수가 하나로 정해진 뒤에야 정의할 수 있습니다.

마지막으로 [[multiplicity-of-a-root|근의 중복도]]는 근에서 $t - c$를 몇 번 떼어 낼 수 있는지를 셉니다. 다항함수가 일차식의 거듭제곱들의 곱으로 주어지면 중복도는 지수와 같고, 서로 다른 근들의 중복도를 더하면 차수 이하입니다.
