---
title: 특잇값 분해
title_en: Singular Value Decomposition
aliases: [SVD, 축소 특잇값 분해, 슈미트 분해, singular value decomposition, reduced singular value decomposition, Schmidt decomposition]
kind: theorem
field: linear-algebra
msc: ["15A18", "15A23"]
level: undergrad
summary: 모든 m × n 행렬 A 는 m × m 직교행렬 W, n × n 직교행렬 V, 처음 r 개의 대각성분만 양수이고 나머지 성분이 모두 0 인 m × n 행렬 Σ 로 A = WΣVᵀ 로 쓸 수 있고, 이때 r 은 A 의 계수이다. AᵀA 를 A 의 핵의 직교 여공간에 제한해 스펙트럼 정리를 쓰면 양수인 고윳값이 저절로 앞에 오므로 크기순으로 늘어놓지 않고 만든다. 분해의 열들은 Avₖ = σₖwₖ, Aᵀwₖ = σₖvₖ 를 만족하고, A 의 핵과 열공간의 정규직교 기저가 된다.
requires: [real-number-arithmetic, prime-number, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, dimension, subspace, dimension-of-subspace, extension-to-a-basis, standard-basis, linear-map, kernel-and-range, rank-and-nullity, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, rank-of-a-matrix, eigenvalue-and-eigenvector, diagonalizable, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthonormal-basis, orthonormal-basis-exists, orthogonal-complement, kernel-of-transpose-product, self-adjoint-map, invariant-subspaces-of-self-adjoint-map, orthogonal-matrix, spectral-theorem, positive-definite-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 3절 Polar and singular value decompositions 의 3.3 Singular values. Schmidt decomposition. 의 Proposition 3.6, 식 (3.1)(3.2), Lemma 3.7, Corollary 3.8, pp.173–175, 3.4 Matrix representation of the Schmidt decomposition. Singular value decomposition. 의 식 (3.3)–(3.5), Definition 3.9, Remark 3.10, pp.175–177, 같은 절 연습문제 3.1, 3.3, 3.4, pp.177–178; 6장 4절 Applications of the singular value decomposition 의 첫 단락, p.179, 4.1 Image of the unit ball. 의 셋째 단락, p.180, 연습문제 4.4, p.187
    checked: original
    note: "분해의 정의와 (3)은 출처 6장 3절의 식 (3.4)(3.5)(p.176: A = WΣV*, V 와 W 는 열이 v₁, …, vₙ 과 w₁, …, w_m 인 유니터리 행렬, Σ 는 j = k ≤ r 에서 σ_k 이고 그 밖에서 0 인 '대각' m × n 행렬)를 실수 행렬로 옮긴 것이다. 출처의 Definition 3.9(p.176)는 특잇값 분해를 '(3.4) 꼴의 분해'라 하면서 Σ 에 대해서는 대각성분이 0 이상이고 대각 밖의 성분이 0 이라는 것만 적고 양수인 대각성분이 앞에 온다는 조건은 적지 않는다. 이 항목은 식 (3.5)의 꼴, 곧 처음 r 개의 대각성분이 양수이고 나머지가 0 인 것만 특잇값 분해라 부른다(반례 '음이 아닌 대각행렬이 Σ 의 꼴이 아닐 수 있는 예'). Definition 3.9 의 행렬 크기 'W ∈ M_{n×n}, V ∈ M_{m×m}' 과 축소형의 'W̃ ∈ M_{n×r}, Ṽ ∈ M_{m×r}'(p.177)는 같은 쪽의 (3.4)와 뒤바뀌어 있고, 이 항목은 (3.4)의 크기를 따른다. 존재의 증명은 출처와 다르다. 출처(p.173)는 특잇값을 중복도를 세어 σ₁, …, σₙ 으로 늘어놓고 0 이 아닌 것이 σ₁, …, σ_r 이라고 놓은 뒤 A*A 의 정규직교 고유기저를 잡는다(그런 기저가 있다는 것은 p.174 의 각주). 이 항목은 AᵀA 를 Ker T_A 의 직교 여공간에 제한해 스펙트럼 정리를 쓰므로 양수인 고윳값에 속하는 고유벡터가 저절로 앞 r 자리에 오고, 늘어놓는 순서를 바꾸는 일이 없다. v_{r+1}, …, vₙ 을 Ker T_A 의 정규직교 기저로 잡는 것은 출처(p.176)가 v₁, …, v_r 을 Ker Ṽ* 의 정규직교 기저로 늘리라고 적은 것과 같은 일이다. wₖ = σₖ⁻¹Avₖ 가 정규직교라는 계산은 출처 Proposition 3.6(p.174)과 같다. (5)는 출처의 식 (3.2)(p.174, 출처는 이것을 Schmidt decomposition 이라 부른다)이고, 출처는 양변에 기저 vⱼ 를 넣어 확인하며 이 항목은 양변과 wⱼ 의 내적을 비교한다. (6)은 출처의 식 (3.3)(p.176)과 그 뒤의 reduced 또는 compact SVD 이다(출처는 W̃ 와 Ṽ 가운데 적어도 하나가 정사각이 아니기를 요구하지만 이 항목은 그런 조건을 두지 않는다). (4)의 (i)은 출처 Corollary 3.8(p.175: A* 의 슈미트 분해)과 연습문제 3.3(p.178: 가역인 A 의 특잇값 분해에서 A* 와 A⁻¹ 의 특잇값 분해를 구하라)과 같은 내용이다. (4)의 (ii), (iii)은 출처 Remark 3.10(p.177: 분해의 열 vₖ 는 A*A 의 고유벡터이고 σₖ ≠ 0 이면 wₖ = σₖ⁻¹Avₖ)과 같은 내용이다. (4)의 (iv)의 r = rank A 는 출처 p.176 이 연습문제 3.1(p.177)을 가리키며 적는 것이고, 같은 절 연습문제 3.10(p.178)도 같은 것을 묻는다. 열공간과 핵의 직교 여공간의 기술은 출처 6장 4절 연습문제 4.4(p.187: Ran A = Ran W̃, Ran A* = Ran Ṽ)와 같은 내용이다. (7)의 (ii)는 출처 p.176 의 '가역이면 m = n = r' 이다. 직관 절의 '정의역과 공역에 정규직교 기저를 따로 하나씩 고른다'는 출처 6장 4절 첫 단락(p.179: 특잇값 분해는 서로 다른 두 정규직교 기저에 관한 대각화이다), Remark 3.11(p.177: Σ 는 두 정규직교 기저에 관한 A 의 행렬이다)과 4.1 의 셋째 단락(p.180)과 같은 설명이다. 예시 '2 × 3 행렬의 분해와 늘어놓는 순서'는 출처 연습문제 3.4 b)(p.178)가 2 × 3 행렬 (3 2 2; 2 3 −2) 의 특잇값 분해를 구하라는 것과 같은 물음이다. 반례 'Σ 의 대각성분이 고윳값이 아닌 예'는 출처 6장 4절 첫 단락(p.179: (3.5)의 Σ 의 대각성분은 A 의 고윳값이 아니다)과 연습문제 3.7 a)(p.178: 특잇값은 행렬의 고윳값이기도 한가)와 같은 결론이다. 확인 질문 '$(W, \\Sigma, V)$가 $A$의 특잇값 분해이면 $-A$의 특잇값 분해 하나는 무엇인가?'는 출처 연습문제 3.7 c)(p.178: s 가 A 의 특잇값이면 |c|s 는 cA 의 특잇값인가)와 스칼라배를 묻는다는 점에서 닮았다. 확인 질문 '$3 \\times 5$ 행렬 $A$의 특잇값 분해에서 $r$은 얼마 이하이고 $\\operatorname{Ker} T_A$의 차원은 얼마인가?'는 연습문제 3.1 의 r = rank A 를 쓴다. 확인 질문 '$1 \\times 1$ 행렬 $A = \\begin{pmatrix} a \\end{pmatrix}$의 특잇값 분해는 하나로 정해지는가?'는 출처 3.3 의 Remark(p.174: 'Schmidt decomposition of an operator is not unique. Why?')와 같은 물음을 가장 작은 행렬에서 본 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(존재 증명의 불변 부분공간 단계 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\mathbb{R}^n$, $\mathbb{R}^m$과 자연수 $r$에 대한 $\mathbb{R}^r$에는 [[standard-inner-product|표준내적]]을 준다. $A^T$는 [[transpose|전치행렬]], 곱은 [[matrix-product|행렬의 곱]], 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것이고, $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상, $\operatorname{Ker}$는 [[kernel-and-range|핵과 상]]의 것, $\operatorname{Col} A$와 $\operatorname{rank} A$는 [[rank-of-a-matrix|행렬의 계수]]의 것, $S^\perp$는 [[orthogonal-complement|직교 여공간]]의 것, $\operatorname{span}$은 [[linear-combination-and-span|생성]]의 것, $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이며, $e_k$는 [[standard-basis|표준기저]]의 항이다. 실수 $\sigma$에 대하여 $\sigma^2 = \sigma\sigma$는 [[power-of-a-real-number|실수의 거듭제곱]]이다. **이 항목에서 $V$, $W$, $\Sigma$는 행렬의 이름이다.** $V$, $W$는 벡터공간을 가리키지 않고, $\Sigma$는 합의 기호가 아니다. 행렬 $V$, $W$의 $k$번째 열은 [[matrix|행렬]]의 약속대로 $\mathbf{v}_k$, $\mathbf{w}_k$로 쓴다.

**$r$과 $\sigma$로 만든 행렬.** $r$이 $0 \le r$, $r \le m$, $r \le n$인 정수이고 $\sigma_1, \dots, \sigma_r$이 모든 항이 양수인 길이 $r$인 실수의 열이라 하자. $(j, k)$ 성분이 $j = k \le r$일 때 $\sigma_k$이고 그 밖일 때 $0$인 $m \times n$ 행렬을 **$r$과 $\sigma_1, \dots, \sigma_r$로 만든 $m \times n$ 행렬**이라 한다([[real-function-space|(G)]]와 행렬의 (2)에 의해 정확히 하나 있다). $r = 0$이면 그것은 영행렬이다.

**특잇값 분해.** $W$가 $m \times m$ 직교행렬, $V$가 $n \times n$ 직교행렬이고, $\Sigma$가 어떤 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $m \times n$ 행렬이며 $A = W \Sigma V^T$일 때, 세 행렬의 짝 $(W, \Sigma, V)$를 $A$의 **특잇값 분해**(singular value decomposition)라 한다. 아래 (1)의 (i)에 의해 $r$과 $\sigma_1, \dots, \sigma_r$은 $\Sigma$로 정해지므로, 이것을 그 분해의 $r$과 $\sigma$라 부른다.

1. ($\Sigma$의 꼴) $\Sigma$가 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $m \times n$ 행렬이라 하자.
   - (i) $\Sigma$가 $r'$과 $\sigma'_1, \dots, \sigma'_{r'}$으로 만든 $m \times n$ 행렬이기도 하면 $r = r'$이고 모든 $k$에서 $\sigma_k = \sigma'_k$이다.
   - (ii) $1 \le k \le r$이면 $\Sigma$의 $k$번째 열은 $\sigma_k e_k$($e_k \in \mathbb{R}^m$)이고, $r < k \le n$이면 $\Sigma$의 $k$번째 열은 영벡터이다.
   - (iii) $\Sigma^T$는 같은 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $n \times m$ 행렬이다.
   - (iv) $\Sigma^T \Sigma = \operatorname{diag}(d_1, \dots, d_n)$이고 $\Sigma \Sigma^T = \operatorname{diag}(d'_1, \dots, d'_m)$이다. 여기서 $d_k$와 $d'_k$는 $k \le r$일 때 $\sigma_k^2$이고 $k > r$일 때 $0$이다.
   - (v) $m = n$이면 $\Sigma = \operatorname{diag}(\delta_1, \dots, \delta_n)$이고 $\Sigma^T = \Sigma$이다. 여기서 $\delta_k$는 $k \le r$일 때 $\sigma_k$이고 $k > r$일 때 $0$이다.
