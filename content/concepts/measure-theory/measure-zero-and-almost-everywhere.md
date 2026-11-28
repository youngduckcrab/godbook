---
title: 측도가 0 인 집합과 μ-거의 어디서나
title_en: Sets of Measure Zero and μ-Almost Everywhere
aliases: [거의 어디서나, μ-거의 어디서나, 측도가 0인 집합, μ-a.e., almost everywhere, null set of a measure, μ-null set]
kind: definition
field: measure-theory
msc: ["28A10"]
level: undergrad
summary: "측도공간에서 측도가 0 인 가측집합과, 성질이 측도가 0 인 어떤 가측집합 밖에서 모두 성립한다는 뜻의 μ-거의 어디서나를 정의한다. 측도가 0 인 집합의 부분집합과 집합열의 합집합, 예외 집합이 가측일 때의 판정, 가측인 예외 집합의 열로 주어진 성질들을 한꺼번에 모으기, 함수의 거의 어디서나의 같음과 부등식, 셈측도와 디랙 측도와 영측도에서의 뜻을 다룬다."
requires: [open-sentence, set-operations, sequence-of-sets, sigma-algebra, measurable-function, extended-measurable-function, operations-on-measurable-functions, real-order-axioms, extended-nonnegative-reals, series-in-extended-nonnegative-reals, measure, measure-examples]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.2절 Measure spaces, Definition 4.25, Proposition 4.26 (p.104–105), Definition 4.27 과 Example 4.28 (p.105), Example 4.29 (p.105–106); 4.5절 Exercises, Exercise 4.26 과 Exercise 4.27 (p.116–117)
    checked: original
    note: "출처의 Definition 4.25(p.104)는 µ(N) = 0 인 N ∈ S 를 µ-null 이라 하고 그런 집합 전체를 N(µ) 로 쓴다. 이 사이트는 7단원의 ℝ 위의 낱말과 구별하려고 '측도가 0 인 집합'이라 부르고 기호 N(µ) 를 쓰지 않는다. (1)은 출처의 Proposition 4.26(p.104–105, N(µ) 가 σ-환)과 같은 내용이고 증명도 같은 방법(단조성과 가산 준가법성)이다. 출처는 Proposition 4.26 뒤(p.105)에서 셈측도 (ℕ, P(ℕ), µ♯) 에서 측도가 0 인 집합이 공집합뿐임을 정렬 원리로 보이고, 이 항목의 (5)의 (i)은 이것을 측도의 예 (4)의 (ii)로 인용했다. Definition 4.27(p.105)의 µ a.e. 는 이 항목의 정의와 같다. (4)의 (i)(ii)는 출처 Example 4.28(p.105)의 내용이다. (2)의 (i)의 한 방향은 출처 Exercise 4.27 (b)(p.117)이다. (4)의 (iii)은 출처 Exercise 4.26(p.116, χ_A = χ_B µ-a.e. 의 판정)과 같은 발상이다. (4)의 (iv)는 출처 Example 4.29(p.105–106)의 수렴하는 점의 집합을 쓴 것이고, 그 집합이 가측이라는 것은 operations-on-measurable-functions 의 (4)로 인용했다. 출처는 Example 4.29 뒤(p.106)에서 예외 집합이 가측이 아닐 수 있다는 것을 X = {1, 2, 3}, S = σ({1}), µ = δ_1 의 예로 보이고, 예시 '예외 집합이 가측이 아닌 경우'는 같은 현상을 보이는 같은 발상의 예이다(두 점 위의 영측도). (3)의 (ii)는 출처가 Theorem 6.13(p.174) 등에서 예외 집합들의 열을 한꺼번에 모으는 단계를, 예외 집합이 가측집합의 열로 주어진 꼴로 진술한 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(감소열 반례와 보렐–칸텔리 역의 예를 다시 계산, 디랙 측도의 역방향 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 측도의 성질은 [[measure|측도와 측도공간]]의 것이고, 셈측도, 디랙 측도, 영측도는 [[measure-examples|측도의 예]]의 것이다. 집합열과 $\bigcup_{n=1}^{\infty}$은 [[sequence-of-sets|집합열]]의 것이다. $X$ 위의 열린 문장은 [[open-sentence|열린 문장]]의 것이다. 가측인 실숫값 함수는 [[measurable-function|가측함수]]의 것이고, 가측인 $[0, \infty]$ 값 함수는 [[extended-measurable-function|확장된 실숫값 가측함수]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이다.

