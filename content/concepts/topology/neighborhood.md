---
title: 근방
title_en: Neighborhood
aliases: [neighborhood, neighbourhood, 열린 근방, open neighborhood, 근방의 교집합]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 점 x 를 원소로 갖는 열린집합을 x 의 근방이라 한다. 전체는 근방이고, 두 근방의 교집합은 근방이며, 열린집합은 각 점의 근방을 품는 집합이고, 거리위상에서는 열린 공이 근방이고 모든 근방이 열린 공을 포함하며, 이산위상과 밀착위상의 근방이 무엇인지 보인다.
requires: [set, subset, set-operations, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, interval, topological-space, topology-examples]
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절, 경계의 정의 바로 앞 문장, content/topological-spaces.tex:575. Remark remark-def-open-balls, 235–244"
    checked: original
    note: "정의는 출처 575줄의 문장('U 가 열려 있고 x ∈ U 이면 U 를 점 x 의 neighbourhood 라 한다')과 같다. 출처는 이 문장을 정의 환경 없이 본문에 적는다. (3)은 topological-space 의 (3)의 (a)와 (b)가 같다는 것을 근방의 말로 다시 적은 것이고, 출처는 content/compactness.tex:49 에서 '모든 점이 그 집합 안에 든 열린 근방을 가짐을 보여 Aᶜ = Int Aᶜ 를 얻는 늘 쓰는 수법'이라고 부른다. (4)의 (b)는 출처 Remark remark-def-open-balls(235–244, 거리위상에서 열린 U 와 x ∈ U 에 대해 B_d(x, r) ⊆ U 인 r > 0 이 있다)를 근방의 말로 쓴 것이고, 출처는 717줄의 증명에서 그 Remark 를 'x 의 근방 U 에 대해 B_d(x, ε) ⊆ U 인 ε 이 있다'로 인용한다. 예시 '세 점 위의 위상에서의 근방'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 확인 질문 '두 점 위의 위상에서의 근방'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Definition 7.2.4 (p.264); 7.3.2절, Proposition 7.3.11 의 증명 (p.276)"
    checked: original
    note: "출처 Definition 7.2.4 의 끝(p.264)은 거리공간에서 x ∈ V 이고 V 가 열려 있으면 V 를 x 의 open neighborhood(때로는 그냥 neighborhood)라 부른다고 적는다. 이 항목은 이것을 위상공간에서 '근방'으로 쓴다. (4)의 (b)는 출처 Proposition 7.3.11 의 증명(p.276)이 'U 가 p 의 open neighborhood 이면 B(p, ε) ⊂ U 인 ε > 0 이 있다'로 쓰는 단계와 같고, 그 증명의 다른 방향은 B(p, ε) 를 p 의 neighborhood 로 쓴다((4)의 (a))."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(A = ∅, X = ∅, 밀착위상)에서 거짓이던 직관 문장 3건과 출처 메모의 주장 4건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간, 열린집합, 위상의 조건 (i)–(iii), 열린집합의 국소 판정은 [[topological-space]]의 것이고, 이산위상, 밀착위상, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이며, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $x$는 $X$의 점이다.

**근방.** $X$의 부분집합 $U$가 $x$의 **근방**(neighborhood)인 것은 정확히 $U$가 열린집합이고 $x \in U$일 때이다. 곧 이 사이트에서 근방은 늘 열린집합이다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서 $x$의 근방"이라 쓴다.

다음이 성립한다.

1. (전체) $X$는 $x$의 근방이다. $x$의 근방은 공집합이 아니다.
2. (두 근방의 교집합) $U$, $V$가 $x$의 근방이면 $U \cap V$는 $x$의 근방이다.
3. (열린집합의 국소 판정) $U \subseteq X$가 열린집합인 것은 정확히 $U$의 모든 점 $y$에 대하여 $V \subseteq U$인 $y$의 근방 $V$가 있을 때이다.
4. (거리위상의 근방) $(X, d)$가 거리공간이고 $\mathcal{T} = \mathcal{T}_d$라 하자.
   - (a) 모든 실수 $r > 0$에 대하여 $B(x, r)$는 $x$의 근방이다.
   - (b) $U$가 $x$의 근방이면 $B(x, r) \subseteq U$인 실수 $r > 0$이 있다.
5. (이산위상과 밀착위상의 근방) $\mathcal{T}$가 이산위상이면 $\{x\}$는 $x$의 근방이다. $\mathcal{T}$가 밀착위상이면 $x$의 근방은 $X$ 하나뿐이다.
:::

:::english
Topological spaces, open sets, the conditions (i)–(iii) for a topology and the local test for open sets are as in the entry on topological spaces; the discrete topology, the indiscrete topology and the metric topology $\mathcal{T}_d$ are as in the entry on examples of topologies; and the open ball $B(x, r)$ is as in the entry on open balls. Below, $(X, \mathcal{T})$ is a topological space and $x$ is a point of $X$.

