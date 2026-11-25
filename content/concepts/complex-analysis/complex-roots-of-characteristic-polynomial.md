---
title: 특성다항식의 복소수 근
title_en: Complex Roots of the Characteristic Polynomial
aliases: [실행렬의 특성다항식의 복소수 근, 특성다항식의 인수분해, 근의 합과 대각합, 근의 곱과 행렬식, complex roots of the characteristic polynomial]
kind: proposition
field: complex-analysis
msc: ["15A18", "12D10"]
level: undergrad
summary: n × n 실행렬 A 의 특성다항식 p_A 의 계수로 만든 복소 다항함수 P_A 는 차수가 n 이고 최고차계수가 (−1)ⁿ 이며, P_A(z) = (−1)ⁿ(z − c₁)⋯(z − c_n) 인 복소수의 열이 있다. 그 항들이 특성다항식의 복소수 근이고, 그 합은 대각합, 곱은 행렬식이다. 실수인 복소수 근은 정확히 A 의 고윳값을 옮긴 것이고, 실수가 아닌 근은 켤레와 함께 나온다.
requires: [real-number-arithmetic, power-of-a-real-number, matrix, trace, determinant, eigenvalue-and-eigenvector, polynomial-function, coefficients-of-polynomial-function, characteristic-polynomial, characteristic-polynomial-coefficients, eigenvalue-iff-root, characteristic-polynomial-examples, characteristic-polynomial-2x2, complex-number, complex-field, power-of-a-complex-number, complex-finite-sum, complex-polynomial-function, growth-of-complex-polynomial, fundamental-theorem-of-algebra, complex-factor-theorem, roots-of-real-polynomial-functions]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.4 Complex vs real spaces (p.102), 1.5 Multiplicities of eigenvalues (p.102–103), 1.6 Trace and determinant, Theorem 1.2 (p.103), 연습문제 1.10, 1.11 (p.105); 4장 2절 Diagonalization, 연습문제 2.2 (p.114)"
    checked: original
    note: "Treil 4장 1.4(p.102)는 대수학의 기본정리를 들어 실행렬을 ℂⁿ 위의 연산자로 보고 복소수 고윳값을 허용한다고 적고, 1.5(p.102–103)는 특성다항식을 중복도를 세어 a_n(z − λ₁)⋯(z − λ_n) 으로 쓴다. Theorem 1.2(p.103)는 복소수 고윳값을 중복도를 세어 늘어놓으면 그 합이 대각합, 곱이 행렬식이라는 것이고, 증명은 연습문제 1.10, 1.11(p.105)로 둔다. (3)은 같은 결론을 이 사이트의 말로 진술한 것이다. 이 사이트는 ℂ 위의 행렬과 행렬식을 두지 않으므로 그 수들을 '복소 고윳값' 이라 부르지 않고 특성다항식의 계수로 만든 복소 다항함수의 근으로 정의하며, 증명은 연습문제 1.10, 1.11 의 힌트처럼 상수항과 z^{n−1} 의 계수를 비교한다(근과 계수의 관계로). 연습문제 2.2(p.114)는 실행렬의 복소수 고윳값 λ 의 켤레도 고윳값임을 보이게 하는데, (5)는 그것을 특성다항식의 근에 대해 말한 것이다."
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.4소절 Exercises, Exercise 11.1.6 (p.143)"
    checked: original
    note: "출처 Exercise 11.1.6 c)(p.143)는 행렬 (x −y; y x) 의 고윳값이 x + iy 와 x − iy 라는 것을 보이게 하고, 고윳값을 A − λI(복소 행렬)가 가역이 아닌 λ 로 설명한다. 예시 '$\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$ 꼴의 행렬' 은 같은 행렬에서 같은 두 수를 얻는데, 이 사이트는 그것을 고윳값이라 부르지 않고 특성다항식의 복소수 근으로 얻는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(달랑베르 증명 통독 — r 의 세 조건이 r^k|b_k| ≤ |b_0| 와 rC' < |b_k| 를 주는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$은 자연수이고 $A$는 $n \times n$ [[matrix|행렬]]이다. 특성다항식 $p_A$는 [[characteristic-polynomial|특성다항식]], $\operatorname{tr} A$는 [[trace|대각합]], $\det A$는 [[determinant|행렬식]], 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, $(-1)^n$은 실수의 거듭제곱이다. 복소수와 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-number]]와 [[complex-field]], 복소수의 유한 합 $\sum_{k=1}^{n}$은 [[complex-finite-sum]]의 것이고, 실계수 다항함수의 계수로 만든 복소 다항함수는 [[complex-polynomial-function|복소 다항함수]]의 (7)의 (iii), 복소 다항함수의 계수와 차수는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]], 복소수의 열과 그 곱은 [[complex-factor-theorem|복소 인수 정리와 인수분해]], 실계수 다항함수의 복소수 근은 [[roots-of-real-polynomial-functions|실계수 다항함수의 복소수 근]]의 것이다.

