---
title: 측도의 연속성
title_en: Continuity of Measures
aliases: [아래로부터의 연속, 위로부터의 연속, 측도의 단조 연속성, continuity from below, continuity from above, continuity of measure]
kind: theorem
field: measure-theory
msc: ["28A10"]
level: undergrad
summary: "증가하는 가측집합열의 합집합의 측도는 측도들의 단조증가열의 극한이고, 감소하는 가측집합열의 교집합의 측도는 측도들의 하한 이하이며 어떤 항의 측도가 실수이면 하한과 같고 그 항부터의 실수열의 극한이다. 등호가 깨지는 예를 함께 든다."
requires: [prime-number, well-ordering-principle, mathematical-induction, finite-set, power-of-a-real-number, countably-infinite-set, natural-numbers-are-infinite, sequence, limit-of-sequence, limit-is-unique, monotone-convergence-theorem, limit-of-sum-and-product, geometric-series, sequence-of-sets, sigma-algebra, extended-nonnegative-reals, series-in-extended-nonnegative-reals, measure, measure-examples]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Definitions and examples, Theorem 4.14 (p.97–98), Example 4.17 과 Example 4.18 (p.100–101)
    checked: original
    note: "(1)과 (2)는 출처 Theorem 4.14 (a)(b)(p.97–98)이다. 출처의 (a)의 증명은 어떤 µ(A_k) 가 +∞ 인 경우를 따로 떼고, 모든 µ(A_k) 가 실수일 때 µ(A_k ∖ A_{k−1}) = µ(A_k) − µ(A_{k−1}) 의 망원 합으로 계산한다. 이 항목은 뺄셈을 쓰지 않고, 서로소로 바꾼 열의 유한 가법성으로 µ(A_N) 이 부분합이라는 것을 보여 경우를 나누지 않았다. 출처의 (b)는 µ(⋂B_k) ≤ lim µ(B_k) 로 적고 어떤 k 에서 µ(B_k) < +∞ 이면 등호라 적는다. [0, ∞] 의 감소열의 극한을 이 강의에서 정의하지 않았으므로, 이 항목은 하한 inf 로 진술하고, µ(B_m) < ∞ 인 m 에서부터의 실수열이 해석학 입문의 뜻으로 수렴한다는 것을 따로 진술했다. 출처의 증명은 그런 번호 가운데 첫째(the first natural number)를 잡는데, 이 항목의 (2)의 (ii)는 µ(B_m) < ∞ 인 아무 m 에서 성립하므로 번호를 하나로 정할 필요가 없다. 출처의 증명은 A_k = B_{k0} ∖ B_{k0+k} 를 쓰고, 이 항목은 j번째 항이 B_m − B_{j+m−1} 인 열(첫 항이 공집합)을 썼다. 출처 Corollary 4.15–4.16 은 싣지 않았다. 예시 '등비 가중치와 처음 k개의 자연수'의 감소열 B_k = ℕ − {1, …, k} 는 출처 Example 4.17–4.18(p.100–101)의 꼬리 집합 {k, k+1, …} 과 같은 꼴(번호가 하나 밀린 것)이고, Example 4.18 처럼 등호가 성립하는 경우를 보인다. 반례 '2^k의 배수 전체로 된 감소열'은 출처 Example 4.17(p.100, 셈측도의 꼬리 집합 {k, k+1, …} 의 감소열)과 같은 발상(셈측도와 공집합으로 줄어드는 무한집합의 열)이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(감소열 반례와 보렐–칸텔리 역의 예를 다시 계산, 디랙 측도의 역방향 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도의 성질은 [[measure|측도와 측도공간]]의 것이다. 집합열, 증가한다, 감소한다, $\bigcup_{n=1}^{\infty}$와 $\bigcap_{n=1}^{\infty}$는 [[sequence-of-sets|집합열]]의 것이다. $[0, \infty]$와 그 순서, 하한 $\inf$, 단조증가열의 극한 $\lim$은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 실수열의 수렴은 [[limit-of-sequence|수열의 극한]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이다.

1. (아래로부터의 연속) $(A_n)$이 $\mathcal{M}$의 원소로 된 증가하는 집합열이라 하자.
   - (i) $n$번째 항이 $\mu(A_n)$인 $[0, \infty]$의 원소열은 단조증가이고
     $$
     \mu\Bigl( \bigcup_{n=1}^{\infty} A_n \Bigr) = \lim_{n \to \infty} \mu(A_n)
     $$
     이다.
   - (ii) 모든 $\mu(A_n)$이 실수이고 실수열 $(\mu(A_n))$이 위로 유계이면 이 실수열은 $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr)$로 수렴한다. 위로 유계가 아니면 $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \infty$이다.
