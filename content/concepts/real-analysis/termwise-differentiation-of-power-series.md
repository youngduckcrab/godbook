---
title: 멱급수의 항별 미분
title_en: Termwise Differentiation of Power Series
aliases: [멱급수의 미분, 항별 미분한 멱급수, 미분의 국소성, differentiation of power series, termwise differentiated power series, locality of the derivative]
kind: theorem
field: real-analysis
msc: ["40A30", "26A24"]
level: undergrad
summary: 계수가 (c_n) 인 멱급수를 항별 미분한 멱급수, 곧 계수가 ((n + 1)c_{n+1}) 인 멱급수가 원래 멱급수와 같은 수렴 반지름을 갖는다는 것(모든 실수에서 수렴하는 경우도 함께)과, 멱급수가 나타내는 함수가 미분가능하고 그 도함수가 항별 미분한 멱급수가 나타내는 함수라는 것을 증명한다. 닫힌 부분구간의 안쪽 점에서 제한이 미분가능하면 원래 함수도 미분가능하다는 미분의 국소성도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, upper-bound-and-supremum, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, convergent-sequence-is-bounded, ratio-test-for-sequences, geometric-sequence-limit, alternating-series-test, interval, real-valued-function, cluster-point, limit-of-a-function, continuous-function, derivative, derivative-rules, continuously-differentiable, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, series-of-functions, termwise-differentiation-of-series, power-series, radius-of-convergence, power-series-converges-uniformly]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Corollary 6.2.13 과 그 증명 (p.242), Example 6.2.15 (p.242); 2.6.6절 Exercises 의 Exercise 2.6.10 (p.111); 2.6.5절 Power series 의 Example 2.6.8 (p.106–107); 4.1.1절 Definition and basic properties 의 Example 4.1.5 (p.157); 4.1.3절 Exercises 의 Exercise 4.1.4 (p.160); 3.1.4절 Limits of restrictions and one-sided limits 의 Proposition 3.1.15 (p.119)"
    checked: original
    note: "출처 Corollary 6.2.13(p.242)은 반지름이 0 < ρ ≤ ∞ 인 convergent 멱급수가 I(ρ < ∞ 이면 (a − ρ, a + ρ), ρ = ∞ 이면 ℝ) 위에 나타내는 f 가 미분가능하고 f′(x) = Σ_{n=0}^∞ (n + 1)c_{n+1}(x − a)ⁿ 이며 이 급수의 반지름이 ρ 라고 진술한다. 출처의 증명은 R = limsup |c_n|^{1/n} 과 Example 2.2.14 의 n^{1/n} → 1 로 limsup |n c_n|^{1/n} = R 을 얻어 Σ n c_n (x − a)ⁿ 의 반지름이 ρ 라 하고, '(x − a) 로 나누어' Σ (n + 1)c_{n+1}(x − a)ⁿ 의 반지름도 ρ 라고 한 뒤, 부분합의 도함수가 [a − r, a + r] 에서 고르게 수렴하고 급수가 x = a 에서 수렴하므로 Theorem 6.2.10 을 쓰고 'r < ρ 가 임의였으므로' 끝났다고 한다. 이 사이트는 상극한을 유계인 수열에만 정의했고 ∞ 를 수로 쓰지 않으므로, (1)은 limsup 과 n^{1/n} 대신 radius-of-convergence 의 집합 A 를 직접 비교해 증명했다(Ã ⊆ A 와, 0 ≤ q < 1 에서 (n + 1)qⁿ 이 유계라는 것). 출처가 말없이 쓰는 마지막 단계(닫힌 부분구간에서의 미분가능에서 I 의 점에서의 미분가능으로 넘어가는 것)는 (3) 미분의 국소성으로 진술에 올리고 limit-of-a-function 의 (7)(8)로 증명했다. (3)의 근거가 되는 극한의 국소성은 Proposition 3.1.15(3.1.4절, p.119)가 '극한은 c 에 가까운 점에만 기댄다'고 적는 것이다. Corollary 6.2.12 앞 문단(p.241)은 미분하거나 적분한 급수가 다시 멱급수이고 같은 반지름을 가짐을 보이겠다고 적는다. Exercise 2.6.10 b)(p.111)는 Σ aₙ xⁿ 의 반지름과 Σ n aₙ xⁿ 의 반지름이 같음을 n^{1/n} → 1 로 보이라고 한다. (1)과 같은 물음이다. 예시 '중심 $2$에서 $2/x$를 나타내는 멱급수의 미분'의 x = 3 에서의 합 Σ (n + 1)(−1/2)ⁿ 의 계산은 Example 6.2.15(p.242)가 Σ xⁿ 의 미분으로 Σ n xⁿ 의 합을 구하는 것과 같은 발상이다. 반례 '끝점에서는 멱급수만 수렴하고 항별 미분한 멱급수는 발산할 수 있다'의 멱급수(c_0 = 0, c_n = 1/n)는 Example 2.6.8(p.106–107)의 Σ xⁿ/n 과 같은 대상이고, x = −1 에서 수렴한다는 것도 같다. 확인 질문 '중심 $-1$, 계수 $c_0 = 1$, $c_1 = 3$, $c_2 = 0$, $c_3 = -2$이고 $n \\ge 4$에서 $c_n = 0$인 멱급수를 항별 미분한 멱급수의 계수는 무엇이고, 나타내는 함수의 도함수는 무엇인가?'는 4.1.3절 Exercise 4.1.4(p.160)가 다항식의 도함수를 구하라는 것과 같은 결론을 멱급수로 다시 얻는 물음이다. 반례 '부분구간의 끝점에서는 국소성이 성립하지 않을 수 있다'의 함수 |x| 가 0 에서 미분가능하지 않다는 것은 Example 4.1.5(p.157)와 같다."
  - ref: lebl-basic-analysis-2
    loc: "11.3.3절 Properties of analytic functions 의 Proposition 11.3.4 뒤 문단 (p.156); 11.3.2절 Convergence of power series 의 Example 11.3.3 (p.155)"
    checked: original
    note: "출처 II 권 p.156 은 I 권 Corollary 6.2.13 을 다시 적어, 실수 x 의 구간에서 수렴하는 멱급수를 항별로 미분해 같은 반지름의 급수 Σ n c_n (x − a)^{n−1} = Σ (n + 1)c_{n+1}(x − a)ⁿ 을 얻는다고 하고, 복소 계수에는 실수부와 허수부에 나누어 쓴다고 한다. 이 항목은 실수 계수만 쓴다. 예시 '중심 $2$에서 $2/x$를 나타내는 멱급수의 미분'의 멱급수는 Example 11.3.3(p.155)이 1/(1 − z) 를 1 이 아닌 점 a 를 중심으로 펼친 것과 같은 발상(일차식의 역수를 다른 중심으로 펼친 등비급수)이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(항별 미분의 반지름이 같다는 A 집합 비교 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이다. 구간과 닫힌구간은 [[interval]], 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]], 연속미분가능은 [[continuously-differentiable]], 제한은 [[real-valued-function]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자.

