---
title: 거리공간 사이의 립시츠 사상
title_en: Lipschitz Maps between Metric Spaces
aliases: [립시츠 사상, K-립시츠, 거리공간의 립시츠 연속, Lipschitz map, K-Lipschitz map]
kind: definition
field: topology
msc: ["54E35", "26A16"]
level: undergrad
summary: 거리공간 사이의 사상 f 가 K-립시츠라는 것은 0 ≤ K 이고 모든 두 점에서 상의 거리가 원래 거리의 K 배 이하라는 것이다. 실함수에서는 해석학 입문의 립시츠 연속과 같고, 립시츠 사상은 고르게 연속이며, 합성·제한·공역 바꾸기에서 유지된다. 한 점까지의 거리, 곱의 사영, 포함함수, 거리 자신이 립시츠임을 보이고, 같은 집합 위의 두 거리의 비교를 항등사상의 립시츠 조건으로 읽는다.
requires: [set, subset, function, cartesian-product, function-composition, adding-or-removing-an-element, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, square-root-exists, interval, metric-space, metric-space-examples, topology-examples, continuous-map, subspace-and-continuity, real-valued-function, power-function-is-continuous, continuous-on-closed-interval-is-uniformly-continuous, lipschitz-continuity, uniformly-continuous-map]
sources:
  - ref: lebl-basic-analysis
    loc: "7.5.4절 Uniform continuity, Example 7.5.13 (p.292); 7.6.1절 Fixed point theorem, Definition 7.6.1 (p.296); 7.1.1절 연습문제 7.1.6 b) (p.262); 7.2.4절 연습문제 7.2.9 (p.272); 7.5.6절 연습문제 7.5.10 a), b) (p.294); 7.6.3절 연습문제 7.6.4, 7.6.10 (pp.299–300); 3.4.3절 Example 3.4.10 과 그 뒤 문단 (pp.142–143)"
    checked: original
    note: "출처 Example 7.5.13(p.292)은 '립시츠' 또는 'K-립시츠'를 K ∈ ℝ 이 있어 모든 p, q 에서 d_Y(f(p), f(q)) ≤ K d_X(p, q) 인 것으로 정의하고 K 에 부호 조건을 두지 않는다. Definition 7.6.1(p.296)은 같은 말 'k-Lipschitz map' 을 쓴다. 이 항목은 해석학 입문의 립시츠 연속처럼 0 ≤ K 를 정의에 두고, (2)로 두 사이트 항목의 일치를 보였다. 출처는 같은 예에서 립시츠이면 고르게 연속이라고 δ = ε/K 로 보이며 K > 0 을 가정한다고 괄호로 적는다. 이 항목의 (3)은 δ = ε(K + 1)⁻¹ 로 두어 K = 0 도 다룬다. (6)의 (iii)은 출처 연습문제 7.5.10 a)(p.294, f(x) = d(x, p) 가 연속임을 보여라)가 묻는 연속을 1-립시츠로 강하게 진술한 것이고, (v)는 같은 연습문제 b)(연습문제 7.1.6 b 의 최대 거리를 준 X × X 위에서 d 가 연속임을 보여라)의 함수를 2-립시츠로 진술한 것이다. (7)은 출처 연습문제 7.2.9(p.272, αd ≤ d′ ≤ βd 인 두 거리는 열린집합이 같다)와 같은 부등식을 한쪽씩 항등사상의 립시츠 조건으로 읽은 것이다. 반례 '[0, 1] 위의 √x'는 출처가 Example 7.5.13(p.292)에서 고르게 연속이지만 립시츠가 아닌 함수로 드는 것과 같은 함수이다. 출처는 거기서 'as we already saw' 라고만 적고, 3장의 Example 3.4.10 과 그 뒤 문단(pp.142–143)에 [0, ∞) 위의 √x 가 립시츠 연속이 아니라는 증명과 [0, 1] 로 제한하면 고르게 연속이라는 문장이 있다. 확인 질문 'x 를 3x + 1 로 보내는 사상'은 출처 연습문제 7.6.4(p.299, 0 < k < 1 인 F(x) = kx + b 가 축소 사상임을 보여라)와 같은 꼴의 일차함수를 다룬다. 확인 질문 '이산 거리 공간 사이의 사상'은 출처 연습문제 7.6.10(p.300, 이산 거리 공간 위의 축소 사상은 상수이다)과 같은 대상(이산 거리 공간 사이의 사상)을 다룬다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 출처 메모의 넘겨짚은 해석 3건과 틀린 소절 1건, 경계 경우에서 흐리던 설명 문장 4건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(부분공간 거리, 곱집합 위의 최대 거리 $d_{\max}$, $\mathbb{R}$의 보통 거리)는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리공간에는 늘 거리위상([[topology-examples]])을 준다. 사상과 고른 연속은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 실함수의 립시츠 연속과 립시츠 상수는 해석학 입문의 [[lipschitz-continuity|립시츠 연속]]의 것이다. 합성과 제한은 [[function-composition]], [[adding-or-removing-an-element]]의 것이고, 포함함수 $\iota$는 [[subspace-and-continuity]]의 (1)의 것이다. 아래에서 $(X, d_X)$, $(Y, d_Y)$, $(Z, d_Z)$는 거리공간이다.

