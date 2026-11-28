---
title: 0 이상인 가측함수의 적분
title_en: Integral of Nonnegative Measurable Functions
aliases: [가측함수의 적분, 0 이상인 함수의 르베그 적분, 가측집합 위의 적분, 디랙 측도에 대한 적분, integral of a nonnegative measurable function, Lebesgue integral of nonnegative functions]
kind: definition
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 가측인 [0, ∞] 값 함수의 적분을 그 함수 아래에 있는 0 이상인 단순함수의 적분의 상한으로 정의하고, 단순함수에서 앞의 적분과 같다는 것, 단조성, 가측집합 위의 적분, 실수배, 한 집합 위에서 ∞ 를 포함한 상수인 함수의 적분, 디랙 측도에 대한 적분 f(p) 를 증명한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, power-set, sigma-algebra, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, extended-measurable-function, simple-function-approximation, measure, measure-examples, natural-numbers-are-infinite, integral-of-nonnegative-simple-function]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.2절 The integral of nonnegative measurable functions, Definition 5.9 와 Proposition 5.10 (p.128), Definition 5.12, Proposition 5.13, Example 5.14 (p.131–132); 5.3절 Corollary 5.18 (a) (p.138); 5.5절 Exercise 5.1, 5.2 (p.155), Exercise 5.8, 5.9, 5.11 (p.156), Exercise 5.14 (p.157); 6.4절 Exercise 6.4 의 실마리 (p.185)
    checked: original
    note: "출처의 Definition 5.9(p.128)는 f ∈ M̄⁺(X, S)(0 이상인 S-가측 함수 X → R̄, p.122 첫머리)에 대하여 S(f) 를 s ≤ f 인 0 이상인 S-단순함수 전체로 두고 ∫_X f dµ := sup{∫_X s dµ : s ∈ S(f)} 로 정의한다. 이 항목은 R̄ 대신 [0, ∞] 값 함수를 쓰고 ∫_X f dµ 를 ∫ f dµ 로 적었다(∫_X f dµ = ∫ f dµ 는 (3)의 (i)). 단조성 (2)는 출처가 Exercise 5.8(p.156)로 돌린 것이다. 출처 Proposition 5.10(p.128)이 (1)의 첫째 등식이다. 출처 Definition 5.12(p.131)가 가측집합 위의 적분이고, Proposition 5.13(p.131)의 (a)(b)가 (3)의 (ii)(iv)이다. 출처는 상수배를 Corollary 5.18 (a)(p.138)에서 단조 수렴 정리로 증명하고, 단조 수렴 정리 없이 하는 증명을 Exercise 5.11 (a)(p.156)로 둔다. 출처 Exercise 5.9(p.156)는 s 를 cs 로 보내는 함수 S(f) → S(cf) 가 단사임을 보이라는 문제이다(Exercise 5.11 의 실마리는 (a)에 Exercise 5.8, (b)에 Exercise 5.9 를 쓰라고 적는다). 이 항목의 (4)는 단조 수렴 정리 없이 s 와 cs 를 오가는 대응으로 증명하므로 Exercise 5.9 의 대응과 같은 발상이다. 출처 Example 5.14(p.131–132)는 S-가측인 모든 f ∈ M̄⁺(X, S) 에 대해 ∫_X f dδ_{x0} = f(x0) 라고 진술하지만, 증명의 둘째 경우에 쓰는 s0 := f(x0)·χ_{A0} 는 f(x0) = +∞ 이면 실숫값 함수가 아니어서 단순함수가 아니다. 이 항목의 (6)은 f(p) = ∞ 인 경우를 (5)로 따로 증명했다. 출처는 그 예 뒤(p.132)에서 A 위의 적분이 f(x0)·χ_A(x0) 라고 적고, (6)의 둘째 등식과 같다. (5)의 c 가 실수일 때의 ∫ cχ_A dµ = cµ(A) 의 c = 1 인 경우가 출처 Exercise 5.1(p.155)이고, A = X 이고 c > 0 인 경우가 출처 Exercise 5.2(p.155)이다. 예시 '두 점에 질량을 둔 측도와 항등함수'의 측도 δ_1 + δ_2 는 출처 Exercise 5.14(p.157, 측도의 합 µ + ν 에 대한 적분)와 같은 종류의 대상이다. 반례 '어디서도 ∞ 가 아닌 함수의 적분이 ∞ 인 예'는 출처 Exercise 5.2(p.155)의 상수함수의 적분 cµ(X) 를 c = 1 과 셈측도에 쓴 것이다. 반례 '값이 ∞ 인 점이 있어도 적분이 0 인 예'는 출처 Exercise 6.4 의 실마리(p.185)가 쓰는, 측도가 0 인 집합 위에서 +∞ 이고 밖에서 0 인 함수 h 의 적분이 0 이라는 것과 같은 발상이고, 그 값은 출처 Proposition 5.13 (b)(p.131)로도 나온다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 증명의 연습문제 번호와 Cor 5.18 마지막 줄을 원문 대조, 디랙 측도의 f(p) = ∞ 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 측도의 성질은 [[measure|측도와 측도공간]]의 것이고, 디랙 측도 $\delta_p$, 측도의 일차결합, 셈측도 $\mu^{\sharp}$는 [[measure-examples|측도의 예]]의 것이다. 0 이상인 단순함수와 그 적분 $\int s\,d\mu$, 가측집합 위의 적분 $\int_A s\,d\mu$는 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수, 그 가측성, $[0, \infty]$의 원소 $c$에 대한 $cf$, $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, $[0, \infty]$와 그 순서, 곱셈, 상한은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, "가측"은 $\mathcal{M}$-가측을 뜻한다.

