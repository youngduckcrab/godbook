---
title: 상극한으로 수렴하는 부분수열
title_en: A Subsequence Converging to the Limit Superior
aliases: [상극한과 부분수열, 하극한으로 수렴하는 부분수열, subsequence converging to the limit superior, subsequence converging to the limit inferior]
kind: theorem
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 유계인 수열에는 상극한으로 수렴하는 부분수열과 하극한으로 수렴하는 부분수열이 있다. 첨자열은 조건을 만족하는 가장 작은 번호를 재귀 정리로 이어 붙여 만든다.
requires: [mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, order-properties-of-reals, upper-bound-and-supremum, supremum-and-arithmetic, archimedean-property, absolute-value, triangle-inequality, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, tail-of-a-sequence, subsequence, limit-superior-and-inferior]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.3.1절 Theorem 2.3.4 와 그 증명 (p.75–76)
    checked: original
    note: "출처의 Theorem 2.3.4(p.75)는 유계인 수열에 상극한으로 수렴하는 부분수열 {x_{n_k}} 와 하극한으로 수렴하는 (다를 수도 있는) 부분수열 {x_{m_k}} 가 있다는 것이다. 이 항목은 첨자열의 이름을 p, q 로 썼다. 출처는 상극한 쪽만 증명하고 하극한 쪽은 연습문제로 둔다(p.76). 이 항목은 둘 다 증명했다. 출처는 n_1 := 1 로 두고, n_1, …, n_{k−1} 이 정해졌을 때 a_{(n_{k−1}+1)} − x_m < 1/k 인 m ≥ n_{k−1} + 1 을 하나 골라(pick) n_k 로 두며, 그런 m 이 있다는 것을 상한의 성질로 보인다. 이 항목은 고르는 대신 그 조건을 만족하는 가장 작은 m 을 정렬 원리로 잡아 함수 h 를 정하고, 첨자열을 recursion-theorem 으로 정의했다. 첫 항도 같은 방식(a_1 − x_m < 1 인 가장 작은 m)으로 정해 모든 k 에서 a_{p_k} − x_{p_k} < 1/k 가 되게 했다. 출처는 n_1 := 1 로 두므로 그 부등식이 k ≥ 2 에서만 성립하고, 그래서 M := max{M_1, M_2, 2} 를 쓴다. 출처가 '(why?)'로 넘기는 a_{(n_{k−1}+1)} ≥ a_{n_k} 는 이 항목에서 limit-superior-and-inferior 의 (3)으로 보였다. 출처의 수렴 증명(a_{n_k} 가 상극한으로 수렴한다는 것을 Proposition 2.1.17 의 내용으로 얻고(번호는 대지 않는다), 1/M_2 ≤ ε/2 인 M_2 와 삼각부등식을 쓴다)은 이 항목의 경로와 같고, 이 항목은 M_2 를 archimedean-property 의 (3)으로 잡고 두 수의 max 를 썼다. 예시 '번갈아 바뀌는 수열에서 증명의 구성을 따라가 보기', 반례, 확인 질문은 출처에 없다(검색한 범위). 출처는 이 정리의 바로 앞(p.75)에서 '{1/n} 이면 모든 n 에서 b_n = 0'이라고 적고, 증명 안에서 '부분수열이 단조일 필요는 없다'고 적는다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 가장 작은 첨자와 재귀 정리로 부분수열을 만든다. 출처 메모, 근거 인용, 완비성이라는 이름을 고침"
added: 2026-11-17
---

:::statement
수열과 유계는 [[sequence]]의 것이고, 첨자열과 부분수열은 [[subsequence]]의 것이며, 상극한과 하극한은 [[limit-superior-and-inferior]]의 것이다. $(x_n)$을 유계인 수열이라 하자.

1. 첨자열 $(p_k)$로서 부분수열 $(x_{p_k})$가 $(x_n)$의 상극한으로 수렴하는 것이 있다. 곧 $\lim_{k \to \infty} x_{p_k} = \limsup_{n \to \infty} x_n$이다.
2. 첨자열 $(q_k)$로서 부분수열 $(x_{q_k})$가 $(x_n)$의 하극한으로 수렴하는 것이 있다. 곧 $\lim_{k \to \infty} x_{q_k} = \liminf_{n \to \infty} x_n$이다.
:::

