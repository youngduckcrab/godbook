---
title: 적분의 평균값 정리
title_en: Mean Value Theorem for Integrals
aliases: [적분에 대한 평균값 정리, integral mean value theorem, first mean value theorem for integrals]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "f : [a, b] → ℝ 가 연속함수이면 [a, b] 위의 적분이 f(c)(b − a) 와 같아지는 점 c ∈ [a, b] 가 있다. 정의역이 더 큰 함수에 쓰는 꼴과, 구간 위의 연속함수의 방향 있는 적분에 대한 꼴을 함께 진술한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, real-valued-function, interval, continuous-function, extreme-value-theorem, intermediate-value-theorem, derivative-and-monotonicity, partition-of-an-interval, darboux-sums, riemann-integral, monotone-implies-integrable, riemann-integral-examples, continuous-implies-integrable, additivity-of-the-integral, oriented-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.5 소절) 연습문제 5.2.4 (p.197), 연습문제 5.2.6 (p.198); 5.1절(5.1.2 소절) Example 5.1.12 (p.186); 5.3절(5.3.1 소절) Example 5.3.2 (p.201); 5.3절(5.3.4 소절) 연습문제 5.3.7 (p.205)
    checked: original
    note: "(1)은 출처의 연습문제 5.2.4(5.2.5 소절, p.197)의 진술이다. 출처는 이 정리를 'mean value theorem for integrals' 라는 이름으로 연습문제로 두고 증명하지 않는다. 증명은 이 사이트의 것으로, 최대·최소 정리로 최댓값의 점과 최솟값의 점을 얻고, 적분을 그 두 값 사이에 누른 뒤, 두 점 사이에서 사잇값 정리를 쓴다(두 점의 크기 순서와 같은 경우를 나눈다). (2)와 (3)은 (1)을 정의역이 더 큰 함수와 방향 있는 적분으로 옮긴 것으로, 뒤 항목이 인용하도록 진술에 두었다. 예시 'x² 의 [0, 3] 위의 적분과 √3'에서 쓴 거듭제곱의 적분은 출처 Example 5.3.2(5.3.1 소절, p.201)의 ∫_0^1 x² dx 와 같은 함수의 적분이다. 반례 '계단 모양의 함수에서 c 가 없는 예'의 함수는 출처 Example 5.1.12(5.1.2 소절, p.186)의 [0, 2] 위에서 1 을 지나며 값이 바뀌는 함수와 같은 꼴이다(출처의 함수는 1 에서의 값이 1/2 이다). 확인 질문 '연속함수이고 적분이 0 이면 f 의 값에 대해 무엇을 말할 수 있는가'는 출처 연습문제 5.2.6(5.2.5 소절, p.198)과 같은 진술이다. 확인 질문 'f(x) = |x| 에서 (1)의 c 는 하나뿐인가'의 ∫_{−1}^1 |x| dx 는 출처 연습문제 5.3.7 c)(5.3.4 소절, p.205)의 f(x) = |x|, ε = 1 에 대한 g 의 0 에서의 값, 곧 (1/2)∫_{−1}^1 |t| dt 와 같은 적분이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 틀리거나 근거가 없던 설명 문장 9건과 잘못 적은 인용 1건을 고쳤다."
added: 2026-11-20
---

:::statement
연속, "$A$에서 연속", 연속함수는 [[continuous-function]]의 것이고, 리만 적분가능, $\int_a^b f$, 정의역이 $[a, b]$보다 큰 함수가 $[a, b]$에서 적분가능하다는 것과 그 적분은 [[riemann-integral]]의 것이다(그 항목의 (4)). 구간은 [[interval]]의 것이고, "사이에 있다", "사이에서 적분가능", 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. (1)과 (2)에서 $a$, $b$는 $a < b$인 실수이다.

