---
title: 직교행렬
title_en: Orthogonal Matrix
aliases: [orthogonal matrix, 정규직교 열을 가진 행렬, matrix with orthonormal columns]
kind: definition
field: linear-algebra
msc: ["15B10"]
level: undergrad
summary: n × n 행렬 Q 가 QᵀQ = Iₙ 을 만족하면 직교행렬이다. 이것은 QQᵀ = Iₙ, Q⁻¹ = Qᵀ, 열이 정규직교, 행이 정규직교, Q 의 사상이 직교사상인 것과 모두 같다. 직교행렬의 전치·역행렬·곱은 직교행렬이고, 행렬식은 1 이거나 −1 이며, 실고윳값은 1 이나 −1 뿐이다. m × r 행렬 U 에서 UᵀU = I_r 인 것은 열이 정규직교인 것과 같고 이때 r ≤ m 이다.
requires: [real-number-arithmetic, power-of-a-real-number, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis-iff-independent-and-spanning, dimension, standard-basis, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, one-sided-inverse-of-square-matrix, matrix-in-bases, elementary-matrix, eigenvalue-and-eigenvector, determinant, determinant-of-product, determinant-of-transpose, trace, real-eigenvalues-2x2, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthonormal-list, orthonormal-basis, properties-of-orthogonal-projection, orthogonal-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절 Isometries and unitary operators. Unitary and orthogonal matrices., 6.1 Main definitions 의 끝 문단, p.147; 6.2 Examples 의 첫 문단, p.148; 6.3 Properties of unitary operators 의 Proposition 6.4 와 Remark, p.148, 그 증명, p.149; 6절 연습문제 6.4, p.150; 3장 3절 Constructing the determinant 의 연습문제 3.7, p.85"
    checked: original
    note: "출처는 U*U = I 인 정사각행렬을 unitary 라 부르고, 성분이 실수인 unitary matrix 를 orthogonal matrix 라 부른다(p.147). 이 사이트는 실수만 쓰므로 U* 대신 전치행렬로 QᵀQ = Iₙ 이라 정의한다. 3장 3절 연습문제 3.7(p.85)도 'A real square matrix Q is called orthogonal if QᵀQ = I' 라고 정의하고 det Q = ±1 을 증명하라고 한다. (1)의 (i)과 (ii)가 같다는 것은 출처 6.2 의 첫 문단(p.148)이 '행렬이 isometry 인 것은 정확히 열이 orthonormal system 일 때'라고 적고 U*U 를 계산해 확인할 수 있다고 적는 것을 m × r 행렬에 대해 증명한 것이다. (2)의 (다)는 출처 6.1 의 성질 1(p.147)의 U⁻¹ = U* 를 행렬에 쓴 것이고, 출처 6장 2절(p.167)은 X 에서 X 로의 unitary operator 에 대해 U*U = UU* = I 라고 적는다. 이 항목은 (가)에서 (나)를 '정사각행렬의 한쪽 역' 항목으로 증명하고, (바)는 (나)를 전치행렬의 열로 읽은 것이다. (2)의 (사)와 (아)는 출처의 isometry 의 정의(p.146)와 Theorem 6.1 을 행렬의 사상에 쓴 것이다. (3)은 직교사상 항목의 (3)을 기저에 관한 행렬의 열로 옮긴 것이다. (4)의 곱은 출처 연습문제 6.4(p.150)이고, Q⁻¹ = Qᵀ 가 다시 직교행렬이라는 것은 출처 6.1 의 성질 2(p.148)의 행렬판이다. (5)는 Proposition 6.4 의 1 이고, 출처는 복소수 z 의 |z|² = z z̄ 로 증명하며 이 항목은 (det Q)² = 1 로 증명한다. (6)은 Proposition 6.4 의 2 를 실고윳값으로 좁힌 것이고, 출처는 ‖Ux‖ = |λ|‖x‖ 로 증명하며 이 항목은 절댓값 없이 λλ = 1 로 증명한다. 출처 6장 5절 Structure of orthogonal matrices 의 Theorem 5.3 의 증명(p.193)은 대각행렬인 직교행렬의 대각성분이 1 이나 −1 이라는 것을 '직교행렬의 고윳값은 1 이나 −1' 이라는 알려진 사실로 설명한다. 출처의 Remark(p.148)는 직교행렬의 고윳값이 실수가 아닐 수 있다며 회전행렬을 든다. 이 사이트는 고윳값을 실수로만 정의하므로 그런 행렬은 고윳값이 없는 행렬이다. 예시 '고윳값이 없는 2 × 2 직교행렬'은 그 Remark 와 같은 발상이다. 예시 '행 맞바꾸기 행렬'에서 n = 2 인 P_{1,2} 는 출처 연습문제 6.7 a)(p.150)의 둘째 행렬과 같고, 출처 3장 4절 연습문제 4.2(p.89)는 P_{j,k} 를 포함하는 치환행렬(permutation matrix)이 가역임을 보이고 그 역행렬을 설명하라고 한다. 예시 '3 × 3 직교행렬'에서 고윳값 1 이 나오는 것은 출처 연습문제 6.9 a)(p.151)가 행렬식이 1 인 3 × 3 직교행렬에서 증명하라고 하는 것과 같은 결론이다. 반례 '행렬식이 1 이지만 직교행렬이 아닌 예'는 출처 Proposition 6.4 의 1 의 역이 성립하지 않음을 보인다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(2 × 2 고유벡터의 계산 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $Q$가 $n \times n$ [[matrix|행렬]]이라 하자. $Q^T$는 [[transpose|전치행렬]], 곱은 [[matrix-product|행렬의 곱]], $I_n$은 단위행렬이다. $Q$가 **직교행렬**(orthogonal matrix)인 것은 정확히

$$
Q^T Q = I_n
$$

일 때이다. 아래에서 $\mathbb{R}^n$, $\mathbb{R}^m$, $\mathbb{R}^r$에는 [[standard-inner-product|표준내적]]을 주고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것, 정규직교 열은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 것, 직교사상은 [[orthogonal-map|직교사상]]의 것이다. $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이다.

1. (정규직교 열을 가진 행렬) $m$, $r$이 자연수이고 $U$가 $m \times r$ 행렬이며 $\mathbf{u}_1, \dots, \mathbf{u}_r$이 그 열이라 하자. 다음 넷은 서로 같다. (i) $U^T U = I_r$이다. (ii) $\mathbf{u}_1, \dots, \mathbf{u}_r$은 $\mathbb{R}^m$의 정규직교 열이다. (iii) $T_U : \mathbb{R}^r \to \mathbb{R}^m$은 직교사상이다. (iv) 모든 $x \in \mathbb{R}^r$에서 $\lVert Ux \rVert = \lVert x \rVert$이다. 이때 $r \le m$이고, $U U^T = I_m$인 것은 정확히 $r = m$일 때이다. 또 이때 $E = \operatorname{span}(\mathbf{u}_1, \dots, \mathbf{u}_r)$이면 $UU^T$는 [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 (4)의 (iii)에 의해 $E$로의 직교사영의 행렬 $[\operatorname{proj}_E]$이다.
2. (직교행렬의 판정) $Q$의 열을 $\mathbf{q}_1, \dots, \mathbf{q}_n$이라 하고, $j \in \{1, \dots, n\}$에 대하여 $Q$의 $j$번째 행을 $\mathbb{R}^n$의 원소로 본 것을 $r_j$라 하자. 다음 여덟 조건은 서로 같다.
   - (가) $Q^T Q = I_n$이다. 곧 $Q$는 직교행렬이다.
   - (나) $Q Q^T = I_n$이다.
   - (다) $Q$는 [[invertible-matrix|가역]]이고 $Q^{-1} = Q^T$이다.
   - (라) $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 정규직교 열이다.
   - (마) $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 [[orthonormal-basis|정규직교 기저]]이다.
   - (바) $r_1, \dots, r_n$은 $\mathbb{R}^n$의 정규직교 열이다.
   - (사) $T_Q : \mathbb{R}^n \to \mathbb{R}^n$은 직교사상이다.
   - (아) 모든 $x \in \mathbb{R}^n$에서 $\lVert Qx \rVert = \lVert x \rVert$이다.
3. (정규직교 기저에 관한 행렬) $V$, $W$가 [[inner-product-space|내적공간]]이고 $p$, $q$가 자연수이며 $\mathcal{B} = b_1, \dots, b_p$가 $V$의 정규직교 기저, $\mathcal{C} = c_1, \dots, c_q$가 $W$의 정규직교 기저, $T : V \to W$가 [[linear-map|선형사상]]이라 하자. [[matrix-in-bases|기저에 관한 선형사상의 행렬]] $M = [T]_{\mathcal{C}\mathcal{B}}$에 대하여, $T$가 직교사상인 것은 정확히 $M^T M = I_p$일 때이다. 특히 $p = q$이면 $T$가 직교사상인 것은 정확히 $[T]_{\mathcal{C}\mathcal{B}}$가 직교행렬일 때이다.
4. (전치, 역행렬, 곱) $Q$가 직교행렬이면 $Q^T = Q^{-1}$도 직교행렬이다. $Q_1$, $Q_2$가 $n \times n$ 직교행렬이면 $Q_1 Q_2$도 직교행렬이다.
5. (행렬식) $Q$가 직교행렬이면 [[determinant|행렬식]]에 대하여 $\det Q \cdot \det Q = 1$이고, $\det Q$는 $1$이거나 $-1$이다.
6. (실고윳값) $Q$가 직교행렬이고 실수 $\lambda$가 $Q$의 [[eigenvalue-and-eigenvector|고윳값]]이면 $\lambda = 1$이거나 $\lambda = -1$이다.
7. (작은 경우) $I_n$과 $-I_n$은 직교행렬이다. $1 \times 1$ 행렬 $\begin{pmatrix} q \end{pmatrix}$가 직교행렬인 것은 정확히 $q = 1$이거나 $q = -1$일 때이다.
:::

:::english
Let $n$ be a natural number and let $Q$ be an $n \times n$ matrix; $Q^T$ is the transpose, products are matrix products, and $I_n$ is the identity matrix. $Q$ is an **orthogonal matrix** exactly when

$$
Q^T Q = I_n.
$$

Below, $\mathbb{R}^n$, $\mathbb{R}^m$, $\mathbb{R}^r$ carry the standard inner product; norms are as in the entry on norms in inner product spaces, orthonormal sequences as in the entry on orthogonal and orthonormal sequences, and orthogonal maps as in the entry on orthogonal maps. $T_A$ is the linear map of item (2) of the entry on matrix-vector products.

1. (Matrices with orthonormal columns) Let $m$, $r$ be natural numbers, let $U$ be an $m \times r$ matrix and let $\mathbf{u}_1, \dots, \mathbf{u}_r$ be its columns. The following four are equivalent: (i) $U^T U = I_r$; (ii) $\mathbf{u}_1, \dots, \mathbf{u}_r$ is an orthonormal sequence in $\mathbb{R}^m$; (iii) $T_U : \mathbb{R}^r \to \mathbb{R}^m$ is an orthogonal map; (iv) $\lVert Ux \rVert = \lVert x \rVert$ for all $x \in \mathbb{R}^r$. In that case $r \le m$, and $U U^T = I_m$ exactly when $r = m$. Moreover, in that case, if $E = \operatorname{span}(\mathbf{u}_1, \dots, \mathbf{u}_r)$, then by item (4)(iii) of the entry on properties of orthogonal projections, $UU^T$ is the matrix $[\operatorname{proj}_E]$ of the orthogonal projection onto $E$.
2. (Criteria for orthogonal matrices) Let $\mathbf{q}_1, \dots, \mathbf{q}_n$ be the columns of $Q$, and for $j \in \{1, \dots, n\}$ let $r_j$ be the $j$th row of $Q$ regarded as an element of $\mathbb{R}^n$. The following eight conditions are equivalent.
   - (a) $Q^T Q = I_n$; that is, $Q$ is an orthogonal matrix.
   - (b) $Q Q^T = I_n$.
   - (c) $Q$ is invertible and $Q^{-1} = Q^T$.
   - (d) $\mathbf{q}_1, \dots, \mathbf{q}_n$ is an orthonormal sequence in $\mathbb{R}^n$.
   - (e) $\mathbf{q}_1, \dots, \mathbf{q}_n$ is an orthonormal basis of $\mathbb{R}^n$.
   - (f) $r_1, \dots, r_n$ is an orthonormal sequence in $\mathbb{R}^n$.
   - (g) $T_Q : \mathbb{R}^n \to \mathbb{R}^n$ is an orthogonal map.
   - (h) $\lVert Qx \rVert = \lVert x \rVert$ for all $x \in \mathbb{R}^n$.
3. (Matrices with respect to orthonormal bases) Let $V$, $W$ be inner product spaces, let $p$, $q$ be natural numbers, let $\mathcal{B} = b_1, \dots, b_p$ be an orthonormal basis of $V$, $\mathcal{C} = c_1, \dots, c_q$ an orthonormal basis of $W$, and $T : V \to W$ a linear map. For the matrix $M = [T]_{\mathcal{C}\mathcal{B}}$ with respect to the bases, $T$ is an orthogonal map exactly when $M^T M = I_p$. In particular, if $p = q$, then $T$ is an orthogonal map exactly when $[T]_{\mathcal{C}\mathcal{B}}$ is an orthogonal matrix.
4. (Transpose, inverse, product) If $Q$ is an orthogonal matrix, then $Q^T = Q^{-1}$ is also an orthogonal matrix. If $Q_1$, $Q_2$ are $n \times n$ orthogonal matrices, then $Q_1 Q_2$ is also an orthogonal matrix.
5. (Determinant) If $Q$ is an orthogonal matrix, then $\det Q \cdot \det Q = 1$ for its determinant, and $\det Q$ is $1$ or $-1$.
6. (Real eigenvalues) If $Q$ is an orthogonal matrix and a real number $\lambda$ is an eigenvalue of $Q$, then $\lambda = 1$ or $\lambda = -1$.
7. (Small cases) $I_n$ and $-I_n$ are orthogonal matrices. A $1 \times 1$ matrix $\begin{pmatrix} q \end{pmatrix}$ is an orthogonal matrix exactly when $q = 1$ or $q = -1$.
:::

## 직관

직교행렬은 그 행렬의 사상이 $\mathbb{R}^n$의 길이와 내적을 그대로 두는 정사각행렬입니다((2)의 (사), (아)). 정의 $Q^T Q = I_n$을 성분으로 읽으면 $(j, k)$ 성분이 $j$번째 열과 $k$번째 열의 내적이므로, 열들이 서로 직교하고 길이가 모두 $1$이라는 뜻입니다. 이름은 "직교"이지만 열이 직교하기만 해서는 안 되고 정규직교여야 합니다(반례).

정사각행렬에서는 한쪽 역이 곧 역행렬이므로 $Q^T Q = I_n$에서 $Q Q^T = I_n$이 나오고, 이것은 행들도 정규직교라는 뜻입니다((2)의 (나), (바)). 정사각이 아닌 $m \times r$ 행렬 $U$에서는 열이 정규직교여도 $U U^T$는 $r < m$이면 $I_m$이 아니고, $U$의 열이 생성하는 부분공간으로의 직교사영의 행렬입니다((1)).

$Q$가 길이를 바꾸지 않으므로 고유벡터 $x$를 $\lambda$배 한 $\lambda x$의 길이도 $x$의 길이와 같아야 하고, 그래서 실고윳값은 $1$이나 $-1$뿐입니다((6)). 그러나 직교행렬이 고윳값을 꼭 갖지는 않습니다(예시). 행렬식이 $1$이거나 $-1$이라는 (5)의 역은 성립하지 않습니다(반례).

## 성질의 증명

:::proof
아래에서 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호는 "표준내적의 (1)"처럼, [[orthogonal-map|직교사상]]의 번호는 "직교사상의 (1)"처럼 줄여 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 정수 $j$, $k$에 대해 "$j = k$일 때 $1$이고 $j \ne k$일 때 $0$"인 실수를 $\delta_{j,k}$로 줄여 쓴다(이 증명 안의 줄임이다). [[matrix|행렬]]의 (6)에 의해 $I_r$의 $(j, k)$ 성분은 $\delta_{j,k}$이다.

**(1)의 증명.** 표준내적의 (5)를 $A = B = U$에 쓰면 $U^T U$는 $r \times r$ 행렬이고 모든 $j, k \in \{1, \dots, r\}$에서 그 $(j, k)$ 성분은 $\langle \mathbf{u}_j, \mathbf{u}_k \rangle$이다. 행렬의 (2)에 의해 (i)은 모든 $j$, $k$에서 $\langle \mathbf{u}_j, \mathbf{u}_k \rangle = \delta_{j,k}$인 것과 같고, [[orthonormal-list|직교하는 열과 정규직교 열]]의 정의의 "곧" 꼴에 의해 이것은 (ii)와 같다.

[[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $\mathbb{R}^r$의 [[standard-basis|표준기저]] $e_1, \dots, e_r$에서 $T_U e_k = U e_k = \mathbf{u}_k$이다. [[orthonormal-basis|정규직교 기저]]의 (5)에 의해 $e_1, \dots, e_r$은 $\mathbb{R}^r$의 정규직교 기저이고 [[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^r$는 유한차원이다. (iii)이면 직교사상의 (3)의 앞 문장에 의해 $T_U e_1, \dots, T_U e_r$, 곧 $\mathbf{u}_1, \dots, \mathbf{u}_r$이 정규직교 열이므로 (ii)이다. (ii)이면 $T_U e_1, \dots, T_U e_r$이 정규직교 열이므로 직교사상의 (3)의 뒤 문장에 의해 (iii)이다. (iii)과 (iv)가 같다는 것은 직교사상의 (1)이다.

이제 (i)–(iv)가 성립한다고 하자. 차원의 (4)에 의해 $\dim \mathbb{R}^r = r$, $\dim \mathbb{R}^m = m$이므로 직교사상의 (4)에 의해 $r \le m$이다. $r = m$이면 $U$는 정사각행렬이고 $U^T U = I_m$이므로 [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (1)에 의해 $U U^T = I_m$이다. 거꾸로 $U U^T = I_m$이라 하자. 모든 $x \in \mathbb{R}^m$에서 행렬과 벡터의 곱의 (3)과 행렬의 곱의 (1)에 의해 $x = I_m x = (U U^T) x = U(U^T x)$이므로 $x$는 $T_U$의 상에 속하고, 행렬과 벡터의 곱의 (6)에 의해 $x \in \operatorname{span}(\mathbf{u}_1, \dots, \mathbf{u}_r)$이다. 곧 $\mathbf{u}_1, \dots, \mathbf{u}_r$은 $\mathbb{R}^m$을 [[linear-combination-and-span|생성]]한다. 정규직교 열은 직교하는 열과 정규직교 열의 (2)에 의해 [[linear-independence|일차독립]]이므로, [[basis-iff-independent-and-spanning|일차독립이고 생성하는 열은 기저]]에 의해 이 열은 $\mathbb{R}^m$의 기저이고, 차원의 (2)에 의해 그 길이 $r$은 $\dim \mathbb{R}^m = m$과 같다. 마지막 문장은 [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 (4)를 $V = \mathbb{R}^m$과 정규직교 열 $\mathbf{u}_1, \dots, \mathbf{u}_r$에 쓴 것이다.

**(2)의 증명.** (가), (라), (사), (아)가 서로 같다는 것은 (1)을 $m = r = n$, $U = Q$에 쓴 것이다. (가)와 (나)는 정사각행렬의 한쪽 역의 (1)에 의해 서로 같다. (가)와 (나)가 함께 성립하면 [[invertible-matrix|가역행렬과 역행렬]]의 정의와 (1)에 의해 $Q$는 가역이고 $Q^{-1} = Q^T$이므로 (다)이다. (다)이면 가역행렬과 역행렬의 (1)에 의해 $Q^T Q = Q^{-1} Q = I_n$이므로 (가)이다.

(라)이면 정규직교 기저의 (1)에 의해, 길이 $n = \dim \mathbb{R}^n$인 정규직교 열 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 정규직교 기저이므로 (마)이다. (마)이면 정규직교 기저의 정의에 의해 (라)이다.

(나)와 (바)를 보자. [[transpose|전치행렬]]의 (2)에 의해 $Q^T$의 $j$번째 열은 $Q$의 $j$번째 행 $r_j$이고, 전치행렬의 (1)에 의해 $(Q^T)^T = Q$이다. 따라서 (나)는 $(Q^T)^T Q^T = I_n$이고, (1)의 (i)과 (ii)가 같다는 것을 $U = Q^T$에 쓰면 이것은 $Q^T$의 열 $r_1, \dots, r_n$이 정규직교 열이라는 것, 곧 (바)와 같다.

**(3)의 증명.** [[dimension|유한차원과 차원]]의 (1)에 의해 $V$, $W$는 유한차원이고 기저에 관한 선형사상의 행렬의 진술에 의해 $M$은 $q \times p$ 행렬이다. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (2)에 의해 $M$의 $k$번째 열은 $[Tb_k]_{\mathcal{C}}$이다. 정규직교 기저의 (3)을 $W$와 $\mathcal{C}$에 쓰면 모든 $j, k \in \{1, \dots, p\}$에서

$$
\langle [Tb_j]_{\mathcal{C}}, [Tb_k]_{\mathcal{C}} \rangle = \langle Tb_j, Tb_k \rangle
$$

이다. 왼쪽은 $\mathbb{R}^q$의 표준내적이다. 따라서 $M$의 열이 $\mathbb{R}^q$의 정규직교 열인 것은 정확히 $Tb_1, \dots, Tb_p$가 $W$의 정규직교 열일 때이다. (1)의 (i)과 (ii)에 의해 앞의 것은 $M^T M = I_p$와 같다. 뒤의 것은 직교사상의 (3)에 의해 $T$가 직교사상인 것과 같다(앞 문장은 $\mathcal{B}$가 정규직교 열이므로 $T$가 직교사상이면 $Tb_1, \dots, Tb_p$가 정규직교 열이라는 것, 뒤 문장은 그 역이다). $p = q$이면 $M$은 $p \times p$ 행렬이므로 마지막 문장은 직교행렬의 정의이다.

**(4)의 증명.** $Q$가 직교행렬이면 (2)의 (다)에 의해 $Q^T = Q^{-1}$이고, (2)의 (나)와 전치행렬의 (1)에 의해 $(Q^T)^T Q^T = Q Q^T = I_n$이므로 $Q^T$는 직교행렬이다. $Q_1$, $Q_2$가 직교행렬이면 전치행렬의 (4)와 [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)에 의해

$$
\begin{aligned}
&(Q_1 Q_2)^T (Q_1 Q_2) \\
&= Q_2^T (Q_1^T Q_1) Q_2 = Q_2^T I_n Q_2 \\
&= Q_2^T Q_2 = I_n
\end{aligned}
$$

이다.

**(5)의 증명.** $d = \det Q$라 하자. [[determinant-of-product|곱의 행렬식]]의 (1), [[determinant-of-transpose|전치행렬의 행렬식]]의 (1), [[determinant|행렬식]]의 (1)의 (iii)에 의해 $dd = \det Q^T \cdot \det Q = \det(Q^T Q) = \det I_n = 1$이다. (K3), (K12)의 (i), (ii)와 (K1), (K2)로 $(d - 1)(d + 1) = dd + d - d - 1 = dd - 1 = 0$이므로((K12)의 (v)), (K10)에 의해 $d - 1 = 0$이거나 $d + 1 = 0$이다. 곧 $d = 1$이거나 $d = -1$이다.

**(6)의 증명.** $\lambda$가 고윳값이면 $Qx = \lambda x$이고 $x \ne 0$인 $x \in \mathbb{R}^n$이 있다. (2)의 (사)에 의해 $T_Q$는 직교사상이므로 [[inner-product-space|내적과 내적공간]]의 (1)과 (K2)에 의해 $\langle x, x \rangle = \langle Qx, Qx \rangle = \langle \lambda x, \lambda x \rangle = (\lambda\lambda) \langle x, x \rangle$이다. 내적의 조건 (iii)에 의해 $\langle x, x \rangle \ne 0$이므로 (K4), (K1)과 (K11)에 의해 $\lambda\lambda = 1$이다. (5)의 증명의 마지막 두 문장을 $d = \lambda$에 쓰면 $\lambda = 1$이거나 $\lambda = -1$이다.

**(7)의 증명.** 전치행렬의 (3)과 행렬 곱의 성질의 (4)에 의해 $I_n^T I_n = I_n I_n = I_n$이다. 전치행렬의 (1)과 행렬 곱의 성질의 (3), (4)에 의해 $(-I_n)^T (-I_n) = ((-1)I_n)((-1)I_n) = ((-1)(-1))(I_n I_n) = 1 I_n = I_n$이다((K12)의 (iii), [[vector-space|벡터공간]]의 (V5)와 행렬의 (1)). $1 \times 1$ 행렬 $C = \begin{pmatrix} q \end{pmatrix}$에서 $C^T = C$이고, [[matrix-product|행렬의 곱]]의 (2)와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $C^T C$의 하나뿐인 성분은 $qq$이다. 행렬의 (2)와 (6)에 의해 $C^T C = I_1$인 것은 정확히 $qq = 1$일 때이고, (5)의 증명의 마지막 두 문장에 의해 $qq = 1$이면 $q = 1$이거나 $q = -1$이다. 거꾸로 $q = 1$이거나 $q = -1$이면 (K4)와 (K12)의 (iii)에 의해 $qq = 1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[행 맞바꾸기 행렬]
$n \ge 2$이고 $j \ne k$인 $j, k \in \{1, \dots, n\}$에 대하여 [[elementary-matrix|기본행렬]]의 $n \times n$ 행렬 $P_{j,k}$를 봅시다. 그 항목의 $\tau$는 $j$를 $k$로, $k$를 $j$로 보내고 나머지는 그대로 두는 함수이고, 경우를 나누어 보면 모든 $p$에서 $\tau(\tau(p)) = p$입니다. 기본행렬의 (5)와 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $P_{j,k}$의 $q$번째 열은 $P_{j,k} e_q = e_{\tau(q)}$입니다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_{\tau(p)}, e_{\tau(q)} \rangle$는 $\tau(p) = \tau(q)$일 때 $1$, 아닐 때 $0$이고, $\tau(p) = \tau(q)$이면 $p = \tau(\tau(p)) = \tau(\tau(q)) = q$이므로 이 값은 $p = q$일 때 $1$, $p \ne q$일 때 $0$입니다. 따라서 열이 정규직교 열이고, (2)에 의해 $P_{j,k}$는 직교행렬입니다.

이것은 기본행렬의 (3)의 $P_{j,k} P_{j,k} = I_n$, [[determinant-of-transpose|전치행렬의 행렬식]]의 (2)의 $P_{j,k}^T = P_{j,k}$와 맞습니다. [[determinant|행렬식]]의 (5)에 의해 $\det P_{j,k} = -1$이므로 (5)의 $-1$ 쪽이 실제로 나옵니다. (4)에 의해 이런 행렬 여럿의 곱도 직교행렬입니다.
:::

:::example[3 × 3 직교행렬]
$$
Q = 3^{-1} \begin{pmatrix} 2 & -1 & 2 \\ 2 & 2 & -1 \\ -1 & 2 & 2 \end{pmatrix}
$$

이라 합시다. 열은 $\mathbf{q}_1 = 3^{-1}(2, 2, -1)$, $\mathbf{q}_2 = 3^{-1}(-1, 2, 2)$, $\mathbf{q}_3 = 3^{-1}(2, -1, 2)$입니다. 표준내적으로 계산하면

$$
\begin{aligned}
\langle \mathbf{q}_1, \mathbf{q}_1 \rangle &= 9^{-1}(4 + 4 + 1) = 1, \\
\langle \mathbf{q}_1, \mathbf{q}_2 \rangle &= 9^{-1}(-2 + 4 - 2) = 0, \\
\langle \mathbf{q}_1, \mathbf{q}_3 \rangle &= 9^{-1}(4 - 2 - 2) = 0, \\
\langle \mathbf{q}_2, \mathbf{q}_3 \rangle &= 9^{-1}(-2 - 2 + 4) = 0
\end{aligned}
$$

이고, 같은 방식으로 $\langle \mathbf{q}_2, \mathbf{q}_2 \rangle = \langle \mathbf{q}_3, \mathbf{q}_3 \rangle = 9^{-1} \cdot 9 = 1$입니다. 내적의 조건 (i)에 의해 나머지 세 쌍도 $0$이므로 열이 정규직교 열이고, (2)에 의해 $Q$는 직교행렬입니다. $v = (1, 1, 1)$로 두면 행렬과 벡터의 곱의 (1)(행 규칙)에 의해 $Qv$의 세 값은 $3^{-1}(2 - 1 + 2)$, $3^{-1}(2 + 2 - 1)$, $3^{-1}(-1 + 2 + 2)$로 모두 $1$이므로 $Qv = v$이고, $v \ne 0$이므로 $1$은 $Q$의 고윳값입니다. 또 행렬식의 (4)의 $3 \times 3$ 식으로 괄호 안의 행렬의 행렬식은 $2 \cdot 6 - 2 \cdot (-6) + (-1)(-3) = 27$이고, [[determinant-of-product|곱의 행렬식]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $\det Q = (3^{-1})^3 \cdot 27 = (3^3)^{-1} \cdot 27 = 27^{-1} \cdot 27 = 1$입니다.
:::

:::example[고윳값이 없는 2 × 2 직교행렬]
$$
Q = \begin{pmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{pmatrix}
$$

이라 합시다. 열 $(3/5, 4/5)$와 $(-4/5, 3/5)$에서 $9/25 + 16/25 = 1$, $16/25 + 9/25 = 1$, $(3/5)(-4/5) + (4/5)(3/5) = 0$이므로 (2)에 의해 $Q$는 직교행렬입니다. 행렬식의 (4)에 의해 $\det Q = 9/25 + 16/25 = 1$이고 $\operatorname{tr} Q = 6/5$이므로 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 판별식은 $\operatorname{disc} Q = 36/25 - 4 = -64/25 < 0$입니다. 그 항목의 (2)에 의해 $Q$에는 고윳값이 없습니다. 따라서 (6)은 "고윳값이 있으면 $1$이나 $-1$"이라는 말이고, 고윳값이 있다고 말하지는 않습니다.
:::

:::counterexample[열이 서로 직교하지만 직교행렬이 아닌 예]
$$
A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
$$

의 두 열 $(1, 1)$과 $(1, -1)$은 내적이 $1 - 1 = 0$이어서 직교합니다. 그러나 각 열과 자기 자신의 내적은 $2$이므로 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $A^T A = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \ne I_2$이고, $A$는 직교행렬이 아닙니다. 열이 직교할 뿐 아니라 단위벡터여야 합니다.
:::

:::counterexample[행렬식이 1 이지만 직교행렬이 아닌 예]
$$
B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
$$

이라 합시다. 행렬식의 (4)에 의해 $\det B = 1 \cdot 1 - 0 \cdot 1 = 1$입니다. 그러나 둘째 열 $(1, 1)$과 자기 자신의 내적은 $2$이므로 열이 정규직교 열이 아니고, (2)에 의해 $B$는 직교행렬이 아닙니다. 따라서 (5)의 역은 성립하지 않습니다.
:::

## 확인 질문

:::check[$Q$가 직교행렬이면 $-Q$도 직교행렬인가?]
그렇습니다. [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B5)에 의해 $-Q = (-1)Q$이고 [[transpose|전치행렬]]의 (1)에 의해 $(-Q)^T = (-1)Q^T$이며, [[matrix-product-properties|행렬 곱의 성질]]의 (3)에 의해 $(-Q)^T(-Q) = ((-1)(-1))(Q^T Q) = 1 I_n = I_n$입니다. (7)의 $-I_n$은 $Q = I_n$인 경우입니다.
:::

:::check[열이 정규직교인 $3 \times 2$ 행렬 $U$에서 $U U^T = I_3$일 수 있는가?]
없습니다. (1)을 $m = 3$, $r = 2$에 쓰면 $U^T U = I_2$이고, $U U^T = I_3$인 것은 정확히 $r = m$일 때인데 $2 \ne 3$입니다. 다른 길로도 볼 수 있습니다. $U U^T = I_3$이면 [[transpose|전치행렬]]의 (1)에 의해 $(U^T)^T U^T = I_3$이므로 (1)을 $2 \times 3$ 행렬 $U^T$에 쓸 수 있고, 그러면 $3 \le 2$가 되어야 합니다.
:::
