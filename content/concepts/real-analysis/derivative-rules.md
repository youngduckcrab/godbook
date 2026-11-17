---
title: 미분의 선형성과 곱·몫의 법칙
title_en: Linearity of the Derivative, Product Rule and Quotient Rule
aliases: [미분의 선형성, 곱의 법칙, 몫의 법칙, 곱의 미분법, 몫의 미분법, 라이프니츠 법칙, product rule, quotient rule, Leibniz rule, linearity of the derivative]
kind: proposition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "구간 위의 두 실함수가 한 점에서 미분가능하면 상수배, 합, 차, 곱도 그 점에서 미분가능하고 미분계수는 각각 kf′, f′ + g′, f′ − g′, fg′ + f′g 이다. 분모가 구간 전체에서 0 이 아니면 역수와 몫도 미분가능하고 (f′g − fg′)/g² 이다."
requires: [real-number-arithmetic, power-of-a-real-number, order-properties-of-reals, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function, continuity-of-sum-and-product, derivative, differentiable-implies-continuous]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.1.1절 Proposition 4.1.7 (p.157–158), Proposition 4.1.8 과 그 앞 문단 (p.158), Proposition 4.1.9 (p.159), 연습문제 4.1.1, 4.1.2 (p.160)
    checked: original
    note: "출처의 Proposition 4.1.7(p.157)은 f, g : I → ℝ 가 c ∈ I 에서 미분가능하고 α ∈ ℝ 일 때 (i) αf 와 (ii) f + g 가 c 에서 미분가능하고 미분계수가 αf′(c), f′(c) + g′(c) 라는 것이고, 이 항목의 (1), (2)이다. 출처는 차분몫을 같은 꼴로 쪼개고 Corollary 3.1.12 를 쓰며, 이 항목도 같은 경로이다. 차 (3)은 출처의 4.1.7 에 없다. Proposition 4.1.8(p.158; 곱의 법칙, h′(c) = f(c)g′(c) + f′(c)g(c))은 이 항목의 (4)이고, 출처는 증명을 연습문제 4.1.1(p.160)로 두며 열쇠가 되는 식 f(x)g(x) − f(c)g(c) = f(x)(g(x) − g(c)) + (f(x) − f(c))g(c) 를 적는다. 이 항목은 그 식으로 직접 증명한다. Proposition 4.1.9(p.159; 몫의 법칙)는 I 의 모든 x 에서 g(x) ≠ 0 이라고 가정하고 h′(c) = (f′(c)g(c) − f(c)g′(c))/g(c)² 라 하며, 이 항목의 (5)이다. 출처는 증명을 연습문제 4.1.2(p.160)로 두고 1/x 의 미분과 연쇄 법칙, 곱의 법칙을 쓰라고 귀띔한다. 이 항목은 연쇄 법칙을 쓰지 않고 1/g 의 차분몫을 직접 계산한 뒤 곱의 법칙을 쓴다. 도함수의 꼴 (6)은 출처에 명제로 없다(검색한 범위). 참고 '분모가 0 이 되는 점이 있을 때'에서 구한 양수 위의 1/x 의 미분계수는 출처가 연습문제 4.1.2 의 귀띔에서 먼저 구하라고 하는 것과 같다. 반례 '곱의 미분계수는 미분계수의 곱이 아니다'는 출처가 4.1.8 앞 문단(p.158)에서 그렇지 않다고 적는 것과 같은 내용이고, 이 항목은 그것을 구체적인 함수로 보인다. 예시와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
구간, 미분가능, 미분계수, 차분몫 $q^f_c$, 도함수는 [[derivative]]의 것이고, 함수의 합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 몫 $f/g$, $1/g$는 [[real-valued-function]]의 것이며, $g(c)^2$는 [[power-of-a-real-number]]의 거듭제곱이다. $I$를 구간, $f$, $g$를 $I$ 위의 실함수, $c$를 $I$의 원소, $k$를 실수라 하자.

