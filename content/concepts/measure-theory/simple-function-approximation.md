---
title: 단순함수와 단순함수로 근사하기
title_en: Simple Functions and Approximation by Simple Functions
aliases: [단순함수, 단순 함수, 표준 표현, 공통 세분, 단순함수 근사, 표준 근사열, simple function, canonical representation, approximation by simple functions]
kind: theorem
field: measure-theory
msc: ["28A20"]
level: undergrad
summary: 가측이고 값의 집합이 유한집합인 실숫값 함수를 단순함수라 하고, 값을 크기순으로 늘어놓은 표준 표현과 두 단순함수의 공통 세분, 합·곱·상수배·최대·최소가 단순함수라는 것을 증명한 뒤, [0, ∞] 값 가측함수에 식으로 정한 표준 근사열이 단조증가하며 점마다 그 함수로 다가간다는 것과 실숫값 가측함수의 근사를 증명한다.
requires: [set, subset, set-operations, function, recursion-theorem, finite-set, subset-of-finite-set, family-of-sets, sequence-of-sets, indicator-function, extended-nonnegative-reals, sigma-algebra, measurable-function, extended-measurable-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, power-of-a-real-number, bernoulli-inequality, maximum-of-finite-set, increasing-listing-of-finite-set, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, sequence, limit-of-sequence, limit-is-unique, limit-of-sum-and-product, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.1절 Definition and examples, Definition 3.14 와 Proposition 3.15 (p.64–65), Proposition 3.16 (p.65); 3.2절 Approximation by simple functions, Lemma 3.18 (p.66–68), Lemma 3.19 (p.68–69); 3.3절 Theorem 3.32 (p.76–78); 3.5절 Exercise 3.5 (p.82)
    checked: original
    note: "출처 Definition 3.14(p.64)는 값을 유한 개만 갖는 S-가측 함수를 S-simple 이라 한다. 이 항목의 정의와 같다('값의 집합이 유한집합'). 출처 Proposition 3.15(p.64–65)는 단순함수가 서로 다른 값 α_1, …, α_N 과 X 를 덮는 서로소인 A_1, …, A_N ∈ S 로 s = Σ α_j χ_{A_j} 로 쓰인다는 것(canonical representation)과 그 역을 증명한다. 출처의 증명은 α_1, …, α_N 을 s 가 갖는 서로 다른 값 전부라 하고(p.64) 나열하는 순서를 적지 않는다. 이 항목의 (2)는 값의 집합의 크기순 나열로 표준 표현을 하나로 정하고, (3)의 역에서는 값이 서로 달라야 한다는 조건을 빼고 조각이 비어도 되게 했다. 출처 Proposition 3.16(p.65)은 합, 상수배, 곱, 역수가 단순함수라는 것을 Exercise 3.5 로 돌린다. 이 항목의 (5)는 역수를 빼고 차, 절댓값, 최대, 최소를 더해 증명한다. 이 항목의 (1)(유한 개의 실수의 집합이 유한집합)과 (4)(공통 세분)는 (5)의 증명에 쓰려고 진술에 둔 것이다. 출처 Lemma 3.18(p.66–68)은 0 이상인 실숫값 가측함수 f 에 대하여 A_k(j) = {j/2^k ≤ f < (j+1)/2^k} (0 ≤ j ≤ k2^k − 1), A_k(k2^k) = {k ≤ f} 로 두고 s_k = Σ_j (j/2^k) χ_{A_k(j)} 로 정한 열이 (a) 0 ≤ s_k ≤ s_{k+1} ≤ f, (b) 점마다 f 로 수렴, (c) f 가 유계이면 고르게 수렴한다는 것을 증명한다. 증명은 (a)를 f(x) 의 위치로 세 경우로, (b)를 '0 ≤ f(x) − s_k(x) < 1/2^k' 로 한다. 이 항목의 (6)은 같은 열을 '2^k f(x) 이하인 가장 큰 정수'로 쓰고, (a)의 세 경우를 그 정수의 성질 하나로 증명한다. (c)는 싣지 않았다. 출처 Theorem 3.32 의 Case 1(p.77)은 [0, ∞] 값 f 에서 f(x) = +∞ 인 점의 값을 k 로 두어 같은 근사를 얻는다. 이 항목의 (6)은 처음부터 [0, ∞] 값 f 에 대하여 정의해 f(x) = ∞ 이면 s_k(x) = k 가 된다. 출처 Lemma 3.19(p.68–69)는 r_k = s_k − t_k (s_k, t_k 는 f⁺, f⁻ 의 근사)로 |r_k| ≤ |f| 와 점별 수렴을 증명한다. 이 항목의 (7)과 같다. 출처는 Lemma 3.18–3.19 와 Theorem 3.23 에서 'there exist two sequences' 라고 쓰지만 열은 위의 식으로 정해진다. 이 항목은 그 식의 열을 '표준 근사열'이라 부르고 s_k^f 로 쓴다. '단순함수'는 출처의 simple function 을 옮긴 것이다. 반례 '유계가 아닌 함수에서는 근사의 오차가 모든 점에서 함께 작아지지 않을 수 있다'는 출처 Lemma 3.18 (c)(f 가 유계이면 고르게 수렴)가 다루는 고른 수렴을 유계가 아닌 함수에서 본 것이다. 확인 질문 '$X = \\{1, 2, 3, 4\\}$에서 $s = \\chi_{\\{1, 2\\}} + 2\\chi_{\\{2, 3\\}}$의 표준 표현은 무엇인가?'는 출처 Proposition 3.15 의 표준 표현과 같은 대상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(표준 근사열의 단조성과 오차의 f(x) < k 조건, 출처 Proposition 3.15 에 대한 메모를 원문 대조). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간과 (σ1)–(σ3)은 [[sigma-algebra|σ-대수와 가측공간]]의 것이고, 실숫값 함수와 그 연산, $f^+$, $f^-$, $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이며, $[0, \infty]$ 값 함수와 그 가측성은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. $[0, \infty]$와 그 순서, 단조증가열의 극한은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이다. 유한집합과 원소의 개수는 [[finite-set]]의 것이고, 크기순 나열은 [[increasing-listing-of-finite-set|유한집합을 크기순으로 늘어놓기]]의 것이며, 유한 합 $\sum_{j=1}^{N}$은 [[finite-sum-of-reals]]의 것이다. $2^k$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고, $2^{-k}$는 $(2^k)^{-1}$을 뜻한다. 아래에서 $(X, \mathcal{M})$은 가측공간이다.

**단순함수.** $X$ 위의 실숫값 함수 $s$가 **$\mathcal{M}$-단순함수**(simple function)인 것은 정확히 $s$가 $\mathcal{M}$-가측이고 값의 집합 $s(X) = \{s(x) : x \in X\}$가 유한집합일 때이다.

**표준 표현.** $X \ne \emptyset$이고 $s$가 $\mathcal{M}$-단순함수이면 $s(X)$는 공집합이 아닌 유한집합이므로 어떤 자연수 $N$에 대하여 원소를 $N$개 갖고, 그 크기순 나열이 하나로 정해진다. 그 나열의 값을 $\alpha_1 < \alpha_2 < \dots < \alpha_N$이라 하고 $A_j = \{x \in X : s(x) = \alpha_j\}$($1 \le j \le N$)로 둔다. 이 $N$, $\alpha_1, \dots, \alpha_N$, $A_1, \dots, A_N$을 $s$의 **표준 표현**(canonical representation)이라 한다.

**표준 근사열.** $f$가 $X$ 위의 $[0, \infty]$ 값 함수이고 $k$가 자연수라 하자. $x \in X$에서 $k \le f(x)$이면 $s_k^f(x) = k$로 두고, $f(x) < k$이면 $f(x)$는 실수이므로 [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $j \le 2^k f(x) < j + 1$인 정수 $j$가 정확히 하나 있고, $s_k^f(x) = j / 2^k$로 둔다. 이렇게 정한 실숫값 함수 $s_k^f : X \to \mathbb{R}$들을 $f$의 **표준 근사열**이라 한다. $f$가 $X$ 위의 실숫값 함수이면 $f^+$, $f^-$는 값이 $0$ 이상이므로 $[0, \infty]$ 값 함수로도 보고, $r_k^f = s_k^{f^+} - s_k^{f^-}$로 둔다.

다음이 성립한다.

1. (유한 개의 실수의 집합) $N$, $M$이 $0$ 이상인 정수라 하자.
   - (i) $1 \le i \le N$인 정수 $i$마다 실수 $\gamma_i$가 정해져 있으면 $\{\gamma_i : 1 \le i \le N\}$은 유한집합이다.
   - (ii) $1 \le i \le N$, $1 \le j \le M$인 정수 $i$, $j$마다 실수 $\delta_{i,j}$가 정해져 있으면 $\{\delta_{i,j} : 1 \le i \le N,\ 1 \le j \le M\}$은 유한집합이다.
2. (표준 표현의 성질) $X \ne \emptyset$이고 $s$가 표준 표현 $N$, $\alpha_j$, $A_j$를 갖는 $\mathcal{M}$-단순함수이면, 모든 $A_j$는 공집합이 아닌 $\mathcal{M}$의 원소이고, $X$의 각 원소는 $A_1, \dots, A_N$ 가운데 정확히 하나에 속하며, 모든 $x \in X$에서
   $$
   s(x) = \sum_{j=1}^{N} \alpha_j\, \chi_{A_j}(x)
   $$
   이다.
3. (분할 위에서 상수인 함수) $N$이 자연수이고, $A_1, \dots, A_N$이 $\mathcal{M}$의 원소이며 $X$의 각 원소가 그 가운데 정확히 하나에 속하고, $\alpha_1, \dots, \alpha_N$이 실수라 하자($A_j$가 비어 있거나 $\alpha_j$가 서로 같아도 된다). $x \in A_j$일 때 $s(x) = \alpha_j$로 정한 함수 $s : X \to \mathbb{R}$는 $\mathcal{M}$-단순함수이고, 모든 $x \in X$에서 $s(x) = \sum_{j=1}^{N} \alpha_j\, \chi_{A_j}(x)$이다.
4. (공통 세분) $X \ne \emptyset$이고 $s$, $t$가 표준 표현 $N$, $\alpha_i$, $A_i$와 $M$, $\beta_j$, $B_j$를 갖는 $\mathcal{M}$-단순함수이면, $1 \le i \le N$, $1 \le j \le M$인 모든 $i$, $j$에서 $A_i \cap B_j \in \mathcal{M}$이고, $X$의 각 원소는 이 $NM$개의 집합 가운데 정확히 하나에 속하며, $A_i \cap B_j$ 위에서 $s = \alpha_i$, $t = \beta_j$이다.
5. (연산) $s$, $t$가 $\mathcal{M}$-단순함수이고 $c$가 실수이면 $s + t$, $s - t$, $st$, $cs$, $|s|$, $\max\{s, t\}$, $\min\{s, t\}$는 $\mathcal{M}$-단순함수이다. 상수함수와, $A \in \mathcal{M}$일 때 $\chi_A$는 $\mathcal{M}$-단순함수이다.
6. ($[0, \infty]$ 값 가측함수의 근사) $f$가 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이고 $k$가 자연수라 하자.
   - (i) $s_k^f$는 $\mathcal{M}$-단순함수이고 그 값은 $j/2^k$($0 \le j \le k2^k$인 정수 $j$) 꼴이다. 더 자세히, $0 \le j \le k2^k - 1$인 정수 $j$에서
     $$
     \begin{aligned}
     &\Bigl\{s_k^f = \frac{j}{2^k}\Bigr\} \\
     &\quad = \Bigl\{f \ge \frac{j}{2^k}\Bigr\} \\
     &\qquad \cap \Bigl\{f < \frac{j+1}{2^k}\Bigr\}
     \end{aligned}
     $$
     이고 $\{s_k^f = k\} = \{f \ge k\}$이다.
   - (ii) 모든 $x \in X$에서 $0 \le s_k^f(x) \le s_{k+1}^f(x) \le f(x)$이다(실수 $s_k^f(x)$를 $[0, \infty]$의 원소로 보아 비교한다).
   - (iii) 모든 $x \in X$에서 $[0, \infty]$의 원소열 $(s_k^f(x))$는 단조증가이고 $\lim_{k \to \infty} s_k^f(x) = f(x)$이다. $f(x) = \infty$이면 모든 $k$에서 $s_k^f(x) = k$이다. $f(x)$가 실수이면, $f(x) < k$인 모든 자연수 $k$에서 $0 \le f(x) - s_k^f(x) < 2^{-k}$이고, 실수열 $(s_k^f(x))$는 [[limit-of-sequence]]의 뜻으로 $f(x)$로 수렴한다.
7. (실숫값 가측함수의 근사) $f$가 $\mathcal{M}$-가측인 실숫값 함수이면, 모든 자연수 $k$에서 $r_k^f$는 $\mathcal{M}$-단순함수이고 모든 $x \in X$에서 $|r_k^f(x)| \le |f(x)|$이며, 모든 $x \in X$에서 실수열 $(r_k^f(x))$는 $f(x)$로 수렴한다. $f$의 값이 모두 $0$ 이상이면 $r_k^f = s_k^f$이다.
:::

:::english
Measurable spaces and (σ1)–(σ3) are as in [[sigma-algebra]], real-valued functions with their operations, $f^+$, $f^-$, and $\mathcal{M}$-measurability are as in [[measurable-function]], and $[0, \infty]$-valued functions and their measurability are as in [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]. $[0, \infty]$ with its order and the limit of a nondecreasing sequence are as in [[extended-nonnegative-reals]]. Finite sets and numbers of elements are as in [[finite-set]], listings in increasing order are as in [[increasing-listing-of-finite-set]], and finite sums $\sum_{j=1}^{N}$ are as in [[finite-sum-of-reals]]. $2^k$ is as in [[power-of-a-real-number]], and $2^{-k}$ means $(2^k)^{-1}$. Below, $(X, \mathcal{M})$ is a measurable space.

**Simple functions.** A real-valued function $s$ on $X$ is an **$\mathcal{M}$-simple function** exactly when $s$ is $\mathcal{M}$-measurable and its set of values $s(X) = \{s(x) : x \in X\}$ is a finite set.

**Canonical representation.** If $X \ne \emptyset$ and $s$ is an $\mathcal{M}$-simple function, then $s(X)$ is a nonempty finite set, so it has $N$ elements for some natural number $N$, and its listing in increasing order is uniquely determined. Let the values of that listing be $\alpha_1 < \alpha_2 < \dots < \alpha_N$ and let $A_j = \{x \in X : s(x) = \alpha_j\}$ ($1 \le j \le N$). These $N$, $\alpha_1, \dots, \alpha_N$, $A_1, \dots, A_N$ are called the **canonical representation** of $s$.

**Standard approximating sequence.** Let $f$ be a $[0, \infty]$-valued function on $X$ and $k$ a natural number. For $x \in X$, if $k \le f(x)$ let $s_k^f(x) = k$; if $f(x) < k$, then $f(x)$ is a real number, so by item (4) of the [[archimedean-property]] there is exactly one integer $j$ with $j \le 2^k f(x) < j + 1$, and let $s_k^f(x) = j / 2^k$. The real-valued functions $s_k^f : X \to \mathbb{R}$ so defined are called the **standard approximating sequence** of $f$. If $f$ is a real-valued function on $X$, then $f^+$ and $f^-$ have values at least $0$, so we also regard them as $[0, \infty]$-valued functions, and we let $r_k^f = s_k^{f^+} - s_k^{f^-}$.

The following hold.

1. (Sets of finitely many real numbers) Let $N$ and $M$ be integers with $N, M \ge 0$.
   - (i) If a real number $\gamma_i$ is determined for each integer $i$ with $1 \le i \le N$, then $\{\gamma_i : 1 \le i \le N\}$ is a finite set.
   - (ii) If a real number $\delta_{i,j}$ is determined for all integers $i$, $j$ with $1 \le i \le N$ and $1 \le j \le M$, then $\{\delta_{i,j} : 1 \le i \le N,\ 1 \le j \le M\}$ is a finite set.
2. (Properties of the canonical representation) If $X \ne \emptyset$ and $s$ is an $\mathcal{M}$-simple function with canonical representation $N$, $\alpha_j$, $A_j$, then every $A_j$ is a nonempty element of $\mathcal{M}$, each element of $X$ belongs to exactly one of $A_1, \dots, A_N$, and for every $x \in X$
   $$
   s(x) = \sum_{j=1}^{N} \alpha_j\, \chi_{A_j}(x).
   $$
3. (Functions constant on the pieces of a partition) Let $N$ be a natural number, let $A_1, \dots, A_N$ be elements of $\mathcal{M}$ such that each element of $X$ belongs to exactly one of them, and let $\alpha_1, \dots, \alpha_N$ be real numbers (some $A_j$ may be empty and the $\alpha_j$ need not be distinct). The function $s : X \to \mathbb{R}$ defined by $s(x) = \alpha_j$ for $x \in A_j$ is an $\mathcal{M}$-simple function, and $s(x) = \sum_{j=1}^{N} \alpha_j\, \chi_{A_j}(x)$ for every $x \in X$.
4. (Common refinement) If $X \ne \emptyset$ and $s$, $t$ are $\mathcal{M}$-simple functions with canonical representations $N$, $\alpha_i$, $A_i$ and $M$, $\beta_j$, $B_j$, then $A_i \cap B_j \in \mathcal{M}$ for all $i$, $j$ with $1 \le i \le N$ and $1 \le j \le M$, each element of $X$ belongs to exactly one of these $NM$ sets, and $s = \alpha_i$, $t = \beta_j$ on $A_i \cap B_j$.
5. (Operations) If $s$ and $t$ are $\mathcal{M}$-simple functions and $c$ is a real number, then $s + t$, $s - t$, $st$, $cs$, $|s|$, $\max\{s, t\}$, $\min\{s, t\}$ are $\mathcal{M}$-simple functions. Constant functions and, for $A \in \mathcal{M}$, $\chi_A$ are $\mathcal{M}$-simple functions.
6. (Approximating $[0, \infty]$-valued measurable functions) Let $f$ be an $\mathcal{M}$-measurable $[0, \infty]$-valued function and $k$ a natural number.
   - (i) $s_k^f$ is an $\mathcal{M}$-simple function and its values have the form $j/2^k$ (with an integer $0 \le j \le k2^k$). More precisely, for an integer $j$ with $0 \le j \le k2^k - 1$
     $$
     \begin{aligned}
     &\Bigl\{s_k^f = \frac{j}{2^k}\Bigr\} \\
     &\quad = \Bigl\{f \ge \frac{j}{2^k}\Bigr\} \\
     &\qquad \cap \Bigl\{f < \frac{j+1}{2^k}\Bigr\}
     \end{aligned},
     $$
     and $\{s_k^f = k\} = \{f \ge k\}$.
   - (ii) For every $x \in X$, $0 \le s_k^f(x) \le s_{k+1}^f(x) \le f(x)$ (comparing the real number $s_k^f(x)$ as an element of $[0, \infty]$).
   - (iii) For every $x \in X$, the sequence $(s_k^f(x))$ of elements of $[0, \infty]$ is nondecreasing and $\lim_{k \to \infty} s_k^f(x) = f(x)$. If $f(x) = \infty$, then $s_k^f(x) = k$ for every $k$. If $f(x)$ is a real number, then $0 \le f(x) - s_k^f(x) < 2^{-k}$ for every natural number $k$ with $f(x) < k$, and the real sequence $(s_k^f(x))$ converges to $f(x)$ in the sense of [[limit-of-sequence]].
7. (Approximating real-valued measurable functions) If $f$ is an $\mathcal{M}$-measurable real-valued function, then for every natural number $k$, $r_k^f$ is an $\mathcal{M}$-simple function and $|r_k^f(x)| \le |f(x)|$ for every $x \in X$, and for every $x \in X$ the real sequence $(r_k^f(x))$ converges to $f(x)$. If all values of $f$ are at least $0$, then $r_k^f = s_k^f$.
:::

## 직관

단순함수는 계단처럼 몇 개의 값만 갖는 가측함수입니다. 값마다 그 값을 갖는 점들의 집합이 가측집합이 되어($A_j = \{s = \alpha_j\}$), 단순함수는 "이 조각에서는 이 값"이라는 유한한 표로 적힙니다((2)). 두 단순함수를 함께 다룰 때는 두 표의 조각을 서로 겹쳐 자른 더 잘게 나뉜 표를 씁니다((4)). 그 조각 위에서는 두 함수가 모두 상수이므로 합이나 곱도 상수입니다.

표준 근사열은 0 이상인 가측함수 $f$를 아래에서부터 단순함수로 채우는 정해진 방법입니다. $k$번째 단계에서는 높이 $0$부터 $k$까지를 폭 $2^{-k}$인 칸으로 자르고, $f(x)$가 들어 있는 칸의 아래쪽 끝을 $s_k^f(x)$로 삼습니다. $k$보다 높은 곳은 모두 $k$로 자릅니다. 다음 단계는 칸을 반으로 나누고 높이 제한을 하나 올리므로 값이 줄어들지 않고((6)의 (ii)), $f(x)$가 실수이면 높이 제한을 넘어선 뒤로는 칸의 폭 $2^{-k}$보다 작게 다가갑니다((6)의 (iii)). 눈금이 $2^{-k}$인 자로 길이를 잴 때 눈금 아래로 버림한 값과 같습니다. 자가 정밀해져도 버림한 값은 줄지 않고, 자의 길이가 $k$로 제한된 것까지가 비유입니다.

이 열은 $f$의 값만으로 정해진 식이므로 고르는 일이 없습니다. 그래서 $f$가 여럿이어도 각각의 표준 근사열을 한꺼번에 쓸 수 있습니다.

## 증명

:::idea
(1)은 유한집합 둘의 합집합이 유한집합이라는 것으로 원소를 하나씩 더하는 귀납이고, 나머지는 모두 "값이 같은 점들의 집합"을 가측집합으로 쓰는 것입니다. (6)의 단조성은 "어떤 실수 이하인 정수는 그 실수 이하인 가장 큰 정수 이하"라는 사실 하나로 정리됩니다.
:::

:::hint
(5)의 $s + t$에서 값의 집합은 $\{\alpha_i + \beta_j\}$의 부분집합이고, $\{s + t > c\}$는 $\alpha_i + \beta_j > c$인 쌍 $(i, j)$에 대한 $A_i \cap B_j$의 합집합입니다.
:::

:::hint
(6)의 (ii)에서 $f(x) < k$이면 $2^k f(x)$ 이하인 가장 큰 정수 $j$에 대해 $2j \le 2^{k+1} f(x)$입니다.
:::

:::proof
**준비.** 실수와 정수의 계산과 순서는 [[real-number-arithmetic]], [[order-properties-of-reals]], [[prime-number]]의 (Z1)–(Z3), [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 실수 $t$에 대하여 $n - 1 \le t < n$인 정수 $n$이 하나뿐이고 $n - 1$은 $t$ 이하인 정수 가운데 가장 큰 것이다. 이 $n - 1$을 아래에서 "$t$의 버림"이라 부르자. 따라서 (가) 정수 $m$이 $m \le t$이면 $m$은 $t$의 버림 이하이다. 표준 근사열의 정의의 $j$는 $2^k f(x)$의 버림이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (7)에 의해 자연수 $k$에서 $2^k$은 자연수이므로 양수이고 $k2^k$은 정수이며, 같은 항목의 (1)에 의해 $2^{k+1} = 2 \cdot 2^k$이다. "원소 판정"은 [[sequence-of-sets|집합열]]의 (1)이다.

**(1)** (i) $N$에 대한 귀납법으로 보인다. $N = 0$이면 집합은 $\emptyset$이고 [[finite-set]]의 (F2)에 의해 유한집합이다. $N$에서 성립한다고 하고 $S = \{\gamma_i : 1 \le i \le N\}$이라 하면 $\{\gamma_i : 1 \le i \le N + 1\} = S \cup \{\gamma_{N+1}\}$이다. $\{\gamma_{N+1}\}$은 원소를 $1$개 갖는 유한집합이다. $S = \emptyset$이면 합집합은 $\{\gamma_{N+1}\}$이고, $S \ne \emptyset$이면 [[maximum-of-finite-set|유한집합의 최댓값과 최솟값]]의 (4)에 의해 공집합이 아닌 두 유한집합의 합집합은 유한집합이다. (ii) $i$마다 (i)에 의해 $C_i = \{\delta_{i,j} : 1 \le j \le M\}$은 유한집합이다. 문장의 집합은 $C_1 \cup \dots \cup C_N$이므로 (i)와 같은 귀납법으로 $N$에 대하여 보인다($N = 0$이면 $\emptyset$이고, 한 단계마다 공집합이 아닌 두 유한집합의 합집합이거나 한쪽이 공집합이다).

**(2)** 크기순 나열은 $\{1, \dots, N\}$에서 $s(X)$로의 전단사이므로 각 $\alpha_j$는 $s$의 값이고, $A_j$는 공집합이 아니다. [[measurable-function|가측함수]]의 (3)에 의해 $A_j = \{s = \alpha_j\} \in \mathcal{M}$이다. $x \in X$이면 $s(x) \in s(X)$이고 나열이 전사이므로 $s(x) = \alpha_j$인 $j$가 있으며, 나열이 단사이므로 그런 $j$는 하나뿐이다. 따라서 $x$는 정확히 하나의 $A_j$에 속한다. 마지막 등식은 (3)의 증명의 셋째 문단과 같다(그 문단은 각 $x$가 정확히 하나의 $A_j$에 속하고 $A_j$ 위에서 $s = \alpha_j$라는 것만 쓴다).

**(3)** 각 $x$는 정확히 하나의 $A_j$에 속하므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $s$가 정해진다. 값의 집합은 $\{\alpha_j : 1 \le j \le N\}$의 부분집합이므로 (1)과 [[subset-of-finite-set]]의 (1)에 의해 유한집합이다. 실수 $c$에 대하여 $j$번째 항이 "$\alpha_j > c$이면 $A_j$, 아니면 $\emptyset$"이고 $j > N$이면 $\emptyset$인 집합열은 $\mathcal{M}$의 원소로 된 집합열이고, 원소 판정에 의해 그 합집합은 $\{s > c\}$이다. [[sigma-algebra|σ-대수]]의 (σ3)과 가측함수의 (2)에 의해 $s$는 가측이다.

등식: $x \in A_k$라 하자. [[indicator-function]]의 (1)에 의해 $\chi_{A_k}(x) = 1$이고, $j \ne k$이면 $x \notin A_j$이므로 $\chi_{A_j}(x) = 0$이다. [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (1)을 두 번 쓰면 합은 $\sum_{j=1}^{k-1} \alpha_j \chi_{A_j}(x) + \alpha_k \chi_{A_k}(x) + \sum_{j=k+1}^{N} \alpha_j \chi_{A_j}(x)$이고([[finite-sum-of-reals]]의 (2)의 한 항), 첫째와 셋째 합은 모든 항이 $0$이므로 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)와 [[finite-sum-of-reals]]의 (4)에 의해 $0$이다. 따라서 합은 $\alpha_k = s(x)$이다.

**(4)** [[sigma-algebra|σ-대수]]의 (1)에 의해 $A_i \cap B_j \in \mathcal{M}$이다. $x \in X$는 (2)에 의해 정확히 하나의 $A_i$와 정확히 하나의 $B_j$에 속하므로 정확히 하나의 $A_i \cap B_j$에 속하고, 그 위에서 $s(x) = \alpha_i$, $t(x) = \beta_j$이다.

**(5)** $X = \emptyset$이면 모든 함수의 값의 집합이 $\emptyset$이고, [[sigma-algebra|σ-대수]]의 (5)에 의해 $\mathcal{M} = \{\emptyset\}$이며 모든 $\{h > c\}$가 $\emptyset$이므로 결론이 성립한다. $X \ne \emptyset$이라 하고 (4)의 기호를 쓰자. $\diamond$가 $+$, $-$, 곱 가운데 하나일 때 $A_i \cap B_j$ 위에서 $(s \diamond t)(x) = \alpha_i \diamond \beta_j$이다. 값의 집합은 $\{\alpha_i \diamond \beta_j\}$의 부분집합이므로 (1)의 (ii)와 [[subset-of-finite-set]]의 (1)에 의해 유한집합이다. 실수 $c$에 대하여 $i$마다 $j$번째 항이 "$j \le M$이고 $\alpha_i \diamond \beta_j > c$이면 $A_i \cap B_j$, 아니면 $\emptyset$"인 집합열의 합집합을 $U_i$라 하면 σ-대수의 (σ3)에 의해 $U_i \in \mathcal{M}$이다. $i > N$일 때 $U_i = \emptyset$으로 두면 $i$번째 항이 $U_i$인 집합열의 합집합이 $\{s \diamond t > c\}$이고(원소 판정과 (4)), (σ3)에 의해 $\mathcal{M}$의 원소이다. 가측함수의 (2)에 의해 $s \diamond t$는 가측이다. $cs$, $|s|$는 가측함수의 (5)에 의해, $\max\{s, t\}$, $\min\{s, t\}$는 같은 항목의 (7)에 의해 가측이고, 값의 집합은 각각 $\{c\alpha_i\}$, $\{|\alpha_i|\}$, $\{\max\{\alpha_i, \beta_j\}\}$, $\{\min\{\alpha_i, \beta_j\}\}$의 부분집합이므로 (1)에 의해 유한집합이다. 상수함수의 값의 집합은 원소가 많아야 하나이고, $\chi_A$의 값의 집합은 $\{0, 1\}$의 부분집합이며, 둘 다 가측함수의 (6)에 의해 가측이다.

**(6)** (i) 정의에 의해 $f(x) \ge k$이면 $s_k^f(x) = k = k2^k/2^k$이다. $f(x) < k$이면 $j$는 $2^k f(x)$의 버림이고, $0 \le 2^k f(x)$이므로 (가)에 의해 $0 \le j$이며, $j \le 2^k f(x) < k2^k$이므로 $j < k2^k$, 곧 (Z1)에 의해 $j \le k2^k - 1$이다. 따라서 값은 $j/2^k$($0 \le j \le k2^k$) 꼴이고, 값의 집합은 $\{(i - 1)/2^k : 1 \le i \le k2^k + 1\}$의 부분집합이므로 (1)과 [[subset-of-finite-set]]의 (1)에 의해 유한집합이다. $0 \le j \le k2^k - 1$이고 $f(x) < k$이면, $2^{-k} > 0$을 곱해 $j \le 2^k f(x) < j + 1$인 것은 정확히 $j/2^k \le f(x) < (j+1)/2^k$일 때이다([[order-properties-of-reals]]의 (6)의 (iv)). 또 $j/2^k \le f(x) < (j+1)/2^k$이면 $(j+1)/2^k \le k$이므로 $f(x) < k$이다. 거꾸로 $f(x) \ge k$이면 $s_k^f(x) = k \ne j/2^k$이다. 이것으로 문장의 첫 등식이 나온다. $f(x) < k$이면 $s_k^f(x) = j/2^k \le f(x) < k$이므로 $\{s_k^f = k\} = \{f \ge k\}$이다. 이 $k2^k + 1$개의 집합은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (1)과 σ-대수의 (1)에 의해 $\mathcal{M}$의 원소이고, $X$의 각 원소는 정확히 하나에 속하므로 (3)에 의해 $s_k^f$는 단순함수이다.

(ii) $0 \le s_k^f(x)$는 (i)에서 나왔다. $s_k^f(x) \le f(x)$: $f(x) \ge k$이면 $s_k^f(x) = k \le f(x)$이고, $f(x) < k$이면 $j \le 2^k f(x)$에서 $j/2^k \le f(x)$이다. $s_k^f(x) \le s_{k+1}^f(x)$를 세 경우로 보인다. $f(x) \ge k + 1$이면 두 값은 $k$와 $k + 1$이다. $k \le f(x) < k + 1$이면 $s_k^f(x) = k$이고, 정수 $k2^{k+1}$이 $2^{k+1}f(x)$ 이하이므로 (가)에 의해 $s_{k+1}^f(x) = j'/2^{k+1}$의 $j'$은 $k2^{k+1}$ 이상이어서 $s_{k+1}^f(x) \ge k$이다. $f(x) < k$이면 $s_k^f(x) = j/2^k$이고 $f(x) < k + 1$이며, $2j \le 2 \cdot 2^k f(x) = 2^{k+1}f(x)$이므로 (가)에 의해 $j' \ge 2j$이고 $s_{k+1}^f(x) = j'/2^{k+1} \ge 2j/2^{k+1} = j/2^k$이다.

(iii) (ii)에 의해 원소열은 단조증가이다. $f(x) = \infty$이면 모든 $k$에서 $k \le \infty$이므로 $s_k^f(x) = k$이고, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $\{k : k \in \mathbb{N}\}$은 위로 유계가 아니므로 [[extended-nonnegative-reals]]의 (5)의 (iv)에 의해 그 상한, 곧 극한은 $\infty = f(x)$이다. $f(x)$가 실수이고 $f(x) < k$이면 $j \le 2^k f(x) < j + 1$에서 $0 \le f(x) - j/2^k < 2^{-k}$이다. [[bernoulli-inequality|베르누이 부등식]]에서 그 항목의 $x$를 $1$로 두면 $2^k \ge 1 + k > k$이므로 $2^{-k} < 1/k$이다. 양수 $\varepsilon$에 대하여 아르키메데스 성질의 (1)과 (3)에 의해 $f(x) < K$인 자연수 $K$와, $n$ 이상인 모든 $m$에서 $1/m < \varepsilon$인 자연수 $n$이 있다. $K$와 $n$ 가운데 큰 것 이상인 모든 $k$에서 $f(x) < K \le k$이므로 $|s_k^f(x) - f(x)| < 2^{-k} < 1/k < \varepsilon$이다. 따라서 실수열 $(s_k^f(x))$는 $f(x)$로 수렴한다. 이 열은 단조증가이고 $f(x)$를 상계로 가지므로 위로 유계이고, [[extended-nonnegative-reals]]의 (7)의 (iii)과 [[limit-is-unique]]에 의해 $[0, \infty]$의 뜻의 극한도 $f(x)$이다.

**(7)** 가측함수의 (5)에 의해 $f^+$, $f^-$는 값이 $0$ 이상인 가측함수이고, [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $[0, \infty]$ 값 함수로도 가측이다. (6)의 (i)과 (5)에 의해 $r_k^f$는 단순함수이다. $x \in X$를 잡자. $0 \le f(x)$이면 가측함수의 (5)와 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 $f^-(x) = 0$이고 $f^+(x) = f(x)$이므로, (6)의 (ii)에 의해 $s_k^{f^-}(x) = 0$이고 $0 \le r_k^f(x) = s_k^{f^+}(x) \le f(x) = |f(x)|$이다. $f(x) < 0$이면 같은 이유로 $f^+(x) = 0$, $f^-(x) = -f(x)$이고 $r_k^f(x) = -s_k^{f^-}(x)$이므로 $|r_k^f(x)| = s_k^{f^-}(x) \le -f(x) = |f(x)|$이다. (6)의 (iii)에 의해 $(s_k^{f^+}(x))$와 $(s_k^{f^-}(x))$는 $f^+(x)$와 $f^-(x)$로 수렴하므로, [[limit-of-sum-and-product|합과 곱의 극한]]의 (2)에 의해 $(r_k^f(x))$는 $f^+(x) - f^-(x) = f(x)$로 수렴한다. $f$의 값이 모두 $0$ 이상이면 $f^+ = f$이고 $f^-$는 값이 $0$인 상수함수이므로 $s_k^{f^-}$는 값이 $0$인 상수함수이고 $r_k^f = s_k^f$이다.
:::

## 예시와 반례

:::example[절댓값 함수의 근사열]
$X = \mathbb{R}$에 보렐 σ-대수를 주고 $f(x) = |x|$라 합시다. $f$는 [[measurable-function|가측함수]]의 (5)에 의해 가측이고 값이 $0$ 이상입니다. $x = \tfrac{7}{10}$에서 $f(x) < 1$이고 $2 \cdot \tfrac{7}{10} = \tfrac{14}{10}$, $4 \cdot \tfrac{7}{10} = \tfrac{28}{10}$, $8 \cdot \tfrac{7}{10} = \tfrac{56}{10}$의 버림은 $1$, $2$, $5$이므로 $s_1^f(\tfrac{7}{10}) = \tfrac{1}{2}$, $s_2^f(\tfrac{7}{10}) = \tfrac{2}{4} = \tfrac{1}{2}$, $s_3^f(\tfrac{7}{10}) = \tfrac{5}{8}$입니다. 줄지 않으면서 $\tfrac{7}{10}$ 아래에 있습니다. $x = 3$에서는 $f(3) = 3$이므로 $k = 1, 2, 3$에서 $k \le 3$이어서 $s_k^f(3) = k$이고, $k = 4$에서 $16 \cdot 3 = 48$이므로 $s_4^f(3) = \tfrac{48}{16} = 3$입니다. 높이 제한이 $3$을 넘은 뒤로는 값이 $f(3)$과 같습니다.
:::

:::counterexample[유계가 아닌 함수에서는 근사의 오차가 모든 점에서 함께 작아지지 않을 수 있다]
위의 $f(x) = |x|$에서 자연수 $k$를 하나 고정하고 $x = k + 1$을 보면 $f(k + 1) = k + 1 \ge k$이므로 $s_k^f(k + 1) = k$이고 $f(k + 1) - s_k^f(k + 1) = 1$입니다. 따라서 어느 $k$에서도 "모든 $x$에서 $f(x) - s_k^f(x) < 1$"이 성립하지 않습니다. (6)의 (iii)의 어림 $2^{-k}$는 $f(x) < k$인 점에서만 성립하고, 그 $k$가 점마다 다르기 때문입니다. 점마다의 수렴은 성립하지만, 오차를 한 $k$에서 모든 점에 걸쳐 작게 할 수는 없습니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3, 4\}$에서 $s = \chi_{\{1, 2\}} + 2\chi_{\{2, 3\}}$의 표준 표현은 무엇인가?]
값은 $s(1) = 1$, $s(2) = 1 + 2 = 3$, $s(3) = 2$, $s(4) = 0$이므로 $s(X) = \{0, 1, 2, 3\}$이고 $N = 4$, $\alpha_1 = 0$, $\alpha_2 = 1$, $\alpha_3 = 2$, $\alpha_4 = 3$, $A_1 = \{4\}$, $A_2 = \{1\}$, $A_3 = \{3\}$, $A_4 = \{2\}$입니다. 이 표현에서는 각 점이 정확히 하나의 조각에 속하지만, 처음 쓴 $\chi_{\{1, 2\}} + 2\chi_{\{2, 3\}}$의 두 집합은 $2$에서 겹칩니다.
:::

:::check[$f$가 값이 $\tfrac{1}{3}$인 상수함수일 때 $s_1^f$, $s_2^f$, $s_3^f$, $s_4^f$의 값은?]
$\tfrac{1}{3} < 1$이므로 모두 버림으로 정해집니다. $\tfrac{2}{3}$, $\tfrac{4}{3}$, $\tfrac{8}{3}$, $\tfrac{16}{3}$의 버림은 $0$, $1$, $2$, $5$이므로 값은 $0$, $\tfrac{1}{4}$, $\tfrac{2}{8} = \tfrac{1}{4}$, $\tfrac{5}{16}$입니다. 줄지 않고 $\tfrac{1}{3}$보다 작으며, $\tfrac{1}{3} - \tfrac{5}{16} = \tfrac{1}{48} < \tfrac{1}{16}$입니다.
:::
