---
title: σ-대수와 가측공간
title_en: σ-Algebra and Measurable Space
aliases: [시그마 대수, 시그마-대수, σ-체, 가측공간, 가측집합, sigma-algebra, σ-field, measurable space, measurable set]
kind: definition
field: measure-theory
msc: ["28A05"]
level: undergrad
summary: 집합 X 의 부분집합들의 족 가운데 X 를 원소로 갖고 여집합과 집합열의 합집합에 닫혀 있는 것을 σ-대수라 하고, 공집합과 두 집합의 연산, 번호의 집합 위의 합집합과 교집합, 상극한과 하극한, 차집합으로 쓴 정의와의 동치, 가장 작은 σ-대수와 가장 큰 σ-대수, 가측집합 위로 줄인 σ-대수, 함수로 옮긴 σ-대수를 증명한다.
requires: [set, subset, empty-set-is-subset, set-operations, complement, de-morgan-laws-sets, power-set, family-of-sets, function, image-and-preimage, preimage-and-set-operations, recursion-theorem, sequence-of-sets, finite-set, countably-infinite-set, natural-numbers-are-infinite, injective-surjective-bijective, even-and-odd, prime-number, well-ordering-principle, n-and-z-have-equal-cardinality]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 2.1절 Definitions and basic properties, Proposition 2.2 (p.24), Proposition 2.5 의 증명 (p.24–25), Definition 2.6 과 Example 2.7 (p.25), Proposition 2.8 과 Example 2.9 (p.26), Example 2.11 (p.27); 2.6절 Exercise 2.11 (p.52), Exercise 2.14 (p.53), Exercise 2.18–2.21 과 Exercise 2.24 (p.54); 4.1절 Example 4.9–4.10 (p.94); 4.5절 Exercise 4.8 (p.112); 5.3절 Example 5.24 (p.140)
    checked: original
    note: "출처 Definition 2.6(p.25)은 공집합이 아닌 족 S ⊂ P(X) 가 (S1) X ∈ S, (S2) A, B ∈ S 이면 A ∖ B ∈ S, (S3) S 의 원소의 열 (A_k) 에 대하여 ⋃_{k=1}^∞ A_k ∈ S 를 만족할 때 σ-대수라 하고, 공집합이 아닌 집합 X 와 그 위의 σ-대수의 쌍을 가측공간(measurable space)이라 한다. 이 항목은 출처 Proposition 2.8(p.26)의 동치 꼴(차집합 대신 여집합)을 정의로 삼고, 출처의 정의와 같다는 것을 (4)로 증명했다. 이 항목은 X 가 공집합이어도 된다((5)의 마지막 문장). 출처 Proposition 2.8 의 증명은 '∅ ∈ S 이고 따라서 S 가 유한 합집합에 닫혀 있다는 것은 바로 나온다(immediate)'고 적는다. 이 항목의 (1)은 두 집합의 합집합을 첫째 항이 A 이고 나머지 항이 B 인 집합열의 합집합으로 증명한다. 출처 Proposition 2.5 의 증명(p.24–25)은 σ-고리에서 A_1 = A, A_2 = B, 나머지 항이 ∅ 인 열로 A ∪ B 를 얻고, 출처는 p.26 에서 그 증명을 따르면 σ-대수가 대수라는 것이 나온다고 적는다(같은 발상이고 나머지 항이 다르다). 출처 Example 2.7(p.25)은 원소가 둘 이상인 X 에서 {∅, X} 와 P(X) 가 σ-대수라고 적고 가장 작은 것과 가장 큰 것이라 부른다(이 항목의 (5)). 출처 Exercise 2.14(p.53)는 ∅, 여집합, 가산 교집합으로 σ-대수를 특징짓게 하고(이 항목의 (2)가 교집합 쪽을 증명한다), Exercise 2.11(p.52)은 f : X → Y 와 X 위의 σ-대수 S 에 대하여 {F ⊂ Y : f⁻¹(F) ∈ S} 가 Y 위의 σ-대수임을 증명하라고 한다(이 항목의 (7)과 같은 진술. 출처는 X, Y 가 공집합이 아니라고 둔다). 출처 Example 4.10(p.94)은 이 σ-대수 위에 상측도를 정의한다. 출처 Example 4.9(p.94)는 A ∈ S 에 대하여 A ∩ S 위의 측도를 정의하고 그것이 측도라는 증명을 Exercise 4.8 로 돌린다. Exercise 4.8(p.112)도 (A, A ∩ S) 위의 제한을 측도로 보이라고 한다. 이 항목의 (6)은 E ∈ 𝓜 일 때 {A ∈ 𝓜 : A ⊆ E} 가 E 위의 σ-대수이고 {E ∩ B : B ∈ 𝓜} 와 같다는 것을 증명한다. 예시 '짝을 이룬 두 수를 함께 담는 집합들'은 ℕ 을 두 원소씩의 조각 {2k − 1, 2k} 로 나눈 것과 같고, 출처 Exercise 2.20(p.54)이 집합의 분할의 조각들의 합집합 전체가 σ-대수임을 증명하라고 하고 Exercise 2.21 이 가산 분할이면 어떻게 되는지 묻는 것과 같은 발상이다. 그 예시의 𝓜_E = {∅, {1, 2}, {3, 4}, E} 는 출처 Example 2.9(p.26)의 {∅, {a, b}, {c}, X} 처럼 유한집합을 두 조각으로 나눈 σ-대수이다. 반례 '(σ1)과 (σ2)를 만족하지만 σ-대수가 아닌 예'의 집합족(유한집합이거나 여집합이 유한집합인 부분집합 전체)은 출처 Exercise 2.24 (b)(p.54)가 비가산 집합 X 위에서 유한집합 전체가 생성하는 대수(algebra)로 적는 집합족과 같은 꼴이며, 출처 Exercise 2.18–2.19(p.54)가 대수이지만 σ-대수가 아닌 집합족((0, 1] 과 ℝ 위의 서로소인 반열린구간들의 유한 합집합 전체)을 보이라고 하는 것과 같은 결론을 다른 집합족으로 보인다. 또 그 반례와 예시 '짝을 이룬 두 수를 함께 담는 집합들'에 나오는 짝수인 자연수 전체는 출처 Example 5.24(p.140)가 P := {2, 4, 6, …} 로 쓰는 것과 같은 집합이다. 확인 질문 '두 가측집합의 대칭차 $(A - B) \\cup (B - A)$는 가측집합인가?'의 대칭차는 출처 Proposition 2.2(p.24)가 고리(ring)를 교집합과 대칭차로 특징짓는 곳에도 나온다."
  - ref: lebl-basic-analysis
    loc: 0.3.5절 Cardinality, Example 0.3.30 (p.18)
    checked: original
    note: "반례 '(σ1)과 (σ2)를 만족하지만 σ-대수가 아닌 예'에서 짝수인 자연수 전체 P 가 가산 무한이라는 것을 n ↦ 2n 으로 보이는 것은 출처 Example 0.3.30(p.18)이 짝수인 자연수 전체와 ℕ 사이의 전단사 f(n) = 2n 을 드는 것과 같다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(작은 σ-대수의 계산, 선택이 필요한 꼴을 뺀 판단). 독립 검토 없음."
