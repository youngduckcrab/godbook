---
title: 대각화와 고유벡터의 기저
title_en: Diagonalization and Bases of Eigenvectors
aliases: [고유벡터로 된 기저, 고유기저, 대각화 가능할 조건, eigenbasis, basis of eigenvectors, diagonalizability criterion]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 기저에 관한 행렬이 대각행렬인 것은 정확히 기저의 각 항이 고유벡터일 때이다. 따라서 선형사상이나 정사각행렬이 대각화 가능한 것은 정확히 고유벡터로 된 기저가 있을 때이고, 행렬이면 그 기저를 열로 하는 S 와 고윳값의 대각행렬 D 로 A = SDS⁻¹ 이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, linear-independence, basis-iff-independent-and-spanning, dimension, linear-map, injective-iff-trivial-kernel, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, eigenvalue-and-eigenvector, matrix-in-bases, diagonalizable]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2.1절 Preliminaries와 식 (2.1), p.106; Theorem 2.1과 그 증명, p.106; Theorem 2.1 뒤의 Remark, p.107
    checked: original
    note: "출처는 2.1절(p.106)에서 V 에 고유벡터로 된 기저 B 가 있으면 그 기저에 관한 행렬이 diag{λ_1, …, λ_n} 이고, 거꾸로 행렬이 그런 꼴이면 'trivially' Ab_k = λ_kb_k 라고 적는다. 이 항목의 (1)이 그 두 방향이다. 출처의 Theorem 2.1(p.106)은 행렬 A 가 대각행렬 D 와 가역행렬 S 로 A = SDS⁻¹ 로 나타나는 것은 정확히 Fⁿ 에 A 의 고유벡터로 된 기저가 있을 때이고, 이때 D 의 대각성분은 고윳값, S 의 열은 그에 대응하는 고유벡터라고 진술한다. 출처는 S 를 [I]_SB 로 보아 D = S⁻¹AS = [A]_BB 를 얻어 2.1절로 돌리고, Remark(p.107)에서 '간단한 직접 계산'으로도 S 의 열이 고유벡터임을 보일 수 있다고 적는다. 이 항목의 (3)은 그 직접 계산(AS = SD 를 열마다 비교)이고, (4)는 Theorem 2.1 이다. 선형사상에 대한 (2)는 출처 2절 첫머리의 대각화의 뜻(기저에 관한 행렬이 대각행렬)과 2.1절을 합친 것이다. 기저의 항마다 고윳값을 하나씩 붙일 때, 이 항목은 eigenvalue-and-eigenvector 의 (5)(고유벡터가 속하는 고윳값은 하나뿐)로 값이 정해지므로 (G)로 실수의 열을 만든다. 출처는 이 단계를 적지 않는다. 출처의 F 는 ℝ 로 둔다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $\lambda_1, \dots, \lambda_n$이 길이 $n$인 실수의 열이라 하자. 고유벡터, [[diagonalizable|대각행렬]]과 $\operatorname{diag}$, 대각화 가능, 기저에 관한 행렬 $[T]_{\mathcal{B}}$는 앞 항목들에서 정한 것이다.

1. $V$가 [[dimension|유한차원]] 벡터공간이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]], $\mathcal{B} = b_1, \dots, b_n$이 $V$의 기저라 하자. $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $Tb_k = \lambda_k b_k$일 때이다. 이때 모든 $k$에서 $b_k$는 $\lambda_k$에 속하는 $T$의 [[eigenvalue-and-eigenvector|고유벡터]]이다.
2. (1)의 $V$와 $T$에 대하여, $T$가 대각화 가능인 것은 정확히 모든 항이 $T$의 고유벡터인 $V$의 기저(**고유벡터로 된 기저**, eigenbasis)가 있을 때이다. $\mathcal{B} = b_1, \dots, b_n$이 고유벡터로 된 기저이면, 각 $k$에서 $b_k$가 속하는 고윳값은 하나로 정해지고, 그 고윳값을 $\lambda_k$로 둔 실수의 열에 대하여 $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이다.
3. $A$, $S$가 $n \times n$ [[matrix|행렬]]이고 $S$가 [[invertible-matrix|가역]]이며 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하자. $S$의 열을 $\mathbf{s}_1, \dots, \mathbf{s}_n$이라 하면, $A = SDS^{-1}$인 것은 정확히 모든 $k$에서 $A\mathbf{s}_k = \lambda_k \mathbf{s}_k$일 때이다. 이때 $\mathbf{s}_1, \dots, \mathbf{s}_n$은 $\mathbb{R}^n$의 기저이고 모든 $k$에서 $\mathbf{s}_k$는 $\lambda_k$에 속하는 $A$의 고유벡터이다.
4. $n \times n$ 행렬 $A$가 대각화 가능인 것은 정확히 $A$의 고유벡터로 된 $\mathbb{R}^n$의 기저가 있을 때이다. $b_1, \dots, b_n$이 그런 기저이면, $k$번째 열이 $b_k$인 행렬 $S$는 가역이고, $b_k$가 속하는 고윳값을 $\lambda_k$로 둔 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$에 대하여 $A = SDS^{-1}$이다.
:::

