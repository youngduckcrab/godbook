---
title: 거듭제곱 함수의 미분
title_en: Derivative of Power Functions
aliases: [거듭제곱의 미분, xⁿ 의 미분, 다항식 꼴의 함수의 미분, power rule, derivative of x^n]
kind: proposition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "0 이상의 정수 n 에 대하여 x 에서의 값이 xⁿ 인 함수 ℝ → ℝ 는 모든 점에서 미분가능하고, c 에서의 미분계수는 n = 0 이면 0, n ≥ 1 이면 n cⁿ⁻¹ 이다. 구간으로 제한해도 같다."
requires: [mathematical-induction, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, interval, real-valued-function, power-function-is-continuous, derivative, derivative-rules]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.1.3절 연습문제 4.1.3, 4.1.4 (p.160)
    checked: original
    note: "출처는 이 사실의 증명을 연습문제 4.1.3(p.160)으로 두고, 본문에서는 Corollary 4.4.3 의 증명(p.178)에서 f′(y) = n yⁿ⁻¹ 을 그 연습문제를 가리켜 쓴다. 그 연습문제는 n ∈ ℤ 에 대하여 xⁿ 이 (n < 0 이고 x = 0 인 경우를 빼고) 미분가능함을 보이고 미분계수를 구하라는 것이고, 곱의 법칙을 쓰라고 귀띔한다. 이 사이트는 음의 지수를 정의하지 않으므로 이 항목은 0 이상의 정수 n 만 다루며, n 에 대한 귀납법과 곱의 법칙으로 증명한다. 출처의 연습문제 4.1.4(p.160)는 다항식의 미분을 묻는다. 이 사이트는 일반의 다항식을 정의하지 않으므로, 구체적인 다항식 꼴의 함수는 예시처럼 이 항목과 derivative-rules 를 몇 번 써서 다룬다. 확인 질문 2 의 n = 3 인 경우(x³ 의 0 에서의 미분계수 0)는 출처가 Proposition 4.2.8 뒤(p.166)와 Example 4.4.5(p.178)에서 적는다. 그 밖의 예시와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
거듭제곱 $x^n$은 [[power-of-a-real-number]]의 것이고, 함수 $p_n$은 [[power-function-is-continuous]]의 (1)의 것이며, 미분가능, 미분계수, 도함수와 구간은 [[derivative]]의 것이다. $n$을 $0$ 이상인 정수라 하고, $p_n(x) = x^n$으로 정한 함수 $p_n : \mathbb{R} \to \mathbb{R}$를 생각한다.

1. (모든 점에서) $p_n$은 미분가능한 함수이다. 모든 실수 $c$에서, $n = 0$이면 $p_0'(c) = 0$이고, $n \ge 1$이면 $p_n'(c) = n\,c^{n-1}$이다. 여기서 $n - 1$은 $0$ 이상인 정수이고, $n = 1$이면 $c^0 = 1$이므로 $p_1'(c) = 1$이다. 곧 $p_0'$은 값이 $0$인 상수함수이고, $n \ge 1$이면 $p_n' = n\,p_{n-1}$이다.
2. (구간으로 제한) $I$가 구간이면 제한 $p_n|_I$는 미분가능한 함수이고, 모든 $c \in I$에서 $(p_n|_I)'(c) = p_n'(c)$이다.
:::

:::english
Powers $x^n$ are those of the entry on powers of real numbers, the function $p_n$ is that of (1) in the entry on continuity of power functions, and differentiability, derivatives at a point, derivative functions and intervals are those of the entry on derivatives. Let $n$ be an integer with $n \ge 0$, and consider the function $p_n : \mathbb{R} \to \mathbb{R}$ defined by $p_n(x) = x^n$.