**아래에 있는 단순함수.** $f$가 $X$ 위의 가측인 $[0, \infty]$ 값 함수라 하자. 0 이상인 단순함수 $s$ 가운데 모든 $x \in X$에서 $s(x) \le f(x)$인 것 전체의 집합을 $S(f)$로 쓴다. 부등호는 실수 $s(x)$를 $[0, \infty]$의 원소로 보아 $[0, \infty]$의 순서로 읽는다. 값이 $0$인 상수함수는 $S(f)$에 속한다.

**적분.** $f$가 $X$ 위의 가측인 $[0, \infty]$ 값 함수이면
$$
\int f\,d\mu = \sup\Bigl\{\int s\,d\mu : s \in S(f)\Bigr\}
$$
로 정한다. 오른쪽은 $y = \int s\,d\mu$인 $s \in S(f)$가 있는 $y \in [0, \infty]$ 전체로 된 $[0, \infty]$의 부분집합의 상한이고, $[0, \infty]$의 원소 하나로 정해진다. 이것을 $f$의 $\mu$에 대한 **적분**(integral)이라 한다.

**가측집합 위의 적분.** $A \in \mathcal{M}$이면 $f\chi_A$는 가측이고,
$$
\int_A f\,d\mu = \int f\chi_A\,d\mu
$$
로 정한다. 이것을 $f$의 $A$ 위의 적분이라 한다.

0 이상인 단순함수 $s$는 가측인 $[0, \infty]$ 값 함수이기도 하므로 $\int s\,d\mu$와 $\int_A s\,d\mu$가 이 항목과 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]의 두 정의로 읽히는데, 아래 (1)에 의해 두 값은 같다.

다음이 성립한다. 아래에서 $f$, $g$는 $X$ 위의 가측인 $[0, \infty]$ 값 함수이고 $A$, $E$는 $\mathcal{M}$의 원소이다.

