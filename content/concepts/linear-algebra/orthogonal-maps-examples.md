---
title: 직교사상의 예와 반례
title_en: Examples of Orthogonal Maps
aliases: [단위벡터에 대한 반사, 초평면에 대한 반사, 하우스홀더 반사, 치환행렬, Householder reflection, reflection in a hyperplane, permutation matrix]
kind: proposition
field: linear-algebra
msc: ["15B10", "15A04"]
level: undergrad
summary: 단위벡터 u 에 대한 반사 x − 2⟨x, u⟩u 는 직교사상이고 자기 자신이 역이며 내적 안에서 옮겨 다닐 수 있고, 고윳값 −1 의 고유공간은 u 의 생성, 고윳값 1 의 고유공간은 그 직교 여공간이다. ℝⁿ 에서 그 행렬은 Iₙ − 2UUᵀ 이다. 표준기저의 순서를 바꾸는 치환행렬은 직교행렬이다. 정규직교 기저의 원소에서만 노름을 보존하는 선형사상은 직교사상이 아닐 수 있고, 직교사상이지만 전사가 아닌 ℝ² 에서 ℝ³ 으로의 사상이 있다.
requires: [function, inverse-function, injective-surjective-bijective, bijective-iff-inverse-is-a-function, real-number-arithmetic, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-combination-and-span, standard-basis, linear-map, isomorphism, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, transpose, elementary-matrix, eigenvalue-and-eigenvector, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-vectors, orthogonal-complement, self-adjoint-map, orthogonal-map, orthogonal-matrix, orthogonal-matrices-2x2]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절 Isometries and unitary operators. Unitary and orthogonal matrices. 의 연습문제 6.5, p.150; 6장 2절 Spectral theorem for self-adjoint and normal operators 의 연습문제 2.1, p.169; 1장 3절 Linear Transformations. Matrix–vector multiplication 의 3.1 Examples, p.12; 1장 5절의 예(직선 x₁ = 3x₂ 에 대한 반사), pp.20–21; 3장 4절 Formal definition. Existence and uniqueness of the determinant. 의 연습문제 4.2, p.89"
    checked: original
    note: "출처는 평면의 반사를 1장에서 여러 번 행렬로 구한다(3.1 Examples 의 첫째 좌표축에 대한 반사, p.12; 연습문제 3.2 의 직선 x₁ = x₂ 에 대한 반사, p.17; 5절의 직선 x₁ = 3x₂ 에 대한 반사, pp.20–21; 연습문제 5.8 의 직선 y = −2x/3 에 대한 반사, p.24; 8.1 의 x 축에 대한 반사, p.33). (1)의 단위벡터 u 에 대한 반사는 이 반사들을 내적공간 일반으로 옮긴 것이고, ℝ² 에서 u 와 직교하는 직선에 대한 반사이다. 출처에서 'reflection' 은 1장의 이 예들 말고는 6장 5절 Structure of orthogonal matrices(p.191, 행렬식이 −1 인 2 × 2 직교행렬은 반사)와 6장 6절 Orientation(p.194)에 나온다. (3)의 치환행렬은 출처 3장 4절 연습문제 4.2(p.89)의 permutation matrix(각 행과 열에 1 이 꼭 하나 있는 0 과 1 의 행렬)와 같은 것이고, 그 연습문제는 대응하는 선형변환을 설명하고 P 가 가역임을 보이며 P⁻¹ 을 설명하라고 한다. 이 항목은 σ 로 열을 정해 정의하고 P_σ⁻¹ = P_σᵀ 를 직교행렬로 증명한다. (4)는 출처 5장 6절 연습문제 6.5 b)(p.150) '어떤 정규직교 기저에서 ‖Ue_k‖ = ‖e_k‖ 이면 U 는 unitary 인가'에 대한 반례이다. 출처 6장 2절 연습문제 2.1 i)(p.169)는 노름을 보존하지만 내적을 보존하지 않는 선형사상이 있는지 묻는데, 직교사상 항목의 (1)에 의해 그런 사상은 없다. (5)는 출처 Proposition 6.3(p.147)의 'isometry 가 unitary 인 것은 정확히 dim X = dim Y 일 때'에서 dim X < dim Y 인 경우의 예이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반사 행렬의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
