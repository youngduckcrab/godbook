---
title: 최대 거리의 위상은 곱위상이다
title_en: The Max Metric Induces the Product Topology
aliases: [최대 거리와 곱위상, max metric and product topology, 평면의 보통 위상, standard topology on the plane, 덧셈과 곱셈의 연속, 거리함수의 연속]
kind: theorem
field: topology
msc: ["54B10", "54E35"]
level: undergrad
summary: 두 거리공간의 곱집합에서 최대 거리와 합 거리의 거리위상은 두 거리위상의 곱위상과 같다. 그래서 ℝ × ℝ 의 세 거리가 주는 위상은 모두 보통 위상 둘의 곱위상이다. 이 위상에서 실수의 덧셈과 곱셈은 연속이고, 거리공간의 거리함수는 곱공간 위의 연속함수이다.
requires: [set, subset, cartesian-product, function, function-composition, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, topological-space, topology-examples, closed-set, comparing-topologies, basis-for-a-topology, basis-of-a-given-topology, comparing-bases, standard-topology-on-reals, product-topology, continuous-map, continuity-criteria, continuity-in-metric-spaces, composition-of-continuous-maps, maps-into-a-product]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "연습문제 1.9, 1.16, content/exercises.tex:29, 56–60"
    checked: original
    note: "(1)의 첫 등식은 출처 연습문제 1.16(최대 거리의 거리위상이 곱위상이다)이고, (2)는 연습문제 1.9(ℝ² 의 표준 위상이 ℝ × ℝ 의 곱위상과 같음을 Lemma compare-bases 로 보이라)와 같은 결론이다. 출처의 ℝ² 의 표준 위상은 이 사이트의 ℝ × ℝ 위의 유클리드 거리의 거리위상이다. 증명은 이 항목이 쓴 것이고, 출처 연습문제 1.9 가 가리키는 것과 같이 기저를 비교한다. (3), (4)의 증명도 이 항목이 쓴 것이다."
  - ref: lebl-basic-analysis
    loc: "7.1절 연습문제 7.1.6, p.262; 7.2절 연습문제 7.2.9, 7.2.18, p.272–273; 7.5절 Example 7.5.3, p.288, 연습문제 7.5.10, p.294"
    checked: original
    note: "출처 연습문제 7.1.6 은 곱집합 위의 합 거리와 최대 거리가 거리임을 묻고, 연습문제 7.2.9 는 두 거리가 서로 상수배로 눌리면 같은 열린집합을 낸다는 것을, 연습문제 7.2.18 은 ℝⁿ 의 'rectangle' 이 공과 같은 열린집합을 낸다는 것을 묻는다. (1)의 둘째 등식과 (2)는 이것들과 같은 발상이다. 출처 Example 7.5.3 은 ℝ² 위의 다항식이 연속임을 수열로 보이며, (3)의 덧셈과 곱셈의 연속은 그 가운데 가장 간단한 두 다항식에 대한 것과 같은 결론이다. 이 항목은 수열 대신 ε–δ 로 증명한다. (4)는 출처 연습문제 7.5.10 b)(최대 거리를 준 X × X 위에서 g(x, y) = d(x, y) 가 연속)와 같은 물음이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 곱집합 위의 최대 거리 $d_{\max}$, 합 거리 $d_{\mathrm{sum}}$, $\mathbb{R} \times \mathbb{R}$의 유클리드 거리 $d_E$는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이다. 곱위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$는 [[product-topology|두 공간의 곱위상]]의 것이고, $\mathbb{R}$의 보통 거리 $d$와 보통 위상 $\mathcal{T}_d$는 [[standard-topology-on-reals]]의 (5)의 것이다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다.

