---
title: 특잇값 분해의 예
title_en: Examples of Singular Value Decompositions
aliases: [특잇값 분해 계산, SVD examples]
kind: proposition
field: linear-algebra
msc: ["15A18", "15A23"]
level: undergrad
summary: 3 × 2 행렬의 특잇값 분해 전체와 가장 큰 특잇값, 계수가 1 이라 가장 큰 특잇값이 프로베니우스 노름과 같은 행렬, 특잇값이 고윳값의 절댓값인 대칭이지만 양의 준정부호가 아닌 행렬, 대칭이 아닌 2 × 2 행렬의 극분해를 계산한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, finite-sum-of-vectors, linear-combination-and-span, linear-independence, dimension-of-subspace, standard-basis, matrix, matrix-vector-product, matrix-product, transpose, invertible-matrix, rank-of-a-matrix, eigenvalue-and-eigenvector, eigenvalue-iff-root, diagonalizable, quadratic-form, standard-inner-product, norm-in-inner-product-space, orthonormal-list, orthonormal-basis, self-adjoint-map, orthogonal-matrix, bound-for-matrix-times-vector, positive-definite-matrix, positive-semidefinite-square-root, singular-value-decomposition, singular-values, largest-singular-value, polar-decomposition]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 3절 Polar and singular value decompositions 의 연습문제 3.2, 3.4, 3.5, 3.7, 3.11, pp.178–179; 6장 4절 4.2 Operator norm of a linear transformation., p.182
    checked: original
    note: "(1)은 출처 연습문제 3.4(p.178)가 3 × 2 와 2 × 3 행렬의 특잇값 분해 A = WΣV* 를 구하라는 것과 같은 물음이고, (1)의 (iii)은 출처 연습문제 3.5 a)(p.178)가 단위공 위의 ‖Ax‖ 의 최대와 그 최대를 내는 벡터를 묻는 것과 같은 물음이다. (2)는 출처 연습문제 3.11(p.179: 작용소 노름이 프로베니우스 노름과 같은 것은 정확히 계수가 1 일 때)의 한쪽 방향의 예이고, 출처 연습문제 3.4 a)의 행렬 (−3 1; 6 −2; 6 −2) 도 계수가 1 인 3 × 2 행렬이라는 점에서 같은 종류이다. (3)은 출처 연습문제 3.7 e)(p.178: 자기수반행렬의 특잇값은 고윳값과 같은가)에 대한 반례의 꼴이다. (4)는 출처 3.4.1(p.177)의 식 (3.6)의 길로 극분해를 구한 것이다. 확인 질문 '(2)의 $A$에서 $\\lVert Ax \\rVert \\le 35\\lVert x \\rVert$의 등호가 되는 단위벡터는 무엇인가?'는 출처 연습문제 3.5 a)(p.178)의 '최대를 내는 벡터'와 같은 물음이고, 확인 질문 '(4)의 $A$의 가장 큰 특잇값과 $\\lVert A \\rVert_F$는 얼마인가?'는 출처 6장 4.2(p.182)의 ‖A‖₂² = Σ s_k² 와 ‖A‖ ≤ ‖A‖₂ 를 한 행렬에서 계산한 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 특잇값·극분해 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다. 특잇값 분해와 그 $r$, $\sigma$는 [[singular-value-decomposition|특잇값 분해]]의 것, 특잇값은 [[singular-values|특잇값]]의 것, $\gamma_A$와 $\mathcal{L}_A$는 [[largest-singular-value|가장 큰 특잇값과 행렬의 크기]]의 것, 극분해와 $\sqrt{\ }$은 [[polar-decomposition|극분해]]와 [[positive-semidefinite-square-root|양의 준정부호 제곱근]]의 것, $\lVert A \rVert_F$는 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 프로베니우스 노름이다.

