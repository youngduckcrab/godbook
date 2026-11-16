---
title: 전치행렬
title_en: Transpose of a Matrix
aliases: [전치, 전치 행렬, 행렬의 전치, transpose, transposed matrix]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: m × n 행렬 A 의 전치행렬 Aᵀ 는 (k, j) 성분이 A 의 (j, k) 성분인 n × m 행렬이다. 전치는 두 번 하면 제자리이고 합과 스칼라배를 보존하며, Aᵀ 의 열은 A 의 행이고, 곱의 전치는 전치의 곱을 순서를 바꾸어 한 것이다.
requires: [cartesian-product, function, real-number-arithmetic, real-function-space, finite-sum-of-vectors, matrix, matrix-product]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1.2절 Matrix notation 의 전치, pp.4–5; 5.4절 Transposed matrices and multiplication, p.22
    checked: original
    note: "출처는 1.2절(p.4)에서 A 의 행을 열로 바꾸어 전치행렬 Aᵀ 를 정한다고 하고, 형식적인 정의로 (Aᵀ)_{j,k} = (A)_{k,j} 를 적으며, Aᵀ 의 열은 A 의 행이고 Aᵀ 의 행은 A 의 열이라고 적는다. 5.4절(p.22)은 같은 정의를 다시 적은 뒤, 행과 열의 규칙을 간단히 살펴보면 (AB)ᵀ = BᵀAᵀ 임을 알 수 있다고만 적는다. 이 항목의 (4)가 그 증명이다. (Aᵀ)ᵀ = A, 합과 스칼라배의 전치, Iₙᵀ = Iₙ 의 진술과 증명은 이 사이트가 썼다. 출처는 Fⁿ 의 벡터를 (x_1, …, x_n)ᵀ 로 적는 데 전치를 쓰지만(pp.4–5, p.22), 이 강의는 ℝⁿ 의 원소를 행렬로 보지 않으므로 ᵀ 를 행렬에만 쓴다. 출처는 1.2절과 5.4절에서 2 × 3 행렬의 전치를 적어 보이는데, 이 항목의 예시도 행렬 하나의 전치를 적어 보는 같은 발상이고 3 × 2 행렬로 수를 새로 골랐다. 반례와 확인 질문은 출처의 1장 연습문제를 다시 읽고 겹치지 않게 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\{1, \dots, n\} \times \{1, \dots, m\}$의 각 원소 $(k, j)$에 실수 $a_{j,k}$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $(k, j)$에서의 값이 $a_{j,k}$인 $n \times m$ 행렬이 있고, [[matrix|행렬]]의 (2)에 의해 이런 행렬은 하나뿐이다. 이 행렬을 $A$의 **전치행렬**(transpose)이라 하고 $A^T$로 쓴다. 곧 $A^T$는 $n \times m$ 행렬이고 모든 $k \in \{1, \dots, n\}$, $j \in \{1, \dots, m\}$에서

$$
(A^T)_{k,j} = a_{j,k}
$$

이다. 기호 $^T$는 행렬에만 쓰고 $\mathbb{R}^n$의 원소에는 쓰지 않는다.

다음이 성립한다. $A$, $B$는 $m \times n$ 행렬이고 $\alpha$는 실수이다.

1. $(A^T)^T = A$이다. $(A + B)^T = A^T + B^T$이고 $(\alpha A)^T = \alpha A^T$이다.
2. $j \in \{1, \dots, m\}$이면 $A^T$의 $j$번째 열은 $A$의 $j$번째 행이다. $k \in \{1, \dots, n\}$이면 $A^T$의 $k$번째 행은 $A$의 $k$번째 열 $\mathbf{a}_k$이다.
3. $n$이 자연수이면 $I_n^T = I_n$이다.
4. $r$이 자연수이고 $C$가 $n \times r$ 행렬이면 $(AC)^T = C^T A^T$이다. 두 변은 모두 $r \times m$ 행렬이다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. A real number $a_{j,k}$ is assigned to each element $(k, j)$ of $\{1, \dots, n\} \times \{1, \dots, m\}$, so by (G) there is an $n \times m$ matrix whose value at $(k, j)$ is $a_{j,k}$, and by (2) of the entry on matrices there is only one such matrix. This matrix is called the **transpose** of $A$ and written $A^T$. That is, $A^T$ is an $n \times m$ matrix and for all $k \in \{1, \dots, n\}$ and $j \in \{1, \dots, m\}$

$$
(A^T)_{k,j} = a_{j,k}.
$$

The symbol $^T$ is used only for matrices and not for elements of $\mathbb{R}^n$.

The following hold. $A$, $B$ are $m \times n$ matrices and $\alpha$ is a real number.

1. $(A^T)^T = A$. $(A + B)^T = A^T + B^T$ and $(\alpha A)^T = \alpha A^T$.
2. If $j \in \{1, \dots, m\}$, the $j$-th column of $A^T$ is the $j$-th row of $A$. If $k \in \{1, \dots, n\}$, the $k$-th row of $A^T$ is the $k$-th column $\mathbf{a}_k$ of $A$.
3. If $n$ is a natural number, then $I_n^T = I_n$.
4. If $r$ is a natural number and $C$ is an $n \times r$ matrix, then $(AC)^T = C^T A^T$. Both sides are $r \times m$ matrices.
:::

