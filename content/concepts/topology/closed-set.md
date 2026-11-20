---
title: 위상공간의 닫힌집합
title_en: Closed Sets in a Topological Space
aliases: [닫힌집합, closed set, 닫혀 있다, 닫힌집합의 교집합, 닫힌집합의 합집합, closed set in a topological space]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 부분집합의 여집합이 열린집합이면 닫힌집합이라 한다. 공집합과 전체, 닫힌집합들의 교집합, 두 개와 유한 개의 합집합이 닫혀 있음을 증명하고, 거리위상에서는 거리공간의 닫힌집합과 같은 말이며, 밀착위상에서는 한 점 집합이 열려 있지도 닫혀 있지도 않을 수 있음을 보인다.
requires: [set, subset, set-operations, de-morgan-laws-sets, complement, family-of-sets, finite-set, adding-or-removing-an-element, mathematical-induction, topological-space, topology-examples, metric-space-examples, open-set-in-metric-space, open-sets-of-a-metric-space]
sources:
  - ref: fuglede-basic-topology
    loc: "Definitions and first examples 절의 닫힌집합의 정의와 Proposition prop-closed, content/topological-spaces.tex:45–56"
    checked: original
    note: "정의는 출처(45–47, 'A ⊆ X 는 Aᶜ 가 열려 있으면 closed')와 같다. (1)–(4)는 출처 Proposition prop-closed 의 (T1′) ∅ 과 X 가 닫혀 있다, (T2′) 첨수가 붙은 임의의 교집합 ⋂_{i∈I} C_i 가 닫혀 있다, (T3′) 유한 개 C_1 ∪ ⋯ ∪ C_n 이 닫혀 있다에 해당하고, 출처는 이 명제를 증명 없이 적는다. 이 항목은 (T2′)를 집합족 꼴(빈 족 포함)로, (T3′)를 두 집합의 경우 (3)과 유한 집합족의 경우 (4)로 나누어 쓰고, 집합족의 드 모르간 법칙과 원소의 개수에 대한 귀납으로 증명한다. 출처의 번호 (T1′)–(T3′)은 쓰지 않는다. 예시 '세 점 위의 위상의 닫힌집합'의 위상은 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 것이다. 확인 질문 '{∅, {a}, X} 에서 {b}'의 위상은 출처의 예 two-point-topologies 의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Definition 7.2.4 (p.264), Example 7.2.7, Proposition 7.2.8 (p.266); 7.2.4절 연습문제 7.2.1 (p.272)"
    checked: original
    note: "(1)–(4)는 출처 Proposition 7.2.8(거리공간의 닫힌집합에 대해 ∅ 과 X, 임의의 교집합, 유한 개의 합집합)과 같은 꼴이고, 출처는 그 증명을 연습문제 7.2.1 로 두며 '여집합에 Proposition 7.2.6 을 쓰라'고 힌트를 준다. 이 항목의 증명은 그 힌트의 길을 위상의 조건으로 쓴 것이다. (6)이 가리키는 거리공간의 닫힌집합은 출처 Definition 7.2.4 의 것이다. 반례 '닫힌집합 무한히 많은 것의 합집합'은 출처 Example 7.2.7(p.266, ⋂(−1/n, 1/n) = {0} 은 열려 있지 않다)과 같은 발상을 여집합으로 옮긴 것이고, 1단원 open-sets-of-a-metric-space 의 (7)의 집합족을 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예·증명 속 사실을 근거로 삼은 반례 2건과 경계 경우의 직관 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 조건 (i)–(iii)은 그 항목의 위상의 조건이다. 이산위상, 밀착위상, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이고, 집합족은 [[family-of-sets]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

