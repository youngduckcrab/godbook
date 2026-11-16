---
title: 사다리꼴과 기약 사다리꼴
title_en: Echelon Form and Reduced Echelon Form
aliases: [사다리꼴, 행 사다리꼴, 사다리꼴 행렬, 기약 사다리꼴, 기약 행 사다리꼴, 피벗, 피벗 열, 자유 열, 피벗의 개수, 영행, echelon form, row echelon form, reduced echelon form, reduced row echelon form, pivot, pivot column, free column]
kind: definition
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: 영이 아닌 행이 위에 모이고 각 행의 처음 0 이 아닌 성분(피벗)이 아래 행으로 갈수록 오른쪽에 놓인 행렬을 사다리꼴, 여기에 피벗 열이 표준기저 벡터인 것을 기약 사다리꼴이라 한다. 피벗의 위치는 행렬로 하나로 정해지고, 피벗 아래는 0 이며, 사다리꼴의 모든 열은 처음 r 개의 표준기저 벡터의 생성에 속하고, 정사각 기약 사다리꼴의 피벗이 n 개이면 단위행렬이며, 기약 사다리꼴의 계수는 피벗의 개수이다.
requires: [function, finite-set, prime-number, even-and-odd, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, sequences-in-a-subspace, standard-basis, matrix, rank-of-a-matrix, elementary-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 2절 2.3 Echelon form, pp.44–45; 2.2 Row reduction 의 pivot, p.42; 3절 Analyzing the pivots, p.48; 7절 7.1, p.60"
    checked: original
    note: "출처는 2.3절(p.44)에서 행렬이 사다리꼴(echelon form)인 것을 두 조건, 곧 영행(모든 성분이 0 인 행)은 있다면 모두 0 이 아닌 성분들보다 아래에 있다는 것과, 0 이 아닌 행의 가장 왼쪽의 0 이 아닌 성분(leading entry)이 앞 행의 그것보다 오른쪽에 있다는 것으로 정의하고, 이 성분을 피벗(pivot)이라 부른다. 기약 사다리꼴(reduced echelon form)은 여기에 피벗이 모두 1 이고 피벗 위의 성분이 모두 0 이라는 두 조건을 더한 것이며, 출처는 피벗 아래의 성분도 사다리꼴이기 때문에 0 이라고 덧붙인다(p.45). 이 항목은 '아래에', '오른쪽에', '앞 행' 같은 위치의 말을 정수의 순서로 바꾸어, 영이 아닌 행의 개수 r 과 피벗의 열 번호 ℓ_1, …, ℓ_r 을 이름 붙여 정의한다. 그리고 r 과 ℓ 이 행렬로 하나로 정해진다는 것(1)을 증명한 뒤 피벗을 정의한다. 기약 사다리꼴의 두 조건은 '피벗 열이 표준기저 벡터 e_j 이다'라는 (라) 하나로 적는다. 출처는 3절(p.48)에서 사다리꼴의 어느 행과 어느 열에도 피벗이 하나보다 많지 않다고 증명 없이 적는다. 열에 관한 부분은 이 항목의 (2)(ℓ 이 단사)이고 행에 관한 부분은 정의 자체이다. '피벗 열'(pivot column)은 출처 7.1절(p.60)에 행 연산 뒤 피벗이 오는 열이라는 뜻으로 나오고, 출처는 피벗이 없는 열에 대응하는 변수를 자유변수(free variables)라 부른다(p.45). '자유 열'이라는 말은 출처에 나오지 않는다. 출처에 진술이 있는 것은 다음과 같다. 피벗 아래 성분이 0 이라는 것(p.45), 피벗의 개수가 행의 개수와 열의 개수를 넘지 않는다는 것(3.1절 Proposition 3.2, 3.5 의 증명, pp.49–50), 가역행렬의 사다리꼴에는 모든 행과 열에 피벗이 있으므로 기약 사다리꼴이 I 라는 것(4절 p.52. 이 항목의 (5)가 그 바탕이다), 기약 사다리꼴의 피벗 열이 그 열공간의 기저라는 것(7.2.2, p.62. 이 항목의 (6)). 출처는 이것들을 따로 증명하지 않는다. 열이 span(e_1, …, e_r) 에 속한다는 (3)과 처음 k 개의 열에 관한 (4)는 출처에 이 꼴로 진술되어 있지 않다(2장 본문과 연습문제를 읽은 범위). (1)–(6)의 증명은 이 사이트의 것이다. 출처의 스칼라는 실수 또는 복소수이고 이 항목은 실수만 쓴다. 예시는 출처 p.45 의 기약 사다리꼴 예(3 × 6, 피벗이 1, 3, 5 번째 열)와 행렬과 피벗의 위치를 다르게 새로 골랐다. 반례와 확인 질문은 새로 만들었다(출처 연습문제 3.9 는 기약 사다리꼴의 유일성을 묻는데 이 항목은 그것을 다루지 않는다)."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $j \in \{1, \dots, m\}$일 때 $A$의 $j$번째 행이 **영행**(zero row)인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $a_{j,k} = 0$일 때이다. 정수 $r \ge 0$에 대하여 **길이 $r$인 정수의 열** $\ell_1, \dots, \ell_r$은 함수 $\ell : \{1, \dots, r\} \to \mathbb{Z}$이다($\ell_j = \ell(j)$, $\{1, \dots, r\}$은 [[finite-set|유한집합]] 항목의 것이고, $r = 0$이면 빈 함수이다).

$A$가 **사다리꼴**(echelon form)인 것은 정확히 $0 \le r \le m$인 정수 $r$과 길이 $r$인 정수의 열 $\ell_1, \dots, \ell_r$이 있어 다음 세 조건이 모두 성립할 때이다.

- (가) $1 \le j \le r$이면 $1 \le \ell_j \le n$이고 $a_{j,\ell_j} \ne 0$이며, $k < \ell_j$인 모든 $k \in \{1, \dots, n\}$에서 $a_{j,k} = 0$이다.
- (나) $1 \le j < r$이면 $\ell_j < \ell_{j+1}$이다.
- (다) $r < j \le m$이면 $A$의 $j$번째 행은 영행이다.

다음이 성립한다. 아래에서 $A$는 사다리꼴이고 $r$, $\ell$은 위 세 조건을 만족하는 것이다.

1. (유일성) $r'$과 $\ell'_1, \dots, \ell'_{r'}$도 위 세 조건을 만족하면 $r' = r$이고 모든 $j \in \{1, \dots, r\}$에서 $\ell'_j = \ell_j$이다. 또 $1 \le j \le r$이면 $A$의 $j$번째 행은 영행이 아니고, $\ell_j$는 집합 $\{k \in \{1, \dots, n\} : a_{j,k} \ne 0\}$의 [[well-ordering-principle|최소 원소]]이다.

