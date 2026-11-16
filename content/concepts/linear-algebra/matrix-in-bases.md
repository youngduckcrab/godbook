---
title: 기저에 관한 선형사상의 행렬
title_en: Matrix of a Linear Map with Respect to Bases
aliases: [좌표벡터, 좌표 동형사상, 기저에 관한 행렬, 표현행렬, coordinate vector, coordinate isomorphism, matrix with respect to bases, matrix representation]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 기저 ℬ 에 관한 좌표벡터 [v]ℬ 는 좌표 동형사상의 역함수의 값이고, 선형사상 T 의 기저 ℬ, 𝒞 에 관한 행렬은 좌표로 옮긴 사상의 행렬이다. 그 k 번째 열은 T b_k 의 좌표벡터이고, 좌표벡터를 곱셈으로 옮기며, 합성은 곱으로, 동형사상은 가역행렬로 간다.
requires: [vector-space, real-function-space, finite-sum-of-vectors, basis, standard-basis, dimension, function, function-composition, composition-is-associative, inverse-function, linear-map, linear-map-examples, composition-of-linear-maps, isomorphism, isomorphism-and-bases, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, invertible-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 8절, 8.1절 Coordinate vector, p.69; 8.2절 Matrix of a linear transformation, pp.69–70 (식 (8.1), p.70)
    checked: original
    note: "출처는 8.1절(p.69)에서 기저 B 에 관한 v 의 좌표를 모은 열을 좌표벡터 [v]_B 라 하고, v 를 [v]_B 로 보내는 대응이 V 와 Fⁿ 사이의 동형사상이며 기저를 표준기저로 보낸다고 'Note that'으로 적는다. 8.2절(pp.69–70)은 기저 A, B 에 관한 T 의 행렬 [T]_BA 를 등식 [Tv]_B = [T]_BA[v]_A 를 만족하는 m × n 행렬로 정하고, 그 k 번째 열이 [Ta_k]_B 라고 적으며, 합성의 행렬이 행렬의 곱이라는 (8.1)을 진술한 뒤 증명은 표준기저의 경우와 같다거나 좌표 동형사상으로 모든 것을 Fⁿ 으로 옮기면 증명이 필요 없다고 적는다(p.70). 이 항목은 출처가 말한 '좌표 동형사상으로 옮기기'를 정의로 삼는다. 좌표벡터를 isomorphism-and-bases 의 동형사상 C_ℬ 의 역함수의 값으로, [T]_{𝒞ℬ} 를 C_𝒞⁻¹ ∘ T ∘ C_ℬ 의 행렬로 정의하고, 출처의 정의인 등식과 그 등식을 만족하는 행렬이 하나뿐이라는 것을 (3)으로 증명한다. 기저 기호 ℬ, 𝒞 와 [T]_{𝒞ℬ} 의 첨자 순서(둘째 첨자가 정의역의 기저)는 출처를 따랐다. 출처는 기저를 집합 기호 {b_1, …, b_n} 으로 적지만 순서 있는 열로 쓰며, 이 항목은 벡터의 열로 쓴다. 출처는 8.2절(p.70)에서 v 를 [v]_B 로 보내는 대응, 곧 V 에서 Fⁿ 으로 가는 방향의 대응을 coordinate isomorphism 이라 부른다. 이 항목은 그 역함수 C_ℬ : ℝⁿ → V 를 좌표 동형사상이라 하고, 출처의 대응은 C_ℬ⁻¹ 이다. 기호 C_ℬ, 출처의 'Note that'과 (8.1)의 증명, (1)의 나머지 성질, (5), (6), (7)과 그 증명은 이 사이트가 썼다. 기저의 길이가 0 인 경우(V = {0_V})는 크기 0 인 행렬이 없으므로 다루지 않는다. 출처의 한 기저 표기 [T]_A(8.5절, p.72)는 [T]_ℬ 로 쓴다. 예시는 ℝ² 의 표준기저가 아닌 기저에 관한 행렬을 구하는 계산으로, 출처 연습문제 8.4(p.73)와 같은 종류이며 기저와 사상은 새로 골랐다. 첫 예시의 좌표 공식을 연립방정식으로 구하는 부분은 출처 8.3.1절(pp.70–71)의 [I]_BS = B⁻¹ 과 같은 계산이다. 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 고유벡터의 정의, 출처 메모, 출처의 예와 같은 꼴임을 밝히는 일, 반례의 일반화를 보완했다. 마지막 표현 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $n$, $m$이 자연수이며, $\mathcal{B} = b_1, \dots, b_n$이 길이 $n$인 $V$의 [[basis|기저]], $\mathcal{C} = c_1, \dots, c_m$이 길이 $m$인 $W$의 기저라 하자. 따라서 $V$, $W$는 [[dimension|유한차원]]이고 $\dim V = n \ge 1$, $\dim W = m \ge 1$이다.

**좌표 동형사상과 좌표벡터.** [[isomorphism-and-bases|동형사상과 기저]]의 (5)에 의해 각 $x = (x_1, \dots, x_n) \in \mathbb{R}^n$에서 값이 $x_1 b_1 + \cdots + x_n b_n$인 함수 $\mathbb{R}^n \to V$는 [[isomorphism|동형사상]]이다. 이 함수를 $C_{\mathcal{B}} : \mathbb{R}^n \to V$로 쓰고 $\mathcal{B}$의 **좌표 동형사상**(coordinate isomorphism)이라 한다. 동형사상의 (2)에 의해 그 [[inverse-function|역함수]] $C_{\mathcal{B}}^{-1} : V \to \mathbb{R}^n$도 동형사상이다. $v \in V$의 $\mathcal{B}$에 관한 **좌표벡터**(coordinate vector)를 $[v]_{\mathcal{B}} = C_{\mathcal{B}}^{-1}(v) \in \mathbb{R}^n$으로 정한다.

**기저에 관한 행렬.** $T : V \to W$가 [[linear-map|선형사상]]이라 하자. 각 $x \in \mathbb{R}^n$에서 값이 $C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}} x)\bigr)$인 함수는 [[function-composition|합성]] $C_{\mathcal{C}}^{-1} \circ T \circ C_{\mathcal{B}} : \mathbb{R}^n \to \mathbb{R}^m$이다([[composition-is-associative|결합법칙]]에 의해 괄호를 어떻게 치든 같은 함수이다). [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 이 함수는 선형사상이다. 그 [[matrix-of-a-linear-map|행렬]] $[C_{\mathcal{C}}^{-1} \circ T \circ C_{\mathcal{B}}]$를 $\mathcal{B}$와 $\mathcal{C}$에 관한 $T$의 **행렬**(matrix of $T$ with respect to $\mathcal{B}$ and $\mathcal{C}$)이라 하고 $[T]_{\mathcal{C}\mathcal{B}}$로 쓴다. 이것은 $m \times n$ 행렬이다. $W = V$이고 $\mathcal{C} = \mathcal{B}$이면 $[T]_{\mathcal{B}\mathcal{B}}$를 $[T]_{\mathcal{B}}$로 줄여 쓴다.

다음이 성립한다.

1. $x \in \mathbb{R}^n$이고 $v \in V$이면, $[v]_{\mathcal{B}} = x$인 것은 정확히 $v = x_1 b_1 + \cdots + x_n b_n$일 때이다. 곧 $[v]_{\mathcal{B}}$의 $i$번째 값은 $v$의 $\mathcal{B}$에 관한 $i$번째 [[basis|좌표]]이다. 모든 $v \in V$에서 $C_{\mathcal{B}}([v]_{\mathcal{B}}) = v$이고, 모든 $x \in \mathbb{R}^n$에서 $[C_{\mathcal{B}} x]_{\mathcal{B}} = x$이다. 모든 $u, v \in V$와 실수 $\alpha$에서 $[u + v]_{\mathcal{B}} = [u]_{\mathcal{B}} + [v]_{\mathcal{B}}$, $[\alpha v]_{\mathcal{B}} = \alpha[v]_{\mathcal{B}}$이다. $[v]_{\mathcal{B}} = 0$인 것은 정확히 $v = 0_V$일 때이다. $\mathbb{R}^n$의 [[standard-basis|표준기저]] $e_1, \dots, e_n$에 대하여 $[b_k]_{\mathcal{B}} = e_k$이다.
2. 모든 $k \in \{1, \dots, n\}$에서 $[T]_{\mathcal{C}\mathcal{B}}$의 $k$번째 열은 $[Tb_k]_{\mathcal{C}}$이다.
3. 모든 $v \in V$에서 $[Tv]_{\mathcal{C}} = [T]_{\mathcal{C}\mathcal{B}}[v]_{\mathcal{B}}$이다. 거꾸로 $M$이 $m \times n$ 행렬이고 모든 $v \in V$에서 $[Tv]_{\mathcal{C}} = M[v]_{\mathcal{B}}$이면 $M = [T]_{\mathcal{C}\mathcal{B}}$이다.
4. $U$가 벡터공간이고 $p$가 자연수이며 $\mathcal{A}$가 길이 $p$인 $U$의 기저이고 $S : U \to V$가 선형사상이면 $[T \circ S]_{\mathcal{C}\mathcal{A}} = [T]_{\mathcal{C}\mathcal{B}}[S]_{\mathcal{B}\mathcal{A}}$이다.
5. $V$ 위의 항등함수 $i_V$에 대하여 $[i_V]_{\mathcal{B}} = I_n$이다.
6. $T$가 동형사상인 것은 정확히 $[T]_{\mathcal{C}\mathcal{B}}$가 [[invertible-matrix|가역]]일 때이다. 이때 역함수 $T^{-1} : W \to V$에 대하여 $[T^{-1}]_{\mathcal{B}\mathcal{C}} = ([T]_{\mathcal{C}\mathcal{B}})^{-1}$이다.
7. (이 (7)에서는 $V = \mathbb{R}^n$, $W = \mathbb{R}^m$으로 두고) $\mathbb{R}^n$과 $\mathbb{R}^m$의 표준기저를 모두 $\mathcal{E}$로 쓰자. $C_{\mathcal{E}} : \mathbb{R}^n \to \mathbb{R}^n$은 항등함수 $i_{\mathbb{R}^n}$이고, 모든 $x \in \mathbb{R}^n$에서 $[x]_{\mathcal{E}} = x$이다. 선형사상 $R : \mathbb{R}^n \to \mathbb{R}^m$에 대하여 $[R]_{\mathcal{E}\mathcal{E}} = [R]$이다.
:::

:::english
Let $V$, $W$ be vector spaces, $n$, $m$ natural numbers, $\mathcal{B} = b_1, \dots, b_n$ a basis of $V$ of length $n$, and $\mathcal{C} = c_1, \dots, c_m$ a basis of $W$ of length $m$. Hence $V$, $W$ are finite-dimensional with $\dim V = n \ge 1$ and $\dim W = m \ge 1$.

**Coordinate isomorphism and coordinate vector.** By (5) of the entry on isomorphisms and bases, the function $\mathbb{R}^n \to V$ whose value at each $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ is $x_1 b_1 + \cdots + x_n b_n$ is an isomorphism. We write this function $C_{\mathcal{B}} : \mathbb{R}^n \to V$ and call it the **coordinate isomorphism** of $\mathcal{B}$. By (2) of the entry on isomorphisms, its inverse function $C_{\mathcal{B}}^{-1} : V \to \mathbb{R}^n$ is also an isomorphism. The **coordinate vector** of $v \in V$ with respect to $\mathcal{B}$ is defined as $[v]_{\mathcal{B}} = C_{\mathcal{B}}^{-1}(v) \in \mathbb{R}^n$.

**Matrix with respect to bases.** Let $T : V \to W$ be a linear map. The function whose value at each $x \in \mathbb{R}^n$ is $C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}} x)\bigr)$ is the composition $C_{\mathcal{C}}^{-1} \circ T \circ C_{\mathcal{B}} : \mathbb{R}^n \to \mathbb{R}^m$ (by associativity it is the same function however the parentheses are placed). By (1) of the entry on composition of linear maps, this function is a linear map. Its matrix $[C_{\mathcal{C}}^{-1} \circ T \circ C_{\mathcal{B}}]$ is called the **matrix of $T$ with respect to $\mathcal{B}$ and $\mathcal{C}$** and written $[T]_{\mathcal{C}\mathcal{B}}$. It is an $m \times n$ matrix. If $W = V$ and $\mathcal{C} = \mathcal{B}$, we abbreviate $[T]_{\mathcal{B}\mathcal{B}}$ to $[T]_{\mathcal{B}}$.

