---
title: 양의 부분과 음의 부분
title_en: Positive and Negative Parts
aliases: [양의 부분, 음의 부분, 양의 부분 수열, 음의 부분 수열, 번호를 차례로 늘어놓기, 차례로 늘어놓은 첨자열, positive part, negative part, enumerating a set of indices]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수 x 의 양의 부분 max{x, 0} 과 음의 부분 max{−x, 0} 을 정의하고, 수렴하는 급수가 절대수렴하는지를 양의 부분 수열과 음의 부분 수열의 급수로 판정한다. 위로 유계가 아닌 자연수의 집합을 크기순으로 늘어놓는 첨자열을 정렬 원리와 재귀 정리로 정하고, 조건수렴하는 급수에서 0 이상인 항의 번호열과 음의 항의 번호열이 갖는 성질을 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, subsequence, tail-of-a-sequence, series-and-partial-sums, linearity-of-series, tail-of-a-series, comparison-test, absolute-convergence, terms-of-convergent-series-tend-to-zero, alternating-series-test, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, sum-of-a-series]
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.3절 Rearrangements, Example 2.6.4 (p.103). 2.6.6절 Exercise 2.6.3 (p.110)
    checked: original
    note: "출처 Example 2.6.4(p.103)는 교대 조화급수의 홀수 번째 항의 급수와 짝수 번째 항의 급수가 각각 ∞ 와 −∞ 로 발산한다고 적고 증명을 독자에게 넘긴다('prove this!'). 이 항목의 (3)과 (5)의 (iv)는 일반 조건수렴 급수에 대해 이것을 증명한 꼴이고, 출처가 발산을 '= ∞' 로 쓰는 것을 '부분합 수열이 위로 유계가 아니다'와 '모든 M 에 K 가 있다' 꼴로 바꾸었다. 출처는 수열의 양의 부분과 음의 부분에 이름을 붙이지 않는다(검색어 'positive part', 'negative part'(책 전체 0건), 'max{'(1.3절 Exercise 1.3.2 의 max{x, y} 와 증명 안의 max{M1, M2} 꼴 7건), 'odd terms', 'even terms'(Example 2.6.4 만)). (4)의 '차례로 늘어놓기'와 (5)의 두 번호열은 출처 Example 2.6.4 의 '아직 쓰지 않은 가장 작은 홀수(짝수)'를 이 사이트가 첨자열로 바꾼 것이다. 예시 '교대 조화급수의 두 번호열'은 Example 2.6.4 와 같은 급수에서 같은 홀수·짝수 번째 항을 다룬다(이 사이트의 교대 조화급수는 alternating-series-test 의 (−1)ⁿ n⁻¹ 이어서 0 이상인 항이 짝수 번째이다). Exercise 2.6.3(p.110)은 일반 조건수렴 급수의 재배열을 묻는 연습문제이고, 이 항목의 (5)는 그 증명에 쓸 성질을 모은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리만 재배열의 재귀 상태와 단계 구성 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
두 수의 최대 $\max\{a, b\}$와 절댓값은 [[absolute-value]]의 것이고, 수열, 위로 유계, 값으로 정한 수열은 [[sequence]]의 것이며, 첨자열과 부분수열은 [[subsequence]]의 것이다. 부분합 수열, 급수의 수렴과 발산은 [[series-and-partial-sums]], 절대수렴과 조건수렴은 [[absolute-convergence]], 급수의 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]], 유한 합 $\sum_{k=m}^{n}$은 [[finite-sum-of-reals]]의 것이다. 정수의 집합의 최소 원소·최대 원소와 정수의 순서는 [[well-ordering-principle]]의 정의와 [[prime-number]]의 (Z1)의 것이다.

**양의 부분과 음의 부분.** 실수 $x$에 대하여 $\max\{x, 0\}$을 $x$의 **양의 부분**(positive part), $\max\{-x, 0\}$을 $x$의 **음의 부분**(negative part)이라 한다. 음의 부분은 이름과 달리 $0$ 이상인 수이다(아래 (1)). 수열 $(x_n)$에 대하여 $n$번째 항이 $x_n$의 양의 부분인 수열을 $(x_n)$의 **양의 부분 수열**, $n$번째 항이 $x_n$의 음의 부분인 수열을 $(x_n)$의 **음의 부분 수열**이라 한다([[sequence]]의 (1)). 이 항목에서는 두 수열을 $(a_n)$, $(b_n)$으로 쓴다. 곧 모든 자연수 $n$에서 $a_n = \max\{x_n, 0\}$, $b_n = \max\{-x_n, 0\}$이다. 이 두 글자는 이 항목 안에서만 쓰는 이름이다.

