---
title: 아래끝 위상
title_en: The Lower Limit Topology
aliases: [lower limit topology, 아래끝 위상의 실수, Sorgenfrey line, 반열린구간이 생성하는 위상]
kind: proposition
field: topology
msc: ["54A10", "54G20"]
level: undergrad
summary: "실수의 반열린구간 [a, b) 전체는 위상의 기저이고, 그것이 생성하는 아래끝 위상은 보통 위상보다 진짜로 더 섬세하다. 아래끝 위상에서 [a, b) 와 반직선 {x : a ≤ x}, {x : x < a} 는 열린집합이면서 닫힌집합이다."
requires: [set, subset, family-of-sets, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, metric-space-examples, open-set-in-metric-space, open-and-closed-sets-of-reals, topological-space, topology-examples, closed-set, comparing-topologies, basis-for-a-topology, comparing-bases, standard-topology-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Basis for a topology 절의 예 lower-limit-topology 와 그 뒤의 Lemma 와 증명, content/topological-spaces.tex:166–188"
    checked: original
    note: "기저 ℬ_l (출처 168–171, 실수 a, b 에 대한 {x : a ≤ x < b} 꼴의 집합 전체), 이름 'lower limit topology', 기호 ℝ_l (172)은 출처의 것이다. 출처는 a, b 가 '변한다'고만 적고 a < b 를 따로 적지 않는다. 이 항목은 interval 의 약속대로 a < b 인 [a, b) 만 모은다. 출처는 ℬ_l 이 기저라는 것을 증명하지 않고, 이 항목의 (1)이 그 증명이다. (2)는 출처 Lemma(179–181)의 ℝ_l 부분이고, 출처의 증명(183)과 같이 Lemma compare-bases 에 [x, b) ⊆ (a, b) 를 넣어 보이며, 진짜로 더 섬세하다는 것은 출처가 증명(183)에서 'x ∈ B ⊆ [x, b) 인 열린구간 B 가 없다'고 적는 것을 1단원 open-and-closed-sets-of-reals 의 (3)으로 대신한다. '아래끝 위상'은 이 사이트가 lower limit topology 에 붙인 번역어이다(출처의 스웨덴어 번역어 자리는 '?' 로 비어 있다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 예 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
구간의 기호 $[a, b)$, $(a, b)$는 [[interval]]의 것이고 $a < b$일 때만 쓴다. $\mathbb{R}$의 보통 위상과 열린구간 전체의 집합족 $\mathcal{J}$는 [[standard-topology-on-reals]]의 것이고, 위상의 기저와 $\mathcal{T}_{\mathcal{B}}$는 [[basis-for-a-topology]]의 것이며, "진짜로 더 섬세하다"는 [[comparing-topologies]]의 것이다.

**아래끝 위상.**
$$
\mathcal{B}_l = \{I \in \mathscr{P}(\mathbb{R}) : a < b \text{이고 } I = [a, b) \text{인 실수 } a, b \text{가 있다}\}
$$
로 정한다.

1. $\mathcal{B}_l$은 $\mathbb{R}$ 위의 위상의 기저이다. 그것이 생성한 위상 $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$을 $\mathbb{R}$ 위의 **아래끝 위상**(lower limit topology)이라 하고, $\mathbb{R}$에 아래끝 위상을 준 위상공간 $(\mathbb{R}, \mathcal{T}_l)$을 $\mathbb{R}_l$로 쓴다.
2. (보통 위상보다 섬세하다) $\mathcal{T}_l$은 보통 위상보다 진짜로 더 섬세하다. 특히 보통 위상의 열린집합, 예컨대 열린구간 $(a, b)$와 열린 반직선 $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x < a\}$는 $\mathbb{R}_l$에서 열린집합이다.
3. (반직선) 실수 $a$에 대하여 $\{x \in \mathbb{R} : a \le x\}$와 $\{x \in \mathbb{R} : x < a\}$는 $\mathbb{R}_l$에서 열린집합이면서 닫힌집합이다.
4. (반열린구간) $a < b$이면 $[a, b)$는 $\mathbb{R}_l$에서 열린집합이면서 닫힌집합이다. 보통 위상에서 $[a, b)$는 열린집합도 아니고 닫힌집합도 아니다.
:::

