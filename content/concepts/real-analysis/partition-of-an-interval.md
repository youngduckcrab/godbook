---
title: 구간의 분할
title_en: Partition of an Interval
aliases: [닫힌구간의 분할, 분할의 점, 작은 구간, 작은 구간의 길이, partition of an interval, partition of a closed interval, subinterval of a partition]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: a < b 일 때 닫힌구간 [a, b] 의 분할은 a 와 b 를 원소로 갖는 [a, b] 의 유한 부분집합이다. 분할의 점 x_0, …, x_n 을 크기순 나열로 정하고, 작은 구간과 그 길이, 작은 구간이 [a, b] 를 덮는 방식, 가장 간단한 분할, 점으로 분할을 정하는 법, 분할 전체의 집합, 작은 구간의 길이의 합이 b − a 라는 것을 함께 진술한다.
requires: [set, subset, set-operations, power-set, function, injective-surjective-bijective, proof-by-contradiction, partition, finite-set, number-of-elements-is-unique, subset-of-finite-set, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, real-valued-function, interval, finite-sum-of-reals, telescoping-sum, increasing-listing-of-finite-set]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Definition 5.1.1 (p.181), Proposition 5.1.2 의 증명과 Definition 5.1.3 (p.182); 1.4절 첫머리의 구간의 정의와 그 쪽 각주 (p.41); 5.1절(5.1.2 소절) Example 5.1.14 (p.187); 5.2절(5.2.3 소절) Theorem 5.2.9 의 증명 (p.196), 5.2절(5.2.4 소절) Proposition 5.2.10 의 증명 개요 (p.197)
    checked: original
    note: "출처의 Definition 5.1.1(p.181)은 [a, b] 의 분할을 a = x_0 < x_1 < x_2 < ⋯ < x_{n−1} < x_n = b 인 유한한 수의 집합 {x_0, x_1, …, x_n} 으로 정의하고 Δx_i = x_i − x_{i−1} 로 쓴다. 이 항목은 분할을 'a 와 b 를 원소로 갖는 [a, b] 의 유한 부분집합'으로 정의하고, 점 x_i 는 1단원 increasing-listing-of-finite-set 의 크기순 나열로 정한다. 출처는 유한집합의 원소를 이렇게 크기순으로 적을 수 있고 그 적는 법이 하나뿐이라는 것을 말없이 쓴다. Definition 5.1.1 은 a < b 를 그 자리에 적지 않는다. 출처는 1.4절 첫머리(p.41)에서 유계인 구간 [a, b] 등을 a < b 인 a, b 에 대해서만 정의하고, 그 쪽 각주에서 'in this book, intervals have at least two points. That is, we only defined the bounded intervals if a < b' 라고 적는다. 이 항목은 a < b 를 진술에 적는다. 출처는 작은 구간 [x_{i−1}, x_i] 를 Example 5.1.14(p.187)에서 'subinterval' 이라 부른다. 이 항목은 해석학 입문 derivative 항목의 '부분구간'과 구별하려고 '작은 구간'이라 부른다. (2)의 x_{i−1} < x_i 와 (1)의 x_0 = a, x_n = b 는 출처가 정의에 적는 부등식이다. (3)의 (iii)(분할의 점이 아닌 점은 한 작은 구간의 안쪽에 든다)은 출처가 Theorem 5.2.9 의 증명(5.2.3 소절, p.196)에서 구간을 유한 개의 구간으로 나누어 그 안쪽에서 f 가 연속이게 하는 것, Proposition 5.2.10 의 증명 개요(5.2.4 소절, p.197)에서 끝점을 빼고 f = g 이게 나누는 것('details are left to the reader')에 쓰이는 내용이다. 출처는 Definition 5.1.3(p.182)에서 분할 전체에 걸친 상한과 하한을 쓰며, (6)은 그 상한이 다루는 집합이 집합으로 정해지고 공집합이 아니라는 것이다. (7)의 ΣΔx_i = b − a 는 출처가 Proposition 5.1.2 의 증명(5.1.1 소절, p.182)에서 'We also have Σ_{i=1}^n Δx_i = (b − a)' 라고 증명 없이 쓰는 것이다. 이 항목의 (1)–(7)의 증명은 이 사이트가 썼다. 반례 '유한이 아닌 집합'의 {0} ∪ {1/k : k ∈ ℕ} 은 출처 7.4절 연습문제 7.4.2(7.4.3 소절, p.285)의 A ∪ {0}(A = {1/n : n ∈ ℕ})와 같은 집합이다(출처는 콤팩트성을 묻는다). {1/n : n ∈ ℕ} 은 출처 1.2절 Corollary 1.2.5(1.2.2 소절, p.32)에도 나온다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 서술과 번호 4곳, 넘겨짚은 직관 문장을 고쳤다."