1. ($3 \times 2$ 행렬의 분해)
   $$
   A = \begin{pmatrix} 9 & 12 \\ 4 & -3 \\ 12 & 16 \end{pmatrix}
   $$
   이라 하자.
   - (i) $A^T A = \begin{pmatrix} 241 & 288 \\ 288 & 409 \end{pmatrix}$이다.
   - (ii) 아래의 $W$, $\Sigma$, $V$에 대하여 $(W, \Sigma, V)$는 $r = 2$, $\sigma_1 = 25$, $\sigma_2 = 5$인 $A$의 특잇값 분해이다.
     $$
     \begin{aligned}
     W &= 5^{-1}\begin{pmatrix} 3 & 0 & 4 \\ 0 & 5 & 0 \\ 4 & 0 & -3 \end{pmatrix}, \\
     \Sigma &= \begin{pmatrix} 25 & 0 \\ 0 & 5 \\ 0 & 0 \end{pmatrix}, \\
     V &= 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
     \end{aligned}
     $$
   - (iii) $A$의 특잇값은 정확히 $25$와 $5$이다. $\gamma_A = 25$이고 $\lVert A\mathbf{v}_1 \rVert = 25$이며($\mathbf{v}_1 = 5^{-1}(3, 4)$), $\lVert A \rVert_F = \sqrt{650}$이고 $\gamma_A < \lVert A \rVert_F$이다.
2. (계수가 $1$인 행렬)
   $$
   A = \begin{pmatrix} 6 & 8 \\ 9 & 12 \\ 18 & 24 \end{pmatrix}
   $$
   이라 하자.
   - (i) $\operatorname{rank} A = 1$이다([[rank-of-a-matrix|행렬의 계수]]).
   - (ii) 아래의 $W$, $\Sigma$, $V$에 대하여 $(W, \Sigma, V)$는 $r = 1$, $\sigma_1 = 35$인 $A$의 특잇값 분해이다.
     $$
     \begin{aligned}
     W &= 7^{-1}\begin{pmatrix} 2 & 3 & 6 \\ 3 & -6 & 2 \\ 6 & 2 & -3 \end{pmatrix}, \\
     \Sigma &= \begin{pmatrix} 35 & 0 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}, \\
     V &= 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
     \end{aligned}
     $$
   - (iii) $A$의 특잇값은 $35$ 하나뿐이고 $\gamma_A = \lVert A \rVert_F = 35$이다.
3. (대칭이지만 양의 준정부호가 아닌 행렬)
   $$
   A = \begin{pmatrix} 0 & 2 \\ 2 & 3 \end{pmatrix}
   $$
   이라 하자.
   - (i) $A$는 대칭이고, 고윳값은 정확히 $4$와 $-1$이며, [[positive-definite-matrix|양의 준정부호]]가 아니다.
   - (ii) $A$의 특잇값은 정확히 $4$와 $1$이고 $\gamma_A = 4$이다. 특잇값 $1$은 $A$의 고윳값이 아니다.
   - (iii) 아래의 $V$, $W$, $\Sigma$에 대하여 $(W, \Sigma, V)$는 $r = 2$인 $A$의 특잇값 분해이고, $W \ne V$이다.
     $$
     \begin{aligned}
     V &= (\sqrt{5})^{-1}\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}, \\
     W &= (\sqrt{5})^{-1}\begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}, \\
     \Sigma &= \operatorname{diag}(4, 1)
     \end{aligned}
     $$
4. (극분해)
   $$
   A = \begin{pmatrix} 6 & 8 \\ 4 & -3 \end{pmatrix}
   $$
   이라 하고 $V = 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$이라 하자.
   - (i) $(I_2, \operatorname{diag}(10, 5), V)$는 $r = 2$, $\sigma_1 = 10$, $\sigma_2 = 5$인 $A$의 특잇값 분해이다.
   - (ii) $A^T A = \begin{pmatrix} 52 & 36 \\ 36 & 73 \end{pmatrix}$이고 $\sqrt{A^T A} = 5^{-1}\begin{pmatrix} 34 & 12 \\ 12 & 41 \end{pmatrix}$이다.
   - (iii) $U = V$는 직교행렬이고 $A = U\sqrt{A^T A}$이다. 또 $AA^T = \operatorname{diag}(100, 25)$, $\sqrt{AA^T} = \operatorname{diag}(10, 5)$이고 $A = \sqrt{AA^T}\, U$이다.
:::

