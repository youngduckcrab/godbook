---
title: 열린 덮개와 콤팩트 공간
title_en: Open Covers and Compact Spaces
aliases: [콤팩트, compact, compact space, 콤팩트 공간, 콤팩트 집합, compact set, 콤팩트 부분집합, compact subset, 열린 덮개, open cover, 부분덮개, subcover, 유한 부분덮개, finite subcover, 유한 합집합의 보조정리]
kind: definition
field: topology
msc: ["54D30"]
level: undergrad
summary: 위상공간의 모든 열린 덮개가 유한 부분덮개를 가지면 콤팩트 공간이라 하고, 부분공간 위상으로 콤팩트인 부분집합을 콤팩트 집합이라 한다. 유한 개의 고르기를 대신하는 유한 합집합의 보조정리, 바깥 공간의 열린집합과 위상의 기저로 하는 판정, 합집합과 위상의 비교, 유한·밀착·이산·여유한 위상과 실수의 예를 다룬다.
requires: [set, subset, set-operations, power-set, empty-set-is-subset, family-of-sets, finite-set, adding-or-removing-an-element, subset-of-finite-set, disjoint-union-count, natural-numbers-are-infinite, mathematical-induction, injective-surjective-bijective, image-and-preimage, preimage-and-set-operations, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-number-arithmetic, open-set-in-metric-space, topological-space, topology-examples, comparing-topologies, basis-generates-by-unions, basis-of-a-given-topology, standard-topology-on-reals, lower-limit-topology, subspace-topology, metric-subspace-topology, continuous-map, homeomorphism, homeomorphism-examples, hausdorff-space, metric-space-is-hausdorff]
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness 절의 정의와 그 뒤 두 문단, 예들, content/compactness.tex:4–35; Local compactness and one-point compactification 절의 Proposition 증명, 316–326; Compactness in ℝⁿ 절의 Theorem intervals-compact 의 증명, 185; 연습문제 3.1 (a), 3.2, content/exercises.tex:100, 104–108; Second countability 절의 예 non-second-countable, content/separation.tex:107–110; 부분공간 위상의 예, content/topological-spaces.tex:402–404"
    checked: original
    note: "정의(4–10)는 출처와 같은 뜻이다. 출처는 유한 부분덮개를 '𝒰 의 유한 개 원소 U₁, …, U_n 으로 X = ⋃U_i' 로 적고, 이 항목은 첨수 없이 유한집합인 부분족 𝒱 ⊆ 𝒰 로 ⋃𝒱 = X 라고 적는다(그래서 X = ∅ 이면 빈 족이 유한 부분덮개이다). 부분집합의 콤팩트를 부분공간 위상으로 정하는 것은 출처 13줄과 같다. 직관의 '유한한 열린 덮개는 늘 있다'는 주의는 출처 15줄의 주의('X has the finite open cover {X}')와 같은 내용이고, 반례 '유한한 열린 덮개만으로는 모자라는 예'도 그 주의를 ℝ 에서 본 것이다. (1)의 보조정리와 (2)의 𝒦_𝒰 는 이 사이트가 둔 것이다(유한 부분덮개의 원소마다 무엇을 하나씩 고르는 출처의 단계를 대신한다). 출처가 Theorem intervals-compact 의 증명에서 두는 M(185: [a, x] 가 유한 개의 U_i 로 덮이는 x 전체)은 같은 '유한 개로 덮인다'는 조건으로 정한 집합이다. 그 귀납은 topological-space 의 (2)의 증명과 같은 꼴이다. (3)은 출처 연습문제 3.2(exercises.tex:104–108)와 같은 진술이다. (6)의 두 집합의 경우와 유한 족의 경우는 출처 연습문제 3.1 (a)(exercises.tex:100)와 같은 진술이다. (8)의 (ii)의 '유한 공간은 콤팩트'는 출처의 예(16–18)와 같은 결론이다. 출처는 그 까닭을 '열린집합이 유한 개뿐'이라고 적고, 이 항목은 점의 개수에 대한 귀납((1)의 (ii))으로 보인다. (8)의 (iv)의 덮개 {{x} : x ∈ X} 는 출처 separation.tex:109 가 이산위상에서 쓰는 덮개와 같은 대상이다. (8)의 (v)의 증명(한 원소가 유한 개를 뺀 나머지를 덮고 남은 것을 따로 덮는다)은 출처의 한 점 콤팩트화가 콤팩트라는 Proposition 의 증명(316–326)과 같은 발상이다. (8)의 (vi)의 'ℝ 은 콤팩트가 아니다'는 출처의 예 reals-not-compact(19–22)와 같은 결론이다. 출처는 덮개 (−n, n) 을 쓰고, 이 항목은 열린구간 전체의 족 𝒥 와 '유한 개의 합집합은 위로 유계'라는 같은 발상을 쓴다. '(0, 1) 은 콤팩트가 아니다'는 출처의 예(29–31)와 같은 결론이고, 출처는 덮개 (1/n, 1 − 1/n) 을 쓰며 이 항목은 열린구간과 ℝ 의 위상동형으로 보인다. 예시 '정수 전체의 집합'은 출처의 예(23–25, {1/n} 이 부분공간 위상에서 이산이고 한 점 집합들의 덮개가 유한 부분덮개를 갖지 않는다)와 같은 발상이고, 이 예시가 쓰는 'ℤ 의 부분공간 위상은 이산위상'은 출처 topological-spaces.tex:402–404 와 같은 결론이다. 예시 '열린집합이 유한 개뿐인 위상'의 논법(열린 덮개 자신이 유한 부분덮개이다)은 출처의 예(16–18)의 논법과 같다."
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Definition 7.4.7, Example 7.4.8 (p.280), Prop 7.4.9 아래 문단 (p.282), Lemma 7.4.10 아래 문단과 Theorem 7.4.11 (p.282), Example 7.4.15 (iii), Remark 7.4.16, 연습문제 7.4.1, 7.4.3, 7.4.4, 7.4.9, 7.4.13, 7.4.18, 7.4.19 (p.285–286)"
    checked: original
    note: "출처 Definition 7.4.7(p.280)은 거리공간 X 의 부분집합 K 가 콤팩트라는 것을 'K ⊆ ⋃U_λ 인 X 의 열린집합 모임마다 유한 개 λ₁, …, λ_m 으로 K ⊆ ⋃U_{λ_j}' 로 정의한다. 이것은 이 항목의 (3)의 (b)를 거리위상에서 쓴 꼴이다. 출처는 p.282 의 문단에서 'K 가 (X, d) 에서 콤팩트인 것과 부분공간 거리에서 콤팩트인 것은 같다'고 적고, 연습문제 7.4.18(p.286)은 같은 진술을 보이라고 한다. 이 항목의 (3)이 그것을 위상공간에서 증명한다. Example 7.4.8(p.280)은 ℝ 이 콤팩트가 아님을 덮개 (−j, j) 로, (0, 1) 이 콤팩트가 아님을 덮개 (1/j, 1 − 1/j) 로, {0} 이 콤팩트임을 보인다. (8)의 (vi)은 앞의 둘과 같은 결론이고, ℝ 의 경우의 '유한 개만 모으면 위로 유계'는 출처가 유한 부분덮개의 첨수를 크기순으로 늘어놓아 가장 큰 것 하나로 줄이는 것과 같은 발상이다. (8)의 (ii)는 출처 연습문제 7.4.1(유한집합은 콤팩트)과 같은 진술이고, (8)의 (iv)는 Example 7.4.15 (iii)과 연습문제 7.4.3 b)(이산 거리를 준 X 가 콤팩트인 것은 정확히 유한집합일 때)와 같은 진술이다. (6)은 연습문제 7.4.4 a)와 같은 진술이다. (7)의 (i)은 Remark 7.4.16(콤팩트성은 위상에만 달려 있다)과 연습문제 7.4.19 c)(같은 위상을 주는 두 거리에서 콤팩트 집합이 같다)와 같은 방향의 내용이다. 예시 '정수 전체의 집합'의 ℤ 는 출처가 p.282 에서 수열 콤팩트가 아니라고 적고(콤팩트와 같다는 것은 Theorem 7.4.11) 연습문제 7.4.13(p.286)에서 열린 덮개를 찾게 하는 ℕ ⊆ ℝ 과 비슷한 대상이다. 확인 질문 '실수 전체의 집합 ℝ 에 여유한 위상을 주면 콤팩트인가'는 연습문제 7.4.9(ℝ 을 콤팩트로 만드는 거리가 있다)와 같은 방향의 물음(같은 집합 ℝ 이 다른 구조에서 콤팩트가 된다)이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 직관 문장 2건, 다른 항목의 증명을 근거로 삼은 곳, 넘겨짚은 단원 글 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 열린집합들의 집합족은 [[topological-space]]의 것이고, 집합족과 그 합집합, 식으로 정한 집합족, 빈 집합족은 [[family-of-sets]]의 것이며, 부분족은 [[basis-generates-by-unions]]의 것이다. "원소를 $n$개 갖는다"와 유한집합, 무한집합은 [[finite-set]]의 것이다. 부분공간 위상 $\mathcal{T}|_A$와 집합족 $\mathcal{V}|_A$는 [[subspace-topology]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

