---
title: 복소평면의 콤팩트 집합
title_en: Compact Subsets of the Complex Plane
aliases: [복소평면의 하이네–보렐 정리, 닫힌 공의 콤팩트성, 복소수열의 볼차노–바이어슈트라스 정리, Heine–Borel theorem for the complex plane, Bolzano–Weierstrass theorem for complex sequences]
kind: theorem
field: complex-analysis
msc: ["30", "54D30"]
level: undergrad
summary: ℂ 의 부분집합이 콤팩트인 것은 정확히 닫혀 있고 유계일 때이다. 그래서 닫힌 공과 한 점 집합은 콤팩트이고, ℂ 전체와 열린 공은 콤팩트가 아니다. 공집합이 아닌 콤팩트 집합 위의 연속 실함수는 최댓값과 최솟값을 갖고, 특히 연속인 복소수값 함수의 절댓값도 그렇다. 절댓값이 유계인 복소수열은 수렴하는 부분수열을 갖는다.
requires: [function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, interval, cartesian-product, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-triangle-inequality, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, topological-space, closed-set, subspace-topology, subspace-and-continuity, metric-subspace-topology, continuous-map, composition-of-continuous-maps, compact-space, compact-metric-closed-and-bounded, product-of-compact-spaces, closed-interval-is-compact, extreme-value-theorem-for-compact-spaces, sequence-in-a-space, compact-metric-space-sequences, complex-plane-as-metric-space, convergence-of-complex-sequences, continuity-of-complex-operations]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Theorem 11.5.5 의 증명 (p.170); 11.1절 Complex numbers, 11.1.4소절 Exercise 11.1.7 (p.143)"
    checked: original
    note: "출처는 대수학의 기본정리(Theorem 11.5.5)의 증명(p.170)에서 닫힌 공 C(0, R) = {z ∈ ℂ : |z| ≤ R} 이 '닫혀 있고 유계'라서 콤팩트이고, 연속 실함수 |p(z)| 가 그 위에서 최솟값을 갖는다고 말없이 쓴다. (2)와 (4)가 그 두 사실이고, 이 사이트는 위상수학 입문과 거리공간 강의의 항목으로 증명한다. 출처 Exercise 11.1.7(p.143)은 유계인 복소수열(모든 n 에서 |z_n| ≤ M)이 수렴하는 부분수열을 갖는다는 볼차노–바이어슈트라스 정리를 증명하게 한다. (5)가 그것이고, 이 사이트는 닫힌 공의 콤팩트성과 거리공간 강의의 콤팩트 부분집합의 수열 정리로 선택 없이 증명한다. 확인 질문 '$n$번째 항이 $i^n$인 복소수열은 수렴하는 부분수열을 갖는가?'는 이 연습문제를 한 수열에 쓴 것이다."
  - ref: lebl-basic-analysis
    loc: "7.4절 Completeness and compactness, 7.4.2소절 Compactness, Theorem 7.4.14 와 증명 (p.284–285); 7.5절 Continuous functions, 7.5.2소절 Compactness and continuity, Theorem 7.5.6 (p.290)"
    checked: original
    note: "출처 Theorem 7.4.14(p.284, 하이네–보렐)는 ℝⁿ 의 닫혀 있고 유계인 부분집합이 콤팩트라는 것이고, 출처는 n = 2 를 넘는 차원을 연습문제로 둔다. (1)은 그것을 ℂ = ℝ × ℝ 에서 거꾸로 방향과 함께 진술한 것이다. 출처 Theorem 7.5.6(p.290)은 공집합이 아닌 콤팩트 거리공간 위의 연속 실함수가 최댓값과 최솟값을 갖는다는 것이고, (4)는 그것을 ℂ 의 콤팩트 부분집합에 쓴 것이다. 예시 '정사각형 [−1, 1] × [−1, 1]' 은 닫힌구간의 곱으로 콤팩트성을 보이는데, 출처의 Theorem 7.4.14 의 증명(p.284–285)이 K 를 닫힌 상자 [a, b] × [c, d] 에 넣고 그 상자가 콤팩트임을 보이는 것과 같은 대상이다(출처는 수열로, 이 예시는 닫힌구간의 곱으로 보인다). 출처의 그 증명은 실수부의 부분수열을 잡고 다시 허수부의 부분수열을 잡는데, (5)는 그 대신 콤팩트 부분집합의 수열 정리를 쓴다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(몫의 연속의 경로와 콤팩트 위 최솟값의 번호 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$는 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]] $d(z, w) = |z - w|$와 그 거리위상을 주고, $\mathbb{C}$의 부분집합 $A$에는 부분공간 거리와 그 거리위상, 곧 ([[metric-subspace-topology]]의 (1)에 의해) 부분공간 위상 $\mathcal{T}_d|_A$를 준다. 열린 공 $B(a, r)$와 닫힌 공 $C(a, r)$는 [[open-ball]]의 것이고, $(\mathbb{C}, d)$에서 닫힌집합은 [[open-set-in-metric-space]]의 것, 유계는 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 것이다. 콤팩트 부분집합(콤팩트 집합)은 [[compact-space]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 복소수열과 그 수렴, 부분수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]과 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다. $\mathbb{R}$에는 보통 위상을 준다.

