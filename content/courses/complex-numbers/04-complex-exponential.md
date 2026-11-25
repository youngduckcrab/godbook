---
title: 복소 지수함수
summary: 두 복소수의 합의 거듭제곱을 계승의 역수로 전개하는 보조정리를 증명하고, 계수가 1/n! 인 복소 멱급수로 복소 지수함수를 정의한 뒤 덧셈 법칙, 절댓값, 연속을 증명한다.
concepts:
  - factorial-form-of-binomial-expansion
  - complex-exponential-function
  - addition-law-of-complex-exponential
  - continuity-of-complex-exponential
  - complex-exponential-examples
---

이 단원은 이 강의 3단원 "복소 급수와 복소 멱급수"를 먼저 읽었다고 가정합니다. 3단원은 복소 멱급수와 그 수렴 반지름을 다루고, 계수가 $1/n!$인 복소 멱급수가 모든 복소수에서 절대수렴한다는 것을 [[complex-series-examples|복소 급수의 예]]에서 보였습니다. 또 두 복소 급수의 [[cauchy-product-of-complex-series|코시 곱]]은, $n$에서의 값이 한쪽 수열의 $k$번째 항과 다른 쪽 수열의 $n - k$번째 항의 곱을 $k = 0$부터 $n$까지 더한 것이었습니다. 이 단원은 그 둘로 복소 지수함수를 만듭니다.

[[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]는 $(z + w)^n / n!$이 $z^k / k!$와 $w^{n-k} / (n-k)!$의 곱을 $k = 0$부터 $n$까지 더한 것과 같다는 보조정리입니다. 이항정리는 흔히 계수를 이항계수라는 이름으로 적지만, 이 항목은 그 이름을 쓰지 않고 [[factorial-from-zero|0부터의 계승]]의 역수로 적습니다. 오른쪽은 두 수열 $(z^k / k!)_{k \ge 0}$과 $(w^k / k!)_{k \ge 0}$의 코시 곱의 $n$에서의 값과 같은 꼴이어서, 덧셈 법칙의 증명에서 쓰입니다.

[[complex-exponential-function|복소 지수함수]]는 실수의 지수함수를 나타내는 $x^n / n!$의 급수에서 $x$ 자리에 복소수를 넣어 정의합니다. 실수의 지수함수는 리만 적분 강의에서 자연로그의 역함수로 정의했으므로, 실수를 옮긴 복소수에서 두 정의의 값이 같다는 것을 급수와 멱급수 강의의 [[exponential-power-series|지수함수의 멱급수]]로 증명해 같은 기호 $\exp$에 두 값이 생기지 않게 합니다. 켤레와 실수부·허수부의 급수도 이 항목에서 급수의 성질로 얻습니다.

[[addition-law-of-complex-exponential|덧셈 법칙]] $\exp(z + w) = \exp(z)\exp(w)$는 두 지수 급수의 코시 곱에 앞의 보조정리를 쓴 것입니다. 여기서 $\exp$의 값이 $0$이 아니라는 것, 정수배, 순허수 $iy$에서의 값의 절댓값이 $1$이라는 것, $|\exp(z)| = \exp(\operatorname{Re} z)$가 나옵니다. [[continuity-of-complex-exponential|복소 지수함수의 연속]]은 덧셈 법칙과 실수 지수함수의 어림으로 $\varepsilon$–$\delta$를 직접 보이고, [[complex-exponential-examples|복소 지수함수의 예]]는 덧셈 법칙을 한 번씩 써서 다른 중심에서의 전개와 몇 가지 등식을 얻습니다.
