---
title: 적분의 단조 수렴 정리
title_en: Monotone Convergence Theorem for Integrals
aliases: [측도공간에서의 단조 수렴 정리, 가측함수열의 단조 수렴 정리, monotone convergence theorem for integrals, monotone convergence theorem for measure spaces]
kind: theorem
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위에서 점마다 단조증가하는 가측인 [0, ∞] 값 함수열의 극한의 적분은 적분들의 극한과 같다. 그래서 0 이상인 가측함수의 적분은 아래에서 다가가는 단순함수의 아무 증가열의 적분의 극한으로 구해진다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, recursion-theorem, power-set, sigma-algebra, sequence-of-sets, indicator-function, measurable-function, extended-nonnegative-reals, extended-measurable-function, simple-function-approximation, measure, measure-examples, properties-of-measures, countably-infinite-set, natural-numbers-are-infinite, prime-number, well-ordering-principle, integral-of-nonnegative-simple-function, integral-of-nonnegative-measurable-function]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Example 5.16 (p.134–135), Theorem 5.17 과 그 뒤 문단 (p.135–137); 4.1절 Example 4.17 (p.100); 5.5절 Exercise 5.25, 5.26, 5.27 (p.159); 2.6절 Exercise 2.31 (c) (p.56)
    checked: original
    note: "(1)은 출처 Theorem 5.17(p.135)이다. 출처는 M̄⁺(X, S) 의 단조증가열 (f_k) 가 모든 x 에서 f(x) 로 다가가면 모든 A ∈ S 에서 ∫_A f dµ = lim ∫_A f_k dµ 라고 진술한다. 이 항목은 [0, ∞] 의 단조증가열의 극한을 상한으로 정한 0 이상인 확장된 실수 항목의 극한으로 '다가간다'를 읽고, A = X 인 꼴을 먼저 증명한 뒤 f_kχ_A 에 써서 A 위의 꼴을 얻었다. 출처의 증명(p.136)은 ε ∈ (0, 1) 과 s ∈ S(f) 로 A_k = {x ∈ A : f_k(x) ≥ (1 − ε)s(x)} 를 두고, 이 집합열의 합집합이 A 라는 것을 'f_k(x) ≥ (1 − ε)f(x) ≥ (1 − ε)s(x) 인 k = k(ε, x) 가 있다' 로 보인다. 그런데 f(x) = ∞ 이면 (1 − ε)f(x) = ∞ 이고 f_k(x) 가 모두 실수일 수 있어 첫 부등식이 성립하지 않는다. 이 항목은 같은 집합(t = 1 − ε)을 쓰되 f(x) 를 거치지 않고, s(x) = 0 이면 k = 1, s(x) > 0 이면 ts(x) < s(x) ≤ f(x) = sup f_k(x) 와 상한의 성질로 k 를 얻었다. 출처의 'ε → 0'(p.136)은 이 항목에서 t ∫ s dµ ≤ L 이 모든 t ∈ (0, 1) 에서 성립하면 ∫ s dµ ≤ L 이라는 것을 ∫ s dµ 가 ∞ 인 경우와 L 이 ∞ 인 경우를 나누어 실수의 계산으로 보인 것이다. 출처는 측도 µ_s(A) = ∫_A s dµ 의 연속성(출처 Theorem 5.8 과 Theorem 4.14)을 쓰고 이 항목도 같다. 출처는 극한 f 의 가측성을 Theorem 3.31 로 얻고, 이 항목은 ∞ 까지의 값을 갖는 가측함수 항목의 (5)(상한의 가측성)로 얻었다. (2)의 첫째 등식은 출처가 Theorem 5.17 바로 뒤(p.137)에서 근사열로 ∫_X f dµ = lim ∫_X s_k dµ 를 얻는 것과 같고, 근사열에 의존하지 않는다는 둘째 문장은 출처가 Exercise 5.25(p.159)로 둔 것이다. 반례 '감소하는 함수열에서 극한과 적분을 바꿀 수 없는 예'의 집합 T_k = {n ∈ ℕ : n ≥ k} 와 셈측도는 출처 Example 4.17(p.100)의 A_k = {k, k + 1, …} 과 같은 대상이고, 감소하는 0 이상인 함수열에서 등식이 깨지는 것은 출처 Exercise 5.27(p.159, 르베그 측도 위의 (1/k)χ_{[k, +∞)})과 같은 발상이다. 예시 '증가하는 집합열의 지시함수'는 출처 Example 5.16(p.134–135, 증가하는 χ_{[1/k, 1)} 가 χ_{(0, 1)} 로 다가가고 적분이 1 − 1/k 에서 1 로 간다)과 같은 대상이고, 출처는 Theorem 5.17 뒤(p.137)에서 이 예가 정리의 가정을 만족한다고 다시 적는다. 출처 Exercise 5.26(p.159, χ_{[0, k]} 가 χ_{[0, +∞)} 로)도 같은 대상이고, 지시함수열이 χ_A 로 점마다 다가간다는 것은 출처 Exercise 2.31 (c)(p.56)와 같은 사실이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 증명의 연습문제 번호와 Cor 5.18 마지막 줄을 원문 대조, 디랙 측도의 f(p) = ∞ 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도의 성질은 [[measure|측도와 측도공간]]의 것이고, 측도의 연속성은 [[properties-of-measures|측도의 연속성]]의 것이다. $X$ 위의 $[0, \infty]$ 값 함수, $[0, \infty]$ 값 함수열과 실숫값 함수열, 그 가측성은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고, 단순함수와 표준 근사열 $s_k^f$는 [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 것이다. 0 이상인 단순함수의 적분은 [[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]의 것이고, 가측인 $[0, \infty]$ 값 함수의 적분 $\int f\,d\mu$, $\int_A f\,d\mu$와 $S(f)$는 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이다. $[0, \infty]$와 그 순서, 곱셈, 상한, 단조증가인 원소열과 그 극한 $\lim$은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고, "가측"은 $\mathcal{M}$-가측을 뜻한다.

