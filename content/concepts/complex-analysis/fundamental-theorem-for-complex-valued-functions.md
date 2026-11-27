---
title: 복소수값 함수의 미적분의 기본정리
title_en: Fundamental Theorem of Calculus for Complex-Valued Functions
aliases: [복소수값 함수의 미적분의 기본정리, 복소수값 함수의 치환적분, 지수함수 exp(imt) 의 적분, fundamental theorem of calculus for complex-valued functions, substitution for complex-valued integrals]
kind: theorem
field: complex-analysis
msc: ["30", "26A42"]
level: undergrad
summary: "실변수 복소수값 함수에 대하여, 미분가능한 G 의 도함수가 두 점 사이에서 적분가능하면 그 적분은 G 의 끝값의 차이고, 연속인 g 의 적분을 위끝의 함수로 본 것은 연속미분가능하며 도함수가 g 이다. 치환적분과 일차 치환, 실변수 t 에서의 exp(ct) 의 적분과, 정수 m 에 대한 0 부터 2π 까지의 exp(imt) 의 적분을 함께 진술한다."
requires: [real-number-arithmetic, interval, real-valued-function, oriented-integral, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form, change-of-variables, continuously-differentiable, continuity-agrees-with-analysis, recursion-theorem, complex-number, complex-field, power-of-a-complex-number, continuity-of-complex-operations, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, definition-of-pi, derivatives-of-cosine-and-sine, derivative-of-complex-valued-function, integral-of-complex-valued-function, cosine-and-sine]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Antiderivatives 절의 Theorem antiderthm 의 증명, source/sec_antiderivatives.ptx:95–106; Theorems from Calculus 부록의 Theorem fundthmcalc 와 Theorem thm_calcsubstitution, source/app_calculus.ptx:64–89, 122–134; exercises-chap4 의 I(k) 를 구하는 연습문제, source/exercises-chap4.ptx:375–402"
    checked: original
    note: "출처는 실함수의 미적분의 기본정리 Theorem fundthmcalc(app_calculus.ptx:64–89: 연속인 f 에 대해 F(x) = ∫_a^x f 는 미분가능하고 F′ = f, 그리고 F′ = f 이면 ∫_a^b f = F(b) − F(a))와 치환적분 Theorem thm_calcsubstitution(122–134: g 가 미분가능하고 g′ 이 연속이며 f : [g(a), g(b)] → ℝ 가 연속이면 ∫_a^b f(g(t))g′(t) dt = ∫_{g(a)}^{g(b)} f)을 실함수에 대해서만 적는다. 출처는 g(b) < g(a) 일 때 [g(a), g(b)] 가 무엇인지 적지 않는다. 이 항목의 (3)은 change-of-variables 의 (2)처럼 φ 의 값이 구간 I 에 들기만 하면 되는 꼴이다. 출처 Theorem antiderthm 의 증명(sec_antiderivatives.ptx:95–106)은 경로 적분이 끝값의 차라는 것을 '복소 적분의 정의와 Theorem fundthmcalc 에서 바로 나온다'고 적고, 복소수값 함수에 대한 미적분의 기본정리를 따로 진술하지 않는다. 이 항목의 (1)과 (2)는 그 단계를 실변수 복소수값 함수에 대해 진술하고 실수부와 허수부로 증명한 것이다. (4)의 (ii)는 출처 exercises-chap4.ptx:375–402 의 연습문제(I(k) = (1/2π)∫_0^{2π} e^{ikt} dt 에 대해 I(0) = 1, 0 이 아닌 정수 k 에서 I(k) = 0 을 보이고 I(1/2) 를 구하라)와 같은 내용이다. 반례 '구간 [0, π] 위의 exp(it) 의 적분이 0 이 아닌 예'는 그 연습문제의 I(1/2) 를 구하는 계산과 같은 발상(지수의 주기가 구간과 맞지 않으면 0 이 아니다)이다. 확인 질문 '$\\int_0^1 \\exp((1 + i)t)\\,dt$는?'은 (4)의 (i)를 쓰는 계산이고, 출처 exercises-chap4.ptx:236–279 의 연습문제(exp(3z) 를 여러 경로에서 적분하라)와 지수함수를 원시함수로 적분하는 발상이 같다."
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits, 11.2.3소절 Differentiation (p.149); 11.7절 The Stone–Weierstrass theorem, 11.7.3소절 연습문제 11.7.9 (p.190); 11.8절 Fourier series, 11.8.1소절 Trigonometric polynomials (p.192)"
    checked: original
    note: "(4)의 (ii)는 출처 11.8.1소절(p.192)이 e^{inx} 의 원시함수가 e^{inx}/(in) 이므로 ∫_{−π}^{π} e^{inx} dx 가 n = 0 이면 2π, 그 밖의 정수에서 0 이라고 적는 것과 같은 계산을 구간 [0, 2π] 에서 한 것이다. 출처 연습문제 11.7.9(p.190)는 ∫_{S¹} f(z) dz := ∫_0^{2π} f(e^{it}) ie^{it} dt 로 두고 0 이상인 정수 k 에서 ∫_{S¹} z^k dz = 0 을 보이게 하는데, 그 적분은 (4)의 (ii)의 m = k + 1 인 경우에 i 를 곱한 것이다. 출처 11.2.3소절(p.149)은 복소수값 함수의 미분을 실수부와 허수부로 다시 적고, 그 뒤 정리의 증명이 '실함수의 해당 정리를 u 와 v 에 쓰는 것'이라고 적는다. 이 항목의 증명 방식도 같다. 출처는 복소수값 함수의 미적분의 기본정리와 치환적분을 명제로 적지 않는다(11.1–11.2절에서 'fundamental theorem', 'antiderivative', 'substitution', 'change of variables' 를 줄을 이어 찾아 0건이었고, 11.1.4·11.2.4소절 연습문제를 처음부터 읽었다)."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예·확인 질문의 계산, 반례 제목). 독립 검토 없음."