:::english
Give $\mathbb{R}^n$ the standard inner product. Singular value decompositions and their $r$, $\sigma$ are those of the entry on the singular value decomposition, singular values are those of the entry on singular values, $\gamma_A$ and $\mathcal{L}_A$ are those of the entry on the largest singular value and the size of a matrix, polar decompositions and $\sqrt{\ }$ are those of the entries on the polar decomposition and on the positive semidefinite square root, and $\lVert A \rVert_F$ is the Frobenius norm of the entry on bounds for the product of a matrix and a vector.

1. (Decomposition of a $3 \times 2$ matrix) Let
   $$
   A = \begin{pmatrix} 9 & 12 \\ 4 & -3 \\ 12 & 16 \end{pmatrix}.
   $$
   - (i) $A^T A = \begin{pmatrix} 241 & 288 \\ 288 & 409 \end{pmatrix}$.
   - (ii) For $W$, $\Sigma$, $V$ below, $(W, \Sigma, V)$ is a singular value decomposition of $A$ with $r = 2$, $\sigma_1 = 25$, $\sigma_2 = 5$.
     $$
     \begin{aligned}
     W &= 5^{-1}\begin{pmatrix} 3 & 0 & 4 \\ 0 & 5 & 0 \\ 4 & 0 & -3 \end{pmatrix}, \\
     \Sigma &= \begin{pmatrix} 25 & 0 \\ 0 & 5 \\ 0 & 0 \end{pmatrix}, \\
     V &= 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
     \end{aligned}
     $$
   - (iii) The singular values of $A$ are exactly $25$ and $5$. $\gamma_A = 25$, $\lVert A\mathbf{v}_1 \rVert = 25$ (with $\mathbf{v}_1 = 5^{-1}(3, 4)$), $\lVert A \rVert_F = \sqrt{650}$, and $\gamma_A < \lVert A \rVert_F$.
2. (A matrix of rank $1$) Let
   $$
   A = \begin{pmatrix} 6 & 8 \\ 9 & 12 \\ 18 & 24 \end{pmatrix}.
   $$
   - (i) $\operatorname{rank} A = 1$.
   - (ii) For $W$, $\Sigma$, $V$ below, $(W, \Sigma, V)$ is a singular value decomposition of $A$ with $r = 1$, $\sigma_1 = 35$.
     $$
     \begin{aligned}
     W &= 7^{-1}\begin{pmatrix} 2 & 3 & 6 \\ 3 & -6 & 2 \\ 6 & 2 & -3 \end{pmatrix}, \\
     \Sigma &= \begin{pmatrix} 35 & 0 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}, \\
     V &= 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
     \end{aligned}
     $$
   - (iii) $35$ is the only singular value of $A$, and $\gamma_A = \lVert A \rVert_F = 35$.
3. (A symmetric matrix that is not positive semidefinite) Let
   $$
   A = \begin{pmatrix} 0 & 2 \\ 2 & 3 \end{pmatrix}.
   $$
   - (i) $A$ is symmetric, its eigenvalues are exactly $4$ and $-1$, and it is not positive semidefinite.
   - (ii) The singular values of $A$ are exactly $4$ and $1$, and $\gamma_A = 4$. The singular value $1$ is not an eigenvalue of $A$.
   - (iii) For $V$, $W$, $\Sigma$ below, $(W, \Sigma, V)$ is a singular value decomposition of $A$ with $r = 2$, and $W \ne V$.
     $$
     \begin{aligned}
     V &= (\sqrt{5})^{-1}\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}, \\
     W &= (\sqrt{5})^{-1}\begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}, \\
     \Sigma &= \operatorname{diag}(4, 1)
     \end{aligned}
     $$
