---
title: "[0, ∞] 값의 가측함수"
title_en: Measurable Functions with Values in [0, ∞]
aliases: [확장된 실숫값 가측함수, 0 이상인 가측함수, "[0, ∞] 값 함수열", 함수열의 상한과 하한, extended real-valued measurable function, nonnegative measurable function]
kind: definition
field: measure-theory
msc: ["28A20"]
level: undergrad
summary: "[0, ∞] 에 값을 갖는 함수가 모든 0 이상인 실수 a 에서 a 보다 큰 값을 갖는 점들의 집합을 가측집합으로 가질 때 가측이라 하고, 네 꼴의 판정, 값이 ∞ 인 점의 집합, 0 이상인 실숫값 가측함수와의 일치, ∞ 를 0 으로 바꾼 실숫값 함수로 판정하기, 상수배와 지시함수를 곱한 함수, 함수열의 상한과 하한, 두 가측함수를 비교한 집합의 가측성을 증명한다."
requires: [set, subset, set-operations, function, recursion-theorem, family-of-sets, sequence-of-sets, cartesian-product, indicator-function, extended-nonnegative-reals, sigma-algebra, measurable-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, rationals-are-dense, rationals-are-countable]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.3절 The extended real line, Definition 3.25–3.27 (p.73), Definition 3.28–3.29 와 Proposition 3.30 (p.74), Theorem 3.31 (p.74–76); 3.5절 Exercise 3.7 (p.82), Exercise 3.23 (p.86–87); 6.4절 Exercise 6.4 (p.185)
    checked: original
    note: "출처 Definition 3.28(p.74)은 확장된 실수 R̄ = {−∞} ∪ ℝ ∪ {+∞} 위에 B(R̄) := σ({−∞} ∪ B(R) ∪ {+∞}) 를 두고, Definition 3.29 는 f⁻¹(B(R̄)) ⊂ S 일 때 f : X → R̄ 를 S-가측이라 한다. Proposition 3.30 은 이것이 모든 실수 c 에서 f⁻¹((c, +∞]) ∈ S 인 것과 같고 [−∞, c], [−∞, c), [c, +∞] 의 꼴과도 같다고 진술한다. 이 항목은 −∞ 를 두지 않고 [0, ∞] 위에 σ-대수를 두지 않으며(지휘자 결정), 가측성을 처음부터 Proposition 3.30 (b) 꼴, 곧 모든 0 이상인 실수 a 에서 {a < f} ∈ 𝓜 로 정의한다. (1)은 Proposition 3.30 의 나머지 세 꼴을 [0, ∞] 값에 맞춘 것이다. 출처 Theorem 3.31(p.74–76)은 f 가 가측인 것이 A_{+∞}(f), A_{−∞}(f) ∈ S 이고 ∞ 인 점에서 값을 0 으로 바꾼 실숫값 함수 f_0 가 가측인 것과 같다는 것을 c ≥ 0, c < 0 의 두 경우로 증명한다. 이 항목의 (3)의 (ii)는 같은 진술을 [0, ∞] 값에서 적은 것이다(−∞ 의 집합이 없다). 출처 Theorem 3.31 의 증명은 {f = ±∞} 가 가측이라는 것을 Proposition 3.30 의 [±∞, ±∞] 꼴에서 얻는다. 이 항목의 (2)는 {f = ∞} 를 집합열 {f > n} 의 교집합으로 얻는다. 출처 Remark 3.33(p.78)과 Exercise 3.23(p.86–87)은 Theorem 3.20 의 함수들(유한 개의 최소·최대, inf, sup, lim inf, lim sup)이 확장된 실숫값 함수열에서도 가측이라는 것을 연습문제로 둔다. 이 항목의 (5)는 그 가운데 sup 과 inf 를 번호의 집합 T 위에서 진술한다. 출처 Definition 3.25(p.73)는 x · (±∞) 를 x > 0 이면 ±∞, x = 0 이면 0 으로 정한다(이 항목이 쓰는 0·∞ = 0 은 extended-nonnegative-reals 의 것이다). 예시 '가측집합 위에서만 ∞ 인 함수'의 함수는 출처 Exercise 6.4 의 힌트(p.185)가 A = {f ≠ g} 위에서 +∞, 밖에서 0 으로 정하는 함수 h 와 같은 꼴이다. 반례 '∞ 를 0 으로 바꾼 함수가 가측이어도 가측이 아닐 수 있다'의 σ-대수 {∅, X} 는 출처 Exercise 3.7(p.82)이 그 σ-대수에 대한 실숫값 가측함수가 상수함수뿐이라는 것을 보이라고 하는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(표준 근사열의 단조성과 오차의 f(x) < k 조건, 출처 Proposition 3.15 에 대한 메모를 원문 대조). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간, σ-대수, (σ1)–(σ3)은 [[sigma-algebra|σ-대수와 가측공간]]의 것이고, 실숫값 함수와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이다. $[0, \infty]$와 그 순서, 덧셈, 곱셈($0 \cdot \infty = 0$), 상한 $\sup$과 하한 $\inf$, 단조증가인 원소열의 극한은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 지시함수 $\chi_A$는 [[indicator-function]]의 것이고, 그 값 $0$, $1$은 $[0, \infty]$의 원소로도 본다. 아래에서 $(X, \mathcal{M})$은 가측공간이다.

