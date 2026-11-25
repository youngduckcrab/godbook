---
title: 복소수
title_en: Complex Number
aliases: [복소평면, 실수부, 허수부, 허수단위, complex plane, real part, imaginary part, imaginary unit]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수는 실수의 순서쌍 (a, b) 이고 그 전체가 ℂ = ℝ × ℝ 이다. 덧셈은 성분끼리 더하고 곱셈은 (a, b)(c, d) = (ac − bd, ad + bc) 로 정한다. 첫째 성분을 실수부 Re z, 둘째 성분을 허수부 Im z 라 하고 허수단위를 i = (0, 1) 로 둔다. 두 복소수가 같을 조건, 연산의 실수부와 허수부, ii = (−1, 0) 을 진술한다.
requires: [set, cartesian-product, function, binary-operation, real-number-arithmetic]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1절 Complex numbers, 11.1.1절 The complex plane (p.139), Definition 11.1.1 (p.140)
    checked: original
    note: "출처는 복소수를 ℝ² 의 순서쌍 (x, y) 로 두고 덧셈과 곱셈을 이 항목과 같은 식으로 정의하며, 그 집합을 ℂ, 평면으로서 complex plane 이라 부른다(p.139). 이 사이트는 ℝ² 대신 곱집합 ℝ × ℝ 로 쓴다. 출처는 이어서 x ∈ ℝ 를 (x, 0) 과 동일시하고 i = (0, 1) 을 정의한 뒤 (x, y) 를 x + iy 로 쓰며 그 뒤로 순서쌍 표기를 쓰지 않는다(p.139). 이 항목은 동일시를 하지 않고 순서쌍으로 정의를 마친다. 동일시와 a + bi 꼴은 다음 항목(복소수체)의 ι 로 다룬다. (4)의 ii = (−1, 0) 은 출처 p.139 의 계산 i² = (0, 1)(0, 1) = (0 − 1, 0 + 0) = −1 과 같은 계산이다. 출처의 Definition 11.1.1(p.140)은 z = x + iy 에 대해 Re z := x, Im z := y 로 정의한다. 이 항목은 같은 것을 순서쌍의 첫째·둘째 성분으로 정의한다. 예시 '두 복소수의 합과 곱'의 수 (2, −1), (−3, 4) 는 출처의 Figure 11.1(p.140, 점 1, i, x, iy, x + iy)과 다른 수이다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, p.49–50
    checked: original
    note: "Judson 은 ℂ = {a + bi : a, b ∈ ℝ}, i² = −1 로 정의하고(p.49) 순서쌍으로 만들지 않는다. a 를 real part, b 를 imaginary part 라 부르고, 덧셈 (a + c) + (b + d)i 와 곱셈 (ac − bd) + (ad + bc)i 는 이 항목의 두 식과 같은 식이다(p.49. 곱셈은 '다항식처럼 곱하고 i² = −1 을 쓴다'고 설명한다). p.50 은 a + bi 를 xy 평면의 순서쌍 (a, b) 로 나타내는 것을 rectangular(Cartesian) representation 이라 부르고 Figure 4.17 에 2 + 3i, 1 − 2i, −3 + 2i 를 그린다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(ι 의 약속과 정의가 둘이 되지 않는지, 순서가 없다는 증명 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
실수 전체의 집합 $\mathbb{R}$와 그 덧셈, 곱셈, $-a$, 뺄셈은 [[real-number-arithmetic]]의 것이다.

**복소수.** [[cartesian-product|곱집합]] $\mathbb{R} \times \mathbb{R}$를 $\mathbb{C}$로 쓰고, $\mathbb{C}$의 원소를 **복소수**(complex number)라 한다. 곧 복소수는 실수 $a$, $b$의 순서쌍 $(a, b)$이다. $\mathbb{C}$를 **복소평면**(complex plane)이라고도 부른다.

