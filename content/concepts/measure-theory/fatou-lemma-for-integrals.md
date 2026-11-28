---
title: 적분의 파투 보조정리
title_en: Fatou's Lemma for Integrals
aliases: [측도공간에서의 파투 보조정리, 가측함수열의 파투 보조정리, Fatou's lemma for measure spaces, Fatou's lemma for nonnegative measurable functions]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 가측인 [0, ∞] 값 함수열의 하극한의 적분은 적분들의 하극한 이하이다. 함수열이 모두 한 함수 이하이고 점마다의 하극한이 그 함수이면 적분들의 하극한과 상극한이 그 함수의 적분과 같다."
requires: [extended-nonnegative-reals, extended-measurable-function, operations-on-measurable-functions, limit-superior-and-inferior, convergence-iff-limsup-equals-liminf, limit-of-sequence, geometric-series, measure, measure-examples, power-set, sigma-algebra, natural-numbers-are-infinite, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals, integral-with-respect-to-counting-measure]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Example 5.24 (p.140–141), Theorem 5.25 와 그 증명 (p.141–142), Example 5.26 (p.142), Theorem 5.27 (p.143), 단조 수렴 정리 없이 하는 증명 (p.143–144); 5.5절 Exercise 5.31 (p.160); 6.2절 Theorem 6.13 (p.174)
    checked: original
    note: "(1)은 출처 Theorem 5.25(Fatou's Lemma, p.142)이다. 출처의 증명도 g_k = inf_{j≥k} f_j 에 단조 수렴 정리를 쓰고 이 항목도 같다. 출처는 하극한을 확장된 실수 R̄ 에서 정의한 lim inf(Definition 3.27, p.73)으로 쓰고, 이 항목은 가측함수의 연산과 극한의 (6)의 [0, ∞] 의 하극한을 썼다. 출처는 A 위의 꼴을 진술에 두고 A 위에서 바로 증명하는데, 이 항목은 A = X 인 꼴을 먼저 증명하고 f_kχ_A 에 썼다. (2)는 이 항목이 (1)과 단조성에서 끌어낸 것이다. ∫ f dµ 가 실수일 때의 결론은 출처 6.2절 Theorem 6.13(Lebesgue dominated convergence theorem, p.174)에서 지배하는 함수를 f 로 둔 경우와 같은 결론이다. 출처 Theorem 5.27(p.143, 실숫값 함수열이 −g 로 아래가 막힌 꼴)은 싣지 않았다. 출처는 p.143–144 에서 단조 수렴 정리를 쓰지 않는 둘째 증명을 싣고, Exercise 5.31(p.160)은 파투 보조정리에서 단조 수렴 정리를 끌어내라는 문제이다. 출처는 p.141 에서 이 결과가 파투의 1906년 박사논문에 나온다고 그들의 참고문헌 [19] 를 들어 적는다. 반례 '점마다 0 으로 가지만 적분이 1 인 함수열'은 출처 Example 5.26(p.142, 셈측도 위의 (1/k)χ_{{k, …, 2k−1}})과 같은 발상(질량이 점점 큰 번호로 옮겨 간다)이다. 확인 질문 '두 점 위에서 번갈아 바뀌는 함수열에서 (1)의 두 쪽은 무엇인가?'는 출처 Example 5.24(p.140–141, 짝수 집합과 홀수 집합의 지시함수가 번갈아 나오는 열)와 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(a.e. 판 단조 수렴의 예외 집합이 식으로 정해지는지, 마르코프의 이름에 대한 메모, 디랙 측도 확인 질문). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간은 [[measure|측도와 측도공간]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수열과 그 가측성, $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, $[0, \infty]$의 원소열의 하극한 $\liminf_{k \to \infty} a_k$와 상극한 $\limsup_{k \to \infty} a_k$, 함수열의 $\liminf_k f_k$는 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 것이다. 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $(f_k)$는 $X$ 위의 $[0, \infty]$ 값 함수열이며 모든 $f_k$는 $\mathcal{M}$-가측이다. $\int f_k\,d\mu$를 $k$번째 항으로 하는 $[0, \infty]$의 원소열의 하극한과 상극한을 $\liminf_{k \to \infty} \int f_k\,d\mu$, $\limsup_{k \to \infty} \int f_k\,d\mu$로 쓴다.

