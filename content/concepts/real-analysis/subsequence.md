---
title: 부분수열
title_en: Subsequence
aliases: [첨자열, subsequence, strictly increasing sequence of natural numbers]
kind: definition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 순증가인 함수 ℕ → ℕ 을 첨자열이라 하고, 수열과 첨자열의 합성을 부분수열이라 한다. 첨자열의 i 번째 값은 i 이상이고, 수렴하는 수열의 모든 부분수열은 같은 극한으로 수렴하며, 꼬리와 부분수열의 부분수열도 부분수열이다.
requires: [function, function-composition, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence]
sources:
  - ref: lebl-basic-analysis
    loc: 2.1.3절 Definition 2.1.16, Proposition 2.1.17 과 그 증명, Example 2.1.18 (p.58)
    checked: original
    note: "출처의 Definition 2.1.16(p.58)은 자연수의 순증가 수열 {n_i}, 곧 모든 i ∈ ℕ 에서 n_i < n_{i+1} 인 수열에 대해 수열 {x_{n_i}} 를 {x_n} 의 부분수열이라 한다. 이 항목은 그 {n_i} 를 '첨자열'이라 부르고(이 용어는 출처에 나오지 않는다), i < j 이면 n_i < n_j 인 함수 ℕ → ℕ 로 정의한 뒤 출처의 꼴(이웃한 두 값)과 같은 뜻임을 (2)로 증명했다. 부분수열이 함수의 합성이라는 것과 '정확히 ~일 때'의 꼴은 출처에 없다(검색한 범위). 이 항목은 첨자열의 이름 n 과 겹치지 않도록 원래 수열을 (x_m) 으로 쓴다. (1)의 n_i ≥ i 는 출처가 Proposition 2.1.17 의 증명에서 '귀납법으로 증명하기 어렵지 않다(do it!)'고만 하는 것이고, 이 항목이 귀납법으로 증명했다. (3)은 Proposition 2.1.17 이고 증명의 경로(n_i ≥ i 로 i ≥ M 이면 n_i ≥ M)는 출처와 같다. 출처는 p.58 에서 꼬리가 부분수열의 한 종류라고 적는다. (4)는 그것을 첨자열 i + K 로 보인 것이다. (5)(부분수열의 부분수열), (6)(유계), (7)(단조)은 출처에 명제로 없다(검색한 범위). 출처는 연습문제 2.3.7 의 힌트(p.81)와 7.4절의 증명(p.285)에서 부분수열의 부분수열을 쓰고, 같은 증명에서 유계인 수열의 부분수열이 유계라는 것을 증명 없이 적는다. 예시 '홀수 번째 항'은 출처 p.58 의 예({1/n} 의 부분수열 {1/(3i)}, n_i = 3i)와 같은 발상이다. 반례 '수렴하는 부분수열이 있어도 수열은 발산할 수 있다'는 출처 Example 2.1.18(0, 1, 0, 1, … 과 짝수·홀수 번째 항)과 같은 발상이고, 이 항목은 basic-limits 의 번갈아 바뀌는 수열을 썼다. 출처의 연습문제 2.1.14(p.59)는 {(−1)ⁿ} 의 수렴하는 부분수열을 찾으라는 것이고, 이 반례의 첫 문단이 그 답에 해당한다. 반례의 둘째 문단(극한이 다른 두 부분수열로 발산을 보이는 것)은 출처 연습문제 2.1.16 의 발상을 이 수열에 (3)으로 쓴 것이다(연습문제는 Proposition 2.1.17 을 쓰지 말라고 한다). 출처는 p.58 에서 {1/n} 의 부분수열이 아닌 두 수열(원래 수열에 없는 수가 들어간 것, 순서가 바뀐 것)을 든다. 반례 '같은 항을 되풀이한 수열'은 같은 수열 {1/n} 에서 다른 경우(같은 항의 되풀이)를 든 것이다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열과 그 항, 유계, 단조는 [[sequence]]의 것이고, 수렴과 기호 $\lim_{m \to \infty}$는 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술) [[real-number-arithmetic]]의 (K7)에 의해 실수이며, 자연수 사이의 부등식은 정수로 읽으나 실수로 읽으나 같다([[order-properties-of-reals]]의 (10)). 이 항목에서 글자 $n$은 첨자열의 이름으로만 쓰고, 자연수를 나타내는 변수로는 $i$, $j$, $m$ 등을 쓴다.

