---
title: 거리공간에서 연속과 ε–δ
title_en: Continuity in Metric Spaces
aliases: [거리공간의 연속, 엡실론 델타, ε-δ 연속, epsilon-delta continuity, continuity in metric spaces, 거리함수의 연속]
kind: theorem
field: topology
msc: ["54C05", "54E35"]
level: undergrad
summary: 거리위상을 준 두 거리공간 사이의 함수가 한 점에서 연속인 것은 공의 꼴과 부등식 꼴의 ε–δ 조건과 같고, 연속인 것은 모든 점에서 ε–δ 조건이 성립하는 것과 같다. 한 점까지의 거리를 재는 함수는 연속이다.
requires: [set, subset, function, recursion-theorem, real-order-axioms, order-properties-of-reals, absolute-value, metric-space, metric-space-examples, open-ball, topology-examples, neighborhood, preimage-and-set-operations, continuous-map, continuity-criteria]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 Theorem continuity-def-equivalent, Lemma continuity-def-equivalent-lemma 와 그 증명, content/topological-spaces.tex:325–348"
    checked: original
    note: "(1)의 (a)와 (b)가 같다는 것은 출처의 보조정리(333–345)와 같고, 증명도 출처처럼 공이 열린집합이라는 것과 열린집합이 그 점을 중심으로 하는 공을 포함한다는 것을 쓴다. (2)는 출처의 정리(325–331)와 같다. 출처는 그 증명을 보조정리와 continuous-props 의 (iii)으로 한다고 적는다(346–348). 이 항목은 continuous-props 의 (iii)에 해당하는 continuity-criteria 의 (2)를 쓴다. 출처 정리의 식(329)에는 y 의 한정 기호가 적혀 있지 않다. 이 항목의 (1)의 (c)는 '모든 y ∈ X 에 대하여'를 적는다."
  - ref: lebl-basic-analysis
    loc: "7.5.1절, Definition 7.5.1 (p.288); 7.5.3절, Lemma 7.5.7 (p.290), Theorem 7.5.8 (p.291); 7.5.6절 연습문제 7.5.10 a (p.294)"
    checked: original
    note: "출처는 Definition 7.5.1(p.288)에서 (1)의 (c)를 거리공간 사이의 연속의 정의로 삼고, Lemma 7.5.7(p.290)과 Theorem 7.5.8(p.291, 증명은 연습문제 7.5.4)에서 그것이 열린집합의 말과 같다는 것을 보인다. 이 사이트는 연속을 열린집합으로 정의했으므로 방향이 거꾸로이다. (3)은 출처 연습문제 7.5.10 a(p.294, f(x) = d(x, p) 가 연속임을 보여라)와 같은 진술이다. 확인 질문 '절댓값 함수'는 (3)을 p = 0 인 ℝ 에 쓴 것으로 같은 연습문제의 경우이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이고, 연속과 "$x$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 아래에서 $(X, d_X)$와 $(Y, d_Y)$는 거리공간이고 각각 거리위상을 준다. 열린 공은 $B_X$, $B_Y$로 어느 공간의 것인지 밝힌다. $f : X \to Y$는 함수이다.

1. (한 점에서) $x \in X$이면 다음 셋은 서로 같은 말이다.
   - (a) $f$는 $x$에서 연속이다.
   - (b) 모든 실수 $\varepsilon > 0$에 대하여 $f(B_X(x, \delta)) \subseteq B_Y(f(x), \varepsilon)$인 실수 $\delta > 0$이 있다.
   - (c) 모든 실수 $\varepsilon > 0$에 대하여 실수 $\delta > 0$이 있어, $d_X(x, y) < \delta$인 모든 $y \in X$에서 $d_Y(f(x), f(y)) < \varepsilon$이다.
2. (연속) $f$가 연속인 것은 정확히 $X$의 모든 점 $x$에서 (1)의 (c)가 성립할 때이다.
3. (한 점까지의 거리) $p \in X$이고 $r(x) = d_X(x, p)$로 정한 함수 $r : X \to \mathbb{R}$를 생각하자. $\mathbb{R}$에 보통 거리를 주면 $r$은 연속이다.
:::

:::english
Metric spaces and their examples and open balls $B(x, r)$ are as in the earlier entries; so are the metric topology $\mathcal{T}_d$, continuity and "continuity at $x$". Throughout, $(X, d_X)$ and $(Y, d_Y)$ are metric spaces, each given its metric topology. Open balls are written $B_X$, $B_Y$ to show which space they belong to. Let $f : X \to Y$ be a function.

1. (At a point) For $x \in X$ the following three statements are equivalent.
   - (a) $f$ is continuous at $x$.
   - (b) For every real number $\varepsilon > 0$ there is a real number $\delta > 0$ with $f(B_X(x, \delta)) \subseteq B_Y(f(x), \varepsilon)$.
   - (c) For every real number $\varepsilon > 0$ there is a real number $\delta > 0$ such that $d_Y(f(x), f(y)) < \varepsilon$ for every $y \in X$ with $d_X(x, y) < \delta$.