1. (상수배) $f$가 $c$에서 미분가능하면 $kf$는 $c$에서 미분가능하고 $(kf)'(c) = k f'(c)$이다.
2. (합) $f$와 $g$가 $c$에서 미분가능하면 $f + g$는 $c$에서 미분가능하고 $(f + g)'(c) = f'(c) + g'(c)$이다.
3. (차) $f$와 $g$가 $c$에서 미분가능하면 $f - g$는 $c$에서 미분가능하고 $(f - g)'(c) = f'(c) - g'(c)$이다.
4. (곱의 법칙) $f$와 $g$가 $c$에서 미분가능하면 $fg$는 $c$에서 미분가능하고 $(fg)'(c) = f(c)\,g'(c) + f'(c)\,g(c)$이다.
5. (역수와 몫의 법칙) $I$의 모든 원소 $x$에서 $g(x) \ne 0$이라 하자. 그러면 $1/g$와 $f/g$의 정의역은 $I$이다. $g$가 $c$에서 미분가능하면 $1/g : I \to \mathbb{R}$는 $c$에서 미분가능하고
   $$
   (1/g)'(c) = -g'(c)\,\bigl(g(c)^2\bigr)^{-1}
   $$
   이다. 또 $f$와 $g$가 $c$에서 미분가능하면 $f/g : I \to \mathbb{R}$는 $c$에서 미분가능하고
   $$
   (f/g)'(c) = \bigl(f'(c)\,g(c) - f(c)\,g'(c)\bigr)\bigl(g(c)^2\bigr)^{-1}
   $$
   이다.
6. (도함수) $f$와 $g$가 미분가능한 함수이면 $kf$, $f + g$, $f - g$, $fg$는 미분가능한 함수이고
   $$
   (kf)' = k f', \quad (f + g)' = f' + g', \quad (f - g)' = f' - g', \quad (fg)' = f g' + f' g
   $$
   이다. 여기에 더해 $I$의 모든 원소 $x$에서 $g(x) \ne 0$이면 $1/g$와 $f/g$는 미분가능한 함수이고, 모든 $x \in I$에서 $(1/g)'(x) = -g'(x)\,\bigl(g(x)^2\bigr)^{-1}$, $(f/g)'(x) = \bigl(f'(x)\,g(x) - f(x)\,g'(x)\bigr)\bigl(g(x)^2\bigr)^{-1}$이다.
:::

:::english
Intervals, differentiability, derivatives at a point, the difference quotient $q^f_c$ and the derivative function are those of the entry on derivatives; the sum $f + g$, difference $f - g$, product $fg$, scalar multiple $kf$ and quotients $f/g$, $1/g$ of functions are those of the entry on real-valued functions; $g(c)^2$ is the power of the entry on powers of real numbers. Let $I$ be an interval, $f$ and $g$ real-valued functions on $I$, $c$ an element of $I$, and $k$ a real number.

1. (Scalar multiple) If $f$ is differentiable at $c$, then $kf$ is differentiable at $c$ and $(kf)'(c) = k f'(c)$.
2. (Sum) If $f$ and $g$ are differentiable at $c$, then $f + g$ is differentiable at $c$ and $(f + g)'(c) = f'(c) + g'(c)$.
3. (Difference) If $f$ and $g$ are differentiable at $c$, then $f - g$ is differentiable at $c$ and $(f - g)'(c) = f'(c) - g'(c)$.
4. (Product rule) If $f$ and $g$ are differentiable at $c$, then $fg$ is differentiable at $c$ and $(fg)'(c) = f(c)\,g'(c) + f'(c)\,g(c)$.
5. (Reciprocal and quotient rule) Suppose $g(x) \ne 0$ for every element $x$ of $I$. Then the domain of $1/g$ and of $f/g$ is $I$. If $g$ is differentiable at $c$, then $1/g : I \to \mathbb{R}$ is differentiable at $c$ and
   $$
   (1/g)'(c) = -g'(c)\,\bigl(g(c)^2\bigr)^{-1}.
   $$
   If moreover $f$ and $g$ are differentiable at $c$, then $f/g : I \to \mathbb{R}$ is differentiable at $c$ and
   $$
   (f/g)'(c) = \bigl(f'(c)\,g(c) - f(c)\,g'(c)\bigr)\bigl(g(c)^2\bigr)^{-1}.
   $$
