---
title: 경로 적분의 예
title_en: Examples of Path Integrals
aliases: [경로에 따라 다른 경로 적분, 경로에 상관없는 경로 적분, path dependence of path integrals, path independence]
kind: proposition
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 끝점이 같은 두 길에서 경로 적분이 다른 예로 (Im z)² 와 반원 위의 1/z 를 계산해 그 함수들이 복소 원시함수를 갖지 않는다는 것을 보이고, 복소 원시함수가 있는 다항함수와 z⁻² 에서는 끝점의 값만으로 적분이 정해지는 것을 계산한다.
requires: [real-number-arithmetic, interval, antiderivative-and-integral-of-power, linearity-of-the-integral, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, continuous-map, composition-of-continuous-maps, continuity-of-complex-operations, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, definition-of-pi, complex-derivative, complex-derivative-rules, derivative-of-complex-valued-function, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, path-in-the-complex-plane, path-integral, primitive-and-path-integral, integrals-over-circles]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Definition and Basic Properties 절의 Example firstintexample, source/sec_intdef.ptx:72–153; Antiderivatives 절의 Theorem antiderthm 뒤의 예와 Example ex_antiderivnotexist, source/sec_antiderivatives.ptx:107–118, 142–155; Antiderivatives Again 절의 경로에 상관없음에 관한 문단, source/sec_antiderivagain.ptx:122–153; 연습문제 source/exercises-chap4.ptx:128–182, 236–338, 528–557"
    checked: original
    note: "(1)은 출처 Example firstintexample(sec_intdef.ptx:72–153: 0 에서 1 + i 로 가는 선분, 포물선, 꺾인 길 위의 z̄² 의 적분이 서로 다르다)과 같은 발상(같은 끝점의 선분과 꺾인 길에서 적분이 다르다)이고, 출처가 그 예를 '경로에 상관없음은 특별한 경우이고 z̄² 는 원시함수가 없다'는 결론에 쓰는 것(sec_antiderivagain.ptx:142–153)과 같은 결론을 (Im z)² 에서 이끈다. (2)의 γ₊ 는 출처 연습문제 exercises-chap4.ptx:280–338 의 둘째 물음(f(z) = z 를 1 에서 i 를 지나 −1 로 가는 반원에서 적분하라)의 경로와 같고, 연습문제 exercises-chap4.ptx:528–557 은 단위원의 두 반쪽(−π/2 ≤ t ≤ π/2 와 π/2 ≤ t ≤ 3π/2)에서 z^i 를 적분하게 한다. (2)의 닫힌 경로열의 값 2πi 는 출처가 Example ex_antiderivnotexist(sec_antiderivatives.ptx:142–155)에서 쓰는 단위원 위의 ∫dz/z = 2πi 와 같은 값이다. (3)과 (4)는 출처 Theorem antiderthm 뒤의 예(sec_antiderivatives.ptx:107–118: z 의 원시함수 z²/2 로 firstintexample 의 세 경로의 적분이 모두 i)와 같은 발상(원시함수의 끝값의 차)이다. (3)의 선분 σ_{1,i} 는 출처 연습문제 exercises-chap4.ptx:236–279 의 첫 물음(exp(3z) 를 1 에서 i 로의 선분에서 적분하라)의 경로와 같다. 예시 '선분을 따라 직접 계산한 (3)의 값'은 firstintexample 의 첫 경로처럼 매개화로 직접 계산하는 발상이다. 반례 '원 경로에서 적분이 0 인 (Im z)²'는 출처 연습문제 ex_4_2(exercises-chap4.ptx:128–182)의 넷째 물음(C[0, 2] 위의 xy 의 적분이 0)과 같은 발상(정칙이 아닌 함수의 원 위의 적분이 0)이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 경로 적분 넷을 원시함수로 다시 계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 거듭제곱(음의 정수 지수는 $0$이 아닌 복소수에만)은 [[power-of-a-complex-number]], 복소 지수함수는 [[complex-exponential-function]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다. C¹ 경로, 시작점, 끝점, 상, 선분 경로 $\sigma_{z,w}$, 뒤집은 경로 $\gamma^-$, 경로열과 닫힌 경로열은 [[path-in-the-complex-plane|경로]]의 것이고, 경로 적분은 [[path-integral|경로 적분]]의 것이며, 복소 원시함수는 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 것이다. 열린집합은 $(\mathbb{C}, d)$의 것이다.

