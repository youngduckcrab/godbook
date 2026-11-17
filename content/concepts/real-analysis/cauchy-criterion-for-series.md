---
title: 급수의 코시 판정법
title_en: Cauchy Criterion for Series
aliases: [코시 급수, 급수의 코시 조건, Cauchy series, Cauchy criterion for series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열 (x_n) 의 급수가 수렴하는 것은 정확히, 모든 양수 ε 에 대하여 자연수 M 이 있어 M ≤ n < k 인 모든 자연수 n, k 에서 |s_k − s_n| < ε 일 때이다. 부분합 수열이 코시 수열인 급수를 코시 급수라 한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, cauchy-sequence, cauchy-iff-convergent, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.2절 Definition 2.5.7, 그 뒤 문단과 Proposition 2.5.8 (p.89)
    checked: original
    note: "출처의 Definition 2.5.7(p.89)은 부분합 수열이 코시 수열인 급수를 Cauchy series 라 한다. 그 뒤 문단은 수열이 수렴하는 것은 정확히 코시일 때이므로 급수가 수렴하는 것은 정확히 코시일 때라고 하고, 코시 조건의 n ≥ M, k ≥ M 을 'Without loss of generality, we assume n < k' 로 줄인 뒤 첨자 n + 1 부터 k 까지의 합으로 쓰며, 'We have proved the following simple proposition' 이라며 Proposition 2.5.8 을 적는다. 이 항목은 유한 합 대신 s_k − s_n 으로 쓰고, n < k 로 줄이는 단계를 (Z5)로 세 경우를 나누어 보인다. 이 항목의 (1)은 Definition 2.5.7 과 그 뒤 문단의 첫 결론이고, (2)는 Proposition 2.5.8 에 수렴과의 동치를 합친 것이다. (3)은 출처의 Proposition 2.5.9 의 증명(p.90)이 코시 조건에서 k = n + 1 로 두는 것과 같다. 출처는 그것으로 항이 0 으로 감을 증명하고, 이 사이트는 그 사실을 terms-of-convergent-series-tend-to-zero 에서 코시 없이 증명했다. 반례(조화급수에서 k = n + 1 만으로는 부족하다)의 생각은 출처 p.85(Remark 2.4.6 뒤 문단)가 조화급수의 부분합을 예로 이웃한 두 항의 차가 0 으로 가도 코시가 아닐 수 있다고 적는 것과 같다. 확인 질문 1 은 같은 p.85 문단과 연습문제 2.5.12(p.98)가 고정된 j 에서 |x_{n+j} − x_n| → 0 이라고 하는 것의 j = 2 인 경우이다. 확인 질문 2 는 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열과 수렴은 [[sequence]], [[limit-of-sequence]]의 것이고, 코시 수열은 [[cauchy-sequence]]의 것이며, 부분합 수열과 급수의 수렴은 [[series-and-partial-sums]]의 것이다. $(x_n)$을 수열, $(s_n)$을 그 부분합 수열이라 하자. $(x_n)$의 급수가 **코시 급수**(Cauchy series)라는 것은 정확히 $(s_n)$이 코시 수열일 때이다.

1. $(x_n)$의 급수가 수렴하는 것은 정확히 그 급수가 코시 급수일 때이다.
2. (**급수의 코시 판정법**, Cauchy criterion for series) $(x_n)$의 급수가 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $M \le n < k$인 모든 자연수 $n$, $k$에서 $|s_k - s_n| < \varepsilon$일 때이다.
3. $(x_n)$의 급수가 수렴하면, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| < \varepsilon$이다.
:::

:::english
Sequences and convergence are those of the entries on sequences and on the limit of a sequence; Cauchy sequences are those of the entry on Cauchy sequences; and sequences of partial sums and convergence of series are those of the entry on series and partial sums. Let $(x_n)$ be a sequence and $(s_n)$ its sequence of partial sums. The series of $(x_n)$ is a **Cauchy series** exactly when $(s_n)$ is a Cauchy sequence.

1. The series of $(x_n)$ converges exactly when it is a Cauchy series.
2. (**Cauchy criterion for series**) The series of $(x_n)$ converges exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $|s_k - s_n| < \varepsilon$ for all natural numbers $n$, $k$ with $M \le n < k$.
3. If the series of $(x_n)$ converges, then for every positive real number $\varepsilon$ there is a natural number $M$ such that $|x_{n+1}| < \varepsilon$ for every natural number $n \ge M$.
:::

## 직관

급수가 수렴하는지를 정의대로 보이려면 합이 될 수를 먼저 알아야 합니다. 코시 판정법은 그 수를 몰라도 되게 해 줍니다. 충분히 뒤로 가면, 어느 두 부분합 사이에 더해지는 항들의 몫 $s_k - s_n$이 얼마든지 작아진다는 것만 보이면 됩니다. 은행 잔고가 어느 날부터는 어떤 두 날 사이에도 거의 바뀌지 않는다면, 잔고가 결국 어떤 금액으로 다가간다고 믿을 수 있다는 것입니다. 이 믿음을 보장하는 것이 [[cauchy-iff-convergent|코시 수열은 수렴한다]]는 정리, 곧 실수의 코시 완비성입니다.

코시 수열의 정의는 $n$과 $k$를 대칭으로 다루지만, $|s_k - s_n| = |s_n - s_k|$이고 $n = k$이면 차가 $0$이므로 $n < k$인 경우만 보면 됩니다. (2)가 그것입니다. 비유가 맞지 않는 곳은 "어떤 두 날"입니다. $k = n + 1$, 곧 이웃한 두 날만 보아서는 부족합니다(아래 반례).

## 증명

:::idea
(1)은 코시 수열과 수렴의 동치를 부분합 수열에 쓴 것이다. (2)는 코시 수열의 정의에서 $n$과 $k$의 크기를 삼분법으로 나누어 $n < k$인 경우로 줄인다.
:::

:::hint
$n = k$이면 $|s_k - s_n| = 0$이고, $k < n$이면 $n$과 $k$의 이름을 바꾸어 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]], "절댓값 (3)"은 [[absolute-value]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고(자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]에 의해 양의 정수이다), 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다.

