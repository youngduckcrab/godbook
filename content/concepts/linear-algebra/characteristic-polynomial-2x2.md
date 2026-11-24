---
title: 2 × 2 행렬의 특성다항식
title_en: Characteristic Polynomial of a 2 × 2 Matrix
aliases: [2 × 2 특성다항식, 이차 특성다항식, characteristic polynomial of a 2 by 2 matrix]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 2 × 2 행렬 A 의 특성다항식은 t² − (tr A)t + (det A)t⁰ 이다. 따라서 대각합과 행렬식이 같은 두 2 × 2 행렬은 닮지 않았어도 특성다항식이 같고, λ 가 고윳값인 것은 λ² − (tr A)λ + det A = 0 일 때이며, p_A = (t − λ₁)(t − λ₂) 인 것은 정확히 λ₁ + λ₂ = tr A, λ₁λ₂ = det A 일 때이다.
requires: [function, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, matrix, matrix-vector-product, change-of-basis-and-similarity, eigenvalue-and-eigenvector, determinant, trace, similarity-invariants-examples, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, coefficients-of-polynomial-function, characteristic-polynomial, eigenvalue-iff-root]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.2 Finding eigenvalues: characteristic polynomials, p.100; 1.6 Trace and determinant, Theorem 1.2, p.103; 4장 1절 연습문제 1.2, p.104, 1.10, 1.11, p.105; 4장 2절 Diagonalization, 2.7 Some example 의 2.7.1–2.7.3, pp.112–113"
    checked: original
    note: "출처 4장 2.7.1–2.7.3(pp.112–113)은 (1 2; 8 1), (1 2; −2 1), (1 1; 0 1) 의 특성다항식을 2 × 2 행렬식으로 직접 계산해 (1 − λ)² − 16, (1 − λ)² + 2², (1 − λ)² 로 적는다. 2 × 2 의 일반식 λ² − (trace A)λ + det A 는 출처에서 찾지 못했다(검색어 trace 의 4장 안 3건(Theorem 1.2, 연습문제 1.11)과 λ2 −, discriminant 0건). (4)의 'tr A = λ₁ + λ₂, det A = λ₁λ₂' 는 출처 1.6 Theorem 1.2(p.103)의 n = 2 경우이고, 출처는 그 증명을 연습문제 1.10, 1.11(p.105)로 돌린다. 이 항목은 n = 2 에서만 계수를 비교해 증명했다. (2)의 '특성다항식이 같아도 닮지 않을 수 있다'의 예 N 은 출처 2.7.3 의 행렬과 같고, 반례 '특성다항식이 같지만 닮지 않은 2 × 2 행렬의 예'는 같은 발상을 3I₂ 로 한 것이다. 출처 4장 연습문제 1.2(p.104)는 2 × 2 행렬 (4 −5; 2 −3), (2 1; −1 4) 의 특성다항식을 구하라고 한다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$A$가 $2 \times 2$ [[matrix|행렬]]이고
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$
곧 $a = a_{1,1}$, $b = a_{1,2}$, $c = a_{2,1}$, $d = a_{2,2}$라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]], $\operatorname{tr}$은 [[trace|대각합]], $\det$는 [[determinant|행렬식]]이고, $t^k$, 실수 $\lambda$에 대한 $t - \lambda$와 계수의 표기는 [[polynomial-function|다항함수]]의 것, 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것, $t^k$의 계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다.

1. ($2 \times 2$의 식) $\operatorname{tr} A = a + d$이고 $\det A = ad - bc$이며,
   $$
   \begin{aligned}
   p_A &= (\det A)\,t^0 \\
   &\quad + (-\operatorname{tr} A)\,t^1 + 1\,t^2
   \end{aligned}
   $$
   이다. 이것을 $t^2 - (\operatorname{tr} A)t + (\det A)t^0$으로도 쓴다. 곧 모든 실수 $x$에서 $p_A(x) = x^2 - (a + d)x + (ad - bc)$이고, $p_A$의 $t^2$, $t^1$, $t^0$의 계수는 차례로 $1$, $-\operatorname{tr} A$, $\det A$이다.
