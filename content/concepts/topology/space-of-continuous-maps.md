---
title: 유계인 연속 사상의 공간
title_en: The Space of Bounded Continuous Maps
aliases: [연속 사상의 공간, 연속함수의 공간, 유계 연속 사상의 공간, space of continuous functions, space of bounded continuous maps]
kind: theorem
field: topology
msc: ["54C35", "54E50"]
level: undergrad
summary: 위상공간 X 에서 거리공간 Y 로의 유계인 연속 사상 전체 C_b(X, Y) 는 유계 사상의 공간에서 닫혀 있어, Y 가 완비이면 고른 거리로 완비이다. X 가 콤팩트이면 모든 연속 사상이 유계이므로, 특히 닫힌구간 위의 연속 실함수 전체는 완비 거리공간이다. 값이 닫힌집합에 드는 사상 전체와 닫힌 공도 닫혀 있고 완비이다.
requires: [prime-number, order-properties-of-reals, sequence, basic-limits, sequence-in-a-space, convergence-in-metric-spaces, closed-set-and-limits, interval, absolute-value, metric-space, metric-space-examples, open-ball, open-ball-is-open, open-set-in-metric-space, topological-space, topology-examples, closed-set, interior-and-closure, closure-in-a-metric-space, continuous-map, continuity-agrees-with-analysis, metric-subspace-topology, compact-space, continuous-image-of-compact, closed-interval-is-compact, compact-metric-closed-and-bounded, complete-metric-space, closed-subset-of-complete-space, lipschitz-map, uniform-limit-of-continuous-maps, bounded-maps-and-uniform-metric, completeness-of-bounded-maps]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.1소절 Cauchy sequences and completeness: Proposition 7.4.5 와 그 앞 문단 (p.280); 7.4.3소절 연습문제 7.4.7 (p.286); 7.5.6소절 연습문제 7.5.11 (p.294); 7.6.2소절 Theorem 7.6.3 의 증명 (p.298); 7.6.3소절 연습문제 7.6.1 (p.299); 7.1절 Example 7.1.8 (p.259–260); 7.4.1절 Proposition 7.4.6 (p.280); 7.4.2절 Proposition 7.4.9 (p.280); 7.5.2절 Lemma 7.5.5 (p.289), Theorem 7.5.6 (p.290); 7.4.3절 연습문제 7.4.8 (p.286); 7.2.1절 Proposition 7.2.9 (p.266); 6.3.2절 Theorem 6.3.2 의 증명 (p.249)"
    checked: original
    note: "출처 Proposition 7.4.5(p.280)는 [a, b] 위의 연속 실함수 전체 C([a, b], ℝ) 가 고른 노름의 거리로 완비 거리공간이라는 것이고, 앞 문단은 이것이 6.2절의 연속에 관한 결과를 '정의를 풀어' 얻는 것이라며 증명을 연습문제 7.4.7(p.286)로 돌린다. 이 항목의 (3)의 끝 문장이 그 명제이다. 이 항목은 정의역을 위상공간 X, 공역을 거리공간 Y 로 넓혀 유계인 연속 사상의 공간 C_b(X, Y) 를 두고, (1) 그것이 유계 사상의 공간에서 닫혀 있다는 것과 (2) 완비 공간의 닫힌 부분집합은 완비라는 것(출처 Proposition 7.4.6, p.280, 증명은 연습문제 7.4.16)으로 증명한다. 닫혀 있음은 폐포의 점마다 수열을 잡지 않고, 폐포의 점 하나에 가까운 연속 사상 하나로 하는 판정(uniform-limit-of-continuous-maps 의 (7))으로 보인다. 출처 Example 7.1.8(p.259–260)은 C([a, b], ℝ) 의 거리가 유한한 까닭을 닫힌구간 위의 연속함수가 유계라는 것으로 든다. (3)은 그것을 콤팩트 정의역으로 일반화한 것이고(거리공간 사이에서는 출처 7.5.2절 Lemma 7.5.5(p.289: 연속 사상은 콤팩트 집합을 콤팩트 집합으로 보낸다)와 Proposition 7.4.9(p.280: 콤팩트 집합은 닫혀 있고 유계)를 합친 것과 같은 결론이고, 값이 실수이면 Theorem 7.5.6(p.290)의 'f 는 유계'이다), 연습문제 7.5.11(p.294)이 콤팩트 거리공간 X 위의 C(X, ℝ) 에 같은 거리를 주는 것과 같은 설정이다. (4)는 연습문제 7.6.1(p.299: 닫힌 유계 구간 J 에 대해 값이 J 에 드는 C([−h, h], ℝ) 의 원소 전체는 닫혀 있다. 힌트는 'J 는 닫혀 있다')과 같은 결론을 일반의 닫힌집합 F 에서 진술한 것이고, 출처는 Theorem 7.6.3 의 증명(p.298)에서 이 집합이 닫혀 있고 따라서 완비라는 것을 쓴다. (5)의 닫힌 공 C(κ_{y₀}, α) 는 출처 Theorem 6.3.2 의 증명(p.249)이 피카르 반복의 고른 극한도 값이 [y₀ − α, y₀ + α] 에 든다고 '(why?)'로 남기는 집합이고, 출처 연습문제 7.4.8(p.286)은 C([0, 1], ℝ) 의 닫힌 공 C(0, 1) 이 닫혀 있고 유계라고 적는다. 닫힌 공이 닫혀 있다는 것은 출처 Proposition 7.2.9(p.266)이다. 반례 '값이 닫히지 않은 집합에 드는 사상 전체가 닫혀 있지 않은 예'의 상수 사상 n⁻¹ 은 출처 p.280 의 (0, 1] 과 1/n 의 예(Proposition 7.4.6 앞 문단)와 같은 수열을 상수 사상으로 옮긴 것이다. 기호 C_b(X, Y) 는 이 사이트가 정했다(출처의 C([a, b], ℝ) 는 닫힌 공 C(x, r) 과 겹치므로 쓰지 않는다)."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 이 사이트에 없는 방향을 사실처럼 말한 직관 1건과 단원 글 1건, 틀리거나 빠진 근거 번호 4곳, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 거리공간과 부분공간 거리, 실수의 보통 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리공간에는 늘 거리위상([[topology-examples]])을 준다. 닫힌 공 $C(g, r)$는 [[open-ball]]의 것이고, 완비는 [[complete-metric-space]]의 것이다. 콤팩트 공간은 [[compact-space]]의 것이다. 유계 사상, $\operatorname{Bd}(X, Y)$, 고른 거리 $d_\infty$, 상수 사상 $\kappa_y$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $(Y, d_Y)$는 거리공간이다.

