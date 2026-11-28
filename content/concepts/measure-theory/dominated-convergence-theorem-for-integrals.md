---
title: 적분의 지배 수렴 정리
title_en: Dominated Convergence Theorem for Integrals
aliases: [지배 수렴 정리 (측도), 르베그 지배 수렴 정리 (측도공간), 측도공간의 지배 수렴 정리, dominated convergence theorem, Lebesgue dominated convergence theorem]
kind: theorem
field: measure-theory
msc: ["28A20", "28A25"]
level: undergrad
summary: 측도가 0 인 집합 하나 밖에서 가측인 실숫값 함수열이 가측함수로 수렴하고 μ-적분가능한 하나의 함수로 절댓값이 막혀 있으면, 극한과 모든 항이 μ-적분가능하고 차의 절댓값의 적분이 0 으로 가며 모든 가측집합 위의 적분이 수렴한다는 것과, 예외 집합들이 가측이고 측도가 0 인 꼴의 가정에서 그런 집합을 식으로 정하는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, terms-of-convergent-series-tend-to-zero, alternating-series-test, sequence, limit-of-sequence, limit-of-sum-and-product, limits-preserve-inequalities, limit-superior-and-inferior, convergence-iff-limsup-equals-liminf, archimedean-property, geometric-series, sequence-of-sets, sigma-algebra, power-set, measurable-function, indicator-function, extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, fatou-lemma-for-integrals, markov-inequality-and-null-integral, integrable-function-for-a-measure, linearity-of-the-measure-integral]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.2절 Lebesgue dominated convergence theorem, Example 6.12 (p.172–173), Theorem 6.13 과 그 증명 (p.174–175), 그 뒤 문단과 Example 6.14 (p.175–176); 7.3절 The spaces Lp, Theorem 7.19 (p.209); 6.4절 Exercise 6.16 (p.187), Exercise 6.20 (p.187), Exercise 6.26, 6.27 (p.188)
    checked: original
    note: "출처 Theorem 6.13(p.174)은 확장된 실수에 값을 갖는 적분가능한 함수열 (f_k) 가 어떤 f ∈ M(X, S) 로 µ-a.e. 수렴하고, 모든 k 에서 |f_k| ≤ g µ-a.e. 인 적분가능한 g(확장된 실수 값도 되는 윗줄 그은 𝓛 의 원소)가 있으면 f 가 적분가능하고 모든 A ∈ S 에서 ∫_A f dµ = lim ∫_A f_k dµ 라고 진술한다. 이 항목은 실숫값 함수만 다루고, 가정을 측도가 0 인 집합 하나 밖에서 성립하는 꼴 (1)로 두었으며, 출처의 꼴은 예외 집합들이 가측이라는 것을 써서 (2)에서 그 꼴로 옮겼다. 출처는 f_k 가 적분가능하다고 가정하는데 이 항목은 f_k 가 가측이라고만 가정하고 적분가능성을 결론에 두었다. ∫|f_k − f| dµ → 0 인 (1)의 (ii)는 출처 7장 Theorem 7.19(p.209, Lᵖ 판의 지배 수렴 정리)의 p = 1 인 경우와 같은 결론이고, 그 증명이 |f_k − f|ᵖ ≤ (2g)ᵖ 에 지배 수렴 정리를 다시 쓰는 것은 이 항목의 (ii)의 증명(|f_k − f| ≤ 2g 에 보조 사실을 다시 쓴다)과 같은 길이다. 출처의 증명은 N₋₁ = {g = ±∞}, N₀ = {f_k(x) 가 f(x) 로 수렴하지 않는 점}, N_k = {|f_k| > g} 를 측도가 0 인 집합으로 두고 그 합집합 N 위에서 f_k, f, g 를 0 으로 바꾼 뒤(p.174), f_k + g 와 g − f_k 에 파투 보조정리를 써서 lim inf 와 lim sup 의 부등식 (6.2), (6.3) 을 얻는다(p.174–175). 이 항목도 예외 집합의 합집합 밖으로 줄인 함수 f_kχ_{X−N} 에 같은 두 열의 파투 보조정리를 쓰지만, 적분의 하극한을 실수열의 하극한으로 옮기는 대신 [0, ∞] 의 하극한의 정의에서 바로 ε 꼴의 부등식을 끌어냈다. g 가 실숫값이므로 N₋₁ 은 쓰지 않는다. 출처는 증명 뒤 문단(p.175)에서 지배하는 함수가 있다는 가정은 공간의 측도가 유한해도 빼놓을 수 없다고 적고 Exercise 6.26 을 가리킨다. Exercise 6.26(p.188)은 N 위의 측도 µ(A) = Σ_{i∈A} 2^{−i} 와 η_k = 2ᵏχ_{{k+1, k+2, …}} 로 지배하는 적분가능한 함수가 없음을 보이라는 문제이다. 반례 '지배하는 함수가 없을 때 적분은 수렴해도 ∫|f_k − f| 가 0 으로 가지 않는 예'는 셈측도 위에서 질량이 점점 큰 번호로 옮겨 가는 열이라는 점에서 Exercise 6.26 과, 출처 Exercise 6.27 (b)(p.188, χ_{[k, k+1)}, 실마리는 ξ = sup_k |f_k|)와 같은 발상이다. 그 둘째 문단에서 지배하는 g 가 모두 μ♯-적분가능하지 않음을 보이는 것은 출처 Example 6.14(p.175–176)가 ξ = sup_k |f_k| 가 적분가능하지 않음을 보여 지배하는 적분가능한 함수가 없다고 결론짓는 것과 같은 발상이다. 확인 질문 '$X = \\{1, 2\\}$, $\\mathcal{M} = \\mathscr{P}(X)$, $\\mu = \\delta_1$에서 $f_k = k\\chi_{\\{2\\}}$, $g$와 $f$를 값이 $0$인 상수함수로 두면 (2)의 $N$과 (1)의 결론은 무엇인가?'에서 측도가 0 인 점에서 f_k 의 값이 k 로 커져 수렴하지 않는 것은 출처 Example 6.12(p.172–173, 점 0 에서 f_k(0) = k 이고 λ({0}) = 0)와 같은 발상이다. 확인 질문 '(ii)가 성립하면 실수열 $(\\int |f_k|\\,d\\mu)$는 $\\int |f|\\,d\\mu$로 수렴하는가?'는 출처 Exercise 6.20(p.187, Scheffé 의 보조정리)의 한 방향과 같은 사실이다. 출처 Exercise 6.16(p.187)은 지배하는 함수를 수렴하는 함수열 g_k 로 바꾼 일반화이고, 이 항목은 싣지 않았다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(|∫f| = ∫|f| 의 등호 조건, 반례와 출처 Example 6.6 대조, 지배 수렴의 예외 집합 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간은 [[measure|측도와 측도공간]]의 것이고, 측도가 0 인 집합, $\mu$-거의 어디서나, 예외 집합은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $|f|$, $f - g$, 집합 $\{g < |f_k|\}$와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, $X$ 위의 실숫값 함수열은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. 집합열과 $\bigcup_{k=1}^{\infty}$은 [[sequence-of-sets|집합열]]의 것이다. $\mu$-적분가능과 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이고, 실수열의 수렴은 [[limit-of-sequence|수열의 극한]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $(f_k)$는 $X$ 위의 실숫값 함수열로서 모든 $f_k$가 $\mathcal{M}$-가측이며, $f$는 $X$ 위의 $\mathcal{M}$-가측인 실숫값 함수이고, $g$는 $X$ 위의 $\mu$-적분가능한 실숫값 함수이다.

