---
title: 미분계수와 도함수
title_en: Derivative
aliases: [미분계수, 도함수, 미분가능, 미분가능한 함수, 차분몫, derivative, differentiable, difference quotient]
kind: definition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "구간 I 위의 실함수 f 와 c ∈ I 에 대하여, 차분몫 (f(x) − f(c))(x − c)⁻¹ 이 c 에서 수렴할 때 f 가 c 에서 미분가능하다고 하고 그 극한을 미분계수 f′(c) 로 정한다. 모든 점에서 미분가능하면 도함수 f′ 를 정하고, 일차함수의 미분계수와 구간으로 제한해도 미분계수가 같다는 것을 증명한다."
requires: [subset, set-operations, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, square-root-exists, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function, continuity-of-sum-and-product, power-function-is-continuous]
sources:
  - ref: lebl-basic-analysis
    loc: 4.1.1절 Definition 4.1.1 과 그 뒤 두 문단 (p.155), Example 4.1.2, 4.1.3, 4.1.4 (p.156), Example 4.1.5 (p.157)
    checked: original
    note: "출처의 Definition 4.1.1(p.155)은 구간 I, 함수 f : I → ℝ, c ∈ I 에 대하여 극한 L = lim (f(x) − f(c))/(x − c) 가 있으면 f 가 c 에서 미분가능하고 L 을 c 에서의 미분계수 f′(c) 라 하며, 모든 c ∈ I 에서 미분가능하면 그냥 미분가능하다고 하고 함수 f′ : I → ℝ 를 얻는다고 한다. 식 (f(x) − f(c))/(x − c) 를 difference quotient 라 부른다. 출처는 그 뒤 문단(p.155)에서 I 가 닫힌구간이어도, c 가 I 의 끝점이어도 된다고 적는다. 이 항목의 정의는 같다. 출처는 극한을 식으로 적고, 이 항목은 그 식을 I − {c} 위의 함수 q_c 로 정해 c 가 그 집합의 집적점임을 밝힌다. 'A 에서 미분가능하다'는 말은 출처가 Theorem 4.2.3(p.163) 등에서 'differentiable on (a, b)' 로 쓰고 따로 정의하지 않는다(검색한 범위). (1)은 출처의 Example 4.1.3(p.156; ax + b 의 미분계수 a)을 명제로 올린 것이고 계산도 같다. 상수함수와 항등함수는 그 특수한 경우로 이 항목이 적었다. (2)의 제한은 출처가 Proposition 4.2.6 의 증명(p.165)에서 'f restricted to [x, y] satisfies the hypotheses' 라고 쓰는 사실이고, 출처에 명제로 없다(검색한 범위). 예시 '제곱 함수'는 출처의 Example 4.1.2(p.156)와 같은 함수, 같은 계산이다. 예시 '제곱근 함수'는 출처의 Example 4.1.4(p.156)와 같은 함수, 같은 식이다. 출처는 마지막 극한 lim 1/(√x + √c) = 1/(2√c) 를 계산의 결과로 적고, 이 항목은 그 극한을 power-function-is-continuous 의 (2)와 몫의 연속으로 보인다. 반례 '절댓값 함수'는 출처의 Example 4.1.5(p.157)와 같은 함수이다. 출처는 차분몫이 x > 0 에서 1, x < 0 에서 −1 이라는 것을 계산해 보이고, 이 항목은 극한이 없다는 것을 limit-of-a-function 의 (1)로 보인다. 다른 기호 df/dx 는 출처의 Definition 4.1.1 뒤(p.155)에 있다. 확인 질문 1 의 x|x| 는 출처의 연습문제 4.1.11(p.160; f 가 유계이고 g(c) = g′(c) = 0 이면 fg 가 c 에서 미분가능)의 꼴로도 볼 수 있고, 이 항목은 차분몫을 직접 계산한다. 확인 질문 2 는 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
구간은 [[interval]]의 것이고, 실함수, 상수함수, 항등함수와 제한은 [[real-valued-function]]의 것이며, 집적점은 [[cluster-point]]의 것이고, 수렴과 기호 $\lim_{x \to c}$는 [[limit-of-a-function]]의 것이다. 뺄셈과 $a^{-1}$은 [[real-number-arithmetic]]의 것이다. $I$를 구간, $f : I \to \mathbb{R}$를 $I$ 위의 실함수, $c$를 $I$의 원소라 하자. 예를 들어 $I = [a, b]$이면 $c = a$나 $c = b$여도 된다.

