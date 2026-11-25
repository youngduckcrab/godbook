---
title: AᵀA 의 핵과 가역성
title_en: Kernel and Invertibility of AᵀA
aliases: [그람 행렬, AᵀA, 전치행렬과의 곱, Gram matrix, kernel of A transpose A]
kind: theorem
field: linear-algebra
msc: ["15A03", "15A09"]
level: undergrad
summary: m × n 행렬 A 에 대해 AᵀA 는 전치해도 그대로인 n × n 행렬이고 ⟨AᵀAx, x⟩ = ‖Ax‖² ≥ 0 이다. 이로부터 AᵀA 의 핵은 A 의 핵과 같고, AᵀA, A, AAᵀ 의 계수는 모두 같으며, AᵀA 가 가역인 것은 정확히 A 의 열이 일차독립일 때이고 그때 (AᵀA)⁻¹Aᵀ 가 A 의 왼쪽 역이다. 또 A 의 열공간의 직교 여공간은 Aᵀ 의 핵이다.
requires: [well-ordering-principle, real-number-arithmetic, real-function-space, linear-map, kernel-and-range, rank-and-nullity, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, rank-of-a-matrix, row-rank-equals-column-rank, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-complement]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 4절 Least square solution. Formula for the orthogonal projection 의 4.2 Formula for the orthogonal projection, Theorem 4.1 과 그 앞뒤 문단, p.138; 5절 Adjoint of a linear transformation. Fundamental subspaces revisited 의 연습문제 5.3, 5.4, pp.145–146; 6장 2절 Spectral theorem for self-adjoint and normal operators 의 연습문제 2.8, p.170; 6장 3절 Polar and singular value decompositions 의 3.2 Modulus of an operator. Singular values 의 첫 문단, p.172; 5장 2절 연습문제 2.2, 2.5, pp.128–129; 5장 5절 5.2 Relation between fundamental subspaces 의 Theorem 5.1, p.143
    checked: original
    note: "(2)는 출처 Theorem 4.1(p.138) 'For an m × n matrix A, Ker A = Ker(A*A)' 이다. 출처는 증명을 연습문제로 남기고(같은 내용이 5절 연습문제 5.3, p.145), 한쪽 포함은 자명하며 다른 쪽에는 ‖Ax‖² = (Ax, Ax) = (A*Ax, x) 를 쓰라는 힌트를 준다. 이 항목의 증명은 그 힌트의 길이고, 그 등식을 (1)에 두었다. 이 사이트는 행렬의 핵을 Ker T_A 로 쓴다. (3)의 rank(AᵀA) = rank A 는 출처 연습문제 5.4 a)(pp.145–146)이다. rank(AAᵀ) = rank A 는 그 결론을 Aᵀ 에 쓰고 행 계수와 열 계수의 같음을 쓴 것이고, 출처 5절 5.3 의 끝(p.145)은 'rank A = rank A*' 를 적는다. (4)의 첫 문장은 출처가 Theorem 4.1 바로 앞(p.138)에서 'm × n 행렬 A 에 대해 A*A 는 정확히 rank A = n 일 때 가역' 이라고 적고 정리 바로 뒤에서 rank theorem 으로 끌어내는 것이고, 왼쪽 역 (AᵀA)⁻¹Aᵀ 는 출처 연습문제 5.4 b)(p.146)가 'Ax = 0 이 자명한 해만 가지면 A 는 왼쪽 가역(왼쪽 역의 식을 적으면 된다)' 이라고 묻는 것이다. (1)의 (AᵀA)ᵀ = AᵀA 와 ⟨AᵀAx, x⟩ = ‖Ax‖² ≥ 0 은 출처 6장 3절 3.2(p.172)가 연산자 A 에 대해 (A*A)* = A*A 와 (A*Ax, x) = (Ax, Ax) = ‖Ax‖² ≥ 0 을 적는 것과 같은 내용이고, 6장 2절 연습문제 2.8 a), b)(p.170)가 A*A 에 대해 묻는 것과 같은 대상이다. 출처는 이것을 낱말 'self-adjoint', 'positive semidefinite' 로 말하는데, 이 항목은 그 낱말을 쓰지 않고 식으로만 적었다. (5)는 출처 5장 5절 Theorem 5.1 의 1(p.143) 'Ker A* = (Ran A)⊥' 를 행렬 A 와 그 열공간에 대해 적은 것이고, 출처 5장 2절 연습문제 2.2(p.128)가 (Ran A)⊥ 를 기술하라고 하고 2.5(p.129)가 Ran A 와 직교하는 벡터 전체를 기술하라고 하는 것과 같은 대상이다. 예시 '열이 일차독립인 3 × 2 행렬' 에서 왼쪽 역을 (AᵀA)⁻¹Aᵀ 로 구하는 것은 출처 연습문제 5.4 b)(p.146)와 같은 발상이다. 반례 '곱의 순서를 바꾸면 가역성이 달라질 수 있는 예' 는 출처 6장 3절 연습문제 3.8(p.178)이 A*A 와 AA* 의 0 이 아닌 고윳값이 같음을 보이게 하고 0 인 고윳값의 중복도가 언제 같은지 묻는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계수 등식의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\mathbb{R}^n$과 $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. $A^T$는 [[transpose|전치행렬]], 곱은 [[matrix-product|행렬의 곱]]이고, $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상, $\operatorname{Ker}$는 [[kernel-and-range|핵과 상]]의 것, 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$과 $\operatorname{Col} A$와 $\operatorname{rank} A$는 [[rank-of-a-matrix|행렬의 계수]]의 것이며, $S^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이다. $A^T A$는 $n \times n$ 행렬이고 $AA^T$는 $m \times m$ 행렬이다. $\mathbb{R}^n$과 $\mathbb{R}^m$의 영벡터를 $0$으로 쓴다.