The following hold.

1. If $x \in \mathbb{R}^n$ and $v \in V$, then $[v]_{\mathcal{B}} = x$ exactly when $v = x_1 b_1 + \cdots + x_n b_n$. That is, the $i$-th value of $[v]_{\mathcal{B}}$ is the $i$-th coordinate of $v$ with respect to $\mathcal{B}$. $C_{\mathcal{B}}([v]_{\mathcal{B}}) = v$ for every $v \in V$, and $[C_{\mathcal{B}} x]_{\mathcal{B}} = x$ for every $x \in \mathbb{R}^n$. For all $u, v \in V$ and every real number $\alpha$, $[u + v]_{\mathcal{B}} = [u]_{\mathcal{B}} + [v]_{\mathcal{B}}$ and $[\alpha v]_{\mathcal{B}} = \alpha[v]_{\mathcal{B}}$. $[v]_{\mathcal{B}} = 0$ exactly when $v = 0_V$. For the standard basis $e_1, \dots, e_n$ of $\mathbb{R}^n$, $[b_k]_{\mathcal{B}} = e_k$.
2. For every $k \in \{1, \dots, n\}$, the $k$-th column of $[T]_{\mathcal{C}\mathcal{B}}$ is $[Tb_k]_{\mathcal{C}}$.
3. $[Tv]_{\mathcal{C}} = [T]_{\mathcal{C}\mathcal{B}}[v]_{\mathcal{B}}$ for every $v \in V$. Conversely, if $M$ is an $m \times n$ matrix with $[Tv]_{\mathcal{C}} = M[v]_{\mathcal{B}}$ for every $v \in V$, then $M = [T]_{\mathcal{C}\mathcal{B}}$.
4. If $U$ is a vector space, $p$ a natural number, $\mathcal{A}$ a basis of $U$ of length $p$, and $S : U \to V$ a linear map, then $[T \circ S]_{\mathcal{C}\mathcal{A}} = [T]_{\mathcal{C}\mathcal{B}}[S]_{\mathcal{B}\mathcal{A}}$.
5. For the identity function $i_V$ on $V$, $[i_V]_{\mathcal{B}} = I_n$.
6. $T$ is an isomorphism exactly when $[T]_{\mathcal{C}\mathcal{B}}$ is invertible. In that case, for the inverse function $T^{-1} : W \to V$, $[T^{-1}]_{\mathcal{B}\mathcal{C}} = ([T]_{\mathcal{C}\mathcal{B}})^{-1}$.
7. (In this (7), let $V = \mathbb{R}^n$ and $W = \mathbb{R}^m$.) Write $\mathcal{E}$ for the standard bases of both $\mathbb{R}^n$ and $\mathbb{R}^m$. $C_{\mathcal{E}} : \mathbb{R}^n \to \mathbb{R}^n$ is the identity function $i_{\mathbb{R}^n}$, and $[x]_{\mathcal{E}} = x$ for every $x \in \mathbb{R}^n$. For a linear map $R : \mathbb{R}^n \to \mathbb{R}^m$, $[R]_{\mathcal{E}\mathcal{E}} = [R]$.
:::