:::english
Let $n$ be a natural number and $\lambda_1, \dots, \lambda_n$ a sequence of real numbers of length $n$. Eigenvectors, diagonal matrices, $\operatorname{diag}$, diagonalizability and the matrix $[T]_{\mathcal{B}}$ with respect to a basis are as defined in the preceding entries.

1. Let $V$ be a finite-dimensional vector space with $\dim V = n$, $T : V \to V$ a linear map, and $\mathcal{B} = b_1, \dots, b_n$ a basis of $V$. Then $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ exactly when $Tb_k = \lambda_k b_k$ for every $k \in \{1, \dots, n\}$. In that case, for every $k$, $b_k$ is an eigenvector of $T$ corresponding to $\lambda_k$.
2. For $V$ and $T$ as in (1), $T$ is diagonalizable exactly when there is a basis of $V$ all of whose terms are eigenvectors of $T$ (a **basis of eigenvectors**, or eigenbasis). If $\mathcal{B} = b_1, \dots, b_n$ is a basis of eigenvectors, then for each $k$ the eigenvalue to which $b_k$ corresponds is uniquely determined, and for the sequence of real numbers with $\lambda_k$ equal to that eigenvalue, $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
3. Let $A$, $S$ be $n \times n$ matrices with $S$ invertible, and $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$. Writing $\mathbf{s}_1, \dots, \mathbf{s}_n$ for the columns of $S$, $A = SDS^{-1}$ exactly when $A\mathbf{s}_k = \lambda_k \mathbf{s}_k$ for every $k$. In that case $\mathbf{s}_1, \dots, \mathbf{s}_n$ is a basis of $\mathbb{R}^n$, and for every $k$, $\mathbf{s}_k$ is an eigenvector of $A$ corresponding to $\lambda_k$.
4. An $n \times n$ matrix $A$ is diagonalizable exactly when there is a basis of $\mathbb{R}^n$ consisting of eigenvectors of $A$. If $b_1, \dots, b_n$ is such a basis, then the matrix $S$ whose $k$-th column is $b_k$ is invertible, and for $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, where $\lambda_k$ is the eigenvalue to which $b_k$ corresponds, $A = SDS^{-1}$.
:::

## 직관

대각행렬 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 $k$번째 표준기저 벡터를 $\lambda_k$배 할 뿐입니다. 그러니 어떤 기저에 관한 행렬이 대각행렬이라는 것은, 그 기저의 벡터 하나하나를 사상이 "제 방향 그대로 배율만 바꾸어" 보낸다는 것, 곧 기저의 모든 항이 고유벡터라는 것과 같습니다 (1). 대각화 가능을 "좋은 기저가 있다"로 정의했으므로, (2)는 그 좋은 기저가 바로 고유벡터로 된 기저라는 말이 됩니다. 반 학생들의 줄을 다시 세우는 일에 비유하면, 대각화는 모두가 앞사람과 상관없이 혼자서 움직이는 순서로 줄을 세우는 것이고, 그런 순서가 있는지는 혼자 움직이는 학생(고유벡터)으로 줄 전체를 채울 수 있는지에 달려 있습니다. 비유가 맞는 곳은 "기저 전체"가 필요하다는 점입니다. 고유벡터 몇 개가 있는 것만으로는 부족하고 그것들로 기저를 이루어야 합니다(아래 반례).

