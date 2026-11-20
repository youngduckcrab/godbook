---
title: 부분공간 위상
title_en: Subspace Topology
aliases: [부분공간 위상, subspace topology, relative topology, 상대위상, 부분공간 위상을 준 집합, Y 에서 열린집합, open in Y, Y 에서 닫힌집합, Y 에서의 폐포]
kind: definition
field: topology
msc: ["54B05"]
level: undergrad
summary: 위상공간 X 의 부분집합 Y 에 대하여 X 의 열린집합과 Y 의 교집합 전체가 Y 위의 위상(부분공간 위상)임을 보이고, Y 에서 닫힌집합, X 에서 열리거나 닫힌 Y, 부분집합의 부분집합, 위상의 기저, 폐포와 내부를 X 의 것으로 나타낸다.
requires: [set, subset, set-operations, power-set, empty-set-is-subset, family-of-sets, adding-or-removing-an-element, topological-space, topology-examples, closed-set, basis-for-a-topology, basis-of-a-given-topology, interior-and-closure, real-order-axioms, order-properties-of-reals, interval, open-and-closed-sets-of-reals, standard-topology-on-reals]
sources:
  - ref: fuglede-basic-topology
    loc: "The subspace topology 절의 정의, 그 뒤의 Lemma 와 본문, Proposition props-subspace-top (iii), 연습문제 1.5, 1.6, ℤ 와 ℚ 의 예, content/topological-spaces.tex:351–406, content/exercises.tex:18–20"
    checked: original
    note: "정의(354–360)는 출처와 같은 집합족이다. 출처는 𝒯_Y = {Y ∩ U | U ∈ 𝒯} 로 쓰고, 이 사이트는 공간 Y 의 위상을 𝒯_Y 로 쓰는 다른 항목과 겹치지 않게 𝒯|_Y 로 쓰며 X 의 모든 집합족 𝒜 에 𝒜|_Y 를 정한다. (1)은 출처의 Lemma(361–372)이다. 출처는 각 i 마다 U_i = Y ∩ V_i 인 V_i 를 두고 Y ∩ ⋃V_i 로 보이며, 이 항목은 𝒱 = {V ∈ 𝒯 : V ∩ Y ∈ 𝒞} 라는 조건으로 정한 집합족과 집합족의 분배법칙 꼴의 계산으로 보인다. 'Y 에서 열린'이라는 말투는 출처 373줄의 'U is open in Y' 이다. (2)는 출처 props-subspace-top 의 (iii)(384, 증명 392–400)이고 같은 길로 증명한다. (3)의 (ii)(iii)은 출처 연습문제 1.5(exercises.tex:18)이고, (3)의 (i)과 증명은 이 항목이 쓴 것이다. (4)는 출처 연습문제 1.6(exercises.tex:20)이다. (5), (6)의 증명은 이 항목이 쓴 것이다. (6)의 (i)의 등식은 출처가 separation.tex:77 에서 '\\bar F ∩ Y = F' 꼴(F 가 Y 에서 닫힌 경우)로 쓴다. 확인 질문 '세 점 위의 위상에서 두 점'은 부분공간 위상이 이산위상이 되는 경우로, 출처 402–404의 'ℤ ⊆ ℝ 의 부분공간 위상은 이산위상이다'와 같은 결론이다. 반례 '열린집합이 아닌 Y'에서 Y 에서 열린 집합이 X 에서 열려 있지 않다는 것은 출처의 예 weird-opens-subspace-example(374–377, ℝ 안의 [0, ∞) 와 [0, 1))와 같은 결론이다. 예시 '두 닫힌구간의 합집합'은 출처 connectedness.tex:3 의 [−2, −1] ∪ [1, 2] 와 connectedness.tex:14 의 (−2, −1) ∪ (1, 2)(나뉘는 부분공간)와 같은 발상이다. 확인 질문 '반열린구간 안의 닫힌집합'은 위 weird-opens-subspace-example 의 닫힌집합판과 같은 발상이다. 예시와 반례의 세 점 위의 위상은 출처 연습문제 1.2(exercises.tex:13, 세 점 위의 위상을 모두 구하라)가 묻는 위상 가운데 하나이다."
  - ref: lebl-basic-analysis
    loc: "7.1절 Definition 7.1.11 과 그 아래 문단, p.261; 7.2절 Proposition 7.2.11, 7.2.12, p.267; 7.2.2절 Example 7.2.15, p.268"
    checked: original
    note: "Lebl 은 거리공간의 부분집합에 부분공간 거리를 주는 것을 부분공간이라 하고(Definition 7.1.11), 그때 'Y 가 subspace topology 를 갖는다'고 적는다(p.261). 곧 Lebl 의 subspace topology 는 부분공간 거리의 거리위상이고, 이 항목은 거리 없이 위상만으로 정의한다. 이 항목은 두 뜻이 같은 위상을 준다는 것을 다루지 않는다. Lebl Proposition 7.2.12 는 (3)의 (ii)(iii)을 부분공간 거리의 거리위상으로 진술한 것이고, Lebl 은 그 (i)(이 항목의 (3)의 (ii))을 증명하고 (ii)(이 항목의 (3)의 (iii))의 증명은 연습문제 7.2.15 로 둔다. 확인 질문 '반열린구간 안의 닫힌집합'은 Lebl Example 7.2.3(p.264)과 Proposition 7.2.11 아래의 예(p.267, [0, 1] 안의 [0, 1/2)), 그리고 Example 7.2.21(p.270, (0, ∞) 안에서 (0, 1] 이 닫혀 있고 (0, 1) 의 폐포라는 것)과 같은 발상이다. Example 7.2.21 은 (6)의 (i)이 말하는 'Y 에서의 폐포'의 한 예이기도 하다. 예시 '두 닫힌구간의 합집합'은 Lebl Example 7.2.15(p.268, x < z < y, z ∉ S 이면 (−∞, z) ∩ S 와 (z, ∞) ∩ S 가 S 를 나눈다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(Y 가 열린 경우, 한 점 공간, A = ∅)에서 거짓이던 일반 문장 4건과 좁은 화면의 식을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 위상의 조건 (i)–(iii)과 열린집합의 국소 판정은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 위상의 기저와 "위상 $\mathcal{T}$의 기저"는 [[basis-for-a-topology|위상의 기저]]와 [[basis-of-a-given-topology|주어진 위상의 기저]]의 것이다. 내부 $\operatorname{Int} A$와 폐포 $\overline{A}$는 [[interior-and-closure]]의 것이고, 이산위상과 밀착위상은 [[topology-examples]]의 것이며, 집합족과 식으로 정한 집합족은 [[family-of-sets]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $Y$는 $X$의 부분집합이다.

