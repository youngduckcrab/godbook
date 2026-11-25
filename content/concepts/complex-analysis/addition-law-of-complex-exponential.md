---
title: 복소 지수함수의 덧셈 법칙
title_en: Addition Law of the Complex Exponential
aliases: [복소 지수법칙, 지수법칙, law of exponents, exponential addition formula]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 모든 복소수 z, w 에서 exp(z + w) = exp(z)exp(w) 이다. 따라서 exp 의 값은 0 이 아니고, exp(−z) 는 exp(z) 의 역수이며, 정수 n 에서 exp(nz) = exp(z)ⁿ 이다. 실수 y 에서 exp(iy) 의 켤레는 exp(−iy) 이고 절댓값은 1 이며, |exp(z)| = exp(Re z) 이다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, mathematical-induction, absolute-value, power-of-a-real-number, natural-logarithm, exponential-function, laws-of-exponential-function, group, group-homomorphism, ring, ring-basic-properties, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, convergence-of-complex-sequences, cauchy-product-of-complex-series, factorial-form-of-binomial-expansion, complex-exponential-function]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.1절 The complex exponential, Proposition 11.4.1 과 그 뒤 문단 (p.164); 11.4.2절, Proposition 11.4.2 의 증명 (p.165)
    checked: original
    note: "출처의 Proposition 11.4.1(Law of exponents, p.164)은 e^{z+w} = e^z e^w 이고, 실수의 e^{x+y} = eˣeʸ 에서 일치 정리(Theorem 11.3.9)를 두 번 써서 증명한다. 이 사이트에는 해석함수와 일치 정리가 없으므로, 이 항목은 두 절대수렴 급수의 코시 곱과 계승 꼴의 이항 전개로 (1)을 증명한다. (2)와 (3)은 출처가 그 뒤 문단(p.164)에서 'e^z e^{−z} = e^{z−z} = 1' 이므로 e^z ≠ 0, (e^z)^{−1} = e^{−z}, 모든 정수 n 에서 (e^z)ⁿ = e^{nz} 라고 적는 것과 같은 내용이고, 이 항목은 (3)을 n 에 대한 귀납법으로 보인다. 11.5절 p.170 도 'The exponential e^z is an analytic function on ℂ with no zeros' 라고 적는다. (5)는 출처가 p.165(Proposition 11.4.2 의 증명)에서 실수 x 에 대해 켤레 e^{ix} 가 e^{−ix} 이고 1 = e^{ix}e^{−ix} = |e^{ix}|² 이라고 계산하는 것과 같은 계산이며, 출처는 이어서 'e^{ix} is unimodular for real x' 라고 적는다. (4)의 꼴 e^{x+iy} = eˣ(cos y + i sin y) 는 출처 p.164 에 있고, 이 항목은 삼각함수 없이 exp(iy) 로 적는다."
  - ref: judson-abstract-algebra
    loc: 9.1절 Definition and Examples, Example 9.2 (p.114)
    checked: original
    note: "Judson 의 Example 9.2(p.114)는 실수의 지수함수가 덧셈군 (ℝ, +) 에서 양의 실수의 곱셈군 (ℝ⁺, ·) 으로의 동형사상이라고 적고, 연산의 보존을 e^{x+y} = eˣeʸ 로 보인다. (2)의 '덧셈군 (ℂ, +) 에서 곱셈군 ℂ^× 로의 군 준동형'은 같은 발상을 복소수로 옮긴 것이다(전단사라고는 말하지 않는다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(연속 증명 통독, 예 (2)–(4)에 경계값, 보조정리 n = 0). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 곱셈군 $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱(음의 정수 지수는 $\mathbb{C}^{\times}$에서의 거듭제곱)은 [[power-of-a-complex-number]]의 것이다. 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 [[complex-exponential-function]], 실수의 지수함수는 [[exponential-function]]의 것이다. 덧셈군 $(\mathbb{C}, +)$는 환 $\mathbb{C}$의 덧셈이 이루는 군([[ring|환]])이고, 군 준동형은 [[group-homomorphism|군 준동형]]의 것이다.

아래에서 $z$, $w$는 복소수이고 $x$, $y$는 실수이다.

