---
title: 마르코프 부등식과 적분이 0 인 함수
title_en: Markov's Inequality and Functions with Zero Integral
aliases: [마르코프 부등식, 적분이 0 인 함수, 거의 어디서나 같은 함수의 적분, 거의 어디서나의 단조 수렴 정리, Markov inequality, Chebyshev inequality for measures, functions with zero integral]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 가측인 [0, ∞] 값 함수 f 와 양의 실수 t 에서 t μ({f ≥ t}) 는 f 의 적분 이하이다. 이것으로 적분이 실수이면 f 가 μ-거의 어디서나 실수라는 것, 적분이 0 인 것은 f 가 μ-거의 어디서나 0 인 것과 같다는 것, μ-거의 어디서나 같은 함수는 적분이 같다는 것, 측도가 0 인 집합 밖에서만 단조증가하는 함수열의 단조 수렴 정리를 증명한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, sequence-of-sets, indicator-function, sigma-algebra, power-set, extended-nonnegative-reals, extended-measurable-function, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals, additivity-of-nonnegative-integral, integral-with-respect-to-counting-measure, geometric-series]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Theorem 5.28 (p.144–145); 4.2절 Proposition 4.26 (p.104); 5.5절 Exercise 5.13 (p.157), Exercise 5.18 (p.158); 6.1절 Proposition 6.9 (p.170); 6.4절 Exercise 6.4, 6.5, 6.6 (p.185), Exercise 6.13 (p.186); 8장 Theorem 8.27 앞뒤 (p.245–246)
    checked: original
    note: "(3)의 첫째 동치는 출처 Theorem 5.28(p.144)이다. 출처의 ⇒ 증명은 A_k = {f > 1/k} 위에서 (1/k)χ_{A_k} ≤ f·χ_{A_k} 로 µ(A_k)/k ≤ ∫ f 를 얻는데, 이것이 (1)의 꼴이다. 출처는 측도가 0 인 집합의 모임이 σ-환이라는 Proposition 4.26 으로 합집합을 다루고, 이 항목은 3단원 측도가 0 인 집합의 (1)의 (ii)를 썼다. 출처의 ⇐ 증명은 Corollary 5.18 과 Proposition 5.13 으로 {f > 0} 과 {f = 0} 에 나누며 이 항목도 같다. (2)의 두 결론은 출처 Exercise 5.18 의 (a)(b)(p.158)이다. (1)의 이름에 대하여: 출처에서 'Markov' 는 p.47 의 딘킨 소개 문장에 한 번 나올 뿐이고(검색어 'Markov', 'Chebyshev', 'Tchebyshev', 'Tchebychev' 로 책 전체), 출처는 증가하는 함수 φ 로 µ({|f| ≥ ε}) ≤ φ(ε)⁻¹ ∫ φ∘|f| dµ 를 보이라는 Exercise 6.13(p.186)을 'P. Chebyshev's inequality' 라 부른다. (1)은 그 φ(t) = t 인 경우와 같은 꼴이다. 출처는 8장(p.245–246)과 Exercise 8.22 의 실마리(p.252)에서도 Exercise 6.13 을 Chebyshev(Tchebyshev)의 부등식이라 부른다. (4)는 출처 Exercise 6.4(p.185, µ-적분가능한 f, g 가 µ a.e. 같으면 적분이 같다)의 0 이상인 경우와 같은 결론이고, 출처는 6.1절 Proposition 6.9(p.170)의 증명에서 이 연습문제와 Exercise 5.18 을 인용한다. 출처 Exercise 6.4 의 실마리는 예외 집합 A := {f ≠ g} 를 가측집합으로 두는데, 이 항목의 (4)는 예외 집합이 𝓜 에 들지 않아도 되는 꼴이다. (4)를 g = fχ_{X−N}(N 은 측도가 0 인 집합)에 쓰면 출처 Exercise 5.13(p.157, ∫_{X∖N} f dµ = ∫_X f dµ)이 된다. (5)는 이 항목이 (4)와 단조 수렴 정리에서 끌어낸 것이다. 확인 질문 '측도가 ∞ 인 공간에서 적분이 실수이면 μ({f > 0}) 도 실수인가?' 는 출처 Exercise 5.18 (c)(p.158, 적분이 실수이면 {f > 0} 이 σ-유한), Exercise 6.6(p.185, 적분가능한 f 의 {f ≠ 0} 이 σ-유한)과 같은 대상을 다루고, 그 답에 쓰는 (2)의 마지막 문장은 출처 Exercise 6.5(p.185, 적분가능한 f 의 {|f| > γ} 의 측도가 실수)와 같은 꼴이다. 반례 '적분이 0 이지만 0 이 아닌 값을 갖는 함수'는 출처 Exercise 6.4 의 실마리(p.185)가 쓰는, 측도가 0 인 집합 위에서 +∞ 이고 밖에서 0 인 함수 h 의 적분이 0 이라는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(a.e. 판 단조 수렴의 예외 집합이 식으로 정해지는지, 마르코프의 이름에 대한 메모, 디랙 측도 확인 질문). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 측도의 성질은 [[measure|측도와 측도공간]]의 것이고, 측도가 0 인 집합, $\mu$-거의 어디서나, 예외 집합은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수와 함수열, 그 가측성, 집합의 기호 $\{f \ge t\}$, $\{f > 0\}$, $\{f = \infty\}$, $\sup_k f_k$와 $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $f$, $g$는 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이며, $A \in \mathcal{M}$이다.

