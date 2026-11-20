---
title: 위상의 예
title_en: Examples of Topologies
aliases: [이산위상, discrete topology, 밀착위상, indiscrete topology, trivial topology, 자명 위상, 거리위상, metric topology, 원소 둘인 집합 위의 위상]
kind: proposition
field: topology
msc: ["54A05", "54E35"]
level: undergrad
summary: 모든 부분집합의 집합족(이산위상)과 공집합과 전체만의 집합족(밀착위상)이 위상이고, 거리공간의 열린집합 전체가 위상(거리위상)이며, 이산 거리의 거리위상은 이산위상이고, 점이 둘 이상이면 밀착위상은 어떤 거리의 거리위상도 아님을 증명한다. 원소 둘인 집합 위의 위상을 모두 구하고 세 점 위의 위상의 예를 든다.
requires: [set, subset, empty-set-is-subset, set-operations, power-set, family-of-sets, topological-space, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-ball-is-open, open-sets-of-a-metric-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Definitions and first examples 절의 예 two-point-topologies 와 그 다음 예 (content/topological-spaces.tex:18–36), Metric spaces 절의 metric topology 문단, Remark remark-def-open-balls, 예 discrete-metric (207, 235–261), 연습문제 1.2 (content/exercises.tex:13)"
    checked: original
    note: "(1), (2)는 출처의 예(30–36)와 같다. 출처는 𝒫(X) 를 discrete topology, {∅, X} 를 trivial topology 라 부르고 둘이 위상이라는 것을 증명하지 않는다. 이 사이트는 trivial topology 를 '밀착위상'이라 부른다. (7)은 출처의 예 two-point-topologies(18–28)를 명제로 올린 것이다. 출처는 네 집합족 𝒯₁–𝒯₄ 가 위상이고 𝒫(𝒫(X)) 의 나머지 12개는 위상이 아니라고 적고 증명하지 않는다. 이 항목은 원소의 개수를 세지 않고 '위상은 정확히 넷'으로 진술해 증명한다. (4)의 거리위상은 출처가 열린 공 전체를 기저로 하여 생성한 위상(metric topology, 207)이고, 출처의 Remark(235–244)는 그 위상의 열린집합이 정확히 '모든 x ∈ U 에 B_d(x, r) ⊆ U 인 r > 0 이 있는' U 라고 적는다. 이 항목은 그 조건을 만족하는 집합 전체로 거리위상을 정하고(1단원의 정의), 공 전체가 기저라는 것은 이 항목에서 다루지 않는다. (5)는 출처의 예 discrete-metric(248–261)이 적는 것과 같다. (8)의 두 위상은 출처 연습문제 1.2(X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 것이고, 출처 Proposition poset-top-def(content/topological-spaces.tex:456–472)의 순서집합 위상과 같은 꼴이다((i)은 3 ≤ 2 ≤ 1 인 순서, (ii)는 1 과 3 이 2 보다 작은 순서에서 P_a = {x : a ≤ x} 들이 생성한다). (3)의 뒤 문장은 출처가 content/homeomorphisms.tex:63 에서 X = {a, b} 에 밀착위상과 이산위상을 주면 서로 다른 위상공간이 된다고 적는 것과 같은 대상이다. 예시 '원소 둘인 집합의 세 위상의 열린집합'은 출처의 예 two-point-topologies 의 𝒯₁–𝒯₄ 와 같은 대상이다. 확인 질문 '이산위상과 밀착위상이 같은 위상이 되는 X'는 같은 homeomorphisms.tex:63 의 문장과 같은 대상을 묻는다. (6)의 앞 문장과 반례 '점이 둘 이상인 밀착위상은 거리위상이 아니다'의 결론은 출처의 예(content/topological-spaces.tex:669, 점이 둘 이상인 집합의 밀착위상은 T₀ 가 아니다)와 예(685)·연습문제 1.10(content/exercises.tex:32, 거리공간은 하우스도르프이다)을 합쳐 얻는 결론과 같다. 이 항목은 하우스도르프 대신 거리공간의 한 점 집합이 닫혀 있다는 것으로 보인다."
  - ref: lebl-basic-analysis
    loc: "7.1절, Example 7.1.7 (p.259), Definition 7.1.12 뒤 문단 (p.261); 7.2.1절 Topology, Example 7.2.5, Proposition 7.2.6 (p.265); 7.2.4절 연습문제 7.2.4 (p.272); 7.3.3절 첫 문장 (p.276)"
    checked: original
    note: "(4)가 위상이라는 것은 출처 Proposition 7.2.6 의 세 성질에서 나온다. 출처는 7.3.3절 첫머리(p.276)에서 거리공간의 위상을 '공간의 열린집합 전체의 집합'이라 부르고, 연습문제 7.2.4(p.272)는 'discrete topology 를 가진 거리공간'이라는 말을 정의 없이 쓴다. 확인 질문 'ℝ 에 이산 거리를 주면 {0} 은 거리위상에서 열린집합인가'의 대상은 출처 Example 7.1.7(p.259, 실수처럼 무한집합에 이산 거리를 주는 경우)과 Definition 7.1.12 뒤 문단(p.261)의 실수 위의 이산 거리와 같고, 보통 거리에서 {0} 이 열려 있지 않다는 것은 출처 Example 7.2.5(p.265)가 적는 것이다. (6)의 증명과 반례 '점이 둘 이상인 밀착위상'이 쓰는 '거리공간의 한 점 집합은 닫혀 있다'는 같은 Example 7.2.5 가 연습으로 두는 것이다(1단원 open-set-in-metric-space 의 (5))."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예·증명 속 사실을 근거로 삼은 반례 2건과 경계 경우의 직관 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상과 위상공간은 [[topological-space]]의 것이고, 조건 (i)–(iii)은 그 항목의 위상의 조건이다. 거리공간과 이산 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, $(X, d)$에서 열린집합과 닫힌집합은 [[open-set-in-metric-space]]의 것이다. 아래에서 $X$는 집합이다.

1. (이산위상) $\mathscr{P}(X)$는 $X$ 위의 위상이다. 이것을 $X$ 위의 **이산위상**(discrete topology)이라 한다. 이산위상에서는 $X$의 모든 부분집합이 열린집합이다.
2. (밀착위상) $\{\emptyset, X\}$는 $X$ 위의 위상이다. 이것을 $X$ 위의 **밀착위상**(indiscrete topology, trivial topology)이라 한다.
3. (두 위상이 같아지는 경우) $X = \emptyset$이거나 어떤 대상 $p$에 대하여 $X = \{p\}$이면 이산위상과 밀착위상은 같은 집합족이다. $X$에 서로 다른 두 점 $a$, $b$가 있으면 $\{a\}$는 이산위상의 원소이고 밀착위상의 원소가 아니므로 두 위상은 다르다.
4. (거리위상) $(X, d)$가 거리공간이면
   $$
   \mathcal{T}_d = \{U \in \mathscr{P}(X) : U \text{는 } (X, d) \text{에서 열린집합}\}
   $$
   는 $X$ 위의 위상이다. 이것을 $d$의 **거리위상**(metric topology)이라 한다. $U \subseteq X$에 대하여 $U \in \mathcal{T}_d$인 것은 정확히 $U$가 $(X, d)$에서 열린집합일 때이므로, "$(X, d)$에서 열린"과 "$(X, \mathcal{T}_d)$에서 열린"은 같은 말이다. 특히 모든 열린 공 $B(x, r)$은 $\mathcal{T}_d$의 원소이다. 거리공간을 위상공간으로 볼 때 위상을 따로 밝히지 않으면 거리위상을 준 것이다.
5. (이산 거리의 거리위상) $d$가 $X$ 위의 이산 거리이면 $\mathcal{T}_d$는 이산위상 $\mathscr{P}(X)$이다.
6. (밀착위상과 거리위상) $X$에 서로 다른 두 점 $a$, $b$가 있으면, $X$ 위의 어떤 거리 $d$에 대해서도 $\mathcal{T}_d$는 밀착위상이 아니다. $X$에 서로 다른 두 점이 없으면(곧 (3)의 앞 문장의 경우) 밀착위상은 $X$ 위의 이산 거리의 거리위상이다.
7. (원소 둘인 집합 위의 위상) $a \ne b$이고 $X = \{a, b\}$이면 $X$ 위의 위상은 정확히 다음 넷이다.
   $$
   \{\emptyset, X\}, \qquad \{\emptyset, \{a\}, X\}, \qquad \{\emptyset, \{b\}, X\}, \qquad \mathscr{P}(X) = \{\emptyset, \{a\}, \{b\}, X\}.
   $$
   따라서 예컨대 $\{\{a\}, X\}$와 $\{\emptyset, \{a\}\}$는 $X$ 위의 위상이 아니다.
8. (세 점 위의 위상) $X = \{1, 2, 3\}$이면 다음 둘은 $X$ 위의 위상이다.
   - (i) $\{\emptyset, \{1\}, \{1, 2\}, X\}$
   - (ii) $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$
9. (한 줄로 늘어선 집합족) $A$, $B$가 $A \subseteq B \subseteq X$인 집합이면 $\{\emptyset, A, B, X\}$는 $X$ 위의 위상이다. $A = B$이거나 $A = \emptyset$이어도 된다.
:::

:::english
Topologies and topological spaces are as in the entry on topological spaces, and conditions (i)–(iii) are the conditions for a topology given there. Metric spaces and the discrete metric are as in the earlier entries, and open and closed sets in $(X, d)$ are as in the entry on open sets of metric spaces. Throughout, $X$ is a set.

1. (The discrete topology) $\mathscr{P}(X)$ is a topology on $X$, called the **discrete topology** on $X$. In the discrete topology every subset of $X$ is open.
2. (The indiscrete topology) $\{\emptyset, X\}$ is a topology on $X$, called the **indiscrete topology** (or trivial topology) on $X$.
3. (When the two coincide) If $X = \emptyset$, or $X = \{p\}$ for some object $p$, then the discrete and the indiscrete topology are the same family. If $X$ has two distinct points $a$ and $b$, then $\{a\}$ belongs to the discrete topology but not to the indiscrete topology, so the two topologies are different.
4. (The metric topology) If $(X, d)$ is a metric space, then
   $$
   \mathcal{T}_d = \{U \in \mathscr{P}(X) : U \text{ is open in } (X, d)\}
   $$
   is a topology on $X$, called the **metric topology** of $d$. For $U \subseteq X$ we have $U \in \mathcal{T}_d$ exactly when $U$ is open in $(X, d)$, so "open in $(X, d)$" and "open in $(X, \mathcal{T}_d)$" mean the same thing. In particular every open ball $B(x, r)$ belongs to $\mathcal{T}_d$. When a metric space is regarded as a topological space and no topology is named, it carries the metric topology.
5. (The metric topology of the discrete metric) If $d$ is the discrete metric on $X$, then $\mathcal{T}_d$ is the discrete topology $\mathscr{P}(X)$.
6. (The indiscrete topology and metric topologies) If $X$ has two distinct points $a$ and $b$, then for no metric $d$ on $X$ is $\mathcal{T}_d$ the indiscrete topology. If $X$ does not have two distinct points (that is, in the case of the first sentence of (3)), then the indiscrete topology is the metric topology of the discrete metric on $X$.
7. (Topologies on a two-element set) If $a \ne b$ and $X = \{a, b\}$, then the topologies on $X$ are exactly the following four.
   $$
   \{\emptyset, X\}, \qquad \{\emptyset, \{a\}, X\}, \qquad \{\emptyset, \{b\}, X\}, \qquad \mathscr{P}(X) = \{\emptyset, \{a\}, \{b\}, X\}.
   $$
   Hence, for example, $\{\{a\}, X\}$ and $\{\emptyset, \{a\}\}$ are not topologies on $X$.
8. (Topologies on three points) If $X = \{1, 2, 3\}$, then the following two are topologies on $X$.
   - (i) $\{\emptyset, \{1\}, \{1, 2\}, X\}$
   - (ii) $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$
9. (Families lying in a chain) If $A$ and $B$ are sets with $A \subseteq B \subseteq X$, then $\{\emptyset, A, B, X\}$ is a topology on $X$. Here $A = B$ or $A = \emptyset$ is allowed.
:::

## 직관

위상은 "어느 부분집합을 열린 것으로 부를지"의 목록입니다. 목록을 가장 길게 잡으면 모든 부분집합을 넣은 이산위상이고, 가장 짧게 잡으면 조건 (i)이 꼭 요구하는 $\emptyset$과 $X$만 넣은 밀착위상입니다. 이산위상에서는 점 하나만으로 된 집합도 열려 있어서 점들이 서로 낱낱이 떨어져 있고(이산), 밀착위상에서는 $X$가 공집합이 아닐 때 공집합이 아닌 열린집합이 $X$ 하나뿐이어서 점들이 열린집합으로는 서로 구별되지 않습니다(밀착).

거리공간에서 시작하면 위상을 따로 고를 필요가 없습니다. 1단원의 열린집합 전체가 바로 위상이고(거리위상), 이것은 1단원에서 증명한 성질을 다시 읽은 것입니다. 이산 거리는 모든 부분집합을 열리게 하므로 이산위상을 주고, 이름이 서로 맞습니다. 반대로 밀착위상은 점이 둘 이상이면 어떤 거리에서도 나오지 않습니다. 거리공간에서는 한 점 집합이 늘 닫혀 있어서 그 여집합이 열린집합인데, 점이 둘 이상이면 그 여집합은 공집합도 전체도 아니어서 밀착위상에 들어갈 자리가 없기 때문입니다. 위상공간이 거리공간보다 넓은 세계라는 첫 증거입니다.

## 증명

:::idea
(1)–(3)과 (7)–(9)는 조건 (i)–(iii)을 집합족마다 직접 확인합니다. 원소가 서로 포함 관계로 한 줄로 늘어선 집합족은 합집합이 가장 큰 원소, 두 원소의 교집합이 작은 쪽이 되어 확인이 짧아집니다. (4)는 1단원의 [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]을, (5)와 (6)은 [[open-set-in-metric-space|거리공간의 열린집합과 닫힌집합]]의 (4)와 (5)를 씁니다.
:::

:::hint
(9)를 먼저 보여 두면 (2), (7), (8)의 (i)에 모두 쓸 수 있습니다. $\mathcal{U}$가 $X$를 포함하는지, 아니면 $B$를 포함하는지, … 로 경우를 나누어 보세요.
:::

:::hint
(6)의 앞 문장에서는 $\{a\}$가 $(X, d)$에서 닫혀 있다는 것으로 $\mathcal{T}_d$의 원소 하나를 만들고, 그것이 $\emptyset$도 $X$도 아님을 보입니다.
:::

:::proof
집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이다. 두 집합은 원소가 같을 때 같고([[set]]), $A \in \mathscr{P}(X)$인 것은 정확히 $A \subseteq X$일 때이다([[power-set]]). [[subset]]의 정의와 [[set-operations|교집합]]의 정의에서 바로 나오는 다음 두 사실을 (가), (나)라 부른다.

- (가) $P \subseteq Q$이고 $Q \subseteq R$이면 $P \subseteq R$이다($x \in P$이면 $x \in Q$이고, 따라서 $x \in R$이다).
- (나) $P \subseteq Q$이면 $P \cap Q = P$이고 $Q \cap P = P$이다($x \in P$이면 $x \in Q$이므로 $x$는 두 교집합에 모두 속하고, 거꾸로 두 교집합의 원소는 $P$의 원소이다).

**(9).** 다른 번호에서 쓰므로 먼저 증명한다. $A \subseteq B \subseteq X$이고 $\mathcal{S} = \{\emptyset, A, B, X\}$라 하자. $A$, $B \subseteq X$이므로 $\mathcal{S} \subseteq \mathscr{P}(X)$이다. 조건 (i)은 $\emptyset, X \in \mathcal{S}$이므로 성립한다. 조건 (ii): $\mathcal{U} \subseteq \mathcal{S}$라 하자.
- $X \in \mathcal{U}$이면 집합족의 (1)에 의해 $X \subseteq \bigcup \mathcal{U}$이고 $\bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X$이다.
- $X \notin \mathcal{U}$이고 $B \in \mathcal{U}$이면 $\mathcal{U}$의 원소는 $\emptyset$, $A$, $B$ 가운데 하나이고 [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]과 $A \subseteq B$에 의해 모두 $B$의 부분집합이다. 집합족의 (2)의 (i)에 의해 $\bigcup \mathcal{U} \subseteq B$이고, (1)에 의해 $B \subseteq \bigcup \mathcal{U}$이므로 $\bigcup \mathcal{U} = B$이다.
- $X \notin \mathcal{U}$, $B \notin \mathcal{U}$이고 $A \in \mathcal{U}$이면 $\mathcal{U}$의 원소는 $\emptyset$이나 $A$이므로 같은 방식으로 $\bigcup \mathcal{U} = A$이다.
- 남은 경우 $\mathcal{U}$의 원소는 $\emptyset$뿐이므로 $\bigcup \mathcal{U}$에는 원소가 없고 $\bigcup \mathcal{U} = \emptyset$이다($\mathcal{U} = \emptyset$인 경우도 여기에 든다).

어느 경우든 $\bigcup \mathcal{U} \in \mathcal{S}$이다. 조건 (iii): $\emptyset \subseteq A \subseteq B \subseteq X$이므로 (가)에 의해 $\mathcal{S}$의 두 원소 $U$, $V$는 $U \subseteq V$이거나 $V \subseteq U$이다. (나)에 의해 $U \cap V$는 $U$이거나 $V$이고, $\mathcal{S}$에 속한다.

**(1).** $\mathscr{P}(X) \subseteq \mathscr{P}(X)$이다. $\emptyset \subseteq X$([[empty-set-is-subset|공집합은 모든 집합의 부분집합]])이고 $X \subseteq X$이므로 조건 (i)이 성립한다. $\mathcal{U} \subseteq \mathscr{P}(X)$이면 $\bigcup \mathcal{U}$는 $X$의 부분집합이므로([[family-of-sets]]의 정의) $\mathscr{P}(X)$에 속한다. $U, V \subseteq X$이면 $U \cap V \subseteq X$이다. 따라서 $\mathscr{P}(X)$는 위상이다. 이산위상의 열린집합은 $\mathscr{P}(X)$의 원소, 곧 $X$의 부분집합 전체이다.

**(2).** (9)를 $A = B = \emptyset$에 쓰면 $\{\emptyset, \emptyset, \emptyset, X\} = \{\emptyset, X\}$는 위상이다.

**(3).** $X = \emptyset$이면 [[topological-space]]의 공집합 단락에 의해 $\mathscr{P}(\emptyset) = \{\emptyset\}$이고, $\{\emptyset, X\} = \{\emptyset\}$이므로 두 위상은 같다. $X = \{p\}$이면 $X$의 부분집합 $S$는 $p \in S$일 때 $S = \{p\} = X$이고 $p \notin S$일 때 원소가 없어 $S = \emptyset$이므로 $\mathscr{P}(X) = \{\emptyset, X\}$이다. $X$에 서로 다른 두 점 $a$, $b$가 있으면 $\{a\} \subseteq X$이므로 $\{a\} \in \mathscr{P}(X)$이다. $a \in \{a\}$이므로 $\{a\} \ne \emptyset$이고, $b \in X$이지만 $b \ne a$이므로 $b \notin \{a\}$이고 $\{a\} \ne X$이다. 따라서 $\{a\} \notin \{\emptyset, X\}$이다.

**(4).** $\mathcal{T}_d$는 $\mathscr{P}(X)$의 원소에 관한 조건으로 정한 부분집합이므로([[family-of-sets]]의 조건으로 정한 부분집합) $\mathcal{T}_d \subseteq \mathscr{P}(X)$이고, $U \subseteq X$이면 $U \in \mathcal{T}_d$인 것은 정확히 $U$가 $(X, d)$에서 열린집합일 때이다. [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 번호로 조건을 확인한다. 조건 (i)은 그 항목의 (1)이다. 조건 (ii): $\mathcal{U} \subseteq \mathcal{T}_d$이면 $\mathcal{U}$는 $(X, d)$의 열린집합들의 집합족이므로 그 항목의 (2)에 의해 $\bigcup \mathcal{U}$는 열린집합이고, $X$의 부분집합이므로 $\mathcal{T}_d$에 속한다. 조건 (iii): $U, V \in \mathcal{T}_d$이면 그 항목의 (3)에 의해 $U \cap V$는 열린집합이고 $X$의 부분집합이므로 $\mathcal{T}_d$에 속한다. 끝으로 [[open-ball-is-open|열린 공이 열린집합이라는 명제]]의 (1)에 의해 $B(x, r)$은 $(X, d)$에서 열린집합이고, [[open-ball]]에 의해 $X$의 부분집합이므로 $\mathcal{T}_d$에 속한다.

**(5).** $\mathcal{T}_d \subseteq \mathscr{P}(X)$이다. 거꾸로 $U \in \mathscr{P}(X)$이면 [[open-set-in-metric-space]]의 (4)의 (iii)에 의해 $U$는 $(X, d)$에서 열린집합이므로 (4)에 의해 $U \in \mathcal{T}_d$이다.

**(6).** $a \ne b$인 $a, b \in X$가 있고 $d$가 $X$ 위의 거리라 하자. [[open-set-in-metric-space]]의 (5)에 의해 $\{a\}$는 $(X, d)$에서 닫힌집합이므로, 닫힌집합의 정의에 의해 $X - \{a\}$는 $(X, d)$에서 열린집합이고 (4)에 의해 $X - \{a\} \in \mathcal{T}_d$이다. $b \in X$이고 $b \ne a$이므로 $b \in X - \{a\}$, 곧 $X - \{a\} \ne \emptyset$이다. $a \in X$이고 $a \notin X - \{a\}$이므로 $X - \{a\} \ne X$이다. 따라서 $X - \{a\} \notin \{\emptyset, X\}$이고 $\mathcal{T}_d \ne \{\emptyset, X\}$이다.
뒤 문장: $X$에 서로 다른 두 점이 없다고 하자. $X \ne \emptyset$이면 $X$의 점 $p$를 하나 잡을 수 있고, $X$의 모든 점 $x$는 $p$와 같으므로(다르면 서로 다른 두 점이 있게 된다) $X = \{p\}$이다. 곧 $X = \emptyset$이거나 $X = \{p\}$이고, 이것이 (3)의 앞 문장의 경우이다. [[metric-space-examples]]의 (2)에 의해 $X$ 위의 이산 거리 $d$가 있고, (5)에 의해 $\mathcal{T}_d = \mathscr{P}(X)$이다. (3)의 앞 문장에 의해 $\mathscr{P}(X) = \{\emptyset, X\}$이다.

**(7).** 먼저 $\mathscr{P}(X) = \{\emptyset, \{a\}, \{b\}, X\}$이다. $S \subseteq X$이면 $S$의 원소는 $a$나 $b$이므로, $a \in S$인지와 $b \in S$인지에 따라 $S$는 차례로 $X$, $\{a\}$, $\{b\}$, $\emptyset$ 가운데 하나이고, 이 넷은 $X$의 부분집합이다. 넷은 서로 다르다. $\emptyset$에는 원소가 없고 나머지에는 있다. $b \notin \{a\}$이므로 $\{a\}$는 $\{b\}$와도 $X$와도 다르고, $a \notin \{b\}$이므로 $\{b\} \ne X$이다.

$\mathcal{T}$가 $X$ 위의 위상이라 하자. 조건 (i)에 의해 $\emptyset, X \in \mathcal{T}$이고, $\mathcal{T} \subseteq \mathscr{P}(X)$이므로 $\mathcal{T}$의 원소는 위 넷 가운데 하나이다. 따라서 $\mathcal{T}$는 $\{a\}$를 포함하는지와 $\{b\}$를 포함하는지에 따라 $\mathscr{P}(X)$, $\{\emptyset, \{a\}, X\}$, $\{\emptyset, \{b\}, X\}$, $\{\emptyset, X\}$ 가운데 하나이다. 거꾸로 이 넷은 위상이다. $\mathscr{P}(X)$는 (1)에 의해, $\{\emptyset, X\}$는 (2)에 의해, $\{\emptyset, \{a\}, X\}$는 (9)를 $A = B = \{a\}$에, $\{\emptyset, \{b\}, X\}$는 (9)를 $A = B = \{b\}$에 쓴 것에 의해 위상이다. $\{\{a\}, X\}$와 $\{\emptyset, \{a\}\}$는 각각 $\emptyset$과 $X$를 원소로 갖지 않으므로 넷 가운데 어느 것과도 다르다.

**(8).** (i) $\{1\} \subseteq \{1, 2\} \subseteq X$이므로 (9)를 $A = \{1\}$, $B = \{1, 2\}$에 쓴다.

(ii) $\mathcal{S} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$라 하자. 원소는 모두 $X$의 부분집합이고 조건 (i)은 성립한다. 조건 (ii): $\mathcal{U} \subseteq \mathcal{S}$라 하자.
- $X \in \mathcal{U}$이거나, $\{1, 2\}$와 $\{2, 3\}$이 둘 다 $\mathcal{U}$에 있으면, 집합족의 (1)에 의해 $\bigcup \mathcal{U}$는 $X$를 포함하거나 $\{1, 2\}$와 $\{2, 3\}$을 포함하여 $1, 2, 3$을 모두 원소로 갖는다. $\bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X$이다.
- 그렇지 않고 $\{1, 2\} \in \mathcal{U}$이면 $\mathcal{U}$의 원소는 $\emptyset$, $\{2\}$, $\{1, 2\}$ 가운데 하나이고 모두 $\{1, 2\}$의 부분집합이므로, 집합족의 (1)과 (2)의 (i)에 의해 $\bigcup \mathcal{U} = \{1, 2\}$이다.
- 그렇지 않고 $\{2, 3\} \in \mathcal{U}$이면, 앞 경우에서 $\{1, 2\}$를 $\{2, 3\}$으로 바꾼 같은 논증으로 $\mathcal{U}$의 원소는 $\emptyset$, $\{2\}$, $\{2, 3\}$ 가운데 하나이고 모두 $\{2, 3\}$의 부분집합이므로 $\bigcup \mathcal{U} = \{2, 3\}$이다.
- 남은 경우 $\mathcal{U} \subseteq \{\emptyset, \{2\}\}$이고, $\{2\} \in \mathcal{U}$이면 같은 방식으로 $\bigcup \mathcal{U} = \{2\}$, 아니면 $\bigcup \mathcal{U} = \emptyset$이다.

조건 (iii): $U, V \in \mathcal{S}$라 하자. $U \subseteq V$이거나 $V \subseteq U$이면 (나)에 의해 $U \cap V$는 $U$나 $V$이다. $\mathcal{S}$의 원소 가운데 어느 쪽도 다른 쪽에 들지 않는 두 원소는 $\{1, 2\}$와 $\{2, 3\}$뿐이다($\emptyset$은 모든 원소에 들고, 모든 원소는 $X$에 들며, $\{2\}$는 $\emptyset$이 아닌 모든 원소에 든다). 그 교집합은 $\{2\} \in \mathcal{S}$이다. 따라서 $\mathcal{S}$는 위상이다.
:::

## 예시와 반례

:::example[원소 둘인 집합의 세 위상의 열린집합]
$X = \{a, b\}$ ($a \ne b$)에 (7)의 위상 $\{\emptyset, \{a\}, X\}$를 주면 $\{a\}$는 열린집합이고 $\{b\}$는 열린집합이 아닙니다. 같은 집합에 $\{\emptyset, \{b\}, X\}$를 주면 거꾸로이고, 밀착위상 $\{\emptyset, X\}$에서는 둘 다 열린집합이 아니며, 이산위상에서는 둘 다 열린집합입니다. 같은 집합 $\{a\}$가 열려 있는지는 어느 위상을 주었는지에 따라 달라집니다.
:::

:::counterexample[점이 둘 이상인 밀착위상은 거리위상이 아니다]
$X = \{1, 2, 3\}$에 밀착위상을 주었다고 합시다. 어떤 거리 $d$를 주든 [[open-set-in-metric-space]]의 (5)에 의해 $\{1\}$은 $(X, d)$에서 닫힌집합이고, 그 여집합 $\{2, 3\}$은 $\mathcal{T}_d$에 듭니다. $\{2, 3\}$은 $\emptyset$도 $X$도 아니므로 밀착위상에 들지 않습니다. (6)의 앞 문장을 이 집합에서 직접 따라간 것입니다.
:::

## 확인 질문

:::check[$\mathbb{R}$에 이산 거리를 주면 $\{0\}$은 거리위상에서 열린집합인가? 보통 거리를 주면 어떤가?]
이산 거리이면 (5)에 의해 거리위상은 $\mathscr{P}(\mathbb{R})$이고 $\{0\}$은 열린집합입니다. 보통 거리이면 [[open-set-in-metric-space]]의 (6)에 의해 $\{0\}$은 $\mathbb{R}$에서 열린집합이 아니므로, (4)에 의해 거리위상의 원소가 아닙니다. 같은 집합 $\mathbb{R}$ 위의 두 거리가 서로 다른 위상을 줍니다.
:::

:::check[이산위상과 밀착위상이 같은 위상이 되는 $X$는 어떤 집합인가?]
(3)에 의해 $X = \emptyset$이거나 $X$가 원소 하나뿐인 집합 $\{p\}$이면 같고, 서로 다른 두 점이 있으면 다릅니다. 이 두 경우 말고는 없습니다. 서로 다른 두 점이 없고 $X \ne \emptyset$이면 점 $p$를 하나 잡을 때 모든 점이 $p$와 같아서 $X = \{p\}$이기 때문입니다((6)의 증명). 예를 들어 $X = \{7\}$이면 두 위상은 모두 $\{\emptyset, \{7\}\}$입니다.
:::