**항별 미분한 멱급수.** $0$ 이상인 정수 $n$마다 실수 $(n + 1)\,c_{n+1}$이 정해지므로, $n$에서의 값이 $(n + 1)\,c_{n+1}$인 0부터 번호가 붙은 수열이 있다([[series-indexed-from-zero]]의 진술). 중심이 $a$이고 계수가 이 수열인 멱급수를 멱급수를 **항별 미분한 멱급수**(termwise differentiated power series)라 한다. 실수 $x$에서 그 항은 $\bigl((n + 1)\,c_{n+1} (x - a)^n\bigr)_{n \ge 0}$이다. 이 항목에서 [[radius-of-convergence]]의 집합 $A$와 수렴 반지름 $\rho$를 항별 미분한 멱급수에서 같은 방식으로 정한 것을 $\tilde{A}$, $\tilde{\rho}$로 쓴다. 곧 $\tilde{A}$는 $0 \le r$이고 $\bigl((n + 1)\,|c_{n+1}|\, r^n\bigr)_{n \ge 0}$이 유계인 실수 $r$ 전체의 집합이다.

다음이 성립한다.

1. (반지름이 같다)
   - (i) $\tilde{A} \subseteq A$이다.
   - (ii) $A$가 위로 유계인 것은 정확히 $\tilde{A}$가 위로 유계일 때이고, 이때 $\tilde{\rho} = \rho$이다. 따라서 멱급수가 모든 실수에서 수렴하는 멱급수인 것은 정확히 항별 미분한 멱급수가 모든 실수에서 수렴하는 멱급수일 때이고, [[radius-of-convergence]]의 (7)의 (i)의 집합 $I$는 두 멱급수에서 같은 집합이다.
2. (항별 미분) [[radius-of-convergence]]의 (7)의 (i)의 두 경우, 곧 $A$가 위로 유계이고 $0 < \rho$이거나 멱급수가 모든 실수에서 수렴하는 멱급수일 때, 멱급수가 $I$ 위에 나타내는 함수를 $f$, 항별 미분한 멱급수가 (1)에 의해 같은 $I$ 위에 나타내는 함수를 $g$라 하자. 그러면 $f$는 미분가능한 함수이고 $f' = g$이다. 곧 $I$의 모든 원소 $x$에서
   $$
   f'(x) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (x - a)^n
   $$
   이다. 따라서 $f'$도 중심이 $a$인 멱급수가 같은 $I$ 위에 나타내는 함수이고, $f$는 연속미분가능하며, $f'(a) = c_1$이다. ($A$가 위로 유계이고 $\rho = 0$이면 $I$를 정하지 않으므로 이 번호는 아무것도 말하지 않는다.)
