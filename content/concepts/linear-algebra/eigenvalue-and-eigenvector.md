---
title: 고윳값과 고유벡터
title_en: Eigenvalue and Eigenvector
aliases: [고윳값, 고유값, 고유벡터, 고유공간, eigenvalue, eigenvector, eigenspace]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 선형사상 T 가 영벡터가 아닌 v 를 λv 로 보낼 때 실수 λ 를 T 의 고윳값, v 를 고유벡터라 한다. λ 가 고윳값인 것은 T 에서 항등함수의 λ 배를 뺀 사상이 단사가 아닐 때이고, 유한차원에서는 동형사상이 아닐 때, 행렬에서는 A − λI 가 가역이 아닐 때이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, function, inverse-function, injective-surjective-bijective, subspace, linear-map, linear-map-examples, linear-maps-form-a-vector-space, kernel-and-range, injective-iff-trivial-kernel, isomorphism, dimension, injective-iff-surjective-equal-dimension, matrix, matrix-vector-product, invertible-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1.1절 Eigenvalues, eigenvectors, spectrum, p.100; 1.2절 첫 두 문단, p.100; 예시의 행렬은 2.7.1절, pp.112–113 참조
    checked: original
    note: "출처는 1.1절(p.100)에서 영벡터가 아닌 v 로 Av = λv 가 되는 스칼라 λ 를 연산자 A : V → V 의 고윳값, v 를 그 고유벡터라 하고, 고유벡터를 찾는 일은 A − λI 의 핵을 찾는 일이며 핵 Ker(A − λI), 곧 고유벡터 전체와 0 벡터를 고유공간이라 한다고 적는다. 1.2절 첫 두 문단(p.100)은 λ 가 고윳값인 것은 정확히 Ker(A − λI) 가 자명하지 않을 때이고, Fⁿ 위의 연산자에서는 정사각행렬이므로 정확히 A − λI 가 가역이 아닐 때라고 적은 뒤 행렬식으로 넘어간다. 이 항목은 스칼라를 실수로만 두고, 출처의 I 를 항등함수 i_V 로, 연산자와 행렬을 T 와 A 로 나누어 쓴다. 출처는 4장 첫머리(p.100)에서 유한차원 공간의 연산자만 다룬다고 하지만, 이 항목의 정의와 (1), (2), (5), (6)은 차원을 가정하지 않는다. 출처는 1.1절에서 고유공간을 Ker(A − λI) 로 쓰고, 2.3절 Remark 2.4(p.109)에서는 E_k := Ker(A − λ_kI) 로 쓴다. 이 항목은 E 를 쓰지 않고 Ker(T − λi_V) 로 쓴다. T − λi_V 가 선형사상이고 그 값이 Tv − λv 라는 것((1)), 정사각행렬에 대한 '핵이 자명하지 않다 ⇔ 가역이 아니다'를 유한차원 공간의 단사·전사·동형사상으로 옮긴 (3), (4)의 등식 T_A − λi = T_{A − λI_n}, 고유벡터가 속하는 고윳값이 하나뿐이라는 (5), 0 이 고윳값일 조건 (6)과 모든 증명은 이 사이트가 썼다. (5)는 출처에 없다(4장 전체를 검색한 범위). 출처의 스펙트럼 σ(A)(p.100)는 이 항목에서 쓰지 않는다. 첫 예시는 출처 4장 2.7.1절(pp.112–113)의 (1 2; 8 1) 의 예(고윳값 5, −3, 고유벡터 (1, 2), (1, −2))와 같은 꼴의 행렬이며, 출처는 특성다항식으로 고윳값을 구하고 이 항목은 주어진 벡터를 곱해 확인하고 λ = 2 를 직접 판정한다. 둘째 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 고유벡터의 정의, 출처 메모, 출처의 예와 같은 꼴임을 밝히는 일, 반례의 일반화를 보완했다. 마지막 표현 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이라 하자.

