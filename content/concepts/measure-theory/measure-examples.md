---
title: 측도의 예
title_en: Examples of Measures
aliases: [영측도, 디랙 측도, 셈측도, 가중 셈측도, 축약한 측도, 제한한 측도, 상측도, 측도의 일차결합, 측도열의 합, zero measure, Dirac measure, counting measure, weighted counting measure, restriction of a measure, image measure, pushforward measure]
kind: proposition
field: measure-theory
msc: ["28A10"]
level: undergrad
summary: "영측도, 한 점에 집중된 디랙 측도, ℕ 의 부분집합 위의 가중 셈측도와 셈측도가 측도라는 것과, 측도의 상수배·측도열의 합·유한 일차결합, 가측집합으로 축약하거나 제한한 측도, 함수로 옮긴 상측도가 다시 측도라는 것을 증명한다."
requires: [set-operations, power-set, function, image-and-preimage, preimage-and-set-operations, prime-number, well-ordering-principle, finite-set, number-of-elements-is-unique, subset-of-finite-set, power-of-a-real-number, geometric-series, indicator-function, sequence-of-sets, sigma-algebra, measure, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Definitions and examples, Example 4.5 (p.92), Example 4.6 (p.92–93), Example 4.7 (p.93–94), Example 4.8 과 Example 4.9 (p.94), Example 4.10 (p.94–95), Proposition 4.13 (p.96); 4.5절 Exercises, Exercise 4.5, Exercise 4.6 과 Exercise 4.8 (p.112), Exercise 4.10 과 Exercise 4.11 (p.113); 4.3절 Complete measure spaces, Theorem 4.32 (p.107)
    checked: original
    note: "(2)의 디랙 측도는 출처 Example 4.5(p.92)의 δ_{x_0} 이고, 출처는 이것을 'unit mass concentrated at x_0'(p.92)라 부른다. 출처의 증명은 x_0 이 속하는 하나뿐인 번호 k_0 으로 합을 계산하고, 이 항목은 δ_p(A) = χ_A(p) 로 써서 지시함수의 급수의 등식으로 증명했다. (4)의 셈측도는 출처 Example 4.6(p.92–93)이 공집합이 아닌 집합 X 와 P(X) 위에서 µ♯(A) = |A|(A 가 유한), +∞(무한)로 정의한 것을 X ⊆ ℕ 인 경우로 좁힌 것이다. 출처의 증명은 어떤 A_k 가 무한집합인 경우(Case 1)와 모든 A_k 가 유한집합인 경우(Case 2)로 나누는데, Case 2(p.93)는 모든 A_k 가 공집합인 경우와 유한 개의 A_k 만 공집합이 아닌 경우를 바로 나온다(immediate)고 한 뒤 모든 A_k 가 공집합이 아닌 경우를 증명한다. 출처가 적는 경우는 이 셋이고, 셋째 경우에서 'since the sequence (A_k) is disjoint' 로 합집합이 무한집합이라는 것을 얻는다. 이 항목은 µ♯(A) = Σ_{n∈A} 1 로 바꾸어 (3)에 넣으므로 경우를 나누지 않는다. (4)의 (iii)은 출처 Exercise 4.5 (a)(p.112)를 X ⊆ ℕ 인 경우에 진술한 것이다. (3)의 가중 셈측도는 출처 Example 4.7(p.93)의 µ_x 를 X ⊆ ℕ 으로 넓힌 것이다. 출처 Exercise 4.6(p.112)은 거꾸로 (ℕ, P(ℕ)) 위의 모든 측도가 0 이상인 확장된 실수의 원소열 하나로 이렇게 얻어진다는 것을 보이라고 한다. 출처는 A = ∅ 일 때 값 0 을 따로 정하고, σ-가법성의 증명은 등식 Σ_{j∈∪A_k} x_j = Σ_k Σ_{j∈A_k} x_j 를 한 줄로 적는다. 이 항목은 Σ_{n∈∅} = 0 과 이 등식을 nonnegative-double-series 의 (1)로 인용했다. (6)의 축약은 출처 Example 4.8(p.94)의 µ^A 이다. 출처는 µ(A) > 0 을 가정하지만 증명에 쓰지 않으며, 이 항목은 그 가정을 두지 않았다. (6)의 제한은 출처 Example 4.9(p.94)의 µ_A 이고 출처는 증명을 Exercise 4.8(p.112)로 둔다. 출처는 집합 A 로의 제한을 µ_A 로 쓰고, 세로줄 기호는 Theorem 4.32 (b)(p.107)에서 완비화한 측도를 원래의 σ-대수 S 로 줄인 µ̄|_S 에 쓴다. 이 항목은 집합 E 로의 제한을 µ|_E 로 쓴다. (7)의 상측도는 출처 Example 4.10(p.94–95)이고, 출처는 이 측도를 ν 로 쓴다. 상측도의 σ-대수가 σ-대수라는 것은 sigma-algebra 의 (7)로 인용했다. (5)의 (iii)은 출처 Proposition 4.13(p.96)을 계수가 [0, ∞] 의 원소인 경우로 넓힌 것이다. 출처의 증명은 유한 합과 급수의 순서를 '모든 항이 0 이상이므로'로 바꾸고, 이 항목은 (ii)로 바꾸어 nonnegative-double-series 의 (2)를 쓴다. (5)의 (ii)는 출처 Exercise 4.10 (b)(p.113)이다. 예시 '가중 셈측도를 디랙 측도들의 합으로 쓰기'는 출처 Exercise 4.11 (a)(p.113, ℝ 의 점들의 디랙 측도의 합 Σ δ_{x_j} 가 측도)와 디랙 측도를 더한다는 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(셈측도·디랙 측도·축약의 경계 경우, 유한 가법성의 N = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간, $\mathcal{M}$을 $E$로 줄인 σ-대수 $\mathcal{M}_E$, 함수로 옮긴 σ-대수는 [[sigma-algebra|σ-대수와 가측공간]]의 것이고, 측도, 측도공간, 유한 측도는 [[measure|측도와 측도공간]]의 것이다. 지시함수 $\chi_A$는 [[indicator-function|지시함수]]의 것이다. $[0, \infty]$와 그 순서, 덧셈, 곱셈은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이고, 유한 합 $\sum_{k=1}^{N}$, 원소열의 합 $\sum_{k=1}^{\infty}$와 $\mathbb{N}$의 부분집합 위의 합 $\sum_{n \in A}$는 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 유한집합, 무한집합, 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다. 아래에서 $(X, \mathcal{M})$은 가측공간이다.

다음이 성립한다.

1. (영측도) 모든 $A \in \mathcal{M}$에서 값이 $0$인 함수 $\mathcal{M} \to [0, \infty]$는 $(X, \mathcal{M})$ 위의 유한 측도이다. 이것을 **영측도**(zero measure)라 한다.
2. (디랙 측도) $p \in X$이면 $A \in \mathcal{M}$에서
   $$
   \delta_p(A) = \chi_A(p)
   $$
   로 정한 함수 $\delta_p : \mathcal{M} \to [0, \infty]$, 곧 $p \in A$이면 $1$이고 $p \notin A$이면 $0$인 함수는 $(X, \mathcal{M})$ 위의 유한 측도이고 $\delta_p(X) = 1$이다. $\delta_p(A) = 0$인 것은 정확히 $p \notin A$일 때이다. $\delta_p$를 $p$에 집중된 **디랙 측도**(Dirac measure)라 한다.
3. (가중 셈측도) $X$가 $\mathbb{N}$의 부분집합이고 $(x_n)$이 $[0, \infty]$의 원소열이면, $A \in \mathscr{P}(X)$에서
   $$
   \mu_x(A) = \sum_{n \in A} x_n
   $$
   으로 정한 함수 $\mu_x : \mathscr{P}(X) \to [0, \infty]$는 $(X, \mathscr{P}(X))$ 위의 측도이고, $n \in X$이면 $\mu_x(\{n\}) = x_n$이다. $\mu_x$를 $(x_n)$으로 정한 **가중 셈측도**(weighted counting measure)라 한다.
4. (셈측도) $X$가 $\mathbb{N}$의 부분집합이라 하자. $A \in \mathscr{P}(X)$에서 $A$가 유한집합이면 $\mu^{\sharp}(A) = |A|$(실수로 본다), 무한집합이면 $\mu^{\sharp}(A) = \infty$로 정한 함수 $\mu^{\sharp} : \mathscr{P}(X) \to [0, \infty]$를 $X$ 위의 **셈측도**(counting measure)라 한다.
   - (i) 모든 $A \in \mathscr{P}(X)$에서 $\mu^{\sharp}(A) = \sum_{n \in A} 1$이다. 곧 $\mu^{\sharp}$는 모든 항이 $1$인 원소열로 정한 가중 셈측도이고, $(X, \mathscr{P}(X))$ 위의 측도이다.
   - (ii) $\mu^{\sharp}(A) = 0$인 것은 정확히 $A = \emptyset$일 때이다.
   - (iii) $\mu^{\sharp}$가 유한 측도인 것은 정확히 $X$가 유한집합일 때이다.
5. (상수배, 측도열의 합, 유한 일차결합)
   - (i) $\mu$가 $(X, \mathcal{M})$ 위의 측도이고 $c \in [0, \infty]$이면, $A \in \mathcal{M}$에서 값이 $c\,\mu(A)$인 함수 $c\mu$는 $(X, \mathcal{M})$ 위의 측도이다.
   - (ii) 자연수 $k$마다 $(X, \mathcal{M})$ 위의 측도 $\nu_k$가 정해져 있으면, $A \in \mathcal{M}$에서 값이 $\sum_{k=1}^{\infty} \nu_k(A)$인 함수 $\sum_{k=1}^{\infty} \nu_k$는 $(X, \mathcal{M})$ 위의 측도이다.
   - (iii) $N$이 $0$ 이상인 정수이고, $1 \le k \le N$인 정수 $k$마다 $(X, \mathcal{M})$ 위의 측도 $\nu_k$와 $c_k \in [0, \infty]$가 정해져 있으면, $A \in \mathcal{M}$에서 값이 $\sum_{k=1}^{N} c_k\,\nu_k(A)$인 함수 $\sum_{k=1}^{N} c_k \nu_k$는 $(X, \mathcal{M})$ 위의 측도이다. $N = 0$이면 이것은 영측도이다.
6. (축약과 제한) $\mu$가 $(X, \mathcal{M})$ 위의 측도이고 $E \in \mathcal{M}$이라 하자.
   - (i) $B \in \mathcal{M}$에서 $\mu^E(B) = \mu(E \cap B)$로 정한 함수 $\mu^E : \mathcal{M} \to [0, \infty]$는 $(X, \mathcal{M})$ 위의 측도이다. $\mu^E$를 **$\mu$를 $E$로 축약한 측도**(contraction)라 한다.
   - (ii) $\mathcal{M}_E \subseteq \mathcal{M}$이고, $A \in \mathcal{M}_E$에서 $\mu|_E(A) = \mu(A)$로 정한 함수 $\mu|_E : \mathcal{M}_E \to [0, \infty]$는 $(E, \mathcal{M}_E)$ 위의 측도이다. $\mu|_E$를 **$\mu$를 $E$로 제한한 측도**(restriction)라 한다. 모든 $B \in \mathcal{M}$에서 $E \cap B \in \mathcal{M}_E$이고 $\mu^E(B) = \mu|_E(E \cap B)$이다.
7. (상측도) $\mu$가 $(X, \mathcal{M})$ 위의 측도이고 $Y$가 집합이며 $f : X \to Y$가 함수라 하자. $Y$ 위의 σ-대수
   $$
   \begin{aligned}
   \mathcal{N}_f = \{&B \in \mathscr{P}(Y) : \\
   &f^{-1}(B) \in \mathcal{M}\}
   \end{aligned}
   $$
   의 원소 $B$에서 $f_*\mu(B) = \mu\bigl(f^{-1}(B)\bigr)$로 정한 함수 $f_*\mu : \mathcal{N}_f \to [0, \infty]$는 $(Y, \mathcal{N}_f)$ 위의 측도이고 $f_*\mu(Y) = \mu(X)$이다. $f_*\mu$를 **$f$에 의한 $\mu$의 상측도**(image measure)라 한다.
:::

:::english
Measurable spaces, the σ-algebra $\mathcal{M}_E$ obtained by reducing $\mathcal{M}$ to $E$, and the σ-algebra transported by a function are as in the σ-algebra entry, and measures, measure spaces and finite measures are as in the entry on measures. The indicator function $\chi_A$ is as in the indicator-function entry. $[0, \infty]$ with its order, addition and multiplication is as in the entry on extended nonnegative reals, and finite sums $\sum_{k=1}^{N}$, sums $\sum_{k=1}^{\infty}$ of sequences and sums $\sum_{n \in A}$ over subsets of $\mathbb{N}$ are as in the entry on sums in $[0, \infty]$. Finite sets, infinite sets and the number of elements $|A|$ are as in the finite-set entry and the entry on the number of elements. Below, $(X, \mathcal{M})$ is a measurable space.

The following hold.

1. (Zero measure) The function $\mathcal{M} \to [0, \infty]$ whose value is $0$ at every $A \in \mathcal{M}$ is a finite measure on $(X, \mathcal{M})$. It is called the **zero measure**.
2. (Dirac measure) If $p \in X$, the function $\delta_p : \mathcal{M} \to [0, \infty]$ defined for $A \in \mathcal{M}$ by
   $$
   \delta_p(A) = \chi_A(p),
   $$
   that is, the function equal to $1$ if $p \in A$ and $0$ if $p \notin A$, is a finite measure on $(X, \mathcal{M})$ and $\delta_p(X) = 1$. One has $\delta_p(A) = 0$ exactly when $p \notin A$. The measure $\delta_p$ is called the **Dirac measure** concentrated at $p$.
3. (Weighted counting measure) If $X$ is a subset of $\mathbb{N}$ and $(x_n)$ is a sequence in $[0, \infty]$, then the function $\mu_x : \mathscr{P}(X) \to [0, \infty]$ defined for $A \in \mathscr{P}(X)$ by
   $$
   \mu_x(A) = \sum_{n \in A} x_n
   $$
   is a measure on $(X, \mathscr{P}(X))$, and $\mu_x(\{n\}) = x_n$ for $n \in X$. The measure $\mu_x$ is called the **weighted counting measure** given by $(x_n)$.
4. (Counting measure) Let $X$ be a subset of $\mathbb{N}$. The function $\mu^{\sharp} : \mathscr{P}(X) \to [0, \infty]$ defined for $A \in \mathscr{P}(X)$ by $\mu^{\sharp}(A) = |A|$ (regarded as a real number) if $A$ is finite and $\mu^{\sharp}(A) = \infty$ if $A$ is infinite is called the **counting measure** on $X$.
   - (i) $\mu^{\sharp}(A) = \sum_{n \in A} 1$ for every $A \in \mathscr{P}(X)$. That is, $\mu^{\sharp}$ is the weighted counting measure given by the sequence all of whose terms are $1$, and it is a measure on $(X, \mathscr{P}(X))$.
   - (ii) $\mu^{\sharp}(A) = 0$ exactly when $A = \emptyset$.
   - (iii) $\mu^{\sharp}$ is a finite measure exactly when $X$ is finite.
5. (Scalar multiples, sums of sequences of measures, finite linear combinations)
   - (i) If $\mu$ is a measure on $(X, \mathcal{M})$ and $c \in [0, \infty]$, then the function $c\mu$ whose value at $A \in \mathcal{M}$ is $c\,\mu(A)$ is a measure on $(X, \mathcal{M})$.
   - (ii) If for each natural number $k$ a measure $\nu_k$ on $(X, \mathcal{M})$ is given, then the function $\sum_{k=1}^{\infty} \nu_k$ whose value at $A \in \mathcal{M}$ is $\sum_{k=1}^{\infty} \nu_k(A)$ is a measure on $(X, \mathcal{M})$.
   - (iii) If $N$ is an integer with $N \ge 0$ and for each integer $k$ with $1 \le k \le N$ a measure $\nu_k$ on $(X, \mathcal{M})$ and an element $c_k \in [0, \infty]$ are given, then the function $\sum_{k=1}^{N} c_k \nu_k$ whose value at $A \in \mathcal{M}$ is $\sum_{k=1}^{N} c_k\,\nu_k(A)$ is a measure on $(X, \mathcal{M})$. If $N = 0$, it is the zero measure.
6. (Contraction and restriction) Let $\mu$ be a measure on $(X, \mathcal{M})$ and $E \in \mathcal{M}$.
   - (i) The function $\mu^E : \mathcal{M} \to [0, \infty]$ defined for $B \in \mathcal{M}$ by $\mu^E(B) = \mu(E \cap B)$ is a measure on $(X, \mathcal{M})$. It is called the **contraction** of $\mu$ to $E$.
   - (ii) $\mathcal{M}_E \subseteq \mathcal{M}$, and the function $\mu|_E : \mathcal{M}_E \to [0, \infty]$ defined for $A \in \mathcal{M}_E$ by $\mu|_E(A) = \mu(A)$ is a measure on $(E, \mathcal{M}_E)$. It is called the **restriction** of $\mu$ to $E$. For every $B \in \mathcal{M}$, $E \cap B \in \mathcal{M}_E$ and $\mu^E(B) = \mu|_E(E \cap B)$.
7. (Image measure) Let $\mu$ be a measure on $(X, \mathcal{M})$, let $Y$ be a set, and let $f : X \to Y$ be a function. The function $f_*\mu : \mathcal{N}_f \to [0, \infty]$ defined on the elements $B$ of the σ-algebra on $Y$
   $$
   \begin{aligned}
   \mathcal{N}_f = \{&B \in \mathscr{P}(Y) : \\
   &f^{-1}(B) \in \mathcal{M}\}
   \end{aligned}
   $$
   by $f_*\mu(B) = \mu\bigl(f^{-1}(B)\bigr)$ is a measure on $(Y, \mathcal{N}_f)$, and $f_*\mu(Y) = \mu(X)$. It is called the **image measure** of $\mu$ under $f$.
:::

## 직관

측도의 정의를 만족하는 함수를 실제로 만들어 보는 항목입니다. 디랙 측도는 점 $p$ 하나에 질량 $1$을 놓은 것입니다. 어떤 집합의 질량은 그 집합이 $p$를 담는지만으로 정해집니다. 가중 셈측도는 자연수 $n$마다 질량 $x_n$을 놓고 집합에 든 점의 질량을 모두 더한 것이고, 모든 질량이 $1$이면 원소의 개수를 세는 셈측도가 됩니다. 질량 $x_n$으로 $\infty$를 놓아도 됩니다.

나머지는 이미 있는 측도에서 새 측도를 만드는 방법입니다. 상수배는 모든 질량에 같은 수를 곱하는 것이고, 합은 여러 질량 분포를 겹쳐 놓는 것입니다. 축약은 $E$ 밖의 질량을 지우고 전체집합 $X$는 그대로 두는 것이고, 제한은 전체집합을 $E$로 바꾸어 $E$의 가측 부분집합에만 값을 주는 것입니다. 상측도는 각 점의 질량을 함수 $f$를 따라 $Y$로 옮긴 것이어서, $B \in \mathcal{N}_f$의 질량은 $f$로 $B$에 떨어지는 점들의 질량입니다.

이 항목의 증명은 (M1)과 (M2)를 확인하거나, 앞 번호의 측도와 같은 함수임을 보입니다. (M2)를 확인할 때 쓰는 도구는 1단원의 $[0, \infty]$의 합, 특히 서로소인 조각으로 묶어 더하는 [[nonnegative-double-series|이중급수]]의 등식입니다. 이 항목은 셈측도와 가중 셈측도를 $\mathbb{N}$의 부분집합 위에서만 다룹니다. 그 위에서는 1단원의 합 $\sum_{n \in A}$로 값을 쓸 수 있어 σ-가법성이 그 등식에서 바로 나옵니다.

## 증명

:::idea
측도마다 (M1)은 값을 바로 계산하고, (M2)는 서로소인 집합열의 합집합에서의 값을 이미 있는 등식(지시함수의 급수, 서로소인 조각으로 묶은 합, 이중급수의 순서 바꾸기, 원래 측도의 σ-가법성)으로 각 항의 값의 합으로 바꾼다.
:::

:::hint
디랙 측도: 서로소인 집합열 $(A_n)$에서 $\sum_{n=1}^{\infty} \chi_{A_n}(p)$는 실수의 급수로 수렴하고 합이 $\chi_{\bigcup A_n}(p)$이다. 셈측도: $\sum_{n \in A} 1$이 원소의 개수라는 것을 쓰면 가중 셈측도의 특수한 경우가 된다.
:::

:::hint
측도열의 합: $(k, l)$에서의 값이 $\nu_k(A_l)$인 이중첨수 원소열의 두 반복합이 같다. 유한 일차결합은 $N$보다 뒤의 측도를 영측도로 채운 측도열의 합이다.
:::

:::proof
σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, 측도의 성질은 [[measure|측도와 측도공간]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로, 집합열의 성질은 [[sequence-of-sets|집합열]]의 번호로 인용한다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)로 다룬다.

**(1)** 이 함수를 $o$라 하자. $o(\emptyset) = 0$이다. 서로소인 집합열 $(A_n)$에서 합 항목의 (2)에 의해 모든 항이 $0$인 원소열의 합은 $0$이므로 $o\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = 0 = \sum_{n=1}^{\infty} o(A_n)$이다. $o(X) = 0 < \infty$이므로 유한 측도이다.

**(2)** [[indicator-function|지시함수]]의 (1)에 의해 $\chi_A(p)$는 $0$이거나 $1$이고, $\chi_A(p) = 1$인 것은 $p \in A$일 때, $0$인 것은 $p \notin A$일 때이다. 그래서 $\delta_p$의 값은 $[0, \infty]$의 실수인 원소이고 진술의 두 설명은 같은 함수이며, $\delta_p(A) = 0$인 것은 정확히 $p \notin A$일 때이다. 같은 (1)에 의해 $\delta_p(\emptyset) = \chi_{\emptyset}(p) = 0$이고 $\delta_p(X) = \chi_X(p) = 1 < \infty$이다. (M2): $(A_n)$을 $\mathcal{M}$의 원소로 된 서로소인 집합열이라 하자. 지시함수의 (6)의 (ii)에 의해 $n$번째 항이 $\chi_{A_n}(p)$인 실수열의 급수는 수렴하고 그 합은 $\chi_{\bigcup_{n=1}^{\infty} A_n}(p)$이다. 이 항들은 $0$ 이상인 실수이므로 합 항목의 (3)의 (i)에 의해 $[0, \infty]$의 원소열의 합 $\sum_{n=1}^{\infty} \chi_{A_n}(p)$도 같은 실수이다. 따라서 $\delta_p\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \sum_{n=1}^{\infty} \delta_p(A_n)$이다.

**(3)** [[sigma-algebra|σ-대수]]의 (5)에 의해 $\mathscr{P}(X)$는 $X$ 위의 σ-대수이다. $X \subseteq \mathbb{N}$이므로 $X$의 부분집합은 $\mathbb{N}$의 부분집합이고 $\sum_{n \in A} x_n$이 정해진다. (M1): 합 항목의 (7)의 (i)에 의해 $\mu_x(\emptyset) = \sum_{n \in \emptyset} x_n = 0$이다. (M2): $(A_k)$를 $X$의 서로소인 집합열이라 하자. 모든 항이 $\mathbb{N}$의 부분집합이므로 [[function]]의 진술(공역은 선언하기 나름이다)에 의해 같은 함수 $(A_k)$는 $\mathbb{N}$의 서로소인 집합열이기도 하고, 집합열의 (1)에 의해 어느 쪽으로 보아도 $\bigcup_{k=1}^{\infty} A_k$는 같은 집합이다. [[nonnegative-double-series|0 이상인 이중급수]]의 (1)에 의해
$$
\begin{aligned}
\mu_x\Bigl( \bigcup_{k=1}^{\infty} A_k \Bigr) &= \sum_{n \in \bigcup_{k=1}^{\infty} A_k} x_n \\
&= \sum_{k=1}^{\infty} \sum_{n \in A_k} x_n \\
&= \sum_{k=1}^{\infty} \mu_x(A_k)
\end{aligned}
$$
이다. $n \in X$이면 $\{n\} \subseteq X$이고 합 항목의 (7)의 (i)에 의해 $\mu_x(\{n\}) = x_n$이다.

**(4)** (i) $A \in \mathscr{P}(X)$이면 $A \subseteq \mathbb{N}$이므로 합 항목의 (7)의 (iv)에 의해, $A$가 유한집합이면 $\sum_{n \in A} 1 = |A| = \mu^{\sharp}(A)$이고 무한집합이면 $\sum_{n \in A} 1 = \infty = \mu^{\sharp}(A)$이다. 모든 항이 $1$인 원소열을 $(x_n)$으로 두면 $\mu^{\sharp}$와 $\mu_x$는 정의역이 $\mathscr{P}(X)$로 같고 모든 원소에서 값이 같으므로 같은 함수이고, (3)에 의해 측도이다.

(ii) $A = \emptyset$이면 [[finite-set]]의 (F2)에 의해 $A$는 원소를 $0$개 갖는 유한집합이므로 $\mu^{\sharp}(A) = |A| = 0$이다. 거꾸로 $\mu^{\sharp}(A) = 0$이면 $0 \ne \infty$이므로 $A$는 유한집합이고 $|A| = 0$, 곧 $A$는 원소를 $0$개 가지므로 (F2)에 의해 $A = \emptyset$이다.

(iii) $X$가 유한집합이면 $\mu^{\sharp}(X) = |X|$는 실수이므로 $\mu^{\sharp}(X) < \infty$이다. $X$가 무한집합이면 $\mu^{\sharp}(X) = \infty$이므로 유한 측도가 아니다.

**(5)** (i) $[0, \infty]$의 (4)의 (i)에 의해 $(c\mu)(\emptyset) = c \cdot 0 = 0 \cdot c = 0$이다. 서로소인 집합열 $(A_n)$에서 (M2)와 합 항목의 (5)의 상수배에 의해 $c\,\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = c \sum_{n=1}^{\infty} \mu(A_n) = \sum_{n=1}^{\infty} c\,\mu(A_n)$이다.

(ii) 이 함수를 $\nu$라 하자. (M1): 모든 $k$에서 $\nu_k(\emptyset) = 0$이므로 합 항목의 (2)에 의해 $\nu(\emptyset) = 0$이다. (M2): $(A_l)$을 $\mathcal{M}$의 원소로 된 서로소인 집합열이라 하고 $U = \bigcup_{l=1}^{\infty} A_l$이라 하자. $(k, l)$에서의 값이 $\nu_k(A_l)$인 $[0, \infty]$의 이중첨수 원소열을 $a$라 하자. 각 $k$에서 $\nu_k$의 (M2)에 의해 $\nu_k(U) = \sum_{l=1}^{\infty} a_{k,l}$이므로, $k$번째 항이 $\nu_k(U)$인 원소열과 $k$번째 항이 $\sum_{l=1}^{\infty} a_{k,l}$인 원소열은 같고
$$
\begin{aligned}
\nu(U) &= \sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l} \\
&= \sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l} \\
&= \sum_{l=1}^{\infty} \nu(A_l)
\end{aligned}
$$
이다. 둘째 등식은 [[nonnegative-double-series|0 이상인 이중급수]]의 (2)이고, 마지막 등식은 $\nu$의 정의에 의해 $\sum_{k=1}^{\infty} a_{k,l} = \nu(A_l)$이기 때문이다.

