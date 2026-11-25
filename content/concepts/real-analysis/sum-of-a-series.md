---
title: 급수의 합의 기호
title_en: Notation for the Sum of a Series
aliases: [급수의 합, 시그마 기호, 꼬리의 합, 첫 번호가 m 인 급수, sum of a series, sigma notation, sum of a tail]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수렴하는 급수의 합을 Σ_{n=1}^∞ x_n 으로 쓰고, m 이상의 번호에서 정해진 항의 급수와 그 합 Σ_{n=m}^∞ t_n, 꼬리의 합 Σ_{n=K+1}^∞ x_n 을 정한다. 발산하는 급수에는 이 기호를 쓰지 않는다. 부분합, 꼬리로 쪼개기, 선형성, 부등식, 절댓값, 등비급수의 합, 첨자 옮기기를 이 기호로 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, upper-bound-and-supremum, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, tail-of-a-sequence, series-and-partial-sums, linearity-of-series, tail-of-a-series, geometric-series, terms-of-convergent-series-tend-to-zero, comparison-test, absolute-convergence, finite-sum-of-reals, splitting-and-shifting-finite-sums]
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.1절 Definition, Definition 2.5.1 과 그 뒤 문단 (p.87), Remark 2.5.3 (p.88). 2.5.3절 Prop 2.5.12 뒤 문단 (p.91–92), 2.5.4절 Prop 2.5.13 뒤 문단 (p.92), 2.5.7절 Exercise 2.5.10 (p.98)
    checked: original
    note: "출처의 Definition 2.5.1(p.87)은 수열 {x_n} 에 대해 형식적 대상 Σ_{n=1}^∞ x_n 을 series 라 하고, 부분합 수열이 수렴하면 Σ_{n=1}^∞ x_n = lim s_k 로 쓰며 'we cheat a little and treat Σ x_n as a number'라고 적는다. 발산하면 그 기호는 'simply a formal object and not a number'이고, 같은 기호가 급수 자체와 부분합의 극한이라는 두 가지를 뜻하니 문맥으로 구별하라고 적는다. 이 항목은 앞의 뜻을 버리고 기호를 수렴하는 급수의 합(실수)에만 쓴다. Remark 2.5.3(p.88)이 줄임표 꼴 x_1 + x_2 + x_3 + ⋯ 을 쓰지 않는다고 적는 것도 따른다. 출처는 첨자가 1 이 아닌 번호에서 시작하는 급수를 Remark 2.5.2(p.87)와 Proposition 2.5.6(p.89, Σ_{n=M}^∞ x_n)에서 쓰지만 그 급수의 수렴과 합을 따로 정의하지 않는다. 이 항목의 '1부터 다시 번호 붙인 수열'은 그 뜻을 정한 것이다. (1)은 Definition 2.5.1 뒤의 식 Σ_{n=1}^∞ x_n = lim Σ_{n=1}^k x_n(p.87)이고, (2)는 Proposition 2.5.6 의 증명(p.89)이 쓰는 부분합의 쪼개기를 합으로 올린 것이다. (3)은 Proposition 2.5.12(p.91)의 (i)(ii)를 기호로 쓴 것이고 차와 발산하는 급수의 문장은 그 명제의 두 항목에 들어 있지 않다. (4)(ii)의 '부분합 ≤ 합'은 Proposition 2.5.13 뒤 문단(p.92)의 부등식이다. (4)(iii)의 수렴은 Proposition 2.5.16 (i)(p.93)이고, (4)(i)과 (4)(iii)의 합끼리의 부등식은 그 증명(p.93)의 부분합 부등식 (2.1)에 극한을 취한 꼴이다. (5)는 Exercise 2.5.10(p.98)의 급수의 삼각부등식이고, 2.5.4절 Proposition 2.5.15 뒤 문단(p.93)이 같은 부등식을 적고 증명을 연습문제로 둔다. (6)(iii)은 Proposition 2.5.12 뒤 문단(p.91–92)의 식 Σ_{n=i}^∞ rⁿ = rⁱ/(1 − r) 과 같다. (7)의 첨자 옮기기는 Remark 2.5.2(p.87)의 식 Σ_{n=0}^∞ rⁿ = Σ_{n=1}^∞ r^{n−1} 과 위 p.92 의 유도의 Σ_{n=0}^∞ r^{n+i} = Σ_{n=i}^∞ rⁿ 이 쓰는 것과 같은 옮기기이다. 예시 '꼬리의 합'의 수열 (n(n+1))⁻¹ 은 출처 연습문제 0.3.13(p.21, 부분합 n/(n+1)), 2.5.1(p.97, k번째 부분합이 k/(k+1) 인 급수의 항과 합을 구하라), 2.5.3 d)(p.97), 5.5.3 b)(p.224, 'The sum telescopes')와 같은 수열이고, 5.5절 Example 5.5.12 의 sinc 함수에 관한 계산(p.221)도 이 수열에 1/π 을 곱한 급수가 수렴한다는 것을 쓴다. 예시 '선형성으로 구하는 합'의 (1/3)ⁿ 의 합은 출처 Example 2.5.4(p.88)의 1/2ⁿ 의 합과 같은 꼴이고 공비만 다르다. 반례 '항끼리 더한 급수는 수렴하지만 두 급수는 발산하는 예'의 모든 항이 1 인 수열의 급수는 출처 Example 2.5.10(p.90)의 r = 1 인 등비급수(첨자 0 부터의 rⁿ)와 같은 급수이고, 출처도 항이 0 으로 가지 않는다는 것으로 발산을 보인다. 확인 질문 'Σ_{n=3}^∞ (1/2)ⁿ 은 얼마인가?'는 위의 p.91–92 식에 i = 3, r = 1/2 을 넣은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(정의가 둘이 되지 않는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 위로 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. 수열의 $K$-꼬리는 [[tail-of-a-sequence]], $K$-꼬리의 급수는 [[tail-of-a-series]], 절대수렴은 [[absolute-convergence]], 등비급수는 [[geometric-series]], 거듭제곱은 [[power-of-a-real-number]], 상한은 [[upper-bound-and-supremum]]의 것이다. 유한 합 $\sum_{i=m}^{n}$, 빈 합, 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

