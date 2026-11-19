---
title: 근방으로 본 폐포
title_en: Closure via Neighborhoods
aliases: [폐포의 근방 판정, 폐포의 기저 판정, 조밀의 판정, closure via neighborhoods, closure via basis]
kind: theorem
field: topology
msc: ["54A05"]
level: undergrad
summary: 점 x 가 A 의 폐포에 드는 것은 정확히 x 의 모든 근방이 A 와 만날 때이고, 위상의 기저가 있으면 x 를 원소로 갖는 모든 기저 원소가 A 와 만날 때이다. 내부를 기저 원소로 읽는 법과, A 가 조밀한 것이 정확히 공집합이 아닌 모든 열린집합(기저 원소)이 A 와 만날 때라는 것을 증명한다.
requires: [set, subset, set-operations, topological-space, closed-set, neighborhood, interior-and-closure, dense-subset, basis-for-a-topology, basis-of-a-given-topology, lower-limit-topology, interval, real-order-axioms, order-properties-of-reals, absolute-value, topology-examples]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절, Theorem relations-closure-boundary 뒤의 문장과 Proposition closures-of-products 의 증명, content/topological-spaces.tex:624, 636"
    checked: original
    note: "(1)은 출처가 624줄에서 Theorem relations-closure-boundary 의 (ii)(Y 의 폐포 = Y ∪ ∂Y)에서 읽어 내는 '폐포의 유용한 특징'과 같은 진술이다. 출처는 그것을 그 정리의 따름으로 한 줄에 적고, 이 항목은 폐포의 정의(닫힌집합 전체의 교집합)에서 바로 증명한다. 그래서 이 항목은 3단원의 경계와 집적점의 관계보다 앞에 온다. (2)의 기저 원소로 읽는 꼴은 출처가 closures-of-products 의 증명(636)에서 곱위상의 기저 원소 U 가 x 를 원소로 가질 때 U 가 A 와 만나는지를 보는 방식과 같다. 예시 '세 점 위의 위상에서 폐포 구하기'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 확인 질문 '두 점 위의 위상에서 조밀한 집합'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.3절 Closure and boundary, Proposition 7.2.22 (p.270)"
    checked: original
    note: "출처 Proposition 7.2.22(p.270, 그림으로 대조했다)는 거리공간에서 x 가 A 의 폐포에 드는 것이 정확히 모든 δ > 0 에 B(x, δ) ∩ A ≠ ∅ 일 때라는 것을 두 대우로 증명한다. 하나는 폐포가 닫혀 있어 그 여집합 안에 공이 있다는 것, 다른 하나는 공의 여집합이 A 를 포함하는 닫힌집합이라는 것이다. 이 항목의 (1)의 증명은 공을 근방으로 바꾸어 같은 두 대우를 쓴 것이다. 공으로 읽는 꼴은 closure-in-a-metric-space 의 (1)에 둔다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 틀린 근거 1건, 부정확한 직관과 단원 글 문장, 블록 제목이 깨지는 화면 오류를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]], 닫힌집합은 [[closed-set]], 근방은 [[neighborhood]], 내부와 폐포는 [[interior-and-closure]], 조밀한 부분집합은 [[dense-subset]]의 것이다. "위상 $\mathcal{T}$의 기저"는 [[basis-of-a-given-topology]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간, $A$는 $X$의 부분집합, $x$는 $X$의 점이다.