1. (하이네–보렐 정리) $K \subseteq \mathbb{C}$가 $\mathbb{C}$의 콤팩트 부분집합인 것은 정확히 $K$가 $(\mathbb{C}, d)$에서 닫힌집합이고 유계일 때, 곧 $K$가 닫힌집합이고 모든 $z \in K$에서 $|z| \le M$인 실수 $M$이 있을 때이다.
2. (닫힌 공과 한 점) $a \in \mathbb{C}$이고 $r$이 $0 \le r$인 실수이면 $D = \{z \in \mathbb{C} : |z - a| \le r\}$는 $\mathbb{C}$의 콤팩트 부분집합이다. $0 < r$이면 $D$는 닫힌 공 $C(a, r)$이고, $r = 0$이면 $D = \{a\}$이다. 또 $\emptyset$은 $\mathbb{C}$의 콤팩트 부분집합이다.
3. (콤팩트가 아닌 집합) $\mathbb{C}$ 자신과 $\iota(\mathbb{R})$는 유계가 아니므로 $\mathbb{C}$의 콤팩트 부분집합이 아니다. $a \in \mathbb{C}$이고 $0 < r$이면 열린 공 $B(a, r)$는 닫힌집합이 아니므로 $\mathbb{C}$의 콤팩트 부분집합이 아니다.
4. (최댓값과 최솟값) $K$가 공집합이 아닌 $\mathbb{C}$의 콤팩트 부분집합이라 하자.
   - (i) $h : K \to \mathbb{R}$가 연속이면, 모든 $z \in K$에서 $h(c') \le h(z) \le h(c)$인 $c, c' \in K$가 있다.
   - (ii) $K \subseteq A \subseteq \mathbb{C}$이고 $F : A \to \mathbb{C}$가 연속이면, 모든 $z \in K$에서 $|F(c')| \le |F(z)| \le |F(c)|$인 $c, c' \in K$가 있다.
5. (볼차노–바이어슈트라스 정리) $(z_n)$이 복소수열이고 모든 자연수 $n$에서 $|z_n| \le M$인 실수 $M$이 있으면, $(z_n)$의 부분수열 가운데 $|z| \le M$인 어떤 복소수 $z$로 수렴하는 것이 있다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$ and the function $\iota$ are those of the entry on the field of complex numbers, and the modulus $|z|$ is that of the entry on the modulus of a complex number. $\mathbb{C}$ carries the metric of the complex plane $d(z, w) = |z - w|$ and its metric topology, and a subset $A$ of $\mathbb{C}$ carries the subspace metric and its metric topology, that is (by item (1) of the entry on the topology of a metric subspace) the subspace topology $\mathcal{T}_d|_A$. Open balls $B(a, r)$ and closed balls $C(a, r)$ are those of the entry on open balls, closed sets in $(\mathbb{C}, d)$ are as in the entry on open sets in a metric space, and boundedness is as in the theorem that compact sets of a metric space are closed and bounded. Compact subsets (compact sets) are those of the entry on compact spaces, and continuity is that of the entry on continuous maps between topological spaces. Complex sequences, their convergence, and subsequences are those of the entries on convergence of complex sequences and on sequences and convergence in a topological space. $\mathbb{R}$ carries the standard topology.

1. (The Heine–Borel theorem) $K \subseteq \mathbb{C}$ is a compact subset of $\mathbb{C}$ exactly when $K$ is a closed set of $(\mathbb{C}, d)$ and bounded, that is, when $K$ is closed and there is a real number $M$ with $|z| \le M$ for all $z \in K$.
2. (Closed balls and single points) If $a \in \mathbb{C}$ and $r$ is a real number with $0 \le r$, then $D = \{z \in \mathbb{C} : |z - a| \le r\}$ is a compact subset of $\mathbb{C}$. If $0 < r$, then $D$ is the closed ball $C(a, r)$, and if $r = 0$, then $D = \{a\}$. Moreover $\emptyset$ is a compact subset of $\mathbb{C}$.
3. (Sets that are not compact) $\mathbb{C}$ itself and $\iota(\mathbb{R})$ are not bounded and hence are not compact subsets of $\mathbb{C}$. If $a \in \mathbb{C}$ and $0 < r$, then the open ball $B(a, r)$ is not closed and hence is not a compact subset of $\mathbb{C}$.
4. (Maximum and minimum) Let $K$ be a nonempty compact subset of $\mathbb{C}$.
   - (i) If $h : K \to \mathbb{R}$ is continuous, then there are $c, c' \in K$ with $h(c') \le h(z) \le h(c)$ for all $z \in K$.
   - (ii) If $K \subseteq A \subseteq \mathbb{C}$ and $F : A \to \mathbb{C}$ is continuous, then there are $c, c' \in K$ with $|F(c')| \le |F(z)| \le |F(c)|$ for all $z \in K$.