**1의 증명.** 급수가 수렴한다는 것은 $(s_n)$이 수렴한다는 것이고, 코시 급수라는 것은 $(s_n)$이 코시 수열이라는 것이다. [[cauchy-iff-convergent|코시 수열은 수렴한다]]는 정리의 (1)을 $(s_n)$에 쓰면 두 조건은 동치이다.

**2의 증명.** (1)에 의해, 오른쪽 조건(아래에서 "조건 (C)")이 $(s_n)$이 코시 수열이라는 것과 동치임을 보이면 된다.

$(s_n)$이 코시 수열이라 하자. 양의 실수 $\varepsilon$에 대하여 [[cauchy-sequence]]의 정의에 의해 $n \ge M$이고 $k \ge M$인 모든 자연수 $n$, $k$에서 $|s_n - s_k| < \varepsilon$인 자연수 $M$이 있다. $M \le n < k$이면 (Z6)에 의해 $k \ge M$이므로 $|s_n - s_k| < \varepsilon$이고, 절댓값 (3)에 의해 $|s_k - s_n| = |s_n - s_k| < \varepsilon$이다. 따라서 조건 (C)가 성립한다.

거꾸로 조건 (C)가 성립한다고 하자. 양의 실수 $\varepsilon$에 대하여 조건 (C)의 자연수 $M$을 잡고, $n \ge M$이고 $k \ge M$인 자연수 $n$, $k$를 잡는다. (Z5)에 의해 $n < k$, $n = k$, $k < n$ 가운데 하나이다.

- $n < k$이면 $M \le n < k$이므로 조건 (C)와 절댓값 (3)에 의해 $|s_n - s_k| = |s_k - s_n| < \varepsilon$이다.
- $n = k$이면 (K8)의 (ii)에 의해 $s_n - s_k = 0$이고, 절댓값 (2)에 의해 $|0| = 0 < \varepsilon$이다.
- $k < n$이면 $M \le k < n$이므로 조건 (C)를 자연수 $k$, $n$에 쓰면 $|s_n - s_k| < \varepsilon$이다.

따라서 $(s_n)$은 코시 수열이다.

**3의 증명.** 양의 실수 $\varepsilon$에 대하여 (2)의 자연수 $M$을 잡는다. $n \ge M$인 자연수 $n$에서 (L3)에 의해 $n < n + 1$이므로 $|s_{n+1} - s_n| < \varepsilon$이고, [[series-and-partial-sums|급수와 부분합]]의 (2)에 의해 $s_{n+1} - s_n = x_{n+1}$이다. 따라서 $|x_{n+1}| < \varepsilon$이다. $\blacksquare$
:::

## 예시와 반례

:::counterexample[이웃한 부분합만 보아서는 부족하다]
(3)의 역은 성립하지 않습니다. 조화급수의 항은 $(n+1)^{-1}$이 $0$으로 수렴하므로([[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)) 모든 $\varepsilon > 0$에 대하여 $n \ge M$이면 $|s_{n+1} - s_n| = (n + 1)^{-1} < \varepsilon$인 $M$이 있습니다. 그러나 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 조화급수는 발산하므로, (2)의 조건은 성립하지 않습니다. 실제로 그 항목의 (1)에 의해 $\varepsilon = 2^{-1}$에서는 어떤 $M$을 잡아도 $n = M$, $k = 2M$이 $|s_k - s_n| \ge 2^{-1}$을 줍니다.
:::

## 확인 질문

:::check[(2)의 조건을 "$M \le n$이고 $k = n + 2$"인 경우로만 줄이면 급수의 수렴과 동치인가?]
아닙니다. 조화급수에서 $s_{n+2} - s_n = (n+1)^{-1} + (n+2)^{-1}$은 $0$으로 수렴하므로 줄인 조건은 성립하지만, 조화급수는 발산합니다([[harmonic-series-diverges|조화급수의 발산]]의 (2)). 고정된 거리의 두 부분합만 보아서는 부족하고, (2)처럼 $n < k$인 모든 $k$를 보아야 합니다.
:::

:::check[(3)을 써서, 첫째 항이 $1$이고 공비가 $1$인 등비급수가 발산함을 보일 수 있는가?]
있습니다. 모든 항이 $1$이므로 $\varepsilon = 2^{-1}$이면 어떤 $M$에서도 $n = M$이 $|x_{n+1}| = 1 \ge 2^{-1}$을 줍니다. 수렴한다면 (3)에 의해 $|x_{M+1}| < 2^{-1}$인 $M$이 있어야 하므로 발산합니다. 이것은 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)과 같은 결론입니다.
:::
