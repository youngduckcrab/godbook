---
title: 두 완비 거리공간의 곱
title_en: Product of Two Complete Metric Spaces
aliases: [곱공간의 완비성, completeness of a product, ℝ × ℝ 의 완비성, 성분별 코시 수열]
kind: theorem
field: topology
msc: ["54E50", "54B10"]
level: undergrad
summary: 두 거리공간의 곱에 최대 거리를 주면, 수열이 코시 수열인 것과 수렴하는 것은 두 성분의 수열에서 따로 따질 수 있다. 그래서 두 완비 거리공간의 곱은 최대 거리와 합 거리로 완비이고, 거꾸로 두 인자가 공집합이 아니면 곱이 완비일 때 두 인자도 완비이다. ℝ × ℝ 은 최대 거리, 합 거리, 유클리드 거리로 완비이다.
requires: [cartesian-product, function-composition, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, natural-numbers-are-infinite, archimedean-property, sequence, basic-limits, metric-space, metric-space-examples, max-metric-and-product-topology, sequence-in-a-space, convergence-in-metric-spaces, bounded-sequence-in-metric-space, cauchy-sequence-in-metric-space, cauchy-subsequence-and-limit, complete-metric-space, product-topology]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4절 7.4.1소절 Proposition 7.4.4 와 증명 (p.279); 7.3절 7.3.2소절 Proposition 7.3.9 (p.276); 7.1.1소절 연습문제 7.1.6 (p.262); 7.3.4소절 연습문제 7.3.14 (p.278)"
    checked: original
    note: "출처 Proposition 7.4.4(p.279)는 유클리드 거리를 준 ℝⁿ 이 완비라는 것이고, 증명은 성분의 차가 거리 이하라는 것으로 성분의 수열이 코시임을 보이고, ℝ 의 완비성으로 성분마다 극한을 얻은 뒤 Proposition 7.3.9(p.276: ℝⁿ 의 수열은 모든 성분이 수렴할 때 정확히 수렴한다)로 수열의 수렴을 얻는다. 이 항목은 일반의 ℝⁿ 과 n 개 항의 유클리드 거리 대신 두 거리공간의 곱과 최대 거리로 같은 경로를 따른다((1), (2)). (1)의 수렴 부분은 Proposition 7.3.9 를 두 인자의 곱과 최대 거리로 적은 것이고, 출처 Example 7.3.10(p.276: ℂ 를 ℝ² 로 보면 z_n = x_n + iy_n 이 z 로 수렴하는 것은 정확히 x_n, y_n 이 각각 수렴할 때)은 그 명제를 두 성분에 쓴 예이다. 곱 위의 합 거리와 최대 거리가 거리라는 것은 출처 연습문제 7.1.6(p.262)이고, 이 사이트에서는 metric-space-examples 의 (4)이다. (4)의 세 거리를 견주는 것은 출처 연습문제 7.3.14(p.278: ℝⁿ 의 세 거리에서 수렴하는 수열이 같다)와 같은 발상을 완비성에 쓴 것이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 단원 항목을 인용하던 근거 2곳을 앞 단원의 것으로 바꾸고 이름 없이 쓴 근거 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간, 곱집합 위의 최대 거리 $d_{\max}$와 합 거리 $d_{\mathrm{sum}}$, $\mathbb{R} \times \mathbb{R}$의 유클리드 거리 $d_E$는 [[metric-space]], [[metric-space-examples]]의 것이다. 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 거리공간에는 늘 거리위상을 준다. 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이고, 완비는 [[complete-metric-space]]의 것이다. 아래에서 $(X_1, d_1)$, $(X_2, d_2)$는 거리공간이고, 곱집합 $X_1 \times X_2$에는 따로 밝히지 않으면 최대 거리 $d_{\max}$를 준다.

