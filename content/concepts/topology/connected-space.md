---
title: 연결공간
title_en: Connected Spaces
aliases: [연결, 연결집합, 연결 부분집합, 분리, connected space, connected set, connected subset, separation, disconnected]
kind: definition
field: topology
msc: ["54D05"]
level: undergrad
summary: 공집합이 아닌 서로소인 두 열린집합으로 공간을 나누는 것을 분리라 하고, 분리가 없는 공간을 연결공간이라 한다. 연결은 열려 있고 닫혀 있는 부분집합이 공집합과 전체뿐이라는 것과 같고, 부분집합의 연결은 바깥 공간의 열린집합으로 판정할 수 있으며, 연결 부분집합은 분리의 한쪽에 들어간다. 한 점 공간, 밀착위상, 이산위상, 아래끝 위상, 유리수의 경우와 더 거친 위상, 위상동형에서 연결이 어떻게 되는지 보인다.
requires: [set, subset, set-operations, de-morgan-laws-sets, function, injective-surjective-bijective, image-and-preimage, preimage-and-set-operations, finite-set, disjoint-union-count, real-number-arithmetic, real-order-axioms, order-properties-of-reals, rational-and-irrational-numbers, interval, topological-space, topology-examples, closed-set, comparing-topologies, open-and-closed-sets-of-reals, standard-topology-on-reals, lower-limit-topology, homeomorphism, subspace-topology, subspace-and-continuity, metric-subspace-topology, hausdorff-space]
sources:
  - ref: fuglede-basic-topology
    loc: "Connectedness 절: 정의 (content/connectedness.tex:8–10), 부분공간에 관한 문장 (12), 예 (13–15), 문단과 Lemma (16–22), 예 (29–39), Lemma connectedness-subspace-lemma (48–58), Remark (98–100); 연습문제 2.1, 2.2, 2.12 (content/exercises.tex:75, 76, 90); Definitions and first examples 절의 예 two-point-topologies (content/topological-spaces.tex:18–28)"
    checked: original
    note: "분리와 연결공간의 정의는 출처 정의(8–10)와 같다. 출처는 분리를 'U, V 의 쌍'(a pair U, V)으로 적고 이 항목은 순서쌍 (U, V) 로 쓴다. 이 항목은 출처의 정의를 그대로 따르므로 공집합은 분리가 없어 연결공간이다. 부분집합의 연결을 부분공간 위상으로 정하는 것은 출처 12줄과 같다. (1)의 첫 세 문장은 출처의 문단(16: 분리의 U 와 V 는 열려 있고 닫혀 있다)과 Lemma(17–22)이다. 출처의 Lemma 증명(21)은 열려 있고 닫힌 U 에서 (U, X − U) 를 만들어, 연결이면 둘 가운데 하나가 공집합임을 보인다. 이 항목은 두 방향을 모두 증명한다. (1)의 끝 문장(닫힌집합으로 쓴 분리)은 출처 연습문제 2.1(exercises.tex:75)과 같은 내용이다. (4)의 (ii)는 출처 Lemma connectedness-subspace-lemma(48–58)이다. 출처는 X = U ∪ V 이고 U, V 가 서로소인 열린집합인 경우를 진술하고(U, V 가 공집합이 아닐 것은 요구하지 않는다), 대우로 증명한다. (4)의 (i)은 이 항목이 조건을 U ∩ V ∩ C = ∅ 으로 넓힌 것이고 (2)로 증명한다. (5)의 (i)의 한 점 집합이 연결이라는 것은 출처의 연결 성분 명제의 증명(212줄, '{x} is connected')에서 쓰인다. (5)의 (iii)은 출처의 예 discrete-connectedness(36–39)와 연습문제 2.12(exercises.tex:90: 이산위상이면 공집합이 아닌 연결 부분공간은 한 점 집합뿐임을 보이라)와 같은 내용이다. 출처 38줄은 'consists of more than two points' 라고 적고, 그 논증 X = {x} ∪ (X − {x}) 는 서로 다른 두 점이 있으면 성립한다. (5)의 (v)의 ℚ 는 출처의 예(29–35)와 같은 대상을 같은 방법(무리수 a 의 양쪽으로 가르기)으로 보인 것이다. (7)은 출처 Remark(98–100: 연결이 위상적 성질이어서 연결인 공간과 연결이 아닌 공간은 위상동형이 아니다)와 같은 내용이다. 예시 '원소 둘인 집합 위의 네 위상'의 위상들은 출처의 예 two-point-topologies(topological-spaces.tex:18–28)의 𝒯₁–𝒯₄ 이다. 예시 '두 조각으로 된 실수의 부분집합'은 출처의 예(13–15: (−2, −1) ∪ (1, 2) 는 분리를 갖는다)와 같은 발상이고, 출처 3줄의 [−2, −1] ∪ [1, 2] 와 같은 꼴의 집합이다. (2)의 예와 반례 '연결공간의 부분집합이 연결이 아닌 예'의 세 점 위의 위상은 출처 연습문제 1.2(exercises.tex:13: 세 점 위의 위상을 모두 구하라)가 묻는 위상 가운데 하나이다. 확인 질문 '세 점 위의 한 위상'은 출처 연습문제 2.2(exercises.tex:76)와 같은 물음(세 점 위의 한 위상에서 X 가 연결인가)이고, 출처는 위상 {∅, {a, b}, {c}, X} 에서 묻는다. 확인 질문 '더 섬세한 위상'의 두 위상은 two-point-topologies 의 𝒯₁ 과 𝒯₄ 이다."
  - ref: lebl-basic-analysis
    loc: "7.2.2절 Connected sets, Definition 7.2.13 과 각주, Proposition 7.2.14 와 그림 7.7, Example 7.2.15 (p.268), Example 7.2.17 (p.269); 7.2.4절 연습문제 7.2.4, 7.2.5 (p.272)"
    checked: original
    note: "Definition 7.2.13 은 공집합이 아닌 거리공간에 대해, 열려 있고 닫힌(clopen) 부분집합이 ∅ 과 X 뿐인 것을 연결로 정의한다. 이 조건은 이 항목의 (1)의 판정과 같다. 연결이 아닌 것을 출처는 disconnected 라 부른다. 공집합이 아닌 부분집합의 연결은 부분공간 위상으로 말한다. 각주(p.268)는 공집합을 연결의 정의에서 빼지 않는 저자도 있다고 적고, 빼는 까닭으로 연결집합은 열려 있고 닫힌 부분집합을 정확히 둘, 연결이 아닌 집합은 둘보다 많이 갖는데 공집합은 하나만 갖는다는 것을 든다. 이 항목은 Fuglede 를 따라 공집합을 연결공간으로 둔다. (2)는 Proposition 7.2.14 를 위상공간으로 옮긴 것이다. 출처는 거리공간의 공집합이 아닌 S 에 대해 진술하고 S = (U₁ ∩ S) ∪ (U₂ ∩ S) 로 적는다. (2)의 'U ∩ V 는 공집합이 아니어도 된다'는 그림 7.7 의 설명(U₁ ∩ U₂ need not be empty)과 같다. (5)의 (iii)은 연습문제 7.2.4(p.272: 공집합이 아닌 이산 거리공간이 연결인 것은 정확히 원소가 하나일 때)와 같은 결론을 담고, Example 7.2.17(p.269: 두 점 {a, b} 의 이산 거리에서 B(a, 2) = {a, b} 는 연결이 아니다)도 그 한 경우이다. (5)의 (v)의 ℚ 는 연습문제 7.2.5(p.272: ℚ 의 서로 다른 두 점마다 ℚ 를 서로소인 두 열린집합으로 가르라)와 같은 대상이다. 예시 '두 조각으로 된 실수의 부분집합'은 Example 7.2.15(x < z < y, x, y ∈ S, z ∉ S 이면 S 는 연결이 아니다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 X = ∅ 과 한 점 집합에서 거짓이던 직관 문장, 단원 글과 확인 질문의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 위상의 조건 (i)–(iii)은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 이산위상과 밀착위상은 [[topology-examples]]의 것이다. 부분공간 위상 $\mathcal{T}|_A$와 "$Y$에서 열린"은 [[subspace-topology]]의 것이고, "거칠다"는 [[comparing-topologies]]의 것이며, 위상동형사상과 $\simeq$는 [[homeomorphism|위상동형사상]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

