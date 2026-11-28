---
title: L¹ 수렴과 μ-거의 어디서나 수렴
title_en: L¹ Convergence and Convergence μ-Almost Everywhere
aliases: [L¹ 수렴과 거의 어디서나 수렴, L¹ 수렴하는 열의 부분수열, convergence in L1 and almost everywhere, subsequence converging almost everywhere]
kind: theorem
field: measure-theory
msc: ["28A20", "28A25"]
level: undergrad
summary: L¹ 수렴하는 함수열에서 가장 작은 번호로 정한 부분수열이 측도가 0 인 식으로 정한 집합 밖에서 극한으로 수렴하고 μ-적분가능한 하나의 함수로 지배된다는 것, 지배 수렴하는 열은 L¹ 수렴한다는 것, 차가 t 이상인 점의 집합의 측도가 0 으로 간다는 것, 측도가 양수인 점에서는 열 전체가 수렴한다는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, sequence, limit-of-sequence, basic-limits, limit-of-sum-and-product, limit-is-unique, series-and-partial-sums, comparison-test, harmonic-series-diverges, power-set, finite-set, number-of-elements-is-unique, measurable-function, indicator-function, extended-nonnegative-reals, extended-measurable-function, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, markov-inequality-and-null-integral, integrable-function-for-a-measure, linearity-of-the-measure-integral, dominated-convergence-theorem-for-integrals, l1-seminorm, l1-cauchy-subsequence, riesz-fischer-theorem]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.2절 The integral of nonnegative measurable functions, Example 5.14 (p.131–132); 7.2절 Hölder-Riesz and Minkowski inequalities, Example 7.11 (p.205) 와 그 앞 문단 (p.205); 7.3절 The spaces Lp, Theorem 7.19 (p.209), Corollary 7.21 과 그 증명 (p.212); 8.1절 Definitions and examples, Theorem 8.9 와 그 증명, Example 8.10 (p.228), Theorem 8.11 과 그 뒤 문단 (p.229); 8.2절 Riesz–Weyl Theorem, Example 8.14 뒤 문단 (p.233); 8.4절 Relations between notions of convergence, 그림 설명 (p.246)
    checked: original
    note: "(1)은 출처 Corollary 7.21 (a)(p.212)의 p = 1 인 경우이다. 출처는 'Theorem 7.20 의 증명을 따라가면' 부분수열 (f_{k_j}) 와 f̃, g ∈ Lᵖ 가 있어 f_{k_j} → f̃ µ a.e., |f_{k_j}| ≤ g µ a.e. 이고, f_k → f̃ 와 f_k → f 에서 f = f̃ 라고 증명한다. 이 항목은 증명 속 구성을 리스–피셔 정리 항목의 진술에 올려 두었으므로 그것을 인용하고, 예외 집합을 식으로 정한 N = E ∪ {f ≠ f̃} 로 적었다. (2)는 출처 Theorem 7.19(p.209, Lᵖ 의 지배 수렴 정리)와 Theorem 8.11(p.229)의 p = 1 인 경우이고, 이 사이트에서는 적분의 지배 수렴 정리의 (1)의 (ii)에 이미 있는 것을 L¹ 반노름으로 옮겨 적은 것이다. (3)은 출처 Theorem 8.9(p.228, 평균 p 수렴이면 측도 수렴)의 p = 1 인 경우이고, 출처의 증명도 µ(A_k(ξ))ξᵖ ≤ ∥f_k − f∥ᵖ_p 로 마르코프 부등식과 같은 길이다. 이 항목은 '측도 수렴'이라는 이름을 정의하지 않았다. 출처 Theorem 8.11 뒤 문단(p.229)은 평균 p 수렴이 일반적으로 a.e. 수렴을 주지 않지만 리스–피셔 정리가 a.e. 수렴하는 부분수열을 준다고 적고, 8.4절의 그림 설명(p.246)은 점선 화살표가 부분수열로 옮긴 뒤에만 성립하는 관계라고 적는다. 출처는 p.233 에서 Example 8.14(르베그 측도 위의 굴러가는 구간)가 평균 p 수렴한다는 것(Exercise 8.5)으로 평균 p 수렴이 a.e. 수렴을 주지 않는다고 결론짓는다. 이 강의는 그 측도를 만들지 않으므로 그 예를 옮기지 않았다. (4)는 이 강의의 측도의 예(디랙 측도, 셈측도)에서 열 전체가 점마다 수렴한다는 것을 보이려고 진술에 둔 것이다. 확인 질문 '모든 양의 실수 $t$에서 (3)의 측도가 $0$으로 가면 L¹ 수렴하는가?'는 출처 Example 8.10(p.228, 측도 수렴하지만 평균 p 수렴하지 않는 kχ_{[0, 1/k]})과 같은 물음이다. 반례 'L¹ 수렴하지만 열 전체를 지배하는 μ♯-적분가능한 함수가 없는 예'의 마지막 단계(값이 1/n 이상인 함수는 μ♯-적분가능하지 않다)는 출처 Example 7.11(p.205, f(k) = 1/k 가 L¹(ℕ, P(ℕ), µ♯) 에 들지 않는다)과 같은 대상이다. 확인 질문 '$\\mu$가 셈측도 $\\mu^{\\sharp}$이면 (1)에서 부분수열로 옮길 필요가 있는가?'에 쓰는 '셈측도의 측도가 0 인 부분집합은 공집합뿐'은 출처 p.205 첫 문단에도 있다. 예시 '주어진 극한과 리스–피셔 극한이 다른 점'의 디랙 측도 위의 반노름 계산은 출처 Example 5.14(p.131–132)의 ∫ f dδ_{x₀} = f(x₀) 를 x₀ = 1 에서 쓴 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(리스–피셔 극한을 식으로 정한 E 와 첨자열로 만든 것, ∫g 의 어림, 한 점의 측도가 양수일 때의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간은 [[measure|측도와 측도공간]]의 것이고, 측도가 0 인 집합, $\mu$-거의 어디서나, 예외 집합은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수, 집합 $\{f \ne u\}$, $\{|f_n - f| \ge t\}$와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이다. $\mu$-적분가능은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이고, $\mathcal{L}^1(\mu)$, L¹ 반노름 $\lVert \cdot \rVert_1$, L¹ 수렴은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 것이다. 함수열의 부분수열과 (2)의 첨자열은 [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 것이고, $g$, $E$, $g_0$와 리스–피셔 극한은 [[riesz-fischer-theorem|리스–피셔 정리 (L¹)]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이다.