1. (마르코프 부등식) $t$가 양의 실수이면 $\{f \ge t\} \in \mathcal{M}$이고
   $$
   t\,\mu(\{f \ge t\}) \le \int f\,d\mu
   $$
   이다.
2. (적분이 실수인 함수) $\int f\,d\mu < \infty$이면 $\mu(\{f = \infty\}) = 0$이고, 따라서 $f(x) < \infty$가 $\mu$-거의 어디서나 성립한다. 또 모든 양의 실수 $t$에서 $\mu(\{f \ge t\})$는 실수이다.
3. (적분이 0 인 함수) 다음 셋은 서로 같은 말이다.
   - (a) $\int f\,d\mu = 0$이다.
   - (b) $\mu(\{f > 0\}) = 0$이다.
   - (c) $f = 0$이 $\mu$-거의 어디서나 성립한다.

   또 $\int_A f\,d\mu = 0$인 것은 정확히 $\mu(\{x \in A : f(x) > 0\}) = 0$일 때이다.
4. (거의 어디서나 같은 함수의 적분) $f = g$가 $\mu$-거의 어디서나 성립하면 $\int f\,d\mu = \int g\,d\mu$이고 $\int_A f\,d\mu = \int_A g\,d\mu$이다. $f \le g$가 $\mu$-거의 어디서나 성립하면 $\int f\,d\mu \le \int g\,d\mu$이다. 여기서 예외 집합 $\{x : f(x) \ne g(x)\}$가 아니라 그것을 포함하는 측도가 0 인 집합이 주어진다는 것이 정의이고, 예외 집합 자신이 $\mathcal{M}$에 드는지는 묻지 않는다.
5. (거의 어디서나의 단조 수렴 정리) $(f_k)$가 $X$ 위의 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이라 하자.
   - (i) 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$와 모든 자연수 $k$에서 $f_k(x) \le f_{k+1}(x)$라 하자. $h = \sup_k (f_k\chi_{X - N})$로 두면, $h$는 $\mathcal{M}$-가측이고, $x \in X - N$이면 $h(x) = \lim_{k \to \infty} f_k(x)$, $x \in N$이면 $h(x) = 0$이며, $k$번째 항이 $\int f_k\,d\mu$인 원소열은 단조증가이고
     $$
     \int h\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu
     $$
     이다. 또 $X - N$의 모든 원소 $x$에서 $f(x) = \lim_{k \to \infty} f_k(x)$인 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수 $f$는 모두 $\int f\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu$를 만족한다. $N$ 위에서는 $(f_k(x))$가 단조증가가 아닐 수 있어 극한을 정하지 않으므로, $h$는 그 점들에서 값을 $0$으로 정한다.
   - (ii) 모든 자연수 $k$에서 $f_k \le f_{k+1}$가 $\mu$-거의 어디서나 성립하면, (i)의 가정을 만족하는 측도가 0 인 집합이 있다. 곧 $N = \bigcup_{k=1}^{\infty} \{x \in X : f_{k+1}(x) < f_k(x)\}$는 측도가 0 인 집합이다.