아래에서 직교사상은 [[orthogonal-map|직교사상]]의 것, 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것, 고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, 직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이다. $\mathbb{R}^n$, $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, $e_k$는 [[standard-basis|표준기저]]의 항이다.

1. (단위벡터에 대한 반사) $V$가 [[inner-product-space|내적공간]]이고 $u \in V$가 [[norm-in-inner-product-space|단위벡터]]라 하자. 모든 $x \in V$에서 값이
   $$
   H_u x = x - 2\langle x, u \rangle u
   $$
   인 함수 $H_u : V \to V$를 $u$에 대한 **반사**(reflection)라 한다. 다음이 성립한다.
   - (i) $H_u$는 [[linear-map|선형사상]]이고 직교사상이다.
   - (ii) $H_u \circ H_u = i_V$이다. 따라서 $H_u$는 [[isomorphism|동형사상]]이고 $H_u^{-1} = H_u$이다.
   - (iii) 모든 $x, y \in V$에서 $\langle H_u x, y \rangle = \langle x, H_u y \rangle$이다. $V$가 유한차원이면 $H_u$는 [[self-adjoint-map|자기수반사상]]이다.
   - (iv) 고유공간 $\operatorname{Ker}(H_u - (-1)i_V)$는 $\operatorname{span}(u)$이고, 고유공간 $\operatorname{Ker}(H_u - 1\,i_V)$는 $\operatorname{span}(u)^\perp$이다. $-1$은 $H_u$의 고윳값이고, $1$이 $H_u$의 고윳값인 것은 정확히 $\operatorname{span}(u)^\perp \ne \{0_V\}$일 때이며, $1$도 $-1$도 아닌 실수는 $H_u$의 고윳값이 아니다.
   - (v) $n$이 자연수이고 $V = \mathbb{R}^n$이며 $U$가 첫째 열이 $u$인 $n \times 1$ [[matrix|행렬]]이면, $H_u$의 [[matrix-of-a-linear-map|행렬]]은 $[H_u] = I_n - 2UU^T$이고, 그 $(j, k)$ 성분은 $j = k$일 때 $1 - 2u_j u_k$, $j \ne k$일 때 $-2u_j u_k$이다. $[H_u]$는 대칭인 직교행렬이다.
2. (반사의 계산) $u = 3^{-1}(1, 2, 2) \in \mathbb{R}^3$은 단위벡터이고
   $$
   [H_u] = 9^{-1}\begin{pmatrix} 7 & -4 & -4 \\ -4 & 1 & -8 \\ -4 & -8 & 1 \end{pmatrix}
   $$
   이다. $H_u u = -u$이고, $w = (2, -1, 0)$에서 $H_u w = w$이다.
3. (치환행렬) $n$이 자연수이고 $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$이 [[injective-surjective-bijective|전단사]]라 하자. 모든 $k$에서 $k$번째 열이 $e_{\sigma(k)}$인 $n \times n$ 행렬을 $\sigma$의 **치환행렬**(permutation matrix)이라 하고 $P_\sigma$로 쓴다. 그 $(j, k)$ 성분은 $j = \sigma(k)$일 때 $1$, $j \ne \sigma(k)$일 때 $0$이다. $P_\sigma$는 직교행렬이고 $P_\sigma^{-1} = P_\sigma^T = P_{\sigma^{-1}}$이다($\sigma^{-1}$은 [[inverse-function|역함수]]). $\sigma$가 항등함수이면 $P_\sigma = I_n$이고, $n \ge 2$이며 $\sigma$가 [[elementary-matrix|기본행렬]]의 $\tau$이면 $P_\sigma = P_{j,k}$이다.
4. (기저에서만 노름을 보존하는 사상) $A = \begin{pmatrix} 1 & 3/5 \\ 0 & 4/5 \end{pmatrix}$이면 $\lVert Ae_1 \rVert = \lVert Ae_2 \rVert = 1$이지만 $T_A : \mathbb{R}^2 \to \mathbb{R}^2$는 직교사상이 아니다. $\lVert A(e_1 - e_2) \rVert^2 = 4/5$이고 $\lVert e_1 - e_2 \rVert^2 = 2$이다.
5. (전사가 아닌 직교사상) $\mathbf{u}_1 = 3^{-1}(1, 2, 2)$, $\mathbf{u}_2 = 3^{-1}(2, 1, -2)$를 열로 하는 $3 \times 2$ 행렬을 $U$라 하면 $T_U : \mathbb{R}^2 \to \mathbb{R}^3$은 직교사상이고 전사가 아니다. $w = 3^{-1}(2, -2, 1)$은 $T_U$의 상에 속하지 않고, $UU^T \ne I_3$이다.
:::