1. (μ-거의 어디서나 수렴하는 부분수열) $(f_n)$이 $\mathcal{L}^1(\mu)$의 함수열이고 $f \in \mathcal{L}^1(\mu)$이며 $(f_n)$이 $f$로 L¹ 수렴한다고 하자. 그러면 $(f_n)$은 L¹ 코시 열이다. 그 (2)의 첨자열을 $(k_j)$, 리스–피셔 정리의 $g$, $E$와 리스–피셔 극한을 $\tilde f$라 하고 $N = E \cup \{f \ne \tilde f\}$로 두자.
   - (i) $N$은 측도가 0 인 집합이다.
   - (ii) $X - N$의 모든 원소 $x$에서 실수열 $(f_{k_j}(x))$는 $f(x)$로 수렴한다. 따라서 "$(f_{k_j}(x))$가 $f(x)$로 수렴한다"는 $\mu$-거의 어디서나 성립한다.
   - (iii) $g_0$는 $\mu$-적분가능하고, $X - E$의 모든 원소 $x$와 모든 자연수 $j$에서 $|f_{k_j}(x)| \le g_0(x)$이다. 따라서 모든 $j$에서 $|f_{k_j}| \le g_0$가 $\mu$-거의 어디서나 성립한다.
2. (지배 수렴하면 L¹ 수렴한다) $(f_n)$이 $X$ 위의 실숫값 함수열로서 모든 $f_n$이 $\mathcal{M}$-가측이고, $f$가 $X$ 위의 $\mathcal{M}$-가측인 실숫값 함수이며, $G$가 $X$ 위의 $\mu$-적분가능한 실숫값 함수라 하자. 측도가 0 인 집합 $N'$이 있어, $X - N'$의 모든 원소 $x$와 모든 자연수 $n$에서 $|f_n(x)| \le G(x)$이고 $(f_n(x))$가 $f(x)$로 수렴하면, 모든 $f_n$과 $f$는 $\mathcal{L}^1(\mu)$의 원소이고 $(f_n)$은 $f$로 L¹ 수렴한다.
3. (차가 큰 점의 집합) $(f_n)$이 $\mathcal{L}^1(\mu)$의 함수열이고 $f \in \mathcal{L}^1(\mu)$이며 $(f_n)$이 $f$로 L¹ 수렴하면, 모든 양의 실수 $t$와 자연수 $n$에서 $\{|f_n - f| \ge t\} \in \mathcal{M}$이고 그 측도는 실수이며
   $$
   t\,\mu(\{|f_n - f| \ge t\}) \le \lVert f_n - f \rVert_1
   $$
   이다. 따라서 $n$번째 항이 $\mu(\{|f_n - f| \ge t\})$인 실수열은 $0$으로 수렴한다.
