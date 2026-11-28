---
title: 보렐–칸텔리 보조정리
title_en: Borel–Cantelli Lemma
aliases: [보렐-칸텔리 보조정리, 보렐 칸텔리, 첫째 보렐–칸텔리 보조정리, Borel-Cantelli lemma, first Borel–Cantelli lemma]
kind: theorem
field: measure-theory
msc: ["28A10"]
level: undergrad
summary: "가측집합열의 측도의 합이 실수이면 끝없이 많은 항에 속하는 점 전체, 곧 집합열의 상극한의 측도는 0 이고, 그래서 거의 모든 점은 유한 개의 항에만 속한다. 하극한의 측도도 0 이다. 역은 성립하지 않으며, 그 예를 가중 셈측도로 든다."
requires: [power-of-a-real-number, geometric-series, limit-of-sequence, limit-of-sum-and-product, harmonic-series-diverges, sequence-of-sets, sigma-algebra, extended-nonnegative-reals, series-in-extended-nonnegative-reals, measure, measure-examples, measure-zero-and-almost-everywhere]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Definitions and examples, Theorem 4.22 (p.103–104), Example 4.23 (p.104)
    checked: original
    note: "(1)의 (i)은 출처 Theorem 4.22(p.103)이고, (2)는 출처가 증명 뒤(p.104)에 적는 하극한에 관한 문장이다. 출처는 이것을 'easy direction'의 보렐–칸텔리 보조정리라 부른다(p.102). 출처의 증명은 B_k = ⋃_{j≥k} A_j 의 감소열에 가산 준가법성을 쓰고, 급수의 코시 판정으로 꼬리의 합이 0 으로 가며, µ(B_1) < +∞ 이므로 Theorem 4.14 (b)(위로부터의 연속)로 마무리한다. 이 항목은 위로부터의 연속을 쓰지 않고, 상극한이 모든 B_k 에 포함된다는 것과 측도의 단조성으로 µ(lim sup A_n) ≤ (꼬리의 합) 을 얻은 뒤 꼬리의 합이 0 으로 간다는 것을 1단원의 합의 꼬리와 극한의 사칙연산으로 보였다. (1)의 (ii)의 '거의 어디서나' 꼴은 출처의 진술을 집합열의 (8)과 measure-zero-and-almost-everywhere 의 (2)로 옮긴 것이다. (3)의 역의 반례는 출처 Example 4.23(p.104)이 르베그 측도 위의 구간 (0, a_k) 로 드는 것과 같은 쓰임이고, 이 항목은 ℕ 위의 가중 셈측도로 들었다. 그 가중치 1/n 은 출처 Example 7.11(p.205)이 셈측도 위에서 f(k) = 1/k 를 드는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(감소열 반례와 보렐–칸텔리 역의 예를 다시 계산, 디랙 측도의 역방향 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간과 측도의 성질은 [[measure|측도와 측도공간]]의 것이고, 가중 셈측도는 [[measure-examples|측도의 예]]의 것이며, 측도가 0 인 집합과 μ-거의 어디서나는 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. 집합열의 상극한과 하극한은 [[sequence-of-sets|집합열]]의 것이고, $[0, \infty]$의 원소열의 합 $\sum_{n=1}^{\infty}$는 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고 $(A_n)$은 $\mathcal{M}$의 원소로 된 집합열이다.

1. (보렐–칸텔리) $\sum_{n=1}^{\infty} \mu(A_n) < \infty$라 하자.
   - (i) $\mu\bigl(\limsup_{n \to \infty} A_n\bigr) = 0$이다.
   - (ii) "$x$가 속하는 $A_n$의 번호 $n$은 끝없이 많지 않다", 곧 "어떤 자연수 $M$이 있어 $M \le n$인 모든 자연수 $n$에서 $x \notin A_n$"이 $\mu$-거의 어디서나 성립한다.
2. (하극한) $\sum_{n=1}^{\infty} \mu(A_n) < \infty$이면 $\mu\bigl(\liminf_{n \to \infty} A_n\bigr) = 0$이다.
3. (역은 성립하지 않는다) $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu$가 $x_n = 1/n$인 가중 셈측도이며 $A_n = \{n\}$이면, $\mu\bigl(\limsup_{n \to \infty} A_n\bigr) = 0$이지만 $\sum_{n=1}^{\infty} \mu(A_n) = \infty$이다.
:::

:::english
Measure spaces and the properties of measures are as in the entry on measures, weighted counting measures are as in the entry on examples of measures, and sets of measure zero and μ-almost everywhere are as in the entry on sets of measure zero and μ-almost everywhere. The limit superior and limit inferior of a sequence of sets are as in the entry on sequences of sets, and sums $\sum_{n=1}^{\infty}$ of sequences in $[0, \infty]$ are as in the entry on sums in $[0, \infty]$. Below, $(X, \mathcal{M}, \mu)$ is a measure space and $(A_n)$ is a sequence of elements of $\mathcal{M}$.