6. (Derivative functions) If $f$ and $g$ are differentiable functions, then $kf$, $f + g$, $f - g$, $fg$ are differentiable functions and
   $$
   (kf)' = k f', \quad (f + g)' = f' + g', \quad (f - g)' = f' - g', \quad (fg)' = f g' + f' g.
   $$
   If in addition $g(x) \ne 0$ for every element $x$ of $I$, then $1/g$ and $f/g$ are differentiable functions, and for all $x \in I$ we have $(1/g)'(x) = -g'(x)\,\bigl(g(x)^2\bigr)^{-1}$ and $(f/g)'(x) = \bigl(f'(x)\,g(x) - f(x)\,g'(x)\bigr)\bigl(g(x)^2\bigr)^{-1}$.
:::

## 직관

상수배, 합, 차는 차분몫을 그대로 쪼개면 됩니다. $kf$의 차분몫은 $f$의 차분몫의 $k$배이고, $f + g$의 차분몫은 두 차분몫의 합입니다. 그래서 극한의 사칙연산이 그대로 미분계수의 규칙이 됩니다.

곱은 다릅니다. 가로 $f(x)$, 세로 $g(x)$인 직사각형의 넓이 $f(x)g(x)$가 $f(c)g(c)$에서 얼마나 변했는지를 보면, 세로가 늘어난 띠 $f(x)\,(g(x) - g(c))$와 가로가 늘어난 띠 $(f(x) - f(c))\,g(c)$의 합입니다. 이것을 $x - c$로 나누고 $x$를 $c$로 보내면 $f(c)g'(c) + f'(c)g(c)$가 됩니다. 비유가 맞는 곳은 이 넓이의 쪼갬이고, 맞지 않는 곳은 함숫값이 음수일 수도 있어 "넓이"가 문자 그대로의 넓이는 아니라는 점입니다. 첫째 띠에서 $f(x)$가 $f(c)$로 가는 데에 [[differentiable-implies-continuous|미분가능하면 연속이라는 것]]이 쓰입니다.

몫에서 $g$가 $I$의 모든 점에서 $0$이 아니라고 가정하는 까닭은 정의역입니다. 이 사이트에서 몫 $f/g$는 $g$가 $0$이 아닌 점들의 집합 위의 함수이고, 미분계수는 구간 위의 함수에 대해서만 정의했습니다. 그 집합이 $I$ 전체가 되게 하려고 이 가정을 둡니다.

## 증명

:::idea
각 함수의 차분몫을 $f$, $g$의 차분몫과 $c$에서 수렴하는 함수들의 합·곱으로 쓰고, [[limit-laws-for-functions|함수의 극한의 사칙연산]]을 쓴다. 곱에서는 $f(x)$가 $f(c)$로 수렴한다는 것이 필요하다.
:::

:::hint
$x \ne c$이면 $f(x)g(x) - f(c)g(c) = f(x)\,(g(x) - g(c)) + (f(x) - f(c))\,g(c)$이다.
:::

:::hint
$x \ne c$이면 $g(x)^{-1} - g(c)^{-1} = -(g(x) - g(c))\,\bigl(g(x)\,g(c)\bigr)^{-1}$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "실함수 (2)"처럼 쓴 것은 [[real-valued-function]]의 번호, "극한 (6)"은 [[limit-of-a-function]]의 번호, "극한 법칙 (5)"는 [[limit-laws-for-functions]]의 번호, "연속 (3)"은 [[continuous-function]]의 번호, "연산의 연속 (2)"는 [[continuity-of-sum-and-product|연속함수의 연산]]의 번호이다.

$S = I - \{c\}$로 둔다. [[derivative]]의 진술에 의해 $c$는 $S$의 집적점이고, $c$에서 미분가능한 함수 $h$에 대하여 $q^h_c : S \to \mathbb{R}$는 $c$에서 $h'(c)$로 수렴한다. 거꾸로 $I$ 위의 실함수 $h$와 실수 $L$에 대하여 $q^h_c$가 $c$에서 $L$로 수렴하면 $h$는 $c$에서 미분가능하고 $h'(c) = L$이다. 아래에서 $x$는 $S$의 원소이고, 이때 $x - c \ne 0$이다. 실함수 (2)에 의해 $S$ 위의 두 함수는 $S$의 모든 $x$에서 값이 같으면 같으므로, 차분몫의 식을 $x$마다 계산해 함수의 등식을 얻는다. 실수 $t$에 대하여 $S$ 위의 값이 $t$인 상수함수를 $u_t$, $I$ 위의 값이 $t$인 상수함수를 $v_t$로 쓴다(실함수 (3)). 극한 (4)에 의해 $u_t$는 $c$에서 $t$로 수렴한다.