1. (파투 보조정리) $\liminf_k f_k$는 $\mathcal{M}$-가측이고
   $$
   \int \liminf_{k \to \infty} f_k\,d\mu \le \liminf_{k \to \infty} \int f_k\,d\mu
   $$
   이다. 모든 $A \in \mathcal{M}$에서 $\int_A \liminf_{k \to \infty} f_k\,d\mu \le \liminf_{k \to \infty} \int_A f_k\,d\mu$이다.
2. (위에서 막혀 있을 때) $f$가 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이고, 모든 $x \in X$와 자연수 $k$에서 $f_k(x) \le f(x)$이며, 모든 $x$에서 $\liminf_{k \to \infty} f_k(x) = f(x)$라 하자. 그러면
   $$
   \begin{aligned}
   &\liminf_{k \to \infty} \int f_k\,d\mu \\
   &\quad = \limsup_{k \to \infty} \int f_k\,d\mu \\
   &\quad = \int f\,d\mu
   \end{aligned}
   $$
   이다. $\int f\,d\mu$가 실수이면 모든 $\int f_k\,d\mu$가 실수이고, 실수열 $(\int f_k\,d\mu)$는 [[limit-of-sequence|수열의 극한]]의 뜻으로 $\int f\,d\mu$로 수렴한다.
:::

:::english
Measure spaces are as in the entry on measures. Sequences of $[0, \infty]$-valued functions on $X$, their measurability and $f\chi_A$ are as in the entry on measurable functions with values in $[0, \infty]$; the lower limit $\liminf_{k \to \infty} a_k$ and upper limit $\limsup_{k \to \infty} a_k$ of a sequence in $[0, \infty]$ and $\liminf_k f_k$ of a sequence of functions are as in the entry on operations on measurable functions. The integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on integrals of nonnegative measurable functions. Below, $(X, \mathcal{M}, \mu)$ is a measure space and $(f_k)$ is a sequence of $[0, \infty]$-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable. We write $\liminf_{k \to \infty} \int f_k\,d\mu$ and $\limsup_{k \to \infty} \int f_k\,d\mu$ for the lower and upper limits of the sequence in $[0, \infty]$ whose $k$-th term is $\int f_k\,d\mu$.