1. (**적분의 평균값 정리**) $f : [a, b] \to \mathbb{R}$가 연속함수이면 $f$는 리만 적분가능하고
   $$
   \int_a^b f = f(c)\,(b - a)
   $$
   인 $c \in [a, b]$가 있다.
2. (더 큰 정의역) $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $f : S \to \mathbb{R}$가 $[a, b]$에서 연속이면, $f$는 $[a, b]$에서 리만 적분가능하고 $\int_a^b f = f(c)\,(b - a)$인 $c \in [a, b]$가 있다.
3. (방향 있는 적분) $I$가 구간이고 $f : I \to \mathbb{R}$가 연속함수이며 $\alpha$, $\beta$가 $I$의 원소이면, $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하고
   $$
   \int_\alpha^\beta f = f(t)\,(\beta - \alpha)
   $$
   인 실수 $t$가 $\alpha$와 $\beta$ 사이에 있다.
:::

:::english
Continuity, "continuous on $A$", and continuous functions are as in the entry on continuous functions; Riemann integrability, $\int_a^b f$, and what it means for a function whose domain is larger than $[a, b]$ to be integrable on $[a, b]$, together with its integral, are as in the entry on the Riemann integral (item (4) there). Intervals are as in the entry on intervals, and "lies between", "integrable between", and the oriented integral $\int_\alpha^\beta f$ are as in the entry on the oriented integral. In (1) and (2), $a$ and $b$ are real numbers with $a < b$.

1. (**Mean value theorem for integrals**) If $f : [a, b] \to \mathbb{R}$ is a continuous function, then $f$ is Riemann integrable and there is a $c \in [a, b]$ with
   $$
   \int_a^b f = f(c)\,(b - a) .
   $$
2. (Larger domain) If $[a, b] \subseteq S \subseteq \mathbb{R}$ and $f : S \to \mathbb{R}$ is continuous on $[a, b]$, then $f$ is Riemann integrable on $[a, b]$ and there is a $c \in [a, b]$ with $\int_a^b f = f(c)\,(b - a)$.
3. (Oriented integrals) If $I$ is an interval, $f : I \to \mathbb{R}$ is a continuous function, and $\alpha$, $\beta$ are elements of $I$, then $f$ is integrable between $\alpha$ and $\beta$, and there is a real number $t$ lying between $\alpha$ and $\beta$ with
   $$
   \int_\alpha^\beta f = f(t)\,(\beta - \alpha) .
   $$
:::

## 직관

울퉁불퉁하게 쌓인 모래를 같은 너비의 상자 안에서 평평하게 고르면, 모래의 양은 그대로이고 높이는 하나가 됩니다. $f \ge 0$일 때 $\int_a^b f$가 모래의 양이고 $b - a$가 상자의 너비이면, 고른 높이는 $(b - a)^{-1} \int_a^b f$입니다. 이 정리는 원래 모래 더미에서 바로 그 높이인 곳 $c$가 있다는 것입니다. 고른 높이는 가장 낮은 곳보다 낮을 수 없고 가장 높은 곳보다 높을 수 없으며, 끊긴 데 없는 더미라면 그 사이의 모든 높이를 어딘가에서 지나기 때문입니다.

증명에서 연속이라는 가정은 세 군데에서 쓰입니다. $f$가 적분가능하다는 것([[continuous-implies-integrable|연속함수의 적분가능성]]), 최댓값과 최솟값이 실제로 어떤 점의 값이라는 것([[extreme-value-theorem|최대·최소 정리]]), 그리고 그 두 점 사이에서 고른 높이를 값으로 갖는 점이 있다는 것([[intermediate-value-theorem|사잇값 정리]])입니다. 아래 반례의 계단 모양의 함수는 적분가능하고 최댓값과 최솟값도 갖지만, 마지막 단계가 깨져 고른 높이를 값으로 갖지 않습니다.