**유계인 연속 사상의 공간.** $\operatorname{Bd}(X, Y)$의 원소 가운데 $(X, \mathcal{T})$에서 $Y$로의 연속 사상인 것 전체의 집합을 $C_b(X, Y)$로 쓴다. 곧 $C_b(X, Y)$의 원소는 정확히 $X$에서 $Y$로의 유계인 연속 사상이다. $C_b(X, Y)$에는 $d_\infty$의 부분공간 거리를 주고, 그것도 $d_\infty$로 쓴다. 곧 $f$, $g \in C_b(X, Y)$의 거리는 $d_\infty(f, g)$이다.

다음이 성립한다.

1. (닫혀 있다) $C_b(X, Y)$는 $(\operatorname{Bd}(X, Y), d_\infty)$에서 닫힌집합이다.
2. (완비) $(Y, d_Y)$가 완비이면 $(C_b(X, Y), d_\infty)$는 완비이다. 특히 $(C_b(X, \mathbb{R}), d_\infty)$는 완비이다.
3. (콤팩트 정의역) $(X, \mathcal{T})$가 콤팩트이면 $X$에서 $Y$로의 모든 연속 사상은 유계이다. 따라서 이때 $C_b(X, Y)$는 $X$에서 $Y$로의 연속 사상 전체의 집합이다. 특히 $a < b$인 실수 $a$, $b$에 대하여 닫힌구간 $[a, b]$에 보통 거리의 부분공간 거리를 주면, $C_b([a, b], \mathbb{R})$의 원소는 정확히 해석학 입문의 뜻의 연속함수 $f : [a, b] \to \mathbb{R}$이고, 그 거리는 $d_\infty(f, g) = \sup\{|f(x) - g(x)| : x \in [a, b]\}$이며, $(C_b([a, b], \mathbb{R}), d_\infty)$는 완비 거리공간이다.
4. (값이 닫힌집합에 드는 사상) $F$가 $(Y, d_Y)$에서 닫힌집합이라 하자. $\operatorname{Bd}(X, Y)$의 원소 $f$ 가운데 $X$의 모든 점 $x$에서 $f(x) \in F$인 것 전체의 집합은 $(\operatorname{Bd}(X, Y), d_\infty)$에서 닫힌집합이다. $C_b(X, Y)$의 원소 $f$ 가운데 $X$의 모든 점 $x$에서 $f(x) \in F$인 것 전체의 집합은 $(C_b(X, Y), d_\infty)$에서도 $(\operatorname{Bd}(X, Y), d_\infty)$에서도 닫힌집합이고, $(Y, d_Y)$가 완비이면 $d_\infty$로 완비이다.
5. (닫힌 공) $g \in C_b(X, Y)$이고 $r$가 양의 실수라 하자. $(C_b(X, Y), d_\infty)$에서 중심이 $g$이고 반지름이 $r$인 닫힌 공 $C(g, r)$의 원소는 정확히 $C_b(X, Y)$의 원소 $f$ 가운데 $X$의 모든 점 $x$에서 $d_Y(f(x), g(x)) \le r$인 것이다. $g \in C(g, r)$이고, $(Y, d_Y)$가 완비이면 $C(g, r)$는 $d_\infty$로 완비이다. 특히 $a < b$이고 $y_0$이 실수이며 $\alpha$가 양의 실수이면, 해석학 입문의 뜻의 연속함수 $f : [a, b] \to \mathbb{R}$ 가운데 모든 $x \in [a, b]$에서 $|f(x) - y_0| \le \alpha$인 것 전체의 집합은 $(C_b([a, b], \mathbb{R}), d_\infty)$에서 중심이 상수 사상 $\kappa_{y_0}$이고 반지름이 $\alpha$인 닫힌 공이며, $\kappa_{y_0}$을 원소로 갖고, $d_\infty$로 완비이다.
6. (예)
   - (i) $\mathcal{T}$가 이산위상이면 $C_b(X, Y) = \operatorname{Bd}(X, Y)$이다.
   - (ii) $X = \emptyset$이면 $C_b(X, Y) = \{\emptyset\}$이다.
   - (iii) (콤팩트가 아닌 정의역) $\mathbb{R}$의 항등사상 $i_{\mathbb{R}}$은 보통 위상에서 연속이지만 유계가 아니므로 $C_b(\mathbb{R}, \mathbb{R})$의 원소가 아니다. 따라서 (3)에서 $X$가 콤팩트라는 가정을 빼면 결론이 성립하지 않을 수 있다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, closed sets are as in the entry on closed sets, and continuity is as in the entry on continuous maps between topological spaces. Metric spaces, the subspace metric and the standard metric on the reals are as in the entries on metric spaces and examples of metric spaces, and a metric space always carries its metric topology. Closed balls $C(g, r)$ are as in the entry on open balls, and completeness is as in the entry on complete metric spaces. Compact spaces are as in the entry on compact spaces. Bounded maps, $\operatorname{Bd}(X, Y)$, the uniform metric $d_\infty$ and the constant maps $\kappa_y$ are as in the entry on the space of bounded maps and the uniform metric. Below, $(X, \mathcal{T})$ is a topological space and $(Y, d_Y)$ is a metric space.

