---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "2장 연습문제, source/exercises-chap2.ptx:115 — 문제 '$(\\overline{z})^2/z$ 의 $0$ 에서의 극한과 연속인 연장'의 2와 같은 종류(출처는 $z \\ne 0$ 에서 $\\overline{z}/z$, $0$ 에서 $1$ 인 함수가 $\\mathbb{C} - \\{0\\}$ 에서 연속임을 보이게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "Limits and Continuity 절의 Example exam_limitdoesnotexist, source/sec_limitsandcontinuity.ptx:166 — 문제 '$(\\overline{z})^2/z$ 의 $0$ 에서의 극한과 연속인 연장'의 3과 같은 방법(출처는 $\\overline{z}/z$ 의 극한을 실수축과 허수축을 따라 구해 서로 다름을 보인다)"
  - ref: beck-first-course-complex-analysis
    loc: "3장 연습문제, source/exercises-chap3.ptx:76 — 문제 '절댓값이 상수인 정칙함수'와 같은 발상(출처는 영역 위의 정칙함수의 값이 모두 단위원 위에 있으면 상수임을 보이게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "2장 연습문제, source/exercises-chap2.ptx:532 — 문제 '코시–리만 방정식으로 정하는 계수'와 비슷한 발상(출처는 실계수 이차 동차식 $u$ 가 조화함수일 조건과, 그때 $u$ 가 $Az^2$ 꼴 함수의 실수부임을 보이게 한다)"
added: 2026-11-27
---

:::exercise[$(\overline{z})^2/z$ 의 $0$ 에서의 극한과 연속인 연장]
$S = \mathbb{C} - \{0\}$ 위에서 $f(z) = (\overline{z})^2 / z$로 정한 복소함수 $f : S \to \mathbb{C}$와, $z \ne 0$이면 $F(z) = f(z)$이고 $F(0) = 0$인 함수 $F : \mathbb{C} \to \mathbb{C}$를 생각한다.

1. $\lim_{z \to 0} f(z) = 0$임을 보여라.
2. $F$가 연속임을 보여라.
3. $F$가 $0$에서 복소 미분가능하지 않음을 보여라.
:::

:::solution
아래에서 "극한"은 [[limit-of-complex-function|복소함수의 극한]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "켤레"는 [[complex-conjugate|켤레복소수]]의 번호이다.

먼저 $z \in S$이면 $|f(z)| = |z|$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)에 의해 $|(\overline{z})^2| = |\overline{z}|^2$이고 절댓값의 (2)에 의해 $|\overline{z}| = |z|$이며, 절댓값의 (3)과 (4)에 의해 $|f(z)| = |(\overline{z})^2|\,|z|^{-1} = |z|^2 |z|^{-1} = |z|$이기 때문이다($z \ne 0$이므로 절댓값의 (1)에 의해 $|z| \ne 0$).

**(1)** [[open-set-in-metric-space]]의 (1)에 의해 $\mathbb{C}$는 $(\mathbb{C}, d)$의 열린집합이므로, 극한의 (1)의 (ii)에 의해 $0$은 $\mathbb{C} - \{0\} = S$의 집적점이다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon$으로 두면, $z \in S$이고 $|z - 0| < \delta$인 모든 $z$에서 $|f(z) - 0| = |z| < \varepsilon$이다. 수렴의 정의에 의해 $f$는 $0$에서 $0$으로 수렴한다.

**(2)** *$0$에서.* $F$의 $\mathbb{C} - \{0\}$으로의 제한은 $f$이고 (1)에 의해 $0$에서 $0$으로 수렴하므로, 극한의 (6)의 (ii)에 의해 $F$는 $0$에서 $0 = F(0)$으로 수렴한다. $0$은 $\mathbb{C}$의 집적점이므로(극한의 (1)의 (ii)) 극한의 (11)의 (i)에 의해 $F$는 $0$에서 연속이다.

*$0$이 아닌 점에서.* 먼저 $f$가 연속이다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 켤레를 취하는 함수와 항등함수 $\mathbb{C} \to \mathbb{C}$는 연속이고, [[subspace-and-continuity]]의 (2)에 의해 그 둘을 $S$로 제한한 함수도 연속이다. 복소수 연산의 연속의 (3)에 의해 켤레의 제한의 제곱이 연속이고, 항등함수의 제한은 $S$에서 값이 $0$이 아니므로 같은 항목의 (4)의 (i)에 의해 그 몫 $f$가 연속이다.

