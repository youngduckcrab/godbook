---
title: 복소평면의 거리
title_en: The Metric on the Complex Plane
aliases: [복소수의 거리, 복소평면의 열린 공, 열린 원판, 닫힌 원판, metric on the complex plane, open disc, closed disc]
kind: proposition
field: complex-analysis
msc: ["30", "54E35"]
level: undergrad
summary: 복소수 z, w 사이의 거리를 |z − w| 로 정하면, 이것은 ℝ × ℝ 위의 유클리드 거리 그 자체이므로 ℂ 는 거리공간이고 그 위상은 ℝ × ℝ 의 보통 위상이다. 열린 공과 닫힌 공, 유계인 부분집합을 절댓값으로 읽고, 평행이동·곱·켤레가 거리를 어떻게 바꾸는지와 ι 가 거리를 보존한다는 것을 진술한다.
requires: [cartesian-product, function, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, ring, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, metric-space, metric-space-examples, open-ball, topology-examples, product-topology, max-metric-and-product-topology, compact-metric-closed-and-bounded, cauchy-subsequence-and-limit, square-root-exists, power-of-a-real-number, archimedean-property]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.1소절 The complex plane (p.140); 10.1절 10.1.5소절 Integration of functions with compact support, Example 10.1.16 과 Example 10.1.17 (p.99); 8.2절 Analysis with vector spaces, 8.2.4소절 Exercises 8.2.3, 8.2.4 (p.31), Exercise 8.2.13 (p.33); 11.3절 11.3.6소절 Exercise 11.3.11 (p.162)"
    checked: original
    note: "출처(p.140)는 ℂ 가 ℝ² 이므로 ℂ 의 거리를 ℝ² 의 표준 유클리드 거리로 둔다고 하고, 그래서 |z| = d(z, 0), |z − w| = d(z, w) 이며 ℂ 의 위상은 유클리드 거리를 준 ℝ² 의 표준 위상과 같다고 적는다. 증명은 없다. 이 항목은 거리를 d(z, w) = |z − w| 로 정한 뒤 그것이 유클리드 거리 d_E 와 같은 함수임을 계산으로 보이고((1)), 위상이 ℝ × ℝ 의 보통 위상이라는 것을 위상수학 입문의 항목으로 증명한다((2)). 출처의 ℝ² 는 ℝ × ℝ 로 옮긴다. 출처는 같은 자리에서 ℂ 가 완비라는 것과 두 꼴의 삼각부등식도 적는데, 완비성은 이 강의의 복소수열의 수렴 항목에 둔다. 출처는 10.1.5소절의 Example 10.1.16 과 10.1.17(p.99)에서 ℝ² 의 C(0, 1) 과 B(0, 1) 을 closed unit disc, unit disc 라 부른다. 별칭의 '원판'은 그 말을 옮긴 것이다. 11.3.6소절 Exercise 11.3.11(p.162)도 ℂ 의 B(0, 1) 을 unit disc 𝔻 라 부른다. 8.2.4소절 Exercises 8.2.3, 8.2.4(p.31)는 ℝⁿ 위의 max norm ∥x∥∞ 와 1-norm ∥x∥₁(taxicab distance)이 노름임을 보이게 하고, Exercise 8.2.13(p.33)은 유한차원 공간의 두 노름이 상수배로 서로를 누르고 같은 열린집합을 준다는 것을 보이게 한다. (2)의 세 거리 d_max, d, d_sum 의 부등식과 위상의 일치는 ℝ² 에서 같은 내용이다."
  - ref: lebl-basic-analysis
    loc: "7.1절 Metric spaces, Example 7.1.6 (p.259); 7.1.1소절 Exercises 7.1.6 (p.262), 7.1.8 (p.262)"
    checked: original
    note: "출처 Example 7.1.6(p.259)은 극한을 다룰 때 ℂ 를 거리공간 ℝ² 로 보고, z₁ = x₁ + iy₁, z₂ = x₂ + iy₂ 사이의 거리가 √((x₁ − x₂)² + (y₁ − y₂)²) = |z₁ − z₂| 라고 계산한다. (1)의 계산과 같은 것이다. 출처는 이어서 |z₁ − z₂|² 를 켤레로 (z₁ − z₂) 와 그 켤레의 곱으로 쓰는데, 이것은 이 강의의 복소수의 절댓값 항목 (2)의 내용이다. 예시 '1 + 2i 와 4 − 2i 사이의 거리'는 이 예의 식에 수를 넣은 것과 같은 계산이다. Exercise 7.1.6(p.262)은 두 거리공간의 곱에 d_X + d_Y 와 max{d_X, d_Y} 가 거리임을 보이게 하는데, ℝ × ℝ 에서 이것이 (2)의 d_sum 과 d_max 이다. Exercise 7.1.8 a)(p.262)의 pseudometric 은 거리의 조건 가운데 d(x, y) = 0 이면 x = y 라는 것만 빠진 것이고, 반례 '절댓값의 차로 정한 함수가 거리가 아닌 예'의 함수가 바로 그 조건만 어기는 같은 종류의 함수이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(d 와 d_E 가 같은 함수라는 것, 꼬리판 역수의 극한 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이며, 켤레복소수 $\overline{z}$는 [[complex-conjugate]], 복소수의 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 거리공간, $\mathbb{R}$의 보통 거리, 부분공간 거리, $\mathbb{R} \times \mathbb{R}$ 위의 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(a, r)$와 닫힌 공 $C(a, r)$는 [[open-ball]], 거리위상 $\mathcal{T}_d$는 [[topology-examples]], 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]], $\mathbb{R} \times \mathbb{R}$의 보통 위상은 [[max-metric-and-product-topology|최대 거리와 곱위상]]의 (2)의 것이다. 거리공간의 부분집합이 유계라는 것은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 것이다.

