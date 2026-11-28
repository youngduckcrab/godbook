---
title: 유한 측도에서의 유계 수렴 정리
title_en: Bounded Convergence Theorem for Finite Measures
aliases: [유계 수렴 정리 (측도), 유한 측도의 유계 수렴 정리, bounded convergence theorem (measure spaces)]
kind: theorem
field: measure-theory
msc: ["28A20", "28A25"]
level: undergrad
summary: 유한 측도공간에서 측도가 0 인 집합 하나 밖에서 하나의 상수로 절댓값이 막혀 있고 가측함수로 수렴하는 가측인 실숫값 함수열은, 모든 항과 극한이 μ-적분가능하고 차의 절댓값의 적분이 0 으로 가며 모든 가측집합 위의 적분이 수렴한다는 것과, 유한 측도에서 유계인 가측함수가 μ-적분가능하다는 것을 증명한다.
requires: [real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-of-sum-and-product, geometric-series, power-of-a-real-number, sequence-of-sets, power-set, sigma-algebra, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, finite-set, number-of-elements-is-unique, natural-numbers-are-infinite, archimedean-property, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, integral-with-respect-to-counting-measure, integrable-function-for-a-measure, linearity-of-the-measure-integral, dominated-convergence-theorem-for-integrals]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.2절 Lebesgue dominated convergence theorem, Corollary 6.15 와 그 증명 (p.176–177); 6.4절 Exercise 6.17 (p.187), Exercise 6.25, 6.26 (p.188); 5.5절 Exercise 5.28, 5.33 (p.160)
    checked: original
    note: "출처 Corollary 6.15(Bounded convergence theorem, p.176)는 유한 측도공간에서 가측함수열 (f_k) 가 어떤 가측 f 로 µ-a.e. 수렴하고, 모든 k 에서 |f_k| ≤ γ µ-a.e. 인 γ > 0 이 있으면 f_k, f 가 적분가능하고 모든 A 에서 ∫_A f dµ = lim ∫_A f_k dµ 라고 진술한다. 출처의 증명도 g := γ 로 두고 지배 수렴 정리(Theorem 6.13)를 쓴다(p.176–177). 이 항목은 가정을 적분의 지배 수렴 정리 (1)(2)와 같은 두 꼴로 두었고, γ 를 0 이상인 실수로 두었으며, ∫|f_k − f| dµ → 0 을 결론에 더했다. (3)은 이 항목이 같은 g = γ 로 진술에 둔 것이다. 반례 '항마다 유계이지만 공통의 상한이 없는 예'는 유한 측도 위에서 높이가 커지는 질량이 큰 번호로 옮겨 간다는 점에서 출처 Exercise 6.26(p.188, 가중치 2^{−i} 의 측도와 2ᵏχ_{{k+1, k+2, …}})과 같은 발상이다. 확인 질문 '$\\mu(X) = \\infty$이면 (1)의 결론이 성립하지 않을 수 있는가?'의 함수열은 고르게 수렴하므로, 출처 Exercise 6.17(p.187, 유한 측도에서 고르게 수렴하는 열의 적분과, µ(X) = +∞ 이면 어떻게 되는지)의 뒤 물음, 출처 Exercise 5.33(p.160, 0 이상인 함수열에서 같은 물음과 µ(X) < +∞ 를 뺄 수 있는지)과 같은 물음이고, 그 열 (1/k)χ_{{1, …, k}} 는 출처 Exercise 5.28(p.160, 르베그 측도 위의 (1/k)χ_{[0, k]})과 같은 발상이다. 출처 Exercise 6.25(p.188)는 측도가 실수인 A 밖에서 1 인 0 이상 1 이하의 열 f_k 가 1 로 다가가면 ∫(1 − f_k) dµ 가 0 으로 간다는 문제로, 측도가 실수인 집합 위에서 유계인 열을 다룬다는 점에서 (1)과 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(항별 적분의 예외 집합 E 를 식으로 정한 것, 이중급수 (3) 의 증명 길, 유계 수렴 (3) 의 경계 γ = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 유한 측도는 [[measure|측도와 측도공간]]의 것이고, 측도가 0 인 집합과 $\mu$-거의 어디서나는 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $|f|$, 집합 $\{\gamma < |f_k|\}$, $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, 실숫값 함수열은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. $\mu$-적분가능과 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이고, 실수열의 수렴은 [[limit-of-sequence|수열의 극한]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고 $\mu$는 유한 측도이며, $(f_k)$는 $X$ 위의 실숫값 함수열로서 모든 $f_k$가 $\mathcal{M}$-가측이고, $f$는 $X$ 위의 $\mathcal{M}$-가측인 실숫값 함수이며, $\gamma$는 $0$ 이상인 실수이다.