**The space of bounded continuous maps.** The set of those elements of $\operatorname{Bd}(X, Y)$ that are continuous maps from $(X, \mathcal{T})$ to $Y$ is written $C_b(X, Y)$. Thus the elements of $C_b(X, Y)$ are exactly the bounded continuous maps from $X$ to $Y$. We give $C_b(X, Y)$ the subspace metric of $d_\infty$ and still write it $d_\infty$; that is, the distance between $f, g \in C_b(X, Y)$ is $d_\infty(f, g)$.

The following hold.

1. (Closed) $C_b(X, Y)$ is a closed set in $(\operatorname{Bd}(X, Y), d_\infty)$.
2. (Complete) If $(Y, d_Y)$ is complete, then $(C_b(X, Y), d_\infty)$ is complete. In particular, $(C_b(X, \mathbb{R}), d_\infty)$ is complete.
3. (Compact domain) If $(X, \mathcal{T})$ is compact, then every continuous map from $X$ to $Y$ is bounded. Hence in that case $C_b(X, Y)$ is the set of all continuous maps from $X$ to $Y$. In particular, for real numbers $a < b$, if the closed interval $[a, b]$ carries the subspace metric of the standard metric, then the elements of $C_b([a, b], \mathbb{R})$ are exactly the continuous functions $f : [a, b] \to \mathbb{R}$ in the sense of introductory analysis, the metric is $d_\infty(f, g) = \sup\{|f(x) - g(x)| : x \in [a, b]\}$, and $(C_b([a, b], \mathbb{R}), d_\infty)$ is a complete metric space.
4. (Maps with values in a closed set) Let $F$ be a closed set in $(Y, d_Y)$. The set of elements $f$ of $\operatorname{Bd}(X, Y)$ with $f(x) \in F$ for every point $x$ of $X$ is a closed set in $(\operatorname{Bd}(X, Y), d_\infty)$. The set of elements $f$ of $C_b(X, Y)$ with $f(x) \in F$ for every point $x$ of $X$ is a closed set both in $(C_b(X, Y), d_\infty)$ and in $(\operatorname{Bd}(X, Y), d_\infty)$, and it is complete for $d_\infty$ if $(Y, d_Y)$ is complete.
5. (Closed balls) Let $g \in C_b(X, Y)$ and let $r$ be a positive real number. The elements of the closed ball $C(g, r)$ in $(C_b(X, Y), d_\infty)$ with center $g$ and radius $r$ are exactly the elements $f$ of $C_b(X, Y)$ with $d_Y(f(x), g(x)) \le r$ for every point $x$ of $X$. We have $g \in C(g, r)$, and if $(Y, d_Y)$ is complete then $C(g, r)$ is complete for $d_\infty$. In particular, if $a < b$, $y_0$ is a real number and $\alpha$ is a positive real number, then the set of continuous functions $f : [a, b] \to \mathbb{R}$ in the sense of introductory analysis with $|f(x) - y_0| \le \alpha$ for every $x \in [a, b]$ is the closed ball in $(C_b([a, b], \mathbb{R}), d_\infty)$ with center the constant map $\kappa_{y_0}$ and radius $\alpha$; it contains $\kappa_{y_0}$ and is complete for $d_\infty$.
6. (Examples)
   - (i) If $\mathcal{T}$ is the discrete topology, then $C_b(X, Y) = \operatorname{Bd}(X, Y)$.
   - (ii) If $X = \emptyset$, then $C_b(X, Y) = \{\emptyset\}$.
   - (iii) (A noncompact domain) The identity map $i_{\mathbb{R}}$ of $\mathbb{R}$ is continuous for the standard topology but not bounded, so it is not an element of $C_b(\mathbb{R}, \mathbb{R})$. Hence the conclusion of (3) can fail if the assumption that $X$ is compact is dropped.
