---
title: 코시 응축 판정법
title_en: Cauchy Condensation Test
aliases: [응축 판정법, 코시 응축 원리, Cauchy condensation test, Cauchy condensation principle]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 항이 0 이상이고 단조감소인 수열 (x_n) 의 급수가 수렴하는 것은 정확히 k 에서의 값이 2^k x_{2^k} 인 0부터 번호가 붙은 수열의 급수가 수렴할 때이다. 두 급수의 부분합과 합 사이의 부등식도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, limits-preserve-inequalities, terms-of-convergent-series-tend-to-zero, basic-limits, series-and-partial-sums, harmonic-series-diverges, comparison-test, finite-sum-of-reals, sum-of-a-series, series-indexed-from-zero]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.7절 Exercises, Exercise 2.5.15 (p.99). 2.5.5절 Comparison test and the p-series, Proposition 2.5.17 의 증명 (p.94–95). 2.5.3절 Example 2.5.11 (p.90–91)
    checked: original
    note: "출처 연습문제 2.5.15(p.99, Challenging)는 양수로 된 감소수열 {x_n} 에 대해 Σ_{n=1}^∞ x_n 이 수렴하는 것은 정확히 Σ_{n=1}^∞ 2ⁿ x_{2ⁿ} 이 수렴할 때라는 것(Cauchy condensation principle)을 증명하라고 하고, p-급수의 증명이 일반화된다고 적는다. 이 항목은 항이 0 이상인 경우로 진술하고 응축 급수를 0 부터 번호 붙여(첫 항 x_1) 쓴다. 1 부터 번호 붙인 출처의 급수와 수렴 여부가 같다는 것은 (4)에 적었다. 출처는 증명을 연습문제로 둔다. 증명은 이 항목이 썼다. 묶음 하나를 2^k 개의 같은 항으로 위에서 누르는 발상은 Proposition 2.5.17 의 증명(p.94–95)이, 아래에서 누르는 발상은 조화급수의 발산을 보이는 Example 2.5.11(p.90–91)이 쓴다. (1)(2)의 부분합 부등식과 (3)의 합의 부등식은 이 두 발상을 부등식으로 적은 것이다. 예시 '조화급수에 쓰기'는 Example 2.5.11 과 같은 결론을 같은 묶음으로 얻는 것이다. 확인 질문 'x_n = (n³)⁻¹ 이면 응축 수열의 값은 무엇이고, (x_n)의 급수는 수렴하는가?'의 수열은 Proposition 2.5.17 의 p = 3 인 경우이다. 같은 절의 연습문제 2.5.16(p.99)은 이 판정법으로 ln n/n², 1/(n ln n) 같은 급수를 판정하게 하고, 연습문제 2.5.7(p.98)은 감소하고 급수가 수렴하는 수열에서 n x_n 이 0 으로 감을 보이게 한다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(적분 판정 예의 적분과 번호 옮김 대조, 출처의 극한 비교 진술 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 단조감소, 위로 유계, 수렴은 [[sequence]], [[limit-of-sequence]]의 것이고, 부분합 수열과 급수의 수렴·발산은 [[series-and-partial-sums]]의 것이다. 유한 합 $\sum_{n=1}^{k}$는 [[finite-sum-of-reals]], 급수의 합 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]], 0부터 번호가 붙은 수열과 그 유한 합 $\sum_{k=0}^{K}$, 급수의 합 $\sum_{k=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이다. 거듭제곱 $2^k$는 [[power-of-a-real-number]]의 것이고, $0$ 이상인 정수 $k$에서 자연수이다.

$(x_n)$을 모든 자연수 $n$에서 $0 \le x_{n+1} \le x_n$인 수열, 곧 항이 $0$ 이상이고 단조감소인 수열이라 하자. $0$ 이상인 정수 $k$에서의 값이 $2^k x_{2^k}$인 0부터 번호가 붙은 수열을 $(x_n)$의 **응축 수열**(condensed sequence)이라 하고, 그 급수를 **응축 급수**라 한다. 다음이 성립한다.