1. (단조 수렴 정리) $(f_k)$가 $X$ 위의 $[0, \infty]$ 값 함수열이고, 모든 $f_k$가 가측이며, 모든 $x \in X$와 모든 자연수 $k$에서 $f_k(x) \le f_{k+1}(x)$라 하자. $X$ 위의 $[0, \infty]$ 값 함수 $f$가 모든 $x \in X$에서 $f(x) = \lim_{k \to \infty} f_k(x)$이면 다음이 성립한다.
   - (i) $f$는 가측이다.
   - (ii) $k$번째 항이 $\int f_k\,d\mu$인 $[0, \infty]$의 원소열은 단조증가이고
     $$
     \int f\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu
     $$
     이다.
   - (iii) 모든 $A \in \mathcal{M}$에서 $k$번째 항이 $\int_A f_k\,d\mu$인 원소열은 단조증가이고 $\int_A f\,d\mu = \lim_{k \to \infty} \int_A f_k\,d\mu$이다.
2. (단순함수의 증가열로 적분 구하기)
   - (i) $f$가 $X$ 위의 가측인 $[0, \infty]$ 값 함수이면 $\int f\,d\mu = \lim_{k \to \infty} \int s_k^f\,d\mu$이다.
   - (ii) $(u_k)$가 $X$ 위의 실숫값 함수열이고, 모든 $u_k$가 0 이상인 단순함수이며, 모든 $x \in X$와 자연수 $k$에서 $u_k(x) \le u_{k+1}(x)$라 하자. $X$ 위의 $[0, \infty]$ 값 함수 $f$가 모든 $x$에서 $f(x) = \lim_{k \to \infty} u_k(x)$이면 $f$는 가측이고 $\int f\,d\mu = \lim_{k \to \infty} \int u_k\,d\mu$이다. 따라서 이런 열을 어떻게 잡아도 적분들의 극한은 $\int f\,d\mu$ 하나이다.
:::

:::english
Measure spaces and properties of measures are as in the entry on measures, and continuity of measures is as in its own entry. $[0, \infty]$-valued functions on $X$, $[0, \infty]$-valued and real-valued sequences of functions, and their measurability are as in the entry on measurable functions with values in $[0, \infty]$; simple functions and the standard approximating sequence $s_k^f$ are as in the entry on simple functions. Integrals of nonnegative simple functions are as in their entry, and integrals $\int f\,d\mu$, $\int_A f\,d\mu$ of measurable $[0, \infty]$-valued functions and $S(f)$ are as in the entry on integrals of nonnegative measurable functions. $[0, \infty]$ with its order, multiplication, suprema, nondecreasing sequences and their limits $\lim$ is as in its own entry. Below, $(X, \mathcal{M}, \mu)$ is a measure space and "measurable" means $\mathcal{M}$-measurable.

