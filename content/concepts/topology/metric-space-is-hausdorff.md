---
title: 거리공간은 하우스도르프 공간이다
title_en: Metric Spaces Are Hausdorff
aliases: [거리공간의 하우스도르프 성질, metric spaces are Hausdorff, 거리위상은 하우스도르프]
kind: proposition
field: topology
msc: ["54D10", "54E35"]
level: undergrad
summary: 거리공간에 거리위상을 주면 서로 다른 두 점은 거리의 절반을 반지름으로 하는 두 열린 공으로 갈라지므로 하우스도르프 공간이 되고, 따라서 유한 부분집합은 닫혀 있다. 실수의 보통 위상, 아래끝 위상, 곱집합 ℝ × ℝ 의 세 거리의 위상이 하우스도르프임을 보인다.
requires: [set-operations, absolute-value, order-properties-of-reals, interval, metric-space, metric-space-examples, open-ball, topology-examples, closed-set, comparing-topologies, basis-for-a-topology, standard-topology-on-reals, lower-limit-topology, neighborhood, hausdorff-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Separation axioms and Hausdorff spaces 절의 마지막 예 (content/topological-spaces.tex:684–686), 연습문제 metric-Hausdorff (content/exercises.tex:32)"
    checked: original
    note: "(1)의 첫 문장은 출처의 예(685줄, 거리위상을 준 거리공간은 모두 하우스도르프이다)와 같고, 출처는 그 증명을 연습문제 metric-Hausdorff(content/exercises.tex:32)로 둔다. 증명은 1단원 open-ball 의 (9)를 쓴다. (3)의 (ii)는 hausdorff-space 의 (6)을 쓰며, 출처의 ℝ_K 예(content/separation.tex:27)가 'ℝ 이 하우스도르프이고 ℝ_K 의 위상이 더 섬세하므로' 라고 쓰는 것과 같은 논법이다. 확인 질문 '이산 거리에서 (1)이 주는 두 근방'의 공은 출처의 예 discrete-metric(content/topological-spaces.tex:249–261, r ≤ 1 이면 B_d(x, r) = {x})의 계산과 같고, 그 결론(이산위상은 하우스도르프)은 출처의 예(672줄)와 같다. 확인 질문 '최대 거리에서 (1)이 주는 두 근방'의 거리는 출처 연습문제 product-metric(content/exercises.tex:56–60)의 최대 거리와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.2절 Example 7.2.17 (p.269), 7.2.4절 연습문제 7.2.5 (p.272), 연습문제 7.2.18 (p.273), 7.3.1절 Proposition 7.3.3 과 그 증명 (p.275)"
    checked: original
    note: "출처 Proposition 7.3.3(p.275)은 거리공간에서 수렴하는 수열의 극한이 하나뿐이라는 것을, 두 극한 x, y 에 대해 반지름 ε/2 와 거리의 삼각부등식으로 d(x, y) < ε 을 얻어 증명한다. 이 항목의 증명이 쓰는 open-ball 의 (9)도 두 점 사이 거리의 절반과 거리의 삼각부등식에서 나온다. 출처 연습문제 7.2.5(p.272)는 보통 거리를 준 ℚ 의 서로 다른 두 점 x, y 에 대해 x ∈ U, y ∈ V, U ∩ V = ∅, U ∪ V = ℚ 인 열린집합 U, V 를 찾으라고 한다. 확인 질문 '이산 거리에서 (1)이 주는 두 근방'은 출처 Example 7.2.17(p.269)이 두 점 {a, b} 위의 이산 거리에서 B(a, 1) = {a} 와 B(b, 1) = {b} 가 서로소인 열린집합이라고 적는 것과 같은 발상이다. 확인 질문 '최대 거리에서 (1)이 주는 두 근방'의 공 I × J 는 출처 연습문제 7.2.18(p.273)의 '직사각형' R(x, δ) 의 n = 2 인 경우와 같은 꼴의 집합이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 유한집합에서 거짓이던 단원 글 문장, 어긋난 줄 번호와 겹친 글자를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예(보통 거리, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$)는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$은 [[open-ball]]의 것이다. 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이고, 근방은 [[neighborhood]]의 것이며, $T_1$ 공간과 하우스도르프 공간은 [[hausdorff-space]]의 것이다. $\mathbb{R}$의 보통 위상은 [[standard-topology-on-reals]]의 것이고 $\mathbb{R}_l$은 [[lower-limit-topology]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

1. (거리위상은 하우스도르프) $X$에 거리위상 $\mathcal{T}_d$를 준 위상공간 $(X, \mathcal{T}_d)$는 하우스도르프 공간이다. 더 자세히, $x$, $y$가 $X$의 서로 다른 점이고 $t = \dfrac{d(x, y)}{2}$이면 $0 < t$이고, $B(x, t)$와 $B(y, t)$는 $(X, \mathcal{T}_d)$에서 각각 $x$의 근방과 $y$의 근방이며 $B(x, t) \cap B(y, t) = \emptyset$이다.
2. (유한 부분집합은 닫혀 있다) $(X, \mathcal{T}_d)$는 $T_1$ 공간이다. 따라서 $X$의 부분집합 가운데 유한집합인 것은 모두 $(X, d)$에서 닫힌집합이다.
3. (예) 다음 위상공간은 모두 하우스도르프 공간이다.
   - (i) 보통 위상을 준 $\mathbb{R}$.
   - (ii) $\mathbb{R}_l$.
   - (iii) 곱집합 $\mathbb{R} \times \mathbb{R}$에 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$ 가운데 어느 하나의 거리위상을 준 공간. (세 거리위상은 [[standard-topology-on-reals]]의 (4)에 의해 같은 위상이다.)
:::

:::english
Metric spaces and their examples (the standard metric, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$) are as in the entries on metric spaces and examples of metric spaces, and the open ball $B(x, r)$ is as in the entry on open balls. The metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies, neighborhoods are as in the entry on neighborhoods, and $T_1$ spaces and Hausdorff spaces are as in the entry on $T_1$ and Hausdorff spaces. The standard topology on $\mathbb{R}$ is as in the entry on the standard topology on the reals, and $\mathbb{R}_l$ is as in the entry on the lower limit topology. Below, $(X, d)$ is a metric space.

1. (Metric topologies are Hausdorff) The topological space $(X, \mathcal{T}_d)$, where $X$ carries the metric topology $\mathcal{T}_d$, is a Hausdorff space. More precisely, if $x$, $y$ are distinct points of $X$ and $t = \dfrac{d(x, y)}{2}$, then $0 < t$, $B(x, t)$ and $B(y, t)$ are neighborhoods in $(X, \mathcal{T}_d)$ of $x$ and of $y$ respectively, and $B(x, t) \cap B(y, t) = \emptyset$.
2. (Finite subsets are closed) $(X, \mathcal{T}_d)$ is a $T_1$ space. Consequently every subset of $X$ that is a finite set is closed in $(X, d)$.
3. (Examples) The following topological spaces are all Hausdorff spaces.
   - (i) $\mathbb{R}$ with the standard topology.
   - (ii) $\mathbb{R}_l$.
   - (iii) The product set $\mathbb{R} \times \mathbb{R}$ with the metric topology of any one of $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$. (By the entry on the standard topology on the reals, these three metric topologies are the same topology.)
:::

## 직관

거리공간에서 서로 다른 두 점 $x$, $y$의 거리는 양수입니다. 두 사람이 거리 $d(x, y)$만큼 떨어져 서 있을 때, 각자 그 절반보다 짧은 줄로 닿는 범위만 자기 구역으로 삼으면 두 구역은 겹치지 않습니다. 겹친다면 그 점까지 두 사람이 각각 절반 미만이므로, 삼각부등식에 의해 두 사람 사이가 $d(x, y)$보다 짧아지기 때문입니다. "구역"이 열린 공에, "겹치지 않는다"가 하우스도르프의 $U \cap V = \emptyset$에 맞습니다. 1단원의 [[open-ball|열린 공]]의 (9)가 이 계산을 이미 해 두었으므로, 이 항목은 그 두 공이 근방이라는 것만 더하면 됩니다.

(2)의 한 점 집합의 경우는 1단원의 [[open-set-in-metric-space|거리공간의 열린집합과 닫힌집합]]의 (5)와 같은 결론입니다. 거기서는 공으로 직접 보였고, 여기서는 [[hausdorff-space|하우스도르프 공간]]의 (1)과 (2)를 거쳐 유한 부분집합 전체로 얻습니다.

점이 둘 이상인 집합의 밀착위상은 하우스도르프가 아니므로([[hausdorff-space]]의 (4)), (1)에 의해 어떤 거리의 거리위상도 될 수 없습니다. 이것은 2단원 [[topology-examples|위상의 예]]의 (6)이 한 점 집합으로 보인 결론과 같습니다. (1)에 의해 하우스도르프가 아닌 위상은 어떤 거리의 거리위상도 아니므로, 하우스도르프가 아님을 보이는 것은 어떤 위상이 거리에서 나올 수 없음을 보이는 한 방법이 됩니다.

## 증명

:::idea
서로 다른 두 점의 거리의 절반을 반지름으로 하는 두 열린 공은 서로소이고([[open-ball]]의 (9)), 열린 공은 중심의 근방이다.
:::

:::hint
두 공이 겹치지 않는다는 계산은 1단원에 있습니다. 남은 것은 열린 공이 거리위상의 근방이라는 것입니다.
:::

:::hint
(2)는 [[hausdorff-space]]의 (1)과 (2)를 쓰고, 거리위상의 닫힌집합과 1단원의 닫힌집합이 같다는 [[closed-set]]의 (6)으로 옮깁니다.
:::

:::proof
**(1).** $x$, $y$가 $X$의 서로 다른 점이고 $t = \dfrac{d(x, y)}{2}$라 하자. [[open-ball]]의 (9)에 의해 $0 < t$이고 $B(x, t) \cap B(y, t) = \emptyset$이다. [[neighborhood]]의 (4)의 (a)에 의해 $B(x, t)$는 $(X, \mathcal{T}_d)$에서 $x$의 근방이고 $B(y, t)$는 $y$의 근방이다. 서로 다른 모든 두 점에 대해 이런 두 근방이 있으므로 $(X, \mathcal{T}_d)$는 하우스도르프 공간이다.

**(2).** (1)과 [[hausdorff-space]]의 (1)에 의해 $(X, \mathcal{T}_d)$는 $T_1$ 공간이다. [[hausdorff-space]]의 (2)의 (a)에서 (c)로, $X$의 부분집합 $F$가 유한집합이면 $F$는 $(X, \mathcal{T}_d)$에서 닫힌집합이다. [[closed-set]]의 (6)에 의해 $F$는 $(X, d)$에서 닫힌집합이다.

**(3).** (i) $d$가 $\mathbb{R}$의 보통 거리이면 [[standard-topology-on-reals]]의 (5)에 의해 보통 위상은 $\mathcal{T}_d$이므로 (1)에 의해 하우스도르프 공간이다.

(ii) [[lower-limit-topology]]의 (2)에 의해 아래끝 위상 $\mathcal{T}_l$은 보통 위상보다 섬세하다. 곧 [[comparing-topologies]]의 정의에 의해 보통 위상은 $\mathcal{T}_l$에 포함된다. (i)과 [[hausdorff-space]]의 (6)에 의해 $\mathbb{R}_l$은 하우스도르프 공간이다.

(iii) [[metric-space-examples]]의 (5)에 의해 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$는 모두 $\mathbb{R} \times \mathbb{R}$ 위의 거리이므로, 각각의 거리위상은 (1)에 의해 하우스도르프 공간을 준다.
:::

## 예시와 반례

:::example[아래끝 위상에서 반열린구간으로 가르기]
(3)의 (ii)는 더 섬세한 위상이 하우스도르프를 물려받는다는 것으로 얻었지만, $\mathbb{R}_l$에서는 두 점을 직접 가를 수도 있습니다. 실수 $x < y$에 대하여 $x < y$와 $y < y + 1$이므로 반열린구간 $[x, y)$와 $[y, y + 1)$은 [[lower-limit-topology]]의 $\mathcal{B}_l$의 원소이고, [[basis-for-a-topology]]의 (2)에 의해 $\mathbb{R}_l$에서 열린집합입니다. $x \in [x, y)$이고 $y \in [y, y + 1)$입니다. $z$가 두 집합에 함께 들면 $z < y$이고 $y \le z$인데, 이것은 [[order-properties-of-reals]]의 (1)의 (i)에 어긋납니다. 따라서 두 집합은 서로소인 $x$의 근방과 $y$의 근방입니다.

예컨대 $x = 0$, $y = 1$이면 $[0, 1)$과 $[1, 2)$입니다. 보통 위상에서는 이 두 집합이 열린집합이 아니어서([[lower-limit-topology]]의 (4)) 근방이 되지 못하고, (1)대로라면 $(-\tfrac{1}{2}, \tfrac{1}{2})$과 $(\tfrac{1}{2}, \tfrac{3}{2})$를 씁니다.
:::

:::counterexample[반지름을 두 점의 거리로 잡으면 겹칠 수 있다]
(1)에서 반지름을 거리의 절반으로 잡는 데는 까닭이 있습니다. $\mathbb{R}$의 보통 거리에서 $x = 0$, $y = 1$이면 $d(0, 1) = |0 - 1| = 1$입니다. 반지름을 $1$로 잡으면 [[open-ball]]의 (5)에 의해 $B(0, 1)$은 열린구간 $(-1, 1)$이고 $B(1, 1)$은 열린구간 $(0, 2)$인데, $\tfrac{1}{2}$이 두 구간에 함께 들어 두 공은 겹칩니다. 반지름 $t = \tfrac{1}{2}$이면 $(-\tfrac{1}{2}, \tfrac{1}{2})$과 $(\tfrac{1}{2}, \tfrac{3}{2})$로 겹치지 않습니다.
:::

:::counterexample[T₁ 이지만 거리위상이 아닌 위상]
$\mathbb{N}$ 위의 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$는 [[hausdorff-space]]의 (5)에 의해 $T_1$이지만 하우스도르프가 아닙니다. (1)에 의해 $\mathbb{N}$ 위의 어떤 거리 $d$의 거리위상 $\mathcal{T}_d$도 하우스도르프이므로, $\mathcal{T}_{\mathrm{cof}}$는 어떤 $\mathcal{T}_d$와도 같지 않습니다. 한 점 집합이 모두 닫혀 있다는 것((2))만으로는 거리위상이라고 할 수 없습니다.
:::

## 확인 질문

:::check[$\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를 줄 때, $(0, 0)$과 $(2, 0)$에 (1)이 주는 두 근방은 무엇인가?]
$d_{\max}((0, 0), (2, 0)) = \max\{|0 - 2|, |0 - 0|\} = \max\{2, 0\} = 2$이므로 $t = 1$입니다. [[open-ball]]의 (8)에 의해 $B((0, 0), 1)$은 열린구간의 곱 $I \times J$이고 $I = (-1, 1)$, $J = (-1, 1)$이며, $B((2, 0), 1)$은 $I' \times J$이고 $I' = (1, 3)$입니다. $z \in I \cap I'$이면 $z < 1$이고 $1 < z$인데 [[order-properties-of-reals]]의 (1)의 (i)에 의해 이것은 함께 성립하지 않으므로 $I$와 $I'$은 서로소이고, 두 곱집합도 서로소입니다(공통 원소가 있으면 그 첫째 성분이 $I \cap I'$에 든다).
:::

:::check[$X$ 위의 이산 거리 $d$에서 서로 다른 두 점 $x$, $y$에 (1)이 주는 두 근방은 무엇인가?]
$d(x, y) = 1$이므로 $t = \tfrac{1}{2}$이고, $t \le 1$이므로 [[open-ball]]의 (6)에 의해 $B(x, \tfrac{1}{2}) = \{x\}$, $B(y, \tfrac{1}{2}) = \{y\}$입니다. [[topology-examples]]의 (5)에 의해 이산 거리의 거리위상은 이산위상이므로, 이것은 [[hausdorff-space]]의 (4)의 증명이 쓴 두 근방 $\{x\}$, $\{y\}$와 같습니다.
:::