**급수의 합의 기호.** $(x_n)$을 수열이라 하자. $(x_n)$의 급수가 수렴할 때 그 합을
$$
\sum_{n=1}^{\infty} x_n
$$
으로 쓴다. 실수 $S$에 대하여 "$\sum_{n=1}^{\infty} x_n = S$"는 정확히 $(x_n)$의 급수가 수렴하고 그 합이 $S$라는 뜻이다. 곧 이 등식은 급수가 수렴한다는 것과 그 합이 $S$라는 것을 함께 말한다. $(x_n)$의 급수가 발산하면 이 기호를 쓰지 않는다. 이 기호는 실수 하나, 곧 부분합 수열의 극한을 나타내며 급수라는 별도의 대상을 나타내지 않는다. 기호 안의 $\infty$는 수가 아니라 기호의 일부이다.

**첫 번호가 $m$인 항의 급수.** $m$을 자연수라 하고, $m$ 이상인 정수 $n$마다 실수 $t_n$이 $n$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자. 자연수 $j$에 대하여 $j + m - 1$은 $m$ 이상인 정수이므로, $j$번째 항이 $t_{j+m-1}$인 수열이 있다. 이 수열을 "$n \ge m$에서 정해진 항 $t_n$을 **1부터 다시 번호 붙인 수열**"이라 한다.

- "$n \ge m$에서 정해진 항 $t_n$의 급수가 수렴한다(발산한다)"는 것은 정확히 1부터 다시 번호 붙인 수열의 급수가 수렴할(발산할) 때이다.
- 수렴할 때 그 합, 곧 1부터 다시 번호 붙인 수열의 급수의 합을 $\sum_{n=m}^{\infty} t_n$으로 쓴다. 곧 $\sum_{n=m}^{\infty} t_n = \sum_{j=1}^{\infty} t_{j+m-1}$이다. 발산하면 이 기호를 쓰지 않는다.
- $m = 1$이고 $t_n$이 수열 $(x_n)$의 항 $x_n$이면 1부터 다시 번호 붙인 수열은 $(x_n)$ 자신이므로, 이 정의는 위의 $\sum_{n=1}^{\infty} x_n$과 같다.
- $K$가 자연수이고 $n \ge K + 1$에서 $t_n = x_n$이면 1부터 다시 번호 붙인 수열은 $j$번째 항이 $x_{j+K}$인 수열, 곧 $(x_n)$의 $K$-꼬리이다. 그래서 $(x_n)$의 $K$-꼬리의 급수가 수렴할 때 그 합은 $\sum_{n=K+1}^{\infty} x_n$이다. 이것을 $(x_n)$의 **$K$-꼬리의 합**이라 한다.

**합의 첨자.** $\sum_{n=m}^{\infty} t_n$의 글자 $n$은 이 기호 안에서만 쓰는 이름이고, 다른 글자로 바꾼 $\sum_{k=m}^{\infty} t_k$는 같은 수이다. "$\sum_{n=m}^{\infty}(n\text{에 대한 식})$"은 $m$ 이상인 정수 $n$마다 그 식으로 정해진 항의 급수의 합을 뜻한다. 이 합은 $n \ge m$에서의 항만으로 정해지므로, $n \ge m$에서 $t_n$과 같은 항을 주는 식이나 수열은 어느 것으로 써도 같은 수렴, 같은 합을 준다.

다음이 성립한다. 아래에서 $m$은 자연수이고, $t_n$, $w_n$은 $m$ 이상인 정수 $n$마다 위의 뜻으로 정해진 실수이며, $c$는 실수이다. "$t_n$의 급수"는 "$n \ge m$에서 정해진 항 $t_n$의 급수"의 줄임말이다.

1. (부분합) 모든 자연수 $k$에서, $t_n$을 1부터 다시 번호 붙인 수열의 $k$번째 부분합은 $\sum_{n=m}^{k+m-1} t_n$이다. 따라서 $t_n$의 급수가 수렴하면
   $$
   \sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} \sum_{n=m}^{k+m-1} t_n
   $$
   이다. 특히 수열 $(x_n)$의 $k$번째 부분합은 $\sum_{n=1}^{k} x_n$이고, $(x_n)$의 급수가 수렴하면 $\sum_{n=1}^{\infty} x_n = \lim_{k \to \infty} \sum_{n=1}^{k} x_n$이다.
2. (꼬리로 쪼개기) $K$가 $m - 1 \le K$인 정수이면, $n \ge m$에서 정해진 항 $t_n$의 급수가 수렴하는 것은 정확히 $n \ge K + 1$에서 정해진 항 $t_n$의 급수가 수렴할 때이고, 이때
   $$
   \sum_{n=m}^{\infty} t_n = \sum_{n=m}^{K} t_n + \sum_{n=K+1}^{\infty} t_n
   $$
   이다($K = m - 1$이면 가운데 합은 빈 합 $0$이다). 특히 수열 $(x_n)$과 $0$ 이상인 정수 $K$에 대하여, $(x_n)$의 급수가 수렴하면 $\sum_{n=1}^{\infty} x_n = \sum_{n=1}^{K} x_n + \sum_{n=K+1}^{\infty} x_n$이다.