4. (Polar decomposition) Let
   $$
   A = \begin{pmatrix} 6 & 8 \\ 4 & -3 \end{pmatrix}
   $$
   and $V = 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$.
   - (i) $(I_2, \operatorname{diag}(10, 5), V)$ is a singular value decomposition of $A$ with $r = 2$, $\sigma_1 = 10$, $\sigma_2 = 5$.
   - (ii) $A^T A = \begin{pmatrix} 52 & 36 \\ 36 & 73 \end{pmatrix}$ and $\sqrt{A^T A} = 5^{-1}\begin{pmatrix} 34 & 12 \\ 12 & 41 \end{pmatrix}$.
   - (iii) $U = V$ is an orthogonal matrix and $A = U\sqrt{A^T A}$. Also $AA^T = \operatorname{diag}(100, 25)$, $\sqrt{AA^T} = \operatorname{diag}(10, 5)$, and $A = \sqrt{AA^T}\, U$.
:::

## 직관

앞 항목들의 정리를 손으로 계산할 수 있는 행렬에 써 봅니다. 수가 깔끔하도록 $3$, $4$, $5$와 $2$, $3$, $6$, $7$처럼 제곱의 합이 다시 제곱이 되는 수로 정규직교 열을 만들었습니다. 특잇값 분해를 확인할 때는 $W\Sigma V^T$를 곱하는 대신 [[singular-value-decomposition|특잇값 분해]]의 (2)의 열 판정, 곧 "$A\mathbf{v}_k = \sigma_k \mathbf{w}_k$이고 나머지 $\mathbf{v}_k$는 $0$으로 간다"를 확인하면 됩니다.

(1)과 (2)는 가장 큰 특잇값과 프로베니우스 노름을 비교합니다. (2)처럼 계수가 $1$이면 둘이 같고, (1)처럼 양수인 특잇값이 둘이면 프로베니우스 노름의 제곱이 두 특잇값의 제곱의 합이라서 더 큽니다. (3)은 대칭행렬에서도 음수 고윳값 $-1$ 대신 그 절댓값 $1$이 특잇값이 되고, 그래서 $V$와 $W$가 한 열에서 부호가 달라진다는 것을 보여 줍니다. (4)는 대칭이 아닌 행렬을 길이를 바꾸지 않는 행렬과 대칭이고 양의 준정부호인 행렬의 곱으로 씁니다.

## 증명

:::idea
분해는 직교행렬임(열이 정규직교)과 특잇값 분해의 (2)의 열 판정을 확인한다. 특잇값은 특잇값의 (2), 가장 큰 특잇값은 그 항목의 (4), 프로베니우스 노름은 성분의 제곱의 합으로 구한다.
:::

:::proof
아래에서 "분해의 (n)", "특잇값의 (n)", "가장 큰 특잇값의 (n)", "극분해의 (n)", "제곱근의 (n)"은 각각 [[singular-value-decomposition|특잇값 분해]], [[singular-values|특잇값]], [[largest-singular-value|가장 큰 특잇값과 행렬의 크기]], [[polar-decomposition|극분해]], [[positive-semidefinite-square-root|양의 준정부호 제곱근]]의 번호이다. 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)의 행 규칙으로, 행렬의 곱의 성분은 [[matrix-product|행렬의 곱]]의 (2)로, $A^T A$의 성분은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)의 "열끼리의 내적"으로 계산한다. 열들이 정규직교 열인 정사각행렬은 [[orthogonal-matrix|직교행렬]]의 (2)의 (라)에 의해 직교행렬이다. 프로베니우스 노름의 제곱은 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (1)에 의해 열마다 $\langle \mathbf{a}_k, \mathbf{a}_k \rangle$를 더한 것이다.

**(1).** (i) $A$의 열은 $\mathbf{a}_1 = (9, 4, 12)$, $\mathbf{a}_2 = (12, -3, 16)$이고 $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = 81 + 16 + 144 = 241$, $\langle \mathbf{a}_1, \mathbf{a}_2 \rangle = 108 - 12 + 192 = 288$, $\langle \mathbf{a}_2, \mathbf{a}_2 \rangle = 144 + 9 + 256 = 409$이다.

