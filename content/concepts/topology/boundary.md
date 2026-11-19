---
title: 경계
title_en: Boundary
aliases: [boundary, frontier]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 점 x 의 모든 근방이 부분집합 A 와도 만나고 A 의 여집합과도 만날 때 x 를 A 의 경계에 넣는다. A 와 그 여집합의 경계가 같고, 공집합과 전체의 경계는 공집합이며, 이산위상에서는 모든 경계가 공집합이고 밀착위상에서는 공집합도 전체도 아닌 집합의 경계가 전체임을 보인다.
requires: [set, subset, set-operations, logical-connectives, de-morgan-laws-logic, negation-of-quantified-statements, topological-space, topology-examples, closed-set, neighborhood, metric-space-examples, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, real-number-arithmetic, order-properties-of-reals, absolute-value]
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Definition (i), content/topological-spaces.tex:578–585"
    checked: original
    note: "정의는 출처 Definition (i)(581–585, x 의 모든 근방 U 에서 U ∩ Y ≠ ∅ 이고 U ∩ Yᶜ ≠ ∅ 인 x 전체를 ∂Y 로 쓴다)와 같다. 출처의 여집합 Yᶜ 는 X − A 로 썼다. (2)의 꼴은 출처가 Theorem relations-closure-boundary 의 증명(610)에서 'x ∉ ∂Y 이면 x ∈ U ⊂ Y 이거나 x ∈ U ⊂ X ∖ Y 인 근방 U 가 있다'로 쓰는 것과 같은 내용이다. 예시 '세 점 위의 위상에서의 경계'의 위상은 topology-examples 의 (8)의 (i)의 것이고 확인 질문 '세 점 위의 다른 위상에서의 경계'의 위상은 topology-examples 의 (8)의 (ii)의 것이며, 둘 다 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 예시 '실수의 한 점 집합의 경계'에서 A 의 고립된 점이 경계에 드는 것은 출처의 예(593–595)에서 Y = [0, 1) ∪ {2} 의 경계에 2 가 드는 것과 같은 발상이다. 확인 질문 '두 점 위의 위상에서의 경계'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절, Example 7.2.5 (p.265); 7.2.3절 Closure and boundary, Definition 7.2.23 (p.270), Example 7.2.25 (p.271), Proposition 7.2.27 (p.271)"
    checked: original
    note: "출처 Definition 7.2.23(p.270)은 거리공간에서 경계를 폐포에서 내부를 뺀 집합으로 정의하여 이 항목의 정의와 꼴이 다르다. 출처 Proposition 7.2.27(p.271)은 거리공간에서 x 가 경계에 드는 것이 정확히 모든 δ > 0 에 B(x, δ) 가 A 와도 Aᶜ 와도 만날 때라는 것을 증명하며, 이것은 이 항목의 정의를 공으로 쓴 꼴이다. 예시 '실수의 한 점 집합의 경계'에서 0 이 경계에 드는 까닭(0 둘레의 공이 0 아닌 수를 품는다)은 출처 Example 7.2.5(p.265)가 {0} 이 열려 있지 않음을 보이는 근거와 같다. 반례 '경계가 공집합인데 공집합도 전체도 아닌 집합'은 출처 Example 7.2.25(p.271, 이산 거리의 X = {a, b} 에서 A = {a} 의 경계는 공집합)와 같은 대상에서 같은 결론을 낸다(이산 거리의 거리위상은 이산위상이다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(A = ∅, X = ∅, 밀착위상)에서 거짓이던 직관 문장 3건과 출처 메모의 주장 4건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 이산위상과 밀착위상은 [[topology-examples]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$는 $X$의 부분집합이며, $A$의 여집합은 차집합 $X - A$로 쓴다.

**경계.** 
$$
\partial A = \{x \in X : x \text{의 모든 근방 } U \text{에 대하여 } U \cap A \ne \emptyset \text{이고 } U \cap (X - A) \ne \emptyset\}
$$
을 $A$의 **경계**(boundary)라 한다. 곧 점 $x \in X$가 $\partial A$의 원소인 것은 정확히 $x$의 모든 근방이 $A$와도 만나고 $X - A$와도 만날 때이다. $\partial A$는 $X$의 부분집합이다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서의 경계"라 쓴다.

다음이 성립한다.

