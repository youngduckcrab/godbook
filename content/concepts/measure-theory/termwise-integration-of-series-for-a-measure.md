---
title: 함수항 급수의 항별 적분
title_en: Termwise Integration of Series of Integrable Functions
aliases: [μ-적분가능한 함수항 급수의 항별 적분, 급수의 항별 적분 (측도), termwise integration of series (measure spaces), integration of series of integrable functions]
kind: theorem
field: measure-theory
msc: ["28A20", "28A25"]
level: undergrad
summary: μ-적분가능한 함수들의 열에서 절댓값의 적분의 합이 실수이면, 절댓값의 급수가 ∞ 인 점들은 측도가 0 인 가측집합을 이루고 그 밖에서 함수항 급수가 절대수렴하며, 그 집합에서 값을 0 으로 둔 합이 μ-적분가능하고 그 적분이 적분들의 급수의 합이며 부분합이 L¹ 의 뜻으로 다가간다는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, series-and-partial-sums, sum-of-a-series, finite-sum-of-reals, linearity-and-order-of-finite-sums, absolute-convergence, comparison-test, geometric-series, harmonic-series-diverges, alternating-series-test, power-of-a-real-number, sigma-algebra, power-set, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, termwise-integration-of-nonnegative-series, integral-with-respect-to-counting-measure, integrable-function-for-a-measure, linearity-of-the-measure-integral, dominated-convergence-theorem-for-integrals]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.2절 Lebesgue dominated convergence theorem, Corollary 6.16 과 그 증명 (p.177–178); 5.3절 Convergence theorems, Theorem 5.20 (p.139); 5.5절 Exercises, Exercise 5.18 (p.158)
    checked: original
    note: "출처 Corollary 6.16(p.177)은 적분가능한 함수열 (f_j) 에서 Σ_j ∫|f_j| dµ < +∞ 이면 급수 Σ_j f_j 가 µ-a.e. 적분가능한 함수 f 로 수렴하고 Σ_j ∫ f_j dµ = ∫ f dµ, lim_k ∫|f − Σ_{j≤k} f_j| dµ = 0 이라고 진술한다. 출처의 증명은 g = Σ_j |f_j| 에 베포 레비 정리(Theorem 5.20, p.139)를 쓰고, Exercise 5.18 을 들어 'g(x) < +∞ 인 µ-null 집합 N 이 있다'고 한 뒤 N 밖에서 합, N 위에서 0 으로 f 를 정하고 지배 수렴 정리를 두 번 쓴다(p.177–178). 이 항목은 N 을 식으로 정한 가측집합 E = {G = ∞} 로 두었고(μ-적분가능한 함수와 그 적분의 (8)), 부분합의 지배 함수로 출처의 g 대신 E 에서 0 으로 바꾼 실숫값 함수 G₀ 을 썼다. 출처는 둘째 결론을 f − Σ_{j≤k} f_j 에 지배 수렴 정리를 다시 써서 얻고, 이 항목은 적분의 지배 수렴 정리의 (1)의 (ii)에서 바로 얻었다. 적분들의 급수가 절대수렴한다는 것과 모든 가측집합 A 위의 꼴, (5)는 이 항목이 진술에 둔 것이다. 반례 '절댓값의 적분의 합이 ∞ 이면 항별 적분이 어긋날 수 있는 예'의 수의 배열(j 번째 함수가 j 에서 1, j+1 에서 −1)은 0 이상인 이중급수의 합의 순서 바꾸기 항목의 반례와 같은 배열이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(항별 적분의 예외 집합 E 를 식으로 정한 것, 이중급수 (3) 의 증명 길, 유계 수렴 (3) 의 경계 γ = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도가 0 인 집합, $\mu$-거의 어디서나는 [[measure|측도와 측도공간]]과 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $|f|$, $f - g$, $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, 실숫값 함수열과 $[0, \infty]$ 값 함수, 집합 $\{G = \infty\}$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이며, $[0, \infty]$ 값 함수열의 급수 $\sum_{j=1}^{\infty} |f_j|$와 실숫값 함수열의 유한 합 $\sum_{j=1}^{n} f_j$는 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 것이다. $[0, \infty]$의 원소열의 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이고, 급수의 수렴, 합의 기호, 절대수렴은 [[series-and-partial-sums|급수와 부분합]], [[sum-of-a-series|급수의 합의 기호]], [[absolute-convergence|절대수렴]]의 것이다. $\mu$-적분가능, 적분 $\int f\,d\mu$, $\int_A f\,d\mu$와 $\infty$를 $0$으로 바꾼 함수 $G_0$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이다.