added: 2026-11-28
---

:::statement
집합, 부분집합, 두 집합의 합집합·교집합·차집합은 [[set]], [[subset]], [[set-operations|집합의 연산]]의 것이고, $\mathscr{P}(X)$는 [[power-set]]이다. 집합족과 그 합집합·교집합, 조건으로 정한 부분집합, 식으로 정한 집합족은 [[family-of-sets|집합족의 합집합과 교집합]]의 것이다. 집합열, "$n$번째 항이 $F(n)$인 집합열", $\bigcup_{n \in T} A_n$과 $\bigcap_{n \in T} A_n$, 상극한과 하극한은 [[sequence-of-sets|집합열]]의 것이다. 함수와 역상 $f^{-1}(B)$는 [[function]], [[image-and-preimage|상과 역상]]의 것이다. 아래에서 $X$는 집합이다.

**σ-대수.** $X$의 집합족 $\mathcal{M}$, 곧 $\mathcal{M} \subseteq \mathscr{P}(X)$인 집합 $\mathcal{M}$이 $X$ 위의 **σ-대수**(σ-algebra)인 것은 정확히 다음 세 조건이 모두 성립할 때이다.

- (σ1) $X \in \mathcal{M}$이다.
- (σ2) $A \in \mathcal{M}$이면 $X - A \in \mathcal{M}$이다.
- (σ3) $(A_n)$이 $X$의 집합열이고 모든 자연수 $n$에서 $A_n \in \mathcal{M}$이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{M}$이다.

모든 항이 $\mathcal{M}$의 원소인 $X$의 집합열을 **$\mathcal{M}$의 원소로 된 집합열**이라 한다. $\mathcal{M}$이 $X$ 위의 σ-대수일 때 순서쌍 $(X, \mathcal{M})$을 **가측공간**(measurable space)이라 하고, $\mathcal{M}$의 원소를 **$\mathcal{M}$-가측집합**(measurable set), 줄여서 **가측집합**이라 한다. 같은 집합 위에 σ-대수가 여럿 있을 수 있으므로, 분명하지 않으면 "$\mathcal{M}$-가측"처럼 σ-대수를 밝힌다.

다음이 성립한다. 아래에서 $\mathcal{M}$은 $X$ 위의 σ-대수이다.