1. (덧셈 법칙) $\exp(z + w) = \exp(z)\exp(w)$이다.
2. ($0$이 아님과 역수) $\exp(z) \ne 0$이다. $\exp(-z) = \exp(z)^{-1}$이고 $\exp(z - w) = \exp(z) / \exp(w)$이다. 따라서 공역을 $\mathbb{C}^{\times}$로 둔 $\exp : \mathbb{C} \to \mathbb{C}^{\times}$는 덧셈군 $(\mathbb{C}, +)$에서 곱셈군 $\mathbb{C}^{\times}$로의 군 준동형이다.
3. (정수배) 모든 정수 $n$에서 $\exp(nz) = \exp(z)^n$이다. 여기서 $nz$는 $\iota(n) z$이고, 오른쪽은 복소수의 거듭제곱이다($n < 0$이면 $\mathbb{C}^{\times}$에서의 거듭제곱). 특히 $n = 0$이면 양쪽이 모두 $1$이다.
4. (실수부와 순허수로 나누기) $\exp(x + iy) = \exp(x)\exp(iy)$, 곧 $\iota(\exp(x))\exp(iy)$이다. 따라서 $u = \exp(iy)$로 두면 $\operatorname{Re} \exp(x + iy) = \exp(x) \operatorname{Re} u$이고 $\operatorname{Im} \exp(x + iy) = \exp(x) \operatorname{Im} u$이다. 오른쪽의 $\exp(x)$는 실수의 지수함수의 값이다.
5. (순허수에서의 값) $\overline{\exp(iy)} = \exp(-iy) = \exp(iy)^{-1}$이고 $|\exp(iy)| = 1$이다. 곧 $u = \exp(iy)$로 두면 $(\operatorname{Re} u)^2 + (\operatorname{Im} u)^2 = 1$이다.
6. (절댓값) $|\exp(z)| = \exp(\operatorname{Re} z)$이다. 오른쪽은 실수의 지수함수의 값이고 양수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the multiplicative group $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; conjugates, moduli, and powers (with negative integer exponents taken in $\mathbb{C}^{\times}$) are those of their entries. The complex exponential function $\exp : \mathbb{C} \to \mathbb{C}$ is that of its entry, and the real exponential function is that of its entry. The additive group $(\mathbb{C}, +)$ is the group formed by the addition of the ring $\mathbb{C}$, and group homomorphisms are those of their entry.

Below, $z$, $w$ are complex numbers and $x$, $y$ are real numbers.

1. (Addition law) $\exp(z + w) = \exp(z)\exp(w)$.
2. (Nonvanishing and inverses) $\exp(z) \ne 0$. Moreover $\exp(-z) = \exp(z)^{-1}$ and $\exp(z - w) = \exp(z) / \exp(w)$. Hence $\exp : \mathbb{C} \to \mathbb{C}^{\times}$, with codomain $\mathbb{C}^{\times}$, is a group homomorphism from the additive group $(\mathbb{C}, +)$ to the multiplicative group $\mathbb{C}^{\times}$.
3. (Integer multiples) For every integer $n$, $\exp(nz) = \exp(z)^n$. Here $nz$ means $\iota(n) z$, and the right side is a power of a complex number (a power in $\mathbb{C}^{\times}$ if $n < 0$). In particular, both sides equal $1$ when $n = 0$.
4. (Splitting into a real part and a pure imaginary part) $\exp(x + iy) = \exp(x)\exp(iy)$, that is, $\iota(\exp(x))\exp(iy)$. Hence, writing $u = \exp(iy)$, we have $\operatorname{Re} \exp(x + iy) = \exp(x) \operatorname{Re} u$ and $\operatorname{Im} \exp(x + iy) = \exp(x) \operatorname{Im} u$, where $\exp(x)$ on the right is a value of the real exponential function.
5. (Values at pure imaginary numbers) $\overline{\exp(iy)} = \exp(-iy) = \exp(iy)^{-1}$ and $|\exp(iy)| = 1$; that is, writing $u = \exp(iy)$, $(\operatorname{Re} u)^2 + (\operatorname{Im} u)^2 = 1$.
6. (Modulus) $|\exp(z)| = \exp(\operatorname{Re} z)$, where the right side is a value of the real exponential function and is positive.
:::

## 직관

