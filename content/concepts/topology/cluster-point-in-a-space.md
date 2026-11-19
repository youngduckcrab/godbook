---
title: 집적점 (위상공간)
title_en: Cluster Point in a Topological Space
aliases: [집적점, cluster point, limit point, accumulation point, 고립점, isolated point]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 점 x 의 모든 근방이 x 와 다른 A 의 점을 가질 때 x 를 A 의 집적점이라 하고, 집적점이 아닌 A 의 점을 고립점이라 한다. 집적점이 아니라는 것과 고립점의 판정, 큰 집합과 x 를 뺀 집합, 이산위상과 밀착위상의 경우를 보이고, 실수에서는 해석학 입문의 집적점과 같은 말임을 증명한다.
requires: [set, subset, set-operations, negation-of-quantified-statements, topological-space, topology-examples, neighborhood, metric-space-examples, open-ball, cluster-point, interval, order-properties-of-reals, absolute-value, prime-number, well-ordering-principle]
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Definition (ii), content/topological-spaces.tex:586–590"
    checked: original
    note: "출처 Definition (ii)(586–590)는 'x 의 모든 근방이 Y 와 x 아닌 점에서 만날 때 x 를 Y 의 limit point 라 하고, 그런 점 전체를 Y′ 로 쓴다'이다. 이 항목은 같은 조건을 (U ∩ A) − {x} ≠ ∅ 으로 쓰고, 이름을 해석학 입문 cluster-point 와 같은 '집적점'으로 둔다. 집적점 전체의 집합에는 기호를 두지 않는다. '고립점(isolated point)'이라는 말은 출처에 나오지 않는다(검색어 isolat, 'not a limit point', 'discrete point' 로 출처 폴더 전체를 찾아 0건). 예시 '세 점 위의 위상에서 집적점과 고립점'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 반례 '한 점 집합이 집적점을 가질 수 있다'의 뒤 문단은 출처 연습문제 2.3 (a)(exercises.tex:77–78, 기저 {(a, ∞)} 가 생성한 ℝ 위의 위상에서 {x₀} 의 limit point 전체)와 같은 종류의 물음이다. 확인 질문 'ℤ 의 고립점'은 출처의 예(403, ℤ ⊂ ℝ 의 부분공간 위상은 이산위상이고 {n} 은 ℤ 에서 열려 있다)와 같은 발상이다. 확인 질문 '두 점 위의 위상에서의 집적점'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.5.5절 Cluster points and limits of functions, Definition 7.5.14 와 그 뒤 문단 (p.292); 3.1.1절 Definition 3.1.1 과 예 (ii), (v) (p.113); 3.1.5절 연습문제 3.1.5 (p.120); 3.2.1절 Proposition 3.2.2 의 증명 (p.123)"
    checked: original
    note: "출처 Definition 7.5.14(p.292)는 거리공간에서 '모든 ε > 0 에 대해 B(p, ε) ∩ S ∖ {p} 가 공집합이 아니면 p 를 S 의 cluster point 라 한다'이고, 이것은 이 항목의 정의를 공으로 쓴 꼴이다. 바로 뒤 문단은 cluster point 인 것이 정확히 S ∖ {p} 의 점으로 이루어지고 p 로 수렴하는 수열이 있을 때라고 적는다. 이 항목은 수열 판정을 싣지 않는다. 출처에도 isolated 라는 낱말은 나오지 않는다(검색어 isolat, 책 전체 0건). 다만 출처 Proposition 3.2.2 (i)의 증명(p.123)은 c ∈ S 가 S 의 cluster point 가 아니면 S ∩ (c − δ, c + δ) = {c} 인 δ > 0 이 있다고 쓰며, 이것은 이 항목의 (2)를 실수에서 쓴 꼴이다(검색어 'not a cluster point' 로 찾은 4건을 모두 읽었다). (8)은 출처 Definition 3.1.1(p.113, 실수의 집합 S 와 x 에 대해 모든 ε > 0 에 (x − ε, x + ε) ∩ S ∖ {x} 가 공집합이 아니면 cluster point)과 이 항목의 정의가 실수에서 같다는 것이다. 출처는 7.5.5절 첫머리(p.292)에서 함수의 극한을 실수 직선에서 거리공간으로 옮기기 위해 cluster point 부터 다시 시작한다고 적는다. (3)은 출처 연습문제 3.1.5(p.120, A ⊂ S 이고 c 가 A 의 cluster point 이면 S 의 cluster point)의 위상공간판이다. 예시 '실수의 구간의 점'은 출처가 p.113 에서 드는 예 (ii)(열린구간 (0, 1) 의 cluster point 전체는 [0, 1])와 같은 대상을 다룬다. 확인 질문 'ℤ 의 고립점'은 출처의 예 (v)(p.113, ℕ 은 ℝ 에서 cluster point 가 없다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(A = ∅, X = ∅, 밀착위상)에서 거짓이던 직관 문장 3건과 출처 메모의 주장 4건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 이산위상, 밀착위상, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$는 $X$의 부분집합이다.