(iii) 자연수 $k$마다 (Z5)에 의해 $k \le N$과 $N < k$ 가운데 정확히 하나이고, $k \le N$이면 (Z1)에 의해 $1 \le k \le N$이다. $k \le N$이면 $\rho_k = c_k \nu_k$, $N < k$이면 $\rho_k$를 영측도로 두면, (i)과 (1)에 의해 각 $\rho_k$는 $(X, \mathcal{M})$ 위의 측도이고, (ii)에 의해 $\sum_{k=1}^{\infty} \rho_k$는 측도이다. $A \in \mathcal{M}$이면 $N < k$에서 $\rho_k(A) = 0$이므로 합 항목의 (4)에 의해 $\sum_{k=1}^{\infty} \rho_k(A) = \sum_{k=1}^{N} \rho_k(A)$이고, $1 \le k \le N$에서 $\rho_k(A) = c_k\,\nu_k(A)$이므로 합 항목의 (1)의 (ii)에 의해 이것은 $\sum_{k=1}^{N} c_k\,\nu_k(A)$이다. 따라서 $\sum_{k=1}^{N} c_k \nu_k$는 측도 $\sum_{k=1}^{\infty} \rho_k$와 같은 함수이다. $N = 0$이면 합 항목의 (1)의 (i)에 의해 모든 값이 빈 합 $0$이므로 영측도이다.