**$[0, \infty]$ 값 함수와 집합의 기호.** 함수 $f : X \to [0, \infty]$를 $X$ 위의 **$[0, \infty]$ 값 함수**라 한다. $0$ 이상인 실수 $a$에 대하여
$$
\begin{aligned}
\{f > a\} &= \{x \in X : a < f(x)\}, \\
\{f \ge a\} &= \{x \in X : a \le f(x)\}, \\
\{f < a\} &= \{x \in X : f(x) < a\}, \\
\{f \le a\} &= \{x \in X : f(x) \le a\}
\end{aligned}
$$
로 쓰고, $\{f = \infty\} = \{x \in X : f(x) = \infty\}$, $\{f < \infty\} = \{x \in X : f(x) < \infty\}$로 쓴다. 부등호는 $[0, \infty]$의 순서이다.

**가측.** $X$ 위의 $[0, \infty]$ 값 함수 $f$가 **$\mathcal{M}$-가측**인 것은 정확히 $0$ 이상인 모든 실수 $a$에서 $\{f > a\} \in \mathcal{M}$일 때이다. $f$의 모든 값이 $0$ 이상이므로 음의 실수 $a$에 대해서는 $\{f > a\}$를 $X$로 읽기로 하면, 이 정의는 "모든 실수 $a$에서 $\{f > a\} \in \mathcal{M}$"과 같은 말이다((σ1)).

**함수열.** 함수 $F : \mathbb{N} \times X \to [0, \infty]$를 $X$ 위의 **$[0, \infty]$ 값 함수열**이라 하고, 자연수 $k$와 $x \in X$에 대하여 $F(k, x)$를 $f_k(x)$로, $F$를 $(f_k)$로 쓴다. 각 $k$에서 $x$에서의 값이 $f_k(x)$인 함수는 $X$ 위의 $[0, \infty]$ 값 함수이고 이것을 $f_k$로 쓴다. 같은 방식으로 함수 $\mathbb{N} \times X \to \mathbb{R}$를 $X$ 위의 **실숫값 함수열**이라 한다. 순서쌍 $(k, x)$마다 값이 식이나 이미 정해진 대상으로 주어지면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 그런 함수열이 하나 정해진다. $T$가 $\mathbb{N}$의 부분집합이고 $x \in X$이면 $\{f_k(x) : k \in T\}$, 곧 $y = f_k(x)$인 $k \in T$가 있는 $y \in [0, \infty]$ 전체는 $[0, \infty]$의 부분집합이다. $x$에서의 값이 각각 $\sup\{f_k(x) : k \in T\}$, $\inf\{f_k(x) : k \in T\}$인 $X$ 위의 $[0, \infty]$ 값 함수를 $\sup_{k \in T} f_k$, $\inf_{k \in T} f_k$로 쓴다. $T = \mathbb{N}$이면 $\sup_k f_k$, $\inf_k f_k$로 쓰고, 자연수 $n$에서 $T = \{k \in \mathbb{N} : n \le k\}$이면 $\sup_{k \ge n} f_k$, $\inf_{k \ge n} f_k$로 쓴다.

다음이 성립한다. 아래에서 $f$, $g$는 $X$ 위의 $[0, \infty]$ 값 함수이다.

1. (네 꼴의 판정) 다음 넷은 서로 같은 말이다.
   - (a) $f$는 $\mathcal{M}$-가측이다.
   - (b) $0$ 이상인 모든 실수 $a$에서 $\{f \ge a\} \in \mathcal{M}$이다.
   - (c) $0$ 이상인 모든 실수 $a$에서 $\{f < a\} \in \mathcal{M}$이다.
   - (d) $0$ 이상인 모든 실수 $a$에서 $\{f \le a\} \in \mathcal{M}$이다.