(ii) $W$의 열 $\mathbf{w}_1 = 5^{-1}(3, 0, 4)$, $\mathbf{w}_2 = (0, 1, 0)$, $\mathbf{w}_3 = 5^{-1}(4, 0, -3)$은 $\langle \mathbf{w}_1, \mathbf{w}_1 \rangle = 25^{-1}(9 + 16) = 1$, $\langle \mathbf{w}_3, \mathbf{w}_3 \rangle = 1$, $\langle \mathbf{w}_2, \mathbf{w}_2 \rangle = 1$, $\langle \mathbf{w}_1, \mathbf{w}_3 \rangle = 25^{-1}(12 - 12) = 0$, $\langle \mathbf{w}_1, \mathbf{w}_2 \rangle = \langle \mathbf{w}_2, \mathbf{w}_3 \rangle = 0$이므로 정규직교 열이고 $W$는 직교행렬이다. $V$의 열 $\mathbf{v}_1 = 5^{-1}(3, 4)$, $\mathbf{v}_2 = 5^{-1}(4, -3)$도 $25^{-1}(9 + 16) = 1$, $25^{-1}(12 - 12) = 0$이므로 $V$는 직교행렬이다. $\Sigma$는 $r = 2$와 $25$, $5$로 만든 $3 \times 2$ 행렬이다. 행 규칙으로
$$
\begin{aligned}
A\mathbf{v}_1 &= 5^{-1}(27 + 48, 12 - 12, \\
&\qquad 36 + 64) \\
&= (15, 0, 20) = 25\mathbf{w}_1, \\
A\mathbf{v}_2 &= 5^{-1}(36 - 36, 16 + 9, \\
&\qquad 48 - 48) \\
&= (0, 5, 0) = 5\mathbf{w}_2
\end{aligned}
$$
이므로 분해의 (2)에 의해 $(W, \Sigma, V)$는 특잇값 분해이다($r = n = 2$라 둘째 조건에 해당하는 $k$가 없다).

(iii) 특잇값의 (2)에 의해 특잇값은 정확히 $25$와 $5$이다. 가장 큰 특잇값의 (4)에 의해 $\gamma_A$는 가장 큰 특잇값이므로 $\gamma_A = 25$이다. 노름은 $\lVert (15, 0, 20) \rVert = \sqrt{225 + 400} = \sqrt{625} = 25$이다. $\lVert A \rVert_F^2 = 241 + 409 = 650$이고, $625 < 650$이므로 [[square-root-exists|제곱근의 존재]]의 (2)에 의해 $25 = \sqrt{625} < \sqrt{650}$이다.

**(2).** (i) $A$의 둘째 열 $(8, 12, 24)$는 첫째 열 $(6, 9, 18)$의 $3^{-1} \cdot 4$배이고 첫째 열은 영벡터가 아니므로, 열공간은 $\operatorname{span}((6, 9, 18))$이고 그 차원은 $1$이다. 곧 $\operatorname{rank} A = 1$이다.

(ii) $W$의 열 $7^{-1}(2, 3, 6)$, $7^{-1}(3, -6, 2)$, $7^{-1}(6, 2, -3)$은 노름의 제곱이 각각 $49^{-1}(4 + 9 + 36)$, $49^{-1}(9 + 36 + 4)$, $49^{-1}(36 + 4 + 9)$로 모두 $1$이고, 서로의 내적이 $49^{-1}(6 - 18 + 12)$, $49^{-1}(12 + 6 - 18)$, $49^{-1}(18 - 12 - 6)$으로 모두 $0$이므로 $W$는 직교행렬이다. $V$는 (1)의 $V$이다. 행 규칙으로 $A\mathbf{v}_1 = 5^{-1}(18 + 32, 27 + 48, 54 + 96) = (10, 15, 30) = 35 \cdot 7^{-1}(2, 3, 6)$이고 $A\mathbf{v}_2 = 5^{-1}(24 - 24, 36 - 36, 72 - 72) = 0$이므로, 분해의 (2)에 의해 $(W, \Sigma, V)$는 $r = 1$, $\sigma_1 = 35$인 특잇값 분해이다.

(iii) 특잇값의 (2)에 의해 특잇값은 $35$ 하나뿐이고, 가장 큰 특잇값의 (4)에 의해 $\gamma_A = 35$이다. $\lVert A \rVert_F^2 = (36 + 81 + 324) + (64 + 144 + 576) = 441 + 784 = 1225 = 35 \cdot 35$이므로 $\lVert A \rVert_F = 35$이다(제곱근의 존재의 (2)의 $\sqrt{aa} = a$).