added: 2026-11-27
---

:::statement
구간은 [[interval]]의 것이고, 실함수의 미분가능, 미분가능한 함수, 연속미분가능은 [[derivative]]와 [[continuously-differentiable]]의 것이다. 실변수 복소수값 함수의 미분가능, 미분계수, 미분가능한 함수, 도함수, 연속미분가능은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 것이고, 복소수값 함수의 적분, "사이에서 적분가능", 방향 있는 적분과 적분 변수의 약속은 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 것이다. "사이에 있다"는 [[oriented-integral]]의 것이다. 복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소 지수함수 $\exp$는 [[complex-exponential-function]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다. 구간과 $\mathbb{C}$의 위상과 함수 $I \to \mathbb{C}$의 연속은 [[derivative-of-complex-valued-function]]의 것과 같다.

1. (첫째 꼴) $I$를 구간, $G : I \to \mathbb{C}$를 미분가능한 함수라 하고 $\alpha$, $\beta$를 $I$의 원소라 하자(순서와 같음은 아무래도 좋다). 도함수 $G'$이 $\alpha$와 $\beta$ 사이에서 적분가능하면
   $$
   \int_\alpha^\beta G' = G(\beta) - G(\alpha)
   $$
   이다. $G$가 연속미분가능하면 $G'$은 $I$의 어느 두 점 사이에서도 적분가능하므로 이 식이 $I$의 모든 원소 $\alpha$, $\beta$에서 성립한다. 특히 $a < b$이고 $G : [a, b] \to \mathbb{C}$가 연속미분가능하면 $\int_a^b G' = G(b) - G(a)$이다.
2. (둘째 꼴) $I$를 구간, $g : I \to \mathbb{C}$를 연속함수, $p$를 $I$의 원소라 하자. $I$의 각 원소 $t$에서 $\int_p^t g$는 복소수 하나로 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $F(t) = \int_p^t g$로 정한 함수 $F : I \to \mathbb{C}$가 있다. $F$는 연속미분가능하고 $F' = g$이며, $F(p) = 0$이고, $I$의 모든 원소 $x$, $y$에서 $F(x) - F(y) = \int_y^x g$이다.
3. (치환적분) $a < b$이고 $\varphi : [a, b] \to \mathbb{R}$가 연속미분가능하다고 하자. $I$가 구간이고 $[a, b]$의 모든 $x$에서 $\varphi(x) \in I$이며 $g : I \to \mathbb{C}$가 연속이면, $x$에서의 값이 $g(\varphi(x))\,\varphi'(x)$인 함수 $[a, b] \to \mathbb{C}$는 연속이고 적분가능하며
   $$
   \int_a^b g(\varphi(x))\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} g
   $$
   이다. 왼쪽의 $g(\varphi(x))\,\varphi'(x)$는 복소수 $g(\varphi(x))$와 실수 $\varphi'(x)$의 곱이고, 오른쪽은 방향 있는 적분이다($\varphi(b) < \varphi(a)$이거나 $\varphi(a) = \varphi(b)$여도 된다). 특히 (**일차 치환**) 실수 $m$, $k$에 대하여 $I$가 구간이고 $g : I \to \mathbb{C}$가 연속이며 $[a, b]$의 모든 $x$에서 $mx + k \in I$이면
   $$
   \int_a^b m\,g(mx + k)\,dx = \int_{ma + k}^{mb + k} g
   $$
   이다.