added: 2026-11-20
---

:::statement
닫힌구간 $[a, b]$와 그 기호는 [[interval]]의 것이고, 유한집합, "원소를 $N$개 갖는다", $\{1, \dots, N\}$은 [[finite-set]]의 것이며, 원소의 개수 $|A|$는 [[number-of-elements-is-unique]]의 것이다. 크기순 나열은 [[increasing-listing-of-finite-set]]의 것이고, 최댓값 $\max$, 최솟값 $\min$은 [[upper-bound-and-supremum]]의 것이며, 멱집합 $\mathscr{P}$는 [[power-set]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**$[a, b]$의 분할.** $\mathbb{R}$의 부분집합 $P$가 $[a, b]$의 **분할**(partition of $[a, b]$)인 것은 정확히 다음 세 조건이 모두 성립할 때이다: $P \subseteq [a, b]$이다; $P$는 유한집합이다; $a \in P$이고 $b \in P$이다. 이것은 [[partition|집합의 분할]](집합의 부분집합들을 원소로 하는 집합)과 다른 개념이다. 이 사이트는 둘을 섞지 않도록 이 개념을 늘 "$[a, b]$의 분할"처럼 구간을 붙여 쓴다.

**분할의 점.** $P$를 $[a, b]$의 분할이라 하자. 아래 (1)에 의해 $P$가 원소를 $n + 1$개 갖게 하는 정수 $n \ge 1$이 하나 있다. $u : \{1, \dots, n + 1\} \to P$를 $P$의 크기순 나열이라 하고, $0 \le i \le n$인 정수 $i$마다 $x_i = u(i + 1)$로 정한 실수 $x_i$를 $P$의 $i$번째 **점**(point)이라 한다. 이 점들을 "$P$의 점 $x_0, \dots, x_n$"이라 쓴다. 이 표기는 [[telescoping-sum|망원 합]] 항목의 "0 부터 번호가 붙은 실수"의 뜻, 곧 $0 \le i \le n$인 정수 $i$마다 실수 $x_i = u(i + 1)$이 정해진 함수 $\{i \in \mathbb{Z} : 0 \le i \le n\} \to \mathbb{R}$이고, 줄임표는 합을 뜻하지 않는다. 분할이 둘 이상이면 글자를 바꾸어 "$Q$의 점 $y_0, \dots, y_m$"처럼 쓴다.

**작은 구간과 길이.** $P$의 점이 $x_0, \dots, x_n$일 때, $1 \le i \le n$인 정수 $i$마다 닫힌구간 $[x_{i-1}, x_i]$를 $P$의 $i$**번째 작은 구간**($i$-th subinterval)이라 하고, 실수 $\Delta x_i = x_i - x_{i-1}$을 그 **길이**라 한다. (아래 (2)에 의해 $x_{i-1} < x_i$이므로 이 닫힌구간의 기호를 쓸 수 있다.)

다음이 성립한다. 아래에서 $P$는 $[a, b]$의 분할이고 그 점은 $x_0, \dots, x_n$이다.

1. (점의 개수와 끝점) $P$는 공집합이 아닌 유한집합이고, $P$가 원소를 $n + 1$개 갖게 하는 정수 $n$은 하나뿐이며 $n \ge 1$이다. $n$과 점 $x_0, \dots, x_n$은 $P$만으로 정해진다. $x_0 = \min P = a$이고 $x_n = \max P = b$이다. $0 \le i \le n$, $0 \le j \le n$인 정수 $i$, $j$에 대하여, $x_i < x_j$인 것은 정확히 $i < j$일 때이고, $x_i \le x_j$인 것은 정확히 $i \le j$일 때이며, $x_i = x_j$인 것은 정확히 $i = j$일 때이다. 또 $P = \{x_i : 0 \le i \le n\text{인 정수 } i\}$이고, 모든 $i$에서 $a \le x_i \le b$이다.
2. (작은 구간) $1 \le i \le n$인 정수 $i$에 대하여 $x_{i-1} < x_i$이고 $\Delta x_i > 0$이다. $i$번째 작은 구간 $[x_{i-1}, x_i]$는 $x_{i-1}$과 $x_i$를 원소로 갖고 $[a, b]$의 부분집합이다.
3. (작은 구간이 $[a, b]$를 덮는 방식)
   - (i) $[a, b]$의 모든 원소 $x$에 대하여 $x \in [x_{i-1}, x_i]$인 정수 $i$($1 \le i \le n$)가 있다.
   - (ii) $1 \le i < j \le n$인 정수 $i$, $j$에 대하여, $j = i + 1$이면 $[x_{i-1}, x_i] \cap [x_{j-1}, x_j] = \{x_i\}$이고, $j \ne i + 1$이면 $[x_{i-1}, x_i] \cap [x_{j-1}, x_j] = \emptyset$이다.
   - (iii) $x \in [a, b] - P$이면 (i)의 $i$는 하나뿐이고 $x_{i-1} < x < x_i$이다.
4. (가장 간단한 분할) $\{a, b\}$는 $[a, b]$의 분할이고, 원소를 $2$개 가지며($n = 1$), 그 점은 $x_0 = a$, $x_1 = b$이다. 그 유일한 작은 구간은 $[a, b]$이고 길이는 $b - a$이다. 거꾸로 $[a, b]$의 분할 $P$가 원소를 $2$개 가지면 $P = \{a, b\}$이다.
5. (점으로 분할 정하기) $n \ge 1$을 정수라 하고, $0 \le i \le n$인 정수 $i$마다 실수 $t_i$가 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자([[real-valued-function]]의 (1)의 뜻). $t_0 = a$, $t_n = b$이고, $0 \le i < j \le n$인 모든 정수 $i$, $j$에서 $t_i < t_j$이면, 집합 $T = \{t_i : 0 \le i \le n\text{인 정수 } i\}$는 원소를 $n + 1$개 갖는 $[a, b]$의 분할이고, 그 점은 $0 \le i \le n$인 모든 $i$에서 $x_i = t_i$이다.
6. (분할 전체의 집합) $[a, b]$의 분할 전체의 집합은 $\mathscr{P}([a, b])$의 원소 $P$ 가운데 "$P$는 유한집합이고 $a \in P$이며 $b \in P$"인 것 전체로 이루어진 $\mathscr{P}([a, b])$의 부분집합이다. 이 집합은 (4)에 의해 $\{a, b\}$를 원소로 가지므로 공집합이 아니다.
7. (길이의 합) 유한 합은 [[finite-sum-of-reals]]의 것이다. $\Delta x_i$는 $1 \le i \le n$에서 정해진 항이고
   $$
   \sum_{i=1}^{n} \Delta x_i = b - a
   $$
   이다.
:::

:::english
The closed interval $[a, b]$ and its notation are those of the entry on intervals; finite sets, "has $N$ elements", and $\{1, \dots, N\}$ are those of the entry on finite sets, and the number of elements $|A|$ is that of the entry on the uniqueness of the number of elements. Listings in increasing order are those of the entry on listing a finite set in increasing order, the maximum $\max$ and minimum $\min$ are those of the entry on upper bounds and suprema, and the power set $\mathscr{P}$ is that of the entry on power sets. Below, $a$ and $b$ are real numbers with $a < b$.

**Partition of $[a, b]$.** A subset $P$ of $\mathbb{R}$ is a **partition of $[a, b]$** exactly when all three of the following hold: $P \subseteq [a, b]$; $P$ is a finite set; $a \in P$ and $b \in P$. This is a different notion from a partition of a set (a set whose elements are subsets of the given set). To keep the two apart, this site always attaches the interval and says "partition of $[a, b]$".

**Points of a partition.** Let $P$ be a partition of $[a, b]$. By (1) below there is exactly one integer $n \ge 1$ such that $P$ has $n + 1$ elements. Let $u : \{1, \dots, n + 1\} \to P$ be the listing of $P$ in increasing order, and for each integer $i$ with $0 \le i \le n$ call the real number $x_i = u(i + 1)$ the $i$-th **point** of $P$. We write these points as "the points $x_0, \dots, x_n$ of $P$". This notation is meant in the sense of "real numbers indexed from 0" of the entry on telescoping sums, that is, the function $\{i \in \mathbb{Z} : 0 \le i \le n\} \to \mathbb{R}$ whose value at each integer $i$ with $0 \le i \le n$ is $x_i = u(i + 1)$; the ellipsis does not denote a sum. When there are two or more partitions, we change letters and write, for example, "the points $y_0, \dots, y_m$ of $Q$".

**Subintervals and lengths.** When the points of $P$ are $x_0, \dots, x_n$, for each integer $i$ with $1 \le i \le n$ the closed interval $[x_{i-1}, x_i]$ is called the **$i$-th subinterval** of $P$, and the real number $\Delta x_i = x_i - x_{i-1}$ is called its **length**. (By (2) below, $x_{i-1} < x_i$, so the notation for this closed interval may be used.)

The following hold. Below, $P$ is a partition of $[a, b]$ whose points are $x_0, \dots, x_n$.

1. (Number of points and endpoints) $P$ is a nonempty finite set, the integer $n$ for which $P$ has $n + 1$ elements is unique, and $n \ge 1$. The number $n$ and the points $x_0, \dots, x_n$ are determined by $P$ alone. We have $x_0 = \min P = a$ and $x_n = \max P = b$. For integers $i$, $j$ with $0 \le i \le n$ and $0 \le j \le n$: $x_i < x_j$ exactly when $i < j$, $x_i \le x_j$ exactly when $i \le j$, and $x_i = x_j$ exactly when $i = j$. Moreover $P = \{x_i : i \text{ an integer with } 0 \le i \le n\}$, and $a \le x_i \le b$ for all $i$.
2. (Subintervals) For each integer $i$ with $1 \le i \le n$, $x_{i-1} < x_i$ and $\Delta x_i > 0$. The $i$-th subinterval $[x_{i-1}, x_i]$ contains $x_{i-1}$ and $x_i$ and is a subset of $[a, b]$.
3. (How the subintervals cover $[a, b]$)
   - (i) For every element $x$ of $[a, b]$ there is an integer $i$ ($1 \le i \le n$) with $x \in [x_{i-1}, x_i]$.
   - (ii) For integers $i$, $j$ with $1 \le i < j \le n$: if $j = i + 1$ then $[x_{i-1}, x_i] \cap [x_{j-1}, x_j] = \{x_i\}$, and if $j \ne i + 1$ then $[x_{i-1}, x_i] \cap [x_{j-1}, x_j] = \emptyset$.
   - (iii) If $x \in [a, b] - P$, then the $i$ in (i) is unique and $x_{i-1} < x < x_i$.
4. (The simplest partition) $\{a, b\}$ is a partition of $[a, b]$ with $2$ elements ($n = 1$), and its points are $x_0 = a$, $x_1 = b$. Its only subinterval is $[a, b]$, of length $b - a$. Conversely, if a partition $P$ of $[a, b]$ has $2$ elements, then $P = \{a, b\}$.
5. (Defining a partition by its points) Let $n \ge 1$ be an integer, and suppose that for each integer $i$ with $0 \le i \le n$ a real number $t_i$ is determined by a formula or by an already determined object (in the sense of item (1) of the entry on real-valued functions). If $t_0 = a$, $t_n = b$, and $t_i < t_j$ for all integers $i$, $j$ with $0 \le i < j \le n$, then the set $T = \{t_i : i \text{ an integer with } 0 \le i \le n\}$ is a partition of $[a, b]$ with $n + 1$ elements, and its points are $x_i = t_i$ for all $i$ with $0 \le i \le n$.
6. (The set of all partitions) The set of all partitions of $[a, b]$ is the subset of $\mathscr{P}([a, b])$ consisting of all elements $P$ of $\mathscr{P}([a, b])$ such that "$P$ is a finite set, $a \in P$, and $b \in P$". By (4) it has $\{a, b\}$ as an element, so it is nonempty.
7. (Sum of the lengths) Finite sums are those of the entry on finite sums of real numbers. The lengths $\Delta x_i$ are terms determined for $1 \le i \le n$, and
   $$
   \sum_{i=1}^{n} \Delta x_i = b - a .
   $$
:::

## 직관

막대기 위에 칼집을 몇 군데 낸다고 생각해 봅시다. 막대기의 양 끝도 칼집으로 셉니다. 칼집의 자리를 모은 집합이 분할 $P$이고, 칼집이 유한 개라는 것이 "$P$는 유한집합", 양 끝이 들어 있다는 것이 "$a \in P$이고 $b \in P$"입니다. 칼집에 왼쪽부터 $0, 1, 2, \dots$로 번호를 붙인 것이 점 $x_0, x_1, \dots, x_n$이고, 이웃한 두 칼집 사이의 토막이 작은 구간, 토막의 길이가 $\Delta x_i$입니다.

번호를 붙이는 일은 1단원의 [[increasing-listing-of-finite-set|크기순 나열]]이 맡습니다. 크기순 나열은 $1$부터 번호를 붙이므로, 출처를 따라 $0$부터 쓰려고 번호를 하나씩 당겨 $x_i = u(i + 1)$로 둡니다. 크기순 나열이 하나뿐이므로 점의 번호도 $P$만으로 정해집니다((1)).

비유와 다른 점이 하나 있습니다. 막대기를 자르면 토막들은 떨어지지만, 작은 구간은 닫힌구간이어서 이웃한 두 작은 구간이 칼집 자리의 점 하나를 함께 가집니다((3)의 (ii)). 그래서 작은 구간이 둘 이상일 때 작은 구간들을 모은 것은 [[partition|집합의 분할]]이 되지 않습니다(아래 반례). 칼집이 아닌 자리에 있는 점은 정확히 한 토막의 안쪽에 들어갑니다((3)의 (iii)).

## 증명

:::idea
점과 그 순서에 관한 사실은 모두 크기순 나열의 (1), (2)를 번호 $i + 1$에 쓴 것이다. 덮는 방식은 "$x \le x_i$인 가장 작은 $i$"를 정렬 원리로 잡아 보이고, (5)는 크기순 나열의 (1)의 마지막 문장을 쓴다.
:::

:::hint
(1)에서 $n \ge 1$: $P$가 원소를 $1$개만 가지면 $a$와 $b$가 둘 다 그 하나뿐인 원소와 같아야 한다.
:::

:::hint
(3)의 (i): $x \in [a, b]$이면 $x \le x_n$이므로 $\{i : 1 \le i \le n, \ x \le x_i\}$는 공집합이 아니다. 그 최소 원소를 $k$라 하면 $k - 1$은 이 집합에 들지 않는다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]의 (1)–(3)으로 다루고, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽는다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로 다루고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다. "나열 (1)", "나열 (2)"는 [[increasing-listing-of-finite-set]]의 번호이다. $0 \le i \le n$인 정수 $i$에 대하여 (Z7)에 의해 $1 \le i + 1 \le n + 1$이므로 $u(i + 1)$이 정해진다.