**첨자열.** 함수 $n : \mathbb{N} \to \mathbb{N}$이 **첨자열**(index sequence)인 것은 정확히 $i < j$인 모든 자연수 $i$, $j$에서 $n(i) < n(j)$일 때이다. $n(i)$를 $n_i$로 쓰고 첨자열 $n$을 $(n_i)$로 나타낸다. 곧 첨자열은 [[recursion-theorem|재귀 정리]]의 (4)의 뜻으로 순증가인 함수 $\mathbb{N} \to \mathbb{N}$이다. 자연수는 실수이므로 [[function]]의 진술(공역은 선언하기 나름이다)에 의해 첨자열은 $\mathbb{N}$에서 $\mathbb{R}$로의 함수, 곧 [[sequence|수열]]이기도 하다. 아래에서는 첨자열을 늘 공역이 $\mathbb{N}$인 함수로 선언해 쓴다.

**부분수열.** $(x_m)$을 수열, 곧 함수 $x : \mathbb{N} \to \mathbb{R}$이라 하고 $(n_i)$를 첨자열이라 하자. $n$의 공역 $\mathbb{N}$이 $x$의 정의역이므로 [[function-composition|합성]] $x \circ n : \mathbb{N} \to \mathbb{R}$이 정해진다. 이것은 수열이고 그 $i$번째 항은 $(x \circ n)(i) = x(n(i)) = x_{n_i}$이다. 이 수열을 $(x_{n_i})$로 쓰고 "첨자열 $(n_i)$로 얻은 $(x_m)$의 부분수열"이라 한다. 수열 $(y_i)$가 $(x_m)$의 **부분수열**(subsequence)인 것은 정확히 어떤 첨자열 $(n_i)$가 있어 모든 자연수 $i$에서 $y_i = x_{n_i}$일 때, 곧 $(y_i) = (x_{n_i})$일 때이다.

다음이 성립한다. 아래에서 $(x_m)$은 수열이고 $(n_i)$는 첨자열이다.

1. (첨자는 번호보다 작지 않다) 모든 자연수 $i$에서 $n_i \ge i$이다. 따라서 자연수 $i$, $j$가 $i \ge j$이면 $n_i \ge j$이다.
2. (이웃한 두 값으로 판정하기) 함수 $n : \mathbb{N} \to \mathbb{N}$이 첨자열인 것은 정확히 모든 자연수 $i$에서 $n_i < n_{i+1}$일 때이다.
3. (수렴하는 수열의 부분수열) $(x_m)$이 실수 $L$로 수렴하면 $(x_m)$의 모든 부분수열이 $L$로 수렴한다. 따라서 $(x_m)$이 수렴하면 모든 부분수열 $(x_{n_i})$가 수렴하고 $\lim_{i \to \infty} x_{n_i} = \lim_{m \to \infty} x_m$이다.
4. (꼬리와 수열 자신) 자연수 $K$에 대하여 $i$에서의 값이 $i + K$인 함수는 첨자열이고, 그것으로 얻은 부분수열은 $(x_m)$의 $K$-꼬리([[tail-of-a-sequence]])이다. 또 $i$에서의 값이 $i$인 함수는 첨자열이고, 그것으로 얻은 부분수열은 $(x_m)$ 자신이다. 따라서 수열의 꼬리와 수열 자신은 그 수열의 부분수열이다.
5. (부분수열의 부분수열) $(y_i)$가 $(x_m)$의 부분수열이고 $(z_j)$가 $(y_i)$의 부분수열이면 $(z_j)$는 $(x_m)$의 부분수열이다. 더 자세히, 모든 $i$에서 $y_i = x_{n_i}$이고 첨자열 $(p_j)$에 대하여 모든 $j$에서 $z_j = y_{p_j}$이면, 합성 $n \circ p$는 $j$에서의 값이 $n_{p_j}$인 첨자열이고 모든 자연수 $j$에서 $z_j = x_{n_{p_j}}$이다.
6. (유계) 실수 $B$가 모든 자연수 $m$에서 $|x_m| \le B$를 만족하면 모든 자연수 $i$에서 $|x_{n_i}| \le B$이다. 모든 $m$에서 $x_m \le B$이면 모든 $i$에서 $x_{n_i} \le B$이고, 모든 $m$에서 $B \le x_m$이면 모든 $i$에서 $B \le x_{n_i}$이다. 따라서 유계(위로 유계, 아래로 유계)인 수열의 모든 부분수열은 유계(위로 유계, 아래로 유계)이다.
7. (단조) $(x_m)$이 단조증가이면 그 모든 부분수열은 단조증가이고, $(x_m)$이 단조감소이면 그 모든 부분수열은 단조감소이다.
:::

