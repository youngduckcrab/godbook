---
title: 치환적분
title_en: Change of Variables
aliases: [치환 적분, 치환적분법, 변수 바꾸기, change of variables, substitution, u-substitution]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "g 가 [a, b] 위의 연속미분가능한 함수이고 f 가 g 의 값을 모두 담는 구간 위의 연속함수이면, f(g(x))g′(x) 의 a 에서 b 까지의 적분은 f 의 g(a) 에서 g(b) 까지의 방향 있는 적분과 같다. g 가 단조가 아니어도, g(b) < g(a) 이어도 성립하며, 일차 치환 g(x) = mx + k 를 따름으로 적는다."
requires: [function-composition, real-number-arithmetic, power-of-a-real-number, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, composition-of-continuous-functions, power-function-is-continuous, derivative, derivative-rules, derivative-of-power, chain-rule, riemann-integral, continuous-implies-integrable, oriented-integral, continuously-differentiable, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form, antiderivative-and-integral-of-power]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.3절(5.3.3 소절 Change of variables) 첫 문단 (p.203), Theorem 5.3.5 와 증명, Example 5.3.6, 5.3.7 (p.204); 5.1절(5.1.4 소절) 연습문제 5.1.8 (p.189)
    checked: original
    note: "출처의 Theorem 5.3.5(p.204)는 g : [a, b] → ℝ 가 연속미분가능하고 f : [c, d] → ℝ 가 연속이며 g([a, b]) ⊂ [c, d] 이면 ∫_a^b f(g(x))g′(x) dx = ∫_{g(a)}^{g(b)} f(u) du 라는 것으로, 이 항목의 (1)과 같다. 출처는 c < d 를 따로 적지 않고, 이 항목은 [c, d] 가 구간이 되도록 c < d 를 둔다. 출처의 증명(p.204)은 F(y) = ∫_{g(a)}^y f 로 두고 둘째 꼴(Remark 5.3.4, 연습문제 5.3.4)로 F′ = f, 연쇄 법칙으로 (F ∘ g)′ = f(g(x))g′(x), F(g(a)) = 0 과 첫째 꼴로 끝낸다. 이 항목의 증명도 같은 길이다. 출처는 g(b) < g(a) 나 g(a) = g(b) 인 경우를 따로 말하지 않고, 이 항목은 오른쪽을 방향 있는 적분(출처 5.1.3 소절 p.188 의 약속과 같은 것)으로 읽어 한 번에 다룬다. (2)는 f 의 정의역을 g 의 값을 모두 담는 구간 I 로 둔 꼴이고, 미적분의 기본정리 (둘째 꼴)을 구간 위에서 진술해 두었으므로 증명이 (1)과 같다. (3)의 일차 치환은 출처 연습문제 5.1.8(p.189; α > 0 일 때 f(αx + β) 가 적분가능함을 보이라)과 같은 함수 꼴이다. 출처의 예 5.3.6(p.204; g(x) = x² 로 ∫ x cos(x²) dx 를 구한다)은 cos 와 sin 을, 예 5.3.7(p.204; ln|x|/x 를 잘못 치환하는 예)은 ln 을 쓰므로 싣지 않았다. 예시 '∫_0^1 2x(x² + 1)³ dx' 는 출처 Example 5.3.6 과 같은 치환 g(x) = x² 꼴(여기서는 x² + 1)이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 넘겨짚은 일반 문장 1건, 근거 없는 까닭 문장 1건, 섞이기 쉬운 이름(평균값 정리)을 고쳤다."
added: 2026-11-20
---

