---
title: 위상공간
title_en: Topological Space
aliases: [위상, topology, topological space, 위상공간의 열린집합, open set in a topological space, 열린집합의 국소 판정]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 집합 X 의 부분집합들의 집합족 𝒯 가 공집합과 X 를 포함하고, 임의 개수의 합집합과 두 개의 교집합에 대해 닫혀 있으면 위상이라 하고, 순서쌍 (X, 𝒯) 를 위상공간, 𝒯 의 원소를 열린집합이라 한다. 유한 개의 교집합, 두 열린집합의 합집합, 열린집합의 국소 판정을 증명한다.
requires: [set, subset, set-operations, power-set, empty-set-is-subset, quantifiers, family-of-sets, finite-set, adding-or-removing-an-element, mathematical-induction]
sources:
  - ref: fuglede-basic-topology
    loc: "Definitions and first examples 절의 위상의 정의와 그 뒤 문단, content/topological-spaces.tex:7–17. Basis for a topology 절의 Lemma 의 증명 (T3) 부분, 85–91"
    checked: original
    note: "출처의 정의(7–15)는 𝒯 ⊆ 𝒫(X) 가 (T1) ∅ ∈ 𝒯 이고 X ∈ 𝒯, (T2) 첨수가 붙은 임의의 합집합 ⋃_{i∈I} U_i 가 𝒯 에 속한다, (T3) 유한 개 U_1 ∩ ⋯ ∩ U_n 이 𝒯 에 속한다를 만족할 때 위상이라 하고, (X, 𝒯) 를 위상공간, 𝒯 의 원소를 open 이라 부른다. 17줄에서 𝒯 를 줄여 'X 가 위상공간'이라 말하기도 한다고 적는다. 이 항목은 (T2)를 첨수 없이 집합족 𝒰 ⊆ 𝒯 의 ⋃𝒰 (빈 족 포함)로 쓰고, (T3)를 두 집합의 교집합으로 바꾸어 정의의 조건 (iii)으로 둔 뒤 유한 집합족의 교집합을 (2)로 증명한다. 출처는 기저가 생성하는 위상을 확인하는 Lemma 의 증명(85–91)에서 두 집합의 교집합을 먼저 보이고 n 개는 귀납으로 얻으며, 이 항목의 (2)는 그 길을 집합족과 원소의 개수에 대한 귀납으로 쓴 것이다. 출처의 번호 (T1)–(T3)은 쓰지 않고 조건을 (i)–(iii)으로 적는다. (3)의 (a)와 (c)가 같다는 것은 출처가 Interior, closure, boundary, and limit points 절에서 내부 Int Y 를 'Y 안의 열린 부분집합 전체의 합집합'으로 정의하고(541줄) 'Y 가 열린집합인 것은 정확히 Y = Int Y 일 때'가 정의에서 바로 나온다고 적는 것(551줄)과 같은 내용이다. (3)의 (b)는 출처가 content/compactness.tex:49 에서 '모든 점이 그 집합 안에 든 열린 근방을 가짐을 보이는 늘 쓰는 수법'이라고 부르는 판정이다. 반례 '두 점의 합집합이 빠진 집합족', '교집합이 빠진 집합족'과 확인 질문 '원소 둘인 집합 위의 집합족'은 출처의 예 two-point-topologies(18–28, 원소 둘인 집합의 부분집합들의 집합족 16개 가운데 넷만 위상이다)와 같은 종류의 물음이다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Proposition 7.2.6 (p.265)"
    checked: original
    note: "출처 Proposition 7.2.6 은 거리공간의 열린집합에 대해 (i) ∅ 과 X 가 열려 있다, (ii) 유한 개의 교집합이 열려 있다, (iii) 임의의 합집합이 열려 있다를 증명한다. 이 항목의 조건 (i)–(iii)과 (2)는 그 세 성질을 위상의 정의로 삼은 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예·증명 속 사실을 근거로 삼은 반례 2건과 경계 경우의 직관 문장을 고쳤다."
added: 2026-11-19
---

:::statement
집합족과 그 합집합·교집합, 빈 집합족은 [[family-of-sets]]의 것이고, $\mathscr{P}(X)$는 [[power-set]]이며, "원소를 $n$개 갖는다"와 유한집합은 [[finite-set]]의 것이다.

**위상과 위상공간.** $X$가 집합이고 $\mathcal{T}$가 $X$의 집합족, 곧 $\mathcal{T} \subseteq \mathscr{P}(X)$라 하자. $\mathcal{T}$가 $X$ 위의 **위상**(topology)인 것은 정확히 다음 세 조건이 모두 성립할 때이다.

