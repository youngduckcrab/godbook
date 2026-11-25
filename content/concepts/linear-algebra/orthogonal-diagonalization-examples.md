---
title: 직교 대각화의 예
title_en: Examples of Orthogonal Diagonalization
aliases: [대칭행렬의 직교 대각화 계산, orthogonal diagonalization examples]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 서로 다른 세 고윳값을 갖는 3 × 3 대칭행렬을 직교행렬로 대각화하고, 겹친 고윳값의 고유공간에서 처음 얻은 기저가 직교하지 않아 그람–슈미트로 고쳐야 하는 3 × 3 대칭행렬을 대각화해 그 스펙트럼 분해를 적는다. 대각화 가능하지만 대칭이 아닌 2 × 2 행렬은 직교 대각화되지 않는다.
requires: [real-number-arithmetic, vector-space, finite-sum-of-vectors, standard-basis, linear-combination-and-span, linear-independence, dimension, matrix, transpose, matrix-vector-product, matrix-of-a-linear-map, eigenvalue-and-eigenvector, eigenvalues-of-triangular-matrix, change-of-basis-and-similarity, diagonalizable, diagonalizable-iff-split-and-multiplicities, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthonormal-basis, orthogonal-projection, properties-of-orthogonal-projection, self-adjoint-map, orthogonal-matrix, change-of-orthonormal-basis, spectral-theorem, consequences-of-spectral-theorem]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 6절 연습문제 6.1, 6.2, p.150; 6장 2절 연습문제 2.4, 2.6, pp.169–170; 7장 2절 2.1 Orthogonal diagonalization 의 Example, p.201; 7장 2절 연습문제 2.2, p.206; 5장 3절 연습문제 3.9, 3.13, pp.134–135; 6장 4절 연습문제 4.3, p.187
    checked: original
    note: "출처는 직교 대각화를 연습문제로 여러 번 시킨다(5장 연습문제 6.1 의 세 행렬, 6장 연습문제 2.4·2.6 의 2 × 2 대칭행렬, 7장 2.1 Example 의 (2 1; 1 2)). (1)은 그 물음과 같은 계열의 계산이고 행렬은 출처의 것과 다르다. (2)는 출처 7장 연습문제 2.2(p.206)의 (2 1 1; 1 2 1; 1 1 2) 와 같은 발상이다: 단위행렬의 배에 계수가 1 인 대칭행렬을 더해 한 고윳값이 겹친다. (3)에서 한 벡터의 생성으로의 직교사영의 행렬을 구하고 '직교사영들의 합은 단위행렬'로 나머지를 얻는 것은 출처 5장 연습문제 3.9(p.134)가 모든 성분이 1 인 행렬의 고윳값을 (1, …, 1) 의 생성으로의 직교사영으로 구하게 하는 것, 6장 연습문제 4.3(p.187)의 힌트(같은 벡터로의 직교사영, aT + bI 의 고윳값), 5장 연습문제 3.13 의 a)(p.135)의 P + Q 와 같은 발상이다. (4)의 '대각화 가능하지만 직교 대각화 가능하지 않은 행렬'은 출처 5장 연습문제 6.2(p.150)가 '유니터리 동치로 대각행렬과 같은 것은 정확히 직교하는 고유벡터의 기저가 있을 때인가'를 참·거짓으로 묻는 것과 같은 물음을 한 행렬에서 본 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(귀납의 구조 통독, 예의 고유벡터·그람–슈미트 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주고, 대칭행렬, 직교행렬, 직교 대각화 가능은 [[self-adjoint-map|자기수반사상과 대칭행렬]], [[orthogonal-matrix|직교행렬]], [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 것, $\operatorname{diag}$와 대각화 가능은 [[diagonalizable|대각화 가능]]의 것, 고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것이다. $\sqrt{5}$는 제곱근이다.

1. (서로 다른 세 고윳값)
   $$
   \begin{aligned}
   A_1 &= \begin{pmatrix} 1 & 6 & -6 \\ 6 & -2 & 0 \\ -6 & 0 & 4 \end{pmatrix}, \\
   Q_1 &= \frac{1}{3}\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}
   \end{aligned}
   $$
   이라 하자. $A_1$은 대칭이고, $Q_1$의 세 열 $\mathbf{q}_1 = 3^{-1}(1, 2, 2)$, $\mathbf{q}_2 = 3^{-1}(2, 1, -2)$, $\mathbf{q}_3 = 3^{-1}(2, -2, 1)$은 $\mathbb{R}^3$의 정규직교 기저이며 $A_1\mathbf{q}_1 = \mathbf{q}_1$, $A_1\mathbf{q}_2 = 10\,\mathbf{q}_2$, $A_1\mathbf{q}_3 = -8\,\mathbf{q}_3$이다. 따라서 $Q_1$은 직교행렬이고 $A_1 = Q_1 \operatorname{diag}(1, 10, -8) Q_1^T$이며, $A_1$의 고윳값은 정확히 $1$, $10$, $-8$이다.
