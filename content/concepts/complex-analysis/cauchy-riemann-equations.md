---
title: 코시–리만 방정식
title_en: Cauchy–Riemann Equations
aliases: [코시-리만 방정식, 편도함수, 편미분, Cauchy-Riemann equations, partial derivatives]
kind: theorem
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 복소함수의 실수부와 허수부의 편도함수를 실수축 방향과 허수축 방향의 한 변수 실함수의 미분계수로 정의한다. 복소함수가 한 점에서 미분가능하면 그 점에서 네 편도함수가 있고 u_x = v_y, u_y = −v_x 이며 f′ = u_x + i v_x 이다. 거꾸로 실수축 방향의 편도함수가 있고, 허수축 방향의 편도함수가 둘레의 원판에서 있으며 그 점에서 연속이고, 코시–리만 방정식이 성립하면 그 점에서 미분가능하다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, derivative, derivative-rules, differentiable-implies-continuous, mean-value-theorem, square-root-exists, complex-number, complex-field, modulus-of-complex-number, open-ball, open-set-in-metric-space, continuous-map, continuity-in-metric-spaces, subspace-and-continuity, complex-plane-as-metric-space, complex-triangle-inequality, limit-of-complex-function, complex-derivative, complex-differentiability-examples]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "The Cauchy–Riemann Equations 절의 편도함수의 정의, Theorem cre 와 u·v 꼴의 문단, 두 예, 정리의 증명, source/sec_Cauchy-Riemann.ptx:17–36, 51–106, 146–186, 187–351; 연습문제 ex_2_2, 셋째 뒤의 연습문제(CR 은 만족하지만 미분가능하지 않은 함수) (source/exercises-chap2.ptx:221–381, 395–406)"
    checked: original
    note: "출처는 편도함수를 ∂f/∂x(z₀) = lim_{x→x₀} (f(x, y₀) − f(x₀, y₀))/(x − x₀) 로 정의하고 '실숫값의 경우와 꼭 같다'고 적는다(sec_Cauchy-Riemann.ptx:24–36). 이 사이트에는 두 변수 함수의 편도함수가 없어서, 이 항목은 실수부 u 와 허수부 v 의 편도함수를 z₀ 를 지나는 가로·세로 방향의 한 변수 실함수의 미분계수로 정의하고, (1)에서 반지름 r 에 무관함을 보인다. 출처의 f_x, f_y 는 (6)의 f_x = u_x + i v_x, f_y = u_y + i v_y 이고, u·v 꼴 u_x = v_y, u_y = −v_x 는 출처 98–104줄과 같다. (3)은 출처 Theorem cre 의 (a)(56–65줄)이고, 출처의 증명(189–227줄)이 Δz 를 실수축과 허수축으로 제한하는 것과 같은 경로를 복소함수의 극한의 (10)으로 쓴다. (4)는 출처 Theorem cre 의 (b)(69–74줄)를 가정을 바꾸어 진술한 것이다. 출처의 증명(229–349줄)에는 두 빈틈이 있다. 첫째, 증명은 차분몫을 (f(z₀ + Δx + iΔy) − f(z₀ + Δx))/Δy 와 (f(z₀ + Δx) − f(z₀))/Δx 로 나누어 쓰는데(266–276줄) Δy = 0 이나 Δx = 0 인 경우를 따로 다루지 않는다. 이 항목의 증명은 나누지 않고 두 조각에 Δy·(…), Δx·(…) 꼴의 어림만 쓰므로 그 경우가 따로 생기지 않는다. 둘째, 정리는 '편도함수가 z₀ 중심의 열린 원판에서 있고 z₀ 에서 연속'이라고 가정하는데(69–74줄) 증명 첫머리는 '편도함수 f_x, f_y 가 z₀ 중심의 열린 원판에서 연속'이라고 적는다(229–232줄). 증명이 실제로 쓰는 것은 u_x, v_x 의 z₀ 에서의 존재와, u_y, v_y 의 원판에서의 존재와 z₀ 에서의 연속뿐이어서, (4)는 그 가정으로 진술하고 출처의 가정은 (5)에 둔다. 출처는 세로 선분 위에 평균값 정리를 쓰면서(298–311줄) 그 선분이 원판 안에 있다는 것과 그 위의 실함수가 연속이고 미분가능하다는 것을 적지 않는다. 이 항목은 (2)와 평균값 정리(mean-value-theorem)로 그것을 보인다. 예시 '$(\\operatorname{Re} z)^2 + i \\operatorname{Im} z$ 가 미분가능한 점'은 출처 연습문제 ex_2_2 의 x² + iy²(263–268, 직선 x = y 에서만 미분가능)와 같은 발상이다. 반례 '코시–리만 방정식을 만족하지만 미분가능하지 않은 예'는 출처의 연습문제(exercises-chap2.ptx:395–406: 축 위에서 0, 그 밖에서 1 인 함수가 0 에서 CR 을 만족하지만 미분가능하지 않다)와 같은 발상이다. 확인 질문 '켤레를 취하는 함수에 코시–리만 방정식을 쓰면 무엇이 나오는가?'는 출처 sec_Cauchy-Riemann.ptx:166–186 의 예가 z̄² 에 (a)의 대우를 쓰는 것과 같은 방법이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시–리만 (4)의 약한 가정 검토, |z|² 의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 열린 공 $B(a, r)$와 $\mathbb{C}$의 부분집합에 주는 거리와 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 복소 미분가능, 미분계수, 정칙함수는 [[complex-derivative|복소 미분]]의 것이다. 구간은 [[interval]]의 것이고, 실함수의 미분가능과 미분계수는 [[derivative]]의 것이다. 연속과 "$z_0$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고 $\mathbb{R}$에는 보통 거리를 준다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이다.