2. (열로 쓴 판정) $W$가 $m \times m$ 직교행렬, $V$가 $n \times n$ 직교행렬이고 $\Sigma$가 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $m \times n$ 행렬이라 하자. $A = W \Sigma V^T$인 것은 정확히 다음 두 조건이 모두 성립할 때이다.
   - $1 \le k \le r$인 모든 $k$에서 $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$이다.
   - $r < k \le n$인 모든 $k$에서 $A\mathbf{v}_k = 0$이다.
3. (존재) $A$에는 특잇값 분해가 있다.
4. (분해의 성질) $(W, \Sigma, V)$가 $A$의 특잇값 분해이고 그 $r$과 $\sigma$가 $r$과 $\sigma_1, \dots, \sigma_r$이라 하자.
   - (i) ($A^T$의 분해) $(V, \Sigma^T, W)$는 $n \times m$ 행렬 $A^T$의 특잇값 분해이고 그 $r$과 $\sigma$는 같다.
   - (ii) (열의 관계) $1 \le k \le r$이면 $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$, $A^T \mathbf{w}_k = \sigma_k \mathbf{v}_k$이고 $\mathbf{w}_k = \sigma_k^{-1} A\mathbf{v}_k$이다. $r < k \le n$이면 $A\mathbf{v}_k = 0$이고, $r < j \le m$이면 $A^T \mathbf{w}_j = 0$이다.
   - (iii) ($A^T A$와 $A A^T$) $1 \le k \le r$이면 $A^T A \mathbf{v}_k = \sigma_k^2 \mathbf{v}_k$이고 $A A^T \mathbf{w}_k = \sigma_k^2 \mathbf{w}_k$이다. 곧 $\mathbf{v}_k$와 $\mathbf{w}_k$는 각각 $\sigma_k^2$에 속하는 $A^T A$와 $A A^T$의 고유벡터이다. $r < k \le n$이면 $A^T A \mathbf{v}_k = 0$이고, $r < j \le m$이면 $A A^T \mathbf{w}_j = 0$이다.
   - (iv) (계수와 세 부분공간) $r = \operatorname{rank} A$이다. 따라서 $A$가 영행렬인 것은 정확히 $r = 0$일 때이고, $m = 1$이거나 $n = 1$이면 $r \le 1$이다. 또 $k$번째 항이 $\mathbf{v}_{r+k}$인 길이 $n - r$인 열을 $\mathbf{v}_{r+1}, \dots, \mathbf{v}_n$으로 쓰면 $\operatorname{Ker} T_A = \operatorname{span}(\mathbf{v}_{r+1}, \dots, \mathbf{v}_n)$이고, $(\operatorname{Ker} T_A)^\perp = \operatorname{span}(\mathbf{v}_1, \dots, \mathbf{v}_r)$이며, $\operatorname{Col} A = \operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r)$이다. $r = n$이면 첫째 생성은 빈 열의 생성 $\{0\}$이고, $r = 0$이면 둘째와 셋째 생성이 그렇다.
5. (슈미트 꼴) (4)의 분해에서 모든 $x \in \mathbb{R}^n$에 대하여
   $$
   \begin{aligned}
   Ax &= \sigma_1 \langle x, \mathbf{v}_1 \rangle \mathbf{w}_1 + \cdots \\
   &\quad + \sigma_r \langle x, \mathbf{v}_r \rangle \mathbf{w}_r
   \end{aligned}
   $$
   이다. 오른쪽은 $k$번째 항이 $(\sigma_k \langle x, \mathbf{v}_k \rangle)\mathbf{w}_k$인 길이 $r$인 열의 합이고, $r = 0$이면 영벡터이다.
6. (축소형) (4)의 분해에서 $r \ge 1$이라 하자. $k$번째 열이 $\mathbf{v}_k$인 $n \times r$ 행렬을 $\widetilde{V}$, $k$번째 열이 $\mathbf{w}_k$인 $m \times r$ 행렬을 $\widetilde{W}$, $r \times r$ 행렬 $\operatorname{diag}(\sigma_1, \dots, \sigma_r)$을 $\widetilde{\Sigma}$라 하면
   $$
   \begin{aligned}
   A &= \widetilde{W} \widetilde{\Sigma} \widetilde{V}^T, \\
   I_r &= \widetilde{V}^T \widetilde{V} = \widetilde{W}^T \widetilde{W}
   \end{aligned}
   $$
   이다.
