---
title: 행렬의 곱
title_en: Matrix Product
aliases: [행렬 곱, 행렬의 곱셈, 행렬곱, matrix product, matrix multiplication]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: m × n 행렬 A 와 n × r 행렬 B 의 곱 AB 는 k 번째 열이 A 와 B 의 k 번째 열의 곱인 m × r 행렬이다. (AB)x = A(Bx) 이고, 성분은 A 의 행과 B 의 열로 계산되며, 합성의 행렬은 행렬의 곱이다.
requires: [real-number-arithmetic, function, function-composition, real-function-space, finite-sum-of-vectors, standard-basis, linear-map, composition-of-linear-maps, matrix, matrix-vector-product, matrix-of-a-linear-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 5.1절 Definition of the matrix multiplication, p.19; 5.2절 Motivation, composition of linear transformations, p.20; 5.3절 곱의 비가환성, p.22
    checked: original
    note: "출처는 5.1절(p.19)에서 B 의 열이 b_1, …, b_r 이면 Ab_1, …, Ab_r 가 AB 의 열이라고 곱을 정의한다. 이어서 행렬과 벡터의 곱의 행 규칙을 떠올리면 (AB)_{j,k} 가 A 의 j 번째 행과 B 의 k 번째 열로 계산된다고 적고 합의 기호로 성분 공식을 쓰며, 곱은 A 가 m × n, B 가 n × r 일 때만 정의된다고 적는다. 이 항목의 정의와 (2), 크기 조건이 이에 해당하고 (2)는 행렬과 벡터의 곱의 행 규칙으로 증명한다. 출처는 5.2절(p.20)에서 행렬이 A, B 인 두 선형사상의 합성의 k 번째 열을 표준기저 e_k 에서 계산해 Ab_k 를 얻고, 그것이 곱 AB 의 정의와 같다고 적는다. 이 항목의 (3)이 그 계산이다. 합성이 선형사상이라는 것은 출처가 연습문제로 돌리고, 이 사이트에서는 composition-of-linear-maps 의 (1)이다. 5.2절의 계산은 표준기저의 e_k 에서 하고, 이 항목의 (1)은 모든 x 에서 (AB)x = A(Bx) 를 증명한다. 출처는 p.20 에서 합성 T_1 ∘ T_2 를 T_1T_2 로 쓰겠다고 하지만 이 사이트는 ∘ 를 쓴다. 출처는 5.3절(p.22)에서 곱이 교환법칙을 만족하지 않으며 행렬을 아무렇게나 고르면 AB ≠ BA 일 가능성이 크다고 적는데, 그 자리에 구체적인 예는 없다. 반례의 2 × 2 행렬은 이 사이트가 골랐다. 예시와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$, $r$가 자연수이고 $A$가 $m \times n$ [[matrix|행렬]], $B$가 $n \times r$ 행렬이라 하자. $B$의 각 열 $\mathbf{b}_k \in \mathbb{R}^n$ ($k \in \{1, \dots, r\}$)에 대하여 [[matrix-vector-product|행렬과 벡터의 곱]] $A\mathbf{b}_k \in \mathbb{R}^m$이 하나씩 정해지므로, $k$번째 항이 $A\mathbf{b}_k$인 $\mathbb{R}^m$의 길이 $r$인 벡터의 열이 있다. [[matrix|행렬]]의 (4)에 의해 모든 $k \in \{1, \dots, r\}$에서 $k$번째 열이 $A\mathbf{b}_k$인 $m \times r$ 행렬이 정확히 하나 있다. 이 행렬을 $A$와 $B$의 **곱**(product)이라 하고 $AB$로 쓴다. $A$의 열의 개수와 $B$의 행의 개수가 다르면, 곧 $A$가 $m \times n$ 행렬이고 $B$가 $p \ne n$인 $p \times r$ 행렬이면, 곱 $AB$를 정의하지 않는다. $T_A$와 $[T]$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)와 [[matrix-of-a-linear-map|선형사상의 행렬]]에서 정한 것이다.

1. 모든 $x \in \mathbb{R}^r$에서 $(AB)x = A(Bx)$이다. 곧 $T_{AB} = T_A \circ T_B$이다.
2. 모든 $j \in \{1, \dots, m\}$와 $k \in \{1, \dots, r\}$에서 $(AB)_{j,k} = a_{j,1} b_{1,k} + \cdots + a_{j,n} b_{n,k}$이다. 오른쪽은 $l$번째 항이 $a_{j,l} b_{l,k}$인 길이 $n$인 실수의 열의 합이다.
3. $S : \mathbb{R}^n \to \mathbb{R}^m$과 $T : \mathbb{R}^r \to \mathbb{R}^n$이 [[linear-map|선형사상]]이면 [[composition-of-linear-maps|합성]] $S \circ T : \mathbb{R}^r \to \mathbb{R}^m$은 선형사상이고 $[S \circ T] = [S][T]$이다.
:::

:::english
Let $m$, $n$, $r$ be natural numbers, $A$ an $m \times n$ matrix, and $B$ an $n \times r$ matrix. For each column $\mathbf{b}_k \in \mathbb{R}^n$ of $B$ ($k \in \{1, \dots, r\}$) the matrix–vector product $A\mathbf{b}_k \in \mathbb{R}^m$ is determined, so there is the sequence of vectors of $\mathbb{R}^m$ of length $r$ whose $k$-th term is $A\mathbf{b}_k$. By (4) of the entry on matrices there is exactly one $m \times r$ matrix whose $k$-th column is $A\mathbf{b}_k$ for every $k \in \{1, \dots, r\}$. This matrix is called the **product** of $A$ and $B$ and written $AB$. If the number of columns of $A$ differs from the number of rows of $B$, that is, if $A$ is an $m \times n$ matrix and $B$ is a $p \times r$ matrix with $p \ne n$, the product $AB$ is not defined. $T_A$ and $[T]$ are as defined in (2) of the entry on the matrix–vector product and in the entry on the matrix of a linear map.

1. $(AB)x = A(Bx)$ for every $x \in \mathbb{R}^r$. That is, $T_{AB} = T_A \circ T_B$.
2. $(AB)_{j,k} = a_{j,1} b_{1,k} + \cdots + a_{j,n} b_{n,k}$ for every $j \in \{1, \dots, m\}$ and $k \in \{1, \dots, r\}$. The right-hand side is the sum of the sequence of real numbers of length $n$ whose $l$-th term is $a_{j,l} b_{l,k}$.
3. If $S : \mathbb{R}^n \to \mathbb{R}^m$ and $T : \mathbb{R}^r \to \mathbb{R}^n$ are linear maps, then the composition $S \circ T : \mathbb{R}^r \to \mathbb{R}^m$ is a linear map and $[S \circ T] = [S][T]$.
:::

## 직관

곱 $AB$는 "먼저 $B$를 곱하고 그다음 $A$를 곱하는 일"을 행렬 하나로 적은 것입니다. 환율표 두 장을 떠올릴 수 있습니다. $B$가 원화 금액을 달러 금액으로, $A$가 달러 금액을 유로 금액으로 바꾸는 표라면, $AB$는 원화에서 유로로 곧바로 바꾸는 표이고 어느 쪽으로 계산해도 결과가 같다는 것이 (1)입니다. 비유가 정의와 맞는 곳은 "두 번 바꾸기를 한 번 바꾸기로 합친다"는 점입니다. 환율표 하나는 금액 하나를 바꾸지만 행렬은 여러 값을 한꺼번에 바꾼다는 점은 다릅니다.

정의가 열로 되어 있으므로 (1)은 $Bx$가 $B$의 열들의 일차결합이고 $T_A$가 일차결합을 보존한다는 데서 나옵니다. 크기 조건도 여기서 보입니다. $Bx$는 $\mathbb{R}^n$의 원소이므로 $A$의 열이 $n$개일 때만 $A(Bx)$를 계산할 수 있습니다. (2)는 한 성분만 알고 싶을 때 쓰는 계산법이고, (3)은 (1)을 선형사상의 행렬의 말로 옮긴 것입니다. 곱의 순서를 바꾸면 결과가 달라질 수 있다는 것을 아래 반례에서 봅니다.

## 성질의 증명

:::proof
$\mathbb{R}^m$, $\mathbb{R}^n$의 덧셈과 스칼라배는 [[real-function-space|실숫값 함수의 공간]]에서 정한 것이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 열은 같은 열이며 같은 열의 합은 같다.

**(1)의 증명.** $x = (x_1, \dots, x_r) \in \mathbb{R}^r$이라 하자. $AB$의 $k$번째 열은 $A\mathbf{b}_k$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $(AB)x$는 $k$번째 항이 $x_k(A\mathbf{b}_k)$인 $\mathbb{R}^m$의 열의 합이다. $T_A$는 같은 항목의 (2)에 의해 선형사상이고 $T_A \mathbf{b}_k = A\mathbf{b}_k$이므로, 이 열은 $k$번째 항이 $x_k(T_A \mathbf{b}_k)$인 열과 같다. [[linear-map|선형사상]]의 (T5)를 $T_A$와 실수의 열 $x_1, \dots, x_r$, $\mathbb{R}^n$의 열 $\mathbf{b}_1, \dots, \mathbf{b}_r$에 쓰면
$$x_1 T_A \mathbf{b}_1 + \cdots + x_r T_A \mathbf{b}_r = T_A(x_1 \mathbf{b}_1 + \cdots + x_r \mathbf{b}_r)$$
이다. 곱의 정의에 의해 $x_1 \mathbf{b}_1 + \cdots + x_r \mathbf{b}_r = Bx$이므로 오른쪽은 $T_A(Bx) = A(Bx)$이다. 따라서 $(AB)x = A(Bx)$이다.

$T_B : \mathbb{R}^r \to \mathbb{R}^n$이고 $T_A$의 정의역이 $\mathbb{R}^n$이므로 [[function-composition|합성]] $T_A \circ T_B : \mathbb{R}^r \to \mathbb{R}^m$이 정해지고, 모든 $x \in \mathbb{R}^r$에서 $(T_A \circ T_B)(x) = T_A(T_B x) = A(Bx)$이다. 한편 $AB$는 $m \times r$ 행렬이므로 $T_{AB} : \mathbb{R}^r \to \mathbb{R}^m$이고 $T_{AB} x = (AB)x$이다. 두 함수는 정의역이 $\mathbb{R}^r$으로 같고 방금 보인 등식에 의해 모든 $x$에서 값이 같으므로 [[function|함수의 같음]]에 의해 $T_{AB} = T_A \circ T_B$이다.

**(2)의 증명.** $j$, $k$를 잡는다. [[matrix|행렬]]에서 정한 대로 $(AB)_{j,k}$는 $AB$의 $k$번째 열의 $j$번째 값이고, $AB$의 $k$번째 열은 $A\mathbf{b}_k$이다. $\mathbf{b}_k \in \mathbb{R}^n$의 $l$번째 값은 $b_{l,k}$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)을 $A$와 $x = \mathbf{b}_k$에 쓰면 $x_l = b_{l,k}$이므로
$$(AB)_{j,k} = (A\mathbf{b}_k)(j) = a_{j,1} b_{1,k} + \cdots + a_{j,n} b_{n,k}$$
이다.