**분리.** $X$의 부분집합의 순서쌍 $(U, V)$가 $(X, \mathcal{T})$의 **분리**(separation)인 것은 정확히 $U$와 $V$가 열린집합이고, $U \ne \emptyset$, $V \ne \emptyset$, $U \cap V = \emptyset$, $U \cup V = X$일 때이다.

**연결공간.** $(X, \mathcal{T})$가 **연결공간**(connected space)인 것은 정확히 $(X, \mathcal{T})$의 분리가 없을 때이다. 이것을 "$X$는 **연결**(connected)이다"라고도 하고, 분리가 있으면 "$X$는 연결이 아니다"(disconnected)라고 한다. 이 정의에서 $X = \emptyset$이면 $U \ne \emptyset$인 $U \subseteq X$가 없으므로 분리가 없고, 공집합은 연결공간이다.

**연결 부분집합.** $A \subseteq X$가 $X$의 **연결 부분집합**(connected subset)인 것은 정확히 부분공간 위상을 준 $(A, \mathcal{T}|_A)$가 연결공간일 때이다. 이것을 "$A$는 연결이다", "$A$는 **연결집합**이다"라고도 한다.

다음이 성립한다.

1. (열린집합이면서 닫힌집합) $(U, V)$가 $X$의 분리이면 $V = X - U$이고, $U$와 $V$는 둘 다 열린집합이면서 닫힌집합이다. 거꾸로 $U$가 열린집합이면서 닫힌집합이고 $U \ne \emptyset$, $U \ne X$이면 $(U, X - U)$는 $X$의 분리이다. 따라서 $X$가 연결공간인 것은 정확히 $X$의 부분집합 가운데 열린집합이면서 닫힌집합인 것이 $\emptyset$과 $X$뿐일 때이다. 또 분리의 정의에서 "열린집합"을 "닫힌집합"으로 바꾸어도 같은 순서쌍을 정한다. 곧 $(U, V)$가 $X$의 분리인 것은 정확히 $U$와 $V$가 닫힌집합이고 $U \ne \emptyset$, $V \ne \emptyset$, $U \cap V = \emptyset$, $U \cup V = X$일 때이다.
2. (바깥 공간의 열린집합으로 판정) $A \subseteq X$라 하자. $A$가 $X$의 연결 부분집합이 아닌 것은 정확히 다음 네 조건을 모두 만족하는 $X$의 열린집합 $U$, $V$가 있을 때이다.
   $$
   \begin{gathered}
   A \subseteq U \cup V, \qquad U \cap V \cap A = \emptyset, \\
   U \cap A \ne \emptyset, \qquad V \cap A \ne \emptyset.
   \end{gathered}
   $$
   이때 $(U \cap A, V \cap A)$는 $(A, \mathcal{T}|_A)$의 분리이다. 여기서 $U \cap V$는 공집합이 아니어도 된다. 예컨대 $X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$([[topology-examples]]의 (8)의 (ii))를 주면 $A = \{1, 3\}$은 $X$의 연결 부분집합이 아니지만, $A$와 만나는 $X$의 열린집합은 모두 $2$를 원소로 가지므로 위 네 조건을 만족하는 $U$, $V$는 늘 $2 \in U \cap V$이다.