**(3).** (i) $A^T = A$는 성분에서 바로 보인다. $p = (1, 2)$, $q = (2, -1)$이면 $Ap = (4, 8) = 4p$, $Aq = (-2, 1) = -q$이다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (2)에 의해 $2 \times 2$ 행렬의 서로 다른 고윳값은 둘 이하이므로 고윳값은 정확히 $4$와 $-1$이다. $-1 < 0$이므로 [[positive-definite-matrix|양의 정부호 행렬]]의 (3)의 (ii)에 의해 $A$는 양의 준정부호가 아니다.

(ii) 특잇값의 (6)의 (ii)에 의해 특잇값은 정확히 $|4| = 4$와 $|-1| = 1$이고, 가장 큰 특잇값의 (4)에 의해 $\gamma_A = 4$이다. 고윳값은 $4$와 $-1$뿐이므로 $1$은 고윳값이 아니다.

(iii) $V$의 열 $\mathbf{v}_1 = (\sqrt{5})^{-1}p$, $\mathbf{v}_2 = (\sqrt{5})^{-1}q$와 $W$의 열 $\mathbf{w}_1 = \mathbf{v}_1$, $\mathbf{w}_2 = -\mathbf{v}_2$는 $\langle p, p \rangle = \langle q, q \rangle = 5$, $\langle p, q \rangle = 2 - 2 = 0$이므로 정규직교 열이고, $V$와 $W$는 직교행렬이다. $A\mathbf{v}_1 = (\sqrt{5})^{-1}(4p) = 4\mathbf{w}_1$, $A\mathbf{v}_2 = (\sqrt{5})^{-1}(-q) = 1 \cdot \mathbf{w}_2$이므로 분해의 (2)에 의해 $(W, \Sigma, V)$는 $r = 2$, $\sigma_1 = 4$, $\sigma_2 = 1$인 특잇값 분해이다. $W$와 $V$는 둘째 열이 다르다($\mathbf{v}_2 \ne 0$이므로 $-\mathbf{v}_2 \ne \mathbf{v}_2$).

**(4).** (i) $V$는 (1)의 $V$이고 $I_2$는 직교행렬의 (7)에 의해 직교행렬이며, $\operatorname{diag}(10, 5)$는 $r = 2$와 $10$, $5$로 만든 $2 \times 2$ 행렬이다. $A\mathbf{v}_1 = 5^{-1}(18 + 32, 12 - 12) = (10, 0) = 10e_1$, $A\mathbf{v}_2 = 5^{-1}(24 - 24, 16 + 9) = (0, 5) = 5e_2$이고 $I_2$의 열은 $e_1$, $e_2$이므로 분해의 (2)에 의해 특잇값 분해이다.

(ii) 열 $(6, 4)$, $(8, -3)$에서 $36 + 16 = 52$, $48 - 12 = 36$, $64 + 9 = 73$이다. 극분해의 (1)에 의해 $\sqrt{A^T A} = V\operatorname{diag}(10, 5)V^T$이고, $V^T = V$이므로
$$
\begin{aligned}
\sqrt{A^T A} &= 25^{-1}\begin{pmatrix} 30 & 20 \\ 40 & -15 \end{pmatrix} \\
&\qquad \cdot \begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix} \\
&= 25^{-1}\begin{pmatrix} 170 & 60 \\ 60 & 205 \end{pmatrix} \\
&= 5^{-1}\begin{pmatrix} 34 & 12 \\ 12 & 41 \end{pmatrix}
\end{aligned}
$$
이다. 곱해 보면 $\sqrt{A^T A}\sqrt{A^T A} = 25^{-1}\begin{pmatrix} 1156 + 144 & 408 + 492 \\ 408 + 492 & 144 + 1681 \end{pmatrix} = 25^{-1}\begin{pmatrix} 1300 & 900 \\ 900 & 1825 \end{pmatrix}$로 $A^T A$와 같다.