**립시츠 사상.** $K$가 실수이고 $f : X \to Y$가 사상일 때, $f$가 **$K$-립시츠**($K$-Lipschitz)라는 것은 정확히 $0 \le K$이고 $X$의 모든 점 $p$, $q$에서
$$
d_Y(f(p), f(q)) \le K\, d_X(p, q)
$$
일 때이다. $f$가 **립시츠 사상**(Lipschitz map)이라는 것은 정확히 $f$가 $K$-립시츠인 실수 $K$가 있을 때이고, 그런 $K$를 $f$의 **립시츠 상수**(Lipschitz constant)라 한다.

다음이 성립한다.

1. (상수를 키우기) $f : X \to Y$가 $K$-립시츠이고 $K \le K'$이면 $f$는 $K'$-립시츠이다.
2. (해석학 입문의 립시츠 연속과 같다) $S \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리 $d_S$를 주고 $f : S \to \mathbb{R}$가 실함수라 하자($\mathbb{R}$에는 보통 거리). 실수 $K$에 대하여, 사상 $f : (S, d_S) \to \mathbb{R}$가 $K$-립시츠인 것은 정확히 $K$가 [[lipschitz-continuity|립시츠 연속]]의 뜻으로 $f$의 립시츠 상수일 때이다. 따라서 $f$가 립시츠 사상인 것은 정확히 $f$가 립시츠 연속일 때이다.
3. (고른 연속) $f : X \to Y$가 $K$-립시츠이면, 모든 실수 $\varepsilon > 0$에 대하여 $\delta = \varepsilon\,(K + 1)^{-1}$은 양수이고, $p$, $q \in X$이고 $d_X(p, q) < \delta$이면 $d_Y(f(p), f(q)) < \varepsilon$이다. 따라서 립시츠 사상은 고르게 연속이고 연속이다.
4. (합성) $f : X \to Y$가 $K$-립시츠이고 $g : Y \to Z$가 $L$-립시츠이면 $g \circ f : X \to Z$는 $LK$-립시츠이다.
5. (제한과 공역 바꾸기) $f : X \to Y$가 $K$-립시츠라 하자. $A \subseteq X$에 부분공간 거리 $d_A$를 주면 $f|_A : A \to Y$는 $K$-립시츠이다. 또 $T \subseteq Y$에 부분공간 거리 $d_T$를 주고 $g : X \to T$가 함수이면, 실수 $L$에 대하여 $g : X \to T$가 $L$-립시츠인 것은 정확히 같은 집합 $g$를 $X$에서 $Y$로의 함수로 본 것이 $L$-립시츠일 때이다.
6. (예)
   - (i) (상수 사상과 항등사상) $y_0 \in Y$이고 모든 $x \in X$에서 $f(x) = y_0$인 사상 $f : X \to Y$는 $0$-립시츠이고, 항등사상 $i_X : X \to X$는 $1$-립시츠이다.
   - (ii) (포함함수) $A \subseteq X$에 부분공간 거리 $d_A$를 주면 포함함수 $\iota : A \to X$는 $1$-립시츠이다.
   - (iii) (한 점까지의 거리) $p \in X$이고 $r(x) = d_X(x, p)$로 정한 $r : X \to \mathbb{R}$는 $1$-립시츠이다. 곧 $X$의 모든 점 $x$, $y$에서 $|d_X(x, p) - d_X(y, p)| \le d_X(x, y)$이다.
   - (iv) (사영) 곱집합 $X \times Y$에 최대 거리 $d_{\max}$를 주고 $\pi_1((x, y)) = x$, $\pi_2((x, y)) = y$로 정하면, 사영 $\pi_1 : X \times Y \to X$와 $\pi_2 : X \times Y \to Y$는 $1$-립시츠이다.
   - (v) (거리 자신) 곱집합 $X \times X$에 최대 거리 $d_{\max}$를 주면, 거리 $d_X : X \times X \to \mathbb{R}$는 $2$-립시츠이다.
