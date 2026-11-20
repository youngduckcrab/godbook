---
title: 콤팩트 공간 위의 연속 실함수의 최댓값과 최솟값
title_en: Maxima and Minima of Continuous Real Functions on Compact Spaces
aliases: [콤팩트 공간의 최대·최소 정리, extreme value theorem for compact spaces, 최댓값과 최솟값의 존재, 연속 실함수의 최댓값]
kind: theorem
field: topology
msc: ["54D30", "26A15"]
level: undergrad
summary: 공집합이 아닌 콤팩트 공간에서 실수로 가는 연속함수는 최댓값과 최솟값을 갖는다. 이것으로 해석학 입문의 최대·최소 정리를 다시 얻고, 공간이 비어 있거나 콤팩트가 아니면 결론이 깨질 수 있음을 보인다.
requires: [set, subset, function, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, interval, upper-bound-and-supremum, extreme-value-theorem, continuous-function, absolute-value, metric-space, metric-space-examples, open-ball, topology-examples, standard-topology-on-reals, subspace-and-continuity, metric-subspace-topology, continuous-map, continuity-in-metric-spaces, continuity-agrees-with-analysis, max-metric-and-product-topology, compact-space, continuous-image-of-compact, closed-interval-is-compact, heine-borel-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness in ℝⁿ 절의 Corollary sup-inf-compact-continuous 와 증명, content/compactness.tex:205–211"
    checked: original
    note: "(2)는 출처의 Corollary sup-inf-compact-continuous(205–208, 'X 가 콤팩트이고 f : X → ℝ 가 연속이면 f(x₁) = sup f(X), f(x₂) = inf f(X) 인 점 x₁, x₂ 가 있다')와 같은 결론에 X ≠ ∅ 을 가정으로 넣은 것이다. 출처의 진술에는 X ≠ ∅ 이라는 가정이 적혀 있지 않고, (4)의 (i)이 X = ∅ 인 경우를 다룬다. 출처의 증명(209–211)은 f(X) 가 콤팩트이고 하이네–보렐 정리로 닫히고 유계이므로 'sup f(X) < ∞ 이고 sup f(X) ∈ f(X)' 라고 적는다. 이 항목은 heine-borel-on-reals 의 (2)(공집합이 아닌 콤팩트 집합은 최댓값을 갖는다)를 인용한다."
  - ref: lebl-basic-analysis
    loc: "7.5.2절 첫 문단, 최댓값·최솟값의 정의와 Theorem 7.5.6, 증명 (p.289–290); 연습문제 7.5.10 (p.294); 3.3.1절 Theorem 3.3.2 (p.130), Example 3.3.4, 3.3.5 (p.132); 3.3.3절 연습문제 3.3.11 (p.137)"
    checked: original
    note: "출처 Theorem 7.5.6(p.290)은 공집합이 아닌 콤팩트 거리공간 X 와 연속함수 f : X → ℝ 에 대해 f 가 유계이고 최솟값과 최댓값을 갖는다고 진술한다. 바로 앞(p.289)에서 'f 가 c 에서 최댓값(absolute maximum)을 갖는다'를 모든 x ∈ X 에서 f(x) ≤ f(c) 로 정의한다. 이 항목의 (1)의 정의와 같은 꼴이고, (2)는 출처의 정리를 위상공간으로 넓힌 것이다. 출처의 증명은 f(X) 가 닫히고 유계라는 것과 상한·하한이 수열로 다가갈 수 있다는 것을 쓰고, 이 항목은 수열을 쓰지 않는다. (4)의 (ii)와 반례의 함수 f(x) = x (x ∈ (0, 1)) 는 출처 7.5.2절 첫 문단(p.289)이 연속함수가 닫힌집합을 닫힌집합으로 보내지 않는 예로 드는 함수와 같은 함수이다. (3)의 진술은 Theorem 3.3.2(p.130, 최대·최소 정리)와 같다. (4)의 (ii)의 둘째 문장의 f(x) = x (x ∈ ℝ) 는 Example 3.3.4(p.132: ℝ 위의 f(x) = x 는 최솟값도 최댓값도 갖지 않는다)와 같은 함수이고, 첫 문장은 Example 3.3.5(p.132: (0, 1) 위의 1/x 는 연속이지만 최솟값도 최댓값도 갖지 않는다)와 같은 정의역에서 같은 결론을 보인다. 반례 '유계이지만 최댓값을 갖지 않는 연속함수'는 연습문제 3.3.11(p.137: ℝ 위에서 최솟값도 최댓값도 갖지 않는 유계 연속함수를 찾으라)과 같은 결론을 묻는다. 예시 '콤팩트 집합에서 한 점까지 가장 가까운 점'은 출처 연습문제 7.5.10 a)(f(x) = d(x, p) 의 연속)와 c)(두 콤팩트 집합 사이의 거리가 어떤 두 점에서 이루어진다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 곳 3군데, 근거 없는 연속 주장, 단원 글의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, $\mathbb{R}$에는 보통 위상([[standard-topology-on-reals]]의 (5))을 준다. 콤팩트 공간은 [[compact-space]]의 것이고, 집합의 상한, 하한, 최댓값 $\max E$, 최솟값 $\min E$, 유계는 [[upper-bound-and-supremum]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $f : X \to \mathbb{R}$는 함수이다.

1. (최댓값과 최솟값) $c \in X$라 하자. $f$가 $c$에서 **최댓값**을 갖는다는 것은 정확히 모든 $x \in X$에서 $f(x) \le f(c)$일 때이고, **최솟값**을 갖는다는 것은 정확히 모든 $x \in X$에서 $f(c) \le f(x)$일 때이다. $X$가 $\mathbb{R}$의 부분집합이면 이것은 해석학 입문의 [[extreme-value-theorem|최대·최소 정리]]의 정의와 글자 그대로 같다. 또 $f$가 $c$에서 최댓값을 갖는 것은 정확히 $f(c)$가 집합 $f(X)$의 최댓값일 때이고, 최솟값도 같다.
2. (콤팩트 공간의 최대·최소) $(X, \mathcal{T})$가 콤팩트이고 $X \ne \emptyset$이며 $f$가 연속이면, $f$가 최댓값을 갖는 점 $c \in X$와 최솟값을 갖는 점 $c' \in X$가 있다. 곧 모든 $x \in X$에서 $f(c') \le f(x) \le f(c)$이고, $f(c) = \max f(X) = \sup f(X)$, $f(c') = \min f(X) = \inf f(X)$이다. 특히 $f(X)$는 유계이다.
3. (해석학 입문의 최대·최소 정리) $a < b$이고 $f : [a, b] \to \mathbb{R}$가 해석학 입문의 뜻의 연속함수이면, $f$가 최댓값을 갖는 점과 최솟값을 갖는 점이 $[a, b]$에 있다. 이것은 [[extreme-value-theorem|최대·최소 정리]]의 (2)와 같은 진술이다.
4. (가정을 뺀 경우)
   - (i) $X = \emptyset$이면 (2)의 결론의 점 $c$가 없다.
   - (ii) $X = (0, 1)$이고 $f(x) = x$이면 $f$는 연속이지만 최댓값도 최솟값도 갖지 않는다. $X = \mathbb{R}$이고 $f(x) = x$이면 $f(X)$는 유계가 아니다.
:::

:::english
Topological spaces and continuity are as in the entry on continuous maps between topological spaces, and $\mathbb{R}$ carries the standard topology ((5) of the entry on the standard topology on the reals). Compact spaces are as in the entry on open covers and compact spaces, and suprema, infima, maxima $\max E$, minima $\min E$ and boundedness of sets are as in the entry on upper bounds and suprema. Below, $(X, \mathcal{T})$ is a topological space and $f : X \to \mathbb{R}$ is a function.

1. (Maxima and minima) Let $c \in X$. We say $f$ has an **absolute maximum** at $c$ exactly when $f(x) \le f(c)$ for every $x \in X$, and an **absolute minimum** at $c$ exactly when $f(c) \le f(x)$ for every $x \in X$. If $X$ is a subset of $\mathbb{R}$, this is word for word the definition in the entry on the extreme value theorem of the analysis course. Moreover, $f$ has an absolute maximum at $c$ exactly when $f(c)$ is the maximum of the set $f(X)$, and likewise for minima.
2. (Maxima and minima on compact spaces) If $(X, \mathcal{T})$ is compact, $X \ne \emptyset$ and $f$ is continuous, then there are a point $c \in X$ at which $f$ has an absolute maximum and a point $c' \in X$ at which $f$ has an absolute minimum. That is, $f(c') \le f(x) \le f(c)$ for every $x \in X$, and $f(c) = \max f(X) = \sup f(X)$, $f(c') = \min f(X) = \inf f(X)$. In particular $f(X)$ is bounded.
3. (The extreme value theorem of the analysis course) If $a < b$ and $f : [a, b] \to \mathbb{R}$ is a continuous function in the sense of the analysis course, then there are a point of $[a, b]$ at which $f$ has an absolute maximum and a point at which $f$ has an absolute minimum. This is the same statement as (2) of the entry on the extreme value theorem.
4. (Dropping a hypothesis)
   - (i) If $X = \emptyset$, there is no point $c$ as in the conclusion of (2).
   - (ii) If $X = (0, 1)$ and $f(x) = x$, then $f$ is continuous but has neither an absolute maximum nor an absolute minimum. If $X = \mathbb{R}$ and $f(x) = x$, then $f(X)$ is not bounded.
:::

## 직관

해석학 입문의 [[extreme-value-theorem|최대·최소 정리]]는 닫힌구간 위의 연속함수가 최댓값과 최솟값을 갖는다는 것이었습니다. 이 항목은 닫힌구간이 하던 일을 콤팩트성 하나가 한다는 것을 보입니다. 연속함수의 상은 콤팩트이고, 실수의 콤팩트 집합은 닫혀 있고 유계이므로 상한과 하한을 제 원소로 갖습니다. 그 상한이 어떤 점의 함숫값이므로 그 점에서 최댓값을 갖습니다.

해석학 입문은 이 정리를 상한 논법으로 함수에 대해 직접 증명했습니다. 이 항목의 증명은 다른 길입니다. 상한 논법은 [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]에서 한 번 쓰이고, 그 뒤로는 연속 상과 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]가 일을 나눠 맡습니다. 그 대신 정의역이 닫힌구간이 아니어도 콤팩트이기만 하면 됩니다.

