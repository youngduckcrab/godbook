---
title: 대각화 가능
title_en: Diagonalizable
aliases: [대각행렬, 대각화, 대각화 가능한 행렬, 대각화 가능한 선형사상, diagonal matrix, diagonalization, diagonalizable matrix, diagonalizable operator]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 대각성분 밖의 성분이 모두 0 인 정사각행렬을 대각행렬이라 하고, 대각행렬과 닮은 행렬과 어떤 기저에 관한 행렬이 대각행렬인 선형사상을 대각화 가능하다고 한다. 대각행렬의 고윳값은 정확히 대각성분들이고, 선형사상이 대각화 가능한 것은 어느 한 기저(곧 모든 기저)에 관한 그 행렬이 대각화 가능할 때이다.
requires: [real-number-arithmetic, vector-space, real-function-space, finite-sum-of-vectors, standard-basis, dimension, linear-map, isomorphism-and-bases, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, eigenvalue-and-eigenvector, matrix-in-bases, change-of-basis-and-similarity]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2절 Diagonalization 첫머리, pp.105–106; 2.1절 Preliminaries와 식 (2.1), p.106; 대각행렬의 정의와 diag 기호는 3장 3.3절, p.81
    checked: original
    note: "출처는 4장 2절 첫머리(p.105)에서 연산자의 대각화를 그 연산자의 행렬이 대각행렬이 되는 기저를 찾는 일이라 하고, p.106에서 Fⁿ 의 연산자(행렬)에서는 대각화 가능하다는 것이 D 가 대각행렬이고 S 가 가역인 꼴 A = SDS⁻¹ 로 나타낼 수 있다는 뜻이라고 적는다. 대각화 가능한 연산자와 행렬의 정식 정의는 이 설명뿐이다. 이 항목은 선형사상의 대각화 가능을 출처의 설명대로 '기저에 관한 행렬이 대각행렬인 기저가 있다'로, 행렬의 대각화 가능을 '대각행렬과 닮았다'로 정의하고, 이것이 A = SDS⁻¹ 꼴과 같다는 것을 (5)로 보인다. 대각행렬의 정의(j ≠ k 이면 a_{j,k} = 0)와 기호 diag{a_1, …, a_n} 은 출처 3장 3.3절(p.81)에 있다. 이 항목은 diag(λ_1, …, λ_n) 으로 쓴다. 대각행렬의 고윳값이 대각성분이라는 것은 출처 4장 1.7절(p.103)에 삼각행렬의 경우로 행렬식을 써서 나온다. 이 항목의 (4)는 행렬식 없이 직접 증명한다. 대각행렬끼리의 곱 (3)은 출처에 진술로 없다(책에서 'diagonal'이 나오는 곳을 검색한 범위). 출처는 4장 2절 첫머리(p.105)에서 대각행렬의 거듭제곱은 계산하기 쉽다고 하고, 2.2절(pp.107–108)에서 대각행렬의 거듭제곱이 대각성분의 거듭제곱으로 된 대각행렬이라는 식 [A^N]_BB = diag{λ₁^N, …, λₙ^N} 을 증명 없이 적으며, 대각행렬 둘의 곱은 따로 진술하지 않는다. 선형사상의 대각화 가능이 기저에 관한 행렬의 대각화 가능과 같다는 (6), 행렬 A 와 T_A 의 대각화 가능이 같다는 (7)과 모든 증명은 이 사이트가 썼다. 차원이 0 인 공간은 크기 0 인 행렬이 없으므로 다루지 않는다. 예시는 출처 4장 2.7.1절(pp.112–113)의 (1 2; 8 1) 의 대각화 A = (1 1; 2 −2) diag(5, −3) (1 1; 2 −2)⁻¹ 과 같은 꼴이며, 출처는 특성다항식으로 고윳값을 구하고 이 항목은 AS = SD 를 직접 확인한다. 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 고유벡터의 정의, 출처 메모, 출처의 예와 같은 꼴임을 밝히는 일, 반례의 일반화를 보완했다. 마지막 표현 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$n$이 자연수라 하자.

