---
title: 삼각함수와 π
summary: 실수 y 에서 코사인과 사인을 exp(iy) 의 실수부와 허수부로 정의하고, 복소 지수함수의 덧셈 법칙으로 덧셈정리와 배각·3배각 공식을, 복소 지수함수의 급수로 두 함수의 멱급수를, 항별 미분으로 도함수를 얻은 뒤, 테일러 정리로 cos 1, cos 2 와 (0, 2] 위의 sin 의 부호를 어림한다.
concepts:
  - cosine-and-sine
  - trigonometric-addition-formulas
  - power-series-of-cosine-and-sine
  - derivatives-of-cosine-and-sine
---

이 단원은 이 강의 4단원 "복소 지수함수"를 먼저 읽었다고 가정합니다. 4단원은 [[complex-exponential-function|복소 지수함수]]를 계수가 $1/n!$인 복소 멱급수로 정의하고, [[addition-law-of-complex-exponential|덧셈 법칙]] $\exp(z + w) = \exp(z)\exp(w)$와 실수 $y$에서 $|\exp(iy)| = 1$이라는 것을 증명했습니다. 이 단원은 그 둘에서 코사인과 사인을 만듭니다. 앞 강의들은 코사인과 사인을 쓰지 않았으므로 여기서 처음 정의합니다. 항목들은 실수의 함수에 관한 것이어서 분야는 실해석입니다.

[[cosine-and-sine|코사인과 사인]]은 실수 $y$에서 $\cos y$와 $\sin y$를 $\exp(iy)$의 실수부와 허수부로 정의합니다. 그러면 오일러 공식 $\exp(iy) = \cos y + i \sin y$는 정의를 다시 쓴 것이 되고, 제곱의 합이 $1$이라는 것은 $|\exp(iy)| = 1$을 좌표로 적은 것이 됩니다. 이 정의는 $y$를 각도나 곡선의 길이로 해석하지 않습니다. 이 강의는 곡선의 길이를 다루지 않으므로, $y$는 $\exp(iy)$를 정하는 실수로만 씁니다.

[[trigonometric-addition-formulas|삼각함수의 덧셈정리]]는 $\exp(i(x + y)) = \exp(ix)\exp(iy)$의 양쪽의 실수부와 허수부를 복소수의 곱셈의 정의로 비교한 것입니다. 배각 공식과 3배각 공식은 여기에 같은 수를 넣어 얻습니다. [[power-series-of-cosine-and-sine|코사인과 사인의 멱급수]]는 복소 지수함수의 급수를 실수부와 허수부로 나눈 것이고, 두 멱급수가 모든 실수에서 수렴한다는 것은 수렴 반지름을 따로 계산하지 않고 얻습니다. 두 항목은 서로를 쓰지 않고, 이 단원의 항목 가운데서는 첫 항목만 씁니다.

[[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]]는 멱급수의 항별 미분으로 $\cos' = -\sin$, $\sin' = \cos$를 얻으므로 멱급수의 항목 뒤에 둡니다. 고계 도함수가 네 번마다 되풀이된다는 것과 급수와 멱급수 강의의 [[taylor-theorem|테일러 정리]]로, $1 - x^2/2 \le \cos x \le 1 - x^2/2 + x^4/24$ 같은 어림과 $\cos 1 \ge 1/2$, $\cos 2 \le -1/3$, $0 < x \le 2$에서 $\sin x > 0$이라는 수치를 확정합니다. 같은 항목에서 평균값 정리로 $|\cos x - \cos y| \le |x - y|$, $|\sin x - \sin y| \le |x - y|$도 얻습니다.
