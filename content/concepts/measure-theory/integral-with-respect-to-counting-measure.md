---
title: 셈측도에 대한 적분과 급수
title_en: Integrals with Respect to the Counting Measure and Series
aliases: [셈측도에 대한 적분, 가중 셈측도에 대한 적분, 급수를 적분으로 보기, integral with respect to counting measure, sums as integrals]
kind: proposition
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "자연수의 부분집합 위의 가중 셈측도에 대한 적분은 함숫값과 가중치의 곱의 합이고, 셈측도에 대한 적분은 함숫값의 합이다. 그래서 항이 0 이상인 실수인 급수는 셈측도에 대한 적분이고, 적분이 실수인 것은 급수가 수렴하는 것과 같다."
requires: [set-operations, power-set, indicator-function, sequence-of-sets, extended-nonnegative-reals, series-in-extended-nonnegative-reals, sigma-algebra, extended-measurable-function, measure, measure-examples, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals, additivity-of-nonnegative-integral, harmonic-series-diverges, geometric-series, series-and-partial-sums, sum-of-a-series]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.2절 Example 5.15 (p.133–134); 5.3절 Theorem 5.17 뒤 문단 (p.138), Corollary 5.21 (p.139); 6.4절 Exercise 6.12 (p.186)
    checked: original
    note: "(2)는 출처 Example 5.15(p.133–134)이다. 출처는 X = ℕ 과 0 이상인 실숫값 f 만 다루고, A 가 유한집합인 경우와 무한집합인 경우를 나누어 정의에서 직접 계산한다. 무한집합인 경우 출처는 s ∈ S(f·χ_A) 의 값 가운데 하나가 무한히 많은 점에서 나온다는 것으로 양수 값이 유한 개의 점에서만 나온다는 것을 보인다. 출처는 p.138 에서 f(k)χ_{{k}} 를 처음 n 개까지 더한 단순함수열에 단조 수렴 정리를 써서 ∫_ℕ f dµ♯ = Σ f(k) 를 다시 얻는다. 이 항목은 이 두 번째 길을 따르되, f 가 ∞ 를 값으로 가질 수 있으므로 단순함수 대신 fχ_{A ∩ {1, …, N}} 의 증가열을 쓰고, 0 이상인 함수의 적분의 덧셈과 한 점 위의 적분으로 계산했다. (1)의 가중 셈측도와 X ⊆ ℕ 인 경우는 이 항목이 넓힌 것이다. (3)의 급수의 수렴과의 관계는 출처 Exercise 6.12(p.186, 셈측도에 대해 적분가능 ⇔ 급수가 절대수렴)와 같은 대상이다. 출처 Corollary 5.21(p.139)은 Theorem 5.20 과 Example 5.15 로 0 이상인 이중급수의 합의 순서를 바꾸는데, 이 사이트에서는 이 정리가 이미 1단원의 0 이상인 이중급수의 합의 순서 바꾸기 (2)이므로 이 항목은 진술로 두지 않고 직관에서만 말한다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(a.e. 판 단조 수렴의 예외 집합이 식으로 정해지는지, 마르코프의 이름에 대한 메모, 디랙 측도 확인 질문). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가중 셈측도 $\mu_x$와 셈측도 $\mu^{\sharp}$는 [[measure-examples|측도의 예]]의 (3), (4)의 것이다. $[0, \infty]$와 그 곱셈은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이고, $[0, \infty]$의 원소열의 합 $\sum_{n=1}^{\infty}$과 $\mathbb{N}$의 부분집합 위의 합 $\sum_{n \in A}$은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고, 급수의 수렴과 합의 기호는 [[series-and-partial-sums|급수와 부분합]], [[sum-of-a-series|급수의 합의 기호]]의 것이다.

아래에서 $X$는 $\mathbb{N}$의 부분집합이고 $\mathcal{M} = \mathscr{P}(X)$이며, $(x_n)$은 $[0, \infty]$의 원소열이다. $X$의 모든 부분집합이 $\mathcal{M}$의 원소이므로 $X$ 위의 모든 $[0, \infty]$ 값 함수는 $\mathcal{M}$-가측이다. $f$가 $X$ 위의 $[0, \infty]$ 값 함수이면 $n \in X$일 때 $f(n)\,x_n$, $n \notin X$일 때 $0$인 $[0, \infty]$의 원소열을 $(f(n)\,x_n)$으로 쓰고, $A \subseteq X$일 때 그 $A$ 위의 합을 $\sum_{n \in A} f(n)\,x_n$으로 쓴다. 모든 $x_n$이 $1$일 때는 $\sum_{n \in A} f(n)$으로 쓴다.