**차례로 늘어놓은 첨자열.** $A$를 $\mathbb{N}$의 부분집합이라 하고, 모든 자연수 $m$에 대하여 $m < n$인 $n \in A$가 있다고 하자. 그러면 $A$는 공집합이 아니고, 자연수 $m$마다 $\{n \in A : m < n\}$은 $\mathbb{N}$의 공집합이 아닌 부분집합이므로 [[well-ordering-principle|정렬 원리]]에 의해 최소 원소를 정확히 하나 갖는다. 아래 (4)에 의해, 첨자열 $(p_k)$로서 다음 두 조건을 만족하는 것이 정확히 하나 있다.

- $p_1$은 $A$의 최소 원소이다.
- 모든 자연수 $k$에서 $p_{k+1}$은 $\{n \in A : p_k < n\}$의 최소 원소이다.

이 첨자열을 **$A$를 차례로 늘어놓은 첨자열**이라 한다.

다음이 성립한다. 아래에서 $(x_n)$은 수열이고 $(a_n)$, $(b_n)$은 그 양의 부분 수열과 음의 부분 수열이다.

1. (실수의 양의 부분과 음의 부분) 실수 $x$의 양의 부분을 $a$, 음의 부분을 $b$라 하면
   $$
   \begin{gathered}
   x = a - b, \qquad |x| = a + b, \\
   0 \le a \le |x|, \qquad 0 \le b \le |x|
   \end{gathered}
   $$
   이다. $0 \le x$이면 $a = x$이고 $b = 0$이다. $x < 0$이면 $a = 0$이고 $b = -x$이다. 특히 $x = 0$이면 $a = b = 0$이다.
2. (수렴하는 급수의 양의 부분과 음의 부분) $(x_n)$의 급수가 수렴한다고 하자. 다음 세 명제는 서로 동치이다. (i) $(x_n)$의 급수가 절대수렴한다. (ii) $(a_n)$의 급수가 수렴한다. (iii) $(b_n)$의 급수가 수렴한다. 이것들이 성립하면
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_n &= \sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n, \\
   \sum_{n=1}^{\infty} |x_n| &= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n
   \end{aligned}
   $$
   이다.
3. (조건수렴) $(x_n)$의 급수가 조건수렴하면 $(a_n)$의 급수와 $(b_n)$의 급수는 둘 다 발산하고, $(a_n)$의 부분합 수열과 $(b_n)$의 부분합 수열은 둘 다 위로 유계가 아니다.
4. (번호를 차례로 늘어놓기) $A$가 위의 가정을 만족하는 $\mathbb{N}$의 부분집합이면, 위의 조건을 만족하는 첨자열 $(p_k)$가 정확히 하나 있고 다음이 성립한다.
   - (i) 모든 자연수 $k$에서 $p_k \in A$이다.
   - (ii) $A$의 모든 원소는 어떤 자연수 $k$에 대하여 $p_k$이다. 곧 $\{p_k : k \in \mathbb{N}\} = A$이다.
   - (iii) 자연수 $n$이 $n < p_1$이거나, 어떤 자연수 $k$에 대하여 $p_k < n < p_{k+1}$이면 $n \notin A$이다.
   - (iv) 첨자열 $(p'_k)$가 $\{p'_k : k \in \mathbb{N}\} = A$를 만족하면 $(p'_k) = (p_k)$이다.
5. (조건수렴하는 급수의 두 번호열) $(x_n)$의 급수가 조건수렴한다고 하고 $A_+ = \{n \in \mathbb{N} : 0 \le x_n\}$, $A_- = \{n \in \mathbb{N} : x_n < 0\}$으로 두자.
   - (i) $A_+$와 $A_-$는 둘 다 위의 가정을 만족한다. 곧 모든 자연수 $m$에 대하여 $m < n$인 $n \in A_+$가 있고 $m < n'$인 $n' \in A_-$가 있다. 아래에서 $A_+$를 차례로 늘어놓은 첨자열을 $(p_k)$, $A_-$를 차례로 늘어놓은 첨자열을 $(q_k)$라 한다.
   - (ii) 모든 자연수 $n$에 대하여 "$n = p_k$인 자연수 $k$가 있다"와 "$n = q_k$인 자연수 $k$가 있다" 가운데 정확히 하나가 성립한다. 또 자연수 $k$, $k'$에 대하여 $p_k = p_{k'}$이면 $k = k'$이고, $q_k = q_{k'}$이면 $k = k'$이다.
   - (iii) 모든 자연수 $k$에서 $0 \le x_{p_k}$이고 $x_{q_k} < 0$이다. 부분수열 $(x_{p_k})$와 $(x_{q_k})$는 둘 다 $0$으로 수렴한다.
   - (iv) 모든 실수 $M$과 $0$ 이상인 모든 정수 $K_0$에 대하여, $K_0 \le K$이고
     $$
     \sum_{k=K_0+1}^{K} x_{p_k} > M
     $$
     인 정수 $K$가 있고, $K_0 \le K'$이고 $\sum_{k=K_0+1}^{K'} x_{q_k} < -M$인 정수 $K'$이 있다.
:::