$c$는 하나로 정해지지 않을 수 있고, 가운데 점 $\frac{a + b}{2}$가 아닐 수도 있습니다. 미분의 [[mean-value-theorem|평균값 정리]]와 이름이 비슷하지만, 그 정리는 도함수에 대한 것이고 $(a, b)$ 안의 점을 주며, 이 정리는 적분에 대한 것이고 $[a, b]$의 점을 줍니다.

## 증명

:::idea
최댓값의 점 $p$와 최솟값의 점 $q$에서 적분을 $f(q)(b - a)$와 $f(p)(b - a)$ 사이에 누르면, $y = (b - a)^{-1}\int_a^b f$는 $f(q)$와 $f(p)$ 사이의 수이다. $p$와 $q$ 사이의 닫힌구간에서 사잇값 정리를 쓰면 $f(c) = y$인 $c$가 나온다.
:::

:::hint
[[riemann-integral|리만 적분]]의 (2)의 (i)에서 $m$과 $M$을 무엇으로 두면 될까요?
:::

:::hint
최댓값의 점과 최솟값의 점은 어느 쪽이 왼쪽인지 모릅니다. 둘이 같은 경우도 있습니다. 사잇값 정리의 닫힌 꼴은 두 끝점의 값이 어느 순서여도 쓸 수 있습니다.
:::

