---
title: 행 계수와 열 계수
title_en: Row Rank Equals Column Rank
aliases: [행 계수는 열 계수와 같다, 행공간, 전치행렬의 계수, row rank, column rank, row space, rank of the transpose]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 모든 행렬 A 에 대하여 전치행렬의 계수는 A 의 계수와 같다. 곧 행들이 생성하는 행공간의 차원(행 계수)과 열공간의 차원(열 계수)은 같다. A 를 열공간의 기저로 된 행렬과 좌표의 행렬의 곱으로 나누어 증명한다.
requires: [vector-space, subspace, real-function-space, real-number-arithmetic, finite-sum-of-vectors, linear-combination-and-span, linear-independence, sequences-in-a-subspace, exchange-lemma, dimension-of-subspace, rank-and-nullity, standard-basis, matrix, matrix-vector-product, matrix-product, transpose, rank-of-a-matrix, well-ordering-principle]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7.3절, Theorem 7.1 과 Theorem 7.2 의 2, p.64; 행공간의 이름은 2장 7절 첫머리와 7.1절의 예, p.60–61"
    checked: original
    note: "출처의 Theorem 7.1(The Rank Theorem, p.64)은 행렬 A 에 대하여 rank A = rank Aᵀ 라고 하고, 흔히 '행렬의 열 계수는 행 계수와 같다'고 말한다고 덧붙인다. 출처의 증명은 Ran A 와 Ran Aᵀ 의 차원이 모두 사다리꼴의 피벗의 수와 같으므로 자명하다는 한 문장이다(p.64). 이 항목은 피벗과 행 소거를 쓰지 않고, A 를 열공간의 기저를 열로 하는 행렬 C 와 각 열의 좌표를 열로 하는 행렬 F 의 곱 A = CF 로 나누어 증명한다. 이 증명은 출처에 없다(2장 7절의 본문과 연습문제를 읽은 범위). 출처는 Ran Aᵀ 를 행공간(row space)이라 부르고(p.60), 행공간을 Aᵀ 의 열공간으로 정의한다고 밝힌다(p.61). 이 항목은 행공간을 행들의 생성으로 정의하고 (1)에서 Aᵀ 의 열공간과 같음을 보인다. '행 계수', '열 계수'라는 말은 출처의 Theorem 7.1 뒤 문장(p.64)에 정의 없이 나온다. (3)은 출처 Theorem 7.2 의 2(p.64)이고, 출처는 Theorem 7.1 을 받아 7.2 의 1 을 Aᵀ 에 쓴다고 증명한다. 둘째 확인 질문은 출처 Theorem 7.3(p.66, 모든 b 에 대해 Ax = b 의 해가 있는 것은 정확히 Aᵀx = 0 의 해가 0 뿐일 때. 출처는 자세한 증명을 독자에게 맡긴다)의 한 방향이고, 출처 연습문제 7.7(p.68)과 같은 발상이다. 예시와 반례와 첫째 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $A$의 $j$번째 행은 $\mathbb{R}^n$의 원소이고([[matrix|행렬]]의 진술), 각 $j \in \{1, \dots, m\}$에 행이 하나씩 정해지므로 $j$번째 항이 $A$의 $j$번째 행인 $\mathbb{R}^n$의 벡터의 열이 있다. 이 벡터의 열의 생성을 $A$의 **행공간**(row space)이라 하고 $\operatorname{Row} A$로 쓴다. 계수 $\operatorname{rank} A$와 열공간 $\operatorname{Col} A$는 [[rank-of-a-matrix|행렬의 계수]]에서 정한 것이다.

