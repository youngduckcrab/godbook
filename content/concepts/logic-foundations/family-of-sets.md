---
title: 집합족의 합집합과 교집합
title_en: Union and Intersection of a Family of Sets
aliases: [집합족, family of sets, 집합들의 합집합, 집합들의 교집합, 임의 합집합, 임의 교집합, 집합족의 드 모르간 법칙]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 집합 X 의 부분집합들을 원소로 하는 집합(집합족)에 대해, 그 원소 가운데 하나라도에 속하는 점 전체를 합집합, 모두에 속하는 점 전체를 교집합으로 정하고, 빈 집합족, 드 모르간 법칙, 분배법칙 같은 기본 성질을 증명한다.
requires: [set, subset, empty-set-is-subset, set-operations, power-set, open-sentence, quantifiers, negation-of-quantified-statements, recursion-theorem, prime-number, order-properties-of-reals, archimedean-property]
sources:
  - ref: hammack-book-of-proof
    loc: 1.8절 Indexed Sets, Definition 1.7 (p.25), Definition 1.8 (p.26), 1.8절 연습문제 5, 9, 11, 13, 14 (p.29)
    checked: original
    note: "출처의 Definition 1.8(p.26)은 첨수가 붙은 꼴이다. 공집합이 아닌 첨수 집합 I 의 각 α 마다 집합 A_α 가 있을 때 ⋃_{α∈I} A_α 를 '적어도 하나의 A_α 에 속하는 x 전체', ⋂_{α∈I} A_α 를 '모든 A_α 에 속하는 x 전체'로 정하고, 전체집합은 정하지 않는다. Definition 1.7(p.25)은 유한 개 A_1, …, A_n 의 꼴이다. 이 항목은 첨수 없이 집합족 𝒜 ⊆ 𝒫(X) 의 ⋃𝒜, ⋂𝒜 를 X 안에서 정하고, 빈 집합족을 허용해 ⋂∅ = X 로 둔다. '집합족'(family)이라는 말은 출처 1.8절에 없고 출처는 'collection of sets', 'indexed sets' 라고 쓴다(검색어 family, collection, index set, 책 전체). 식으로 정한 집합족의 읽는 법과 성질 (1)–(10)의 증명은 이 사이트가 직접 쓴 것이다. 출처 1.8절 연습문제 11 은 ⋂ ⊆ ⋃ 가 늘 참인지, 13·14 는 J ⊆ I 일 때 합집합과 교집합의 포함 관계를 묻는다(이 항목의 (1), (4)와 같은 물음, 첨수 집합이 공집합이 아닌 경우). 예시 '멱집합 전체의 합집합과 교집합'은 출처 연습문제 9(⋃_{X∈𝒫(ℕ)} X 와 ⋂_{X∈𝒫(ℕ)} X)와 같은 발상이다. 예시 '세 집합의 족'은 출처 예 1.12(p.25, 세 유한집합의 합집합과 교집합)와 같은 발상이다. 예시 '1 이상인 실수의 합집합'은 출처 연습문제 5(⋃_{i∈ℕ} [i, i + 1] 과 ⋂_{i∈ℕ} [i, i + 1])와 합집합·교집합이 같은 집합으로 나온다. 확인 질문 'X ≠ ∅ 일 때 ⋂𝒜 ⊆ ⋃𝒜 인가'는 연습문제 11 과 같은 물음을 빈 집합족까지 넓힌 것이다."
  - ref: fuglede-basic-topology
    loc: "Arbitrary unions and intersections 절, content/set-theory.tex:126–155 (정의 129–133, 드 모르간 법칙의 명제와 부분 증명 136–155)"
    checked: original
    note: "출처는 집합 I 로 첨수가 붙은 족 {A_i}_{i∈I} 를 'family of sets parametrised by I' 라 부르고, I 에 조건을 두지 않고 ⋃_{i∈I} A_i 와 ⋂_{i∈I} A_i 를 정한다(129–133). 이어지는 명제(136–146)는 A_i ⊆ X 일 때 X − ⋃_{i∈I} A_i = ⋂_{i∈I} (X − A_i), X − ⋂_{i∈I} A_i = ⋃_{i∈I} (X − A_i) 와, 분배법칙을 세 집합 A ∩ (B ∪ C), A ∪ (B ∩ C) 꼴로 적는다. 증명(147–155)은 분배법칙 한 방향과 드 모르간 법칙 한 방향만 쓰고 나머지 여섯 방향은 독자에게 맡긴다. 이 항목의 (5)는 출처의 드 모르간 법칙을 집합족 꼴로 쓴 것이고, (6)은 출처의 세 집합 분배법칙을 집합족으로 넓힌 꼴이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 4건과 경계 경우의 문장을 고쳤다."
added: 2026-11-19
---

:::statement
집합, 부분집합, 두 집합의 합집합·교집합·차집합은 [[set]], [[subset]], [[set-operations|집합의 연산]]의 것이고, $\mathscr{P}(X)$는 [[power-set]]이다. 아래에서 $X$는 집합이다.

**조건으로 정한 부분집합.** $P(x)$가 $X$의 원소 $x$에 관한 [[open-sentence|열린 문장]]일 때 $\{x \in X : P(x)\}$는 $X$의 원소 가운데 $P(x)$가 참인 것 전체의 집합이다. 곧 대상 $a$가 이 집합의 원소인 것은 정확히 $a \in X$이고 $P(a)$가 참일 때이다. 이 집합의 원소는 모두 $X$의 원소이므로 이 집합은 $X$의 부분집합이다.