:::

## 직관

4단원의 [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한은 연속이다]]를 유계 사상의 공간에서 읽으면, "연속인 점들로 된 수열이 $d_\infty$로 수렴하면 그 극한도 연속"이라는 말이 됩니다. 연속 사상들이 이루는 부분집합이 자기 점들의 극한을 놓치지 않는다는 것입니다. 이 항목은 그 부분집합이 닫혀 있다는 더 강한 말을 보입니다((1)). 완비 공간의 닫힌 부분집합은 완비이므로, 공역이 완비이면 유계인 연속 사상의 공간도 완비입니다((2)).

(1)의 증명은 수열을 쓰지 않습니다. "수열의 극한을 놓치지 않으면 닫혀 있다"는 방향은 위상수학 입문이 싣지 않았고, 폐포의 점에 수렴하는 수열을 만들려면 번호마다 가까운 점을 하나씩 골라야 하기 때문입니다. 대신 폐포에 든 사상 $f$에 대하여 "모든 $\varepsilon$에 $f$에서 $\varepsilon$보다 가까운 연속 사상이 있다"는 것만 쓰고, 그것으로 $f$가 연속임을 보입니다.

정의역이 콤팩트이면 연속 사상의 상은 콤팩트이고 콤팩트 집합은 유계이므로, "유계"라는 조건은 저절로 채워집니다((3)). 그래서 닫힌구간 위의 연속함수 전체는 유계라는 조건을 따로 붙이지 않아도 고른 거리를 갖는 완비 거리공간이 됩니다. 정의역이 $\mathbb{R}$이면 항등함수처럼 유계가 아닌 연속함수가 있어 이 조건이 필요합니다((6)의 (iii)).

