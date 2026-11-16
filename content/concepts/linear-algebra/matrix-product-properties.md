---
title: 행렬 곱의 성질
title_en: Properties of Matrix Multiplication
aliases: [행렬 곱의 결합법칙, 행렬 곱의 분배법칙, 단위행렬과의 곱, associativity of matrix multiplication, distributivity of matrix multiplication]
kind: proposition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: 크기가 맞는 행렬에 대하여 행렬의 곱은 결합법칙과 양쪽 분배법칙을 만족하고, 스칼라는 곱의 어느 자리로도 옮길 수 있으며, 단위행렬을 양쪽에서 곱해도 행렬이 바뀌지 않는다.
requires: [real-number-arithmetic, linear-map, matrix, matrix-vector-product, matrix-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 5.3절 Properties of matrix multiplication, pp.21–22; 6.1절 단위행렬과의 곱, p.24
    checked: original
    note: "출처는 5.3절(pp.21–22)에서 결합법칙 A(BC) = (AB)C, 분배법칙 A(B + C) = AB + AC 와 (A + B)C = AC + BC, 스칼라를 밖으로 꺼내는 법칙 A(αB) = (αA)B = α(AB) 를 '어느 한쪽이 정의되면'이라는 단서와 함께 적고, 이 성질들은 증명하기 쉬우며 선형사상에 대해 대응하는 성질을 증명하면 행렬의 성질이 따라 나온다고만 적는다(p.22). 이 항목은 크기를 가정으로 밝히고, 선형사상을 거치지 않고 열마다 비교해 증명한다. 출처는 6.1절(p.24)에서 항등사상 I 에 대해 AI = A, IA = A 가 곱이 정의될 때 성립한다고 'Clearly'를 붙여 적는다. 이 항목의 (4)가 행렬판이며 I_m 과 I_n 의 크기를 구별한다. 출처는 5.3절(p.22)에서 곱이 교환법칙을 만족하지 않는다고 적는다. 반례의 (A + B)(A + B) 계산은 matrix-product 항목의 반례 행렬을 다시 쓴 것이고 이 사이트가 계산했다. 확인 질문 1은 출처 연습문제 5.1 a(p.23)처럼 곱의 크기를 묻는 질문이고 크기는 새로 골랐다. 예시와 확인 질문 2는 출처의 1장 연습문제 5.1–5.8 을 다시 읽고 겹치지 않게 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$, $r$, $s$가 자연수이고 $\alpha$가 실수라 하자. 행렬의 [[matrix-product|곱]]과 [[matrix|행렬]]의 덧셈, 스칼라배, 단위행렬 $I_n$은 앞 항목들에서 정한 것이다.

1. (결합법칙) $A$가 $m \times n$, $B$가 $n \times r$, $C$가 $r \times s$ 행렬이면 $(AB)C = A(BC)$이다. 두 변은 모두 $m \times s$ 행렬이다.
2. (분배법칙) $A$가 $m \times n$, $B$와 $C$가 $n \times r$ 행렬이면 $A(B + C) = AB + AC$이다. $A$와 $D$가 $m \times n$, $C$가 $n \times r$ 행렬이면 $(A + D)C = AC + DC$이다.
3. (스칼라) $A$가 $m \times n$, $B$가 $n \times r$ 행렬이면 $(\alpha A)B = \alpha(AB) = A(\alpha B)$이다.
4. (단위행렬) $A$가 $m \times n$ 행렬이면 $I_m A = A$이고 $A I_n = A$이다.
:::

:::english
Let $m$, $n$, $r$, $s$ be natural numbers and $\alpha$ a real number. The product of matrices and the addition, scalar multiplication and identity matrices $I_n$ of matrices are as defined in the preceding entries.

1. (Associativity) If $A$ is $m \times n$, $B$ is $n \times r$ and $C$ is $r \times s$, then $(AB)C = A(BC)$. Both sides are $m \times s$ matrices.
2. (Distributivity) If $A$ is $m \times n$ and $B$, $C$ are $n \times r$, then $A(B + C) = AB + AC$. If $A$, $D$ are $m \times n$ and $C$ is $n \times r$, then $(A + D)C = AC + DC$.
3. (Scalars) If $A$ is $m \times n$ and $B$ is $n \times r$, then $(\alpha A)B = \alpha(AB) = A(\alpha B)$.
4. (Identity matrices) If $A$ is an $m \times n$ matrix, then $I_m A = A$ and $A I_n = A$.
:::

## 직관

행렬의 곱은 수의 곱처럼 결합법칙과 분배법칙을 만족하고, $I_n$은 수 $1$처럼 곱해도 아무것도 바꾸지 않습니다. 결합법칙은 "세 단계의 변환을 앞의 둘을 먼저 묶어서 하든 뒤의 둘을 먼저 묶어서 하든 결과가 같다"는 뜻입니다. 세 사람이 차례로 물건을 건네는 일에 비유하면, 첫째와 둘째 사이를 한 번에 처리하든 둘째와 셋째 사이를 한 번에 처리하든 물건이 지나는 순서는 같습니다. 비유가 맞는 곳은 순서는 그대로 두고 묶음만 바꾼다는 점이고, 순서를 바꾸는 것까지 허락하지는 않는다는 점에서도 맞습니다. 행렬의 곱은 순서를 바꾸면 결과가 달라질 수 있기 때문입니다([[matrix-product|행렬의 곱]]의 반례).

네 성질 모두 같은 방법으로 증명합니다. 곱 $XY$의 $k$번째 열은 $X$와 $Y$의 $k$번째 열의 곱이므로, 두 변의 $k$번째 열을 행렬과 벡터의 곱의 성질로 계산해 같음을 보이고 [[matrix|행렬]]의 (3)으로 결론을 냅니다. 성분을 이중으로 더하는 계산은 필요 없습니다.

## 증명

:::idea
행렬은 열로 정해진다. 두 변의 $k$번째 열을 각각 행렬과 벡터의 곱으로 쓰고, 행렬과 벡터의 곱에 관한 성질 (곱의 순서 $(AB)x = A(Bx)$, $T_A$의 선형성, 행렬의 합과 스칼라배와의 곱)로 같음을 보인다.
:::

:::hint
$(AB)C$의 $k$번째 열은 $(AB)\mathbf{c}_k$입니다. [[matrix-product|행렬의 곱]]의 (1)을 쓰세요.
:::

:::hint
$AI_n$의 $k$번째 열은 $A$와 $I_n$의 $k$번째 열 $e_k$의 곱입니다.
:::

:::proof
아래에서 "$X$와 $Y$의 곱의 $k$번째 열은 $X\mathbf{y}_k$"는 [[matrix-product|행렬의 곱]]의 정의이고, "합과 스칼라배의 $k$번째 열"은 [[matrix|행렬]]의 (5)이다. 각 성질에서 두 변이 같은 크기의 행렬이고 모든 $k$에서 $k$번째 열이 같음을 보인 뒤, 행렬의 (3)에 의해 두 변이 같다고 결론짓는다.

**(1)의 증명.** $AB$는 $m \times r$ 행렬이므로 $(AB)C$는 $m \times s$ 행렬이다. $BC$는 $n \times s$ 행렬이므로 $A(BC)$도 $m \times s$ 행렬이다. $k \in \{1, \dots, s\}$를 잡는다. $(AB)C$의 $k$번째 열은 $(AB)\mathbf{c}_k$이고, $\mathbf{c}_k \in \mathbb{R}^r$이므로 행렬의 곱의 (1)에 의해 $(AB)\mathbf{c}_k = A(B\mathbf{c}_k)$이다. 한편 $BC$의 $k$번째 열은 $B\mathbf{c}_k$이므로 $A(BC)$의 $k$번째 열은 $A(B\mathbf{c}_k)$이다. 두 열이 같으므로 $(AB)C = A(BC)$이다.

**(2)의 증명.** 첫째 등식: 두 변은 $m \times r$ 행렬이다. $k \in \{1, \dots, r\}$를 잡는다. 행렬의 (5)에 의해 $B + C$의 $k$번째 열은 $\mathbf{b}_k + \mathbf{c}_k$이므로 $A(B + C)$의 $k$번째 열은 $A(\mathbf{b}_k + \mathbf{c}_k)$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 이것은 $A\mathbf{b}_k + A\mathbf{c}_k$이다. 한편 $AB$의 $k$번째 열은 $A\mathbf{b}_k$, $AC$의 $k$번째 열은 $A\mathbf{c}_k$이므로 행렬의 (5)에 의해 $AB + AC$의 $k$번째 열은 $A\mathbf{b}_k + A\mathbf{c}_k$이다. 따라서 $A(B + C) = AB + AC$이다.

둘째 등식: 두 변은 $m \times r$ 행렬이다. $k \in \{1, \dots, r\}$를 잡는다. $(A + D)C$의 $k$번째 열은 $(A + D)\mathbf{c}_k$이고, 행렬과 벡터의 곱의 (4)에 의해 이것은 $A\mathbf{c}_k + D\mathbf{c}_k$이다. 행렬의 (5)에 의해 $AC + DC$의 $k$번째 열도 $A\mathbf{c}_k + D\mathbf{c}_k$이다. 따라서 $(A + D)C = AC + DC$이다.

**(3)의 증명.** 세 행렬 $(\alpha A)B$, $\alpha(AB)$, $A(\alpha B)$는 모두 $m \times r$ 행렬이다. $k \in \{1, \dots, r\}$를 잡는다. $(\alpha A)B$의 $k$번째 열은 $(\alpha A)\mathbf{b}_k$이고, 행렬과 벡터의 곱의 (4)에 의해 이것은 $\alpha(A\mathbf{b}_k)$이다. 행렬의 (5)에 의해 $\alpha(AB)$의 $k$번째 열은 $AB$의 $k$번째 열의 $\alpha$배, 곧 $\alpha(A\mathbf{b}_k)$이다. 행렬의 (5)에 의해 $\alpha B$의 $k$번째 열은 $\alpha\mathbf{b}_k$이므로 $A(\alpha B)$의 $k$번째 열은 $A(\alpha\mathbf{b}_k)$이고, 행렬과 벡터의 곱의 (2)에 의해 이것은 $\alpha(A\mathbf{b}_k)$이다. 세 행렬의 $k$번째 열이 모두 같으므로 $(\alpha A)B = \alpha(AB) = A(\alpha B)$이다.

**(4)의 증명.** $I_m A$와 $AI_n$은 모두 $m \times n$ 행렬이다. $k \in \{1, \dots, n\}$을 잡는다. $I_m A$의 $k$번째 열은 $I_m\mathbf{a}_k$이고, $\mathbf{a}_k \in \mathbb{R}^m$이므로 행렬과 벡터의 곱의 (3)에 의해 $I_m\mathbf{a}_k = \mathbf{a}_k$이다. 행렬의 (6)에 의해 $I_n$의 $k$번째 열은 $e_k$이므로 $AI_n$의 $k$번째 열은 $Ae_k$이고, 행렬과 벡터의 곱의 (3)에 의해 $Ae_k = \mathbf{a}_k$이다. 두 행렬의 $k$번째 열이 모두 $A$의 $k$번째 열과 같으므로 $I_m A = A$이고 $AI_n = A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[열을 나누어 곱하기]
$$
A = \begin{pmatrix} 1 & -1 \\ 2 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \qquad C = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
$$

이라 합시다. $B + C = I_2$이므로 (4)에 의해 $A(B + C) = AI_2 = A$입니다. 한편 $AB$의 열은 $B$의 열 $(1, 0)$, $(0, 0)$에 $A$를 곱한 $1(1, 2) + 0(-1, 0) = (1, 2)$와 $0(1, 2) + 0(-1, 0) = (0, 0)$이고, $AC$의 열은 $C$의 열 $(0, 0)$, $(0, 1)$에 $A$를 곱한 $(0, 0)$과 $0(1, 2) + 1(-1, 0) = (-1, 0)$입니다. 따라서

$$
AB + AC = \begin{pmatrix} 1 & 0 \\ 2 & 0 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 2 & 0 \end{pmatrix} = A
$$

이고 (2)의 첫째 등식과 맞습니다. $AB$는 $A$의 첫째 열만, $AC$는 둘째 열만 남긴 행렬입니다.
:::

:::counterexample[(A + B)(A + B)와 AA + 2AB + BB가 다른 두 행렬]
수에서는 $(a + b)(a + b) = aa + 2ab + bb$이지만, 이 계산은 $ba = ab$를 씁니다. 행렬에서는 그렇지 않을 수 있습니다.

$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}
$$