**집합족을 $Y$로 줄이기.** $X$의 집합족 $\mathcal{A}$에 대하여
$$
\mathcal{A}|_Y = \{A \cap Y : A \in \mathcal{A}\}
$$
로 정한다. 이것은 식으로 정한 집합족이고 원소가 모두 $Y$의 부분집합이므로 $Y$의 집합족이다. 집합 $C$가 $\mathcal{A}|_Y$의 원소인 것은 정확히 $C = A \cap Y$인 $A \in \mathcal{A}$가 있을 때이다. 이 기호는 [[adding-or-removing-an-element|함수의 제한]] $f|_X$와 모양이 같지만, $\mathcal{A}|_Y$는 집합족에만 쓰고 원소마다 $Y$와의 교집합을 취한 것을 뜻한다.

**부분공간 위상.** $\mathcal{T}|_Y = \{U \cap Y : U \in \mathcal{T}\}$를 $Y$ 위의 **부분공간 위상**(subspace topology)이라 한다. 아래 (1)에 의해 이것은 $Y$ 위의 위상이다. 위상공간 $(Y, \mathcal{T}|_Y)$를 "**부분공간 위상을 준 $Y$**"라 한다. 선형대수의 부분공간과 다른 것이므로 이 사이트는 $Y$를 그냥 "부분공간"이라 부르지 않는다.

**어느 공간에서인지.** $W \subseteq Y$가 $\mathcal{T}|_Y$의 원소일 때 "$W$는 **$Y$에서 열려 있다**"고 하고, $(Y, \mathcal{T}|_Y)$에서 닫힌집합을 "$Y$에서 닫힌집합", $(Y, \mathcal{T}|_Y)$에서의 폐포와 내부를 "$Y$에서의 폐포", "$Y$에서의 내부"라 한다. $(X, \mathcal{T})$의 것은 "$X$에서 열린", "$X$에서의 폐포"처럼 쓰고, 기호 $\overline{A}$와 $\operatorname{Int} A$는 $X$에서의 것에만 쓴다.

다음이 성립한다.

1. (위상이다) $\mathcal{T}|_Y$는 $Y$ 위의 위상이다.
2. ($Y$에서 닫힌집합) $F \subseteq Y$가 $Y$에서 닫힌집합인 것은 정확히 $F = G \cap Y$인 $X$의 닫힌집합 $G$가 있을 때이다.
3. (열린 $Y$와 닫힌 $Y$)
   - (i) $W \subseteq Y$가 $X$에서 열려 있으면 $W$는 $Y$에서 열려 있다. $F \subseteq Y$가 $X$에서 닫혀 있으면 $F$는 $Y$에서 닫혀 있다.
   - (ii) $Y$가 $X$에서 열려 있으면, $W \subseteq Y$가 $Y$에서 열려 있는 것은 정확히 $W$가 $X$에서 열려 있을 때이다. 곧 $\mathcal{T}|_Y = \{U \in \mathcal{T} : U \subseteq Y\}$이다.
   - (iii) $Y$가 $X$에서 닫혀 있으면, $F \subseteq Y$가 $Y$에서 닫혀 있는 것은 정확히 $F$가 $X$에서 닫혀 있을 때이다.