1. (Fatou's lemma) $\liminf_k f_k$ is $\mathcal{M}$-measurable and
   $$
   \int \liminf_{k \to \infty} f_k\,d\mu \le \liminf_{k \to \infty} \int f_k\,d\mu.
   $$
   For every $A \in \mathcal{M}$, $\int_A \liminf_{k \to \infty} f_k\,d\mu \le \liminf_{k \to \infty} \int_A f_k\,d\mu$.
2. (When bounded above) Let $f$ be an $\mathcal{M}$-measurable $[0, \infty]$-valued function on $X$ with $f_k(x) \le f(x)$ for all $x \in X$ and natural numbers $k$, and with $\liminf_{k \to \infty} f_k(x) = f(x)$ for all $x$. Then
   $$
   \begin{aligned}
   &\liminf_{k \to \infty} \int f_k\,d\mu \\
   &\quad = \limsup_{k \to \infty} \int f_k\,d\mu \\
   &\quad = \int f\,d\mu.
   \end{aligned}
   $$
   If $\int f\,d\mu$ is a real number, then every $\int f_k\,d\mu$ is real and the real sequence $(\int f_k\,d\mu)$ converges to $\int f\,d\mu$ in the sense of limits of sequences.
:::

## 직관

[[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]는 함수열이 늘어나기만 할 때 극한과 적분을 바꿀 수 있다는 것이었습니다. 늘어나지 않는 함수열에서는 극한이 없을 수도 있고, 있어도 적분과 바꿀 수 없을 수 있습니다(아래 반례). 파투 보조정리는 이런 열에서도 한쪽 부등식은 늘 성립한다는 것입니다. 점마다의 하극한, 곧 "결국 그 아래로는 내려가지 않는 높이"의 적분은 적분들이 결국 내려가지 않는 높이를 넘지 않습니다.

증명은 $g_k = \inf_{j \ge k} f_j$를 씁니다. $g_k$는 $k$번째부터의 함수들이 모두 그 위에 있는 가장 높은 바닥이고, $k$가 커지면 고려하는 함수가 줄어 바닥이 내려가지 않으므로 단조증가하며, 그 극한이 하극한입니다. 단조 수렴 정리를 $g_k$에 쓰고, $g_k \le f_j$($j \ge k$)에서 나오는 적분의 부등식을 극한으로 넘깁니다. 비유로 말하면 바닥이 함수 아래에 있다는 것이 $g_k \le f_j$이고, 바닥이 올라가는 것이 단조증가입니다.

등호는 깨질 수 있습니다. 질량이 점점 먼 곳으로 옮겨 가면 점마다는 $0$이 되지만 적분은 줄지 않기 때문입니다. (2)는 함수들이 모두 극한 $f$ 이하라는 조건이 있으면 이런 일이 일어나지 않는다는 것입니다. 위에서는 단조성이 $\int f_k\,d\mu \le \int f\,d\mu$를 주고, 아래에서는 파투 보조정리가 막아 줍니다.

## 증명

:::idea
$g_k = \inf_{j \ge k} f_j$는 단조증가하고 그 극한이 $\liminf_k f_k$이다. 단조 수렴 정리와 $\int g_k\,d\mu \le \int f_j\,d\mu$($j \ge k$)를 쓴다.
:::

:::hint
$\int g_k\,d\mu$는 $\{\int f_j\,d\mu : j \ge k\}$의 하계이므로 그 하한 이하이다. 그 하한들을 $k$에 대해 모은 것이 적분들의 하극한이다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 하극한과 상극한의 성질은 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (6)의 번호로, 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로 인용한다. $[0, \infty]$의 원소열 $(a_k)$에 대하여 그 항목처럼 $b_n = \inf\{a_k : k \ge n\}$, $c_n = \sup\{a_k : k \ge n\}$로 쓴다.

**(1)** (6)의 (iv)에 의해 자연수 $k$마다 $g_k = \inf_{j \ge k} f_j$는 가측이고 $\liminf_k f_k$도 가측이다. 점 $x$에서 $g_k(x)$는 원소열 $(f_j(x))_j$의 $b_k$이므로, (6)의 (i)에 의해 $(g_k(x))_k$는 단조증가이고 $\lim_k g_k(x) = \liminf_j f_j(x)$이며, $k \le j$이면 $g_k(x) \le f_j(x)$이다. 따라서 가측함수의 적분의 (2)에 의해 $k \le j$이면 $\int g_k\,d\mu \le \int f_j\,d\mu$이다.

$\beta_k = \inf\{\int f_j\,d\mu : j \ge k\}$로 두자. 앞 문장에 의해 $\int g_k\,d\mu$는 이 집합의 하계이므로 하한의 정의에 의해 $\int g_k\,d\mu \le \beta_k$이다. (6)의 (i)에 의해 $(\beta_k)$는 단조증가이고 $\lim_k \beta_k = \liminf_k \int f_k\,d\mu$이다. $k$번째 항이 $g_k$인 함수열은 $(k, x)$마다 값이 정해지는 $[0, \infty]$ 값 함수열이므로 [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)의 (ii)와 $[0, \infty]$의 (7)의 (iv)(비교)에 의해
$$
\begin{aligned}
&\int \liminf_{k \to \infty} f_k\,d\mu \\
&\quad = \lim_{k \to \infty} \int g_k\,d\mu \le \lim_{k \to \infty} \beta_k \\
&\quad = \liminf_{k \to \infty} \int f_k\,d\mu
\end{aligned}
$$
이다.

$A \in \mathcal{M}$이면 $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 $f_k\chi_A$는 가측이다. $x \in A$이면 원소열 $(f_k(x)\chi_A(x))$는 $(f_k(x))$와 같고, $x \notin A$이면 모든 항이 $0$이어서 $b_n = \inf\{0\} = 0$이고 하극한이 $\sup\{0\} = 0$이다. 그래서 $\liminf_k (f_k\chi_A) = (\liminf_k f_k)\chi_A$이고, 앞의 결과를 $f_k\chi_A$에 쓰면 가측집합 위의 적분의 정의에 의해 둘째 문장이 된다.

**(2)** $a_k = \int f_k\,d\mu$로 쓰자. 가측함수의 적분의 (2)에 의해 모든 $k$에서 $a_k \le \int f\,d\mu$이다. 따라서 $\int f\,d\mu$는 $\{a_k : k \ge 1\}$의 상계이고 $c_1 \le \int f\,d\mu$이며, 상극한은 $\{c_n\}$의 하한이므로 $\limsup_k a_k \le c_1 \le \int f\,d\mu$이다. 한편 (1)과 가정에 의해 $\int f\,d\mu = \int \liminf_k f_k\,d\mu \le \liminf_k a_k$이다.

이제 $\liminf_k a_k \le \limsup_k a_k$이다. 자연수 $n$, $m$에서 $k$를 $n$과 $m$ 가운데 큰 쪽으로 두면 (6)의 (i)에 의해 $b_n \le a_k \le c_m$이다. 그래서 각 $c_m$은 $\{b_n\}$의 상계이고 $\liminf_k a_k = \sup\{b_n\} \le c_m$이며, 이것이 모든 $m$에서 성립하므로 $\liminf_k a_k$는 $\{c_m\}$의 하계이고 $\limsup_k a_k$ 이하이다. 세 부등식과 $[0, \infty]$의 (2)의 (ii)에 의해 세 값이 같다.

$\int f\,d\mu$가 실수이면 $a_k \le \int f\,d\mu$이므로 $[0, \infty]$의 (2)의 (iv)에 의해 모든 $a_k$는 실수이고, $0 \le a_k \le \int f\,d\mu$이므로 실수열 $(a_k)$는 유계이다. (6)의 (iii)에 의해 이 항목의 하극한과 상극한은 [[limit-superior-and-inferior|상극한과 하극한]]의 것과 같고, 둘이 $\int f\,d\mu$로 같으므로 [[convergence-iff-limsup-equals-liminf|상극한과 하극한이 같으면 수렴한다]]에 의해 $(a_k)$는 $\int f\,d\mu$로 수렴한다.
:::

## 예시와 반례

:::example[(2)를 쓰는 단조가 아닌 열]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $f(n) = 2^{-n}$이라 하고, $k$가 짝수이면 $f_k = f$, $k$가 홀수이면 $f_k = f\chi_{\{1, \dots, k-1\}}$로 둡시다($k = 1$이면 $\{1, \dots, 0\} = \emptyset$). 모든 $k$, $n$에서 $f_k(n) \le f(n)$입니다. $n$을 고정하면 $k > n$에서 $f_k(n) = f(n)$이므로 하극한은 $f(n)$입니다. 그러나 $n \ge 3$이면 $f_2(n) = f(n) > 0 = f_3(n)$이므로 $(f_k(n))$은 단조증가가 아닙니다.

[[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (2)와 [[geometric-series|등비급수]]의 (1)(2)에 의해 $\int f\,d\mu^{\sharp} = 1$이고, $k$가 홀수이면 $\int f_k\,d\mu^{\sharp} = \sum_{n=1}^{k-1} 2^{-n} = 1 - 2^{-(k-1)}$, 짝수이면 $1$입니다. (2)가 말하는 대로 이 실수열은 $1$로 수렴합니다.
:::

:::counterexample[점마다 0 으로 가지만 적분이 1 인 함수열]
$X = \mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$에서 $f_k = \chi_{\{k\}}$라 합시다. $n$을 고정하면 $k > n$에서 $f_k(n) = 0$이므로 하극한은 모든 점에서 $0$이고, 그 적분은 $0$입니다. 반면 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 모든 $k$에서 $\int f_k\,d\mu^{\sharp} = \mu^{\sharp}(\{k\}) = 1$이므로 적분들의 하극한은 $1$입니다. (1)의 부등식이 $0 < 1$로 엄격합니다. 함수들이 극한 $0$ 이하가 아니므로 (2)의 가정도 성립하지 않습니다.
:::

## 확인 질문

:::check[모든 점에서 $(f_k(x))$가 단조증가하면 (1)의 두 쪽은 어떻게 되는가?]
같아집니다. [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (6)의 (ii)에 의해 점마다 $\liminf_k f_k(x) = \lim_k f_k(x)$이고, [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]의 (1)의 (ii)에 의해 왼쪽은 $\lim_k \int f_k\,d\mu$입니다. 이 원소열도 단조증가이므로 같은 (6)의 (ii)에 의해 오른쪽도 그 값입니다.
:::

:::check[두 점 위에서 번갈아 바뀌는 함수열에서 (1)의 두 쪽은 무엇인가?]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1 + \delta_2$에서 $k$가 홀수이면 $f_k = \chi_{\{1\}}$, 짝수이면 $f_k = \chi_{\{2\}}$라 합시다. 각 점에서 값이 $1$과 $0$을 번갈아 가므로 하극한은 $0$이고 왼쪽은 $0$입니다. [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 모든 $k$에서 $\int f_k\,d\mu = 1$이므로 오른쪽은 $1$입니다.
:::
