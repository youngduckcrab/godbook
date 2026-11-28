---
title: 0 이상인 함수의 적분의 덧셈
title_en: Additivity of the Integral of Nonnegative Functions
aliases: [0 이상인 함수의 적분의 가법성, 가측함수의 합의 적분, additivity of the integral of nonnegative functions]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 가측인 [0, ∞] 값 함수 둘의 합의 적분은 적분의 합이고, 서로소인 두 가측집합의 합집합 위의 적분은 두 집합 위의 적분의 합이며, 유한 개의 함수의 합에서도 그렇다. 단순함수의 표준 근사열과 단조 수렴 정리로 증명한다."
requires: [mathematical-induction, power-set, sigma-algebra, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, simple-function-approximation, operations-on-measurable-functions, measure-examples, natural-numbers-are-infinite, integral-of-nonnegative-simple-function, integral-of-nonnegative-measurable-function, monotone-convergence-theorem-for-integrals]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Corollary 5.18 (p.138), Theorem 5.20 의 증명 (p.139); 6장 Lebesgue Integrable Functions 첫머리 (6.1절 앞, p.163); 5.5절 Exercise 5.10, 5.11 (p.156)
    checked: original
    note: "(1)과 (2)는 출처 Corollary 5.18 의 (b)(c)(p.138)이다. 출처의 (a)(실수배)는 이 사이트에서 0 이상인 가측함수의 적분 항목의 (4)이다. 출처의 증명은 Lemma 3.18 의 단조증가하는 단순함수열 s_k, t_k 에 χ_A 를 곱한 열에 Proposition 5.2 와 Theorem 5.17 을 쓴다. 이 항목도 같은 길이고, 출처가 'there exist nondecreasing sequences' 라고 쓴 열을 식으로 정한 표준 근사열 s_k^f, s_k^g 로 잡았으며, A 위의 꼴은 f + g 에 대한 결과를 fχ_A, gχ_A 에 써서 얻었다. 출처의 (b)의 증명의 마지막 등식의 오른쪽은 ∫_A f dµ + ∫_B g dµ 로 인쇄되어 있다. 진술의 오른쪽과 같은 ∫_A g dµ 로 읽어야 등식이 진술과 맞는다. 출처의 (c)는 χ_{A∪B} = χ_A + χ_B 로 (b)에 돌리고 이 항목의 (2)도 같다. (3)의 유한 합의 등식 ∫ Σ_{k=1}^{j} f_k dµ = Σ_{k=1}^{j} ∫ f_k dµ 는 출처 Theorem 5.20(p.139)의 증명이 근거를 적지 않고 쓰는 등식이다. 출처는 MCT 없이 덧셈을 증명하는 길을 Exercise 5.10, 5.11(p.156)로 둔다. 반례 '적분만으로 차의 적분을 정할 수 없는 예'는 출처 6장 첫머리(6.1절 앞, p.163)가 ∫ f⁺ 와 ∫ f⁻ 가 모두 +∞ 이면 (+∞) − (+∞) 꼴이 되어 정해지지 않는다고 적는 것과 같은 까닭이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 증명의 연습문제 번호와 Cor 5.18 마지막 줄을 원문 대조, 디랙 측도의 f(p) = ∞ 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간은 [[measure|측도와 측도공간]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수와 그 가측성, $[0, \infty]$ 값 함수열, $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, $[0, \infty]$ 값 함수의 합 $f + g$와 유한 합 $\sum_{k=1}^{N} f_k$는 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 것이다. 적분 $\int f\,d\mu$와 가측집합 위의 적분 $\int_A f\,d\mu$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고, $[0, \infty]$의 덧셈과 유한 합은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]와 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, $f$, $g$는 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이며, $A$, $E$는 $\mathcal{M}$의 원소이다.

1. (합) $f + g$는 $\mathcal{M}$-가측이고
   $$
   \int (f + g)\,d\mu = \int f\,d\mu + \int g\,d\mu
   $$
   이며, $\int_A (f + g)\,d\mu = \int_A f\,d\mu + \int_A g\,d\mu$이다.
2. (서로소인 두 집합 위의 적분) $A \cap E = \emptyset$이면
   $$
   \int_{A \cup E} f\,d\mu = \int_A f\,d\mu + \int_E f\,d\mu
   $$
   이다.