4. (부분집합의 부분집합) $A \subseteq B \subseteq X$이면 $(\mathcal{T}|_B)|_A = \mathcal{T}|_A$이다. 곧 $A$에 부분공간 위상을 준 $B$의 부분공간 위상을 주어도, $X$의 부분공간 위상을 주어도 같다.
5. (위상의 기저) $\mathcal{B}$가 위상 $\mathcal{T}$의 기저이면 $\mathcal{B}|_Y = \{B \cap Y : B \in \mathcal{B}\}$는 위상 $\mathcal{T}|_Y$의 기저이다.
6. (폐포와 내부) $A \subseteq Y$라 하자.
   - (i) $A$의 $Y$에서의 폐포는 $\overline{A} \cap Y$이다.
   - (ii) $\operatorname{Int} A$는 $A$의 $Y$에서의 내부에 포함된다. $Y$가 $X$에서 열려 있으면 둘은 같다.
7. (경계의 경우)
   - (i) $\mathcal{T}|_X = \mathcal{T}$이다.
   - (ii) $\mathcal{T}|_\emptyset = \{\emptyset\}$이다.
   - (iii) $p \in X$이면 $\mathcal{T}|_{\{p\}} = \{\emptyset, \{p\}\}$이다.
   - (iv) $\mathcal{T}$가 이산위상 $\mathscr{P}(X)$이면 $\mathcal{T}|_Y = \mathscr{P}(Y)$, 곧 $Y$ 위의 이산위상이다.
   - (v) $\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이면 $\mathcal{T}|_Y = \{\emptyset, Y\}$, 곧 $Y$ 위의 밀착위상이다.
:::

:::english
Topological spaces, open sets, the conditions (i)–(iii) for a topology and the local test for open sets are as in the entry on topological spaces; closed sets are as in the entry on closed sets; bases for a topology and "a basis for the topology $\mathcal{T}$" are as in the entries on bases. The interior $\operatorname{Int} A$ and the closure $\overline{A}$ are as in the entry on interior and closure, the discrete and indiscrete topologies are as in the entry on examples of topologies, and families of sets and families given by an expression are as in the entry on families of sets. Throughout, $(X, \mathcal{T})$ is a topological space and $Y$ is a subset of $X$.

**Cutting a family down to $Y$.** For a family $\mathcal{A}$ of subsets of $X$ we define
$$
\mathcal{A}|_Y = \{A \cap Y : A \in \mathcal{A}\}.
$$
This is a family given by an expression, and since all its members are subsets of $Y$ it is a family of subsets of $Y$. A set $C$ is a member of $\mathcal{A}|_Y$ exactly when there is an $A \in \mathcal{A}$ with $C = A \cap Y$. This notation looks like the restriction $f|_X$ of a function, but $\mathcal{A}|_Y$ is used only for families and means intersecting each member with $Y$.

**The subspace topology.** $\mathcal{T}|_Y = \{U \cap Y : U \in \mathcal{T}\}$ is called the **subspace topology** on $Y$. By (1) below it is a topology on $Y$. The topological space $(Y, \mathcal{T}|_Y)$ is called "**$Y$ with the subspace topology**". Since this differs from a subspace in linear algebra, this site does not call $Y$ simply a "subspace".

**In which space.** When $W \subseteq Y$ is a member of $\mathcal{T}|_Y$, we say that "$W$ is **open in $Y$**"; a closed set of $(Y, \mathcal{T}|_Y)$ is called "a closed set in $Y$", and the closure and interior in $(Y, \mathcal{T}|_Y)$ are called "the closure in $Y$" and "the interior in $Y$". Those of $(X, \mathcal{T})$ are described as "open in $X$", "the closure in $X$", and the symbols $\overline{A}$ and $\operatorname{Int} A$ are used only for those in $X$.

The following hold.

1. (It is a topology) $\mathcal{T}|_Y$ is a topology on $Y$.
2. (Closed sets in $Y$) $F \subseteq Y$ is a closed set in $Y$ exactly when there is a closed set $G$ of $X$ with $F = G \cap Y$.
3. (Open $Y$ and closed $Y$)
   - (i) If $W \subseteq Y$ is open in $X$, then $W$ is open in $Y$. If $F \subseteq Y$ is closed in $X$, then $F$ is closed in $Y$.
   - (ii) If $Y$ is open in $X$, then $W \subseteq Y$ is open in $Y$ exactly when $W$ is open in $X$. That is, $\mathcal{T}|_Y = \{U \in \mathcal{T} : U \subseteq Y\}$.
   - (iii) If $Y$ is closed in $X$, then $F \subseteq Y$ is closed in $Y$ exactly when $F$ is closed in $X$.
4. (A subset of a subset) If $A \subseteq B \subseteq X$, then $(\mathcal{T}|_B)|_A = \mathcal{T}|_A$. That is, giving $A$ the subspace topology of $B$ with its subspace topology is the same as giving it the subspace topology of $X$.
5. (Bases) If $\mathcal{B}$ is a basis for the topology $\mathcal{T}$, then $\mathcal{B}|_Y = \{B \cap Y : B \in \mathcal{B}\}$ is a basis for the topology $\mathcal{T}|_Y$.
6. (Closure and interior) Let $A \subseteq Y$.
   - (i) The closure of $A$ in $Y$ is $\overline{A} \cap Y$.
   - (ii) $\operatorname{Int} A$ is contained in the interior of $A$ in $Y$. If $Y$ is open in $X$, the two are equal.