1. (지배 수렴 정리) 측도가 0 인 집합 $N$이 하나 있어, $X - N$의 모든 원소 $x$와 모든 자연수 $k$에서 $|f_k(x)| \le g(x)$이고, $X - N$의 모든 원소 $x$에서 실수열 $(f_k(x))$가 $f(x)$로 수렴한다고 하자. 그러면 다음이 성립한다.
   - (i) 모든 $f_k$와 $f$는 $\mu$-적분가능하고, $X - N$의 모든 원소 $x$에서 $|f(x)| \le g(x)$이다.
   - (ii) $k$번째 항이 $\int |f_k - f|\,d\mu$인 실수열은 $0$으로 수렴한다.
   - (iii) 모든 $A \in \mathcal{M}$에서 $k$번째 항이 $\int_A f_k\,d\mu$인 실수열은 $\int_A f\,d\mu$로 수렴한다. 특히 $\lim_{k \to \infty} \int f_k\,d\mu = \int f\,d\mu$이다.
2. (예외 집합이 가측인 꼴의 가정) 실수열 $(f_k(x))$가 $f(x)$로 수렴하지 않는 $x \in X$ 전체의 집합을 $N_0$이라 하고, 자연수 $k$마다 $N_k = \{g < |f_k|\}$라 하자. 이들은 $\mathcal{M}$의 원소이다. 이들은 각각 "$(f_k(x))$가 $f(x)$로 수렴한다"와 "$|f_k(x)| \le g(x)$"의 예외 집합이다. $k$번째 항이 $N_k$인 집합열에 대하여
   $$
   N = N_0 \cup \bigcup_{k=1}^{\infty} N_k
   $$
   로 두자. "$(f_k(x))$가 $f(x)$로 수렴한다"가 $\mu$-거의 어디서나 성립하고, 모든 자연수 $k$에서 $|f_k| \le g$가 $\mu$-거의 어디서나 성립하면, $N$은 측도가 0 인 집합이고 (1)의 가정을 만족한다. 따라서 이때 (1)의 결론이 성립한다.