1. ($(\operatorname{Im} z)^2$의 두 길) $f(z) = (\operatorname{Im} z)^2$, 곧 $f(z) = \iota\bigl((\operatorname{Im} z)^2\bigr)$으로 정한 $f : \mathbb{C} \to \mathbb{C}$는 연속이고, 경로열 $\Gamma = (\sigma_{0,1+i}, \sigma_{1+i,2})$에 대하여
   $$
   \int_{\sigma_{0,2}} f = 0, \qquad \int_\Gamma f = \frac{2}{3}
   $$
   이다. 두 길은 시작점이 $0$이고 끝점이 $2$이다. 따라서 $G$가 $\sigma_{0,2}$, $\sigma_{0,1+i}$, $\sigma_{1+i,2}$의 상을 모두 포함하는 열린집합이면 $f|_G$는 $G$ 위에서 복소 원시함수를 갖지 않는다. 특히 $f$는 $\mathbb{C}$ 위에서 복소 원시함수를 갖지 않는다.
2. (반원을 따른 $1/z$) $\gamma_+(t) = \exp(it)$, $\gamma_-(t) = \exp(-it)$($0 \le t \le \pi$)로 정한 $\gamma_+, \gamma_- : [0, \pi] \to \mathbb{C}$는 시작점이 $1$이고 끝점이 $-1$인 C¹ 경로이며, 상은 $\mathbb{C} - \{0\}$의 부분집합이다. $z$에서의 값이 $\frac{1}{z}$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$에 대하여
   $$
   \begin{aligned}
   \int_{\gamma_+} \frac{1}{z}\,dz &= \pi i, \\
   \int_{\gamma_-} \frac{1}{z}\,dz &= -\pi i
   \end{aligned}
   $$
   이다. $(\gamma_+, (\gamma_-)^-)$는 시작점과 끝점이 $1$인 닫힌 경로열이고, 그것을 따른 이 함수의 적분은 $2\pi i$이다.
3. (복소 원시함수가 있는 다항함수) $p(z) = 3z^2 - 2iz$로 정한 $p : \mathbb{C} \to \mathbb{C}$에 대하여, $1$에서 $i$로 가는 모든 경로열 $\Lambda$에서 $\int_\Lambda p = -1 + i$이다. 특히 $\sigma_{1,i}$와, $\gamma(t) = \exp(it)$($0 \le t \le \pi/2$)로 정한 C¹ 경로 $\gamma : [0, \pi/2] \to \mathbb{C}$를 따른 적분이 모두 $-1 + i$이다.
4. (음의 지수) $z$에서의 값이 $z^{-2}$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$에 대하여 $\int_{\gamma_+} z^{-2}\,dz = \int_{\gamma_-} z^{-2}\,dz = 2$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$ are as in the entry on complex numbers; the field operations of $\mathbb{C}$, the map $\iota$ and the convention of writing real numbers in place of complex numbers are as in the entry on the complex field; powers (with negative integer exponents only for nonzero complex numbers) are as in the entry on powers of a complex number; the complex exponential is as in its entry; $\pi$ is as in the entry on the definition of pi. C¹ paths, initial and terminal points, images, the line segment paths $\sigma_{z,w}$, reversed paths $\gamma^-$, chains and closed chains are as in the entry on paths; path integrals are as in the entry on path integrals; complex primitives are as in the entry on complex primitives and path integrals. Open sets are those of $(\mathbb{C}, d)$.

1. (Two routes for $(\operatorname{Im} z)^2$) The function $f : \mathbb{C} \to \mathbb{C}$ given by $f(z) = (\operatorname{Im} z)^2$, that is, $f(z) = \iota\bigl((\operatorname{Im} z)^2\bigr)$, is continuous, and for the chain $\Gamma = (\sigma_{0,1+i}, \sigma_{1+i,2})$,
   $$
   \int_{\sigma_{0,2}} f = 0, \qquad \int_\Gamma f = \frac{2}{3}.
   $$
   Both routes have initial point $0$ and terminal point $2$. Hence, if $G$ is an open set containing the images of $\sigma_{0,2}$, $\sigma_{0,1+i}$ and $\sigma_{1+i,2}$, then $f|_G$ has no complex primitive on $G$. In particular, $f$ has no complex primitive on $\mathbb{C}$.