1. (Borel–Cantelli) Suppose $\sum_{n=1}^{\infty} \mu(A_n) < \infty$.
   - (i) $\mu\bigl(\limsup_{n \to \infty} A_n\bigr) = 0$.
   - (ii) "the indices $n$ of the sets $A_n$ containing $x$ are not infinitely many", that is, "there is a natural number $M$ such that $x \notin A_n$ for every natural number $n$ with $M \le n$", holds $\mu$-almost everywhere.
2. (Limit inferior) If $\sum_{n=1}^{\infty} \mu(A_n) < \infty$, then $\mu\bigl(\liminf_{n \to \infty} A_n\bigr) = 0$.
3. (The converse fails) If $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, $\mu$ is the weighted counting measure with $x_n = 1/n$, and $A_n = \{n\}$, then $\mu\bigl(\limsup_{n \to \infty} A_n\bigr) = 0$ but $\sum_{n=1}^{\infty} \mu(A_n) = \infty$.
:::

## 직관

$A_n$을 $n$번째 날에 일어나는 사건이라 생각해 봅시다. 사건들의 크기의 합이 유한하면, 사건이 끝없이 되풀이해 일어나는 점들은 크기가 없습니다. 상극한은 바로 "끝없이 많은 $A_n$에 속하는 점" 전체입니다([[sequence-of-sets|집합열]]의 (8)). 그 점들은 모든 $K$에서 $K$번째 이후의 $A_n$들의 합집합에 들어 있으므로, 그 측도는 $K$번째 이후 측도들의 합보다 클 수 없고, 합이 유한하면 그 꼬리의 합은 $0$으로 갑니다.

합이 $\infty$라고 해서 상극한의 측도가 $0$이 아닌 것은 아닙니다((3)). 크기가 작아지는 서로 다른 점들이 한 번씩만 나오면, 크기의 합은 끝이 없어도 끝없이 되풀이되는 점은 없을 수 있습니다.

## 증명

:::idea
$B_K = \bigcup_{n=K}^{\infty} A_n$이라 하면 상극한은 모든 $B_K$에 포함되고 $\mu(B_K)$는 꼬리의 합 이하이다. 합이 실수이면 꼬리의 합은 $0$으로 간다.
:::

:::hint
[[measure|측도]]의 (4)의 (iii)으로 $\mu(B_K) \le \sum_{n=K}^{\infty} \mu(A_n)$을 얻는다. 꼬리의 합은 전체 합에서 처음 $K - 1$개의 합을 뺀 실수이다.
:::

:::proof
측도의 성질은 [[measure|측도와 측도공간]]의 번호로, 집합열의 성질은 [[sequence-of-sets|집합열]]의 번호로, σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로 인용한다.

**(1)** (i) $L = \limsup_{n \to \infty} A_n$, $S = \sum_{n=1}^{\infty} \mu(A_n)$이라 하자. σ-대수의 (3)에 의해 $L \in \mathcal{M}$이다. 합 항목의 (2)에 의해 $S < \infty$이면 모든 $\mu(A_n)$은 실수이고, $S$는 실수이다.

자연수 $K$에서 $B_K = \bigcup_{n=K}^{\infty} A_n$이라 하자. 상극한의 정의와 집합열의 (2)에 의해 $L \subseteq B_K$이고, σ-대수의 (2)에 의해 $B_K \in \mathcal{M}$이므로, 측도의 (2)와 (4)의 (iii)에 의해
$$
\mu(L) \le \mu(B_K) \le \sum_{n=K}^{\infty} \mu(A_n)
$$
이다. 합 항목의 (4)를 $K - 1$에 쓰면 $S = \sum_{n=1}^{K-1} \mu(A_n) + \sum_{n=K}^{\infty} \mu(A_n)$이다. $S$가 실수이므로 $[0, \infty]$의 (3)의 (iii)에 의해 두 합은 실수이고, 실수의 등식으로 $t_K = \sum_{n=K}^{\infty} \mu(A_n) = S - s_{K-1}$이다. 여기서 $s_N = \sum_{n=1}^{N} \mu(A_n)$이다.

$N$번째 항이 $s_N$인 실수열은 합 항목의 (2)에 의해 단조증가이고 $S$ 이하이므로, $[0, \infty]$의 (7)의 (iii)에 의해 합의 정의의 극한 $S$로 [[limit-of-sequence|수열의 극한]]의 뜻으로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $N$번째 항이 $S - s_N$인 수열은 $0$으로 수렴하고, $t_{N+1} = S - s_N$이다.