3. (어느 공간 안에서 보는가) $A \subseteq Y \subseteq X$이면, $A$가 위상공간 $(Y, \mathcal{T}|_Y)$의 연결 부분집합인 것은 정확히 $A$가 $X$의 연결 부분집합일 때이다. 또 $X$가 $X$ 자신의 연결 부분집합인 것은 정확히 $(X, \mathcal{T})$가 연결공간일 때이다.
4. (분리의 한쪽에 든다)
   - (i) $C$가 $X$의 연결 부분집합이고, $U$, $V$가 $X$의 열린집합이며 $C \subseteq U \cup V$이고 $U \cap V \cap C = \emptyset$이면, $C \subseteq U$이거나 $C \subseteq V$이다.
   - (ii) 특히 $C$가 $X$의 연결 부분집합이고 $U$, $V$가 $U \cap V = \emptyset$, $U \cup V = X$인 $X$의 열린집합이면 $C \subseteq U$이거나 $C \subseteq V$이다. $(U, V)$가 $X$의 분리일 때가 그 경우이다.
5. (예)
   - (i) $X$에 서로 다른 두 점이 없으면, 곧 $X$의 모든 점 $x$, $y$에서 $x = y$이면, $(X, \mathcal{T})$는 연결공간이다. 특히 $X = \emptyset$이거나 어떤 대상 $p$에 대하여 $X = \{p\}$이면 그렇다. 또 모든 위상공간 $X$에서 $\emptyset$과, 점 $p \in X$의 한 점 집합 $\{p\}$는 $X$의 연결 부분집합이다.
   - (ii) 밀착위상 $\{\emptyset, X\}$를 준 $X$는 연결공간이다.
   - (iii) $\mathcal{T}$가 이산위상 $\mathscr{P}(X)$이면, $A \subseteq X$가 $X$의 연결 부분집합인 것은 정확히 $A$에 서로 다른 두 점이 없을 때이다. 특히 $X$에 서로 다른 두 점이 있으면 이산위상을 준 $X$는 연결공간이 아니다.
   - (iv) 아래끝 위상을 준 $\mathbb{R}_l$([[lower-limit-topology]])은 연결공간이 아니다.
   - (v) $\mathbb{R}$에 보통 위상을 줄 때([[standard-topology-on-reals]]의 (5)), 유리수 전체 $\mathbb{Q}$와 정수 전체 $\mathbb{Z}$는 $\mathbb{R}$의 연결 부분집합이 아니다.
6. (더 거친 위상) $\mathcal{T}'$이 $X$ 위의 위상이고 $\mathcal{T} \subseteq \mathcal{T}'$이라 하자. $(X, \mathcal{T}')$가 연결공간이면 $(X, \mathcal{T})$도 연결공간이다. 따라서 $(X, \mathcal{T})$가 연결공간이 아니면 $(X, \mathcal{T}')$도 연결공간이 아니다.
7. (위상동형) $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 위상동형사상이면, $X$가 연결공간인 것은 정확히 $Y$가 연결공간일 때이다. 또 $A \subseteq X$가 $X$의 연결 부분집합인 것은 정확히 상 $f(A)$가 $Y$의 연결 부분집합일 때이다.
:::

:::english
Topological spaces, open sets and the conditions (i)–(iii) for a topology are as in the entry on topological spaces; closed sets are as in the entry on closed sets; and the discrete and indiscrete topologies are as in the entry on examples of topologies. The subspace topology $\mathcal{T}|_A$ and "open in $Y$" are as in the entry on the subspace topology, "coarser" is as in the entry on comparing topologies, and homeomorphisms and $\simeq$ are as in the entry on homeomorphisms. Below, $(X, \mathcal{T})$ is a topological space.

**Separations.** An ordered pair $(U, V)$ of subsets of $X$ is a **separation** of $(X, \mathcal{T})$ exactly when $U$ and $V$ are open, $U \ne \emptyset$, $V \ne \emptyset$, $U \cap V = \emptyset$ and $U \cup V = X$.

**Connected spaces.** $(X, \mathcal{T})$ is a **connected space** exactly when $(X, \mathcal{T})$ has no separation. We also say "$X$ is **connected**", and if there is a separation we say "$X$ is disconnected". Under this definition, if $X = \emptyset$ there is no $U \subseteq X$ with $U \ne \emptyset$, so there is no separation and the empty set is a connected space.

**Connected subsets.** $A \subseteq X$ is a **connected subset** of $X$ exactly when $(A, \mathcal{T}|_A)$, with the subspace topology, is a connected space. We also say "$A$ is connected" or "$A$ is a **connected set**".

The following hold.

1. (Sets that are both open and closed) If $(U, V)$ is a separation of $X$, then $V = X - U$, and $U$ and $V$ are both open and closed. Conversely, if $U$ is both open and closed with $U \ne \emptyset$ and $U \ne X$, then $(U, X - U)$ is a separation of $X$. Hence $X$ is a connected space exactly when $\emptyset$ and $X$ are the only subsets of $X$ that are both open and closed. Moreover, replacing "open" by "closed" in the definition of a separation determines the same pairs: $(U, V)$ is a separation of $X$ exactly when $U$ and $V$ are closed, $U \ne \emptyset$, $V \ne \emptyset$, $U \cap V = \emptyset$ and $U \cup V = X$.
2. (A test using open sets of the ambient space) Let $A \subseteq X$. $A$ is not a connected subset of $X$ exactly when there are open sets $U$, $V$ of $X$ satisfying all four conditions
   $$
   \begin{gathered}
   A \subseteq U \cup V, \qquad U \cap V \cap A = \emptyset, \\
   U \cap A \ne \emptyset, \qquad V \cap A \ne \emptyset.
   \end{gathered}
   $$
   In that case $(U \cap A, V \cap A)$ is a separation of $(A, \mathcal{T}|_A)$. Here $U \cap V$ need not be empty. For example, if $X = \{1, 2, 3\}$ has the topology $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$ (item (8)(ii) of the entry on examples of topologies), then $A = \{1, 3\}$ is not a connected subset of $X$, but every open set of $X$ meeting $A$ contains $2$, so any $U$, $V$ satisfying the four conditions have $2 \in U \cap V$.