:::

:::english
Measure spaces are as in the entry on measures, and sets of measure zero, $\mu$-almost everywhere and exceptional sets are as in the entry on sets of measure zero. Real-valued functions on $X$ and the operations $|f|$, $f - g$, the set $\{g < |f_k|\}$ and $\mathcal{M}$-measurability are as in the entry on measurable functions, and sequences of real-valued functions on $X$ are as in the entry on $[0, \infty]$-valued measurable functions. Sequences of sets and $\bigcup_{k=1}^{\infty}$ are as in the entry on sequences of sets. $\mu$-integrability and the integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on $\mu$-integrable functions, and convergence of real sequences is as in the entry on limits of sequences. Below, $(X, \mathcal{M}, \mu)$ is a measure space, $(f_k)$ is a sequence of real-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable, $f$ is an $\mathcal{M}$-measurable real-valued function on $X$, and $g$ is a $\mu$-integrable real-valued function on $X$.

1. (Dominated convergence theorem) Suppose there is a single set $N$ of measure zero such that $|f_k(x)| \le g(x)$ for every $x \in X - N$ and every natural number $k$, and the real sequence $(f_k(x))$ converges to $f(x)$ for every $x \in X - N$. Then:
   - (i) Every $f_k$ and $f$ are $\mu$-integrable, and $|f(x)| \le g(x)$ for every $x \in X - N$.
   - (ii) The real sequence whose $k$-th term is $\int |f_k - f|\,d\mu$ converges to $0$.
   - (iii) For every $A \in \mathcal{M}$, the real sequence whose $k$-th term is $\int_A f_k\,d\mu$ converges to $\int_A f\,d\mu$. In particular $\lim_{k \to \infty} \int f_k\,d\mu = \int f\,d\mu$.
2. (Hypotheses in the form with measurable exceptional sets) Let $N_0$ be the set of all $x \in X$ for which the real sequence $(f_k(x))$ does not converge to $f(x)$, and for each natural number $k$ let $N_k = \{g < |f_k|\}$. These are elements of $\mathcal{M}$. They are the exceptional sets of "$(f_k(x))$ converges to $f(x)$" and of "$|f_k(x)| \le g(x)$" respectively. For the sequence of sets whose $k$-th term is $N_k$, put
   $$
   N = N_0 \cup \bigcup_{k=1}^{\infty} N_k.
   $$
   If "$(f_k(x))$ converges to $f(x)$" holds $\mu$-almost everywhere and $|f_k| \le g$ holds $\mu$-almost everywhere for every natural number $k$, then $N$ is a set of measure zero satisfying the hypothesis of (1). Hence the conclusions of (1) hold in that case.
:::

## 직관

점마다 수렴하는 함수열이라도 적분은 극한의 적분으로 가지 않을 수 있습니다. [[fatou-lemma-for-integrals|적분의 파투 보조정리]]의 반례처럼 높이가 같은 덩어리가 점점 큰 번호로 옮겨 가면, 점마다는 $0$이 되지만 적분은 그대로 남습니다. 지배 수렴 정리는 그런 일을 막는 조건으로 "모든 $f_k$를 한꺼번에 덮는 $\mu$-적분가능한 지붕 $g$"를 둡니다. 셈측도 위에서 높이가 $1$인 덩어리가 끝없이 많은 점으로 옮겨 가면, 지붕은 그 점들 모두에서 높이 $1$ 이상이어야 하므로 적분이 실수일 수 없습니다(아래 반례). 비유의 "지붕"이 가정의 $|f_k| \le g$이고, "한꺼번에"가 $g$가 $k$에 따라 바뀌지 않는다는 것입니다.