3. (미분의 국소성) $I_1$을 구간, $\varphi : I_1 \to \mathbb{R}$를 실함수, $J$를 $J \subseteq I_1$인 구간, $x_0$을 $J$의 원소라 하고, 양의 실수 $\delta$가 있어 $\{x \in I_1 : |x - x_0| < \delta\} \subseteq J$라 하자. 그러면 $\varphi$가 $x_0$에서 미분가능한 것은 정확히 제한 $\varphi|_J$가 $x_0$에서 미분가능할 때이고, 이때 $\varphi'(x_0) = (\varphi|_J)'(x_0)$이다. 특히 $p < q$인 실수 $p$, $q$에 대하여 $[p, q] \subseteq I_1$이고 $p < x_0 < q$이면, $J = [p, q]$와 $\delta = \min\{x_0 - p,\ q - x_0\}$가 이 가정을 만족한다.
:::

:::english
Power series, the terms at $x$, convergence at $x$ and the sum there are as in the entry on power series; the set $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ and the function a power series represents on $I$ are as in the entry on the radius of convergence. Intervals and closed intervals, differentiability, the derivative at a point, differentiable functions and derivatives, continuous differentiability, and restrictions are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**The termwise differentiated power series.** For every integer $n \ge 0$ the real number $(n + 1)\,c_{n+1}$ is determined, so there is a sequence indexed from zero whose value at $n$ is $(n + 1)\,c_{n+1}$. The power series with center $a$ and these coefficients is called the **termwise differentiated power series** of the power series. At a real $x$ its terms are $\bigl((n + 1)\,c_{n+1} (x - a)^n\bigr)_{n \ge 0}$. In this entry, $\tilde{A}$ and $\tilde{\rho}$ denote the set and the radius of convergence defined for the termwise differentiated power series in the same way as $A$ and $\rho$ in the entry on the radius of convergence. Thus $\tilde{A}$ is the set of all real $r \ge 0$ for which $\bigl((n + 1)\,|c_{n+1}|\, r^n\bigr)_{n \ge 0}$ is bounded.

The following hold.

1. (Equal radii)
   - (i) $\tilde{A} \subseteq A$.
   - (ii) $A$ is bounded above exactly when $\tilde{A}$ is bounded above, and then $\tilde{\rho} = \rho$. Hence the power series converges at every real number exactly when the termwise differentiated power series does, and the set $I$ of (7)(i) of the entry on the radius of convergence is the same set for both power series.
2. (Termwise differentiation) In both cases of (7)(i) of the entry on the radius of convergence, that is, when $A$ is bounded above with $0 < \rho$ or the power series converges at every real number, let $f$ be the function the power series represents on $I$ and $g$ the function the termwise differentiated power series represents on the same $I$ (by (1)). Then $f$ is a differentiable function and $f' = g$; that is, for every element $x$ of $I$,
   $$
   f'(x) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (x - a)^n.
   $$
   Hence $f'$ is again the function represented on the same $I$ by a power series with center $a$, $f$ is continuously differentiable, and $f'(a) = c_1$. (If $A$ is bounded above and $\rho = 0$, no $I$ is defined and this item says nothing.)
3. (Locality of the derivative) Let $I_1$ be an interval, $\varphi : I_1 \to \mathbb{R}$ a real-valued function, $J$ an interval with $J \subseteq I_1$, and $x_0$ an element of $J$, and suppose there is a positive real $\delta$ with $\{x \in I_1 : |x - x_0| < \delta\} \subseteq J$. Then $\varphi$ is differentiable at $x_0$ exactly when the restriction $\varphi|_J$ is differentiable at $x_0$, and then $\varphi'(x_0) = (\varphi|_J)'(x_0)$. In particular, if $p < q$ are real numbers with $[p, q] \subseteq I_1$ and $p < x_0 < q$, then $J = [p, q]$ and $\delta = \min\{x_0 - p,\ q - x_0\}$ satisfy this hypothesis.
:::

## 직관

다항식은 항마다 미분해 더하면 도함수가 됩니다. $c_n (x - a)^n$을 미분하면 $n\,c_n (x - a)^{n-1}$이고, 번호를 하나 당겨 쓰면 $(n + 1)\,c_{n+1} (x - a)^n$입니다. 이 정리는 멱급수에서도 그렇다는 것입니다. 일반 함수항 급수에서는 항별 미분이 성립하지 않을 수 있지만, 멱급수는 반지름보다 작은 $r$마다 닫힌구간 $[a - r, a + r]$ 위에서 항별 미분한 멱급수가 고르게 수렴하므로 [[termwise-differentiation-of-series|함수항 급수의 항별 미분]]을 쓸 수 있습니다.

그러려면 먼저 항별 미분한 멱급수가 같은 곳에서 수렴해야 합니다. 곱해진 $n + 1$은 커지지만 $t^n$($0 \le t < 1$)이 작아지는 것보다는 느리게 커져서, $(n + 1)\,t^n$은 유계로 남습니다. 그래서 거리 $s$에서 항이 유계이면 그보다 조금이라도 안쪽인 거리 $r$에서는 항별 미분한 멱급수의 항도 유계이고, 반지름이 줄지 않습니다. 거꾸로 $n + 1 \ge 1$이므로 반지름이 늘지도 않습니다. 이것이 (1)입니다. 반지름이 같다는 것이지, 끝점에서의 수렴까지 같다는 것은 아닙니다(아래 반례).

