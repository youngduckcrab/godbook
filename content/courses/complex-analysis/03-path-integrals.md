---
title: 복소수값 함수의 적분과 경로 적분
summary: 실수의 구간 위에서 정의되고 값이 복소수인 함수의 미분과 적분을 실수부와 허수부로 정의하고, 적분의 선형성과 |∫g| ≤ ∫|g|, 미적분의 기본정리, 고른 수렴과 복소 M 판정법을 증명한 뒤, C¹ 경로와 경로 적분, 경로의 길이를 정의하고 뒤집기, 선분 쪼개기, ML 부등식, 항별 경로 적분을 증명한다.
concepts:
  - derivative-of-complex-valued-function
  - integral-of-complex-valued-function
  - properties-of-integral-of-complex-valued-function
  - fundamental-theorem-for-complex-valued-functions
  - uniform-convergence-and-complex-valued-integrals
  - path-in-the-complex-plane
  - path-integral
  - length-of-path-and-ml-inequality
---

이 단원은 리만 적분, 거리공간과 완비성(고른 수렴), 급수와 멱급수, 복소수 강의를 먼저 읽었다고 가정하고, 이 강의의 1단원과 2단원의 복소 미분은 쓰지 않습니다. 다루는 함수는 정의역이 실수의 구간이고 값이 복소수인 함수 $g : I \to \mathbb{C}$입니다. 시각 $t$에서 평면 위의 점 $g(t)$를 정하는 함수로 볼 수 있습니다. 이런 함수의 미분과 적분은 실수부와 허수부라는 실함수 두 개의 미분과 적분으로 정의되므로, 앞 강의들의 실함수에 관한 정리를 그대로 가져다 씁니다.

[[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]은 실수부와 허수부가 둘 다 미분가능할 때 미분가능하다고 하고, 두 미분계수로 만든 복소수를 미분계수로 정합니다. 합과 실수배는 두 좌표에서 따로 지켜지지만, 복소수배와 곱에서는 실수부와 허수부가 섞이므로 따로 계산해 곱의 법칙을 얻습니다. 실변수 $t$에서의 $\exp(c_0 t)$의 도함수 $c_0 \exp(c_0 t)$도 이 항목에서 코사인과 사인의 도함수로 증명합니다. 실함수에서와 달리 평균값 정리의 꼴은 성립하지 않을 수 있다는 것도 이 항목의 반례에서 봅니다.

[[integral-of-complex-valued-function|복소수값 함수의 적분]]은 실수부와 허수부가 둘 다 적분가능할 때 적분가능하다고 하고, 방향 있는 적분도 같은 방식으로 정합니다. 실함수의 적분과 같은 기호를 쓰므로, 실수값 함수를 $\iota$로 옮겨 적분한 값이 실함수의 적분을 $\iota$로 옮긴 것과 같다는 것을 진술에 둡니다. [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]은 복소수배에 대한 선형성과 $|\int g| \le \int |g|$를 증명합니다. 뒤의 부등식에는 실함수의 경우처럼 부호를 쓸 수 없으므로, 적분값의 방향을 돌리는 단위 복소수를 곱해 실수부의 부등식으로 바꿉니다. 같은 항목에 연속이고 $0$ 이상인 실함수의 적분이 $0$이면 그 함수가 $0$이라는 것도 둡니다.

[[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]는 앞의 두 정의를 써서 실함수의 미적분의 기본정리와 치환적분을 복소수값 함수로 옮깁니다. 그 따름으로 $0$이 아닌 정수 $m$에서 $\int_0^{2\pi} \exp(imt)\,dt = 0$이라는 계산을 진술에 둡니다.

[[uniform-convergence-and-complex-valued-integrals|복소수값 함수열의 고른 수렴과 적분]]은 복소수값 사상의 열의 고른 수렴이 실수부와 허수부의 고른 수렴과 같다는 것에서, 실숫값의 바이어슈트라스 M 판정법과 적분과 극한의 교환을 복소수값으로 옮깁니다. 함수항 급수의 꼬리를 점과 상관없는 수로 누르는 어림을 진술에 둡니다.

[[path-in-the-complex-plane|경로]]는 닫힌구간에서 복소평면으로 가는 연속미분가능한 함수이고, 도함수가 $0$이 되는 점이 있어도 됩니다. 선분 경로 $\sigma_{z,w}$와 원 경로, 뒤집은 경로를 두고, 꺾인 길은 한 함수로 만들지 않고 끝과 처음이 이어진 경로들의 유한 열로 둡니다. [[path-integral|경로 적분]]은 $f(\gamma(t))\gamma'(t)$를 앞 항목들의 뜻으로 적분한 것이고, 뒤집기와 선분 쪼개기는 미적분의 기본정리 항목의 일차 치환으로 증명합니다. [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]은 경로의 길이 $\ell(\gamma)$를 $|\gamma'|$의 적분으로 정하고, ML 부등식과 고르게 수렴하는 함수열·함수항 급수의 경로 적분을 다룹니다. 길이가 $0$인 경로도 있으므로 길이로 나누는 어림은 쓰지 않습니다.