증명은 파투 보조정리를 두 번 씁니다. 측도가 0 인 집합 $N$ 위에서 값을 $0$으로 바꾸면 $g + f_k$와 $g - f_k$는 모든 점에서 $0$ 이상이므로 파투 보조정리를 쓸 수 있고, 첫째에서는 적분들이 결국 $\int f\,d\mu$보다 많이 작아지지 않는다는 것, 둘째에서는 많이 커지지 않는다는 것이 나옵니다. 여기서 $g$의 적분이 실수라는 것이 쓰입니다. 그래야 양쪽에서 $\int g\,d\mu$를 빼어 $\int f_k\,d\mu$에 관한 부등식으로 옮길 수 있습니다. (ii)는 같은 결론을 $|f_k - f|$, 지붕 $2g$, 극한 $0$에 다시 쓴 것입니다.

$\mu$-거의 어디서나의 가정은 측도가 0 인 집합 하나 $N$ 밖에서 모든 $k$에 대해 성립하는 꼴로 둡니다. $k$마다 "$|f_k| \le g$가 성립하지 않는 점들을 덮는 측도가 0 인 집합이 있다"는 것만 알 때, 그런 집합을 $k$마다 하나씩 골라 합치는 일은 이 강의에서 하지 않습니다. (2)는 $f_k$, $f$, $g$가 가측이면 예외 집합 자신이 가측이어서 고를 것 없이 식으로 $N$을 정할 수 있다는 것입니다.

## 증명

:::idea
$N$ 위에서 모든 함수를 $0$으로 바꾸면 가정이 모든 점에서 성립한다. 그때 $g + f_k$와 $g - f_k$에 파투 보조정리를 쓰면 적분들이 양쪽에서 $\int f\,d\mu$로 다가간다. $|f_k - f|$와 $2g$에 같은 결론을 쓰면 (ii)가 된다.
:::

:::hint
파투 보조정리가 주는 것은 $\int (g + f)\,d\mu \le \liminf_k \int (g + f_k)\,d\mu$이다. 오른쪽은 $\inf\{\int (g + f_j)\,d\mu : j \ge k\}$의 상한이므로, $\int (g + f)\,d\mu$보다 조금 작은 수보다 큰 하한이 어떤 $k$에서 나온다.
:::

:::hint
(2)에서 $N_0$이 가측이라는 것은 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (4)의 (ii)이고, $N_k$가 가측이라는 것은 [[measurable-function|가측함수]]의 (7)이다.
:::

:::proof
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 성질은 "선형성 항목의 (n)"으로, [[measurable-function|가측함수]]의 성질은 "가측함수 항목의 (n)"으로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로 인용한다. 모든 값이 $0$ 이상인 실숫값 함수는 적분가능성 항목의 맨 위의 약속대로 $[0, \infty]$ 값 함수로도 보고, 적분가능성 항목의 (2)에 의해 그런 함수가 $\mu$-적분가능하면 그 적분은 두 뜻으로 읽어도 같은 실수이다.

**보조 사실.** $(u_k)$가 $X$ 위의 실숫값 함수열, $u$가 $X$ 위의 실숫값 함수로서 모두 가측이고, $G$가 $X$ 위의 $\mu$-적분가능한 실숫값 함수이며, 모든 $x \in X$와 자연수 $k$에서 $|u_k(x)| \le G(x)$이고 모든 $x$에서 $(u_k(x))$가 $u(x)$로 수렴한다고 하자. 그러면 모든 $u_k$와 $u$는 $\mu$-적분가능하고 실수열 $(\int u_k\,d\mu)$는 $\int u\,d\mu$로 수렴한다. 이것을 증명한다.

