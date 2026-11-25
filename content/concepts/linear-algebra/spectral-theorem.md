---
title: 실스펙트럼 정리
title_en: Real Spectral Theorem
aliases: [스펙트럼 정리, 대칭행렬의 스펙트럼 정리, 대칭행렬의 직교 대각화, spectral theorem, spectral theorem for symmetric matrices, real spectral theorem]
kind: theorem
field: linear-algebra
msc: ["15A18", "47B15"]
level: undergrad
summary: 유한차원 실내적공간 위의 선형사상이 자기수반인 것은 정확히 그 고유벡터로 된 정규직교 기저가 있을 때이다. 행렬로는 n × n 행렬이 대칭인 것은 정확히 직교행렬 Q 와 대각행렬 D 로 A = QDQᵀ 로 쓸 수 있을 때이다. 고유벡터 하나를 정규화하고 그 직교 여공간으로 내려가는 차원에 대한 귀납으로 증명한다.
requires: [real-number-arithmetic, mathematical-induction, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-map, dimension, matrix, transpose, matrix-vector-product, matrix-in-bases, eigenvalue-and-eigenvector, diagonalizable, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthonormal-list, orthonormal-basis, orthogonal-complement, self-adjoint-map, invariant-subspaces-of-self-adjoint-map, orthogonal-matrix, change-of-orthonormal-basis, symmetric-matrix-has-eigenvalue]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 2절 Spectral theorem for self-adjoint and normal operators 의 Theorem 2.1, Theorem 2.2 와 그 증명, 그 뒤의 Remark, p.166; 6장 1절 Upper triangular (Schur) representation of an operator 의 Theorem 1.1 과 그 증명, pp.163–164
    checked: original
    note: "(1)은 출처 6장 2절 Theorem 2.1(p.166)의 실내적공간판('고유벡터로 된 정규직교 기저가 있다')이고, (3)은 Theorem 2.2 의 실수 행렬판('A = UDU*, A 가 실수이면 U 를 실수, 곧 직교행렬로 고를 수 있다')이다. 출처의 Remark(p.166)는 실수 행렬만 다루는 교재에서 Theorem 2.2 를 흔히 '대칭행렬의 스펙트럼 정리'라고 부른다고 적는다. 증명은 출처와 다르다: 출처는 Theorem 1.1(복소내적공간의 슈어 표현) 또는 Theorem 1.2(실내적공간판, '모든 고윳값이 실수'를 가정한다)로 상삼각행렬을 얻고, 상삼각인 자기수반행렬은 실수 대각행렬이라는 것으로 끝낸다. 이 항목은 복소수 없이, 대칭행렬의 실고윳값 항목의 (5)로 고유벡터 하나를 얻고 그 직교 여공간이 불변이라는 것으로 차원에 대한 귀납을 한다. 귀납의 뼈대는 출처 Theorem 1.1 의 증명(pp.163–164 — 고유벡터 u₁ 을 잡고 E = u₁^⊥ 에서 귀납 가정을 쓴다)과 같고, 출처의 Remark(p.164)가 '일반 사상에서는 E = u₁^⊥ 가 불변이 아니다'라고 적는 곳이 자기수반사상에서는 불변이 되어 위 오른쪽 성분이 모두 0 이 된다. 출처의 귀납은 dim X = 1 에서 시작하고, 이 항목은 V = {0} 인 차원 0 에서 시작한다. (2)의 역방향 '고유벡터로 된 정규직교 기저가 있으면 자기수반'은 출처 증명의 마지막 줄('상삼각행렬이 자기수반인 것은 정확히 실수 대각행렬일 때', p.166)과, 6장 2절 연습문제 2.14(p.170) '실고윳값을 갖는 정규사상은 자기수반이다'와 같은 방향의 내용이다. 5장 6절 연습문제 6.2(p.150)는 '유니터리 동치로 대각행렬과 같은 것은 정확히 직교하는 고유벡터의 기저가 있을 때'를 참·거짓으로 묻는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(귀납의 구조 통독, 예의 고유벡터·그람–슈미트 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. 자기수반사상과 대칭행렬은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것, 정규직교 기저는 [[orthonormal-basis|정규직교 기저]]의 것, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, 직교행렬, 직교 대각화 가능, "고유벡터로 된 정규직교 기저"는 [[orthogonal-matrix|직교행렬]]과 [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 것이며, $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것이다.

