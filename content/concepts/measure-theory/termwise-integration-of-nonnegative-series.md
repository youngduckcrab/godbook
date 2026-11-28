---
title: 0 이상인 함수항 급수의 항별 적분
title_en: Termwise Integration of Series of Nonnegative Functions
aliases: [베포 레비 정리 (함수항 급수), 0 이상인 함수항 급수의 적분, 적분이 정하는 측도, Beppo Levi theorem for series, termwise integration of nonnegative series, measure with density]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 가측인 [0, ∞] 값 함수열의 급수의 적분은 각 항의 적분의 합과 같다. 이것으로 0 이상인 가측함수가 가측집합마다 그 위의 적분을 주어 측도를 정한다는 것을 증명한다."
requires: [indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, measure, integral-of-nonnegative-simple-function, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals, additivity-of-nonnegative-integral, sequence-of-sets, sigma-algebra, measurable-function, measure-examples, power-set, geometric-series]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Theorem 5.17 앞 문단의 각주 (p.135), Theorem 5.20 (p.139), Theorem 5.22 와 Example 5.23 (p.140); 5.5절 Exercise 5.15 (p.157); 5.1절 Theorem 5.8 의 증명 (p.127)
    checked: original
    note: "(1)은 출처 Theorem 5.20(Beppo Levi, p.139)이다. 출처의 증명도 부분합 g_j 에 단조 수렴 정리를 쓰고, 유한 합의 적분을 근거를 적지 않고 각 적분의 합으로 바꾸며, A 위의 꼴은 f_k·χ_A 에 같은 논법을 쓴다. 이 항목은 유한 합에 0 이상인 함수의 적분의 덧셈 (3)을 인용했다. 출처는 정리 뒤 문단(p.139)에서 이 정리를 셈측도에 써서 이중급수를 다룬다(Corollary 5.21). (2)는 출처 Theorem 5.22(p.140)이고 출처는 증명을 Exercise 5.15(p.157)로 둔다. 출처는 그 측도를 µ_f 로 쓰고 이 항목은 ν_f 로 썼다. 출처 Example 5.23(p.140)의 ∫ g dµ_f = ∫ fg dµ 는 싣지 않았다. 출처는 그 예의 단순함수인 경우에서 'linearity of the integral (see Corollary 5.19)' 를 인용하는데 Corollary 5.19 는 감소열에 관한 따름정리이다. '베포 레비 정리' 는 출처가 Theorem 5.20 에 붙인 이름이고, 출처는 Example 6.6(p.167)과 Corollary 6.16 의 증명(p.177)에서도 Theorem 5.20 을 이 이름으로 가리킨다. 출처는 단조 수렴 정리(Theorem 5.17) 바로 앞 문단의 레비를 소개하는 각주(p.135)에서 'In his honor, that theorem is called the “Beppo Levi theorem”' 이라 적는다. 확인 질문 '$E \\in \\mathcal{M}$일 때 $\\nu_{\\chi_E}$는 어떤 측도인가?' 의 축약 측도는 출처 Theorem 5.8 의 증명(p.127)이 쓰는 µ^{A_j}(출처 Example 4.8 의 contraction)와 같은 대상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(a.e. 판 단조 수렴의 예외 집합이 식으로 정해지는지, 마르코프의 이름에 대한 메모, 디랙 측도 확인 질문). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 측도는 [[measure|측도와 측도공간]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수열과 그 가측성, $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, $[0, \infty]$ 값 함수열의 급수 $\sum_{k=1}^{\infty} f_k$, 곧 $x$에서의 값이 $\sum_{k=1}^{\infty} f_k(x)$인 함수는 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 것이다. $[0, \infty]$의 원소열의 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, "가측"은 $\mathcal{M}$-가측을 뜻한다.

