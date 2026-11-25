---
title: 바이어슈트라스 M 판정법
title_en: Weierstrass M-Test
aliases: [M 판정법, 바이어슈트라스 판정법, Weierstrass M-test, M-test]
kind: theorem
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 집합 X 에서 ℝ 로의 사상의 열 (f_n) 과 실수열 (M_n) 이 모든 n 과 x 에서 |f_n(x)| ≤ M_n 을 만족하고 (M_n) 의 급수가 수렴하면, (f_n) 의 함수항 급수는 X 위에서 고르게 수렴하고 각 점에서 절대수렴하며, 합과 꼬리의 합은 (M_n) 의 합과 꼬리의 합으로 눌린다. 어떤 번호부터만 누르는 꼴과 0부터 번호가 붙은 꼴도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, sequence, limit-of-sequence, basic-limits, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, comparison-test, cauchy-criterion-for-series, absolute-convergence, finite-sum-of-reals, linearity-and-order-of-finite-sums, pointwise-convergence, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, series-of-functions]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits 의 11.2.1절 Continuity: Theorem 11.2.4 (Weierstrass M-test) 와 그 뒤 문단, 증명 (p.146), Example 11.2.5 (p.146), Example 11.2.6 (p.147); 11.2.3절 Differentiation 의 Example 11.2.15 (p.150); 11.2.4절 Exercises 의 Exercise 11.2.8 (p.152)"
    checked: original
    note: "출처 Theorem 11.2.4(p.146)는 집합 X 위의 복소숫값 함수 f_n 과 양수 M_n 이 모든 x ∈ X 에서 |f_n(x)| ≤ M_n 을 만족하고 Σ M_n 이 수렴하면 Σ f_n(x) 가 고르게 수렴한다고 진술한다. 이 항목은 값을 실수로 옮기고, M_n > 0 을 요구하지 않는다(X 가 공집합이 아니면 M_n ≥ |f_n(x)| ≥ 0 이 저절로 나온다). 정리 뒤 문단(p.146)은 균등 노름으로 Σ ‖f_n‖_X 가 수렴하면 고르게 수렴한다고 다시 말하고, 정리를 Σ |f_n(x)| 에 쓰면 이 급수도 고르게 수렴하므로 급수가 절대수렴하고 고르게 수렴한다고 적는다. 이 항목은 균등 노름 ‖·‖_X 를 쓰지 않고(이 사이트에서 ‖·‖ 은 내적이 정하는 노름에만 쓴다), 그 문단의 내용을 (1)의 점마다의 절대수렴과 (2)의 둘째 문장으로 둔다. 출처의 증명(p.146)은 Σ M_n 의 부분합이 코시라는 것에서 |Σ_{k=n+1}^{m} f_k(x)| ≤ Σ_{k=n+1}^{m} |f_k(x)| ≤ Σ_{k=n+1}^{m} M_k < ε 를 얻고 Proposition 11.1.4(복소수 급수가 코시라는 것을 부분합의 차로 적은 것)를 들어 급수가 수렴한다고 적은 뒤 꼬리의 합을 ε 이하로 누른다. 이 항목의 증명은 같은 부등식을 쓰고, 고른 수렴은 함수항 급수 항목의 고른 코시 판정 (4)로 얻는다. (3)은 출처 증명의 마지막 식이 ε 으로 누르는 꼬리의 합을 (M_n) 의 꼬리의 합으로 누른 것이다. 출처 Example 11.2.5(p.146, Σ sin(nx)/n² 을 1/n² 으로 누른다)와 Example 11.2.6(p.147, [−r, r] 위의 Σ xⁿ/n! 을 rⁿ/n! 으로 누른다)은 이 정리를 쓰는 예이다. 예시 '꼬리를 계산할 수 있는 예'와 '어떤 번호부터 누르는 예'도 x 에 따르지 않는 수의 급수로 누르는 같은 쓰임이고, 11.2.3절 Differentiation 의 Example 11.2.15(p.150)도 (3/4)ⁿφ(4ⁿx) 를 등비급수의 항 (3/4)ⁿ 으로 누르며, 예시 '어떤 번호부터 누르는 예'의 M_n = (2⁻¹)ⁿ 도 등비급수의 항이다. 반례 '누르는 수가 점에 따르는 예'의 함수열은 출처 연습문제 11.2.8(p.152, 이 정리의 역의 반례)의 함수열처럼 점마다 0 이 아닌 항이 많아야 하나인 열이다. 그 연습문제의 급수는 고르게 수렴하고, 이 반례의 급수는 고르게 수렴하지 않는다."
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Proposition 6.2.11 의 증명 (p.241); 2.5.7절 Exercises 의 Exercise 2.5.1, Exercise 2.5.3 (p.97)"
    checked: original
    note: "Basic Analysis I 의 Proposition 6.2.11 의 증명(p.241)은 [a − r, a + r] 위의 |c_n(x − a)ⁿ| 을 |c_n|rⁿ 으로 누르고 꼬리의 합 Σ_{n=k+1}^∞ |c_n|rⁿ < ε 으로 부분합이 고르게 코시임을 보인다. 이것은 이 정리의 증명과 같은 논법을 멱급수에 쓴 것이다. 예시 '꼬리를 계산할 수 있는 예'의 M_n = (n(n+1))⁻¹ 은 연습문제 2.5.1(p.97, k 번째 부분합이 k/(k+1) 인 급수)과 연습문제 2.5.3 d)(p.97)의 급수의 항과 같은 수열이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(M 판정의 가정과 빈 정의역의 경우 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
