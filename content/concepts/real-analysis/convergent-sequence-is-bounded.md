---
title: 수렴하는 수열은 유계이다
title_en: Convergent Sequences Are Bounded
aliases: [수렴 수열의 유계성, 처음 몇 항의 상계, convergent sequence is bounded]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 어떤 수열이든 처음 k 개의 항은 한 실수로 절댓값을 누를 수 있고, 이것을 써서 수렴하는 수열은 유계임을 보인다. 역은 성립하지 않는다.
requires: [contrapositive-law, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, archimedean-property, absolute-value, triangle-inequality, sequence, limit-of-sequence, basic-limits]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.1절 Proposition 2.1.7 과 그 뒤 문단 (p.54)
    checked: original
    note: "이 항목의 (2)는 출처의 Proposition 2.1.7(p.54)이다. 출처는 수렴하는 수열이 x 로 수렴할 때 |x_n − x| < 1 인 M 을 잡아 n ≥ M 에서 |x_n| < 1 + |x| 를 얻고, 유한집합 {|x_1|, …, |x_{M−1}|, 1 + |x|} 의 최댓값을 B 로 둔다. 이 사이트에는 유한한 실수 집합의 최댓값이 없으므로, 이 항목은 '처음 k 개 항의 절댓값을 누르는 실수가 있다'를 k 에 대한 귀납과 두 수의 최대(absolute-value 의 (10))로 (1)에 진술하고 증명한 뒤, B = max{B_M, 1 + |L|} 로 둔다. 처음 M 개 항까지 누르므로 출처의 M − 1 개와 달리 M = 1 인 경우를 따로 다루지 않아도 된다. (3)은 출처가 Proposition 2.1.7 뒤에서 '{(−1)ⁿ} 은 역이 성립하지 않음을 보여 준다'고 적는 것과 같은 수열이다. 예시 'n⁻¹ 에서 B 를 구하기'는 출처에 없다(검색한 범위). 예시 '대우로 보는 발산'은 출처의 연습문제 2.1.2(p.59, {n} 은 수렴하는가)와 같은 수열을 다룬다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 수학 오류 없음. 출처 메모 보완, 수열 (1)의 전제를 좁힘, 근거 인용 보완"
added: 2026-11-17
---

:::statement
수열, 유계와 수렴은 [[sequence]]과 [[limit-of-sequence]]의 것이고, 두 수의 최대 $\max\{a, b\}$는 [[absolute-value]]의 것이다. $(x_n)$을 수열이라 하자.

1. (처음 $k$개의 항) 모든 자연수 $k$에 대하여, $n \le k$인 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다.
2. $(x_n)$이 수렴하면 $(x_n)$은 유계이다. 곧 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다. 더 자세히, $(x_n)$이 $L$로 수렴하고 $M$이 "$n \ge M$이면 $|x_n - L| < 1$"을 만족하는 자연수이며 $B_M$이 (1)에서 $k = M$으로 얻은 실수이면, $B = \max\{B_M, 1 + |L|\}$가 그런 실수이다.
3. (2)의 역은 성립하지 않는다. [[basic-limits]]의 (3)의 수열은 유계이지만 발산한다.
:::

:::english
Sequences, boundedness and convergence are those of the entries on sequences and on the limit of a sequence, and the maximum $\max\{a, b\}$ of two numbers is that of the entry on absolute value. Let $(x_n)$ be a sequence.

1. (The first $k$ terms) For every natural number $k$ there is a real number $B$ with $|x_n| \le B$ for every natural number $n$ with $n \le k$.
2. If $(x_n)$ converges, then $(x_n)$ is bounded; that is, there is a real number $B$ with $|x_n| \le B$ for every natural number $n$. More precisely, if $(x_n)$ converges to $L$, $M$ is a natural number such that $|x_n - L| < 1$ whenever $n \ge M$, and $B_M$ is a real number obtained from (1) with $k = M$, then $B = \max\{B_M, 1 + |L|\}$ is such a number.
3. The converse of (2) fails: the sequence in item (3) of the entry on basic limits is bounded but diverges.
:::

## 직관

수렴하는 수열은 어느 번호 $M$ 이후로는 극한 $L$에서 $1$ 안쪽에 머뭅니다. 그 항들은 모두 절댓값이 $1 + |L|$보다 작습니다. 남은 것은 처음 몇 항뿐인데, 그 개수는 유한하므로 하나씩 비교해 가장 큰 절댓값을 찾을 수 있습니다. (1)은 "하나씩 비교한다"를 귀납법으로 정확히 한 것입니다.