행렬에서는 같은 내용이 등식 $A = SDS^{-1}$로 나타납니다. 양변의 오른쪽에 $S$를 곱하면 $AS = SD$이고, 두 행렬의 $k$번째 열을 비교하면 $A\mathbf{s}_k = \lambda_k \mathbf{s}_k$가 됩니다 (3). $S$가 가역이라는 가정은 $AS = SD$에서 $A = SDS^{-1}$로 되돌아가는 단계와, $S$의 열이 기저이므로 영벡터가 아니라는 단계에서 쓰입니다.

## 증명

:::idea
행렬은 열로 정해지므로 행렬의 등식을 열마다 비교한다. 기저에 관한 행렬의 $k$번째 열은 $Tb_k$의 좌표벡터이고, $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 $k$번째 열은 $\lambda_k e_k$, 곧 $\lambda_k b_k$의 좌표벡터이다.
:::

:::hint
(1)에서 $[Tb_k]_{\mathcal{B}} = \lambda_k e_k$와 $Tb_k = \lambda_k b_k$가 같은 말임을 보이세요. $\lambda_k e_k = \lambda_k [b_k]_{\mathcal{B}}$입니다.
:::

:::hint
(2)의 역방향에서는 기저의 각 항에 고윳값을 하나씩 붙여 실수의 열을 만들어야 합니다. 고유벡터가 속하는 고윳값이 하나뿐이라는 사실이 이 열을 정해 줍니다.
:::

:::proof
아래에서 "기저 행렬 항목"은 [[matrix-in-bases|기저에 관한 선형사상의 행렬]], "대각 항목"은 [[diagonalizable|대각화 가능]], "고윳값 항목"은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]를 가리킨다. 먼저 기저의 항은 영벡터가 아님을 적어 둔다. 기저는 [[basis-iff-independent-and-spanning|기저의 판정]]에 의해 일차독립이고, 어떤 항이 영벡터이면 [[linear-independence|일차독립]]의 (I1)에 의해 일차종속이므로, 기저의 모든 항은 영벡터가 아니다. (★)

**(1)의 증명.** [[dimension|유한차원과 차원]]의 (2)에 의해 $V$의 기저의 길이는 $n$이므로 $[T]_{\mathcal{B}}$는 $n \times n$ 행렬이다. 기저 행렬 항목의 (2)에 의해 $[T]_{\mathcal{B}}$의 $k$번째 열은 $[Tb_k]_{\mathcal{B}}$이고, 대각 항목의 (2)에 의해 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 $k$번째 열은 $\lambda_k e_k$이다. 기저 행렬 항목의 (1)에 의해 $\lambda_k e_k = \lambda_k [b_k]_{\mathcal{B}} = [\lambda_k b_k]_{\mathcal{B}}$이다. [[matrix|행렬]]의 (3)에 의해, $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$인 것은 정확히 모든 $k$에서 $[Tb_k]_{\mathcal{B}} = [\lambda_k b_k]_{\mathcal{B}}$일 때이다.

이 등식이 $Tb_k = \lambda_k b_k$와 같음을 보이자. $Tb_k = \lambda_k b_k$이면 두 좌표벡터는 같다. 거꾸로 두 좌표벡터가 같으면 기저 행렬 항목의 (1)의 $C_{\mathcal{B}}([u]_{\mathcal{B}}) = u$에 의해 $Tb_k = C_{\mathcal{B}}([Tb_k]_{\mathcal{B}}) = C_{\mathcal{B}}([\lambda_k b_k]_{\mathcal{B}}) = \lambda_k b_k$이다. 따라서 $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$인 것은 정확히 모든 $k$에서 $Tb_k = \lambda_k b_k$일 때이다. 이때 (★)에 의해 $b_k \ne 0_V$이므로 $b_k$는 $\lambda_k$에 속하는 고유벡터이다.

**(2)의 증명.** ($\Rightarrow$) $T$가 대각화 가능이면 $[T]_{\mathcal{B}}$가 대각행렬인 기저 $\mathcal{B}$가 있다. 대각 항목의 (1)에 의해 $[T]_{\mathcal{B}} = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이고($d_{k,k}$는 $[T]_{\mathcal{B}}$의 $(k, k)$ 성분), (1)에 의해 모든 $b_k$는 $d_{k,k}$에 속하는 고유벡터이다. 따라서 $\mathcal{B}$는 고유벡터로 된 기저이다.

