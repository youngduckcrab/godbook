---
title: 복소 미분의 예
title_en: Examples of Complex Derivatives
aliases: [1/(z − a) 의 고계 도함수, 등비급수의 도함수, 1/(1 − z) 의 도함수, exp(p(z)) 의 도함수, examples of complex derivatives, derivative of the geometric series]
kind: proposition
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 1/(z − a) 는 a 를 뺀 평면에서 무한 번 미분가능하고 ℓ 계 도함수가 (−1)^ℓ ℓ! (z − a)^(−ℓ−1) 이다. 이것과 복소 멱급수의 고계 도함수를 맞추면 |z| < 1 에서 Σ (n + ℓ)!/n! · zⁿ = ℓ!/(1 − z)^(ℓ+1) 이고, 특히 Σ (n + 1)zⁿ = 1/(1 − z)² 이다. 복소 다항함수 p 에 대해 exp(p(z)) 는 정함수이고 도함수는 p′(z) exp(p(z)) 이다.
requires: [function, adding-or-removing-an-element, mathematical-induction, prime-number, well-ordering-principle, real-number-arithmetic, factorial-from-zero, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, open-set-in-metric-space, complex-plane-as-metric-space, complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-series-examples, complex-exponential-function, complex-polynomial-function, complex-derivative, complex-derivative-rules, complex-power-series-is-holomorphic, higher-complex-derivatives, taylor-coefficients-of-complex-power-series, derivative-of-complex-exponential]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Differentiability and Holomorphicity 절의 Example exam_zcubedentire, source/sec_diffholom.ptx:65–86; Regions of Convergence 절의 첫 예(등비급수)와 Σ k zᵏ 의 예, source/sec_regionsconvergence.ptx:22–43, 271–286; 2장 연습문제(1/z 의 도함수), source/exercises-chap2.ptx:165–174; 7장 연습문제 ex_7_2, ex_7_3, ex_734, source/exercises-chap7.ptx:448–486, 557–584, 725–761; 8장 연습문제(exp(az) 의 멱급수), source/exercises-chap8.ptx:370–399"
    checked: original
    note: "출처 Regions of Convergence 절의 첫 예(sec_regionsconvergence.ptx:22–43)는 등비급수 Σ zᵏ = 1/(1 − z) 를 |z| < 1 에서 적고, Σ k zᵏ 의 예(271–286)는 근 판정으로 반지름 1 을 구한 뒤 '등비급수를 미분해서도 알 수 있다'고 덧붙인다. 이 항목 (2)의 ℓ = 1 인 경우 Σ (n + 1)zⁿ = 1/(1 − z)² 는 그 덧붙인 말과 같은 발상이고, 7장 연습문제 ex_734(exercises-chap7.ptx:725–761)의 Σ_{k≥1} k (z − 1)^{k−1} = 1/(2 − z)² 와 Σ_{k≥2} k(k − 1)zᵏ = 2z²/(2 − z)² 도 등비급수를 미분한 같은 발상의 계산이며, ex_7_2(448–486)의 z²/(4 − z)² 의 멱급수도 그렇다. (1)의 a = 0, ℓ = 1 인 경우 1/z 의 도함수 −1/z² 은 출처 2장 연습문제(exercises-chap2.ptx:165–174)가 정의로 직접 보이게 하는 것과 같다. (3)의 exp(p(z)) 는 연쇄법칙의 예이고, 출처 8장 연습문제(exercises-chap8.ptx:370–399)의 exp(az) 와 7장 ex_734 의 exp(z²) 는 p 가 일차식, z² 인 경우의 같은 대상이다(출처는 그 멱급수를 묻는다). 예시 '$1/(1 - z)$를 중심 $i$에서 전개한 계수'는 출처 7장 연습문제 ex_7_3(557–584, 1/z 와 Log 의 중심 1 전개)처럼 유리함수를 다른 중심에서 전개하는 것과 같은 발상이다. 반례 '식은 정의되지만 급수가 발산하는 점 $-1$'은 출처 첫 예(22–43줄)의 '|z| ≥ 1 에서 등비급수가 발산한다'를 항별 미분한 급수에서 본 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(등비급수의 고계 도함수 합, exp 의 항별 미분). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱(음의 지수 포함)은 [[power-of-a-complex-number]]의 것이다. 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이고, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 것이다. 복소 급수의 합은 [[complex-series|복소 급수]]의 것이고, $0$ 이상인 정수의 계승은 [[factorial-from-zero]]의 것이다. 복소 미분가능, 정칙함수, 도함수, 정함수는 [[complex-derivative|복소 미분]]의 것이고, 무한 번 미분가능과 $k$계 도함수는 [[higher-complex-derivatives|고계 복소 도함수]]의 것이다. 복소 다항함수와 그 도함수는 [[complex-polynomial-function|복소 다항함수]]와 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 것이고, 복소 지수함수는 [[complex-exponential-function]]의 것이다.

