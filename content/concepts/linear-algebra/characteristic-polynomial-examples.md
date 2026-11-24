---
title: 특성다항식으로 고윳값을 구하는 예
title_en: Examples of Finding Eigenvalues with the Characteristic Polynomial
aliases: [특성다항식의 계산 예, 고윳값 계산 예, examples of characteristic polynomials, computing eigenvalues]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 3 × 3 행렬 하나의 특성다항식을 첫째 열 전개로 구해 인수분해하고 고윳값 1, 3, −2 와 고유공간을 구한다. J 의 특성다항식 t² + t⁰ 은 근이 없고, N 과 I₂ 는 특성다항식 (t − 1)² 이 같지만 닮지 않았으며, 행렬식이 0 인 2 × 2 행렬은 고윳값 0 을 갖는다.
requires: [function, real-number-arithmetic, order-properties-of-reals, square-root-exists, real-function-space, linear-combination-and-span, matrix, matrix-vector-product, change-of-basis-and-similarity, eigenvalue-and-eigenvector, eigenvectors-of-distinct-eigenvalues, diagonalizable, eigenvalue-examples, minor-matrix, determinant, similarity-invariants-examples, finite-product-of-reals, polynomial-function, product-of-polynomial-functions, factor-theorem, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-2x2, characteristic-polynomial-of-triangular]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 2절 Diagonalization, 2.7 Some example 의 2.7.1–2.7.3, pp.112–113; 4장 1절 1.4 Complex vs real spaces, p.102; 1.6 Trace and determinant, Theorem 1.2, p.103; 4장 1절 연습문제 1.2, 1.3, p.104; 4장 2절 연습문제 2.5, p.114"
    checked: original
    note: "출처 4장 2.7(pp.112–113)은 2 × 2 행렬 셋의 특성다항식을 계산해 고윳값과 고유벡터를 구한다. 2.7.1 의 (1 2; 8 1) 은 고윳값 5, −3 과 고유벡터 (1, 2), (1, −2) 를 갖는다. (1)은 같은 일(특성다항식 → 근 → A − λI 의 영공간)을 3 × 3 행렬 하나에 한 것으로 같은 발상이다. 2.7.2 의 (1 2; −2 1) 은 특성다항식 (1 − λ)² + 2² 의 근이 복소수 1 ± 2i 이고, (2)의 J 도 같은 까닭(특성다항식이 제곱 더하기 양수)으로 실근이 없다. 출처는 1.4(p.102)에서 평면의 회전 R_α (α ≠ πn) 가 실고윳값을 갖지 않는 예라고 적고, 연습문제 1.3(p.104)은 회전행렬의 고윳값을 구하라고 한다(J 는 α 가 직각인 회전의 행렬이다). (3)의 N 과 특성다항식 (1 − λ)² 은 출처 2.7.3(p.113)의 것과 같다. 출처 연습문제 1.2(p.104)는 3 × 3 행렬 (1 3 3; −3 −5 −3; 3 3 1) 을 포함한 세 행렬의 특성다항식, 고윳값, 고유벡터를 구하라고 하고, 연습문제 2.5 c)(p.114)는 3 × 3 행렬 (−2 2 6; 5 1 −6; −5 2 9) 를 λ = 2 가 고윳값이라는 귀띔과 함께 대각화하라고 한다. (1)이 근 하나를 대입으로 확인하는 것은 이 귀띔과 같은 발상이다. 출처는 특성다항식의 근을 찾는 일이 고차에서는 어렵다고 적는다(p.101). 확인 질문 '(1)의 $M$의 행렬식은 무엇인가?'의 마지막 문장(세 고윳값의 곱이 행렬식)은 출처 4장 1.6 Theorem 1.2 의 2.(p.103: det A = λ₁λ₂⋯λₙ)와 같은 사실이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
특성다항식 $p_A$는 [[characteristic-polynomial|특성다항식]]의 것이고, 고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, 대각화 가능은 [[diagonalizable|대각화 가능]]의 것이다. $t^k$, 실수 $c$에 대한 $t - c$는 [[polynomial-function|다항함수]]의 것이고 함수의 열의 곱과 $f^2$은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. $\mathbb{R}^n$의 원소 $(x_1, \dots, x_n)$과 생성 $\operatorname{span}$은 [[real-function-space|실숫값 함수의 공간]]과 [[linear-combination-and-span|일차결합과 생성]]의 것이다.

