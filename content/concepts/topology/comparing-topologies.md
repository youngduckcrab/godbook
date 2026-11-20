---
title: 위상의 비교
title_en: Comparing Topologies
aliases: [섬세한 위상, 거친 위상, finer topology, coarser topology, 더 섬세하다, 더 거칠다, 비교할 수 있는 위상, comparable topologies]
kind: definition
field: topology
msc: ["54A10"]
level: undergrad
summary: 같은 집합 위의 두 위상 가운데 하나가 다른 하나를 포함하면 큰 쪽이 더 섬세하고 작은 쪽이 더 거칠다고 한다. 열린집합과 닫힌집합으로 바꿔 말하기, 밀착위상이 가장 거칠고 이산위상이 가장 섬세하다는 것, 비교할 수 없는 두 위상, 실수의 보통 거리와 이산 거리의 거리위상을 비교한다.
requires: [set, subset, power-set, set-operations, topological-space, topology-examples, closed-set, metric-space-examples, open-set-in-metric-space]
sources:
  - ref: fuglede-basic-topology
    loc: "Definitions and first examples 절의 finer·coarser 의 정의와 그 뒤의 예, content/topological-spaces.tex:38–43"
    checked: original
    note: "정의는 출처(38–40)와 같다. 출처는 𝒯 ⊆ 𝒯′ 이면 𝒯 가 𝒯′ 보다 coarser, 𝒯′ 가 𝒯 보다 finer 라 하고, 진부분집합이면 strictly coarser, strictly finer, 어느 한쪽이 다른 쪽에 포함되면 comparable 이라 한다. 이 사이트는 진부분집합 기호를 쓰지 않고 '𝒯 ⊆ 𝒯′ 이고 𝒯 ≠ 𝒯′' 로 쓰며, finer 를 '섬세하다', coarser 를 '거칠다'로 옮긴다. (4)는 출처의 예(41–43)와 같다. 출처는 원소 둘인 집합 위의 𝒯₂ = {∅, {a}, X} 가 𝒯₄ = 𝒫(X) 보다 strictly coarser 이고 𝒯₂ 와 𝒯₃ = {∅, {b}, X} 는 비교할 수 없으며 밀착위상은 이산위상보다 늘 coarser 라고 적는다. (3)의 앞 문장은 그 마지막 문장과 같은 내용을 모든 위상으로 넓힌 것이다. 확인 질문 '{∅, {a}, X} 와 비교할 수 있는 위상'은 출처의 이 예와 같은 대상을 묻는다. 예시 '세 점 위의 사슬'의 위상은 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 것이다. 반례 '원소가 더 많은 위상이 더 섬세하지 않을 수 있다'의 두 위상도 같은 연습문제 1.2 의 답에 드는 것이다."
  - ref: lebl-basic-analysis
    loc: "7.1절, Example 7.1.7 (p.259), Definition 7.1.12 뒤 문단 (p.261); 7.2.1절 Example 7.2.5 (p.265)"
    checked: original
    note: "(5)의 ℝ 위의 이산 거리는 출처 Example 7.1.7(p.259, 실수처럼 무한집합에 이산 거리를 주는 경우)과 Definition 7.1.12 뒤 문단(p.261)이 말하는 실수 위의 이산 거리와 같은 대상이고, 보통 거리에서 {0} 이 열려 있지 않다는 것은 출처 Example 7.2.5(p.265)가 적는 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예·증명 속 사실을 근거로 삼은 반례 2건과 경계 경우의 직관 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상과 열린집합은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 이산위상, 밀착위상, 거리위상은 [[topology-examples]]의 것이다. 아래에서 $X$는 집합이고 $\mathcal{T}$, $\mathcal{T}'$, $\mathcal{T}''$는 $X$ 위의 위상이다.

**섬세하다, 거칠다.** $\mathcal{T} \subseteq \mathcal{T}'$일 때 "$\mathcal{T}'$은 $\mathcal{T}$보다 **섬세하다**(finer)", "$\mathcal{T}$는 $\mathcal{T}'$보다 **거칠다**(coarser)"고 한다. 곧 $\mathcal{T}'$이 $\mathcal{T}$보다 섬세한 것과 $\mathcal{T}$가 $\mathcal{T}'$보다 거친 것은 모두 정확히 $\mathcal{T} \subseteq \mathcal{T}'$일 때이다. 이 말은 두 위상이 같은 경우를 포함한다. $\mathcal{T} \subseteq \mathcal{T}'$이고 $\mathcal{T} \ne \mathcal{T}'$일 때 "$\mathcal{T}'$은 $\mathcal{T}$보다 **진짜로 더 섬세하다**(strictly finer)", "$\mathcal{T}$는 $\mathcal{T}'$보다 진짜로 더 거칠다(strictly coarser)"고 한다. $\mathcal{T} \subseteq \mathcal{T}'$이거나 $\mathcal{T}' \subseteq \mathcal{T}$이면 두 위상을 **비교할 수 있다**(comparable)고 하고, 둘 다 아니면 비교할 수 없다고 한다.