3. (선형성) $t_n$의 급수와 $w_n$의 급수가 수렴하면, $c\,t_n + w_n$의 급수와 $t_n - w_n$의 급수도 수렴하고
   $$
   \begin{aligned}
   \sum_{n=m}^{\infty} (c\,t_n + w_n) &= c \sum_{n=m}^{\infty} t_n \\
   &\qquad + \sum_{n=m}^{\infty} w_n, \\
   \sum_{n=m}^{\infty} (t_n - w_n) &= \sum_{n=m}^{\infty} t_n \\
   &\qquad - \sum_{n=m}^{\infty} w_n
   \end{aligned}
   $$
   이다. $t_n$의 급수가 수렴하고 $w_n$의 급수가 발산하면 $t_n + w_n$의 급수는 발산한다.
4. (부등식)
   - (i) (항별 비교) $t_n$의 급수와 $w_n$의 급수가 수렴하고 $m$ 이상인 모든 정수 $n$에서 $t_n \le w_n$이면 $\sum_{n=m}^{\infty} t_n \le \sum_{n=m}^{\infty} w_n$이다.
   - (ii) (항이 $0$ 이상인 경우) $m$ 이상인 모든 정수 $n$에서 $0 \le t_n$이라 하자. $t_n$의 급수가 수렴하는 것은 정확히 어떤 실수 $B$가 있어 $m - 1$ 이상인 모든 정수 $k$에서 $\sum_{n=m}^{k} t_n \le B$일 때이다. 이때 $\sum_{n=m}^{\infty} t_n$은 집합 $\bigl\{\sum_{n=m}^{k} t_n : k \in \mathbb{Z},\ m \le k\bigr\}$의 상한이고, $m - 1$ 이상인 모든 정수 $k$에서 $0 \le \sum_{n=m}^{k} t_n \le \sum_{n=m}^{\infty} t_n$이다.
   - (iii) (비교 판정법) $m$ 이상인 모든 정수 $n$에서 $0 \le t_n \le w_n$이고 $w_n$의 급수가 수렴하면, $t_n$의 급수도 수렴하고 $0 \le \sum_{n=m}^{\infty} t_n \le \sum_{n=m}^{\infty} w_n$이다.
5. (절댓값) $|t_n|$의 급수가 수렴하면 $t_n$의 급수도 수렴하고 $\left| \sum_{n=m}^{\infty} t_n \right| \le \sum_{n=m}^{\infty} |t_n|$이다.
6. (등비급수) $a$, $r$이 실수이고 $|r| < 1$이라 하자.
   - (i) $\sum_{n=1}^{\infty} a r^{n-1} = \dfrac{a}{1 - r}$이다.
   - (ii) $0$ 이상인 모든 정수 $K$에서 $\sum_{n=K+1}^{\infty} a r^{n-1} = \dfrac{a r^K}{1 - r}$이다.
   - (iii) 모든 자연수 $m$에서 $\sum_{n=m}^{\infty} r^n = \dfrac{r^m}{1 - r}$이다.
7. (첨자 옮기기) $p$가 $1 \le m + p$인 정수이면, $m + p$ 이상인 정수 $n$에서 $n - p \ge m$이므로 $t_{n-p}$가 정해진다. $n \ge m$에서 정해진 항 $t_n$의 급수가 수렴하는 것은 정확히 $n \ge m + p$에서 정해진 항 $t_{n-p}$의 급수가 수렴할 때이고, 이때 $\sum_{n=m}^{\infty} t_n = \sum_{n=m+p}^{\infty} t_{n-p}$이다.
:::

:::english
Sequences, bounded above, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence and on uniqueness of limits, and the sequence of partial sums, convergence and divergence of a series and the sum of a series are those of the entry on series and partial sums. The $K$-tail of a sequence, the series of the $K$-tail, absolute convergence, geometric series, powers and suprema are those of the corresponding entries. Finite sums $\sum_{i=m}^{n}$, the empty sum and sums of terms given only on a range are those of the entry on finite sums of real numbers. Below, a sequence written by a formula is the one given by item (1) of the entry on sequences.

**Notation for the sum of a series.** Let $(x_n)$ be a sequence. When the series of $(x_n)$ converges, its sum is written
$$
\sum_{n=1}^{\infty} x_n .
$$
For a real number $S$, "$\sum_{n=1}^{\infty} x_n = S$" means exactly that the series of $(x_n)$ converges and its sum is $S$; that is, this equation states both that the series converges and that its sum is $S$. When the series of $(x_n)$ diverges, this symbol is not used. The symbol denotes a single real number, namely the limit of the sequence of partial sums, and not a separate object called a series. The $\infty$ in the symbol is not a number but part of the symbol.

**Series of terms starting at index $m$.** Let $m$ be a natural number, and suppose that for each integer $n \ge m$ a real number $t_n$ is given by a formula in $n$ or by an object already determined. For each natural number $j$, the integer $j + m - 1$ is at least $m$, so there is a sequence whose $j$th term is $t_{j+m-1}$. This sequence is called "the terms $t_n$ given for $n \ge m$, **renumbered from 1**".