7. (Extreme cases)
   - (i) $\mathcal{T}|_X = \mathcal{T}$.
   - (ii) $\mathcal{T}|_\emptyset = \{\emptyset\}$.
   - (iii) If $p \in X$, then $\mathcal{T}|_{\{p\}} = \{\emptyset, \{p\}\}$.
   - (iv) If $\mathcal{T}$ is the discrete topology $\mathscr{P}(X)$, then $\mathcal{T}|_Y = \mathscr{P}(Y)$, the discrete topology on $Y$.
   - (v) If $\mathcal{T}$ is the indiscrete topology $\{\emptyset, X\}$, then $\mathcal{T}|_Y = \{\emptyset, Y\}$, the indiscrete topology on $Y$.
:::

## 직관

큰 지도에서 한 지역 $Y$만 오려 낸다고 생각해 봅시다. 지도 위의 동네(열린집합) 하나가 오려 낸 경계에 걸쳐 있으면, 오려 낸 종이 위에는 그 동네의 $Y$ 쪽 조각만 남습니다. 부분공간 위상은 이렇게 남은 조각 $U \cap Y$ 전체를 $Y$의 열린집합으로 삼는 것입니다. 비유에서 "동네"는 $\mathcal{T}$의 원소 $U$이고, "남은 조각"은 정의의 $U \cap Y$입니다. 어떤 조각이든 원래 지도의 동네 하나에서 나와야 한다는 것이 "$C = U \cap Y$인 $U \in \mathcal{T}$가 있다"는 조건입니다.

조각은 경계에서 잘렸으므로 원래 지도에서는 동네가 아닐 수 있습니다. 그래서 같은 집합이 $Y$에서는 열려 있고 $X$에서는 열려 있지 않을 수 있고, "열려 있다"고 말할 때 어느 공간에서인지 밝혀야 합니다. $Y$ 자신이 $X$에서 열려 있으면 잘린 조각 $U \cap Y$도 두 열린집합의 교집합이므로 $X$에서 열려 있고, 이런 어긋남이 생기지 않습니다((3)의 (ii)).

닫힌집합과 폐포는 열린집합과 같은 방식으로 잘립니다((2), (6)의 (i)). 내부는 그렇지 않을 수 있습니다. $Y$ 안에서는 $Y$ 자신이 늘 열려 있으므로 $A = Y$의 $Y$에서의 내부는 $Y$이지만, $Y$에 포함되는 $X$의 열린집합은 $\emptyset$뿐일 수도 있습니다. 아래 반례가 그런 경우입니다.

(1)의 증명에서 $\mathcal{T}|_Y$의 원소마다 그것을 잘라 낸 $X$의 열린집합을 하나씩 고르지 않습니다. 같은 원소를 내는 $X$의 열린집합은 여럿일 수 있는데, 그것들을 모두 모은 집합족 $\{V \in \mathcal{T} : V \cap Y \in \mathcal{C}\}$를 쓰면 고를 필요가 없습니다.

## 성질의 증명

:::proof
집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이다. $\mathcal{T}|_Y$의 정의(식으로 정한 집합족)에 의해, 집합 $W$에 대하여 $W \in \mathcal{T}|_Y$인 것은 정확히 $W = U \cap Y$인 $U \in \mathcal{T}$가 있을 때이다. 이것을 (가)라 부른다. $U \cap Y \subseteq Y$이므로 $\mathcal{T}|_Y$의 원소는 모두 $Y$의 부분집합이다. 또 $Y \subseteq X$이므로 $Y$의 점은 모두 $X$의 점이다.

**(1).** 위상의 조건 (i)–(iii)을 $Y$ 위에서 확인한다.
조건 (i): $\emptyset \in \mathcal{T}$이고 $\emptyset \cap Y = \emptyset$이므로 (가)에 의해 $\emptyset \in \mathcal{T}|_Y$이다. $X \in \mathcal{T}$이고 $Y \subseteq X$이므로 $X \cap Y = Y$이고, (가)에 의해 $Y \in \mathcal{T}|_Y$이다.
조건 (ii): $\mathcal{C} \subseteq \mathcal{T}|_Y$라 하자. $\mathcal{T}$의 원소에 관한 조건으로 정한 부분집합
$$
\mathcal{V} = \{V \in \mathcal{T} : V \cap Y \in \mathcal{C}\}
$$
는 $\mathcal{V} \subseteq \mathcal{T}$인 집합족이므로 위상의 조건 (ii)에 의해 $\bigcup \mathcal{V} \in \mathcal{T}$이다. $\bigcup \mathcal{C} = \bigl(\bigcup \mathcal{V}\bigr) \cap Y$임을 보인다. 집합족의 (10)에 의해 $\mathcal{C}$의 합집합은 $Y$의 집합족으로 보든 $X$의 집합족으로 보든 같다. $a \in \bigcup \mathcal{C}$이면 $a \in C$인 $C \in \mathcal{C}$가 있다. $C \in \mathcal{T}|_Y$이므로 (가)에 의해 $C = V \cap Y$인 $V \in \mathcal{T}$가 있고, $V \cap Y = C \in \mathcal{C}$이므로 $V \in \mathcal{V}$이다. $a \in V$이므로 집합족의 (1)에 의해 $a \in \bigcup \mathcal{V}$이고, $a \in Y$이므로 $a \in \bigl(\bigcup \mathcal{V}\bigr) \cap Y$이다. 거꾸로 $a \in \bigl(\bigcup \mathcal{V}\bigr) \cap Y$이면 $a \in V$인 $V \in \mathcal{V}$가 있고 $a \in Y$이므로 $a \in V \cap Y$이다. $V \in \mathcal{V}$이므로 $V \cap Y \in \mathcal{C}$이고, 집합족의 (1)에 의해 $a \in \bigcup \mathcal{C}$이다. 따라서 $\bigcup \mathcal{C} = \bigl(\bigcup \mathcal{V}\bigr) \cap Y$이고, (가)에 의해 $\bigcup \mathcal{C} \in \mathcal{T}|_Y$이다. $\mathcal{C} = \emptyset$이면 $\mathcal{V} = \emptyset$이고 두 변이 모두 $\emptyset$이며, 위 논증은 따질 원소가 없어 그대로 성립한다.
조건 (iii): $C_1, C_2 \in \mathcal{T}|_Y$라 하자. (가)에 의해 $C_1 = U_1 \cap Y$, $C_2 = U_2 \cap Y$인 $U_1, U_2 \in \mathcal{T}$가 있다. 원소로 따지면 $a \in C_1 \cap C_2$인 것은 정확히 $a \in U_1$, $a \in U_2$, $a \in Y$일 때이고, 이것은 정확히 $a \in (U_1 \cap U_2) \cap Y$일 때이다. 위상의 조건 (iii)에 의해 $U_1 \cap U_2 \in \mathcal{T}$이므로 (가)에 의해 $C_1 \cap C_2 \in \mathcal{T}|_Y$이다.