**1의 증명.** (K2), (K3), (K12)에 의해 $q^{kf}_c(x) = (kf(x) - kf(c))(x - c)^{-1} = k\,\bigl((f(x) - f(c))(x - c)^{-1}\bigr) = k\,q^f_c(x)$이므로 $q^{kf}_c = k\,q^f_c$이다. 극한 법칙 (6)에 의해 이 함수는 $c$에서 $k f'(c)$로 수렴한다.

**2와 3의 증명.** (K1)–(K3), (K12)에 의해
$$
q^{f+g}_c(x) = \bigl((f(x) + g(x)) - (f(c) + g(c))\bigr)(x - c)^{-1} = q^f_c(x) + q^g_c(x)
$$
이고, 같은 법칙에 의해 $q^{f-g}_c(x) = q^f_c(x) - q^g_c(x)$이다. 따라서 $q^{f+g}_c = q^f_c + q^g_c$, $q^{f-g}_c = q^f_c - q^g_c$이고, 극한 법칙 (3), (4)에 의해 각각 $c$에서 $f'(c) + g'(c)$, $f'(c) - g'(c)$로 수렴한다.

**4의 증명.** (K1)–(K3), (K12)로 전개하면
$$
f(x)\,(g(x) - g(c)) + (f(x) - f(c))\,g(c) = f(x)g(x) - f(x)g(c) + f(x)g(c) - f(c)g(c) = f(x)g(x) - f(c)g(c)
$$
이므로, 양변에 $(x - c)^{-1}$을 곱하면 (K2), (K3), (K12)의 (i)에 의해 $q^{fg}_c(x) = f(x)\,q^g_c(x) + q^f_c(x)\,g(c)$이다. 곧 $q^{fg}_c = f|_S\,q^g_c + q^f_c\,u_{g(c)}$이다(실함수 (4), (6)). [[differentiable-implies-continuous|미분가능하면 연속]]의 (1)에 의해 $f|_S$는 $c$에서 $f(c)$로 수렴한다. 극한 법칙 (5)에 의해 $f|_S\,q^g_c$는 $f(c)\,g'(c)$로, $q^f_c\,u_{g(c)}$는 $f'(c)\,g(c)$로 수렴하고, 극한 법칙 (3)에 의해 $q^{fg}_c$는 $f(c)\,g'(c) + f'(c)\,g(c)$로 수렴한다.

**5의 증명.** [[real-valued-function]]의 (5)에 의해 $Z = \{x \in I : g(x) \ne 0\}$은 가정에서 $I$이므로 $1/g$와 $f/g$는 $I$ 위의 실함수이다. [[power-of-a-real-number]]의 (1)에 의해 $g(c)^2 = g(c)\,g(c)$이고, $g(c) \ne 0$이므로 (K12)의 (vi)에 의해 $g(c)^2 \ne 0$이다.