5. (The Bolzano–Weierstrass theorem) If $(z_n)$ is a complex sequence and there is a real number $M$ with $|z_n| \le M$ for all natural numbers $n$, then some subsequence of $(z_n)$ converges to some complex number $z$ with $|z| \le M$.
:::

## 직관

위상수학 입문은 $\mathbb{R} \times \mathbb{R}$의 부분집합이 콤팩트인 것이 정확히 닫혀 있고 유계일 때라는 것(하이네–보렐 정리)을 증명했습니다. 복소평면은 집합으로도 위상으로도 $\mathbb{R} \times \mathbb{R}$이므로 같은 말이 복소수의 말로 성립하고, 유계는 "절댓값이 어떤 수를 넘지 않는다"로 읽힙니다((1)). 닫힌 공은 테두리까지 포함하고 반지름만큼 퍼져 있으므로 두 조건을 다 만족합니다((2)). 반지름이 $0$이면 그 집합은 중심 한 점입니다.

두 조건 가운데 하나가 빠지면 콤팩트가 아닙니다. $\mathbb{C}$ 전체나 실수인 복소수 전체는 끝없이 뻗어 있어 유계가 아니고, 열린 공은 유계이지만 테두리의 점이 빠져 있습니다((3)). 열린 공 위에서는 $|z|$가 테두리로 다가가며 커지기만 하고 최댓값에 이르지 않을 수 있습니다(아래 반례). 콤팩트 집합에서는 이런 일이 없어서, 연속 실함수가 최댓값과 최솟값을 실제로 갖습니다((4)). 대수학의 기본정리 같은 증명에서는 연속인 복소수값 함수의 절댓값에 이것을 씁니다((4)의 (ii)).

## 증명

:::idea
$\mathbb{C}$의 위상은 $\mathbb{R} \times \mathbb{R}$의 보통 위상이므로 위상수학 입문의 $\mathbb{R} \times \mathbb{R}$의 하이네–보렐 정리를 그대로 쓰고, 유계는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (4)로 절댓값과 최대 거리 사이에서 옮긴다. 최댓값과 최솟값, 수렴하는 부분수열은 콤팩트 공간과 콤팩트 거리공간의 정리를 그대로 쓴다.
:::

:::hint
(2)에서 $D$가 닫혀 있다는 것은, $D$ 밖의 점 $w$에서 $s = |w - a| - r$로 두고 거리의 삼각부등식으로 $B(w, s)$가 $D$와 만나지 않는다는 것을 보이면 됩니다.
:::

:::proof
"복소평면 (n)"은 [[complex-plane-as-metric-space|복소평면의 거리]]의 번호, "콤팩트 (n)"은 [[compact-space]]의 번호, "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이다.