1. (항별 적분) $(f_k)$가 $X$ 위의 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 가측이면 $\sum_{k=1}^{\infty} f_k$는 가측이고
   $$
   \int \sum_{k=1}^{\infty} f_k\,d\mu = \sum_{k=1}^{\infty} \int f_k\,d\mu
   $$
   이다. 오른쪽은 $k$번째 항이 $\int f_k\,d\mu$인 $[0, \infty]$의 원소열의 합이다. 모든 $A \in \mathcal{M}$에서 $\int_A \sum_{k=1}^{\infty} f_k\,d\mu = \sum_{k=1}^{\infty} \int_A f_k\,d\mu$이다.
2. (적분이 정하는 측도) $f$가 $X$ 위의 가측인 $[0, \infty]$ 값 함수이면, $A \in \mathcal{M}$에서 값이 $\int_A f\,d\mu$인 함수 $\nu_f : \mathcal{M} \to [0, \infty]$는 $(X, \mathcal{M})$ 위의 측도이고 $\nu_f(X) = \int f\,d\mu$이다. $f$가 0 이상인 단순함수이면 $\nu_f$는 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]의 (7)의 측도 $\nu_f$와 같다.
:::

:::english
Measure spaces and measures are as in the entry on measures. Sequences of $[0, \infty]$-valued functions on $X$ and their measurability, and $f\chi_A$, are as in the entry on measurable functions with values in $[0, \infty]$; the series $\sum_{k=1}^{\infty} f_k$ of a sequence of $[0, \infty]$-valued functions, namely the function whose value at $x$ is $\sum_{k=1}^{\infty} f_k(x)$, is as in the entry on operations on measurable functions. Sums of sequences in $[0, \infty]$ are as in their entry. The integrals $\int f\,d\mu$ and $\int_A f\,d\mu$ are as in the entry on integrals of nonnegative measurable functions. Below, $(X, \mathcal{M}, \mu)$ is a measure space and "measurable" means $\mathcal{M}$-measurable.

1. (Termwise integration) If $(f_k)$ is a sequence of $[0, \infty]$-valued functions on $X$ with every $f_k$ measurable, then $\sum_{k=1}^{\infty} f_k$ is measurable and
   $$
   \int \sum_{k=1}^{\infty} f_k\,d\mu = \sum_{k=1}^{\infty} \int f_k\,d\mu,
   $$
   where the right-hand side is the sum of the sequence in $[0, \infty]$ whose $k$-th term is $\int f_k\,d\mu$. For every $A \in \mathcal{M}$, $\int_A \sum_{k=1}^{\infty} f_k\,d\mu = \sum_{k=1}^{\infty} \int_A f_k\,d\mu$.
2. (The measure defined by an integral) If $f$ is a measurable $[0, \infty]$-valued function on $X$, then the function $\nu_f : \mathcal{M} \to [0, \infty]$ whose value at $A \in \mathcal{M}$ is $\int_A f\,d\mu$ is a measure on $(X, \mathcal{M})$, and $\nu_f(X) = \int f\,d\mu$. If $f$ is a nonnegative simple function, $\nu_f$ is the measure $\nu_f$ of (7) in the entry on integrals of nonnegative simple functions.
:::

## 직관

급수의 합은 부분합의 극한이고, $0$ 이상인 함수의 부분합은 항을 더할수록 늘어납니다. 그래서 급수는 단조증가하는 함수열의 극한이고, [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]가 적분과 극한을 바꾸게 해 줍니다. 부분합의 적분은 [[additivity-of-nonnegative-integral|적분의 덧셈]]에 의해 각 적분의 유한 합이므로, 극한에서 (1)의 등식이 나옵니다. 모래를 여러 번 나누어 부어도 쌓인 양은 각 번에 부은 양의 합이라는 것과 같습니다. 비유와 달리 붓는 횟수가 끝없이 많을 수 있는데, 항과 합이 모두 $[0, \infty]$에서 재어지므로 그때도 "합이 없다"는 일이 생기지 않습니다.

(2)는 (1)을 서로소인 집합열의 지시함수에 쓴 것입니다. $f$에 서로소인 집합들의 지시함수를 곱한 함수들을 더하면 합집합의 지시함수를 곱한 것이 되므로, 합집합 위의 적분이 각 집합 위의 적분의 합이 됩니다. 단순함수에서는 이것을 측도의 일차결합으로 이미 보였고, 여기서는 모든 $0$ 이상인 가측함수로 넓어집니다.