:::english
Sequences and their terms, boundedness and monotonicity are those of the entry on sequences, and convergence and the symbol $\lim_{m \to \infty}$ are those of the entries on the limit of a sequence and on uniqueness of limits. Natural numbers are positive integers and, by (K7), real numbers, and an inequality between natural numbers means the same whether it is read in the integers or in the reals. In this entry the letter $n$ is used only as the name of an index sequence; variables for natural numbers are written $i$, $j$, $m$ and so on.

**Index sequences.** A function $n : \mathbb{N} \to \mathbb{N}$ is an **index sequence** exactly when $n(i) < n(j)$ for all natural numbers $i$, $j$ with $i < j$. We write $n_i$ for $n(i)$ and denote the index sequence $n$ by $(n_i)$. That is, an index sequence is a function $\mathbb{N} \to \mathbb{N}$ that is strictly increasing in the sense of item (4) of the recursion theorem. Since natural numbers are real numbers, by the statement on functions (the codomain is a matter of declaration) an index sequence is also a function from $\mathbb{N}$ to $\mathbb{R}$, that is, a sequence. Below, index sequences are always declared as functions with codomain $\mathbb{N}$.

**Subsequences.** Let $(x_m)$ be a sequence, that is, a function $x : \mathbb{N} \to \mathbb{R}$, and let $(n_i)$ be an index sequence. Since the codomain $\mathbb{N}$ of $n$ is the domain of $x$, the composition $x \circ n : \mathbb{N} \to \mathbb{R}$ is defined. It is a sequence, and its $i$th term is $(x \circ n)(i) = x(n(i)) = x_{n_i}$. We write this sequence as $(x_{n_i})$ and call it "the subsequence of $(x_m)$ obtained from the index sequence $(n_i)$". A sequence $(y_i)$ is a **subsequence** of $(x_m)$ exactly when there is an index sequence $(n_i)$ such that $y_i = x_{n_i}$ for every natural number $i$, that is, when $(y_i) = (x_{n_i})$.

The following hold. Below, $(x_m)$ is a sequence and $(n_i)$ is an index sequence.

1. (An index is not smaller than its position) $n_i \ge i$ for every natural number $i$. Hence, for natural numbers $i$, $j$ with $i \ge j$, we have $n_i \ge j$.
2. (Testing with consecutive values) A function $n : \mathbb{N} \to \mathbb{N}$ is an index sequence exactly when $n_i < n_{i+1}$ for every natural number $i$.
3. (Subsequences of a convergent sequence) If $(x_m)$ converges to a real number $L$, then every subsequence of $(x_m)$ converges to $L$. Hence, if $(x_m)$ converges, every subsequence $(x_{n_i})$ converges and $\lim_{i \to \infty} x_{n_i} = \lim_{m \to \infty} x_m$.
4. (Tails and the sequence itself) For a natural number $K$, the function whose value at $i$ is $i + K$ is an index sequence, and the subsequence obtained from it is the $K$-tail of $(x_m)$. Also, the function whose value at $i$ is $i$ is an index sequence, and the subsequence obtained from it is $(x_m)$ itself. Hence the tails of a sequence and the sequence itself are subsequences of that sequence.
5. (Subsequences of subsequences) If $(y_i)$ is a subsequence of $(x_m)$ and $(z_j)$ is a subsequence of $(y_i)$, then $(z_j)$ is a subsequence of $(x_m)$. More precisely, if $y_i = x_{n_i}$ for all $i$ and, for an index sequence $(p_j)$, $z_j = y_{p_j}$ for all $j$, then the composition $n \circ p$ is an index sequence whose value at $j$ is $n_{p_j}$, and $z_j = x_{n_{p_j}}$ for every natural number $j$.
6. (Boundedness) If a real number $B$ satisfies $|x_m| \le B$ for every natural number $m$, then $|x_{n_i}| \le B$ for every natural number $i$. If $x_m \le B$ for all $m$, then $x_{n_i} \le B$ for all $i$, and if $B \le x_m$ for all $m$, then $B \le x_{n_i}$ for all $i$. Hence every subsequence of a bounded (bounded above, bounded below) sequence is bounded (bounded above, bounded below).
7. (Monotonicity) If $(x_m)$ is monotone increasing, then every subsequence of it is monotone increasing, and if $(x_m)$ is monotone decreasing, then every subsequence of it is monotone decreasing.
:::