**편도함수.** $g : G \to \mathbb{R}$가 함수이고 $w \in G$라 하자. 실수 $r > 0$이 $B(w, r) \subseteq G$를 만족하면, $|t| < r$인 실수 $t$에서 $w + \iota(t)$와 $w + \iota(t) i$는 $B(w, r)$의 점이다. 그런 $r$에 대하여 실함수 $\alpha_r, \beta_r : (-r, r) \to \mathbb{R}$를
$$
\begin{aligned}
\alpha_r(t) &= g(w + \iota(t)), \\
\beta_r(t) &= g(w + \iota(t) i)
\end{aligned}
$$
로 정한다. $g$가 $w$에서 **$x$에 대하여 편미분가능하다**는 것은 정확히 $B(w, r) \subseteq G$이고 $\alpha_r$이 $0$에서 미분가능한 실수 $r > 0$이 있을 때이고, 그 미분계수 $\alpha_r'(0)$을 $g_x(w)$로 쓴다. 같은 꼴로 $\beta_r$로 **$y$에 대하여 편미분가능하다**를 정하고 $\beta_r'(0)$을 $g_y(w)$로 쓴다. 아래 (1)에 의해 이 값은 $r$에 무관하다. $g_x(w)$와 $g_y(w)$를 $g$의 $w$에서의 **편도함수**(partial derivatives)라 한다. $A \subseteq G$의 모든 점에서 $g_x$가 있으면 $w$에서의 값이 $g_x(w)$인 함수 $g_x : A \to \mathbb{R}$를 생각하고, $g_y$도 같다.

복소함수 $f : G \to \mathbb{C}$에 대하여 $u, v : G \to \mathbb{R}$를 $u(z) = \operatorname{Re} f(z)$, $v(z) = \operatorname{Im} f(z)$로 정한다. 점 $z_0 \in G$에서 $u$와 $v$가 각각 $u_x(z_0) = v_y(z_0)$이고 $u_y(z_0) = -v_x(z_0)$를 만족하는 것을 $f$가 $z_0$에서 **코시–리만 방정식**(Cauchy–Riemann equations)을 만족한다고 한다(네 편도함수가 모두 있을 때만 말한다).

다음이 성립한다. 아래에서 $f : G \to \mathbb{C}$는 복소함수, $u$, $v$는 위의 실수부와 허수부, $z_0$은 $G$의 점이다.

