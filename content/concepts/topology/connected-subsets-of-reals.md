---
title: 실수의 연결 부분집합
title_en: Connected Subsets of the Real Line
aliases: [구간은 연결이다, 실수는 연결이다, connected subsets of the reals, intervals are connected, the real line is connected]
kind: theorem
field: topology
msc: ["54D05"]
level: undergrad
summary: 보통 위상의 ℝ 에서 부분집합 S 가 연결인 것은 정확히 S 의 두 점 사이의 실수가 모두 S 에 속할 때이다. 따라서 ℝ 의 연결 부분집합은 정확히 공집합, 한 점 집합, 구간이고, ℝ 자신도 연결이어서 ℝ 에서 열려 있고 닫혀 있는 부분집합은 공집합과 ℝ 뿐이다.
requires: [set, subset, set-operations, real-number-arithmetic, real-order-axioms, order-properties-of-reals, prime-number, upper-bound-and-supremum, infimum-exists, interval, open-ball, neighborhood, open-and-closed-sets-of-reals, standard-topology-on-reals, metric-subspace-topology, rational-and-irrational-numbers, connected-space, union-of-connected-sets]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.2절 Connected sets, Example 7.2.15 (p.268), Proposition 7.2.16 과 증명, 그림 7.8 (p.269); 1.4절 Proposition 1.4.1 (p.41)"
    checked: original
    note: "(1)과 (2)는 Proposition 7.2.16(p.269: 공집합이 아닌 S ⊆ ℝ 가 연결인 것은 정확히 S 가 구간이거나 한 점일 때)과 같은 내용이다. 이 항목은 공집합을 연결로 두므로 (2)에 공집합이 들어간다. 출처는 '연결이면 구간'을 Example 7.2.15(p.268)의 두 반직선으로 가르는 논법과 Proposition 1.4.1(p.41: 구간인 것은 정확히 두 점 이상을 갖고 두 점 사이의 점을 모두 가질 때)로 보인다. 이 사이트의 interval 은 그 조건을 정의로 삼으므로 (2)는 (1)과 정의에서 나온다. '사이의 점을 가지면 연결'은 출처와 같은 하한 논법(z = inf(U₂ ∩ [x, y]) 가 U₁ 에 속함을 보이고 B(z, δ) ⊆ U₁ 에서 U₁ ∩ U₂ 의 점을 찾는다)이다. 출처는 'Without loss of generality, assume x < y' 로 두고, 이 항목은 (나)를 세워 x < y 와 y < x 의 두 경우에 따로 쓴다. 출처가 z > x 인 경우 'B(z, ε) contains points of [x, y] not in U₂' 로 z ∉ U₂ 를 보이는 곳을, 이 항목은 z ∈ Q 라 하고 p 와 z − δ 를 비교하는 두 경우로 쓴다. 예시 '한 점을 뺀 실수'와 확인 질문 '0 이하이거나 1 이상인 수'는 Example 7.2.15(x < z < y, x, y ∈ S, z ∉ S 이면 연결이 아니다)와 같은 발상이다."
  - ref: fuglede-basic-topology
    loc: "Connectedness 절의 예 intervals-are-connected (content/connectedness.tex:40–47); 연습문제 2.4 connected-implies-interval (content/exercises.tex:82)"
    checked: original
    note: "(2)의 '구간은 연결이다'는 출처의 예 intervals-are-connected(40–47)와 같은 내용이다. 출처 42줄은 '모든 A ⊂ ℝ 에 대하여 sup A ∈ Ā' 라고 적고 그 근거로 sup A 가 A 의 수열의 극한이라는 것을 들며, z = sup U₀ 로 증명한다. 이 항목은 수열을 쓰지 않는 Lebl 의 하한 논법으로 증명한다. 거꾸로(연결이면 구간)는 출처 연습문제 2.4 connected-implies-interval(exercises.tex:82)이다. 반례 '유리수와 정수의 빠진 점'의 ℚ 는 출처의 예(connectedness.tex:29–35)와 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 공집합·한 점인 경우를 빠뜨린 진술의 가정, 근거 없는 예시와 반례 제목을 고쳤다."
added: 2026-11-19
---

:::statement
$\mathbb{R}$에는 보통 위상([[standard-topology-on-reals]]의 (5))을 주고, $\mathbb{R}$의 부분집합에는 그 부분공간 위상([[metric-subspace-topology]]의 (2))을 준다. 연결공간과 연결 부분집합은 [[connected-space|연결공간]]의 것이고, 구간과 구간의 기호는 [[interval]]의 것이다. 아래에서 $S$는 $\mathbb{R}$의 부분집합이다.