(1)에 의해 $r$과 $\ell$은 $A$로 정해지므로 다음과 같이 부른다. $r$을 $A$의 **피벗의 개수**라 한다. $1 \le j \le r$일 때 $(j, \ell_j)$ 성분 $a_{j,\ell_j}$를 $A$의 $j$번째 **피벗**(pivot)이라 하고, $\ell_j$를 **피벗 열의 번호**라 하고 $\ell_j$번째 열을 **피벗 열**(pivot column)이라 한다. 모든 $j \in \{1, \dots, r\}$에서 $k \ne \ell_j$인 $k \in \{1, \dots, n\}$을 **자유 열의 번호**라 하고 $k$번째 열을 **자유 열**(free column)이라 한다. 피벗 열인지 자유 열인지는 열의 번호에 대한 말이다(같은 벡터가 두 번호의 열일 수 있다). 사다리꼴 $A$가 **기약 사다리꼴**(reduced echelon form)인 것은 정확히 다음도 성립할 때이다.

- (라) $1 \le j \le r$이면 $A$의 $\ell_j$번째 열 $\mathbf{a}_{\ell_j}$는 [[standard-basis|표준기저]]의 $e_j \in \mathbb{R}^m$이다. 곧 $j$번째 피벗은 $1$이고, 피벗 열의 나머지 성분은 모두 $0$이다.