7. (특별한 경우)
   - (i) $A$가 영행렬이면, 모든 $m \times m$ 직교행렬 $W$와 $n \times n$ 직교행렬 $V$에 대하여 $(W, A, V)$는 $r = 0$인 $A$의 특잇값 분해이다.
   - (ii) $m = n$이고 $(W, \Sigma, V)$가 $A$의 특잇값 분해이면, $A$가 [[invertible-matrix|가역]]인 것은 정확히 그 분해의 $r$이 $n$일 때이고, 그때 $\Sigma = \operatorname{diag}(\sigma_1, \dots, \sigma_n)$이다.
   - (iii) $Q$가 $n \times n$ 직교행렬이면 $(Q, I_n, I_n)$은 $r = n$이고 모든 $\sigma_k$가 $1$인 $Q$의 특잇값 분해이다. 또 $Q$의 모든 특잇값 분해에서 $r = n$이고 모든 $k$에서 $\sigma_k = 1$이다.
   - (iv) $m = n$이고 $A = QDQ^T$이며, $Q$가 $n \times n$ 직교행렬, $D = \operatorname{diag}(d_1, \dots, d_n)$이고, $0 \le r \le n$인 정수 $r$이 있어 $k \le r$이면 $0 < d_k$, $k > r$이면 $d_k = 0$이라 하자. 그러면 $(Q, D, Q)$는 $r$과 $d_1, \dots, d_r$을 $r$과 $\sigma$로 갖는 $A$의 특잇값 분해이다. 특히 $A$가 [[positive-definite-matrix|양의 정부호]]인 대칭행렬이면 $A = QDQ^T$인 모든 직교행렬 $Q$와 대각행렬 $D$에 대하여 $(Q, D, Q)$는 $r = n$인 $A$의 특잇값 분해이다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. Give $\mathbb{R}^n$, $\mathbb{R}^m$ and, for a natural number $r$, $\mathbb{R}^r$ the standard inner product. $A^T$ is the transpose, products are matrix products, orthogonal matrices are those of the entry on orthogonal matrices, $T_A$ is the linear map of item (2) of the entry on the product of a matrix and a vector, $\operatorname{Ker}$ is that of the entry on kernel and range, $\operatorname{Col} A$ and $\operatorname{rank} A$ are those of the entry on the rank of a matrix, $S^\perp$ is that of the entry on orthogonal complements, $\operatorname{span}$ is that of the entry on span, $\operatorname{diag}$ is that of the entry on diagonalizability, eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors, and $e_k$ is a term of the standard basis. For a real number $\sigma$, $\sigma^2 = \sigma\sigma$ is the power of a real number. **In this entry $V$, $W$, $\Sigma$ are names of matrices.** $V$, $W$ do not denote vector spaces, and $\Sigma$ is not a summation sign. Following the convention of the entry on matrices, the $k$-th columns of $V$ and $W$ are written $\mathbf{v}_k$ and $\mathbf{w}_k$.

**The matrix made from $r$ and $\sigma$.** Let $r$ be an integer with $0 \le r$, $r \le m$, $r \le n$, and let $\sigma_1, \dots, \sigma_r$ be a sequence of real numbers of length $r$ all of whose terms are positive. The $m \times n$ matrix whose $(j, k)$ entry is $\sigma_k$ when $j = k \le r$ and $0$ otherwise is called **the $m \times n$ matrix made from $r$ and $\sigma_1, \dots, \sigma_r$** (by (G) and item (2) of the entry on matrices there is exactly one). If $r = 0$ it is the zero matrix.

**Singular value decomposition.** When $W$ is an $m \times m$ orthogonal matrix, $V$ is an $n \times n$ orthogonal matrix, $\Sigma$ is the $m \times n$ matrix made from some $r$ and $\sigma_1, \dots, \sigma_r$, and $A = W \Sigma V^T$, the triple of matrices $(W, \Sigma, V)$ is called a **singular value decomposition** of $A$. By (1)(i) below, $r$ and $\sigma_1, \dots, \sigma_r$ are determined by $\Sigma$, so we call them the $r$ and $\sigma$ of the decomposition.

1. (The shape of $\Sigma$) Let $\Sigma$ be the $m \times n$ matrix made from $r$ and $\sigma_1, \dots, \sigma_r$.
   - (i) If $\Sigma$ is also the $m \times n$ matrix made from $r'$ and $\sigma'_1, \dots, \sigma'_{r'}$, then $r = r'$ and $\sigma_k = \sigma'_k$ for every $k$.
   - (ii) If $1 \le k \le r$, the $k$-th column of $\Sigma$ is $\sigma_k e_k$ ($e_k \in \mathbb{R}^m$), and if $r < k \le n$, the $k$-th column of $\Sigma$ is the zero vector.
   - (iii) $\Sigma^T$ is the $n \times m$ matrix made from the same $r$ and $\sigma_1, \dots, \sigma_r$.
   - (iv) $\Sigma^T \Sigma = \operatorname{diag}(d_1, \dots, d_n)$ and $\Sigma \Sigma^T = \operatorname{diag}(d'_1, \dots, d'_m)$, where $d_k$ and $d'_k$ equal $\sigma_k^2$ when $k \le r$ and $0$ when $k > r$.
   - (v) If $m = n$, then $\Sigma = \operatorname{diag}(\delta_1, \dots, \delta_n)$ and $\Sigma^T = \Sigma$, where $\delta_k$ equals $\sigma_k$ when $k \le r$ and $0$ when $k > r$.
2. (Criterion by columns) Let $W$ be an $m \times m$ orthogonal matrix, $V$ an $n \times n$ orthogonal matrix, and $\Sigma$ the $m \times n$ matrix made from $r$ and $\sigma_1, \dots, \sigma_r$. Then $A = W \Sigma V^T$ exactly when both of the following hold.
   - $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$ for every $k$ with $1 \le k \le r$.
   - $A\mathbf{v}_k = 0$ for every $k$ with $r < k \le n$.
3. (Existence) $A$ has a singular value decomposition.
4. (Properties of a decomposition) Let $(W, \Sigma, V)$ be a singular value decomposition of $A$ whose $r$ and $\sigma$ are $r$ and $\sigma_1, \dots, \sigma_r$.
   - (i) (Decomposition of $A^T$) $(V, \Sigma^T, W)$ is a singular value decomposition of the $n \times m$ matrix $A^T$ with the same $r$ and $\sigma$.
   - (ii) (Relations among columns) If $1 \le k \le r$, then $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$, $A^T \mathbf{w}_k = \sigma_k \mathbf{v}_k$ and $\mathbf{w}_k = \sigma_k^{-1} A\mathbf{v}_k$. If $r < k \le n$, then $A\mathbf{v}_k = 0$, and if $r < j \le m$, then $A^T \mathbf{w}_j = 0$.
   - (iii) ($A^T A$ and $A A^T$) If $1 \le k \le r$, then $A^T A \mathbf{v}_k = \sigma_k^2 \mathbf{v}_k$ and $A A^T \mathbf{w}_k = \sigma_k^2 \mathbf{w}_k$; that is, $\mathbf{v}_k$ and $\mathbf{w}_k$ are eigenvectors of $A^T A$ and $A A^T$, respectively, belonging to $\sigma_k^2$. If $r < k \le n$, then $A^T A \mathbf{v}_k = 0$, and if $r < j \le m$, then $A A^T \mathbf{w}_j = 0$.
   - (iv) (Rank and three subspaces) $r = \operatorname{rank} A$. Hence $A$ is the zero matrix exactly when $r = 0$, and if $m = 1$ or $n = 1$ then $r \le 1$. Moreover, writing $\mathbf{v}_{r+1}, \dots, \mathbf{v}_n$ for the sequence of length $n - r$ whose $k$-th term is $\mathbf{v}_{r+k}$, we have $\operatorname{Ker} T_A = \operatorname{span}(\mathbf{v}_{r+1}, \dots, \mathbf{v}_n)$, $(\operatorname{Ker} T_A)^\perp = \operatorname{span}(\mathbf{v}_1, \dots, \mathbf{v}_r)$ and $\operatorname{Col} A = \operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r)$. If $r = n$ the first span is the span $\{0\}$ of the empty sequence, and if $r = 0$ so are the second and third.
5. (Schmidt form) For the decomposition in (4) and every $x \in \mathbb{R}^n$,
   $$
   \begin{aligned}
   Ax &= \sigma_1 \langle x, \mathbf{v}_1 \rangle \mathbf{w}_1 + \cdots \\
   &\quad + \sigma_r \langle x, \mathbf{v}_r \rangle \mathbf{w}_r.
   \end{aligned}
   $$
   The right side is the sum of the sequence of length $r$ whose $k$-th term is $(\sigma_k \langle x, \mathbf{v}_k \rangle)\mathbf{w}_k$, and it is the zero vector if $r = 0$.
6. (Reduced form) For the decomposition in (4) let $r \ge 1$. Let $\widetilde{V}$ be the $n \times r$ matrix whose $k$-th column is $\mathbf{v}_k$, $\widetilde{W}$ the $m \times r$ matrix whose $k$-th column is $\mathbf{w}_k$, and $\widetilde{\Sigma}$ the $r \times r$ matrix $\operatorname{diag}(\sigma_1, \dots, \sigma_r)$. Then
   $$
   \begin{aligned}
   A &= \widetilde{W} \widetilde{\Sigma} \widetilde{V}^T, \\
   I_r &= \widetilde{V}^T \widetilde{V} = \widetilde{W}^T \widetilde{W}.
   \end{aligned}
   $$