4. (측도가 양수인 점) $(f_n)$, $f$가 (3)과 같고, $p \in X$에서 $\{p\} \in \mathcal{M}$이고 $\mu(\{p\})$가 양의 실수이면, 모든 $u \in \mathcal{L}^1(\mu)$에서 $|u(p)|\,\mu(\{p\}) \le \lVert u \rVert_1$이고, 실수열 $(f_n(p))$는 $f(p)$로 수렴한다.
:::

:::english
Measure spaces are as in the entry on measures, and sets of measure zero, $\mu$-almost everywhere and exceptional sets are as in the entry on sets of measure zero. Real-valued functions on $X$, the sets $\{f \ne u\}$, $\{|f_n - f| \ge t\}$ and $\mathcal{M}$-measurability are as in the entry on measurable functions. $\mu$-integrability is as in the entry on $\mu$-integrable functions, and $\mathcal{L}^1(\mu)$, the L¹ seminorm $\lVert \cdot \rVert_1$ and L¹ convergence are as in the entry on the L¹ seminorm and L¹ convergence. Subsequences of sequences of functions and the index sequence of (2) are as in the entry on rapidly converging subsequences of L¹-Cauchy sequences, and $g$, $E$, $g_0$ and the Riesz–Fischer limit are as in the entry on the Riesz–Fischer theorem (L¹). Below, $(X, \mathcal{M}, \mu)$ is a measure space.

1. (A subsequence converging $\mu$-almost everywhere) Let $(f_n)$ be a sequence in $\mathcal{L}^1(\mu)$, let $f \in \mathcal{L}^1(\mu)$, and suppose that $(f_n)$ converges to $f$ in L¹. Then $(f_n)$ is a Cauchy sequence in L¹. Let $(k_j)$ be its index sequence of (2), let $g$, $E$ be those of the Riesz–Fischer theorem, let $\tilde f$ be the Riesz–Fischer limit, and put $N = E \cup \{f \ne \tilde f\}$.
   - (i) $N$ is a set of measure zero.
   - (ii) For every $x \in X - N$, the real sequence $(f_{k_j}(x))$ converges to $f(x)$. Hence "$(f_{k_j}(x))$ converges to $f(x)$" holds $\mu$-almost everywhere.
   - (iii) $g_0$ is $\mu$-integrable, and $|f_{k_j}(x)| \le g_0(x)$ for every $x \in X - E$ and every natural number $j$. Hence $|f_{k_j}| \le g_0$ holds $\mu$-almost everywhere for every $j$.
