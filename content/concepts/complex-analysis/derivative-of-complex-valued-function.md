---
title: 실변수 복소수값 함수의 미분
title_en: Derivative of a Complex-Valued Function of a Real Variable
aliases: [복소수값 함수의 미분, 실변수 복소수값 함수의 도함수, 복소수값 함수의 연속미분가능, derivative of a complex-valued function, differentiable complex-valued function, continuously differentiable complex-valued function]
kind: definition
field: complex-analysis
msc: ["30", "26A24"]
level: undergrad
summary: "구간 I 위의 함수 g : I → ℂ 는 실수부와 허수부가 c 에서 미분가능할 때 c 에서 미분가능하다고 하고, 미분계수를 두 미분계수로 만든 복소수로 정한다. 미분가능하면 연속이라는 것, 제한, 실수값 함수를 ι 로 옮긴 함수와의 일치, 합·차·복소수배·곱의 법칙, 실함수와의 합성, 도함수가 0 이면 상수라는 것, 실변수 t 에서의 exp(ct) 의 도함수, 일차함수와 원을 그리는 함수의 도함수를 함께 진술한다."
requires: [function-composition, interval, real-number-arithmetic, real-valued-function, continuous-function, derivative, derivative-rules, chain-rule, differentiable-implies-continuous, continuously-differentiable, derivative-and-monotonicity, exponential-function, cosine-and-sine, derivatives-of-cosine-and-sine, continuous-map, continuity-agrees-with-analysis, complex-number, complex-field, complex-plane-as-metric-space, continuity-of-complex-operations, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, modulus-of-complex-number]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.3소절 Complex-valued functions (p.142); 11.1.4소절 연습문제 11.1.8 (p.143); 11.2절 Swapping limits, 11.2.3소절 Differentiation (p.149); 11.4절 Complex exponential and trigonometric functions, 11.4.3소절 The unit circle and polar coordinates (p.167); 11.8절 Fourier series, 11.8.1소절 Trigonometric polynomials (p.192)"
    checked: original
    note: "정의는 출처 11.1.3소절(p.142)의 것과 같다. 출처는 f : [a, b] → ℂ 를 실함수 u, v 로 f = u + iv 라 쓰고, u 와 v 가 미분가능하면 f 가 미분가능하다고 하며 f′(t) := u′(t) + iv′(t) 로 정한다. 출처는 정의역을 [a, b] 로 적고 이 항목은 일반 구간 I 로 둔다. 11.2.3소절(p.149)은 같은 정의를 'Recall' 로 다시 적고, 그 뒤의 정리(Theorem 11.2.14, 도함수의 고른 수렴)의 증명을 '실함수의 해당 정리를 u 와 v 에 쓰는 것'이라며 연습문제 11.2.6(p.152)으로 남긴다. 이 항목의 (1)–(9)도 모두 실함수의 사실을 실수부와 허수부에 쓰는 증명이지만, 출처는 (1)–(9)를 명제로 적지 않는다(책의 11.1–11.2절에서 'differentiable', 'derivative', 'u′', 'chain rule', 'product' 를 줄을 이어 찾아 나온 곳을 모두 읽었고, 11.1.4·11.2.4소절 연습문제를 처음부터 읽었다). 출처 연습문제 11.1.8 (b)(p.143)는 |f′| ≤ M 이면 |f(b) − f(a)| ≤ M|b − a| 라는 '약한 평균값 정리'를 증명하게 한다. 이 항목은 그것을 싣지 않는다. (8)의 특수한 경우는 출처에 계산으로 나온다. 11.4.3소절(p.167)은 원의 둘레를 구하면서 d/dt e^{it} = ie^{it} 라고 적고, 11.8.1소절(p.192)은 정수 n 에 대해 d/dx e^{inx} = (in)e^{inx} 라고 적는다. 확인 질문 '실수부가 $\\cos t$이고 허수부가 $-\\sin t$인 함수 $\\mathbb{R} \\to \\mathbb{C}$의 $t$에서의 미분계수는?'의 함수는 e^{−it} 이고, 그 계산은 이 식을 n = −1 에 쓴 것과 같다. 반례 '닫힌구간 [0, 2π] 위의 exp(it) 에서 평균값 정리의 꼴이 성립하지 않는 예'는 출처 연습문제 11.1.8 (a)(p.143: f(0) = f(1) = 0 이고 모든 t 에서 f′(t) ≠ 0 인 미분가능한 f : [0, 1] → ℂ 를 찾으라)와 같은 발상이다."
  - ref: beck-first-course-complex-analysis
    loc: "Elementary Topology of the Plane 절의 Definition def_smooth 와 그 뒤 문단, source/sec_topologyintro.ptx:239–277; Definition and Basic Properties 절의 Example example_circlelength, source/sec_intdef.ptx:267–280; Constant Functions 절, source/sec_constantfcts.ptx:42–44"
    checked: original
    note: "출처는 경로 γ : [a, b] → ℂ 의 미분을 미적분의 뜻, 곧 차분몫 (γ(t) − γ(t₀))/(t − t₀) 의 극한으로 쓴다고 적는다(sec_topologyintro.ptx:266–277). 이 사이트에는 실변수 복소수값 함수의 극한이 없으므로 이 항목은 Lebl 처럼 실수부와 허수부로 정의한다. 출처의 매끄러운 경로(smooth, 239–264줄)는 γ′ 이 연속이고 0 이 아니며 끝점에서 한쪽 극한 lim γ′ 이 있기를 요구한다. 이 항목의 연속미분가능은 γ′ ≠ 0 을 요구하지 않고, 끝점의 미분계수는 derivative 의 정의대로 한쪽에서만 다가가는 차분몫의 극한이다. (9)의 원을 그리는 함수의 도함수 i r exp(it) 는 출처 Example example_circlelength(sec_intdef.ptx:267–280)가 단위원 γ(t) = e^{it} 에 대해 γ′(t) = ie^{it} 라고 적는 것과 같은 계산이다. 예시 't exp(it) 의 도함수'는 같은 계산에 곱의 법칙을 더한 것이다. 출처는 Constant Functions 절(source/sec_constantfcts.ptx:42–44)에서 복소함수에 대해 평균값 정리의 복소판이 '(아직)' 없으므로 도함수가 0 인 함수가 상수라는 것을 다른 논법으로 보이겠다고 적는다. 반례 '닫힌구간 [0, 2π] 위의 exp(it) 에서 평균값 정리의 꼴이 성립하지 않는 예'와 (7)이 같은 사정을 실변수 복소수값 함수에서 보인다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예·확인 질문의 계산, 반례 제목). 독립 검토 없음."
