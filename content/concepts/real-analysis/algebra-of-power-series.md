---
title: 멱급수의 합과 곱
title_en: Sums and Products of Power Series
aliases: [멱급수의 연산, 멱급수의 일차결합, 멱급수의 코시 곱, (x − a) 를 곱한 멱급수, sum of power series, product of power series]
kind: proposition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 중심이 같은 두 멱급수의 일차결합과 코시 곱의 계수로 정한 멱급수가, 두 멱급수가 수렴(곱은 절대수렴)하는 점에서 합의 일차결합과 곱을 합으로 가진다는 것, 그 결과의 수렴 반지름이 두 반지름의 작은 쪽 이상이라는 것(모든 실수에서 수렴하는 경우 포함), (x − a) 를 곱한 멱급수의 계수가 한 칸 옮겨지고 반지름이 같다는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, geometric-sequence-limit, linearity-of-series, sum-of-a-series, series-indexed-from-zero, cauchy-product, mertens-theorem, absolute-convergence-of-cauchy-product, power-series, radius-of-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "2.6.5절 Power series 의 Proposition 2.6.12 와 그 뒤 문단 (p.108–109), Example 2.6.13 (p.109–110); 2.6.6절 Exercises 의 Exercise 2.6.2 (p.110), Exercise 2.6.8 (p.111)"
    checked: original
    note: "출처 Proposition 2.6.12(p.108)는 반지름이 적어도 ρ > 0 인 두 convergent 멱급수와 α ∈ ℝ 에 대해 |x − x₀| < ρ 인 모든 x 에서 합, 상수배, 곱의 세 등식이 성립하고 곱의 계수는 c_n = a_0 b_n + a_1 b_{n−1} + ⋯ + a_n b_0 이라고 진술하며, 증명은 독자에게 맡긴다. 뒤 문단(p.109)은 그런 x 에서 두 급수가 수렴하므로 합과 상수배는 앞 절에서 나오고, 절대수렴하므로 메르텐스 정리로 곱을 얻으며, 그래서 결과의 반지름이 적어도 ρ 이고 더 클 수도 있다고 적는다. 이 항목은 그 증명을 썼다. 합과 상수배는 series-indexed-from-zero 의 (9)로, 곱은 cauchy-product 의 (4)(거듭제곱을 곱한 수열)와 absolute-convergence-of-cauchy-product 의 (1)로 했고, 반지름은 radius-of-convergence 의 (6)의 (ii)와 (4)로 했다. 점마다의 진술 (1), (2)를 따로 두어 반지름의 가정이 없는 꼴로도 썼다. ∞ 는 쓰지 않고 모든 실수에서 수렴하는 경우를 (3)의 (i)과 (ii)에 나누어 적었다. (4)((x − a) 를 곱한 멱급수)는 Proposition 2.6.12 에 없다. Example 2.6.13(p.109–110)의 계산 x·(Σ cₙ xⁿ) = Σ cₙ xⁿ⁺¹ 이 이것을 말없이 쓴다. 예시 '곱의 멱급수가 모든 실수에서 수렴하는 예'(1 − x 와 Σ xⁿ 의 곱)는 p.109 의 '결과의 반지름이 더 클 수 있다'는 문장과 Exercise 2.6.8 b)(p.111, 반지름이 1 인 두 멱급수의 곱의 반지름이 무한인 예를 찾으라)와 같은 쪽의 예이다(이 예의 한쪽은 다항식이다). 반례 '두 멱급수가 발산하는 점에서도 일차결합의 멱급수는 수렴할 수 있다'(계수 1 과 −1 의 합)는 Exercise 2.6.8 a)(반지름이 1 인 두 멱급수의 합의 반지름이 무한인 예)와 같은 발상이다. 확인 질문 '중심 $0$, 계수 $2^{-n}$인 멱급수와 계수가 $d_0 = 1$, $d_1 = 2$이고 나머지가 $0$인 멱급수의 곱의 멱급수의 계수와 $x = 1$에서의 합은 무엇인가?'의 곱의 계수 계산은 Example 2.6.13 이 코시 곱의 공식으로 계수를 셈하는 것과 같은 발상이다. (2)의 절대수렴은 Exercise 2.6.2(p.110)가 묻는 '두 급수가 절대수렴하면 곱의 급수도 절대수렴한다'를 멱급수에 쓴 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(항별 미분의 반지름이 같다는 A 집합 비교 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·절대수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름, 모든 실수에서 수렴하는 멱급수는 [[radius-of-convergence]]의 것이다. 코시 곱은 [[cauchy-product]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$과 $(d_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하자. 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수를 "$c$의 멱급수", 계수가 $(d_n)_{n \ge 0}$인 멱급수를 "$d$의 멱급수"라 하고, 두 멱급수의 [[radius-of-convergence]]의 집합을 $A_c$, $A_d$, 수렴 반지름을 (있으면) $\rho_c$, $\rho_d$로 쓴다. 아래의 멱급수는 모두 중심이 $a$이다.