**닫힌집합.** $X$의 부분집합 $F$가 $(X, \mathcal{T})$에서 **닫힌집합**(closed set)인 것은 정확히 차집합 $X - F$가 $(X, \mathcal{T})$에서 열린집합, 곧 $X - F \in \mathcal{T}$일 때이다. 이것을 "$F$는 $(X, \mathcal{T})$에서 닫혀 있다"고도 한다. 원소가 모두 닫힌집합인 $X$의 집합족을 **닫힌집합들의 집합족**이라 한다. 열린집합과 같이, 위상이 문맥에서 분명하지 않으면 "$(X, \mathcal{T})$에서 닫힌", "$\mathcal{T}$에서 닫힌"처럼 위상을 밝힌다.

다음이 성립한다. 집합족의 교집합은 $X$의 집합족으로 본 것이다.

1. $\emptyset$과 $X$는 닫힌집합이다.
2. (교집합) $\mathcal{C}$가 닫힌집합들의 집합족이면 $\bigcap \mathcal{C}$는 닫힌집합이다. $\mathcal{C} = \emptyset$이어도 성립한다($\bigcap \emptyset = X$).
3. (두 집합의 합집합) $E$, $F$가 닫힌집합이면 $E \cup F$는 닫힌집합이다.
4. (유한 집합족의 합집합) $\mathcal{C}$가 닫힌집합들의 집합족이고 유한집합이면 $\bigcup \mathcal{C}$는 닫힌집합이다. $\mathcal{C} = \emptyset$이어도 성립한다($\bigcup \emptyset = \emptyset$).
5. (여집합) $U \subseteq X$이면 $X - (X - U) = U$이다. 따라서 $U$가 열린집합인 것은 정확히 $X - U$가 닫힌집합일 때이다.
6. (거리위상의 닫힌집합) $(X, d)$가 거리공간이고 $X$에 거리위상 $\mathcal{T}_d$를 주면, $F \subseteq X$가 $(X, \mathcal{T}_d)$에서 닫힌집합인 것은 정확히 $F$가 $(X, d)$에서 닫힌집합일 때이다.
7. (열린집합도 닫힌집합도 아닌 한 점 집합) $X$에 서로 다른 두 점 $a$, $b$가 있고 $\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이면 $\{a\}$는 열린집합도 아니고 닫힌집합도 아니다. 이산위상에서는 $X$의 모든 부분집합이 열린집합이면서 닫힌집합이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, and conditions (i)–(iii) are the conditions for a topology given there. The discrete topology, the indiscrete topology and the metric topology $\mathcal{T}_d$ are as in the entry on examples of topologies, and families of sets are as in the entry on families of sets. Throughout, $(X, \mathcal{T})$ is a topological space.

**Closed sets.** A subset $F$ of $X$ is a **closed set** in $(X, \mathcal{T})$ exactly when the difference $X - F$ is open in $(X, \mathcal{T})$, that is, $X - F \in \mathcal{T}$. We also say "$F$ is closed in $(X, \mathcal{T})$". A family of subsets of $X$ all of whose members are closed is called a **family of closed sets**. As for open sets, when the topology is not clear from the context we name it, as in "closed in $(X, \mathcal{T})$" or "closed in $\mathcal{T}$".

The following hold. Intersections of families are taken regarding them as families of subsets of $X$.

1. $\emptyset$ and $X$ are closed.
2. (Intersections) If $\mathcal{C}$ is a family of closed sets, then $\bigcap \mathcal{C}$ is closed. This includes $\mathcal{C} = \emptyset$ ($\bigcap \emptyset = X$).
3. (Union of two sets) If $E$ and $F$ are closed, then $E \cup F$ is closed.
4. (Union of a finite family) If $\mathcal{C}$ is a family of closed sets and a finite set, then $\bigcup \mathcal{C}$ is closed. This includes $\mathcal{C} = \emptyset$ ($\bigcup \emptyset = \emptyset$).
5. (Complements) If $U \subseteq X$, then $X - (X - U) = U$. Hence $U$ is open exactly when $X - U$ is closed.
6. (Closed sets of a metric topology) If $(X, d)$ is a metric space and $X$ carries the metric topology $\mathcal{T}_d$, then $F \subseteq X$ is closed in $(X, \mathcal{T}_d)$ exactly when $F$ is closed in $(X, d)$.
7. (A one-point set that is neither open nor closed) If $X$ has two distinct points $a$ and $b$ and $\mathcal{T}$ is the indiscrete topology $\{\emptyset, X\}$, then $\{a\}$ is neither open nor closed. In the discrete topology every subset of $X$ is both open and closed.
:::