1. (여집합의 경계) $\partial A = \partial (X - A)$이다.
2. (경계에 들지 않는 점) 점 $x \in X$가 $\partial A$의 원소가 아닌 것은 정확히 $U \subseteq A$이거나 $U \subseteq X - A$인 $x$의 근방 $U$가 있을 때이다.
3. (공집합과 전체) $\partial \emptyset = \emptyset$이고 $\partial X = \emptyset$이다.
4. (이산위상) $\mathcal{T}$가 이산위상이면 $X$의 모든 부분집합 $A$에서 $\partial A = \emptyset$이다.
5. (밀착위상) $\mathcal{T}$가 밀착위상이고 $A \ne \emptyset$이며 $A \ne X$이면 $\partial A = X$이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, neighborhoods are as in the entry on neighborhoods, and the discrete and indiscrete topologies are as in the entry on examples of topologies. Below, $(X, \mathcal{T})$ is a topological space, $A$ is a subset of $X$, and the complement of $A$ is written as the difference $X - A$.

**Boundary.** The set
$$
\partial A = \{x \in X : \text{for every neighborhood } U \text{ of } x,\ U \cap A \ne \emptyset \text{ and } U \cap (X - A) \ne \emptyset\}
$$
is called the **boundary** of $A$. That is, a point $x \in X$ belongs to $\partial A$ exactly when every neighborhood of $x$ meets both $A$ and $X - A$. $\partial A$ is a subset of $X$. When the topology must be named we say "the boundary in $(X, \mathcal{T})$".

The following hold.

1. (Boundary of the complement) $\partial A = \partial (X - A)$.
2. (Points not in the boundary) A point $x \in X$ is not in $\partial A$ exactly when there is a neighborhood $U$ of $x$ with $U \subseteq A$ or $U \subseteq X - A$.
3. (Empty set and whole space) $\partial \emptyset = \emptyset$ and $\partial X = \emptyset$.
4. (Discrete topology) If $\mathcal{T}$ is the discrete topology, then $\partial A = \emptyset$ for every subset $A$ of $X$.
5. (Indiscrete topology) If $\mathcal{T}$ is the indiscrete topology, $A \ne \emptyset$ and $A \ne X$, then $\partial A = X$.
:::

## 직관

경계는 $A$의 "안"과 "밖"이 맞닿는 곳입니다. 점 $x$의 둘레를 아무리 작은 근방으로 잡아도 그 안에 $A$의 점과 $A$ 밖의 점이 함께 들어온다면, $x$는 $A$의 안쪽 깊숙이 있지도 않고 바깥쪽 멀리 있지도 않습니다. 이런 점을 모은 것이 $\partial A$입니다. 정의가 $A$와 $X - A$를 똑같이 대하므로 $A$의 경계와 여집합의 경계는 같습니다((1)).

비유하자면 두 나라 사이의 국경선입니다. 국경 위에 선 사람은 어느 동네(근방)에 있든 그 동네에 양쪽 나라의 땅이 다 들어 있습니다. "어느 동네에 있든"이 "모든 근방에 대하여"에, "양쪽 땅이 다 들어 있다"가 두 교집합이 공집합이 아니라는 조건에 맞습니다. 이 비유와 달리, 경계의 점이 $A$에 속하는지는 정해져 있지 않습니다. 경계의 점은 $A$에 속할 수도 있고 속하지 않을 수도 있습니다(아래 예시).

경계가 얼마나 큰지는 근방이 얼마나 작아질 수 있는지에 달려 있습니다. 이산위상에서는 $\{x\}$가 $x$의 근방이어서 어느 점도 경계에 들지 않고((4)), 밀착위상에서는 근방이 전체 하나뿐이어서 공집합도 전체도 아닌 집합의 경계가 전체입니다((5)).

## 성질의 증명

:::proof
**(1).** [[closed-set]]의 (5)에 의해 $X - (X - A) = A$이다. 따라서 점 $x \in X$가 $\partial(X - A)$의 원소인 것은 정확히 $x$의 모든 근방 $U$에 대하여 $U \cap (X - A) \ne \emptyset$이고 $U \cap A \ne \emptyset$일 때이다. "그리고"의 두 명제는 순서를 바꾸어도 진릿값이 같으므로([[logical-connectives]]) 이것은 $x \in \partial A$의 조건과 같다. 두 집합은 원소가 같으므로([[set]]) $\partial A = \partial(X - A)$이다.