2. (겹친 고윳값)
   $$
   A_2 = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 6 & 4 \\ 2 & 4 & 6 \end{pmatrix}
   $$
   이라 하자. $A_2$는 대칭이고 $v = (1, 2, 2)$에서 $A_2 v = 11 v$이다. 고유공간 $\operatorname{Ker}(A_2 - 2I_3)$는 $x_1 + 2x_2 + 2x_3 = 0$인 $x$ 전체이고, $\operatorname{span}(w_1, y) = \operatorname{span}(w_1, w_2)$이다. 여기서 $w_1 = (-2, 1, 0)$, $y = (-2, 0, 1)$, $w_2 = (-2, -4, 5)$이고, $\langle w_1, y \rangle = 4$, $\langle w_1, w_2 \rangle = 0$이며 $w_2 = 5\bigl(y - 4 \cdot 5^{-1} w_1\bigr)$이다. 열이
   $$
   \begin{aligned}
   \mathbf{p}_1 &= 3^{-1}(1, 2, 2), \\
   \mathbf{p}_2 &= (\sqrt{5})^{-1}(-2, 1, 0), \\
   \mathbf{p}_3 &= (3\sqrt{5})^{-1}(-2, -4, 5)
   \end{aligned}
   $$
   인 $3 \times 3$ 행렬 $Q_2$는 직교행렬이고 $A_2 = Q_2 \operatorname{diag}(11, 2, 2) Q_2^T$이다. $A_2$의 고윳값은 정확히 $11$과 $2$이고, 기하적 중복도는 각각 $1$과 $2$이다.
3. (겹친 고윳값의 스펙트럼 분해) (2)의 $A_2$에서 $E_1 = \operatorname{Ker}(A_2 - 11 I_3) = \operatorname{span}(v)$, $E_2 = \operatorname{Ker}(A_2 - 2I_3)$이고 $P_j = \operatorname{proj}_{E_j}$이면
   $$
   \begin{aligned}
   [P_1] &= \frac{1}{9}\begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}, \\
   [P_2] &= \frac{1}{9}\begin{pmatrix} 8 & -2 & -2 \\ -2 & 5 & -4 \\ -2 & -4 & 5 \end{pmatrix}
   \end{aligned}
   $$
   이고 $[P_1] + [P_2] = I_3$, $11[P_1] + 2[P_2] = A_2$이다.
4. (대칭이 아닌 행렬)
   $$
   B = \begin{pmatrix} 2 & 3 \\ 0 & -1 \end{pmatrix}
   $$
   은 대각화 가능하고 고윳값은 정확히 $2$와 $-1$이며, 고유공간은 $\operatorname{span}((1, 0))$과 $\operatorname{span}((1, -1))$이다. $B$는 대칭이 아니고, 모든 항이 $B$의 고유벡터인 $\mathbb{R}^2$의 정규직교 기저는 없다. 곧 $B$는 직교 대각화 가능하지 않다.
:::

:::english
Give $\mathbb{R}^n$ the standard inner product. Symmetric matrices, orthogonal matrices and orthogonal diagonalizability are those of the entries on self-adjoint maps and symmetric matrices, on orthogonal matrices and on change of orthonormal basis and orthogonal similarity; $\operatorname{diag}$ and diagonalizability are those of the entry on diagonalizability; eigenvalues and eigenspaces are those of the entry on eigenvalues and eigenvectors; $\operatorname{proj}_E$ is the orthogonal projection. $\sqrt{5}$ is the square root.