비유하자면 지도의 한 칸을 확대해 보는 일과 같습니다. 어느 점에서 미분가능한지는 그 점의 아주 가까운 곳만 보고 정해지므로(극한의 국소성), 그 점을 안쪽에 품은 작은 닫힌구간에서 미분가능하면 원래 함수도 그 점에서 미분가능합니다. (3)이 그것이고, 비유가 맞는 곳은 "점을 **안쪽에** 품는다"는 조건입니다. 점이 그 닫힌구간의 끝점이면 확대한 칸이 점의 한쪽만 보여 주므로 결론이 나오지 않을 수 있습니다(아래 반례). (2)는 $I$의 점마다 그 점을 안쪽에 품는 닫힌구간 $[a - r, a + r]$에서 항별 미분을 한 뒤 (3)으로 옮긴 것입니다.

## 증명

:::idea
$\tilde{A} \subseteq A$는 $n + 1 \ge 1$에서 나오고, 거꾸로 $s \in A$이고 $0 \le r < s$이면 $(n + 1)(r/s)^n$이 유계여서 $r \in \tilde{A}$이다. 미분은 $I$의 점 $x_0$마다 $x_0$을 안쪽에 품는 $[a - r, a + r]$에서 [[termwise-differentiation-of-series|함수항 급수의 항별 미분]]을 쓰고, 미분의 국소성으로 $I$ 위의 $f$로 옮긴다.
:::

:::hint
$0 < t < 1$이면 $w_n = (n + 1)\,t^n$의 이웃한 두 항의 비 $w_{n+1}/w_n = t\,(n + 2)(n + 1)^{-1}$은 $t$로 수렴한다.
:::

:::hint
(3)의 증명에서는 두 차분몫 $q^{\varphi}_{x_0}$과 $q^{\varphi|_J}_{x_0}$이 $\{x \in I_1 - \{x_0\} : |x - x_0| < \delta\}$ 위에서 같다는 것을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 순서 성질 (10)에 의해 실수의 부등식으로 써도 된다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 아래에서 $d_n = (n + 1)\,c_{n+1}$로 쓴다($n \ge 0$).

**3의 증명.** $\varphi$가 $x_0$에서 미분가능하면 [[derivative]]의 (2)에 의해 $\varphi|_J$도 $x_0$에서 미분가능하고 $(\varphi|_J)'(x_0) = \varphi'(x_0)$이다.

거꾸로 $\varphi|_J$가 $x_0$에서 미분가능하고 $L = (\varphi|_J)'(x_0)$이라 하자. 두 차분몫을 $u = q^{\varphi}_{x_0} : I_1 - \{x_0\} \to \mathbb{R}$와 $v = q^{\varphi|_J}_{x_0} : J - \{x_0\} \to \mathbb{R}$로 쓰고, $B = \{x \in I_1 - \{x_0\} : |x - x_0| < \delta\}$로 두자. $B$의 원소 $x$는 가정에 의해 $J$의 원소이고 $x \ne x_0$이므로 $B \subseteq J - \{x_0\}$이다. $x \in B$이면 $\varphi|_J(x) = \varphi(x)$이고 $\varphi|_J(x_0) = \varphi(x_0)$이므로 $u(x) = v(x)$이다. 곧 $u|_B = v|_B$이다.

[[derivative]]의 진술에 의해 $x_0$은 $I_1 - \{x_0\}$의 집적점이다. [[limit-of-a-function|함수의 극한]]의 (8)을 $S = I_1 - \{x_0\}$, $\delta_0 = \delta$에 쓰면 $x_0$은 $B$의 집적점이고, $u$가 $x_0$에서 $L$로 수렴하는 것은 정확히 $u|_B$가 $x_0$에서 $L$로 수렴할 때이다. 한편 $v$는 $x_0$에서 $L$로 수렴하고 $B \subseteq J - \{x_0\}$이며 $x_0$은 $B$의 집적점이므로, 같은 항목의 (7)에 의해 $v|_B$는 $x_0$에서 $L$로 수렴한다. $u|_B = v|_B$이므로 $u|_B$가 $x_0$에서 $L$로 수렴하고, 따라서 $u$가 $x_0$에서 $L$로 수렴한다. 곧 $\varphi$는 $x_0$에서 미분가능하고 $\varphi'(x_0) = L$이다.