- 실수 $k$에 대하여 계수가 $(k\,c_n + d_n)_{n \ge 0}$인 멱급수와 $(c_n - d_n)_{n \ge 0}$인 멱급수를 두 멱급수의 **일차결합의 멱급수**라 하고, 계수가 $(k\,c_n)_{n \ge 0}$인 멱급수를 $c$의 멱급수의 **상수배의 멱급수**라 한다.
- $(c_n)_{n \ge 0}$과 $(d_n)_{n \ge 0}$의 코시 곱 $e_n = \sum_{i=0}^{n} c_i d_{n-i}$를 계수로 하는 멱급수를 두 멱급수의 **곱의 멱급수**라 한다.
- $b_0 = 0$이고 자연수 $n$에서 $b_n = c_{n-1}$인 0부터 번호가 붙은 수열 $(b_n)_{n \ge 0}$을 계수로 하는 멱급수를 $c$의 멱급수에 **$(x - a)$를 곱한 멱급수**라 한다.

다음이 성립한다. 아래에서 $x$는 실수이다.

1. (일차결합과 상수배) $c$의 멱급수와 $d$의 멱급수가 $x$에서 수렴하면 일차결합의 멱급수들도 $x$에서 수렴하고
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} (k\,c_n + d_n)(x - a)^n \\
   &\quad = k \sum_{n=0}^{\infty} c_n (x - a)^n \\
   &\qquad + \sum_{n=0}^{\infty} d_n (x - a)^n
   \end{aligned}
   $$
   이며, $c_n - d_n$에 대해서도 합의 차가 합이다. $c$의 멱급수가 $x$에서 수렴하면 상수배의 멱급수도 $x$에서 수렴하고 그 합은 $k \sum_{n=0}^{\infty} c_n (x - a)^n$이다.
2. (곱) $c$의 멱급수와 $d$의 멱급수가 $x$에서 절대수렴하면 곱의 멱급수도 $x$에서 절대수렴하고
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} e_n (x - a)^n \\
   &\quad = \Bigl( \sum_{n=0}^{\infty} c_n (x - a)^n \Bigr) \\
   &\qquad \cdot \Bigl( \sum_{n=0}^{\infty} d_n (x - a)^n \Bigr)
   \end{aligned}
   $$
   이다.
3. (반지름)
   - (i) $c$의 멱급수와 $d$의 멱급수가 모두 모든 실수에서 수렴하는 멱급수이면, 일차결합의 멱급수, 상수배의 멱급수, 곱의 멱급수도 모두 모든 실수에서 수렴하는 멱급수이고, 모든 실수 $x$에서 (1)과 (2)의 등식이 성립한다.
   - (ii) $R$을 양의 실수라 하고, 두 멱급수 각각이 "$A$가 위로 유계이고 $R$이 수렴 반지름 이하"이거나 모든 실수에서 수렴하는 멱급수라 하자. 그러면 $|x - a| < R$인 모든 $x$에서 두 멱급수는 절대수렴하고 (1)과 (2)의 등식이 성립하며, 일차결합의 멱급수, 상수배의 멱급수, 곱의 멱급수는 각각 모든 실수에서 수렴하는 멱급수이거나 $A$가 위로 유계이고 수렴 반지름이 $R$ 이상이다. 특히 $0 < \rho_c$이고 $0 < \rho_d$이면 $R = \min\{\rho_c, \rho_d\}$로, 한쪽이 모든 실수에서 수렴하는 멱급수이고 다른 쪽의 반지름 $\rho$가 양수이면 $R = \rho$로 쓸 수 있다.