**성분의 수열.** 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이다($\pi_1(x, y) = x$, $\pi_2(x, y) = y$). $(z_n)$이 $X_1 \times X_2$의 수열이면 각 $z_n$은 순서쌍이다. $z_n$의 첫째 성분을 $a_n$, 둘째 성분을 $b_n$이라 하면 $z_n = (a_n, b_n)$이고, $(a_n)$은 $X_1$의 수열, $(b_n)$은 $X_2$의 수열이다(사영과의 합성 $\pi_1 \circ z$, $\pi_2 \circ z$). 이것을 $(z_n)$의 **성분의 수열**이라 한다.

1. (성분별로 보기) $(z_n)$이 $X_1 \times X_2$의 수열이고 $z_n = (a_n, b_n)$이라 하자.
   - (i) $(z_n)$이 코시 수열인 것은 정확히 $(a_n)$이 $(X_1, d_1)$의 코시 수열이고 $(b_n)$이 $(X_2, d_2)$의 코시 수열일 때이다.
   - (ii) $p \in X_1$, $q \in X_2$이면, $(z_n)$이 $(p, q)$로 수렴하는 것은 정확히 $(a_n)$이 $p$로 수렴하고 $(b_n)$이 $q$로 수렴할 때이다.
2. (두 완비 공간의 곱) $(X_1, d_1)$과 $(X_2, d_2)$가 완비이면 $(X_1 \times X_2, d_{\max})$와 $(X_1 \times X_2, d_{\mathrm{sum}})$은 완비이다.
3. (거꾸로) $X_1$과 $X_2$가 모두 공집합이 아니고 $(X_1 \times X_2, d_{\max})$가 완비이면, $(X_1, d_1)$과 $(X_2, d_2)$는 완비이다. 한 인자가 공집합이면 $X_1 \times X_2 = \emptyset$이고, 이때 $(X_1 \times X_2, d_{\max})$는 다른 인자에 상관없이 완비이다.
4. ($\mathbb{R} \times \mathbb{R}$) $\mathbb{R} \times \mathbb{R}$은 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$ 가운데 어느 거리로도 완비이다.
:::

:::english
Metric spaces, the max metric $d_{\max}$ and the sum metric $d_{\mathrm{sum}}$ on a product set, and the euclidean metric $d_E$ on $\mathbb{R} \times \mathbb{R}$ are as in the entries on metric spaces and examples of metric spaces. Sequences and convergence are as in the entry on sequences and convergence in a topological space, and a metric space always carries its metric topology. Cauchy sequences are as in the entry on Cauchy sequences in a metric space, and completeness is as in the entry on complete metric spaces. Below, $(X_1, d_1)$, $(X_2, d_2)$ are metric spaces, and unless stated otherwise the product set $X_1 \times X_2$ carries the max metric $d_{\max}$.

**Component sequences.** The projections $\pi_1$, $\pi_2$ are as in the entry on the product topology ($\pi_1(x, y) = x$, $\pi_2(x, y) = y$). If $(z_n)$ is a sequence in $X_1 \times X_2$, each $z_n$ is an ordered pair. If $a_n$ is the first and $b_n$ the second component of $z_n$, then $z_n = (a_n, b_n)$, $(a_n)$ is a sequence in $X_1$ and $(b_n)$ is a sequence in $X_2$ (the compositions $\pi_1 \circ z$, $\pi_2 \circ z$ with the projections). These are called the **component sequences** of $(z_n)$.

1. (Componentwise) Let $(z_n)$ be a sequence in $X_1 \times X_2$ with $z_n = (a_n, b_n)$.
   - (i) $(z_n)$ is a Cauchy sequence exactly when $(a_n)$ is a Cauchy sequence in $(X_1, d_1)$ and $(b_n)$ is a Cauchy sequence in $(X_2, d_2)$.
   - (ii) If $p \in X_1$ and $q \in X_2$, then $(z_n)$ converges to $(p, q)$ exactly when $(a_n)$ converges to $p$ and $(b_n)$ converges to $q$.