## 직관

줄을 선 사람들 가운데 몇 사람을 앞에서부터 차례로 불러내 새 줄을 세운다고 해 봅시다. 방금 부른 사람보다 뒤에 선 사람만 다음으로 부를 수 있고, 한 사람을 두 번 부를 수는 없습니다. 원래 줄의 자리 번호가 $m$이고, $i$번째로 부른 사람의 자리 번호가 $n_i$입니다. "뒤에 선 사람만 부른다"가 첨자열의 조건 $n_i < n_{i+1}$이고, 새 줄의 $i$번째 사람이 부분수열의 $i$번째 항 $x_{n_i}$입니다. 비유가 맞지 않는 곳은 수열의 항이 사람과 달리 같은 값을 여러 자리에서 가질 수 있다는 점입니다. 부분수열은 값을 고르는 것이 아니라 자리를 고르는 것이고, 같은 자리를 두 번 고를 수는 없습니다(아래 반례 "같은 항을 되풀이한 수열").

$i$번째로 부른 사람은 적어도 $i$번째 자리에 서 있습니다. 앞에서 $i - 1$명을 이미 불렀고 그들은 모두 그 사람보다 앞에 서 있기 때문입니다. 이것이 (1)의 $n_i \ge i$입니다. 수열이 $L$로 수렴하면 어느 자리 $M$부터 뒤의 모든 항이 $L$ 가까이에 있고, (1)에 의해 새 줄의 $M$번째 이후 사람은 모두 원래 줄의 $M$번째 자리 이후에 서 있으므로 부분수열도 $L$ 가까이에 머뭅니다. 이것이 (3)이고, 첨자열이 순증가라는 가정은 (1)을 거쳐 이 단계에서 쓰입니다.

(3)의 역은 성립하지 않습니다. 수렴하는 부분수열이 하나 있다고 해서 수열 전체가 수렴하지는 않습니다(아래 반례).

## 성질의 증명

:::proof
첨자열의 값과 번호는 모두 자연수, 곧 양의 정수이다. 정수의 순서에 관해서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 정수의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. "순서 성질 (10)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다.

**1의 증명.** $i$에 대한 [[mathematical-induction|수학적 귀납법]]으로 $n_i \ge i$를 보인다. $n_1$은 자연수, 곧 양의 정수이므로 (Z1)에 의해 $n_1 \ge 1$이다. 자연수 $i$에 대하여 $n_i \ge i$라 하자. (L3)에 의해 $i < i + 1$이므로 첨자열의 정의에 의해 $n_i < n_{i+1}$이다. $i \le n_i$와 $n_i < n_{i+1}$에서 (Z6)에 의해 $i < n_{i+1}$이고, (Z1)에 의해 $i + 1 \le n_{i+1}$이다. 따라서 모든 자연수 $i$에서 $n_i \ge i$이다. 자연수 $i$, $j$가 $i \ge j$이면 $j \le i \le n_i$이므로 (Z6)에 의해 $n_i \ge j$이다.

**2의 증명.** $n$이 첨자열이면, 모든 자연수 $i$에서 (L3)에 의해 $i < i + 1$이므로 $n_i < n_{i+1}$이다.