다음이 성립한다. 아래에서 $a$는 복소수, $\ell$은 $0$ 이상인 정수이다.

1. ($1/(z - a)$의 고계 도함수) $\mathbb{C} - \{a\}$는 열린집합이다. $z$에서의 값이 $(z - a)^{-1}$인 함수 $h_a : \mathbb{C} - \{a\} \to \mathbb{C}$는 무한 번 미분가능하고, 모든 $\ell$과 모든 $z \ne a$에서
   $$
   h_a^{(\ell)}(z) = (-1)^{\ell}\, \ell!\, (z - a)^{-\ell-1}
   $$
   이다.
2. (등비급수의 도함수)
   - (i) $z$에서의 값이 $(1 - z)^{-1}$인 함수 $q : \mathbb{C} - \{1\} \to \mathbb{C}$는 무한 번 미분가능하고, 모든 $\ell$과 모든 $z \ne 1$에서 $q^{(\ell)}(z) = \ell!\, (1 - z)^{-\ell-1}$이다.
   - (ii) $|z| < 1$이면 $n$에서의 값이 $\dfrac{(n + \ell)!}{n!}\, z^n$인 0부터 번호가 붙은 복소수열의 급수는 수렴하고
     $$
     \begin{aligned}
     &\sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, z^n \\
     &= \frac{\ell!}{(1 - z)^{\ell+1}}
     \end{aligned}
     $$
     이다. 특히 $\ell = 1$이면 $\sum_{n=0}^{\infty} (n + 1) z^n = (1 - z)^{-2}$이다.
3. (지수함수와 다항함수의 합성) $p$가 복소 다항함수이면 $z$에서의 값이 $\exp(p(z))$인 함수 $\mathbb{C} \to \mathbb{C}$는 정함수이고, 모든 $z$에서 그 미분계수는 $p'(z)\exp(p(z))$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number, and powers (including negative exponents) are those of the entry on powers of a complex number. Open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and the open ball $B(a, r)$ is that of (3) of the entry on the metric of the complex plane. Sums of complex series are those of the entry on complex series, and factorials of integers at least $0$ are those of the entry on factorials from zero. Complex differentiability, holomorphic functions, derivatives, and entire functions are those of the entry on the complex derivative, and infinitely differentiable and the $k$th derivative are those of the entry on higher complex derivatives. Complex polynomial functions and their derivatives are those of the entry on complex polynomial functions and of (4) of the entry on rules of complex differentiation, and the complex exponential function is that of the entry on the complex exponential function.

The following hold. Below, $a$ is a complex number and $\ell$ is an integer at least $0$.

1. (Higher derivatives of $1/(z - a)$) $\mathbb{C} - \{a\}$ is an open set. The function $h_a : \mathbb{C} - \{a\} \to \mathbb{C}$ whose value at $z$ is $(z - a)^{-1}$ is infinitely differentiable, and for every $\ell$ and every $z \ne a$
   $$
   h_a^{(\ell)}(z) = (-1)^{\ell}\, \ell!\, (z - a)^{-\ell-1}.
   $$