2. (Dominated convergence implies L¹ convergence) Let $(f_n)$ be a sequence of real-valued functions on $X$ with every $f_n$ $\mathcal{M}$-measurable, let $f$ be an $\mathcal{M}$-measurable real-valued function on $X$, and let $G$ be a $\mu$-integrable real-valued function on $X$. If there is a set $N'$ of measure zero such that $|f_n(x)| \le G(x)$ for every $x \in X - N'$ and every natural number $n$ and $(f_n(x))$ converges to $f(x)$ for every $x \in X - N'$, then every $f_n$ and $f$ belong to $\mathcal{L}^1(\mu)$ and $(f_n)$ converges to $f$ in L¹.
3. (Sets where the difference is large) If $(f_n)$ is a sequence in $\mathcal{L}^1(\mu)$, $f \in \mathcal{L}^1(\mu)$ and $(f_n)$ converges to $f$ in L¹, then for every positive real number $t$ and every natural number $n$, $\{|f_n - f| \ge t\} \in \mathcal{M}$, its measure is a real number, and
   $$
   t\,\mu(\{|f_n - f| \ge t\}) \le \lVert f_n - f \rVert_1.
   $$
   Hence the real sequence whose $n$-th term is $\mu(\{|f_n - f| \ge t\})$ converges to $0$.
4. (Points of positive measure) Let $(f_n)$, $f$ be as in (3). If $p \in X$, $\{p\} \in \mathcal{M}$ and $\mu(\{p\})$ is a positive real number, then $|u(p)|\,\mu(\{p\}) \le \lVert u \rVert_1$ for every $u \in \mathcal{L}^1(\mu)$, and the real sequence $(f_n(p))$ converges to $f(p)$.
:::

## 직관

L¹ 수렴은 넓이로 재는 수렴이어서, 모든 점에서 값이 수렴한다는 것을 늘 주지는 않습니다. [[riesz-fischer-theorem|리스–피셔 정리]]의 예시에서는 측도가 0 인 점 $2$에서 값이 수렴하지 않습니다. (1)은 그 대신 부분수열로 옮기면 측도가 0 인 집합 밖에서 점마다 수렴한다는 것입니다. 증명은 새 논법이 필요 없습니다. L¹ 수렴하는 열은 L¹ 코시 열이므로 리스–피셔 정리의 구성을 그대로 쓸 수 있고, 그 구성이 주는 극한 $\tilde f$와 처음의 극한 $f$는 둘 다 L¹ 극한이어서 $\mu$-거의 어디서나 같습니다. 그래서 부분수열은 $E$와 $\{f \ne \tilde f\}$ 밖에서 $f$로 수렴합니다. 두 집합 모두 식으로 정해져 있으므로 예외 집합을 고를 일이 없습니다.

(2)는 거꾸로, 점마다의 수렴에 하나의 적분가능한 지붕이 더해지면 L¹ 수렴이 된다는 것으로, [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]를 반노름의 말로 다시 읽은 것입니다. 지붕이 없으면 점마다 수렴해도 L¹ 수렴하지 않을 수 있습니다(그 항목의 반례). 지붕은 충분조건이고, 아래 반례처럼 열 전체를 덮는 적분가능한 지붕이 없어도 L¹ 수렴할 수 있습니다. 그런 열에서도 (1)의 부분수열은 지붕 $g_0$ 아래에 있습니다.

(3)은 마르코프 부등식을 차에 쓴 것입니다. 차가 $t$ 이상인 곳의 측도는 넓이를 $t$로 나눈 것을 넘지 못하므로, 넓이가 $0$으로 가면 그 측도도 $0$으로 갑니다. (4)는 그 부등식을 측도가 양수인 한 점에 쓴 것입니다. $\mathbb{N}$ 위의 셈측도에서는 모든 점이 이런 점이고, $\mathcal{M} = \mathscr{P}(X)$ 위의 디랙 측도 $\delta_p$에서는 점 $p$가 이런 점이며 나머지 점들의 집합은 측도가 0 입니다. 그래서 이 두 측도에서는 L¹ 수렴하는 열 전체가 $\mu$-거의 어디서나 수렴합니다.

## 증명

:::idea
(1)은 리스–피셔 정리를 L¹ 수렴하는 열에 쓰고 두 L¹ 극한이 $\mu$-거의 어디서나 같다는 것으로 예외 집합을 합친다. (2)는 적분의 지배 수렴 정리, (3)과 (4)는 마르코프 부등식과 지시함수의 적분이다.
:::

