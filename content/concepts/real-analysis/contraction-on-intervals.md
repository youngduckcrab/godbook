---
title: 구간 위의 축소 사상
title_en: Contractions on Intervals
aliases: [도함수로 보는 축소 사상, 구간 위의 고정점, 뉴턴 반복, contraction on an interval, Newton iteration for square root of 2]
kind: proposition
field: real-analysis
msc: ["26A18", "47H10"]
level: undergrad
summary: 구간 위의 미분가능한 실함수의 도함수의 절댓값이 어디서나 k 이하이면(0 ≤ k < 1) 그 함수는 k-립시츠이고, 구간을 자기 자신으로 보내면 축소 사상이다. 구간이 ℝ, 닫힌구간, 닫힌 반직선이면 바나흐 고정점 정리에 의해 고정점이 정확히 하나 있고 반복열이 그리로 수렴한다. 1 이상인 실수 위의 x/2 + 1/x 로 √2 를 어림한다.
requires: [set, subset, function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, square-root-exists, interval, real-valued-function, continuous-function, derivative, derivative-rules, differentiable-implies-continuous, mean-value-theorem, metric-space, metric-space-examples, lipschitz-map, contraction-mapping, complete-metric-space, closed-subset-of-complete-space, banach-fixed-point-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.3절 연습문제 7.6.4 (p.299), 7.6.5, 7.6.9 (p.300); 4.2.6절 연습문제 4.2.3 (p.169)"
    checked: original
    note: "출처는 이 내용을 본문의 명제로 두지 않고 연습문제로 둔다. (1)의 앞 문장은 출처 연습문제 4.2.3(p.169, 도함수가 유계인 미분가능한 함수 f : ℝ → ℝ 은 립시츠 연속이다)을 일반 구간과 상수 k 로 진술한 것이고, 증명은 이 사이트가 평균값 정리로 쓴 것이다. 예시 '1 이상인 실수 위의 x/2 + 1/x'는 출처 연습문제 7.6.9(p.300, f(x) = x − (x² − 2)/(2x) 가 [1, ∞) 를 자기 자신으로 보내는 축소 사상이고 고정점이 √2 임을 보여라. 식은 그림으로 확인했다)와 같은 함수이다(x − (x² − 2)/(2x) = x/2 + 1/x). 출처는 그 연습문제에서 뉴턴의 방법이라고 부르고, 고정점 정리의 증명의 방법으로 √2 를 어림할 수 있다고 적는다. (1)의 거꾸로 방향(미분가능한 립시츠 함수의 도함수는 유계이다)은 출처 연습문제 4.1.9(p.160)가 묻는다. 반례 '1 이상인 실수 위의 x + 1/x: 도함수의 절댓값이 늘 1 미만인 경우'는 출처 연습문제 7.6.6 b)(p.300: 완비 거리공간에서 고정점이 없는 1-립시츠 사상을 찾아라)에 답하는 예이기도 하다. 첫째 확인 질문([0, 1] 위의 x²/4)은 출처 연습문제 7.6.5(p.300, [0, 1/4] 위의 x² 이 축소 사상이다)와 같은 꼴의 함수를 다룬다. 둘째 확인 질문([0, 1] 위의 x/2 + 5)의 함수는 출처 연습문제 7.6.4(p.299)의 kx + b 꼴이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 다른 항목의 예시에 기대던 계산 1건, 근거가 빠진 반례 1건, 근거 없이 단정하던 문장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
구간과 닫힌구간 $[a, b]$는 [[interval]]의 것이고, 미분가능과 미분계수 $f'(x)$는 [[derivative]]의 것이다. 거리공간과 부분공간 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, $\mathbb{R}$의 부분집합에는 보통 거리의 부분공간 거리를 준다. $K$-립시츠는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이고, 축소 사상과 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이며, 반복열은 [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 것이다. 아래에서 $I$는 구간이고, $f : I \to \mathbb{R}$는 미분가능한 함수이며, $k$는 $0 \le k < 1$인 실수이고, $I$의 모든 점 $x$에서 $|f'(x)| \le k$라 하자.

1. (도함수로 누르기) $I$의 모든 점 $x$, $y$에서 $|f(x) - f(y)| \le k\,|x - y|$이다. 따라서 $f : I \to \mathbb{R}$는 $k$-립시츠이다. 또 모든 $x \in I$에서 $f(x) \in I$이면 $f$를 $I$에서 $I$로의 사상으로 본 것은 축소 상수 $k$의 축소 사상이다.
2. (고정점) 여기에 더해 $I$가 $\mathbb{R}$이거나, 닫힌구간 $[a, b]$이거나, 실수 $a$에 대한 닫힌 반직선 $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : x \le a\}$ 가운데 하나이고, 모든 $x \in I$에서 $f(x) \in I$라 하자. 그러면 $f$는 $I$에서 고정점을 정확히 하나 갖는다. 그 고정점을 $p$라 하면, $I$의 모든 점 $c$에 대하여 $c$에서 시작하는 $f : I \to I$의 반복열 $(x_n)$은 $p$로 수렴하고, 모든 자연수 $n$에서
   $$
   |x_n - p| \le \frac{k^{n-1}}{1 - k}\,|x_1 - x_2|
   $$
   이다.