1. $\operatorname{Row} A = \operatorname{Col} A^T$이다. 따라서 $\operatorname{Row} A$를 [[subspace|(P1)]]의 제한한 연산으로 본 벡터공간은 유한차원이고 그 차원은 $\operatorname{rank} A^T$이다. 이 차원을 $A$의 **행 계수**(row rank)라 하고, $\operatorname{rank} A = \dim \operatorname{Col} A$를 $A$의 **열 계수**(column rank)라 하기도 한다.
2. $\operatorname{rank} A^T = \operatorname{rank} A$이다. 곧 $A$의 행 계수와 열 계수는 같다.
3. $\operatorname{nullity} T_{A^T} + \operatorname{rank} A = m$이다. ($T_{A^T} : \mathbb{R}^m \to \mathbb{R}^n$이다.)
:::

:::english
Let $m$ and $n$ be natural numbers and let $A$ be an $m \times n$ matrix. The $j$-th row of $A$ is an element of $\mathbb{R}^n$, and since a row is determined for each $j \in \{1, \dots, m\}$, there is a sequence of vectors in $\mathbb{R}^n$ whose $j$-th term is the $j$-th row of $A$. The span of this sequence of vectors is called the **row space** of $A$ and is written $\operatorname{Row} A$. The rank $\operatorname{rank} A$ and the column space $\operatorname{Col} A$ are as defined for the rank of a matrix.

1. $\operatorname{Row} A = \operatorname{Col} A^T$. Hence the vector space $\operatorname{Row} A$, under the restricted operations of (P1), is finite-dimensional and its dimension is $\operatorname{rank} A^T$. This dimension is called the **row rank** of $A$, and $\operatorname{rank} A = \dim \operatorname{Col} A$ is sometimes called the **column rank** of $A$.
2. $\operatorname{rank} A^T = \operatorname{rank} A$. That is, the row rank and the column rank of $A$ are equal.
3. $\operatorname{nullity} T_{A^T} + \operatorname{rank} A = m$. (Here $T_{A^T} : \mathbb{R}^m \to \mathbb{R}^n$.)
:::

## 직관

열공간은 $\mathbb{R}^m$ 안에, 행공간은 $\mathbb{R}^n$ 안에 있어서 사는 곳부터 다릅니다. 그런데도 차원이 같다는 것이 이 정리입니다. 학급의 성적표에 빗대어 봅시다. 행은 학생, 열은 과목입니다. 과목 점수들(열) 사이의 관계가 단순하면(예를 들어 모든 과목 점수가 한 과목 점수의 배수이면) 학생들의 점수 줄(행)도 모두 한 가지 줄의 배수가 되어 단순해집니다. 비유가 맞는 곳은 열의 관계와 행의 관계가 같은 표에서 나온다는 점이고, 다른 곳은 정리가 말하는 "단순함"이 배수 관계 같은 특별한 꼴이 아니라 생성하는 공간의 차원이라는 것입니다.

증명은 이 생각을 행렬의 곱으로 적습니다. 열공간의 기저가 $r$개의 벡터로 되어 있으면, 각 열은 그 기저의 일차결합이므로 $A$는 "기저를 열로 하는 $m \times r$ 행렬"과 "좌표를 열로 하는 $r \times n$ 행렬"의 곱입니다. 전치하면 순서가 바뀐 곱이 되고, 곱의 계수는 인수의 계수를 넘지 않으므로 $A^T$의 계수는 $r$ 이하입니다. 같은 논증을 $A^T$에 쓰면 반대 부등식이 나옵니다.

## 증명

:::idea
$r = \operatorname{rank} A \ge 1$이면 열공간의 기저 $c_1, \dots, c_r$을 열로 하는 행렬 $C$와 각 열의 좌표를 열로 하는 행렬 $F$로 $A = CF$이다. 그러면 $A^T = F^T C^T$이고 $\operatorname{rank} A^T \le \operatorname{rank} F^T \le r$이다. $A^T$에도 같은 것을 쓴다.
:::

:::hint
$\operatorname{rank} A = 0$인 경우를 먼저 따로 보세요. [[matrix|행렬]]은 열이 $0$개인 행렬을 다루지 않으므로 $m \times 0$ 행렬 $C$를 만들 수 없습니다.
:::

