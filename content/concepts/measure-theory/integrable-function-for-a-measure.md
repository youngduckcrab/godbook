---
title: μ-적분가능한 함수와 그 적분
title_en: μ-Integrable Functions and Their Integrals
aliases: [μ-적분가능, 적분가능한 함수 (측도), 측도에 대한 적분가능성, 실숫값 함수의 적분, mu-integrable, integrable function with respect to a measure, integral of a real-valued function (measure spaces)]
kind: definition
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: 측도공간 위의 가측인 실숫값 함수가 절댓값의 적분이 실수일 때 μ-적분가능하다고 하고 그 적분을 양의 부분의 적분과 음의 부분의 적분의 차로 정의한 뒤, 0 이상인 함수에서 앞의 적분과 같다는 것, 절댓값과 삼각부등식, 차의 꼴, 가측집합 위의 적분, 지시함수와 상수함수, μ-거의 어디서나 같은 함수, ∞ 를 0 으로 바꾼 함수, 디랙 측도와 셈측도에서의 μ-적분가능성을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, positive-and-negative-parts, power-set, sigma-algebra, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, additivity-of-nonnegative-integral, markov-inequality-and-null-integral, integral-with-respect-to-counting-measure, sequence, series-and-partial-sums, sum-of-a-series, absolute-convergence, subsequence, geometric-series, alternating-series-test, harmonic-series-diverges, p-series, power-of-a-real-number]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.1절 Integrable Functions, Definition 6.1 과 그 뒤 문단 (p.164), Theorem 6.2 (p.164–165), Proposition 6.3 (p.165), Proposition 6.4 (p.166), Example 6.5 (p.166), Example 6.6 (p.167), Proposition 6.9 와 그 앞 문단 (p.170); 6.4절 Exercise 6.2, 6.4 (p.185), Exercise 6.11, 6.12 (p.186)
    checked: original
    note: "출처 Definition 6.1(p.164)은 확장된 실수에 값을 갖는 가측함수 f ∈ M(X, S) 가 ∫ f⁺ dµ < +∞ 이고 ∫ f⁻ dµ < +∞ 일 때 적분가능하다고 하고 ∫ f dµ := ∫ f⁺ dµ − ∫ f⁻ dµ 로 정의하며, 그런 함수 전체를 윗줄을 그은 𝓛(X, S, µ) 로, 그 가운데 실숫값인 것을 윗줄 없는 𝓛(X, S, µ) 로 쓴다(p.164). 이 항목은 실숫값 함수만 다루고, 정의를 ∫|f| dµ < ∞ 로 두었다. 두 조건이 같다는 것은 (1)이다. 출처는 Theorem 6.2 (a)(p.164–165)에서 f 가 적분가능한 것과 |f| 가 적분가능한 것이 같다고 증명하고, p.170 첫 문단에서 이 동치가 르베그의 원래 정식화와 일치한다고 적는다. 출처는 A 위의 적분을 정의 뒤 문단(p.164)에서 (f·χ_A) 의 적분으로 정하고 그것이 ∫_A f⁺ dµ − ∫_A f⁻ dµ 와 같다고 적는다. 이 항목은 거꾸로 차로 정의하고 (5)의 (i)에서 fχ_A 의 적분과 같다는 것을 증명했다. (2)는 기호가 두 뜻이 되지 않게 진술에 둔 것이고, 출처 Example 6.5(p.166)는 c > 0 인 상수함수 f 에서 ∫ f dµ = ∫ f⁺ dµ = cµ(X) 라고 적는다. (3)의 (i)(ii)는 출처 Theorem 6.2(p.164–165)이고, 출처의 (b)는 모든 점에서 |g| ≤ |f| 인 꼴인데 이 항목은 μ-거의 어디서나인 꼴로 진술했다. (3)의 (iii)은 출처 Proposition 6.3(p.165)이고, 출처는 증명을 Exercise 6.2(p.185)로 돌린다. (4)는 출처 Proposition 6.4(p.166)에서 f₁, f₂ 를 실숫값 함수로 좁히고 f 가 적분가능하다는 가정을 결론으로 옮긴 것이다. 출처의 증명도 f⁺ + f₂ = f₁ + f⁻ 를 쓰고 이 항목도 같다. (6)은 출처 Example 6.5(p.166)이다. (7)은 출처 Exercise 6.4(p.185)의 실숫값판이다. (8)은 출처 Proposition 6.9(p.170)의 ⇒ 쪽 증명이 만드는 함수 f·χ_{X∖A}(A 는 |f| = +∞ 인 점의 집합)를 0 이상인 함수에 쓴 것이다. (9)의 (iii)은 출처 Exercise 6.12(p.186)이고, 출처는 그것을 증명하라는 연습문제로 둔다. (9)의 (i)(ii)는 이 항목이 0 이상인 함수의 디랙 측도와 가중 셈측도에 대한 적분(디랙 측도는 출처 Example 5.14, p.131–132)에서 끌어낸 것이다. 예시 '셈측도 위에서 부호가 바뀌는 등비 함수'는 출처 Exercise 6.12 의 셈측도와 같은 대상이다. 반례 '급수는 수렴하지만 μ♯-적분가능하지 않은 함수'는 출처 Example 6.6(p.167, 르베그 측도 위의 Σ (−1)ᵏ/k · χ_{[k−1,k)} 가 적분가능하지 않다)과 같은 발상이고, 이 항목은 르베그 측도 대신 셈측도를 썼다. 확인 질문 'f 가 μ-적분가능하면 ff 도 μ-적분가능한가?'는 출처 Exercise 6.11(p.186, f 는 적분가능하지만 f² 은 아닌 예를 들라)과 같은 물음이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(|∫f| = ∫|f| 의 등호 조건, 반례와 출처 Example 6.6 대조, 지배 수렴의 예외 집합 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도의 성질, 유한 측도는 [[measure|측도와 측도공간]]의 것이고, 디랙 측도 $\delta_p$, 측도의 유한 일차결합, 가중 셈측도 $\mu_x$, 셈측도 $\mu^{\sharp}$는 [[measure-examples|측도의 예]]의 것이다. 측도가 0 인 집합과 $\mu$-거의 어디서나는 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $f + g$, $f - g$, $fg$, $cf$, $|f|$, $f^+$, $f^-$, 상수함수, $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, 지시함수 $\chi_A$는 [[indicator-function|지시함수]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수, 그 가측성, 집합 $\{h = \infty\}$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, $h$의 값 $\infty$를 $0$으로 바꾼 함수 $h_0$는 그 항목의 (3)의 (ii)의 $f_0$를 $h$에 쓴 것, 곧 $h(x) < \infty$이면 $h_0(x) = h(x)$, $h(x) = \infty$이면 $h_0(x) = 0$인 실숫값 함수이다. 0 이상인 가측함수의 적분 $\int u\,d\mu$와 $\int_A u\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고, $[0, \infty]$와 그 순서, 덧셈은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 급수의 수렴, 급수의 합의 기호 $\sum_{n=1}^{\infty}$, 절대수렴은 [[series-and-partial-sums|급수와 부분합]], [[sum-of-a-series|급수의 합의 기호]], [[absolute-convergence|절대수렴]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고 "가측"은 $\mathcal{M}$-가측을 뜻한다.