**1의 증명.** $P$는 유한집합이므로 $P$가 원소를 $N$개 갖게 하는 정수 $N \ge 0$이 있고, [[number-of-elements-is-unique]]의 (1)에 의해 이 $N$은 하나뿐이다. $a \in P$이므로 $P \ne \emptyset$이고, [[finite-set]]의 (F2)에 의해 원소를 $0$개 갖는 집합은 $\emptyset$뿐이므로 $N \ne 0$이다. 따라서 (Z5)와 (Z1)에 의해 $N \ge 1$이다. $N = 1$이라 하자. 그러면 전단사 $h : \{1\} \to P$가 있다(여기서 $\{1, \dots, 1\}$은 $1 \le i \le 1$인 정수 $i$의 집합이고 (L2)에 의해 $\{1\}$이다). $h$가 전사이므로 $a = h(i)$, $b = h(j)$인 $i, j \in \{1\}$이 있고, $i = j = 1$이므로 $a = b$이다. 이는 $a < b$와 함께 성립하지 않는다([[order-properties-of-reals]]의 (1)의 (i)). 따라서 $N \ne 1$이고, (Z5)와 (Z1)에 의해 $N \ge 2$이다. $n = N - 1$로 두면 $n$은 정수이고 (Z7)에 의해 $n \ge 1$이며, $P$가 원소를 $n + 1$개 갖게 하는 정수는 이 $n$뿐이다($n' + 1 = N$이면 $n' = n$). 나열 (1)에 의해 $P$의 크기순 나열 $u$는 $P$만으로 정해지므로 점 $x_i = u(i + 1)$도 그렇다.