2. (Derivatives of the geometric series)
   - (i) The function $q : \mathbb{C} - \{1\} \to \mathbb{C}$ whose value at $z$ is $(1 - z)^{-1}$ is infinitely differentiable, and $q^{(\ell)}(z) = \ell!\, (1 - z)^{-\ell-1}$ for every $\ell$ and every $z \ne 1$.
   - (ii) If $|z| < 1$, the series of the complex sequence indexed from zero whose value at $n$ is $\dfrac{(n + \ell)!}{n!}\, z^n$ converges and
     $$
     \begin{aligned}
     &\sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, z^n \\
     &= \frac{\ell!}{(1 - z)^{\ell+1}}.
     \end{aligned}
     $$
     In particular, for $\ell = 1$, $\sum_{n=0}^{\infty} (n + 1) z^n = (1 - z)^{-2}$.
3. (Composition of the exponential function with a polynomial function) If $p$ is a complex polynomial function, the function $\mathbb{C} \to \mathbb{C}$ whose value at $z$ is $\exp(p(z))$ is an entire function, and its derivative at every $z$ is $p'(z)\exp(p(z))$.
:::

## 직관

등비급수 $\sum z^n$은 $|z| < 1$에서 $1/(1 - z)$입니다. 같은 함수를 두 가지로 미분할 수 있습니다. 하나는 급수를 항마다 미분하는 것이고([[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]), 다른 하나는 $1/(1 - z)$에 몫과 연쇄법칙을 쓰는 것입니다([[complex-derivative-rules|복소 미분의 법칙]]). 두 결과는 같은 함수의 도함수이므로 같아야 하고, 그것을 적으면 $\sum (n + 1) z^n = 1/(1 - z)^2$처럼 급수의 합을 구하는 식이 됩니다. $\ell$번 미분하면 (2)의 식이 나옵니다.

(1)은 $1/(z - a)$를 한 번 미분할 때마다 지수가 하나 내려가고 앞에 $-1$과 지수의 크기가 곱해진다는 것입니다. 실함수 $1/x$의 고계 도함수와 같은 꼴입니다. (3)은 연쇄법칙을 지수함수에 쓴 것입니다.

비유하면 같은 산의 높이를 지도의 등고선으로 읽는 것과 측량으로 재는 것이 같은 값을 주어야 하는 것과 같습니다. 여기서 두 방법은 급수와 닫힌 식입니다. 비유가 맞지 않는 곳은, 닫힌 식 $1/(1 - z)^2$은 $z \ne 1$이면 어디서나 뜻이 있지만 급수는 $|z| < 1$에서만 수렴한다는 점입니다(아래 반례). 두 방법은 둘 다 뜻이 있는 곳에서만 비교합니다.

## 증명

:::idea
(1)은 음의 거듭제곱의 도함수와 연쇄법칙을 $\ell$에 대한 귀납으로 되풀이한다. (2)는 등비급수가 나타내는 함수가 $q$의 제한이라는 것과, 복소 멱급수의 고계 도함수 공식을 맞춘다.
:::

:::hint
$(1 - z)^{-1} = -(z - 1)^{-1}$이므로 $q = -h_1$입니다.
:::

:::proof
"법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "복소 거듭제곱 (n)"은 [[power-of-a-complex-number]], "계승 (n)"은 [[factorial-from-zero]]의 번호이다. 체 $\mathbb{C}$의 계산은 [[complex-field]]의 (1)의 체의 법칙이다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다. 두 함수가 같은 것은 정확히 모든 점에서 값이 같을 때이다([[function]]의 같음).

**1의 증명.** [[open-set-in-metric-space]]의 (5)에 의해 $\{a\}$는 $(\mathbb{C}, d)$에서 닫힌집합이므로 닫힌집합의 정의에 의해 $\mathbb{C} - \{a\}$는 열린집합이다. $U = \mathbb{C} - \{a\}$로 두고, $g(z) = z - a$로 정한 $g : U \to \mathbb{C}$를 생각한다. [[complex-derivative|복소 미분]]의 (5)에 의해 $g$는 정칙함수이고 $g' = 1$이며, $z \in U$이면 $g(z) \ne 0$이다. 음의 정수 $m$에 대하여, 법칙 (4)의 (ii)에 의해 $w$에서의 값이 $w^m$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$는 정칙함수이고 미분계수는 $m w^{m-1}$이므로, 법칙 (5)에 의해 다음이 성립한다.

- (가) 음의 정수 $m$과 복소수 $C$에 대하여, $z$에서의 값이 $C(z - a)^m$인 함수 $U \to \mathbb{C}$는 정칙함수이고 그 도함수의 $z$에서의 값은 $C m (z - a)^{m-1}$이다(상수배는 법칙 (1)).

$\ell$에 대한 명제 "$h_a$는 $\ell$번 미분가능하고 모든 $z \in U$에서 $h_a^{(\ell)}(z) = (-1)^{\ell}\, \ell!\, (z - a)^{-\ell-1}$"을 귀납으로 보인다. $\ell = 0$이면 고계 (1)에 의해 $h_a^{(0)} = h_a$이고 $(-1)^0 \cdot 0! = 1$이다. $\ell$에서 참이라 하자. (가)를 $C = (-1)^{\ell}\,\ell!$, $m = -\ell - 1$에 쓰면 $h_a^{(\ell)}$은 정칙함수이고 그 도함수의 값은
$$
\begin{aligned}
&(-1)^{\ell}\,\ell!\,(-\ell - 1)(z - a)^{-\ell-2} \\
&= (-1)^{\ell+1}\,(\ell + 1)!\,(z - a)^{-\ell-2}
\end{aligned}
$$
이다(계승 (1), 복소 거듭제곱 (2)). 고계 (2)와 (1)에 의해 $h_a$는 $\ell + 1$번 미분가능하고 $h_a^{(\ell+1)}$이 이 함수이다. 모든 $\ell$에서 참이므로 $h_a$는 무한 번 미분가능하다.

**2의 증명.** (i) $z \ne 1$이면 $1 - z = (-1)(z - 1)$이고 $(-1)^{-1} = -1$이므로 $(1 - z)^{-1} = -(z - 1)^{-1}$이다. 곧 $q = (-1)h_1$이다. (1)과 고계 (6)에 의해 $q$는 무한 번 미분가능하고 $q^{(\ell)} = -h_1^{(\ell)}$이다. 복소 거듭제곱 (3)의 (ii)에 의해
$$
\begin{aligned}
(z - 1)^{-\ell-1} &= \bigl((-1)(1 - z)\bigr)^{-\ell-1} \\
&= (-1)^{-\ell-1}\,(1 - z)^{-\ell-1}
\end{aligned}
$$
이고 $(-1)^{-\ell-1} = \bigl((-1)^{-1}\bigr)^{\ell+1} = (-1)^{\ell+1}$이므로,
$$
\begin{aligned}
q^{(\ell)}(z) &= -(-1)^{\ell}\,\ell! \\
&\qquad \cdot (-1)^{\ell+1}(1 - z)^{-\ell-1} \\
&= -(-1)^{2\ell+1}\,\ell! \\
&\qquad \cdot (1 - z)^{-\ell-1}
\end{aligned}
$$
이다. $(-1)^{2\ell+1} = \bigl((-1)^2\bigr)^{\ell}(-1) = -1$이므로(복소 거듭제곱 (3)의 (i)) $q^{(\ell)}(z) = \ell!\,(1 - z)^{-\ell-1}$이다.

(ii) [[complex-series-examples|복소 급수의 예]]의 (2)에 의해 중심이 $0$이고 계수가 모두 $1$인 복소 멱급수는 수렴 반지름이 $1$이고, 그것이 $D = B(0, 1)$ 위에 나타내는 함수 $f$는 모든 $z \in D$에서 $f(z) = (1 - z)^{-1}$이다. $1 \notin D$이므로 $D \subseteq \mathbb{C} - \{1\}$이고 $f = q|_D$이다. $D$는 열린집합이므로([[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]의 (2)) 고계 (5)의 (i)에 의해 $f^{(\ell)} = q^{(\ell)}|_D$이다. 한편 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (3)에 의해 $f^{(\ell)}$은 계수가 $(n + \ell)!\,(n!)^{-1} \cdot 1$인 복소 멱급수가 $D$ 위에 나타내는 함수이다. 따라서 $|z| < 1$이면 그 급수는 $z$에서 수렴하고
$$
\begin{aligned}
\sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, z^n &= f^{(\ell)}(z) \\
&= \frac{\ell!}{(1 - z)^{\ell+1}}
\end{aligned}
$$
이다. $\ell = 1$이면 계승 (4)의 첫째 식에 의해 $(n + 1)!\,(n!)^{-1} = n + 1$이고 $1! = 1$이다.

**3의 증명.** 법칙 (4)의 (iii)에 의해 $p$는 정함수이고, [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp' = \exp$이다. 법칙 (5)를 $G = H = \mathbb{C}$, $g = p$, $h = \exp$에 쓰면 $\exp \circ p$는 정함수이고 모든 $z$에서 그 미분계수는 $\exp'(p(z))\,p'(z) = p'(z)\exp(p(z))$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$1/(1 - z)$를 중심 $i$에서 전개한 계수]
[[complex-series-examples|복소 급수의 예]]의 (7)을 $b = i$에 쓰면 $v = (1 - i)^{-1} = (1 + i)/2$이고(곱 $(1 - i)(1 + i) = 2$), 중심이 $i$이고 계수가 $c_n = v^{n+1}$인 복소 멱급수는 수렴 반지름이 $|1 - i|$이며 $|z - i| < |1 - i|$에서 합이 $(1 - z)^{-1}$입니다. 이 복소 멱급수가 나타내는 함수는 $q$를 $D = B(i, |1 - i|)$로 제한한 것이므로, [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (4)와 [[higher-complex-derivatives|고계 복소 도함수]]의 (5)의 (i), 이 항목의 (2)의 (i)에 의해
$$
c_n = \frac{q^{(n)}(i)}{n!} = (1 - i)^{-n-1}
$$
이어야 합니다. 실제로 $(1 - i)^{-n-1} = \bigl((1 - i)^{-1}\bigr)^{n+1} = v^{n+1}$이므로 두 계산이 맞습니다. 예컨대 $c_1 = v^2 = (1 + i)^2/4 = 2i/4 = i/2$이고, $q'(i) = (1 - i)^{-2} = (-2i)^{-1} = i/2$입니다.
:::

:::counterexample[식은 정의되지만 급수가 발산하는 점 $-1$]
$z = -1$에서 (2)의 (i)의 식은 $q'(-1) = (1 - (-1))^{-2} = 1/4$로 뜻이 있습니다. 그러나 (2)의 (ii)의 급수의 $\ell = 1$인 항은 $(n + 1)(-1)^n$이고 그 절댓값은 $n + 1 \ge 1$이어서 $0$으로 수렴하지 않으므로, [[complex-series|복소 급수]]의 (7)에 의해 급수 $\sum (n + 1)(-1)^n$은 발산합니다. (2)의 (ii)는 $|z| < 1$인 점에서만 급수와 닫힌 식을 맞추고, $|z| = 1$인 $-1$에서는 급수가 합을 갖지 않습니다.
:::

## 확인 질문

:::check[$\sum_{n=0}^{\infty} (n + 1)\, 2^{-n}$은 얼마인가?]
$4$입니다. (2)의 (ii)를 $\ell = 1$, $z = 1/2$에 쓰면 $|1/2| < 1$이므로 급수는 수렴하고 합은 $(1 - 1/2)^{-2} = (1/2)^{-2} = 4$입니다. 여기서 $(1/2)^n = 2^{-n}$이고, 항과 합이 모두 실수인 복소수이므로 [[complex-series|복소 급수]]의 (3)에 의해 실수의 급수로 읽어도 합은 $4$입니다.
:::

:::check[$z$에서의 값이 $\exp(z^2 + iz)$인 함수의 $0$에서의 미분계수는 무엇인가?]
$i$입니다. (3)을 $p(z) = z^2 + iz$에 쓰면 $p'(z) = 2z + i$이고([[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)), 미분계수는 $p'(0)\exp(p(0)) = i \exp(0) = i$입니다([[complex-exponential-function|복소 지수함수]]의 (3)).
:::