**측도가 0 인 집합.** $N \in \mathcal{M}$이고 $\mu(N) = 0$일 때 $N$을 **측도가 0 인 집합**(set of measure zero)이라 한다.

**μ-거의 어디서나.** $X$의 원소 $x$에 관한 열린 문장 $P(x)$가 **$\mu$-거의 어디서나**(μ-almost everywhere) 성립한다는 것은 정확히 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$에서 $P(x)$가 참일 때이다. 이것을 "$P(x)$ $\mu$-a.e."로도 쓴다. 집합
$$
E_P = \{x \in X : P(x)\text{가 거짓}\}
$$
을 $P$의 **예외 집합**이라 한다. $P$가 $\mu$-거의 어디서나 성립하는 것은 정확히 $E_P \subseteq N$인 측도가 0 인 집합 $N$이 있을 때이다.

$X$ 위의 두 함수 $f$, $g$가 둘 다 실숫값이거나 둘 다 $[0, \infty]$ 값일 때, "$f = g$ $\mu$-거의 어디서나"는 열린 문장 $f(x) = g(x)$가 $\mu$-거의 어디서나 성립한다는 뜻이고, "$f \le g$ $\mu$-거의 어디서나"도 같은 방식으로 정한다(부등호는 실수 또는 $[0, \infty]$의 순서이다).

다음이 성립한다.

1. (측도가 0 인 집합)
   - (i) $\emptyset$은 측도가 0 인 집합이다. $N$이 측도가 0 인 집합이고 $A \in \mathcal{M}$이며 $A \subseteq N$이면 $A$는 측도가 0 인 집합이다.
   - (ii) $(N_k)$가 $\mathcal{M}$의 원소로 된 집합열이고 모든 $N_k$가 측도가 0 인 집합이면 $\bigcup_{k=1}^{\infty} N_k$는 측도가 0 인 집합이다. 두 측도가 0 인 집합의 합집합도 측도가 0 인 집합이다.
   - (iii) $N$이 측도가 0 인 집합이고 $A \in \mathcal{M}$이면 $\mu(A \cup N) = \mu(A) = \mu(A - N)$이다.
2. (예외 집합이 가측일 때)
   - (i) $E_P \in \mathcal{M}$이면, $P(x)$가 $\mu$-거의 어디서나 성립하는 것은 정확히 $\mu(E_P) = 0$일 때이다.
   - (ii) 모든 $x \in X$에서 $P(x)$가 참이면 $P(x)$는 $\mu$-거의 어디서나 성립한다.
3. (모으기와 넘겨받기) $P(x)$, $Q(x)$는 $X$의 원소 $x$에 관한 열린 문장이다.
   - (i) $P(x)$와 $Q(x)$가 각각 $\mu$-거의 어디서나 성립하면 "$P(x)$이고 $Q(x)$"가 $\mu$-거의 어디서나 성립한다.
   - (ii) (가측인 예외 집합의 열) 자연수 $k$마다 열린 문장 $P_k(x)$가 주어져 있고, $k$번째 항이 예외 집합 $E_{P_k}$인 집합열이 $\mathcal{M}$의 원소로 된 집합열이라 하자. 모든 $k$에서 $P_k(x)$가 $\mu$-거의 어디서나 성립하면 "모든 자연수 $k$에서 $P_k(x)$"가 $\mu$-거의 어디서나 성립하고, 그 예외 집합은 $\bigcup_{k=1}^{\infty} E_{P_k}$이며 측도가 0 인 집합이다.
   - (iii) $P(x)$가 $\mu$-거의 어디서나 성립하고, $X$의 모든 원소 $x$에서 "$P(x)$이면 $Q(x)$"가 참이면 $Q(x)$는 $\mu$-거의 어디서나 성립한다.
