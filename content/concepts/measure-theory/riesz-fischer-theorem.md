---
title: 리스–피셔 정리 (L¹)
title_en: Riesz–Fischer Theorem (L¹)
aliases: [리스-피셔 정리, L¹ 의 완비성, 𝓛¹ 의 완비성, Riesz–Fischer theorem, completeness of L1]
kind: theorem
field: measure-theory
msc: ["28A25", "46E30"]
level: undergrad
summary: 𝓛¹(μ) 의 L¹ 코시 열에서 가장 작은 번호로 정한 부분수열의 이웃한 차를 급수로 더해, 그 절댓값의 합이 ∞ 인 점의 집합이 측도가 0 인 가측집합임을 보이고, 그 밖에서 부분수열의 극한, 그 위에서 0 으로 정한 함수가 μ-적분가능하며 열 전체가 그 함수로 L¹ 수렴한다는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, cauchy-sequence, subsequence, recursion-theorem, series-and-partial-sums, finite-sum-of-reals, sum-of-a-series, absolute-convergence, geometric-series, alternating-series-test, harmonic-series-diverges, power-set, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, integrable-function-for-a-measure, termwise-integration-of-series-for-a-measure, l1-seminorm, l1-cauchy-subsequence]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.5절 Exercises, Exercise 5.18 (p.158); 6.1절 Integrable Functions, Example 6.6 (p.167); 6.2절 Lebesgue dominated convergence theorem, Corollary 6.16 과 그 증명 (p.177–178); 7.3절 The spaces Lp, Theorem 7.19, Theorem 7.20 과 그 증명의 Case 1 (p.209–211), Corollary 7.22 (p.212)
    checked: original
    note: "출처 Theorem 7.20(p.209)은 p ∈ [1, ∞] 에서 동치류의 공간 (Lᵖ(X, S, µ), ∥·∥_p) 가 바나흐 공간이라고 진술한다. 이 항목은 p = 1 인 Case 1(p.210–211)만 다루고, 동치류 대신 𝓛¹(μ) 의 함수열로 'L¹ 코시 열은 𝓛¹(μ) 의 원소로 L¹ 수렴한다'고 진술했다. 출처의 증명은 Lemma 7.18 을 δ := 1/2 로 써서 부분수열 (f_{k_j}) 를 잡고, g_m := |f_{k_1}| + Σ_{j=1}^{m−1} |f_{k_{j+1}} − f_{k_j}| 와 그 상한 g 를 두며, 민코프스키 부등식과 파투 보조정리로 g ∈ Lᵖ 를 보인 뒤 'Exercise 5.18 에 의해 X ∖ N 에서 g(x) < +∞ 인 null set N 이 있다'고 적는다(p.210). 그리고 X ∖ N 에서는 f_{k_1}(x) + Σ(f_{k_{j+1}}(x) − f_{k_j}(x)), N 위에서는 0 으로 f 를 정하고, f_{k_m} 이 망원 합이라는 것과 Theorem 7.19(Lᵖ 의 지배 수렴 정리)로 부분수열이 f 로 수렴함을 보인 다음 Lemma 7.17 로 끝낸다(p.211). 이 항목은 부분수열을 l1-cauchy-subsequence 의 (2)의 첨자열(가장 작은 번호)로 정했고, null set N 을 고르는 대신 식으로 정한 E = {g = ∞} 를 썼다. 출처가 가리키는 Exercise 5.18 (b)(p.158)가 바로 ∫f dµ < +∞ 이면 µ({f = +∞}) = 0 이라는 진술이므로, 출처의 N 으로 E 를 쓸 수 있다. 이 항목은 p = 1 이라 민코프스키와 파투 대신, 차의 열 (d_j) 에 함수항 급수의 항별 적분 항목(출처 Corollary 6.16, p.177–178 에 해당)을 썼다. 그 항목의 증명이 단조 수렴 정리와 지배 수렴 정리를 쓰므로 출처의 길과 같은 도구이다. ∫g dμ ≤ ‖f_{k_1}‖₁ + 1 은 출처의 ∥g_m∥_p ≤ ∥f_{k_1}∥_p + 1 과 같은 어림이다. 출처 Corollary 7.22(p.212)는 이 정리와 Example 5.15 에서 수열의 공간 ℓᵖ(ℝ) 가 바나흐 공간이라고 적는다. 셈측도에서 (4)를 읽으면 그 p = 1 인 경우의 함수판이 된다(이 항목은 그 예를 싣지 않았다). 반례 '열 전체의 이웃한 차를 모두 더하면 적분이 ∞ 인 예'의 수열 (−1)ⁿ/n 은 출처 Example 6.6(p.167, 르베그 측도 위의 Σ (−1)ᵏ/k · χ_{[k−1,k)} 가 적분가능하지 않다)과 같은 대상이고, 이 항목은 그 부분합을 디랙 측도 위의 상수함수로 썼다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(리스–피셔 극한을 식으로 정한 E 와 첨자열로 만든 것, ∫g 의 어림, 한 점의 측도가 양수일 때의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도가 0 인 집합은 [[measure|측도와 측도공간]]과 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, 실숫값 함수열, $[0, \infty]$ 값 함수와 집합 $\{g = \infty\}$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. $[0, \infty]$의 원소열의 합 $\sum_{j=1}^{\infty}$은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. $\mu$-적분가능, 적분과 $[0, \infty]$ 값 함수 $g$의 값 $\infty$를 $0$으로 바꾼 함수 $g_0$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이다. $\mathcal{L}^1(\mu)$, L¹ 반노름 $\lVert \cdot \rVert_1$, L¹ 수렴, L¹ 코시 열은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 것이고, 함수열의 부분수열과 L¹ 코시 열의 (2)의 첨자열은 [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 것이다.