1. (단순함수에서의 일치) $s$가 0 이상인 단순함수이면, 이 항목의 정의로 읽은 $\int s\,d\mu$와 $\int_A s\,d\mu$는 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]의 정의로 읽은 것과 같다.
2. (단조성) 모든 $x \in X$에서 $f(x) \le g(x)$이면 $\int f\,d\mu \le \int g\,d\mu$이다. $s \in S(f)$이면 $\int s\,d\mu \le \int f\,d\mu$이다.
3. (가측집합 위의 적분)
   - (i) $\int_X f\,d\mu = \int f\,d\mu$이고 $\int_A f\,d\mu \le \int f\,d\mu$이다.
   - (ii) $A \subseteq E$이면 $\int_A f\,d\mu \le \int_E f\,d\mu$이다.
   - (iii) $A$의 모든 원소 $x$에서 $f(x) \le g(x)$이면 $\int_A f\,d\mu \le \int_A g\,d\mu$이다. 특히 $A$의 모든 원소 $x$에서 $f(x) = g(x)$이면 $\int_A f\,d\mu = \int_A g\,d\mu$이다.
   - (iv) $\mu(A) = 0$이면 $\int_A f\,d\mu = 0$이다.
   - (v) $A$에 속하지 않는 모든 $x$에서 $f(x) = 0$이면 $\int_A f\,d\mu = \int f\,d\mu$이다.
4. (실수배) $c$가 $0$ 이상인 실수이면 $\int cf\,d\mu = c \int f\,d\mu$이고 $\int_A cf\,d\mu = c \int_A f\,d\mu$이다.
5. (한 집합 위에서 상수인 함수) $c \in [0, \infty]$이면 $\int c\chi_A\,d\mu = c\,\mu(A)$이다. 더 일반적으로, $A$의 모든 원소 $x$에서 $f(x) = c$이면 $\int_A f\,d\mu = c\,\mu(A)$이다. $c = \infty$이고 $\mu(A) = 0$이면 이 값은 $\infty \cdot 0 = 0$이다.
6. (디랙 측도) $p \in X$이면 $(X, \mathcal{M}, \delta_p)$에서 $\int f\,d\delta_p = f(p)$이고 $\int_A f\,d\delta_p = f(p)\,\chi_A(p)$이다. $f(p) = \infty$여도 된다.
:::

:::english
Measure spaces and properties of measures are as in the entry on measures; Dirac measures $\delta_p$, linear combinations of measures and the counting measure $\mu^{\sharp}$ are as in the entry on examples of measures. Nonnegative simple functions, their integral $\int s\,d\mu$ and integrals $\int_A s\,d\mu$ over measurable sets are as in the entry on integrals of nonnegative simple functions. $[0, \infty]$-valued functions on $X$, their measurability, $cf$ for $c \in [0, \infty]$, and $f\chi_A$ are as in the entry on measurable functions with values in $[0, \infty]$, and $[0, \infty]$ with its order, multiplication and suprema is as in its own entry. Below, $(X, \mathcal{M}, \mu)$ is a measure space and "measurable" means $\mathcal{M}$-measurable.

**Simple functions below $f$.** Let $f$ be a measurable $[0, \infty]$-valued function on $X$. Denote by $S(f)$ the set of all nonnegative simple functions $s$ with $s(x) \le f(x)$ for all $x \in X$, where the inequality is read in the order of $[0, \infty]$ with the real number $s(x)$ regarded as an element of $[0, \infty]$. The constant function with value $0$ belongs to $S(f)$.

**Integral.** If $f$ is a measurable $[0, \infty]$-valued function on $X$, set
$$
\int f\,d\mu = \sup\Bigl\{\int s\,d\mu : s \in S(f)\Bigr\}.
$$
The right-hand side is the supremum of the subset of $[0, \infty]$ consisting of all $y \in [0, \infty]$ such that $y = \int s\,d\mu$ for some $s \in S(f)$; it is a single element of $[0, \infty]$. It is called the **integral** of $f$ with respect to $\mu$.

**Integral over a measurable set.** If $A \in \mathcal{M}$, then $f\chi_A$ is measurable, and we set
$$
\int_A f\,d\mu = \int f\chi_A\,d\mu.
$$
This is called the integral of $f$ over $A$.

A nonnegative simple function $s$ is also a measurable $[0, \infty]$-valued function, so $\int s\,d\mu$ and $\int_A s\,d\mu$ can be read with the definition here and with the definition for simple functions; by (1) below the two values agree.

