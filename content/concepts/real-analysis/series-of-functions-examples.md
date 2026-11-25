---
title: 함수항 급수의 예
title_en: Examples of Series of Functions
aliases: [M 판정법의 역의 반례, 항별 미분이 안 되는 예, 합 함수가 불연속인 예, examples of series of functions]
kind: proposition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 모든 실수에서 수렴하고 유계인 구간마다 고르게 수렴하지만 ℝ 위에서는 고르게 수렴하지 않는 급수, 고르게 수렴하지만 바이어슈트라스 M 판정법의 가정을 만족하는 수열이 없는 급수, 항이 연속이지만 합 함수가 불연속인 급수, 고르게 수렴하지만 합 함수의 도함수가 항별 도함수의 급수의 합과 다른 급수를 계산한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, tail-of-a-sequence, geometric-sequence-limit, series-and-partial-sums, comparison-test, harmonic-series-diverges, alternating-series-test, real-valued-function, continuous-function, continuity-of-sum-and-product, power-function-is-continuous, derivative, continuously-differentiable, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, pointwise-convergence, uniform-convergence, sum-of-a-series, finite-sums-of-functions, series-of-functions, weierstrass-m-test, termwise-continuity-and-integration, termwise-differentiation-of-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits 의 11.2.1절 Continuity: Example 11.2.6 (p.147), Corollary 11.2.8 뒤 문단 (p.148); 11.2.4절 Exercises 의 Exercise 11.2.8 (p.152)"
    checked: original
    note: "(1)은 출처 Example 11.2.6(p.147, Σ xⁿ/n! 이 유계인 구간마다 고르게 수렴한다는 것을 [−r, r] 위에서 M 판정법으로 보인다)과 같은 발상으로, 유계인 구간마다 M 판정법을 쓴다. 이 항목은 출처의 급수 대신 합과 꼬리의 합을 직접 계산할 수 있는 x/(n(n+1)) 의 급수를 골랐다. (2)는 출처 연습문제 11.2.8(p.152, [0, 1] 위에서 1/(n+1) < x < 1/n 에서만 n 인 함수열의 급수가 고르게 수렴하지만 균등 노름의 급수는 발산한다)과 같은 결론, 곧 M 판정법의 역이 성립하지 않을 수 있다는 것을 다른 급수(상수 사상의 교대급수)로 보인 것이다. (3)의 xⁿ 꼴은 출처 Corollary 11.2.8 뒤 문단(p.148, (0, 1) 위의 xⁿ 은 영함수로 수렴하지만 고르게는 아니다)과 같은 함수를 쓴다."
  - ref: lebl-basic-analysis
    loc: "6.1.1절 Pointwise convergence 의 Example 6.1.2 (p.227), Example 6.1.3 (p.228); 6.1.4절 Exercises 의 Exercise 6.1.14 (p.233); 2.6.3절 Rearrangements 의 Example 2.6.4 (p.103); 6.2.3절 Derivative of the limit 의 Example 6.2.8 (p.238); 6.2.5절 Exercises 의 Exercise 6.2.2 (p.243), Exercise 6.2.15 (p.244)"
    checked: original
    note: "(1)의 '유계인 구간마다 고르게, 정의역 전체에서는 고르게 수렴하지 않는다'는 출처 연습문제 6.1.14(p.233, Σ xᵏ 가 0 ≤ c < 1 인 [−c, c] 위에서 고르게 수렴하지만 (−1, 1) 위에서는 고르게 수렴하지 않는다)와 같은 꼴의 결론이고, 연습문제 6.2.15(p.244)의 '콤팩트 부분집합 위에서 고르게 수렴한다'는 말이 (1)의 (ii)의 상황이다. (2)의 상수 사상의 값 (−1)ⁿn⁻¹ 의 급수는 교대 조화급수의 부호를 바꾼 것이고, 출처 Example 2.6.4(p.103)는 교대 조화급수를 절대수렴하지 않는 급수로 다룬다. (3)은 출처 Example 6.1.2(p.227, [−1, 1] 위의 x²ⁿ 이 끝점에서만 1 인 불연속 함수로 점별 수렴한다)와 같은 발상을 부분합 함수가 xᵐ − 1 이 되는 급수로 옮긴 것이고, 같은 사실을 거리공간과 완비성 강의의 uniform-convergence 의 (9)도 다룬다. (4)의 부분합 함수 x^{m+1}/(m+1) − x 는 출처 연습문제 6.2.2(p.243, [0, 1] 위의 xⁿ/n 이 고르게 수렴하지만 f′(1) ≠ lim f_n′(1))의 함수열에서 x 를 뺀 것이고 같은 결론을 급수로 옮긴 것이다. 거리공간과 완비성 강의의 uniform-convergence-and-derivative 의 반례 '함수만 고르게 수렴하는 경우의 예: 닫힌구간 [0, 1] 위의 xⁿ/n'도 같은 함수열을 쓴다. 출처 Example 6.2.8(p.238, sin(nx)/n)도 같은 쪽의 예이다. Example 6.1.3(p.228)은 Σ xᵏ 를 함수의 부분합의 극한으로 읽는 법을 적는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합 함수·꼬리·반례 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