1. (부분합의 위 어림) $0$ 이상인 모든 정수 $K$에서
   $$
   \sum_{n=1}^{2^{K+1} - 1} x_n \le \sum_{k=0}^{K} 2^k x_{2^k}
   $$
   이다.
2. (부분합의 아래 어림) $0$ 이상인 모든 정수 $K$에서
   $$
   \sum_{k=0}^{K+1} 2^k x_{2^k} \le x_1 + 2 \sum_{n=1}^{2^{K+1} - 1} x_n
   $$
   이다.
3. (**코시 응축 판정법**, Cauchy condensation test) $(x_n)$의 급수가 수렴하는 것은 정확히 응축 급수가 수렴할 때이다. 이때
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_n &\le \sum_{k=0}^{\infty} 2^k x_{2^k} \\
   &\le x_1 + 2 \sum_{n=1}^{\infty} x_n
   \end{aligned}
   $$
   이다.
4. (1부터 번호 붙인 꼴) 응축 급수가 수렴하는 것은 정확히 $k$번째 항이 $2^k x_{2^k}$인 수열 $(2^k x_{2^k})_{k \ge 1}$의 급수가 수렴할 때이다. 따라서 $(x_n)$의 급수가 수렴하는 것은 정확히 그 급수가 수렴할 때이다.
:::

:::english
Sequences, monotone decreasing, bounded above and convergence are those of the entries on sequences and on the limit of a sequence, and the sequence of partial sums and convergence and divergence of a series are those of the entry on series and partial sums. The finite sum $\sum_{n=1}^{k}$ is that of the entry on finite sums of real numbers, the sum of a series $\sum_{n=1}^{\infty}$ that of the entry on the notation for the sum of a series, and sequences indexed from zero, their finite sums $\sum_{k=0}^{K}$ and series sums $\sum_{k=0}^{\infty}$ those of the entry on sums of sequences indexed from zero. The power $2^k$ is that of the entry on powers of a real number; for every integer $k \ge 0$ it is a natural number.

Let $(x_n)$ be a sequence with $0 \le x_{n+1} \le x_n$ for every natural number $n$, that is, a monotone decreasing sequence with nonnegative terms. The sequence indexed from zero whose value at each integer $k \ge 0$ is $2^k x_{2^k}$ is called the **condensed sequence** of $(x_n)$, and its series the **condensed series**. The following hold.

1. (Upper estimate for partial sums) For every integer $K \ge 0$,
   $$
   \sum_{n=1}^{2^{K+1} - 1} x_n \le \sum_{k=0}^{K} 2^k x_{2^k} .
   $$
2. (Lower estimate for partial sums) For every integer $K \ge 0$,
   $$
   \sum_{k=0}^{K+1} 2^k x_{2^k} \le x_1 + 2 \sum_{n=1}^{2^{K+1} - 1} x_n .
   $$
3. (**Cauchy condensation test**) The series of $(x_n)$ converges exactly when the condensed series converges. In that case
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_n &\le \sum_{k=0}^{\infty} 2^k x_{2^k} \\
   &\le x_1 + 2 \sum_{n=1}^{\infty} x_n
   \end{aligned}
   $$
4. (Form indexed from 1) The condensed series converges exactly when the series of the sequence $(2^k x_{2^k})_{k \ge 1}$ whose $k$th term is $2^k x_{2^k}$ converges. Hence the series of $(x_n)$ converges exactly when that series converges.
:::

## 직관

단조감소인 수열에서는 번호가 $2^k$부터 $2^{k+1} - 1$까지인 $2^k$개의 항이 모두 맨 앞의 $x_{2^k}$ 이하이고 맨 뒤 다음의 $x_{2^{k+1}}$ 이상입니다. 그래서 이 묶음의 합은 $2^k x_{2^k}$ 이하이고 $2^k x_{2^{k+1}}$ 이상입니다. 묶음을 차례로 더하면 $(x_n)$의 부분합은 응축 급수의 부분합으로 위에서 눌리고((1)), 응축 급수의 부분합은 $(x_n)$의 부분합의 두 배와 첫 항으로 위에서 눌립니다((2)). 항이 $0$ 이상인 급수는 부분합이 위로 유계일 때 수렴하므로 두 급수는 함께 수렴하거나 함께 발산합니다.