아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $(f_j)$는 $X$ 위의 실숫값 함수열로서 모든 $f_j$가 $\mu$-적분가능하며, $j$번째 항이 $\int |f_j|\,d\mu$인 $[0, \infty]$의 원소열의 합이
$$
\sum_{j=1}^{\infty} \int |f_j|\,d\mu < \infty
$$
를 만족한다. $G = \sum_{j=1}^{\infty} |f_j|$, 곧 $x$에서의 값이 $\sum_{j=1}^{\infty} |f_j(x)|$인 $X$ 위의 $[0, \infty]$ 값 함수로 두고, $E = \{G = \infty\}$로 두며, 자연수 $n$마다 $S_n = \sum_{j=1}^{n} f_j$로 둔다.

1. (예외 집합) $G$는 $\mathcal{M}$-가측이고 $\int G\,d\mu = \sum_{j=1}^{\infty} \int |f_j|\,d\mu < \infty$이다. $E$는 측도가 0 인 집합이고, $G_0$는 $\mu$-적분가능하다.
2. (합으로 정한 함수) $X - E$의 모든 원소 $x$에서 $j$번째 항이 $f_j(x)$인 수열의 급수는 절대수렴하고, 모든 자연수 $n$에서 $|S_n(x)| \le G_0(x)$이다. $x \in X - E$이면 $f(x) = \sum_{j=1}^{\infty} f_j(x)$, $x \in E$이면 $f(x) = 0$인 함수 $f : X \to \mathbb{R}$는 $\mathcal{M}$-가측이고 $\mu$-적분가능하며, 모든 $x \in X$에서 $|f(x)| \le G_0(x)$이다.
3. (항별 적분) 모든 $A \in \mathcal{M}$에서 $j$번째 항이 $\int_A f_j\,d\mu$인 수열의 급수는 절대수렴하고
   $$
   \sum_{j=1}^{\infty} \int_A f_j\,d\mu = \int_A f\,d\mu
   $$
   이다.
4. (부분합의 L¹ 수렴) $n$번째 항이 $\int |f - S_n|\,d\mu$인 실수열은 $0$으로 수렴한다.
5. ($E$ 위의 값) $\varphi$가 $X$ 위의 $\mathcal{M}$-가측인 실숫값 함수이고 $X - E$의 모든 원소 $x$에서 $\varphi(x) = \sum_{j=1}^{\infty} f_j(x)$이면, $\varphi$는 $\mu$-적분가능하고 모든 $A \in \mathcal{M}$에서 $\int_A \varphi\,d\mu = \int_A f\,d\mu$이다.
:::

:::english
Measure spaces, sets of measure zero and $\mu$-almost everywhere are as in the entries on measures and on sets of measure zero. Real-valued functions on $X$ and the operations $|f|$, $f - g$ and $\mathcal{M}$-measurability are as in the entry on measurable functions; sequences of real-valued functions, $[0, \infty]$-valued functions and the set $\{G = \infty\}$ are as in the entry on $[0, \infty]$-valued measurable functions; the series $\sum_{j=1}^{\infty} |f_j|$ of a sequence of $[0, \infty]$-valued functions and the finite sums $\sum_{j=1}^{n} f_j$ of a sequence of real-valued functions are as in the entry on operations on measurable functions. Sums of sequences in $[0, \infty]$ are as in the entry on sums in the extended nonnegative reals, and convergence of series, the sum notation and absolute convergence are as in the entries on series and partial sums, on the notation for sums of series and on absolute convergence. $\mu$-integrability, the integrals $\int f\,d\mu$, $\int_A f\,d\mu$ and the function $G_0$ obtained by replacing $\infty$ with $0$ are as in the entry on $\mu$-integrable functions.