$x \in X$를 고정하자. 모든 $k$에서 [[absolute-value]]의 (7)에 의해 $-G(x) \le u_k(x) \le G(x)$이므로, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $-G(x) \le u(x) \le G(x)$이고 다시 [[absolute-value]]의 (7)에 의해 $|u(x)| \le G(x)$이다. 특히 $G(x) \ge 0$이다. 모든 점에서 성립하는 부등식은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (2)의 (ii)에 의해 $\mu$-거의 어디서나 성립하고 $|G| = G$이므로([[absolute-value]]의 (1)), 적분가능성 항목의 (3)의 (ii)에 의해 모든 $u_k$와 $u$는 $\mu$-적분가능하다. $I = \int u\,d\mu$, $a_k = \int u_k\,d\mu$, $c = \int G\,d\mu$로 두면 모두 실수이다.

$F_k = G + u_k$와 $H_k = G - u_k$는 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)에 의해 가측이고, $-G(x) \le u_k(x) \le G(x)$에서 [[order-properties-of-reals]]의 (2)의 (i)에 의해 값이 $0$ 이상이며 $2G(x)$ 이하이다. 실수열 $(F_k(x))$는 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $G(x) + u(x)$로 수렴하고 유계이므로, [[convergence-iff-limsup-equals-liminf|수렴과 상극한·하극한]]의 (1)에 의해 그 하극한은 $G(x) + u(x)$이고, 가측함수의 연산과 극한의 (6)의 (iii)에 의해 $[0, \infty]$의 원소열로 본 하극한도 그 값이다. 곧 $\liminf_k F_k = G + u$이다. 같은 방식으로 $\liminf_k H_k = G - u$이다. [[fatou-lemma-for-integrals|적분의 파투 보조정리]]의 (1)에 의해
$$
\begin{aligned}
\int (G + u)\,d\mu &\le \liminf_{k \to \infty} \int F_k\,d\mu, \\
\int (G - u)\,d\mu &\le \liminf_{k \to \infty} \int H_k\,d\mu
\end{aligned}
$$
이다. 선형성 항목의 (2)에 의해 왼쪽은 각각 $c + I$, $c - I$이고, $\int F_k\,d\mu = c + a_k$, $\int H_k\,d\mu = c - a_k$이다.

양의 실수 $\varepsilon$을 잡자. 먼저 어떤 자연수 $n_1$이 있어 $k \ge n_1$이면 $I - \varepsilon < a_k$임을 보인다. 적분가능성 항목의 (3)의 (i)과 (ii)에 의해 $|a_k| \le \int |u_k|\,d\mu \le \int |G|\,d\mu = c$이므로 $c + a_k \ge 0$이다. $c + I - \varepsilon < 0$이면 모든 $k$에서 $c + I - \varepsilon < 0 \le c + a_k$이므로 $n_1 = 1$로 두면 된다. $c + I - \varepsilon \ge 0$이면 $b = c + I - \varepsilon$은 $[0, \infty]$의 원소이고 $b < c + I$이다. 가측함수의 연산과 극한의 $[0, \infty]$의 하극한의 정의에 의해 첫 부등식의 오른쪽은 $\beta_n = \inf\{c + a_k : k \ge n\}$들의 상한이므로, $b < c + I \le \sup\{\beta_n\}$과 $[0, \infty]$의 (5)의 (v)에 의해 $b < \beta_{n_1}$인 자연수 $n_1$이 있다. 가측함수의 연산과 극한의 (6)의 (i)에 의해 $k \ge n_1$이면 $\beta_{n_1} \le c + a_k$이므로 $c + I - \varepsilon < c + a_k$, 곧 $I - \varepsilon < a_k$이다.

둘째 부등식에 같은 논법을 쓰면($c - a_k \ge 0$이고, $c - I - \varepsilon < 0$이면 모든 $k$에서 성립한다) 어떤 자연수 $n_2$가 있어 $k \ge n_2$이면 $c - I - \varepsilon < c - a_k$, 곧 $a_k < I + \varepsilon$이다. $n_1$과 $n_2$ 가운데 큰 쪽 이상인 모든 $k$에서 $I - \varepsilon < a_k < I + \varepsilon$이므로 [[absolute-value]]의 (8)에 의해 $|a_k - I| < \varepsilon$이다. $\varepsilon$은 아무것이나 잡았으므로 수열의 극한의 정의에 의해 $(a_k)$는 $I$로 수렴한다.