:::hint
$CF$의 $k$번째 열은 $C\mathbf{f}_k$입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의로 펼쳐 보세요. 부등식은 [[rank-of-a-matrix|행렬의 계수]]의 (7)과 (1)에서 나옵니다.
:::

:::proof
정수의 계산과 (Z5)–(Z7), (L2)는 [[well-ordering-principle|정렬 원리]]의 진술에 있는 것이다.

**(1)** [[transpose|전치행렬]]의 (2)에 의해 $j \in \{1, \dots, m\}$이면 $A^T$의 $j$번째 열은 $A$의 $j$번째 행이다. 따라서 $A^T$의 열을 차례로 늘어놓은 $\mathbb{R}^n$의 벡터의 열과 $A$의 행을 차례로 늘어놓은 벡터의 열은 길이가 $m$으로 같고 모든 자리에서 항이 같으므로 같은 열이다([[finite-sum-of-vectors|벡터의 유한 합]]의 진술). 두 열의 생성도 같으므로 $\operatorname{Row} A = \operatorname{Col} A^T$이다. $A^T$는 $n \times m$ 행렬이므로 행렬의 계수의 정의에 의해 벡터공간 $\operatorname{Col} A^T$는 유한차원이고([[rank-and-nullity|계수와 퇴화차수]]의 (1)) 그 차원은 $\operatorname{rank} A^T$이다. 같은 집합의 (P1)의 제한한 연산은 같으므로 이것이 벡터공간 $\operatorname{Row} A$의 차원이다.

**(2)의 준비: 모든 자연수 $m$, $n$과 모든 $m \times n$ 행렬 $A$에 대하여 $\operatorname{rank} A^T \le \operatorname{rank} A$이다.** $r = \operatorname{rank} A$라 하자. $r$은 $0$ 이상의 정수이다.

*$r = 0$인 경우.* [[rank-of-a-matrix|행렬의 계수]]의 (6)에 의해 $A$는 영행렬이고, 모든 $k$, $j$에서 $(A^T)_{k,j} = a_{j,k} = 0$이므로 [[matrix|행렬]]의 (2)에 의해 $A^T$는 $n \times m$ 영행렬이다. 행렬의 계수의 (6)에 의해 $\operatorname{rank} A^T = 0 = r$이다.

*$r \ge 1$인 경우.* $r$은 자연수이다. 행렬의 계수의 정의 다음의 문장에 의해 벡터공간 $\operatorname{Col} A$에 길이 $r$인 기저 $c_1, \dots, c_r$이 있다. [[sequences-in-a-subspace|부분공간 안의 열]]의 "두 가지로 보는 열"과 (J4)에 의해 $c$는 모든 항이 $\operatorname{Col} A$에 속하는 $\mathbb{R}^m$의 벡터의 열이고, $\mathbb{R}^m$에서 일차독립이며, $\operatorname{span}(c_1, \dots, c_r) = \operatorname{Col} A$이다(이 $\operatorname{span}$은 $\mathbb{R}^m$에서 계산한 것이다).

$k \in \{1, \dots, n\}$이라 하자. [[linear-combination-and-span|(N2)]]에 의해 $\mathbf{a}_k \in \operatorname{Col} A = \operatorname{span}(c)$이므로 $\mathbf{a}_k$는 $c$의 일차결합이고, $c$가 일차독립이므로 [[exchange-lemma|(X1)]]에 의해 $\mathbf{a}_k = \lambda_1 c_1 + \cdots + \lambda_r c_r$인 길이 $r$인 실수의 열 $\lambda$는 하나뿐이다. 이 열의 $l$번째 항을 $f_{l,k}$라 하자. 그러면 $\{1, \dots, r\} \times \{1, \dots, n\}$의 각 원소 $(l, k)$에 실수 $f_{l,k}$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $(l, k)$에서의 값이 $f_{l,k}$인 함수, 곧 $r \times n$ 행렬 $F$가 있다. $F$의 $k$번째 열 $\mathbf{f}_k \in \mathbb{R}^r$은 $l$번째 값이 $f_{l,k}$인 원소이고, 정의에 의해
$$\mathbf{a}_k = f_{1,k} c_1 + \cdots + f_{r,k} c_r \qquad (k = 1, \dots, n)$$
이다. 또 행렬의 (4)에 의해 $l$번째 열이 $c_l$인 $m \times r$ 행렬 $C$가 있다.