3. (In which space we look) If $A \subseteq Y \subseteq X$, then $A$ is a connected subset of the topological space $(Y, \mathcal{T}|_Y)$ exactly when $A$ is a connected subset of $X$. Also, $X$ is a connected subset of itself exactly when $(X, \mathcal{T})$ is a connected space.
4. (Lying on one side of a separation)
   - (i) If $C$ is a connected subset of $X$, and $U$, $V$ are open sets of $X$ with $C \subseteq U \cup V$ and $U \cap V \cap C = \emptyset$, then $C \subseteq U$ or $C \subseteq V$.
   - (ii) In particular, if $C$ is a connected subset of $X$ and $U$, $V$ are open sets of $X$ with $U \cap V = \emptyset$ and $U \cup V = X$, then $C \subseteq U$ or $C \subseteq V$. This is the case when $(U, V)$ is a separation of $X$.
5. (Examples)
   - (i) If $X$ does not have two distinct points, that is, if $x = y$ for all points $x$, $y$ of $X$, then $(X, \mathcal{T})$ is a connected space. In particular this holds if $X = \emptyset$ or $X = \{p\}$ for some object $p$. Also, in every topological space $X$, the set $\emptyset$ and the one-point set $\{p\}$ of a point $p \in X$ are connected subsets of $X$.
   - (ii) $X$ with the indiscrete topology $\{\emptyset, X\}$ is a connected space.
   - (iii) If $\mathcal{T}$ is the discrete topology $\mathscr{P}(X)$, then $A \subseteq X$ is a connected subset of $X$ exactly when $A$ does not have two distinct points. In particular, if $X$ has two distinct points, then $X$ with the discrete topology is not a connected space.
   - (iv) $\mathbb{R}_l$, with the lower limit topology, is not a connected space.
   - (v) Give $\mathbb{R}$ the standard topology. Then the set $\mathbb{Q}$ of rational numbers and the set $\mathbb{Z}$ of integers are not connected subsets of $\mathbb{R}$.
6. (Coarser topologies) Let $\mathcal{T}'$ be a topology on $X$ with $\mathcal{T} \subseteq \mathcal{T}'$. If $(X, \mathcal{T}')$ is a connected space, then so is $(X, \mathcal{T})$. Consequently, if $(X, \mathcal{T})$ is not a connected space, then neither is $(X, \mathcal{T}')$.
7. (Homeomorphisms) If $(Y, \mathcal{T}_Y)$ is a topological space and $f : X \to Y$ is a homeomorphism, then $X$ is a connected space exactly when $Y$ is a connected space. Also, $A \subseteq X$ is a connected subset of $X$ exactly when the image $f(A)$ is a connected subset of $Y$.
:::

## 직관

해석학 입문의 사잇값 정리는 닫힌구간 위의 연속함수가 값을 "건너뛰지" 않는다는 것이었습니다. 연결은 이런 "끊기지 않음"을 함수 없이 공간의 열린집합만으로 말하려는 정의입니다. 공간이 두 조각으로 나뉘어 있다는 것을 열린집합으로 말하면 "공집합이 아니고 서로 겹치지 않는 두 열린집합이 공간을 덮는다"가 되고, 그런 나눔이 없는 공간을 연결공간이라 부릅니다.

비유하자면 공간은 땅이고 열린집합은 땅 위에 그을 수 있는 구역입니다. 분리는 땅 전체를 겹치지 않는 두 구역으로 빈틈없이 나누되 두 구역이 모두 무언가를 담게 하는 것입니다. "구역으로 그을 수 있다"가 $U$, $V$가 열린집합이라는 조건에, "빈틈없이"가 $U \cup V = X$에, "겹치지 않는다"가 $U \cap V = \emptyset$에, "둘 다 무언가를 담는다"가 $U \ne \emptyset$, $V \ne \emptyset$에 맞습니다. 땅이 한 덩어리이면 이렇게 나눌 수 없습니다. 다만 어떤 나눔이 가능한지는 그을 수 있는 구역의 목록, 곧 위상에 달려 있어서, 점이 둘 이상인 같은 집합이 위상에 따라 연결이기도 하고 아니기도 합니다. (5)의 (ii)와 (iii)이 그 예입니다.

(1)은 분리를 한 집합으로 말한 것입니다. 분리 $(U, V)$에서 $V$는 $U$의 여집합이므로 $U$는 열린집합이면서 닫힌집합이고, 거꾸로 그런 $U$가 공집합도 전체도 아니면 $U$와 그 여집합이 분리입니다. (2)는 부분집합 $A$의 연결을 $A$ 위의 위상을 따로 계산하지 않고 바깥 공간 $X$의 열린집합으로 판정하는 방법입니다. 이때 두 열린집합 $U$, $V$는 $A$ 밖에서 겹쳐도 되고, (2)의 세 점 공간의 예에서는 실제로 겹치지 않을 수 없습니다. (4)는 연결 부분집합이 분리의 두 쪽에 걸칠 수 없다는 것으로, 연결집합의 합집합과 폐포를 다루는 증명이 이것을 씁니다.

