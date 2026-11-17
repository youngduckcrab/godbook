---
title: 급수의 꼬리
title_en: Tail of a Series
aliases: [꼬리의 급수, 급수의 K-꼬리, tail of a series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 자연수 K 에 대하여 수열 (x_n) 의 K-꼬리의 부분합은 s_{n+K} − s_K 이다. (x_n) 의 급수가 수렴하는 것은 정확히 K-꼬리의 급수가 수렴할 때이고, 이때 원래 급수의 합은 s_K 와 꼬리의 급수의 합을 더한 것이다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, series-and-partial-sums]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.1절 Proposition 2.5.6 과 그 증명 (p.89)
    checked: original
    note: "출처의 Proposition 2.5.6(p.89)은 M ∈ ℕ 에 대해 첨자 1 부터의 급수가 수렴하는 것은 정확히 첨자 M 부터의 급수가 수렴할 때라는 것이다. 출처는 k ≥ M 에서 k 번째 부분합을 첨자 M − 1 까지의 합과 M 부터 k 까지의 합으로 쪼개고(유한 합을 쪼개는 성질은 증명하지 않는다), 앞의 것이 고정된 수라고 한 뒤 'Use Proposition 2.2.5 to finish the proof'라고만 적는다. 두 급수의 합 사이의 관계는 출처의 진술에 없다(증명에 부분합을 쪼갠 등식만 있다). 출처의 첨자 M 부터의 급수는 이 사이트의 K = M − 1 인 K-꼬리의 급수이다. 이 사이트에는 0-꼬리가 없으므로 출처의 M = 1(급수 자신)은 이 항목에 들어가지 않는다. 이 항목은 꼬리의 부분합이 s_{n+K} − s_K 임((1))을 series-and-partial-sums 의 (1)로 보이고, 수열의 꼬리(tail-of-a-sequence 의 (1))와 상수를 더한 수열의 극한(limit-of-sum-and-product 의 (5))으로 (2)를 증명하며, 합의 관계 (3)을 진술에 더했다. 예시 'K 번째 뒤의 항이 모두 같은 두 수열'은 출처에 명제로 없다(검색한 범위). 예시 '앞뒤 항이 지워지는 급수의 꼬리'의 급수는 출처의 연습문제 2.5.1(p.97), 2.5.3 d)(p.97)와 5.5.3 b)(p.224)의 1/(n(n+1)) 의 급수와 같다(n⁻¹ − (n+1)⁻¹ = (n(n+1))⁻¹). 반례와 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 수열의 $K$-꼬리는 [[tail-of-a-sequence]]의 것이며, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. $(x_n)$을 수열, $(s_n)$을 그 부분합 수열, $K$를 자연수라 하자. $(x_n)$의 $K$-꼬리, 곧 $n$번째 항이 $x_{n+K}$인 수열을 $(y_n)$이라 하고 그 부분합 수열을 $(t_n)$이라 하자. $(y_n)$의 급수를 짧게 "$(x_n)$의 $K$-꼬리의 급수"라 한다.

1. (꼬리의 부분합) 모든 자연수 $n$에서 $t_n = s_{n+K} - s_K$이다.
2. (수렴) $(x_n)$의 급수가 수렴하는 것은 정확히 $(x_n)$의 $K$-꼬리의 급수가 수렴할 때이다. 따라서 $(x_n)$의 급수가 발산하는 것은 정확히 $K$-꼬리의 급수가 발산할 때이다.
3. (합의 관계) $(x_n)$의 급수가 수렴하고 그 합을 $S$, $K$-꼬리의 급수의 합을 $T$라 하면 $S = s_K + T$이다. 곧 $T = S - s_K$이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; the $K$-tail of a sequence is that of the entry on tails of sequences; and sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums. Let $(x_n)$ be a sequence, $(s_n)$ its sequence of partial sums, and $K$ a natural number. Let $(y_n)$ be the $K$-tail of $(x_n)$, that is, the sequence whose $n$th term is $x_{n+K}$, and let $(t_n)$ be its sequence of partial sums. The series of $(y_n)$ is called, for short, "the series of the $K$-tail of $(x_n)$".