마지막 문장: [[interval|구간]]의 (1)에 의해 $[p, q]$는 구간이다. $\delta = \min\{x_0 - p, q - x_0\}$는 [[absolute-value|절댓값]]의 (10)에 의해 $x_0 - p$이거나 $q - x_0$이므로 순서 성질 (3)의 (i)에 의해 양수이고, $\delta \le x_0 - p$, $\delta \le q - x_0$이다. $x \in I_1$이고 $|x - x_0| < \delta$이면 절댓값의 (8)에 의해 $x_0 - \delta < x < x_0 + \delta$이고, $p \le x_0 - \delta$, $x_0 + \delta \le q$이므로(순서 성질 (2)의 (ii)와 (3)) $p < x < q$이어서 $x \in [p, q]$이다.

**보조 사실: $0 \le t < 1$이면 0부터 번호가 붙은 수열 $\bigl((n + 1)\,t^n\bigr)_{n \ge 0}$은 유계이다.** $w_n = (n + 1)\,t^n$으로 쓰자. 순서 성질 (10)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i), 순서 성질 (4)의 (iv)에 의해 모든 $n$에서 $0 \le w_n$이다. $t = 0$이면 거듭제곱의 정의와 (2)의 (iv)에 의해 $w_0 = 1 \cdot 0^0 = 1$이고 자연수 $n$에서 $w_n = (n + 1) \cdot 0 = 0$이므로((K4), (K9)) 모든 $n$에서 $w_n \le 1$이다. $0 < t < 1$이라 하자. 자연수 $n$에서 $n + 1 \ne 0$이고 거듭제곱의 (6)의 (i)에 의해 $t^n \ne 0$이므로 (K12)의 (vi)에 의해 $w_n \ne 0$이고, $0 < w_n$이므로 절댓값의 (1)과 거듭제곱의 정의, (K2), (K12)의 (vi)에 의해
$$
\begin{aligned}
|w_{n+1}|\,|w_n|^{-1} &= (n + 2)\,t^{n+1} \\
&\qquad \cdot \bigl((n + 1)\,t^n\bigr)^{-1} \\
&= t\,\bigl(1 + (n + 1)^{-1}\bigr)
\end{aligned}
$$
이다($n + 2 = (n + 1) + 1$과 (K3)). $n$번째 항이 $(n + 1)^{-1}$인 수열은 $n$번째 항이 $n^{-1}$인 수열의 $1$-꼬리이므로 [[basic-limits]]의 (2)와 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (5)를 두 번 쓰면 비의 수열은 $t(1 + 0) = t$로 수렴한다. $t < 1$이므로 [[ratio-test-for-sequences|수열의 비 판정법]]의 (1)에 의해 수열 $(w_n)_{n \ge 1}$은 $0$으로 수렴하고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (2)에 의해 유계이며, [[power-series]]의 (1)에 의해 $(w_n)_{n \ge 0}$은 유계이다.

**1의 증명.** (i) $r \in \tilde{A}$라 하자. $0$ 이상인 모든 $n$에서 $|d_n|\, r^n \le B$인 실수 $B$가 있다. 절댓값의 (4)와 (1)에 의해 $|d_n| = (n + 1)\,|c_{n+1}|$이다. 자연수 $n$은 (Z1)에 의해 $1 \le n$이므로 $m = n - 1$은 $0$ 이상인 정수이고 $n = m + 1$이다((Z7)). $1 \le m + 1$이고 $0 \le |c_{m+1}|\, r^m$이므로 순서 성질 (4)의 (iii)에 의해 $|c_{m+1}|\, r^m \le (m + 1)\,|c_{m+1}|\, r^m = |d_m|\, r^m \le B$이고, $0 \le r$이므로 거듭제곱의 정의와 순서 성질 (4)의 (iii)에 의해
$$
|c_n|\, r^n = r \cdot |c_{m+1}|\, r^m \le r B
$$
이다. $n = 0$에서는 $|c_0|\, r^0 = |c_0|$이다. 따라서 $0$ 이상인 모든 $n$에서 $|c_n|\, r^n \le \max\{|c_0|, rB\}$이고(절댓값의 (10)과 순서 성질 (1)의 (v)), [[power-series]]의 (1)에 의해 $(|c_n|\, r^n)_{n \ge 0}$은 유계이므로 $r \in A$이다.

(가) **$0 \le u < s$이고 $s \in A$이면 $u \in \tilde{A}$이다.** $s \in A$이므로 $0$ 이상인 모든 $n$에서 $|c_n|\, s^n \le M$인 실수 $M$이 있고, $0 \le |c_0|\, s^0 \le M$이다. $0 \le u < s$이므로 $0 < s$이고 $t = u\,s^{-1}$은 순서 성질 (6)의 (i)과 (iv)에 의해 $0 \le t < 1$이며 $u = t s$이다. 보조 사실에 의해 $0$ 이상인 모든 $n$에서 $(n + 1)\,t^n \le B_t$인 실수 $B_t$가 있다. 거듭제곱의 (2)의 (iii)과 정의에 의해 $u^n = t^n s^n$이고 $s^n = s^{n+1} s^{-1}$이므로
$$
\begin{aligned}
|d_n|\, u^n &= (n + 1)\,t^n \cdot |c_{n+1}|\, s^{n+1} \\
&\qquad \cdot s^{-1} \\
&\le (n + 1)\,t^n \cdot M s^{-1} \\
&\le B_t M s^{-1}
\end{aligned}
$$
이다. 여기서 $0 \le (n + 1)\,t^n s^{-1}$과 $0 \le M s^{-1}$에 순서 성질 (4)의 (iii)을 썼다. [[power-series]]의 (1)에 의해 $(|d_n|\, u^n)_{n \ge 0}$은 유계이고 $u \in \tilde{A}$이다.