사상의 열, 점별 수렴과 고른 수렴, "$A$ 위에서"는 [[pointwise-convergence|사상의 열과 점별 수렴]]과 [[uniform-convergence|고른 수렴]]의 것이고, 부분합 함수 $F_m$은 [[finite-sums-of-functions|함수의 유한 합]]의 것이며, 함수항 급수의 점별 수렴과 고른 수렴, 합 함수는 [[series-of-functions|함수항 급수]]의 것이다. 연속은 [[continuous-function]], 미분가능과 연속미분가능은 [[derivative]]와 [[continuously-differentiable]], 거듭제곱은 [[power-of-a-real-number]], 급수의 합의 기호는 [[sum-of-a-series]]의 것이다. 아래 사상의 열은 모두 식으로 정한 것이다([[pointwise-convergence]]의 (1)).

1. (유계인 구간마다 고르게 수렴하지만 $\mathbb{R}$ 위에서는 고르게 수렴하지 않는 예) $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$을 $f_n(x) = x\bigl(n(n+1)\bigr)^{-1}$로 정하자.
   - (i) $0$ 이상인 모든 정수 $m$과 실수 $x$에서 $F_m(x) = x - x(m + 1)^{-1}$이다. 함수항 급수는 점별 수렴하고, 합 함수는 항등함수이다. 곧 모든 실수 $x$에서 $\sum_{n=1}^{\infty} f_n(x) = x$이고 $\sum_{n=m+1}^{\infty} f_n(x) = x(m + 1)^{-1}$이다.
   - (ii) 모든 양의 실수 $r$에서 함수항 급수는 $\{x \in \mathbb{R} : |x| \le r\}$ 위에서 고르게 수렴한다.
   - (iii) 함수항 급수는 $\mathbb{R}$ 위에서 고르게 수렴하지 않는다.
2. (고르게 수렴하지만 M 판정법의 가정을 만족하는 수열이 없는 예) $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$을 $f_n(x) = (-1)^n n^{-1}$(모든 $x$에서 같은 값)로 정하자.
   - (i) 함수항 급수는 $\mathbb{R}$ 위에서 고르게 수렴한다.
   - (ii) 실수열 $(M_n)$이 모든 자연수 $n$과 모든 실수 $x$에서 $|f_n(x)| \le M_n$을 만족하면 $(M_n)$의 급수는 발산한다. 따라서 이 급수에는 [[weierstrass-m-test|바이어슈트라스 M 판정법]]을 쓸 수 없다.