(4)와 (5)는 이 공간 안의 닫힌 부분집합 두 가지를 모아 둔 것입니다. 값이 닫힌집합 $F$에 드는 사상들은 그 성질을 극한에서도 지키고, 닫힌 공은 "모든 점에서 $g$와 $r$ 이하로 떨어진 사상들"입니다. 둘 다 닫혀 있으므로, 공역이 완비이면 완비입니다.

## 증명

:::idea
폐포의 점 $f$마다 $\varepsilon$보다 가까운 연속 사상이 있으면 $f$는 연속이다(4단원). 완비 공간의 닫힌 부분집합은 완비이다(1단원). 콤팩트 집합의 연속 상은 콤팩트이고 유계이다(위상수학 입문).
:::

:::hint
(1)은 [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)로 폐포의 점을 공으로 읽고, [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한은 연속이다]]의 (7)을 씁니다.
:::

:::hint
(4)는 폐포에 든 사상 $f$와 점 $x$에 대하여 $f(x)$가 $Y$에서 $F$의 폐포에 든다는 것을 보입니다. (5)는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (2)의 두 성질로 닫힌 공의 조건을 점마다의 부등식으로 바꿉니다.
:::

:::proof
"고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호이고, "폐포 (n)"은 [[interior-and-closure]]의 번호이다. 거리공간 $(Z, d)$의 부분집합이 닫혀 있다는 것은 [[closed-set]]의 (6)에 의해 위상공간 $(Z, \mathcal{T}_d)$에서 닫혀 있다는 것과 같고, 폐포는 그 위상에서의 폐포이다. 그래서 거리공간의 부분집합 $A$가 닫혀 있음을 보이려면 $\overline{A} \subseteq A$를 보이면 된다. 폐포 (1)에 의해 $A \subseteq \overline{A}$이므로 이때 $\overline{A} = A$이고, 폐포 (3)에 의해 $A$는 닫힌집합이다. 이것을 (가)라 부른다. $C_b(X, Y)$의 두 원소 사이의 거리는 [[metric-space-examples]]의 (3)에 의해 $\operatorname{Bd}(X, Y)$에서의 $d_\infty$와 같다.