**집합족.** $\mathscr{P}(X)$의 부분집합, 곧 $X$의 부분집합들을 원소로 하는 집합 $\mathcal{A}$를 **$X$의 집합족**(family of subsets of $X$)이라 한다. $X$의 집합족 $\mathcal{A}$의 **합집합**(union)과 **교집합**(intersection)을 다음과 같이 정한다.
$$
\bigcup \mathcal{A} = \{x \in X : x \in A \text{인 } A \in \mathcal{A} \text{가 있다}\}, \qquad
\bigcap \mathcal{A} = \{x \in X : \text{모든 } A \in \mathcal{A} \text{에 대하여 } x \in A\}.
$$
둘 다 $X$의 부분집합이다. 대상 $a$가 $\bigcup \mathcal{A}$의 원소인 것은 정확히 $a \in A$인 $A \in \mathcal{A}$가 있을 때이고(그런 $A$는 $X$의 부분집합이므로 이때 $a \in X$이다), $a$가 $\bigcap \mathcal{A}$의 원소인 것은 정확히 $a \in X$이고 모든 $A \in \mathcal{A}$에 대하여 $a \in A$일 때이다.

**빈 집합족.** 공집합 $\emptyset$은 $X$의 집합족이고 $\bigcup \emptyset = \emptyset$, $\bigcap \emptyset = X$이다. 따라서 $\bigcap \mathcal{A}$는 $\mathcal{A}$만으로 정해지지 않고 $X$를 함께 정해야 뜻이 정해진다(아래 (10)). 어느 집합의 집합족으로 보는지가 문맥에서 분명하지 않으면 "$X$의 집합족으로 본 교집합"처럼 밝힌다.

**식으로 정한 집합족.** $T$가 집합이고 $T$의 각 원소 $t$마다 $X$의 부분집합 $F(t)$가 정해져 있을 때(여기서 "정해져 있다"는 [[recursion-theorem|재귀 정리]]의 (1)에서와 같은 뜻이다. 각 $t$마다 여러 후보 가운데 하나를 고르는 것은 들어가지 않는다)
$$
\{F(t) : t \in T\} = \{C \in \mathscr{P}(X) : \text{어떤 } t \in T \text{에 대하여 } C = F(t)\}
$$
로 읽는다. 이것은 $X$의 집합족이고, 집합 $C$가 이 집합족의 원소인 것은 정확히 $C = F(t)$인 $t \in T$가 있을 때이다. 예를 들어 $\mathcal{A}$가 $X$의 집합족이면 $\{X - A : A \in \mathcal{A}\} = \{C \in \mathscr{P}(X) : \text{어떤 } A \in \mathcal{A} \text{에 대하여 } C = X - A\}$이다.

다음이 성립한다. 아래에서 $\mathcal{A}$, $\mathcal{B}$는 $X$의 집합족이고 $S$는 $X$의 부분집합이다.

1. $A \in \mathcal{A}$이면 $\bigcap \mathcal{A} \subseteq A \subseteq \bigcup \mathcal{A}$이다.
2. (i) $\bigcup \mathcal{A} \subseteq S$인 것은 정확히 모든 $A \in \mathcal{A}$에 대하여 $A \subseteq S$일 때이다. (ii) $S \subseteq \bigcap \mathcal{A}$인 것은 정확히 모든 $A \in \mathcal{A}$에 대하여 $S \subseteq A$일 때이다.
3. $A$, $B$가 $X$의 부분집합이면 $\bigcup \{A, B\} = A \cup B$이고 $\bigcap \{A, B\} = A \cap B$이다. 또 $\bigcup \{A\} = \bigcap \{A\} = A$이다.
4. $\mathcal{A} \subseteq \mathcal{B}$이면 $\bigcup \mathcal{A} \subseteq \bigcup \mathcal{B}$이고 $\bigcap \mathcal{B} \subseteq \bigcap \mathcal{A}$이다.
5. (드 모르간 법칙) $X - \bigcup \mathcal{A} = \bigcap \{X - A : A \in \mathcal{A}\}$이고 $X - \bigcap \mathcal{A} = \bigcup \{X - A : A \in \mathcal{A}\}$이다.
6. (분배법칙) $S \cap \bigcup \mathcal{A} = \bigcup \{S \cap A : A \in \mathcal{A}\}$이고 $S \cup \bigcap \mathcal{A} = \bigcap \{S \cup A : A \in \mathcal{A}\}$이다. 두 등식은 $\mathcal{A} = \emptyset$일 때에도 성립한다.
7. (두 집합족의 합집합) $\mathcal{A} \cup \mathcal{B}$는 $X$의 집합족이고 $\bigcup (\mathcal{A} \cup \mathcal{B}) = \bigl(\bigcup \mathcal{A}\bigr) \cup \bigl(\bigcup \mathcal{B}\bigr)$, $\bigcap (\mathcal{A} \cup \mathcal{B}) = \bigl(\bigcap \mathcal{A}\bigr) \cap \bigl(\bigcap \mathcal{B}\bigr)$이다.
8. (조건으로 고른 원소들의 합집합) $U \subseteq X$라 하자. $\{B \in \mathcal{B} : B \subseteq U\}$는 $X$의 집합족이고 다음이 성립한다.
   - (i) $\bigcup \{B \in \mathcal{B} : B \subseteq U\} \subseteq U$이다.
   - (ii) $U = \bigcup \{B \in \mathcal{B} : B \subseteq U\}$인 것은 정확히 모든 $x \in U$에 대하여 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있을 때이다.
