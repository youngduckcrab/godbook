---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "3.4.1절, Example 3.4.2 (p.138)"
  - ref: lebl-basic-analysis
    loc: "7.6.3절, Exercise 7.6.11 (p.300)"
  - ref: fuglede-basic-topology
    loc: "Separation 절, Proposition metric-spaces-normal (content/separation.tex:35–41)"
added: 2026-11-26
---

:::exercise[이산 거리에서 보통 거리로 가는 항등사상]
$\mathbb{R}$의 보통 거리를 $d$, $\mathbb{R}$ 위의 이산 거리를 $\delta$라 하고, $\mathbb{R}$의 항등함수를 $i$라 한다.

1. $i : (\mathbb{R}, \delta) \to (\mathbb{R}, d)$가 고르게 연속이지만 립시츠 사상이 아님을 보여라.
2. $i : (\mathbb{R}, d) \to (\mathbb{R}, \delta)$가 연속이 아님을 보여라.
3. $[0, 1]$에 $\delta$와 $d$의 부분공간 거리를 주면, $i$를 $[0, 1]$로 제한한 사상 $([0, 1], \delta) \to ([0, 1], d)$는 $1$-립시츠임을 보여라.
:::

:::solution
거리공간의 예는 [[metric-space-examples|거리공간의 예]]의 것이고, 고른 연속은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이며, $K$-립시츠와 립시츠 사상은 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** 정의역의 거리 $\delta$가 이산 거리이므로 고르게 연속인 사상 항목의 (7)에 의해 $i$는 고르게 연속이다.

$i$가 어떤 실수 $K$로 $K$-립시츠라 하자. 그러면 $0 \le K$이고 모든 실수 $x$, $y$에서 $|x - y| \le K\,\delta(x, y)$이다. $x = K + 1$, $y = 0$으로 두면 순서 성질 (5)의 (ii), (2)의 (ii)에 의해 $0 \le K < K + 1$이므로 $x \ne y$이고 $\delta(x, y) = 1$이다. [[absolute-value|절댓값]]의 (1)에 의해 $|x - y| = K + 1$이므로 $K + 1 \le K$가 되어 $K < K + 1$과 어긋난다(순서 성질 (1)의 (i)). 따라서 $i$는 립시츠 사상이 아니다.