3. (항이 연속이지만 합 함수가 불연속인 예) $[0, 1]$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$을 $f_n(x) = x^n - x^{n-1}$로 정하자.
   - (i) 모든 $f_n$은 연속함수이고, 자연수 $m$과 $x \in [0, 1]$에서 $F_m(x) = x^m - 1$이다.
   - (ii) 함수항 급수는 점별 수렴하고, 그 합 함수 $s$는 $0 \le x < 1$이면 $s(x) = -1$, $s(1) = 0$이다.
   - (iii) $s$는 $1$에서 연속이 아니다. 따라서 함수항 급수는 $[0, 1]$ 위에서 고르게 수렴하지 않는다.
4. (고르게 수렴하지만 항별 미분이 성립하지 않는 예) $[0, 1]$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$을 $f_n(x) = x^{n+1}(n + 1)^{-1} - x^n n^{-1}$로 정하자.
   - (i) 모든 $f_n$은 연속미분가능하고 $f_n'(x) = x^n - x^{n-1}$이다. 곧 $(f_n')$은 (3)의 사상의 열이다.
   - (ii) 자연수 $m$과 $x \in [0, 1]$에서 $F_m(x) = x^{m+1}(m + 1)^{-1} - x$이다. 함수항 급수는 $[0, 1]$ 위에서 고르게 수렴하고, 합 함수 $s$는 모든 $x$에서 $s(x) = -x$이다.
   - (iii) $s'(1) = -1$이지만 $\sum_{n=1}^{\infty} f_n'(1) = 0$이다. $0 \le x < 1$에서는 $s'(x) = -1 = \sum_{n=1}^{\infty} f_n'(x)$이다.
:::

:::english
Sequences of maps, pointwise and uniform convergence and "on $A$" are those of the entries on sequences of maps and pointwise convergence and on uniform convergence; the partial sum functions $F_m$ are those of the entry on finite sums of functions; and pointwise and uniform convergence of a series of functions and the sum function are those of the entry on series of functions. Continuity, differentiability and continuous differentiability, powers and the notation for sums of series are those of the corresponding entries. All sequences of maps below are given by formulas (item (1) of the entry on sequences of maps and pointwise convergence).

1. (An example converging uniformly on every bounded interval but not uniformly on $\mathbb{R}$) Let $(f_n)$ be the sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ with $f_n(x) = x\bigl(n(n+1)\bigr)^{-1}$.
   - (i) For every integer $m \ge 0$ and real $x$, $F_m(x) = x - x(m + 1)^{-1}$. The series of functions converges pointwise and its sum function is the identity function; that is, $\sum_{n=1}^{\infty} f_n(x) = x$ and $\sum_{n=m+1}^{\infty} f_n(x) = x(m + 1)^{-1}$ for every real $x$.
   - (ii) For every positive real $r$, the series of functions converges uniformly on $\{x \in \mathbb{R} : |x| \le r\}$.
   - (iii) The series of functions does not converge uniformly on $\mathbb{R}$.
2. (An example converging uniformly although no sequence satisfies the hypotheses of the M-test) Let $(f_n)$ be the sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ with $f_n(x) = (-1)^n n^{-1}$ (the same value at every $x$).
   - (i) The series of functions converges uniformly on $\mathbb{R}$.
   - (ii) If a sequence of reals $(M_n)$ satisfies $|f_n(x)| \le M_n$ for every natural number $n$ and every real $x$, then the series of $(M_n)$ diverges. Hence the Weierstrass M-test cannot be applied to this series.
3. (An example with continuous terms and a discontinuous sum function) Let $(f_n)$ be the sequence of maps from $[0, 1]$ to $\mathbb{R}$ with $f_n(x) = x^n - x^{n-1}$.
   - (i) Every $f_n$ is a continuous function, and $F_m(x) = x^m - 1$ for every natural number $m$ and $x \in [0, 1]$.
   - (ii) The series of functions converges pointwise, and its sum function $s$ satisfies $s(x) = -1$ for $0 \le x < 1$ and $s(1) = 0$.
   - (iii) $s$ is not continuous at $1$. Hence the series of functions does not converge uniformly on $[0, 1]$.