실수 $\lambda$가 $T$의 **고윳값**(eigenvalue)인 것은 정확히 $Tv = \lambda v$이고 $v \ne 0_V$인 $v \in V$가 있을 때이다. 실수 $\lambda$와 $v \in V$에 대하여, $v$가 $\lambda$에 속하는 $T$의 **고유벡터**(eigenvector)인 것은 정확히 $Tv = \lambda v$이고 $v \ne 0_V$일 때이다. 따라서 $\lambda$가 고윳값인 것은 정확히 $\lambda$에 속하는 고유벡터가 있을 때이다. $v$가 $T$의 **고유벡터**인 것은 정확히 $v$가 어떤 실수에 속하는 $T$의 고유벡터일 때이다.

$i_V$는 $V$ 위의 [[inverse-function|항등함수]]이다. 실수 $\lambda$에 대하여 $T - \lambda i_V$는 [[linear-maps-form-a-vector-space|선형사상의 공간]] $L(V, V)$에서의 차, 곧 $T + \bigl(-(\lambda i_V)\bigr)$이다. $\operatorname{Ker}(T - \lambda i_V)$를 $\lambda$에 대한 $T$의 **고유공간**(eigenspace)이라 한다.

$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이면, $A$의 고윳값, 고유벡터, 고유공간은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상 $T_A : \mathbb{R}^n \to \mathbb{R}^n$의 고윳값, 고유벡터, 고유공간을 말한다. 곧 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $Ax = \lambda x$이고 $x \ne 0$인 $x \in \mathbb{R}^n$이 있을 때이다. $A - \lambda I_n$은 [[matrix|행렬]]의 (1)의 벡터공간 $M_{n \times n}$에서의 차 $A + \bigl(-(\lambda I_n)\bigr)$이다.

다음이 성립한다. $\lambda$, $\mu$는 실수이다.

1. $T - \lambda i_V$는 $L(V, V)$의 원소이고 모든 $v \in V$에서 $(T - \lambda i_V)v = Tv - \lambda v$이다. 고유공간 $\operatorname{Ker}(T - \lambda i_V)$는 $\{v \in V : Tv = \lambda v\}$이고 $V$의 [[subspace|부분공간]]이다. $v \in V$가 이 고유공간에 속하는 것은 정확히 $v = 0_V$이거나 $v$가 $\lambda$에 속하는 고유벡터일 때이다.
2. $\lambda$가 $T$의 고윳값인 것은 정확히 $\operatorname{Ker}(T - \lambda i_V) \ne \{0_V\}$일 때이고, 정확히 $T - \lambda i_V$가 [[injective-surjective-bijective|단사]]가 아닐 때이다.
3. $V$가 [[dimension|유한차원]]이면, $\lambda$가 $T$의 고윳값인 것은 정확히 $T - \lambda i_V : V \to V$가 전사가 아닐 때이고, 정확히 $T - \lambda i_V$가 [[isomorphism|동형사상]]이 아닐 때이다.
4. $A$가 $n \times n$ 행렬이면 $T_A - \lambda i_{\mathbb{R}^n} = T_{A - \lambda I_n}$이고, $\lambda$가 $A$의 고윳값인 것은 정확히 $A - \lambda I_n$이 [[invertible-matrix|가역]]이 아닐 때이다.
5. $v$가 $\lambda$에 속하는 $T$의 고유벡터이면서 $\mu$에 속하는 $T$의 고유벡터이면 $\lambda = \mu$이다. 곧 고유벡터 하나가 속하는 고윳값은 하나뿐이다.
6. $0$이 $T$의 고윳값인 것은 정확히 $T$가 단사가 아닐 때이다.
:::

:::english
Let $V$ be a vector space and $T : V \to V$ a linear map.

A real number $\lambda$ is an **eigenvalue** of $T$ exactly when there is $v \in V$ with $Tv = \lambda v$ and $v \ne 0_V$. For a real number $\lambda$ and $v \in V$, $v$ is an **eigenvector** of $T$ corresponding to $\lambda$ exactly when $Tv = \lambda v$ and $v \ne 0_V$. Hence $\lambda$ is an eigenvalue exactly when there is an eigenvector corresponding to $\lambda$. $v$ is an **eigenvector** of $T$ exactly when $v$ is an eigenvector of $T$ corresponding to some real number.

