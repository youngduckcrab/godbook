---
title: 열린 공은 열린집합이다
title_en: Open Balls Are Open
aliases: [닫힌 공은 닫힌집합이다, open balls are open, closed balls are closed]
kind: proposition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간에서 열린 공은 열린집합이고 닫힌 공은 닫힌집합이다. 한 점에서의 거리가 r 보다 큰 점 전체도 열린집합이다.
requires: [metric-space, open-ball, open-set-in-metric-space, set-operations, real-order-axioms, order-properties-of-reals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Proposition 7.2.9 와 그 앞 문장, 그 증명 (p.266); 7.2.2절 Connected sets, Example 7.2.17 (p.269); 7.2.4절 연습문제 7.2.2 (p.272)"
    checked: original
    note: "진술 (1), (2)는 출처 Proposition 7.2.9 이다. 출처는 열린 공 쪽을 α = δ − d(x, y) 로 두고 삼각부등식으로 증명하며, 이 항목의 (1)의 증명은 그 계산을 열린 공 항목의 (3)으로 인용한 것이다. 출처는 닫힌 공 쪽의 증명을 연습문제 7.2.2 로 둔다. 이 항목은 열린 공 항목의 (4)로 증명한다. 출처는 Proposition 7.2.9 바로 앞에서 '이름과 달리 열린 공이 열려 있고 닫힌 공이 닫혀 있다는 것은 아직 보이지 않았다'고 적는다. 반례 '닫힌 공이 열린집합일 수도 있다'의 이산 거리 공간은 출처가 Example 7.2.17(p.269)에서 쓰는 원소 둘인 이산 거리공간과 같은 종류의 대상이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절, Proposition (label metric-basis) 의 증명과 Remark (label remark-def-open-balls), content/topological-spaces.tex:209–244"
    checked: original
    note: "출처는 열린 공 전체가 위상의 기저임을 보이는 증명(220–233)과 Remark(239–241)에서 이 항목의 (1)과 같은 계산(반지름을 r − d(x, y) 꼴로 잡는다)을 쓴다. 출처는 거리공간의 닫힌 공을 정의하지 않는다(검색어 'closed ball' 은 content/*.tex 에서 0건)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 1건과 다른 항목의 예를 근거로 삼은 예를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간은 [[metric-space]], 열린 공 $B(x, r)$와 닫힌 공 $C(x, r)$는 [[open-ball]], 열린집합과 닫힌집합은 [[open-set-in-metric-space]]의 것이다. $(X, d)$가 거리공간이고 $x \in X$, $0 < r$이면 다음이 성립한다.

1. 열린 공 $B(x, r)$는 $(X, d)$에서 열린집합이다.
2. 닫힌 공 $C(x, r)$는 $(X, d)$에서 닫힌집합이다.
3. $\{y \in X : r < d(x, y)\} = X - C(x, r)$이고, 이 집합은 $(X, d)$에서 열린집합이다.
:::

:::english
Metric spaces, the open ball $B(x, r)$ and the closed ball $C(x, r)$, and open and closed sets are as in the earlier entries. If $(X, d)$ is a metric space, $x \in X$ and $0 < r$, then:

1. The open ball $B(x, r)$ is an open set in $(X, d)$.
2. The closed ball $C(x, r)$ is a closed set in $(X, d)$.
3. $\{y \in X : r < d(x, y)\} = X - C(x, r)$, and this set is open in $(X, d)$.
:::

## 직관

"열린 공"과 "닫힌 공"은 이름일 뿐이었고, 열린집합과 닫힌집합은 그와 따로 정의했습니다. 이 명제는 이름이 정의와 맞는다는 것을 보입니다.

열린 공이 열린집합인 까닭은 공 안의 점 $y$마다 그 점을 중심으로 하는 작은 공이 원래 공 안에 들어가기 때문입니다([[open-ball]]의 (3)). 닫힌 공이 닫힌집합인 까닭은 닫힌 공 밖의 점 $y$마다 닫힌 공과 만나지 않는 작은 공이 있기 때문입니다([[open-ball]]의 (4)). 두 경우 모두 작은 공의 반지름은 $y$가 경계에서 떨어진 정도, 곧 $r - d(x, y)$와 $d(x, y) - r$입니다.

## 증명

:::idea
열린집합과 닫힌집합의 정의(닫힌집합은 판정법 (3))에 [[open-ball]]의 (3)과 (4)를 그대로 넣습니다.
:::

:::hint
$y \in B(x, r)$이면 $B(y, s) \subseteq B(x, r)$인 $s > 0$이 무엇인지 [[open-ball]]의 진술에서 찾아보세요.
:::

:::proof
**(1).** $y \in B(x, r)$라 하자. [[open-ball]]의 (3)에 의해 $s = r - d(x, y)$는 양수이고 $B(y, s) \subseteq B(x, r)$이다. $B(x, r)$의 모든 점 $y$에서 이런 양수 $s$가 있으므로 열린집합의 정의에 의해 $B(x, r)$는 열린집합이다.

**(3)의 등식.** $y \in X$라 하자. [[set-operations|차집합]]의 정의에 의해 $y \in X - C(x, r)$인 것은 정확히 $d(x, y) \le r$가 성립하지 않을 때이고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 이것은 정확히 $r < d(x, y)$일 때이다. 따라서 $\{y \in X : r < d(x, y)\} = X - C(x, r)$이다.

**(2).** $y \in X - C(x, r)$라 하자. 방금 보인 등식에 의해 $r < d(x, y)$이고, [[open-ball]]의 (4)에 의해 $s = d(x, y) - r$은 양수이며 $B(y, s) \cap C(x, r) = \emptyset$이다. $X - C(x, r)$의 모든 점에서 이런 양수 $s$가 있으므로 [[open-set-in-metric-space]]의 (3)에 의해 $C(x, r)$는 닫힌집합이다.

**(3)의 나머지.** (2)와 닫힌집합의 정의에 의해 $X - C(x, r)$는 열린집합이다.
:::

## 예시와 반례

:::example[평면의 원판 바깥]
$\mathbb{R} \times \mathbb{R}$에 유클리드 거리 $d_E$를 주면, (3)에 의해 원점 $o = (0, 0)$에서 거리가 $1$보다 큰 점 전체 $\{q : 1 < d_E(o, q)\}$는 열린집합입니다. 예컨대 점 $q = (2, 0)$에서는 $d_E(o, q) = 2$이므로 반지름 $2 - 1 = 1$인 공 $B(q, 1)$이 이 집합 안에 들어갑니다.
:::

:::counterexample[닫힌 공이 열린집합일 수도 있다]
"닫힌 공은 닫혀 있다"는 "닫힌 공은 열려 있지 않다"는 뜻이 아닙니다. 집합 $X$에 이산 거리를 주면 [[open-ball]]의 (6)에 의해 $C(x, 1/2) = \{x\}$이고, [[open-set-in-metric-space]]의 (4)의 (iii)에 의해 이 집합은 열린집합이기도 합니다. 같은 이유로 열린 공 $B(x, 2) = X$는 닫힌집합이기도 합니다.
:::

## 확인 질문

:::check[$\mathbb{R}$(보통 거리)에서 $\{y \in \mathbb{R} : 3 < |y - 1|\}$은 열린집합인가?]
그렇습니다. 보통 거리는 $d(1, y) = |1 - y| = |y - 1|$이므로 이 집합은 (3)에서 $x = 1$, $r = 3$으로 둔 집합입니다.
:::

:::check[거리공간에서 $S = \{y \in X : d(x, y) = r\}$은 닫힌집합인가?]
그렇습니다. $z \in X - S$이면 $d(x, z) \ne r$이므로 (W1)에 의해 $d(x, z) < r$이거나 $r < d(x, z)$입니다. 앞의 경우 [[open-ball]]의 (3)의 공 $B(z, s) \subseteq B(x, r)$에는 거리가 $r$인 점이 없고, 뒤의 경우 [[open-ball]]의 (4)의 공 $B(z, s)$는 $C(x, r)$와 만나지 않으므로 $S \subseteq C(x, r)$와도 만나지 않습니다. 어느 경우든 $B(z, s) \cap S = \emptyset$이므로 [[open-set-in-metric-space]]의 (3)에 의해 $S$는 닫힌집합입니다.
:::