## 증명

:::idea
부분합 $g_N = \sum_{k=1}^{N} f_k$는 단조증가하고 $\sum_{k=1}^{\infty} f_k$로 다가간다. 단조 수렴 정리와 유한 합의 덧셈을 쓴다.
:::

:::hint
$\int g_N\,d\mu = \sum_{k=1}^{N} \int f_k\,d\mu$이고, 오른쪽의 $N$에 대한 극한은 정의에 의해 $\sum_{k=1}^{\infty} \int f_k\,d\mu$이다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로, $[0, \infty]$ 값 함수의 성질은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수 항목]]의 번호로 인용한다.

**(1)** [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (5)에 의해 $0$ 이상인 정수 $N$마다 $g_N = \sum_{k=1}^{N} f_k$와 $\sum_{k=1}^{\infty} f_k$는 가측이다. 합의 항목의 (2)에 의해 모든 $x$에서 원소열 $(g_N(x))$는 단조증가이고, 무한 합의 정의에 의해 $\lim_{N \to \infty} g_N(x) = \sum_{k=1}^{\infty} f_k(x)$이다. 자연수 $N$을 첨자로 하는 $(g_N)$은 $(N, x)$마다 값이 식으로 정해지는 $[0, \infty]$ 값 함수열이다. [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)의 (ii)와 [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]의 (3)에 의해
$$
\begin{aligned}
\int \sum_{k=1}^{\infty} f_k\,d\mu &= \lim_{N \to \infty} \int g_N\,d\mu \\
&= \lim_{N \to \infty} \sum_{k=1}^{N} \int f_k\,d\mu
\end{aligned}
$$
이고, 마지막 극한은 무한 합의 정의에 의해 $\sum_{k=1}^{\infty} \int f_k\,d\mu$이다.

$A \in \mathcal{M}$이면 $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 각 $f_k\chi_A$는 가측이고, 합의 항목의 (5)(상수배)와 $[0, \infty]$의 (4)의 (i)에 의해 모든 $x$에서 $\sum_{k=1}^{\infty} f_k(x)\chi_A(x) = \Bigl(\sum_{k=1}^{\infty} f_k(x)\Bigr)\chi_A(x)$이다. $k$번째 항이 $f_k\chi_A$인 함수열에 앞의 결과를 쓰면 가측집합 위의 적분의 정의에 의해 둘째 등식이 된다.

**(2)** [[measure|측도]]의 (M1)과 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (3)의 (iv)에 의해 $\nu_f(\emptyset) = \int_{\emptyset} f\,d\mu = 0$이다. $(A_n)$이 $\mathcal{M}$의 원소로 된 서로소인 집합열이고 $A = \bigcup_{n=1}^{\infty} A_n$이라 하자. [[sigma-algebra|σ-대수]]의 (σ3)에 의해 $A \in \mathcal{M}$이다. $x \in X$를 고정하면 [[indicator-function|지시함수]]의 (6)의 (ii)에 의해 $n$번째 항이 $\chi_{A_n}(x)$인 실수열의 급수는 수렴하고 그 합이 $\chi_A(x)$이며, 합의 항목의 (3)의 (i)에 의해 이 합은 $[0, \infty]$의 원소열의 합으로도 $\chi_A(x)$이다. 합의 항목의 (5)(상수배)에 의해
$$
f(x)\,\chi_A(x) = \sum_{n=1}^{\infty} f(x)\,\chi_{A_n}(x)
$$
이다. $n$번째 항이 $f\chi_{A_n}$인 함수열에 (1)을 쓰면
$$
\begin{aligned}
\nu_f(A) &= \int f\chi_A\,d\mu \\
&= \sum_{n=1}^{\infty} \int f\chi_{A_n}\,d\mu \\
&= \sum_{n=1}^{\infty} \nu_f(A_n)
\end{aligned}
$$
이므로 (M2)가 성립한다. $\nu_f(X) = \int_X f\,d\mu = \int f\,d\mu$는 가측함수의 적분의 (3)의 (i)이다. $f$가 0 이상인 단순함수이면 가측함수의 적분의 (1)에 의해 두 측도는 모든 $A$에서 같은 값을 갖는다.
:::

## 예시와 반례

:::example[지시함수의 급수와 측도의 합]
$(A_k)$가 $\mathcal{M}$의 원소로 된 집합열(서로소가 아니어도 된다)이고 $h = \sum_{k=1}^{\infty} \chi_{A_k}$라 합시다. 각 $\chi_{A_k}$는 [[measurable-function|가측함수]]의 (6)에 의해 가측입니다. 점 $x$에서 원소열 $(\chi_{A_k}(x))$는 모든 항이 $1$인 원소열을 $T_x = \{k \in \mathbb{N} : x \in A_k\}$ 밖에서 $0$으로 채운 것이므로, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (iv)에 의해 $h(x)$는 $T_x$가 유한집합이면 그 원소의 개수, 무한집합이면 $\infty$입니다. 곧 $h(x)$는 $x$가 몇 개의 $A_k$에 속하는지를 셉니다. (1)과 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해
$$
\int h\,d\mu = \sum_{k=1}^{\infty} \mu(A_k)
$$
입니다. 예를 들어 $\sum_{k=1}^{\infty} \mu(A_k) < \infty$이면 이 "속하는 횟수"의 적분이 실수입니다.
:::

:::counterexample[적분의 합이 0 이어도 급수가 ∞ 인 점이 있는 예]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$([[sigma-algebra|σ-대수]]의 (5)), $\mu = \delta_1$([[measure-examples|측도의 예]]의 (2))에서 모든 $k$에 대해 $f_k = \chi_{\{2\}}$로 둡시다. $\sum_{k=1}^{\infty} f_k(2)$는 모든 항이 $1$인 원소열의 합이므로 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (i)(iv)에 의해 $\infty$이고, $\sum_{k=1}^{\infty} f_k(1) = 0$입니다. 곧 $\sum_{k=1}^{\infty} f_k = \infty\chi_{\{2\}}$입니다. 한편 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 $\int f_k\,d\delta_1 = \delta_1(\{2\}) = 0$이므로 오른쪽의 합은 $0$이고, 왼쪽도 같은 곳에 의해 $\infty \cdot \delta_1(\{2\}) = 0$입니다. (1)은 성립하지만, 적분의 합이 실수라고 해서 급수가 모든 점에서 실수인 것은 아닙니다. 여기서는 급수가 $\infty$인 점 $2$의 측도가 $0$입니다.
:::

## 확인 질문

:::check[모든 $k$에서 $f_k = 2^{-k}f$이면 $\int \sum_{k=1}^{\infty} f_k\,d\mu$는 무엇인가?]
$\int f\,d\mu$입니다. (1)과 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (4)에 의해 이 값은 $\sum_{k=1}^{\infty} 2^{-k} \int f\,d\mu$이고, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (5)(상수배)와 $[0, \infty]$의 곱의 교환법칙에 의해 $\Bigl(\sum_{k=1}^{\infty} 2^{-k}\Bigr) \int f\,d\mu$입니다. [[geometric-series|등비급수]]의 (2)에 의해 첫째 항과 공비가 $\tfrac{1}{2}$인 등비급수의 합은 $1$이고, 같은 합의 항목의 (3)의 (i)에 의해 $[0, \infty]$의 합으로도 $1$이므로 답은 $\int f\,d\mu$입니다.
:::

:::check[$E \in \mathcal{M}$일 때 $\nu_{\chi_E}$는 어떤 측도인가?]
$\mu$를 $E$로 축약한 측도 $\mu^E$입니다. $A \in \mathcal{M}$에서 $\chi_E\chi_A = \chi_{E \cap A}$([[indicator-function|지시함수]]의 (3))이므로 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 $\nu_{\chi_E}(A) = \int \chi_{E \cap A}\,d\mu = \mu(E \cap A)$이고, 이것은 [[measure-examples|측도의 예]]의 (6)의 (i)의 $\mu^E(A)$입니다.
:::
