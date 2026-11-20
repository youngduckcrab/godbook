---
title: 거리공간의 폐포·내부·경계·집적점
title_en: Closure, Interior, Boundary and Cluster Points in a Metric Space
aliases: [공으로 본 폐포, 공으로 본 내부, 닫힌 공과 폐포, 구간의 폐포, closure in a metric space]
kind: proposition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리위상에서 폐포, 내부, 경계, 집적점을 열린 공으로 판정하고, 열린 공의 폐포가 닫힌 공에 포함되지만 같지 않을 수 있음을 보이며, 실수의 유계인 구간의 폐포, 내부, 경계를 구한다.
requires: [set, subset, set-operations, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-ball-is-open, open-and-closed-sets-of-reals, topology-examples, closed-set, neighborhood, interior-and-closure, boundary, cluster-point-in-a-space, boundary-closure-and-cluster-points, closure-by-neighborhoods, interval, cluster-point, real-number-arithmetic, order-properties-of-reals, absolute-value, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Example 7.2.5 (p.265); 7.2.3절 Closure and boundary, Example 7.2.20 (p.270), Proposition 7.2.22 (p.270), Definition 7.2.23 (p.270), Example 7.2.24 (p.270), Proposition 7.2.27 (p.271); 7.2.4절 연습문제 7.2.13, 7.2.14 (p.272); 7.5.5절 Definition 7.5.14 와 그 뒤 문장 (p.292)"
    checked: original
    note: "(1)은 출처 Proposition 7.2.22(p.270)와 같은 진술이다. (2)의 뒤 문장은 출처 Definition 7.2.23(p.270)의 내부의 정의(B(x, δ) ⊂ A 인 δ > 0 이 있는 A 의 점 전체)가 이 사이트의 내부와 같은 집합이라는 것이고, 출처는 그 일치를 연습문제 7.2.14(p.272)로 둔다. (3)은 출처 Proposition 7.2.27(p.271)과 같은 진술이고, (4)는 출처 Definition 7.5.14(p.292)의 cluster point 의 정의가 이 사이트의 집적점과 같다는 것이다. 확인 질문 '거리공간에서 모든 r > 0 에 B(x, r) ∩ A ≠ ∅ 이고 x ∉ A 이면 x 는 A 의 집적점인가'는 출처가 Definition 7.5.14 바로 뒤(p.292)에서 'p 가 S 의 폐포에 드는 것으로는 모자라고 S ∖ {p} 의 폐포에 들어야 한다'고 적는 구별을 다룬다(x ∉ A 이면 A − {x} = A 이다). (5)의 앞 문장은 출처 연습문제 7.2.13 a(p.272)와 같은 결론이고, 뒤 문장은 그 연습문제 b('늘 같은가')에 답하는 것이다. (6)은 출처 Example 7.2.20(p.270, (0, 1) 의 폐포는 [0, 1])과 Example 7.2.24(p.270, (0, 1] 의 폐포, 내부, 경계)를 a < b 인 유계 구간 넷으로 넓힌 것이다. 출처는 이 증명들에서 공이 열려 있다는 것과 폐포가 닫혀 있다는 것을 쓰고, 이 항목은 근방 판정(closure-by-neighborhoods 의 (1))과 neighborhood 의 (4)를 쓴다. 반례 '정수의 부분공간 거리에서 공의 폐포'는 연습문제 7.2.13 b 와 같은 물음이다. 확인 질문 '양의 실수 전체의 폐포, 내부, 경계'의 집합 {t : 0 < t} 와 {t : 0 ≤ t} 는 출처 Example 7.2.5(p.265, (0, ∞) 는 열려 있고 [0, ∞) 는 닫혀 있다)와 같은 대상이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절의 Remark remark-def-open-balls, content/topological-spaces.tex:235–244; The subspace topology 절의 예(ℤ 의 부분공간 위상), 403"
    checked: original
    note: "출처는 거리공간의 폐포나 내부를 공으로 따로 진술하지 않고, Remark remark-def-open-balls(235–244)에서 거리위상의 열린집합이 정확히 각 점에 그 안의 공이 있는 집합이라는 것을 보인다. 이 항목의 (1)–(4)는 그 Remark 와 같은 내용인 neighborhood 의 (4)로 근방을 공으로 바꾼 것이다. 반례 '정수의 부분공간 거리에서 공의 폐포'는 출처의 예(403, ℤ ⊂ ℝ 의 부분공간 위상은 이산위상이고 {n} 은 ℤ 에서 열려 있다)와 같은 대상을 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 틀린 근거 1건, 부정확한 직관과 단원 글 문장, 블록 제목이 깨지는 화면 오류를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$와 닫힌 공 $C(x, r)$는 [[open-ball]]의 것이다. 거리위상은 [[topology-examples]]의 것이고, 내부와 폐포는 [[interior-and-closure]], 경계는 [[boundary]], 집적점은 [[cluster-point-in-a-space|위상공간의 집적점]]의 것이다. 아래에서 $(X, d)$는 거리공간이고 $X$에는 거리위상 $\mathcal{T}_d$를 준다. $A$는 $X$의 부분집합이고 $x$는 $X$의 점이다.

1. (폐포) $x \in \overline{A}$인 것은 정확히 모든 실수 $r > 0$에 대하여 $B(x, r) \cap A \ne \emptyset$일 때이다.
2. (내부) $x \in \operatorname{Int} A$인 것은 정확히 $B(x, r) \subseteq A$인 실수 $r > 0$이 있을 때이다. 따라서 $\operatorname{Int} A = \{y \in A : B(y, r) \subseteq A \text{인 실수 } r > 0 \text{이 있다}\}$이다.
3. (경계) $x \in \partial A$인 것은 정확히 모든 실수 $r > 0$에 대하여 $B(x, r) \cap A \ne \emptyset$이고 $B(x, r) \cap (X - A) \ne \emptyset$일 때이다.
4. (집적점) $x$가 $A$의 집적점인 것은 정확히 모든 실수 $r > 0$에 대하여 $(B(x, r) \cap A) - \{x\} \ne \emptyset$일 때이다.
5. (열린 공의 폐포) 실수 $r > 0$에 대하여 $\overline{B(x, r)} \subseteq C(x, r)$이다. 이 포함은 등호가 아닐 수 있다. $d$가 $X$ 위의 이산 거리이고 $X$에 $x$와 다른 점이 있으면 $\overline{B(x, 1)} = \{x\}$이고 $C(x, 1) = X$이다.
6. (실수의 유계인 구간) $\mathbb{R}$에 보통 거리를 주고, $a < b$인 실수 $a$, $b$에 대하여 $I$가 $(a, b)$, $[a, b)$, $(a, b]$, $[a, b]$ 가운데 하나라 하자. 그러면 $\overline{I} = [a, b]$, $\operatorname{Int} I = (a, b)$, $\partial I = \{a, b\}$이다.
:::

:::english
Metric spaces and their examples are as in the entries on metric spaces, the open ball $B(x, r)$ and the closed ball $C(x, r)$ as in the entry on open balls, the metric topology as in the entry on examples of topologies, and interior and closure, boundaries, and cluster points as in the corresponding entries. Below, $(X, d)$ is a metric space and $X$ carries the metric topology $\mathcal{T}_d$; $A$ is a subset of $X$ and $x$ is a point of $X$.

1. (Closure) $x \in \overline{A}$ exactly when $B(x, r) \cap A \ne \emptyset$ for every real number $r > 0$.
2. (Interior) $x \in \operatorname{Int} A$ exactly when there is a real number $r > 0$ with $B(x, r) \subseteq A$. Hence $\operatorname{Int} A = \{y \in A : \text{there is a real number } r > 0 \text{ with } B(y, r) \subseteq A\}$.
3. (Boundary) $x \in \partial A$ exactly when $B(x, r) \cap A \ne \emptyset$ and $B(x, r) \cap (X - A) \ne \emptyset$ for every real number $r > 0$.
4. (Cluster points) $x$ is a cluster point of $A$ exactly when $(B(x, r) \cap A) - \{x\} \ne \emptyset$ for every real number $r > 0$.
5. (Closure of an open ball) For a real number $r > 0$, $\overline{B(x, r)} \subseteq C(x, r)$. This inclusion can be strict: if $d$ is the discrete metric on $X$ and $X$ has a point other than $x$, then $\overline{B(x, 1)} = \{x\}$ and $C(x, 1) = X$.
6. (Bounded intervals of reals) Give $\mathbb{R}$ the standard metric, let $a < b$ be real numbers, and let $I$ be one of $(a, b)$, $[a, b)$, $(a, b]$, $[a, b]$. Then $\overline{I} = [a, b]$, $\operatorname{Int} I = (a, b)$ and $\partial I = \{a, b\}$.
:::

## 직관

위상공간에서 폐포, 내부, 경계, 집적점은 "모든 근방" 또는 "어떤 근방"으로 정의했습니다. 거리위상에서는 근방 대신 열린 공만 보면 됩니다. 열린 공 $B(x, r)$는 $x$의 근방이고, $x$의 근방은 언제나 어떤 $B(x, r)$를 포함하기 때문입니다([[neighborhood]]의 (4)). "모든 근방"은 "모든 반지름"으로, "어떤 근방"은 "어떤 반지름"으로 바뀝니다. 그래서 (1)–(4)는 1단원과 해석학 입문에서 익숙한 "$\varepsilon$ 꼴"의 문장이 됩니다.

비유하자면 공은 $x$ 둘레를 재는 자이고, 반지름은 자의 눈금입니다. 근방은 모양이 제각각인 동네이지만, 거리공간에서는 어떤 동네에도 그 안에 들어가는 눈금 하나짜리 원이 있고 그 원 자체도 동네입니다. 그래서 동네를 모두 확인하는 대신 원을 모두 확인하면 됩니다. 이 비유에서 "원이 동네이다"가 (4)의 (a), "어떤 동네에도 원이 들어간다"가 (4)의 (b)에 맞습니다.

(5)는 이름이 주는 착각을 막습니다. "열린 공"의 폐포가 "닫힌 공"일 것 같지만, 닫힌 공은 폐포를 포함할 뿐 같지 않을 수 있습니다. 거리가 $1$씩 떨어진 점들만 있는 공간에서는 반지름 $1$인 열린 공이 중심 하나뿐이지만 닫힌 공은 전체가 됩니다.

## 증명

:::idea
(1)–(4)는 근방으로 쓴 정의나 판정에 [[neighborhood]]의 (4)를 넣어 근방과 공을 맞바꾼다. (5)는 닫힌 공이 닫힌집합이라는 것, (6)은 해석학 입문의 집적점과의 일치를 쓴다.
:::

:::hint
(1)의 한 방향: $x$의 근방 $U$는 어떤 $B(x, r)$를 포함하고, 그 공이 $A$와 만나면 $U$도 만난다.
:::

:::hint
(6): 닫힌구간의 모든 점은 열린구간의 집적점이다([[cluster-point]]의 (5)).
:::

:::proof
[[neighborhood]]의 (4)에 의해 (a) 모든 $r > 0$에서 $B(x, r)$는 $x$의 근방이고, (b) $x$의 근방 $U$에는 $B(x, r) \subseteq U$인 $r > 0$이 있다. 이 둘을 "근방의 (4)(a)", "근방의 (4)(b)"로 부른다.

**(1).** $x \in \overline{A}$이고 $r > 0$이면 근방의 (4)(a)와 [[closure-by-neighborhoods]]의 (1)에 의해 $B(x, r) \cap A \ne \emptyset$이다. 거꾸로 모든 $r > 0$에서 $B(x, r) \cap A \ne \emptyset$이라 하고 $U$를 $x$의 근방이라 하자. 근방의 (4)(b)에 의해 $B(x, r) \subseteq U$인 $r > 0$이 있고, $B(x, r) \cap A$의 원소는 $U \cap A$의 원소이므로 $U \cap A \ne \emptyset$이다. [[closure-by-neighborhoods]]의 (1)에 의해 $x \in \overline{A}$이다.

**(2).** $x \in \operatorname{Int} A$이면 [[interior-and-closure]]의 (7)에 의해 $U \subseteq A$인 $x$의 근방 $U$가 있고, 근방의 (4)(b)에 의해 $B(x, r) \subseteq U \subseteq A$인 $r > 0$이 있다. 거꾸로 $B(x, r) \subseteq A$인 $r > 0$이 있으면 근방의 (4)(a)에 의해 $B(x, r)$는 $A$에 포함되는 $x$의 근방이고, [[interior-and-closure]]의 (7)에 의해 $x \in \operatorname{Int} A$이다. 뒤 문장: [[interior-and-closure]]의 (1)에 의해 $\operatorname{Int} A \subseteq A$이므로, $\operatorname{Int} A$의 원소는 정확히 앞 문장의 조건을 만족하는 $A$의 점이다.

**(3).** $x \in \partial A$이고 $r > 0$이면 근방의 (4)(a)에 의해 $B(x, r)$는 $x$의 근방이므로 [[boundary]]의 정의에 의해 $B(x, r)$는 $A$와도 $X - A$와도 만난다. 거꾸로 모든 $r > 0$에서 $B(x, r)$가 $A$와도 $X - A$와도 만난다고 하고 $U$를 $x$의 근방이라 하자. 근방의 (4)(b)에 의해 $B(x, r) \subseteq U$인 $r > 0$이 있고, $B(x, r) \cap A$와 $B(x, r) \cap (X - A)$의 원소는 각각 $U \cap A$와 $U \cap (X - A)$의 원소이다. [[boundary]]의 정의에 의해 $x \in \partial A$이다.

**(4).** $x$가 $A$의 집적점이고 $r > 0$이면 근방의 (4)(a)와 [[cluster-point-in-a-space|위상공간의 집적점]]의 정의에 의해 $(B(x, r) \cap A) - \{x\} \ne \emptyset$이다. 거꾸로 모든 $r > 0$에서 이것이 성립하고 $U$가 $x$의 근방이면 근방의 (4)(b)에 의해 $B(x, r) \subseteq U$인 $r > 0$이 있고, $(B(x, r) \cap A) - \{x\}$의 원소는 $(U \cap A) - \{x\}$의 원소이다. 따라서 $x$는 $A$의 집적점이다.

**(5).** [[open-ball-is-open|열린 공은 열린집합]]의 (2)에 의해 $C(x, r)$는 $(X, d)$에서 닫힌집합이고, [[closed-set]]의 (6)에 의해 $(X, \mathcal{T}_d)$에서 닫힌집합이다. [[open-ball]]의 (1)에 의해 $B(x, r) \subseteq C(x, r)$이므로 [[interior-and-closure]]의 (2)에 의해 $\overline{B(x, r)} \subseteq C(x, r)$이다.

$d$가 이산 거리이면 [[open-ball]]의 (6)에 의해 $B(x, 1) = \{x\}$이고($r = 1 \le 1$) $C(x, 1) = X$이다($1 \le r = 1$). [[topology-examples]]의 (5)에 의해 $\mathcal{T}_d$는 이산위상이므로 [[interior-and-closure]]의 (9)에 의해 $\overline{\{x\}} = \{x\}$이다. $X$에 $x$와 다른 점 $y$가 있으면 $y \in X$이고 $y \notin \{x\}$이므로 $\{x\} \ne X$이다.

**(6).** [[interval]]의 정의에 의해 $(a, b) \subseteq I \subseteq [a, b]$이다. $a < b$이므로 $a \le a \le b$이고 $a \le b \le b$여서 $a, b \in [a, b]$이고, $a < a$와 $b < b$는 성립하지 않으므로([[order-properties-of-reals]]의 (1)의 (i)) $a, b \notin (a, b)$이다.

*폐포.* [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)와 [[closed-set]]의 (6)에 의해 $[a, b]$는 닫힌집합이므로 [[interior-and-closure]]의 (2)에 의해 $\overline{I} \subseteq [a, b]$이다. 거꾸로 $c \in [a, b]$이면 [[cluster-point]]의 (5)에 의해 $c$는 그 뜻으로 $(a, b)$의 집적점이고, [[cluster-point-in-a-space|위상공간의 집적점]]의 (8)에 의해 이 위상의 뜻으로도 $(a, b)$의 집적점이다. [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (7)에 의해 $c \in \overline{(a, b)}$이고, [[interior-and-closure]]의 (4)에 의해 $\overline{(a, b)} \subseteq \overline{I}$이다. 따라서 $\overline{I} = [a, b]$이다.

*내부.* [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (1)과 [[topology-examples]]의 (4)에 의해 $(a, b)$는 열린집합이고 $(a, b) \subseteq I$이므로 [[interior-and-closure]]의 (2)에 의해 $(a, b) \subseteq \operatorname{Int} I$이다. 거꾸로 $a \notin \operatorname{Int} I$임을 보인다. $a \in \operatorname{Int} I$라면 (2)에 의해 $B(a, r) \subseteq I$인 $r > 0$이 있다. $y = a - r/2$라 하면 [[order-properties-of-reals]]의 (8)에 의해 $0 < r/2 < r$이고 [[real-number-arithmetic]]의 계산으로 $a - y = r/2$이므로, 같은 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $y < a$이고 [[absolute-value]]의 (1)에 의해 $d(a, y) = |a - y| = r/2 < r$이다. 곧 $y \in B(a, r) \subseteq I \subseteq [a, b]$인데 $y < a$이므로 $y \notin [a, b]$가 되어 어긋난다. 또 $b \notin \operatorname{Int} I$임을 보인다. $b \in \operatorname{Int} I$라면 $B(b, s) \subseteq I$인 $s > 0$이 있다. $z = b + s/2$라 하면 [[order-properties-of-reals]]의 (8)에 의해 $0 < s/2 < s$이고 $z - b = s/2$이므로 그 (3)의 (i)에 의해 $b < z$이며, [[absolute-value]]의 (3)과 (1)에 의해 $d(b, z) = |b - z| = |-(s/2)| = s/2 < s$이다. 곧 $z \in B(b, s) \subseteq [a, b]$인데 $b < z$이므로 $z \notin [a, b]$가 되어 어긋난다. 이제 $x \in \operatorname{Int} I$이면 [[interior-and-closure]]의 (1)에 의해 $x \in I \subseteq [a, b]$, 곧 $a \le x \le b$이고, $x \ne a$, $x \ne b$이므로 $a < x < b$이다. 따라서 $\operatorname{Int} I = (a, b)$이다.

*경계.* [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)에 의해 $\partial I = \overline{I} - \operatorname{Int} I = [a, b] - (a, b)$이다. 첫 문단에 의해 $a$, $b$는 이 집합의 원소이고, $[a, b]$의 원소 $x$가 $a$도 $b$도 아니면 $a < x < b$이므로 $x \in (a, b)$이다. 따라서 $\partial I = \{a, b\}$이다.
:::

## 예시와 반례

:::example[실수에서는 열린 공의 폐포가 닫힌 공이다]
$\mathbb{R}$에 보통 거리를 주면, 실수 $x$와 $r > 0$에 대하여 [[open-ball]]의 (5)에 의해 $x - r < x + r$이고 $B(x, r) = (x - r, x + r)$, $C(x, r) = [x - r, x + r]$입니다. (6)에 의해 $\overline{B(x, r)} = [x - r, x + r] = C(x, r)$입니다. (5)의 포함이 등호가 되는 경우입니다.
:::

:::counterexample[정수의 부분공간 거리에서 공의 폐포]
$\mathbb{Z} \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리 $d_{\mathbb{Z}}$([[metric-space-examples]]의 (3))를 주고 $B = B(0, 1)$, $C = C(0, 1)$을 $(\mathbb{Z}, d_{\mathbb{Z}})$의 공이라 합시다. 정수 $m$이 $B$에 드는 것은 $|m| < 1$일 때이고, [[absolute-value]]의 (7)에 의해 $-1 < m < 1$입니다. [[well-ordering-principle]]의 (Z5)에 의해 $m < 0$, $m = 0$, $0 < m$ 가운데 하나인데, $0 < m$이면 [[prime-number]]의 (Z1)에 의해 $1 \le m$이 되어 $m < 1$과 함께 성립하지 않고, $m < 0$이면 (Z1)과 (Z7)에 의해 $m \le -1$이 되어 $-1 < m$과 함께 성립하지 않습니다([[order-properties-of-reals]]의 (10)과 (1)의 (i)). 따라서 $B = \{0\}$입니다. 한편 $|-1| = |1| = 1 \le 1$이므로 $-1, 1 \in C$이고 $C \ne \{0\}$입니다.

[[open-set-in-metric-space|거리공간의 열린집합과 닫힌집합]]의 (5)에 의해 $\{0\}$은 $(\mathbb{Z}, d_{\mathbb{Z}})$에서 닫힌집합이고, [[closed-set]]의 (6)과 [[interior-and-closure]]의 (3)에 의해 $\overline{B} = \{0\} \ne C$입니다. 이 공간은 이산 거리가 아닌데도 (5)의 포함이 등호가 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}$(보통 거리)에서 $A = \{t \in \mathbb{R} : 0 < t\}$의 폐포, 내부, 경계는 무엇인가?]
$\overline{A} = \{t : 0 \le t\}$, $\operatorname{Int} A = A$, $\partial A = \{0\}$입니다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (1)에 의해 $A$는 열린집합이므로 [[interior-and-closure]]의 (3)에 의해 $\operatorname{Int} A = A$입니다. 같은 항목의 (2)에 의해 $\{t : 0 \le t\}$는 $A$를 포함하는 닫힌집합이므로 $\overline{A} \subseteq \{t : 0 \le t\}$입니다. $0 \in \overline{A}$도 성립합니다. $r > 0$이면 [[order-properties-of-reals]]의 (8)에 의해 $0 < r/2 < r$이고 [[absolute-value]]의 (3)과 (1)에 의해 $d(0, r/2) = |-(r/2)| = r/2 < r$이므로 $r/2 \in B(0, r) \cap A$이고, (1)에 의해 $0 \in \overline{A}$입니다. 따라서 $\overline{A} = A \cup \{0\} = \{t : 0 \le t\}$이고, [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)에 의해 $\partial A = \overline{A} - A = \{0\}$입니다.
:::

:::check[거리공간에서 모든 $r > 0$에 $B(x, r) \cap A \ne \emptyset$이고 $x \notin A$이면, $x$는 $A$의 집적점인가?]
그렇습니다. $r > 0$이면 $B(x, r) \cap A$의 원소 $y$는 $A$의 원소이고 $x \notin A$이므로 $y \ne x$입니다. 곧 $(B(x, r) \cap A) - \{x\} \ne \emptyset$이고, (4)에 의해 $x$는 $A$의 집적점입니다.
:::