**대각행렬.** $n \times n$ [[matrix|행렬]] $D$가 **대각행렬**(diagonal matrix)인 것은 정확히 $j \ne k$인 모든 $j, k \in \{1, \dots, n\}$에서 $d_{j,k} = 0$일 때이다. $\lambda_1, \dots, \lambda_n$이 길이 $n$인 실수의 열이면, 각 $(j, k)$에 실수($j = k$이면 $\lambda_k$, $j \ne k$이면 $0$)가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $(j, k)$ 성분이 이 실수인 $n \times n$ 행렬이 있다. 함수는 값으로 정해지므로 이 행렬은 하나뿐이다. 이것을 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$으로 쓴다.

**행렬의 대각화 가능.** $n \times n$ 행렬 $A$가 **대각화 가능**(diagonalizable)인 것은 정확히 $A$가 어떤 $n \times n$ 대각행렬과 [[change-of-basis-and-similarity|닮았을]] 때이다.

**선형사상의 대각화 가능.** $V$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. $V$의 기저는 모두 길이가 $n$이므로 기저 $\mathcal{B}$마다 $n \times n$ 행렬 $[T]_{\mathcal{B}}$([[matrix-in-bases|기저에 관한 선형사상의 행렬]])가 정해진다. $T$가 **대각화 가능**인 것은 정확히 $[T]_{\mathcal{B}}$가 대각행렬인 $V$의 기저 $\mathcal{B}$가 있을 때이다.

다음이 성립한다. $\lambda_1, \dots, \lambda_n$과 $\mu_1, \dots, \mu_n$은 길이 $n$인 실수의 열이다.

1. $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 대각행렬이고 그 $(k, k)$ 성분은 $\lambda_k$이다. $n \times n$ 행렬 $D$가 대각행렬인 것은 정확히 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$일 때이다.
2. $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 $k$번째 열은 $\lambda_k e_k$이다($e_k$는 $\mathbb{R}^n$의 [[standard-basis|표준기저]]의 항). $x \in \mathbb{R}^n$이면 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)x$의 $k$번째 값은 $\lambda_k x_k$이다.
3. $\operatorname{diag}(\lambda_1, \dots, \lambda_n)\operatorname{diag}(\mu_1, \dots, \mu_n) = \operatorname{diag}(\lambda_1 \mu_1, \dots, \lambda_n \mu_n)$이다.
4. 실수 $c$가 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 [[eigenvalue-and-eigenvector|고윳값]]인 것은 정확히 $c = \lambda_k$인 $k \in \{1, \dots, n\}$이 있을 때이다. 모든 $k$에서 $e_k$는 $\lambda_k$에 속하는 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 고유벡터이다.
5. $n \times n$ 행렬 $A$가 대각화 가능인 것은 정확히 $A = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 $n \times n$ 대각행렬 $D$가 있을 때이다.
6. 위의 $V$와 $T$에 대하여 다음 세 조건은 서로 같다. (가) $T$는 대각화 가능이다. (나) $[T]_{\mathcal{B}}$가 대각화 가능인 $V$의 기저 $\mathcal{B}$가 있다. (다) $V$의 모든 기저 $\mathcal{B}$에서 $[T]_{\mathcal{B}}$는 대각화 가능이다.
7. $n \times n$ 행렬 $A$가 대각화 가능인 것은 정확히 선형사상 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 대각화 가능일 때이다.
:::

:::english
Let $n$ be a natural number.

**Diagonal matrix.** An $n \times n$ matrix $D$ is a **diagonal matrix** exactly when $d_{j,k} = 0$ for all $j, k \in \{1, \dots, n\}$ with $j \ne k$. If $\lambda_1, \dots, \lambda_n$ is a sequence of real numbers of length $n$, then a real number ($\lambda_k$ if $j = k$, $0$ if $j \ne k$) is assigned to each $(j, k)$, so by (G) there is an $n \times n$ matrix whose $(j, k)$ entry is this number. Since a function is determined by its values, this matrix is unique. It is written $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$.

**Diagonalizable matrix.** An $n \times n$ matrix $A$ is **diagonalizable** exactly when $A$ is similar to some $n \times n$ diagonal matrix.

**Diagonalizable linear map.** Let $V$ be a finite-dimensional vector space with $\dim V = n$ and $T : V \to V$ a linear map. Every basis of $V$ has length $n$, so each basis $\mathcal{B}$ gives an $n \times n$ matrix $[T]_{\mathcal{B}}$ (the matrix with respect to a basis). $T$ is **diagonalizable** exactly when there is a basis $\mathcal{B}$ of $V$ for which $[T]_{\mathcal{B}}$ is a diagonal matrix.

