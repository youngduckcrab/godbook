---
title: 미적분의 기본정리 (둘째 꼴)
title_en: Fundamental Theorem of Calculus (Second Form)
aliases: [미적분의 기본정리 둘째 꼴, 적분으로 정한 함수의 미분, fundamental theorem of calculus, fundamental theorem of calculus second form]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "구간의 어느 두 점 사이에서도 적분가능한 함수 f 와 밑점 p 로 F(x) = ∫ f (p 에서 x 까지)를 정하면, F 는 닫힌구간마다 립시츠 연속이고 f 가 연속인 점에서 미분가능하며 그 점에서 F′ = f 이다. 특히 f 가 연속함수이면 F 는 연속미분가능하고 F′ = f 이다. 밑점을 바꾸면 F 는 상수만큼 달라진다."
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, bounded-function, power-function-is-continuous, limit-of-a-function, continuous-function, lipschitz-continuity, derivative, derivative-and-monotonicity, riemann-integral, riemann-integral-examples, monotone-implies-integrable, continuous-implies-integrable, additivity-of-the-integral, oriented-integral, continuously-differentiable, fundamental-theorem-of-calculus-first-form]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.3절(5.3.2 소절 Second form of the theorem) Theorem 5.3.3 과 증명 (p.202), 그 뒤 문단과 Remark 5.3.4, 두 예 (p.203); 5.3절(5.3.4 소절) 연습문제 5.3.4 (p.205)
    checked: original
    note: "출처의 Theorem 5.3.3(p.202)은 리만 적분가능한 f : [a, b] → ℝ 와 F(x) = ∫_a^x f 에 대하여 F 가 [a, b] 에서 연속이고, f 가 c ∈ [a, b] 에서 연속이면 F 가 c 에서 미분가능하고 F′(c) = f(c) 라는 것이다. Remark 5.3.4(p.203)는 밑점을 [a, b] 의 아무 점 d 로 바꾸어도 성립한다고 하고 증명을 연습문제로 남기며, 연습문제 5.3.4(p.205)는 연속인 f 와 아무 c ∈ [a, b] 에 대해 F(x) = ∫_c^x f 가 미분가능하고 F′ = f 임을 보이라는 것이다. 이 항목은 정의역을 닫힌구간 [a, b] 대신 'f 가 어느 두 점 사이에서도 적분가능한 구간 I' 로 넓히고 밑점 p 를 I 의 아무 점으로 둔다. I = [a, b] 이면 출처의 경우이다. (3)은 Theorem 5.3.3 의 둘째 문장을 밑점이 아무 점인 경우로, (4)는 정리 뒤 문단(p.203; f 가 [a, b] 에서 연속이면 F 가 [a, b] 전체에서 미분가능하고 F′ = f)과 연습문제 5.3.4 를 진술로 올린 것이고, '연속미분가능'은 이 항목이 덧붙인 말이다. (2)는 출처 증명의 첫 부분(|F(x) − F(y)| ≤ M|x − y|, PDF 그림으로 막대를 확인한 식)이다. 출처는 x > y 인 경우를 보이고 'By symmetry' 로 나머지를 덮는다. 이 항목은 oriented-integral 의 (3)으로 두 경우를 한 번에 다룬다. (3)의 증명에서 출처는 x > c 인 경우의 부등식을 보이고 c > x 이면 부등식이 뒤집힌다고 적으며, ≤ ε 로 충분한 까닭을 독자에게 맡긴다(p.202). 이 항목은 ε/2 를 넣어 < ε 을 얻고, x 가 c 의 어느 쪽에 있든 oriented-integral 의 (1), (3)으로 한 번에 보인다. (1)의 세 점의 덧셈과 (5), (6)은 출처 증명 안의 식 ∫_a^x f − ∫_a^c f = ∫_c^x f 와 Remark 5.3.4 를 정리해 둔 것이다. 반례 '부호 함수'와 예시 '한 점에서만 값이 다른 함수'는 출처 5.3.2 소절의 두 예(p.203; x < 0 이면 −1, x ≥ 0 이면 1 인 f 의 F 는 |x|, 0 에서만 1 인 g 의 G 는 0)와 같은 함수, 같은 결론이다. 출처는 F(x) = |x| 와 G = 0 을 'not difficult to see' 로 두고, 이 항목은 첫째 꼴의 (1)로 계산한다. 확인 질문 1 은 출처 Example 5.1.11(5.1.2 소절, p.186; 상수함수의 적분은 c(b − a))의 계산을 밑점과 방향 있는 적분으로 쓴 것이다. 확인 질문 2 의 ∫_0^x t dt 는 리만 적분 3단원 riemann-integral-examples (1)의 ∫_0^b x dx = b²/2 와 같은 값을 음수 x 까지 넓힌 것이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 반례의 빠진 근거 2건과 조건이 빠진 설명 문장 2건을 고쳤다."