1. (가중 셈측도) $f$가 $X$ 위의 $[0, \infty]$ 값 함수이고 $A \subseteq X$이면
   $$
   \int_A f\,d\mu_x = \sum_{n \in A} f(n)\,x_n
   $$
   이다. 특히 $\int f\,d\mu_x = \sum_{n \in X} f(n)\,x_n$이다.
2. (셈측도) $f$가 $X$ 위의 $[0, \infty]$ 값 함수이고 $A \subseteq X$이면 $\int_A f\,d\mu^{\sharp} = \sum_{n \in A} f(n)$이다. $X = \mathbb{N}$이면 $\int f\,d\mu^{\sharp} = \sum_{n=1}^{\infty} f(n)$이다.
3. (급수와의 관계) $X = \mathbb{N}$이고 $f$의 값이 모두 $0$ 이상인 실수라 하자. $\int f\,d\mu^{\sharp} < \infty$인 것은 정확히 $n$번째 항이 $f(n)$인 수열의 급수가 수렴할 때이고, 이때 $\int f\,d\mu^{\sharp}$는 그 급수의 합 $\sum_{n=1}^{\infty} f(n)$이다. 급수가 발산하는 것은 정확히 $\int f\,d\mu^{\sharp} = \infty$일 때이다.
:::

:::english
The weighted counting measure $\mu_x$ and the counting measure $\mu^{\sharp}$ are as in (3), (4) of the entry on examples of measures. $[0, \infty]$ and its multiplication are as in its entry, and sums $\sum_{n=1}^{\infty}$ of sequences in $[0, \infty]$ and sums $\sum_{n \in A}$ over subsets of $\mathbb{N}$ are as in the entry on sums in $[0, \infty]$. The integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on integrals of nonnegative measurable functions, and convergence of series and the sum symbol are as in the entries on series.

Below, $X$ is a subset of $\mathbb{N}$, $\mathcal{M} = \mathscr{P}(X)$, and $(x_n)$ is a sequence in $[0, \infty]$. Since every subset of $X$ belongs to $\mathcal{M}$, every $[0, \infty]$-valued function on $X$ is $\mathcal{M}$-measurable. If $f$ is a $[0, \infty]$-valued function on $X$, we write $(f(n)\,x_n)$ for the sequence in $[0, \infty]$ that equals $f(n)\,x_n$ for $n \in X$ and $0$ for $n \notin X$, and for $A \subseteq X$ we write $\sum_{n \in A} f(n)\,x_n$ for its sum over $A$. When every $x_n$ is $1$ we write $\sum_{n \in A} f(n)$.

1. (Weighted counting measures) If $f$ is a $[0, \infty]$-valued function on $X$ and $A \subseteq X$, then
   $$
   \int_A f\,d\mu_x = \sum_{n \in A} f(n)\,x_n.
   $$
   In particular $\int f\,d\mu_x = \sum_{n \in X} f(n)\,x_n$.
2. (Counting measure) If $f$ is a $[0, \infty]$-valued function on $X$ and $A \subseteq X$, then $\int_A f\,d\mu^{\sharp} = \sum_{n \in A} f(n)$. If $X = \mathbb{N}$, then $\int f\,d\mu^{\sharp} = \sum_{n=1}^{\infty} f(n)$.
3. (Relation with series) Let $X = \mathbb{N}$ and let all values of $f$ be nonnegative reals. Then $\int f\,d\mu^{\sharp} < \infty$ exactly when the series of the sequence with $n$-th term $f(n)$ converges, and in that case $\int f\,d\mu^{\sharp}$ is the sum $\sum_{n=1}^{\infty} f(n)$ of that series. The series diverges exactly when $\int f\,d\mu^{\sharp} = \infty$.
:::

## 직관

셈측도는 점마다 질량 $1$을, 가중 셈측도는 점 $n$에 질량 $x_n$을 놓은 측도입니다. 점마다 질량이 놓여 있으면 적분은 "각 점의 값 × 그 점의 질량"을 모두 더한 것이 되어야 합니다. (1)은 이것이 실제로 그렇다는 것이고, 그래서 자연수에서 정의된 $0$ 이상인 수의 합, 곧 급수가 적분의 한 경우가 됩니다. 비유가 정의와 맞아떨어지는 곳은 점 하나 위의 적분이 "값 × 질량"이라는 것이고, 끝없이 많은 점을 모으는 일은 단조 수렴 정리가 합니다.

증명은 처음 $N$개의 점까지만 남긴 함수 $f\chi_{A \cap \{1, \dots, N\}}$의 적분을 [[additivity-of-nonnegative-integral|적분의 덧셈]]으로 점마다 나누어 계산하고, $N$을 키워 [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]를 씁니다. 값 $\infty$를 가져도 되고, 가중치 $x_n$이 $0$이거나 $\infty$여도 같은 계산이 통합니다($0 \cdot \infty = 0$).