비유하면, 소풍에서 대부분의 아이들은 선생님 곁 반경 $1$ 안에 모여 있고 처음 출발한 몇 명만 흩어져 있습니다. 흩어진 아이들은 몇 명뿐이니 그중 가장 먼 아이까지의 거리를 재면, 모두를 담는 원을 그릴 수 있습니다. 비유가 맞는 곳은 "유한 개는 하나씩 처리하고 나머지는 한꺼번에 처리한다"는 증명의 구조입니다. 맞지 않는 곳은 수열에서는 "반경 안에 모인 무리"가 무한히 많은 항이라는 점입니다.

역은 성립하지 않습니다. 유계라는 것은 "멀리 가지 않는다"일 뿐이고, 한 수 가까이에 머문다는 것까지 주지는 않습니다.

## 증명

:::idea
(1)은 $k$에 대한 귀납법으로, 지금까지의 경계와 새 항의 절댓값 가운데 큰 쪽을 새 경계로 삼는다. (2)는 $M$ 이후의 항을 삼각부등식으로 $1 + |L|$ 아래에 두고, 처음 $M$개의 항은 (1)로 누른다.
:::

:::hint
(1)의 귀납 단계에서 $n \le k + 1$인 자연수 $n$은 $n \le k$이거나 $n = k + 1$이다.
:::

:::hint
(2)에서 $x_n = (x_n - L) + L$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "삼각부등식 (1)"은 [[triangle-inequality]]의 번호이다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 자연수는 양의 정수이다.

**1의 증명.** 자연수 $k$에 대한 명제 $S_k$를 "$n \le k$인 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다"로 두고 [[mathematical-induction]]으로 증명한다.

- 기초 단계: $B = |x_1|$로 둔다. 자연수 $n$이 $n \le 1$이면, $n$은 양의 정수이므로 [[prime-number]]의 (Z1)에 의해 $1 \le n$이고, [[well-ordering-principle]]의 (L2)에 의해 $n = 1$이다. 따라서 $|x_n| = |x_1| \le B$이다(순서 성질 (1)의 (iv)). $S_1$이 참이다.
- 귀납 단계: 자연수 $k$에 대하여 $S_k$가 참이라 하고, $n \le k$인 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$를 잡는다. $B' = \max\{B, |x_{k+1}|\}$로 둔다. 절댓값 (10)에 의해 $B \le B'$이고 $|x_{k+1}| \le B'$이다. $n \le k + 1$인 자연수 $n$을 잡는다. (Z5)와 (Z1)에 의해 $n \le k$이거나 $k + 1 \le n$이다. $n \le k$이면 $|x_n| \le B \le B'$이므로 순서 성질 (1)의 (v)에 의해 $|x_n| \le B'$이다. $k + 1 \le n$이면 $n \le k + 1$과 (L2)에 의해 $n = k + 1$이므로 $|x_n| = |x_{k+1}| \le B'$이다. 따라서 $S_{k+1}$이 참이다.

모든 자연수 $k$에 대하여 $S_k$가 참이다.

**2의 증명.** $(x_n)$이 실수 $L$로 수렴한다고 하자. 순서 성질 (5)의 (ii)에 의해 $1$은 양의 실수이므로, 수렴의 정의를 $\varepsilon = 1$에 쓰면 $n \ge M$인 모든 자연수 $n$에서 $|x_n - L| < 1$인 자연수 $M$이 있다. (1)을 $k = M$에 써서 $n \le M$인 모든 자연수 $n$에서 $|x_n| \le B_M$인 실수 $B_M$을 잡고, $B = \max\{B_M, 1 + |L|\}$로 둔다. 절댓값 (10)에 의해 $B_M \le B$이고 $1 + |L| \le B$이다.

자연수 $n$을 잡는다. (Z5)에 의해 $n \le M$이거나 $M < n$이다.

