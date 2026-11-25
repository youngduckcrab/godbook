---
title: 고르게 수렴하는 함수항 급수의 연속과 적분
title_en: Continuity and Integration of Uniformly Convergent Series of Functions
aliases: [함수항 급수의 항별 적분, 합 함수의 연속, 급수와 적분의 교환, termwise integration, term-by-term integration of a series, continuity of the sum of a series]
kind: theorem
field: real-analysis
msc: ["40A30", "26A42"]
level: undergrad
summary: 항들이 연속이고 함수항 급수가 고르게 수렴하면 합 함수도 연속이고, 한 점의 둘레에서만 고르게 수렴해도 그 점에서 연속이다. 닫힌구간 위에서 항들이 리만 적분가능하고 고르게 수렴하면 합 함수도 적분가능하고 그 적분은 항별 적분의 급수의 합이다. 적분의 어림, 방향 있는 꼴, 0부터 번호가 붙은 꼴도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, interval, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, ratio-test-for-sequences, series-and-partial-sums, real-valued-function, continuous-function, riemann-integral, oriented-integral, linearity-of-the-integral, antiderivative-and-integral-of-power, change-of-variables, natural-logarithm, finite-sum-of-reals, telescoping-sum, pointwise-convergence, uniform-convergence, uniform-limit-of-continuous-maps, uniform-convergence-and-integral, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, series-of-functions, weierstrass-m-test]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits 의 11.2.1절 Continuity: Corollary 11.2.8 과 Example 11.2.10 (p.148); 11.2.2절 Integration: Proposition 11.2.11 (p.148), Corollary 11.2.12 와 Example 11.2.13 (p.149); 11.3.3절 Properties of analytic functions 의 Proposition 11.3.4 의 증명 (p.156)"
    checked: original
    note: "출처 Corollary 11.2.8(p.148)은 거리공간 사이의 연속 사상의 열이 고르게 수렴하면 극한이 연속이라는 사상의 열에 대한 진술이고, Example 11.2.10(p.148)은 이것을 고르게 수렴하는 함수항 급수 Σ sin(nx)/n² 에 써서 합이 연속이라고 적는다. Corollary 11.2.12(p.149)는 [a, b] 위의 리만 적분가능한 복소숫값 f_n 의 급수 Σ f_n(x) 가 고르게 수렴하면 급수가 [a, b] 에서 리만 적분가능하고 ∫ Σ f_n = Σ ∫ f_n 이라고 진술하며, 증명은 따로 적지 않고 Proposition 11.2.11(p.148, 고르게 수렴하는 적분가능한 함수열의 극한의 적분)의 따름으로 둔다. 이 항목은 값을 실수로 옮겼다. (1)의 한 점의 둘레에서만 고르게 수렴하는 꼴은 출처 Proposition 11.3.4 의 증명(p.156)이 멱급수의 연속을 보일 때 점 z₀ 를 포함하는 작은 공 위의 고른 수렴만 쓰는 것과 같은 발상이고, 이 항목은 연속을 ε/3 으로 직접 증명한다. (4)의 적분의 어림과 (5)의 방향 있는 꼴은 거리공간과 완비성 강의의 uniform-convergence-and-integral 의 (3)(4)를 부분합 함수의 열에 쓴 것이다. 예시 '등비급수의 항별 적분'의 급수 Σ (x/2)ⁿ 은 등비급수를 항으로 한 함수항 급수이고, 출처 Example 11.2.13(p.149)처럼 고른 수렴을 M 판정법으로 보인 뒤 항별로 적분한다. 반례 '점별로만 수렴하는 급수에서 항별 적분의 급수의 합과 합 함수의 적분이 다른 예'는 Basic Analysis I 의 Example 6.2.3(p.236, 0 으로 점별 수렴하지만 적분이 0 으로 가지 않는 함수열)과 같은 결론을 부분합 함수의 열로 보인 것이다."
  - ref: lebl-basic-analysis
    loc: "6.2.1절 Continuity of the limit 의 Theorem 6.2.2 (p.235); 6.2.2절 Integral of the limit 의 Example 6.2.3 (p.236), Theorem 6.2.4 (p.237); 6.2.4절 Convergence of power series 의 Proposition 6.2.11 의 증명 (p.241), Corollary 6.2.12 (p.241); 6.2.5절 Exercises 의 Exercise 6.2.15 (p.244)"
    checked: original
    note: "출처 Theorem 6.2.2(p.235)와 Theorem 6.2.4(p.237)는 실함수열의 고른 극한의 연속과 적분에 관한 정리이고, 이 사이트에서는 거리공간과 완비성 강의의 uniform-limit-of-continuous-maps 와 uniform-convergence-and-integral 이 그것이다. Proposition 6.2.11 의 증명(p.241)은 멱급수의 부분합이 [a − r, a + r] 위에서 고르게 수렴하므로 극한이 그 위에서 연속이고 r 이 임의이므로 극한이 열린구간 전체에서 연속이라고 적는다. (1)과 (2)의 둘째 문장은 이 논법을 일반 함수항 급수에 쓴 것이다. Corollary 6.2.12(p.241)는 멱급수를 항별로 적분한다. 연습문제 6.2.15(p.244)는 모든 [−k, k] 위에서 고르게 수렴하는 연속함수열의 극한이 연속이라는 것을 묻고, (2)의 둘째 문장과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합 함수·꼬리·반례 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