2. ($1/z$ along half circles) The functions $\gamma_+, \gamma_- : [0, \pi] \to \mathbb{C}$ given by $\gamma_+(t) = \exp(it)$ and $\gamma_-(t) = \exp(-it)$ ($0 \le t \le \pi$) are C¹ paths with initial point $1$ and terminal point $-1$, and their images are subsets of $\mathbb{C} - \{0\}$. For the function $\mathbb{C} - \{0\} \to \mathbb{C}$ whose value at $z$ is $\frac{1}{z}$,
   $$
   \begin{aligned}
   \int_{\gamma_+} \frac{1}{z}\,dz &= \pi i, \\
   \int_{\gamma_-} \frac{1}{z}\,dz &= -\pi i.
   \end{aligned}
   $$
   $(\gamma_+, (\gamma_-)^-)$ is a closed chain with initial and terminal point $1$, and the integral of this function along it is $2\pi i$.
3. (A polynomial function with a complex primitive) For $p : \mathbb{C} \to \mathbb{C}$ given by $p(z) = 3z^2 - 2iz$, $\int_\Lambda p = -1 + i$ for every chain $\Lambda$ from $1$ to $i$. In particular, the integrals along $\sigma_{1,i}$ and along the C¹ path $\gamma : [0, \pi/2] \to \mathbb{C}$ given by $\gamma(t) = \exp(it)$ ($0 \le t \le \pi/2$) are both $-1 + i$.
4. (A negative exponent) For the function $\mathbb{C} - \{0\} \to \mathbb{C}$ whose value at $z$ is $z^{-2}$, $\int_{\gamma_+} z^{-2}\,dz = \int_{\gamma_-} z^{-2}\,dz = 2$.
:::

## 직관