- "The series of the terms $t_n$ given for $n \ge m$ converges (diverges)" means exactly that the series of the renumbered sequence converges (diverges).
- When it converges, its sum, namely the sum of the series of the renumbered sequence, is written $\sum_{n=m}^{\infty} t_n$; that is, $\sum_{n=m}^{\infty} t_n = \sum_{j=1}^{\infty} t_{j+m-1}$. When it diverges, this symbol is not used.
- If $m = 1$ and $t_n$ is the term $x_n$ of a sequence $(x_n)$, the renumbered sequence is $(x_n)$ itself, so this definition agrees with $\sum_{n=1}^{\infty} x_n$ above.
- If $K$ is a natural number and $t_n = x_n$ for $n \ge K + 1$, the renumbered sequence is the sequence whose $j$th term is $x_{j+K}$, namely the $K$-tail of $(x_n)$. So when the series of the $K$-tail of $(x_n)$ converges, its sum is $\sum_{n=K+1}^{\infty} x_n$. This is called the **sum of the $K$-tail** of $(x_n)$.

**Summation index.** The letter $n$ in $\sum_{n=m}^{\infty} t_n$ is a name used only inside the symbol, and $\sum_{k=m}^{\infty} t_k$ with another letter is the same number. "$\sum_{n=m}^{\infty}(\text{an expression in } n)$" means the sum of the series of the terms given by that expression for each integer $n \ge m$. This sum is determined by the terms with $n \ge m$ alone, so any expression or sequence giving the same terms as $t_n$ for $n \ge m$ yields the same convergence and the same sum.

The following hold. Below, $m$ is a natural number, $t_n$ and $w_n$ are real numbers given as above for each integer $n \ge m$, and $c$ is a real number. "The series of $t_n$" is short for "the series of the terms $t_n$ given for $n \ge m$".

1. (Partial sums) For every natural number $k$, the $k$th partial sum of the sequence obtained by renumbering $t_n$ from 1 is $\sum_{n=m}^{k+m-1} t_n$. Hence if the series of $t_n$ converges, then
   $$
   \sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} \sum_{n=m}^{k+m-1} t_n .
   $$
   In particular, the $k$th partial sum of a sequence $(x_n)$ is $\sum_{n=1}^{k} x_n$, and if the series of $(x_n)$ converges, then $\sum_{n=1}^{\infty} x_n = \lim_{k \to \infty} \sum_{n=1}^{k} x_n$.
2. (Splitting off a tail) If $K$ is an integer with $m - 1 \le K$, then the series of the terms $t_n$ given for $n \ge m$ converges exactly when the series of the terms $t_n$ given for $n \ge K + 1$ converges, and in that case
   $$
   \sum_{n=m}^{\infty} t_n = \sum_{n=m}^{K} t_n + \sum_{n=K+1}^{\infty} t_n
   $$
   (if $K = m - 1$, the middle sum is the empty sum $0$). In particular, for a sequence $(x_n)$ and an integer $K \ge 0$, if the series of $(x_n)$ converges, then $\sum_{n=1}^{\infty} x_n = \sum_{n=1}^{K} x_n + \sum_{n=K+1}^{\infty} x_n$.
3. (Linearity) If the series of $t_n$ and the series of $w_n$ converge, then the series of $c\,t_n + w_n$ and the series of $t_n - w_n$ converge, and
   $$
   \begin{aligned}
   \sum_{n=m}^{\infty} (c\,t_n + w_n) &= c \sum_{n=m}^{\infty} t_n \\
   &\qquad + \sum_{n=m}^{\infty} w_n, \\
   \sum_{n=m}^{\infty} (t_n - w_n) &= \sum_{n=m}^{\infty} t_n \\
   &\qquad - \sum_{n=m}^{\infty} w_n
   \end{aligned}
   $$
   If the series of $t_n$ converges and the series of $w_n$ diverges, then the series of $t_n + w_n$ diverges.
4. (Inequalities)
   - (i) (Termwise comparison) If the series of $t_n$ and the series of $w_n$ converge and $t_n \le w_n$ for every integer $n \ge m$, then $\sum_{n=m}^{\infty} t_n \le \sum_{n=m}^{\infty} w_n$.
   - (ii) (Nonnegative terms) Suppose $0 \le t_n$ for every integer $n \ge m$. The series of $t_n$ converges exactly when there is a real number $B$ with $\sum_{n=m}^{k} t_n \le B$ for every integer $k \ge m - 1$. In that case $\sum_{n=m}^{\infty} t_n$ is the supremum of the set $\bigl\{\sum_{n=m}^{k} t_n : k \in \mathbb{Z},\ m \le k\bigr\}$, and $0 \le \sum_{n=m}^{k} t_n \le \sum_{n=m}^{\infty} t_n$ for every integer $k \ge m - 1$.
   - (iii) (Comparison test) If $0 \le t_n \le w_n$ for every integer $n \ge m$ and the series of $w_n$ converges, then the series of $t_n$ converges and $0 \le \sum_{n=m}^{\infty} t_n \le \sum_{n=m}^{\infty} w_n$.
5. (Absolute values) If the series of $|t_n|$ converges, then the series of $t_n$ converges and $\left| \sum_{n=m}^{\infty} t_n \right| \le \sum_{n=m}^{\infty} |t_n|$.
6. (Geometric series) Let $a$, $r$ be real numbers with $|r| < 1$.
   - (i) $\sum_{n=1}^{\infty} a r^{n-1} = \dfrac{a}{1 - r}$.
   - (ii) For every integer $K \ge 0$, $\sum_{n=K+1}^{\infty} a r^{n-1} = \dfrac{a r^K}{1 - r}$.
   - (iii) For every natural number $m$, $\sum_{n=m}^{\infty} r^n = \dfrac{r^m}{1 - r}$.