**열린 덮개와 부분덮개.** $X$의 집합족 $\mathcal{U}$가 $X$의 **열린 덮개**(open cover)인 것은 정확히 $\mathcal{U} \subseteq \mathcal{T}$이고 $\bigcup \mathcal{U} = X$일 때이다. 열린 덮개 $\mathcal{U}$의 부분족 $\mathcal{V} \subseteq \mathcal{U}$가 $\bigcup \mathcal{V} = X$를 만족하면 $\mathcal{V}$를 $\mathcal{U}$의 **부분덮개**(subcover)라 하고, 부분덮개가 유한집합이면 **유한 부분덮개**(finite subcover)라 한다. 집합족 $\mathcal{U}$의 부분족 가운데 유한집합인 것을 $\mathcal{U}$의 **유한 부분족**이라 한다.

**콤팩트 공간.** $(X, \mathcal{T})$가 **콤팩트 공간**(compact space)인 것은 정확히 $X$의 모든 열린 덮개가 유한 부분덮개를 가질 때이다. 이것을 "$(X, \mathcal{T})$는 콤팩트이다"라고도 한다.

**콤팩트 집합.** $A \subseteq X$가 $X$의 **콤팩트 부분집합**(compact subset), 줄여서 **콤팩트 집합**인 것은 정확히 부분공간 위상을 준 $A$, 곧 $(A, \mathcal{T}|_A)$가 콤팩트 공간일 때이다. [[subspace-topology]]의 (7)의 (i)에 의해 $\mathcal{T}|_X = \mathcal{T}$이므로, $X$가 $X$의 콤팩트 부분집합인 것은 정확히 $(X, \mathcal{T})$가 콤팩트일 때이다.

**유한 부분족으로 덮이는 집합.** $X$가 집합이고 $\mathcal{U}$가 $X$의 집합족일 때, $X$의 부분집합 $S$ 가운데 $S \subseteq \bigcup \mathcal{F}$인 $\mathcal{U}$의 유한 부분족 $\mathcal{F}$가 있는 것 전체의 집합족을 $\mathcal{K}_{\mathcal{U}}$로 쓴다. 곧 $S \in \mathcal{K}_{\mathcal{U}}$인 것은 정확히 $S \subseteq X$이고 그런 $\mathcal{F}$가 있을 때이다. $S \in \mathcal{K}_{\mathcal{U}}$를 "$S$는 $\mathcal{U}$의 유한 부분족으로 덮인다"고 한다. 여기서 $\mathcal{U}$의 원소가 열린집합일 필요는 없다.

다음이 성립한다. (1)과 (2)에서 $X$는 집합이기만 하면 된다.

1. (유한 합집합의 보조정리) $\mathcal{K}$가 $X$의 집합족이고, $\emptyset \in \mathcal{K}$이며, $K \in \mathcal{K}$이고 $L \in \mathcal{K}$이면 $K \cup L \in \mathcal{K}$라 하자. 그러면 다음이 성립한다.
   - (i) $\mathcal{F} \subseteq \mathcal{K}$이고 $\mathcal{F}$가 유한집합이면 $\bigcup \mathcal{F} \in \mathcal{K}$이다.
   - (ii) $S \subseteq X$가 유한집합이고 $S$의 모든 점 $s$에서 $\{s\} \in \mathcal{K}$이면 $S \in \mathcal{K}$이다.
2. (유한 부분족으로 덮이는 집합 전체) $\mathcal{U}$가 $X$의 집합족이면 다음이 성립한다.
   - (i) $\emptyset \in \mathcal{K}_{\mathcal{U}}$이다.
   - (ii) $S \in \mathcal{K}_{\mathcal{U}}$이고 $T \in \mathcal{K}_{\mathcal{U}}$이면 $S \cup T \in \mathcal{K}_{\mathcal{U}}$이다. 따라서 $\mathcal{K}_{\mathcal{U}}$는 (1)의 가정을 만족한다.
   - (iii) $S \in \mathcal{K}_{\mathcal{U}}$이고 $R \subseteq S$이면 $R \in \mathcal{K}_{\mathcal{U}}$이다.
   - (iv) $U \in \mathcal{U}$이고 $R \subseteq U$이면 $R \in \mathcal{K}_{\mathcal{U}}$이다. 특히 $\mathcal{U} \subseteq \mathcal{K}_{\mathcal{U}}$이다.
   - (v) $\mathcal{U}$가 $(X, \mathcal{T})$의 열린 덮개이면, $\mathcal{U}$가 유한 부분덮개를 갖는 것은 정확히 $X \in \mathcal{K}_{\mathcal{U}}$일 때이다. 따라서 $(X, \mathcal{T})$가 콤팩트인 것은 정확히 모든 열린 덮개 $\mathcal{U}$에서 $X \in \mathcal{K}_{\mathcal{U}}$일 때이다.
3. (바깥 공간의 열린집합으로 판정) $A \subseteq X$에 대하여 다음 둘은 서로 같은 말이다.
   - (a) $A$는 $X$의 콤팩트 부분집합이다.
   - (b) $A \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족 $\mathcal{V}$마다 $A \in \mathcal{K}_{\mathcal{V}}$이다. 곧 $A \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다.
4. (부분집합의 부분집합) $A \subseteq Y \subseteq X$이고 $Y$에 부분공간 위상 $\mathcal{T}|_Y$를 주면, $A$가 $Y$의 콤팩트 부분집합인 것은 정확히 $A$가 $X$의 콤팩트 부분집합일 때이다.
5. (위상의 기저로 판정) $\mathcal{B}$가 위상 $\mathcal{T}$의 기저이고 $A \subseteq X$이면, $A$가 $X$의 콤팩트 부분집합인 것은 정확히 $A \subseteq \bigcup \mathcal{D}$인 $\mathcal{B}$의 모든 부분족 $\mathcal{D}$에서 $A \in \mathcal{K}_{\mathcal{D}}$일 때이다. 특히 $(X, \mathcal{T})$가 콤팩트인 것은 정확히 $\bigcup \mathcal{D} = X$인 $\mathcal{B}$의 모든 부분족 $\mathcal{D}$가 유한 부분덮개를 가질 때이다.
6. (합집합) $A$와 $B$가 $X$의 콤팩트 부분집합이면 $A \cup B$도 $X$의 콤팩트 부분집합이다. $\mathcal{A}$가 $X$의 콤팩트 부분집합들로 이루어진 집합족이고 유한집합이면 $\bigcup \mathcal{A}$는 $X$의 콤팩트 부분집합이다. $\mathcal{A} = \emptyset$이어도 된다.
7. (위상을 바꾸기)
   - (i) $\mathcal{T}'$이 $X$ 위의 위상이고 $\mathcal{T} \subseteq \mathcal{T}'$이라 하자. $A \subseteq X$가 $(X, \mathcal{T}')$의 콤팩트 부분집합이면 $A$는 $(X, \mathcal{T})$의 콤팩트 부분집합이다. 특히 $(X, \mathcal{T}')$가 콤팩트이면 $(X, \mathcal{T})$도 콤팩트이다.
   - (ii) $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 위상동형사상이면, $(X, \mathcal{T})$가 콤팩트인 것은 정확히 $(Y, \mathcal{T}_Y)$가 콤팩트일 때이다.