4. (함수의 거의 어디서나의 같음과 부등식) $f$, $g$, $h$는 $X$ 위의 함수로, 모두 실숫값이거나 모두 $[0, \infty]$ 값이다.
   - (i) $f = g$ $\mu$-거의 어디서나인 것은 정확히 $f \le g$ $\mu$-거의 어디서나이고 $g \le f$ $\mu$-거의 어디서나일 때이다.
   - (ii) $f = f$ $\mu$-거의 어디서나이다. $f = g$ $\mu$-거의 어디서나이면 $g = f$ $\mu$-거의 어디서나이다. $f = g$이고 $g = h$가 각각 $\mu$-거의 어디서나이면 $f = h$ $\mu$-거의 어디서나이고, $\le$에 대해서도 같다.
   - (iii) $f$, $g$가 $\mathcal{M}$-가측이면 $\{x \in X : f(x) \ne g(x)\} \in \mathcal{M}$이고, $f = g$ $\mu$-거의 어디서나인 것은 정확히 $\mu(\{x \in X : f(x) \ne g(x)\}) = 0$일 때이다. $\le$에 대해서도 같은 꼴로 $\{x \in X : g(x) < f(x)\}$의 측도가 $0$일 때이다.
   - (iv) $(f_k)$가 $X$ 위의 실숫값 함수열이고 $f$가 실숫값 함수이며 모두 $\mathcal{M}$-가측이면, "실수열 $(f_k(x))$가 $f(x)$로 수렴한다"의 예외 집합은 $\mathcal{M}$의 원소이고, 이 문장이 $\mu$-거의 어디서나 성립하는 것은 정확히 그 예외 집합의 측도가 $0$일 때이다.
5. (예)
   - (i) $X$가 $\mathbb{N}$의 부분집합이고 $\mathcal{M} = \mathscr{P}(X)$, $\mu = \mu^{\sharp}$이면, 측도가 0 인 집합은 $\emptyset$뿐이고, $P(x)$가 $\mu^{\sharp}$-거의 어디서나 성립하는 것은 정확히 모든 $x \in X$에서 $P(x)$가 참일 때이다.
   - (ii) $p \in X$이고 $\mu = \delta_p$이면, $A \in \mathcal{M}$이 측도가 0 인 집합인 것은 정확히 $p \notin A$일 때이다. $P(x)$가 $\delta_p$-거의 어디서나 성립하면 $P(p)$는 참이다. $\mathcal{M} = \mathscr{P}(X)$이면 거꾸로 $P(p)$가 참일 때 $P(x)$는 $\delta_p$-거의 어디서나 성립한다.
   - (iii) $\mu$가 영측도이면 $X$의 원소에 관한 모든 열린 문장이 $\mu$-거의 어디서나 성립한다.
:::

:::english
Measure spaces and the properties of measures are as in the entry on measures, and the counting measure, Dirac measures and the zero measure are as in the entry on examples of measures. Sequences of sets and $\bigcup_{n=1}^{\infty}$ are as in the entry on sequences of sets. Open sentences about elements of $X$ are as in the entry on open sentences. Measurable real-valued functions are as in the entry on measurable functions, and measurable $[0, \infty]$-valued functions are as in the entry on $[0, \infty]$-valued measurable functions. Below, $(X, \mathcal{M}, \mu)$ is a measure space.

**Sets of measure zero.** When $N \in \mathcal{M}$ and $\mu(N) = 0$, $N$ is called a **set of measure zero**.

**μ-almost everywhere.** An open sentence $P(x)$ about elements $x$ of $X$ holds **$\mu$-almost everywhere** exactly when there is a set $N$ of measure zero such that $P(x)$ is true for every element $x$ of $X - N$. This is also written "$P(x)$ $\mu$-a.e." The set
$$
E_P = \{x \in X : P(x)\text{ is false}\}
$$
is called the **exceptional set** of $P$. $P$ holds $\mu$-almost everywhere exactly when there is a set $N$ of measure zero with $E_P \subseteq N$.

For two functions $f$, $g$ on $X$ that are both real-valued or both $[0, \infty]$-valued, "$f = g$ $\mu$-almost everywhere" means that the open sentence $f(x) = g(x)$ holds $\mu$-almost everywhere, and "$f \le g$ $\mu$-almost everywhere" is defined in the same way (the inequality is the order of the reals or of $[0, \infty]$).

The following hold.

