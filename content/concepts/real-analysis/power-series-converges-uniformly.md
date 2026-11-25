---
title: 멱급수의 고른 수렴과 연속
title_en: Uniform Convergence and Continuity of Power Series
aliases: [멱급수의 고른 수렴, 멱급수의 연속, 멱급수의 항의 사상의 열, uniform convergence of power series, continuity of power series]
kind: theorem
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 멱급수의 항을 x 의 함수로 본 0부터 번호가 붙은 사상의 열을 정하고, 수렴 반지름 ρ 보다 작은 0 이상의 r 에 대하여(모든 실수에서 수렴하는 멱급수이면 0 이상인 모든 r 에 대하여) 중심에서 거리가 r 이하인 점들 위에서 그 함수항 급수가 고르게 수렴하고 꼬리가 Σ|c_n| rⁿ 의 꼬리로 눌린다는 것과, 멱급수가 나타내는 함수가 연속함수라는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, sequence, geometric-sequence-limit, interval, real-valued-function, continuous-function, continuously-differentiable, sum-of-a-series, series-indexed-from-zero, pointwise-convergence, uniform-convergence, finite-sums-of-functions, series-of-functions, weierstrass-m-test, termwise-continuity-and-integration, power-series, radius-of-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Proposition 6.2.11 과 그 증명 (p.240–241); 6.1.4절 Exercises 의 Exercise 6.1.14 (p.233)"
    checked: original
    note: "출처 Proposition 6.2.11(p.240)은 반지름 ρ 가 0 < ρ ≤ ∞ 인 convergent 멱급수가 0 < r < ρ 이면 [a − r, a + r] 에서 고르게 수렴하고, 특히 ρ < ∞ 이면 (a − ρ, a + ρ), ρ = ∞ 이면 ℝ 위의 연속함수로 점별 수렴한다고 진술한다. 증명(p.241)은 a + r 에서의 절대수렴으로 Σ|c_n| rⁿ 이 수렴함을 얻고, 그 꼬리가 ε 보다 작아지는 번호부터 부분합의 차를 |c_n| rⁿ 의 합으로 눌러 고르게 코시임을 보인 뒤, 부분합이 연속인 다항식이므로 고른 극한이 [a − r, a + r] 에서 연속이고 'r < ρ 가 임의였으므로' I 전체에서 연속이라고 끝맺는다. 이 항목은 ∞ 를 쓰지 않고 radius-of-convergence 의 두 경우(A 가 위로 유계이고 r < ρ, 모든 실수에서 수렴하는 멱급수)로 나누며, r = 0 도 허락한다(그때 J_r = {a}). 고른 수렴은 같은 누르기 |c_n (x − a)ⁿ| ≤ |c_n| rⁿ 을 weierstrass-m-test 의 (5)에 넣어 얻었고, 꼬리의 어림을 (2)의 부등식으로 진술에 올렸다. 출처는 마지막 단계를 'r < ρ 가 임의였으므로'라고만 적는다. 이 항목은 그 단계를 점 x₀ 마다 r 을 식으로 정하고 x₀ 의 둘레가 J_r 에 든다는 것을 보여 termwise-continuity-and-integration 의 (2)로 증명했다. 예시 '중심 $1$, 계수 $3^{-n}$인 멱급수의 꼬리의 어림'과 반례 '$I$ 전체에서는 고르게 수렴하지 않을 수 있다'는 Exercise 6.1.14(6.1.4절, p.233)가 Σ xᵏ 이 0 ≤ c < 1 인 [−c, c] 에서는 고르게 수렴하고 (−1, 1) 에서는 고르게 수렴하지 않음을 보이라는 것과 같은 발상이다(이 항목은 중심과 공비를 바꾼 등비급수를 쓴다). 확인 질문 '계수가 모두 $1$이고 중심이 $0$인 멱급수에서, (2)의 어림으로 $\\{x : |x| \\le 1/2\\}$의 모든 점에서 합과 $m$번째 부분합의 차를 $1/100$보다 작게 하는 $m$은 무엇인가?'는 Exercise 6.1.14 a)의 c = 1/2 인 경우와 같은 물음이다. 확인 질문 '계수가 모두 $1$인 멱급수에서 (2)를 $r = 1$로 쓸 수 없는 까닭은 무엇인가?'의 멱급수는 2.6.5절 Proposition 2.6.12 뒤 문단(p.109)의 등비급수 Σ xⁿ 과 같은 대상이다."
  - ref: lebl-basic-analysis-2
    loc: "11.3.2절 Convergence of power series 의 Proposition 11.3.1 의 'Furthermore' 와 그 증명 (p.154–155); 11.3.3절 Properties of analytic functions 의 Proposition 11.3.4 와 그 증명 (p.156); 11.2.1절 Continuity 의 Example 11.2.6 (p.147)"
    checked: original
    note: "출처 II 권 Proposition 11.3.1(p.154)의 'Furthermore'는 0 < r < ρ 이면 복소 멱급수가 닫힌 공 C(a, r) 에서 고르게 수렴한다고 하고, 증명(p.155)은 부분합을 Σ|c_n| rⁿ 으로 누르는 한 줄이다. Proposition 11.3.4(p.156)는 B(a, ρ) 에서 수렴하는 멱급수가 연속이라고 하고, 증명은 z₀ 마다 z₀ ∈ B(a, r) 인 r < ρ 를 고르고 B(a, r) 위의 고른 수렴으로 f|_{B(a,r)} 이 연속임을 얻은 뒤, z₀ 로 수렴하는 수열의 꼬리가 B(a, r) 안에 든다는 것으로 f 가 z₀ 에서 연속이라고 한다. 이 항목의 (3)의 증명은 같은 생각을 수열 없이 'x₀ 의 둘레가 J_r 에 든다'로 바꾸었고, r 은 고르지 않고 식으로 정했다. 이 항목은 실수만 쓴다. Example 11.2.6(p.147)은 Σ xⁿ/n! 이 [−r, r] 에서 xⁿ/n! ≤ rⁿ/n! 의 누르기와 M 판정법으로 고르게 수렴함을 보인다. (2)의 증명과 같은 논법이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(항별 미분의 반지름이 같다는 A 집합 비교 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·절대수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이다(그 항목의 (7)). 0부터 번호가 붙은 사상의 열과 그 0부터의 부분합 함수 $G_m$은 [[finite-sums-of-functions|함수의 유한 합]]의 것이고, 함수항 급수의 점별 수렴과 고른 수렴, "$X$ 위에서", 합 함수는 [[series-of-functions|함수항 급수]]의 것이다(0부터 번호가 붙은 열은 그 (6)). 0부터 번호가 붙은 수열의 급수와 합 $\sum_{n=0}^{\infty}$은 [[series-indexed-from-zero]], 꼬리의 합 $\sum_{n=m+1}^{\infty}$는 [[sum-of-a-series]], 연속과 연속함수는 [[continuous-function]], 닫힌구간은 [[interval]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자.