2. (The product of two complete spaces) If $(X_1, d_1)$ and $(X_2, d_2)$ are complete, then $(X_1 \times X_2, d_{\max})$ and $(X_1 \times X_2, d_{\mathrm{sum}})$ are complete.
3. (The converse) If $X_1$ and $X_2$ are both nonempty and $(X_1 \times X_2, d_{\max})$ is complete, then $(X_1, d_1)$ and $(X_2, d_2)$ are complete. If one factor is empty, then $X_1 \times X_2 = \emptyset$, and in that case $(X_1 \times X_2, d_{\max})$ is complete whatever the other factor is.
4. ($\mathbb{R} \times \mathbb{R}$) $\mathbb{R} \times \mathbb{R}$ is complete with each of $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$.
:::

## 직관

평면의 점이 움직이는 것을 지도 위에서 보면, 동서 방향의 움직임과 남북 방향의 움직임으로 나누어 볼 수 있습니다. 최대 거리는 두 방향의 차 가운데 큰 쪽이므로, 두 점이 최대 거리로 가깝다는 것은 두 방향 모두에서 가깝다는 것과 같습니다. 그래서 수열이 서로 붙어 가는지(코시), 어느 점에 모이는지(수렴)를 두 성분에서 따로 따질 수 있습니다((1)). 두 인자가 모두 완비이면, 코시 수열의 두 성분이 각각 모일 곳이 있고 그 두 곳을 짝지은 점이 곱에서 모일 곳이 됩니다((2)).

거꾸로 곱이 완비이면 인자도 완비인데, 이를 보이려면 한 인자의 수열에 다른 인자의 고정된 점 하나를 짝지어 곱의 수열을 만들어야 합니다. 다른 인자가 공집합이면 짝지을 점이 없고, 이때 곱은 공집합이라서 다른 인자가 완비가 아니어도 곱은 완비입니다. (3)에서 두 인자가 공집합이 아니라는 가정이 쓰이는 곳이 이 단계입니다.

## 증명

:::idea
최대 거리는 두 성분의 거리 이상이고, 두 성분의 거리가 모두 작으면 최대 거리도 작다. 이 두 부등식으로 코시와 수렴을 성분으로 옮기고, 두 번호는 합으로 넘긴다.
:::

:::hint
$d_1(a_n, a_k) \le d_{\max}(z_n, z_k)$와 $d_2(b_n, b_k) \le d_{\max}(z_n, z_k)$는 [[absolute-value]]의 (10)의 "$a \le \max\{a, b\}$"입니다.
:::

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "수렴 (n)"은 [[convergence-in-metric-spaces]]의 번호, "완비 (n)"은 [[complete-metric-space]]의 번호이다. 곱집합과 순서쌍은 [[cartesian-product]]의 것이다.

**성분의 수열.** $z : \mathbb{N} \to X_1 \times X_2$이고 $\pi_1 : X_1 \times X_2 \to X_1$, $\pi_2 : X_1 \times X_2 \to X_2$는 [[product-topology|두 공간의 곱위상]]의 사영이므로, [[function-composition]]에 의해 $\pi_1 \circ z : \mathbb{N} \to X_1$과 $\pi_2 \circ z : \mathbb{N} \to X_2$는 수열이고 그 $n$번째 항은 $a_n$, $b_n$이다. [[metric-space-examples]]의 (4)에 의해 모든 $n$, $k$에서
$$
\begin{aligned}
d_{\max}(z_n, z_k) &= \max\{d_1(a_n, a_k), \\
&\qquad\ d_2(b_n, b_k)\}
\end{aligned}
$$
이고, 같은 식이 $z_k$ 대신 $(p, q)$에도 성립한다. 아래에서 다음 두 사실을 쓴다. (가) 절댓값 (10)에 의해 $d_1(a_n, a_k) \le d_{\max}(z_n, z_k)$이고 $d_2(b_n, b_k) \le d_{\max}(z_n, z_k)$이다. (나) 절댓값 (10)에 의해 $\max\{s, t\}$는 $s$이거나 $t$이므로, $s < \varepsilon$이고 $t < \varepsilon$이면 $\max\{s, t\} < \varepsilon$이다.