:::english
Below, orthogonal maps are as in the entry on orthogonal maps, orthogonal matrices as in the entry on orthogonal matrices, eigenvalues and eigenspaces as in the entry on eigenvalues and eigenvectors, and orthogonal complements as in the entry on orthogonal complements. $\mathbb{R}^n$, $\mathbb{R}^m$ carry the standard inner product, and $e_k$ is a term of the standard basis.

1. (Reflection in a unit vector) Let $V$ be an inner product space and let $u \in V$ be a unit vector. The function $H_u : V \to V$ with
   $$
   H_u x = x - 2\langle x, u \rangle u
   $$
   for all $x \in V$ is called the **reflection** in $u$. The following hold.
   - (i) $H_u$ is a linear map and an orthogonal map.
   - (ii) $H_u \circ H_u = i_V$. Hence $H_u$ is an isomorphism and $H_u^{-1} = H_u$.
   - (iii) $\langle H_u x, y \rangle = \langle x, H_u y \rangle$ for all $x, y \in V$. If $V$ is finite-dimensional, $H_u$ is a self-adjoint map.
   - (iv) The eigenspace $\operatorname{Ker}(H_u - (-1)i_V)$ is $\operatorname{span}(u)$, and the eigenspace $\operatorname{Ker}(H_u - 1\,i_V)$ is $\operatorname{span}(u)^\perp$. $-1$ is an eigenvalue of $H_u$; $1$ is an eigenvalue of $H_u$ exactly when $\operatorname{span}(u)^\perp \ne \{0_V\}$; and a real number other than $1$ and $-1$ is not an eigenvalue of $H_u$.
   - (v) If $n$ is a natural number, $V = \mathbb{R}^n$, and $U$ is the $n \times 1$ matrix whose first column is $u$, then the matrix of $H_u$ is $[H_u] = I_n - 2UU^T$, whose $(j, k)$ entry is $1 - 2u_j u_k$ if $j = k$ and $-2u_j u_k$ if $j \ne k$. $[H_u]$ is a symmetric orthogonal matrix.
2. (Computing a reflection) $u = 3^{-1}(1, 2, 2) \in \mathbb{R}^3$ is a unit vector and
   $$
   [H_u] = 9^{-1}\begin{pmatrix} 7 & -4 & -4 \\ -4 & 1 & -8 \\ -4 & -8 & 1 \end{pmatrix}.
   $$
   We have $H_u u = -u$, and for $w = (2, -1, 0)$, $H_u w = w$.
3. (Permutation matrices) Let $n$ be a natural number and $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$ a bijection. The $n \times n$ matrix whose $k$th column is $e_{\sigma(k)}$ for every $k$ is called the **permutation matrix** of $\sigma$ and written $P_\sigma$. Its $(j, k)$ entry is $1$ if $j = \sigma(k)$ and $0$ if $j \ne \sigma(k)$. $P_\sigma$ is an orthogonal matrix and $P_\sigma^{-1} = P_\sigma^T = P_{\sigma^{-1}}$ ($\sigma^{-1}$ is the inverse function). If $\sigma$ is the identity function then $P_\sigma = I_n$, and if $n \ge 2$ and $\sigma$ is the $\tau$ of the entry on elementary matrices, then $P_\sigma = P_{j,k}$.
4. (A map preserving norms only on a basis) If $A = \begin{pmatrix} 1 & 3/5 \\ 0 & 4/5 \end{pmatrix}$, then $\lVert Ae_1 \rVert = \lVert Ae_2 \rVert = 1$, but $T_A : \mathbb{R}^2 \to \mathbb{R}^2$ is not an orthogonal map: $\lVert A(e_1 - e_2) \rVert^2 = 4/5$ while $\lVert e_1 - e_2 \rVert^2 = 2$.
5. (A non-surjective orthogonal map) If $U$ is the $3 \times 2$ matrix with columns $\mathbf{u}_1 = 3^{-1}(1, 2, 2)$ and $\mathbf{u}_2 = 3^{-1}(2, 1, -2)$, then $T_U : \mathbb{R}^2 \to \mathbb{R}^3$ is an orthogonal map and is not surjective. $w = 3^{-1}(2, -2, 1)$ is not in the range of $T_U$, and $UU^T \ne I_3$.
:::