**$P_A$와 특성다항식의 복소수 근.** $p_A$의 계수로 만든 복소 다항함수를 $P_A$로 쓴다. $p_A$는 특성다항식(함수 $\mathbb{R} \to \mathbb{R}$)의 이름이고 $P_A$는 복소 다항함수 $\mathbb{C} \to \mathbb{C}$의 이름이다. $p_A$의 복소수 근, 곧 $P_A$의 근을 **$A$의 특성다항식의 복소수 근**이라 한다.

1. (계수) $P_A$는 영함수가 아니고 $\deg P_A = n$이다. $P_A$의 $z^n$의 계수는 $\iota\bigl((-1)^n\bigr)$, $z^{n-1}$의 계수는 $\iota\bigl((-1)^{n-1} \operatorname{tr} A\bigr)$, 상수항은 $\iota(\det A)$이다($n = 1$이면 뒤의 둘은 같은 $z^0$의 계수이다). 모든 실수 $x$에서 $P_A(\iota(x)) = \iota\bigl(\det(A - xI_n)\bigr)$이다.
2. (인수분해) 길이 $n$인 복소수의 열 $c_1, \dots, c_n$이 있어 모든 복소수 $z$에서
   $$
   \begin{aligned}
   P_A(z) = {}&\iota\bigl((-1)^n\bigr) \\
   &\cdot (z - c_1) \cdots (z - c_n)
   \end{aligned}
   $$
   이다. $A$의 특성다항식의 복소수 근은 정확히 이 열의 항들이다.
3. (대각합과 행렬식) (2)의 열에 대하여
   $$
   \begin{aligned}
   \sum_{k=1}^{n} c_k &= \iota(\operatorname{tr} A), \\
   c_1 \cdots c_n &= \iota(\det A)
   \end{aligned}
   $$
   이다.
4. (고윳값) 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $\iota(\lambda)$가 $A$의 특성다항식의 복소수 근일 때이다. 따라서 (2)의 열의 항 가운데 실수인 복소수는 정확히 $A$의 고윳값을 $\iota$로 옮긴 것들이다.
5. (켤레) 복소수 $z$가 $A$의 특성다항식의 복소수 근이면 $\overline{z}$도 그렇다.
:::

:::english
$n$ is a natural number and $A$ is an $n \times n$ matrix. The characteristic polynomial $p_A$, the trace $\operatorname{tr} A$, the determinant $\det A$, and eigenvalues are those of their entries, and $(-1)^n$ is a power of a real number. Complex numbers, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entries on complex numbers and on the field of complex numbers, and finite sums $\sum_{k=1}^{n}$ of complex numbers are those of their entry; the complex polynomial function made from the coefficients of a real polynomial function is that of item (7)(iii) of the entry on complex polynomial functions; coefficients and degree of complex polynomial functions are those of the entry on growth of complex polynomials and uniqueness of coefficients; finite sequences of complex numbers and their products are those of the entry on the complex factor theorem and factorization; and complex roots of real polynomial functions are those of their entry.

**$P_A$ and complex roots of the characteristic polynomial.** The complex polynomial function made from the coefficients of $p_A$ is written $P_A$. Here $p_A$ is the name of the characteristic polynomial (a function $\mathbb{R} \to \mathbb{R}$) and $P_A$ is the name of a complex polynomial function $\mathbb{C} \to \mathbb{C}$. The complex roots of $p_A$, that is, the roots of $P_A$, are called the **complex roots of the characteristic polynomial of $A$**.

1. (Coefficients) $P_A$ is not the zero function and $\deg P_A = n$. The coefficient of $z^n$ of $P_A$ is $\iota\bigl((-1)^n\bigr)$, that of $z^{n-1}$ is $\iota\bigl((-1)^{n-1} \operatorname{tr} A\bigr)$, and the constant term is $\iota(\det A)$ (if $n = 1$, the last two are the same coefficient of $z^0$). For every real number $x$, $P_A(\iota(x)) = \iota\bigl(\det(A - xI_n)\bigr)$.
2. (Factorization) There is a sequence of complex numbers $c_1, \dots, c_n$ of length $n$ such that for every complex number $z$
   $$
   \begin{aligned}
   P_A(z) = {}&\iota\bigl((-1)^n\bigr) \\
   &\cdot (z - c_1) \cdots (z - c_n).
   \end{aligned}
   $$
   The complex roots of the characteristic polynomial of $A$ are exactly the terms of this sequence.