1. (근방 판정) $x \in \overline{A}$인 것은 정확히 $x$의 모든 근방 $U$에 대하여 $U \cap A \ne \emptyset$일 때이다. 따라서 $x \notin \overline{A}$인 것은 정확히 $U \cap A = \emptyset$인 $x$의 근방 $U$가 있을 때이다.
2. (기저 판정) $\mathcal{C}$가 위상 $\mathcal{T}$의 기저이면, $x \in \overline{A}$인 것은 정확히 $x \in C$인 모든 $C \in \mathcal{C}$에 대하여 $C \cap A \ne \emptyset$일 때이다.
3. (내부의 기저 판정) $\mathcal{C}$가 위상 $\mathcal{T}$의 기저이면, $x \in \operatorname{Int} A$인 것은 정확히 $x \in C$이고 $C \subseteq A$인 $C \in \mathcal{C}$가 있을 때이다.
4. (조밀의 판정) $A$가 $X$에서 조밀한 것은 정확히 공집합이 아닌 모든 열린집합 $U$에 대하여 $U \cap A \ne \emptyset$일 때이다. $\mathcal{C}$가 위상 $\mathcal{T}$의 기저이면, 이것은 또 정확히 공집합이 아닌 모든 $C \in \mathcal{C}$에 대하여 $C \cap A \ne \emptyset$일 때이다.
:::

:::english
Topological spaces and open sets, closed sets, neighborhoods, interior and closure, and dense subsets are as in the corresponding entries, and "a basis for the topology $\mathcal{T}$" is as in the entry on recognizing a basis for a given topology. Below, $(X, \mathcal{T})$ is a topological space, $A$ is a subset of $X$, and $x$ is a point of $X$.

1. (Neighborhood test) $x \in \overline{A}$ exactly when $U \cap A \ne \emptyset$ for every neighborhood $U$ of $x$. Hence $x \notin \overline{A}$ exactly when there is a neighborhood $U$ of $x$ with $U \cap A = \emptyset$.
2. (Basis test) If $\mathcal{C}$ is a basis for the topology $\mathcal{T}$, then $x \in \overline{A}$ exactly when $C \cap A \ne \emptyset$ for every $C \in \mathcal{C}$ with $x \in C$.
3. (Basis test for the interior) If $\mathcal{C}$ is a basis for the topology $\mathcal{T}$, then $x \in \operatorname{Int} A$ exactly when there is $C \in \mathcal{C}$ with $x \in C$ and $C \subseteq A$.
4. (Test for density) $A$ is dense in $X$ exactly when $U \cap A \ne \emptyset$ for every nonempty open set $U$. If $\mathcal{C}$ is a basis for the topology $\mathcal{T}$, this holds exactly when $C \cap A \ne \emptyset$ for every nonempty $C \in \mathcal{C}$.
:::

## 직관

폐포는 "$A$를 감싸는 모든 닫힌집합의 공통 부분"으로 정의했습니다. 이 정의로 어떤 점이 폐포에 드는지 알려면 닫힌집합을 모두 살펴야 합니다. (1)은 이것을 점 $x$ 둘레만 보는 일로 바꿉니다. $x$를 품은 열린집합 가운데 $A$와 전혀 만나지 않는 것이 있으면 그 여집합이 $A$를 감싸면서 $x$를 빼는 닫힌집합이 되고, 거꾸로 $A$를 감싸면서 $x$를 빼는 닫힌집합이 있으면 그 여집합이 $A$와 만나지 않는 $x$의 근방이 됩니다.

비유하자면 $x$가 폐포에 든다는 것은 "$x$에서 아무리 좁은 동네(근방)를 잡아도 그 동네에 $A$의 땅이 조금은 있다"는 것입니다. "아무리 좁은 동네를 잡아도"가 "$x$의 모든 근방에 대하여", "조금은 있다"가 "$U \cap A \ne \emptyset$"에 맞습니다. 동네를 하나 골라서 $A$와 만나는지를 보는 것으로는 부족하고, 모든 동네가 만나야 합니다(아래 반례).

근방을 모두 볼 필요는 없고, 위상의 기저가 있으면 $x$를 품은 기저 원소만 보면 됩니다((2)). 모든 근방이 그런 기저 원소를 하나는 품기 때문입니다. 조밀하다는 것도 같은 말로 바뀝니다. 모든 점이 폐포에 든다는 것은 공집합이 아닌 열린집합이 하나도 빠짐없이 $A$와 만난다는 것입니다((4)).

