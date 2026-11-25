---
title: 멱급수의 항별 적분
title_en: Termwise Integration of Power Series
aliases: [멱급수의 적분, 항별 적분한 멱급수, 멱급수의 원시함수, integration of power series, termwise integrated power series]
kind: theorem
field: real-analysis
msc: ["40A30", "26A42"]
level: undergrad
summary: 계수가 (c_n) 인 멱급수를 항별 적분한 멱급수, 곧 0 번째 계수가 0 이고 n 번째 계수가 c_{n−1}/n 인 멱급수가 원래 멱급수와 같은 수렴 반지름을 갖는다는 것과, 그것이 나타내는 함수 F 가 원래 멱급수가 나타내는 함수 f 의 원시함수이고 F(a) = 0 이어서 중심 a 에서 x 까지의 f 의 적분이 Σ c_n(x − a)ⁿ⁺¹/(n + 1) 이라는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, geometric-sequence-limit, interval, real-valued-function, continuous-function, derivative, derivative-rules, continuously-differentiable, riemann-integral, oriented-integral, fundamental-theorem-of-calculus-first-form, antiderivative-and-integral-of-power, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, power-series, radius-of-convergence, power-series-converges-uniformly, termwise-differentiation-of-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Corollary 6.2.12 와 그 증명 (p.241), Example 6.2.15 (p.242); 6.2.5절 Exercises 의 Exercise 6.2.19 (p.245); 2.6.5절 Power series 의 Proposition 2.6.12 뒤 문단 (p.109), Example 2.6.13 (p.109–110); 4.3.2절 Taylor's theorem 의 Figure 4.9 앞 문단 (p.173)"
    checked: original
    note: "출처 Corollary 6.2.12(p.241)는 반지름이 0 < ρ ≤ ∞ 인 convergent 멱급수가 I 위에 나타내는 f 에 대해 ∫_a^x f = Σ_{n=1}^∞ c_{n−1}/n (x − a)ⁿ 이고 이 급수의 반지름은 적어도 ρ 라고 진술한다. 출처의 증명은 [a − r, a + r] 위의 고른 수렴으로 적분과 극한을 바꾸고 부분합을 항마다 적분한다. Exercise 6.2.19(p.245)는 항별 적분한 급수의 반지름이 정확히 ρ 임을 보이라고 하고, 앞에서는 적어도 ρ 임만 보였다고 적는다. 이 항목의 (1)은 그 연습문제의 결론이다. 이 항목은 출처와 다른 길로 증명했다. 항별 적분한 멱급수를 항별 미분하면 원래 멱급수가 된다는 것을 써서 termwise-differentiation-of-power-series 의 (1)로 반지름이 같음을, 그 (2)와 미적분의 기본정리(fundamental-theorem-of-calculus-first-form 의 (2))로 적분 공식을 얻었다. 적분과 무한 합의 순서 바꾸기는 쓰지 않는다. 출처의 c_{n−1}/n (n ≥ 1) 은 이 항목의 계수 e_n 이고, (2)는 그것을 0부터 번호가 붙은 꼴 Σ c_n (x − a)^{n+1}/(n + 1) 로 다시 쓴 것이다. 출처는 Exercise 6.2.19 에서 이 급수를 'term by term integral' 이라 부르고, Corollary 6.2.12 앞 문단(p.241)은 미분하거나 적분한 급수가 다시 멱급수라고 적는다. 예시 '계수가 $n + 1$인 멱급수를 적분해 합을 구하기'의 결론 Σ (n + 1)xⁿ = 1/(1 − x)² 은 Example 6.2.15(p.242)가 Σ xⁿ 을 미분해 Σ n xⁿ = x/(1 − x)² 를 얻는 것과 같은 대상(한 칸 옮긴 꼴)이며, 2.6.5절 Example 2.6.13(p.109–110)이 (Σ (−1)ⁿ xⁿ)² 의 코시 곱으로 1/(1 + x)² 의 계수 (−1)ⁿ(n + 1) 을 얻는 것과도 같은 대상(x 를 −x 로 바꾼 것)이다. 그 예의 F(x) = x/(1 − x) 는 4.3.2절 p.173 의 x/(1 − x)(Σ_{n≥1} xⁿ 의 부분합이 그 테일러 다항식)와 같은 함수이다. 반례 '원시함수는 $I$ 밖에서도 정해질 수 있다'는 p.109 의 '등비급수는 |x| > 1 에서 발산하지만 1/(1 − x) 는 x ≠ 1 에서 정의된다'는 문단과 p.173 의 x/(1 − x) 의 문단과 같은 발상이다. 확인 질문 '중심 $-2$, 계수 $c_0 = 5$, $c_1 = -6$이고 나머지가 $0$인 멱급수가 나타내는 함수 $f$의 $\\int_{-2}^x f$는 무엇인가?'는 p.109 의 '다항식은 계수가 충분히 큰 n 에서 0 인 멱급수'라는 문단과 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: "11.2.2절 Integration 의 Corollary 11.2.12 (p.149)"
    checked: original
    note: "출처 II 권 Corollary 11.2.12(p.149)는 [a, b] 위에서 고르게 수렴하는 적분가능한 함수들의 급수를 항마다 적분할 수 있다고 한다. 이 사이트에서는 termwise-continuity-and-integration 의 (3)이다. 이 항목은 멱급수에서 그 정리 대신 미분과 미적분의 기본정리를 썼다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(항별 미분의 반지름이 같다는 A 집합 비교 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이며, 항별 미분한 멱급수는 [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 것이다. 원시함수는 [[antiderivative-and-integral-of-power]]의 것이고, 방향 있는 적분 $\int_\alpha^\beta f$, "$\alpha$와 $\beta$ 사이에서 적분가능"과 적분 변수를 쓴 $\int_\alpha^\beta (t\text{에 대한 식})\,dt$는 [[oriented-integral]]과 [[riemann-integral]]의 것이다. 연속미분가능은 [[continuously-differentiable]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자.