**덧셈과 곱셈.** 실수 $a$, $b$, $c$, $d$에 대하여
$$
\begin{aligned}
(a, b) + (c, d) &= (a + c,\ b + d), \\
(a, b)(c, d) &= (ac - bd,\ ad + bc)
\end{aligned}
$$
로 정한다. 오른쪽의 성분은 실수의 계산이다. $\mathbb{C} \times \mathbb{C}$의 원소 $\bigl((a, b), (c, d)\bigr)$마다 오른쪽은 $\mathbb{C}$의 원소 하나로 정해지므로, 두 식은 [[function|함수]] $+ : \mathbb{C} \times \mathbb{C} \to \mathbb{C}$와 $\cdot : \mathbb{C} \times \mathbb{C} \to \mathbb{C}$, 곧 $\mathbb{C}$ 위의 두 [[binary-operation|이항연산]]을 정한다. 이것을 복소수의 **덧셈**과 **곱셈**이라 하고, 곱 $(a, b) \cdot (c, d)$는 가운뎃점 없이 $(a, b)(c, d)$로 쓴다. 실수의 덧셈·곱셈과 같은 기호이며, 기호의 양쪽이 복소수이면 이 항목의 연산이다.

**실수부와 허수부.** 복소수 $z = (a, b)$의 첫째 성분 $a$를 $z$의 **실수부**(real part), 둘째 성분 $b$를 $z$의 **허수부**(imaginary part)라 하고 $\operatorname{Re} z$, $\operatorname{Im} z$로 쓴다. 실수부와 허수부는 실수이다. 식의 실수부는 $\operatorname{Re}(z + w)$처럼 괄호를 친다.

**허수단위.** 복소수 $i = (0, 1)$을 **허수단위**(imaginary unit)라 한다. 글자 $i$는 이 뜻으로만 쓰고 첨자에 쓰지 않는다.

다음이 성립한다. 아래에서 $z$, $w$는 복소수이고 $a$, $b$, $c$, $d$, $x$, $y$는 실수이다.

1. (같음) $z = w$인 것은 정확히 $\operatorname{Re} z = \operatorname{Re} w$이고 $\operatorname{Im} z = \operatorname{Im} w$일 때이다. 모든 복소수 $z$는 $z = (\operatorname{Re} z, \operatorname{Im} z)$이다.
2. (연산의 실수부와 허수부)
   $$
   \begin{aligned}
   \operatorname{Re}(z + w) &= \operatorname{Re} z + \operatorname{Re} w, \\
   \operatorname{Im}(z + w) &= \operatorname{Im} z + \operatorname{Im} w, \\
   \operatorname{Re}(zw) &= (\operatorname{Re} z)(\operatorname{Re} w) \\
   &\qquad - (\operatorname{Im} z)(\operatorname{Im} w), \\
   \operatorname{Im}(zw) &= (\operatorname{Re} z)(\operatorname{Im} w) \\
   &\qquad + (\operatorname{Im} z)(\operatorname{Re} w)
   \end{aligned}
   $$
   이다.
3. (둘째 성분이 $0$인 복소수) $(x, 0) + (y, 0) = (x + y, 0)$이고 $(x, 0)(y, 0) = (xy, 0)$이다. 또 $(x, 0)(c, d) = (xc, xd)$이다.
4. (허수단위의 곱) $ii = (-1, 0)$이다. $(a, b)i = (-b, a)$, 곧 $\operatorname{Re}(zi) = -\operatorname{Im} z$이고 $\operatorname{Im}(zi) = \operatorname{Re} z$이다. 또 $(a, b) = (a, 0) + (b, 0)i$이다.
:::

:::english
The set $\mathbb{R}$ of real numbers, its addition and multiplication, $-a$, and subtraction are those of the entry on real arithmetic.