1. (편도함수는 $r$에 무관하다) $g : G \to \mathbb{R}$, $w \in G$이고 $r$, $r'$이 $B(w, r) \subseteq G$, $B(w, r') \subseteq G$를 만족하는 양의 실수라 하자. $\alpha_r$이 $0$에서 미분가능한 것은 정확히 $\alpha_{r'}$이 $0$에서 미분가능할 때이고, 이때 $\alpha_r'(0) = \alpha_{r'}'(0)$이다. $\beta_r$, $\beta_{r'}$도 같다.
2. (선분 위의 실함수) $g : G \to \mathbb{R}$이고 $p$가 복소수이며 $I$가 구간이라 하자.
   - (i) 모든 $\tau \in I$에서 $p + \iota(\tau) \in G$이고 $\varphi(\tau) = g(p + \iota(\tau))$로 정한 실함수가 $\varphi : I \to \mathbb{R}$라 하자. $\tau_0 \in I$이고 $g$가 $p + \iota(\tau_0)$에서 $x$에 대하여 편미분가능하면, $\varphi$는 $\tau_0$에서 미분가능하고 $\varphi'(\tau_0) = g_x(p + \iota(\tau_0))$이다.
   - (ii) 모든 $\tau \in I$에서 $p + \iota(\tau) i \in G$이고 $\psi(\tau) = g(p + \iota(\tau) i)$로 정한 실함수가 $\psi : I \to \mathbb{R}$라 하자. $\tau_0 \in I$이고 $g$가 $p + \iota(\tau_0) i$에서 $y$에 대하여 편미분가능하면, $\psi$는 $\tau_0$에서 미분가능하고 $\psi'(\tau_0) = g_y(p + \iota(\tau_0) i)$이다.
3. (미분가능하면 코시–리만 방정식) $f$가 $z_0$에서 미분가능하면 $u$와 $v$는 $z_0$에서 $x$와 $y$에 대하여 편미분가능하고
   $$
   \begin{aligned}
   u_x(z_0) &= v_y(z_0) = \operatorname{Re} f'(z_0), \\
   v_x(z_0) &= -u_y(z_0) = \operatorname{Im} f'(z_0)
   \end{aligned}
   $$
   이다. 따라서 $f$는 $z_0$에서 코시–리만 방정식을 만족하고 $f'(z_0) = u_x(z_0) + v_x(z_0)\, i$이다.
4. (편도함수에서 미분가능으로) 다음 셋이 성립한다고 하자.
   - (i) $u_x(z_0)$와 $v_x(z_0)$가 있다.
   - (ii) 어떤 실수 $r > 0$이 있어 $B(z_0, r) \subseteq G$이고, $B(z_0, r)$의 모든 점 $w$에서 $u_y(w)$와 $v_y(w)$가 있으며, 함수 $u_y, v_y : B(z_0, r) \to \mathbb{R}$가 $z_0$에서 연속이다.
   - (iii) $f$가 $z_0$에서 코시–리만 방정식을 만족한다.

   그러면 $f$는 $z_0$에서 미분가능하고 $f'(z_0) = u_x(z_0) + v_x(z_0)\, i$이다.
5. (편도함수가 연속인 경우)
   - (i) 어떤 실수 $r > 0$이 있어 $B(z_0, r) \subseteq G$이고, $B(z_0, r)$의 모든 점에서 $u$, $v$의 네 편도함수가 있으며, 네 함수 $u_x, u_y, v_x, v_y : B(z_0, r) \to \mathbb{R}$가 $z_0$에서 연속이고, $f$가 $z_0$에서 코시–리만 방정식을 만족하면, $f$는 $z_0$에서 미분가능하다.
   - (ii) $G$의 모든 점에서 $u$, $v$의 네 편도함수가 있고 네 함수 $u_x, u_y, v_x, v_y : G \to \mathbb{R}$가 연속이며, $G$의 모든 점에서 $f$가 코시–리만 방정식을 만족하면, $f$는 정칙함수이고 모든 $z \in G$에서 $f'(z) = u_x(z) + v_x(z)\, i$이다.
6. (복소수로 쓴 꼴) 네 편도함수가 $z_0$에서 있을 때 $f_x(z_0) = u_x(z_0) + v_x(z_0)\, i$, $f_y(z_0) = u_y(z_0) + v_y(z_0)\, i$로 둔다. $f$가 $z_0$에서 코시–리만 방정식을 만족하는 것은 정확히 $f_x(z_0) = -i\, f_y(z_0)$일 때이다. 따라서 $f$가 $z_0$에서 미분가능하면 $f'(z_0) = f_x(z_0) = -i\, f_y(z_0)$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers in place of complex numbers, and the form $a + bi$ are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number. Open balls $B(a, r)$ and the metric and topology given to subsets of $\mathbb{C}$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Complex differentiability, derivatives, and holomorphic functions are those of the entry on the complex derivative. Intervals are those of the entry on intervals, and differentiability and derivatives of real-valued functions are those of the entry on the derivative. Continuity and "continuous at $z_0$" are those of the entry on continuous maps between topological spaces, and $\mathbb{R}$ carries the standard metric.

Below, $G$ is an open set of $(\mathbb{C}, d)$.

**Partial derivatives.** Let $g : G \to \mathbb{R}$ be a function and $w \in G$. If a real number $r > 0$ satisfies $B(w, r) \subseteq G$, then for real $t$ with $|t| < r$ the points $w + \iota(t)$ and $w + \iota(t) i$ belong to $B(w, r)$. For such $r$ define real-valued functions $\alpha_r, \beta_r : (-r, r) \to \mathbb{R}$ by
$$
\begin{aligned}
\alpha_r(t) &= g(w + \iota(t)), \\
\beta_r(t) &= g(w + \iota(t) i).
\end{aligned}
$$
$g$ is **partially differentiable with respect to $x$** at $w$ exactly when there is a real $r > 0$ with $B(w, r) \subseteq G$ such that $\alpha_r$ is differentiable at $0$, and the derivative $\alpha_r'(0)$ is written $g_x(w)$. In the same way, using $\beta_r$, **partially differentiable with respect to $y$** is defined and $\beta_r'(0)$ is written $g_y(w)$. By (1) below these values do not depend on $r$. $g_x(w)$ and $g_y(w)$ are called the **partial derivatives** of $g$ at $w$. If $g_x$ exists at every point of $A \subseteq G$, we consider the function $g_x : A \to \mathbb{R}$ whose value at $w$ is $g_x(w)$, and likewise for $g_y$.

For a complex function $f : G \to \mathbb{C}$, define $u, v : G \to \mathbb{R}$ by $u(z) = \operatorname{Re} f(z)$ and $v(z) = \operatorname{Im} f(z)$. We say that $f$ satisfies the **Cauchy–Riemann equations** at a point $z_0 \in G$ when $u_x(z_0) = v_y(z_0)$ and $u_y(z_0) = -v_x(z_0)$ (this is said only when all four partial derivatives exist).

The following hold. Below, $f : G \to \mathbb{C}$ is a complex function, $u$, $v$ are its real and imaginary parts as above, and $z_0$ is a point of $G$.

1. (Partial derivatives do not depend on $r$) Let $g : G \to \mathbb{R}$, $w \in G$, and let $r$, $r'$ be positive real numbers with $B(w, r) \subseteq G$, $B(w, r') \subseteq G$. $\alpha_r$ is differentiable at $0$ exactly when $\alpha_{r'}$ is differentiable at $0$, and then $\alpha_r'(0) = \alpha_{r'}'(0)$. The same holds for $\beta_r$, $\beta_{r'}$.
2. (Real-valued functions on segments) Let $g : G \to \mathbb{R}$, let $p$ be a complex number, and let $I$ be an interval.
   - (i) Suppose $p + \iota(\tau) \in G$ for all $\tau \in I$, and let $\varphi : I \to \mathbb{R}$ be the real-valued function defined by $\varphi(\tau) = g(p + \iota(\tau))$. If $\tau_0 \in I$ and $g$ is partially differentiable with respect to $x$ at $p + \iota(\tau_0)$, then $\varphi$ is differentiable at $\tau_0$ and $\varphi'(\tau_0) = g_x(p + \iota(\tau_0))$.
   - (ii) Suppose $p + \iota(\tau) i \in G$ for all $\tau \in I$, and let $\psi : I \to \mathbb{R}$ be the real-valued function defined by $\psi(\tau) = g(p + \iota(\tau) i)$. If $\tau_0 \in I$ and $g$ is partially differentiable with respect to $y$ at $p + \iota(\tau_0) i$, then $\psi$ is differentiable at $\tau_0$ and $\psi'(\tau_0) = g_y(p + \iota(\tau_0) i)$.
3. (Differentiability implies the Cauchy–Riemann equations) If $f$ is differentiable at $z_0$, then $u$ and $v$ are partially differentiable at $z_0$ with respect to $x$ and $y$, and
   $$
   \begin{aligned}
   u_x(z_0) &= v_y(z_0) = \operatorname{Re} f'(z_0), \\
   v_x(z_0) &= -u_y(z_0) = \operatorname{Im} f'(z_0).
   \end{aligned}
   $$
   Hence $f$ satisfies the Cauchy–Riemann equations at $z_0$ and $f'(z_0) = u_x(z_0) + v_x(z_0)\, i$.
4. (From partial derivatives to differentiability) Suppose the following three hold.
   - (i) $u_x(z_0)$ and $v_x(z_0)$ exist.
   - (ii) There is a real $r > 0$ with $B(z_0, r) \subseteq G$ such that $u_y(w)$ and $v_y(w)$ exist at every point $w$ of $B(z_0, r)$, and the functions $u_y, v_y : B(z_0, r) \to \mathbb{R}$ are continuous at $z_0$.
   - (iii) $f$ satisfies the Cauchy–Riemann equations at $z_0$.

   Then $f$ is differentiable at $z_0$ and $f'(z_0) = u_x(z_0) + v_x(z_0)\, i$.
5. (Continuous partial derivatives)
   - (i) If there is a real $r > 0$ with $B(z_0, r) \subseteq G$ such that the four partial derivatives of $u$, $v$ exist at every point of $B(z_0, r)$, the four functions $u_x, u_y, v_x, v_y : B(z_0, r) \to \mathbb{R}$ are continuous at $z_0$, and $f$ satisfies the Cauchy–Riemann equations at $z_0$, then $f$ is differentiable at $z_0$.
   - (ii) If the four partial derivatives of $u$, $v$ exist at every point of $G$, the four functions $u_x, u_y, v_x, v_y : G \to \mathbb{R}$ are continuous, and $f$ satisfies the Cauchy–Riemann equations at every point of $G$, then $f$ is a holomorphic function and $f'(z) = u_x(z) + v_x(z)\, i$ for all $z \in G$.
6. (The complex form) When the four partial derivatives exist at $z_0$, put $f_x(z_0) = u_x(z_0) + v_x(z_0)\, i$ and $f_y(z_0) = u_y(z_0) + v_y(z_0)\, i$. $f$ satisfies the Cauchy–Riemann equations at $z_0$ exactly when $f_x(z_0) = -i\, f_y(z_0)$. Hence if $f$ is differentiable at $z_0$, then $f'(z_0) = f_x(z_0) = -i\, f_y(z_0)$.
:::

## 직관

복소 미분계수는 모든 방향의 차분몫이 같은 값으로 가야 정해집니다. 실수축 방향으로 다가가면 차분몫은 $u$와 $v$의 가로 방향 변화율 $u_x + v_x i$로 가고, 허수축 방향으로 다가가면 분모에 $i$가 붙어 $(v_y - u_y i)$로 갑니다. 두 값이 같다는 것이 코시–리만 방정식 $u_x = v_y$, $v_x = -u_y$입니다((3)). 지도에 비유하면, 동쪽으로 한 걸음 갈 때의 변화를 $90°$ 돌린 것이 북쪽으로 한 걸음 갈 때의 변화와 같아야 한다는 조건입니다. "돌린다"는 $i$를 곱하는 것이고, (6)의 식 $f_x = -i f_y$의 양변에 $i$를 곱한 $f_y = i f_x$가 그것입니다.

거꾸로 두 방향에서 맞는다는 것만으로는 미분가능하다고 할 수 없습니다. 대각선 방향에서 다른 값이 나올 수 있기 때문입니다(아래 반례). (4)는 허수축 방향의 편도함수가 둘레에서 있고 $z_0$에서 연속이라는 조건을 더해 이 틈을 막습니다. 증명은 $z_0$에서 $z_0 + h$로 가는 길을 가로로 한 번, 세로로 한 번 가는 두 조각으로 나누고, 세로 조각에 실함수의 평균값 정리를 씁니다. 세로 조각에서 편도함수를 잰 점은 $z_0$ 둘레에 있으므로 연속성이 그 값을 $u_y(z_0)$, $v_y(z_0)$ 가까이로 붙잡습니다. 가로 조각은 $z_0$을 지나는 직선 위에 있어서 $u_x$, $v_x$의 $z_0$에서의 존재만으로 됩니다.

출처의 증명은 두 조각을 각각 가로 길이와 세로 길이로 나누는데, 그 길이가 $0$인 $h$(실수이거나 순허수인 $h$)가 있습니다. 이 항목은 나누지 않고 "길이 곱하기 작은 수" 꼴로만 어림해 그 경우를 따로 보지 않습니다.

## 증명

:::idea
(3)은 [[limit-of-complex-function|복소함수의 극한]]의 (10)으로 차분몫을 실수축과 허수축 방향으로 제한한다. (4)는 $f(z_0 + h) - f(z_0) - Ah$를 가로 조각과 세로 조각으로 나누고, 가로 조각은 $u_x$, $v_x$의 정의로, 세로 조각은 평균값 정리와 $u_y$, $v_y$의 연속으로 어림한다.
:::

:::hint
$h = s + ti$($s$, $t$는 실수)이면 코시–리만 방정식에 의해 $u_y(z_0) + v_y(z_0) i = i A$이고 $A h = sA + t(iA)$입니다. 여기서 $A = u_x(z_0) + v_x(z_0) i$입니다.
:::

:::hint
세로 조각 $u(z_0 + s + ti) - u(z_0 + s)$는 $0$과 $t$ 사이의 닫힌구간 위에서 $\tau$에서의 값이 $u(z_0 + s + \tau i)$인 실함수의 두 값의 차입니다. (2)로 그 함수가 미분가능함을 보이고 평균값 정리를 씁니다. $t = 0$이면 이 조각은 $0$입니다.
:::

:::proof
"극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]], "미분 (n)"은 [[complex-derivative|복소 미분]], "복소수체 (n)"은 [[complex-field]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이다. $\mathbb{C}$의 부분집합에는 부분공간 거리와 그 거리위상을 준다.

정의 첫머리: $|t| < r$이면 복소 절댓값 (3), (5)와 $|i| = 1$에 의해 $|\iota(t)| = |\iota(t) i| = |t| < r$이므로 두 점은 $B(w, r)$에 있다. $(-r, r)$은 구간이고 $0$을 원소로 갖는다.

**1의 증명.** $m = \min\{r, r'\}$으로 두면 $m > 0$이고 $(-m, m) \subseteq (-r, r)$, $(-m, m) \subseteq (-r', r')$이며 $\alpha_m$은 $\alpha_r$과 $\alpha_{r'}$의 $(-m, m)$으로의 제한이다. 따라서 "$\alpha_\rho$가 $0$에서 미분가능하면 $\alpha_m$도 그렇고 미분계수가 같다"와 그 거꾸로를 $\rho = r, r'$에 대해 보이면 된다. 앞쪽은 [[derivative]]의 (2)이다. 거꾸로 $\alpha_m$이 $0$에서 미분가능하고 미분계수가 $L$이라 하자. $\alpha_\rho$의 $0$에서의 차분몫 $q$를 $A = \{t \in (-\rho, \rho) - \{0\} : |t - 0| < m\} = (-m, m) - \{0\}$으로 제한한 것은 $\alpha_m$의 $0$에서의 차분몫이고 $L$로 수렴한다. [[limit-of-a-function]]의 (8)에 의해 $q$도 $L$로 수렴한다. $\beta$도 같다.

**2의 증명.** (i) $w = p + \iota(\tau_0)$으로 두고, $B(w, r) \subseteq G$이고 $\alpha_r$이 $0$에서 미분가능한 $r > 0$을 잡는다. $L = \alpha_r'(0) = g_x(w)$이다. $\tau \in I$이고 $|\tau - \tau_0| < r$이면 복소수체 (2)에 의해 $p + \iota(\tau) = w + \iota(\tau - \tau_0)$이므로 $\varphi(\tau) = \alpha_r(\tau - \tau_0)$이고 $\varphi(\tau_0) = \alpha_r(0)$이다. 따라서 그런 $\tau \ne \tau_0$에서 $\varphi$의 $\tau_0$에서의 차분몫은 $\alpha_r$의 $0$에서의 차분몫의 $\tau - \tau_0$에서의 값과 같다. 양의 실수 $\varepsilon$에 대하여, $0 < |t| < \delta$이고 $|t| < r$이면 $\alpha_r$의 차분몫과 $L$의 차가 $\varepsilon$보다 작은 $\delta > 0$이 있다. $\delta' = \min\{\delta, r\}$로 두면, $\tau \in I$, $\tau \ne \tau_0$, $|\tau - \tau_0| < \delta'$에서 $t = \tau - \tau_0$은 그 조건을 만족하므로 $\varphi$의 차분몫과 $L$의 차가 $\varepsilon$보다 작다. [[derivative]]의 진술에 의해 $\tau_0$은 $I - \{\tau_0\}$의 집적점이므로 $\varphi$는 $\tau_0$에서 미분가능하고 $\varphi'(\tau_0) = L$이다. (ii)는 $\iota(\tau)$를 $\iota(\tau) i$로, $\alpha_r$을 $\beta_r$로 바꾸어 같다. $p + \iota(\tau) i = w + \iota(\tau - \tau_0) i$인 것도 복소수체 (2)와 분배법칙이다.

**3의 증명.** $L = f'(z_0)$으로 두고 $B(z_0, r) \subseteq G$인 실수 $r > 0$을 잡는다. $J = (-r, r) - \{0\}$으로 두면 [[derivative]]의 진술에 의해 $0$은 $J$의 집적점이다. 차분몫 $q = q_{z_0}$에 극한 (10)을 $c = 0$과 방향을 나타내는 복소수 $1$, $i$에 쓴다. 정의 첫머리와 극한 (1)의 (iii)에 의해 $t \in J$에서 $z_0 + \iota(t)$와 $z_0 + \iota(t) i$는 $G - \{z_0\}$의 점이다. 아래에서 $\Delta_1(t) = f(z_0 + \iota(t)) - f(z_0)$, $\Delta_2(t) = f(z_0 + \iota(t) i) - f(z_0)$로 둔다. 복소수체 (2)의 (i)에 의해 $\iota(t)^{-1} = \iota(t^{-1})$이고, 복소수체 (5)에 의해 $i^{-1} = -i$이다.

- 방향 $1$: $q(z_0 + \iota(t)) = \iota(t^{-1}) \Delta_1(t)$이므로 복소수체 (2)의 (ii)에 의해 그 실수부와 허수부는 $t^{-1}(u(z_0 + \iota(t)) - u(z_0))$와 $t^{-1}(v(z_0 + \iota(t)) - v(z_0))$이다. 이것은 $r$로 만든 $u$와 $v$의 $\alpha_r$의 $0$에서의 차분몫이다. 극한 (10)의 (i)에 의해 두 차분몫은 각각 $\operatorname{Re} L$과 $\operatorname{Im} L$로 수렴하므로 $u_x(z_0) = \operatorname{Re} L$, $v_x(z_0) = \operatorname{Im} L$이다.
- 방향 $i$: $q(z_0 + \iota(t) i) = \iota(t^{-1})\,(-i)\,\Delta_2(t)$이다. 복소수 $a + bi$($a$, $b$ 실수)에 대해 $(-i)(a + bi) = b - ai$이므로(복소수체 (4), (5)) $(-i)\Delta_2(t)$의 실수부는 $v(z_0 + \iota(t) i) - v(z_0)$이고 허수부는 $-(u(z_0 + \iota(t) i) - u(z_0))$이다. 극한 (10)의 (i)에 의해 $t^{-1}(v(z_0 + \iota(t) i) - v(z_0))$는 $\operatorname{Re} L$로, $-t^{-1}(u(z_0 + \iota(t) i) - u(z_0))$는 $\operatorname{Im} L$로 수렴한다. 앞의 것은 $v$의 $\beta_r$의 차분몫이므로 $v_y(z_0) = \operatorname{Re} L$이다. 뒤의 것에 $-1$을 곱하면 [[limit-laws-for-functions|함수의 극한 법칙]]의 (6)에 의해 $u$의 $\beta_r$의 차분몫이 $-\operatorname{Im} L$로 수렴하므로 $u_y(z_0) = -\operatorname{Im} L$이다.

마지막 문장은 복소수체 (4)의 $L = \operatorname{Re} L + (\operatorname{Im} L) i$이다.

**4의 증명.** $A = u_x(z_0) + v_x(z_0) i$로 둔다. (iii)에 의해 $u_y(z_0) + v_y(z_0) i = -v_x(z_0) + u_x(z_0) i = iA$이다(복소수체 (5)의 $i^2 = -1$).

양의 실수 $\varepsilon$을 잡는다. 다음 네 양수를 잡는다.

- (가) (i)과 정의에 의해, $B(z_0, r_1) \subseteq G$이고 $u$의 $\alpha_{r_1}$이 $0$에서 미분가능한 $r_1 > 0$이 있다. (1)에 의해 같은 $r_1$에서 $v$의 $\alpha_{r_1}$도 $0$에서 미분가능하다고 해도 된다($u$와 $v$의 두 반지름 가운데 작은 것을 쓴다). 미분가능의 정의에 의해, $0 < |s| < \delta_1$이고 $|s| < r_1$이면 $\bigl|s^{-1}(u(z_0 + \iota(s)) - u(z_0)) - u_x(z_0)\bigr| < \varepsilon / 4$이고 $v$에 대해서도 같은 부등식이 성립하는 $\delta_1 > 0$이 있다.
- (나) (ii)와 [[continuity-in-metric-spaces|거리공간 사이의 연속]]의 (1)에 의해, $w \in B(z_0, r)$이고 $|w - z_0| < \delta_2$이면 $|u_y(w) - u_y(z_0)| < \varepsilon / 4$이고 $|v_y(w) - v_y(z_0)| < \varepsilon / 4$인 $\delta_2 > 0$이 있다.

$\delta$를 $r$, $r_1$, $\delta_1$, $\delta_2$의 최솟값으로 둔다([[absolute-value]]의 (10)을 세 번 쓴다). $\delta > 0$이다. $h$가 복소수이고 $0 < |h| < \delta$라 하자. $s = \operatorname{Re} h$, $t = \operatorname{Im} h$로 두면 복소수체 (4)에 의해 $h = \iota(s) + \iota(t) i$이고, 복소 절댓값 (6)에 의해 $|s| \le |h|$, $|t| \le |h|$이다. $p = z_0 + \iota(s)$로 두면 $|p - z_0| = |s| < r$이므로 $p \in G$이다.

**가로 조각.** $E_1 = f(p) - f(z_0) - sA$로 둔다. $s = 0$이면 $E_1 = 0$이다. $s \ne 0$이면 (가)에 의해 $E_1 = \iota(s)\bigl(s^{-1}(f(p) - f(z_0)) - A\bigr)$의 실수부와 허수부의 절댓값은 각각 $|s|$와 $\varepsilon / 4$보다 작은 수의 곱이고, 복소 절댓값 (6)에 의해 $|E_1| \le |s| \cdot \varepsilon / 2$이다.

**세로 조각.** $E_2 = f(z_0 + h) - f(p) - t\, iA$로 둔다. $t = 0$이면 $z_0 + h = p$이므로 $E_2 = 0$이다. $t \ne 0$이면 $K$를 $0$과 $t$ 사이의 닫힌구간, 곧 $t > 0$이면 $[0, t]$, $t < 0$이면 $[t, 0]$으로 둔다. $\tau \in K$이면 $|\tau| \le |t|$이므로([[absolute-value]]의 (1)) $\tau^2 \le t^2$이고(순서 성질 (7)의 (ii)와 절댓값 (5)), 복소 절댓값 (1)에 의해
$$
\begin{aligned}
|p + \iota(\tau) i - z_0|^2 &= s^2 + \tau^2 \\
&\le s^2 + t^2 = |h|^2
\end{aligned}
$$
이므로 순서 성질 (7)의 (iii)에 의해 $|p + \iota(\tau) i - z_0| \le |h| < \delta \le r$이다. 곧 $p + \iota(\tau) i \in B(z_0, r) \subseteq G$이다. $\psi(\tau) = u(p + \iota(\tau) i)$로 정한 $\psi : K \to \mathbb{R}$는 (ii)와 (2)의 (ii)에 의해 $K$의 모든 점에서 미분가능하고 $\psi'(\tau) = u_y(p + \iota(\tau) i)$이다. [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 $\psi$는 연속함수이고, [[derivative]]의 정의에 의해 $K$의 양 끝점을 뺀 열린구간에서 미분가능하다. [[mean-value-theorem|평균값 정리]]에 의해 $0$과 $t$ 사이(끝점 제외)의 실수 $c_1$이 있어 $\psi(t) - \psi(0) = \psi'(c_1)\, t$이다($t < 0$이면 $\psi(0) - \psi(t) = \psi'(c_1)(0 - t)$에서 같은 식이 나온다). $\psi(t) = u(z_0 + h)$, $\psi(0) = u(p)$이다. 같은 방법으로 $v$에 대해 $c_2$를 얻는다. $w_j = p + \iota(c_j) i$로 두면 $|w_j - z_0| \le |h| < \delta$이고
$$
\begin{aligned}
&f(z_0 + h) - f(p) \\
&\quad = t\bigl(u_y(w_1) + v_y(w_2)\, i\bigr)
\end{aligned}
$$
이다. $t\, iA = t(u_y(z_0) + v_y(z_0) i)$이므로
$$
\begin{aligned}
E_2 &= t\bigl(u_y(w_1) - u_y(z_0)\bigr) \\
&\quad + t\bigl(v_y(w_2) - v_y(z_0)\bigr) i
\end{aligned}
$$
이고, (나)와 복소 절댓값 (6)에 의해 $|E_2| \le |t| \cdot \varepsilon / 2$이다.

**합치기.** 복소수체 (2), (4)에 의해 $sA + t\, iA = A(\iota(s) + \iota(t) i) = Ah$이므로 $f(z_0 + h) - f(z_0) - Ah = E_1 + E_2$이다. $s$와 $t$ 가운데 적어도 하나는 $0$이 아니므로($h \ne 0$) 위의 두 어림 가운데 적어도 하나는 $<$이고,
$$
\begin{aligned}
&|f(z_0 + h) - f(z_0) - Ah| \\
&\quad < (|s| + |t|)\, \varepsilon / 2 \le |h|\, \varepsilon
\end{aligned}
$$
이다([[complex-triangle-inequality|복소수의 삼각부등식]]의 (2), 순서 성질 (2)의 (iv)). 양변에 $|h|^{-1}$을 곱하면 복소 절댓값 (3), (4)에 의해 $\bigl|(f(z_0 + h) - f(z_0))/h - A\bigr| < \varepsilon$이다. 미분 (1)의 $h$ 꼴에 의해 $f$는 $z_0$에서 미분가능하고 $f'(z_0) = A$이다.

**5의 증명.** (i) 네 편도함수가 $B(z_0, r)$에서 있으므로 (4)의 (i)과 (ii)의 존재가 성립하고, $u_y$, $v_y$의 $z_0$에서의 연속은 가정에 있다. (4)를 쓴다. (ii) $z_0 \in G$에서 $B(z_0, r) \subseteq G$인 $r > 0$을 잡으면 [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 네 함수의 $B(z_0, r)$로의 제한은 $z_0$에서 연속이다. (i)에 의해 $f$는 $z_0$에서 미분가능하고, (4)에 의해 $f'(z_0) = u_x(z_0) + v_x(z_0) i$이다.

**6의 증명.** $-i f_y(z_0) = -i(u_y(z_0) + v_y(z_0) i) = v_y(z_0) - u_y(z_0) i$이다(복소수체 (5)). 복소수체 (4)에 의해 이것이 $u_x(z_0) + v_x(z_0) i$와 같은 것은 정확히 $u_x(z_0) = v_y(z_0)$이고 $v_x(z_0) = -u_y(z_0)$일 때이다. 마지막 문장은 (3)이다. $\blacksquare$
:::

## 예시와 반례

:::example[$(\operatorname{Re} z)^2 + i \operatorname{Im} z$ 가 미분가능한 점]
$f(z) = (\operatorname{Re} z)^2 + (\operatorname{Im} z) i$로 정한 $f : \mathbb{C} \to \mathbb{C}$를 생각합니다. $u(z) = (\operatorname{Re} z)^2$, $v(z) = \operatorname{Im} z$입니다. 점 $w$에서 $a = \operatorname{Re} w$, $b = \operatorname{Im} w$로 두면, 실수 $t$에서 $u(w + \iota(t)) = (a + t)^2$, $u(w + \iota(t) i) = a^2$, $v(w + \iota(t)) = b$, $v(w + \iota(t) i) = b + t$입니다([[complex-field|복소수체]]의 (2)). [[derivative]]의 (1)과 [[derivative-rules|미분법]]의 (4)에 의해 이 네 실함수의 $0$에서의 미분계수는 $2a$, $0$, $0$, $1$이므로 $u_x(w) = 2 \operatorname{Re} w$, $u_y(w) = 0$, $v_x(w) = 0$, $v_y(w) = 1$입니다.

코시–리만 방정식은 $2 \operatorname{Re} w = 1$이고 $0 = -0$인 것, 곧 $\operatorname{Re} w = 1/2$입니다. 따라서 (3)에 의해 실수부가 $1/2$이 아닌 점에서 $f$는 미분가능하지 않습니다. 실수부가 $1/2$인 점 $z_0$에서는 $u_y$, $v_y$가 상수함수라 연속이므로([[continuous-map|위상공간 사이의 연속함수]]의 (2)) (4)에 의해 $f$는 미분가능하고 $f'(z_0) = 2 \cdot (1/2) + 0 i = 1$입니다.
:::

:::counterexample[코시–리만 방정식을 만족하지만 미분가능하지 않은 예]
$f(z) = \iota\bigl(\sqrt{|(\operatorname{Re} z)(\operatorname{Im} z)|}\bigr)$로 정한 $f : \mathbb{C} \to \mathbb{C}$는 $0$에서 코시–리만 방정식을 만족하지만 $0$에서 미분가능하지 않습니다. 제곱근은 [[square-root-exists]]의 것입니다.

$v$는 영함수이므로 $v_x(0) = v_y(0) = 0$입니다. 실수 $t$에서 $u(\iota(t)) = \sqrt{|t \cdot 0|} = 0$이고 $u(\iota(t) i) = 0$이므로 $u_x(0) = u_y(0) = 0$입니다([[derivative]]의 (1)). 코시–리만 방정식 $0 = 0$, $0 = -0$이 성립합니다.

$f$가 $0$에서 미분가능하다면 값이 모두 실수이므로 [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (1)에 의해 $f'(0) = 0$입니다. 그런데 $0 < t < 1$에서 $\iota(t)(1 + i) = (t, t)$이고 $\sqrt{|t \cdot t|} = t$이므로 차분몫은 $\iota(t)/(\iota(t)(1 + i)) = (1 + i)^{-1} = (1 - i)/2$이고, 그 실수부는 $1/2$입니다. [[limit-of-complex-function|복소함수의 극한]]의 (10)의 (i)을 $J = (0, 1)$, $c = 0$, 방향 $1 + i$에 쓰면 값이 $1/2$인 상수함수가 $\operatorname{Re} f'(0) = 0$으로 수렴해야 하므로 모순입니다. 곧 (3)의 거꾸로는 성립하지 않을 수 있고, 이 함수에서는 (4)의 가정 (ii)가 성립하지 않습니다((ii)가 성립했다면 (4)에 의해 미분가능했을 것입니다).
:::

## 확인 질문

:::check[켤레를 취하는 함수에 코시–리만 방정식을 쓰면 무엇이 나오는가?]
$f(z) = \overline{z}$이면 $u(z) = \operatorname{Re} z$, $v(z) = -\operatorname{Im} z$입니다. 모든 점 $w$에서 $u(w + \iota(t)) = \operatorname{Re} w + t$, $v(w + \iota(t) i) = -\operatorname{Im} w - t$이므로 $u_x(w) = 1$, $v_y(w) = -1$이고, $u_x = v_y$가 어느 점에서도 성립하지 않습니다. (3)에 의해 $f$는 어느 점에서도 미분가능하지 않습니다.
:::

:::check[$f$가 $z_0$에서 미분가능하고 $u_x(z_0) = 3$, $v_x(z_0) = -1$이면 $f'(z_0)$, $u_y(z_0)$, $v_y(z_0)$는 무엇인가?]
(3)에 의해 $f'(z_0) = 3 - i$이고, $v_y(z_0) = u_x(z_0) = 3$, $u_y(z_0) = -v_x(z_0) = 1$입니다.
:::