:::

:::english
Measure spaces and properties of measures are as in the entry on measures; sets of measure zero, $\mu$-almost everywhere and exceptional sets are as in the entry on sets of measure zero. $[0, \infty]$-valued functions and sequences of functions on $X$, their measurability, the set notation $\{f \ge t\}$, $\{f > 0\}$, $\{f = \infty\}$, $\sup_k f_k$ and $f\chi_A$ are as in the entry on measurable functions with values in $[0, \infty]$. The integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on integrals of nonnegative measurable functions. Below, $(X, \mathcal{M}, \mu)$ is a measure space, $f$ and $g$ are $\mathcal{M}$-measurable $[0, \infty]$-valued functions on $X$, and $A \in \mathcal{M}$.

1. (Markov's inequality) If $t$ is a positive real, then $\{f \ge t\} \in \mathcal{M}$ and
   $$
   t\,\mu(\{f \ge t\}) \le \int f\,d\mu.
   $$
2. (Functions with real integral) If $\int f\,d\mu < \infty$, then $\mu(\{f = \infty\}) = 0$, so $f(x) < \infty$ holds $\mu$-almost everywhere. Moreover $\mu(\{f \ge t\})$ is a real number for every positive real $t$.
3. (Functions with zero integral) The following three statements are equivalent.
   - (a) $\int f\,d\mu = 0$.
   - (b) $\mu(\{f > 0\}) = 0$.
   - (c) $f = 0$ holds $\mu$-almost everywhere.

   Moreover, $\int_A f\,d\mu = 0$ exactly when $\mu(\{x \in A : f(x) > 0\}) = 0$.
4. (Integrals of functions equal almost everywhere) If $f = g$ holds $\mu$-almost everywhere, then $\int f\,d\mu = \int g\,d\mu$ and $\int_A f\,d\mu = \int_A g\,d\mu$. If $f \le g$ holds $\mu$-almost everywhere, then $\int f\,d\mu \le \int g\,d\mu$. By definition what is given is a set of measure zero containing the exceptional set $\{x : f(x) \ne g(x)\}$; whether the exceptional set itself belongs to $\mathcal{M}$ is not asked.
5. (Monotone convergence theorem almost everywhere) Let $(f_k)$ be a sequence of $[0, \infty]$-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable.
   - (i) Suppose there is a set $N$ of measure zero such that $f_k(x) \le f_{k+1}(x)$ for all $x \in X - N$ and all natural numbers $k$. Put $h = \sup_k (f_k\chi_{X - N})$. Then $h$ is $\mathcal{M}$-measurable, $h(x) = \lim_{k \to \infty} f_k(x)$ for $x \in X - N$ and $h(x) = 0$ for $x \in N$, the sequence whose $k$-th term is $\int f_k\,d\mu$ is nondecreasing, and
     $$
     \int h\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu.
     $$
     Moreover, every $\mathcal{M}$-measurable $[0, \infty]$-valued function $f$ with $f(x) = \lim_{k \to \infty} f_k(x)$ for all $x \in X - N$ satisfies $\int f\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu$. On $N$ the sequence $(f_k(x))$ need not be nondecreasing, so no limit is defined there, and $h$ is given the value $0$ at those points.
   - (ii) If $f_k \le f_{k+1}$ holds $\mu$-almost everywhere for every natural number $k$, then there is a set of measure zero satisfying the hypothesis of (i); namely $N = \bigcup_{k=1}^{\infty} \{x \in X : f_{k+1}(x) < f_k(x)\}$ is a set of measure zero.
:::

## 직관

(1)은 "높이가 $t$ 이상인 곳"의 측도와 높이 $t$의 곱이 전체 부피를 넘을 수 없다는 것입니다. 그 곳 위에 높이 $t$의 기둥을 세우면 함수의 그래프 아래에 들어가기 때문입니다. 비유로 말하면 그 기둥이 단순함수 $t\chi_{\{f \ge t\}}$이고, 그래프 아래에 들어간다는 것이 $t\chi_{\{f \ge t\}} \le f$입니다. 부피가 실수이면 높이가 $\infty$인 곳은 어떤 $t$에 대해서도 높이 $t$ 이상이므로 측도가 끝없이 작아야 하고, 곧 $0$입니다((2)). 높이가 $t$ 이상인 곳의 측도도 부피를 $t$로 나눈 것 이하로 막힙니다.

적분이 $0$이면 높이가 $1/n$ 이상인 곳의 측도가 모두 $0$이고, 높이가 양수인 곳은 그런 곳들의 합집합이므로 측도가 $0$입니다((3)). 거꾸로 높이가 양수인 곳의 측도가 $0$이면 적분은 그 위의 적분과 높이가 $0$인 곳 위의 적분의 합이어서 $0$입니다. 그래서 적분은 측도가 $0$인 집합 위의 값을 보지 못하고, 거의 어디서나 같은 함수는 적분이 같습니다((4)). 이것이 거의 어디서나 성립하는 가정만으로도 단조 수렴 정리를 쓸 수 있게 해 줍니다((5)).

(5)에서 측도가 0 인 집합 $N$ 위의 점에서는 $(f_k(x))$가 늘어나지 않을 수 있어 극한을 정하지 않습니다. 그래서 극한 함수는 $N$에서 $0$으로 채운 $h$로 식으로 정하고, $N$ 밖에서 극한과 같은 다른 가측함수도 (4)에 의해 같은 적분을 갖습니다. 측도가 0 인 집합 하나 밖에서 모든 $k$에 대해 단조증가하는 꼴로 가정합니다. 이 강의는 각 $k$마다 따로 주어진 측도가 0 인 집합들을 모으지 않습니다. (ii)는 가측함수의 부등식에서는 예외 집합이 식으로 정해지는 가측집합이어서 그 합집합을 그대로 잡을 수 있다는 것입니다.

## 증명

:::idea
(1)은 단순함수 $t\chi_{\{f \ge t\}}$가 $f$ 아래에 있다는 것이다. 나머지는 (1), 적분의 덧셈으로 측도가 0 인 집합과 그 여집합에 나누기, 단조 수렴 정리이다.
:::

:::hint
(3)의 (a)에서 (b)로 가려면 $\{f > 0\} = \bigcup_{n=1}^{\infty} \{f \ge 1/n\}$을 쓴다. (4)는 $\int f\,d\mu = \int_{X - N} f\,d\mu + \int_N f\,d\mu$로 나눈다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, $[0, \infty]$ 값 함수의 성질은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수 항목]]의 번호로, 측도가 0 인 집합과 거의 어디서나의 성질은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합 항목]]의 번호로, 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로 인용한다. 실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다룬다.