**(6)** (i) σ-대수의 (1)에 의해 $B \in \mathcal{M}$이면 $E \cap B \in \mathcal{M}$이므로 $\mu^E$가 정해진다. $\mu^E(\emptyset) = \mu(E \cap \emptyset) = \mu(\emptyset) = 0$이다. $(B_n)$을 $\mathcal{M}$의 원소로 된 서로소인 집합열이라 하자. $n$번째 항이 $E \cap B_n$인 집합열은 σ-대수의 (1)에 의해 $\mathcal{M}$의 원소로 된 집합열이고, $n \ne m$이면 $(E \cap B_n) \cap (E \cap B_m) \subseteq B_n \cap B_m = \emptyset$이므로 서로소이다. 집합열의 (5)에 의해 $E \cap \bigcup_{n=1}^{\infty} B_n = \bigcup_{n=1}^{\infty} (E \cap B_n)$이므로 $\mu$의 (M2)에 의해
$$
\begin{aligned}
\mu^E\Bigl( \bigcup_{n=1}^{\infty} B_n \Bigr) &= \mu\Bigl( \bigcup_{n=1}^{\infty} (E \cap B_n) \Bigr) \\
&= \sum_{n=1}^{\infty} \mu(E \cap B_n) \\
&= \sum_{n=1}^{\infty} \mu^E(B_n)
\end{aligned}
$$
이다.