added: 2026-11-20
---

:::statement
구간과 닫힌구간은 [[interval]]의 것이고, 리만 적분가능과 "$[a, b]$에서 적분가능"은 [[riemann-integral]]의 것이며, 방향 있는 적분 $\int_\alpha^\beta f$, "$\alpha$와 $\beta$ 사이에서 적분가능", "$\alpha$와 $\beta$ 사이에 있다"는 [[oriented-integral]]의 것이다. 연속은 [[continuous-function]]의 것이고, 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]]의 것이며, 립시츠 연속은 [[lipschitz-continuity]]의 것이고, 연속미분가능은 [[continuously-differentiable]]의 것이다.

$I$를 구간, $f : I \to \mathbb{R}$를 $I$의 어느 두 점 사이에서도 적분가능한 함수라 하자. 예를 들어 $a < b$이고 $f : [a, b] \to \mathbb{R}$가 리만 적분가능하면 $I = [a, b]$에서 그렇고([[oriented-integral]]의 (2)), 아래 (4)에 의해 $I$ 위의 연속함수도 그렇다. $p$를 $I$의 원소라 하자. 이 점을 **밑점**(base point)이라 한다. 밑점의 글자 $p$는 거듭제곱 함수 $p_n$([[power-function-is-continuous]]의 (1))과 다른 것이고, 아래첨자가 없는 $p$는 언제나 밑점이다. $I$의 각 원소 $x$에서 $\int_p^x f$는 실수 하나로 정해지므로, [[real-valued-function]]의 (1)에 의해
$$
F(x) = \int_p^x f
$$
로 정한 함수 $F : I \to \mathbb{R}$가 있다. 밑점을 밝힐 때는 $F_p$로 쓴다. 다음이 성립한다.

1. (세 점) $\alpha$, $\beta$, $\gamma$가 $I$의 원소이면(순서와 같음은 아무래도 좋다) $\int_\alpha^\gamma f = \int_\alpha^\beta f + \int_\beta^\gamma f$이다. 특히 $x$, $y \in I$이면 $F(x) - F(y) = \int_y^x f$이다.
2. (립시츠 연속) $a < b$이고 $[a, b] \subseteq I$이며 실수 $B$가 $[a, b]$의 모든 $t$에서 $|f(t)| \le B$를 만족하면, $[a, b]$의 모든 $x$, $y$에서
   $$
   |F(x) - F(y)| \le B\,|x - y|
   $$
   이다. 이런 $B$는 언제나 있으므로 제한 $F|_{[a, b]}$는 립시츠 연속이고 연속함수이다. 특히 $I = [a, b]$이면 $F$는 연속함수이다.