1. (Partial sums of the tail) $t_n = s_{n+K} - s_K$ for every natural number $n$.
2. (Convergence) The series of $(x_n)$ converges exactly when the series of the $K$-tail of $(x_n)$ converges. Hence the series of $(x_n)$ diverges exactly when the series of the $K$-tail diverges.
3. (Relation between the sums) If the series of $(x_n)$ converges, $S$ is its sum and $T$ is the sum of the series of the $K$-tail, then $S = s_K + T$; that is, $T = S - s_K$.
:::

## 직관

책을 읽다가 앞의 $K$쪽을 이미 읽었다면, 남은 쪽수를 세는 일은 전체 쪽수에서 $K$를 빼는 것과 같습니다. 꼬리의 급수도 같습니다. 꼬리의 $n$번째 부분합은 원래 수열의 $K + 1$번째부터 $K + n$번째까지의 항을 차례로 더한 것이므로, 원래의 $K + n$번째 부분합에서 처음 $K$개의 몫 $s_K$를 뺀 것입니다. 이것이 (1)입니다.

$s_K$는 $n$에 따라 바뀌지 않는 수이므로, 부분합에서 이 수를 빼거나 더해도 수렴하는지는 바뀌지 않고 극한만 $s_K$만큼 옮겨 갑니다. 그래서 수렴 여부는 꼬리만 보고 판단해도 되고((2)), 두 합의 차는 앞의 $K$개의 몫 $s_K$입니다((3)). 비유가 맞지 않는 곳은, 책은 쪽수가 유한하지만 급수에는 끝이 없어서 "전체"가 극한으로만 뜻을 갖는다는 점입니다.

[[tail-of-a-sequence|수열의 꼬리]]는 극한을 바꾸지 않지만, 급수의 꼬리는 합을 바꿀 수 있습니다(아래 반례). 꼬리의 급수에서 떼어 내는 것은 부분합 수열의 항이 아니라 원래 수열의 항이기 때문입니다.

## 증명

:::idea
꼬리의 부분합이 $s_{n+K} - s_K$라는 것은 [[series-and-partial-sums|급수와 부분합]]의 (1)로 확인한다. $n$번째 항이 $s_{n+K}$인 수열은 $(s_n)$의 $K$-꼬리이므로, 수열의 꼬리와 상수를 더하는 극한의 성질로 (2), (3)이 나온다.
:::

:::hint
$v_n = s_{n+K} - s_K$로 두고 $v_1$과 $v_{n+1} - v_n$을 계산한다.
:::

:::hint
$s_{n+K} = s_K + t_n$이다. 왼쪽은 $(s_n)$의 $K$-꼬리이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "부분합 (1)"처럼 쓴 것은 [[series-and-partial-sums]]의 번호, "꼬리 (1)"은 [[tail-of-a-sequence]]의 번호, "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. [[tail-of-a-sequence]]의 진술에 의해 자연수 $n$에 대하여 $n + K$는 자연수이다. 정수의 계산(정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]], 계산 법칙은 [[well-ordering-principle]]의 진술)으로 $1 + K = K + 1$이고 $(n + 1) + K = (n + K) + 1$이다.

**1의 증명.** $n$번째 항이 $s_{n+K} - s_K$인 수열을 $(v_n)$이라 하자([[sequence]]의 (1)). 부분합 (2)를 $K$에 쓰면
$$
v_1 = s_{K+1} - s_K = x_{K+1} = x_{1+K} = y_1
$$
이다. 자연수 $n$에서 부분합 수열의 정의를 자연수 $n + K$에 쓰면 $s_{(n+K)+1} = s_{n+K} + x_{(n+K)+1}$이다. $(n + K) + 1 = (n + 1) + K$이므로 $x_{(n+K)+1} = y_{n+1}$이고, (K1), (K2)에 의해
$$
v_{n+1} = s_{(n+1)+K} - s_K = (s_{n+K} + y_{n+1}) + (-s_K) = \bigl(s_{n+K} + (-s_K)\bigr) + y_{n+1} = v_n + y_{n+1}
$$
이다. 부분합 (1)을 $(y_n)$에 쓰면 $(v_n)$은 $(y_n)$의 부분합 수열이다. 따라서 모든 자연수 $n$에서 $t_n = s_{n+K} - s_K$이다.