The following hold. Below, $f$ and $g$ are measurable $[0, \infty]$-valued functions on $X$, and $A$ and $E$ are elements of $\mathcal{M}$.

1. (Agreement on simple functions) If $s$ is a nonnegative simple function, then $\int s\,d\mu$ and $\int_A s\,d\mu$ read with the definition here equal those read with the definition for nonnegative simple functions.
2. (Monotonicity) If $f(x) \le g(x)$ for all $x \in X$, then $\int f\,d\mu \le \int g\,d\mu$. If $s \in S(f)$, then $\int s\,d\mu \le \int f\,d\mu$.
3. (Integrals over measurable sets)
   - (i) $\int_X f\,d\mu = \int f\,d\mu$ and $\int_A f\,d\mu \le \int f\,d\mu$.
   - (ii) If $A \subseteq E$, then $\int_A f\,d\mu \le \int_E f\,d\mu$.
   - (iii) If $f(x) \le g(x)$ for all $x \in A$, then $\int_A f\,d\mu \le \int_A g\,d\mu$. In particular, if $f(x) = g(x)$ for all $x \in A$, then $\int_A f\,d\mu = \int_A g\,d\mu$.
   - (iv) If $\mu(A) = 0$, then $\int_A f\,d\mu = 0$.
   - (v) If $f(x) = 0$ for all $x$ not in $A$, then $\int_A f\,d\mu = \int f\,d\mu$.
4. (Real multiples) If $c$ is a nonnegative real, then $\int cf\,d\mu = c \int f\,d\mu$ and $\int_A cf\,d\mu = c \int_A f\,d\mu$.
5. (Functions constant on a set) If $c \in [0, \infty]$, then $\int c\chi_A\,d\mu = c\,\mu(A)$. More generally, if $f(x) = c$ for all $x \in A$, then $\int_A f\,d\mu = c\,\mu(A)$. If $c = \infty$ and $\mu(A) = 0$, this value is $\infty \cdot 0 = 0$.
6. (Dirac measures) If $p \in X$, then in $(X, \mathcal{M}, \delta_p)$ we have $\int f\,d\delta_p = f(p)$ and $\int_A f\,d\delta_p = f(p)\,\chi_A(p)$. Here $f(p) = \infty$ is allowed.
:::

## 직관

단순함수의 적분은 기둥들의 부피를 더한 것이었습니다. 일반적인 $0$ 이상인 가측함수 $f$는 그래프 아래를 단순함수의 기둥들로 아래에서부터 채워 잽니다. 기둥이 그래프를 뚫고 나가지 않는 한($s \le f$) 어떤 기둥을 세워도 되고, 세울 수 있는 기둥들의 부피 가운데 가장 큰 값, 정확히는 상한이 $f$의 적분입니다. 물을 부어 그릇의 부피를 재는 대신 그릇 안에 들어가는 블록들의 부피를 재는 셈입니다. 블록이 그릇 밖으로 나가지 않는다는 것이 $s \le f$이고, 가장 큰 블록 대신 블록들의 부피의 상한을 잡는다는 점이 비유보다 정확한 부분입니다. 블록의 부피가 끝없이 커지면 적분은 $\infty$입니다.

이 정의는 위로 근사하는 쪽을 쓰지 않습니다. $f$가 $\infty$나 끝없이 큰 값을 가지면 위에서 덮는 단순함수가 없고, $\mu(X) = \infty$이면 위에서 덮는 단순함수의 적분이 모두 $\infty$일 수 있기 때문입니다. 아래에서 채우는 상한은 늘 $[0, \infty]$의 원소 하나로 정해집니다.

정의에서 바로 나오는 성질은 단조성 (2)와 가측집합 위의 적분의 성질 (3), 실수배 (4)입니다. (5)는 값 $\infty$를 갖는 함수도 다룹니다. $A$ 위에서 값이 $\infty$이고 밖에서 $0$인 함수 $\infty\chi_A$의 적분은 $\mu(A) = 0$이면 $0$이고, $\mu(A) > 0$이면 $\infty$입니다. 실수 높이 $n$의 기둥을 세워 $n\,\mu(A)$가 끝없이 커지는 것을 보면 됩니다. 덧셈 $\int (f + g)\,d\mu = \int f\,d\mu + \int g\,d\mu$는 정의만으로는 보이기 어렵습니다. $f + g$ 아래의 단순함수를 $f$ 아래와 $g$ 아래로 나누는 방법이 바로 보이지 않기 때문인데, 다음 항목들의 단조 수렴 정리가 이 일을 합니다.