1. (공집합과 두 집합) $\emptyset \in \mathcal{M}$이다. $A$, $B$가 $\mathcal{M}$의 원소이면 $A \cup B$, $A \cap B$, $A - B$는 $\mathcal{M}$의 원소이다. 또 $X$의 모든 부분집합 $A$에서 $X - (X - A) = A$이다.
2. (번호의 집합 위의 합집합과 교집합) $(A_n)$이 $\mathcal{M}$의 원소로 된 집합열이고 $T$가 $\mathbb{N}$의 부분집합이면 $\bigcup_{n \in T} A_n \in \mathcal{M}$이고 $\bigcap_{n \in T} A_n \in \mathcal{M}$이다. 특히 $0$ 이상인 모든 정수 $N$과 모든 자연수 $K$에서 $\bigcap_{n=1}^{\infty} A_n$, $\bigcup_{n=1}^{N} A_n$, $\bigcap_{n=1}^{N} A_n$, $\bigcup_{n=K}^{\infty} A_n$, $\bigcap_{n=K}^{\infty} A_n$은 $\mathcal{M}$의 원소이다.
3. (상극한, 하극한, 서로소로 바꾼 열) $(A_n)$이 $\mathcal{M}$의 원소로 된 집합열이면 $\limsup_{n \to \infty} A_n$과 $\liminf_{n \to \infty} A_n$은 $\mathcal{M}$의 원소이다. 또 [[sequence-of-sets|집합열]]의 (7)의 집합열 $(E_n)$, 곧 $n$번째 항이 $A_n - \bigcup_{i=1}^{n-1} A_i$인 집합열은 $\mathcal{M}$의 원소로 된 서로소인 집합열이고 $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$이다.
4. (차집합으로 쓴 꼴) $X$의 집합족 $\mathcal{N}$이 $X$ 위의 σ-대수인 것은 정확히 $\mathcal{N}$이 (σ1), (σ3)과 다음 (σ2′)을 만족할 때이다.
   - (σ2′) $A$, $B$가 $\mathcal{N}$의 원소이면 $A - B \in \mathcal{N}$이다.
5. (가장 작은 것과 가장 큰 것) $\{\emptyset, X\}$와 $\mathscr{P}(X)$는 $X$ 위의 σ-대수이고, $X$ 위의 모든 σ-대수 $\mathcal{N}$은 $\{\emptyset, X\} \subseteq \mathcal{N} \subseteq \mathscr{P}(X)$를 만족한다. $X = \emptyset$이면 $X$ 위의 σ-대수는 $\{\emptyset\}$ 하나뿐이다.
6. (가측집합 위로 줄이기) $E \in \mathcal{M}$이면
   $$
   \mathcal{M}_E = \{A \in \mathcal{M} : A \subseteq E\}
   $$
   는 $E$ 위의 σ-대수이고, 식으로 정한 $E$의 집합족 $\{E \cap B : B \in \mathcal{M}\}$와 같다. $\mathcal{M}_E$를 **$\mathcal{M}$을 $E$로 줄인 σ-대수**라 한다. $\mathcal{M}_E \subseteq \mathcal{M}$이다.
7. (함수로 옮기기) $Y$가 집합이고 $f : X \to Y$가 함수이면
   $$
   \{B \in \mathscr{P}(Y) : f^{-1}(B) \in \mathcal{M}\}
   $$
   은 $Y$ 위의 σ-대수이다.
:::

:::english
Sets, subsets, and the union, intersection, and difference of two sets are as in [[set]], [[subset]], [[set-operations]], and $\mathscr{P}(X)$ is as in [[power-set]]. Families of sets with their unions and intersections, subsets defined by a condition, and families defined by a formula are as in [[family-of-sets]]. Sequences of sets, "the sequence of sets whose $n$th term is $F(n)$", $\bigcup_{n \in T} A_n$ and $\bigcap_{n \in T} A_n$, and the limit superior and limit inferior are as in [[sequence-of-sets]]. Functions and preimages $f^{-1}(B)$ are as in [[function]] and [[image-and-preimage]]. Below, $X$ is a set.

**σ-algebra.** A family $\mathcal{M}$ of subsets of $X$, that is, a set $\mathcal{M}$ with $\mathcal{M} \subseteq \mathscr{P}(X)$, is a **σ-algebra** on $X$ exactly when the following three conditions all hold.

- (σ1) $X \in \mathcal{M}$.
- (σ2) If $A \in \mathcal{M}$, then $X - A \in \mathcal{M}$.
- (σ3) If $(A_n)$ is a sequence of subsets of $X$ with $A_n \in \mathcal{M}$ for every natural number $n$, then $\bigcup_{n=1}^{\infty} A_n \in \mathcal{M}$.

A sequence of subsets of $X$ all of whose terms belong to $\mathcal{M}$ is called a **sequence of elements of $\mathcal{M}$**. When $\mathcal{M}$ is a σ-algebra on $X$, the ordered pair $(X, \mathcal{M})$ is called a **measurable space**, and the elements of $\mathcal{M}$ are called **$\mathcal{M}$-measurable sets**, or simply **measurable sets**. Since one set may carry several σ-algebras, we name the σ-algebra, as in "$\mathcal{M}$-measurable", when it is not clear from the context.

The following hold. Below, $\mathcal{M}$ is a σ-algebra on $X$.

