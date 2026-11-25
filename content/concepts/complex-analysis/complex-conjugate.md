---
title: 켤레복소수
title_en: Complex Conjugate
aliases: [켤레, 공액복소수, 복소켤레, 켤레를 취하는 함수, conjugate, complex conjugation]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수 z 의 켤레복소수는 실수부가 같고 허수부의 부호를 바꾼 복소수 z̄ = Re z − (Im z)i 이다. 켤레는 합·차·곱·역수·몫과 순서를 바꿀 수 있고, z + z̄ = 2 Re z, z − z̄ = 2(Im z)i 이며, z 가 실수인 복소수인 것은 정확히 z̄ = z 일 때이다. z z̄ 는 실수인 복소수 (Re z)² + (Im z)² 이고, 켤레를 취하는 함수는 ℂ 에서 ℂ 로의 환 동형사상으로서 자기 자신이 역함수이다.
requires: [set, function, injective-surjective-bijective, inverse-function, group, ring, ring-basic-properties, integral-domain, field, ring-homomorphism, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, complex-number, complex-field]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1.1절 The complex plane, Definition 11.1.1 (p.140); 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.165)
    checked: original
    note: "출처의 Definition 11.1.1(p.140)은 z = x + iy 의 complex conjugate 를 z̄ := x − iy 로 정의하고, 바로 뒤에서 켤레는 실수축에 대한 평면의 반사이며 실수는 정확히 허수부가 0 인 수, 곧 정확히 z = z̄ 인 수라고 적는다. (4)의 첫 문장이 그것이다. 같은 쪽의 |z|² = x² + y² = (x + iy)(x − iy) = z z̄ 는 (5)와 같은 계산이다(절댓값은 다음 항목에서 정의하므로 이 항목은 z z̄ 를 (Re z)² + (Im z)² 로 적는다). Proposition 11.4.2 의 증명(p.165)은 실수 x 에서 e^{ix} 의 켤레가 e^{−ix} 임을 쓴 뒤 (e^{ix} + e^{−ix})/2 = Re(e^{ix}) 라 적는데, 이것은 (3)의 Re z = (z + z̄)/2 를 z = e^{ix} 에 쓴 것이다. 같은 증명은 켤레가 연속이라는 것과 지수함수의 정의에서 e^z 의 켤레가 e^{z̄} 라는 것을 얻는데, 그 바탕인 부분합의 켤레는 (2)의 합과 곱의 켤레이다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers (p.49), 4.5절 Exercises 19 (p.57), 9.4절 Exercises 34–35 (p.123), 23.1절 Field Automorphisms, Example 23.3 (p.294)
    checked: original
    note: "Judson 은 a + bi 의 complex conjugate 를 a − bi 로 정의한다(p.49). 4.5절 연습문제 19(p.57)의 (b) z z̄ = |z|², (c) z⁻¹ = z̄/|z|² 는 (5)와 다음 항목(복소수의 절댓값)의 진술에 해당한다. 9.4절 연습문제 34(p.123)는 켤레가 덧셈군 ℂ 의 자기동형임을, 연습문제 35 는 곱셈군 ℂ* 의 자기동형임을 증명하게 한다. 23.1절 Example 23.3(p.294)은 켤레 σ(a + bi) = a − bi 가 체 ℂ 의 자기동형(automorphism)이고 σ(a) = a 이므로 실수를 고정한다고 적는다. (6)이 이 사실들을 환 동형사상의 말로 진술한 것이다. 예시 '4 − 3i 와 −2 + i 의 켤레'의 계산은 p.49 의 Example 4.16 이 2 + 3i 의 켤레 2 − 3i 를 적은 것과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(ι 의 약속과 정의가 둘이 되지 않는지, 순서가 없다는 증명 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]]의 것이다.