2. (Continuity) $f$ is continuous exactly when (c) of (1) holds at every point $x$ of $X$.
3. (Distance to a point) Let $p \in X$ and consider the function $r : X \to \mathbb{R}$ defined by $r(x) = d_X(x, p)$. Giving $\mathbb{R}$ its standard metric, $r$ is continuous.
:::

## 직관

위상공간의 "$x$에서 연속"은 $f(x)$를 담은 아무 열린집합 $V$에 대해서도 $x$를 담은 열린집합 $U$를 찾아 $f(U) \subseteq V$가 되게 할 수 있다는 것이었습니다. 거리공간에서는 열린집합마다 따질 필요 없이 공만 보면 됩니다. $f(x)$를 담은 열린집합은 $f(x)$를 중심으로 하는 작은 공을 포함하고, 공은 그 자체로 열린집합이기 때문입니다. 그래서 과녁을 반지름 $\varepsilon$인 공으로, 사대를 반지름 $\delta$인 공으로 좁혀도 같은 말이 되고, 공에 든다는 것을 거리의 부등식으로 풀어 쓰면 해석학 입문에서 본 $\varepsilon$–$\delta$의 꼴이 됩니다.

(1)의 $\delta$는 $\varepsilon$과 $x$에 따라 달라도 됩니다. (2)는 모든 점에서 (c)가 성립한다는 것이고, 한 $\delta$가 모든 점에서 통한다는 뜻이 아닙니다.

## 증명

:::idea
(a)에서 (b)로는 과녁 $B_Y(f(x), \varepsilon)$가 열린집합이라는 것을, (b)에서 (a)로는 열린 과녁이 공을 포함한다는 것을 씁니다. (b)와 (c)는 공의 정의를 풀어 쓴 것입니다.
:::

:::hint
거리위상에서 근방과 공의 관계는 [[neighborhood]]의 (4)에 있습니다.
:::

:::hint
(3)에서는 $\delta = \varepsilon$이 통합니다. 거리의 역삼각부등식을 쓰세요.
:::

:::proof
근방은 [[neighborhood]]의 것이다. 거리위상에서 근방과 공에 관하여 [[neighborhood]]의 (4)를 쓴다. 곧 (4)의 (a) 모든 $r > 0$에서 $B(x, r)$는 $x$의 근방이고, (4)의 (b) $x$의 근방 $U$는 어떤 $r > 0$에 대하여 $B(x, r)$를 포함한다. 상과 역상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 것이다.

**(1).** (a)에서 (b). $\varepsilon > 0$이라 하자. [[neighborhood]]의 (4)의 (a)에 의해 $V = B_Y(f(x), \varepsilon)$는 $f(x)$의 근방이다. $f$가 $x$에서 연속이므로 [[continuity-criteria]]의 (3)의 (iii)에 의해 $f(U) \subseteq V$인 $x$의 근방 $U$가 있다. [[neighborhood]]의 (4)의 (b)에 의해 $B_X(x, \delta) \subseteq U$인 $\delta > 0$이 있고, [[preimage-and-set-operations]]의 (7)의 상의 포함에 의해 $f(B_X(x, \delta)) \subseteq f(U) \subseteq V$이다.

(b)에서 (a). $V$가 $f(x)$의 근방이라 하자. [[neighborhood]]의 (4)의 (b)에 의해 $B_Y(f(x), \varepsilon) \subseteq V$인 $\varepsilon > 0$이 있다. (b)에 의해 $f(B_X(x, \delta)) \subseteq B_Y(f(x), \varepsilon) \subseteq V$인 $\delta > 0$이 있고, [[neighborhood]]의 (4)의 (a)에 의해 $B_X(x, \delta)$는 $x$의 근방이다. [[continuity-criteria]]의 (3)의 (iii)에 의해 $f$는 $x$에서 연속이다.

(b)와 (c). $\varepsilon > 0$, $\delta > 0$을 정해 두고 $f(B_X(x, \delta)) \subseteq B_Y(f(x), \varepsilon)$와 "$d_X(x, y) < \delta$인 모든 $y \in X$에서 $d_Y(f(x), f(y)) < \varepsilon$"이 같은 말임을 보이면 된다. 앞의 것이 성립하고 $y \in X$, $d_X(x, y) < \delta$이면 [[open-ball]]의 정의에 의해 $y \in B_X(x, \delta)$이므로 $f(y) \in f(B_X(x, \delta)) \subseteq B_Y(f(x), \varepsilon)$이고, 곧 $d_Y(f(x), f(y)) < \varepsilon$이다. 뒤의 것이 성립하고 $z \in f(B_X(x, \delta))$이면 $f(y) = z$인 $y \in B_X(x, \delta)$가 있다. $d_X(x, y) < \delta$이므로 $d_Y(f(x), z) = d_Y(f(x), f(y)) < \varepsilon$이고, $z \in Y$이므로 $z \in B_Y(f(x), \varepsilon)$이다.

**(2).** [[continuity-criteria]]의 (2)에 의해 $f$가 연속인 것은 정확히 모든 $x \in X$에서 $f$가 $x$에서 연속일 때이고, (1)에 의해 이것은 모든 $x$에서 (c)가 성립할 때이다.