**항별 적분한 멱급수.** $0$ 이상인 정수 $n$마다 실수 $e_n$을 $n = 0$이면 $e_0 = 0$, $n \ge 1$이면 $e_n = c_{n-1}\, n^{-1}$로 정한다. 이렇게 정한 0부터 번호가 붙은 수열 $(e_n)_{n \ge 0}$을 계수로 하고 중심이 $a$인 멱급수를 멱급수를 **항별 적분한 멱급수**(termwise integrated power series)라 한다.

다음이 성립한다.

1. (반지름이 같다) $0$ 이상인 모든 정수 $n$에서 $(n + 1)\,e_{n+1} = c_n$이다. 곧 항별 적분한 멱급수를 항별 미분한 멱급수는 멱급수 자신이다. 따라서 [[termwise-differentiation-of-power-series]]의 (1)에 의해, 항별 적분한 멱급수의 집합 $A$가 위로 유계인 것은 정확히 멱급수의 집합 $A$가 위로 유계일 때이고 이때 두 수렴 반지름이 같으며, 두 멱급수 가운데 하나가 모든 실수에서 수렴하는 멱급수인 것은 정확히 다른 하나가 그럴 때이고, [[radius-of-convergence]]의 (7)의 (i)의 집합 $I$는 두 멱급수에서 같다.
2. (합의 다른 꼴) 모든 실수 $x$에서, 항별 적분한 멱급수가 $x$에서 수렴하는 것은 정확히 $n$에서의 값이 $c_n (x - a)^{n+1} (n + 1)^{-1}$인 0부터 번호가 붙은 수열의 급수가 수렴할 때이고, 이때
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} e_n (x - a)^n \\
   &\quad = \sum_{n=0}^{\infty} \frac{c_n (x - a)^{n+1}}{n + 1}
   \end{aligned}
   $$
   이다.
3. (항의 적분) $n$이 $0$ 이상인 정수이면 $t$에서의 값이 $c_n (t - a)^n$인 함수 $\mathbb{R} \to \mathbb{R}$는 어느 두 실수 사이에서도 적분가능하고, 모든 실수 $x$에서
   $$
   \int_a^x c_n (t - a)^n\,dt = \frac{c_n (x - a)^{n+1}}{n + 1}
   $$
   이다.
