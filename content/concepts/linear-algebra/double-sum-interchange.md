---
title: 이중 합의 순서 바꾸기
title_en: Interchanging the Order of a Double Sum
aliases: [합의 순서 바꾸기, 이중 합, 행의 합과 열의 합, interchanging summation, double sum]
kind: lemma
field: linear-algebra
msc: ["15"]
level: undergrad
summary: m × n 행렬에서 행마다 성분을 더한 m 개의 수의 합과 열마다 성분을 더한 n 개의 수의 합은 같다. 합은 벡터의 유한 합의 재귀 정의로 정한 실수의 합이고, 행의 개수에 대한 귀납으로 증명한다.
requires: [function, finite-set, mathematical-induction, real-function-space, finite-sum-of-vectors, matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 5절, 5.5 Trace and matrix multiplication 의 Theorem 5.1 뒤 문단, p.23; 1장 5절 연습문제 5.6, p.24
    checked: original
    note: "출처는 1장 5.5(p.23)에서 Theorem 5.1(trace(AB) = trace(BA))의 증명을 연습문제 5.6(p.24)으로 돌리고, 증명하는 두 길 가운데 하나로 AB 와 BA 의 대각성분을 계산해 그 합을 비교하는 길을 들며, 이 길은 Σ 표기로 합을 다루는 데 익숙해야 한다고 적는다. 이 항목은 그 계산에 드는 이중 합의 순서 바꾸기를 따로 세운 보조정리이다. 출처는 이 사실을 번호 붙은 명제로 적지 않고(책 전체에서 'order of summation', 'double sum', 'interchang', 'change the order', 'Fubini', 'summation' 을 찾았다), 8장 4.2.2(p.234)의 미분형식의 좌표 변환처럼 Σ 두 개의 순서를 계산 안에서 말없이 바꾼다. 출처는 합을 Σ 로 쓰고, 이 사이트는 벡터의 유한 합의 재귀 정의를 ℝ 에 쓴 합으로 쓴다. 증명(행의 개수에 대한 귀납과 (H3))은 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이던 설명 문장 4건과 출처에 해석을 돌린 메모 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$m$, $n$이 자연수이고 $C$가 $m \times n$ [[matrix|행렬]]이라 하자. 아래의 합은 모두 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 실수의 합이다.

각 $j \in \{1, \dots, m\}$에 대하여, $k$번째 항이 $c_{j,k}$인 길이 $n$인 실수의 열의 합

$$
r_j = c_{j,1} + \cdots + c_{j,n}
$$

을 $C$의 $j$번째 **행의 성분의 합**이라 한다. 이 실수의 열은 $\{1, \dots, n\}$에서 $\mathbb{R}$로의 함수로서 $C$의 $j$번째 행과 같은 함수이다. 각 $k \in \{1, \dots, n\}$에 대하여, $j$번째 항이 $c_{j,k}$인 길이 $m$인 실수의 열의 합

$$
s_k = c_{1,k} + \cdots + c_{m,k}
$$

을 $C$의 $k$번째 **열의 성분의 합**이라 한다. 이 실수의 열은 함수로서 $C$의 $k$번째 열 $\mathbf{c}_k$와 같은 함수이다. 각 $j$에 실수 $r_j$가, 각 $k$에 실수 $s_k$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $j$번째 항이 $r_j$인 길이 $m$인 실수의 열과 $k$번째 항이 $s_k$인 길이 $n$인 실수의 열이 있다.

1. (순서 바꾸기) $r_1 + \cdots + r_m = s_1 + \cdots + s_n$이다. 곧 행마다 성분을 더한 $m$개의 수의 합과 열마다 성분을 더한 $n$개의 수의 합은 같다.
2. (성분이 식으로 주어진 꼴) 각 $j \in \{1, \dots, m\}$와 $k \in \{1, \dots, n\}$에 실수 $t_{j,k}$가 하나씩 정해져 있으면

   $$
   \begin{aligned} &(t_{1,1} + \cdots + t_{1,n}) + \cdots \\ &\qquad + (t_{m,1} + \cdots + t_{m,n}) \\ &= (t_{1,1} + \cdots + t_{m,1}) + \cdots \\ &\qquad + (t_{1,n} + \cdots + t_{m,n}) \end{aligned}
   $$

   이다. 왼쪽은 $j$번째 항이 $t_{j,1} + \cdots + t_{j,n}$($k$번째 항이 $t_{j,k}$인 길이 $n$인 실수의 열의 합)인 길이 $m$인 실수의 열의 합이고, 오른쪽은 $k$번째 항이 $t_{1,k} + \cdots + t_{m,k}$($j$번째 항이 $t_{j,k}$인 길이 $m$인 실수의 열의 합)인 길이 $n$인 실수의 열의 합이다.
:::

:::english
Let $m$, $n$ be natural numbers and let $C$ be an $m \times n$ matrix. All sums below are sums of real numbers, that is, finite sums of vectors applied to $\mathbb{R}$.

For each $j \in \{1, \dots, m\}$, the sum of the sequence of $n$ real numbers whose $k$-th term is $c_{j,k}$,

$$
r_j = c_{j,1} + \cdots + c_{j,n},
$$

is called the **sum of the entries of the $j$-th row** of $C$. As a function from $\{1, \dots, n\}$ to $\mathbb{R}$, this sequence is the same function as the $j$-th row of $C$. For each $k \in \{1, \dots, n\}$, the sum of the sequence of $m$ real numbers whose $j$-th term is $c_{j,k}$,

$$
s_k = c_{1,k} + \cdots + c_{m,k},
$$

is called the **sum of the entries of the $k$-th column** of $C$. As a function, this sequence is the same function as the $k$-th column $\mathbf{c}_k$ of $C$. Since one real number $r_j$ is assigned to each $j$ and one real number $s_k$ to each $k$, by (G) there are a sequence of $m$ real numbers whose $j$-th term is $r_j$ and a sequence of $n$ real numbers whose $k$-th term is $s_k$.

1. (Interchanging the order) $r_1 + \cdots + r_m = s_1 + \cdots + s_n$. That is, the sum of the $m$ numbers obtained by adding the entries row by row equals the sum of the $n$ numbers obtained by adding the entries column by column.
2. (Entries given by expressions) If a real number $t_{j,k}$ is assigned to each $j \in \{1, \dots, m\}$ and $k \in \{1, \dots, n\}$, then

   $$
   \begin{aligned} &(t_{1,1} + \cdots + t_{1,n}) + \cdots \\ &\qquad + (t_{m,1} + \cdots + t_{m,n}) \\ &= (t_{1,1} + \cdots + t_{m,1}) + \cdots \\ &\qquad + (t_{1,n} + \cdots + t_{m,n}). \end{aligned}
   $$

   The left side is the sum of the sequence of length $m$ whose $j$-th term is $t_{j,1} + \cdots + t_{j,n}$ (the sum of the sequence of length $n$ whose $k$-th term is $t_{j,k}$), and the right side is the sum of the sequence of length $n$ whose $k$-th term is $t_{1,k} + \cdots + t_{m,k}$ (the sum of the sequence of length $m$ whose $j$-th term is $t_{j,k}$).
:::

## 직관

가게 $m$곳의 달별 매출을 적은 표를 생각해 봅시다. 줄은 가게, 칸은 달입니다. 가게마다 한 해 매출을 더한 뒤 그것을 모두 더해도, 달마다 모든 가게의 매출을 더한 뒤 그것을 모두 더해도 전체 매출이 나옵니다. 표의 칸 하나하나가 성분 $c_{j,k}$, 가게별 합계가 $r_j$, 달별 합계가 $s_k$이고, 두 방법으로 구한 전체 매출이 같다는 것이 (1)입니다.

비유에서는 "어느 순서로 더해도 같다"를 당연하게 여기지만, 이 항목의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]에서 첫 항부터 차례로 더하는 재귀로 정의되었고, 그 항목은 항의 순서를 바꾸어도 합이 같다는 것(재배열)을 주장하지 않습니다. 그래서 (1)을 따로 증명합니다. 증명은 재배열을 쓰지 않습니다. 행을 하나 더할 때마다 열의 성분의 합 $n$개에 새 행의 성분이 하나씩 더해지는데, 두 실수의 열을 항별로 더한 열의 합은 두 합의 합이라는 성질 (H3)과 합의 재귀 정의로 이것을 정리합니다.