1. (Sets of measure zero)
   - (i) $\emptyset$ is a set of measure zero. If $N$ is a set of measure zero, $A \in \mathcal{M}$ and $A \subseteq N$, then $A$ is a set of measure zero.
   - (ii) If $(N_k)$ is a sequence of elements of $\mathcal{M}$ all of which are sets of measure zero, then $\bigcup_{k=1}^{\infty} N_k$ is a set of measure zero. The union of two sets of measure zero is a set of measure zero.
   - (iii) If $N$ is a set of measure zero and $A \in \mathcal{M}$, then $\mu(A \cup N) = \mu(A) = \mu(A - N)$.
2. (When the exceptional set is measurable)
   - (i) If $E_P \in \mathcal{M}$, then $P(x)$ holds $\mu$-almost everywhere exactly when $\mu(E_P) = 0$.
   - (ii) If $P(x)$ is true for every $x \in X$, then $P(x)$ holds $\mu$-almost everywhere.
3. (Combining and passing on) $P(x)$ and $Q(x)$ are open sentences about elements $x$ of $X$.
   - (i) If $P(x)$ and $Q(x)$ each hold $\mu$-almost everywhere, then "$P(x)$ and $Q(x)$" holds $\mu$-almost everywhere.
   - (ii) (Sequences of measurable exceptional sets) Suppose that for each natural number $k$ an open sentence $P_k(x)$ is given and that the sequence of sets whose $k$th term is the exceptional set $E_{P_k}$ is a sequence of elements of $\mathcal{M}$. If $P_k(x)$ holds $\mu$-almost everywhere for every $k$, then "$P_k(x)$ for every natural number $k$" holds $\mu$-almost everywhere; its exceptional set is $\bigcup_{k=1}^{\infty} E_{P_k}$, which is a set of measure zero.
   - (iii) If $P(x)$ holds $\mu$-almost everywhere and "if $P(x)$ then $Q(x)$" is true for every element $x$ of $X$, then $Q(x)$ holds $\mu$-almost everywhere.
4. (Almost-everywhere equality and inequality of functions) $f$, $g$, $h$ are functions on $X$, all real-valued or all $[0, \infty]$-valued.
   - (i) $f = g$ $\mu$-almost everywhere exactly when $f \le g$ $\mu$-almost everywhere and $g \le f$ $\mu$-almost everywhere.
   - (ii) $f = f$ $\mu$-almost everywhere. If $f = g$ $\mu$-almost everywhere, then $g = f$ $\mu$-almost everywhere. If $f = g$ and $g = h$ each hold $\mu$-almost everywhere, then $f = h$ $\mu$-almost everywhere, and likewise for $\le$.
   - (iii) If $f$, $g$ are $\mathcal{M}$-measurable, then $\{x \in X : f(x) \ne g(x)\} \in \mathcal{M}$, and $f = g$ $\mu$-almost everywhere exactly when $\mu(\{x \in X : f(x) \ne g(x)\}) = 0$. Likewise $f \le g$ $\mu$-almost everywhere exactly when the set $\{x \in X : g(x) < f(x)\}$ has measure $0$.
   - (iv) If $(f_k)$ is a sequence of real-valued functions on $X$ and $f$ is a real-valued function, all $\mathcal{M}$-measurable, then the exceptional set of "the real sequence $(f_k(x))$ converges to $f(x)$" belongs to $\mathcal{M}$, and this sentence holds $\mu$-almost everywhere exactly when that exceptional set has measure $0$.
5. (Examples)
   - (i) If $X$ is a subset of $\mathbb{N}$, $\mathcal{M} = \mathscr{P}(X)$ and $\mu = \mu^{\sharp}$, then the only set of measure zero is $\emptyset$, and $P(x)$ holds $\mu^{\sharp}$-almost everywhere exactly when $P(x)$ is true for every $x \in X$.
   - (ii) If $p \in X$ and $\mu = \delta_p$, then $A \in \mathcal{M}$ is a set of measure zero exactly when $p \notin A$. If $P(x)$ holds $\delta_p$-almost everywhere, then $P(p)$ is true. If $\mathcal{M} = \mathscr{P}(X)$, then conversely $P(x)$ holds $\delta_p$-almost everywhere when $P(p)$ is true.
   - (iii) If $\mu$ is the zero measure, then every open sentence about elements of $X$ holds $\mu$-almost everywhere.
:::

## 직관