**(2).** [[closed-set]]의 정의를 위상공간 $(Y, \mathcal{T}|_Y)$에 쓰면, $F \subseteq Y$가 $Y$에서 닫힌집합인 것은 정확히 $Y - F \in \mathcal{T}|_Y$일 때이다.
$F$가 $Y$에서 닫힌집합이라 하자. (가)에 의해 $Y - F = U \cap Y$인 $U \in \mathcal{T}$가 있다. $G = X - U$라 하자. [[closed-set]]의 (5)에 의해 $X - G = X - (X - U) = U \in \mathcal{T}$이므로 $G$는 $X$의 닫힌집합이다. $G \cap Y = F$임을 보인다. $y \in G \cap Y$이면 $y \in Y$이고 $y \notin U$이므로 $y \notin U \cap Y = Y - F$이다. $y \in Y$이고 $y$가 $Y - F$에 속하지 않으므로 $y \in F$이다. 거꾸로 $y \in F$이면 $F \subseteq Y$이므로 $y \in Y$이고, $y \notin Y - F = U \cap Y$이며 $y \in Y$이므로 $y \notin U$이다. $y \in X$이므로 $y \in X - U = G$이고 $y \in G \cap Y$이다.
거꾸로 $F = G \cap Y$이고 $G$가 $X$의 닫힌집합, 곧 $X - G \in \mathcal{T}$라 하자. $Y - F = (X - G) \cap Y$임을 보인다. $y \in Y - F$이면 $y \in Y$이고 $y \notin G \cap Y$이므로 $y \notin G$이다. $y \in X$이므로 $y \in (X - G) \cap Y$이다. 거꾸로 $y \in (X - G) \cap Y$이면 $y \in Y$이고 $y \notin G$이므로 $y \notin G \cap Y = F$이고, $y \in Y - F$이다. (가)에 의해 $Y - F \in \mathcal{T}|_Y$이므로 $F$는 $Y$에서 닫힌집합이다.

**(3).** (i) $W \subseteq Y$이고 $W \in \mathcal{T}$이면 $W \cap Y = W$이므로 (가)에 의해 $W \in \mathcal{T}|_Y$이다. $F \subseteq Y$가 $X$에서 닫혀 있으면 $F \cap Y = F$이므로 (2)에서 $G = F$로 두어 $F$는 $Y$에서 닫혀 있다.

(ii) $Y \in \mathcal{T}$라 하자. $W \in \mathcal{T}|_Y$이면 (가)에 의해 $W = U \cap Y$인 $U \in \mathcal{T}$가 있고, 위상의 조건 (iii)에 의해 $W \in \mathcal{T}$이다. 반대 방향은 (i)이다. 따라서 $\mathcal{T}|_Y$의 원소는 $Y$에 포함되는 $\mathcal{T}$의 원소이고, (i)에 의해 $Y$에 포함되는 $\mathcal{T}$의 원소는 $\mathcal{T}|_Y$의 원소이다. 곧 $\mathcal{T}|_Y = \{U \in \mathcal{T} : U \subseteq Y\}$이다.

(iii) $Y$가 $X$에서 닫혀 있다고 하자. $F \subseteq Y$가 $Y$에서 닫혀 있으면 (2)에 의해 $F = G \cap Y$인 $X$의 닫힌집합 $G$가 있다. 집합족의 (3)에 의해 $G \cap Y = \bigcap \{G, Y\}$이고 $\{G, Y\}$는 닫힌집합들의 집합족이므로, [[closed-set]]의 (2)에 의해 $F$는 $X$에서 닫혀 있다. 반대 방향은 (i)이다.