2. (값이 $\infty$인 점) $f$가 $\mathcal{M}$-가측이면 $\{f = \infty\}$와 $\{f < \infty\}$는 $\mathcal{M}$의 원소이고
   $$
   \{f = \infty\} = \bigcap_{n=1}^{\infty} \{f > n\}
   $$
   이다.
3. (실숫값 함수와의 관계)
   - (i) $f : X \to \mathbb{R}$가 모든 $x$에서 $f(x) \ge 0$인 실숫값 함수이면, 같은 집합 $f$는 $X$ 위의 $[0, \infty]$ 값 함수이기도 하고, 이 항목의 뜻으로 $\mathcal{M}$-가측인 것은 정확히 [[measurable-function|가측함수]]의 뜻으로 $\mathcal{M}$-가측일 때이다.
   - (ii) $f$가 $X$ 위의 $[0, \infty]$ 값 함수이고, $f(x) < \infty$이면 $f_0(x) = f(x)$, $f(x) = \infty$이면 $f_0(x) = 0$인 실숫값 함수를 $f_0 : X \to \mathbb{R}$라 하자. $f$가 $\mathcal{M}$-가측인 것은 정확히 $\{f = \infty\} \in \mathcal{M}$이고 $f_0$가 $\mathcal{M}$-가측일 때이다.
4. (상수, 상수배, 지시함수를 곱하기)
   - (i) 값이 $c \in [0, \infty]$인 상수함수는 $\mathcal{M}$-가측이다.
   - (ii) $f$가 $\mathcal{M}$-가측이고 $c \in [0, \infty]$이면, $x$에서의 값이 $c\,f(x)$인 함수 $cf$는 $\mathcal{M}$-가측이다.
   - (iii) $f$가 $\mathcal{M}$-가측이고 $A \in \mathcal{M}$이면, $x$에서의 값이 $f(x)\,\chi_A(x)$인 함수 $f\chi_A$는 $\mathcal{M}$-가측이다. $x \in A$이면 그 값은 $f(x)$이고 $x \notin A$이면 $0$이다.
5. (함수열의 상한과 하한) $(f_k)$가 $X$ 위의 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이며 $T \subseteq \mathbb{N}$이면 $\sup_{k \in T} f_k$와 $\inf_{k \in T} f_k$는 $\mathcal{M}$-가측이다. 특히 모든 $x$에서 원소열 $(f_k(x))$가 단조증가이면, $x$에서의 값이 $\lim_{k \to \infty} f_k(x)$인 함수는 $\sup_k f_k$이고 $\mathcal{M}$-가측이다.
6. (두 함수의 비교) $f$, $g$가 $\mathcal{M}$-가측이면 $\{x \in X : f(x) < g(x)\}$, $\{x \in X : f(x) \le g(x)\}$, $\{x \in X : f(x) = g(x)\}$, $\{x \in X : f(x) \ne g(x)\}$는 $\mathcal{M}$의 원소이다. 부등호는 $[0, \infty]$의 순서이다.
:::

:::english
Measurable spaces, σ-algebras, and (σ1)–(σ3) are as in [[sigma-algebra]], and real-valued functions and $\mathcal{M}$-measurability are as in [[measurable-function]]. $[0, \infty]$ with its order, addition, multiplication ($0 \cdot \infty = 0$), supremum $\sup$ and infimum $\inf$, and the limit of a nondecreasing sequence of elements are as in [[extended-nonnegative-reals]]. The indicator function $\chi_A$ is as in [[indicator-function]], and its values $0$, $1$ are also regarded as elements of $[0, \infty]$. Below, $(X, \mathcal{M})$ is a measurable space.

**$[0, \infty]$-valued functions and notation for sets.** A function $f : X \to [0, \infty]$ is called a **$[0, \infty]$-valued function** on $X$. For a real number $a \ge 0$ we write
$$
\begin{aligned}
\{f > a\} &= \{x \in X : a < f(x)\}, \\
\{f \ge a\} &= \{x \in X : a \le f(x)\}, \\
\{f < a\} &= \{x \in X : f(x) < a\}, \\
\{f \le a\} &= \{x \in X : f(x) \le a\},
\end{aligned}
$$
and $\{f = \infty\} = \{x \in X : f(x) = \infty\}$, $\{f < \infty\} = \{x \in X : f(x) < \infty\}$. The inequalities refer to the order of $[0, \infty]$.