1. (At every point) $p_n$ is a differentiable function. For every real number $c$, if $n = 0$ then $p_0'(c) = 0$, and if $n \ge 1$ then $p_n'(c) = n\,c^{n-1}$. Here $n - 1$ is an integer with $n - 1 \ge 0$, and if $n = 1$ then $c^0 = 1$, so $p_1'(c) = 1$. That is, $p_0'$ is the constant function with value $0$, and if $n \ge 1$ then $p_n' = n\,p_{n-1}$.
2. (Restriction to an interval) If $I$ is an interval, then the restriction $p_n|_I$ is a differentiable function, and $(p_n|_I)'(c) = p_n'(c)$ for all $c \in I$.
:::

## 직관

$x^{n+1} = x^n \cdot x$이므로 $p_{n+1}$은 $p_n$과 항등함수의 곱이고, 곱의 법칙을 쓰면
$$
p_{n+1}'(c) = c^n \cdot 1 + n\,c^{n-1} \cdot c = (n + 1)\,c^n
$$
이 됩니다. 이것은 $p_n'(c) = n\,c^{n-1}$이라는 식이 $n$에서 $n + 1$로 그대로 넘어간다는 뜻입니다. 도미노를 세우는 것과 같습니다. 첫 도미노($n = 1$, 항등함수의 미분계수 $1$)를 넘어뜨리고, 각 도미노가 다음 도미노를 넘어뜨리면(곱의 법칙) 모두 넘어집니다. 비유가 맞는 곳은 귀납법의 두 단계이고, 맞지 않는 곳은 도미노는 유한 개이지만 $n$은 $1$ 이상인 모든 정수라는 점입니다.

$n = 0$을 따로 적는 까닭은 식 $n\,c^{n-1}$이 $n = 0$에서 지수 $-1$을 요구하기 때문입니다. 이 사이트는 음의 지수를 정의하지 않습니다.

## 증명

:::idea
$n \ge 1$에 대한 귀납법으로, $p_{n+1} = p_n\,p_1$에 곱의 법칙을 쓴다. $n = 0$은 상수함수이다.
:::

:::hint
$p_{n+1}$과 $p_n\,p_1$이 같은 함수라는 것은 [[real-valued-function]]의 (2)로 값을 비교해 보인다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "거듭제곱 (1)"처럼 쓴 것은 [[power-of-a-real-number]]의 번호이다.

**1의 증명.** [[power-function-is-continuous]]의 (1)의 괄호에 의해 $p_0$은 값이 $1$인 상수함수이고 $p_1$은 항등함수 $i_{\mathbb{R}}$이다. $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이다. [[derivative]]의 (1)에 의해 $p_0$은 미분가능한 함수이고 모든 점에서 미분계수가 $0$이다.

$n \ge 1$인 정수 $n$에 대하여 "모든 실수 $c$에서 $p_n$은 $c$에서 미분가능하고 $p_n'(c) = n\,c^{n-1}$이다"를 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

기초 단계 $n = 1$. [[derivative]]의 (1)에 의해 항등함수 $p_1$은 모든 실수 $c$에서 미분가능하고 $p_1'(c) = 1$이다. 거듭제곱의 정의에 의해 $c^0 = 1$이므로 (K4)에 의해 $1 \cdot c^{1-1} = 1 \cdot c^0 = 1$이고, 식이 성립한다.

귀납 단계. $n \ge 1$인 정수 $n$에서 명제가 성립한다고 가정한다. 모든 실수 $x$에서 거듭제곱 (1)에 의해 $p_{n+1}(x) = x^{n+1} = x^n \cdot x = p_n(x)\,p_1(x)$이므로 [[real-valued-function]]의 (2), (4)에 의해 $p_{n+1} = p_n\,p_1$이다. 실수 $c$를 잡는다. 귀납 가정에 의해 $p_n$은 $c$에서 미분가능하고 $p_n'(c) = n\,c^{n-1}$이며, $p_1$은 $c$에서 미분가능하고 $p_1'(c) = 1$이다. [[derivative-rules|미분의 연산]]의 (4)에 의해 $p_{n+1}$은 $c$에서 미분가능하고
$$
p_{n+1}'(c) = p_n(c)\,p_1'(c) + p_n'(c)\,p_1(c) = c^n \cdot 1 + n\,c^{n-1} \cdot c
$$
이다. $n - 1 \ge 0$이므로 거듭제곱 (1)에 의해 $c^{n-1} \cdot c = c^{(n-1)+1} = c^n$이고, (K2), (K4), (K3), (K7)에 의해 $c^n + n\,c^n = (1 + n)\,c^n = (n + 1)\,c^n$이다. $n + 1 - 1 = n$이므로 이것은 $n + 1$에서의 명제이다. 따라서 $n \ge 1$인 모든 정수 $n$에서 명제가 성립한다.

