---
title: 거리공간의 예
title_en: Examples of Metric Spaces
aliases: [보통 거리, standard metric, 이산 거리, discrete metric, 부분공간 거리, subspace metric, 최대 거리, 합 거리, 택시 거리, 유클리드 거리, euclidean metric, 코시–슈바르츠 부등식]
kind: theorem
field: topology
msc: ["54E35"]
level: undergrad
summary: 실수의 보통 거리, 임의의 집합 위의 이산 거리, 부분집합에 제한한 거리, 두 거리공간의 곱집합 위의 최대 거리와 합 거리, 곱집합 ℝ × ℝ 위의 유클리드 거리가 모두 거리임을 증명하고, ℝ × ℝ 의 세 거리를 비교한다.
requires: [metric-space, set, subset, cartesian-product, function, adding-or-removing-an-element, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, square-root-exists, power-of-a-real-number]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.1절 Metric spaces, Example 7.1.2 (p.256), Example 7.1.3 (pp.256–257), Lemma 7.1.4 와 Example 7.1.5 (pp.257–258), Example 7.1.6, Example 7.1.7 (p.259), Proposition 7.1.10, Definition 7.1.11, Definition 7.1.12 와 그 뒤 문단 (p.261), 연습문제 7.1.1, 7.1.3 (p.261), 7.1.4, 7.1.5, 7.1.6 (p.262); 7.2.4절 연습문제 7.2.9 (p.272); 7.3.4절 연습문제 7.3.14 (p.278)"
    checked: original
    note: "(1)은 출처 Example 7.1.2 와 같다(출처는 (i)–(iii)을 'easy to verify' 라고 하고 (iv)를 실수의 삼각부등식으로 보인다). (2)는 Example 7.1.7 이고 출처는 증명을 연습문제 7.1.1 로 둔다. (3)은 Proposition 7.1.10 이고 출처는 'trivial proof' 라고만 적는다. 출처는 (Y, d|_{Y×Y}) 를 subspace, d|_{Y×Y} 를 subspace metric 이라 부른다(Definition 7.1.11 과 그 뒤 문단). 이 사이트는 선형대수의 '부분공간'과 구별하려고 공간에는 이 이름을 쓰지 않고 거리에만 '부분공간 거리'라고 쓴다. (4)는 출처 연습문제 7.1.6 의 a)(합 거리)와 b)(최대 거리)를 명제로 올린 것이다. 출처 연습문제 7.3.14 의 a)는 ℝⁿ 위의 합 거리와 최대 거리를 7.1.6 으로 보이라고 한다. (5)의 유클리드 거리는 출처 Example 7.1.5(ℝⁿ 의 표준 거리)의 n = 2 인 경우이다. 출처 Example 7.1.6(p.259)은 복소수 x + iy 를 ℝ² 의 점으로 보아 같은 식 √((x₁ − x₂)² + (y₁ − y₂)²) 으로 거리를 준다. 출처는 Lemma 7.1.4 의 코시–슈바르츠 부등식 (Σ x_k y_k)² ≤ (Σ x_k²)(Σ y_k²) 을 Σ 의 전개로 증명하고 그것으로 거리의 삼각부등식을 보인다. 이 항목의 (6)은 그 부등식의 두 항짜리이고, 증명은 출처 Lemma 7.1.4 의 증명(Σ_k Σ_ℓ (x_k y_ℓ − x_ℓ y_k)² ≥ 0 의 전개)을 두 항으로 쓴 것과 같은 발상((a₁b₂ − a₂b₁)² ≥ 0)이다. 이름 '최대 거리', '합 거리', '택시 거리'는 두 출처에 나오지 않는다(검색어 max metric, sum metric, taxicab, taxi, Manhattan, maximum metric, 두 출처 전체). (7)의 부등식은 출처 연습문제 7.3.14 b)(세 거리로 본 수렴이 같다)와 7.2.9(서로의 상수배로 눌리는 두 거리는 열린집합이 같다)에 쓰이는 것이다. 예시 '같은 집합 위의 다른 거리'의 ℝ 위의 이산 거리는 출처가 Example 7.1.7(p.259, 'X 가 실수처럼 무한집합이면 미묘해진다')과 Definition 7.1.12 의 뒤 문단(p.261, 실수에 이산 거리를 주면 유계인 거리공간이 된다)에서 말하는 것과 같은 대상이고, 한 집합에 서로 다른 거리를 준다는 발상은 출처 Example 7.1.3(pp.256–257, ℝ 위의 거리 |x − y|/(|x − y| + 1))과 연습문제 7.1.3(p.261, {a, b} 위에 서로 다른 두 거리를 정하라)과 같다. 확인 질문 'ℝ 위에서 e(x, y) = 2|x − y| 는 거리인가'는 출처 연습문제 7.1.5(p.262, φ 가 증가하고 부분가법이며 0 에서만 0 이면 φ(d) 도 거리)의 φ(t) = 2t 인 경우와 같은 결론이다. 반례 '가는 값과 오는 값이 다른 함수'는 출처 연습문제 7.1.4(오르막과 내리막의 걷는 시간이 다른 세 건물)와 같은 발상이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절의 예 (ℝⁿ 의 거리 content/topological-spaces.tex:245–247, discrete metric 248–261), 연습문제 1.16 (content/exercises.tex:56–60)"
    checked: original
    note: "출처는 이산 거리를 예로 정의하고 그것이 거리임은 따로 증명하지 않는다(248–261). 출처 연습문제 1.16 은 두 거리공간의 곱 X₁ × X₂ 위의 최대 거리 max(d₁(x₁, y₁), d₂(x₂, y₂)) 를 'Define a metric' 이라고 주고 그 거리위상이 곱위상임을 보이라고 한다. 이 항목의 (4)의 최대 거리와 같은 거리이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 4건과 경계 경우의 문장을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간은 [[metric-space]]의 것이다. 절댓값과 두 수의 최대 $\max\{a, b\}$는 [[absolute-value]]의 것이고, $\sqrt{a}$는 [[square-root-exists]]의 것이며, 실수 $a$에 대하여 $a^2$은 [[power-of-a-real-number]]의 (1)에 의해 $aa$이다. 아래의 함수들은 모두 [[recursion-theorem|재귀 정리]]의 (1)에 의해 식으로 정한 함수이다.