1. (The empty set and two sets) $\emptyset \in \mathcal{M}$. If $A$ and $B$ are elements of $\mathcal{M}$, then $A \cup B$, $A \cap B$, and $A - B$ are elements of $\mathcal{M}$. Moreover, $X - (X - A) = A$ for every subset $A$ of $X$.
2. (Unions and intersections over a set of indices) If $(A_n)$ is a sequence of elements of $\mathcal{M}$ and $T$ is a subset of $\mathbb{N}$, then $\bigcup_{n \in T} A_n \in \mathcal{M}$ and $\bigcap_{n \in T} A_n \in \mathcal{M}$. In particular, for every integer $N \ge 0$ and every natural number $K$, the sets $\bigcap_{n=1}^{\infty} A_n$, $\bigcup_{n=1}^{N} A_n$, $\bigcap_{n=1}^{N} A_n$, $\bigcup_{n=K}^{\infty} A_n$, and $\bigcap_{n=K}^{\infty} A_n$ are elements of $\mathcal{M}$.
3. (Limit superior, limit inferior, and the disjointified sequence) If $(A_n)$ is a sequence of elements of $\mathcal{M}$, then $\limsup_{n \to \infty} A_n$ and $\liminf_{n \to \infty} A_n$ are elements of $\mathcal{M}$. Moreover, the sequence $(E_n)$ of item (7) of [[sequence-of-sets]], whose $n$th term is $A_n - \bigcup_{i=1}^{n-1} A_i$, is a pairwise disjoint sequence of elements of $\mathcal{M}$ with $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$.
4. (The form with differences) A family $\mathcal{N}$ of subsets of $X$ is a σ-algebra on $X$ exactly when $\mathcal{N}$ satisfies (σ1), (σ3), and the following (σ2′).
   - (σ2′) If $A$ and $B$ are elements of $\mathcal{N}$, then $A - B \in \mathcal{N}$.
5. (The smallest and the largest) $\{\emptyset, X\}$ and $\mathscr{P}(X)$ are σ-algebras on $X$, and every σ-algebra $\mathcal{N}$ on $X$ satisfies $\{\emptyset, X\} \subseteq \mathcal{N} \subseteq \mathscr{P}(X)$. If $X = \emptyset$, the only σ-algebra on $X$ is $\{\emptyset\}$.
6. (Restricting to a measurable set) If $E \in \mathcal{M}$, then
   $$
   \mathcal{M}_E = \{A \in \mathcal{M} : A \subseteq E\}
   $$
   is a σ-algebra on $E$, and it equals the family $\{E \cap B : B \in \mathcal{M}\}$ of subsets of $E$ defined by a formula. $\mathcal{M}_E$ is called the **σ-algebra $\mathcal{M}$ restricted to $E$**. We have $\mathcal{M}_E \subseteq \mathcal{M}$.
7. (Transporting by a function) If $Y$ is a set and $f : X \to Y$ is a function, then
   $$
   \{B \in \mathscr{P}(Y) : f^{-1}(B) \in \mathcal{M}\}
   $$
   is a σ-algebra on $Y$.
:::

## 직관

σ-대수는 측도론에서 "크기를 잴 집합들"의 목록으로 쓰입니다. 어떤 집합을 잴 수 있다면 그 나머지(여집합)도 잴 수 있어야 하고, 잴 수 있는 집합을 끝없이 이어 붙인 것도 잴 수 있어야 극한을 다룰 수 있습니다. (σ2)와 (σ3)이 이 두 요구입니다. 관찰로 비유하면, $\mathcal{M}$은 관찰자가 "일어났는가"를 판정할 수 있는 사건들의 목록입니다. 어떤 사건을 판정할 수 있으면 "그 사건이 일어나지 않았다"도 판정할 수 있고((σ2)), 사건 $A_1$, $A_2$, $\dots$를 하나하나 판정할 수 있으면 "그 가운데 적어도 하나가 일어났다"도 판정할 수 있다고 정한 것입니다((σ3)). (σ1)의 $X$는 "무언가가 일어났다"는, 언제나 판정할 수 있는 사건입니다. 끝없이 많은 판정을 한꺼번에 하는 것은 실제로는 할 수 없으므로 비유가 맞지 않는 곳이고, 이것을 허락한다는 것이 정의가 덧붙이는 약속입니다.

(σ3)은 합집합만 말하지만, 여집합을 함께 쓰면 교집합, 차집합, 유한 개의 합집합, 상극한과 하극한도 모두 $\mathcal{M}$ 안에 남습니다((1)–(3)). 유한 개의 합집합은 남는 항을 공집합이나 같은 집합으로 채운 집합열의 합집합으로 얻습니다. (σ1)과 (σ2)만 만족하는 족은 σ-대수가 아닐 수 있습니다(아래 반례).

(σ3)의 "모든 집합열"은 "집합열이 주어지면 그 합집합이 $\mathcal{M}$에 든다"는 뜻입니다. 집합열을 무엇으로 정하는지는 그것을 쓰는 사람의 몫이고, 이 강의는 집합열을 식이나 재귀로 정한 것으로만 씁니다.

## 성질의 증명

:::proof
**(1)** (σ1)에 의해 $X \in \mathcal{M}$이고, (σ2)에 의해 $X - X \in \mathcal{M}$이다. $X - X$의 원소 $x$는 $x \in X$이고 $x \notin X$여야 하므로 그런 $x$는 없고, $X - X = \emptyset$이다. 따라서 $\emptyset \in \mathcal{M}$이다.