비유하자면 계단의 높이를 재는 것과 같습니다. 계단의 단이 점점 낮아진다면, 단의 수를 $1, 2, 4, 8, \dots$개씩 묶을 때 묶음마다 높이는 "첫 단의 높이 × 단의 수"를 넘지 않습니다. 모든 단을 다 재지 않고 $1$번째, $2$번째, $4$번째, … 단의 높이만 재도 전체가 유한한지는 알 수 있다는 것입니다. 단이 낮아진다는 것이 단조감소에, 묶음의 크기가 $2^k$라는 것이 응축 수열의 $2^k$에 해당합니다. 비유가 맞지 않는 곳은, 이 판정은 전체 높이의 값을 주지 않고 (3)의 범위만 준다는 것입니다.

단조감소라는 가정은 묶음 안의 항을 첫 항과 다음 묶음의 첫 항으로 누르는 곳에서 쓰입니다. 이 가정이 없으면 응축 수열은 번호가 $2$의 거듭제곱인 항만 보므로 나머지 항을 알 수 없습니다(아래 반례).

## 증명

:::idea
번호가 $2^k$부터 $2^{k+1} - 1$까지인 묶음의 합을 단조감소로 $2^k x_{2^{k+1}}$과 $2^k x_{2^k}$ 사이에 누르고, 묶음을 귀납법으로 더한다.
:::

:::hint
$(x_n)$의 부분합을 $s_n$이라 할 때 $s_{2^{k+1} - 1} - s_{2^k - 1}$은 항이 몇 개의 합인가? [[series-and-partial-sums|급수와 부분합]]의 (4)를 보라.
:::

:::hint
(3)에서는 항이 $0$ 이상인 급수가 부분합이 위로 유계일 때 수렴한다는 것을 양쪽에 쓴다. 자연수 $n$에 대하여 $n \le 2^n - 1$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다루고, 순서 성질 (10)에 의해 실수의 부등식으로 읽어도 된다. "거듭제곱 (2)"는 [[power-of-a-real-number]]의 번호이다. $(x_n)$의 부분합 수열을 $(s_n)$이라 하면 [[finite-sum-of-reals]]의 (1)에 의해 $\sum_{n=1}^{N} x_n = s_N$이다. 응축 수열의 유한 합을 $t_K = \sum_{k=0}^{K} 2^k x_{2^k}$($K \ge -1$)로 쓴다.

**거듭제곱에 관한 사실.** $0$ 이상인 정수 $k$에서 거듭제곱 (7)에 의해 $2^k$는 자연수이다. 거듭제곱의 정의에 의해 $2^{k+1} = 2^k \cdot 2 = 2^k + 2^k$이다. 따라서 $k \ge 0$이면 $2^k \ge 1$이므로 $2^{k+1} - 1 = 2^k + (2^k - 1) \ge 2^k$이고, $k \ge 1$이면 $2^k - 1 \ge 2^0 = 1$, 곧 $2^k - 1$은 자연수이다(거듭제곱 (6)의 (iv)로 $2^k \ge 2^1 = 2$). 또 모든 자연수 $n$에서 $n \le 2^n - 1$이다. $n = 1$이면 $1 = 2 - 1$이고, $n \le 2^n - 1$이면 $n + 1 \le 2^n \le 2^n + (2^n - 1) = 2^{n+1} - 1$이기 때문이다.

**묶음의 어림.** $0$ 이상인 정수 $k$와 $2^k \le i \le 2^{k+1} - 1$인 정수 $i$에 대하여 $(x_n)$이 단조감소이므로 [[sequence]]의 (4)에 의해 $x_{2^{k+1}} \le x_i \le x_{2^k}$이다. $B_k$를 $k = 0$이면 $s_1$, $k \ge 1$이면 $s_{2^{k+1} - 1} - s_{2^k - 1}$로 두면
$$
2^k x_{2^{k+1}} \le B_k \le 2^k x_{2^k}
$$
이다. 이것을 (가)라 부른다. $k = 0$이면 $B_0 = s_1 = x_1$이고 $2^0 = 1$이며 $x_2 \le x_1$이므로 (가)가 성립한다. $k \ge 1$이면 $N = 2^k - 1$과 $N' = 2^{k+1} - 1$은 $N < N'$인 자연수이고 $N' - N = 2^k$이며, $N < i \le N'$인 정수 $i$는 정확히 $2^k \le i \le 2^{k+1} - 1$인 것이다. [[series-and-partial-sums|급수와 부분합]]의 (4)의 (i), (ii)에 의해 (가)가 성립한다.