**집적점.** 점 $x \in X$가 $A$의 **집적점**(cluster point)인 것은 정확히 $x$의 모든 근방 $U$에 대하여 $(U \cap A) - \{x\} \ne \emptyset$일 때이다. 곧 $x$의 모든 근방 $U$에 $y \in A$이고 $y \ne x$인 점 $y$가 있을 때이다. $x$가 $A$에 속할 필요는 없다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서 $A$의 집적점"이라 쓴다.

**고립점.** 점 $x$가 $A$의 **고립점**(isolated point)인 것은 정확히 $x \in A$이고 $x$가 $A$의 집적점이 아닐 때이다.

다음이 성립한다. 아래에서 $x$는 $X$의 점이다.

1. (집적점이 아니라는 것) $x$가 $A$의 집적점이 아닌 것은 정확히 $U \cap A \subseteq \{x\}$인 $x$의 근방 $U$가 있을 때이다.
2. (고립점) $x \in A$일 때, $x$가 $A$의 고립점인 것은 정확히 $U \cap A = \{x\}$인 $x$의 근방 $U$가 있을 때이다.
3. (더 큰 집합) $A \subseteq B \subseteq X$이고 $x$가 $A$의 집적점이면 $x$는 $B$의 집적점이다.
4. ($x$를 빼도 같다) $x$가 $A$의 집적점인 것은 정확히 $x$가 $A - \{x\}$의 집적점일 때이다.
5. (공집합) $\emptyset$의 집적점은 없다.
6. (이산위상) $\mathcal{T}$가 이산위상이면 $A$의 집적점은 없고, $A$의 모든 점은 $A$의 고립점이다.
7. (밀착위상) $\mathcal{T}$가 밀착위상이면, $x$가 $A$의 집적점인 것은 정확히 $A - \{x\} \ne \emptyset$일 때이다. 따라서 $A$에 서로 다른 두 점이 있으면 $X$의 모든 점이 $A$의 집적점이다.
8. (해석학 입문의 집적점과 같다) $S \subseteq \mathbb{R}$이고 $c$가 실수라 하자. $\mathbb{R}$에 보통 거리 $d$의 거리위상 $\mathcal{T}_d$를 줄 때, $c$가 $(\mathbb{R}, \mathcal{T}_d)$에서 $S$의 집적점인 것은 정확히 $c$가 [[cluster-point]]의 뜻으로 $S$의 집적점일 때이다. 그래서 두 뜻을 같은 이름으로 부른다.
:::

:::english
Topological spaces are as in the entry on topological spaces, neighborhoods are as in the entry on neighborhoods, and the discrete topology, the indiscrete topology and the metric topology $\mathcal{T}_d$ are as in the entry on examples of topologies. Below, $(X, \mathcal{T})$ is a topological space and $A$ is a subset of $X$.