2. (대각합과 행렬식이 같은 두 행렬) $B$가 $2 \times 2$ 행렬이고 $\operatorname{tr} A = \operatorname{tr} B$, $\det A = \det B$이면 $p_A = p_B$이다. $A$와 $B$가 [[change-of-basis-and-similarity|닮지]] 않았어도 그렇다. 예컨대 [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (2)의 $N$과 $I_2$는 닮지 않았지만 $p_N = p_{I_2}$이다.
3. (고윳값의 방정식) 실수 $\lambda$가 $A$의 [[eigenvalue-and-eigenvector|고윳값]]인 것은 정확히 $\lambda^2 - (\operatorname{tr} A)\lambda + \det A = 0$일 때이다.
4. (두 근으로 쓴 꼴) $\lambda_1$, $\lambda_2$가 실수이면, $p_A = (t - \lambda_1)(t - \lambda_2)$인 것은 정확히 $\lambda_1 + \lambda_2 = \operatorname{tr} A$이고 $\lambda_1 \lambda_2 = \det A$일 때이다. 이때 $A$의 고윳값은 정확히 $\lambda_1$과 $\lambda_2$이다(둘이 같을 수 있다).
:::

:::english
Let $A$ be a $2 \times 2$ matrix with
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix},
$$
that is, $a = a_{1,1}$, $b = a_{1,2}$, $c = a_{2,1}$, $d = a_{2,2}$. $p_A$ is the characteristic polynomial, $\operatorname{tr}$ the trace, $\det$ the determinant; $t^k$, $t - \lambda$ for a real number $\lambda$, and the notation for coefficients are those of the entry on polynomial functions, the product of functions is that of the entry on products of polynomial functions, and the coefficient of $t^k$ is that of the entry on coefficients and degree.

1. (The formula for $2 \times 2$) $\operatorname{tr} A = a + d$, $\det A = ad - bc$, and
   $$
   \begin{aligned}
   p_A &= (\det A)\,t^0 \\
   &\quad + (-\operatorname{tr} A)\,t^1 + 1\,t^2,
   \end{aligned}
   $$
   which we also write $t^2 - (\operatorname{tr} A)t + (\det A)t^0$. That is, $p_A(x) = x^2 - (a + d)x + (ad - bc)$ for every real number $x$, and the coefficients of $t^2$, $t^1$, $t^0$ in $p_A$ are $1$, $-\operatorname{tr} A$, $\det A$ respectively.
2. (Two matrices with equal trace and determinant) If $B$ is a $2 \times 2$ matrix with $\operatorname{tr} A = \operatorname{tr} B$ and $\det A = \det B$, then $p_A = p_B$, even if $A$ and $B$ are not similar. For instance, the matrices $N$ and $I_2$ of item (2) of the entry on examples of non-similar matrices with equal determinant and trace are not similar, but $p_N = p_{I_2}$.
3. (The equation for eigenvalues) A real number $\lambda$ is an eigenvalue of $A$ exactly when $\lambda^2 - (\operatorname{tr} A)\lambda + \det A = 0$.
4. (The form with two roots) For real numbers $\lambda_1$, $\lambda_2$, we have $p_A = (t - \lambda_1)(t - \lambda_2)$ exactly when $\lambda_1 + \lambda_2 = \operatorname{tr} A$ and $\lambda_1 \lambda_2 = \det A$. In that case the eigenvalues of $A$ are exactly $\lambda_1$ and $\lambda_2$ (the two may be equal).
:::

## 직관

$2 \times 2$ 행렬의 대각선에서 $x$를 빼고 행렬식을 계산하면 $(a - x)(d - x) - bc$이고, 이것을 풀면 $x^2$의 계수는 $1$, $x$의 계수는 대각성분의 합의 $-1$배, 상수항은 행렬식입니다. 그래서 $2 \times 2$ 행렬의 특성다항식은 대각합과 행렬식이라는 두 수만으로 정해집니다. 네 성분 가운데 $b$와 $c$는 곱 $bc$로만 들어옵니다.