## 직관

넷째 단원의 [[matrix-of-a-linear-map|선형사상의 행렬]]은 $\mathbb{R}^n$에서 $\mathbb{R}^m$으로의 선형사상에만 있었습니다. 일반 벡터공간의 벡터는 성분이 없으니 행렬을 곱할 수가 없기 때문입니다. 기저를 하나 고르면 사정이 달라집니다. 기저 $\mathcal{B}$는 $V$의 벡터마다 실수의 열(좌표)을 하나씩 붙여 주고, 그 열이 $\mathbb{R}^n$의 원소 $[v]_{\mathcal{B}}$입니다. 이 항목은 "좌표로 옮기고, $\mathbb{R}^n$에서 계산하고, 다시 되돌린다"를 정의로 삼습니다. 지도에 비유하면, 기저는 땅에 격자를 그어 지점마다 번호를 붙이는 일이고 $[T]_{\mathcal{C}\mathcal{B}}$는 "땅에서의 이동"을 "번호에서의 계산"으로 바꾼 표입니다. 비유가 맞는 곳은 격자를 바꾸면 같은 이동의 표가 달라진다는 점입니다(아래 예시에서 표준기저와 다른 기저의 행렬이 다릅니다).

(3)은 출처가 이 행렬을 정의하는 방식, 곧 "좌표벡터를 좌표벡터로 옮기는 행렬"과 이 항목의 정의가 같다는 것입니다. (2)는 그 행렬을 실제로 적는 법으로, 기저의 각 벡터가 가는 곳을 새 기저의 좌표로 적어 열로 늘어놓으면 됩니다. (4)–(6)은 넷째 단원의 사실들(합성은 곱, 항등함수는 단위행렬, 동형사상은 가역행렬)이 기저를 붙여도 그대로라는 것이고, 증명은 모두 좌표 동형사상과 그 역함수를 맞붙여 지우는 한 가지 계산입니다. (7)은 표준기저를 쓰면 넷째 단원의 $[T]$로 돌아온다는 것입니다. 차원이 $0$인 공간은 크기 $0$인 행렬이 없으므로 이 항목에서 다루지 않습니다.