사상의 열, 값의 수열 $(f_n(x))$, 식으로 정한 사상의 열은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 함수항 급수의 점별 수렴과 고른 수렴, 합 함수, 0부터 번호가 붙은 사상의 열의 함수항 급수는 [[series-of-functions|함수항 급수]]의 것이며, 부분합 함수 $F_m$과 0부터 번호가 붙은 사상의 열은 [[finite-sums-of-functions|함수의 유한 합]]의 것이다. 급수의 수렴과 절대수렴은 [[series-and-partial-sums]], [[absolute-convergence]]의 것이고, 기호 $\sum_{n=1}^{\infty}$, $\sum_{n=m+1}^{\infty}$는 [[sum-of-a-series]], $\sum_{n=0}^{k}$, $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이다. 아래에서 $X$는 집합, $(f_n)$은 $X$에서 $\mathbb{R}$로의 사상의 열, $(M_n)$은 실수열이다. $n$번째 사상이 $x$를 $|f_n(x)|$로 보내는 사상의 열을 $(|f_n|)$로 쓴다.

**바이어슈트라스 M 판정법.** 모든 자연수 $n$과 $X$의 모든 점 $x$에서
$$
|f_n(x)| \le M_n
$$
이고 $(M_n)$의 급수가 수렴한다고 하자. 그러면 다음이 성립한다.

1. (점마다 절대수렴) 모든 $x \in X$에서 $(f_n(x))$의 급수는 절대수렴하고, 따라서 수렴하며
   $$
   \begin{aligned}
   \Bigl| \sum_{n=1}^{\infty} f_n(x) \Bigr| &\le \sum_{n=1}^{\infty} |f_n(x)| \\
   &\le \sum_{n=1}^{\infty} M_n
   \end{aligned}
   $$
   이다.
2. (고른 수렴) $(f_n)$의 함수항 급수는 $X$ 위에서 합 함수로 고르게 수렴한다. $(|f_n|)$의 함수항 급수도 $X$ 위에서 고르게 수렴한다.
3. (꼬리의 어림) $0$ 이상인 모든 정수 $m$과 $X$의 모든 점 $x$에서
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=1}^{\infty} f_n(x) - \sum_{n=1}^{m} f_n(x) \Bigr| \\
   &\quad = \Bigl| \sum_{n=m+1}^{\infty} f_n(x) \Bigr| \le \sum_{n=m+1}^{\infty} M_n
   \end{aligned}
   $$
   이다.