1. (Monotone convergence theorem) Let $(f_k)$ be a sequence of $[0, \infty]$-valued functions on $X$, each $f_k$ measurable, with $f_k(x) \le f_{k+1}(x)$ for all $x \in X$ and all natural numbers $k$. If $f$ is a $[0, \infty]$-valued function on $X$ with $f(x) = \lim_{k \to \infty} f_k(x)$ for all $x \in X$, then the following hold.
   - (i) $f$ is measurable.
   - (ii) The sequence in $[0, \infty]$ whose $k$-th term is $\int f_k\,d\mu$ is nondecreasing, and
     $$
     \int f\,d\mu = \lim_{k \to \infty} \int f_k\,d\mu.
     $$
   - (iii) For every $A \in \mathcal{M}$, the sequence whose $k$-th term is $\int_A f_k\,d\mu$ is nondecreasing and $\int_A f\,d\mu = \lim_{k \to \infty} \int_A f_k\,d\mu$.
2. (Computing integrals with nondecreasing sequences of simple functions)
   - (i) If $f$ is a measurable $[0, \infty]$-valued function on $X$, then $\int f\,d\mu = \lim_{k \to \infty} \int s_k^f\,d\mu$.
   - (ii) Let $(u_k)$ be a sequence of real-valued functions on $X$ such that each $u_k$ is a nonnegative simple function and $u_k(x) \le u_{k+1}(x)$ for all $x \in X$ and natural numbers $k$. If $f$ is a $[0, \infty]$-valued function on $X$ with $f(x) = \lim_{k \to \infty} u_k(x)$ for all $x$, then $f$ is measurable and $\int f\,d\mu = \lim_{k \to \infty} \int u_k\,d\mu$. Hence, however such a sequence is chosen, the limit of the integrals is the single value $\int f\,d\mu$.
:::

## 직관

적분은 그래프 아래를 단순함수의 기둥으로 채워 잰 부피였습니다. 함수열 $(f_k)$가 점마다 늘어나면 그래프 아래의 영역(그래프 자체는 빼고)도 늘어나고, 그 영역들이 모여 극한 $f$의 그래프 아래가 됩니다. 단조 수렴 정리는 이때 부피들도 극한의 부피에 다가간다는 것입니다. 물이 차오르는 그릇의 수위가 늘 차오르기만 하면 마지막에 담긴 물의 양이 그동안 잰 양들의 극한이라는 것과 같고, 실제로 지시함수의 증가열에 쓰면 [[properties-of-measures|측도의 연속성]]의 (1)과 같은 등식이 됩니다(아래 예시). 해석학 입문의 [[monotone-convergence-theorem|단조수렴정리]]는 실수열에 관한 다른 정리입니다.

부등식 $\lim_k \int f_k\,d\mu \le \int f\,d\mu$는 단조성으로 바로 나옵니다. 어려운 쪽은 반대 방향입니다. $f$ 아래의 단순함수 $s$를 하나 잡으면, $s$를 조금 줄인 $ts$($0 < t < 1$)는 점마다 결국 $f_k$ 아래로 들어갑니다. $s(x) > 0$이면 $ts(x)$가 $s(x) \le f(x)$보다 작으므로 $f_k(x)$가 언젠가 그 위로 올라오기 때문입니다. $f(x) = \infty$인 점에서도 $ts(x)$는 실수이므로 이 논법이 통합니다. $f(x)$를 줄인 $tf(x)$와 비교하면 $f(x) = \infty$에서 $tf(x) = \infty$가 되어 모든 $f_k(x)$가 실수이면 통하지 않습니다. 그래서 "$ts$가 $f_k$ 아래에 있는 점들"의 집합이 늘어나 $X$ 전체가 되고, $s$가 정하는 측도의 연속성으로 $t\int s\,d\mu \le \lim_k \int f_k\,d\mu$를 얻은 뒤 $t$를 $1$ 가까이 보냅니다.

단조증가라는 가정은 빼면 안 됩니다. 감소하는 열에서는 극한의 적분이 적분들의 하한보다 작을 수 있습니다(아래 반례). (2)는 이 정리를 단순함수의 증가열에 쓴 것으로, 정의의 상한을 직접 다루지 않고 하나의 증가열만으로 적분을 구할 수 있게 합니다.

## 증명

:::idea
$\lim_k \int f_k\,d\mu \le \int f\,d\mu$는 단조성이다. 반대로는 $s \in S(f)$와 $0 < t < 1$에서 $E_k = \{x : ts(x) \le f_k(x)\}$가 늘어나 $X$가 된다는 것을 $f(x)$가 아니라 $s(x)$와 비교해 보이고, $s$가 정하는 측도의 아래로부터의 연속성을 쓴다.
:::

