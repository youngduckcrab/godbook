---
title: 거리위상의 기저와 실수의 보통 위상
title_en: Bases for Metric Topologies and the Standard Topology on the Reals
aliases: [보통 위상, standard topology, 실수의 보통 위상, standard topology on the real line, 열린 공은 거리위상의 기저이다, 거리의 비교, equivalent metrics]
kind: theorem
field: topology
msc: ["54E35", "54A10"]
level: undergrad
summary: 거리공간의 열린 공 전체는 거리위상의 기저이다. 한 거리가 다른 거리의 양수배 이하이면 거리위상이 포함되고, 곱집합 ℝ × ℝ 의 최대 거리, 합 거리, 유클리드 거리는 같은 위상을 준다. 실수의 열린구간 전체는 보통 거리의 거리위상, 곧 ℝ 의 보통 위상을 생성한다.
requires: [set, subset, function, recursion-theorem, family-of-sets, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, topology-examples, comparing-topologies, basis-for-a-topology, basis-of-a-given-topology]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Basis for a topology 절의 Proposition basis-euclidean 과 그 뒤 문단 (content/topological-spaces.tex:130–147), Metric spaces 절의 Proposition metric-basis 와 Remark remark-def-open-balls, 예 discrete-metric (207–261), The poset and order topologies 절의 예 (498–500), 연습문제 1.14 (content/exercises.tex:44–48)"
    checked: original
    note: "(1)은 출처 Proposition metric-basis(209–234, 열린 공 전체가 위상의 기저이다)와 Remark(235–244, 그 위상의 열린집합은 '모든 x ∈ U 에 B_d(x, r) ⊆ U 인 r > 0 이 있는' U 이다)를 합친 것이다. 출처는 공 전체를 기저로 하여 거리위상을 정의하고 Remark 의 한 방향만 증명한 뒤 다른 방향은 'Likewise' 로 둔다. 이 사이트는 거리위상을 1단원의 열린집합 전체로 정했으므로(topology-examples 의 (4)) (1)을 basis-of-a-given-topology 의 판정으로 증명한다. 출처는 공의 교집합 조건을 r = min(r₁ − d(x, y₁), r₂ − d(x, y₂)) 로 직접 보이고(227), 이 항목은 두 열린집합의 교집합이 열려 있다는 것으로 대신한다. (5)의 '보통 위상'(standard topology)이라는 이름은 출처 Proposition basis-euclidean(144)이 ℝⁿ 의 공이 생성하는 위상에 붙인 것이고, 출처는 그 열린집합이 해석학에서 만난 열린집합과 같다고 증명 없이 적는다. 출처는 이 사이트가 다루지 않는 ℝⁿ 에서 진술하므로 이 항목은 ℝ 에서만 쓴다. 출처의 예(498–500)는 ℝ 의 순서위상이 열린구간 전체를 기저로 하므로 보통 위상과 같다고 적는다. 예시 '이산 거리의 공 전체'는 출처의 예 discrete-metric(248–261, 이산 거리의 공은 {x} 나 X 이고 공 전체는 {{x} : x ∈ X} ∪ {X})과 같은 대상이다. 확인 질문 '반지름이 1/2 인 공만 모은 족'은 출처 연습문제 1.14(반지름이 1/n 인 공 전체도 거리위상의 기저이다)와 같은 종류의 물음이다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Example 7.2.2 (p.264), 연습문제 7.2.9 (p.272), 7.2.16, 7.2.18 (p.273), 연습문제 7.3.14 (p.278)"
    checked: original
    note: "(5)가 쓰는 '실수의 공은 열린구간'은 출처 Example 7.2.2(p.264)이고 1단원 open-ball 의 (5)로 인용한다. (2)의 둘째 문장은 출처 연습문제 7.2.9(p.272, αd ≤ d′ ≤ βd 이면 두 거리의 열린집합이 같다)와 같은 내용이고, (2)의 첫 문장은 그 한쪽이다. (4)는 출처 연습문제 7.2.18(p.273, ℝⁿ 의 '직사각형'이 표준 거리와 같은 열린집합을 낸다)의 n = 2 인 경우와 같은 결론을 포함하고, 출처 연습문제 7.3.14(p.278)는 같은 세 거리로 본 수열의 수렴이 같다는 것을 묻는다. 반례 '거리위상이 같아도 상수가 없을 수 있다'의 거리 min{d, 1} 은 출처 연습문제 7.2.16(p.273, 같은 열린집합을 주는 유계인 거리가 있음을 보이라)과 같은 발상이다. 확인 질문 'd 와 2d 의 공 전체의 족'은 출처 연습문제 7.2.9 의 두 거리(α = β 인 상수배)와 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 예 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$)는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공은 [[open-ball]]의 것이다. 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이고, 위상의 기저와 $\mathcal{T}_{\mathcal{B}}$, "위상 $\mathcal{T}$의 기저"는 [[basis-for-a-topology]], [[basis-of-a-given-topology]]의 것이다. 열린구간 $(a, b)$는 [[interval]]의 것이다($a < b$일 때만 쓴다). 아래에서 $P = \{r \in \mathbb{R} : 0 < r\}$이다.