4. (지수함수의 적분)
   - (i) $c_0$이 $0$이 아닌 복소수이고 $\alpha$, $\beta$가 실수이면, $t$에서의 값이 $\exp(c_0 t)$인 함수 $\mathbb{R} \to \mathbb{C}$는 $\alpha$와 $\beta$ 사이에서 적분가능하고
     $$
     \begin{aligned}
     &\int_\alpha^\beta \exp(c_0 t)\,dt \\
     &\quad = \frac{\exp(c_0 \beta) - \exp(c_0 \alpha)}{c_0}
     \end{aligned}
     $$
     이다.
   - (ii) $m$이 $0$이 아닌 정수이면
     $$
     \int_0^{2\pi} \exp(imt)\,dt = 0
     $$
     이고, $m = 0$이면 $\int_0^{2\pi} \exp(imt)\,dt = 2\pi$이다. 여기서 $imt$는 $i\,\iota(m)\,\iota(t)$이다.
:::

:::english
Intervals are those of the entry on intervals, and differentiability, differentiable functions, and continuous differentiability of real-valued functions are those of the entries on the derivative and continuously differentiable functions. Differentiability, derivatives at a point, differentiable functions, derivatives, and continuous differentiability of complex-valued functions of a real variable are those of the entry on the derivative of a complex-valued function of a real variable, and the integral of a complex-valued function, "integrable between", the oriented integral, and the convention on the variable of integration are those of the entry on the integral of a complex-valued function. "Between" is that of the entry on the oriented integral. Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention of writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the complex exponential $\exp$ and the number $\pi$ are those of their entries. The topologies of intervals and of $\mathbb{C}$ and continuity of functions $I \to \mathbb{C}$ are as in the entry on the derivative of a complex-valued function of a real variable.

1. (First form) Let $I$ be an interval, $G : I \to \mathbb{C}$ a differentiable function, and $\alpha$, $\beta$ elements of $I$ (in any order, possibly equal). If the derivative $G'$ is integrable between $\alpha$ and $\beta$, then
   $$
   \int_\alpha^\beta G' = G(\beta) - G(\alpha).
   $$
   If $G$ is continuously differentiable, then $G'$ is integrable between any two points of $I$, so this equality holds for all elements $\alpha$, $\beta$ of $I$. In particular, if $a < b$ and $G : [a, b] \to \mathbb{C}$ is continuously differentiable, then $\int_a^b G' = G(b) - G(a)$.
2. (Second form) Let $I$ be an interval, $g : I \to \mathbb{C}$ a continuous function, and $p$ an element of $I$. For each element $t$ of $I$, $\int_p^t g$ is a single complex number, so by item (1) of the recursion theorem there is a function $F : I \to \mathbb{C}$ defined by $F(t) = \int_p^t g$. $F$ is continuously differentiable with $F' = g$, $F(p) = 0$, and $F(x) - F(y) = \int_y^x g$ for all elements $x$, $y$ of $I$.
3. (Substitution) Let $a < b$ and let $\varphi : [a, b] \to \mathbb{R}$ be continuously differentiable. If $I$ is an interval with $\varphi(x) \in I$ for all $x \in [a, b]$ and $g : I \to \mathbb{C}$ is continuous, then the function $[a, b] \to \mathbb{C}$ whose value at $x$ is $g(\varphi(x))\,\varphi'(x)$ is continuous and integrable, and
   $$
   \int_a^b g(\varphi(x))\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} g.
   $$
   On the left, $g(\varphi(x))\,\varphi'(x)$ is the product of the complex number $g(\varphi(x))$ and the real number $\varphi'(x)$, and the right side is an oriented integral ($\varphi(b) < \varphi(a)$ or $\varphi(a) = \varphi(b)$ is allowed). In particular (**affine substitution**), for real numbers $m$, $k$, if $I$ is an interval, $g : I \to \mathbb{C}$ is continuous, and $mx + k \in I$ for all $x \in [a, b]$, then
   $$
   \int_a^b m\,g(mx + k)\,dx = \int_{ma + k}^{mb + k} g.
   $$