4. (항별 적분) [[radius-of-convergence]]의 (7)의 (i)의 두 경우에, 멱급수가 $I$ 위에 나타내는 함수를 $f$, 항별 적분한 멱급수가 (1)에 의해 같은 $I$ 위에 나타내는 함수를 $F$라 하자.
   - (i) $F$는 $f$의 원시함수이고 연속미분가능하며 $F(a) = 0$이다. $f$의 원시함수 $G$는 모두 $I$의 모든 $x$에서 $G(x) = G(a) + F(x)$를 만족한다.
   - (ii) $f$는 연속함수이고 $I$의 어느 두 점 사이에서도 적분가능하며, $I$의 모든 원소 $\alpha$, $\beta$에서 $\int_\alpha^\beta f = F(\beta) - F(\alpha)$이다.
   - (iii) 특히 $I$의 모든 원소 $x$에서
     $$
     \begin{aligned}
     &\int_a^x f \\
     &\quad = \sum_{n=0}^{\infty} \frac{c_n (x - a)^{n+1}}{n + 1} \\
     &\quad = \sum_{n=0}^{\infty} \int_a^x c_n (t - a)^n\,dt
     \end{aligned}
     $$
     이다. 마지막 줄은 $n$에서의 값이 $\int_a^x c_n (t - a)^n\,dt$인 0부터 번호가 붙은 수열의 급수의 합이다.
:::

:::english
Power series, the terms at $x$, convergence at $x$ and the sum there are as in the entry on power series; the set $A$, the radius of convergence, power series converging at every real number, the set $I$ and the function a power series represents on $I$ are as in the entry on the radius of convergence; the termwise differentiated power series is as in the entry on termwise differentiation of power series. Antiderivatives are as in their entry, and oriented integrals $\int_\alpha^\beta f$, "integrable between $\alpha$ and $\beta$", and integrals with an integration variable $\int_\alpha^\beta (\text{an expression in } t)\,dt$ are as in the entries on oriented integrals and the Riemann integral. Continuous differentiability is as in its entry.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**The termwise integrated power series.** For every integer $n \ge 0$ define a real number $e_n$ by $e_0 = 0$ if $n = 0$ and $e_n = c_{n-1}\, n^{-1}$ if $n \ge 1$. The power series with center $a$ whose coefficients are the sequence indexed from zero $(e_n)_{n \ge 0}$ is called the **termwise integrated power series** of the power series.

The following hold.

1. (Equal radii) For every integer $n \ge 0$, $(n + 1)\,e_{n+1} = c_n$; that is, the termwise differentiated power series of the termwise integrated power series is the power series itself. Hence, by (1) of the entry on termwise differentiation of power series, the set $A$ of the termwise integrated power series is bounded above exactly when the set $A$ of the power series is, and then the two radii of convergence are equal; one of the two power series converges at every real number exactly when the other does; and the set $I$ of (7)(i) of the entry on the radius of convergence is the same for both.
2. (Another form of the sum) For every real $x$, the termwise integrated power series converges at $x$ exactly when the series of the sequence indexed from zero with values $c_n (x - a)^{n+1} (n + 1)^{-1}$ converges, and then
   $$
   \begin{aligned}
   &\sum_{n=0}^{\infty} e_n (x - a)^n \\
   &\quad = \sum_{n=0}^{\infty} \frac{c_n (x - a)^{n+1}}{n + 1}.
   \end{aligned}
   $$
3. (Integral of a term) If $n$ is an integer $\ge 0$, then the function $\mathbb{R} \to \mathbb{R}$ with value $c_n (t - a)^n$ at $t$ is integrable between any two real numbers, and for every real $x$,
   $$
   \int_a^x c_n (t - a)^n\,dt = \frac{c_n (x - a)^{n+1}}{n + 1}.
   $$
4. (Termwise integration) In both cases of (7)(i) of the entry on the radius of convergence, let $f$ be the function the power series represents on $I$ and $F$ the function the termwise integrated power series represents on the same $I$ (by (1)).
   - (i) $F$ is an antiderivative of $f$, $F$ is continuously differentiable, and $F(a) = 0$. Every antiderivative $G$ of $f$ satisfies $G(x) = G(a) + F(x)$ for all $x$ in $I$.
   - (ii) $f$ is continuous and integrable between any two points of $I$, and $\int_\alpha^\beta f = F(\beta) - F(\alpha)$ for all elements $\alpha$, $\beta$ of $I$.
   - (iii) In particular, for every element $x$ of $I$,
     $$
     \begin{aligned}
     &\int_a^x f \\
     &\quad = \sum_{n=0}^{\infty} \frac{c_n (x - a)^{n+1}}{n + 1} \\
     &\quad = \sum_{n=0}^{\infty} \int_a^x c_n (t - a)^n\,dt.
     \end{aligned}
     $$
     The last line is the sum of the series of the sequence indexed from zero with values $\int_a^x c_n (t - a)^n\,dt$.
:::

## 직관