- $n \le M$이면 $|x_n| \le B_M \le B$이므로 순서 성질 (1)의 (v)에 의해 $|x_n| \le B$이다.
- $M < n$이면 $n \ge M$이므로 $|x_n - L| < 1$이다. (K2), (K1), $-L$의 정의, (K4)에 의해 $(x_n - L) + L = x_n + ((-L) + L) = x_n + 0 = x_n$이므로, 삼각부등식 (1)에 의해 $|x_n| \le |x_n - L| + |L|$이다. 순서 성질 (2)의 (ii)로 $|x_n - L| < 1$의 양변에 $|L|$을 더하면 $|x_n - L| + |L| < 1 + |L|$이다. 순서 성질 (1)의 (v)에 의해 $|x_n| < 1 + |L|$이고, $1 + |L| \le B$이므로 다시 (1)의 (v)에 의해 $|x_n| < B$, 따라서 $|x_n| \le B$이다.

모든 자연수 $n$에서 $|x_n| \le B$이므로 [[sequence]]의 정의에 의해 $(x_n)$은 유계이다.

**3의 증명.** [[basic-limits]]의 (3)의 수열 $(a_n)$은 그 항목에 의해 발산한다. 각 항은 $1$이거나 $-1$이고, 절댓값 (1)과 (3)에 의해 $|1| = 1$, $|-1| = |1| = 1$이므로 모든 $n$에서 $|a_n| \le 1$이다. 따라서 $(a_n)$은 유계이지만 수렴하지 않는다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $n^{-1}$인 수열에서 $B$를 찾기]
이 수열은 [[basic-limits]]의 (2)에 의해 $L = 0$으로 수렴합니다. (2)의 방법을 따라가 봅니다. $|n^{-1} - 0| = n^{-1} < 1$이 되는 $M$으로 $M = 2$를 잡을 수 있습니다. $n \ge 2$이면 $n = 2$이거나 $2 < n$이고, $2 < n$이면 $0 < 2 < n$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $n^{-1} < 2^{-1}$이므로, 어느 경우든 $n^{-1} \le 2^{-1}$입니다. 그 항목의 (8)을 $c = 1$에 쓰면 $2^{-1} = 1/2 < 1$이고, 그 항목의 (1)의 (v)에 의해 $n^{-1} < 1$이기 때문입니다. ($M = 1$은 안 됩니다. $|1^{-1} - 0| = 1$은 $1$보다 작지 않습니다.) 처음 두 항 $1$, $2^{-1}$의 절댓값은 모두 $1$ 이하이므로 $B_2 = 1$로 둘 수 있고, $B = \max\{1, 1 + |0|\} = \max\{1, 1\} = 1$입니다. 실제로 모든 $n$에서 $|n^{-1}| \le 1$입니다.
:::

:::example[대우로 보는 발산]
(2)의 대우([[contrapositive-law|대우 법칙]])는 "유계가 아닌 수열은 수렴하지 않는다"입니다. $n$번째 항이 $n$인 수열은 위로 유계가 아니므로(실수 $B$마다 [[archimedean-property]]의 (1)로 $B < n$인 자연수 $n$이 있다) [[sequence]]의 (3)에 의해 유계가 아니고, 따라서 발산합니다. [[basic-limits]]의 (4)는 같은 결론을 이 항목 없이 정의로 직접 보인 것입니다.
:::

:::counterexample[유계이지만 발산하는 수열]
(3)의 수열 $(a_n)$은 $-1$과 $1$ 사이에 갇혀 있지만, [[basic-limits]]의 (3)에 의해 어떤 실수로도 수렴하지 않습니다. 유계는 수렴의 필요조건이지만 충분조건은 아닙니다.
:::

## 확인 질문

:::check[수렴하는 수열은 위로 유계이고 아래로 유계인가?]
그렇습니다. (2)에 의해 유계이고, [[sequence]]의 (3)에 의해 유계인 수열은 위로 유계이고 아래로 유계입니다. 실제로 $|x_n| \le B$이면 [[absolute-value|절댓값]]의 (7)에 의해 $-B \le x_n \le B$입니다.
:::

:::check[$n$번째 항이 $n$인 수열에 (1)을 $k = 3$으로 쓰면 어떤 $B$를 얻는가? 이 수열은 왜 (2)의 결론을 만족하지 않는가?]
(1)의 증명을 따라가면 $B = \max\{\max\{|1|, |2|\}, |3|\} = \max\{2, 3\} = 3$이고, 실제로 $|1|, |2|, |3| \le 3$입니다. 그러나 $k$를 키울수록 $B$도 커져야 하고, 모든 $n$에 통하는 $B$는 없습니다(위의 예시). (2)의 가정, 곧 수렴이 성립하지 않으므로 모순이 아닙니다.
:::