4. (어떤 번호부터 누르는 경우) 위의 가정 가운데 부등식을 "어떤 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$과 $X$의 모든 점 $x$에서 $|f_n(x)| \le M_n$"으로 바꾸고 $(M_n)$의 급수가 수렴한다고 하자. 그러면 모든 $x \in X$에서 $(f_n(x))$의 급수는 절대수렴하고, (2)가 성립하며, $K - 1$ 이상인 모든 정수 $m$과 $X$의 모든 점 $x$에서 (3)의 등식과 부등식이 성립한다.
5. (0부터 번호가 붙은 열) $(f_n)_{n \ge 0}$이 $X$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열이고 $(M_n)_{n \ge 0}$이 0부터 번호가 붙은 수열이며, $0$ 이상인 모든 정수 $n$과 $X$의 모든 점 $x$에서 $|f_n(x)| \le M_n$이고 $(M_n)_{n \ge 0}$의 급수가 수렴한다고 하자. 그러면 모든 $x \in X$에서 $n$에서의 값이 $|f_n(x)|$인 0부터 번호가 붙은 수열의 급수와 $(f_n(x))_{n \ge 0}$의 급수가 수렴하고 $\left| \sum_{n=0}^{\infty} f_n(x) \right| \le \sum_{n=0}^{\infty} |f_n(x)| \le \sum_{n=0}^{\infty} M_n$이다. $(f_n)_{n \ge 0}$의 함수항 급수는 $X$ 위에서 합 함수로 고르게 수렴하고, $0$ 이상인 모든 정수 $m$과 $X$의 모든 점 $x$에서
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=0}^{\infty} f_n(x) - \sum_{n=0}^{m} f_n(x) \Bigr| \\
   &\quad \le \sum_{n=m+1}^{\infty} M_n
   \end{aligned}
   $$
   이다.
:::

:::english
Sequences of maps, the sequence of values $(f_n(x))$ and sequences of maps given by formulas are those of the entry on sequences of maps and pointwise convergence; pointwise and uniform convergence of a series of functions, the sum function and the series of functions of a sequence of maps indexed from zero are those of the entry on series of functions; and the partial sum functions $F_m$ and sequences of maps indexed from zero are those of the entry on finite sums of functions. Convergence and absolute convergence of a series are those of the entries on series and partial sums and on absolute convergence, the symbols $\sum_{n=1}^{\infty}$, $\sum_{n=m+1}^{\infty}$ are those of the entry on the notation for the sum of a series, and $\sum_{n=0}^{k}$, $\sum_{n=0}^{\infty}$ are those of the entry on sums of sequences indexed from zero. Below, $X$ is a set, $(f_n)$ is a sequence of maps from $X$ to $\mathbb{R}$, and $(M_n)$ is a sequence of real numbers. The sequence of maps whose $n$th map sends $x$ to $|f_n(x)|$ is written $(|f_n|)$.

**Weierstrass M-test.** Suppose that for every natural number $n$ and every point $x$ of $X$
$$
|f_n(x)| \le M_n ,
$$
and that the series of $(M_n)$ converges. Then the following hold.

1. (Absolute convergence at each point) For every $x \in X$ the series of $(f_n(x))$ converges absolutely, hence converges, and
   $$
   \begin{aligned}
   \Bigl| \sum_{n=1}^{\infty} f_n(x) \Bigr| &\le \sum_{n=1}^{\infty} |f_n(x)| \\
   &\le \sum_{n=1}^{\infty} M_n .
   \end{aligned}
   $$
2. (Uniform convergence) The series of functions of $(f_n)$ converges uniformly on $X$ to its sum function. The series of functions of $(|f_n|)$ also converges uniformly on $X$.
3. (Estimate of the tail) For every integer $m \ge 0$ and every point $x$ of $X$
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=1}^{\infty} f_n(x) - \sum_{n=1}^{m} f_n(x) \Bigr| \\
   &\quad = \Bigl| \sum_{n=m+1}^{\infty} f_n(x) \Bigr| \le \sum_{n=m+1}^{\infty} M_n .
   \end{aligned}
   $$
4. (Bounds from some index on) Replace the inequality in the hypothesis by "there is a natural number $K$ such that $|f_n(x)| \le M_n$ for every natural number $n \ge K$ and every point $x$ of $X$", and suppose the series of $(M_n)$ converges. Then for every $x \in X$ the series of $(f_n(x))$ converges absolutely, (2) holds, and the equation and inequality of (3) hold for every integer $m \ge K - 1$ and every point $x$ of $X$.
5. (Sequences indexed from zero) Suppose $(f_n)_{n \ge 0}$ is a sequence of maps indexed from zero from $X$ to $\mathbb{R}$, $(M_n)_{n \ge 0}$ is a sequence indexed from zero, $|f_n(x)| \le M_n$ for every integer $n \ge 0$ and every point $x$ of $X$, and the series of $(M_n)_{n \ge 0}$ converges. Then for every $x \in X$ the series of the sequence indexed from zero whose value at $n$ is $|f_n(x)|$ and the series of $(f_n(x))_{n \ge 0}$ converge, and $\left| \sum_{n=0}^{\infty} f_n(x) \right| \le \sum_{n=0}^{\infty} |f_n(x)| \le \sum_{n=0}^{\infty} M_n$. The series of functions of $(f_n)_{n \ge 0}$ converges uniformly on $X$ to its sum function, and for every integer $m \ge 0$ and every point $x$ of $X$
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=0}^{\infty} f_n(x) - \sum_{n=0}^{m} f_n(x) \Bigr| \\
   &\quad \le \sum_{n=m+1}^{\infty} M_n .
   \end{aligned}
   $$