**Cluster points.** A point $x \in X$ is a **cluster point** of $A$ exactly when $(U \cap A) - \{x\} \ne \emptyset$ for every neighborhood $U$ of $x$; that is, when every neighborhood $U$ of $x$ contains a point $y$ with $y \in A$ and $y \ne x$. The point $x$ need not belong to $A$. When the topology must be named we say "a cluster point of $A$ in $(X, \mathcal{T})$".

**Isolated points.** A point $x$ is an **isolated point** of $A$ exactly when $x \in A$ and $x$ is not a cluster point of $A$.

The following hold. Below, $x$ is a point of $X$.

1. (Not a cluster point) $x$ is not a cluster point of $A$ exactly when there is a neighborhood $U$ of $x$ with $U \cap A \subseteq \{x\}$.
2. (Isolated points) When $x \in A$, $x$ is an isolated point of $A$ exactly when there is a neighborhood $U$ of $x$ with $U \cap A = \{x\}$.
3. (Larger sets) If $A \subseteq B \subseteq X$ and $x$ is a cluster point of $A$, then $x$ is a cluster point of $B$.
4. (Removing $x$ changes nothing) $x$ is a cluster point of $A$ exactly when $x$ is a cluster point of $A - \{x\}$.
5. (The empty set) $\emptyset$ has no cluster points.
6. (Discrete topology) If $\mathcal{T}$ is the discrete topology, then $A$ has no cluster points and every point of $A$ is an isolated point of $A$.
7. (Indiscrete topology) If $\mathcal{T}$ is the indiscrete topology, then $x$ is a cluster point of $A$ exactly when $A - \{x\} \ne \emptyset$. Hence if $A$ has two distinct points, every point of $X$ is a cluster point of $A$.
8. (Agreement with cluster points of real sets) Let $S \subseteq \mathbb{R}$ and let $c$ be a real number. Giving $\mathbb{R}$ the metric topology $\mathcal{T}_d$ of the standard metric $d$, $c$ is a cluster point of $S$ in $(\mathbb{R}, \mathcal{T}_d)$ exactly when $c$ is a cluster point of $S$ in the sense of the entry on cluster points of subsets of $\mathbb{R}$. This is why the two notions share one name.
:::

## 직관

집적점은 $A$의 점들이 "모여드는" 곳입니다. $x$ 둘레의 근방을 아무리 작게 잡아도 그 안에 $x$ 말고 $A$의 점이 있다면, $x$ 둘레의 어느 동네에도 $A$의 다른 점이 와 있는 셈입니다. $x$ 자신은 셈에 넣지 않는다는 것이 중요합니다. $x \in A$라도 $x$ 하나만으로는 집적점이 되지 않고, 그래서 $A$에서 $x$를 빼도 집적점인지는 바뀌지 않습니다((4)).

비유하자면 $A$는 사람들이 앉은 자리이고, $x$가 집적점이라는 것은 $x$ 둘레의 어느 구역(근방)을 보아도 $x$가 아닌 다른 사람이 앉아 있다는 것입니다. "어느 구역을 보아도"가 "모든 근방에 대하여", "다른 사람"이 "$y \ne x$인 $A$의 점"에 맞습니다. 고립점은 그 반대로, 자기 자리에 앉아 있지만 둘레의 어떤 구역에는 자기 말고 아무도 없는 사람입니다((2)).

해석학 입문의 [[cluster-point|집적점]]은 $\mathbb{R}$의 부분집합에 대해 "$|x - c| < \varepsilon$인 $S$의 점이 $c$ 말고도 있다"로 정의했습니다. $\mathbb{R}$의 보통 거리의 거리위상에서는 근방이 열린 공을 품고 열린 공이 근방이므로([[neighborhood]]의 (4)), 두 정의는 같은 점을 집적점이라 부릅니다((8)). 그래서 이 사이트는 두 뜻에 같은 이름 "집적점"을 씁니다. 위상공간에서는 거리 대신 근방으로 말할 뿐입니다.