(ii) σ-대수의 (6)에 의해 $\mathcal{M}_E$는 $E$ 위의 σ-대수이고 $\mathcal{M}_E \subseteq \mathcal{M}$이므로 $\mu|_E$가 정해진다. σ-대수의 (1)을 $E$ 위의 σ-대수 $\mathcal{M}_E$에 쓰면 $\emptyset \in \mathcal{M}_E$이고 $\mu|_E(\emptyset) = \mu(\emptyset) = 0$이다. $(A_n)$을 $\mathcal{M}_E$의 원소로 된 $E$의 서로소인 집합열이라 하자. 모든 항이 $X$의 부분집합이므로 같은 함수 $(A_n)$은 $X$의 집합열이기도 하고, 그 항은 $\mathcal{M}$의 원소이며 서로소라는 조건은 두 항의 교집합만 보므로 그대로이다. 집합열의 (1)에 의해 어느 쪽으로 보아도 $\bigcup_{n=1}^{\infty} A_n$은 같은 집합이고, 이 집합은 $\mathcal{M}_E$의 원소이다((σ3)). 따라서 $\mu$의 (M2)에 의해 $\mu|_E\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \sum_{n=1}^{\infty} \mu(A_n) = \sum_{n=1}^{\infty} \mu|_E(A_n)$이다. 끝으로 σ-대수의 (6)에 의해 $\mathcal{M}_E = \{E \cap B : B \in \mathcal{M}\}$이므로 $B \in \mathcal{M}$이면 $E \cap B \in \mathcal{M}_E$이고, $\mu^E(B) = \mu(E \cap B) = \mu|_E(E \cap B)$이다.