7. (Special cases)
   - (i) If $A$ is the zero matrix, then for every $m \times m$ orthogonal matrix $W$ and every $n \times n$ orthogonal matrix $V$, $(W, A, V)$ is a singular value decomposition of $A$ with $r = 0$.
   - (ii) If $m = n$ and $(W, \Sigma, V)$ is a singular value decomposition of $A$, then $A$ is invertible exactly when the $r$ of that decomposition is $n$, and in that case $\Sigma = \operatorname{diag}(\sigma_1, \dots, \sigma_n)$.
   - (iii) If $Q$ is an $n \times n$ orthogonal matrix, then $(Q, I_n, I_n)$ is a singular value decomposition of $Q$ with $r = n$ and every $\sigma_k$ equal to $1$. Moreover, in every singular value decomposition of $Q$ we have $r = n$ and $\sigma_k = 1$ for every $k$.
   - (iv) Let $m = n$ and $A = QDQ^T$, where $Q$ is an $n \times n$ orthogonal matrix, $D = \operatorname{diag}(d_1, \dots, d_n)$, and there is an integer $r$ with $0 \le r \le n$ such that $0 < d_k$ for $k \le r$ and $d_k = 0$ for $k > r$. Then $(Q, D, Q)$ is a singular value decomposition of $A$ whose $r$ and $\sigma$ are $r$ and $d_1, \dots, d_r$. In particular, if $A$ is a positive definite symmetric matrix, then for every orthogonal matrix $Q$ and diagonal matrix $D$ with $A = QDQ^T$, $(Q, D, Q)$ is a singular value decomposition of $A$ with $r = n$.
:::

## 직관

[[spectral-theorem|실스펙트럼 정리]]는 대칭행렬 $A$를 $A = QDQ^T$로 써서, 정규직교 기저 하나를 골라 $A$가 그 기저의 벡터마다 수를 곱하기만 하게 만들었습니다. 대칭이 아니거나 정사각이 아닌 행렬에는 그런 기저가 없을 수 있습니다. 특잇값 분해는 정의역 $\mathbb{R}^n$과 공역 $\mathbb{R}^m$에 정규직교 기저를 **따로** 하나씩 고르면 어떤 행렬이든 같은 모양이 된다고 말합니다. (2)대로 $A$는 $\mathbf{v}_k$를 $\sigma_k \mathbf{w}_k$로 보내고($k \le r$), 나머지 $\mathbf{v}_k$는 $0$으로 보냅니다.

비유하면 $A = W\Sigma V^T$는 물건을 옮기는 세 단계입니다. $V^T$로 물건을 길이를 바꾸지 않고 옮겨 $\mathbf{v}_k$를 좌표축 $e_k$에 맞춰 놓고, $\Sigma$로 축마다 길이를 $\sigma_k$배 하며($r$번째보다 뒤의 축은 $0$으로 눌러 없애고), $W$로 다시 길이를 바꾸지 않고 옮겨 $e_k$를 $\mathbf{w}_k$에 놓습니다. 비유가 정의와 맞는 곳은 "길이를 바꾸지 않는다"가 직교행렬의 $\lVert Qx \rVert = \lVert x \rVert$([[orthogonal-matrix|직교행렬]]의 (2)의 (아))에, "축마다 늘인다"가 $\Sigma$의 꼴에 해당한다는 점입니다. 비유와 달리 $m \ne n$이면 처음 공간과 마지막 공간이 다르고, $\Sigma$는 $\mathbb{R}^n$의 좌표를 $\mathbb{R}^m$의 좌표로 옮깁니다.

만드는 법은 $A^T A$에 있습니다. $\langle A^T A x, x \rangle = \lVert Ax \rVert^2$이므로 $A^T A$는 대칭이고 고윳값이 $0$ 이상이며, 고윳값이 $0$인 방향은 정확히 $A$가 $0$으로 보내는 방향입니다. 이 항목은 $A^T A$를 $\operatorname{Ker} T_A$의 직교 여공간으로 제한해 스펙트럼 정리를 씁니다. 그러면 그 공간의 고유벡터는 모두 양수인 고윳값에 속하므로, 양수인 $\sigma_k$가 앞 $r$자리에 오도록 고유벡터의 순서를 나중에 바꿀 필요가 없습니다. 이 항목은 $\sigma_1, \dots, \sigma_r$이 크기순이라고 요구하지 않으므로, 한 행렬에 $\sigma$를 늘어놓는 순서만 다른 분해가 여럿 있을 수 있습니다(아래 첫 예시).

## 증명

:::idea
(2)는 $A = W\Sigma V^T$를 $AV = W\Sigma$로 바꾸어 두 행렬의 열을 비교한다. (3)은 $A^T A$를 $E = (\operatorname{Ker} T_A)^\perp$로 제한한 사상에 스펙트럼 정리를 써서 $E$의 정규직교 고유기저를 얻고, $\operatorname{Ker} T_A$의 정규직교 기저를 이어 붙여 $V$를 만든 뒤, $\sigma_k^{-1} A\mathbf{v}_k$들이 정규직교라는 것을 보여 $\mathbb{R}^m$의 정규직교 기저로 늘려 $W$를 만든다. (4)의 세 부분공간은 차원을 세어 같음을 얻는다.
:::

:::hint
$\mathbf{v}_j$, $\mathbf{v}_k$가 $A^T A$의 고유벡터이면 $\langle A\mathbf{v}_j, A\mathbf{v}_k \rangle = \langle A^T A \mathbf{v}_j, \mathbf{v}_k \rangle$입니다. 이것으로 $A\mathbf{v}_1, \dots, A\mathbf{v}_r$이 서로 직교한다는 것을 보십시오.
:::

:::hint
$A^T A$의 고윳값 $\mu$에 속하는 단위 고유벡터 $v$가 $E$에 있으면 $\mu = \lVert Av \rVert^2$입니다. $\mu = 0$이면 $v$는 $\operatorname{Ker} T_A$와 $E$에 함께 속합니다.
:::

:::proof
아래에서 (K…)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (W1)–(W4)는 [[real-order-axioms|실수의 순서]]의 것, "순서 성질"은 [[order-properties-of-reals|실수의 순서 성질]]의 번호이다. 정수의 비교는 순서 성질 (10)에 의해 실수의 순서로 한다. (V…)는 [[vector-space|벡터공간]]의 것, (B…)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다. 내적의 조건 (i)–(iii)과 "내적의 (n)"은 [[inner-product-space|내적과 내적공간]]의 것이고, 행렬의 곱의 결합법칙과 단위행렬은 [[matrix-product-properties|행렬의 곱의 성질]]의 (1), (4)이다. [[matrix-product|행렬의 곱]]의 정의에 의해 $XY$의 $k$번째 열은 $X$와 $Y$의 $k$번째 열의 곱이고, 행렬과 벡터의 곱의 (2)에 의해 $X(\alpha x) = \alpha(Xx)$, (3)에 의해 $Xe_k$는 $X$의 $k$번째 열이다. 행렬의 (3)에 의해 크기가 같은 두 행렬은 모든 열이 같을 때 같다.

**(1).** (i) 다음을 먼저 본다. (가) 정수 $k$가 $1 \le k \le r$이면 $k \le m$, $k \le n$이고 $\Sigma$의 $(k, k)$ 성분은 $\sigma_k$이므로 양수이다. (나) 정수 $k$가 $r < k$, $k \le m$, $k \le n$이면 "$j = k \le r$"이 성립하지 않으므로 $(k, k)$ 성분은 $0$이다. $r' < r$이라 하면 [[prime-number|(Z1)]]에 의해 $r' + 1 \le r$이고 $0 \le r'$이므로 $1 \le r$이며, $k = r$에 대해 (가)에 의해 $(r, r)$ 성분은 양수이지만, $\Sigma$를 $r'$과 $\sigma'$로 만든 행렬로 보면 $r' < r \le m$, $r \le n$이므로 (나)에 의해 그 성분은 $0$이다. 순서 성질 (1)의 (i)에 어긋난다. $r < r'$이라 하면 같은 방식으로 $k = r'$에서 $\sigma'$ 쪽의 (가)는 양수, $\sigma$ 쪽의 (나)는 $0$을 주어 어긋난다. 따라서 (W1)에 의해 $r = r'$이다. 그러면 모든 $k \le r$에서 $\sigma_k$와 $\sigma'_k$는 모두 $\Sigma$의 $(k, k)$ 성분이므로 같다.

