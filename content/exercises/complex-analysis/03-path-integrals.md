---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제, source/exercises-chap4.ptx:4 — 문제 '나선 경로의 길이'와 같은 종류(출처는 선분·원호 등 여러 경로의 길이를 구하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제, source/exercises-chap4.ptx:280 — 문제 '선분을 따른 $(\\overline{z})^2$ 의 적분'과 같은 종류(출처는 2 에서 3 + i 로 가는 선분 위의 |z|² 의 적분을 구하게 한다), 문제 'C¹ 경로를 따른 $z^n$ 의 적분'의 2와 같은 종류(출처는 1 에서 i 를 거쳐 −1 로 가는 반원 위의 z 의 적분을 구하게 한다), 문제 '경로를 따른 지수함수의 적분'과 같은 대상(출처는 0 에서 z₀ 로 가는 선분 위의 exp(z) 의 적분을 구하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제, source/exercises-chap4.ptx:415 — 문제 'C¹ 경로를 따른 $z^n$ 의 적분'과 같은 결론(출처는 −1 이 아닌 모든 정수 n 에서 닫힌 경로를 따른 zⁿ 의 적분이 0 임을 보이게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제, source/exercises-chap4.ptx:236 — 문제 '경로를 따른 지수함수의 적분'과 같은 대상(출처는 선분, 원, 포물선을 따른 exp(3z) 의 적분을 구하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "7장 연습문제, source/exercises-chap7.ptx:396 — 문제 '선분 위에서 점별 수렴하지만 경로 적분의 극한이 다른 열'과 같은 발상(출처는 fₙ(x) = n²x e^{−nx} 가 0 으로 점별 수렴하지만 [0, 1] 위의 적분의 극한이 0 이 아님을 보이게 한다)"
added: 2026-11-27
---

:::exercise[나선 경로의 길이]
$c_0 = -1 + i$로 두고, 양의 실수 $T$에 대하여 $\gamma(t) = \exp(c_0 t)$로 정한 $\gamma : [0, T] \to \mathbb{C}$를 생각한다(여기서 $c_0 t$는 $c_0\,\iota(t)$이다).

1. $\gamma$가 C¹ 경로이고 모든 $t$에서 $|\gamma'(t)| = \sqrt{2}\exp(-t)$임을 보여라.
2. $\ell(\gamma) = \sqrt{2}\,\bigl(1 - \exp(-T)\bigr)$임을 보이고, $\ell(\gamma) < \sqrt{2}$임을 보여라.
3. $T = 2\pi$일 때 $\ell(\gamma) = \sqrt{2}\,|\gamma(2\pi) - \gamma(0)|$임을 보여라.
:::

:::solution
아래에서 "미분"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], "덧셈 법칙"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "복소 지수함수"는 [[complex-exponential-function|복소 지수함수]]의 번호이다.

**(1)** 미분의 (8)에 의해 $t$에서의 값이 $\exp(c_0 t)$인 함수 $\mathbb{R} \to \mathbb{C}$는 연속미분가능하고 그 도함수의 값은 $c_0 \exp(c_0 t)$이며, 그것을 $[0, T]$로 제한한 $\gamma$도 연속미분가능하고 도함수의 값이 같다. 따라서 $\gamma$는 [[path-in-the-complex-plane|경로]]의 뜻으로 $[0, T]$ 위의 C¹ 경로이고 $\gamma'(t) = c_0 \exp(c_0 t)$이다. 절댓값의 (1)에 의해 $|c_0|^2 = (-1)^2 + 1^2 = 2$이고 $0 \le |c_0|$이므로 $|c_0| = \sqrt{2}$이다([[square-root-exists|제곱근의 존재]]의 (1)의 유일성). [[complex-field|복소수체]]의 (2)의 (ii)에 의해 $\operatorname{Re}(\iota(t) c_0) = t \operatorname{Re} c_0 = -t$이므로, 절댓값의 (3)과 덧셈 법칙의 (6)에 의해
$$
\begin{aligned}
|\gamma'(t)| &= |c_0|\,|\exp(c_0 t)| \\
&= \sqrt{2}\exp(-t)
\end{aligned}
$$
이다.

**(2)** [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 정의에 의해 $\ell(\gamma) = \int_0^T \sqrt{2}\exp(-t)\,dt$이다. 복소 지수함수의 (2)와 복소수체의 (2)에 의해 $\iota\bigl(\sqrt{2}\exp(-t)\bigr) = \iota(\sqrt{2})\exp(-\iota(t)) = \iota(\sqrt{2})\exp((-1)t)$이므로, [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (2)와 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1), [[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]의 (4)의 (i)($c_0$ 자리에 $-1$)에 의해
$$
\begin{aligned}
\iota(\ell(\gamma)) &= \iota(\sqrt{2}) \int_0^T \exp((-1)t)\,dt \\
&= \iota(\sqrt{2})\,\frac{\exp(-T) - \exp(0)}{-1} \\
&= \iota\bigl(\sqrt{2}\,(1 - \exp(-T))\bigr)
\end{aligned}
$$
이다(복소 지수함수의 (2), (3)). $\iota$는 단사이므로 $\ell(\gamma) = \sqrt{2}\,(1 - \exp(-T))$이다. [[exponential-function|실수의 지수함수]]의 (1)에 의해 $\exp(-T)$는 양수이므로 $\ell(\gamma) < \sqrt{2}$이다.

**(3)** 덧셈 법칙의 (1)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\gamma(2\pi) = \exp(-2\pi + 2\pi i) = \exp(-2\pi)\exp(2\pi i) = \exp(-2\pi)$이고, 복소 지수함수의 (2)에 의해 이것은 실수 $\exp(-2\pi)$를 옮긴 것이다. $\gamma(0) = \exp(0) = 1$이다. 실수의 지수함수의 (2)에 의해 $\exp(-2\pi) < \exp(0) = 1$이므로, 절댓값의 (5)와 [[absolute-value|절댓값]]의 (1)에 의해 $|\gamma(2\pi) - \gamma(0)| = |\exp(-2\pi) - 1| = 1 - \exp(-2\pi)$이다. (2)에 의해 $\ell(\gamma) = \sqrt{2}\,(1 - \exp(-2\pi))$이므로 등식이 성립한다. 이것은 경로의 길이와 적분의 어림의 (1)의 $|\gamma(b) - \gamma(a)| \le \ell(\gamma)$와도 맞는다.
:::

:::exercise[선분을 따른 $(\overline{z})^2$ 의 적분]
$f(z) = (\overline{z})^2$으로 정한 $f : \mathbb{C} \to \mathbb{C}$를 생각한다.

1. $\int_{\sigma_{0,1+i}} f = \dfrac{2}{3} - \dfrac{2}{3}i$임을 보여라.
2. $\sigma_{0,1+i}$의 상의 모든 점 $z$에서 $|f(z)| \le 2$임을 보이고, [[length-of-path-and-ml-inequality|ML 부등식]]이 주는 어림을 1의 값의 절댓값과 비교하라.
3. $\int_{\sigma_{1+i,0}} f$를 구하라.
:::

:::solution
아래에서 "켤레"는 [[complex-conjugate|켤레복소수]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이고, $\mathbb{C}$ 안의 계산은 [[complex-field|복소수체]]의 (1)의 체의 계산과 (5)의 $i^2 = -1$로 한다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)와 (3)에 의해 $f$는 연속이므로, [[path-integral|경로 적분]]의 정의에 의해 아래 적분들이 정해진다.

**(1)** [[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{0,1+i}(t) = \iota(t)(1 + i)$($0 \le t \le 1$)이고 $\sigma_{0,1+i}'(t) = 1 + i$이다. 켤레의 (2), (4), (1)에 의해 $\overline{\sigma_{0,1+i}(t)} = \iota(t)(1 - i)$이고, $(1 - i)^2 = 1 - 2i + i^2 = -2i$이므로
$$
\begin{aligned}
&f(\sigma_{0,1+i}(t))\,\sigma_{0,1+i}'(t) \\
&= \iota(t)^2 (-2i)(1 + i) \\
&= \iota(t^2)\,(2 - 2i)
\end{aligned}
$$
이다([[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i), (5)). [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)에 의해 $\int_0^1 t^2\,dt = 1/3$이므로, [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (2)와 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)에 의해
$$
\begin{aligned}
\int_{\sigma_{0,1+i}} f &= (2 - 2i) \int_0^1 \iota(t^2)\,dt \\
&= \frac{2}{3} - \frac{2}{3} i
\end{aligned}
$$
이다.

**(2)** 상의 점은 $z = \iota(t)(1 + i)$($0 \le t \le 1$) 꼴이다. 복소수의 거듭제곱의 (4)와 절댓값의 (2), (3), (5), (1)에 의해 $|f(z)| = |\overline{z}|^2 = |z|^2 = t^2 \cdot 2$이고, $0 \le t \le 1$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $t^2 \le 1$, 곧 $|f(z)| \le 2$이다. [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (1)에 의해 $\ell(\sigma_{0,1+i}) = |1 + i| = \sqrt{2}$이고, 같은 항목의 (2)의 (i)을 $M = 2$에 쓰면 $\bigl|\int_{\sigma_{0,1+i}} f\bigr| \le 2\sqrt{2}$이다. 1의 값의 절댓값은 절댓값의 (1)에 의해 $\sqrt{4/9 + 4/9} = 2\sqrt{2}/3$이므로 어림의 $1/3$이다.

**(3)** 경로 적분의 (2)에 의해 $\int_{\sigma_{1+i,0}} f = -\int_{\sigma_{0,1+i}} f = -\dfrac{2}{3} + \dfrac{2}{3} i$이다.
:::

:::exercise[C¹ 경로를 따른 $z^n$ 의 적분]
1. $n$을 $0$ 이상인 정수, $\gamma : [a, b] \to \mathbb{C}$를 C¹ 경로라 하자. $z^n$의 함수 $\mathbb{C} \to \mathbb{C}$에 대하여
   $$
   \int_\gamma z^n\,dz = \frac{\gamma(b)^{n+1} - \gamma(a)^{n+1}}{n + 1}
   $$
   임을 보여라. 특히 $\gamma$가 닫힌 경로이면 이 적분은 $0$이다.
2. $\gamma(t) = \exp(it)$($0 \le t \le \pi$)로 정한 $\gamma : [0, \pi] \to \mathbb{C}$에서 $\int_\gamma z^2\,dz$를 1로 구하고, 정의대로 $[0, \pi]$ 위의 적분으로 계산한 값과 맞는지 확인하라.
:::

:::solution
아래에서 "미분"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이다.

**(1)** $0$ 이상인 정수 $k$에서 $G_k(t) = \gamma(t)^k$로 정한 $G_k : [a, b] \to \mathbb{C}$를 생각하고, "$G_{k+1}$은 연속미분가능하고 모든 $t$에서 $G_{k+1}'(t) = (k + 1)\gamma(t)^k \gamma'(t)$이다"를 $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. 거듭제곱의 (1)에 의해 $G_1 = \gamma$이고 $\gamma(t)^0 = 1$이므로 $k = 0$이면 참이다. $k$에서 참이라 하자. 거듭제곱의 (1)에 의해 $G_{k+2} = G_{k+1}\gamma$이고, 미분의 (5)의 곱의 법칙에 의해 $G_{k+2}$는 연속미분가능하며
$$
\begin{aligned}
G_{k+2}'(t) &= G_{k+1}'(t)\,\gamma(t) \\
&\quad + G_{k+1}(t)\,\gamma'(t) \\
&= (k + 1)\gamma(t)^{k+1}\gamma'(t) \\
&\quad + \gamma(t)^{k+1}\gamma'(t) \\
&= (k + 2)\gamma(t)^{k+1}\gamma'(t)
\end{aligned}
$$
이므로 $k + 1$에서도 참이다.

$z^n$의 함수는 [[complex-polynomial-function|복소 다항함수]]의 (5)에 의해 연속이므로 $\gamma$의 상 위에서 연속이고, [[path-integral|경로 적분]]의 정의에 의해 $\int_\gamma z^n\,dz = \int_a^b \gamma(t)^n \gamma'(t)\,dt$이다. $H = \iota\bigl((n + 1)^{-1}\bigr) G_{n+1}$로 두면 미분의 (4)에 의해 $H$는 연속미분가능하고 $H'(t) = \gamma(t)^n\gamma'(t)$이다. [[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]의 (1)에 의해
$$
\begin{aligned}
&\int_a^b \gamma(t)^n\gamma'(t)\,dt = H(b) - H(a) \\
&= \frac{\gamma(b)^{n+1} - \gamma(a)^{n+1}}{n + 1}
\end{aligned}
$$
이다. $\gamma(a) = \gamma(b)$이면 이 값은 $0$이다.

**(2)** 미분의 (8)과 (2)에 의해 $\gamma$는 C¹ 경로이고 $\gamma'(t) = i\exp(it)$이다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)과 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\gamma(0) = 1$, $\gamma(\pi) = \exp(i\pi) = -1$이므로, 1에 의해
$$
\int_\gamma z^2\,dz = \frac{(-1)^3 - 1^3}{3} = -\frac{2}{3}
$$
이다. 정의대로 계산하면, [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (3)에 의해 $\exp(it)^2 \exp(it) = \exp(it)^3 = \exp(3it)$이므로(거듭제곱의 (1)) $\int_\gamma z^2\,dz = \int_0^\pi i\exp(3it)\,dt$이다. [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)과 기본정리의 (4)의 (i)($c_0 = 3i$)에 의해 이것은
$$
\begin{aligned}
&i \cdot \frac{\exp(3i\pi) - \exp(0)}{3i} \\
&= \frac{-1 - 1}{3} = -\frac{2}{3}
\end{aligned}
$$
이다. 여기서 덧셈 법칙의 (3)에 의해 $\exp(3i\pi) = \exp(i\pi)^3 = (-1)^3 = -1$이다. 두 값이 맞는다.
:::

:::exercise[적분의 절댓값 부등식에서 등호가 성립하는 경우]
$a < b$이고 $g : [a, b] \to \mathbb{C}$가 연속이라 하자.

1. $\bigl|\int_a^b g\bigr| = \int_a^b |g|$이면, 절댓값이 $1$인 복소수 $w$가 있어 모든 $t \in [a, b]$에서 $g(t) = w\,\iota(|g(t)|)$임을 보여라.
2. 거꾸로 그런 $w$가 있으면 $\bigl|\int_a^b g\bigr| = \int_a^b |g|$임을 보여라.
3. $g(t) = 1 + ti$($0 \le t \le 1$)이면 $\bigl|\int_0^1 g\bigr| < \int_0^1 |g|$임을 1로 보여라.
:::

:::solution
아래에서 "적분"은 [[integral-of-complex-valued-function|복소수값 함수의 적분]], "성질"은 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다. 적분의 (3)에 의해 $g$는 적분가능하고, 성질의 (2)에 의해 $|g|$도 적분가능하다. $I = \int_a^b g$로 둔다.

**(1)** *$I = 0$인 경우.* $\int_a^b |g| = |I| = 0$이다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)에 의해 $|g|$는 위상의 뜻으로 연속이고, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 [[continuous-function]]의 뜻으로도 연속이다. $0 \le |g(t)|$이므로 성질의 (5)에 의해 모든 $t$에서 $|g(t)| = 0$이고, 절댓값의 (1)에 의해 $g(t) = 0 = 1 \cdot \iota(|g(t)|)$이다. $w = 1$로 두면 된다.

*$I \ne 0$인 경우.* $w = \iota(|I|^{-1})\, I$로 두면 절댓값의 (3), (5)에 의해 $|w| = |I|^{-1}|I| = 1$이다. [[complex-conjugate|켤레복소수]]의 (2), (4)와 절댓값의 (2)에 의해 $\overline{w}\, I = \iota(|I|^{-1})\,\overline{I}\, I = \iota(|I|^{-1})\,\iota(|I|^2) = \iota(|I|)$이다.

$h(t) = |g(t)| - \operatorname{Re}\bigl(\overline{w}\, g(t)\bigr)$로 정한 실함수 $h : [a, b] \to \mathbb{R}$를 생각하자. 복소수 연산의 연속의 (3)과 (1)에 의해 $|g|$와 $\operatorname{Re}(\overline{w} g)$는 위상의 뜻으로 연속이고, 해석학 입문의 연속과 같다의 (3)에 의해 [[continuous-function]]의 뜻으로도 연속이며, [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 그 차 $h$도 연속이다. 절댓값의 (6), (3), (2)에 의해 $\operatorname{Re}(\overline{w} g(t)) \le |\overline{w}|\,|g(t)| = |g(t)|$이므로 모든 $t$에서 $0 \le h(t)$이다. 성질의 (1)에 의해 $\int_a^b \overline{w} g = \overline{w} I = \iota(|I|)$이고, 적분의 (1)에 의해 $\int_a^b \operatorname{Re}(\overline{w} g) = \operatorname{Re}\,\iota(|I|) = |I|$이다. [[linearity-of-the-integral|적분의 선형성]]의 (4)와 가정에 의해
$$
\int_a^b h = \int_a^b |g| - |I| = 0
$$
이다. 성질의 (5)에 의해 모든 $t$에서 $h(t) = 0$이다.

$t$를 고정하고 $\zeta = \overline{w}\, g(t)$로 두면 $\operatorname{Re}\zeta = |g(t)| = |\zeta|$이다. 절댓값의 (1)에 의해 $|\zeta|^2 = (\operatorname{Re}\zeta)^2 + (\operatorname{Im}\zeta)^2$이므로 $(\operatorname{Im}\zeta)^2 = 0$이고 $\operatorname{Im}\zeta = 0$이다. [[complex-field|복소수체]]의 (2)의 (iii)에 의해 $\zeta = \iota(\operatorname{Re}\zeta) = \iota(|g(t)|)$이다. 절댓값의 (2)에 의해 $w\overline{w} = \iota(|w|^2) = 1$이므로 $g(t) = w\overline{w}\, g(t) = w\,\iota(|g(t)|)$이다.

**(2)** 모든 $t$에서 $g(t) = w\,\iota(|g(t)|)$이면, 성질의 (1)과 적분의 (2)에 의해 $\int_a^b g = w \int_a^b \iota \circ |g| = w\,\iota\bigl(\int_a^b |g|\bigr)$이다. 성질의 (3)에 의해 $0 \le |\int_a^b g| \le \int_a^b |g|$이므로 $\int_a^b |g|$는 $0$ 이상이고, 절댓값의 (3), (5)와 [[absolute-value|절댓값]]의 (1)에 의해 $\bigl|\int_a^b g\bigr| = |w|\,\bigl|\int_a^b |g|\bigr| = \int_a^b |g|$이다.

**(3)** $g$는 연속이다([[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (9)와 (1)). 성질의 (3)에 의해 $|\int_0^1 g| \le \int_0^1 |g|$이므로 등호가 성립하지 않음을 보이면 된다. 등호가 성립한다면 1의 $w$가 있다. $t = 0$에서 $1 = w\,\iota(|1|) = w$이므로 $w = 1$이고, $t = 1$에서 $1 + i = \iota(|1 + i|)$가 되어 허수부를 비교하면 $1 = 0$이다(복소수체의 (2)의 (ii), (4)). 모순이므로 $|\int_0^1 g| < \int_0^1 |g|$이다.
:::

:::exercise[경로를 따른 지수함수의 적분]
1. $\gamma : [a, b] \to \mathbb{C}$가 C¹ 경로이면
   $$
   \begin{aligned}
   &\int_\gamma \exp(z)\,dz \\
   &= \exp(\gamma(b)) - \exp(\gamma(a))
   \end{aligned}
   $$
   임을, 문제 3과 [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (4)의 항별 경로 적분으로 보여라. 특히 닫힌 경로이면 이 적분은 $0$이다.
2. $\int_{\gamma_{0,1}} \exp(z)\,dz$와, 문제 3의 2의 반원 경로를 따른 $\int \exp(z)\,dz$를 구하라.
:::

:::solution
아래에서 "길이"는 [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]], "지수함수"는 [[complex-exponential-function|복소 지수함수]], "급수"는 [[complex-series|복소 급수]]의 번호이다.

**(1)** $K$를 $\gamma$의 상이라 하자. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 항등함수는 연속이므로 [[path-integral|경로 적분]]의 머리말에 의해 $K$ 위에서 연속이고, 길이의 (2)의 (ii)에 의해 $K$의 모든 $z$에서 $|z| \le R$인 실수 $R$이 있다. $K$는 공집합이 아니므로([[path-in-the-complex-plane|경로]]의 (1)) $0 \le R$이다.

$0$ 이상인 정수 $n$에서 $f_n(z) = z^n / n!$로 정한 $f_n : \mathbb{C} \to \mathbb{C}$는 복소 다항함수이므로 연속이고([[complex-polynomial-function|복소 다항함수]]의 (5)) $K$ 위에서 연속이다. $M_n = R^n / n!$로 두자. $z \in K$이면 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4), [[modulus-of-complex-number|복소수의 절댓값]]의 (3), (5)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|f_n(z)| = |z|^n / n! \le M_n$이다. 지수함수의 (1)을 $\iota(R)$에 쓰면 항이 $|\iota(R)^n / n!| = M_n$인 급수가 수렴한다. 길이의 (4)의 (ii)를 0부터 번호가 붙은 열에 쓰면, $T(z) = \sum_{n=0}^{\infty} z^n/n!$로 정한 $T : K \to \mathbb{C}$에 대하여 $\sum_{n=0}^{\infty} \int_\gamma f_n = \int_\gamma T$이다. 지수함수의 정의에 의해 $K$의 모든 점에서 $T(z) = \exp(z)$이므로, 경로 적분의 (1)에 의해 $\int_\gamma T = \int_\gamma \exp(z)\,dz$이다.

$\alpha = \gamma(a)$, $\beta = \gamma(b)$로 두자. 경로 적분의 (1)과 문제 3, [[factorial-from-zero|0부터의 계승]]의 (1)에 의해
$$
\begin{aligned}
\int_\gamma f_n &= \frac{1}{n!}\cdot\frac{\beta^{n+1} - \alpha^{n+1}}{n + 1} \\
&= \frac{\beta^{n+1}}{(n + 1)!} - \frac{\alpha^{n+1}}{(n + 1)!}
\end{aligned}
$$
이다. 복소수 $\zeta$에 대하여, $n \ge 0$에서 정해진 항 $\zeta^{n+1}/(n + 1)!$을 1부터 다시 번호 붙인 수열은 $j$번째 항이 $\zeta^j / j!$인 수열이고, 이것은 $n \ge 1$에서 정해진 항 $\zeta^n / n!$을 1부터 다시 번호 붙인 수열과 같다(급수의 머리말). 지수함수의 (5)에 의해 그 급수는 수렴하고 합은 $\exp(\zeta) - 1$이므로 $\sum_{n=0}^{\infty} \zeta^{n+1}/(n + 1)! = \exp(\zeta) - 1$이다. 급수의 (5)의 선형성에 의해
$$
\begin{aligned}
&\int_\gamma \exp(z)\,dz \\
&= \sum_{n=0}^{\infty} \Bigl(\frac{\beta^{n+1}}{(n + 1)!} - \frac{\alpha^{n+1}}{(n + 1)!}\Bigr) \\
&= (\exp(\beta) - 1) - (\exp(\alpha) - 1) \\
&= \exp(\beta) - \exp(\alpha)
\end{aligned}
$$
이다. $\alpha = \beta$이면 이 값은 $0$이다.

**(2)** 경로의 (3)에 의해 $\gamma_{0,1}$은 닫힌 C¹ 경로이므로 $\int_{\gamma_{0,1}} \exp(z)\,dz = 0$이다. 문제 3의 2의 반원 경로는 시작점이 $1$, 끝점이 $-1$인 C¹ 경로이므로 1에 의해 적분은 $\exp(-1) - \exp(1)$이고, 지수함수의 (2)에 의해 이것은 실수 $\exp(-1) - \exp(1)$을 옮긴 것이다.
:::

:::exercise[선분 위에서 점별 수렴하지만 경로 적분의 극한이 다른 열]
자연수 $n$에 대하여 $f_n(z) = (n + 1)(n + 2)(\operatorname{Re} z)^n (1 - \operatorname{Re} z)$(값은 실수인 복소수로 읽는다)로 정한 $f_n : \mathbb{C} \to \mathbb{C}$를 생각하고, $K$를 $\sigma_{0,1}$의 상이라 하자.

1. 모든 $n$에서 $\int_{\sigma_{0,1}} f_n = 1$임을 보여라.
2. $K$의 모든 점 $z$에서 $n$번째 항이 $f_n(z)$인 복소수열이 $0$으로 수렴함을 보여라.
3. $(f_n)$이 $K$ 위에서 영함수로 고르게 수렴하지 않음을 보이고, 영함수의 $\sigma_{0,1}$을 따른 적분이 $n$번째 항이 $\int_{\sigma_{0,1}} f_n$인 수열의 극한과 다름을 확인하라.
:::

:::solution
**(1)** [[complex-conjugate|켤레복소수]]의 (3)에 의해 $\iota(\operatorname{Re} z) = (z + \overline{z})/2$이므로, $f_n(z)$는 $(z + \overline{z})/2$의 거듭제곱과 $1 - (z + \overline{z})/2$와 상수의 곱이다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 $f_n$은 연속이고, $K$ 위에서 연속이다. [[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{0,1}(t) = \iota(t)$이고 $\sigma_{0,1}'(t) = 1$이며, [[complex-field|복소수체]]의 (2)의 (ii)에 의해 $\operatorname{Re}\,\iota(t) = t$이므로 $f_n(\iota(t)) = \iota\bigl((n + 1)(n + 2)(t^n - t^{n+1})\bigr)$이다. [[path-integral|경로 적분]]의 정의와 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (2)에 의해
$$
\begin{aligned}
&\int_{\sigma_{0,1}} f_n \\
&= \iota\Bigl(\int_0^1 (n + 1)(n + 2) \\
&\qquad \cdot (t^n - t^{n+1})\,dt\Bigr)
\end{aligned}
$$
이다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 안쪽의 적분은 $(n + 1)(n + 2)\bigl(\tfrac{1}{n + 1} - \tfrac{1}{n + 2}\bigr) = (n + 2) - (n + 1) = 1$이다.

**(2)** $K$의 점은 $z = \iota(t)$($0 \le t \le 1$) 꼴이고, $f_n(z) = \iota(x_n)$, $x_n = (n + 1)(n + 2)\,t^n (1 - t)$이다. [[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)에 의해 실수열 $(x_n)$이 $0$으로 수렴함을 보이면 된다(허수부는 모두 $0$이다).

$t = 0$이면 $n \ge 1$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $0^n = 0$이고, $t = 1$이면 $1 - t = 0$이므로, 두 경우 모두 $x_n = 0$이고 [[basic-limits|기본적인 극한]]의 (1)에 의해 $(x_n)$은 $0$으로 수렴한다.

$0 < t < 1$이면 실수의 거듭제곱의 (6)의 (i)에 의해 모든 $x_n$이 양수이고
$$
\begin{aligned}
\frac{|x_{n+1}|}{|x_n|} &= \frac{(n + 2)(n + 3)\,t^{n+1}}{(n + 1)(n + 2)\,t^n} \\
&= t\,\Bigl(1 + \frac{2}{n + 1}\Bigr)
\end{aligned}
$$
이다. $0 < 2/(n + 1) < 2/n$이고, 기본적인 극한의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $2/n$은 $0$으로 수렴하므로 [[squeeze-lemma|조임 정리]]의 (1)에 의해 $2/(n + 1)$도 $0$으로 수렴한다. 극한의 사칙연산의 (5)를 두 번 쓰면 이 비는 $t$로 수렴하고, $t < 1$이므로 [[ratio-test-for-sequences|수열의 비 판정법]]의 (1)에 의해 $(x_n)$은 $0$으로 수렴한다.

**(3)** $f$를 영함수 $\mathbb{C} \to \mathbb{C}$라 하자. $(f_n)$이 $K$ 위에서 $f|_K$로 고르게 수렴한다면, [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (3)에 의해 $n$번째 항이 $\int_{\sigma_{0,1}} f_n$인 복소수열은 $\int_{\sigma_{0,1}} f$로 수렴하고, 경로 적분의 (4)($c = 0$)에 의해 $\int_{\sigma_{0,1}} f = 0$이다. 그런데 1에 의해 이 수열은 모든 항이 $1$인 상수 수열이므로 복소수열의 수렴의 (2)에 의해 $1$로 수렴하고, 극한은 하나뿐이므로 $1 = 0$이 되어 모순이다. 따라서 $(f_n)$은 $K$ 위에서 영함수로 고르게 수렴하지 않는다. 2에 의해 $K$의 각 점에서의 극한은 영함수의 값과 같지만, 그 영함수의 적분 $0$은 적분의 수열의 극한 $1$과 다르다.
:::