4. ($(x - a)$를 곱한 멱급수) $(x - a)$를 곱한 멱급수의 집합 $A$는 $A_c$와 같다. 따라서 $A_c$가 위로 유계이면 두 수렴 반지름이 같고, $c$의 멱급수가 모든 실수에서 수렴하는 멱급수인 것은 정확히 $(x - a)$를 곱한 멱급수가 그럴 때이다. 모든 실수 $x$에서, $(x - a)$를 곱한 멱급수가 $x$에서 수렴하는 것은 정확히 $c$의 멱급수가 $x$에서 수렴할 때이고, 이때
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} b_n (x - a)^n \\
   &\quad = (x - a) \sum_{n=0}^{\infty} c_n (x - a)^n
   \end{aligned}
   $$
   이다.
:::

:::english
Power series, the terms at $x$, convergence and absolute convergence at $x$ and the sum there are as in the entry on power series; the set $A$, the radius of convergence, power series converging at every real number are as in the entry on the radius of convergence. Cauchy products are as in their entry.

Let $a$ be a real number and $(c_n)_{n \ge 0}$, $(d_n)_{n \ge 0}$ sequences indexed from zero. Call the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$ "the power series of $c$" and the one with coefficients $(d_n)_{n \ge 0}$ "the power series of $d$", and write $A_c$, $A_d$ for their sets from the entry on the radius of convergence and $\rho_c$, $\rho_d$ for their radii of convergence (when they exist). All power series below have center $a$.

- For a real $k$, the power series with coefficients $(k\,c_n + d_n)_{n \ge 0}$ and with coefficients $(c_n - d_n)_{n \ge 0}$ are called **linear combination power series** of the two, and the power series with coefficients $(k\,c_n)_{n \ge 0}$ is called the **constant multiple power series** of the power series of $c$.
- The power series whose coefficients are the Cauchy product $e_n = \sum_{i=0}^{n} c_i d_{n-i}$ of $(c_n)_{n \ge 0}$ and $(d_n)_{n \ge 0}$ is called the **product power series** of the two.
- The power series whose coefficients are the sequence indexed from zero $(b_n)_{n \ge 0}$ with $b_0 = 0$ and $b_n = c_{n-1}$ for natural $n$ is called the power series of $c$ **multiplied by $(x - a)$**.

The following hold. Below, $x$ is a real number.

1. (Linear combinations and constant multiples) If the power series of $c$ and of $d$ converge at $x$, then the linear combination power series converge at $x$ and
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} (k\,c_n + d_n)(x - a)^n \\
   &\quad = k \sum_{n=0}^{\infty} c_n (x - a)^n \\
   &\qquad + \sum_{n=0}^{\infty} d_n (x - a)^n,
   \end{aligned}
   $$
   and for $c_n - d_n$ the sum is the difference of the sums. If the power series of $c$ converges at $x$, then the constant multiple power series converges at $x$ with sum $k \sum_{n=0}^{\infty} c_n (x - a)^n$.
2. (Products) If the power series of $c$ and of $d$ converge absolutely at $x$, then the product power series converges absolutely at $x$ and
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} e_n (x - a)^n \\
   &\quad = \Bigl( \sum_{n=0}^{\infty} c_n (x - a)^n \Bigr) \\
   &\qquad \cdot \Bigl( \sum_{n=0}^{\infty} d_n (x - a)^n \Bigr).
   \end{aligned}
   $$
3. (Radii)
   - (i) If the power series of $c$ and of $d$ both converge at every real number, then so do the linear combination power series, the constant multiple power series and the product power series, and the equalities of (1) and (2) hold at every real $x$.
   - (ii) Let $R$ be a positive real number, and suppose each of the two power series either has $A$ bounded above with $R$ at most its radius of convergence, or converges at every real number. Then at every $x$ with $|x - a| < R$ both power series converge absolutely and the equalities of (1) and (2) hold, and each of the linear combination, constant multiple and product power series either converges at every real number or has $A$ bounded above with radius of convergence at least $R$. In particular, one may take $R = \min\{\rho_c, \rho_d\}$ if $0 < \rho_c$ and $0 < \rho_d$, and $R = \rho$ if one of them converges at every real number and the other has positive radius $\rho$.
