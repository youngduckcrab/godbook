---
title: "[0, ∞] 의 항의 합"
title_en: Sums of Extended Nonnegative Reals
aliases: [0 이상인 항의 급수의 합, 확장된 실수의 급수, 부분집합 위의 합, sums in the extended nonnegative reals, series of nonnegative terms]
kind: definition
field: measure-theory
msc: ["40A05", "28"]
level: undergrad
summary: "[0, ∞] 의 원소의 유한 합과, 부분합의 상한으로 정한 무한 합 Σ 를 정의한다. 이 합은 늘 정해지고, 항이 실수일 때는 급수가 수렴하는 것과 합이 실수인 것이 같으며 두 합의 값이 같다. 꼬리로 쪼개기, 항별 합과 상수배, 재배열, ℕ 의 부분집합 위의 합과 차례로 늘어놓은 첨자열로의 합, 유한집합 위에서 1 을 더한 합이 원소의 개수라는 것을 다룬다."
requires: [function, injective-surjective-bijective, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, maximum-of-finite-set, mathematical-induction, recursion-theorem, prime-number, well-ordering-principle, natural-numbers-are-infinite, upper-bound-and-supremum, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, subsequence, series-and-partial-sums, finite-sum-of-reals, linearity-and-order-of-finite-sums, sum-of-a-series, rearranging-a-finite-sum, rearrangement-of-absolutely-convergent-series, extended-nonnegative-reals]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Definitions and examples, Definition 4.1 (M3) (p.89), Example 4.7 (p.93); 5.2절, Example 5.15 (p.133–134)
    checked: original
    note: "출처의 Definition 4.1 (M3)(p.89)은 측도의 값의 급수 Σ_{k=1}^∞ µ(A_k) 를 R̄ 의 원소로 쓰고, Example 4.7(p.93)은 0 이상인 확장된 실수의 열 (x_j) 와 A ⊆ ℕ 에 대해 Σ_{j∈A} x_j 를 쓴다. 이 항목은 이 두 기호의 뜻을 정한다: 무한 합은 부분합의 상한으로, 부분집합 위의 합은 A 밖에서 0 으로 채운 원소열의 합으로 정한다. Example 5.15(p.133–134)는 셈측도에 대한 적분이 Σ_{k∈A} f(k) 임을 보이는 증명 안에서 무한집합 A 의 경우를 A ∩ {1, …, j} 위의 유한 합으로 다룬다. 이 항목의 (7)의 (iii)은 Σ_{n∈A} 를 A 를 차례로 늘어놓은 첨자열로 계산하는 것으로 그와 다른 길이다. 유한 합에 ∞ 가 들어갈 때의 정의, 실수 급수의 합과의 일치 (3), 재배열 (6)은 이 항목이 정하고 증명한다."
  - ref: lebl-basic-analysis
    loc: 0.3.5절 Cardinality, Example 0.3.30 (p.18); 2.5.1절 Definition 2.5.1 (p.87); 2.5.3절 Example 2.5.10 (p.90); 2.6.3절 Rearrangements, Proposition 2.6.3 (p.102)
    checked: original
    note: "출처의 Definition 2.5.1(p.87)은 급수가 수렴할 때만 그 합을 수로 다룬다. 이 사이트의 급수와 멱급수 강의 sum-of-a-series 가 이를 따랐고, 이 항목은 항이 [0, ∞] 의 원소일 때 같은 기호 Σ_{n=1}^∞ 를 늘 정해지는 값으로 넓히되 (3)에서 두 뜻이 겹치는 곳의 값이 같음을 보인다. (6)의 실수인 항의 경우는 출처의 Proposition 2.6.3(p.102, 절대수렴하는 급수의 재배열)을 따르는 rearrangement-of-absolutely-convergent-series 의 (2)(3)을 인용한다. 예시 '짝수 번째 항만 더한 합'의 첨자열 p_j = 2j 는 출처 Example 0.3.30(p.18)이 짝수인 자연수 전체와 ℕ 사이에 쓰는 대응 k = 2n 과 같다. 확인 질문 '모든 항이 $1$인 원소열의 합은 무엇이고, 급수와 멱급수 강의의 기호로는 어떻게 되는가?'의 수열은 출처 Example 2.5.10(p.90)의 r = 1 인 등비급수(첨자 0 부터의 rⁿ)와 같은 급수이고, 출처도 그 급수가 발산한다고 보인다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[0, \infty]$와 그 순서, 덧셈, 곱셈, 상한, $[0, \infty]$의 원소열, 단조증가열의 극한은 [[extended-nonnegative-reals]]의 것이다. 실수의 유한 합 $\sum_{n=1}^{N}$과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이고, 급수의 수렴과 발산은 [[series-and-partial-sums]], 급수의 합의 기호 $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$는 [[sum-of-a-series]]의 것이다.

**유한 합.** $N$을 $0$ 이상인 정수라 하고, $1 \le n \le N$인 정수 $n$마다 $[0, \infty]$의 원소 $t_n$이 정해져 있다고 하자. $\sum_{n=1}^{N} t_n$을 다음과 같이 정한다.

- 모든 $t_n$이 실수이면 $\sum_{n=1}^{N} t_n$은 실수의 유한 합이다.
- $t_n = \infty$인 $n$이 있으면 $\sum_{n=1}^{N} t_n = \infty$이다.

 $N = 0$이면 $t_n$이 없으므로 첫째 경우이고 빈 합 $0$이다. 모든 $t_n$이 실수이면 이것은 [[finite-sum-of-reals]]의 수 그 자체이므로 유한 합의 뜻이 둘이 되지 않는다. $t_n$은 원소열의 항이어도 되고 범위에서만 정해진 것이어도 된다.

**무한 합.** $(a_n)$을 $[0, \infty]$의 원소열이라 하자. 아래 (2)에 의해 $N$번째 항이 $\sum_{n=1}^{N} a_n$인 원소열은 단조증가이고
$$
\begin{aligned}
\sum_{n=1}^{\infty} a_n &= \lim_{N \to \infty} \sum_{n=1}^{N} a_n \\
&= \sup\Bigl\{\sum_{n=1}^{N} a_n : N \in \mathbb{N}\Bigr\}
\end{aligned}
$$
으로 정한다. 이 값은 늘 $[0, \infty]$의 원소 하나로 정해진다. $m$이 자연수이고 $m$ 이상인 정수 $n$마다 $[0, \infty]$의 원소 $t_n$이 정해져 있으면, [[sum-of-a-series]]처럼 $j$번째 항이 $t_{j+m-1}$인 원소열(1부터 다시 번호 붙인 원소열)로 $\sum_{n=m}^{\infty} t_n = \sum_{j=1}^{\infty} t_{j+m-1}$이라 정한다. $m = 1$이면 위의 정의와 같다. 합의 첨자 $n$, $j$는 기호 안에서만 쓰는 이름이다.