**(3)의 증명.** [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $S \circ T : \mathbb{R}^r \to \mathbb{R}^m$은 선형사상이므로 $[S \circ T]$가 정해지고, 이것은 $m \times r$ 행렬이다. $[S]$는 $m \times n$ 행렬, $[T]$는 $n \times r$ 행렬이므로 곱 $[S][T]$도 $m \times r$ 행렬로 정해진다. $k \in \{1, \dots, r\}$을 잡는다. $[S \circ T]$의 $k$번째 열은 $(S \circ T)e_k = S(Te_k)$이다. $[T]$의 $k$번째 열은 $Te_k$이므로 곱의 정의에 의해 $[S][T]$의 $k$번째 열은 $[S](Te_k)$이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)을 $S$와 $Te_k \in \mathbb{R}^n$에 쓰면 이것은 $S(Te_k)$이다. 모든 $k$에서 두 행렬의 $k$번째 열이 같으므로 [[matrix|행렬]]의 (3)에 의해 $[S \circ T] = [S][T]$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 3 행렬과 3 × 2 행렬의 곱]
$$
A = \begin{pmatrix} 3 & 0 & 1 \\ -1 & 2 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 1 & 4 \end{pmatrix}
$$

이라 합시다. $A$는 $2 \times 3$, $B$는 $3 \times 2$이므로 $AB$는 $2 \times 2$ 행렬입니다. $B$의 열은 $\mathbf{b}_1 = (2, 0, 1)$, $\mathbf{b}_2 = (1, -1, 4)$이고, 정의대로 열마다 계산하면