(2)는 성분이 $a_{j,k} b_{k,j}$처럼 다른 행렬의 성분으로 된 식으로 주어질 때 행렬에 이름을 붙이지 않고 (1)을 쓰기 위한 꼴입니다.

## 증명

:::idea
행의 개수 $m$에 대한 귀납법을 쓴다. 행을 하나 더 붙이면 왼쪽의 합에는 항이 하나 늘고, 오른쪽에서는 열의 성분의 합마다 항이 하나씩 는다. 이 둘을 (H3)이 맞춘다.
:::

:::hint
$m = 1$이면 열의 성분의 합 $s_k$는 길이 $1$인 열의 합이다. (H0)으로 $s_k$를 계산해 보라.
:::

:::hint
$(m + 1) \times n$ 행렬의 처음 $m$개 행으로 이루어진 $m \times n$ 행렬을 $C'$이라 하면, $C$의 $k$번째 열의 성분의 합은 $C'$의 $k$번째 열의 성분의 합에 $c_{m+1,k}$를 더한 것이다.
:::

:::proof
아래에서 (H0), (H3)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이고, 그 진술에 따라 실수의 합은 $V = \mathbb{R}$인 벡터의 유한 합이며 덧셈은 실수의 합이다. 같은 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 같은 열이고, 같은 열의 합은 같다. 이것을 "같은 열의 합"이라 부른다. 또 합의 재귀 정의에 의해, 길이 $p + 1$인 실수의 열의 합은 처음 $p$개로 이루어진 열의 합에 $(p+1)$번째 항을 더한 것이다. 이것을 "재귀 정의"라 부른다.

