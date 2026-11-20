---
title: 거리 부분공간의 위상
title_en: Topology of a Metric Subspace
aliases: [부분공간 거리의 거리위상, metric subspace, 실수의 부분집합의 위상]
kind: theorem
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간의 부분집합에서 부분공간 거리의 거리위상은 원래 거리위상의 부분공간 위상과 같다. 그래서 실수의 부분집합에는 두 위상 가운데 어느 것을 주어도 해석학 입문의 연속과 위상의 연속이 일치하고, 열린구간과의 교집합 전체가 그 위상의 기저이다. ℤ 의 부분공간 위상은 이산위상이고 ℚ 의 것은 이산위상이 아니다.
requires: [set, subset, family-of-sets, even-and-odd, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, rationals-are-dense, interval, metric-space-examples, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, topological-space, topology-examples, closed-set, open-and-closed-sets-of-reals, archimedean-property, basis-for-a-topology, basis-of-a-given-topology, standard-topology-on-reals, subspace-topology, continuous-map, continuity-agrees-with-analysis]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "The subspace topology 절의 거리공간에 관한 Proposition 과 ℤ, ℚ 의 예, content/topological-spaces.tex:402–406, 415–422; Compactness 장의 두 예, content/compactness.tex:23–28"
    checked: original
    note: "(1)은 출처의 Proposition(417–422, 'd|_{Y×Y} 가 주는 거리위상은 정확히 부분공간 위상이다')이고, 출처는 증명을 'Left to the reader' 로 둔다. 증명은 이 항목이 쓴 것이고, 열린집합마다 공을 하나씩 고르지 않고 조건으로 정한 공 전체의 합집합을 쓴다. (4)는 출처의 예(402–406)와 같은 대상, 같은 결론이다. 출처는 ℤ 에서 {n} 이 열려 있다는 것을 적고, ℚ 가 이산위상이 아닌 까닭을 '공집합이 아닌 열린구간은 유리수를 무한히 많이 포함하기 때문'이라고 한 줄로 적는다. 이 항목은 {0} 이 ℚ 에서 열려 있지 않다는 것을 유리수의 조밀성으로 보인다. 반례 '이산 거리와 부분공간 위상'이 쓰는 'ℚ 의 부분공간 위상은 이산위상이 아니다'는 이 예(405)와 같은 결론이고, 확인 질문 'ℕ 에 ℝ 의 보통 위상의 부분공간 위상을 주면 무엇인가'는 ℤ 의 부분공간 위상이 이산위상이라는 이 예(403)와 같은 발상이다. (2)의 기본값과 (3)의 기저는 이 항목이 정한 것이다. 예시 '역수의 집합과 그 극한'의 S = {n⁻¹} ∪ {0} 은 출처 compactness.tex:23–28 의 두 예(A = {1/n} 에서 {1/n} 이 부분공간 위상에서 열려 있다는 것, X = A ∪ {0} 의 열린 덮개에서 0 을 품은 열린집합이 큰 n 의 1/n 을 모두 품는다는 것)와 같은 대상, 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: "7.1절 Definition 7.1.11 과 그 아래 문단, p.261; 7.2절 Proposition 7.2.11, p.267, 연습문제 7.2.12, p.272; 7.4절 연습문제 7.4.2, p.285; 3.1.1절 Definition 3.1.1 아래의 예 (i), (iv), (v), p.113"
    checked: original
    note: "Lebl Proposition 7.2.11 은 부분공간 거리에서 'U ⊆ Y 가 Y 에서 열린 것은 정확히 V ∩ Y = U 인 X 의 열린 V 가 있을 때'라는 진술로, (1)과 같은 내용이다. Lebl 은 한 방향(V ∩ Y 가 열려 있다)을 B_Y(x, δ) = B_X(x, δ) ∩ Y 로 증명하고, 이 항목의 그 방향도 같은 길이다. 다른 방향은 연습문제 7.2.12 로 두고, 증명 뒤 문단(p.267)의 힌트는 각 x ∈ U 마다 δ_x 를 두어 U = ⋃ B(x, δ_x) 로 쓰라고 한다. 이 항목은 그 대신 조건 B_Y(y, r) ⊆ U 를 만족하는 순서쌍 (y, r) 전체로 합집합을 만든다. Proposition 7.2.11 아래의 예(Y = [0, 1], U = [0, 1/2), V = (−1/2, 1/2))는 (1)의 한 예이다. 예시 '역수의 집합과 그 극한'의 S 는 출처 연습문제 7.4.2 b)(p.285, {1/n : n ∈ ℕ} ∪ {0} 이 콤팩트임을 보이라)와 같은 대상이다. 출처 Definition 3.1.1 아래의 예(p.113)는 (i) {1/n : n ∈ ℕ} 의 집적점이 0 하나뿐이고, (iv) [0, 1) ∪ {2} 의 집적점 전체가 [0, 1] 이며, (v) ℕ 은 ℝ 에서 집적점이 없다고 적는다. 예시 '역수의 집합과 그 극한'의 S 는 (i)의 집합에 0 을 더한 것이고, 확인 질문 'S = [0, 1] ∪ {2} 에서 {2} 는 열려 있는가'의 S 는 (iv)의 [0, 1) ∪ {2} 와 닮은 집합이며(2 가 떨어진 점이다), 확인 질문 'ℕ 에 ℝ 의 보통 위상의 부분공간 위상을 주면 무엇인가'는 (v)와 같은 대상을 다룬다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 부분공간 거리 $d_Y$는 [[metric-space-examples]]의 것이고, 열린 공 $B_X(x, r)$, $B_Y(y, r)$는 [[open-ball]]의 것이다. 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이고, 부분공간 위상 $\mathcal{T}|_Y$와 집합족 $\mathcal{A}|_Y$는 [[subspace-topology]]의 것이다. $\mathbb{R}$의 보통 거리 $d$, 보통 위상 $\mathcal{T}_d$, 열린구간 전체의 집합족 $\mathcal{J}$는 [[standard-topology-on-reals]]의 (5)의 것이다. 아래에서 $P = \{r \in \mathbb{R} : 0 < r\}$이다.