:::proof
**이 항목의 (1).** [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 $f$는 리만 적분가능하다. [[extreme-value-theorem|최대·최소 정리]]의 (2)에 의해 $f$가 최댓값을 갖는 점 $p \in [a, b]$와 최솟값을 갖는 점 $q \in [a, b]$가 있고, 모든 $x \in [a, b]$에서 $f(q) \le f(x) \le f(p)$이다. [[riemann-integral]]의 (2)의 (i)을 $m = f(q)$, $M = f(p)$로 쓰면
$$
f(q)\,(b - a) \le \int_a^b f \le f(p)\,(b - a)
$$
이다. $a < b$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < b - a$이고, 그 (6)의 (i)에 의해 $0 < (b - a)^{-1}$이다. $y = (b - a)^{-1} \int_a^b f$로 두자. 위 부등식의 각 변에 $(b - a)^{-1}$을 곱하면 [[order-properties-of-reals]]의 (4)의 (iii)과 $(b - a)(b - a)^{-1} = 1$([[real-number-arithmetic]]의 (K6), (K8))에 의해 $f(q) \le y \le f(p)$이다.

[[real-order-axioms]]의 (W1)에 의해 $q = p$, $q < p$, $p < q$ 가운데 하나가 성립한다.

- $q = p$이면 $f(p) \le y \le f(p)$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $y = f(p)$이다. $c = p$로 두면 $f(c) = y$이다.
- $q < p$이면 [[interval]]의 (1)과 (4)에 의해 $[q, p] \subseteq [a, b]$이다. $f$는 연속함수이므로 $[a, b]$의 모든 점에서, 따라서 $[q, p]$의 모든 점에서 연속이고, 곧 $[q, p]$에서 연속이다. [[intermediate-value-theorem|사잇값 정리]]의 (3)을 $S = [a, b]$와 닫힌구간 $[q, p]$에 쓰면, 그 (2)의 닫힌 꼴이 $f$에 대해 성립한다. 왼쪽 끝 $q$에서의 값과 오른쪽 끝 $p$에서의 값이 $f(q) \le y \le f(p)$를 만족하므로 $f(c) = y$인 $c \in [q, p]$가 있다.
- $p < q$이면 같은 방법으로 닫힌구간 $[p, q] \subseteq [a, b]$에서 사잇값 정리의 (2)를 쓴다. 이번에는 오른쪽 끝 $q$에서의 값과 왼쪽 끝 $p$에서의 값이 $f(q) \le y \le f(p)$를 만족하므로 $f(c) = y$인 $c \in [p, q]$가 있다.

어느 경우에도 $c \in [a, b]$이고 $f(c) = y$이다. 따라서 [[real-number-arithmetic]]의 계산 법칙과 $(b - a)^{-1}(b - a) = 1$로 $f(c)\,(b - a) = y\,(b - a) = \int_a^b f$이다.

**이 항목의 (2).** $f$가 $[a, b]$에서 연속이므로 [[continuous-function]]의 (5)에 의해 제한 $g = f|_{[a, b]}$는 연속함수이다. (1)을 $g$에 쓰면 $g$는 적분가능하고 $\int_a^b g = g(c)\,(b - a)$인 $c \in [a, b]$가 있다. [[riemann-integral]]의 (4)에 의해 $f$는 $[a, b]$에서 적분가능하고 $\int_a^b f = \int_a^b g$이며, [[real-valued-function]]의 (6)에 의해 $g(c) = f(c)$이다. 따라서 $\int_a^b f = f(c)\,(b - a)$이다.

**이 항목의 (3).** [[real-order-axioms]]의 (W1)에 의해 $\alpha < \beta$, $\beta < \alpha$, $\alpha = \beta$ 가운데 하나가 성립한다.

- $\alpha < \beta$이면 [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이고, $f$는 $I$의 모든 점에서 연속이므로 $[\alpha, \beta]$에서 연속이다. (2)를 $S = I$와 $[\alpha, \beta]$에 쓰면 $f$는 $[\alpha, \beta]$에서 적분가능하고 $\int_\alpha^\beta f = f(c)\,(\beta - \alpha)$인 $c \in [\alpha, \beta]$가 있다. [[oriented-integral|방향 있는 적분]]의 정의에 의해 $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하고 방향 있는 적분은 이 적분과 같다. $t = c$로 두면 $\alpha \le t \le \beta$이므로 $t$는 $\alpha$와 $\beta$ 사이에 있다.
- $\beta < \alpha$이면 앞의 경우와 같은 방법으로 $f$는 $[\beta, \alpha]$에서 적분가능하고 $\int_\beta^\alpha f = f(t)\,(\alpha - \beta)$인 $t \in [\beta, \alpha]$가 있다. 이 $t$는 $\alpha$와 $\beta$ 사이에 있다. 방향 있는 적분의 정의와 [[real-number-arithmetic]]의 (K12)의 (ii), (iv)와 (K9)에 의해
  $$
  \begin{aligned}
  \int_\alpha^\beta f &= -\bigl(f(t)\,(\alpha - \beta)\bigr) \\
  &= f(t)\,\bigl(-(\alpha - \beta)\bigr) \\
  &= f(t)\,(\beta - \alpha)
  \end{aligned}
  $$
  이다.
- $\alpha = \beta$이면 방향 있는 적분의 정의에 의해 $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta f = 0$이다. $t = \alpha$는 $\alpha$와 $\beta$ 사이에 있고, [[real-number-arithmetic]]의 (K9)에 의해 $f(t)\,(\beta - \alpha) = f(\alpha) \cdot 0 = 0$이다.
:::

## 예시와 반례

:::example[x 의 [1, 3] 위의 적분과 가운데 점]
$f(x) = x$로 정한 $f : [1, 3] \to \mathbb{R}$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_1^3 x\,dx = \frac{9 - 1}{2} = 4$입니다. $f(c)\,(3 - 1) = 2c$이므로 (1)의 $c$는 $2c = 4$, 곧 $c = 2$입니다. 이것은 가운데 점 $\frac{1 + 3}{2}$입니다.
:::

:::example[x² 의 [0, 3] 위의 적분과 √3]
$f(x) = x^2$으로 정한 $f : [0, 3] \to \mathbb{R}$는 [[riemann-integral-examples|리만 적분의 예]]의 (2)에 의해 $\int_0^3 x^2\,dx = \frac{27 - 0}{3} = 9$입니다. (1)의 $c$는 $3c^2 = 9$, 곧 $c^2 = 3$인 $[0, 3]$의 점입니다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $0 \le c$이고 $cc = 3$인 수는 $\sqrt{3}$ 하나뿐입니다. $3 \cdot 3 = 9$이므로 같은 항목의 (2)에 의해 $\sqrt{9} = 3$이고, $3 < 9$이므로 $\sqrt{3} < \sqrt{9} = 3$입니다. 따라서 $c = \sqrt{3}$이고 이것은 $[0, 3]$의 점입니다. 가운데 점 $\frac{3}{2}$에서는 $f\bigl(\frac{3}{2}\bigr) \cdot 3 = \frac{27}{4} \ne 9$이므로, $c$는 가운데 점이 아닙니다.
:::

:::counterexample[계단 모양의 함수에서 c 가 없는 예]
$f : [0, 2] \to \mathbb{R}$를 $x < 1$이면 $f(x) = 0$, $1 \le x$이면 $f(x) = 1$로 정합니다([[real-valued-function]]의 (1)). $x < y$이면 $f(x) = 1$일 때 $1 \le x < y$이어서 $f(y) = 1$이므로 $f(x) \le f(y)$이고, $f$는 단조증가입니다([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의). [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 $f$는 적분가능합니다.

[[partition-of-an-interval|구간의 분할]]의 (5)에 의해 $\{0, 1, 2\}$와 $\{0, \frac{1}{2}, 2\}$는 $[0, 2]$의 분할입니다. [[monotone-implies-integrable|단조함수의 적분가능성]]의 (2)에 의해 단조증가인 $f$의 $m_i$는 작은 구간의 왼쪽 끝의 값이고 $M_i$는 오른쪽 끝의 값이므로
$$
\begin{aligned}
&L(\{0, 1, 2\}, f) \\
&\quad = f(0) \cdot 1 + f(1) \cdot 1 = 1, \\
&U\bigl(\{0, \tfrac{1}{2}, 2\}, f\bigr) \\
&\quad = f\bigl(\tfrac{1}{2}\bigr) \cdot \tfrac{1}{2} + f(2) \cdot \tfrac{3}{2} = \tfrac{3}{2}
\end{aligned}
$$
입니다. [[riemann-integral]]의 (1)에 의해 $1 \le \int_0^2 f \le \frac{3}{2}$이고, 따라서 $0 < \int_0^2 f < 2$입니다. 그런데 $f$의 값은 $0$과 $1$뿐이므로 $f(c)\,(2 - 0)$은 $0$이거나 $2$입니다. 그래서 $\int_0^2 f = f(c)\,(2 - 0)$인 $c \in [0, 2]$는 없습니다. (1)의 결론이 성립하지 않으므로, (1)에 의해 이 $f$는 연속함수가 아닙니다. 적분가능하다는 것만으로는 (1)의 결론을 얻을 수 없습니다.
:::

## 확인 질문

:::check[$f : [a, b] \to \mathbb{R}$가 연속함수이고 $\int_a^b f = 0$이면 $f$의 값에 대해 무엇을 말할 수 있는가?]
$f(c) = 0$인 $c \in [a, b]$가 있습니다. (1)의 $c$에서 $f(c)\,(b - a) = 0$이고 $b - a \ne 0$이므로 [[real-number-arithmetic]]의 (K10)에 의해 $f(c) = 0$입니다.
:::

:::check[$f(x) = |x|$로 정한 $f : [-1, 1] \to \mathbb{R}$에서 (1)의 $c$는 하나뿐인가?]
아닙니다. $[-1, 0]$에서는 $|x| = -x$, $[0, 1]$에서는 $|x| = x$이므로 [[riemann-integral-examples|리만 적분의 예]]의 (1), [[riemann-integral]]의 (4), [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)로 $\int_{-1}^{1} |x|\,dx = \frac{1}{2} + \frac{1}{2} = 1$입니다. $f(c) \cdot 2 = 1$이려면 $|c| = \frac{1}{2}$이어야 하고, $c = \frac{1}{2}$과 $c = -\frac{1}{2}$이 모두 그런 점입니다.
:::