1. (Three distinct eigenvalues) Let
   $$
   \begin{aligned}
   A_1 &= \begin{pmatrix} 1 & 6 & -6 \\ 6 & -2 & 0 \\ -6 & 0 & 4 \end{pmatrix}, \\
   Q_1 &= \frac{1}{3}\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}
   \end{aligned}
   $$
   . $A_1$ is symmetric, the three columns $\mathbf{q}_1 = 3^{-1}(1, 2, 2)$, $\mathbf{q}_2 = 3^{-1}(2, 1, -2)$, $\mathbf{q}_3 = 3^{-1}(2, -2, 1)$ of $Q_1$ form an orthonormal basis of $\mathbb{R}^3$, and $A_1\mathbf{q}_1 = \mathbf{q}_1$, $A_1\mathbf{q}_2 = 10\,\mathbf{q}_2$, $A_1\mathbf{q}_3 = -8\,\mathbf{q}_3$. Hence $Q_1$ is orthogonal, $A_1 = Q_1 \operatorname{diag}(1, 10, -8) Q_1^T$, and the eigenvalues of $A_1$ are exactly $1$, $10$, $-8$.
2. (A repeated eigenvalue) Let
   $$
   A_2 = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 6 & 4 \\ 2 & 4 & 6 \end{pmatrix} .
   $$
   $A_2$ is symmetric and $A_2 v = 11 v$ for $v = (1, 2, 2)$. The eigenspace $\operatorname{Ker}(A_2 - 2I_3)$ consists of all $x$ with $x_1 + 2x_2 + 2x_3 = 0$, and equals $\operatorname{span}(w_1, y) = \operatorname{span}(w_1, w_2)$, where $w_1 = (-2, 1, 0)$, $y = (-2, 0, 1)$, $w_2 = (-2, -4, 5)$; moreover $\langle w_1, y \rangle = 4$, $\langle w_1, w_2 \rangle = 0$ and $w_2 = 5\bigl(y - 4 \cdot 5^{-1} w_1\bigr)$. The $3 \times 3$ matrix $Q_2$ with columns
   $$
   \begin{aligned}
   \mathbf{p}_1 &= 3^{-1}(1, 2, 2), \\
   \mathbf{p}_2 &= (\sqrt{5})^{-1}(-2, 1, 0), \\
   \mathbf{p}_3 &= (3\sqrt{5})^{-1}(-2, -4, 5)
   \end{aligned}
   $$
   is orthogonal and $A_2 = Q_2 \operatorname{diag}(11, 2, 2) Q_2^T$. The eigenvalues of $A_2$ are exactly $11$ and $2$, with geometric multiplicities $1$ and $2$.
3. (Spectral decomposition with a repeated eigenvalue) For $A_2$ of (2), with $E_1 = \operatorname{Ker}(A_2 - 11 I_3) = \operatorname{span}(v)$, $E_2 = \operatorname{Ker}(A_2 - 2I_3)$ and $P_j = \operatorname{proj}_{E_j}$,
   $$
   \begin{aligned}
   [P_1] &= \frac{1}{9}\begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}, \\
   [P_2] &= \frac{1}{9}\begin{pmatrix} 8 & -2 & -2 \\ -2 & 5 & -4 \\ -2 & -4 & 5 \end{pmatrix}
   \end{aligned} ,
   $$
   and $[P_1] + [P_2] = I_3$, $11[P_1] + 2[P_2] = A_2$.
4. (A non-symmetric matrix) The matrix
   $$
   B = \begin{pmatrix} 2 & 3 \\ 0 & -1 \end{pmatrix}
   $$
   is diagonalizable, its eigenvalues are exactly $2$ and $-1$, and its eigenspaces are $\operatorname{span}((1, 0))$ and $\operatorname{span}((1, -1))$. $B$ is not symmetric, and there is no orthonormal basis of $\mathbb{R}^2$ all of whose terms are eigenvectors of $B$; that is, $B$ is not orthogonally diagonalizable.
:::

## 직관

직교 대각화의 계산은 보통 대각화와 같은 순서로 합니다. 고윳값을 찾고, 고윳값마다 고유공간의 기저를 구하고, 그것을 열로 늘어놓습니다. 달라지는 것은 마지막에 열들이 정규직교여야 한다는 것뿐입니다. [[consequences-of-spectral-theorem|스펙트럼 정리의 따름]]의 (2)의 (i)에 의해 서로 다른 고윳값의 고유벡터는 저절로 직교하므로, 고윳값이 모두 다르면 각 고유벡터를 정규화하기만 하면 됩니다((1)).

한 고윳값의 고유공간이 2차원 이상이면, 연립방정식을 풀어 처음 얻는 기저가 서로 직교한다는 보장이 없습니다. (2)에서 자유변수 두 개로 얻은 $w_1$과 $y$의 내적은 $4$입니다. 이때는 그 고유공간 안에서 [[gram-schmidt-process|그람–슈미트 과정]]처럼 $y$에서 $w_1$ 방향의 성분을 빼서 직교하는 기저로 고칩니다. 고친 벡터도 같은 고유공간에 있으므로 여전히 고유벡터입니다.

