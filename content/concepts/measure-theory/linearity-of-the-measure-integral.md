---
title: 적분의 선형성과 단조성
title_en: Linearity and Monotonicity of the Integral
aliases: [μ-적분의 선형성, 적분의 선형성 (측도), 적분의 단조성, 적분가능한 함수의 단조 수렴, linearity of the integral (measure spaces), monotonicity of the integral]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: μ-적분가능한 함수의 상수배, 합과 차, 유한 합이 μ-적분가능하고 적분이 선형이라는 것, μ-거의 어디서나의 부등식에 대한 단조성, 차의 적분의 어림, 서로소인 두 집합 위의 적분, 모든 가측집합 위의 적분으로 μ-거의 어디서나의 부등식과 같음을 판정하는 것, 적분가능한 함수의 단조열의 적분의 극한을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, mathematical-induction, absolute-value, positive-and-negative-parts, finite-sum-of-reals, sequence, limit-of-sequence, limit-of-sum-and-product, convergent-sequence-is-bounded, power-set, sigma-algebra, measurable-function, indicator-function, finite-set, number-of-elements-is-unique, natural-numbers-are-infinite, archimedean-property, extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals, additivity-of-nonnegative-integral, markov-inequality-and-null-integral, integrable-function-for-a-measure]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.1절 Integrable Functions, Theorem 6.7 과 그 증명 (p.167–168), Corollary 6.8 과 그 증명, 뒤 문단 (p.168–169); 5.3절 Convergence theorems, Corollary 5.19 와 그 앞 문단 (p.138–139); 6.4절 Exercise 6.3 (p.185), Exercise 6.9 (p.186); 6.2절 Example 6.10 (p.170–171)
    checked: original
    note: "(1)(2)는 출처 Theorem 6.7(p.167–168)이다. 출처는 (a) 상수배를 (γf)⁺, (γf)⁻ 를 γ 의 부호로 나누어 쓰는 계산으로, (b) 합을 f + g = (f⁺ + g⁺) − (f⁻ + g⁻) 와 Proposition 6.4 로 증명한다. 이 항목은 (2)를 출처와 같은 분해와 μ-적분가능한 함수와 그 적분의 (4)(출처 Proposition 6.4 의 실숫값판)로 증명하고, (1)도 같은 (4)로 cf = cf⁺ − cf⁻ 꼴에서 증명했다. 출처는 X 위에서만 증명하고 A 위의 경우는 쉽게 따른다고 적는데, 이 항목은 A 위에서 바로 증명했다. 이 항목은 차와 (3)의 유한 합을 (1)(2)에서 끌어냈다. (4)의 μ-거의 어디서나인 꼴의 단조성은 출처 Corollary 6.8 (b) 의 ⇐ 쪽(p.169)과 같은 사실이다. (6)은 출처 Corollary 6.8 (a)(p.168)이고 출처는 χ_{A∪B} = χ_A + χ_B 와 Theorem 6.7 로, 이 항목은 양의 부분과 음의 부분에 0 이상인 함수의 적분의 덧셈을 써서 증명했다. (7)은 출처 Corollary 6.8 (b)(c)(p.168–169)이다. 출처는 (b) 의 ⇒ 쪽을 N_k = {f − g > 1/k} 의 증가열과 µ(N_k) = 0 을 보인 뒤 µ(N) = 0 이라 결론짓는 길로 증명하고, 이 항목은 (f − g)χ_D(D = {g < f})의 적분이 0 이라는 것과 마르코프 부등식 항목의 (3)으로 증명했다. 출처는 그 뒤 문단(p.169)에서 (c) 의 특별한 경우 '모든 A 에서 ∫_A f dµ = 0 인 것은 f = 0 µ-a.e. 일 때'를 적고, Exercise 6.3(p.185)이 그것을 다른 길로 증명하라는 문제이다. (8)의 (iii)은 출처 Corollary 5.19(p.139, 0 이상인 가측함수의 감소열에서 ∫_A f₁ dµ < +∞ 이면 극한과 적분을 바꿀 수 있다)의 실숫값판이고, 출처의 증명도 f₁ − f_k 에 단조 수렴 정리를 쓴다. 출처는 그 앞 문단(p.138)에서 감소열에 대한 단조 수렴 정리의 유사판은 일반적으로 참이 아니라고 적고 Exercise 5.27 을 가리킨다. (8)의 (i)(ii)는 같은 논법을 μ-적분가능한 함수의 단조열에 쓴 것이다. 출처 Exercise 6.9(p.186)는 h = f + g µ-a.e. 이면 h 가 적분가능하고 ∫h = ∫f + ∫g 라는 문제로, 이 항목의 (2)와 μ-적분가능한 함수와 그 적분의 (7)을 함께 쓴 것과 같은 사실이다. 반례 '적분이 아래로 유계가 아닌 감소열'은 출처 Example 6.10(p.170–171, 르베그 측도 위에서 적분이 2k 인 증가열 χ_{(−k, k)} 의 극한 χ_ℝ 이 적분가능하지 않다)의 부호를 바꾼 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(|∫f| = ∫|f| 의 등호 조건, 반례와 출처 Example 6.6 대조, 지배 수렴의 예외 집합 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도가 0 인 집합, $\mu$-거의 어디서나는 [[measure|측도와 측도공간]]과 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $f + g$, $f - g$, $cf$, $|f|$, 집합 $\{f < g\}$와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, 실숫값 함수열과 그 유한 합 $\sum_{k=1}^{N} f_k$, 곧 $x$에서의 값이 $\sum_{k=1}^{N} f_k(x)$인 함수는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]와 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 것이다. $\mu$-적분가능과 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이다. 실수의 유한 합 $\sum_{k=1}^{N}$은 [[finite-sum-of-reals|실수의 유한 합]]의 것이고, 수열의 수렴, 위로 유계와 아래로 유계는 [[limit-of-sequence|수열의 극한]]과 [[sequence|수열]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $f$, $g$는 $X$ 위의 $\mu$-적분가능한 실숫값 함수이며, $A$, $E$는 $\mathcal{M}$의 원소이다.