실수의 지수함수에서 $\exp(x + y) = \exp(x)\exp(y)$였던 것이 복소수에서도 그대로 성립한다는 것이 (1)입니다. 증명은 두 급수 $\sum z^n / n!$과 $\sum w^n / n!$을 곱하는 것입니다. 두 급수를 다항식처럼 곱해 차수가 $n$인 항끼리 모으면 $\sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}$이 되고, [[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]에 의해 이것은 바로 $(z + w)^n / n!$입니다. 두 급수가 절대수렴하므로 이렇게 모아 더해도 합이 바뀌지 않는다는 것이 [[cauchy-product-of-complex-series|복소 급수의 코시 곱]]의 (4)입니다.

덧셈을 곱셈으로 바꾸어 주는 환율표에 비유할 수 있습니다. 덧셈의 세계에서 $z$와 $w$를 더한 뒤 환전한 값과, 각각 환전한 뒤 곱셈의 세계에서 곱한 값이 같습니다. 덧셈의 세계의 $0$은 곱셈의 세계의 $1$로, $-z$는 역수로 바뀝니다((2)). 비유와 다른 점은 환전한 값이 $0$이 되는 일이 없다는 것까지 덧셈 법칙에서 따라 나온다는 것입니다. $\exp(z)\exp(-z) = \exp(0) = 1$이기 때문입니다.

(5)와 (6)은 크기에 관한 것입니다. 순허수 $iy$에서는 켤레가 $-iy$여서 $\exp(iy)$와 그 켤레의 곱이 $\exp(0) = 1$이고, 따라서 절댓값이 $1$입니다. 일반적인 $z$에서는 (4)로 실수부와 순허수 부분을 나누면 크기는 실수부만으로 정해집니다. $y = 0$이면 (5)의 $|\exp(0)| = 1$은 정의의 $\exp(0) = 1$과 맞고, $x = 0$이면 (4)는 $\exp(iy)$ 자신을 말합니다.

## 증명

:::idea
$(z^n / n!)_{n \ge 0}$과 $(w^n / n!)_{n \ge 0}$의 코시 곱은 계승 꼴의 이항 전개에 의해 $((z + w)^n / n!)_{n \ge 0}$이다. 두 급수가 절대수렴하므로 코시 곱의 급수의 합은 두 합의 곱이다. 나머지는 이 등식과 정의의 켤레·실수 일치에서 나온다.
:::

:::hint
[[cauchy-product-of-complex-series|복소 급수의 코시 곱]]의 (4)를 쓰려면 두 급수가 절대수렴해야 합니다. [[complex-exponential-function|복소 지수함수]]의 (1)을 보세요.
:::

:::hint
$|\exp(iy)| = 1$은 [[modulus-of-complex-number|복소수의 절댓값]]의 (2)의 $u \overline{u} = |u|^2$를 $u = \exp(iy)$에 쓰고, 켤레를 정의의 (4)로 바꾸세요.
:::

:::proof
"정의의 (1)"처럼 쓴 것은 [[complex-exponential-function]], "복소수체의 (2)"는 [[complex-field]], "켤레의 (1)"은 [[complex-conjugate]], "절댓값의 (2)"는 [[modulus-of-complex-number]], "거듭제곱의 (3)"은 [[power-of-a-complex-number]], "실수 지수함수의 (1)"은 [[exponential-function]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 괄호를 옮기거나 분배하는 곳은 체의 조건에 의한다.

**1의 증명.** $0$ 이상인 정수 $n$에서 $x_n = z^n / n!$, $y_n = w^n / n!$으로 정한 0부터 번호가 붙은 복소수열([[convergence-of-complex-sequences|복소수열의 수렴]])을 생각하자. 정의의 (1)에 의해 두 급수는 절대수렴하고, 그 합은 정의에 의해 $\exp(z)$와 $\exp(w)$이다. 두 수열의 코시 곱 $(c_n)_{n \ge 0}$은 [[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]의 (1)에 의해
$$
c_n = \sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!} = \frac{(z + w)^n}{n!}
$$
이므로 $n$에서의 값이 $(z + w)^n / n!$인 0부터 번호가 붙은 복소수열과 같다. [[cauchy-product-of-complex-series|복소 급수의 코시 곱]]의 (4)에 의해 이 급수는 수렴하고 그 합은 $\exp(z)\exp(w)$이다. 한편 정의에 의해 그 합은 $\exp(z + w)$이다.

**2의 증명.** (1)과 정의의 (3)에 의해 $\exp(z)\exp(-z) = \exp(z + (-z)) = \exp(0) = 1$이고, 곱셈의 교환법칙에 의해 $\exp(-z)\exp(z) = 1$이다. 따라서 $\exp(z)$는 체 $\mathbb{C}$의 가역원이고, [[field|가역원과 체]]의 정의에 의해 그 역원은 하나뿐이므로 $\exp(z)^{-1} = \exp(-z)$이며, 같은 항목의 (1)에 의해 $0$은 가역원이 아니므로 $\exp(z) \ne 0$이다. $z - w = z + (-w)$이므로 (1)과 방금 보인 것에 의해 $\exp(z - w) = \exp(z)\exp(-w) = \exp(z)\exp(w)^{-1}$이다. 끝으로 복소수체의 (1)에 의해 $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$은 곱셈으로 군이고, [[ring|환]]의 정의에 의해 $(\mathbb{C}, +)$는 군이다. $\exp$의 값은 모두 $\mathbb{C}^{\times}$에 있으므로 공역을 $\mathbb{C}^{\times}$로 둘 수 있고, (1)은 [[group-homomorphism|군 준동형]]의 정의의 등식 $\varphi(a + b) = \varphi(a)\varphi(b)$이다(왼쪽 군의 연산이 덧셈이다).

**3의 증명.** 먼저 $0$ 이상인 정수 $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $n = 0$이면 복소수체의 (2)의 (i)과 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $\iota(0) z = 0 z = 0$이므로 정의의 (3)과 거듭제곱의 정의에 의해 양쪽은 $\exp(0) = 1 = \exp(z)^0$이다. $n$에서 성립하면, 복소수체의 (2)와 그 (i)의 $\iota(1) = 1$, 분배법칙에 의해 $\iota(n + 1) z = \iota(n) z + z$이므로, (1), 귀납 가정, 거듭제곱의 정의에 의해
$$
\begin{aligned}
\exp(\iota(n + 1) z) &= \exp(\iota(n) z)\exp(z) \\
&= \exp(z)^{n+1}
\end{aligned}
$$
이다. 다음으로 $n$이 음의 정수이면 $n = -m$인 자연수 $m$이 있다. 복소수체의 (2)의 (i)과 환의 기본 성질의 (2)에 의해 $\iota(-m) z = -(\iota(m) z)$이므로, (2), 방금 보인 것, 거듭제곱의 (3)의 (ii)의 $(u^m)^{-1} = u^{-m}$($u = \exp(z) \ne 0$)에 의해
$$
\begin{aligned}
\exp(\iota(-m) z) &= \exp(\iota(m) z)^{-1} \\
&= \bigl(\exp(z)^m\bigr)^{-1} \\
&= \exp(z)^{-m}
\end{aligned}
$$
이다. 정수는 $0$ 이상이거나 자연수의 음수이므로([[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)) 모든 정수 $n$에서 성립한다.

**4의 증명.** 약속에 의해 $x + iy$는 $\iota(x) + i\,\iota(y)$이다. (1)과 정의의 (2)에 의해 $\exp(x + iy) = \exp(\iota(x))\exp(iy) = \iota(\exp(x))\exp(iy)$이다. 복소수체의 (2)의 (ii)에 의해 실수부와 허수부는 $\exp(x)$와 $\exp(iy)$의 실수부, 허수부의 곱이다.

**5의 증명.** 켤레의 (1)에 의해 $\overline{i} = \overline{0 + 1i} = 0 - 1i = -i$이고, 켤레의 (2)의 곱과 (4)의 $\overline{\iota(y)} = \iota(y)$, 환의 기본 성질의 (2)에 의해 $\overline{i\,\iota(y)} = (-i)\iota(y) = -(i\,\iota(y))$이다. 정의의 (4)와 (2)에 의해
$$
\begin{aligned}
\overline{\exp(iy)} &= \exp\bigl(\overline{iy}\bigr) \\
&= \exp(-iy) = \exp(iy)^{-1}
\end{aligned}
$$
이다. $u = \exp(iy)$로 두면 절댓값의 (2)에 의해 $\iota(|u|^2) = u\overline{u} = u u^{-1} = 1 = \iota(1)$이고, $\iota$는 단사이므로(복소수체의 (2)) $|u|^2 = 1$이다. 절댓값의 (1)에 의해 $0 \le |u|$이고 $|u|^2 = |u|\,|u|$이며 $1 = 1 \cdot 1$이므로, [[order-properties-of-reals|실수의 순서 성질]]의 (7)의 (iv)에 의해 $|u| = 1$이다. 절댓값의 (1)의 $|u|^2 = (\operatorname{Re} u)^2 + (\operatorname{Im} u)^2$에서 마지막 등식이 나온다.

**6의 증명.** 복소수체의 (4)에 의해 $z = \operatorname{Re} z + (\operatorname{Im} z) i$이고, 곱셈의 교환법칙으로 이것은 $x = \operatorname{Re} z$, $y = \operatorname{Im} z$인 $x + iy$이다. 이 항목의 (4)와 (5), 절댓값의 (3)과 (5)에 의해 $|\exp(z)| = |\iota(\exp(x))|\,|\exp(iy)| = |\exp(x)| \cdot 1$이다. 실수 지수함수의 (1)에 의해 $0 < \exp(x)$이므로 [[absolute-value]]의 (1)에 의해 $|\exp(x)| = \exp(x) = \exp(\operatorname{Re} z)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[z = 1 + i 와 그 켤레]
$z = 1 + i$이면 (1)과 정의의 (2)에 의해 $\exp(1 + i)\exp(1 - i) = \exp(2)$이고, 이것은 실수 $\exp(2)$를 옮긴 실수인 복소수입니다. [[complex-exponential-function|복소 지수함수]]의 (4)에 의해 $\exp(1 - i) = \overline{\exp(1 + i)}$이므로 이 등식은 $|\exp(1 + i)|^2 = \exp(2)$를 말하고, (6)의 $|\exp(1 + i)| = \exp(1)$과 [[laws-of-exponential-function|지수함수의 성질]]의 (3)의 $\exp(1)^2 = \exp(2)$와 맞습니다.
:::

:::example[절댓값이 허수부에 따르지 않는 예]
(6)에 의해 $|\exp(2 + 5i)| = |\exp(2 - 7i)| = |\exp(2)| = \exp(2)$입니다. 실수부가 같은 복소수에서는 $\exp$의 값의 절댓값이 모두 같습니다. 실수부가 $0$인 $z = 5i$에서는 $|\exp(5i)| = \exp(0) = 1$이고, 이것은 (5)와 같습니다.
:::

:::counterexample[곱을 합처럼 다루면 틀리는 예]
(1)은 합 $z + w$에 대한 것이고 곱 $zw$에 대해서는 성립하지 않을 수 있습니다. $z = w = 1$이면 $\exp(zw) = \exp(1)$이고 $\exp(z)\exp(w) = \exp(1)^2 = \exp(2)$입니다. [[exponential-function]]의 (2)에 의해 실수의 $\exp$는 순증가이므로 $\exp(1) < \exp(2)$이고, 정의의 (2)와 $\iota$의 단사에 의해 두 복소수는 다릅니다. $z = w = 0$이면 $\exp(0) = 1 = \exp(0)\exp(0)$이어서 같습니다.
:::

## 확인 질문

:::check[복소수 $z$가 $\exp(z) = 2i$를 만족한다고 하자. $\exp(-z)$, $\exp(3z)$, $\operatorname{Re} z$는 무엇인가?]
(2)에 의해 $\exp(-z) = (2i)^{-1} = -\frac{1}{2} i$입니다($2i \cdot (-\frac{1}{2} i) = -i^2 = 1$). (3)에 의해 $\exp(3z) = (2i)^3 = 8 i^3 = -8i$입니다. (6)에 의해 $\exp(\operatorname{Re} z) = |2i| = 2$이므로, [[exponential-function]]의 (1)에 의해 $\operatorname{Re} z = \ln 2$입니다.
:::

:::check[실수 $y$에서 $\exp(iy)$가 실수인 복소수이면 그 값은 무엇일 수 있는가?]
허수부가 $0$이므로 (5)에 의해 실수부 $a$는 $a^2 = 1$을 만족합니다. $a^2 - 1 = (a - 1)(a + 1) = 0$이므로 [[real-number-arithmetic]]의 (K10)에 의해 $a$는 $1$이거나 $-1$입니다. 따라서 값은 $1$이거나 $-1$입니다. $y = 0$이면 값은 $1$입니다.
:::