**부분집합 위의 합.** $A$를 $\mathbb{N}$의 부분집합, $(a_n)$을 $[0, \infty]$의 원소열이라 하자. $n \in A$이면 $a_n$, $n \notin A$이면 $0$인 원소열을 "$(a_n)$을 $A$ 밖에서 $0$으로 채운 원소열"이라 하고, 그 합을 $\sum_{n \in A} a_n$으로 쓴다.

다음이 성립한다. 아래에서 $(a_n)$, $(b_n)$은 $[0, \infty]$의 원소열이고 $c$는 $[0, \infty]$의 원소이다.

1. (유한 합) $N$, $K$, $J$, $Q$는 $0$ 이상인 정수이고, $t_n$, $u_n$은 쓰이는 범위의 정수 $n$에서 정해진 $[0, \infty]$의 원소이다.
   - (i) (빈 합과 끝항 떼기) $\sum_{n=1}^{0} t_n = 0$이고 $\sum_{n=1}^{N+1} t_n = \sum_{n=1}^{N} t_n + t_{N+1}$이다. 특히 $\sum_{n=1}^{1} t_n = t_1$이다.
   - (ii) (범위 안의 항에만 의존) $1 \le n \le N$인 모든 $n$에서 $t_n = u_n$이면 $\sum_{n=1}^{N} t_n = \sum_{n=1}^{N} u_n$이다.
   - (iii) (항별 합, 상수배, 비교) $\sum_{n=1}^{N} (t_n + u_n) = \sum_{n=1}^{N} t_n + \sum_{n=1}^{N} u_n$, $\sum_{n=1}^{N} c\,t_n = c \sum_{n=1}^{N} t_n$이다. $1 \le n \le N$인 모든 $n$에서 $t_n \le u_n$이면 $\sum_{n=1}^{N} t_n \le \sum_{n=1}^{N} u_n$이다.
   - (iv) (값의 범위) $1 \le k \le N$이면 $0 \le t_k \le \sum_{n=1}^{N} t_n$이다. $\sum_{n=1}^{N} t_n < \infty$인 것은 정확히 모든 $t_n$이 실수일 때이고, $\sum_{n=1}^{N} t_n = 0$인 것은 정확히 모든 $t_n$이 $0$일 때이다.
   - (v) (쪼개기) $\sum_{n=1}^{K+J} t_n = \sum_{n=1}^{K} t_n + \sum_{j=1}^{J} t_{K+j}$이다.
   - (vi) ($0$이 아닌 항이 많아야 하나) $1 \le k \le N$이고 $n \ne k$인 모든 $n$에서 $t_n = 0$이면 $\sum_{n=1}^{N} t_n = t_k$이다.
   - (vii) (이중 합) $1 \le k \le K$, $1 \le n \le N$인 정수 $k$, $n$마다 $[0, \infty]$의 원소 $t_{k,n}$이 정해져 있으면
     $$
     \sum_{k=1}^{K} \sum_{n=1}^{N} t_{k,n} = \sum_{n=1}^{N} \sum_{k=1}^{K} t_{k,n}
     $$
     이다. 왼쪽은 $k$번째 항이 $\sum_{n=1}^{N} t_{k,n}$인 합이고, 오른쪽은 $n$번째 항이 $\sum_{k=1}^{K} t_{k,n}$인 합이다.
   - (viii) (단사로 고른 항) $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$가 단사이면 $\sum_{i=1}^{N} t_{\tau(i)} \le \sum_{i=1}^{Q} t_i$이다.
2. (부분합) $N$번째 항이 $\sum_{n=1}^{N} a_n$인 원소열은 단조증가이다. 모든 자연수 $N$, $k$에서 $\sum_{n=1}^{N} a_n \le \sum_{n=1}^{\infty} a_n$이고 $a_k \le \sum_{n=1}^{\infty} a_n$이다. $\sum_{n=1}^{\infty} a_n = 0$인 것은 정확히 모든 $a_n$이 $0$일 때이다. $\sum_{n=1}^{\infty} a_n < \infty$이면 모든 $a_n$은 실수이다.
3. (급수의 합과의 일치) 모든 $a_n$이 실수라 하자.
   - (i) $\sum_{n=1}^{\infty} a_n < \infty$인 것은 정확히 $(a_n)$의 급수가 수렴할 때이고, 이때 이 항목의 $\sum_{n=1}^{\infty} a_n$은 [[sum-of-a-series]]의 급수의 합 $\sum_{n=1}^{\infty} a_n$과 같은 실수이다.
   - (ii) $(a_n)$의 급수가 발산하는 것은 정확히 $\sum_{n=1}^{\infty} a_n = \infty$일 때이다.
   - (iii) 자연수 $m$과 $m$ 이상인 정수 $n$마다 정해진 $0$ 이상인 실수 $t_n$에 대해서도, $\sum_{n=m}^{\infty} t_n < \infty$인 것은 정확히 $t_n$의 급수가 [[sum-of-a-series]]의 뜻으로 수렴할 때이고 이때 두 기호의 값이 같다.

   그래서 항이 $0$ 이상인 실수일 때 "$\sum_{n=1}^{\infty} a_n = S$"($S$는 실수)는 두 항목 어느 뜻으로 읽어도 같은 말이고, 값 $\infty$는 이 항목의 뜻으로만 쓴다.
4. (꼬리) $K$가 $0$ 이상인 정수이면 $\sum_{n=1}^{\infty} a_n = \sum_{n=1}^{K} a_n + \sum_{n=K+1}^{\infty} a_n$이다. 특히 $K$보다 큰 모든 $n$에서 $a_n = 0$이면 $\sum_{n=1}^{\infty} a_n = \sum_{n=1}^{K} a_n$이다.
5. (항별 합, 상수배, 비교)
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} (a_n + b_n) &= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n, \\
   \sum_{n=1}^{\infty} c\,a_n &= c \sum_{n=1}^{\infty} a_n
   \end{aligned}
   $$
   이다. 모든 자연수 $n$에서 $a_n \le b_n$이면 $\sum_{n=1}^{\infty} a_n \le \sum_{n=1}^{\infty} b_n$이다.