## 직관

$u$에 대한 반사 $H_u$는 $x$를 $u$ 방향의 성분 $\langle x, u \rangle u$와 나머지로 나누어, $u$ 방향의 성분만 부호를 바꾸는 사상입니다. $x - 2\langle x, u \rangle u = (x - \langle x, u \rangle u) - \langle x, u \rangle u$이기 때문입니다. 비유하면 $u$와 직교하는 벡터 전체를 거울로 삼아 거울 앞뒤를 바꾸는 것이고, 거울 위의 벡터는 그대로, $u$ 방향은 정반대로 갑니다((iv)). 두 번 비추면 제자리이고((ii)), 길이는 바뀌지 않습니다((i)).

치환행렬은 표준기저의 순서만 바꾸므로 그 열이 정규직교이고, 직교행렬입니다((3)). 직교사상인지는 정규직교 기저의 상이 정규직교 열인지로 판정하는데, 상의 길이만 $1$이어서는 모자랍니다. 상들이 서로 직교해야 합니다((4)). 또 직교사상은 공역이 더 크면 전사가 아닐 수 있습니다((5)).

## 증명

:::idea
반사에 관한 성질은 모두 $a = \langle x, u \rangle$로 두고 $\langle u, u \rangle = 1$을 쓰는 계산입니다. 행렬은 열마다 계산하고, 나머지 예는 직교행렬 항목의 열에 관한 판정으로 확인합니다.
:::

:::hint
$\langle H_u x, u \rangle$를 계산하면 $-\langle x, u \rangle$입니다. 이것으로 $H_u(H_u x)$를 계산하십시오.
:::

:::hint
$H_u x = \lambda x$의 양변과 $u$의 내적을 비교하십시오.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]]의 번호는 "노름의 (1)"처럼, [[orthogonal-matrix|직교행렬]]의 번호는 "직교행렬의 (1)"처럼 줄여 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다. 벡터공간의 공리와 (B1)–(B12)로 하는 덧셈과 스칼라배의 정리를 "벡터공간의 계산"이라 줄여 쓴다. 노름의 (4)에 의해 $\langle u, u \rangle = 1$이다. 각 $x$에 $V$의 원소 $x - 2\langle x, u \rangle u$가 하나씩 정해지므로 [[real-function-space|실숫값 함수의 공간]]의 (G)에 의해 $H_u$가 있다. $x \in V$에 대하여 $a_x = \langle x, u \rangle$로 쓴다.

**(1)의 (i).** $x, y \in V$와 실수 $\alpha$, $\beta$에서 내적의 (1)에 의해 $a_{\alpha x + \beta y} = \alpha a_x + \beta a_y$이므로, 벡터공간의 계산으로 $H_u(\alpha x + \beta y) = \alpha H_u x + \beta H_u y$이고, [[linear-map|선형사상]]의 (T3)에 의해 $H_u$는 선형사상이다. $y = 2a_x u$로 두면 내적의 (1)에 의해 $\langle x, y \rangle = 2a_x a_x$이고 $\langle y, y \rangle = (2a_x)(2a_x)\langle u, u \rangle = 4a_x a_x$이므로, 노름의 (5)와 (2)에 의해

$$
\begin{aligned}
\lVert H_u x \rVert^2 &= \lVert x \rVert^2 - 2(2 a_x a_x) + 4 a_x a_x \\
&= \lVert x \rVert^2
\end{aligned}
$$

이다((K3), (K7), (K12)). 노름의 (1)에 의해 두 노름은 $0$ 이상이므로 노름의 (2)에 의해 $\lVert H_u x \rVert = \lVert x \rVert$이고, [[orthogonal-map|직교사상]]의 (1)에 의해 $H_u$는 직교사상이다.