1. (열린 공 전체는 거리위상의 기저이다) $(X, d)$가 거리공간이면 열린 공 전체의 집합족
$$
\mathcal{B}_d = \{B_d(x, r) : (x, r) \in X \times P\}
$$
(식으로 정한 집합족)은 위상의 기저이고 거리위상 $\mathcal{T}_d$의 기저이다. 곧 $\mathcal{T}_{\mathcal{B}_d} = \mathcal{T}_d$이다.
2. (거리의 비교) $d$, $d'$이 집합 $X$ 위의 거리이고 실수 $c > 0$이 $X$의 모든 점 $x$, $y$에서 $d(x, y) \le c\, d'(x, y)$를 만족하면 $\mathcal{T}_d \subseteq \mathcal{T}_{d'}$이다. 따라서 양수 $c$, $c'$이 모든 $x$, $y$에서 $d(x, y) \le c\, d'(x, y)$와 $d'(x, y) \le c'\, d(x, y)$를 만족하면 $\mathcal{T}_d = \mathcal{T}_{d'}$이다.
3. (양수배) $d$가 집합 $X$ 위의 거리이고 $c > 0$이면, $X$의 점 $x$, $y$에서 값이 $c\, d(x, y)$인 함수 $cd : X \times X \to \mathbb{R}$는 $X$ 위의 거리이고 $\mathcal{T}_{cd} = \mathcal{T}_d$이다.
4. ($\mathbb{R} \times \mathbb{R}$의 세 거리) 곱집합 $\mathbb{R} \times \mathbb{R}$ 위의 최대 거리 $d_{\max}$, 합 거리 $d_{\mathrm{sum}}$, 유클리드 거리 $d_E$의 거리위상은 모두 같다.
5. (실수의 보통 위상) $d$가 $\mathbb{R}$의 보통 거리이고
$$
\mathcal{J} = \{I \in \mathscr{P}(\mathbb{R}) : a < b \text{이고 } I = (a, b) \text{인 실수 } a, b \text{가 있다}\}
$$
가 열린구간 전체의 집합족이면 $\mathcal{J} = \mathcal{B}_d$이다. 따라서 $\mathcal{J}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$이다. 이 위상을 **$\mathbb{R}$의 보통 위상**(standard topology)이라 한다. 위상을 밝히지 않고 $\mathbb{R}$을 위상공간이라 하면 보통 위상을 준 것이다. $U \subseteq \mathbb{R}$이 보통 위상에서 열린집합인 것은 정확히 $U$가 $(\mathbb{R}, d)$에서 열린집합일 때이고, 또 정확히 $U = \bigcup \mathcal{D}$인 부분족 $\mathcal{D} \subseteq \mathcal{J}$가 있을 때이다.
6. (같은 위상을 주는 거리와 다른 위상을 주는 거리) 같은 집합 위의 서로 다른 두 거리가 같은 거리위상을 줄 수 있다. 예컨대 $\mathbb{R}$의 보통 거리 $d$와 $2d$는 서로 다른 함수이고 거리위상이 같다. 다른 거리위상을 줄 수도 있다. $\mathbb{R}$ 위의 이산 거리의 거리위상은 보통 위상과 다르다.
:::