**0 이상인 실숫값 함수를 $[0, \infty]$ 값 함수로 보기.** 모든 값이 $0$ 이상인 $X$ 위의 실숫값 함수 $u$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $X$ 위의 $[0, \infty]$ 값 함수이기도 하고, 두 뜻의 가측성은 같다. 그래서 $u$가 가측이면 $A \in \mathcal{M}$에서 $\int u\,d\mu$와 $\int_A u\,d\mu$가 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻으로 $[0, \infty]$의 원소로 정해진다. 실숫값 함수 $f$가 가측이면 $|f|$, $f^+$, $f^-$는 [[measurable-function|가측함수]]의 (5)에 의해 이런 함수이다.

**μ-적분가능.** $X$ 위의 실숫값 함수 $f$가 **$\mu$-적분가능**($\mu$-integrable)인 것은 정확히 $f$가 가측이고 $\int |f|\,d\mu < \infty$일 때이다. 부등호는 $[0, \infty]$의 순서이다.

**적분.** $f$가 $\mu$-적분가능하면, 아래 (1)에 의해 모든 $A \in \mathcal{M}$에서 $\int_A f^+\,d\mu$와 $\int_A f^-\,d\mu$는 실수이다. 실수
$$
\int_A f\,d\mu = \int_A f^+\,d\mu - \int_A f^-\,d\mu
$$
를 $f$의 $A$ 위의 $\mu$에 대한 **적분**(integral)이라 하고, $A = X$일 때의 것을 $\int f\,d\mu$로 쓴다. [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (3)의 (i)에 의해 $\int f\,d\mu = \int f^+\,d\mu - \int f^-\,d\mu$이다. $\mu$-적분가능하지 않은 실숫값 함수에는 이 적분을 정하지 않는다.

**기호가 두 뜻으로 읽히는 곳.** 모든 값이 $0$ 이상인 가측인 실숫값 함수 $f$에서는 $\int_A f\,d\mu$가 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻으로도 정해진다. 아래 (2)에 의해 $f$가 $\mu$-적분가능하면 모든 $A \in \mathcal{M}$에서 두 값이 같고, $\mu$-적분가능하지 않으면 그 항목의 뜻으로 $\int f\,d\mu = \infty$이다.

다음이 성립한다. 아래에서 $f$, $g$는 $X$ 위의 실숫값 함수이고 $A$는 $\mathcal{M}$의 원소이다.

1. (양의 부분과 음의 부분) $f$가 가측이면 $\int_A |f|\,d\mu = \int_A f^+\,d\mu + \int_A f^-\,d\mu$이다(오른쪽은 $[0, \infty]$의 덧셈). 따라서 $f$가 $\mu$-적분가능인 것은 정확히 $f$가 가측이고 $\int f^+\,d\mu < \infty$이며 $\int f^-\,d\mu < \infty$일 때이다. 이때 모든 $A \in \mathcal{M}$에서 $\int_A f^+\,d\mu$, $\int_A f^-\,d\mu$, $\int_A |f|\,d\mu$는 실수이다.
2. (0 이상인 함수) $f$가 가측이고 모든 $x \in X$에서 $f(x) \ge 0$이라 하자. $f$가 $\mu$-적분가능인 것은 정확히 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻으로 $\int f\,d\mu < \infty$일 때이고, 이때 모든 $A \in \mathcal{M}$에서 이 항목의 뜻의 $\int_A f\,d\mu$는 그 항목의 뜻의 $\int_A f\,d\mu$와 같다. $f$가 $\mu$-적분가능하지 않으면 그 항목의 뜻으로 $\int f\,d\mu = \infty$이다.
3. (절댓값) $f$가 가측이라 하자.
   - (i) $f$가 $\mu$-적분가능인 것은 정확히 $|f|$가 $\mu$-적분가능일 때이다. 이때 모든 $A \in \mathcal{M}$에서 $\left|\int_A f\,d\mu\right| \le \int_A |f|\,d\mu$이다.
   - (ii) (위에서 막기) $g$가 $\mu$-적분가능하고 $|f| \le |g|$가 $\mu$-거의 어디서나 성립하면 $f$는 $\mu$-적분가능하고, 모든 $A \in \mathcal{M}$에서 $\int_A |f|\,d\mu \le \int_A |g|\,d\mu$이다.
   - (iii) (등호) $f$가 $\mu$-적분가능하면, $\left|\int f\,d\mu\right| = \int |f|\,d\mu$인 것은 정확히 $\mu(\{f < 0\}) = 0$이거나 $\mu(\{f > 0\}) = 0$일 때이다.
4. (차의 꼴) $f$가 가측이고, $f_1$, $f_2$가 모든 값이 $0$ 이상인 가측인 실숫값 함수이며 $\int f_1\,d\mu < \infty$, $\int f_2\,d\mu < \infty$이고, $f = f_1 - f_2$가 $\mu$-거의 어디서나 성립한다고 하자. 그러면 $f$는 $\mu$-적분가능하고, 모든 $A \in \mathcal{M}$에서
   $$
   \int_A f\,d\mu = \int_A f_1\,d\mu - \int_A f_2\,d\mu
   $$
   이다. 오른쪽의 두 적분은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻이고 실수이다.
5. (가측집합 위의 적분) $f$가 $\mu$-적분가능이라 하자.
   - (i) $f\chi_A$, 곧 $x$에서의 값이 $f(x)\,\chi_A(x)$인 실숫값 함수는 $\mu$-적분가능하고 $\int f\chi_A\,d\mu = \int_A f\,d\mu$이다. 또 $\int_X f\,d\mu = \int f\,d\mu$이다.
   - (ii) $\mu(A) = 0$이면 $\int_A f\,d\mu = 0$이다.
6. (지시함수와 상수함수) $c$가 실수이고 $c\chi_A$가 $x$에서의 값이 $c\,\chi_A(x)$인 함수라 하자.
   - (i) $\mu(A) < \infty$이면 $c\chi_A$는 $\mu$-적분가능하고 $\int c\chi_A\,d\mu = c\,\mu(A)$이다.
   - (ii) $c \ne 0$이면, $c\chi_A$가 $\mu$-적분가능인 것은 정확히 $\mu(A) < \infty$일 때이다. 특히 $\chi_A$가 $\mu$-적분가능인 것은 정확히 $\mu(A) < \infty$일 때이고, 값이 $c$인 상수함수가 $\mu$-적분가능인 것은 정확히 $\mu(X) < \infty$일 때이며 이때 그 적분은 $c\,\mu(X)$이다.
   - (iii) 값이 $0$인 상수함수는 $\mu$에 관계없이 $\mu$-적분가능하고, 모든 $A \in \mathcal{M}$에서 그 $A$ 위의 적분은 $0$이다.
7. ($\mu$-거의 어디서나 같은 함수) $f$, $g$가 가측이고 $f = g$가 $\mu$-거의 어디서나 성립하면, $f$가 $\mu$-적분가능인 것은 정확히 $g$가 $\mu$-적분가능일 때이고, 이때 모든 $A \in \mathcal{M}$에서 $\int_A f\,d\mu = \int_A g\,d\mu$이다.
8. ($\infty$를 $0$으로 바꾼 함수) $h$가 $X$ 위의 가측인 $[0, \infty]$ 값 함수이고 $\int h\,d\mu < \infty$라 하자. 그러면 $\{h = \infty\}$는 측도가 0 인 집합이고, $h_0$는 모든 값이 $0$ 이상인 가측인 실숫값 함수로서 $\mu$-적분가능하며, $X - \{h = \infty\}$의 모든 원소 $x$에서 $h_0(x) = h(x)$이고, 모든 $A \in \mathcal{M}$에서 $\int_A h_0\,d\mu = \int_A h\,d\mu$이다. 또 $f$가 가측이고 $|f| \le h$가 $\mu$-거의 어디서나 성립하면(부등호는 $[0, \infty]$의 순서) $f$는 $\mu$-적분가능하다.
9. (디랙 측도와 셈측도)
   - (i) $p \in X$이고 $\mu = \delta_p$이면, 가측인 모든 실숫값 함수 $f$는 $\delta_p$-적분가능하고 $\int_A f\,d\delta_p = f(p)\,\chi_A(p)$이다. 특히 $\int f\,d\delta_p = f(p)$이다.
   - (ii) $X$가 $\mathbb{N}$의 부분집합이고 $\mathcal{M} = \mathscr{P}(X)$이며, $(x_n)$이 모든 항이 실수인 $[0, \infty]$의 원소열이라 하자. 그러면 $X$ 위의 모든 실숫값 함수는 가측이다. $f$가 $X$ 위의 실숫값 함수이고 $(y_n)$이 $n \in X$일 때 $y_n = f(n)\,x_n$, $n \notin X$일 때 $y_n = 0$인 수열이면, $f$가 $\mu_x$-적분가능인 것은 정확히 $(y_n)$의 급수가 절대수렴할 때이고, 이때 $\int f\,d\mu_x = \sum_{n=1}^{\infty} y_n$이다.
   - (iii) $X = \mathbb{N}$이고 $\mathcal{M} = \mathscr{P}(\mathbb{N})$이면, $\mathbb{N}$ 위의 실숫값 함수 $f$가 $\mu^{\sharp}$-적분가능인 것은 정확히 $n$번째 항이 $f(n)$인 수열의 급수가 절대수렴할 때이고, 이때 $\int f\,d\mu^{\sharp} = \sum_{n=1}^{\infty} f(n)$이다.
:::

:::english
Measure spaces, properties of measures and finite measures are as in the entry on measures; the Dirac measure $\delta_p$, finite linear combinations of measures, the weighted counting measure $\mu_x$ and the counting measure $\mu^{\sharp}$ are as in the entry on examples of measures. Sets of measure zero and $\mu$-almost everywhere are as in the entry on sets of measure zero. Real-valued functions on $X$ and the operations $f + g$, $f - g$, $fg$, $cf$, $|f|$, $f^+$, $f^-$, constant functions and $\mathcal{M}$-measurability are as in the entry on measurable functions, and the indicator function $\chi_A$ is as in the entry on indicator functions. $[0, \infty]$-valued functions on $X$, their measurability, and the set $\{h = \infty\}$ are as in the entry on measurable functions with values in $[0, \infty]$; the function $h_0$ obtained from $h$ by replacing the value $\infty$ with $0$ is the $f_0$ of (3)(ii) of that entry applied to $h$, that is, the real-valued function with $h_0(x) = h(x)$ if $h(x) < \infty$ and $h_0(x) = 0$ if $h(x) = \infty$. The integrals $\int u\,d\mu$ and $\int_A u\,d\mu$ of nonnegative measurable functions are as in the entry on integrals of nonnegative measurable functions, and $[0, \infty]$ with its order and addition is as in the entry on extended nonnegative reals. Convergence of series, the series-sum notation $\sum_{n=1}^{\infty}$ and absolute convergence are as in the entries on series and partial sums, on the notation for sums of series and on absolute convergence. Below, $(X, \mathcal{M}, \mu)$ is a measure space and "measurable" means $\mathcal{M}$-measurable.

**Viewing nonnegative real-valued functions as $[0, \infty]$-valued.** A real-valued function $u$ on $X$ all of whose values are at least $0$ is, by (3)(i) of the entry on $[0, \infty]$-valued measurable functions, also a $[0, \infty]$-valued function on $X$, and the two notions of measurability agree. So if $u$ is measurable, then for $A \in \mathcal{M}$ the integrals $\int u\,d\mu$ and $\int_A u\,d\mu$ are determined as elements of $[0, \infty]$ in the sense of the entry on integrals of nonnegative measurable functions. If a real-valued function $f$ is measurable, then $|f|$, $f^+$, $f^-$ are such functions by (5) of the entry on measurable functions.

**μ-integrability.** A real-valued function $f$ on $X$ is **$\mu$-integrable** exactly when $f$ is measurable and $\int |f|\,d\mu < \infty$. The inequality is the order of $[0, \infty]$.

**Integral.** If $f$ is $\mu$-integrable, then by (1) below $\int_A f^+\,d\mu$ and $\int_A f^-\,d\mu$ are real numbers for every $A \in \mathcal{M}$. The real number
$$
\int_A f\,d\mu = \int_A f^+\,d\mu - \int_A f^-\,d\mu
$$
is called the **integral** of $f$ over $A$ with respect to $\mu$, and the one with $A = X$ is written $\int f\,d\mu$. By (3)(i) of the entry on integrals of nonnegative measurable functions, $\int f\,d\mu = \int f^+\,d\mu - \int f^-\,d\mu$. This integral is not defined for real-valued functions that are not $\mu$-integrable.

**Where the notation has two readings.** For a measurable real-valued function $f$ all of whose values are at least $0$, $\int_A f\,d\mu$ is also defined in the sense of the entry on integrals of nonnegative measurable functions. By (2) below, if $f$ is $\mu$-integrable the two values agree for every $A \in \mathcal{M}$, and if $f$ is not $\mu$-integrable then $\int f\,d\mu = \infty$ in the sense of that entry.

The following hold. Below, $f$, $g$ are real-valued functions on $X$ and $A$ is an element of $\mathcal{M}$.

1. (Positive and negative parts) If $f$ is measurable, then $\int_A |f|\,d\mu = \int_A f^+\,d\mu + \int_A f^-\,d\mu$ (addition in $[0, \infty]$ on the right). Hence $f$ is $\mu$-integrable exactly when $f$ is measurable, $\int f^+\,d\mu < \infty$ and $\int f^-\,d\mu < \infty$. In that case $\int_A f^+\,d\mu$, $\int_A f^-\,d\mu$, $\int_A |f|\,d\mu$ are real numbers for every $A \in \mathcal{M}$.
2. (Nonnegative functions) Let $f$ be measurable with $f(x) \ge 0$ for all $x \in X$. Then $f$ is $\mu$-integrable exactly when $\int f\,d\mu < \infty$ in the sense of the entry on integrals of nonnegative measurable functions, and in that case, for every $A \in \mathcal{M}$, $\int_A f\,d\mu$ in the sense of this entry equals $\int_A f\,d\mu$ in the sense of that entry. If $f$ is not $\mu$-integrable, then $\int f\,d\mu = \infty$ in the sense of that entry.
3. (Absolute values) Let $f$ be measurable.
   - (i) $f$ is $\mu$-integrable exactly when $|f|$ is $\mu$-integrable. In that case $\left|\int_A f\,d\mu\right| \le \int_A |f|\,d\mu$ for every $A \in \mathcal{M}$.
   - (ii) (Bounding from above) If $g$ is $\mu$-integrable and $|f| \le |g|$ holds $\mu$-almost everywhere, then $f$ is $\mu$-integrable and $\int_A |f|\,d\mu \le \int_A |g|\,d\mu$ for every $A \in \mathcal{M}$.
   - (iii) (Equality) If $f$ is $\mu$-integrable, then $\left|\int f\,d\mu\right| = \int |f|\,d\mu$ exactly when $\mu(\{f < 0\}) = 0$ or $\mu(\{f > 0\}) = 0$.
4. (Differences) Let $f$ be measurable, let $f_1$, $f_2$ be measurable real-valued functions all of whose values are at least $0$ with $\int f_1\,d\mu < \infty$ and $\int f_2\,d\mu < \infty$, and suppose $f = f_1 - f_2$ holds $\mu$-almost everywhere. Then $f$ is $\mu$-integrable and, for every $A \in \mathcal{M}$,
   $$
   \int_A f\,d\mu = \int_A f_1\,d\mu - \int_A f_2\,d\mu.
   $$
   The two integrals on the right are in the sense of the entry on integrals of nonnegative measurable functions and are real numbers.
5. (Integrals over measurable sets) Let $f$ be $\mu$-integrable.
   - (i) $f\chi_A$, the real-valued function with value $f(x)\,\chi_A(x)$ at $x$, is $\mu$-integrable and $\int f\chi_A\,d\mu = \int_A f\,d\mu$. Also $\int_X f\,d\mu = \int f\,d\mu$.
   - (ii) If $\mu(A) = 0$, then $\int_A f\,d\mu = 0$.
6. (Indicator functions and constant functions) Let $c$ be a real number and let $c\chi_A$ be the function with value $c\,\chi_A(x)$ at $x$.
   - (i) If $\mu(A) < \infty$, then $c\chi_A$ is $\mu$-integrable and $\int c\chi_A\,d\mu = c\,\mu(A)$.
   - (ii) If $c \ne 0$, then $c\chi_A$ is $\mu$-integrable exactly when $\mu(A) < \infty$. In particular, $\chi_A$ is $\mu$-integrable exactly when $\mu(A) < \infty$, and the constant function with value $c$ is $\mu$-integrable exactly when $\mu(X) < \infty$, in which case its integral is $c\,\mu(X)$.
   - (iii) The constant function with value $0$ is $\mu$-integrable whatever $\mu$ is, and its integral over every $A \in \mathcal{M}$ is $0$.
7. (Functions equal $\mu$-almost everywhere) If $f$, $g$ are measurable and $f = g$ holds $\mu$-almost everywhere, then $f$ is $\mu$-integrable exactly when $g$ is $\mu$-integrable, and in that case $\int_A f\,d\mu = \int_A g\,d\mu$ for every $A \in \mathcal{M}$.
8. (Replacing $\infty$ with $0$) Let $h$ be a measurable $[0, \infty]$-valued function on $X$ with $\int h\,d\mu < \infty$. Then $\{h = \infty\}$ is a set of measure zero, $h_0$ is a measurable real-valued function all of whose values are at least $0$ and is $\mu$-integrable, $h_0(x) = h(x)$ for every $x \in X - \{h = \infty\}$, and $\int_A h_0\,d\mu = \int_A h\,d\mu$ for every $A \in \mathcal{M}$. Moreover, if $f$ is measurable and $|f| \le h$ holds $\mu$-almost everywhere (the inequality in the order of $[0, \infty]$), then $f$ is $\mu$-integrable.
9. (Dirac measures and counting measures)
   - (i) If $p \in X$ and $\mu = \delta_p$, then every measurable real-valued function $f$ is $\delta_p$-integrable and $\int_A f\,d\delta_p = f(p)\,\chi_A(p)$. In particular $\int f\,d\delta_p = f(p)$.
   - (ii) Let $X$ be a subset of $\mathbb{N}$, $\mathcal{M} = \mathscr{P}(X)$, and let $(x_n)$ be a sequence in $[0, \infty]$ all of whose terms are real. Then every real-valued function on $X$ is measurable. If $f$ is a real-valued function on $X$ and $(y_n)$ is the sequence with $y_n = f(n)\,x_n$ for $n \in X$ and $y_n = 0$ for $n \notin X$, then $f$ is $\mu_x$-integrable exactly when the series of $(y_n)$ converges absolutely, and in that case $\int f\,d\mu_x = \sum_{n=1}^{\infty} y_n$.
   - (iii) If $X = \mathbb{N}$ and $\mathcal{M} = \mathscr{P}(\mathbb{N})$, then a real-valued function $f$ on $\mathbb{N}$ is $\mu^{\sharp}$-integrable exactly when the series of the sequence whose $n$-th term is $f(n)$ converges absolutely, and in that case $\int f\,d\mu^{\sharp} = \sum_{n=1}^{\infty} f(n)$.
:::

## 직관

4단원의 적분은 $0$ 이상인 함수에만 정해졌습니다. 부호가 바뀌는 함수는 위쪽과 아래쪽으로 나누어, 위쪽 넓이 $\int f^+\,d\mu$에서 아래쪽 넓이 $\int f^-\,d\mu$를 빼면 됩니다. 장부에 비유하면 $f^+$는 들어온 돈, $f^-$는 나간 돈이고 적분은 남은 돈입니다. 들어온 돈과 나간 돈이 둘 다 끝없이 많으면 "남은 돈"이 정해지지 않고, 한쪽만 끝없이 많아도 남은 돈은 실수가 아닙니다. 이 항목은 적분이 실수가 되도록 둘 다 실수일 때만 적분을 정합니다. 둘을 더한 것이 거래한 돈 전체, 곧 $\int |f|\,d\mu$이므로 (1)에 의해 이것은 "$\int |f|\,d\mu < \infty$"와 같은 조건입니다. 비유에서 "남은 돈"이 정의의 차 $\int f^+\,d\mu - \int f^-\,d\mu$에, "거래한 돈 전체가 유한하다"가 정의의 조건에 해당합니다.

셈측도에서는 적분이 합이 되므로, $\mu^{\sharp}$-적분가능성은 (9)의 (iii)에 의해 급수의 절대수렴과 같습니다. 그래서 수렴하지만 절대수렴하지 않는 급수의 항으로 된 함수는 $\mu^{\sharp}$-적분가능하지 않습니다(아래 반례). 이런 급수는 항의 순서를 바꾸면 합이 달라질 수 있는데, 적분은 점들에 붙인 번호의 순서를 쓰지 않고 정해지므로 이런 값을 적분으로 삼기 어렵습니다.

나머지 성질은 이 정의를 쓰기 쉽게 만듭니다. (4)는 $f$를 $f^+ - f^-$가 아닌, 적분이 실수인 다른 두 $0$ 이상인 함수의 차로 써도 적분이 같다는 것이고, 적분의 선형성을 증명할 때 이것을 씁니다. (7)과 (8)은 측도가 0 인 집합 위의 값을 바꾸어도 적분가능성과 적분이 바뀌지 않는다는 것입니다. (8)은 $0$ 이상인 함수항 급수의 합처럼 값이 $\infty$인 점이 생길 수 있는 함수를, 적분이 실수이면 그 점들에서 값을 $0$으로 바꾸어 실숫값 함수로 만드는 방법입니다. 이름의 $\mu$는 리만 적분의 "적분가능"과, 이 강의의 실수 위의 적분에서 쓰는 "르베그 적분가능"과 구별하려고 붙였습니다.

## 성질의 증명

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 0 이상인 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로, 가측함수의 성질은 [[measurable-function|가측함수 항목]]의 번호로 인용한다. 실수인 $[0, \infty]$의 원소끼리의 덧셈과 순서는 실수의 덧셈과 순서이다($[0, \infty]$의 덧셈의 정의와 (2)의 (i)). 모든 값이 $0$ 이상인 실숫값 함수는 맨 위의 약속대로 $[0, \infty]$ 값 함수로도 보고, 그런 함수 둘의 합과 실수배는 $[0, \infty]$ 값 함수로 읽어도 실숫값 함수로 읽어도 점마다 같은 값이다.

**(1)** 가측함수 항목의 (5)에 의해 $|f|$, $f^+$, $f^-$는 가측이고 모든 $x$에서 $|f(x)| = f^+(x) + f^-(x)$이다. 따라서 [[additivity-of-nonnegative-integral|적분의 덧셈]]의 (1)에 의해 $\int_A |f|\,d\mu = \int_A f^+\,d\mu + \int_A f^-\,d\mu$이다. $A = X$로 두고 $[0, \infty]$의 (3)의 (iii)을 쓰면 $\int |f|\,d\mu < \infty$인 것은 정확히 $\int f^+\,d\mu < \infty$이고 $\int f^-\,d\mu < \infty$일 때이다. 이때 $[0, \infty]$의 (2)의 (iv)에 의해 $\int f^+\,d\mu$는 실수이고, 가측함수의 적분의 (3)의 (i)에 의해 $\int_A f^+\,d\mu \le \int f^+\,d\mu$이므로 같은 (2)의 (iv)에 의해 $\int_A f^+\,d\mu$도 실수이다. $f^-$, $|f|$도 같은 방식으로 실수이다.

**(2)** 모든 $x$에서 $f(x) \ge 0$이므로 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 $f^+(x) = f(x)$, $f^-(x) = 0$이고, [[absolute-value]]의 (1)에 의해 $|f(x)| = f(x)$이다. 곧 $f^+ = |f| = f$이고 $f^-$는 값이 $0$인 상수함수이다. 그래서 $\int |f|\,d\mu = \int f\,d\mu$(그 항목의 뜻)이고, 정의에 의해 $f$가 $\mu$-적분가능인 것은 정확히 이것이 $\infty$보다 작을 때이다. 이때 가측함수의 적분의 (5)에 의해 $\int_A f^-\,d\mu = 0 \cdot \mu(A) = 0$이므로($[0, \infty]$의 (4)의 (i)), 이 항목의 뜻의 $\int_A f\,d\mu$는 $\int_A f\,d\mu - 0$, 곧 그 항목의 뜻의 $\int_A f\,d\mu$이다. $f$가 $\mu$-적분가능하지 않으면 "$\int f\,d\mu < \infty$"가 거짓이므로 $[0, \infty]$의 (2)의 (iii)에 의해 $\infty \le \int f\,d\mu$이고, (2)의 (ii)와 (iv)에 의해 $\int f\,d\mu = \infty$이다.

**(3)** (i) 가측함수 항목의 (5)에 의해 $|f|$는 가측이다. [[absolute-value]]의 (2)와 (1)에 의해 모든 $x$에서 $\bigl||f(x)|\bigr| = |f(x)|$이므로 $\int \bigl||f|\bigr|\,d\mu = \int |f|\,d\mu$이고, 두 함수의 $\mu$-적분가능성의 조건은 같다. 이때 $a = \int_A f^+\,d\mu$, $b = \int_A f^-\,d\mu$는 (1)에 의해 $0$ 이상인 실수이므로, [[triangle-inequality|삼각부등식]]의 (3)과 [[absolute-value]]의 (1)에 의해 $|a - b| \le |a| + |b| = a + b$이고, (1)에 의해 $a + b = \int_A |f|\,d\mu$이다.

(ii) 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$에서 $|f(x)| \le |g(x)|$이다. 그런 $x$에서 $\chi_A(x) \ge 0$이므로 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $|f(x)|\,\chi_A(x) \le |g(x)|\,\chi_A(x)$이다. 곧 $[0, \infty]$ 값 함수 $|f|\chi_A$와 $|g|\chi_A$(가측함수 항목의 (5)와 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (4)의 (iii)에 의해 가측) 사이에 $|f|\chi_A \le |g|\chi_A$가 $\mu$-거의 어디서나 성립하므로, [[markov-inequality-and-null-integral|마르코프 부등식 항목]]의 (4)와 가측집합 위의 적분의 정의에 의해 $\int_A |f|\,d\mu \le \int_A |g|\,d\mu$이다. $A = X$로 두면 가측함수의 적분의 (3)의 (i)과 $g$의 $\mu$-적분가능성에 의해 $\int |f|\,d\mu \le \int |g|\,d\mu < \infty$이므로 $f$는 $\mu$-적분가능이다.

(iii) $a = \int f^+\,d\mu$, $b = \int f^-\,d\mu$로 두면 (i)의 계산처럼 $\left|\int f\,d\mu\right| = |a - b|$이고 $\int |f|\,d\mu = a + b$이다. [[absolute-value]]의 (1)에 의해 $|a - b|$는 $a - b$이거나 $-(a - b)$이다. $|a - b| = a + b$이면, 앞의 경우 $a - b = a + b$에서 $b = 0$이고 뒤의 경우 $b - a = a + b$에서 $a = 0$이다. 거꾸로 $b = 0$이면 $|a - b| = |a| = a = a + b$이고, $a = 0$이면 $|a - b| = |-b| = b = a + b$이다([[absolute-value]]의 (3), (1)). 그래서 등호는 정확히 $a = 0$이거나 $b = 0$일 때이다. [[markov-inequality-and-null-integral|마르코프 부등식 항목]]의 (3)에 의해 $b = 0$인 것은 정확히 $\mu(\{f^- > 0\}) = 0$일 때이고, 양의 부분과 음의 부분의 (1)에 의해 $f^-(x) > 0$인 것은 정확히 $f(x) < 0$일 때이므로 $\{f^- > 0\} = \{f < 0\}$이다. 같은 방식으로 $a = 0$인 것은 정확히 $\mu(\{f > 0\}) = 0$일 때이다.

**(4)** 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$에서 $f(x) = f_1(x) - f_2(x)$이다. [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)에 의해 $g = f_1 + f_2$는 가측이고 모든 값이 $0$ 이상이며, 적분의 덧셈의 (1)과 $[0, \infty]$의 (3)의 (iii)에 의해 $\int g\,d\mu = \int f_1\,d\mu + \int f_2\,d\mu < \infty$이므로, [[absolute-value]]의 (1)로 $|g| = g$임을 쓰면 $g$는 $\mu$-적분가능이다. $x \in X - N$이면 [[triangle-inequality|삼각부등식]]의 (3)과 [[absolute-value]]의 (1)에 의해 $|f(x)| = |f_1(x) - f_2(x)| \le f_1(x) + f_2(x) = |g(x)|$이므로, (3)의 (ii)에 의해 $f$는 $\mu$-적분가능이다.

$x \in X - N$이면 가측함수 항목의 (5)에 의해 $f^+(x) - f^-(x) = f(x) = f_1(x) - f_2(x)$이므로 실수의 계산으로 $f^+(x) + f_2(x) = f_1(x) + f^-(x)$이다. 두 함수 $f^+ + f_2$와 $f_1 + f^-$는 가측이고 모든 값이 $0$ 이상이며 $\mu$-거의 어디서나 같으므로, 마르코프 부등식 항목의 (4)와 적분의 덧셈의 (1)에 의해
$$
\begin{aligned}
&\int_A f^+\,d\mu + \int_A f_2\,d\mu \\
&\quad = \int_A f_1\,d\mu + \int_A f^-\,d\mu
\end{aligned}
$$
이다. 네 값은 모두 실수이다. $\int_A f^+\,d\mu$와 $\int_A f^-\,d\mu$는 $f$가 $\mu$-적분가능하므로 (1)에 의해, $\int_A f_1\,d\mu$와 $\int_A f_2\,d\mu$는 가측함수의 적분의 (3)의 (i)에 의해 $\int f_1\,d\mu$, $\int f_2\,d\mu$ 이하이고 $[0, \infty]$의 (2)의 (iv)에 의해 실수이다. 실수의 계산으로 옮기면 $\int_A f^+\,d\mu - \int_A f^-\,d\mu = \int_A f_1\,d\mu - \int_A f_2\,d\mu$이다.

**(5)** (i) 가측함수 항목의 (6)에 의해 $\chi_A$는 가측이므로 가측함수의 연산과 극한의 (3)에 의해 $f\chi_A$는 가측이다. $x \in A$이면 $\chi_A(x) = 1$이어서 $(f\chi_A)(x) = f(x)$이고, $x \notin A$이면 $(f\chi_A)(x) = 0$이다([[indicator-function|지시함수]]의 (1)). 그래서 양의 부분과 음의 부분의 (1)에 의해 모든 $x$에서 $(f\chi_A)^+(x) = f^+(x)\,\chi_A(x)$, $(f\chi_A)^-(x) = f^-(x)\,\chi_A(x)$, $|(f\chi_A)(x)| = |f(x)|\,\chi_A(x) \le |f(x)|$이다(마지막은 [[absolute-value]]의 (4)와 (1), 지시함수의 (1)의 $\chi_A(x) \le 1$, [[order-properties-of-reals]]의 (4)의 (iii)). 모든 점에서 성립하는 부등식은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (2)의 (ii)에 의해 $\mu$-거의 어디서나 성립하므로, (3)의 (ii)에 의해 $f\chi_A$는 $\mu$-적분가능이다. 정의와 가측집합 위의 적분의 정의에 의해
$$
\begin{aligned}
\int f\chi_A\,d\mu &= \int f^+\chi_A\,d\mu \\
&\quad - \int f^-\chi_A\,d\mu \\
&= \int_A f^+\,d\mu - \int_A f^-\,d\mu \\
&= \int_A f\,d\mu
\end{aligned}
$$
이다. $\int_X f\,d\mu = \int f\,d\mu$는 적분의 정의에서 $A = X$로 둔 것이다.

(ii) 가측함수의 적분의 (3)의 (iv)에 의해 $\int_A f^+\,d\mu = 0$, $\int_A f^-\,d\mu = 0$이다.

**(6)** 가측함수 항목의 (6)과 (5)에 의해 $c\chi_A$는 가측이고, [[absolute-value]]의 (4)와 (1)에 의해 $|c\chi_A| = |c|\,\chi_A$이다. 가측함수의 적분의 (5)에 의해 $\int |c|\chi_A\,d\mu = |c|\,\mu(A)$이다($[0, \infty]$의 곱).

(i) $\mu(A) < \infty$이면 $\mu(A)$는 실수이고 $|c|\,\mu(A)$는 실수의 곱이므로 $\infty$보다 작다. 그래서 $c\chi_A$는 $\mu$-적분가능이다. $c \ge 0$이면 양의 부분과 음의 부분의 (1)에 의해 $(c\chi_A)^+ = c\chi_A$이고 $(c\chi_A)^-$는 값이 $0$인 상수함수이므로 $\int c\chi_A\,d\mu = c\,\mu(A) - 0$이다. $c < 0$이면 $x \in A$에서 값 $c$의 양의 부분은 $0$, 음의 부분은 $-c$이고 $x \notin A$에서는 둘 다 $0$이므로 $(c\chi_A)^+$는 값이 $0$인 상수함수, $(c\chi_A)^- = (-c)\chi_A$이고 $\int c\chi_A\,d\mu = 0 - (-c)\,\mu(A) = c\,\mu(A)$이다. 두 경우 모두 가측함수의 적분의 (5)를 썼다.

(ii) $c \ne 0$이면 [[absolute-value]]의 (2)에 의해 $|c| > 0$이다. $\mu(A) = \infty$이면 $[0, \infty]$의 곱셈의 정의에 의해 $|c|\,\mu(A) = \infty$이므로 $c\chi_A$는 $\mu$-적분가능하지 않다. 이것과 (i)을 합치면 첫 문장이 된다. $c = 1$로 두면 $\chi_A$에 관한 문장이 되고, $A = X$로 두면 $c\chi_X$는 값이 $c$인 상수함수이므로(지시함수의 (1)) 상수함수에 관한 문장이 된다.

(iii) 값이 $0$인 상수함수 $z$에서 $|z| = z^+ = z^- = z$이고, 가측함수의 적분의 (5)에 의해 $\int_A z\,d\mu = 0 \cdot \mu(A) = 0$이다. 그래서 $\int |z|\,d\mu = 0 < \infty$이고 $\int_A z\,d\mu = 0 - 0 = 0$이다.

**(7)** 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$에서 $f(x) = g(x)$이고, 그런 $x$에서 $|f(x)| = |g(x)|$, $f^+(x) = g^+(x)$, $f^-(x) = g^-(x)$이다. 곧 가측인 $[0, \infty]$ 값 함수의 세 쌍 $|f|$와 $|g|$, $f^+$와 $g^+$, $f^-$와 $g^-$가 각각 $\mu$-거의 어디서나 같다. 마르코프 부등식 항목의 (4)에 의해 $\int |f|\,d\mu = \int |g|\,d\mu$이므로 $f$와 $g$의 $\mu$-적분가능성은 같은 조건이다. 둘이 $\mu$-적분가능하면 같은 (4)에 의해 $\int_A f^+\,d\mu = \int_A g^+\,d\mu$, $\int_A f^-\,d\mu = \int_A g^-\,d\mu$이므로 $\int_A f\,d\mu = \int_A g\,d\mu$이다.

**(8)** 마르코프 부등식 항목의 (2)에 의해 $\mu(\{h = \infty\}) = 0$이고, [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (2)에 의해 $\{h = \infty\} \in \mathcal{M}$이므로 이것은 측도가 0 인 집합이다. 같은 항목의 (3)의 (ii)에 의해 $h_0$는 가측인 실숫값 함수이고, 정의에 의해 $h(x) < \infty$인 점에서 $h_0(x) = h(x) \ge 0$, $h(x) = \infty$인 점에서 $h_0(x) = 0$이다. 그래서 $X - \{h = \infty\}$에서 $h_0 = h$이고, $[0, \infty]$ 값 함수로 본 $h_0$와 $h$는 $\mu$-거의 어디서나 같다. 마르코프 부등식 항목의 (4)에 의해 $\int_A h_0\,d\mu = \int_A h\,d\mu$이고, $A = X$이면 이 값은 $\infty$보다 작으므로 (2)에 의해 $h_0$는 $\mu$-적분가능이다.

$f$가 가측이고 $|f| \le h$가 $\mu$-거의 어디서나 성립하면, 마르코프 부등식 항목의 (4)에 의해 $\int |f|\,d\mu \le \int h\,d\mu < \infty$이므로 $f$는 $\mu$-적분가능이다.

**(9)** (i) 가측함수의 적분의 (6)에 의해 $\int |f|\,d\delta_p = |f(p)|$이고 이것은 실수이므로 $f$는 $\delta_p$-적분가능이다. 같은 (6)에 의해 $\int_A f^+\,d\delta_p = f^+(p)\,\chi_A(p)$, $\int_A f^-\,d\delta_p = f^-(p)\,\chi_A(p)$이므로, 가측함수 항목의 (5)의 $f(p) = f^+(p) - f^-(p)$에 의해 $\int_A f\,d\delta_p = f(p)\,\chi_A(p)$이다. $A = X$이면 $\chi_X(p) = 1$이다.

(ii) $f$가 $X$ 위의 실숫값 함수이면 모든 보렐 집합 $B$에서 $f^{-1}(B)$는 $X$의 부분집합, 곧 $\mathscr{P}(X)$의 원소이므로 가측함수의 정의에 의해 $f$는 가측이다. [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (1)에 의해, 모든 값이 $0$ 이상인 실숫값 함수 $u$에서 $\int u\,d\mu_x$는 $n \in X$일 때 $u(n)\,x_n$, $n \notin X$일 때 $0$인 원소열의 합이다. 이것을 $u = |f|$, $f^+$, $f^-$에 쓴다.

먼저 $n \in X$이면 [[absolute-value]]의 (4)와 (1)에 의해 $|y_n| = |f(n)|\,x_n$이므로, $\int |f|\,d\mu_x$는 수열 $(|y_n|)$의 $[0, \infty]$의 합 $\sum_{n=1}^{\infty} |y_n|$이다. [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)에 의해 이것이 $\infty$보다 작은 것은 정확히 $(|y_n|)$의 급수가 수렴할 때, 곧 $(y_n)$의 급수가 절대수렴할 때이다.

다음으로 $0$ 이상인 실수 $t$와 실수 $s$에 대하여 $\max\{st, 0\} = \max\{s, 0\}\,t$이다. $s \ge 0$이면 [[order-properties-of-reals]]의 (4)의 (iv)에 의해 $st \ge 0$이므로 양의 부분과 음의 부분의 (1)에 의해 두 쪽 모두 $st$이다. $s < 0$이면 같은 (4)의 (iv)에 의해 $st \le 0$이므로, 양의 부분과 음의 부분의 (1)에 의해 왼쪽은 $0$이고($st = 0$이면 $\max\{0, 0\} = 0$) 오른쪽은 $0 \cdot t = 0$이다. 이것을 $s = f(n)$, $t = x_n$과 $s = -f(n)$, $t = x_n$에 쓰면, $(y_n)$의 양의 부분 수열 $(a_n)$과 음의 부분 수열 $(b_n)$은 $n \in X$일 때 $a_n = f^+(n)\,x_n$, $b_n = f^-(n)\,x_n$이고 $n \notin X$일 때 $0$이다. 따라서 $\int f^+\,d\mu_x = \sum_{n=1}^{\infty} a_n$, $\int f^-\,d\mu_x = \sum_{n=1}^{\infty} b_n$이다.

$f$가 $\mu_x$-적분가능하면 이 두 값은 (1)에 의해 실수이므로, 확장된 실수의 합의 (3)의 (i)에 의해 $(a_n)$과 $(b_n)$의 급수는 수렴하고 그 합은 위의 두 값이다. $(y_n)$의 급수는 절대수렴하므로 [[absolute-convergence|절대수렴]]의 (1)에 의해 수렴하고, [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (2)에 의해 $\sum_{n=1}^{\infty} y_n = \sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n = \int f^+\,d\mu_x - \int f^-\,d\mu_x = \int f\,d\mu_x$이다.

(iii) [[measure-examples|측도의 예]]의 (4)의 (i)에 의해 $\mu^{\sharp}$는 모든 항이 $1$인 원소열로 정한 가중 셈측도이다. (ii)를 $X = \mathbb{N}$, 모든 $x_n = 1$로 쓰면 $y_n = f(n)$이다.
:::

## 예시와 반례

:::example[셈측도 위에서 부호가 바뀌는 등비 함수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f(n) = (-\tfrac{1}{2})^n$이라 합시다. $n$번째 항이 $|f(n)| = (\tfrac{1}{2})^n$인 수열은 첫째 항이 $\tfrac{1}{2}$이고 공비가 $\tfrac{1}{2}$인 등비수열이므로 [[geometric-series|등비급수]]의 (2)에 의해 그 급수는 수렴하고 합은 $\tfrac{1/2}{1 - 1/2} = 1$입니다. (9)의 (iii)에 의해 $f$는 $\mu^{\sharp}$-적분가능하고, $n$번째 항이 $f(n)$인 수열은 첫째 항이 $-\tfrac{1}{2}$이고 공비가 $-\tfrac{1}{2}$인 등비수열이므로
$$
\int f\,d\mu^{\sharp} = \frac{-1/2}{1 + 1/2} = -\frac{1}{3}
$$
입니다.

정의대로 두 부분으로 나누어 확인해 봅시다. $n$이 짝수이면 $f(n) = (\tfrac{1}{2})^n > 0$이고 홀수이면 $f(n) = -(\tfrac{1}{2})^n < 0$입니다([[power-of-a-real-number]]). 그래서 $f^+$는 홀수에서, $f^-$는 짝수에서 값이 $0$입니다. 짝수의 집합을 $E$라 하면 $f^+$의 값의 원소열을 $E$ 밖에서 $0$으로 채운 원소열은 그 원소열 자신이므로, [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (2)와 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (i)에 의해 $\int f^+\,d\mu^{\sharp} = \sum_{n \in E} f^+(n)$입니다. 홀수의 집합과 $f^-$도 같습니다. 같은 항목의 (7)의 (iii)을 $E$를 차례로 늘어놓은 첨자열 $2j$와 홀수의 집합의 첨자열 $2j - 1$에 쓰면
$$
\begin{aligned}
\int f^+\,d\mu^{\sharp} &= \sum_{j=1}^{\infty} \Bigl(\frac{1}{4}\Bigr)^j = \frac{1}{3}, \\
\int f^-\,d\mu^{\sharp} &= \sum_{j=1}^{\infty} 2\Bigl(\frac{1}{4}\Bigr)^j = \frac{2}{3}
\end{aligned}
$$
이고(등비급수의 (2)와 확장된 실수의 합의 (3)의 (i)), 그 차는 $\tfrac{1}{3} - \tfrac{2}{3} = -\tfrac{1}{3}$로 위의 값과 같습니다. 둘의 합 $1$은 (1)이 말하는 대로 $\int |f|\,d\mu^{\sharp}$입니다.
:::

:::counterexample[급수는 수렴하지만 μ♯-적분가능하지 않은 함수]
$X = \mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$에서 $f(n) = (-1)^n n^{-1}$이라 합시다. [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 $n$번째 항이 $f(n)$인 수열의 급수는 수렴하지만 절대수렴하지 않습니다. 그래서 (9)의 (iii)에 의해 $f$는 $\mu^{\sharp}$-적분가능하지 않습니다. 실제로 $|f(n)| = n^{-1}$이므로 [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (3)과 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 $\int |f|\,d\mu^{\sharp} = \infty$이고, (1)에 의해 $\int f^+\,d\mu^{\sharp}$와 $\int f^-\,d\mu^{\sharp}$ 가운데 적어도 하나는 $\infty$입니다. 급수의 합은 실수로 정해지지만, 이 함수에는 적분을 정하지 않습니다.
:::

## 확인 질문

:::check[$f$가 $\mu$-적분가능하면 $ff$도 $\mu$-적분가능한가?]
그렇지 않을 수 있습니다. $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위에서 $x_n = (n^3)^{-1}$로 정한 가중 셈측도 $\mu_x$와 $f(n) = n$을 봅시다. (9)의 (ii)에서 $f$의 $y_n$은 $n \cdot (n^3)^{-1} = (n^2)^{-1}$이고 [[p-series|p-급수]]의 (1)과 (4)에 의해 그 급수는 수렴하므로 $f$는 $\mu_x$-적분가능합니다. 그러나 $ff$의 $y_n$은 $n^2 (n^3)^{-1} = n^{-1}$이고 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산하므로 $ff$는 $\mu_x$-적분가능하지 않습니다.
:::

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $h(1) = 2$, $h(2) = \infty$이면 (8)의 $h_0$와 그 적분은 무엇인가?]
$h_0(1) = 2$, $h_0(2) = 0$입니다. [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)에 의해 $\int h\,d\delta_1 = h(1) = 2 < \infty$이므로 (8)을 쓸 수 있고, $\{h = \infty\} = \{2\}$는 $\delta_1(\{2\}) = 0$인 측도가 0 인 집합입니다. (9)의 (i)에 의해 $\int h_0\,d\delta_1 = h_0(1) = 2$로 $\int h\,d\delta_1$과 같습니다. 두 함수는 측도가 0 인 점 $2$에서만 다릅니다.
:::