**Complex numbers.** The Cartesian product $\mathbb{R} \times \mathbb{R}$ is denoted $\mathbb{C}$, and its elements are called **complex numbers**. Thus a complex number is an ordered pair $(a, b)$ of real numbers $a$, $b$. $\mathbb{C}$ is also called the **complex plane**.

**Addition and multiplication.** For real numbers $a$, $b$, $c$, $d$, define
$$
\begin{aligned}
(a, b) + (c, d) &= (a + c,\ b + d), \\
(a, b)(c, d) &= (ac - bd,\ ad + bc).
\end{aligned}
$$
The components on the right are computed with real numbers. For each element $\bigl((a, b), (c, d)\bigr)$ of $\mathbb{C} \times \mathbb{C}$ the right-hand side is a single element of $\mathbb{C}$, so the two formulas define functions $+ : \mathbb{C} \times \mathbb{C} \to \mathbb{C}$ and $\cdot : \mathbb{C} \times \mathbb{C} \to \mathbb{C}$, that is, two binary operations on $\mathbb{C}$. They are called the **addition** and **multiplication** of complex numbers, and the product $(a, b) \cdot (c, d)$ is written $(a, b)(c, d)$ without the dot. These are the same symbols as for real addition and multiplication; when both sides of the symbol are complex numbers, the operations of this entry are meant.

**Real and imaginary parts.** For a complex number $z = (a, b)$, the first component $a$ is called the **real part** of $z$ and the second component $b$ the **imaginary part** of $z$; they are written $\operatorname{Re} z$ and $\operatorname{Im} z$. The real and imaginary parts are real numbers. The real part of an expression is written with parentheses, as in $\operatorname{Re}(z + w)$.

**Imaginary unit.** The complex number $i = (0, 1)$ is called the **imaginary unit**. The letter $i$ is used only in this sense and not as an index.

The following hold. Below, $z$ and $w$ are complex numbers and $a$, $b$, $c$, $d$, $x$, $y$ are real numbers.

1. (Equality) $z = w$ exactly when $\operatorname{Re} z = \operatorname{Re} w$ and $\operatorname{Im} z = \operatorname{Im} w$. Every complex number $z$ satisfies $z = (\operatorname{Re} z, \operatorname{Im} z)$.
2. (Real and imaginary parts of the operations)
   $$
   \begin{aligned}
   \operatorname{Re}(z + w) &= \operatorname{Re} z + \operatorname{Re} w, \\
   \operatorname{Im}(z + w) &= \operatorname{Im} z + \operatorname{Im} w, \\
   \operatorname{Re}(zw) &= (\operatorname{Re} z)(\operatorname{Re} w) \\
   &\qquad - (\operatorname{Im} z)(\operatorname{Im} w), \\
   \operatorname{Im}(zw) &= (\operatorname{Re} z)(\operatorname{Im} w) \\
   &\qquad + (\operatorname{Im} z)(\operatorname{Re} w).
   \end{aligned}
   $$
3. (Complex numbers with second component $0$) $(x, 0) + (y, 0) = (x + y, 0)$ and $(x, 0)(y, 0) = (xy, 0)$. Moreover $(x, 0)(c, d) = (xc, xd)$.
4. (Products with the imaginary unit) $ii = (-1, 0)$. Moreover $(a, b)i = (-b, a)$, that is, $\operatorname{Re}(zi) = -\operatorname{Im} z$ and $\operatorname{Im}(zi) = \operatorname{Re} z$. Also $(a, b) = (a, 0) + (b, 0)i$.
:::

## 직관

복소수는 새로운 종류의 수를 상상해서 만드는 것이 아니라, 실수 두 개를 짝지은 것에 덧셈과 곱셈을 정해 준 것입니다. 그래서 복소수 하나는 평면의 점 하나로 그릴 수 있고, 덧셈은 두 점의 좌표를 성분끼리 더하는 것입니다. 지도에서 "동쪽으로 몇, 북쪽으로 몇"이라는 두 수로 위치를 말하는 것과 같습니다. 두 위치가 같다는 것은 두 수가 각각 같다는 것이고((1)), 두 번 이동한 결과는 동쪽 이동끼리, 북쪽 이동끼리 더한 것입니다((2)의 첫 두 줄).