이라 하면 $A + B = \begin{pmatrix} 2 & 2 \\ 3 & 2 \end{pmatrix}$이고, $(A + B)(A + B)$의 열은 $2(2, 3) + 3(2, 2) = (4, 6) + (6, 6) = (10, 12)$와 $2(2, 3) + 2(2, 2) = (4, 6) + (4, 4) = (8, 10)$입니다. 한편 열마다 계산하면

$$
AA = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}, \quad AB = \begin{pmatrix} 7 & 2 \\ 3 & 1 \end{pmatrix}, \quad BA = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}, \quad BB = \begin{pmatrix} 1 & 0 \\ 6 & 1 \end{pmatrix}
$$

입니다. 예를 들어 $AA$의 둘째 열은 $2(1, 0) + 1(2, 1) = (4, 1)$이고 $BB$의 첫째 열은 $1(1, 3) + 3(0, 1) = (1, 6)$입니다. 그러면

$$
(A + B)(A + B) = \begin{pmatrix} 10 & 8 \\ 12 & 10 \end{pmatrix}, \qquad AA + 2(AB) + BB = \begin{pmatrix} 16 & 8 \\ 12 & 4 \end{pmatrix}
$$

이고 $(1, 1)$ 성분이 $10$과 $16$으로 다릅니다. (2)를 두 번 쓰면 $(A + B)(A + B) = (AA + BA) + (AB + BB)$이고, 실제로 $(1, 1)$ 성분은 $1 + 1 + 7 + 1 = 10$입니다. 차이는 $BA$ 자리에 $AB$를 넣은 데서 생깁니다.
:::

## 확인 질문

:::check[$A$가 $2 \times 3$, $B$가 $3 \times 1$, $C$가 $1 \times 2$ 행렬이면 $BC$, $(AB)C$, $A(BC)$의 크기는 무엇인가?]
$BC$는 $3 \times 2$ 행렬입니다. $AB$는 $2 \times 1$이므로 $(AB)C$는 $2 \times 2$이고, $A(BC)$도 $2 \times 3$과 $3 \times 2$의 곱이라 $2 \times 2$입니다. (1)에 의해 두 행렬은 같습니다.
:::

:::check[$A$가 $m \times n$ 행렬이고 $O$가 $n \times r$ 영행렬이면 $AO$는 무엇인가?]
$AO$의 $k$번째 열은 $A$와 영벡터 $(0, \dots, 0) \in \mathbb{R}^n$의 곱입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $T_A$는 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 이 곱은 $\mathbb{R}^m$의 영벡터입니다. 따라서 $AO$는 모든 열이 영벡터인 $m \times r$ 행렬, 곧 $m \times r$ 영행렬입니다.
:::