**(4).** (1)에 의해 $(B, \mathcal{T}|_B)$는 위상공간이고 $A \subseteq B$이므로 $(\mathcal{T}|_B)|_A$가 정해진다. $W \in (\mathcal{T}|_B)|_A$라 하자. (가)를 $(B, \mathcal{T}|_B)$에 쓰면 $W = V \cap A$인 $V \in \mathcal{T}|_B$가 있고, 다시 (가)에 의해 $V = U \cap B$인 $U \in \mathcal{T}$가 있다. $A \subseteq B$이므로 원소로 따져 $a \in (U \cap B) \cap A$인 것은 정확히 $a \in U$이고 $a \in A$일 때이다. 따라서 $W = U \cap A$이고 (가)에 의해 $W \in \mathcal{T}|_A$이다. 거꾸로 $W \in \mathcal{T}|_A$이면 $W = U \cap A$인 $U \in \mathcal{T}$가 있다. $U \cap B \in \mathcal{T}|_B$이고, 방금 본 것처럼 $(U \cap B) \cap A = U \cap A = W$이므로 $W \in (\mathcal{T}|_B)|_A$이다.

**(5).** $\mathcal{B}$가 위상 $\mathcal{T}$의 기저라 하자. (1)에 의해 $(Y, \mathcal{T}|_Y)$는 위상공간이므로 [[basis-of-a-given-topology]]의 (1)(판정)을 이 공간과 $Y$의 집합족 $\mathcal{B}|_Y$에 쓴다. [[basis-of-a-given-topology]]의 (2)에 의해 $\mathcal{B} \subseteq \mathcal{T}$이고, 모든 $U \in \mathcal{T}$와 모든 $x \in U$에 대하여 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있다.
첫째 조건: $C \in \mathcal{B}|_Y$이면 $C = B \cap Y$인 $B \in \mathcal{B}$가 있고, $B \in \mathcal{T}$이므로 (가)에 의해 $C \in \mathcal{T}|_Y$이다. 곧 $\mathcal{B}|_Y \subseteq \mathcal{T}|_Y$이다.
둘째 조건: $W \in \mathcal{T}|_Y$이고 $y \in W$라 하자. (가)에 의해 $W = U \cap Y$인 $U \in \mathcal{T}$가 있고 $y \in U$이다. 위의 사실에 의해 $y \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있다. $y \in Y$이므로 $y \in B \cap Y$이고, $B \subseteq U$이므로 $B \cap Y \subseteq U \cap Y = W$이다. $B \cap Y \in \mathcal{B}|_Y$이다.
따라서 판정에 의해 $\mathcal{B}|_Y$는 위상 $\mathcal{T}|_Y$의 기저이다.

**(6).** $A \subseteq Y$라 하자. [[interior-and-closure]]의 진술을 위상공간 $(Y, \mathcal{T}|_Y)$에 쓸 때는 "($Y$에서)"를 붙인다. $K$를 $A$의 $Y$에서의 폐포, $N$을 $A$의 $Y$에서의 내부라 하자.

(i) [[interior-and-closure]]의 (1)에 의해 $\overline{A}$는 $X$의 닫힌집합이고 $A \subseteq \overline{A}$이다. (2)에 의해 $\overline{A} \cap Y$는 $Y$에서 닫힌집합이고, $A \subseteq \overline{A}$와 $A \subseteq Y$에서 $A \subseteq \overline{A} \cap Y$이다. [[interior-and-closure]]의 (2)(가장 작은 닫힌집합, $Y$에서)에 의해 $K \subseteq \overline{A} \cap Y$이다. 거꾸로 [[interior-and-closure]]의 (1)($Y$에서)에 의해 $K$는 $Y$에서 닫힌집합이고 $A \subseteq K$이다. (2)에 의해 $K = G \cap Y$인 $X$의 닫힌집합 $G$가 있다. $A \subseteq K \subseteq G$이므로 [[interior-and-closure]]의 (2)($X$에서)에 의해 $\overline{A} \subseteq G$이고, 따라서 $\overline{A} \cap Y \subseteq G \cap Y = K$이다. 그러므로 $K = \overline{A} \cap Y$이다.

(ii) [[interior-and-closure]]의 (1)에 의해 $\operatorname{Int} A$는 $X$의 열린집합이고 $\operatorname{Int} A \subseteq A \subseteq Y$이다. (3)의 (i)에 의해 $\operatorname{Int} A$는 $Y$에서 열려 있고, [[interior-and-closure]]의 (2)(가장 큰 열린집합, $Y$에서)에 의해 $\operatorname{Int} A \subseteq N$이다. $Y$가 $X$에서 열려 있다고 하자. [[interior-and-closure]]의 (1)($Y$에서)에 의해 $N$은 $Y$에서 열려 있고 $N \subseteq A$이다. (3)의 (ii)에 의해 $N$은 $X$에서 열려 있으므로 [[interior-and-closure]]의 (2)($X$에서)에 의해 $N \subseteq \operatorname{Int} A$이다. 따라서 $N = \operatorname{Int} A$이다.