$$
A\mathbf{b}_1 = 2(3, -1) + 0(0, 2) + 1(1, 1) = (6, -2) + (0, 0) + (1, 1) = (7, -1),
$$

$$
A\mathbf{b}_2 = 1(3, -1) + (-1)(0, 2) + 4(1, 1) = (3, -1) + (0, -2) + (4, 4) = (7, 1)
$$

이므로 $AB = \begin{pmatrix} 7 & 7 \\ -1 & 1 \end{pmatrix}$입니다. 성분 공식 (2)로 확인하면 $(AB)_{2,1} = (-1) \cdot 2 + 2 \cdot 0 + 1 \cdot 1 = -1$이고 $(AB)_{2,2} = (-1) \cdot 1 + 2 \cdot (-1) + 1 \cdot 4 = 1$입니다. 반대 순서의 곱 $BA$는 $3 \times 3$ 행렬이므로 크기부터 $AB$와 다릅니다.
:::

:::counterexample[AB와 BA가 다른 2 × 2 행렬]
$AB$와 $BA$가 모두 정의되고 크기도 같아도 두 곱은 다를 수 있습니다.

$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}
$$

이라 합시다. $AB$의 열은 $A\mathbf{b}_1 = 1(1, 0) + 3(2, 1) = (1, 0) + (6, 3) = (7, 3)$과 $A\mathbf{b}_2 = 0(1, 0) + 1(2, 1) = (0, 0) + (2, 1) = (2, 1)$입니다. $BA$의 열은 $B\mathbf{a}_1 = 1(1, 3) + 0(0, 1) = (1, 3)$과 $B\mathbf{a}_2 = 2(1, 3) + 1(0, 1) = (2, 6) + (0, 1) = (2, 7)$입니다. 따라서