**(1)의 증명.** $n$을 고정하고, 자연수 $m$에 대한 명제 $S_m$을 "모든 $m \times n$ 행렬 $C$에서 $r_1 + \cdots + r_m = s_1 + \cdots + s_n$이다"로 두어 [[mathematical-induction|수학적 귀납법]]으로 보인다.

*기초 단계.* $m = 1$이라 하고 $C$를 $1 \times n$ 행렬이라 하자. 각 $k$에서 $s_k$는 첫째 항이 $c_{1,k}$인 길이 $1$인 열의 합이므로 (H0)에 의해 $s_k = c_{1,k}$이다. 따라서 열 $s_1, \dots, s_n$은 $k$번째 항이 $c_{1,k}$인 열이고, 이것은 $r_1$을 정한 열과 모든 자리의 항이 같다. 같은 열의 합에 의해 $s_1 + \cdots + s_n = c_{1,1} + \cdots + c_{1,n} = r_1$이다. 한편 왼쪽 $r_1 + \cdots + r_m$은 길이 $1$인 열 $r_1$의 합이므로 (H0)에 의해 $r_1$이다. 따라서 $S_1$이 참이다.

*귀납 단계.* 자연수 $m$에서 $S_m$이 참이라 가정하고, $C$를 $(m + 1) \times n$ 행렬이라 하자. $C$의 행의 성분의 합을 $r_1, \dots, r_{m+1}$, 열의 성분의 합을 $s_1, \dots, s_n$이라 한다. 각 $(j, k) \in \{1, \dots, m\} \times \{1, \dots, n\}$에 실수 $c_{j,k}$가 정해져 있으므로 [[real-function-space|(G)]]에 의해 $(j, k)$에서의 값이 $c_{j,k}$인 함수, 곧 [[matrix|행렬]]의 정의에 의해 $(j, k)$ 성분이 $c_{j,k}$인 $m \times n$ 행렬 $C'$이 있다. $C'$의 행의 성분의 합을 $r'_1, \dots, r'_m$, 열의 성분의 합을 $s'_1, \dots, s'_n$이라 한다.

- $j \in \{1, \dots, m\}$이면 $r'_j$와 $r_j$를 정한 두 열은 모두 $k$번째 항이 $c_{j,k}$인 길이 $n$인 열이므로, 같은 열의 합에 의해 $r'_j = r_j$이다.
- $k \in \{1, \dots, n\}$이면 $s_k$는 $j$번째 항이 $c_{j,k}$인 길이 $m + 1$인 열의 합이고, 이 열의 처음 $m$개는 $j$번째 항이 $c_{j,k}$ ($j \le m$)인 열, 곧 $s'_k$를 정한 열이다. 재귀 정의에 의해 $s_k = s'_k + c_{m+1,k}$이다.

왼쪽을 계산한다. 재귀 정의에 의해 $r_1 + \cdots + r_{m+1} = (r_1 + \cdots + r_m) + r_{m+1}$이다. 첫째 항목에 의해 열 $r_1, \dots, r_m$은 열 $r'_1, \dots, r'_m$과 모든 자리의 항이 같으므로, 같은 열의 합과 $C'$에 대한 귀납 가정 $S_m$에 의해

$$
\begin{aligned} r_1 + \cdots + r_m &= r'_1 + \cdots + r'_m \\ &= s'_1 + \cdots + s'_n \end{aligned}
$$

이다. 또 $r_{m+1} = c_{m+1,1} + \cdots + c_{m+1,n}$이다. 따라서

$$
\begin{aligned} &r_1 + \cdots + r_{m+1} \\ &= (s'_1 + \cdots + s'_n) \\ &\qquad + (c_{m+1,1} + \cdots + c_{m+1,n}) \end{aligned}
$$