2. (위로부터의 연속) $(B_n)$이 $\mathcal{M}$의 원소로 된 감소하는 집합열이고 $B = \bigcap_{n=1}^{\infty} B_n$이라 하자.
   - (i) 모든 자연수 $n$에서 $\mu(B_{n+1}) \le \mu(B_n)$이고
     $$
     \mu(B) \le \inf\{\mu(B_n) : n \in \mathbb{N}\}
     $$
     이다.
   - (ii) 자연수 $m$에서 $\mu(B_m) < \infty$이면, $m$ 이상인 모든 자연수 $k$에서 $\mu(B_k)$는 실수이고, $j$번째 항이 $\mu(B_{j+m-1})$인 실수열은 $\mu(B)$로 수렴하며
     $$
     \mu(B) = \inf\{\mu(B_n) : n \in \mathbb{N}\}
     $$
     이다.
   - (iii) (i)의 부등호는 등호가 아닐 수 있다. $X = \mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$와, $k$번째 항이 $2^k$의 배수인 자연수 전체의 집합 $D_k = \{2^k j : j \in \mathbb{N}\}$인 감소하는 집합열에서 모든 $k$에서 $\mu^{\sharp}(D_k) = \infty$이지만 $\bigcap_{k=1}^{\infty} D_k = \emptyset$이다.
:::

:::english
Measure spaces and the properties of measures are as in the entry on measures. Sequences of sets, increasing and decreasing sequences, $\bigcup_{n=1}^{\infty}$ and $\bigcap_{n=1}^{\infty}$ are as in the entry on sequences of sets. $[0, \infty]$ with its order, infimum $\inf$ and the limit $\lim$ of nondecreasing sequences is as in the entry on extended nonnegative reals. Convergence of real sequences is as in the entry on limits of sequences. Below, $(X, \mathcal{M}, \mu)$ is a measure space.

1. (Continuity from below) Let $(A_n)$ be an increasing sequence of elements of $\mathcal{M}$.
   - (i) The sequence in $[0, \infty]$ whose $n$th term is $\mu(A_n)$ is nondecreasing, and
     $$
     \mu\Bigl( \bigcup_{n=1}^{\infty} A_n \Bigr) = \lim_{n \to \infty} \mu(A_n).
     $$
   - (ii) If every $\mu(A_n)$ is a real number and the real sequence $(\mu(A_n))$ is bounded above, then this real sequence converges to $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr)$. If it is not bounded above, then $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \infty$.
2. (Continuity from above) Let $(B_n)$ be a decreasing sequence of elements of $\mathcal{M}$ and let $B = \bigcap_{n=1}^{\infty} B_n$.
   - (i) $\mu(B_{n+1}) \le \mu(B_n)$ for every natural number $n$, and
     $$
     \mu(B) \le \inf\{\mu(B_n) : n \in \mathbb{N}\}.
     $$
   - (ii) If $\mu(B_m) < \infty$ for a natural number $m$, then $\mu(B_k)$ is a real number for every natural number $k \ge m$, the real sequence whose $j$th term is $\mu(B_{j+m-1})$ converges to $\mu(B)$, and
     $$
     \mu(B) = \inf\{\mu(B_n) : n \in \mathbb{N}\}.
     $$
   - (iii) The inequality in (i) can be strict. For the counting measure $\mu^{\sharp}$ on $X = \mathbb{N}$ and the decreasing sequence whose $k$th term is the set $D_k = \{2^k j : j \in \mathbb{N}\}$ of natural numbers that are multiples of $2^k$, one has $\mu^{\sharp}(D_k) = \infty$ for every $k$, but $\bigcap_{k=1}^{\infty} D_k = \emptyset$.
:::

## 직관

물을 조금씩 부어 차오르는 그릇을 떠올리면, 증가하는 집합열의 측도는 늘어나다가 마지막에 다 찬 양, 곧 합집합의 측도에 이릅니다. (1)은 이 "다다르는 값"이 측도들의 단조증가열의 극한, 곧 상한이라는 것입니다. 증명은 증가하는 열을 서로소인 조각 $A_1$, $A_2 - A_1$, $A_3 - A_2$, …으로 나누어, $\mu(A_N)$이 조각들의 측도의 부분합이라는 것을 쓰고 σ-가법성으로 마무리합니다. 뺄셈을 쓰지 않으므로 측도가 $\infty$인 항이 있어도 같은 증명이 통합니다.