:::english
The interval notations $[a, b)$ and $(a, b)$ are as in the entry on intervals and are used only when $a < b$. The standard topology on $\mathbb{R}$ and the family $\mathcal{J}$ of all open intervals are as in the entry on the standard topology, bases for a topology and $\mathcal{T}_{\mathcal{B}}$ are as in the entry on bases, and "strictly finer" is as in the entry on comparing topologies.

**The lower limit topology.** Define
$$
\mathcal{B}_l = \{I \in \mathscr{P}(\mathbb{R}) : \text{there are real numbers } a, b \text{ with } a < b \text{ and } I = [a, b)\}.
$$

1. $\mathcal{B}_l$ is a basis for a topology on $\mathbb{R}$. The topology $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$ it generates is called the **lower limit topology** on $\mathbb{R}$, and the topological space $(\mathbb{R}, \mathcal{T}_l)$ obtained by giving $\mathbb{R}$ the lower limit topology is written $\mathbb{R}_l$.
2. (Finer than the standard topology) $\mathcal{T}_l$ is strictly finer than the standard topology. In particular the open sets of the standard topology, for example the open intervals $(a, b)$ and the open rays $\{x \in \mathbb{R} : a < x\}$ and $\{x \in \mathbb{R} : x < a\}$, are open in $\mathbb{R}_l$.
3. (Rays) For a real number $a$, the sets $\{x \in \mathbb{R} : a \le x\}$ and $\{x \in \mathbb{R} : x < a\}$ are both open and closed in $\mathbb{R}_l$.
4. (Half-open intervals) If $a < b$, then $[a, b)$ is both open and closed in $\mathbb{R}_l$. In the standard topology $[a, b)$ is neither open nor closed.
:::

## 직관

보통 위상에서 열린집합의 점은 양쪽으로 조금씩 움직일 여유가 있어야 합니다. 아래끝 위상은 그 조건을 한쪽으로 줄여, 오른쪽으로만 여유가 있으면 열린 것으로 봅니다. 견본 $[a, b)$는 아래쪽 끝 $a$를 포함하므로, 그 끝점에서는 왼쪽으로 움직일 여유가 없어도 됩니다.

열린구간 $(a, b)$의 점 $x$에서는 $[x, b)$가 그 안에 들어가므로 보통 위상의 열린집합은 모두 아래끝 위상에서도 열려 있고, 거꾸로 $[0, 1)$은 점 $0$에서 왼쪽 여유가 없어 보통 위상에서는 열려 있지 않습니다. 그래서 아래끝 위상이 진짜로 더 섬세합니다((2)). 열린집합이 많아진 만큼 닫힌집합도 많아져서, $[a, b)$나 반직선 $\{x : a \le x\}$는 열려 있으면서 닫혀 있습니다.

## 증명

:::idea
(1)은 기저의 두 조건을 $[x, x + 1)$과 $[x, \min\{b_1, b_2\})$로 확인합니다. (2)는 [[comparing-bases|기저로 위상 비교하기]]에 $[x, b) \subseteq (a, b)$를 넣습니다. (3)과 (4)는 두 반직선이 서로의 여집합이라는 것과, $[a, b)$의 여집합이 두 반직선의 합집합이라는 것을 씁니다.
:::

:::hint
$\{x : a \le x\}$가 $\mathbb{R}_l$에서 열려 있음을 보이려면, 그 점 $x$마다 $[x, x + 1)$이 그 안에 들어가는지 보세요.
:::

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓴다. [[basis-for-a-topology]]의 정의에 의해 $U \subseteq \mathbb{R}$이 $\mathcal{T}_l$에 속하는 것은 정확히 $U$의 모든 점 $x$에 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}_l$이 있을 때이다. 이것을 (가)라 부른다. 실수 $x$에 대하여 순서 성질 (5)의 (ii)에 의해 $0 < 1$이고 순서 성질 (2)의 (ii)에 의해 $x < x + 1$이므로 $[x, x + 1) \in \mathcal{B}_l$이고, $x \le x$(순서 성질 (1)의 (iv))이므로 $x \in [x, x + 1)$이다. 이것을 (나)라 부른다.