:::

:::english
Intervals and closed intervals $[a, b]$ are as in the entry on intervals, and differentiability and the derivative $f'(x)$ are as in the entry on derivatives. Metric spaces and subspace metrics are as in the entries on metric spaces, and subsets of $\mathbb{R}$ carry the subspace metric of the standard metric. $K$-Lipschitz maps, contractions and fixed points, and sequences of iterates are as in the corresponding entries. Throughout, $I$ is an interval, $f : I \to \mathbb{R}$ is a differentiable function, $k$ is a real number with $0 \le k < 1$, and $|f'(x)| \le k$ at every point $x$ of $I$.

1. (Bounding by the derivative) For all points $x$, $y$ of $I$, $|f(x) - f(y)| \le k\,|x - y|$. Hence $f : I \to \mathbb{R}$ is $k$-Lipschitz. Moreover, if $f(x) \in I$ for all $x \in I$, then $f$, regarded as a map from $I$ to $I$, is a contraction with contraction constant $k$.
2. (Fixed points) Suppose in addition that $I$ is $\mathbb{R}$, a closed interval $[a, b]$, or one of the closed half-lines $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : x \le a\}$ for a real number $a$, and that $f(x) \in I$ for all $x \in I$. Then $f$ has exactly one fixed point in $I$. Calling it $p$, for every point $c$ of $I$ the sequence of iterates $(x_n)$ of $f : I \to I$ starting at $c$ converges to $p$, and for every natural number $n$,
   $$
   |x_n - p| \le \frac{k^{n-1}}{1 - k}\,|x_1 - x_2|.
   $$
:::

## 직관

도함수는 그 점 근처에서 함수가 거리를 몇 배로 늘이거나 줄이는지를 나타냅니다. 평균값 정리는 두 점 사이에서 함숫값의 변화가 그 사이 어느 점의 도함수 배와 같다고 말하므로, 도함수의 절댓값이 어디서나 $k$ 이하이면 어느 두 점 사이에서도 거리가 $k$배 이하로 줄어듭니다((1)). 비탈길에 비유하면, 경사가 어디서나 $k$ 이하인 길에서는 수평으로 $h$만큼 갈 때 높이가 $kh$보다 더 바뀌지 않습니다.

여기서 가정은 "어디서나 $|f'(x)| < 1$"이 아니라 "하나의 $k < 1$로 어디서나 $|f'(x)| \le k$"입니다. 아래 반례에서는 모든 점에서 $|f'(x)| < 1$인데 그 값이 $1$에 얼마든지 가까워지고, 고정점이 없습니다. (2)의 구간의 꼴은 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (3)과 [[complete-metric-space|완비 거리공간]]의 (2)로 완비성을 얻을 수 있는 구간들이고, 바나흐 고정점 정리를 쓰기 위한 것입니다.

## 증명

:::idea
(1)은 두 점 사이의 닫힌구간에 평균값 정리를 쓴다. (2)는 그 구간이 완비임을 확인하고 바나흐 고정점 정리를 쓴다.
:::

:::hint
$x < y$이면 $[x, y] \subseteq I$이고, $f$를 $[x, y]$로 제한하면 평균값 정리의 가정이 성립합니다.
:::

:::proof
"순서 성질"은 [[order-properties-of-reals]]의 번호이다.

**(1).** $x$, $y \in I$라 하자. $x = y$이면 두 쪽이 모두 $0$이다([[absolute-value]]의 (2), (K9)). $x \ne y$이면 둘 가운데 작은 것을 $u$, 큰 것을 $v$라 하자. 그러면 $u < v$이고 [[absolute-value]]의 (3)에 의해 $|f(x) - f(y)| = |f(v) - f(u)|$, $|x - y| = |v - u| = v - u$이다([[absolute-value]]의 (1), 순서 성질 (3)의 (i)).