$S$가 **사이의 점을 모두 갖는다**는 것은 $x$, $y$가 $S$의 원소이고 $z$가 실수이며 $x < z < y$이면 $z \in S$라는 뜻이다. 이것은 [[interval]]의 정의의 조건 (ii)와 같은 조건이다.

1. (판정) $S$가 $\mathbb{R}$의 연결 부분집합인 것은 정확히 $S$가 사이의 점을 모두 가질 때이다.
2. (연결 부분집합 전체) $S$가 $\mathbb{R}$의 연결 부분집합인 것은 정확히 $S = \emptyset$이거나, 어떤 실수 $p$에 대하여 $S = \{p\}$이거나, $S$가 구간일 때이다. 특히 $a < b$일 때의 $[a, b]$, $(a, b)$, $(a, b]$, $[a, b)$와, 실수 $a$에 대한 $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$, 그리고 $\mathbb{R}$은 모두 연결 부분집합이다.
3. (실수 전체) $\mathbb{R}$은 연결공간이다. 따라서 $\mathbb{R}$의 부분집합 가운데 보통 위상에서 열린집합이면서 닫힌집합인 것은 $\emptyset$과 $\mathbb{R}$뿐이다.
4. (아래끝 위상과의 대비) 같은 집합 $\mathbb{R}$에 아래끝 위상을 준 $\mathbb{R}_l$은 [[connected-space]]의 (5)의 (iv)에 의해 연결공간이 아니다. 곧 (3)은 보통 위상에 대한 진술이다.
:::

:::english
$\mathbb{R}$ is given the standard topology (item (5) of the entry on bases of metric topologies and the standard topology on the reals), and subsets of $\mathbb{R}$ are given its subspace topology (item (2) of the entry on the topology of metric subspaces). Connected spaces and connected subsets are as in the entry on connected spaces, and intervals and their notation are as in the entry on intervals. Below, $S$ is a subset of $\mathbb{R}$.

$S$ **contains all points in between** if, whenever $x$, $y$ are elements of $S$, $z$ is a real number and $x < z < y$, we have $z \in S$. This is the same condition as condition (ii) in the definition of an interval.

1. (Criterion) $S$ is a connected subset of $\mathbb{R}$ exactly when $S$ contains all points in between.
2. (All connected subsets) $S$ is a connected subset of $\mathbb{R}$ exactly when $S = \emptyset$, or $S = \{p\}$ for some real number $p$, or $S$ is an interval. In particular, for $a < b$ the sets $[a, b]$, $(a, b)$, $(a, b]$, $[a, b)$, for a real number $a$ the sets $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$, and $\mathbb{R}$ itself are all connected subsets.
3. (The whole real line) $\mathbb{R}$ is a connected space. Hence the only subsets of $\mathbb{R}$ that are both open and closed in the standard topology are $\emptyset$ and $\mathbb{R}$.
4. (Contrast with the lower limit topology) The same set $\mathbb{R}$ with the lower limit topology, $\mathbb{R}_l$, is not a connected space by item (5)(iv) of the entry on connected spaces. That is, (3) is a statement about the standard topology.
:::

## 직관

실수의 부분집합이 두 조각으로 나뉜다는 것은 그 사이에 빠진 점이 있다는 것입니다. $S$의 두 점 $x < y$ 사이에 $S$에 없는 점 $z$가 있으면, $z$보다 작은 쪽과 큰 쪽이 $S$를 가릅니다. (1)은 그 거꾸로도 맞다는 것, 곧 빠진 점이 없으면 어떤 열린집합으로도 $S$를 가를 수 없다는 것입니다. 비유하자면 자에 표시한 눈금 사이가 한 군데도 비어 있지 않으면 자를 두 동강 낼 틈이 없습니다. "비어 있지 않다"가 사이의 점을 모두 갖는다는 조건에, "두 동강"이 분리에 맞습니다.

거꾸로 방향은 최소상계 성질로 증명합니다. $S$를 가르는 열린집합 $U$, $V$가 있다고 하고 $x \in U$, $y \in V$, $x < y$라 하면, $V$에 든 $[x, y]$의 점들의 하한 $z$를 봅니다. $z$는 $U$에도 $V$에도 속할 수 없습니다. $V$에 속하면 $z$의 바로 왼쪽까지 $V$에 들어, $x$ 자신이 $V$에 들거나 $z$보다 작은 $[x, y]$의 점이 $V$에 들어 하한이라는 것에 어긋나고, $U$에 속하면 $z$ 바로 오른쪽에 있는 $V$의 점이 $U$에도 들어 $U$와 $V$가 $S$ 안에서 겹치기 때문입니다. 그런데 $z$는 $[x, y]$의 점이어서 $S$에 있으므로 어느 쪽엔가 속해야 합니다.