**(1)의 (i).** $(z_n)$이 코시 수열이라 하고 $\varepsilon$을 양의 실수라 하자. $n \ge M$, $k \ge M$이면 $d_{\max}(z_n, z_k) < \varepsilon$인 자연수 $M$이 있고, (가)와 순서 성질 (1)의 (v)에 의해 이 $n$, $k$에서 $d_1(a_n, a_k) < \varepsilon$, $d_2(b_n, b_k) < \varepsilon$이다. 따라서 $(a_n)$, $(b_n)$은 코시 수열이다.

거꾸로 $(a_n)$, $(b_n)$이 코시 수열이라 하고 $\varepsilon$을 양의 실수라 하자. $n, k \ge M_1$이면 $d_1(a_n, a_k) < \varepsilon$인 자연수 $M_1$과, $n, k \ge M_2$이면 $d_2(b_n, b_k) < \varepsilon$인 자연수 $M_2$가 있다. $M = M_1 + M_2$로 두면 $M_1$, $M_2$는 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술) $M \ge M_1$이고 $M \ge M_2$이다. $n, k \ge M$이면 두 부등식이 모두 성립하므로 (나)에 의해 $d_{\max}(z_n, z_k) < \varepsilon$이다. 따라서 $(z_n)$은 코시 수열이다.

**(1)의 (ii).** 같은 논증을 수렴 (1)의 꼴에 쓴다. $(z_n)$이 $(p, q)$로 수렴하면, $\varepsilon$에 대하여 $n \ge M$이면 $d_{\max}(z_n, (p, q)) < \varepsilon$인 $M$이 있고, (가)에 의해 이 $n$에서 $d_1(a_n, p) < \varepsilon$, $d_2(b_n, q) < \varepsilon$이다. 수렴 (1)에 의해 $(a_n)$은 $p$로, $(b_n)$은 $q$로 수렴한다. 거꾸로 두 성분의 수열이 수렴하면, 수렴 (1)이 주는 두 번호 $M_1$, $M_2$의 합 $M = M_1 + M_2$에 대하여 $n \ge M$이면 (나)에 의해 $d_{\max}(z_n, (p, q)) < \varepsilon$이고, 수렴 (1)에 의해 $(z_n)$은 $(p, q)$로 수렴한다.

**(2).** $(z_n)$을 $(X_1 \times X_2, d_{\max})$의 코시 수열이라 하자. (1)의 (i)에 의해 $(a_n)$, $(b_n)$은 코시 수열이고, $X_1$, $X_2$가 완비이므로 $(a_n)$은 어떤 $p \in X_1$로, $(b_n)$은 어떤 $q \in X_2$로 수렴한다. $(p, q) \in X_1 \times X_2$이고 (1)의 (ii)에 의해 $(z_n)$은 $(p, q)$로 수렴한다. 따라서 $(X_1 \times X_2, d_{\max})$는 완비이다.

[[max-metric-and-product-topology|최대 거리와 곱위상]]의 (1)에 의해 모든 점 $p$, $q$에서 $d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이고 $d_{\max}(p, q) \le 1 \cdot d_{\mathrm{sum}}(p, q)$이다. 완비 (5)를 $c = 2$, $c' = 1$에 쓰면 $(X_1 \times X_2, d_{\mathrm{sum}})$도 완비이다.

**(3).** $X_2$가 공집합이 아니므로 그 점 $y_0$ 하나를 잡는다. $(a_n)$을 $(X_1, d_1)$의 코시 수열이라 하고, $n$번째 항이 $z_n = (a_n, y_0)$인 $X_1 \times X_2$의 수열을 둔다(각 항이 이미 정해진 순서쌍이다). 그 성분의 수열은 $(a_n)$과 모든 항이 $y_0$인 상수 수열이다. 상수 수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 수렴하고 [[cauchy-sequence-in-metric-space]]의 (3)에 의해 코시 수열이므로, (1)의 (i)에 의해 $(z_n)$은 코시 수열이다. 곱이 완비이므로 $(z_n)$은 어떤 점 $(p, q)$로 수렴하고, (1)의 (ii)에 의해 $(a_n)$은 $p \in X_1$로 수렴한다. 따라서 $(X_1, d_1)$은 완비이다. $X_1$의 점 $x_0$ 하나를 잡아 $(x_0, b_n)$으로 같은 논증을 하면 $(X_2, d_2)$도 완비이다.