거꾸로 모든 자연수 $i$에서 $n_i < n_{i+1}$이라 하자. 자연수 $i$를 고정하고, $j \ge i + 1$인 모든 정수 $j$에 대하여 "$j$는 자연수이고 $n_i < n_j$"임을 시작점이 $i + 1$인 귀납법([[mathematical-induction]])으로 보인다. 먼저 $j \ge i + 1$인 정수 $j$는 자연수이다. $0 < i$와 (Z7)에 의해 $1 < i + 1$이고, (Z8)과 (Z6)에 의해 $0 < i + 1 \le j$이므로 $0 < j$이기 때문이다. $j = i + 1$이면 가정에 의해 $n_i < n_{i+1}$이다. $j \ge i + 1$인 정수 $j$에서 $n_i < n_j$라 하면, 가정에 의해 $n_j < n_{j+1}$이므로 (Z6)에 의해 $n_i < n_{j+1}$이다. 따라서 $j \ge i + 1$인 모든 정수 $j$에서 $n_i < n_j$이다. 이제 자연수 $i$, $j$가 $i < j$이면 (Z1)에 의해 $i + 1 \le j$이므로 $n_i < n_j$이다. 그러므로 $n$은 첨자열이다.

**3의 증명.** $(x_m)$이 $L$로 수렴하고 $(y_i)$가 $(x_m)$의 부분수열이라 하자. 정의에 의해 모든 자연수 $i$에서 $y_i = x_{n_i}$인 첨자열 $(n_i)$가 있다. 양의 실수 $\varepsilon$을 잡는다. [[limit-of-sequence]]의 정의에 의해, $M$ 이상인 모든 자연수 $m$에서 $|x_m - L| < \varepsilon$인 자연수 $M$이 있다. $M$ 이상인 자연수 $i$를 잡으면 (1)에 의해 $n_i \ge M$이고 $n_i$는 자연수이므로 $|y_i - L| = |x_{n_i} - L| < \varepsilon$이다. $\varepsilon$은 임의의 양의 실수였으므로 $(y_i)$는 $L$로 수렴한다.

$(x_m)$이 수렴하면 어떤 실수 $L$로 수렴하고, 위에서 보인 것에 의해 모든 부분수열 $(x_{n_i})$도 $L$로 수렴한다. [[limit-is-unique]]의 기호로 $\lim_{i \to \infty} x_{n_i} = L = \lim_{m \to \infty} x_m$이다.

**4의 증명.** 자연수 $i$에 대하여 $i + K$는 정수이고, $0 < K$와 (Z7)에 의해 $i < i + K$이며 $0 < i$와 (Z6)에 의해 $0 < i + K$이므로 자연수이다. [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)에 의해 $i$에서의 값이 $i + K$인 함수 $\mathbb{N} \to \mathbb{N}$이 있다. 자연수 $i$, $j$가 $i < j$이면 (Z7)에 의해 $i + K < j + K$이므로 이 함수는 첨자열이다. 그것으로 얻은 부분수열의 $i$번째 항은 $x_{i+K}$이고, 이것은 $K$-꼬리의 $i$번째 항이다. 두 수열은 모든 $i$에서 항이 같으므로 [[sequence]]의 진술(수열의 같음)에 의해 같다.

같은 재귀 정리의 (1)에 의해 $i$에서의 값이 $i$인 함수 $\mathbb{N} \to \mathbb{N}$이 있고, $i < j$이면 값도 $i < j$이므로 첨자열이다. 그것으로 얻은 부분수열의 $i$번째 항은 $x_i$이므로, 모든 $i$에서 항이 같아 이 부분수열은 $(x_m)$ 자신이다. 따라서 $K$-꼬리와 $(x_m)$ 자신은 부분수열의 정의를 만족한다.