1. (유계 수렴 정리) 측도가 0 인 집합 $N$이 하나 있어, $X - N$의 모든 원소 $x$와 모든 자연수 $k$에서 $|f_k(x)| \le \gamma$이고, $X - N$의 모든 원소 $x$에서 실수열 $(f_k(x))$가 $f(x)$로 수렴한다고 하자. 그러면 다음이 성립한다.
   - (i) 모든 $f_k$와 $f$는 $\mu$-적분가능하고, $X - N$의 모든 원소 $x$에서 $|f(x)| \le \gamma$이다.
   - (ii) $k$번째 항이 $\int |f_k - f|\,d\mu$인 실수열은 $0$으로 수렴한다.
   - (iii) 모든 $A \in \mathcal{M}$에서 $k$번째 항이 $\int_A f_k\,d\mu$인 실수열은 $\int_A f\,d\mu$로 수렴한다.
2. (예외 집합이 가측인 꼴의 가정) 실수열 $(f_k(x))$가 $f(x)$로 수렴하지 않는 $x \in X$ 전체의 집합을 $N_0$이라 하고, 자연수 $k$마다 $N_k = \{\gamma < |f_k|\}$라 하자. 이들은 $\mathcal{M}$의 원소이다. "$(f_k(x))$가 $f(x)$로 수렴한다"가 $\mu$-거의 어디서나 성립하고, 모든 자연수 $k$에서 $|f_k| \le \gamma$가 $\mu$-거의 어디서나 성립하면, $k$번째 항이 $N_k$인 집합열로 정한
   $$
   N = N_0 \cup \bigcup_{k=1}^{\infty} N_k
   $$
   은 측도가 0 인 집합이고 (1)의 가정을 만족한다. 따라서 이때 (1)의 결론이 성립한다.
3. (유계인 가측함수) $X$ 위의 가측인 실숫값 함수 $h$가 $|h| \le \gamma$를 $\mu$-거의 어디서나 만족하면, $h$는 $\mu$-적분가능하고 모든 $A \in \mathcal{M}$에서
   $$
   \left|\int_A h\,d\mu\right| \le \int_A |h|\,d\mu \le \gamma\,\mu(A)
   $$
   이다.
:::

:::english
Measure spaces and finite measures are as in the entry on measures, and sets of measure zero and $\mu$-almost everywhere are as in the entry on sets of measure zero. Real-valued functions on $X$ and the operation $|f|$, the set $\{\gamma < |f_k|\}$ and $\mathcal{M}$-measurability are as in the entry on measurable functions, and sequences of real-valued functions are as in the entry on $[0, \infty]$-valued measurable functions. $\mu$-integrability and the integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on $\mu$-integrable functions, and convergence of real sequences is as in the entry on limits of sequences. Below, $(X, \mathcal{M}, \mu)$ is a measure space with $\mu$ a finite measure, $(f_k)$ is a sequence of real-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable, $f$ is an $\mathcal{M}$-measurable real-valued function on $X$, and $\gamma$ is a real number with $\gamma \ge 0$.