**Measurability.** A $[0, \infty]$-valued function $f$ on $X$ is **$\mathcal{M}$-measurable** exactly when $\{f > a\} \in \mathcal{M}$ for every real number $a \ge 0$. Since every value of $f$ is at least $0$, if we read $\{f > a\}$ as $X$ for negative real numbers $a$, this definition says the same as "$\{f > a\} \in \mathcal{M}$ for every real number $a$" ((σ1)).

**Sequences of functions.** A function $F : \mathbb{N} \times X \to [0, \infty]$ is called a **sequence of $[0, \infty]$-valued functions** on $X$; for a natural number $k$ and $x \in X$ we write $F(k, x)$ as $f_k(x)$ and $F$ as $(f_k)$. For each $k$, the function whose value at $x$ is $f_k(x)$ is a $[0, \infty]$-valued function on $X$, written $f_k$. In the same way, a function $\mathbb{N} \times X \to \mathbb{R}$ is called a **sequence of real-valued functions** on $X$. If the value at each ordered pair $(k, x)$ is given by a formula or an already determined object, then by item (1) of the [[recursion-theorem]] such a sequence of functions is determined. If $T$ is a subset of $\mathbb{N}$ and $x \in X$, then $\{f_k(x) : k \in T\}$, that is, the set of all $y \in [0, \infty]$ such that $y = f_k(x)$ for some $k \in T$, is a subset of $[0, \infty]$. The $[0, \infty]$-valued functions on $X$ whose values at $x$ are $\sup\{f_k(x) : k \in T\}$ and $\inf\{f_k(x) : k \in T\}$ are written $\sup_{k \in T} f_k$ and $\inf_{k \in T} f_k$. For $T = \mathbb{N}$ we write $\sup_k f_k$, $\inf_k f_k$, and for $T = \{k \in \mathbb{N} : n \le k\}$ with a natural number $n$ we write $\sup_{k \ge n} f_k$, $\inf_{k \ge n} f_k$.

The following hold. Below, $f$ and $g$ are $[0, \infty]$-valued functions on $X$.

1. (Four forms of the test) The following four statements are equivalent.
   - (a) $f$ is $\mathcal{M}$-measurable.
   - (b) $\{f \ge a\} \in \mathcal{M}$ for every real number $a \ge 0$.
   - (c) $\{f < a\} \in \mathcal{M}$ for every real number $a \ge 0$.
   - (d) $\{f \le a\} \in \mathcal{M}$ for every real number $a \ge 0$.
2. (Points where the value is $\infty$) If $f$ is $\mathcal{M}$-measurable, then $\{f = \infty\}$ and $\{f < \infty\}$ are elements of $\mathcal{M}$, and
   $$
   \{f = \infty\} = \bigcap_{n=1}^{\infty} \{f > n\}.
   $$
3. (Relation with real-valued functions)
   - (i) If $f : X \to \mathbb{R}$ is a real-valued function with $f(x) \ge 0$ for every $x$, then the same set $f$ is also a $[0, \infty]$-valued function on $X$, and it is $\mathcal{M}$-measurable in the sense of this entry exactly when it is $\mathcal{M}$-measurable in the sense of [[measurable-function]].
   - (ii) Let $f$ be a $[0, \infty]$-valued function on $X$, and let $f_0 : X \to \mathbb{R}$ be the real-valued function with $f_0(x) = f(x)$ if $f(x) < \infty$ and $f_0(x) = 0$ if $f(x) = \infty$. Then $f$ is $\mathcal{M}$-measurable exactly when $\{f = \infty\} \in \mathcal{M}$ and $f_0$ is $\mathcal{M}$-measurable.
4. (Constants, constant multiples, and multiplying by an indicator function)
   - (i) A constant function with value $c \in [0, \infty]$ is $\mathcal{M}$-measurable.
   - (ii) If $f$ is $\mathcal{M}$-measurable and $c \in [0, \infty]$, then the function $cf$ with value $c\,f(x)$ at $x$ is $\mathcal{M}$-measurable.
   - (iii) If $f$ is $\mathcal{M}$-measurable and $A \in \mathcal{M}$, then the function $f\chi_A$ with value $f(x)\,\chi_A(x)$ at $x$ is $\mathcal{M}$-measurable. Its value is $f(x)$ for $x \in A$ and $0$ for $x \notin A$.