이다. 길이가 $n$으로 같은 두 실수의 열 $s'_1, \dots, s'_n$과 $c_{m+1,1}, \dots, c_{m+1,n}$에 (H3)을 쓰면, 오른쪽은 $k$번째 항이 $s'_k + c_{m+1,k}$인 열의 합과 같다. 둘째 항목에 의해 이 항은 $s_k$이므로, 같은 열의 합에 의해 그 합은 $s_1 + \cdots + s_n$이다. 따라서 $r_1 + \cdots + r_{m+1} = s_1 + \cdots + s_n$이고, $C$는 임의의 $(m + 1) \times n$ 행렬이었으므로 $S_{m+1}$이 참이다.

수학적 귀납법에 의해 모든 자연수 $m$에서 $S_m$이 참이다. $n$은 임의의 자연수였으므로 (1)이 증명되었다.

**(2)의 증명.** 각 $(j, k) \in \{1, \dots, m\} \times \{1, \dots, n\}$에 실수 $t_{j,k}$가 정해져 있으므로 (G)에 의해 $(j, k)$에서의 값이 $t_{j,k}$인 함수, 곧 $(j, k)$ 성분이 $t_{j,k}$인 $m \times n$ 행렬이 있다. 이 행렬의 $j$번째 행의 성분의 합은 $t_{j,1} + \cdots + t_{j,n}$이고 $k$번째 열의 성분의 합은 $t_{1,k} + \cdots + t_{m,k}$이므로, 이 행렬에 (1)을 쓰면 (2)의 등식이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 3 행렬에서 두 방향으로 더하기]
$$
C = \begin{pmatrix} 1 & -2 & 4 \\ 3 & 0 & -5 \end{pmatrix}
$$

이라 합시다. 행의 성분의 합은 $r_1 = (1 + (-2)) + 4 = 3$, $r_2 = (3 + 0) + (-5) = -2$이고, $r_1 + r_2 = 1$입니다. 열의 성분의 합은 $s_1 = 1 + 3 = 4$, $s_2 = -2 + 0 = -2$, $s_3 = 4 + (-5) = -1$이고, $s_1 + s_2 + s_3 = (4 + (-2)) + (-1) = 1$입니다. 두 값이 (1)대로 같습니다. 행이 $2$개, 열이 $3$개이므로 왼쪽은 수 $2$개의 합, 오른쪽은 수 $3$개의 합입니다.
:::

:::counterexample[행의 성분의 합의 곱과 열의 성분의 합의 곱이 다른 2 × 2 의 예]
(1)은 행의 성분의 합들을 **더한** 것과 열의 성분의 합들을 **더한** 것이 같다는 것입니다. 바깥의 덧셈을 곱셈으로 바꾸면 같은 등식이 성립하지 않을 수 있습니다.

$$
C = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
$$

이면 $r_1 = 3$, $r_2 = 7$, $s_1 = 4$, $s_2 = 6$입니다. $r_1 r_2 = 21$이고 $s_1 s_2 = 24$이므로 둘은 다릅니다. 더한 값은 $r_1 + r_2 = 10 = s_1 + s_2$로 같습니다.
:::

## 확인 질문

:::check[$m \times n$ 행렬 $C$의 모든 행의 성분의 합이 $0$이면 열의 성분의 합 $s_1, \dots, s_n$을 모두 더한 값은 무엇인가? 각 $s_k$도 $0$이어야 하는가?]
(1)에 의해 $s_1 + \cdots + s_n = r_1 + \cdots + r_m$이고, 모든 $r_j$가 $0$이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 이 합은 $0$입니다. 그러나 각 $s_k$가 $0$일 필요는 없습니다. $C = \begin{pmatrix} 1 & -1 \\ 2 & -2 \end{pmatrix}$이면 $r_1 = 0$, $r_2 = 0$이지만 $s_1 = 3$, $s_2 = -3$입니다.
:::

:::check[$1 \times n$ 행렬 $C$에서 (1)의 양변은 각각 무엇인가?]
행이 하나이므로 왼쪽은 길이 $1$인 열 $r_1$의 합이고 (H0)에 의해 $r_1 = c_{1,1} + \cdots + c_{1,n}$입니다. 오른쪽에서 각 $s_k$는 길이 $1$인 열의 합이므로 (H0)에 의해 $s_k = c_{1,k}$이고, $s_1 + \cdots + s_n$도 $c_{1,1} + \cdots + c_{1,n}$입니다. 이것이 증명의 기초 단계입니다.
:::