**2와 3의 증명.** $n$번째 항이 $s_{n+K}$인 수열, 곧 $(s_n)$의 $K$-꼬리를 $(w_n)$이라 하자. (1)과 (K1)에 의해 $t_n = (-s_K) + w_n$이고, (K1), (K2), (K8)의 (ii), (K4)에 의해
$$
s_K + t_n = s_K + \bigl((-s_K) + w_n\bigr) = \bigl(s_K + (-s_K)\bigr) + w_n = w_n
$$
이다.

$(x_n)$의 급수가 수렴한다고 하자. $(s_n)$이 어떤 실수 $S$로 수렴하므로 꼬리 (1)에 의해 $(w_n)$도 $S$로 수렴하고, 사칙연산 (5)를 상수 $-s_K$에 쓰면 $(t_n)$은 $-s_K + S$로 수렴한다. 따라서 $K$-꼬리의 급수는 수렴한다.

거꾸로 $K$-꼬리의 급수가 수렴한다고 하자. $(t_n)$이 어떤 실수 $T$로 수렴하므로 사칙연산 (5)를 상수 $s_K$에 쓰면, $n$번째 항이 $s_K + t_n = w_n$인 수열 $(w_n)$은 $s_K + T$로 수렴한다. $(w_n)$은 $(s_n)$의 $K$-꼬리이므로 꼬리 (1)에 의해 $(s_n)$도 $s_K + T$로 수렴한다. 따라서 $(x_n)$의 급수는 수렴하고, 이로써 (2)의 첫 문장이 증명되었다. 둘째 문장은 첫 문장의 두 쪽이 모두 성립하지 않는 경우를 말한 것이다.

(3)의 가정 아래에서는 바로 앞 문단에 의해 $(s_n)$이 $s_K + T$로 수렴하고, $(s_n)$은 $S$로도 수렴하므로 [[limit-is-unique]]에 의해 $S = s_K + T$이다. 양변에 $-s_K$를 더하면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $S - s_K = T$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$K$번째 뒤의 항이 모두 같은 두 수열]
수열 $(z_n)$이 $K$보다 큰 모든 자연수 $n$에서 $z_n = x_n$을 만족한다고 합시다. 자연수 $n$은 양의 정수이므로 [[well-ordering-principle]]의 (Z7)에 의해 $n + K > 0 + K = K$이고, 따라서 두 수열의 $K$-꼬리는 $n$번째 항이 $z_{n+K} = x_{n+K}$로 같고, [[sequence]]의 수열의 같음에 의해 같은 수열입니다. 이 항목의 (2)에 의해 $(x_n)$의 급수가 수렴하는 것은 정확히 이 공통의 꼬리의 급수가 수렴할 때이고, $(z_n)$의 급수도 그렇습니다. 따라서 두 급수는 함께 수렴하거나 함께 발산합니다.

함께 수렴할 때 꼬리의 급수의 합을 $T$, $(z_n)$의 부분합 수열을 $(r_n)$이라 하면, (3)에 의해 두 합은 $s_K + T$와 $r_K + T$입니다. 처음 몇 개의 항을 바꾸면 수렴 여부는 그대로이고, 두 합의 차는 $K$번째 부분합의 차 $r_K - s_K$입니다.
:::