비유하자면 콤팩트 공간은 "유한 개의 창문으로 전부 내다볼 수 있는 방"이고, 연속 실함수는 방의 점마다 높이를 매기는 일입니다. 방이 콤팩트하면 높이들이 이루는 집합도 콤팩트해서 가장 높은 곳이 실제로 방 안에 있습니다. 방이 비어 있으면 가장 높은 곳도 없다는 것이 (4)의 (i)이고, $(0, 1)$처럼 문턱이 빠진 방에서는 높이가 $1$에 한없이 다가가도 $1$에 닿는 점이 없다는 것이 (4)의 (ii)입니다.

## 증명

:::idea
$f(X)$는 공집합이 아닌 실수의 콤팩트 집합이므로 최댓값과 최솟값을 갖고, 그 값을 내는 점이 최댓값·최솟값을 갖는 점이다.
:::

:::hint
[[continuous-image-of-compact]]의 (1)과 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (2)를 차례로 씁니다.
:::

:::proof
"상한 (3)"처럼 쓴 것은 [[upper-bound-and-supremum]]의 번호, "순서 성질 (8)"은 [[order-properties-of-reals]]의 번호이다.

**(1).** 앞 두 문장은 정의이다. $X = S \subseteq \mathbb{R}$이면 [[extreme-value-theorem|최대·최소 정리]]의 정의는 "모든 $x \in S$에서 $f(x) \le f(c)$"이므로 같다. 집합 $f(X)$의 최댓값은 $f(X)$에 속하는 $f(X)$의 상계이다. $f$가 $c$에서 최댓값을 가지면 $f(c) \in f(X)$이고, $f(X)$의 원소는 어떤 $x$의 $f(x)$이므로([[image-and-preimage|상]]의 정의) $f(c)$ 이하이다. 곧 $f(c)$는 $f(X)$의 최댓값이다. 거꾸로 $f(c)$가 $f(X)$의 최댓값이면 모든 $x$에서 $f(x) \in f(X)$이므로 $f(x) \le f(c)$이다. 최솟값도 부등호를 바꾸어 같다.

