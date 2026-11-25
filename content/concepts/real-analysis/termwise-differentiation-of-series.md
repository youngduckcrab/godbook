---
title: 함수항 급수의 항별 미분
title_en: Termwise Differentiation of a Series of Functions
aliases: [항별 미분, 급수의 항별 미분, 급수와 미분의 교환, termwise differentiation, term-by-term differentiation]
kind: theorem
field: real-analysis
msc: ["40A30", "26A24"]
level: undergrad
summary: 닫힌구간 [a, b] 위의 연속미분가능한 함수들의 도함수의 급수가 고르게 수렴하고 한 점에서 급수가 수렴하면, 함수항 급수는 고르게 수렴하고 합 함수는 연속미분가능하며 그 도함수는 항별 도함수의 급수의 합이다. 합 함수의 적분 꼴, 어림, 0부터 번호가 붙은 꼴도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, series-and-partial-sums, real-valued-function, continuous-function, derivative, continuously-differentiable, oriented-integral, finite-sum-of-reals, harmonic-series-diverges, terms-of-convergent-series-tend-to-zero, weierstrass-m-test, pointwise-convergence, uniform-convergence, uniform-convergence-and-derivative, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, series-of-functions]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits 의 11.2.3절 Differentiation: Theorem 11.2.14 (p.149); 11.2.4절 Exercises 의 Exercise 11.2.4, Exercise 11.2.6 (p.152)"
    checked: original
    note: "출처 Theorem 11.2.14(p.149)는 유계 구간 I 위의 연속미분가능한 복소숫값 함수열 f_n 에서 (f_n′) 이 g 로 고르게 수렴하고 어떤 c ∈ I 에서 (f_n(c)) 가 수렴하면 (f_n) 이 연속미분가능한 f 로 고르게 수렴하고 f′ = g 라고 진술하고, 증명은 연습문제 11.2.6 으로 둔다. 이것은 함수열에 대한 진술이고, 이 항목은 같은 가정을 부분합 함수의 열에 놓아 함수항 급수의 꼴로 진술한다. 이 항목은 값을 실수로 옮기고 구간을 닫힌구간 [a, b] 로 좁혔다. 이 사이트의 uniform-convergence-and-derivative 가 닫힌구간에서만 진술되어 있기 때문이다. 연습문제 11.2.4 b)(p.152)는 고르게 수렴하는 급수 Σ 2⁻ⁿ sin(2ⁿx) 의 부분합의 도함수가 조밀한 집합에서 수렴하지 않는다는 것을 묻는다. 도함수의 급수에 대한 가정이 필요하다는 같은 쪽의 예이다."
  - ref: lebl-basic-analysis
    loc: "6.2.3절 Derivative of the limit 의 Example 6.2.8, Example 6.2.9 (p.238–239), Theorem 6.2.10 (p.239) 과 그 증명 (p.240); 6.2.4절 Convergence of power series 의 Corollary 6.2.13 의 증명 (p.242)"
    checked: original
    note: "출처 Theorem 6.2.10(p.239)은 실함수열에 대한 같은 정리이고 이 사이트의 uniform-convergence-and-derivative 가 그것을 닫힌구간에서 진술한다. Corollary 6.2.13 의 증명(p.242)은 멱급수의 부분합의 도함수가 고르게 수렴하고 급수가 x = a 에서 수렴한다는 것을 확인해 Theorem 6.2.10 을 부분합에 쓴다. 이 항목의 증명은 같은 논법을 일반 함수항 급수에 쓴 것이다. Example 6.2.8 과 Example 6.2.9(p.238–239)는 함수열만 고르게 수렴하거나 도함수가 점별로만 수렴할 때 극한의 도함수가 도함수의 극한과 다를 수 있다는 예이고, 직관 절의 첫 문단이 말하는 것과 같은 쪽의 예이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합 함수·꼬리·반례 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