감소하는 열에서는 사정이 다릅니다. 교집합은 모든 $B_n$에 들어 있으므로 그 측도는 모든 $\mu(B_n)$ 이하이지만((2)의 (i)), 측도가 $\infty$인 집합들이 줄어들어 공집합이 될 수 있습니다((2)의 (iii)). 어느 한 항의 측도가 실수이면 그 항부터는 그 항에서 빼낸 부분이 증가하는 열을 이루므로 (1)로 돌아가 등호를 얻습니다.

## 증명

:::idea
(1)은 서로소로 바꾼 열의 유한 가법성으로 $\mu(A_N)$을 부분합으로 쓰는 것이고, (2)의 (ii)는 $B_m$에서 $B_{j+m-1}$을 뺀 증가하는 열에 (1)을 쓰는 것이다.
:::

:::hint
[[sequence-of-sets|집합열]]의 (7)의 $(E_n)$에 대하여 $\bigcup_{n=1}^{N} E_n = A_N$이다. $\mu(A_N) = \sum_{n=1}^{N} \mu(E_n)$이라는 것과 합의 정의를 비교한다.
:::

:::hint
(2)의 (ii)에서 $C_j = B_m - B_{j+m-1}$은 증가하고 그 합집합은 $B_m - B$이다. $\mu(B_m)$이 실수이므로 [[measure|측도]]의 (2)의 (i)의 뺄셈을 쓸 수 있다.
:::

:::proof
측도의 성질은 [[measure|측도와 측도공간]]의 번호로, 집합열의 성질은 [[sequence-of-sets|집합열]]의 번호로, σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로 인용한다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

**(1)** (i) 집합열의 (6)에 의해 $n \le m$이면 $A_n \subseteq A_m$이고, 측도의 (2)에 의해 $\mu(A_n) \le \mu(A_{n+1})$이므로 $(\mu(A_n))$은 단조증가이다. $(E_n)$을 집합열의 (7)의 집합열, 곧 $n$번째 항이 $A_n - \bigcup_{i=1}^{n-1} A_i$인 집합열이라 하자. σ-대수의 (3)에 의해 $(E_n)$은 $\mathcal{M}$의 원소로 된 서로소인 집합열이고 $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$이다. 자연수 $N$에서 집합열의 (7)의 (iii)과 (6)에 의해 $\bigcup_{n=1}^{N} E_n = \bigcup_{n=1}^{N} A_n = A_N$이므로, 측도의 (1)의 (i)에 의해
$$
\mu(A_N) = \sum_{n=1}^{N} \mu(E_n)
$$
이다. 곧 $N$번째 항이 $\mu(A_N)$인 원소열은 $(\mu(E_n))$의 부분합의 원소열과 같은 함수이다. 합의 정의에 의해 그 극한은 $\sum_{n=1}^{\infty} \mu(E_n)$이고, (M2)에 의해 이것은 $\mu\bigl(\bigcup_{n=1}^{\infty} E_n\bigr) = \mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr)$이다.

(ii) $[0, \infty]$의 (7)의 (iii)을 단조증가인 원소열 $(\mu(A_n))$에 쓰고 (i)의 등식을 쓰면 된다.

**(2)** (i) 감소하므로 $B_{n+1} \subseteq B_n$이고 측도의 (2)에 의해 $\mu(B_{n+1}) \le \mu(B_n)$이다. 집합열의 (2)에 의해 모든 $n$에서 $B \subseteq B_n$이고, σ-대수의 (2)에 의해 $B \in \mathcal{M}$이므로 측도의 (2)에 의해 $\mu(B) \le \mu(B_n)$이다. 곧 $\mu(B)$는 $S = \{\mu(B_n) : n \in \mathbb{N}\}$의 하계이고, 하한의 정의에 의해 $\mu(B) \le \inf S$이다.

(ii) 자연수 $k \ge m$에서 집합열의 (6)에 의해 $B_k \subseteq B_m$이고, 측도의 (2)에 의해 $\mu(B_k) \le \mu(B_m) < \infty$이므로 $[0, \infty]$의 (2)의 (iv)에 의해 $\mu(B_k)$는 실수이다. 같은 까닭으로 $\mu(B) \le \mu(B_m)$이고 $\mu(B)$도 실수이다.