## 성질의 증명

:::proof
**(1).** $x$가 $A$의 집적점이 아닌 것은 "$x$의 모든 근방 $U$에서 $(U \cap A) - \{x\} \ne \emptyset$"의 부정이므로, [[negation-of-quantified-statements|한정 명제의 부정]]의 1에 의해 "$(U \cap A) - \{x\} = \emptyset$인 $x$의 근방 $U$가 있다"와 같다. $(U \cap A) - \{x\} = \emptyset$인 것은 정확히 $U \cap A \subseteq \{x\}$일 때이다. 앞의 것이 성립하고 $y \in U \cap A$이면 $y \notin (U \cap A) - \{x\}$이므로 $y \in \{x\}$이다. 거꾸로 $U \cap A \subseteq \{x\}$이고 $y \in (U \cap A) - \{x\}$라면 $y \in U \cap A$이므로 $y \in \{x\}$이면서 $y \notin \{x\}$가 되어 어긋나므로, $(U \cap A) - \{x\}$에는 원소가 없다([[set-operations|교집합과 차집합]]의 정의).

**(2).** $x \in A$라 하자. 고립점의 정의와 (1)에 의해, $x$가 $A$의 고립점인 것은 정확히 $U \cap A \subseteq \{x\}$인 $x$의 근방 $U$가 있을 때이다. $x$의 근방 $U$에서는 $x \in U$이고 $x \in A$이므로 $\{x\} \subseteq U \cap A$이다. 따라서 그런 $U$에서 $U \cap A \subseteq \{x\}$인 것은 정확히 $U \cap A = \{x\}$일 때이다.

**(3).** $U$가 $x$의 근방이면 $x$가 $A$의 집적점이므로 $y \in U \cap A$이고 $y \ne x$인 $y$가 있다. $A \subseteq B$이므로 $y \in U \cap B$이고 $y \ne x$이다. 따라서 $(U \cap B) - \{x\} \ne \emptyset$이다.

**(4).** $X$의 모든 부분집합 $U$에 대하여 $\bigl(U \cap (A - \{x\})\bigr) - \{x\} = (U \cap A) - \{x\}$이다. 왼쪽의 원소 $y$는 $y \in U$, $y \in A$, $y \ne x$를 만족하고 오른쪽의 원소도 정확히 그런 $y$이기 때문이다([[set-operations|교집합과 차집합]]의 정의). 따라서 $x$의 모든 근방 $U$에서 두 집합의 공집합 여부가 같고, 두 조건은 같다.

**(5).** $x \in X$이면 [[neighborhood]]의 (1)에 의해 $X$는 $x$의 근방이고, $X \cap \emptyset = \emptyset \subseteq \{x\}$이다. (1)에 의해 $x$는 $\emptyset$의 집적점이 아니다.

**(6).** $\mathcal{T}$가 이산위상이고 $x \in X$라 하자. [[neighborhood]]의 (5)에 의해 $\{x\}$는 $x$의 근방이고, $\{x\} \cap A \subseteq \{x\}$이다. (1)에 의해 $x$는 $A$의 집적점이 아니다. 따라서 $A$의 집적점은 없고, 고립점의 정의에 의해 $A$의 모든 점은 $A$의 고립점이다.

**(7).** $\mathcal{T}$가 밀착위상이면 [[neighborhood]]의 (5)에 의해 $x$의 근방은 $X$ 하나뿐이다. 따라서 $x$가 $A$의 집적점인 것은 정확히 $(X \cap A) - \{x\} \ne \emptyset$일 때이고, $A \subseteq X$이므로 $X \cap A = A$이어서 이것은 $A - \{x\} \ne \emptyset$이다. $A$에 서로 다른 두 점 $p$, $q$가 있으면, $X$의 점 $x$마다 $x \ne p$이거나 $x \ne q$이다($x = p$이고 $x = q$이면 $p = q$이다). $x \ne p$이면 $p \in A - \{x\}$이고, $x \ne q$이면 $q \in A - \{x\}$이다. 어느 경우에도 $A - \{x\} \ne \emptyset$이므로 $x$는 $A$의 집적점이다.