1. (Bounded convergence theorem) Suppose there is a single set $N$ of measure zero such that $|f_k(x)| \le \gamma$ for every $x \in X - N$ and every natural number $k$, and the real sequence $(f_k(x))$ converges to $f(x)$ for every $x \in X - N$. Then:
   - (i) Every $f_k$ and $f$ are $\mu$-integrable, and $|f(x)| \le \gamma$ for every $x \in X - N$.
   - (ii) The real sequence whose $k$-th term is $\int |f_k - f|\,d\mu$ converges to $0$.
   - (iii) For every $A \in \mathcal{M}$, the real sequence whose $k$-th term is $\int_A f_k\,d\mu$ converges to $\int_A f\,d\mu$.
2. (Hypotheses in the form with measurable exceptional sets) Let $N_0$ be the set of all $x \in X$ for which the real sequence $(f_k(x))$ does not converge to $f(x)$, and for each natural number $k$ let $N_k = \{\gamma < |f_k|\}$. These are elements of $\mathcal{M}$. If "$(f_k(x))$ converges to $f(x)$" holds $\mu$-almost everywhere and $|f_k| \le \gamma$ holds $\mu$-almost everywhere for every natural number $k$, then
   $$
   N = N_0 \cup \bigcup_{k=1}^{\infty} N_k,
   $$
   defined with the sequence of sets whose $k$-th term is $N_k$, is a set of measure zero satisfying the hypothesis of (1). Hence the conclusions of (1) hold in that case.
3. (Bounded measurable functions) If a measurable real-valued function $h$ on $X$ satisfies $|h| \le \gamma$ $\mu$-almost everywhere, then $h$ is $\mu$-integrable and, for every $A \in \mathcal{M}$,
   $$
   \left|\int_A h\,d\mu\right| \le \int_A |h|\,d\mu \le \gamma\,\mu(A).
   $$
:::

## 직관

[[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]는 모든 함수를 한꺼번에 덮는 $\mu$-적분가능한 지붕 $g$를 요구했습니다. 공간 전체의 측도가 실수이면 가장 단순한 지붕, 곧 높이가 $\gamma$인 평평한 지붕이 $\mu$-적분가능합니다. 그 적분은 $\gamma\,\mu(X)$이기 때문입니다. 그래서 유한 측도에서는 "모든 함수가 하나의 상수 $\gamma$ 아래에 있다"는 것만으로 극한과 적분의 순서를 바꿀 수 있습니다. 비유하면 바닥 넓이가 유한한 방에서는 일정한 높이의 천장 아래에 든 것은 모두 유한한 부피를 차지한다는 것이고, "바닥 넓이가 유한하다"가 $\mu(X) < \infty$에, "천장"이 $|f_k| \le \gamma$에 해당합니다.

두 조건은 모두 쓰입니다. $\mu(X) = \infty$이면 높이 $\gamma$의 평평한 지붕은 $\gamma > 0$일 때 $\mu$-적분가능하지 않고, 아래 확인 질문처럼 결론이 성립하지 않을 수 있습니다. 상한 $\gamma$가 $k$에 따라 달라도 되면, 아래 반례처럼 유한 측도에서도 결론이 성립하지 않을 수 있습니다.

이 강의에서 유한 측도의 예로는 디랙 측도와 그것들의 유한 일차결합([[measure-examples|측도의 예]]의 (2), (5)의 (iii)에서 계수가 실수인 것), 그리고 가중치의 합 $\sum_{n \in X} x_n$이 실수인 가중 셈측도 $\mu_x$가 있습니다. 가중 셈측도에서 $\mu_x(X) = \sum_{n \in X} x_n$이기 때문입니다.

## 증명

:::idea
높이가 $\gamma$인 상수함수는 $\mu(X) < \infty$이므로 $\mu$-적분가능하다. 이것을 지배하는 함수로 두고 적분의 지배 수렴 정리를 쓴다.
:::

:::hint
값이 $\gamma$인 상수함수는 $\gamma\chi_X$이다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)을 보자.
:::