$$
AB = \begin{pmatrix} 7 & 2 \\ 3 & 1 \end{pmatrix}, \qquad BA = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}
$$

이고 $(AB)_{1,1} = 7 \ne 1 = (BA)_{1,1}$이므로 $AB \ne BA$입니다. 곧 행렬의 곱에서는 $AB = BA$가 모든 $A$, $B$에서 성립하지는 않습니다.
:::

## 확인 질문

:::check[$A$가 $2 \times 3$ 행렬이고 $B$가 $3 \times 4$ 행렬이면 $AB$와 $BA$ 가운데 어느 것이 정의되고, 정의되는 것의 크기는 무엇인가?]
$A$의 열의 개수 $3$과 $B$의 행의 개수 $3$이 같으므로 $AB$는 정의되고 $2 \times 4$ 행렬입니다. $BA$는 $B$의 열의 개수 $4$와 $A$의 행의 개수 $2$가 다르므로 정의되지 않습니다.
:::

:::check[선형사상 $S, T : \mathbb{R}^2 \to \mathbb{R}^2$의 행렬이 $[S] = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $[T] = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$이면 $x = (x_1, x_2)$에서 $(S \circ T)x$는 무엇인가?]
(3)에 의해 $[S \circ T] = [S][T]$이고, 그 열은 $[T]$의 열 $(2, 0)$과 $(0, 3)$에 각각 $[S]$를 곱한 $2(0, 1) + 0(1, 0) = (0, 2)$와 $0(0, 1) + 3(1, 0) = (3, 0)$입니다. [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)에 의해 $(S \circ T)x = [S \circ T]x = x_1(0, 2) + x_2(3, 0) = (3x_2, 2x_1)$입니다. 직접 계산해도 $Tx = [T]x = x_1(2, 0) + x_2(0, 3) = (2x_1, 3x_2)$이고, $y = (y_1, y_2)$이면 $Sy = [S]y = y_1(0, 1) + y_2(1, 0) = (y_2, y_1)$이므로 $S(Tx) = (3x_2, 2x_1)$입니다.
:::