**(2).** 먼저 $x$의 근방 $U$에 대하여 다음 두 사실을 보인다. $U$는 열린집합이므로 $U \subseteq X$이다.

- $U \cap A = \emptyset$인 것은 정확히 $U \subseteq X - A$일 때이다. $U \cap A = \emptyset$이고 $u \in U$이면, $u \in A$라면 $u \in U \cap A$가 되므로 $u \notin A$이고, $u \in X$이므로 $u \in X - A$이다. 거꾸로 $U \subseteq X - A$이고 $u \in U \cap A$라면 $u \in X - A$이므로 $u \notin A$가 되어 $u \in A$에 어긋나므로, $U \cap A$에는 원소가 없다.
- $U \cap (X - A) = \emptyset$인 것은 정확히 $U \subseteq A$일 때이다. $U \cap (X - A) = \emptyset$이고 $u \in U$이면, $u \notin A$라면 $u \in X$이므로 $u \in U \cap (X - A)$가 되므로 $u \in A$이다. 거꾸로 $U \subseteq A$이고 $u \in U \cap (X - A)$라면 $u \in A$이고 $u \notin A$가 되어 어긋나므로, $U \cap (X - A)$에는 원소가 없다.

$x \in X$에 대하여 $x \notin \partial A$인 것은 "$x$의 모든 근방 $U$에서 $U \cap A \ne \emptyset$이고 $U \cap (X - A) \ne \emptyset$"의 부정이다. [[negation-of-quantified-statements|한정 명제의 부정]]의 1과 [[de-morgan-laws-logic|드 모르간 법칙 (논리)]]의 1에 의해 이것은 "$U \cap A = \emptyset$이거나 $U \cap (X - A) = \emptyset$인 $x$의 근방 $U$가 있다"와 같고, 위의 두 사실에 의해 "$U \subseteq X - A$이거나 $U \subseteq A$인 $x$의 근방 $U$가 있다"와 같다.

**(3).** $x \in X$라 하자. [[neighborhood]]의 (1)에 의해 $X$는 $x$의 근방이고, [[set-operations|차집합]]의 정의에 의해 $X - \emptyset = X$이므로 $X \subseteq X - \emptyset$이다. (2)에 의해 $x \notin \partial \emptyset$이다. $\partial \emptyset$의 원소는 $X$의 원소이므로 $\partial \emptyset$에는 원소가 없고 $\partial \emptyset = \emptyset$이다. (1)에 의해 $\partial X = \partial (X - X) = \partial \emptyset = \emptyset$이다.

**(4).** $\mathcal{T}$가 이산위상이고 $x \in X$라 하자. [[neighborhood]]의 (5)에 의해 $\{x\}$는 $x$의 근방이다. $x \in A$이면 $\{x\} \subseteq A$이고, $x \notin A$이면 $x \in X - A$이므로 $\{x\} \subseteq X - A$이다. 어느 경우에도 (2)에 의해 $x \notin \partial A$이다. 따라서 $\partial A$에는 원소가 없다.

**(5).** $\mathcal{T}$가 밀착위상이고 $x \in X$라 하자. [[neighborhood]]의 (5)에 의해 $x$의 근방은 $X$ 하나뿐이다. $A \subseteq X$이므로 $X \cap A = A$이고, $A \ne \emptyset$이므로 $X \cap A \ne \emptyset$이다. $A \ne X$이고 $A \subseteq X$이므로 $X \subseteq A$는 성립하지 않는다. 곧 $y \in X$이고 $y \notin A$인 $y$가 있고, $y \in X \cap (X - A)$이므로 $X \cap (X - A) \ne \emptyset$이다. 따라서 $x \in \partial A$이다. 곧 $X \subseteq \partial A$이고, $\partial A \subseteq X$이므로 $\partial A = X$이다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서의 경계]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. 근방은 [[neighborhood]]의 정의대로 읽어, $1$의 근방은 $\{1\}$, $\{1, 2\}$, $X$이고 $2$의 근방은 $\{1, 2\}$, $X$이며 $3$의 근방은 $X$뿐입니다.