**(8).** 실수 $c$, $y$와 실수 $r > 0$에 대하여 [[metric-space-examples]]의 (1)과 [[absolute-value]]의 (3)에 의해 $d(c, y) = |c - y| = |y - c|$이므로, [[open-ball]]의 정의에 의해 $y \in B(c, r)$인 것은 정확히 $|y - c| < r$일 때이다.

$c$가 $(\mathbb{R}, \mathcal{T}_d)$에서 $S$의 집적점이라 하고 $\varepsilon$을 양의 실수라 하자. [[neighborhood]]의 (4)의 (a)에 의해 $B(c, \varepsilon)$는 $c$의 근방이므로 $y \in B(c, \varepsilon) \cap S$이고 $y \ne c$인 $y$가 있다. 위 문단에 의해 $|y - c| < \varepsilon$이다. 곧 $y \in S$, $y \ne c$, $|y - c| < \varepsilon$인 실수 $y$가 있으므로, [[cluster-point]]의 정의에 의해 $c$는 그 뜻으로 $S$의 집적점이다.

거꾸로 $c$가 [[cluster-point]]의 뜻으로 $S$의 집적점이라 하고 $U$를 $c$의 근방이라 하자. [[neighborhood]]의 (4)의 (b)에 의해 $B(c, r) \subseteq U$인 $r > 0$이 있다. [[cluster-point]]의 정의를 $\varepsilon = r$로 쓰면 $y \in S$, $y \ne c$, $|y - c| < r$인 실수 $y$가 있고, 첫 문단에 의해 $y \in B(c, r) \subseteq U$이다. 곧 $y \in (U \cap S) - \{c\}$이므로 이 집합은 공집합이 아니다. $U$는 $c$의 아무 근방이었으므로 $c$는 $(\mathbb{R}, \mathcal{T}_d)$에서 $S$의 집적점이다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 집적점과 고립점]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. $1$의 근방은 $\{1\}$, $\{1, 2\}$, $X$이고, $2$의 근방은 $\{1, 2\}$, $X$이며, $3$의 근방은 $X$뿐입니다.

- $A = \{1\}$: $1$의 근방 $\{1\}$에서 $\{1\} \cap A = \{1\}$이므로 (2)에 의해 $1$은 $A$의 고립점입니다. $2$의 근방 $\{1, 2\}$와 $X$는 모두 $1$을 원소로 갖고 $1 \ne 2$이므로 $2$는 $A$의 집적점이고, 같은 까닭으로 $3$도 $A$의 집적점입니다. $A$의 집적점은 $2$와 $3$이고, 둘 다 $A$에 속하지 않습니다.
- $A = \{2\}$: $1$의 근방 $\{1\}$에서 $\{1\} \cap A = \emptyset \subseteq \{1\}$이므로 (1)에 의해 $1$은 집적점이 아닙니다. $2$의 근방 $\{1, 2\}$에서 $\{1, 2\} \cap A = \{2\}$이므로 $2$는 $A$의 고립점입니다. $3$의 근방 $X$에서 $(X \cap A) - \{3\} = \{2\}$이므로 $3$은 $A$의 집적점입니다. $A$의 집적점은 $3$ 하나입니다.
:::

:::example[실수의 구간의 점]
$\mathbb{R}$에 보통 거리의 거리위상을 주고 $I$를 [[interval]]의 뜻의 구간이라 합시다. 해석학 입문의 [[cluster-point]]의 (6)에 의해 $I$의 모든 점은 그 뜻으로 $I$의 집적점이므로, (8)에 의해 $I$의 모든 점은 이 항목의 뜻으로도 $I$의 집적점입니다. 따라서 구간에는 고립점이 없습니다.
:::