## 증명

:::idea
"$x$의 근방 $U$가 $A$와 만나지 않는다"와 "$X - U$가 $A$를 포함하고 $x$를 빼는 닫힌집합이다"가 같은 말이라는 데서 (1)이 나온다. 나머지는 모든 근방이 $x$를 품은 기저 원소를 포함한다는 것을 덧붙인다.
:::

:::hint
$U \cap A = \emptyset$이면 $A \subseteq X - U$이다. [[interior-and-closure]]의 (2)를 닫힌집합 $X - U$에 쓴다.
:::

:::hint
(2)에서는 [[basis-of-a-given-topology]]의 (2)를 쓴다. (4)에서는 공집합이 아닌 열린집합의 점을 하나 잡는다.
:::

:::proof
먼저 집합의 작은 사실 하나를 보인다. $U$, $A$가 $X$의 부분집합일 때, $U \cap A = \emptyset$인 것은 정확히 $A \subseteq X - U$일 때이다. $U \cap A = \emptyset$이고 $a \in A$이면 $a \in X$이고, $a \in U$라면 $a \in U \cap A$가 되므로 $a \notin U$이다. 곧 $a \in X - U$이다. 거꾸로 $A \subseteq X - U$이고 $a \in U \cap A$라면 $a \in X - U$이므로 $a \notin U$가 되어 $a \in U$에 어긋난다. 따라서 $U \cap A$에는 원소가 없다([[set-operations|교집합과 차집합]]의 정의). 이것을 (가)라 부른다.

**(1).** $x \in \overline{A}$이고 $U$가 $x$의 근방이라 하자. $U \cap A = \emptyset$이라면 (가)에 의해 $A \subseteq X - U$이다. $U$는 열린집합이므로 [[closed-set]]의 (5)에 의해 $X - U$는 닫힌집합이고, [[interior-and-closure]]의 (2)에 의해 $\overline{A} \subseteq X - U$이다. 그러면 $x \in X - U$이므로 $x \notin U$가 되어, 근방의 정의 $x \in U$에 어긋난다. 따라서 $U \cap A \ne \emptyset$이다.

거꾸로 $x$의 모든 근방이 $A$와 만난다고 하자. $F$가 닫힌집합이고 $A \subseteq F$라 하자. $x \notin F$라면, 닫힌집합의 정의에 의해 $X - F$는 열린집합이고 $x \in X$이므로 $x \in X - F$이다. 곧 $X - F$는 $x$의 근방이다. 또 $A \subseteq F = X - (X - F)$이므로([[closed-set]]의 (5)) (가)에 의해 $(X - F) \cap A = \emptyset$이다. 이것은 가정에 어긋나므로 $x \in F$이다. $A$를 포함하는 모든 닫힌집합 $F$에서 $x \in F$이므로 [[interior-and-closure]]의 (7)에 의해 $x \in \overline{A}$이다.

둘째 문장은 첫 문장의 양쪽을 부정한 것이다. "모든 근방 $U$에서 $U \cap A \ne \emptyset$"의 부정은 "$U \cap A = \emptyset$인 근방 $U$가 있다"이다.

**(2).** $\mathcal{C}$가 위상 $\mathcal{T}$의 기저라 하자. [[basis-of-a-given-topology]]의 (2)에 의해 $\mathcal{C} \subseteq \mathcal{T}$이고, 모든 $U \in \mathcal{T}$와 모든 $y \in U$에 대하여 $y \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다.

$x \in \overline{A}$이고 $C \in \mathcal{C}$, $x \in C$라 하자. $C \in \mathcal{T}$이므로 $C$는 $x$의 근방이고, (1)에 의해 $C \cap A \ne \emptyset$이다.