1. (두 위상은 같다) $(X, d)$가 거리공간이고 $Y \subseteq X$이면 $\mathcal{T}_{d_Y} = \mathcal{T}_d|_Y$이다. 곧 $W \subseteq Y$가 $(Y, d_Y)$에서 열린집합인 것은 정확히 $W = U \cap Y$인 $(X, d)$의 열린집합 $U$가 있을 때이다.
2. (실수의 부분집합에 주는 위상) $S \subseteq \mathbb{R}$이면 (1)에 의해 보통 거리의 부분공간 거리 $d_S$의 거리위상은 보통 위상의 부분공간 위상 $\mathcal{T}_d|_S$와 같다. 그래서 이 강의에서 $\mathbb{R}$의 부분집합 $S$를 위상을 밝히지 않고 위상공간이라 하면 이 위상을 준 것이다. 특히 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (2), (3)은 $S$, $T \subseteq \mathbb{R}$에 보통 위상의 부분공간 위상을 줄 때에도 그대로 성립한다. 일반의 거리공간 $(X, d)$에서도 부분집합 $Y$에 위상을 밝히지 않으면 $\mathcal{T}_{d_Y} = \mathcal{T}_d|_Y$를 준 것이다.
3. (열린구간과의 교집합) $S \subseteq \mathbb{R}$이면 $\mathcal{J}|_S = \{I \cap S : I \in \mathcal{J}\}$는 위상 $\mathcal{T}_d|_S$의 기저이다. 따라서 $W \subseteq S$가 $S$에서 열린집합인 것은 정확히 $W$의 모든 점 $x$에 대하여 $x \in I$이고 $I \cap S \subseteq W$인 열린구간 $I$가 있을 때이다.
4. (정수와 유리수)
   - (i) $\mathbb{Z}$의 위상 $\mathcal{T}_d|_{\mathbb{Z}}$는 이산위상 $\mathscr{P}(\mathbb{Z})$이다.
   - (ii) $\mathbb{Q}$의 위상 $\mathcal{T}_d|_{\mathbb{Q}}$는 이산위상이 아니다. $\{0\}$은 $\mathbb{Q}$에서 열려 있지 않다.
