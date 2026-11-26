---
title: 실계수 다항함수의 복소수 근
title_en: Complex Roots of Real Polynomial Functions
aliases: [실계수 다항식의 복소근, 켤레근, 켤레 근, complex roots of real polynomials, conjugate root theorem]
kind: theorem
field: complex-analysis
msc: ["12D10"]
level: undergrad
summary: 실계수 다항함수 f 의 계수로 만든 복소 다항함수의 근을 f 의 복소수 근이라 한다. 실수 x 가 f 의 근인 것은 정확히 ι(x) 가 복소수 근일 때이고, 복소수 근의 켤레도 복소수 근이다. 차수가 n ≥ 1 이면 복소수 근을 늘어놓은 길이 n 인 열이 있어 f 의 계수로 만든 복소 다항함수가 최고차계수와 일차식들의 곱이 되고, 그래서 f 는 실수 근이 없어도 복소수 근을 갖는다.
requires: [real-number-arithmetic, polynomial-function, coefficients-of-polynomial-function, complex-number, complex-field, complex-conjugate, complex-polynomial-function, growth-of-complex-polynomial, fundamental-theorem-of-algebra, complex-factor-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Remark 11.5.3 (p.170); 11.1절 Complex numbers, 11.1.1소절 The complex plane (p.139)"
    checked: original
    note: "출처 Remark 11.5.3(p.170)은 x² + 1 이 실수에서 x = 0 에 최솟값을 갖지만 근이 없다고 적고, 11.1.1소절(p.139)은 i 가 방정식 z² + 1 = 0 의 해라고 적는다. 예시 '$t^2 + t^0$의 복소수 근' 은 이 두 곳과 같은 대상이다. 계수가 실수인 다항식의 근이 켤레와 함께 나온다는 (2)는 출처 텍스트 전체에서 'conjugate' 가 나오는 곳(켤레의 정의와 연속, 스톤–바이어슈트라스, 푸리에 급수)과 'conjugate pair', 'complex conjugate root', 'roots come in' 으로 찾은 곳에 없다."
  - ref: lebl-basic-analysis
    loc: "3.3절 Extreme and intermediate value theorems, 3.3.2소절 Bolzano's intermediate value theorem, Proposition 3.3.10 앞 문단 (p.134)"
    checked: original
    note: "Lebl I p.134 는 짝수 차수의 실수 다항식은 실근이 없을 수 있다며 x² + 1 = 0 인 실수 x 가 없다는 것을 들고, 홀수 차수이면 실근이 있다는 것(Proposition 3.3.10)을 증명한다. 예시 '$t^2 + t^0$의 복소수 근' 의 실수 쪽은 같은 예이다. 홀수 차수의 실근은 이 항목이 진술하지 않는다(선형대수 2 의 홀수 크기 행렬의 실고윳값 항목에 있다)."
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Example 21.14 (p.264); 21.5절 Exercises, 연습문제 21 (p.277); 18장 Historical Note (p.234); 23.1절 Field Automorphisms, Example 23.3, Proposition 23.5 (p.294); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 7 (p.223)"
    checked: original
    note: "Judson Example 21.14(p.264)는 x² + 1 이 ℝ 위에서 기약이라 ℝ[x]/⟨x² + 1⟩ 이 x² + 1 의 근을 가진 ℝ 의 확대체라는 것을 보이는데, 예시 '$t^2 + t^0$의 복소수 근' 과 같은 대상이다. 연습문제 21(p.277)은 F 를 고정하는 자기동형사상이 최소다항식의 근을 근으로 보낸다는 것을 보이게 하는데, (2)는 실수인 복소수를 고정하는 켤레로 같은 일을 하는 것이다. 더 가까운 것은 23.1절이다. Example 23.3(p.294)은 켤레 a + bi ↦ a − bi 가 ℝ 를 고정하는 ℂ 의 자기동형사상이라고 적고, Proposition 23.5(p.294)는 F 를 고정하는 자기동형사상이 F[x] 의 다항식의 근을 근으로 보낸다는 것을 증명한다. 둘을 F = ℝ 에서 합친 것이 (2)이다. 17.6절 연습문제 7 (b)(p.223)은 실계수 삼차방정식 y³ + py + q = 0 이 판별식이 양수이면 'one real root and two conjugate imaginary roots' 를 갖는다는 것을 보이게 하는데, 예시 '실수 근과 켤레 짝이 함께 있는 경우'와 같은 모양의 근이다. 18장 Historical Note(p.234)는 대수학의 기본정리를 실수 계수의 모든 다항식이 복소수 위에서 일차식들로 인수분해된다는 것으로 적는데, (3)이 그 꼴이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(달랑베르 증명 통독 — r 의 세 조건이 r^k|b_k| ≤ |b_0| 와 rC' < |b_k| 를 주는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
실계수 다항함수와 그 계수, 영함수 $o$, 차수 $\deg$, 최고차계수, 실계수 다항함수의 근은 [[polynomial-function|다항함수]]와 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다. 복소수, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-number]]와 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]]의 것이고, $f$의 계수로 만든 복소 다항함수는 [[complex-polynomial-function|복소 다항함수]]의 (7)의 (iii), 복소 다항함수의 차수와 최고차계수는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]], 근은 [[fundamental-theorem-of-algebra|대수학의 기본정리]], 복소수의 열과 그 곱은 [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 것이다.

**복소수 근.** $f$가 실계수 다항함수이고 $P$가 $f$의 계수로 만든 복소 다항함수일 때, $P$의 근을 $f$의 **복소수 근**(complex root)이라 한다. $f$는 정의역이 $\mathbb{R}$인 함수이므로 "$f$의 근"은 지금까지처럼 $f(x) = 0$인 실수 $x$를 뜻하고, 복소수 근과 구별한다.

아래에서 $f$는 실계수 다항함수이고 $P$는 $f$의 계수로 만든 복소 다항함수이다.

1. (실수인 복소수 근) 실수 $x$에 대하여 $\iota(x)$가 $f$의 복소수 근인 것은 정확히 $x$가 $f$의 근일 때이다. 따라서 $f$의 복소수 근 가운데 실수인 복소수는 정확히 $f$의 근을 $\iota$로 옮긴 것들이다.
2. (켤레) 복소수 $z$가 $f$의 복소수 근이면 $\overline{z}$도 $f$의 복소수 근이다. $z$가 실수인 복소수가 아니면 $\overline{z} \ne z$이다.
3. (인수분해) $f \ne o$이고 $\deg f = n \ge 1$이며 $f$의 최고차계수가 $r$이라 하자. 그러면 $P$는 영함수가 아니고 $\deg P = n$, 최고차계수는 $\iota(r)$이며, 길이 $n$인 복소수의 열 $c_1, \dots, c_n$이 있어 모든 복소수 $z$에서
   $$
   P(z) = \iota(r)\,(z - c_1) \cdots (z - c_n)
   $$
   이다. $f$의 복소수 근은 정확히 이 열의 항들이다. 특히 $f$는 복소수 근을 갖고, 모든 실수 $x$에서 $\iota\bigl(f(x)\bigr)$는 위 식의 $z$에 $\iota(x)$를 넣은 값이다.
:::

:::english
Real polynomial functions and their coefficients, the zero function $o$, the degree $\deg$, leading coefficients, and roots of real polynomial functions are those of the entries on polynomial functions and on coefficients and degree of polynomial functions. Complex numbers, the function $\iota$, real complex numbers, and the convention for writing real numbers where complex numbers are required are those of the entries on complex numbers and on the field of complex numbers, and conjugates $\overline{z}$ are those of the entry on complex conjugates; the complex polynomial function made from the coefficients of $f$ is that of item (7)(iii) of the entry on complex polynomial functions; the degree and leading coefficient of complex polynomial functions are those of the entry on growth of complex polynomials and uniqueness of coefficients; roots are those of the entry on the fundamental theorem of algebra; and finite sequences of complex numbers and their products are those of the entry on the complex factor theorem and factorization.

**Complex roots.** If $f$ is a real polynomial function and $P$ is the complex polynomial function made from the coefficients of $f$, a root of $P$ is called a **complex root** of $f$. Since $f$ is a function with domain $\mathbb{R}$, "a root of $f$" still means a real number $x$ with $f(x) = 0$, and is distinguished from a complex root.

Below, $f$ is a real polynomial function and $P$ is the complex polynomial function made from the coefficients of $f$.

1. (Real complex roots) For a real number $x$, $\iota(x)$ is a complex root of $f$ exactly when $x$ is a root of $f$. Hence the complex roots of $f$ that are real complex numbers are exactly the images under $\iota$ of the roots of $f$.
2. (Conjugates) If a complex number $z$ is a complex root of $f$, then so is $\overline{z}$. If $z$ is not a real complex number, then $\overline{z} \ne z$.
3. (Factorization) Let $f \ne o$ with $\deg f = n \ge 1$ and leading coefficient $r$. Then $P$ is not the zero function, $\deg P = n$, its leading coefficient is $\iota(r)$, and there is a sequence of complex numbers $c_1, \dots, c_n$ of length $n$ such that for every complex number $z$
   $$
   P(z) = \iota(r)\,(z - c_1) \cdots (z - c_n).
   $$
   The complex roots of $f$ are exactly the terms of this sequence. In particular, $f$ has a complex root, and for every real number $x$, $\iota\bigl(f(x)\bigr)$ is the value of the above expression at $z = \iota(x)$.
:::

## 직관

선형대수 2 의 다항함수는 실수에서 실수로 가는 함수라서, $t^2 + t^0$처럼 값이 늘 $1$ 이상인 다항함수는 근이 없습니다. 같은 계수를 복소수로 옮겨 복소 다항함수를 만들면 정의역이 넓어지고, [[fundamental-theorem-of-algebra|대수학의 기본정리]]에 의해 차수가 $1$ 이상이면 반드시 근이 생깁니다. 그 근을 원래 실계수 다항함수의 복소수 근이라 부릅니다. 실수를 옮긴 점에서는 두 함수가 같은 값을 갖기 때문에, 원래의 실근은 복소수 근 가운데 실수인 것과 정확히 맞습니다((1)).

계수가 모두 실수이면 켤레가 계수를 바꾸지 않으므로, 근의 켤레도 근입니다((2)). 거울에 비친 모습에 비유할 수 있습니다. 실수 축을 거울로 삼으면 복소수 근은 거울 위(실수인 근)에 있거나, 거울 양쪽에 짝을 지어 나타납니다. 비유가 맞는 것은 "짝이 있다"까지입니다. 근을 늘어놓은 열에서 짝의 양쪽이 같은 횟수만큼 나온다는 것은 이 항목이 말하지 않습니다. 계수가 실수가 아니면 짝이 깨질 수 있습니다(아래 반례).

## 증명

:::idea
$P(\iota(x)) = \iota(f(x))$와 켤레의 식 $\overline{P(z)} = P(\overline{z})$를 복소 다항함수 항목에서 가져오고, 인수분해는 복소 인수 정리를 $P$에 쓴다.
:::

:::hint
$\iota$는 단사이고 $\iota(0) = 0$이므로 실수 $y$에 대하여 $\iota(y) = 0$인 것은 정확히 $y = 0$일 때이다.
:::

:::proof
"다항함수의 ($n$)"은 [[complex-polynomial-function]], "증가의 ($n$)"은 [[growth-of-complex-polynomial]], "인수분해의 ($n$)"은 [[complex-factor-theorem]], "복소수체의 ($n$)"은 [[complex-field]], "켤레의 ($n$)"은 [[complex-conjugate]]의 번호이다. $f$의 표현 $f = r_0 t^0 + \cdots + r_m t^m$을 하나 잡으면 다항함수의 (7)의 (iii)에 의해 $P$는 계수가 $\iota(r_0), \dots, \iota(r_m)$인 복소 다항함수이다.

**1의 증명.** 다항함수의 (7)의 (ii)에 의해 $P(\iota(x)) = \iota(f(x))$이다. 복소수체의 (2)에 의해 $\iota$는 단사이고 $\iota(0) = 0$이므로, $\iota(f(x)) = 0$인 것은 정확히 $f(x) = 0$일 때이다. 둘째 문장: 복소수체의 (2)의 (iii)에 의해 실수인 복소수는 어떤 실수 $x$의 $\iota(x)$이고, 첫째 문장을 쓴다.

**2의 증명.** $P$의 계수 $\iota(r_k)$는 모두 실수인 복소수이므로(다항함수의 (7)의 (iii)) 다항함수의 (6)에 의해 $P(\overline{z}) = \overline{P(z)} = \overline{0} = 0$이다(켤레의 (4)). $z$가 실수인 복소수가 아니면 켤레의 (4)에 의해 $\overline{z} \ne z$이다.

**3의 증명.** 증가의 (4)에 의해 $P$는 영함수가 아니고 $\deg P = \deg f = n$, 최고차계수는 $\iota(r)$이다. 인수분해의 (4)를 $P$에 쓰면 그런 열이 있고, 인수분해의 (5)에 의해 $P$의 근은 정확히 그 항들이다. $n \ge 1$이므로 $c_1$이 근이다. 마지막 문장은 다항함수의 (7)의 (ii)의 $P(\iota(x)) = \iota(f(x))$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$t^2 + t^0$의 복소수 근]
$f = t^2 + t^0$는 모든 실수 $x$에서 $f(x) = xx + 1 \ge 1$이어서 근이 없습니다. $f$의 계수로 만든 복소 다항함수는 $P(z) = zz + 1$이고, [[complex-field|복소수체]]의 (5)의 $ii = -1$에 의해 모든 $z$에서 $(z - i)(z + i) = zz - ii = zz + 1 = P(z)$이므로 $f$의 복소수 근은 $i$와 $-i$입니다. 둘은 서로의 켤레이고((2)), 실수인 복소수가 아니므로 (1)과 맞습니다.
:::