**1의 증명.** 복소평면 (2)에 의해 $\mathbb{C}$의 위상 $\mathcal{T}_d$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상이다. 콤팩트 부분집합인지는 집합과 위상으로만 정해지므로, [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (5)의 (ii)에 의해 $K$가 콤팩트인 것은 정확히 $K$가 이 위상에서 닫힌집합이고 $d_{\max}$로 유계일 때이다. [[closed-set]]의 (6)에 의해 이 위상에서 닫힌집합인 것은 정확히 $(\mathbb{C}, d)$에서 닫힌집합인 것이고, 복소평면 (4)에 의해 $d_{\max}$로 유계인 것은 정확히 $d$로 유계인 것, 곧 모든 $z \in K$에서 $|z| \le M$인 실수 $M$이 있는 것이다.

**2의 증명.** $0 < r$이면 복소평면 (3)에 의해 $D = C(a, r)$이다. $r = 0$이면, 복소수의 절댓값의 (1)에 의해 $0 \le |z - a|$이므로 순서 성질 (1)의 (ii)에 의해 $|z - a| \le 0$인 것은 정확히 $|z - a| = 0$일 때이고, 같은 (1)에 의해 정확히 $z - a = 0$, 곧 $z = a$일 때이다. 따라서 $D = \{a\}$이다.

$D$가 닫혀 있음: $w \in \mathbb{C} - D$이면 $r < |w - a|$이고, $s = |w - a| - r$로 두면 순서 성질 (3)의 (i)에 의해 $0 < s$이다. $y \in B(w, s)$이면 복소평면 (1)과 [[metric-space|거리공간]]의 조건 (iv), (iii)에 의해
$$
\begin{aligned}
|w - a| &= d(a, w) \\
&\le d(a, y) + d(y, w) \\
&< |y - a| + s
\end{aligned}
$$
이므로(순서 성질 (2)의 (ii), (1)의 (v)) $r = |w - a| - s < |y - a|$이고 $y \notin D$이다. 따라서 $B(w, s) \cap D = \emptyset$이고 [[open-set-in-metric-space]]의 (3)에 의해 $D$는 $(\mathbb{C}, d)$에서 닫힌집합이다.

$D$가 유계임: $z \in D$이면 거리공간의 조건 (iv)와 복소평면 (1)에 의해 $|z| = d(z, 0) \le d(z, a) + d(a, 0) = |z - a| + |a| \le r + |a|$이다(순서 성질 (2)의 (i)). (1)에 의해 $D$는 콤팩트이다. 공집합은 콤팩트 (8)의 (i)에 의해 콤팩트 부분집합이다.

**3의 증명.** 콤팩트 부분집합은 (1)에 의해 유계이고 닫힌집합이다. $\iota(\mathbb{R}) \subseteq \mathbb{C}$가 유계라면 모든 실수 $x$에서 $|\iota(x)| \le M$인 $M$이 있고, 복소수의 절댓값의 (5)에 의해 $|x| \le M$이다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $M < n$인 자연수 $n$이 있고 절댓값의 (6)에 의해 $n \le |n|$이므로 $x = n$에서 어긋난다. $\iota(\mathbb{R}) \subseteq \mathbb{C}$이므로 $\mathbb{C}$가 유계라면 $\iota(\mathbb{R})$도 같은 $M$으로 유계여서 역시 어긋난다.

$B(a, r)$가 닫힌집합이 아님: $w = a + r$($r$을 [[complex-field|복소수체]]의 (3)의 약속대로 $\iota(r)$로 읽는다)로 두면 복소수의 절댓값의 (5)와 절댓값의 (1)에 의해 $|w - a| = |r| = r$이므로 $w \notin B(a, r)$이다. $s > 0$이라 하고 $t = \min\{s, r\} / 2$로 두면 절댓값의 (10)과 순서 성질 (8)에 의해 $0 < t$, $t < s$, $t < r$이다. $y = a + (r - t)$로 두면 $0 < r - t < r$이므로 $|y - a| = r - t < r$이고 $y \in B(a, r)$이며, $|y - w| = |{-t}| = t < s$이므로 $y \in B(w, s)$이다. 곧 $\mathbb{C} - B(a, r)$의 점 $w$의 모든 공 $B(w, s)$가 $B(a, r)$와 만나므로, [[open-set-in-metric-space]]의 (3)에 의해 $B(a, r)$는 닫힌집합이 아니다. (1)에 의해 콤팩트 부분집합이 아니다.

**4의 증명.** (i). 콤팩트 부분집합의 정의에 의해 $(K, \mathcal{T}_d|_K)$는 콤팩트 공간이고 $K \ne \emptyset$이므로, [[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 연속 실함수의 최댓값과 최솟값]]의 (2)를 $X = K$에 쓴다.

(ii). [[subspace-and-continuity]]의 (2)에 의해 제한 $F|_K : K \to \mathbb{C}$는 연속이다($K$의 위상 $\mathcal{T}_d|_K$는 [[subspace-topology]]의 (4)에 의해 $A$의 부분공간 위상을 다시 $K$로 제한한 것과 같다). [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)에 의해 $z$에서의 값이 $|F(z)|$인 함수 $K \to \mathbb{R}$는 연속이고, (i)을 이 함수에 쓴다.

**5의 증명.** $|z_1| \le M$이고 복소수의 절댓값의 (1)에 의해 $0 \le |z_1|$이므로 $0 \le M$이다. $K = \{z \in \mathbb{C} : |z - 0| \le M\} = \{z \in \mathbb{C} : |z| \le M\}$은 (2)에 의해 콤팩트 부분집합이고 $(z_n)$의 모든 항이 $K$에 든다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 (3)을 $X = \mathbb{C}$에 쓰면 $(z_n)$의 부분수열 가운데 $K$의 점 $z$로 $(\mathbb{C}, d)$에서 수렴하는 것이 있고, $z \in K$이므로 $|z| \le M$이다.
:::

## 예시와 반례

:::example[정사각형 [−1, 1] × [−1, 1]]
$Q = \{z \in \mathbb{C} : |\operatorname{Re} z| \le 1 \text{이고 } |\operatorname{Im} z| \le 1\}$은 [[complex-number|복소수]]의 정의에 의해 곱집합 $\mathbb{R} \times \mathbb{R}$의 부분집합 $[-1, 1] \times [-1, 1]$입니다([[absolute-value|절댓값]]의 (7)). [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)과 [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (4)에 의해 $Q$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상, 곧 $\mathbb{C}$의 위상에서 콤팩트 부분집합입니다. 그러면 (1)에 의해 $Q$는 닫혀 있고 유계입니다. 실제로 $z \in Q$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (6)에 의해 $|z| \le |\operatorname{Re} z| + |\operatorname{Im} z| \le 2$입니다.
:::

:::example[닫힌 공 C(0, 1) 위에서 |z z + 1| 의 최댓값과 최솟값]
$F(z) = zz + 1$은 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 연속이고 $C(0, 1)$은 (2)에 의해 공집합이 아닌 콤팩트 부분집합이므로, (4)의 (ii)에 의해 $|F|$는 $C(0, 1)$ 위에서 최댓값과 최솟값을 갖습니다. 이 경우에는 그 점을 직접 찾을 수 있습니다. $F(i) = -1 + 1 = 0$이므로 최솟값은 $0$이고 $i$에서 갖습니다. $|z| \le 1$이면 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)와 복소수의 절댓값의 (3), (5)에 의해 $|zz + 1| \le |z|\,|z| + 1 \le 2$이고 $F(1) = 2$이므로 최댓값은 $2$이고 $1$에서 갖습니다. 최솟값은 $-i$에서도 갖습니다. (4)는 그런 점이 있다는 것만 말하고 하나뿐이라고 말하지 않습니다.
:::

:::counterexample[열린 공 위에서 최댓값이 없는 예]
열린 공 $B(0, 1)$ 위에서 $h(z) = |z|$를 봅시다. $h$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)의 절댓값 함수를 제한한 것이므로 연속입니다. $c \in B(0, 1)$이면 $|c| < 1$이고, $c' = \iota\bigl((|c| + 1)/2\bigr)$로 두면 [[order-properties-of-reals|순서 성질]]의 (8)에 의해 $|c| < (|c| + 1)/2 < 1$이므로 $c' \in B(0, 1)$이고 $h(c) < h(c')$입니다. 따라서 $h$는 $B(0, 1)$ 위에서 최댓값을 갖지 않습니다. (3)에 의해 $B(0, 1)$은 콤팩트가 아니므로 (4)와 어긋나지 않습니다.
:::

## 확인 질문

:::check[절댓값이 $1$인 복소수 전체의 집합 $T$는 $\mathbb{C}$의 콤팩트 부분집합인가?]
그렇습니다. 모든 $z \in T$에서 $|z| \le 1$이므로 유계입니다. 닫혀 있음: $w \notin T$이면 $|w| \ne 1$이고 $s = \bigl|\,|w| - 1\,\bigr| > 0$입니다. $|y - w| < s$이면 [[metric-space|거리공간]]의 (2)의 거리의 역삼각부등식을 $d(y, 0)$, $d(w, 0)$에 써서 $\bigl|\,|y| - |w|\,\bigr| \le |y - w| < s$이므로 $|y| \ne 1$입니다($|y| = 1$이면 왼쪽이 $s$가 됩니다). 따라서 $B(w, s) \cap T = \emptyset$이고 [[open-set-in-metric-space]]의 (3)에 의해 $T$는 닫혀 있습니다. (1)에 의해 $T$는 콤팩트입니다.
:::

:::check[$n$번째 항이 $i^n$인 복소수열은 수렴하는 부분수열을 갖는가?]
갖습니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)에 의해 $|i^n| = |i|^n = 1$이므로 (5)에 의해 절댓값이 $1$ 이하인 점으로 수렴하는 부분수열이 있습니다. 실제로 첨자열 $n_k = 4k$를 잡으면 같은 항목의 (6)에 의해 모든 항이 $i^{4k} = 1$이라 $1$로 수렴합니다.
:::