## 성질의 증명

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, $[0, \infty]$ 값 함수의 성질은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수 항목]]의 번호로, 단순함수의 적분의 성질은 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분 항목]]의 번호로 인용한다. 셋째 것을 "단순함수의 적분의 (n)"이라 부른다. $[0, \infty]$ 값 함수 $h$와 $A \in \mathcal{M}$에서 $h\chi_A$의 값은 $x \in A$이면 $h(x)$이고 $x \notin A$이면 $0$이다($[0, \infty]$ 값 함수 항목의 (4)의 (iii)).

**정의에 관하여.** $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 $f\chi_A$는 가측이다. [[simple-function-approximation|단순함수 항목]]의 (5)에 의해 상수함수 $0$은 단순함수이고, $[0, \infty]$의 (2)의 (iv)에 의해 $0 \le f(x)$이므로 $0 \in S(f)$이다. 0 이상인 단순함수 $s$는 $[0, \infty]$ 값 함수 항목의 (3)의 (i)에 의해 가측인 $[0, \infty]$ 값 함수이다.

**(1)** 단순함수의 적분의 정의로 읽은 값을 $\int' s\,d\mu$라 하자. $s \le s$이므로 $s \in S(s)$이고 $\int' s\,d\mu$는 상한을 잡는 집합에 속하므로 그 상한 이하이다. 거꾸로 $t \in S(s)$이면 단순함수의 적분의 (5)에 의해 $\int' t\,d\mu \le \int' s\,d\mu$이므로 $\int' s\,d\mu$는 그 집합의 상계이고, 상한은 그 이하이다. $[0, \infty]$의 (2)의 (ii)에 의해 두 값이 같다. $A$ 위의 적분은 두 정의 모두 $\int s\chi_A$이다. $s(x)\chi_A(x)$는 두 실수의 곱이고 $[0, \infty]$의 정의에 의해 $[0, \infty]$의 곱과 같으므로 두 정의의 $s\chi_A$는 같은 함수이고, 단순함수의 적분의 (6)의 (i)에 의해 0 이상인 단순함수이므로 앞의 문장을 쓰면 된다.

아래에서는 (1)에 의해 0 이상인 단순함수의 적분을 두 정의 가운데 어느 것으로 읽어도 된다.

**(2)** $s \in S(f)$이면 $[0, \infty]$의 (2)의 (ii)(추이)에 의해 모든 $x$에서 $s(x) \le f(x) \le g(x)$이므로 $s \in S(g)$이다. 따라서 $f$의 상한을 잡는 집합은 $g$의 것에 포함되고, $[0, \infty]$의 (5)의 (vi)에 의해 $\int f\,d\mu \le \int g\,d\mu$이다. 둘째 문장은 $\int s\,d\mu$가 상한을 잡는 집합에 속한다는 것이다.

**(3)** (i) [[indicator-function|지시함수]]의 (1)에 의해 $\chi_X$의 값은 모든 점에서 $1$이므로 $f\chi_X = f$이다. 또 모든 $x$에서 $f(x)\chi_A(x) \le f(x)$이므로 (2)를 쓴다($x \notin A$이면 $0 \le f(x)$).

(ii) $A \subseteq E$이면 모든 $x$에서 $f(x)\chi_A(x) \le f(x)\chi_E(x)$이다: $x \in A$이면 두 쪽이 $f(x)$이고, $x \notin A$이면 왼쪽이 $0$이다. (2)를 쓴다.