**차분몫.** $I - \{c\}$의 원소 $x$에서는 $x - c \ne 0$이다(아래 증명 첫머리). $q_c(x) = (f(x) - f(c))(x - c)^{-1}$로 정한 함수 $q_c : I - \{c\} \to \mathbb{R}$를 $f$의 $c$에서의 **차분몫**(difference quotient)이라 한다. 어느 함수의 차분몫인지 밝힐 때는 $q^f_c$로 쓴다. $c$는 $I - \{c\}$의 집적점이다(아래 증명 첫머리).

**미분계수.** $f$가 $c$에서 **미분가능하다**(differentiable at $c$)는 것은 정확히 $q_c$가 $c$에서 수렴할 때이다. 이때 극한 $\lim_{x \to c} q_c(x)$를 $f$의 $c$에서의 **미분계수**(derivative of $f$ at $c$)라 하고 $f'(c)$로 쓴다. 곧 실수 $L$에 대하여, $f$가 $c$에서 미분가능하고 $f'(c) = L$인 것은 정확히 $q_c$가 $c$에서 $L$로 수렴할 때이다. $f'(c)$를 $\lim_{x \to c} \dfrac{f(x) - f(c)}{x - c}$로도 쓴다. $f$가 $c$에서 미분가능하지 않으면 기호 $f'(c)$를 쓰지 않는다.

**미분가능한 함수와 도함수.** $A \subseteq I$일 때 $f$가 **$A$에서 미분가능하다**는 것은 정확히 $A$의 모든 원소에서 $f$가 미분가능할 때이다. 여기서 각 점에서의 미분가능은 $I$ 위의 함수 $f$ 자신의 것이고, 그 점에서의 차분몫의 정의역은 $I$에서 그 점을 뺀 집합이다. 예를 들어 $a < b$이고 $f : [a, b] \to \mathbb{R}$일 때 "$f$가 열린구간 $(a, b)$에서 미분가능하다"는 것은 $a < x < b$인 모든 $x$에서 $f$가 미분가능하다는 뜻이다. $f$가 $I$에서 미분가능할 때 $f$를 **미분가능한 함수**(differentiable function)라 하고, 이때 $x \in I$에서의 값이 $f'(x)$인 함수 $f' : I \to \mathbb{R}$를 $f$의 **도함수**(derivative)라 한다.

다음이 성립한다.

1. (일차함수, 상수함수, 항등함수) $m$, $k$가 실수이고 $h(x) = mx + k$로 정한 함수가 $h : I \to \mathbb{R}$이면, $h$는 미분가능한 함수이고 모든 $x \in I$에서 $h'(x) = m$이다. 곧 $h'$은 $I$ 위의 값이 $m$인 상수함수이다. 특히 $I$ 위의 상수함수는 미분가능한 함수이고 모든 점에서 미분계수가 $0$이며, 항등함수 $i_I$는 미분가능한 함수이고 모든 점에서 미분계수가 $1$이다.
2. (제한) $J$가 구간이고 $J \subseteq I$이며 $c \in J$라 하자. $f$가 $c$에서 미분가능하면 제한 $f|_J : J \to \mathbb{R}$도 $c$에서 미분가능하고 $(f|_J)'(c) = f'(c)$이다. 따라서 $f$가 $J$에서 미분가능하면 $f|_J$는 미분가능한 함수이고 모든 $x \in J$에서 $(f|_J)'(x) = f'(x)$이다.
:::

:::english
Intervals are those of the entry on intervals; real-valued functions, constant functions, identity functions and restrictions are those of the entry on real-valued functions; cluster points are those of the entry on cluster points; convergence and the notation $\lim_{x \to c}$ are those of the entry on limits of functions. Subtraction and $a^{-1}$ are those of the entry on real arithmetic. Let $I$ be an interval, $f : I \to \mathbb{R}$ a real-valued function on $I$, and $c$ an element of $I$. For example, if $I = [a, b]$, then $c = a$ or $c = b$ is allowed.

**Difference quotient.** For an element $x$ of $I - \{c\}$ we have $x - c \ne 0$ (shown at the start of the proof below). The function $q_c : I - \{c\} \to \mathbb{R}$ defined by $q_c(x) = (f(x) - f(c))(x - c)^{-1}$ is called the **difference quotient** of $f$ at $c$. When we specify which function it belongs to, we write $q^f_c$. The point $c$ is a cluster point of $I - \{c\}$ (shown at the start of the proof below).