6. (재배열) $\sigma : \mathbb{N} \to \mathbb{N}$이 전단사이면 $\sum_{n=1}^{\infty} a_{\sigma(n)} = \sum_{n=1}^{\infty} a_n$이다.
7. (부분집합 위의 합) $A$, $B$는 $\mathbb{N}$의 부분집합이다.
   - (i) $\sum_{n \in \mathbb{N}} a_n = \sum_{n=1}^{\infty} a_n$, $\sum_{n \in \emptyset} a_n = 0$이고, 자연수 $k$에서 $\sum_{n \in \{k\}} a_n = a_k$이다. $0$ 이상인 정수 $N$에서 $\sum_{n \in \{1, \dots, N\}} a_n = \sum_{n=1}^{N} a_n$이다.
   - (ii) $A \subseteq B$이면 $\sum_{n \in A} a_n \le \sum_{n \in B} a_n$이다. 또 $\sum_{n \in A} (a_n + b_n) = \sum_{n \in A} a_n + \sum_{n \in A} b_n$, $\sum_{n \in A} c\,a_n = c \sum_{n \in A} a_n$이고, 모든 $n \in A$에서 $a_n \le b_n$이면 $\sum_{n \in A} a_n \le \sum_{n \in A} b_n$이다.
   - (iii) (차례로 늘어놓은 첨자열) $(p_j)$가 [[subsequence]]의 뜻의 첨자열이고 그 값의 집합 $\{p_j : j \in \mathbb{N}\}$이 $A$이면 $\sum_{n \in A} a_n = \sum_{j=1}^{\infty} a_{p_j}$이다.
   - (iv) (원소의 개수) 모든 항이 $1$인 원소열에 대하여, $A$가 유한집합이면 $\sum_{n \in A} 1 = |A|$이고($|A|$는 [[number-of-elements-is-unique]]의 원소의 개수이며 실수로 본다), $A$가 무한집합이면 $\sum_{n \in A} 1 = \infty$이다.
:::

:::english
$[0, \infty]$ with its order, addition, multiplication and suprema, sequences in $[0, \infty]$ and limits of increasing sequences are those of the entry "Extended Nonnegative Real Numbers". Finite sums of reals $\sum_{n=1}^{N}$ and sums of terms defined only on a range are those of the entry "Finite Sums of Real Numbers"; convergence and divergence of series are those of the entry "Series and Partial Sums", and the symbols $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$ for sums of series are those of the entry "Notation for the Sum of a Series".

**Finite sums.** Let $N$ be an integer with $N \ge 0$, and suppose an element $t_n$ of $[0, \infty]$ is given for each integer $n$ with $1 \le n \le N$. We define $\sum_{n=1}^{N} t_n$ as follows.

- If all $t_n$ are real, $\sum_{n=1}^{N} t_n$ is the finite sum of reals.
- If $t_n = \infty$ for some $n$, then $\sum_{n=1}^{N} t_n = \infty$.

If $N = 0$ there are no $t_n$, so the first case applies and the sum is the empty sum $0$. When all $t_n$ are real this is the very number of the entry "Finite Sums of Real Numbers", so finite sums do not acquire a second meaning. The $t_n$ may be terms of a sequence or be defined only on the range.

**Infinite sums.** Let $(a_n)$ be a sequence in $[0, \infty]$. By (2) below, the sequence whose $N$th term is $\sum_{n=1}^{N} a_n$ is increasing, and we define
$$
\begin{aligned}
\sum_{n=1}^{\infty} a_n &= \lim_{N \to \infty} \sum_{n=1}^{N} a_n \\
&= \sup\Bigl\{\sum_{n=1}^{N} a_n : N \in \mathbb{N}\Bigr\}.
\end{aligned}
$$
This value is always a single element of $[0, \infty]$. If $m$ is a natural number and an element $t_n$ of $[0, \infty]$ is given for each integer $n \ge m$, then, as in the entry "Notation for the Sum of a Series", we use the sequence whose $j$th term is $t_{j+m-1}$ (renumbered from $1$) and define $\sum_{n=m}^{\infty} t_n = \sum_{j=1}^{\infty} t_{j+m-1}$. For $m = 1$ this agrees with the definition above. The summation indices $n$, $j$ are names used only inside the symbol.

**Sums over subsets.** Let $A$ be a subset of $\mathbb{N}$ and $(a_n)$ a sequence in $[0, \infty]$. The sequence equal to $a_n$ for $n \in A$ and to $0$ for $n \notin A$ is called "$(a_n)$ filled with $0$ outside $A$", and its sum is written $\sum_{n \in A} a_n$.

The following hold. Below $(a_n)$, $(b_n)$ are sequences in $[0, \infty]$ and $c$ is an element of $[0, \infty]$.

1. (Finite sums) $N$, $K$, $J$, $Q$ are integers $\ge 0$, and $t_n$, $u_n$ are elements of $[0, \infty]$ given for the integers $n$ in the ranges used.
   - (i) (Empty sum and splitting off the last term) $\sum_{n=1}^{0} t_n = 0$ and $\sum_{n=1}^{N+1} t_n = \sum_{n=1}^{N} t_n + t_{N+1}$. In particular $\sum_{n=1}^{1} t_n = t_1$.
   - (ii) (Dependence only on the terms in the range) If $t_n = u_n$ for all $n$ with $1 \le n \le N$, then $\sum_{n=1}^{N} t_n = \sum_{n=1}^{N} u_n$.
   - (iii) (Termwise sums, constant multiples, comparison) $\sum_{n=1}^{N} (t_n + u_n) = \sum_{n=1}^{N} t_n + \sum_{n=1}^{N} u_n$ and $\sum_{n=1}^{N} c\,t_n = c \sum_{n=1}^{N} t_n$. If $t_n \le u_n$ for all $n$ with $1 \le n \le N$, then $\sum_{n=1}^{N} t_n \le \sum_{n=1}^{N} u_n$.
   - (iv) (Range of values) If $1 \le k \le N$, then $0 \le t_k \le \sum_{n=1}^{N} t_n$. We have $\sum_{n=1}^{N} t_n < \infty$ exactly when all $t_n$ are real, and $\sum_{n=1}^{N} t_n = 0$ exactly when all $t_n$ are $0$.
   - (v) (Splitting) $\sum_{n=1}^{K+J} t_n = \sum_{n=1}^{K} t_n + \sum_{j=1}^{J} t_{K+j}$.
   - (vi) (At most one nonzero term) If $1 \le k \le N$ and $t_n = 0$ for all $n \ne k$, then $\sum_{n=1}^{N} t_n = t_k$.
   - (vii) (Double sums) If an element $t_{k,n}$ of $[0, \infty]$ is given for all integers $k$, $n$ with $1 \le k \le K$ and $1 \le n \le N$, then
     $$
     \sum_{k=1}^{K} \sum_{n=1}^{N} t_{k,n} = \sum_{n=1}^{N} \sum_{k=1}^{K} t_{k,n}.
     $$
     The left side is the sum whose $k$th term is $\sum_{n=1}^{N} t_{k,n}$, and the right side is the sum whose $n$th term is $\sum_{k=1}^{K} t_{k,n}$.
   - (viii) (Terms chosen by an injection) If $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$ is injective, then $\sum_{i=1}^{N} t_{\tau(i)} \le \sum_{i=1}^{Q} t_i$.