5. (Supremum and infimum of a sequence of functions) If $(f_k)$ is a sequence of $[0, \infty]$-valued functions on $X$, every $f_k$ is $\mathcal{M}$-measurable, and $T \subseteq \mathbb{N}$, then $\sup_{k \in T} f_k$ and $\inf_{k \in T} f_k$ are $\mathcal{M}$-measurable. In particular, if the sequence $(f_k(x))$ is nondecreasing for every $x$, then the function whose value at $x$ is $\lim_{k \to \infty} f_k(x)$ is $\sup_k f_k$ and is $\mathcal{M}$-measurable.
6. (Comparing two functions) If $f$ and $g$ are $\mathcal{M}$-measurable, then $\{x \in X : f(x) < g(x)\}$, $\{x \in X : f(x) \le g(x)\}$, $\{x \in X : f(x) = g(x)\}$, $\{x \in X : f(x) \ne g(x)\}$ are elements of $\mathcal{M}$. The inequalities refer to the order of $[0, \infty]$.
:::

## 직관

측도와 적분은 값 $\infty$를 피할 수 없습니다. 셈측도로 끝없이 많은 점을 세면 $\infty$가 나오고, 0 이상인 함수의 급수나 상한도 $\infty$가 될 수 있습니다. 그래서 값을 $[0, \infty]$에 갖는 함수의 가측성이 따로 필요합니다. 정의는 실숫값 함수의 판정 (2)의 (b)를 그대로 옮긴 것입니다. "값이 $a$보다 큰 점들"이 가측집합이기를 요구하고, $a$는 실수만 넣습니다. $\infty$보다 큰 값은 없으므로 $a = \infty$를 넣을 필요가 없습니다.

$\infty$인 점의 집합은 "모든 자연수 $n$보다 큰 점"이므로 $\{f > n\}$들의 교집합입니다((2)). 실수는 어떤 자연수보다 작다는 [[archimedean-property|아르키메데스 성질]]이 여기서 쓰입니다. 이 집합을 떼어 내면 남는 것은 실숫값 함수이므로, $[0, \infty]$ 값 함수의 가측성은 "∞인 곳이 가측집합이고 나머지가 실숫값 가측함수"라는 두 조건으로 바꿔 말할 수 있습니다((3)의 (ii)). $\{f = \infty\}$ 쪽 조건을 뺄 수 없다는 것은 아래 반례가 보입니다.

상한과 하한은 실숫값 함수에서는 수열이 유계일 때만 쓸 수 있지만, $[0, \infty]$에서는 모든 부분집합이 상한과 하한을 가지므로 아무 함수열에서나 쓸 수 있습니다((5)). "어떤 $f_k(x)$가 $a$보다 크다"가 "상한이 $a$보다 크다"와 같다는 것이 열쇠입니다.

## 성질의 증명

:::proof
**준비.** $[0, \infty]$의 순서와 계산은 [[extended-nonnegative-reals]]의 (1)–(8)로 다룬다. 실수의 순서는 [[order-properties-of-reals]]로 다루고, $[0, \infty]$의 두 실수인 원소 사이의 순서는 같은 항목(확장된 실수)의 (2)의 (i)에 의해 실수의 순서와 같다. "원소 판정"은 [[sequence-of-sets|집합열]]의 (1)이다. $[0, \infty]$의 원소 $b$와 $0$ 이상인 실수 $a$에서 확장된 실수의 (2)의 (iii)에 의해 "$a < b$가 아니다"는 "$b \le a$"와 같으므로
$$
\begin{gathered}
\{f \le a\} = X - \{f > a\}, \\
\{f < a\} = X - \{f \ge a\}
\end{gathered}
$$
이다.

**(1)** (a) ⇒ (b): $a = 0$이면 확장된 실수의 (2)의 (iv)에 의해 모든 $x$에서 $0 \le f(x)$이므로 $\{f \ge 0\} = X \in \mathcal{M}$이다. $0 < a$라 하자. 자연수 $n$마다 $a_n = a - \tfrac{a}{n+1}$로 두면 $a_n = \tfrac{n}{n+1}a$는 $0$ 이상인 실수이고 $a_n < a$이다. $n$번째 항이 $\{f > a_n\}$인 집합열은 (a)에 의해 $\mathcal{M}$의 원소로 된 집합열이다. 그 교집합이 $\{f \ge a\}$임을 보인다. $a \le f(x)$이면 모든 $n$에서 $a_n < a \le f(x)$이다. 거꾸로 모든 $n$에서 $a_n < f(x)$인데 $f(x) < a$라 하자. 그러면 $f(x)$는 실수이고(확장된 실수의 (2)의 (iv)) $0 < a - f(x)$이므로, [[archimedean-property|아르키메데스 성질]]의 (3)을 $\varepsilon = (a - f(x))/a > 0$에 쓰면 $\tfrac{1}{m} < \varepsilon$인 자연수 $m$이 있고, 같은 (3)에 의해 $m$ 이상인 $n + 1$(곧 $n = m$)에서도 $\tfrac{1}{n+1} < \varepsilon$이다. 양변에 $a > 0$을 곱하면 $\tfrac{a}{n+1} < a - f(x)$, 곧 $f(x) < a_n$이 되어 어긋난다. 따라서 $a \le f(x)$이다. 원소 판정과 [[sigma-algebra|σ-대수]]의 (2)에 의해 $\{f \ge a\} \in \mathcal{M}$이다.