1. ($3 \times 3$ 행렬) $M = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 0 \end{pmatrix}$이면 모든 실수 $x$에서 $p_M(x) = -x^3 + 2x^2 + 5x - 6$이고,
   $$
   \begin{aligned}
   p_M &= (-1)(t - 1)(t - 3) \\
   &\qquad \bigl(t - (-2)\bigr)
   \end{aligned}
   $$
   이다. $M$의 고윳값은 정확히 $1$, $3$, $-2$이고, 그 고유공간은 차례로 $\operatorname{span}((2, -3, 1))$, $\operatorname{span}((2, 5, 3))$, $\operatorname{span}((1, 0, -1))$이다. $M$은 대각화 가능이다.
2. (고윳값이 없는 행렬) $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이면 $p_J = t^2 + t^0$이고, 모든 실수 $x$에서 $1 \le p_J(x)$이다. 따라서 $p_J$에는 근이 없고 $J$에는 고윳값이 없다.
3. (특성다항식이 같은 두 행렬) $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $p_N = p_{I_2} = (t - 1)^2$이다. $N$의 고윳값은 $1$뿐이다. $N$과 $I_2$는 [[change-of-basis-and-similarity|닮지]] 않았다.
4. (고윳값 $0$) $P = \begin{pmatrix} 1 & -1 \\ -2 & 2 \end{pmatrix}$이면 $p_P = (t - 0)(t - 3)$이고, $P$의 고윳값은 정확히 $0$과 $3$이다. $\det P = 0$이고 $P$는 가역이 아니다. 고윳값 $0$과 $3$의 고유공간은 차례로 $\operatorname{span}((1, 1))$과 $\operatorname{span}((1, -2))$이다.
:::

:::english
The characteristic polynomial $p_A$ is that of the entry on characteristic polynomials; eigenvalues and eigenspaces are those of the entry on eigenvalues and eigenvectors, and diagonalizability is that of the entry on diagonalizable matrices. $t^k$ and $t - c$ for a real number $c$ are those of the entry on polynomial functions, and products of sequences of functions and $f^2$ are those of the entry on products of polynomial functions. Elements $(x_1, \dots, x_n)$ of $\mathbb{R}^n$ and spans are those of the entries on spaces of real-valued functions and on linear combinations and spans.

1. (A $3 \times 3$ matrix) If $M = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 0 \end{pmatrix}$, then $p_M(x) = -x^3 + 2x^2 + 5x - 6$ for every real number $x$, and
   $$
   \begin{aligned}
   p_M &= (-1)(t - 1)(t - 3) \\
   &\qquad \bigl(t - (-2)\bigr).
   \end{aligned}
   $$
   The eigenvalues of $M$ are exactly $1$, $3$, $-2$, and the corresponding eigenspaces are $\operatorname{span}((2, -3, 1))$, $\operatorname{span}((2, 5, 3))$, $\operatorname{span}((1, 0, -1))$ respectively. $M$ is diagonalizable.
2. (A matrix without eigenvalues) If $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, then $p_J = t^2 + t^0$ and $1 \le p_J(x)$ for every real number $x$. Hence $p_J$ has no root and $J$ has no eigenvalue.
3. (Two matrices with the same characteristic polynomial) If $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, then $p_N = p_{I_2} = (t - 1)^2$. The only eigenvalue of $N$ is $1$. $N$ and $I_2$ are not similar.
4. (The eigenvalue $0$) If $P = \begin{pmatrix} 1 & -1 \\ -2 & 2 \end{pmatrix}$, then $p_P = (t - 0)(t - 3)$, and the eigenvalues of $P$ are exactly $0$ and $3$. $\det P = 0$ and $P$ is not invertible. The eigenspaces for the eigenvalues $0$ and $3$ are $\operatorname{span}((1, 1))$ and $\operatorname{span}((1, -2))$ respectively.
:::

## 직관