1. (자기수반사상) $T$가 자기수반이면, 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저가 있다. $V = \{0_V\}$이면 그것은 빈 열이다. 이런 기저 $\mathcal{B} = b_1, \dots, b_n$에서 $n \ge 1$이고 모든 $k$에서 $b_k$가 $\lambda_k$에 속하는 고유벡터이면, [[matrix-in-bases|기저에 관한 행렬]]은 $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이다.
2. (판정) $T$가 자기수반인 것은 정확히 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저가 있을 때이다.
3. (행렬) $n$이 자연수이고 $A$가 $n \times n$ 행렬이며 $\mathbb{R}^n$에 [[standard-inner-product|표준내적]]을 준다고 하자. 다음 셋은 서로 같다.
   - (가) $A$는 대칭행렬이다.
   - (나) $A$는 직교 대각화 가능하다. 곧 $A = QDQ^T$인 $n \times n$ 직교행렬 $Q$와 $n \times n$ 대각행렬 $D$가 있다.
   - (다) 모든 항이 $A$의 고유벡터인 $\mathbb{R}^n$의 정규직교 기저가 있다.

   이때 $A = QDQ^T$이고 $Q$가 직교행렬, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이면, 모든 $k$에서 $\lambda_k$는 $A$의 고윳값이고 $Q$의 $k$번째 열은 $\lambda_k$에 속하는 $A$의 고유벡터이며, $Q$의 열들은 $\mathbb{R}^n$의 정규직교 기저이다.
:::

:::english
Let $V$ be a finite-dimensional inner product space and $T : V \to V$ a linear map. Self-adjoint maps and symmetric matrices are those of the entry on self-adjoint maps and symmetric matrices, orthonormal bases are those of the entry on orthonormal bases, eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors, orthogonal matrices, orthogonal diagonalizability and "an orthonormal basis of eigenvectors" are those of the entries on orthogonal matrices and on change of orthonormal basis and orthogonal similarity, and $\operatorname{diag}$ is that of the entry on diagonalizability.

1. (Self-adjoint maps) If $T$ is self-adjoint, then there is an orthonormal basis of $V$ all of whose terms are eigenvectors of $T$. If $V = \{0_V\}$ it is the empty sequence. For such a basis $\mathcal{B} = b_1, \dots, b_n$ with $n \ge 1$ in which $b_k$ is an eigenvector belonging to $\lambda_k$ for every $k$, the matrix with respect to the basis is $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
2. (Criterion) $T$ is self-adjoint exactly when there is an orthonormal basis of $V$ all of whose terms are eigenvectors of $T$.
3. (Matrices) Let $n$ be a natural number, $A$ an $n \times n$ matrix, and give $\mathbb{R}^n$ the standard inner product. The following three are equivalent.
   - (a) $A$ is a symmetric matrix.
   - (b) $A$ is orthogonally diagonalizable; that is, there are an $n \times n$ orthogonal matrix $Q$ and an $n \times n$ diagonal matrix $D$ with $A = QDQ^T$.
   - (c) There is an orthonormal basis of $\mathbb{R}^n$ all of whose terms are eigenvectors of $A$.

   In that case, if $A = QDQ^T$ with $Q$ orthogonal and $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, then for every $k$, $\lambda_k$ is an eigenvalue of $A$, the $k$-th column of $Q$ is an eigenvector of $A$ belonging to $\lambda_k$, and the columns of $Q$ form an orthonormal basis of $\mathbb{R}^n$.
:::

## 직관

대칭행렬 $A$가 공간에 하는 일을 정규직교 기저의 방향마다 따로 보면 단순해집니다. 고유벡터로 된 정규직교 기저 $u_1, \dots, u_n$이 있으면 $A$는 $u_k$ 방향으로 $\lambda_k$배 늘이고(음수이면 뒤집어 늘이고) 방향끼리 섞지 않습니다. 고무판을 서로 수직인 몇 방향으로만 당기는 것과 같습니다. 비유가 정의와 맞는 곳은 "당기는 방향들이 서로 수직"이라는 것이 정규직교 기저에, "그 방향으로는 늘어나기만 한다"는 것이 고유벡터에 해당한다는 점입니다. 비유와 달리 $\lambda_k$는 $0$이나 음수일 수 있습니다.