**(1)** $[0, \infty]$ 값 함수 항목의 (1)에 의해 $E = \{f \ge t\} \in \mathcal{M}$이다. $x \in E$이면 $t\chi_E(x) = t \le f(x)$이고 $x \notin E$이면 $t\chi_E(x) = 0 \le f(x)$이므로, 가측함수의 적분의 (2)와 (5)에 의해 $t\,\mu(E) = \int t\chi_E\,d\mu \le \int f\,d\mu$이다.

**(2)** $E = \{f = \infty\}$는 $[0, \infty]$ 값 함수 항목의 (2)에 의해 $\mathcal{M}$의 원소이다. 모든 $x$에서 $\infty\chi_E(x) \le f(x)$이므로 가측함수의 적분의 (2)와 (5)에 의해 $\infty\,\mu(E) \le \int f\,d\mu < \infty$이다. $\mu(E) > 0$이면 $[0, \infty]$의 (4)의 (i)에 의해 $\infty\,\mu(E) = \infty$가 되어 어긋나므로 $\mu(E) = 0$이다. 열린 문장 "$f(x) < \infty$"의 예외 집합은 $E$이고 $\mathcal{M}$의 원소이므로 측도가 0 인 집합 항목의 (2)의 (i)에 의해 이 문장은 $\mu$-거의 어디서나 성립한다. 끝으로 $t > 0$이면 (1)에 의해 $t\,\mu(\{f \ge t\}) \le \int f\,d\mu$이고 오른쪽이 실수이므로 $[0, \infty]$의 (2)의 (iv)에 의해 $t\,\mu(\{f \ge t\})$는 실수이며, $\mu(\{f \ge t\}) = \infty$였다면 $t\infty = \infty$이므로 $\mu(\{f \ge t\})$는 실수이다.