:::english
Sequences and boundedness are those of the entry on sequences, index sequences and subsequences are those of the entry on subsequences, and the limit superior and limit inferior are those of the entry on them. Let $(x_n)$ be a bounded sequence.

1. There is an index sequence $(p_k)$ such that the subsequence $(x_{p_k})$ converges to the limit superior of $(x_n)$. That is, $\lim_{k \to \infty} x_{p_k} = \limsup_{n \to \infty} x_n$.
2. There is an index sequence $(q_k)$ such that the subsequence $(x_{q_k})$ converges to the limit inferior of $(x_n)$. That is, $\lim_{k \to \infty} x_{q_k} = \liminf_{n \to \infty} x_n$.
:::

## 직관

[[limit-superior-and-inferior|상극한과 하극한]]의 직관에서처럼 $a_j$를 $j$번째 항부터 남은 항들 위의 가장 낮은 천장이라 하면, 천장은 내려오면서 상극한 $L$로 다가갑니다. 천장은 가장 낮은 것이므로 그 바로 아래까지 올라오는 항이 늘 있습니다. 그래서 $k$번째 단계에서는 바로 앞에서 고른 자리보다 뒤에서, 천장과의 차가 $k^{-1}$보다 작은 항을 하나 잡습니다. 잡은 항은 천장에 점점 바짝 붙고 천장은 $L$로 다가가므로, 잡은 항들도 $L$로 다가갑니다.

"하나 잡는다"를 빈틈없이 하려면 무엇을 잡는지 정해야 합니다. 이 항목은 조건을 만족하는 자리 가운데 가장 작은 것을 잡습니다. [[well-ordering-principle|정렬 원리]]에 의해 그런 자리는 정확히 하나이므로, 다음 자리를 정하는 규칙이 함수가 되고 [[recursion-theorem|재귀 정리]]가 첨자열을 정확히 하나 줍니다. 수열이 유계라는 가정은 천장 $a_j$와 상극한이 있다는 데에서, 그리고 천장 바로 아래에 항이 있다는 상한의 성질을 쓰는 데에서 쓰입니다.

하극한 쪽은 천장 대신 바닥 $b_j$를 쓰고, 바닥 바로 위의 항을 잡습니다. 두 첨자열은 일반적으로 다릅니다(아래 예시).

## 증명

:::idea
조건 "$m \ge j$이고 $a_j - x_m < k^{-1}$"을 만족하는 가장 작은 자연수 $m$을 $h(j, k)$로 두고, $p_1 = h(1, 1)$, $p_{k+1} = h(p_k + 1, k + 1)$로 첨자열을 재귀적으로 정한다. 그러면 $0 \le a_{p_k} - x_{p_k} < k^{-1}$이고, 부분수열 $(a_{p_k})$는 상극한으로 수렴한다.
:::

:::hint
$h(j, k)$가 모든 자연수 $j$, $k$에서 정해지려면 그 조건을 만족하는 $m$이 있어야 한다. $S_j$에 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (6)을 $\varepsilon = k^{-1}$로 쓴다.
:::

:::hint
$p_{k+1} \ge p_k + 1$이므로 [[limit-superior-and-inferior|상극한과 하극한]]의 (3)에 의해 $a_{p_{k+1}} \le a_{p_k + 1}$이다. $|x_{p_k} - L|$은 $|x_{p_k} - a_{p_k}| + |a_{p_k} - L|$로 위에서 누른다.
:::

:::proof
$S_j$, $a_j$, $b_j$($j$는 자연수)는 [[limit-superior-and-inferior]]의 것이고, "상극한 (3)"처럼 쓴 것은 그 항목의 번호이다. "부분수열 (3)"은 [[subsequence]]의 번호, "재귀 (1)"은 [[recursion-theorem]]의 번호, "순서 성질 (1)의 (v)"는 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 순서에는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓰며, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다. 정수의 합과 차는 정수이다([[even-and-odd]]). 실수의 계산에는 [[real-number-arithmetic]]의 (K1)–(K12)를 쓴다.