4. (Multiplying by $(x - a)$) The set $A$ of the power series multiplied by $(x - a)$ equals $A_c$. Hence if $A_c$ is bounded above the two radii of convergence are equal, and the power series of $c$ converges at every real number exactly when the power series multiplied by $(x - a)$ does. For every real $x$, the power series multiplied by $(x - a)$ converges at $x$ exactly when the power series of $c$ converges at $x$, and then
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} b_n (x - a)^n \\
   &\quad = (x - a) \sum_{n=0}^{\infty} c_n (x - a)^n.
   \end{aligned}
   $$
:::

## 직관

다항식은 같은 차수의 계수끼리 더하고, 곱할 때는 $(x - a)^i$와 $(x - a)^j$의 곱이 $(x - a)^{i+j}$이므로 차수의 합이 $n$인 계수의 곱들을 모아 $(x - a)^n$의 계수로 삼습니다. 멱급수도 같은 규칙을 따른다는 것이 이 항목입니다. 곱의 계수 $e_n = c_0 d_n + c_1 d_{n-1} + \cdots + c_n d_0$이 바로 [[cauchy-product|코시 곱]]이고, 수의 급수의 코시 곱에 관한 정리를 $x$에서의 항에 쓰면 됩니다. (2)가 절대수렴을 가정하는 것은 그 증명이 쓰는 코시 곱의 정리([[absolute-convergence-of-cauchy-product|코시 곱의 절대수렴]]의 (1))가 두 급수의 절대수렴을 가정하기 때문입니다. 반지름 안쪽에서는 늘 절대수렴하므로 반지름에 관한 (3)에서는 이 가정이 저절로 채워집니다.

$(x - a)$를 곱하면 모든 항의 차수가 하나씩 올라가므로 계수가 한 칸 뒤로 밀리고 상수항이 $0$이 됩니다((4)). 중심이 아닌 점에서는 $x - a$로 다시 나눌 수 있으므로 수렴하는 점은 바뀌지 않습니다.

비유하자면 두 장부를 같은 항목끼리 맞춰 더하는 일입니다. 두 장부가 모두 결산되는 날(두 급수가 수렴하는 점)에는 합친 장부도 결산되고 그 합계는 두 합계의 합입니다. 비유가 맞지 않는 곳은, 두 장부가 모두 결산되지 않는 날에도 합친 장부가 결산될 수 있다는 것입니다(아래 반례). 그래서 (3)은 결과의 반지름이 "적어도" 얼마라고만 말합니다.

## 증명

:::idea
점 $x$마다 $x$에서의 항에 수의 급수의 선형성과 코시 곱의 정리를 쓰고, 반지름은 "안쪽에서 수렴하면 반지름이 그 이상"이라는 [[radius-of-convergence|수렴 반지름]]의 판정으로 얻는다.
:::

:::hint
(2)에서 $t = x - a$로 두면 $x$에서의 항은 $c_n t^n$, $d_n t^n$이고, [[cauchy-product]]의 (4)에 의해 그 코시 곱은 $e_n t^n$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 아래에서 실수 $x$에 대하여 $t = x - a$로 쓴다. 계수의 수열들이 0부터 번호가 붙은 수열로 있다는 것은 [[series-indexed-from-zero]]의 진술에 의한다($(b_n)$은 (Z5)와 (Z1)에 의해 $n = 0$이거나 $n$이 자연수인 두 경우로 정해진다).

**1의 증명.** $x$에서의 항을 $u_n = c_n t^n$, $w_n = d_n t^n$이라 하면 (K1), (K3), (K12)의 (i)에 의해 $(k\,c_n + d_n)\, t^n = k\,u_n + w_n$이고 $(c_n - d_n)\, t^n = u_n - w_n$이다. 두 급수가 수렴하면 [[series-indexed-from-zero]]의 (9)에 의해 일차결합의 멱급수들이 $x$에서 수렴하고 등식이 성립한다. 상수배는 (9)를 $(u_n)_{n \ge 0}$과 자신에 쓰고 계수를 $k - 1$로 두면 된다. $(k - 1)\,u_n + u_n = k\,u_n$이고((K3), (K4)) 합도 $(k - 1)S + S = kS$이다.