added: 2026-11-27
---

:::statement
구간은 [[interval]]의 것이고, 실함수, 값으로 정한 함수, 상수함수, 제한은 [[real-valued-function]]의 것이다. 미분가능, 미분계수, "$A$에서 미분가능", 미분가능한 함수와 도함수는 [[derivative]]의 것이고, 실함수의 연속은 [[continuous-function]]의 것이며, 실함수의 연속미분가능은 [[continuously-differentiable]]의 것이다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속과 $a + bi$ 꼴은 [[complex-field]]의 것이며, 복소 지수함수 $\exp$는 [[complex-exponential-function]], 실수의 지수함수는 [[exponential-function]], 코사인과 사인은 [[cosine-and-sine|코사인과 사인]]의 것이다. 구간 $I$에는 $\mathbb{R}$의 보통 거리의 부분공간 거리와 그 거리위상을 주고, $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]]와 그 거리위상을 준다. 함수 $g : I \to \mathbb{C}$의 연속과 "$c$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 함수 $g, h : I \to \mathbb{C}$와 복소수 $w$에 대한 $\operatorname{Re} g$, $\operatorname{Im} g : I \to \mathbb{R}$와 $g + h$, $g - h$, $gh$, $wg : I \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 머리말에서 $Z = I$로 둔 것이다. 실함수 $u : I \to \mathbb{R}$에 대하여 $\iota \circ u : I \to \mathbb{C}$는 [[function-composition|합성]]이다.

**미분가능과 미분계수.** $I$를 구간, $g : I \to \mathbb{C}$를 함수, $c$를 $I$의 원소라 하자. $g$가 $c$에서 **미분가능하다**(differentiable at $c$)는 것은 정확히 두 실함수 $\operatorname{Re} g$와 $\operatorname{Im} g$가 둘 다 [[derivative]]의 뜻으로 $c$에서 미분가능할 때이다. 이때 복소수
$$
g'(c) = (\operatorname{Re} g)'(c) + (\operatorname{Im} g)'(c)\, i
$$
를 $g$의 $c$에서의 **미분계수**라 한다. [[complex-field]]의 (4)에 의해 이것은 $\operatorname{Re}\bigl(g'(c)\bigr) = (\operatorname{Re} g)'(c)$이고 $\operatorname{Im}\bigl(g'(c)\bigr) = (\operatorname{Im} g)'(c)$인 복소수 하나이다. $g$가 $c$에서 미분가능하지 않으면 기호 $g'(c)$를 쓰지 않는다. $A \subseteq I$일 때 $g$가 **$A$에서 미분가능하다**는 것은 정확히 $A$의 모든 원소에서 $g$가 미분가능할 때이다. $g$가 $I$에서 미분가능할 때 $g$를 **미분가능한 함수**라 하고, 이때 $t \in I$에서의 값이 $g'(t)$인 함수 $g' : I \to \mathbb{C}$를 $g$의 **도함수**라 한다. 그러면 $\operatorname{Re}(g') = (\operatorname{Re} g)'$이고 $\operatorname{Im}(g') = (\operatorname{Im} g)'$이다. 예를 들어 $I = [a, b]$이면 $c = a$나 $c = b$여도 되고, 그때 $(\operatorname{Re} g)'(c)$는 [[derivative]]의 정의대로 $I$ 안의 점으로만 다가가는 차분몫의 극한이다.

**연속미분가능.** $g : I \to \mathbb{C}$가 **연속미분가능하다**(continuously differentiable)는 것은 정확히 $\operatorname{Re} g$와 $\operatorname{Im} g$가 둘 다 [[continuously-differentiable]]의 뜻으로 연속미분가능할 때이다.

**기호.** 실함수의 미분계수와 같은 글자 $g'(c)$를 쓰지만, 값이 복소수인 함수 $g : I \to \mathbb{C}$에서는 이 항목의 뜻이다. 실함수 $u$를 $\iota$로 옮긴 함수에서 두 뜻이 맞는다는 것이 아래 (3)이다.

다음이 성립한다. 아래에서 $I$는 구간, $g, h : I \to \mathbb{C}$는 함수, $c$는 $I$의 원소, $w$는 복소수이다.

1. (연속) $g$가 $c$에서 미분가능하면 $g$는 $c$에서 연속이다. 따라서 미분가능한 함수는 연속이다. $g$가 연속미분가능한 것은 정확히 $g$가 미분가능한 함수이고 도함수 $g' : I \to \mathbb{C}$가 연속일 때이다. 따라서 $g$가 연속미분가능하면 $g$와 $g'$은 연속이다.
2. (제한) $J$가 구간이고 $J \subseteq I$이며 $c \in J$라 하자. $g$가 $c$에서 미분가능하면 제한 $g|_J : J \to \mathbb{C}$도 $c$에서 미분가능하고 $(g|_J)'(c) = g'(c)$이다. $g$가 연속미분가능하면 $g|_J$도 연속미분가능하고 $(g|_J)' = g'|_J$이다.
3. (실수값 함수를 옮긴 함수) $u : I \to \mathbb{R}$가 실함수이면, $\iota \circ u$가 $c$에서 미분가능한 것은 정확히 $u$가 $c$에서 미분가능할 때이고, 그때 $(\iota \circ u)'(c) = \iota\bigl(u'(c)\bigr)$이다. 또 $\iota \circ u$가 연속미분가능한 것은 정확히 $u$가 연속미분가능할 때이고, 그때 $(\iota \circ u)' = \iota \circ u'$이다.
4. (합, 차, 복소수배) $g$와 $h$가 $c$에서 미분가능하면 $g + h$, $g - h$, $wg$는 $c$에서 미분가능하고
   $$
   \begin{gathered}
   (g + h)'(c) = g'(c) + h'(c), \\
   (g - h)'(c) = g'(c) - h'(c), \\
   (wg)'(c) = w\, g'(c)
   \end{gathered}
   $$
   이다. $g$와 $h$가 연속미분가능하면 $g + h$, $g - h$, $wg$도 연속미분가능하다.