(ii) $A$가 위로 유계라 하자. (i)에 의해 $\rho$는 $\tilde{A}$의 상계이므로 $\tilde{A}$는 위로 유계이고, [[upper-bound-and-supremum]]의 상한의 정의에 의해 $\tilde{\rho} \le \rho$이다. [[radius-of-convergence]]의 (1)의 (iii)을 항별 미분한 멱급수에 쓰면 $0 \le \tilde{\rho}$이다. $\tilde{\rho} < \rho$라 가정하고 $u = (\tilde{\rho} + \rho)/2$, $s = (u + \rho)/2$로 두면 순서 성질 (8)에 의해 $\tilde{\rho} < u < s < \rho$이고 $0 \le u$이다. 같은 항목의 (1)의 (iii)에 의해 $s \in A$이므로 (가)에 의해 $u \in \tilde{A}$이고, 따라서 $u \le \tilde{\rho}$이어서 순서 성질 (1)의 (i)에 모순이다. 순서 성질 (1)의 (iii)과 (ii)에 의해 $\tilde{\rho} = \rho$이다.

$A$가 위로 유계가 아니라 하자. $0 \le u$이면 [[radius-of-convergence]]의 (1)의 (iv)에 의해 $s = u + 1 \in A$이고 $u < s$이므로 (가)에 의해 $u \in \tilde{A}$이다. $\tilde{A}$가 어떤 실수 $B$를 상계로 가진다면 $u = |B| + 1$은 $0 \le u$이므로 $\tilde{A}$의 원소이고 $B \le |B| < u$이어서(절댓값의 (6)) 모순이다. 따라서 $\tilde{A}$는 위로 유계가 아니다. 거꾸로 $\tilde{A}$가 위로 유계가 아니면, 앞 문단에 의해 $A$는 위로 유계가 아니다($A$가 위로 유계이면 $\tilde{A}$도 위로 유계이므로). 이로써 첫 문장을 얻는다. 둘째 문장의 앞부분은 이것을 [[radius-of-convergence]]의 정의로 옮긴 것이다. $I$는 두 멱급수 모두 위로 유계인 경우 같은 수 $\rho = \tilde{\rho}$로 같은 식 $\{x : |x - a| < \rho\}$로 정해지고($0 < \rho$인 것과 $0 < \tilde{\rho}$인 것도 같다), 위로 유계가 아닌 경우 둘 다 $\mathbb{R}$이다.

**2의 증명.** [[power-series-converges-uniformly|멱급수의 고른 수렴과 연속]]의 항의 사상의 열을 멱급수에 대해 $(h_n)_{n \ge 0}$, 항별 미분한 멱급수에 대해 $(k_n)_{n \ge 0}$이라 하자. $h_n(x) = c_n (x - a)^n$, $k_n(x) = d_n (x - a)^n$이다. $x_0 \in I$를 잡고, 같은 항목의 (3)의 증명처럼 $A$가 위로 유계이면 $r = (|x_0 - a| + \rho)/2$, 모든 실수에서 수렴하는 멱급수이면 $r = |x_0 - a| + 1$로 둔다. 그러면 $|x_0 - a| < r$이고 $0 < r$이며, 앞의 경우 $r < \rho$이다(순서 성질 (8), (5)의 (ii), (2)의 (ii)). $J = [a - r, a + r]$로 두면 그 항목의 (2)에 의해 $J \subseteq I$이다.

$J$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열 $(h_n|_J)_{n \ge 0}$을 생각한다([[recursion-theorem|재귀 정리]]의 (1)).

- [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (iv)와 [[continuously-differentiable]]의 (2)에 의해 각 $h_n|_J$는 연속미분가능하고, $(h_0|_J)'$은 값이 $0$인 상수함수, 자연수 $n$에서 $(h_n|_J)'(x) = n\,c_n (x - a)^{n-1}$이다. 자연수 $n$에서 $n = (n - 1) + 1$이므로 $n\,c_n = d_{n-1}$이고, $(h_n|_J)' = k_{n-1}|_J$이다.
- (1)에 의해 항별 미분한 멱급수는 $A$가 위로 유계이면 반지름이 $\rho$이고, 아니면 모든 실수에서 수렴하는 멱급수이다. [[power-series-converges-uniformly]]의 (2)를 항별 미분한 멱급수와 이 $r$에 쓰면 $(k_n|_J)_{n \ge 0}$의 함수항 급수는 $g|_J$로 고르게 수렴한다(그 항목의 (2)의 합 함수의 값은 $\sum_{n=0}^{\infty} d_n (x - a)^n = g(x)$이다). [[series-of-functions|함수항 급수]]의 (6)의 정의에 의해, $j$번째 항이 $k_{j-1}|_J$인 사상의 열, 곧 $n$번째 항이 $(h_n|_J)'$인 사상의 열의 함수항 급수가 $g|_J$로 고르게 수렴한다. 같은 항목의 (6)의 (v)에 의해 도함수들의 0부터 번호가 붙은 사상의 열 $\bigl((h_n|_J)'\bigr)_{n \ge 0}$의 함수항 급수도 고르게 수렴하고, 모든 $x \in J$에서 그 합은 $0 + g(x) = g(x)$이다((K4)).
- [[power-series]]의 (3)에 의해 $(h_n(a))_{n \ge 0}$의 급수는 수렴한다. $a \in J$이다.