9. (식으로 정한 집합족의 합집합과 교집합) 위의 $\{F(t) : t \in T\}$에 대하여, 대상 $a$가 $\bigcup \{F(t) : t \in T\}$의 원소인 것은 정확히 $a \in F(t)$인 $t \in T$가 있을 때이고, $a$가 $\bigcap \{F(t) : t \in T\}$의 원소인 것은 정확히 $a \in X$이고 모든 $t \in T$에 대하여 $a \in F(t)$일 때이다.
10. (전체집합을 바꾸기) $Y$가 $X$의 부분집합이면 $\mathscr{P}(Y) \subseteq \mathscr{P}(X)$이므로 $Y$의 집합족은 $X$의 집합족이기도 하다. $\mathcal{C}$가 $Y$의 집합족일 때, $\mathcal{C}$를 $Y$의 집합족으로 보아 정한 합집합과 $X$의 집합족으로 보아 정한 합집합은 같은 집합이다. $\mathcal{C} \ne \emptyset$이면 두 교집합도 같은 집합이고, $\mathcal{C} = \emptyset$이면 두 교집합은 각각 $Y$와 $X$이다. 또 모든 $t \in T$에서 $F(t) \subseteq Y$이면 $\{F(t) : t \in T\}$는 $Y$ 안에서 읽으나 $X$ 안에서 읽으나 같은 집합이다.
:::

:::english
Sets, subsets, and union, intersection and difference of two sets are as in the earlier entries, and $\mathscr{P}(X)$ is the power set. Throughout, $X$ is a set.

**Subsets defined by a condition.** If $P(x)$ is an open sentence about elements $x$ of $X$, then $\{x \in X : P(x)\}$ is the set of all elements of $X$ for which $P(x)$ is true; that is, an object $a$ belongs to this set exactly when $a \in X$ and $P(a)$ is true. Every element of this set is an element of $X$, so it is a subset of $X$.

**Families of sets.** A subset $\mathcal{A}$ of $\mathscr{P}(X)$, that is, a set whose elements are subsets of $X$, is called a **family of subsets of $X$**. The **union** and the **intersection** of a family $\mathcal{A}$ of subsets of $X$ are defined by
$$
\bigcup \mathcal{A} = \{x \in X : x \in A \text{ for some } A \in \mathcal{A}\}, \qquad
\bigcap \mathcal{A} = \{x \in X : x \in A \text{ for every } A \in \mathcal{A}\}.
$$
Both are subsets of $X$. An object $a$ belongs to $\bigcup \mathcal{A}$ exactly when $a \in A$ for some $A \in \mathcal{A}$ (such an $A$ is a subset of $X$, so then $a \in X$), and $a$ belongs to $\bigcap \mathcal{A}$ exactly when $a \in X$ and $a \in A$ for every $A \in \mathcal{A}$.

**The empty family.** The empty set $\emptyset$ is a family of subsets of $X$, and $\bigcup \emptyset = \emptyset$, $\bigcap \emptyset = X$. Hence $\bigcap \mathcal{A}$ is not determined by $\mathcal{A}$ alone; its meaning depends on $X$ as well (see (10) below). When it is not clear from the context which set the family is regarded in, we say so, as in "the intersection of $\mathcal{A}$ regarded as a family of subsets of $X$".

**Families given by an expression.** Let $T$ be a set, and suppose that for each element $t$ of $T$ a subset $F(t)$ of $X$ is specified (in the same sense as in item (1) of the recursion theorem; choosing one of several candidates for each $t$ is not included). We read
$$
\{F(t) : t \in T\} = \{C \in \mathscr{P}(X) : C = F(t) \text{ for some } t \in T\}.
$$
This is a family of subsets of $X$, and a set $C$ belongs to it exactly when $C = F(t)$ for some $t \in T$. For example, if $\mathcal{A}$ is a family of subsets of $X$, then $\{X - A : A \in \mathcal{A}\} = \{C \in \mathscr{P}(X) : C = X - A \text{ for some } A \in \mathcal{A}\}$.

The following hold. Here $\mathcal{A}$ and $\mathcal{B}$ are families of subsets of $X$, and $S$ is a subset of $X$.