**복소평면의 거리.** 복소수 $z$, $w$에 대하여
$$
d(z, w) = |z - w|
$$
로 정한 함수 $d : \mathbb{C} \times \mathbb{C} \to \mathbb{R}$([[recursion-theorem|재귀 정리]]의 (1)에 의해 식으로 정한 함수)를 $\mathbb{C}$의 **거리**(metric)라 한다. 이 강의에서 따로 밝히지 않으면 $\mathbb{C}$에는 이 거리와 그 거리위상 $\mathcal{T}_d$를 주고, $\mathbb{C}$의 부분집합에는 $d$의 부분공간 거리와 그 거리위상을 준다.

다음이 성립한다. 아래에서 $z$, $w$, $u$, $a$는 복소수이고, $x$, $y$는 실수, $r$은 $0 < r$인 실수이다.

1. (유클리드 거리 그 자체) $\mathbb{C}$는 곱집합 $\mathbb{R} \times \mathbb{R}$ 그 자체이므로 $\mathbb{C} \times \mathbb{C}$는 $(\mathbb{R} \times \mathbb{R}) \times (\mathbb{R} \times \mathbb{R})$이고, 모든 $z$, $w$에서 $a = \operatorname{Re} z - \operatorname{Re} w$, $b = \operatorname{Im} z - \operatorname{Im} w$로 두면
   $$
   |z - w| = \sqrt{a^2 + b^2} = d_E(z, w)
   $$
   이다. 곧 $d$는 $\mathbb{R} \times \mathbb{R}$ 위의 유클리드 거리 $d_E$와 같은 함수이다. 따라서 $(\mathbb{C}, d)$는 거리공간이다. 또 $|z| = d(z, 0)$이고 $|z - w| = |w - z|$이다.
2. (세 거리와 위상)
   $$
   \begin{aligned}
   d_{\max}(z, w) &\le d(z, w) \\
   &\le d_{\mathrm{sum}}(z, w) \\
   &\le 2\, d_{\max}(z, w)
   \end{aligned}
   $$
   이고, 여기서 $d_{\max}(z, w) = \max\{|\operatorname{Re} z - \operatorname{Re} w|,\ |\operatorname{Im} z - \operatorname{Im} w|\}$, $d_{\mathrm{sum}}(z, w) = |\operatorname{Re} z - \operatorname{Re} w| + |\operatorname{Im} z - \operatorname{Im} w|$이다. 거리위상 $\mathcal{T}_d$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상, 곧 $\mathbb{R}$의 보통 위상 둘의 곱위상과 같다. 또 $z$에서의 값이 $\operatorname{Re} z$인 함수 $\mathbb{C} \to \mathbb{R}$는 사영 $\pi_1 : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$와 같은 함수이고, $z$에서의 값이 $\operatorname{Im} z$인 함수는 $\pi_2$와 같은 함수이다.