1. (전치와 내적) $(A^T A)^T = A^T A$이다. 모든 $x, y \in \mathbb{R}^n$에서
   $$
   \begin{aligned}
   \langle A^T A x, y \rangle &= \langle Ax, Ay \rangle \\
   &= \langle x, A^T A y \rangle
   \end{aligned}
   $$
   이다. 특히 모든 $x \in \mathbb{R}^n$에서 $\langle A^T A x, x \rangle = \langle Ax, Ax \rangle = \lVert Ax \rVert^2$이고 $0 \le \langle A^T A x, x \rangle$이며, $\langle A^T A x, x \rangle = 0$인 것은 정확히 $Ax = 0$일 때이다.
2. (핵) $\operatorname{Ker} T_{A^T A} = \operatorname{Ker} T_A$이다.
3. (계수) $\operatorname{rank}(A^T A) = \operatorname{rank} A = \operatorname{rank}(AA^T)$이다.
4. (가역) $A^T A$가 [[invertible-matrix|가역]]인 것은 정확히 $\operatorname{rank} A = n$일 때이고, 또 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립일 때이다. 이때 $(A^T A)^{-1} A^T$는 $A$의 왼쪽 역이다. 특히 $m < n$이면 $A^T A$는 가역이 아니다.
5. (열공간의 직교 여공간) $(\operatorname{Col} A)^\perp = \operatorname{Ker} T_{A^T}$이다. 곧 $z \in \mathbb{R}^m$이 $\operatorname{Col} A$와 직교하는 것은 정확히 $A^T z = 0$일 때이고, 또 정확히 모든 $k \in \{1, \dots, n\}$에서 $\langle \mathbf{a}_k, z \rangle = 0$일 때이다.
:::

:::english
Let $m$ and $n$ be natural numbers and $A$ an $m \times n$ matrix. Give $\mathbb{R}^n$ and $\mathbb{R}^m$ the standard inner product; norms are those of the entry on norms. $A^T$ is the transpose, products are matrix products, $T_A$ is the linear map of item (2) of the entry on matrix–vector products, $\operatorname{Ker}$ is that of the entry on kernel and range, the columns $\mathbf{a}_1, \dots, \mathbf{a}_n$, $\operatorname{Col} A$ and $\operatorname{rank} A$ are those of the entry on the rank of a matrix, and $S^\perp$ is that of the entry on orthogonal complements. $A^T A$ is an $n \times n$ matrix and $AA^T$ is an $m \times m$ matrix. The zero vectors of $\mathbb{R}^n$ and $\mathbb{R}^m$ are written $0$.