4. (An example converging uniformly for which termwise differentiation fails) Let $(f_n)$ be the sequence of maps from $[0, 1]$ to $\mathbb{R}$ with $f_n(x) = x^{n+1}(n + 1)^{-1} - x^n n^{-1}$.
   - (i) Every $f_n$ is continuously differentiable and $f_n'(x) = x^n - x^{n-1}$; that is, $(f_n')$ is the sequence of maps of (3).
   - (ii) For every natural number $m$ and $x \in [0, 1]$, $F_m(x) = x^{m+1}(m + 1)^{-1} - x$. The series of functions converges uniformly on $[0, 1]$, and its sum function $s$ satisfies $s(x) = -x$ for every $x$.
   - (iii) $s'(1) = -1$, but $\sum_{n=1}^{\infty} f_n'(1) = 0$. For $0 \le x < 1$, $s'(x) = -1 = \sum_{n=1}^{\infty} f_n'(x)$.
:::

## 직관

앞의 세 항목이 말하는 조건이 왜 필요한지 보이는 예들입니다. (1)은 고른 수렴이 정의역에 따라 달라진다는 것을 보입니다. 꼬리의 합이 $x(m + 1)^{-1}$이어서 $x$가 유계인 범위에 있으면 한꺼번에 작아지지만, $x$가 커지면 같은 번호에서도 꼬리가 큽니다. 그래도 합 함수는 연속입니다. 유계인 구간마다의 고른 수렴으로 연속이 나오기 때문입니다.

(2)는 바이어슈트라스 M 판정법이 고른 수렴의 충분조건일 뿐이라는 것을 보입니다. 항들이 부호를 바꾸며 서로 지워 급수는 수렴하지만, 항의 절댓값의 급수는 조화급수가 되어 발산합니다. M 판정법은 절댓값으로 누르므로 이런 상쇄를 볼 수 없습니다.

(3)과 (4)는 같은 함수 $x^n$에서 나옵니다. (3)에서 부분합 $x^m - 1$은 $1$에서만 다른 값으로 가므로 합 함수가 끊어지고, (4)에서 부분합 $x^{m+1}(m+1)^{-1} - x$는 고르게 $-x$로 가지만 그 도함수 $x^m - 1$이 (3)의 부분합이어서 $1$에서 $s'(1) = -1$과 다른 값 $0$으로 갑니다. 항별 미분의 정리에서 도함수의 급수의 고른 수렴을 가정하는 까닭이 이것입니다.

## 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 합과 차는 정수이다([[even-and-odd]]). 실수의 부등식은 [[order-properties-of-reals]]의 번호와 [[absolute-value]]의 번호로 다룬다. 부분합 함수의 값은 [[finite-sums-of-functions]]의 (1)에 의해 값의 수열의 유한 합이고, 유한 합에 [[linearity-and-order-of-finite-sums]]의 번호와 [[telescoping-sum]]의 번호를 쓴다.

**1의 증명.** (i) [[comparison-test|비교 판정법]]의 (5)에 의해 $n$번째 항이 $\bigl(n(n+1)\bigr)^{-1}$인 수열의 $m$번째 부분합은 $1 - (m + 1)^{-1}$이고 그 급수의 합은 $1$이다. $m = 0$이면 빈 합이 $0 = 1 - 1$이다. [[linearity-and-order-of-finite-sums]]의 (1)에 의해 $F_m(x) = x\bigl(1 - (m + 1)^{-1}\bigr) = x - x(m + 1)^{-1}$이다. [[sum-of-a-series|급수의 합의 기호]]의 (3)(상수배)에 의해 $(f_n(x))$의 급수는 수렴하고 합은 $x \cdot 1 = x$이며, [[series-of-functions|함수항 급수]]의 (1)에 의해 함수항 급수는 점별 수렴하고 합 함수는 항등함수이다. 꼬리의 합은 그 항목의 (3)에 의해 $x - F_m(x) = x(m + 1)^{-1}$이다.