[[eigenvalue-iff-root|고윳값과 특성다항식의 근]]은 고윳값을 찾는 일을 세 단계로 나눕니다. 특성다항식을 계산하고, 그 근을 찾고, 근 $\lambda$마다 $(A - \lambda I_n)x = 0$을 풀어 고유공간을 구합니다. 첫째와 셋째 단계는 행렬식과 연립방정식의 계산이지만, 둘째 단계에는 이 강의가 일반적인 $n \times n$ 행렬에 쓸 수 있는 방법을 주지 않습니다. (1)에서는 작은 정수를 넣어 보아 근을 찾았고, 찾은 근으로 인수분해한 식을 전개해 원래의 식과 같음을 확인했습니다. 이 방법은 근이 정수가 아니면 통하지 않을 수 있습니다(아래 예시).

요리법에 빗대면, 재료를 썰고(특성다항식) 익히는(고유공간) 일은 늘 할 수 있지만, 간을 맞추는 일(근 찾기)은 맛을 보며 짐작해야 하는 것과 비슷합니다. 비유와 다른 점은, 짐작한 근이 맞는지는 대입 한 번으로 정확히 확인된다는 것입니다.

(2)와 (3)은 근이 없는 경우와 근이 하나뿐인 경우입니다. (3)의 $N$과 $I_2$는 특성다항식이 같아 고윳값도 같지만 닮지 않았습니다. 특성다항식은 고윳값을 알려 주지만 행렬을 닮음까지 정하지는 않습니다. (4)는 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (3)대로, 행렬식이 $0$인 행렬은 고윳값 $0$을 갖는다는 것을 보여 줍니다.

## 증명

:::idea
행렬식을 첫째 열 전개와 $2 \times 2$의 식으로 계산하고, 근은 대입으로 확인한 뒤 인수분해한 식을 전개해 맞춘다. 고유공간은 $(A - \lambda I)x = 0$을 행마다 풀어 해를 모두 구한다.
:::

:::hint
$M - xI_3$을 첫째 열을 따라 전개하면 세 개의 $2 \times 2$ 행렬식이 나온다. 그 가운데 $x$가 두 번 들어가는 것은 어느 것인가?
:::

:::hint
$p_J(x) = xx + 1$이다. 제곱은 음수가 아니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). 함수의 열의 곱의 값은 값들의 열의 곱이고, 실수 $c$에 대하여 $t - c$의 $x$에서의 값은 $x - c$이다([[product-of-polynomial-functions|다항함수의 곱]]의 정의, [[polynomial-function|다항함수]]의 (3)). 고유공간에 관해서는, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의와 (1), (4)에 의해 $n \times n$ 행렬 $A$의 $\lambda$에 대한 고유공간은 $\operatorname{Ker}(T_A - \lambda i_{\mathbb{R}^n}) = \operatorname{Ker} T_{A - \lambda I_n}$, 곧 $(A - \lambda I_n)x = 0$인 $x \in \mathbb{R}^n$ 전체이다. $(A - \lambda I_n)x$의 $j$번째 값은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)으로 계산한다. $A - xI_n$의 성분은 [[matrix|행렬]]의 (1), (6)에 의해 대각성분이 $a_{k,k} - x$이고 나머지는 $a_{j,k}$이다.

**(1)의 증명.** 실수 $x$에서 $Q = M - xI_3 = \begin{pmatrix} -x & 0 & 2 \\ 1 & 2 - x & 1 \\ 2 & 1 & -x \end{pmatrix}$이다. [[minor-matrix|소행렬]]의 정의에 의해
$$
\begin{aligned}
Q^{(1,1)} &= \begin{pmatrix} 2 - x & 1 \\ 1 & -x \end{pmatrix}, \\
Q^{(2,1)} &= \begin{pmatrix} 0 & 2 \\ 1 & -x \end{pmatrix}, \\
Q^{(3,1)} &= \begin{pmatrix} 0 & 2 \\ 2 - x & 1 \end{pmatrix}
\end{aligned}
$$
이고, [[determinant|행렬식]]의 (4)에 의해 이들의 행렬식은 $(2 - x)(-x) - 1 \cdot 1 = x^2 - 2x - 1$, $0 \cdot (-x) - 1 \cdot 2 = -2$, $0 \cdot 1 - (2 - x) \cdot 2 = 2x - 4$이다. 행렬식의 (3)(첫째 열 전개)에 의해
$$
\begin{aligned}
p_M(x) &= (-x)(x^2 - 2x - 1) \\
&\quad - 1 \cdot (-2) + 2(2x - 4) \\
&= -x^3 + 2x^2 + 5x - 6
\end{aligned}
$$
이다((K1)–(K4), (K9), (K12)). 한편 $(x - 1)(x - 3) = x^2 - 4x + 3$이고 $(x^2 - 4x + 3)(x + 2) = x^3 - 2x^2 - 5x + 6$이므로 $(-1)\bigl((x - 1)(x - 3)(x - (-2))\bigr) = -x^3 + 2x^2 + 5x - 6$이다([[finite-product-of-reals|실수의 유한 곱]]의 (1)). 따라서 모든 $x$에서 두 함수의 값이 같고 $p_M = (-1)(t - 1)(t - 3)(t - (-2))$이다. (근 $1$, $3$, $-2$는 $p_M(1) = -1 + 2 + 5 - 6 = 0$처럼 작은 정수를 넣어 찾았다. 인수분해한 꼴에서 그 수들이 근이라는 것은 [[factor-theorem|인수 정리]]의 (3)과도 맞는다.)

