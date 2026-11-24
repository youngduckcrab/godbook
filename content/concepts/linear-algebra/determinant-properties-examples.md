---
title: 행렬식의 성질을 쓰는 예
title_en: Examples Using Properties of the Determinant
aliases: [행렬식 계산 예, 3 × 3 방데르몽드 행렬식, 반대칭행렬의 행렬식, examples of determinant properties, Vandermonde determinant of order 3]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 4 × 4 행렬의 행렬식을 행 연산으로 위삼각행렬을 만들어 구하고 같은 행렬을 여인수 전개로 다시 구해 같은 값을 얻는다. 실수 x, y, z 에 대한 3 × 3 방데르몽드 행렬식이 (y − x)(z − x)(z − y) 임을 보이고, 삼각행렬의 곱의 행렬식을 곱의 정리로 구하며, Aᵀ = −A 이고 n 이 홀수이면 det A = 0 임을 보인다.
requires: [real-number-arithmetic, power-of-a-real-number, finite-sum-of-vectors, matrix, matrix-product, transpose, elementary-matrix, row-equivalence, eigenvalues-of-triangular-matrix, minor-matrix, determinant, determinant-and-invertibility, determinant-of-product, determinant-of-transpose, finite-product-of-reals, determinant-of-triangular-matrix, cofactor-expansion]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 3.4 Computing the determinant, p.82; 3절 연습문제 3.3, 3.4, 3.8, p.85, 3.11, p.86; 5절 Cofactor expansion, Remark, p.92; 5절 연습문제 5.1, 5.2, 5.6, pp.94–95"
    checked: original
    note: "(1)은 출처 3.4절(p.82)이 적는 계산법(소거로 삼각행렬에 닿고, 맞바꾸기와 상수배의 보정만 따라간다)을 행 연산으로 한 것이다. 출처는 열 소거로 적는다. (1)은 출처 연습문제 3.3(p.85, 열 연산이나 행 연산으로 행렬식을 계산하라. 4 × 4 행렬 하나가 들어 있다)과 같은 발상이다. (1)(2)처럼 같은 행렬을 두 길로 계산하는 것은 출처 연습문제 5.1(p.94, 아무 방법으로나 계산하라)과 5.2(p.94, 0 이 많은 행이나 열을 골라 전개하라)와 같은 종류의 물음이고, (2)는 5.2 와 같은 발상이다. 출처 5절의 Remark(p.92)는 여인수 전개가 행이나 열에 0 이 많을 때만 실용적이라고 적는다. (3)은 출처 연습문제 3.8(p.85)의 식 (z − x)(z − y)(y − x) 와 같은 값이고(인자의 순서만 다르다), 출처는 이것을 방데르몽드 행렬식의 특수한 경우라고 적으며 일반 꼴은 연습문제 5.6(p.95)에서 귀납으로 다룬다. 이 항목은 3 × 3 만 싣는다. (4)에서 곱의 정리로 행렬식 계산을 줄이는 것은 출처 연습문제 3.11(p.86)의 Hint(블록 삼각행렬을 두 행렬의 곱으로 쓴다)와 같은 발상이다. (5)는 출처 연습문제 3.4(p.85) 'if A is skew-symmetric and n is odd, then det A = 0. Is this true for even n?' 와 같은 진술이고, (5)의 2 × 2 행렬은 그 물음의 짝수인 경우에 대한 답이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 근거 없는 최상급 1건, 행렬식이 0 인 경우에 거짓이던 반례 문장 1건, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
[[determinant|행렬식]], [[determinant-of-triangular-matrix|삼각행렬의 행렬식]], [[cofactor-expansion|여인수 전개]], [[determinant-of-product|곱의 행렬식]], [[determinant-of-transpose|전치행렬의 행렬식]]의 번호를 쓴다. 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이고, $x^2$는 [[power-of-a-real-number|실수의 거듭제곱]]이다.

1. (행 연산으로 위삼각행렬 만들기) 
   $$
   A = \begin{pmatrix} 2 & 1 & 0 & 3 \\ 4 & 3 & 0 & 5 \\ 1 & 0 & 2 & 1 \\ 0 & 2 & 0 & 1 \end{pmatrix}
   $$
   이면 $\det A = 12$이다. 기본행렬의 곱 $E$로 $EA$를 대각성분이 $1$, $1$, $4$, $3$인 위삼각행렬로 만들 수 있고 $\det E = 1$이다.