1. (Transpose and inner product) $(A^T A)^T = A^T A$. For all $x, y \in \mathbb{R}^n$,
   $$
   \begin{aligned}
   \langle A^T A x, y \rangle &= \langle Ax, Ay \rangle \\
   &= \langle x, A^T A y \rangle.
   \end{aligned}
   $$
   In particular, for every $x \in \mathbb{R}^n$, $\langle A^T A x, x \rangle = \langle Ax, Ax \rangle = \lVert Ax \rVert^2$ and $0 \le \langle A^T A x, x \rangle$, and $\langle A^T A x, x \rangle = 0$ exactly when $Ax = 0$.
2. (Kernel) $\operatorname{Ker} T_{A^T A} = \operatorname{Ker} T_A$.
3. (Rank) $\operatorname{rank}(A^T A) = \operatorname{rank} A = \operatorname{rank}(AA^T)$.
4. (Invertibility) $A^T A$ is invertible exactly when $\operatorname{rank} A = n$, and also exactly when $\mathbf{a}_1, \dots, \mathbf{a}_n$ are linearly independent. In that case $(A^T A)^{-1} A^T$ is a left inverse of $A$. In particular, if $m < n$, then $A^T A$ is not invertible.
5. (Orthogonal complement of the column space) $(\operatorname{Col} A)^\perp = \operatorname{Ker} T_{A^T}$. That is, $z \in \mathbb{R}^m$ is orthogonal to $\operatorname{Col} A$ exactly when $A^T z = 0$, and also exactly when $\langle \mathbf{a}_k, z \rangle = 0$ for every $k \in \{1, \dots, n\}$.
:::

## 직관