$A$, $B \in \mathcal{M}$이라 하자. 각 자연수 $n$은 $n = 1$이거나 $n \ne 1$이므로, $n = 1$일 때 $C_n = A$, $n \ne 1$일 때 $C_n = B$로 두면 [[sequence-of-sets|집합열]]의 진술에 의해 $n$번째 항이 $C_n$인 $X$의 집합열이 정해지고, 그 모든 항이 $\mathcal{M}$의 원소이다. 집합열의 (1)에 의해 대상 $x$가 $\bigcup_{n=1}^{\infty} C_n$에 속하는 것은 정확히 $x \in C_n$인 자연수 $n$이 있을 때이다. $x \in A$이면 $n = 1$이 그런 수이고, $x \in B$이면 $2 \ne 1$이므로 $n = 2$가 그런 수이다. 거꾸로 $x \in C_n$이면 $C_n$은 $A$이거나 $B$이므로 $x \in A$이거나 $x \in B$이다. 따라서 $\bigcup_{n=1}^{\infty} C_n = A \cup B$이고, (σ3)에 의해 $A \cup B \in \mathcal{M}$이다.

$A \subseteq X$이면 $X - (X - A) = A$이다. 실제로 $x \in X - (X - A)$인 것은 $x \in X$이고 "$x \in X$이고 $x \notin A$"가 아닐 때, 곧 $x \in X$이고 $x \in A$일 때이며, $A \subseteq X$이므로 이것은 $x \in A$일 때이다. (σ2)에 의해 $X - A$, $X - B \in \mathcal{M}$이고, 앞 문단에 의해 $(X - A) \cup (X - B) \in \mathcal{M}$이며, 다시 (σ2)에 의해 $X - \bigl((X - A) \cup (X - B)\bigr) \in \mathcal{M}$이다. 전체집합을 $X$로 둔 [[de-morgan-laws-sets|드 모르간 법칙]]의 (2)와 [[complement|여집합]]의 정의에 의해 이 집합은 $\bigl(X - (X - A)\bigr) \cap \bigl(X - (X - B)\bigr) = A \cap B$이다. 따라서 $A \cap B \in \mathcal{M}$이다. 끝으로 $A \subseteq X$이므로 $x \in A - B$인 것은 정확히 $x \in A$이고 $x \in X - B$일 때이고, $A - B = A \cap (X - B)$이다. $X - B \in \mathcal{M}$이므로 방금 보인 것에 의해 $A - B \in \mathcal{M}$이다.

**(2)** 각 자연수 $n$은 $n \in T$이거나 $n \notin T$이므로, $n \in T$일 때 $B_n = A_n$, $n \notin T$일 때 $B_n = \emptyset$으로 두면 $n$번째 항이 $B_n$인 $X$의 집합열이 정해진다. (1)에 의해 $\emptyset \in \mathcal{M}$이므로 모든 항이 $\mathcal{M}$의 원소이다. 집합열의 (1)에 의해 $x \in \bigcup_{n=1}^{\infty} B_n$인 것은 정확히 $x \in B_n$인 자연수 $n$이 있을 때이다. $x \notin \emptyset$이므로 그런 $n$은 $T$에 속하고 $x \in A_n$이다. 거꾸로 $n \in T$이고 $x \in A_n$이면 $x \in B_n$이다. 따라서 $x \in \bigcup_{n=1}^{\infty} B_n$인 것은 정확히 $x \in A_n$인 $n \in T$가 있을 때이고, 집합열의 (1)에 의해 이것은 $x \in \bigcup_{n \in T} A_n$일 때이다. 곧 $\bigcup_{n \in T} A_n = \bigcup_{n=1}^{\infty} B_n$이고 (σ3)에 의해 이것은 $\mathcal{M}$의 원소이다.

교집합: (σ2)에 의해 $n$번째 항이 $X - A_n$인 집합열은 $\mathcal{M}$의 원소로 된 집합열이므로, 앞 문단에 의해 $\bigcup_{n \in T} (X - A_n) \in \mathcal{M}$이다. 집합열의 (4)에 의해 이 집합은 $X - \bigcap_{n \in T} A_n$이다. (σ2)에 의해 $X - \bigl(X - \bigcap_{n \in T} A_n\bigr) \in \mathcal{M}$이고, $\bigcap_{n \in T} A_n \subseteq X$이므로 (1)의 마지막 등식에 의해 이 집합은 $\bigcap_{n \in T} A_n$이다.

"특히"의 다섯 집합은 [[sequence-of-sets|집합열]]의 진술에서 $T$를 각각 $\mathbb{N}$, $\{1, \dots, N\}$, $\{1, \dots, N\}$, $\{n \in \mathbb{N} : K \le n\}$, $\{n \in \mathbb{N} : K \le n\}$으로 둔 것이다(그 진술의 글자 $M$을 $K$로 바꿨다). 이 $T$들은 그 진술에서 $\mathbb{N}$의 부분집합으로 쓰인 것이다.