:::hint
$s(x) > 0$이면 $ts(x) < s(x) \le \sup_k f_k(x)$이다. 상한보다 작은 수에는 그보다 큰 원소가 있다.
:::

:::hint
$\int_{E_k} ts\,d\mu \le \int f_k\,d\mu$이고, 왼쪽은 $t\,\nu_s(E_k)$이다. 여기서 $\nu_s$는 $s$의 가측집합 위의 적분이 정하는 측도이다.
:::

:::proof
$[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, $[0, \infty]$ 값 함수의 성질은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수 항목]]의 번호로 인용한다. 0 이상인 단순함수의 적분의 성질은 [[integral-of-nonnegative-simple-function|단순함수의 적분 항목]]의 번호로, 가측함수의 적분의 성질은 [[integral-of-nonnegative-measurable-function|가측함수의 적분 항목]]의 번호로 인용하고, 가측함수의 적분의 (1)에 의해 0 이상인 단순함수의 적분은 두 정의 가운데 어느 것으로 읽어도 된다. 실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다룬다.

**(1)** (i) 단조증가인 원소열의 극한의 정의에 의해 $f(x) = \sup\{f_k(x) : k \in \mathbb{N}\}$이므로 $f = \sup_k f_k$이고, $[0, \infty]$ 값 함수 항목의 (5)에 의해 가측이다.

(ii) $f_k(x) \le f_{k+1}(x)$이므로 가측함수의 적분의 (2)에 의해 $\int f_k\,d\mu \le \int f_{k+1}\,d\mu$이고, $k$번째 항이 $\int f_k\,d\mu$인 원소열은 [[recursion-theorem|재귀 정리]]의 (1)에 의해 정해지는 단조증가인 원소열이다. 그 극한을 $L$이라 하자. $L = \sup\{\int f_k\,d\mu : k \in \mathbb{N}\}$이다.

(가) $L \le \int f\,d\mu$. $[0, \infty]$의 (7)의 (i)에 의해 모든 $x$에서 $f_k(x) \le f(x)$이므로 가측함수의 적분의 (2)에 의해 $\int f_k\,d\mu \le \int f\,d\mu$이다. $\int f\,d\mu$는 상계이므로 상한 $L$은 그 이하이다.

(나) $\int f\,d\mu \le L$. 가측함수의 적분의 정의에 의해, 모든 $s \in S(f)$에서 $\int s\,d\mu \le L$임을 보이면 $L$이 상한을 잡는 집합의 상계가 되어 $\int f\,d\mu \le L$이다. $s \in S(f)$를 하나 잡고 $a = \int s\,d\mu$로 두자.

먼저 $0 < t < 1$인 실수 $t$마다 $ta \le L$임을 보인다. 단순함수의 적분의 (3)의 (i)에 의해 $ts$는 0 이상인 단순함수이고 $[0, \infty]$ 값 함수 항목의 (3)의 (i)에 의해 가측인 $[0, \infty]$ 값 함수이다. 자연수 $k$마다
$$
E_k = \{x \in X : t\,s(x) \le f_k(x)\}
$$
로 두면 $[0, \infty]$ 값 함수 항목의 (6)에 의해 $E_k \in \mathcal{M}$이고, $k$번째 항이 $E_k$인 집합열은 재귀 정리의 (1)에 의해 정해진다. $x \in E_k$이면 $ts(x) \le f_k(x) \le f_{k+1}(x)$이므로 $x \in E_{k+1}$이다. 곧 $(E_k)$는 증가한다. 또 $\bigcup_{k=1}^{\infty} E_k = X$이다. $x \in X$라 하자. $s(x) = 0$이면 $ts(x) = 0 \le f_1(x)$이므로 $x \in E_1$이다. $s(x) > 0$이면 실수의 계산에 의해 $ts(x) < s(x)$이고, $s \in S(f)$이므로 $s(x) \le f(x) = \sup\{f_k(x) : k \in \mathbb{N}\}$이다. $[0, \infty]$의 (2)의 (iii)에 의해 $ts(x) < \sup\{f_k(x) : k \in \mathbb{N}\}$이고, (5)의 (v)에 의해 $ts(x) < f_k(x)$인 자연수 $k$가 있어 $x \in E_k$이다. [[sequence-of-sets|집합열]]의 (1)에 의해 $x \in \bigcup_{k=1}^{\infty} E_k$이다.