**1의 증명.** $L = \limsup_{n \to \infty} x_n$으로 둔다.

*함수 $h$.* 자연수 $j$, $k$에 대하여
$$
T(j, k) = \{m \in \mathbb{N} : m \ge j \text{ 이고 } a_j - x_m < k^{-1}\}
$$
으로 둔다. $T(j, k)$가 공집합이 아님을 보인다. 상극한 (1)에 의해 $S_j$는 공집합이 아니고 위로 유계이며 $a_j = \sup S_j$이다. 순서 성질 (10)에 의해 $0 < k^{-1}$이므로, [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (6)을 $A = S_j$, $\varepsilon = k^{-1}$로 쓰면 $a_j - k^{-1} < y \le a_j$인 $y \in S_j$가 있다. $S_j$의 정의에 의해 $m \ge j$이고 $y = x_m$인 자연수 $m$이 있다. $a_j - k^{-1} < x_m$의 양변에 $k^{-1} - x_m$을 더하면 순서 성질 (2)의 (ii)와 계산에 의해 $a_j - x_m < k^{-1}$이다. 따라서 $m \in T(j, k)$이다.

$T(j, k)$는 $\mathbb{N}$의 공집합이 아닌 부분집합이므로 [[well-ordering-principle|정렬 원리]]의 2에 의해 최소 원소를 갖고, 그 1에 의해 최소 원소는 하나뿐이다. 이것을 $h(j, k)$로 쓴다. 재귀 (1)(값으로 정한 함수. 정확히 하나임이 증명된 원소를 값으로 쓰는 경우)에 의해 $h : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이다. $h(j, k) \in T(j, k)$이므로 모든 자연수 $j$, $k$에서 다음이 성립한다. 이것을 (H)라 부른다.
$$
h(j, k) \ge j \qquad \text{이고} \qquad a_j - x_{h(j, k)} < k^{-1}
$$

*첨자열 $(p_k)$.* 자연수 $k$, $t$에 대하여 $t + 1$과 $k + 1$은 자연수이므로($0 < t < t + 1$, (L3)과 (Z6)) $g(k, t) = h(t + 1, k + 1)$로 두면, 재귀 (1)에 의해 $g : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이다. (H)와 (L3), (Z6)에 의해 $g(k, t) \ge t + 1 > t$이다. [[recursion-theorem|재귀 정리]]를 $X = \mathbb{N}$, 처음 값 $h(1, 1) \in \mathbb{N}$, 함수 $g$에 쓰면, 함수 $p : \mathbb{N} \to \mathbb{N}$으로서
$$
p_1 = h(1, 1), \qquad \text{모든 자연수 } k \text{에서 } p_{k+1} = g(k, p_k) = h(p_k + 1, k + 1)
$$
인 것이 정확히 하나 있다. 모든 $k$, $t$에서 $g(k, t) > t$이므로 재귀 (4)에 의해 $p$는 순증가이다. 곧 $(p_k)$는 [[subsequence]]의 뜻의 첨자열이고, $(x_{p_k})$는 $(x_n)$의 부분수열이다.

*핵심 부등식.* 모든 자연수 $k$에서 다음이 성립함을 보인다. 이것을 (P)라 부른다.
$$
0 \le a_{p_k} - x_{p_k} < k^{-1}
$$

상극한 (2)의 둘째 문장을 자연수 $p_k$에 쓰면 $x_{p_k} \le a_{p_k}$이므로 순서 성질 (3)의 (i)에 의해 $0 \le a_{p_k} - x_{p_k}$이다. 오른쪽 부등식은 $k = 1$인 경우와 $k \ge 2$인 경우로 나눈다. 자연수 $k$는 (Z1)에 의해 $k \ge 1$이고, (Z5)에 의해 $k = 1$이거나 $1 < k$이며, 뒤의 경우 (Z1)에 의해 $k \ge 2$이다.

- $k = 1$이면, (H)에 의해 $p_1 = h(1, 1) \ge 1$이므로 상극한 (3)에 의해 $a_{p_1} \le a_1$이다. 순서 성질 (2)의 (i)에 의해 $a_{p_1} - x_{p_1} \le a_1 - x_{p_1}$이고, (H)에 의해 $a_1 - x_{p_1} < 1^{-1}$이므로 순서 성질 (1)의 (v)에 의해 $a_{p_1} - x_{p_1} < 1^{-1}$이다.
- $k \ge 2$이면 $i = k - 1$은 (Z7)에 의해 $i \ge 1$인 정수, 곧 자연수이고 $k = i + 1$이다. (H)에 의해 $p_{i+1} = h(p_i + 1, i + 1) \ge p_i + 1$이므로 상극한 (3)에 의해 $a_{p_{i+1}} \le a_{p_i + 1}$이다. 순서 성질 (2)의 (i)에 의해 $a_{p_{i+1}} - x_{p_{i+1}} \le a_{p_i + 1} - x_{p_{i+1}}$이고, (H)에서 $j = p_i + 1$, $k = i + 1$로 두면 $a_{p_i + 1} - x_{h(p_i + 1, i + 1)} < (i + 1)^{-1}$, 곧 $a_{p_i + 1} - x_{p_{i+1}} < (i + 1)^{-1}$이다. 순서 성질 (1)의 (v)에 의해 $a_{p_k} - x_{p_k} < k^{-1}$이다.

*수렴.* 양의 실수 $\varepsilon$을 잡는다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. 상극한과 하극한의 정의에 의해 $(a_j)$는 $L$로 수렴하고, $(a_{p_k})$는 첨자열 $(p_k)$로 얻은 $(a_j)$의 부분수열이므로 부분수열 (3)에 의해 $L$로 수렴한다. 따라서 $M_1$ 이상인 모든 자연수 $k$에서 $|a_{p_k} - L| < \varepsilon/2$인 자연수 $M_1$이 있다. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $M_2$ 이상인 모든 자연수 $k$에서 $k^{-1} < \varepsilon/2$인 자연수 $M_2$가 있다. $M = \max\{M_1, M_2\}$로 두면 절댓값 (10)에 의해 $M$은 $M_1$이거나 $M_2$이므로 자연수이고, $M_1 \le M$, $M_2 \le M$이다.

$M$ 이상인 자연수 $k$를 잡는다. 순서 성질 (1)의 (v)에 의해 $k \ge M_1$이고 $k \ge M_2$이다. (P)와 절댓값 (3), (1)에 의해 $|x_{p_k} - a_{p_k}| = |a_{p_k} - x_{p_k}| = a_{p_k} - x_{p_k} < k^{-1} < \varepsilon/2$이다. [[triangle-inequality|삼각부등식]]의 (1)에 의해
$$
|x_{p_k} - L| = \bigl|(x_{p_k} - a_{p_k}) + (a_{p_k} - L)\bigr| \le |x_{p_k} - a_{p_k}| + |a_{p_k} - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다. 여기서 첫 등식은 계산이고, 마지막 부등식은 순서 성질 (2)의 (iv)와 (1)의 (v)이다. $\varepsilon$은 임의의 양의 실수였으므로 $(x_{p_k})$는 $L$로 수렴하고, [[limit-is-unique]]의 기호로 $\lim_{k \to \infty} x_{p_k} = L$이다.

**2의 증명.** $\ell = \liminf_{n \to \infty} x_n$으로 두고, 1의 증명에서 천장 $a_j$를 바닥 $b_j$로 바꾸어 같은 단계를 밟는다.

*함수 $h'$.* 자연수 $j$, $k$에 대하여
$$
T'(j, k) = \{m \in \mathbb{N} : m \ge j \text{ 이고 } x_m - b_j < k^{-1}\}
$$
으로 둔다. 상극한 (1)에 의해 $S_j$는 공집합이 아니고 아래로 유계이며 $b_j = \inf S_j$이다. [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (6)의 둘째 문장을 $A = S_j$, $\varepsilon = k^{-1}$로 쓰면 $b_j \le y < b_j + k^{-1}$인 $y \in S_j$가 있고, $m \ge j$이고 $y = x_m$인 자연수 $m$이 있다. $x_m < b_j + k^{-1}$의 양변에 $-b_j$를 더하면 순서 성질 (2)의 (ii)와 계산에 의해 $x_m - b_j < k^{-1}$이므로 $m \in T'(j, k)$이다. 정렬 원리의 2와 1에 의해 $T'(j, k)$의 최소 원소가 정확히 하나 있고, 이것을 $h'(j, k)$로 쓰면 재귀 (1)에 의해 $h' : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이며, 모든 자연수 $j$, $k$에서 다음이 성립한다. 이것을 (H')라 부른다.
$$
h'(j, k) \ge j \qquad \text{이고} \qquad x_{h'(j, k)} - b_j < k^{-1}
$$

*첨자열 $(q_k)$.* 자연수 $k$, $t$에 대하여 $t + 1$과 $k + 1$은 자연수이므로 $g'(k, t) = h'(t + 1, k + 1)$로 두면 재귀 (1)에 의해 $g' : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이고, (H')에 의해 $g'(k, t) \ge t + 1 > t$이다. 재귀 정리를 $X = \mathbb{N}$, 처음 값 $h'(1, 1)$, 함수 $g'$에 쓰면 $q_1 = h'(1, 1)$이고 모든 자연수 $k$에서 $q_{k+1} = h'(q_k + 1, k + 1)$인 함수 $q : \mathbb{N} \to \mathbb{N}$이 정확히 하나 있고, 재귀 (4)에 의해 $(q_k)$는 첨자열이다.

*핵심 부등식.* 모든 자연수 $k$에서 다음이 성립함을 보인다. 이것을 (P')라 부른다.
$$
0 \le x_{q_k} - b_{q_k} < k^{-1}
$$

상극한 (2)의 둘째 문장을 자연수 $q_k$에 쓰면 $b_{q_k} \le x_{q_k}$이므로 순서 성질 (3)의 (i)에 의해 왼쪽 부등식이 성립한다. 오른쪽 부등식은 $k = 1$인 경우와 $k \ge 2$인 경우로 나눈다(1의 증명에서 본 것처럼 모든 자연수 $k$는 둘 가운데 하나이다).

- $k = 1$이면, (H')에 의해 $q_1 \ge 1$이므로 상극한 (3)에 의해 $b_1 \le b_{q_1}$이다. 순서 성질 (3)의 (iii)에 의해 $-b_{q_1} \le -b_1$이고, (2)의 (i)에 의해 $x_{q_1} - b_{q_1} \le x_{q_1} - b_1$이다. (H')에 의해 $x_{q_1} - b_1 < 1^{-1}$이므로 순서 성질 (1)의 (v)에 의해 $x_{q_1} - b_{q_1} < 1^{-1}$이다.
- $k \ge 2$이면 $i = k - 1$은 (Z7)에 의해 $i \ge 1$인 정수, 곧 자연수이고 $k = i + 1$이다. (H')에 의해 $q_{i+1} = h'(q_i + 1, i + 1) \ge q_i + 1$이므로 상극한 (3)에 의해 $b_{q_i + 1} \le b_{q_{i+1}}$이다. 순서 성질 (3)의 (iii)과 (2)의 (i)에 의해 $x_{q_{i+1}} - b_{q_{i+1}} \le x_{q_{i+1}} - b_{q_i + 1}$이고, (H')에서 $j = q_i + 1$, $k = i + 1$로 두면 $x_{q_{i+1}} - b_{q_i + 1} < (i + 1)^{-1}$이다. 순서 성질 (1)의 (v)에 의해 $x_{q_k} - b_{q_k} < k^{-1}$이다.

*수렴.* 양의 실수 $\varepsilon$을 잡는다. $(b_j)$는 $\ell$로 수렴하므로 부분수열 (3)에 의해 $(b_{q_k})$도 $\ell$로 수렴하고, $M_1$ 이상인 모든 자연수 $k$에서 $|b_{q_k} - \ell| < \varepsilon/2$인 자연수 $M_1$이 있다. 아르키메데스 성질의 (3)에 의해 $M_2$ 이상인 모든 자연수 $k$에서 $k^{-1} < \varepsilon/2$인 자연수 $M_2$가 있다. $M = \max\{M_1, M_2\}$로 두면 절댓값 (10)에 의해 $M$은 $M_1$이거나 $M_2$이므로 자연수이고 $M_1 \le M$, $M_2 \le M$이다. $M$ 이상인 자연수 $k$에서 순서 성질 (1)의 (v)에 의해 $k \ge M_1$, $k \ge M_2$이고, (P')과 절댓값 (1)에 의해 $|x_{q_k} - b_{q_k}| = x_{q_k} - b_{q_k} < k^{-1} < \varepsilon/2$이므로, 삼각부등식의 (1)에 의해
$$
|x_{q_k} - \ell| = \bigl|(x_{q_k} - b_{q_k}) + (b_{q_k} - \ell)\bigr| \le |x_{q_k} - b_{q_k}| + |b_{q_k} - \ell| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다. 따라서 $(x_{q_k})$는 $\ell$로 수렴하고 $\lim_{k \to \infty} x_{q_k} = \ell$이다. $\blacksquare$
:::

## 예시와 반례

:::example[번갈아 바뀌는 수열에서 증명의 구성을 따라가 보기]
[[basic-limits]]의 (3)의 수열, 곧 $n$이 짝수이면 $x_n = 1$, 홀수이면 $x_n = -1$인 수열을 생각합니다. 모든 항이 $1$ 이하이고, 자연수 $j$에 대하여 $2j = j + j \ge j$이고 $2j$는 짝수이므로 $1 = x_{2j} \in S_j$입니다. 그래서 $1$은 $S_j$의 최댓값이고 [[upper-bound-and-supremum]]의 (2)에 의해 모든 $j$에서 $a_j = 1$입니다. 또 모든 항이 $-1$ 이상이고 $2j + 1 \ge j$이며 $2j + 1$은 홀수이므로 $-1 = x_{2j+1} \in S_j$이어서 $-1$은 $S_j$의 최솟값이고 $b_j = -1$입니다. 따라서 상극한은 $1$, 하극한은 $-1$입니다([[basic-limits]]의 (1)).

증명의 $T(j, k)$를 계산합니다. 자연수 $k$에 대하여 $1 \le k$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $k^{-1} \le 1 < 2$입니다. $x_m = 1$이면 $a_j - x_m = 0 < k^{-1}$이고, $x_m = -1$이면 $a_j - x_m = 2$이므로 $a_j - x_m < k^{-1}$이 아닙니다. 그래서 $T(j, k)$는 $j$ 이상인 짝수 전체이고, $h(j, k)$는 $j$ 이상인 가장 작은 짝수입니다. $1$은 홀수이므로 $p_1 = h(1, 1) = 2$입니다. $p_k$가 짝수이면 $p_k + 1$은 홀수이어서 $T(p_k + 1, k + 1)$에 속하지 않으므로 그 원소는 모두 $p_k + 2$ 이상이고, $p_k + 2$는 짝수이므로 $p_{k+1} = h(p_k + 1, k + 1) = p_k + 2$입니다. 귀납법으로 모든 $k$에서 $p_k = 2k$이고, 부분수열 $(x_{2k})$는 모든 항이 $1$이어서 상극한 $1$로 수렴합니다.

하극한 쪽에서는 $x_m - b_j = x_m + 1$이 $x_m = -1$이면 $0 < k^{-1}$이고 $x_m = 1$이면 $2$이므로, $T'(j, k)$는 $j$ 이상인 홀수 전체입니다. $1$은 홀수이므로 $q_1 = h'(1, 1) = 1$이고, $q_k$가 홀수이면 $q_k + 1$은 짝수, $q_k + 2$는 홀수이므로 $q_{k+1} = q_k + 2$입니다. 귀납법으로 $q_k = 2k - 1$입니다. 부분수열 $(x_{2k-1})$은 모든 항이 $-1$이어서 하극한 $-1$로 수렴합니다. 두 첨자열은 다르고, 이 수열에서는 같을 수도 없습니다. 한 부분수열이 $1$과 $-1$로 함께 수렴할 수는 없기 때문입니다([[limit-is-unique]]).
:::

:::counterexample[유계가 아닌 수열]
$x_n = n$인 수열에는 수렴하는 부분수열이 하나도 없습니다. 첨자열 $(p_k)$로 얻은 부분수열 $(x_{p_k})$의 $k$번째 항은 $p_k$입니다. 이 부분수열이 수렴한다면 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 모든 $k$에서 $|p_k| \le B$인 실수 $B$가 있습니다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < k$인 자연수 $k$가 있고, [[subsequence]]의 (1)에 의해 $k \le p_k$이며 $p_k$는 양수이므로 $p_k = |p_k| \le B$입니다. 그러면 $B < k \le p_k \le B$이어서 [[order-properties-of-reals]]의 (1)의 (v)와 (i)에 의해 $B \ne B$가 되어 모순입니다. 이 정리에서 유계라는 가정은 뺄 수 없습니다. 이 수열에는 상극한도 정의되지 않습니다.
:::

## 확인 질문

:::check[유계인 수열에서 상극한으로 수렴하는 부분수열을 주는 첨자열은 하나뿐인가?]
아닙니다. 첨자열 $(p_k)$로 얻은 $(x_{p_k})$가 상극한 $L$로 수렴한다고 합시다. $k$에서의 값이 $k + 1$인 첨자열을 $s$라 하면 [[subsequence]]의 (4)에 의해 $(x_{p_k})$의 $1$-꼬리 $(x_{p_{k+1}})$은 $s$로 얻은 $(x_{p_k})$의 부분수열이고, 그 (5)에 의해 $k$에서의 값이 $p_{k+1}$인 $p \circ s$는 첨자열이며 $(x_{p_{k+1}})$은 $p \circ s$로 얻은 $(x_n)$의 부분수열입니다. [[tail-of-a-sequence]]의 (1)에 의해 이 $1$-꼬리도 $L$로 수렴합니다. $p_1 < p_2$이므로 $p$와 $p \circ s$는 $1$에서의 값이 달라 서로 다른 첨자열입니다.
:::

:::check[$x_n = -n^{-1}$이면 증명의 첨자열 $(p_k)$는 무엇인가?]
$p_k = k + 1$입니다. 모든 $n$에서 $|x_n| = n^{-1} \le 1$이므로 유계입니다. 먼저 $a_j = 0$입니다. $S_j$의 원소는 음수이므로 $0$은 $S_j$의 상계입니다. 음수 $c$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $N$ 이상인 모든 자연수 $i$에서 $i^{-1} < -c$인 자연수 $N$이 있고, $i = \max\{N, j\}$로 두면 $i \ge j$, $i \ge N$이므로 $c < -i^{-1}$이고 $-i^{-1} = x_i \in S_j$이어서 $c$는 상계가 아닙니다. 따라서 $S_j$의 상계는 모두 $0$ 이상이고 $a_j = 0$입니다. 그러면 $a_j - x_m = m^{-1}$이고, [[order-properties-of-reals]]의 (6)의 (ii)와 (1)의 (iii)에 의해 $m^{-1} < k^{-1}$인 것은 정확히 $k < m$, 곧 $m \ge k + 1$일 때입니다. 따라서 $T(j, k)$는 $j$ 이상이고 $k + 1$ 이상인 자연수 전체이고, [[absolute-value|절댓값]]의 (10)에 의해 그 최소 원소는 $h(j, k) = \max\{j, k + 1\}$입니다. $p_1 = \max\{1, 2\} = 2$이고, $p_k = k + 1$이면 $p_{k+1} = \max\{k + 2, k + 2\} = k + 2$입니다. 이 부분수열은 $(x_n)$의 $1$-꼬리입니다.
:::
