---
title: 코시 공식의 따름 정리
summary: 0 과 음의 실수를 뺀 복소평면이 1 에 대해 별 모양이라는 것을 보이고, 그 위에서 1/z 를 선분을 따라 적분해 주 로그를 정의한 뒤, 주 로그가 지수함수의 역이 되는 범위와 곱의 법칙이 성립하는 조건을 증명한다.
concepts:
  - liouville-theorem
  - zeros-of-holomorphic-functions
  - principal-logarithm
---

[[liouville-theorem|리우빌 정리]]는 5단원 "코시 적분 공식과 멱급수 전개"의 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]을 반지름이 얼마든지 큰 원에 씁니다. 정함수는 복소평면 전체에서 정칙이므로 모든 점을 중심으로 모든 반지름의 원판을 쓸 수 있고, $|f|$가 평면 전체에서 $M$ 이하이면 도함수의 상한 $M/R$을 얼마든지 작게 할 수 있어 도함수가 $0$이 됩니다. 같은 생각으로, $0$ 이상인 실수 $A$, $B$와 $0$ 이상인 정수 $k$에 대하여 모든 $z$에서 $|f(z)| \le A + B|z|^k$인 정함수는 차수가 $k$ 이하인 복소 다항함수이거나 영함수입니다. 리우빌 정리 항목의 예시는 복소수 강의의 대수학의 기본정리를 이 정리로 다시 증명합니다.

[[zeros-of-holomorphic-functions|정칙함수의 영점]]은 5단원의 [[holomorphic-functions-have-power-series|정칙함수의 멱급수 전개]]와 2단원 "멱급수와 복소 지수함수의 미분"의 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]를 잇습니다. 영점 $a$의 원판에서 함수는 멱급수와 같으므로, 계수가 모두 $0$이면 그 원판에서 함수가 $0$이고, 그렇지 않으면 처음으로 $0$이 아닌 계수의 첨자 $m$으로 $f(z) = (z - a)^m g(z)$, $g(a) \ne 0$이라 쓸 수 있습니다. 두 경우 가운데 정확히 하나가 성립하고, 뒤의 경우의 $m$을 영점의 중복도라 합니다. 이때 $a$ 둘레에는 다른 영점이 없고, 영점의 집합의 집적점인 정의역의 점에서는 앞의 경우가 성립합니다.

[[principal-logarithm|주 로그]]는 5단원 "코시 적분 공식과 멱급수 전개"의 [[cauchy-theorem-for-star-shaped-sets|별 모양 집합의 원시함수와 코시 정리]]를 씁니다. $0$과 음의 실수를 뺀 복소평면 $\Omega$는 $1$에 대해 별 모양인 열린집합이고, $1/z$는 그 위의 정칙함수이므로 $1$에서 $z$로 가는 선분 위의 적분이 $1/z$의 원시함수입니다. 이것을 $z$의 주 로그 $\operatorname{Log} z$로 정의합니다.

주 로그의 성질은 복소수 강의의 지수함수와 편각으로 읽습니다. $\exp(\operatorname{Log} z) = z$이고, $\operatorname{Log} z$의 실수부는 $\ln|z|$, 허수부는 $-\pi$와 $\pi$ 사이에 있는 $z$의 편각입니다. 거꾸로 $\operatorname{Log}(\exp(w)) = w$는 $w$의 허수부가, 곱의 법칙 $\operatorname{Log}(zw) = \operatorname{Log} z + \operatorname{Log} w$는 두 허수부의 합이 그 범위 안에 있을 때 성립합니다. 양의 실수에서는 실수의 자연로그를 $\iota$로 옮긴 값과, $1$을 중심으로 하는 반지름 $1$인 원판에서는 2단원 "멱급수와 복소 지수함수의 미분"의 [[logarithm-near-one|1 근처의 복소 로그]]와 같은 값을 갖습니다.
