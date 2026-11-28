---
title: 집합열과 그 합집합·교집합
title_en: Sequences of Sets and Their Unions and Intersections
aliases: [집합열, 집합의 열, 첨수가 붙은 합집합, 서로소인 집합열, 증가하는 집합열, 감소하는 집합열, 집합열의 상극한, 집합열의 하극한, sequence of sets, pairwise disjoint sequence, limit superior of sets, limit inferior of sets]
kind: definition
field: measure-theory
msc: ["28A05", "03E20"]
level: undergrad
summary: 집합 X 의 부분집합을 자연수마다 하나씩 정한 함수를 집합열이라 하고, 번호의 집합 위에서 그 합집합과 교집합, 서로소·증가·감소, 상극한과 하극한을 정의한 뒤, 원소 판정, 유한 합집합의 재귀, 드 모르간 법칙, 역상, 서로소로 바꾸기를 증명한다.
requires: [set, subset, set-operations, power-set, function, image-and-preimage, divisibility, quantifiers, negation-of-quantified-statements, mathematical-induction, family-of-sets, recursion-theorem, finite-set, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 2.4절 Sequences of sets, Definition 2.34 (p.41), Proposition 2.36 (p.42–43), Definition 2.37과 Proposition 2.38 (p.43–44), Proposition 2.42 (p.45–46); 2.6절 Exercise 2.1 (p.51), Exercise 2.30 (p.55), Exercise 2.32 (p.56); 4.1절 Definitions and examples, Theorem 4.14 의 증명 (p.97–98)
    checked: original
    note: "출처 Definition 2.34 는 공집합이 아닌 집합 X 의 부분집합의 열을 함수 f : N → P(X) 로 정의하고 A_k = f(k) 로 쓴다. 이 항목은 X 가 공집합이어도 된다. 출처 2.4절은 ⋃_{k=1}^∞, ⋃_{i=1}^{k−1} 같은 첨수가 붙은 합집합을 Proposition 2.36 과 Definition 2.37 에서 쓴다. 이 항목은 그것을 집합족의 합집합으로 정의하고, 유한 합집합이 재귀로 얻는 것과 같다는 것((3))을 증명했다. 출처 Proposition 2.36 은 유한 합집합과 차집합에 닫힌 족 R 의 원소열에서 E_1 = A_1, E_k = A_k ∖ ⋃_{i=1}^{k−1} A_i (k ≥ 2) 로 두고 (a) E_k ⊂ A_k, (b) 서로소, (c) 모든 j 에서 ⋃_{k=1}^{j} E_k = ⋃_{k=1}^{j} A_k 를 진술한다. 이 항목의 (7)은 족 R 없이 같은 열을 정의하고, (c) 에 더해 전체 합집합의 등식과 증가하는 열의 꼴 E_n = A_n − A_{n−1} 을 덧붙였다. 출처의 (c) 의 증명은 'x ∈ A_{k_0} 인 첫 자연수 k_0' 를 쓰고, 이 항목도 정렬 원리의 가장 작은 원소로 같은 일을 한다. 출처 Definition 2.37 은 lim inf A_k = ⋃_k ⋂_{j≥k} A_j, lim sup A_k = ⋂_k ⋃_{j≥k} A_j 로 정의하고 Proposition 2.38 은 lim inf ⊂ lim sup 과 여집합의 두 등식을 진술한다(이 항목의 (8)의 셋째 문장과 (4)의 둘째 문장). Exercise 2.30 은 x ∈ lim inf A_k ⇔ 'x ∈ A_j for every j ≥ k 인 k 가 있다', x ∈ lim sup A_k ⇔ 'x ∈ A_k for infinitely many k' 를 증명하라고 한다. 이 항목의 (8)은 둘째를 '모든 자연수 M 에 대하여 n ≥ M 이고 x ∈ A_n 인 n 이 있다' 꼴로 쓴다. Exercise 2.1 은 ⋂A_k = A_1 ∖ ⋃(A_1 ∖ A_k) 를 묻는다. 출처 Proposition 2.42 의 증명(p.45)은 증가하는 열에서 ⋃_{j≥k} A_j = ⋃_{j≥1} A_j, ⋂_{j≥k} A_j = A_k 를 쓴다(이 항목의 (6)과 같은 사실). 예시 '증가하는 구간의 열을 서로소로 바꾸기'는 출처 Theorem 4.14 의 증명(p.97–98)이 증가하는 열에서 D_k = A_k ∖ A_{k−1} 로 서로소인 열을 만드는 것과 같은 발상이고, 출처 Exercise 2.32(p.56)도 A_k = [0, a_k] 꼴의 집합열을 다룬다(그 연습문제는 하극한과 상극한을 묻는다). '상극한', '하극한'이라는 이름과 '집합열', '서로소인 집합열', '증가하는 집합열'이라는 낱말은 출처의 limit superior, limit inferior, sequence of subsets, pairwise disjoint, increasing 을 옮긴 것이다."
  - ref: lebl-basic-analysis
    loc: 0.3.1절 Sets, 첨수가 붙은 합집합과 교집합의 정의 (p.11); 0.3.6절 Exercise 0.3.8 (p.20), Exercise 0.3.26 (p.21)
    checked: original
    note: "출처는 0.3.1절(p.11)에서 집합의 모임 {A_1, A_2, A_3, …} 에 대하여 ⋃_{n=1}^∞ A_n 을 '어떤 n ∈ ℕ 에서 x ∈ A_n 인 x 전체', ⋂_{n=1}^∞ A_n 을 '모든 n ∈ ℕ 에서 x ∈ A_n 인 x 전체'로 정의하고 전체집합을 정하지 않는다. 이 항목의 (1)은 같은 원소 판정을 집합족의 합집합·교집합에서 얻는다. Exercise 0.3.8 은 A_n = {(n + 1)k : k ∈ ℕ} 의 ⋃ 과 ⋂ 을 구하라고 하고, Exercise 0.3.26 은 첨수가 붙은 족의 드 모르간 법칙을 증명하라고 한다(이 항목의 (4)의 첫 문장과 같은 꼴)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
집합, 부분집합, 두 집합의 합집합·교집합·차집합은 [[set]], [[subset]], [[set-operations|집합의 연산]]의 것이고, $\mathscr{P}(X)$는 [[power-set]], 함수와 함수의 같음은 [[function]], 역상 $f^{-1}(V)$는 [[image-and-preimage|상과 역상]]의 것이다. 집합족과 그 합집합 $\bigcup \mathcal{A}$·교집합 $\bigcap \mathcal{A}$, 빈 집합족, 식으로 정한 집합족은 [[family-of-sets|집합족의 합집합과 교집합]]의 것이다. $\{1, \dots, N\}$($N$은 $0$ 이상인 정수)은 [[finite-set]]의 것이고, $\mathbb{N}$은 양의 정수의 집합이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 아래에서 $X$는 집합이다.

**집합열.** 함수 $A : \mathbb{N} \to \mathscr{P}(X)$를 $X$의 **집합열**(sequence of subsets of $X$)이라 한다. 자연수 $n$에서의 값 $A(n)$을 $A_n$으로 쓰고 집합열 $A$를 $(A_n)$으로 나타낸다. 각 $A_n$은 $X$의 부분집합이다. [[function]]의 함수의 같음에 의해 두 집합열 $(A_n)$, $(B_n)$이 같은 것은 정확히 모든 자연수 $n$에서 $A_n = B_n$일 때이다. 각 자연수 $n$마다 $X$의 부분집합 $F(n)$이 [[recursion-theorem|재귀 정리]]의 (1)의 뜻으로 정해져 있으면(식이나 이미 정해진 대상으로 주어져 있으면), 그 (1)에 의해 $\{(n, F(n)) : n \in \mathbb{N}\}$은 $n$번째 값이 $F(n)$인 집합열이다. 이것을 "$n$번째 항이 $F(n)$인 집합열"이라 부른다.

**번호의 집합 위의 합집합과 교집합.** $(A_n)$을 $X$의 집합열, $T$를 $\mathbb{N}$의 부분집합이라 하자. 각 $n \in T$에서 $A_n$은 이미 정해진 대상이므로 $\{A_n : n \in T\}$는 식으로 정한 집합족, 곧 $X$의 집합족이다. 다음과 같이 쓴다.
$$
\begin{gathered} \bigcup_{n \in T} A_n = \bigcup \{A_n : n \in T\}, \\ \bigcap_{n \in T} A_n = \bigcap \{A_n : n \in T\} \end{gathered}
$$
교집합은 $X$의 집합족으로 본 교집합이다. 특히 다음과 같이 쓴다. 아래에서 $M$은 자연수, $N$은 $0$ 이상인 정수이다.

- $T = \mathbb{N}$이면 $\bigcup_{n=1}^{\infty} A_n$, $\bigcap_{n=1}^{\infty} A_n$.
- $T = \{n \in \mathbb{N} : M \le n\}$이면 $\bigcup_{n=M}^{\infty} A_n$, $\bigcap_{n=M}^{\infty} A_n$.
- $T = \{1, \dots, N\}$이면 $\bigcup_{n=1}^{N} A_n$, $\bigcap_{n=1}^{N} A_n$.

기호 안의 $\infty$는 수가 아니라 기호의 일부이다. 글자 $n$은 기호 안에서만 쓰는 이름이므로 다른 글자로 바꿔도 같은 집합이다. $T = \emptyset$이면(예: $N = 0$) $\{A_n : n \in T\}$는 빈 집합족이므로 $\bigcup_{n \in T} A_n = \emptyset$이고 $\bigcap_{n \in T} A_n = X$이다.

**서로소, 증가, 감소.** 집합열 $(A_n)$이

- **서로소**(pairwise disjoint)인 것은 정확히 $n \ne m$인 모든 자연수 $n$, $m$에서 $A_n \cap A_m = \emptyset$일 때이고,
- **증가한다**(increasing)는 것은 정확히 모든 자연수 $n$에서 $A_n \subseteq A_{n+1}$일 때이고,
- **감소한다**(decreasing)는 것은 정확히 모든 자연수 $n$에서 $A_{n+1} \subseteq A_n$일 때이다.

**상극한과 하극한.** 집합열 $(A_n)$에 대하여 $M$번째 항이 $\bigcup_{n=M}^{\infty} A_n$인 집합열과 $M$번째 항이 $\bigcap_{n=M}^{\infty} A_n$인 집합열로
$$
\begin{gathered} \limsup_{n \to \infty} A_n = \bigcap_{M=1}^{\infty} \Bigl( \bigcup_{n=M}^{\infty} A_n \Bigr), \\ \liminf_{n \to \infty} A_n = \bigcup_{M=1}^{\infty} \Bigl( \bigcap_{n=M}^{\infty} A_n \Bigr) \end{gathered}
$$
를 $(A_n)$의 **상극한**(limit superior), **하극한**(limit inferior)이라 한다. 둘 다 $X$의 부분집합이다. 실수열의 상극한·하극한과 같은 이름이지만 이것은 집합열에 대한 것이다.

다음이 성립한다. 아래에서 $(A_n)$은 $X$의 집합열이고 $T$, $T'$은 $\mathbb{N}$의 부분집합이다.

1. (원소 판정) 대상 $a$가 $\bigcup_{n \in T} A_n$의 원소인 것은 정확히 $a \in A_n$인 $n \in T$가 있을 때이다. $a$가 $\bigcap_{n \in T} A_n$의 원소인 것은 정확히 $a \in X$이고 모든 $n \in T$에서 $a \in A_n$일 때이며, $T \ne \emptyset$이면 "$a \in X$"를 빼고 "모든 $n \in T$에서 $a \in A_n$일 때"라 해도 같다. 따라서 $Y$가 집합이고 모든 $A_n$이 $Y$의 부분집합이면, $(A_n)$을 $Y$의 집합열로 보아도 $\bigcup_{n \in T} A_n$은 같은 집합이고, $T \ne \emptyset$이면 $\bigcap_{n \in T} A_n$도 같은 집합이다.
2. (포함) $m \in T$이면 $\bigcap_{n \in T} A_n \subseteq A_m \subseteq \bigcup_{n \in T} A_n$이다. $T \subseteq T'$이면 $\bigcup_{n \in T} A_n \subseteq \bigcup_{n \in T'} A_n$이고 $\bigcap_{n \in T'} A_n \subseteq \bigcap_{n \in T} A_n$이다. $S \subseteq X$이면, $\bigcup_{n \in T} A_n \subseteq S$인 것은 정확히 모든 $n \in T$에서 $A_n \subseteq S$일 때이다.
3. (유한 합집합과 유한 교집합) $\bigcup_{n=1}^{0} A_n = \emptyset$이고, $0$ 이상인 모든 정수 $N$에서
   $$
   \bigcup_{n=1}^{N+1} A_n = \Bigl( \bigcup_{n=1}^{N} A_n \Bigr) \cup A_{N+1}
   $$
   이다. $\bigcap_{n=1}^{1} A_n = A_1$이고, 모든 자연수 $N$에서 $\bigcap_{n=1}^{N+1} A_n = \bigl( \bigcap_{n=1}^{N} A_n \bigr) \cap A_{N+1}$이다. 또 $N$번째 항이 $\bigcup_{n=1}^{N} A_n$인 집합열은 증가하고 그 합집합은 $\bigcup_{n=1}^{\infty} A_n$이며, $N$번째 항이 $\bigcap_{n=1}^{N} A_n$인 집합열은 감소하고 그 교집합은 $\bigcap_{n=1}^{\infty} A_n$이다.
4. (드 모르간 법칙) $n$번째 항이 $X - A_n$인 집합열에 대하여
   $$
   \begin{gathered} X - \bigcup_{n \in T} A_n = \bigcap_{n \in T} (X - A_n), \\ X - \bigcap_{n \in T} A_n = \bigcup_{n \in T} (X - A_n) \end{gathered}
   $$
   이다($T = \emptyset$일 때에도 성립한다). 따라서 $X - \limsup_{n \to \infty} A_n = \liminf_{n \to \infty} (X - A_n)$이고 $X - \liminf_{n \to \infty} A_n = \limsup_{n \to \infty} (X - A_n)$이다.
5. (분배법칙과 역상) $S \subseteq X$이면 $n$번째 항이 $S \cap A_n$인 집합열에 대하여 $S \cap \bigcup_{n \in T} A_n = \bigcup_{n \in T} (S \cap A_n)$이다. $Y$가 집합이고 $f : Y \to X$가 함수이면 $n$번째 항이 $f^{-1}(A_n)$인 것은 $Y$의 집합열이고
   $$
   \begin{gathered} f^{-1}\Bigl( \bigcup_{n \in T} A_n \Bigr) = \bigcup_{n \in T} f^{-1}(A_n), \\ f^{-1}\Bigl( \bigcap_{n \in T} A_n \Bigr) = \bigcap_{n \in T} f^{-1}(A_n) \end{gathered}
   $$
   이다. 둘째 등식의 오른쪽은 $Y$의 집합족으로 본 교집합이고, 두 등식은 $T = \emptyset$일 때에도 성립한다.
6. (증가하는 열과 감소하는 열) $(A_n)$이 증가하면, $n \le m$인 모든 자연수 $n$, $m$에서 $A_n \subseteq A_m$이고, 모든 자연수 $N$과 $M$에서
   $$
   \begin{gathered} \bigcup_{n=1}^{N} A_n = A_N, \\ \bigcap_{n=M}^{\infty} A_n = A_M, \\ \bigcup_{n=M}^{\infty} A_n = \bigcup_{n=1}^{\infty} A_n \end{gathered}
   $$
   이다. $(A_n)$이 감소하면, $n \le m$인 모든 자연수 $n$, $m$에서 $A_m \subseteq A_n$이고, 모든 자연수 $N$과 $M$에서 $\bigcap_{n=1}^{N} A_n = A_N$, $\bigcap_{n=M}^{\infty} A_n = \bigcap_{n=1}^{\infty} A_n$, $\bigcup_{n=M}^{\infty} A_n = A_M$이다.
7. (서로소로 바꾸기) $n$번째 항이
   $$
   E_n = A_n - \bigcup_{i=1}^{n-1} A_i
   $$
   인 집합열 $(E_n)$에 대하여 다음이 성립한다. $n = 1$이면 $\bigcup_{i=1}^{0} A_i = \emptyset$이므로 $E_1 = A_1$이다.
   - (i) 모든 자연수 $n$에서 $E_n \subseteq A_n$이다.
   - (ii) $(E_n)$은 서로소이다.
   - (iii) $0$ 이상인 모든 정수 $N$에서 $\bigcup_{n=1}^{N} E_n = \bigcup_{n=1}^{N} A_n$이고, $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$이다.
   - (iv) $(A_n)$이 증가하면, $2$ 이상인 모든 자연수 $n$에서 $E_n = A_n - A_{n-1}$이다.
8. (상극한과 하극한의 원소) 대상 $a$가 $\limsup_{n \to \infty} A_n$의 원소인 것은 정확히 모든 자연수 $M$에 대하여 $M \le n$이고 $a \in A_n$인 자연수 $n$이 있을 때이다. $a$가 $\liminf_{n \to \infty} A_n$의 원소인 것은 정확히 어떤 자연수 $M$이 있어 $M \le n$인 모든 자연수 $n$에서 $a \in A_n$일 때이다. 또 $\liminf_{n \to \infty} A_n \subseteq \limsup_{n \to \infty} A_n$이다.
:::

:::english
Sets, subsets, and the union, intersection, and difference of two sets are as in the entries on sets, subsets, and set operations; $\mathscr{P}(X)$ is the power set; functions and equality of functions are as in the entry on functions; and the preimage $f^{-1}(V)$ is as in the entry on images and preimages. Families of sets, their union $\bigcup \mathcal{A}$ and intersection $\bigcap \mathcal{A}$, the empty family, and families defined by a formula are as in the entry on unions and intersections of a family of sets. The set $\{1, \dots, N\}$ (for an integer $N \ge 0$) is as in the entry on finite sets, and $\mathbb{N}$ is the set of positive integers. The order of the integers is handled by (Z1) and (Z5)–(Z8). Throughout, $X$ is a set.

**Sequences of sets.** A function $A : \mathbb{N} \to \mathscr{P}(X)$ is called a **sequence of subsets of $X$**. Its value $A(n)$ at a natural number $n$ is written $A_n$, and the sequence $A$ is written $(A_n)$. Each $A_n$ is a subset of $X$. By equality of functions, two sequences of sets $(A_n)$ and $(B_n)$ are equal exactly when $A_n = B_n$ for every natural number $n$. If for each natural number $n$ a subset $F(n)$ of $X$ is determined in the sense of (1) of the recursion theorem (given by a formula or by an already determined object), then by that (1) the set $\{(n, F(n)) : n \in \mathbb{N}\}$ is a sequence of sets whose $n$th value is $F(n)$. We call it "the sequence of sets whose $n$th term is $F(n)$".

**Unions and intersections over a set of indices.** Let $(A_n)$ be a sequence of subsets of $X$ and let $T$ be a subset of $\mathbb{N}$. For each $n \in T$, $A_n$ is an already determined object, so $\{A_n : n \in T\}$ is a family defined by a formula, that is, a family of subsets of $X$. We write
$$
\begin{gathered} \bigcup_{n \in T} A_n = \bigcup \{A_n : n \in T\}, \\ \bigcap_{n \in T} A_n = \bigcap \{A_n : n \in T\} \end{gathered}
$$
The intersection is the intersection taken with the family regarded as a family of subsets of $X$. In particular we write the following, where $M$ is a natural number and $N$ is an integer with $N \ge 0$.

- If $T = \mathbb{N}$: $\bigcup_{n=1}^{\infty} A_n$, $\bigcap_{n=1}^{\infty} A_n$.
- If $T = \{n \in \mathbb{N} : M \le n\}$: $\bigcup_{n=M}^{\infty} A_n$, $\bigcap_{n=M}^{\infty} A_n$.
- If $T = \{1, \dots, N\}$: $\bigcup_{n=1}^{N} A_n$, $\bigcap_{n=1}^{N} A_n$.

The symbol $\infty$ inside these notations is not a number but part of the notation. The letter $n$ is a name used only inside the notation, so replacing it by another letter gives the same set. If $T = \emptyset$ (for example $N = 0$), then $\{A_n : n \in T\}$ is the empty family, so $\bigcup_{n \in T} A_n = \emptyset$ and $\bigcap_{n \in T} A_n = X$.

**Disjoint, increasing, decreasing.** A sequence of sets $(A_n)$ is

- **pairwise disjoint** exactly when $A_n \cap A_m = \emptyset$ for all natural numbers $n$, $m$ with $n \ne m$;
- **increasing** exactly when $A_n \subseteq A_{n+1}$ for every natural number $n$;
- **decreasing** exactly when $A_{n+1} \subseteq A_n$ for every natural number $n$.

**Limit superior and limit inferior.** For a sequence of sets $(A_n)$, using the sequence of sets whose $M$th term is $\bigcup_{n=M}^{\infty} A_n$ and the sequence of sets whose $M$th term is $\bigcap_{n=M}^{\infty} A_n$, the sets
$$
\begin{gathered} \limsup_{n \to \infty} A_n = \bigcap_{M=1}^{\infty} \Bigl( \bigcup_{n=M}^{\infty} A_n \Bigr), \\ \liminf_{n \to \infty} A_n = \bigcup_{M=1}^{\infty} \Bigl( \bigcap_{n=M}^{\infty} A_n \Bigr) \end{gathered}
$$
are called the **limit superior** and the **limit inferior** of $(A_n)$. Both are subsets of $X$. They share their names with the limit superior and limit inferior of a sequence of real numbers, but these are notions for sequences of sets.

The following hold. Below, $(A_n)$ is a sequence of subsets of $X$, and $T$, $T'$ are subsets of $\mathbb{N}$.

1. (Membership) An object $a$ belongs to $\bigcup_{n \in T} A_n$ exactly when there is $n \in T$ with $a \in A_n$. An object $a$ belongs to $\bigcap_{n \in T} A_n$ exactly when $a \in X$ and $a \in A_n$ for every $n \in T$; if $T \ne \emptyset$, the same holds with "$a \in X$" omitted, that is, exactly when $a \in A_n$ for every $n \in T$. Hence, if $Y$ is a set and every $A_n$ is a subset of $Y$, then regarding $(A_n)$ as a sequence of subsets of $Y$ gives the same set $\bigcup_{n \in T} A_n$, and, if $T \ne \emptyset$, the same set $\bigcap_{n \in T} A_n$.
2. (Inclusions) If $m \in T$, then $\bigcap_{n \in T} A_n \subseteq A_m \subseteq \bigcup_{n \in T} A_n$. If $T \subseteq T'$, then $\bigcup_{n \in T} A_n \subseteq \bigcup_{n \in T'} A_n$ and $\bigcap_{n \in T'} A_n \subseteq \bigcap_{n \in T} A_n$. If $S \subseteq X$, then $\bigcup_{n \in T} A_n \subseteq S$ exactly when $A_n \subseteq S$ for every $n \in T$.
3. (Finite unions and finite intersections) $\bigcup_{n=1}^{0} A_n = \emptyset$, and for every integer $N \ge 0$
   $$
   \bigcup_{n=1}^{N+1} A_n = \Bigl( \bigcup_{n=1}^{N} A_n \Bigr) \cup A_{N+1}.
   $$
   Also $\bigcap_{n=1}^{1} A_n = A_1$, and $\bigcap_{n=1}^{N+1} A_n = \bigl( \bigcap_{n=1}^{N} A_n \bigr) \cap A_{N+1}$ for every natural number $N$. Moreover, the sequence of sets whose $N$th term is $\bigcup_{n=1}^{N} A_n$ is increasing and its union is $\bigcup_{n=1}^{\infty} A_n$, and the sequence of sets whose $N$th term is $\bigcap_{n=1}^{N} A_n$ is decreasing and its intersection is $\bigcap_{n=1}^{\infty} A_n$.
4. (De Morgan's laws) For the sequence of sets whose $n$th term is $X - A_n$,
   $$
   \begin{gathered} X - \bigcup_{n \in T} A_n = \bigcap_{n \in T} (X - A_n), \\ X - \bigcap_{n \in T} A_n = \bigcup_{n \in T} (X - A_n) \end{gathered}
   $$
   (these also hold when $T = \emptyset$). Consequently $X - \limsup_{n \to \infty} A_n = \liminf_{n \to \infty} (X - A_n)$ and $X - \liminf_{n \to \infty} A_n = \limsup_{n \to \infty} (X - A_n)$.
5. (Distributivity and preimages) If $S \subseteq X$, then for the sequence of sets whose $n$th term is $S \cap A_n$ we have $S \cap \bigcup_{n \in T} A_n = \bigcup_{n \in T} (S \cap A_n)$. If $Y$ is a set and $f : Y \to X$ is a function, then the sequence whose $n$th term is $f^{-1}(A_n)$ is a sequence of subsets of $Y$, and
   $$
   \begin{gathered} f^{-1}\Bigl( \bigcup_{n \in T} A_n \Bigr) = \bigcup_{n \in T} f^{-1}(A_n), \\ f^{-1}\Bigl( \bigcap_{n \in T} A_n \Bigr) = \bigcap_{n \in T} f^{-1}(A_n) \end{gathered}.
   $$
   The right-hand side of the second equality is the intersection taken in $Y$, and both equalities also hold when $T = \emptyset$.
6. (Increasing and decreasing sequences) If $(A_n)$ is increasing, then $A_n \subseteq A_m$ for all natural numbers $n \le m$, and for all natural numbers $N$ and $M$
   $$
   \begin{gathered} \bigcup_{n=1}^{N} A_n = A_N, \\ \bigcap_{n=M}^{\infty} A_n = A_M, \\ \bigcup_{n=M}^{\infty} A_n = \bigcup_{n=1}^{\infty} A_n \end{gathered}.
   $$
   If $(A_n)$ is decreasing, then $A_m \subseteq A_n$ for all natural numbers $n \le m$, and for all natural numbers $N$ and $M$ we have $\bigcap_{n=1}^{N} A_n = A_N$, $\bigcap_{n=M}^{\infty} A_n = \bigcap_{n=1}^{\infty} A_n$, and $\bigcup_{n=M}^{\infty} A_n = A_M$.
7. (Making a sequence disjoint) For the sequence of sets $(E_n)$ whose $n$th term is
   $$
   E_n = A_n - \bigcup_{i=1}^{n-1} A_i
   $$
   the following hold. When $n = 1$, $\bigcup_{i=1}^{0} A_i = \emptyset$, so $E_1 = A_1$.
   - (i) $E_n \subseteq A_n$ for every natural number $n$.
   - (ii) $(E_n)$ is pairwise disjoint.
   - (iii) $\bigcup_{n=1}^{N} E_n = \bigcup_{n=1}^{N} A_n$ for every integer $N \ge 0$, and $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$.
   - (iv) If $(A_n)$ is increasing, then $E_n = A_n - A_{n-1}$ for every natural number $n \ge 2$.
8. (Elements of the limit superior and limit inferior) An object $a$ belongs to $\limsup_{n \to \infty} A_n$ exactly when for every natural number $M$ there is a natural number $n$ with $M \le n$ and $a \in A_n$. An object $a$ belongs to $\liminf_{n \to \infty} A_n$ exactly when there is a natural number $M$ such that $a \in A_n$ for every natural number $n$ with $M \le n$. Moreover, $\liminf_{n \to \infty} A_n \subseteq \limsup_{n \to \infty} A_n$.
:::

## 직관

집합열은 "첫째 집합, 둘째 집합, 셋째 집합, …"을 끝없이 늘어놓은 것입니다. 실수의 수열이 자연수마다 실수를 하나씩 정하듯, 집합열은 자연수마다 $X$의 부분집합을 하나씩 정합니다. 측도를 다룰 때는 이런 열의 합집합과 교집합을 자주 씁니다. [[family-of-sets|집합족]]은 이미 임의 개수의 합집합을 정해 두었으므로, 이 항목은 번호가 붙은 꼴 $\bigcup_{n=1}^{\infty} A_n$을 그 집합족의 합집합의 줄임 표기로 정합니다. 그래서 새로운 합집합이 생기는 것이 아니고 기호가 하나 생길 뿐입니다.

상극한과 하극한은 "번호가 커질 때 점이 집합들에 얼마나 자주 들어가는가"로 읽습니다. (8)에 의해, 점 $a$가 상극한에 속한다는 것은 아무리 큰 번호 $M$을 정해도 $M$ 이상인 번호에서 $a$를 품는 $A_n$이 또 나온다는 뜻이고, 하극한에 속한다는 것은 어느 번호부터는 모든 $A_n$이 $a$를 품는다는 뜻입니다. 줄을 서서 번호표를 받는 비유로 말하면, 하극한의 점은 어느 순간부터 매번 번호표를 받는 사람이고, 상극한의 점은 언제 확인해도 앞으로 또 번호표를 받을 사람입니다. 여기서 $n$번째 차례에 번호표를 받는 사람들이 $A_n$입니다. 비유가 맞지 않는 곳도 있습니다. 줄을 서는 사람은 유한하지만, $X$에는 끝없이 많은 점이 있을 수 있고 각 $A_n$도 무한집합일 수 있습니다.

(7)의 서로소로 바꾸기는 각 점을 그 점이 처음 나타나는 집합에만 남기는 일입니다. 점 $a$가 $A_1, A_2, \dots$ 가운데 처음 들어가는 집합이 $A_{n_0}$이면 $a$는 $E_{n_0}$에만 속하고, 합집합은 바뀌지 않습니다. 합집합에 관한 사실을 서로소인 집합에 관한 사실로 바꿀 때 이 열을 씁니다. $a$가 어느 $A_n$에도 들어가지 않으면 어느 $E_n$에도 들어가지 않습니다.

## 성질의 증명

:::proof
**준비.** $T \subseteq \mathbb{N}$이면 $\{A_n : n \in T\}$는 식으로 정한 집합족이므로, [[family-of-sets]]의 (9)에 의해 대상 $a$가 $\bigcup_{n \in T} A_n$의 원소인 것은 정확히 $a \in A_n$인 $n \in T$가 있을 때이고, $a$가 $\bigcap_{n \in T} A_n$의 원소인 것은 정확히 $a \in X$이고 모든 $n \in T$에서 $a \in A_n$일 때이다. 정수의 순서에 관한 사실은 (Z1), (Z5)–(Z8)을 쓰고, 자연수는 양의 정수이므로 (Z1)에 의해 $1$ 이상이다.

**(1)** 첫째 문장과 둘째 문장의 앞부분은 준비 그대로이다. $T \ne \emptyset$이라 하고 $n_0 \in T$를 하나 잡자. 모든 $n \in T$에서 $a \in A_n$이면 특히 $a \in A_{n_0}$이고 $A_{n_0} \subseteq X$이므로 $a \in X$이다. 따라서 "$a \in X$이고 모든 $n \in T$에서 $a \in A_n$"은 "모든 $n \in T$에서 $a \in A_n$"과 같다. 마지막 문장: $(A_n)$을 $Y$의 집합열로 보아도 원소 판정의 조건 "$a \in A_n$인 $n \in T$가 있다"는 그대로이므로 합집합은 같은 원소를 가진다. $T \ne \emptyset$이면 교집합의 조건도 "모든 $n \in T$에서 $a \in A_n$"으로 $X$와 $Y$에 상관없으므로 같은 원소를 가진다. 원소가 같은 두 집합은 같다([[set]]).

**(2)** $m \in T$이면 $A_m$은 집합족 $\{A_n : n \in T\}$의 원소이므로 [[family-of-sets]]의 (1)에 의해 $\bigcap_{n \in T} A_n \subseteq A_m \subseteq \bigcup_{n \in T} A_n$이다. $T \subseteq T'$이면, $C \in \{A_n : n \in T\}$일 때 $C = A_n$인 $n \in T \subseteq T'$이 있으므로 $C \in \{A_n : n \in T'\}$이다. 곧 $\{A_n : n \in T\} \subseteq \{A_n : n \in T'\}$이고 [[family-of-sets]]의 (4)에서 두 포함이 나온다. 마지막 문장은 [[family-of-sets]]의 (2)의 (i)에서, 집합족의 원소가 정확히 $n \in T$에서의 $A_n$이라는 것으로 나온다.

**(3)** $\{1, \dots, 0\} = \emptyset$([[finite-set]]의 (F1))이므로 $\bigcup_{n=1}^{0} A_n = \emptyset$이다. $N \ge 0$이면 (F1)에 의해 $\{1, \dots, N+1\} = \{1, \dots, N\} \cup \{N + 1\}$이다. 따라서 (1)에 의해, $a \in \bigcup_{n=1}^{N+1} A_n$인 것은 정확히 $a \in A_n$인 $n \in \{1, \dots, N\}$이 있거나 $a \in A_{N+1}$일 때, 곧 $a \in \bigl(\bigcup_{n=1}^{N} A_n\bigr) \cup A_{N+1}$일 때이다. $\{1, \dots, 1\} = \{1\}$이므로 (1)에 의해 $a \in \bigcap_{n=1}^{1} A_n$인 것은 정확히 $a \in A_1$일 때이다. $N \ge 1$이면 $\{1, \dots, N\}$과 $\{1, \dots, N+1\}$은 $1$을 원소로 가져 공집합이 아니므로, (1)에 의해 $a \in \bigcap_{n=1}^{N+1} A_n$인 것은 정확히 $a \in A_n$이 $n \in \{1, \dots, N\}$에서 모두 성립하고 $a \in A_{N+1}$일 때, 곧 $a \in \bigl(\bigcap_{n=1}^{N} A_n\bigr) \cap A_{N+1}$일 때이다.

$B_N = \bigcup_{n=1}^{N} A_n$이라 하자. 위의 등식에서 $B_N \subseteq B_{N+1}$이므로 $(B_N)$은 증가한다. (1)에 의해 $a \in \bigcup_{N=1}^{\infty} B_N$이면 $a \in B_N$인 $N$이 있고, 다시 $a \in A_n$인 $n \in \{1, \dots, N\}$이 있으므로 $a \in \bigcup_{n=1}^{\infty} A_n$이다. 거꾸로 $a \in A_n$인 자연수 $n$이 있으면 $n \in \{1, \dots, n\}$이므로 $a \in B_n$이고 $a \in \bigcup_{N=1}^{\infty} B_N$이다. $C_N = \bigcap_{n=1}^{N} A_n$이라 하면 위의 등식에서 $C_{N+1} \subseteq C_N$이므로 $(C_N)$은 감소한다. (1)에 의해 $a \in \bigcap_{N=1}^{\infty} C_N$이면 모든 $N$에서 $a \in C_N$이고, 특히 모든 자연수 $n$에서 $a \in C_n \subseteq A_n$((2), $n \in \{1, \dots, n\}$)이므로 $a \in \bigcap_{n=1}^{\infty} A_n$이다. 거꾸로 모든 자연수 $n$에서 $a \in A_n$이면 모든 $N$에서 $a \in C_N$이다.

**(4)** $a \in X - \bigcup_{n \in T} A_n$인 것은 정확히 $a \in X$이고 "$a \in A_n$인 $n \in T$가 있다"가 거짓일 때이다. [[negation-of-quantified-statements|한정 기호의 부정]]에 의해 이것은 $a \in X$이고 모든 $n \in T$에서 $a \notin A_n$, 곧 $a \in X$이고 모든 $n \in T$에서 $a \in X - A_n$일 때이며, 준비에 의해 이것은 $a \in \bigcap_{n \in T}(X - A_n)$일 때이다. 둘째 등식: $a \in X - \bigcap_{n \in T} A_n$인 것은 정확히 $a \in X$이고 "$a \in X$이고 모든 $n \in T$에서 $a \in A_n$"이 거짓일 때, 곧 $a \in X$이고 $a \notin A_n$인 $n \in T$가 있을 때이다. 이것은 $a \in X - A_n$인 $n \in T$가 있을 때와 같고($X - A_n \subseteq X$), 준비에 의해 $a \in \bigcup_{n \in T}(X - A_n)$일 때이다. 두 논증은 $T = \emptyset$에서도 그대로이다.

상극한과 하극한: $U_M = \bigcup_{n=M}^{\infty} A_n$이라 하자. 첫째 등식을 $T = \{n \in \mathbb{N} : M \le n\}$에 쓰면 모든 $M$에서 $X - U_M = \bigcap_{n=M}^{\infty}(X - A_n)$이므로, $M$번째 항이 $X - U_M$인 집합열은 $M$번째 항이 $\bigcap_{n=M}^{\infty}(X - A_n)$인 집합열과 같다. 둘째 등식을 $T = \mathbb{N}$과 $(U_M)$에 쓰면
$$
\begin{aligned}
X - \limsup_{n \to \infty} A_n &= X - \bigcap_{M=1}^{\infty} U_M \\
&= \bigcup_{M=1}^{\infty} (X - U_M) \\
&= \bigcup_{M=1}^{\infty} \bigcap_{n=M}^{\infty} (X - A_n) \\
&= \liminf_{n \to \infty} (X - A_n)
\end{aligned}
$$
이다. 같은 방법으로, $L_M = \bigcap_{n=M}^{\infty} A_n$이라 하면 둘째 등식에서 $X - L_M = \bigcup_{n=M}^{\infty}(X - A_n)$이고, 첫째 등식에서 $X - \liminf_{n \to \infty} A_n = \bigcap_{M=1}^{\infty} (X - L_M) = \limsup_{n \to \infty}(X - A_n)$이다.

**(5)** $a \in S \cap \bigcup_{n \in T} A_n$인 것은 정확히 $a \in S$이고 $a \in A_n$인 $n \in T$가 있을 때, 곧 $a \in S \cap A_n$인 $n \in T$가 있을 때이다($S \cap A_n \subseteq X$이므로 $n$번째 항이 $S \cap A_n$인 것은 $X$의 집합열이다). 역상: [[image-and-preimage]]의 (2)에 의해 $f^{-1}(A_n)$은 $Y$의 부분집합이므로 $n$번째 항이 $f^{-1}(A_n)$인 것은 $Y$의 집합열이다. $y \in f^{-1}\bigl(\bigcup_{n \in T} A_n\bigr)$인 것은 정확히 $y \in Y$이고 $f(y) \in A_n$인 $n \in T$가 있을 때, 곧 $y \in f^{-1}(A_n)$인 $n \in T$가 있을 때이다. $y \in f^{-1}\bigl(\bigcap_{n \in T} A_n\bigr)$인 것은 정확히 $y \in Y$이고 ($f(y) \in X$이고 모든 $n \in T$에서 $f(y) \in A_n$)일 때이다. $f(y) \in X$는 늘 참이므로 이것은 $y \in Y$이고 모든 $n \in T$에서 $y \in f^{-1}(A_n)$일 때, 곧 준비를 $Y$의 집합열에 쓴 판정에 의해 $y \in \bigcap_{n \in T} f^{-1}(A_n)$일 때이다. 이 논증은 $T = \emptyset$에서도 그대로이다.

**(6)** $(A_n)$이 증가한다고 하자. 자연수 $n$을 고정하고 $n \le m$인 자연수 $m$에 대한 "$A_n \subseteq A_m$"을 $m$에 관한 [[mathematical-induction|수학적 귀납법]]으로 보인다(정확히는 자연수 $j$에 대한 명제 "$A_n \subseteq A_{n+j-1}$"에 귀납법을 쓴다. $n \le m$이면 $j = m - n + 1$은 (Z7)에 의해 $1$ 이상인 정수이다). $j = 1$이면 $A_n \subseteq A_n$이고, $A_n \subseteq A_{n+j-1}$이면 증가의 정의에 의해 $A_{n+j-1} \subseteq A_{n+j}$이므로 $A_n \subseteq A_{n+j}$이다.

$N \ge 1$이면 $N \in \{1, \dots, N\}$이므로 (2)에 의해 $A_N \subseteq \bigcup_{n=1}^{N} A_n$이고, $n \in \{1, \dots, N\}$이면 $A_n \subseteq A_N$이므로 (2)의 마지막 문장에 의해 $\bigcup_{n=1}^{N} A_n \subseteq A_N$이다. $\{n : M \le n\} \subseteq \mathbb{N}$이므로 (2)에 의해 $\bigcup_{n=M}^{\infty} A_n \subseteq \bigcup_{n=1}^{\infty} A_n$이다. 거꾸로 $a \in A_n$인 자연수 $n$이 있다고 하자. (Z5)에 의해 $M \le n$이거나 $n < M$이다. 앞의 경우 (1)에 의해 $a \in \bigcup_{n=M}^{\infty} A_n$이다. 뒤의 경우 $A_n \subseteq A_M$이므로 $a \in A_M$이고, $M \le M$이므로 역시 $a \in \bigcup_{n=M}^{\infty} A_n$이다. 마지막으로 $M \le M$이므로 (2)에 의해 $\bigcap_{n=M}^{\infty} A_n \subseteq A_M$이고, $M \le n$인 모든 $n$에서 $A_M \subseteq A_n$이므로 (1)에 의해 $A_M \subseteq \bigcap_{n=M}^{\infty} A_n$이다.

$(A_n)$이 감소하면 같은 귀납법으로 $n \le m$이면 $A_m \subseteq A_n$이다($A_{n+j} \subseteq A_{n+j-1} \subseteq A_n$). $N \ge 1$이면 (2)에 의해 $\bigcap_{n=1}^{N} A_n \subseteq A_N$이고, $n \le N$인 모든 $n$에서 $A_N \subseteq A_n$이므로 (1)에 의해 $A_N \subseteq \bigcap_{n=1}^{N} A_n$이다. (2)에 의해 $\bigcap_{n=1}^{\infty} A_n \subseteq \bigcap_{n=M}^{\infty} A_n$이다. 거꾸로 $a \in \bigcap_{n=M}^{\infty} A_n$이면, 자연수 $n$이 $M \le n$일 때는 (1)에 의해 $a \in A_n$이고, $n < M$일 때는 $a \in A_M \subseteq A_n$이므로, 모든 자연수 $n$에서 $a \in A_n$이고 (1)에 의해 $a \in \bigcap_{n=1}^{\infty} A_n$이다. 마지막으로 $M \le M$이므로 (2)에 의해 $A_M \subseteq \bigcup_{n=M}^{\infty} A_n$이고, $M \le n$인 모든 $n$에서 $A_n \subseteq A_M$이므로 (2)의 마지막 문장에 의해 $\bigcup_{n=M}^{\infty} A_n \subseteq A_M$이다.

**(7)** 자연수 $n$마다 $n - 1$은 $0$ 이상인 정수이므로 $E_n$은 $A_n$과 $\bigcup_{i=1}^{n-1} A_i$로 정해진 $X$의 부분집합이고, $(E_n)$은 집합열이다.

(i) 차집합의 정의에 의해 $E_n \subseteq A_n$이다.

(ii) $n \ne m$이라 하자. (Z5)에 의해 $n < m$이거나 $m < n$이고, 두 경우는 $n$과 $m$의 이름만 다르므로 $n < m$인 경우를 보인다. $a \in E_n$이라 하자. (i)에 의해 $a \in A_n$이다. (Z1)에 의해 $n \le m - 1$이고 $1 \le n$이므로 $n \in \{1, \dots, m - 1\}$이고, (1)에 의해 $a \in \bigcup_{i=1}^{m-1} A_i$이다. 따라서 $a \notin E_m$이다. 곧 $E_n \cap E_m$의 원소는 없고 $E_n \cap E_m = \emptyset$이다. $m < n$인 경우는 위 논증에서 $n$과 $m$을 맞바꾼 것이다.

(iii) (i)과 (2)에 의해 $\bigcup_{n=1}^{N} E_n \subseteq \bigcup_{n=1}^{N} A_n$이다(각 $n \le N$에서 $E_n \subseteq A_n \subseteq \bigcup_{i=1}^{N} A_i$). 거꾸로 $a \in A_n$인 $n \in \{1, \dots, N\}$이 있다고 하자. 집합 $\{i \in \mathbb{N} : a \in A_i\}$는 $n$을 원소로 가지므로 공집합이 아니고, [[well-ordering-principle|정렬 원리]]에 의해 최소 원소 $n_0$을 갖는다. $n_0 \le n \le N$이므로 $n_0 \in \{1, \dots, N\}$이다. $i \in \{1, \dots, n_0 - 1\}$이면 $i < n_0$이므로 최소 원소의 정의와 (L1)에 의해 $a \notin A_i$이고, 따라서 (1)에 의해 $a \notin \bigcup_{i=1}^{n_0-1} A_i$이며 $a \in E_{n_0}$이다. (1)에 의해 $a \in \bigcup_{n=1}^{N} E_n$이다. 전체 합집합의 등식도 같다. (i)과 (2)에 의해 $\bigcup_{n=1}^{\infty} E_n \subseteq \bigcup_{n=1}^{\infty} A_n$이고, $a \in A_n$인 자연수 $n$이 있으면 위와 같이 정한 $n_0$에서 $a \in E_{n_0}$이다.

(iv) $n \ge 2$이면 $n - 1$은 자연수이고 (6)에 의해 $\bigcup_{i=1}^{n-1} A_i = A_{n-1}$이므로 $E_n = A_n - A_{n-1}$이다.

**(8)** $U_M = \bigcup_{n=M}^{\infty} A_n$이라 하자. $\mathbb{N} \ne \emptyset$이므로 (1)에 의해 $a \in \limsup_{n \to \infty} A_n = \bigcap_{M=1}^{\infty} U_M$인 것은 정확히 모든 자연수 $M$에서 $a \in U_M$일 때이고, 다시 (1)에 의해 이것은 모든 $M$에 대하여 $M \le n$이고 $a \in A_n$인 $n$이 있을 때이다. $L_M = \bigcap_{n=M}^{\infty} A_n$이라 하면 (1)에 의해 $a \in \liminf_{n \to \infty} A_n$인 것은 정확히 $a \in L_M$인 자연수 $M$이 있을 때이다. $\{n \in \mathbb{N} : M \le n\}$은 $M$을 원소로 가져 공집합이 아니므로, (1)에 의해 $a \in L_M$인 것은 정확히 $M \le n$인 모든 $n$에서 $a \in A_n$일 때이다. 마지막으로 $a \in \liminf_{n \to \infty} A_n$이고 $M_0$을 그런 번호라 하자. 자연수 $M$에 대하여 $n = M + M_0$은 자연수이고, $1 \le M_0$이고 $1 \le M$이므로 (Z7)과 (Z6)에 의해 $M \le n$이고 $M_0 \le n$이다. 따라서 $a \in A_n$이고 $M \le n$이다. $M$은 임의였으므로 $a \in \limsup_{n \to \infty} A_n$이다.
:::

## 예시와 반례

:::example[약수의 집합열의 상극한과 하극한]
$X = \mathbb{N}$이고 $A_n = \{k \in \mathbb{N} : k \mid n\}$($n$의 양의 약수의 집합, [[prime-number]])이라 합시다.

- 합집합: 자연수 $k$는 $k \mid k$이므로 $k \in A_k$이고, (1)에 의해 $\bigcup_{n=1}^{\infty} A_n = \mathbb{N}$입니다.
- 교집합: $A_1$은 $1$의 양의 약수의 집합이고, [[prime-number]]의 진술에 의해 $1$의 양의 약수 $d$는 $1 \le d \le 1$이므로 $A_1 = \{1\}$입니다. 모든 $n$에서 $1 \mid n$이므로 (1)과 (2)에 의해 $\bigcap_{n=1}^{\infty} A_n = \{1\}$입니다.
- 상극한: 자연수 $k$와 $M$에 대하여 $n = kM$은 자연수이고, $1 \le k$이므로 (Z3)에 의해 $M \le kM$이며, $k \mid kM$입니다. (8)에 의해 $k \in \limsup_{n \to \infty} A_n$이고, 상극한은 $\mathbb{N}$ 전체입니다.
- 하극한: $1$은 모든 $A_n$에 속하므로 하극한에 속합니다. $k \ge 2$라 하고 자연수 $M$을 아무것이나 잡으면 $n = kM + 1 \ge M$입니다. $k \mid kM + 1$이면 $kM + 1 = kc$인 정수 $c$가 있고 $k(c - M) = 1$이므로 $k$는 $1$의 양의 약수가 되어 $k \le 1$인데, 이는 $k \ge 2$와 어긋납니다. 따라서 $k \notin A_n$이고, (8)에 의해 $k$는 하극한에 속하지 않습니다. 하극한은 $\{1\}$입니다.

이 열에서는 하극한 $\{1\}$과 상극한 $\mathbb{N}$이 다릅니다.
:::

:::example[증가하는 구간의 열을 서로소로 바꾸기]
$X = \mathbb{R}$이고 $A_n = \{x \in \mathbb{R} : 0 \le x \le n\}$이라 합시다. $n \le n + 1$이므로 $A_n \subseteq A_{n+1}$이고 $(A_n)$은 증가합니다. (7)의 (iv)에 의해
$$
\begin{aligned} E_1 &= A_1 = \{x : 0 \le x \le 1\}, \\ E_n &= A_n - A_{n-1} \\ &= \{x : n - 1 < x \le n\} \quad (n \ge 2) \end{aligned}
$$
입니다. 둘째 식은 $x \in A_n$이면서 $x \notin A_{n-1}$인 것이 $0 \le x \le n$이고 ([[order-properties-of-reals]]의 (1)의 (iii)에 의해) ($x < 0$ 또는 $n - 1 < x$)인 것, 곧 $n - 1 < x \le n$인 것이기 때문입니다($n - 1 \ge 1 > 0$이므로 $n - 1 < x$이면 $0 \le x$). 합집합은 $\bigcup_{n=1}^{\infty} A_n = \{x \in \mathbb{R} : 0 \le x\}$입니다. 실제로 $0 \le x$이면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $x < n$인 자연수 $n$이 있어 $x \in A_n$이고, 거꾸로 $A_n$의 원소는 모두 $0$ 이상입니다. (7)의 (iii)에 의해 서로소인 $E_1, E_2, \dots$의 합집합도 이 집합입니다. 예를 들어 $x = 2.5$는 $2 < 2.5 \le 3$이므로 $E_3$에만 속합니다.
:::

:::counterexample[공집합이 아닌 집합들의 감소하는 열의 교집합이 공집합일 수 있다]
$X = \mathbb{N}$이고 $A_n = \{k \in \mathbb{N} : n \le k\}$라 합시다. $n \in A_n$이므로 모든 $A_n$은 공집합이 아니고, $n + 1 \le k$이면 $n \le k$이므로 $A_{n+1} \subseteq A_n$이어서 $(A_n)$은 감소합니다. 그러나 자연수 $k$는 $k < k + 1$이므로 (L1)에 의해 $k \notin A_{k+1}$이고, (1)에 의해 $\bigcap_{n=1}^{\infty} A_n = \emptyset$입니다. 유한 개만 보면 (6)에 의해 $\bigcap_{n=1}^{N} A_n = A_N \ne \emptyset$인데, 모든 번호를 함께 보면 교집합이 비어 버립니다.
:::

## 확인 질문

:::check[$X = \mathbb{N}$이고 $A_n = \{n, n + 1\}$일 때 $\bigcup_{n=1}^{\infty} A_n$, $\bigcap_{n=1}^{\infty} A_n$, 상극한을 구하라.]
자연수 $k$는 $A_k$에 속하므로 (1)에 의해 합집합은 $\mathbb{N}$입니다. $A_1 = \{1, 2\}$와 $A_3 = \{3, 4\}$는 공통 원소가 없으므로 (2)에 의해 $\bigcap_{n=1}^{\infty} A_n \subseteq A_1 \cap A_3 = \emptyset$입니다. 자연수 $k$가 $A_n$에 속하는 것은 $k = n$이거나 $k = n + 1$일 때, 곧 $n = k$이거나 $n = k - 1$일 때뿐입니다. $M = k + 1$로 두면 $M \le n$인 $n$은 $k$와 $k - 1$보다 크므로 $k \notin A_n$이고, (8)에 의해 $k$는 상극한에 속하지 않습니다. 상극한은 공집합입니다.
:::

:::check[서로소인 집합열 $(A_n)$의 상극한은 무엇인가?]
공집합입니다. $a \in \limsup_{n \to \infty} A_n$이라 하면 (8)에서 $M = 1$로 두어 $a \in A_{n_1}$인 $n_1$이 있습니다. 다시 $M = n_1 + 1$로 두면 $n_1 + 1 \le n_2$이고 $a \in A_{n_2}$인 $n_2$가 있습니다. $n_1 < n_2$이므로 $n_1 \ne n_2$이고, $a \in A_{n_1} \cap A_{n_2}$는 서로소라는 것에 어긋납니다. 따라서 상극한에는 원소가 없습니다. (8)의 마지막 문장에 의해 하극한도 공집합입니다.
:::