2. (Partial sums) The sequence whose $N$th term is $\sum_{n=1}^{N} a_n$ is increasing. For all natural numbers $N$, $k$ we have $\sum_{n=1}^{N} a_n \le \sum_{n=1}^{\infty} a_n$ and $a_k \le \sum_{n=1}^{\infty} a_n$. We have $\sum_{n=1}^{\infty} a_n = 0$ exactly when all $a_n$ are $0$. If $\sum_{n=1}^{\infty} a_n < \infty$, then every $a_n$ is real.
3. (Agreement with sums of series) Suppose every $a_n$ is real.
   - (i) $\sum_{n=1}^{\infty} a_n < \infty$ exactly when the series of $(a_n)$ converges, and then the $\sum_{n=1}^{\infty} a_n$ of this entry is the same real number as the sum of the series $\sum_{n=1}^{\infty} a_n$ of the entry "Notation for the Sum of a Series".
   - (ii) The series of $(a_n)$ diverges exactly when $\sum_{n=1}^{\infty} a_n = \infty$.
   - (iii) Likewise, for a natural number $m$ and nonnegative reals $t_n$ given for the integers $n \ge m$, $\sum_{n=m}^{\infty} t_n < \infty$ exactly when the series of $t_n$ converges in the sense of the entry "Notation for the Sum of a Series", and then the two symbols have the same value.

   Hence, for nonnegative real terms, "$\sum_{n=1}^{\infty} a_n = S$" ($S$ real) says the same thing in either entry's sense, and the value $\infty$ is used only in the sense of this entry.
4. (Tails) If $K$ is an integer $\ge 0$, then $\sum_{n=1}^{\infty} a_n = \sum_{n=1}^{K} a_n + \sum_{n=K+1}^{\infty} a_n$. In particular, if $a_n = 0$ for every $n > K$, then $\sum_{n=1}^{\infty} a_n = \sum_{n=1}^{K} a_n$.
5. (Termwise sums, constant multiples, comparison)
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} (a_n + b_n) &= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n, \\
   \sum_{n=1}^{\infty} c\,a_n &= c \sum_{n=1}^{\infty} a_n.
   \end{aligned}
   $$
   If $a_n \le b_n$ for every natural number $n$, then $\sum_{n=1}^{\infty} a_n \le \sum_{n=1}^{\infty} b_n$.
6. (Rearrangement) If $\sigma : \mathbb{N} \to \mathbb{N}$ is a bijection, then $\sum_{n=1}^{\infty} a_{\sigma(n)} = \sum_{n=1}^{\infty} a_n$.
7. (Sums over subsets) $A$, $B$ are subsets of $\mathbb{N}$.
   - (i) $\sum_{n \in \mathbb{N}} a_n = \sum_{n=1}^{\infty} a_n$, $\sum_{n \in \emptyset} a_n = 0$, and $\sum_{n \in \{k\}} a_n = a_k$ for every natural number $k$. For every integer $N \ge 0$, $\sum_{n \in \{1, \dots, N\}} a_n = \sum_{n=1}^{N} a_n$.
   - (ii) If $A \subseteq B$, then $\sum_{n \in A} a_n \le \sum_{n \in B} a_n$. Also $\sum_{n \in A} (a_n + b_n) = \sum_{n \in A} a_n + \sum_{n \in A} b_n$ and $\sum_{n \in A} c\,a_n = c \sum_{n \in A} a_n$, and if $a_n \le b_n$ for all $n \in A$, then $\sum_{n \in A} a_n \le \sum_{n \in A} b_n$.
   - (iii) (Index sequence listing $A$ in order) If $(p_j)$ is an index sequence in the sense of the entry "Subsequence" whose set of values $\{p_j : j \in \mathbb{N}\}$ is $A$, then $\sum_{n \in A} a_n = \sum_{j=1}^{\infty} a_{p_j}$.
   - (iv) (Number of elements) For the sequence all of whose terms are $1$: if $A$ is a finite set, then $\sum_{n \in A} 1 = |A|$ (the number of elements of the entry "The Number of Elements Is Uniquely Determined", regarded as a real number); if $A$ is an infinite set, then $\sum_{n \in A} 1 = \infty$.
:::

## 직관

항이 $0$ 이상이면 부분합은 줄어들지 않습니다. 그래서 부분합이 어떤 실수 아래에 머무르면 그 상한이 합이고([[sum-of-a-series]]의 (4)의 (ii)), 어떤 실수도 넘어서면 합을 $\infty$로 적으면 됩니다. 이 항목은 이 둘을 "부분합의 상한" 하나로 묶습니다. 상한은 [[extended-nonnegative-reals]]의 (5)에 의해 $[0, \infty]$의 어느 부분집합에나 있으므로, 이 합은 수렴을 따로 묻지 않아도 늘 정해집니다.

물통에 물을 한 바가지씩 붓는 일에 견줄 수 있습니다. 바가지마다 붓는 양 $a_n$은 $0$ 이상이므로 물높이는 줄지 않고, 물높이가 결국 닿는 곳(넘치면 "끝없이")이 합입니다. 붓는 순서를 바꾸어도 결국 같은 물을 다 붓는다는 것이 (6)이고, 이 비유가 맞는 까닭은 어느 바가지도 물을 퍼내지 않는다는 것, 곧 항이 $0$ 이상이라는 것입니다. 음의 항이 있으면 부분합의 상한은 합과 다를 수 있습니다(아래 반례).

$\sum_{n \in A} a_n$은 $A$에 든 번호의 항만 더하라는 뜻입니다. 이 항목은 이것을 "$A$ 밖의 항을 $0$으로 바꾸고 모두 더한다"로 정합니다. $A$의 원소를 작은 것부터 늘어놓은 첨자열이 있으면 그 순서대로 더해도 같다는 것이 (7)의 (iii)입니다.

## 성질의 증명