3. (열린 공과 닫힌 공) $B(a, r) = \{z \in \mathbb{C} : |z - a| < r\}$이고 $C(a, r) = \{z \in \mathbb{C} : |z - a| \le r\}$이다. 특히 $B(0, r) = \{z \in \mathbb{C} : |z| < r\}$이고 $C(0, r) = \{z \in \mathbb{C} : |z| \le r\}$이다. 닫힌 공의 글자 $C$는 복소수 전체의 집합 $\mathbb{C}$와 다른 글자이다.
4. (유계인 부분집합) $S \subseteq \mathbb{C}$가 $(\mathbb{C}, d)$에서 유계인 것은 정확히 모든 $z \in S$에서 $|z| \le M$인 실수 $M$이 있을 때이다. 또 $S$가 $d$로 유계인 것은 정확히 $S$가 $d_{\max}$로 유계일 때이다.
5. (평행이동, 곱, 켤레) $d(z + u, w + u) = d(z, w)$이고 $d(uz, uw) = |u|\, d(z, w)$이며 $d(\overline{z}, \overline{w}) = d(z, w)$이다.
6. (실수인 복소수) $d(\iota(x), \iota(y)) = |x - y|$이다. 오른쪽은 실수의 절댓값, 곧 $\mathbb{R}$의 보통 거리로 잰 $x$와 $y$ 사이의 거리이다. 따라서 $\iota(\mathbb{R})$에 부분공간 거리를 주면 그 두 점 $\iota(x)$, $\iota(y)$ 사이의 거리는 $\mathbb{R}$의 보통 거리로 잰 $x$, $y$ 사이의 거리와 같다. 특히 $\iota(y) \in B(\iota(x), r)$인 것은 정확히 $|x - y| < r$일 때이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the complex conjugate $\overline{z}$ is that of the entry on complex conjugates, and the modulus $|z|$ is that of the entry on the modulus of a complex number. Metric spaces, the standard metric of $\mathbb{R}$, subspace metrics, and $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$ on $\mathbb{R} \times \mathbb{R}$ are those of the entries on metric spaces and examples of metric spaces; the open ball $B(a, r)$ and the closed ball $C(a, r)$ are those of the entry on open balls, the metric topology $\mathcal{T}_d$ is that of the entry on examples of topologies, the projections $\pi_1$, $\pi_2$ are those of the entry on the product topology of two spaces, and the standard topology of $\mathbb{R} \times \mathbb{R}$ is that of item (2) of the entry on the max metric and the product topology. Bounded subsets of a metric space are as in the theorem that compact sets of a metric space are closed and bounded.

**The metric on the complex plane.** The function $d : \mathbb{C} \times \mathbb{C} \to \mathbb{R}$ defined by
$$
d(z, w) = |z - w|
$$
for complex numbers $z$, $w$ (a function defined by a formula, by item (1) of the recursion theorem) is called the **metric** on $\mathbb{C}$. In this course, unless stated otherwise, $\mathbb{C}$ carries this metric and its metric topology $\mathcal{T}_d$, and subsets of $\mathbb{C}$ carry the subspace metric of $d$ and its metric topology.

The following hold. Below, $z$, $w$, $u$, $a$ are complex numbers, $x$, $y$ are real numbers, and $r$ is a real number with $0 < r$.

1. (The euclidean metric itself) Since $\mathbb{C}$ is the product set $\mathbb{R} \times \mathbb{R}$ itself, $\mathbb{C} \times \mathbb{C}$ is $(\mathbb{R} \times \mathbb{R}) \times (\mathbb{R} \times \mathbb{R})$, and for all $z$, $w$, writing $a = \operatorname{Re} z - \operatorname{Re} w$ and $b = \operatorname{Im} z - \operatorname{Im} w$,
   $$
   |z - w| = \sqrt{a^2 + b^2} = d_E(z, w).
   $$
   That is, $d$ is the same function as the euclidean metric $d_E$ on $\mathbb{R} \times \mathbb{R}$. Hence $(\mathbb{C}, d)$ is a metric space. Moreover $|z| = d(z, 0)$ and $|z - w| = |w - z|$.