(6)은 열린집합이 적을수록 나누기 어렵다는 것입니다. 밀착위상은 가장 거칠어서 늘 연결이고, 이산위상은 가장 섬세해서 점이 둘 이상이면 연결이 아닙니다. 이것은 열린집합이 많을수록 성립하기 쉬운 하우스도르프 성질과 반대 방향입니다. (7)은 위상동형사상이 열린집합을 열린집합으로 짝지으므로 분리도 분리로 옮긴다는 것입니다.

## 성질의 증명

:::proof
아래에서 집합의 계산(교집합과 합집합의 분배, 결합)은 [[set-operations|집합의 연산]]의 것이고, "닫힌집합 (5)"처럼 쓴 것은 [[closed-set]]의 번호이다. 열린집합은 $\mathcal{T} \subseteq \mathscr{P}(X)$이므로 $X$의 부분집합이다.

**(1).** $(U, V)$가 $X$의 분리라 하자. $V \subseteq X - U$이다. $v \in V$이면 $v \in X$이고, $v \in U$라면 $v \in U \cap V = \emptyset$이 되어 모순이기 때문이다. 거꾸로 $x \in X - U$이면 $x \in X = U \cup V$이고 $x \notin U$이므로 $x \in V$이다. 따라서 $V = X - U$이다. $V$가 열린집합이므로 닫힌집합의 정의에 의해 $U$는 닫힌집합이다. 같은 방식으로 $U = X - V$이고($U \subseteq X - V$와 $X - V \subseteq U$를 $U$, $V$의 자리를 바꾸어 위와 똑같이 보인다), $U$가 열린집합이므로 $V$는 닫힌집합이다. 곧 $U$와 $V$는 둘 다 열린집합이면서 닫힌집합이다.

거꾸로 $U$가 열린집합이면서 닫힌집합이고 $U \ne \emptyset$, $U \ne X$라 하자. $V = X - U$로 두면 $U$가 닫힌집합이므로 $V$는 열린집합이다. $U \cap V = \emptyset$이고 $U \cup V = X$이다($U \subseteq X$이므로 $X$의 점은 $U$에 속하거나 $X - U$에 속한다). $U \subseteq X$이고 $U \ne X$이므로 $x \notin U$인 $x \in X$가 있고, $x \in V$이므로 $V \ne \emptyset$이다. 따라서 $(U, V)$는 $X$의 분리이다.

이 둘에서 "따라서" 문장이 나온다. $X$에 분리 $(U, V)$가 있으면 $U$는 열린집합이면서 닫힌집합이고, $U \ne \emptyset$이며, $V \ne \emptyset$이고 $V = X - U$이므로 $U \ne X$이다. 곧 $\emptyset$과 $X$가 아닌 열린집합이면서 닫힌집합인 부분집합이 있다. 거꾸로 그런 부분집합 $U$가 있으면 $(U, X - U)$가 분리이다. 두 문장의 대우를 함께 쓰면, 분리가 없는 것은 정확히 열린집합이면서 닫힌집합인 부분집합이 $\emptyset$과 $X$뿐일 때이다.

마지막 문장. $(U, V)$가 분리이면 위에서 본 대로 $U$와 $V$는 닫힌집합이므로 닫힌집합판의 조건을 만족한다. 거꾸로 $U$, $V$가 닫힌집합이고 $U \ne \emptyset$, $V \ne \emptyset$, $U \cap V = \emptyset$, $U \cup V = X$이면, 첫 문단의 계산($U$, $V$가 $X$의 부분집합이고 $U \cap V = \emptyset$, $U \cup V = X$라는 것만 썼고, 닫힌집합도 $X$의 부분집합이다)으로 $V = X - U$이고 $U = X - V$이다. $V$가 닫힌집합이므로 $U = X - V$는 닫힌집합 (5)에 의해 열린집합이고, 같은 방식으로 $V = X - U$도 열린집합이다. 따라서 $(U, V)$는 분리이다.

**(2).** 먼저 $A$가 연결 부분집합이 아니라 하자. $(A, \mathcal{T}|_A)$의 분리 $(P, Q)$가 있다. $P$, $Q \in \mathcal{T}|_A$이므로 부분공간 위상의 정의에 의해 $P = U \cap A$, $Q = V \cap A$인 $U$, $V \in \mathcal{T}$가 있다. 그러면 $A = P \cup Q \subseteq U \cup V$이고, $U \cap V \cap A = (U \cap A) \cap (V \cap A) = P \cap Q = \emptyset$이며, $U \cap A = P \ne \emptyset$, $V \cap A = Q \ne \emptyset$이다.

거꾸로 $X$의 열린집합 $U$, $V$가 네 조건을 만족한다고 하자. $P = U \cap A$, $Q = V \cap A$로 두면 부분공간 위상의 정의에 의해 $P$, $Q \in \mathcal{T}|_A$이다. $P \ne \emptyset$, $Q \ne \emptyset$은 가정이고, $P \cap Q = U \cap V \cap A = \emptyset$이다. $A \subseteq U \cup V$이므로 $P \cup Q = (U \cup V) \cap A = A$이다. 따라서 $(P, Q)$는 $(A, \mathcal{T}|_A)$의 분리이고 $A$는 연결 부분집합이 아니다. 이것이 둘째 문장이기도 하다.

