---
title: 평균값 정리
title_en: Mean Value Theorem
aliases: [평균값의 정리, 라그랑주의 평균값 정리, mean value theorem, MVT]
kind: theorem
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "a < b 이고 f : [a, b] → ℝ 가 연속이며 열린구간 (a, b) 에서 미분가능하면, f(b) − f(a) = f′(c)(b − a) 인 c ∈ (a, b) 가 있다."
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, rolle-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.2.3절 Theorem 4.2.4 와 그 증명, 그 앞뒤 문단 (p.164–165), Theorem 4.2.5 (p.165)
    checked: original
    note: "출처의 Theorem 4.2.4(p.164)는 f : [a, b] → ℝ 가 연속이고 (a, b) 에서 미분가능하면 f(b) − f(a) = f′(c)(b − a) 인 c ∈ (a, b) 가 있다는 것이고, 이 항목의 진술과 같다. 출처는 g(x) = f(x) − f(b) − ((f(b) − f(a))/(b − a))(x − b) 로 정한 g 에 롤의 정리를 쓰며, g 가 (a, b) 에서 미분가능하고 [a, b] 에서 연속이며 g(a) = g(b) = 0 이라고 적는다(p.165). 이 항목은 같은 보조함수를 쓰고, g 가 f 와 일차함수의 차라는 것에서 그 연속과 미분가능, 미분계수 g′(x) = f′(x) − m 을 derivative 의 (1), differentiable-implies-continuous, derivative-rules 의 (3), continuity-of-sum-and-product 로 보이며, g(a) = g(b) = 0 을 계산한다. 출처는 정리 앞 문단(p.164)에서 이 정리를 f 에서 양 끝 값이 같은 일차함수를 빼 롤의 정리로 얻는다고 적는다. 출처는 그 뒤에 코시의 평균값 정리(Theorem 4.2.5, p.165)를 진술하고 증명을 연습문제 4.2.15 로 둔다. 이 사이트는 그것을 싣지 않았다. 출처는 p.165 에서 이 정리가 법정에서 인용되는 몇 안 되는 정리라고 적는다. 예시, 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
닫힌구간과 열린구간은 [[interval]]의 것이고, 연속은 [[continuous-function]]의 것이며, 미분가능, 미분계수와 "열린구간에서 미분가능하다"는 말은 [[derivative]]의 것이다.

$a < b$인 실수 $a$, $b$와 $f : [a, b] \to \mathbb{R}$에 대하여, $f$가 연속함수이고 열린구간 $(a, b)$에서 미분가능하면
$$
f(b) - f(a) = f'(c)\,(b - a)
$$
인 $c \in (a, b)$가 있다. 곧 $f'(c) = \bigl(f(b) - f(a)\bigr)(b - a)^{-1}$이다.
:::

:::english
Closed and open intervals are those of the entry on intervals, continuity is that of the entry on continuous functions, and differentiability, derivatives and "differentiable on an open interval" are those of the entry on derivatives.

For real numbers $a < b$ and $f : [a, b] \to \mathbb{R}$, if $f$ is a continuous function that is differentiable on the open interval $(a, b)$, then there is $c \in (a, b)$ with
$$
f(b) - f(a) = f'(c)\,(b - a).
$$
That is, $f'(c) = \bigl(f(b) - f(a)\bigr)(b - a)^{-1}$.
:::

## 직관

$m = (f(b) - f(a))(b - a)^{-1}$은 두 점 $(a, f(a))$와 $(b, f(b))$를 잇는 직선의 기울기입니다. 정리는 그 사이 어딘가에서 미분계수가 이 기울기와 같아진다는 것입니다. 고속도로에서 두 지점을 지난 시각을 재어 구간의 평균 속도가 시속 $100$이었다면, 그 사이 어느 순간에는 순간 속도가 정확히 시속 $100$이었다는 것과 같습니다. 비유가 맞는 곳은 "평균 기울기 = 어느 한 점의 미분계수"이고, 맞지 않는 곳은 그 순간이 언제인지를 정리가 알려 주지 않는다는 점입니다.

증명은 롤의 정리로 줄입니다. $f$에서 양 끝의 값이 $f$와 같은 일차함수 $h(x) = f(b) + m(x - b)$를 빼면 $g = f - h$는 양 끝에서 $0$이 되고, 롤의 정리가 주는 $g'(c) = 0$이 곧 $f'(c) = m$입니다.

## 증명

:::idea
$m = (f(b) - f(a))(b - a)^{-1}$로 두고 $g(x) = f(x) - f(b) - m(x - b)$에 롤의 정리를 쓴다.
:::

:::hint
$g$는 $f$에서 $x$에서의 값이 $mx + (f(b) - mb)$인 일차함수를 뺀 것이다. 그 일차함수의 미분계수는 [[derivative]]의 (1)이 준다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (3)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다.

$a < b$이므로 순서 성질 (3)의 (i)에 의해 $0 < b - a$이고, 순서 성질 (1)의 (i)에 의해 $b - a \ne 0$이다. $m = \bigl(f(b) - f(a)\bigr)(b - a)^{-1}$로 두고, $k = f(b) - mb$로 둔다. $h(x) = mx + k$로 정한 $h : [a, b] \to \mathbb{R}$를 생각한다. (K1)–(K3), (K12)에 의해 모든 $x$에서 $h(x) = f(b) + m(x - b)$이다. $[a, b]$는 [[interval]]의 (1)에 의해 구간이므로 [[derivative]]의 (1)에 의해 $h$는 미분가능한 함수이고 모든 점에서 $h'(x) = m$이며, [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 $h$는 연속함수이다.