The following hold, where $\lambda_1, \dots, \lambda_n$ and $\mu_1, \dots, \mu_n$ are sequences of real numbers of length $n$.

1. $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ is a diagonal matrix, and its $(k, k)$ entry is $\lambda_k$. An $n \times n$ matrix $D$ is a diagonal matrix exactly when $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$.
2. The $k$-th column of $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ is $\lambda_k e_k$ (where $e_k$ is a term of the standard basis of $\mathbb{R}^n$). If $x \in \mathbb{R}^n$, then the $k$-th value of $\operatorname{diag}(\lambda_1, \dots, \lambda_n)x$ is $\lambda_k x_k$.
3. $\operatorname{diag}(\lambda_1, \dots, \lambda_n)\operatorname{diag}(\mu_1, \dots, \mu_n) = \operatorname{diag}(\lambda_1 \mu_1, \dots, \lambda_n \mu_n)$.
4. A real number $c$ is an eigenvalue of $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ exactly when there is $k \in \{1, \dots, n\}$ with $c = \lambda_k$. For every $k$, $e_k$ is an eigenvector of $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ corresponding to $\lambda_k$.
5. An $n \times n$ matrix $A$ is diagonalizable exactly when there are an invertible $n \times n$ matrix $S$ and an $n \times n$ diagonal matrix $D$ with $A = SDS^{-1}$.
6. For $V$ and $T$ as above, the following three conditions are equivalent. (a) $T$ is diagonalizable. (b) There is a basis $\mathcal{B}$ of $V$ for which $[T]_{\mathcal{B}}$ is diagonalizable. (c) For every basis $\mathcal{B}$ of $V$, $[T]_{\mathcal{B}}$ is diagonalizable.
7. An $n \times n$ matrix $A$ is diagonalizable exactly when the linear map $T_A : \mathbb{R}^n \to \mathbb{R}^n$ is diagonalizable.
:::

## 직관

대각행렬은 가장 다루기 쉬운 행렬입니다. (2)가 말하듯 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$을 곱하는 일은 벡터의 $k$번째 값에 $\lambda_k$를 곱하는 일을 자리마다 따로 하는 것이고, 곱하기 (3)이나 고윳값 찾기 (4)도 자리마다 실수 하나씩의 계산이 됩니다. 여러 사람에게 따로 환율을 적용해 돈을 바꿔 주는 창구를 떠올리면 됩니다. 창구마다 자기 손님만 상대하고 다른 창구와 섞이지 않는 것이 "대각성분 밖이 $0$"이라는 조건에 해당합니다. 비유가 맞지 않는 곳은, 환율과 달리 $\lambda_k$가 $0$이나 음수일 수도 있다는 점입니다.

대각화 가능하다는 것은 처음에는 섞여 보이던 사상이 기저를 잘 고르면 이런 "따로따로" 사상이 된다는 뜻입니다. 행렬에 대해서는 이것을 [[change-of-basis-and-similarity|닮음]]으로 말합니다. (6)은 두 정의가 맞물린다는 것입니다. 기저를 하나 골라 행렬로 옮겨도, 그 행렬이 대각화 가능한지는 어느 기저를 골랐는지와 상관없습니다. 증명의 열쇠는 "닮은 행렬은 같은 사상의 다른 기저에 관한 행렬"이라는 것으로, 가역행렬 $S$의 열을 좌표로 하는 벡터들을 새 기저로 삼는 단계에서 $S$가 가역이라는 가정이 쓰입니다.

## 성질의 증명

:::proof
$\operatorname{diag}(\lambda_1, \dots, \lambda_n)$을 $\Lambda$로, $\operatorname{diag}(\mu_1, \dots, \mu_n)$을 $\Lambda'$으로 줄여 쓴다. $\mathbb{R}^n$의 원소의 같음, 덧셈, 스칼라배는 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 규칙(값마다)을 따른다.

**(1)의 증명.** 정의에 의해 $j \ne k$이면 $\Lambda$의 $(j, k)$ 성분은 $0$이므로 $\Lambda$는 대각행렬이고, $(k, k)$ 성분은 $\lambda_k$이다. $D$가 대각행렬이라 하자. 각 $k$에 실수 $d_{k,k}$가 정해지므로 (G)에 의해 길이 $n$인 실수의 열 $d_{1,1}, \dots, d_{n,n}$이 있고, $D' = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$의 $(k, k)$ 성분은 $d_{k,k}$, $j \ne k$인 $(j, k)$ 성분은 $0 = d_{j,k}$이다. 모든 성분이 같으므로 [[matrix|행렬]]의 (2)에 의해 $D = D'$이다. 거꾸로 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이면 첫 문장에 의해 $D$는 대각행렬이다.