예. $\mathcal{T} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$는 [[topology-examples]]의 (8)의 (ii)에 의해 $X$ 위의 위상이다. $U = \{1, 2\}$, $V = \{2, 3\}$으로 두면 $A = \{1, 3\} \subseteq U \cup V = X$이고, $U \cap V = \{2\}$이므로 $U \cap V \cap A = \emptyset$이며, $U \cap A = \{1\} \ne \emptyset$, $V \cap A = \{3\} \ne \emptyset$이다($1$, $2$, $3$은 서로 다른 정수이다). 따라서 $A$는 연결 부분집합이 아니다. $\mathcal{T}$의 원소 가운데 $\emptyset$과 $\{2\}$는 $A$와 만나지 않고, 나머지 $\{1, 2\}$, $\{2, 3\}$, $X$는 모두 $2$를 원소로 갖는다. 그러므로 $U \cap A \ne \emptyset$, $V \cap A \ne \emptyset$인 $U$, $V \in \mathcal{T}$는 둘 다 $2$를 원소로 갖고 $2 \in U \cap V$이다.

**(3).** [[subspace-topology]]의 (4)에 의해 $(\mathcal{T}|_Y)|_A = \mathcal{T}|_A$이다. $A$가 $(Y, \mathcal{T}|_Y)$의 연결 부분집합인 것은 정의에 의해 $(A, (\mathcal{T}|_Y)|_A)$가 연결공간일 때이고, 이 위상공간은 $(A, \mathcal{T}|_A)$와 같다. 그리고 $(A, \mathcal{T}|_A)$가 연결공간인 것이 곧 $A$가 $X$의 연결 부분집합이라는 것이다. 둘째 문장은 [[subspace-topology]]의 (7)의 (i) $\mathcal{T}|_X = \mathcal{T}$에서 나온다. $X$가 자신의 연결 부분집합인 것은 $(X, \mathcal{T}|_X) = (X, \mathcal{T})$가 연결공간일 때이다.

**(4).** (i) $C \subseteq U$가 아니고 $C \subseteq V$도 아니라고 하자. $C \subseteq U$가 아니므로 $c \notin U$인 $c \in C$가 있다. $C \subseteq U \cup V$이므로 $c \in V$이고, $V \cap C \ne \emptyset$이다. 같은 방식으로 $C \subseteq V$가 아니므로 $c' \notin V$인 $c' \in C$가 있고, $c' \in U$이므로 $U \cap C \ne \emptyset$이다. 그러면 $U$, $V$는 $C$에 대하여 (2)의 네 조건을 모두 만족하므로 (2)에 의해 $C$는 연결 부분집합이 아니다. 이것은 가정에 어긋나므로 $C \subseteq U$이거나 $C \subseteq V$이다.

(ii) $C \subseteq X = U \cup V$이고 $U \cap V \cap C \subseteq U \cap V = \emptyset$이므로 (i)을 쓴다. 분리 $(U, V)$는 $U \cap V = \emptyset$, $U \cup V = X$인 열린집합의 순서쌍이다.

**(5).** (i) $(U, V)$가 $X$의 분리라고 하자. $U \ne \emptyset$, $V \ne \emptyset$이므로 $u \in U$와 $v \in V$가 있다. $X$에 서로 다른 두 점이 없으므로 $u = v$이고, $u \in U \cap V = \emptyset$이 되어 모순이다. 따라서 분리가 없고 $(X, \mathcal{T})$는 연결공간이다. $X = \emptyset$이면 점이 없고, $X = \{p\}$이면 $X$의 점은 모두 $p$이므로 어느 쪽도 서로 다른 두 점이 없다. 끝으로 $A = \emptyset$이거나 $A = \{p\}$($p \in X$)이면 $A$에 서로 다른 두 점이 없으므로, 앞 문장을 위상공간 $(A, \mathcal{T}|_A)$에 쓰면 이것은 연결공간이고 $A$는 $X$의 연결 부분집합이다.

(ii) $\mathcal{T} = \{\emptyset, X\}$이고 $(U, V)$가 분리라고 하자. $U$, $V$는 $\mathcal{T}$의 원소이고 공집합이 아니므로 $U = V = X$이다. $U \ne \emptyset$이므로 $X \ne \emptyset$이고, $U \cap V = X \ne \emptyset$이 되어 모순이다. 따라서 분리가 없다.

(iii) $\mathcal{T} = \mathscr{P}(X)$이고 $A \subseteq X$라 하자. [[subspace-topology]]의 (7)의 (iv)에 의해 $\mathcal{T}|_A = \mathscr{P}(A)$이다. $A$에 서로 다른 두 점이 없으면 (i)에 의해 $A$는 연결 부분집합이다. $A$에 서로 다른 두 점 $a$, $b$가 있으면 $\{a\} \in \mathscr{P}(A)$이고 $A - \{a\} \in \mathscr{P}(A)$이므로 $\{a\}$는 $(A, \mathscr{P}(A))$에서 열린집합이면서 닫힌집합이다. $a \in \{a\}$이므로 $\{a\} \ne \emptyset$이고, $b \in A$, $b \notin \{a\}$이므로 $\{a\} \ne A$이다. (1)에 의해 $(A, \mathscr{P}(A))$는 연결공간이 아니고 $A$는 연결 부분집합이 아니다. 마지막 문장은 $A = X$로 두고 (3)의 둘째 문장을 쓴 것이다.