자연수 $j$에서 $j + m - 1$은 (Z7)에 의해 $m$ 이상인 자연수이다. $b_j = \mu(B_{j+m-1})$로 두고, $j$번째 항이 $C_j = B_m - B_{j+m-1}$인 집합열을 생각하자. σ-대수의 (1)에 의해 $C_j \in \mathcal{M}$이고, $B_{j+m} \subseteq B_{j+m-1}$이므로 $C_j \subseteq C_{j+1}$, 곧 $(C_j)$는 증가한다. $\bigcup_{j=1}^{\infty} C_j = B_m - B$이다: 집합열의 (1)에 의해 $x \in \bigcup_{j=1}^{\infty} C_j$이면 $x \in B_m$이고 어떤 $j$에서 $x \notin B_{j+m-1}$이므로 $x \notin B$이다. 거꾸로 $x \in B_m$이고 $x \notin B$이면 집합열의 (1)에 의해 $x \notin B_n$인 자연수 $n$이 있다. $n < m$이면 집합열의 (6)에 의해 $B_m \subseteq B_n$이어서 $x \in B_n$이 되어 어긋나므로, (Z5)에 의해 $m \le n$이고 $j = n - m + 1$은 (Z7)에 의해 자연수이며 $x \notin B_{j+m-1}$, 곧 $x \in C_j$이다.

$B_{j+m-1} \subseteq B_m$이고 $B \subseteq B_m$이며 $\mu(B_m) < \infty$이므로 측도의 (2)의 (i)에 의해
$$
\begin{aligned}
\mu(C_j) &= \mu(B_m) - b_j, \\
\mu(B_m - B) &= \mu(B_m) - \mu(B)
\end{aligned}
$$
이다(실수의 뺄셈). 측도의 (2)에 의해 $\mu(C_j) \le \mu(B_m)$이므로 실수열 $(\mu(C_j))$는 위로 유계이고, (1)의 (ii)에 의해 $\mu(B_m) - \mu(B)$로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $j$번째 항이 $\mu(B_m) - \mu(C_j) = b_j$인 수열은 $\mu(B_m) - \bigl(\mu(B_m) - \mu(B)\bigr) = \mu(B)$로 수렴한다.

끝으로 하한. $T = \{b_j : j \in \mathbb{N}\}$이라 하자. 실수열 $(b_j)$는 (i)에 의해 단조감소이고 $0$ 이상이므로 아래로 유계이며, [[monotone-convergence-theorem|단조수렴정리]]의 (2)에 의해 $\inf T$로 수렴한다. [[limit-is-unique|극한의 유일성]]에 의해 실수 $T$의 하한은 $\mu(B)$이고, $[0, \infty]$의 (5)의 (iii)에 의해 이것은 $[0, \infty]$의 뜻의 $\inf T$이다. $T \subseteq S$이므로 $[0, \infty]$의 (5)의 (vi)에 의해 $\inf S \le \inf T = \mu(B)$이다. (i)과 함께 $[0, \infty]$의 (2)의 (ii)에 의해 $\mu(B) = \inf S$이다.

(iii) 셈측도 $\mu^{\sharp}$는 [[measure-examples|측도의 예]]의 (4)에 의해 $(\mathbb{N}, \mathscr{P}(\mathbb{N}))$ 위의 측도이다. 자연수 $k$에서 $D_{k+1} \subseteq D_k$이다: $n = 2^{k+1} j$이면 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $n = 2^k (2j)$이고 $2j$는 자연수이다. 따라서 $(D_k)$는 감소한다.

$D_k$는 무한집합이다: $j$에서의 값이 $2^k j$인 함수 $\mathbb{N} \to D_k$는 정의에 의해 전사이고, $2^k j = 2^k j'$이면 $2^k \ne 0$(거듭제곱의 (3))이므로 $j = j'$이어서 단사이다. 따라서 $D_k$는 [[countably-infinite-set|가산 무한]]이고 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 무한집합이며, 셈측도의 정의에 의해 $\mu^{\sharp}(D_k) = \infty$이다.