[[interval]]의 (4)에 의해 $[u, v] \subseteq I$이고, 그 (1)에 의해 $[u, v]$는 구간이다. $h = f|_{[u, v]}$라 하자. [[differentiable-implies-continuous|미분가능과 연속]]의 (2)에 의해 $f$는 연속함수이고, [[continuous-function]]의 (5)에 의해 $h$는 연속함수이다. [[derivative]]의 (2)에 의해 $h$는 미분가능한 함수이고 모든 $c \in [u, v]$에서 $h'(c) = f'(c)$이다. 특히 $h$는 열린구간 $(u, v)$에서 미분가능하다. [[mean-value-theorem|평균값 정리]]에 의해 $h(v) - h(u) = h'(c)\,(v - u)$인 $c \in (u, v)$가 있다. [[real-valued-function]]의 (6)에 의해 $h(v) = f(v)$, $h(u) = f(u)$이므로, [[absolute-value]]의 (4), (1)에 의해
$$
\begin{aligned}
|f(v) - f(u)| &= |f'(c)|\,(v - u) \\
&\le k\,(v - u)
\end{aligned}
$$
이다. 뒤 부등식은 $|f'(c)| \le k$에 $0 < v - u$를 곱한 것이다(순서 성질 (4)의 (iii)). 따라서 $|f(x) - f(y)| \le k\,|x - y|$이다.

[[metric-space-examples]]의 (1), (3)에 의해 $I$의 부분공간 거리로 $d_I(x, y) = |x - y|$이고 $\mathbb{R}$의 보통 거리로 $d(f(x), f(y)) = |f(x) - f(y)|$이므로, $0 \le k$와 함께 $f : I \to \mathbb{R}$는 $k$-립시츠이다. 모든 $x \in I$에서 $f(x) \in I$이면 [[function]]의 진술에 의해 같은 집합 $f$는 $I$에서 $I$로의 함수이고, [[lipschitz-map|립시츠 사상]]의 (5)의 공역 바꾸기에 의해 $f : I \to I$도 $k$-립시츠이다. $k < 1$이므로 이것은 축소 상수 $k$의 축소 사상이다.

**(2).** 먼저 $(I, d_I)$가 공집합이 아닌 완비 거리공간임을 보인다. [[interval]]의 정의에 의해 $I$는 서로 다른 두 원소를 가지므로 공집합이 아니다. $I = \mathbb{R}$이면 [[metric-space-examples]]의 (3)에 의해 $d_{\mathbb{R}}$은 보통 거리 자신이고 [[complete-metric-space|완비 거리공간]]의 (2)에 의해 완비이다. $I$가 닫힌구간이나 닫힌 반직선이면 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (3)의 (i)에 의해 완비이다.

(1)에 의해 $f : I \to I$는 축소 상수 $k$의 축소 사상이므로, [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)에 의해 $f$의 고정점 $p$가 정확히 하나 있고, $I$의 모든 점 $c$에서 시작하는 반복열 $(x_n)$은 $p$로 수렴하며, 모든 자연수 $n$에서 $d_I(x_n, p) \le k^{n-1}(1 - k)^{-1} d_I(x_1, x_2)$이다. $d_I(x_n, p) = |x_n - p|$, $d_I(x_1, x_2) = |x_1 - x_2|$이므로 (2)의 부등식을 얻는다. $\blacksquare$
:::

## 예시와 반례

:::example[1 이상인 실수 위의 $x/2 + 1/x$]
$J = \{x \in \mathbb{R} : 1 \le x\}$와 $g(x) = \frac{x}{2} + x^{-1}$로 정한 $g : J \to \mathbb{R}$를 봅니다. $g$의 고정점은 $\sqrt{2}$이고, (2)에 의해 $J$의 어느 점에서 시작해도 반복열이 $\sqrt{2}$로 수렴합니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