- (i) $\emptyset \in \mathcal{T}$이고 $X \in \mathcal{T}$이다.
- (ii) $\mathcal{U} \subseteq \mathcal{T}$인 모든 집합족 $\mathcal{U}$에 대하여 $\bigcup \mathcal{U} \in \mathcal{T}$이다. $\mathcal{U} = \emptyset$인 경우도 포함한다.
- (iii) $U \in \mathcal{T}$이고 $V \in \mathcal{T}$이면 $U \cap V \in \mathcal{T}$이다.

이때 순서쌍 $(X, \mathcal{T})$를 **위상공간**(topological space)이라 하고, $X$의 원소를 **점**(point)이라 한다. $\mathcal{T}$의 원소를 $(X, \mathcal{T})$의 **열린집합**(open set)이라 하고, $U \in \mathcal{T}$를 "$U$는 $(X, \mathcal{T})$에서 열려 있다"고도 한다. $\mathcal{U} \subseteq \mathcal{T}$인 집합족, 곧 원소가 모두 열린집합인 $X$의 집합족을 **열린집합들의 집합족**이라 한다. 위상이 문맥에서 분명하면 $(X, \mathcal{T})$를 "위상공간 $X$"로 줄여 쓴다. 같은 집합 위에 위상이 여럿 있을 수 있으므로, 분명하지 않으면 "$(X, \mathcal{T})$에서 열린", "$\mathcal{T}$에서 열린"처럼 위상을 밝힌다. 거리공간 $(X, d)$에서 열린집합과도 공간을 밝혀 구별한다.

**공집합.** $\mathscr{P}(\emptyset) = \{\emptyset\}$이고, $\emptyset$ 위의 위상은 $\{\emptyset\}$ 하나뿐이다. 따라서 $(\emptyset, \{\emptyset\})$은 위상공간이다.

다음이 성립한다. 아래에서 $(X, \mathcal{T})$는 위상공간이고, 집합족의 교집합은 $X$의 집합족으로 본 것이다.

1. (두 열린집합의 합집합) $U$, $V$가 열린집합이면 $U \cup V$는 열린집합이다.
2. (유한 집합족의 교집합) $\mathcal{U}$가 열린집합들의 집합족이고 유한집합이면 $\bigcap \mathcal{U}$는 열린집합이다. $\mathcal{U} = \emptyset$이어도 성립한다($\bigcap \emptyset = X$).
3. (열린집합의 국소 판정) $U \subseteq X$에 대하여 다음 셋은 서로 같은 말이다.
   - (a) $U$는 열린집합이다.
   - (b) $U$의 모든 점 $x$에 대하여 $x \in V$이고 $V \subseteq U$인 열린집합 $V$가 있다.
   - (c) $U = \bigcup \{V \in \mathcal{T} : V \subseteq U\}$이다. 곧 $U$는 그 안에 든 열린집합 전체의 합집합이다.
:::

:::english
Families of sets with their unions and intersections, and the empty family, are as in the entry on families of sets; $\mathscr{P}(X)$ is the power set; and "has $n$ elements" and finite sets are as in the entry on finite sets.

**Topologies and topological spaces.** Let $X$ be a set and let $\mathcal{T}$ be a family of subsets of $X$, that is, $\mathcal{T} \subseteq \mathscr{P}(X)$. Then $\mathcal{T}$ is a **topology** on $X$ exactly when the following three conditions all hold.

- (i) $\emptyset \in \mathcal{T}$ and $X \in \mathcal{T}$.
- (ii) For every family $\mathcal{U}$ with $\mathcal{U} \subseteq \mathcal{T}$ we have $\bigcup \mathcal{U} \in \mathcal{T}$. This includes the case $\mathcal{U} = \emptyset$.
- (iii) If $U \in \mathcal{T}$ and $V \in \mathcal{T}$, then $U \cap V \in \mathcal{T}$.

In this case the ordered pair $(X, \mathcal{T})$ is called a **topological space**, and the elements of $X$ are called **points**. The members of $\mathcal{T}$ are called the **open sets** of $(X, \mathcal{T})$, and for $U \in \mathcal{T}$ we also say "$U$ is open in $(X, \mathcal{T})$". A family with $\mathcal{U} \subseteq \mathcal{T}$, that is, a family of subsets of $X$ all of whose members are open, is called a **family of open sets**. When the topology is clear from the context, we abbreviate $(X, \mathcal{T})$ to "the topological space $X$". Since a set may carry several topologies, when this is not clear we name the topology, as in "open in $(X, \mathcal{T})$" or "open in $\mathcal{T}$". We also name the space to distinguish this from being open in a metric space $(X, d)$.