**(3)** (2)에 의해 모든 자연수 $K$에서 $\bigcup_{n=K}^{\infty} A_n \in \mathcal{M}$이므로, $K$번째 항이 $\bigcup_{n=K}^{\infty} A_n$인 집합열은 $\mathcal{M}$의 원소로 된 집합열이다. 다시 (2)에 의해 그 교집합 $\limsup_{n \to \infty} A_n$은 $\mathcal{M}$의 원소이다. 같은 방법으로 $K$번째 항이 $\bigcap_{n=K}^{\infty} A_n$인 집합열이 $\mathcal{M}$의 원소로 된 집합열이므로 그 합집합 $\liminf_{n \to \infty} A_n$은 $\mathcal{M}$의 원소이다. 자연수 $n$에서 $n - 1$은 $0$ 이상인 정수이므로 (2)에 의해 $\bigcup_{i=1}^{n-1} A_i \in \mathcal{M}$이고, (1)에 의해 $E_n = A_n - \bigcup_{i=1}^{n-1} A_i \in \mathcal{M}$이다. 집합열의 (7)의 (ii)에 의해 $(E_n)$은 서로소이고, (iii)에 의해 $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$이다.

**(4)** $\mathcal{N}$이 σ-대수이면 (σ1)과 (σ3)을 만족하고, (1)을 $\mathcal{N}$에 쓰면 (σ2′)을 만족한다. 거꾸로 $\mathcal{N}$이 (σ1), (σ2′), (σ3)을 만족하고 $A \in \mathcal{N}$이라 하자. (σ1)에 의해 $X \in \mathcal{N}$이므로 (σ2′)에 의해 $X - A \in \mathcal{N}$이다. 따라서 $\mathcal{N}$은 (σ2)를 만족하고 σ-대수이다.

**(5)** [[empty-set-is-subset|공집합은 부분집합]]이므로 $\emptyset \subseteq X$이고 $X \subseteq X$이므로 $\{\emptyset, X\} \subseteq \mathscr{P}(X)$이다. (σ1): $X \in \{\emptyset, X\}$이다. (σ2): $X - \emptyset = X$이고 $X - X = \emptyset$이다((1)의 증명). (σ3): 모든 항이 $\emptyset$이거나 $X$인 집합열 $(A_n)$을 생각하자. $A_m = X$인 자연수 $m$이 있으면 집합열의 (2)에 의해 $X = A_m \subseteq \bigcup_{n=1}^{\infty} A_n$이고, 합집합은 $X$의 부분집합이므로 $\bigcup_{n=1}^{\infty} A_n = X$이다. 그런 $m$이 없으면 모든 항이 $\emptyset$이고, 집합열의 (1)에 의해 합집합의 원소 $x$는 어떤 $A_n = \emptyset$에 속해야 하므로 그런 $x$는 없어 합집합은 $\emptyset$이다. 어느 쪽이든 합집합은 $\{\emptyset, X\}$의 원소이다.

$\mathscr{P}(X)$: (σ1) $X \subseteq X$이므로 $X \in \mathscr{P}(X)$이다. (σ2) $X - A$는 $X$의 부분집합이다. (σ3) 집합열의 합집합은 $X$의 부분집합이다. 따라서 $\mathscr{P}(X)$는 σ-대수이다.

$\mathcal{N}$이 $X$ 위의 σ-대수이면 (σ1)과 (1)에 의해 $X$, $\emptyset \in \mathcal{N}$이고, 정의에 의해 $\mathcal{N} \subseteq \mathscr{P}(X)$이다. $X = \emptyset$이면 $\emptyset$의 부분집합은 $\emptyset$뿐이므로($A \subseteq \emptyset$인 $A$에는 원소가 없다) $\mathscr{P}(\emptyset) = \{\emptyset\} = \{\emptyset, X\}$이다. 따라서 $\{\emptyset\} \subseteq \mathcal{N} \subseteq \{\emptyset\}$이고 $\mathcal{N} = \{\emptyset\}$이다. 앞 문단에 의해 $\{\emptyset\} = \mathscr{P}(\emptyset)$은 σ-대수이다.

**(6)** $\mathcal{M}_E$의 원소는 $E$의 부분집합이므로 $\mathcal{M}_E \subseteq \mathscr{P}(E)$이고, 조건으로 정한 부분집합이므로 $\mathcal{M}_E \subseteq \mathcal{M}$이다. $E$ 위의 σ-대수의 조건은 (σ1)–(σ3)에서 $X$를 $E$로 바꾼 것이다. (σ1): $E \in \mathcal{M}$이고 $E \subseteq E$이다. (σ2): $A \in \mathcal{M}_E$이면 (1)에 의해 $E - A \in \mathcal{M}$이고 $E - A \subseteq E$이므로 $E - A \in \mathcal{M}_E$이다. (σ3): $(A_n)$이 $E$의 집합열이고 모든 항이 $\mathcal{M}_E$의 원소라 하자. 모든 항이 $X$의 부분집합이기도 하므로 같은 집합 $(A_n)$은 $X$의 집합열이기도 하고, 집합열의 (1)에 의해 어느 쪽으로 보아도 $\bigcup_{n=1}^{\infty} A_n$은 같은 집합이다. $X$의 집합열로 보면 $\mathcal{M}$의 원소로 된 집합열이므로 (σ3)에 의해 합집합은 $\mathcal{M}$의 원소이다. 모든 $A_n$이 $E$의 부분집합이므로 집합열의 (2)에 의해 합집합은 $E$의 부분집합이다. 따라서 합집합은 $\mathcal{M}_E$의 원소이다.