이 증명이 쓰는 것은 실수의 순서, 하한의 존재, 그리고 보통 위상의 열린집합이 각 점을 둘러싼 열린구간을 품는다는 것입니다. 같은 집합에 아래끝 위상을 주면 $\{x : x < 0\}$이 열려 있고 닫혀 있어서 (3)이 성립하지 않습니다. 연결은 집합 $\mathbb{R}$만의 성질이 아니라 위상의 성질입니다.

## 증명

:::idea
"연결이면 사이의 점을 모두 갖는다"는 빠진 점 $z$의 양쪽 반직선으로 가른다. 거꾸로는 $S$를 가르는 열린집합이 있다고 하고, 한쪽에 든 점들의 하한이 어느 쪽에도 속할 수 없음을 보인다.
:::

:::hint
$U$, $V$가 $S$를 가르고 $p \in U \cap S$, $q \in V \cap S$, $p < q$라 하세요. $E = V \cap [p, q]$는 공집합이 아니고 $p$가 하계이므로 하한 $z$를 갖습니다. $p \le z \le q$이므로 $z \in S$입니다.
:::

:::hint
$z \in V$이면 $z \ne p$이고, $(z - \delta, z + \delta) \subseteq V$인 $\delta > 0$이 있습니다. $p$가 $z - \delta$보다 큰지 아닌지로 나누어 보세요. $z \in U$이면 $(z - \delta, z + \delta) \subseteq U$인 $\delta$를 잡고 [[upper-bound-and-supremum]]의 (4)로 $z + \delta$보다 작은 $E$의 점을 찾으세요.
:::

:::proof
아래에서 "연결 (2)"처럼 쓴 것은 [[connected-space]]의 번호이다. 실수의 순서에 관한 사실은 [[real-order-axioms]]의 (W1)–(W4)와 [[order-properties-of-reals]]의 번호로 인용한다. $\mathbb{R}$의 보통 거리를 $d$라 하면 보통 위상은 거리위상 $\mathcal{T}_d$이다([[standard-topology-on-reals]]의 (5)).

**증명 안에서 쓰는 사실 (가).** $W \subseteq \mathbb{R}$가 보통 위상에서 열린집합이고 $t \in W$이면, 실수 $\delta > 0$으로서 $t - \delta < s < t + \delta$인 모든 실수 $s$가 $W$에 속하는 것이 있다. [[neighborhood]]의 (4)의 (b)에 의해 $B(t, \delta) \subseteq W$인 $\delta > 0$이 있고, [[open-ball]]의 (5)에 의해 $B(t, \delta)$는 열린구간 $(t - \delta, t + \delta)$, 곧 $t - \delta < s < t + \delta$인 실수 $s$ 전체이기 때문이다.

**(1)의 "연결이면 사이의 점을 모두 갖는다".** $S$가 연결 부분집합이라 하고, $x$, $y \in S$, $x < z < y$라 하자. $z \notin S$라고 가정한다. $U = \{t \in \mathbb{R} : t < z\}$, $V = \{t \in \mathbb{R} : z < t\}$로 두면 [[open-and-closed-sets-of-reals]]의 (1)과 [[standard-topology-on-reals]]의 (5)에 의해 둘은 보통 위상에서 열린집합이다. $t \in S$이면 $z \notin S$이므로 $t \ne z$이고, (W1)에 의해 $t < z$이거나 $z < t$이다. 곧 $S \subseteq U \cup V$이다. $t \in U \cap V$이면 $t < z$이고 $z < t$이어서 (W1)에 어긋나므로 $U \cap V \cap S = \emptyset$이다. $x \in U \cap S$이고 $y \in V \cap S$이다. 연결 (2)에 의해 $S$는 연결 부분집합이 아니고, 이것은 가정에 어긋난다. 따라서 $z \in S$이다.

**(1)의 "사이의 점을 모두 가지면 연결이다".** $S$가 사이의 점을 모두 갖는다고 하자. 먼저 다음 (나)를 보인다.

(나) 보통 위상의 열린집합 $P$, $Q$가 $S \subseteq P \cup Q$, $P \cap Q \cap S = \emptyset$을 만족하면, $p \in P \cap S$, $q \in Q \cap S$, $p < q$인 실수 $p$, $q$는 없다.