## 직관

닫힌집합은 1단원의 거리공간에서처럼 여집합으로 정합니다. 위상공간에는 공이 없으므로 "밖의 점마다 닿지 않는 작은 공이 있다"는 그림은 쓸 수 없고, 정의는 "여집합이 열린집합 목록에 있다" 한 줄뿐입니다. (6)은 거리위상에서는 이 정의가 1단원의 닫힌집합과 정확히 같다는 것이어서, 두 정의가 따로 놀지 않습니다.

(1)–(4)는 위상의 조건 (i)–(iii)을 여집합으로 뒤집은 것입니다. 드 모르간 법칙은 합집합과 교집합을 맞바꾸므로 "열린집합은 몇 개든 합쳐도 열려 있다"가 "닫힌집합은 몇 개든 교집합을 취해도 닫혀 있다"로, "두 열린집합의 교집합"이 "두 닫힌집합의 합집합"으로 바뀝니다. 빈 집합족도 짝이 맞습니다. 빈 족의 합집합 $\emptyset$이 열려 있다는 것은 빈 족의 교집합 $X$가 닫혀 있다는 것과 짝입니다.

"열린"과 "닫힌"은 반대말이 아닙니다. 이산위상에서는 모든 집합이 둘 다이고, 밀착위상에서는 공집합도 전체도 아닌 집합이 어느 쪽도 아닙니다((7)). 1단원에서 거리공간의 한 점 집합은 늘 닫혀 있었는데([[open-set-in-metric-space|거리공간의 열린집합과 닫힌집합]]의 (5)), 위상공간에서는 그렇지 않을 수 있습니다.

## 성질의 증명

:::proof
집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이다.

**(5).** $U \subseteq X$라 하자. $x \in X - (X - U)$이면 $x \in X$이고 $x \notin X - U$이다. $x \in X$이므로 $x \notin U$라면 $x \in X - U$가 되어 어긋나고, 따라서 $x \in U$이다. 거꾸로 $x \in U$이면 $U \subseteq X$이므로 $x \in X$이고, $x \in U$이므로 $x \notin X - U$이다. 곧 $x \in X - (X - U)$이다([[set-operations|차집합]]의 정의). 두 집합은 원소가 같으므로([[set]]) $X - (X - U) = U$이다. $X - U \subseteq X$이므로 닫힌집합의 정의에 의해 $X - U$가 닫힌집합인 것은 정확히 $X - (X - U) = U$가 열린집합일 때이다.

**(1).** [[set-operations|차집합]]의 정의에 의해 $X - \emptyset = X$이고 $X - X = \emptyset$이다. 조건 (i)에 의해 둘 다 $\mathcal{T}$의 원소이므로 $\emptyset$과 $X$는 닫힌집합이다.

**(2).** $\mathcal{D} = \{X - C : C \in \mathcal{C}\}$라 하자(식으로 정한 집합족). $\mathcal{D}$의 원소는 어떤 $C \in \mathcal{C}$에 대한 $X - C$이고, $C$가 닫힌집합이므로 $X - C \in \mathcal{T}$이다. 곧 $\mathcal{D} \subseteq \mathcal{T}$이고 조건 (ii)에 의해 $\bigcup \mathcal{D} \in \mathcal{T}$이다. 집합족의 (5)(드 모르간 법칙)에 의해 $X - \bigcap \mathcal{C} = \bigcup \mathcal{D}$이므로 $X - \bigcap \mathcal{C} \in \mathcal{T}$이고, $\bigcap \mathcal{C}$는 닫힌집합이다. $\mathcal{C} = \emptyset$이면 $\mathcal{D} = \emptyset$이고 위 논증은 $X - X = \emptyset = \bigcup \emptyset$에서 그대로 성립한다.