**Derivative at a point.** We say $f$ is **differentiable at $c$** exactly when $q_c$ converges at $c$. In that case the limit $\lim_{x \to c} q_c(x)$ is called the **derivative of $f$ at $c$** and is written $f'(c)$. That is, for a real number $L$, $f$ is differentiable at $c$ with $f'(c) = L$ exactly when $q_c$ converges to $L$ at $c$. We also write $f'(c)$ as $\lim_{x \to c} \dfrac{f(x) - f(c)}{x - c}$. If $f$ is not differentiable at $c$, the symbol $f'(c)$ is not used.

**Differentiable functions and the derivative.** For $A \subseteq I$, we say $f$ is **differentiable on $A$** exactly when $f$ is differentiable at every element of $A$. Here differentiability at each point is that of the function $f$ on $I$ itself, and the difference quotient at that point has domain $I$ minus that point. For example, if $a < b$ and $f : [a, b] \to \mathbb{R}$, then "$f$ is differentiable on the open interval $(a, b)$" means that $f$ is differentiable at every $x$ with $a < x < b$. When $f$ is differentiable on $I$, $f$ is called a **differentiable function**, and the function $f' : I \to \mathbb{R}$ whose value at $x \in I$ is $f'(x)$ is called the **derivative** of $f$.

The following hold.

1. (Affine, constant and identity functions) If $m$, $k$ are real numbers and $h : I \to \mathbb{R}$ is the function defined by $h(x) = mx + k$, then $h$ is a differentiable function and $h'(x) = m$ for all $x \in I$. That is, $h'$ is the constant function on $I$ with value $m$. In particular, a constant function on $I$ is a differentiable function whose derivative is $0$ at every point, and the identity function $i_I$ is a differentiable function whose derivative is $1$ at every point.
2. (Restriction) Let $J$ be an interval with $J \subseteq I$ and $c \in J$. If $f$ is differentiable at $c$, then the restriction $f|_J : J \to \mathbb{R}$ is also differentiable at $c$ and $(f|_J)'(c) = f'(c)$. Consequently, if $f$ is differentiable on $J$, then $f|_J$ is a differentiable function and $(f|_J)'(x) = f'(x)$ for all $x \in J$.
:::

## 직관

$q_c(x)$는 두 점 $(c, f(c))$와 $(x, f(x))$를 잇는 직선의 기울기입니다. $x$를 $c$에 가까이 가져갈 때 이 기울기들이 한 수로 모이면, 그 수를 $c$에서의 미분계수라 합니다. 그래프로 보면 $c$에서 그래프에 닿는 접선의 기울기입니다. 다만 "접선"은 이 사이트에서 정의하지 않은 그림의 말이고, 정의는 차분몫의 극한 하나뿐입니다.

자동차의 평균 속력과 순간 속력에 비유할 수 있습니다. 시각 $c$부터 시각 $x$까지 간 거리를 걸린 시간으로 나눈 것이 평균 속력이고, 이것이 차분몫입니다. 걸린 시간을 얼마든지 짧게 할 때 평균 속력이 가까워지는 수가 순간 속력이고, 이것이 미분계수입니다. 비유가 맞지 않는 곳은 $x$가 $c$보다 앞의 시각이어도 된다는 점입니다. 차분몫은 분자와 분모의 부호가 함께 바뀌어 같은 꼴로 정의됩니다.

차분몫은 $x = c$에서 정의되지 않으므로 함수의 극한을 씁니다. 구간의 모든 점은 그 구간의 집적점이므로 끝점에서도 극한을 물을 수 있습니다. 끝점에서는 한쪽의 점들만 차분몫에 들어갑니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "실함수 (2)"처럼 쓴 것은 [[real-valued-function]]의 번호, "집적점 (6)"은 [[cluster-point]]의 번호, "극한 (4)"는 [[limit-of-a-function]]의 번호, "이 항목의 (1)"은 위 진술의 번호이다.