그런 $p$, $q$가 있다고 하자. $p < q$이므로 닫힌구간 $[p, q]$를 쓸 수 있다. $[p, q] \subseteq S$이다. $t \in [p, q]$이면 $p \le t \le q$이고, $t = p$나 $t = q$이면 $t \in S$이며, 그 밖에는 $p < t < q$이므로 사이의 점의 조건에 의해 $t \in S$이기 때문이다. $E = Q \cap [p, q]$로 둔다. [[interval]]의 (3)에 의해 $q \in [p, q]$이므로 $q \in E$이고 $E \ne \emptyset$이다. $E$의 원소 $t$는 $p \le t$이므로 $p$는 $E$의 하계이다. [[infimum-exists]]의 (4)에 의해 $E$는 하한 $z = \inf E$를 갖는다. 하한의 정의에 의해 $p$는 하계이므로 $p \le z$이고, $z$는 하계이고 $q \in E$이므로 $z \le q$이다. 따라서 $z \in [p, q] \subseteq S \subseteq P \cup Q$이다.

- $z \in Q$인 경우. $z = p$라면 $p \in P \cap Q \cap S = \emptyset$이 되어 모순이므로 $p \ne z$이고, $p \le z$와 함께 $p < z$이다. (가)에 의해 $z - \delta < s < z + \delta$인 모든 $s$가 $Q$에 속하는 $\delta > 0$이 있다. $z - \delta < p$이면 $p < z < z + \delta$이므로 $p \in Q$가 되어, $p \in P \cap Q \cap S = \emptyset$이라는 모순이 나온다. 그렇지 않으면 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $p \le z - \delta$이다. $w = z - \delta/2$로 두자. [[order-properties-of-reals]]의 (8)의 둘째 문장에 의해 $0 < \delta/2 < \delta$이고, (3)의 (ii), (iii)과 (2)의 (ii)에 의해 $z - \delta < w < z$이며, $z < z + \delta$와 함께 $w < z + \delta$이다. 따라서 (가)에 의해 $w \in Q$이다. 또 $p \le z - \delta < w$이고 $w < z \le q$이므로 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $p < w < q$이고 $w \in [p, q]$이다. 곧 $w \in E$이다. 그런데 $w < z$이고 $z$는 $E$의 하계이므로 $z \le w$이어야 해서 [[order-properties-of-reals]]의 (1)의 (i)에 어긋난다.
- $z \in P$인 경우. (가)에 의해 $z - \delta < s < z + \delta$인 모든 $s$가 $P$에 속하는 $\delta > 0$이 있다. $0 < \delta$이므로 [[order-properties-of-reals]]의 (2)의 (ii)에 의해 $z < z + \delta$이고, [[upper-bound-and-supremum]]의 (4)의 하계에 관한 문장에 의해 $e < z + \delta$인 $e \in E$가 있다. $z$는 $E$의 하계이므로 $z \le e$이고, ([[order-properties-of-reals]]의 (2)의 (ii)와 (3)의 (ii)로 $z - \delta < z$이므로) $z - \delta < e < z + \delta$이어서 (가)에 의해 $e \in P$이다. 또 $e \in E$이므로 $e \in Q$이고 $e \in [p, q] \subseteq S$이다. 따라서 $e \in P \cap Q \cap S = \emptyset$이 되어 모순이다.

두 경우 모두 모순이므로 (나)가 증명되었다.

이제 $S$가 연결 부분집합이 아니라고 하자. 연결 (2)에 의해 보통 위상의 열린집합 $U$, $V$로서 $S \subseteq U \cup V$, $U \cap V \cap S = \emptyset$, $U \cap S \ne \emptyset$, $V \cap S \ne \emptyset$인 것이 있다. $x \in U \cap S$, $y \in V \cap S$를 잡는다. $x = y$라면 $x \in U \cap V \cap S = \emptyset$이므로 $x \ne y$이고, (W1)에 의해 $x < y$이거나 $y < x$이다.

- $x < y$이면 (나)를 $P = U$, $Q = V$, $p = x$, $q = y$에 쓴다.
- $y < x$이면 (나)를 $P = V$, $Q = U$, $p = y$, $q = x$에 쓴다. $S \subseteq V \cup U$이고 $V \cap U \cap S = \emptyset$이므로 (나)의 가정이 성립한다.

어느 경우에도 (나)에 어긋나므로 $S$는 연결 부분집합이다.