:::proof
[[extended-nonnegative-reals]]의 번호를 "확장 실수의 (3)"처럼 쓴다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**1의 증명.** (i) $N = 0$은 정의이다. 끝항 떼기: $t_1, \dots, t_{N+1}$이 모두 실수이면 $\sum_{n=1}^{N} t_n$도 실수이고, 양쪽은 [[finite-sum-of-reals]]의 (3)과 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (8)(범위에서만 정해진 항)에 의해 같다. $t_{N+1} = \infty$이면 왼쪽은 정의에 의해 $\infty$이고 오른쪽은 확장 실수의 (3)의 (i)에 의해 $\infty$이다. $n \le N$인 어떤 $n$에서 $t_n = \infty$이면 $\sum_{n=1}^{N} t_n = \infty$이므로 양쪽 모두 $\infty$이다. $N = 0$에 쓰면 $\sum_{n=1}^{1} t_n = 0 + t_1 = t_1$이다(확장 실수의 (3)의 (i)).

(ii) 정의의 두 경우는 $1 \le n \le N$의 항만으로 정해지고, 첫째 경우의 수는 [[finite-sum-of-reals]]의 (4)(범위에서만 정해진 항으로는 [[linearity-and-order-of-finite-sums]]의 (8))에 의해 그 항들만으로 정해진다.

(iii) 모두 $N$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $N = 0$이면 세 문장은 $0 = 0 + 0$, $0 = c \cdot 0$(확장 실수의 (4)의 (i)), $0 \le 0$이다. $N$에서 성립한다고 하자. (i)과 확장 실수의 (3)의 (i)(교환·결합)에 의해
$$
\begin{aligned}
&\sum_{n=1}^{N+1} (t_n + u_n) \\
&\quad = \Bigl(\sum_{n=1}^{N} t_n + \sum_{n=1}^{N} u_n\Bigr) \\
&\qquad + (t_{N+1} + u_{N+1}) \\
&\quad = \sum_{n=1}^{N+1} t_n + \sum_{n=1}^{N+1} u_n
\end{aligned}
$$
이다. 상수배는 (i)과 확장 실수의 (4)의 (ii)(분배법칙)에 의해 $c \sum_{n=1}^{N+1} t_n = c \sum_{n=1}^{N} t_n + c\,t_{N+1} = \sum_{n=1}^{N} c\,t_n + c\,t_{N+1} = \sum_{n=1}^{N+1} c\,t_n$이다. 비교는 귀납 가정, $t_{N+1} \le u_{N+1}$, 확장 실수의 (3)의 (ii)의 둘째 문장이다.

(iv) $0 \le t_k$와 $0 \le \sum$는 확장 실수의 (2)의 (iv)이다. "$1 \le k \le N$이면 $t_k \le \sum_{n=1}^{N} t_n$"을 $N$에 대한 귀납법으로 보인다. $N = 0$이면 그런 $k$가 없다. $N$에서 성립한다고 하자. $k \le N$이면 귀납 가정과 확장 실수의 (3)의 (ii)의 셋째 문장에 의해 $t_k \le \sum_{n=1}^{N} t_n \le \sum_{n=1}^{N} t_n + t_{N+1}$이고, $k = N + 1$이면 같은 문장과 교환법칙에 의해 $t_{N+1} \le t_{N+1} + \sum_{n=1}^{N} t_n$이다. (i)에 의해 둘 다 $\sum_{n=1}^{N+1} t_n$ 이하이다. 나머지 두 문장도 $N$에 대한 귀납법으로, (i)과 확장 실수의 (3)의 (iii)을 쓰면 된다: $\sum_{n=1}^{N+1} t_n = \sum_{n=1}^{N} t_n + t_{N+1}$이 $\infty$가 아닌 것(또는 $0$인 것)은 정확히 두 덧셈항이 그런 것일 때이다.

(v) $J$에 대한 귀납법(시작점 $0$)이다. $J = 0$이면 오른쪽은 $\sum_{n=1}^{K} t_n + 0$이므로 확장 실수의 (3)의 (i)에 의해 성립한다. $J$에서 성립하면 (i)과 결합법칙에 의해
$$
\begin{aligned}
&\sum_{n=1}^{K+J+1} t_n \\
&\quad = \Bigl(\sum_{n=1}^{K} t_n + \sum_{j=1}^{J} t_{K+j}\Bigr) + t_{K+(J+1)} \\
&\quad = \sum_{n=1}^{K} t_n + \sum_{j=1}^{J+1} t_{K+j}
\end{aligned}
$$
이다.

(vi) $N$에 대한 귀납법(시작점 $k$)이다. $N = k$이면 (i)에 의해 $\sum_{n=1}^{k} t_n = \sum_{n=1}^{k-1} t_n + t_k$이고, $n \le k - 1$에서 $t_n = 0$이므로 (iv)에 의해 $\sum_{n=1}^{k-1} t_n = 0$이며 $0 + t_k = t_k$이다. $N \ge k$에서 성립하면 $N + 1 \ne k$이므로 $t_{N+1} = 0$이고, (i)에 의해 $\sum_{n=1}^{N+1} t_n = t_k + 0 = t_k$이다.

(vii) $K$에 대한 귀납법(시작점 $0$)이다. $K = 0$이면 왼쪽은 빈 합 $0$이고, 오른쪽의 $n$번째 항은 빈 합 $0$이므로 (iv)에 의해 오른쪽도 $0$이다. $K$에서 성립한다고 하자. (i)을 바깥 합과 안쪽 합에 쓰고, 귀납 가정과 (iii)의 항별 합을 쓰면
$$
\begin{aligned}
&\sum_{k=1}^{K+1} \sum_{n=1}^{N} t_{k,n} \\
&\quad = \sum_{n=1}^{N} \sum_{k=1}^{K} t_{k,n} + \sum_{n=1}^{N} t_{K+1,n} \\
&\quad = \sum_{n=1}^{N} \Bigl(\sum_{k=1}^{K} t_{k,n} + t_{K+1,n}\Bigr) \\
&\quad = \sum_{n=1}^{N} \sum_{k=1}^{K+1} t_{k,n}
\end{aligned}
$$
이다. 마지막 등식은 각 $n$에서 (i)에 의해 괄호 안이 $\sum_{k=1}^{K+1} t_{k,n}$이므로 (ii)에 의해 성립한다.