2. (피벗의 위치) $1 \le j < i \le r$이면 $\ell_j < \ell_i$이다. 따라서 $i$, $j \in \{1, \dots, r\}$이고 $i \ne j$이면 $\ell_i \ne \ell_j$이다. $1 \le j \le r$이면 $j \le \ell_j$이고, 따라서 $r \le n$이다. 또 $1 \le j \le r$이고 $j < i \le m$이면 $a_{i,\ell_j} = 0$이다. 곧 피벗 아래의 성분은 $0$이다.
3. (열의 생성) $A$의 모든 열은 $\mathbb{R}^m$에서 $\operatorname{span}(e_1, \dots, e_r)$에 속한다([[linear-combination-and-span|생성]]). $r = 0$이면 $A$는 영행렬이다.
4. (처음 $k$개의 열) $1 \le k \le n$이고 $A'$이 $A$의 처음 $k$개의 열 $\mathbf{a}_1, \dots, \mathbf{a}_k$로 된 $m \times k$ 행렬이면 $A'$은 사다리꼴이고, 그 피벗의 자리는 $\ell_j \le k$인 $A$의 피벗의 자리 $(j, \ell_j)$들이다. 곧 $\ell_j \le k$인 $j \in \{1, \dots, r\}$이 없으면 $A'$의 피벗의 개수는 $0$이고, 있으면 그런 $j$ 가운데 가장 큰 것을 $r'$이라 할 때 $A'$의 피벗의 개수는 $r'$이고 그 열 번호는 $\ell_1, \dots, \ell_{r'}$이다. $A$가 기약 사다리꼴이면 $A'$도 기약 사다리꼴이다.
5. (정사각인 경우) $A$가 $n \times n$ 기약 사다리꼴이고 피벗의 개수가 $n$이면 $A = I_n$이다.
6. (계수) $A$가 기약 사다리꼴이면 $A$의 열공간은 $\operatorname{Col} A = \operatorname{span}(e_1, \dots, e_r)$이고, 벡터의 열 $e_1, \dots, e_r$은 그 기저이며, $\operatorname{rank} A = r$이다([[rank-of-a-matrix|행렬의 계수]]). $r = 0$인 경우도 포함한다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. For $j \in \{1, \dots, m\}$, the $j$-th row of $A$ is a **zero row** exactly when $a_{j,k} = 0$ for every $k \in \{1, \dots, n\}$. For an integer $r \ge 0$, a **sequence of integers of length $r$** $\ell_1, \dots, \ell_r$ is a function $\ell : \{1, \dots, r\} \to \mathbb{Z}$ (with $\ell_j = \ell(j)$, $\{1, \dots, r\}$ as in the entry on finite sets, and the empty function when $r = 0$).

$A$ is in **echelon form** exactly when there are an integer $r$ with $0 \le r \le m$ and a sequence of integers $\ell_1, \dots, \ell_r$ of length $r$ such that all three of the following hold.

- (a) If $1 \le j \le r$, then $1 \le \ell_j \le n$, $a_{j,\ell_j} \ne 0$, and $a_{j,k} = 0$ for every $k \in \{1, \dots, n\}$ with $k < \ell_j$.
- (b) If $1 \le j < r$, then $\ell_j < \ell_{j+1}$.
- (c) If $r < j \le m$, then the $j$-th row of $A$ is a zero row.

The following hold. Below, $A$ is in echelon form and $r$, $\ell$ satisfy the three conditions above.

1. (Uniqueness) If $r'$ and $\ell'_1, \dots, \ell'_{r'}$ also satisfy the three conditions, then $r' = r$ and $\ell'_j = \ell_j$ for every $j \in \{1, \dots, r\}$. Moreover, if $1 \le j \le r$, then the $j$-th row of $A$ is not a zero row, and $\ell_j$ is the least element of the set $\{k \in \{1, \dots, n\} : a_{j,k} \ne 0\}$.

By (1), $r$ and $\ell$ are determined by $A$, so we use the following names. $r$ is called the **number of pivots** of $A$. For $1 \le j \le r$, the $(j, \ell_j)$ entry $a_{j,\ell_j}$ is called the $j$-th **pivot** of $A$, $\ell_j$ is called a **pivot column index** and the $\ell_j$-th column a **pivot column**. A $k \in \{1, \dots, n\}$ with $k \ne \ell_j$ for every $j \in \{1, \dots, r\}$ is called a **free column index** and the $k$-th column a **free column**. Being a pivot column or a free column is a property of the column index (the same vector may be the column at two indices). An $A$ in echelon form is in **reduced echelon form** exactly when the following also holds.

- (d) If $1 \le j \le r$, then the $\ell_j$-th column $\mathbf{a}_{\ell_j}$ of $A$ is the standard basis vector $e_j \in \mathbb{R}^m$. That is, the $j$-th pivot is $1$ and all other entries of the pivot column are $0$.