거꾸로 $x \in C$인 모든 $C \in \mathcal{C}$가 $A$와 만난다고 하자. $U$가 $x$의 근방이면 $U \in \mathcal{T}$이고 $x \in U$이므로 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다. 가정에 의해 $C \cap A$의 원소 $a$가 있고, $a \in C \subseteq U$이므로 $a \in U \cap A$이다. 곧 $x$의 모든 근방이 $A$와 만나므로 (1)에 의해 $x \in \overline{A}$이다.

**(3).** $\mathcal{C}$가 위상 $\mathcal{T}$의 기저라 하고, (2)의 첫 문단에 적은 [[basis-of-a-given-topology]]의 (2)를 다시 쓴다. $x \in \operatorname{Int} A$이면 [[interior-and-closure]]의 (7)에 의해 $U \subseteq A$인 $x$의 근방 $U$가 있다. $U \in \mathcal{T}$이고 $x \in U$이므로 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있으며, $C \subseteq U \subseteq A$이다. 거꾸로 $x \in C$이고 $C \subseteq A$인 $C \in \mathcal{C}$가 있으면 $C \in \mathcal{T}$이므로 $C$는 $A$에 포함되는 $x$의 근방이고, [[interior-and-closure]]의 (7)에 의해 $x \in \operatorname{Int} A$이다.

**(4).** $A$가 조밀하다고 하자. 곧 [[dense-subset]]의 정의에 의해 $\overline{A} = X$이다. $U$가 공집합이 아닌 열린집합이면 $U$의 원소 $y$를 하나 잡는다. $U \subseteq X$이므로 $y \in X = \overline{A}$이고, $U$는 $y$의 근방이므로 (1)에 의해 $U \cap A \ne \emptyset$이다.

거꾸로 공집합이 아닌 모든 열린집합이 $A$와 만난다고 하자. $y \in X$이고 $U$가 $y$의 근방이면 $y \in U$이므로 $U$는 공집합이 아닌 열린집합이고, 가정에 의해 $U \cap A \ne \emptyset$이다. (1)에 의해 $y \in \overline{A}$이다. 곧 $X \subseteq \overline{A}$이고, $\overline{A}$는 $X$의 부분집합이므로 $\overline{A} = X$이다.

$\mathcal{C}$가 위상 $\mathcal{T}$의 기저일 때 둘째 문장을 보인다. 공집합이 아닌 모든 열린집합이 $A$와 만나면, 공집합이 아닌 $C \in \mathcal{C}$는 $\mathcal{C} \subseteq \mathcal{T}$에 의해 공집합이 아닌 열린집합이므로 $A$와 만난다. 거꾸로 공집합이 아닌 모든 $C \in \mathcal{C}$가 $A$와 만난다고 하고 $U$를 공집합이 아닌 열린집합이라 하자. $U$의 원소 $y$를 하나 잡으면 $y \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있고, $y \in C$이므로 $C$는 공집합이 아니다. 가정에 의해 $C \cap A$의 원소 $a$가 있고 $a \in U \cap A$이다. 따라서 공집합이 아닌 모든 열린집합이 $A$와 만나고, 첫 문장에 의해 이것은 $A$가 조밀하다는 것과 같다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 폐포 구하기]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 주고 $A = \{3\}$의 폐포를 (1)로 구해 봅니다. $1$의 근방 $\{1\}$은 $A$와 만나지 않으므로 $1 \notin \overline{A}$이고, $2$의 근방 $\{1, 2\}$도 $A$와 만나지 않으므로 $2 \notin \overline{A}$입니다. $3$의 근방은 $X$ 하나뿐이고 $X \cap A = \{3\}$이므로 $3 \in \overline{A}$입니다. 따라서 $\overline{\{3\}} = \{3\}$입니다. 닫힌집합을 모두 나열하지 않고 각 점의 근방만 보았습니다.
:::