(iii) 극분해의 (1)에 의해 $U = I_2 V^T = V$는 직교행렬이고 $A = U\sqrt{A^T A}$이다. 직접 곱하면 $U\sqrt{A^T A} = 25^{-1}\begin{pmatrix} 102 + 48 & 36 + 164 \\ 136 - 36 & 48 - 123 \end{pmatrix} = 25^{-1}\begin{pmatrix} 150 & 200 \\ 100 & -75 \end{pmatrix}$로 $A$이다. $A$의 행 $(6, 8)$, $(4, -3)$의 내적으로 $AA^T$의 성분은 $100$, $24 - 24 = 0$, $25$이고, 극분해의 (4)에 의해 $\sqrt{AA^T} = I_2 \operatorname{diag}(10, 5) I_2^T = \operatorname{diag}(10, 5)$이며 $A = \sqrt{AA^T}\, U$이다. 직접 보면 $\operatorname{diag}(10, 5)V$의 행은 $2(3, 4) = (6, 8)$과 $(4, -3)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[(1)의 분해를 크기순이 아니게 쓰기]
(1)의 $A$에서 $\mathbf{v}_1$과 $\mathbf{v}_2$, $\mathbf{w}_1$과 $\mathbf{w}_2$의 자리를 바꾸면, $V' = 5^{-1}\begin{pmatrix} 4 & 3 \\ -3 & 4 \end{pmatrix}$, $W'$의 열 $(0, 1, 0)$, $5^{-1}(3, 0, 4)$, $5^{-1}(4, 0, -3)$, $\Sigma' = \begin{pmatrix} 5 & 0 \\ 0 & 25 \\ 0 & 0 \end{pmatrix}$로 $r = 2$, $\sigma_1 = 5$, $\sigma_2 = 25$인 다른 특잇값 분해가 됩니다. 열 판정의 두 등식은 (1)의 증명의 것과 같습니다. 특잇값 $25$와 $5$는 바뀌지 않습니다.
:::

:::counterexample[W 와 V 를 같게 잡을 수 없는 대칭행렬의 예]
(3)의 $A$에서 $W = V$로 두면 $A\mathbf{v}_2 = -\mathbf{v}_2$이므로 둘째 조건 $A\mathbf{v}_2 = \sigma_2 \mathbf{v}_2$를 만족하는 양수 $\sigma_2$가 없습니다($-\mathbf{v}_2 = \sigma_2 \mathbf{v}_2$이면 $(\sigma_2 + 1)\mathbf{v}_2 = 0$이고 $\sigma_2 + 1 > 0$이라 $\mathbf{v}_2 = 0$이 됩니다). 그래서 음수 고윳값이 있는 대칭행렬은 직교 대각화 $A = QDQ^T$를 그대로 특잇값 분해로 쓸 수 없고, 한 열의 부호를 바꾼 $W$가 필요합니다.
:::

## 확인 질문

:::check[(2)의 $A$에서 $\lVert Ax \rVert \le 35\lVert x \rVert$의 등호가 되는 단위벡터는 무엇인가?]
$\mathbf{v}_1 = 5^{-1}(3, 4)$와 $-\mathbf{v}_1$입니다. (2)의 증명에서 $A\mathbf{v}_1 = (10, 15, 30)$이고 그 노름은 $\sqrt{100 + 225 + 900} = \sqrt{1225} = 35$입니다. 단위벡터 $x$는 $x = c_1\mathbf{v}_1 + c_2\mathbf{v}_2$, $c_1^2 + c_2^2 = 1$로 쓸 수 있고 $Ax = c_1 A\mathbf{v}_1$이므로 $\lVert Ax \rVert = 35|c_1|$이며, 이것이 $35$인 것은 정확히 $c_2 = 0$, $c_1 = \pm 1$일 때입니다.
:::

:::check[(4)의 $A$의 가장 큰 특잇값과 $\lVert A \rVert_F$는 얼마인가?]
특잇값은 (4)의 (i)과 특잇값의 (2)에 의해 $10$과 $5$이므로 $\gamma_A = 10$이고, $\lVert A \rVert_F = \sqrt{36 + 64 + 16 + 9} = \sqrt{125}$입니다. 특잇값의 (5)대로 $10^2 + 5^2 = 125$입니다.
:::