:::counterexample[한 점 집합이 집적점을 가질 수 있다]
$\mathbb{R}$에 보통 거리 $d$의 거리위상을 주면 한 점 집합 $\{p\}$는 집적점을 갖지 않습니다. $c = p$이면 $c$의 근방 $\mathbb{R}$에서 $\mathbb{R} \cap \{p\} = \{c\}$이고, $c \ne p$이면 [[absolute-value]]의 (2)에 의해 $\rho = |c - p| > 0$이며 $d(c, p) = \rho$는 $\rho$보다 작지 않으므로([[order-properties-of-reals]]의 (1)의 (i)) $p \notin B(c, \rho)$이고, $c$의 근방 $B(c, \rho)$([[neighborhood]]의 (4)의 (a))에서 $B(c, \rho) \cap \{p\} = \emptyset$입니다. 어느 경우에도 (1)에 의해 $c$는 $\{p\}$의 집적점이 아닙니다.

위상공간에서는 그렇지 않을 수 있습니다. $X$에 서로 다른 두 점이 있고 밀착위상을 주었다면, $p \in X$에 대하여 (7)에 의해 $x$가 $\{p\}$의 집적점인 것은 정확히 $\{p\} - \{x\} \ne \emptyset$, 곧 $x \ne p$일 때입니다. 따라서 $p$가 아닌 모든 점이 $\{p\}$의 집적점입니다. 한편 $p$ 자신은 $\{p\}$의 고립점입니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 $\{a\}$의 집적점과 $\{b\}$의 집적점은 무엇인가?]
$a$의 근방 $\{a\}$에서 $\{a\} \cap \{a\} = \{a\}$이므로 $a$는 $\{a\}$의 집적점이 아니고, $b$의 근방은 $X$뿐이며 $(X \cap \{a\}) - \{b\} = \{a\} \ne \emptyset$이므로 $b$는 $\{a\}$의 집적점입니다. $\{b\}$의 경우, $a$의 근방 $\{a\}$에서 $\{a\} \cap \{b\} = \emptyset$이므로 $a$는 집적점이 아니고, $b$의 근방 $X$에서 $(X \cap \{b\}) - \{b\} = \emptyset$이므로 $b$도 집적점이 아닙니다. 따라서 $\{a\}$의 집적점은 $b$ 하나이고 $\{b\}$에는 집적점이 없으며, $b$는 $\{b\}$의 고립점입니다.
:::

:::check[$\mathbb{R}$에 보통 거리의 거리위상을 줄 때 $0$은 정수 전체의 집합 $\mathbb{Z}$의 고립점인가?]
그렇습니다. [[neighborhood]]의 (4)의 (a)에 의해 $B(0, 1)$은 $0$의 근방입니다. 정수 $m$이 $B(0, 1)$에 들면 [[absolute-value]]의 (3)과 (7)에 의해 $-1 < m < 1$입니다. [[well-ordering-principle]]의 (Z5)에 의해 $m < 0$, $m = 0$, $m > 0$ 가운데 하나인데, $m > 0$이면 [[prime-number]]의 (Z1)에 의해 $m \ge 1$이 되어 $m < 1$에 어긋나고([[order-properties-of-reals]]의 (1)의 (i)), $m < 0$이면 (Z1)에 의해 $m + 1 \le 0$이고 [[well-ordering-principle]]의 (Z7)에 의해 $m \le -1$이 되어 $-1 < m$에 어긋납니다([[order-properties-of-reals]]의 (10)에 의해 이 부등식들을 실수의 부등식으로 읽는다). 따라서 $m = 0$이고 $B(0, 1) \cap \mathbb{Z} = \{0\}$이므로, (2)에 의해 $0$은 $\mathbb{Z}$의 고립점입니다.
:::