1. (상수배) $c$가 실수이면 $cf$는 $\mu$-적분가능하고 $\int_A cf\,d\mu = c\int_A f\,d\mu$이다.
2. (합과 차) $f + g$와 $f - g$는 $\mu$-적분가능하고
   $$
   \begin{aligned}
   \int_A (f + g)\,d\mu &= \int_A f\,d\mu \\
   &\quad + \int_A g\,d\mu, \\
   \int_A (f - g)\,d\mu &= \int_A f\,d\mu \\
   &\quad - \int_A g\,d\mu
   \end{aligned}
   $$
   이다.
3. (유한 합) $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $f_k$가 $\mu$-적분가능하면, $0$ 이상인 모든 정수 $N$에서 $\sum_{k=1}^{N} f_k$는 $\mu$-적분가능하고
   $$
   \int_A \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int_A f_k\,d\mu
   $$
   이다. 오른쪽은 $k$번째 항이 $\int_A f_k\,d\mu$인 실수의 유한 합이다. $N = 0$이면 두 쪽이 $0$이다.
4. (단조성) $f \le g$가 $\mu$-거의 어디서나 성립하면 $\int_A f\,d\mu \le \int_A g\,d\mu$이다. 특히 모든 $x \in X$에서 $f(x) \le g(x)$이면 그렇다.
5. (차의 적분의 어림)
   $$
   \begin{aligned}
   &\left|\int_A f\,d\mu - \int_A g\,d\mu\right| \\
   &\quad \le \int_A |f - g|\,d\mu
   \end{aligned}
   $$
   이다. 오른쪽은 $\mu$-적분가능한 함수 $|f - g|$의 적분이고 실수이다.
6. (서로소인 두 집합) $A \cap E = \emptyset$이면 $\int_{A \cup E} f\,d\mu = \int_A f\,d\mu + \int_E f\,d\mu$이다.
7. (모든 가측집합 위의 적분으로 비교하기)
   - (i) 모든 $B \in \mathcal{M}$에서 $\int_B f\,d\mu \le \int_B g\,d\mu$인 것은 정확히 $f \le g$가 $\mu$-거의 어디서나 성립할 때이다.
   - (ii) 모든 $B \in \mathcal{M}$에서 $\int_B f\,d\mu = \int_B g\,d\mu$인 것은 정확히 $f = g$가 $\mu$-거의 어디서나 성립할 때이다.
8. (단조열의 적분) $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $f_k$가 $\mu$-적분가능하며, 모든 $x \in X$에서 실수열 $(f_k(x))$가 수렴한다고 하자. $x$에서의 값이 $\lim_{k \to \infty} f_k(x)$인 함수를 $h$라 하자.
   - (i) (증가열) 모든 $x \in X$와 자연수 $k$에서 $f_k(x) \le f_{k+1}(x)$이면, $h$가 $\mu$-적분가능인 것은 정확히 실수열 $(\int f_k\,d\mu)$가 위로 유계일 때이다. 이때 모든 $B \in \mathcal{M}$에서 실수열 $(\int_B f_k\,d\mu)$는 $\int_B h\,d\mu$로 수렴한다.
   - (ii) (감소열) 모든 $x \in X$와 자연수 $k$에서 $f_{k+1}(x) \le f_k(x)$이면, $h$가 $\mu$-적분가능인 것은 정확히 실수열 $(\int f_k\,d\mu)$가 아래로 유계일 때이다. 이때 모든 $B \in \mathcal{M}$에서 실수열 $(\int_B f_k\,d\mu)$는 $\int_B h\,d\mu$로 수렴한다.
   - (iii) (0 이상인 감소열) $(u_k)$가 $X$ 위의 실숫값 함수열이고, 모든 $u_k$가 가측이며 모든 값이 $0$ 이상이고, $u_1$이 $\mu$-적분가능하며, 모든 $x \in X$와 자연수 $k$에서 $u_{k+1}(x) \le u_k(x)$라 하자. 그러면 모든 $x$에서 $(u_k(x))$는 수렴하고, 모든 $u_k$와 $x$에서의 값이 $\lim_{k \to \infty} u_k(x)$인 함수 $u$는 $\mu$-적분가능하며, 모든 $B \in \mathcal{M}$에서 실수열 $(\int_B u_k\,d\mu)$는 $\int_B u\,d\mu$로 수렴한다.