$z_0 \ne 0$이라 하고 $r = |z_0|$로 두면 절댓값의 (1)에 의해 $0 < r$이다. $|z - z_0| < r$이면 $z \ne 0$이다($z = 0$이면 $|0 - z_0| = r$이므로). 따라서 $A = \{z \in \mathbb{C} : |z - z_0| < r\}$는 $S$의 부분집합이고, 극한의 (1)의 (ii)에 의해 $z_0$은 $S$의 집적점이다. $f$는 $z_0$에서 연속이므로 극한의 (11)의 (i)에 의해 $f$는 $z_0$에서 $f(z_0)$으로 수렴한다. 극한의 (7)의 (ii)를 $f$와 $\delta_0 = r$에 쓰면 $z_0$은 $A$의 집적점이고 $f|_A$는 $z_0$에서 $f(z_0)$으로 수렴한다. $A$의 점에서 $F$와 $f$의 값이 같으므로 $F|_A = f|_A$이고, 극한의 (7)의 (ii)를 이번에는 $F : \mathbb{C} \to \mathbb{C}$와 $\delta_0 = r$에 쓰면($\{z \in \mathbb{C} : |z - z_0| < r\}$은 같은 $A$이다) $F$는 $z_0$에서 $f(z_0) = F(z_0)$으로 수렴한다. $z_0$은 $\mathbb{C}$의 집적점이므로 극한의 (11)의 (i)에 의해 $F$는 $z_0$에서 연속이다.

$F$는 $\mathbb{C}$의 모든 점에서 연속이므로 극한의 (11)의 (iii)에 의해 연속이다.

**(3)** $F$의 $0$에서의 차분몫은 $z \ne 0$에서
$$
q_0(z) = \frac{F(z) - F(0)}{z - 0} = \frac{(\overline{z})^2}{z^2}
$$
이다([[complex-derivative|복소 미분]]의 차분몫). 두 집합 $A_1 = \{\iota(t) : 0 < t < 1\}$, $A_2 = \{\iota(t)(1 + i) : 0 < t < 1\}$을 생각한다. $0 < t$이면 [[complex-field|복소수체]]의 (2)의 (i)에 의해 $\iota(t) \ne 0$이고, $1 + i \ne 0$이므로 두 집합은 $q_0$의 정의역 $\mathbb{C} - \{0\}$의 부분집합이다. [[cluster-point]]의 (5)에 의해 $0$은 열린구간 $(0, 1)$의 집적점이므로, 극한의 (1)의 (iii)을 $J = (0, 1)$, $c = 0$, $a = 0$과 $u = 1$, $u = 1 + i$에 쓰면 $0$은 $A_1$과 $A_2$의 집적점이다.

$z = \iota(t) \in A_1$이면 켤레의 (4)에 의해 $\overline{z} = z$이므로 $q_0(z) = 1$이다. $z = \iota(t)(1 + i) \in A_2$이면 켤레의 (2), (4), (1)에 의해 $\overline{z} = \iota(t)(1 - i)$이고, 체의 계산과 $i^2 = -1$(복소수체의 (5))로 $(1 - i)^2 = -2i$, $(1 + i)^2 = 2i$이므로
$$
q_0(z) = \frac{\iota(t)^2 (1 - i)^2}{\iota(t)^2 (1 + i)^2} = \frac{-2i}{2i} = -1
$$
이다. 따라서 $q_0|_{A_1}$과 $q_0|_{A_2}$는 값이 $1$, $-1$인 상수함수이고, 극한의 (5)에 의해 $0$에서 각각 $1$과 $-1$로 수렴한다. $1 \ne -1$이므로 극한의 (7)의 (iii)에 의해 $q_0$은 $0$에서 발산하고, 복소 미분의 정의에 의해 $F$는 $0$에서 복소 미분가능하지 않다.
:::

:::exercise[$(z^2 + 2iz)/(z + i)$ 의 도함수와 그 영점]
$g(z) = z + i$로 정한 $g : \mathbb{C} \to \mathbb{C}$에 대하여 $G = \{z \in \mathbb{C} : g(z) \ne 0\}$으로 두고, $h(z) = (z^2 + 2iz)/(z + i)$로 정한 $h : G \to \mathbb{C}$를 생각한다.