나열 (2)에 의해 $x_0 = u(1) = \min P$이고 $x_n = u(n + 1) = \max P$이다. 한편 $a \in P$이고, $P \subseteq [a, b]$이므로 $P$의 모든 원소 $x$에서 $a \le x$이다. 곧 $a$는 $P$의 원소이면서 하계이므로 $P$의 최솟값이고, [[upper-bound-and-supremum]]의 (1)에 의해 $\min P = a$이다. 같은 방식으로 $b \in P$이고 $P$의 모든 원소 $x$에서 $x \le b$이므로 $\max P = b$이다.

$0 \le i, j \le n$인 정수 $i$, $j$에 대하여, 나열 (2)에 의해 $x_i < x_j$, 곧 $u(i + 1) < u(j + 1)$인 것은 정확히 $i + 1 < j + 1$일 때이고, (Z7)에 의해 이는 정확히 $i < j$일 때이다($1$을 더하거나 빼도 부등식이 유지된다). $\le$도 같다. $x_i = x_j$이면 $x_i \le x_j$이고 $x_j \le x_i$이므로 $i \le j$이고 $j \le i$이어서 (L2)에 의해 $i = j$이다. 거꾸로 $i = j$이면 $x_i = x_j$이다.

$u$가 전사이므로 $P$의 원소 $p$마다 $p = u(m)$인 $m \in \{1, \dots, n + 1\}$이 있고, $i = m - 1$은 $0 \le i \le n$인 정수이며 $p = u(i + 1) = x_i$이다. 거꾸로 $x_i = u(i + 1) \in P$이다. 따라서 $P = \{x_i : 0 \le i \le n\}$이다. 끝으로 $x_i \in P \subseteq [a, b]$이므로 $a \le x_i \le b$이다.