:::

:::english
Measure spaces, sets of measure zero and $\mu$-almost everywhere are as in the entries on measures and on sets of measure zero. Real-valued functions on $X$ and the operations $f + g$, $f - g$, $cf$, $|f|$, the set $\{f < g\}$ and $\mathcal{M}$-measurability are as in the entry on measurable functions; sequences of real-valued functions and their finite sums $\sum_{k=1}^{N} f_k$, that is, the function with value $\sum_{k=1}^{N} f_k(x)$ at $x$, are as in the entries on $[0, \infty]$-valued measurable functions and on operations on measurable functions. $\mu$-integrability and the integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on $\mu$-integrable functions. Finite sums of reals $\sum_{k=1}^{N}$ are as in the entry on finite sums of reals, and convergence of sequences and bounded above and bounded below are as in the entries on limits of sequences and on sequences. Below, $(X, \mathcal{M}, \mu)$ is a measure space, $f$, $g$ are $\mu$-integrable real-valued functions on $X$, and $A$, $E$ are elements of $\mathcal{M}$.

1. (Scalar multiples) If $c$ is a real number, then $cf$ is $\mu$-integrable and $\int_A cf\,d\mu = c\int_A f\,d\mu$.
2. (Sums and differences) $f + g$ and $f - g$ are $\mu$-integrable and
   $$
   \begin{aligned}
   \int_A (f + g)\,d\mu &= \int_A f\,d\mu + \int_A g\,d\mu, \\
   \int_A (f - g)\,d\mu &= \int_A f\,d\mu - \int_A g\,d\mu.
   \end{aligned}
   $$
3. (Finite sums) If $(f_k)$ is a sequence of real-valued functions on $X$ with every $f_k$ $\mu$-integrable, then for every integer $N \ge 0$ the function $\sum_{k=1}^{N} f_k$ is $\mu$-integrable and
   $$
   \int_A \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int_A f_k\,d\mu.
   $$
   The right side is the finite sum of reals whose $k$-th term is $\int_A f_k\,d\mu$. If $N = 0$, both sides are $0$.
4. (Monotonicity) If $f \le g$ holds $\mu$-almost everywhere, then $\int_A f\,d\mu \le \int_A g\,d\mu$. In particular this holds if $f(x) \le g(x)$ for all $x \in X$.
5. (Estimate for the difference of integrals)
   $$
   \begin{aligned}
   &\left|\int_A f\,d\mu - \int_A g\,d\mu\right| \\
   &\quad \le \int_A |f - g|\,d\mu.
   \end{aligned}
   $$
   The right side is the integral of the $\mu$-integrable function $|f - g|$ and is a real number.
6. (Two disjoint sets) If $A \cap E = \emptyset$, then $\int_{A \cup E} f\,d\mu = \int_A f\,d\mu + \int_E f\,d\mu$.
7. (Comparison through integrals over all measurable sets)
   - (i) $\int_B f\,d\mu \le \int_B g\,d\mu$ for all $B \in \mathcal{M}$ exactly when $f \le g$ holds $\mu$-almost everywhere.
   - (ii) $\int_B f\,d\mu = \int_B g\,d\mu$ for all $B \in \mathcal{M}$ exactly when $f = g$ holds $\mu$-almost everywhere.