대칭이 아닌 행렬은 대각화 가능하더라도 고유벡터들이 서로 기울어 있을 수 있습니다((4)). 이 경우에는 고유벡터를 어떻게 골라도 수직이 되지 않습니다.

## 증명

:::idea
고유벡터의 등식과 열들의 내적을 성분으로 계산하고, 정규직교 기저의 변환 항목의 (4)의 (ii)로 직교 대각화를 얻는다. 고윳값이 정확히 무엇인지는 닮은 대각행렬에서 읽는다. (4)는 두 고유공간의 원소가 직교하지 않는다는 것을 직접 본다.
:::

:::proof
아래에서 정규직교 기저의 변환의 성질은 [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로 인용한다. 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)으로 성분마다 계산한다. 정규직교 열의 판정은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 정의(모든 $i$, $j$에서 $\langle v_i, v_j \rangle$가 $i = j$일 때 $1$, $i \ne j$일 때 $0$)로 한다.

**고윳값을 읽는 방법.** $Q$가 직교행렬이고 $A = QDQ^T$, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이면 정규직교 기저의 변환의 (3)에 의해 $A$와 $D$는 닮았고, [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)에 의해 두 행렬의 고윳값은 같으며, [[diagonalizable|대각화 가능]]의 (4)에 의해 $D$의 고윳값은 정확히 $\lambda_1, \dots, \lambda_n$ 가운데 하나와 같은 실수이다. 이것을 (가)라 부른다.

**(1).** $A_1^T = A_1$은 성분을 비교하면 된다($6 = 6$, $-6 = -6$, $0 = 0$). 내적: $\langle (1,2,2), (1,2,2) \rangle = \langle (2,1,-2), (2,1,-2) \rangle = \langle (2,-2,1), (2,-2,1) \rangle = 9$이고, $\langle (1,2,2), (2,1,-2) \rangle = 2 + 2 - 4 = 0$, $\langle (1,2,2), (2,-2,1) \rangle = 2 - 4 + 2 = 0$, $\langle (2,1,-2), (2,-2,1) \rangle = 4 - 2 - 2 = 0$이다. 내적의 성질([[inner-product-space|내적과 내적공간]]의 (1))에 의해 $\langle 3^{-1}a, 3^{-1}b \rangle = 9^{-1}\langle a, b \rangle$이므로 $\mathbf{q}_1, \mathbf{q}_2, \mathbf{q}_3$은 정규직교 열이다. 길이가 $3 = \dim \mathbb{R}^3$([[dimension|유한차원과 차원]]의 (4))이므로 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 정규직교 기저이다. 행 규칙으로 $A_1(1, 2, 2) = (1 + 12 - 12,\ 6 - 4,\ -6 + 8) = (1, 2, 2)$이고, $A_1(2, 1, -2) = (2 + 6 + 12,\ 12 - 2,\ -12 - 8) = (20, 10, -20) = 10\,(2, 1, -2)$이며, $A_1(2, -2, 1) = (2 - 12 - 6,\ 12 + 4,\ -12 + 4) = (-16, 16, -8) = -8\,(2, -2, 1)$이고, 행렬과 벡터의 곱의 (2)에 의해 양변에 $3^{-1}$을 곱하면 세 고유벡터의 등식이 나온다. 정규직교 기저의 변환의 (4)의 (ii)에 의해 $Q_1$은 직교행렬이고 $A_1 = Q_1 \operatorname{diag}(1, 10, -8) Q_1^T$이다. (가)에 의해 $A_1$의 고윳값은 정확히 $1$, $10$, $-8$이다.