(iv) $U = \{x \in \mathbb{R} : x < 0\}$으로 둔다. [[lower-limit-topology]]의 (3)에 의해 $U$는 $\mathbb{R}_l$에서 열린집합이면서 닫힌집합이다. [[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0$이므로 $-1 \in U$이고 $U \ne \emptyset$이다. [[real-order-axioms]]의 (W1)에 의해 $0 < 0$은 성립하지 않으므로 $0 \notin U$이고 $U \ne \mathbb{R}$이다. (1)에 의해 $\mathbb{R}_l$은 연결공간이 아니다.

(v) 먼저 $\mathbb{Q}$. [[open-and-closed-sets-of-reals]]의 (6)의 (i)을 $0 < 1$([[order-properties-of-reals]]의 (5)의 (ii))에 쓰면 $0 < z < 1$인 무리수 $z$가 있다. $U = \{x \in \mathbb{R} : x < z\}$, $V = \{x \in \mathbb{R} : z < x\}$로 두면 [[open-and-closed-sets-of-reals]]의 (1)에 의해 이 둘은 보통 거리에서 열린집합이고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상에서 열린집합이다. $q \in \mathbb{Q}$이면 $z$는 유리수가 아니므로 $q \ne z$이고, (W1)에 의해 $q < z$이거나 $z < q$이다. 곧 $\mathbb{Q} \subseteq U \cup V$이다. $x \in U \cap V$이면 $x < z$이고 $z < x$이어서 (W1)에 어긋나므로 $U \cap V = \emptyset$이고, 특히 $U \cap V \cap \mathbb{Q} = \emptyset$이다. [[real-number-arithmetic]]의 (K4), (K9)와 (K8)의 (iii)에 의해 $0 = 0 \cdot 1^{-1}$, $1 = 1 \cdot 1^{-1}$이므로 [[rational-and-irrational-numbers]]의 정의에 의해 $0$과 $1$은 유리수이다. $0 < z$이고 $z < 1$이므로 $0 \in U \cap \mathbb{Q}$이고 $1 \in V \cap \mathbb{Q}$이다. (2)에 의해 $\mathbb{Q}$는 연결 부분집합이 아니다.

다음으로 $\mathbb{Z}$. [[metric-subspace-topology]]의 (4)의 (i)에 의해 $\mathbb{Z}$에 준 부분공간 위상은 $\mathscr{P}(\mathbb{Z})$이다. (K4)에 의해 $0 \ne 1$이고 $0$, $1 \in \mathbb{Z}$이므로 $\mathbb{Z}$에는 서로 다른 두 점이 있다. (iii)의 마지막 문장에 의해 $(\mathbb{Z}, \mathscr{P}(\mathbb{Z}))$는 연결공간이 아니고, 따라서 $\mathbb{Z}$는 $\mathbb{R}$의 연결 부분집합이 아니다.

**(6).** $(U, V)$가 $(X, \mathcal{T})$의 분리이면 $U$, $V \in \mathcal{T} \subseteq \mathcal{T}'$이므로 $(U, V)$는 $(X, \mathcal{T}')$의 분리이기도 하다(나머지 조건은 위상과 상관없다). 따라서 $(X, \mathcal{T}')$에 분리가 없으면 $(X, \mathcal{T})$에도 분리가 없다. 마지막 문장은 그 대우이다.

**(7).** 먼저 "$X$에 분리가 있으면 $Y$에도 분리가 있다"를 보인다. $(U, V)$가 $X$의 분리라 하자. [[homeomorphism]]의 (2)의 (i)에 의해 [[image-and-preimage|상]] $f(U)$, $f(V)$는 $Y$에서 열린집합이다. $u \in U$이면 $f(u) \in f(U)$이므로 $f(U) \ne \emptyset$이고, 같은 방식으로 $f(V) \ne \emptyset$이다. [[preimage-and-set-operations]]의 (1)의 (ii)에 의해 $f(U) \cup f(V) = f(U \cup V) = f(X)$이고, $f$가 [[injective-surjective-bijective|전사]]이므로 $f(X) = Y$이다($y \in Y$이면 $f(x) = y$인 $x \in X$가 있다). $z \in f(U) \cap f(V)$라면 $z = f(u) = f(v)$인 $u \in U$, $v \in V$가 있고, $f$가 단사이므로 $u = v \in U \cap V = \emptyset$이 되어 모순이다. 따라서 $f(U) \cap f(V) = \emptyset$이고 $(f(U), f(V))$는 $Y$의 분리이다. 대우를 취하면 $Y$가 연결공간이면 $X$도 연결공간이다.

[[homeomorphism]]의 (3)의 (ii)에 의해 역함수 $f^{-1} : Y \to X$도 위상동형사상이므로, 앞 문단을 $f^{-1}$에 쓰면 $X$가 연결공간이면 $Y$도 연결공간이다.

둘째 문장. $A \subseteq X$이면 [[subspace-and-continuity]]의 (5)에 의해 $f|_A$를 $A$에서 $f(A)$로의 함수로 본 것은 위상동형사상이다. 여기서 $A$와 $f(A)$에는 부분공간 위상을 준다. 첫 문장을 이 위상동형사상에 쓰면, $(A, \mathcal{T}|_A)$가 연결공간인 것은 정확히 $(f(A), \mathcal{T}_Y|_{f(A)})$가 연결공간일 때이다.
:::

## 예시와 반례

:::example[원소 둘인 집합 위의 네 위상]
$a \ne b$이고 $X = \{a, b\}$라 합시다. [[topology-examples]]의 (7)에 의해 $X$ 위의 위상은 $\{\emptyset, X\}$, $\{\emptyset, \{a\}, X\}$, $\{\emptyset, \{b\}, X\}$, $\mathscr{P}(X)$의 넷뿐입니다. (5)의 (ii)에 의해 밀착위상은 연결이고, (5)의 (iii)에 의해 이산위상은 연결이 아닙니다.

$\mathcal{T} = \{\emptyset, \{a\}, X\}$에서 열린집합은 $\emptyset$, $\{a\}$, $X$이고, 닫힌집합은 그 여집합 $X$, $\{b\}$, $\emptyset$입니다. 둘 다인 것은 $\emptyset$과 $X$뿐이므로 (1)에 의해 연결공간입니다. $a$와 $b$의 자리를 바꾸면 $\{\emptyset, \{b\}, X\}$도 연결입니다. 그래서 원소 둘인 집합 위의 네 위상 가운데 연결이 아닌 것은 이산위상 하나입니다.
:::

:::example[두 조각으로 된 실수의 부분집합]
$\mathbb{R}$에 보통 위상을 주고 $Y = [0, 1] \cup [2, 3]$이라 합시다([[interval]]의 기호). [[order-properties-of-reals]]의 (8)을 $1 < 2$에 쓰면 $z = (1 + 2)/2$는 $1 < z < 2$를 만족합니다. $U = \{x \in \mathbb{R} : x < z\}$와 $V = \{x \in \mathbb{R} : z < x\}$는 (5)의 (v)의 증명에서와 같이 보통 위상에서 열린집합이고 $U \cap V = \emptyset$입니다.

$Y \subseteq U \cup V$임을 봅니다. $t \in [0, 1]$이면 $t \le 1 < z$이므로 $t \in U$이고, $t \in [2, 3]$이면 $z < 2 \le t$이므로 $t \in V$입니다([[order-properties-of-reals]]의 (1)의 (v)). $0 \in U \cap Y$이고 $2 \in V \cap Y$입니다. 따라서 (2)에 의해 $Y$는 연결 부분집합이 아니고, $(U \cap Y, V \cap Y)$가 $Y$의 분리입니다. 방금 본 계산에서 $[0, 1] \subseteq U$, $[2, 3] \subseteq V$이고 $U \cap V = \emptyset$이므로, 이 분리는 $([0, 1], [2, 3])$입니다. $Y$가 빠뜨린 점 $z$가 $Y$를 두 쪽으로 가르는 셈입니다.
:::

:::example[무한집합 위의 여유한 위상]
$X$가 무한집합이고 $\mathcal{T}_{\mathrm{cof}}$가 $X$ 위의 여유한 위상([[hausdorff-space]]의 (5))이라 합시다. $(X, \mathcal{T}_{\mathrm{cof}})$는 연결공간입니다. 분리 $(U, V)$가 있다고 해 봅시다. $U$, $V$는 공집합이 아닌 열린집합이므로 여유한 위상의 정의에 의해 $X - U$와 $X - V$는 유한집합입니다. $X$를 전체집합으로 보아 [[de-morgan-laws-sets|드 모르간 법칙]]을 쓰면 $X - (U \cap V) = (X - U) \cup (X - V)$이고, [[disjoint-union-count]]의 (3)에 의해 이것은 유한집합입니다. 그런데 $U \cap V = \emptyset$이므로 이 집합은 $X - \emptyset = X$이고, $X$가 무한집합이라는 것에 어긋납니다.

[[hausdorff-space]]의 (5)에 의해 이 공간은 $T_1$ 공간이어서 한 점 집합이 모두 닫혀 있습니다. 그래도 공집합이 아닌 두 열린집합이 반드시 겹치므로 나눌 수가 없습니다. 한 점 집합이 모두 닫혀 있어도 공간이 연결일 수 있습니다.
:::

:::counterexample[연결공간의 부분집합이 연결이 아닌 예]
(2)의 세 점 공간 $X = \{1, 2, 3\}$, $\mathcal{T} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 다시 봅니다. 닫힌집합은 열린집합의 여집합 $X$, $\{1, 3\}$, $\{3\}$, $\{1\}$, $\emptyset$입니다. 열린집합이면서 닫힌집합인 것은 $\emptyset$과 $X$뿐이므로 (1)에 의해 $X$는 연결공간입니다.

그런데 (2)에서 본 대로 부분집합 $A = \{1, 3\}$은 연결 부분집합이 아닙니다. 연결공간의 부분집합은 연결이 아닐 수 있습니다. 부분집합의 연결은 부분공간 위상으로 따지는데, $A$의 부분공간 위상은 $\{\emptyset, \{1\}, \{3\}, A\}$로 $A$ 위의 이산위상이기 때문입니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{1\}, \{1, 2\}, X\}$를 주면 $X$는 연결공간인가? 부분집합 $\{1, 3\}$은 연결 부분집합인가?]
둘 다 연결입니다. 이 위상은 [[topology-examples]]의 (8)의 (i)입니다. 닫힌집합은 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$이고, 열린집합이면서 닫힌집합인 것은 $\emptyset$과 $X$뿐이므로 (1)에 의해 $X$는 연결공간입니다. $A = \{1, 3\}$의 부분공간 위상은 원소마다 $A$와의 교집합을 구한 $\{\emptyset, \{1\}, A\}$입니다($\{1, 2\} \cap A = \{1\}$). $A$에서 닫힌집합은 $A$, $\{3\}$, $\emptyset$이므로 둘 다인 것은 $\emptyset$과 $A$뿐이고, (1)에 의해 $A$는 연결 부분집합입니다.
:::

:::check[$\mathcal{T} \subseteq \mathcal{T}'$이고 $(X, \mathcal{T})$가 연결공간이면 $(X, \mathcal{T}')$도 연결공간인가?]
그렇다고 할 수 없습니다. $a \ne b$이고 $X = \{a, b\}$일 때 $\mathcal{T} = \{\emptyset, X\}$, $\mathcal{T}' = \mathscr{P}(X)$이면 $\mathcal{T} \subseteq \mathcal{T}'$이고, (5)의 (ii)에 의해 $(X, \mathcal{T})$는 연결이지만 (5)의 (iii)에 의해 $(X, \mathcal{T}')$는 연결이 아닙니다. (6)이 말하는 방향은 섬세한 쪽에서 거친 쪽으로뿐입니다.
:::