사상의 열, 점별 수렴과 고른 수렴, "$A$ 위에서"는 [[pointwise-convergence|사상의 열과 점별 수렴]]과 [[uniform-convergence|고른 수렴]]의 것이고, 부분합 함수 $F_m$, 0부터 번호가 붙은 사상의 열과 그 부분합 함수 $G_m$은 [[finite-sums-of-functions|함수의 유한 합]]의 것이며, 함수항 급수의 점별 수렴과 고른 수렴, "$A$ 위에서", 합 함수는 [[series-of-functions|함수항 급수]]의 것이다. 연속은 [[continuous-function]]의 것이고, 구간은 [[interval]], 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]], "$\alpha$와 $\beta$ 사이에 있다", "$\alpha$와 $\beta$ 사이에서 적분가능"과 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. 급수의 합의 기호는 [[sum-of-a-series]]와 [[series-indexed-from-zero]]의 것이다.

1. (한 점에서의 연속) $S$가 $\mathbb{R}$의 부분집합이고 $(f_n)$이 $S$에서 $\mathbb{R}$로의 사상의 열이며 $c \in S$라 하자. $(f_n)$의 함수항 급수가 $S$ 위에서 점별 수렴하고 그 합 함수를 $s$라 하자. 모든 자연수 $n$에서 $f_n$이 $c$에서 연속이고, 양의 실수 $\delta_0$이 있어 함수항 급수가 $A = \{x \in S : |x - c| < \delta_0\}$ 위에서 고르게 수렴하면, $s$는 $c$에서 연속이다.
2. (연속함수) (1)과 같은 $S$, $(f_n)$, $s$에서 모든 $f_n$이 연속함수이고 $(f_n)$의 함수항 급수가 $S$ 위에서 고르게 수렴하면, 합 함수 $s$는 연속함수이다. 고르게 수렴한다는 가정 대신 "$S$의 각 점 $c$마다 양의 실수 $\delta_0$이 있어 함수항 급수가 $\{x \in S : |x - c| < \delta_0\}$ 위에서 고르게 수렴한다"를 가정해도 $s$는 연속함수이다.
3. (항별 적분) $a < b$이고 $(f_n)$이 $[a, b]$에서 $\mathbb{R}$로의 사상의 열로서 모든 $f_n$이 리만 적분가능하며, $(f_n)$의 함수항 급수가 고르게 수렴하고 그 합 함수가 $s$라 하자. 그러면 $s$는 리만 적분가능하고, $n$번째 항이 $\int_a^b f_n$인 수열의 급수는 수렴하며
   $$
   \sum_{n=1}^{\infty} \int_a^b f_n = \int_a^b s
   $$
   이다. 곧 모든 $x$에서 $s(x) = \sum_{n=1}^{\infty} f_n(x)$이므로 $\int_a^b \sum_{n=1}^{\infty} f_n(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx$이다.
4. (적분의 어림) (3)의 가정 아래, 자연수 $m$과 $0 \le \eta$인 실수 $\eta$가 $[a, b]$의 모든 $x$에서 $|s(x) - F_m(x)| \le \eta$를 만족하면
   $$
   \Bigl| \int_a^b s - \sum_{n=1}^{m} \int_a^b f_n \Bigr| \le \eta\,(b - a)
   $$
   이다.
5. (방향 있는 꼴) $I$가 구간이고 $(f_n)$이 $I$에서 $\mathbb{R}$로의 사상의 열이며, $(f_n)$의 함수항 급수가 $I$ 위에서 고르게 수렴하고 그 합 함수가 $s$라 하자. $\alpha$, $\beta$가 $I$의 원소이고 모든 $f_n$이 $\alpha$와 $\beta$ 사이에서 적분가능하면, $s$도 $\alpha$와 $\beta$ 사이에서 적분가능하고 $n$번째 항이 $\int_\alpha^\beta f_n$인 수열의 급수는 수렴하며 $\sum_{n=1}^{\infty} \int_\alpha^\beta f_n = \int_\alpha^\beta s$이다. 또 자연수 $m$과 $0 \le \eta$인 실수 $\eta$가 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $|s(t) - F_m(t)| \le \eta$를 만족하면 $\left| \int_\alpha^\beta s - \sum_{n=1}^{m} \int_\alpha^\beta f_n \right| \le \eta\,|\beta - \alpha|$이다.
6. (0부터 번호가 붙은 열) (1)–(5)는 0부터 번호가 붙은 사상의 열 $(f_n)_{n \ge 0}$에 대해서도 "모든 자연수 $n$"을 "$0$ 이상인 모든 정수 $n$"으로, "자연수 $m$"과 $F_m$을 "$0$ 이상인 정수 $m$"과 $G_m$으로, $\sum_{n=1}^{m}$과 $\sum_{n=1}^{\infty}$를 $\sum_{n=0}^{m}$과 $\sum_{n=0}^{\infty}$로 바꾸어 성립한다. 예컨대 (3)의 결론은 $n$에서의 값이 $\int_a^b f_n$인 0부터 번호가 붙은 수열의 급수가 수렴하고 $\sum_{n=0}^{\infty} \int_a^b f_n = \int_a^b s$라는 것이다.
:::

:::english
Sequences of maps, pointwise and uniform convergence and "on $A$" are those of the entries on sequences of maps and pointwise convergence and on uniform convergence; the partial sum functions $F_m$, sequences of maps indexed from zero and their partial sum functions $G_m$ are those of the entry on finite sums of functions; and pointwise and uniform convergence of a series of functions, "on $A$" and the sum function are those of the entry on series of functions. Continuity, intervals, Riemann integrability and $\int_a^b f$, "lies between $\alpha$ and $\beta$", "integrable between $\alpha$ and $\beta$" and the oriented integral $\int_\alpha^\beta f$ are those of the corresponding entries. The notation for sums of series is that of the entries on the notation for the sum of a series and on sums of sequences indexed from zero.

1. (Continuity at a point) Let $S$ be a subset of $\mathbb{R}$, $(f_n)$ a sequence of maps from $S$ to $\mathbb{R}$, and $c \in S$. Suppose the series of functions of $(f_n)$ converges pointwise on $S$, with sum function $s$. If $f_n$ is continuous at $c$ for every natural number $n$ and there is a positive real $\delta_0$ such that the series of functions converges uniformly on $A = \{x \in S : |x - c| < \delta_0\}$, then $s$ is continuous at $c$.
2. (Continuous functions) For $S$, $(f_n)$, $s$ as in (1), if every $f_n$ is a continuous function and the series of functions of $(f_n)$ converges uniformly on $S$, then the sum function $s$ is a continuous function. The sum function $s$ is also a continuous function if, instead of uniform convergence, one assumes that for each point $c$ of $S$ there is a positive real $\delta_0$ such that the series of functions converges uniformly on $\{x \in S : |x - c| < \delta_0\}$.
3. (Termwise integration) Let $a < b$, let $(f_n)$ be a sequence of maps from $[a, b]$ to $\mathbb{R}$ with every $f_n$ Riemann integrable, and suppose the series of functions of $(f_n)$ converges uniformly, with sum function $s$. Then $s$ is Riemann integrable, the series of the sequence whose $n$th term is $\int_a^b f_n$ converges, and
   $$
   \sum_{n=1}^{\infty} \int_a^b f_n = \int_a^b s .
   $$
   That is, since $s(x) = \sum_{n=1}^{\infty} f_n(x)$ for every $x$, $\int_a^b \sum_{n=1}^{\infty} f_n(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx$.
4. (Estimate of the integral) Under the hypotheses of (3), if a natural number $m$ and a real $\eta \ge 0$ satisfy $|s(x) - F_m(x)| \le \eta$ for every $x$ in $[a, b]$, then
   $$
   \Bigl| \int_a^b s - \sum_{n=1}^{m} \int_a^b f_n \Bigr| \le \eta\,(b - a) .
   $$
5. (Oriented form) Let $I$ be an interval, $(f_n)$ a sequence of maps from $I$ to $\mathbb{R}$, and suppose the series of functions of $(f_n)$ converges uniformly on $I$, with sum function $s$. If $\alpha$, $\beta$ are elements of $I$ and every $f_n$ is integrable between $\alpha$ and $\beta$, then $s$ is integrable between $\alpha$ and $\beta$, the series of the sequence whose $n$th term is $\int_\alpha^\beta f_n$ converges, and $\sum_{n=1}^{\infty} \int_\alpha^\beta f_n = \int_\alpha^\beta s$. Moreover, if a natural number $m$ and a real $\eta \ge 0$ satisfy $|s(t) - F_m(t)| \le \eta$ for every $t$ between $\alpha$ and $\beta$, then $\left| \int_\alpha^\beta s - \sum_{n=1}^{m} \int_\alpha^\beta f_n \right| \le \eta\,|\beta - \alpha|$.
6. (Sequences indexed from zero) (1)–(5) also hold for a sequence of maps indexed from zero $(f_n)_{n \ge 0}$, with "every natural number $n$" replaced by "every integer $n \ge 0$", "natural number $m$" and $F_m$ by "integer $m \ge 0$" and $G_m$, and $\sum_{n=1}^{m}$, $\sum_{n=1}^{\infty}$ by $\sum_{n=0}^{m}$, $\sum_{n=0}^{\infty}$. For example, the conclusion of (3) becomes: the series of the sequence indexed from zero whose value at $n$ is $\int_a^b f_n$ converges and $\sum_{n=0}^{\infty} \int_a^b f_n = \int_a^b s$.
:::

## 직관

함수항 급수의 합 함수는 부분합 함수들의 극한입니다. 부분합 함수는 유한 합이므로 항들이 연속이면 연속이고, 적분은 항별 적분의 합입니다. 거리공간과 완비성 4단원은 함수열이 고르게 수렴하면 연속이 극한으로 넘어가고 적분과 극한의 순서를 바꿀 수 있다는 것을 증명했습니다. 이 정리는 그것을 부분합 함수의 열에 쓴 것입니다. 그래서 "합의 적분"과 "적분의 합"이 같다는 등식, 곧 무한히 많은 항의 합과 적분의 순서를 바꾸는 등식이 고른 수렴 아래에서 성립합니다.

비유하자면 벽돌을 한 장씩 쌓아 담을 만드는 것과 같습니다. 벽돌 하나하나(항)가 매끈하고 쌓은 높이(부분합 함수)가 담 전체에서 한꺼번에 완성된 담(합 함수)에 가까워지면, 완성된 담도 갑자기 끊어진 곳이 없고 담의 넓이는 벽돌 넓이의 합입니다. 비유가 맞는 곳은 "담 전체에서 한꺼번에"가 고른 수렴에 해당한다는 점입니다. 비유가 맞지 않는 곳은 벽돌의 높이가 음수일 수 있다는 점입니다.

(1)은 점 $c$의 둘레에서만 고르게 수렴해도 $c$에서의 연속에는 충분하다는 것입니다. 연속은 한 점의 가까이에서만 정해지는 성질이기 때문입니다. 정의역 전체에서는 고르게 수렴하지 않지만 각 점의 둘레에서는 고르게 수렴하는 급수에 (2)의 둘째 문장을 씁니다.

## 증명

:::idea
부분합 함수 $F_m$은 연속이거나 적분가능하고, 함수항 급수가 고르게 수렴한다는 것은 $(F_m)$이 합 함수로 고르게 수렴한다는 것이다. 연속은 $\varepsilon/3$으로, 적분은 고른 극한의 적분 정리를 $(F_m)$에 써서 얻는다.
:::

:::hint
$|s(x) - s(c)|$를 $|s(x) - F_N(x)|$, $|F_N(x) - F_N(c)|$, $|F_N(c) - s(c)|$의 합으로 누른다.
:::

:::hint
$n$번째 항이 $\int_a^b f_n$인 수열의 $m$번째 부분합은 $\int_a^b F_m$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 합과 차는 정수이다([[even-and-odd]]). 실수의 부등식은 [[order-properties-of-reals]]의 번호와 [[absolute-value]]의 번호로 다룬다. [[pointwise-convergence]]의 항목과 [[uniform-convergence]]의 항목은 $Y = \mathbb{R}$(보통 거리)에 쓴다.

**1의 증명.** $(f_n|_A)$의 함수항 급수가 고르게 수렴하므로 [[series-of-functions|함수항 급수]]의 (2)에 의해 그 고른 극한은 $(f_n|_A)$의 합 함수이고, $x \in A$에서 그 값은 $\sum_{n=1}^{\infty} f_n(x) = s(x)$이다. 그 항목의 (5)에 의해 $(F_m)$은 $A$ 위에서 $s|_A$로 고르게 수렴한다.

$\varepsilon$을 양의 실수라 하자. 위의 고른 수렴과 [[uniform-convergence]]의 정의에 의해 자연수 $N$이 있어 $A$의 모든 점 $x$에서 $|F_N(x) - s(x)| < \varepsilon/3$이다. [[finite-sums-of-functions|함수의 유한 합]]의 (2)에 의해 $F_N$은 $c$에서 연속이므로, [[continuous-function]]의 정의에 의해 양의 실수 $\delta_1$이 있어 $x \in S$이고 $|x - c| < \delta_1$인 모든 $x$에서 $|F_N(x) - F_N(c)| < \varepsilon/3$이다. $\delta = \min\{\delta_0, \delta_1\}$로 두면 $\delta$는 양의 실수이다([[absolute-value]]의 (10)). $x \in S$이고 $|x - c| < \delta$이면 $|x - c| < \delta_0$이므로 $x \in A$이고, $|c - c| = 0 < \delta_0$이므로 $c \in A$이다. 따라서 [[triangle-inequality|삼각부등식]]의 (5)에 의해
$$
\begin{aligned}
|s(x) - s(c)| &\le |s(x) - F_N(x)| \\
&\qquad + |F_N(x) - F_N(c)| \\
&\qquad + |F_N(c) - s(c)| \\
&< \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon
\end{aligned}
$$
이다((K…)로 $s(x) - s(c)$를 세 차의 합으로 쓴다. $|s(x) - F_N(x)| = |F_N(x) - s(x)|$는 [[absolute-value]]의 (3)). 따라서 $s$는 $c$에서 연속이다.

**2의 증명.** 둘째 문장: $S$의 모든 점 $c$에서 모든 $f_n$이 $c$에서 연속이므로 (1)에 의해 $s$는 $c$에서 연속이다. 따라서 $s$는 연속함수이다. 첫째 문장: $S$ 위에서 고르게 수렴하면 [[series-of-functions]]의 (5)에 의해 $S$의 모든 부분집합 위에서 고르게 수렴하므로, 각 점 $c$에서 $\delta_0 = 1$로 둘째 문장의 가정이 성립한다. (첫째 문장은 [[series-of-functions]]의 (2)와 [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한]]의 (3)을 $(F_m)$에 써서 얻을 수도 있다.)

**3의 증명.** [[finite-sums-of-functions]]의 (5)의 (i)에 의해 모든 자연수 $m$에서 $F_m$은 리만 적분가능하고 $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$이다. [[series-of-functions]]의 (2)에 의해 $(F_m)$은 $s$로 고르게 수렴하므로, [[uniform-convergence-and-integral|고른 수렴과 적분]]의 (2)에 의해 $s$는 리만 적분가능하고 $n$번째 항이 $\int_a^b F_m$인 수열(첨자 $m$)은 $\int_a^b s$로 수렴한다. [[finite-sum-of-reals]]의 (1)에 의해 $\sum_{n=1}^{m} \int_a^b f_n$은 $n$번째 항이 $\int_a^b f_n$인 수열의 $m$번째 부분합이므로, 그 부분합 수열이 $\int_a^b s$로 수렴한다. [[series-and-partial-sums]]의 정의에 의해 이 수열의 급수는 수렴하고 합은 $\int_a^b s$이며, [[sum-of-a-series]]의 정의에 의해 이것이 등식이다. 둘째 문장은 [[series-of-functions]]의 (1)에 의해 $s(x) = \sum_{n=1}^{\infty} f_n(x)$이고 [[riemann-integral]]의 적분 변수의 약속으로 같은 것을 쓴 것이다.

**4의 증명.** 3의 증명에서와 같이 $(F_m)$은 $s$로 고르게 수렴하는 적분가능한 함수의 열이다. [[uniform-convergence-and-integral]]의 (3)을 $(F_m)$과 $n = m$에 쓰면 $\left|\int_a^b F_m - \int_a^b s\right| \le \eta(b - a)$이고, $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$과 [[absolute-value]]의 (3)에 의해 결론이다.

**5의 증명.** [[finite-sums-of-functions]]의 (5)의 (ii)에 의해 모든 자연수 $m$에서 $F_m$은 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta F_m = \sum_{n=1}^{m} \int_\alpha^\beta f_n$이다. $(F_m)$은 $I$ 위에서 $s$로 고르게 수렴하므로([[series-of-functions]]의 (2)), [[uniform-convergence-and-integral]]의 (4)를 $(F_m)$에 쓰고 3과 4의 증명처럼 부분합으로 읽으면 결론이다.

**6의 증명.** $(g_j)$를 $(f_n)_{n \ge 0}$의 한 칸 옮긴 사상의 열이라 하자([[finite-sums-of-functions]]의 (6)의 (i)). [[series-of-functions]]의 (6)의 정의에 의해 $(f_n)_{n \ge 0}$의 함수항 급수의 수렴과 합 함수는 $(g_j)$의 것이고, 자연수 $j$에서 $g_j = f_{j-1}$이므로 "$0$ 이상인 모든 정수 $n$에서 $f_n$이 ○○이다"는 "모든 자연수 $j$에서 $g_j$가 ○○이다"와 같다. 따라서 (1)–(5)를 $(g_j)$에 쓰면 된다. $(g_j)$의 $(m + 1)$번째 부분합 함수는 $G_m$이고(같은 항목), $j$번째 항이 $\int_a^b g_j = \int_a^b f_{j-1}$인 수열은 $n$에서의 값이 $\int_a^b f_n$인 0부터 번호가 붙은 수열을 한 칸 옮긴 수열이므로, [[series-indexed-from-zero]]의 정의에 의해 $\sum_{j=1}^{\infty} \int_a^b g_j = \sum_{n=0}^{\infty} \int_a^b f_n$이고 $\sum_{j=1}^{m+1} \int_a^b g_j = \sum_{n=0}^{m} \int_a^b f_n$이다. 방향 있는 꼴도 같다. $\blacksquare$
:::

## 예시와 반례

:::example[등비급수의 항별 적분]
$[0, 1]$ 위에서 0부터 번호가 붙은 사상의 열 $f_n(x) = (x/2)^n$($n \ge 0$)을 봅니다. $0 \le x \le 1$이면 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)과 (6)의 (ii)에 의해 $0 \le f_n(x) = (2^{-1})^n x^n \le (2^{-1})^n$이고, $M_n = (2^{-1})^n$의 0부터의 급수는 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 수렴합니다. [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (5)에 의해 함수항 급수는 고르게 수렴하고, 같은 (13)의 (ii)를 $r = x/2$에 쓰면 합 함수는 $s(x) = (1 - x/2)^{-1} = 2(2 - x)^{-1}$입니다. 각 $f_n$은 연속이므로 (6)과 (2)에 의해 $s$는 연속함수입니다.

[[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_0^1 f_n = (2^{-1})^n (n + 1)^{-1}$입니다. 한편 $t^{-1}$은 $\{t : 0 < t\}$ 위의 연속함수이고([[natural-logarithm|자연로그]]의 진술), [[change-of-variables|치환적분]]의 (3)을 $m = -1$, $k = 2$로 쓰면 $\int_0^1 (-1)(2 - x)^{-1}\,dx = \int_2^1 t^{-1}\,dt = \ln 1 - \ln 2 = -\ln 2$입니다(자연로그의 (1), (5)). 따라서 $\int_0^1 s = 2\ln 2$이고, (6)에 의해
$$
\sum_{n=0}^{\infty} \frac{1}{(n + 1)\,2^n} = 2 \ln 2
$$
입니다. 처음 다섯 항의 합은 $1 + 0.25 + 0.0833\ldots + 0.03125 + 0.0125 = 1.377\ldots$이고 $2\ln 2 = 1.386\ldots$입니다.
:::

:::counterexample[점별로만 수렴하는 급수에서 항별 적분의 급수의 합과 합 함수의 적분이 다른 예]
$[0, 1]$ 위에서 $q_0$을 영함수, 자연수 $m$에서 $q_m(x) = (m + 1)(m + 2)\,x^m (1 - x)$로 두고, $f_n = q_n - q_{n-1}$($n \ge 1$)로 정합니다. [[telescoping-sum|망원 합]]의 (1)에 의해 $F_m(x) = q_m(x) - q_0(x) = q_m(x)$입니다.

- 점별 수렴: $x = 0$이나 $x = 1$이면 자연수 $m$에서 $q_m(x) = 0$입니다($0^m = 0$, $1 - 1 = 0$). $0 < x < 1$이면 $q_m(x) > 0$이고 $q_{m+1}(x)\,q_m(x)^{-1} = (m + 3)(m + 1)^{-1} x$입니다. $(m + 3)(m + 1)^{-1} = 1 + 2(m + 1)^{-1}$은 $1$로 수렴하므로([[basic-limits]]의 (2), [[tail-of-a-sequence|수열의 꼬리]]의 (1), [[limit-of-sum-and-product]]의 (1)과 (5)) 이 비는 $x < 1$로 수렴하고, [[ratio-test-for-sequences|수열의 비 판정법]]의 (1)에 의해 $q_m(x)$는 $0$으로 수렴합니다. 따라서 함수항 급수는 점별 수렴하고 합 함수는 영함수이며, 그 적분은 $0$입니다.
- 항별 적분: 거듭제곱의 원시함수와 적분의 (3)과 적분의 선형성의 (4)에 의해 $\int_0^1 x^m(1 - x)\,dx = (m + 1)^{-1} - (m + 2)^{-1} = \bigl((m + 1)(m + 2)\bigr)^{-1}$이므로 $\int_0^1 F_m = \int_0^1 q_m = 1$입니다. [[finite-sums-of-functions|함수의 유한 합]]의 (5)에 의해 $\sum_{n=1}^{m} \int_0^1 f_n = 1$이고, 항별 적분의 급수의 합은 $1$입니다.

따라서 $\sum_{n=1}^{\infty} \int_0^1 f_n = 1 \ne 0$이고, (3)에 의해 이 함수항 급수는 고르게 수렴하지 않습니다.
:::

## 확인 질문

:::check[모든 $f_n$이 $[a, b]$ 위의 상수함수이고 그 값 $a_n$의 급수가 수렴하면 (3)은 무엇을 말하는가?]
[[series-of-functions|함수항 급수]]의 (7)에 의해 함수항 급수는 값이 $A = \sum_{n=1}^{\infty} a_n$인 상수함수로 고르게 수렴합니다. $\int_a^b f_n = a_n(b - a)$이므로 (3)은 $\sum_{n=1}^{\infty} a_n(b - a) = A(b - a)$라는 것이고, 이것은 [[sum-of-a-series|급수의 합의 기호]]의 (3)의 상수배와 같습니다.
:::

:::check[(1)에서 함수항 급수가 $S$ 전체에서는 고르게 수렴하지 않아도 되는 까닭은 무엇인가?]
$c$에서의 연속은 $|x - c| < \delta$인 점들의 값만으로 정해지고, 증명에서 고른 수렴을 쓰는 곳은 $A$의 점 $x$와 $c$에서의 부등식 $|F_N(x) - s(x)| < \varepsilon/3$뿐이기 때문입니다. $\delta$를 $\delta_0$ 이하로 잡으면 그 점들은 모두 $A$에 듭니다.
:::