3. (Trace and determinant) For the sequence of (2),
   $$
   \begin{aligned}
   \sum_{k=1}^{n} c_k &= \iota(\operatorname{tr} A), \\
   c_1 \cdots c_n &= \iota(\det A).
   \end{aligned}
   $$
4. (Eigenvalues) A real number $\lambda$ is an eigenvalue of $A$ exactly when $\iota(\lambda)$ is a complex root of the characteristic polynomial of $A$. Hence the terms of the sequence of (2) that are real complex numbers are exactly the images under $\iota$ of the eigenvalues of $A$.
5. (Conjugates) If a complex number $z$ is a complex root of the characteristic polynomial of $A$, then so is $\overline{z}$.
:::

## 직관

선형대수 2 는 실수만 써서 고윳값을 특성다항식의 실근으로 보았고, 그래서 $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$처럼 고윳값이 없는 행렬이 있었습니다. 특성다항식의 계수를 복소수로 옮기면 [[fundamental-theorem-of-algebra|대수학의 기본정리]]에 의해 근이 늘 있고, 근을 늘어놓은 열로 특성다항식이 일차식들의 곱이 됩니다((2)). 실수인 근은 원래의 고윳값과 정확히 맞으므로((4)) 아무것도 잃지 않고, 실수가 아닌 근이 새로 생깁니다.

복소수 근을 늘어놓은 열로 세면, 근의 합이 대각합이고 곱이 행렬식이라는 관계가 모든 실행렬에서 성립합니다((3)). 근을 구하지 않아도 근의 합과 곱은 특성다항식의 두 계수로 정해지고, 그 계수가 대각합과 행렬식이기 때문입니다.

이 강의는 복소수를 성분으로 하는 행렬과 그 행렬식을 정의하지 않았습니다. 그래서 이 수들을 "복소 고윳값"이라 부르지 않고, 늘 실행렬의 특성다항식의 복소수 근이라고 부릅니다.

## 증명

:::idea
$P_A$의 세 계수를 특성다항식의 계수에서 옮겨 오고, 복소 인수 정리의 인수분해와 근과 계수의 관계를 그대로 쓴다.
:::

:::hint
$(-1)^n (-1)^n = 1$이고 $(-1)^{n-1}(-1)^n = -1$이다.
:::

:::proof
"계수의 ($n$)"은 [[characteristic-polynomial-coefficients]], "특성의 ($n$)"은 [[characteristic-polynomial]], "증가의 ($n$)"은 [[growth-of-complex-polynomial]], "인수분해의 ($n$)"은 [[complex-factor-theorem]], "실계수의 ($n$)"은 [[roots-of-real-polynomial-functions]], "다항함수의 ($n$)"은 [[complex-polynomial-function]], "복소수체의 ($n$)"은 [[complex-field]], "거듭제곱의 ($n$)"은 [[power-of-a-real-number]]의 번호이다.

먼저 실수의 계산 두 가지. 거듭제곱의 (2)의 (i), (ii)와 (iv)에 의해 $(-1)^n(-1)^n = (-1)^{2n} = \bigl((-1)(-1)\bigr)^n = 1^n = 1$이다. 거듭제곱의 (1)에 의해 $(-1)^n = (-1)^{n-1}(-1)$이고 같은 방법으로 $(-1)^{n-1}(-1)^{n-1} = 1$이므로 $(-1)^{n-1}(-1)^n = -1$이다. 이것을 (가)라 부른다.

**1의 증명.** 특성의 (1)에 의해 $p_A$는 영함수가 아니고 $\deg p_A = n$이며, 계수의 (3)에 의해 $p_A$의 $t^n$, $t^{n-1}$의 계수와 상수항은 $(-1)^n$, $(-1)^{n-1}\operatorname{tr} A$, $\det A$이다. 증가의 (4)에 의해 $P_A$는 영함수가 아니고 차수가 $n$이며, $P_A$의 $z^k$의 계수는 $p_A$의 $t^k$의 계수를 $\iota$로 옮긴 것이다. 마지막 문장은 다항함수의 (7)의 (ii)와 특성다항식의 정의이다.

**2의 증명.** (1)에 의해 $P_A$의 최고차계수는 $\iota((-1)^n)$이므로 인수분해의 (4)와 (5)를 $P_A$에 쓴다.