7. (Shifting the index) If $p$ is an integer with $1 \le m + p$, then for each integer $n \ge m + p$ we have $n - p \ge m$, so $t_{n-p}$ is given. The series of the terms $t_n$ given for $n \ge m$ converges exactly when the series of the terms $t_{n-p}$ given for $n \ge m + p$ converges, and in that case $\sum_{n=m}^{\infty} t_n = \sum_{n=m+p}^{\infty} t_{n-p}$.
:::

## 직관

해석학 입문은 급수를 따로 정의하지 않고 "$(x_n)$의 급수가 수렴한다", "급수의 합"을 모두 부분합 수열에 관한 말로 정했습니다. 그래서 합을 쓸 때마다 $\lim_{n \to \infty} s_n$처럼 부분합 수열을 먼저 불러내거나 글자로 이름을 붙여야 했습니다. 이 항목은 그 합, 곧 실수 하나에 기호 $\sum_{n=1}^{\infty} x_n$을 붙입니다. 급수를 새 대상으로 만드는 것이 아니라 이미 있던 수에 이름을 주는 것입니다. 그래서 해석학 입문의 [[series-and-partial-sums|급수와 부분합]]이 "급수를 나타내는 기호를 두지 않는다"고 한 것은 이 항목 뒤에도 참이고, 그 항목의 "합은 $\lim_{n \to \infty} s_n$으로 쓰거나 글자로 이름을 붙여 쓴다"는 해석학 입문 강의 안의 약속으로 남습니다. 이 강의부터는 같은 수를 $\sum_{n=1}^{\infty} x_n$으로도 씁니다.

[[limit-is-unique|극한의 유일성]]에서 $\lim_{n \to \infty} x_n$을 수렴하는 수열에만 쓴 것과 같은 약속입니다. 이를테면 저울로 물건의 무게를 재는 일에 견줄 수 있습니다. 바늘이 한 눈금에 멈추면 그 눈금을 무게로 적지만, 바늘이 멈추지 않고 흔들리면 적을 무게가 없습니다. 수렴은 "바늘이 멈춘다"에, 합은 "멈춘 눈금"에 맞습니다. 비유가 어긋나는 곳은, 부분합은 한 번에 멈추는 것이 아니라 어떤 수에 한없이 가까워질 뿐이라는 점입니다.

첫 번호가 $1$이 아닌 급수는 번호만 옮긴 수열로 정의합니다. 예컨대 $\sum_{n=3}^{\infty} t_n$은, 그 급수가 수렴할 때, $t_3, t_4, t_5, \dots$를 첫째, 둘째, 셋째 항으로 삼은 수열의 급수의 합입니다. 수열의 꼬리를 떼어 낸 것도 같은 꼴이라서, $K$-꼬리의 합은 $\sum_{n=K+1}^{\infty} x_n$으로 씁니다. (1)–(7)은 해석학 입문의 정리들을 1부터 다시 번호 붙인 수열에 쓰고 이 기호로 옮겨 얻습니다(부분합을 유한 합으로 읽는 데는 리만 적분 1단원을 씁니다). (2)처럼 기호로 쓰면 꼬리를 떼어 내는 일이 유한 합과 꼬리의 합으로 나누는 등식 하나가 됩니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (2)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 합과 차는 정수이다([[even-and-odd]]). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다룬다.

**진술의 확인.** 자연수 $j$는 (Z1)에 의해 $1 \le j$이므로 (Z7)에 의해 $0 \le j - 1$이고, 다시 (Z7)에 의해 $m \le (j - 1) + m = j + m - 1$이다. 따라서 $t_{j+m-1}$은 정해진 실수이고, [[sequence]]의 (1)에 의해 1부터 다시 번호 붙인 수열이 있다. 아래에서 $t_n$을 1부터 다시 번호 붙인 수열을 $(y_j)$, $w_n$을 1부터 다시 번호 붙인 수열을 $(z_j)$라 하고, 각각의 부분합 수열을 $(s_k)$, $(u_k)$라 한다. $m = 1$이고 $t_n = x_n$이면 정수의 계산으로 $j + 1 - 1 = j$이므로 $y_j = x_j$이고, [[sequence]]의 수열의 같음에 의해 $(y_j) = (x_n)$이다. $m = K + 1$($K$는 자연수)이고 $t_n = x_n$이면 $j + (K + 1) - 1 = j + K$이므로 $y_j = x_{j+K}$이고, $(y_j)$는 [[tail-of-a-sequence|수열의 꼬리]]의 뜻의 $K$-꼬리이다.

**1의 증명.** 자연수 $k$를 잡고 $N = k + m - 1$로 두면 $N$은 정수이고 $m \le N$이다(진술의 확인과 같은 이유). 항 $t_n$은 $m \le n \le N$인 정수 $n$에서 정해져 있으므로 범위에서만 정해진 항의 합 $\sum_{n=m}^{N} t_n$이 뜻을 갖는다. [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (2)에서 $r = 1 - m$으로 둔 꼴에 의해
$$
\sum_{n=m}^{N} t_n = \sum_{j=1}^{N-m+1} t_{j+m-1}
$$
이고, 정수의 계산으로 $N - m + 1 = k$이다. 오른쪽은 $1 \le j \le k$에서 정해진 항 $t_{j+m-1}$의 합이고, 이 범위의 모든 $j$에서 $y_j = t_{j+m-1}$이므로 [[finite-sum-of-reals|실수의 유한 합]]의 범위에서만 정해진 항의 합의 약속에 의해 $\sum_{j=1}^{k} y_j$와 같다. 그 항목의 (1)에 의해 이것은 $s_k$이다. 따라서 $s_k = \sum_{n=m}^{k+m-1} t_n$이다.

$t_n$의 급수가 수렴하면, 정의에 의해 $(s_k)$가 수렴하고 $\sum_{n=m}^{\infty} t_n$은 그 극한이므로 [[limit-is-unique]]의 기호로 $\sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} s_k = \lim_{k \to \infty} \sum_{n=m}^{k+m-1} t_n$이다. 수열 $(x_n)$에 대한 문장은 $m = 1$, $t_n = x_n$인 경우이다. 이때 $k + 1 - 1 = k$이고 진술의 확인에 의해 다시 번호 붙인 수열이 $(x_n)$이다.