같음: [[family-of-sets]]의 식으로 정한 집합족의 정의에 의해, $C$가 $\{E \cap B : B \in \mathcal{M}\}$의 원소인 것은 정확히 $C = E \cap B$인 $B \in \mathcal{M}$이 있을 때이다. $A \in \mathcal{M}_E$이면 $A \subseteq E$이므로 $A = E \cap A$이고 $A \in \mathcal{M}$이다. 거꾸로 $B \in \mathcal{M}$이면 (1)에 의해 $E \cap B \in \mathcal{M}$이고 $E \cap B \subseteq E$이므로 $E \cap B \in \mathcal{M}_E$이다.

**(7)** 이 집합족을 $\mathcal{N}$이라 하자. 조건으로 정한 $\mathscr{P}(Y)$의 부분집합이므로 $Y$의 집합족이다. (σ1): [[preimage-and-set-operations|역상과 집합의 연산]]의 (7)에 의해 $f^{-1}(Y) = X \in \mathcal{M}$이다. (σ2): $B \in \mathcal{N}$이면 같은 항목의 (3)에 의해 $f^{-1}(Y - B) = X - f^{-1}(B)$이고, (σ2)에 의해 이것은 $\mathcal{M}$의 원소이다. (σ3): $(B_n)$이 $Y$의 집합열이고 모든 항이 $\mathcal{N}$의 원소라 하자. 집합열의 (5)에 의해 $n$번째 항이 $f^{-1}(B_n)$인 것은 $X$의 집합열이고 $f^{-1}\bigl(\bigcup_{n=1}^{\infty} B_n\bigr) = \bigcup_{n=1}^{\infty} f^{-1}(B_n)$이다. 그 집합열은 $\mathcal{M}$의 원소로 된 집합열이므로 (σ3)에 의해 이 합집합은 $\mathcal{M}$의 원소이다. 따라서 $\bigcup_{n=1}^{\infty} B_n \in \mathcal{N}$이다.
:::

## 예시와 반례

:::example[짝을 이룬 두 수를 함께 담는 집합들]
$X = \mathbb{N}$으로 두고
$$
\begin{aligned}
& \mathcal{M} = \{A \in \mathscr{P}(\mathbb{N}) : \\
& \qquad \text{모든 자연수 } k \text{에서} \\
& \qquad 2k - 1 \in A \text{인 것은} \\
& \qquad \text{정확히 } 2k \in A \text{일 때}\}
\end{aligned}
$$
로 정하면 $\mathcal{M}$은 $\mathbb{N}$ 위의 σ-대수입니다. $1$과 $2$, $3$과 $4$, $5$와 $6$처럼 짝을 이룬 두 수를 함께 담거나 함께 빼는 집합들의 족입니다.

- (σ1) $\mathbb{N}$은 모든 $2k - 1$과 $2k$를 원소로 가지므로 $\mathbb{N} \in \mathcal{M}$입니다.
- (σ2) $A \in \mathcal{M}$이면, $2k - 1 \in \mathbb{N} - A$인 것은 $2k - 1 \notin A$일 때이고 이것은 $2k \notin A$, 곧 $2k \in \mathbb{N} - A$일 때입니다.
- (σ3) $(A_n)$이 $\mathcal{M}$의 원소로 된 집합열이면, [[sequence-of-sets|집합열]]의 (1)에 의해 $2k - 1 \in \bigcup_{n=1}^{\infty} A_n$인 것은 $2k - 1 \in A_n$인 $n$이 있을 때이고, 각 $A_n$에서 이것은 $2k \in A_n$과 같으므로 $2k \in A_n$인 $n$이 있을 때, 곧 $2k \in \bigcup_{n=1}^{\infty} A_n$일 때입니다.

$\{1, 2\}$는 $\mathcal{M}$의 원소입니다. $k = 1$이면 $1$과 $2$가 둘 다 들어 있고, $k \ge 2$이면 [[prime-number]]의 (Z3)과 [[well-ordering-principle]]의 (Z7)에 의해 $2k \ge 4$, $2k - 1 \ge 3$이므로 둘 다 들어 있지 않습니다. 한편 $\{1\}$은 $1 \in \{1\}$이고 $2 \notin \{1\}$이므로 $\mathcal{M}$의 원소가 아닙니다. 짝수인 자연수 전체도 $2$는 담고 $1$은 담지 않으므로 $\mathcal{M}$의 원소가 아닙니다.

같은 방법으로 $E = \{1, 2, 3, 4\}$는 $\mathcal{M}$의 원소이므로 (6)을 쓸 수 있습니다. $k \ge 3$이면 $2k - 1 \ge 5$이고 $2k \ge 6$이어서 둘 다 $E$에 없으므로, $E$의 부분집합 가운데 $\mathcal{M}$에 드는 것은 $\{1, 2\}$를 통째로 담거나 빼고 $\{3, 4\}$를 통째로 담거나 빼는 것입니다. 따라서 $\mathcal{M}_E = \{\emptyset, \{1, 2\}, \{3, 4\}, E\}$입니다.
:::