($\Leftarrow$와 뒷부분) $\mathcal{B} = b_1, \dots, b_n$이 고유벡터로 된 기저라 하자. 각 $k$에서 $b_k$는 $T$의 고유벡터이므로, 고윳값 항목의 정의에 의해 $b_k$가 속하는 실수가 있고, 같은 항목의 (5)에 의해 그런 실수는 하나뿐이다. 곧 각 $k \in \{1, \dots, n\}$에 실수가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $k$번째 항이 그 실수인 길이 $n$인 실수의 열이 있다([[finite-sum-of-vectors|벡터의 유한 합]]의 진술 첫 문단). 이 열을 $\lambda_1, \dots, \lambda_n$이라 하면 모든 $k$에서 $Tb_k = \lambda_k b_k$이고, (1)에 의해 $[T]_{\mathcal{B}} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이다. 대각 항목의 (1)에 의해 이것은 대각행렬이므로 $T$는 대각화 가능이다.

**(3)의 증명.** 곱의 괄호는 [[matrix-product-properties|행렬 곱의 성질]]의 (1)에 의해 어떻게 쳐도 같다. 먼저 $A = SDS^{-1}$인 것은 정확히 $AS = SD$일 때임을 보이자. [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $S^{-1}S = SS^{-1} = I_n$이다. $A = SDS^{-1}$이면 $AS = (SDS^{-1})S = SD(S^{-1}S) = SDI_n = SD$이다(행렬 곱의 성질의 (4)). 거꾸로 $AS = SD$이면 $A = AI_n = A(SS^{-1}) = (AS)S^{-1} = (SD)S^{-1} = SDS^{-1}$이다.

[[matrix-product|행렬의 곱]]의 정의에 의해 $AS$의 $k$번째 열은 $A\mathbf{s}_k$이고 $SD$의 $k$번째 열은 $S$와 $D$의 $k$번째 열의 곱이다. 대각 항목의 (2)에 의해 $D$의 $k$번째 열은 $\lambda_k e_k$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (2), (3)에 의해 $S(\lambda_k e_k) = \lambda_k(Se_k) = \lambda_k \mathbf{s}_k$이다. 행렬의 (3)에 의해 $AS = SD$인 것은 정확히 모든 $k$에서 $A\mathbf{s}_k = \lambda_k \mathbf{s}_k$일 때이다.

$S$가 가역이므로 가역행렬과 역행렬의 (3)에 의해 $\mathbf{s}_1, \dots, \mathbf{s}_n$은 $\mathbb{R}^n$의 기저이고, (★)에 의해 모든 $\mathbf{s}_k$는 영벡터가 아니다. 따라서 $A\mathbf{s}_k = \lambda_k \mathbf{s}_k$이면 고윳값 항목의 정의(행렬의 고유벡터는 $T_A$의 것)에 의해 $\mathbf{s}_k$는 $\lambda_k$에 속하는 $A$의 고유벡터이다.

**(4)의 증명.** ($\Rightarrow$) $A$가 대각화 가능이면 대각 항목의 (5)에 의해 $A = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 대각행렬 $D$가 있고, 대각 항목의 (1)에 의해 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이다. (3)을 실수의 열 $d_{1,1}, \dots, d_{n,n}$에 쓰면 $S$의 열은 $\mathbb{R}^n$의 기저이고 모든 항이 $A$의 고유벡터이다.

($\Leftarrow$와 뒷부분) $b_1, \dots, b_n$이 $A$의 고유벡터로 된 $\mathbb{R}^n$의 기저라 하자. 행렬의 (4)에 의해 $k$번째 열이 $b_k$인 $n \times n$ 행렬 $S$가 있고, 가역행렬과 역행렬의 (3)에 의해 $S$는 가역이다. (2)의 증명과 같은 근거(고윳값 항목의 정의와 (5), 그리고 (G))로 $b_k$가 속하는 고윳값 $\lambda_k$의 열이 정해지고 모든 $k$에서 $A\mathbf{s}_k = Ab_k = \lambda_k b_k = \lambda_k \mathbf{s}_k$이다. (3)에 의해 $A = SDS^{-1}$이고, $D$는 대각행렬이므로 대각 항목의 (5)에 의해 $A$는 대각화 가능이다. $\blacksquare$
:::

## 예시와 반례

:::example[고유벡터를 찾아 대각화하기]
$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$이라 합시다. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Ae_1 = (2, 0) = 2e_1$이고, $w = (1, 1)$이면 $Aw = (2, 0) + (1, 3) = (3, 3) = 3w$입니다. 두 벡터는 영벡터가 아니므로 $e_1$은 $2$에, $w$는 $3$에 속하는 고유벡터입니다.

$S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$(열이 $e_1$, $w$)과 $R = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$에서, $SR$의 열은 $S(1, 0) = (1, 0)$과 $S(-1, 1) = -(1, 0) + (1, 1) = (0, 1)$이고, $RS$의 열은 $R(1, 0) = (1, 0)$과 $R(1, 1) = (1, 0) + (-1, 1) = (0, 1)$이므로 $SR = RS = I_2$, 곧 $S$는 가역이고 $S^{-1} = R$입니다. [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 $e_1$, $w$는 $\mathbb{R}^2$의 기저이고, (4)에 의해
$$A = S \operatorname{diag}(2, 3) S^{-1}$$
입니다. 직접 확인하면 $S\operatorname{diag}(2, 3)$의 열은 $2(1, 0)$, $3(1, 1)$이고, 여기에 $R$을 곱한 행렬의 열은 $(2, 0)$과 $-(2, 0) + (3, 3) = (1, 3)$이어서 $A$의 열과 같습니다.
:::

:::counterexample[$AS = SD$이지만 $S$가 가역이 아닌 예]
위 예시의 $A$와 $S' = \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$, $D' = \operatorname{diag}(2, 2)$를 봅시다. $S'$의 두 열 $e_1$과 $(2, 0)$은 모두 $2$에 속하는 $A$의 고유벡터이고($A(2, 0) = (4, 0)$), $AS'$의 열 $(2, 0)$, $(4, 0)$과 $S'D'$의 열 $2(1, 0)$, $2(2, 0)$이 같으므로 $AS' = S'D'$입니다. 그러나 $2e_1 + (-1)(2, 0) = (0, 0)$이므로 $S'$의 열은 일차종속이고, 가역행렬과 역행렬의 (3)에 의해 $S'$는 가역이 아닙니다. 그래서 (3)의 가정이 충족되지 않고 $S'D'S'^{-1}$은 정의되지도 않습니다. 실제로 $A$는 $\operatorname{diag}(2, 2) = 2I_2$와 닮지 않았습니다. $Q^{-1}(2I_2)Q = 2(Q^{-1}Q) = 2I_2$이고 $A$의 $(1, 2)$ 성분은 $1 \ne 0$이기 때문입니다. 고유벡터 몇 개를 열로 늘어놓는 것만으로는 부족하고, 그 열이 기저여야 합니다.
:::

## 확인 질문

:::check[(1)의 설정에서 $[T]_{\mathcal{B}} = \operatorname{diag}(2, 0)$이면 $Tb_2$는 무엇이고, $T$는 단사인가?]
(1)에 의해 $Tb_2 = 0b_2 = 0_V$입니다((B3)). $b_2$는 기저의 항이라 영벡터가 아니므로 $\operatorname{Ker} T \ne \{0_V\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$는 단사가 아닙니다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (6)으로 말하면 $0$이 $T$의 고윳값입니다.
:::

:::check[$\mathbb{R}^n$의 어떤 기저가 $I_n$의 고유벡터로 된 기저인가?]
모든 기저입니다. 모든 $x$에서 $I_n x = x = 1x$이므로([[matrix-vector-product|행렬과 벡터의 곱]]의 (3), (V5)) 영벡터가 아닌 모든 벡터가 $1$에 속하는 $I_n$의 고유벡터이고, 기저의 항은 영벡터가 아닙니다. 그래서 (4)의 $S$로 어떤 가역행렬을 골라도 $D = I_n$이고 $I_n = SI_nS^{-1}$입니다.
:::