:::english
The maximum $\max\{a, b\}$ of two numbers and absolute values are as in the entry on absolute value; sequences, being bounded above, and sequences defined by their values are as in the entry on sequences; index sequences and subsequences are as in the entry on subsequences. Sequences of partial sums and convergence and divergence of series are as in the entry on series and partial sums, absolute and conditional convergence as in the entry on absolute convergence, the notation $\sum_{n=1}^{\infty}$ for sums of series as in the entry on the notation for the sum of a series, and finite sums $\sum_{k=m}^{n}$ as in the entry on finite sums of reals. Least and greatest elements of sets of integers and the order of the integers are as in the entry on the well-ordering principle and (Z1) of the entry on prime numbers.

**Positive and negative parts.** For a real number $x$, $\max\{x, 0\}$ is called the **positive part** of $x$, and $\max\{-x, 0\}$ the **negative part** of $x$. Despite its name, the negative part is a number $\ge 0$ (see (1) below). For a sequence $(x_n)$, the sequence whose $n$th term is the positive part of $x_n$ is called the **sequence of positive parts** of $(x_n)$, and the sequence whose $n$th term is the negative part of $x_n$ the **sequence of negative parts** of $(x_n)$. In this entry these two sequences are written $(a_n)$ and $(b_n)$; that is, $a_n = \max\{x_n, 0\}$ and $b_n = \max\{-x_n, 0\}$ for every natural number $n$. These two letters are names used only within this entry.

**The index sequence listing a set in order.** Let $A$ be a subset of $\mathbb{N}$ such that for every natural number $m$ there is $n \in A$ with $m < n$. Then $A$ is nonempty, and for each natural number $m$ the set $\{n \in A : m < n\}$ is a nonempty subset of $\mathbb{N}$, so by the well-ordering principle it has exactly one least element. By (4) below, there is exactly one index sequence $(p_k)$ satisfying the following two conditions.

- $p_1$ is the least element of $A$.
- For every natural number $k$, $p_{k+1}$ is the least element of $\{n \in A : p_k < n\}$.

This index sequence is called **the index sequence listing $A$ in order**.

The following hold. Below, $(x_n)$ is a sequence and $(a_n)$, $(b_n)$ are its sequences of positive and negative parts.

1. (Positive and negative parts of a real number) If $a$ is the positive part and $b$ the negative part of a real number $x$, then
   $$
   \begin{gathered}
   x = a - b, \qquad |x| = a + b, \\
   0 \le a \le |x|, \qquad 0 \le b \le |x| .
   \end{gathered}
   $$
   If $0 \le x$, then $a = x$ and $b = 0$. If $x < 0$, then $a = 0$ and $b = -x$. In particular, if $x = 0$, then $a = b = 0$.
2. (Positive and negative parts of a convergent series) Suppose the series of $(x_n)$ converges. The following three statements are equivalent: (i) the series of $(x_n)$ converges absolutely; (ii) the series of $(a_n)$ converges; (iii) the series of $(b_n)$ converges. When they hold,
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_n &= \sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n, \\
   \sum_{n=1}^{\infty} |x_n| &= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n .
   \end{aligned}
   $$