$c_n (t - a)^n$의 원시함수 가운데 하나는 $c_n (t - a)^{n+1}/(n + 1)$이고, 이것은 중심 $a$에서 값이 $0$입니다. 그래서 멱급수를 항마다 적분하면 계수가 한 칸 뒤로 밀리면서 $n + 1$로 나뉜 멱급수가 나오고, 그 상수항은 $0$입니다. 이것이 항별 적분한 멱급수입니다. 이 멱급수를 다시 항별로 미분하면 나눈 $n + 1$이 곱해진 $n + 1$과 지워져 원래 멱급수로 돌아갑니다((1)).

그래서 이 항목은 새로운 극한 계산 없이 [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]에 기댑니다. 항별 미분은 반지름이 같다는 것과 도함수가 항별 미분한 멱급수라는 것을 이미 말하므로, 항별 적분한 멱급수가 나타내는 $F$는 $F' = f$를 만족하고 중심에서 $0$입니다. 미적분의 기본정리에 의해 중심에서 $x$까지의 $f$의 적분은 $F(x) - F(a) = F(x)$입니다.

비유하자면 걸음마다의 빠르기를 알 때 지나온 거리를 구하는 일입니다. 빠르기가 $f$이고, 출발점이 중심 $a$이며, 출발점에서의 거리가 $0$인 거리 함수가 $F$입니다. 비유가 맞는 곳은 "출발점에서 $0$"이라는 조건이 원시함수 가운데 하나를 고른다는 것이고((4)의 (i)), 맞지 않는 곳은 $x < a$에서 방향 있는 적분이 음수일 수 있다는 것입니다.

## 증명

:::idea
$(n + 1)\,e_{n+1} = c_n$이므로 항별 적분한 멱급수를 항별 미분하면 멱급수 자신이다. 멱급수의 항별 미분을 항별 적분한 멱급수에 쓰면 $F' = f$이고, 미적분의 기본정리가 적분을 $F(x) - F(a)$로 준다.
:::

:::hint
$F(a)$는 항별 적분한 멱급수의 $0$번째 계수 $e_0 = 0$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**항별 적분한 멱급수가 정해진다는 것.** $0$ 이상인 정수 $n$은 (Z5)에 의해 $n = 0$이거나 $0 < n$이고, 뒤의 경우 (Z1)에 의해 $1 \le n$이어서 $n$은 자연수이고 $n - 1$은 $0$ 이상인 정수이다((Z7)). 따라서 $n$마다 $e_n$이 정확히 한 경우의 식으로 정해지고($n \ge 1$이면 $n \ne 0$이므로 $n^{-1}$이 있다), [[series-indexed-from-zero]]의 진술에 의해 $(e_n)_{n \ge 0}$이 있다.

**1의 증명.** $0$ 이상인 정수 $n$에서 $n + 1$은 자연수이므로 $e_{n+1} = c_n (n + 1)^{-1}$이고, (K1), (K2), (K4)와 역수의 정의에 의해 $(n + 1)\,e_{n+1} = c_n (n + 1)(n + 1)^{-1} = c_n$이다. 곧 항별 적분한 멱급수를 항별 미분한 멱급수는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수, 곧 멱급수 자신이다(두 0부터 번호가 붙은 수열이 $0$ 이상인 모든 $n$에서 값이 같다). [[termwise-differentiation-of-power-series]]의 (1)을 항별 적분한 멱급수에 쓰면 나머지 문장을 얻는다.