**(3)** $P = \{f > 0\}$은 $[0, \infty]$ 값 함수 항목의 정의에 의해 $\mathcal{M}$의 원소이다.

(a) ⇒ (b): 자연수 $n$마다 $E_n = \{f \ge 1/n\}$으로 두면, 이 집합열은 식으로 정해지고 (1)에 의해 $\mathcal{M}$의 원소로 된 집합열이며 $\tfrac{1}{n}\mu(E_n) \le 0$이다. $[0, \infty]$의 (2)의 (ii)(iv)에 의해 $\tfrac{1}{n}\mu(E_n) = 0$이고 (4)의 (iv)에 의해 $\mu(E_n) = 0$이다. $P = \bigcup_{n=1}^{\infty} E_n$이다: 각 $E_n$은 $P$에 포함되고, $x \in P$이면 $f(x) = \infty$일 때 $x \in E_1$이며, $f(x)$가 양의 실수일 때 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/n < f(x)$인 $n$이 있어 $x \in E_n$이다([[sequence-of-sets|집합열]]의 (1)). 측도가 0 인 집합 항목의 (1)의 (ii)에 의해 $\mu(P) = 0$이다.

(b) ⇒ (a): $X - P$의 모든 점에서 $f$의 값은 $0$이므로 가측함수의 적분의 (3)의 (v)와 (iv)에 의해 $\int f\,d\mu = \int_P f\,d\mu = 0$이다.

(b) ⇔ (c): 열린 문장 "$f(x) = 0$"의 예외 집합은 $P$이고($f(x) \ne 0$인 것은 정확히 $0 < f(x)$일 때, $[0, \infty]$의 (2)의 (iv)(ii)) $\mathcal{M}$의 원소이므로 측도가 0 인 집합 항목의 (2)의 (i)을 쓴다.

$A$ 위의 꼴: $\int_A f\,d\mu = \int f\chi_A\,d\mu$이고 $\{f\chi_A > 0\} = \{x \in A : f(x) > 0\}$이므로 앞의 결과를 가측인 $f\chi_A$에 쓴다.

**(4)** 정의에 의해 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소에서 $f = g$이다. [[sigma-algebra|σ-대수]]의 (σ2)에 의해 $X - N \in \mathcal{M}$이고, $X$는 서로소인 $X - N$과 $N$의 합집합이다. [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]의 (2)와 가측함수의 적분의 (3)의 (i)(iii)(iv)에 의해
$$
\begin{aligned}
\int f\,d\mu &= \int_{X - N} f\,d\mu + \int_N f\,d\mu \\
&= \int_{X - N} g\,d\mu + 0 \\
&= \int_{X - N} g\,d\mu + \int_N g\,d\mu \\
&= \int g\,d\mu
\end{aligned}
$$
이다. $A$ 위에서는 $X - N$의 모든 원소에서 $f\chi_A = g\chi_A$이므로 앞의 결과를 가측인 $f\chi_A$, $g\chi_A$에 쓴다. $f \le g$가 거의 어디서나이면 같은 계산의 둘째 줄에서 가측함수의 적분의 (3)의 (iii)의 부등식을 쓰고 $[0, \infty]$의 (3)의 (ii)를 쓴다.

**(5)** (i) $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 $f_k\chi_{X - N}$은 가측이고, 모든 $x$에서 $f_k(x)\chi_{X - N}(x) \le f_{k+1}(x)\chi_{X - N}(x)$이다($x \notin X - N$이면 두 쪽이 $0$). 단조 수렴 정리의 가정을 만족하므로 [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)에 의해 $h = \sup_k (f_k\chi_{X - N})$은 가측이고, 단조증가인 원소열의 극한은 상한이므로 $h(x) = \lim_k f_k(x)\chi_{X - N}(x)$이며, 이것은 $x \in X - N$에서 $\lim_k f_k(x)$이고 $x \in N$에서 $\sup\{0\} = 0$이다. 같은 정리에 의해 $\int h\,d\mu = \lim_k \int f_k\chi_{X - N}\,d\mu$이다. $X - N$에서 $f_k = f_k\chi_{X - N}$이므로 (4)에 의해 $\int f_k\,d\mu = \int f_k\chi_{X - N}\,d\mu$이고, 따라서 $(\int f_k\,d\mu)$는 단조증가이며 $\int h\,d\mu = \lim_k \int f_k\,d\mu$이다. $X - N$에서 $f = h$인 가측함수 $f$는 (4)에 의해 $\int f\,d\mu = \int h\,d\mu$이다.