(viii) $t_{\tau(i)} = \infty$인 $i$가 있으면 $\tau(i) \le Q$이므로 오른쪽이 $\infty$이고 확장 실수의 (2)의 (iv)에 의해 성립한다. $t_i = \infty$인 $i \le Q$가 있어도 오른쪽이 $\infty$이다. 남은 경우는 $t_1, \dots, t_Q$가 모두 실수인 경우이다. 이때 $i \le Q$이면 $t_i$, $Q < i$이면 $0$인 수열 $(y_i)$는 $1 \le i \le Q$에서 $0 \le y_i$이므로 [[rearranging-a-finite-sum|유한 합의 재배열]]의 (3)에 의해 $\sum_{i=1}^{N} y_{\tau(i)} \le \sum_{i=1}^{Q} y_i$이다. $\tau(i) \le Q$이므로 $y_{\tau(i)} = t_{\tau(i)}$이고, 양쪽은 정의(첫째 경우)와 (ii)에 의해 진술의 두 합이다.

**2의 증명.** (1)의 (i)과 확장 실수의 (3)의 (ii)의 셋째 문장에 의해 $\sum_{n=1}^{N} a_n \le \sum_{n=1}^{N} a_n + a_{N+1} = \sum_{n=1}^{N+1} a_n$이다. 둘째 문장의 앞부분은 확장 실수의 (7)의 (i)이고, 뒷부분은 (1)의 (iv)에서 $a_k \le \sum_{n=1}^{k} a_n$과 추이성이다. 모든 $a_n$이 $0$이면 (1)의 (iv)에 의해 모든 부분합이 $0$이고 그 상한은 $0$이다. 거꾸로 합이 $0$이면 $0 \le a_k \le 0$이므로 확장 실수의 (2)의 (ii)에 의해 $a_k = 0$이다. 합이 $\infty$보다 작으면 $a_k \le \sum_{n=1}^{\infty} a_n < \infty$와 확장 실수의 (2)의 (iii), (iv)에 의해 $a_k$는 실수이다.

**3의 증명.** (i) 모든 항이 실수이므로 부분합 $\sum_{n=1}^{N} a_n$은 정의의 첫째 경우로 실수의 유한 합이다. [[sum-of-a-series|급수의 합의 기호]]의 (4)의 (ii)를 $m = 1$에 쓰면, $(a_n)$의 급수가 수렴하는 것은 정확히 어떤 실수 $B$가 $0$ 이상인 모든 정수 $k$에서 $\sum_{n=1}^{k} a_n \le B$를 만족할 때이고, 이때 급수의 합은 $E = \{\sum_{n=1}^{k} a_n : k \in \mathbb{N}\}$의 실수의 상한이다. $k = 0$의 부분합은 $0$이고 $0 \le \sum_{n=1}^{1} a_n$이므로, 그런 $B$가 있는 것은 정확히 $E$가 위로 유계일 때이다. $E$는 $[0, \infty)$의 공집합이 아닌 부분집합이므로 확장 실수의 (5)의 (iv)에 의해 $E$가 위로 유계인 것은 정확히 $\sup E < \infty$일 때이고, 그 (5)의 (iii)에 의해 이때 $\sup E$는 실수의 상한과 같다. $\sup E$가 이 항목의 $\sum_{n=1}^{\infty} a_n$이다.

(ii) 확장 실수의 (2)의 (iv)에 의해 $\sum_{n=1}^{\infty} a_n$은 $\infty$보다 작거나 $\infty$와 같고 둘 다는 아니다. (i)과 [[series-and-partial-sums]]의 정의(수렴하지 않으면 발산)에서 나온다.

(iii) 두 기호 모두 정의에 의해 1부터 다시 번호 붙인 수열 $(t_{j+m-1})$의 합이므로 (i)을 그 수열에 쓴 것이다.

**4의 증명.** $s_N = \sum_{n=1}^{N} a_n$, $T_J = \sum_{j=1}^{J} a_{K+j}$로 두자. $T_J$는 $j$번째 항이 $a_{j+K}$인 원소열의 부분합이고, 그 원소열은 $n \ge K + 1$에서 정해진 항 $a_n$을 1부터 다시 번호 붙인 것($j + (K + 1) - 1 = j + K$)이므로 정의에 의해 $\lim_{J \to \infty} T_J = \sum_{n=K+1}^{\infty} a_n$이다. (1)의 (v)에 의해 모든 자연수 $J$에서 $s_{K+J} = s_K + T_J$이다. $J$에서의 값이 $K + J$인 함수는 [[subsequence]]의 (4)(꼬리와 수열 자신)에 의해 첨자열이므로 확장 실수의 (7)의 (v)에 의해 $\lim_{J} s_{K+J} = \lim_{N} s_N = \sum_{n=1}^{\infty} a_n$이다. 한편 확장 실수의 (7)의 (iv)를 모든 항이 $s_K$인 원소열과 $(T_J)$에 쓰면 $\lim_{J} (s_K + T_J) = s_K + \sum_{n=K+1}^{\infty} a_n$이다. 두 원소열이 같으므로 결론이 나온다. $K$보다 큰 $n$에서 $a_n = 0$이면 $(a_{j+K})$의 모든 항이 $0$이므로 (2)에 의해 꼬리의 합이 $0$이다.

**5의 증명.** (1)의 (iii)에 의해 부분합끼리 $\sum_{n=1}^{N} (a_n + b_n) = \sum_{n=1}^{N} a_n + \sum_{n=1}^{N} b_n$, $\sum_{n=1}^{N} c\,a_n = c \sum_{n=1}^{N} a_n$이고 $a_n \le b_n$이면 $\sum_{n=1}^{N} a_n \le \sum_{n=1}^{N} b_n$이다. 부분합의 원소열은 (2)에 의해 단조증가이므로 확장 실수의 (7)의 (iv)에 의해 극한에서 같은 등식과 부등식이 성립한다.

**6의 증명.** $a_k = \infty$인 $k$가 있다고 하자. (2)에 의해 $\sum_{n=1}^{\infty} a_n = \infty$이다. $\sigma$는 전사이므로([[injective-surjective-bijective|단사, 전사, 전단사]]) $\sigma(j) = k$인 자연수 $j$가 있고 $a_{\sigma(j)} = a_k = \infty$이다. (2)를 $(a_{\sigma(n)})$에 쓰면 그 합도 $\infty$이다. 모든 $a_n$이 실수라 하자. 그러면 $(a_n)$은 모든 항이 $0$ 이상인 수열이고 $(a_{\sigma(n)})$은 [[rearrangement-of-absolutely-convergent-series|절대수렴하는 급수의 재배열]]의 뜻의 재배열이다. $\sum_{n=1}^{\infty} a_n < \infty$이면 (3)의 (i)에 의해 $(a_n)$의 급수가 수렴하고, 그 항목의 (2)에 의해 재배열의 급수도 수렴하며 합이 같으므로 다시 (3)의 (i)에 의해 결론이 나온다. $\sum_{n=1}^{\infty} a_n = \infty$이면 (3)의 (ii)에 의해 $(a_n)$의 급수가 발산하고, 그 항목의 (3)에 의해 재배열의 급수도 발산하므로 (3)의 (ii)에 의해 그 합도 $\infty$이다.

