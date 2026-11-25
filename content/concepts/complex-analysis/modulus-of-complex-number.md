---
title: 복소수의 절댓값
title_en: Modulus of a Complex Number
aliases: [모듈러스, 복소수의 크기, modulus, absolute value of a complex number]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수 z 의 절댓값은 실수 |z| = √((Re z)² + (Im z)²) 이다. |z| ≥ 0 이고 |z| = 0 인 것은 정확히 z = 0 일 때이며, z z̄ = |z|², |z̄| = |z|, |zw| = |z||w|, z ≠ 0 이면 z⁻¹ = z̄/|z|² 이다. 실수를 옮긴 복소수에서는 해석학 입문의 절댓값과 같은 값이고, 실수부와 허수부의 절댓값은 |z| 이하이며 |z| 는 그 둘의 합 이하이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, ring, ring-basic-properties, field, complex-number, complex-field, complex-conjugate]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1.1절 The complex plane, Definition 11.1.1 (p.140); 11.1.4절 Exercise 11.1.2 (p.142)
    checked: original
    note: "출처의 Definition 11.1.1(p.140)은 z = x + iy 의 modulus 를 |z| := √(x² + y²) 로 정의한다(PDF 그림으로 확인). 바로 뒤에서 modulus 는 절댓값의 복소수판이고 비슷한 성질을 가진다며 그 예로 |zw| = |z||w| 를 들고 연습문제로 남긴다(p.140, Exercise 11.1.2 p.142). (3)의 증명이 그것이다. 같은 쪽의 |z|² = x² + y² = (x + iy)(x − iy) = z z̄ 는 (2)의 첫 등식과 같다. 출처는 modulus 가 절댓값의 'complex analogue' 라고 적는다. (5)는 실수를 ι 로 옮긴 복소수에서 두 절댓값이 같은 수임을 증명해, 같은 막대 기호가 두 정의가 되지 않게 한다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers (p.49), Proposition 4.20 (p.51); 4.5절 Exercises 19 (p.57); 3.2절 Example 3.16 (p.36); 18.2절 Example 18.20 (p.231)
    checked: original
    note: "Judson 은 a + bi 의 absolute value 또는 modulus 를 |z| = √(a² + b²) 로 정의하고(p.49), 4.5절 연습문제 19(p.57, PDF 그림으로 확인)에서 (a) |z| = |z̄|, (b) z z̄ = |z|², (c) z⁻¹ = z̄/|z|², (f) |zw| = |z||w| 를 증명하게 한다. 이 넷은 (2), (4), (3)의 내용이다. 역원 공식 z⁻¹ = (a − bi)/(a² + b²) 는 Example 3.16(p.36)과 p.49 에도 있다. Example 18.20(p.231)은 가우스 정수의 유클리드 값매김을 보일 때 |zw|² = |z|²|w|² 를 쓴다. 4.2절 Proposition 4.20(p.51)은 0 이 아닌 z = r cis θ, w = s cis φ 에서 zw = rs cis(θ + φ) 라 적는데, 그 rs 가 (3)과 같은 내용을 극형식으로 적은 것이다. 예시 '4 − 3i 와 −2 + i 의 절댓값'의 계산은 p.49 의 Example 4.16 이 |2 + 3i| = √13 을 적은 것과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(ι 의 약속과 정의가 둘이 되지 않는지, 순서가 없다는 증명 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레복소수 $\overline{z}$는 [[complex-conjugate]]의 것이다. 실수의 순서와 절댓값은 [[real-order-axioms]]와 [[absolute-value]], 제곱근은 [[square-root-exists]], 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다.