아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $(f_n)$은 $\mathcal{L}^1(\mu)$의 L¹ 코시 열이며, $(k_j)$는 그 (2)의 첨자열이다.

**차의 열과 $g$, $E$, $f$.** $d_1 = f_{k_1}$이고 자연수 $j$마다 $d_{j+1} = f_{k_{j+1}} - f_{k_j}$인 $X$ 위의 실숫값 함수열을 $(d_j)$라 하자. $x$에서의 값이 $[0, \infty]$의 원소열의 합 $\sum_{j=1}^{\infty} |d_j(x)|$인 $X$ 위의 $[0, \infty]$ 값 함수를 $g$로, $E = \{g = \infty\}$로 둔다. 아래 (3)에 의해 $X - E$의 모든 원소 $x$에서 실수열 $(f_{k_j}(x))$는 수렴한다. $x \in X - E$이면 $f(x) = \lim_{j \to \infty} f_{k_j}(x)$, $x \in E$이면 $f(x) = 0$인 함수 $f : X \to \mathbb{R}$를 $(f_n)$의 **리스–피셔 극한**이라 부른다.

1. (망원 합) $(d_j)$는 $\mathcal{L}^1(\mu)$의 함수열이고, 모든 $x \in X$와 자연수 $n$에서 $\sum_{j=1}^{n} d_j(x) = f_{k_n}(x)$이다. 곧 $n$번째 항이 $d_n(x)$인 수열의 부분합은 $f_{k_n}(x)$이다. 또 모든 $x \in X$에서
   $$
   \begin{aligned}
   g(x) = |f_{k_1}(x)| &+ \sum_{j=1}^{\infty} |f_{k_{j+1}}(x) \\
   &\qquad - f_{k_j}(x)|
   \end{aligned}
   $$
   이다(오른쪽의 합과 덧셈은 $[0, \infty]$의 것).