**5의 증명.** $(y_i)$가 $(x_m)$의 부분수열이므로 모든 $i$에서 $y_i = x_{n_i}$인 첨자열 $(n_i)$가 있고, $(z_j)$가 $(y_i)$의 부분수열이므로 모든 $j$에서 $z_j = y_{p_j}$인 첨자열 $(p_j)$가 있다. $p : \mathbb{N} \to \mathbb{N}$이고 $n$의 정의역이 $\mathbb{N}$이므로 [[function-composition|합성]] $n \circ p : \mathbb{N} \to \mathbb{N}$이 정해지고 $(n \circ p)(j) = n(p(j)) = n_{p_j}$이다. 자연수 $j$, $j'$이 $j < j'$이면 $(p_j)$가 첨자열이므로 $p_j < p_{j'}$이고, $p_j$, $p_{j'}$은 자연수이며 $(n_i)$가 첨자열이므로 $n_{p_j} < n_{p_{j'}}$이다. 따라서 $n \circ p$는 첨자열이다. 자연수 $j$에 대하여 $p_j$는 자연수이므로 $y_{p_j} = x_{n_{p_j}}$이고, $z_j = y_{p_j} = x_{n_{p_j}}$이다. 그러므로 $(z_j)$는 첨자열 $n \circ p$로 얻은 $(x_m)$의 부분수열이다.

**6의 증명.** 자연수 $i$에 대하여 $n_i$는 자연수이다. 모든 자연수 $m$에서 $|x_m| \le B$이면 $m = n_i$로 두어 $|x_{n_i}| \le B$이다. 같은 방법으로, 모든 $m$에서 $x_m \le B$이면 $x_{n_i} \le B$이고, 모든 $m$에서 $B \le x_m$이면 $B \le x_{n_i}$이다. [[sequence]]의 유계, 위로 유계, 아래로 유계의 정의에 의해 마지막 문장이 나온다. 부분수열은 어떤 첨자열로 얻은 수열이므로 모든 부분수열에 대해 성립한다.

**7의 증명.** 자연수 $i$에 대하여 첨자열의 정의와 (L3)에 의해 $n_i < n_{i+1}$이고, 따라서 $n_i \le n_{i+1}$이다. $(x_m)$이 단조증가이면 [[sequence]]의 (4)에 의해 $x_{n_i} \le x_{n_{i+1}}$이므로 $(x_{n_i})$는 단조증가이다. $(x_m)$이 단조감소이면 같은 (4)에 의해 $x_{n_{i+1}} \le x_{n_i}$이므로 $(x_{n_i})$는 단조감소이다. 모든 부분수열은 어떤 첨자열로 얻은 수열이므로 결론이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[홀수 번째 항]
$m$번째 항이 $m^{-1}$인 수열 $(x_m)$과 $n_i = 2i - 1$을 생각합니다. 자연수 $i$에 대하여 $2i - 1$은 정수이고, $1 \le i$에서 (Z7)에 의해 $0 \le i - 1$이므로 $2i - 1 = i + (i - 1) \ge i \ge 1$이어서 자연수입니다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $i$에서의 값이 $2i - 1$인 함수 $\mathbb{N} \to \mathbb{N}$이 있습니다. $n_{i+1} = 2i + 1 = n_i + 2$이고 $0 < 2$이므로 (Z7)에 의해 $n_i < n_{i+1}$이고, (2)에 의해 $(n_i)$는 첨자열입니다.

이것으로 얻은 부분수열은 $1, 3^{-1}, 5^{-1}, \dots$, 곧 $i$번째 항이 $(2i - 1)^{-1}$인 수열입니다. [[basic-limits]]의 (2)에 의해 $(x_m)$은 $0$으로 수렴하므로, (3)에 의해 이 부분수열도 $0$으로 수렴합니다. 극한을 직접 계산하지 않고 (3)만으로 얻었습니다.
:::

:::counterexample[수렴하는 부분수열이 있어도 수열은 발산할 수 있다]
[[basic-limits]]의 (3)의 수열 $(s_m)$($m$이 짝수이면 $1$, 홀수이면 $-1$)을 생각합니다. $n_i = 2i$로 두면 $0 < i$와 (Z7)에 의해 $2i = i + i > i \ge 1$이므로 자연수이고([[recursion-theorem|재귀 정리]]의 (1)로 함수 $\mathbb{N} \to \mathbb{N}$을 얻습니다), $0 < 2$와 (Z7)에 의해 $n_{i+1} = n_i + 2 > n_i$이므로 (2)에 의해 첨자열입니다. $2i$는 정수 $i$의 두 배이므로 짝수이고([[even-and-odd]]의 정의), $s_{2i} = 1$이어서, 이 부분수열은 모든 항이 $1$인 상수 수열이고 $1$로 수렴합니다([[basic-limits]]의 (1)). 그러나 $(s_m)$은 발산합니다([[basic-limits]]의 (3)). 따라서 (3)의 역, "어떤 부분수열이 수렴하면 수열도 수렴한다"는 성립하지 않습니다.

(3)으로 발산을 다시 볼 수도 있습니다. 위 예시처럼 $2i - 1$로 얻은 부분수열은, $2i - 1 = 2(i - 1) + 1$이 홀수이므로 모든 항이 $-1$이고 $-1$로 수렴합니다. $(s_m)$이 어떤 실수 $L$로 수렴한다면 (3)에 의해 두 부분수열이 모두 $L$로 수렴하므로 [[limit-is-unique]]에 의해 $L = 1$이고 $L = -1$이어야 하는데, [[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0 < 1$이고, (W2)와 그 항목의 (1)의 (i)에 의해 $-1 \ne 1$입니다.
:::

:::counterexample[같은 항을 되풀이한 수열]
$m$번째 항이 $m^{-1}$인 수열 $(x_m)$에 대해, 모든 항이 $1$인 상수 수열을 생각합니다. $1 = x_1$이므로 모든 항이 원래 수열의 값이지만, 이것은 $(x_m)$의 부분수열이 아닙니다. 첨자열 $(n_i)$가 있어 모든 $i$에서 $x_{n_i} = 1$, 곧 $n_i^{-1} = 1$이라 하면, (K4)와 (K8)의 (iii)에 의해 $n_i = n_i \cdot 1 = n_i n_i^{-1} = 1$이므로 $n_1 = n_2 = 1$입니다. 그러나 첨자열의 정의에 의해 $n_1 < n_2$여야 하고, (L1)에 의해 $n_1 < n_2$와 $n_2 \le n_1$은 함께 성립하지 않습니다. 모든 $i$에서 값이 $1$인 함수 $c : \mathbb{N} \to \mathbb{N}$으로 합성 $x \circ c$를 만들면 이 상수 수열이 되지만, $c$는 첨자열이 아닙니다.
:::

## 확인 질문

:::check[첨자열 $(n_i)$가 $n_5 = 5$를 만족하면 $n_1, n_2, n_3, n_4$는 무엇인가?]
$n_1 = 1$, $n_2 = 2$, $n_3 = 3$, $n_4 = 4$입니다. 첨자열의 정의에 의해 $n_4 < n_5 = 5$이므로 (Z1)에 의해 $n_4 \le 4$이고, (1)에 의해 $n_4 \ge 4$이므로 (L2)에 의해 $n_4 = 4$입니다. 같은 방법으로 $n_3 < n_4 = 4$와 $n_3 \ge 3$에서 $n_3 = 3$, $n_2 < 3$과 $n_2 \ge 2$에서 $n_2 = 2$, $n_1 < 2$와 $n_1 \ge 1$에서 $n_1 = 1$입니다.
:::

:::check[짝수 번째 항으로 얻은 부분수열의 $1$-꼬리와, $1$-꼬리의 짝수 번째 항으로 얻은 부분수열은 같은가?]
일반적으로 같지 않습니다. 수열 $(x_m)$에서 $i$에서의 값이 $2i$인 첨자열로 얻은 부분수열을 $(y_i)$라 하면 $y_i = x_{2i}$이고, 그 $1$-꼬리의 $j$번째 항은 $y_{j+1} = x_{2j+2}$입니다. 한편 $(x_m)$의 $1$-꼬리를 $(z_i)$라 하면 $z_i = x_{i+1}$이고, 그 짝수 번째 항으로 얻은 부분수열의 $j$번째 항은 $z_{2j} = x_{2j+1}$입니다. (4)와 (5)에 의해 둘 다 $(x_m)$의 부분수열이고, 첨자열은 $j$에서의 값이 각각 $2j + 2$와 $2j + 1$인 함수입니다. $x_m = m^{-1}$이면 첫 항이 각각 $4^{-1}$과 $3^{-1}$이고, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $4^{-1} < 3^{-1}$이므로 두 수열은 다릅니다.
:::