**(1)의 (ii).** 내적의 (2), (1)에 의해 $a_{H_u x} = \langle x, u \rangle - 2a_x \langle u, u \rangle = a_x - 2a_x = -a_x$이다. 따라서 벡터공간의 계산으로 $H_u(H_u x) = H_u x - 2(-a_x)u = (x - 2a_x u) + 2a_x u = x$이다. 모든 $x$에서 값이 같으므로 $H_u \circ H_u = i_V$이다. [[isomorphism|동형사상]]의 (3)을 $S = H_u$에 쓰면 $H_u$는 동형사상이고 $H_u^{-1} = H_u$이다.

**(1)의 (iii).** 내적의 (2), (1)과 내적의 조건 (i)에 의해 $\langle H_u x, y \rangle = \langle x, y \rangle - 2a_x \langle u, y \rangle = \langle x, y \rangle - 2 a_x a_y$이고, 같은 방식으로 $\langle x, H_u y \rangle = \langle x, y \rangle - 2 a_y \langle x, u \rangle = \langle x, y \rangle - 2a_y a_x$이다. (K1)에 의해 두 값은 같다. $V$가 유한차원이면 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (1)에 의해 $H_u$는 자기수반사상이다.

**(1)의 (iv).** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 실수 $\lambda$에 대한 고유공간은 $\{x \in V : H_u x = \lambda x\}$이다. 노름의 (4)에 의해 단위벡터 $u$는 $0_V$가 아니다.

$H_u x = -x$이면 벡터공간의 계산으로 $2x = 2a_x u$이고, (K7)의 $2 \ne 0$으로 양변에 $2^{-1}$을 곱하면 $x = a_x u \in \operatorname{span}(u)$이다([[linear-combination-and-span|생성]]). 거꾸로 $x = cu$이면 $a_x = c\langle u, u \rangle = c$이므로 $H_u x = cu - 2cu = -cu = -x$이다. 따라서 $\operatorname{Ker}(H_u - (-1)i_V) = \operatorname{span}(u)$이고, $u$가 그 원소이며 $u \ne 0_V$이므로 $-1$은 고윳값이다.

$H_u x = x$인 것은 벡터공간의 계산으로 $2a_x u = 0_V$인 것과 같고, (B6)과 $u \ne 0_V$, (K10)과 $2 \ne 0$에 의해 이것은 $a_x = 0$, 곧 $x \perp u$인 것과 같다. [[orthogonal-complement|직교 여공간]]의 (1)에 의해 이것은 $x \in \operatorname{span}(u)^\perp$인 것과 같다. 따라서 $\operatorname{Ker}(H_u - 1\,i_V) = \operatorname{span}(u)^\perp$이고, 고윳값과 고유벡터의 (2)에 의해 $1$이 고윳값인 것은 정확히 이 집합이 $\{0_V\}$가 아닐 때이다.

$\lambda$가 $1$도 $-1$도 아니라 하고 $H_u x = \lambda x$라 하자. 양변과 $u$의 내적을 비교하면, (ii)의 계산에 의해 왼쪽은 $a_{H_u x} = -a_x$이고 오른쪽은 $\lambda a_x$이므로 $(\lambda + 1)a_x = 0$이다((K3), (K12)). $\lambda + 1 \ne 0$이므로 (K10)에 의해 $a_x = 0$이고, 그러면 $H_u x = x$이므로 $x = \lambda x$, 곧 $(1 - \lambda)x = 0_V$이다. $1 - \lambda \ne 0$이므로 (B6)에 의해 $x = 0_V$이다. 따라서 $\lambda$에 속하는 고유벡터는 없고 $\lambda$는 고윳값이 아니다.