**(2).** 대칭은 성분 비교로 보인다. $A_2 v = (3 + 4 + 4,\ 2 + 12 + 8,\ 2 + 8 + 12) = (11, 22, 22) = 11v$이다. $A_2 - 2I_3$의 세 행은 $(1, 2, 2)$, $(2, 4, 4)$, $(2, 4, 4)$이므로 $s = x_1 + 2x_2 + 2x_3$으로 두면 $(A_2 - 2I_3)x = (s, 2s, 2s)$이고, 이것이 영벡터인 것은 정확히 $s = 0$일 때이다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)과 (4)의 $T_{A_2} - 2i = T_{A_2 - 2I_3}$에 의해 이것이 고유공간 $\operatorname{Ker}(A_2 - 2I_3)$이다. $s = 0$이면 $x_1 = -2x_2 - 2x_3$이므로 $x = x_2 w_1 + x_3 y$이고, 거꾸로 $w_1$과 $y$는 $s = 0$을 만족하므로 고유공간은 $\operatorname{span}(w_1, y)$이다([[linear-combination-and-span|생성]]). $\langle w_1, y \rangle = 4 + 0 + 0 = 4$, $\langle w_1, w_1 \rangle = 5$이고 $5(y - 4 \cdot 5^{-1} w_1) = 5y - 4w_1 = (-10 + 8,\ -4,\ 5) = (-2, -4, 5) = w_2$이다. $w_2 = 5y - 4w_1$이고 $y = 5^{-1}(w_2 + 4w_1)$이므로 두 생성은 같다. $\langle w_1, w_2 \rangle = 4 - 4 + 0 = 0$이다.

내적은 $\langle v, v \rangle = 9$, $\langle w_1, w_1 \rangle = 5$, $\langle w_2, w_2 \rangle = 4 + 16 + 25 = 45 = (3\sqrt{5})^2$, $\langle v, w_1 \rangle = -2 + 2 + 0 = 0$, $\langle v, w_2 \rangle = -2 - 8 + 10 = 0$이므로, (1)에서와 같이 $\mathbf{p}_1, \mathbf{p}_2, \mathbf{p}_3$은 $\mathbb{R}^3$의 정규직교 기저이다. $\mathbf{p}_1$은 $11$에, $\mathbf{p}_2$와 $\mathbf{p}_3$은 고유공간 $\operatorname{Ker}(A_2 - 2I_3)$의 영벡터가 아닌 원소로서 $2$에 속하는 고유벡터이다(고윳값과 고유벡터의 (1), 행렬과 벡터의 곱의 (2)). 정규직교 기저의 변환의 (4)의 (ii)에 의해 $Q_2$는 직교행렬이고 $A_2 = Q_2 \operatorname{diag}(11, 2, 2) Q_2^T$이며, (가)에 의해 고윳값은 정확히 $11$과 $2$이다. 기하적 중복도: $A_2 - 11I_3$의 세 행은 $(-8, 2, 2)$, $(2, -5, 4)$, $(2, 4, -5)$이다. $(A_2 - 11I_3)x = 0$이면 둘째 값에서 셋째 값을 빼 $-9x_2 + 9x_3 = 0$, 곧 $x_3 = x_2$이고, 첫째 값에서 $-8x_1 + 4x_2 = 0$, 곧 $x_2 = 2x_1$이므로 $x = x_1 v$이다. 거꾸로 $A_2 v = 11v$이므로 $E_1 = \operatorname{Ker}(A_2 - 11I_3) = \operatorname{span}(v)$이고, $v \ne 0$이므로 길이 $1$인 열 $v$는 일차독립이어서([[linear-independence|일차독립]]) 이 고유공간의 기저이며 차원은 $1$이다. $2$의 고유공간은 $w_1$, $w_2$의 생성이고 $w_1, w_2$는 영벡터가 아닌 항으로 된 직교하는 열이므로 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (2)에 의해 일차독립이어서 기저이고 차원은 $2$이다.