**항의 사상의 열.** $0$ 이상인 정수 $n$마다 $x$에서의 값이 $c_n (x - a)^n$인 함수 $h_n : \mathbb{R} \to \mathbb{R}$가 있고, 이 함수들로 $\mathbb{R}$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열 $(h_n)_{n \ge 0}$이 있다. 이것을 멱급수의 **항의 사상의 열**이라 한다. 실수 $x$에서 $(h_n(x))_{n \ge 0}$은 $x$에서의 멱급수의 항이고, $-1$ 이상인 정수 $m$에서 $(h_n)_{n \ge 0}$의 0부터의 $m$번째 부분합 함수 $G_m$의 $x$에서의 값은 $\sum_{n=0}^{m} c_n (x - a)^n$이다. $0 \le r$인 실수 $r$에 대하여 이 항목에서
$$
J_r = \{x \in \mathbb{R} : |x - a| \le r\}
$$
로 쓴다. $0 < r$이면 $J_r$은 닫힌구간 $[a - r, a + r]$이고, $J_0 = \{a\}$이다.

다음이 성립한다.

1. (점별 수렴) $X$가 $\mathbb{R}$의 부분집합이고 멱급수가 $X$의 모든 점에서 수렴하면, $(h_n)_{n \ge 0}$의 함수항 급수는 $X$ 위에서 점별 수렴하고, 그 합 함수는 $x$에서의 값이 $\sum_{n=0}^{\infty} c_n (x - a)^n$인 함수 $X \to \mathbb{R}$이다. 특히 [[radius-of-convergence]]의 (7)의 (i)의 두 경우에 $(h_n)_{n \ge 0}$의 함수항 급수는 $I$ 위에서 멱급수가 나타내는 함수 $f$로 점별 수렴한다.
2. (고른 수렴) $r$을 $0 \le r$인 실수라 하고, "$A$가 위로 유계이고 $r < \rho$"이거나 멱급수가 모든 실수에서 수렴하는 멱급수라 하자. 그러면 $n$에서의 값이 $|c_n|\, r^n$인 0부터 번호가 붙은 수열의 급수는 수렴하고, $(h_n)_{n \ge 0}$의 함수항 급수는 $J_r$ 위에서 $x$에서의 값이 $\sum_{n=0}^{\infty} c_n (x - a)^n$인 함수로 고르게 수렴한다. $0$ 이상인 모든 정수 $m$과 $J_r$의 모든 점 $x$에서
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=0}^{\infty} c_n (x - a)^n \\
   &\qquad - \sum_{n=0}^{m} c_n (x - a)^n \Bigr| \\
   &\qquad \le \sum_{n=m+1}^{\infty} |c_n|\, r^n
   \end{aligned}
   $$
   이다. [[radius-of-convergence]]의 (7)의 (i)의 두 경우에는 이 $r$에 대하여 $J_r \subseteq I$이다.