**(1)의 (v).** $u = (u_1, \dots, u_n)$이라 하자. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_k, u \rangle = u_k$이므로 $H_u e_k = e_k - 2u_k u$이고, 그 $j$번째 값은 $j = k$일 때 $1 - 2u_k u_j$, $j \ne k$일 때 $-2u_k u_j$이다([[standard-basis|표준기저]]). [[matrix-of-a-linear-map|선형사상의 행렬]]의 정의에 의해 $[H_u]$의 $k$번째 열은 $H_u e_k$이고, (K1)에 의해 $[H_u]$의 성분은 진술의 것과 같다. 한편 $U^T$는 $1 \times n$ 행렬이고 [[transpose|전치행렬]]의 정의에 의해 $(U^T)_{1,k} = u_k$이므로, [[matrix-product|행렬의 곱]]의 (2)와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $(UU^T)_{j,k} = u_j u_k$이다. [[matrix|행렬]]의 (1), (6)에 의해 $I_n - 2UU^T$의 $(j, k)$ 성분도 진술의 것과 같으므로 행렬의 (2)에 의해 $[H_u] = I_n - 2UU^T$이다. (K1)에 의해 $(j, k)$ 성분과 $(k, j)$ 성분이 같으므로 행렬의 (2)와 전치행렬의 정의에 의해 $[H_u]^T = [H_u]$이고 $[H_u]$는 대칭이다. 선형사상의 행렬의 (1)에 의해 $T_{[H_u]} = H_u$는 (i)에 의해 직교사상이므로, 직교행렬의 (2)의 (사)에 의해 $[H_u]$는 직교행렬이다.

**(2).** $\langle u, u \rangle = 9^{-1}(1 + 4 + 4) = 1$이므로 노름의 (4)에 의해 $u$는 단위벡터이다. $u_1 = 1/3$, $u_2 = u_3 = 2/3$을 (1)의 (v)의 성분에 넣으면 대각성분은 $1 - 2/9 = 7/9$, $1 - 8/9 = 1/9$, $1/9$이고, $(1, 2)$, $(1, 3)$ 성분은 $-2 \cdot 2/9 = -4/9$, $(2, 3)$ 성분은 $-2 \cdot 4/9 = -8/9$이며, 대칭이므로 나머지도 정해진다. (1)의 (iv)에 의해 $H_u u = -u$이다. $\langle w, u \rangle = 3^{-1}(2 - 2 + 0) = 0$이므로 (1)의 정의에 의해 $H_u w = w - 0u = w$이다. 행렬로 확인하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $[H_u]w$의 세 값은 $9^{-1}(14 + 4)$, $9^{-1}(-8 - 1)$, $9^{-1}(-8 + 8)$, 곧 $2$, $-1$, $0$이다.