1. $G = \mathbb{C} - \{-i\}$이고 $G$가 열린집합이며 $h$가 정칙함수임을 보이고, 모든 $z \in G$에서 $h'(z) = \dfrac{(z + i)^2 - 1}{(z + i)^2}$임을 보여라.
2. $h'(z) = 0$인 $z \in G$를 모두 구하라.
3. 모든 $z \in G$에서 $h(z) = (z + i) + (z + i)^{-1}$임을 보이고, 이 꼴에 연쇄법칙을 써서 1의 식을 다시 얻어라.
:::

:::solution
아래에서 "법칙"은 [[complex-derivative-rules|복소 미분의 법칙]], "복소 미분"은 [[complex-derivative|복소 미분]]의 번호이고, $\mathbb{C}$ 안의 계산은 [[complex-field|복소수체]]의 (1)의 체의 계산과 (5)의 $i^2 = -1$로 한다.

**(1)** $g(z) = 0$인 것은 정확히 $z = -i$일 때이므로 $G = \mathbb{C} - \{-i\}$이다. 복소 미분의 (5)를 $a = 1$, $b = i$에 쓰면 $g$는 정함수이고 $g' = 1$이다. $p(z) = z^2 + 2iz$로 정한 $p$는 계수가 $0$, $2i$, $1$인 복소 다항함수이므로 법칙의 (4)의 (iii)에 의해 정함수이고 $p'(z) = 2i + 2z$이다. 법칙의 (3)의 (iv)에 의해 $G$는 열린집합이고 $h = p|_G / g|_G$는 정칙함수이며, $z \in G$에서
$$
h'(z) = \frac{p'(z)\,g(z) - p(z)\,g'(z)}{g(z)^2}
$$
이다. 분자는
$$
\begin{aligned}
&(2z + 2i)(z + i) - (z^2 + 2iz) \\
&= 2z^2 + 4iz + 2i^2 - z^2 - 2iz \\
&= z^2 + 2iz - 2
\end{aligned}
$$
이고, $(z + i)^2 = z^2 + 2iz + i^2 = z^2 + 2iz - 1$이므로 분자는 $(z + i)^2 - 1$이다. 따라서 $h'(z) = \bigl((z + i)^2 - 1\bigr)/(z + i)^2$이다.

**(2)** $z \in G$이면 $z + i \ne 0$이므로 체에서 $(z + i)^2 \ne 0$이다. 따라서 $h'(z) = 0$인 것은 정확히 $(z + i)^2 - 1 = 0$일 때이다. $w = z + i$로 두면 $w^2 - 1 = (w - 1)(w + 1)$이다. 두 복소수의 곱이 $0$이면 한쪽이 $0$이다(한쪽이 $0$이 아니면 그 역원을 곱해 다른 쪽이 $0$이 된다). 따라서 $h'(z) = 0$인 것은 정확히 $w = 1$이거나 $w = -1$일 때, 곧 $z = 1 - i$이거나 $z = -1 - i$일 때이다. 두 점은 $-i$가 아니므로 $G$의 원소이다. 예컨대 $z = 1 - i$에서 $(z + i)^2 - 1 = 1 - 1 = 0$이다.

**(3)** $z \in G$이면 $(z + i)^2 + 1 = z^2 + 2iz - 1 + 1 = z^2 + 2iz$이므로
$$
\begin{aligned}
h(z) &= \frac{(z + i)^2 + 1}{z + i} \\
&= (z + i) + (z + i)^{-1}
\end{aligned}
$$
이다. $k(w) = w + w^{-1}$로 정한 $k : \mathbb{C} - \{0\} \to \mathbb{C}$를 생각하자. 법칙의 (4)의 (ii)에 의해 $\mathbb{C} - \{0\}$은 열린집합이고 $w^{-1}$의 함수는 정칙이며 미분계수가 $-w^{-2}$이다. 법칙의 (4)의 (i)과 복소 미분의 (4)의 (i)에 의해 $w$의 함수를 $\mathbb{C} - \{0\}$으로 제한한 것은 정칙이고 미분계수가 $1$이다. 법칙의 (1)에 의해 $k$는 정칙함수이고 $k'(w) = 1 - w^{-2}$이다.