**(1).** $f$가 $(\operatorname{Bd}(X, Y), d_\infty)$에서 $C_b(X, Y)$의 폐포에 든다고 하자. $\varepsilon$을 양의 실수라 하면, [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)에 의해 $B(f, \varepsilon) \cap C_b(X, Y) \ne \emptyset$이므로 $d_\infty(f, g) < \varepsilon$인 $g \in C_b(X, Y)$가 있다. 고른 거리 (2)의 (i)과 거리의 대칭에 의해 $X$의 모든 점 $x$에서 $d_Y(g(x), f(x)) \le d_\infty(f, g) < \varepsilon$이고, $g$는 연속이다. $\varepsilon$은 아무 양의 실수였으므로, [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한은 연속이다]]의 (7)의 둘째 문장에 의해 $f$는 연속이다. $f \in \operatorname{Bd}(X, Y)$이므로 $f \in C_b(X, Y)$이다. 따라서 폐포는 $C_b(X, Y)$에 포함되고, (가)에 의해 $C_b(X, Y)$는 닫힌집합이다.

**(2).** [[completeness-of-bounded-maps|유계 사상의 공간은 완비이다]]의 (1)에 의해 $(\operatorname{Bd}(X, Y), d_\infty)$는 완비이고, (1)에 의해 $C_b(X, Y)$는 그 닫힌집합이므로 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 부분공간 거리로 완비이다. $\mathbb{R}$은 [[complete-metric-space]]의 (2)에 의해 완비이다.