**(2)의 증명.** $\Lambda$의 $k$번째 열의 $j$번째 값은 $(j, k)$ 성분이므로 $j = k$이면 $\lambda_k$, $j \ne k$이면 $0$이다. $\lambda_k e_k$의 $j$번째 값은 $j = k$이면 $\lambda_k \cdot 1 = \lambda_k$이고 $j \ne k$이면 $\lambda_k \cdot 0 = 0$이다([[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)). 모든 자리에서 값이 같으므로 두 벡터는 같다. $x \in \mathbb{R}^n$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $\Lambda x$의 $k$번째 값은 $l$번째 항이 $\Lambda_{k,l} x_l$인 실수의 열의 합이다. 실수 전체를 벡터공간 $\mathbb{R}$(실숫값 함수의 공간의 명제 (2))로 보면 이 합은 일차결합의 계수가 $\Lambda_{k,1}, \dots, \Lambda_{k,n}$이고 벡터가 $x_1, \dots, x_n$인 일차결합이다. $l \ne k$이면 $\Lambda_{k,l} = 0$이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (C4)에 의해 이 합은 $\Lambda_{k,k} x_k = \lambda_k x_k$이다.

**(3)의 증명.** [[matrix-product|행렬의 곱]]의 정의에 의해 $\Lambda\Lambda'$의 $k$번째 열은 $\Lambda$와 $\Lambda'$의 $k$번째 열의 곱이고, (2)에 의해 $\Lambda'$의 $k$번째 열은 $\mu_k e_k$이다. 행렬과 벡터의 곱의 (2), (3)과 (2)에 의해 $\Lambda(\mu_k e_k) = \mu_k(\Lambda e_k) = \mu_k(\lambda_k e_k)$이고, [[vector-space|(V6)]]과 (K1)에 의해 이것은 $(\lambda_k \mu_k)e_k$이다. (2)에 의해 $\operatorname{diag}(\lambda_1 \mu_1, \dots, \lambda_n \mu_n)$의 $k$번째 열도 $(\lambda_k \mu_k)e_k$이다. 모든 $k$에서 열이 같으므로 행렬의 (3)에 의해 두 행렬은 같다.

**(4)의 증명.** 행렬과 벡터의 곱의 (3)과 (2)에 의해 $\Lambda e_k$는 $\Lambda$의 $k$번째 열 $\lambda_k e_k$이다. $e_k$의 $k$번째 값은 $1 \ne 0$((K4))이므로 $e_k \ne 0$이다. 따라서 $e_k$는 $\lambda_k$에 속하는 고유벡터이고, $c = \lambda_k$이면 $c$는 고윳값이다.

거꾸로 $c$가 고윳값이라 하고 $\Lambda x = cx$, $x \ne 0$이라 하자. 모든 $k$에서 $x_k = 0$이라면 $x = (0, \dots, 0) = 0$이므로 $x_k \ne 0$인 $k$가 있다. 그 $k$에서 두 변의 $k$번째 값을 비교하면 (2)에 의해 $\lambda_k x_k = cx_k$이다. (K12)(v)에 의해 $\lambda_k x_k - cx_k = 0$이고, (K12)(i)과 (K9)에 의해 $(\lambda_k - c)x_k = \lambda_k x_k + (-c)x_k = \lambda_k x_k - cx_k = 0$이다. $x_k \ne 0$이므로 (K10)에 의해 $\lambda_k - c = 0$이고, (K12)(v)에 의해 $c = \lambda_k$이다.

**(5)의 증명.** 아래에서 쓰는 역행렬의 성질은 [[inverse-matrix-properties|역행렬의 성질]]의 (2)이다. ($\Rightarrow$) $A$가 대각행렬 $D$와 닮았으면 $A = Q^{-1}DQ$인 가역 $n \times n$ 행렬 $Q$가 있다. $S = Q^{-1}$로 두면 $S$는 가역이고 $S^{-1} = Q$이므로 $A = SDS^{-1}$이다. ($\Leftarrow$) $A = SDS^{-1}$이면 $Q = S^{-1}$로 두어 $Q$는 가역이고 $Q^{-1} = S$이므로 $A = Q^{-1}DQ$이다. 곧 $A$는 대각행렬 $D$와 닮았다.

**(6)의 증명.** [[dimension|유한차원과 차원]]의 (2)에 의해 $V$의 모든 기저의 길이는 $n$이다. 아래에서 "기저 변환 항목"은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]을 가리킨다.