**The empty set.** $\mathscr{P}(\emptyset) = \{\emptyset\}$, and $\{\emptyset\}$ is the only topology on $\emptyset$. Hence $(\emptyset, \{\emptyset\})$ is a topological space.

The following hold. Here $(X, \mathcal{T})$ is a topological space, and intersections of families are taken regarding them as families of subsets of $X$.

1. (Union of two open sets) If $U$ and $V$ are open, then $U \cup V$ is open.
2. (Intersection of a finite family) If $\mathcal{U}$ is a family of open sets and a finite set, then $\bigcap \mathcal{U}$ is open. This includes $\mathcal{U} = \emptyset$ ($\bigcap \emptyset = X$).
3. (A local test for open sets) For $U \subseteq X$ the following three statements are equivalent.
   - (a) $U$ is open.
   - (b) For every point $x$ of $U$ there is an open set $V$ with $x \in V$ and $V \subseteq U$.
   - (c) $U = \bigcup \{V \in \mathcal{T} : V \subseteq U\}$; that is, $U$ is the union of all open sets contained in it.
:::

## 직관

1단원에서 거리공간의 열린집합은 공으로 정의했고, [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]에서 그 열린집합들이 세 가지 성질을 가진다는 것을 증명했습니다. 공집합과 전체가 열려 있고, 몇 개를 합쳐도 열려 있고, 두 개(따라서 유한 개)의 교집합도 열려 있다는 것입니다. 위상공간은 거리를 버리고 이 세 성질만 남긴 것입니다. 어떤 부분집합을 "열린" 것으로 부를지 목록 $\mathcal{T}$로 먼저 정해 두고, 그 목록이 세 조건을 지키기만 하면 됩니다.

비유하자면 $\mathcal{T}$는 "출입이 허락된 구역의 목록"입니다. 아무 데도 아닌 곳($\emptyset$)과 전체($X$)는 목록에 있고 (조건 (i)), 허락된 구역을 몇 개 모아 하나로 터도 허락된 구역이며 (조건 (ii), 모으는 구역이 하나도 없으면 $\emptyset$), 허락된 두 구역이 겹치는 부분도 허락된 구역입니다 (조건 (iii)). 이 비유에서 "구역이 무엇인지"는 아무 제약이 없다는 점이 정의와 맞습니다. 목록에 무엇을 넣을지는 세 조건만이 정합니다.