**(7)** σ-대수의 (7)에 의해 $\mathcal{N}_f$는 $Y$ 위의 σ-대수이고, $B \in \mathcal{N}_f$이면 $f^{-1}(B) \in \mathcal{M}$이므로 $f_*\mu$가 정해진다. [[preimage-and-set-operations|역상과 집합의 연산]]의 (7)에 의해 $f^{-1}(\emptyset) = \emptyset$이고 $f^{-1}(Y) = X$이므로 $f_*\mu(\emptyset) = \mu(\emptyset) = 0$이고 $f_*\mu(Y) = \mu(X)$이다. $(B_n)$을 $\mathcal{N}_f$의 원소로 된 서로소인 집합열이라 하자. 집합열의 (5)에 의해 $n$번째 항이 $f^{-1}(B_n)$인 것은 $X$의 집합열이고, 그 항은 $\mathcal{M}$의 원소이다. $n \ne m$이면 같은 항목의 (1)의 (v)와 (7)에 의해 $f^{-1}(B_n) \cap f^{-1}(B_m) = f^{-1}(B_n \cap B_m) = f^{-1}(\emptyset) = \emptyset$이므로 서로소이다. 집합열의 (5)에 의해 $f^{-1}\bigl(\bigcup_{n=1}^{\infty} B_n\bigr) = \bigcup_{n=1}^{\infty} f^{-1}(B_n)$이므로 $\mu$의 (M2)에 의해
$$
\begin{aligned}
f_*\mu\Bigl( \bigcup_{n=1}^{\infty} B_n \Bigr) &= \mu\Bigl( \bigcup_{n=1}^{\infty} f^{-1}(B_n) \Bigr) \\
&= \sum_{n=1}^{\infty} f_*\mu(B_n)
\end{aligned}
$$
이다.
:::