3. (유한 합) $(f_k)$가 $X$ 위의 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이면, $0$ 이상인 모든 정수 $N$에서 $\sum_{k=1}^{N} f_k$는 $\mathcal{M}$-가측이고
   $$
   \int \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int f_k\,d\mu
   $$
   이며, $\int_A \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int_A f_k\,d\mu$이다. $N = 0$이면 두 쪽이 $0$이다.
:::

:::english
Measure spaces are as in the entry on measures. $[0, \infty]$-valued functions on $X$ and their measurability, sequences of $[0, \infty]$-valued functions, and $f\chi_A$ are as in the entry on measurable functions with values in $[0, \infty]$, and the sum $f + g$ and finite sums $\sum_{k=1}^{N} f_k$ of $[0, \infty]$-valued functions are as in the entry on operations on measurable functions. The integral $\int f\,d\mu$ and integrals $\int_A f\,d\mu$ over measurable sets are as in the entry on integrals of nonnegative measurable functions, and addition and finite sums in $[0, \infty]$ are as in the entries on $[0, \infty]$. Below, $(X, \mathcal{M}, \mu)$ is a measure space, $f$ and $g$ are $\mathcal{M}$-measurable $[0, \infty]$-valued functions on $X$, and $A$ and $E$ are elements of $\mathcal{M}$.

1. (Sums) $f + g$ is $\mathcal{M}$-measurable,
   $$
   \int (f + g)\,d\mu = \int f\,d\mu + \int g\,d\mu,
   $$
   and $\int_A (f + g)\,d\mu = \int_A f\,d\mu + \int_A g\,d\mu$.
2. (Integrals over two disjoint sets) If $A \cap E = \emptyset$, then
   $$
   \int_{A \cup E} f\,d\mu = \int_A f\,d\mu + \int_E f\,d\mu.
   $$
3. (Finite sums) If $(f_k)$ is a sequence of $[0, \infty]$-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable, then for every nonnegative integer $N$ the function $\sum_{k=1}^{N} f_k$ is $\mathcal{M}$-measurable,
   $$
   \int \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int f_k\,d\mu,
   $$
   and $\int_A \sum_{k=1}^{N} f_k\,d\mu = \sum_{k=1}^{N} \int_A f_k\,d\mu$. If $N = 0$, both sides are $0$.
:::

## 직관

두 함수의 그래프를 쌓아 올리면 그 아래의 부피는 각각의 부피를 더한 것이 됩니다. 단순함수에서는 이것이 [[integral-of-nonnegative-simple-function|단순함수의 적분]]의 (3)의 (ii)로 이미 보였습니다. 일반적인 $f$, $g$에서는 정의의 상한이 걸림돌입니다. $f + g$ 아래의 단순함수를 $f$ 아래의 것과 $g$ 아래의 것의 합으로 나누는 방법이 바로 보이지 않기 때문입니다.

그래서 상한을 직접 다루지 않고 [[monotone-convergence-theorem-for-integrals|단조 수렴 정리]]를 씁니다. $f$와 $g$를 각각 아래에서 다가가는 단순함수의 증가열 $s_k$, $t_k$로 근사하면, $s_k + t_k$는 $f + g$로 다가가는 단순함수의 증가열입니다. 단순함수에서는 덧셈이 성립하므로 $\int (s_k + t_k) = \int s_k + \int t_k$이고, 세 열에 단조 수렴 정리를 쓰면 극한에서 같은 등식을 얻습니다. 이 논법은 값 $\infty$를 가리지 않습니다. $[0, \infty]$에서는 단조증가열의 극한이 늘 정해지고 덧셈과 바뀌기 때문입니다.

(2)는 $A$와 $E$가 겹치지 않으면 $\chi_{A \cup E} = \chi_A + \chi_E$라는 것으로 (1)에 돌립니다. 겹치면 겹친 부분 위의 적분을 두 번 세게 되어 등식이 깨질 수 있습니다(아래 확인 질문). 덧셈과 달리 뺄셈은 $[0, \infty]$에 없으므로 차의 적분은 이 항목이 다루지 않습니다.

## 증명

:::idea
표준 근사열 $s_k^f$, $s_k^g$를 더한 열은 $f + g$로 다가가는 단순함수의 증가열이다. 단순함수의 덧셈과 단조 수렴 정리, $[0, \infty]$의 극한과 덧셈의 교환을 쓴다.
:::