조건 (iii)이 임의 개수가 아닌 교집합을 요구하는 것은 [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 (7)에서 보았듯 거리공간에서도 무한히 많은 열린집합의 교집합은 열려 있지 않을 수 있기 때문입니다. 조건은 두 집합의 교집합만 요구하고, 유한 개의 교집합은 (2)에서 두 개의 경우를 되풀이해 얻습니다. (3)은 "열려 있다"를 점마다 확인할 수 있다는 판정이고, 뒤의 많은 증명이 이 꼴로 열린집합임을 보입니다.

## 성질의 증명

:::proof
두 집합은 원소가 같을 때 같으므로([[set]]) 등식은 양쪽 포함으로 보인다. $A \in \mathscr{P}(X)$인 것은 정확히 $A \subseteq X$일 때이다([[power-set]]). 집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이다.

**공집합.** $S \subseteq \emptyset$이면 $S$의 원소는 $\emptyset$의 원소이어야 하는데 그런 대상은 없으므로 $S$에는 원소가 없고 $S = \emptyset$이다. 거꾸로 [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이므로 $\emptyset \subseteq \emptyset$이다. 따라서 $\mathscr{P}(\emptyset) = \{\emptyset\}$이다. $\emptyset$ 위의 위상 $\mathcal{T}$는 $\mathcal{T} \subseteq \{\emptyset\}$이고 조건 (i)에 의해 $\emptyset \in \mathcal{T}$이므로 $\mathcal{T} = \{\emptyset\}$이다. 거꾸로 $\mathcal{T} = \{\emptyset\}$이 조건 (i)–(iii)을 만족함을 보인다. (i): $X = \emptyset$이므로 $\emptyset \in \mathcal{T}$와 $X \in \mathcal{T}$는 같은 말이고 참이다. (ii): $\mathcal{U} \subseteq \{\emptyset\}$이면 $\mathcal{U}$의 원소는 모두 $\emptyset$이므로 $\bigcup \mathcal{U}$에는 원소가 없고, $\bigcup \mathcal{U} = \emptyset \in \mathcal{T}$이다. (iii): $U = V = \emptyset$뿐이고 $\emptyset \cap \emptyset = \emptyset \in \mathcal{T}$이다([[set-operations|교집합]]의 정의).

**(1).** $U$, $V$가 열린집합이면 $\{U, V\} \subseteq \mathcal{T}$이므로 조건 (ii)에 의해 $\bigcup \{U, V\} \in \mathcal{T}$이다. 집합족의 (3)에 의해 $\bigcup \{U, V\} = U \cup V$이다.

**(2).** $0$ 이상인 정수 $n$마다 다음 명제를 $S_n$이라 하자.

> $S_n$: 원소를 $n$개 갖는 열린집합들의 집합족 $\mathcal{U}$에 대하여 $\bigcap \mathcal{U} \in \mathcal{T}$이다.

[[mathematical-induction|수학적 귀납법]]을 시작점 $0$인 꼴로 쓴다. $\mathcal{U}$가 유한집합이면 [[finite-set]]의 정의에 의해 어떤 정수 $n \ge 0$에 대하여 원소를 $n$개 가지므로, 모든 $S_n$을 보이면 (2)가 나온다.

기초 단계. 원소를 $0$개 갖는 집합은 [[finite-set]]의 (F2)에 의해 $\emptyset$뿐이므로 $\mathcal{U} = \emptyset$이고, 빈 집합족 단락에 의해 $\bigcap \emptyset = X$이다. 조건 (i)에 의해 $X \in \mathcal{T}$이다.

귀납 단계. 정수 $n \ge 0$에서 $S_n$이 참이라 하고, $\mathcal{U}$가 원소를 $n + 1$개 갖는 열린집합들의 집합족이라 하자. 전단사 $h : \{1, \dots, n+1\} \to \mathcal{U}$가 있으므로 $\mathcal{U}$의 원소 $U = h(n + 1)$을 하나 잡는다. [[adding-or-removing-an-element]]의 (b)에 의해 $\mathcal{U}' = \mathcal{U} - \{U\}$는 원소를 $n$개 갖는다. $\mathcal{U}' \subseteq \mathcal{U} \subseteq \mathcal{T}$이므로 $\mathcal{U}'$도 열린집합들의 집합족이고, 귀납 가정 $S_n$에 의해 $\bigcap \mathcal{U}' \in \mathcal{T}$이다. 한편 $U \in \mathcal{U}$이므로 [[set-operations|합집합과 차집합]]의 정의에 의해 $\mathcal{U} = \mathcal{U}' \cup \{U\}$이고, $U \subseteq X$이므로 $\{U\}$는 $X$의 집합족이다. 집합족의 (7)과 (3)에 의해
$$
\bigcap \mathcal{U} = \Bigl(\bigcap \mathcal{U}'\Bigr) \cap \Bigl(\bigcap \{U\}\Bigr) = \Bigl(\bigcap \mathcal{U}'\Bigr) \cap U
$$
이다. $\bigcap \mathcal{U}'$와 $U$가 $\mathcal{T}$의 원소이므로 조건 (iii)에 의해 $\bigcap \mathcal{U} \in \mathcal{T}$이다. 곧 $S_{n+1}$이 참이다.

**(3).** $\mathcal{V} = \{V \in \mathcal{T} : V \subseteq U\}$라 하자. 집합족의 (8)을 $\mathcal{B} = \mathcal{T}$로 쓰면 $\mathcal{V}$는 $X$의 집합족이다.

(a)에서 (b): $U$가 열린집합이고 $x \in U$이면 $V = U$가 $x \in V$, $V \subseteq U$를 만족하는 열린집합이다.

(b)에서 (c): (b)는 "$U$의 모든 점 $x$에 대하여 $x \in V$이고 $V \subseteq U$인 $V \in \mathcal{T}$가 있다"는 말이므로, 집합족의 (8)의 (ii)를 $\mathcal{B} = \mathcal{T}$로 쓰면 $U = \bigcup \mathcal{V}$이다.

(c)에서 (a): $\mathcal{V}$의 원소는 $\mathcal{T}$의 원소이므로 $\mathcal{V} \subseteq \mathcal{T}$이고, 조건 (ii)에 의해 $\bigcup \mathcal{V} \in \mathcal{T}$이다. (c)에 의해 $U = \bigcup \mathcal{V}$이므로 $U$는 열린집합이다.
:::

## 예시와 반례

:::example[한 점 위의 위상]
$X = \{p\}$라 합시다. $X$의 부분집합 $S$는 $p \in S$이면 $S = \{p\}$이고 $p \notin S$이면 원소가 없어 $S = \emptyset$이므로 $\mathscr{P}(X) = \{\emptyset, X\}$입니다. 조건 (i)에 의해 위상은 $\emptyset$과 $X$를 모두 포함해야 하므로, $X$ 위의 위상이 될 수 있는 것은 $\mathcal{T} = \{\emptyset, X\}$뿐입니다. 이것이 위상인지 확인합니다. (i)은 바로 보입니다. (ii): $\mathcal{U} \subseteq \mathcal{T}$이면 $X \in \mathcal{U}$일 때 집합족의 (1)에 의해 $X \subseteq \bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X$이고, $X \notin \mathcal{U}$일 때 $\mathcal{U} \subseteq \{\emptyset\}$이므로 $\bigcup \mathcal{U} = \emptyset$입니다. (iii): $\emptyset$과 무엇의 교집합은 $\emptyset$이고 $X \cap X = X$입니다. 따라서 원소가 하나인 집합 위의 위상은 꼭 하나입니다.
:::

:::counterexample[합집합이 빠진 집합족]
$X = \{1, 2, 3\}$이고 $\mathcal{S} = \{\emptyset, \{1\}, \{2\}, X\}$라 합시다. 조건 (i)은 성립합니다. 조건 (iii)도 성립합니다. 서로 다른 두 원소의 교집합은 $\{1\} \cap \{2\} = \emptyset$이거나, $\emptyset$과의 교집합 $\emptyset$이거나, $X$와의 교집합(상대 원소 그대로)이고, 같은 원소끼리의 교집합은 그 원소이므로 모두 $\mathcal{S}$에 듭니다. 그러나 $\mathcal{U} = \{\{1\}, \{2\}\} \subseteq \mathcal{S}$이면 집합족의 (3)에 의해 $\bigcup \mathcal{U} = \{1, 2\}$이고 $\{1, 2\} \notin \mathcal{S}$이므로 조건 (ii)가 깨집니다. $\mathcal{S}$는 위상이 아닙니다.
:::

:::counterexample[교집합이 빠진 집합족]
$X = \{1, 2, 3\}$이고 $\mathcal{S}' = \{\emptyset, \{1, 2\}, \{2, 3\}, X\}$라 합시다. 조건 (i)은 성립합니다. 조건 (ii)도 성립합니다. $\mathcal{U} \subseteq \mathcal{S}'$라 할 때, $X \in \mathcal{U}$이거나 $\{1, 2\}$와 $\{2, 3\}$이 둘 다 $\mathcal{U}$에 있으면 집합족의 (1)과 (3)에 의해 $\bigcup \mathcal{U}$는 $X$ 또는 $\{1, 2\} \cup \{2, 3\} = X$를 포함하므로 $X$입니다. 그렇지 않고 $\{1, 2\} \in \mathcal{U}$이면 $\mathcal{U}$의 원소는 $\emptyset$이나 $\{1, 2\}$이므로 집합족의 (1)과 (2)의 (i)에 의해 $\bigcup \mathcal{U} = \{1, 2\}$이고, $\{2, 3\}$일 때도 같은 방식으로 $\{2, 3\}$이며, 남은 경우 $\mathcal{U} \subseteq \{\emptyset\}$이고 $\bigcup \mathcal{U} = \emptyset$입니다. 그러나 $\{1, 2\} \cap \{2, 3\} = \{2\} \notin \mathcal{S}'$이므로 조건 (iii)이 깨집니다. $\mathcal{S}'$는 위상이 아닙니다.
:::

## 확인 질문

:::check[조건 (ii)를 빈 집합족 $\mathcal{U} = \emptyset$에 쓰면 무엇을 얻는가? 그것으로 조건 (i)을 뺄 수 있는가?]
$\emptyset \subseteq \mathcal{T}$이므로([[empty-set-is-subset|공집합은 모든 집합의 부분집합]]) 조건 (ii)에서 $\bigcup \emptyset = \emptyset \in \mathcal{T}$를 얻습니다. 따라서 (i)의 앞 절반 $\emptyset \in \mathcal{T}$는 (ii)에서 나옵니다. 그러나 $X \in \mathcal{T}$는 나오지 않습니다. $X = \{1\}$ 위의 집합족 $\{\emptyset\}$은 (ii)와 (iii)을 만족하지만(합집합과 교집합이 모두 $\emptyset$입니다) $X$를 원소로 갖지 않습니다. 그래서 (i)을 뺄 수 없습니다.
:::

:::check[$X = \{a, b\}$ ($a \ne b$) 위의 집합족 $\{\{a\}, X\}$는 위상인가?]
아닙니다. $\emptyset$이 원소가 아니므로 조건 (i)이 깨집니다. 위 질문에서 보았듯 조건 (ii)를 빈 집합족에 쓴 것도 깨집니다.
:::