## 성질의 증명

:::proof
진술 첫 문단의 "따라서"는 [[dimension|유한차원과 차원]]의 (1), (2)이다. $C_{\mathcal{B}}$는 동형사상이므로 전단사이고 역함수 $C_{\mathcal{B}}^{-1}$이 있다. $C_{\mathcal{C}}$도 그렇다. 아래에서 $P = C_{\mathcal{C}}^{-1} \circ T \circ C_{\mathcal{B}}$로 둔다. 곧 $[T]_{\mathcal{C}\mathcal{B}} = [P]$이고, 합성의 값의 규칙([[function-composition|함수의 합성]])에 의해 모든 $x \in \mathbb{R}^n$에서 $Px = C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}} x)\bigr)$이다.

**(1)의 증명.** $x \in \mathbb{R}^n$, $v \in V$라 하자. [[function|함수]]의 표기에 의해 $C_{\mathcal{B}}^{-1}(v) = x$인 것은 정확히 $(v, x) \in C_{\mathcal{B}}^{-1}$일 때이고, [[inverse-function|역관계]]의 정의에 의해 정확히 $(x, v) \in C_{\mathcal{B}}$일 때, 곧 정확히 $C_{\mathcal{B}} x = v$일 때이다. $C_{\mathcal{B}} x = x_1 b_1 + \cdots + x_n b_n$이므로 $[v]_{\mathcal{B}} = x$인 것은 정확히 $v = x_1 b_1 + \cdots + x_n b_n$일 때이다.