:::example[아래끝 위상에서 열린구간의 폐포]
$\mathbb{R}_l$([[lower-limit-topology]]의 (1))에서 열린구간 $(0, 1)$의 폐포는 $[0, 1)$입니다. [[lower-limit-topology]]의 (1)에 의해 $\mathcal{B}_l$은 위상의 기저이고 $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$이므로, [[basis-of-a-given-topology]]의 정의에 의해 $\mathcal{B}_l$은 위상 $\mathcal{T}_l$의 기저입니다. 그래서 (2)를 씁니다.

- $x < 0$이면 $[x, 0) \in \mathcal{B}_l$은 $x$를 원소로 갖고 $(0, 1)$과 만나지 않습니다($[x, 0)$의 원소는 [[interval]]의 정의에 의해 $0$보다 작습니다). 따라서 $x \notin \overline{(0, 1)}$입니다.
- $1 \le x$이면 $[x, x + 1) \in \mathcal{B}_l$은 $x$를 원소로 갖고 $(0, 1)$과 만나지 않습니다(그 원소는 $1$ 이상입니다). 따라서 $x \notin \overline{(0, 1)}$입니다.
- $0 < x < 1$이면 $x$를 원소로 갖는 모든 기저 원소는 $x$ 자신을 $(0, 1)$과 함께 가지므로 $x \in \overline{(0, 1)}$입니다.
- $x = 0$이면, $0 \in [a, b)$인 기저 원소는 $a \le 0 < b$를 만족합니다. $m = \min\{b, 1\}$, $t = m/2$라 하면 [[absolute-value]]의 (10)에 의해 $m$은 $b$이거나 $1$이므로 $0 < m$이고, [[order-properties-of-reals]]의 (8)에 의해 $0 < t < m$이며, $m \le b$, $m \le 1$입니다. 곧 $a \le 0 < t < b$이고 $0 < t < 1$이므로 $t \in [a, b) \cap (0, 1)$입니다. 따라서 $0 \in \overline{(0, 1)}$입니다.

[[real-order-axioms|실수의 순서]]의 (W1)(삼분법)에 의해 모든 실수는 위 넷 가운데 하나에 들므로 $\overline{(0, 1)} = [0, 1)$입니다. 아래끝 위상에서는 $1$을 $(0, 1)$에서 떼어 놓는 근방 $[1, 2)$가 있어서 $1$이 폐포에 들지 않습니다.
:::

:::counterexample[한 근방이 만나는 것으로는 부족하다]
(1)의 "모든 근방"을 "어떤 근방"으로 바꿀 수는 없습니다. [[neighborhood]]의 (1)에 의해 $X$는 모든 점의 근방이므로, $A \ne \emptyset$이면 모든 점에 $A$와 만나는 근방 $X$가 있습니다. 그러나 위 예시의 $A = \{3\}$에서 $1$은 $A$와 만나는 근방 $X$를 가지면서도 $\overline{A}$에 들지 않습니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 (4)로 볼 때 $\{a\}$와 $\{b\}$는 조밀한가?]
공집합이 아닌 열린집합은 $\{a\}$와 $X$입니다. 둘 다 $a$를 원소로 가지므로 $\{a\}$와 만나고, (4)에 의해 $\{a\}$는 조밀합니다. 열린집합 $\{a\}$는 $\{b\}$와 만나지 않으므로 $\{b\}$는 조밀하지 않습니다.
:::

:::check[$\mathbb{R}_l$에서 $1$은 반열린구간 $\{x \in \mathbb{R} : 0 \le x < 1\}$의 폐포에 드는가?]
들지 않습니다. $[1, 2)$는 $\mathcal{B}_l$의 원소이고 $1$을 원소로 가지며, 그 원소는 모두 $1$ 이상이므로 $[0, 1)$과 만나지 않습니다. (2)에 의해 $1 \notin \overline{[0, 1)}$입니다. 이것은 [[lower-limit-topology]]의 (4)에서 $[0, 1)$이 $\mathbb{R}_l$에서 닫혀 있다는 것과 맞습니다.
:::