8. (Integrals of monotone sequences) Let $(f_k)$ be a sequence of real-valued functions on $X$ with every $f_k$ $\mu$-integrable, and suppose the real sequence $(f_k(x))$ converges for every $x \in X$. Let $h$ be the function with value $\lim_{k \to \infty} f_k(x)$ at $x$.
   - (i) (Increasing sequences) If $f_k(x) \le f_{k+1}(x)$ for all $x \in X$ and natural numbers $k$, then $h$ is $\mu$-integrable exactly when the real sequence $(\int f_k\,d\mu)$ is bounded above. In that case, for every $B \in \mathcal{M}$ the real sequence $(\int_B f_k\,d\mu)$ converges to $\int_B h\,d\mu$.
   - (ii) (Decreasing sequences) If $f_{k+1}(x) \le f_k(x)$ for all $x \in X$ and natural numbers $k$, then $h$ is $\mu$-integrable exactly when the real sequence $(\int f_k\,d\mu)$ is bounded below. In that case, for every $B \in \mathcal{M}$ the real sequence $(\int_B f_k\,d\mu)$ converges to $\int_B h\,d\mu$.
   - (iii) (Decreasing nonnegative sequences) Let $(u_k)$ be a sequence of real-valued functions on $X$ with every $u_k$ measurable with all values at least $0$, with $u_1$ $\mu$-integrable, and with $u_{k+1}(x) \le u_k(x)$ for all $x \in X$ and natural numbers $k$. Then $(u_k(x))$ converges for every $x$, every $u_k$ and the function $u$ with value $\lim_{k \to \infty} u_k(x)$ at $x$ are $\mu$-integrable, and for every $B \in \mathcal{M}$ the real sequence $(\int_B u_k\,d\mu)$ converges to $\int_B u\,d\mu$.
:::

## 직관

적분은 함수에 수를 하나 주는 대응이고, 이 항목은 그 대응이 더하기와 실수배를 지키고(선형성) 큰 함수에 큰 수를 준다는 것(단조성)입니다. 4단원에서는 $0$ 이상인 함수만 있어서 뺄셈을 쓸 수 없었지만, $\mu$-적분가능한 함수의 적분은 실수이므로 이제 차도 마음대로 쓸 수 있습니다. 증명의 열쇠는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (4)입니다. $f + g$의 양의 부분과 음의 부분은 $f^+ + g^+$, $f^- + g^-$와 다를 수 있지만, $f + g$를 이 두 $0$ 이상인 함수의 차로 쓸 수만 있으면 적분은 그 차로 구해집니다.

(7)은 적분이 함수를 얼마나 알아보는지를 말합니다. 한 집합 위의 적분 하나만으로는 함수를 가리지 못할 수 있지만(아래 확인 질문), 모든 가측집합 위의 적분을 알면 함수는 측도가 0 인 집합 밖에서 정해집니다. 증명에서는 $f$가 $g$보다 큰 곳 $D = \{g < f\}$ 하나만 봅니다. 그 위에서 $f - g$는 양수인데 적분이 $0$ 이하이므로, [[markov-inequality-and-null-integral|마르코프 부등식 항목]]의 (3)에 의해 $D$의 측도가 $0$입니다.

(8)은 단조 수렴 정리를 부호가 바뀌는 함수로 옮긴 것입니다. 증가열이면 $f_k - f_1$이 $0$ 이상이고 증가하므로 4단원의 단조 수렴 정리를 쓸 수 있습니다. 극한 $h$의 적분가능성은 적분들이 끝없이 커지지 않는다는 것과 같습니다. 감소열은 부호를 바꾸면 증가열이 되고, 이때는 적분들이 끝없이 작아지지 않아야 합니다(아래 반례). 4단원의 단조 수렴 정리의 반례처럼 $0$ 이상인 감소열에서 적분이 모두 $\infty$이면 극한과 적분을 바꿀 수 없을 수 있는데, (8)의 (iii)은 첫 함수가 $\mu$-적분가능하면 바꿀 수 있다는 것입니다.

## 증명

:::idea
$f + g = (f^+ + g^+) - (f^- + g^-)$처럼 $0$ 이상인 두 함수의 차로 쓰고 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (4)를 쓴다. 단조열은 첫 함수와의 차에 단조 수렴 정리를 쓴다.
:::

:::hint
(7)의 (i)에서 $D = \{g < f\}$ 위의 적분 $\int_D (f - g)\,d\mu$를 두 가지로 따져 보자. 가정은 이것이 $0$ 이하라고 하고, $(f - g)\chi_D$의 값은 모두 $0$ 이상이다.
:::

:::hint
(8)의 (i)에서 $f_k - f_1$은 $0$ 이상이고 증가하며 $h - f_1$로 다가간다. 그 적분은 $\int f_k\,d\mu - \int f_1\,d\mu$이고, 단조증가인 실수열의 $[0, \infty]$의 극한이 실수인 것은 그 열이 위로 유계일 때이다.
:::

:::proof
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 0 이상인 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로 인용한다. 모든 값이 $0$ 이상인 실숫값 함수는 적분가능성 항목의 맨 위의 약속대로 $[0, \infty]$ 값 함수로도 보고, 그 합과 $0$ 이상인 실수배는 두 뜻으로 읽어도 점마다 같은 값이다. 적분가능성 항목의 (2)에 의해, $\mu$-적분가능하고 모든 값이 $0$ 이상인 함수의 적분은 두 뜻으로 읽어도 같은 실수이다.