**1의 증명.** $K$에 대한 귀납법(시작점 $0$)으로 $s_{2^{K+1} - 1} \le t_K$를 보인다. $K = 0$이면 $s_1 = x_1 = 2^0 x_{2^0} = t_0$이다([[series-indexed-from-zero]]의 (1)). $s_{2^{K+1} - 1} \le t_K$이면, $K + 1 \ge 1$이므로 $s_{2^{K+2} - 1} = s_{2^{K+1} - 1} + B_{K+1}$이고, (가)와 순서 성질 (2)의 (iii), [[series-indexed-from-zero]]의 (2)에 의해 $s_{2^{K+2} - 1} \le t_K + 2^{K+1} x_{2^{K+1}} = t_{K+1}$이다.

**2의 증명.** $K$에 대한 귀납법(시작점 $0$)으로 $t_{K+1} \le x_1 + 2 s_{2^{K+1} - 1}$을 보인다. $K = 0$이면 $t_1 = x_1 + 2 x_2$이고 $x_2 \le x_1 = s_1$이므로 $t_1 \le x_1 + 2 s_1$이다(순서 성질 (4)의 (iii), (2)의 (i)). $t_{K+1} \le x_1 + 2 s_{2^{K+1} - 1}$이면, (가)를 $k = K + 1$에 쓰고 $2$를 곱하면 $2^{K+2} x_{2^{K+2}} = 2 \cdot 2^{K+1} x_{2^{K+2}} \le 2 B_{K+1}$이므로
$$
\begin{aligned}
t_{K+2} &= t_{K+1} + 2^{K+2} x_{2^{K+2}} \\
&\le x_1 + 2 s_{2^{K+1} - 1} + 2 B_{K+1} \\
&= x_1 + 2 s_{2^{K+2} - 1}
\end{aligned}
$$
이다((K3)과 $s_{2^{K+2} - 1} = s_{2^{K+1} - 1} + B_{K+1}$).

**3의 증명.** 응축 수열의 값 $2^k x_{2^k}$는 순서 성질 (4)의 (iv)에 의해 $0$ 이상이다.