:::

## 직관

점 $x$ 하나에서 보면 이 정리는 비교 판정법입니다. $|f_n(x)| \le M_n$이고 $(M_n)$의 급수가 수렴하므로 $(|f_n(x)|)$의 급수가 수렴합니다. 중요한 것은 $M_n$이 $x$에 따르지 않는다는 점입니다. 그래서 $m$번째 부분합과 합의 차, 곧 꼬리의 합은 모든 점에서 한꺼번에 같은 수 $\sum_{n=m+1}^{\infty} M_n$ 이하이고, 이 수는 $m$이 커지면 $0$에 가까워집니다. 이것이 (3)이고, 고른 수렴은 여기서 바로 나옵니다.

비유하자면 여러 사람이 날마다 돈을 쓰는데, $n$번째 날 누가 쓰는 돈도 그날의 상한 $M_n$을 넘지 않고 상한들의 총합이 유한한 경우입니다. 그러면 $m$번째 날 이후에 남은 지출은 누구든 $\sum_{n=m+1}^{\infty} M_n$을 넘지 않으므로, 모든 사람의 남은 지출이 한꺼번에 작아집니다. 비유가 맞는 곳은 상한이 사람(점 $x$)에 따르지 않고 날($n$)에만 따른다는 것입니다. 사람마다 상한이 따로 있으면 이 결론은 나오지 않을 수 있습니다(반례 '누르는 수가 점에 따르는 예').

(4)는 처음 몇 항에서는 누를 필요가 없다는 것입니다. 급수의 수렴은 꼬리만으로 정해지기 때문입니다. (5)는 멱급수처럼 번호가 $0$부터인 급수에 쓰기 위한 꼴입니다.

## 증명

:::idea
(1)은 점마다의 비교 판정법이다. (2)는 함수항 급수의 고른 코시 판정을 쓴다. $(M_n)$의 급수가 수렴하므로 그 부분합의 차가 작아지고, $|\sum_{n=m+1}^{k} f_n(x)| \le \sum_{n=m+1}^{k} M_n$이 모든 $x$에서 같은 수로 누른다.
:::

:::hint
$(M_n)$의 급수에 급수의 코시 판정법을 쓰면, 어떤 번호부터 $\sum_{n=m+1}^{k} M_n$이 $\varepsilon$보다 작다.
:::

:::hint
꼬리의 어림은 꼬리의 합에 급수의 삼각부등식과 항별 비교를 쓰면 된다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 합과 차는 정수이다([[even-and-odd]]). [[order-properties-of-reals]]의 (10)에 의해 정수 사이의 부등식은 실수의 부등식으로 읽어도 뜻이 같고, 실수의 부등식은 그 항목의 번호와 [[absolute-value]]의 성질로 다룬다. $(|f_n|)$이 사상의 열이라는 것은 [[pointwise-convergence]]의 (1)($r(n, x) = |f_n(x)|$)에 의한 것이다.

(4)를 먼저 증명한다. (1)–(3)은 (4)를 $K = 1$로 쓰고 (1)의 부등식을 더해 얻는다.

**4의 증명.** $K$를 가정의 자연수라 하자.

*점마다 절대수렴.* $x \in X$를 잡는다. $K$ 이상인 모든 자연수 $n$에서 $0 \le |f_n(x)| \le M_n$이고 $(M_n)$의 급수가 수렴하므로, [[comparison-test|비교 판정법]]의 (4)에 의해 $n$번째 항이 $|f_n(x)|$인 수열의 급수가 수렴한다. 곧 $(f_n(x))$의 급수는 [[absolute-convergence|절대수렴]]의 뜻으로 절대수렴하고, 그 (1)에 의해 수렴한다. 따라서 [[series-of-functions|함수항 급수]]의 (1)에 의해 $(f_n)$의 함수항 급수와 $(|f_n|)$의 함수항 급수는 점별 수렴한다.