$g = f - h$로 둔다([[real-valued-function]]의 (4)). 모든 $x \in [a, b]$에서 $g(x) = f(x) - f(b) - m(x - b)$이다.

- **연속.** $f$와 $h$가 연속함수이므로 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $g$는 연속함수이다.
- **미분가능.** $a < x < b$이면 가정에 의해 $f$는 $x$에서 미분가능하고 $h$도 그렇다. [[derivative-rules|미분의 연산]]의 (3)에 의해 $g$는 $x$에서 미분가능하고 $g'(x) = f'(x) - h'(x) = f'(x) - m$이다. 따라서 $g$는 $(a, b)$에서 미분가능하다.
- **양 끝 값.** (K12)의 (v)에 의해 $b - b = 0$이므로 (K9)에 의해 $g(b) = f(b) - f(b) - m \cdot 0 = 0$이다. 또 (K12)와 (K8)의 (iii)에 의해 $m(a - b) = -\bigl(f(b) - f(a)\bigr)(b - a)^{-1}(b - a) = -\bigl(f(b) - f(a)\bigr)$이므로
  $$
  g(a) = f(a) - f(b) - m(a - b) = f(a) - f(b) + \bigl(f(b) - f(a)\bigr) = 0
  $$
  이다((K1), (K2), (K5), (K12)). 따라서 $g(a) = g(b)$이다.

[[rolle-theorem|롤의 정리]]에 의해 $g'(c) = 0$인 $c \in (a, b)$가 있다. 곧 $f'(c) - m = 0$이고 (K12)의 (v)에 의해 $f'(c) = m$이다. 양변에 $b - a$를 곱하면 (K2), (K8)의 (iii), (K4)에 의해 $f'(c)(b - a) = \bigl(f(b) - f(a)\bigr)(b - a)^{-1}(b - a) = f(b) - f(a)$이다. 둘째 식은 $f'(c) = m$을 그대로 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱 함수에서 평균 기울기를 갖는 점]
$f = p_2|_{[0, 2]}$, 곧 $f(x) = x^2$으로 정한 $f : [0, 2] \to \mathbb{R}$를 생각합니다. [[derivative-of-power]]의 (2)에 의해 $f$는 미분가능한 함수이고 $f'(c) = 2c$이며, [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 연속함수입니다. 양 끝을 잇는 직선의 기울기는 $(f(2) - f(0))(2 - 0)^{-1} = 4 \cdot 2^{-1} = 2$이고, 정리가 주는 $c$는 $2c = 2$, 곧 $c = 1$입니다. 실제로 $1 \in (0, 2)$이고 $f(2) - f(0) = 4 = f'(1) \cdot 2$입니다.
:::

:::counterexample[꺾인 점이 있으면 성립하지 않는다]
$s(x) = |x|$로 정한 $s : [-1, 2] \to \mathbb{R}$는 $s = |i_{[-1, 2]}|$이므로 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. 양 끝을 잇는 기울기는 [[absolute-value|절댓값]]의 (1), (3)에 의해 $(2 - 1)(2 - (-1))^{-1} = 3^{-1}$입니다. [[derivative]]의 (3)을 $I = [-1, 2]$, $r = 1$로 쓰면($-1$, $1$은 $[-1, 2]$의 원소) $s$는 $0$에서 미분가능하지 않고, $0$이 아닌 점에서 미분계수는 $1$이거나 $-1$입니다. $3^{-1}$은 $1$도 $-1$도 아니므로 $s'(c) = 3^{-1}$인 $c \in (-1, 2)$는 없습니다. "$(a, b)$에서 미분가능"이라는 가정이 $0$에서 깨졌습니다.
:::

## 역사와 맥락

Lebl은 평균값 정리가 법정에서 인용되는 몇 안 되는 정리 가운데 하나라고 적습니다. 경찰이 차가 두 지점 사이를 지나는 데 걸린 시간을 재면, 그 사이 어딘가에서 차가 거리의 차를 시간의 차로 나눈 속력을 냈어야 한다는 것입니다.

## 확인 질문

:::check[평균값 정리에서 $f(a) = f(b)$이면 무엇을 얻는가?]
$f(b) - f(a) = 0$이므로 $f'(c)(b - a) = 0$이고, $b - a \ne 0$이므로 [[real-number-arithmetic]]의 (K10)에 의해 $f'(c) = 0$입니다. 곧 [[rolle-theorem|롤의 정리]]를 다시 얻습니다. 이 항목은 롤의 정리로 증명했으므로, 롤의 정리는 평균값 정리의 특수한 경우이면서 그 증명의 재료입니다.
:::

:::check[$f : [0, 1] \to \mathbb{R}$가 연속이고 $(0, 1)$에서 미분가능하며 $(0, 1)$의 모든 점에서 $f'(x) \le 3$이고 $f(0) = 0$이면, $f(1)$은 얼마 이하인가?]
$3$ 이하입니다. 정리에 의해 $f(1) - f(0) = f'(c)(1 - 0)$인 $c \in (0, 1)$가 있으므로 $f(1) = f'(c) \le 3$입니다.
:::