**정의에 쓰인 사실.** $x \in I - \{c\}$이면 $x \ne c$이므로 (K12)의 (v)에 의해 $x - c \ne 0$이고, (K8)의 (iii)에 의해 $(x - c)^{-1}$은 실수 하나로 정해진다. 따라서 각 $x \in I - \{c\}$에서 $(f(x) - f(c))(x - c)^{-1}$은 실수 하나로 정해지고, 실함수 (1)에 의해 $q_c$는 $I - \{c\}$ 위의 실함수이다. $I$가 구간이고 $c \in I$이므로 집적점 (6)에 의해 $c$는 $I$의 집적점이고, 집적점 (3)에 의해 $I - \{c\}$의 집적점이다. 극한 (3)과 기호 $\lim_{x \to c}$의 약속에 의해, $q_c$가 $c$에서 수렴하면 수렴하는 실수는 하나뿐이므로 $f'(c)$는 실수 하나를 가리키고, "$f'(c) = L$"은 정확히 $q_c$가 $c$에서 $L$로 수렴한다는 뜻이다. $(f(x) - f(c))/(x - c)$는 뺄셈과 나눗셈의 정의에 의해 $q_c(x)$와 같은 수이므로 둘째 기호도 같은 극한을 가리킨다. $f$가 미분가능한 함수이면 각 $x \in I$에서 $f'(x)$가 실수 하나로 정해지므로 실함수 (1)에 의해 $f'$은 $I$ 위의 실함수이다.

**1의 증명.** $I$의 원소 $t$를 잡고, 이 문단에서 $q_t$는 $h$의 $t$에서의 차분몫이다. $x \in I - \{t\}$이면 (K1)–(K3), (K12)에 의해
$$
h(x) - h(t) = (mx + k) - (mt + k) = mx - mt = m(x - t)
$$
이고, (K2), (K8)의 (iii), (K4)에 의해 $q_t(x) = m(x - t)(x - t)^{-1} = m \cdot 1 = m$이다. 따라서 실함수 (2)와 (3)에 의해 $q_t$는 $I - \{t\}$ 위의 값이 $m$인 상수함수이고, 극한 (4)에 의해 $t$에서 $m$으로 수렴한다. 곧 $h$는 $t$에서 미분가능하고 $h'(t) = m$이다. $t$는 $I$의 임의의 원소였으므로 $h$는 미분가능한 함수이고, 실함수 (2)와 (3)에 의해 $h'$은 값이 $m$인 상수함수이다.

$I$ 위의 값이 $k$인 상수함수 $u$는 모든 $x \in I$에서 (K9), (K1), (K4)에 의해 $u(x) = k = 0 \cdot x + k$이므로 실함수 (2)에 의해 $m = 0$인 $h$와 같고, 방금 본 것에 의해 모든 점에서 미분계수가 $0$이다. 항등함수 $i_I$는 모든 $x \in I$에서 (K1), (K4)에 의해 $i_I(x) = x = 1 \cdot x + 0$이므로 $m = 1$, $k = 0$인 $h$와 같고, 모든 점에서 미분계수가 $1$이다.

**2의 증명.** 실함수 (6)에 의해 $f|_J$는 $J$ 위의 실함수이고 모든 $x \in J$에서 $f|_J(x) = f(x)$이다. $x \in J - \{c\}$이면 $J \subseteq I$이므로 $x \in I - \{c\}$이고,
$$
q^{f|_J}_c(x) = (f|_J(x) - f|_J(c))(x - c)^{-1} = (f(x) - f(c))(x - c)^{-1} = q^f_c(x)
$$
이다. 실함수 (6)에 의해 $(q^f_c)|_{J - \{c\}}(x) = q^f_c(x)$이므로, 실함수 (2)에 의해 $q^{f|_J}_c = (q^f_c)|_{J - \{c\}}$이다. $J$가 구간이고 $c \in J$이므로 집적점 (6)과 (3)에 의해 $c$는 $J - \{c\}$의 집적점이다. $J - \{c\} \subseteq I - \{c\}$이고 $q^f_c$가 $c$에서 $f'(c)$로 수렴하므로, 극한 (7)에 의해 $(q^f_c)|_{J - \{c\}}$, 곧 $q^{f|_J}_c$도 $c$에서 $f'(c)$로 수렴한다. 따라서 $f|_J$는 $c$에서 미분가능하고 $(f|_J)'(c) = f'(c)$이다. 둘째 문장은 첫 문장을 $J$의 모든 원소에 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱 함수의 미분계수]
$f(x) = x^2$으로 정한 $f : \mathbb{R} \to \mathbb{R}$와 실수 $c$를 생각합니다. $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이고, [[power-of-a-real-number]]의 (1)에 의해 $x^2 = xx$입니다. $x \ne c$이면 [[real-number-arithmetic]]의 (K1)–(K3), (K12)로 전개해 $(x + c)(x - c) = xx - xc + cx - cc = xx - cc$이므로, (K2), (K8)의 (iii), (K4)에 의해
$$
q_c(x) = (x + c)(x - c)(x - c)^{-1} = x + c
$$
입니다. $S = \mathbb{R} - \{c\}$로 두면 [[real-valued-function]]의 (2), (3), (4)에 의해 $q_c$는 $S$ 위의 항등함수 $i_S$와 $S$ 위의 값이 $c$인 상수함수의 합입니다. [[limit-of-a-function]]의 (4)에 의해 두 함수는 $c$에서 각각 $c$로 수렴하고, [[limit-laws-for-functions|함수의 극한의 사칙연산]]의 (3)에 의해 $q_c$는 $c + c = 2c$로 수렴합니다((K4), (K3), (K7)의 $1 + 1 = 2$). 따라서 $f$는 모든 실수 $c$에서 미분가능하고 $f'(c) = 2c$입니다. 도함수 $f'$은 $x$에서의 값이 $2x$인 함수입니다.
:::