$G$의 모든 $z$에서 $g(z) \in \mathbb{C} - \{0\}$이고, 복소 미분의 (4)의 (i)에 의해 $g|_G$는 정칙함수이며 $(g|_G)' = 1$이다. 위의 식에 의해 $h = k \circ g|_G$이므로, 법칙의 (5)의 연쇄법칙에 의해 $z \in G$에서
$$
\begin{aligned}
h'(z) &= k'(z + i) \cdot 1 = 1 - (z + i)^{-2} \\
&= \frac{(z + i)^2 - 1}{(z + i)^2}
\end{aligned}
$$
이고, 이것은 1의 식과 같다.
:::

:::exercise[짝함수와 홀함수인 정함수의 도함수]
$f$를 정함수라 하자.

1. 모든 복소수 $z$에서 $f(-z) = f(z)$이면, 모든 $z$에서 $f'(-z) = -f'(z)$이고 $f'(0) = 0$임을 보여라.
2. 모든 복소수 $z$에서 $f(-z) = -f(z)$이면, 모든 $z$에서 $f'(-z) = f'(z)$이고 $f(0) = 0$임을 보여라.
:::

:::solution
$m(z) = -z$로 정한 $m : \mathbb{C} \to \mathbb{C}$는 [[complex-derivative|복소 미분]]의 (5)를 $a = -1$, $b = 0$에 쓰면 정함수이고 $m' = -1$이다. [[complex-derivative-rules|복소 미분의 법칙]]의 (5)의 연쇄법칙에 의해 $f \circ m$은 정함수이고 모든 $z$에서
$$
\begin{aligned}
(f \circ m)'(z) &= f'(-z) \cdot (-1) \\
&= -f'(-z)
\end{aligned}
$$
이다.

**(1)** 가정에 의해 모든 $z$에서 $(f \circ m)(z) = f(z)$이므로 $f \circ m$과 $f$는 같은 함수이고, 두 함수의 미분계수도 같다. 따라서 모든 $z$에서 $f'(z) = -f'(-z)$이다. 이것을 $-z$에 쓰면 $-(-z) = z$이므로 $f'(-z) = -f'(z)$이다. $z = 0$을 넣으면 $f'(0) = -f'(0)$, 곧 $2f'(0) = 0$이고, $2 \ne 0$의 역원을 곱하면 $f'(0) = 0$이다.

**(2)** 가정에 의해 $f \circ m$은 $(-1)f$와 같은 함수이다. 법칙의 (1)에 의해 $((-1)f)'(z) = -f'(z)$이므로 $-f'(-z) = -f'(z)$, 곧 $f'(-z) = f'(z)$이다. 또 $f(0) = f(-0) = -f(0)$이므로 $2f(0) = 0$이고 $f(0) = 0$이다.
:::

:::exercise[제곱이 상수인 정칙함수]
$G$를 영역, $f : G \to \mathbb{C}$를 정칙함수라 하고, 복소수 $c$가 있어 모든 $z \in G$에서 $f(z)^2 = c$라 하자. $f$가 상수임을 보여라.
:::