**2의 증명.** [[cauchy-product]]의 (4)를 $(c_n)_{n \ge 0}$, $(d_n)_{n \ge 0}$과 실수 $t$에 쓰면, $n$에서의 값이 $c_n t^n$인 수열과 $d_n t^n$인 수열의 코시 곱은 $n$에서의 값이 $e_n t^n$인 수열이다. [[power-series]]의 절대수렴의 정의는 [[mertens-theorem]]의 진술의 0부터 번호가 붙은 수열의 절대수렴과 같으므로, 가정에 의해 $(c_n t^n)_{n \ge 0}$과 $(d_n t^n)_{n \ge 0}$의 급수가 절대수렴한다. [[absolute-convergence-of-cauchy-product|코시 곱의 절대수렴]]의 (1)에 의해 $(e_n t^n)_{n \ge 0}$의 급수는 절대수렴하고 합은 두 합의 곱이다.

**3의 증명.** (ii) $|x - a| < R$이라 하자. 두 멱급수 각각에 대하여, $A$가 위로 유계이고 $R$이 반지름 $\rho$ 이하이면 $|x - a| < R \le \rho$이므로(순서 성질 (1)의 (v)) [[radius-of-convergence]]의 (2)에 의해, 모든 실수에서 수렴하는 멱급수이면 같은 항목의 (4)에 의해 $x$에서 절대수렴한다. 절대수렴하면 [[power-series]]의 (4)에 의해 수렴하므로, (1)과 (2)에 의해 일차결합, 상수배, 곱의 멱급수가 모두 $x$에서 수렴하고 등식이 성립한다. 따라서 이 세 멱급수는 $|x - a| < R$인 모든 $x$에서 수렴하고, [[radius-of-convergence]]의 (6)의 (ii)를 $\rho' = R$로 쓰면 각각 모든 실수에서 수렴하는 멱급수이거나, $A$가 위로 유계이고 수렴 반지름이 $R$ 이상이다.

특히: $0 < \rho_c$, $0 < \rho_d$이면 $R = \min\{\rho_c, \rho_d\}$는 [[absolute-value|절댓값]]의 (10)에 의해 둘 가운데 하나이므로 양수이고 $R \le \rho_c$, $R \le \rho_d$이다. 한쪽이 모든 실수에서 수렴하는 멱급수이고 다른 쪽의 반지름 $\rho$가 양수이면 $R = \rho$가 가정을 만족한다.

(i) 두 멱급수가 모두 모든 실수에서 수렴하는 멱급수이면 [[radius-of-convergence]]의 (4)에 의해 모든 실수 $x$에서 절대수렴하고, (1)과 (2)에 의해 세 멱급수가 모든 실수에서 수렴하며 등식이 성립한다. 같은 항목의 (4)의 뒷부분에 의해 세 멱급수는 모든 실수에서 수렴하는 멱급수이다.

**4의 증명.** 계수의 집합이 같다는 것: $0 \le r$이라 하자. $r \in A_c$이면 $0$ 이상인 모든 $n$에서 $|c_n|\, r^n \le B$인 실수 $B$가 있고 $0 \le |c_0| \le B$이다. $|b_0|\, r^0 = 0 \le rB$이고, 자연수 $n$에서는 $m = n - 1$이 $0$ 이상인 정수이므로((Z1), (Z7)) [[power-of-a-real-number|실수의 거듭제곱]]의 정의와 순서 성질 (4)의 (iii)에 의해 $|b_n|\, r^n = r \cdot |c_m|\, r^m \le rB$이다. [[power-series]]의 (1)에 의해 $r$은 $(x - a)$를 곱한 멱급수의 집합 $A$에 든다. 거꾸로 $r$이 그 집합에 들고 모든 $n$에서 $|b_n|\, r^n \le B$라 하자. $r = 0$이면 [[radius-of-convergence]]의 (1)의 (i)에 의해 $r \in A_c$이다. $0 < r$이면 $0$ 이상인 모든 $m$에서 $|c_m|\, r^m = |b_{m+1}|\, r^{m+1} \cdot r^{-1} \le B r^{-1}$이므로(순서 성질 (6)의 (i)과 (4)의 (iii)) $r \in A_c$이다. 두 집합이 같으므로 [[radius-of-convergence]]의 정의에 의해 나머지 둘째 문장을 얻는다.