(가)에서 (다): $[T]_{\mathcal{B}} = D$가 대각행렬인 기저 $\mathcal{B}$가 있다고 하자. $\mathcal{A}$가 $V$의 기저이면 기저 변환 항목의 (3)에 의해 $Q = [i_V]_{\mathcal{B}\mathcal{A}}$에 대하여 $[T]_{\mathcal{A}} = Q^{-1}DQ$이고, 같은 항목의 (2)에 의해 $Q$는 가역이다. 따라서 $[T]_{\mathcal{A}}$는 대각행렬 $D$와 닮았고 대각화 가능이다.

(다)에서 (나): 유한차원과 차원의 (1)에 의해 $V$에는 기저가 있고, (다)를 그 기저에 쓰면 된다.

(나)에서 (가): $[T]_{\mathcal{A}}$가 대각화 가능인 기저 $\mathcal{A}$가 있다고 하자. (5)에 의해 $[T]_{\mathcal{A}} = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 대각행렬 $D$가 있다. [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 $S$의 열 $\mathbf{s}_1, \dots, \mathbf{s}_n$은 $\mathbb{R}^n$의 기저이다. 좌표 동형사상 $C_{\mathcal{A}} : \mathbb{R}^n \to V$는 동형사상이므로, $b_k = C_{\mathcal{A}}\mathbf{s}_k$로 둔 $V$의 열 $\mathcal{B} = b_1, \dots, b_n$([[linear-map|선형사상]]에서 정한 상의 열)은 [[isomorphism-and-bases|동형사상과 기저]]의 (3)에 의해 $V$의 기저이다. 기저 행렬 항목([[matrix-in-bases|기저에 관한 선형사상의 행렬]])의 (1)에 의해 $[b_k]_{\mathcal{A}} = [C_{\mathcal{A}}\mathbf{s}_k]_{\mathcal{A}} = \mathbf{s}_k$이므로, 기저 변환 항목의 (1)을 정의역의 기저 $\mathcal{B}$, 공역의 기저 $\mathcal{A}$에 쓰면 $[i_V]_{\mathcal{A}\mathcal{B}}$의 $k$번째 열은 $\mathbf{s}_k$이고, 행렬의 (3)에 의해 $[i_V]_{\mathcal{A}\mathcal{B}} = S$이다. 기저 변환 항목의 (3)을 $\mathcal{A}$와 $\mathcal{B}$의 자리를 바꾸어 쓰면
$$[T]_{\mathcal{B}} = S^{-1}[T]_{\mathcal{A}}S = S^{-1}(SDS^{-1})S = (S^{-1}S)D(S^{-1}S) = I_n D I_n = D$$
이다. 괄호를 옮기는 것은 [[matrix-product-properties|행렬 곱의 성질]]의 (1), $S^{-1}S = I_n$은 가역행렬과 역행렬의 (1), 마지막 등호는 행렬 곱의 성질의 (4)이다. $[T]_{\mathcal{B}}$가 대각행렬이므로 $T$는 대각화 가능이다.

**(7)의 증명.** 유한차원과 차원의 (4)에 의해 $\mathbb{R}^n$은 유한차원이고 $\dim \mathbb{R}^n = n$이다. $\mathbb{R}^n$의 표준기저 $\mathcal{E}$에 대하여 기저 행렬 항목의 (7)과 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[T_A]_{\mathcal{E}} = [T_A] = A$이다. $T_A$가 대각화 가능이면 (6)의 (다)를 $\mathcal{E}$에 써서 $A = [T_A]_{\mathcal{E}}$는 대각화 가능이다. 거꾸로 $A = [T_A]_{\mathcal{E}}$가 대각화 가능이면 $\mathcal{E}$에서 (6)의 (나)가 성립하므로 $T_A$는 대각화 가능이다. $\blacksquare$
:::

## 예시와 반례

:::example[대각화 가능한 행렬과 그 고윳값 전부]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, $S = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \operatorname{diag}(3, -1)$이라 합시다. $AS$의 열은 $A(1, 1) = (3, 3)$과 $A(1, -1) = (-1, 1)$이고, (2)에 의해 $SD$의 열은 $S(3e_1) = 3(1, 1) = (3, 3)$과 $S\bigl((-1)e_2\bigr) = (-1)(1, -1) = (-1, 1)$이므로 $AS = SD$입니다.

$S$는 가역입니다. $R = 2^{-1}S$로 두면 $S(1, 1) = (2, 0)$, $S(1, -1) = (0, 2)$이므로 $SR$의 열은 $2^{-1}(2, 0) = (1, 0)$과 $2^{-1}(0, 2) = (0, 1)$이고, $RS$의 열은 $R(1, 1) = 2^{-1}\bigl((1, 1) + (1, -1)\bigr) = (1, 0)$과 $R(1, -1) = 2^{-1}\bigl((1, 1) - (1, -1)\bigr) = (0, 1)$입니다. 곧 $SR = RS = I_2$이고 $S^{-1} = R$입니다. 그러면 [[matrix-product-properties|행렬 곱의 성질]]의 (4)와 (1)에 의해 $A = A(SS^{-1}) = (AS)S^{-1} = (SD)S^{-1} = SDS^{-1}$이므로 (5)에 의해 $A$는 대각화 가능입니다.

이제 $A$의 고윳값을 모두 압니다. 역행렬의 성질의 (2)에 의해 $S^{-1}$은 가역이고 $(S^{-1})^{-1} = S$이므로 $A = (S^{-1})^{-1}D(S^{-1})$이고, 곧 $A$는 $D$와 닮았습니다. 따라서 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)와 이 항목의 (4)에 의해 $A$의 고윳값은 정확히 $3$과 $-1$입니다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 예시에서는 $3$, $-1$이 고윳값이고 $2$가 고윳값이 아님만 확인했습니다.
:::