1. (실수의 보통 거리) $d(x, y) = |x - y|$로 정한 $d : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$에 대하여 $(\mathbb{R}, d)$는 거리공간이다. 이 거리를 $\mathbb{R}$의 **보통 거리**(standard metric)라 하고, 거리를 밝히지 않고 "거리공간 $\mathbb{R}$"이라고 하면 이 거리를 준 것이다. 이때 거리의 삼각부등식은 [[triangle-inequality]]의 (4)이다.
2. (이산 거리) $X$가 집합이고 $X$의 점 $x$, $y$에 대하여 $x = y$이면 $d(x, y) = 0$, $x \ne y$이면 $d(x, y) = 1$로 정하면 $(X, d)$는 거리공간이다. 이 거리를 $X$ 위의 **이산 거리**(discrete metric)라 한다.
3. (부분공간 거리) $(X, d)$가 거리공간이고 $Y \subseteq X$이면 $Y \times Y \subseteq X \times X$이고, $d$를 $Y \times Y$로 제한한 함수 $d_Y = d|_{Y \times Y} : Y \times Y \to \mathbb{R}$([[adding-or-removing-an-element]]의 함수의 제한)에 대하여 $(Y, d_Y)$는 거리공간이다. $Y$의 점 $y$, $y'$에서 $d_Y(y, y') = d(y, y')$이다. $d_Y$를 $Y$ 위의 **부분공간 거리**(subspace metric)라 한다. $\mathbb{R}$의 부분집합을 거리를 밝히지 않고 거리공간이라 하면 보통 거리의 부분공간 거리를 준 것이다.
4. (곱집합 위의 최대 거리와 합 거리) $(X_1, d_1)$, $(X_2, d_2)$가 거리공간이라 하자. 곱집합 $X_1 \times X_2$의 점 $p = (p_1, p_2)$, $q = (q_1, q_2)$에 대하여
   $$
   d_{\max}(p, q) = \max\{d_1(p_1, q_1),\ d_2(p_2, q_2)\}, \qquad d_{\mathrm{sum}}(p, q) = d_1(p_1, q_1) + d_2(p_2, q_2)
   $$
   로 정하면 $(X_1 \times X_2, d_{\max})$와 $(X_1 \times X_2, d_{\mathrm{sum}})$은 거리공간이다. $d_{\max}$를 **최대 거리**(max metric), $d_{\mathrm{sum}}$을 **합 거리**(sum metric)라 한다.
5. (곱집합 $\mathbb{R} \times \mathbb{R}$ 위의 세 거리) 곱집합 $\mathbb{R} \times \mathbb{R}$의 점 $p = (p_1, p_2)$, $q = (q_1, q_2)$에 대하여 (4)를 두 보통 거리에 쓰면
   $$
   d_{\max}(p, q) = \max\{|p_1 - q_1|,\ |p_2 - q_2|\}, \qquad d_{\mathrm{sum}}(p, q) = |p_1 - q_1| + |p_2 - q_2|
   $$
   는 $\mathbb{R} \times \mathbb{R}$ 위의 거리이다. $d_{\mathrm{sum}}$을 **택시 거리**(taxicab metric)라고도 한다. 또
   $$
   d_E(p, q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2}
   $$
   로 정하면 $(\mathbb{R} \times \mathbb{R}, d_E)$도 거리공간이다. $d_E$를 **유클리드 거리**(euclidean metric)라 한다. 세 거리 가운데 어느 것을 주었는지는 늘 밝힌다.
6. (두 항의 코시–슈바르츠 부등식) 실수 $a_1$, $a_2$, $b_1$, $b_2$에 대하여
   $$
   a_1 b_1 + a_2 b_2 \le |a_1 b_1 + a_2 b_2| \le \sqrt{a_1^2 + a_2^2}\,\sqrt{b_1^2 + b_2^2}
   $$
   이다.
7. (세 거리의 비교) $\mathbb{R} \times \mathbb{R}$의 모든 점 $p$, $q$에서 $d_{\max}(p, q) \le d_E(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이다.
:::

:::english
Metric spaces are as in the entry on metric spaces. The absolute value and the maximum $\max\{a, b\}$ of two numbers are as in the entry on absolute value, $\sqrt{a}$ is the square root, and for a real number $a$, $a^2 = aa$ by item (1) of the entry on powers of real numbers. All functions below are defined by formulas, by item (1) of the recursion theorem.

1. (Standard metric on the reals) With $d : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ given by $d(x, y) = |x - y|$, the pair $(\mathbb{R}, d)$ is a metric space. This metric is called the **standard metric** on $\mathbb{R}$, and "the metric space $\mathbb{R}$" without mention of a metric means $\mathbb{R}$ with this metric. Its triangle inequality is item (4) of the triangle inequality for real numbers.
2. (Discrete metric) If $X$ is a set and for points $x$, $y$ of $X$ we put $d(x, y) = 0$ if $x = y$ and $d(x, y) = 1$ if $x \ne y$, then $(X, d)$ is a metric space. This metric is called the **discrete metric** on $X$.
3. (Subspace metric) If $(X, d)$ is a metric space and $Y \subseteq X$, then $Y \times Y \subseteq X \times X$, and for the restriction $d_Y = d|_{Y \times Y} : Y \times Y \to \mathbb{R}$ of $d$ to $Y \times Y$, the pair $(Y, d_Y)$ is a metric space. For points $y$, $y'$ of $Y$ we have $d_Y(y, y') = d(y, y')$. The metric $d_Y$ is called the **subspace metric** on $Y$. When a subset of $\mathbb{R}$ is called a metric space without mention of a metric, it carries the subspace metric of the standard metric.
4. (Max metric and sum metric on a product) Let $(X_1, d_1)$ and $(X_2, d_2)$ be metric spaces. For points $p = (p_1, p_2)$ and $q = (q_1, q_2)$ of the Cartesian product $X_1 \times X_2$, put
   $$
   d_{\max}(p, q) = \max\{d_1(p_1, q_1),\ d_2(p_2, q_2)\}, \qquad d_{\mathrm{sum}}(p, q) = d_1(p_1, q_1) + d_2(p_2, q_2).
   $$
   Then $(X_1 \times X_2, d_{\max})$ and $(X_1 \times X_2, d_{\mathrm{sum}})$ are metric spaces. The metric $d_{\max}$ is called the **max metric** and $d_{\mathrm{sum}}$ the **sum metric**.
5. (Three metrics on $\mathbb{R} \times \mathbb{R}$) For points $p = (p_1, p_2)$ and $q = (q_1, q_2)$ of $\mathbb{R} \times \mathbb{R}$, applying (4) to two copies of the standard metric shows that
   $$
   d_{\max}(p, q) = \max\{|p_1 - q_1|,\ |p_2 - q_2|\}, \qquad d_{\mathrm{sum}}(p, q) = |p_1 - q_1| + |p_2 - q_2|
   $$
   are metrics on $\mathbb{R} \times \mathbb{R}$. The metric $d_{\mathrm{sum}}$ is also called the **taxicab metric**. Moreover, with
   $$
   d_E(p, q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2},
   $$
   $(\mathbb{R} \times \mathbb{R}, d_E)$ is a metric space as well. The metric $d_E$ is called the **euclidean metric**. We always say which of the three metrics is meant.
6. (Cauchy–Schwarz inequality for two terms) For real numbers $a_1$, $a_2$, $b_1$, $b_2$,
   $$
   a_1 b_1 + a_2 b_2 \le |a_1 b_1 + a_2 b_2| \le \sqrt{a_1^2 + a_2^2}\,\sqrt{b_1^2 + b_2^2}.
   $$
7. (Comparing the three metrics) For all points $p$, $q$ of $\mathbb{R} \times \mathbb{R}$, $d_{\max}(p, q) \le d_E(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$.
:::

## 직관

같은 집합 위에도 거리는 여러 가지로 줄 수 있습니다. 평면 $\mathbb{R} \times \mathbb{R}$에서 두 점 사이를 재는 법을 세 가지 떠올려 봅시다. 자로 곧게 재면 유클리드 거리 $d_E$이고, 바둑판 모양의 길을 따라 가로로 간 만큼과 세로로 간 만큼을 더하면 택시 거리 $d_{\mathrm{sum}}$이며, 가로와 세로 가운데 더 많이 움직인 쪽만 세면 최대 거리 $d_{\max}$입니다. (7)은 세 값 가운데 어느 둘을 견주어도 한쪽이 다른 쪽의 두 배보다 커지지 않는다는 뜻입니다.

이산 거리는 "같은가, 다른가"만 보는 거리입니다. 서로 다른 두 점은 얼마나 "가까워" 보이든 거리가 $1$입니다. 그림으로 떠올린 직관이 거리공간 일반에서 맞는지 의심될 때 이산 거리에 넣어 보면 좋습니다.

부분공간 거리는 큰 공간의 자를 그대로 작은 집합에 대고 재는 것입니다. 거리의 값은 같지만, 잴 수 있는 점이 $Y$의 점으로 줄어듭니다.

## 증명

:::idea
각 함수마다 거리의 네 조건을 하나씩 확인합니다. 거리의 삼각부등식은 실수의 삼각부등식이나 성분마다의 삼각부등식에서 나오고, 유클리드 거리는 양변을 제곱해 (6)으로 줄입니다.
:::

:::hint
최대 거리에서 $d_1(p_1, r_1) \le d_{\max}(p, q) + d_{\max}(q, r)$와 둘째 성분의 같은 부등식을 얻으면, 최대의 성질로 두 부등식을 합칠 수 있습니다.
:::

:::hint
(6)에서는 $(a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1 b_1 + a_2 b_2)^2$을 전개해 보세요. 한 수의 제곱이 됩니다.
:::

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓰고, 계산 법칙은 [[real-number-arithmetic]]의 (K1)–(K12)로 인용한다. $0 < 2$ 같은 구체적인 정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 쓴다.

**(1).** 각 $(x, y) \in \mathbb{R} \times \mathbb{R}$에서 $|x - y|$는 실수 하나로 정해지므로 $d$는 함수이다. (i) [[absolute-value]]의 (2)에 의해 $0 \le |x - y|$이다. (ii) 같은 (2)에 의해 $|x - y| = 0$인 것은 정확히 $x - y = 0$일 때이고, (K12)의 (v)에 의해 이것은 정확히 $x = y$일 때이다. (iii) [[absolute-value]]의 (3)에 의해 $|x - y| = |y - x|$이다. (iv) [[triangle-inequality]]의 (4)에 의해 $|x - z| \le |x - y| + |y - z|$이다.

**(2).** $X$의 점 $x$, $y$마다 $x = y$이거나 $x \ne y$ 가운데 꼭 하나가 성립하므로 $d(x, y)$는 $0$이나 $1$로 하나 정해지고, $d$는 함수이다. (i) 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 두 값은 모두 $0$ 이상이다. (ii) $x = y$이면 $d(x, y) = 0$이다. $x \ne y$이면 $d(x, y) = 1 \ne 0$이다((K4)). (iii) $x = y$인 것과 $y = x$인 것은 같으므로 $d(x, y) = d(y, x)$이다. (iv) $x = z$이면 $d(x, z) = 0$이고 오른쪽은 $0$ 이상인 두 수의 합이므로 순서 성질 (2)의 (iii)에 의해 $0$ 이상이다. $x \ne z$이면 $d(x, z) = 1$이다. 이때 $y = x$이고 $y = z$이면 $x = z$가 되므로 $y \ne x$이거나 $y \ne z$이다. $y \ne x$이면 $d(x, y) = 1$이고 $0 \le d(y, z)$이므로 순서 성질 (2)의 (i)에 의해 $1 = 1 + 0 \le d(x, y) + d(y, z)$이다. $y \ne z$이면 같은 방식으로 $1 = 0 + 1 \le d(x, y) + d(y, z)$이다.

**(3).** $(y, y') \in Y \times Y$이면 $y, y' \in Y \subseteq X$이므로 [[cartesian-product|곱집합]]의 정의에 의해 $(y, y') \in X \times X$이다. 곧 $Y \times Y \subseteq X \times X$이다. [[adding-or-removing-an-element]]의 함수의 제한에 의해 $d_Y$는 $Y \times Y$에서 $\mathbb{R}$로의 함수이고 $d_Y(y, y') = d(y, y')$이다. $Y$의 점 $x$, $y$, $z$는 $X$의 점이므로 $d$에 대한 네 조건이 성립하고, $d_Y$의 값이 $d$의 값과 같으므로 $d_Y$에 대한 네 조건도 성립한다.

**(4).** 각 $(p, q)$에서 두 값은 실수 하나로 정해지므로 $d_{\max}$와 $d_{\mathrm{sum}}$은 $(X_1 \times X_2) \times (X_1 \times X_2)$에서 $\mathbb{R}$로의 함수이다. $X_1 \times X_2$의 점 $p$, $q$, $r$에 대하여 $p = (p_1, p_2)$, $q = (q_1, q_2)$, $r = (r_1, r_2)$로 쓰고 $\alpha = d_1(p_1, q_1)$, $\beta = d_2(p_2, q_2)$라 하자. $d_1$, $d_2$의 조건 (i)에 의해 $0 \le \alpha$, $0 \le \beta$이다. 또 [[cartesian-product|곱집합]]의 정의에 의해 $p = q$인 것은 정확히 $p_1 = q_1$이고 $p_2 = q_2$일 때이다.

최대 거리. (i) [[absolute-value]]의 (10)에 의해 $\alpha \le \max\{\alpha, \beta\}$이므로 순서 성질 (1)의 (v)에 의해 $0 \le d_{\max}(p, q)$이다. (ii) $p = q$이면 $d_1$, $d_2$의 (ii)에 의해 $\alpha = \beta = 0$이고, $\max\{\alpha, \beta\}$는 $\alpha$나 $\beta$이므로 $0$이다. 거꾸로 $d_{\max}(p, q) = 0$이면 $0 \le \alpha \le \max\{\alpha, \beta\} = 0$이므로 순서 성질 (1)의 (ii)에 의해 $\alpha = 0$이고, 같은 방식으로 $\beta = 0$이다. $d_1$, $d_2$의 (ii)에 의해 $p_1 = q_1$, $p_2 = q_2$이므로 $p = q$이다. (iii) $d_1$, $d_2$의 (iii)에 의해 두 성분의 거리가 $p$와 $q$를 바꾸어도 같으므로 최대도 같다. (iv) $d_1$의 (iv)와 [[absolute-value]]의 (10)에 의해
$$
d_1(p_1, r_1) \le d_1(p_1, q_1) + d_1(q_1, r_1) \le d_{\max}(p, q) + d_{\max}(q, r)
$$
이다(뒤 부등식은 순서 성질 (2)의 (iii)). 같은 방식으로 $d_2(p_2, r_2) \le d_{\max}(p, q) + d_{\max}(q, r)$이다. [[absolute-value]]의 (10)에 의해 두 수가 모두 $c$ 이하이면 최대도 $c$ 이하이므로 $d_{\max}(p, r) \le d_{\max}(p, q) + d_{\max}(q, r)$이다.

합 거리. (i) $0 \le \alpha$, $0 \le \beta$이므로 순서 성질 (2)의 (iii)에 의해 $0 = 0 + 0 \le \alpha + \beta$이다. (ii) $p = q$이면 $\alpha = \beta = 0$이므로 $d_{\mathrm{sum}}(p, q) = 0$이다. 거꾸로 $\alpha + \beta = 0$이면, $0 \le \beta$의 양변에 $\alpha$를 더해 (순서 성질 (2)의 (i)) $\alpha \le \alpha + \beta = 0$이고 $0 \le \alpha$이므로 순서 성질 (1)의 (ii)에 의해 $\alpha = 0$이다. 그러면 $\beta = 0$이다. 따라서 $p_1 = q_1$, $p_2 = q_2$이고 $p = q$이다. (iii) 최대 거리와 같다. (iv) $d_1$, $d_2$의 (iv)를 더하면 순서 성질 (2)의 (iii)에 의해
$$
d_1(p_1, r_1) + d_2(p_2, r_2) \le \bigl(d_1(p_1, q_1) + d_1(q_1, r_1)\bigr) + \bigl(d_2(p_2, q_2) + d_2(q_2, r_2)\bigr)
$$
이고, 오른쪽을 (K1), (K2)로 바꾸어 묶으면 $d_{\mathrm{sum}}(p, q) + d_{\mathrm{sum}}(q, r)$이다.

**(6).** $A = a_1^2 + a_2^2$, $B = b_1^2 + b_2^2$, $t = a_1 b_1 + a_2 b_2$라 하자. 순서 성질 (5)의 (iii)에 의해 제곱은 $0$ 이상이므로 순서 성질 (2)의 (iii)에 의해 $0 \le A$, $0 \le B$이고 $\sqrt{A}$, $\sqrt{B}$가 정해진다. (K1)–(K3), (K9), (K12)로 전개하면
$$
AB = a_1^2 b_1^2 + a_1^2 b_2^2 + a_2^2 b_1^2 + a_2^2 b_2^2, \qquad tt = a_1^2 b_1^2 + 2 a_1 b_1 a_2 b_2 + a_2^2 b_2^2
$$
이므로 $AB - tt = a_1^2 b_2^2 - 2 a_1 b_2 a_2 b_1 + a_2^2 b_1^2 = (a_1 b_2 - a_2 b_1)^2$이고, 순서 성질 (5)의 (iii)에 의해 $0 \le AB - tt$, 곧 순서 성질 (3)의 (i)에 의해 $tt \le AB$이다. $u = \sqrt{A}\sqrt{B}$라 하면 순서 성질 (4)의 (iv)에 의해 $0 \le u$이고, (K1), (K2)와 제곱근의 정의에 의해 $uu = (\sqrt{A}\sqrt{A})(\sqrt{B}\sqrt{B}) = AB$이다. [[absolute-value]]의 (5)에 의해 $|t|\,|t| = tt \le AB = uu$이고, $0 \le |t|$, $0 \le u$이므로 순서 성질 (7)의 (iii)에 의해 $|t| \le u$이다. 또 [[absolute-value]]의 (6)에 의해 $t \le |t|$이다.

**(5).** $d_{\max}$와 $d_{\mathrm{sum}}$은 (4)에서 $(X_1, d_1)$과 $(X_2, d_2)$를 모두 (1)의 $(\mathbb{R}, d)$로 둔 것이므로 거리이다. 유클리드 거리를 보자. $\mathbb{R} \times \mathbb{R}$의 점 $p$, $q$에 대하여 $s = (p_1 - q_1)^2 + (p_2 - q_2)^2$이라 하면, 순서 성질 (5)의 (iii)과 순서 성질 (2)의 (iii)에 의해 $0 \le s$이므로 [[square-root-exists]]의 (1)에 의해 $\sqrt{s}$가 정해지고 $d_E$는 함수이다.

(i) 제곱근의 정의에 의해 $0 \le d_E(p, q)$이다. (ii) $0 \le 0$이고 $0 \cdot 0 = 0$이므로((K9)) 제곱근의 유일성에 의해 $\sqrt{0} = 0$이다. 거꾸로 $\sqrt{s} = 0$이면 $s = \sqrt{s}\sqrt{s} = 0$이다. 따라서 $d_E(p, q) = 0$인 것은 정확히 $s = 0$일 때이다. 순서 성질 (5)의 (iv)에 의해 $s = 0$이면 $p_1 - q_1 = 0$이고 $p_2 - q_2 = 0$이며, 거꾸로 둘 다 $0$이면 $s = 0 + 0 = 0$이다. (K12)의 (v)에 의해 이것은 정확히 $p_1 = q_1$이고 $p_2 = q_2$일 때, 곧 $p = q$일 때이다. (iii) (K9), (K12)의 (iv)에 의해 $q_i - p_i = -(p_i - q_i)$이고 (K12)의 (iii)에 의해 $(-(p_i - q_i))^2 = (p_i - q_i)^2$이므로($i = 1, 2$) $d_E(q, p) = d_E(p, q)$이다. (iv) $\mathbb{R} \times \mathbb{R}$의 점 $p$, $q$, $r$에 대하여 $a_i = p_i - q_i$, $b_i = q_i - r_i$($i = 1, 2$)라 하면 $p_i - r_i = a_i + b_i$이다. $u = d_E(p, q) = \sqrt{a_1^2 + a_2^2}$, $v = d_E(q, r) = \sqrt{b_1^2 + b_2^2}$, $w = d_E(p, r)$이라 하자. (K1)–(K3)로 전개하고 (6)을 쓰면
$$
ww = (a_1 + b_1)^2 + (a_2 + b_2)^2 = uu + vv + 2(a_1 b_1 + a_2 b_2) \le uu + vv + 2uv = (u + v)(u + v)
$$
이다. 가운데 부등식은 (6)의 $a_1 b_1 + a_2 b_2 \le uv$의 양변에 $2$를 곱하고($0 \le 2$와 순서 성질 (4)의 (iii)) $uu + vv$를 더한 것이다(순서 성질 (2)의 (i)). $0 \le w$이고 순서 성질 (2)의 (iii)에 의해 $0 \le u + v$이므로 순서 성질 (7)의 (iii)에 의해 $w \le u + v$이다.

**(7).** $\alpha = |p_1 - q_1|$, $\beta = |p_2 - q_2|$, $m = \max\{\alpha, \beta\}$라 하자. [[absolute-value]]의 (2)에 의해 $0 \le \alpha$, $0 \le \beta$이고, 같은 항목의 (10)에 의해 $0 \le \alpha \le m$이다. 같은 항목의 (5)에 의해 $\alpha\alpha = (p_1 - q_1)^2$, $\beta\beta = (p_2 - q_2)^2$이므로 $d_E(p, q) = \sqrt{\alpha\alpha + \beta\beta}$이고 $d_E(p, q)\,d_E(p, q) = \alpha\alpha + \beta\beta$이다.

$m \le d_E(p, q)$: $m$은 $\alpha$나 $\beta$이다. $m = \alpha$이면 $0 \le \beta\beta$이므로 $mm = \alpha\alpha \le \alpha\alpha + \beta\beta$이고(순서 성질 (2)의 (i)), $m = \beta$일 때도 같다. $0 \le m$, $0 \le d_E(p, q)$이므로 순서 성질 (7)의 (iii)에 의해 $m \le d_E(p, q)$이다.

$d_E(p, q) \le \alpha + \beta$: (K1)–(K3)에 의해 $(\alpha + \beta)(\alpha + \beta) = \alpha\alpha + \beta\beta + 2\alpha\beta$이고, 순서 성질 (4)의 (iv)에 의해 $0 \le \alpha\beta$, 다시 순서 성질 (4)의 (iv)에 의해 $0 \le 2\alpha\beta$이므로 $\alpha\alpha + \beta\beta \le (\alpha + \beta)(\alpha + \beta)$이다. $0 \le \alpha + \beta$이므로 순서 성질 (7)의 (iii)에 의해 $d_E(p, q) \le \alpha + \beta = d_{\mathrm{sum}}(p, q)$이다.

$d_{\mathrm{sum}}(p, q) \le 2m$: $\alpha \le m$, $\beta \le m$이므로 순서 성질 (2)의 (iii)에 의해 $\alpha + \beta \le m + m = 2m$이다.
:::

## 예시와 반례

:::example[한 점 쌍의 세 거리]
$\mathbb{R} \times \mathbb{R}$의 두 점 $p = (0, 0)$, $q = (3, 4)$에서 $|p_1 - q_1| = 3$, $|p_2 - q_2| = 4$입니다. 따라서 $d_{\max}(p, q) = 4$, $d_{\mathrm{sum}}(p, q) = 7$입니다. $3^2 + 4^2 = 9 + 16 = 25$이고 $5 \cdot 5 = 25$, $0 \le 5$이므로 제곱근의 유일성에 의해 $d_E(p, q) = \sqrt{25} = 5$입니다. (7)의 부등식은 $4 \le 5 \le 7 \le 8$입니다.
:::

:::example[같은 집합 위의 다른 거리]
$\mathbb{R}$ 위에서 두 수 $0$과 $1/1000$ 사이의 거리는 보통 거리로는 $1/1000$이지만, 이산 거리로는 $0 \ne 1/1000$이므로 $1$입니다. 거꾸로 $0$과 $1000$ 사이의 거리는 보통 거리로 $1000$, 이산 거리로 $1$입니다. 같은 집합이라도 어떤 거리를 주었는지에 따라 "가까운 점"이 달라집니다.
:::

:::counterexample[첫 성분만 보는 함수는 서로 다른 두 점에 0을 줄 수 있다]
$\mathbb{R} \times \mathbb{R}$ 위에서 $e(p, q) = |p_1 - q_1|$로 정하면 (i), (iii), (iv)는 이 항목의 (1)과 같은 이유로 성립합니다. 그러나 $p = (0, 0)$, $q = (0, 1)$은 서로 다른 점인데 $e(p, q) = 0$이므로 (ii)가 깨집니다. $e$는 거리가 아닙니다.
:::

:::counterexample[가는 값과 오는 값이 다른 함수]
서로 다른 두 대상 $p$, $q$의 집합 $X = \{p, q\}$에서 $e(p, q) = 1$, $e(q, p) = 2$, $e(p, p) = e(q, q) = 0$으로 정합니다. (i), (ii)는 표에서 보입니다. (iv) $e(x, z) \le e(x, y) + e(y, z)$는 $x = z$이면 왼쪽이 $0$이라 성립하고, $x \ne z$이면 $X$에 점이 둘뿐이라 $y$가 $x$나 $z$와 같아서 오른쪽의 한 항이 $0$, 다른 항이 $e(x, z)$이므로 성립합니다. 그러나 $e(p, q) \ne e(q, p)$이므로 (iii)이 깨집니다.
:::

:::counterexample[거리의 제곱은 삼각부등식을 깰 수 있다]
$\mathbb{R}$ 위에서 $e(x, y) = (x - y)^2$으로 정하면 (i), (ii), (iii)은 이 항목의 (5)의 증명과 같은 이유로 성립합니다. 그러나 $e(0, 2) = 4$이고 $e(0, 1) + e(1, 2) = 1 + 1 = 2$이므로 (iv)가 깨집니다.
:::

:::remark[조건 (i)만 깨지는 함수는 없다]
위의 세 반례는 각각 (ii), (iii), (iv) 하나만 깨뜨립니다. (i) 하나만 깨뜨리는 함수는 찾을 수 없습니다. [[metric-space]]의 (5)에 의해 (ii), (iii), (iv)를 만족하는 함수는 (i)도 만족하기 때문입니다.
:::

## 확인 질문

:::check[$\mathbb{R}$ 위에서 $e(x, y) = 2|x - y|$는 거리인가?]
거리입니다. (i) $0 \le |x - y|$에 $0 < 2$를 곱하면 $0 \le 2|x - y|$입니다. (ii) $2|x - y| = 0$이면 $2 \ne 0$이므로 (K10)에 의해 $|x - y| = 0$, 곧 $x = y$이고, 거꾸로 $x = y$이면 $2 \cdot 0 = 0$입니다. (iii)은 $|x - y| = |y - x|$에서 나옵니다. (iv)는 $|x - z| \le |x - y| + |y - z|$의 양변에 $2$를 곱하고 분배법칙을 쓰면 됩니다.
:::

:::check[집합 $X$에 이산 거리를 주고 $Y \subseteq X$에 부분공간 거리를 주면 $Y$ 위의 거리는 무엇인가?]
$Y$ 위의 이산 거리입니다. $Y$의 점 $y$, $y'$에서 $d_Y(y, y') = d(y, y')$이므로 $y = y'$이면 $0$, $y \ne y'$이면 $1$입니다.
:::