**7의 증명.** 원소열 $(a_n)$을 $A$ 밖에서 $0$으로 채운 원소열을 $(a^A_n)$으로 쓴다.

(i) $A = \mathbb{N}$이면 $a^{\mathbb{N}}_n = a_n$이다. $A = \emptyset$이면 모든 항이 $0$이므로 (2)에 의해 합이 $0$이다. $A = \{k\}$이면 $n \ne k$에서 $a^A_n = 0$이므로 (4)에 의해 $\sum_{n \in \{k\}} a_n = \sum_{n=1}^{k} a^A_n$이고, (1)의 (vi)에 의해 이것은 $a^A_k = a_k$이다. $A = \{1, \dots, N\}$이면 $N$보다 큰 $n$에서 $a^A_n = 0$이므로 (4)에 의해 $\sum_{n \in A} a_n = \sum_{n=1}^{N} a^A_n$이고, $1 \le n \le N$에서 $a^A_n = a_n$이므로 (1)의 (ii)에 의해 이것은 $\sum_{n=1}^{N} a_n$이다($N = 0$이면 $A = \emptyset$이고 양쪽은 $0$이다).

(ii) $A \subseteq B$이면 모든 $n$에서 $a^A_n \le a^B_n$이다. $n \in A$이면 둘 다 $a_n$이고, $n \in B - A$이면 $0 \le a_n$이며, $n \notin B$이면 둘 다 $0$이다. (5)의 비교에 의해 결론이 나온다. 또 $(a_n + b_n)$을 $A$ 밖에서 $0$으로 채운 원소열은 $(a^A_n + b^A_n)$이고($0 + 0 = 0$), $(c\,a_n)$의 것은 $(c\,a^A_n)$이며(확장 실수의 (4)의 (i)에 의해 $c \cdot 0 = 0$), 모든 $n \in A$에서 $a_n \le b_n$이면 모든 $n$에서 $a^A_n \le b^A_n$이다. 따라서 (5)에서 나머지가 나온다.

(iii) $(p_j)$는 순증가이므로 단사이다($i \ne j$이면 $i < j$이거나 $j < i$이고, 각각 $p_i < p_j$, $p_j < p_i$이다). $S = \sum_{n \in A} a_n$, $R = \sum_{j=1}^{\infty} a_{p_j}$로 두자.

$R \le S$: 자연수 $J$를 잡는다. $1 \le j \le J$이면 $p_j \le p_J$이므로 $j$에서의 값이 $p_j$인 함수 $\tau : \{1, \dots, J\} \to \{1, \dots, p_J\}$는 단사이다. $p_j \in A$이므로 $a_{p_j} = a^A_{p_j}$이고, (1)의 (ii), (viii)에 의해 $\sum_{j=1}^{J} a_{p_j} = \sum_{j=1}^{J} a^A_{\tau(j)} \le \sum_{n=1}^{p_J} a^A_n \le S$이다. 모든 $J$에서 성립하므로 $R \le S$이다.

$S \le R$: 자연수 $N$을 잡는다. $n \le N$이고 $n \in A$이면 $n = p_j$인 자연수 $j$가 정확히 하나 있고(단사), [[subsequence]]의 (1)에 의해 $j \le p_j = n \le N$이다. 그래서 함수 $\tau : \{1, \dots, N\} \to \{1, \dots, 2N\}$를, $n \in A$이면 $p_j = n$인 그 $j$, $n \notin A$이면 $N + n$으로 정한다($1 \le n \le N$이므로 $N < N + n \le 2N$이다. 값은 [[recursion-theorem|재귀 정리]]의 (1)의 "이미 정해진 대상"이다). $\tau$는 단사이다. 두 값이 모두 $N$ 이하이면 같은 $j$에서 $n = p_j$이므로 $n$이 같고, 모두 $N$보다 크면 $N + n = N + n'$에서 $n = n'$이며, 하나만 $N$ 이하일 수는 없다. $1 \le i \le N$이면 $u_i = a_{p_i}$, $N < i \le 2N$이면 $u_i = 0$으로 두면, 모든 $n \le N$에서 $a^A_n = u_{\tau(n)}$이다($n \in A$이면 $a^A_n = a_n = a_{p_j} = u_j$이고, $n \notin A$이면 둘 다 $0$이다). (1)의 (ii), (viii), (v), (iv)에 의해
$$
\begin{aligned}
\sum_{n=1}^{N} a^A_n &= \sum_{n=1}^{N} u_{\tau(n)} \le \sum_{i=1}^{2N} u_i \\
&= \sum_{i=1}^{N} a_{p_i} + 0 \le R
\end{aligned}
$$
이다. 모든 $N$에서 성립하므로 $S \le R$이다. 확장 실수의 (2)의 (ii)에 의해 $S = R$이다.

(iv) 모든 항이 $1$인 원소열을 $A$ 밖에서 $0$으로 채운 원소열을 $(b_n)$이라 하고, $0$ 이상인 정수 $M$마다 $S_M = \{n \in A : n \le M\}$으로 둔다. 원소의 개수는 [[number-of-elements-is-unique|원소의 개수의 유일성]]의 것이고, 정수는 실수로 본다.

*(가) 모든 $M$에서 $S_M$은 유한집합이고 $\sum_{n=1}^{M} b_n = |S_M|$이다.* $M$에 대한 귀납법(시작점 $0$)이다. [[finite-set]]의 (F1)에 의해 $\{1, \dots, 0\} = \emptyset$이므로 $S_0 = \emptyset$이고, (F2)에 의해 $|S_0| = 0$이며, 왼쪽은 빈 합 $0$이다. $M$에서 성립한다고 하자. (F1)에 의해 $\{1, \dots, M+1\} = \{1, \dots, M\} \cup \{M+1\}$이고 $M + 1 \notin S_M$이다. $M + 1 \notin A$이면 $S_{M+1} = S_M$이고 $b_{M+1} = 0$이다. $M + 1 \in A$이면 $S_{M+1} = S_M \cup \{M+1\}$이므로 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $|S_{M+1}| = |S_M| + 1$이고 $b_{M+1} = 1$이다. 어느 경우든 (1)의 (i)에 의해 $\sum_{n=1}^{M+1} b_n = |S_M| + b_{M+1} = |S_{M+1}|$이다.