*고른 수렴.* $(M_n)$의 부분합 수열을 $(t_k)$라 하자. $\varepsilon$을 양의 실수라 하면, $(M_n)$의 급수가 수렴하므로 [[cauchy-criterion-for-series|급수의 코시 판정법]]의 (2)에 의해 자연수 $M$이 있어 $M \le m < k$인 모든 자연수 $m$, $k$에서 $|t_k - t_m| < \varepsilon$이다. $N = M + K$로 두면 $N$은 자연수이고 $M \le N$, $K \le N$이다((Z7)과 (Z1)). $N \le m < k$인 정수 $m$, $k$와 $x \in X$를 잡자. $m + 1 \le n \le k$인 정수 $n$은 $K \le N \le m < n$이므로 $|f_n(x)| \le M_n$을 만족한다. 따라서
$$
\begin{aligned}
&\Bigl| \sum_{n=m+1}^{k} f_n(x) \Bigr| \\
&\quad \le \sum_{n=m+1}^{k} |f_n(x)| \le \sum_{n=m+1}^{k} M_n \\
&\quad = t_k - t_m \le |t_k - t_m| < \varepsilon
\end{aligned}
$$
이다. 첫째 부등식은 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (5), 둘째 부등식은 그 (3), 등식은 [[finite-sum-of-reals]]의 (1)($m$, $k$는 자연수이고 $m \le k$), 그다음 부등식은 [[absolute-value]]의 (6)이다. $N$은 $x$에 따르지 않으므로 [[series-of-functions]]의 (4)에 의해 $(f_n)$의 함수항 급수는 합 함수로 고르게 수렴한다. $(|f_n|)$에 대해서는 같은 계산에서 $\sum_{n=m+1}^{k} |f_n(x)|$가 [[linearity-and-order-of-finite-sums]]의 (6)에 의해 $0$ 이상이므로 [[absolute-value]]의 (1)에 의해 그 절댓값이 자신과 같고, 위의 부등식의 둘째 줄부터 같은 결론이 나온다. 다시 [[series-of-functions]]의 (4)를 쓴다.

*꼬리의 어림.* $m$을 $K - 1$ 이상인 정수, $x \in X$라 하자. $m \ge K - 1 \ge 0$이다. [[series-of-functions]]의 (3)에 의해 $n \ge m + 1$에서 정해진 항 $f_n(x)$의 급수가 수렴하고 등식
$$
\sum_{n=1}^{\infty} f_n(x) - \sum_{n=1}^{m} f_n(x) = \sum_{n=m+1}^{\infty} f_n(x)
$$
이 성립한다. $(|f_n(x)|)$의 급수와 $(M_n)$의 급수도 수렴하므로 [[sum-of-a-series|급수의 합의 기호]]의 (2)에 의해 $n \ge m + 1$에서 정해진 항 $|f_n(x)|$의 급수와 $M_n$의 급수가 수렴한다. $n \ge m + 1$이면 $n \ge K$이므로 $0 \le |f_n(x)| \le M_n$이다. 그 항목의 (5)와 (4)의 (iii)을 첫 번호 $m + 1$에 쓰면
$$
\begin{aligned}
\Bigl| \sum_{n=m+1}^{\infty} f_n(x) \Bigr| &\le \sum_{n=m+1}^{\infty} |f_n(x)| \\
&\le \sum_{n=m+1}^{\infty} M_n
\end{aligned}
$$
이다.

**1–3의 증명.** 정리의 가정은 (4)의 가정에서 $K = 1$인 경우이다. 따라서 (2)와 (1)의 절대수렴이 성립하고, $K - 1 = 0$이므로 (3)이 $0$ 이상인 모든 정수 $m$에서 성립한다. (1)의 부등식은 4의 증명의 마지막 계산을 $m = 0$에 쓴 것과 같다. 곧 모든 $n$에서 $0 \le |f_n(x)| \le M_n$이므로 [[sum-of-a-series]]의 (5)와 (4)의 (iii)을 첫 번호 $1$에 쓰면 $\left| \sum_{n=1}^{\infty} f_n(x) \right| \le \sum_{n=1}^{\infty} |f_n(x)| \le \sum_{n=1}^{\infty} M_n$이다.