단순함수의 적분의 (7)의 측도 $\nu_s$, 곧 $\nu_s(A) = \int_A s\,d\mu$를 쓰자. 자연수 $k$에서 모든 $x$에 대해 $ts(x)\chi_{E_k}(x) \le f_k(x)$이다: $x \in E_k$이면 왼쪽이 $ts(x)$이고, $x \notin E_k$이면 왼쪽이 $0$이다. 그래서 가측함수의 적분의 (2)와 단순함수의 적분의 (3)의 (i)에 의해
$$
\begin{aligned}
t\,\nu_s(E_k) &= t \int s\chi_{E_k}\,d\mu \\
&= \int t\,s\chi_{E_k}\,d\mu \\
&\le \int f_k\,d\mu \le L
\end{aligned}
$$
이다. 마지막 부등식은 $[0, \infty]$의 (7)의 (i)이다. [[properties-of-measures|측도의 연속성]]의 (1)의 (i)에 의해 $(\nu_s(E_k))$는 단조증가이고 $\lim_k \nu_s(E_k) = \nu_s(X)$이며, 단순함수의 적분의 (7)에 의해 $\nu_s(X) = a$이다. $[0, \infty]$의 (7)의 (iv)에 의해
$$
t\,a = t \lim_{k \to \infty} \nu_s(E_k) = \lim_{k \to \infty} t\,\nu_s(E_k)
$$
이고, 같은 곳의 비교를 모든 항이 $L$인 원소열과 함께 쓰면 $ta \le L$이다.

이제 $a \le L$이다. $L = \infty$이면 $[0, \infty]$의 (2)의 (iv)에 의해 그렇다. $L$이 실수라 하자. $t = \tfrac{1}{2}$에서 $\tfrac{1}{2}a \le L < \infty$이므로 $\tfrac{1}{2}a$는 실수이고, $a = \infty$였다면 $[0, \infty]$의 (4)의 (i)에 의해 $\tfrac{1}{2}a = \infty$이므로 $a$도 실수이다. $L < a$라고 하자. 그러면 $0 \le L < a$이므로 $a > 0$이고, $t = \dfrac{L + a}{2a}$는 실수의 계산에 의해 $0 < t < 1$이며 $ta = \dfrac{L + a}{2} > L$이다. 이것은 $ta \le L$에 어긋나므로 $[0, \infty]$의 (2)의 (iii)에 의해 $a \le L$이다.

(가)와 (나)와 $[0, \infty]$의 (2)의 (ii)에 의해 $\int f\,d\mu = L$이다.

(iii) $A \in \mathcal{M}$이라 하자. $[0, \infty]$ 값 함수 항목의 (4)의 (iii)에 의해 $f_k\chi_A$는 가측이다. $\chi_A(x)$는 $0$이거나 $1$이므로 $[0, \infty]$의 (4)의 (iii)에 의해 $f_k(x)\chi_A(x) \le f_{k+1}(x)\chi_A(x)$이고, (7)의 (iv)와 (4)의 (i)에 의해 $\lim_k f_k(x)\chi_A(x) = \chi_A(x) \lim_k f_k(x) = f(x)\chi_A(x)$이다. $f_k\chi_A$와 $f\chi_A$에 (ii)를 쓰면 가측집합 위의 적분의 정의에 의해 (iii)이 된다.

**(2)** (i) [[simple-function-approximation|단순함수 항목]]의 (6)에 의해 각 $s_k^f$는 0 이상인 단순함수이고, 모든 $x$에서 $s_k^f(x) \le s_{k+1}^f(x)$이며 $\lim_k s_k^f(x) = f(x)$이다. $(k, x)$마다 값 $s_k^f(x)$가 식으로 정해지므로 이것은 실숫값 함수열이고, 값이 $0$ 이상이므로 $[0, \infty]$ 값 함수열이기도 하며, $[0, \infty]$ 값 함수 항목의 (3)의 (i)에 의해 각 항이 가측이다. (1)의 (ii)를 쓴다.

(ii) 같은 까닭으로 $(u_k)$는 가측인 $[0, \infty]$ 값 함수열이고 (1)의 가정을 만족한다. (1)의 (i)(ii)를 쓴다.
:::

## 예시와 반례