8. (예)
   - (i) (공집합) $(\emptyset, \{\emptyset\})$은 콤팩트 공간이다. 따라서 $\emptyset$은 모든 위상공간의 콤팩트 부분집합이다.
   - (ii) (유한집합) $A \subseteq X$가 유한집합이면 $A$는 $X$의 콤팩트 부분집합이다. 특히 $X$가 유한집합이면 $X$ 위의 어떤 위상 $\mathcal{T}$에 대해서도 $(X, \mathcal{T})$는 콤팩트이다.
   - (iii) (밀착위상) $\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이면 $X$의 모든 부분집합이 콤팩트 부분집합이다. 특히 $(X, \mathcal{T})$는 콤팩트이다.
   - (iv) (이산위상) $\mathcal{T}$가 이산위상 $\mathscr{P}(X)$이면, $A \subseteq X$가 콤팩트 부분집합인 것은 정확히 $A$가 유한집합일 때이다. 특히 이산위상을 준 $X$가 콤팩트인 것은 정확히 $X$가 유한집합일 때이고, 이산위상을 준 $\mathbb{N}$은 콤팩트가 아니다.
   - (v) (여유한 위상) $\mathcal{T}$가 [[hausdorff-space]]의 (5)의 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$이면 $X$의 모든 부분집합이 콤팩트 부분집합이다. 특히 $(X, \mathcal{T}_{\mathrm{cof}})$는 콤팩트이다.
   - (vi) (실수와 열린구간) 보통 위상을 준 $\mathbb{R}$은 콤팩트가 아니다. $a < b$인 실수 $a$, $b$에 대하여 열린구간 $(a, b)$는 $\mathbb{R}$의 콤팩트 부분집합이 아니다.
   - (vii) (아래끝 위상) $\mathbb{R}_l$은 콤팩트가 아니다.
:::

:::english
Topological spaces, open sets and families of open sets are as in the entry on topological spaces; families of sets with their unions, families defined by a formula and the empty family are as in the entry on families of sets; and subfamilies are as in the entry on topologies generated by unions of basis elements. "Has $n$ elements", finite sets and infinite sets are as in the entry on finite sets. The subspace topology $\mathcal{T}|_A$ and the family $\mathcal{V}|_A$ are as in the entry on the subspace topology. Below, $(X, \mathcal{T})$ is a topological space.

**Open covers and subcovers.** A family $\mathcal{U}$ of subsets of $X$ is an **open cover** of $X$ exactly when $\mathcal{U} \subseteq \mathcal{T}$ and $\bigcup \mathcal{U} = X$. If a subfamily $\mathcal{V} \subseteq \mathcal{U}$ of an open cover $\mathcal{U}$ satisfies $\bigcup \mathcal{V} = X$, then $\mathcal{V}$ is called a **subcover** of $\mathcal{U}$, and a subcover that is a finite set is called a **finite subcover**. A subfamily of a family $\mathcal{U}$ that is a finite set is called a **finite subfamily** of $\mathcal{U}$.

**Compact spaces.** $(X, \mathcal{T})$ is a **compact space** exactly when every open cover of $X$ has a finite subcover. We also say "$(X, \mathcal{T})$ is compact".

**Compact sets.** A subset $A \subseteq X$ is a **compact subset** of $X$, or a **compact set** for short, exactly when $A$ with the subspace topology, that is $(A, \mathcal{T}|_A)$, is a compact space. Since $\mathcal{T}|_X = \mathcal{T}$ by (7)(i) of the entry on the subspace topology, $X$ is a compact subset of $X$ exactly when $(X, \mathcal{T})$ is compact.

**Sets covered by a finite subfamily.** When $X$ is a set and $\mathcal{U}$ is a family of subsets of $X$, we write $\mathcal{K}_{\mathcal{U}}$ for the family of all subsets $S$ of $X$ for which there is a finite subfamily $\mathcal{F}$ of $\mathcal{U}$ with $S \subseteq \bigcup \mathcal{F}$. Thus $S \in \mathcal{K}_{\mathcal{U}}$ exactly when $S \subseteq X$ and such an $\mathcal{F}$ exists. For $S \in \mathcal{K}_{\mathcal{U}}$ we say "$S$ is covered by a finite subfamily of $\mathcal{U}$". Here the members of $\mathcal{U}$ need not be open.

The following hold. In (1) and (2), $X$ only needs to be a set.

1. (Lemma on finite unions) Let $\mathcal{K}$ be a family of subsets of $X$ such that $\emptyset \in \mathcal{K}$, and $K \cup L \in \mathcal{K}$ whenever $K \in \mathcal{K}$ and $L \in \mathcal{K}$. Then the following hold.
   - (i) If $\mathcal{F} \subseteq \mathcal{K}$ and $\mathcal{F}$ is a finite set, then $\bigcup \mathcal{F} \in \mathcal{K}$.
   - (ii) If $S \subseteq X$ is a finite set and $\{s\} \in \mathcal{K}$ for every point $s$ of $S$, then $S \in \mathcal{K}$.
2. (All sets covered by a finite subfamily) If $\mathcal{U}$ is a family of subsets of $X$, then the following hold.
   - (i) $\emptyset \in \mathcal{K}_{\mathcal{U}}$.
   - (ii) If $S \in \mathcal{K}_{\mathcal{U}}$ and $T \in \mathcal{K}_{\mathcal{U}}$, then $S \cup T \in \mathcal{K}_{\mathcal{U}}$. Hence $\mathcal{K}_{\mathcal{U}}$ satisfies the hypotheses of (1).
   - (iii) If $S \in \mathcal{K}_{\mathcal{U}}$ and $R \subseteq S$, then $R \in \mathcal{K}_{\mathcal{U}}$.
   - (iv) If $U \in \mathcal{U}$ and $R \subseteq U$, then $R \in \mathcal{K}_{\mathcal{U}}$. In particular $\mathcal{U} \subseteq \mathcal{K}_{\mathcal{U}}$.
   - (v) If $\mathcal{U}$ is an open cover of $(X, \mathcal{T})$, then $\mathcal{U}$ has a finite subcover exactly when $X \in \mathcal{K}_{\mathcal{U}}$. Hence $(X, \mathcal{T})$ is compact exactly when $X \in \mathcal{K}_{\mathcal{U}}$ for every open cover $\mathcal{U}$.
3. (A test using open sets of the ambient space) For $A \subseteq X$ the following two statements are equivalent.
   - (a) $A$ is a compact subset of $X$.
   - (b) For every family $\mathcal{V}$ of open sets with $A \subseteq \bigcup \mathcal{V}$ we have $A \in \mathcal{K}_{\mathcal{V}}$; that is, there is a finite subfamily $\mathcal{F}$ of $\mathcal{V}$ with $A \subseteq \bigcup \mathcal{F}$.