2. (Three metrics and the topology)
   $$
   \begin{aligned}
   d_{\max}(z, w) &\le d(z, w) \\
   &\le d_{\mathrm{sum}}(z, w) \\
   &\le 2\, d_{\max}(z, w),
   \end{aligned}
   $$
   where $d_{\max}(z, w) = \max\{|\operatorname{Re} z - \operatorname{Re} w|,\ |\operatorname{Im} z - \operatorname{Im} w|\}$ and $d_{\mathrm{sum}}(z, w) = |\operatorname{Re} z - \operatorname{Re} w| + |\operatorname{Im} z - \operatorname{Im} w|$. The metric topology $\mathcal{T}_d$ equals the standard topology of $\mathbb{R} \times \mathbb{R}$, that is, the product topology of two copies of the standard topology of $\mathbb{R}$. Moreover the function $\mathbb{C} \to \mathbb{R}$ whose value at $z$ is $\operatorname{Re} z$ is the same function as the projection $\pi_1 : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$, and the function whose value at $z$ is $\operatorname{Im} z$ is the same function as $\pi_2$.
3. (Open and closed balls) $B(a, r) = \{z \in \mathbb{C} : |z - a| < r\}$ and $C(a, r) = \{z \in \mathbb{C} : |z - a| \le r\}$. In particular $B(0, r) = \{z \in \mathbb{C} : |z| < r\}$ and $C(0, r) = \{z \in \mathbb{C} : |z| \le r\}$. The letter $C$ of a closed ball is a different letter from the set $\mathbb{C}$ of all complex numbers.
4. (Bounded subsets) A subset $S \subseteq \mathbb{C}$ is bounded in $(\mathbb{C}, d)$ exactly when there is a real number $M$ with $|z| \le M$ for all $z \in S$. Moreover $S$ is bounded with respect to $d$ exactly when $S$ is bounded with respect to $d_{\max}$.
5. (Translation, multiplication, conjugation) $d(z + u, w + u) = d(z, w)$, $d(uz, uw) = |u|\, d(z, w)$, and $d(\overline{z}, \overline{w}) = d(z, w)$.
6. (Real complex numbers) $d(\iota(x), \iota(y)) = |x - y|$. The right-hand side is the absolute value of a real number, that is, the distance between $x$ and $y$ in the standard metric of $\mathbb{R}$. Hence if $\iota(\mathbb{R})$ is given the subspace metric, the distance between two of its points $\iota(x)$, $\iota(y)$ equals the distance between $x$ and $y$ in the standard metric of $\mathbb{R}$. In particular, $\iota(y) \in B(\iota(x), r)$ exactly when $|x - y| < r$.
:::

## 직관

복소수 $z = (a, b)$, $w = (p, q)$를 평면의 점으로 그리면, 두 복소수 사이의 거리는 두 점을 잇는 선분의 길이로 재는 것이 자연스럽습니다. 가로 차 $a - p$와 세로 차 $b - q$로 만든 직각삼각형의 빗변이 그 길이이고, 그것이 바로 차 $z - w$의 절댓값입니다. 그래서 새 거리를 만드는 것이 아니라, 위상수학 입문에서 $\mathbb{R} \times \mathbb{R}$ 위에 정의한 유클리드 거리를 복소수의 말로 다시 읽는 것입니다((1)). 이 읽기 덕분에 위상수학 입문과 거리공간 강의가 $\mathbb{R} \times \mathbb{R}$에 대해 증명한 것을 복소수에 그대로 쓸 수 있습니다.

비유가 맞아떨어지는 곳은 "빗변은 어느 한 변보다 짧지 않고 두 변의 합보다 길지 않다"는 것입니다. 이것이 (2)의 앞의 두 부등식이고, 세 거리가 같은 위상을 준다는 것도 이 부등식에서 나옵니다. 두 점이 가로로만 떨어져 있으면 빗변이 가로 변과 같아져 앞의 두 부등식이 모두 등호가 되고, 두 점이 같으면 세 거리가 모두 $0$입니다.

복소수의 연산과 거리의 관계도 그림으로 볼 수 있습니다. 같은 $u$를 두 점에 더하면 두 점이 함께 옮겨 가므로 거리가 그대로이고, 켤레를 취하면 두 점이 실수축에 대해 함께 뒤집히므로 거리가 그대로입니다. 같은 $u$를 곱하면 거리가 $|u|$배가 됩니다((5)). $u = 0$이면 두 점이 모두 $0$으로 가서 거리가 $0$이 되고, 이것도 $|0| = 0$배라는 식에 맞습니다.

## 증명