$(x_n)$의 급수가 수렴하고 합이 $S$라 하자. [[sum-of-a-series|급수의 합의 기호]]의 (4)의 (ii)에 의해 모든 자연수 $N$에서 $0 \le s_N \le S$이다. (2)와 순서 성질 (4)의 (iii), (2)의 (i)에 의해 $0$ 이상인 모든 $K$에서 $t_{K+1} \le x_1 + 2S$이고, $t_0 = x_1 \le x_1 + 2S$이며 $t_{-1} = 0 \le x_1 + 2S$이다. 따라서 $-1$ 이상인 모든 정수 $K$에서 $t_K \le x_1 + 2S$이고, [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 응축 급수는 수렴한다. 그 합을 $T$라 하자. 응축 수열을 한 칸 옮긴 수열의 $j$번째 부분합은 [[series-indexed-from-zero]]의 정의에 의해 $t_{j-1}$이고, 이 부분합 수열은 $T$로 수렴하며 모든 항이 $x_1 + 2S$ 이하이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $T \le x_1 + 2S$이다.

거꾸로 응축 급수가 수렴하고 합이 $T$라 하자. [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 $-1$ 이상인 모든 $K$에서 $t_K \le T$이다. 자연수 $N$에 대하여 $K = N - 1 \ge 0$으로 두면 위의 사실에 의해 $N \le 2^N - 1 = 2^{K+1} - 1$이다. [[series-and-partial-sums]]의 (3)에 의해 $(s_n)$은 단조증가이므로 [[sequence]]의 (4)와 (1)에 의해 $s_N \le s_{2^{K+1} - 1} \le t_K \le T$이다. 따라서 $(s_n)$은 위로 유계이고 [[comparison-test|비교 판정법]]의 (1)에 의해 $(x_n)$의 급수는 수렴한다. $(s_n)$은 그 합 $S$로 수렴하고 모든 항이 $T$ 이하이므로 극한과 부등식의 (3)에 의해 $S \le T$이다.

수렴할 때의 부등식은 위의 $T \le x_1 + 2S$와 $S \le T$이다.

**4의 증명.** [[series-indexed-from-zero]]의 (8)을 $K = 0$에 쓰면, 응축 급수가 수렴하는 것은 정확히 $(2^k x_{2^k})_{k \ge 1}$의 급수가 수렴할 때이다. 둘째 문장은 이것과 (3)을 합친 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[조화급수에 쓰기]
$x_n = n^{-1}$이면 모든 $n$에서 $0 < x_{n+1} < x_n$이고([[order-properties-of-reals]]의 (6)의 (ii)), 응축 수열의 값은 $2^k (2^k)^{-1} = 1$입니다. 모든 값이 $1$인 0부터 번호가 붙은 수열의 급수는 항이 $0$으로 가지 않으므로 발산하고, (3)에 의해 [[harmonic-series-diverges|조화급수]]도 발산합니다. (1)을 $K = 2$에 쓰면 $\sum_{n=1}^{7} n^{-1} \le t_2 = 3$이고, 실제로 $1 + \tfrac12 + \tfrac13 + \tfrac14 + \tfrac15 + \tfrac16 + \tfrac17 = \tfrac{363}{140} < 3$입니다.
:::

:::counterexample[단조감소가 아닌 수열에서 응축 급수만 수렴하는 예]
$n$이 홀수이면 $x_n = 1$, 짝수이면 $x_n = 0$인 수열을 봅니다([[even-and-odd]]). 항은 $0$ 이상이지만 $x_2 = 0 < 1 = x_3$이라서 단조감소가 아닙니다. $2^0 = 1$은 홀수이고 $k \ge 1$이면 $2^k = 2 \cdot 2^{k-1}$은 짝수이므로, 응축 수열의 값은 $k = 0$에서 $1$, $k \ge 1$에서 $0$이고 그 급수는 [[series-indexed-from-zero]]의 (8)을 $K = 0$에 쓰면 $1$과 모든 항이 $0$인 수열의 급수의 합으로 수렴합니다(합 $1$). 그러나 홀수 번째 항이 모두 $1$이므로 $(x_n)$은 $0$으로 수렴하지 않고, $(x_n)$의 급수는 발산합니다. 단조감소라는 가정을 빼면 (3)은 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$x_n = (n^3)^{-1}$이면 응축 수열의 값은 무엇이고, $(x_n)$의 급수는 수렴하는가?]
$k$에서의 값은 $2^k \bigl((2^k)^3\bigr)^{-1} = 2^k (8^k)^{-1} = (2 \cdot 8^{-1})^k = (1/4)^k$입니다([[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii), (iii)과 (3)에 의해 $(2^k)^3 = 2^{3k} = (2^3)^k = 8^k$이고 $(8^k)^{-1} = (8^{-1})^k$). $|1/4| < 1$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 응축 급수는 수렴하고 합은 $(1 - 1/4)^{-1} = 4/3$입니다. 거듭제곱의 (6)의 (ii)에 의해 $n^3 < (n + 1)^3$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $0 < x_{n+1} < x_n$이고, (3)에 의해 그 급수도 수렴하고, 합은 $4/3$ 이하입니다.
:::

:::check[$x_n = n^{-1}$에 (2)를 $K = 1$로 써서 확인하라.]
왼쪽은 $t_2 = 1 + 2 \cdot \tfrac12 + 4 \cdot \tfrac14 = 3$이고, 오른쪽은 $x_1 + 2(1 + \tfrac12 + \tfrac13) = 1 + \tfrac{11}{3} = \tfrac{14}{3}$입니다. $3 \le \tfrac{14}{3}$이므로 (2)가 성립합니다.
:::