## 예시와 반례

:::example[가중 셈측도를 디랙 측도들의 합으로 쓰기]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이라 하고, $(x_k)$를 $[0, \infty]$의 원소열이라 합시다. 자연수 $k$마다 $x_k \delta_k$는 (2)와 (5)의 (i)에 의해 측도이고, (5)의 (ii)에 의해 $\sum_{k=1}^{\infty} x_k \delta_k$도 측도입니다. 이 측도는 (3)의 가중 셈측도 $\mu_x$와 같습니다.

$A \subseteq \mathbb{N}$이라 합시다. $k$번째 항 $x_k \delta_k(A) = x_k\,\chi_A(k)$는 $k \in A$이면 $x_k \cdot 1 = x_k$이고 $k \notin A$이면 $x_k \cdot 0 = 0$입니다([[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (4)의 (i)의 $1a = a$, $0a = 0$과 교환법칙). 이것은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]에서 "$(x_k)$를 $A$ 밖에서 $0$으로 채운 원소열"의 $k$번째 항과 같으므로 $\sum_{k=1}^{\infty} x_k \delta_k(A) = \sum_{n \in A} x_n = \mu_x(A)$입니다. 질량 $x_k$를 점 $k$마다 하나씩 놓고 모두 겹쳐 놓은 것이 가중 셈측도라는 뜻입니다.
:::

:::example[등비 가중치의 가중 셈측도를 두 점으로 옮긴 상측도]
$X = \mathbb{N}$이고 $x_n = (1/2)^n$인 가중 셈측도 $\mu_x$를 생각합시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $x_n = \frac{1}{2} \bigl(\frac{1}{2}\bigr)^{n-1}$이므로 $(x_n)$은 첫째 항이 $\frac{1}{2}$이고 공비가 $\frac{1}{2}$인 [[geometric-series|등비급수]]의 항이고, 그 (2)에 의해 급수는 수렴하며 합은 $\frac{1/2}{1 - 1/2} = 1$입니다. 항은 실수의 거듭제곱의 (6)의 (i)에 의해 양수이므로 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)과 (7)의 (i)에 의해 $\mu_x(\mathbb{N}) = \sum_{n=1}^{\infty} x_n = 1$입니다. 그래서 $\mu_x$는 유한 측도입니다. (3)에 의해 $\mu_x(\{1\}) = x_1 = \frac{1}{2}$이고, [[measure|측도]]의 (2)의 (i)에 의해 $\mu_x(\mathbb{N} - \{1\}) = 1 - \frac{1}{2} = \frac{1}{2}$입니다.