:::idea
$\mathbb{C}$는 집합으로 $\mathbb{R} \times \mathbb{R}$이고 차의 실수부·허수부는 실수부·허수부의 차이므로, $|z - w|$를 풀어 쓰면 유클리드 거리의 식이 그대로 나온다. 나머지는 위상수학 입문의 $\mathbb{R} \times \mathbb{R}$에 관한 번호와 절댓값의 성질을 옮긴다.
:::

:::hint
[[complex-field|복소수체]]의 (1)에 의해 $\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$이고, [[complex-number|복소수]]의 (1)에 의해 $z$는 순서쌍 $(\operatorname{Re} z, \operatorname{Im} z)$입니다.
:::

:::hint
(4)의 앞 문장에서 $S \subseteq B(p, r)$이면 $|z| = d(z, 0)$을 거리의 삼각부등식으로 $d(z, p) + d(p, 0)$ 이하로 누릅니다. 거꾸로는 중심을 $0$으로 잡습니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "거리 (i)–(iv)"는 [[metric-space]]의 거리의 조건, "예 (n)"은 [[metric-space-examples]]의 번호이다. "복소수체 (n)", "켤레 (n)", "복소 절댓값 (n)"은 [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]]의 번호이다. $\mathbb{C}$에서의 계산(교환·결합·분배법칙, $0$, $-z$, 뺄셈)은 복소수체 (1)에 의해 $\mathbb{C}$가 [[field|체]], 곧 [[ring|환]]이라는 것에 기댄다.

**1의 증명.** 복소수체 (1)에 의해 $\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$이고 $\operatorname{Im}(z - w) = \operatorname{Im} z - \operatorname{Im} w$이다. 이것을 복소수의 절댓값의 정의 $|z - w| = \sqrt{(\operatorname{Re}(z - w))^2 + (\operatorname{Im}(z - w))^2}$에 넣으면 (1)의 $a$, $b$로 $|z - w| = \sqrt{a^2 + b^2}$이다. [[complex-number|복소수]]의 정의에 의해 $\mathbb{C} = \mathbb{R} \times \mathbb{R}$이고 그 (1)에 의해 $z = (\operatorname{Re} z, \operatorname{Im} z)$, $w = (\operatorname{Re} w, \operatorname{Im} w)$이다. 예 (5)에서 $p = z$, $q = w$로 두면 $p_1 = \operatorname{Re} z$, $p_2 = \operatorname{Im} z$, $q_1 = \operatorname{Re} w$, $q_2 = \operatorname{Im} w$이므로 $d_E(z, w) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2} = \sqrt{a^2 + b^2}$이다. $d$와 $d_E$는 정의역이 같은 $\mathbb{C} \times \mathbb{C} = (\mathbb{R} \times \mathbb{R}) \times (\mathbb{R} \times \mathbb{R})$이고 모든 점에서 값이 같으므로, [[function|함수]]의 함수의 같음에 의해 $d = d_E$이다. 예 (5)에 의해 $(\mathbb{R} \times \mathbb{R}, d_E)$는 거리공간이므로 $(\mathbb{C}, d)$는 거리공간이다.

$z - 0 = z$이므로 $d(z, 0) = |z|$이다. 거리 (iii)에 의해 $d(z, w) = d(w, z)$, 곧 $|z - w| = |w - z|$이다.