Below, $(X, \mathcal{M}, \mu)$ is a measure space and $(f_j)$ is a sequence of real-valued functions on $X$ with every $f_j$ $\mu$-integrable such that the sum of the sequence in $[0, \infty]$ whose $j$-th term is $\int |f_j|\,d\mu$ satisfies
$$
\sum_{j=1}^{\infty} \int |f_j|\,d\mu < \infty.
$$
Let $G = \sum_{j=1}^{\infty} |f_j|$, the $[0, \infty]$-valued function on $X$ with value $\sum_{j=1}^{\infty} |f_j(x)|$ at $x$; let $E = \{G = \infty\}$; and for each natural number $n$ let $S_n = \sum_{j=1}^{n} f_j$.

1. (Exceptional set) $G$ is $\mathcal{M}$-measurable and $\int G\,d\mu = \sum_{j=1}^{\infty} \int |f_j|\,d\mu < \infty$. $E$ is a set of measure zero and $G_0$ is $\mu$-integrable.
2. (The function defined by the sum) For every $x \in X - E$ the series of the sequence whose $j$-th term is $f_j(x)$ converges absolutely, and $|S_n(x)| \le G_0(x)$ for every natural number $n$. The function $f : X \to \mathbb{R}$ with $f(x) = \sum_{j=1}^{\infty} f_j(x)$ for $x \in X - E$ and $f(x) = 0$ for $x \in E$ is $\mathcal{M}$-measurable and $\mu$-integrable, and $|f(x)| \le G_0(x)$ for every $x \in X$.
3. (Termwise integration) For every $A \in \mathcal{M}$, the series of the sequence whose $j$-th term is $\int_A f_j\,d\mu$ converges absolutely and
   $$
   \sum_{j=1}^{\infty} \int_A f_j\,d\mu = \int_A f\,d\mu.
   $$
4. ($L^1$ convergence of the partial sums) The real sequence whose $n$-th term is $\int |f - S_n|\,d\mu$ converges to $0$.
5. (Values on $E$) If $\varphi$ is an $\mathcal{M}$-measurable real-valued function on $X$ with $\varphi(x) = \sum_{j=1}^{\infty} f_j(x)$ for every $x \in X - E$, then $\varphi$ is $\mu$-integrable and $\int_A \varphi\,d\mu = \int_A f\,d\mu$ for every $A \in \mathcal{M}$.
:::

## 직관