마지막 문장. $p_0'$은 모든 점에서 값이 $0$이므로 [[real-valued-function]]의 (3)의 상수함수이다. $n \ge 1$이면 $n - 1 \ge 0$이므로 $p_{n-1}$이 정해지고, 모든 실수 $x$에서 $p_n'(x) = n\,x^{n-1} = n\,p_{n-1}(x) = (n\,p_{n-1})(x)$이므로 [[real-valued-function]]의 (2), (4)에 의해 $p_n' = n\,p_{n-1}$이다. 여기서 $n \ge 1$, $n - 1 \ge 0$ 같은 정수의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽어도 같다.

**2의 증명.** $I \subseteq \mathbb{R}$이고 (1)에 의해 $p_n$은 $I$의 모든 점에서 미분가능하므로, [[derivative]]의 (2)에 의해 $p_n|_I$는 미분가능한 함수이고 모든 $c \in I$에서 $(p_n|_I)'(c) = p_n'(c)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[다항식 꼴의 함수]
$h(x) = 2x^3 - 5x + 1$로 정한 $h : \mathbb{R} \to \mathbb{R}$를 생각합니다. 값이 $1$인 상수함수를 $v$라 하면 모든 실수 $x$에서 값이 같으므로 [[real-valued-function]]의 (2)에 의해
$$
h = \bigl(2\,p_3 - 5\,p_1\bigr) + v
$$
입니다. (1)에 의해 $p_3'(c) = 3c^2$, $p_1'(c) = 1$이고 [[derivative]]의 (1)에 의해 $v$의 미분계수는 $0$이므로, [[derivative-rules|미분의 연산]]의 (1), (3), (2)를 차례로 쓰면 모든 실수 $c$에서
$$
h'(c) = (2 \cdot 3c^2 - 5 \cdot 1) + 0 = 6c^2 - 5
$$
입니다. 이 사이트는 일반의 다항식을 정의하지 않으므로, 이렇게 식마다 연산을 하나씩 따라가 미분계수를 구합니다.
:::

:::example[닫힌구간 위의 거듭제곱]
$p_4$를 닫힌구간 $[0, 1]$로 제한한 함수를 $g$라 합니다. (2)에 의해 $g$는 미분가능한 함수이고, 끝점에서도 $g'(0) = 4 \cdot 0^3 = 0$, $g'(1) = 4 \cdot 1^3 = 4$입니다([[power-of-a-real-number]]의 (2)의 (iv)). [[derivative]]의 정의는 끝점을 허용하므로, 끝점에서의 미분계수는 $[0, 1]$에 든 한쪽의 점들만 보고 정해집니다.
:::

## 확인 질문

:::check[$p_5$의 $-1$에서의 미분계수는 무엇인가?]
(1)에 의해 $p_5'(-1) = 5\,(-1)^4$입니다. $4$는 짝수이므로 [[power-of-a-real-number]]의 (5)에 의해 $(-1)^4 = 1$이고, 답은 $5$입니다.
:::

:::check[$n \ge 1$일 때 $p_n'(0)$은 무엇인가?]
$n = 1$이면 $p_1'(0) = 1 \cdot 0^0 = 1$입니다. [[power-of-a-real-number]]의 정의에서 $0^0 = 1$이기 때문입니다. $n \ge 2$이면 $n - 1 \ge 1$이므로 같은 항목의 (2)의 (iv)에 의해 $0^{n-1} = 0$이고, $p_n'(0) = n \cdot 0 = 0$입니다((K9)).
:::