한 인자, 예컨대 $X_2$가 공집합이면 $(x, y) \in X_1 \times X_2$이려면 $y \in X_2$여야 하므로 $X_1 \times X_2$는 원소가 없다. $X_1$이 공집합일 때도 같다. 이때 $d_{\max}$는 공집합에서의 함수이므로 공집합이고, 완비 (3)의 (i)에 의해 $(\emptyset, \emptyset)$은 완비이다.

**(4).** [[metric-space-examples]]의 (5)에 의해 $\mathbb{R} \times \mathbb{R}$ 위의 $d_{\max}$와 $d_{\mathrm{sum}}$은 보통 거리 둘로 만든 (4)의 최대 거리와 합 거리이다. 완비 (2)에 의해 $\mathbb{R}$은 완비이므로, 이 항목의 (2)에 의해 $\mathbb{R} \times \mathbb{R}$은 $d_{\max}$와 $d_{\mathrm{sum}}$으로 완비이다. [[metric-space-examples]]의 (7)에 의해 모든 점에서 $d_{\max} \le d_E \le d_{\mathrm{sum}} \le 2\, d_{\max}$이므로, 순서 성질 (1)의 (v)에 의해 $d_E \le 2\, d_{\max}$이고 $d_{\max} \le 1 \cdot d_E$이다. 완비 (5)를 $c = 2$, $c' = 1$에 쓰면 $\mathbb{R} \times \mathbb{R}$은 $d_E$로도 완비이다.
:::

## 예시와 반례

:::example[성분이 상수인 곱의 수열]
$\mathbb{R} \times \mathbb{R}$에 $d_{\max}$를 주고 $z_n = (n^{-1}, 3)$인 수열을 봅시다. 첫째 성분의 수열 $(n^{-1})$은 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 $0$으로 수렴하고, 둘째 성분은 모든 항이 $3$인 상수 수열이라 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 $3$으로 수렴합니다. (1)의 (ii)에 의해 $(z_n)$은 $(0, 3)$으로 수렴하고, [[cauchy-sequence-in-metric-space]]의 (3)에 의해 코시 수열입니다.
:::

:::counterexample[한 인자가 공집합인 곱]
$X_1 = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리를 주면 [[complete-metric-space]]의 (4)에 의해 완비가 아닙니다. 그러나 $X_2 = \emptyset$이면 $X_1 \times X_2 = \emptyset$이고 (3)의 뒤 문장에 의해 곱은 완비입니다. 그래서 (3)에서 두 인자가 공집합이 아니라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$X_1$이 완비가 아니고 $X_2$가 공집합이 아니면 $(X_1 \times X_2, d_{\max})$는 완비일 수 있는가?]
없습니다. $X_1$이 완비가 아니면 $X_1$은 공집합이 아닙니다([[complete-metric-space]]의 (3)의 (i)에 의해 공집합 공간은 완비입니다). 그러면 두 인자가 모두 공집합이 아니므로, 곱이 완비라면 (3)에 의해 $X_1$이 완비여야 해서 어긋납니다.
:::

:::check[$\mathbb{R} \times \mathbb{R}$에 $d_E$를 줄 때 $n$번째 항이 $(n^{-1}, n)$인 수열은 코시 수열인가?]
아닙니다. $d_E$로 코시라면 [[metric-space-examples]]의 (7)의 부등식 $d_{\max} \le 1 \cdot d_E$와 [[cauchy-subsequence-and-limit]]의 (4)의 (i)에 의해 $d_{\max}$로도 코시이고, (1)의 (i)에 의해 둘째 성분의 실수열 $(n)$이 코시여야 합니다. 그러나 $(n)$은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 [[sequence]]의 뜻으로 유계가 아니고 [[bounded-sequence-in-metric-space]]의 (2)에 의해 보통 거리로도 유계가 아니므로 [[cauchy-sequence-in-metric-space]]의 (4)의 대우에 의해 코시 수열이 아닙니다.
:::