:::proof
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]의 성질은 "지배 수렴 정리의 (n)"으로 인용한다. $g$를 값이 $\gamma$인 상수함수, 곧 $g = \gamma\chi_X$라 하자([[indicator-function|지시함수]]의 (1)). $\mu$가 유한 측도이므로 $\mu(X) < \infty$이고, 적분가능성 항목의 (6)의 (i)에 의해 $g$는 $\mu$-적분가능하며, 모든 $A \in \mathcal{M}$에서 같은 항목의 (5)의 (i)과 (6)의 (i)에 의해
$$
\int_A g\,d\mu = \int \gamma\chi_A\,d\mu = \gamma\,\mu(A)
$$
이다. 여기서 모든 $x$에서 $g(x)\chi_A(x) = \gamma\chi_A(x)$이고, [[measure|측도와 측도공간]]의 (2)의 (iii)에 의해 $\mu(A)$는 실수이다.

**(1)** $X - N$의 모든 원소 $x$에서 $|f_k(x)| \le \gamma = g(x)$이므로, 지배 수렴 정리의 (1)을 이 $g$와 $N$으로 쓰면 (i), (ii), (iii)이 나온다. (i)의 부등식은 지배 수렴 정리의 (1)의 (i)이 주는 $|f(x)| \le g(x) = \gamma$이다.

**(2)** 지배 수렴 정리의 (2)를 이 $g$로 쓰면 그 항목의 $N_k = \{g < |f_k|\}$는 이 항목의 $N_k = \{\gamma < |f_k|\}$와 같은 집합이고, $N_0$도 같다. 그 (2)가 이 항목의 (2)이다.

**(3)** [[absolute-value]]의 (1)과 $\gamma \ge 0$에 의해 $|g| = g$이므로, $|h| \le |g|$가 $\mu$-거의 어디서나 성립한다. 적분가능성 항목의 (3)의 (ii)에 의해 $h$는 $\mu$-적분가능하고 $\int_A |h|\,d\mu \le \int_A |g|\,d\mu = \gamma\,\mu(A)$이며, 같은 항목의 (3)의 (i)에 의해 $\left|\int_A h\,d\mu\right| \le \int_A |h|\,d\mu$이다.
:::

## 예시와 반례