다음이 성립한다.

1. $\mathcal{T}$는 $\mathcal{T}$ 자신보다 섬세하다. $\mathcal{T}'$이 $\mathcal{T}$보다 섬세하고 $\mathcal{T}''$이 $\mathcal{T}'$보다 섬세하면 $\mathcal{T}''$은 $\mathcal{T}$보다 섬세하다. $\mathcal{T}'$이 $\mathcal{T}$보다 섬세하고 $\mathcal{T}$가 $\mathcal{T}'$보다 섬세하면 $\mathcal{T} = \mathcal{T}'$이다.
2. (열린집합과 닫힌집합으로) $\mathcal{T}'$이 $\mathcal{T}$보다 섬세한 것은 정확히 $(X, \mathcal{T})$의 모든 열린집합이 $(X, \mathcal{T}')$에서 열린집합일 때이고, 또 정확히 $(X, \mathcal{T})$의 모든 닫힌집합이 $(X, \mathcal{T}')$에서 닫힌집합일 때이다.
3. (가장 거친 위상과 가장 섬세한 위상) $\{\emptyset, X\} \subseteq \mathcal{T} \subseteq \mathscr{P}(X)$이다. 곧 밀착위상은 $X$ 위의 모든 위상보다 거칠고, 이산위상은 $X$ 위의 모든 위상보다 섬세하다. $X$에 서로 다른 두 점이 있으면 이산위상은 밀착위상보다 진짜로 더 섬세하다.
4. (비교할 수 없는 두 위상) $a \ne b$이고 $X = \{a, b\}$이면 $\{\emptyset, \{a\}, X\}$와 $\{\emptyset, \{b\}, X\}$는 비교할 수 없다. 두 위상은 모두 이산위상보다 진짜로 더 거칠고 밀착위상보다 진짜로 더 섬세하다.
5. (실수 위의 두 거리위상) $\mathbb{R}$ 위의 이산 거리의 거리위상은 보통 거리의 거리위상보다 진짜로 더 섬세하다.
:::

:::english
Topologies and open sets are as in the entry on topological spaces, closed sets are as in the entry on closed sets, and the discrete, indiscrete and metric topologies are as in the entry on examples of topologies. Throughout, $X$ is a set and $\mathcal{T}$, $\mathcal{T}'$, $\mathcal{T}''$ are topologies on $X$.

**Finer and coarser.** When $\mathcal{T} \subseteq \mathcal{T}'$, we say that "$\mathcal{T}'$ is **finer** than $\mathcal{T}$" and "$\mathcal{T}$ is **coarser** than $\mathcal{T}'$". That is, $\mathcal{T}'$ is finer than $\mathcal{T}$, and $\mathcal{T}$ is coarser than $\mathcal{T}'$, each exactly when $\mathcal{T} \subseteq \mathcal{T}'$. This includes the case where the two topologies are equal. When $\mathcal{T} \subseteq \mathcal{T}'$ and $\mathcal{T} \ne \mathcal{T}'$, we say that "$\mathcal{T}'$ is **strictly finer** than $\mathcal{T}$" and "$\mathcal{T}$ is strictly coarser than $\mathcal{T}'$". If $\mathcal{T} \subseteq \mathcal{T}'$ or $\mathcal{T}' \subseteq \mathcal{T}$, the two topologies are called **comparable**; if neither holds, they are called not comparable.

The following hold.

1. $\mathcal{T}$ is finer than itself. If $\mathcal{T}'$ is finer than $\mathcal{T}$ and $\mathcal{T}''$ is finer than $\mathcal{T}'$, then $\mathcal{T}''$ is finer than $\mathcal{T}$. If $\mathcal{T}'$ is finer than $\mathcal{T}$ and $\mathcal{T}$ is finer than $\mathcal{T}'$, then $\mathcal{T} = \mathcal{T}'$.
2. (In terms of open and closed sets) $\mathcal{T}'$ is finer than $\mathcal{T}$ exactly when every open set of $(X, \mathcal{T})$ is open in $(X, \mathcal{T}')$, and also exactly when every closed set of $(X, \mathcal{T})$ is closed in $(X, \mathcal{T}')$.
3. (The coarsest and the finest topology) $\{\emptyset, X\} \subseteq \mathcal{T} \subseteq \mathscr{P}(X)$. That is, the indiscrete topology is coarser than every topology on $X$, and the discrete topology is finer than every topology on $X$. If $X$ has two distinct points, then the discrete topology is strictly finer than the indiscrete topology.
4. (Two topologies that are not comparable) If $a \ne b$ and $X = \{a, b\}$, then $\{\emptyset, \{a\}, X\}$ and $\{\emptyset, \{b\}, X\}$ are not comparable. Both are strictly coarser than the discrete topology and strictly finer than the indiscrete topology.
5. (Two metric topologies on the reals) The metric topology of the discrete metric on $\mathbb{R}$ is strictly finer than the metric topology of the standard metric.
:::

## 직관

위상이 섬세할수록 열린집합이 많습니다. 열린집합 하나하나를 "점들을 가를 수 있는 칸막이"로 생각하면, 섬세한 위상은 칸막이가 촘촘해서 점들을 더 잘게 나누고, 거친 위상은 칸막이가 성겨서 점들을 덩어리로 봅니다. 가장 촘촘한 것이 모든 부분집합을 칸막이로 쓰는 이산위상이고, 가장 성긴 것이 $\emptyset$과 $X$만 쓰는 밀착위상입니다((3)). 비유에서 "칸막이가 더 촘촘하다"는 것이 정의의 $\mathcal{T} \subseteq \mathcal{T}'$, 곧 "거친 쪽의 칸막이가 모두 섬세한 쪽에도 있다"에 해당합니다.

섬세하다와 거칠다는 "이쪽 목록이 저쪽 목록에 다 들어 있다"는 포함 관계일 뿐이므로, 두 위상이 늘 어느 한쪽으로 비교되는 것은 아닙니다. (4)의 두 위상은 서로 상대에게 없는 열린집합을 하나씩 가지고 있습니다.

## 성질의 증명

:::proof
[[subset]]의 정의에 의해 집합 $P$에 대하여 $P \subseteq P$이고, $P \subseteq Q$, $Q \subseteq R$이면 $P \subseteq R$이다($x \in P$이면 $x \in Q$이고 $x \in R$이다). 두 집합은 서로 포함하면 같다([[set]]).

**(1).** 위의 세 사실을 $\mathcal{T}$, $\mathcal{T}'$, $\mathcal{T}''$에 쓴 것이다.

**(2).** 열린집합은 위상의 원소이므로 앞 문장은 $\mathcal{T} \subseteq \mathcal{T}'$를 바꿔 말한 것이다. 닫힌집합에 대하여: $\mathcal{T} \subseteq \mathcal{T}'$이고 $F$가 $(X, \mathcal{T})$에서 닫힌집합이면 $X - F \in \mathcal{T} \subseteq \mathcal{T}'$이므로 $F$는 $(X, \mathcal{T}')$에서 닫힌집합이다. 거꾸로 $(X, \mathcal{T})$의 모든 닫힌집합이 $(X, \mathcal{T}')$에서 닫힌집합이라 하고 $U \in \mathcal{T}$라 하자. [[closed-set]]의 (5)에 의해 $X - U$는 $(X, \mathcal{T})$에서 닫힌집합이므로 $(X, \mathcal{T}')$에서도 닫힌집합이고, 같은 (5)를 $\mathcal{T}'$에 쓰면 $U$는 $(X, \mathcal{T}')$에서 열린집합이다. 곧 $\mathcal{T} \subseteq \mathcal{T}'$이다.