5. (곱의 법칙) $g$와 $h$가 $c$에서 미분가능하면 $gh$는 $c$에서 미분가능하고
   $$
   (gh)'(c) = g'(c)\, h(c) + g(c)\, h'(c)
   $$
   이다. $g$와 $h$가 연속미분가능하면 $gh$도 연속미분가능하다.
6. (실함수와의 합성) $J$를 구간이라 하자. [[chain-rule]]의 진술에서처럼 함수 $\varphi : J \to I$는 $J$ 위의 실함수이기도 하고, $\varphi$의 미분가능과 연속미분가능은 이 실함수로서의 것이다. $s \in J$에서 $\varphi$가 미분가능하고 $g$가 $\varphi(s)$에서 미분가능하면, 합성 $g \circ \varphi : J \to \mathbb{C}$는 $s$에서 미분가능하고
   $$
   (g \circ \varphi)'(s) = g'(\varphi(s))\, \varphi'(s)
   $$
   이다. 오른쪽은 복소수 $g'(\varphi(s))$와 실수 $\varphi'(s)$의 곱, 곧 $g'(\varphi(s))\,\iota(\varphi'(s))$이다. $\varphi$와 $g$가 연속미분가능하면 $g \circ \varphi$도 연속미분가능하다. 특히 실수 $m$, $k$에 대하여 $J$의 모든 $s$에서 $ms + k \in I$이고 $g$가 연속미분가능하면, $s$에서의 값이 $g(ms + k)$인 함수 $J \to \mathbb{C}$는 연속미분가능하고 그 도함수의 $s$에서의 값은 $m\, g'(ms + k)$이다.
7. (도함수가 $0$인 함수) $g$가 미분가능한 함수이고 $I$의 모든 $t$에서 $g'(t) = 0$이면 $g$는 상수함수이다. $g$와 $h$가 미분가능한 함수이고 $I$의 모든 $t$에서 $g'(t) = h'(t)$이면, 어떤 복소수 $C$가 있어 $I$의 모든 $t$에서 $g(t) = h(t) + C$이다.
8. (지수함수) $c_0$을 복소수라 하고 $x = \operatorname{Re} c_0$, $y = \operatorname{Im} c_0$으로 두자. 실수 $t$에서의 값이 $\exp(c_0 t)$, 곧 $\exp(c_0\, \iota(t))$인 함수 $\mathbb{R} \to \mathbb{C}$는 연속미분가능하고, 모든 실수 $t$에서
   $$
   \begin{gathered}
   \operatorname{Re} \exp(c_0 t) = \exp(xt) \cos(yt), \\
   \operatorname{Im} \exp(c_0 t) = \exp(xt) \sin(yt)
   \end{gathered}
   $$
   이며 그 도함수의 $t$에서의 값은 $c_0 \exp(c_0 t)$이다. (2)에 의해 이 함수를 구간 $I$로 제한한 것도 연속미분가능하고 도함수의 값은 같다. 특히 $t$에서의 값이 $\exp(it)$인 함수의 도함수의 값은 $i \exp(it)$이다.
9. (일차함수와 원) $z$, $u$, $a$를 복소수, $r$을 실수라 하자. $t$에서의 값이 $z + tu$인 함수 $I \to \mathbb{C}$는 연속미분가능하고 그 도함수는 $I$ 위의 값이 $u$인 상수함수이다. 특히 ($u = 0$) $I$ 위의 상수함수는 연속미분가능하고 도함수는 값이 $0$인 상수함수이며, 복소수 $w_1$에 대하여 $t$에서의 값이 $z + t(w_1 - z)$인 함수의 도함수는 값이 $w_1 - z$인 상수함수이다. $t$에서의 값이 $a + r \exp(it)$인 함수 $I \to \mathbb{C}$는 연속미분가능하고 그 도함수의 $t$에서의 값은 $i r \exp(it)$이다.
:::

:::english
Intervals are those of the entry on intervals; real-valued functions, functions defined by their values, constant functions, and restrictions are those of the entry on real-valued functions. Differentiability, derivatives at a point, "differentiable on $A$", differentiable functions, and derivatives are those of the entry on the derivative; continuity of real-valued functions is that of the entry on continuous functions, and continuous differentiability of real-valued functions is that of the entry on continuously differentiable functions. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention of writing real numbers in place of complex numbers, and the form $a + bi$ are those of the entry on the field of complex numbers; the complex exponential $\exp$, the real exponential function, and cosine and sine are those of their entries. An interval $I$ carries the subspace metric of the usual metric of $\mathbb{R}$ and its metric topology, and $\mathbb{C}$ carries the metric of the complex plane and its metric topology. Continuity of a function $g : I \to \mathbb{C}$ and "continuous at $c$" are those of the entry on continuous maps between topological spaces. For functions $g, h : I \to \mathbb{C}$ and a complex number $w$, the functions $\operatorname{Re} g$, $\operatorname{Im} g : I \to \mathbb{R}$ and $g + h$, $g - h$, $gh$, $wg : I \to \mathbb{C}$ are those of the opening paragraph of the entry on continuity of the complex operations with $Z = I$. For a real-valued function $u : I \to \mathbb{R}$, $\iota \circ u : I \to \mathbb{C}$ is the composition.