$CF = A$임을 보인다. [[matrix-product|행렬의 곱]]의 정의에 의해 $CF$는 $m \times n$ 행렬이고 그 $k$번째 열은 $C\mathbf{f}_k$이다. 행렬과 벡터의 곱의 정의에 의해 $C\mathbf{f}_k = f_{1,k} c_1 + \cdots + f_{r,k} c_r = \mathbf{a}_k$이다. 모든 $k$에서 $CF$와 $A$의 $k$번째 열이 같으므로 행렬의 (3)에 의해 $CF = A$이다.

전치행렬의 (4)에 의해 $A^T = (CF)^T = F^T C^T$이고, $F^T$는 $n \times r$ 행렬, $C^T$는 $r \times m$ 행렬이다. 행렬의 계수의 (7)을 $n \times r$ 행렬 $F^T$와 $r \times m$ 행렬 $C^T$에 쓰면 $\operatorname{rank} A^T = \operatorname{rank}(F^T C^T) \le \operatorname{rank} F^T$이고, 행렬의 계수의 (1)에 의해 $F^T$의 계수는 열의 개수 $r$ 이하이다. (Z6)에 의해 $\operatorname{rank} A^T \le r = \operatorname{rank} A$이다.

**(2)** 준비를 $n \times m$ 행렬 $A^T$에 쓰면 $\operatorname{rank} (A^T)^T \le \operatorname{rank} A^T$이고, 전치행렬의 (1)에 의해 $(A^T)^T = A$이므로 $\operatorname{rank} A \le \operatorname{rank} A^T$이다. 준비를 $A$에 쓴 $\operatorname{rank} A^T \le \operatorname{rank} A$와 함께 (L2)에 의해 $\operatorname{rank} A^T = \operatorname{rank} A$이다.

**(3)** $A^T$는 $n \times m$ 행렬이므로 행렬의 계수의 (4)에 의해 $\operatorname{nullity} T_{A^T} + \operatorname{rank} A^T = m$이고, (2)에 의해 $\operatorname{rank} A^T = \operatorname{rank} A$이다.
:::

## 예시와 반례

:::example[A = CF 로 나누어 보기]
$$A = \begin{pmatrix} 1 & -1 \\ 2 & -2 \\ 3 & -3 \end{pmatrix}$$
의 열은 $\mathbf{a}_1 = (1, 2, 3)$, $\mathbf{a}_2 = (-1, -2, -3) = (-1)\mathbf{a}_1$입니다. [[linear-combination-and-span|(N1)–(N4)]]에 의해 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1)$이고($\mathbf{a}_1$과 $\mathbf{a}_2$가 모두 $\operatorname{span}(\mathbf{a}_1)$에 속하고, $\mathbf{a}_1$이 $\operatorname{Col} A$에 속하므로 (N3)으로 두 포함이 나옵니다), $\mathbf{a}_1 \ne 0$이므로 길이 $1$인 벡터의 열 $c_1 = \mathbf{a}_1$이 벡터공간 $\operatorname{Col} A$의 기저이며 $\operatorname{rank} A = 1$입니다([[linear-independence|(I4)]], [[sequences-in-a-subspace|(J4)]]).