**2의 증명.** $1 \le i \le n$이면 $i - 1$은 정수이고 $0 \le i - 1$이며, (L3)에 의해 $i - 1 < i$이므로 (1)에 의해 $x_{i-1} < x_i$이다. [[order-properties-of-reals]]의 (3)의 (i)에 의해 $\Delta x_i = x_i - x_{i-1} > 0$이다. $x_{i-1} < x_i$이므로 [[interval]]의 (3)에 의해 $x_{i-1}$과 $x_i$는 $[x_{i-1}, x_i]$의 원소이다. $[a, b]$는 [[interval]]의 (1)에 의해 구간이고 $x_{i-1}$, $x_i$는 (1)에 의해 그 원소이므로, [[interval]]의 (4)에 의해 $[x_{i-1}, x_i] \subseteq [a, b]$이다.

**3의 증명.** (i): $x \in [a, b]$라 하고 $K = \{i \in \mathbb{Z} : 1 \le i \le n, \ x \le x_i\}$로 두자. $x \le b = x_n$이고 $1 \le n$이므로 $n \in K$이다. $K$는 $\mathbb{N}$의 공집합이 아닌 부분집합이므로 [[well-ordering-principle]]의 (2)에 의해 최소 원소 $k$가 있고, $x \le x_k$이다. (Z5)와 (Z1)에 의해 $k = 1$이거나 $k \ge 2$이다. $k = 1$이면 $x_0 = a \le x$이다. $k \ge 2$이면 $k - 1$은 $1 \le k - 1 \le n$인 정수이다. $k - 1 \in K$라면 최소 원소의 정의에 의해 $k \le k - 1$인데 (L3)의 $k - 1 < k$와 함께 성립하지 않으므로((L1)) $k - 1 \notin K$이다. 곧 $x \le x_{k-1}$가 아니므로 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $x_{k-1} < x$이다. 어느 경우나 $x_{k-1} \le x \le x_k$, 곧 $x \in [x_{k-1}, x_k]$이다.