(b) ⇒ (a): $0$ 이상인 실수 $a$에 대하여 $n$번째 항이 $\{f \ge a + \tfrac{1}{n}\}$인 집합열은 (b)에 의해 $\mathcal{M}$의 원소로 된 집합열이다. $a < f(x)$이면, $f(x) = \infty$일 때는 모든 $n$에서 $a + \tfrac{1}{n} \le f(x)$이고, $f(x)$가 실수이면 아르키메데스 성질의 (3)에 의해 $\tfrac{1}{n} < f(x) - a$인 $n$이 있어 $a + \tfrac{1}{n} < f(x)$이다. 거꾸로 $a + \tfrac{1}{n} \le f(x)$이면 $a < a + \tfrac{1}{n}$이므로 $a < f(x)$이다. 따라서 $\{f > a\} = \bigcup_{n=1}^{\infty} \{f \ge a + \tfrac{1}{n}\}$이고 (σ3)에 의해 $\{f > a\} \in \mathcal{M}$이다.

(a) ⇔ (d)와 (b) ⇔ (c)는 준비의 두 등식과 (σ2), 그리고 [[sigma-algebra|σ-대수]]의 (1)의 $X - (X - B) = B$에서 나온다.

**(2)** $f(x) = \infty$이면 모든 자연수 $n$에서 $n < \infty$이므로 $x \in \{f > n\}$이다. 거꾸로 모든 $n$에서 $n < f(x)$인데 $f(x)$가 실수이면 아르키메데스 성질의 (1)에 의해 $f(x) < n$인 자연수 $n$이 있어 어긋난다. 따라서 $f(x) = \infty$이다. 원소 판정으로 등식이 나오고, 가정과 σ-대수의 (2)에 의해 $\{f = \infty\} \in \mathcal{M}$이다. 확장된 실수의 (1)의 (ii)에 의해 $\{f < \infty\} = X - \{f = \infty\}$이므로 (σ2)에 의해 이것도 $\mathcal{M}$의 원소이다.

**(3)** (i) $f$의 값은 $[0, \infty)$의 원소이므로 같은 집합 $f$는 $X$에서 $[0, \infty]$로의 함수이기도 하다. $0$ 이상인 실수 $a$에서 $a < f(x)$를 $[0, \infty]$의 순서로 읽든 실수의 순서로 읽든 같으므로(확장된 실수의 (2)의 (i)), 두 뜻의 $\{f > a\}$는 같은 집합이다. 음의 실수 $a$에서는 [[measurable-function|가측함수]]의 뜻의 $\{f > a\}$가 $X$이다. 따라서 이 항목의 정의는 가측함수의 (2)의 (b)와 같은 말이다.

(ii) $0$ 이상인 실수 $a$를 잡자. $f(x) = \infty$이면 $f_0(x) = 0 \le a$이므로 $x \notin \{f_0 > a\}$이고, $f(x) < \infty$이면 $f_0(x) = f(x)$이다. 따라서
$$
\begin{gathered}
\{f_0 > a\} = \{f > a\} - \{f = \infty\}, \\
\{f > a\} = \{f_0 > a\} \cup \{f = \infty\}
\end{gathered}
$$
이다(둘째 등식에서 $f(x) = \infty$이면 $a < \infty$이다). 음의 실수 $a$에서는 $\{f_0 > a\} = X$이다. $f$가 가측이면 (2)에 의해 $\{f = \infty\} \in \mathcal{M}$이고, 첫째 등식과 σ-대수의 (1)에 의해 모든 실수 $a$에서 $\{f_0 > a\} \in \mathcal{M}$이므로 가측함수의 (2)에 의해 $f_0$는 가측이다. 거꾸로 두 조건이 성립하면 둘째 등식과 σ-대수의 (1)에 의해 $\{f > a\} \in \mathcal{M}$이다.