2. ($g$와 $E$) $g$는 $\mathcal{M}$-가측이고 $\int g\,d\mu \le \lVert f_{k_1} \rVert_1 + 1 < \infty$이다. $E$는 측도가 0 인 집합이고, $g_0$는 $\mu$-적분가능하다.
3. (극한 함수) $X - E$의 모든 원소 $x$에서 $n$번째 항이 $d_n(x)$인 수열의 급수는 절대수렴하고, 실수열 $(f_{k_j}(x))$는 그 급수의 합으로 수렴한다. $f$는 $\mathcal{M}$-가측이고 $f \in \mathcal{L}^1(\mu)$이다. $X - E$의 모든 원소 $x$와 모든 자연수 $j$에서 $|f_{k_j}(x)| \le g_0(x) = g(x)$이고, 모든 $x \in X$에서 $|f(x)| \le g_0(x)$이다.
4. (리스–피셔 정리) 부분수열 $(f_{k_j})$는 $f$로 L¹ 수렴하고, $(f_n)$도 $f$로 L¹ 수렴한다. 따라서 $\mathcal{L}^1(\mu)$의 모든 L¹ 코시 열은 $\mathcal{L}^1(\mu)$의 어떤 원소로 L¹ 수렴한다.
:::

:::english
Measure spaces and sets of measure zero are as in the entries on measures and on sets of measure zero. Real-valued functions on $X$ and $\mathcal{M}$-measurability are as in the entry on measurable functions, and sequences of real-valued functions, $[0, \infty]$-valued functions and the set $\{g = \infty\}$ are as in the entry on measurable functions with values in $[0, \infty]$. Sums $\sum_{j=1}^{\infty}$ of sequences in $[0, \infty]$ are as in the entry on sums in the extended reals. $\mu$-integrability, integrals, and the function $g_0$ obtained from a $[0, \infty]$-valued function $g$ by replacing the value $\infty$ with $0$ are as in the entry on $\mu$-integrable functions. $\mathcal{L}^1(\mu)$, the L¹ seminorm $\lVert \cdot \rVert_1$, L¹ convergence and Cauchy sequences in L¹ are as in the entry on the L¹ seminorm and L¹ convergence, and subsequences of sequences of functions and the index sequence of (2) of a Cauchy sequence in L¹ are as in the entry on rapidly converging subsequences of L¹-Cauchy sequences.

Below, $(X, \mathcal{M}, \mu)$ is a measure space, $(f_n)$ is a Cauchy sequence in L¹ in $\mathcal{L}^1(\mu)$, and $(k_j)$ is its index sequence of (2).

**The sequence of differences and $g$, $E$, $f$.** Let $(d_j)$ be the sequence of real-valued functions on $X$ with $d_1 = f_{k_1}$ and $d_{j+1} = f_{k_{j+1}} - f_{k_j}$ for each natural number $j$. Let $g$ be the $[0, \infty]$-valued function on $X$ whose value at $x$ is the sum $\sum_{j=1}^{\infty} |d_j(x)|$ of a sequence in $[0, \infty]$, and put $E = \{g = \infty\}$. By (3) below, the real sequence $(f_{k_j}(x))$ converges for every $x \in X - E$. The function $f : X \to \mathbb{R}$ with $f(x) = \lim_{j \to \infty} f_{k_j}(x)$ for $x \in X - E$ and $f(x) = 0$ for $x \in E$ is called the **Riesz–Fischer limit** of $(f_n)$.

1. (Telescoping sums) $(d_j)$ is a sequence in $\mathcal{L}^1(\mu)$, and $\sum_{j=1}^{n} d_j(x) = f_{k_n}(x)$ for every $x \in X$ and every natural number $n$; that is, the partial sums of the sequence whose $n$-th term is $d_n(x)$ are $f_{k_n}(x)$. Moreover, for every $x \in X$,
   $$
   \begin{aligned}
   g(x) = |f_{k_1}(x)| &+ \sum_{j=1}^{\infty} |f_{k_{j+1}}(x) \\
   &\qquad - f_{k_j}(x)|
   \end{aligned}
   $$
   (the sum and the addition on the right are those of $[0, \infty]$).