두 사람의 나이를 모르고 나이의 합과 곱만 아는 상황과 비슷합니다. (4)는 두 근 $\lambda_1$, $\lambda_2$의 합이 대각합이고 곱이 행렬식이라는 것이고, 합과 곱을 알면 두 근을 찾는 이차방정식이 바로 $p_A(x) = 0$입니다. 비유와 다른 점은, 합과 곱이 주어져도 그런 두 실수가 없을 수 있다는 것입니다. 그때는 $p_A$가 $(t - \lambda_1)(t - \lambda_2)$ 꼴로 쓰이지 않고 $A$에 고윳값이 없습니다.

(2)는 닮은 행렬의 특성다항식이 같다는 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (4)의 거꾸로가 성립하지 않을 수 있음을 보여 줍니다. 대각합과 행렬식은 닮음으로 바뀌지 않는 수이지만, $2 \times 2$에서도 그 둘이 같다고 닮지는 않습니다.

## 증명

:::idea
첫째 열 전개 대신 $2 \times 2$ 행렬식의 식 $a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$를 $A - xI_2$에 쓰고 전개한다. (4)는 $(t - \lambda_1)(t - \lambda_2)$를 같은 꼴로 펼쳐 계수를 비교한다.
:::

:::hint
$A - xI_2$의 네 성분은 무엇인가? 대각성분에서만 $x$가 빠진다.
:::

:::hint
(4)에서는 두 다항함수의 계수가 같은 것과 두 함수가 같은 것이 같다는 계수의 유일성을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음).

**(1)의 증명.** [[trace|대각합]]의 정의와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $\operatorname{tr} A = a + d$이고, [[determinant|행렬식]]의 (4)와 (K1)에 의해 $\det A = ad - cb = ad - bc$이다. 실수 $x$에서 $A - xI_2 = A + (-(xI_2))$의 성분은 [[matrix|행렬]]의 (1), (6)과 [[vector-space-basic-properties|(B9)]]에 의해 $(1, 1)$이 $a - x$, $(1, 2)$가 $b$, $(2, 1)$이 $c$, $(2, 2)$가 $d - x$이다(대각이 아닌 자리에서는 $(-x) \cdot 0 = 0$을 더한다). 행렬식의 (4)에 의해
$$
\begin{aligned}
p_A(x) &= (a - x)(d - x) - cb \\
&= x^2 - (a + d)x + (ad - bc)
\end{aligned}
$$
이다(둘째 줄은 (K1)–(K4), (K9), (K12)로 전개한 것). 한편 [[polynomial-function|다항함수]]의 (3)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $(\det A)\,t^0 + (-\operatorname{tr} A)\,t^1 + 1\,t^2$의 $x$에서의 값은 $\det A + (-(a + d))x + x^2$이고, 이것은 위의 값과 같다. 따라서 두 함수는 같다. 계수에 관한 문장은 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)이다.