4. (Integrals of exponentials)
   - (i) If $c_0$ is a nonzero complex number and $\alpha$, $\beta$ are real numbers, then the function $\mathbb{R} \to \mathbb{C}$ whose value at $t$ is $\exp(c_0 t)$ is integrable between $\alpha$ and $\beta$ and
     $$
     \begin{aligned}
     &\int_\alpha^\beta \exp(c_0 t)\,dt \\
     &\quad = \frac{\exp(c_0 \beta) - \exp(c_0 \alpha)}{c_0}
     \end{aligned}.
     $$
   - (ii) If $m$ is a nonzero integer, then
     $$
     \int_0^{2\pi} \exp(imt)\,dt = 0,
     $$
     and if $m = 0$, then $\int_0^{2\pi} \exp(imt)\,dt = 2\pi$.
     Here $imt$ is $i\,\iota(m)\,\iota(t)$.
:::

## 직관

실함수의 미적분의 기본정리는 "빠르기를 쌓으면 움직인 양이 된다"는 것입니다. 평면 위를 움직이는 점이라면 동서 방향과 남북 방향에서 따로 그렇게 되므로, 두 방향을 한 복소수로 묶어도 그대로 성립합니다((1), (2)). 치환적분도 실수부와 허수부에 따로 쓰면 되는데, 이때 곱하는 $\varphi'(x)$가 실수라 두 좌표가 섞이지 않습니다((3)).

(4)의 (ii)는 원을 한 바퀴 도는 점 $\exp(it)$의 거듭제곱을 한 바퀴에 걸쳐 쌓으면 $m \ne 0$일 때 제자리로 돌아와 $0$이 된다는 것입니다. 원시함수 $\exp(imt)/(im)$의 값이 $t = 0$과 $t = 2\pi$에서 같기 때문입니다. $m = 0$이면 점이 움직이지 않으므로 $2\pi$가 남습니다. 지수 $m$이 정수가 아니거나 구간이 한 바퀴가 아니면 끝값이 다를 수 있습니다(아래 반례).

## 증명

:::idea
(1)–(3)은 실수부와 허수부에 실함수의 미적분의 기본정리와 치환적분을 쓰고 [[complex-field]]의 (4)로 묶는다. (4)는 $\exp(c_0 t)/c_0$을 원시함수로 두고 (1)을 쓴다.
:::

:::hint
(4)의 (ii)에서 $m \ne 0$이면 $c_0 = im$은 $0$이 아니고, $\exp(c_0 \cdot 2\pi) = \exp(2\pi i)^m$입니다.
:::

:::proof
"미분 (n)", "적분 정의 (n)"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 번호이고, "복소수체 (n)"은 [[complex-field]]의 번호이다. 복소수 $p + qi$($p$, $q$ 실수)의 실수부가 $p$, 허수부가 $q$라는 것은 복소수체 (4)이다.