**2의 증명.** $t_n$을 $n \ge K + 1$에서 정해진 항으로 보고 1부터 다시 번호 붙인 수열을 $(v_j)$라 하자. $K + 1 \ge m \ge 1$이므로 $K + 1$은 자연수이고, $v_j = t_{j+K}$이다.

- $K = m - 1$인 경우: $j + K = j + m - 1$이므로 모든 $j$에서 $v_j = y_j$이고 $(v_j) = (y_j)$이다. 따라서 두 급수는 같은 수열의 급수이므로 하나가 수렴하는 것은 정확히 다른 하나가 수렴할 때이고 합도 같다. 가운데 합은 시작 번호 $m$, 끝 번호 $m - 1$인 빈 합이므로 [[finite-sum-of-reals]]의 (2)에 의해 $0$이고, (K1), (K4)에 의해 $0 + \sum_{n=K+1}^{\infty} t_n = \sum_{n=m}^{\infty} t_n$이다.
- $m \le K$인 경우: $P = K - m + 1$로 두면 (Z7)에 의해 $1 \le P$이므로 $P$는 자연수이다. 정수의 계산으로 $(j + P) + m - 1 = j + K$이므로 모든 자연수 $j$에서 $v_j = t_{j+K} = y_{j+P}$이고, $(v_j)$는 $(y_j)$의 $P$-꼬리이다. [[tail-of-a-series|급수의 꼬리]]의 (2)에 의해 $(y_j)$의 급수가 수렴하는 것은 정확히 $(v_j)$의 급수가 수렴할 때이고, 그 (3)에 의해 이때 $\sum_{j=1}^{\infty} y_j = s_P + \sum_{j=1}^{\infty} v_j$이다. (1)에 의해 $s_P = \sum_{n=m}^{P+m-1} t_n$이고 $P + m - 1 = K$이다. 정의에 의해 $\sum_{j=1}^{\infty} y_j = \sum_{n=m}^{\infty} t_n$, $\sum_{j=1}^{\infty} v_j = \sum_{n=K+1}^{\infty} t_n$이다.

수열 $(x_n)$에 대한 문장은 $m = 1$, $t_n = x_n$인 경우이다. $K \ge 0 = m - 1$이다.