:::counterexample[(σ1)과 (σ2)를 만족하지만 σ-대수가 아닌 예]
$\mathbb{N}$의 부분집합 $A$ 가운데 $A$가 유한집합이거나 $\mathbb{N} - A$가 유한집합인 것 전체를 $\mathcal{A}$라 합시다. $\mathbb{N} - \mathbb{N} = \emptyset$은 원소를 $0$개 가지므로([[finite-set]]의 (F2)) 유한집합이고, $\mathbb{N} \in \mathcal{A}$입니다. $A \in \mathcal{A}$이면 (1)의 마지막 등식에 의해 $\mathbb{N} - (\mathbb{N} - A) = A$이므로 $\mathbb{N} - A$도 조건을 만족해 $\mathcal{A}$에 듭니다. 그러나 (σ3)은 성립하지 않습니다.

$n$번째 항이 $\{2n\}$인 집합열을 생각합시다. $\{1\}$에서 $\{2n\}$으로 가는 함수는 전단사이므로 $\{2n\}$은 원소를 $1$개 갖는 유한집합이고, 각 항은 $\mathcal{A}$의 원소입니다. [[sequence-of-sets|집합열]]의 (1)에 의해 그 합집합은 $2n$($n \in \mathbb{N}$) 꼴의 수 전체의 집합 $P$입니다. $n$에서의 값이 $2n$인 함수 $\mathbb{N} \to P$는 전사이고 단사이므로($2n = 2n'$이면 $n = n'$) $P$는 [[countably-infinite-set|가산 무한]]이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 유한집합이 아닙니다.

$\mathbb{N} - P$도 유한집합이 아닙니다. 정수의 순서는 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룹니다. 자연수 $n$은 $n \ge 1$이므로 (Z3)에 의해 $2n \ge 2$이고 (Z7)에 의해 $2n - 1 \ge 1$이어서, $2n - 1 = 2(n - 1) + 1$은 홀수인 자연수입니다. [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 홀수는 짝수가 아니므로 $2n - 1 \notin P$입니다. 그래서 $n$에서의 값이 $2n - 1$인 함수 $\mathbb{N} \to \mathbb{N} - P$가 정해지고, $2n - 1 = 2n' - 1$이면 $n = n'$이므로 단사입니다. 전사이기도 합니다. $m \in \mathbb{N} - P$라 합시다. 같은 사실에 의해 $m$은 짝수이거나 홀수입니다. $m = 2a$인 정수 $a$가 있다면, $a \le 0$일 때 (Z2)에 의해 $2a \le 0 < 1 \le m$이 되어 어긋나므로 (Z5)에 의해 $0 < a$이고, (Z1)에 의해 $a \ge 1$이어서 $m \in P$가 되어 어긋납니다. 따라서 $m = 2a + 1$인 정수 $a$가 있습니다. $a \le -1$이면 (Z3)과 (Z7)에 의해 $2a + 1 \le -1 < 1 \le m$이 되어 어긋나므로 $-1 < a$이고, (Z1)에 의해 $a \ge 0$입니다. 그러면 $n = a + 1$은 자연수이고 $2n - 1 = m$입니다. 따라서 $\mathbb{N} - P$는 가산 무한이고 유한집합이 아닙니다. $P$와 $\mathbb{N} - P$가 둘 다 유한집합이 아니므로 $P \notin \mathcal{A}$이고, $\mathcal{A}$는 (σ3)을 만족하지 않습니다.
:::

## 확인 질문

:::check[$X = \mathbb{Z}$이고 $\mathcal{S}$가 "모든 정수 $x$에서 $x \in A$인 것은 정확히 $-x \in A$일 때"를 만족하는 $\mathbb{Z}$의 부분집합 $A$ 전체일 때, $\mathcal{S}$는 σ-대수인가?]
그렇습니다. $\mathbb{Z}$는 모든 정수를 담으므로 조건을 만족합니다. $A \in \mathcal{S}$이면 $x \in \mathbb{Z} - A$인 것은 $x \notin A$, 곧 $-x \notin A$, 곧 $-x \in \mathbb{Z} - A$일 때입니다. $\mathcal{S}$의 원소로 된 집합열 $(A_n)$에서 $x$가 합집합에 속하는 것은 $x \in A_n$인 $n$이 있을 때이고, 각 $A_n$에서 이것은 $-x \in A_n$과 같으므로 $-x$가 합집합에 속할 때입니다. 예컨대 $\{-1, 1\} \in \mathcal{S}$이고 $\{1\} \notin \mathcal{S}$입니다.
:::

:::check[두 가측집합의 대칭차 $(A - B) \cup (B - A)$는 가측집합인가?]
그렇습니다. (1)에 의해 $A - B$와 $B - A$가 $\mathcal{M}$의 원소이고, 다시 (1)에 의해 그 합집합도 $\mathcal{M}$의 원소입니다.
:::