증명은 고유벡터를 하나씩 떼어 냅니다. [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (5)로 고유벡터 $u$를 하나 얻으면, [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 (5)에 의해 $u$에 수직인 벡터들의 공간 $\operatorname{span}(u)^\perp$는 $T$가 다시 자기 안으로 보내는 공간이고, 차원이 하나 작으며, 그 위에서도 $T$는 자기수반입니다. 그래서 차원에 대한 귀납 가정을 그 공간에 쓰고 $u$를 앞에 붙이면 됩니다. 자기수반이 아니면 $\operatorname{span}(u)^\perp$가 $T$에 대해 불변이 아닐 수 있어 이 내려가기가 막힙니다.

(2)와 (3)의 거꾸로 방향은 대칭이 꼭 필요하다는 것을 말합니다. 대각화 가능하더라도 대칭이 아닌 행렬은 고유벡터들을 서로 수직으로 고를 수 없습니다([[orthogonal-diagonalization-examples|직교 대각화의 예]]).

## 증명

:::idea
"차원이 $d$인 모든 유한차원 내적공간과 그 위의 모든 자기수반사상에 고유벡터로 된 길이 $d$인 정규직교 기저가 있다"를 $d$에 대한 귀납으로 보인다. 귀납 단계에서는 정규화한 고유벡터 $u$와 $\operatorname{span}(u)^\perp$의 기저를 이어 붙인다. (2)와 (3)은 정규직교 기저의 변환 항목의 (6), (4), (5)로 옮긴다.
:::

:::hint
귀납 명제가 공간을 한정해야 합니다. 귀납 가정을 쓰는 공간 $\operatorname{span}(u)^\perp$는 처음 공간 $V$와 다른 공간이기 때문입니다.
:::

:::hint
$\operatorname{span}(u)^\perp$의 정규직교 기저의 항 $w_j$는 $u$와 직교하므로, [[orthonormal-list|직교하는 열과 정규직교 열]]의 (5)로 $u$를 앞에 붙인 열도 정규직교 열입니다. 길이가 $\dim V$이므로 기저입니다.
:::

:::proof
아래에서 (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로, 불변 부분공간의 성질은 [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 번호로, 정규직교 기저의 변환의 성질은 [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 번호로 인용한다. 부분공간은 [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 내적공간으로 본다.

**(1).** $0$ 이상인 정수 $d$에 대하여 명제 $S_d$를 다음과 같이 둔다. "$\dim W = d$인 모든 유한차원 내적공간 $W$와 $W$ 위의 모든 자기수반사상 $R : W \to W$에 대하여, 모든 항이 $R$의 고유벡터인 $W$의 길이 $d$인 정규직교 기저가 있다." 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 모든 $d \ge 0$에서 $S_d$를 보인다.

기초 단계: $\dim W = 0$이면 [[dimension|유한차원과 차원]]의 (3)에 의해 $W = \{0_W\}$이고, [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 빈 열이 $W$의 정규직교 기저이다. 빈 열에는 항이 없으므로 "모든 항이 $R$의 고유벡터"는 참이다.

귀납 단계: $d \ge 0$이고 $S_d$가 참이라 하자. $W$가 유한차원 내적공간이고 $\dim W = d + 1$이며 $R : W \to W$가 자기수반이라 하자. $d + 1 \ne 0$이므로 차원의 (3)에 의해 $W \ne \{0_W\}$이다. [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (5)에 의해 $R$은 고윳값 $\lambda$를 갖고, 고윳값의 정의에 의해 $\lambda$에 속하는 고유벡터 $v$가 있다. $v \ne 0_W$이므로 노름의 (4)에 의해 $u = \lVert v \rVert^{-1} v$는 단위벡터이고 $u \ne 0_W$이다. [[linear-map|선형사상]]의 (T-배), (V6), [[real-number-arithmetic|(K1)]]에 의해 $Ru = \lVert v \rVert^{-1}(Rv) = \lVert v \rVert^{-1}(\lambda v) = \lambda(\lVert v \rVert^{-1} v) = \lambda u$이므로 $u$는 $\lambda$에 속하는 $R$의 고유벡터이다.

$E = \operatorname{span}(u)^\perp$로 두자([[orthogonal-complement|직교 여공간]], [[linear-combination-and-span|생성]]). 불변 부분공간의 (5)에 의해 $E$는 $R$-불변이고 $\dim E = (d + 1) - 1 = d$이며, $R$을 $E$로 제한한 사상 $R|_E : E \to E$는 자기수반이다. 불변 부분공간의 (4)에 의해 $E$는 유한차원 내적공간이다. 귀납 가정 $S_d$를 $E$와 $R|_E$에 쓰면, 모든 항이 $R|_E$의 고유벡터인 $E$의 길이 $d$인 정규직교 기저 $w_1, \dots, w_d$가 있다. 불변 부분공간의 (2)에 의해 각 $w_j$는 $R$의 고유벡터이다. [[orthonormal-list|직교하는 열과 정규직교 열]]의 (6)에 의해 $w_1, \dots, w_d$는 $W$의 정규직교 열이다. $u \in \operatorname{span}(u)$이므로 직교 여공간의 정의에 의해 모든 $j$에서 $\langle w_j, u \rangle = 0$이고, 내적의 조건 (i)에 의해 $\langle u, w_j \rangle = 0$, 곧 $u \perp w_j$이다. 길이 $1$인 열 $u$는 직교하는 열이고 $u$가 단위벡터이므로 정규직교 열이다. 직교하는 열과 정규직교 열의 (5)에 의해 이어 붙인 열 $u, w_1, \dots, w_d$는 $W$의 정규직교 열이다. 그 길이는 $d + 1 = \dim W$이므로 정규직교 기저의 (1)에 의해 $W$의 정규직교 기저이고, 모든 항이 $R$의 고유벡터이다. 따라서 $S_{d+1}$이 참이다.

수학적 귀납법에 의해 모든 $d \ge 0$에서 $S_d$가 참이다. $V$는 유한차원이므로 차원의 (2)에 의해 $\dim V$는 $0$ 이상인 정수이고, $S_{\dim V}$를 $V$와 $T$에 쓰면 첫 문장이 나온다. $V = \{0_V\}$이면 차원의 (3)에 의해 $\dim V = 0$이므로 그 기저는 빈 열이다.

마지막 문장: $\mathcal{B}$가 그런 기저이고 $n \ge 1$이면, 정규직교 기저의 (4)에 의해 $([T]_{\mathcal{B}})_{j,k} = \langle T b_k, b_j \rangle = \langle \lambda_k b_k, b_j \rangle = \lambda_k \langle b_k, b_j \rangle$이고(내적의 (1)), $\mathcal{B}$가 정규직교 열이므로 이 값은 $j = k$일 때 $\lambda_k$, $j \ne k$일 때 $0$이다. [[diagonalizable|대각화 가능]]의 $\operatorname{diag}$의 정의와 [[matrix|행렬]]의 (2)에 의해 $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이다.

**(2).** 자기수반이면 그런 기저가 있다는 것은 (1)이다. 거꾸로 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저 $\mathcal{D}$가 있다고 하자. $\dim V = 0$이면 차원의 (3)에 의해 $V = \{0_V\}$이고, $T$는 영사상이다(모든 값이 $0_V$). [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (4)에 의해 영사상은 자기수반이다. $\dim V = n \ge 1$이면 정규직교 기저의 변환의 (6)을 $\mathcal{B} = \mathcal{D}$로 두고 쓴다. (가)가 성립하므로 (다)에 의해 $[T]_{\mathcal{D}}$는 직교 대각화 가능하고, 정규직교 기저의 변환의 (5)에 의해 $[T]_{\mathcal{D}}$는 대칭행렬이다. 자기수반사상과 대칭행렬의 (3)에 의해 $T$는 자기수반이다.

**(3).** (가)이면 (다): 자기수반사상과 대칭행렬의 (2)에 의해 $T_A : \mathbb{R}^n \to \mathbb{R}^n$([[matrix-vector-product|행렬과 벡터의 곱]]의 (2))은 자기수반이고, [[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이므로 (1)에 의해 모든 항이 $T_A$의 고유벡터인 정규직교 기저가 있다. $A$의 고유벡터는 $T_A$의 고유벡터를 말하므로 이것이 (다)이다.

(다)와 (나)가 같다는 것은 정규직교 기저의 변환의 (4)의 마지막 단락이다. (나)이면 (가)는 정규직교 기저의 변환의 (5)이다.

마지막 단락: $A = QDQ^T$이고 $Q$가 직교행렬, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이면 정규직교 기저의 변환의 (4)의 (i)에 의해 $Q$의 열들은 $\mathbb{R}^n$의 정규직교 기저이고 $k$번째 열 $\mathbf{q}_k$는 $\lambda_k$에 속하는 $A$의 고유벡터이다. 고윳값의 정의에 의해 $\lambda_k$는 $A$의 고윳값이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 대칭행렬에서 고유벡터를 하나씩 떼어 내기]
$$
A = \begin{pmatrix} 0 & 0 & 2 \\ 0 & 3 & 0 \\ 2 & 0 & 0 \end{pmatrix}
$$
은 대칭입니다. $u = (0, 1, 0)$이면 $Au = (0, 3, 0) = 3u$이므로 $u$는 $3$에 속하는 단위 고유벡터입니다. $\operatorname{span}(u)^\perp$는 둘째 값이 $0$인 벡터 전체이고, 그 원소 $x = (x_1, 0, x_3)$에서 $Ax = (2x_3, 0, 2x_1)$도 둘째 값이 $0$이어서 이 공간은 $A$가 자기 안으로 보내는 공간입니다. 그 안에서 $w_1 = 2^{-1}\sqrt{2}\,(1, 0, 1)$은 $Aw_1 = 2w_1$, $w_2 = 2^{-1}\sqrt{2}\,(1, 0, -1)$은 $Aw_2 = -2w_2$를 만족하고 $\langle w_1, w_2 \rangle = 2^{-1}(1 - 1) = 0$입니다. 증명의 귀납 단계대로 $u, w_1, w_2$가 고유벡터로 된 $\mathbb{R}^3$의 정규직교 기저이고, (3)의 $Q$는 이 세 벡터를 열로 둔 행렬, $D = \operatorname{diag}(3, 2, -2)$입니다.
:::

:::example[1 × 1 행렬과 단위행렬의 배]
$n = 1$이면 모든 $1 \times 1$ 행렬 $\begin{pmatrix} a \end{pmatrix}$는 대칭이고, $e_1$이 $a$에 속하는 단위 고유벡터이므로 $Q = I_1$, $D = \begin{pmatrix} a \end{pmatrix}$입니다. $A = cI_n$이면 $\mathbb{R}^n$의 모든 영벡터가 아닌 벡터가 $c$에 속하는 고유벡터이므로 $\mathbb{R}^n$의 모든 정규직교 기저가 (다)의 기저입니다. 곧 (3)의 $Q$는 하나로 정해지지 않을 수 있습니다.
:::

## 확인 질문

:::check[$2 \times 2$ 대칭행렬 $A$의 고유벡터 하나가 $(3, 4)$이면 $(4, -3)$도 $A$의 고유벡터인가?]
그렇습니다. 증명의 귀납 단계에서 $u = 5^{-1}(3, 4)$를 떼어 내면 $\operatorname{span}(u)^\perp$는 $(4, -3)$의 실수배 전체이고, 불변 부분공간의 (5)에 의해 $A$는 이 공간을 자기 안으로 보냅니다. 따라서 $A(4, -3)$은 $(4, -3)$의 실수배이고, $(4, -3)$은 $A$의 고유벡터입니다. $5^{-1}(3, 4)$와 $5^{-1}(4, -3)$이 고유벡터로 된 정규직교 기저입니다.
:::

:::check[$Q$가 직교행렬이고 $D$가 대각행렬일 때 $A = QDQ^T$의 전치행렬은 무엇인가?]
[[transpose|전치행렬]]의 (4)와 (1)에 의해 $A^T = (Q^T)^T D^T Q^T = Q D^T Q^T$이고, 대각행렬은 $j \ne k$에서 두 성분이 모두 $0$이므로 $D^T = D$입니다. 따라서 $A^T = A$입니다. 이것이 (나)이면 (가)인 까닭입니다.
:::