**(3).** [[matrix|행렬]]의 (4)에 의해 $P_\sigma$가 있고 그 $(j, k)$ 성분은 $e_{\sigma(k)}$의 $j$번째 값이므로 진술의 것과 같다. ℝⁿ 의 표준내적의 (2)에 의해 $\langle e_{\sigma(j)}, e_{\sigma(k)} \rangle$는 $\sigma(j) = \sigma(k)$일 때 $1$, 아닐 때 $0$이다. $\sigma$는 단사이므로 $\sigma(j) = \sigma(k)$인 것은 정확히 $j = k$일 때이고, 따라서 $P_\sigma$의 열은 정규직교 열이며 직교행렬의 (2)의 (라)에 의해 $P_\sigma$는 직교행렬이고, (다)에 의해 $P_\sigma^{-1} = P_\sigma^T$이다. [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역함수 $\sigma^{-1}$이 있고, [[inverse-function|역관계와 역함수]]의 두 등식에 의해 $\sigma^{-1}$도 전단사이다([[isomorphism|동형사상]]의 (1), 함수에 대한 사실). $(P_\sigma^T)_{j,k} = (P_\sigma)_{k,j}$는 $k = \sigma(j)$일 때 $1$, 아닐 때 $0$이고, 역함수의 정의에 의해 $k = \sigma(j)$인 것은 정확히 $j = \sigma^{-1}(k)$일 때이므로 이것은 $P_{\sigma^{-1}}$의 $(j, k)$ 성분이다. 행렬의 (2)에 의해 $P_\sigma^T = P_{\sigma^{-1}}$이다. $\sigma$가 항등함수이면 행렬의 (6)에 의해 $I_n$의 $k$번째 열이 $e_k$이므로 행렬의 (3)에 의해 $P_\sigma = I_n$이다. $\sigma = \tau$이면 [[elementary-matrix|기본행렬]]의 (5)와 행렬과 벡터의 곱의 (3)에 의해 $P_{j,k}$의 $k$번째 열은 $P_{j,k}e_k = e_{\tau(k)}$이므로, 행렬의 (3)에 의해 $P_\tau = P_{j,k}$이다.

**(4).** 행렬과 벡터의 곱의 (3)에 의해 $Ae_1 = (1, 0)$, $Ae_2 = (3/5, 4/5)$이고, 노름의 (8)에 의해 $\lVert Ae_1 \rVert^2 = 1$, $\lVert Ae_2 \rVert^2 = 9/25 + 16/25 = 1$이므로 두 노름은 $1$이다. [[linear-map|선형사상]]의 (T2)에 의해 $A(e_1 - e_2) = Ae_1 - Ae_2 = (2/5, -4/5)$이고 그 노름의 제곱은 $4/25 + 16/25 = 4/5$이다. $e_1 - e_2 = (1, -1)$의 노름의 제곱은 $2$이다. $4/5 \ne 2$이므로 노름이 다르고, 직교사상의 (1)에 의해 $T_A$는 직교사상이 아니다.

**(5).** $\langle \mathbf{u}_1, \mathbf{u}_1 \rangle = 9^{-1}(1 + 4 + 4) = 1$, $\langle \mathbf{u}_2, \mathbf{u}_2 \rangle = 9^{-1}(4 + 1 + 4) = 1$, $\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = 9^{-1}(2 + 2 - 4) = 0$이므로 $U$의 열은 정규직교 열이고, 직교행렬의 (1)에 의해 $T_U$는 직교사상이다. $\langle \mathbf{u}_1, w \rangle = 9^{-1}(2 - 4 + 2) = 0$, $\langle \mathbf{u}_2, w \rangle = 9^{-1}(4 - 2 - 2) = 0$이고 $\langle w, w \rangle = 9^{-1}(4 + 4 + 1) = 1$이다. $w = Ux$인 $x \in \mathbb{R}^2$이 있다고 하자. ℝⁿ 의 표준내적의 (3)에 의해 $U^T w$의 $k$번째 값은 $\langle \mathbf{u}_k, w \rangle = 0$이므로 $U^T w = 0$이고, 그 항목의 (4)와 내적의 (2)에 의해 $1 = \langle w, w \rangle = \langle Ux, w \rangle = \langle x, U^T w \rangle = 0$이 되어 모순이다. 따라서 $w$는 $T_U$의 상에 속하지 않고 $T_U : \mathbb{R}^2 \to \mathbb{R}^3$은 전사가 아니다. 직교행렬의 (1)에 의해 $UU^T = I_3$인 것은 정확히 $2 = 3$일 때이므로 $UU^T \ne I_3$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 치환행렬]
$\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$인 전단사 $\sigma$의 치환행렬은 열이 차례로 $e_2$, $e_3$, $e_1$인

$$
P_\sigma = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}
$$

입니다. (3)에 의해 그 역행렬은 $P_\sigma^T = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$이고, 이것은 $\sigma^{-1}(1) = 3$, $\sigma^{-1}(2) = 1$, $\sigma^{-1}(3) = 2$인 $\sigma^{-1}$의 치환행렬입니다. 행 규칙에 의해 $x = (x_1, x_2, x_3)$에서 $P_\sigma x = (x_3, x_1, x_2)$이므로 $P_\sigma$는 성분의 자리를 하나씩 뒤로 미룹니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 $u = e_1$에 대한 반사의 행렬은 무엇인가?]
(1)의 (v)에 의해 $u_1 = 1$, $u_2 = 0$이므로 $(1, 1)$ 성분은 $1 - 2 = -1$, $(2, 2)$ 성분은 $1$, 나머지는 $0$입니다. 곧 $[H_{e_1}] = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$이고, $e_1$을 $-e_1$로 보내고 $e_2$를 그대로 둡니다. 이것은 [[orthogonal-matrices-2x2|2 × 2 직교행렬]]의 $a = -1$, $b = 0$인 둘째 꼴입니다.
:::

:::check[$\mathbb{R}^1$에서 단위벡터에 대한 반사의 고윳값은 무엇인가?]
$-1$ 하나뿐입니다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\mathbb{R}^1$의 단위벡터 $u$는 $\langle u, u \rangle = u_1 u_1 = 1$이고, $x \in \mathbb{R}^1$이 $x \perp u$이면 $x_1 u_1 = 0$에서 $u_1 \ne 0$이므로 $x_1 = 0$, 곧 $x = 0$입니다. 따라서 $\operatorname{span}(u)^\perp = \{0\}$이고 (1)의 (iv)에 의해 $1$은 고윳값이 아닙니다.
:::