**(7).** (i) $U \in \mathcal{T}$이면 $U \subseteq X$이므로 $U \cap X = U$이다. (가)에 의해 $W \in \mathcal{T}|_X$인 것은 정확히 $W = U \cap X = U$인 $U \in \mathcal{T}$가 있을 때, 곧 $W \in \mathcal{T}$일 때이다.

(ii) 모든 $U \in \mathcal{T}$에서 $U \cap \emptyset = \emptyset$이다. $\emptyset \in \mathcal{T}$이므로 (가)에 의해 $\emptyset \in \mathcal{T}|_\emptyset$이고, $\mathcal{T}|_\emptyset$의 원소는 모두 어떤 $U$에 대한 $U \cap \emptyset = \emptyset$이다. 따라서 $\mathcal{T}|_\emptyset = \{\emptyset\}$이다.

(iii) $U \in \mathcal{T}$이면 $p \in U$일 때 $U \cap \{p\} = \{p\}$이고, $p \notin U$일 때 $U \cap \{p\} = \emptyset$이다. 따라서 $\mathcal{T}|_{\{p\}}$의 원소는 $\emptyset$이거나 $\{p\}$이다. $\emptyset \cap \{p\} = \emptyset$이고 $p \in X$이므로 $X \cap \{p\} = \{p\}$이며, $\emptyset, X \in \mathcal{T}$이므로 둘 다 $\mathcal{T}|_{\{p\}}$의 원소이다.

(iv) $\mathcal{T} = \mathscr{P}(X)$라 하자. $\mathcal{T}|_Y$의 원소는 $Y$의 부분집합이므로 $\mathcal{T}|_Y \subseteq \mathscr{P}(Y)$이다. 거꾸로 $W \subseteq Y$이면 $W \subseteq X$이므로 $W \in \mathscr{P}(X)$이고, $W \cap Y = W$이므로 (가)에 의해 $W \in \mathcal{T}|_Y$이다. [[topology-examples]]의 (1)에 의해 $\mathscr{P}(Y)$는 $Y$ 위의 이산위상이다.

(v) $\mathcal{T} = \{\emptyset, X\}$라 하자. (가)에 의해 $W \in \mathcal{T}|_Y$인 것은 정확히 $W = \emptyset \cap Y = \emptyset$이거나 $W = X \cap Y = Y$일 때이다. 따라서 $\mathcal{T}|_Y = \{\emptyset, Y\}$이고, [[topology-examples]]의 (2)에 의해 이것은 $Y$ 위의 밀착위상이다.
:::

## 예시와 반례

:::example[세 점 집합의 부분공간 위상]
$X = \{1, 2, 3\}$ 위의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$([[topology-examples]]의 (8)의 (i))와 $Y = \{2, 3\}$을 봅니다. $\mathcal{T}$의 원소마다 $Y$와의 교집합을 구하면 $\emptyset \cap Y = \emptyset$, $\{1\} \cap Y = \emptyset$, $\{1, 2\} \cap Y = \{2\}$, $X \cap Y = Y$이므로
$$
\mathcal{T}|_Y = \{\emptyset, \{2\}, \{2, 3\}\}
$$
입니다. $Y$에서 닫힌집합은 이것들의 $Y$에서의 여집합 $\{2, 3\}$, $\{3\}$, $\emptyset$입니다.

$X$에서 닫힌집합은 열린집합의 여집합 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$이고, 그 가운데 $Y$에 포함되는 것은 $\{2, 3\}$, $\{3\}$, $\emptyset$으로 $Y$에서 닫힌집합과 같습니다. $X - Y = \{1\} \in \mathcal{T}$이므로 $Y$는 $X$에서 닫혀 있고, 이것은 (3)의 (iii)이 말하는 대로입니다. 폐포도 (6)의 (i)과 맞는지 봅니다. $\{2\}$를 포함하는 $Y$에서 닫힌집합은 $\{2, 3\}$뿐이므로 $\{2\}$의 $Y$에서의 폐포는 $Y$입니다. $X$에서는 $\{2\}$를 포함하는 닫힌집합이 $X$와 $\{2, 3\}$이므로 $\overline{\{2\}} = \{2, 3\}$이고, $\overline{\{2\}} \cap Y = \{2, 3\}$입니다.
:::

:::counterexample[열린집합이 아닌 Y]
바로 위 예시의 $X$, $\mathcal{T}$, $Y = \{2, 3\}$에서 $Y$는 $\mathcal{T}$의 원소가 아니므로 $X$에서 열려 있지 않습니다. 이때 (3)의 (ii)의 결론이 깨집니다. $\{2\}$는 $Y$에서 열려 있지만 $\mathcal{T}$의 원소가 아니므로 $X$에서 열려 있지 않습니다.