**(2).** $f$가 연속이고 $X$가 콤팩트이므로 [[continuous-image-of-compact]]의 (1)에 의해 $f(X)$는 $\mathbb{R}$의 콤팩트 부분집합이다. $X \ne \emptyset$이므로 $X$의 점 $x_0$에 대하여 $f(x_0) \in f(X)$이고 $f(X) \ne \emptyset$이다. [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (2)에 의해 $f(X)$는 최댓값 $M = \sup f(X)$와 최솟값 $m = \inf f(X)$를 갖는다. $M \in f(X)$이므로 $f(c) = M$인 $c \in X$가 있고, (1)에 의해 $f$는 $c$에서 최댓값을 갖는다. 같은 방식으로 $f(c') = m$인 $c' \in X$가 있고 $f$는 $c'$에서 최솟값을 갖는다. $M$은 $f(X)$의 상계이고 $m$은 하계이므로 $f(X)$는 유계이다.

**(3).** $[a, b]$에는 보통 거리의 부분공간 거리를 주고, [[metric-subspace-topology]]의 (2)에 의해 그 거리위상은 보통 위상의 부분공간 위상이다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f : [a, b] \to \mathbb{R}$는 위상의 뜻으로 연속이다. [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)에 의해 $[a, b]$는 콤팩트 공간이고, [[interval]]의 (3)에 의해 $a \in [a, b]$이므로 공집합이 아니다. (2)에 의해 $f$가 최댓값을 갖는 점과 최솟값을 갖는 점이 있고, (1)에 의해 그 뜻은 해석학 입문의 것과 같다.

**(4).** (i) $X = \emptyset$이면 $X$에 점이 없다. 이때 $X$는 [[compact-space]]의 (8)의 (i)에 의해 콤팩트이고, 함수 $f = \emptyset$은 [[continuous-map|위상공간 사이의 연속함수]]의 (7)에 의해 연속이다. 따라서 (2)의 가정 $X \ne \emptyset$은 뺄 수 없다.

(ii) $X = (0, 1)$에 보통 위상의 부분공간 위상을 주면 $f(x) = x$로 정한 $f : (0, 1) \to \mathbb{R}$는 포함함수이므로 [[subspace-and-continuity|부분공간 위상과 연속]]의 (1)의 (i)에 의해 연속이다. $c \in (0, 1)$이면 $x = (c + 1)/2$는 순서 성질 (8)에 의해 $c < x < 1$이므로 $x \in (0, 1)$이고 $f(c) < f(x)$이다. 따라서 $f$는 어떤 점에서도 최댓값을 갖지 않는다. 같은 방식으로 $x = c/2$이면 $0 < x < c$이므로 최솟값도 갖지 않는다. [[compact-space]]의 (8)의 (vi)에 의해 $(0, 1)$은 콤팩트가 아니므로 (2)와 어긋나지 않는다. $X = \mathbb{R}$이면 $f$는 항등함수이므로 [[continuous-map|위상공간 사이의 연속함수]]의 (1)에 의해 연속이고, $f(X) = \mathbb{R}$이며, 실수 $B$에 대하여 $B < B + 1 \in f(X)$이므로 $\mathbb{R}$은 위로 유계가 아니다.
:::

## 예시와 반례

:::example[콤팩트 집합에서 한 점까지 가장 가까운 점]
$(X, d)$가 거리공간이고 $K$가 공집합이 아닌 콤팩트 부분집합이며 $p \in X$라 합시다. [[continuity-in-metric-spaces|거리공간의 연속]]의 (3)에 의해 $x$를 $d(x, p)$로 보내는 함수 $X \to \mathbb{R}$는 연속이고, [[subspace-and-continuity|부분공간 위상과 연속]]의 (2)에 의해 그것을 $K$로 제한한 함수도 연속입니다. $(K, \mathcal{T}_d|_K)$는 콤팩트이므로 (2)에 의해 이 함수는 어떤 점 $k_0 \in K$에서 최솟값을 갖습니다. 곧 모든 $k \in K$에서 $d(k_0, p) \le d(k, p)$입니다. 예컨대 $\mathbb{R}$에서 $K = [1, 2] \cup \{5\}$와 $p = 4$이면 $d(k, 4) = |k - 4|$의 최솟값은 $k_0 = 5$에서의 $1$입니다($[1, 2]$의 점에서는 $2$ 이상입니다).
:::

:::counterexample[유계이지만 최댓값을 갖지 않는 연속함수]
콤팩트가 아닌 공간에서는 $f(X)$가 유계여도 최댓값이 없을 수 있습니다. (4)의 (ii)의 $f(x) = x$ ($x \in (0, 1)$)는 $f(X) = (0, 1)$이 유계이지만 $\sup f(X) = 1$이 $f(X)$에 없습니다. 이것은 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (3)의 (iii)에서 본 대로 $(0, 1)$이 닫혀 있지 않아 콤팩트가 아니라는 것과 같은 현상입니다.
:::

## 확인 질문

:::check[$X$가 공집합이 아닌 콤팩트 공간이고 $f : X \to \mathbb{R}$가 상수함수이면 $f$는 어디에서 최댓값을 갖는가?]
모든 점에서 최댓값과 최솟값을 함께 갖습니다. 값이 $y_0$이면 모든 $x$, $c$에서 $f(x) = y_0 = f(c)$이므로 (1)의 두 부등식이 모두 등호로 성립합니다. 최댓값을 갖는 점은 하나로 정해지지 않을 수 있습니다. 이것은 $X$가 콤팩트인지와 관계없이 성립합니다.
:::

:::check[$X$가 공집합이 아닌 콤팩트 공간이고 $f, g : X \to \mathbb{R}$가 연속이며 모든 $x$에서 $f(x) < g(x)$이면, 모든 $x$에서 $f(x) + \varepsilon \le g(x)$인 양수 $\varepsilon$이 있는가?]
있습니다. 상수함수 $-1$은 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이므로, [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (3)을 곱 $(-1)f(x)$와 합 $g(x) + (-1)f(x)$에 쓰면 $h(x) = g(x) - f(x)$로 정한 $h : X \to \mathbb{R}$는 연속이고, (2)에 의해 어떤 점 $c'$에서 최솟값 $\varepsilon = h(c')$를 갖습니다. 가정에 의해 $0 < \varepsilon$이고, 모든 $x$에서 $\varepsilon \le h(x)$, 곧 $f(x) + \varepsilon \le g(x)$입니다. $X = (0, 1)$, $f(x) = 0$, $g(x) = x$이면 그런 $\varepsilon$이 없습니다. 양수 $\varepsilon$마다 $x = \min\{\varepsilon, 1\}/2$는 $(0, 1)$의 점이고 $g(x) - f(x) = x < \varepsilon$이기 때문입니다. 그래서 콤팩트 가정이 필요합니다.
:::