7. (두 거리의 비교) $d$, $d'$이 집합 $X$ 위의 두 거리이고 $0 \le c$인 실수 $c$가 있다고 하자. 항등사상 $i_X : (X, d) \to (X, d')$가 $c$-립시츠인 것은 정확히 $X$의 모든 점 $p$, $q$에서 $d'(p, q) \le c\, d(p, q)$일 때이다. 이때 $i_X : (X, d) \to (X, d')$는 고르게 연속이고, 거리위상 사이에 $\mathcal{T}_{d'} \subseteq \mathcal{T}_d$가 성립한다.
:::

:::english
Metric spaces and their examples (subspace metrics, the max metric $d_{\max}$ on a product, the standard metric on $\mathbb{R}$) are as in the entries on metric spaces, and metric spaces always carry their metric topology. Maps and uniform continuity are as in the entry on uniformly continuous maps between metric spaces, and continuity is that of the entry on continuous maps between topological spaces. Lipschitz continuity and Lipschitz constants of real-valued functions are as in the introductory analysis entry. Composition and restriction are as in the earlier entries, and the inclusion map $\iota$ is that of item (1) of the entry on subspace topology and continuity. Throughout, $(X, d_X)$, $(Y, d_Y)$ and $(Z, d_Z)$ are metric spaces.

**Lipschitz maps.** For a real number $K$ and a map $f : X \to Y$, $f$ is **$K$-Lipschitz** exactly when $0 \le K$ and
$$
d_Y(f(p), f(q)) \le K\, d_X(p, q)
$$
for all points $p$, $q$ of $X$. The map $f$ is a **Lipschitz map** exactly when there is a real number $K$ for which $f$ is $K$-Lipschitz, and such a $K$ is called a **Lipschitz constant** of $f$.

The following hold.

1. (Enlarging the constant) If $f : X \to Y$ is $K$-Lipschitz and $K \le K'$, then $f$ is $K'$-Lipschitz.
2. (Agreement with Lipschitz continuity in introductory analysis) Give $S \subseteq \mathbb{R}$ the subspace metric $d_S$ of the standard metric and let $f : S \to \mathbb{R}$ be a real-valued function ($\mathbb{R}$ carries the standard metric). For a real number $K$, the map $f : (S, d_S) \to \mathbb{R}$ is $K$-Lipschitz exactly when $K$ is a Lipschitz constant of $f$ in the sense of the introductory analysis entry. Hence $f$ is a Lipschitz map exactly when $f$ is Lipschitz continuous.
3. (Uniform continuity) If $f : X \to Y$ is $K$-Lipschitz, then for every real number $\varepsilon > 0$ the number $\delta = \varepsilon\,(K + 1)^{-1}$ is positive, and $d_Y(f(p), f(q)) < \varepsilon$ whenever $p$, $q \in X$ and $d_X(p, q) < \delta$. Hence a Lipschitz map is uniformly continuous and continuous.
4. (Composition) If $f : X \to Y$ is $K$-Lipschitz and $g : Y \to Z$ is $L$-Lipschitz, then $g \circ f : X \to Z$ is $LK$-Lipschitz.
5. (Restriction and changing the codomain) Let $f : X \to Y$ be $K$-Lipschitz. If $A \subseteq X$ is given the subspace metric $d_A$, then $f|_A : A \to Y$ is $K$-Lipschitz. Moreover, if $T \subseteq Y$ is given the subspace metric $d_T$ and $g : X \to T$ is a function, then for a real number $L$, $g : X \to T$ is $L$-Lipschitz exactly when the same set $g$, regarded as a function from $X$ to $Y$, is $L$-Lipschitz.
6. (Examples)
   - (i) (Constant and identity maps) If $y_0 \in Y$, the map $f : X \to Y$ with $f(x) = y_0$ for all $x \in X$ is $0$-Lipschitz, and the identity map $i_X : X \to X$ is $1$-Lipschitz.
   - (ii) (Inclusion map) If $A \subseteq X$ is given the subspace metric $d_A$, the inclusion map $\iota : A \to X$ is $1$-Lipschitz.
   - (iii) (Distance to a point) For $p \in X$, the map $r : X \to \mathbb{R}$ defined by $r(x) = d_X(x, p)$ is $1$-Lipschitz; that is, $|d_X(x, p) - d_X(y, p)| \le d_X(x, y)$ for all points $x$, $y$ of $X$.
   - (iv) (Projections) Give the product $X \times Y$ the max metric $d_{\max}$ and put $\pi_1((x, y)) = x$, $\pi_2((x, y)) = y$. Then the projections $\pi_1 : X \times Y \to X$ and $\pi_2 : X \times Y \to Y$ are $1$-Lipschitz.
   - (v) (The metric itself) Give the product $X \times X$ the max metric $d_{\max}$. Then the metric $d_X : X \times X \to \mathbb{R}$ is $2$-Lipschitz.
7. (Comparing two metrics) Let $d$, $d'$ be two metrics on a set $X$ and let $c$ be a real number with $0 \le c$. The identity map $i_X : (X, d) \to (X, d')$ is $c$-Lipschitz exactly when $d'(p, q) \le c\, d(p, q)$ for all points $p$, $q$ of $X$. In that case $i_X : (X, d) \to (X, d')$ is uniformly continuous, and the metric topologies satisfy $\mathcal{T}_{d'} \subseteq \mathcal{T}_d$.
:::

## 직관

$f$가 $K$-립시츠라는 것은 $f$가 두 점 사이의 거리를 $K$배보다 더 늘이지 않는다는 뜻입니다. 지도를 다시 그리는 일에 비유하면, 원래 지도에서 두 곳의 거리가 $1$이면 새 지도에서는 많아야 $K$만큼 떨어져 있습니다. 비유에서 "어느 두 곳이든"이 정의의 "모든 점 $p$, $q$"에, "많아야 $K$배"가 부등식에 맞습니다. 실직선 위의 함수에서는 해석학 입문에서 본 대로 할선의 기울기가 $K$를 넘지 않는다는 말이 되고((2)), 거리공간에서는 기울기 대신 거리의 비율로 말합니다.

고른 연속과 견주면, 고른 연속은 "$\varepsilon$에 맞는 $\delta$가 있다"까지만 말하고 립시츠 조건은 그 $\delta$를 $\varepsilon\,(K + 1)^{-1}$이라는 식으로 줍니다((3)). $K = 0$일 때도 이 식은 $\delta = \varepsilon$이라 쓸 수 있습니다. 거꾸로 고르게 연속이어도 립시츠 사상이 아닐 수 있습니다. 아래 반례의 $[0, 1]$ 위의 $\sqrt{x}$는 해석학 입문의 [[lipschitz-continuity|립시츠 연속]]의 반례와 같은 함수입니다.

(6)의 예들은 거리공간에서 거듭 쓰이는 사상들이 모두 거리를 늘이지 않거나 많아야 두 배로 늘인다는 것을 모은 것입니다. (7)은 같은 집합에 거리를 두 가지 줄 때, 한 거리가 다른 거리의 상수배로 눌린다는 부등식을 항등사상에 대한 립시츠 조건으로 바꿔 읽은 것입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (4)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "거리의 (2)"는 [[metric-space]]의 번호이다. 거리의 조건 (i)에 의해 거리의 값은 $0$ 이상이다. 이것을 (ㄱ)이라 하자.

**1의 증명.** $p$, $q \in X$이면 (ㄱ)의 $0 \le d_X(p, q)$와 순서 성질 (4)의 (iii)에 의해 $K\, d_X(p, q) \le K'\, d_X(p, q)$이고, $d_Y(f(p), f(q)) \le K\, d_X(p, q)$와 순서 성질 (1)의 (v)에 의해 $d_Y(f(p), f(q)) \le K'\, d_X(p, q)$이다. $0 \le K \le K'$이므로 순서 성질 (1)의 (v)에 의해 $0 \le K'$이다.

**2의 증명.** [[metric-space-examples]]의 (1)과 (3)에 의해 $x$, $w \in S$에서 $d_S(x, w) = |x - w|$이고, $\mathbb{R}$의 보통 거리 $d$에서 $d(f(x), f(w)) = |f(x) - f(w)|$이다. 따라서 "$f : (S, d_S) \to \mathbb{R}$가 $K$-립시츠"는 "$0 \le K$이고 모든 $x$, $w \in S$에서 $|f(x) - f(w)| \le K\,|x - w|$"이고, 이것은 [[lipschitz-continuity|립시츠 연속]]의 정의에서 "$0 \le K$이고 $K$가 $f$의 부등식을 만족한다", 곧 $K$가 $f$의 립시츠 상수라는 명제와 글자 그대로 같다. 뒤 문장은 앞 문장을 "그런 $K$가 있다"에 쓴 것이다.

**3의 증명.** 순서 성질 (5)의 (ii)의 $0 < 1$과 (2)의 (ii)에 의해 $K < K + 1$이고, $0 \le K$와 순서 성질 (1)의 (v)에 의해 $0 < K + 1$이다. 실수 $\varepsilon > 0$에 대하여 순서 성질 (6)의 (i)과 [[real-order-axioms]]의 (W4)에 의해 $\delta = \varepsilon\,(K + 1)^{-1}$은 양수이다. $p$, $q \in X$이고 $d_X(p, q) < \delta$라 하자. $0 \le K$이므로 순서 성질 (4)의 (iii)에 의해 $K\, d_X(p, q) \le K\delta$이다. $0 < \delta$이고 $K < K + 1$이므로 순서 성질 (4)의 (i)에 의해 $K\delta < (K + 1)\,\delta = \varepsilon$이다((K1), (K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해
$$
\begin{aligned}
d_Y(f(p), f(q)) &\le K\, d_X(p, q) \\
&\le K\delta < \varepsilon
\end{aligned}
$$
에서 $d_Y(f(p), f(q)) < \varepsilon$이다. $\varepsilon$은 임의의 양의 실수였으므로 [[uniformly-continuous-map|고르게 연속인 사상]]의 정의에 의해 $f$는 고르게 연속이고, 그 항목의 (2)에 의해 연속이다.

**4의 증명.** $p$, $q \in X$이면 [[function-composition]]에 의해 $(g \circ f)(p) = g(f(p))$이고 $(g \circ f)(q) = g(f(q))$이다. $g$가 $L$-립시츠이므로 $d_Z(g(f(p)), g(f(q))) \le L\, d_Y(f(p), f(q))$이다. $0 \le L$이고 $d_Y(f(p), f(q)) \le K\, d_X(p, q)$이므로 순서 성질 (4)의 (iii)과 (K2)에 의해 $L\, d_Y(f(p), f(q)) \le (LK)\, d_X(p, q)$이다. 순서 성질 (1)의 (v)에 의해 $d_Z((g \circ f)(p), (g \circ f)(q)) \le (LK)\, d_X(p, q)$이고, 순서 성질 (4)의 (iv)에 의해 $0 \le LK$이다.

**5의 증명.** *제한.* [[metric-space-examples]]의 (3)에 의해 $p$, $q \in A$에서 $d_A(p, q) = d_X(p, q)$이고, [[adding-or-removing-an-element]]의 함수의 제한에 의해 $f|_A(p) = f(p)$이다. 따라서 $d_Y(f|_A(p), f|_A(q)) = d_Y(f(p), f(q)) \le K\, d_X(p, q) = K\, d_A(p, q)$이다.

*공역 바꾸기.* [[function]]의 진술에 의해 같은 집합 $g$는 $X$에서 $Y$로의 함수이고 값도 같다. $p$, $q \in X$이면 $g(p)$, $g(q) \in T$이므로 [[metric-space-examples]]의 (3)에 의해 $d_T(g(p), g(q)) = d_Y(g(p), g(q))$이다. 따라서 두 사상의 $L$-립시츠 조건은 같은 부등식들이다.

**6의 증명.** (i) 상수 사상: 거리의 (1)과 (K9)에 의해 $d_Y(f(p), f(q)) = d_Y(y_0, y_0) = 0 = 0 \cdot d_X(p, q)$이고, $0 \le 0$이다. 항등사상: (K1), (K4)에 의해 $d_X(i_X(p), i_X(q)) = d_X(p, q) = 1 \cdot d_X(p, q)$이고, 순서 성질 (5)의 (ii)에 의해 $0 \le 1$이다.

(ii) [[subspace-and-continuity]]의 (1)에 의해 $a \in A$에서 $\iota(a) = a$이다. $p$, $q \in A$이면 [[metric-space-examples]]의 (3)에 의해 $d_X(\iota(p), \iota(q)) = d_X(p, q) = d_A(p, q) = 1 \cdot d_A(p, q)$이다.

(iii) 각 $x \in X$에서 $d_X(x, p)$는 실수 하나로 정해지므로 [[recursion-theorem]]의 (1)에 의해 $r$은 $X$에서 $\mathbb{R}$로의 함수이다. $x$, $y \in X$이면 거리의 (2)(거리의 역삼각부등식)를 $z = p$로 써서 $|d_X(x, p) - d_X(y, p)| \le d_X(x, y)$이고, $\mathbb{R}$의 보통 거리 $d$에서 $d(r(x), r(y)) = |r(x) - r(y)|$이므로 $d(r(x), r(y)) \le 1 \cdot d_X(x, y)$이다((K1), (K4)).

(iv) 곱집합의 원소 $u = (x, y)$에서 두 성분 $x$, $y$는 하나로 정해지므로([[cartesian-product|곱집합]]) $\pi_1$, $\pi_2$는 함수이다. $u = (x, y)$, $v = (x', y')$이면 [[metric-space-examples]]의 (4)에 의해 $d_{\max}(u, v) = \max\{d_X(x, x'),\ d_Y(y, y')\}$이고, 절댓값 (10)에 의해 $d_X(\pi_1(u), \pi_1(v)) = d_X(x, x') \le d_{\max}(u, v)$, $d_Y(\pi_2(u), \pi_2(v)) = d_Y(y, y') \le d_{\max}(u, v)$이다. 오른쪽은 $1 \cdot d_{\max}(u, v)$와 같다.

(v) $u = (x, y)$, $v = (z, w)$가 $X \times X$의 점이면 $d_{\max}(u, v) = \max\{d_X(x, z),\ d_X(y, w)\}$를 $m$이라 하자. 거리의 (4)에 의해 $|d_X(x, y) - d_X(z, w)| \le d_X(x, z) + d_X(y, w)$이다. 절댓값 (10)에 의해 $d_X(x, z) \le m$, $d_X(y, w) \le m$이므로 순서 성질 (2)의 (iii)에 의해 $d_X(x, z) + d_X(y, w) \le m + m$이고, (K3), (K4)와 $1 + 1 = 2$((K7))에 의해 $m + m = 2m$이다. $\mathbb{R}$의 보통 거리 $d$로 재면 두 값 $d_X(x, y)$, $d_X(z, w)$ 사이의 거리는 $|d_X(x, y) - d_X(z, w)|$이므로, 순서 성질 (1)의 (v)에 의해 $d\bigl(d_X(x, y), d_X(z, w)\bigr) \le 2\, d_{\max}(u, v)$이다. 순서 성질 (10)에 의해 $0 \le 2$이다.

**7의 증명.** 모든 $p \in X$에서 $i_X(p) = p$이므로 $i_X : (X, d) \to (X, d')$의 $c$-립시츠 조건은 "$0 \le c$이고 모든 $p$, $q$에서 $d'(p, q) \le c\, d(p, q)$"이고, $0 \le c$는 가정이므로 앞 문장이 성립한다. 그때 (3)에 의해 $i_X$는 고르게 연속이고 연속이다. 곧 $i_X : (X, \mathcal{T}_d) \to (X, \mathcal{T}_{d'})$가 연속이므로, [[continuous-map|위상공간 사이의 연속함수]]의 (5)에 의해 $\mathcal{T}_{d'} \subseteq \mathcal{T}_d$이다. $\blacksquare$
:::

## 예시와 반례

:::example[덧셈은 최대 거리에서 2-립시츠이다]
$\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를, $\mathbb{R}$에 보통 거리를 주고 $s((x, y)) = x + y$로 정한 사상 $s : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$를 봅니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$u = (x, y)$, $v = (x', y')$이면 (K1), (K2), (K12)의 (iv)로 $(x + y) - (x' + y') = (x - x') + (y - y')$이므로, [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|s(u) - s(v)| \le |x - x'| + |y - y'|$입니다. [[metric-space-examples]]의 (5)에 의해 오른쪽은 $d_{\mathrm{sum}}(u, v)$이고, 두 항이 각각 $d_{\max}(u, v)$ 이하이므로([[absolute-value]]의 (10)) 순서 성질 (2)의 (iii)에 의해 $|s(u) - s(v)| \le 2\, d_{\max}(u, v)$입니다. 따라서 $s$는 $d_{\max}$에 대하여 $2$-립시츠이고, 같은 계산의 앞부분에 의해 $d_{\mathrm{sum}}$에 대하여는 $1$-립시츠입니다.

$d_{\max}$에 대하여 상수 $2$를 더 작게 할 수는 없습니다. $u = (0, 0)$, $v = (1, 1)$이면 $d_{\max}(u, v) = 1$이고 $|s(u) - s(v)| = |0 - 2| = 2$이므로, $K < 2$인 $K$에서는 $2 \le K \cdot 1$이 성립하지 않습니다(순서 성질 (1)의 (i)).
:::

:::counterexample[$[0, 1]$ 위의 $\sqrt{x}$: 고르게 연속이지만 립시츠 사상이 아니다]
$[0, 1]$에 보통 거리의 부분공간 거리를 주고 $q(x) = \sqrt{x}$로 정한 $q : [0, 1] \to \mathbb{R}$를 봅니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호, "제곱근 (2)"는 [[square-root-exists]]의 번호입니다.

*고르게 연속이다.* $T = \{x \in \mathbb{R} : 0 \le x\}$ 위의 제곱근 함수는 [[power-function-is-continuous]]의 (2)에 의해 연속함수이고, [[interval]]의 정의에 의해 $[0, 1] \subseteq T$이므로 [[continuous-on-closed-interval-is-uniformly-continuous|닫힌구간 위의 연속함수는 고르게 연속이다]]의 (2)에 의해 그 함수의 $[0, 1]$로의 제한은 해석학 입문의 뜻으로 고르게 연속입니다. [[real-valued-function]]의 (6)과 (2)에 의해 그 제한은 $q$와 같은 함수이므로, [[uniformly-continuous-map|고르게 연속인 사상]]의 (3)에 의해 사상 $q$는 고르게 연속입니다.

*립시츠 사상이 아니다.* $q$가 어떤 실수 $K$로 $K$-립시츠라고 해 봅시다. $0 \le K$이고 $0 < 1$이므로 순서 성질 (2)의 (i), (ii)에 의해 $1 \le K + 1$이고 $K < K + 1$이며 $0 < K + 1$입니다. $r = (K + 1)^{-1}$로 두면 순서 성질 (6)의 (i)에 의해 $0 < r$이고, $K + 1 = 1$이면 $r = 1$, $1 < K + 1$이면 순서 성질 (6)의 (ii)에 의해 $r < 1$이므로 $r \le 1$입니다. $x = rr$로 두면 순서 성질 (5)의 (iii)과 (4)의 (iii)에 의해 $0 \le rr \le 1 \cdot r = r \le 1$이므로 $x \in [0, 1]$이고, $0 \in [0, 1]$입니다. 제곱근 (2)의 $\sqrt{aa} = a$에 의해 $q(x) = r$, $q(0) = \sqrt{0 \cdot 0} = 0$이므로, [[absolute-value]]의 (1)에 의해 두 점에서 $K$-립시츠 조건은 $r \le K\, rr$입니다. 그런데 $0 < r$이고 $K < K + 1$이므로 순서 성질 (4)의 (i)에 의해 $Kr < (K + 1)\,r = 1$이고, 다시 순서 성질 (4)의 (i)에 의해 $K\, rr = (Kr)\,r < 1 \cdot r = r$입니다((K2), (K1), (K4)). 순서 성질 (1)의 (i)에 의해 $r \le K\, rr$과 함께 성립할 수 없으므로, $q$는 어떤 $K$로도 $K$-립시츠가 아닙니다.

두 점 $0$과 $rr$은 $K$가 클수록 $0$ 가까이로 다가가고, 거리 $rr$에 비해 상의 거리 $r$이 $K$배보다 커집니다. 이 반례는 (3)의 거꾸로가 성립하지 않는다는 것을 보입니다.
:::

## 확인 질문

:::check[$X$와 $Y$에 각각 이산 거리를 주면, 모든 사상 $f : X \to Y$는 $1$-립시츠인가?]
그렇습니다. 이산 거리를 $d_X$, $d_Y$라 하고 $p$, $q \in X$라 합시다. $p = q$이면 $f(p) = f(q)$이므로 두 쪽이 모두 $0$이고 $0 \le 1 \cdot 0$입니다. $p \ne q$이면 $d_X(p, q) = 1$이고, $d_Y(f(p), f(q))$는 $0$이나 $1$이므로 [[order-properties-of-reals]]의 (5)의 (ii)에 의해 $1$ 이하, 곧 $1 \cdot d_X(p, q)$ 이하입니다([[metric-space-examples]]의 (2)).
:::

:::check[$\mathbb{R}$(보통 거리)에서 $x$를 $3x + 1$로 보내는 사상은 $2$-립시츠인가?]
아닙니다. $p = 1$, $q = 0$이면 상의 거리는 $|4 - 1| = 3$이고 $2 \cdot |1 - 0| = 2$이므로 $3 \le 2$가 성립하지 않습니다. 이 사상은 $3$-립시츠입니다. 모든 $p$, $q$에서 (K3), (K12)로 $(3p + 1) - (3q + 1) = 3(p - q)$이고 [[absolute-value]]의 (4)와 (1)에 의해 그 절댓값은 $3|p - q|$이기 때문입니다.
:::