**Neighborhoods.** A subset $U$ of $X$ is a **neighborhood** of $x$ exactly when $U$ is open and $x \in U$. Thus on this site a neighborhood is always an open set. When the topology must be named we say "a neighborhood of $x$ in $(X, \mathcal{T})$".

The following hold.

1. (The whole space) $X$ is a neighborhood of $x$. A neighborhood of $x$ is not empty.
2. (Intersection of two neighborhoods) If $U$ and $V$ are neighborhoods of $x$, then $U \cap V$ is a neighborhood of $x$.
3. (Local test for open sets) A subset $U \subseteq X$ is open exactly when for every point $y$ of $U$ there is a neighborhood $V$ of $y$ with $V \subseteq U$.
4. (Neighborhoods in a metric topology) Let $(X, d)$ be a metric space and $\mathcal{T} = \mathcal{T}_d$.
   - (a) For every real number $r > 0$, $B(x, r)$ is a neighborhood of $x$.
   - (b) If $U$ is a neighborhood of $x$, then there is a real number $r > 0$ with $B(x, r) \subseteq U$.
5. (Neighborhoods in the discrete and indiscrete topologies) If $\mathcal{T}$ is the discrete topology, then $\{x\}$ is a neighborhood of $x$. If $\mathcal{T}$ is the indiscrete topology, then $X$ is the only neighborhood of $x$.
:::

## 직관

근방은 "$x$를 품은 열린집합"입니다. 위상공간에는 거리가 없어서 "$x$에서 가까운 점"을 수로 말할 수 없습니다. 그 대신 $x$를 원소로 갖는 열린집합 하나하나를 $x$ 둘레의 동네로 봅니다. 동네를 작게 잡을수록 $x$에 "가까운" 점만 남는다고 생각하는 것입니다.

비유하자면 위상 $\mathcal{T}$는 행정구역의 목록이고, $x$의 근방은 그 목록에 있는 구역 가운데 $x$가 사는 구역입니다. "목록에 있다"가 열린집합이라는 조건, "그 안에 산다"가 $x \in U$라는 조건에 맞습니다. 두 구역에 함께 산다면 겹친 부분도 목록에 있는 구역이고 $x$가 그 안에 산다는 것이 (2)입니다. 이 비유에서 구역이 작아질 수 있는 정도는 목록이 정합니다. 밀착위상처럼 목록이 빈약하면 $x$가 사는 구역은 전체 하나뿐입니다((5)).

거리위상에서는 근방과 열린 공이 서로를 품습니다. 모든 열린 공 $B(x, r)$는 $x$의 근방이고, $x$의 근방은 언제나 어떤 열린 공 $B(x, r)$를 포함합니다((4)). 그래서 거리공간에서 "모든 공에 대하여"로 쓴 조건은 "모든 근방에 대하여"로 바꾸어 쓸 수 있는 경우가 많습니다.

해석학 입문의 [[continuous-function|연속함수]] 항목은 (7)과 (8)의 제목에서 "$c$를 포함하는 근방"이라는 말을 정의 없이 썼습니다. 그 말이 가리킨 집합은 $\{x \in S : |x - c| < \delta\}$였고, $S = \mathbb{R}$이면 이것은 보통 거리의 열린 공 $B(c, \delta)$이므로 (4)에 의해 이 항목의 뜻으로도 $c$의 근방입니다. $S$가 $\mathbb{R}$가 아니면 이 집합이 $\mathbb{R}$에서 열린집합이 아닐 수 있으므로, 그 제목의 "근방"은 이 항목의 근방과 꼭 같은 말은 아닙니다. 해석학 입문의 정의된 말 "$c$ 가까이에서 성립한다"는 $c$를 뺀 꼴이어서 이것과 다른 말입니다.

## 성질의 증명

:::proof
**(1).** 조건 (i)에 의해 $X \in \mathcal{T}$이고, $x$는 $X$의 점이므로 $x \in X$이다. 따라서 $X$는 $x$의 근방이다. $U$가 $x$의 근방이면 $x \in U$이므로 $U$는 원소를 가지며 공집합이 아니다.

**(2).** $U$, $V$가 $x$의 근방이면 $U$, $V$는 열린집합이므로 조건 (iii)에 의해 $U \cap V$는 열린집합이다. $x \in U$이고 $x \in V$이므로 [[set-operations|교집합]]의 정의에 의해 $x \in U \cap V$이다. 따라서 $U \cap V$는 $x$의 근방이다.