**(1)** $N \in \mathcal{M}$이고 [[sigma-algebra|σ-대수와 가측공간]]의 (σ1)에 의해 $X \in \mathcal{M}$이므로 같은 항목의 (1)에 의해 $X - N \in \mathcal{M}$이고, 가측함수 항목의 (6)에 의해 $\chi_{X - N}$은 가측이다. $(k, x)$마다 값이 $f_k(x)\,\chi_{X - N}(x)$인 함수열을 $(\tilde f_k)$로, $\tilde f = f\chi_{X - N}$, $\tilde g = g\chi_{X - N}$으로 두자. 가측함수의 연산과 극한의 (3)에 의해 모두 가측이다. [[indicator-function|지시함수]]의 (1)에 의해 $x \in X - N$이면 이 함수들의 값은 $f_k(x)$, $f(x)$, $g(x)$이고 $x \in N$이면 $0$이다. 그래서 가정에 의해 모든 $x \in X$와 $k$에서 $|\tilde f_k(x)| \le \tilde g(x)$이고 $(\tilde f_k(x))$는 $\tilde f(x)$로 수렴한다($x \in N$이면 모든 항이 $0$이다). 적분가능성 항목의 (5)의 (i)에 의해 $\tilde g$는 $\mu$-적분가능하다.

(i) 보조 사실을 $u_k = \tilde f_k$, $u = \tilde f$, $G = \tilde g$로 쓰면 $\tilde f_k$와 $\tilde f$는 $\mu$-적분가능하고, $x \in X - N$이면 그 증명의 첫 문단에 의해 $|f(x)| = |\tilde f(x)| \le \tilde g(x) = g(x)$이다. $f_k = \tilde f_k$와 $f = \tilde f$가 $X - N$에서 성립하므로 $\mu$-거의 어디서나 성립하고, 적분가능성 항목의 (7)에 의해 $f_k$와 $f$는 $\mu$-적분가능하며 모든 $A \in \mathcal{M}$에서 $\int_A f_k\,d\mu = \int_A \tilde f_k\,d\mu$, $\int_A f\,d\mu = \int_A \tilde f\,d\mu$이다.

(iii) $A \in \mathcal{M}$이라 하자. 가측함수 항목의 (6)과 가측함수의 연산과 극한의 (3)에 의해 $\tilde f_k\chi_A$와 $\tilde f\chi_A$는 가측이다. 지시함수의 (1)과 [[absolute-value]]의 (4), (1)에 의해 모든 $x$에서 $|\tilde f_k(x)\chi_A(x)| \le |\tilde f_k(x)| \le \tilde g(x)$이고($\chi_A(x)$는 $0$이거나 $1$), $x \in A$이면 $(\tilde f_k(x)\chi_A(x))$는 $(\tilde f_k(x))$와 같은 열이어서 $\tilde f(x)$로, $x \notin A$이면 모든 항이 $0$이어서 $0 = \tilde f(x)\chi_A(x)$로 수렴한다. 보조 사실과 적분가능성 항목의 (5)의 (i)에 의해 $\int_A \tilde f_k\,d\mu = \int \tilde f_k\chi_A\,d\mu$는 $\int \tilde f\chi_A\,d\mu = \int_A \tilde f\,d\mu$로 수렴한다. (i)의 등식으로 바꾸면 $(\int_A f_k\,d\mu)$는 $\int_A f\,d\mu$로 수렴한다. $A = X$이면 적분가능성 항목의 (5)의 (i)에 의해 $\int_X = \int$이다.

(ii) $v_k = |\tilde f_k - \tilde f|$로 두면 가측함수 항목의 (5)와 가측함수의 연산과 극한의 (3)에 의해 가측이고, [[triangle-inequality|삼각부등식]]의 (3)과, (i)에서 보조 사실의 증명 첫 문단이 주는 "모든 $x$에서 $|\tilde f(x)| \le \tilde g(x)$"에 의해 모든 $x$에서 $v_k(x) \le |\tilde f_k(x)| + |\tilde f(x)| \le 2\tilde g(x)$이며, $\lvert v_k(x)\rvert = v_k(x)$이다. 선형성 항목의 (1)에 의해 $2\tilde g$는 $\mu$-적분가능하다. 양의 실수 $\varepsilon$마다 어떤 번호부터 $|\tilde f_k(x) - \tilde f(x)| < \varepsilon$이므로, 수열의 극한의 정의에 의해 $(v_k(x))$는 $0$으로 수렴한다. 보조 사실을 $u_k = v_k$, $u$를 값이 $0$인 상수함수, $G = 2\tilde g$로 쓰고 적분가능성 항목의 (6)의 (iii)을 쓰면 $(\int v_k\,d\mu)$는 $0$으로 수렴한다. 한편 $X - N$에서 $|f_k - f| = v_k$이므로, 두 $[0, \infty]$ 값 함수는 $\mu$-거의 어디서나 같고 [[markov-inequality-and-null-integral|마르코프 부등식 항목]]의 (4)에 의해 $\int |f_k - f|\,d\mu = \int v_k\,d\mu$이다.