:::example[제곱근 함수의 미분계수]
$T = \{x \in \mathbb{R} : 0 \le x\}$는 [[interval]]의 (2)에 의해 구간입니다. [[square-root-exists]]의 (1)로 정한 $\sqrt{x}$에 대하여 $r(x) = \sqrt{x}$로 정한 $r : T \to \mathbb{R}$와 양의 실수 $c$를 생각합니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$x \in T$이면 [[square-root-exists]]의 (1)에 의해 $0 \le \sqrt{x}$이고 $0 < \sqrt{c}$이므로, 순서 성질 (2)의 (iv)와 [[real-number-arithmetic]]의 (K1), (K4)에 의해 $0 = 0 + 0 < \sqrt{c} + \sqrt{x} = \sqrt{x} + \sqrt{c}$입니다. $w(x) = \sqrt{x} + \sqrt{c}$로 정한 $w : T \to \mathbb{R}$는 모든 점에서 $0$이 아닙니다. $x \in T$이고 $x \ne c$이면 [[real-number-arithmetic]]의 (K1)–(K3), (K12)와 $\sqrt{x}\sqrt{x} = x$, $\sqrt{c}\sqrt{c} = c$에 의해 $(\sqrt{x} - \sqrt{c})\,w(x) = x - c$이고, 양변에 $w(x)^{-1}(x - c)^{-1}$을 곱하면 (K1), (K2), (K8)의 (iii), (K4)에 의해
$$
q_c(x) = (\sqrt{x} - \sqrt{c})(x - c)^{-1} = w(x)^{-1}
$$
입니다.

$r$는 [[power-function-is-continuous]]의 (2)에 의해 연속함수이고, $w$는 $r$와 $T$ 위의 값이 $\sqrt{c}$인 상수함수의 합이므로 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. $w$가 $T$의 모든 점에서 $0$이 아니므로 같은 항목의 (2)에 의해 $1/w : T \to \mathbb{R}$는 $c$에서 연속이고, $c$는 $T$의 집적점이므로([[cluster-point]]의 (6)) [[continuous-function]]의 (3)에 의해 $1/w$는 $c$에서 $w(c)^{-1} = (2\sqrt{c})^{-1}$로 수렴합니다($\sqrt{c} + \sqrt{c} = 2\sqrt{c}$는 (K3), (K4), (K7)). [[limit-of-a-function]]의 (6)에 의해 $(1/w)|_{T - \{c\}}$도 $c$에서 같은 수로 수렴하고, 위 계산과 [[real-valued-function]]의 (2), (5), (6)에 의해 이 함수가 $q_c$입니다. 따라서 $r$는 $c$에서 미분가능하고 $r'(c) = (2\sqrt{c})^{-1}$입니다. 이 예시는 $c = 0$인 경우를 다루지 않습니다.
:::