(ii) $[0, \infty]$ 값 함수 항목의 (6)에 의해 $D_k = \{x \in X : f_{k+1}(x) < f_k(x)\}$는 $\mathcal{M}$의 원소이고, $k$번째 항이 $D_k$인 집합열은 식으로 정해진다. $D_k$는 열린 문장 "$f_k(x) \le f_{k+1}(x)$"의 예외 집합이다([[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (2)의 (iii)). 측도가 0 인 집합 항목의 (3)의 (ii)에 의해 "모든 $k$에서 $f_k(x) \le f_{k+1}(x)$"가 $\mu$-거의 어디서나 성립하고 그 예외 집합 $N = \bigcup_{k=1}^{\infty} D_k$는 측도가 0 인 집합이다. $X - N$의 원소는 어떤 $D_k$에도 속하지 않으므로 (i)의 가정이 성립한다.
:::

## 예시와 반례

:::example[셈측도 위의 등비 함수에 쓴 마르코프 부등식]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f(n) = 2^{-n}$이라 합시다. [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (3)과 [[geometric-series|등비급수]]의 (2)에 의해 $\int f\,d\mu^{\sharp} = 1$입니다. $t = \tfrac{1}{4}$이면 $\{f \ge \tfrac{1}{4}\} = \{1, 2\}$이므로 (1)의 왼쪽은 $\tfrac{1}{4} \cdot 2 = \tfrac{1}{2}$이고 $1$ 이하입니다. $t = \tfrac{1}{2}$이면 $\{1\}$이어서 $\tfrac{1}{2}$이고, $t = 1$이면 공집합이어서 $0$입니다.
:::

:::example[측도가 0 인 점에서 단조가 깨지는 함수열]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $f_k(1) = 1 - k^{-1}$로 두고, $f_k(2)$는 $k$가 홀수이면 $1$, 짝수이면 $0$으로 둡시다. $N = \{2\}$는 $\delta_1(\{2\}) = 0$이므로 측도가 0 인 집합이고, $N$ 밖의 점 $1$에서 $(f_k(1))$은 단조증가하며 그 극한(상한)은 $1$입니다. 점 $2$에서는 단조가 아니고 극한도 없습니다. (5)의 (i)에 의해 $h(1) = 1$, $h(2) = 0$이고 $\int h\,d\delta_1 = h(1) = 1$입니다([[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)). 실제로 같은 곳에 의해 $\int f_k\,d\delta_1 = f_k(1) = 1 - k^{-1}$이고 그 극한이 $1$입니다.
:::

:::counterexample[적분이 0 이지만 0 이 아닌 값을 갖는 함수]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$에서 $f = \infty\chi_{\{2\}}$이면 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 $\int f\,d\delta_1 = \infty \cdot 0 = 0$입니다. 그런데 $f(2) = \infty$입니다. (3)이 말하는 것은 "모든 점에서 $0$"이 아니라 "$\mu$-거의 어디서나 $0$"이고, 여기서 $\{f > 0\} = \{2\}$의 측도가 $0$입니다.
:::

## 확인 질문

:::check[$\int f\,d\mu < \infty$이면 $f$는 유계인가?]
그렇지 않을 수 있습니다. $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, $\mu = \delta_1$에서 $f(n) = n$이면 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)에 의해 $\int f\,d\delta_1 = f(1) = 1$이지만 $f$의 값은 끝없이 커집니다. (2)가 주는 것은 값이 $\infty$인 점의 측도가 $0$이라는 것뿐입니다.
:::

:::check[측도가 ∞ 인 공간에서 적분이 실수이면 μ({f > 0}) 도 실수인가?]
그렇지 않을 수 있습니다. 위 예시의 셈측도 위의 $f(n) = 2^{-n}$은 적분이 $1$이지만 $\{f > 0\} = \mathbb{N}$이어서 $\mu^{\sharp}(\mathbb{N}) = \infty$입니다. (2)가 실수라고 말하는 것은 양의 실수 $t$마다의 $\mu(\{f \ge t\})$입니다.
:::