(6)의 (ii)의 등호도 깨집니다. $A = Y$라 하면 (1)에 의해 $Y$는 $Y$에서 열려 있으므로 [[interior-and-closure]]의 (3)에 의해 $A$의 $Y$에서의 내부는 $Y$입니다. 그런데 $Y$에 포함되는 $\mathcal{T}$의 원소는 $\emptyset$뿐이므로 $\operatorname{Int} A = \bigcup \{\emptyset\} = \emptyset$입니다. $Y$가 열려 있지 않으면 두 내부가 다를 수 있습니다. 폐포에 대한 (6)의 (i)과 달리, 내부에서는 "$Y$에서의 내부는 $(\operatorname{Int} A) \cap Y$"가 성립하지 않을 수 있습니다. 여기서는 $(\operatorname{Int} A) \cap Y = \emptyset$이고 $Y$에서의 내부는 $Y$입니다.
:::

:::example[두 닫힌구간의 합집합]
$\mathbb{R}$에 보통 위상을 주고([[standard-topology-on-reals]]의 (5)) $Y = [0, 1] \cup [2, 3]$이라 합시다. 열린구간 $I = (-1, \tfrac{3}{2})$와 닫힌구간 $G = [-1, \tfrac{3}{2}]$을 잡으면 $Y \cap I = Y \cap G = [0, 1]$입니다. 확인해 봅니다. [[order-properties-of-reals]]의 (8)(두 수의 평균)을 $1 < 2$에 쓰면 $1 < \tfrac{3}{2} < 2$입니다. $t \in Y \cap G$이고 $t \in [2, 3]$이면 $2 \le t \le \tfrac{3}{2}$이 되어 $\tfrac{3}{2} < 2$와 함께 [[order-properties-of-reals]]의 (1)의 (i)에 어긋나므로 $t \in [0, 1]$입니다. [[interval]]의 (3)에 의해 $I \subseteq G$이므로 $Y \cap I$의 원소도 $[0, 1]$에 속합니다. 거꾸로 $t \in [0, 1]$이면 $t \in Y$이고, $-1 < 0 \le t$([[order-properties-of-reals]]의 (10))와 $t \le 1 < \tfrac{3}{2}$에서 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $-1 < t < \tfrac{3}{2}$이므로 $t \in I \subseteq G$입니다.

[[open-and-closed-sets-of-reals]]의 (1), (2)에 의해 $I$는 보통 거리에서 열린집합이고 $G$는 닫힌집합이며, [[topology-examples]]의 (4)와 [[closed-set]]의 (6)에 의해 보통 위상에서도 그렇습니다. 따라서 부분공간 위상의 정의에 의해 $[0, 1]$은 $Y$에서 열려 있고, (2)에 의해 $Y$에서 닫혀 있기도 합니다. 그러나 [[open-and-closed-sets-of-reals]]의 (4)에 의해 $[0, 1]$은 $\mathbb{R}$에서 열린집합이 아닙니다. $Y$는 두 조각으로 갈라져 있어서, 한 조각이 $Y$ 안에서는 열려 있으면서 닫혀 있습니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$ 위의 위상 $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$에서 $Y = \{1, 3\}$의 부분공간 위상은 무엇인가?]
원소마다 $Y$와의 교집합을 구하면 $\emptyset$, $\{2\} \cap Y = \emptyset$, $\{1, 2\} \cap Y = \{1\}$, $\{2, 3\} \cap Y = \{3\}$, $X \cap Y = Y$이므로 부분공간 위상은 $\{\emptyset, \{1\}, \{3\}, \{1, 3\}\} = \mathscr{P}(Y)$, 곧 $Y$ 위의 이산위상입니다. 원래 위상은 이산위상이 아니지만($\{1\}$이 원소가 아닙니다) 부분공간 위상은 이산위상일 수 있습니다. 이 위상은 [[topology-examples]]의 (8)의 (ii)입니다.
:::

:::check[$\mathbb{R}$(보통 위상)의 부분집합 $Y = \{t \in \mathbb{R} : 0 \le t < 1\}$에서 $F = \{t \in \mathbb{R} : \tfrac{1}{2} \le t < 1\}$은 $Y$에서 닫혀 있는가? $\mathbb{R}$에서는 어떤가?]
$Y$는 반열린구간 $[0, 1)$이고 $F$는 $[\tfrac{1}{2}, 1)$입니다.
$Y$에서 닫혀 있습니다. [[order-properties-of-reals]]의 (8)에 의해 $0 < \tfrac{1}{2} < 1$이고, 닫힌구간 $[\tfrac{1}{2}, 1]$에 대하여 $Y \cap [\tfrac{1}{2}, 1] = F$입니다($t$가 두 집합에 모두 속하는 것은 정확히 $\tfrac{1}{2} \le t$이고 $t < 1$일 때입니다. $\tfrac{1}{2} \le t$이면 $0 < t$이고, $t < 1$이면 $t \le 1$이기 때문입니다). [[open-and-closed-sets-of-reals]]의 (2)와 [[closed-set]]의 (6)에 의해 $[\tfrac{1}{2}, 1]$은 $\mathbb{R}$에서 닫혀 있으므로 (2)에 의해 $F$는 $Y$에서 닫혀 있습니다. 그러나 반열린구간 $F$는 [[open-and-closed-sets-of-reals]]의 (3)에 의해 $\mathbb{R}$에서 닫혀 있지 않습니다. $Y$가 $\mathbb{R}$에서 닫혀 있지 않으므로 (3)의 (iii)을 쓸 수 없는 경우입니다.
:::