합: $x$에서 $(x - a)$를 곱한 멱급수의 항을 $v_n = b_n t^n$, $c$의 멱급수의 항을 $u_n = c_n t^n$이라 하자. $v_0 = 0$이고, 자연수 $n$에서 거듭제곱의 정의에 의해 $v_n = c_{n-1}\, t^{n-1}\, t = t\,u_{n-1}$이다. [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 쓰면 $(v_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 수열 $(v_n)_{n \ge 1}$의 급수가 수렴할 때이고 이때 $\sum_{n=0}^{\infty} v_n = \sum_{n=1}^{\infty} v_n$이다. 수열 $(v_n)_{n \ge 1}$은 $(u_n)_{n \ge 0}$을 한 칸 옮긴 수열 $(y_j)$의 $t$배이다($j$번째 항이 $t\,y_j = t\,u_{j-1}$).

- $(u_n)_{n \ge 0}$의 급수가 수렴하면 [[series-indexed-from-zero]]의 급수의 정의에 의해 $(y_j)$의 급수가 수렴하고, [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $(t\,y_j)$의 급수가 수렴하며 합은 $t \sum_{j=1}^{\infty} y_j = t \sum_{n=0}^{\infty} u_n$이다. 따라서 $(v_n)_{n \ge 0}$의 급수가 수렴하고 위의 등식이 성립한다.
- 거꾸로 $(v_n)_{n \ge 0}$의 급수가 수렴한다고 하자. $x = a$이면 [[power-series]]의 (3)에 의해 $c$의 멱급수는 $x$에서 수렴한다. $x \ne a$이면 $t \ne 0$((K12)의 (v))이고, $(t\,y_j)$의 급수가 수렴하므로 [[linearity-of-series]]의 (2)를 $t^{-1}$에 쓰면 $(y_j)$의 급수, 곧 $(u_n)_{n \ge 0}$의 급수가 수렴한다($t^{-1}(t\,y_j) = y_j$, (K2), (K4)). $\blacksquare$
:::

## 예시와 반례

:::example[곱의 멱급수가 모든 실수에서 수렴하는 예]
중심 $0$에서 $c_0 = 1$, $c_1 = -1$, $n \ge 2$에서 $c_n = 0$인 멱급수(값이 $1 - x$)와 계수가 모두 $1$인 멱급수($d_n = 1$)를 곱해 봅시다. 곱의 계수는 $e_0 = c_0 d_0 = 1$이고, 자연수 $n$에서는 $i \ge 2$인 $c_i$가 $0$이므로 $e_n = c_0 d_n + c_1 d_{n-1} = 1 - 1 = 0$입니다. 그래서 곱의 멱급수는 계수가 $1, 0, 0, \dots$이고 모든 실수에서 수렴하는 멱급수이며($0 \le r$이면 모든 $n$에서 $|e_n|\, r^n \le 1$), 모든 실수 $x$에서 합이 $1$입니다.

$c$의 멱급수는 모든 실수에서 수렴하는 멱급수이고($|c_n|\, r^n \le 1 + r$), 계수가 모두 $1$인 멱급수는 $|x| < 1$에서 절대수렴하고([[series-indexed-from-zero]]의 (13)의 (ii)) $|x| > 1$에서 항이 유계가 아니어서 발산하므로([[geometric-sequence-limit|등비수열의 극한]]의 (3), [[power-series]]의 (1)과 (5)) 반지름이 $1$입니다. (3)의 (ii)를 $R = 1$로 쓰면 $|x| < 1$에서 $(1 - x) \sum_{n=0}^{\infty} x^n = 1$입니다. (3)의 (ii)는 곱의 멱급수가 모든 실수에서 수렴하는 멱급수이거나 반지름이 $1$ 이상이라고만 말하는데, 이 예에서는 모든 실수에서 수렴하는 멱급수입니다. 그러나 $x = 2$에서는 계수가 모두 $1$인 멱급수가 발산하므로 (2)의 등식은 $x = 2$에서 아무것도 말하지 않습니다.
:::

:::example[$(x - 1)$을 곱한 멱급수]
중심 $1$, 계수 $c_n = 2^{-n}$인 멱급수는 $x$에서의 항이 $\bigl((x - 1)/2\bigr)^n$이고, $|x - 1| < 2$에서 수렴해 합이 $\bigl(1 - (x - 1)/2\bigr)^{-1} = 2(3 - x)^{-1}$입니다([[series-indexed-from-zero]]의 (13)의 (ii)). (4)에 의해 계수가 $b_0 = 0$, 자연수 $n$에서 $b_n = 2^{-(n-1)}$인 멱급수도 같은 점들에서 수렴하고, 그 합은 $(x - 1) \cdot 2(3 - x)^{-1}$입니다. 예컨대 $x = 2$에서 (4)의 오른쪽은 $1 \cdot 2 \cdot 1^{-1} = 2$이고, 왼쪽은 $0 + \sum_{n=1}^{\infty} 2^{-(n-1)} = 2$입니다([[series-indexed-from-zero]]의 (8)과 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (i)을 $a = 1$, $r = 1/2$로).
:::

:::counterexample[두 멱급수가 발산하는 점에서도 일차결합의 멱급수는 수렴할 수 있다]
중심 $0$에서 $c_n = 1$, $d_n = -1$인 두 멱급수를 봅시다. $x = 3$에서 두 멱급수의 항은 $3^n$, $-3^n$이어서 유계가 아니므로([[geometric-sequence-limit|등비수열의 극한]]의 (3)) [[power-series]]의 (1)과 (5)에 의해 둘 다 발산합니다. 그러나 일차결합의 멱급수($k = 1$)의 계수는 $c_n + d_n = 0$이므로 모든 실수에서 수렴하고 합은 $0$입니다. 그래서 (1)의 역("일차결합의 멱급수가 수렴하면 두 멱급수가 수렴한다")은 이 예에서 성립하지 않고, (3)은 결과의 반지름에 대해 아래쪽 어림만 줍니다.
:::

## 확인 질문

:::check[중심 $0$, 계수 $2^{-n}$인 멱급수와 계수가 $d_0 = 1$, $d_1 = 2$이고 나머지가 $0$인 멱급수의 곱의 멱급수의 계수와 $x = 1$에서의 합은 무엇인가?]
곱의 계수는 $e_0 = 1$이고, 자연수 $n$에서는 $d_j$가 $j \ge 2$에서 $0$이므로 [[cauchy-product]]의 (2)에 의해 $e_n = c_n d_0 + c_{n-1} d_1 = 2^{-n} + 2 \cdot 2^{-(n-1)} = 5 \cdot 2^{-n}$입니다. 계수가 $2^{-n}$인 멱급수는 $|x| < 2$에서 절대수렴하고(공비 $x/2$) $d$의 멱급수는 모든 실수에서 수렴하는 멱급수이므로, (3)의 (ii)를 $R = 2$로 쓰면 $x = 1$에서 곱의 합은 $(1 - 1/2)^{-1} \cdot (1 + 2) = 6$입니다. 계수로 직접 더해도 $1 + 5\sum_{n=1}^{\infty} 2^{-n} = 1 + 5 = 6$입니다.
:::

:::check[$c$의 멱급수에 $(x - a)$를 두 번 곱하면 계수는 어떻게 되고, $x = a$에서의 합은 무엇인가?]
(4)를 두 번 쓰면 계수는 $0, 0, c_0, c_1, c_2, \dots$, 곧 $n \ge 2$에서 $c_{n-2}$이고 $0$번째와 $1$번째가 $0$입니다. $x = a$에서는 [[power-series]]의 (3)에 의해 합이 $0$번째 계수인 $0$입니다. (4)의 등식으로도 $(a - a)^2 \sum_{n=0}^{\infty} c_n 0^n = 0$입니다. 반지름은 (4)에 의해 바뀌지 않습니다.
:::