이 항목과 [[termwise-integration-of-nonnegative-series|항별 적분]]을 함께 쓰면 1단원의 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 행과 열을 바꾸는 등식을 다시 얻을 수 있습니다. $k$번째 함수를 $j$에서의 값이 $a_{k,j}$인 함수로 두면, 항별 적분의 등식의 두 쪽이 셈측도에 대한 적분으로 두 반복합이 됩니다. 이 사이트에서는 그 등식이 이미 1단원에서 증명되어 있으므로 이 항목의 진술로 두지 않습니다.

## 증명

:::idea
$F_N = A \cap \{1, \dots, N\}$에서 $f\chi_{F_N}$은 한 점 위의 함수 $N$개의 합이고, 그 적분은 한 점 위의 적분 $f(n)\,x_n$의 합이다. $N$에 대해 단조 수렴 정리를 쓴다.
:::

:::hint
한 점 $\{n\}$ 위에서 $f$는 상수 $f(n)$이므로 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 $\int_{\{n\}} f\,d\mu_x = f(n)\,\mu_x(\{n\}) = f(n)\,x_n$이다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로, 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로 인용한다. [[sigma-algebra|σ-대수]]의 (5)에 의해 $\mathscr{P}(X)$는 $X$ 위의 σ-대수이고 [[measure-examples|측도의 예]]의 (3)에 의해 $\mu_x$는 그 위의 측도이며 $n \in X$이면 $\mu_x(\{n\}) = x_n$이다. $X$ 위의 $[0, \infty]$ 값 함수 $f$의 모든 집합 $\{f > a\}$는 $\mathscr{P}(X)$의 원소이므로 $f$는 가측이다.

**(1)** $A \subseteq X$라 하자. 자연수 $n$마다 $X$의 부분집합 $A \cap \{n\}$을 $n$번째 항으로 하는 집합열은 서로소이다. 이 집합열에서 $h_n = f\chi_{A \cap \{n\}}$으로 두면 $[0, \infty]$ 값 함수 항목([[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]])의 (4)의 (iii)에 의해 $h_n$은 가측이다. $b_n$을 원소열 $(f(n)\,x_n)$을 $A$ 밖에서 $0$으로 채운 원소열의 $n$번째 항이라 하자. 곧 $n \in A$이면 $b_n = f(n)\,x_n$이고 $n \notin A$이면 $b_n = 0$이다.

(가) $\int h_n\,d\mu_x = b_n$이다. $n \in A$이면 $A \cap \{n\} = \{n\}$ 위에서 $f$의 값은 $f(n)$이므로 가측함수의 적분의 (5)에 의해 $\int h_n\,d\mu_x = \int_{\{n\}} f\,d\mu_x = f(n)\,\mu_x(\{n\}) = f(n)\,x_n$이다. $n \notin A$이면 $A \cap \{n\} = \emptyset$이므로 $h_n$은 값이 $0$인 상수함수이고 그 적분은 같은 곳에 의해 $0 \cdot \mu_x(X) = 0$이다.

(나) 자연수 $N$에서 $F_N = A \cap \{1, \dots, N\}$으로 두면 모든 점 $m \in X$에서 $\sum_{n=1}^{N} h_n(m) = f(m)\chi_{F_N}(m)$이다. [[indicator-function|지시함수]]의 (6)의 (i)에 의해 $\sum_{n=1}^{N} \chi_{A \cap \{n\}}(m) = \chi_{F_N}(m)$이고([[sequence-of-sets|집합열]]의 (1)의 원소 판정으로 $\bigcup_{n=1}^{N} (A \cap \{n\}) = F_N$), 합의 항목의 (1)의 (iii)(상수배)으로 $f(m)$을 곱하면 된다. [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]의 (3)과 (가)에 의해
$$
\int f\chi_{F_N}\,d\mu_x = \sum_{n=1}^{N} b_n
$$
이다.