:::

:::english
Metric spaces and the subspace metric $d_Y$ are as in the entry on examples of metric spaces, and the open balls $B_X(x, r)$, $B_Y(y, r)$ are as in the entry on open balls. The metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies, and the subspace topology $\mathcal{T}|_Y$ and the family $\mathcal{A}|_Y$ are as in the entry on the subspace topology. The standard metric $d$ on $\mathbb{R}$, the standard topology $\mathcal{T}_d$, and the family $\mathcal{J}$ of all open intervals are as in part (5) of the entry on the standard topology on the reals. Throughout, $P = \{r \in \mathbb{R} : 0 < r\}$.

1. (The two topologies agree) If $(X, d)$ is a metric space and $Y \subseteq X$, then $\mathcal{T}_{d_Y} = \mathcal{T}_d|_Y$. That is, $W \subseteq Y$ is open in $(Y, d_Y)$ exactly when there is an open set $U$ of $(X, d)$ with $W = U \cap Y$.
2. (The topology given to subsets of the reals) If $S \subseteq \mathbb{R}$, then by (1) the metric topology of the subspace metric $d_S$ of the standard metric equals the subspace topology $\mathcal{T}_d|_S$ of the standard topology. Hence in this course, when a subset $S$ of $\mathbb{R}$ is called a topological space without naming a topology, it is given this topology. In particular, parts (2) and (3) of the entry on agreement with continuity in analysis remain true when $S$, $T \subseteq \mathbb{R}$ are given the subspace topologies of the standard topology. Likewise, for a general metric space $(X, d)$, when no topology is named on a subset $Y$, it is given $\mathcal{T}_{d_Y} = \mathcal{T}_d|_Y$.
3. (Intersections with open intervals) If $S \subseteq \mathbb{R}$, then $\mathcal{J}|_S = \{I \cap S : I \in \mathcal{J}\}$ is a basis for the topology $\mathcal{T}_d|_S$. Hence $W \subseteq S$ is open in $S$ exactly when for every point $x$ of $W$ there is an open interval $I$ with $x \in I$ and $I \cap S \subseteq W$.
4. (Integers and rationals)
   - (i) The topology $\mathcal{T}_d|_{\mathbb{Z}}$ on $\mathbb{Z}$ is the discrete topology $\mathscr{P}(\mathbb{Z})$.
   - (ii) The topology $\mathcal{T}_d|_{\mathbb{Q}}$ on $\mathbb{Q}$ is not discrete: $\{0\}$ is not open in $\mathbb{Q}$.
:::

## 직관

거리공간의 부분집합 $Y$에는 위상을 주는 길이 둘 있습니다. 거리를 $Y$로 줄인 $d_Y$의 거리위상과, 원래 위상을 $Y$로 잘라 낸 부분공간 위상입니다. (1)은 두 길이 같은 곳에 닿는다는 것입니다. $Y$ 안의 공 $B_Y(y, r)$는 $X$의 공 $B_X(y, r)$를 $Y$로 자른 조각이므로, "공으로 재는 열린집합"과 "잘라 낸 열린집합"이 같아집니다.

그래서 앞에서 구간이나 $\mathbb{R}$의 부분집합을 부분공간 거리로 다룬 것과 부분공간 위상으로 다룬 것이 어긋나지 않습니다. 해석학 입문의 연속이 위상의 연속과 같다는 것도 어느 쪽 위상으로 읽든 성립합니다((2)).

증명에서 어려운 쪽은 "$Y$에서 열린 $W$를 잘라 낼 $X$의 열린집합 $V$를 찾는 것"입니다. $W$의 점마다 반지름을 하나씩 골라 공을 모으면 고르기가 들어갑니다. 대신 "$Y$ 안의 공이 $W$에 들어가는 중심과 반지름의 쌍" 전체를 모아 $X$의 공들의 합집합을 만들면 고를 필요가 없습니다.

## 증명

:::idea
$B_Y(y, r) = B_X(y, r) \cap Y$를 양쪽으로 쓴다. $X$의 열린 $U$를 자른 $U \cap Y$에서는 $X$의 공을 잘라 $Y$의 공을 얻고, $Y$에서 열린 $W$에서는 $W$ 안에 든 $Y$의 공들을 $X$의 공으로 바꾸어 합친다.
:::