비유가 맞지 않는 곳은 곱셈입니다. 지도의 두 위치를 곱한다는 말에는 뜻이 없지만, 복소수의 곱 $(ac - bd,\ ad + bc)$는 실수부에 허수부끼리의 곱이 빼기로 섞여 들어갑니다. 이 식으로 $i = (0, 1)$을 제곱하면 $(-1, 0)$이 나옵니다((4)). 실수의 곱셈에는 이런 일이 없습니다. 둘째 성분이 $0$인 복소수끼리는 실수처럼 더하고 곱해지고((3)), 모든 복소수가 $(a, 0) + (b, 0)i$로 쓰이므로((4)), 이 둘이 다음 항목 [[complex-field|복소수체]]에서 복소수를 $a + bi$로 쓰는 근거가 됩니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. $z = (a, b)$, $w = (c, d)$로 둔다. 실수부와 허수부의 정의에 의해 $\operatorname{Re} z = a$, $\operatorname{Im} z = b$, $\operatorname{Re} w = c$, $\operatorname{Im} w = d$이다.

**1의 증명.** [[cartesian-product|곱집합]]의 순서쌍의 같음에 의해 $(a, b) = (c, d)$인 것은 정확히 $a = c$이고 $b = d$일 때, 곧 $\operatorname{Re} z = \operatorname{Re} w$이고 $\operatorname{Im} z = \operatorname{Im} w$일 때이다. 또 $(\operatorname{Re} z, \operatorname{Im} z) = (a, b) = z$이다.

**2의 증명.** 덧셈과 곱셈의 정의에 의해 $z + w = (a + c, b + d)$이고 $zw = (ac - bd, ad + bc)$이다. 이 두 순서쌍의 첫째·둘째 성분을 읽으면 $\operatorname{Re}(z + w) = a + c$, $\operatorname{Im}(z + w) = b + d$, $\operatorname{Re}(zw) = ac - bd$, $\operatorname{Im}(zw) = ad + bc$이고, 이것이 (2)의 네 등식이다.

**3의 증명.** 덧셈의 정의와 (K4)에 의해 $(x, 0) + (y, 0) = (x + y, 0 + 0) = (x + y, 0)$이다. 곱셈의 정의에 의해 $(x, 0)(c, d) = (xc - 0d,\ xd + 0c)$이고, (K9)에 의해 $0d = 0$, $0c = 0$이다. (K4)에 의해 $0 + 0 = 0$이므로 (K8)의 (ii)에 의해 $-0 = 0$이고, 따라서 뺄셈의 정의와 (K4)에 의해 $xc - 0 = xc + 0 = xc$, $xd + 0 = xd$이다. 곧 $(x, 0)(c, d) = (xc, xd)$이다. $(c, d) = (y, 0)$으로 두면 $(x, 0)(y, 0) = (xy, x0) = (xy, 0)$이다((K9)).