:::example[앞뒤 항이 지워지는 급수의 꼬리]
$x_n = n^{-1} - (n+1)^{-1}$로 둡니다. $n$번째 항이 $1 - (n+1)^{-1}$인 수열은 (K8)의 (iii)에 의해 $1^{-1} = 1$이므로 첫 항이 $1 - 2^{-1} = x_1$이고, (K1), (K2), (K8)의 (ii), (K4)로 정리하면 $\bigl(1 - (n+1)^{-1}\bigr) + \bigl((n+1)^{-1} - (n+2)^{-1}\bigr) = 1 - (n+2)^{-1}$을 만족하므로, [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 이것이 부분합 수열입니다. 곧 $s_n = 1 - (n+1)^{-1}$입니다. [[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $((n+1)^{-1})$은 $0$으로 수렴하고, (K9)에 의해 $s_n = 1 + (-1)(n+1)^{-1}$이므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 두 번 써서 $(s_n)$은 $1$로 수렴합니다. 급수의 합은 $S = 1$입니다.

이 항목의 (2)에 의해 $K$-꼬리의 급수도 수렴하고, (3)에 의해 그 합은
$$
T = S - s_K = 1 - \bigl(1 - (K+1)^{-1}\bigr) = (K+1)^{-1}
$$
입니다. (1)에 의해 꼬리의 부분합은 $t_n = s_{n+K} - s_K = (K+1)^{-1} - (n+K+1)^{-1}$이고, 꼬리의 $n$번째 항 $(n+K)^{-1} - (n+K+1)^{-1}$에서 보아도 첫 항은 $t_1 = (K+1)^{-1} - (K+2)^{-1}$로 맞습니다.
:::

:::counterexample[꼬리의 급수의 합은 원래 급수의 합과 다를 수 있다]
$x_1 = 1$이고 $n \ge 2$에서 $x_n = 0$인 수열을 봅니다. 모든 항이 $1$인 수열 $(v_n)$은 $v_1 = 1 = x_1$이고, 자연수 $n$에서 [[prime-number]]의 (Z1)과 (Z7)에 의해 $n + 1 \ge 1 + 1 = 2$이므로 $v_{n+1} = 1 = 1 + 0 = v_n + x_{n+1}$입니다. [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 $s_n = 1$이고, [[basic-limits]]의 (1)에 의해 급수의 합은 $1$입니다. 그런데 $1$-꼬리는 모든 항이 $0$인 수열이므로 그 부분합은 모두 $0$이고(이 항목의 (1)에 의해 $t_n = s_{n+1} - s_1 = 1 - 1 = 0$), 꼬리의 급수의 합은 $0$입니다.

수열에서는 꼬리를 떼어 내도 극한이 바뀌지 않지만([[tail-of-a-sequence|수열의 꼬리]]의 (2)), 급수에서는 떼어 낸 항들의 부분합 $s_K$만큼 합이 바뀝니다. 여기서는 $S - s_1 = 1 - 1 = 0$입니다.
:::

## 확인 질문

:::check[$(x_n)$의 급수가 수렴하고 합이 $S$일 때, $K$-꼬리의 $J$-꼬리의 급수의 합은 무엇인가? ($J$, $K$는 자연수)]
$S - s_{J+K}$입니다. $K$-꼬리의 급수의 합은 (3)에 의해 $T = S - s_K$이고, $K$-꼬리의 $J$번째 부분합은 (1)에 의해 $t_J = s_{J+K} - s_K$입니다. (3)을 $K$-꼬리와 그 $J$-꼬리에 다시 쓰면 구하는 합은 $T - t_J = (S - s_K) - (s_{J+K} - s_K) = S - s_{J+K}$입니다. 이것은 $(x_n)$의 $(J + K)$-꼬리의 급수의 합과 같습니다.
:::

:::check[$(x_n)$의 급수가 수렴하고, 모든 자연수 $K$에서 $K$-꼬리의 급수의 합이 $0$이면 $(x_n)$은 어떤 수열인가?]
$n \ge 2$에서 $x_n = 0$인 수열입니다($x_1$은 아무 수나 됩니다). (3)에 의해 모든 $K$에서 $S - s_K = 0$, 곧 $s_K = S$이므로 [[series-and-partial-sums|급수와 부분합]]의 (2)에 의해 모든 $n$에서 $x_{n+1} = s_{n+1} - s_n = S - S = 0$입니다. 거꾸로 $n \ge 2$에서 $x_n = 0$이면 모든 항이 $x_1$인 수열 $(v_n)$이 $v_1 = x_1$, $v_{n+1} = x_1 = x_1 + 0 = v_n + x_{n+1}$을 만족하므로 [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 모든 부분합이 $x_1$이고, $S = x_1$이고 모든 꼬리의 급수의 합은 $S - s_K = x_1 - x_1 = 0$입니다.
:::