**(1)** [[measurable-function|가측함수]]의 (5)에 의해 $cf$, $f^+$, $f^-$는 가측이고 모든 $x$에서 $f(x) = f^+(x) - f^-(x)$, $f^+(x) \ge 0$, $f^-(x) \ge 0$이다.

$c \ge 0$이라 하자. 모든 $x$에서 $cf(x) = cf^+(x) - cf^-(x)$이고, [[order-properties-of-reals]]의 (4)의 (iv)에 의해 $cf^+$와 $cf^-$의 값은 $0$ 이상이며, 가측함수 항목의 (5)에 의해 가측이다. 가측함수의 적분의 (4)에 의해 $\int_A cf^+\,d\mu = c\int_A f^+\,d\mu$이고, 적분가능성 항목의 (1)에 의해 이것은 실수의 곱이다. $f^-$도 같다. 그래서 적분가능성 항목의 (4)를 $f_1 = cf^+$, $f_2 = cf^-$로 쓰면 $cf$는 $\mu$-적분가능하고
$$
\begin{aligned}
\int_A cf\,d\mu &= c\int_A f^+\,d\mu - c\int_A f^-\,d\mu \\
&= c\int_A f\,d\mu
\end{aligned}
$$
이다. $c < 0$이면 $-c > 0$이고 모든 $x$에서 $cf(x) = (-c)f^-(x) - (-c)f^+(x)$이므로, 같은 방식으로 $\int_A cf\,d\mu = (-c)\int_A f^-\,d\mu - (-c)\int_A f^+\,d\mu = c\int_A f\,d\mu$이다.

**(2)** [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)에 의해 $f + g$는 가측이다. 모든 $x$에서 $(f + g)(x) = \bigl(f^+(x) + g^+(x)\bigr) - \bigl(f^-(x) + g^-(x)\bigr)$이다. $u = f^+ + g^+$와 $v = f^- + g^-$는 같은 (3)에 의해 가측이고 모든 값이 $0$ 이상이며, [[additivity-of-nonnegative-integral|적분의 덧셈]]의 (1)에 의해 $\int_A u\,d\mu = \int_A f^+\,d\mu + \int_A g^+\,d\mu$, $\int_A v\,d\mu = \int_A f^-\,d\mu + \int_A g^-\,d\mu$이고, 적분가능성 항목의 (1)에 의해 오른쪽은 모두 실수이다. 적분가능성 항목의 (4)에 의해 $f + g$는 $\mu$-적분가능하고
$$
\begin{aligned}
&\int_A (f + g)\,d\mu \\
&\quad = \int_A u\,d\mu - \int_A v\,d\mu \\
&\quad = \int_A f^+\,d\mu - \int_A f^-\,d\mu \\
&\qquad + \int_A g^+\,d\mu - \int_A g^-\,d\mu \\
&\quad = \int_A f\,d\mu + \int_A g\,d\mu
\end{aligned}
$$
이다. 모든 $x$에서 $(f - g)(x) = f(x) + (-1)g(x)$이므로, (1)로 $(-1)g$가 $\mu$-적분가능하고 $\int_A (-1)g\,d\mu = -\int_A g\,d\mu$인 것을 쓰면 차에 관한 문장이 나온다.

**(3)** $N$에 대한 [[mathematical-induction|수학적 귀납법]]을 쓴다. [[finite-sum-of-reals|실수의 유한 합]]의 (2)에 의해 $N = 0$이면 모든 $x$에서 $\sum_{k=1}^{0} f_k(x) = 0$이므로 $\sum_{k=1}^{0} f_k$는 값이 $0$인 상수함수이고, 적분가능성 항목의 (6)의 (iii)에 의해 $\mu$-적분가능하며 $A$ 위의 적분은 $0 = \sum_{k=1}^{0} \int_A f_k\,d\mu$이다. $N$에서 성립한다고 하자. 같은 항목의 (3)에 의해 모든 $x$에서 $\sum_{k=1}^{N+1} f_k(x) = \sum_{k=1}^{N} f_k(x) + f_{N+1}(x)$이므로, (2)와 귀납 가정에 의해 $\sum_{k=1}^{N+1} f_k$는 $\mu$-적분가능하고 그 $A$ 위의 적분은 $\sum_{k=1}^{N} \int_A f_k\,d\mu + \int_A f_{N+1}\,d\mu = \sum_{k=1}^{N+1} \int_A f_k\,d\mu$이다.