*$A$가 유한집합인 경우.* $A = \emptyset$이면 (i)에 의해 합은 $0 = |\emptyset|$이다. $A \ne \emptyset$이면 [[maximum-of-finite-set|유한집합의 최댓값과 최솟값]]의 (1)에 의해 $A$의 최댓값 $M$이 있고 $M \in A \subseteq \mathbb{N}$이다. $A$의 모든 원소는 $M$ 이하이므로 $S_M = A$이고, $M$보다 큰 $n$은 $A$에 속하지 않으므로 $b_n = 0$이다. (4)와 (가)에 의해 $\sum_{n \in A} 1 = \sum_{n=1}^{M} b_n = |S_M| = |A|$이다.

*$A$가 무한집합인 경우.* 먼저 $0$ 이상인 모든 정수 $k$에 대하여 $|S_M| \ge k$인 $0$ 이상의 정수 $M$이 있음을 $k$에 대한 귀납법으로 보인다. $k = 0$이면 $M = 0$이다. $|S_M| \ge k$인 $M$이 있다고 하자. $A \subseteq \{1, \dots, M\}$이라면 (F2)와 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $A$가 유한집합이 되어 어긋나므로, $n \notin \{1, \dots, M\}$인 $n \in A$가 있다. $n$은 자연수이므로 (Z5)와 (Z1)에 의해 $M < n$, 곧 $M \le n - 1$이다. (2)에 의해 부분합은 단조증가하므로(빈 합 $0$은 어느 부분합보다 크지 않다) (가)와 (1)의 (i)에 의해 $|S_n| = \sum_{i=1}^{n-1} b_i + b_n \ge |S_M| + 1 \ge k + 1$이다.

이제 실수 $B$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < k$인 자연수 $k$가 있고, 위에 의해 어떤 $M$에서 부분합 $\sum_{n=1}^{M} b_n = |S_M| \ge k > B$이다. 따라서 부분합 전체는 위로 유계가 아니고 확장 실수의 (5)의 (iv)에 의해 그 상한, 곧 $\sum_{n \in A} 1$은 $\infty$이다. $\blacksquare$
:::

## 예시와 반례

:::example[짝수 번째 항만 더한 합]
$a_n = (1/2)^n$, $A = \{2, 4, 6, \dots\} = \{2j : j \in \mathbb{N}\}$이라 하자. $p_j = 2j$는 $p_j < p_{j+1}$이므로 [[subsequence]]의 (2)에 의해 첨자열이고 그 값의 집합이 $A$입니다. (7)의 (iii)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii)에 의해
$$
\sum_{n \in A} \Bigl(\frac{1}{2}\Bigr)^{n} = \sum_{j=1}^{\infty} \Bigl(\frac{1}{2}\Bigr)^{2j} = \sum_{j=1}^{\infty} \Bigl(\frac{1}{4}\Bigr)^{j}
$$
입니다. 오른쪽의 항은 실수이고 [[sum-of-a-series]]의 (6)의 (iii)에 의해 그 급수는 수렴하여 합이 $(1/4)/(1 - 1/4) = 1/3$입니다. (3)의 (i)에 의해 이 항목의 합도 $1/3$입니다. 같은 방식으로 $\sum_{n=1}^{\infty} (1/2)^n = (1/2)/(1 - 1/2) = 1$이고, (7)의 (ii)의 $A \subseteq \mathbb{N}$과 맞게 $1/3 \le 1$입니다.
:::

:::example[어느 항이 $\infty$인 원소열의 꼬리]
$a_3 = \infty$이고 $n \ne 3$이면 $a_n = (1/2)^n$인 원소열을 봅니다. (2)에 의해 $\sum_{n=1}^{\infty} a_n = \infty$입니다. (4)를 $K = 3$에 쓰면 $\sum_{n=1}^{3} a_n = \infty$이고 꼬리의 합은
$$
\sum_{n=4}^{\infty} a_n = \sum_{j=1}^{\infty} \Bigl(\frac{1}{2}\Bigr)^{j+3} = \frac{(1/2)^4}{1 - 1/2} = \frac{1}{8}
$$
입니다(두 번째 등식은 [[sum-of-a-series]]의 (6)의 (iii)을 $m = 4$에 쓰고 (3)의 (iii)으로 옮긴 것). 그래서 $\infty = \infty + 1/8$로 (4)가 맞습니다. 꼬리의 합이 실수여도 앞부분에 $\infty$가 있으면 전체는 $\infty$입니다.
:::

:::counterexample[음의 항이 있으면 부분합의 상한과 급수의 합이 다를 수 있다]
$x_1 = 1$, $x_2 = -1$이고 $n \ge 3$이면 $x_n = 0$인 수열은 $[0, \infty]$의 원소열이 아니므로 이 항목의 합이 정해지지 않습니다. 이 수열의 부분합은 $1, 0, 0, 0, \dots$이므로 $N \ge 2$이면 $0$이고, $N \ge 2$에서 부분합과 $0$의 차가 $0$이므로 [[limit-of-sequence]]의 정의에 의해 급수는 수렴하여 합이 $0$입니다. 그런데 부분합 전체의 상한은 $1$입니다. 이 항목의 정의 "부분합의 상한"을 이 수열에 그대로 쓰면 급수의 합과 다른 값이 나옵니다. (3)의 일치는 항이 $0$ 이상이어서 부분합이 단조증가이기 때문에 성립합니다.
:::

## 확인 질문

:::check[모든 항이 $1$인 원소열의 합은 무엇이고, 급수와 멱급수 강의의 기호로는 어떻게 되는가?]
$\infty$입니다. $N$번째 부분합은 [[linearity-and-order-of-finite-sums]]의 (2)에 의해 $N$이고, 부분합의 집합 $\mathbb{N}$은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 위로 유계가 아니므로 [[extended-nonnegative-reals]]의 (5)의 (iv)에 의해 상한이 $\infty$입니다. (3)의 (ii)에 의해 이 수열의 급수는 발산하므로 [[sum-of-a-series]]의 기호 $\sum_{n=1}^{\infty} 1$은 그 항목의 뜻으로는 쓰지 않습니다. 이 항목의 뜻으로는 $\sum_{n=1}^{\infty} 1 = \infty$라고 씁니다.
:::

:::check[$\sum_{n=1}^{\infty} a_n < \infty$이면 모든 $a_n$은 실수인가? 거꾸로 모든 $a_n$이 실수이면 $\sum_{n=1}^{\infty} a_n < \infty$인가?]
앞의 것은 참입니다. (2)의 마지막 문장입니다. 뒤의 것은 거짓일 수 있습니다. 앞의 확인 질문의 원소열은 모든 항이 실수 $1$이지만 합이 $\infty$입니다.
:::