(iii) $x \in A$이면 $f(x)\chi_A(x) = f(x) \le g(x) = g(x)\chi_A(x)$이고 $x \notin A$이면 두 쪽이 $0$이므로 (2)를 쓴다. 같음은 $\le$를 두 방향으로 쓰고 $[0, \infty]$의 (2)의 (ii)를 쓴다.

(iv) $s \in S(f\chi_A)$라 하자. $x \notin A$이면 $0 \le s(x) \le f(x)\chi_A(x) = 0$이므로 $s(x) = 0$이다. 단순함수의 적분의 (6)의 (ii)에 의해 $\int s\,d\mu = \int_A s\,d\mu$이고, $\mu(A) = 0$이므로 같은 곳에 의해 이 값은 $0$이다. 따라서 상한을 잡는 집합은 $\{0\}$이고 그 상한은 $0$이다.

(v) $x \notin A$이면 $f(x)\chi_A(x) = 0 = f(x)$이고 $x \in A$이면 $f(x)\chi_A(x) = f(x)$이므로 $f\chi_A = f$이다.

**(4)** $[0, \infty]$ 값 함수 항목의 (4)의 (ii)에 의해 $cf$는 가측이다. $c = 0$이면 $[0, \infty]$의 (4)의 (i)에 의해 $cf$는 값이 $0$인 상수함수이고, 단순함수의 적분의 (2)와 (1)에 의해 그 적분은 $0 = 0 \cdot \int f\,d\mu$이다.

$c > 0$이라 하자. $s \in S(f)$이면 단순함수의 적분의 (3)의 (i)에 의해 $cs$는 0 이상인 단순함수이고 $\int cs\,d\mu = c\int s\,d\mu$이며, $[0, \infty]$의 (4)의 (iii)에 의해 $cs(x) \le cf(x)$이므로 $cs \in S(cf)$이다. 그래서 $c\int s\,d\mu \le \int cf\,d\mu$이고, $[0, \infty]$의 (6)의 (ii)에 의해
$$
\begin{aligned}
&c\int f\,d\mu \\
&\quad = \sup\Bigl\{c\int s\,d\mu : s \in S(f)\Bigr\} \\
&\quad \le \int cf\,d\mu
\end{aligned}
$$
이다. 거꾸로 $u \in S(cf)$이면 $c^{-1}u$는 0 이상인 단순함수이고, $[0, \infty]$의 (4)의 (i)(iii)에 의해 $c^{-1}u(x) \le c^{-1}(c f(x)) = (c^{-1}c)f(x) = f(x)$이므로 $c^{-1}u \in S(f)$이다. 단순함수의 적분의 (3)의 (i)에 의해 $\int u\,d\mu = \int c(c^{-1}u)\,d\mu = c\int c^{-1}u\,d\mu \le c\int f\,d\mu$이다(마지막은 (2)와 $[0, \infty]$의 (4)의 (iii)). 따라서 $c\int f\,d\mu$는 상계이고 $\int cf\,d\mu \le c\int f\,d\mu$이다. $[0, \infty]$의 (2)의 (ii)에 의해 같다.

$A$ 위에서는 $[0, \infty]$의 (4)의 (i)에 의해 $(cf)\chi_A = c(f\chi_A)$이므로 앞의 결과를 $f\chi_A$에 쓴다.

**(5)** $c$가 실수이면 [[measurable-function|가측함수]]의 (6)에 의해 $\chi_A$가 가측이고, 단순함수의 적분의 (2)와 (1)에 의해 $\int c\chi_A\,d\mu = c\,\mu(A)$이다.