$A^T A$의 $(j, k)$ 성분은 $A$의 $j$번째 열과 $k$번째 열의 내적입니다([[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)). 그래서 $A^T A$는 $A$의 열들이 서로 얼마나 겹치는지를 적어 둔 표이고, (1)의 식 $\langle A^T A x, x \rangle = \lVert Ax \rVert^2$은 이 표로 일차결합 $Ax$의 길이를 잴 수 있다는 것입니다. 비유하면 막대 여러 개의 길이와 서로의 겹침을 적은 표만 있으면, 막대들을 정해진 배수로 이어 붙인 결과의 길이를 막대 없이 계산할 수 있는 것과 같습니다. 비유에서 막대가 $A$의 열, 겹침이 열끼리의 내적, 배수가 $x$의 성분, 이어 붙인 결과가 $Ax$입니다.

(2)의 핵심은 한쪽 포함입니다. $A^T A x = 0$이면 $\lVert Ax \rVert^2 = \langle A^T A x, x \rangle = 0$이어서 $Ax = 0$입니다. 내적의 조건 (iii)이 바로 여기서 쓰입니다. 다른 쪽 포함 $Ax = 0$이면 $A^T A x = 0$은 곱의 정의에서 바로 나옵니다.

핵이 같으면 계수-퇴화차수 공식에 의해 계수도 같고((3)), $A^T A$는 정사각행렬이므로 계수가 $n$인 것이 가역인 것과 같습니다((4)). $m < n$이면 $A$의 계수는 $m$을 넘을 수 없으므로 $A^T A$는 가역이 아닙니다. $A$가 영행렬이면 $A^T A$도 영행렬이고 핵은 $\mathbb{R}^n$ 전체입니다.

## 증명

:::idea
$\langle Ax, Ay \rangle = \langle x, A^T(Ay) \rangle$에서 (1)이 나오고, $A^T A x = 0$이면 $\langle Ax, Ax \rangle = \langle A^T A x, x \rangle = 0$이므로 $Ax = 0$이다. 계수와 가역성은 핵의 같음과 계수-퇴화차수 공식에서 나온다.
:::

:::hint
[[standard-inner-product|ℝⁿ 의 표준내적]]의 (4)에서 $y$ 자리에 $Ay \in \mathbb{R}^m$을 넣어 보세요.
:::

:::hint
$AA^T$는 $B = A^T$로 둔 $B^T B$입니다.
:::

:::proof
아래에서 (Z5)–(Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 정수의 순서의 성질이다. [[inner-product-space|내적과 내적공간]]의 번호와 조건은 "내적의 (2)", "내적의 조건 (i)"처럼, [[standard-inner-product|ℝⁿ 의 표준내적]], [[rank-of-a-matrix|행렬의 계수]]의 번호는 "표준내적의 (4)", "계수의 (4)"처럼 줄여 쓴다.

**(1)의 증명.** [[transpose|전치행렬]]의 (4)를 $n \times m$ 행렬 $A^T$와 $m \times n$ 행렬 $A$에 쓰고 같은 항목의 (1)을 쓰면 $(A^T A)^T = A^T (A^T)^T = A^T A$이다.

$x, y \in \mathbb{R}^n$이라 하자. 표준내적의 (4)에서 $y$ 자리에 $Ay \in \mathbb{R}^m$을 넣고 [[matrix-product|행렬의 곱]]의 (1)을 쓰면
$$
\begin{aligned}
\langle Ax, Ay \rangle &= \langle x, A^T(Ay) \rangle \\
&= \langle x, A^T A y \rangle
\end{aligned}
$$
이다. 이 등식에서 $x$와 $y$를 바꾸면 $\langle Ay, Ax \rangle = \langle y, A^T A x \rangle$이므로, 내적의 조건 (i)에 의해 $\langle A^T A x, y \rangle = \langle y, A^T A x \rangle = \langle Ay, Ax \rangle = \langle Ax, Ay \rangle$이다.

$y = x$로 두면 $\langle A^T A x, x \rangle = \langle Ax, Ax \rangle$이고, [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 이것은 $\lVert Ax \rVert^2$이다. 표준내적의 (1)에 의해 표준내적은 $\mathbb{R}^m$ 위의 내적이므로, 내적의 조건 (iii)에 의해 $0 \le \langle Ax, Ax \rangle$이고 $\langle Ax, Ax \rangle = 0$인 것은 정확히 $Ax = 0$일 때이다.

**(2)의 증명.** $x \in \operatorname{Ker} T_A$, 곧 $Ax = 0$이라 하자. 행렬과 벡터의 곱의 (2)에 의해 $T_{A^T}$는 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 $A^T 0 = 0$이고, 행렬의 곱의 (1)에 의해 $(A^T A)x = A^T(Ax) = A^T 0 = 0$이다. 따라서 $x \in \operatorname{Ker} T_{A^T A}$이다. 거꾸로 $(A^T A)x = 0$이라 하자. 내적의 (2)에 의해 $\langle A^T A x, x \rangle = \langle 0, x \rangle = 0$이므로 (1)의 마지막 문장에 의해 $Ax = 0$이고, $x \in \operatorname{Ker} T_A$이다.

**(3)의 증명.** 계수의 (4)를 $A$와 $n \times n$ 행렬 $A^T A$에 쓰면
$$
\begin{aligned}
\operatorname{nullity} T_A + \operatorname{rank} A &= n, \\
\operatorname{nullity} T_{A^T A} + \operatorname{rank}(A^T A) &= n
\end{aligned}
$$
이다. [[rank-and-nullity|계수와 퇴화차수]]의 정의에 의해 퇴화차수는 핵을 제한한 연산으로 본 벡터공간의 차원이고, (2)에 의해 두 핵은 $\mathbb{R}^n$의 같은 부분집합이어서 같은 벡터공간이므로 $\operatorname{nullity} T_{A^T A} = \operatorname{nullity} T_A$이다. 두 식의 양변에서 이 정수를 빼면 (Z7)에 의해 $\operatorname{rank}(A^T A) = \operatorname{rank} A$이다.

$B = A^T$라 하면 $B$는 $n \times m$ 행렬이고, 전치행렬의 (1)에 의해 $B^T B = (A^T)^T A^T = AA^T$이다. 앞 문단을 $B$에 쓰면 $\operatorname{rank}(AA^T) = \operatorname{rank}(B^T B) = \operatorname{rank} B = \operatorname{rank} A^T$이고, [[row-rank-equals-column-rank|행 계수와 열 계수]]의 (2)에 의해 $\operatorname{rank} A^T = \operatorname{rank} A$이다.

**(4)의 증명.** $A^T A$는 $n \times n$ 행렬이므로 계수의 (5)에 의해 $A^T A$가 가역인 것은 정확히 $\operatorname{rank}(A^T A) = n$일 때이고, (3)에 의해 이것은 정확히 $\operatorname{rank} A = n$일 때이다. 계수의 (2)에 의해 이것은 또 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립일 때이다.

$A^T A$가 가역이라 하자. $(A^T A)^{-1}$은 $n \times n$, $A^T$는 $n \times m$ 행렬이므로 $(A^T A)^{-1} A^T$는 $n \times m$ 행렬이다. [[matrix-product-properties|행렬의 곱의 성질]]의 (1)과 [[invertible-matrix|가역행렬]]의 (1)에 의해
$$
\begin{aligned}
\bigl((A^T A)^{-1} A^T\bigr) A &= (A^T A)^{-1}(A^T A) \\
&= I_n
\end{aligned}
$$
이므로, 가역행렬의 정의에 의해 $(A^T A)^{-1} A^T$는 $A$의 왼쪽 역이다.

$m < n$이면 계수의 (1)에 의해 $\operatorname{rank} A \le m$이므로 (Z6)에 의해 $\operatorname{rank} A < n$이고, (Z5)에 의해 $\operatorname{rank} A \ne n$이다. 첫 문장에 의해 $A^T A$는 가역이 아니다.

**(5)의 증명.** 계수의 정의에 의해 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이므로, 직교 여공간의 (1)의 마지막 문장에 의해 $z \in (\operatorname{Col} A)^\perp$인 것은 정확히 모든 $k$에서 $z \perp \mathbf{a}_k$, 곧 $\langle z, \mathbf{a}_k \rangle = 0$일 때이고, 내적의 조건 (i)에 의해 정확히 모든 $k$에서 $\langle \mathbf{a}_k, z \rangle = 0$일 때이다. 표준내적의 (3)의 둘째 문장에 의해 $\langle \mathbf{a}_k, z \rangle$는 $A^T z \in \mathbb{R}^n$의 $k$에서의 값이다. $\mathbb{R}^n$의 원소는 $\{1, \dots, n\}$에서 $\mathbb{R}$로의 함수이고 $0$은 모든 값이 $0$인 함수이므로([[real-function-space|실숫값 함수의 공간]]), 모든 값이 $0$인 것은 정확히 $A^T z = 0$일 때이다. 따라서 $z \in (\operatorname{Col} A)^\perp$인 것은 정확히 $z \in \operatorname{Ker} T_{A^T}$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[열이 일차독립인 3 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}
$$
이라 하면 $\mathbf{a}_1 = (1, 0, 1)$, $\mathbf{a}_2 = (2, 1, 0)$이고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $A^T A$의 성분은 열끼리의 내적 $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = 2$, $\langle \mathbf{a}_1, \mathbf{a}_2 \rangle = 2$, $\langle \mathbf{a}_2, \mathbf{a}_2 \rangle = 5$입니다. 곧
$$
A^T A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}
$$
입니다. $c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = 0$이면 둘째 성분에서 $c_2 = 0$, 셋째 성분에서 $c_1 = 0$이므로 열은 일차독립이고, (4)에 의해 $A^T A$는 가역입니다. 실제로 $C = \tfrac{1}{6}\begin{pmatrix} 5 & -2 \\ -2 & 2 \end{pmatrix}$이라 하면
$$
\begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}\begin{pmatrix} 5 & -2 \\ -2 & 2 \end{pmatrix} = \begin{pmatrix} 6 & 0 \\ 0 & 6 \end{pmatrix}
$$
이고 곱의 순서를 바꿔도 같은 행렬이 나오므로, $C$가 $(A^T A)^{-1}$입니다. 왼쪽 역은
$$
B = C A^T = \frac{1}{6}\begin{pmatrix} 1 & -2 & 5 \\ 2 & 2 & -2 \end{pmatrix}
$$
이고, $BA$의 성분은 $\tfrac{1 + 0 + 5}{6} = 1$, $\tfrac{2 - 2 + 0}{6} = 0$, $\tfrac{2 + 0 - 2}{6} = 0$, $\tfrac{4 + 2 + 0}{6} = 1$이어서 $BA = I_2$입니다.

(1)도 확인해 봅시다. $x = (1, -1)$이면 $Ax = (-1, -1, 1)$이고 $\lVert Ax \rVert^2 = 3$입니다. 한편 $A^T A x = (2 - 2, 2 - 5) = (0, -3)$이고 $\langle (0, -3), (1, -1) \rangle = 3$입니다. (3)에 의해 $3 \times 3$ 행렬 $AA^T$의 계수도 $2$이므로, $AA^T$는 가역이 아닙니다.
:::

:::counterexample[곱의 순서를 바꾸면 가역성이 달라질 수 있는 예]
$1 \times 2$ 행렬 $A = \begin{pmatrix} 1 & 1 \end{pmatrix}$이라 하면
$$
A^T A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}, \qquad AA^T = \begin{pmatrix} 2 \end{pmatrix}
$$
입니다. $m = 1 < 2 = n$이므로 (4)에 의해 $A^T A$는 가역이 아닙니다. 실제로 $A^T A$에 $(1, -1)$을 곱하면 $0$이고, (2)에 의해 $\operatorname{Ker} T_{A^T A} = \operatorname{Ker} T_A = \{x : x_1 + x_2 = 0\}$입니다. 반면 $1 \times 1$ 행렬 $AA^T$는 $\begin{pmatrix} 2^{-1} \end{pmatrix}$과 곱하면 $I_1$이 되므로 가역입니다. 두 곱의 계수는 (3)에 의해 둘 다 $\operatorname{rank} A = 1$로 같지만, 가역인지는 크기와 계수가 같은지에 따라 갈립니다.
:::