측도가 0 인 집합은 측도로 재면 "크기가 없는" 집합입니다. 그런 집합 위에서 무슨 일이 일어나든 측도로 재는 양에는 보이지 않으므로, 측도가 0 인 집합 밖에서만 성립하는 성질을 "거의 어디서나" 성립한다고 부릅니다. 질량으로 비유하면, 질량이 없는 곳에서만 깨지는 성질입니다. 셈측도에서는 공집합 말고는 질량이 없는 집합이 없으므로 "거의 어디서나"가 "어디서나"와 같고((5)의 (i)), 영측도에서는 어디에도 질량이 없으므로 아무 성질이나 거의 어디서나 성립합니다((5)의 (iii)).

정의는 예외 집합 자체가 아니라 그것을 덮는 측도가 0 인 가측집합 $N$이 있기를 요구합니다. 예외 집합이 $\mathcal{M}$에 없을 수 있기 때문입니다(아래 예시). 예외 집합이 $\mathcal{M}$에 있으면 덮는 집합을 따로 찾을 필요 없이 그 집합의 측도가 $0$인지만 보면 됩니다((2)의 (i)).

성질 두 개를 모으는 것은 덮는 집합 둘의 합집합으로 됩니다((3)의 (i)). 성질이 자연수마다 하나씩 끝없이 있으면, 정의만으로는 번호마다 덮는 집합을 하나씩 정해야 하는데 이 강의는 그렇게 번호마다 하나를 고르는 일을 하지 않습니다. 그래서 (3)의 (ii)는 예외 집합들이 처음부터 $\mathcal{M}$의 원소로 된 집합열로 주어진 꼴로 진술합니다. (4)의 (iii)(iv)의 성질(가측함수의 같음, 부등식, 수렴)은 예외 집합이 가측이므로 이 꼴에 맞습니다.

## 성질의 증명