$Y = \{1, 2\}$로 두고 $f : \mathbb{N} \to Y$를 $f(1) = 1$, $n \ge 2$이면 $f(n) = 2$로 정합시다(자연수 $n$이 $n \ne 1$이면 $1 \le n$이므로 $1 < n$이고, [[prime-number]]의 (Z1)에 의해 $n \ge 2$입니다). $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 $Y$의 모든 부분집합의 역상이 $\mathcal{M}$의 원소이고 $\mathcal{N}_f = \mathscr{P}(Y)$입니다. $Y$의 부분집합은 $\emptyset$, $\{1\}$, $\{2\}$, $Y$이고 그 역상은 차례로 $\emptyset$, $\{1\}$, $\mathbb{N} - \{1\}$, $\mathbb{N}$이므로
$$
\begin{gathered}
f_*\mu_x(\emptyset) = 0, \quad f_*\mu_x(\{1\}) = \tfrac{1}{2}, \\
f_*\mu_x(\{2\}) = \tfrac{1}{2}, \quad f_*\mu_x(Y) = 1
\end{gathered}
$$
입니다. (5)의 (iii)으로 만든 측도 $\frac{1}{2}\delta_1 + \frac{1}{2}\delta_2$의 네 값 $\frac{1}{2}\chi_A(1) + \frac{1}{2}\chi_A(2)$도 $0$, $\frac{1}{2}$, $\frac{1}{2}$, $1$이므로 두 측도는 같은 함수입니다. 상측도는 $2$ 이상의 모든 점의 질량을 점 $2$ 하나에 모은 것입니다.
:::