(다) 모든 $m \in X$에서 원소열 $(f(m)\chi_{F_N}(m))_N$은 단조증가이고 그 극한은 $f(m)\chi_A(m)$이다. $F_N \subseteq F_{N+1}$이므로 지시함수의 (2)와 $[0, \infty]$의 (4)의 (iii)에 의해 단조증가이다. $m \notin A$이면 모든 항이 $0$이다. $m \in A$이면 $N \ge m$에서 $m \in F_N$이므로 그 항이 $f(m)$이고, 모든 항이 $f(m)$ 이하이므로 상한이 $f(m)$이다. [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)의 (ii)와 (나)에 의해
$$
\begin{aligned}
\int_A f\,d\mu_x &= \int f\chi_A\,d\mu_x \\
&= \lim_{N \to \infty} \sum_{n=1}^{N} b_n = \sum_{n=1}^{\infty} b_n
\end{aligned}
$$
이고, 마지막은 합의 정의이며 그 값은 부분집합 위의 합의 정의에 의해 $\sum_{n \in A} f(n)\,x_n$이다. $A = X$이면 가측함수의 적분의 (3)의 (i)에 의해 둘째 문장이 된다.

**(2)** [[measure-examples|측도의 예]]의 (4)의 (i)에 의해 $\mu^{\sharp}$는 모든 $x_n$이 $1$인 가중 셈측도이고, $[0, \infty]$의 (4)의 (i)에 의해 $f(n) \cdot 1 = f(n)$이다. (1)을 쓴다. $X = \mathbb{N}$이면 $A = \mathbb{N}$에서 합의 항목의 (7)의 (i)에 의해 $\sum_{n \in \mathbb{N}} f(n) = \sum_{n=1}^{\infty} f(n)$이다.

**(3)** (2)에 의해 $\int f\,d\mu^{\sharp} = \sum_{n=1}^{\infty} f(n)$이고, 합의 항목의 (3)의 (i)(ii)를 쓴다.
:::

## 예시와 반례

:::example[유한 측도 위에서 적분이 ∞ 인 함수]
$X = \mathbb{N}$에서 $x_n = 2^{-n}$인 가중 셈측도 $\mu_x$를 생각합시다. [[measure-examples|측도의 예]]의 (3), [[geometric-series|등비급수]]의 (2), [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)에 의해 $\mu_x(\mathbb{N}) = \sum_{n=1}^{\infty} 2^{-n} = 1$이므로 유한 측도입니다. $f(n) = 2^n$이면 (1)에 의해
$$
\begin{aligned}
\int f\,d\mu_x &= \sum_{n=1}^{\infty} 2^n \cdot 2^{-n} \\
&= \sum_{n=1}^{\infty} 1 = \infty
\end{aligned}
$$
입니다. 마지막은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (i)(iv)와 $\mathbb{N}$이 무한집합이라는 것입니다. 반대로 $g(n) = 1$이면 $\int g\,d\mu_x = \mu_x(\mathbb{N}) = 1$입니다. 전체의 측도가 실수여도 값이 빠르게 커지는 함수의 적분은 $\infty$일 수 있습니다.
:::

:::counterexample[0 으로 다가가는 함수의 셈측도 적분이 ∞ 인 예]
$X = \mathbb{N}$ 위의 셈측도에서 $f(n) = n^{-1}$이라 합시다. 함숫값은 $0$으로 다가가지만 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 조화급수가 발산하므로 (3)에 의해 $\int f\,d\mu^{\sharp} = \infty$입니다. 셈측도에서는 점마다의 값이 작아져도 끝없이 많은 점의 값이 쌓여 적분이 $\infty$가 될 수 있습니다.
:::

## 확인 질문

:::check[디랙 측도 $\delta_m$($m \in \mathbb{N}$)으로 (1)을 읽으면 무엇이 되는가?]
$X = \mathbb{N}$에서 $x_n$을 $n = m$이면 $1$, 아니면 $0$으로 두면, 모든 $A \subseteq \mathbb{N}$에서 $\mu_x(A) = \sum_{n \in A} x_n$은 $m \in A$일 때 $1$이고 아닐 때 $0$이므로 $\mu_x = \delta_m$입니다. (1)에 의해 $\int f\,d\delta_m = \sum_{n=1}^{\infty} f(n)\,x_n$인데, $n \ne m$인 항은 $f(n) \cdot 0 = 0$이므로 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (4)와 (1)의 (vi)에 의해 이 합은 $f(m)$입니다. [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)과 같은 결과입니다.
:::

:::check[$X = \{1, 2, 3\}$ 위의 셈측도에서 $f(1) = \infty$, $f(2) = f(3) = 0$이면 $\int f\,d\mu^{\sharp}$는 무엇인가?]
$\infty$입니다. (2)에 의해 $\int f\,d\mu^{\sharp} = \sum_{n \in X} f(n)$이고, 이 합의 원소열은 첫째 항이 $\infty$이므로 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (2)에 의해 합은 첫째 항 $\infty$ 이상, 곧 $\infty$입니다. 값이 $\infty$인 점이 하나라도 있으면 셈측도에서는 그 점의 측도가 $1$이어서 적분이 $\infty$가 됩니다.
:::
