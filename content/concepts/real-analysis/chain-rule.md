---
title: 연쇄 법칙
title_en: Chain Rule
aliases: [합성함수의 미분, 합성함수의 미분법, chain rule, derivative of a composition]
kind: proposition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "I₁, I₂ 가 구간이고 g : I₁ → I₂ 가 c 에서, f : I₂ → ℝ 가 g(c) 에서 미분가능하면 합성 f ∘ g 는 c 에서 미분가능하고 미분계수는 f′(g(c)) g′(c) 이다."
requires: [subset, set-operations, function, function-composition, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function, composition-of-continuous-functions, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.1.2절 Proposition 4.1.10 과 그 증명, 식 (4.1) (p.159)
    checked: original
    note: "출처의 Proposition 4.1.10(p.159)은 I₁, I₂ 가 구간이고 g : I₁ → I₂ 가 c ∈ I₁ 에서, f : I₂ → ℝ 가 g(c) 에서 미분가능하면 h(x) = f(g(x)) 로 정한 h : I₁ → ℝ 가 c 에서 미분가능하고 h′(c) = f′(g(c)) g′(c) 라는 것이고, 이 항목의 (1)이다. 출처는 d = g(c) 로 두고, y ≠ d 이면 f 의 차분몫, y = d 이면 f′(d) 인 함수 u : I₂ → ℝ 와 같은 꼴의 함수 v : I₁ → ℝ 를 정해, 모든 x, y 에서 f(y) − f(d) = u(y)(y − d), g(x) − g(c) = v(x)(x − c) 이고 x ≠ c 이면 (h(x) − h(c))/(x − c) = u(g(x)) v(x) (식 (4.1))라는 것으로 증명한다. 출처는 u 가 d 에서 연속이라는 것을 f 가 d 에서 미분가능하다는 데서 바로 얻고, u, v, g 의 연속에서 식 (4.1) 우변의 극한이 f′(g(c))g′(c) 라고 적는다. 이 항목은 출처와 같은 보조함수 u 를 쓰고, v 대신 g 의 차분몫을 그대로 쓰며, u 의 연속은 limit-of-a-function 의 (6)과 continuous-function 의 (3)으로, u ∘ g 의 연속은 composition-of-continuous-functions 로 보인다. (2), (3)은 출처에 명제로 없다(검색한 범위). 직관에서 g(x) = g(c) 인 x 를 보조함수가 어떻게 다루는지 설명한 것은 출처에 없다(검색한 범위). 예시 '공역을 구간에 맞추기'는 1/y 의 미분계수와 연쇄 법칙을 함께 쓰는데, 출처가 연습문제 4.1.2(p.160)의 귀띔에서 몫의 법칙을 증명하는 길로 권하는 것과 같은 재료이다. 그 밖의 예시, 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 수열을 따라 극한을 계산하는 길 없이 증명. 절댓값 함수의 미분가능성을 진술로 올림, 반례 제목의 일반화와 출처 메모를 고침"
added: 2026-11-17
---

:::statement
구간, 미분가능, 미분계수, 차분몫 $q^f_c$, 도함수는 [[derivative]]의 것이고, 함수, 공역과 합성은 [[function|함수]]와 [[function-composition]]의 것이다. $I_1$, $I_2$를 구간이라 하자. [[composition-of-continuous-functions|연속함수의 합성]]의 진술에서처럼, $I_2 \subseteq \mathbb{R}$이므로 함수 $g : I_1 \to I_2$는 $I_1$ 위의 실함수이기도 하고, $g$의 미분가능과 미분계수는 이 실함수로서의 것을 뜻한다.

1. (한 점에서) $g : I_1 \to I_2$가 $c \in I_1$에서 미분가능하고 $f : I_2 \to \mathbb{R}$가 $g(c)$에서 미분가능하면, 합성 $f \circ g : I_1 \to \mathbb{R}$는 $c$에서 미분가능하고
   $$
   (f \circ g)'(c) = f'(g(c))\,g'(c)
   $$
   이다.
2. (도함수) $g : I_1 \to I_2$와 $f : I_2 \to \mathbb{R}$가 미분가능한 함수이면 $f \circ g$는 미분가능한 함수이고, 모든 $x \in I_1$에서 $(f \circ g)'(x) = f'(g(x))\,g'(x)$이다. 곧 $(f \circ g)' = (f' \circ g)\,g'$이다.
3. (공역을 맞추기) $g$가 $I_1$ 위의 실함수이고 모든 $x \in I_1$에서 $g(x) \in I_2$이면, [[function-composition]]의 진술에 의해 $g$를 $g : I_1 \to I_2$로 선언해 $f \circ g$를 정할 수 있고, 이때 (1), (2)가 그대로 성립한다.
:::

:::english
Intervals, differentiability, derivatives at a point, the difference quotient $q^f_c$ and derivative functions are those of the entry on derivatives; functions, codomains and composition are those of the entries on functions and on composition. Let $I_1$ and $I_2$ be intervals. As in the entry on composition of continuous functions, since $I_2 \subseteq \mathbb{R}$, a function $g : I_1 \to I_2$ is also a real-valued function on $I_1$, and differentiability and derivatives of $g$ mean those of this real-valued function.

1. (At a point) If $g : I_1 \to I_2$ is differentiable at $c \in I_1$ and $f : I_2 \to \mathbb{R}$ is differentiable at $g(c)$, then the composition $f \circ g : I_1 \to \mathbb{R}$ is differentiable at $c$ and
   $$
   (f \circ g)'(c) = f'(g(c))\,g'(c).
   $$
2. (Derivative functions) If $g : I_1 \to I_2$ and $f : I_2 \to \mathbb{R}$ are differentiable functions, then $f \circ g$ is a differentiable function and $(f \circ g)'(x) = f'(g(x))\,g'(x)$ for all $x \in I_1$. That is, $(f \circ g)' = (f' \circ g)\,g'$.
3. (Matching the codomain) If $g$ is a real-valued function on $I_1$ and $g(x) \in I_2$ for all $x \in I_1$, then by the entry on composition $g$ may be declared as $g : I_1 \to I_2$ to define $f \circ g$, and then (1) and (2) hold as stated.
:::

## 직관

$d = g(c)$로 두면, $x \ne c$에서 차분몫을 이렇게 쪼개고 싶어집니다.
$$
\frac{f(g(x)) - f(d)}{x - c} = \frac{f(g(x)) - f(d)}{g(x) - d} \cdot \frac{g(x) - d}{x - c}
$$
오른쪽의 둘째 인수는 $g'(c)$로 가고, $g(x)$가 $d$로 가므로 첫째 인수는 $f'(d)$로 갈 것 같습니다. 이 계산의 문제는 $g(x) = d$인 $x \ne c$에서 첫째 인수의 분모가 $0$이 된다는 것입니다. 그런 $x$는 $c$ 바로 옆에도 있을 수 있습니다. 예를 들어 $g$가 상수함수이면 모든 $x$에서 $g(x) = d$입니다.

그래서 증명은 $f$의 차분몫을 $y = d$에서 $f'(d)$로 채운 함수 $u$를 씁니다. 모든 $y \in I_2$에서 $f(y) - f(d) = u(y)\,(y - d)$가 성립하고, $y = d$에서는 양변이 모두 $0$입니다. 이 식에 $y = g(x)$를 넣으면 $g(x) = d$인 $x$에서도 "$f(g(x)) - f(d) = u(g(x))\,(g(x) - d)$"가 양변 $0$으로 성립하므로, 분모가 $0$이 되는 점을 피하지 않고도 $x \ne c$인 모든 점에서 차분몫이 $u(g(x))\,q^g_c(x)$와 같아집니다. 이 쪼갬에는 $g'(c)$에 대한 아무 조건도 필요하지 않습니다.

비유하면, 바퀴 둘을 맞물린 장치에서 첫 바퀴가 $1$ 돌 때 둘째 바퀴가 $g'(c)$만큼, 둘째 바퀴가 $1$ 돌 때 바늘이 $f'(d)$만큼 움직이면, 첫 바퀴 $1$에 바늘은 $f'(d)\,g'(c)$만큼 움직입니다. 비유가 맞는 곳은 비율이 곱해진다는 점이고, 맞지 않는 곳은 미분계수가 그 한 점에서만의 비율이어서 바퀴처럼 늘 같은 비율로 움직이지는 않는다는 점입니다.

## 증명

:::idea
$y \ne d$이면 $f$의 차분몫, $y = d$이면 $f'(d)$인 함수 $u$를 만들면 $u$는 $d$에서 연속이고 $f(y) - f(d) = u(y)\,(y - d)$가 모든 $y$에서 성립한다. 그러면 $x \ne c$에서 $f \circ g$의 차분몫은 $u(g(x))\,q^g_c(x)$이고, 두 인수의 극한의 곱이 답이다.
:::

:::hint
$u \circ g$가 $c$에서 연속인 까닭은 [[composition-of-continuous-functions|연속함수의 합성]]에서 찾는다. $g$가 $c$에서 연속이라는 것은 어디서 오는가?
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "실함수 (2)"처럼 쓴 것은 [[real-valued-function]]의 번호, "집적점 (6)"은 [[cluster-point]]의 번호, "극한 (6)"은 [[limit-of-a-function]]의 번호, "극한 법칙 (5)"는 [[limit-laws-for-functions]]의 번호, "연속 (3)"은 [[continuous-function]]의 번호이다.

**1의 증명.** $d = g(c)$로 둔다. $g : I_1 \to I_2$이므로 $d \in I_2$이다. $S_1 = I_1 - \{c\}$, $S_2 = I_2 - \{d\}$로 두면, [[derivative]]의 진술에 의해 $c$는 $S_1$의 집적점이고 $d$는 $S_2$의 집적점이며, $q^g_c : S_1 \to \mathbb{R}$는 $c$에서 $g'(c)$로, $q^f_d : S_2 \to \mathbb{R}$는 $d$에서 $f'(d)$로 수렴한다.

*보조함수 $u$.* $I_2$의 각 원소 $y$는 $y \ne d$와 $y = d$ 가운데 정확히 하나를 만족한다. 실함수 (1)에 의해
$$
u(y) = \begin{cases} q^f_d(y) & (y \ne d \text{ 일 때}) \\ f'(d) & (y = d \text{ 일 때}) \end{cases}
$$
로 정한 함수 $u : I_2 \to \mathbb{R}$가 있다.

*$u$는 $d$에서 연속이다.* $y \in S_2$이면 실함수 (6)에 의해 $u|_{S_2}(y) = u(y) = q^f_d(y)$이므로 실함수 (2)에 의해 $u|_{S_2} = q^f_d$이고, $u|_{S_2}$는 $d$에서 $f'(d)$로 수렴한다. $d$는 $I_2$의 집적점이므로(집적점 (6)) 극한 (6)에 의해 $u$도 $d$에서 $f'(d) = u(d)$로 수렴하고, 연속 (3)에 의해 $u$는 $d$에서 연속이다.

*모든 $y \in I_2$에서 $f(y) - f(d) = u(y)\,(y - d)$이다.* $y \ne d$이면 $y - d \ne 0$이므로 (K2), (K8)의 (iii), (K4)에 의해 $u(y)\,(y - d) = (f(y) - f(d))(y - d)^{-1}(y - d) = f(y) - f(d)$이다. $y = d$이면 (K12)의 (v)에 의해 $y - d = 0$이고 $f(y) - f(d) = 0$이며, (K9)에 의해 $u(d) \cdot 0 = 0$이다.

*$f \circ g$의 차분몫.* $x \in S_1$이라 하자. $g(x) \in I_2$이므로 방금 본 식을 $y = g(x)$에 쓰고 [[function-composition]]의 진술 $(f \circ g)(x) = f(g(x))$를 쓰면
$$
(f \circ g)(x) - (f \circ g)(c) = f(g(x)) - f(d) = u(g(x))\,(g(x) - g(c))
$$
이다. 양변에 $(x - c)^{-1}$을 곱하면 (K2)에 의해 $q^{f \circ g}_c(x) = u(g(x))\,q^g_c(x)$이다. $g(x) = d$이어도 이 식은 그대로 성립한다.

*극한.* [[differentiable-implies-continuous|미분가능하면 연속]]의 (1)에 의해 $g$는 $I_1$ 위의 실함수로서 $c$에서 연속이고, $u$는 $g(c) = d$에서 연속이다. [[composition-of-continuous-functions|연속함수의 합성]]의 (1)에 의해 $u \circ g : I_1 \to \mathbb{R}$는 $c$에서 연속이다. $c$는 $I_1$의 집적점이므로(집적점 (6)) 연속 (3)에 의해 $u \circ g$는 $c$에서 $u(g(c)) = u(d) = f'(d)$로 수렴하고, 극한 (6)에 의해 $(u \circ g)|_{S_1}$도 $c$에서 $f'(d)$로 수렴한다. 위 계산과 실함수 (2), (4), (6)에 의해 $q^{f \circ g}_c = (u \circ g)|_{S_1}\,q^g_c$이므로, 극한 법칙 (5)에 의해 $q^{f \circ g}_c$는 $c$에서 $f'(d)\,g'(c)$로 수렴한다. 따라서 $f \circ g$는 $c$에서 미분가능하고 $(f \circ g)'(c) = f'(g(c))\,g'(c)$이다.

**2의 증명.** $x \in I_1$이면 $g$는 $x$에서 미분가능하고 $g(x) \in I_2$이므로 $f$는 $g(x)$에서 미분가능하다. (1)을 $c = x$로 쓰면 $f \circ g$는 $x$에서 미분가능하고 $(f \circ g)'(x) = f'(g(x))\,g'(x)$이다. [[function-composition]]의 진술에 의해 $f'(g(x)) = (f' \circ g)(x)$이므로 이 값은 $\bigl((f' \circ g)\,g'\bigr)(x)$이고, 실함수 (2), (4)에 의해 둘째 문장의 등식이 성립한다.

**3의 증명.** [[function]]의 진술에 의해 같은 집합 $g$는 $I_1$에서 $I_2$로의 함수이기도 하고, [[function-composition]]의 진술에 의해 이렇게 정한 $f \circ g$는 선언한 공역과 무관하게 같은 집합이다. $g$의 차분몫과 미분가능은 정의역 $I_1$과 값 $g(x)$만 쓰므로 $g$를 어느 공역으로 선언하든 같다. 따라서 (1), (2)를 그대로 쓸 수 있다. $\blacksquare$
:::

## 예시와 반례

:::example[거듭제곱과 다항식 꼴의 함수의 합성]
$h(x) = (x^2 + 1)^3$으로 정한 $h : \mathbb{R} \to \mathbb{R}$를 생각합니다. $g(x) = x^2 + 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$와 [[derivative-of-power|거듭제곱 함수]] $p_3$으로 $h = p_3 \circ g$입니다([[real-valued-function]]의 (2)와 [[function-composition]]). $g$는 $p_2$와 값이 $1$인 상수함수의 합이므로, [[derivative-of-power]]의 (1)과 [[derivative-rules|미분의 연산]]의 (2), 그리고 상수함수의 미분계수가 $0$이라는 [[derivative]]의 (1)에 의해 $g'(c) = 2c + 0 = 2c$이고($c^1 = c$), $p_3'(y) = 3y^2$입니다. (1)에 의해
$$
h'(c) = p_3'(g(c))\,g'(c) = 3\,(c^2 + 1)^2 \cdot 2c = 6c\,(c^2 + 1)^2
$$
입니다. 예를 들어 $h'(1) = 6 \cdot 1 \cdot 2^2 = 24$입니다.
:::

:::example[공역을 구간에 맞추기]
$P = \{y \in \mathbb{R} : 0 < y\}$는 [[interval]]의 (2)에 의해 구간이고, $f(y) = y^{-1}$로 정한 $f : P \to \mathbb{R}$는 $P$ 위의 항등함수 $i_P$로 만든 $1/i_P$입니다. $i_P$는 $P$의 모든 점에서 $0$이 아니므로 [[derivative-rules|미분의 연산]]의 (5)와 [[derivative]]의 (1)에 의해 $f'(d) = -1 \cdot (d^2)^{-1} = -(d^2)^{-1}$입니다. 위 예시의 $g(x) = x^2 + 1$은 모든 실수 $x$에서 $x^2 = xx$이고([[power-of-a-real-number]]의 (1)) [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le xx$이므로, 같은 항목의 (2)의 (i), (5)의 (ii), (1)의 (v)에 의해 $0 < 1 \le x^2 + 1$이고 $g(x) \in P$입니다. (3)에 의해 $g$를 $g : \mathbb{R} \to P$로 선언하면 $k = f \circ g$, 곧 $k(x) = (x^2 + 1)^{-1}$로 정한 함수에 (1)을 쓸 수 있고
$$
k'(c) = -\bigl((c^2 + 1)^2\bigr)^{-1} \cdot 2c
$$
입니다. $g$를 $\mathbb{R}$에서 $\mathbb{R}$로의 함수로만 보면 $f$의 정의역 $P$와 공역이 맞지 않아 $f \circ g$를 정하지 않습니다.
:::

:::counterexample[합성의 미분계수는 같은 점에서의 미분계수의 곱이 아니다]
$f = p_2$이고 $g(x) = x + 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$라 하면 $(f \circ g)(x) = (x + 1)^2$입니다. (1)에 의해 $(f \circ g)'(c) = 2(c + 1) \cdot 1 = 2c + 2$입니다. 같은 점 $c$에서의 미분계수를 곱한 $f'(c)\,g'(c) = 2c \cdot 1 = 2c$와는 다르고, 예를 들어 $c = 0$에서 $2 \ne 0$입니다. $f$의 미분계수는 $c$가 아니라 $g(c)$에서 계산해야 합니다.
:::

## 확인 질문

:::check[$g(x) = 3x - 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$와, $5$에서 미분가능하고 $f'(5) = 2$인 $f : \mathbb{R} \to \mathbb{R}$에 대하여 $(f \circ g)'(2)$는 무엇인가?]
$g(2) = 5$이고 [[derivative]]의 (1)에 의해 $g'(2) = 3$이므로, (1)에 의해 $(f \circ g)'(2) = f'(5) \cdot 3 = 6$입니다.
:::

:::check[$f(y) = |y|$, $g(x) = x^2$으로 정한 $f, g : \mathbb{R} \to \mathbb{R}$에서 $f$는 $g(0) = 0$에서 미분가능하지 않으므로([[derivative]]의 (3)) (1)을 쓸 수 없다. 그러면 $f \circ g$는 $0$에서 미분가능하지 않은가?]
아닙니다. 모든 실수 $x$에서 $x^2 = xx$이고([[power-of-a-real-number]]의 (1)) $0 \le xx$이므로([[order-properties-of-reals]]의 (5)의 (iii)) [[absolute-value|절댓값]]의 (1)에 의해 $(f \circ g)(x) = |x^2| = x^2$이고, $f \circ g = p_2$입니다. [[derivative-of-power]]의 (1)에 의해 $(f \circ g)'(0) = 2 \cdot 0 = 0$입니다. (1)의 가정은 합성이 미분가능하기 위한 충분조건일 뿐 필요조건은 아닙니다.
:::