(ii) $\Sigma$의 $k$번째 열의 $j$번째 값은 $(j, k)$ 성분이다. $1 \le k \le r$이면 "$j = k \le r$"은 정확히 $j = k$일 때 성립하므로 이 값은 $j = k$일 때 $\sigma_k$, $j \ne k$일 때 $0$이다. $k \le r \le m$이므로 $e_k \in \mathbb{R}^m$이 정해지고, [[real-function-space|실숫값 함수의 공간]]의 연산에 의해 $\sigma_k e_k$의 $j$번째 값도 $j = k$일 때 $\sigma_k \cdot 1 = \sigma_k$, $j \ne k$일 때 $\sigma_k \cdot 0 = 0$이다((K4), (K9)). 따라서 $k$번째 열은 $\sigma_k e_k$이다. $r < k \le n$이면 모든 $j$에서 "$j = k \le r$"이 성립하지 않으므로 $k$번째 열의 모든 값이 $0$, 곧 영벡터이다.

(iii) [[transpose|전치행렬]]의 정의에 의해 $\Sigma^T$는 $n \times m$ 행렬이고 그 $(k, j)$ 성분은 $\Sigma$의 $(j, k)$ 성분, 곧 $j = k \le r$일 때 $\sigma_k$이고 그 밖일 때 $0$이다. $j = k$이면 $\sigma_k = \sigma_j$이므로 이것은 "$(k, j)$ 성분이 $k = j \le r$일 때 $\sigma_j$, 그 밖일 때 $0$"과 같다. $0 \le r$, $r \le n$, $r \le m$이므로 $\Sigma^T$는 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $n \times m$ 행렬이다.

(iv) $\Sigma^T \Sigma$는 $n \times n$ 행렬이고 그 $k$번째 열은 $\Sigma^T$와 $\Sigma$의 $k$번째 열의 곱이다. $k \le r$이면 (ii)에 의해 그것은 $\Sigma^T(\sigma_k e_k) = \sigma_k(\Sigma^T e_k)$이고, $\Sigma^T e_k$는 $\Sigma^T$의 $k$번째 열이므로 (iii)과 (ii)를 $\Sigma^T$에 쓰면 $\sigma_k e_k$($e_k \in \mathbb{R}^n$)이다. 따라서 $k$번째 열은 $\sigma_k(\sigma_k e_k) = \sigma_k^2 e_k$이다((V6), [[power-of-a-real-number|실수의 거듭제곱]]의 (1)). $r < k \le n$이면 (ii)에 의해 $k$번째 열은 $\Sigma^T 0 = 0$이다([[linear-map|선형사상]]의 (T1)). 한편 [[diagonalizable|대각화 가능]]의 (2)에 의해 $\operatorname{diag}(d_1, \dots, d_n)$의 $k$번째 열은 $d_k e_k$이고, $k > r$이면 (B3)에 의해 $0 e_k = 0$이다. 모든 열이 같으므로 $\Sigma^T \Sigma = \operatorname{diag}(d_1, \dots, d_n)$이다. $\Sigma \Sigma^T$도 같다. 그 $k$번째 열($1 \le k \le m$)은 $\Sigma$와 $\Sigma^T$의 $k$번째 열의 곱이고, (iii)과 (ii)에 의해 $\Sigma^T$의 $k$번째 열은 $k \le r$일 때 $\sigma_k e_k$($e_k \in \mathbb{R}^n$), $r < k \le m$일 때 영벡터이므로, $k \le r$이면 $\Sigma(\sigma_k e_k) = \sigma_k(\sigma_k e_k) = \sigma_k^2 e_k$($e_k \in \mathbb{R}^m$)이고 $r < k$이면 $\Sigma 0 = 0$이다.

(v) $m = n$이면 $\Sigma$의 $(j, k)$ 성분은 $j \ne k$일 때 $0$이고 $(k, k)$ 성분은 $k \le r$일 때 $\sigma_k$, $k > r$일 때 $0$, 곧 $\delta_k$이다. $\operatorname{diag}$의 정의와 행렬의 (2)에 의해 $\Sigma = \operatorname{diag}(\delta_1, \dots, \delta_n)$이다. (iii)에 의해 $\Sigma^T$는 같은 $r$과 $\sigma$로 만든 $n \times n$ 행렬이므로 $\Sigma$와 모든 성분이 같고, $\Sigma^T = \Sigma$이다.

**(2).** [[orthogonal-matrix|직교행렬]]의 정의와 (2)의 (나)에 의해 $V^T V = I_n = V V^T$이다. $A = W\Sigma V^T$라 하자. 결합법칙과 단위행렬에 의해 $AV = W\Sigma(V^T V) = W\Sigma$이다. $AV$의 $k$번째 열은 $A\mathbf{v}_k$이고, $W\Sigma$의 $k$번째 열은 $W$와 $\Sigma$의 $k$번째 열의 곱이므로 (1)의 (ii)에 의해 $k \le r$이면 $W(\sigma_k e_k) = \sigma_k(We_k) = \sigma_k \mathbf{w}_k$, $r < k \le n$이면 $W0 = 0$이다. 따라서 두 조건이 성립한다. 거꾸로 두 조건이 성립하면 같은 계산에 의해 $AV$와 $W\Sigma$의 $k$번째 열이 모든 $k$에서 같으므로 $AV = W\Sigma$이고, $A = AI_n = A(VV^T) = (AV)V^T = W\Sigma V^T$이다.