3. (연속) [[radius-of-convergence]]의 (7)의 (i)의 두 경우에 멱급수가 $I$ 위에 나타내는 함수 $f : I \to \mathbb{R}$는 연속함수이다. 더 자세히, $I$의 모든 원소 $x_0$에 대하여 양의 실수 $\delta_0$과 (2)의 가정을 만족하는 실수 $r$이 있어 $\{x \in I : |x - x_0| < \delta_0\} \subseteq J_r$이고, $(h_n)_{n \ge 0}$의 함수항 급수는 $\{x \in I : |x - x_0| < \delta_0\}$ 위에서 고르게 수렴한다.
:::

:::english
Power series, the terms at $x$, convergence and absolute convergence at $x$ and the sum there are as in the entry on power series; the set $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ and the function a power series represents on $I$ are as in the entry on the radius of convergence (its (7)). Sequences of maps indexed from zero and their partial sum functions $G_m$ from zero are as in the entry on finite sums of functions; pointwise and uniform convergence of a series of functions, "on $X$", and the sum function are as in the entry on series of functions (its (6) for sequences indexed from zero). Series of sequences indexed from zero and the sum $\sum_{n=0}^{\infty}$, the tail sum $\sum_{n=m+1}^{\infty}$, continuity and continuous functions, and closed intervals are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**The sequence of term maps.** For every integer $n \ge 0$ there is a function $h_n : \mathbb{R} \to \mathbb{R}$ whose value at $x$ is $c_n (x - a)^n$, and these functions form a sequence of maps indexed from zero $(h_n)_{n \ge 0}$ from $\mathbb{R}$ to $\mathbb{R}$. It is called the **sequence of term maps** of the power series. At a real $x$, $(h_n(x))_{n \ge 0}$ is the sequence of terms of the power series at $x$, and for every integer $m \ge -1$ the value at $x$ of the $m$th partial sum function $G_m$ of $(h_n)_{n \ge 0}$ from zero is $\sum_{n=0}^{m} c_n (x - a)^n$. For a real $r \ge 0$ we write in this entry
$$
J_r = \{x \in \mathbb{R} : |x - a| \le r\}.
$$
If $r > 0$, then $J_r$ is the closed interval $[a - r, a + r]$, and $J_0 = \{a\}$.

The following hold.

1. (Pointwise convergence) If $X$ is a subset of $\mathbb{R}$ and the power series converges at every point of $X$, then the series of functions of $(h_n)_{n \ge 0}$ converges pointwise on $X$, and its sum function is the function $X \to \mathbb{R}$ whose value at $x$ is $\sum_{n=0}^{\infty} c_n (x - a)^n$. In particular, in both cases of (7)(i) of the entry on the radius of convergence, the series of functions of $(h_n)_{n \ge 0}$ converges pointwise on $I$ to the function $f$ represented by the power series.
2. (Uniform convergence) Let $r$ be a real number with $r \ge 0$, and suppose that either "$A$ is bounded above and $r < \rho$" or the power series converges at every real number. Then the series of the sequence indexed from zero with values $|c_n|\, r^n$ converges, and the series of functions of $(h_n)_{n \ge 0}$ converges uniformly on $J_r$ to the function whose value at $x$ is $\sum_{n=0}^{\infty} c_n (x - a)^n$. For every integer $m \ge 0$ and every point $x$ of $J_r$,
   $$
   \begin{aligned}
   &\Bigl| \sum_{n=0}^{\infty} c_n (x - a)^n \\
   &\qquad - \sum_{n=0}^{m} c_n (x - a)^n \Bigr| \\
   &\qquad \le \sum_{n=m+1}^{\infty} |c_n|\, r^n.
   \end{aligned}
   $$
   In both cases of (7)(i) of the entry on the radius of convergence, $J_r \subseteq I$ for this $r$.