**켤레복소수.** 복소수 $z$의 **켤레복소수**(complex conjugate) $\overline{z}$를
$$
\overline{z} = (\operatorname{Re} z,\ -\operatorname{Im} z)
$$
로 정한다. [[complex-field]]의 (4)에 의해 이것은 $\overline{z} = \operatorname{Re} z - (\operatorname{Im} z) i$이다. 식의 켤레는 $\overline{z + w}$처럼 막대를 식 전체에 긋는다. 각 복소수 $z$에 $\overline{z}$를 대응시키는 함수 $\mathbb{C} \to \mathbb{C}$를 **켤레를 취하는 함수**라 한다. 막대 기호는 위상수학에서 집합의 폐포에도 쓰이지만, 막대 아래가 복소수이면 이 항목의 뜻이다.

다음이 성립한다. 아래에서 $z$, $w$는 복소수이고 $a$, $b$는 실수이다.

1. (실수부와 허수부) $\operatorname{Re} \overline{z} = \operatorname{Re} z$이고 $\operatorname{Im} \overline{z} = -\operatorname{Im} z$이다. $\overline{\overline{z}} = z$이다. $\overline{a + bi} = a - bi$이다.
2. (연산과 켤레) $\overline{z + w} = \overline{z} + \overline{w}$, $\overline{zw} = \overline{z}\,\overline{w}$, $\overline{-z} = -\overline{z}$, $\overline{z - w} = \overline{z} - \overline{w}$이다. $z \ne 0$이면 $\overline{z} \ne 0$이고 $\overline{z^{-1}} = (\overline{z})^{-1}$이다. $w \ne 0$이면 $\overline{z / w} = \overline{z} / \overline{w}$이다.
3. (실수부와 허수부를 켤레로 나타내기) $z + \overline{z} = 2 \operatorname{Re} z$이고 $z - \overline{z} = 2 (\operatorname{Im} z) i$이다. 따라서 $\operatorname{Re} z = (z + \overline{z}) / 2$이고 $(\operatorname{Im} z) i = (z - \overline{z}) / 2$이다. (실수는 [[complex-field]]의 (3)의 약속대로 읽는다. 곧 $z + \overline{z} = \iota(2 \operatorname{Re} z)$이고 $\iota(\operatorname{Re} z) = (z + \overline{z}) / \iota(2)$이다.)
4. (실수인 복소수) $z$가 실수인 복소수인 것은 정확히 $\overline{z} = z$일 때이다. 특히 실수 $x$에 대하여 $\overline{\iota(x)} = \iota(x)$이다. 또 $\operatorname{Re} z = 0$인 것은 정확히 $\overline{z} = -z$일 때이다.
5. ($z$와 $\overline{z}$의 곱) $z \overline{z} = \overline{z} z = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$이다. 곧 $z \overline{z}$는 실수 $(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$을 $\iota$로 옮긴 실수인 복소수이다. $z \overline{z} = 0$인 것은 정확히 $z = 0$일 때이다.
6. (켤레를 취하는 함수) 켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$는 환 $\mathbb{C}$에서 환 $\mathbb{C}$로의 [[ring-homomorphism|환 동형사상]]이고, 그 [[inverse-function|역함수]]는 자기 자신이다. 이 함수는 실수인 복소수를 그대로 둔다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, the convention for writing real numbers where complex numbers are required, and the form $a + bi$ are those of the entry on the field of complex numbers.

**Complex conjugate.** The **complex conjugate** $\overline{z}$ of a complex number $z$ is defined by
$$
\overline{z} = (\operatorname{Re} z,\ -\operatorname{Im} z).
$$
By item (4) of the entry on the field of complex numbers, $\overline{z} = \operatorname{Re} z - (\operatorname{Im} z) i$. The conjugate of an expression is written with the bar over the whole expression, as in $\overline{z + w}$. The function $\mathbb{C} \to \mathbb{C}$ assigning $\overline{z}$ to each complex number $z$ is called **complex conjugation**. The bar is also used in topology for the closure of a set, but when the expression under the bar is a complex number it has the meaning of this entry.

The following hold. Below, $z$ and $w$ are complex numbers and $a$ and $b$ are real numbers.

1. (Real and imaginary parts) $\operatorname{Re} \overline{z} = \operatorname{Re} z$ and $\operatorname{Im} \overline{z} = -\operatorname{Im} z$. Moreover $\overline{\overline{z}} = z$ and $\overline{a + bi} = a - bi$.
2. (Operations and conjugation) $\overline{z + w} = \overline{z} + \overline{w}$, $\overline{zw} = \overline{z}\,\overline{w}$, $\overline{-z} = -\overline{z}$, and $\overline{z - w} = \overline{z} - \overline{w}$. If $z \ne 0$, then $\overline{z} \ne 0$ and $\overline{z^{-1}} = (\overline{z})^{-1}$. If $w \ne 0$, then $\overline{z / w} = \overline{z} / \overline{w}$.
3. (Real and imaginary parts through conjugation) $z + \overline{z} = 2 \operatorname{Re} z$ and $z - \overline{z} = 2 (\operatorname{Im} z) i$. Hence $\operatorname{Re} z = (z + \overline{z}) / 2$ and $(\operatorname{Im} z) i = (z - \overline{z}) / 2$. (Real numbers are read by the convention of item (3) of the entry on the field of complex numbers; thus $z + \overline{z} = \iota(2 \operatorname{Re} z)$ and $\iota(\operatorname{Re} z) = (z + \overline{z}) / \iota(2)$.)
4. (Real complex numbers) $z$ is a real complex number exactly when $\overline{z} = z$. In particular $\overline{\iota(x)} = \iota(x)$ for every real number $x$. Moreover $\operatorname{Re} z = 0$ exactly when $\overline{z} = -z$.
5. (The product of $z$ and $\overline{z}$) $z \overline{z} = \overline{z} z = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$; that is, $z \overline{z}$ is the real complex number obtained by carrying the real number $(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$ over by $\iota$. Moreover $z \overline{z} = 0$ exactly when $z = 0$.
6. (Complex conjugation) Complex conjugation $\mathbb{C} \to \mathbb{C}$ is a ring isomorphism from the ring $\mathbb{C}$ to the ring $\mathbb{C}$, and its inverse function is itself. It leaves every real complex number unchanged.
:::

## 직관

복소수를 평면의 점 $(a, b)$로 그리면, 켤레 $\overline{z} = (a, -b)$는 가로축을 거울로 삼아 비춘 점입니다. 거울에 비친 모습을 다시 비추면 원래 모습이 되듯 $\overline{\overline{z}} = z$이고((1)), 거울 위에 놓인 것은 비춰도 그대로이듯 가로축 위의 점, 곧 실수인 복소수는 켤레를 취해도 그대로입니다((4)).

거울의 비유가 알려 주지 않는 것은 곱셈입니다. 평면의 반사가 덧셈과 맞는 것은 그림으로 볼 수 있지만, 곱 $\overline{zw}$가 $\overline{z}\,\overline{w}$와 같다는 것((2))은 곱셈의 식 $(ac - bd,\ ad + bc)$에서 $b$와 $d$의 부호를 함께 바꾸면 첫째 성분은 그대로이고 둘째 성분만 부호가 바뀐다는 계산에서 나옵니다. 그래서 켤레를 취하는 함수는 덧셈과 곱셈을 모두 보존하는 환 동형사상이고((6)), 켤레를 취해도 $i$에 관한 계산 법칙이 그대로 맞습니다. $i$와 $-i$는 둘 다 제곱하여 $-1$이 되는 수이고([[complex-field|복소수체]]의 (5)), 켤레는 이 둘을 맞바꿉니다.

(3)과 (5)는 켤레가 실수부, 허수부와 어떻게 이어지는지를 보여 줍니다. 특히 $z \overline{z}$는 언제나 실수인 복소수이고 $z = 0$일 때만 $0$이어서, 다음 항목 [[modulus-of-complex-number|복소수의 절댓값]]의 바탕이 됩니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (5)"는 [[order-properties-of-reals]]의 번호, "복소수의 (1)", "복소수체의 (1)"은 [[complex-number]]와 [[complex-field]]의 번호이다. $z = (p, q)$, $w = (r, s)$로 둔다($p$, $q$, $r$, $s$는 실수). 진술의 첫 문단의 $\overline{z} = \operatorname{Re} z - (\operatorname{Im} z) i$는 복소수체의 (4)의 $a - bi = (a, -b)$를 $a = p$, $b = q$에 쓴 것이다. 아래에서 (K8)의 (ii)에 의해 $-0 = 0$($0 + 0 = 0$이므로), (K9)에 의해 $-(-x) = x$이다.

**1의 증명.** $\overline{z} = (p, -q)$이므로 실수부와 허수부의 정의에 의해 $\operatorname{Re} \overline{z} = p$, $\operatorname{Im} \overline{z} = -q$이다. 다시 정의를 쓰면 $\overline{\overline{z}} = (p, -(-q)) = (p, q) = z$이다. 복소수체의 (4)에 의해 $a + bi = (a, b)$이므로 $\overline{a + bi} = (a, -b) = a - bi$이다.

**2의 증명.** 덧셈의 정의와 (K12)의 (iv)에 의해 $\overline{z + w} = (p + r,\ -(q + s)) = (p + r,\ (-q) + (-s)) = \overline{z} + \overline{w}$이다. 곱셈의 정의에 의해 $zw = (pr - qs,\ ps + qr)$이므로 $\overline{zw} = (pr - qs,\ -(ps + qr))$이다. 한편
$$
\begin{aligned}
\overline{z}\,\overline{w} &= (p, -q)(r, -s) \\
&= \bigl(pr - (-q)(-s), \\
&\qquad p(-s) + (-q)r\bigr)
\end{aligned}
$$
이고, (K12)의 (ii), (iii), (iv)에 의해 $(-q)(-s) = qs$, $p(-s) + (-q)r = -(ps) + (-(qr)) = -(ps + qr)$이다. 따라서 $\overline{zw} = \overline{z}\,\overline{w}$이다. 덧셈의 경우와 $z + (-z) = 0$, $\overline{0} = (0, -0) = 0$에 의해 $\overline{z} + \overline{-z} = \overline{z + (-z)} = \overline{0} = 0$이므로, 덧셈의 역원은 하나뿐이어서 $\overline{-z} = -\overline{z}$이다. 그러면 $\overline{z - w} = \overline{z + (-w)} = \overline{z} + \overline{-w} = \overline{z} - \overline{w}$이다.

$z \ne 0$이라 하자. $\overline{z} = 0$이라면 (1)에 의해 $z = \overline{\overline{z}} = \overline{0} = 0$이 되므로 $\overline{z} \ne 0$이다. $zz^{-1} = 1$이므로 곱의 경우에 의해 $\overline{z}\,\overline{z^{-1}} = \overline{1}$이고, $\overline{1} = (1, -0) = (1, 0) = 1$이다. $\mathbb{C}$는 가환환이므로 $\overline{z^{-1}}\,\overline{z} = 1$이기도 하고, [[field|가역원과 체]]에서 역원은 하나뿐이므로 $\overline{z^{-1}} = (\overline{z})^{-1}$이다. $w \ne 0$이면 곱의 경우와 방금 보인 것에 의해 $\overline{z / w} = \overline{z w^{-1}} = \overline{z}\,\overline{w^{-1}} = \overline{z}\,(\overline{w})^{-1} = \overline{z} / \overline{w}$이다.

**3의 증명.** 덧셈의 정의에 의해 $z + \overline{z} = (p + p,\ q + (-q)) = (p + p, 0)$이고, (K3), (K4), (K7)에 의해 $p + p = 1p + 1p = (1 + 1)p = 2p$이다. 따라서 $z + \overline{z} = (2p, 0) = \iota(2p) = \iota(2 \operatorname{Re} z)$이다. 또 $z - \overline{z} = z + (-\overline{z}) = (p + (-p),\ q + (-(-q))) = (0, q + q) = (0, 2q)$이고, 복소수체의 (4)에 의해 $(0, 2q) = 0 + (2q) i = \iota(2q) i$, 곧 약속대로 읽은 $2 (\operatorname{Im} z) i$이다. (K7)에 의해 $2 \ne 0$이므로 복소수체의 (2)의 (i)에 의해 $\iota(2) \ne 0$이고, $\iota(2p) = \iota(2)\iota(p)$의 양변에 $\iota(2)^{-1}$을 곱하면 $\iota(p) = (z + \overline{z}) / \iota(2)$이다. 같은 방법으로 $\iota(q) i = \iota(2)^{-1}\iota(2)\iota(q) i = (z - \overline{z}) / \iota(2)$이다.

**4의 증명.** 복소수의 (1)에 의해 $\overline{z} = z$, 곧 $(p, -q) = (p, q)$인 것은 정확히 $-q = q$일 때이다. $-q = q$이면 양변에 $q$를 더해 $0 = q + q = 2q$이고, $2 \ne 0$이므로 (K10)에 의해 $q = 0$이다. 거꾸로 $q = 0$이면 $-q = -0 = 0 = q$이다. 따라서 $\overline{z} = z$인 것은 정확히 $\operatorname{Im} z = 0$, 곧 $z$가 실수인 복소수일 때이다. $\operatorname{Im} \iota(x) = 0$이므로 $\overline{\iota(x)} = \iota(x)$이다. 마지막 문장: 복소수체의 (1)에 의해 $-z = (-p, -q)$이므로 $\overline{z} = -z$인 것은 정확히 $p = -p$일 때이고, 같은 계산으로 이것은 정확히 $p = 0$일 때이다.

**5의 증명.** 곱셈의 정의와 (K12)의 (ii), (K1)에 의해
$$
\begin{aligned}
z \overline{z} &= (p, q)(p, -q) \\
&= \bigl(pp - q(-q),\ p(-q) + qp\bigr) \\
&= (pp + qq,\ 0)
\end{aligned}
$$
이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $pp + qq = p^2 + q^2$이므로 $z\overline{z} = \iota\bigl((\operatorname{Re} z)^2 + (\operatorname{Im} z)^2\bigr)$이고, 곱셈의 교환법칙에 의해 $\overline{z} z = z \overline{z}$이다. $z \overline{z} = 0$이면 복소수체의 (2)의 단사와 $\iota(0) = 0$에 의해 $pp + qq = 0$이고, 순서 성질 (5)의 (iv)에 의해 $p = q = 0$, 곧 $z = 0$이다. 거꾸로 $z = 0$이면 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $z \overline{z} = 0$이다.

**6의 증명.** 켤레를 취하는 함수를 $f$라 하자. (2)에 의해 $f(z + w) = f(z) + f(w)$이고 $f(zw) = f(z)f(w)$이므로 $f$는 환 준동형이다. $f(z) = f(w)$이면 (1)에 의해 $z = \overline{\overline{z}} = \overline{\overline{w}} = w$이므로 $f$는 단사이고, 모든 $w$에서 $w = \overline{\overline{w}} = f(\overline{w})$이므로 $f : \mathbb{C} \to \mathbb{C}$는 전사이다. 따라서 $f$는 환 동형사상이다. 역관계 $f^{-1}$에 대하여 $(w, z) \in f^{-1}$인 것은 정확히 $(z, w) \in f$, 곧 $w = \overline{z}$일 때이고, (1)에 의해 이것은 정확히 $z = \overline{w}$, 곧 $(w, z) \in f$일 때이다. 따라서 $f^{-1} = f$이고 이것은 함수 $\mathbb{C} \to \mathbb{C}$이므로 $f$의 역함수는 $f$ 자신이다. 실수인 복소수를 그대로 둔다는 것은 (4)이다. $\blacksquare$
:::

## 예시와 반례

:::example[4 − 3i 와 −2 + i 의 켤레]
$z = 4 - 3i$, $w = -2 + i$라 합시다. (1)에 의해 $\overline{z} = 4 + 3i$, $\overline{w} = -2 - i$입니다. 곱셈의 정의로 $zw = (4 \cdot (-2) - (-3) \cdot 1,\ 4 \cdot 1 + (-3) \cdot (-2)) = -5 + 10i$이므로 $\overline{zw} = -5 - 10i$입니다. 한편 $\overline{z}\,\overline{w} = (4 \cdot (-2) - 3 \cdot (-1),\ 4 \cdot (-1) + 3 \cdot (-2)) = -5 - 10i$이어서 (2)와 맞습니다. 또 $z + \overline{z} = 8 = 2 \cdot 4$, $z - \overline{z} = -6i = 2 \cdot (-3) i$, $z\overline{z} = 16 + 9 = 25$입니다.

경계의 경우도 봅시다. $\overline{i} = -i$, $\overline{-1} = -1$, $\overline{0} = 0$입니다. 실수부가 $0$인 $5i$는 $\overline{5i} = -5i$로 (4)의 마지막 문장과 맞습니다.
:::

:::counterexample[곱을 보존하지 않는 두 함수의 예]
켤레를 취하는 함수처럼 덧셈을 보존하는 함수라도 곱을 보존하지 않을 수 있습니다. 부호를 바꾸는 함수, 곧 $z$에 $-z$를 대응시키는 함수 $g : \mathbb{C} \to \mathbb{C}$는 덧셈의 결합법칙과 교환법칙에 의해 $(z + w) + ((-z) + (-w)) = (z + (-z)) + (w + (-w)) = 0$이고 덧셈의 역원은 하나뿐이므로 $g(z + w) = -(z + w) = (-z) + (-w) = g(z) + g(w)$이지만, $g(1 \cdot 1) = -1$이고 $g(1)g(1) = (-1)(-1) = 1$이므로 곱을 보존하지 않습니다. 실수부를 취하는 함수 $\operatorname{Re} : \mathbb{C} \to \mathbb{R}$도 [[complex-number|복소수]]의 (2)에 의해 덧셈을 보존하지만 $\operatorname{Re}(ii) = -1$이고 $(\operatorname{Re} i)(\operatorname{Re} i) = 0$입니다. 두 함수 모두 환 준동형이 아닙니다.
:::

## 확인 질문

:::check[$z = (1 + 2i)/(3 - i)$의 켤레를 구하라.]
(2)에 의해 $\overline{z} = \overline{1 + 2i} / \overline{3 - i} = (1 - 2i)/(3 + i)$입니다. 값으로 확인하면, [[complex-field|복소수체]]의 (1)에 의해 $(3 - i)^{-1} = \tfrac{3}{10} + \tfrac{1}{10} i$이므로 $z = (1 + 2i)\bigl(\tfrac{3}{10} + \tfrac{1}{10} i\bigr) = \tfrac{1}{10} + \tfrac{7}{10} i$이고, $(3 + i)^{-1} = \tfrac{3}{10} - \tfrac{1}{10} i$이므로 $(1 - 2i)\bigl(\tfrac{3}{10} - \tfrac{1}{10} i\bigr) = \tfrac{1}{10} - \tfrac{7}{10} i$입니다. 이것은 (1)에 의해 $\overline{z}$와 같습니다.
:::

:::check[$z \overline{z} = zz$인 복소수 $z$는 어떤 것인가?]
$z\overline{z} = zz$이면 $z(\overline{z} - z) = 0$입니다. [[field|가역원과 체]]의 (3)에 의해 체는 [[integral-domain|정역]]이므로 $z = 0$이거나 $\overline{z} - z = 0$, 곧 $\overline{z} = z$입니다. (4)에 의해 어느 경우든 $z$는 실수인 복소수입니다($0$도 실수인 복소수입니다). 거꾸로 $z$가 실수인 복소수이면 $\overline{z} = z$이므로 등식이 성립합니다. 답은 실수인 복소수 전체입니다. $z = i$이면 $i\overline{i} = 1$이지만 $ii = -1$입니다.
:::
