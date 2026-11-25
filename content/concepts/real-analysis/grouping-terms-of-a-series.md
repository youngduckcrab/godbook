---
title: 항을 묶은 급수
title_en: Grouping Terms of a Series
aliases: [급수의 항 묶기, 괄호 넣기, 결합법칙과 급수, grouping terms, inserting parentheses in a series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열의 항을 순서를 바꾸지 않고 첨자열이 정하는 묶음으로 더한 수열의 부분합은 원래 부분합 수열의 부분수열이다. 그래서 수렴하는 급수의 항을 묶은 급수는 같은 합으로 수렴한다. 거꾸로는 성립하지 않지만, 묶음의 크기가 유계이고 항이 0 으로 수렴하거나, 항이 모두 0 이상이면 성립한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, even-and-odd, convergent-sequence-is-bounded, subsequence, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, comparison-test, alternating-series-test, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, sum-of-a-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.3절 Example 2.5.11 (p.90–91), 2.5.5절 Proposition 2.5.17 의 증명 (p.94–95). 2.5.7절 Exercise 2.5.4 (p.97), Exercise 2.5.8 (p.98), Exercise 2.5.13 (p.98). 2.6.2절 Proposition 2.6.2 의 증명 (p.101)
    checked: original
    note: "출처는 항을 묶는 것을 정리로 진술하지 않고 연습문제로 둔다. Exercise 2.5.4(p.97) a)는 Σ x_n 이 수렴하면 Σ (x_{2n} + x_{2n+1}) 도 수렴함을 보이게 하고, b)는 그 역이 성립하지 않는 예를 찾게 한다. 이 항목의 (2)는 a)를 일반적인 첨자열로 넓힌 것이고(출처의 묶음은 첫 항 x_1 을 빼고 x_2 부터 둘씩 묶는다), (3)은 b)가 찾게 하는 예와 같은 종류이다. Exercise 2.5.13(p.98) a)는 어떤 자연수 m 에 대해 lim s_{mk} 가 있고 lim x_n = 0 이면 Σ x_n 이 수렴함을 보이게 하는데, 이 항목의 (4)를 p_j = mj, d = m 에 쓴 것과 같다. b)는 lim s_{2k} 가 있지만 항이 0 으로 가지 않는 예를 찾게 하고 (3)이 그런 예이다. c)는 항이 0 으로 가도 부분합의 부분수열만 수렴하고 급수는 발산하는 예를 찾게 하는데, 이것은 (4)에서 묶음의 크기가 유계라는 가정을 뺀 경우이다. Exercise 2.5.8(p.98)은 Σ (−1)ⁿ/n 의 수렴을 '이웃한 두 항의 합을 생각하라'는 힌트와 함께 묻는데, 예시 '교대 조화급수의 항을 둘씩 묶기'가 같은 급수를 같은 방법으로 묶는다. 출처 Proposition 2.6.2(교대급수 판정법)의 증명(p.101)은 짝수 번째 부분합 s_{2k} 의 수렴을 보인 뒤 항이 0 으로 간다는 것으로 s_{2k+1} 도 같은 극한으로 간다고 한다. 이것은 (4)를 p_j = 2j 에 쓴 것과 같은 논법이고, 해석학 입문 alternating-series-test 의 (3)이 그 단계를 진술로 둔 것이다. 출처 Example 2.5.11(p.90–91)의 조화급수의 발산 증명과 p-급수의 수렴 증명(Proposition 2.5.17, p.94–95)은 항을 2ⁱ 개씩 묶은 부분합 s_{2^k}, s_{2^k − 1} 을 어림하고 부분합이 단조라는 것을 쓰는데, 항이 0 이상인 급수에서 묶은 부분합으로 판정하는 (5)와 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨의 합 공식을 작은 경우에 대입, 예의 합의 어림 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 첨자열과 부분수열은 [[subsequence]]의 것이며, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. 유한 합 $\sum_{i=m}^{n}$은 [[finite-sum-of-reals]]의 것이고, 급수의 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]]의 것이다.

**항을 묶은 수열.** $(x_n)$을 수열, $(s_n)$을 그 부분합 수열이라 하고, $(p_j)$를 첨자열이라 하자. 자연수 $j$에 대하여
$$
y_1 = \sum_{i=1}^{p_1} x_i, \qquad y_{j+1} = \sum_{i=p_j+1}^{p_{j+1}} x_i
$$
로 정한 수열 $(y_j)$를 $(x_n)$의 항을 $(p_j)$로 **묶은 수열**이라 하고, $(y_j)$의 급수를 $(x_n)$의 **항을 묶은 급수**(series with grouped terms)라 한다. $y_1$은 첫 $p_1$개의 항의 합이고, $y_{j+1}$은 번호가 $p_j + 1$부터 $p_{j+1}$까지인 $p_{j+1} - p_j$개의 항의 합이다. 이 수들을 각 묶음의 **크기**라 한다. 항의 순서는 바뀌지 않는다.

다음이 성립한다. 아래에서 $(y_j)$는 $(x_n)$의 항을 $(p_j)$로 묶은 수열이다.

1. (묶은 급수의 부분합) $(y_j)$의 $j$번째 부분합은 $s_{p_j}$이다. 곧 묶은 급수의 부분합 수열은 첨자열 $(p_j)$로 얻은 $(s_n)$의 부분수열 $(s_{p_j})$이다.
2. (수렴하는 급수의 항을 묶기) $(x_n)$의 급수가 수렴하면 $(y_j)$의 급수도 수렴하고 두 합이 같다. 곧 $\sum_{j=1}^{\infty} y_j = \sum_{n=1}^{\infty} x_n$이다.
3. ((2)의 역은 성립하지 않는다) $n$번째 항이 $x_n = (-1)^{n-1}$인 수열의 항을 $p_j = 2j$로 묶으면 모든 $j$에서 $y_j = 0$이므로 묶은 급수는 수렴하고 그 합은 $0$이다. 그러나 $(x_n)$은 $0$으로 수렴하지 않으므로 $(x_n)$의 급수는 발산한다.
4. (묶음의 크기가 유계이고 항이 $0$으로 가는 경우) 자연수 $d$가 있어 모든 자연수 $j$에서 $p_{j+1} - p_j \le d$이고, $(x_n)$이 $0$으로 수렴한다고 하자. 그러면 $(y_j)$의 급수가 수렴할 때 $(x_n)$의 급수도 수렴하고 두 합이 같다.
5. (항이 $0$ 이상인 경우) 모든 자연수 $n$에서 $0 \le x_n$이면, $(y_j)$의 급수가 수렴할 때 $(x_n)$의 급수도 수렴하고 두 합이 같다.
:::

:::english
Sequences, bounded, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits; index sequences and subsequences are those of the entry on subsequences; and sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums. The finite sum $\sum_{i=m}^{n}$ is that of the entry on finite sums of reals, and the symbol $\sum_{n=1}^{\infty}$ for the sum of a series is that of the entry on the sum of a series.

**Grouped sequence.** Let $(x_n)$ be a sequence with sequence of partial sums $(s_n)$, and let $(p_j)$ be an index sequence. The sequence $(y_j)$ defined for natural numbers $j$ by
$$
y_1 = \sum_{i=1}^{p_1} x_i, \qquad y_{j+1} = \sum_{i=p_j+1}^{p_{j+1}} x_i
$$
is called the sequence obtained by **grouping** the terms of $(x_n)$ by $(p_j)$, and the series of $(y_j)$ is called the **series with grouped terms** of $(x_n)$. $y_1$ is the sum of the first $p_1$ terms, and $y_{j+1}$ is the sum of the $p_{j+1} - p_j$ terms with indices from $p_j + 1$ to $p_{j+1}$. These numbers are called the **sizes** of the groups. The order of the terms is not changed.

The following hold. Below, $(y_j)$ is the sequence obtained by grouping the terms of $(x_n)$ by $(p_j)$.

1. (Partial sums of the grouped series) The $j$th partial sum of $(y_j)$ is $s_{p_j}$. That is, the sequence of partial sums of the grouped series is the subsequence $(s_{p_j})$ of $(s_n)$ obtained by the index sequence $(p_j)$.
2. (Grouping a convergent series) If the series of $(x_n)$ converges, then the series of $(y_j)$ also converges and the two sums are equal: $\sum_{j=1}^{\infty} y_j = \sum_{n=1}^{\infty} x_n$.
3. (The converse of (2) fails) If the terms of the sequence with $n$th term $x_n = (-1)^{n-1}$ are grouped by $p_j = 2j$, then $y_j = 0$ for every $j$, so the grouped series converges with sum $0$. But $(x_n)$ does not converge to $0$, so the series of $(x_n)$ diverges.
4. (Bounded group sizes and terms tending to $0$) Suppose there is a natural number $d$ with $p_{j+1} - p_j \le d$ for every natural number $j$, and $(x_n)$ converges to $0$. Then, if the series of $(y_j)$ converges, the series of $(x_n)$ also converges and the two sums are equal.
5. (Nonnegative terms) If $0 \le x_n$ for every natural number $n$, then, if the series of $(y_j)$ converges, the series of $(x_n)$ also converges and the two sums are equal.
:::

## 직관

급수의 부분합은 항을 처음부터 하나씩 더해 가며 적은 기록입니다. 항을 묶는 것은 그 기록을 매번 보지 않고 묶음이 끝날 때마다만 보는 것과 같습니다. 그래서 묶은 급수의 부분합은 원래 부분합 가운데 일부를 순서대로 뽑은 것, 곧 부분수열입니다((1)). 원래 기록이 한 값으로 다가가면 그 일부도 같은 값으로 다가가므로, 수렴하는 급수는 어떻게 묶어도 같은 합을 줍니다((2)). 유한 합에서 괄호를 어디에 치든 결과가 같다는 결합법칙의 급수판입니다.

거꾸로는 다릅니다. 묶음이 끝나는 순간만 보면 그 사이에 기록이 크게 출렁이는 것을 놓칠 수 있습니다. $1 - 1 + 1 - 1 + \cdots$은 부분합이 $1, 0, 1, 0, \dots$으로 출렁여 수렴하지 않지만, 둘씩 묶으면 $0 + 0 + \cdots$이 되어 출렁임이 감추어집니다((3)). 그래서 괄호를 친 급수가 수렴한다고 해서 언제나 괄호를 지울 수 있는 것은 아닙니다.

출렁임을 막는 조건이 (4)와 (5)입니다. (4)에서는 한 묶음 안의 항이 $d$개 이하이고 각 항이 $0$에 가까워지므로, 묶음 중간의 부분합도 묶음 끝의 부분합에서 크게 벗어나지 못합니다. 증명에서 이 두 가정은 묶음 중간의 부분합과 묶음이 시작하기 직전의 부분합의 차를 누르는 데 쓰입니다. (5)에서는 항이 $0$ 이상이라 부분합이 줄지 않으므로 출렁임 자체가 없습니다.

## 증명

:::idea
묶은 급수의 부분합이 $s_{p_j}$임을 귀납법으로 보이면 (2)는 부분수열의 극한이다. (4)는 $n$이 들어 있는 묶음의 끝 $p_j \le n < p_{j+1}$을 정렬 원리로 정하고, $s_n$과 $s_{p_j}$의 차가 많아야 $d$개의 작은 항의 합임을 쓴다.
:::

:::hint
$y_{j+1}$은 [[finite-sum-of-reals]]의 (1)에 의해 두 부분합의 차이다.
:::

:::hint
(4)에서 $n \ge p_1$이면 $n < p_j$인 가장 작은 $j$를 생각하라. 그 바로 앞의 번호가 $n$이 들어 있는 묶음을 정한다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루며, 순서 성질 (10)에 의해 그 부등식을 실수의 부등식으로 읽어도 된다. 첨자열의 값은 자연수이고 $p_j < p_{j+1}$이므로 $p_j \le p_{j+1}$이어서, $y_{j+1}$의 합은 [[finite-sum-of-reals]]의 조건 $1 \le p_j + 1$, $p_j \le p_{j+1}$을 만족한다. 각 $j$마다 $y_j$는 식으로 정해진 실수이므로 [[sequence]]의 (1)에 의해 $(y_j)$는 수열이다.

**1의 증명.** $(y_j)$의 부분합 수열을 $(t_j)$라 하고 $t_j = s_{p_j}$를 $j$에 대한 귀납법으로 보인다. [[finite-sum-of-reals]]의 (1)에 의해 $t_1 = y_1 = \sum_{i=1}^{p_1} x_i = s_{p_1}$이다. $t_j = s_{p_j}$이면, [[series-and-partial-sums]]의 부분합의 정의와 [[finite-sum-of-reals]]의 (1)(자연수 $p_j \le p_{j+1}$에서 $\sum_{i=p_j+1}^{p_{j+1}} x_i = s_{p_{j+1}} - s_{p_j}$)에 의해
$$
\begin{aligned}
t_{j+1} &= t_j + y_{j+1} \\
&= s_{p_j} + (s_{p_{j+1}} - s_{p_j}) \\
&= s_{p_{j+1}}
\end{aligned}
$$
이다((K1), (K2), (K4), (K5)). 따라서 모든 $j$에서 $t_j = s_{p_j}$이고, [[subsequence]]의 부분수열의 정의에 의해 $(t_j)$는 $(s_n)$의 부분수열 $(s_{p_j})$이다.

**2의 증명.** $(x_n)$의 급수가 수렴하고 그 합이 $S$이면 $(s_n)$은 $S$로 수렴한다. (1)과 [[subsequence]]의 (3)에 의해 $(t_j) = (s_{p_j})$도 $S$로 수렴하므로 $(y_j)$의 급수는 수렴하고 그 합은 $S$이다. [[sum-of-a-series]]의 기호로 쓰면 $\sum_{j=1}^{\infty} y_j = S = \sum_{n=1}^{\infty} x_n$이다.

**3의 증명.** [[power-of-a-real-number]]의 (5)에 의해 $(-1)^{n-1}$은 $n - 1$이 짝수이면 $1$, 홀수이면 $-1$이다. 자연수 $j$에서 $2j - 1$은 홀수이고 $2j$는 짝수이므로([[even-and-odd|짝수와 홀수]]에서 받아들인 사실과 $2j - 2 = 2(j - 1)$) $x_{2j-1} = 1$, $x_{2j} = -1$이다. $p_1 = 2$이고 $p_j + 1 = 2j + 1$, $p_{j+1} = 2j + 2$이므로 [[finite-sum-of-reals]]의 (2), (3)에 의해 $y_1 = x_1 + x_2 = 0$이고 $y_{j+1} = x_{2j+1} + x_{2j+2} = 1 + (-1) = 0$이다. 모든 항이 $0$인 수열의 부분합은 모두 $0$이므로 [[basic-limits]]의 (1)에 의해 묶은 급수는 수렴하고 합은 $0$이다. $p_j = 2j$는 [[subsequence]]의 (2)에 의해 첨자열이다($2j < 2j + 2$). 한편 모든 $n$에서 $|x_n| = 1$이다. $(x_n)$이 $0$으로 수렴한다면 [[limit-of-sequence]]의 정의를 $1$에 쓴 번호 $M$에서 $|x_M| < 1$이어야 하므로 모순이다. 따라서 $(x_n)$은 $0$으로 수렴하지 않고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 $(x_n)$의 급수는 발산한다.

**4의 증명.** $(y_j)$의 급수의 합을 $S$라 하자. (1)에 의해 $(s_{p_j})$는 $S$로 수렴한다.

먼저 $n$이 $p_1$ 이상인 자연수이면 $p_j \le n < p_{j+1}$인 자연수 $j$가 있음을 보인다. 집합 $E = \{j \in \mathbb{N} : n < p_j\}$는 [[subsequence]]의 (1)에 의해 $n < n + 1 \le p_{n+1}$이므로 $n + 1$을 원소로 갖는다. [[well-ordering-principle|정렬 원리]]에 의해 $E$의 가장 작은 원소 $q$가 있다. $p_1 \le n$이므로 $1 \notin E$이고 $q \ne 1$이므로, (Z5)와 (Z1)에 의해 $q \ge 2$이고 $j = q - 1$은 자연수이다. $j < q$이므로 $j \notin E$, 곧 $p_j \le n$이고, $p_{j+1} = p_q > n$이다.

$\varepsilon$을 양의 실수라 하자. $(s_{p_j})$가 $S$로 수렴하므로 자연수 $J$가 있어 $J$ 이상인 모든 $j$에서 $|s_{p_j} - S| < \varepsilon/2$이다. $(x_n)$이 $0$으로 수렴하고 $\varepsilon/(2d)$가 양수이므로 자연수 $K$가 있어 $K$ 이상인 모든 $i$에서 $|x_i| < \varepsilon/(2d)$이다. $N = p_J + K + d$로 두고 $n \ge N$인 자연수 $n$을 생각하자. 순서 성질 (2)와 $1 \le p_1 \le p_J$([[subsequence]]의 정의)에 의해 $n \ge p_1$이므로, 위에서 본 것처럼 $p_j \le n < p_{j+1}$인 자연수 $j$가 있다.

- $j \ge J$이다. $j < J$라면 (Z1)에 의해 $j + 1 \le J$이고, 첨자열의 정의에 의해 $p_{j+1} \le p_J \le N \le n$이므로 $n < p_{j+1}$에 어긋난다.
- $p_j < i \le n$인 정수 $i$는 $i \ge K$이다. 가정에 의해 $p_{j+1} \le p_j + d$이므로 $n < p_j + d$, 곧 $n - d < p_j < i$이고, $n \ge N$에서 $n - d \ge p_J + K \ge K$이다.
- $p_j \le n$이고 $n - p_j < d$이다.

[[finite-sum-of-reals]]의 (1)에 의해 $s_n - s_{p_j} = \sum_{i=p_j+1}^{n} x_i$이고($p_j = n$이면 빈 합 $0$), [[linearity-and-order-of-finite-sums]]의 (5)와 (4)에 의해
$$
\begin{aligned}
|s_n - s_{p_j}| &\le \sum_{i=p_j+1}^{n} |x_i| \le (n - p_j)\,\frac{\varepsilon}{2d} \\
&\le d \cdot \frac{\varepsilon}{2d} = \frac{\varepsilon}{2}
\end{aligned}
$$
이다. 마지막 부등식은 $0 \le n - p_j < d$와 순서 성질 (4)의 (iii)에 의한 것이다. [[triangle-inequality|삼각부등식]]에 의해
$$
\begin{aligned}
|s_n - S| &\le |s_n - s_{p_j}| + |s_{p_j} - S| \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이다(순서 성질 (2)의 (iv)). 따라서 $(s_n)$은 $S$로 수렴하고, $(x_n)$의 급수는 수렴하며 합은 $S$이다.

**5의 증명.** $(y_j)$의 급수가 수렴하면 (1)에 의해 $(s_{p_j})$가 수렴하고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 모든 $j$에서 $s_{p_j} \le B$인 실수 $B$가 있다. 모든 $x_n \ge 0$이므로 [[series-and-partial-sums]]의 (3)에 의해 $(s_n)$은 단조증가이다. 자연수 $n$에서 [[subsequence]]의 (1)에 의해 $n \le p_n$이므로 [[sequence]]의 (4)에 의해 $s_n \le s_{p_n} \le B$이다. 따라서 $(s_n)$은 위로 유계이고, [[comparison-test|비교 판정법]]의 (1)에 의해 $(x_n)$의 급수는 수렴한다. 그 합이 $(y_j)$의 급수의 합과 같다는 것은 (2)이다. $\blacksquare$
:::

## 예시와 반례

:::example[묶음의 크기가 모두 1 인 경우]
$p_j = j$로 두면 [[subsequence]]의 (4)에 의해 첨자열이고, $y_1 = \sum_{i=1}^{1} x_i = x_1$, $y_{j+1} = \sum_{i=j+1}^{j+1} x_i = x_{j+1}$입니다([[finite-sum-of-reals]]의 (2)). 곧 묶은 수열은 $(x_n)$ 자신이고, (1)의 부분합 $s_{p_j} = s_j$도 원래의 부분합입니다. (4)의 묶음의 크기에 관한 가정은 $d = 1$로 맞지만, 이 경우 (4)는 아무것도 새로 말하지 않습니다.
:::

:::example[교대 조화급수의 항을 둘씩 묶기]
$x_n = (-1)^n n^{-1}$인 수열의 급수는 [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 수렴합니다. $p_j = 2j$로 묶으면 $y_1 = -1 + 1/2 = -1/2$이고
$$
\begin{aligned}
y_{j+1} &= -\frac{1}{2j + 1} + \frac{1}{2j + 2} \\
&= -\frac{1}{(2j + 1)(2j + 2)}
\end{aligned}
$$
입니다. (2)에 의해 이 묶은 급수도 수렴하고 합은 교대 조화급수의 합과 같습니다. 묶은 항은 모두 음수이므로 묶은 급수의 부분합은 단조감소합니다. 원래 급수에서는 부분합이 오르내리지만, 짝수 번째 부분합만 보면 단조라는 것이 묶은 급수에서 드러납니다.
:::

:::counterexample[다르게 묶은 1 − 1 + 1 − ⋯]
(3)의 수열 $1, -1, 1, -1, \dots$을 $p_1 = 1$, $p_j = 2j - 1$($j \ge 2$)로 묶으면, 곧 첫 항만 따로 두고 그 뒤를 둘씩 묶으면 $y_1 = 1$이고 $y_{j+1} = x_{2j} + x_{2j+1} = -1 + 1 = 0$이어서 묶은 급수의 합은 $1$입니다. 같은 발산하는 급수를 (3)처럼 묶으면 합이 $0$이었으므로, 발산하는 급수는 묶는 방법에 따라 서로 다른 합이 나올 수 있습니다. 이 수열은 항이 $0$으로 가지 않으므로 (4)의 가정을 만족하지 않습니다.
:::

## 확인 질문

:::check[$x_n = (-1)^n n^{-1}$인 수열의 항을 셋씩, 곧 $p_j = 3j$로 묶은 급수는 수렴하는가? 합은?]
수렴하고, 합은 교대 조화급수의 합과 같습니다. 원래 급수가 수렴하므로 (2)를 바로 쓸 수 있습니다. (4)를 쓰지 않아도 됩니다.
:::

:::check[항이 모두 $0$ 이상인 수열의 항을 $p_j = j^2$으로 묶은 급수가 수렴하면 원래 급수는 어떠한가?]
수렴하고 합도 같습니다. 묶음의 크기 $(j + 1)^2 - j^2 = 2j + 1$은 유계가 아니어서 (4)는 쓸 수 없지만, 항이 $0$ 이상이므로 (5)를 쓸 수 있습니다. $p_j = j^2$이 첨자열인 것은 $j^2 < (j + 1)^2$이고 [[subsequence]]의 (2)에 의한 것입니다.
:::