**(4)** (2)에 의해 $w = g - f$는 $\mu$-적분가능하다. 측도가 0 인 집합 $Z$가 있어 $X - Z$의 모든 원소 $x$에서 $f(x) \le g(x)$, 곧 $w(x) \ge 0$이다([[order-properties-of-reals]]의 (3)의 (i)). 그런 $x$에서 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 $w^-(x) = 0$이므로, $[0, \infty]$ 값 함수 $w^-$와 값이 $0$인 상수함수는 $\mu$-거의 어디서나 같다. [[markov-inequality-and-null-integral|마르코프 부등식 항목]]의 (4)와 가측함수의 적분의 (5)에 의해 $\int_A w^-\,d\mu = \int_A 0\,d\mu = 0$이다. 그래서 $\int_A w\,d\mu = \int_A w^+\,d\mu - 0 \ge 0$이고($[0, \infty]$의 (2)의 (iv)), (2)에 의해 $\int_A g\,d\mu - \int_A f\,d\mu = \int_A w\,d\mu \ge 0$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $\int_A f\,d\mu \le \int_A g\,d\mu$이다. 모든 점에서 $f(x) \le g(x)$이면 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (2)의 (ii)에 의해 $\mu$-거의 어디서나 성립한다.

**(5)** (2)에 의해 $f - g$는 $\mu$-적분가능하고 $\int_A f\,d\mu - \int_A g\,d\mu = \int_A (f - g)\,d\mu$이다. 적분가능성 항목의 (3)의 (i)에 의해 $|f - g|$는 $\mu$-적분가능하고 $\left|\int_A (f - g)\,d\mu\right| \le \int_A |f - g|\,d\mu$이며, 같은 항목의 (1)에 의해 오른쪽은 실수이다.

**(6)** 적분의 덧셈의 (2)에 의해 $\int_{A \cup E} f^+\,d\mu = \int_A f^+\,d\mu + \int_E f^+\,d\mu$이고 $f^-$도 같다. 적분가능성 항목의 (1)에 의해 여섯 값은 모두 실수이므로, 정의와 실수의 계산으로
$$
\begin{aligned}
\int_{A \cup E} f\,d\mu &= \int_A f^+\,d\mu - \int_A f^-\,d\mu \\
&\quad + \int_E f^+\,d\mu - \int_E f^-\,d\mu
\end{aligned}
$$
이고, 이것이 $\int_A f\,d\mu + \int_E f\,d\mu$이다.