$c = \infty$라 하고 $h = \infty\chi_A$로 두자. $\mu(A) = 0$이면 $A$ 밖에서 $h = 0$이므로 (3)의 (v)와 (iv)에 의해 $\int h\,d\mu = \int_A h\,d\mu = 0 = \infty \cdot 0$이다. $\mu(A) > 0$이라 하자. 자연수 $n$마다 $n\chi_A$는 0 이상인 단순함수이고, $x \in A$에서 $n \le \infty = h(x)$, $x \notin A$에서 $0 = h(x)$이므로 $n\chi_A \in S(h)$이다. 단순함수의 적분의 (2), 이 항목의 (1)과 (2)에 의해 모든 자연수 $n$에서 $n\,\mu(A) \le \int h\,d\mu$이다. $\mu(A) = \infty$이면 $[0, \infty]$의 (4)의 (i)에 의해 $1\,\mu(A) = \infty$이므로 $\int h\,d\mu = \infty$이다. $\mu(A)$가 양의 실수 $a$이고 $\int h\,d\mu$가 실수 $b$라면, [[archimedean-property|아르키메데스 성질]]의 (2)에 의해 $b < na$인 자연수 $n$이 있어 $na \le b$에 어긋난다. 따라서 $[0, \infty]$의 (2)의 (iv)에 의해 $\int h\,d\mu = \infty$이다. 어느 경우든 $[0, \infty]$의 (4)의 (i)에 의해 $\infty\,\mu(A) = \infty$이므로 등식이 성립한다.

둘째 문장: $x \in A$에서 $f(x)\chi_A(x) = c = c\,\chi_A(x)$이고, $x \notin A$에서 두 쪽이 $0$이므로 $f\chi_A = c\chi_A$이다. 첫째 문장을 쓴다.

**(6)** 디랙 측도 $\delta_p$는 [[measure-examples|측도의 예]]의 (2)에 의해 $(X, \mathcal{M})$ 위의 측도이고 $\delta_p(B) = \chi_B(p)$이다. $p \in X$이므로 $X \ne \emptyset$이다.

먼저 0 이상인 단순함수 $s$에서 $\int s\,d\delta_p = s(p)$이다. $s$의 표준 표현을 $N$, $\alpha_j$, $A_j$라 하면 단순함수 항목의 (2)에 의해 $p$는 정확히 하나의 $A_{j^*}$에 속하므로, [[indicator-function|지시함수]]의 (1)에 의해 $\delta_p(A_{j^*}) = 1$이고 $j \ne j^*$이면 $\delta_p(A_j) = 0$이다. $[0, \infty]$의 (4)의 (i)과 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (1)의 (vi)에 의해 $\int s\,d\delta_p = \sum_{j=1}^{N} \alpha_j\,\delta_p(A_j) = \alpha_{j^*} = s(p)$이다.

$s \in S(f)$이면 $\int s\,d\delta_p = s(p) \le f(p)$이므로 $f(p)$는 상한을 잡는 집합의 상계이고 $\int f\,d\delta_p \le f(p)$이다. 거꾸로, $f(p)$가 실수이면 $B = \{f \ge f(p)\}$는 $[0, \infty]$ 값 함수 항목의 (1)에 의해 $\mathcal{M}$의 원소이고 $p \in B$이다. $s_0 = f(p)\chi_B$는 단순함수의 적분의 (2)에 의해 0 이상인 단순함수이고, $x \in B$에서 $s_0(x) = f(p) \le f(x)$, $x \notin B$에서 $s_0(x) = 0 \le f(x)$이므로 $s_0 \in S(f)$이다. 앞 문단에 의해 $\int s_0\,d\delta_p = s_0(p) = f(p)$이므로 (2)에 의해 $f(p) \le \int f\,d\delta_p$이다. $f(p) = \infty$이면 $B = \{f = \infty\}$는 $[0, \infty]$ 값 함수 항목의 (2)에 의해 $\mathcal{M}$의 원소이고 $p \in B$이다. 모든 $x$에서 $\infty\chi_B(x) \le f(x)$이므로 (2)와 (5)에 의해 $\int f\,d\delta_p \ge \infty \cdot \delta_p(B) = \infty \cdot 1 = \infty$이다. 어느 경우든 $[0, \infty]$의 (2)의 (ii)에 의해 $\int f\,d\delta_p = f(p)$이다.

$A$ 위에서는 앞의 결과를 가측인 $f\chi_A$에 쓰면 $\int_A f\,d\delta_p = (f\chi_A)(p) = f(p)\,\chi_A(p)$이다.
:::

## 예시와 반례