:::counterexample[두 디랙 측도의 최댓값]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$에서 $\lambda(A) = \max\{\delta_1(A), \delta_2(A)\}$로 정합시다(최댓값은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (8)의 것). $\lambda(\emptyset) = \max\{0, 0\} = 0$이므로 (M1)은 성립합니다. 그러나 $\lambda(\{1\}) = \max\{1, 0\} = 1$, $\lambda(\{2\}) = \max\{0, 1\} = 1$, $\lambda(X) = \max\{1, 1\} = 1$입니다. $\{1\} \cap \{2\} = \emptyset$이고 $\{1\} \cup \{2\} = X$이므로, $\lambda$가 측도라면 [[measure|측도]]의 (1)의 (iii)에 의해 $\lambda(X) = 1 + 1 = 2$여야 합니다. 따라서 $\lambda$는 측도가 아닙니다. 두 디랙 측도의 합 $\delta_1 + \delta_2$는 (5)의 (iii)에 의해 측도이고 $X$에서의 값이 $2$입니다.
:::

## 확인 질문

:::check[$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$에서 $\delta_1 + \delta_2$는 (1)–(4) 가운데 어느 측도와 같은가?]
$X$ 위의 셈측도 $\mu^{\sharp}$와 같습니다. $(\delta_1 + \delta_2)(A) = \chi_A(1) + \chi_A(2)$는 $A = \emptyset$, $\{1\}$, $\{2\}$, $X$에서 차례로 $0$, $1$, $1$, $2$이고, 이것은 각 집합의 원소의 개수 $|A|$입니다. $X$는 유한집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 그 부분집합도 유한집합이고 $\mu^{\sharp}(A) = |A|$입니다.
:::

:::check[디랙 측도 $\delta_p$를 $E \in \mathcal{M}$으로 축약한 측도는 무엇인가?]
$p \in E$이면 $\delta_p$ 자신이고, $p \notin E$이면 영측도입니다. [[indicator-function|지시함수]]의 (3)에 의해 $\delta_p^E(B) = \chi_{E \cap B}(p) = \chi_E(p)\,\chi_B(p)$이고, $\chi_E(p)$는 $p \in E$이면 $1$, 아니면 $0$이기 때문입니다.
:::