:::solution
[[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)에 의해 $f(z)^2 = f(z) f(z)$이므로, 함수 $ff : G \to \mathbb{C}$는 값이 $c$인 상수함수이다. [[complex-derivative|복소 미분]]의 (5)에 의해 그 미분계수는 모든 점에서 $0$이고, [[complex-derivative-rules|복소 미분의 법칙]]의 (2)의 곱의 법칙에 의해 모든 $z \in G$에서
$$
\begin{aligned}
0 &= (ff)'(z) \\
&= f'(z) f(z) + f(z) f'(z) \\
&= 2 f(z) f'(z)
\end{aligned}
$$
이다. 아래에서 복소수 $\alpha$, $\beta$에 대하여 $\alpha \ne 0$이고 $\alpha\beta = 0$이면 $\beta = \alpha^{-1}(\alpha\beta) = 0$이라는 체의 계산([[complex-field|복소수체]]의 (1))을 쓴다.

*$c = 0$인 경우.* $z \in G$에서 $f(z) \ne 0$이면 $f(z) f(z) = 0$에서 $f(z) = 0$이 되어 모순이다. 따라서 모든 $z$에서 $f(z) = 0$이고 $f$는 상수이다.

*$c \ne 0$인 경우.* $z \in G$에서 $f(z) = 0$이면 $c = f(z)^2 = 0$이 되어 모순이므로 $f(z) \ne 0$이고, $2f(z) \ne 0$이다. 위 식에서 $f'(z) = 0$이다. 모든 $z \in G$에서 $f'(z) = 0$이므로 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (3)에 의해 $f$는 상수이다.
:::

:::exercise[절댓값이 상수인 정칙함수]
$G$를 영역, $f : G \to \mathbb{C}$를 정칙함수라 하고, 실수 $k$가 있어 모든 $z \in G$에서 $|f(z)| = k$라 하자. $f$가 상수임을 보여라.
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "법칙"은 [[complex-derivative-rules|복소 미분의 법칙]]의 번호이다.

*$f$의 값 가운데 $0$이 있는 경우.* $f(z_0) = 0$이면 $k = |f(z_0)| = 0$이므로 모든 $z$에서 $|f(z)| = 0$이고, 절댓값의 (1)에 의해 $f(z) = 0$이다. $f$는 상수이다.

*$f$의 모든 값이 $0$이 아닌 경우.* 절댓값의 (2)에 의해 모든 $z \in G$에서 $f(z)\,\overline{f(z)} = \iota(|f(z)|^2) = \iota(k^2)$이므로, $f(z) \ne 0$의 역원을 곱하면
$$
\overline{f(z)} = \iota(k^2)\, f(z)^{-1}
$$
이다. 법칙의 (3)의 (iii)에 의해 $G$의 모든 점에서 $1/f$는 미분가능하므로 $1/f : G \to \mathbb{C}$는 정칙함수이고, 법칙의 (1)에 의해 그 상수배 $\iota(k^2)\,(1/f)$도 정칙함수이다. 위 식에 의해 이 함수는 $\overline{f}$와 같으므로 $\overline{f}$는 정칙함수이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (5)의 (ii)에 의해 $f$는 상수이다.
:::

:::exercise[코시–리만 방정식으로 정하는 계수]
실수 $a$, $b$에 대하여
$$
\begin{aligned}
f_{a,b}(z) &= \bigl((\operatorname{Re} z)^2 + a (\operatorname{Im} z)^2\bigr) \\
&\qquad + b (\operatorname{Re} z)(\operatorname{Im} z)\, i
\end{aligned}
$$
로 정한 $f_{a,b} : \mathbb{C} \to \mathbb{C}$를 생각한다.

1. $f_{a,b}$가 정함수이면 $a = -1$이고 $b = 2$임을 보여라.
2. 모든 복소수 $z$에서 $f_{-1,2}(z) = z^2$임을 보이고, $f_{-1,2}$가 정함수임을 확인하라.
:::

:::solution
**(1)** $u(z) = (\operatorname{Re} z)^2 + a(\operatorname{Im} z)^2$, $v(z) = b(\operatorname{Re} z)(\operatorname{Im} z)$는 $f_{a,b}$의 실수부와 허수부이다([[complex-field|복소수체]]의 (4)). 점 $w$에서 $p = \operatorname{Re} w$, $q = \operatorname{Im} w$로 두자. $B(w, 1) \subseteq \mathbb{C}$이므로 [[cauchy-riemann-equations|코시–리만 방정식]]의 편도함수는 $r = 1$로 구한다. 실수 $t$에서 복소수체의 (1)과 (2)의 (ii)에 의해 $\operatorname{Re}(w + \iota(t)) = p + t$, $\operatorname{Im}(w + \iota(t)) = q$이고, $\iota(t) i$의 실수부는 $0$, 허수부는 $t$이므로 $\operatorname{Re}(w + \iota(t) i) = p$, $\operatorname{Im}(w + \iota(t) i) = q + t$이다. 따라서 네 실함수는
$$
\begin{aligned}
u(w + \iota(t)) &= (p + t)(p + t) + a q^2, \\
u(w + \iota(t) i) &= p^2 + a (q + t)(q + t), \\
v(w + \iota(t)) &= (bq)\, t + bpq, \\
v(w + \iota(t) i) &= (bp)\, t + bpq
\end{aligned}
$$
이다. [[derivative]]의 (1)과 (2)(일차함수와 상수함수, 제한), [[derivative-rules|미분법]]의 (1), (2), (4)(상수배, 합, 곱의 법칙)에 의해 이 네 함수의 $0$에서의 미분계수는 $2p$, $2aq$, $bq$, $bp$이다. 곧 $u_x(w) = 2p$, $u_y(w) = 2aq$, $v_x(w) = bq$, $v_y(w) = bp$이다.

$f_{a,b}$가 정함수이면 코시–리만 방정식의 (3)에 의해 모든 점 $w$에서 $u_x(w) = v_y(w)$, $u_y(w) = -v_x(w)$, 곧 $2p = bp$이고 $2aq = -bq$이다. $w = 1$($p = 1$, $q = 0$)에서 첫째 식은 $2 = b$이고, $w = i$($p = 0$, $q = 1$)에서 둘째 식은 $2a = -b = -2$이므로 $a = -1$이다.

**(2)** $z$에서 $p = \operatorname{Re} z$, $q = \operatorname{Im} z$로 두면 복소수체의 (4)에 의해 $z = p + qi$이고, 체의 계산과 $i^2 = -1$(복소수체의 (5))로
$$
\begin{aligned}
z^2 &= p^2 + 2pq\, i + q^2 i^2 \\
&= (p^2 - q^2) + 2pq\, i
\end{aligned}
$$
이다. 이것은 $f_{-1,2}(z) = (p^2 + (-1) q^2) + 2pq\, i$와 같다. 따라서 $f_{-1,2}$는 $z^2$의 함수이고, [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)에 의해 정함수이다. 그 도함수 $2z = 2p + 2q\, i$는 (1)의 편도함수로 쓴 $u_x + v_x i = 2p + 2q\, i$와 맞는다.
:::

:::exercise[연속이 아닌 함수 안으로 극한을 넣은 합성]
$g(z) = z$로 정한 $g : \mathbb{C} \to \mathbb{C}$와, $h(0) = 0$이고 $w \ne 0$이면 $h(w) = 1$인 $h : \mathbb{C} \to \mathbb{C}$를 생각한다.

1. $g$는 $0$에서 $0$으로 수렴하지만 $h \circ g$는 $0$에서 $h(0)$으로 수렴하지 않음을 보여라.
2. [[limit-laws-for-complex-functions|복소함수의 극한 법칙]]의 (8)의 (ii)의 가정 가운데 이 $g$, $h$에서 성립하지 않는 것을 찾아라.
:::

:::solution
아래에서 "극한"은 [[limit-of-complex-function|복소함수의 극한]]의 번호이다. [[open-set-in-metric-space]]의 (1)에 의해 $\mathbb{C}$는 열린집합이므로 극한의 (1)의 (ii)에 의해 $0$은 $\mathbb{C}$의 집적점이다.

**(1)** 극한의 (5)에 의해 $g$는 $0$에서 $0$으로 수렴한다. 모든 $z$에서 $(h \circ g)(z) = h(z)$이고, $z \ne 0$이면 $h(z) = 1$이므로 "$h(g(z)) = 1$"이 $0$과 다른 모든 $z$에서 성립한다. 극한의 (5)에 의해 값이 $1$인 상수함수는 $0$에서 $1$로 수렴하므로, 극한의 (6)의 (i)에 의해 $h \circ g$는 $0$에서 $1$로 수렴한다. 극한의 (3)의 유일성에 의해 $h \circ g$는 $1$과 다른 복소수 $h(0) = 0$으로 수렴하지 않는다.

**(2)** 극한 법칙의 (8)의 (ii)의 가정은 $S = H = \mathbb{C}$, $w_0 = 0$으로 두면 "모든 $z$에서 $g(z) \in H$", "$g$가 $0$에서 $w_0$으로 수렴한다", "$w_0 \in H$"가 성립하고, 남은 가정은 "$h$가 $w_0 = 0$에서 연속이다"이다. 이 가정이 성립하지 않는다. $g$가 항등함수이므로 (1)은 $h$가 $0$에서 $h(0)$으로 수렴하지 않는다는 것이고, 극한의 (11)의 (i)에 의해 $h$는 $0$에서 연속이 아니다.
:::