:::counterexample[절댓값 함수는 $0$에서 미분가능하지 않다]
$a(x) = |x|$로 정한 $a : \mathbb{R} \to \mathbb{R}$를 생각합니다. [[absolute-value|절댓값]]의 (1)에 의해 $|0| = 0$이고, $x \ne 0$이면 [[real-number-arithmetic]]의 (K4), (K9)에 의해 $q_0(x) = (|x| - 0)(x - 0)^{-1} = |x|\,x^{-1}$입니다. $0 < x$이면 $|x| = x$이므로 $q_0(x) = x x^{-1} = 1$이고, $x < 0$이면 $|x| = -x$이므로 $q_0(x) = (-x)x^{-1} = -(x x^{-1}) = -1$입니다((K9), (K8)의 (iii)).

실수 $L$을 아무것이나 잡고 [[limit-of-a-function]]의 (1)이 $\varepsilon = 1$로 성립함을 보입니다. 양의 실수 $\delta$를 잡고 $t = 2^{-1}\delta$로 두면 [[order-properties-of-reals]]의 (8)에 의해 $0 < t < \delta$이고, 같은 항목의 (3)의 (ii)에 의해 $-t < 0$입니다. 두 점 $t$, $-t$는 $0$이 아니고 [[absolute-value|절댓값]]의 (1), (3)에 의해 $0$과의 거리가 $|t| = |-t| = t < \delta$이며, $q_0(t) = 1$, $q_0(-t) = -1$입니다. 만약 $|1 - L| < 1$이고 $|-1 - L| < 1$이라면 [[triangle-inequality|삼각부등식]]의 (3)과 [[order-properties-of-reals]]의 (2)의 (iv)에 의해
$$
2 = |(1 - L) - (-1 - L)| \le |1 - L| + |-1 - L| < 1 + 1 = 2
$$
가 되어 [[real-order-axioms]]의 (W1)에 어긋납니다. 여기서 $(1 - L) - (-1 - L) = 1 + 1 = 2$는 [[real-number-arithmetic]]의 계산 법칙과 (K7)로 얻고, $|2| = 2$는 절댓값의 (1)입니다. 따라서 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $|q_0(t) - L| \ge 1$이거나 $|q_0(-t) - L| \ge 1$이고, 그 점이 (1)의 $x$입니다. $L$은 임의였으므로 $q_0$은 $0$에서 수렴하지 않고, $a$는 $0$에서 미분가능하지 않습니다. 그래프로는 $0$의 오른쪽 기울기 $1$과 왼쪽 기울기 $-1$이 만나지 않는 꺾인 점입니다.
:::

:::remark[다른 기호]
출처를 비롯한 여러 책은 도함수를 $\dfrac{df}{dx}$나 $\dfrac{d}{dx} f(x)$로도 씁니다. 이 사이트는 $f'$만 씁니다.
:::

## 확인 질문

:::check[$g(x) = x\,|x|$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 $0$에서 미분가능한가?]
미분가능하고 $g'(0) = 0$입니다. $g(0) = 0$이므로 $x \ne 0$이면 [[real-number-arithmetic]]의 (K1), (K2), (K4), (K8)의 (iii), (K9)에 의해 $q_0(x) = x\,|x|\,x^{-1} = |x|$입니다. $S = \mathbb{R} - \{0\}$ 위에서 $q_0$은 항등함수 $i_S$의 절댓값 $|i_S|$이고([[real-valued-function]]의 (2), (4)), [[limit-of-a-function]]의 (4)와 [[limit-laws-for-functions|함수의 극한의 사칙연산]]의 (7)에 의해 $0$에서 $|0| = 0$으로 수렴합니다.
:::

:::check[위 반례의 절댓값 함수 $a$를 구간 $J = \{x \in \mathbb{R} : 0 \le x\}$로 제한한 $a|_J$는 $0$에서 미분가능한가?]
미분가능하고 $(a|_J)'(0) = 1$입니다. $J$는 [[interval]]의 (2)에 의해 구간입니다. $J - \{0\}$의 원소 $x$는 $0 \le x$이고 $x \ne 0$이므로 $0 < x$이고, [[absolute-value|절댓값]]의 (1)에 의해 $a|_J(x) = x$이며, 차분몫은 $x x^{-1} = 1$로 값이 $1$인 상수함수입니다([[limit-of-a-function]]의 (4)). $a$ 자신은 $0$에서 미분가능하지 않으므로, (2)의 거꾸로("제한이 $c$에서 미분가능하면 원래 함수도 그렇다")는 성립하지 않습니다.
:::