경로 적분은 끝점이 같아도 경로에 따라 값이 다를 수 있습니다. (1)과 (2)가 그런 예이고, 그런 함수는 두 길을 포함하는 열린집합 위에서 복소 원시함수를 가질 수 없습니다. 복소 원시함수가 있으면 적분이 끝점의 값의 차로 정해지기 때문입니다([[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 (2)). 거꾸로 (3)과 (4)의 함수에는 복소 원시함수가 있어서, 경로를 어떻게 잡든((4)에서는 $0$을 지나지 않는 경로) 계산은 끝점에 값을 넣는 것으로 끝납니다.

(2)의 $\frac{1}{z}$는 $\mathbb{C} - \{0\}$ 위에서 정칙인데도 끝점이 같은 두 반원에서 적분이 다릅니다. 위쪽 반원과 아래쪽 반원을 거꾸로 이으면 원점을 한 바퀴 도는 길이 되고, 그 적분 $2\pi i$는 [[integrals-over-circles|원 경로 위의 적분]]의 (3)이 원 경로 $\gamma_{0,1}$에 주는 값과 같습니다. 같은 $\mathbb{C} - \{0\}$ 위에서 $z^{-2}$는 복소 원시함수 $-z^{-1}$을 가지므로 (4)처럼 두 반원에서 값이 같습니다.

## 증명

:::idea
(1)과 (2)는 경로 적분의 정의에 매개화를 넣어 직접 계산하고, 값이 다르다는 것과 원시함수 항목의 (2)의 (iii)으로 원시함수가 없음을 얻는다. (3)과 (4)는 원시함수를 찾아 원시함수 항목의 (2)를 쓴다.
:::

:::hint
$\sigma_{0,1+i}(t) = t + ti$이고 $\sigma_{1+i,2}(t) = (1 + t) + (1 - t)i$입니다. 허수부만 보면 됩니다.
:::

:::hint
$\exp(it)^{-1} \cdot i\exp(it) = i$입니다. (3)의 원시함수는 $z^3 - iz^2$입니다.
:::

:::proof
"원시 (n)"은 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 번호이고, "미분 (n)"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], "적분 정의 (n)"은 [[integral-of-complex-valued-function|복소수값 함수의 적분]], "적분 성질 (n)"은 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 번호이다.

**1의 증명.** [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 $\operatorname{Im} : \mathbb{C} \to \mathbb{R}$와 $\iota$는 연속이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $z$에서의 값이 $\iota(\operatorname{Im} z)$인 함수는 연속이고, [[complex-field]]의 (2)에 의해 $f(z) = \iota(\operatorname{Im} z)\,\iota(\operatorname{Im} z)$이므로 복소수 연산의 연속의 (3)(곱)에 의해 $f$는 연속이다.

[[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{0,2}(t) = 2t$이므로 $\operatorname{Im}\sigma_{0,2}(t) = 0$이고 피적분함수는 영함수이다. 적분 정의 (5)에 의해 $\int_{\sigma_{0,2}} f = 0$이다.

$\sigma_{0,1+i}(t) = t(1 + i) = t + ti$이므로 허수부는 $t$이고 $\sigma_{0,1+i}' = 1 + i$이다. 피적분함수는 $\iota(t^2)(1 + i)$이다. $\sigma_{1+i,2}(t) = (1 + i) + t(1 - i) = (1 + t) + (1 - t)i$이므로 허수부는 $1 - t$이고 $\sigma_{1+i,2}' = 1 - i$이다. 피적분함수는 $\iota\bigl((1 - t)^2\bigr)(1 - i)$이다. [[antiderivative-and-integral-of-power]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_0^1 t^2\,dt = 1/3$이고 $\int_0^1 (1 - t)^2\,dt = \int_0^1 (1 - 2t + t^2)\,dt = 1 - 1 + 1/3 = 1/3$이다. 적분 정의 (2)와 적분 성질 (1)(복소수배)에 의해
$$
\int_\Gamma f = \frac{1}{3}(1 + i) + \frac{1}{3}(1 - i) = \frac{2}{3}
$$
이다. 두 길의 시작점과 끝점은 경로 (2)에 의해 $0$과 $2$이다($\Gamma$는 $\sigma_{0,1+i}$의 끝점이 $\sigma_{1+i,2}$의 시작점이므로 경로열이다). $f|_G$가 $G$ 위의 복소 원시함수를 가지면 $f|_G$는 연속이므로 원시 (2)의 (iii)에 의해 두 적분이 같아야 하는데 $0 \ne 2/3$이다. 그러므로 복소 원시함수가 없다. $\mathbb{C}$는 열린집합이고 세 상을 포함한다.

**2의 증명.** 미분 (8)을 $c_0 = i$와 $c_0 = -i$에 쓰고 미분 (2)로 $[0, \pi]$에 제한하면 $\gamma_\pm$는 연속미분가능하고 $\gamma_+'(t) = i\exp(it)$, $\gamma_-'(t) = -i\exp(-it)$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (3)($n = 0$)에 의해 $\exp(0) = 1$이고, [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(i\pi) = -1$이며, 덧셈 법칙의 (2)에 의해 $\exp(-i\pi) = \exp(i\pi)^{-1} = -1$이다. 덧셈 법칙의 (2)에 의해 $\gamma_\pm$의 값은 $0$이 아니다. 원시 (4)의 (i)($a = 0$, $k = -1$)에 의해 $\frac{1}{z}$의 함수는 연속이다. $\gamma_+$를 따른 피적분함수는 $\exp(it)^{-1} \cdot i\exp(it) = i$이고, $\gamma_-$를 따른 것은 $\exp(-it)^{-1} \cdot (-i)\exp(-it) = -i$이다. 적분 정의 (5)에 의해 적분은 $\pi i$와 $-\pi i$이다. 경로 (4)에 의해 $(\gamma_-)^-$는 시작점이 $-1$, 끝점이 $1$이고 상이 $\gamma_-$의 상과 같으므로 $(\gamma_+, (\gamma_-)^-)$는 닫힌 경로열이다. [[path-integral|경로 적분]]의 정의와 (2)(뒤집기)에 의해 그 적분은 $\pi i - (-\pi i) = 2\pi i$이다.

**3의 증명.** $P(z) = z^3 - iz^2$로 정한 $P : \mathbb{C} \to \mathbb{C}$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)과 (1)에 의해 정함수이고 $P'(z) = 3z^2 - i \cdot 2z = p(z)$이다. 곧 $P$는 $\mathbb{C}$ 위의 $p$의 복소 원시함수이다. $p$도 같은 법칙들에 의해 정함수이므로 [[complex-derivative|복소 미분]]의 (3)에 의해 연속이다. 원시 (2)의 (ii)에 의해 $1$에서 $i$로 가는 경로열 $\Lambda$에서 $\int_\Lambda p = P(i) - P(1)$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 $i^2 = -1$, $i^3 = -i$이므로 $P(i) = -i - i(-1) = 0$이고 $P(1) = 1 - i$이다. 따라서 $\int_\Lambda p = -1 + i$이다. $\sigma_{1,i}$는 경로 (2)에 의해, $\gamma$는 미분 (8), (2)와 삼각함수의 주기성의 (1)($\exp(i\pi/2) = i$)에 의해 $1$에서 $i$로 가는 C¹ 경로이고, 길이 $1$인 경로열의 적분은 그 경로의 적분이다.

**4의 증명.** 원시 (4)의 (ii)를 $a = 0$, $k = -2$에 쓰면 $z$에서의 값이 $z^{-1}(-1)^{-1} = -z^{-1}$인 함수는 $\mathbb{C} - \{0\}$ 위의 $z^{-2}$의 함수의 복소 원시함수이고, 원시 (4)의 (i)에 의해 $z^{-2}$의 함수는 연속이다. 원시 (2)의 (i)과 (2)의 끝점에 의해 두 적분은 모두 $-(-1)^{-1} - (-(1)^{-1}) = 1 + 1 = 2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[선분을 따라 직접 계산한 (3)의 값]
$\sigma_{1,i}(t) = 1 + t(i - 1) = (1 - t) + ti$에서 $\sigma_{1,i}(t)^2 = (1 - 2t) + (2t - 2t^2)i$이므로
$$
\begin{aligned}
p(\sigma_{1,i}(t)) &= (3 - 6t) + (6t - 6t^2)i \\
&\qquad + 2t + (2t - 2)i \\
&= (3 - 4t) \\
&\qquad + (-6t^2 + 8t - 2)i
\end{aligned}
$$
입니다. 여기에 $\sigma_{1,i}' = -1 + i$를 곱하면 피적분함수의 실수부는 $6t^2 - 4t - 1$, 허수부는 $6t^2 - 12t + 5$입니다. [[antiderivative-and-integral-of-power]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_0^1 (6t^2 - 4t - 1)\,dt = 2 - 2 - 1 = -1$이고 $\int_0^1 (6t^2 - 12t + 5)\,dt = 2 - 6 + 5 = 1$이므로, 적분은 $-1 + i$로 (3)과 같습니다.
:::

:::counterexample[원 경로에서 적분이 0 인 (Im z)²]
(1)의 $f$는 복소 원시함수를 갖지 않지만, 원 경로 $\gamma_{0,1}$에서는 적분이 $0$입니다. 상의 점 $z$에서 $|z| = 1$이므로 [[modulus-of-complex-number|복소수의 절댓값]]의 (4)에 의해 $\overline{z} = z^{-1}$이고, [[complex-conjugate|켤레복소수]]의 (3)과 [[complex-field|복소수체]]의 (5)($ii = -1$)에 의해
$$
\begin{aligned}
(\operatorname{Im} z)^2 &= -\Bigl(\frac{z - \overline{z}}{2}\Bigr)^2 \\
&= -\frac{1}{4}\bigl(z^2 - 2 + z^{-2}\bigr)
\end{aligned}
$$
입니다. 오른쪽의 식으로 $\mathbb{C} - \{0\}$ 위에 정한 함수는 상 위에서 $f$와 값이 같으므로 [[path-integral|경로 적분]]의 (1)에 의해 $\int_{\gamma_{0,1}} f$는 그 함수의 적분과 같고, [[integrals-over-circles|원 경로 위의 적분]]의 (1)의 $k = 2, 0, -2$에 의해 그 값은 $0$입니다. 따라서 닫힌 경로 하나에서 적분이 $0$이라는 것만으로는 복소 원시함수가 있다고 할 수 없습니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $z^{-3}$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$를 $\gamma_+$를 따라 적분하면?]
[[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 (4)의 (ii)에 의해 $-\tfrac{1}{2}z^{-2}$가 복소 원시함수이므로 값은 $-\tfrac{1}{2}(-1)^{-2} + \tfrac{1}{2} \cdot 1^{-2} = 0$입니다.
:::

:::check[닫힌 경로열 $(\sigma_{0,1+i}, \sigma_{1+i,2}, \sigma_{2,0})$을 따른 $(\operatorname{Im} z)^2$의 적분은?]
(1)의 두 값과 [[path-integral|경로 적분]]의 (2)(뒤집기, $\int_{\sigma_{2,0}} = -\int_{\sigma_{0,2}}$)에 의해 $\tfrac{2}{3} - 0 = \tfrac{2}{3}$입니다. 닫힌 경로열에서 $0$이 아니므로, 이것으로도 복소 원시함수가 없다는 것을 알 수 있습니다.
:::