**(2)** $C$를 $(f_k(x))$가 $f(x)$로 수렴하는 $x$ 전체의 집합이라 하면 가측함수의 연산과 극한의 (4)의 (ii)에 의해 $C \in \mathcal{M}$이고 $N_0 = X - C$이므로 σ-대수의 (σ1)과 (1)에 의해 $N_0 \in \mathcal{M}$이다. 가측함수 항목의 (5)에 의해 $|f_k|$는 가측이고 같은 항목의 (7)에 의해 $N_k = \{g < |f_k|\} \in \mathcal{M}$이다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 "$|f_k(x)| \le g(x)$"가 거짓인 것은 정확히 $g(x) < |f_k(x)|$일 때이므로 $N_k$는 그 예외 집합이고, $N_0$은 정의대로 "$(f_k(x))$가 $f(x)$로 수렴한다"의 예외 집합이다. $k$번째 항이 $N_k$인 집합열은 [[sequence-of-sets|집합열]]의 정의에 의해 식으로 정해진다.

가정과 측도가 0 인 집합과 μ-거의 어디서나의 (2)의 (i)에 의해 $\mu(N_0) = 0$이고 모든 $k$에서 $\mu(N_k) = 0$이다. 같은 항목의 (1)의 (ii)에 의해 $\bigcup_{k=1}^{\infty} N_k$는 측도가 0 인 집합이고, 다시 (1)의 (ii)에 의해 $N$도 측도가 0 인 집합이다. $x \in X - N$이면 $x \notin N_0$이므로 $(f_k(x))$는 $f(x)$로 수렴하고, 모든 $k$에서 $x \notin N_k$이므로([[sequence-of-sets|집합열]]의 (1)) $|f_k(x)| \le g(x)$이다. 곧 $N$은 (1)의 가정을 만족한다.
:::

## 예시와 반례

:::example[지배하는 등비 함수로 극한을 구하기]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서
$$
f_k(n) = \Bigl(-\frac{1}{2}\Bigr)^n \frac{k}{k + n}
$$
이라 합시다. $\int f_k\,d\mu^{\sharp}$를 닫힌 꼴로 구하기는 어렵지만 그 극한은 구할 수 있습니다. $0 < \tfrac{k}{k + n} < 1$이므로 $g(n) = (\tfrac{1}{2})^n$으로 두면 모든 $n$, $k$에서 $|f_k(n)| \le g(n)$입니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (iii)과 [[geometric-series|등비급수]]의 (2)에 의해 $g$는 $\mu^{\sharp}$-적분가능합니다(급수의 합 $1$). 같은 항목의 (9)의 (ii)에 의해 $\mathbb{N}$ 위의 모든 실숫값 함수는 가측입니다.

$n$을 고정하면 $\bigl|\tfrac{k}{k + n} - 1\bigr| = \tfrac{n}{k + n} < \tfrac{n}{k}$이고, 양의 실수 $\varepsilon$에 대해 [[archimedean-property|아르키메데스 성질]]로 $k > n/\varepsilon$인 번호부터 이것이 $\varepsilon$보다 작으므로 $\tfrac{k}{k + n}$은 $1$로 수렴합니다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $f_k(n)$은 $f(n) = (-\tfrac{1}{2})^n$으로 수렴합니다. $N = \emptyset$으로 (1)을 쓰면, 같은 (9)의 (iii)과 등비급수의 (2)에 의해
$$
\begin{aligned}
\lim_{k \to \infty} \int f_k\,d\mu^{\sharp} &= \int f\,d\mu^{\sharp} \\
&= \frac{-1/2}{1 + 1/2} = -\frac{1}{3}
\end{aligned}
$$
입니다. 급수로 말하면 극한과 무한 합의 순서를 바꾼 것입니다.
:::