:::statement
연속미분가능은 [[continuously-differentiable]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이며, 합성과 공역의 선언은 [[function-composition]]의 것이다. 리만 적분과 적분 변수를 쓴 $\int_a^b (x\text{에 대한 식})\,dx$는 [[riemann-integral]]의 것이고, 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고, $g : [a, b] \to \mathbb{R}$는 연속미분가능한 함수이다.

1. (닫힌구간 꼴) $c < d$인 실수 $c$, $d$와 연속함수 $f : [c, d] \to \mathbb{R}$에 대하여 $[a, b]$의 모든 $x$에서 $g(x) \in [c, d]$이면, $x$에서의 값이 $f(g(x))\,g'(x)$인 함수 $[a, b] \to \mathbb{R}$는 연속함수이고 리만 적분가능하며
   $$
   \begin{aligned}
   \int_a^b f(g(x))\,g'(x)\,dx &= \int_{g(a)}^{g(b)} f
   \end{aligned}
   $$
   이다. 오른쪽은 방향 있는 적분이고, $g(b) < g(a)$이거나 $g(a) = g(b)$여도 된다. $g$가 단조일 필요는 없다.
2. (구간 꼴) $I$가 구간이고 $f : I \to \mathbb{R}$가 연속함수이며 $[a, b]$의 모든 $x$에서 $g(x) \in I$이면, (1)과 같은 결론이 성립한다. 여기서 합성 $f \circ g$는 $g$를 $g : [a, b] \to I$로 선언해 정한 것이다([[chain-rule]]의 (3)과 [[composition-of-continuous-functions|연속함수의 합성]]의 (3)의 꼴).
3. (일차 치환) 실수 $m$, $k$에 대하여 $I$가 구간이고 $f : I \to \mathbb{R}$가 연속함수이며 $[a, b]$의 모든 $x$에서 $mx + k \in I$이면
   $$
   \begin{aligned}
   \int_a^b m\,f(mx + k)\,dx &= \int_{ma + k}^{mb + k} f
   \end{aligned}
   $$
   이다. $m = 0$이면 양쪽이 모두 $0$이다.
:::

:::english
Continuous differentiability is that of the entry on continuously differentiable functions; continuity and continuous functions are those of the entry on continuous functions; composition and declaring the codomain are those of the entry on composition of functions. The Riemann integral and $\int_a^b (\text{expression in } x)\,dx$ with a variable of integration are those of the entry on the Riemann integral, and the oriented integral $\int_\alpha^\beta f$ is that of the entry on the oriented integral. Below, $a$, $b$ are real numbers with $a < b$, and $g : [a, b] \to \mathbb{R}$ is a continuously differentiable function.

1. (Closed-interval form) For real numbers $c < d$ and a continuous function $f : [c, d] \to \mathbb{R}$, if $g(x) \in [c, d]$ for all $x$ in $[a, b]$, then the function $[a, b] \to \mathbb{R}$ whose value at $x$ is $f(g(x))\,g'(x)$ is continuous and Riemann integrable, and
   $$
   \begin{aligned}
   \int_a^b f(g(x))\,g'(x)\,dx &= \int_{g(a)}^{g(b)} f.
   \end{aligned}
   $$
   The right-hand side is an oriented integral, and $g(b) < g(a)$ or $g(a) = g(b)$ is allowed. $g$ need not be monotone.
2. (Interval form) If $I$ is an interval, $f : I \to \mathbb{R}$ is a continuous function, and $g(x) \in I$ for all $x$ in $[a, b]$, then the same conclusion as in (1) holds. Here the composition $f \circ g$ is defined by declaring $g$ as $g : [a, b] \to I$ (in the form of (3) of the chain rule and of (3) of the entry on composition of continuous functions).
3. (Affine substitution) For real numbers $m$, $k$, if $I$ is an interval, $f : I \to \mathbb{R}$ is a continuous function, and $mx + k \in I$ for all $x$ in $[a, b]$, then
   $$
   \begin{aligned}
   \int_a^b m\,f(mx + k)\,dx &= \int_{ma + k}^{mb + k} f.
   \end{aligned}
   $$
   If $m = 0$, both sides are $0$.
:::

## 직관

$u = g(x)$로 바꾸어 생각하면, $x$가 $[a, b]$를 지날 때 $u$는 $g(a)$에서 $g(b)$까지 움직입니다. $x$를 조금 움직이면 $u$는 대략 $g'(x)$배만큼 움직이므로, $f(u)$를 $u$에 대해 쌓은 양은 $f(g(x))\,g'(x)$를 $x$에 대해 쌓은 양과 같아집니다. 증명은 이 그림을 쓰지 않고, $f$의 원시함수 $F$를 하나 잡아 $(F \circ g)' = f(g(x))\,g'(x)$라는 연쇄 법칙과 미적분의 기본정리 두 꼴로 끝냅니다.

$g$가 중간에 되돌아가도 됩니다. $u$가 이미 지난 곳을 거꾸로 지나면 그 구간에서 $g'$이 음수여서 쌓은 양이 지워지고, 남는 것은 $g(a)$에서 $g(b)$까지의 양뿐입니다. 아래 둘째 예시가 그런 경우입니다. 그래서 오른쪽은 끝점 $g(a)$, $g(b)$만으로 정해지는 방향 있는 적분입니다.

## 증명

:::idea
$F(y) = \int_{g(a)}^y f$는 $f$의 원시함수이다. 연쇄 법칙으로 $(F \circ g)' = (f \circ g)\,g'$이므로, 왼쪽은 첫째 꼴에 의해 $F(g(b)) - F(g(a)) = \int_{g(a)}^{g(b)} f$이다.
:::

:::hint
$F$를 둘째 꼴로 정하고 그 밑점을 $g(a)$로 잡으세요. $F(g(a)) = 0$입니다.
:::

:::hint
$F \circ g$가 연속미분가능하다는 것은 [[continuously-differentiable|연속미분가능한 함수]]의 (5)가 줍니다. 그러면 첫째 꼴의 (2)를 바로 쓸 수 있습니다.
:::

:::proof
"연속미분가능 (5)"처럼 쓴 것은 [[continuously-differentiable]]의 번호, "첫째 꼴 (2)"는 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 번호, "둘째 꼴 (4)"는 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 번호, "실함수 (4)"는 [[real-valued-function]]의 번호이다. (2)를 먼저 보이고 (1), (3)을 그 따름으로 얻는다.

**2의 증명.** $[a, b]$는 [[interval]]의 (1)에 의해 구간이다. 연속미분가능 (1)에 의해 $g$는 연속함수이고, 정의에 의해 $g'$도 연속함수이다. 모든 $x \in [a, b]$에서 $g(x) \in I$이므로 [[function-composition]]의 진술에 의해 같은 $g$를 $g : [a, b] \to I$로 선언해 $f \circ g : [a, b] \to \mathbb{R}$를 정할 수 있고, [[composition-of-continuous-functions|연속함수의 합성]]의 (2), (3)에 의해 $f \circ g$는 연속함수이다. $h = (f \circ g)\,g'$로 두면 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $h$는 연속함수이고, 실함수 (4)에 의해 $h(x) = f(g(x))\,g'(x)$이다. [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 $h$는 리만 적분가능하고, $\int_a^b f(g(x))\,g'(x)\,dx$는 [[riemann-integral]]의 적분 변수의 약속에 의해 $\int_a^b h$이다.

$g(a) \in I$이므로 이것을 밑점으로 하여 $F(y) = \int_{g(a)}^y f$로 정한 $F : I \to \mathbb{R}$를 생각한다. $f$가 연속함수이므로 둘째 꼴 (4)에 의해 $f$는 $I$의 어느 두 점 사이에서도 적분가능하고, $F$는 연속미분가능하며 $F' = f$이다. 연속미분가능 (5)를 $I_1 = [a, b]$, $I_2 = I$와 $g : [a, b] \to I$, $F : I \to \mathbb{R}$에 쓰면 $F \circ g$는 연속미분가능하고
$$
\begin{aligned}
(F \circ g)' &= (F' \circ g)\,g' \\
&= (f \circ g)\,g' \\
&= h
\end{aligned}
$$
이다. 첫째 꼴 (2)를 구간 $[a, b]$와 $\alpha = a$, $\beta = b$에 쓰면
$$
\begin{aligned}
\int_a^b h &= \int_a^b (F \circ g)' \\
&= F(g(b)) - F(g(a))
\end{aligned}
$$
이다. 둘째 꼴 (6)에 의해 $F(g(a)) = 0$이고, $F$의 정의에 의해 $F(g(b)) = \int_{g(a)}^{g(b)} f$이므로 결론을 얻는다([[real-number-arithmetic]]의 (K4), (K9)). 이 증명은 $g(a)$와 $g(b)$의 크기를 비교하지 않으므로 $g(b) < g(a)$이거나 $g(a) = g(b)$여도 그대로이고, $g$가 단조라는 것도 쓰지 않는다.