$v$의 $\mathcal{B}$에 관한 좌표를 $\alpha_1, \dots, \alpha_n$이라 하면([[basis|기저]]의 정의에 의해 있고 하나로 정해진다), 이 실수의 열은 함수 $\{1, \dots, n\} \to \mathbb{R}$이므로 $\mathbb{R}^n$의 원소 $\alpha$이고 $v = \alpha_1 b_1 + \cdots + \alpha_n b_n$이다. 앞 문단에 의해 $[v]_{\mathcal{B}} = \alpha$이므로 $[v]_{\mathcal{B}}$의 $i$번째 값은 $\alpha_i$이다. $x = [v]_{\mathcal{B}}$로 두면 앞 문단의 동치에 의해 $v = x_1 b_1 + \cdots + x_n b_n = C_{\mathcal{B}}([v]_{\mathcal{B}})$이다. $x \in \mathbb{R}^n$이고 $v = C_{\mathcal{B}} x = x_1 b_1 + \cdots + x_n b_n$으로 두면 같은 동치에 의해 $[C_{\mathcal{B}} x]_{\mathcal{B}} = x$이다.

$C_{\mathcal{B}}^{-1}$은 선형사상이므로 (T-합)과 (T-배)에 의해 $[u + v]_{\mathcal{B}} = [u]_{\mathcal{B}} + [v]_{\mathcal{B}}$, $[\alpha v]_{\mathcal{B}} = \alpha[v]_{\mathcal{B}}$이다. $0 = (0, \dots, 0) \in \mathbb{R}^n$에 대하여 [[finite-sum-of-vectors|벡터의 유한 합]]의 (C3)에 의해 $0 b_1 + \cdots + 0 b_n = 0_V$이므로, 앞의 동치에 의해 $[v]_{\mathcal{B}} = 0$인 것은 정확히 $v = 0_V$일 때이다. 마지막으로 동형사상과 기저의 (5)에 의해 $C_{\mathcal{B}} e_k = b_k$이므로 $[b_k]_{\mathcal{B}} = [C_{\mathcal{B}} e_k]_{\mathcal{B}} = e_k$이다.

**(2)의 증명.** [[matrix-of-a-linear-map|선형사상의 행렬]]의 정의에 의해 $[P]$의 $k$번째 열은 $Pe_k$이다. (1)의 $C_{\mathcal{B}} e_k = b_k$에 의해 $Pe_k = C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}} e_k)\bigr) = C_{\mathcal{C}}^{-1}(Tb_k) = [Tb_k]_{\mathcal{C}}$이다.