[[termwise-differentiation-of-series|함수항 급수의 항별 미분]]의 (4)를 닫힌구간 $J$와 점 $a$에 쓰면, $(h_n|_J)_{n \ge 0}$의 함수항 급수의 합 함수 $s$는 연속미분가능하고 모든 $x \in J$에서 $s'(x) = g(x)$이다. [[power-series-converges-uniformly]]의 (1)에 의해 $s$의 $x$에서의 값은 $\sum_{n=0}^{\infty} c_n (x - a)^n = f(x)$이므로 $s = f|_J$이다. 따라서 $f|_J$는 $x_0$에서 미분가능하고 $(f|_J)'(x_0) = g(x_0)$이다.

$\delta = r - |x_0 - a|$는 순서 성질 (3)의 (i)에 의해 양수이고, $x \in I$, $|x - x_0| < \delta$이면 [[triangle-inequality|삼각부등식]]의 (4)와 순서 성질 (2)의 (iv)에 의해 $|x - a| \le |x - x_0| + |x_0 - a| < r$이므로 절댓값의 (8)에 의해 $x \in J$이다. (3)을 $I_1 = I$, $\varphi = f$에 쓰면 $f$는 $x_0$에서 미분가능하고 $f'(x_0) = g(x_0)$이다. $x_0$은 $I$의 아무 원소였으므로 $f$는 미분가능한 함수이고 $f' = g$이다.

$g$는 [[power-series-converges-uniformly]]의 (3)을 항별 미분한 멱급수에 쓰면 연속함수이므로 $f$는 연속미분가능하다. [[radius-of-convergence]]의 (7)의 (ii)를 항별 미분한 멱급수에 쓰면 $g(a) = d_0 = 1 \cdot c_1 = c_1$이다((K4)). $\blacksquare$
:::

## 예시와 반례

:::example[중심 $2$에서 $2/x$를 나타내는 멱급수의 미분]
중심 $a = 2$, 계수 $c_n = (-1/2)^n$인 멱급수를 봅시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $x$에서의 항은 $y^n$이고 $y = -(x - 2)/2$입니다. $|x - 2| < 2$이면 $|y| < 1$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 수렴하고 합은 $(1 - y)^{-1} = \bigl(1 + (x - 2)/2\bigr)^{-1} = 2x^{-1}$입니다. $|x - 2| > 2$이면 $|y| > 1$이어서 [[geometric-sequence-limit|등비수열의 극한]]의 (3)과 [[power-series]]의 (1)과 (5)에 의해 발산합니다. [[radius-of-convergence]]의 (6)의 (i)에 의해 $\rho = 2$이고 $I = (0, 4)$이며, 나타내는 함수는 $f(x) = 2x^{-1}$입니다.

$f$를 직접 미분하면 [[derivative-rules|미분법]]의 (6)과 [[derivative]]의 (1)(항등함수의 미분계수 $1$)에 의해 $f'(x) = -2\,(x^2)^{-1}$입니다. (2)에 의해서는
$$
\begin{aligned}
f'(x) &= \sum_{n=0}^{\infty} (n + 1)\Bigl(-\frac{1}{2}\Bigr)^{n+1} \\
&\qquad \cdot (x - 2)^n
\end{aligned}
$$
입니다. $x = 3$을 넣으면 $f'(3) = -2/9$이므로 $\sum_{n=0}^{\infty} (n + 1)(-1/2)^{n+1} = -2/9$입니다. 미분으로 이 급수의 합을 얻은 것입니다. (1)에 의해 항별 미분한 멱급수도 $(0, 4)$에서 수렴하므로 이 등식의 왼쪽은 수렴하는 급수의 합입니다.
:::