**1의 증명.** 미분의 정의에 의해 $\operatorname{Re} G$, $\operatorname{Im} G$는 미분가능한 함수이고 $(\operatorname{Re} G)' = \operatorname{Re}(G')$, $(\operatorname{Im} G)' = \operatorname{Im}(G')$이다. 적분 정의의 정의에 의해 이 두 실함수는 $\alpha$와 $\beta$ 사이에서 적분가능하므로, [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)에 의해
$$
\begin{aligned}
\int_\alpha^\beta \operatorname{Re}(G') &= \operatorname{Re} G(\beta) - \operatorname{Re} G(\alpha), \\
\int_\alpha^\beta \operatorname{Im}(G') &= \operatorname{Im} G(\beta) - \operatorname{Im} G(\alpha)
\end{aligned}
$$
이다. 적분 정의의 방향 있는 적분의 정의와 복소수체 (1)에 의해 $\int_\alpha^\beta G'$의 실수부와 허수부는 $G(\beta) - G(\alpha)$의 실수부와 허수부와 같으므로 첫 문장이 나온다. $G$가 연속미분가능하면 미분 (1)에 의해 $G'$은 연속이고, 적분 정의 (3)에 의해 $I$의 어느 두 점 사이에서도 적분가능하다. 마지막 문장은 $I = [a, b]$, $\alpha = a$, $\beta = b$로 두고 적분 정의 (4)의 (i)을 쓴 것이다.

**2의 증명.** 적분 정의 (3)에 의해 $g$는 $I$의 어느 두 점 사이에서도 적분가능하므로 $F$가 정해진다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (1)과 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $\operatorname{Re} g$, $\operatorname{Im} g : I \to \mathbb{R}$는 연속함수이다. 적분 정의 (1)에 의해 모든 $t$에서 $\operatorname{Re} F(t) = \int_p^t \operatorname{Re} g$이고 $\operatorname{Im} F(t) = \int_p^t \operatorname{Im} g$이다. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 이 두 실함수는 연속미분가능하고 도함수는 $\operatorname{Re} g$, $\operatorname{Im} g$이다. 따라서 미분의 정의에 의해 $F$는 연속미분가능하고, 모든 $t$에서 $F'(t) = \operatorname{Re} g(t) + \operatorname{Im} g(t)\, i = g(t)$이다. 같은 항목의 (6)과 (1)을 두 실함수에 쓰면 $\operatorname{Re} F(p) = 0 = \operatorname{Im} F(p)$이고, $\operatorname{Re} F(x) - \operatorname{Re} F(y) = \int_y^x \operatorname{Re} g$이며 허수부도 같다. 복소수체 (1)과 적분 정의 (1)로 묶으면 $F(p) = 0$이고 $F(x) - F(y) = \int_y^x g$이다.

**3의 증명.** 앞 증명처럼 $\operatorname{Re} g$, $\operatorname{Im} g : I \to \mathbb{R}$는 연속함수이다. 복소수체 (2)의 (ii)에 의해 모든 $x$에서
$$
\begin{aligned}
&\operatorname{Re}\bigl(g(\varphi(x))\,\iota(\varphi'(x))\bigr) \\
&\quad = \operatorname{Re} g(\varphi(x))\,\varphi'(x), \\
&\operatorname{Im}\bigl(g(\varphi(x))\,\iota(\varphi'(x))\bigr) \\
&\quad = \operatorname{Im} g(\varphi(x))\,\varphi'(x)
\end{aligned}
$$
이다(곱셈의 교환법칙). [[change-of-variables|치환적분]]의 (2)를 $\operatorname{Re} g$와 $\operatorname{Im} g$에 쓰면 오른쪽의 두 실함수는 연속함수이고 적분가능하며 적분은 $\int_{\varphi(a)}^{\varphi(b)} \operatorname{Re} g$, $\int_{\varphi(a)}^{\varphi(b)} \operatorname{Im} g$이다. 따라서 [[continuity-agrees-with-analysis]]의 (3)과 [[continuity-of-complex-operations]]의 (1)에 의해 이 복소수값 함수는 연속이고, 적분 정의의 정의에 의해 적분가능하며, 적분의 실수부와 허수부는 방향 있는 적분 $\int_{\varphi(a)}^{\varphi(b)} g$의 실수부와 허수부와 같다. 일차 치환은 같은 논법에 [[change-of-variables|치환적분]]의 (3)을 쓴 것이다. 복소수체 (2)의 (ii)에 의해 $\iota(m)\,g(mx + k)$의 실수부는 $m \operatorname{Re} g(mx + k)$, 허수부는 $m \operatorname{Im} g(mx + k)$이다.

**4의 증명.** (i). 미분 (8)에 의해 $t$에서의 값이 $\exp(c_0 t)$인 함수 $E : \mathbb{R} \to \mathbb{C}$는 연속미분가능하고 $E'(t) = c_0 E(t)$이다. $c_0 \ne 0$이므로 $c_0^{-1}$이 있고, 미분 (4)에 의해 $G = c_0^{-1} E$는 연속미분가능하며 $G'(t) = c_0^{-1} c_0 E(t) = E(t)$이다. (1)을 $I = \mathbb{R}$에 쓰면 $E = G'$은 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta E = G(\beta) - G(\alpha) = c_0^{-1}\bigl(\exp(c_0\beta) - \exp(c_0\alpha)\bigr)$이다.

(ii). $m \ne 0$이라 하자. 복소수체 (2)의 (i)에 의해 $\iota(m) \ne 0$이고, $\mathbb{C}$는 체이므로(복소수체 (1)) $c_0 = i\,\iota(m) \ne 0$이다. $c_0 \cdot \iota(2\pi) = \iota(m)\,(2\pi i)$(곱셈의 교환법칙과 결합법칙, 복소수체 (2))이므로 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (3)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1), [[power-of-a-complex-number|복소수의 거듭제곱]]에 의해
$$
\exp(c_0 \cdot 2\pi) = \exp(2\pi i)^m = 1^m = 1
$$
이다. 마지막 등식은 $0 < m$이면 그 항목의 (3)의 (i)이고, $m < 0$이면 음의 지수의 정의와 $1^{-1} = 1$에 의해 $1^m = (1^{-1})^{-m} = 1^{-m}$이므로 다시 (3)의 (i)이다. 또 $c_0 \cdot \iota(0) = 0$이고 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\exp(0) = 1$이다. (i)에 의해 $\int_0^{2\pi} \exp(imt)\,dt = c_0^{-1}(1 - 1) = 0$이다.

$m = 0$이면 모든 $t$에서 $i\,\iota(0)\,\iota(t) = 0$이므로 $\exp(imt) = \exp(0) = 1$이고, 적분 정의 (5)에 의해 $\int_0^{2\pi} 1\,dt = 1 \cdot (2\pi - 0) = 2\pi$이다. $\blacksquare$
:::

## 예시와 반례

:::example[0 부터 π/2 까지의 exp(it)]
(4)의 (i)을 $c_0 = i$, $\alpha = 0$, $\beta = \pi/2$에 쓰면, [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)의 $\exp(i\pi/2) = i$에 의해
$$
\int_0^{\pi/2} \exp(it)\,dt = \frac{i - 1}{i} = 1 + i
$$
입니다($i \cdot i = -1$이므로 $1/i = -i$이고 $(i - 1)(-i) = 1 + i$). 실수부로 확인하면 [[cosine-and-sine|코사인과 사인]]의 정의에 의해 실수부는 $\int_0^{\pi/2} \cos t\,dt$이고, [[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]]의 (1)의 $\sin' = \cos$와 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)로 이것은 $\sin(\pi/2) - \sin 0 = 1 - 0 = 1$입니다([[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)과 [[cosine-and-sine|코사인과 사인]]의 (2)).
:::

:::example[2t exp(it²) 의 일차가 아닌 치환]
$\varphi(x) = x^2$로 정한 $\varphi : [0, 1] \to \mathbb{R}$는 연속미분가능하고 $\varphi'(x) = 2x$이며, $g(s) = \exp(is)$로 정한 $g : \mathbb{R} \to \mathbb{C}$는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (8)과 (1)에 의해 연속입니다. (3)과 (4)의 (i)에 의해
$$
\begin{aligned}
\int_0^1 2x \exp(ix^2)\,dx &= \int_0^1 \exp(is)\,ds \\
&= \frac{\exp(i) - 1}{i}
\end{aligned}
$$
이고, $1/i = -i$와 [[cosine-and-sine|오일러 공식]]으로 이것은 $-i(\cos 1 + i \sin 1 - 1) = \sin 1 + (1 - \cos 1)\,i$입니다.
:::

:::counterexample[구간 [0, π] 위의 exp(it) 의 적분이 0 이 아닌 예]
(4)의 (ii)는 구간이 $[0, 2\pi]$일 때의 것입니다. $m = 1$이고 구간이 $[0, \pi]$이면 (4)의 (i)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)의 $\exp(i\pi) = -1$에 의해
$$
\int_0^{\pi} \exp(it)\,dt = \frac{-1 - 1}{i} = 2i
$$
이고, 이것은 $0$이 아닙니다. 원시함수 $\exp(it)/i$의 값이 $t = 0$과 $t = \pi$에서 다르기 때문입니다. 같은 구간에서도 $m = 2$이면 $\exp(2\pi i) = 1$이라 (4)의 (i)에 의해 적분이 $0$입니다.
:::

## 확인 질문

:::check[$\int_0^1 \exp((1 + i)t)\,dt$는?]
$c_0 = 1 + i \ne 0$이므로 (4)의 (i)에 의해 값은 $\bigl(\exp(1 + i) - 1\bigr)/(1 + i)$입니다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (4)로 $\exp(1 + i) = \exp(1)\exp(i)$로 적을 수도 있습니다.
:::

:::check[연속인 $g : [0, 5] \to \mathbb{C}$에 대하여 $F(t) = \int_2^t g$로 정하면 $F(2)$와 $F'(3)$은?]
(2)에서 밑점을 $p = 2$로 두면 $F(2) = 0$이고 $F' = g$이므로 $F'(3) = g(3)$입니다.
:::