$i_V$ is the identity function on $V$. For a real number $\lambda$, $T - \lambda i_V$ is the difference in the space of linear maps $L(V, V)$, that is, $T + \bigl(-(\lambda i_V)\bigr)$. $\operatorname{Ker}(T - \lambda i_V)$ is called the **eigenspace** of $T$ for $\lambda$.

If $n$ is a natural number and $A$ is an $n \times n$ matrix, the eigenvalues, eigenvectors and eigenspaces of $A$ are those of the linear map $T_A : \mathbb{R}^n \to \mathbb{R}^n$ of (2) of the entry on the matrix–vector product. That is, a real number $\lambda$ is an eigenvalue of $A$ exactly when there is $x \in \mathbb{R}^n$ with $Ax = \lambda x$ and $x \ne 0$. $A - \lambda I_n$ is the difference $A + \bigl(-(\lambda I_n)\bigr)$ in the vector space $M_{n \times n}$ of (1) of the entry on matrices.

The following hold, where $\lambda$, $\mu$ are real numbers.

1. $T - \lambda i_V$ is an element of $L(V, V)$, and $(T - \lambda i_V)v = Tv - \lambda v$ for every $v \in V$. The eigenspace $\operatorname{Ker}(T - \lambda i_V)$ equals $\{v \in V : Tv = \lambda v\}$ and is a subspace of $V$. An element $v \in V$ belongs to this eigenspace exactly when $v = 0_V$ or $v$ is an eigenvector corresponding to $\lambda$.
2. $\lambda$ is an eigenvalue of $T$ exactly when $\operatorname{Ker}(T - \lambda i_V) \ne \{0_V\}$, and exactly when $T - \lambda i_V$ is not injective.
3. If $V$ is finite-dimensional, then $\lambda$ is an eigenvalue of $T$ exactly when $T - \lambda i_V : V \to V$ is not surjective, and exactly when $T - \lambda i_V$ is not an isomorphism.
4. If $A$ is an $n \times n$ matrix, then $T_A - \lambda i_{\mathbb{R}^n} = T_{A - \lambda I_n}$, and $\lambda$ is an eigenvalue of $A$ exactly when $A - \lambda I_n$ is not invertible.
5. If $v$ is an eigenvector of $T$ corresponding to $\lambda$ and also an eigenvector of $T$ corresponding to $\mu$, then $\lambda = \mu$. That is, an eigenvector corresponds to only one eigenvalue.
6. $0$ is an eigenvalue of $T$ exactly when $T$ is not injective.
:::

## 직관

고유벡터는 선형사상이 "방향을 바꾸지 않고 배율만 곱하는" 벡터입니다. 고무판을 가로로 두 배 잡아당기면 가로 방향의 화살표는 같은 방향을 가리킨 채 길이만 두 배가 되지만, 비스듬한 화살표는 기울기가 바뀝니다. 가로 화살표가 고유벡터, 배율 $2$가 고윳값에 해당합니다. 비유가 맞지 않는 곳도 있습니다. 고윳값은 $0$이나 음수일 수도 있어서 "배율"이 벡터를 영벡터로 보내거나 반대 방향으로 뒤집을 수 있고, 이 강의에는 길이나 방향이 정의되어 있지 않으므로 "같은 방향"은 실제로는 "$\lambda v$ 꼴"이라는 뜻입니다.

정의에서 $v \ne 0_V$를 요구하는 까닭은 영벡터가 모든 실수 $\lambda$에 대하여 $T0_V = 0_V = \lambda 0_V$를 만족하기 때문입니다. 영벡터를 허용하면 모든 실수가 고윳값이 되어 정의가 아무것도 가려내지 못합니다(아래 반례). 그 대신 영벡터를 넣어 모은 고유공간은 부분공간이 되고, "$\lambda$가 고윳값이다"는 "$T - \lambda i_V$의 핵이 $\{0_V\}$가 아니다"로 바뀝니다 (2). 이 바꿈 덕분에 앞 단원들의 단사·전사·동형사상과 가역행렬에 관한 결과를 고윳값에 바로 쓸 수 있습니다. (3)에서 유한차원이라는 가정은 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]을 쓰는 단계에서 쓰입니다.