**4의 증명.** 곱셈의 정의에 의해 $ii = (0, 1)(0, 1) = (0 \cdot 0 - 1 \cdot 1,\ 0 \cdot 1 + 1 \cdot 0)$이다. (K9)와 (K4)에 의해 $0 \cdot 0 = 0$, $1 \cdot 1 = 1$, $0 \cdot 1 = 0$, $1 \cdot 0 = 0$이므로 첫째 성분은 $0 - 1 = 0 + (-1) = -1$이고 둘째 성분은 $0 + 0 = 0$이다. 따라서 $ii = (-1, 0)$이다. 다음으로 $(a, b)i = (a, b)(0, 1) = (a0 - b1,\ a1 + b0)$이고, (K9), (K4)에 의해 첫째 성분은 $0 - b = 0 + (-b) = -b$, 둘째 성분은 $a + 0 = a$이다. 따라서 $(a, b)i = (-b, a)$이고, $z = (a, b)$에서 이것은 $\operatorname{Re}(zi) = -b = -\operatorname{Im} z$, $\operatorname{Im}(zi) = a = \operatorname{Re} z$이다. 이것을 $(b, 0)$에 쓰면 $(b, 0)i = (-0, b) = (0, b)$이고, (K4)에 의해 $(a, 0) + (0, b) = (a + 0, 0 + b) = (a, b)$이다. 따라서 $(a, b) = (a, 0) + (b, 0)i$이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 복소수의 합과 곱]
$z = (2, -1)$, $w = (-3, 4)$라 합시다. $\operatorname{Re} z = 2$, $\operatorname{Im} z = -1$입니다. 덧셈의 정의에 의해 $z + w = (2 + (-3),\ -1 + 4) = (-1, 3)$이고, 곱셈의 정의에 의해
$$
\begin{aligned}
zw &= \bigl(2 \cdot (-3) - (-1) \cdot 4, \\
&\qquad 2 \cdot 4 + (-1) \cdot (-3)\bigr) \\
&= (-6 + 4,\ 8 + 3) = (-2, 11)
\end{aligned}
$$
입니다. (2)의 넷째 줄로도 $\operatorname{Im}(zw) = 2 \cdot 4 + (-1) \cdot (-3) = 11$입니다. (4)에 의해 $zi = (-(-1), 2) = (1, 2)$입니다.
:::

:::counterexample[성분끼리 곱한 결과와 비교]
곱셈을 덧셈처럼 성분끼리 곱하는 것, 곧 $(a, b)$와 $(c, d)$에 $(ac, bd)$를 대응시키는 연산으로 정했다고 해 봅시다. 그러면 $(0, 1)$과 $(0, 1)$의 곱은 $(0, 1)$이지만, 이 항목의 곱셈으로는 $ii = (-1, 0)$입니다. 또 성분끼리 곱하면 $(1, 0)$과 $(0, 1)$처럼 둘 다 $(0, 0)$이 아닌 두 순서쌍의 곱이 $(0, 0)$이 되는데, 이 항목의 곱셈으로는 (3)에 의해 $(1, 0)(0, 1) = (0, 1)$입니다.
:::

## 확인 질문

:::check[$(0, 3)$과 $(0, 3)$의 곱은 무엇인가?]
곱셈의 정의에 의해 $(0, 3)(0, 3) = (0 \cdot 0 - 3 \cdot 3,\ 0 \cdot 3 + 3 \cdot 0) = (-9, 0)$입니다. 실수부가 $0$인 복소수를 제곱했는데 허수부가 $0$인 복소수가 나옵니다.
:::

:::check[$\operatorname{Re}(zw) = (\operatorname{Re} z)(\operatorname{Re} w)$는 어떤 복소수 $z$, $w$에서 성립하는가?]
(2)의 셋째 줄에 의해 $\operatorname{Re}(zw) = (\operatorname{Re} z)(\operatorname{Re} w) - (\operatorname{Im} z)(\operatorname{Im} w)$입니다. 실수 $p$, $q$에 대하여 $p - q = p$이면 양변에 $q$를 더해 $p = p + q$이고 다시 양변에 $-p$를 더해 $0 = q$입니다((K1), (K2), (K4), (K8)). 거꾸로 $q = 0$이면 $p - 0 = p$입니다. 따라서 등식은 정확히 $(\operatorname{Im} z)(\operatorname{Im} w) = 0$일 때, 곧 (K10)에 의해 $\operatorname{Im} z = 0$이거나 $\operatorname{Im} w = 0$일 때 성립합니다. $z = w = i$이면 $\operatorname{Re}(ii) = -1$이지만 $(\operatorname{Re} i)(\operatorname{Re} i) = 0$입니다.
:::