**2.** [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (2)에 의해, $i$가 연속이라면 점 $0$에서 그 (1)의 (c)가 성립해야 한다. $\varepsilon = 1$로 두고 실수 $\eta > 0$을 아무것이나 잡자. $y = \eta/2$이면 순서 성질 (8)에 의해 $0 < y < \eta$이므로, 절댓값의 (1), (3)에 의해 $d(0, y) = y < \eta$이다. 그런데 $y \ne 0$이므로 $\delta(0, y) = 1$이고 $1 < 1$은 성립하지 않는다. 어떤 $\eta$로도 (c)가 성립하지 않으므로 $i$는 연속이 아니다.

**3.** $[0, 1]$ 위의 두 부분공간 거리는 [[metric-space-examples|거리공간의 예]]의 (3)에 의해 $[0, 1]$의 점에서 $\delta$, $d$와 같은 값을 가진다. $x$, $y \in [0, 1]$이라 하자. $x = y$이면 두 쪽이 모두 $0$이다. $x \ne y$이면 $\delta(x, y) = 1$이고, $0 \le x \le 1$, $0 \le y \le 1$에서 순서 성질 (3)의 (iii)과 (2)의 (iii)에 의해 $-1 \le x - y \le 1$이므로 절댓값의 (7)에 의해 $d(x, y) \le 1 = 1 \cdot \delta(x, y)$이다. 따라서 이 사상은 $1$-립시츠이다.
:::

:::exercise[두 집합의 합집합까지의 거리]
$(X, d)$가 거리공간이고 $A$, $B$가 $X$의 공집합이 아닌 부분집합이며 $x \in X$이다.

1. $A \subseteq B$이면 $\operatorname{dist}(x, B) \le \operatorname{dist}(x, A)$임을 보여라.
2. $\operatorname{dist}(x, A \cup B) = \min\{\operatorname{dist}(x, A), \operatorname{dist}(x, B)\}$임을 보여라.
:::

:::solution
$\operatorname{dist}$는 [[distance-to-a-set|점과 집합 사이의 거리]]의 것이고, 하계와 하한은 [[upper-bound-and-supremum|상계와 상한]]의 것이다. 두 수의 최소는 [[absolute-value|절댓값]]의 것이다. $A \cup B$는 $A$를 포함하므로 공집합이 아니고, $\operatorname{dist}(x, A \cup B)$가 정해진다.

**1.** $a \in A$이면 $a \in B$이므로 점과 집합 사이의 거리 항목의 (1)에 의해 $\operatorname{dist}(x, B) \le d(x, a)$이다. 곧 $\operatorname{dist}(x, B)$는 집합 $\{d(x, a) : a \in A\}$의 하계이다. $\operatorname{dist}(x, A)$는 이 집합의 하한이므로, 하한의 정의에 의해 $\operatorname{dist}(x, B) \le \operatorname{dist}(x, A)$이다.

**2.** $m = \min\{\operatorname{dist}(x, A), \operatorname{dist}(x, B)\}$로 둔다.

*$m \le \operatorname{dist}(x, A \cup B)$.* $c \in A \cup B$라 하자. $c \in A$이면 점과 집합 사이의 거리 항목의 (1)과 절댓값의 (10)에 의해 $m \le \operatorname{dist}(x, A) \le d(x, c)$이고, $c \in B$이면 같은 이유로 $m \le \operatorname{dist}(x, B) \le d(x, c)$이다([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (v)). 곧 $m$은 $\{d(x, c) : c \in A \cup B\}$의 하계이고, 하한의 정의에 의해 $m \le \operatorname{dist}(x, A \cup B)$이다.

*$\operatorname{dist}(x, A \cup B) \le m$.* $A \subseteq A \cup B$이고 $B \subseteq A \cup B$이므로 1에 의해 $\operatorname{dist}(x, A \cup B)$는 $\operatorname{dist}(x, A)$ 이하이고 $\operatorname{dist}(x, B)$ 이하이다. 절댓값의 (10)에 의해 $\operatorname{dist}(x, A \cup B) \le m$이다.

실수의 순서의 성질 (1)의 (ii)에 의해 두 수는 같다.
:::

:::exercise[가까워지는 두 점열과 ℝ 위의 x²]
$(X, d_X)$, $(Y, d_Y)$가 거리공간이다.

1. $f : X \to Y$가 고르게 연속이고, $X$의 두 수열 $(p_n)$, $(q_n)$에 대하여 $n$번째 항이 $d_X(p_n, q_n)$인 실수열이 $0$으로 수렴하면, $n$번째 항이 $d_Y(f(p_n), f(q_n))$인 실수열도 $0$으로 수렴함을 보여라.
2. $\mathbb{R}$에 보통 거리를 주고 $g(x) = x^2$로 정한 사상 $g : \mathbb{R} \to \mathbb{R}$를 생각한다. $p_n = n + n^{-1}$, $q_n = n$에 1을 써서 $g$가 고르게 연속이 아님을 보여라. $\mathbb{R}$의 항등사상은 고르게 연속이므로, 고르게 연속인 두 실함수의 곱은 고르게 연속이 아닐 수 있다.
:::

:::solution
고른 연속은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이고, 실수열의 수렴은 [[limit-of-sequence|수열의 수렴]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값"은 [[absolute-value|절댓값]]의 번호이다.

**1.** 양의 실수 $\varepsilon$이 주어지면 고른 연속의 정의에 의해, $d_X(p, q) < \eta$인 모든 $p$, $q \in X$에서 $d_Y(f(p), f(q)) < \varepsilon$인 실수 $\eta > 0$이 있다. $(d_X(p_n, q_n))$이 $0$으로 수렴하므로 $n \ge M$이면 $|d_X(p_n, q_n) - 0| < \eta$인 자연수 $M$이 있고, [[metric-space|거리공간]]의 조건 (i)과 절댓값 (1)에 의해 $d_X(p_n, q_n) < \eta$이다. 그러면 $n \ge M$일 때 $d_Y(f(p_n), f(q_n)) < \varepsilon$이고, 같은 이유로 $|d_Y(f(p_n), f(q_n)) - 0| < \varepsilon$이다. 따라서 이 실수열은 $0$으로 수렴한다.

**2.** 자연수 $n$에서 순서 성질 (10)에 의해 $n \ne 0$이므로 $p_n$이 정해진다. 거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고 그 (1)에 의해 $x^2 = xx$이다.

*두 점의 거리.* 절댓값 (1)과 $0 < n^{-1}$(순서 성질 (10))에 의해 $d(p_n, q_n) = |n^{-1}| = n^{-1}$이고, [[basic-limits|기본적인 극한]]의 (2)에 의해 이 실수열은 $0$으로 수렴한다.

*상의 거리.* (K1)–(K3), (K8)로 계산하면
$$
\begin{aligned}
&g(p_n) - g(q_n) \\
&\quad = (n + n^{-1})(n + n^{-1}) - nn \\
&\quad = 2 + n^{-1} n^{-1}
\end{aligned}
$$
이다. 순서 성질 (5)의 (iii)에 의해 $0 \le n^{-1} n^{-1}$이므로 $2 \le g(p_n) - g(q_n)$이고, 절댓값 (1)에 의해 $d(g(p_n), g(q_n)) \ge 2$이다. 이 실수열이 $0$으로 수렴한다면 $\varepsilon = 1$에 대하여 $n \ge M$일 때 $d(g(p_n), g(q_n)) < 1$인 자연수 $M$이 있어야 하는데, $n = M$에서 $2 \le d(g(p_M), g(q_M)) < 1$이 되어 $1 < 2$(순서 성질 (10))와 어긋난다(순서 성질 (1)의 (i), (v)). 그래서 $(d(g(p_n), g(q_n)))$은 $0$으로 수렴하지 않고, 1의 대우에 의해 $g$는 고르게 연속이 아니다.

*항등사상.* 고르게 연속인 사상 항목의 (7)에 의해 항등사상 $i_{\mathbb{R}}$은 고르게 연속이고, 모든 $x$에서 $g(x) = i_{\mathbb{R}}(x)\,i_{\mathbb{R}}(x)$이다.
:::

:::exercise[두 번 적용하면 축소 사상이 되는 사상]
$(X, d)$가 공집합이 아닌 완비 거리공간이고 $f : X \to X$가 사상이며, 합성 $f \circ f$가 축소 사상이라 하자.

1. $f$의 고정점이 정확히 하나 있음을 보여라.
2. $X = \{0, 1, 2\}$에 이산 거리를 주고 $f(0) = 1$, $f(1) = 1$, $f(2) = 0$으로 정하면, $f \circ f$는 축소 사상이지만 $f$는 축소 사상이 아님을 보여라. $f$의 고정점을 구하라.
:::

:::solution
축소 사상, 축소 상수, 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이고, 합성은 [[function-composition|함수의 합성]]의 것이다. $g = f \circ f$로 둔다.

**1.** [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)에 의해 $g$의 고정점이 정확히 하나 있다. 그것을 $p$라 하자.

*$p$는 $f$의 고정점이다.* $q = f(p)$로 두면 $g(q) = f(f(f(p))) = f(g(p)) = f(p) = q$이므로 $q$도 $g$의 고정점이다. $g$의 고정점은 $p$ 하나뿐이므로 $f(p) = q = p$이다.

*$f$의 고정점은 $p$뿐이다.* $f(r) = r$이면 $g(r) = f(f(r)) = f(r) = r$이므로 $r$은 $g$의 고정점이고, $r = p$이다.

**2.** $g(0) = f(1) = 1$, $g(1) = f(1) = 1$, $g(2) = f(0) = 1$이므로 $g$는 모든 점에서 값이 $1$인 상수 사상이고, 축소 사상과 고정점 항목의 (3)에 의해 축소 사상이다. 한편 $X$의 거리는 이산 거리이고 $f(0) = 1 \ne 0 = f(2)$이므로, 같은 항목의 (4)에 의해 $f$는 축소 사상이 아니다.

[[metric-space-examples|거리공간의 예]]의 (2)에 의해 $(X, d)$는 거리공간이고, [[complete-metric-space|완비 거리공간]]의 (3)의 (iii)에 의해 완비이며, 공집합이 아니므로 1이 적용된다. $f(1) = 1$이므로 $f$의 고정점은 $1$ 하나이다. 실제로 $f(0) = 1 \ne 0$이고 $f(2) = 0 \ne 2$이다.
:::

:::exercise[서로소인 두 닫힌집합을 열린집합으로 떼어 놓기]
$(X, d)$가 거리공간이고 $A$, $B$가 $X$의 공집합이 아닌 닫힌집합이며 $A \cap B = \emptyset$이라 하자. $x \in X$에서 $a(x) = \operatorname{dist}(x, A)$, $b(x) = \operatorname{dist}(x, B)$로 두고
$$
\begin{aligned}
U &= \{x \in X : a(x) < b(x)\}, \\
V &= \{x \in X : b(x) < a(x)\}
\end{aligned}
$$
으로 둘 때, $U$와 $V$가 $X$의 열린집합이고 $U \cap V = \emptyset$이며 $A \subseteq U$, $B \subseteq V$임을 보여라.
:::

:::solution
$\operatorname{dist}$는 [[distance-to-a-set|점과 집합 사이의 거리]]의 것이고, 거리공간에는 거리위상([[topology-examples|위상의 예]]의 (4))을 주며 $\mathbb{R}$에는 보통 위상을 준다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**연속함수 하나로 쓰기.** $a, b : X \to \mathbb{R}$는 점과 집합 사이의 거리 항목의 (3)에 의해 연속이다. 모든 점에서 값이 $-1$인 함수 $X \to \mathbb{R}$는 위상공간 사이의 연속함수 항목의 (2)에 의해 연속이므로, [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (3)을 곱과 합에 쓰면 $h(x) = a(x) + (-1)\,b(x)$로 정한 $h : X \to \mathbb{R}$는 연속이다. (K9)에 의해 $h(x) = a(x) - b(x)$이다.

$N = \{t \in \mathbb{R} : t < 0\}$, $P = \{t \in \mathbb{R} : 0 < t\}$로 두면 순서 성질 (3)의 (i)과 (2)의 (ii)에 의해 $a(x) < b(x)$인 것은 정확히 $h(x) < 0$일 때이고, $b(x) < a(x)$인 것은 정확히 $0 < h(x)$일 때이다. 따라서 $U = h^{-1}(N)$, $V = h^{-1}(P)$이다.

**열린집합.** [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)에 의해 $N$과 $P$는 $(\mathbb{R}, d)$의 열린집합, 곧 보통 위상의 원소이다. $h$가 연속이므로 $U$와 $V$는 $X$의 거리위상의 원소이고, 곧 $X$의 열린집합이다.

**서로소.** $x \in U \cap V$이면 $h(x) < 0$이고 $0 < h(x)$이어서 순서 성질 (1)의 (i)에 어긋난다. 따라서 $U \cap V = \emptyset$이다.

**$A \subseteq U$, $B \subseteq V$.** $x \in A$이면 점과 집합 사이의 거리 항목의 (1)에 의해 $a(x) = 0$이다. $A \cap B = \emptyset$이므로 $x \notin B$이고, $B$가 닫힌집합이므로 같은 항목의 (5)에 의해 $0 < b(x)$이다. 곧 $a(x) < b(x)$이고 $x \in U$이다. $A$와 $B$의 자리를 바꾸어 같은 논증을 하면 $B \subseteq V$이다.
:::

:::exercise[방정식 x³ + 4x − 1 = 0 의 해를 반복열로 어림하기]
$I = [0, 1/4]$에 보통 거리의 부분공간 거리를 주고
$$
f(x) = \frac{1 - x^3}{4}
$$
로 정한 $f : I \to \mathbb{R}$를 생각한다.

1. 모든 $x \in I$에서 $f(x) \in I$이고, $f$가 미분가능하며 $|f'(x)| \le 3/64$임을 보여라.
2. 방정식 $x^3 + 4x - 1 = 0$의 해가 $I$에 정확히 하나 있음을 보여라. 그 해를 $p$라 하고 $0$에서 시작하는 $f : I \to I$의 반복열을 $(x_n)$이라 할 때, 모든 자연수 $n$에서
   $$
   |x_n - p| \le \Bigl(\frac{3}{64}\Bigr)^{n-1} \frac{16}{61}
   $$
   임을 보이고, $x_2$와 $x_3$을 구해 $|x_3 - p| \le 9/15616$임을 확인하라.
:::

:::solution
미분가능과 도함수는 [[derivative|미분계수와 도함수]]의 것이고, 거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이며, 반복열은 [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. [[interval|구간]]의 정의에 의해 $I$는 닫힌구간이다.

**1.** *값의 범위.* $x \in I$이면 $0 \le x \le 1/4$이므로 실수의 거듭제곱 항목의 (6)의 (i), (ii)에 의해 $0 \le x^3 \le (1/4)^3 = 1/64$이다. 순서 성질 (3)의 (iii)과 (2)의 (i)에 의해 $63/64 \le 1 - x^3 \le 1$이고, 양의 수 $4^{-1}$을 곱하면(순서 성질 (4)의 (iii)) $63/256 \le f(x) \le 1/4$이다. $0 \le 63/256$이므로 $f(x) \in I$이다.

*도함수.* [[derivative-of-power|거듭제곱 함수의 미분]]의 (2)에 의해 $x$를 $x^3$으로 보내는 함수 $I \to \mathbb{R}$는 미분가능하고 그 도함수는 $3x^2$이다. 미분계수와 도함수 항목의 (1)에 의해 값이 $4^{-1}$인 상수함수는 미분가능하고 도함수가 $0$이다. $f(x) = 4^{-1} + (-4^{-1})\,x^3$이므로 [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $f$는 미분가능하고, 모든 $x \in I$에서
$$
f'(x) = -\frac{3}{4}\,x^2
$$
이다. $0 \le x \le 1/4$이므로 순서 성질 (7)의 (ii)에 의해 $0 \le x^2 \le 1/16$이고, [[absolute-value|절댓값]]의 (4), (1)에 의해 $|f'(x)| = (3/4)\,x^2 \le 3/64$이다.

**2.** *해와 고정점.* $x \in I$에 대하여 (K1)–(K3), (K8)로 계산하면 $f(x) = x$인 것은 정확히 $1 - x^3 = 4x$일 때이고, 이것은 정확히 $x^3 + 4x - 1 = 0$일 때이다. 곧 $I$에서 방정식의 해는 정확히 $f$의 고정점이다.

1에 의해 $k = 3/64$는 $0 \le k < 1$이고 [[contraction-on-intervals|구간 위의 축소 사상]]의 가정을 만족하며, $I$는 닫힌구간이고 $f(I) \subseteq I$이다. 그 (2)에 의해 $f$는 $I$에서 고정점을 정확히 하나 갖는다. 따라서 방정식의 해가 $I$에 정확히 하나 있다.

*어림.* 같은 (2)에 의해 모든 자연수 $n$에서 $|x_n - p| \le k^{n-1}(1 - k)^{-1}|x_1 - x_2|$이다. $x_1 = 0$, $x_2 = f(0) = 1/4$이므로 $|x_1 - x_2| = 1/4$이고 $(1 - k)^{-1} = 64/61$이므로
$$
\begin{aligned}
&|x_n - p| \\
&\quad \le \Bigl(\frac{3}{64}\Bigr)^{n-1} \cdot \frac{64}{61} \cdot \frac{1}{4} \\
&\quad = \Bigl(\frac{3}{64}\Bigr)^{n-1} \frac{16}{61}
\end{aligned}
$$
이다. $x_3 = f(1/4) = (1 - 1/64)/4 = 63/256$이고, $n = 3$이면 오른쪽은 $\frac{9}{4096} \cdot \frac{16}{61} = \frac{144}{249856} = \frac{9}{15616}$이다.
:::