2. (같은 행렬의 여인수 전개) (1)의 $A$를 셋째 열을 따라 전개해도 $\det A = 12$가 나온다.
3. ($3 \times 3$ 방데르몽드 행렬식) 실수 $x$, $y$, $z$에 대하여
   $$
   \begin{aligned}
   &\det \begin{pmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{pmatrix} \\
   &= (y - x)(z - x)(z - y)
   \end{aligned}
   $$
   이다. 따라서 이 행렬이 가역인 것은 정확히 $x$, $y$, $z$가 서로 다를 때이다.
4. (곱의 정리로 계산 줄이기) 
   $$
   \begin{aligned}
   P &= \begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ -1 & 4 & 1 \end{pmatrix}, \\
   Q &= \begin{pmatrix} 1 & 5 & 2 \\ 0 & -1 & 3 \\ 0 & 0 & 2 \end{pmatrix}
   \end{aligned}
   $$
   이면
   $$
   PQ = \begin{pmatrix} 2 & 10 & 4 \\ 1 & 2 & 11 \\ -1 & -9 & 12 \end{pmatrix}
   $$
   이고 $\det(PQ) = -12$이다.
5. ($A^T = -A$인 행렬) $n$이 홀수인 자연수이고 $A$가 $A^T = -A$인 $n \times n$ 행렬이면 $\det A = 0$이다. $n = 2$에서는 그렇지 않을 수 있다. $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$은 $A^T = -A$를 만족하고 행렬식이 $1$이다.
:::

:::english
We use the numbers of the entries on the determinant, the determinant of a triangular matrix, cofactor expansion, the determinant of a product and the determinant of the transpose. Products of sequences of real numbers are finite products of reals, and $x^2$ is a power of a real number.

1. (Reducing to an upper triangular matrix by row operations) If
   $$
   A = \begin{pmatrix} 2 & 1 & 0 & 3 \\ 4 & 3 & 0 & 5 \\ 1 & 0 & 2 & 1 \\ 0 & 2 & 0 & 1 \end{pmatrix},
   $$
   then $\det A = 12$. A product $E$ of elementary matrices turns $EA$ into an upper triangular matrix with diagonal entries $1$, $1$, $4$, $3$, and $\det E = 1$.
2. (Cofactor expansion of the same matrix) Expanding the $A$ of (1) along the third column also gives $\det A = 12$.
3. ($3 \times 3$ Vandermonde determinant) For real numbers $x$, $y$, $z$,
   $$
   \begin{aligned}
   &\det \begin{pmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{pmatrix} \\
   &= (y - x)(z - x)(z - y).
   \end{aligned}
   $$
   Hence this matrix is invertible exactly when $x$, $y$, $z$ are pairwise distinct.
4. (Shortening a computation with the product theorem) If
   $$
   \begin{aligned}
   P &= \begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ -1 & 4 & 1 \end{pmatrix}, \\
   Q &= \begin{pmatrix} 1 & 5 & 2 \\ 0 & -1 & 3 \\ 0 & 0 & 2 \end{pmatrix},
   \end{aligned}
   $$
   then
   $$
   PQ = \begin{pmatrix} 2 & 10 & 4 \\ 1 & 2 & 11 \\ -1 & -9 & 12 \end{pmatrix}
   $$
   and $\det(PQ) = -12$.
5. (Matrices with $A^T = -A$) If $n$ is an odd natural number and $A$ is an $n \times n$ matrix with $A^T = -A$, then $\det A = 0$. This can fail for $n = 2$: $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ satisfies $A^T = -A$ and has determinant $1$.
:::

## 직관

행렬식은 정의가 아니라 성질로 계산합니다. 행 소거는 기본행렬마다 행렬식이 몇 배가 되는지 알려 주고 끝에 삼각행렬을 남깁니다. 출처는 큰 행렬에서 이 길이 여인수 전개보다 곱셈이 훨씬 적게 든다고 적습니다. 행 더하기와 맞바꾸기만 쓰면, 행 더하기에서는 값이 그대로이고 맞바꿀 때마다 부호를 한 번 바꾸면 됩니다.

여인수 전개는 $0$이 많은 행이나 열이 있을 때 빠릅니다. 같은 행렬을 두 길로 계산해 같은 값이 나오는 것은, 행렬식이 하나로 정해진 수이고 계산하는 길에 기대지 않기 때문입니다.

방데르몽드 행렬식은 행 더하기로 첫째 열을 $e_1$으로 만든 뒤 남은 $2 \times 2$ 행렬식을 인수분해하면 나옵니다. 행렬식이 $0$인 것은 정확히 세 수 가운데 같은 두 수가 있을 때이고, 이때 행렬에 같은 두 행이 생깁니다.

## 증명

:::idea
(1)은 기본행렬을 하나씩 곱해 위삼각행렬에 닿고, [[determinant|행렬식]]의 (5)와 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (3)으로 계산한다. (2)는 0 이 셋인 열로 [[cofactor-expansion|여인수 전개]]를 한다. (3)은 행 더하기와 삼각행렬의 행렬식의 (1). (4)는 [[determinant-of-product|곱의 행렬식]]의 (1). (5)는 전치와 $-A$의 행렬식을 비교한다.
:::

:::hint
(3)에서 둘째 행과 셋째 행에서 첫째 행을 빼면 첫째 열은 무엇이 됩니까? $y^2 - x^2$는 어떻게 인수분해됩니까?
:::

:::hint
(5)에서 $\det A^T$와 $\det(-A)$를 각각 $\det A$로 나타내 보세요.
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용하고, 구체적인 정수의 계산은 (K7)로 쓴다. $3 \times 3$ 행렬식은 [[determinant|행렬식]]의 (4)의 식으로 계산한다. 행렬식 항목의 번호는 "행렬식의 (n)"으로 인용한다.

**(1)의 증명.** $A$의 행을 $r_1 = (2, 1, 0, 3)$, $r_2 = (4, 3, 0, 5)$, $r_3 = (1, 0, 2, 1)$, $r_4 = (0, 2, 0, 1)$이라 하자. [[elementary-matrix|기본행렬]]의 (2)에 의해 다음 기본행렬을 차례로 왼쪽에 곱하면 행이 다음과 같이 바뀐다.

- $P_{1,3}$: 행은 $(1, 0, 2, 1)$, $(4, 3, 0, 5)$, $(2, 1, 0, 3)$, $(0, 2, 0, 1)$이 된다.
- $R_{2,1}(-4)$: 둘째 행이 $(4, 3, 0, 5) - 4(1, 0, 2, 1) = (0, 3, -8, 1)$이 된다.
- $R_{3,1}(-2)$: 셋째 행이 $(2, 1, 0, 3) - 2(1, 0, 2, 1) = (0, 1, -4, 1)$이 된다.
- $P_{2,3}$: 둘째 행과 셋째 행이 맞바뀌어 둘째 행은 $(0, 1, -4, 1)$, 셋째 행은 $(0, 3, -8, 1)$이 된다.
- $R_{3,2}(-3)$: 셋째 행이 $(0, 3, -8, 1) - 3(0, 1, -4, 1) = (0, 0, 4, -2)$가 된다.
- $R_{4,2}(-2)$: 넷째 행이 $(0, 2, 0, 1) - 2(0, 1, -4, 1) = (0, 0, 8, -1)$이 된다.
- $R_{4,3}(-2)$: 넷째 행이 $(0, 0, 8, -1) - 2(0, 0, 4, -2) = (0, 0, 0, 3)$이 된다.

이 일곱 기본행렬을 차례로 곱한 것을 $E$라 하면 [[row-equivalence|행 동치]]의 (1)에 의해 $E$는 기본행렬의 곱이고,

$$
EA = U = \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & -4 & 1 \\ 0 & 0 & 4 & -2 \\ 0 & 0 & 0 & 3 \end{pmatrix}
$$

이다. $U$는 [[eigenvalues-of-triangular-matrix|위삼각행렬]]이므로 삼각행렬의 행렬식의 (3)에 의해 $\det U = 1 \cdot 1 \cdot 4 \cdot 3 = 12$이다. 행렬식의 (5)를 한 단계씩 쓰면 맞바꾸기 두 번에서 $-1$이 두 번, 행 더하기에서 $1$이 곱해지므로 $\det U = (-1)(-1) \det A = \det A$이다. 같은 계산을 $I_4$에서 하면 $\det E = (-1)(-1) \cdot 1 = 1$이다. 따라서 $\det A = 12$이다.

**(2)의 증명.** $A$의 셋째 열은 $0$, $0$, $2$, $0$이다. [[cofactor-expansion|여인수 전개]]의 (1)을 $k = 3$으로 쓰면 $j \ne 3$인 항은 (K9)에 의해 $0$이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)에 의해 $\det A = 2 \cdot (-1)^{3+3} \det A^{(3,3)}$이다. [[minor-matrix|소행렬]]의 정의에 의해 $A^{(3,3)}$은 셋째 행과 셋째 열을 지운

$$
A^{(3,3)} = \begin{pmatrix} 2 & 1 & 3 \\ 4 & 3 & 5 \\ 0 & 2 & 1 \end{pmatrix}
$$

이고, 행렬식의 (4)에 의해 $\det A^{(3,3)} = 2 \cdot (3 - 10) - 4 \cdot (1 - 6) + 0 = -14 + 20 = 6$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^6 = 1$이므로 $\det A = 2 \cdot 6 = 12$이다.

**(3)의 증명.** 행렬을 $V$라 하자. 실수의 거듭제곱의 (1)에 의해 $x^2 = xx$이고 $y^2$, $z^2$도 그렇다. $R_{2,1}(-1)$과 $R_{3,1}(-1)$을 차례로 곱하면 행렬식의 (5)에 의해 행렬식은 그대로이고, 기본행렬의 (2)에 의해 둘째 행과 셋째 행은 $(0, y - x, y^2 - x^2)$, $(0, z - x, z^2 - x^2)$가 된다. 이 행렬의 첫째 열은 $e_1$이므로 삼각행렬의 행렬식의 (1)과 소행렬의 (2)에 의해

$$
\det V = \det \begin{pmatrix} y - x & y^2 - x^2 \\ z - x & z^2 - x^2 \end{pmatrix}
$$

이다. (K1)–(K3), (K9), (K12)에 의해 $y^2 - x^2 = (y - x)(y + x)$, $z^2 - x^2 = (z - x)(z + x)$이다. 행렬식의 (4)와 같은 법칙들에 의해

$$
\begin{aligned}
\det V &= (y - x)(z - x)(z + x) \\
&\quad - (z - x)(y - x)(y + x) \\
&= (y - x)(z - x) \\
&\qquad \cdot \big((z + x) - (y + x)\big) \\
&= (y - x)(z - x)(z - y)
\end{aligned}
$$

이다. 마지막 식은 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해 길이 $3$인 열 $y - x$, $z - x$, $z - y$의 곱이다. 그 항목의 (5)에 의해 이 곱이 $0$이 아닌 것은 정확히 세 인자가 모두 $0$이 아닐 때, 곧 (K12)의 (v)에 의해 $y \ne x$, $z \ne x$, $z \ne y$일 때이다. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 가역성에 관한 문장이 나온다.

**(4)의 증명.** [[matrix-product|행렬의 곱]]의 (2)로 성분을 계산하면 $PQ$의 첫째 행은 $2(1, 5, 2) = (2, 10, 4)$, 둘째 행은 $(1, 5, 2) + 3(0, -1, 3) = (1, 2, 11)$, 셋째 행은 $-(1, 5, 2) + 4(0, -1, 3) + (0, 0, 2) = (-1, -9, 12)$이다. $P$는 아래삼각행렬이고 $Q$는 위삼각행렬이므로 삼각행렬의 행렬식의 (4)와 (3)에 의해 $\det P = 2 \cdot 3 \cdot 1 = 6$, $\det Q = 1 \cdot (-1) \cdot 2 = -2$이다. [[determinant-of-product|곱의 행렬식]]의 (1)에 의해 $\det(PQ) = 6 \cdot (-2) = -12$이다. 행렬식의 (4)로 직접 계산해도

$$
\begin{aligned}
\det(PQ) &= 2(24 + 99) \\
&\quad - 1 \cdot (120 + 36) \\
&\quad + (-1)(110 - 8) \\
&= 246 - 156 - 102 = -12
\end{aligned}
$$

이다.

**(5)의 증명.** [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)에 의해 $\det A = \det A^T = \det(-A)$이고, 곱의 행렬식의 (4)에 의해 $\det(-A) = (-1)^n \det A$이다. $n$이 홀수이므로 실수의 거듭제곱의 (5)에 의해 $(-1)^n = -1$이고, $\det A = -\det A$이다. 양변에 $\det A$를 더하면 $2 \det A = 0$이고((K3), (K5)), (K7)에 의해 $2 \ne 0$이므로 (K10)에 의해 $\det A = 0$이다.

$n = 2$의 행렬 $J = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$은 [[transpose|전치행렬]]의 정의에 의해 $J^T = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이고, [[matrix|행렬]]의 (1)에 의해 이것은 $-J$이다. 행렬식의 (4)에 의해 $\det J = 0 \cdot 0 - (-1) \cdot 1 = 1$이다. $\blacksquare$
:::

## 확인 질문

:::check[(3)의 행렬에서 $x = 1$, $y = 2$, $z = 4$이면 행렬식은 무엇인가?]
$(2 - 1)(4 - 1)(4 - 2) = 1 \cdot 3 \cdot 2 = 6$입니다. 직접 계산하면 행렬은 $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 4 & 16 \end{pmatrix}$이고 [[determinant|행렬식]]의 (4)에 의해 $1 \cdot (32 - 16) - 1 \cdot (16 - 4) + 1 \cdot (4 - 2) = 16 - 12 + 2 = 6$입니다.
:::

:::check[(4)의 $Q$, $P$로 만든 $QP$의 행렬식은 무엇인가?]
[[determinant-of-product|곱의 행렬식]]의 (2)에 의해 $\det(QP) = \det(PQ) = -12$입니다. $QP$를 계산하지 않아도 됩니다.
:::