2. ($g$ and $E$) $g$ is $\mathcal{M}$-measurable and $\int g\,d\mu \le \lVert f_{k_1} \rVert_1 + 1 < \infty$. $E$ is a set of measure zero, and $g_0$ is $\mu$-integrable.
3. (The limit function) For every $x \in X - E$, the series of the sequence whose $n$-th term is $d_n(x)$ converges absolutely, and the real sequence $(f_{k_j}(x))$ converges to the sum of that series. $f$ is $\mathcal{M}$-measurable and $f \in \mathcal{L}^1(\mu)$. For every $x \in X - E$ and every natural number $j$, $|f_{k_j}(x)| \le g_0(x) = g(x)$, and $|f(x)| \le g_0(x)$ for every $x \in X$.
4. (Riesz–Fischer theorem) The subsequence $(f_{k_j})$ converges to $f$ in L¹, and $(f_n)$ also converges to $f$ in L¹. Hence every Cauchy sequence in L¹ in $\mathcal{L}^1(\mu)$ converges in L¹ to some element of $\mathcal{L}^1(\mu)$.
:::

## 직관

실수에서는 코시 수열이 수렴합니다. 리스–피셔 정리는 $\mathcal{L}^1(\mu)$에서도 L¹ 반노름으로 잰 코시 열이 $\mathcal{L}^1(\mu)$의 어떤 함수로 L¹ 수렴한다는 것입니다. 어려운 점은 극한이 될 함수를 먼저 만들어야 한다는 것입니다. L¹ 코시 열이라도 점마다의 값 $(f_n(x))$는 수렴하지 않을 수 있으므로(아래 예시의 점 $2$), 점마다 극한을 잡는 것으로는 함수가 정해지지 않습니다.

그래서 빠르게 수렴하는 부분수열을 씁니다. [[l1-cauchy-subsequence|빠르게 수렴하는 부분수열]]의 걸음 $d_{j+1} = f_{k_{j+1}} - f_{k_j}$은 반노름이 $2^{-j}$보다 작으므로, 그 절댓값들을 모두 더한 함수 $g$의 적분이 실수입니다. 적분이 실수인 $0$ 이상의 함수는 측도가 0 인 집합 밖에서 값이 실수이므로, $g$가 실수인 점에서는 걸음들의 급수가 절대수렴하고 부분수열의 값이 수렴합니다. 걸음들의 합이 망원 합이어서 $n$번째 부분합이 바로 $f_{k_n}$이기 때문입니다. 비유하면 각 점에서 부분수열의 값이 움직인 거리를 모두 더한 것이 $g(x)$이고, 움직인 거리의 합이 유한한 점에서는 값이 어딘가에 멈춥니다.

$g(x) = \infty$인 점들의 집합 $E$는 측도가 0 이지만 비어 있지 않을 수 있습니다. 출처는 "측도가 0 인 집합 $N$이 있어 그 밖에서 $g$가 실수"라고 적는데, 이 항목은 그런 $N$ 가운데 하나를 고르지 않고 식으로 정해진 $E = \{g = \infty\}$를 씁니다. $E$ 위에서는 값을 $0$으로 정하지만, $E$의 측도가 $0$이므로 이 값은 반노름에 나타나지 않습니다.

## 증명

:::idea
차의 열 $(d_j)$에 [[termwise-integration-of-series-for-a-measure|함수항 급수의 항별 적분]]을 쓴다. 그 항목의 부분합이 망원 합으로 $f_{k_n}$이 되므로, 그 항목의 결론이 그대로 부분수열의 L¹ 수렴이 되고, 코시 열의 부분수열이 수렴하면 열 전체가 수렴한다.
:::

:::hint
$\int |d_1|\,d\mu = \lVert f_{k_1} \rVert_1$이고 $j \ge 1$에서 $\int |d_{j+1}|\,d\mu < 2^{-j}$이다. $2^{-j}$의 합은 첫째 항과 공비가 $\tfrac{1}{2}$인 등비급수의 합이다.
:::

:::hint
$n$번째 항이 $d_n(x)$인 수열의 부분합이 $f_{k_n}(x)$라는 것은 [[series-and-partial-sums|급수와 부분합]]의 (1)로, 수열 $v_n = f_{k_n}(x)$가 $v_1 = d_1(x)$, $v_{n+1} = v_n + d_{n+1}(x)$를 만족한다는 것을 보이면 된다.
:::