(ii): $1 \le i < j \le n$이라 하자. (Z1)에 의해 $i + 1 \le j$, 곧 $i \le j - 1$이므로 (1)에 의해 $x_i \le x_{j-1}$이다. $y \in [x_{i-1}, x_i] \cap [x_{j-1}, x_j]$라 하자. 그러면 $x_{j-1} \le y$이고 $y \le x_i \le x_{j-1}$이다. [[order-properties-of-reals]]의 (1)의 (v)와 (ii)에 의해 $y = x_{j-1}$이고, 같은 방식으로 $x_i \le x_{j-1} = y \le x_i$에서 $y = x_i$이다. 따라서 $x_i = x_{j-1}$이고, (1)에 의해 $i = j - 1$, 곧 $j = i + 1$이다. 그러므로 $j \ne i + 1$이면 교집합에 원소가 없어 공집합이다. $j = i + 1$이면 교집합의 원소는 $x_i$뿐이고, (2)에 의해 $x_i$는 $[x_{i-1}, x_i]$와 $[x_i, x_{i+1}]$의 원소이므로 교집합은 $\{x_i\}$이다.

(iii): $x \in [a, b] - P$라 하자. (i)에 의해 $x \in [x_{i-1}, x_i]$인 $i$가 있다. $j \ne i$이고 $x \in [x_{j-1}, x_j]$인 $j$($1 \le j \le n$)가 있다고 하자. (Z5)에 의해 $i < j$이거나 $j < i$이다. $i < j$이면 (ii)에 의해 교집합 $[x_{i-1}, x_i] \cap [x_{j-1}, x_j]$은 공집합이거나 $\{x_i\}$이므로 $x = x_i \in P$이고, $j < i$이면 같은 까닭으로 $x = x_j \in P$이다. 어느 쪽도 $x \notin P$와 맞지 않으므로 그런 $j$는 없다. 또 $x_{i-1}, x_i \in P$이고 $x \notin P$이므로 $x \ne x_{i-1}$, $x \ne x_i$이고, $x_{i-1} \le x \le x_i$에서 $x_{i-1} < x < x_i$이다.