:::counterexample[지배하는 함수가 없을 때 적분은 수렴해도 ∫|f_k − f| 가 0 으로 가지 않는 예]
$X = \mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$에서 $f_k = \chi_{\{2k\}} - \chi_{\{2k + 1\}}$, $f$를 값이 $0$인 상수함수라 합시다. $n$을 고정하면 $2k > n$인 $k$에서 $f_k(n) = 0$이므로 $(f_k(n))$은 $0$으로 수렴합니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)과 [[linearity-of-the-measure-integral|적분의 선형성]]의 (2)에 의해 $\int f_k\,d\mu^{\sharp} = 1 - 1 = 0$이므로 적분들은 $\int f\,d\mu^{\sharp} = 0$으로 수렴합니다. 그러나 $|f_k - f| = \chi_{\{2k, 2k+1\}}$이므로 같은 (6)의 (i)과 [[measure-examples|측도의 예]]의 (4)에 의해 $\int |f_k - f|\,d\mu^{\sharp} = 2$이고 (ii)가 성립하지 않습니다. 짝수의 집합 $A$에서는 $f_k\chi_A = \chi_{\{2k\}}$이므로 같은 항목의 (5)의 (i)과 (6)의 (i)에 의해 $\int_A f_k\,d\mu^{\sharp} = 1$이어서 (iii)도 성립하지 않습니다.

[[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (i)에 의해 $\mu^{\sharp}$에서 측도가 0 인 집합은 $\emptyset$뿐이므로, (1)의 가정을 만족하는 $g$는 모든 $n$과 $k$에서 $|f_k(n)| \le g(n)$이어야 합니다. [[alternating-series-test|교대급수 판정법]]의 (2)에 의해 $2$ 이상인 자연수 $n$은 어떤 자연수 $k$에 대해 $2k$이거나 $2k + 1$이므로(홀수 $n = 2j - 1$이면 $j \ge 2$이고 $n = 2(j - 1) + 1$) 그런 $g$는 $n \ge 2$에서 $|g(n)| \ge 1$이고, $n$번째 항이 $g(n)$인 수열은 $0$으로 수렴하지 않습니다. [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)를 $(|g(n)|)$에 쓰면 이 급수는 절대수렴하지 않으므로 같은 항목의 (9)의 (iii)에 의해 $g$는 $\mu^{\sharp}$-적분가능하지 않습니다. 질량이 점점 큰 번호로 옮겨 간다는 점은 파투 보조정리의 반례와 같고, 여기서는 부호가 반대인 두 덩어리가 함께 옮겨 가서 적분만 보면 문제가 드러나지 않습니다.
:::

## 확인 질문

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $f_k = k\chi_{\{2\}}$, $g$와 $f$를 값이 $0$인 상수함수로 두면 (2)의 $N$과 (1)의 결론은 무엇인가?]
점 $2$에서 $f_k(2) = k$는 수렴하지 않고 $|f_k(2)| = k > 0 = g(2)$이므로 $N_0 = \{2\}$이고 모든 $k$에서 $N_k = \{2\}$입니다. 점 $1$에서는 모든 값이 $0$입니다. 그래서 $N = \{2\}$이고 $\delta_1(\{2\}) = 0$이므로 측도가 0 인 집합입니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 $\int |f_k - f|\,d\delta_1 = |f_k(1) - f(1)| = 0$이므로 (ii)가 성립합니다. 함수들이 측도가 0 인 점에서 끝없이 커져도 결론에는 영향이 없습니다.
:::

:::check[(ii)가 성립하면 실수열 $(\int |f_k|\,d\mu)$는 $\int |f|\,d\mu$로 수렴하는가?]
수렴합니다. [[triangle-inequality|삼각부등식]]의 (2)에 의해 모든 점에서 $\bigl||f_k| - |f|\bigr| \le |f_k - f|$이므로, [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 (5)를 $|f_k|$와 $|f|$에 쓰고 같은 항목의 (4)를 쓰면 $\left|\int |f_k|\,d\mu - \int |f|\,d\mu\right| \le \int \bigl||f_k| - |f|\bigr|\,d\mu \le \int |f_k - f|\,d\mu$입니다. 오른쪽이 $0$으로 수렴하므로, 수열의 극한의 정의에 의해 $\int |f_k|\,d\mu$는 $\int |f|\,d\mu$로 수렴합니다.
:::