:::example[실수 근과 켤레 짝이 함께 있는 경우]
$f = t^3 - t^2 + t - t^0$이면, 곧 $f(x) = x^3 - x^2 + x - 1$이면 $f(1) = 0$이므로 $f$의 근은 $1$을 포함합니다. $(z - 1)(zz + 1) = z^3 - z^2 + z - 1$이므로 $f$의 계수로 만든 복소 다항함수는 $P(z) = (z - 1)(z - i)(z + i)$이고, $f$의 복소수 근은 $\iota(1)$, $i$, $-i$입니다. (1)에 의해 $f$의 근은 $1$뿐입니다.
:::

:::counterexample[계수가 실수가 아닌 복소 다항함수의 경우]
(2)는 계수가 모두 실수일 때의 이야기입니다. 복소 다항함수 $p(z) = z - i$는 근 $i$를 갖지만 $p(-i) = -2i \ne 0$이므로 $\overline{i} = -i$는 근이 아닙니다. 증명에서 계수가 실수라는 것은 $\overline{P(z)} = P(\overline{z})$를 쓰는 데 쓰입니다.
:::

## 확인 질문

:::check[$f = t^2 - 2t + 2t^0$의 복소수 근은 무엇인가?]
$f$의 계수로 만든 복소 다항함수는 $P(z) = zz - 2z + 2$입니다. $(1 + i) + (1 - i) = 2$이고 $(1 + i)(1 - i) = 1 - ii = 2$이므로 펼쳐 보면 모든 $z$에서 $P(z) = \bigl(z - (1 + i)\bigr)\bigl(z - (1 - i)\bigr)$입니다. 복소수 근은 $1 + i$와 $1 - i$이고 서로 켤레입니다. 실수인 것이 없으므로 (1)에 의해 $f$는 근이 없습니다. 실제로 $f(x) = (x - 1)^2 + 1 \ge 1$입니다.
:::

:::check[$f = t^2 - t^0$의 복소수 근은 무엇인가?]
$P(z) = zz - 1 = (z - 1)(z + 1)$이므로 복소수 근은 $\iota(1)$과 $\iota(-1)$이고, 둘 다 실수인 복소수입니다. (1)에 의해 $f$의 근은 $1$과 $-1$입니다. 실수인 복소수의 켤레는 자기 자신이므로 (2)는 새 근을 주지 않습니다.
:::