**(3).** 조건 (i)([[topological-space]])에 의해 $\emptyset \in \mathcal{T}$이고 $X \in \mathcal{T}$이므로 $\{\emptyset, X\} \subseteq \mathcal{T}$이다. 위상의 정의에서 $\mathcal{T} \subseteq \mathscr{P}(X)$이다. [[topology-examples]]의 (1), (2)에 의해 $\mathscr{P}(X)$와 $\{\emptyset, X\}$는 위상이므로 둘째 문장이 나온다. $X$에 서로 다른 두 점이 있으면 [[topology-examples]]의 (3)에 의해 $\{\emptyset, X\} \ne \mathscr{P}(X)$이다.

**(4).** $\mathcal{T}_a = \{\emptyset, \{a\}, X\}$, $\mathcal{T}_b = \{\emptyset, \{b\}, X\}$라 하자. [[topology-examples]]의 (7)에 의해 둘 다 위상이다. $b \notin \{a\}$이고 $a \in \{a\}$이므로 $\{a\}$는 $\emptyset$과도, $X$와도, $\{b\}$와도 다르고(마지막은 $a \notin \{b\}$이기 때문이다), $\{a\} \notin \mathcal{T}_b$이다. 곧 $\mathcal{T}_a \subseteq \mathcal{T}_b$가 아니다. 같은 까닭으로 $\{b\}$는 $\emptyset$, $X$, $\{a\}$와 다르므로 $\{b\} \notin \mathcal{T}_a$이고 $\mathcal{T}_b \subseteq \mathcal{T}_a$가 아니다. 따라서 둘은 비교할 수 없다. (3)에 의해 $\{\emptyset, X\} \subseteq \mathcal{T}_a \subseteq \mathscr{P}(X)$이다. $\{a\} \in \mathcal{T}_a$이고 $\{a\} \notin \{\emptyset, X\}$이므로 $\mathcal{T}_a \ne \{\emptyset, X\}$이고, $\{b\} \in \mathscr{P}(X)$이고 $\{b\} \notin \mathcal{T}_a$이므로 $\mathcal{T}_a \ne \mathscr{P}(X)$이다. $\mathcal{T}_b$에 대해서도 $\{b\} \in \mathcal{T}_b$, $\{b\} \notin \{\emptyset, X\}$와 $\{a\} \in \mathscr{P}(X)$, $\{a\} \notin \mathcal{T}_b$로 같은 결론을 얻는다.