닫힌구간은 [[interval]]의 것이고, 미분가능, 도함수, 연속미분가능은 [[derivative]]와 [[continuously-differentiable]]의 것이며, 방향 있는 적분 $\int_c^x g$는 [[oriented-integral]]의 것이다. 사상의 열, 고른 수렴은 [[pointwise-convergence|사상의 열과 점별 수렴]]과 [[uniform-convergence|고른 수렴]]의 것이고, 부분합 함수 $F_m$, 도함수의 열 $(f_n')$, 0부터 번호가 붙은 사상의 열과 그 부분합 함수 $G_m$은 [[finite-sums-of-functions|함수의 유한 합]]의 것이며, 함수항 급수의 점별 수렴과 고른 수렴, 합 함수는 [[series-of-functions|함수항 급수]]의 것이다. 급수의 합의 기호는 [[sum-of-a-series]]와 [[series-indexed-from-zero]]의 것이다.

아래에서 $a$, $b$는 $a < b$인 실수이고, $(f_n)$은 $[a, b]$에서 $\mathbb{R}$로의 사상의 열로서 모든 $f_n$이 연속미분가능하다. 도함수의 열 $(f_n')$의 함수항 급수가 $[a, b]$ 위에서 고르게 수렴한다고 하고 그 합 함수를 $g$라 하자. 곧 모든 $x \in [a, b]$에서 $g(x) = \sum_{n=1}^{\infty} f_n'(x)$이다. 또 $c \in [a, b]$이고 $(f_n(c))$의 급수가 수렴한다고 하자.

1. (항별 미분) $(f_n)$의 함수항 급수는 $[a, b]$ 위에서 고르게 수렴하고, 그 합 함수 $s$는 연속미분가능하며 $s' = g$이다. 곧 $[a, b]$의 모든 $x$(끝점 포함)에서 $(f_n(x))$의 급수가 수렴하고
   $$
   \begin{aligned}
   s'(x) &= \sum_{n=1}^{\infty} f_n'(x), \\
   s(x) &= \sum_{n=1}^{\infty} f_n(x)
   \end{aligned}
   $$
   이다.
2. (적분 꼴) $g$는 연속함수이고, $[a, b]$의 모든 $x$에서
   $$
   s(x) = \sum_{n=1}^{\infty} f_n(c) + \int_c^x g
   $$
   이다.
3. (어림) 자연수 $m$과 $0 \le \eta$인 실수 $\eta$가 $[a, b]$의 모든 $t$에서 $\left| \sum_{n=1}^{m} f_n'(t) - g(t) \right| \le \eta$를 만족하면, $[a, b]$의 모든 $x$에서
   $$
   \begin{aligned}
   |F_m(x) - s(x)| &\le |F_m(c) - s(c)| \\
   &\qquad + \eta\,(b - a)
   \end{aligned}
   $$
   이다.
4. (0부터 번호가 붙은 열) $(f_n)_{n \ge 0}$이 $[a, b]$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열로서 모든 $f_n$이 연속미분가능하고, 도함수들의 0부터 번호가 붙은 사상의 열 $(f_n')_{n \ge 0}$의 함수항 급수가 $[a, b]$ 위에서 고르게 수렴하며 그 합 함수가 $g$이고, $c \in [a, b]$에서 $(f_n(c))_{n \ge 0}$의 급수가 수렴한다고 하자. 그러면 $(f_n)_{n \ge 0}$의 함수항 급수는 $[a, b]$ 위에서 고르게 수렴하고, 그 합 함수 $s$는 연속미분가능하며 모든 $x \in [a, b]$에서 $s'(x) = g(x) = \sum_{n=0}^{\infty} f_n'(x)$이고 $s(x) = \sum_{n=0}^{\infty} f_n(c) + \int_c^x g$이다. (3)은 $F_m$을 $G_m$($m \ge 0$)으로, $\sum_{n=1}^{m}$을 $\sum_{n=0}^{m}$으로 바꾸어 성립한다.
:::

:::english
Closed intervals are those of the entry on intervals; differentiability, derivatives and continuous differentiability are those of the corresponding entries; and the oriented integral $\int_c^x g$ is that of the entry on oriented integrals. Sequences of maps and uniform convergence are those of the entries on sequences of maps and pointwise convergence and on uniform convergence; the partial sum functions $F_m$, the sequence of derivatives $(f_n')$, sequences of maps indexed from zero and their partial sum functions $G_m$ are those of the entry on finite sums of functions; and pointwise and uniform convergence of a series of functions and the sum function are those of the entry on series of functions. The notation for sums of series is that of the entries on the notation for the sum of a series and on sums of sequences indexed from zero.

Below, $a$, $b$ are real numbers with $a < b$, and $(f_n)$ is a sequence of maps from $[a, b]$ to $\mathbb{R}$ with every $f_n$ continuously differentiable. Suppose the series of functions of the sequence of derivatives $(f_n')$ converges uniformly on $[a, b]$, and let $g$ be its sum function; that is, $g(x) = \sum_{n=1}^{\infty} f_n'(x)$ for every $x \in [a, b]$. Suppose also that $c \in [a, b]$ and the series of $(f_n(c))$ converges.

1. (Termwise differentiation) The series of functions of $(f_n)$ converges uniformly on $[a, b]$, its sum function $s$ is continuously differentiable, and $s' = g$. That is, for every $x$ in $[a, b]$ (endpoints included) the series of $(f_n(x))$ converges and
   $$
   \begin{aligned}
   s'(x) &= \sum_{n=1}^{\infty} f_n'(x), \\
   s(x) &= \sum_{n=1}^{\infty} f_n(x) .
   \end{aligned}
   $$
2. (Integral form) $g$ is a continuous function, and for every $x$ in $[a, b]$
   $$
   s(x) = \sum_{n=1}^{\infty} f_n(c) + \int_c^x g .
   $$
3. (Estimate) If a natural number $m$ and a real $\eta \ge 0$ satisfy $\left| \sum_{n=1}^{m} f_n'(t) - g(t) \right| \le \eta$ for every $t$ in $[a, b]$, then for every $x$ in $[a, b]$
   $$
   \begin{aligned}
   |F_m(x) - s(x)| &\le |F_m(c) - s(c)| \\
   &\qquad + \eta\,(b - a) .
   \end{aligned}
   $$
4. (Sequences indexed from zero) Suppose $(f_n)_{n \ge 0}$ is a sequence of maps indexed from zero from $[a, b]$ to $\mathbb{R}$ with every $f_n$ continuously differentiable, the series of functions of the sequence of derivatives indexed from zero $(f_n')_{n \ge 0}$ converges uniformly on $[a, b]$ with sum function $g$, and the series of $(f_n(c))_{n \ge 0}$ converges at $c \in [a, b]$. Then the series of functions of $(f_n)_{n \ge 0}$ converges uniformly on $[a, b]$, its sum function $s$ is continuously differentiable, and for every $x \in [a, b]$, $s'(x) = g(x) = \sum_{n=0}^{\infty} f_n'(x)$ and $s(x) = \sum_{n=0}^{\infty} f_n(c) + \int_c^x g$. (3) holds with $F_m$ replaced by $G_m$ ($m \ge 0$) and $\sum_{n=1}^{m}$ by $\sum_{n=0}^{m}$.
:::

## 직관

유한 합은 항마다 미분해 더하면 그 도함수가 됩니다. 무한히 많은 항에서는 그렇지 않을 수 있습니다. 함수항 급수가 고르게 수렴해도 도함수의 급수는 수렴하지 않거나 합 함수의 도함수와 다른 값으로 수렴할 수 있습니다. 이 정리는 거꾸로 **도함수의 급수**가 고르게 수렴한다고 가정합니다. 그러면 합 함수는 한 점에서의 값과 도함수의 합을 적분해 되살릴 수 있고, 그것이 (2)의 식입니다.

비유하자면 여러 사람이 걸어간 거리를 더하는 일과 같습니다. 사람마다 빠르기(도함수)를 알고 빠르기의 합이 모든 시각에서 한꺼번에 잘 정해지며(고른 수렴), 출발 시각의 위치의 합(한 점에서의 수렴)도 정해지면, 위치의 합은 "출발 위치의 합 + 빠르기의 합을 적분한 것"으로 정해집니다. 비유가 맞는 곳은 한 점의 값과 빠르기만으로 위치가 정해진다는 점입니다. 한 점에서의 수렴이 빠지면 각 항에 상수를 더해도 도함수는 그대로이므로 합이 정해지지 않을 수 있습니다.

닫힌구간에서만 진술한 것은 앞 강의의 고른 수렴과 미분 정리가 닫힌구간에서 진술되어 있기 때문입니다. 이 정리는 열린구간이나 유계가 아닌 구간에 대해서는 직접 말하지 않습니다.

## 증명

:::idea
부분합 함수 $F_m$은 연속미분가능하고 그 도함수는 $(f_n')$의 부분합 함수이다. 따라서 $(F_m)$에 함수열의 고른 수렴과 미분 정리를 그대로 쓴다.
:::

:::hint
가정 "$(f_n')$의 함수항 급수가 고르게 수렴한다"는 "도함수의 열 $(F_m')$이 $g$로 고르게 수렴한다"와 같은 말이다.
:::

:::proof
정수의 순서와 자연수에 관한 사실은 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 (Z5)–(Z8), [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]로 다루고, (K…)는 [[real-number-arithmetic]]의 진술이다. [[pointwise-convergence]]의 항목과 [[uniform-convergence]]의 항목은 $Y = \mathbb{R}$(보통 거리)에 쓴다.

**1–3의 증명.** [[finite-sums-of-functions|함수의 유한 합]]의 (4)에 의해 모든 자연수 $m$에서 $F_m$은 연속미분가능하고, $n$번째 항이 $f_n'$인 사상의 열 $(f_n')$의 $m$번째 부분합 함수는 $F_m'$이다. 따라서 $m$번째 항이 $F_m'$인 사상의 열, 곧 [[uniform-convergence-and-derivative|고른 수렴과 미분]]의 "도함수의 열" $(F_m')$은 $(f_n')$의 부분합 함수의 열과 같은 사상의 열이다(항마다 같다). 가정과 [[series-of-functions|함수항 급수]]의 정의와 (2)에 의해 이 열은 $g$로 고르게 수렴한다.

$L = \sum_{n=1}^{\infty} f_n(c)$로 두자. [[finite-sums-of-functions]]의 (1)의 (ii)에 의해 $(F_m(c))$는 $(f_n(c))$의 부분합 수열이므로, [[series-and-partial-sums]]의 정의와 [[sum-of-a-series]]의 정의에 의해 $(F_m(c))$는 $L$로 수렴한다.

따라서 $(F_m)$은 [[uniform-convergence-and-derivative]]의 가정을 모두 만족한다($[a, b]$ 위의 연속미분가능한 사상의 열, 도함수의 열이 $g$로 고르게 수렴, $(F_m(c))$가 $L$로 수렴). 그 항목의 (1)에 의해 $g$는 연속함수이고 $[a, b]$의 어느 두 점 사이에서도 적분가능하며, (2)에 의해 $f(x) = L + \int_c^x g$로 정한 $f : [a, b] \to \mathbb{R}$는 연속미분가능하고 $f' = g$이며, (3)에 의해 $(F_m)$은 $f$로 고르게 수렴한다. 정의에 의해 $(f_n)$의 함수항 급수는 $f$로 고르게 수렴하고, [[series-of-functions]]의 (2)에 의해 $f$는 합 함수 $s$이다. 이로써 (1)의 첫 문장과 (2)를 얻는다. (1)의 식은 $s' = g$와 $g(x) = \sum_{n=1}^{\infty} f_n'(x)$이고, $(f_n(x))$의 급수의 수렴은 [[series-of-functions]]의 (1)이다. (3)은 [[uniform-convergence-and-derivative]]의 (3)을 $n = m$에 쓴 것이다. 이때 그 항목의 $f_n'$은 $F_m'$이고 [[finite-sums-of-functions]]의 (4)에 의해 $F_m'(t) = \sum_{n=1}^{m} f_n'(t)$이며, $L = s(c)$이다.

**4의 증명.** $(g_j)$를 $(f_n)_{n \ge 0}$의 한 칸 옮긴 사상의 열이라 하자([[finite-sums-of-functions]]의 (6)의 (i)). 자연수 $j$에서 $g_j = f_{j-1}$은 연속미분가능하고 $g_j' = f_{j-1}'$이므로, $(g_j')$는 $(f_n')_{n \ge 0}$을 한 칸 옮긴 사상의 열이다. [[series-of-functions]]의 (6)의 정의에 의해 $(g_j')$의 함수항 급수는 $g$로 고르게 수렴하고, $(g_j(c))$는 $(f_n(c))_{n \ge 0}$을 한 칸 옮긴 수열이므로 [[series-indexed-from-zero]]의 급수의 정의에 의해 그 급수가 수렴하며 합이 $\sum_{n=0}^{\infty} f_n(c)$이다. 1–3을 $(g_j)$에 쓰고 같은 정의로 옮기면 결론이다. $(g_j)$의 $(m + 1)$번째 부분합 함수는 $G_m$이고, $\sum_{j=1}^{m+1} g_j'(t) = \sum_{n=0}^{m} f_n'(t)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[도함수의 급수를 거쳐 합을 구하는 예]
$0 < r < 1$인 실수 $r$을 잡고 $[0, r]$ 위에서 $f_n(x) = x^{n+1} \bigl((n + 1)n\bigr)^{-1}$로 둡니다. 각 $f_n$은 연속미분가능하고 $f_n'(x) = x^n n^{-1}$입니다([[continuously-differentiable]]의 (2)–(4)). $f_n(0) = 0$이므로 $(f_n(0))$의 급수는 합이 $0$으로 수렴합니다.

$0 \le x \le r$이면 $0 \le x^n n^{-1} \le r^n$이고([[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)), $(r^n)$의 급수는 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)에 의해 수렴하므로, [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (2)에 의해 도함수의 급수는 $[0, r]$ 위에서 고르게 수렴합니다. 이 정리를 $c = 0$에 쓰면 $(f_n)$의 함수항 급수는 $[0, r]$ 위에서 고르게 수렴하고, 합 함수 $s$는 연속미분가능하며 $s(0) = 0$이고 모든 $x \in [0, r]$에서 $s'(x) = \sum_{n=1}^{\infty} x^n n^{-1}$입니다. $r = 1$로는 이렇게 할 수 없습니다. $x = 1$에서 도함수의 급수는 조화급수가 되어 발산하므로 $[0, 1]$ 위에서 고르게 수렴하지 않습니다([[harmonic-series-diverges|조화급수의 발산]]의 (2), [[series-of-functions|함수항 급수]]의 (2)).
:::

:::counterexample[한 점에서의 수렴을 빼면 함수항 급수가 수렴하지 않을 수 있는 예]
$[0, 1]$ 위에서 모든 $f_n$을 값이 $1$인 상수함수로 둡니다. 모든 $f_n$은 연속미분가능하고 $f_n'$은 영함수이므로 도함수의 급수는 영함수로 고르게 수렴합니다. 그러나 어느 점 $c$에서도 $(f_n(c))$는 모든 항이 $1$이어서 $0$으로 수렴하지 않으므로 그 급수는 발산합니다([[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항]]의 (2)). 따라서 $(f_n)$의 함수항 급수는 어디서도 점별 수렴하지 않습니다. 이 정리의 "어떤 점 $c$에서 $(f_n(c))$의 급수가 수렴한다"는 가정이 깨진 경우입니다.
:::

## 확인 질문

:::check[모든 $f_n$이 상수함수이면 이 정리는 무엇을 말하는가?]
상수함수의 도함수는 영함수이므로 도함수의 급수는 영함수로 고르게 수렴합니다. 상수의 값을 $a_n$이라 하면 가정은 $(a_n)$의 급수가 수렴한다는 것이고, 결론은 함수항 급수가 고르게 수렴하고 합 함수 $s$가 $s' = 0$인 연속미분가능한 함수, 곧 (2)에 의해 값이 $\sum_{n=1}^{\infty} a_n$인 상수함수라는 것입니다.
:::

:::check[$c$를 $a$로 잡든 $b$로 잡든 결론은 같은가?]
같습니다. (1)에 의해 $(f_n(x))$의 급수는 $[a, b]$의 모든 점에서 수렴하므로 어느 점을 $c$로 잡아도 가정이 성립합니다. (1)의 결론은 $c$를 쓰지 않고, (2)의 식은 어느 $c$로 쓰든 같은 합 함수 $s$의 값을 나타냅니다. 예컨대 $c = a$로 쓴 식과 $c = b$로 쓴 식은 둘 다 $s(x)$입니다.
:::