**Differentiability and the derivative at a point.** Let $I$ be an interval, $g : I \to \mathbb{C}$ a function, and $c$ an element of $I$. We say $g$ is **differentiable at $c$** exactly when the two real-valued functions $\operatorname{Re} g$ and $\operatorname{Im} g$ are both differentiable at $c$ in the sense of the entry on the derivative. In that case the complex number
$$
g'(c) = (\operatorname{Re} g)'(c) + (\operatorname{Im} g)'(c)\, i
$$
is called the **derivative** of $g$ at $c$. By item (4) of the entry on the field of complex numbers, it is the one complex number with $\operatorname{Re}\bigl(g'(c)\bigr) = (\operatorname{Re} g)'(c)$ and $\operatorname{Im}\bigl(g'(c)\bigr) = (\operatorname{Im} g)'(c)$. If $g$ is not differentiable at $c$, the symbol $g'(c)$ is not used. For $A \subseteq I$, $g$ is **differentiable on $A$** exactly when $g$ is differentiable at every element of $A$. When $g$ is differentiable on $I$ we call $g$ a **differentiable function**, and the function $g' : I \to \mathbb{C}$ whose value at $t \in I$ is $g'(t)$ is the **derivative** of $g$. Then $\operatorname{Re}(g') = (\operatorname{Re} g)'$ and $\operatorname{Im}(g') = (\operatorname{Im} g)'$. For example, if $I = [a, b]$, then $c = a$ or $c = b$ is allowed, and then $(\operatorname{Re} g)'(c)$ is, as in the definition of the derivative, the limit of difference quotients approaching only through points of $I$.

**Continuous differentiability.** $g : I \to \mathbb{C}$ is **continuously differentiable** exactly when $\operatorname{Re} g$ and $\operatorname{Im} g$ are both continuously differentiable in the sense of the entry on continuously differentiable functions.

**Notation.** The same symbol $g'(c)$ as for the derivative of a real-valued function is used, but for a function $g : I \to \mathbb{C}$ with complex values it has the meaning of this entry. Item (3) below says the two meanings agree for a real-valued function $u$ carried over by $\iota$.

The following hold. Below, $I$ is an interval, $g, h : I \to \mathbb{C}$ are functions, $c$ is an element of $I$, and $w$ is a complex number.

1. (Continuity) If $g$ is differentiable at $c$, then $g$ is continuous at $c$. Hence a differentiable function is continuous. $g$ is continuously differentiable exactly when $g$ is a differentiable function and its derivative $g' : I \to \mathbb{C}$ is continuous. Hence if $g$ is continuously differentiable, then $g$ and $g'$ are continuous.
2. (Restriction) Let $J$ be an interval with $J \subseteq I$ and $c \in J$. If $g$ is differentiable at $c$, then the restriction $g|_J : J \to \mathbb{C}$ is differentiable at $c$ and $(g|_J)'(c) = g'(c)$. If $g$ is continuously differentiable, then so is $g|_J$, and $(g|_J)' = g'|_J$.
3. (Real-valued functions carried over) If $u : I \to \mathbb{R}$ is a real-valued function, then $\iota \circ u$ is differentiable at $c$ exactly when $u$ is differentiable at $c$, and then $(\iota \circ u)'(c) = \iota\bigl(u'(c)\bigr)$. Also $\iota \circ u$ is continuously differentiable exactly when $u$ is, and then $(\iota \circ u)' = \iota \circ u'$.
4. (Sum, difference, complex multiple) If $g$ and $h$ are differentiable at $c$, then $g + h$, $g - h$, $wg$ are differentiable at $c$ and
   $$
   \begin{gathered}
   (g + h)'(c) = g'(c) + h'(c), \\
   (g - h)'(c) = g'(c) - h'(c), \\
   (wg)'(c) = w\, g'(c).
   \end{gathered}
   $$
   If $g$ and $h$ are continuously differentiable, then so are $g + h$, $g - h$, $wg$.
5. (Product rule) If $g$ and $h$ are differentiable at $c$, then $gh$ is differentiable at $c$ and
   $$
   (gh)'(c) = g'(c)\, h(c) + g(c)\, h'(c).
   $$
   If $g$ and $h$ are continuously differentiable, then so is $gh$.
6. (Composition with a real function) Let $J$ be an interval. As in the statement of the chain rule, a function $\varphi : J \to I$ is also a real-valued function on $J$, and differentiability and continuous differentiability of $\varphi$ are as a real-valued function. If $\varphi$ is differentiable at $s \in J$ and $g$ is differentiable at $\varphi(s)$, then the composition $g \circ \varphi : J \to \mathbb{C}$ is differentiable at $s$ and
   $$
   (g \circ \varphi)'(s) = g'(\varphi(s))\, \varphi'(s).
   $$
   The right side is the product of the complex number $g'(\varphi(s))$ and the real number $\varphi'(s)$, that is, $g'(\varphi(s))\,\iota(\varphi'(s))$. If $\varphi$ and $g$ are continuously differentiable, then so is $g \circ \varphi$. In particular, for real numbers $m$, $k$ with $ms + k \in I$ for all $s \in J$, if $g$ is continuously differentiable, then the function $J \to \mathbb{C}$ whose value at $s$ is $g(ms + k)$ is continuously differentiable and the value of its derivative at $s$ is $m\, g'(ms + k)$.