먼저 $1/g$를 본다. $x \in S$에서 $g(x) \ne 0$, $g(c) \ne 0$이므로 (K12)의 (vi)에 의해 $g(x)g(c) \ne 0$이고 $\bigl(g(x)g(c)\bigr)^{-1} = g(x)^{-1}g(c)^{-1}$이다. (K1)–(K3), (K8)의 (iii), (K4), (K12)에 의해
$$
-(g(x) - g(c))\,g(x)^{-1}g(c)^{-1} = -\bigl(g(x)g(x)^{-1}\bigr)g(c)^{-1} + \bigl(g(c)g(c)^{-1}\bigr)g(x)^{-1} = g(x)^{-1} - g(c)^{-1}
$$
이므로, 양변에 $(x - c)^{-1}$을 곱하면
$$
q^{1/g}_c(x) = \bigl(g(x)^{-1} - g(c)^{-1}\bigr)(x - c)^{-1} = -q^g_c(x)\,\bigl(g(x)\,g(c)\bigr)^{-1}
$$
이다. $I$ 위의 함수 $w = g\,v_{g(c)}$, 곧 $w(x) = g(x)\,g(c)$인 함수를 생각한다. $I$의 모든 $x$에서 $g(x) \ne 0$이고 $g(c) \ne 0$이므로 (K12)의 (vi)에 의해 $w$는 $I$의 모든 점에서 $0$이 아니다. [[differentiable-implies-continuous|미분가능하면 연속]]의 (1)에 의해 $g$는 $c$에서 연속이고, 상수함수는 연속 (4)에 의해 연속이므로 연산의 연속 (1)에 의해 $w$는 $c$에서 연속이다. 연산의 연속 (2)에 의해 $1/w : I \to \mathbb{R}$는 $c$에서 연속이다. $c$는 $I$의 집적점이므로([[cluster-point]]의 (6)) 연속 (3)에 의해 $1/w$는 $c$에서 $w(c)^{-1} = \bigl(g(c)^2\bigr)^{-1}$로 수렴하고, 극한 (6)에 의해 $(1/w)|_S$도 같은 수로 수렴한다. 위 계산과 실함수 (5), (6)에 의해 $q^{1/g}_c = (-1)\,q^g_c\,(1/w)|_S$이다((K9)). 극한 법칙 (6), (5)에 의해 이 함수는 $c$에서 $(-1)\,g'(c)\,\bigl(g(c)^2\bigr)^{-1} = -g'(c)\,\bigl(g(c)^2\bigr)^{-1}$로 수렴한다. 따라서 $1/g$는 $c$에서 미분가능하고 첫째 식이 성립한다.

다음으로 $f/g$를 본다. 모든 $x \in I$에서 나눗셈의 정의에 의해 $(f/g)(x) = f(x)\,g(x)^{-1} = \bigl(f\,(1/g)\bigr)(x)$이므로 실함수 (2)에 의해 $f/g = f\,(1/g)$이다. 방금 보인 것과 이 항목의 (4)에 의해 $f/g$는 $c$에서 미분가능하고
$$
(f/g)'(c) = f(c)\,(1/g)'(c) + f'(c)\,g(c)^{-1} = -f(c)\,g'(c)\,\bigl(g(c)^2\bigr)^{-1} + f'(c)\,g(c)^{-1}
$$
이다. (K2), (K8)의 (iii), (K4), (K12)의 (vi)에 의해 $g(c)\,\bigl(g(c)^2\bigr)^{-1} = g(c)\,g(c)^{-1}g(c)^{-1} = g(c)^{-1}$이므로 $f'(c)\,g(c)^{-1} = f'(c)\,g(c)\,\bigl(g(c)^2\bigr)^{-1}$이고, (K1), (K3), (K12)로 묶으면 둘째 식을 얻는다.

**6의 증명.** $I$의 각 원소 $x$에서 (1)–(5)를 $c = x$로 쓰면 각 함수는 $x$에서 미분가능하고 미분계수는 적힌 식이다. 예를 들어 $(fg)'(x) = f(x)g'(x) + f'(x)g(x) = (fg' + f'g)(x)$이고, 나머지도 같은 방식으로 [[real-valued-function]]의 (4)의 연산과 값이 같다. 실함수 (2)에 의해 함수의 등식이 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[일차함수 두 개의 곱]
$h(x) = (2x + 1)(x - 3)$으로 정한 $h : \mathbb{R} \to \mathbb{R}$를 생각합니다. $f(x) = 2x + 1$, $g(x) = x - 3$으로 정한 $f$, $g$는 [[derivative]]의 (1)에 의해 모든 점에서 미분가능하고 $f'(c) = 2$, $g'(c) = 1$입니다($x - 3 = 1 \cdot x + (-3)$). $h = fg$이므로 (4)에 의해 모든 실수 $c$에서
$$
h'(c) = f(c)\,g'(c) + f'(c)\,g(c) = (2c + 1) \cdot 1 + 2(c - 3) = 4c - 5
$$
입니다.
:::