$\bigcap_{k=1}^{\infty} D_k = \emptyset$이다. 먼저 $0$ 이상인 모든 정수 $n$에서 $n < 2^n$임을 $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. 거듭제곱의 (7)에 의해 $2^n$은 정수이다. $0 < 1 = 2^0$이고, $n < 2^n$이면 (Z1)에 의해 $n + 1 \le 2^n < 2^n + 2^n = 2^{n+1}$이다(거듭제곱의 (1)과 (6)의 (i)). 이제 자연수 $n$이 교집합에 속한다면 집합열의 (1)에 의해 $n \in D_n$이므로 $n = 2^n j$인 자연수 $j$가 있고, $j \ge 1$이므로 $n = 2^n j \ge 2^n > n$이 되어 어긋난다. 따라서 $\mu^{\sharp}\bigl(\bigcap_{k=1}^{\infty} D_k\bigr) = \mu^{\sharp}(\emptyset) = 0$이고, $\inf\{\mu^{\sharp}(D_k) : k \in \mathbb{N}\} = \inf\{\infty\} = \infty$이다($\{\infty\}$의 하계는 모든 원소이므로 그 최대인 $\infty$가 하한이다).
:::

## 예시와 반례

:::example[등비 가중치와 처음 k개의 자연수]
$X = \mathbb{N}$ 위에서 $x_n = (1/2)^n$인 [[measure-examples|가중 셈측도]] $\mu_x$를 생각하고, $A_k = \{1, \dots, k\}$로 둡시다. $(A_k)$는 증가하고 합집합은 $\mathbb{N}$입니다. [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (i)에 의해 $\mu_x(A_k) = \sum_{n=1}^{k} (1/2)^n$이고, 이것은 첫째 항과 공비가 $1/2$인 [[geometric-series|등비급수]]의 $k$번째 부분합이므로 그 (1)에 의해 $1 - (1/2)^k$입니다. (1)의 (ii)에 의해 실수열 $1 - (1/2)^k$의 극한 $1$이 $\mu_x(\mathbb{N})$입니다.

반대로 $B_k = \mathbb{N} - A_k$로 두면 $(B_k)$는 감소하고 교집합은 $\emptyset$입니다. $\mu_x(B_1) = 1 - \frac{1}{2}$는 실수이므로 (2)의 (ii)를 $m = 1$로 쓸 수 있고, [[measure|측도]]의 (2)의 (i)에 의해 $\mu_x(B_k) = 1 - \bigl(1 - (1/2)^k\bigr) = (1/2)^k$이 $0 = \mu_x(\emptyset)$으로 수렴합니다.
:::

:::counterexample[$2^k$의 배수 전체로 된 감소열]
(2)의 (iii)의 열 $D_1 = \{2, 4, 6, \dots\}$, $D_2 = \{4, 8, 12, \dots\}$, $D_3 = \{8, 16, 24, \dots\}$, …은 모두 무한집합이어서 셈측도로 잰 값이 늘 $\infty$인데, 어떤 자연수 $n$도 $2^n$의 배수가 아니므로 교집합이 비어 있습니다. 모든 항의 측도가 $\infty$여서 (2)의 (ii)의 조건 "$\mu(B_m) < \infty$인 $m$"이 없고, 등호가 깨집니다. 같은 집합열이라도 측도를 바꾸면 결과가 달라질 수 있습니다. 위 예시의 $\mu_x$로 재면 $\mu_x(D_1)$은 실수이므로 (2)의 (ii)에 의해 $\inf_k \mu_x(D_k) = \mu_x(\emptyset) = 0$입니다.
:::

## 확인 질문

:::check[디랙 측도 $\delta_p$에서는 감소하는 가측집합열에 대해 (2)의 (i)의 등호가 늘 성립하는가?]
그렇습니다. [[measure-examples|측도의 예]]의 (2)에 의해 $\delta_p(B_1)$은 $0$이거나 $1$이어서 실수이므로, (2)의 (ii)를 $m = 1$로 쓸 수 있습니다. 실제로 $p$가 모든 $B_n$에 들면 교집합에도 들어 양쪽이 $1$이고, 어떤 $B_n$에 들지 않으면 양쪽이 $0$입니다.
:::

:::check[셈측도 $\mu^{\sharp}$에서 $A_k = \{1, \dots, k\}$이면 (1)의 등식의 두 쪽은 무엇인가?]
둘 다 $\infty$입니다. [[measure-examples|측도의 예]]의 (4)에 의해 $A_k$는 [[finite-set]]의 (F2)에 의해 원소를 $k$개 가지므로 $\mu^{\sharp}(A_k) = |A_k| = k$이고, 실수열 $(k)$는 위로 유계가 아니므로 (1)의 (ii)에 의해 $\mu^{\sharp}(\mathbb{N}) = \infty$입니다. 이것은 $\mathbb{N}$이 무한집합이라는 것과 맞습니다.
:::