**(3).** [[de-morgan-laws-sets|드 모르간 법칙]]의 2를 전체집합 $X$에서 쓰면([[complement|여집합]] $A^c = X - A$) $X - (E \cup F) = (X - E) \cap (X - F)$이다. $X - E$와 $X - F$는 닫힌집합의 정의에 의해 $\mathcal{T}$의 원소이므로 조건 (iii)에 의해 그 교집합은 $\mathcal{T}$의 원소이다. 따라서 $E \cup F$는 닫힌집합이다.

**(4).** $0$ 이상인 정수 $n$마다 다음 명제를 $S_n$이라 하자.

> $S_n$: 원소를 $n$개 갖는 닫힌집합들의 집합족 $\mathcal{C}$에 대하여 $\bigcup \mathcal{C}$는 닫힌집합이다.

[[mathematical-induction|수학적 귀납법]]을 시작점 $0$인 꼴로 쓴다. $\mathcal{C}$가 유한집합이면 [[finite-set]]의 정의에 의해 어떤 정수 $n \ge 0$에 대하여 원소를 $n$개 가지므로, 모든 $S_n$을 보이면 (4)가 나온다.

기초 단계. 원소를 $0$개 갖는 집합은 [[finite-set]]의 (F2)에 의해 $\emptyset$뿐이고, 빈 집합족 단락에 의해 $\bigcup \emptyset = \emptyset$이다. (1)에 의해 이것은 닫힌집합이다.