:::english
Metric spaces and their examples (the standard metric, the discrete metric, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$) are as in the earlier entries, and open balls are as in the entry on open balls. The metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies, and bases for a topology, $\mathcal{T}_{\mathcal{B}}$ and "a basis for the topology $\mathcal{T}$" are as in the entries on bases. Open intervals $(a, b)$ are as in the entry on intervals (written only when $a < b$). Throughout, $P = \{r \in \mathbb{R} : 0 < r\}$.

1. (The open balls form a basis for the metric topology) If $(X, d)$ is a metric space, then the family of all open balls
$$
\mathcal{B}_d = \{B_d(x, r) : (x, r) \in X \times P\}
$$
(a family given by an expression) is a basis for a topology and a basis for the metric topology $\mathcal{T}_d$. That is, $\mathcal{T}_{\mathcal{B}_d} = \mathcal{T}_d$.
2. (Comparing metrics) If $d$ and $d'$ are metrics on a set $X$ and a real number $c > 0$ satisfies $d(x, y) \le c\, d'(x, y)$ for all points $x$, $y$ of $X$, then $\mathcal{T}_d \subseteq \mathcal{T}_{d'}$. Hence, if positive numbers $c$, $c'$ satisfy $d(x, y) \le c\, d'(x, y)$ and $d'(x, y) \le c'\, d(x, y)$ for all $x$, $y$, then $\mathcal{T}_d = \mathcal{T}_{d'}$.
3. (Positive multiples) If $d$ is a metric on a set $X$ and $c > 0$, then the function $cd : X \times X \to \mathbb{R}$ whose value at points $x$, $y$ of $X$ is $c\, d(x, y)$ is a metric on $X$, and $\mathcal{T}_{cd} = \mathcal{T}_d$.
4. (Three metrics on $\mathbb{R} \times \mathbb{R}$) The max metric $d_{\max}$, the sum metric $d_{\mathrm{sum}}$ and the euclidean metric $d_E$ on the Cartesian product $\mathbb{R} \times \mathbb{R}$ all have the same metric topology.
5. (The standard topology on the reals) If $d$ is the standard metric on $\mathbb{R}$ and
$$
\mathcal{J} = \{I \in \mathscr{P}(\mathbb{R}) : \text{there are real numbers } a, b \text{ with } a < b \text{ and } I = (a, b)\}
$$
is the family of all open intervals, then $\mathcal{J} = \mathcal{B}_d$. Hence $\mathcal{J}$ is a basis for a topology and $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$. This topology is called the **standard topology** on $\mathbb{R}$. When $\mathbb{R}$ is called a topological space without naming a topology, it carries the standard topology. A set $U \subseteq \mathbb{R}$ is open in the standard topology exactly when $U$ is open in $(\mathbb{R}, d)$, and also exactly when $U = \bigcup \mathcal{D}$ for some subfamily $\mathcal{D} \subseteq \mathcal{J}$.
6. (Metrics giving the same topology and metrics giving different ones) Two different metrics on the same set may give the same metric topology. For example, the standard metric $d$ on $\mathbb{R}$ and $2d$ are different functions with the same metric topology. They may also give different metric topologies: the metric topology of the discrete metric on $\mathbb{R}$ is different from the standard topology.
:::