**(3).** $f : X \to Y$가 연속이면 [[continuous-image-of-compact|콤팩트 집합의 연속 상]]의 (1)에 의해 $f(X)$는 $Y$의 콤팩트 부분집합이고, [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (3)에 의해 $(Y, d_Y)$에서 유계이다. 곧 $f$는 유계이고 $f \in C_b(X, Y)$이다.

$a < b$이면 [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)에 의해 보통 위상의 부분공간 위상을 준 $[a, b]$는 콤팩트 공간이고, [[metric-subspace-topology]]의 (2)에 의해 이 위상은 보통 거리의 부분공간 거리의 거리위상과 같다. 그래서 앞 문단에 의해 $C_b([a, b], \mathbb{R})$은 연속 사상 $[a, b] \to \mathbb{R}$ 전체이고, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 그 원소는 정확히 해석학 입문의 뜻의 연속함수이다. 거리의 식은 고른 거리 (4)의 (iii)이고, 완비는 (2)이다.

**(4).** $V$를 $\operatorname{Bd}(X, Y)$와 $C_b(X, Y)$ 가운데 하나라 하고, $A_V$를 $V$의 원소 $f$ 가운데 모든 $x \in X$에서 $f(x) \in F$인 것 전체의 집합이라 하자. $A_V$가 $(V, d_\infty)$에서 닫혀 있음을 보인다. $f$가 $(V, d_\infty)$에서 $A_V$의 폐포에 든다고 하자. 폐포는 $V$의 부분집합이므로 $f \in V$이다. $x \in X$를 잡는다. $r$가 양의 실수이면 [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)을 $(V, d_\infty)$에 써서 $d_\infty(f, h) < r$인 $h \in A_V$가 있고, 고른 거리 (2)의 (i)에 의해 $d_Y(f(x), h(x)) < r$이며 $h(x) \in F$이다. 곧 $Y$의 열린 공 $B(f(x), r)$는 $F$와 만난다. $r$는 아무 양의 실수였으므로 [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)을 $(Y, d_Y)$에 써서 $f(x)$는 $Y$에서 $F$의 폐포에 들고, $F$는 닫혀 있으므로 폐포 (3)에 의해 그 폐포는 $F$이다. 따라서 $f \in A_V$이고, (가)에 의해 $A_V$는 $(V, d_\infty)$에서 닫혀 있다.

$A = A_{C_b(X, Y)}$가 $(\operatorname{Bd}(X, Y), d_\infty)$에서도 닫혀 있음을 보인다. $A$는 $A_{\operatorname{Bd}(X, Y)}$에도 $C_b(X, Y)$에도 포함되므로, $\operatorname{Bd}(X, Y)$에서의 폐포를 취하면 폐포 (4)에 의해 $\overline{A}$는 $\overline{A_{\operatorname{Bd}(X, Y)}}$에도 $\overline{C_b(X, Y)}$에도 포함된다. 앞 문단과 (1)에 의해 이 두 집합은 닫혀 있으므로 폐포 (3)에 의해 각각 $A_{\operatorname{Bd}(X, Y)}$와 $C_b(X, Y)$이다. 그래서 $\overline{A}$의 원소는 $C_b(X, Y)$의 원소이고 모든 점에서 값이 $F$에 들므로 $A$의 원소이다. (가)에 의해 $A$는 닫혀 있다.

$(Y, d_Y)$가 완비이면 (2)에 의해 $(C_b(X, Y), d_\infty)$가 완비이고, $A$는 그 닫힌집합이므로 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 완비이다.

**(5).** [[open-ball]]의 정의와 [[metric-space-examples]]의 (3)에 의해 $C(g, r)$의 원소는 정확히 $d_\infty(f, g) \le r$인 $f \in C_b(X, Y)$이다. $d_\infty(f, g) \le r$이면 고른 거리 (2)의 (i)에 의해 모든 $x$에서 $d_Y(f(x), g(x)) \le d_\infty(f, g) \le r$이다. 거꾸로 모든 $x$에서 $d_Y(f(x), g(x)) \le r$이면 $0 < r$이므로 고른 거리 (2)의 (ii)에 의해 $d_\infty(f, g) \le r$이다. $d_\infty(g, g) = 0 \le r$이므로 $g \in C(g, r)$이다. $(Y, d_Y)$가 완비이면 (2)에 의해 $(C_b(X, Y), d_\infty)$가 완비이고, [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (3)의 (ii)에 의해 $C(g, r)$는 완비이다.

특히 $X = [a, b]$, $Y = \mathbb{R}$라 하자. 상수 사상 $\kappa_{y_0}$은 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이고 고른 거리 (9)의 (i)에 의해 유계이므로 $C_b([a, b], \mathbb{R})$의 원소이다. [[metric-space-examples]]의 (1)에 의해 $d_Y(f(x), \kappa_{y_0}(x)) = |f(x) - y_0|$이므로, 앞 문단과 (3)에 의해 $C(\kappa_{y_0}, \alpha)$의 원소는 정확히 해석학 입문의 뜻의 연속함수 $f : [a, b] \to \mathbb{R}$ 가운데 모든 $x$에서 $|f(x) - y_0| \le \alpha$인 것이다. $\mathbb{R}$이 완비이므로 이 공은 완비이다.

**(6).** (i) [[continuous-map|위상공간 사이의 연속함수]]의 (3)에 의해 이산위상에서 나가는 모든 사상은 연속이다. (ii) 고른 거리 (10)의 (i)에 의해 $\operatorname{Bd}(\emptyset, Y) = \{\emptyset\}$이고, [[continuous-map|위상공간 사이의 연속함수]]의 (7)에 의해 $\emptyset$은 연속이다. (iii) [[lipschitz-map]]의 (6)의 (i)과 (3)에 의해 항등사상은 연속이고, 고른 거리 (10)의 (v)에 의해 유계가 아니다.
:::

## 예시와 반례

:::example[유계인 실수열의 공간은 이 공간의 한 예]
$\mathbb{N}$에 이산위상을 주면 (6)의 (i)에 의해 $C_b(\mathbb{N}, \mathbb{R}) = \operatorname{Bd}(\mathbb{N}, \mathbb{R})$이고, [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (4)의 (i)에 의해 그 원소는 모든 $n$에서 $|x_n| \le B$인 실수 $B$가 있는 실수열, 곧 [[sequence]]의 뜻으로 유계인 실수열입니다. (2)에 의해 이 공간은 $d_\infty$로 완비입니다. 이산위상에서는 모든 사상이 연속이므로, 여기서 "연속"이라는 조건은 아무것도 걸러 내지 않습니다.
:::

:::counterexample[값이 닫히지 않은 집합에 드는 사상 전체가 닫혀 있지 않은 예]
$X = [0, 1]$, $Y = \mathbb{R}$이고 $F = \{y \in \mathbb{R} : 0 < y \le 1\}$이라 합시다. 각 자연수 $n$에서 상수 사상 $\kappa_{n^{-1}}$은 [[continuous-map|위상공간 사이의 연속함수]]의 (2)와 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (9)의 (i)에 의해 $C_b([0, 1], \mathbb{R})$의 원소이고, (Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이므로 [[order-properties-of-reals]]의 (10)과 (6)의 (ii)에 의해 $0 < n^{-1} \le 1$, 곧 값이 모두 $F$에 듭니다. [[sequence-in-a-space|위상공간의 수열과 수렴]]의 값으로 정한 수열에 의해 $n$번째 항이 $\kappa_{n^{-1}}$인 수열이 있습니다. 같은 항목의 (9)의 (ii)에 의해 $d_\infty(\kappa_{n^{-1}}, \kappa_0) = |n^{-1} - 0| = n^{-1}$이므로, [[convergence-in-metric-spaces]]의 (2)와 [[basic-limits]]의 (2)에 의해 $(\kappa_{n^{-1}})$은 $\kappa_0$으로 수렴합니다. 그런데 $\kappa_0$의 값 $0$은 $F$에 들지 않습니다. 모든 항이 값이 $F$에 드는 사상 전체의 집합 $A$에 들고 극한은 $A$에 들지 않으므로, [[closed-set-and-limits|닫힌집합과 수열의 극한]]의 (3)에 의해 $A$는 $C_b([0, 1], \mathbb{R})$에서 닫혀 있지 않습니다. (4)에 의해, $F$가 닫혀 있었다면 $A$는 $C_b([0, 1], \mathbb{R})$에서 닫혀 있어야 하므로 $F$는 $\mathbb{R}$에서 닫혀 있지 않습니다. 그래서 (4)에서 $F$가 닫혀 있다는 가정은 뺄 수 없습니다.
:::

## 확인 질문

:::check[$X$가 한 점 $\{p\}$이고 $Y = \mathbb{R}$이면 $C_b(X, \mathbb{R})$은 무엇과 같은 모양의 거리공간인가?]
$\mathbb{R}$과 같은 모양입니다. 위상은 $\emptyset$과 $X$를 원소로 갖는 $\mathscr{P}(X)$의 부분집합이고 $\mathscr{P}(\{p\}) = \{\emptyset, \{p\}\}$이므로, $X$ 위의 위상은 이산위상 $\mathscr{P}(X)$ 하나뿐입니다. 그래서 (6)의 (i)에 의해 $C_b(X, \mathbb{R}) = \operatorname{Bd}(X, \mathbb{R})$입니다. 고른 거리 (10)의 (iii)에 의해 $\operatorname{ev}_p$는 이 공간에서 $\mathbb{R}$로 가는 거리를 보존하는 전단사입니다.
:::

:::check[(5)의 닫힌 공에서 반지름을 $0$으로 두면 어떻게 되는가?]
[[open-ball]]의 닫힌 공은 반지름이 양수일 때만 정의되므로 $C(g, 0)$이라는 기호는 쓰지 않습니다. 같은 조건으로 집합을 만들면 $\{f \in C_b(X, Y) : \text{모든 } x \text{에서 } d_Y(f(x), g(x)) \le 0\}$이고, 거리의 조건 (i), (ii)에 의해 모든 $x$에서 $f(x) = g(x)$, 곧 $f = g$이므로 이 집합은 $\{g\}$입니다. 원소가 하나인 거리공간이므로 [[complete-metric-space]]의 (3)의 (ii)에 의해 완비입니다.
:::