귀납 단계. 정수 $n \ge 0$에서 $S_n$이 참이라 하고, $\mathcal{C}$가 원소를 $n + 1$개 갖는 닫힌집합들의 집합족이라 하자. 전단사 $h : \{1, \dots, n+1\} \to \mathcal{C}$가 있으므로 $\mathcal{C}$의 원소 $C = h(n + 1)$을 하나 잡는다. [[adding-or-removing-an-element]]의 (b)에 의해 $\mathcal{C}' = \mathcal{C} - \{C\}$는 원소를 $n$개 갖고, $\mathcal{C}' \subseteq \mathcal{C}$이므로 닫힌집합들의 집합족이다. 귀납 가정에 의해 $\bigcup \mathcal{C}'$는 닫힌집합이다. $C \in \mathcal{C}$이므로 $\mathcal{C} = \mathcal{C}' \cup \{C\}$이고([[set-operations|합집합과 차집합]]의 정의), $C \subseteq X$이므로 $\{C\}$는 $X$의 집합족이다. 집합족의 (7)과 (3)에 의해 $\bigcup \mathcal{C} = \bigl(\bigcup \mathcal{C}'\bigr) \cup C$이고, (3)에 의해 이것은 닫힌집합이다. 곧 $S_{n+1}$이 참이다.

**(6).** $F \subseteq X$이면 $X - F \subseteq X$이다. [[topology-examples]]의 (4)에 의해 $X - F \in \mathcal{T}_d$인 것은 정확히 $X - F$가 $(X, d)$에서 열린집합일 때이다. 왼쪽은 $F$가 $(X, \mathcal{T}_d)$에서 닫힌집합이라는 것(이 항목의 정의)이고, 오른쪽은 $F$가 $(X, d)$에서 닫힌집합이라는 것([[open-set-in-metric-space]]의 정의)이다.

**(7).** [[topology-examples]]의 (3)에 의해 $\{a\} \notin \{\emptyset, X\}$이므로 $\{a\}$는 열린집합이 아니다. $X - \{a\}$는 $b$를 원소로 가지므로($b \in X$, $b \ne a$) $\emptyset$이 아니고, $a$를 원소로 갖지 않으므로 $X$가 아니다. 곧 $X - \{a\} \notin \{\emptyset, X\}$이고 $\{a\}$는 닫힌집합이 아니다. 이산위상 $\mathscr{P}(X)$에서는 [[topology-examples]]의 (1)에 의해 모든 부분집합이 열린집합이다. $F \subseteq X$이면 $X - F \subseteq X$이므로 $X - F$도 열린집합이고, $F$는 닫힌집합이다.
:::

## 예시와 반례

:::example[세 점 위의 위상의 닫힌집합]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. 닫힌집합은 열린집합의 여집합이므로 (5)에 의해 정확히 $X - \emptyset = X$, $X - \{1\} = \{2, 3\}$, $X - \{1, 2\} = \{3\}$, $X - X = \emptyset$의 넷입니다. 따라서

- $\{1\}$은 열린집합이지만 닫힌집합이 아닙니다($\{1\}$은 위 넷 가운데 없습니다).
- $\{2, 3\}$과 $\{3\}$은 닫힌집합이지만 열린집합이 아닙니다.
- $\{2\}$는 열린집합도 닫힌집합도 아닙니다.
- $\emptyset$과 $X$만 열린집합이면서 닫힌집합입니다.

닫힌집합 넷 $X \supseteq \{2, 3\} \supseteq \{3\} \supseteq \emptyset$은 한 줄로 늘어서 있어서, (2)와 (3)이 말하는 대로 어느 둘의 교집합과 합집합도 다시 이 넷 가운데 하나입니다.
:::

:::counterexample[닫힌집합 무한히 많은 것의 합집합은 닫혀 있지 않을 수 있다]
(4)에서 "유한집합이면"을 뺄 수 없습니다. $\mathbb{R}$에 보통 거리 $d$([[metric-space-examples]]의 (1))의 거리위상을 주고, [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 (7)처럼 자연수 $n$마다 $F(n) = \{x \in \mathbb{R} : -1/n < x < 1\}$, $\mathcal{A} = \{F(n) : n \in \mathbb{N}\}$이라 합시다. 그 (7)에 의해 각 $F(n)$은 $(\mathbb{R}, d)$에서 열린집합이고 $\bigcap \mathcal{A} = \{x \in \mathbb{R} : 0 \le x < 1\}$은 열린집합이 아닙니다.

$\mathcal{C} = \{\mathbb{R} - A : A \in \mathcal{A}\}$라 하면, $\mathcal{C}$의 원소는 어떤 $F(n)$의 여집합 $\mathbb{R} - F(n)$이고, $F(n)$은 [[topology-examples]]의 (4)에 의해 거리위상에서 열린집합이므로 이 항목의 (5)에 의해 $\mathbb{R} - F(n)$은 거리위상에서 닫힌집합입니다. [[family-of-sets]]의 (5)에 의해 $\bigcup \mathcal{C} = \mathbb{R} - \bigcap \mathcal{A}$입니다. 이것이 닫힌집합이라면 (5)에 의해 $\mathbb{R} - \bigcup \mathcal{C} = \mathbb{R} - (\mathbb{R} - \bigcap \mathcal{A}) = \bigcap \mathcal{A}$가 거리위상에서, 따라서 [[topology-examples]]의 (4)에 의해 $(\mathbb{R}, d)$에서 열린집합이 되어 앞의 것과 어긋납니다. 따라서 닫힌집합들의 집합족 $\mathcal{C}$의 합집합은 닫힌집합이 아닙니다.
:::

## 확인 질문

:::check[밀착위상 $\{\emptyset, X\}$에서 닫힌집합은 무엇인가?]
$F \subseteq X$가 닫힌집합인 것은 $X - F$가 $\emptyset$이거나 $X$일 때입니다. $X - F = \emptyset$이면 (5)에 의해 $F = X - (X - F) = X - \emptyset = X$이고, $X - F = X$이면 $F = X - X = \emptyset$입니다. 따라서 닫힌집합은 $\emptyset$과 $X$뿐이고, 열린집합과 같습니다.
:::

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 $\{b\}$는 닫힌집합인가?]
그렇습니다. $X - \{b\} = \{a\}$는 열린집합이기 때문입니다. 한편 $\{b\}$ 자신은 이 위상의 원소가 아니므로 열린집합이 아닙니다.
:::