## 직관

전치는 표를 대각선을 따라 뒤집는 일입니다. 반 학생들의 과목별 점수표를 "학생이 줄, 과목이 칸"으로 적었다면, 전치는 같은 점수를 "과목이 줄, 학생이 칸"으로 다시 적은 표입니다. 점수 하나하나는 그대로이고 주소의 두 번호만 자리를 바꿉니다. 이것이 $(A^T)_{k,j} = a_{j,k}$입니다. 비유는 점수와 주소에서 정의와 맞습니다. 다른 점은, 점수표에서는 뒤집기가 같은 자료를 보기 편하게 다시 적는 일일 뿐이지만 행렬에서는 $A^T$가 따로 정의된 행렬이라는 것입니다. $m \ne n$이면 크기부터 $A$와 다르고, $I_n$처럼 $A^T = A$인 경우도 있습니다((3)).

(4)에서 순서가 바뀌는 까닭은 성분 공식에 있습니다. $(AC)_{j,k}$는 $A$의 $j$번째 행과 $C$의 $k$번째 열로 계산되는데, 전치하면 $C$의 열은 $C^T$의 행이 되고 $A$의 행은 $A^T$의 열이 되므로, 같은 계산을 $C^T$를 앞에, $A^T$를 뒤에 두고 하게 됩니다. 증명에서 실수의 곱의 교환법칙이 쓰이는 곳은 항마다 $a_{j,l} c_{l,k}$를 $c_{l,k} a_{j,l}$로 바꾸는 자리입니다.

## 성질의 증명

:::proof
아래에서 두 행렬이 같다는 것은 [[matrix|행렬]]의 (2)로 보인다. 곧 두 행렬이 같은 크기이고 모든 성분이 같음을 보인다. (K1)은 [[real-number-arithmetic]]의 것이다.

**(1)의 증명.** $A^T$는 $n \times m$ 행렬이므로 $(A^T)^T$는 $m \times n$ 행렬이고, $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$에서 그 $(j, k)$ 성분은 정의에 의해 $(A^T)_{k,j}$이며 이것은 다시 정의에 의해 $a_{j,k}$이다. 크기와 성분이 $A$와 같으므로 $(A^T)^T = A$이다. 다음으로 $(A + B)^T$와 $A^T + B^T$는 모두 $n \times m$ 행렬이다. $(k, j)$ 성분을 비교하면 정의와 행렬의 (1)에 의해 $((A + B)^T)_{k,j} = (A + B)_{j,k} = a_{j,k} + b_{j,k}$이고, $(A^T + B^T)_{k,j} = (A^T)_{k,j} + (B^T)_{k,j} = a_{j,k} + b_{j,k}$이다. 따라서 $(A + B)^T = A^T + B^T$이다. 스칼라배도 성분을 비교한다. $((\alpha A)^T)_{k,j} = (\alpha A)_{j,k} = \alpha a_{j,k}$이고 $(\alpha A^T)_{k,j} = \alpha (A^T)_{k,j} = \alpha a_{j,k}$이므로 $(\alpha A)^T = \alpha A^T$이다.

**(2)의 증명.** $j \in \{1, \dots, m\}$이라 하자. [[matrix|행렬]]에서 정한 열의 정의에 의해 $n \times m$ 행렬 $A^T$의 $j$번째 열은 $\mathbb{R}^n$의 원소이고 $k$에서의 값이 $(A^T)_{k,j} = a_{j,k}$이다. 행의 정의에 의해 $A$의 $j$번째 행도 $\mathbb{R}^n$의 원소이고 $k$에서의 값이 $a_{j,k}$이다. 정의역이 $\{1, \dots, n\}$으로 같은 두 함수가 모든 $k$에서 값이 같으므로 [[function|함수의 같음]]에 의해 둘은 같다. 다음으로 $k \in \{1, \dots, n\}$이라 하자. 행의 정의에 의해 $A^T$의 $k$번째 행은 $\mathbb{R}^m$의 원소이고 $j$에서의 값이 $(A^T)_{k,j} = a_{j,k}$이다. 열의 정의에 의해 $\mathbf{a}_k$도 $\mathbb{R}^m$의 원소이고 $j$에서의 값이 $a_{j,k}$이다. 함수의 같음에 의해 둘은 같다.

**(3)의 증명.** $I_n^T$와 $I_n$은 모두 $n \times n$ 행렬이다. $k$, $j \in \{1, \dots, n\}$에서 정의에 의해 $(I_n^T)_{k,j} = (I_n)_{j,k}$이다. [[matrix|행렬]]의 (6)에 의해 이것은 $j = k$이면 $1$이고 $j \ne k$이면 $0$이다. 같은 (6)에 의해 $(I_n)_{k,j}$도 $k = j$이면 $1$이고 $k \ne j$이면 $0$이다. $j = k$와 $k = j$는 같은 조건이므로 모든 성분이 같고, 따라서 $I_n^T = I_n$이다.