$\mu(L) \le \mu(B_1) \le S$이므로 $\mu(L)$은 실수이다. $\mu(L) > 0$이라 하자. 수렴의 정의에 $\varepsilon = \mu(L)$을 넣으면 $|S - s_N| < \mu(L)$인 자연수 $N$이 있고, $t_{N+1} = S - s_N < \mu(L)$이 되어 $\mu(L) \le t_{N+1}$과 어긋난다. 따라서 $\mu(L) = 0$이다.

(ii) 집합열의 (8)에 의해 $x$가 $L$의 원소인 것은 정확히 모든 자연수 $M$에 대하여 $M \le n$이고 $x \in A_n$인 자연수 $n$이 있을 때이다. 이것은 (ii)의 문장의 부정이므로, 그 문장의 예외 집합은 $L$이다. $L \in \mathcal{M}$이고 (i)에 의해 $\mu(L) = 0$이므로 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (2)의 (i)에 의해 그 문장은 $\mu$-거의 어디서나 성립한다.

**(2)** 집합열의 (8)에 의해 $\liminf_{n \to \infty} A_n \subseteq L$이고, σ-대수의 (3)에 의해 하극한은 $\mathcal{M}$의 원소이므로 측도의 (2)와 (1)의 (i)에 의해 그 측도는 $0$ 이하, 곧 $0$이다.

**(3)** [[measure-examples|측도의 예]]의 (3)에 의해 $\mu$는 측도이고 $\mu(A_n) = \mu(\{n\}) = 1/n$이다. 이 항들은 실수이고 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산하므로, 합 항목의 (3)의 (ii)에 의해 $\sum_{n=1}^{\infty} \mu(A_n) = \infty$이다. 한편 자연수 $x$가 $L$에 속한다면 집합열의 (8)을 $M = x + 1$에 쓰면 $x + 1 \le n$이고 $x \in \{n\}$인 $n$이 있어야 하는데, $x \in \{n\}$이면 $n = x$이므로 $x + 1 \le x$가 되어 어긋난다. 따라서 $L = \emptyset$이고 (M1)에 의해 $\mu(L) = 0$이다.
:::

## 예시와 반례

:::example[등비 가중치와 겹치는 꼬리 집합]
$X = \mathbb{N}$ 위에서 $x_n = (1/2)^n$인 [[measure-examples|가중 셈측도]] $\mu$를 생각하고, $A_n = \{n, n + 1\}$로 둡시다. 측도의 예의 (3)과 [[measure|측도]]의 (1)의 (iii)에 의해 $\mu(A_n) = (1/2)^n + (1/2)^{n+1} = \frac{3}{2}(1/2)^n$이고, 이 수열의 급수는 첫째 항이 $3/4$이고 공비가 $1/2$인 [[geometric-series|등비급수]]이므로 그 (2)에 의해 합이 $\frac{3/4}{1/2} = \frac{3}{2}$이고, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)에 의해 $\sum_{n=1}^{\infty} \mu(A_n) = \frac{3}{2}$은 실수입니다. (1)에 의해 끝없이 많은 $A_n$에 속하는 점들의 집합의 측도는 $0$입니다. 실제로 자연수 $x$가 $A_n$에 속하는 것은 $n = x - 1$이거나 $n = x$일 때뿐이므로, [[sequence-of-sets|집합열]]의 (8)을 $M = x + 1$에 쓰면 $x$는 상극한에 속하지 않고, 상극한은 공집합입니다.
:::

## 확인 질문

:::check[$X = \mathbb{N}$ 위의 셈측도에서 모든 $n$에서 $A_n = \{1\}$이면 (1)의 가정과 결론은 각각 성립하는가?]
둘 다 성립하지 않습니다. $\mu^{\sharp}(A_n) = 1$이므로 합은 $\infty$이고, $1$은 모든 $A_n$에 속하므로 상극한은 $\{1\}$이고 그 측도는 $1$입니다. 가정이 깨지면 결론이 깨질 수 있는 예입니다.
:::

:::check[측도공간에서 $\sum_{n=1}^{\infty} \mu(A_n) < \infty$이면 $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr)$도 0인가?]
그렇다고 할 수 없습니다. [[measure|측도]]의 (4)의 (i)에 의해 그 값은 합 이하일 뿐입니다. 예컨대 $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 디랙 측도 $\delta_1$과 $A_1 = \{1\}$, $n \ge 2$에서 $A_n = \emptyset$이면 합은 $1$이고 합집합의 측도도 $1$입니다. 측도가 0 이 되는 것은 끝없이 많은 항에 속하는 점들의 집합입니다.
:::