3. (Continuity) In both cases of (7)(i) of the entry on the radius of convergence, the function $f : I \to \mathbb{R}$ represented by the power series on $I$ is continuous. More precisely, for every element $x_0$ of $I$ there are a positive real number $\delta_0$ and a real number $r$ satisfying the hypotheses of (2) such that $\{x \in I : |x - x_0| < \delta_0\} \subseteq J_r$, and the series of functions of $(h_n)_{n \ge 0}$ converges uniformly on $\{x \in I : |x - x_0| < \delta_0\}$.
:::

## 직관

[[radius-of-convergence|수렴 반지름]]의 항목은 점 $x$마다 따로 수렴을 보았습니다. 이 항목은 멱급수를 $x$의 함수들의 급수로 보고, 여러 점에서 **한꺼번에** 얼마나 빨리 수렴하는지를 봅니다. 중심에서 거리가 $r$ 이하인 점 $x$에서는 $n$번째 항의 크기가 $|c_n|\,|x - a|^n \le |c_n|\, r^n$이어서, 가장 먼 점 $a + r$에서의 항의 크기가 모든 점의 항을 한꺼번에 누릅니다. $r$이 반지름보다 작으면 $a + r$에서 절대수렴하므로 이 누르는 수들의 급수가 수렴하고, [[weierstrass-m-test|바이어슈트라스 M 판정법]]이 고른 수렴을 줍니다.

비유하자면 같은 시각에 출발한 여러 주자가 중심에서 떨어진 거리만큼 무거운 짐을 진 것과 같습니다. 가장 무거운 짐을 진 주자(거리 $r$인 점)가 정해진 시간 안에 들어오면, 가벼운 짐의 주자들은 모두 그보다 먼저 들어옵니다. (2)의 부등식에서 "가장 무거운 짐"이 오른쪽의 $\sum_{n=m+1}^{\infty} |c_n|\, r^n$이고 이것이 $x$에 따르지 않습니다. 비유가 맞지 않는 곳은, 반지름과 같은 거리에서는 가장 무거운 짐의 주자가 끝내 들어오지 못할 수 있다는 것입니다. 그래서 (2)는 $r < \rho$에서만 말합니다.

연속은 점마다의 성질이므로 $I$ 전체에서 고르게 수렴할 필요가 없습니다. $I$의 점 $x_0$마다 $x_0$보다 조금 바깥의 거리 $r$을 잡으면 $x_0$의 둘레가 $J_r$ 안에 들고, 그 둘레에서의 고른 수렴만으로 합 함수가 $x_0$에서 연속입니다. 이것이 (3)입니다.

## 증명

:::idea
$J_r$의 점에서는 $|c_n (x - a)^n| \le |c_n|\, r^n$이고, $a + r$에서의 절대수렴이 $(|c_n|\, r^n)_{n \ge 0}$의 급수의 수렴을 준다. M 판정법이 고른 수렴을 주고, 연속은 점마다 둘레의 고른 수렴으로 얻는다.
:::

:::hint
(2)에서 $|c_n|\, r^n$은 $x = a + r$에서의 항의 절댓값이다.
:::

:::hint
(3)에서 $x_0$를 받으면 $r = (|x_0 - a| + \rho)/2$(모든 실수에서 수렴하는 멱급수이면 $r = |x_0 - a| + 1$)로 두고, 삼각부등식으로 $|x - x_0| < r - |x_0 - a|$인 $x$가 $J_r$에 든다는 것을 보인다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 거리공간의 항목들([[pointwise-convergence]], [[uniform-convergence]])은 $Y = \mathbb{R}$(보통 거리)에 쓴다.