**(4)의 증명.** $AC$는 $m \times r$ 행렬이므로 $(AC)^T$는 $r \times m$ 행렬이다. $C^T$는 $r \times n$, $A^T$는 $n \times m$ 행렬이므로 곱 $C^T A^T$가 정의되고 $r \times m$ 행렬이다. $k \in \{1, \dots, r\}$, $j \in \{1, \dots, m\}$을 잡는다. 정의와 [[matrix-product|행렬의 곱]]의 (2)에 의해
$$((AC)^T)_{k,j} = (AC)_{j,k} = a_{j,1} c_{1,k} + \cdots + a_{j,n} c_{n,k}$$
이고, 오른쪽은 $l$번째 항이 $a_{j,l} c_{l,k}$인 길이 $n$인 실수의 열의 합이다. 한편 행렬의 곱의 (2)를 $C^T$와 $A^T$에 쓰고 전치의 정의로 성분을 바꾸면
$$(C^T A^T)_{k,j} = (C^T)_{k,1} (A^T)_{1,j} + \cdots + (C^T)_{k,n} (A^T)_{n,j} = c_{1,k} a_{j,1} + \cdots + c_{n,k} a_{j,n}$$
이고, 오른쪽은 $l$번째 항이 $c_{l,k} a_{j,l}$인 실수의 열의 합이다. (K1)에 의해 모든 $l$에서 $a_{j,l} c_{l,k} = c_{l,k} a_{j,l}$이므로 두 실수의 열은 모든 자리의 항이 같고, [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 같은 열이며 같은 열의 합은 같다. 따라서 모든 $(k, j)$에서 두 성분이 같고 $(AC)^T = C^T A^T$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 2 행렬의 전치]
$$
A = \begin{pmatrix} 1 & -2 \\ 0 & 3 \\ 4 & 5 \end{pmatrix}, \qquad A^T = \begin{pmatrix} 1 & 0 & 4 \\ -2 & 3 & 5 \end{pmatrix}
$$

입니다. $A$는 $3 \times 2$, $A^T$는 $2 \times 3$이고, 예를 들어 $(A^T)_{2,3} = a_{3,2} = 5$입니다. $A^T$의 첫째 열 $(1, -2)$는 $A$의 첫째 행이고, $A^T$의 둘째 행 $(-2, 3, 5)$는 $A$의 둘째 열 $\mathbf{a}_2$입니다.
:::

:::counterexample[곱의 전치를 순서대로 곱하면 다를 수 있다]
(4)의 순서를 바꾼 $(AC)^T = A^T C^T$는 일반적으로 성립하지 않습니다.

$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \qquad C = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}
$$

이라 하면 [[matrix-product|행렬의 곱]]의 반례에서 계산한 대로 $AC = \begin{pmatrix} 7 & 2 \\ 3 & 1 \end{pmatrix}$이므로 $(AC)^T = \begin{pmatrix} 7 & 3 \\ 2 & 1 \end{pmatrix}$입니다. $A^T = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$, $C^T = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$이고, $C^T A^T$의 열은 $A^T$의 열 $(1, 2)$, $(0, 1)$에 $C^T$를 곱한 $1(1, 0) + 2(3, 1) = (7, 2)$와 $0(1, 0) + 1(3, 1) = (3, 1)$이므로 $C^T A^T = \begin{pmatrix} 7 & 3 \\ 2 & 1 \end{pmatrix}$로 (4)와 맞습니다. 그러나 $A^T C^T$의 열은 $C^T$의 열 $(1, 0)$, $(3, 1)$에 $A^T$를 곱한 $1(1, 2) + 0(0, 1) = (1, 2)$와 $3(1, 2) + 1(0, 1) = (3, 6) + (0, 1) = (3, 7)$이므로 $A^T C^T = \begin{pmatrix} 1 & 3 \\ 2 & 7 \end{pmatrix}$이고, $(1, 1)$ 성분이 $1 \ne 7$이라 $(AC)^T$와 다릅니다.
:::

## 확인 질문

:::check[$4 \times 2$ 행렬 $A$의 $(3, 1)$ 성분이 $-6$이면 $A^T$의 크기는 무엇이고, $-6$은 $A^T$의 어느 성분인가?]
$A^T$는 $2 \times 4$ 행렬이고, 정의에 의해 $(A^T)_{1,3} = a_{3,1} = -6$이므로 $-6$은 $A^T$의 $(1, 3)$ 성분입니다.
:::

:::check[$A$가 $m \times n$, $B$가 $n \times r$, $C$가 $r \times s$ 행렬이면 $((AB)C)^T$를 $A^T$, $B^T$, $C^T$로 나타내어라.]
(4)를 $AB$와 $C$에 쓰면 $((AB)C)^T = C^T (AB)^T$이고, 다시 (4)를 $A$와 $B$에 쓰면 $(AB)^T = B^T A^T$입니다. 따라서 $((AB)C)^T = C^T (B^T A^T)$이고, 이것은 $s \times m$ 행렬입니다.
:::