[[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]은 $0$ 이상인 함수의 급수는 언제나 항별로 적분할 수 있다는 것이었습니다. 부호가 바뀌는 함수에서는 급수가 점마다 수렴하지 않을 수 있고, 수렴하더라도 적분들의 합과 합의 적분이 다를 수 있습니다(아래 반례). 이 항목은 절댓값의 적분을 모두 더한 것이 실수이면, 곧 "질량의 총량"이 유한하면 이런 일이 일어나지 않는다는 것입니다. 절대수렴하는 급수는 재배열해도 합이 같다는 것과 닮은 이야기이고, 여기서 바꾸는 것은 점마다의 합과 적분의 순서입니다.

먼저 $G = \sum_j |f_j|$에 $0$ 이상인 함수항 급수의 항별 적분을 쓰면 $\int G\,d\mu$가 실수이고, 그래서 $G$가 $\infty$인 점들의 집합 $E$의 측도는 $0$입니다. $E$ 밖에서는 급수가 절대수렴하고 부분합이 모두 $G$ 아래에 있으므로, $E$에서 값을 $0$으로 바꾼 $G_0$를 지배하는 함수로 삼아 [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]를 부분합에 씁니다. $E$ 위에서는 급수가 수렴하지 않을 수 있어서 합으로 $f$를 정할 수 없으므로 $0$으로 정합니다. (5)는 그 값을 무엇으로 정해도 측도가 0 인 집합 위의 일이라 적분이 바뀌지 않는다는 것입니다.

이 정리는 집합 $E$를 "$G(x) = \infty$인 점 전체"라는 조건으로 정하므로 측도가 0 인 집합을 고르지 않습니다. 셈측도에서는 측도가 0 인 집합이 공집합뿐이라 $E$가 비고, 이 정리를 쓰면 실수의 이중급수의 합의 순서를 바꾸는 정리가 나옵니다.

## 증명

:::idea
$G = \sum_j |f_j|$의 적분이 실수이므로 $E = \{G = \infty\}$의 측도가 $0$이다. $E$ 밖에서 부분합 $S_n$은 $G_0$로 지배되고 $f$로 수렴하므로 적분의 지배 수렴 정리를 쓴다.
:::

:::hint
$|S_n(x)|$는 유한 합의 절댓값이므로 $\sum_{j=1}^{n} |f_j(x)|$ 이하이고, 이것은 $G(x)$의 부분합이다.
:::

:::hint
$\int_A S_n\,d\mu$는 적분의 선형성에 의해 적분들의 급수의 $n$번째 부분합이다.
:::

:::proof
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]은 "선형성 항목의 (n)"으로, [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]는 "지배 수렴 정리의 (n)"으로, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]은 "확장된 실수의 합의 (n)"으로, [[operations-on-measurable-functions|가측함수의 연산과 극한]]은 "가측함수의 연산의 (n)"으로 인용한다.