**(3).** [[topological-space]]의 (3)에 의해 $U$가 열린집합인 것은 정확히 그 (b), 곧 "$U$의 모든 점 $y$에 대하여 $y \in V$이고 $V \subseteq U$인 열린집합 $V$가 있다"가 성립할 때이다. 근방의 정의에 의해 "$y \in V$인 열린집합 $V$"는 "$y$의 근방 $V$"와 같은 말이므로, 그 (b)는 (3)의 조건과 같은 문장이다.

**(4).** $\mathcal{T} = \mathcal{T}_d$이다.

(a) [[topology-examples]]의 (4)에 의해 모든 열린 공 $B(x, r)$는 $\mathcal{T}_d$의 원소, 곧 열린집합이다. [[open-ball]]의 (1)에 의해 $x \in B(x, r)$이다. 따라서 $B(x, r)$는 $x$의 근방이다.

(b) $U$가 $x$의 근방이면 $U \in \mathcal{T}_d$이므로 [[topology-examples]]의 (4)에 의해 $U$는 $(X, d)$에서 열린집합이다. $x \in U$이므로 [[open-set-in-metric-space]]의 열린집합의 정의에 의해 $B(x, r) \subseteq U$인 실수 $r > 0$이 있다.

**(5).** $\mathcal{T}$가 이산위상 $\mathscr{P}(X)$이면, $x \in X$이므로 $\{x\} \subseteq X$이고 [[topology-examples]]의 (1)에 의해 $\{x\}$는 열린집합이다. $x \in \{x\}$이므로 $\{x\}$는 $x$의 근방이다.

$\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이면, $x$의 근방 $U$는 $\mathcal{T}$의 원소이므로 $U = \emptyset$이거나 $U = X$이다. (1)에 의해 $U \ne \emptyset$이므로 $U = X$이다. 거꾸로 (1)에 의해 $X$는 $x$의 근방이다. 따라서 $x$의 근방은 $X$ 하나뿐이다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서의 근방]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. 열린집합 가운데 $1$을 원소로 갖는 것은 $\{1\}$, $\{1, 2\}$, $X$이므로 이 셋이 $1$의 근방입니다. 같은 방식으로 $2$의 근방은 $\{1, 2\}$와 $X$이고, $3$의 근방은 $X$ 하나뿐입니다.

이 위상은 밀착위상이 아니지만, 점 $3$에서는 밀착위상에서처럼 근방이 전체 하나뿐입니다. 근방이 얼마나 작아질 수 있는지는 점마다 다를 수 있습니다. $1$의 두 근방 $\{1\}$과 $\{1, 2\}$의 교집합은 $\{1\}$이고, (2)대로 다시 $1$의 근방입니다.
:::

:::counterexample[공을 포함하지만 근방이 아닌 집합]
(4)의 (b)를 거꾸로 읽어 "$x$를 중심으로 하는 열린 공을 포함하면 근방이다"라고 할 수는 없습니다. $\mathbb{R}$에 보통 거리 $d$([[metric-space-examples]]의 (1))의 거리위상을 주고 닫힌구간 $[-1, 1]$을 봅시다. [[open-ball]]의 (5)에 의해 $B(0, 1)$은 열린구간 $(-1, 1)$이고, [[interval]]의 정의에 의해 $(-1, 1) \subseteq [-1, 1]$입니다. 그러나 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (4)에 의해 $[-1, 1]$은 $(\mathbb{R}, d)$에서 열린집합이 아니므로, [[topology-examples]]의 (4)에 의해 $\mathcal{T}_d$의 원소가 아닙니다. 따라서 $[-1, 1]$은 $0$의 근방이 아닙니다. 이 사이트의 근방은 열린집합이어야 합니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 $a$의 근방과 $b$의 근방은 각각 무엇인가?]
$a$를 원소로 갖는 열린집합은 $\{a\}$와 $X$이므로 $a$의 근방은 이 둘입니다. $b$를 원소로 갖는 열린집합은 $X$뿐이므로($b \notin \{a\}$) $b$의 근방은 $X$ 하나입니다.
:::

:::check[$\mathbb{R}$에 보통 거리의 거리위상을 줄 때 $\mathbb{R} - \{0\}$은 $1$의 근방인가? $0$의 근방인가?]
$1$의 근방입니다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)에 의해 $\{0\}$은 $(\mathbb{R}, d)$에서 닫힌집합이므로, [[open-set-in-metric-space]]의 닫힌집합의 정의에 의해 $\mathbb{R} - \{0\}$은 $(\mathbb{R}, d)$에서 열린집합이고, [[topology-examples]]의 (4)에 의해 거리위상의 열린집합입니다. $1 \ne 0$이므로 $1 \in \mathbb{R} - \{0\}$입니다. 그러나 $0 \notin \mathbb{R} - \{0\}$이므로 $0$의 근방은 아닙니다.
:::