이 항목은 주어진 $\lambda$가 고윳값인지 판정하는 조건을 줄 뿐, 고윳값이 있는지나 고윳값을 모두 구하는 방법은 말하지 않습니다. 이 강의는 행렬식과 다항식을 다루지 않으므로 고윳값을 일반적으로 구하는 방법은 다루지 않습니다. 아래 예시처럼 작은 행렬에서는 $(A - \lambda I_n)x = 0$을 직접 풀어 볼 수 있습니다.

## 성질의 증명

:::proof
$L(V, V)$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (2)에 의해 벡터공간이므로, 그 차 $S - R = S + (-R)$은 [[vector-space-basic-properties|(B2)]]의 덧셈 역원으로 정해진다. $V$의 차 $u - w$도 (B2)에서 정한 $u + (-w)$이다.

**(1)의 증명.** [[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_V \in L(V, V)$이고, 선형사상의 공간의 (1)에 의해 $\lambda i_V \in L(V, V)$이며 모든 $v$에서 $(\lambda i_V)v = \lambda(i_V v) = \lambda v$이다. 같은 항목의 (2)에 의해 $\lambda i_V$의 덧셈 역원 $-(\lambda i_V)$는 $v$에서의 값이 $-\bigl((\lambda i_V)v\bigr) = -(\lambda v)$인 선형사상이다. 선형사상의 공간의 (1)에 의해 $T + \bigl(-(\lambda i_V)\bigr) \in L(V, V)$이고, 그 덧셈의 정의에 의해 모든 $v \in V$에서
$$(T - \lambda i_V)v = Tv + \bigl(-(\lambda v)\bigr) = Tv - \lambda v$$
이다. 따라서 $v \in \operatorname{Ker}(T - \lambda i_V)$인 것은 [[kernel-and-range|핵]]의 정의에 의해 정확히 $Tv - \lambda v = 0_V$일 때이고, (B12)에 의해 정확히 $Tv = \lambda v$일 때이다. 곧 $\operatorname{Ker}(T - \lambda i_V) = \{v \in V : Tv = \lambda v\}$이다. [[kernel-and-range|핵과 상]]의 (1)에 의해 이 집합은 $V$의 부분공간이다.

마지막 문장을 보이자. $v$가 고유공간에 속하고 $v \ne 0_V$이면 $Tv = \lambda v$이고 $v \ne 0_V$이므로 $v$는 $\lambda$에 속하는 고유벡터이다. 따라서 고유공간의 원소는 $0_V$이거나 고유벡터이다. 거꾸로 [[subspace|부분공간]]의 (S1)에 의해 $0_V$는 고유공간에 속하고, $\lambda$에 속하는 고유벡터 $v$는 $Tv = \lambda v$이므로 고유공간에 속한다.

**(2)의 증명.** (1)에 의해 $0_V \in \operatorname{Ker}(T - \lambda i_V)$이므로, $\operatorname{Ker}(T - \lambda i_V) = \{0_V\}$인 것은 정확히 고유공간의 모든 원소가 $0_V$일 때이다. 따라서 $\operatorname{Ker}(T - \lambda i_V) \ne \{0_V\}$인 것은 정확히 $0_V$가 아닌 원소 $v$가 고유공간에 있을 때, 곧 (1)에 의해 $Tv = \lambda v$이고 $v \ne 0_V$인 $v$가 있을 때이며, 이것이 $\lambda$가 고윳값이라는 정의이다. (1)에 의해 $T - \lambda i_V$는 선형사상이므로 [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T - \lambda i_V$가 단사인 것은 정확히 $\operatorname{Ker}(T - \lambda i_V) = \{0_V\}$일 때이다. 두 쪽을 부정하면 $T - \lambda i_V$가 단사가 아닌 것은 정확히 $\operatorname{Ker}(T - \lambda i_V) \ne \{0_V\}$일 때이다.

**(3)의 증명.** $V$가 유한차원이므로 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]을 $W = V$(따라서 $\dim V = \dim W$)와 선형사상 $T - \lambda i_V : V \to V$에 쓰면, $T - \lambda i_V$가 단사인 것, $T - \lambda i_V : V \to V$가 전사인 것, $T - \lambda i_V$가 동형사상인 것은 서로 같은 조건이다. 따라서 세 조건의 부정도 서로 같다. (2)에 의해 $\lambda$가 고윳값인 것은 정확히 단사가 아닐 때이므로, 정확히 전사가 아닐 때이고 정확히 동형사상이 아닐 때이다.

**(4)의 증명.** $M_{n \times n}$은 [[matrix|행렬]]의 (1)에 의해 벡터공간이므로 (B5)에 의해 $-(\lambda I_n) = (-1)(\lambda I_n)$이다. $x \in \mathbb{R}^n$이라 하자. [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)를 거듭 쓰면
$$(A - \lambda I_n)x = Ax + \bigl((-1)(\lambda I_n)\bigr)x = Ax + (-1)\bigl((\lambda I_n)x\bigr) = Ax + (-1)\bigl(\lambda(I_n x)\bigr)$$
이고, 같은 항목의 (3)에 의해 $I_n x = x$이며, $\mathbb{R}^n$에서의 (B5)에 의해 $(-1)(\lambda x) = -(\lambda x)$이다. 따라서 $(A - \lambda I_n)x = Ax + \bigl(-(\lambda x)\bigr) = Ax - \lambda x$이다. 한편 (1)을 $V = \mathbb{R}^n$, $T = T_A$에 쓰면 $(T_A - \lambda i_{\mathbb{R}^n})x = T_A x - \lambda x = Ax - \lambda x$이다. 두 함수 $T_A - \lambda i_{\mathbb{R}^n}$과 $T_{A - \lambda I_n}$은 정의역이 $\mathbb{R}^n$으로 같고 모든 $x$에서 값이 같으므로 [[function|함수의 같음]]에 의해 같다.

[[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이다. 정의에 의해 $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda$가 $T_A$의 고윳값일 때이고, (3)에 의해 정확히 $T_A - \lambda i_{\mathbb{R}^n} = T_{A - \lambda I_n}$이 동형사상이 아닐 때이다. [[invertible-matrix|가역행렬과 역행렬]]의 (2)에 의해 $A - \lambda I_n$이 가역인 것은 정확히 $T_{A - \lambda I_n}$이 동형사상일 때이므로, 두 쪽을 부정하면 $\lambda$가 $A$의 고윳값인 것은 정확히 $A - \lambda I_n$이 가역이 아닐 때이다.

**(5)의 증명.** 가정에 의해 $\lambda v = Tv = \mu v$이고 $v \ne 0_V$이다. (B12)에 의해 $\lambda v - \mu v = 0_V$이고, (B11)에 의해 $(\lambda - \mu)v = \lambda v - \mu v = 0_V$이다. (B6)에 의해 $\lambda - \mu = 0$이거나 $v = 0_V$인데 $v \ne 0_V$이므로 $\lambda - \mu = 0$이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)(v)에 의해 $\lambda = \mu$이다.

**(6)의 증명.** (1)에 의해 $\operatorname{Ker}(T - 0 i_V) = \{v \in V : Tv = 0v\}$이고, (B3)에 의해 모든 $v$에서 $0v = 0_V$이므로 이 집합은 $\{v \in V : Tv = 0_V\} = \operatorname{Ker} T$이다. (2)에 의해 $0$이 고윳값인 것은 정확히 $\operatorname{Ker} T \ne \{0_V\}$일 때이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)의 두 쪽을 부정하면 이것은 정확히 $T$가 단사가 아닐 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[작은 행렬의 고윳값 판정]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$이라 합시다. $u = (1, 1)$, $w = (1, -1)$로 두면 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Au = 1(1, 2) + 1(2, 1) = (3, 3) = 3u$이고 $Aw = 1(1, 2) + (-1)(2, 1) = (-1, 1) = (-1)w$입니다. $u$와 $w$는 첫째 값이 $1 \ne 0$이므로 영벡터가 아닙니다. 따라서 $3$과 $-1$은 $A$의 고윳값이고, $u$는 $3$에, $w$는 $-1$에 속하는 고유벡터입니다.

$2$는 고윳값이 아닙니다. $x = (x_1, x_2)$가 $(A - 2I_2)x = 0$을 만족한다고 하면, $A - 2I_2 = \begin{pmatrix} -1 & 2 \\ 2 & -1 \end{pmatrix}$이므로 같은 항목의 (1)(행 규칙)에 의해 $-x_1 + 2x_2 = 0$이고 $2x_1 - x_2 = 0$입니다. 첫 식에서 $x_1 = 2x_2$이고, 이것을 둘째 식에 넣으면 $4x_2 - x_2 = 3x_2 = 0$이고 $3 \ne 0$이므로 (K10)에 의해 $x_2 = 0$, 따라서 $x_1 = 0$입니다. 곧 $\operatorname{Ker} T_{A - 2I_2} = \{0\}$입니다. (4)에 의해 $T_A - 2i_{\mathbb{R}^2} = T_{A - 2I_2}$이므로 $\operatorname{Ker}(T_A - 2i_{\mathbb{R}^2}) = \{0\}$이고, (2)에 의해 $2$는 고윳값이 아닙니다. 같은 계산을 $\lambda = 3$으로 하면 두 식이 모두 $x_1 = x_2$가 되어, $3$에 대한 고유공간은 $\{(t, t) : t \in \mathbb{R}\}$입니다.
:::

:::example[스칼라배 사상]
$\gamma$가 실수이고 $S : V \to V$가 모든 $v$에서 값이 $\gamma v$인 선형사상([[linear-map-examples|선형사상의 예]]의 (3))이라 합시다. $V$의 영벡터가 아닌 모든 $v$에서 $Sv = \gamma v$이므로, $V \ne \{0_V\}$이면 $\gamma$는 고윳값이고 영벡터가 아닌 모든 벡터가 $\gamma$에 속하는 고유벡터입니다. 그러면 (5)에 의해 $\gamma$가 아닌 실수 $\mu$는 고윳값이 아닙니다. $\mu$에 속하는 고유벡터 $v$가 있다면 그 $v$는 $\gamma$에도 속하므로 $\mu = \gamma$이기 때문입니다. $V = \{0_V\}$이면 영벡터가 아닌 벡터가 없으므로 $S$에는 고윳값이 없습니다.
:::

:::counterexample[영벡터를 허용하면 모든 실수가 "고윳값"이 된다]
정의에서 $v \ne 0_V$라는 조건을 빼고 "$Tv = \lambda v$인 $v$가 있다"로 고윳값을 정하면, 모든 선형사상에서 $T0_V = 0_V$이고([[linear-map|선형사상]]의 (T1)) 모든 실수 $\lambda$에서 $\lambda 0_V = 0_V$이므로((B4)) 모든 실수가 이 조건을 만족합니다. 위 예시의 $A$에서도 $A0 = 0 = 2 \cdot 0$이지만, 위에서 본 것처럼 $2$에 속하는 영벡터가 아닌 고유벡터는 없습니다. 조건 $v \ne 0_V$가 있어야 $3$, $-1$과 $2$가 구별됩니다.
:::

## 확인 질문

:::check[$\lambda$가 선형사상 $T : V \to V$의 고윳값이면 $\lambda + 1$은 $T + i_V$의 고윳값인가?]
그렇습니다. $v$가 $\lambda$에 속하는 고유벡터이면 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 덧셈의 정의와 (V5), (V8)에 의해 $(T + i_V)v = Tv + v = \lambda v + 1v = (\lambda + 1)v$이고 $v \ne 0_V$입니다. 같은 $v$가 $\lambda + 1$에 속하는 $T + i_V$의 고유벡터입니다.
:::

:::check[$0$은 $B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$의 고윳값인가?]
그렇습니다. $x = (2, -1)$이면 $Bx = 2(1, 2) + (-1)(2, 4) = (2 - 2, 4 - 4) = (0, 0) = 0x$이고 $x$는 첫째 값이 $2 \ne 0$이므로 영벡터가 아닙니다. 따라서 $x$는 $0$에 속하는 고유벡터입니다. (6)으로 말하면 $T_B$는 $x$와 $0$을 같은 곳으로 보내므로 단사가 아닙니다.
:::