:::proof
[[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 성질은 "반노름 항목의 (n)"으로, [[termwise-integration-of-series-for-a-measure|함수항 급수의 항별 적분]]의 성질은 "항별 적분 항목의 (n)"으로, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 성질은 "합 항목의 (n)"으로 인용한다.

**(1)** 순서쌍 $(j, x)$마다 $d_j(x)$는 $j = 1$이면 $f_{k_1}(x)$, $j \ge 2$이면 $f_{k_j}(x) - f_{k_{j-1}}(x)$로 정해진 실수이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $(d_j)$는 실숫값 함수열이다. 반노름 항목의 (1)의 (i)에 의해 모든 $d_j$는 $\mathcal{L}^1(\mu)$의 원소이다. $x \in X$를 고정하고 $v_n = f_{k_n}(x)$로 두면 $v_1 = d_1(x)$이고 $v_{n+1} = v_n + (f_{k_{n+1}}(x) - f_{k_n}(x)) = v_n + d_{n+1}(x)$이므로([[real-number-arithmetic]]), [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 $(v_n)$은 $n$번째 항이 $d_n(x)$인 수열의 부분합 수열이고, [[finite-sum-of-reals|실수의 유한 합]]의 (1)에 의해 $\sum_{j=1}^{n} d_j(x) = f_{k_n}(x)$이다. 합 항목의 (4)를 $K = 1$로 쓰면 $g(x) = |d_1(x)| + \sum_{n=2}^{\infty} |d_n(x)|$이고, 같은 항목의 정의에 의해 $\sum_{n=2}^{\infty} |d_n(x)| = \sum_{j=1}^{\infty} |d_{j+1}(x)|$이므로 (1)의 등식이 나온다.

**(2)** $a_j = \int |d_j|\,d\mu$로 두면 반노름 항목의 (1)의 (ii)에 의해 $a_j = \lVert d_j \rVert_1$은 $0$ 이상인 실수이다. $a_1 = \lVert f_{k_1} \rVert_1$이고, [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 (2)의 (iii)에 의해 $a_{j+1} = \lVert f_{k_{j+1}} - f_{k_j} \rVert_1 < 2^{-j}$이다.

$b_1 = a_1$, $b_{j+1} = 2^{-j}$인 원소열 $(b_j)$를 생각하자. [[power-of-a-real-number|실수의 거듭제곱]]의 (3)과 (2)의 (i)에 의해 $2^{-j} = (2^{-1})^j = 2^{-1}(2^{-1})^{j-1}$이므로, $j$번째 항이 $2^{-j}$인 수열의 급수는 첫째 항과 공비가 $2^{-1}$인 등비급수이고 [[geometric-series|등비급수]]의 (2)에 의해 수렴하며 그 합은 $2^{-1}(1 - 2^{-1})^{-1} = 1$이다. 합 항목의 (3)의 (i)에 의해 $[0, \infty]$의 합으로도 $\sum_{j=1}^{\infty} 2^{-j} = 1$이다. 합 항목의 (4)와 그 정의에 의해 $\sum_{j=1}^{\infty} b_j = b_1 + \sum_{j=1}^{\infty} b_{j+1} = \lVert f_{k_1} \rVert_1 + 1$이다. 모든 $j$에서 $a_j \le b_j$이므로 합 항목의 (5)에 의해
$$
\sum_{j=1}^{\infty} \int |d_j|\,d\mu \le \lVert f_{k_1} \rVert_1 + 1 < \infty
$$
이다. 따라서 $(d_j)$는 항별 적분 항목의 가정을 만족하고, 그 항목의 $G = \sum_{j=1}^{\infty} |d_j|$는 이 항목의 $g$, 그 항목의 $E$는 이 항목의 $E$이다. 항별 적분 항목의 (1)에 의해 $g$는 $\mathcal{M}$-가측이고 $\int g\,d\mu = \sum_{j=1}^{\infty} \int |d_j|\,d\mu \le \lVert f_{k_1} \rVert_1 + 1$이며, $E$는 측도가 0 인 집합이고 $g_0$는 $\mu$-적분가능하다.

**(3)** 항별 적분 항목의 부분합 $\sum_{j=1}^{n} d_j$는 (1)에 의해 $f_{k_n}$이다. 항별 적분 항목의 (2)에 의해 $x \in X - E$이면 $(d_n(x))$의 급수는 절대수렴하고, [[absolute-convergence|절대수렴]]의 (1)에 의해 수렴한다. 급수의 합은 부분합 수열의 극한이므로([[series-and-partial-sums|급수와 부분합]]의 정의) $(f_{k_n}(x))$는 그 합 $\sum_{j=1}^{\infty} d_j(x)$로 수렴한다. 그래서 이 항목의 $f$는 항별 적분 항목의 (2)의 $f$(곧 $X - E$에서 $\sum_{j=1}^{\infty} d_j(x)$, $E$에서 $0$인 함수)와 같은 함수이고, 그 (2)에 의해 $\mathcal{M}$-가측이며 $\mu$-적분가능하고 모든 $x$에서 $|f(x)| \le g_0(x)$이다. 같은 (2)에 의해 $x \in X - E$이면 $|f_{k_n}(x)| \le g_0(x)$이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 $h_0$(값 $\infty$를 $0$으로 바꾼 함수)의 정의에 의해 $x \notin E$이면 $g_0(x) = g(x)$이다.

**(4)** 항별 적분 항목의 (4)에 의해 $n$번째 항이 $\int |f - f_{k_n}|\,d\mu$인 실수열은 $0$으로 수렴한다. 반노름 항목의 (1)의 (ii)와 (iii)에 의해 그 항은 $\lVert f - f_{k_n} \rVert_1 = \lVert f_{k_n} - f \rVert_1$이므로 $(f_{k_j})$는 $f$로 L¹ 수렴한다. $(f_n)$은 L¹ 코시 열이므로 [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 (3)의 (ii)에 의해 $(f_n)$은 $f$로 L¹ 수렴한다. $(f_n)$은 아무 L¹ 코시 열이었으므로 마지막 문장이 나온다.
:::

## 예시와 반례

:::example[디랙 측도 위에서 리스–피셔 극한을 구하기]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 디랙 측도 $\delta_1$에서 $f_n(1) = 1 - n^{-1}$, $f_n(2) = n$이고 $3$ 이상인 $m$에서 $f_n(m) = 0$이라 합시다. $\{f > c\} \subseteq \mathbb{N}$이므로 [[measurable-function|가측함수]]의 (2)에 의해 $\mathbb{N}$ 위의 실숫값 함수는 모두 가측이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 $\delta_1$-적분가능합니다. [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (6)에 의해 $\lVert f_n - \chi_{\{1\}} \rVert_1 = |1 - n^{-1} - 1| = n^{-1}$이고 [[basic-limits|기본적인 극한]]의 (2)에 의해 $0$으로 가므로, $(f_n)$은 $\chi_{\{1\}}$로 L¹ 수렴하고 [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 (1)에 의해 L¹ 코시 열입니다. 첨자 $k_j$의 값은 몰라도 됩니다. [[subsequence|부분수열]]의 (1)에 의해 $k_n \ge n$이라는 것만 씁니다.

점 $2$에서는 $(f_n(2))$가 순증가이므로 모든 $d_j(2)$가 $0$ 이상이고 $|d_j(2)| = d_j(2)$입니다. (1)에 의해 그 부분합은 $f_{k_n}(2) = k_n \ge n$이고, [[archimedean-property|아르키메데스 성질]]에 의해 이 부분합들은 위로 유계가 아니므로 $g(2) = \infty$입니다([[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 정의와 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (5)의 (iv)). 점 $1$에서도 $(f_n(1))$이 순증가이고 $0$ 이상이어서 부분합이 $f_{k_n}(1) = 1 - k_n^{-1} \le 1$이므로 $g(1) \le 1$입니다. $3$ 이상인 점에서는 모든 $d_j$의 값이 $0$이어서 $g$의 값이 $0$입니다. 따라서 $E = \{2\}$이고, (2)대로 $\delta_1(E) = 0$입니다.

기본적인 극한의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)에 의해 $(1 - n^{-1})$은 $1$로 수렴하므로, 리스–피셔 극한은 $f(1) = \lim_{j \to \infty}(1 - k_j^{-1}) = 1$([[subsequence|부분수열]]의 (3)), $f(2) = 0$, $3$ 이상인 점에서 $0$이어서 $f = \chi_{\{1\}}$입니다. 부분수열의 값 $f_{k_j}(2) = k_j$는 수렴하지 않지만 $2 \in E$이므로 $f(2)$는 $0$으로 정해집니다. (4)대로 $\lVert f_n - f \rVert_1 = n^{-1}$은 $0$으로 갑니다.
:::

:::counterexample[열 전체의 이웃한 차를 모두 더하면 적분이 ∞ 인 예]
같은 $\delta_1$에서 $s_n$을 $n$번째 항이 $(-1)^n n^{-1}$인 수열의 $n$번째 부분합이라 하고, $f_n$을 값이 $s_n$인 상수함수로 둡시다. [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 이 급수는 수렴하므로 [[cauchy-sequence|코시 수열]]의 (3)에 의해 $(s_n)$은 코시 수열이고, [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (6)에 의해 $\lVert f_n - f_m \rVert_1 = |s_n - s_m|$이므로 $(f_n)$은 L¹ 코시 열입니다. 부분수열을 거치지 않고 열 전체의 차 $D_1 = f_1$, $D_{n+1} = f_{n+1} - f_n$으로 $g$와 같은 방식의 함수 $G = \sum_{n=1}^{\infty} |D_n|$을 만들면, 모든 점 $x$에서 $D_n(x)$는 $(-1)^n n^{-1}$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 (4), (5)와 [[absolute-value]]의 (4)에 의해 $|D_n(x)| = n^{-1}$이므로 $G(x) = \sum_{n=1}^{\infty} n^{-1}$이고 [[harmonic-series-diverges|조화급수의 발산]]의 (2)와 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (ii)에 의해 $\infty$입니다. 그러면 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (6)에 의해 $\int G\,d\delta_1 = G(1) = \infty$이어서 (2)의 어림이 성립하지 않고, $\{G = \infty\} = \mathbb{N}$의 측도는 $1$입니다. 이웃한 두 항의 차의 반노름이 $n^{-1}$처럼 천천히 줄면 그 합이 실수가 아닐 수 있어서, 이 항목은 차가 $2^{-j}$보다 작은 부분수열을 씁니다.
:::

## 확인 질문

:::check[모든 항이 같은 함수 $u \in \mathcal{L}^1(\mu)$인 열에서 $g$, $E$, 리스–피셔 극한은 무엇인가?]
모든 $i$, $l$에서 $f_i - f_l = 0 \cdot u$이고 [[l1-seminorm|L¹ 반노름]]의 (1)의 (iii)에 의해 그 반노름이 $0$이므로 L¹ 코시 열입니다. 첨자 $k_j$가 무엇이든 $d_1 = u$이고 $d_{j+1}$의 값은 모두 $0$입니다. [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (4)와 (2)에 의해 $g(x) = |u(x)| + 0 = |u(x)|$이고, $|u(x)|$는 실수이므로 $E = \emptyset$입니다. 모든 점에서 $f_{k_j}(x) = u(x)$이므로 리스–피셔 극한은 $u$ 자신입니다.
:::

:::check[리스–피셔 극한 $f$와 $\mu$-거의 어디서나 같은 가측함수 $u$로도 $(f_n)$이 L¹ 수렴하는가? 다른 L¹ 극한은 어떤가?]
그렇습니다. [[l1-seminorm|L¹ 반노름]]의 (3)의 (ii)에 의해 $u \in \mathcal{L}^1(\mu)$이고 $(f_n)$은 $u$로도 L¹ 수렴합니다. 거꾸로 $(f_n)$이 어떤 $v \in \mathcal{L}^1(\mu)$로 L¹ 수렴하면 같은 항목의 (3)의 (i)에 의해 $v = f$가 $\mu$-거의 어디서나 성립합니다. 리스–피셔 극한은 그 가운데 식으로 정해진 하나입니다.
:::