1. (최대 거리와 합 거리) $(X_1, d_1)$, $(X_2, d_2)$가 거리공간이고 $X_1 \times X_2$ 위의 최대 거리와 합 거리가 $d_{\max}$, $d_{\mathrm{sum}}$이면 $\mathcal{T}_{d_{\max}} = \mathcal{T}_{d_1} \otimes \mathcal{T}_{d_2} = \mathcal{T}_{d_{\mathrm{sum}}}$이다. 또 $X_1 \times X_2$의 모든 점 $p$, $q$에서 $d_{\max}(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이다.
2. ($\mathbb{R} \times \mathbb{R}$의 보통 위상) $\mathbb{R} \times \mathbb{R}$ 위의 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$의 거리위상은 모두 $\mathbb{R}$의 보통 위상 둘의 곱위상 $\mathcal{T}_d \otimes \mathcal{T}_d$와 같다. 이 위상을 **$\mathbb{R} \times \mathbb{R}$의 보통 위상**이라 하고, 위상을 밝히지 않고 $\mathbb{R} \times \mathbb{R}$을 위상공간이라 하면 이것을 준 것이다. 열린구간의 곱 $I \times J$ 전체는 이 위상의 기저이다.
3. (덧셈과 곱셈) $\mathbb{R} \times \mathbb{R}$과 $\mathbb{R}$에 보통 위상을 주면, $s(x, y) = x + y$와 $m(x, y) = xy$로 정한 함수 $s, m : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 연속이다. 따라서 $(Z, \mathcal{T}_Z)$가 위상공간이고 $f, g : Z \to \mathbb{R}$가 연속이면, $z$를 $f(z) + g(z)$로 보내는 함수와 $f(z)g(z)$로 보내는 함수 $Z \to \mathbb{R}$는 연속이다.
4. (거리함수) $(X, d_X)$가 거리공간이면 거리 $d_X : X \times X \to \mathbb{R}$는 연속이다. 여기서 $X \times X$에는 곱위상 $\mathcal{T}_{d_X} \otimes \mathcal{T}_{d_X}$를, $\mathbb{R}$에는 보통 위상을 준다.
:::

:::english
Metric spaces, the max metric $d_{\max}$ and sum metric $d_{\mathrm{sum}}$ on a product, and the euclidean metric $d_E$ on $\mathbb{R} \times \mathbb{R}$ are as in the entries on metric spaces and their examples, and the metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies. The product topology $\mathcal{T}_1 \otimes \mathcal{T}_2$ is as in the entry on the product topology of two spaces, and the standard metric $d$ and standard topology $\mathcal{T}_d$ on $\mathbb{R}$ are as in part (5) of the entry on the standard topology on the reals. Continuity is as in the entry on continuous maps between topological spaces.

1. (Max metric and sum metric) If $(X_1, d_1)$, $(X_2, d_2)$ are metric spaces and $d_{\max}$, $d_{\mathrm{sum}}$ are the max and sum metrics on $X_1 \times X_2$, then $\mathcal{T}_{d_{\max}} = \mathcal{T}_{d_1} \otimes \mathcal{T}_{d_2} = \mathcal{T}_{d_{\mathrm{sum}}}$. Moreover, $d_{\max}(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$ for all points $p$, $q$ of $X_1 \times X_2$.
2. (The standard topology on $\mathbb{R} \times \mathbb{R}$) The metric topologies of $d_{\max}$, $d_{\mathrm{sum}}$ and $d_E$ on $\mathbb{R} \times \mathbb{R}$ all equal the product topology $\mathcal{T}_d \otimes \mathcal{T}_d$ of two copies of the standard topology on $\mathbb{R}$. This topology is called the **standard topology on $\mathbb{R} \times \mathbb{R}$**, and when $\mathbb{R} \times \mathbb{R}$ is called a topological space without naming a topology, it carries this one. The products $I \times J$ of open intervals form a basis for it.
3. (Addition and multiplication) With the standard topologies on $\mathbb{R} \times \mathbb{R}$ and on $\mathbb{R}$, the functions $s, m : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ given by $s(x, y) = x + y$ and $m(x, y) = xy$ are continuous. Hence if $(Z, \mathcal{T}_Z)$ is a topological space and $f, g : Z \to \mathbb{R}$ are continuous, then the functions $Z \to \mathbb{R}$ sending $z$ to $f(z) + g(z)$ and to $f(z)g(z)$ are continuous.
4. (The distance function) If $(X, d_X)$ is a metric space, then the metric $d_X : X \times X \to \mathbb{R}$ is continuous, where $X \times X$ carries the product topology $\mathcal{T}_{d_X} \otimes \mathcal{T}_{d_X}$ and $\mathbb{R}$ the standard topology.
:::

## 직관

최대 거리의 열린 공은 두 공의 곱입니다. $B_{d_{\max}}(p, r) = B(p_1, r) \times B(p_2, r)$이므로 거리위상의 기저 원소는 곱위상의 기저 원소이기도 합니다. 거꾸로 곱위상의 기저 원소 $B(x_1, r_1) \times B(x_2, r_2)$ 안의 점 $q$ 둘레에는, 두 방향의 여유 가운데 작은 쪽을 반지름으로 하는 최대 거리의 공이 들어갑니다. 그래서 두 위상이 같습니다. 평면에서는 "정사각형 공"과 "직사각형"이 같은 열린집합을 만든다는 말이고, 둥근 공(유클리드 거리)도 2단원에서 정사각형 공과 같은 위상을 주었으므로 $\mathbb{R} \times \mathbb{R}$의 세 위상과 곱위상이 모두 같습니다.

이렇게 위상을 하나로 맞추어 두면 곱공간 위의 함수를 거리로 다룰 수 있습니다. 덧셈과 곱셈의 연속은 두 변수의 함수에 대한 ε–δ 계산이고, 거리함수의 연속은 거리의 삼각부등식에서 나옵니다.

## 증명

:::idea
(1)은 두 기저 $\{B_{d_{\max}}(p, r)\}$와 $\{B(x_1, r_1) \times B(x_2, r_2)\}$를 기저 비교 판정으로 견준다. (3), (4)는 정의역에 최대 거리를 주고 ε–δ로 보인다.
:::

:::hint
$q \in B(x_1, r_1) \times B(x_2, r_2)$이면 $s = \min\{r_1 - d_1(x_1, q_1),\ r_2 - d_2(x_2, q_2)\}$로 둡니다.
:::

:::hint
곱셈에서는 $xy - ab = x(y - b) + b(x - a)$로 나누고, $|x| < |a| + 1$이 되도록 $\delta \le 1$로 잡습니다.
:::

:::proof
$P = \{r \in \mathbb{R} : 0 < r\}$이라 하자. 실수의 계산과 순서는 [[real-number-arithmetic]], [[order-properties-of-reals]]의 것이고, 절댓값과 두 수의 최대·최소는 [[absolute-value]]의 것이다.

**(1).** 부등식: $a = d_1(p_1, q_1)$, $b = d_2(p_2, q_2)$라 하면 거리의 조건 (i)에 의해 $0 \le a$, $0 \le b$이다. [[order-properties-of-reals]]의 (2)의 (iii)에 의해 $a = a + 0 \le a + b$이고 $b \le a + b$이므로, [[absolute-value]]의 (10)에 의해 $\max\{a, b\} \le a + b$이다. 또 $a \le \max\{a, b\}$, $b \le \max\{a, b\}$이므로 (2)의 (iii)에 의해 $a + b \le 2 \max\{a, b\}$이다. 곧 $d_{\max} \le d_{\mathrm{sum}} \le 2\, d_{\max}$이다. [[standard-topology-on-reals]]의 (2)를 $c = 1$, $c' = 2$로 쓰면 $\mathcal{T}_{d_{\max}} = \mathcal{T}_{d_{\mathrm{sum}}}$이다.

$\mathcal{T}_{d_{\max}} = \mathcal{T}_{d_1} \otimes \mathcal{T}_{d_2}$: [[standard-topology-on-reals]]의 (1)에 의해 열린 공 전체 $\mathcal{B}_{d_{\max}}$, $\mathcal{B}_{d_1}$, $\mathcal{B}_{d_2}$는 각각 위상 $\mathcal{T}_{d_{\max}}$, $\mathcal{T}_{d_1}$, $\mathcal{T}_{d_2}$의 기저이다. [[product-topology]]의 (5)에 의해 $\mathcal{B}' = \{B_1 \times B_2 : (B_1, B_2) \in \mathcal{B}_{d_1} \times \mathcal{B}_{d_2}\}$는 위상 $\mathcal{T}_{d_1} \otimes \mathcal{T}_{d_2}$의 기저이다. 곧 $\mathcal{T}_{\mathcal{B}_{d_{\max}}} = \mathcal{T}_{d_{\max}}$이고 $\mathcal{T}_{\mathcal{B}'} = \mathcal{T}_{d_1} \otimes \mathcal{T}_{d_2}$이므로, [[comparing-bases]]의 (2)의 두 조건을 확인하면 된다.
첫째 조건($\mathcal{B}_{d_{\max}}$의 원소 안에 $\mathcal{B}'$의 원소): $p = (p_1, p_2)$, $r \in P$에 대하여 [[open-ball]]의 (8)에 의해 $B_{d_{\max}}(p, r) = B_{d_1}(p_1, r) \times B_{d_2}(p_2, r)$이고 이것은 $\mathcal{B}'$의 원소이다. 그 안의 점 $q$에 대하여 이 원소 자신을 잡으면 된다.
둘째 조건: $B = B_{d_1}(x_1, r_1) \times B_{d_2}(x_2, r_2)$이고 $q = (q_1, q_2) \in B$라 하자. $s_1 = r_1 - d_1(x_1, q_1)$, $s_2 = r_2 - d_2(x_2, q_2)$로 두면 [[open-ball]]의 (3)에 의해 $0 < s_1$, $0 < s_2$이고 $B_{d_1}(q_1, s_1) \subseteq B_{d_1}(x_1, r_1)$, $B_{d_2}(q_2, s_2) \subseteq B_{d_2}(x_2, r_2)$이다. $s = \min\{s_1, s_2\}$로 두면 [[absolute-value]]의 (10)에 의해 $s$는 $s_1$이거나 $s_2$이므로 $0 < s$이고, $s \le s_1$, $s \le s_2$이다. [[open-ball]]의 (2)에 의해 $B_{d_i}(q_i, s) \subseteq B_{d_i}(q_i, s_i)$이다. [[open-ball]]의 (8)과 [[product-topology]]의 (1)의 (c)에 의해
$$
\begin{aligned}
B_{d_{\max}}(q, s) &= B_{d_1}(q_1, s) \\
&\quad \times B_{d_2}(q_2, s) \subseteq B
\end{aligned}
$$
이고, [[open-ball]]의 (1)에 의해 $q \in B_{d_{\max}}(q, s)$이다.

**(2).** [[metric-space-examples]]의 (5)의 $d_{\max}$는 (4)를 두 보통 거리에 쓴 것이므로 (1)에 의해 $\mathcal{T}_{d_{\max}} = \mathcal{T}_d \otimes \mathcal{T}_d$이다. [[standard-topology-on-reals]]의 (4)에 의해 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$의 거리위상은 같다. 기저에 대한 문장은 [[product-topology]]의 (5)의 끝 문장이다.

**(3).** (2)에 의해 $\mathbb{R} \times \mathbb{R}$의 보통 위상은 $d_{\max}$의 거리위상이므로, [[continuity-in-metric-spaces]]의 (2)에 의해 거리공간 $(\mathbb{R} \times \mathbb{R}, d_{\max})$에서 $(\mathbb{R}, d)$로의 함수로서 모든 점에서 ε–δ 조건을 보이면 된다. $s$와 $m$은 [[recursion-theorem]]의 (1)에 의해 함수이다. $(a, b) \in \mathbb{R} \times \mathbb{R}$, $\varepsilon \in P$라 하고, $d_{\max}((x, y), (a, b)) < \delta$이면 [[absolute-value]]의 (10)에 의해 $|x - a| < \delta$이고 $|y - b| < \delta$임을 쓴다.
덧셈: $\delta = \varepsilon \cdot 2^{-1}$이라 하면 [[order-properties-of-reals]]의 (8)에 의해 $0 < \delta$이다. $|x - a| < \delta$, $|y - b| < \delta$이면 [[triangle-inequality]]의 (1)과 [[order-properties-of-reals]]의 (2)의 (iv)에 의해
$$
\begin{aligned}
&|(x + y) - (a + b)| \\
&\quad = |(x - a) + (y - b)| \\
&\quad \le |x - a| + |y - b| \\
&\quad < \delta + \delta = \varepsilon
\end{aligned}
$$
이다.
곱셈: $K = |a| + |b| + 1$이라 하면 $0 \le |a|$, $0 \le |b|$, $0 < 1$이므로 $0 < K$이다. $\delta = \min\{1, \varepsilon K^{-1}\}$이라 하면 [[order-properties-of-reals]]의 (6)의 (i)과 (W4)([[real-order-axioms]])에 의해 $0 < \varepsilon K^{-1}$이고, [[absolute-value]]의 (10)에 의해 $0 < \delta$, $\delta \le 1$, $\delta \le \varepsilon K^{-1}$이다. $|x - a| < \delta$, $|y - b| < \delta$라 하자. [[triangle-inequality]]의 (1)에 의해 $|x| = |a + (x - a)| \le |a| + |x - a| < |a| + 1$이다. 계산 법칙에 의해 $xy - ab = x(y - b) + b(x - a)$이므로, 삼각부등식과 [[absolute-value]]의 (4)에 의해
$$
|xy - ab| \le |x|\,|y - b| + |b|\,|x - a|
$$
이다. $0 \le |y - b|$이고 $|x| \le |a| + 1$이므로 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $|x|\,|y - b| \le (|a| + 1)|y - b|$이고, $0 < |a| + 1$이고 $|y - b| < \delta$이므로 (4)의 (i)에 의해 $(|a| + 1)|y - b| < (|a| + 1)\delta$이다. 또 (4)의 (iii)에 의해 $|b|\,|x - a| \le |b|\,\delta$이다. (2)의 (iv)에 의해 $|xy - ab| < (|a| + 1)\delta + |b|\,\delta = K\delta$이고, $0 < K$, $\delta \le \varepsilon K^{-1}$이므로 (4)의 (iii)에 의해 $K\delta \le K \varepsilon K^{-1} = \varepsilon$이다. 따라서 $|xy - ab| < \varepsilon$이다.
따름: $f$, $g$가 연속이면 [[maps-into-a-product]]의 (4)의 (i)에 의해 $h(z) = (f(z), g(z))$인 $h : Z \to \mathbb{R} \times \mathbb{R}$는 연속이고, [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $s \circ h$와 $m \circ h$는 연속이다. [[function-composition]]에 의해 $(s \circ h)(z) = f(z) + g(z)$, $(m \circ h)(z) = f(z)g(z)$이다.

**(4).** (1)을 $X_1 = X_2 = X$, $d_1 = d_2 = d_X$에 쓰면 $\mathcal{T}_{d_X} \otimes \mathcal{T}_{d_X} = \mathcal{T}_{d_{\max}}$이므로, [[continuity-in-metric-spaces]]의 (2)에 의해 $(X \times X, d_{\max})$에서 $(\mathbb{R}, d)$로의 함수로서 ε–δ 조건을 보이면 된다. $(z, w) \in X \times X$, $\varepsilon \in P$라 하고 $\delta = \varepsilon \cdot 2^{-1}$로 둔다. $d_{\max}((x, y), (z, w)) < \delta$이면, $p = (x, y)$, $q = (z, w)$로 두고 [[metric-space]]의 (4)와 (1)의 부등식을 쓰면
$$
\begin{aligned}
&|d_X(x, y) - d_X(z, w)| \\
&\quad \le d_X(x, z) + d_X(y, w) \\
&\quad = d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q) \\
&\quad < 2\delta = \varepsilon
\end{aligned}
$$
이다(마지막 부등식은 [[order-properties-of-reals]]의 (4)의 (i)). [[absolute-value]]의 (3)에 의해 $|d_X(z, w) - d_X(x, y)|$도 같은 값이다.
:::

## 예시와 반례

:::example[쌍곡선과 그 사영]
$\mathbb{R} \times \mathbb{R}$(보통 위상)에서 $H = \{(x, y) \in \mathbb{R} \times \mathbb{R} : xy = 1\}$은 (3)의 $m$에 대하여 $H = m^{-1}(\{1\})$이고, $\{1\}$은 $\mathbb{R}$에서 닫혀 있으므로([[open-and-closed-sets-of-reals]]의 (2), [[closed-set]]의 (6)) [[continuity-criteria]]의 (1)에 의해 $H$는 닫혀 있습니다. 그러나 사영 $\pi_1(H)$는 $\mathbb{R} - \{0\}$입니다. $(x, y) \in H$이면 $xy = 1$이므로 $x \ne 0$이고, $x \ne 0$이면 $(x, x^{-1}) \in H$이기 때문입니다. $\mathbb{R} - \{0\}$은 그 여집합 $\{0\}$이 열려 있지 않으므로([[open-set-in-metric-space]]의 (6)) 닫혀 있지 않습니다. 따라서 두 인자가 모두 보통 위상의 $\mathbb{R}$인 이 경우에도 $\pi_1$은 닫힌 사상이 아닙니다([[maps-into-a-product]]의 (1)의 (iii)과 같은 현상).

같은 방식으로 $\{(x, y) : 0 < xy\} = m^{-1}(\{t \in \mathbb{R} : 0 < t\})$는 열려 있습니다([[open-and-closed-sets-of-reals]]의 (1)과 [[standard-topology-on-reals]]의 (5)에 의해 $\{t : 0 < t\}$가 열려 있기 때문입니다).
:::

:::counterexample[다른 거리는 다른 위상을 줄 수 있다]
$\mathbb{R} \times \mathbb{R}$ 위의 이산 거리도 거리이지만, 그 거리위상은 이산위상이고([[topology-examples]]의 (5)) 보통 위상과 다릅니다. $\{(0, 0)\}$이 보통 위상에서 열려 있다면 [[product-topology]]의 (3)의 (b)에 의해 $0 \in U$, $0 \in V$, $U \times V \subseteq \{(0, 0)\}$인 열린 $U$, $V$가 있고, $U \times V \ne \emptyset$이므로 [[product-topology]]의 (1)의 (c)에 의해 $U \subseteq \{0\}$, 곧 $U = \{0\}$이 되어 $\{0\}$이 $\mathbb{R}$에서 열려 있어야 합니다. 이것은 [[open-set-in-metric-space]]의 (6)에 어긋납니다. (1), (2)는 최대 거리, 합 거리, 유클리드 거리처럼 두 인자의 거리로 만든 거리에 대한 것입니다.
:::

## 확인 질문

:::check[$p(x, y) = x + yy$로 정한 함수 $p : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 연속인가?]
연속입니다. 사영 $\pi_1$, $\pi_2$는 연속이므로([[maps-into-a-product]]의 (1)) (3)의 따름에 의해 $(x, y)$를 $yy$로 보내는 함수($\pi_2$와 $\pi_2$의 곱)가 연속이고, 다시 (3)의 따름에 의해 이것과 $\pi_1$의 합인 $p$가 연속입니다.
:::

:::check[$(X, d_X)$가 거리공간이고 $p \in X$일 때, (4)에서 $x$를 $d_X(x, p)$로 보내는 함수의 연속을 얻을 수 있는가?]
얻을 수 있습니다. [[maps-into-a-product]]의 (4)의 (iii)에 의해 $x$를 $(x, p)$로 보내는 함수 $X \to X \times X$는 연속이고, 이것과 연속인 $d_X$의 합성이 그 함수이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 연속입니다. 이것은 [[continuity-in-metric-spaces]]의 (3)과 같은 결론입니다.
:::