**2의 증명.** 예 (7)에 의해 $\mathbb{R} \times \mathbb{R}$의 모든 점 $p$, $q$에서 $d_{\max}(p, q) \le d_E(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이고, (1)에 의해 $d_E(z, w) = d(z, w)$이며, 예 (5)에 의해 $d_{\max}(z, w)$와 $d_{\mathrm{sum}}(z, w)$는 (2)에 적은 실수이다. [[max-metric-and-product-topology|최대 거리와 곱위상]]의 (2)에 의해 $d_E$의 거리위상은 $\mathbb{R} \times \mathbb{R}$의 보통 위상이고, $d = d_E$이므로 [[topology-examples]]의 (4)가 정한 두 거리위상은 같은 집합족이다. 따라서 $\mathcal{T}_d$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상이다.

[[product-topology|두 공간의 곱위상]]에 의해 $\pi_1 : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 $\pi_1(p, q) = p$인 함수이다. $z \in \mathbb{C}$이면 $z = (\operatorname{Re} z, \operatorname{Im} z)$이므로 $\pi_1(z) = \operatorname{Re} z$이다. 두 함수는 정의역이 모두 $\mathbb{C} = \mathbb{R} \times \mathbb{R}$이고 모든 점에서 값이 같으므로 같은 함수이다. $\pi_2$와 $\operatorname{Im}$도 같다.

**3의 증명.** [[open-ball]]의 정의에 의해 $B(a, r) = \{z \in \mathbb{C} : d(a, z) < r\}$이고 $C(a, r) = \{z \in \mathbb{C} : d(a, z) \le r\}$이다. (1)에 의해 $d(a, z) = |a - z| = |z - a|$이므로 (3)의 두 등식이 나온다. $a = 0$이면 $z - 0 = z$이다.

**4의 증명.** 앞 문장부터 보인다. $S$가 유계라 하자. $S = \emptyset$이면 $M = 0$이 조건을 만족한다(확인할 $z$가 없다). $S \ne \emptyset$이면 유계의 정의에 의해 $S \subseteq B(p, r_0)$인 $p \in \mathbb{C}$와 실수 $r_0 > 0$이 있다. $z \in S$이면 $d(p, z) < r_0$이고, (1)과 거리 (iv), (iii)에 의해
$$
\begin{aligned}
|z| = d(z, 0) &\le d(z, p) + d(p, 0) \\
&= d(p, z) + |p|
\end{aligned}
$$
이다. 순서 성질 (2)의 (ii)에 의해 $d(p, z) + |p| < r_0 + |p|$이므로 순서 성질 (1)의 (v)에 의해 $|z| < r_0 + |p|$이고, $M = r_0 + |p|$로 두면 모든 $z \in S$에서 $|z| \le M$이다.

거꾸로 모든 $z \in S$에서 $|z| \le M$이라 하고 $r_1 = |M| + 1$로 두자. 절댓값 (2)에 의해 $0 \le |M|$이고 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 순서 성질 (2)의 (iv)와 (K1), (K4)에 의해 $0 = 0 + 0 < 1 + |M| = r_1$이다. $z \in S$이면 절댓값 (6)에 의해 $M \le |M|$이고 $|M| < |M| + 1$(순서 성질 (2)의 (ii))이므로 순서 성질 (1)의 (v)에 의해 $d(0, z) = |z| < r_1$이다. 따라서 $S \subseteq B(0, r_1)$이고, $S$는 유계이다. ($S = \emptyset$이어도 이 포함은 성립한다.)

뒤 문장: (2)와 (K4)에 의해 모든 점에서 $d_{\max}(z, w) \le 1 \cdot d(z, w)$이고 $d(z, w) \le 2\, d_{\max}(z, w)$이다. 예 (5)에 의해 $d_{\max}$는 $\mathbb{C} = \mathbb{R} \times \mathbb{R}$ 위의 거리이므로, [[cauchy-subsequence-and-limit]]의 (4)의 (iv)를 $d' = d_{\max}$, $c = 1$, $c' = 2$에 쓰면 $\mathbb{C}$의 부분집합이 $d$로 유계인 것은 정확히 $d_{\max}$로 유계일 때이다.

**5의 증명.** $\mathbb{C}$가 환이므로 $(z + u) - (w + u) = z - w$이고 $uz - uw = u(z - w)$이다. 따라서 $d(z + u, w + u) = |z - w| = d(z, w)$이고, 복소 절댓값 (3)에 의해 $d(uz, uw) = |u(z - w)| = |u|\,|z - w| = |u|\, d(z, w)$이다. 켤레 (2)에 의해 $\overline{z} - \overline{w} = \overline{z - w}$이고 복소 절댓값 (2)에 의해 $|\overline{z - w}| = |z - w|$이므로 $d(\overline{z}, \overline{w}) = d(z, w)$이다.

**6의 증명.** 복소수체 (2)의 (i)에 의해 $\iota(x) - \iota(y) = \iota(x - y)$이고, 복소 절댓값 (5)에 의해 $|\iota(x - y)| = |x - y|$이다(오른쪽은 실수의 절댓값). 따라서 $d(\iota(x), \iota(y)) = |x - y|$이고, 이것은 예 (1)의 보통 거리로 잰 $x$, $y$ 사이의 거리이다. 예 (3)에 의해 부분공간 거리 $d_{\iota(\mathbb{R})}$는 $\iota(\mathbb{R})$의 두 점에서 $d$와 같은 값을 가지므로 둘째 문장이 나온다. 마지막으로 열린 공의 정의에 의해 $\iota(y) \in B(\iota(x), r)$인 것은 정확히 $d(\iota(x), \iota(y)) < r$, 곧 $|x - y| < r$일 때이다.
:::

## 예시와 반례

:::example[1 + 2i 와 4 − 2i 사이의 거리]
$z = 1 + 2i$, $w = 4 - 2i$이면 [[complex-field|복소수체]]의 (4)에 의해 $\operatorname{Re} z - \operatorname{Re} w = 1 - 4 = -3$이고 $\operatorname{Im} z - \operatorname{Im} w = 2 - (-2) = 4$입니다. (1)에 의해
$$
d(z, w) = \sqrt{(-3)^2 + 4^2} = \sqrt{25} = 5
$$
입니다. $5 \cdot 5 = 25$이고 $0 \le 5$이므로 [[square-root-exists|제곱근]]의 (1)의 유일성에 의해 $\sqrt{25} = 5$입니다. (2)의 다른 두 거리는 $d_{\max}(z, w) = \max\{3, 4\} = 4$, $d_{\mathrm{sum}}(z, w) = 3 + 4 = 7$이고, 실제로 $4 \le 5 \le 7 \le 8$입니다.
:::

:::example[가로로만 떨어진 두 점]
$z = 2 + 3i$, $w = -1 + 3i$이면 허수부가 같아서 $\operatorname{Im} z - \operatorname{Im} w = 0$이고 $\operatorname{Re} z - \operatorname{Re} w = 3$입니다. (1)에 의해 $d(z, w) = \sqrt{3^2 + 0^2} = \sqrt{9} = 3$이고($3 \cdot 3 = 9$, $0 \le 3$), $d_{\max}(z, w) = \max\{3, 0\} = 3$, $d_{\mathrm{sum}}(z, w) = 3 + 0 = 3$입니다. 그래서 (2)의 앞의 두 부등식은 등호가 될 수 있습니다. 같은 값을 절댓값으로도 얻습니다. [[complex-field|복소수체]]의 (4)에 의해 $z - w = 3 + 0i = 3$은 실수인 복소수이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $d(z, w) = |3| = 3$입니다.
:::

:::counterexample[절댓값의 차로 정한 함수가 거리가 아닌 예]
복소수 $z$, $w$에서의 값이 $\bigl|\,|z| - |w|\,\bigr|$인 함수 $\mathbb{C} \times \mathbb{C} \to \mathbb{R}$를 생각해 봅시다. $z = 1$, $w = i$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|1| = 1$, $|i| = 1$이므로 값은 $0$인데 $1 \ne i$입니다(실수부가 다릅니다). 따라서 이 함수는 [[metric-space|거리공간]]의 조건 (ii)를 어기고 $\mathbb{C}$ 위의 거리가 아닙니다. 원점까지의 거리만 보면 원점을 중심으로 한 원 위의 서로 다른 점들을 구별하지 못합니다.
:::

## 확인 질문

:::check[$i$는 닫힌 공 $C(1, 1)$에 속하는가? 열린 공 $B(1, 2)$에는 속하는가?]
(3)에 의해 $|i - 1|$을 보면 됩니다. $i - 1 = -1 + i$이므로 (1)의 식으로 $|i - 1| = \sqrt{(-1)^2 + 1^2} = \sqrt{2}$입니다. $1 < 2$이므로 [[square-root-exists|제곱근]]의 (2)에 의해 $\sqrt{1} < \sqrt{2}$, 곧 $1 < \sqrt{2}$이고, 따라서 $i \notin C(1, 1)$입니다. 또 $2 < 4$에서 같은 이유로 $\sqrt{2} < \sqrt{4} = 2$이므로 $i \in B(1, 2)$입니다.
:::

:::check[실수인 복소수 전체 $\iota(\mathbb{R})$는 $(\mathbb{C}, d)$에서 유계인가?]
아닙니다. 유계라면 (4)에 의해 모든 실수 $x$에서 $|\iota(x)| \le M$인 실수 $M$이 있고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 모든 실수 $x$에서 $|x| \le M$입니다. 그런데 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $M < n$인 자연수 $n$이 있고, [[absolute-value|절댓값]]의 (6)에 의해 $n \le |n|$이므로 $M < |n|$이 되어 $x = n$에서 어긋납니다.
:::