**(4)** (i) 값이 $c$인 상수함수 $h$와 $0$ 이상인 실수 $a$에서 $\{h > a\}$는 $a < c$이면 $X$, 아니면 $\emptyset$이다. (σ1)과 σ-대수의 (1)에 의해 둘 다 $\mathcal{M}$의 원소이다.

(ii) $c = 0$이면 확장된 실수의 (4)의 (i)에 의해 $cf$는 값이 $0$인 상수함수이므로 (i)에 의해 가측이다. $c = \infty$이면, 확장된 실수의 곱셈의 정의에 의해 $\infty \cdot f(x)$는 $f(x) = 0$이면 $0$, $f(x) \ne 0$이면 $\infty$이므로, $0$ 이상인 실수 $a$에서 $\{cf > a\} = \{f > 0\}$이고 이것은 $\mathcal{M}$의 원소이다. $c$가 양의 실수이면 $\{cf > a\} = \{f > a/c\}$이다. 실제로 $f(x)$가 실수이면 $cf(x)$는 실수의 곱이고 [[order-properties-of-reals]]의 (6)의 (iv)에 의해 $a < c f(x)$인 것은 정확히 $a/c < f(x)$일 때이며, $f(x) = \infty$이면 $c f(x) = \infty$이고 두 부등식이 모두 참이다. $a/c$는 $0$ 이상인 실수이므로 이 집합은 $\mathcal{M}$의 원소이다.

(iii) [[indicator-function]]의 (1)에 의해 $x \in A$이면 $\chi_A(x) = 1$이고 확장된 실수의 (4)의 (i)에 의해 $f(x) \cdot 1 = f(x)$이며, $x \notin A$이면 $\chi_A(x) = 0$이고 $f(x) \cdot 0 = 0$이다. 따라서 $0$ 이상인 실수 $a$에서 $\{f\chi_A > a\} = A \cap \{f > a\}$이고($0 < 0$은 거짓이다), σ-대수의 (1)에 의해 이것은 $\mathcal{M}$의 원소이다.

**(5)** $h = \sup_{k \in T} f_k$, $l = \inf_{k \in T} f_k$로 두고 $0$ 이상인 실수 $a$를 잡자. 확장된 실수의 (5)의 (v)에 의해 $a < h(x)$이면 $a < f_k(x)$인 $k \in T$가 있다. 거꾸로 $k \in T$이고 $a < f_k(x)$이면, $h(x)$는 상계이므로 $f_k(x) \le h(x)$이고 확장된 실수의 (2)의 (iii)에 의해 $a < h(x)$이다. 따라서 원소 판정에 의해 $\{h > a\} = \bigcup_{k \in T} \{f_k > a\}$이고 σ-대수의 (2)에 의해 $\mathcal{M}$의 원소이다. 같은 방법으로 (5)의 (v)의 하한 쪽과 하계의 정의에 의해 $\{l < a\} = \bigcup_{k \in T} \{f_k < a\}$이고, (1)의 (c)에 의해 각 $\{f_k < a\}$는 $\mathcal{M}$의 원소이므로 $\{l < a\} \in \mathcal{M}$이다. (1)에 의해 $h$와 $l$은 가측이다. $T = \emptyset$이어도 이 논증은 그대로이다(그때 두 합집합은 $\emptyset$이고, 확장된 실수의 (5)의 (ii)에 의해 $h = 0$, $l = \infty$이다).

모든 $x$에서 $(f_k(x))$가 단조증가이면 확장된 실수의 극한의 정의에 의해 $\lim_{k \to \infty} f_k(x) = \sup\{f_k(x) : k \in \mathbb{N}\} = (\sup_k f_k)(x)$이다.