*구간과 도함수.* [[interval]]의 (2)에 의해 $J$는 구간입니다. $J$의 항등함수는 미분계수가 늘 $1$이고([[derivative]]의 (1)) $J$에서 $0$이 아니므로, [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $g$는 미분가능한 함수이고 모든 $x \in J$에서
$$
g'(x) = \frac{1}{2} - (x^2)^{-1}
$$
입니다($x^2 = xx$는 [[power-of-a-real-number]]의 (1)). $1 \le x$이므로 순서 성질 (11)의 (i)에 의해 $1 \le x^2$이고, 순서 성질 (6)의 (i), (ii)(또는 등호)에 의해 $0 < (x^2)^{-1} \le 1$입니다. 따라서 $-\frac{1}{2} \le g'(x) < \frac{1}{2}$이고 [[absolute-value]]의 (7)에 의해 $|g'(x)| \le \frac{1}{2}$입니다. $k = 1/2$로 (1), (2)의 가정이 성립합니다.

*$g$는 $J$를 $J$로 보낸다.* $x \in J$이면 (K1)–(K3), (K8)로 계산해
$$
g(x) - 1 = \bigl((x - 1)^2 + 1\bigr)(2x)^{-1}
$$
이고, 순서 성질 (5)의 (ii), (iii)과 (2)의 (iv)에 의해 $0 < (x - 1)^2 + 1$, 순서 성질 (6)의 (i)에 의해 $0 < (2x)^{-1}$이므로 $1 < g(x)$입니다.

*고정점.* $x \in J$에서 $g(x) = x$이면 양변에서 $x/2$를 빼고 $2x$를 곱해 $2 = xx$입니다. $0 < x$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $x = \sqrt{2}$입니다. (2)에 의해 고정점이 있으므로 그것이 $\sqrt{2}$이고, 곧 $\sqrt{2} \in J$입니다.

*반복열.* $1$에서 시작하면
$$
\begin{aligned}
x_1 &= 1, \qquad x_2 = \frac{3}{2}, \\
x_3 &= \frac{3}{4} + \frac{2}{3} = \frac{17}{12}, \\
x_4 &= \frac{17}{24} + \frac{12}{17} = \frac{577}{408}
\end{aligned}
$$
입니다. $|x_1 - x_2| = 1/2$이므로 (2)의 어림은 $|x_n - \sqrt{2}| \le (1/2)^{n-1} \cdot 2 \cdot \frac{1}{2} = (1/2)^{n-1}$이고, $n = 4$이면 $1/8$입니다. 실제로는 $577^2 = 332929$, $408^2 = 166464$이므로 $x_4^2 = 2 + 1/166464$이고, $x_4 - \sqrt{2} = (x_4^2 - 2)(x_4 + \sqrt{2})^{-1}$에서 $1 < x_4 + \sqrt{2}$이므로 $0 < x_4 - \sqrt{2} < 1/166464$입니다. 어림은 참이지만, 이 반복열은 어림보다 훨씬 빨리 다가갑니다.
:::

:::counterexample[1 이상인 실수 위의 $x + 1/x$: 도함수의 절댓값이 늘 1 미만인 경우]
$J = \{x \in \mathbb{R} : 1 \le x\}$와 $f(x) = x + x^{-1}$로 정한 $f : J \to \mathbb{R}$를 봅니다. [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)과 [[derivative]]의 (1)에 의해 모든 $x \in J$에서 $f'(x) = 1 - (x^2)^{-1}$이고, 위 예시와 같은 이유로 $0 < (x^2)^{-1} \le 1$이므로 $0 \le f'(x) < 1$, 곧 $|f'(x)| < 1$입니다. 또 $0 < x^{-1}$이므로 $x < f(x)$이고 $f(x) \in J$입니다.

그러나 $f$는 $J$에서 고정점이 없습니다. $f(x) = x$이면 $x^{-1} = 0$이 되어 $1 = x \cdot x^{-1} = 0$이므로 (K4), (K9)에 어긋납니다. 그러므로 $0 \le k < 1$이고 모든 $x \in J$에서 $|f'(x)| \le k$인 실수 $k$는 없습니다. 그런 $k$가 있다면 $J$는 닫힌 반직선이므로 (2)에 의해 고정점이 있어야 하기 때문입니다. 또 $f : J \to J$는 축소 사상이 아닙니다. $J$는 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (3)의 (i)에 의해 공집합이 아닌 완비 거리공간이므로, 축소 사상이라면 [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)에 의해 고정점이 있어야 하기 때문입니다. 모든 점에서 $|f'(x)| < 1$이라는 것만으로는 (1), (2)의 가정인 하나의 $k$가 나오지 않습니다.
:::

## 확인 질문

:::check[$[0, 1]$ 위의 $f(x) = x^2/4$에 (2)를 쓸 수 있는가? 고정점은 무엇인가?]
쓸 수 있습니다. [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $f'(x) = x/2$이고, $0 \le x \le 1$이므로 $|f'(x)| \le 1/2$입니다. 또 $0 \le x^2/4 \le 1/4$이므로 $f([0, 1]) \subseteq [0, 1]$입니다. 따라서 고정점이 정확히 하나 있습니다. $f(0) = 0$이므로 그것은 $0$입니다. 실수 전체에서는 $x^2/4 = x$의 해가 $0$과 $4$ 둘이지만 $4 \notin [0, 1]$입니다.
:::

:::check[$[0, 1]$ 위의 $f(x) = x/2 + 5$는 $|f'(x)| \le 1/2$인데, $[0, 1]$에서 고정점이 있는가?]
없습니다. $f(x) = x$이면 $x = 10$인데 $10 \notin [0, 1]$입니다. (2)의 가정 가운데 "모든 $x \in I$에서 $f(x) \in I$"가 깨집니다. 예컨대 $f(0) = 5 \notin [0, 1]$입니다.
:::