(ii) $|x| \le r$이면 $|f_n(x)| = |x|\bigl(n(n+1)\bigr)^{-1} \le r\bigl(n(n+1)\bigr)^{-1}$이고([[absolute-value]]의 (4), (1)), $n$번째 항이 $r\bigl(n(n+1)\bigr)^{-1}$인 수열의 급수는 수렴한다(비교 판정법의 (5)와 급수의 합의 기호의 (3)). 함수항 급수의 정의에 의해 "$\{x : |x| \le r\}$ 위에서"는 제한의 열의 함수항 급수에 관한 말이므로, 제한의 열에 [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (2)를 쓰면 결론이다.

(iii) 고르게 수렴한다고 하면 [[series-of-functions]]의 (3)에 의해 $\varepsilon = 1$에 대해 자연수 $N$이 있어 $m \ge N$과 모든 실수 $x$에서 $\left| x(m + 1)^{-1} \right| < 1$이다. $m = N$, $x = N + 1$을 넣으면 왼쪽은 $1$이므로 모순이다.

**2의 증명.** (i) [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 $n$번째 항이 $(-1)^n n^{-1}$인 수열의 급수는 수렴한다. 모든 $x$에서 $f_n(x)$가 이 수열의 $n$번째 항이므로 [[series-of-functions]]의 (7)에 의해 함수항 급수는 $\mathbb{R}$ 위에서 고르게 수렴한다.

(ii) [[power-of-a-real-number]]의 (4)와 (2)의 (iv)($|-1| = 1$, $1^n = 1$)에 의해 $|f_n(x)| = |(-1)^n|\,n^{-1} = n^{-1}$이므로, 가정에 의해 모든 자연수 $n$에서 $0 \le n^{-1} \le M_n$이다($x = 0$을 넣는다). [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 $n$번째 항이 $n^{-1}$인 수열의 급수는 발산하므로, [[comparison-test]]의 (3)에 의해 $(M_n)$의 급수도 발산한다. 따라서 M 판정법의 가정 "(M_n)의 급수가 수렴한다"를 만족하는 $(M_n)$이 없다.

**3의 증명.** (i) [[power-function-is-continuous]]의 (1)에 의해 $p_n$과 $p_{n-1}$은 연속함수이고, [[continuous-function]]의 (5)와 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 그 차의 $[0, 1]$로의 제한 $f_n$은 연속함수이다. $x \in [0, 1]$을 잡고 0부터 번호가 붙은 실수 $c_i = x^i$($0 \le i \le m$)를 두면 $f_n(x) = c_n - c_{n-1}$이고, [[telescoping-sum|망원 합]]의 (1)에 의해 $F_m(x) = c_m - c_0 = x^m - 1$이다($c_0 = x^0 = 1$, $x = 0$에서도).

(ii) $0 \le x < 1$이면 $|x| < 1$이므로 [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $(x^m)$은 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (2)와 [[basic-limits]]의 (1)에 의해 $(F_m(x))$는 $-1$로 수렴한다. $x = 1$이면 모든 $m$에서 $F_m(1) = 1 - 1 = 0$이므로 $0$으로 수렴한다. [[series-of-functions]]의 (1)에 의해 함수항 급수는 점별 수렴하고 합 함수는 진술의 $s$이다.

(iii) $s$가 $1$에서 연속이라고 하면 $\varepsilon = 2^{-1}$에 대해 양의 실수 $\delta$가 있어 $x \in [0, 1]$, $|x - 1| < \delta$인 모든 $x$에서 $|s(x) - s(1)| < 2^{-1}$이다. $d = \min\{\delta, 1\}$로 두고 $x = 1 - d/2$를 잡으면 $0 \le 2^{-1} \le x < 1$이고 $|x - 1| = d/2 < \delta$인데, $|s(x) - s(1)| = |-1 - 0| = 1$이므로 모순이다. 모든 $f_n$이 연속함수이므로, 함수항 급수가 $[0, 1]$ 위에서 고르게 수렴하면 [[termwise-continuity-and-integration|고르게 수렴하는 함수항 급수의 연속과 적분]]의 (2)에 의해 $s$가 연속함수여야 한다. 따라서 고르게 수렴하지 않는다.

**4의 증명.** (i) $n \ge 1$이므로 [[continuously-differentiable]]의 (4)에 의해 $p_{n+1}$과 $p_n$의 $[0, 1]$로의 제한은 연속미분가능하고 도함수의 값은 $(n + 1)x^n$, $n x^{n-1}$이다. 같은 항목의 (3)에 의해 $f_n = (n + 1)^{-1} p_{n+1} - n^{-1} p_n$(제한)은 연속미분가능하고 $f_n'(x) = (n + 1)^{-1}(n + 1)x^n - n^{-1} n x^{n-1} = x^n - x^{n-1}$이다((K…)).

(ii) $x \in [0, 1]$에서 0부터 번호가 붙은 실수 $c_i = x^{i+1}(i + 1)^{-1}$($0 \le i \le m$)를 두면 $f_n(x) = c_n - c_{n-1}$이고, 망원 합의 (1)에 의해 $F_m(x) = c_m - c_0 = x^{m+1}(m + 1)^{-1} - x$이다. 따라서 $|F_m(x) - (-x)| = x^{m+1}(m + 1)^{-1} \le (m + 1)^{-1}$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $0 \le x^{m+1} \le 1$). $m$번째 항이 $(m + 1)^{-1}$인 수열은 $n$번째 항이 $n^{-1}$인 수열의 $1$-꼬리이므로 [[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $0$으로 수렴하고, [[uniform-convergence]]의 (4)에 의해 $(F_m)$은 $s(x) = -x$인 $s$로 고르게 수렴한다. 정의에 의해 함수항 급수는 $s$로 고르게 수렴하고, [[series-of-functions]]의 (2)에 의해 $s$는 합 함수이다.

(iii) [[derivative]]의 (1)($s(x) = (-1)x + 0$)에 의해 $s$는 미분가능하고 모든 $x$에서 $s'(x) = -1$이다. 한편 $(f_n')$은 (3)의 사상의 열이므로 (3)의 (ii)에 의해 $(f_n'(x))$의 급수는 수렴하고, $0 \le x < 1$이면 합이 $-1$, $x = 1$이면 합이 $0$이다. 특히 $\sum_{n=1}^{\infty} f_n'(1) = 0 \ne -1 = s'(1)$이다. $\blacksquare$
:::

## 확인 질문

:::check[(1)에서 $r = 10$이면 꼬리의 합이 모든 $|x| \le 10$에서 $0.01$보다 작아지게 하려면 $m$을 얼마 이상으로 잡으면 되는가?]
(1)의 (i)에 의해 꼬리의 합은 $x(m + 1)^{-1}$이고 $|x| \le 10$에서 그 절댓값은 $10(m + 1)^{-1}$ 이하이며, $x = 10$에서 그 값과 같습니다. $10(m + 1)^{-1} < 0.01$은 $m + 1 > 1000$, 곧 $m \ge 1000$과 같습니다.
:::

:::check[(4)는 항별 미분의 정리의 어느 가정을 깨뜨리는가?]
[[termwise-differentiation-of-series|함수항 급수의 항별 미분]]의 가정 가운데, 모든 $f_n$은 연속미분가능하고 $c = 0$에서 $(f_n(0))$의 급수는 모든 항이 $0$이어서 수렴합니다. 깨지는 것은 "도함수의 급수가 $[0, 1]$ 위에서 고르게 수렴한다"입니다. 도함수의 열은 (3)의 열이고 (3)의 (iii)에 의해 그 급수는 고르게 수렴하지 않습니다.
:::