:::example[등비 가중치의 가중 셈측도에서 거듭제곱의 열]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위에서 $x_n = 3^{-n}$으로 정한 가중 셈측도 $\mu_x$([[measure-examples|측도의 예]]의 (3))를 봅시다. [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (1)과 [[geometric-series|등비급수]]의 (2), [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)에 의해 $\mu_x(\mathbb{N}) = \int \chi_{\mathbb{N}}\,d\mu_x = \sum_{n=1}^{\infty} 3^{-n} = \tfrac{1/3}{1 - 1/3} = \tfrac{1}{2}$이므로 유한 측도입니다.

$f_k(n) = (1 - \tfrac{1}{k})^n$이라 하면 $0 \le 1 - \tfrac{1}{k} < 1$이므로 [[power-of-a-real-number]]의 (6)의 (i), (ii)와 (2)의 (iv)에 의해 $0 \le f_k(n) \le 1^n = 1$입니다. $n$을 고정하면 $1 - \tfrac{1}{k}$가 $1$로 수렴하므로([[archimedean-property|아르키메데스 성질]]) [[limit-of-sum-and-product|극한의 사칙연산]]의 (6)에 의해 $f_k(n)$은 $1^n = 1$로 수렴합니다. (1)을 $\gamma = 1$, $N = \emptyset$, $f = \chi_{\mathbb{N}}$으로 쓰면 $\int f_k\,d\mu_x$는 $\int \chi_{\mathbb{N}}\,d\mu_x = \tfrac{1}{2}$로 수렴합니다.

직접 계산과 맞춰 봅시다. $r_k = \tfrac{1}{3}(1 - \tfrac{1}{k})$로 두면 $f_k(n)\,3^{-n} = r_k^n$이고 $0 \le r_k < \tfrac{1}{3}$이므로, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (ii)와 등비급수의 (2)에 의해 $\int f_k\,d\mu_x = \tfrac{r_k}{1 - r_k}$입니다. $r_k$가 $\tfrac{1}{3}$로 수렴하므로 극한의 사칙연산의 (4)에 의해 이 값은 $\tfrac{1/3}{2/3} = \tfrac{1}{2}$로 수렴합니다.
:::

:::counterexample[항마다 유계이지만 공통의 상한이 없는 예]
위와 같은 유한 측도 $\mu_x$($x_n = 3^{-n}$)에서 $f_k = 3^k\chi_{\{k\}}$라 합시다. 각 $f_k$는 $3^k$ 이하인 유계함수이고, $n$을 고정하면 $k > n$에서 $f_k(n) = 0$이므로 $(f_k(n))$은 $0$으로 수렴합니다. 그러나 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)과 [[measure-examples|측도의 예]]의 (3)에 의해 $\int f_k\,d\mu_x = 3^k\,\mu_x(\{k\}) = 3^k \cdot 3^{-k} = 1$이므로 적분들은 $0$으로 가지 않습니다. 모든 $k$에 공통인 상한 $\gamma$는 없습니다. 모든 $k$에서 $|f_k| \le \gamma$가 $\mu_x$-거의 어디서나 성립하는 $0$ 이상인 실수 $\gamma$가 있다면, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이어서 $f_k$와 값이 $0$인 상수함수가 가측이므로 (2)와 (1)의 (iii)에 의해 $\int f_k\,d\mu_x$가 $0$으로 수렴해야 하는데, 모두 $1$이기 때문입니다.
:::

## 확인 질문

:::check[$\mu(X) = \infty$이면 (1)의 결론이 성립하지 않을 수 있는가?]
그렇습니다. $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$는 $\mathbb{N}$이 무한집합이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)) $\mu^{\sharp}(\mathbb{N}) = \infty$입니다. $f_k = \tfrac{1}{k}\chi_{\{1, \dots, k\}}$이면 모든 값이 $0$ 이상 $1$ 이하이고, $n$을 고정하면 $k \ge n$에서 $f_k(n) = \tfrac{1}{k}$이므로 $(f_k(n))$은 $0$으로 수렴합니다. 그러나 [[finite-set|유한집합]]의 (F2)와 [[number-of-elements-is-unique|원소의 개수]]에 의해 $\mu^{\sharp}(\{1, \dots, k\}) = k$이므로, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $\int f_k\,d\mu^{\sharp} = \tfrac{1}{k} \cdot k = 1$이고 $0$으로 가지 않습니다. 모든 점에서 $|f_k(n) - 0| \le \tfrac{1}{k}$이어서 수렴이 고르게 일어나도 그렇습니다.
:::

:::check[$x_n = 3^{-n}$인 가중 셈측도 $\mu_x$에서 $h(n) = (-1)^n$은 $\mu_x$-적분가능한가? 적분은 무엇인가?]
그렇습니다. 위 예시에서처럼 $\mu_x$는 유한 측도이고 $|h| \le 1$이므로 (3)에 의해 $h$는 $\mu_x$-적분가능하며 $\left|\int h\,d\mu_x\right| \le \mu_x(\mathbb{N}) = \tfrac{1}{2}$입니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (ii)에서 $y_n = (-1)^n 3^{-n} = (-\tfrac{1}{3})^n$이므로 [[geometric-series|등비급수]]의 (2)에 의해 $\int h\,d\mu_x = \tfrac{-1/3}{1 + 1/3} = -\tfrac{1}{4}$이고, 실제로 그 절댓값 $\tfrac{1}{4}$은 $\tfrac{1}{2}$ 이하입니다.
:::