:::counterexample[끝점에서는 멱급수만 수렴하고 항별 미분한 멱급수는 발산할 수 있다]
중심 $0$, 계수 $c_0 = 0$, 자연수 $n$에서 $c_n = n^{-1}$인 멱급수를 봅시다. 항별 미분한 멱급수의 계수는 $(n + 1)\,c_{n+1} = (n + 1)(n + 1)^{-1} = 1$이므로 모든 계수가 $1$입니다. 계수가 모두 $1$인 멱급수는 $|x| < 1$에서 수렴하고([[series-indexed-from-zero]]의 (13)의 (ii)) $|x| > 1$에서 항이 유계가 아니어서 발산하므로([[geometric-sequence-limit|등비수열의 극한]]의 (3), [[power-series]]의 (1)과 (5)) [[radius-of-convergence]]의 (6)의 (i)에 의해 반지름이 $1$이고, (1)에 의해 원래 멱급수의 반지름도 $1$입니다.

끝점 $x = -1$에서는 다릅니다. 원래 멱급수의 항은 $n = 0$에서 $0$, 자연수 $n$에서 $(-1)^n n^{-1}$이고, [[alternating-series-test|교대급수 판정법]]의 (4)와 [[series-indexed-from-zero]]의 (8)에 의해 수렴합니다. 항별 미분한 멱급수의 항은 $(-1)^n$인데, [[power-of-a-real-number]]의 (5)에 의해 이 수열은 [[basic-limits]]의 (3)의 발산하는 수열이어서 $0$으로 수렴하지 않으므로, [[power-series]]의 (5)에 의해 항별 미분한 멱급수는 $x = -1$에서 발산합니다. (1)이 말하는 것은 반지름이 같다는 것이고, 수렴하는 점의 집합이 같다는 것이 아닙니다.
:::

:::counterexample[부분구간의 끝점에서는 국소성이 성립하지 않을 수 있다]
$\varphi(x) = |x|$로 정한 $\varphi : \mathbb{R} \to \mathbb{R}$와 $J = [0, 2]$, $x_0 = 0$을 봅시다. $J$의 원소 $x$에서는 [[absolute-value|절댓값]]의 (1)에 의해 $\varphi|_J(x) = x$이므로 $\varphi|_J$는 $J$ 위의 항등함수이고, [[derivative]]의 (1)에 의해 $0$에서 미분가능하며 $(\varphi|_J)'(0) = 1$입니다. 그러나 [[derivative]]의 (3)을 $r = 1$로 쓰면 $\varphi$는 $0$에서 미분가능하지 않습니다. (3)의 가정이 깨진 경우입니다. 어떤 양의 $\delta$를 잡아도 $x = -\delta/2$는 $|x - 0| < \delta$이지만 $J$의 원소가 아닙니다. 그래서 (2)의 증명은 $x_0$을 닫힌구간 $[a - r, a + r]$의 **안쪽**에 두도록 $r$을 $|x_0 - a|$보다 크게 잡습니다.
:::

## 확인 질문

:::check[중심 $-1$, 계수 $c_0 = 1$, $c_1 = 3$, $c_2 = 0$, $c_3 = -2$이고 $n \ge 4$에서 $c_n = 0$인 멱급수를 항별 미분한 멱급수의 계수는 무엇이고, 나타내는 함수의 도함수는 무엇인가?]
항별 미분한 멱급수의 계수는 $1 \cdot c_1 = 3$, $2 c_2 = 0$, $3 c_3 = -6$이고 $n \ge 3$에서 $(n + 1)\,c_{n+1} = 0$입니다. $0 \le r$이면 $n \ge 4$에서 $|c_n|\, r^n = 0$이므로 모든 $n$에서 $|c_n|\, r^n \le 1 + 3r + 2r^3$이어서 원래 멱급수는 모든 실수에서 수렴하는 멱급수이고 $I = \mathbb{R}$입니다. (2)에 의해 모든 실수 $x$에서 $f'(x) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (x + 1)^n = 3 - 6(x + 1)^2$입니다. 마지막 등식은 [[series-indexed-from-zero]]의 (8)을 $K = 2$로 쓰고, $n \ge 3$에서 정해진 항이 모두 $0$인 급수의 합이 $0$이라는 것([[sum-of-a-series]]의 (6)의 (i)을 $a = 0$에)을 쓴 것입니다. [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (i)로 다항식 $1 + 3(x + 1) - 2(x + 1)^3$을 직접 미분한 것과 같습니다.
:::

:::check[중심 $1$, 계수 $3^{-n}$인 멱급수가 나타내는 함수 $f$의 $1$에서의 미분계수는 무엇인가?]
$1/3$입니다. 이 멱급수는 $|x - 1| < 3$에서 수렴하고 $|x - 1| > 3$에서 발산하므로([[series-indexed-from-zero]]의 (13)의 (ii), [[geometric-sequence-limit|등비수열의 극한]]의 (3), [[power-series]]의 (1)과 (5)) 반지름이 $3$이고, (2)에 의해 $f'(1) = c_1 = 3^{-1}$입니다. 직접 계산과도 맞습니다. $I = (-2, 4)$에서 $f(x) = 3(4 - x)^{-1}$이고 [[derivative-rules|미분법]]의 (6)에 의해 $f'(x) = 3\bigl((4 - x)^2\bigr)^{-1}$이므로 $f'(1) = 3/9 = 1/3$입니다.
:::