**3의 증명.** 인수분해의 (6)의 (ii)를 $P_A$와 (2)의 열에 쓰면, (1)의 세 계수로 $\sum_{k=1}^{n} c_k = -\iota\bigl((-1)^{n-1}\operatorname{tr} A\bigr)\,\iota\bigl((-1)^n\bigr)^{-1}$이다. (가)에 의해 $\bigl((-1)^n\bigr)^{-1} = (-1)^n$이므로 복소수체의 (2)에 의해 이것은 $\iota\bigl(-(-1)^{n-1}(-1)^n \operatorname{tr} A\bigr) = \iota(\operatorname{tr} A)$이다. 또 $c_1 \cdots c_n = (-1)^n\,\iota(\det A)\,\iota\bigl((-1)^n\bigr)^{-1}$이고, [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)에 의해 왼쪽 인수의 복소수 $(-1)^n$은 $\iota((-1)^n)$이므로 이것은 $\iota(\det A)$이다. ($n = 1$이면 두 계수가 같은 $z^0$의 계수 $\iota(\operatorname{tr} A) = \iota(\det A)$이고 두 식은 $c_1 = \iota(a_{1,1})$로 같다.)

**4의 증명.** [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$가 고윳값인 것은 정확히 $p_A(\lambda) = 0$일 때이고, 실계수의 (1)에 의해 정확히 $\iota(\lambda)$가 $p_A$의 복소수 근일 때이다. 둘째 문장은 이것과 실계수의 (1)의 둘째 문장, (2)이다.

**5의 증명.** 실계수의 (2)를 $p_A$에 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[$J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$]
[[characteristic-polynomial-examples|특성다항식의 예]]의 (2)에 의해 $p_J = t^2 + t^0$이므로 $P_J(z) = zz + 1 = (z - i)(z + i)$입니다([[complex-field|복소수체]]의 (5)의 $ii = -1$). $J$의 특성다항식의 복소수 근은 $i$와 $-i$이고 서로 켤레입니다. 합 $i + (-i) = 0$은 $\operatorname{tr} J = 0$, 곱 $i(-i) = 1$은 $\det J = 1$과 맞습니다. 실수인 근이 없으므로 (4)에 의해 $J$에는 고윳값이 없고, 이것은 같은 예의 결론과 맞습니다.
:::

:::example[$\begin{pmatrix} a & -b \\ b & a \end{pmatrix}$ 꼴의 행렬]
$a$, $b$가 실수이고 $b \ne 0$이며 $A = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$라 합시다. [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $\operatorname{tr} A = 2a$, $\det A = aa + bb$이고 $P_A(z) = zz - 2a z + (aa + bb)$입니다. $z = a + bi$를 넣으면
$$
\begin{aligned}
&(a + bi)(a + bi) - 2a(a + bi) \\
&\qquad + aa + bb \\
&\quad = aa + 2abi - bb - 2aa \\
&\qquad - 2abi + aa + bb = 0
\end{aligned}
$$
이므로 $a + bi$가 근이고, (5)에 의해 $a - bi$도 근입니다. 두 수는 $b \ne 0$이라 서로 다르므로 [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 (5)에 의해 (2)의 열은 이 둘로 이루어집니다. 합 $2a$와 곱 $aa + bb$는 (3)과 맞습니다.
:::

:::counterexample[고윳값과 복소수 근의 개수가 다를 수 있다]
$J$는 특성다항식의 복소수 근이 둘이지만 고윳값은 하나도 없습니다. (4)는 실수인 근만 고윳값과 맞춥니다. 고윳값은 실수이므로 실수가 아닌 근은 고윳값과 짝지어지지 않습니다.
:::

## 확인 질문

:::check[$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$의 특성다항식의 복소수 근은?]
[[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $\operatorname{tr} A = 5$, $\det A = 6$이므로 $P_A(z) = zz - 5z + 6 = (z - 2)(z - 3)$입니다. 복소수 근은 $\iota(2)$, $\iota(3)$이고 둘 다 실수인 복소수이므로 (4)에 의해 $A$의 고윳값은 $2$와 $3$입니다. 합 $5$와 곱 $6$이 (3)과 맞습니다.
:::

:::check[$1 \times 1$ 행렬 $A = \begin{pmatrix} 7 \end{pmatrix}$이면 (2)와 (3)은 무엇을 말하는가?]
[[characteristic-polynomial|특성다항식]]의 (4)에 의해 $p_A(x) = 7 - x$이므로 $P_A(z) = -z + 7 = (-1)(z - 7)$이고, 열은 $c_1 = \iota(7)$ 하나입니다. (3)은 $c_1 = \iota(\operatorname{tr} A) = \iota(\det A) = \iota(7)$이라는 것이고, $n = 1$에서는 합과 곱이 같은 한 항입니다.
:::