2. (Positions of pivots) If $1 \le j < i \le r$, then $\ell_j < \ell_i$. Hence $\ell_i \ne \ell_j$ if $i$, $j \in \{1, \dots, r\}$ and $i \ne j$. If $1 \le j \le r$, then $j \le \ell_j$, and hence $r \le n$. Moreover, if $1 \le j \le r$ and $j < i \le m$, then $a_{i,\ell_j} = 0$. That is, the entries below a pivot are $0$.
3. (Span of the columns) Every column of $A$ lies in $\operatorname{span}(e_1, \dots, e_r)$ in $\mathbb{R}^m$. If $r = 0$, then $A$ is the zero matrix.
4. (First $k$ columns) If $1 \le k \le n$ and $A'$ is the $m \times k$ matrix formed by the first $k$ columns $\mathbf{a}_1, \dots, \mathbf{a}_k$ of $A$, then $A'$ is in echelon form, and its pivot positions are the positions $(j, \ell_j)$ of the pivots of $A$ with $\ell_j \le k$. That is, if there is no $j \in \{1, \dots, r\}$ with $\ell_j \le k$, then the number of pivots of $A'$ is $0$; otherwise, letting $r'$ be the largest such $j$, the number of pivots of $A'$ is $r'$ and their column indices are $\ell_1, \dots, \ell_{r'}$. If $A$ is in reduced echelon form, so is $A'$.
5. (Square case) If $A$ is an $n \times n$ matrix in reduced echelon form with $n$ pivots, then $A = I_n$.
6. (Rank) If $A$ is in reduced echelon form, then its column space is $\operatorname{Col} A = \operatorname{span}(e_1, \dots, e_r)$, the sequence of vectors $e_1, \dots, e_r$ is a basis of it, and $\operatorname{rank} A = r$. The case $r = 0$ is included.
:::

## 직관

사다리꼴은 이름 그대로 계단 모양입니다. 영이 아닌 행이 위에서부터 $r$개 있고, 각 행은 처음 몇 자리가 $0$이다가 피벗에서 처음으로 $0$이 아닌 수가 나옵니다. 아래 행으로 내려갈수록 피벗이 오른쪽으로 물러나므로 피벗들을 이으면 왼쪽 위에서 오른쪽 아래로 내려가는 계단이 됩니다. 계단 아래쪽은 모두 $0$입니다(이 항목의 (2)의 마지막 문장). 계단의 비유가 맞는 곳은 한 칸 내려갈 때 적어도 한 칸 오른쪽으로 간다는 점이고, 맞지 않는 곳은 한 번에 여러 칸 오른쪽으로 건너뛸 수 있다는 점입니다. 피벗이 놓이지 않은 열이 자유 열입니다. 건너뛴 열뿐 아니라 첫 피벗보다 왼쪽이나 마지막 피벗보다 오른쪽의 열도 자유 열입니다.

정의에서 피벗의 위치를 $\ell_1, \dots, \ell_r$로 이름 붙여 두면 "앞 행보다 오른쪽"이 $\ell_j < \ell_{j+1}$이라는 정수의 부등식이 되고, 사다리꼴에 관한 사실들이 정수의 순서에 관한 사실로 바뀝니다. 예를 들어 $j \le \ell_j$는 "계단이 $j$칸 내려오는 동안 적어도 $j$칸 오른쪽으로 왔다"는 것이고, 그래서 피벗의 개수는 행의 개수도 열의 개수도 넘지 못합니다.

사다리꼴이면 영이 아닌 행이 $r$개뿐이므로 모든 열이 $e_1, \dots, e_r$의 일차결합이고, 그 일차결합의 계수는 열의 처음 $r$개 성분입니다(이 항목의 (3)과 그 증명). 기약 사다리꼴은 여기에 더해 피벗 열을 모두 표준기저 벡터로 다듬은 것입니다. 정사각 기약 사다리꼴의 피벗이 $n$개이면 이 항목의 (5)의 증명대로 $\ell_j = j$가 되어 모든 열이 피벗 열이고, 그래서 단위행렬이 됩니다.

## 성질의 증명

:::proof
정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1), [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z8), (L1)–(L3), 정수끼리의 합과 차가 정수라는 것([[even-and-odd]]에서 받아들임)을 쓴다. 정수 $a$, $b$에 대하여 "$a \le b$가 아니면 $a > b$"는 (Z5)이다.