**(1).** 덮기 조건은 (나)이다. 교집합 조건: $[a_1, b_1)$, $[a_2, b_2) \in \mathcal{B}_l$이고 $x$가 둘 모두에 속한다고 하자. $e = \min\{b_1, b_2\}$라 하면 [[absolute-value]]의 (10)에 의해 $e$는 $b_1$이거나 $b_2$이고 $e \le b_1$, $e \le b_2$이다. $x < b_1$이고 $x < b_2$이므로 $x < e$이고, 따라서 $[x, e) \in \mathcal{B}_l$이며 $x \in [x, e)$이다. $y \in [x, e)$이면 $x \le y < e$이다. $a_1 \le x \le y$이므로 $a_1 \le y$이고 $y < e \le b_1$이므로 $y < b_1$이다(순서 성질 (1)의 (v)). 곧 $y \in [a_1, b_1)$이고, 같은 계산을 첨자 $2$로 하면 $y \in [a_2, b_2)$이다. 따라서 $[x, e) \subseteq [a_1, b_1) \cap [a_2, b_2)$이다.

**(2).** 보통 위상은 [[standard-topology-on-reals]]의 (5)에 의해 위상의 기저 $\mathcal{J}$가 생성한 위상 $\mathcal{T}_{\mathcal{J}}$이다. [[comparing-bases]]의 (1)을 $\mathcal{B} = \mathcal{J}$, $\mathcal{B}' = \mathcal{B}_l$에 쓴다. $(a, b) \in \mathcal{J}$이고 $x \in (a, b)$이면 $x < b$이므로 $[x, b) \in \mathcal{B}_l$이고 $x \in [x, b)$이다. $y \in [x, b)$이면 $a < x \le y$이므로 $a < y$이고 $y < b$이다. 곧 $[x, b) \subseteq (a, b)$이다. 따라서 $\mathcal{T}_{\mathcal{J}} \subseteq \mathcal{T}_l$이고, 보통 위상의 열린집합은 모두 $\mathcal{T}_l$에 속한다.
두 위상이 다르다: $[0, 1) \in \mathcal{B}_l$이므로 [[basis-for-a-topology]]의 (2)에 의해 $[0, 1) \in \mathcal{T}_l$이다. 한편 [[open-and-closed-sets-of-reals]]의 (3)에 의해 $[0, 1)$은 $(\mathbb{R}, d)$($d$는 보통 거리)에서 열린집합이 아니므로 [[standard-topology-on-reals]]의 (5)에 의해 보통 위상의 원소가 아니다. 따라서 $\mathcal{T}_l$은 보통 위상보다 진짜로 더 섬세하다.
열린구간과 열린 반직선은 [[open-and-closed-sets-of-reals]]의 (1)에 의해 $(\mathbb{R}, d)$에서 열린집합이므로 보통 위상의 원소이고, 방금 보인 포함에 의해 $\mathcal{T}_l$의 원소이다.

**(3).** $L = \{x \in \mathbb{R} : a \le x\}$, $R = \{x \in \mathbb{R} : x < a\}$라 하자. $x \in L$이면 (나)의 $[x, x + 1)$에 대하여 $y \in [x, x + 1)$이면 $a \le x \le y$이므로 $y \in L$이다. 곧 $x \in [x, x + 1) \subseteq L$이고 (가)에 의해 $L \in \mathcal{T}_l$이다. $R$은 (2)에 의해 $\mathcal{T}_l$의 원소이다. 실수 $x$에 대하여 순서 성질 (1)의 (iii)에 의해 "$a \le x$"가 성립하지 않는 것은 정확히 $x < a$일 때이므로 $\mathbb{R} - L = R$이고, 같은 까닭으로 "$x < a$"가 성립하지 않는 것은 정확히 $a \le x$일 때이므로 $\mathbb{R} - R = L$이다. [[closed-set]]의 정의에 의해 $L$은 $\mathbb{R} - L = R$이 열린집합이므로 닫힌집합이고, $R$은 $\mathbb{R} - R = L$이 열린집합이므로 닫힌집합이다.