7. (Functions with zero derivative) If $g$ is a differentiable function and $g'(t) = 0$ for all $t \in I$, then $g$ is a constant function. If $g$ and $h$ are differentiable functions and $g'(t) = h'(t)$ for all $t \in I$, then there is a complex number $C$ with $g(t) = h(t) + C$ for all $t \in I$.
8. (Exponential function) Let $c_0$ be a complex number and put $x = \operatorname{Re} c_0$, $y = \operatorname{Im} c_0$. The function $\mathbb{R} \to \mathbb{C}$ whose value at a real number $t$ is $\exp(c_0 t)$, that is, $\exp(c_0\, \iota(t))$, is continuously differentiable, for every real $t$
   $$
   \begin{gathered}
   \operatorname{Re} \exp(c_0 t) = \exp(xt) \cos(yt), \\
   \operatorname{Im} \exp(c_0 t) = \exp(xt) \sin(yt),
   \end{gathered}
   $$
   and the value of its derivative at $t$ is $c_0 \exp(c_0 t)$. By (2), its restriction to an interval $I$ is also continuously differentiable with the same derivative values. In particular, the derivative of the function with value $\exp(it)$ at $t$ has value $i \exp(it)$.
9. (Affine functions and circles) Let $z$, $u$, $a$ be complex numbers and $r$ a real number. The function $I \to \mathbb{C}$ whose value at $t$ is $z + tu$ is continuously differentiable and its derivative is the constant function on $I$ with value $u$. In particular ($u = 0$), a constant function on $I$ is continuously differentiable with derivative the constant function with value $0$, and for a complex number $w_1$ the derivative of the function with value $z + t(w_1 - z)$ at $t$ is the constant function with value $w_1 - z$. The function $I \to \mathbb{C}$ whose value at $t$ is $a + r \exp(it)$ is continuously differentiable and the value of its derivative at $t$ is $i r \exp(it)$.
:::

## 직관

실수 $t$를 시각으로, $g(t)$를 그 시각에 평면 위에 있는 점으로 보면 $g$는 평면 위를 움직이는 점입니다. 동서 방향의 좌표 $\operatorname{Re} g(t)$와 남북 방향의 좌표 $\operatorname{Im} g(t)$가 각각 실함수이므로, 두 좌표의 빠르기를 따로 재어 한 복소수로 묶은 것이 $g'(t)$입니다. 비유에서 "두 좌표가 모두 빠르기를 갖는다"가 정의의 "$\operatorname{Re} g$와 $\operatorname{Im} g$가 둘 다 미분가능하다"에 해당합니다.

그래서 이 항목의 성질은 모두 실함수의 성질을 두 좌표에 따로 쓴 것입니다. 다만 복소수배와 곱에서는 두 좌표가 섞입니다. 예컨대 $(i g)(t)$의 실수부는 $-\operatorname{Im} g(t)$이므로, $(ig)' = i g'$을 보려면 실수부와 허수부를 바꿔 가며 맞춰 봐야 합니다((4)). 지수함수 $\exp(c_0 t)$는 $\exp(xt)$와 $\cos(yt)$, $\sin(yt)$의 곱으로 나뉘므로 실함수의 곱의 법칙과 연쇄법칙으로 미분합니다((8)).

실함수와 다른 점도 있습니다. 평균값 정리, 곧 "$g(b) - g(a) = g'(c)(b - a)$인 $c$가 있다"는 꼴은 성립하지 않을 수 있습니다(아래 반례). 실수부에서 고른 점과 허수부에서 고른 점이 서로 다를 수 있기 때문입니다. 그래서 이 항목은 평균값 정리를 싣지 않고, 도함수가 $0$이면 상수라는 것((7))만 두 좌표에서 따로 얻습니다.

## 증명

:::idea
모든 번호는 실수부와 허수부에 실함수의 해당 사실을 쓰고, [[complex-number]]의 (2)로 실수부와 허수부를 다시 한 복소수로 묶는 것이다. 연속은 실함수의 연속과 위상의 연속이 같다는 것과, 복소수값 함수의 연속을 실수부와 허수부로 판정하는 것으로 옮긴다.
:::

:::hint
(4)의 복소수배에서는 $\operatorname{Re}(wg) = (\operatorname{Re} w)\operatorname{Re} g - (\operatorname{Im} w)\operatorname{Im} g$로 적고, 실수 상수배와 차의 미분을 씁니다.
:::

:::hint
(8)에서는 $c_0 t$를 $\iota(xt) + \iota(yt) i$로 적고 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (4)와 [[cosine-and-sine|오일러 공식]]으로 실수부와 허수부를 구합니다.
:::

:::proof
"복소수 (n)", "복소수체 (n)", "연산 연속 (n)"은 [[complex-number]], [[complex-field]], [[continuity-of-complex-operations|복소수 연산의 연속]]의 번호이고, "미분 (n)", "미분 법칙 (n)", "연쇄 (n)", "연속미분 (n)"은 [[derivative]], [[derivative-rules|미분의 법칙]], [[chain-rule]], [[continuously-differentiable]]의 번호이다. 함수의 같음은 값의 같음([[real-valued-function]]의 (2)와 복소수 (1))으로 확인한다.