:::example[두 점에 질량을 둔 측도와 항등함수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$([[sigma-algebra|σ-대수]]의 (5))으로 두고 [[measure-examples|측도의 예]]의 (5)의 (iii)으로 $\mu = \delta_1 + \delta_2$를 잡습니다. $f(n) = n$인 함수는 $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 가측인 $[0, \infty]$ 값 함수입니다. 정의대로 $\int f\,d\mu$를 구해 봅시다.

$s \in S(f)$의 표준 표현을 $N$, $\alpha_j$, $A_j$라 하면, [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (4)의 (ii)(분배법칙)와 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (1)의 (iii)에 의해
$$
\begin{aligned}
\int s\,d\mu &= \sum_{j=1}^{N} \alpha_j\,\delta_1(A_j) \\
&\quad + \sum_{j=1}^{N} \alpha_j\,\delta_2(A_j)
\end{aligned}
$$
입니다. 오른쪽의 두 합은 같은 표준 표현으로 정의한 $\int s\,d\delta_1$과 $\int s\,d\delta_2$이므로 (1)과 (6)에 의해 $s(1) + s(2)$이고, $s \le f$이므로 $[0, \infty]$의 (3)의 (ii)에 의해 이 값은 $1 + 2 = 3$ 이하입니다. 한편 $s_0 = \chi_{\{1\}} + 2\chi_{\{2\}}$는 $s_0(1) = 1$, $s_0(2) = 2$, 나머지 점에서 $0$이므로 $S(f)$에 속하고, [[integral-of-nonnegative-simple-function|단순함수의 적분]]의 (4)에 의해 $\int s_0\,d\mu = 1 \cdot \mu(\{1\}) + 2 \cdot \mu(\{2\}) = 1 + 2 = 3$입니다. 따라서 $\int f\,d\mu = 3$입니다. 값이 끝없이 커지는 $f$이지만 측도가 두 점에만 있으므로 두 점의 값만 남습니다.
:::

:::counterexample[어디서도 ∞ 가 아닌 함수의 적분이 ∞ 인 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$([[measure-examples|측도의 예]]의 (4))에서 값이 $1$인 상수함수 $\chi_{\mathbb{N}}$의 적분은 (5)에 의해 $1 \cdot \mu^{\sharp}(\mathbb{N})$입니다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이므로 $\mu^{\sharp}(\mathbb{N}) = \infty$이고 적분은 $\infty$입니다. 함수의 값은 모두 $1$이지만 측도가 $\infty$인 곳에 펼쳐져 있으면 적분이 $\infty$일 수 있습니다.
:::

:::counterexample[값이 ∞ 인 점이 있어도 적분이 0 인 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, $\mu = \delta_2$에서 $f = \infty\chi_{\{1\}}$이라 합시다. (5)에 의해 $\int f\,d\mu = \infty \cdot \delta_2(\{1\}) = \infty \cdot 0 = 0$입니다. (6)으로 구해도 $f(2) = 0$입니다. 값 $\infty$를 갖는 점이 있어도 그 점의 측도가 $0$이면 적분에 아무것도 더하지 않습니다.
:::

## 확인 질문

:::check[영측도에 대한 적분은 무엇인가?]
모든 가측인 $[0, \infty]$ 값 함수 $f$에서 $0$입니다. [[measure-examples|측도의 예]]의 (1)의 영측도 $\mu$에서는 $\mu(X) = 0$이므로 (3)의 (i)과 (iv)에 의해 $\int f\,d\mu = \int_X f\,d\mu = 0$입니다.
:::

:::check[(4)의 등식은 $c = \infty$이고 $f = \chi_A$일 때도 성립하는가?]
성립합니다. (5)에 의해 $\int \infty\chi_A\,d\mu = \infty\,\mu(A)$이고, (5)를 $c = 1$로 쓰면 $\int \chi_A\,d\mu = \mu(A)$이므로 $\int \infty\chi_A\,d\mu = \infty \int \chi_A\,d\mu$입니다. $\mu(A) = 0$이면 두 쪽 모두 $\infty \cdot 0 = 0$입니다.
:::