**(2)의 증명.** (1)을 $A$와 $B$에 쓰면 두 함수는 같은 실수 $\det A = \det B$, $-\operatorname{tr} A = -\operatorname{tr} B$, $1$을 계수로 하는 같은 일차결합이므로 $p_A = p_B$이다. 예에 관해서는, [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (2)에 의해 $\det N = \det I_2$, $\operatorname{tr} N = \operatorname{tr} I_2$이고 $N$과 $I_2$는 닮지 않았다. 앞 문장에 의해 $p_N = p_{I_2}$이다.

**(3)의 증명.** [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$가 고윳값인 것은 정확히 $p_A(\lambda) = 0$일 때이고, (1)에 의해 $p_A(\lambda) = \lambda^2 - (\operatorname{tr} A)\lambda + \det A$이다.

**(4)의 증명.** $g = (t - \lambda_1)(t - \lambda_2)$라 하자. [[product-of-polynomial-functions|다항함수의 곱]]의 정의와 다항함수의 (3)에 의해 실수 $x$에서 $g(x) = (x - \lambda_1)(x - \lambda_2) = \lambda_1\lambda_2 + (-(\lambda_1 + \lambda_2))x + x^2$이다((K1)–(K4), (K9), (K12)). 따라서 위와 같이 $g = (\lambda_1\lambda_2)\,t^0 + (-(\lambda_1 + \lambda_2))\,t^1 + 1\,t^2$이다.

$p_A = g$이면 두 함수는 $0$부터 번호가 붙은 두 계수의 열 $\det A, -\operatorname{tr} A, 1$과 $\lambda_1\lambda_2, -(\lambda_1 + \lambda_2), 1$로 쓴 같은 함수이므로, 계수의 (2)의 (i)에 의해 $\det A = \lambda_1\lambda_2$이고 $-\operatorname{tr} A = -(\lambda_1 + \lambda_2)$이다. 뒤의 등식의 양변에 $-1$을 곱하면 (K9)에 의해 $\operatorname{tr} A = \lambda_1 + \lambda_2$이다. 거꾸로 $\lambda_1 + \lambda_2 = \operatorname{tr} A$이고 $\lambda_1\lambda_2 = \det A$이면 두 계수의 열이 항마다 같으므로 같은 일차결합이고 $p_A = g$이다.

이때 (3)과 같이 고윳값 항목의 (1)에 의해 $\lambda$가 고윳값인 것은 정확히 $(\lambda - \lambda_1)(\lambda - \lambda_2) = 0$일 때이고, (K10)과 (K9)에 의해 이것은 정확히 $\lambda - \lambda_1 = 0$이거나 $\lambda - \lambda_2 = 0$일 때, 곧 ((K12)의 (v)) $\lambda = \lambda_1$이거나 $\lambda = \lambda_2$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[대각합과 행렬식으로 두 고윳값을 읽은 예]
$$
A = \begin{pmatrix} 3 & 1 \\ 2 & 2 \end{pmatrix}
$$

이면 $\operatorname{tr} A = 3 + 2 = 5$이고 $\det A = 3 \cdot 2 - 1 \cdot 2 = 4$이므로 (1)에 의해 $p_A(x) = x^2 - 5x + 4$입니다. $1 + 4 = 5$이고 $1 \cdot 4 = 4$이므로 (4)에 의해 $p_A = (t - 1)(t - 4)$이고, $A$의 고윳값은 정확히 $1$과 $4$입니다. 실제로 $v = (1, -2)$, $w = (1, 1) \in \mathbb{R}^2$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Av = (3 - 2, 2 - 4) = v$이고 $Aw = (3 + 1, 2 + 2) = 4w$입니다.
:::

:::counterexample[특성다항식이 같지만 닮지 않은 2 × 2 행렬의 예]
$$
B = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}
$$

과 $3I_2$는 대각합이 둘 다 $6$이고 행렬식이 둘 다 $9$이므로, (2)에 의해 $p_B = p_{3I_2}$입니다. 그러나 [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (1)에 의해 $3I_2$와 닮은 행렬은 $3I_2$뿐이고 $B \ne 3I_2$이므로, $B$와 $3I_2$는 닮지 않았습니다.
:::

## 확인 질문

:::check[$2 \times 2$ 행렬 $A$의 대각합이 $0$이고 행렬식이 $-4$이면 $A$의 고윳값은 무엇인가?]
$2$와 $-2$입니다. $2 + (-2) = 0 = \operatorname{tr} A$이고 $2 \cdot (-2) = -4 = \det A$이므로 (4)에 의해 $p_A = (t - 2)(t + 2)$이고, 고윳값은 정확히 $2$와 $-2$입니다. (1)로 보면 $p_A(x) = x^2 - 4$입니다.
:::

:::check[$b = c = 0$인 $2 \times 2$ 행렬, 곧 $\operatorname{diag}(a, d)$의 특성다항식을 (4)의 꼴로 쓰면 무엇인가?]
$p_A = (t - a)(t - d)$입니다. $\operatorname{tr} A = a + d$이고 $\det A = ad - 0 \cdot 0 = ad$이므로 (4)를 $\lambda_1 = a$, $\lambda_2 = d$에 쓰면 됩니다. $a = d$이면 두 근이 같아 고윳값은 $a$ 하나입니다.
:::