**5의 증명.** $j \in \{1, \dots, n + 1\}$이면 $j - 1$은 $0 \le j - 1 \le n$인 정수이다. [[real-valued-function]]의 (1)을 $S = \{1, \dots, n + 1\}$에 써서 $v(j) = t_{j-1}$로 정한 함수 $v : \{1, \dots, n + 1\} \to \mathbb{R}$를 얻는다. $j < j'$이면 (Z7)에 의해 $j - 1 < j' - 1$이므로 $v(j) = t_{j-1} < t_{j'-1} = v(j')$이고, $v$는 순증가이다. $v$의 치역 $\{t_{j-1} : j \in \{1, \dots, n + 1\}\}$은 $T$와 같다($i = j - 1$로 바꾸어 읽는다). 나열 (1)의 마지막 문장에 의해 $T$는 원소를 $n + 1$개 갖고, $v$(공역을 $T$로 둔 것)는 $T$의 크기순 나열이다.

$0 \le i \le n$이면 $t_0 \le t_i$이고($i = 0$이면 같고, $0 < i$이면 가정에 의해 $t_0 < t_i$) 같은 방식으로 $t_i \le t_n$이다. 곧 $a \le t_i \le b$이므로 $T \subseteq [a, b]$이다. $a = t_0 \in T$, $b = t_n \in T$이고 $T$는 유한집합이므로 $T$는 $[a, b]$의 분할이다. 나열 (1)에 의해 $T$의 크기순 나열은 $v$뿐이므로 $T$의 점은 $x_i = v(i + 1) = t_i$이다.

**4의 증명.** (5)를 $n = 1$, $t_0 = a$, $t_1 = b$에 쓴다. $0 \le i < j \le 1$인 정수는 (Z1)에 의해 $i = 0$, $j = 1$뿐이고 $t_0 = a < b = t_1$이다. $0 \le i \le 1$인 정수 $i$는 $0$과 $1$뿐이므로 $T = \{a, b\}$이다. 따라서 $\{a, b\}$는 원소를 $2$개 갖는 $[a, b]$의 분할이고 그 점은 $x_0 = a$, $x_1 = b$이다. 작은 구간은 $i = 1$인 $[x_0, x_1] = [a, b]$ 하나이고 길이는 $b - a$이다. 거꾸로 $P$가 원소를 $2$개 가지면 (1)의 $n$은 $1$이고, (1)에 의해 $P = \{x_0, x_1\} = \{a, b\}$이다.

**6의 증명.** $[a, b]$의 분할의 정의에서 $P \subseteq [a, b]$는 [[power-set]]의 정의에 의해 $P \in \mathscr{P}([a, b])$와 같다. 따라서 $P$가 $[a, b]$의 분할인 것은 정확히 $P \in \mathscr{P}([a, b])$이고 $P$가 유한집합이며 $a, b \in P$일 때이다. (4)에 의해 $\{a, b\}$가 그 원소이다.

**7의 증명.** 점 $x_0, \dots, x_n$은 [[telescoping-sum]]의 "0 부터 번호가 붙은 실수"이고($x_i = u(i + 1)$로 정해진다), $\Delta x_i = x_i - x_{i-1}$이다. 그 (1)을 $j = 0$, $k = n$에 쓰면 $\sum_{i=1}^{n} \Delta x_i = \sum_{i=1}^{n} (x_i - x_{i-1}) = x_n - x_0$이고, (1)에 의해 이는 $b - a$이다. $\blacksquare$
:::

## 예시와 반례

:::example[[−1, 3] 의 분할]
$P = \{3, -1, 2, 1\}$은 $[-1, 3]$의 분할입니다. 네 원소가 모두 $-1$ 이상 $3$ 이하이고, 끝점 $-1$과 $3$이 들어 있으며, 유한집합이기 때문입니다. 원소를 $4$개 가지므로 $n = 3$이고, 크기순으로 늘어놓으면 점은 $x_0 = -1$, $x_1 = 1$, $x_2 = 2$, $x_3 = 3$입니다. 집합을 적은 순서와 점의 번호는 상관이 없습니다.

작은 구간은 $[-1, 1]$, $[1, 2]$, $[2, 3]$이고 길이는 $\Delta x_1 = 2$, $\Delta x_2 = 1$, $\Delta x_3 = 1$입니다. $x = 1.5$는 $P$에 속하지 않으므로 (3)의 (iii)대로 둘째 작은 구간 하나에만 들고 $1 < 1.5 < 2$입니다. $x = 1$은 $P$의 점이어서 첫째와 둘째 작은 구간에 모두 들고, (3)의 (ii)대로 $[-1, 1] \cap [1, 2] = \{1\}$입니다. 첫째와 셋째 작은 구간은 이웃하지 않으므로 $[-1, 1] \cap [2, 3] = \emptyset$입니다.
:::