**(3).** (2)의 증명에서 $E_1 = \operatorname{span}(v)$이고, [[norm-in-inner-product-space|노름]]의 (3)과 생성의 정의에 의해 이것은 $\operatorname{span}(\mathbf{p}_1)$과 같으며 $\mathbf{p}_1$은 단위벡터이다. [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 (4)의 (iii)을 $r = 1$, $u_1 = \mathbf{p}_1$에 쓰면 $[P_1] = UU^T$이고 $U$는 열이 $\mathbf{p}_1$ 하나인 $3 \times 1$ 행렬이므로, $[P_1]$의 $(j, k)$ 성분은 $\mathbf{p}_1$의 $j$번째 값과 $k$번째 값의 곱, 곧 $9^{-1} v_j v_k$이다. 이것이 적힌 행렬이다. $11$, $2$는 $A_2$의 고윳값을 빠짐없이 늘어놓은 열이므로 스펙트럼 정리의 따름의 (4)에 의해 $[P_1] + [P_2] = I_3$이고 $11[P_1] + 2[P_2] = A_2$이다. 따라서 $[P_2] = I_3 - [P_1]$이고, 성분을 계산하면 적힌 행렬이다($1 - 9^{-1} = 9^{-1} \cdot 8$, $1 - 9^{-1} \cdot 4 = 9^{-1} \cdot 5$). 검산으로 $11 \cdot 9^{-1} \cdot 1 + 2 \cdot 9^{-1} \cdot 8 = 27 \cdot 9^{-1} = 3$, $11 \cdot 9^{-1} \cdot 2 + 2 \cdot 9^{-1} \cdot (-2) = 2$, $11 \cdot 9^{-1} \cdot 4 + 2 \cdot 9^{-1} \cdot (-4) = 4$, $11 \cdot 9^{-1} \cdot 4 + 2 \cdot 9^{-1} \cdot 5 = 6$이 $A_2$의 성분과 맞는다.

**(4).** $B$는 위삼각행렬이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 고윳값은 정확히 대각성분 $2$와 $-1$이다. 서로 다른 고윳값이 $2$개이므로 [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정: 인수분해와 중복도]]의 (3)에 의해 $B$는 대각화 가능하다. $Bx = (2x_1 + 3x_2,\ -x_2)$이다. $Bx = 2x$인 것은 정확히 $3x_2 = 0$이고 $-x_2 = 2x_2$일 때, 곧 $x_2 = 0$일 때이므로 고유공간은 $\operatorname{span}((1, 0))$이다. $Bx = -x$인 것은 정확히 $3x_1 + 3x_2 = 0$일 때, 곧 $x_2 = -x_1$일 때이므로 고유공간은 $\operatorname{span}((1, -1))$이다. $B$의 $(1, 2)$ 성분 $3$과 $(2, 1)$ 성분 $0$이 다르므로 $B$는 대칭이 아니다.

모든 항이 $B$의 고유벡터인 $\mathbb{R}^2$의 정규직교 기저 $u_1, u_2$가 있다고 하자. 정규직교 열은 일차독립이다(직교하는 열과 정규직교 열의 (2)). 두 항이 모두 $2$의 고유공간에 있으면 $u_1 = (a, 0)$, $u_2 = (b, 0)$이고 $b u_1 - a u_2 = 0$인데 $a \ne 0$이므로 일차종속이 되어 모순이다. 두 항이 모두 $-1$의 고유공간에 있을 때도 같다. 따라서 한 항은 $(a, 0)$, 다른 항은 $(b, -b)$ 꼴이고 둘 다 영벡터가 아니므로 $a \ne 0$, $b \ne 0$이며, 그 내적 $ab$는 $0$이 아니어서 정규직교라는 데 모순이다. 따라서 그런 기저는 없고, 정규직교 기저의 변환의 (4)의 마지막 단락에 의해 $B$는 직교 대각화 가능하지 않다. 이것은 [[spectral-theorem|실스펙트럼 정리]]의 (3)에서 (나)이면 (가)인 것과도 맞는다. $\blacksquare$
:::

## 확인 질문

:::check[(1)의 $A_1$에 대하여 $\operatorname{tr} A_1$과 고윳값의 합은 같은가?]
$\operatorname{tr} A_1 = 1 + (-2) + 4 = 3$이고 고윳값의 합은 $1 + 10 + (-8) = 3$이어서 같습니다. 고윳값이 모두 다르므로 기하적 중복도는 모두 $1$이고, 스펙트럼 정리의 따름의 (2)의 (iii)이 말하는 등식입니다.
:::

:::check[(2)의 $A_2$에서 $2$의 고유공간의 다른 정규직교 기저로 $3^{-1}(2, 1, -2)$와 $3^{-1}(2, -2, 1)$을 써도 되는가?]
됩니다. 두 벡터 모두 $x_1 + 2x_2 + 2x_3 = 0$을 만족하므로($2 + 2 - 4 = 0$, $2 - 4 + 2 = 0$) $2$의 고유공간에 있고, (1)의 계산처럼 정규직교 열입니다. 고유공간의 차원이 $2$이므로 이 둘은 그 고유공간의 정규직교 기저이고, $\mathbf{p}_1$과 함께 고유벡터로 된 $\mathbb{R}^3$의 정규직교 기저가 됩니다. 실제로 이것은 (1)의 $Q_1$의 열과 같아서, $A_2 = Q_1 \operatorname{diag}(11, 2, 2) Q_1^T$로도 쓸 수 있습니다. 고윳값이 겹치면 $Q$는 하나로 정해지지 않습니다.
:::