**(2).** $S$에 서로 다른 두 점이 없으면 $S = \emptyset$이거나, $S$의 점 $p$를 하나 잡을 때 $S$의 점이 모두 $p$여서 $S = \{p\}$이다. 이 경우 연결 (5)의 (i)에 의해 $S$는 연결 부분집합이다. $S$에 서로 다른 두 점이 있으면 [[interval]]의 정의의 (i)이 성립하므로, $S$가 구간인 것은 정확히 정의의 (ii), 곧 사이의 점을 모두 갖는다는 조건이 성립할 때이고, (1)에 의해 이것은 정확히 $S$가 연결일 때이다. 이 둘을 합치면 첫 문장이 나온다. 거꾸로 $S = \emptyset$이나 $S = \{p\}$이면 연결이므로 첫 문장의 "정확히"의 두 방향이 모두 성립한다. 둘째 문장의 집합들은 [[interval]]의 (1), (2)에 의해 구간이므로 연결 부분집합이다.

**(3).** (2)에 의해 $\mathbb{R}$은 $\mathbb{R}$의 연결 부분집합이고, 연결 (3)의 둘째 문장에 의해 $\mathbb{R}$은 연결공간이다. 연결 (1)에 의해 열린집합이면서 닫힌집합인 부분집합은 $\emptyset$과 $\mathbb{R}$뿐이다.

**(4).** [[connected-space]]의 (5)의 (iv)를 다시 적은 것이다.
:::

## 예시와 반례

:::example[한 점을 뺀 실수]
$S = \{x \in \mathbb{R} : x \ne 0\}$은 연결이 아닙니다. $-1$과 $1$이 $S$에 있고 $-1 < 0 < 1$인데 $0 \notin S$이므로 (1)에 의해 연결이 아닙니다. 한편 $S$는 $A = \{x : x < 0\}$과 $B = \{x : 0 < x\}$의 합집합이고, (2)에 의해 $A$와 $B$는 각각 연결입니다. 두 연결집합은 만나지 않으므로 [[union-of-connected-sets]]의 (2)를 쓸 수 없고, 실제로 합집합은 연결이 아닙니다.
:::

:::example[겹치는 두 열린구간의 합집합]
$A = (0, 2)$와 $B = (1, 3)$은 (2)에 의해 연결입니다. [[order-properties-of-reals]]의 (8)에 의해 $1 < 3 \cdot 2^{-1} < 2$이므로 $3 \cdot 2^{-1} \in A \cap B$이고, [[union-of-connected-sets]]의 (2)에 의해 $A \cup B$는 연결입니다. (1)로 보아도 같습니다. $A \cup B = (0, 3)$이기 때문입니다. $0 < x < 3$인 실수 $x$는 $x < 2$이면 $A$에, $2 \le x$이면 $1 < x$이므로 $B$에 속하고, 거꾸로 $A$와 $B$의 원소는 $0$과 $3$ 사이에 있습니다.
:::

:::counterexample[유리수와 정수의 빠진 점]
$\mathbb{Q}$와 $\mathbb{Z}$가 연결이 아니라는 것은 [[connected-space]]의 (5)의 (v)에서 보았고, (1)로 다시 볼 수 있습니다. $\mathbb{Z}$에서는 [[order-properties-of-reals]]의 (8)에 의해 $0 < 2^{-1} < 1$이고, $2^{-1}$은 정수가 아닙니다. $0 < n < 1$인 정수 $n$이 있다면 [[prime-number]]의 (Z1)에 의해 $1 \le n$이어서 $n < 1$에 어긋나기 때문입니다([[order-properties-of-reals]]의 (10)에 의해 정수의 순서와 실수의 순서는 같습니다). $\mathbb{Q}$에서는 $0$과 $1$(둘 다 유리수) 사이에 [[open-and-closed-sets-of-reals]]의 (6)의 (i)이 주는 무리수가 빠져 있습니다. 두 집합 모두 원소가 무한히 많지만, 사이의 점이 하나라도 빠져 있으면 연결이 아닙니다.
:::

## 확인 질문

:::check[$S = \{x \in \mathbb{R} : x \le 0\} \cup \{x \in \mathbb{R} : 1 \le x\}$는 연결인가?]
아닙니다. $0$과 $1$은 $S$에 있고 $0 < 2^{-1} < 1$인데([[order-properties-of-reals]]의 (8)), $2^{-1}$은 $0$보다 크고 $1$보다 작아서 두 집합 어디에도 없습니다. (1)에 의해 $S$는 연결이 아닙니다.
:::

:::check[$S$가 $\mathbb{R}$의 연결 부분집합이고 $T$도 그렇다면 $S \cap T$는 연결인가?]
연결입니다. $x$, $y \in S \cap T$이고 $x < z < y$이면, $S$와 $T$가 각각 사이의 점을 모두 가지므로((1)) $z \in S$, $z \in T$입니다. 따라서 $S \cap T$도 사이의 점을 모두 갖고 (1)에 의해 연결입니다. $S \cap T = \emptyset$이어도 됩니다.
:::
