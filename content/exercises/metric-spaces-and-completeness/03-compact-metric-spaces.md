---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "7.5.6절, Exercise 7.5.10 b)–c) (p.294)"
added: 2026-11-26
---

:::exercise[가늘어지는 직사각형들]
곱집합 $\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를 주고, 자연수 $n$마다
$$
K_n = [0, n^{-1}] \times [0, 1]
$$
로 둔다.

1. $(K_n)$이 $\mathbb{R} \times \mathbb{R}$의 공집합이 아닌 콤팩트 부분집합들의 감소하는 수열임을 보여라.
2. 모든 자연수 $n$에서 $\operatorname{diam} K_n = 1$임을 보여라.
3. $\bigcap \{K_n : n \in \mathbb{N}\} = \{0\} \times [0, 1]$임을 보여라. 교집합은 공집합이 아니지만 한 점 집합이 아니다.
:::

:::solution
$d_{\max}$는 [[metric-space-examples|거리공간의 예]]의 (5)의 것이고, 그 거리위상은 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)에 의해 $\mathbb{R}$의 보통 위상 둘의 곱위상이다. 감소하는 수열과 그 교집합은 [[cantor-intersection-theorem|칸토어 교집합 정리]]의 것이고, 지름은 [[diameter|지름]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 순서 성질 (10)에 의해 자연수 $n$에서 $0 < n^{-1}$이다. [[interval|구간]]의 정의에 의해 $[0, n^{-1}]$과 $[0, 1]$은 닫힌구간이다.

**1.** $(0, 0) \in K_n$이므로 $K_n \ne \emptyset$이다. [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 $[0, n^{-1}]$과 $[0, 1]$은 $\mathbb{R}$의 콤팩트 부분집합이고, [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (4)에 의해 $K_n$은 곱위상의 콤팩트 부분집합, 곧 $(\mathbb{R} \times \mathbb{R}, d_{\max})$의 콤팩트 부분집합이다. 순서 성질 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$이므로 $[0, (n + 1)^{-1}] \subseteq [0, n^{-1}]$이고 $K_{n+1} \subseteq K_n$이다.

**2.** $(x, y)$, $(x', y') \in K_n$이면 $0 \le x, x' \le n^{-1} \le 1$이고(순서 성질 (10)과 [[prime-number|소수]]의 진술의 (Z1)에 의해 $1 \le n$이므로 (6)의 (ii)나 등호로 $n^{-1} \le 1$) $0 \le y, y' \le 1$이다. 순서 성질 (3)의 (iii)과 (2)의 (iii)에 의해 $-1 \le x - x' \le 1$, $-1 \le y - y' \le 1$이므로 [[absolute-value|절댓값]]의 (7)과 (10)에 의해 $d_{\max}((x, y), (x', y')) \le 1$이다. $K_n$은 콤팩트 부분집합이므로 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (3)에 의해 유계이고, 지름 항목의 (2)의 (iii)에 의해 $\operatorname{diam} K_n \le 1$이다. 또 $(0, 0)$, $(0, 1) \in K_n$이고 $d_{\max}((0, 0), (0, 1)) = \max\{0, 1\} = 1$이므로 같은 (2)의 (ii)에 의해 $1 \le \operatorname{diam} K_n$이다. 따라서 $\operatorname{diam} K_n = 1$이다.

**3.** [[family-of-sets|집합족]]의 (9)에 의해 점 $(x, y)$가 교집합에 드는 것은 정확히 모든 자연수 $n$에서 $(x, y) \in K_n$, 곧 $0 \le x \le n^{-1}$이고 $0 \le y \le 1$일 때이다.

$x = 0$이고 $0 \le y \le 1$이면 모든 $n$에서 $0 \le 0 \le n^{-1}$이므로 $(0, y)$는 교집합에 든다. 거꾸로 $(x, y)$가 교집합에 들면 $0 \le x$이고 $0 \le y \le 1$이다. $0 < x$라 하면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $n^{-1} < x$인 자연수 $n$이 있어 $x \le n^{-1}$과 어긋나므로(순서 성질 (1)의 (i)), 순서 성질 (1)의 (iii), (ii)에 의해 $x = 0$이다. 따라서 교집합은 $\{0\} \times [0, 1]$이다.

이 교집합은 $(0, 0)$과 $(0, 1)$을 원소로 가지므로 한 점 집합이 아니다. [[cantor-intersection-theorem|칸토어 교집합 정리]]의 (3)이 말하는 대로 교집합은 공집합이 아니지만, 2에 의해 지름의 수열은 $0$으로 수렴하지 않으므로 그 (4)의 가정이 성립하지 않는다.
:::

:::exercise[콤팩트 집합과 닫힌집합 사이의 틈]
$(X, d)$가 거리공간이다.

1. $K$가 $X$의 콤팩트 부분집합이고 $F$가 $X$의 닫힌집합이며 $K \cap F = \emptyset$이면, 실수 $\delta > 0$이 있어 모든 $x \in K$와 모든 $y \in F$에서 $\delta \le d(x, y)$임을 보여라.
2. $\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를 주고 $H = \{(x, y) : xy = 1\}$, $L = \{(x, y) : y = 0\}$으로 둔다. $H$와 $L$은 서로소인 닫힌집합이지만, 모든 실수 $\delta > 0$에 대하여 $d_{\max}(p, q) < \delta$인 $p \in H$, $q \in L$이 있음을 보여라.
:::

:::solution
열린 공 $B(x, r)$는 [[open-ball|열린 공]]의 것이고, 열린집합과 닫힌집합은 [[open-set-in-metric-space|거리공간의 열린집합]]의 것이며, 르베그 수는 [[lebesgue-number-lemma|르베그 수 보조정리]]의 것이다.

**1.** 닫힌집합의 정의에 의해 $X - F$는 열린집합이다. $\mathcal{U} = \{X - F\}$로 두면 $\mathcal{U}$는 열린집합들의 집합족이고, $K \cap F = \emptyset$이므로 $K \subseteq X - F = \bigcup \mathcal{U}$이다([[family-of-sets|집합족]]의 (3)). $K$가 콤팩트 부분집합이므로 르베그 수 보조정리의 (1)에 의해 $K$에 대한 $\mathcal{U}$의 르베그 수 $\delta > 0$이 있다. $\mathcal{U}$의 원소는 $X - F$ 하나뿐이므로, 르베그 수의 정의에 의해 $K$의 모든 점 $x$에서 $B(x, \delta) \subseteq X - F$이다.

$x \in K$이고 $y \in F$이면 $y \notin X - F$이므로 $y \notin B(x, \delta)$이고, 열린 공의 정의에 의해 $d(x, y) < \delta$가 아니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)에 의해 $\delta \le d(x, y)$이다. $K = \emptyset$이어도 이 논증은 그대로 성립한다.

**2.** 곱위상과 사영은 [[product-topology|두 공간의 곱위상]]의 것이고, $\mathbb{R} \times \mathbb{R}$의 보통 위상은 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 것으로 $d_{\max}$의 거리위상과 같다.

*닫힌집합.* 같은 항목의 (3)에 의해 $m(x, y) = xy$로 정한 함수는 연속이고, [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 사영 $\pi_2$는 연속이다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)와 [[closed-set|닫힌집합]]의 (6)에 의해 $\{1\}$과 $\{0\}$은 보통 위상에서 닫힌집합이다. $H = m^{-1}(\{1\})$, $L = \pi_2^{-1}(\{0\})$이므로 [[continuity-criteria|연속의 판정]]의 (1)에 의해 둘 다 보통 위상에서 닫힌집합이고, 닫힌집합 항목의 (6)에 의해 $(\mathbb{R} \times \mathbb{R}, d_{\max})$에서 닫힌집합이다.

*서로소.* $(x, y) \in L$이면 $y = 0$이고 $xy = 0 \ne 1$이므로((K9), (K4)) $(x, y) \notin H$이다.

*거리가 얼마든지 작다.* 실수 $\delta > 0$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $n^{-1} < \delta$인 자연수 $n$이 있다. $p = (n, n^{-1})$, $q = (n, 0)$이면 $n \cdot n^{-1} = 1$이므로 $p \in H$이고 $q \in L$이다. [[metric-space-examples|거리공간의 예]]의 (5)와 [[absolute-value|절댓값]]의 (1)에 의해 $d_{\max}(p, q) = \max\{0, n^{-1}\} = n^{-1} < \delta$이다.

그래서 1에서 "$K$가 콤팩트"를 "$K$가 닫힌집합"으로 바꾸면 결론이 성립하지 않을 수 있다. 이것은 1과 어긋나지 않는다. 1의 대우에 의해 $H$와 $L$은 어느 것도 콤팩트 부분집합이 아니다.
:::

:::exercise[콤팩트 거리공간에서 서로 떨어진 점들]
$(X, d)$가 콤팩트 거리공간이고 $S \subseteq X$이며, 실수 $c > 0$이 있어 $S$의 서로 다른 모든 두 점 $s$, $t$에서 $d(s, t) \ge c$라 하자.

1. $S$가 유한집합임을 보여라.
2. 보통 거리의 $\mathbb{R}$과 $S = \mathbb{N}$을 보고, 1에서 $X$가 콤팩트라는 가정을 뺄 수 없음을 보여라.
:::

:::solution
유한집합과 "원소를 $n$개 갖는다"는 [[finite-set|유한집합]]의 것이고, 완전유계는 [[totally-bounded|완전유계]]의 것이며, 집합족과 식으로 정한 집합족의 합집합은 [[family-of-sets|집합족]]의 것이다. 열린 공은 [[open-ball|열린 공]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** $r = c/2$로 두면 순서 성질 (8)에 의해 $0 < r$이고 $r + r = c$이다. $X$의 부분집합 $G$에 대하여
$$
S_G = S \cap \bigcup \{B(x, r) : x \in G\}
$$
로 둔다. 집합족 항목의 (9)에 의해 점 $y$가 $S_G$에 드는 것은 정확히 $y \in S$이고 $y \in B(x, r)$인 $x \in G$가 있을 때이다.

*공 하나에는 $S$의 점이 많아야 하나.* $x \in X$이고 $s$, $t \in S \cap B(x, r)$이면, [[metric-space|거리공간]]의 조건 (iii), (iv)와 순서 성질 (2)의 (iv)에 의해 $d(s, t) \le d(s, x) + d(x, t) < r + r = c$이다. $s \ne t$이면 $d(s, t) \ge c$와 어긋나므로(순서 성질 (1)의 (i)) $s = t$이다. 따라서 $S \cap B(x, r)$는 공집합이거나, 원소 $s$를 가질 때 $\{s\}$이다. 공집합은 유한집합 항목의 (F2)에 의해 원소를 $0$개 갖고, $\{s\} = \emptyset \cup \{s\}$는 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 원소를 $1$개 갖는다. 어느 경우든 $S \cap B(x, r)$는 유한집합이다.

*귀납.* $0$ 이상인 정수 $m$에 대한 명제 $P_m$을 "원소를 $m$개 갖는 $X$의 모든 부분집합 $G$에서 $S_G$는 유한집합이다"로 두고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

- $m = 0$이면 (F2)에 의해 $G = \emptyset$이고, 식으로 정한 집합족 $\{B(x, r) : x \in \emptyset\}$은 원소가 없으므로 그 합집합은 공집합이다(집합족 항목의 빈 집합족 단락). 따라서 $S_G = \emptyset$이고 유한집합이다.
- $P_m$이 참이고 $G$가 원소를 $m + 1$개 갖는다고 하자. 전단사 $\{1, \dots, m+1\} \to G$의 $m + 1$에서의 값이 $G$의 원소이므로 $G$의 원소 $a$가 있다. 원소 하나를 더하거나 빼기 항목의 (b)에 의해 $G' = G - \{a\}$는 원소를 $m$개 갖고, $P_m$에 의해 $S_{G'}$은 유한집합이다. 집합족 항목의 (9)에 의해, $y \in S_G$인 것은 정확히 $y \in S$이고 "$y \in B(x, r)$인 $x \in G'$이 있거나 $y \in B(a, r)$"일 때이므로 $S_G = S_{G'} \cup (S \cap B(a, r))$이다. 두 집합이 유한집합이므로 [[disjoint-union-count|합집합과 차집합의 원소의 개수]]의 (3)에 의해 $S_G$는 유한집합이다. 곧 $P_{m+1}$이 참이다.

*결론.* $(X, d)$가 콤팩트이므로 $X$는 $X$의 콤팩트 부분집합이고([[compact-space|열린 덮개와 콤팩트 공간]]의 콤팩트 집합 단락), 완전유계 항목의 (4)에 의해 $X$는 완전유계이다. 완전유계의 정의를 $\varepsilon = r$에 쓰면 $X \subseteq \bigcup \{B(x, r) : x \in F\}$인 $X$의 유한 부분집합 $F$가 있다. $F$는 어떤 $0$ 이상의 정수 $n$에 대하여 원소를 $n$개 가지므로 $P_n$에 의해 $S_F$는 유한집합이고, $S \subseteq X$이므로 $S_F = S$이다. 따라서 $S$는 유한집합이다.

**2.** 서로 다른 자연수 $m$, $n$에서 [[well-ordering-principle|정렬 원리]]의 (Z5)에 의해 $m < n$이거나 $n < m$이다. $m < n$이면 [[prime-number|소수]]의 진술의 (Z1)에 의해 $m + 1 \le n$이고, 순서 성질 (10)과 (2)의 (i)에 의해 $1 \le n - m$이므로 [[absolute-value|절댓값]]의 (1), (3)에 의해 $|m - n| = n - m \ge 1$이다. $n < m$이어도 같은 방법으로 $|m - n| \ge 1$이다. 곧 $c = 1$로 1의 가정이 성립한다. 그러나 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이다. 1의 대우에 의해 보통 거리의 $\mathbb{R}$은 콤팩트가 아니고, 1에서 콤팩트라는 가정을 뺄 수 없다.
:::

:::exercise[콤팩트 집합의 지름을 이루는 두 점]
$(X, d)$가 거리공간이다.

1. $K$가 $X$의 공집합이 아닌 콤팩트 부분집합이면 $d(p, q) = \operatorname{diam} K$인 $p$, $q \in K$가 있음을 보여라.
2. $\mathbb{R}$(보통 거리)의 열린구간 $(0, 1)$에서는 $|p - q| = \operatorname{diam}(0, 1)$인 $p$, $q \in (0, 1)$이 없음을 보여라.
:::

:::solution
지름은 [[diameter|지름]]의 것이고, 콤팩트 부분집합은 [[compact-space|열린 덮개와 콤팩트 공간]]의 것이다. 최댓값은 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간의 최대·최소 정리]]의 것이다.

**1.** [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (3)에 의해 $K$는 유계이고, 공집합이 아니므로 $\operatorname{diam} K$가 정해진다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (3)의 끝 문장에 의해 부분공간 거리 $d_K$를 준 $(K, d_K)$는 콤팩트 거리공간이다. [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (2)에 의해 곱위상 $\mathcal{T}_{d_K} \otimes \mathcal{T}_{d_K}$를 준 $K \times K$는 콤팩트이고, $K \ne \emptyset$이므로 $K \times K \ne \emptyset$이다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (4)에 의해 거리 $d_K : K \times K \to \mathbb{R}$는 이 곱위상에서 연속이다.

콤팩트 공간의 최대·최소 정리의 (2)에 의해 $d_K$가 최댓값을 갖는 점 $(p, q) \in K \times K$가 있다. 곧 모든 $x$, $y \in K$에서 $d(x, y) = d_K(x, y) \le d_K(p, q) = d(p, q)$이다([[metric-space-examples|거리공간의 예]]의 (3)). 지름 항목의 (2)의 (iii)에 의해 $\operatorname{diam} K \le d(p, q)$이고, (2)의 (ii)에 의해 $d(p, q) \le \operatorname{diam} K$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (ii)에 의해 $d(p, q) = \operatorname{diam} K$이다.

**2.** 지름 항목의 (7)에 의해 $(0, 1)$은 공집합이 아니고 유계이며 $\operatorname{diam}(0, 1) = 1$이다. $p$, $q \in (0, 1)$이면 $0 < p < 1$, $0 < q < 1$이므로 실수의 순서의 성질 (3)의 (iii)과 (2)의 (iv)에 의해 $-1 < p - q < 1$이고, [[absolute-value|절댓값]]의 (7)에 의해 $|p - q| < 1$이다. 순서 성질 (1)의 (i)에 의해 $|p - q| \ne 1$이다. 1의 대우에 의해 $(0, 1)$은 $\mathbb{R}$의 콤팩트 부분집합이 아니고, 이것은 [[compact-space|열린 덮개와 콤팩트 공간]]의 (8)의 (vi)과 맞는다.
:::

:::exercise[거리를 줄이기만 하는 사상과 콤팩트성]
$(X, d)$가 공집합이 아닌 콤팩트 거리공간이고, $f : X \to X$가 $X$의 서로 다른 모든 두 점 $x$, $y$에서
$$
d(f(x), f(y)) < d(x, y)
$$
를 만족한다고 하자.

1. $g(x) = d(x, f(x))$로 정한 $g : X \to \mathbb{R}$가 연속이고, $f$의 고정점이 정확히 하나 있음을 보여라.
2. $X = [0, 1]$에 보통 거리의 부분공간 거리를 주고 $f(x) = x\,(1 + x)^{-1}$로 두면, $f$는 $X$에서 $X$로 가고 1의 가정을 만족하지만 축소 사상이 아님을 보여라. $f$의 고정점을 구하라.
:::

:::solution
축소 사상과 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이고, $K$-립시츠는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 거리공간에는 거리위상을, $\mathbb{R}$에는 보통 위상을 준다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** *$g$는 연속이다.* $x \ne y$이면 가정에 의해 $d(f(x), f(y)) < d(x, y)$이고, $x = y$이면 두 쪽이 모두 $0$이다. 곧 모든 $x$, $y$에서 $d(f(x), f(y)) \le 1 \cdot d(x, y)$이므로 $f$는 $1$-립시츠이고, 립시츠 사상 항목의 (3)에 의해 연속이다. 위상공간 사이의 연속함수 항목의 (1)에 의해 항등함수 $i_X$는 연속이므로, [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (4)의 (i)에 의해 $h(x) = (x, f(x))$로 정한 $h : X \to X \times X$는 곱위상 $\mathcal{T}_d \otimes \mathcal{T}_d$에서 연속이다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (4)에 의해 $d : X \times X \to \mathbb{R}$는 연속이고, $g = d \circ h$이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $g$는 연속이다.

*고정점이 있다.* $(X, d)$는 콤팩트이고 $X \ne \emptyset$이므로 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간의 최대·최소 정리]]의 (2)에 의해 $g$가 최솟값을 갖는 점 $p \in X$가 있다. $f(p) \ne p$라 하자. 그러면 가정을 두 점 $f(p)$, $p$에 쓰고 거리의 조건 (iii)을 쓰면
$$
\begin{aligned}
&g(f(p)) = d(f(p), f(f(p))) \\
&\quad < d(p, f(p)) = g(p)
\end{aligned}
$$
이고, 이것은 $g(p) \le g(f(p))$와 어긋난다(순서 성질 (1)의 (i)). 따라서 $f(p) = p$이다.

*고정점은 하나뿐이다.* $p$, $q$가 고정점이고 $p \ne q$이면 $d(p, q) = d(f(p), f(q)) < d(p, q)$가 되어 순서 성질 (1)의 (i)에 어긋난다. 따라서 $p = q$이다.

**2.** [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)과 [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (3)의 끝 문장에 의해 $X = [0, 1]$은 공집합이 아닌 콤팩트 거리공간이다. $x \in X$이면 순서 성질 (2)의 (ii)에 의해 $0 < 1 \le 1 + x$이므로 $1 + x \ne 0$이고 $f(x)$가 정해진다.

*$X$에서 $X$로.* $0 \le x$와 $0 < (1 + x)^{-1}$(순서 성질 (6)의 (i))에 의해 $0 \le f(x)$이다(순서 성질 (4)의 (iv)). $x < 1 + x$이므로 순서 성질 (4)의 (i)에 의해 $f(x) < (1 + x)(1 + x)^{-1} = 1$이다.

*거리를 줄인다.* $x$, $y \in X$이면 (K1)–(K3), (K8)로 계산해
$$
\begin{aligned}
&f(x) - f(y) \\
&\quad = (x - y)\bigl((1 + x)(1 + y)\bigr)^{-1}
\end{aligned}
$$
이다. $x \ne y$라 하자. 두 수가 모두 $0$일 수는 없으므로, $0 < x$라 하면(다른 경우는 $x$와 $y$를 바꾼다) $1 < 1 + x$이고 $1 \le 1 + y$이다. 순서 성질 (4)의 (i), (iii)에 의해 $1 + y < (1 + x)(1 + y)$이고 $1 \le 1 + y$이므로 $1 < (1 + x)(1 + y)$이며, 순서 성질 (6)의 (ii)에 의해 $\bigl((1 + x)(1 + y)\bigr)^{-1} < 1$이다. [[absolute-value|절댓값]]의 (4), (1)과 $0 < |x - y|$(절댓값의 (2))에 순서 성질 (4)의 (i)을 쓰면 $|f(x) - f(y)| < |x - y|$이다.

*축소 사상이 아니다.* $0 \le k < 1$인 실수 $k$로 $f$가 $k$-립시츠라 하자. $t = (1 - k)/2$로 두면 순서 성질 (3)의 (i), (8)에 의해 $0 < t$이고, $1 - k \le 1$이므로 $t \le 1/2$이어서 $t \in X$이다. $f(0) = 0$이므로 $|f(t) - f(0)| = t(1 + t)^{-1}$이고, 가정에 의해 $t(1 + t)^{-1} \le kt$이다. 양변에 양수 $t^{-1}(1 + t)$를 곱하면(순서 성질 (6)의 (iv)) $1 \le k(1 + t) = k + k(1 - k)/2$이다. 그런데 $0 \le k$이므로 $k/2 \le k$이고(순서 성질 (4)의 (iii)을 $2^{-1} \le 1$에 썼다) $k < 1$이므로 $k/2 < 1$이며(순서 성질 (1)의 (v)), $0 < 1 - k$를 곱하면 순서 성질 (4)의 (i)에 의해
$$
\frac{k(1 - k)}{2} = (1 - k)\,\frac{k}{2} < (1 - k) \cdot 1
$$
이다. 따라서 $k + k(1 - k)/2 < k + (1 - k) = 1$이다(순서 성질 (2)의 (ii)). 이것은 $1 \le k(1 + t)$와 어긋난다(순서 성질 (1)의 (i)). 따라서 $f$는 축소 사상이 아니다.

*고정점.* $f(0) = 0$이므로 $0$이 고정점이고, 1에 의해 고정점은 $0$ 하나뿐이다.

[[contraction-on-intervals|구간 위의 축소 사상]]의 (2)와 [[banach-fixed-point-theorem|바나흐 고정점 정리]]는 축소 상수를 요구하므로 이 $f$에 바로 쓸 수 없고, 1은 그 대신 정의역의 콤팩트성을 쓴다.
:::

:::exercise[유리수 안에서 √2 쪽으로 줄어드는 닫힌집합들]
$\mathbb{Q}$에 보통 거리의 부분공간 거리 $d_{\mathbb{Q}}$를 주고, 자연수 $n$마다
$$
K_n = \{q \in \mathbb{Q} : |q - \sqrt{2}| \le n^{-1}\}
$$
으로 둔다.

1. 각 $K_n$이 $(\mathbb{Q}, d_{\mathbb{Q}})$에서 공집합이 아닌 닫힌집합이고 $(K_n)$이 감소함을 보여라.
2. 각 $K_n$이 유계이고, $n$번째 항이 $\operatorname{diam} K_n$인 실수열이 $0$으로 수렴함을 보여라.
3. $\bigcap \{K_n : n \in \mathbb{N}\} = \emptyset$임을 보이고, $K_n$ 가운데 $\mathbb{Q}$의 콤팩트 부분집합이 아닌 것이 있음을 보여라.
:::

:::solution
$\sqrt{2}$는 [[square-root-exists|제곱근의 존재]]의 것이고, 유리수는 [[rational-and-irrational-numbers|유리수와 무리수]]의 것이다. 감소하는 수열과 그 교집합은 [[cantor-intersection-theorem|칸토어 교집합 정리]]의 것이고, 지름은 [[diameter|지름]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값"은 [[absolute-value|절댓값]]의 번호이며, 자연수 $n$에서 $0 < n^{-1}$이다(순서 성질 (10)).

**1.** *닫힌집합.* [[open-ball|열린 공]]의 (5)에 의해 $\mathbb{R}$의 닫힌 공 $C(\sqrt{2}, n^{-1})$은 닫힌구간 $[\sqrt{2} - n^{-1}, \sqrt{2} + n^{-1}]$이고, [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)에 의해 $\mathbb{R}$의 닫힌집합이다. 절댓값 (8)에 의해 $K_n = C(\sqrt{2}, n^{-1}) \cap \mathbb{Q}$이다. [[metric-subspace-topology|거리공간의 부분공간 위상]]의 (1)에 의해 $d_{\mathbb{Q}}$의 거리위상은 보통 위상의 부분공간 위상이므로, [[subspace-topology|부분공간 위상]]의 (2)와 [[closed-set|닫힌집합]]의 (6)에 의해 $K_n$은 $(\mathbb{Q}, d_{\mathbb{Q}})$에서 닫힌집합이다.

*공집합이 아니다.* $\sqrt{2} - n^{-1} < \sqrt{2} + n^{-1}$이므로(순서 성질 (3)의 (ii), (2)의 (iv)) [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 그 사이에 유리수 $r$이 있고, 절댓값 (8)에 의해 $|r - \sqrt{2}| < n^{-1}$이므로 $r \in K_n$이다.

*감소.* 순서 성질 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$이므로 $q \in K_{n+1}$이면 $|q - \sqrt{2}| \le n^{-1}$이고 $q \in K_n$이다.

**2.** $q$, $q' \in K_n$이면 [[triangle-inequality|삼각부등식]]의 (4)와 절댓값 (3)에 의해 $d_{\mathbb{Q}}(q, q') = |q - q'| \le |q - \sqrt{2}| + |\sqrt{2} - q'| \le 2n^{-1}$이다. 따라서 $2n^{-1}$은 $K_n$의 두 점 사이 거리들의 집합의 상계이고, 지름 항목의 (1)에 의해 $K_n$은 유계이며, (2)의 (i), (iii)에 의해 $0 \le \operatorname{diam} K_n \le 2n^{-1}$이다. [[basic-limits|기본적인 극한]]의 (2)와 [[limit-of-sum-and-product|합과 곱의 극한]]의 (5)에 의해 $n$번째 항이 $2n^{-1}$인 실수열은 $0$으로 수렴하므로, 절댓값 (1)과 [[comparison-with-null-sequence|0으로 수렴하는 수열과의 비교]]의 (3)에 의해 $(\operatorname{diam} K_n)$은 $0$으로 수렴한다.

**3.** *교집합은 공집합이다.* [[family-of-sets|집합족]]의 (9)에 의해 $q$가 교집합에 들면 $q \in \mathbb{Q}$이고 모든 자연수 $n$에서 $|q - \sqrt{2}| \le n^{-1}$이다. $0 < |q - \sqrt{2}|$라 하면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $n^{-1} < |q - \sqrt{2}|$인 자연수 $n$이 있어 어긋나므로(순서 성질 (1)의 (i)), 절댓값 (2)와 순서 성질 (1)의 (iii), (ii)에 의해 $|q - \sqrt{2}| = 0$이고 $q = \sqrt{2}$이다. 그런데 제곱근의 존재 항목의 (3)에 의해 $\sqrt{2}$는 무리수이므로 $q \in \mathbb{Q}$와 어긋난다. 따라서 교집합은 공집합이다.

*콤팩트가 아닌 $K_n$.* [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $(\mathbb{Q}, d_{\mathbb{Q}})$는 하우스도르프 공간이다. 모든 $K_n$이 콤팩트 부분집합이라면, 1에 의해 이들은 공집합이 아닌 콤팩트 부분집합들의 감소하는 수열이므로 칸토어 교집합 정리의 (3)에 의해 교집합이 공집합이 아니어야 한다. 이것은 위에 어긋나므로 $K_n$ 가운데 $\mathbb{Q}$의 콤팩트 부분집합이 아닌 것이 있다. 그래서 칸토어 교집합 정리의 (3), (4)에서 "콤팩트"를 "닫혀 있고 지름이 $0$으로 수렴한다"로 바꿀 수는 없다.
:::