**5의 증명.** $(g_j)$를 $(f_n)_{n \ge 0}$의 한 칸 옮긴 사상의 열([[finite-sums-of-functions]]의 (6)의 (i))이라 하고, $(M_n)_{n \ge 0}$을 한 칸 옮긴 수열을 $(y_j)$라 하자. 자연수 $j$에서 $g_j = f_{j-1}$, $y_j = M_{j-1}$이고 $j - 1 \ge 0$이므로 모든 $x$에서 $|g_j(x)| \le y_j$이다. [[series-indexed-from-zero]]의 급수의 정의에 의해 $(y_j)$의 급수가 수렴한다. 따라서 (1)–(3)을 $(g_j)$와 $(y_j)$에 쓸 수 있다.

- $x \in X$에서 (1)에 의해 $(|g_j(x)|)$의 급수와 $(g_j(x))$의 급수가 수렴하고 $\left| \sum_{j=1}^{\infty} g_j(x) \right| \le \sum_{j=1}^{\infty} |g_j(x)| \le \sum_{j=1}^{\infty} y_j$이다. $(|g_j(x)|)$와 $(g_j(x))$는 각각 $n$에서의 값이 $|f_n(x)|$인 0부터 번호가 붙은 수열과 $(f_n(x))_{n \ge 0}$을 한 칸 옮긴 수열이고 $(y_j)$는 $(M_n)_{n \ge 0}$을 한 칸 옮긴 수열이므로, [[series-indexed-from-zero]]의 급수의 정의에 의해 두 0부터의 급수가 수렴하고 세 합은 차례로 $\sum_{n=0}^{\infty} f_n(x)$, $\sum_{n=0}^{\infty} |f_n(x)|$, $\sum_{n=0}^{\infty} M_n$과 같다.
- (2)에 의해 $(g_j)$의 함수항 급수는 고르게 수렴하고, [[series-of-functions]]의 (6)의 정의에 의해 이것은 $(f_n)_{n \ge 0}$의 함수항 급수가 고르게 수렴하는 것이다. 그 고른 극한이 합 함수라는 것은 [[series-of-functions]]의 (6)의 (iv)이다.
- $m \ge 0$이고 $x \in X$이면 [[series-of-functions]]의 (6)의 (iv)에 의해 $\sum_{n=0}^{\infty} f_n(x) - \sum_{n=0}^{m} f_n(x) = \sum_{n=m+1}^{\infty} f_n(x)$이다. [[series-indexed-from-zero]]의 (8)($K = m$)에 의해 $n \ge m + 1$에서 정해진 항 $|f_n(x)|$의 급수와 $M_n$의 급수가 수렴하고, $n \ge m + 1$에서 $0 \le |f_n(x)| \le M_n$이므로 4의 증명의 마지막 계산과 같이 [[sum-of-a-series]]의 (5)와 (4)의 (iii)에 의해 $\left| \sum_{n=m+1}^{\infty} f_n(x) \right| \le \sum_{n=m+1}^{\infty} M_n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[꼬리를 계산할 수 있는 예]
$X = [-1, 1]$에서 $f_n(x) = x^n \bigl(n(n+1)\bigr)^{-1}$로 정합니다. $|x| \le 1$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (4)와 (6)의 (ii)에 의해 $|x^n| = |x|^n \le 1^n = 1$이고, $M_n = \bigl(n(n+1)\bigr)^{-1}$로 두면 모든 $n$과 $x$에서 $|f_n(x)| \le M_n$입니다. [[comparison-test|비교 판정법]]의 (5)에 의해 $(M_n)$의 급수는 수렴하고 합은 $1$이며 $k$번째 부분합은 $1 - (k + 1)^{-1}$입니다. 따라서 (2)에 의해 함수항 급수는 $[-1, 1]$ 위에서 고르게 수렴하고, (1)에 의해 합 함수 $s$는 $|s(x)| \le 1$을 만족합니다.

꼬리의 합은 [[sum-of-a-series|급수의 합의 기호]]의 (2)에 의해 $\sum_{n=m+1}^{\infty} M_n = 1 - \bigl(1 - (m + 1)^{-1}\bigr) = (m + 1)^{-1}$이므로, (3)에 의해 $[-1, 1]$의 모든 점에서
$$
\Bigl| s(x) - \sum_{n=1}^{m} \frac{x^n}{n(n+1)} \Bigr| \le \frac{1}{m + 1}
$$
입니다. 예컨대 $m = 99$이면 차가 모든 점에서 $0.01$ 이하입니다. $x = 1$에서는 $f_n(1) = M_n$이므로 이 부등식이 등식입니다.
:::