:::counterexample[작은 구간들과 집합의 분할]
위 예의 작은 구간들을 모은 집합 $\mathcal{S} = \{[-1, 1], [1, 2], [2, 3]\}$은 $[-1, 3]$의 [[partition|집합의 분할]]이 아닙니다. 집합의 분할은 서로 다른 두 원소가 서로소여야 하는데, $[-1, 1] \ne [1, 2]$이면서($-1$은 앞의 것에 속하고 뒤의 것에는 속하지 않습니다) $[-1, 1] \cap [1, 2] = \{1\}$이기 때문입니다. 작은 구간이 둘 이상인($n \ge 2$) 분할에서는 언제나 이와 같습니다. (3)의 (ii)에 의해 첫째와 둘째 작은 구간의 교집합은 $\{x_1\}$이고, $x_0 < x_1$이므로 $x_0$은 첫째 작은 구간에 속하지만 둘째 작은 구간에는 속하지 않아 두 작은 구간이 서로 다르기 때문입니다.

작은 구간이 하나뿐인 분할 $\{a, b\}$에서는 사정이 다릅니다. $\{[a, b]\}$는 $[a, b]$의 집합의 분할이 됩니다. 원소가 하나뿐이어서 서로소 조건을 따질 쌍이 없고, $[a, b]$는 공집합이 아니며 $[a, b]$의 모든 원소를 덮기 때문입니다. 그래도 "$[a, b]$의 분할" $\{a, b\}$(실수 두 개의 집합)와 집합의 분할 $\{[a, b]\}$(구간 하나를 원소로 갖는 집합)는 서로 다른 집합입니다.
:::

:::counterexample[유한이 아닌 집합]
$F = \{1/k : k \in \mathbb{N}\}$, $E = \{0\} \cup F$로 두면 $E$는 $0$과 $1$($k = 1$)을 원소로 갖고 $[0, 1]$의 부분집합입니다(자연수 $k$는 $1 \le k$이므로 [[order-properties-of-reals]]의 (10)과 (6)에 의해 $0 < 1/k \le 1$입니다). 그러나 $E$는 $[0, 1]$의 분할이 아닙니다. 유한집합이 아니기 때문입니다. $k$에 $1/k$를 대응시키는 함수 $g : \mathbb{N} \to F$는 전사이고, $k < l$이면 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $1/l < 1/k$이므로 단사입니다. $E$가 유한집합이라면 그 부분집합 $F$도 유한집합이고([[subset-of-finite-set]]의 (1)), [[finite-set]]의 (F3)에 의해 $g$의 역관계는 $F$에서 $\mathbb{N}$으로의 전단사이므로 (F4)에 의해 $\mathbb{N}$도 유한집합이 되어 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)과 맞지 않습니다.

이런 집합에는 점의 번호를 붙일 수 없습니다. $0$ 바로 다음 점이 될 원소가 없기 때문입니다. $E$의 $0$이 아닌 원소 $1/k$마다 그보다 작은 원소 $1/(k + 1)$이 $0$과 $1/k$ 사이에 있습니다.
:::

## 확인 질문

:::check[$[0, 1]$의 분할이면서 $[0, 2]$의 분할인 집합이 있는가?]
없습니다. $[0, 2]$의 분할은 $2$를 원소로 가져야 하고, $[0, 1]$의 분할은 $[0, 1]$의 부분집합이어야 하는데 $2 \notin [0, 1]$이기 때문입니다. 분할은 어느 구간의 분할인지까지 함께 정해지는 개념이고, 그래서 늘 "$[a, b]$의 분할"이라고 구간을 붙여 씁니다.
:::

:::check[작은 구간의 길이가 모두 $1$보다 큰 $[0, 3]$의 분할은 원소를 몇 개 가질 수 있는가?]
$2$개나 $3$개입니다. $\{0, 3\}$($n = 1$, 길이 $3$)과 $\{0, 1.5, 3\}$($n = 2$, 길이 $1.5$, $1.5$)이 그런 분할입니다. $n \ge 3$이면 $x_1 > x_0 + 1 = 1$, $x_2 > x_1 + 1 > 2$, $x_3 > x_2 + 1 > 3$인데, (1)에 의해 $x_3 \le x_n = 3$이므로($3 \le n$) 맞지 않습니다. 따라서 $n$은 $1$이나 $2$이고 원소의 개수 $n + 1$은 $2$나 $3$입니다.
:::