**(3)의 증명.** $v \in V$라 하자. 선형사상의 행렬의 (1)에 의해 모든 $x \in \mathbb{R}^n$에서 $Px = [P]x$이다. $x = [v]_{\mathcal{B}}$로 두면 (1)의 $C_{\mathcal{B}}([v]_{\mathcal{B}}) = v$에 의해
$$[T]_{\mathcal{C}\mathcal{B}}[v]_{\mathcal{B}} = P[v]_{\mathcal{B}} = C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}}[v]_{\mathcal{B}})\bigr) = C_{\mathcal{C}}^{-1}(Tv) = [Tv]_{\mathcal{C}}$$
이다. 거꾸로 $M$이 진술의 등식을 만족한다고 하자. $x \in \mathbb{R}^n$이면 $v = C_{\mathcal{B}} x$에 대하여 (1)에 의해 $[v]_{\mathcal{B}} = x$이므로 $Mx = M[v]_{\mathcal{B}} = [Tv]_{\mathcal{C}} = [T]_{\mathcal{C}\mathcal{B}}[v]_{\mathcal{B}} = [T]_{\mathcal{C}\mathcal{B}}x$이다. 모든 $x$에서 $Mx = [T]_{\mathcal{C}\mathcal{B}}x$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (5)에 의해 $M = [T]_{\mathcal{C}\mathcal{B}}$이다.

**(4)의 증명.** 선형사상의 합성의 (1)에 의해 $T \circ S : U \to W$는 선형사상이므로 $[T \circ S]_{\mathcal{C}\mathcal{A}}$가 정해진다. $Q = C_{\mathcal{B}}^{-1} \circ S \circ C_{\mathcal{A}} : \mathbb{R}^p \to \mathbb{R}^n$, $R = C_{\mathcal{C}}^{-1} \circ (T \circ S) \circ C_{\mathcal{A}} : \mathbb{R}^p \to \mathbb{R}^m$으로 두면 정의에 의해 $[S]_{\mathcal{B}\mathcal{A}} = [Q]$, $[T \circ S]_{\mathcal{C}\mathcal{A}} = [R]$이다. $x \in \mathbb{R}^p$이면 $w = S(C_{\mathcal{A}} x) \in V$에 대하여 (1)의 $C_{\mathcal{B}}([w]_{\mathcal{B}}) = w$에 의해
$$P(Qx) = C_{\mathcal{C}}^{-1}\Bigl(T\bigl(C_{\mathcal{B}}(C_{\mathcal{B}}^{-1} w)\bigr)\Bigr) = C_{\mathcal{C}}^{-1}(Tw) = C_{\mathcal{C}}^{-1}\Bigl(T\bigl(S(C_{\mathcal{A}} x)\bigr)\Bigr) = Rx$$
이다. $P \circ Q$와 $R$은 정의역이 $\mathbb{R}^p$로 같고 모든 $x$에서 값이 같으므로 함수의 같음에 의해 $R = P \circ Q$이다. [[matrix-product|행렬의 곱]]의 (3)을 선형사상 $P : \mathbb{R}^n \to \mathbb{R}^m$, $Q : \mathbb{R}^p \to \mathbb{R}^n$에 쓰면 $[T \circ S]_{\mathcal{C}\mathcal{A}} = [P \circ Q] = [P][Q] = [T]_{\mathcal{C}\mathcal{B}}[S]_{\mathcal{B}\mathcal{A}}$이다.