**이 항목의 정의에 관하여.** $t \in I$이면 정의에 의해 $\operatorname{Re}(g'(t)) = (\operatorname{Re} g)'(t)$이므로 두 함수 $\operatorname{Re}(g')$와 $(\operatorname{Re} g)'$은 모든 점에서 값이 같아 같은 함수이다. 허수부도 같다.

**1의 증명.** $g$가 $c$에서 미분가능하면 $\operatorname{Re} g$, $\operatorname{Im} g$가 $c$에서 미분가능하므로 [[differentiable-implies-continuous|미분가능하면 연속]]의 (1)에 의해 두 실함수는 [[continuous-function]]의 뜻으로 $c$에서 연속이다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)을 $S = I$에 쓰면 두 실함수는 위상의 뜻으로도 $c$에서 연속이고, 연산 연속 (1)을 $Z = I$에 쓰면 $g$는 $c$에서 연속이다. 이것이 모든 $c$에서 성립하면 $g$는 연속이다.

$g$가 연속미분가능하면 연속미분 (1)의 정의에 의해 $\operatorname{Re} g$, $\operatorname{Im} g$는 미분가능한 함수이므로 $g$는 미분가능한 함수이고, $(\operatorname{Re} g)' = \operatorname{Re}(g')$와 $(\operatorname{Im} g)' = \operatorname{Im}(g')$은 연속함수이다. 앞 문단처럼 [[continuity-agrees-with-analysis]]의 (3)과 연산 연속 (1)에 의해 $g'$은 연속이다. 거꾸로 $g$가 미분가능한 함수이고 $g'$이 연속이면, 연산 연속 (1)에 의해 $\operatorname{Re}(g') = (\operatorname{Re} g)'$과 $\operatorname{Im}(g') = (\operatorname{Im} g)'$은 위상의 뜻으로 연속이고 [[continuity-agrees-with-analysis]]의 (3)에 의해 해석학 입문의 뜻으로도 연속함수이므로, $\operatorname{Re} g$와 $\operatorname{Im} g$는 연속미분가능하다. 마지막 문장은 첫 문단과 이 문단에서 나온다.

**2의 증명.** $J$의 모든 $t$에서 $\operatorname{Re}(g|_J)(t) = \operatorname{Re} g(t) = (\operatorname{Re} g)|_J(t)$이므로 $\operatorname{Re}(g|_J) = (\operatorname{Re} g)|_J$이고 허수부도 같다. 미분 (2)에 의해 $(\operatorname{Re} g)|_J$, $(\operatorname{Im} g)|_J$는 $c$에서 미분가능하고 미분계수는 $(\operatorname{Re} g)'(c)$, $(\operatorname{Im} g)'(c)$이다. 따라서 $g|_J$는 $c$에서 미분가능하고 $(g|_J)'(c) = g'(c)$이다. 연속미분가능한 경우는 연속미분 (2)를 두 실함수에 쓰고, 도함수의 값이 점마다 같으므로 $(g|_J)' = g'|_J$이다.

**3의 증명.** 복소수체 (2)의 (ii)에 의해 $I$의 모든 $t$에서 $\operatorname{Re}\iota(u(t)) = u(t)$, $\operatorname{Im}\iota(u(t)) = 0$이므로 $\operatorname{Re}(\iota \circ u) = u$이고 $\operatorname{Im}(\iota \circ u)$는 $I$ 위의 값이 $0$인 상수함수이다. 상수함수는 미분 (1)에 의해 모든 점에서 미분가능하고 미분계수가 $0$이며, 연속미분 (4)에 의해 연속미분가능하다. 따라서 $\iota \circ u$가 $c$에서 미분가능한 것은 정확히 $u$가 $c$에서 미분가능할 때이고, 그때 $(\iota \circ u)'(c) = u'(c) + 0i$이며 복소수체 (4)에 의해 이것은 $\iota(u'(c))$이다. 같은 까닭으로 $\iota \circ u$가 연속미분가능한 것은 정확히 $u$가 연속미분가능할 때이고, 그때 모든 $t$에서 $(\iota \circ u)'(t) = \iota(u'(t))$이다.

**4의 증명.** 복소수 (2)와 복소수체 (1)에 의해 $\operatorname{Re}(g + h) = \operatorname{Re} g + \operatorname{Re} h$, $\operatorname{Re}(g - h) = \operatorname{Re} g - \operatorname{Re} h$이고 허수부도 같다. 미분 법칙 (2), (3)에 의해 이 실함수들은 $c$에서 미분가능하고 미분계수는 $(\operatorname{Re} g)'(c) \pm (\operatorname{Re} h)'(c) = \operatorname{Re}(g'(c) \pm h'(c))$이며 허수부도 같으므로 앞의 두 등식이 나온다. 복소수배: $p = \operatorname{Re} w$, $q = \operatorname{Im} w$로 두면 복소수 (2)에 의해
$$
\begin{aligned}
\operatorname{Re}(wg) &= p \operatorname{Re} g - q \operatorname{Im} g, \\
\operatorname{Im}(wg) &= p \operatorname{Im} g + q \operatorname{Re} g
\end{aligned}
$$
이다. 미분 법칙 (1), (2), (3)에 의해 두 실함수는 $c$에서 미분가능하고 미분계수는 $p(\operatorname{Re} g)'(c) - q(\operatorname{Im} g)'(c)$와 $p(\operatorname{Im} g)'(c) + q(\operatorname{Re} g)'(c)$이다. 복소수 (2)에 의해 이것은 $w\,g'(c)$의 실수부와 허수부이므로 $(wg)'(c) = w\,g'(c)$이다. 연속미분가능한 경우는 연속미분 (3)을 같은 식에 쓴다.

**5의 증명.** 복소수 (2)에 의해
$$
\begin{aligned}
\operatorname{Re}(gh) &= \operatorname{Re} g \operatorname{Re} h - \operatorname{Im} g \operatorname{Im} h, \\
\operatorname{Im}(gh) &= \operatorname{Re} g \operatorname{Im} h + \operatorname{Im} g \operatorname{Re} h
\end{aligned}
$$
이다. 미분 법칙 (2), (3), (4)에 의해 두 실함수는 $c$에서 미분가능하다. 줄여서 $A = \operatorname{Re} g(c)$, $B = \operatorname{Im} g(c)$, $C = \operatorname{Re} h(c)$, $D = \operatorname{Im} h(c)$, $A' = (\operatorname{Re} g)'(c)$, $B' = (\operatorname{Im} g)'(c)$, $C' = (\operatorname{Re} h)'(c)$, $D' = (\operatorname{Im} h)'(c)$로 쓰면 미분계수는
$$
\begin{aligned}
&(\operatorname{Re}(gh))'(c) \\
&\quad = A'C + AC' - B'D - BD', \\
&(\operatorname{Im}(gh))'(c) \\
&\quad = A'D + AD' + B'C + BC'
\end{aligned}
$$
이다. 한편 복소수 (2)에 의해 $g'(c)h(c)$의 실수부는 $A'C - B'D$, 허수부는 $A'D + B'C$이고, $g(c)h'(c)$의 실수부는 $AC' - BD'$, 허수부는 $AD' + BC'$이다. 복소수 (2)로 더하면 위의 두 값과 같으므로 $(gh)'(c) = g'(c)h(c) + g(c)h'(c)$이다. 연속미분가능한 경우는 연속미분 (3)을 같은 식에 쓴다.

**6의 증명.** $J$의 모든 $s$에서 $\operatorname{Re}(g \circ \varphi)(s) = \operatorname{Re} g(\varphi(s)) = ((\operatorname{Re} g) \circ \varphi)(s)$이므로 $\operatorname{Re}(g \circ \varphi) = (\operatorname{Re} g) \circ \varphi$이고 허수부도 같다. 연쇄 (1)에 의해 이 두 실함수는 $s$에서 미분가능하고 미분계수는 $(\operatorname{Re} g)'(\varphi(s))\,\varphi'(s)$와 $(\operatorname{Im} g)'(\varphi(s))\,\varphi'(s)$이다. 복소수체 (2)의 (ii)에 의해 이것은 $g'(\varphi(s))\,\iota(\varphi'(s))$의 실수부와 허수부이다. 연속미분가능한 경우는 연속미분 (5)를 두 실함수에 쓴다. 마지막 문장: 미분 (1)과 연속미분 (4)에 의해 $\varphi(s) = ms + k$로 정한 $\varphi : J \to I$는 연속미분가능하고 모든 점에서 $\varphi'(s) = m$이므로, 앞 문장들에 의해 $g \circ \varphi$는 연속미분가능하고 $s$에서의 도함수의 값은 $g'(ms + k)\,\iota(m) = m\,g'(ms + k)$이다(복소수체 (3)의 약속).

**7의 증명.** 모든 $t$에서 $(\operatorname{Re} g)'(t) = \operatorname{Re}(g'(t)) = \operatorname{Re} 0 = 0$이고 허수부도 같으므로, [[derivative-and-monotonicity|도함수와 증가·감소]]의 (1)에 의해 $\operatorname{Re} g$와 $\operatorname{Im} g$는 상수함수이다. 그 값을 $p$, $q$라 하면 복소수 (1)에 의해 모든 $t$에서 $g(t) = p + qi$이므로 $g$는 상수함수이다. 둘째 문장: (4)에 의해 $g - h$는 미분가능한 함수이고 모든 $t$에서 $(g - h)'(t) = g'(t) - h'(t) = 0$이므로, 첫 문장에 의해 $g - h$는 값이 어떤 복소수 $C$인 상수함수이고 $g(t) = h(t) + C$이다.

**8의 증명.** 이 함수를 $E : \mathbb{R} \to \mathbb{C}$라 하고 $t$를 실수라 하자. 복소수체 (2)의 (ii)와 (4)에 의해 $c_0\,\iota(t) = \iota(t) c_0$의 실수부는 $tx$, 허수부는 $ty$이므로 $c_0 t = \iota(xt) + \iota(yt) i$이다([[real-number-arithmetic]]의 곱셈의 교환법칙). [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (4)와 [[cosine-and-sine|코사인과 사인]]의 (1)에 의해
$$
\begin{aligned}
&\exp(c_0 t) = \iota(\exp(xt)) \exp(i\,yt) \\
&\quad = \iota(\exp(xt))\,\bigl(\iota(\cos(yt)) \\
&\qquad\quad + \iota(\sin(yt))\, i\bigr)
\end{aligned}
$$
이고, 복소수체 (2)의 (ii)에 의해 진술의 두 식이 나온다. 이제 실함수 $U(t) = \exp(xt)$, $V(t) = \cos(yt)$, $W(t) = \sin(yt)$를 보자. 미분 (1)에 의해 $t$에서의 값이 $xt$, $yt$인 두 함수는 미분가능한 함수 $\mathbb{R} \to \mathbb{R}$이고 도함수의 값은 $x$, $y$이다. [[exponential-function|지수함수]]의 (3), [[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]]의 (1)과 연쇄 (2)에 의해 $U$, $V$, $W$는 미분가능한 함수이고
$$
\begin{gathered}
U'(t) = x \exp(xt), \\
V'(t) = -y \sin(yt), \\
W'(t) = y \cos(yt)
\end{gathered}
$$
이다. 진술의 두 식에 의해 $\operatorname{Re} E = UV$, $\operatorname{Im} E = UW$이고, 미분 법칙 (4)에 의해 두 실함수는 미분가능한 함수이며
$$
\begin{aligned}
(UV)'(t) &= x \exp(xt)\cos(yt) \\
&\qquad - y \exp(xt)\sin(yt), \\
(UW)'(t) &= x \exp(xt)\sin(yt) \\
&\qquad + y \exp(xt)\cos(yt)
\end{aligned}
$$
이다. 한편 복소수 (2)에 의해 $c_0 \exp(c_0 t)$의 실수부는 $x \operatorname{Re}\exp(c_0 t) - y \operatorname{Im}\exp(c_0 t)$, 허수부는 $x \operatorname{Im}\exp(c_0 t) + y \operatorname{Re}\exp(c_0 t)$이고, 진술의 두 식을 넣으면 위의 두 값과 같다. 따라서 $E$는 미분가능한 함수이고 $E'(t) = c_0 E(t)$이다. (1)에 의해 $E$는 연속이고, 연산 연속 (3)에 의해 $E' = c_0 E$도 연속이므로 (1)에 의해 $E$는 연속미분가능하다. 제한에 관한 문장은 (2)이고, 마지막 문장은 $c_0 = i$로 둔 것이다.

**9의 증명.** 복소수 (2)와 복소수체 (2)의 (ii)에 의해 $z + tu$의 실수부는 $\operatorname{Re} z + t\operatorname{Re} u$이고 허수부는 $\operatorname{Im} z + t \operatorname{Im} u$이다. 연속미분 (4)에 의해 이 두 실함수는 연속미분가능하고 도함수는 값이 $\operatorname{Re} u$, $\operatorname{Im} u$인 상수함수이므로, 이 함수는 연속미분가능하고 도함수의 값은 복소수 (1)에 의해 언제나 $\operatorname{Re} u + (\operatorname{Im} u) i = u$이다. $u = 0$인 경우와 $u = w_1 - z$인 경우는 이것을 그대로 쓴 것이다. 원: (8)의 $c_0 = i$를 $I$로 제한한 함수는 연속미분가능하고 도함수의 값은 $i\exp(it)$이다. (4)에 의해 그것의 $\iota(r)$배는 연속미분가능하고 도함수의 값은 $r\,i\exp(it)$이며, 값이 $a$인 상수함수(앞 문장, 도함수 $0$)와의 합은 다시 (4)에 의해 연속미분가능하고 도함수의 값은 $0 + i r \exp(it) = i r\exp(it)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[t exp(it) 의 도함수]
$t$에서의 값이 $t\exp(it)$인 함수 $g : \mathbb{R} \to \mathbb{C}$를 봅시다. 이것은 $t$에서의 값이 $\iota(t)$인 함수 $\iota \circ i_{\mathbb{R}}$와 $t$에서의 값이 $\exp(it)$인 함수의 곱입니다. (3)과 [[derivative]]의 (1)에 의해 앞의 것의 도함수의 값은 $\iota(1) = 1$이고, (8)에 의해 뒤의 것의 도함수의 값은 $i\exp(it)$입니다. (5)에 의해
$$
\begin{aligned}
g'(t) &= \exp(it) + i t \exp(it) \\
&= (1 + it)\exp(it)
\end{aligned}
$$
입니다. 예컨대 $t = 0$에서는 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $g'(0) = 1$입니다. 실수부로 확인하면 [[complex-field|복소수체]]의 (2)의 (ii)와 (8)에 의해 $\operatorname{Re} g(t) = t\cos t$이고, 실함수의 곱의 법칙으로 $(\operatorname{Re} g)'(t) = \cos t - t\sin t$이며, 이것은 $(1 + it)(\cos t + i\sin t)$의 실수부 $\cos t - t \sin t$와 같습니다.
:::

:::counterexample[닫힌구간 [0, 2π] 위의 exp(it) 에서 평균값 정리의 꼴이 성립하지 않는 예]
$t$에서의 값이 $\exp(it)$인 함수 $g : [0, 2\pi] \to \mathbb{C}$를 봅시다. [[complex-exponential-function|복소 지수함수]]의 (3)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $g(0) = 1 = g(2\pi)$이므로 $g(2\pi) - g(0) = 0$입니다. 한편 (8)과 (2)에 의해 모든 $t$에서 $g'(t) = i\exp(it)$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (3), (5)와 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)에 의해 $|g'(t)| = |i|\,|\exp(it)| = 1$이라 $g'(t) \ne 0$입니다. 그러면 $2\pi \ne 0$이므로 $g'(t)\,(2\pi - 0) \ne 0$이고, $g(2\pi) - g(0) = g'(t)(2\pi - 0)$인 $t$는 없습니다. 실수부와 허수부로 나누어 보면, 이런 $t$는 $\operatorname{Re} g'(t) = -\sin t$와 $\operatorname{Im} g'(t) = \cos t$가 둘 다 $0$인 점이어야 합니다. 실수부 $\cos$와 허수부 $\sin$에 따로 실함수의 평균값 정리를 쓰면 각각 그런 점이 하나씩 나오지만, [[cosine-and-sine|코사인과 사인]]의 (4)의 $(\cos t)^2 + (\sin t)^2 = 1$ 때문에 두 조건을 함께 만족하는 실수 $t$는 없습니다.
:::

:::counterexample[0 에서 허수부만 미분가능하지 않은 t + |t| i]
$t$에서의 값이 $t + |t|\,i$인 함수 $g : \mathbb{R} \to \mathbb{C}$를 봅시다. $\operatorname{Re} g$는 항등함수라 $0$에서 미분가능하지만, $\operatorname{Im} g$는 절댓값 함수라 [[derivative]]의 (3)에 의해 $0$에서 미분가능하지 않습니다. [[complex-field|복소수체]]의 (4)에 의해 $\operatorname{Re} g(t) = t$, $\operatorname{Im} g(t) = |t|$이고, 정의는 두 실함수가 모두 미분가능하기를 요구하므로 $g$는 $0$에서 미분가능하지 않습니다. $0$이 아닌 $t$에서는 두 실함수가 모두 미분가능하므로 $g$는 $t$에서 미분가능합니다.
:::

## 확인 질문

:::check[$t$에서의 값이 $(1 + it)^2$인 함수 $\mathbb{R} \to \mathbb{C}$의 도함수는?]
(9)에 의해 $t$에서의 값이 $1 + it$인 함수의 도함수의 값은 $i$이고, (5)를 같은 함수 둘에 쓰면 도함수의 $t$에서의 값은 $i(1 + it) + (1 + it)i = 2i(1 + it) = 2i - 2t$입니다. 전개해서 확인하면 $(1 + it)^2 = (1 - t^2) + 2t\,i$이고, 실수부와 허수부의 도함수는 $-2t$와 $2$이므로 도함수의 값은 $-2t + 2i$로 같습니다.
:::

:::check[실수부가 $\cos t$이고 허수부가 $-\sin t$인 함수 $\mathbb{R} \to \mathbb{C}$의 $t$에서의 미분계수는?]
(8)에서 $c_0 = -i$로 두면 $x = 0$, $y = -1$이고, [[exponential-function|지수함수]]의 (1)의 $\exp(0) = 1$과 [[cosine-and-sine|코사인과 사인]]의 (3)에 의해 $\exp(-it)$의 실수부는 $\cos(-t) = \cos t$, 허수부는 $\sin(-t) = -\sin t$입니다. 따라서 이 함수는 $t$에서의 값이 $\exp(-it)$인 함수이고 미분계수는 $-i\exp(-it) = -i(\cos t - i \sin t) = -\sin t - i\cos t$입니다. 실수부와 허수부를 직접 미분한 $-\sin t$와 $-\cos t$와 같습니다.
:::