**절댓값.** 복소수 $z$의 **절댓값**(modulus, absolute value) $|z|$를
$$
|z| = \sqrt{(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2}
$$
로 정한다. 아래 증명 첫머리에서 보듯 근호 안의 실수는 $0$ 이상이므로 $|z|$는 실수 하나로 정해진다. 막대 기호는 실수의 절댓값과 집합의 원소의 개수에도 쓰이지만, 막대 안이 복소수이면 이 항목의 뜻이다. 막대 안이 실수 $x$를 옮긴 $\iota(x)$일 때 두 절댓값이 같은 수라는 것이 아래 (5)이다.

다음이 성립한다. 아래에서 $z$, $w$는 복소수이고 $x$는 실수이다.

1. (부호와 $0$) $0 \le |z|$이고 $|z|^2 = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$이다. $|z| = 0$인 것은 정확히 $z = 0$일 때이다. 따라서 $z \ne 0$이면 $0 < |z|$이다.
2. (켤레와의 관계) $z \overline{z} = |z|^2$, 곧 $z\overline{z} = \iota(|z|^2)$이다. $|\overline{z}| = |z|$이고 $|-z| = |z|$이다.
3. (곱) $|zw| = |z|\,|w|$이다.
4. (역수와 몫) $z \ne 0$이면 $|z^{-1}| = |z|^{-1}$이고
   $$
   z^{-1} = \overline{z} / |z|^2 = \iota\bigl((|z|^2)^{-1}\bigr)\, \overline{z}
   $$
   이다. $w \ne 0$이면 $|z / w| = |z| / |w|$이다.
5. (실수의 절댓값과의 일치) $|\iota(x)| = |x|$이다. 왼쪽은 이 항목의 절댓값, 오른쪽은 [[absolute-value]]의 절댓값이다. 따라서 [[complex-field]]의 (3)의 약속대로 실수 $x$를 복소수로 읽어 $|x|$라고 써도 그 값은 실수의 절댓값 $|x|$와 같다. 또 $|xz| = |x|\,|z|$이고 $|i| = 1$이다.
6. (실수부·허수부와의 비교) $|\operatorname{Re} z| \le |z|$이고 $|\operatorname{Im} z| \le |z|$이며 $|z| \le |\operatorname{Re} z| + |\operatorname{Im} z|$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the complex conjugate $\overline{z}$ is that of the entry on complex conjugates. The order and absolute value of real numbers are those of the order axioms and the entry on absolute value, square roots are those of the entry on square roots, and powers of real numbers are those of the entry on powers of real numbers.

**Modulus.** The **modulus** (absolute value) $|z|$ of a complex number $z$ is defined by
$$
|z| = \sqrt{(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2}.
$$
As shown at the beginning of the proof below, the real number under the root sign is at least $0$, so $|z|$ is a single real number. The bars are also used for the absolute value of a real number and for the number of elements of a set, but when the expression between them is a complex number they have the meaning of this entry. That the two absolute values are the same number when the expression between the bars is $\iota(x)$ for a real number $x$ is item (5) below.

The following hold. Below, $z$ and $w$ are complex numbers and $x$ is a real number.

1. (Sign and zero) $0 \le |z|$ and $|z|^2 = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$. Moreover $|z| = 0$ exactly when $z = 0$. Hence $0 < |z|$ if $z \ne 0$.
2. (Relation to the conjugate) $z \overline{z} = |z|^2$, that is, $z \overline{z} = \iota(|z|^2)$. Moreover $|\overline{z}| = |z|$ and $|-z| = |z|$.
3. (Products) $|zw| = |z|\,|w|$.
4. (Reciprocals and quotients) If $z \ne 0$, then $|z^{-1}| = |z|^{-1}$ and
   $$
   z^{-1} = \overline{z} / |z|^2 = \iota\bigl((|z|^2)^{-1}\bigr)\, \overline{z}.
   $$
   If $w \ne 0$, then $|z / w| = |z| / |w|$.
5. (Agreement with the absolute value of real numbers) $|\iota(x)| = |x|$, where the left side is the modulus of this entry and the right side is the absolute value of the entry on absolute value. Hence, when a real number $x$ is read as a complex number by the convention of item (3) of the entry on the field of complex numbers and written $|x|$, its value equals the absolute value $|x|$ of the real number. Moreover $|xz| = |x|\,|z|$ and $|i| = 1$.
6. (Comparison with the real and imaginary parts) $|\operatorname{Re} z| \le |z|$, $|\operatorname{Im} z| \le |z|$, and $|z| \le |\operatorname{Re} z| + |\operatorname{Im} z|$.
:::

## 직관

복소수 $z = (a, b)$를 평면의 점으로 그리면 $|z| = \sqrt{a^2 + b^2}$은 원점에서 그 점까지의 거리, 곧 가로 $|a|$, 세로 $|b|$인 직각삼각형의 빗변의 길이입니다. 빗변은 어느 한 변보다 짧지 않고 두 변의 합보다 길지 않다는 것이 (6)입니다(한 변의 길이가 $0$이면 삼각형이 납작해지지만 (6)은 그대로 성립합니다). 실수 $x$를 옮긴 $(x, 0)$은 가로축 위의 점이고, 원점까지의 거리는 실수의 절댓값 $|x|$와 같습니다((5)). 그래서 같은 막대 기호를 써도 뜻이 어긋나지 않습니다.

빗변의 비유가 알려 주지 않는 것은 곱셈과의 관계 $|zw| = |z|\,|w|$((3))입니다. 이것은 [[complex-conjugate|켤레복소수]]를 거치면 짧게 나옵니다. $z \overline{z}$는 실수인 복소수 $|z|^2$이고((2)), 켤레는 곱을 곱으로 보내므로 $zw\,\overline{zw} = (z\overline{z})(w\overline{w})$입니다. 실수에서 $x^2 = |x|^2$이던 것과 달리 복소수에서는 $zz$와 $|z|^2$이 다를 수 있으니(아래 반례), 절댓값을 다룰 때는 $zz$가 아니라 $z\overline{z}$를 씁니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (5)"는 [[order-properties-of-reals]]의 번호, "절댓값의 (5)"는 [[absolute-value]]의 번호, "제곱근의 (1)"은 [[square-root-exists]]의 번호, "켤레의 (5)", "복소수체의 (2)"는 [[complex-conjugate]]와 [[complex-field]]의 번호이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 실수 $a$에서 $a^2 = aa$이다. $z = (p, q)$, $w = (r, s)$로 두고 $N = p^2 + q^2 = pp + qq$라 하자.

**정의의 확인.** 순서 성질 (5)의 (iii)에 의해 $0 \le pp$이고 $0 \le qq$이므로 순서 성질 (2)의 (iii)과 (K4)에 의해 $0 = 0 + 0 \le pp + qq = N$이다. 따라서 제곱근의 (1)에 의해 $|z| = \sqrt{N}$은 $0 \le |z|$이고 $|z|\,|z| = N$인 하나뿐인 실수이다.

**1의 증명.** 방금 본 것에 의해 $0 \le |z|$이고 $|z|^2 = |z|\,|z| = N = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$이다. $|z| = 0$이면 (K9)에 의해 $N = 0 \cdot 0 = 0$이므로 순서 성질 (5)의 (iv)에 의해 $p = q = 0$, 곧 $z = 0$이다. 거꾸로 $z = 0$이면 $N = 0 \cdot 0 + 0 \cdot 0 = 0$이고, $0 \le 0$이고 $0 \cdot 0 = 0$이므로 제곱근의 (1)의 유일성에 의해 $|z| = \sqrt{0} = 0$이다. 따라서 $z \ne 0$이면 $|z| \ne 0$이고 $0 \le |z|$이므로 $0 < |z|$이다.

**2의 증명.** 켤레의 (5)와 (1)에 의해 $z\overline{z} = \iota(N) = \iota(|z|^2)$이다. [[complex-conjugate|켤레복소수]]의 정의에 의해 $\overline{z} = (p, -q)$이고, [[complex-field|복소수체]]의 (1)에 의해 $-z = (-p, -q)$이다. (K12)의 (iii)에 의해 $(-p)(-p) = pp$, $(-q)(-q) = qq$이므로 $\overline{z}$와 $-z$에서도 근호 안의 실수가 $N$이다. 따라서 $|\overline{z}| = |-z| = \sqrt{N} = |z|$이다.

**3의 증명.** (2)와 켤레의 (2)의 $\overline{zw} = \overline{z}\,\overline{w}$, 그리고 곱셈의 교환법칙과 결합법칙에 의해
$$
\begin{aligned}
\iota(|zw|^2) &= (zw)\overline{zw} \\
&= (zw)(\overline{z}\,\overline{w}) = (z\overline{z})(w\overline{w}) \\
&= \iota(|z|^2)\,\iota(|w|^2) \\
&= \iota(|z|^2 |w|^2)
\end{aligned}
$$
이다. 마지막 등호는 복소수체의 (2)이다. 복소수체의 (2)에 의해 $\iota$는 단사이므로 $|zw|^2 = |z|^2 |w|^2$이고, 실수의 거듭제곱의 (2)의 (iii)에 의해 $|z|^2|w|^2 = (|z|\,|w|)^2$이다. 순서 성질 (4)의 (iv)에 의해 $0 \le |z|\,|w|$이고 (1)에 의해 $0 \le |zw|$이므로, 실수의 거듭제곱의 (6)의 (iii)을 지수 $2$에 쓰면 $|zw| = |z|\,|w|$이다.

**4의 증명.** $z \ne 0$이라 하자. (1)에 의해 $|z| \ne 0$이다. (5)와 절댓값의 (1)에 의해 $|1| = |\iota(1)| = 1$이므로(복소수체의 (2)의 (i)에 의해 $1 = \iota(1)$), (3)에 의해 $|z|\,|z^{-1}| = |zz^{-1}| = |1| = 1$이다. (K8)의 (iii)의 유일성에 의해 $|z^{-1}| = |z|^{-1}$이다. 또 (K12)의 (vi)에 의해 $|z|^2 = |z|\,|z| \ne 0$이므로 $(|z|^2)^{-1}$이 있고, (2)와 복소수체의 (2)에 의해
$$
\begin{aligned}
&z \cdot \iota\bigl((|z|^2)^{-1}\bigr)\overline{z} \\
&\quad = \iota\bigl((|z|^2)^{-1}\bigr)\,\iota(|z|^2) \\
&\quad = \iota\bigl((|z|^2)^{-1}|z|^2\bigr) = \iota(1) = 1
\end{aligned}
$$
이다. 곱셈의 교환법칙에 의해 순서를 바꾼 곱도 $1$이고, [[field|가역원과 체]]에서 역원은 하나뿐이므로 $z^{-1} = \iota\bigl((|z|^2)^{-1}\bigr)\overline{z}$이다. 복소수체의 (2)의 (i)에 의해 $\iota\bigl((|z|^2)^{-1}\bigr) = \iota(|z|^2)^{-1}$이므로 이것은 $\overline{z} / |z|^2$이다. $w \ne 0$이면 (3)과 방금 보인 것에 의해 $|z / w| = |zw^{-1}| = |z|\,|w^{-1}| = |z|\,|w|^{-1} = |z| / |w|$이다.

**5의 증명.** $\iota(x) = (x, 0)$이므로 (K9), (K4)에 의해 $|\iota(x)| = \sqrt{xx + 0 \cdot 0} = \sqrt{xx}$이다. 절댓값의 (5)에 의해 $xx = |x|\,|x|$이고 절댓값의 (2)에 의해 $0 \le |x|$이므로, 제곱근의 (2)의 $\sqrt{aa} = a$를 $a = |x|$에 쓰면 $\sqrt{xx} = \sqrt{|x|\,|x|} = |x|$이다. 따라서 $|\iota(x)| = |x|$이다. (3)에 의해 $|xz| = |\iota(x) z| = |\iota(x)|\,|z| = |x|\,|z|$이다. $i = (0, 1)$이므로 $|i| = \sqrt{0 \cdot 0 + 1 \cdot 1} = \sqrt{1}$이고, $0 \le 1$이고 $1 \cdot 1 = 1$이므로(순서 성질 (5)의 (ii)) 제곱근의 (1)의 유일성에 의해 $\sqrt{1} = 1$이다.

**6의 증명.** 절댓값의 (5)에 의해 $|p|\,|p| = pp$이다. $0 \le qq$이므로 순서 성질 (2)의 (i)과 (K4)에 의해 $pp = pp + 0 \le pp + qq = N = |z|\,|z|$이다. $0 \le |p|$, $0 \le |z|$이므로 순서 성질 (7)의 (iii)에 의해 $|p| \le |z|$, 곧 $|\operatorname{Re} z| \le |z|$이다. $p$와 $q$의 자리를 바꾸어 같은 논증을 하면 $|\operatorname{Im} z| \le |z|$이다. 끝으로 $t = |p| + |q|$라 하면 순서 성질 (2)의 (iii)에 의해 $0 \le t$이고, (K1)–(K3), (K7)의 $1 + 1 = 2$와 절댓값의 (5)에 의해
$$
\begin{aligned}
tt &= |p|\,|p| + |q|\,|q| + 2\,|p|\,|q| \\
&= N + 2\,|p|\,|q|
\end{aligned}
$$
이다. 순서 성질 (4)의 (iv)에 의해 $0 \le |p|\,|q|$이고, 순서 성질 (10)에 의해 $0 \le 2$이므로 다시 (4)의 (iv)에 의해 $0 \le 2\,|p|\,|q|$이다. 따라서 순서 성질 (2)의 (i)에 의해 $|z|\,|z| = N \le tt$이고, 순서 성질 (7)의 (iii)에 의해 $|z| \le t = |\operatorname{Re} z| + |\operatorname{Im} z|$이다. $\blacksquare$
:::

## 예시와 반례

:::example[4 − 3i 와 −2 + i 의 절댓값]
$z = 4 - 3i$, $w = -2 + i$라 합시다. $|z| = \sqrt{16 + 9} = \sqrt{25} = 5$이고 $|w| = \sqrt{4 + 1} = \sqrt{5}$입니다. $zw = -5 + 10i$이므로 $|zw| = \sqrt{25 + 100} = \sqrt{125}$이고, $(5\sqrt{5})(5\sqrt{5}) = 25 \cdot 5 = 125$이며 $5\sqrt{5} \ge 0$이므로 제곱근의 유일성에 의해 $\sqrt{125} = 5\sqrt{5} = |z|\,|w|$입니다((3)). (4)에 의해 $z^{-1} = \overline{z} / 25 = \tfrac{4}{25} + \tfrac{3}{25} i$입니다. (6)은 $z$에서 $4 \le 5$, $3 \le 5$, $5 \le 4 + 3$입니다.

경계의 경우도 봅시다. $|0| = 0$이고, $|i| = 1$, $|-1| = |\iota(-1)| = 1$, $|5i| = \sqrt{0 + 25} = 5$입니다. $5i$에서는 (6)의 $|\operatorname{Im} z| \le |z|$와 $|z| \le |\operatorname{Re} z| + |\operatorname{Im} z|$가 둘 다 등호입니다.
:::

:::counterexample[$zz$와 $|z|^2$이 다른 예]
실수 $x$에서는 $xx = |x|^2$이지만(절댓값의 (5)) 복소수에서는 $zz$와 $|z|^2$이 다를 수 있습니다. $z = i$이면 $ii = -1$이고 $|i|^2 = 1$입니다. $z = 1 + 2i$이면 $zz = (1 - 4,\ 2 + 2) = -3 + 4i$로 실수인 복소수도 아니지만 $|z|^2 = 1 + 4 = 5$입니다. (2)처럼 $z$ 대신 $\overline{z}$를 곱해야 $|z|^2$이 됩니다.
:::

## 확인 질문

:::check[$|z| = 1$인 복소수 $z$의 역원은 무엇인가?]
$|z| = 1$이면 (1)에 의해 $z \ne 0$이고, (4)에 의해 $z^{-1} = \iota\bigl((1^2)^{-1}\bigr)\overline{z} = \iota(1)\overline{z} = \overline{z}$입니다. 예컨대 $i^{-1} = \overline{i} = -i$이고, $(-1)^{-1} = \overline{-1} = -1$입니다.
:::

:::check[$|z| = |\operatorname{Re} z|$인 복소수 $z$는 어떤 것인가?]
$|z| = |\operatorname{Re} z|$이면 양변을 제곱해 $|z|\,|z| = |\operatorname{Re} z|\,|\operatorname{Re} z|$이고, 거꾸로 이 등식이 성립하면 양변이 $0$ 이상이므로 [[order-properties-of-reals]]의 (7)의 (iv)에 의해 $|z| = |\operatorname{Re} z|$입니다. (1)과 [[absolute-value]]의 (5)에 의해 이것은 $p^2 + q^2 = p^2$ ($p = \operatorname{Re} z$, $q = \operatorname{Im} z$)이고, 양변에 $-p^2$을 더하면 $qq = 0$이며, (K10)에 의해 $q = 0$입니다. 따라서 답은 실수인 복소수 전체입니다. 그런 $z = \iota(x)$에서는 (5)에 의해 $|z| = |x| = |\operatorname{Re} z|$입니다.
:::