**(7)** (i) $f \le g$가 $\mu$-거의 어디서나 성립하면 (4)에 의해 모든 $B$에서 $\int_B f\,d\mu \le \int_B g\,d\mu$이다. 거꾸로 이것이 모든 $B \in \mathcal{M}$에서 성립한다고 하자. 가측함수 항목의 (7)에 의해 $D = \{g < f\}$는 $\mathcal{M}$의 원소이다. (2)에 의해 $w = f - g$는 $\mu$-적분가능하고 $\int_D w\,d\mu = \int_D f\,d\mu - \int_D g\,d\mu \le 0$이다. 한편 $x \in D$이면 $w(x) > 0$이고 $\chi_D(x) = 1$이며, $x \notin D$이면 $\chi_D(x) = 0$이므로, $w\chi_D$의 값은 모두 $0$ 이상이고 $\{w\chi_D > 0\} = D$이다. 적분가능성 항목의 (5)의 (i)에 의해 $w\chi_D$는 $\mu$-적분가능하고 $\int w\chi_D\,d\mu = \int_D w\,d\mu$이며, 같은 항목의 (2)에 의해 이 값은 가측함수의 적분 항목의 뜻의 $\int w\chi_D\,d\mu$이므로 $0$ 이상이다($[0, \infty]$의 (2)의 (iv)). 그래서 $\int w\chi_D\,d\mu = 0$이고, 마르코프 부등식 항목의 (3)에 의해 $\mu(D) = \mu(\{w\chi_D > 0\}) = 0$이다. [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (4)의 (iii)에 의해 $f \le g$가 $\mu$-거의 어디서나 성립한다.

(ii) [[order-properties-of-reals]]의 (1)의 (ii)에 의해 두 실수가 같은 것은 정확히 두 방향의 부등식이 성립할 때이므로, 왼쪽 조건은 "모든 $B$에서 $\int_B f\,d\mu \le \int_B g\,d\mu$이고 모든 $B$에서 $\int_B g\,d\mu \le \int_B f\,d\mu$"와 같다. (i)을 두 번 쓰면 이것은 "$f \le g$와 $g \le f$가 각각 $\mu$-거의 어디서나 성립한다"와 같고, 측도가 0 인 집합과 μ-거의 어디서나의 (4)의 (i)에 의해 $f = g$가 $\mu$-거의 어디서나 성립한다는 것과 같다.

**(8)** (i) 가측함수의 연산과 극한의 (2)에 의해 $h$는 가측이다. 자연수 $k$에 대한 귀납법으로 모든 $x$에서 $f_1(x) \le f_k(x)$이다($k = 1$이면 등호이고, $f_1(x) \le f_k(x) \le f_{k+1}(x)$). $(k, x)$마다 값이 $f_k(x) - f_1(x)$인 함수열을 $(w_k)$라 하자([[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 함수열). (2)에 의해 각 $w_k$는 $\mu$-적분가능하고 $\int_B w_k\,d\mu = \int_B f_k\,d\mu - \int_B f_1\,d\mu$이며, 값은 모두 $0$ 이상이고 [[order-properties-of-reals]]의 (2)의 (i)에 의해 $w_k(x) \le w_{k+1}(x)$이다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 실수열 $(w_k(x))$는 $h(x) - f_1(x)$로 수렴한다. 수렴하는 수열은 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 유계이므로, $[0, \infty]$의 (7)의 (iii)에 의해 단조증가인 원소열 $(w_k(x))$의 $[0, \infty]$의 극한도 $h(x) - f_1(x)$이다. 그래서 $w = h - f_1$의 값은 모두 $0$ 이상이고, [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)에 의해 모든 $B \in \mathcal{M}$에서 원소열 $(\int_B w_k\,d\mu)$는 단조증가이고
$$
\int_B w\,d\mu = \lim_{k \to \infty} \int_B w_k\,d\mu
$$
이다($[0, \infty]$의 극한).

$B = X$로 두면, $[0, \infty]$의 (7)의 (iii)에 의해 $\int w\,d\mu < \infty$인 것은 정확히 실수열 $(\int f_k\,d\mu - \int f_1\,d\mu)$가 위로 유계일 때이고, 이것은 $(\int f_k\,d\mu)$가 위로 유계인 것과 같다. 적분가능성 항목의 (2)에 의해 앞의 것은 $w$가 $\mu$-적분가능인 것과 같다. $w$가 $\mu$-적분가능하면 (2)에 의해 $h = w + f_1$이 $\mu$-적분가능하고, $h$가 $\mu$-적분가능하면 (2)에 의해 $w = h - f_1$이 $\mu$-적분가능하다. 그래서 첫 문장이 성립한다.

이제 $h$가 $\mu$-적분가능하다고 하자. $B \in \mathcal{M}$이면 $\int_B w\,d\mu$는 실수이고 각 $\int_B w_k\,d\mu$는 그 이하이므로($[0, \infty]$의 (7)의 (i)), 같은 (7)의 (iii)에 의해 실수열 $(\int_B w_k\,d\mu)$는 $\int_B w\,d\mu$로 수렴한다. 극한의 사칙연산의 (5)와 (2)에 의해 $\int_B f_k\,d\mu = \int_B w_k\,d\mu + \int_B f_1\,d\mu$는 $\int_B w\,d\mu + \int_B f_1\,d\mu = \int_B h\,d\mu$로 수렴한다.

(ii) (1)에 의해 $-f_k = (-1)f_k$는 $\mu$-적분가능하고 $\int_B (-f_k)\,d\mu = -\int_B f_k\,d\mu$이다. [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $-f_k(x) \le -f_{k+1}(x)$이고, 극한의 사칙연산의 (5)에 의해 $(-f_k(x))$는 $-h(x)$로 수렴한다. (i)을 $(-f_k)$에 쓰면 $-h$가 $\mu$-적분가능인 것은 정확히 $(-\int f_k\,d\mu)$가 위로 유계일 때, 곧 $(\int f_k\,d\mu)$가 아래로 유계일 때이다. (1)에 의해 $h$와 $-h$의 $\mu$-적분가능성은 같은 조건이다($h = (-1)(-h)$). 이때 $(-\int_B f_k\,d\mu)$는 $-\int_B h\,d\mu$로 수렴하므로, 극한의 사칙연산의 (5)에 의해 $(\int_B f_k\,d\mu)$는 $\int_B h\,d\mu$로 수렴한다.

(iii) 귀납법으로 모든 $x$와 $k$에서 $0 \le u_k(x) \le u_1(x)$이다. 그래서 [[absolute-value]]의 (1)에 의해 $|u_k| \le |u_1|$이고, 적분가능성 항목의 (3)의 (ii)에 의해 모든 $u_k$는 $\mu$-적분가능하다. $x$를 고정하고 $v_k = u_1(x) - u_k(x)$로 두면 [[order-properties-of-reals]]의 (3)의 (i)과 (3)의 (iii), (2)의 (i)에 의해 $0 \le v_k \le u_1(x)$이고 $v_k \le v_{k+1}$이다. 곧 $(v_k)$는 단조증가이고 위로 유계인 실수열이므로 $[0, \infty]$의 (7)의 (iii)에 의해 수렴하고, 극한의 사칙연산의 (5)에 의해 $u_k(x) = u_1(x) + (-1)v_k$도 수렴한다. 적분가능성 항목의 (2)에 의해 모든 $k$에서 $\int u_k\,d\mu \ge 0$이므로 $(\int u_k\,d\mu)$는 아래로 유계이고, (ii)에 의해 $u$는 $\mu$-적분가능하며 모든 $B$에서 $(\int_B u_k\,d\mu)$는 $\int_B u\,d\mu$로 수렴한다.
:::

## 예시와 반례

:::example[디랙 측도에서 (7)의 (i)을 읽기]
$p \in X$이고 $\mu = \delta_p$라 합시다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 가측인 실숫값 함수 $f$, $g$는 모두 $\delta_p$-적분가능하고 $\int_B f\,d\delta_p = f(p)\,\chi_B(p)$입니다. $f(p) \le g(p)$이면 $p \in B$일 때 두 적분은 $f(p) \le g(p)$이고 $p \notin B$일 때 둘 다 $0$이므로, 모든 $B$에서 (7)의 (i)의 왼쪽 조건이 성립합니다. 거꾸로 그 조건이 성립하면 $B = X$로 두어 $f(p) \le g(p)$입니다. 그래서 (7)의 (i)은 이 측도에서 "$f(p) \le g(p)$인 것은 정확히 $f \le g$가 $\delta_p$-거의 어디서나 성립할 때"라는 것이 됩니다.

[[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (ii)는 그 거꾸로를 $\mathcal{M} = \mathscr{P}(X)$일 때만 말합니다. 여기서는 $f$, $g$가 가측이어서 예외 집합 $\{g < f\}$가 $\mathcal{M}$에 들고, $f(p) \le g(p)$이면 $p$가 그 집합에 들지 않으므로 $\delta_p(\{g < f\}) = 0$이 됩니다. 이것이 (7)의 (i)의 증명에서 $D = \{g < f\}$를 쓰는 자리입니다.
:::

:::counterexample[적분이 아래로 유계가 아닌 감소열]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f_k = -\chi_{\{1, \dots, k\}}$라 합시다. [[finite-set|유한집합]]의 (F2)에 의해 $\{1, \dots, k\}$는 원소를 $k$개 갖는 유한집합이어서 [[number-of-elements-is-unique|원소의 개수]]의 뜻으로 $|\{1, \dots, k\}| = k$이므로, [[measure-examples|측도의 예]]의 (4)에 의해 $\mu^{\sharp}(\{1, \dots, k\}) = k$이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $f_k$는 $\mu^{\sharp}$-적분가능하며 $\int f_k\,d\mu^{\sharp} = -k$입니다. $\{1, \dots, k\} \subseteq \{1, \dots, k+1\}$이므로 [[indicator-function|지시함수]]의 (2)에 의해 $f_{k+1}(n) \le f_k(n)$이고, $n$을 고정하면 $k \ge n$에서 $f_k(n) = -1$이므로 $(f_k(n))$은 $-1$로 수렴합니다.

극한 $h$는 값이 $-1$인 상수함수이고, $\mathbb{N}$이 무한집합이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)) $\mu^{\sharp}(\mathbb{N}) = \infty$여서 같은 항목의 (6)의 (ii)에 의해 $h$는 $\mu^{\sharp}$-적분가능하지 않습니다. [[archimedean-property|아르키메데스 성질]]에 의해 실수열 $(-k)$는 아래로 유계가 아니므로, 이것은 (8)의 (ii)가 말하는 대로입니다. 모든 함수가 $\mu$-적분가능한 감소열이어도 적분들이 아래로 유계가 아니면 극한은 $\mu$-적분가능하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1 + \delta_2$에서 $\int f\,d\mu \le \int g\,d\mu$ 하나만으로 $f \le g$가 $\mu$-거의 어디서나 성립하는가?]
그렇지 않을 수 있습니다. $f = \chi_{\{1\}}$, $g = \chi_{\{2\}}$로 두면 [[measure-examples|측도의 예]]의 (5)의 (iii)과 (2)에 의해 $\mu(\{1\}) = \mu(\{2\}) = 1$이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $\int f\,d\mu = \int g\,d\mu = 1$입니다. 그러나 $\{g < f\} = \{1\}$의 측도가 $1$이므로 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (4)의 (iii)에 의해 $f \le g$는 $\mu$-거의 어디서나 성립하지 않습니다. (7)의 (i)은 모든 가측집합에서의 부등식을 요구하고, 여기서는 $B = \{1\}$에서 $\int_B f\,d\mu = 1 > 0 = \int_B g\,d\mu$입니다.
:::

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1 + 2\delta_2$에서 $\int (3\chi_{\{1\}} - 5\chi_{\{2\}})\,d\mu$는 무엇인가?]
$-7$입니다. [[measure-examples|측도의 예]]의 (5)의 (iii)과 (2)에 의해 $\mu(\{1\}) = 1 + 2 \cdot 0 = 1$, $\mu(\{2\}) = 0 + 2 \cdot 1 = 2$이고, 둘 다 실수이므로 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $3\chi_{\{1\}}$과 $5\chi_{\{2\}}$는 $\mu$-적분가능하며 적분은 $3$과 $10$입니다. (2)에 의해 차의 적분은 $3 - 10 = -7$입니다.
:::