**(5).** $\mathbb{R}$ 위의 이산 거리 $e$와 보통 거리 $d$([[metric-space-examples]]의 (2), (1))의 거리위상을 $\mathcal{T}_e$, $\mathcal{T}_d$라 하자. [[topology-examples]]의 (5)에 의해 $\mathcal{T}_e = \mathscr{P}(\mathbb{R})$이고, (3)에 의해 $\mathcal{T}_d \subseteq \mathscr{P}(\mathbb{R}) = \mathcal{T}_e$이다. 한편 $\{0\} \in \mathscr{P}(\mathbb{R}) = \mathcal{T}_e$이지만, [[open-set-in-metric-space]]의 (6)에 의해 $\{0\}$은 $(\mathbb{R}, d)$에서 열린집합이 아니므로 [[topology-examples]]의 (4)에 의해 $\{0\} \notin \mathcal{T}_d$이다. 따라서 $\mathcal{T}_d \ne \mathcal{T}_e$이다.
:::

## 예시와 반례

:::example[세 점 위의 사슬]
$X = \{1, 2, 3\}$ 위의 세 위상
$$
\mathcal{T}_1 = \{\emptyset, X\}, \qquad \mathcal{T}_2 = \{\emptyset, \{1\}, \{1, 2\}, X\}, \qquad \mathcal{T}_3 = \mathscr{P}(X)
$$
를 봅니다. $\mathcal{T}_2$가 위상이라는 것은 [[topology-examples]]의 (8)의 (i)입니다. (3)에 의해 $\mathcal{T}_1 \subseteq \mathcal{T}_2 \subseteq \mathcal{T}_3$이고, $\{1\} \in \mathcal{T}_2$, $\{1\} \notin \mathcal{T}_1$이며 $\{2\} \in \mathcal{T}_3$, $\{2\} \notin \mathcal{T}_2$이므로 두 포함은 모두 진짜입니다. $\mathcal{T}_2$는 밀착위상보다 진짜로 더 섬세하고 이산위상보다 진짜로 더 거칩니다.
:::

:::counterexample[원소가 더 많은 위상이 더 섬세하지 않을 수 있다]
$X = \{1, 2, 3\}$에서 $\mathcal{T} = \{\emptyset, \{1\}, X\}$와 [[topology-examples]]의 (8)의 (ii)의 위상 $\mathcal{T}' = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 봅니다. $\mathcal{T}$가 위상이라는 것은 [[topology-examples]]의 (9)를 $A = B = \{1\}$에 쓴 것입니다. $\mathcal{T}'$은 원소가 다섯이고 $\mathcal{T}$는 셋이지만, $\{1\} \in \mathcal{T}$이고 $\{1\} \notin \mathcal{T}'$이므로 $\mathcal{T}'$은 $\mathcal{T}$보다 섬세하지 않습니다. $\{2\} \in \mathcal{T}'$, $\{2\} \notin \mathcal{T}$이므로 거꾸로도 아니고, 두 위상은 비교할 수 없습니다.
:::

## 확인 질문

:::check[$X$ 위의 위상 $\mathcal{T}$가 밀착위상보다 섬세하면서 거칠면 $\mathcal{T}$는 무엇인가?]
(1)의 마지막 문장에 의해 $\mathcal{T} = \{\emptyset, X\}$, 곧 밀착위상 자신입니다.
:::

:::check[$X = \{a, b\}$ ($a \ne b$) 위의 위상 가운데 $\{\emptyset, \{a\}, X\}$와 비교할 수 있는 것은 어느 것인가?]
[[topology-examples]]의 (7)의 네 위상 가운데 밀착위상, $\{\emptyset, \{a\}, X\}$ 자신, 이산위상입니다. (3)에 의해 앞의 것과 뒤의 것은 비교할 수 있고, (4)에 의해 $\{\emptyset, \{b\}, X\}$와는 비교할 수 없습니다.
:::