:::example[증가하는 집합열의 지시함수]
$(A_k)$가 $\mathcal{M}$의 원소로 된 증가하는 집합열이고 $A = \bigcup_{k=1}^{\infty} A_k$라 합시다. $f_k = \chi_{A_k}$는 [[measurable-function|가측함수]]의 (6)에 의해 가측이고, $A_k \subseteq A_{k+1}$이므로 [[indicator-function|지시함수]]의 (2)에 의해 $\chi_{A_k}(x) \le \chi_{A_{k+1}}(x)$입니다. $x \in A$이면 [[sequence-of-sets|집합열]]의 (1)에 의해 어떤 $m$에서 $x \in A_m$이고, 같은 항목의 (6)에 의해 $k \ge m$이면 $x \in A_k$, 곧 $\chi_{A_k}(x) = 1$이므로 상한이 $1$이고, $x \notin A$이면 모든 항이 $0$이므로 상한이 $0$입니다. 곧 $\lim_k \chi_{A_k}(x) = \chi_A(x)$입니다. (1)과 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해
$$
\begin{aligned}
\mu(A) &= \int \chi_A\,d\mu = \lim_{k \to \infty} \int \chi_{A_k}\,d\mu \\
&= \lim_{k \to \infty} \mu(A_k)
\end{aligned}
$$
입니다. 이것은 [[properties-of-measures|측도의 연속성]]의 (1)의 (i)과 같은 등식입니다. 위의 증명이 그 연속성을 쓰므로 새로운 증명은 아니지만, 단조 수렴 정리가 측도의 연속성을 함수로 넓힌 것임을 보여 줍니다.
:::

:::counterexample[감소하는 함수열에서 극한과 적분을 바꿀 수 없는 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$([[sigma-algebra|σ-대수]]의 (5)) 위의 셈측도 $\mu^{\sharp}$([[measure-examples|측도의 예]]의 (4))에서 $T_k = \{n \in \mathbb{N} : n \ge k\}$, $f_k = \chi_{T_k}$로 둡시다. $T_{k+1} \subseteq T_k$이므로 [[indicator-function|지시함수]]의 (2)에 의해 $f_{k+1}(n) \le f_k(n)$으로 감소합니다. 자연수 $n$을 고정하면 $k > n$에서 $n \notin T_k$이므로 $f_k(n) = 0$이어서, 점마다 함수값은 결국 $0$이 됩니다.

반면 자연수 $j$는 $j \ge 1$([[prime-number]]의 (Z1))이므로 $j + k - 1 \ge k$이고, $j$에서의 값이 $j + k - 1$인 함수 $\mathbb{N} \to T_k$는 단사이며, $n \in T_k$이면 $n - k + 1$이 자연수이므로([[well-ordering-principle]]의 (Z7)) 전사입니다. 그래서 $T_k$는 [[countably-infinite-set|가산 무한]]이고 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 무한집합이므로 [[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (5)에 의해 $\int f_k\,d\mu^{\sharp} = \mu^{\sharp}(T_k) = \infty$입니다. 점마다의 극한인 값이 $0$인 상수함수의 적분은 같은 항목의 (5)에 의해 $0 \cdot \mu^{\sharp}(\mathbb{N}) = 0$인데 적분들은 모두 $\infty$이므로, 단조증가를 단조감소로 바꾸면 (1)의 등식에 해당하는 것이 성립하지 않을 수 있습니다.
:::

## 역사와 맥락

Sandoval-Romero, Reyna-Castañeda, Cedeño-Pérez 는 0 이상인 가측함수열이 점마다 수렴해도 극한의 적분이 적분들의 극한과 같을 필요는 없다고 적은 뒤, 이 교환이 성립하는 가정을 처음 세운 사람이 이탈리아 수학자 베포 레비(Beppo Levi, 1875–1961)라고 적습니다. 그들은 레비가 뒤에 아르헨티나 시민이 되었다고도 적습니다.

## 확인 질문

:::check[(1)에서 모든 $k$에 대해 $\int f_k\,d\mu \le 1$이면 $\int f\,d\mu \le 1$인가?]
그렇습니다. $1$이 원소열 $(\int f_k\,d\mu)$의 상계이므로 그 상한, 곧 극한은 $1$ 이하이고, (1)의 (ii)에 의해 그 극한이 $\int f\,d\mu$입니다.
:::

:::check[$\mu = \delta_p$이면 (1)의 (ii)는 무엇을 말하는가?]
[[integral-of-nonnegative-measurable-function|가측함수의 적분]]의 (6)에 의해 $\int f_k\,d\delta_p = f_k(p)$이고 $\int f\,d\delta_p = f(p)$이므로, (1)의 (ii)는 $f(p) = \lim_k f_k(p)$라는 것입니다. 이것은 가정 그 자체이므로, 디랙 측도에서는 정리가 한 점에서의 극한으로 줄어듭니다.
:::