3. (연속인 점에서의 미분) $c \in I$이고 $f$가 $c$에서 연속이면, $F$는 $c$에서 미분가능하고 $F'(c) = f(c)$이다. $c$가 $I$의 가장 큰 원소나 가장 작은 원소여도 그렇다(예를 들어 $I = [a, b]$이고 $c = a$나 $c = b$).
4. (연속함수) $f : I \to \mathbb{R}$가 연속함수이면 $f$는 $I$의 어느 두 점 사이에서도 적분가능하고, $F$는 미분가능한 함수이며 $F' = f$이다. 따라서 $F$는 연속미분가능하다.
5. (밑점 바꾸기) $p$, $p'$이 $I$의 원소이면 $I$의 모든 $x$에서
   $$
   F_p(x) = F_{p'}(x) + \int_p^{p'} f
   $$
   이다. 곧 두 밑점의 $F$는 상수 $\int_p^{p'} f$만큼 다르다.
6. (밑점에서의 값) $F(p) = 0$이다.
:::

:::english
Intervals and closed intervals are those of the entry on intervals; Riemann integrability and "integrable on $[a, b]$" are those of the entry on the Riemann integral; the oriented integral $\int_\alpha^\beta f$, "integrable between $\alpha$ and $\beta$" and "lies between $\alpha$ and $\beta$" are those of the entry on the oriented integral. Continuity is that of the entry on continuous functions; differentiability, derivatives at a point, differentiable functions and the derivative are those of the entry on derivatives; Lipschitz continuity is that of the entry on Lipschitz continuity; continuous differentiability is that of the entry on continuously differentiable functions.

Let $I$ be an interval and $f : I \to \mathbb{R}$ a function that is integrable between any two points of $I$. For example, if $a < b$ and $f : [a, b] \to \mathbb{R}$ is Riemann integrable, this holds with $I = [a, b]$, and by (4) below it holds for every continuous function on $I$. Let $p$ be an element of $I$, called the **base point**. The letter $p$ for the base point is different from the power functions $p_n$, and a $p$ without a subscript always denotes the base point. For each element $x$ of $I$, $\int_p^x f$ is a single real number, so there is a function $F : I \to \mathbb{R}$ defined by
$$
F(x) = \int_p^x f.
$$
When the base point is to be specified, we write $F_p$. The following hold.

1. (Three points) If $\alpha$, $\beta$, $\gamma$ are elements of $I$ (in any order, possibly equal), then $\int_\alpha^\gamma f = \int_\alpha^\beta f + \int_\beta^\gamma f$. In particular, $F(x) - F(y) = \int_y^x f$ for $x$, $y \in I$.
2. (Lipschitz continuity) If $a < b$, $[a, b] \subseteq I$, and a real number $B$ satisfies $|f(t)| \le B$ for all $t \in [a, b]$, then for all $x$, $y \in [a, b]$
   $$
   |F(x) - F(y)| \le B\,|x - y|.
   $$
   Such a $B$ always exists, so the restriction $F|_{[a, b]}$ is Lipschitz continuous and is a continuous function. In particular, if $I = [a, b]$, then $F$ is a continuous function.
3. (Derivative at a point of continuity) If $c \in I$ and $f$ is continuous at $c$, then $F$ is differentiable at $c$ and $F'(c) = f(c)$. This holds even if $c$ is the largest or smallest element of $I$ (for example, $I = [a, b]$ and $c = a$ or $c = b$).
4. (Continuous functions) If $f : I \to \mathbb{R}$ is a continuous function, then $f$ is integrable between any two points of $I$, $F$ is a differentiable function, and $F' = f$. Hence $F$ is continuously differentiable.
5. (Changing the base point) If $p$, $p'$ are elements of $I$, then for all $x \in I$
   $$
   F_p(x) = F_{p'}(x) + \int_p^{p'} f.
   $$
   That is, the functions for the two base points differ by the constant $\int_p^{p'} f$.
6. (Value at the base point) $F(p) = 0$.
:::

## 직관

$F(x)$는 밑점 $p$에서 $x$까지 $f$를 쌓은 양입니다. $x$를 조금 움직여 $x + h$로 가면 더해지는 양은 $\int_x^{x+h} f$이고, $f$가 $x$ 근처에서 거의 $f(x)$이면 이 양은 거의 $f(x)\,h$입니다. 그래서 쌓인 양이 늘어나는 빠르기, 곧 $F'(x)$가 $f(x)$가 됩니다. 증명은 이 "거의"를 [[oriented-integral|방향 있는 적분]]의 (3)의 어림으로 정확하게 만듭니다.

물탱크에 비유하면 $f(t)$는 시각 $t$에 물이 들어오는 빠르기이고 $F(x)$는 시각 $p$부터 $x$까지 들어온 물의 양입니다. 들어오는 빠르기가 시각 $c$ 근처에서 고르게 변하면(연속이면) 물의 양이 늘어나는 빠르기는 그때 들어오는 빠르기와 같습니다. 비유가 맞지 않는 곳은, $x < p$이면 $F(x)$가 거꾸로 센 양이 되어 부호가 바뀐다는 점과, $f$가 음수이면 물이 빠져나가는 것으로 읽어야 한다는 점입니다.

$f$가 연속이 아닌 점에서는 두 가지가 다 일어날 수 있습니다. 아래 반례에서는 $F$가 그 점에서 미분가능하지 않고, 아래 예시에서는 $F$가 미분가능하지만 $F'(c) \ne f(c)$입니다. 구간 위의 연속함수 $f$에서는 (4)에 의해 언제나 $F' = f$이므로, 구간 위의 연속함수는 늘 그 구간 위의 어떤 미분가능한 함수의 도함수입니다.

## 증명

:::idea
$F(x) - F(c) = \int_c^x f$이고, $f$가 $c$ 근처에서 $f(c)$에 가까우면 이 적분은 $f(c)(x - c)$에 가깝다. 그 차를 $|x - c|$로 나누면 차분몫과 $f(c)$의 차가 된다.
:::

:::hint
세 점의 덧셈은 세 점을 모두 담는 닫힌구간 하나에서 [[oriented-integral|방향 있는 적분]]의 (2)를 쓰면 됩니다. 가장 작은 점과 가장 큰 점으로 그 구간을 잡으세요.
:::

:::hint
$c$와 $x$ 사이의 모든 점 $t$는 $|t - c| \le |x - c|$를 만족합니다. 연속의 $\delta$를 고를 때 $\varepsilon$ 대신 $\varepsilon/2$를 넣으면 마지막에 "$< \varepsilon$"을 얻습니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "방향 (3)"처럼 쓴 것은 [[oriented-integral]]의 번호, "순서 성질 (4)"는 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다. $F(x)$가 정해진다는 것은 가정과 방향 있는 적분의 정의에서 바로 나온다.

**1의 증명.** $m = \min\{\min\{\alpha, \beta\}, \gamma\}$, $M = \max\{\max\{\alpha, \beta\}, \gamma\}$로 두자. 절댓값 (10)에 의해 $m$과 $M$은 각각 $\alpha$, $\beta$, $\gamma$ 가운데 하나이고, 순서 성질 (1)의 (v)와 함께 $\alpha$, $\beta$, $\gamma$는 모두 $m$ 이상 $M$ 이하이다.

$m = M$이면 순서 성질 (1)의 (ii)에 의해 $\alpha = \beta = \gamma$이고, 방향 있는 적분의 정의에 의해 세 적분이 모두 $0$이므로 $0 = 0 + 0$이다. $m < M$이면 $m$, $M \in I$이므로 [[interval]]의 (4)에 의해 $[m, M] \subseteq I$이고, 가정에 의해 $f$는 $m$과 $M$ 사이에서, 곧 $[m, M]$에서 적분가능하다. $\alpha$, $\beta$, $\gamma$는 $[m, M]$의 원소이므로 방향 (2)를 $a = m$, $b = M$으로 쓰면 등식을 얻는다.

둘째 문장: $\alpha = p$, $\beta = y$, $\gamma = x$로 두면 $F(x) = F(y) + \int_y^x f$이고, (K1), (K2), (K5)로 양변에서 $F(y)$를 빼면 $F(x) - F(y) = \int_y^x f$이다.

**2의 증명.** $x$, $y \in [a, b]$라 하자. 1에 의해 $F(x) - F(y) = \int_y^x f$이다. $[a, b]$는 [[interval]]의 (1)에 의해 구간이므로, 방향 (1)을 구간 $[a, b]$와 그 원소 $y$, $x$에 쓰면 $y$와 $x$ 사이에 있는 모든 점 $t$는 $[a, b]$의 원소이고, 가정에 의해 $|f(t)| \le B$이다. 절댓값 (2)에 의해 $0 \le |f(a)| \le B$이므로 $0 \le B$이다. 방향 (3)을 원래의 구간 $I$, $\alpha = y$, $\beta = x$, $k = 0$, $\varepsilon = B$로 쓰면 $\left|\int_y^x f\right| \le B\,|x - y|$이다. 따라서 $|F(x) - F(y)| \le B\,|x - y|$이다.

가정에 의해 $f$는 $a$와 $b$ 사이에서, 곧 $[a, b]$에서 적분가능하고, [[riemann-integral]]의 (4)와 (6)에 의해 $f|_{[a, b]}$는 유계이다. [[bounded-function]]의 정의에 의해 $[a, b]$의 모든 $t$에서 $|f(t)| \le B$인 실수 $B$가 있다. 그런 $B$에 대하여 [[real-valued-function]]의 (6)에 의해 $F|_{[a, b]}$의 값은 $F$의 값과 같으므로, $0 \le B$인 $B$는 $F|_{[a, b]}$의 립시츠 상수이다. [[lipschitz-continuity]]의 (2)에 의해 $F|_{[a, b]}$는 연속함수이다. $I = [a, b]$이면 [[real-valued-function]]의 (2), (6)에 의해 $F|_{[a, b]} = F$이다.

**3의 증명.** $\varepsilon$을 양의 실수라 하자. 순서 성질 (8)에 의해 $0 < \varepsilon/2 < \varepsilon$이다. $f$가 $c$에서 연속이므로, 양의 실수 $\delta$가 있어 $t \in I$이고 $|t - c| < \delta$이면 $|f(t) - f(c)| < \varepsilon/2$이다.

$x \in I$, $x \ne c$, $|x - c| < \delta$라 하자. 1에 의해 $F(x) - F(c) = \int_c^x f$이다. 방향 (1)에 의해 $c$와 $x$ 사이에 있는 모든 점 $t$는 $I$의 원소이고 $|t - c| \le |x - c|$이므로, 순서 성질 (1)의 (v)에 의해 $|t - c| < \delta$이고 $|f(t) - f(c)| < \varepsilon/2$이다. 가정에 의해 $f$는 $c$와 $x$ 사이에서 적분가능하므로, 방향 (3)을 $\alpha = c$, $\beta = x$, $k = f(c)$와 $\varepsilon/2$에 쓰면
$$
\begin{aligned}
&\bigl|F(x) - F(c) - f(c)(x - c)\bigr| \\
&\quad \le \frac{\varepsilon}{2}\,|x - c|
\end{aligned}
$$
이다. $x \ne c$이므로 (K12)의 (v)에 의해 $x - c \ne 0$이고, 절댓값 (2), (9)에 의해 $0 < |x - c|$이며 $|(x - c)^{-1}| = |x - c|^{-1}$이다. $q_c$를 $F$의 $c$에서의 차분몫([[derivative]])이라 하면 (K2), (K3), (K8)의 (iii), (K12)에 의해
$$
\begin{aligned}
&q_c(x) - f(c) \\
&\quad = \bigl(F(x) - F(c) - f(c)(x - c)\bigr) \\
&\qquad \cdot (x - c)^{-1}
\end{aligned}
$$
이므로, 절댓값 (4)와 순서 성질 (4)의 (iii), (6)의 (i)에 의해
$$
\begin{aligned}
|q_c(x) - f(c)| &\le \frac{\varepsilon}{2}\,|x - c|\,|x - c|^{-1} \\
&= \frac{\varepsilon}{2} < \varepsilon
\end{aligned}
$$
이다. $c$는 $I - \{c\}$의 집적점이므로([[derivative]]의 진술), [[limit-of-a-function]]의 수렴의 정의에 의해 $q_c$는 $c$에서 $f(c)$로 수렴한다. 곧 $F$는 $c$에서 미분가능하고 $F'(c) = f(c)$이다. 이 논증은 $x$가 $c$의 어느 쪽에 있는지 나누지 않으므로 $c$가 $I$의 가장 큰 원소나 가장 작은 원소여도 그대로 성립한다.

**4의 증명.** $\alpha$, $\beta \in I$라 하자. $\alpha < \beta$이면 [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이고 $f$는 $[\alpha, \beta]$에서 연속이므로, [[continuous-implies-integrable|연속함수의 적분가능성]]의 (2)를 $S = I$로 쓰면 $f$는 $[\alpha, \beta]$에서 적분가능하다. $\beta < \alpha$이면 같은 까닭으로 $[\beta, \alpha]$에서 적분가능하고, $\alpha = \beta$이면 정의에 의해 사이에서 적분가능하다. 따라서 $F$가 정해진다. $f$는 $I$의 모든 점에서 연속이므로 3에 의해 $F$는 $I$의 모든 점에서 미분가능하고 $F'(c) = f(c)$이다. 곧 $F$는 미분가능한 함수이고 [[real-valued-function]]의 (2)에 의해 $F' = f$이다. $F' = f$는 연속함수이므로 [[continuously-differentiable]]의 정의에 의해 $F$는 연속미분가능하다.

**5의 증명.** 1을 $\alpha = p$, $\beta = p'$, $\gamma = x$로 쓰면 $\int_p^x f = \int_p^{p'} f + \int_{p'}^x f$이고, (K1)에 의해 $F_p(x) = F_{p'}(x) + \int_p^{p'} f$이다.

**6의 증명.** 방향 있는 적분의 정의에 의해 $\int_p^p f = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::counterexample[부호 함수: 불연속인 점에서 $F$가 미분가능하지 않은 예]
$f : [-1, 1] \to \mathbb{R}$를 $x < 0$이면 $f(x) = -1$, $0 \le x$이면 $f(x) = 1$로 정합니다. $x < y$이면 $f(x) \le f(y)$이므로 $f$는 단조증가이고([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의), [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 적분가능합니다. 따라서 $I = [-1, 1]$, 밑점 $p = 0$으로 $F(x) = \int_0^x f$를 정할 수 있습니다. $F(x) = |x|$임을 보입니다.

- $0 < x$이면 $G(t) = t$로 정한 $G : [0, x] \to \mathbb{R}$는 [[continuously-differentiable]]의 (4), (1)에 의해 연속함수이고 모든 점에서 $G'(t) = 1$입니다. $0 < t < x$이면 $f(t) = 1 = G'(t)$이고, $f$는 [[additivity-of-the-integral|적분의 구간 덧셈]]의 (2)에 의해 $[0, x]$에서 적분가능합니다. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 (1)에 의해 $F(x) = \int_0^x f = G(x) - G(0) = x$입니다.
- $x < 0$이면 $G(t) = -t$로 정한 $G : [x, 0] \to \mathbb{R}$는 같은 까닭으로 연속함수이고 $G'(t) = -1$이며, $x < t < 0$이면 $f(t) = -1 = G'(t)$입니다. 같은 정리에 의해 $\int_x^0 f = G(0) - G(x) = x$이고, 방향 있는 적분의 정의에 의해 $F(x) = -\int_x^0 f = -x$입니다.
- $x = 0$이면 (6)에 의해 $F(0) = 0$입니다.

[[absolute-value|절댓값]]의 (1)에 의해 세 경우 모두 $F(x) = |x|$입니다. [[derivative]]의 (3)을 $I = [-1, 1]$, $r = 1$로 쓰면 $F$는 $0$에서 미분가능하지 않습니다. 따라서 (3)의 대우에 의해 $f$는 $0$에서 연속이 아닙니다. (3)의 가정 "$f$가 $c$에서 연속"을 빼면 결론이 깨질 수 있다는 것을 보이는 예입니다.
:::

:::example[한 점에서만 값이 다른 함수: $F'(c)$와 $f(c)$가 다를 수 있는 예]
$g : [-1, 1] \to \mathbb{R}$를 $g(0) = 1$, $x \ne 0$이면 $g(x) = 0$으로 정합니다. [[riemann-integral-examples|리만 적분의 예]]의 (4)에 의해 $g$는 적분가능하므로 $G(x) = \int_0^x g$를 정할 수 있습니다. $0 < x$이면 $[0, x]$ 위의 값이 $0$인 상수함수 $H$는 [[continuously-differentiable]]의 (4), (1)에 의해 연속함수이고 $H'$은 값이 $0$인 상수함수이며, $0 < t < x$에서 $g(t) = 0 = H'(t)$입니다. $g$는 [[additivity-of-the-integral|적분의 구간 덧셈]]의 (2)에 의해 $[0, x]$에서 적분가능하므로 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 (1)에 의해 $G(x) = H(x) - H(0) = 0$입니다. $x < 0$이면 같은 방법으로 $\int_x^0 g = 0$이고 $G(x) = -0 = 0$이며, $G(0) = 0$입니다((6)). 곧 $G$는 $[-1, 1]$ 위의 값이 $0$인 상수함수이고, [[derivative]]의 (1)에 의해 $0$에서 미분가능하며 $G'(0) = 0$입니다. 그러나 $g(0) = 1$이므로 $G'(0) \ne g(0)$입니다. (3)의 대우에 의해 $g$는 $0$에서 연속이 아닙니다. $F$가 미분가능하다는 것만으로 $f$가 그 점에서 연속이라는 것은 나오지 않습니다.
:::

## 확인 질문

:::check[$I$ 위의 값이 $k$인 상수함수 $f$와 밑점 $p$로 정한 $F(x) = \int_p^x f$는 어떤 함수인가?]
$F(x) = k(x - p)$인 함수입니다. $p$와 $x$ 사이의 모든 점에서 $f$의 값이 $k$이므로 [[oriented-integral]]의 (4)에 의해 $\int_p^x f = k(x - p)$입니다. (4)와 맞추어 보면 $F'(x) = k = f(x)$입니다([[derivative]]의 (1)에서 $F(x) = kx + (-kp)$).
:::

:::check[$\mathbb{R}$ 위에서 $f(t) = t$이고 밑점이 $0$일 때 $F(x) = \int_0^x f$는? $x < 0$에서도 같은 식인가?]
모든 실수 $x$에서 $F(x) = x^2/2$입니다. $f$는 항등함수이므로 [[continuous-function]]의 (4)에 의해 연속함수이고, (4)에 의해 $F$가 정해집니다. $H(x) = 2^{-1}x^2$으로 정한 $H : \mathbb{R} \to \mathbb{R}$는 [[continuously-differentiable]]의 (3), (4)에 의해 연속미분가능하고 $H'(x) = 2^{-1} \cdot 2x = x = f(x)$입니다. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 (2)를 $I = \mathbb{R}$, $\alpha = 0$, $\beta = x$에 쓰면 $F(x) = \int_0^x H' = H(x) - H(0) = x^2/2$이고, 이것은 $x < 0$이어도 같습니다.
:::