**(4).** $[a, b) \in \mathcal{B}_l$이므로 [[basis-for-a-topology]]의 (2)에 의해 $[a, b) \in \mathcal{T}_l$이다. 실수 $x$가 $[a, b)$에 속하지 않는 것은 "$a \le x$이고 $x < b$"가 거짓인 것, 곧 "$a \le x$"가 거짓이거나 "$x < b$"가 거짓인 것이고, 순서 성질 (1)의 (iii)에 의해 이것은 정확히 $x < a$이거나 $b \le x$일 때이다. 따라서 $\mathbb{R} - [a, b) = \{x : x < a\} \cup \{x : b \le x\}$이다. (3)에 의해 두 집합은 $\mathcal{T}_l$의 원소이고, [[topological-space]]의 (1)에 의해 그 합집합은 $\mathcal{T}_l$의 원소이다. 따라서 $[a, b)$는 $\mathbb{R}_l$에서 닫힌집합이다.
보통 위상에서: [[open-and-closed-sets-of-reals]]의 (3)에 의해 $[a, b)$는 $(\mathbb{R}, d)$에서 열린집합도 닫힌집합도 아니다. [[standard-topology-on-reals]]의 (5)에 의해 보통 위상의 열린집합은 $(\mathbb{R}, d)$의 열린집합과 같고, 보통 위상은 거리위상 $\mathcal{T}_d$이므로 [[closed-set]]의 (6)에 의해 보통 위상의 닫힌집합은 $(\mathbb{R}, d)$의 닫힌집합과 같다.
:::

## 예시와 반례

:::example[오른쪽 끝을 포함하는 반열린구간]
$\mathbb{R}_l$에서 $(0, 1] = \{x \in \mathbb{R} : 0 < x \le 1\}$은 열린집합도 닫힌집합도 아닙니다.

열린집합이 아니다: 점 $1$에서 생성된 위상의 조건이 깨집니다. $1 \in [a, b)$인 $\mathcal{B}_l$의 원소를 아무것이나 잡으면 $1 < b$이고, $y = (1 + b)/2$는 [[order-properties-of-reals]]의 (8)에 의해 $1 < y < b$이고 $a \le 1 < y$이므로 $y \in [a, b)$이지만 $y \notin (0, 1]$입니다. 곧 $1 \in B \subseteq (0, 1]$인 $B \in \mathcal{B}_l$이 없습니다.

닫힌집합이 아니다: 여집합 $C = \mathbb{R} - (0, 1]$이 열린집합이 아님을 보입니다. $0 \in C$이고, $0 \in [a, b)$인 $\mathcal{B}_l$의 원소를 아무것이나 잡으면 $0 < b$입니다. $y = \min\{b, 1\}/2$라 하면 [[absolute-value]]의 (10)에 의해 $\min\{b, 1\}$은 $b$나 $1$이므로 양수이고 $b$와 $1$ 이하입니다. 같은 (8)에 의해 $0 < y < \min\{b, 1\}$이므로 $0 < y < b$이고 $y < 1$입니다. $a \le 0 < y$이므로 $y \in [a, b)$이고 $y \in (0, 1]$, 곧 $y \notin C$입니다. 점 $0$에서 생성된 위상의 조건이 깨지므로 $C$는 열린집합이 아닙니다.

$[0, 1)$은 (4)에 의해 열려 있으면서 닫혀 있으므로, 끝점을 어느 쪽에 두느냐에 따라 결과가 정반대가 됩니다.
:::

## 확인 질문

:::check[$\{x \in \mathbb{R} : x \le 0\}$은 $\mathbb{R}_l$에서 닫힌집합인가?]
그렇습니다. [[open-and-closed-sets-of-reals]]의 (2)에 의해 이 집합은 보통 거리에서 닫힌집합이고, 따라서 보통 위상에서 닫힌집합입니다([[closed-set]]의 (6)). (2)에 의해 $\mathcal{T}_l$은 보통 위상보다 섬세하므로 [[comparing-topologies]]의 (2)에 의해 $\mathbb{R}_l$에서도 닫힌집합입니다. 한편 점 $0$에서 $[0, b)$ 꼴의 기저 원소는 모두 양수를 포함하므로 이 집합은 $\mathbb{R}_l$에서 열린집합이 아닙니다.
:::

:::check[$\{0\}$은 $\mathbb{R}_l$에서 열린집합인가?]
아닙니다. $0 \in [a, b)$인 $\mathcal{B}_l$의 원소는 $0 < b$이므로 $b/2$를 원소로 갖고([[order-properties-of-reals]]의 (8)에 의해 $0 < b/2 < b$), $b/2 \ne 0$입니다. 따라서 $0 \in B \subseteq \{0\}$인 기저 원소가 없습니다. $\mathbb{R}_l$은 보통 위상보다 섬세하지만 이산위상은 아닙니다.
:::