**2의 증명.** 실수 $x$를 잡고 $u_n = e_n (x - a)^n$, $v_n = c_n (x - a)^{n+1} (n + 1)^{-1}$로 쓰자($n \ge 0$). $u_0 = 0 \cdot (x - a)^0 = 0$이다((K9)). [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 쓰면 $(u_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 수열 $(u_n)_{n \ge 1}$의 급수가 수렴할 때이고, 이때 $\sum_{n=0}^{\infty} u_n = 0 + \sum_{n=1}^{\infty} u_n$이다. 한편 $(v_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 항은 $v_{j-1} = c_{j-1} (x - a)^j\, j^{-1} = e_j (x - a)^j = u_j$이므로((K1)), 한 칸 옮긴 수열은 $(u_n)_{n \ge 1}$과 같다. [[series-indexed-from-zero]]의 급수의 정의에 의해 $(v_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 $(u_n)_{n \ge 1}$의 급수가 수렴할 때이고, 이때 $\sum_{n=0}^{\infty} v_n = \sum_{n=1}^{\infty} u_n$이다. 두 문장을 합치면 결론이다((K4)).

**3의 증명.** $b = c_n (n + 1)^{-1}$로 두고 $\varphi(t) = b\,(t - a)^{n+1}$로 정한 함수 $\varphi : \mathbb{R} \to \mathbb{R}$를 생각한다. $n + 1 \ge 1$이므로 [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (iv)에 의해 $\varphi$는 연속미분가능하고, 그 도함수의 $t$에서의 값은 $(n + 1)\,b\,(t - a)^n = c_n (t - a)^n$이다((K1), (K2), (K4)). 곧 $\varphi'$은 $t$에서의 값이 $c_n (t - a)^n$인 함수이다. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)를 $I = \mathbb{R}$([[interval]]의 (2))에 쓰면 $\varphi'$은 어느 두 실수 사이에서도 적분가능하고 $\int_a^x \varphi' = \varphi(x) - \varphi(a)$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $\varphi(a) = b \cdot 0^{n+1} = 0$이므로 $\int_a^x c_n (t - a)^n\,dt = b\,(x - a)^{n+1}$이다. 적분 변수를 쓴 기호는 [[oriented-integral]]의 약속대로 $\varphi'$의 방향 있는 적분이다.

**4의 증명.** (1)에 의해 항별 적분한 멱급수도 [[radius-of-convergence]]의 (7)의 (i)의 경우에 들고 같은 $I$ 위의 $F$가 있다. [[termwise-differentiation-of-power-series]]의 (2)를 항별 적분한 멱급수에 쓰면, $F$는 미분가능한 함수이고 연속미분가능하며, $F'$은 항별 적분한 멱급수를 항별 미분한 멱급수가 $I$ 위에 나타내는 함수이다. (1)에 의해 그 멱급수는 멱급수 자신이므로 $F' = f$이다. [[antiderivative-and-integral-of-power]]의 정의에 의해 $F$는 $f$의 원시함수이다. [[radius-of-convergence]]의 (7)의 (ii)에 의해 $F(a) = e_0 = 0$이다. $G$가 $f$의 원시함수이면 [[antiderivative-and-integral-of-power]]의 (1)에 의해 어떤 실수 $C$가 있어 $I$의 모든 $x$에서 $G(x) = F(x) + C$이고, $x = a$를 넣으면 $C = G(a)$이다. 이로써 (i)을 얻는다.

$F$가 연속미분가능하므로 $f = F'$은 연속함수이고, [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)에 의해 $F' = f$는 $I$의 어느 두 점 사이에서도 적분가능하며 $I$의 모든 $\alpha$, $\beta$에서 $\int_\alpha^\beta f = F(\beta) - F(\alpha)$이다. 이것이 (ii)이다.

(ii)를 $\alpha = a$, $\beta = x$에 쓰면 $\int_a^x f = F(x) - 0 = F(x)$이다. [[radius-of-convergence]]의 (7)의 (ii)에 의해 $F(x) = \sum_{n=0}^{\infty} e_n (x - a)^n$이고, (2)에 의해 이것은 (iii)의 가운데 줄의 합과 같다. (3)에 의해 $n$에서의 값이 $\int_a^x c_n (t - a)^n\,dt$인 0부터 번호가 붙은 수열은 $n$에서의 값이 $c_n (x - a)^{n+1} (n + 1)^{-1}$인 수열과 같으므로, 마지막 줄의 급수도 수렴하고 합이 같다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 $n + 1$인 멱급수를 적분해 합을 구하기]
중심 $0$, 계수 $c_n = n + 1$인 멱급수를 봅시다. 이것은 계수가 모두 $1$인 멱급수를 항별 미분한 멱급수입니다($(n + 1) \cdot 1 = n + 1$). 계수가 모두 $1$인 멱급수는 $|x| < 1$에서 수렴하고([[series-indexed-from-zero]]의 (13)의 (ii)) $|x| > 1$에서 항이 유계가 아니어서 발산하므로([[geometric-sequence-limit|등비수열의 극한]]의 (3), [[power-series]]의 (1)과 (5)) [[radius-of-convergence]]의 (6)의 (i)에 의해 반지름이 $1$이고, [[termwise-differentiation-of-power-series]]의 (1)에 의해 이 멱급수의 반지름도 $1$이며 $I = (-1, 1)$입니다. 나타내는 함수를 $f$라 합시다.

항별 적분한 멱급수의 계수는 $e_0 = 0$, 자연수 $n$에서 $e_n = n \cdot n^{-1} = 1$입니다. $|x| < 1$이면 [[series-indexed-from-zero]]의 (8)과 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)을 $m = 1$로 써서
$$
F(x) = 0 + \sum_{n=1}^{\infty} x^n = x\,(1 - x)^{-1}
$$
입니다. (4)의 (iii)에 의해 $-1 < x < 1$이면 $\int_0^x f = x\,(1 - x)^{-1}$입니다. 또 (4)의 (i)에 의해 $f = F'$이고, [[derivative-rules|미분법]]의 (6)의 몫의 법칙($I$에서 $1 - x \ne 0$)으로 $F$를 미분하면
$$
\begin{aligned}
f(x) &= \bigl(1 \cdot (1 - x) - x \cdot (-1)\bigr) \\
&\qquad \cdot \bigl((1 - x)^2\bigr)^{-1} \\
&= \bigl((1 - x)^2\bigr)^{-1}
\end{aligned}
$$
입니다. 곧 $|x| < 1$이면 $\sum_{n=0}^{\infty} (n + 1)\,x^n = \bigl((1 - x)^2\bigr)^{-1}$입니다. 예컨대 $x = 1/2$에서 합은 $4$입니다.
:::

:::counterexample[원시함수는 $I$ 밖에서도 정해질 수 있다]
위 예시의 $F(x) = x\,(1 - x)^{-1}$이라는 식은 $1$이 아닌 모든 실수에서 뜻을 가집니다. 구간 $\{x \in \mathbb{R} : x < 1\}$([[interval]]의 (2)) 위에서 $x$에서의 값이 $x\,(1 - x)^{-1}$인 함수는 [[derivative-rules|미분법]]의 (6)에 의해 미분가능하고, 그 도함수의 값은 위와 같은 계산으로 $\bigl((1 - x)^2\bigr)^{-1}$입니다. 그러나 $x = -2$에서 항별 적분한 멱급수의 항은 $n \ge 1$에서 $(-2)^n$이고, [[geometric-sequence-limit|등비수열의 극한]]의 (3)에 의해 유계가 아니므로 [[power-series]]의 (1)과 (5)에 의해 발산합니다. 원래 멱급수도 $x = -2$에서 항 $(n + 1)(-2)^n$의 절댓값이 $2^n$ 이상이어서 발산합니다. 함수로서의 원시함수는 $I$ 밖으로 이어질 수 있지만, 이 항목의 등식은 멱급수가 나타내는 함수의 정의역 $I$ 안에서만 말합니다.
:::

## 확인 질문

:::check[중심 $-2$, 계수 $c_0 = 5$, $c_1 = -6$이고 나머지가 $0$인 멱급수가 나타내는 함수 $f$의 $\int_{-2}^x f$는 무엇인가?]
모든 실수 $x$에서 $\int_{-2}^x f = 5(x + 2) - 3(x + 2)^2$입니다. $0 \le r$이면 모든 $n$에서 $|c_n|\, r^n \le 5 + 6r$이므로 모든 실수에서 수렴하는 멱급수이고 $I = \mathbb{R}$입니다. 항별 적분한 멱급수의 계수는 $e_0 = 0$, $e_1 = c_0 \cdot 1^{-1} = 5$, $e_2 = c_1 \cdot 2^{-1} = -3$이고 $n \ge 3$에서 $e_n = 0$이므로, (4)의 (iii)과 (2)에 의해 위의 값입니다(꼬리의 항이 모두 $0$인 급수의 합은 $0$입니다. [[series-indexed-from-zero]]의 (8)과 [[sum-of-a-series]]의 (6)의 (i)을 $a = 0$에). 직접 계산과도 맞습니다. $f(t) = 5 - 6(t + 2)$이고 [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (i)에 의해 $5(t + 2) - 3(t + 2)^2$의 도함수가 $f$이며 $t = -2$에서 값이 $0$입니다.
:::

:::check[위 예시의 멱급수(계수 $n + 1$, 중심 $0$)에서 $\int_0^{-1/2} f$는 무엇인가?]
$-1/3$입니다. $-1/2 \in I = (-1, 1)$이므로 (4)의 (iii)과 예시의 계산에 의해 $\int_0^{-1/2} f = F(-1/2) = (-1/2)(3/2)^{-1} = -1/3$입니다. 끝이 중심보다 작으므로 방향 있는 적분이고, $f$의 값이 양수인데 적분이 음수인 것은 [[oriented-integral]]의 정의대로 $\int_0^{-1/2} f = -\int_{-1/2}^0 f$이기 때문입니다.
:::