:::example[분모가 $0$이 되지 않는 몫]
$r(x) = x\,(xx + 1)^{-1}$로 정한 $r : \mathbb{R} \to \mathbb{R}$를 생각합니다. $g(x) = xx + 1$로 정한 $g$는 모든 실수 $x$에서 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le xx$이므로 같은 항목의 (2)의 (i)과 (5)의 (ii)에 의해 $0 < 1 \le xx + 1$이고, $g(x)$는 $0$이 되지 않습니다. 항등함수 $i_{\mathbb{R}}$의 미분계수는 [[derivative]]의 (1)에 의해 $1$이므로, $v$를 값이 $1$인 상수함수라 하면 $g = i_{\mathbb{R}}\,i_{\mathbb{R}} + v$이고([[real-valued-function]]의 (2)), [[derivative]]의 (1)에 의해 $v$의 미분계수는 $0$이므로 (4)와 (2)를 쓰면 $g'(c) = (c \cdot 1 + 1 \cdot c) + 0 = 2c$입니다. $r = i_{\mathbb{R}}/g$이므로 (5)에 의해
$$
r'(c) = \bigl(1 \cdot (cc + 1) - c \cdot 2c\bigr)\bigl((cc + 1)^2\bigr)^{-1} = (1 - cc)\bigl((cc + 1)^2\bigr)^{-1}
$$
입니다. 예를 들어 $r'(0) = 1$이고 $r'(1) = 0$입니다.
:::

:::counterexample[곱의 미분계수는 미분계수의 곱이 아니다]
$f = g = i_{\mathbb{R}}$이면 $f'(c)\,g'(c) = 1 \cdot 1 = 1$이지만, (4)에 의해 $(fg)'(c) = c \cdot 1 + 1 \cdot c = 2c$입니다. $c = 0$에서 $(fg)'(0) = 0 \ne 1$이므로 "$(fg)'(c) = f'(c)\,g'(c)$"는 일반적으로 성립하지 않습니다.
:::

:::remark[분모가 $0$이 되는 점이 있을 때]
$g = i_{\mathbb{R}}$이면 $g(0) = 0$이므로 [[real-valued-function]]의 (5)의 $1/g$는 $\mathbb{R} - \{0\}$ 위의 함수입니다. 이 집합은 $-1$과 $1$을 포함하지만 그 사이의 $0$을 포함하지 않으므로 [[interval|구간]]이 아니고, 이 사이트의 미분계수의 정의가 그대로 적용되지 않습니다. 이럴 때는 $g$를 $0$을 포함하지 않는 구간, 예컨대 [[interval]]의 (2)의 구간 $P = \{x \in \mathbb{R} : 0 < x\}$로 제한해 $1/(g|_P)$에 (5)를 씁니다. $g|_P$는 $P$ 위의 항등함수여서 $P$의 모든 점에서 $0$이 아니고, [[derivative]]의 (1)에 의해 미분계수가 $1$이므로 $P$의 모든 점 $c$에서 $(1/(g|_P))'(c) = -\bigl(c^2\bigr)^{-1}$입니다.
:::

## 역사와 맥락

Lebl은 곱의 법칙을 라이프니츠 법칙(Leibniz rule)이라고도 부른다고 적고, 그 이름이 독일 수학자 라이프니츠(Gottfried Wilhelm Leibniz, 1646–1716)에서 왔다고 각주에 적습니다.

## 확인 질문

:::check[$f$, $g$가 $c$에서 미분가능하고 $f(c) = 2$, $f'(c) = 3$, $g(c) = -1$, $g'(c) = 4$이면 $(fg)'(c)$와 $(f - 2g)'(c)$는 무엇인가?]
(4)에 의해 $(fg)'(c) = 2 \cdot 4 + 3 \cdot (-1) = 5$입니다. (1)에 의해 $2g$는 $c$에서 미분가능하고 $(2g)'(c) = 8$이므로, (3)에 의해 $(f - 2g)'(c) = 3 - 8 = -5$입니다.
:::

:::check[$f$와 $f + g$가 $c$에서 미분가능하면 $g$도 $c$에서 미분가능한가?]
그렇습니다. 모든 $x \in I$에서 $((f + g) - f)(x) = (f(x) + g(x)) - f(x) = g(x)$이므로 [[real-valued-function]]의 (2)에 의해 $g = (f + g) - f$이고, (3)에 의해 $g$는 $c$에서 미분가능하며 $g'(c) = (f + g)'(c) - f'(c)$입니다.
:::