:::proof
측도의 성질은 [[measure|측도와 측도공간]]의 번호로, σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, 집합열의 성질은 [[sequence-of-sets|집합열]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로 인용한다. 차집합·합집합의 원소 판정은 [[set-operations|집합의 연산]]의 정의이다.

**정의의 마지막 문장.** "$X - N$의 모든 원소에서 $P(x)$가 참"인 것은 "$P(x)$가 거짓인 $X$의 원소는 $N$에 속한다", 곧 $E_P \subseteq N$과 같다($x \in X$이고 $x \notin N$이면 $P(x)$가 참이라는 것의 대우).

**(1)** (i) σ-대수의 (1)과 (M1)에 의해 $\emptyset \in \mathcal{M}$이고 $\mu(\emptyset) = 0$이다. $A \subseteq N$이면 측도의 (2)에 의해 $\mu(A) \le \mu(N) = 0$이고, $[0, \infty]$의 (2)의 (iv)와 (ii)에 의해 $\mu(A) = 0$이다.

(ii) σ-대수의 (σ3)에 의해 합집합은 $\mathcal{M}$의 원소이다. 측도의 (4)의 (i)에 의해 $\mu\bigl(\bigcup_{k=1}^{\infty} N_k\bigr) \le \sum_{k=1}^{\infty} \mu(N_k)$이고, 합 항목의 (2)에 의해 모든 항이 $0$인 원소열의 합은 $0$이므로 합집합의 측도는 $0$이다. 두 집합 $N$, $N'$에서는 측도의 (3)에 의해 $\mu(N \cup N') \le \mu(N) + \mu(N') = 0$이다.

(iii) $A - N \subseteq A \subseteq A \cup N$이므로 측도의 (2)에 의해 $\mu(A - N) \le \mu(A) \le \mu(A \cup N)$이다. 측도의 (3)에 의해 $\mu(A \cup N) \le \mu(A) + \mu(N) = \mu(A)$이다. $A \cup N = (A - N) \cup N$이고 $(A - N) \cap N = \emptyset$이므로($x \in A \cup N$이고 $x \notin N$이면 $x \in A - N$이다) 측도의 (1)의 (iii)에 의해 $\mu(A \cup N) = \mu(A - N) + 0 = \mu(A - N)$이다. $[0, \infty]$의 (2)의 (ii)에 의해 세 값은 같다.

**(2)** (i) $\mu(E_P) = 0$이면 $N = E_P$가 정의의 집합이다. 거꾸로 $E_P \subseteq N$인 측도가 0 인 집합 $N$이 있으면, $E_P \in \mathcal{M}$이므로 (1)의 (i)에 의해 $\mu(E_P) = 0$이다. (ii) 모든 $x$에서 참이면 $E_P = \emptyset$이고 (1)의 (i)의 $N = \emptyset$이 정의의 집합이다.

**(3)** (i) $E_P \subseteq N$, $E_Q \subseteq N'$인 측도가 0 인 집합 $N$, $N'$이 있다. "$P(x)$이고 $Q(x)$"가 거짓인 $x$는 $P(x)$가 거짓이거나 $Q(x)$가 거짓이므로 그 예외 집합은 $E_P \cup E_Q \subseteq N \cup N'$이고, (1)의 (ii)에 의해 $N \cup N'$은 측도가 0 인 집합이다.

(ii) "모든 자연수 $k$에서 $P_k(x)$"가 거짓인 것은 $P_k(x)$가 거짓인 $k$가 있는 것이므로, 집합열의 (1)에 의해 그 예외 집합은 $\bigcup_{k=1}^{\infty} E_{P_k}$이다. 각 $E_{P_k}$는 $\mathcal{M}$의 원소이고 $P_k(x)$가 $\mu$-거의 어디서나 성립하므로 (2)의 (i)에 의해 $\mu(E_{P_k}) = 0$이다. (1)의 (ii)에 의해 합집합은 측도가 0 인 집합이고, (2)의 (i)에 의해 "모든 $k$에서 $P_k(x)$"는 $\mu$-거의 어디서나 성립한다. 이 논법은 각 $k$에서 이미 정해진 집합 $E_{P_k}$만 쓴다.

(iii) "$P(x)$이면 $Q(x)$"가 모든 $x$에서 참이면, $Q(x)$가 거짓인 $x$에서는 $P(x)$가 거짓이므로(대우) $E_Q \subseteq E_P$이다. $E_P \subseteq N$인 측도가 0 인 집합 $N$이 있으므로 $E_Q \subseteq N$이다.

**(4)** 아래의 부등호는 실숫값이면 [[real-order-axioms|실수의 순서]]의 것이고 $[0, \infty]$ 값이면 $[0, \infty]$의 (2)의 (ii)의 성질을 갖는다. 실수의 순서도 같은 성질(반사, 반대칭, 추이)을 갖는다.

(i) $f = g$ $\mu$-거의 어디서나이면, $f(x) = g(x)$이면 $f(x) \le g(x)$이고 $g(x) \le f(x)$이므로 (3)의 (iii)에 의해 둘 다 $\mu$-거의 어디서나이다. 거꾸로 둘 다 $\mu$-거의 어디서나이면 (3)의 (i)에 의해 "$f(x) \le g(x)$이고 $g(x) \le f(x)$"가 $\mu$-거의 어디서나 성립하고, 반대칭에 의해 이것이면 $f(x) = g(x)$이므로 (3)의 (iii)에 의해 $f = g$ $\mu$-거의 어디서나이다.

(ii) $f(x) = f(x)$는 모든 $x$에서 참이므로 (2)의 (ii)를 쓴다. 대칭: $f(x) = g(x)$이면 $g(x) = f(x)$이므로 (3)의 (iii). 추이: (3)의 (i)에 의해 "$f(x) = g(x)$이고 $g(x) = h(x)$"가 $\mu$-거의 어디서나이고, 이것이면 $f(x) = h(x)$이므로 (3)의 (iii). $\le$는 순서의 추이로 같다.

(iii) 실숫값이면 [[measurable-function|가측함수]]의 (7)에 의해, $[0, \infty]$ 값이면 [[extended-measurable-function|확장된 실숫값 가측함수]]의 (6)에 의해 $\{f \ne g\}$와 $\{f \le g\}$는 $\mathcal{M}$의 원소이다. $f(x) = g(x)$의 예외 집합은 $\{f \ne g\}$이므로 (2)의 (i)에 의해 첫 주장이 나온다. $f(x) \le g(x)$의 예외 집합은 $\{x : f(x) \le g(x)\text{가 거짓}\}$이고, 실수의 삼분법이나 $[0, \infty]$의 (2)의 (iii)에 의해 이것은 $\{g < f\} = X - \{f \le g\}$이다. σ-대수의 (σ2)에 의해 이 집합은 $\mathcal{M}$의 원소이고 (2)의 (i)을 쓴다.

(iv) [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (4)의 (ii)에 의해 $(f_k(x))$가 $f(x)$로 수렴하는 $x$ 전체의 집합 $C$는 $\mathcal{M}$의 원소이고, 예외 집합은 $X - C$이므로 σ-대수의 (σ2)에 의해 $\mathcal{M}$의 원소이다. (2)의 (i)을 쓴다.

**(5)** (i) [[measure-examples|측도의 예]]의 (4)의 (ii)에 의해 $\mu^{\sharp}(A) = 0$인 것은 $A = \emptyset$일 때뿐이다. 그래서 $P(x)$가 $\mu^{\sharp}$-거의 어디서나이면 $E_P \subseteq \emptyset$, 곧 $E_P = \emptyset$이어서 모든 $x$에서 $P(x)$가 참이다. 거꾸로는 (2)의 (ii)이다.

(ii) 첫 주장은 측도의 예의 (2)이다. $P(x)$가 $\delta_p$-거의 어디서나이면 $E_P \subseteq N$이고 $\delta_p(N) = 0$인 $N$이 있어, 첫 주장에 의해 $p \notin N$이므로 $p \notin E_P$, 곧 $P(p)$가 참이다. $\mathcal{M} = \mathscr{P}(X)$이고 $P(p)$가 참이면 $N = X - \{p\}$는 $\mathcal{M}$의 원소이고 $p \notin N$이므로 $\delta_p(N) = 0$이며, $X - N$의 원소는 $p$뿐이어서 $P$가 거기서 참이다.

(iii) 영측도에서는 $\mu(X) = 0$이므로 $N = X$로 두면 $X - N = \emptyset$이고 정의가 성립한다.
:::

## 예시와 반례

:::example[예외 집합이 가측이 아닌 경우]
$X = \{1, 2\}$, $\mathcal{M} = \{\emptyset, X\}$로 두고 $\mu$를 영측도라 합시다([[sigma-algebra|σ-대수]]의 (5)에 의해 $\{\emptyset, X\}$는 σ-대수입니다). 열린 문장 $P(x)$를 "$x = 1$"이라 하면 예외 집합은 $E_P = \{2\}$이고, 이것은 $\mathcal{M}$의 원소가 아닙니다. 그래도 $N = X$는 $\mu(X) = 0$인 가측집합이고 $E_P \subseteq X$이므로 $P(x)$는 $\mu$-거의 어디서나 성립합니다. 곧 "$P$가 거의 어디서나 성립한다"를 "$\mu(E_P) = 0$"으로 바꿔 말하는 것은 $E_P$가 $\mathcal{M}$에 있을 때만 뜻이 있습니다.
:::

:::example[두 점 가운데 한 점에만 질량이 있는 경우]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$이라 합시다. $f(1) = 0$, $f(2) = 5$와 $g(1) = 0$, $g(2) = -3$으로 둔 실숫값 함수에서 $f(x) = g(x)$의 예외 집합은 $\{2\}$이고, $\{2\}$는 $\mathcal{M}$의 원소이며 $\delta_1(\{2\}) = 0$이므로 $f = g$ $\delta_1$-거의 어디서나입니다. 그러나 $f(2) \ne g(2)$이므로 두 함수는 같은 함수가 아닙니다. 같은 두 함수는 $X$ 위의 셈측도 $\mu^{\sharp}$로는 (5)의 (i)에 의해 거의 어디서나 같지 않습니다.
:::

## 확인 질문

:::check[$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, $\mu = \delta_3$일 때 "$x$는 짝수이다"는 $\mu$-거의 어디서나 성립하는가?]
아닙니다. (5)의 (ii)에 의해 $\delta_3$-거의 어디서나 성립하는 성질은 $x = 3$에서 참이어야 하는데 $3$은 짝수가 아닙니다. 반대로 "$x$는 홀수이다"는 $3$에서 참이므로 (5)의 (ii)의 뒷부분에 의해 $\delta_3$-거의 어디서나 성립합니다.
:::

:::check[측도가 0 인 집합 두 개의 차집합은 측도가 0 인 집합인가?]
그렇습니다. $N$, $N'$이 측도가 0 인 집합이면 σ-대수의 (1)에 의해 $N - N' \in \mathcal{M}$이고 $N - N' \subseteq N$이므로 (1)의 (i)에 의해 측도가 0 인 집합입니다.
:::