**(1)** 각 $|f_j|$는 [[measurable-function|가측함수]]의 (5)에 의해 가측이고 모든 값이 $0$ 이상인 실숫값 함수이므로 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 가측인 $[0, \infty]$ 값 함수이다. 가측함수의 연산의 (5)에 의해 $G$는 가측이고, [[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]의 (1)에 의해 $\int G\,d\mu = \sum_{j=1}^{\infty} \int |f_j|\,d\mu$이며, 가정에 의해 이것은 $\infty$보다 작다. 적분가능성 항목의 (8)을 $h = G$로 쓰면 $E = \{G = \infty\}$는 측도가 0 인 집합이고 $G_0$는 $\mu$-적분가능하다.

**(2)** $x \in X - E$라 하자. $G(x) < \infty$이므로 확장된 실수의 합의 (3)의 (i)에 의해 $j$번째 항이 $|f_j(x)|$인 수열의 급수는 수렴하고 그 합은 $G(x)$이다. 곧 $j$번째 항이 $f_j(x)$인 수열의 급수는 절대수렴하고, [[absolute-convergence|절대수렴]]의 (1)에 의해 수렴한다. 자연수 $n$에서 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (5)와 확장된 실수의 합의 (2)에 의해
$$
\begin{aligned}
|S_n(x)| &\le \sum_{j=1}^{n} |f_j(x)| \\
&\le \sum_{j=1}^{\infty} |f_j(x)| \\
&= G(x) = G_0(x)
\end{aligned}
$$
이다(가운데의 유한 합은 항이 실수이므로 실수의 유한 합과 $[0, \infty]$의 유한 합이 같은 수이다). 또 [[finite-sum-of-reals|실수의 유한 합]]의 (1)에 의해 $S_n(x)$는 그 급수의 $n$번째 부분합이므로, [[series-and-partial-sums|급수와 부분합]]의 정의에 의해 $(S_n(x))$는 $\sum_{j=1}^{\infty} f_j(x) = f(x)$로 수렴한다.

가측함수의 연산의 (3)에 의해 각 $S_n$은 가측이다. 실수열 $(S_n(x))$가 수렴하는 $x$ 전체의 집합을 $C$라 하고, 가측함수의 연산의 (4)의 (iii)의 함수, 곧 $x \in C$이면 $\lim_n S_n(x)$, $x \notin C$이면 $0$인 가측함수를 $F$라 하자. [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (2)에 의해 $E \in \mathcal{M}$이고 [[sigma-algebra|σ-대수와 가측공간]]의 (σ1)과 (1)에 의해 $X - E \in \mathcal{M}$이다. 앞 문단에 의해 $X - E \subseteq C$이고 $x \in X - E$에서 $F(x) = f(x)$이므로, [[indicator-function|지시함수]]의 (1)에 의해 모든 $x$에서 $f(x) = F(x)\,\chi_{X - E}(x)$이다. 가측함수 항목의 (6)과 가측함수의 연산의 (3)에 의해 $f$는 가측이다.

이제 지배 수렴 정리의 (1)을 $f_k$ 자리에 $S_k$, $f$ 자리에 $f$, $g$ 자리에 $G_0$, $N$ 자리에 $E$를 넣어 쓴다. 앞의 두 문단이 그 가정이다. 그 (1)의 (i)에 의해 $f$는 $\mu$-적분가능하고 $X - E$에서 $|f| \le G_0$이며, $x \in E$에서는 $f(x) = 0 = G_0(x)$이다.

**(3)** 지배 수렴 정리의 (1)의 (iii)에 의해 실수열 $(\int_A S_n\,d\mu)$는 $\int_A f\,d\mu$로 수렴한다. 선형성 항목의 (3)에 의해 $\int_A S_n\,d\mu = \sum_{j=1}^{n} \int_A f_j\,d\mu$이고, 실수의 유한 합의 (1)에 의해 이것은 $j$번째 항이 $\int_A f_j\,d\mu$인 수열의 $n$번째 부분합이다. 그래서 급수와 부분합의 정의에 의해 이 급수는 수렴하고 그 합이 $\int_A f\,d\mu$이다.

절대수렴은 다음과 같다. 적분가능성 항목의 (3)의 (i)과 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (3)의 (i)에 의해 $\left|\int_A f_j\,d\mu\right| \le \int_A |f_j|\,d\mu \le \int |f_j|\,d\mu$이다. 가정과 확장된 실수의 합의 (3)의 (i)에 의해 $j$번째 항이 $\int |f_j|\,d\mu$인 수열의 급수는 수렴하므로, [[comparison-test|비교 판정법]]의 (2)에 의해 $j$번째 항이 $\left|\int_A f_j\,d\mu\right|$인 수열의 급수도 수렴한다.

**(4)** 지배 수렴 정리의 (1)의 (ii)에 의해 $(\int |S_n - f|\,d\mu)$는 $0$으로 수렴하고, [[absolute-value]]의 (3)에 의해 $|f - S_n| = |S_n - f|$이다.

**(5)** $\varphi$와 $f$는 가측이고 $X - E$에서 같으며 $E$는 측도가 0 인 집합이므로, $\varphi = f$가 $\mu$-거의 어디서나 성립한다. 적분가능성 항목의 (7)에 의해 $\varphi$는 $\mu$-적분가능하고 모든 $A$에서 $\int_A \varphi\,d\mu = \int_A f\,d\mu$이다.
:::

## 예시와 반례

:::example[이웃한 두 점에 걸친 등비 함수들의 급수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f_j = (-\tfrac{1}{2})^j\chi_{\{j, j+1\}}$이라 합시다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)과 [[measure-examples|측도의 예]]의 (4)에 의해 $\int |f_j|\,d\mu^{\sharp} = 2^{-j} \cdot 2$이고 $\int f_j\,d\mu^{\sharp} = 2(-\tfrac{1}{2})^j$입니다. [[geometric-series|등비급수]]의 (2)에 의해 $\sum_j 2 \cdot 2^{-j} = 2 < \infty$이므로 이 항목을 쓸 수 있고, (3)에 의해
$$
\begin{aligned}
\int f\,d\mu^{\sharp} &= \sum_{j=1}^{\infty} 2\Bigl(-\frac{1}{2}\Bigr)^j \\
&= 2 \cdot \frac{-1/2}{1 + 1/2} = -\frac{2}{3}
\end{aligned}
$$
입니다.

점마다 더해 확인해 봅시다. 점 $1$에서는 $f_1$만 $0$이 아니어서 $f(1) = -\tfrac{1}{2}$이고, $n \ge 2$이면 $f_{n-1}$과 $f_n$만 $0$이 아니어서 $f(n) = (-\tfrac{1}{2})^{n-1} + (-\tfrac{1}{2})^n = \tfrac{1}{2}(-\tfrac{1}{2})^{n-1}$입니다. 이 식은 $n = 1$에서 $\tfrac{1}{2}$이므로 $f = h - \chi_{\{1\}}$, $h(n) = \tfrac{1}{2}(-\tfrac{1}{2})^{n-1}$입니다. 같은 항목의 (9)의 (iii)과 등비급수의 (2)에 의해 $\int h\,d\mu^{\sharp} = \tfrac{1/2}{1 + 1/2} = \tfrac{1}{3}$이고, [[linearity-of-the-measure-integral|적분의 선형성]]의 (2)에 의해 $\int f\,d\mu^{\sharp} = \tfrac{1}{3} - 1 = -\tfrac{2}{3}$로 위와 같습니다. 모든 점에서 급수가 유한 합이므로 $E = \emptyset$입니다.
:::

:::counterexample[절댓값의 적분의 합이 ∞ 이면 항별 적분이 어긋날 수 있는 예]
$X = \mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$에서 $f_j = \chi_{\{j\}} - \chi_{\{j+1\}}$이라 합시다. [[linearity-of-the-measure-integral|적분의 선형성]]의 (2)와 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 모든 $j$에서 $\int f_j\,d\mu^{\sharp} = 1 - 1 = 0$이므로 적분들의 급수의 합은 $0$입니다. 점마다 더하면, 점 $1$에서는 $f_1(1) = 1$만 $0$이 아니어서 합이 $1$이고, $n \ge 2$에서는 $f_{n-1}(n) = -1$과 $f_n(n) = 1$만 $0$이 아니어서 $n$번째 이후의 부분합이 모두 $0$이므로 합이 $0$입니다. 곧 점마다의 합은 $\chi_{\{1\}}$이고 그 적분은 $1$입니다. $0 \ne 1$입니다. 여기서 $\int |f_j|\,d\mu^{\sharp} = 2$이므로 $\sum_j \int |f_j|\,d\mu^{\sharp} = \infty$여서 이 항목의 가정이 성립하지 않습니다. 이 수의 배열은 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 반례와 같습니다.
:::

## 확인 질문

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $f_j = 2^{-j}\chi_{\{1\}} + (-1)^j\chi_{\{2\}}$이면 $E$와 $f$는 무엇인가?]
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 $\int |f_j|\,d\delta_1 = |f_j(1)| = 2^{-j}$이고 그 합은 $1$이므로 이 항목을 쓸 수 있습니다. $G(1) = \sum_j 2^{-j} = 1$이고 $G(2) = \sum_j 1 = \infty$이므로 $E = \{2\}$입니다. 점 $2$에서는 $f_j(2) = (-1)^j$의 급수가 수렴하지 않으므로 합으로 값을 정할 수 없고, (2)의 $f$는 $f(1) = 1$, $f(2) = 0$입니다. $\delta_1(\{2\}) = 0$이고, (3)이 말하는 대로 $\int f\,d\delta_1 = f(1) = 1 = \sum_j 2^{-j} = \sum_j \int f_j\,d\delta_1$입니다.
:::

:::check[가정 $\sum_j \int |f_j|\,d\mu < \infty$가 성립하지 않아도 (3)의 등식이 성립할 수 있는가?]
성립할 수 있습니다. $X = \{1\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $f_j(1) = (-1)^j j^{-1}$이라 하면 $\int |f_j|\,d\delta_1 = j^{-1}$이고 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산하므로 가정이 성립하지 않습니다. 그러나 [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 점 $1$에서 급수가 수렴하고, 그 합을 값으로 하는 함수 $f$에 대해 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)로 $\int f\,d\delta_1 = f(1) = \sum_j (-1)^j j^{-1} = \sum_j \int f_j\,d\delta_1$입니다. 이 항목의 가정은 결론을 위한 충분조건입니다.
:::