:::counterexample[$D$가 하나로 정해지지 않는 예]
위 예시의 $S$의 두 열을 바꾼 $S' = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$과 $D' = \operatorname{diag}(-1, 3)$을 봅시다. $AS'$의 열은 $A(1, -1) = (-1, 1)$과 $A(1, 1) = (3, 3)$이고, $S'D'$의 열은 $(-1)(1, -1) = (-1, 1)$과 $3(1, 1) = (3, 3)$이므로 $AS' = S'D'$입니다. $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이면 $SP$의 열은 $S(0, 1) = (1, -1)$과 $S(1, 0) = (1, 1)$이므로 $S' = SP$이고, $PP$의 열은 $P(0, 1) = (1, 0)$과 $P(1, 0) = (0, 1)$이므로 $PP = I_2$, 곧 $P$는 가역입니다. [[inverse-matrix-properties|역행렬의 성질]]의 (3)에 의해 $S'$도 가역이고, 행렬 곱의 성질의 (4)와 (1)에 의해 $A = A(S'S'^{-1}) = (AS')S'^{-1} = (S'D')S'^{-1}$입니다. 그런데 $D$와 $D'$은 $(1, 1)$ 성분이 $3$과 $-1$로 다릅니다. 이 $A$에서는 "$A = SDS^{-1}$인 대각행렬 $D$"가 하나로 정해지지 않습니다. 대각성분의 순서가 바뀔 수 있기 때문입니다.
:::

## 확인 질문

:::check[$n \times n$ 영행렬과 $I_n$은 대각화 가능인가?]
둘 다 대각화 가능입니다. 두 행렬 모두 $j \ne k$인 $(j, k)$ 성분이 $0$이므로([[matrix|행렬]]의 (1), (6)) 대각행렬이고, [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (4)의 반사성에 의해 모든 행렬은 자기 자신과 닮았습니다. 따라서 대각행렬은 언제나 대각화 가능입니다.
:::

:::check[$A = SDS^{-1}$이고 $D = \operatorname{diag}(2, 5)$이면 $A$의 고윳값은 무엇인가?]
정확히 $2$와 $5$입니다. $Q = S^{-1}$로 두면 [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q$는 가역이고 $Q^{-1} = S$이므로 $A = Q^{-1}DQ$입니다. 곧 $A$는 $D$와 닮았고, 닮은 행렬의 고윳값은 같습니다([[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)). (4)에 의해 $D$의 고윳값은 정확히 $2$와 $5$입니다.
:::