3. (Conditional convergence) If the series of $(x_n)$ converges conditionally, then the series of $(a_n)$ and the series of $(b_n)$ both diverge, and the sequences of partial sums of $(a_n)$ and of $(b_n)$ are both unbounded above.
4. (Listing indices in order) If $A$ is a subset of $\mathbb{N}$ satisfying the assumption above, then there is exactly one index sequence $(p_k)$ satisfying the conditions above, and the following hold.
   - (i) $p_k \in A$ for every natural number $k$.
   - (ii) Every element of $A$ equals $p_k$ for some natural number $k$; that is, $\{p_k : k \in \mathbb{N}\} = A$.
   - (iii) If a natural number $n$ satisfies $n < p_1$, or $p_k < n < p_{k+1}$ for some natural number $k$, then $n \notin A$.
   - (iv) If an index sequence $(p'_k)$ satisfies $\{p'_k : k \in \mathbb{N}\} = A$, then $(p'_k) = (p_k)$.
5. (The two index sequences of a conditionally convergent series) Suppose the series of $(x_n)$ converges conditionally, and let $A_+ = \{n \in \mathbb{N} : 0 \le x_n\}$ and $A_- = \{n \in \mathbb{N} : x_n < 0\}$.
   - (i) $A_+$ and $A_-$ both satisfy the assumption above; that is, for every natural number $m$ there are $n \in A_+$ with $m < n$ and $n' \in A_-$ with $m < n'$. Below, $(p_k)$ denotes the index sequence listing $A_+$ in order and $(q_k)$ the index sequence listing $A_-$ in order.
   - (ii) For every natural number $n$, exactly one of "there is a natural number $k$ with $n = p_k$" and "there is a natural number $k$ with $n = q_k$" holds. Moreover, for natural numbers $k$, $k'$, if $p_k = p_{k'}$ then $k = k'$, and if $q_k = q_{k'}$ then $k = k'$.
   - (iii) $0 \le x_{p_k}$ and $x_{q_k} < 0$ for every natural number $k$. The subsequences $(x_{p_k})$ and $(x_{q_k})$ both converge to $0$.
   - (iv) For every real number $M$ and every integer $K_0 \ge 0$, there is an integer $K$ with $K_0 \le K$ and
     $$
     \sum_{k=K_0+1}^{K} x_{p_k} > M ,
     $$
     and there is an integer $K'$ with $K_0 \le K'$ and $\sum_{k=K_0+1}^{K'} x_{q_k} < -M$.
:::

## 직관

통장의 입출금 기록을 생각하면 됩니다. 들어온 돈과 나간 돈을 따로 적은 두 장부가 양의 부분과 음의 부분이고, 잔고의 변화는 들어온 돈에서 나간 돈을 뺀 것($x = a - b$), 거래한 돈의 총액은 둘을 더한 것($|x| = a + b$)입니다. 나간 돈도 장부에는 양수로 적으므로 음의 부분은 $0$ 이상입니다. 거래마다 두 장부 가운데 한쪽에만 적힌다는 것도 (1)의 "$0 \le x$이면 $b = 0$, $x < 0$이면 $a = 0$"과 맞습니다. $x = 0$인 거래는 두 장부에 모두 $0$으로 적힙니다.

(2)와 (3)은 수렴하는 급수가 절대수렴하는지가 두 장부의 합으로 갈린다는 것입니다. 절대수렴하면 두 장부의 급수가 모두 수렴하고, 조건수렴하면 두 장부의 급수가 모두 발산합니다. 수렴하는 급수에서는 한쪽만 수렴하는 일이 없습니다. 한쪽이 수렴하면 다른 쪽은 $x = a - b$에서 수렴하는 두 급수의 차로 수렴하고, 그러면 $|x| = a + b$도 수렴하기 때문입니다.

(4)와 (5)는 조건수렴하는 급수의 $0$ 이상인 항과 음의 항을 따로 번호를 매겨 꺼내는 장치입니다. "조건을 만족하는 번호 가운데 아직 쓰지 않은 가장 작은 것"을 차례로 꺼내는 대신, 바로 앞에 꺼낸 번호보다 큰 것 가운데 가장 작은 것을 꺼냅니다. 이렇게 하면 다음 번호가 바로 앞 번호 하나로만 정해지므로 [[recursion-theorem|재귀 정리]]를 그대로 쓸 수 있고, 각 단계에서 정렬 원리가 하나로 정해 주는 수만 쓰므로 무엇을 고르는 일이 없습니다. (5)의 (iv)는 꺼낸 $0$ 이상인 항들만 더하면 어떤 수든 넘어설 수 있고, 음의 항들만 더하면 어떤 수보다도 작아질 수 있다는 것입니다.

## 성질의 증명

:::proof
아래에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다. 정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽어도 된다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**정의 문단의 사실.** $m = 1$에 가정을 쓰면 $1 < n$인 $n \in A$가 있으므로 $A \ne \emptyset$이다. 자연수 $m$마다 가정에 의해 $\{n \in A : m < n\}$은 공집합이 아니고 $\mathbb{N}$의 부분집합이므로, [[well-ordering-principle]]의 2번에 의해 최소 원소를 갖고 1번에 의해 그것은 하나뿐이다.

**(1)의 증명.** [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $0 \le x$와 $x < 0$ 가운데 정확히 하나가 성립한다. 두 수의 최대의 정의에 의해 $\max\{x, 0\}$은 $x \le 0$이면 $0$, $0 < x$이면 $x$이고, $\max\{-x, 0\}$은 $-x \le 0$이면 $0$, $0 < -x$이면 $-x$이다.

- $0 \le x$이면 $x = 0$일 때 $a = \max\{0, 0\} = 0 = x$이고, $0 < x$일 때 $a = x$이다. [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $-x \le 0$이므로 $b = 0$이다. [[absolute-value]]의 (1)에 의해 $|x| = x$이다. 따라서 $a - b = x$, $a + b = x = |x|$, $0 \le a = |x|$, $0 = b \le |x|$이다.
- $x < 0$이면 $x \le 0$이므로 $a = 0$이고, (3)의 (ii)에 의해 $0 < -x$이므로 $b = -x$이다. [[absolute-value]]의 (1)에 의해 $|x| = -x$이다. 따라서 [[real-number-arithmetic]]의 (K9)에 의해 $a - b = 0 - (-x) = x$이고 $a + b = -x = |x|$이며, $0 = a \le |x|$, $0 \le b = |x|$이다.

**(2)의 증명.** (1)에 의해 모든 자연수 $n$에서 $x_n = a_n - b_n$, $|x_n| = a_n + b_n$, $0 \le a_n \le |x_n|$, $0 \le b_n \le |x_n|$이고, [[real-number-arithmetic]]의 계산으로 $b_n = a_n - x_n$, $a_n = x_n + b_n$이다.

- (i)에서 (ii)와 (iii). $(|x_n|)$의 급수가 수렴하고 $0 \le a_n \le |x_n|$, $0 \le b_n \le |x_n|$이므로 [[comparison-test|비교 판정법]]의 (2)에 의해 $(a_n)$과 $(b_n)$의 급수가 수렴한다.
- (ii)에서 (i). $(a_n)$과 $(x_n)$의 급수가 수렴하므로 [[sum-of-a-series]]의 (3)(첫 번호 $1$)에 의해 $n$번째 항이 $a_n - x_n = b_n$인 수열의 급수가 수렴하고, 다시 (3)에 의해 $n$번째 항이 $a_n + b_n = |x_n|$인 수열의 급수가 수렴한다.
- (iii)에서 (i). $(x_n)$과 $(b_n)$의 급수가 수렴하므로 [[sum-of-a-series]]의 (3)에 의해 $n$번째 항이 $x_n + b_n = a_n$인 수열의 급수가 수렴하고, 다시 (3)에 의해 $(|x_n|)$의 급수가 수렴한다.

이것들이 성립하면 $(a_n)$과 $(b_n)$의 급수가 수렴하므로, [[sum-of-a-series]]의 (3)을 $a_n - b_n = x_n$과 $1 \cdot a_n + b_n = |x_n|$에 쓰면 두 등식을 얻는다.

**(3)의 증명.** 조건수렴의 정의에 의해 $(x_n)$의 급수는 수렴하고 절대수렴하지 않는다. (2)에 의해 (ii)와 (iii)이 둘 다 성립하지 않으므로 $(a_n)$과 $(b_n)$의 급수는 둘 다 발산한다. 두 수열의 항은 (1)에 의해 $0$ 이상이므로, 부분합 수열이 위로 유계이면 [[comparison-test]]의 (1)에 의해 급수가 수렴한다. 따라서 두 부분합 수열은 위로 유계가 아니다.

**(4)의 증명.** *있다는 것.* 정의 문단에 의해 자연수 $m$마다 $\{n \in A : m < n\}$의 최소 원소가 하나로 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)(이미 정해진 대상으로 값을 정한 함수)에 의해 $g(k, m)$이 $\{n \in A : m < n\}$의 최소 원소인 함수 $g : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$이 있다. $A$의 최소 원소를 $p^\ast$라 하면 재귀 정리에 의해 $p(1) = p^\ast$이고 모든 자연수 $k$에서 $p(k + 1) = g(k, p(k))$인 함수 $p : \mathbb{N} \to \mathbb{N}$이 정확히 하나 있다. $g(k, m) \in \{n \in A : m < n\}$이므로 $g(k, m) > m$이고, 재귀 정리의 (4)에 의해 $p$는 순증가이다. 따라서 $p$는 첨자열이고([[subsequence]]의 첨자열의 정의) $p_k = p(k)$는 위의 조건을 만족한다. *하나뿐인 것.* 첨자열 $(p''_k)$도 위의 조건을 만족하면, 함수 $p'' : \mathbb{N} \to \mathbb{N}$은 $p''(1) = p^\ast$, $p''(k + 1) = g(k, p''(k))$를 만족하므로 재귀 정리의 "정확히 하나"에 의해 $p'' = p$이다.

(i) $p_1$은 $A$의 원소이고, $p_{k+1}$은 $\{n \in A : p_k < n\}$의 원소이므로 $A$의 원소이다.

(ii) $n \in A$라 하자. $J = \{k \in \mathbb{N} : p_k \le n\}$으로 둔다. $p_1$은 $A$의 최소 원소이므로 $p_1 \le n$이고 $1 \in J$이다. $k \in J$이면 [[subsequence]]의 (1)에 의해 $k \le p_k \le n$이므로 (Z6)에 의해 $k \le n$이다. 따라서 $J$는 공집합이 아니고 위로 유계인 정수의 집합이며, [[well-ordering-principle]]의 4번 (나)에 의해 최대 원소 $j$를 갖는다. $j \in J$이므로 $p_j \le n$이다. (L3)에 의해 $j < j + 1$이므로 (L1)에 의해 $j + 1 \le j$가 아니고, 따라서 $j + 1 \notin J$이다. 곧 $p_{j+1} \le n$이 아니고, (Z5)에 의해 $n < p_{j+1}$이다. $p_j < n$이라 하면 $n \in \{m \in A : p_j < m\}$이고 $p_{j+1}$은 이 집합의 최소 원소이므로 $p_{j+1} \le n$인데, 이것은 $n < p_{j+1}$과 (L1)에 의해 함께 성립하지 않는다. 따라서 $p_j \le n$과 (Z5)에 의해 $n = p_j$이다. 거꾸로 (i)에 의해 모든 $p_k$는 $A$의 원소이므로 $\{p_k : k \in \mathbb{N}\} = A$이다.

(iii) $n \in A$라 하자. $p_1$은 $A$의 최소 원소이므로 $p_1 \le n$이고, (L1)에 의해 $n < p_1$이 아니다. $p_k < n$이면 $n \in \{m \in A : p_k < m\}$이므로 $p_{k+1} \le n$이고, (L1)에 의해 $n < p_{k+1}$이 아니다. 따라서 $n < p_1$이거나 $p_k < n < p_{k+1}$인 자연수 $n$은 $A$에 속하지 않는다.

(iv) 먼저 첨자열 $(p'_k)$에 대하여, 자연수 $j$, $k$가 $p'_k < p'_j$이면 $k < j$이다. $j \le k$이면 $j = k$일 때 $p'_j = p'_k$이고 $j < k$일 때 $p'_j < p'_k$이어서, (Z5)에 의해 어느 쪽이든 $p'_k < p'_j$가 아니기 때문이다. 자연수 $k$에 대한 명제 "$p'_k = p_k$"를 귀납법으로 보인다. $p'_1 \in A$이고, $A$의 원소 $n$은 어떤 $j$에 대하여 $n = p'_j$이며 $1 \le j$이므로 $p'_1 \le p'_j = n$이다(첨자열이므로 $1 < j$이면 $p'_1 < p'_j$). 따라서 $p'_1$은 $A$의 최소 원소이고 [[well-ordering-principle]]의 1번에 의해 $p'_1 = p_1$이다. $p'_k = p_k$라 하자. $p'_{k+1} \in A$이고 $p_k = p'_k < p'_{k+1}$이므로 $p'_{k+1} \in \{n \in A : p_k < n\}$이다. 이 집합의 원소 $n$은 어떤 $j$에 대하여 $n = p'_j$이고 $p'_k < p'_j$이므로 $k < j$, 곧 (Z1)에 의해 $k + 1 \le j$이며, 따라서 $p'_{k+1} \le p'_j = n$이다. 그러므로 $p'_{k+1}$은 이 집합의 최소 원소이고 $p'_{k+1} = p_{k+1}$이다. [[mathematical-induction|귀납법]]에 의해 모든 $k$에서 $p'_k = p_k$이고, [[sequence]]의 수열의 같음(첨자열은 수열이기도 하다)에 의해 $(p'_k) = (p_k)$이다.

**(5)의 증명.** (i) $A_-$가 가정을 만족하지 않는다고 하자. 그러면 어떤 자연수 $m$이 있어 $m < n$인 모든 자연수 $n$이 $A_-$에 속하지 않고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $0 \le x_n$이다. $(x_n)$의 $m$-꼬리, 곧 $n$번째 항이 $x_{n+m}$인 수열([[tail-of-a-sequence]])은 $n + m > m$이므로 [[absolute-value]]의 (1)에 의해 $(|x_n|)$의 $m$-꼬리와 같은 수열이다. $(x_n)$의 급수가 수렴하므로 [[tail-of-a-series]]의 (2)에 의해 그 $m$-꼬리의 급수가 수렴하고, 따라서 $(|x_n|)$의 $m$-꼬리의 급수가 수렴하며, 다시 (2)에 의해 $(|x_n|)$의 급수가 수렴한다. 이것은 $(x_n)$의 급수가 절대수렴하지 않는다는 가정과 모순이다. $A_+$가 가정을 만족하지 않는다고 하면, 어떤 자연수 $m$이 있어 $m < n$인 모든 자연수 $n$에서 $x_n < 0$이고 [[absolute-value]]의 (1)에 의해 $|x_n| = -x_n$이다. [[linearity-of-series]]의 (2)($c = -1$)와 (K9)에 의해 $n$번째 항이 $-x_n$인 수열의 급수가 수렴하고, 그 $m$-꼬리는 $(|x_n|)$의 $m$-꼬리와 같으므로 같은 논법으로 $(|x_n|)$의 급수가 수렴한다. 이것도 모순이다.

(ii) 자연수 $n$마다 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $0 \le x_n$과 $x_n < 0$ 가운데 정확히 하나가 성립하므로, $n$은 $A_+$와 $A_-$ 가운데 정확히 하나에 속한다. (4)의 (ii)에 의해 $n \in A_+$이면 $n = p_k$인 $k$가 있고, $n \in A_-$이면 $n = q_k$인 $k$가 있다. 둘이 함께 성립하면 (4)의 (i)에 의해 $n$이 $A_+$와 $A_-$에 함께 속하므로 그럴 수 없다. 또 $k \ne k'$이면 (Z5)에 의해 $k < k'$이거나 $k' < k$이고, 첨자열이므로 $p_k < p_{k'}$이거나 $p_{k'} < p_k$이어서 $p_k \ne p_{k'}$이다. $(q_k)$도 첨자열이므로 같은 문장이 $q$에 대해 성립한다.

(iii) (4)의 (i)에 의해 $p_k \in A_+$, $q_k \in A_-$이므로 $0 \le x_{p_k}$, $x_{q_k} < 0$이다. $(x_n)$의 급수가 수렴하므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 $(x_n)$은 $0$으로 수렴하고, [[subsequence]]의 (3)에 의해 두 부분수열도 $0$으로 수렴한다.

(iv) 두 경우를 함께 다룬다. $(c_n, r_k, A)$를 $(a_n, p_k, A_+)$ 또는 $(b_n, q_k, A_-)$라 하자. 두 경우 모두 다음이 성립한다.

- (ㄱ) $(r_k)$는 $A$를 차례로 늘어놓은 첨자열이다.
- (ㄴ) 자연수 $n$이 $A$에 속하지 않으면 $c_n = 0$이다. 첫째 경우 $n \notin A_+$이면 $x_n < 0$이고 (1)에 의해 $a_n = 0$이다. 둘째 경우 $n \notin A_-$이면 $0 \le x_n$이고 (1)에 의해 $b_n = 0$이다.
- (ㄷ) (1)에 의해 모든 $n$에서 $0 \le c_n$이고, (3)에 의해 $(c_n)$의 부분합 수열은 위로 유계가 아니다.

*부분합의 등식.* 모든 자연수 $K$에서 $\sum_{n=1}^{r_K} c_n = \sum_{k=1}^{K} c_{r_k}$임을 $K$에 대한 귀납법으로 보인다. $1 \le n \le r_1 - 1$이면 $n < r_1$이므로 (4)의 (iii)과 (ㄴ)에 의해 $c_n = 0$이다. [[finite-sum-of-reals]]의 (3)과 (4), [[linearity-and-order-of-finite-sums]]의 (2)(모든 항이 $0$인 합은 $0$)에 의해
$$
\begin{aligned}
\sum_{n=1}^{r_1} c_n &= \sum_{n=1}^{r_1 - 1} c_n + c_{r_1} \\
&= 0 + c_{r_1} = \sum_{k=1}^{1} c_{r_k}
\end{aligned}
$$
이다. $K$에서 성립한다고 하자. $r_K < r_{K+1}$이므로 (Z1)과 (Z7)에 의해 $r_K \le r_{K+1} - 1$이다. $r_K + 1 \le n \le r_{K+1} - 1$이면 $r_K < n < r_{K+1}$이므로 (4)의 (iii)과 (ㄴ)에 의해 $c_n = 0$이다. [[splitting-and-shifting-finite-sums]]의 (1)과 [[finite-sum-of-reals]]의 (3), (4)에 의해
$$
\begin{aligned}
\sum_{n=1}^{r_{K+1}} c_n &= \sum_{n=1}^{r_K} c_n + \sum_{n=r_K+1}^{r_{K+1}-1} c_n + c_{r_{K+1}} \\
&= \sum_{k=1}^{K} c_{r_k} + 0 + c_{r_{K+1}} \\
&= \sum_{k=1}^{K+1} c_{r_k}
\end{aligned}
$$
이다.

*$M$을 넘기.* 실수 $M$과 $0$ 이상인 정수 $K_0$이 주어졌다고 하고 $T = \sum_{k=1}^{K_0} c_{r_k}$로 두자. (ㄷ)에 의해 $(c_n)$의 부분합 수열은 위로 유계가 아니므로, $\sum_{n=1}^{N} c_n > M + T$인 자연수 $N$이 있다. $K = N + K_0$으로 두면 $K$는 자연수이고 $K_0 \le K$, $N \le K$이다. [[subsequence]]의 (1)에 의해 $N \le K \le r_K$이다. [[splitting-and-shifting-finite-sums]]의 (1), [[linearity-and-order-of-finite-sums]]의 (6)((ㄷ)에 의해 항이 $0$ 이상), [[order-properties-of-reals]]의 (2)의 (i)에 의해
$$
\begin{aligned}
\sum_{k=1}^{K} c_{r_k} &= \sum_{n=1}^{r_K} c_n = \sum_{n=1}^{N} c_n + \sum_{n=N+1}^{r_K} c_n \\
&\ge \sum_{n=1}^{N} c_n > M + T
\end{aligned}
$$
이다. 다시 [[splitting-and-shifting-finite-sums]]의 (1)($0 \le K_0 \le K$)에 의해 $\sum_{k=K_0+1}^{K} c_{r_k} = \sum_{k=1}^{K} c_{r_k} - T > M$이다.

첫째 경우 (iii)에 의해 $0 \le x_{p_k}$이므로 (1)에 의해 $c_{p_k} = a_{p_k} = x_{p_k}$이고, 위의 $K$가 $\sum_{k=K_0+1}^{K} x_{p_k} > M$을 만족한다. 둘째 경우 $x_{q_k} < 0$이므로 $c_{q_k} = b_{q_k} = -x_{q_k}$이고, 위의 $K$를 $K'$이라 하면 [[linearity-and-order-of-finite-sums]]의 (1)($c = -1$)에 의해 $-\sum_{k=K_0+1}^{K'} x_{q_k} > M$이다. [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $\sum_{k=K_0+1}^{K'} x_{q_k} < -M$이다. $\blacksquare$
:::

## 예시와 반례

:::example[(−1/2)ⁿ 의 양의 부분과 음의 부분의 합]
$x_n = (-1/2)^n$이라 합시다. [[power-of-a-real-number]]의 (4)에 의해 $|x_n| = |-1/2|^n = (1/2)^n$이므로 $(x_n)$의 급수는 절대수렴하고, [[sum-of-a-series]]의 (6)의 (iii)에 의해 $\sum_{n=1}^{\infty} x_n = (-1/2)(1 + 1/2)^{-1} = -1/3$, $\sum_{n=1}^{\infty} |x_n| = (1/2)(1 - 1/2)^{-1} = 1$입니다. (2)의 두 등식에 의해
$$
\begin{aligned}
\sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n &= -\frac{1}{3}, \\
\sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n &= 1
\end{aligned}
$$
이므로 두 식을 더하고 빼면 $\sum_{n=1}^{\infty} a_n = 1/3$, $\sum_{n=1}^{\infty} b_n = 2/3$입니다. 두 장부를 하나씩 더해 보지 않고 (2)만으로 두 합을 얻었습니다.
:::

:::example[교대 조화급수의 두 번호열]
$x_n = (-1)^n n^{-1}$이라 합시다. [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 이 급수는 조건수렴합니다. 자연수 $k$에 대하여 $2k$는 짝수이고 $2k - 1$은 홀수이므로([[even-and-odd]]) [[power-of-a-real-number]]의 (5)에 의해 $(-1)^{2k} = 1$, $(-1)^{2k-1} = -1$이고 $x_{2k} = (2k)^{-1} > 0$, $x_{2k-1} = -(2k - 1)^{-1} < 0$입니다. [[alternating-series-test]]의 (2)에 의해 모든 자연수는 $2k$ 꼴과 $2k - 1$ 꼴 가운데 정확히 하나이므로, $A_+$는 짝수인 자연수 전체이고 $A_-$는 홀수인 자연수 전체입니다.

$k$에서의 값이 $2k$인 함수와 $2k - 1$인 함수는 첨자열이고 값의 집합이 각각 $A_+$, $A_-$이므로, (4)의 (iv)에 의해 $p_k = 2k$, $q_k = 2k - 1$입니다. (5)의 (iv)를 $K_0 = 0$에 쓰면, 어떤 실수 $M$에 대해서도 $\sum_{k=1}^{K} (2k)^{-1} > M$인 $K$가 있고 $\sum_{k=1}^{K'} \bigl(-(2k - 1)^{-1}\bigr) < -M$인 $K'$이 있습니다.
:::

:::counterexample[절대수렴하는 급수에서 음의 항의 번호 집합이 위로 유계인 예]
$x_1 = -1$이고 $n \ge 2$에서 $x_n = (1/2)^n$인 수열을 생각합시다. $|x_n|$의 급수는 첫 항만 다른 등비급수이므로 수렴하고, 이 급수는 절대수렴합니다. $A_- = \{1\}$이어서 $m = 1$에 대하여 $1 < n$인 $n \in A_-$가 없습니다. 곧 (5)의 (i)의 결론이 이 수열에서는 성립하지 않고, $A_-$를 차례로 늘어놓은 첨자열도 없습니다. 조건수렴이라는 가정을 빼면 (5)의 (i)이 깨질 수 있다는 것입니다.
:::

## 확인 질문

:::check[모든 항이 $0$인 수열의 양의 부분 수열과 음의 부분 수열은 무엇인가? 이 수열에서 $A_+$와 $A_-$는?]
(1)의 마지막 문장에 의해 두 수열은 모두 모든 항이 $0$인 수열입니다. $0 \le 0$이므로 $A_+ = \mathbb{N}$이고 $A_- = \emptyset$입니다. 항이 $0$인 번호는 $A_+$ 쪽에 들어갑니다. 이 급수는 절대수렴하므로 (5)의 가정을 만족하지 않습니다.
:::

:::check[$A = \{n \in \mathbb{N} : 5 \le n\}$을 차례로 늘어놓은 첨자열은 무엇인가?]
$p_k = k + 4$입니다. $k$에서의 값이 $k + 4$인 함수는 첨자열이고, 그 값의 집합은 $A$입니다($n \in A$이면 $n = (n - 4) + 4$이고 $n - 4$는 자연수). 따라서 (4)의 (iv)에 의해 이것이 $A$를 차례로 늘어놓은 첨자열입니다. 정의대로 $p_1 = 5$가 $A$의 최소 원소이고, $p_{k+1} = k + 5$는 $k + 4$보다 큰 $A$의 원소 가운데 가장 작은 것입니다.
:::