- $A = \{1\}$, $X - A = \{2, 3\}$: $1$의 근방 $\{1\}$은 $A$에 포함되므로 (2)에 의해 $1 \notin \partial A$입니다. $2$의 근방 $\{1, 2\}$와 $X$는 모두 $1$과 $2$를 원소로 가지므로 $A$와도 $X - A$와도 만나고, $2 \in \partial A$입니다. $3$의 근방 $X$도 둘 다와 만나므로 $3 \in \partial A$입니다. 따라서 $\partial \{1\} = \{2, 3\}$이고, 경계의 점이 모두 $A$ 밖에 있습니다.
- $A = \{2\}$, $X - A = \{1, 3\}$: $1$의 근방 $\{1\}$은 $X - A$에 포함되므로 $1 \notin \partial A$입니다. $2$의 근방 $\{1, 2\}$와 $X$는 $2 \in A$와 $1 \in X - A$를 원소로 가지므로 $2 \in \partial A$이고, $3$의 근방 $X$도 그렇습니다. 따라서 $\partial \{2\} = \{2, 3\}$이고, 경계의 점 $2$는 $A$에 속합니다.
:::

:::example[실수의 한 점 집합의 경계]
$\mathbb{R}$에 보통 거리 $d$([[metric-space-examples]]의 (1))의 거리위상을 주면 $\partial \{0\} = \{0\}$입니다.

$0$의 근방 $U$를 잡으면 [[neighborhood]]의 (4)의 (b)에 의해 $B(0, r) \subseteq U$인 $r > 0$이 있습니다. $0 \in U$이므로 $U \cap \{0\} \ne \emptyset$입니다. [[order-properties-of-reals]]의 (8)에 의해 $0 < r/2 < r$이므로 $r/2 \ne 0$이고, [[absolute-value]]의 (3)과 (1)에 의해 $d(0, r/2) = |0 - r/2| = |-(r/2)| = r/2 < r$입니다([[real-number-arithmetic]]의 계산). 곧 $r/2 \in B(0, r) \subseteq U$이고 $r/2 \in \mathbb{R} - \{0\}$이므로 $U \cap (\mathbb{R} - \{0\}) \ne \emptyset$입니다. 따라서 $0 \in \partial\{0\}$입니다.

$x \ne 0$이면 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)에 의해 $\{0\}$이 $(\mathbb{R}, d)$에서 닫힌집합이므로 [[open-set-in-metric-space]]의 닫힌집합의 정의와 [[topology-examples]]의 (4)에 의해 $\mathbb{R} - \{0\}$은 열린집합입니다. 이것은 $x$를 원소로 갖는 $x$의 근방이고 $\mathbb{R} - \{0\}$에 포함되므로, (2)에 의해 $x \notin \partial\{0\}$입니다.
:::

:::counterexample[경계가 공집합인데 공집합도 전체도 아닌 집합]
(3)을 거꾸로 읽어 "경계가 공집합이면 $A$는 공집합이거나 전체이다"라고 할 수는 없습니다. $X = \{a, b\}$ ($a \ne b$)에 이산위상을 주고 $A = \{a\}$라 하면 (4)에 의해 $\partial A = \emptyset$이지만, $A \ne \emptyset$이고 $b \notin A$이므로 $A \ne X$입니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 $\partial \{a\}$와 $\partial \{b\}$는 무엇인가?]
$a$의 근방 $\{a\}$는 $\{a\}$에 포함되므로 (2)에 의해 $a \notin \partial\{a\}$입니다. $b$의 근방은 $X$뿐이고 $X$는 $\{a\}$와도 $X - \{a\} = \{b\}$와도 만나므로 $b \in \partial\{a\}$입니다. 따라서 $\partial\{a\} = \{b\}$이고, $\{b\} = X - \{a\}$이므로 (1)에 의해 $\partial\{b\} = \{b\}$입니다.
:::

:::check[$X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 주면 $\partial \{2\}$는 무엇인가?]
$\partial\{2\} = \{1, 3\}$입니다. $2$의 근방 $\{2\}$는 $\{2\}$에 포함되므로 $2 \notin \partial\{2\}$입니다. $1$의 근방은 $\{1, 2\}$와 $X$이고 둘 다 $2$와 $1 \in X - \{2\}$를 원소로 가지므로 $1 \in \partial\{2\}$입니다. $3$의 근방은 $\{2, 3\}$과 $X$이고 둘 다 $2$와 $3 \in X - \{2\}$를 원소로 가지므로 $3 \in \partial\{2\}$입니다. 이 위상은 [[topology-examples]]의 (8)의 (ii)의 것입니다.
:::