**1의 증명.** $c < d$이므로 [[interval]]의 (1)에 의해 $[c, d]$는 구간이다. 2를 $I = [c, d]$로 쓰면 된다.

**3의 증명.** $g(x) = mx + k$로 정한 $g : [a, b] \to \mathbb{R}$는 연속미분가능 (4)에 의해 연속미분가능하고 $g'$은 값이 $m$인 상수함수이다. $g(a) = ma + k$, $g(b) = mb + k$이고, [[real-number-arithmetic]]의 (K1)에 의해 $f(g(x))\,g'(x) = m\,f(mx + k)$이다. 2에 의해 결론을 얻는다. $m = 0$이면 왼쪽은 값이 $0$인 상수함수의 적분이므로 [[riemann-integral]]의 (5)에 의해 $0$이고((K9)), 오른쪽은 $ma + k = k = mb + k$이므로 방향 있는 적분의 정의에 의해 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\int_0^1 2x\,(x^2 + 1)^3\,dx$]
$g(x) = x^2 + 1$로 정한 $g : [0, 1] \to \mathbb{R}$는 [[continuously-differentiable]]의 (3), (4)에 의해 연속미분가능하고 $g'(x) = 2x$입니다. $f = p_3 : \mathbb{R} \to \mathbb{R}$는 [[power-function-is-continuous]]의 (1)에 의해 연속함수이고, $\mathbb{R}$은 구간이므로([[interval]]의 (2)) (2)를 $I = \mathbb{R}$로 씁니다. $f(g(x))\,g'(x) = (x^2 + 1)^3 \cdot 2x = 2x\,(x^2 + 1)^3$이고([[real-number-arithmetic]]의 (K1)) $g(0) = 1$, $g(1) = 2$이므로, [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)을 $n = 3$으로 써서
$$
\begin{aligned}
\int_0^1 2x\,(x^2 + 1)^3\,dx &= \int_1^2 u^3\,du \\
&= \frac{2^4 - 1^4}{4} \\
&= \frac{15}{4}
\end{aligned}
$$
입니다.
:::