**항의 사상의 열이 있다는 것.** $0$ 이상인 정수 $n$마다 $x$에서의 값이 $c_n (x - a)^n$인 함수 $h_n : \mathbb{R} \to \mathbb{R}$는 [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (iv)의 함수($c = c_n$)이다. 각 $h_n$이 이미 정해진 사상이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n$에서의 값이 $h_n$인 0부터 번호가 붙은 사상의 열이 있다. $G_m$의 값은 [[finite-sums-of-functions]]의 정의 그대로이다. 같은 (7)의 (iv)에 의해 각 $h_n$은 연속미분가능하고, [[continuously-differentiable]]의 (1)에 의해 연속함수이다. $J_r$에 관한 문장은 [[absolute-value|절댓값]]의 (8)(등호가 있는 꼴)에 의해 $|x - a| \le r$이 정확히 $a - r \le x \le a + r$일 때이고, $0 < r$이면 순서 성질 (3)의 (iii)과 (2)의 (ii)에 의해 $a - r < a < a + r$이어서 닫힌구간 $[a - r, a + r]$이 정해진다는 것과, $r = 0$이면 절댓값의 (2)에 의해 $|x - a| \le 0$이 정확히 $x = a$일 때라는 것((K12)의 (v))이다.

**1의 증명.** $x \in X$이면 멱급수는 $x$에서 수렴하므로 $(h_n(x))_{n \ge 0}$, 곧 $x$에서의 항의 급수가 수렴한다. [[series-of-functions|함수항 급수]]의 (6)의 (i)에 의해 $(h_n)_{n \ge 0}$의 함수항 급수는 $X$ 위에서, 곧 $(h_n|_X)_{n \ge 0}$의 함수항 급수로서, $x$에서의 값이 $\sum_{n=0}^{\infty} c_n (x - a)^n$인 함수로 점별 수렴하고 그 함수가 합 함수이다. [[radius-of-convergence]]의 (7)의 (i)의 두 경우에는 같은 항목의 (7)의 (ii)에 의해 $I$의 모든 점에서 멱급수가 수렴하고 그 합이 $f(x)$이므로, $X = I$로 두면 합 함수는 $f$이다.

**2의 증명.** 먼저 $x_1 = a + r$에서 멱급수가 절대수렴함을 보인다. (K1)–(K5)에 의해 $x_1 - a = r$이고, $0 \le r$이므로 절댓값의 (1)에 의해 $|x_1 - a| = r$이다. $A$가 위로 유계이고 $r < \rho$이면 [[radius-of-convergence]]의 (2)에 의해, 모든 실수에서 수렴하는 멱급수이면 같은 항목의 (4)에 의해 멱급수는 $x_1$에서 절대수렴한다. [[power-series]]의 (2)에 의해 $|c_n (x_1 - a)^n| = |c_n|\, r^n$이므로, $n$에서의 값이 $|c_n|\, r^n$인 0부터 번호가 붙은 수열의 급수가 수렴한다.

$x \in J_r$이고 $n$이 $0$ 이상인 정수이면 [[power-series]]의 (2)에 의해 $|h_n(x)| = |c_n|\,|x - a|^n$이다. $0 \le |x - a| \le r$이므로(절댓값의 (2)) [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|x - a|^n \le r^n$이고, $0 \le |c_n|$이므로 순서 성질 (4)의 (iii)에 의해 $|h_n(x)| \le |c_n|\, r^n$이다. 따라서 $J_r$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열 $(h_n|_{J_r})_{n \ge 0}$과 0부터 번호가 붙은 수열 $M_n = |c_n|\, r^n$은 [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (5)의 가정을 만족한다. 그 (5)에 의해 $(h_n|_{J_r})_{n \ge 0}$의 함수항 급수, 곧 $J_r$ 위의 $(h_n)_{n \ge 0}$의 함수항 급수는 합 함수로 고르게 수렴하고, 합 함수의 $x$에서의 값은 [[series-of-functions]]의 (6)의 (i)에 의해 $\sum_{n=0}^{\infty} c_n (x - a)^n$이며, $0$ 이상인 모든 정수 $m$과 $x \in J_r$에서 위의 부등식이 성립한다.

$J_r \subseteq I$: $A$가 위로 유계이고 $0 < \rho$이며 $r < \rho$이면, $x \in J_r$에서 $|x - a| \le r < \rho$이므로 순서 성질 (1)의 (v)에 의해 $x \in I$이다. $I = \mathbb{R}$이면 자명하게 $J_r \subseteq I$이다.

**3의 증명.** $x_0 \in I$라 하자. $A$가 위로 유계이고 $0 < \rho$이면 $r = (|x_0 - a| + \rho)/2$로 두고, 모든 실수에서 수렴하는 멱급수이면 $r = |x_0 - a| + 1$로 둔다. 앞의 경우에는 $|x_0 - a| < \rho$이므로 순서 성질 (8)에 의해 $|x_0 - a| < r < \rho$이고, 뒤의 경우에는 순서 성질 (5)의 (ii)와 (2)의 (ii)에 의해 $|x_0 - a| < r$이다. 두 경우 모두 절댓값의 (2)와 순서 성질 (1)의 (v)에 의해 $0 < r$이고, $r$은 (2)의 가정을 만족한다. $\delta_0 = r - |x_0 - a|$로 두면 순서 성질 (3)의 (i)에 의해 $0 < \delta_0$이다.

$x \in I$이고 $|x - x_0| < \delta_0$이면 [[triangle-inequality|삼각부등식]]의 (4)와 순서 성질 (2)의 (iv)에 의해
$$
\begin{aligned}
|x - a| &\le |x - x_0| + |x_0 - a| \\
&< \delta_0 + |x_0 - a| = r
\end{aligned}
$$
이므로 $x \in J_r$이다. 곧 $U = \{x \in I : |x - x_0| < \delta_0\}$로 두면 $U \subseteq J_r$이다. (2)에 의해 $(h_n|_{J_r})_{n \ge 0}$의 함수항 급수는 고르게 수렴하고, [[series-of-functions]]의 (6)의 정의(한 칸 옮긴 사상의 열)와 그 (5)를 $X = J_r$, 부분집합 $U$에 쓰면 $(h_n|_U)_{n \ge 0}$의 함수항 급수, 곧 $U$ 위의 $(h_n)_{n \ge 0}$의 함수항 급수도 고르게 수렴한다. 여기서 $(h_n|_{J_r})|_U = h_n|_U$이다.

이제 $S = I$와 $I$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열 $(h_n|_I)_{n \ge 0}$을 생각한다. (1)에 의해 그 함수항 급수는 $I$ 위에서 점별 수렴하고 합 함수는 $f$이다. 각 $h_n$은 연속함수이므로 [[continuous-function]]의 (5)에 의해 $h_n|_I$도 연속함수이다. $I$의 모든 점 $x_0$에서 위의 $\delta_0$에 대해 $\{x \in I : |x - x_0| < \delta_0\}$ 위에서 고르게 수렴하므로, [[termwise-continuity-and-integration|고르게 수렴하는 함수항 급수의 연속과 적분]]의 (6)과 (2)의 둘째 문장에 의해 $f$는 연속함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[중심 $1$, 계수 $3^{-n}$인 멱급수의 꼬리의 어림]
중심 $a = 1$, 계수 $c_n = (3^{-1})^n$인 멱급수를 봅시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $x$에서의 항은 $y^n$이고 $y = (x - 1)/3$입니다.

- 수렴 반지름은 $3$입니다. $|x - 1| < 3$이면 $|y| < 1$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 멱급수는 $x$에서 수렴하고 합은 $(1 - y)^{-1} = 3(4 - x)^{-1}$입니다. $|x - 1| > 3$이면 $|y| > 1$이므로 [[geometric-sequence-limit|등비수열의 극한]]의 (3)에 의해 항이 유계가 아니고, [[power-series]]의 (1)과 (5)에 의해 발산합니다. [[radius-of-convergence]]의 (6)의 (i)에 의해 $\rho = 3$이고 $I = (-2, 4)$입니다.
- $r = 2$로 (2)를 쓰면 $J_2 = [-1, 3]$이고 $|c_n|\, 2^n = (2/3)^n$입니다. [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)에 의해 $0$ 이상인 정수 $m$에서 $\sum_{n=m+1}^{\infty} (2/3)^n = (2/3)^{m+1}(1/3)^{-1} = 3\,(2/3)^{m+1}$입니다.

그래서 $[-1, 3]$의 모든 점 $x$에서
$$
\begin{aligned}
&\Bigl| \frac{3}{4 - x} - \sum_{n=0}^{m} \Bigl(\frac{x - 1}{3}\Bigr)^n \Bigr| \\
&\qquad \le 3 \Bigl(\frac{2}{3}\Bigr)^{m+1}
\end{aligned}
$$
입니다. 예컨대 $m = 8$이면 오른쪽은 $3 \cdot 512/19683 = 512/6561$이고, 이것은 $1/10$보다 작습니다($5120 < 6561$).

이 어림은 $x = 3$에서 등호입니다. [[series-indexed-from-zero]]의 (13)의 (i)에 의해 $\sum_{n=0}^{m} y^n = (1 - y^{m+1})(1 - y)^{-1}$이므로 합과 부분합의 차는 $y^{m+1}(1 - y)^{-1}$이고, $x = 3$에서 $y = 2/3$이므로 그 값이 $3\,(2/3)^{m+1}$입니다.
:::

:::counterexample[$I$ 전체에서는 고르게 수렴하지 않을 수 있다]
위의 멱급수(중심 $1$, 계수 $3^{-n}$)는 $I = (-2, 4)$ 위에서 고르게 수렴하지 않습니다. 위 예시의 계산대로 $x \in I$에서 합과 $m$번째 부분합의 차는 $y^{m+1}(1 - y)^{-1}$이고 $y = (x - 1)/3$입니다. $0$ 이상인 정수 $m$마다 $y = 1 - (1/2)^{m+2}$로 두면 $1/2 \le y < 1$이고 $x = 1 + 3y$는 $1 < x < 4$이므로 $I$의 원소입니다. 이때 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $y^{m+1} \ge (1/2)^{m+1}$이고 $(1 - y)^{-1} = 2^{m+2}$이므로
$$
y^{m+1}(1 - y)^{-1} \ge (1/2)^{m+1}\, 2^{m+2} = 2
$$
입니다. 그래서 $\varepsilon = 1$에 대하여 어느 번호 $M$을 잡아도 $m = M$에서 차가 $1$ 이상인 점이 $I$에 있고, [[series-of-functions|함수항 급수]]의 (6)의 (ii)의 조건이 성립하지 않아 $f$로 고르게 수렴하지 않습니다. 다른 사상으로 고르게 수렴한다면 부분합 함수의 열이 그 사상으로 점별 수렴하고([[uniform-convergence|고른 수렴]]의 (1)), 점별 극한이 하나뿐이라는 것([[series-of-functions]]의 (1)과 (6))에 의해 그 사상은 $f$여야 하여 모순입니다. 이처럼 $I$ 전체에서는 고르게 수렴하지 않을 수 있으므로 (3)은 점마다의 둘레에서의 고른 수렴을 말합니다. 그래도 (3)에 의해 나타내는 함수 $3(4 - x)^{-1}$은 $I$ 위의 연속함수입니다.
:::

## 확인 질문

:::check[계수가 모두 $1$이고 중심이 $0$인 멱급수에서, (2)의 어림으로 $\{x : |x| \le 1/2\}$의 모든 점에서 합과 $m$번째 부분합의 차를 $1/100$보다 작게 하는 $m$은 무엇인가?]
$m \ge 7$이면 됩니다. 이 멱급수는 $|x| < 1$에서 수렴하고([[series-indexed-from-zero]]의 (13)의 (ii)) $|x| > 1$에서 항이 유계가 아니어서 발산하므로([[geometric-sequence-limit|등비수열의 극한]]의 (3), [[power-series]]의 (1)과 (5)) [[radius-of-convergence]]의 (6)의 (i)에 의해 $\rho = 1$이고, $r = 1/2 < 1$입니다. (2)의 오른쪽은 [[sum-of-a-series]]의 (6)의 (iii)에 의해 $\sum_{n=m+1}^{\infty} (1/2)^n = (1/2)^{m+1} \cdot 2 = (1/2)^m$입니다. $2^7 = 128 > 100$이므로 $m \ge 7$이면 $(1/2)^m \le 1/128 < 1/100$입니다.
:::

:::check[계수가 모두 $1$인 멱급수에서 (2)를 $r = 1$로 쓸 수 없는 까닭은 무엇인가?]
(2)의 가정이 성립하지 않기 때문입니다. 이 멱급수의 $A$는 위로 유계이고(위 확인 질문의 답) 반지름이 $1$이므로, 모든 실수에서 수렴하는 멱급수가 아니고 $r = 1$은 $r < \rho$를 만족하지 않습니다. 실제로 $n$에서의 값이 $|c_n|\, 1^n = 1$인 수열의 급수는 항이 $0$으로 가지 않아 발산하고, $J_1 = [-1, 1]$의 점 $x = 1$에서는 멱급수 자체가 발산하므로 $J_1$ 위에서는 점별 수렴도 하지 않습니다.
:::