4. (Subsets of subsets) If $A \subseteq Y \subseteq X$ and $Y$ carries the subspace topology $\mathcal{T}|_Y$, then $A$ is a compact subset of $Y$ exactly when $A$ is a compact subset of $X$.
5. (A test using a basis) If $\mathcal{B}$ is a basis for the topology $\mathcal{T}$ and $A \subseteq X$, then $A$ is a compact subset of $X$ exactly when $A \in \mathcal{K}_{\mathcal{D}}$ for every subfamily $\mathcal{D}$ of $\mathcal{B}$ with $A \subseteq \bigcup \mathcal{D}$. In particular $(X, \mathcal{T})$ is compact exactly when every subfamily $\mathcal{D}$ of $\mathcal{B}$ with $\bigcup \mathcal{D} = X$ has a finite subcover.
6. (Unions) If $A$ and $B$ are compact subsets of $X$, then $A \cup B$ is also a compact subset of $X$. If $\mathcal{A}$ is a family consisting of compact subsets of $X$ and is a finite set, then $\bigcup \mathcal{A}$ is a compact subset of $X$. Here $\mathcal{A} = \emptyset$ is allowed.
7. (Changing the topology)
   - (i) Let $\mathcal{T}'$ be a topology on $X$ with $\mathcal{T} \subseteq \mathcal{T}'$. If $A \subseteq X$ is a compact subset of $(X, \mathcal{T}')$, then $A$ is a compact subset of $(X, \mathcal{T})$. In particular, if $(X, \mathcal{T}')$ is compact, then so is $(X, \mathcal{T})$.
   - (ii) If $(Y, \mathcal{T}_Y)$ is a topological space and $f : X \to Y$ is a homeomorphism, then $(X, \mathcal{T})$ is compact exactly when $(Y, \mathcal{T}_Y)$ is compact.
8. (Examples)
   - (i) (The empty set) $(\emptyset, \{\emptyset\})$ is a compact space. Hence $\emptyset$ is a compact subset of every topological space.
   - (ii) (Finite sets) If $A \subseteq X$ is a finite set, then $A$ is a compact subset of $X$. In particular, if $X$ is a finite set, then $(X, \mathcal{T})$ is compact for every topology $\mathcal{T}$ on $X$.
   - (iii) (The indiscrete topology) If $\mathcal{T}$ is the indiscrete topology $\{\emptyset, X\}$, then every subset of $X$ is a compact subset. In particular $(X, \mathcal{T})$ is compact.
   - (iv) (The discrete topology) If $\mathcal{T}$ is the discrete topology $\mathscr{P}(X)$, then $A \subseteq X$ is a compact subset exactly when $A$ is a finite set. In particular $X$ with the discrete topology is compact exactly when $X$ is a finite set, and $\mathbb{N}$ with the discrete topology is not compact.
   - (v) (The cofinite topology) If $\mathcal{T}$ is the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ of (5) in the entry on $T_1$ and Hausdorff spaces, then every subset of $X$ is a compact subset. In particular $(X, \mathcal{T}_{\mathrm{cof}})$ is compact.
   - (vi) (The real line and open intervals) $\mathbb{R}$ with the standard topology is not compact. For real numbers $a$, $b$ with $a < b$, the open interval $(a, b)$ is not a compact subset of $\mathbb{R}$.
   - (vii) (The lower limit topology) $\mathbb{R}_l$ is not compact.
:::

## 직관

콤팩트라는 말은 "아무렇게나 덮어도 그 가운데 유한 개면 충분하다"는 뜻입니다. 어떤 열린 덮개가 주어지든, 그 덮개의 유한 부분족 가운데 이미 전체를 덮는 것이 있다는 것입니다. 한정 기호의 순서가 중요합니다. "유한한 열린 덮개가 있다"는 늘 참입니다($\{X\}$가 그런 덮개입니다). 콤팩트는 덮개를 남이 먼저 주고, 우리는 그 덮개 안에서만 유한 개를 찾아야 한다는 더 강한 조건입니다.

비유하자면 넓은 마당을 지키는 감시 카메라들입니다. 설치 업자가 어떤 배치로 카메라를 잔뜩 달아 마당 전체를 비추게 했든(아무 열린 덮개든), 그 가운데 유한 대만 켜 두어도 마당 전체가 여전히 보인다면(그 덮개의 유한 부분덮개가 있다면) 그 마당은 콤팩트입니다. 업자가 고르는 배치가 "모든 열린 덮개"에, 켜 둘 카메라를 업자가 단 것 가운데서만 고른다는 점이 "그 덮개의 부분덮개"에 맞습니다. 비유가 맞지 않는 곳도 있습니다. 카메라가 비추는 범위는 열린집합이어야 하고, 어떤 집합이 열린집합인지는 위상이 정합니다.

증명에서 자주 하고 싶은 일은 "유한 부분덮개의 원소마다 무엇을 하나씩 잡는 것"입니다. 이 강의는 선택을 쓰지 않으므로 그 대신 (1)을 씁니다. 보이고 싶은 성질을 가진 부분집합 전체를 $\mathcal{K}$로 놓고, $\mathcal{K}$가 공집합을 포함하며 두 원소의 합집합에 닫혀 있음을 확인하면, 유한 개의 원소의 합집합도 $\mathcal{K}$에 듭니다. 원소마다 무엇을 하나씩 고르는 대신 "그런 것이 있다"를 $\mathcal{K}$의 조건 안에 넣어 두는 것입니다. (2)의 $\mathcal{K}_{\mathcal{U}}$는 그 가장 흔한 경우이고, 두 유한 부분족을 합쳐도 유한하다는 데서 나옵니다.

(3)은 부분집합 $A$가 콤팩트인지를 $A$의 부분공간 위상 대신 $X$의 열린집합으로 판정하게 해 줍니다. $A$에서 열린 집합은 정확히 $X$의 열린집합과 $A$의 교집합이므로 두 판정이 같은 말이 됩니다. (8)의 예는 열린집합이 적을수록 콤팩트가 되기 쉽다는 것을 보여 줍니다. 열린집합이 둘뿐인 밀착위상에서는 모든 부분집합이 콤팩트이고, 모든 부분집합이 열린 이산위상에서는 유한집합만 콤팩트입니다. (7)의 (i)이 이것을 정리로 적은 것입니다.

## 성질의 증명

:::proof
아래에서 "집합족 (3)"처럼 쓴 것은 [[family-of-sets]]의 번호이고, "(F2)"는 [[finite-set]]의 것, "원소 더하기 (a)"와 "원소 빼기 (b)"는 [[adding-or-removing-an-element]]의 (a), (b)이다. "부분공간 위상 (4)"처럼 쓴 것은 [[subspace-topology]]의 번호이고, "역상 (1)"처럼 쓴 것은 [[preimage-and-set-operations]]의 번호이다. 두 집합은 원소가 같을 때 같으므로([[set]]) 등식은 양쪽 포함으로 보인다.