:::hint
$\int (f + g)\,d\mu = \lim_k \int (s_k^f + s_k^g)\,d\mu$이고, 단순함수에서는 $\int (s_k^f + s_k^g)\,d\mu = \int s_k^f\,d\mu + \int s_k^g\,d\mu$이다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 유한 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로, $[0, \infty]$ 값 함수의 성질은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수 항목]]의 번호로 인용한다. 단순함수의 적분, 가측함수의 적분, 단조 수렴 정리는 각각 [[integral-of-nonnegative-simple-function|단순함수의 적분 항목]], [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]], [[monotone-convergence-theorem-for-integrals|단조 수렴 정리 항목]]의 번호로 인용하고, 가측함수의 적분의 (1)에 의해 0 이상인 단순함수의 적분은 두 정의 가운데 어느 것으로 읽어도 된다.

**(1)** [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (5)에 의해 $f + g$는 가측이다. $s_k = s_k^f$, $t_k = s_k^g$를 [[simple-function-approximation|단순함수 항목]]의 표준 근사열이라 하자. 그 항목의 (6)에 의해 $s_k$, $t_k$는 0 이상인 단순함수이고 모든 $x$에서 $s_k(x) \le s_{k+1}(x)$, $t_k(x) \le t_{k+1}(x)$, $\lim_k s_k(x) = f(x)$, $\lim_k t_k(x) = g(x)$이다. 단순함수의 적분의 (3)의 (ii)에 의해 $s_k + t_k$는 0 이상인 단순함수이고
$$
\int (s_k + t_k)\,d\mu = \int s_k\,d\mu + \int t_k\,d\mu
$$
이다. 실수의 합은 $[0, \infty]$의 합과 같으므로 $[0, \infty]$의 (3)의 (ii)에 의해 $s_k(x) + t_k(x) \le s_{k+1}(x) + t_{k+1}(x)$이고, (7)의 (iv)에 의해 $\lim_k (s_k(x) + t_k(x)) = f(x) + g(x)$이다. $k$번째 항이 $s_k + t_k$인 실숫값 함수열은 식으로 정해진다. 단조 수렴 정리의 (2)의 (ii)를 이 열과 $f + g$에, (2)의 (i)을 $f$와 $g$에 쓰면
$$
\begin{aligned}
&\int (f + g)\,d\mu \\
&\quad = \lim_{k \to \infty} \int (s_k + t_k)\,d\mu \\
&\quad = \lim_{k \to \infty} \Bigl( \int s_k\,d\mu + \int t_k\,d\mu \Bigr) \\
&\quad = \lim_{k \to \infty} \int s_k\,d\mu \\
&\qquad + \lim_{k \to \infty} \int t_k\,d\mu \\
&\quad = \int f\,d\mu + \int g\,d\mu
\end{aligned}
$$
이다. 셋째 줄은 단조 수렴 정리의 (1)의 (ii)에 의해 $(\int s_k\,d\mu)$, $(\int t_k\,d\mu)$가 단조증가이므로 $[0, \infty]$의 (7)의 (iv)이다.

$A$ 위에서는, $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 $f\chi_A$, $g\chi_A$가 가측이고 $[0, \infty]$의 (4)의 (i)(ii)에 의해 $(f(x) + g(x))\chi_A(x) = f(x)\chi_A(x) + g(x)\chi_A(x)$이므로, 앞의 결과를 $f\chi_A$, $g\chi_A$에 쓰면 된다.

**(2)** [[indicator-function|지시함수]]의 (5)에 의해 모든 $x$에서 $\chi_{A \cup E}(x) = \chi_A(x) + \chi_E(x)$이고, 두 값이 실수이므로 이 합은 $[0, \infty]$의 합이기도 하다. $[0, \infty]$의 (4)의 (ii)에 의해 $f(x)\chi_{A \cup E}(x) = f(x)\chi_A(x) + f(x)\chi_E(x)$이다. [[sigma-algebra|σ-대수]]의 (1)에 의해 $A \cup E \in \mathcal{M}$이고, $f\chi_A$, $f\chi_E$는 가측이므로 (1)에 의해
$$
\begin{aligned}
\int_{A \cup E} f\,d\mu &= \int (f\chi_A + f\chi_E)\,d\mu \\
&= \int_A f\,d\mu + \int_E f\,d\mu
\end{aligned}
$$
이다.

**(3)** 가측함수의 연산과 극한의 (5)에 의해 $\sum_{k=1}^{N} f_k$는 가측이다. 등식을 $N$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $N = 0$이면 유한 합의 (i)에 의해 $\sum_{k=1}^{0} f_k$는 값이 $0$인 상수함수이므로 가측함수의 적분의 (5)에 의해 그 적분은 $0 \cdot \mu(X) = 0$이고, 오른쪽도 빈 합 $0$이다. $N$에서 성립하면 유한 합의 (i)에 의해 모든 $x$에서 $\sum_{k=1}^{N+1} f_k(x) = \sum_{k=1}^{N} f_k(x) + f_{N+1}(x)$이므로, (1)과 귀납 가정과 유한 합의 (i)에 의해
$$
\begin{aligned}
&\int \sum_{k=1}^{N+1} f_k\,d\mu \\
&\quad = \sum_{k=1}^{N} \int f_k\,d\mu + \int f_{N+1}\,d\mu \\
&\quad = \sum_{k=1}^{N+1} \int f_k\,d\mu
\end{aligned}
$$
이다. $A$ 위의 꼴은 $k$번째 항이 $f_k\chi_A$인 함수열(각 항은 가측)에 같은 결과를 쓰고, 유한 합의 (iii)과 $[0, \infty]$의 (4)의 (i)에 의해 $\bigl(\sum_{k=1}^{N} f_k(x)\bigr)\chi_A(x) = \sum_{k=1}^{N} f_k(x)\chi_A(x)$라는 것을 쓴다.
:::

## 예시와 반례

:::example[점마다 나누어 계산하기]
$X = \{1, 2, 3\}$, $\mathcal{M} = \mathscr{P}(X)$([[sigma-algebra|σ-대수]]의 (5))로 두고, [[measure-examples|측도의 예]]의 (3)의 가중 셈측도 $\mu_x$를 $x_1 = 0$, $x_2 = \infty$, $x_3 = 3$(나머지 $x_n$은 아무것이나)으로 잡습니다. $f(1) = \infty$, $f(2) = 0$, $f(3) = 2$인 함수는 $\mathcal{M} = \mathscr{P}(X)$이므로 가측입니다.

$X = \{1\} \cup \{2, 3\}$이고 $\{2, 3\} = \{2\} \cup \{3\}$이므로 (2)를 두 번 쓰고, [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (3)의 (i)과 (5)로 한 점 위의 적분을 구하면
$$
\begin{aligned}
\int f\,d\mu_x &= f(1)\,x_1 + f(2)\,x_2 \\
&\quad + f(3)\,x_3 \\
&= \infty \cdot 0 + 0 \cdot \infty \\
&\quad + 2 \cdot 3 \\
&= 6
\end{aligned}
$$
입니다. 값이 $\infty$인 점의 측도가 $0$이고 측도가 $\infty$인 점의 값이 $0$이어서, 두 곱이 모두 $0$이 됩니다.
:::

:::counterexample[적분만으로 차의 적분을 정할 수 없는 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $g$를 값이 $1$인 상수함수, $f$를 값이 $1$인 상수함수와 값이 $2$인 상수함수 가운데 하나로 둡시다. [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)와 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 어느 경우든 $\int f\,d\mu^{\sharp} = \int g\,d\mu^{\sharp} = \infty$입니다. 그런데 $f - g$는 앞의 경우 값이 $0$인 상수함수로 적분이 $0$이고, 뒤의 경우 값이 $1$인 상수함수로 적분이 $\infty$입니다. 두 적분이 같아도 차의 적분은 다를 수 있으므로, "$\infty - \infty$"에 어떤 값을 주어도 $\int (f - g)\,d\mu = \int f\,d\mu - \int g\,d\mu$가 늘 맞게 할 수는 없습니다.
:::

## 확인 질문

:::check[$\int f\,d\mu$가 실수이고 모든 $x$에서 $g(x) \le f(x)$이면 $\int (f + g)\,d\mu$는 실수인가?]
그렇습니다. [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (2)에 의해 $\int g\,d\mu \le \int f\,d\mu < \infty$이므로 $\int g\,d\mu$도 실수이고, (1)과 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (3)의 (iii)에 의해 두 실수의 합 $\int (f + g)\,d\mu$는 실수입니다.
:::

:::check[서로소가 아닌 두 가측집합 $A$, $E$에서도 (2)의 등식이 성립하는가?]
성립하지 않을 수 있습니다. $X$의 원소 $p$에 대해 $\mu = \delta_p$, $f$를 값이 $1$인 상수함수, $A = E = X$로 두면 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)에 의해 $\int_{A \cup E} f\,d\delta_p = f(p) = 1$이지만 $\int_A f\,d\delta_p + \int_E f\,d\delta_p = 1 + 1 = 2$입니다. 겹친 부분 위의 적분을 두 번 셉니다.
:::