## 확인 질문

:::check[$1 \times 1$ 행렬 $A = \begin{pmatrix} a \end{pmatrix}$이면 (4)는 무엇을 말하는가?]
$A^T = A$이므로 $A^T A = \begin{pmatrix} aa \end{pmatrix}$입니다. (4)에 의해 이것이 가역인 것은 정확히 $\operatorname{rank} A = 1$일 때이고, [[rank-of-a-matrix|행렬의 계수]]의 (6)과 (1)에 의해 그것은 정확히 $A$가 영행렬이 아닐 때, 곧 $a \ne 0$일 때입니다. 실제로 $a \ne 0$이면 [[real-number-arithmetic|(K12)]]의 (vi)에 의해 $aa \ne 0$이어서 $\begin{pmatrix} (aa)^{-1} \end{pmatrix}$이 역행렬입니다.
:::

:::check[$A$가 $m \times n$ 영행렬이면 $\operatorname{Ker} T_{A^T A}$와 $\operatorname{rank}(A^T A)$는 무엇인가?]
모든 $x$에서 $Ax = 0$이므로 $\operatorname{Ker} T_A = \mathbb{R}^n$이고, (2)에 의해 $\operatorname{Ker} T_{A^T A} = \mathbb{R}^n$입니다. [[rank-of-a-matrix|행렬의 계수]]의 (6)에 의해 $\operatorname{rank} A = 0$이므로 (3)에 의해 $\operatorname{rank}(A^T A) = 0$이고, 같은 항목의 (6)에 의해 $A^T A$도 영행렬입니다.
:::