**한 원소 집합.** 대상 $c$에 대하여 $\{c\}$는 원소를 $1$개 갖는다. (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고 $c \notin \emptyset$이므로, 원소 더하기 (a)에 의해 $\emptyset \cup \{c\} = \{c\}$는 원소를 $1$개 갖는다. 따라서 $\{c\}$는 유한집합이다. 아래에서 이것을 "한 원소 집합"이라 부른다.

**(1).** (i) 정수 $n \ge 0$마다 다음 명제를 $S_n$이라 하자.

> $S_n$: $\mathcal{F} \subseteq \mathcal{K}$이고 $\mathcal{F}$가 원소를 $n$개 가지면 $\bigcup \mathcal{F} \in \mathcal{K}$이다.

[[mathematical-induction|수학적 귀납법]]을 시작점 $0$인 꼴로 쓴다. 유한집합은 어떤 정수 $n \ge 0$에 대하여 원소를 $n$개 가지므로, 모든 $S_n$을 보이면 (i)이 나온다. 기초 단계: 원소를 $0$개 갖는 집합은 (F2)에 의해 $\emptyset$뿐이므로 $\mathcal{F} = \emptyset$이고, 빈 집합족 단락에 의해 $\bigcup \emptyset = \emptyset \in \mathcal{K}$이다. 귀납 단계: 정수 $n \ge 0$에서 $S_n$이 참이라 하고, $\mathcal{F} \subseteq \mathcal{K}$가 원소를 $n + 1$개 갖는다고 하자. 전단사 $h : \{1, \dots, n+1\} \to \mathcal{F}$가 있으므로 $F = h(n + 1)$은 $\mathcal{F}$의 원소이다. 원소 빼기 (b)에 의해 $\mathcal{F}' = \mathcal{F} - \{F\}$는 원소를 $n$개 갖고, $\mathcal{F}' \subseteq \mathcal{F} \subseteq \mathcal{K}$이므로 $S_n$에 의해 $\bigcup \mathcal{F}' \in \mathcal{K}$이다. $F \in \mathcal{F}$이므로 $\mathcal{F} = \mathcal{F}' \cup \{F\}$이고, 집합족 (7)과 (3)에 의해 $\bigcup \mathcal{F} = \bigl(\bigcup \mathcal{F}'\bigr) \cup F$이다. $\bigcup \mathcal{F}'$와 $F$가 $\mathcal{K}$의 원소이므로 가정에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이다. 곧 $S_{n+1}$이 참이다.

(ii) 정수 $n \ge 0$마다 "$S \subseteq X$가 원소를 $n$개 갖고 $S$의 모든 점 $s$에서 $\{s\} \in \mathcal{K}$이면 $S \in \mathcal{K}$이다"를 $T_n$이라 하고 같은 귀납을 쓴다. 기초 단계: (F2)에 의해 $S = \emptyset \in \mathcal{K}$이다. 귀납 단계: $T_n$이 참이고 $S$가 원소를 $n + 1$개 가지며 $S$의 모든 점 $s$에서 $\{s\} \in \mathcal{K}$라 하자. 전단사 $h : \{1, \dots, n+1\} \to S$로 $c = h(n + 1) \in S$를 잡는다. 원소 빼기 (b)에 의해 $S - \{c\}$는 원소를 $n$개 갖고, $S - \{c\}$의 점은 $S$의 점이므로 그 한 점 집합은 $\mathcal{K}$에 든다. $T_n$에 의해 $S - \{c\} \in \mathcal{K}$이다. $c \in S$이므로 $S = (S - \{c\}) \cup \{c\}$이고, $\{c\} \in \mathcal{K}$이므로 가정에 의해 $S \in \mathcal{K}$이다. 곧 $T_{n+1}$이 참이다.

**(2).** (i) [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이므로 $\emptyset \subseteq \mathcal{U}$이고, (F2)에 의해 $\emptyset$은 유한집합이다. 빈 집합족 단락에 의해 $\bigcup \emptyset = \emptyset$이므로 $\emptyset \subseteq \bigcup \emptyset$이다. 따라서 $\emptyset \in \mathcal{K}_{\mathcal{U}}$이다.

(ii) $S \subseteq \bigcup \mathcal{F}_1$, $T \subseteq \bigcup \mathcal{F}_2$인 $\mathcal{U}$의 유한 부분족 $\mathcal{F}_1$, $\mathcal{F}_2$가 있다. [[disjoint-union-count]]의 (3)에 의해 $\mathcal{F}_1 \cup \mathcal{F}_2$는 유한집합이고, $\mathcal{U}$의 부분족이다. 집합족 (7)에 의해 $\bigcup (\mathcal{F}_1 \cup \mathcal{F}_2) = \bigl(\bigcup \mathcal{F}_1\bigr) \cup \bigl(\bigcup \mathcal{F}_2\bigr)$이고 이것은 $S \cup T$를 포함한다. 따라서 $S \cup T \in \mathcal{K}_{\mathcal{U}}$이다. 이것과 (i)이 (1)의 가정이다.

(iii) $S \subseteq \bigcup \mathcal{F}$인 유한 부분족 $\mathcal{F}$가 있으면 $R \subseteq S \subseteq \bigcup \mathcal{F}$이고, $R \subseteq S \subseteq X$이므로 $R \in \mathcal{K}_{\mathcal{U}}$이다.

(iv) $\{U\} \subseteq \mathcal{U}$이고 한 원소 집합에 의해 $\{U\}$는 유한집합이다. 집합족 (3)에 의해 $\bigcup \{U\} = U$이므로 $R \subseteq U = \bigcup \{U\}$이고, $R \subseteq U \subseteq X$이다. 따라서 $R \in \mathcal{K}_{\mathcal{U}}$이다. $R = U$로 두면 $\mathcal{U} \subseteq \mathcal{K}_{\mathcal{U}}$이다.

(v) $\mathcal{V}$가 $\mathcal{U}$의 유한 부분덮개이면 $X = \bigcup \mathcal{V}$이므로 $X \subseteq \bigcup \mathcal{V}$이고 $X \in \mathcal{K}_{\mathcal{U}}$이다. 거꾸로 $X \subseteq \bigcup \mathcal{F}$인 $\mathcal{U}$의 유한 부분족 $\mathcal{F}$가 있으면, 합집합의 정의에 의해 $\bigcup \mathcal{F} \subseteq X$이므로 $\bigcup \mathcal{F} = X$이고 $\mathcal{F}$는 유한 부분덮개이다. 뒤 문장은 이것과 콤팩트의 정의를 합친 것이다.

**(3).** (a)에서 (b). $A$가 콤팩트 부분집합이고 $\mathcal{V}$가 $A \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이라 하자. $\mathcal{C} = \mathcal{V}|_A = \{V \cap A : V \in \mathcal{V}\}$로 둔다. $\mathcal{V} \subseteq \mathcal{T}$이므로 $\mathcal{C} \subseteq \mathcal{T}|_A$이다. $\mathcal{C}$의 원소는 $A$의 부분집합이므로 $\bigcup \mathcal{C} \subseteq A$이고, $a \in A$이면 $a \in \bigcup \mathcal{V}$이므로 $a \in V$인 $V \in \mathcal{V}$가 있어 $a \in V \cap A \in \mathcal{C}$이다. 따라서 $\bigcup \mathcal{C} = A$이고 $\mathcal{C}$는 $(A, \mathcal{T}|_A)$의 열린 덮개이다. $A$가 콤팩트 부분집합이므로 $\bigcup \mathcal{C}_0 = A$인 유한 부분족 $\mathcal{C}_0 \subseteq \mathcal{C}$가 있다. 이제 $X$의 집합족 $\mathcal{K}_{\mathcal{V}}$를 생각한다. $\mathcal{C}$의 원소는 어떤 $V \in \mathcal{V}$에 대하여 $V \cap A$이고 $V \cap A \subseteq V$이므로 (2)의 (iv)에 의해 $\mathcal{K}_{\mathcal{V}}$에 든다. 곧 $\mathcal{C}_0 \subseteq \mathcal{C} \subseteq \mathcal{K}_{\mathcal{V}}$이다. $\mathcal{C}_0$을 $X$의 집합족으로 보아도 합집합은 같으므로(집합족 (10)), (2)의 (ii)와 (1)의 (i)에 의해 $A = \bigcup \mathcal{C}_0 \in \mathcal{K}_{\mathcal{V}}$이다.

(b)에서 (a). (b)를 가정하고 $\mathcal{C}$를 $(A, \mathcal{T}|_A)$의 열린 덮개라 하자. $\mathcal{C}$는 $A$의 집합족이므로 $X$의 집합족이기도 하다(집합족 (10)). 열린집합들의 집합족 $\mathcal{V} = \{V \in \mathcal{T} : V \cap A \in \mathcal{C}\}$를 둔다. $a \in A$이면 $\bigcup \mathcal{C} = A$이므로 $a \in C$인 $C \in \mathcal{C}$가 있고, $C \in \mathcal{T}|_A$이므로 $C = V \cap A$인 $V \in \mathcal{T}$가 있다. 이 $V$는 $\mathcal{V}$의 원소이고 $a \in V$이다. 따라서 $A \subseteq \bigcup \mathcal{V}$이고, (b)에 의해 $A \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. 이제
$$
\mathcal{K}' = \{S \in \mathscr{P}(X) : S \cap A \in \mathcal{K}_{\mathcal{C}}\}
$$
로 둔다. $\emptyset \cap A = \emptyset \in \mathcal{K}_{\mathcal{C}}$이므로((2)의 (i)) $\emptyset \in \mathcal{K}'$이다. $S$, $T \in \mathcal{K}'$이면 $(S \cup T) \cap A = (S \cap A) \cup (T \cap A)$이고(양쪽 모두 "$S$나 $T$에 속하고 $A$에 속하는 점" 전체이다) (2)의 (ii)에 의해 이것은 $\mathcal{K}_{\mathcal{C}}$에 들므로 $S \cup T \in \mathcal{K}'$이다. $V \in \mathcal{V}$이면 $V \cap A \in \mathcal{C}$이므로 (2)의 (iv)에 의해 $V \cap A \in \mathcal{K}_{\mathcal{C}}$, 곧 $V \in \mathcal{K}'$이다. 따라서 $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}'$이고, (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}'$이다. $A \subseteq \bigcup \mathcal{F}$이므로 $\bigl(\bigcup \mathcal{F}\bigr) \cap A = A$이고, $A \in \mathcal{K}_{\mathcal{C}}$이다. 곧 $A \subseteq \bigcup \mathcal{G}$인 $\mathcal{C}$의 유한 부분족 $\mathcal{G}$가 있다. $\mathcal{G}$의 원소는 $A$의 부분집합이므로 $\bigcup \mathcal{G} \subseteq A$이고, $\bigcup \mathcal{G} = A$이다. 따라서 $\mathcal{G}$는 $\mathcal{C}$의 유한 부분덮개이고, $(A, \mathcal{T}|_A)$는 콤팩트이다.

**(4).** 부분공간 위상 (4)에 의해 $(\mathcal{T}|_Y)|_A = \mathcal{T}|_A$이다. "$A$가 $Y$의 콤팩트 부분집합"은 $(A, (\mathcal{T}|_Y)|_A)$가 콤팩트라는 말이고, "$A$가 $X$의 콤팩트 부분집합"은 $(A, \mathcal{T}|_A)$가 콤팩트라는 말이므로 두 말은 같은 위상공간에 대한 같은 말이다.

**(5).** [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 (2)에 의해 $\mathcal{B} \subseteq \mathcal{T}$이고, 모든 $V \in \mathcal{T}$와 모든 $x \in V$에 대하여 $x \in B$, $B \subseteq V$인 $B \in \mathcal{B}$가 있다.

$A$가 콤팩트 부분집합이고 $\mathcal{D} \subseteq \mathcal{B}$이며 $A \subseteq \bigcup \mathcal{D}$이면, $\mathcal{D} \subseteq \mathcal{T}$이므로 (3)의 (a)에서 (b)로 $A \in \mathcal{K}_{\mathcal{D}}$이다.

거꾸로 뒤의 조건을 가정하고 (3)의 (b)를 보인다. $\mathcal{V}$가 $A \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이라 하고, $\mathcal{D} = \{B \in \mathcal{B} : B \subseteq V \text{인 } V \in \mathcal{V}\text{가 있다}\}$로 둔다. $a \in A$이면 $a \in V$인 $V \in \mathcal{V}$가 있고, 위의 성질로 $a \in B$, $B \subseteq V$인 $B \in \mathcal{B}$가 있어 $B \in \mathcal{D}$이다. 따라서 $A \subseteq \bigcup \mathcal{D}$이고, 가정에 의해 $A \subseteq \bigcup \mathcal{D}_0$인 $\mathcal{D}$의 유한 부분족 $\mathcal{D}_0$이 있다. $\mathcal{D}$의 원소는 $\mathcal{V}$의 어떤 원소의 부분집합이므로 (2)의 (iv)에 의해 $\mathcal{K}_{\mathcal{V}}$에 들고, $\mathcal{D}_0 \subseteq \mathcal{K}_{\mathcal{V}}$이다. (1)의 (i)에 의해 $\bigcup \mathcal{D}_0 \in \mathcal{K}_{\mathcal{V}}$이고, (2)의 (iii)에 의해 $A \in \mathcal{K}_{\mathcal{V}}$이다. (3)에 의해 $A$는 콤팩트 부분집합이다.

$A = X$이면 $A \subseteq \bigcup \mathcal{D}$는 $\bigcup \mathcal{D} = X$와 같고(합집합은 $X$의 부분집합이다), 이때 $\mathcal{D} \subseteq \mathcal{B} \subseteq \mathcal{T}$는 열린 덮개이므로 (2)의 (v)에 의해 $X \in \mathcal{K}_{\mathcal{D}}$는 $\mathcal{D}$가 유한 부분덮개를 갖는다는 말이다. 콤팩트 집합 단락의 마지막 문장과 합치면 끝 문장이 나온다.

**(6).** $A$, $B$가 콤팩트 부분집합이고 $\mathcal{V}$가 $A \cup B \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이라 하자. $A \subseteq \bigcup \mathcal{V}$, $B \subseteq \bigcup \mathcal{V}$이므로 (3)에 의해 $A \in \mathcal{K}_{\mathcal{V}}$, $B \in \mathcal{K}_{\mathcal{V}}$이고, (2)의 (ii)에 의해 $A \cup B \in \mathcal{K}_{\mathcal{V}}$이다. (3)에 의해 $A \cup B$는 콤팩트 부분집합이다. 다음으로 $\mathcal{K}$를 $X$의 콤팩트 부분집합 전체의 집합족이라 하자. 아래 (8)의 (i)에 의해 $\emptyset \in \mathcal{K}$이고, 방금 본 것에 의해 $\mathcal{K}$는 두 원소의 합집합에 닫혀 있다. $\mathcal{A} \subseteq \mathcal{K}$가 유한집합이면 (1)의 (i)에 의해 $\bigcup \mathcal{A} \in \mathcal{K}$이다. ((8)의 (i)의 증명은 (6)을 쓰지 않는다.)

**(7).** (i) $\mathcal{V} \subseteq \mathcal{T}$이고 $A \subseteq \bigcup \mathcal{V}$이면 $\mathcal{V} \subseteq \mathcal{T}'$이므로, $(X, \mathcal{T}')$에서 (3)의 (a)에서 (b)로 $A \in \mathcal{K}_{\mathcal{V}}$이다. $\mathcal{K}_{\mathcal{V}}$는 집합족 $\mathcal{V}$만으로 정해지고 위상에 따르지 않으므로, $(X, \mathcal{T})$에서 (3)의 (b)에서 (a)로 $A$는 $(X, \mathcal{T})$의 콤팩트 부분집합이다. $A = X$로 두면 끝 문장이 나온다.

(ii) [[homeomorphism|위상동형사상]]의 (3)의 (ii)에 의해 역함수 $f^{-1} : Y \to X$도 위상동형사상이므로, "$X$가 콤팩트이면 $Y$가 콤팩트이다"만 보이면 같은 것을 $f^{-1}$에 써서 거꾸로도 나온다. $X$가 콤팩트이고 $\mathcal{W}$가 $Y$의 열린 덮개라 하자. $\mathcal{U} = \{f^{-1}(W) : W \in \mathcal{W}\}$로 두면 $f$가 연속이므로 $\mathcal{U} \subseteq \mathcal{T}$이고, 역상 (2)와 (7)에 의해 $\bigcup \mathcal{U} = f^{-1}\bigl(\bigcup \mathcal{W}\bigr) = f^{-1}(Y) = X$이다. 따라서 $\bigcup \mathcal{F} = X$인 $\mathcal{U}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{K} = \{S \in \mathscr{P}(X) : f(S) \in \mathcal{K}_{\mathcal{W}}\}$로 둔다. 역상 (5)에 의해 $f(\emptyset) = \emptyset$이므로 (2)의 (i)로 $\emptyset \in \mathcal{K}$이다. 역상 (1)의 (ii)에 의해 $f(S \cup T) = f(S) \cup f(T)$이므로 (2)의 (ii)로 $\mathcal{K}$는 두 원소의 합집합에 닫혀 있다. $\mathcal{U}$의 원소는 어떤 $W \in \mathcal{W}$에 대하여 $f^{-1}(W)$이고 역상 (1)의 (vi)에 의해 $f(f^{-1}(W)) \subseteq W$이므로, (2)의 (iv)에 의해 $\mathcal{U} \subseteq \mathcal{K}$이다. (1)의 (i)에 의해 $X = \bigcup \mathcal{F} \in \mathcal{K}$, 곧 $f(X) \in \mathcal{K}_{\mathcal{W}}$이다. $f : X \to Y$는 전사이므로 $f(X) = Y$이고([[injective-surjective-bijective|전사]]의 정의와 [[image-and-preimage|상]]의 정의), (2)의 (v)에 의해 $\mathcal{W}$는 유한 부분덮개를 갖는다.

**(8).** (i) $\mathcal{U}$가 $(\emptyset, \{\emptyset\})$의 열린 덮개이면 빈 족 $\emptyset \subseteq \mathcal{U}$는 (F2)에 의해 유한집합이고 $\bigcup \emptyset = \emptyset$이므로 유한 부분덮개이다. 부분공간 위상 (7)의 (ii)에 의해 어느 위상공간에서든 $\mathcal{T}|_\emptyset = \{\emptyset\}$이므로 $\emptyset$은 콤팩트 부분집합이다.

(ii) (3)의 (b)를 보인다. $\mathcal{V}$가 $A \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이면, $A$의 모든 점 $a$에 대하여 $a \in V$인 $V \in \mathcal{V}$가 있고 $\{a\} \subseteq V$이므로 (2)의 (iv)에 의해 $\{a\} \in \mathcal{K}_{\mathcal{V}}$이다. (2)의 (ii)와 (1)의 (ii)에 의해 $A \in \mathcal{K}_{\mathcal{V}}$이다. 따라서 $A$는 콤팩트 부분집합이다. $X$가 유한집합이면 $A = X$로 둔다.

(iii) $A \subseteq X$이면 부분공간 위상 (7)의 (v)에 의해 $\mathcal{T}|_A = \{\emptyset, A\}$이다. $\mathcal{C}$가 $(A, \{\emptyset, A\})$의 열린 덮개라 하자. $A \in \mathcal{C}$이면 $\{A\}$가 한 원소 집합에 의해 유한하고 $\bigcup \{A\} = A$이므로(집합족 (3)) 유한 부분덮개이다. $A \notin \mathcal{C}$이면 $\mathcal{C} \subseteq \{\emptyset\}$이므로 $\mathcal{C}$의 원소는 모두 $\emptyset$이고 $A = \bigcup \mathcal{C} = \emptyset$이다. 이때 빈 족이 유한 부분덮개이다. 따라서 $A$는 콤팩트 부분집합이다. $A = X$로 두면 끝 문장이 나온다.

(iv) $A$가 유한집합이면 (ii)에 의해 콤팩트 부분집합이다. 거꾸로 $A$가 콤팩트 부분집합이라 하자. 부분공간 위상 (7)의 (iv)에 의해 $\mathcal{T}|_A = \mathscr{P}(A)$이다. 식으로 정한 $A$의 집합족 $\mathcal{S} = \{\{a\} : a \in A\}$는 $\mathscr{P}(A)$의 부분집합이고, 집합족 (9)에 의해 $\bigcup \mathcal{S} = A$이다($a \in A$이면 $a \in \{a\}$). 따라서 $\mathcal{S}$는 $(A, \mathscr{P}(A))$의 열린 덮개이고, $\bigcup \mathcal{F} = A$인 유한 부분족 $\mathcal{F} \subseteq \mathcal{S}$가 있다. $A$의 부분집합 가운데 유한집합인 것 전체를 $\mathcal{E}$라 하자. (F2)에 의해 $\emptyset \in \mathcal{E}$이고, [[disjoint-union-count]]의 (3)에 의해 $\mathcal{E}$는 두 원소의 합집합에 닫혀 있다. $\mathcal{S}$의 원소는 한 점 집합이므로 한 원소 집합에 의해 $\mathcal{E}$에 든다. (1)의 (i)을 $A$의 집합족 $\mathcal{E}$에 쓰면 $A = \bigcup \mathcal{F} \in \mathcal{E}$, 곧 $A$는 유한집합이다. $A = X$로 두면 둘째 문장이 나온다. [[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 (1)에 의해 $\mathbb{N}$은 유한집합이 아니므로 이산위상을 준 $\mathbb{N}$은 콤팩트가 아니다.

(v) $A \subseteq X$라 하고 (3)의 (b)를 보인다. $A = \emptyset$이면 (2)의 (i)에 의해 늘 성립한다. $A \ne \emptyset$이고 $\mathcal{V}$가 $A \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이라 하자. $A$의 점 $a$ 하나를 잡으면 $a \in V_0$인 $V_0 \in \mathcal{V}$가 있다. $V_0 \ne \emptyset$이고 $V_0 \in \mathcal{T}_{\mathrm{cof}}$이므로 $X - V_0$은 유한집합이다. $A - V_0 \subseteq X - V_0$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $A - V_0$은 유한집합이다. $A - V_0$의 점 $b$는 $A$의 점이므로 $b \in V$인 $V \in \mathcal{V}$가 있고, (2)의 (iv)에 의해 $\{b\} \in \mathcal{K}_{\mathcal{V}}$이다. (1)의 (ii)에 의해 $A - V_0 \in \mathcal{K}_{\mathcal{V}}$이고, (2)의 (iv)에 의해 $V_0 \in \mathcal{K}_{\mathcal{V}}$이다. (2)의 (ii)에 의해 $(A - V_0) \cup V_0 \in \mathcal{K}_{\mathcal{V}}$이고, 이 집합은 $A$를 포함하므로 (2)의 (iii)에 의해 $A \in \mathcal{K}_{\mathcal{V}}$이다. (3)에 의해 $A$는 콤팩트 부분집합이다.

(vi) 아래에서 실수의 순서는 [[real-order-axioms]]의 것이고 "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, 실수의 계산은 [[real-number-arithmetic]]의 것이고 구간의 기호는 [[interval]]의 것이다. $\mathcal{J}$를 [[standard-topology-on-reals]]의 (5)의 열린구간 전체의 집합족이라 하자. 그 항목의 (5)에 의해 $\mathcal{J}$는 보통 위상의 기저이므로 [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 (2)에 의해 $\mathcal{J}$의 원소는 보통 위상에서 열려 있다. 실수 $x$에 대하여 순서 성질의 (5)의 (ii)와 (2)의 (ii)에 의해 $x - 1 < x < x + 1$이므로 $x \in (x - 1, x + 1) \in \mathcal{J}$이다. 따라서 $\mathcal{J}$는 $\mathbb{R}$의 열린 덮개이다.

$\mathcal{E} = \{S \in \mathscr{P}(\mathbb{R}) : S \text{의 모든 원소 } s \text{에서 } s < c \text{인 실수 } c \text{가 있다}\}$로 둔다. $c = 0$으로 두면 $\emptyset \in \mathcal{E}$이다. $S$, $T \in \mathcal{E}$이고 $c_1$, $c_2$가 각각 그 실수이면, [[absolute-value]]의 (10)에 의해 $c_1 \le \max\{c_1, c_2\}$, $c_2 \le \max\{c_1, c_2\}$이고, 순서 성질의 (1)의 (v)에 의해 $S \cup T$의 모든 원소는 $\max\{c_1, c_2\}$보다 작으므로 $S \cup T \in \mathcal{E}$이다. 열린구간 $(a, b)$의 원소 $x$는 $x < b$이므로 $\mathcal{J} \subseteq \mathcal{E}$이다. $\mathcal{J}$의 유한 부분족 $\mathcal{F}$가 $\bigcup \mathcal{F} = \mathbb{R}$을 만족한다면 (1)의 (i)에 의해 $\mathbb{R} \in \mathcal{E}$이고, 모든 실수 $s$에서 $s < c$인 실수 $c$가 있다. $s = c$로 두면 $c < c$인데, 순서 성질의 (1)의 (i)에 의해 $c < c$이면 $c \ne c$이므로 모순이다. 따라서 $\mathcal{J}$는 유한 부분덮개를 갖지 않고, $\mathbb{R}$은 콤팩트가 아니다.

$a < b$이고 $J = (a, b)$라 하자. [[metric-subspace-topology]]의 (1)에 의해 보통 거리의 부분공간 거리 $d_J$의 거리위상은 부분공간 위상 $\mathcal{T}_d|_J$와 같으므로, [[homeomorphism-examples|위상동형의 예]]의 (3)에 의해 $(J, \mathcal{T}_d|_J)$와 $\mathbb{R}$은 위상동형이다. $J$가 콤팩트 부분집합이라면 $(J, \mathcal{T}_d|_J)$가 콤팩트이고, (7)의 (ii)에 의해 $\mathbb{R}$이 콤팩트가 되어 앞 문단과 모순이다.

(vii) [[lower-limit-topology]]의 (2)에 의해 보통 위상은 아래끝 위상 $\mathcal{T}_l$에 포함된다. $\mathbb{R}_l$이 콤팩트라면 (7)의 (i)에 의해 보통 위상을 준 $\mathbb{R}$이 콤팩트가 되어 (vi)과 모순이다.
:::

## 예시와 반례

:::example[정수 전체의 집합]
$\mathbb{Z} \subseteq \mathbb{R}$에 부분공간 위상을 주면 [[metric-subspace-topology]]의 (4)의 (i)에 의해 그 위상은 이산위상 $\mathscr{P}(\mathbb{Z})$입니다. [[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 (2)에 의해 $\mathbb{Z}$는 무한집합이므로, (8)의 (iv)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 콤팩트 부분집합이 아닙니다. 그 증명에서 본 대로 한 점 집합 $\{n\}$ 전체가 $\mathbb{Z}$의 열린 덮개이고, 그 유한 부분족의 합집합은 유한집합이어서 $\mathbb{Z}$ 전체가 될 수 없습니다. 반면 $\{0, 1, 2\}$처럼 $\mathbb{Z}$의 유한 부분집합은 (8)의 (ii)에 의해 콤팩트 부분집합입니다.
:::

:::counterexample[유한한 열린 덮개가 있는 것만으로는 모자라는 예]
$\mathbb{R}$에는 원소가 하나뿐인 열린 덮개 $\{\mathbb{R}\}$이 있습니다. 그래서 "유한한 열린 덮개가 있다"는 $\mathbb{R}$에서 참입니다. 그러나 (8)의 (vi)의 증명에서 본 열린 덮개 $\mathcal{J}$는 유한 부분덮개를 갖지 않으므로 $\mathbb{R}$은 콤팩트가 아닙니다. 콤팩트는 모든 열린 덮개 하나하나에서 유한 부분덮개를 찾을 수 있어야 한다는 조건입니다.
:::

:::example[열린집합이 유한 개뿐인 위상]
$\mathcal{T}$가 유한집합이면, 곧 열린집합이 유한 개뿐이면 $(X, \mathcal{T})$는 콤팩트입니다. 열린 덮개 $\mathcal{U}$는 $\mathcal{T}$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 유한집합이고, $\mathcal{U}$ 자신이 유한 부분덮개이기 때문입니다. 예컨대 $P = \{x \in \mathbb{R} : 0 \le x\}$라 하면 [[topology-examples]]의 (9)에 의해 $\mathcal{T} = \{\emptyset, P, \mathbb{R}\}$은 $\mathbb{R}$ 위의 위상입니다. $\mathcal{T} = (\{\emptyset\} \cup \{P\}) \cup \{\mathbb{R}\}$이고 한 원소 집합은 유한하므로, [[disjoint-union-count]]의 (3)을 두 번 쓰면 $\mathcal{T}$는 유한집합입니다. 따라서 이 위상을 준 $\mathbb{R}$은 콤팩트입니다. $X$가 무한집합이어도 위상이 유한집합이면 콤팩트가 됩니다.
:::

## 확인 질문

:::check[실수 전체의 집합 $\mathbb{R}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 주면 콤팩트인가? 보통 위상보다 섬세한가 거친가?]
(8)의 (v)에 의해 $(\mathbb{R}, \mathcal{T}_{\mathrm{cof}})$는 콤팩트입니다. 또 $\mathcal{T}_{\mathrm{cof}}$는 보통 위상보다 거칩니다. $U \in \mathcal{T}_{\mathrm{cof}}$이고 $U \ne \emptyset$이면 $\mathbb{R} - U$는 유한집합이고, [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (2)에 의해 보통 거리에서 닫힌집합입니다. [[open-set-in-metric-space]]의 닫힌집합의 정의에 의해 $\mathbb{R} - (\mathbb{R} - U) = U$는 보통 거리에서 열린집합이고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상의 원소입니다. $U = \emptyset$도 보통 위상의 원소입니다. 따라서 $\mathcal{T}_{\mathrm{cof}}$는 보통 위상에 포함됩니다. 이것은 (7)의 (i)과 어긋나지 않습니다. (7)의 (i)은 섬세한 쪽이 콤팩트이면 거친 쪽도 콤팩트라는 것이고, 여기서는 거친 쪽만 콤팩트입니다. 같은 집합이라도 위상에 따라 콤팩트일 수도 아닐 수도 있습니다.
:::

:::check[열린 덮개 $\mathcal{U}$에 $\emptyset$이 원소로 들어 있으면 $\emptyset$을 빼도 열린 덮개인가? $X = \emptyset$이면 열린 덮개는 무엇인가?]
뺀 $\mathcal{U} - \{\emptyset\}$도 열린 덮개입니다. 점 $x$가 $\bigcup \mathcal{U}$에 속하면 $x \in U$인 $U \in \mathcal{U}$가 있고, 그 $U$는 $x$를 원소로 가지므로 $\emptyset$이 아닙니다. 그래서 두 합집합이 같습니다. $X = \emptyset$이면 위상은 $\{\emptyset\}$뿐이고([[topological-space]]의 공집합 단락), 열린 덮개는 $\mathcal{U} \subseteq \{\emptyset\}$인 $\emptyset$과 $\{\emptyset\}$ 둘입니다. 둘 다 합집합이 $\emptyset = X$입니다. 빈 족 $\emptyset$은 $X = \emptyset$일 때만 열린 덮개입니다.
:::