**3의 증명.** $c\,t_n + w_n$을 1부터 다시 번호 붙인 수열의 $j$번째 항은 $c\,t_{j+m-1} + w_{j+m-1} = c\,y_j + z_j$이고, $t_n - w_n$의 것은 $y_j - z_j$이다. [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $j$번째 항이 $c\,y_j$인 수열의 급수는 수렴하고 합이 $c \sum_{n=m}^{\infty} t_n$이며, 그 (3)을 이 수열과 $(z_j)$에 쓰면 $j$번째 항이 $c\,y_j + z_j$인 수열의 급수가 수렴하고 합은 $c \sum_{n=m}^{\infty} t_n + \sum_{n=m}^{\infty} w_n$이다. 그 (4)에 의해 $j$번째 항이 $y_j - z_j$인 수열의 급수는 수렴하고 합은 $\sum_{n=m}^{\infty} t_n - \sum_{n=m}^{\infty} w_n$이다. 마지막 문장은 그 (5)를 $(y_j)$와 $(z_j)$에 쓴 것이다. $t_n + w_n$을 1부터 다시 번호 붙인 수열의 $j$번째 항이 $y_j + z_j$이기 때문이다.

**4의 증명.** (i) 진술의 확인에 의해 모든 자연수 $j$에서 $j + m - 1 \ge m$이므로 가정에 의해 $y_j \le z_j$이다. [[series-and-partial-sums|급수와 부분합]]의 (5)에 의해 모든 자연수 $k$에서 $s_k \le u_k$이고, 두 부분합 수열이 수렴하므로 [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 $\lim_{k \to \infty} s_k \le \lim_{k \to \infty} u_k$이다. 이것이 결론이다.

(ii) 진술의 확인과 가정에 의해 모든 자연수 $j$에서 $0 \le y_j$이다. 먼저 두 집합이 같음을 본다: $\{s_j : j \in \mathbb{N}\} = \bigl\{\sum_{n=m}^{k} t_n : k \in \mathbb{Z},\ m \le k\bigr\}$. 자연수 $j$에 대하여 $k = j + m - 1$은 $m \le k$인 정수이고 (1)에 의해 $s_j = \sum_{n=m}^{k} t_n$이다. 거꾸로 $m \le k$인 정수 $k$에 대하여 $j = k - m + 1$은 (Z7)에 의해 $1 \le j$인 정수, 곧 자연수이고 $j + m - 1 = k$이므로 (1)에 의해 $\sum_{n=m}^{k} t_n = s_j$이다. 또 $k = m - 1$이면 $\sum_{n=m}^{k} t_n$은 빈 합 $0$이다([[finite-sum-of-reals]]의 (2)).

[[comparison-test|비교 판정법]]의 (1)에 의해 $(y_j)$의 급수가 수렴하는 것은 정확히 $(s_j)$가 위로 유계일 때, 곧 어떤 실수 $B$가 있어 모든 자연수 $j$에서 $s_j \le B$일 때이다. 이런 $B$가 있으면, $m$ 이상인 정수 $k$에서는 위의 집합의 같음에 의해 $\sum_{n=m}^{k} t_n \le B$이고, $k = m - 1$에서는 [[series-and-partial-sums]]의 (3)에 의해 $0 \le s_1 \le B$이므로 순서 성질 (1)의 (v)에 의해 $\sum_{n=m}^{m-1} t_n = 0 \le B$이다. 거꾸로 $m - 1$ 이상인 모든 정수 $k$에서 $\sum_{n=m}^{k} t_n \le B$이면, 특히 $m$ 이상인 $k$에서 그렇고, 집합의 같음에 의해 모든 자연수 $j$에서 $s_j \le B$이다. 정의에 의해 $(y_j)$의 급수가 수렴하는 것은 $t_n$의 급수가 수렴하는 것이다.

수렴할 때 $S = \sum_{n=m}^{\infty} t_n$으로 두면, 비교 판정법의 (1)에 의해 $S = \sup\{s_j : j \in \mathbb{N}\}$이고 모든 자연수 $j$에서 $0 \le s_j \le S$이다. 집합의 같음에 의해 $S$는 진술의 집합의 상한이고, $m$ 이상인 정수 $k$에서 $0 \le \sum_{n=m}^{k} t_n \le S$이다. $k = m - 1$이면 그 합은 $0$이다. $0 \le s_1 \le S$와 순서 성질 (1)의 (v)에 의해 $0 \le S$이고, 순서 성질 (1)의 (iv)에 의해 $0 \le 0$이므로 $0 \le 0 \le S$이다.

(iii) 진술의 확인과 가정에 의해 모든 자연수 $j$에서 $0 \le y_j \le z_j$이다. 비교 판정법의 (2)에 의해 $(y_j)$의 급수는 수렴하고, 두 합을 $S$, $T$라 하면 $0 \le S \le T$이다. 정의에 의해 이것이 결론이다.

**5의 증명.** $|t_n|$을 1부터 다시 번호 붙인 수열의 $j$번째 항은 $|t_{j+m-1}| = |y_j|$이다. 가정에 의해 $(y_j)$의 급수는 [[absolute-convergence|절대수렴]]의 뜻으로 절대수렴하므로, 그 (1)에 의해 $(y_j)$의 급수는 수렴하고, 그 (2)에 의해 $\left|\sum_{j=1}^{\infty} y_j\right| \le \sum_{j=1}^{\infty} |y_j|$이다. 정의에 의해 이것이 결론이다.

**6의 증명.** (i) $\sum_{n=1}^{\infty} a r^{n-1}$은 $n$번째 항이 $a r^{n-1}$인 수열, 곧 첫째 항이 $a$이고 공비가 $r$인 [[geometric-series|등비급수]]의 합이다. 그 항목의 (2)에 의해 이 급수는 수렴하고 합은 $\dfrac{a}{1 - r}$이다.

(ii) $K = 0$이면 $\sum_{n=1}^{\infty} a r^{n-1}$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $r^0 = 1$, (K4)에 의해 $a r^0 = a$이므로 (i)과 같다. $K$가 자연수이면 진술의 확인에 의해 $\sum_{n=K+1}^{\infty} a r^{n-1}$은 $n$번째 항이 $a r^{n-1}$인 수열의 $K$-꼬리의 합이다. 등비급수의 (3)에 의해 그 $K$-꼬리의 급수는 수렴하고 합은 $\dfrac{a r^K}{1 - r}$이다.

(iii) $r^n$을 1부터 다시 번호 붙인 수열의 $j$번째 항은 $r^{j+m-1}$이다. $j - 1$과 $m$은 $0$ 이상인 정수이므로 거듭제곱의 (2)의 (i)과 (K1)에 의해 $r^{j+m-1} = r^{(j-1)+m} = r^{j-1} r^m = r^m r^{j-1}$이다. 따라서 이 수열은 첫째 항이 $r^m$이고 공비가 $r$인 등비급수의 수열이고, 등비급수의 (2)에 의해 그 급수는 수렴하고 합은 $\dfrac{r^m}{1 - r}$이다.

**7의 증명.** $n \ge m + p$이면 (Z7)에 의해 $n - p \ge m$이다. 또 $m + p$는 자연수이다. $t_{n-p}$를 $n \ge m + p$에서 정해진 항으로 보고 1부터 다시 번호 붙인 수열의 $j$번째 항은 $t_{(j + (m + p) - 1) - p}$이고, 정수의 계산으로 $(j + (m + p) - 1) - p = j + m - 1$이므로 이것은 $y_j$이다. 두 급수는 같은 수열 $(y_j)$의 급수이므로 하나가 수렴하는 것은 정확히 다른 하나가 수렴할 때이고, 합도 $\sum_{j=1}^{\infty} y_j$로 같다. $\blacksquare$
:::

## 예시와 반례

:::example[꼬리의 합]
$n$번째 항이 $x_n = \bigl(n(n+1)\bigr)^{-1}$인 수열을 봅니다. [[comparison-test|비교 판정법]]의 (5)에 의해 모든 자연수 $k$에서 $k$번째 부분합은 $1 - (k+1)^{-1}$이고 $\sum_{n=1}^{\infty} x_n = 1$입니다. 이 항목의 (1)에 의해 $\sum_{n=1}^{k} x_n = 1 - (k+1)^{-1}$입니다.

$K$가 자연수이면 (2)에 의해 $K$-꼬리의 급수도 수렴하고
$$
\begin{aligned}
&\sum_{n=K+1}^{\infty} \frac{1}{n(n+1)} \\
&\quad = \sum_{n=1}^{\infty} x_n - \sum_{n=1}^{K} x_n \\
&\quad = 1 - \Bigl(1 - \frac{1}{K+1}\Bigr) = \frac{1}{K+1}
\end{aligned}
$$
입니다. $K = 0$이면 왼쪽은 $\sum_{n=1}^{\infty} x_n = 1$이고 오른쪽은 $(0 + 1)^{-1} = 1$이므로 같은 식이 $0$ 이상인 모든 정수 $K$에서 성립합니다. 예컨대 $K = 2$이면 $\sum_{n=3}^{\infty} \bigl(n(n+1)\bigr)^{-1} = 3^{-1}$입니다.
:::

:::example[선형성으로 구하는 합]
(6)의 (iii)을 $m = 1$, $r = 1/3$에 쓰면($|1/3| < 1$)
$$
\sum_{n=1}^{\infty} \Bigl(\frac{1}{3}\Bigr)^{n} = \frac{1/3}{1 - 1/3} = \frac{1/3}{2/3} = \frac{1}{2}
$$
입니다. 앞의 예시에서 $\sum_{n=1}^{\infty} \bigl(n(n+1)\bigr)^{-1} = 1$이므로, (3)을 $c = 4$와 두 급수에 쓰면 $n$번째 항이 $4 (1/3)^n - \bigl(n(n+1)\bigr)^{-1}$인 수열의 급수가 수렴하고
$$
\begin{aligned}
&\sum_{n=1}^{\infty} \Bigl( 4 \Bigl(\frac{1}{3}\Bigr)^{n} - \frac{1}{n(n+1)} \Bigr) \\
&\qquad = 4 \cdot \frac{1}{2} - 1 = 1
\end{aligned}
$$
입니다. 이 수열의 첫째 항은 $4/3 - 1/2 = 5/6$이고 둘째 항은 $4/9 - 1/6 = 5/18$이어서, 항을 직접 더해 가는 것보다 두 합을 따로 구해 합치는 편이 빠릅니다.
:::

:::counterexample[항끼리 더한 급수는 수렴하지만 두 급수는 발산하는 예]
모든 항이 $1$인 수열 $(x_n)$과 모든 항이 $-1$인 수열 $(y_n)$을 봅니다. 두 수열은 상수 수열이므로 [[basic-limits]]의 (1)에 의해 각각 $1$과 $-1$로 수렴하고, 둘 다 $0$이 아니므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 두 급수는 발산합니다. 그래서 $\sum_{n=1}^{\infty} x_n$과 $\sum_{n=1}^{\infty} y_n$은 쓰지 않습니다.

그런데 $n$번째 항이 $x_n + y_n = 0$인 수열의 급수는 수렴합니다. 모든 항이 $0$인 수열 $(v_n)$은 $v_1 = 0 = x_1 + y_1$이고 $v_{n+1} = 0 = v_n + 0$이므로 [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 부분합 수열이고, [[basic-limits]]의 (1)에 의해 $0$으로 수렴합니다. 곧 $\sum_{n=1}^{\infty} (x_n + y_n) = 0$입니다. (3)은 두 급수가 모두 수렴할 때만 합을 나누어 쓰게 하므로, 여기서 "$\sum_{n=1}^{\infty} (x_n + y_n) = \sum_{n=1}^{\infty} x_n + \sum_{n=1}^{\infty} y_n$"이라고 쓸 수 없습니다. 오른쪽의 두 기호가 아무 수도 나타내지 않기 때문입니다.
:::

## 확인 질문

:::check[$\sum_{n=3}^{\infty} (1/2)^n$은 얼마인가?]
$1/4$입니다. (6)의 (iii)을 $m = 3$, $r = 1/2$에 쓰면 $\sum_{n=3}^{\infty} (1/2)^n = (1/2)^3 \bigl(1 - 1/2\bigr)^{-1} = (1/8) \cdot 2 = 1/4$입니다. 정의대로 읽으면 이것은 $j$번째 항이 $(1/2)^{j+2}$인 수열, 곧 첫째 항이 $1/8$이고 공비가 $1/2$인 등비급수의 합입니다.
:::

:::check[모든 자연수 $n$에서 $0 \le x_n$이고 $\sum_{n=1}^{\infty} x_n = 0$이면 $(x_n)$은 어떤 수열인가?]
모든 항이 $0$인 수열입니다. (4)의 (ii)를 $m = 1$에 쓰면 모든 자연수 $k$에서 $0 \le \sum_{n=1}^{k} x_n \le 0$이므로, [[order-properties-of-reals]]의 (1)의 (ii)와 이 항목의 (1)에 의해 $k$번째 부분합 $s_k$는 $0$입니다. 그러면 $x_1 = s_1 = 0$이고, [[series-and-partial-sums|급수와 부분합]]의 (2)에 의해 모든 자연수 $k$에서 $x_{k+1} = s_{k+1} - s_k = 0$입니다. 거꾸로 모든 항이 $0$인 수열의 급수의 합은 $0$입니다.
:::