[[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$가 고윳값인 것은 정확히 $(-1)\bigl((\lambda - 1)(\lambda - 3)(\lambda + 2)\bigr) = 0$일 때이다. $-1 \ne 0$이므로 (K10)과 (K9)에 의해 이것은 세 수의 곱이 $0$일 때이고, 유한 곱의 (5)와 (K12)의 (v)에 의해 정확히 $\lambda$가 $1$, $3$, $-2$ 가운데 하나일 때이다.

고유공간을 구한다. $x = (x_1, x_2, x_3)$이라 하자.

$\lambda = 1$: $M - I_3$의 세 행은 $(-1, 0, 2)$, $(1, 1, 1)$, $(2, 1, -1)$이므로 $(M - I_3)x = 0$은 $-x_1 + 2x_3 = 0$, $x_1 + x_2 + x_3 = 0$, $2x_1 + x_2 - x_3 = 0$이다. 첫 식에서 $x_1 = 2x_3$, 둘째 식에서 $x_2 = -3x_3$이고, 이때 셋째 식은 $4x_3 - 3x_3 - x_3 = 0$으로 성립한다. 따라서 해는 정확히 $x_3(2, -3, 1)$ 꼴($x_3$은 실수)이고 고유공간은 $\operatorname{span}((2, -3, 1))$이다.

$\lambda = 3$: 세 행은 $(-3, 0, 2)$, $(1, -1, 1)$, $(2, 1, -3)$이다. 첫 식 $-3x_1 + 2x_3 = 0$에서 $x_3 = 3 \cdot 2^{-1} x_1$, 둘째 식 $x_1 - x_2 + x_3 = 0$에서 $x_2 = x_1 + x_3 = 5 \cdot 2^{-1} x_1$이고, 셋째 식은 $2x_1 + 5 \cdot 2^{-1} x_1 - 9 \cdot 2^{-1} x_1 = 0$으로 성립한다. 따라서 해는 정확히 $(2^{-1} x_1)(2, 5, 3)$ 꼴이고 고유공간은 $\operatorname{span}((2, 5, 3))$이다.

$\lambda = -2$: $M + 2I_3$의 세 행은 $(2, 0, 2)$, $(1, 4, 1)$, $(2, 1, 2)$이다. 첫 식에서 $x_3 = -x_1$, 둘째 식에서 $4x_2 = -x_1 - x_3 = 0$이므로 $x_2 = 0$이고, 셋째 식은 $2x_1 + 0 - 2x_1 = 0$으로 성립한다. 따라서 고유공간은 $\operatorname{span}((1, 0, -1))$이다.

$1$, $3$, $-2$는 서로 다른 길이 $3$인 고윳값의 열이므로 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (5)에 의해 $M$은 대각화 가능이다.

**(2)의 증명.** $\operatorname{tr} J = 0 + 0 = 0$이고 $\det J = 0 \cdot 0 - 1 \cdot (-1) = 1$이므로 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $p_J = 1\,t^0 + 0\,t^1 + 1\,t^2$이고, $0\,t^1$은 영함수이므로 $p_J = t^2 + t^0$이다. 실수 $x$에서 $p_J(x) = xx + 1$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le xx$이고, (2)의 (i)에 의해 $1 = 0 + 1 \le xx + 1$이다. (5)의 (ii)에 의해 $0 < 1$이므로 (1)의 (v)에 의해 $0 < p_J(x)$이고, (1)의 (i)에 의해 $p_J(x) \ne 0$이다. 따라서 $p_J$에는 근이 없고, 고윳값과 근의 항목의 (1)에 의해 $J$에는 고윳값이 없다. 이것은 [[eigenvalue-examples|고윳값의 예]]의 (1)과 같은 결론이다(그 항목은 이 순서의 사실 대신 (Y1)을 받아들여 증명했다).

**(3)의 증명.** $N$은 대각성분이 $1$, $1$인 위삼각행렬이므로 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (2)에 의해 $p_N = (-1)^2 (t - 1)(t - 1)$이고, $(-1)^2 = 1$이며 모든 항이 $t - 1$인 길이 $2$인 열의 곱은 정의에 의해 $(t - 1)^2$이다. 같은 항목의 (4)에 의해 $p_{I_2} = (-1)^2 (t - 1)^2 = (t - 1)^2$이다. 같은 항목의 (3)에 의해 $N$의 고윳값은 $1$뿐이다. [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (2)에 의해 $N$과 $I_2$는 닮지 않았다.

**(4)의 증명.** $\operatorname{tr} P = 1 + 2 = 3$이고 $\det P = 1 \cdot 2 - (-2)(-1) = 0$이다(행렬식의 (4)). $0 + 3 = 3$이고 $0 \cdot 3 = 0$이므로 $2 \times 2$ 행렬의 특성다항식의 (4)에 의해 $p_P = (t - 0)(t - 3)$이고 고윳값은 정확히 $0$과 $3$이다. 고윳값과 근의 항목의 (3)에 의해 $P$는 가역이 아니다. $Px = 0$은 $x_1 - x_2 = 0$, $-2x_1 + 2x_2 = 0$이므로 해는 정확히 $x_1(1, 1)$ 꼴이다. $P - 3I_2$의 두 행은 $(-2, -1)$, $(-2, -1)$이므로 $(P - 3I_2)x = 0$은 $x_2 = -2x_1$과 같고 해는 정확히 $x_1(1, -2)$ 꼴이다. $\blacksquare$
:::

## 예시와 반례

:::example[정수가 아닌 고윳값을 갖는 예]
$A = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$이면 $\operatorname{tr} A = 0$, $\det A = 0 - 2 = -2$이므로 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $p_A(x) = x^2 - 2$입니다. 작은 정수 $0$, $\pm 1$, $\pm 2$를 넣으면 값은 $-2$, $-1$, $2$로 $0$이 아닙니다. 그래도 고윳값은 있습니다. [[square-root-exists|제곱근의 존재]]의 (1)의 $\sqrt{2}$에 대하여 $\sqrt{2} + (-\sqrt{2}) = 0$이고 $\sqrt{2} \cdot (-\sqrt{2}) = -2$이므로, $2 \times 2$ 행렬의 특성다항식의 (4)에 의해 $p_A = (t - \sqrt{2})(t + \sqrt{2})$이고 고윳값은 정확히 $\sqrt{2}$와 $-\sqrt{2}$입니다. 이 예는 근을 작은 정수에서 찾는 (1)의 방법이 늘 통하지는 않는다는 것을 보여 줍니다.
:::

## 확인 질문

:::check[(1)의 $M$의 행렬식은 무엇인가?]
$-6$입니다. [[characteristic-polynomial|특성다항식]]의 (2)에 의해 $\det M$은 $p_M$의 상수항 $p_M(0) = -6$입니다. 첫째 열 전개로 직접 계산해도 $0 \cdot (2 \cdot 0 - 1 \cdot 1) - 1 \cdot (0 \cdot 0 - 1 \cdot 2) + 2 \cdot (0 \cdot 1 - 2 \cdot 2) = 2 - 8 = -6$입니다. 세 고윳값의 곱 $1 \cdot 3 \cdot (-2)$도 $-6$입니다.
:::

:::check[(1)의 $M$에 대하여 $\det(M - 5I_3)$은 무엇인가?]
$-56$입니다. 정의에 의해 $\det(M - 5I_3) = p_M(5)$이고, 인수분해한 꼴로 $(-1)(5 - 1)(5 - 3)(5 + 2) = -(4 \cdot 2 \cdot 7) = -56$입니다. 전개한 식으로도 $-125 + 50 + 25 - 6 = -56$입니다. $5$는 고윳값이 아니므로 $M - 5I_3$은 가역입니다.
:::