:::hint
$\{f \ne \tilde f\}$가 가측이라는 것은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (4)의 (iii)이 준다. $f$와 $\tilde f$가 둘 다 가측이기 때문이다.
:::

:::proof
[[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 성질은 "반노름 항목의 (n)"으로, [[riesz-fischer-theorem|리스–피셔 정리 (L¹)]]의 성질은 "리스–피셔 항목의 (n)"으로, [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 성질은 "거의 어디서나 항목의 (n)"으로 인용한다.

**(1)** [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 (1)에 의해 $(f_n)$은 L¹ 코시 열이므로 리스–피셔 정리를 쓸 수 있다.

(i) 리스–피셔 항목의 (2)에 의해 $E$는 측도가 0 인 집합이다. 같은 항목의 (3)에 의해 $\tilde f$는 가측이고 $f$도 가측이므로, 거의 어디서나 항목의 (4)의 (iii)에 의해 $\{f \ne \tilde f\} \in \mathcal{M}$이다. 리스–피셔 항목의 (4)에 의해 $(f_n)$은 $\tilde f$로 L¹ 수렴하고 가정에 의해 $f$로도 L¹ 수렴하므로, 반노름 항목의 (3)의 (i)에 의해 $f = \tilde f$가 $\mu$-거의 어디서나 성립하고, 거의 어디서나 항목의 (4)의 (iii)에 의해 $\mu(\{f \ne \tilde f\}) = 0$이다. 거의 어디서나 항목의 (1)의 (ii)에 의해 두 측도가 0 인 집합의 합집합 $N$은 측도가 0 인 집합이다.

(ii) $x \in X - N$이면 $x \notin E$이므로 리스–피셔 극한의 정의와 리스–피셔 항목의 (3)에 의해 $(f_{k_j}(x))$는 $\tilde f(x)$로 수렴하고, $x \notin \{f \ne \tilde f\}$이므로 $\tilde f(x) = f(x)$이다. $N$이 측도가 0 인 집합이므로 $\mu$-거의 어디서나의 정의에 의해 둘째 문장이 나온다.

(iii) 리스–피셔 항목의 (2)와 (3)이다. $E$가 측도가 0 인 집합이므로 $\mu$-거의 어디서나의 정의에 의해 둘째 문장이 나온다.

**(2)** $N'$은 [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]의 (1)의 가정을 만족한다. 그 (1)의 (i)에 의해 모든 $f_n$과 $f$는 $\mu$-적분가능하므로 $\mathcal{L}^1(\mu)$의 원소이고, 그 (1)의 (ii)에 의해 $n$번째 항이 $\int |f_n - f|\,d\mu$인 실수열은 $0$으로 수렴한다. 반노름 항목의 (1)의 (ii)에 의해 그 항은 $\lVert f_n - f \rVert_1$이다.

**(3)** 반노름 항목의 (1)의 (i)에 의해 $f_n - f \in \mathcal{L}^1(\mu)$이고, $w = |f_n - f|$는 [[measurable-function|가측함수]]의 (5)에 의해 가측이며 모든 값이 $0$ 이상이므로 $[0, \infty]$ 값 가측함수로도 본다([[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 맨 위의 약속). [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 (1)에 의해 $\{w \ge t\} \in \mathcal{M}$이고 $t\,\mu(\{w \ge t\}) \le \int w\,d\mu = \lVert f_n - f \rVert_1$이며, 같은 항목의 (2)에 의해 $\mu(\{w \ge t\})$는 실수이다($\int w\,d\mu$가 실수이므로). [[order-properties-of-reals]]의 (6)의 (i)과 (iv)에 의해 $0 \le \mu(\{w \ge t\}) \le t^{-1}\lVert f_n - f \rVert_1$이다. 가정과 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 오른쪽은 $0$으로 수렴하므로, 모든 양의 실수 $\varepsilon$에 대하여 어떤 번호부터 $|\mu(\{w \ge t\}) - 0| \le t^{-1}\lVert f_n - f \rVert_1 < \varepsilon$이고([[absolute-value]]의 (1)), [[limit-of-sequence|수열의 극한]]의 정의에 의해 결론이 나온다.

**(4)** $c = \mu(\{p\})$로 두자. $u \in \mathcal{L}^1(\mu)$에서 $q = |u(p)|\chi_{\{p\}}$로 두면 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $q$는 $\mu$-적분가능하고 $\int q\,d\mu = |u(p)|\,c$이다. [[indicator-function|지시함수]]의 (1)에 의해 $q(p) = |u(p)|$이고 $x \ne p$이면 $q(x) = 0 \le |u(x)|$이므로 모든 점에서 $q \le |u|$이다. 반노름 항목의 (1)의 (ii)에 의해 $|u|$는 $\mu$-적분가능하므로 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 (4)에 의해 $|u(p)|\,c \le \int |u|\,d\mu = \lVert u \rVert_1$이다. 이것을 $u = f_n - f$(반노름 항목의 (1)의 (i))에 쓰고 [[order-properties-of-reals]]의 (6)의 (i)과 (iv)로 $c^{-1}$을 곱하면 $|f_n(p) - f(p)| \le c^{-1}\lVert f_n - f \rVert_1$이고, (3)의 증명과 같이 오른쪽이 $0$으로 수렴하므로 $(f_n(p))$는 $f(p)$로 수렴한다.
:::

## 예시와 반례

:::example[주어진 극한과 리스–피셔 극한이 다른 점]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 디랙 측도 $\delta_1$에서 $f_n(1) = n^{-1}$이고 $2$ 이상인 $m$에서 $f_n(m) = 0$이라 하고, 극한으로 $f = \chi_{\{2\}}$를 줍시다. $\{f > c\} \subseteq \mathbb{N}$이므로 [[measurable-function|가측함수]]의 (2)에 의해 이 함수들은 가측이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 $\delta_1$-적분가능합니다. [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (6)에 의해 $\lVert f_n - f \rVert_1 = |n^{-1} - 0| = n^{-1}$이고 [[basic-limits|기본적인 극한]]의 (2)에 의해 $(f_n)$은 $f$로 L¹ 수렴합니다.

리스–피셔 정리의 구성을 따라가 봅시다. $2$ 이상인 점에서는 모든 $f_{k_j}$의 값이 $0$이어서 $g$의 값이 $0$입니다. 점 $1$에서는 $(f_n(1))$이 순감소하고 양수이므로 $|d_1(1)| = k_1^{-1}$, $|d_{j+1}(1)| = k_j^{-1} - k_{j+1}^{-1}$이고, $v_n = 2k_1^{-1} - k_n^{-1}$로 두면 $v_1 = k_1^{-1} = |d_1(1)|$이고 $v_{n+1} = v_n + (k_n^{-1} - k_{n+1}^{-1})$이므로, [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 $v_n$이 $(|d_j(1)|)$의 $n$번째 부분합이고 $v_n \le 2$입니다. 그래서 $[0, \infty]$의 합으로 $g(1) \le 2$입니다. 그래서 $E = \emptyset$이고, $(k_j^{-1})$은 [[subsequence|부분수열]]의 (3)에 의해 $0$으로 수렴하므로 리스–피셔 극한 $\tilde f$는 값이 $0$인 상수함수입니다.

그러면 $\{f \ne \tilde f\} = \{2\}$이고 $N = \{2\}$이며, [[measure-examples|측도의 예]]의 (2)에 의해 $\delta_1(N) = 0$입니다. (1)의 (ii)대로 $N$ 밖의 점 $1$과 $3$ 이상인 점에서 $(f_{k_j}(x))$는 $f(x) = 0$으로 수렴합니다. 점 $2$에서는 모든 항이 $0$인데 $f(2) = 1$이어서 $f(2)$로 수렴하지 않습니다. 주어진 L¹ 극한의 측도가 0 인 점에서의 값은 부분수열의 극한과 다를 수 있고, $N$이 그 점을 덮습니다.
:::

:::counterexample[L¹ 수렴하지만 열 전체를 지배하는 μ♯-적분가능한 함수가 없는 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f_n = n^{-1}\chi_{\{n\}}$이라 합시다. [[measure-examples|측도의 예]]의 (4)의 (i)과 (3)에 의해 $\mu^{\sharp}(\{n\}) = 1$이므로 μ-적분가능한 함수와 그 적분의 (6)의 (i)과 [[l1-seminorm|L¹ 반노름]]의 (1)의 (ii)에 의해 $\lVert f_n \rVert_1 = n^{-1}$이고, 기본적인 극한의 (2)에 의해 $(f_n)$은 값이 $0$인 상수함수로 L¹ 수렴합니다.

$G \in \mathcal{L}^1(\mu^{\sharp})$가 모든 $n$에서 $|f_n| \le G$를 $\mu^{\sharp}$-거의 어디서나 만족한다고 해 봅시다. [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (i)에 의해 이것은 모든 점에서 성립하므로, 점 $n$에서 $n^{-1} = |f_n(n)| \le G(n)$입니다. [[harmonic-series-diverges|조화급수의 발산]]의 (2)와 [[comparison-test|비교 판정법]]의 (3)에 의해 $(|G(n)|)$의 급수는 발산하므로, L¹ 반노름의 (5)의 (i)에 의해 $G \notin \mathcal{L}^1(\mu^{\sharp})$이어서 모순입니다. 곧 열 전체에는 (2)의 $G$가 없지만 열은 L¹ 수렴합니다. (1)이 주는 지붕 $g_0$는 부분수열 $(f_{k_j})$만 덮습니다.
:::

## 확인 질문

:::check[$\mu$가 셈측도 $\mu^{\sharp}$이면 (1)에서 부분수열로 옮길 필요가 있는가?]
없습니다. $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이면 모든 자연수 $p$에서 $\{p\} \in \mathcal{M}$이고 [[measure-examples|측도의 예]]의 (4)의 (i)과 (3)에 의해 $\mu^{\sharp}(\{p\}) = 1$이므로, (4)에 의해 $(f_n)$이 $f$로 L¹ 수렴하면 모든 점에서 열 전체가 $f$로 수렴합니다. 이것은 [[l1-seminorm|L¹ 반노름]]의 (5)의 (iii)과 같은 결론입니다.
:::

:::check[모든 양의 실수 $t$에서 (3)의 측도가 $0$으로 가면 L¹ 수렴하는가?]
그렇지 않을 수 있습니다. 셈측도 $\mu^{\sharp}$에서 $f_n = n^{-1}\chi_{B_n}$, $B_n = \{1, \dots, 2n\} - \{1, \dots, n\}$이라 합시다. [[finite-set|유한집합]]의 (F2), [[number-of-elements-is-unique|원소의 개수]], [[measure-examples|측도의 예]]의 (4), [[measure|측도와 측도공간]]의 (2)의 (i)에 의해 $\mu^{\sharp}(B_n) = 2n - n = n$이므로 $\lVert f_n \rVert_1 = n^{-1} \cdot n = 1$이고 $(f_n)$은 $0$으로 L¹ 수렴하지 않습니다. 그러나 $t > 0$이면 [[archimedean-property|아르키메데스 성질]]에 의해 $t^{-1} < M$인 자연수 $M$이 있고, $n \ge M$이면 $n^{-1} < t$이므로 $\{|f_n| \ge t\} = \emptyset$이어서 그 측도는 $0$입니다. 또 (4)에 의해 $(f_n)$이 어떤 $f$로 L¹ 수렴했다면 모든 점에서 $f_n(m) \to f(m)$이고, $n \ge m$이면 $m \notin B_n$이어서 $f_n(m) = 0$이므로 $f$의 모든 값이 $0$이고, 그러면 $\lVert f_n - f \rVert_1 = \lVert f_n \rVert_1 = 1$이 $0$으로 가지 않아 모순입니다. 곧 $(f_n)$은 어떤 함수로도 L¹ 수렴하지 않습니다.
:::