증명대로 하면 $\mathbf{a}_1 = 1c_1$, $\mathbf{a}_2 = (-1)c_1$이므로 좌표의 행렬은 $1 \times 2$ 행렬 $F = \begin{pmatrix} 1 & -1 \end{pmatrix}$이고, $C = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$입니다. $CF$의 열은 $C\mathbf{f}_1 = 1c_1 = \mathbf{a}_1$, $C\mathbf{f}_2 = (-1)c_1 = \mathbf{a}_2$이므로 $CF = A$입니다. $A$의 행은 $p = (1, -1)$, $(2, -2) = 2p$, $(3, -3) = 3p$입니다. 세 행은 (N4)에 의해 부분공간 $\operatorname{span}(p)$에 속하므로 (N3)에 의해 $\operatorname{Row} A \subseteq \operatorname{span}(p)$이고, $p$는 (N2)에 의해 부분공간 $\operatorname{Row} A$에 속하므로 (N3)에 의해 $\operatorname{span}(p) \subseteq \operatorname{Row} A$입니다. 따라서 $\operatorname{Row} A = \operatorname{span}(p)$이고, $p \ne 0$이므로 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 행 계수는 $1$로, 열 계수 $1$과 같습니다.
:::

:::counterexample[차원은 같아도 행공간과 열공간은 다를 수 있다]
$2 \times 2$ 행렬 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$의 열은 $(0, 0)$, $(1, 0) = e_1$이고 행은 $(0, 1) = e_2$, $(0, 0)$입니다. 영벡터는 $0e_1$이므로 두 열은 (N4)에 의해 부분공간 $\operatorname{span}(e_1)$에 속하고 (N3)에 의해 $\operatorname{Col} A \subseteq \operatorname{span}(e_1)$입니다. 또 $e_1$은 (N2)에 의해 $\operatorname{Col} A$에 속하므로 (N3)에 의해 $\operatorname{span}(e_1) \subseteq \operatorname{Col} A$입니다. 곧 $\operatorname{Col} A = \operatorname{span}(e_1)$입니다. 행에 대해서도 영벡터는 $0e_2$이므로 두 행은 $\operatorname{span}(e_2)$에 속하고, $e_2$는 $\operatorname{Row} A$에 속하므로 같은 두 단계로 $\operatorname{Row} A = \operatorname{span}(e_2)$입니다. $e_1$, $e_2$는 [[standard-basis|표준기저]]의 원소로 영벡터가 아니므로 (I4)와 부분공간의 차원의 (4)에 의해 둘 다 $1$차원입니다. 그러나 $\alpha e_2 = (0, \alpha)$의 첫째 값은 $0$이고 $e_1$의 첫째 값은 $1$이므로([[real-number-arithmetic|(K4)]]의 $0 \ne 1$) $e_1 \notin \operatorname{Row} A$이고 $\operatorname{Row} A \ne \operatorname{Col} A$입니다. 정리가 같다고 말하는 것은 두 공간의 차원이지 두 공간 자체가 아닙니다.
:::

## 확인 질문

:::check[$5 \times 3$ 행렬 $A$의 행들이 $\mathbb{R}^3$을 생성하면 $A$의 열은 일차독립인가?]
그렇습니다. 이 항목의 (1)에 의해 $\operatorname{Col} A^T = \operatorname{Row} A = \mathbb{R}^3$이므로, $3 \times 5$ 행렬 $A^T$에 [[rank-of-a-matrix|행렬의 계수]]의 (3)을 쓰면 $\operatorname{rank} A^T = 3$입니다. 이 항목의 (2)에 의해 $\operatorname{rank} A = 3$이고, $A$의 열의 개수가 $3$이므로 행렬의 계수의 (2)에 의해 $A$의 열은 일차독립입니다.
:::

:::check[$m \times n$ 행렬 $A$에 대하여 $T_A : \mathbb{R}^n \to \mathbb{R}^m$이 전사이면 $T_{A^T}$는 단사인가?]
그렇습니다. [[rank-of-a-matrix|행렬의 계수]]의 (3)에 의해 $\operatorname{rank} A = m$이고, 이 항목의 (2)에 의해 $\operatorname{rank} A^T = m$입니다. $A^T$는 열이 $m$개인 $n \times m$ 행렬이므로 행렬의 계수의 (2)에 의해 $T_{A^T}$는 단사입니다.
:::