**(3).** $X$의 각 점 $x$에서 $d_X(x, p)$는 실수 하나이므로 [[recursion-theorem]]의 (1)에 의해 $r$은 $X$에서 $\mathbb{R}$로의 함수이다. $\mathbb{R}$의 보통 거리는 $d(s, t) = |s - t|$이다([[metric-space-examples]]의 (1)). $x \in X$이고 $\varepsilon > 0$이라 하고 $\delta = \varepsilon$으로 두자. $y \in X$이고 $d_X(x, y) < \delta$이면 [[metric-space]]의 (2)(거리의 역삼각부등식)를 $z = p$로 써서
$$
d(r(x), r(y)) = \bigl|d_X(x, p) - d_X(y, p)\bigr| \le d_X(x, y) < \varepsilon
$$
이고, [[order-properties-of-reals]]의 (1)의 (v)에 의해 $d(r(x), r(y)) < \varepsilon$이다. 곧 모든 점에서 (1)의 (c)가 성립하므로 (2)에 의해 $r$은 연속이다.
:::

## 예시와 반례

:::example[이산 거리에서 나가는 함수]
$d_X$가 $X$ 위의 이산 거리이면 모든 함수 $f : X \to Y$는 연속입니다. $x \in X$, $\varepsilon > 0$이면 $\delta = 1$로 둘 때 [[open-ball]]의 (6)에 의해 $B_X(x, 1) = \{x\}$이고, $f(\{x\}) = \{f(x)\}$이며 [[open-ball]]의 (1)에 의해 $f(x) \in B_Y(f(x), \varepsilon)$입니다. 따라서 (1)의 (b)가 모든 점에서 성립하고, (1)과 (2)에 의해 $f$는 연속입니다. 이것은 [[topology-examples]]의 (5)(이산 거리의 거리위상은 이산위상)와 [[continuous-map]]의 (3)을 합친 결론과 같습니다.
:::

:::example[최대 거리에서 첫째 성분 꺼내기]
곱집합 $\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를, $\mathbb{R}$에 보통 거리 $d$를 주고([[metric-space-examples]]의 (5)), $u((s, t)) = s$로 정한 함수 $u : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$를 생각합니다. 점 $p = (s, t)$, $q = (s', t')$에 대하여 [[absolute-value]]의 (10)에 의해
$$
d(u(p), u(q)) = |s - s'| \le \max\{|s - s'|, |t - t'|\} = d_{\max}(p, q)
$$
입니다. 따라서 $\varepsilon > 0$이면 $\delta = \varepsilon$에서 $d_{\max}(p, q) < \delta$일 때 $d(u(p), u(q)) < \varepsilon$이고([[order-properties-of-reals]]의 (1)의 (v)), (2)에 의해 $u$는 연속입니다.
:::

:::counterexample[보통 거리에서 이산 거리로 가는 항등함수]
$\mathbb{R}$의 보통 거리를 $d$, 이산 거리를 $e$라 하고 항등함수를 $(\mathbb{R}, d)$에서 $(\mathbb{R}, e)$로의 함수로 봅니다. 이 함수는 $0$에서 연속이 아닙니다. $\varepsilon = 1$로 두면, $\delta > 0$이 무엇이든 $y = \delta/2$는 [[order-properties-of-reals]]의 (8)에 의해 $0 < y < \delta$이므로 $d(0, y) = |0 - y| = y < \delta$이고([[absolute-value]]의 (1), (3)), $y \ne 0$이므로 $e(0, y) = 1$이어서 $e(0, y) < 1$이 아닙니다. 곧 (1)의 (c)가 $x = 0$, $\varepsilon = 1$에서 깨집니다.
:::

## 확인 질문

:::check[$\mathbb{R}$에 보통 거리를 줄 때 $x$를 $|x|$로 보내는 함수 $\mathbb{R} \to \mathbb{R}$는 연속인가?]
그렇습니다. 보통 거리에서 $d(x, 0) = |x - 0| = |x|$이므로 이 함수는 (3)의 $r$을 $X = \mathbb{R}$, $p = 0$으로 둔 것이고, (3)에 의해 연속입니다.
:::

:::check[$\mathbb{R}$에 보통 거리를 주고 $f(x) = 3x$로 정할 때, $0$에서 (1)의 (c)를 만족하는 $\delta$를 $\varepsilon$으로 나타내라.]
$\delta = \varepsilon/3$이면 됩니다. $|y - 0| < \varepsilon/3$이면 [[absolute-value]]의 (4)와 [[order-properties-of-reals]]의 (4)의 (i)에 의해 $|3y - 0| = 3|y| < 3 \cdot (\varepsilon/3) = \varepsilon$입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < 3$이고 (6)의 (i)에 의해 $0 < 3^{-1}$이므로, 양수끼리의 곱([[real-order-axioms]]의 (W4))인 $\varepsilon/3 = \varepsilon \cdot 3^{-1}$은 양수입니다.
:::