:::example[단조가 아닌 $g$: $\int_{-1}^{2} 2x^3\,dx$]
$g(x) = x^2$으로 정한 $g : [-1, 2] \to \mathbb{R}$는 연속미분가능하고 $g'(x) = 2x$입니다. $g$는 $-1$에서 $0$까지는 줄고 $0$에서 $2$까지는 늘어나므로 단조가 아닙니다. $f$를 $\mathbb{R}$ 위의 항등함수라 하면 $f(g(x))\,g'(x) = x^2 \cdot 2x = 2x^3$이고 $g(-1) = 1$, $g(2) = 4$이므로 (2)에 의해
$$
\begin{aligned}
\int_{-1}^{2} 2x^3\,dx &= \int_1^4 u\,du \\
&= \frac{4^2 - 1^2}{2} \\
&= \frac{15}{2}
\end{aligned}
$$
입니다([[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3), $n = 1$). 치환 없이 원시함수 $x^4/2$로 직접 계산해도([[derivative-of-power|거듭제곱 함수의 미분]]의 (1), [[derivative-rules|미분의 규칙]]의 (6)으로 그 도함수가 $2x^3$이고, [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (2)를 씁니다) $(2^4 - (-1)^4)/2 = 15/2$로 같습니다. $u$는 $1$에서 $0$으로 내려갔다가 $4$까지 올라가지만, 결과는 끝점 $1$과 $4$만으로 정해집니다.
:::

## 확인 질문

:::check[$\int_0^1 (-1)(1 - x)^2\,dx$를 (3)으로 계산하면?]
$-1/3$입니다. (3)을 $m = -1$, $k = 1$, $I = \mathbb{R}$, $f = p_2$로 쓰면 $ma + k = 1$, $mb + k = 0$이므로 $\int_0^1 (-1)(1 - x)^2\,dx = \int_1^0 u^2\,du$입니다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)에 의해 이것은 $(0^3 - 1^3)/3 = -1/3$입니다. $g(b) < g(a)$인 경우이고, 오른쪽은 방향 있는 적분입니다.
:::

:::check[$g$가 $[a, b]$ 위의 상수함수이면 (1)의 양쪽은 각각 무엇인가?]
둘 다 $0$입니다. [[derivative]]의 (1)에 의해 $g'$은 값이 $0$인 상수함수이므로 왼쪽의 함수는 모든 점에서 $f(g(x)) \cdot 0 = 0$이고([[real-number-arithmetic]]의 (K9)), [[riemann-integral]]의 (5)에 의해 그 적분은 $0$입니다. $g(a) = g(b)$이므로 오른쪽은 방향 있는 적분의 정의에 의해 $0$입니다. 증명을 따라가도 같은 결론이 나옵니다.
:::