**(5)의 증명.** [[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_V$는 선형사상이므로 $[i_V]_{\mathcal{B}}$가 정해진다. $x \in \mathbb{R}^n$이면 (1)에 의해 $C_{\mathcal{B}}^{-1}\bigl(i_V(C_{\mathcal{B}} x)\bigr) = [C_{\mathcal{B}} x]_{\mathcal{B}} = x$이므로, 함수의 같음에 의해 $C_{\mathcal{B}}^{-1} \circ i_V \circ C_{\mathcal{B}} = i_{\mathbb{R}^n}$이다. 선형사상의 행렬의 (5)에 의해 $[i_V]_{\mathcal{B}} = [i_{\mathbb{R}^n}] = I_n$이다.

**(6)의 증명.** ($\Rightarrow$) $T$가 동형사상이라 하자. 동형사상의 (2)에 의해 $T^{-1} : W \to V$는 선형사상이다. 역함수 항목의 두 등식에 의해 $T^{-1} \circ T = i_V$이고 $T \circ T^{-1} = i_W$이다. (4)를 $S = T : V \to W$, 그 뒤의 사상 $T^{-1} : W \to V$와 기저 $\mathcal{B}$, $\mathcal{C}$, $\mathcal{B}$에 쓰고 (5)를 쓰면
$$[T^{-1}]_{\mathcal{B}\mathcal{C}}[T]_{\mathcal{C}\mathcal{B}} = [T^{-1} \circ T]_{\mathcal{B}\mathcal{B}} = [i_V]_{\mathcal{B}} = I_n$$
이다. 같은 방식으로 (4)를 $S = T^{-1} : W \to V$, 그 뒤의 사상 $T : V \to W$와 기저 $\mathcal{C}$, $\mathcal{B}$, $\mathcal{C}$에 쓰고 (5)를 $W$와 $\mathcal{C}$에 쓰면 $[T]_{\mathcal{C}\mathcal{B}}[T^{-1}]_{\mathcal{B}\mathcal{C}} = [T \circ T^{-1}]_{\mathcal{C}\mathcal{C}} = [i_W]_{\mathcal{C}} = I_m$이다. 따라서 $n \times m$ 행렬 $[T^{-1}]_{\mathcal{B}\mathcal{C}}$는 $m \times n$ 행렬 $[T]_{\mathcal{C}\mathcal{B}}$의 왼쪽 역이면서 오른쪽 역이다. [[invertible-matrix|가역행렬과 역행렬]]의 정의에 의해 $[T]_{\mathcal{C}\mathcal{B}}$는 가역이고, 같은 항목의 (1)에 의해 $[T^{-1}]_{\mathcal{B}\mathcal{C}} = ([T]_{\mathcal{C}\mathcal{B}})^{-1}$이다.

($\Leftarrow$) $[T]_{\mathcal{C}\mathcal{B}} = [P]$가 가역이라 하자. 가역행렬과 역행렬의 (2)에 의해 $T_{[P]}$는 동형사상이고, 선형사상의 행렬의 (1)에 의해 $T_{[P]} = P$이므로 $P$는 동형사상이다. $v \in V$이면 (1)을 $\mathcal{B}$와 $\mathcal{C}$에 쓰고 $w = T\bigl(C_{\mathcal{B}}(C_{\mathcal{B}}^{-1} v)\bigr) = Tv$로 두면
$$C_{\mathcal{C}}\bigl(P(C_{\mathcal{B}}^{-1} v)\bigr) = C_{\mathcal{C}}\Bigl(C_{\mathcal{C}}^{-1}\bigl(T(C_{\mathcal{B}}(C_{\mathcal{B}}^{-1} v))\bigr)\Bigr) = C_{\mathcal{C}}(C_{\mathcal{C}}^{-1} w) = w = Tv$$
이다. 함수의 같음에 의해 $T = (C_{\mathcal{C}} \circ P) \circ C_{\mathcal{B}}^{-1}$이다. $C_{\mathcal{C}}$, $P$, $C_{\mathcal{B}}^{-1}$이 모두 동형사상이므로 동형사상의 (4)를 두 번 쓰면 이 합성은 동형사상이고, 따라서 $T$는 동형사상이다.

**(7)의 증명.** $x \in \mathbb{R}^n$이면 [[standard-basis|표준기저]]의 (3)에 의해 $C_{\mathcal{E}} x = x_1 e_1 + \cdots + x_n e_n = x$이므로, 함수의 같음에 의해 $C_{\mathcal{E}} = i_{\mathbb{R}^n}$이다. (1)에 의해 $x = C_{\mathcal{E}}([x]_{\mathcal{E}}) = [x]_{\mathcal{E}}$이다. 같은 논증을 $\mathbb{R}^m$과 그 표준기저에 쓰면 $C_{\mathcal{E}} = i_{\mathbb{R}^m}$이고 모든 $y \in \mathbb{R}^m$에서 $[y]_{\mathcal{E}} = y$이다. 따라서 $x \in \mathbb{R}^n$이면 $C_{\mathcal{E}}^{-1}\bigl(R(C_{\mathcal{E}} x)\bigr) = [Rx]_{\mathcal{E}} = Rx$이고, 함수의 같음에 의해 $C_{\mathcal{E}}^{-1} \circ R \circ C_{\mathcal{E}} = R$이므로 $[R]_{\mathcal{E}\mathcal{E}} = [R]$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ²의 한 기저에 관한 좌표벡터]
$\mathbb{R}^2$에서 $b_1 = (2, 1)$, $b_2 = (1, 1)$로 두고 $\mathcal{B} = b_1, b_2$라 합시다. $y = (y_1, y_2) \in \mathbb{R}^2$에 대하여 $x_1 b_1 + x_2 b_2 = (2x_1 + x_2, x_1 + x_2)$이므로 이것이 $y$와 같은 것은 정확히 $2x_1 + x_2 = y_1$이고 $x_1 + x_2 = y_2$일 때입니다. 두 식을 빼면 $x_1 = y_1 - y_2$이고, 그러면 $x_2 = y_2 - x_1 = -y_1 + 2y_2$입니다. 거꾸로 이 두 값을 넣으면 두 식이 성립합니다. 곧 모든 $y$에 대하여 $y = x_1 b_1 + x_2 b_2$인 실수의 열이 꼭 하나 있으므로 $\mathcal{B}$는 [[basis|기저]]이고, (1)에 의해
$$[y]_{\mathcal{B}} = (y_1 - y_2,\ -y_1 + 2y_2)$$
입니다. 예를 들어 $v = (3, 1)$이면 $[v]_{\mathcal{B}} = (2, -1)$이고, 실제로 $2(2, 1) + (-1)(1, 1) = (4 - 1, 2 - 1) = (3, 1)$입니다.
:::

:::example[같은 사상의 두 행렬]
$M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이고 $P = T_M$이라 합시다. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Px = x_1(0, 1) + x_2(1, 0) = (x_2, x_1)$이므로 $P$는 두 값을 맞바꾸는 선형사상입니다. (7)과 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 표준기저에 관한 행렬은 $[P]_{\mathcal{E}\mathcal{E}} = [T_M] = M$입니다.

위 예시의 기저 $\mathcal{B}$에 관한 행렬은 (2)로 구합니다. $Pb_1 = (1, 2)$이고 $Pb_2 = (1, 1)$이므로 위의 공식에 의해 $[Pb_1]_{\mathcal{B}} = (1 - 2, -1 + 4) = (-1, 3)$, $[Pb_2]_{\mathcal{B}} = (1 - 1, -1 + 2) = (0, 1)$이고
$$[P]_{\mathcal{B}} = \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix}$$
입니다. $M$과 다릅니다. (3)을 $v = (3, 1)$에서 확인하면 $Pv = (1, 3)$이고 $[Pv]_{\mathcal{B}} = (1 - 3, -1 + 6) = (-2, 5)$이며, $[P]_{\mathcal{B}}[v]_{\mathcal{B}} = 2(-1, 3) + (-1)(0, 1) = (-2, 6 - 1) = (-2, 5)$로 같습니다.
:::