**(1)의 증명.** $1 \le j \le r$이면 (가)에 의해 $a_{j,\ell_j} \ne 0$이므로 $j$번째 행은 영행이 아니다. $r' < r$이라 하자. $0 \le r'$이므로 (Z6)에 의해 $0 < r$이고 (Z1)에 의해 $1 \le r$이며, $r' < r \le m$이다. $(r', \ell')$에 대한 (다)에 의해 $r$번째 행은 영행이다. 한편 $(r, \ell)$에 대한 (가)에 의해 $a_{r,\ell_r} \ne 0$이므로 $r$번째 행은 영행이 아니다. 이것은 모순이다. $r < r'$이라 하자. $0 \le r$이므로 (Z6)에 의해 $0 < r'$이고 (Z1)에 의해 $1 \le r'$이며, $r < r' \le m$이다. 따라서 $(r, \ell)$에 대한 (다)에 의해 $r'$번째 행은 영행인데, $(r', \ell')$에 대한 (가)에 의해 $a_{r',\ell'_{r'}} \ne 0$이므로 모순이다. (Z5)에 의해 $r' = r$이다.

$j \in \{1, \dots, r\}$를 잡는다. $\ell_j < \ell'_j$이라 하자. $(r, \ell)$에 대한 (가)에 의해 $\ell_j \in \{1, \dots, n\}$이므로 $(r', \ell')$에 대한 (가)에 의해 $a_{j,\ell_j} = 0$인데, 이것은 $(r, \ell)$에 대한 (가)의 $a_{j,\ell_j} \ne 0$에 어긋난다. $\ell'_j < \ell_j$이라 하자. $\ell'_j \in \{1, \dots, n\}$이므로 $(r, \ell)$에 대한 (가)에 의해 $a_{j,\ell'_j} = 0$인데, 이것은 $(r', \ell')$에 대한 (가)의 $a_{j,\ell'_j} \ne 0$에 어긋난다. (Z5)에 의해 $\ell'_j = \ell_j$이다. 두 정수의 열은 정의역이 같은 $\{1, \dots, r\}$이고 모든 자리에서 값이 같으므로 [[function|함수]]의 같음에 의해 같은 열이다.

최소 원소: $S_j = \{k \in \{1, \dots, n\} : a_{j,k} \ne 0\}$이라 하자. (가)에 의해 $\ell_j \in S_j$이다. $k \in S_j$이면 $k < \ell_j$일 수 없다. $k < \ell_j$이면 (가)에 의해 $a_{j,k} = 0$이기 때문이다. 따라서 (Z5)에 의해 $\ell_j \le k$이고, 정렬 원리 항목의 정의에 의해 $\ell_j$는 $S_j$의 최소 원소이다.

**(2)의 증명.** 첫째 문장: $j$를 $1 \le j < r$인 정수로 고정하고, $t \ge j + 1$인 정수마다 명제 $S_t$를 "$t \le r$이면 $\ell_j < \ell_t$"로 두어 시작점이 $j + 1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 기초 단계: $j + 1 \le r$이면 $j < r$이므로((L3), (Z6)) (나)에 의해 $\ell_j < \ell_{j+1}$이다. 귀납 단계: $t \ge j + 1$이고 $S_t$가 참이라 하자. $t + 1 \le r$이면 (L3)과 (Z6)에 의해 $t < r$이고, 따라서 $t \le r$이므로 귀납 가정에 의해 $\ell_j < \ell_t$이다. $t \ge j + 1 \ge 2$이므로 $1 \le t < r$이고 (나)에 의해 $\ell_t < \ell_{t+1}$이다. (Z6)에 의해 $\ell_j < \ell_{t+1}$이다. 이제 $1 \le j < i \le r$이면 $j < r$이고 (Z1)에 의해 $i \ge j + 1$이므로 $S_i$에 의해 $\ell_j < \ell_i$이다. $i$, $j \in \{1, \dots, r\}$이고 $i \ne j$이면 (Z5)에 의해 $j < i$이거나 $i < j$이고, 각각 $\ell_j < \ell_i$, $\ell_i < \ell_j$이므로 (Z5)에 의해 $\ell_i \ne \ell_j$이다.

둘째 문장: $j \ge 1$인 정수마다 명제 $S'_j$를 "$j \le r$이면 $j \le \ell_j$"로 두어 시작점이 $1$인 귀납법으로 보인다. 기초 단계: $1 \le r$이면 (가)에 의해 $1 \le \ell_1$이다. 귀납 단계: $S'_j$가 참이고 $j + 1 \le r$이라 하자. 그러면 $j < r$이고 $j \le r$이므로 귀납 가정에 의해 $j \le \ell_j$이고 (나)에 의해 $\ell_j < \ell_{j+1}$이다. (Z6)에 의해 $j < \ell_{j+1}$이고 (Z1)에 의해 $j + 1 \le \ell_{j+1}$이다. $r \le n$: $r = 0$이면 $n$은 자연수이므로 (Z1)과 (Z8)에 의해 $0 < 1 \le n$이고 $r \le n$이다. $r \ne 0$이면 $r \ge 0$이므로 $r \ge 1$((Z5), (Z1))이고, 방금 보인 것과 (가)에 의해 $r \le \ell_r \le n$이므로 (Z6)에 의해 $r \le n$이다.

셋째 문장: $1 \le j \le r$이고 $j < i \le m$이라 하자. (Z5)에 의해 $i \le r$이거나 $i > r$이다. $i \le r$이면 첫째 문장에 의해 $\ell_j < \ell_i$이고 $\ell_j \in \{1, \dots, n\}$이므로 $i$번째 행에 대한 (가)에 의해 $a_{i,\ell_j} = 0$이다. $i > r$이면 (다)에 의해 $i$번째 행은 영행이므로 $a_{i,\ell_j} = 0$이다.

**(3)의 증명.** $r \le m$이므로 $j \le r$이면 $e_j \in \mathbb{R}^m$이 정해진다. $k \in \{1, \dots, n\}$을 잡고 $x = \mathbf{a}_k$라 하자. 행렬의 열의 정의에 의해 $x$의 $i$번째 값은 $x_i = a_{i,k}$이고, (다)에 의해 $r < i \le m$이면 $x_i = 0$이다. $x$의 처음 $r$개의 값 $x_1, \dots, x_r$을 계수로 하는 일차결합 $y = x_1 e_1 + \cdots + x_r e_r$이 $x$와 같음을 보인다. $i \in \{1, \dots, m\}$을 잡는다. [[standard-basis|표준기저]]의 (1)과 [[real-function-space|실숫값 함수의 공간]]의 스칼라배의 정의에 의해 $y$의 $i$번째 값은 $j$번째 항이 $x_j e_j(i)$인 길이 $r$인 실수의 열의 합이다. 여기서 $e_j(i)$는 $j = i$이면 $1$이고 아니면 $0$이다.

- $i \le r$이면 $j \ne i$인 항은 $x_j \cdot 0 = 0$이고([[real-number-arithmetic|(K9)]]), $i$번째 항은 $x_i \cdot 1 = x_i$이다((K4)). $r \ge i \ge 1$이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)을 길이 $r$인 열에 쓰면 합은 $x_i$이다.
- $i > r$이면 모든 $j \le r$에서 $j \ne i$이므로 모든 항이 $0$이고, 벡터의 유한 합의 (H5)에 의해 합은 $0$이다($r = 0$이면 빈 열의 합으로 $0$이다). 한편 $x_i = 0$이다.

$x$와 $y$는 모든 자리에서 값이 같으므로 같다. 따라서 $x$는 $e_1, \dots, e_r$의 일차결합이고 $\operatorname{span}(e_1, \dots, e_r)$에 속한다. $r = 0$이면 (다)에 의해 모든 $j \in \{1, \dots, m\}$에서 $j$번째 행이 영행이므로 $A$의 모든 성분이 $0$이고, [[matrix|행렬]]의 (1)과 (2)에 의해 $A$는 영행렬이다.

**(4)의 증명.** [[matrix|행렬]]의 (4)에 의해 $A'$이 있고 그 $(j, q)$ 성분은 $\mathbf{a}_q$의 $j$번째 값 $a_{j,q}$이다($q \le k$). $T = \{j \in \{1, \dots, r\} : \ell_j \le k\}$라 하자. $T = \emptyset$이면 $r' = 0$으로 둔다. $T \ne \emptyset$이면 $T$는 $r$로 위로 유계인 정수의 집합이므로 정렬 원리 항목의 4에 의해 최대 원소가 있고, 이것을 $r'$이라 한다. 어느 경우든 $0 \le r' \le r \le m$이다. 먼저 $j \in \{1, \dots, r\}$에 대하여

$$j \le r' \text{인 것은 정확히 } \ell_j \le k \text{일 때이다} \qquad (♣)$$

를 보인다. $\ell_j \le k$이면 $j \in T$이므로 $r'$은 $T$의 최대 원소이고 $j \le r'$이다. 거꾸로 $j \le r'$이면 $1 \le j$이므로 (Z6)에 의해 $r' \ge 1$이고, $T = \emptyset$이면 $r' = 0$이므로 $T \ne \emptyset$이며 $r' \in T$, 곧 $\ell_{r'} \le k$이다. $j = r'$이면 $\ell_j \le k$이고, $j < r'$이면 이 항목의 (2)에 의해 $\ell_j < \ell_{r'}$이므로 (Z6)에 의해 $\ell_j \le k$이다.

$A'$에 대하여 $r'$과 $\ell$의 처음 $r'$개 $\ell_1, \dots, \ell_{r'}$이 세 조건을 만족함을 확인한다. (가): $1 \le j \le r'$이면 $j \le r$이고 (♣)에 의해 $\ell_j \le k$이며 $1 \le \ell_j$이므로 $\ell_j \in \{1, \dots, k\}$이다. $A'$의 $(j, \ell_j)$ 성분은 $a_{j,\ell_j} \ne 0$이다. $q \in \{1, \dots, k\}$이고 $q < \ell_j$이면 $q \le k \le n$이므로 $A$에 대한 (가)에 의해 $A'$의 $(j, q)$ 성분 $a_{j,q}$는 $0$이다. (나): $1 \le j < r'$이면 $j < r$이므로 $A$에 대한 (나)에 의해 $\ell_j < \ell_{j+1}$이다. (다): $r' < j \le m$이라 하자. $j > r$이면 $A$의 $j$번째 행이 영행이므로 모든 $q \le k$에서 $a_{j,q} = 0$이다. $j \le r$이면 (♣)에 의해 $\ell_j \le k$가 아니므로 $k < \ell_j$이고, $q \le k$이면 $q < \ell_j$이므로 $A$에 대한 (가)에 의해 $a_{j,q} = 0$이다. 어느 경우든 $A'$의 $j$번째 행은 영행이다. 따라서 $A'$은 사다리꼴이고, 이 항목의 (1)에 의해 그 피벗의 개수는 $r'$, 피벗의 열 번호는 $\ell_1, \dots, \ell_{r'}$이다. (♣)에 의해 이 피벗들은 정확히 $\ell_j \le k$인 $A$의 피벗들이다.

$A$가 기약 사다리꼴이면, $1 \le j \le r'$일 때 $\ell_j \le k$이므로 $A'$의 $\ell_j$번째 열은 $\mathbf{a}_{\ell_j}$이고 $A$에 대한 (라)에 의해 $e_j$이다. 따라서 $A'$은 (라)도 만족한다.

**(5)의 증명.** $m = n$이고 $r = n$이다. 모든 $j \in \{1, \dots, n\}$에서 $\ell_j = j$임을 보인다. 이 항목의 (2)에 의해 $j \le \ell_j$이다. 거꾸로를 위해 $t \ge 0$인 정수마다 명제 $S_t$를 "$t \le n - 1$이면 $\ell_{n-t} \le n - t$"로 두어 시작점이 $0$인 귀납법으로 보인다. 기초 단계: $n \ge 1$이므로 (가)에 의해 $\ell_n \le n$이다. 귀납 단계: $S_t$가 참이고 $t + 1 \le n - 1$이라 하자. (L3)과 (Z6)에 의해 $t \le n - 1$이므로 귀납 가정에 의해 $\ell_{n-t} \le n - t$이다. $j = n - (t + 1)$로 두면 $j$는 정수이고 (Z7)에 의해 $1 \le j$이며 $j + 1 = n - t \le n$이므로 $j < n = r$이다. (나)에 의해 $\ell_j < \ell_{j+1} = \ell_{n-t} \le n - t = j + 1$이고, (Z6)과 (Z1)에 의해 $\ell_j + 1 \le j + 1$, (Z7)에 의해 $\ell_j \le j$이다. 곧 $S_{t+1}$이 참이다. 이제 $j \in \{1, \dots, n\}$이면 $t = n - j$는 (Z7)에 의해 $0 \le t \le n - 1$이므로 $\ell_j = \ell_{n-t} \le n - t = j$이다. (L2)에 의해 $\ell_j = j$이다.

따라서 (라)에 의해 모든 $j$에서 $A$의 $j$번째 열은 $e_j$이다. [[matrix|행렬]]의 (6)에 의해 $I_n$의 $j$번째 열도 $e_j$이므로, 행렬의 (3)에 의해 $A = I_n$이다.

**(6)의 증명.** $A$가 기약 사다리꼴이라 하고 $W = \operatorname{span}(e_1, \dots, e_r)$이라 하자($r \le m$이므로 $e_j \in \mathbb{R}^m$이 정해진다). [[linear-combination-and-span|생성]]의 (N1)에 의해 $W$와 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$은 $\mathbb{R}^m$의 부분공간이다. 이 항목의 (3)에 의해 $A$의 모든 열은 $W$에 속하므로 (N3)에 의해 $\operatorname{Col} A \subseteq W$이다. 거꾸로 $1 \le j \le r$이면 (라)에 의해 $e_j = \mathbf{a}_{\ell_j}$이고 (N2)에 의해 이것은 $\operatorname{Col} A$에 속하므로, (N3)에 의해 $W \subseteq \operatorname{Col} A$이다. 따라서 $\operatorname{Col} A = W$이다.

일차독립: $\alpha_1, \dots, \alpha_r$이 실수의 열이고 $y = \alpha_1 e_1 + \cdots + \alpha_r e_r$이 영벡터라 하자. $i \in \{1, \dots, r\}$이라 하자. [[standard-basis|표준기저]]의 (1)과 스칼라배의 정의에 의해 $y$의 $i$번째 값은 $j$번째 항이 $\alpha_j e_j(i)$인 길이 $r$인 실수의 열의 합이다. $j \ne i$인 항은 $\alpha_j \cdot 0 = 0$이고((K9)), $i$번째 항은 $\alpha_i \cdot 1 = \alpha_i$이므로((K4)), 벡터의 유한 합의 (H7)에 의해 $y$의 $i$번째 값은 $\alpha_i$이다. $y$는 영벡터이므로 그 값은 $0$이고, 따라서 모든 $i$에서 $\alpha_i = 0$이다. 곧 $e_1, \dots, e_r$은 [[linear-independence|일차독립]]이다($r = 0$이면 빈 열이므로 일차독립이다).

$e_1, \dots, e_r$의 모든 항은 $\operatorname{Col} A$에 속하고, $\mathbb{R}^m$에서 일차독립이며, 생성이 $W = \operatorname{Col} A$이므로 [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 이 열은 [[subspace|(P1)]]의 벡터공간 $\operatorname{Col} A$의 기저이다. 그 길이가 $r$이므로 [[rank-of-a-matrix|행렬의 계수]]의 정의에 의해 $\operatorname{rank} A = r$이다. $r = 0$이면 빈 열의 생성은 $\{0\}$이므로 $\operatorname{Col} A = \{0\}$이고 $\operatorname{rank} A = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[영행렬과 단위행렬]
$m \times n$ 영행렬은 $r = 0$(빈 열 $\ell$)으로 기약 사다리꼴입니다. $1 \le j \le 0$인 $j$가 없으므로 (가), (나), (라)는 저절로 성립하고, (다)는 모든 행이 영행이라는 것이므로 성립합니다. 피벗의 개수는 $0$이고 모든 열이 자유 열입니다.

$I_n$은 $r = n$, $\ell_j = j$로 기약 사다리꼴입니다. (가): $(j, j)$ 성분은 $1$이고 [[real-number-arithmetic|(K4)]]에 의해 $1 \ne 0$이며, $k < j$이면 $k \ne j$이므로 $(j, k)$ 성분은 $0$입니다. (나): $j < j + 1$입니다. (다): $n < j \le n$인 $j$는 없습니다. (라): [[matrix|행렬]]의 (6)에 의해 $I_n$의 $j$번째 열은 $e_j$입니다.
:::

:::example[3 × 4 기약 사다리꼴과 사다리꼴]
$$U = \begin{pmatrix} 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
은 $r = 2$, $\ell_1 = 2$, $\ell_2 = 3$으로 기약 사다리꼴입니다. 첫째 행은 $u_{1,1} = 0$, $u_{1,2} = 1 \ne 0$이고, 둘째 행은 $u_{2,1} = u_{2,2} = 0$, $u_{2,3} = 1 \ne 0$이며, $2 < 3$이고 셋째 행은 영행입니다. 둘째 열은 $(1, 0, 0) = e_1$, 셋째 열은 $(0, 1, 0) = e_2$입니다. 피벗 열은 둘째와 셋째 열이고, 자유 열은 첫째와 넷째 열입니다. 이 항목의 (3)대로 넷째 열은 $(-2, 3, 0) = (-2)e_1 + 3e_2$이고 첫째 열은 $0e_1 + 0e_2$입니다. 이 항목의 (4)대로 처음 두 열로 된 $\begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}$은 $\ell_1 = 2 \le 2 < 3 = \ell_2$이므로 피벗이 하나($r' = 1$)인 기약 사다리꼴입니다.

$V = \begin{pmatrix} 2 & 1 & 5 \\ 0 & 0 & -1 \\ 0 & 0 & 0 \end{pmatrix}$은 $r = 2$, $\ell_1 = 1$, $\ell_2 = 3$으로 사다리꼴이지만 기약 사다리꼴은 아닙니다. 이 항목의 (1)에 의해 피벗의 위치는 이것뿐인데, 첫째 피벗 열 $(2, 0, 0)$은 첫째 값이 $2 \ne 1$이어서 $e_1$이 아니기 때문입니다.
:::

:::counterexample[피벗이 오른쪽으로 물러나지 않는 행렬]
$W = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$은 두 행 모두 영행이 아니지만 사다리꼴이 아닙니다. 사다리꼴이라 하고 $r$, $\ell$을 잡읍시다. $r \le 1$이면 (다)에 의해 둘째 행이 영행이어야 하는데 $w_{2,1} = 1 \ne 0$이므로, $r = 2$입니다. 이 항목의 (1)에 의해 $\ell_1$은 $\{k : w_{1,k} \ne 0\} = \{2\}$의 최소 원소 $2$이고, $\ell_2$는 $\{k : w_{2,k} \ne 0\} = \{1\}$의 최소 원소 $1$입니다. 그러면 (나)는 $2 < 1$을 요구하므로 성립하지 않습니다. 각 행에 피벗 후보가 있는 것만으로는 부족하고, 아래 행의 피벗이 오른쪽에 있어야 합니다. [[elementary-matrix|기본행렬]]의 (2)에 의해 $P_{1,2}W = I_2$이므로 두 행을 맞바꾸면 사다리꼴이 됩니다.
:::

## 확인 질문

:::check[$\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$은 사다리꼴인가?]
아닙니다. 사다리꼴이라 하고 $r$을 잡으면, 둘째 행은 $(2, 2)$ 성분이 $1 \ne 0$이어서 영행이 아니므로 (다)에 의해 $r \le 1$일 수 없고, $r \le 2$이므로 $r = 2$입니다. 그러면 (가)에 의해 첫째 행에 $0$이 아닌 성분 $a_{1,\ell_1}$이 있어야 하는데 첫째 행은 영행입니다. 영행은 영이 아닌 행보다 아래에 있어야 합니다.
:::

:::check[$2 \times 3$ 기약 사다리꼴의 피벗 열이 둘째와 셋째 열, 곧 $r = 2$, $\ell_1 = 2$, $\ell_2 = 3$이면 그 행렬은 무엇인가?]
$\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$뿐입니다. (라)에 의해 둘째 열은 $e_1 = (1, 0)$, 셋째 열은 $e_2 = (0, 1)$입니다. 첫째 열은, $1 < \ell_1$이므로 (가)에 의해 $(1, 1)$ 성분이 $0$이고 $1 < \ell_2$이므로 $(2, 1)$ 성분도 $0$입니다. 모든 성분이 정해졌으므로 [[matrix|행렬]]의 (2)에 의해 이런 행렬은 하나뿐입니다.
:::