**(3).** $K = \operatorname{Ker} T_A$, $E = K^\perp$로 두자. [[kernel-and-range|핵과 상]]의 (1)과 [[orthogonal-complement|직교 여공간]]의 (1)에 의해 둘 다 $\mathbb{R}^n$의 [[subspace|부분공간]]이고, [[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^n$은 $n$차원이므로 직교 여공간의 (4)에 의해 $K$와 $E$는 유한차원이고 $\dim K + \dim E = n$이다. $r = \dim E$로 두면 $\dim K = n - r$이고, 차원은 $0$ 이상이므로 $0 \le r \le n$이다.

$B = A^T A$로 두자. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (6)에 의해 $B$는 $n \times n$ 대칭행렬이고, 같은 항목의 (2)에 의해 $T_B : \mathbb{R}^n \to \mathbb{R}^n$은 자기수반이다. [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (2)에 의해 $\operatorname{Ker} T_B = K$이므로, $x \in K$이면 $T_B x = 0 \in K$이고(부분공간의 (S1)) $K$는 $T_B$-불변이다([[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]). 같은 항목의 (3)에 의해 $E$도 $T_B$-불변이고, (4)에 의해 $E$는 유한차원 내적공간이며 제한한 사상 $T_B|_E : E \to E$는 자기수반이다.

[[spectral-theorem|실스펙트럼 정리]]의 (1)을 $E$와 $T_B|_E$에 쓰면, 모든 항이 $T_B|_E$의 고유벡터인 $E$의 정규직교 기저가 있고, [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 그 길이는 $\dim E = r$이다. 그것을 $b_1, \dots, b_r$이라 하자($r = 0$이면 빈 열이다). [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (5)에 의해 각 $b_k$가 속하는 고윳값은 하나뿐이므로 그것을 $\mu_k$라 하면 길이 $r$인 실수의 열 $\mu_1, \dots, \mu_r$이 정해지고([[real-function-space|(G)]]), 불변 부분공간의 (2)에 의해 $b_k$는 $\mu_k$에 속하는 $T_B$의 고유벡터, 곧 $Bb_k = \mu_k b_k$이다. 정규직교 기저의 (6)에 의해 $b_1, \dots, b_r$은 $\mathbb{R}^n$의 정규직교 열이다.

각 $k \le r$에서 $0 < \mu_k$이다. $b_k$는 단위벡터이므로 내적의 (1)과 AᵀA 의 핵과 가역성의 (1)에 의해 $\mu_k = \mu_k \langle b_k, b_k \rangle = \langle Bb_k, b_k \rangle = \langle Ab_k, Ab_k \rangle$이고, 내적의 조건 (iii)에 의해 $0 \le \mu_k$이다. $\mu_k = 0$이면 조건 (iii)에 의해 $Ab_k = 0$, 곧 $b_k \in K$이고, $b_k \in E = K^\perp$이므로 직교 여공간의 (2)에 의해 $b_k \in K \cap K^\perp = \{0\}$이다. 그러나 [[norm-in-inner-product-space|내적공간의 노름]]의 (4)에 의해 단위벡터는 영벡터가 아니므로 어긋난다. 따라서 $\mu_k \ne 0$이고 $0 < \mu_k$이다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sigma_k = \sqrt{\mu_k}$로 두면 $0 < \sigma_k$이고 $\sigma_k^2 = \sigma_k \sigma_k = \mu_k$이다.

$K$는 유한차원이고 $\dim K = n - r$이므로 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (3)에 의해 내적공간 $K$의 정규직교 기저 $c_1, \dots, c_{n-r}$이 있고, 그것은 $\mathbb{R}^n$의 정규직교 열이다. $b_i \in K^\perp$이고 $c_j \in K$이므로 직교 여공간의 정의에 의해 모든 $i$, $j$에서 $b_i \perp c_j$이다. [[orthonormal-list|직교하는 열과 정규직교 열]]의 (5)에 의해 [[extension-to-a-basis|이어 붙인 열]] $b_1, \dots, b_r, c_1, \dots, c_{n-r}$은 $\mathbb{R}^n$의 정규직교 열이고, 그 길이가 $n = \dim \mathbb{R}^n$이므로 정규직교 기저의 (1)에 의해 정규직교 기저이다. 이 열의 $k$번째 항을 $\mathbf{v}_k$라 하면 $k \le r$일 때 $\mathbf{v}_k = b_k$, $r < k \le n$일 때 $\mathbf{v}_k = c_{k-r} \in K$이다. 행렬의 (4)에 의해 $k$번째 열이 $\mathbf{v}_k$인 $n \times n$ 행렬 $V$가 있고, 직교행렬의 (2)의 (마)에 의해 $V$는 직교행렬이다.

$k \le r$에 대하여 $u_k = \sigma_k^{-1} A\mathbf{v}_k \in \mathbb{R}^m$으로 둔다. $j, k \le r$이면 내적의 (1), (K1), (K2)와 AᵀA 의 핵과 가역성의 (1)에 의해
$$
\begin{aligned}
\langle u_j, u_k \rangle &= \sigma_j^{-1}\sigma_k^{-1} \langle A\mathbf{v}_j, A\mathbf{v}_k \rangle \\
&= \sigma_j^{-1}\sigma_k^{-1} \langle B\mathbf{v}_j, \mathbf{v}_k \rangle \\
&= \sigma_j^{-1}\sigma_k^{-1}\mu_j \langle \mathbf{v}_j, \mathbf{v}_k \rangle
\end{aligned}
$$
이다. $j \ne k$이면 $\langle \mathbf{v}_j, \mathbf{v}_k \rangle = 0$이므로 (K9)에 의해 이 값은 $0$이고, $j = k$이면 $\langle \mathbf{v}_k, \mathbf{v}_k \rangle = 1$이고 $\mu_k = \sigma_k\sigma_k$이므로 (K1), (K2), (K6)에 의해 $(\sigma_k^{-1}\sigma_k)(\sigma_k^{-1}\sigma_k) = 1$이다. 따라서 $u_1, \dots, u_r$은 $\mathbb{R}^m$의 정규직교 열이다. $\mathbb{R}^m$은 $m$차원이므로 정규직교 기저의 존재와 확장의 (2)에 의해 $r \le m$이고, 길이 $m - r$인 열 $y_1, \dots, y_{m-r}$이 있어 이어 붙인 열 $u_1, \dots, u_r, y_1, \dots, y_{m-r}$이 $\mathbb{R}^m$의 정규직교 기저이다. 그 $j$번째 항을 $\mathbf{w}_j$라 하면 $k \le r$일 때 $\mathbf{w}_k = u_k$이고, $j$번째 열이 $\mathbf{w}_j$인 $m \times m$ 행렬 $W$는 직교행렬이다.

$0 \le r$, $r \le m$, $r \le n$이고 $\sigma_1, \dots, \sigma_r$은 모두 양수이므로 $r$과 $\sigma_1, \dots, \sigma_r$로 만든 $m \times n$ 행렬 $\Sigma$가 있다. $k \le r$이면 (V6), (K6), (V5)에 의해 $\sigma_k \mathbf{w}_k = \sigma_k(\sigma_k^{-1}A\mathbf{v}_k) = A\mathbf{v}_k$이고, $r < k \le n$이면 $\mathbf{v}_k \in K$이므로 $A\mathbf{v}_k = 0$이다. (2)에 의해 $A = W\Sigma V^T$이고, $(W, \Sigma, V)$는 $A$의 특잇값 분해이다.

**(4).** (i) 전치행렬의 (4)를 두 번 쓰고 (1)의 $(V^T)^T = V$와 결합법칙을 쓰면 $A^T = \bigl(W(\Sigma V^T)\bigr)^T = (\Sigma V^T)^T W^T = (V\Sigma^T)W^T = V\Sigma^T W^T$이다. $V$는 $n \times n$ 직교행렬, $W$는 $m \times m$ 직교행렬이고, (1)의 (iii)에 의해 $\Sigma^T$는 같은 $r$과 $\sigma$로 만든 $n \times m$ 행렬이므로 $(V, \Sigma^T, W)$는 $A^T$의 특잇값 분해이다.

(ii) (2)에 의해 $k \le r$이면 $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$, $r < k \le n$이면 $A\mathbf{v}_k = 0$이다. (2)를 (i)의 분해 $(V, \Sigma^T, W)$에 쓰면(정의역 쪽 직교행렬의 열이 $\mathbf{w}_j$, 공역 쪽 직교행렬의 열이 $\mathbf{v}_k$이다) $k \le r$이면 $A^T \mathbf{w}_k = \sigma_k \mathbf{v}_k$, $r < j \le m$이면 $A^T \mathbf{w}_j = 0$이다. $A\mathbf{v}_k = \sigma_k \mathbf{w}_k$의 양변에 $\sigma_k^{-1}$을 곱하면 (V6), (K6), (V5)에 의해 $\mathbf{w}_k = \sigma_k^{-1} A\mathbf{v}_k$이다.

(iii) $k \le r$이면 행렬의 곱의 (1)과 (ii)에 의해 $A^T A \mathbf{v}_k = A^T(\sigma_k \mathbf{w}_k) = \sigma_k(A^T \mathbf{w}_k) = \sigma_k(\sigma_k \mathbf{v}_k) = \sigma_k^2 \mathbf{v}_k$이고, 같은 방식으로 $A A^T \mathbf{w}_k = A(\sigma_k \mathbf{v}_k) = \sigma_k^2 \mathbf{w}_k$이다. 직교행렬의 열은 단위벡터이므로 영벡터가 아니고, 따라서 고유벡터이다. $r < k \le n$이면 $A^T A \mathbf{v}_k = A^T 0 = 0$이고, $r < j \le m$이면 $A A^T \mathbf{w}_j = A0 = 0$이다(선형사상의 (T1)).

(iv) $K = \operatorname{Ker} T_A$로 두자. 직교행렬의 (2)의 (라)에 의해 $\mathbf{v}_1, \dots, \mathbf{v}_n$과 $\mathbf{w}_1, \dots, \mathbf{w}_m$은 정규직교 열이다. 열 $z$를 $z_i = \mathbf{v}_{r+i}$ ($1 \le i \le n - r$)로 두면, $r + i = r + i'$인 것은 정확히 $i = i'$일 때이므로 $\langle z_i, z_{i'} \rangle$는 $i = i'$일 때 $1$, $i \ne i'$일 때 $0$이고, $z$는 정규직교 열이다. 정규직교 열의 처음 $r$개 $\mathbf{w}_1, \dots, \mathbf{w}_r$과 $\mathbf{v}_1, \dots, \mathbf{v}_r$도 직교하는 열과 정규직교 열의 (5)에 의해 정규직교 열이다. 같은 항목의 (2)에 의해 이 세 열은 모두 [[linear-independence|일차독립]]이다.

(ii)에 의해 $z$의 모든 항은 $K$에 속하므로 [[linear-combination-and-span|생성]]의 (N3)에 의해 $\operatorname{span}(z) \subseteq K$이다. [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\operatorname{span}(z)$의 차원은 $n - r$이고, (5)에 의해 $n - r \le \dim K$이다. 또 $k \le r$이면 (ii)와 행렬과 벡터의 곱의 (2)에 의해 $\mathbf{w}_k = A(\sigma_k^{-1}\mathbf{v}_k) \in \operatorname{Ran} T_A = \operatorname{Col} A$이므로 같은 방식으로 $\operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r) \subseteq \operatorname{Col} A$이고 $r \le \operatorname{rank} A$이다. 행렬의 계수의 (4)와 [[rank-and-nullity|계수와 퇴화차수]]의 정의에 의해 $\dim K + \operatorname{rank} A = n$이므로 $\operatorname{rank} A = n - \dim K \le n - (n - r) = r$이다(순서 성질 (2), (3)). 따라서 순서 성질 (1)의 (ii)에 의해 $\operatorname{rank} A = r$이고 $\dim K = n - r$이다. 부분공간의 차원의 (5)의 등호 경우에 의해 $\operatorname{span}(z) = K$이고 $\operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r) = \operatorname{Col} A$이다.

$k \le r$이고 $1 \le i \le n - r$이면 $k < r + i$이므로 $\langle \mathbf{v}_k, z_i \rangle = 0$이다. 직교 여공간의 (1)의 마지막 문장에 의해 $\mathbf{v}_k \in \operatorname{span}(z)^\perp = K^\perp$이고, (N3)에 의해 $\operatorname{span}(\mathbf{v}_1, \dots, \mathbf{v}_r) \subseteq K^\perp$이다. 직교 여공간의 (4)에 의해 $\dim K^\perp = n - (n - r) = r$이고, 부분공간의 차원의 (4)에 의해 $\operatorname{span}(\mathbf{v}_1, \dots, \mathbf{v}_r)$의 차원도 $r$이므로 (5)에 의해 둘은 같다.

행렬의 계수의 (6)에 의해 $A$가 영행렬인 것은 정확히 $\operatorname{rank} A = 0$, 곧 $r = 0$일 때이다. $r \le m$이고 $r \le n$이므로 $m = 1$이거나 $n = 1$이면 $r \le 1$이다. 빈 열의 생성이 $\{0\}$이라는 것은 생성의 정의이다.

**(5).** $x \in \mathbb{R}^n$을 잡고 $k \le r$에 대하여 $\alpha_k = \sigma_k \langle x, \mathbf{v}_k \rangle$, $y = \alpha_1 \mathbf{w}_1 + \cdots + \alpha_r \mathbf{w}_r$로 두자. $\mathbf{w}_1, \dots, \mathbf{w}_m$이 $\mathbb{R}^m$을 생성하므로 내적의 (6)에 의해 모든 $j \le m$에서 $\langle Ax, \mathbf{w}_j \rangle = \langle y, \mathbf{w}_j \rangle$임을 보이면 $Ax = y$이다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (4)에 의해 $\langle Ax, \mathbf{w}_j \rangle = \langle x, A^T \mathbf{w}_j \rangle$이다.

$j \le r$이면 (4)의 (ii)와 내적의 (1)에 의해 $\langle x, A^T \mathbf{w}_j \rangle = \langle x, \sigma_j \mathbf{v}_j \rangle = \alpha_j$이고, $\mathbf{w}_1, \dots, \mathbf{w}_r$이 정규직교 열이므로 직교하는 열과 정규직교 열의 (1)에 의해 $\langle y, \mathbf{w}_j \rangle = \alpha_j$이다. $r < j \le m$이면 (4)의 (ii)와 내적의 (2)에 의해 $\langle x, A^T \mathbf{w}_j \rangle = \langle x, 0 \rangle = 0$이다. 또 $k \le r$이면 $k \ne j$이므로 $\mathbf{w}_j \perp \mathbf{w}_k$이고, 직교 여공간의 (1)의 마지막 문장에 의해 $\mathbf{w}_j \in \operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r)^\perp$이다. 생성의 정의에 의해 $y \in \operatorname{span}(\mathbf{w}_1, \dots, \mathbf{w}_r)$이므로 $\langle \mathbf{w}_j, y \rangle = 0$이고, 내적의 조건 (i)에 의해 $\langle y, \mathbf{w}_j \rangle = 0$이다. 따라서 모든 $j$에서 두 값이 같고 $Ax = y$이다. $r = 0$이면 $y$는 빈 열의 합, 곧 영벡터이다.

**(6).** 행렬의 (4)에 의해 $\widetilde{V}$, $\widetilde{W}$가 있고, 대각화 가능의 정의에 의해 $\widetilde{\Sigma}$가 있다. $x \in \mathbb{R}^n$이면 ℝⁿ 의 표준내적의 (3)에 의해 $\widetilde{V}^T x \in \mathbb{R}^r$의 $k$번째 값은 $\langle \mathbf{v}_k, x \rangle$이고, 대각화 가능의 (2)에 의해 $\widetilde{\Sigma}(\widetilde{V}^T x)$의 $k$번째 값은 $\sigma_k \langle \mathbf{v}_k, x \rangle$이다. 행렬과 벡터의 곱의 정의와 내적의 조건 (i)에 의해
$$
\begin{aligned}
&\widetilde{W}\bigl(\widetilde{\Sigma}(\widetilde{V}^T x)\bigr) \\
&= \sigma_1 \langle x, \mathbf{v}_1 \rangle \mathbf{w}_1 + \cdots + \sigma_r \langle x, \mathbf{v}_r \rangle \mathbf{w}_r
\end{aligned}
$$
이고, (5)에 의해 이것은 $Ax$이다. 행렬의 곱의 (1)에 의해 왼쪽은 $(\widetilde{W}\widetilde{\Sigma}\widetilde{V}^T)x$이므로, 행렬과 벡터의 곱의 (5)에 의해 $A = \widetilde{W}\widetilde{\Sigma}\widetilde{V}^T$이다. (4)의 증명에서 본 대로 $\mathbf{v}_1, \dots, \mathbf{v}_r$과 $\mathbf{w}_1, \dots, \mathbf{w}_r$은 정규직교 열이므로 직교행렬의 (1)의 (ii)에서 (i)로 $\widetilde{V}^T \widetilde{V} = I_r$, $\widetilde{W}^T \widetilde{W} = I_r$이다.

**(7).** (i) $r = 0$으로 만든 $m \times n$ 행렬은 영행렬 $A$이다. (2)를 $r = 0$으로 쓰면 첫째 조건은 해당하는 $k$가 없고, 둘째 조건은 모든 $k$에서 $A\mathbf{v}_k = 0$이다. 행렬과 벡터의 곱의 정의에 의해 영행렬과 $x$의 곱은 모든 항이 $x_k 0 = 0$인 열의 합이므로((B4)) [[finite-sum-of-vectors|(H5)]]에 의해 $0$이다. 따라서 $A = WAV^T$이다.

(ii) 행렬의 계수의 (5)에 의해 $A$가 가역인 것은 정확히 $\operatorname{rank} A = n$일 때이고, (4)의 (iv)에 의해 이것은 정확히 $r = n$일 때이다. 그때 (1)의 (v)에서 모든 $k$가 $k \le r$이므로 $\Sigma = \operatorname{diag}(\sigma_1, \dots, \sigma_n)$이다.

(iii) 행렬의 (6)에 의해 $I_n$의 $(j, k)$ 성분은 $j = k$일 때 $1$, 그 밖일 때 $0$이고, $j = k$이면 $k \le n$이므로 $I_n$은 $r = n$과 모든 항이 $1$인 열로 만든 $n \times n$ 행렬이다. 직교행렬의 (7)에 의해 $I_n$은 직교행렬이고, 전치행렬의 (3)과 단위행렬의 성질에 의해 $Q = QI_nI_n^T$이므로 $(Q, I_n, I_n)$은 $Q$의 특잇값 분해이다. $(W, \Sigma, V)$가 $Q$의 아무 특잇값 분해라 하자. 직교행렬의 (2)의 (다)에 의해 $Q$는 가역이므로 (ii)에 의해 $r = n$이다. 각 $k$에서 직교행렬의 (2)의 (아)와 노름의 (3)에 의해
$$
\begin{aligned}
1 &= \lVert \mathbf{v}_k \rVert = \lVert Q\mathbf{v}_k \rVert = \lVert \sigma_k \mathbf{w}_k \rVert \\
&= |\sigma_k| \, \lVert \mathbf{w}_k \rVert = \sigma_k
\end{aligned}
$$
이다(가운데 등호는 (4)의 (ii), 마지막 등호는 $0 < \sigma_k$이므로 [[absolute-value|절댓값]]의 (1)).

(iv) $D$의 $(j, k)$ 성분은 $j \ne k$일 때 $0$이고 $(k, k)$ 성분은 $d_k$이며, $d_k$는 $k \le r$일 때 양수, $k > r$일 때 $0$이다. 따라서 $D$의 $(j, k)$ 성분은 $j = k \le r$일 때 $d_k$, 그 밖일 때 $0$이고, $D$는 $r$과 $d_1, \dots, d_r$로 만든 $n \times n$ 행렬이다. $Q$는 직교행렬이고 $A = QDQ^T$이므로 정의에 의해 $(Q, D, Q)$는 $A$의 특잇값 분해이다. $A$가 양의 정부호인 대칭행렬이고 $A = QDQ^T$이면 대각화 가능의 (1)에 의해 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이고, 직교행렬의 (2)의 (다)에 의해 $Q$가 가역이므로 [[positive-definite-matrix|양의 정부호 행렬]]의 (4)의 (i)을 $S = Q$로 쓰면 모든 $k$에서 $0 < d_{k,k}$이다. 앞 문장을 $r = n$으로 쓰면 된다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 3 행렬의 분해와 늘어놓는 순서]
$$
A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
$$
에서 $Ax = (x_1 + x_3, x_2)$이므로 $\operatorname{Ker} T_A = \operatorname{span}((1, 0, -1))$이고 그 직교 여공간은 $\operatorname{span}((1, 0, 1), (0, 1, 0))$입니다. $A^T A$의 $(j, k)$ 성분은 $A$의 두 열의 내적이므로
$$
A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}
$$
이며, $p = (1, 0, 1)$, $q = (0, 1, 0)$으로 두면 $A^T A p = (2, 0, 2) = 2p$, $A^T A q = q$입니다. 증명의 방법대로
$$
\begin{aligned}
\mathbf{v}_1 &= (0, 1, 0), \\
\mathbf{v}_2 &= 2^{-1}\sqrt{2}\,(1, 0, 1), \\
\mathbf{v}_3 &= 2^{-1}\sqrt{2}\,(1, 0, -1)
\end{aligned}
$$
로 두면 $\sigma_1 = 1$, $\sigma_2 = \sqrt{2}$이고, $\mathbf{w}_1 = A\mathbf{v}_1 = (0, 1)$, $\mathbf{w}_2 = (\sqrt{2})^{-1}A\mathbf{v}_2 = (\sqrt{2})^{-1} \cdot 2^{-1}\sqrt{2}\,(2, 0) = (1, 0)$입니다. (2)의 조건은 $A\mathbf{v}_1 = 1 \cdot \mathbf{w}_1$, $A\mathbf{v}_2 = (\sqrt{2}, 0) = \sqrt{2}\,\mathbf{w}_2$, $A\mathbf{v}_3 = 2^{-1}\sqrt{2}\,(0, 0) = 0$으로 맞으므로
$$
W = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \Sigma = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \sqrt{2} & 0 \end{pmatrix}
$$
과 $k$번째 열이 $\mathbf{v}_k$인 $V$로 $(W, \Sigma, V)$는 $r = 2$인 $A$의 특잇값 분해입니다. $\mathbf{v}_1$과 $\mathbf{v}_2$의 자리를 바꾸면 $W = I_2$, $\Sigma$의 대각성분이 $\sqrt{2}, 1$인 다른 특잇값 분해가 나옵니다. 어느 쪽이든 $r = 2 = \operatorname{rank} A$이고 $\operatorname{Ker} T_A = \operatorname{span}(\mathbf{v}_3)$입니다.
:::

:::example[열이 하나인 행렬]
$n = 1$이고 $A = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$이면 $A$의 열 $(3, 4)$가 영벡터가 아니므로 $\operatorname{rank} A = 1$이고 (4)의 (iv)에 의해 모든 특잇값 분해에서 $r = 1$입니다. $\mathbf{v}_1 = e_1 \in \mathbb{R}^1$, $V = I_1$, $\sigma_1 = 5$, $\mathbf{w}_1 = 5^{-1}(3, 4)$로 두고 $\mathbf{w}_2 = 5^{-1}(4, -3)$으로 늘리면
$$
W = 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}, \quad \Sigma = \begin{pmatrix} 5 \\ 0 \end{pmatrix}
$$
이고, $Ae_1 = (3, 4) = 5\mathbf{w}_1$이므로 (2)에 의해 $(W, \Sigma, I_1)$은 $A$의 특잇값 분해입니다. (4)의 (i)에 의해 $(I_1, \Sigma^T, W)$는 $1 \times 2$ 행렬 $A^T = \begin{pmatrix} 3 & 4 \end{pmatrix}$의 특잇값 분해입니다.
:::

:::counterexample[음이 아닌 대각행렬이 Σ 의 꼴이 아닐 수 있는 예]
$A = \operatorname{diag}(0, 2)$는 대각성분이 $0$ 이상인 대각행렬이지만 어떤 $r$과 $\sigma$로 만든 행렬도 아닙니다. $(2, 2)$ 성분이 $0$이 아니므로 $2 \le r$이어야 하는데, 그러면 $(1, 1)$ 성분이 양수여야 하기 때문입니다. 그래서 $(I_2, A, I_2)$는 이 항목의 뜻의 특잇값 분해가 아닙니다. $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이면 $P$는 직교행렬이고, $P$의 열은 $e_2$, $e_1$이며 $Ae_2 = 2e_2$, $Ae_1 = 0$이므로 (2)에 의해 $(P, \operatorname{diag}(2, 0), P)$가 $r = 1$, $\sigma_1 = 2$인 특잇값 분해입니다.
:::

:::counterexample[Σ 의 대각성분이 고윳값이 아닌 예]
$B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $Be_2 = (1, 0) = e_1$, $Be_1 = 0$입니다. $V = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$(열 $e_2$, $e_1$), $W = I_2$(열 $e_1$, $e_2$), $\Sigma = \operatorname{diag}(1, 0)$으로 (2)의 조건이 맞으므로 $(I_2, \Sigma, V)$는 $B$의 특잇값 분해입니다. 그러나 $1$은 $B$의 고윳값이 아닙니다. $Bx = x$이면 $(x_2, 0) = (x_1, x_2)$에서 $x_2 = 0$, $x_1 = x_2 = 0$이기 때문입니다. 이처럼 $\Sigma$의 양수인 대각성분이 행렬의 고윳값이 아닐 수 있습니다.
:::

## 확인 질문

:::check[$(W, \Sigma, V)$가 $A$의 특잇값 분해이면 $-A$의 특잇값 분해 하나는 무엇인가?]
$(-W, \Sigma, V)$입니다. [[transpose|전치행렬]]의 (1)과 [[matrix-product-properties|행렬의 곱의 성질]]의 (3)에 의해 $(-W)^T(-W) = ((-1)(-1))(W^T W) = I_m$이므로 $-W$는 직교행렬이고, 같은 성질에 의해 $(-W)\Sigma V^T = -(W\Sigma V^T) = -A$입니다. $r$과 $\sigma$는 바뀌지 않습니다. $(W, \Sigma, -V)$도 됩니다.
:::

:::check[$3 \times 5$ 행렬 $A$의 특잇값 분해에서 $r$은 얼마 이하이고 $\operatorname{Ker} T_A$의 차원은 얼마인가?]
정의에서 $r \le 3$이고 $r \le 5$이므로 $r \le 3$입니다. (4)의 (iv)에 의해 $\operatorname{Ker} T_A = \operatorname{span}(\mathbf{v}_{r+1}, \dots, \mathbf{v}_5)$이고 이 열은 일차독립이므로 차원은 $5 - r \ge 2$입니다. 곧 모든 $3 \times 5$ 행렬 $A$에는 $Ax = 0$인 영벡터가 아닌 $x \in \mathbb{R}^5$가 있습니다.
:::

:::check[$1 \times 1$ 행렬 $A = \begin{pmatrix} a \end{pmatrix}$의 특잇값 분해는 하나로 정해지는가?]
아닙니다. [[orthogonal-matrix|직교행렬]]의 (7)에 의해 $1 \times 1$ 직교행렬은 $\begin{pmatrix} 1 \end{pmatrix}$과 $\begin{pmatrix} -1 \end{pmatrix}$뿐입니다. $a = 0$이면 (7)의 (i)에 의해 $W$, $V$가 각각 $\begin{pmatrix} 1 \end{pmatrix}$이거나 $\begin{pmatrix} -1 \end{pmatrix}$인 네 짝이 모두 분해입니다. $a \ne 0$이면 $r = 1$, $\sigma_1 = |a|$이고, $s$를 $0 < a$일 때 $1$, $a < 0$일 때 $-1$로 두면 $(\begin{pmatrix} s \end{pmatrix}, \begin{pmatrix} |a| \end{pmatrix}, \begin{pmatrix} 1 \end{pmatrix})$과 $(\begin{pmatrix} 1 \end{pmatrix}, \begin{pmatrix} |a| \end{pmatrix}, \begin{pmatrix} s \end{pmatrix})$이 모두 분해입니다. 실제로 $s|a| = a$입니다.
:::