:::counterexample[기저의 순서를 바꾸면 좌표벡터가 달라질 수 있다]
위 예시의 $b_1$, $b_2$를 바꾼 순서로 늘어놓은 열 $\mathcal{B}' = b_2, b_1$도 기저입니다. (V1)에 의해 $x_1 b_2 + x_2 b_1 = x_2 b_1 + x_1 b_2$이므로, 위의 계산에서 두 계수의 자리만 바뀌기 때문입니다. 그런데 $v = (3, 1) = (-1)b_2 + 2b_1$이므로 $[v]_{\mathcal{B}'} = (-1, 2)$이고, 이것은 $[v]_{\mathcal{B}} = (2, -1)$과 첫째 값이 다릅니다. 기저를 벡터들의 집합 $\{b_1, b_2\}$로만 보면 좌표벡터가 하나로 정해지지 않습니다. 이 강의가 기저를 [[finite-sum-of-vectors|벡터의 열]]로 다루는 까닭 가운데 하나가 여기에 있습니다.
:::

## 확인 질문

:::check[$\gamma$가 실수이고 $S : V \to V$가 모든 $v$에서 값이 $\gamma v$인 선형사상이면, $V$의 기저 $\mathcal{B}$(길이 $n$)에 관한 $[S]_{\mathcal{B}}$는 무엇인가?]
$\gamma I_n$입니다. (2)에 의해 $k$번째 열은 $[Sb_k]_{\mathcal{B}} = [\gamma b_k]_{\mathcal{B}}$이고, (1)에 의해 이것은 $\gamma[b_k]_{\mathcal{B}} = \gamma e_k$입니다. [[matrix|행렬]]의 (5)와 (6)에 의해 $\gamma I_n$의 $k$번째 열도 $\gamma e_k$이므로 행렬의 (3)에 의해 $[S]_{\mathcal{B}} = \gamma I_n$입니다. 기저를 어떻게 골라도 같은 행렬입니다.
:::

:::check[첫 예시의 기저 $\mathcal{B}$에서 $[e_1]_{\mathcal{B}}$와 $[e_2]_{\mathcal{B}}$는 무엇인가?]
공식에 $y = (1, 0)$과 $y = (0, 1)$을 넣으면 $[e_1]_{\mathcal{B}} = (1, -1)$이고 $[e_2]_{\mathcal{B}} = (-1, 2)$입니다. 실제로 $1(2, 1) + (-1)(1, 1) = (1, 0)$이고 $(-1)(2, 1) + 2(1, 1) = (0, 1)$입니다.
:::