:::hint
$T = \{(y, r) \in W \times P : B_Y(y, r) \subseteq W\}$로 두고 $V = \bigcup \{B_X(y, r) : (y, r) \in T\}$를 봅니다.
:::

:::hint
(4)의 (i)에서는 정수 $n$에 대하여 열린구간 $(n - 1, n + 1)$에 든 정수가 $n$뿐임을 보입니다.
:::

:::proof
[[topology-examples]]의 (4)에 의해 $W \in \mathcal{T}_{d_Y}$인 것은 정확히 $W$가 $(Y, d_Y)$에서 열린집합일 때이고, $U \in \mathcal{T}_d$인 것은 정확히 $U$가 $(X, d)$에서 열린집합일 때이다. [[subspace-topology]]의 정의에 의해 $W \in \mathcal{T}_d|_Y$인 것은 정확히 $W = U \cap Y$인 $U \in \mathcal{T}_d$가 있을 때이다. [[open-ball]]의 (7)에 의해 $y \in Y$, $r \in P$이면 $B_Y(y, r) = B_X(y, r) \cap Y$이다. 이것을 (가)라 부른다.

**(1).** $\mathcal{T}_d|_Y \subseteq \mathcal{T}_{d_Y}$: $W = U \cap Y$이고 $U$가 $(X, d)$에서 열린집합이라 하자. $y \in W$이면 $y \in U$이므로 [[open-set-in-metric-space]]의 정의에 의해 $B_X(y, r) \subseteq U$인 $r \in P$가 있다. (가)에 의해 $B_Y(y, r) = B_X(y, r) \cap Y \subseteq U \cap Y = W$이다. 따라서 $W$는 $(Y, d_Y)$에서 열린집합이다.
$\mathcal{T}_{d_Y} \subseteq \mathcal{T}_d|_Y$: $W$가 $(Y, d_Y)$에서 열린집합이라 하자. $W \times P$의 원소에 관한 조건으로 정한 부분집합
$$
\begin{aligned}
T = \{\, &(y, r) \in W \times P : \\
&B_Y(y, r) \subseteq W \,\}
\end{aligned}
$$
과 식으로 정한 $X$의 집합족 $\mathcal{V} = \{B_X(y, r) : (y, r) \in T\}$를 두고 $V = \bigcup \mathcal{V}$라 하자. [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $\mathcal{V}$는 열린집합들의 집합족이므로 [[open-sets-of-a-metric-space]]의 (2)에 의해 $V$는 $(X, d)$에서 열린집합이다. $V \cap Y = W$임을 보인다. $y \in W$이면 $W$가 열려 있으므로 $B_Y(y, r) \subseteq W$인 $r \in P$가 있고 $(y, r) \in T$이다. [[open-ball]]의 (1)에 의해 $y \in B_X(y, r)$이므로 [[family-of-sets]]의 (9)에 의해 $y \in V$이고, $y \in Y$이므로 $y \in V \cap Y$이다. 거꾸로 $z \in V \cap Y$이면 [[family-of-sets]]의 (9)에 의해 $z \in B_X(y, r)$인 $(y, r) \in T$가 있다. $z \in Y$이므로 (가)에 의해 $z \in B_Y(y, r) \subseteq W$이다. 따라서 $W = V \cap Y \in \mathcal{T}_d|_Y$이다.

**(2).** [[metric-space-examples]]의 (3)에 의해 $(S, d_S)$는 거리공간이고, (1)을 $X = \mathbb{R}$, $Y = S$에 쓰면 $\mathcal{T}_{d_S} = \mathcal{T}_d|_S$이다. [[continuity-agrees-with-analysis]]의 (2), (3)은 $S$, $T$에 $d_S$, $d_T$의 거리위상을 준 진술이고, 그 위상이 각각 $\mathcal{T}_d|_S$, $\mathcal{T}_d|_T$와 같은 집합족이므로 [[continuous-map]]의 연속과 "$c$에서 연속"의 정의에 나오는 열린집합이 바뀌지 않는다. 따라서 그 진술은 부분공간 위상으로 읽어도 그대로 성립한다. 끝 문장은 (1)에서 같은 이유로 성립한다.

**(3).** [[standard-topology-on-reals]]의 (5)에 의해 $\mathcal{J}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$이므로, [[basis-of-a-given-topology]]의 정의에 의해 $\mathcal{J}$는 위상 $\mathcal{T}_d$의 기저이다. [[subspace-topology]]의 (5)에 의해 $\mathcal{J}|_S$는 위상 $\mathcal{T}_d|_S$의 기저이다. 곧 $\mathcal{T}_{\mathcal{J}|_S} = \mathcal{T}_d|_S$이고, [[basis-for-a-topology]]의 $\mathcal{T}_{\mathcal{B}}$의 정의에 의해 $W \subseteq S$가 여기에 속하는 것은 정확히 $W$의 모든 점 $x$에 대하여 $x \in C$이고 $C \subseteq W$인 $C \in \mathcal{J}|_S$가 있을 때이다. $C \in \mathcal{J}|_S$는 $C = I \cap S$인 열린구간 $I$가 있다는 것이고, $x \in W \subseteq S$이므로 $x \in I \cap S$는 $x \in I$와 같다.

**(4).** (i) $n \in \mathbb{Z}$라 하자. [[order-properties-of-reals]]의 (10)에 의해 $n - 1 < n < n + 1$이므로 열린구간 $I = (n - 1, n + 1)$이 정해지고 $n \in I$이다. $m \in I \cap \mathbb{Z}$라 하고 $k = m - n$으로 두면, [[even-and-odd]]의 진술에서 받아들인 성질에 의해 $k$는 정수이고, [[order-properties-of-reals]]의 (2)의 (ii)에 의해 $-1 < k < 1$이다. 같은 항목의 (10)에 의해 이 부등식을 정수의 부등식으로 읽으면, (Z1)([[prime-number]])과 (Z7)([[well-ordering-principle]])에 의해 $k < 1$에서 $k + 1 \le 1$, 곧 $k \le 0$이고, $-1 < k$에서 $0 = -1 + 1 \le k$이다. (L2)([[well-ordering-principle]])에 의해 $k = 0$, 곧 $m = n$이다. 따라서 $I \cap \mathbb{Z} = \{n\}$이고 이것은 (3)에 의해 $\mathbb{Z}$에서 열려 있다($\{n\}$의 유일한 점 $n$에서 $I$를 쓴다).
$A \subseteq \mathbb{Z}$이면 $A$의 모든 점 $n$에 대하여 $\{n\}$은 $n$을 원소로 갖고 $A$에 포함되는 $\mathbb{Z}$의 열린집합이므로, [[topological-space]]의 (3)의 (b)에서 (a)로 $A$는 $\mathbb{Z}$에서 열려 있다. 따라서 $\mathcal{T}_d|_{\mathbb{Z}} = \mathscr{P}(\mathbb{Z})$이다.

(ii) [[rationals-are-dense]]의 (1)에 의해 $0 \in \mathbb{Q}$이다. $\{0\}$이 $\mathbb{Q}$에서 열려 있다고 하자. (3)에 의해 $0 \in I$이고 $I \cap \mathbb{Q} \subseteq \{0\}$인 열린구간 $I = (a, b)$가 있다. $a < 0 < b$이므로 [[rationals-are-dense]]의 (2)에 의해 $0 < q < b$인 유리수 $q$가 있고, $a < 0 < q$에서 $q \in I \cap \mathbb{Q}$이다. 그러면 $q = 0$이어야 하는데 $0 < q$이므로 [[order-properties-of-reals]]의 (1)의 (i)에 어긋난다. 따라서 $\{0\}$은 $\mathbb{Q}$에서 열려 있지 않고, $\{0\} \in \mathscr{P}(\mathbb{Q})$이므로 $\mathcal{T}_d|_{\mathbb{Q}} \ne \mathscr{P}(\mathbb{Q})$이다.
:::

## 예시와 반례

:::example[역수의 집합과 그 극한]
$S = \{n^{-1} : n \in \mathbb{N}\} \cup \{0\}$에 $\mathbb{R}$의 보통 위상의 부분공간 위상을 줍니다. $\{1\}$은 $S$에서 열려 있습니다. 열린구간 $I = (\tfrac{1}{2}, \tfrac{3}{2})$는 $1$을 원소로 갖고([[order-properties-of-reals]]의 (8)), $0 \notin I$이며, 자연수 $m \ne 1$이면 $m \ge 2$이므로((Z5)와 (Z1), [[order-properties-of-reals]]의 (10)) [[order-properties-of-reals]]의 (6)의 (ii)($m = 2$이면 등호)에 의해 $m^{-1} \le \tfrac{1}{2}$이어서 $m^{-1} \notin I$입니다. 곧 $I \cap S = \{1\}$이고 (3)에 의해 $\{1\}$은 $S$에서 열려 있습니다.

반면 $\{0\}$은 $S$에서 열려 있지 않습니다. $0$을 원소로 갖는 열린구간 $(a, b)$에서 $0 < b$이므로 [[archimedean-property]]의 (3)에 의해 $n^{-1} < b$인 자연수 $n$이 있고, $a < 0 < n^{-1}$([[order-properties-of-reals]]의 (10))이므로 $n^{-1} \in (a, b) \cap S$이며 $n^{-1} \ne 0$입니다. 따라서 $(a, b) \cap S \subseteq \{0\}$인 열린구간이 없고, (3)에 의해 $\{0\}$은 $S$에서 열려 있지 않습니다. 그래서 $S$의 부분공간 위상은 이산위상이 아닙니다.
:::

:::counterexample[이산 거리와 부분공간 위상]
(1)은 거리 $d$를 부분집합으로 줄일 때의 일입니다. 같은 집합에 다른 거리를 주면 위상은 달라질 수 있습니다. $\mathbb{Q}$에 $\mathbb{Q}$ 위의 이산 거리를 주면 [[topology-examples]]의 (5)에 의해 그 거리위상은 이산위상 $\mathscr{P}(\mathbb{Q})$이지만, (4)의 (ii)에 의해 보통 위상의 부분공간 위상은 이산위상이 아닙니다. 이산 거리는 보통 거리를 $\mathbb{Q}$로 줄인 것이 아니므로 (1)에 어긋나지 않습니다.
:::

## 확인 질문

:::check[$S = \{x \in \mathbb{R} : 0 \le x \le 1\} \cup \{2\}$에서 $\{2\}$는 $S$에서 열려 있는가? $S$에서 닫혀 있는가?]
둘 다입니다. [[order-properties-of-reals]]의 (8)에 의해 $\tfrac{3}{2} < 2 < \tfrac{5}{2}$이므로 열린구간 $I = (\tfrac{3}{2}, \tfrac{5}{2})$는 $2$를 원소로 갖고, $I \cap S = \{2\}$입니다($x \in I \cap S$이고 $0 \le x \le 1$이면 $x \le 1 < \tfrac{3}{2} < x$가 되어 어긋납니다). (3)에 의해 $\{2\}$는 $S$에서 열려 있습니다. 또 $\{2\}$는 $\mathbb{R}$에서 닫힌집합이므로([[open-and-closed-sets-of-reals]]의 (2)와 [[closed-set]]의 (6)) [[subspace-topology]]의 (3)의 (i)에 의해 $S$에서 닫혀 있습니다.
:::

:::check[$\mathbb{N}$에 $\mathbb{R}$의 보통 위상의 부분공간 위상을 주면 무엇인가?]
이산위상 $\mathscr{P}(\mathbb{N})$입니다. 자연수는 정수이므로([[archimedean-property]]의 머리말) [[subspace-topology]]의 (4)에 의해 $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{R}$에서 $\mathcal{T}_d|_{\mathbb{N}} = (\mathcal{T}_d|_{\mathbb{Z}})|_{\mathbb{N}}$이고, (4)의 (i)에 의해 이것은 $\mathscr{P}(\mathbb{Z})|_{\mathbb{N}}$이며, [[subspace-topology]]의 (7)의 (iv)에 의해 $\mathscr{P}(\mathbb{N})$입니다.
:::