:::example[어떤 번호부터 누르는 예]
$X = [-2, 2]$에서 $f_n(x) = x^n (n^n)^{-1}$로 정합니다. $|x| \le 2$이므로 $|f_n(x)| \le 2^n (n^n)^{-1} = (2 n^{-1})^n$이고([[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii), (3), (4), (6)의 (ii)), $n \ge 4$이면 $0 < 2 n^{-1} \le 2^{-1}$이므로 $(2 n^{-1})^n \le (2^{-1})^n$입니다. $M_n = (2^{-1})^n$으로 두면 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)에 의해 $(M_n)$의 급수는 수렴하고 $\sum_{n=m+1}^{\infty} M_n = (2^{-1})^{m+1} (1 - 2^{-1})^{-1} = (2^{-1})^m$입니다.

$n = 1$, $x = 2$에서는 $|f_1(2)| = 2 > 2^{-1} = M_1$이므로 모든 $n$에서 누르는 가정은 이 $(M_n)$으로 성립하지 않습니다. (4)를 $K = 4$로 쓰면 함수항 급수는 $[-2, 2]$ 위에서 고르게 수렴하고, $m \ge 3$이면 모든 점에서 합 함수와 $m$번째 부분합의 차가 $(2^{-1})^m$ 이하입니다.
:::

:::counterexample[누르는 수가 점에 따르는 예]
$X = \mathbb{R}$에서 $f_n(x)$를 $x = n$이면 $1$, 그 밖에서 $0$으로 정합니다. 점 $x$마다 보면 $f_n(x) \ne 0$인 $n$은 많아야 하나이므로 $x$마다 $M_n(x) = |f_n(x)|$로 두면 $(M_n(x))$의 급수는 수렴합니다. 그러나 $x$에 따르지 않는 $(M_n)$으로 $|f_n(x)| \le M_n$이 모든 $x$에서 성립하려면 $x = n$을 넣어 $M_n \ge 1$이어야 하고, 그러면 모든 $n$에서 $|M_n - 0| \ge 1$이므로 $(M_n)$은 $0$으로 수렴하지 않고([[limit-of-sequence]]의 정의에서 $\varepsilon = 1$), [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항]]의 (2)에 의해 $(M_n)$의 급수는 발산합니다. 실제로 이 함수항 급수는 고르게 수렴하지 않습니다. 자연수 $m$에서 $x = m + 1$을 넣으면 $n \ge m + 1$에서 정해진 항 $f_n(m + 1)$은 첫 항만 $1$이고 나머지는 $0$이므로, 1부터 다시 번호 붙인 수열의 부분합은 모두 $1$이고([[sum-of-a-series]]의 (1)) [[basic-limits]]의 (1)에 의해 꼬리의 합 $\sum_{n=m+1}^{\infty} f_n(m + 1)$은 $1$입니다. 따라서 [[series-of-functions|함수항 급수]]의 (3)의 조건이 $\varepsilon = 1$에서 깨집니다.
:::

## 확인 질문

:::check[모든 $f_n$이 영함수이면 $(M_n)$으로 무엇을 잡을 수 있고, 정리는 무엇을 말하는가?]
모든 항이 $0$인 수열 $M_n = 0$을 잡을 수 있습니다. 그 급수는 수렴하고 합은 $0$이며 꼬리의 합도 $0$입니다. 정리는 함수항 급수가 고르게 수렴하고 (3)에 의해 모든 점에서 합 함수가 $m$번째 부분합과 같다고 말합니다. 실제로 부분합 함수는 모두 영함수이고 합 함수도 영함수입니다.
:::

:::check[$X$가 원소 하나 $p$만으로 이루어진 집합이면 이 정리는 무엇이 되는가?]
$a_n = f_n(p)$로 두면 가정은 모든 $n$에서 $|a_n| \le M_n$이고 $(M_n)$의 급수가 수렴한다는 것입니다. 결론은 $(a_n)$의 급수가 절대수렴하고 $\left|\sum_{n=1}^{\infty} a_n\right| \le \sum_{n=1}^{\infty} |a_n| \le \sum_{n=1}^{\infty} M_n$이라는 것이고, 고른 수렴은 한 점에서의 수렴과 같습니다. 곧 절댓값에 쓴 비교 판정법과 급수의 삼각부등식이 됩니다.
:::