1. If $A \in \mathcal{A}$, then $\bigcap \mathcal{A} \subseteq A \subseteq \bigcup \mathcal{A}$.
2. (i) $\bigcup \mathcal{A} \subseteq S$ exactly when $A \subseteq S$ for every $A \in \mathcal{A}$. (ii) $S \subseteq \bigcap \mathcal{A}$ exactly when $S \subseteq A$ for every $A \in \mathcal{A}$.
3. If $A$ and $B$ are subsets of $X$, then $\bigcup \{A, B\} = A \cup B$ and $\bigcap \{A, B\} = A \cap B$. Also $\bigcup \{A\} = \bigcap \{A\} = A$.
4. If $\mathcal{A} \subseteq \mathcal{B}$, then $\bigcup \mathcal{A} \subseteq \bigcup \mathcal{B}$ and $\bigcap \mathcal{B} \subseteq \bigcap \mathcal{A}$.
5. (De Morgan's laws) $X - \bigcup \mathcal{A} = \bigcap \{X - A : A \in \mathcal{A}\}$ and $X - \bigcap \mathcal{A} = \bigcup \{X - A : A \in \mathcal{A}\}$.
6. (Distributive laws) $S \cap \bigcup \mathcal{A} = \bigcup \{S \cap A : A \in \mathcal{A}\}$ and $S \cup \bigcap \mathcal{A} = \bigcap \{S \cup A : A \in \mathcal{A}\}$. Both equalities also hold when $\mathcal{A} = \emptyset$.
7. (Union of two families) $\mathcal{A} \cup \mathcal{B}$ is a family of subsets of $X$, and $\bigcup (\mathcal{A} \cup \mathcal{B}) = \bigl(\bigcup \mathcal{A}\bigr) \cup \bigl(\bigcup \mathcal{B}\bigr)$, $\bigcap (\mathcal{A} \cup \mathcal{B}) = \bigl(\bigcap \mathcal{A}\bigr) \cap \bigl(\bigcap \mathcal{B}\bigr)$.
8. (Union of the members selected by a condition) Let $U \subseteq X$. Then $\{B \in \mathcal{B} : B \subseteq U\}$ is a family of subsets of $X$, and:
   - (i) $\bigcup \{B \in \mathcal{B} : B \subseteq U\} \subseteq U$.
   - (ii) $U = \bigcup \{B \in \mathcal{B} : B \subseteq U\}$ exactly when for every $x \in U$ there is a $B \in \mathcal{B}$ with $x \in B$ and $B \subseteq U$.
9. (Union and intersection of a family given by an expression) For the family $\{F(t) : t \in T\}$ above, an object $a$ belongs to $\bigcup \{F(t) : t \in T\}$ exactly when $a \in F(t)$ for some $t \in T$, and $a$ belongs to $\bigcap \{F(t) : t \in T\}$ exactly when $a \in X$ and $a \in F(t)$ for every $t \in T$.
10. (Changing the ambient set) If $Y$ is a subset of $X$, then $\mathscr{P}(Y) \subseteq \mathscr{P}(X)$, so a family of subsets of $Y$ is also a family of subsets of $X$. For a family $\mathcal{C}$ of subsets of $Y$, the union of $\mathcal{C}$ regarded as a family of subsets of $Y$ and its union regarded as a family of subsets of $X$ are the same set. If $\mathcal{C} \ne \emptyset$, the two intersections are also the same set; if $\mathcal{C} = \emptyset$, the two intersections are $Y$ and $X$ respectively. Moreover, if $F(t) \subseteq Y$ for every $t \in T$, then $\{F(t) : t \in T\}$ is the same set whether it is read inside $Y$ or inside $X$.
:::

## 직관

두 집합의 합집합 $A \cup B$는 "둘 가운데 적어도 하나에 속하는 것", 교집합 $A \cap B$는 "둘 모두에 속하는 것"이었습니다. 집합족의 합집합과 교집합은 이 "적어도 하나"와 "모두"를 집합이 몇 개 있든, 무한히 많든 그대로 쓰는 것입니다.

학교의 동아리에 빗대어 볼 수 있습니다. 전교생이 $X$이고, 동아리 하나하나가 회원의 집합(곧 $X$의 부분집합)이며, 동아리 전체의 모임이 집합족 $\mathcal{A}$입니다. $\bigcup \mathcal{A}$는 "어느 동아리든 하나라도 든 학생", $\bigcap \mathcal{A}$는 "모든 동아리에 든 학생"입니다. 동아리가 하나도 없으면 "하나라도 든 학생"은 없지만, "모든 동아리에 든다"는 조건은 따질 동아리가 없어 모든 학생에게 참이 됩니다. 그래서 $\bigcap \emptyset$은 전교생 $X$이고, 전교생이 누구인지 정해 두어야 이 값이 정해집니다.

"식으로 정한 집합족" $\{X - A : A \in \mathcal{A}\}$는 "$\mathcal{A}$의 원소마다 여집합을 하나씩 만들어 모은 것"이라는 뜻이지만, 이 사이트는 이것을 "$\mathscr{P}(X)$의 원소 가운데, $\mathcal{A}$의 어떤 원소의 여집합인 것 전체"라는 조건으로 정한 부분집합으로 읽습니다. 그러면 무엇을 모으는지가 조건 하나로 분명해지고, 각 원소마다 무엇을 고르는 일이 생기지 않습니다.

## 성질의 증명

:::proof
두 집합은 원소가 정확히 일치할 때 같으므로([[set]]), 두 집합 $P$, $Q$에 대하여 $P \subseteq Q$이고 $Q \subseteq P$이면 $P = Q$이다. 등식은 이렇게 양쪽 포함으로 보인다. 또 $A \in \mathscr{P}(X)$인 것은 정확히 $A \subseteq X$일 때이다([[power-set]]).

**조건으로 정한 부분집합과 합집합·교집합.** $\{x \in X : P(x)\}$의 원소 $a$는 $a \in X$를 만족하므로 [[subset]]의 정의에 의해 이 집합은 $X$의 부분집합이다. 따라서 $\bigcup \mathcal{A}$와 $\bigcap \mathcal{A}$는 $X$의 부분집합이다. $a \in A$인 $A \in \mathcal{A}$가 있으면 $A \in \mathscr{P}(X)$이므로 $A \subseteq X$이고 $a \in X$이다. 따라서 $a \in \bigcup \mathcal{A}$인 것은 정확히 $a \in A$인 $A \in \mathcal{A}$가 있을 때이다. $\bigcap \mathcal{A}$에 관한 문장은 정의 그대로이다.

**빈 집합족.** [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이므로 $\emptyset \subseteq \mathscr{P}(X)$이고, $\emptyset$은 $X$의 집합족이다. $\emptyset$에는 원소가 없으므로 $a \in A$인 $A \in \emptyset$은 없고, $\bigcup \emptyset$에는 원소가 없다. 곧 $\bigcup \emptyset = \emptyset$이다. 한편 $x \in X$이면 "모든 $A \in \emptyset$에 대하여 $x \in A$"는 거짓이 되게 하는 $A \in \emptyset$이 없으므로 참이다([[quantifiers]]). 따라서 $X$의 모든 원소가 $\bigcap \emptyset$에 속하고, $\bigcap \emptyset \subseteq X$이므로 $\bigcap \emptyset = X$이다.

**식으로 정한 집합족.** $\{F(t) : t \in T\}$는 $\mathscr{P}(X)$의 원소에 관한 조건으로 정한 부분집합이므로 $\mathscr{P}(X)$의 부분집합, 곧 $X$의 집합족이다. $C = F(t)$인 $t \in T$가 있으면 $C = F(t) \subseteq X$이므로 $C \in \mathscr{P}(X)$이다. 따라서 $C$가 이 집합족의 원소인 것은 정확히 $C = F(t)$인 $t \in T$가 있을 때이다.

**(9).** $\mathcal{C} = \{F(t) : t \in T\}$라 하자. $a \in \bigcup \mathcal{C}$이면 $a \in C$인 $C \in \mathcal{C}$가 있고, $C = F(t)$인 $t \in T$가 있으므로 $a \in F(t)$이다. 거꾸로 $a \in F(t)$인 $t \in T$가 있으면 $F(t) \in \mathcal{C}$이고 $a \in F(t)$이므로 $a \in \bigcup \mathcal{C}$이다. 교집합에 대하여, $a \in X$라 하자. 모든 $C \in \mathcal{C}$에서 $a \in C$이면, 각 $t \in T$에서 $F(t) \in \mathcal{C}$이므로 $a \in F(t)$이다. 거꾸로 모든 $t \in T$에서 $a \in F(t)$이면, $C \in \mathcal{C}$마다 $C = F(t)$인 $t$가 있으므로 $a \in C$이다. 따라서 $a \in \bigcap \mathcal{C}$인 것은 정확히 $a \in X$이고 모든 $t \in T$에서 $a \in F(t)$일 때이다.

**(1).** $A \in \mathcal{A}$라 하자. $x \in \bigcap \mathcal{A}$이면 $\mathcal{A}$의 모든 원소가 $x$를 포함하므로 특히 $x \in A$이다. $x \in A$이면 $A$가 $x$를 포함하는 $\mathcal{A}$의 원소이므로 $x \in \bigcup \mathcal{A}$이다.

**(2).** (i) $\bigcup \mathcal{A} \subseteq S$이고 $A \in \mathcal{A}$라 하자. $x \in A$이면 (1)에 의해 $x \in \bigcup \mathcal{A}$이고, 따라서 $x \in S$이다. 곧 $A \subseteq S$이다. 거꾸로 모든 $A \in \mathcal{A}$에서 $A \subseteq S$라 하자. $x \in \bigcup \mathcal{A}$이면 $x \in A$인 $A \in \mathcal{A}$가 있고 $A \subseteq S$이므로 $x \in S$이다.
(ii) $S \subseteq \bigcap \mathcal{A}$이고 $A \in \mathcal{A}$라 하자. $x \in S$이면 $x \in \bigcap \mathcal{A}$이고 (1)에 의해 $x \in A$이다. 거꾸로 모든 $A \in \mathcal{A}$에서 $S \subseteq A$라 하자. $x \in S$이면 $S \subseteq X$이므로 $x \in X$이고, 모든 $A \in \mathcal{A}$에서 $x \in A$이므로 $x \in \bigcap \mathcal{A}$이다.

**(3).** $A, B \subseteq X$이므로 $\{A, B\}$와 $\{A\}$는 $X$의 집합족이다. 집합 $C$가 $\{A, B\}$의 원소인 것은 정확히 $C = A$이거나 $C = B$일 때이다. 따라서 $x \in \bigcup \{A, B\}$인 것은 정확히 $x \in A$이거나 $x \in B$일 때, 곧 $x \in A \cup B$일 때이다. 또 $x \in \bigcap \{A, B\}$인 것은 정확히 $x \in X$이고 $x \in A$이고 $x \in B$일 때이며, $A \subseteq X$이므로 이것은 정확히 $x \in A \cap B$일 때이다. $\{A\}$의 원소는 $A$뿐이므로 같은 방식으로 $x \in \bigcup \{A\}$인 것과 $x \in \bigcap \{A\}$인 것은 각각 정확히 $x \in A$일 때이다(교집합에서는 $A \subseteq X$를 쓴다).

**(4).** $\mathcal{A} \subseteq \mathcal{B}$라 하자. $x \in \bigcup \mathcal{A}$이면 $x \in A$인 $A \in \mathcal{A}$가 있고 $A \in \mathcal{B}$이므로 $x \in \bigcup \mathcal{B}$이다. $x \in \bigcap \mathcal{B}$이면 $x \in X$이고 $\mathcal{B}$의 모든 원소가 $x$를 포함한다. $A \in \mathcal{A}$이면 $A \in \mathcal{B}$이므로 $x \in A$이다. 따라서 $x \in \bigcap \mathcal{A}$이다.

**(5).** $\mathcal{C} = \{X - A : A \in \mathcal{A}\}$라 하자. 각 $A \in \mathcal{A}$에서 $X - A \subseteq X$이므로 $\mathcal{C}$는 식으로 정한 집합족이다. $x \in X$이면 $x \notin A$인 것은 정확히 $x \in X - A$일 때이다([[set-operations|차집합]]의 정의). 이것을 (가)라 부른다.

첫째 등식. $x \in X - \bigcup \mathcal{A}$이면 $x \in X$이고 "$x \in A$인 $A \in \mathcal{A}$가 있다"가 거짓이다. [[negation-of-quantified-statements|한정 명제의 부정]]의 2에 의해 모든 $A \in \mathcal{A}$에서 $x \notin A$이고, (가)에 의해 모든 $A \in \mathcal{A}$에서 $x \in X - A$이다. (9)에 의해 $x \in \bigcap \mathcal{C}$이다. 거꾸로 $x \in \bigcap \mathcal{C}$이면 (9)에 의해 $x \in X$이고 모든 $A \in \mathcal{A}$에서 $x \in X - A$, 곧 $x \notin A$이다. 따라서 $x$를 포함하는 $\mathcal{A}$의 원소는 없고 $x \notin \bigcup \mathcal{A}$이므로 $x \in X - \bigcup \mathcal{A}$이다.

둘째 등식. $x \in X - \bigcap \mathcal{A}$이면 $x \in X$이고 $x \notin \bigcap \mathcal{A}$이다. $x \in X$이므로 $x \notin \bigcap \mathcal{A}$는 "모든 $A \in \mathcal{A}$에서 $x \in A$"가 거짓이라는 뜻이고, [[negation-of-quantified-statements|한정 명제의 부정]]의 1에 의해 $x \notin A$인 $A \in \mathcal{A}$가 있다. (가)에 의해 $x \in X - A$이고, (9)에 의해 $x \in \bigcup \mathcal{C}$이다. 거꾸로 $x \in \bigcup \mathcal{C}$이면 (9)에 의해 $x \in X - A$인 $A \in \mathcal{A}$가 있다. 그러면 $x \in X$이고 $x \notin A$이므로 "모든 $A \in \mathcal{A}$에서 $x \in A$"가 거짓이고 $x \notin \bigcap \mathcal{A}$이다. 따라서 $x \in X - \bigcap \mathcal{A}$이다.

**(6).** 각 $A \in \mathcal{A}$에서 $S \cap A$와 $S \cup A$는 $X$의 부분집합이다($S$, $A$가 $X$의 부분집합이므로). $\mathcal{D} = \{S \cap A : A \in \mathcal{A}\}$, $\mathcal{E} = \{S \cup A : A \in \mathcal{A}\}$라 하자.

첫째 등식. $x \in S \cap \bigcup \mathcal{A}$이면 $x \in S$이고 $x \in A$인 $A \in \mathcal{A}$가 있다. 이 $A$에서 $x \in S \cap A$이므로 (9)에 의해 $x \in \bigcup \mathcal{D}$이다. 거꾸로 $x \in \bigcup \mathcal{D}$이면 (9)에 의해 $x \in S \cap A$인 $A \in \mathcal{A}$가 있다. 그러면 $x \in S$이고, $x \in A$이므로 $x \in \bigcup \mathcal{A}$이다. 따라서 $x \in S \cap \bigcup \mathcal{A}$이다.

둘째 등식. $x \in S \cup \bigcap \mathcal{A}$라 하자. $S$와 $\bigcap \mathcal{A}$는 $X$의 부분집합이므로 $x \in X$이다. $x \in S$이면 모든 $A \in \mathcal{A}$에서 $x \in S \cup A$이다. $x \in \bigcap \mathcal{A}$이면 모든 $A \in \mathcal{A}$에서 $x \in A$이므로 $x \in S \cup A$이다. 어느 경우든 (9)에 의해 $x \in \bigcap \mathcal{E}$이다. 거꾸로 $x \in \bigcap \mathcal{E}$이면 (9)에 의해 $x \in X$이고 모든 $A \in \mathcal{A}$에서 $x \in S \cup A$이다. $x \in S$이면 $x \in S \cup \bigcap \mathcal{A}$이다. $x \notin S$이면 각 $A \in \mathcal{A}$에서 $x \in S \cup A$이고 $x \notin S$이므로 $x \in A$이다. $x \in X$이므로 $x \in \bigcap \mathcal{A}$이고 $x \in S \cup \bigcap \mathcal{A}$이다.

$\mathcal{A} = \emptyset$이어도 위의 논증은 그대로 성립한다. 이때 $\mathcal{D} = \mathcal{E} = \emptyset$이고, 두 등식은 $S \cap \emptyset = \emptyset$, $S \cup X = X$가 된다.

**(7).** $\mathcal{A} \cup \mathcal{B}$의 원소는 $\mathcal{A}$나 $\mathcal{B}$의 원소이므로 $\mathscr{P}(X)$의 원소이다. 따라서 $\mathcal{A} \cup \mathcal{B}$는 $X$의 집합족이다.
합집합. $x \in \bigcup (\mathcal{A} \cup \mathcal{B})$이면 $x \in C$인 $C \in \mathcal{A} \cup \mathcal{B}$가 있다. $C \in \mathcal{A}$이면 $x \in \bigcup \mathcal{A}$이고, $C \in \mathcal{B}$이면 $x \in \bigcup \mathcal{B}$이다. 어느 경우든 $x \in (\bigcup \mathcal{A}) \cup (\bigcup \mathcal{B})$이다. 거꾸로 $x \in \bigcup \mathcal{A}$이면 $x \in A$인 $A \in \mathcal{A}$가 있고 $A \in \mathcal{A} \cup \mathcal{B}$이므로 $x \in \bigcup (\mathcal{A} \cup \mathcal{B})$이다. $x \in \bigcup \mathcal{B}$일 때도 같은 논증에서 $\mathcal{A}$를 $\mathcal{B}$로 바꾸면 된다. $B \in \mathcal{B}$이면 $B \in \mathcal{A} \cup \mathcal{B}$이기 때문이다.
교집합. $x \in \bigcap (\mathcal{A} \cup \mathcal{B})$이면 $x \in X$이고 $\mathcal{A} \cup \mathcal{B}$의 모든 원소가 $x$를 포함한다. $\mathcal{A}$의 원소와 $\mathcal{B}$의 원소는 모두 $\mathcal{A} \cup \mathcal{B}$의 원소이므로 $x \in \bigcap \mathcal{A}$이고 $x \in \bigcap \mathcal{B}$이다. 거꾸로 $x \in (\bigcap \mathcal{A}) \cap (\bigcap \mathcal{B})$이면 $x \in X$이고, $C \in \mathcal{A} \cup \mathcal{B}$이면 $C \in \mathcal{A}$이거나 $C \in \mathcal{B}$이므로 어느 경우든 $x \in C$이다. 따라서 $x \in \bigcap (\mathcal{A} \cup \mathcal{B})$이다.

**(8).** $\mathcal{B}_U = \{B \in \mathcal{B} : B \subseteq U\}$라 하자. 이것은 조건으로 정한 $\mathcal{B}$의 부분집합이고 $\mathcal{B} \subseteq \mathscr{P}(X)$이므로 $X$의 집합족이다. (i) $\mathcal{B}_U$의 모든 원소가 $U$의 부분집합이고 $U \subseteq X$이므로 (2)의 (i)에 의해 $\bigcup \mathcal{B}_U \subseteq U$이다. (ii) 모든 $x \in U$에서 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있다고 하자. $x \in U$이면 그런 $B$는 $\mathcal{B}_U$의 원소이고 $x$를 포함하므로 $x \in \bigcup \mathcal{B}_U$이다. 곧 $U \subseteq \bigcup \mathcal{B}_U$이고, (i)과 함께 $U = \bigcup \mathcal{B}_U$이다. 거꾸로 $U = \bigcup \mathcal{B}_U$이고 $x \in U$이면 $x \in B$인 $B \in \mathcal{B}_U$가 있고, 이 $B$는 $\mathcal{B}$의 원소이며 $B \subseteq U$이다.

**(10).** $Y \subseteq X$라 하자. $C \in \mathscr{P}(Y)$이면 $C \subseteq Y$이다. $x \in C$이면 $x \in Y$이고 $Y \subseteq X$이므로 $x \in X$이다. 곧 $C \subseteq X$이고 $C \in \mathscr{P}(X)$이다. 따라서 $\mathscr{P}(Y) \subseteq \mathscr{P}(X)$이고, $Y$의 집합족 $\mathcal{C}$는 $X$의 집합족이기도 하다. 앞의 "조건으로 정한 부분집합과 합집합·교집합" 단락에 의해, $Y$의 집합족으로 보든 $X$의 집합족으로 보든 대상 $a$가 $\mathcal{C}$의 합집합에 속하는 것은 정확히 $a \in C$인 $C \in \mathcal{C}$가 있을 때이다. 두 합집합은 원소가 같으므로 같은 집합이다. 교집합에 대하여, $\mathcal{C} \ne \emptyset$이라 하고 $C_0 \in \mathcal{C}$를 하나 잡자. 모든 $C \in \mathcal{C}$에서 $a \in C$이면 $a \in C_0 \subseteq Y \subseteq X$이므로 $a \in Y$이고 $a \in X$이다. 따라서 두 교집합은 모두 정확히 "모든 $C \in \mathcal{C}$에서 $a \in C$"인 대상 $a$ 전체이고 같은 집합이다. $\mathcal{C} = \emptyset$이면 빈 집합족 단락에 의해 두 교집합은 각각 $Y$와 $X$이다. 끝으로 모든 $t \in T$에서 $F(t) \subseteq Y$라 하자. 집합 $C$가 $\{C \in \mathscr{P}(Y) : \text{어떤 } t \in T \text{에 대하여 } C = F(t)\}$에 속하는 것과 $\{C \in \mathscr{P}(X) : \text{어떤 } t \in T \text{에 대하여 } C = F(t)\}$에 속하는 것은, 식으로 정한 집합족 단락의 논증에서 $X$를 각각 $Y$와 $X$로 둔 것에 의해 모두 정확히 $C = F(t)$인 $t \in T$가 있을 때이다. 따라서 두 집합족은 같다.
:::

## 예시와 반례

:::example[세 집합의 족과 드 모르간 법칙]
$X = \{1, 2, 3, 4, 5, 6\}$, $\mathcal{A} = \bigl\{\{1, 2, 3\}, \{2, 3, 5\}, \{3, 4\}\bigr\}$라 합시다. 세 집합 가운데 하나라도에 속하는 수는 $1, 2, 3, 4, 5$이므로 $\bigcup \mathcal{A} = \{1, 2, 3, 4, 5\}$이고, 셋 모두에 속하는 수는 $3$뿐이므로 $\bigcap \mathcal{A} = \{3\}$입니다.

여집합들의 족은 $\{X - A : A \in \mathcal{A}\} = \bigl\{\{4, 5, 6\}, \{1, 4, 6\}, \{1, 2, 5, 6\}\bigr\}$입니다. 이 셋 모두에 속하는 수는 $6$뿐이고 이것은 $X - \bigcup \mathcal{A} = \{6\}$과 같습니다. 셋 가운데 하나라도에 속하는 수는 $1, 2, 4, 5, 6$이고 이것은 $X - \bigcap \mathcal{A} = \{1, 2, 4, 5, 6\}$과 같습니다. (5)의 두 등식이 이 경우에 맞는 것을 직접 확인한 셈입니다.
:::

:::example[멱집합 전체의 합집합과 교집합]
$X$가 집합이고 $\mathcal{A} = \mathscr{P}(X)$라 합시다. $x \in X$이면 $\{x\} \in \mathscr{P}(X)$이고 $x \in \{x\}$이므로 $x \in \bigcup \mathscr{P}(X)$입니다. 따라서 $\bigcup \mathscr{P}(X) = X$입니다. 한편 공집합은 $X$의 부분집합이므로([[empty-set-is-subset|공집합은 모든 집합의 부분집합]]) $\emptyset \in \mathscr{P}(X)$이고, (1)에 의해 $\bigcap \mathscr{P}(X) \subseteq \emptyset$, 곧 $\bigcap \mathscr{P}(X) = \emptyset$입니다.

원소가 하나뿐인 집합족 $\{X\}$에서는 (3)에 의해 $\bigcup \{X\} = \bigcap \{X\} = X$입니다.
:::

:::example[1 이상인 실수의 합집합]
$X = \mathbb{R}$이고 자연수 $n$마다 $F(n) = \{x \in \mathbb{R} : n \le x\}$라 하고, $\mathcal{C} = \{F(n) : n \in \mathbb{N}\}$이라 합시다.

- $\bigcup \mathcal{C} = \{x \in \mathbb{R} : 1 \le x\}$입니다. $1 \le x$이면 $x \in F(1)$입니다. 거꾸로 (9)에 의해 $x \in F(n)$인 자연수 $n$이 있으면, 자연수는 양의 정수이므로([[archimedean-property]]의 진술 첫머리) (Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이고 [[order-properties-of-reals]]의 (10)에 의해 이것은 실수의 부등식으로도 성립하므로, 같은 항목의 (1)의 (v)에 의해 $1 \le x$입니다.
- $\bigcap \mathcal{C} = \emptyset$입니다. 실수 $x$가 무엇이든 [[archimedean-property]]의 (1)에 의해 $x < n$인 자연수 $n$이 있고, 그 $n$에서 $x \notin F(n)$이므로 (9)에 의해 $x \notin \bigcap \mathcal{C}$입니다.

모든 $F(n)$이 공집합이 아닌데도 교집합은 공집합입니다.
:::

:::counterexample[짝을 바꾼 분배법칙은 빈 집합족에서 깨질 수 있다]
(6)은 $\cap$와 $\bigcup$, $\cup$와 $\bigcap$을 짝짓습니다. 짝을 바꾼 "$S \cup \bigcup \mathcal{A} = \bigcup \{S \cup A : A \in \mathcal{A}\}$"는 빈 집합족에서 깨질 수 있습니다. $X = \{1, 2\}$, $S = \{1\}$, $\mathcal{A} = \emptyset$이면 왼쪽은 $\{1\} \cup \emptyset = \{1\}$입니다. 오른쪽에서는 $\{S \cup A : A \in \emptyset\}$이 빈 집합족이므로 $\bigcup \emptyset = \emptyset$입니다. 같은 $X$, $S$에서 "$S \cap \bigcap \mathcal{A} = \bigcap \{S \cap A : A \in \mathcal{A}\}$"도 왼쪽은 $\{1\} \cap X = \{1\}$, 오른쪽은 $\bigcap \emptyset = X = \{1, 2\}$로 다릅니다.
:::

:::counterexample[교집합은 전체집합에 따라 달라질 수 있다]
빈 집합족 $\emptyset$은 $\{1\}$의 집합족이기도 하고 $\{1, 2\}$의 집합족이기도 합니다. $\{1\}$의 집합족으로 보면 $\bigcap \emptyset = \{1\}$이고, $\{1, 2\}$의 집합족으로 보면 $\bigcap \emptyset = \{1, 2\}$입니다. (10)에 의해, 한쪽이 다른 쪽의 부분집합인 두 전체집합 사이에서는 이런 차이가 빈 집합족에서만 생깁니다.
:::

:::remark[첨수를 붙인 표기]
다른 책에서는 집합 $I$의 각 원소 $i$마다 집합 $A_i$가 주어진 꼴로 $\bigcup_{i \in I} A_i$, $\bigcap_{i \in I} A_i$라고 쓰기도 합니다. 합집합은 "어떤 $i$에서 $A_i$에 속하는 것", 교집합은 "모든 $i$에서 $A_i$에 속하는 것" 전체입니다. 모든 $A_i$가 $X$의 부분집합이고 $I$가 공집합이 아니면, (9)에 의해 이것은 이 항목의 $\bigcup \{A_i : i \in I\}$, $\bigcap \{A_i : i \in I\}$와 같은 원소를 갖습니다. 교집합에서는 $I$의 원소 $i_0$을 하나 잡으면 모든 $A_i$에 속하는 대상이 $A_{i_0} \subseteq X$에 속하므로 $X$의 원소이기 때문입니다. 이 사이트는 이 표기를 쓰지 않고 집합족의 꼴로만 씁니다.
:::

## 확인 질문

:::check[원소가 공집합 하나뿐인 집합족 $\{\emptyset\}$의 합집합과 교집합은 무엇인가?]
(3)에 의해 $\bigcup \{\emptyset\} = \bigcap \{\emptyset\} = \emptyset$입니다. 빈 집합족 $\emptyset$과 달리 $\{\emptyset\}$에는 원소가 하나 있으므로, 교집합은 전체집합이 아니라 그 원소 $\emptyset$입니다.
:::

:::check[$X$가 공집합이 아닐 때 $X$의 집합족 $\mathcal{A}$에 대하여 $\bigcap \mathcal{A} \subseteq \bigcup \mathcal{A}$는 언제나 성립하는가?]
아닙니다. $\mathcal{A}$가 공집합이 아니면 원소 $A$를 하나 잡아 (1)에서 $\bigcap \mathcal{A} \subseteq A \subseteq \bigcup \mathcal{A}$이므로 성립합니다. 그러나 $\mathcal{A} = \emptyset$이면 $\bigcap \emptyset = X$이고 $\bigcup \emptyset = \emptyset$이며, $X$에 원소가 있으므로 $X \subseteq \emptyset$은 거짓입니다.
:::