## 직관

1단원에서 거리공간의 열린집합을 공으로 정의했고, 2단원 전반에서 그 열린집합 전체를 거리위상이라 불렀습니다. (1)은 이 두 단계를 기저의 말로 다시 읽은 것입니다. 공은 거리위상의 견본이고, 거리위상의 열린집합은 그 안에 든 공들을 모은 것입니다. 실수에서 공은 열린구간이므로, 해석학 입문에서 익숙한 "열린구간을 모아 만든 집합"이 정확히 보통 위상의 열린집합입니다((5)).

위상은 거리의 크기를 기억하지 않고 "얼마든지 작은 공이 있다"는 것만 기억합니다. (2)는 이것을 말합니다. $d \le c\, d'$이면 $d'$으로 잰 반지름 $r/c$인 공이 $d$로 잰 반지름 $r$인 공 안에 들어가므로, $d$에서 열린 집합은 $d'$에서도 열립니다. 상수 $c$가 $1$보다 작든 크든 상관없습니다. 그래서 거리를 두 배로 늘려도 위상은 그대로이고((3)), 평면의 세 거리도 서로의 상수배 안에 있으므로 같은 위상을 줍니다((4)). 반면 $\mathbb{R}$ 위의 이산 거리는 보통 거리와 다른 위상을 줍니다((6)).

## 증명

:::idea
(1)은 [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 (1)에 공을 넣습니다. (2)는 $d'$의 공 $B_{d'}(x, r/c)$가 $d$의 공 $B_d(x, r)$ 안에 든다는 계산이고, (3)과 (4)는 (2)를 상수를 골라 씁니다. (5)는 실수의 공이 열린구간이라는 [[open-ball]]의 (5)로 두 집합족이 같음을 보입니다.
:::