**(6)** [[rationals-are-countable|유리수의 가산성]]의 (5)의 유리수의 열거를 $(r_m)$이라 하고, $m$번째 항이 $0 \le r_m$이면 $\{f < r_m\} \cap \{g > r_m\}$, 아니면 $\emptyset$인 집합열을 생각하자. (1)과 σ-대수의 (1)에 의해 이것은 $\mathcal{M}$의 원소로 된 집합열이다. $f(x) < g(x)$이면 $f(x)$는 실수이다(확장된 실수의 (2)의 (iv)). $g(x)$가 실수이면 [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $f(x) < r < g(x)$인 유리수 $r$가 있고, $g(x) = \infty$이면 $f(x) < r < f(x) + 1$인 유리수 $r$가 있어 $r < \infty = g(x)$이다. 어느 쪽이든 $0 \le f(x) < r$이므로 $r$는 $0$ 이상이고, 열거가 전사이므로 $r = r_m$인 $m$이 있어 $x$는 $m$번째 항에 속한다. 거꾸로 $m$번째 항에 속하면 $f(x) < r_m < g(x)$이다. 원소 판정과 (σ3)에 의해 $\{x \in X : f(x) < g(x)\} \in \mathcal{M}$이다. 확장된 실수의 (2)의 (iii)에 의해 $\{x \in X : f(x) \le g(x)\}$는 $\{x \in X : g(x) < f(x)\}$의 여집합이고, (2)의 (ii)에 의해 $\{x \in X : f(x) = g(x)\}$는 $\{x \in X : f(x) \le g(x)\}$와 $\{x \in X : g(x) \le f(x)\}$의 교집합이며, $\{x \in X : f(x) \ne g(x)\}$는 그 여집합이므로, (σ2)와 σ-대수의 (1)에 의해 모두 $\mathcal{M}$의 원소이다.
:::

## 예시와 반례

:::example[가측집합 위에서만 ∞ 인 함수]
$A \subseteq X$일 때 $x \in A$이면 $\infty$, $x \notin A$이면 $0$인 함수 $f$는 (4)의 (iii)의 $\infty\,\chi_A$와 같은 함수입니다. 이 함수가 $\mathcal{M}$-가측인 것은 정확히 $A \in \mathcal{M}$일 때입니다. $0$ 이상인 모든 실수 $a$에서 $a < \infty$이고 $a < 0$은 거짓이므로 $\{f > a\} = A$이기 때문입니다. 이 함수에서 $f_0$은 값이 $0$인 상수함수이고 $\{f = \infty\} = A$입니다.
:::

:::counterexample[∞ 를 0 으로 바꾼 함수가 가측이어도 가측이 아닐 수 있다]
$X = \{1, 2\}$에 σ-대수 $\{\emptyset, X\}$를 주고 $f(1) = \infty$, $f(2) = 0$으로 둡시다. $f_0$는 값이 $0$인 상수함수이므로 [[measurable-function|가측함수]]의 (6)에 의해 가측입니다. 그러나 $\{f = \infty\} = \{1\}$은 $\{\emptyset, X\}$의 원소가 아니므로 (3)의 (ii)에 의해 $f$는 가측이 아닙니다. 직접 보아도 $\{f > 0\} = \{1\}$입니다. (3)의 (ii)에서 $\{f = \infty\} \in \mathcal{M}$이라는 조건을 뺄 수 없다는 것을 이 예가 보입니다.
:::

## 확인 질문

:::check[$0$ 이상인 모든 유리수 $a$에서 $\{f > a\} \in \mathcal{M}$이면 $f$는 $\mathcal{M}$-가측인가?]
그렇습니다. [[rationals-are-countable|유리수의 가산성]]의 (5)의 유리수의 열거를 $(r_m)$이라 하고, $m$번째 항이 $r_m \ge 0$이고 $a < r_m$이면 $\{f > r_m\}$, 그렇지 않으면 $\emptyset$인 집합열을 생각합니다. $a < f(x)$이면 [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $a < r < f(x)$인 유리수 $r$가 있고($f(x) = \infty$이면 $r$를 $a < r < a + 1$에서 잡습니다), 그 $r$는 어떤 $r_m$이므로 $x$는 합집합에 속합니다. 거꾸로 합집합의 원소는 $a < r_m < f(x)$를 만족합니다. 따라서 $\{f > a\}$는 이 합집합이고 (σ3)에 의해 $\mathcal{M}$의 원소입니다.
:::

:::check[$f$, $g$가 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이면, $x$에서의 값이 $\max\{f(x), g(x)\}$인 함수는 가측인가?]
그렇습니다. $k = 1$이면 $f(x)$, $k \ge 2$이면 $g(x)$를 값으로 하는 함수열을 $(h_k)$라 하면, $\{h_k(x) : k \in \mathbb{N}\} = \{f(x), g(x)\}$이고 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (8)에 의해 그 상한이 $\max\{f(x), g(x)\}$입니다. 따라서 이 함수는 $\sup_k h_k$이고 (5)에 의해 가측입니다.
:::