:::hint
(2)에서 $y \in B_{d'}(x, s)$, $s = r c^{-1}$이면 $d(x, y) \le c\, d'(x, y) < c s = r$입니다. 각 단계의 근거를 [[order-properties-of-reals]]에서 찾아보세요.
:::

:::hint
(4)에서는 [[metric-space-examples]]의 (7)의 세 부등식을 (2)에 하나씩 넣어 세 포함을 얻고, 그 포함이 한 바퀴 돈다는 것을 씁니다.
:::

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓴다. (K1)–(K10)은 [[real-number-arithmetic]]의 것이고, 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이다. [[topology-examples]]의 (4)에 의해, 거리 $d$와 $U \subseteq X$에 대하여 $U \in \mathcal{T}_d$인 것은 정확히 $U$가 $(X, d)$에서 열린집합일 때, 곧 $U$의 모든 점 $x$에 $B_d(x, r) \subseteq U$인 $r > 0$이 있을 때이다([[open-set-in-metric-space]]의 정의). 이것을 (가)라 부른다. 두 집합은 서로 포함할 때 같고([[set]]), $P \subseteq Q \subseteq R$이면 $P \subseteq R$이다([[subset]]).

**(1).** $\mathcal{B}_d$의 원소는 어떤 $(x, r) \in X \times P$에 대한 $B_d(x, r)$이고([[family-of-sets]]의 식으로 정한 집합족), [[topology-examples]]의 (4)에 의해 $\mathcal{T}_d$의 원소이다. 곧 $\mathcal{B}_d \subseteq \mathcal{T}_d$이다. $U \in \mathcal{T}_d$이고 $x \in U$이면 (가)에 의해 $B_d(x, r) \subseteq U$인 $r > 0$이 있고, $(x, r) \in X \times P$이므로 $B_d(x, r) \in \mathcal{B}_d$이며 [[open-ball]]의 (1)에 의해 $x \in B_d(x, r)$이다. [[basis-of-a-given-topology]]의 (1)에 의해 $\mathcal{B}_d$는 $\mathcal{T}_d$의 기저, 곧 위상의 기저이고 $\mathcal{T}_{\mathcal{B}_d} = \mathcal{T}_d$이다.

**(2).** $U \in \mathcal{T}_d$이고 $x \in U$라 하자. (가)에 의해 $B_d(x, r) \subseteq U$인 $r > 0$이 있다. $s = r c^{-1}$이라 하자. 순서 성질 (6)의 (i)에 의해 $0 < c^{-1}$이고 (W4)([[real-order-axioms]])에 의해 $0 < s$이다. 또 (K1), (K2)와 $c c^{-1} = 1$, (K4)에 의해 $c s = (c c^{-1}) r = r$이다. $y \in B_{d'}(x, s)$이면 $d'(x, y) < s$이고, $0 < c$이므로 순서 성질 (4)의 (i)에 의해 $c\, d'(x, y) < c s = r$이다. 가정에 의해 $d(x, y) \le c\, d'(x, y)$이므로 순서 성질 (1)의 (v)에 의해 $d(x, y) < r$, 곧 $y \in B_d(x, r) \subseteq U$이다. 따라서 $B_{d'}(x, s) \subseteq U$이고, (가)를 $d'$에 쓰면 $U \in \mathcal{T}_{d'}$이다. 곧 $\mathcal{T}_d \subseteq \mathcal{T}_{d'}$이다. 둘째 문장은 첫 문장을 $(d, d', c)$와 $(d', d, c')$에 쓴 두 포함에서 나온다.

**(3).** $cd$는 [[recursion-theorem|재귀 정리]]의 (1)에 의해 식으로 정한 함수 $X \times X \to \mathbb{R}$이다. 거리의 네 조건을 확인한다. $x$, $y$, $z$는 $X$의 점이다.
- (i): $0 \le c$이고 $0 \le d(x, y)$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le c\, d(x, y)$이다.
- (ii): $c\, d(x, y) = 0$이면 (K10)에 의해 $c = 0$이거나 $d(x, y) = 0$인데, $0 < c$이므로 순서 성질 (1)의 (i)에 의해 $c \ne 0$이고 $d(x, y) = 0$이다. 거꾸로 $d(x, y) = 0$이면 (K9)에 의해 $c\, d(x, y) = 0$이다. 따라서 $c\, d(x, y) = 0$인 것은 정확히 $d(x, y) = 0$, 곧 $x = y$일 때이다.
- (iii): $d(x, y) = d(y, x)$이므로 $c\, d(x, y) = c\, d(y, x)$이다.
- (iv): $d(x, z) \le d(x, y) + d(y, z)$에 $0 \le c$를 곱하면 순서 성질 (4)의 (iii)에 의해 $c\, d(x, z) \le c\bigl(d(x, y) + d(y, z)\bigr) = c\, d(x, y) + c\, d(y, z)$이다(마지막은 (K3)).

거리위상: (K1), (K2), $c^{-1} c = 1$, (K4)에 의해 $d(x, y) = c^{-1}\bigl(c\, d(x, y)\bigr)$이므로 순서 성질 (1)의 (iv)에 의해 $d(x, y) \le c^{-1}\,(cd)(x, y)$이고, $0 < c^{-1}$이다. 또 $(cd)(x, y) \le c\, d(x, y)$이다. (2)의 둘째 문장을 상수 $c^{-1}$, $c$로 쓰면 $\mathcal{T}_d = \mathcal{T}_{cd}$이다.

**(4).** [[metric-space-examples]]의 (7)에 의해 $\mathbb{R} \times \mathbb{R}$의 모든 점 $p$, $q$에서 $d_{\max}(p, q) \le d_E(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이다. (K1), (K4)에 의해 $1 \cdot a = a$이고, 순서 성질 (5)의 (ii)에 의해 $0 < 1$, 순서 성질 (10)에 의해 $0 < 2$이다. (2)를 차례로 쓰면 $d_{\max} \le 1 \cdot d_E$에서 $\mathcal{T}_{d_{\max}} \subseteq \mathcal{T}_{d_E}$, $d_E \le 1 \cdot d_{\mathrm{sum}}$에서 $\mathcal{T}_{d_E} \subseteq \mathcal{T}_{d_{\mathrm{sum}}}$, $d_{\mathrm{sum}} \le 2\, d_{\max}$에서 $\mathcal{T}_{d_{\mathrm{sum}}} \subseteq \mathcal{T}_{d_{\max}}$이다. 앞의 두 포함에서 $\mathcal{T}_{d_{\max}} \subseteq \mathcal{T}_{d_{\mathrm{sum}}}$이고 셋째 포함과 함께 $\mathcal{T}_{d_{\max}} = \mathcal{T}_{d_{\mathrm{sum}}}$이다. 그러면 $\mathcal{T}_{d_{\max}} \subseteq \mathcal{T}_{d_E} \subseteq \mathcal{T}_{d_{\mathrm{sum}}} = \mathcal{T}_{d_{\max}}$이므로 $\mathcal{T}_{d_E} = \mathcal{T}_{d_{\max}}$이다.

**(5).** $\mathcal{J}$와 $\mathcal{B}_d$는 모두 $\mathscr{P}(\mathbb{R})$의 부분집합이다. $I \in \mathcal{J}$이면 $a < b$이고 $I = (a, b)$인 $a$, $b$가 있고, [[open-ball]]의 (5)에 의해 $t = (a + b)/2$, $\rho = (b - a)/2$에 대하여 $0 < \rho$이고 $(a, b) = B(t, \rho)$이므로 $I \in \mathcal{B}_d$이다. 거꾸로 $B(x, r) \in \mathcal{B}_d$ ($x \in \mathbb{R}$, $0 < r$)이면 같은 (5)에 의해 $x - r < x + r$이고 $B(x, r) = (x - r, x + r)$이므로 $B(x, r) \in \mathcal{J}$이다. 따라서 $\mathcal{J} = \mathcal{B}_d$이고, (1)에 의해 $\mathcal{J}$는 위상의 기저이며 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$이다. 마지막 문장의 첫째 부분은 (가)이고, 둘째 부분은 $\mathcal{J}$가 $\mathcal{T}_d$의 기저이므로 [[basis-of-a-given-topology]]의 (3)의 (a)와 (c)이다.

**(6).** $d$는 보통 거리이다. (3)에 의해 $2d$는 거리이고 $\mathcal{T}_{2d} = \mathcal{T}_d$이다. $d(0, 1) = |0 - 1| = 1$이고 $(2d)(0, 1) = 2$이며 $1 \ne 2$이므로(순서 성질 (10)), 두 함수는 점 $(0, 1)$에서 값이 달라 서로 다른 함수이다([[function]]). 이산 거리의 거리위상은 [[comparing-topologies]]의 (5)에 의해 보통 거리의 거리위상, 곧 보통 위상보다 진짜로 더 섬세하므로 보통 위상과 다르다.
:::

## 예시와 반례

:::example[이산 거리의 공 전체]
$X$가 공집합이 아닌 집합이고 $d$가 이산 거리이면 [[open-ball]]의 (6)에 의해 $r \le 1$일 때 $B(x, r) = \{x\}$, $1 < r$일 때 $B(x, r) = X$입니다. 따라서 $\mathcal{B}_d = \{\{x\} : x \in X\} \cup \{X\}$입니다. (1)에 의해 이것은 거리위상의 기저이고, [[topology-examples]]의 (5)에 의해 거리위상은 이산위상입니다. 한 점 집합 전체만으로도 이산위상의 기저이므로([[basis-of-a-given-topology]]의 (4)의 (ii)), 기저 원소 $X$는 없어도 됩니다. $X = \emptyset$이면 공이 하나도 없어 $\mathcal{B}_d = \emptyset$이고, 이것은 [[basis-for-a-topology]]의 (4)에 의해 $\emptyset$ 위의 위상 $\{\emptyset\}$의 기저입니다.
:::

:::counterexample[거리위상이 같아도 상수가 없을 수 있다]
(2)의 거꾸로는 성립하지 않을 수 있습니다. $\mathbb{R}$의 보통 거리 $d$와, 값이 $m(x, y) = \min\{d(x, y), 1\}$인 함수 $m$을 봅니다.

$m$은 거리입니다. (i)–(iii)은 [[absolute-value]]의 (10)(최소는 두 수 가운데 하나이고 두 수 이하이다)과 $d$의 성질에서 바로 나옵니다($m(x, y) = 0$이면 $1 \ne 0$이므로 $m(x, y) = d(x, y) = 0$입니다). (iv) $m(x, z) \le m(x, y) + m(y, z)$: 오른쪽의 두 항 가운데 하나가 $1$이면 다른 항이 $0$ 이상이므로 오른쪽은 $1$ 이상이고 $m(x, z) \le 1$입니다. 두 항이 모두 $1$이 아니면 그 값은 $d(x, y)$, $d(y, z)$이고 $m(x, z) \le d(x, z) \le d(x, y) + d(y, z)$입니다.

$\mathcal{T}_m = \mathcal{T}_d$입니다. $m \le 1 \cdot d$이므로 (2)에 의해 $\mathcal{T}_m \subseteq \mathcal{T}_d$입니다. 거꾸로 $U \in \mathcal{T}_d$, $x \in U$, $B_d(x, r) \subseteq U$이면 $s = \min\{r, 1\}$에 대하여 $B_m(x, s) \subseteq B_d(x, r)$입니다. $m(x, y) < s \le 1$이면 $m(x, y) \ne 1$이므로 $m(x, y) = d(x, y)$이고 $d(x, y) < s \le r$이기 때문입니다.

그러나 $d \le c\, m$인 양수 $c$는 없습니다. $c > 0$이 무엇이든 $y = c + 1$이면 $d(0, y) = c + 1$인데 $c\, m(0, y) \le c \cdot 1 = c < c + 1$입니다.
:::

## 확인 질문

:::check[$\mathbb{R}$의 보통 거리 $d$와 $2d$의 열린 공 전체의 족 $\mathcal{B}_d$와 $\mathcal{B}_{2d}$는 같은가?]
같습니다. $(2d)(x, y) < r$인 것은 $d(x, y) < r/2$인 것과 같으므로 $B_{2d}(x, r) = B_d(x, r/2)$이고, $B_d(x, r) = B_{2d}(x, 2r)$입니다. ($(2d)(x, y) < r$과 $d(x, y) < r/2$가 같다는 것은 [[order-properties-of-reals]]의 (6)의 (iv)를 양변에 $1/2$를 곱하는 데 쓴 것입니다.) 따라서 두 족은 같고, (5)에 의해 둘 다 열린구간 전체 $\mathcal{J}$입니다. (1)에 의해 $\mathcal{T}_{2d} = \mathcal{T}_{\mathcal{B}_{2d}} = \mathcal{T}_{\mathcal{B}_d} = \mathcal{T}_d$이므로, (3)의 결론을 공의 모임으로도 확인한 셈입니다.
:::

:::check[$X$에 이산 거리 $d$를 줄 때, 반지름이 $1/2$인 공만 모은 $\{B(x, 1/2) : x \in X\}$도 거리위상의 기저인가?]
그렇습니다. [[open-ball]]의 (6)에 의해 $B(x, 1/2) = \{x\}$이므로 이 족은 한 점 집합 전체이고, [[basis-of-a-given-topology]]의 (4)의 (ii)에 의해 이산위상의 기저입니다. [[topology-examples]]의 (5)에 의해 이산위상이 거리위상입니다.
:::
