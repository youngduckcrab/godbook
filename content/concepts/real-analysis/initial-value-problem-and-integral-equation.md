---
title: 초깃값 문제와 적분방정식
title_en: Initial Value Problems and the Integral Equation
aliases: [초깃값 문제, 초깃값 문제의 해, 적분방정식, 1계 상미분방정식, initial value problem, integral equation, first order ordinary differential equation]
kind: theorem
field: real-analysis
msc: ["34A12", "26A42"]
level: undergrad
summary: 직사각형 I × J 위의 연속함수 F 에 대해 초깃값 문제 y′ = F(x, y), y(x₀) = y₀ 의 해를 정의하고, 실함수 f 가 해인 것은 정확히 f 가 연속이고 값이 J 에 들며 모든 x 에서 f(x) = y₀ + ∫ F(t, f(t)) dt (x₀ 부터 x 까지의 방향 있는 적분)일 때임을 미적분의 기본정리의 두 꼴로 보인다. 해는 연속미분가능하고, 더 작은 구간으로 제한해도 해이며, F 가 둘째 변수에 의존하지 않으면 해는 적분 하나로 정해진다.
requires: [set, subset, function, adding-or-removing-an-element, real-number-arithmetic, real-order-axioms, order-properties-of-reals, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, derivative, differentiable-implies-continuous, derivative-rules, oriented-integral, continuously-differentiable, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form, antiderivative-and-integral-of-power, exponential-function, continuous-function-on-a-rectangle]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.3.1절 First order ordinary differential equation (p.246); 6.3.2절 Theorem 6.3.2 증명 첫머리의 식 (6.2) (p.247); 7.6.2절 Picard's theorem 의 적분방정식 문단 (pp.297–298)과 Theorem 7.6.3 증명의 끝 (p.299); 6.3.3절 Remark 6.3.7 (p.252)"
    checked: original
    note: "해의 정의는 출처 6.3.1절(p.246)의 것(y(x₀) = y₀ 이고 y′(x) = F(x, y(x)) 인 함수 y(x))과 같고, 이 항목은 정의역을 구간 I′ 으로, 값이 J 에 든다는 것을 조건으로 밝혀 적는다. 출처는 y(x₀) = y₀ 을 'initial condition' 이라 부르고, '초깃값 문제'(initial value problem)라는 말은 출처에 나오지 않는다(검색어 'initial value', 'initial-value', 'value problem', 'Cauchy problem' — 'initial value' 는 p.67 의 수열의 첫 항 1건뿐이다). (1)은 출처가 Theorem 6.3.2 의 증명 첫머리(p.247)에서 '미적분의 기본정리를 써서' 식 (6.1)을 적분방정식 (6.2) f(x) = y₀ + ∫_{x₀}^x F(t, f(t)) dt 로 쓴다고 한 문장과, 7.6.2절(p.298)의 '이 적분방정식을 풀려면 연속함수만 있으면 된다'는 문단을 양방향의 진술로 올린 것이다. 출처는 두 조건이 같다는 것을 증명하지 않고, Theorem 7.6.3 의 증명 끝(p.299)에서 고정점이 적분방정식을 만족하면 미적분의 기본정리에 의해 미분가능하고 도함수가 F(x, f(x)) 라고만 적는다. 이 항목은 x₀ = 0 으로 줄이지 않고 방향 있는 적분으로 x < x₀ 를 함께 다룬다. (3)은 출처 6.3.1절(p.246)의 'F 가 x 변수만 담으면 해는 미적분의 기본정리로 주어진다'를 진술로 올린 것이고, 출처 5.3.2절(p.202)도 미적분의 기본정리 둘째 꼴이 미분방정식 F′(x) = f(x) 를 푸는 방법을 준다고 적는다. (3)의 (iii)(F 가 상수 0 이면 해는 상수함수)은 출처 4.2.4절 Proposition 4.2.6(p.165, 구간 위에서 f′ = 0 인 미분가능한 함수는 상수. 출처는 이것을 '우리의 첫 미분방정식'이라 부른다)과 같은 결론이고, 이 항목은 평균값 정리 대신 적분방정식으로 얻는다. 출처 Remark 6.3.7(p.252)은 F 가 연속이 아닐 때(헤비사이드 함수) 적분방정식만 만족하고 미분가능하지 않은 '약한 해'를 들며, 이 항목의 (1)에서 F 의 연속이 하는 일을 보여 준다. 예시 'ℝ 위의 f′ = f, f(0) = 1 의 해 exp' 는 출처 Example 6.3.3(p.250)과 7.6.2절(p.297)의 y′ = y, y(0) = 1 과 같은 초깃값 문제이고, 출처 5.4.2절 Remark 5.4.4(p.211)도 지수함수를 이 미분방정식의 해로 정의하는 길을 적는다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이던 설명 문장 3건을 고치고 뒤 항목이 쓸 진술 3개를 더했으며 메모의 겹침 약 10건을 작성자가 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
구간과 닫힌구간은 [[interval]]의 것이고, $I \times J$ 위의 연속함수는 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 것이다. 실함수와 그 연산은 [[real-valued-function]]의 것이고, 연속함수는 [[continuous-function|연속함수]]의 것이며, 미분가능, 미분가능한 함수와 도함수 $f'$은 [[derivative]]의 것이고, 연속미분가능은 [[continuously-differentiable]]의 것이다. "$\alpha$와 $\beta$ 사이에서 적분가능"과 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. 아래에서 $I$, $J$는 구간이고 $F : I \times J \to \mathbb{R}$는 연속함수이며, $x_0 \in I$이고 $y_0$은 실수이다. $I'$은 구간이고 $I' \subseteq I$, $x_0 \in I'$이다.

**초깃값 문제와 그 해.** 실함수 $f : I' \to \mathbb{R}$가 $I'$ 위에서 **초깃값 문제**(initial value problem)
$$
y' = F(x, y), \qquad y(x_0) = y_0
$$
의 **해**(solution)라는 것은 정확히 다음 셋이 모두 성립할 때이다.

- (a) 모든 $x \in I'$에서 $f(x) \in J$이다.
- (b) $f$는 미분가능한 함수이고, 모든 $x \in I'$에서 $f'(x) = F(x, f(x))$이다.
- (c) $f(x_0) = y_0$이다.

(a)에 의해 $(x, f(x)) \in I \times J$이므로 (b)의 $F(x, f(x))$가 정해진다. 위의 식은 문제를 적는 관습적인 꼴이고, 글자 $y$는 찾는 함수를 가리키는 이름일 뿐이다. (a)가 성립하면 같은 집합 $f$를 $f : I' \to J$로도 쓴다.

**적분방정식의 뜻.** $f : I' \to \mathbb{R}$가 연속함수이고 (a)를 만족하면, [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (4)에 의해 $t$에서의 값이 $F(t, f(t))$인 함수 $G : I' \to \mathbb{R}$는 연속함수이고, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 $G$는 $I'$의 어느 두 점 사이에서도 적분가능하다. 그래서 $x \in I'$마다 방향 있는 적분
$$
\int_{x_0}^{x} F(t, f(t))\,dt = \int_{x_0}^{x} G
$$
가 정해진다. $x = x_0$이면 이 값은 $0$이고, $x < x_0$이면 $-\int_x^{x_0} G$이다.

1. (적분방정식) 실함수 $f : I' \to \mathbb{R}$가 $I'$ 위에서 위 초깃값 문제의 해인 것은 정확히 다음 셋이 모두 성립할 때이다. (a) 모든 $x \in I'$에서 $f(x) \in J$이다. $f$는 연속함수이다. 모든 $x \in I'$에서
   $$
   f(x) = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt
   $$
   이다. 마지막 식을 이 초깃값 문제의 **적분방정식**(integral equation)이라 한다.
2. (해의 성질) $f$가 $I'$ 위에서 해라고 하자.
   - (i) $f$는 연속미분가능하고, 그 도함수는 위의 $G$이다. 곧 $f' = G$이다.
   - (ii) $y_0 \in J$이다. 따라서 $y_0 \notin J$이면 어느 구간 $I'$ 위에서도 해가 없다.
   - (iii) (제한) $I''$이 구간이고 $I'' \subseteq I'$, $x_0 \in I''$이면 제한 $f|_{I''}$은 $I''$ 위에서 같은 초깃값 문제의 해이다.
3. (둘째 변수에 의존하지 않는 경우) $\varphi : I \to \mathbb{R}$가 연속함수이고 $I \times J$의 모든 점에서 $F(x, y) = \varphi(x)$라 하자. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 $\varphi$는 $I$의 어느 두 점 사이에서도 적분가능하다.
   - (i) 실함수 $f : I' \to \mathbb{R}$가 $I'$ 위에서 해인 것은 정확히, 모든 $x \in I'$에서 $f(x) = y_0 + \int_{x_0}^{x} \varphi(t)\,dt$이고 이 값들이 모두 $J$에 들 때이다.
   - (ii) 따라서 $I'$ 위의 해는 많아야 하나이다. $x \in I'$에서의 값이 $y_0 + \int_{x_0}^{x} \varphi(t)\,dt$인 함수의 값이 모두 $J$에 들면 이 함수가 그 해이고, 그렇지 않으면 $I'$ 위에서 해가 없다.
   - (iii) 특히 $F$가 상수 $0$이면, $I'$ 위의 해가 있는 것은 정확히 $y_0 \in J$일 때이고, 그때 해는 $I'$ 위의 값이 $y_0$인 상수함수이다.
4. (직사각형 바꾸기) $I_1$, $J_1$이 구간이고 $I' \subseteq I_1 \subseteq I$, $J_1 \subseteq J$라 하자. [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)의 (iii)에 의해 $F_1 = F|_{I_1 \times J_1}$은 $I_1 \times J_1$ 위의 연속함수이다. 실함수 $f : I' \to \mathbb{R}$가 $I'$ 위에서 초깃값 문제 $y' = F_1(x, y)$, $y(x_0) = y_0$의 해인 것은 정확히 $f$가 $I'$ 위에서 초깃값 문제 $y' = F(x, y)$, $y(x_0) = y_0$의 해이고 $f$의 값이 모두 $J_1$에 들 때이다.
:::

:::english
Intervals and closed intervals are as in the entry on intervals, and continuous functions on $I \times J$ are as in the entry on continuous functions on a closed rectangle. Real-valued functions and their operations are as in the entry on real-valued functions, continuous functions are as in the entry on continuous functions, differentiability, differentiable functions and the derivative $f'$ are as in the entry on derivatives, and continuous differentiability is as in the corresponding entry. "Integrable between $\alpha$ and $\beta$" and the oriented integral $\int_\alpha^\beta f$ are as in the entry on oriented integrals. Throughout, $I$ and $J$ are intervals, $F : I \times J \to \mathbb{R}$ is a continuous function, $x_0 \in I$, and $y_0$ is a real number. $I'$ is an interval with $I' \subseteq I$ and $x_0 \in I'$.

**Initial value problems and their solutions.** A real-valued function $f : I' \to \mathbb{R}$ is a **solution** on $I'$ of the **initial value problem**
$$
y' = F(x, y), \qquad y(x_0) = y_0
$$
precisely when all three of the following hold.

- (a) $f(x) \in J$ for all $x \in I'$.
- (b) $f$ is a differentiable function and $f'(x) = F(x, f(x))$ for all $x \in I'$.
- (c) $f(x_0) = y_0$.

By (a), $(x, f(x)) \in I \times J$, so $F(x, f(x))$ in (b) is defined. The displayed formula is the customary way of writing the problem, and the letter $y$ merely names the unknown function. When (a) holds, the same set $f$ is also written $f : I' \to J$.

**Meaning of the integral equation.** If $f : I' \to \mathbb{R}$ is a continuous function satisfying (a), then by part (4) of the entry on continuous functions on a closed rectangle the function $G : I' \to \mathbb{R}$ whose value at $t$ is $F(t, f(t))$ is a continuous function, and by part (4) of the second form of the fundamental theorem of calculus $G$ is integrable between any two points of $I'$. Hence for each $x \in I'$ the oriented integral
$$
\int_{x_0}^{x} F(t, f(t))\,dt = \int_{x_0}^{x} G
$$
is defined. Its value is $0$ when $x = x_0$, and $-\int_x^{x_0} G$ when $x < x_0$.

1. (The integral equation) A real-valued function $f : I' \to \mathbb{R}$ is a solution on $I'$ of the initial value problem above precisely when all three of the following hold: (a) $f(x) \in J$ for all $x \in I'$; $f$ is a continuous function; and for all $x \in I'$,
   $$
   f(x) = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt.
   $$
   The last equation is called the **integral equation** of this initial value problem.
2. (Properties of solutions) Let $f$ be a solution on $I'$.
   - (i) $f$ is continuously differentiable, and its derivative is the function $G$ above; that is, $f' = G$.
   - (ii) $y_0 \in J$. Consequently, if $y_0 \notin J$, there is no solution on any interval $I'$.
   - (iii) (Restriction) If $I''$ is an interval with $I'' \subseteq I'$ and $x_0 \in I''$, then the restriction $f|_{I''}$ is a solution on $I''$ of the same initial value problem.
3. (The case not depending on the second variable) Let $\varphi : I \to \mathbb{R}$ be a continuous function with $F(x, y) = \varphi(x)$ at every point of $I \times J$. By part (4) of the second form of the fundamental theorem of calculus, $\varphi$ is integrable between any two points of $I$.
   - (i) A real-valued function $f : I' \to \mathbb{R}$ is a solution on $I'$ precisely when $f(x) = y_0 + \int_{x_0}^{x} \varphi(t)\,dt$ for all $x \in I'$ and all these values lie in $J$.
   - (ii) Hence there is at most one solution on $I'$. If all values of the function whose value at $x \in I'$ is $y_0 + \int_{x_0}^{x} \varphi(t)\,dt$ lie in $J$, this function is the solution; otherwise there is no solution on $I'$.
   - (iii) In particular, if $F$ is the constant $0$, a solution on $I'$ exists precisely when $y_0 \in J$, and then the solution is the constant function on $I'$ with value $y_0$.
4. (Changing the rectangle) Let $I_1$ and $J_1$ be intervals with $I' \subseteq I_1 \subseteq I$ and $J_1 \subseteq J$. By part (2)(iii) of the entry on continuous functions on a closed rectangle, $F_1 = F|_{I_1 \times J_1}$ is a continuous function on $I_1 \times J_1$. A real-valued function $f : I' \to \mathbb{R}$ is a solution on $I'$ of the initial value problem $y' = F_1(x, y)$, $y(x_0) = y_0$ precisely when $f$ is a solution on $I'$ of the initial value problem $y' = F(x, y)$, $y(x_0) = y_0$ and all values of $f$ lie in $J_1$.
:::

## 직관

초깃값 문제는 "지금 시각과 지금 위치에 따라 속도가 정해지는 움직임"을 적은 것입니다. $f(x)$를 시각 $x$의 위치라 하면, $F(x, f(x))$는 그 시각 그 위치에서의 속도이고, $f(x_0) = y_0$은 처음 시각 $x_0$의 위치입니다. 위치는 처음 위치에 그때까지의 속도를 쌓은 것이므로, 시각 $x$의 위치는 $y_0$에 속도를 $x_0$부터 $x$까지 적분한 것을 더한 값입니다. 이것이 적분방정식입니다. $x$가 $x_0$보다 앞선 시각이면 방향 있는 적분이 음의 부호를 붙여 거꾸로 거슬러 올라간 만큼을 잽니다.

두 식이 같은 말이라는 것은 미적분의 기본정리의 두 꼴에서 나옵니다. 해에서 적분방정식으로 갈 때는 도함수를 적분하면 함숫값의 차가 된다는 첫째 꼴을 쓰고, 적분방정식에서 해로 갈 때는 연속함수의 적분을 끝점에서 미분하면 피적분함수가 된다는 둘째 꼴을 씁니다. 둘째 방향에서는 $f$에 미분가능을 따로 요구하지 않고 연속만 요구합니다. $f$가 연속이면 $t$를 $F(t, f(t))$로 보내는 함수가 연속이고, 연속함수의 적분은 미분가능하므로 적분방정식이 $f$의 미분가능을 저절로 줍니다. (1)의 증명에서 $F$의 연속은 이 함수가 연속이라는 것, 곧 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (4)를 쓰는 데에만 쓰입니다.

$F$가 둘째 변수 $y$에 의존하지 않으면 속도가 시각만으로 정해지므로, 해는 적분 하나로 정해지고 다른 해가 있을 수 없습니다((3)). 다만 $y_0$에 그 적분을 더한 값이 $J$를 벗어나는 점이 있으면 해가 없습니다. 아래 반례가 그런 경우입니다.

## 증명

:::idea
해이면 $f$는 연속이고 $f'$이 연속함수 $G$이므로, 첫째 꼴로 $\int_{x_0}^{x} f' = f(x) - f(x_0)$을 얻는다. 거꾸로 적분방정식이 성립하면 $f$는 상수 $y_0$과 $G$의 적분의 합이고, 둘째 꼴로 미분가능하며 도함수가 $G$이다.
:::

:::hint
해에서 적분방정식으로 갈 때 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)는 $\alpha$와 $\beta$의 순서를 가리지 않습니다. 그러니 $x < x_0$을 따로 다룰 필요가 없습니다.
:::

:::hint
적분방정식에서 해로 갈 때는 밑점이 $x_0$인 함수 $H(x) = \int_{x_0}^{x} G$를 두면 $f$는 상수함수 $y_0$과 $H$의 합입니다.
:::

:::proof
**(1), 해이면 세 조건이 성립한다.** $f$가 $I'$ 위에서 해라고 하자. (a)는 해의 정의에 있다. (b)에 의해 $f$는 미분가능한 함수이므로 [[differentiable-implies-continuous|미분가능과 연속]]의 (2)에 의해 연속함수이다. 그러므로 진술의 "적분방정식의 뜻" 단락의 $G$가 정해지고 연속함수이다. (b)에 의해 모든 $x \in I'$에서 $f'(x) = F(x, f(x)) = G(x)$이므로 [[real-valued-function]]의 (2)에 의해 $f' = G$이다. 도함수 $f'$이 연속함수이므로 [[continuously-differentiable]]의 정의에 의해 $f$는 연속미분가능하다.

$x \in I'$라 하자. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)의 둘째 문장을 구간 $I'$, 연속미분가능한 $f$, $\alpha = x_0$, $\beta = x$에 쓰면 $f'$은 $x_0$과 $x$ 사이에서 적분가능하고
$$
\int_{x_0}^{x} f' = f(x) - f(x_0)
$$
이다. 이 (2)는 $\alpha$와 $\beta$의 순서와 같음을 가리지 않으므로 $x_0 < x$, $x = x_0$, $x < x_0$이 모두 이 한 줄에 들어간다($x = x_0$이면 양쪽이 모두 $0$이다). $f' = G$이고 (c)에 의해 $f(x_0) = y_0$이므로, (K1)–(K4)로 옮기면 $f(x) = y_0 + \int_{x_0}^{x} G = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt$이다.

**(1), 세 조건이 성립하면 해이다.** (a)가 성립하고 $f$가 연속함수이며 적분방정식이 성립한다고 하자. "적분방정식의 뜻" 단락에 의해 $G : I' \to \mathbb{R}$는 연속함수이다. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]을 구간 $I'$, 함수 $G$, 밑점 $x_0$에 쓰고, 그 항목의 함수 $\int_{x_0}^{x} G$를 여기서는 $H : I' \to \mathbb{R}$라 쓰자. 그 (4)에 의해 $H$는 미분가능한 함수이고 $H' = G$이며, (6)에 의해 $H(x_0) = 0$이다.

$I'$ 위의 값이 $y_0$인 상수함수를 $k$라 하면 [[derivative]]의 (1)에 의해 $k$는 미분가능한 함수이고 모든 점에서 미분계수가 $0$이다. [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $k + H$는 미분가능한 함수이고 모든 $x \in I'$에서 $(k + H)'(x) = 0 + G(x) = G(x)$이다. 적분방정식은 모든 $x \in I'$에서 $f(x) = y_0 + H(x) = (k + H)(x)$라는 것이므로 [[real-valued-function]]의 (2)에 의해 $f = k + H$이다. 따라서 $f$는 미분가능한 함수이고 모든 $x \in I'$에서 $f'(x) = G(x) = F(x, f(x))$이다. 이것이 (b)이다. 또 $f(x_0) = y_0 + H(x_0) = y_0 + 0 = y_0$이므로 (c)가 성립한다.

**(2).** (i) 위 첫 단락에서 $f' = G$이고 $f$가 연속미분가능함을 보였다.

(ii) (a)와 (c)에 의해 $y_0 = f(x_0) \in J$이다. 따라서 $y_0 \notin J$이면 해가 될 수 있는 함수가 없다.

(iii) $I'' \subseteq I' \subseteq I$이므로 $I''$은 $I$에 포함된 구간이고 $x_0 \in I''$이다. [[real-valued-function]]의 (6)에 의해 모든 $x \in I''$에서 $f|_{I''}(x) = f(x) \in J$이다. [[derivative]]의 (2)에 의해 $f|_{I''}$은 미분가능한 함수이고 모든 $x \in I''$에서 $(f|_{I''})'(x) = f'(x) = F(x, f(x)) = F(x, f|_{I''}(x))$이다. $x_0 \in I''$이므로 $f|_{I''}(x_0) = f(x_0) = y_0$이다. 세 조건이 모두 성립한다.

**(3).** $\varphi$가 연속함수이므로 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 $\varphi$는 $I$의 어느 두 점 사이에서도 적분가능하다. $x_0 \in I' \subseteq I$이므로 같은 항목에서 밑점을 $x_0$으로 둔 함수를 $\Phi : I \to \mathbb{R}$, $\Phi(x) = \int_{x_0}^{x} \varphi$라 쓰자. 그 (4)에 의해 $\Phi$는 연속미분가능하고, [[continuously-differentiable]]의 (1)에 의해 연속함수이다.

*적분을 바꿔 쓰기.* $f : I' \to \mathbb{R}$가 연속함수이고 (a)를 만족하면, 모든 $t \in I'$에서 $G(t) = F(t, f(t)) = \varphi(t)$이다. $x \in I'$라 하자. [[oriented-integral]]의 (1)에 의해 $x_0$과 $x$ 사이에 있는 점은 모두 $I'$의 원소이므로 그런 모든 $t$에서 $G(t) = \varphi(t)$이고, 그 (5)를 구간 $I'$ 위의 $G$와 구간 $I$ 위의 $\varphi$, $x_0$, $x \in I' \cap I$에 쓰면 $\int_{x_0}^{x} G = \int_{x_0}^{x} \varphi = \Phi(x)$이다. 따라서 이때 적분방정식은 "모든 $x \in I'$에서 $f(x) = y_0 + \Phi(x)$"와 같은 말이다.

(i) $f$가 해이면 (1)에 의해 $f$는 연속이고 (a)와 적분방정식을 만족하므로, 위 단락에 의해 모든 $x \in I'$에서 $f(x) = y_0 + \Phi(x)$이고 이 값들은 (a)에 의해 $J$에 든다. 거꾸로 모든 $x \in I'$에서 $f(x) = y_0 + \Phi(x)$이고 이 값들이 모두 $J$에 든다고 하자. 그러면 (a)가 성립한다. [[continuous-function]]의 (5)에 의해 제한 $\Phi|_{I'}$은 연속함수이고, $I'$ 위의 값이 $y_0$인 상수함수는 그 (4)에 의해 연속함수이므로, [[continuity-of-sum-and-product|합과 곱의 연속]]의 (3)에 의해 둘의 합은 연속함수이다. [[real-valued-function]]의 (2), (6)에 의해 그 합이 $f$이므로 $f$는 연속함수이다. 그러면 위 단락에 의해 적분방정식이 성립하고, (1)에 의해 $f$는 해이다.

(ii) $f$와 $g$가 둘 다 $I'$ 위의 해이면 (i)에 의해 모든 $x \in I'$에서 $f(x) = y_0 + \Phi(x) = g(x)$이므로 [[real-valued-function]]의 (2)에 의해 $f = g$이다. [[real-valued-function]]의 (1)에 의해 $f_0(x) = y_0 + \Phi(x)$로 정한 함수 $f_0 : I' \to \mathbb{R}$가 있다. (i)에 의해 $f_0$의 값이 모두 $J$에 들면 $f_0$은 해이다. 값 가운데 $J$에 들지 않는 것이 있으면, (i)에 의해 해는 $f_0$과 같은 값을 가져야 하므로 해가 없다.

(iii) $F$가 상수 $0$이면 $\varphi$는 $I$ 위의 값이 $0$인 상수함수이고, [[oriented-integral]]의 (4)에 의해 모든 $x \in I$에서 $\Phi(x) = 0 \cdot (x - x_0) = 0$이다. 그러므로 (ii)의 $f_0$은 $I'$ 위의 값이 $y_0$인 상수함수이고, 그 값이 모두 $J$에 드는 것은 정확히 $y_0 \in J$일 때이다. (ii)에 의해 (iii)이 성립한다.

**(4).** $x_0 \in I' \subseteq I_1$이므로 $F_1$에 대한 초깃값 문제의 해도 위의 정의대로 뜻이 정해진다. $x \in I'$이고 $f(x) \in J_1$이면 $(x, f(x)) \in I_1 \times J_1$이므로 [[adding-or-removing-an-element]]의 진술에 의해 $F_1(x, f(x)) = F(x, f(x))$이다. $f$가 $F_1$에 대한 해이면, 값이 모두 $J_1 \subseteq J$에 들고, 모든 $x \in I'$에서 $f'(x) = F_1(x, f(x)) = F(x, f(x))$이며 $f(x_0) = y_0$이므로 $f$는 $F$에 대한 해이다. 거꾸로 $f$가 $F$에 대한 해이고 값이 모두 $J_1$에 들면, 모든 $x \in I'$에서 $f'(x) = F(x, f(x)) = F_1(x, f(x))$이고 $f(x_0) = y_0$이므로 $f$는 $F_1$에 대한 해이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{R}$ 위의 $f' = f$, $f(0) = 1$의 해 $\exp$]
$I = J = \mathbb{R}$이고 $F(x, y) = y$라 합시다. $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이고, $F$는 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)의 (i)에 의해 연속입니다. $x_0 = 0$, $y_0 = 1$, $I' = \mathbb{R}$로 둡니다.

지수함수 $\exp$는 [[exponential-function|지수함수]]의 (3)에 의해 미분가능한 함수이고 모든 $x$에서 $\exp'(x) = \exp(x) = F(x, \exp(x))$이며, 같은 항목의 (1)에 의해 $\exp(0) = 1$입니다. 값은 모두 $J = \mathbb{R}$에 듭니다. 그러므로 $\exp$는 $\mathbb{R}$ 위에서 이 초깃값 문제의 해이고, 이 항목의 (1)에 의해 모든 실수 $x$에서
$$
\exp(x) = 1 + \int_0^x \exp(t)\,dt
$$
입니다. 예컨대 $x = -1$이면 $\exp(-1) = 1 - \int_{-1}^{0} \exp(t)\,dt$입니다. 또 $\mathbb{R}$ 위의 해 $f$는 미분가능하고 $f' = f$, $f(0) = 1$이므로 [[exponential-function|지수함수]]의 (5)에 의해 $f = \exp$입니다. $\mathbb{R}$ 위의 해는 $\exp$ 하나뿐입니다. (2)의 (iii)에 의해 $0$을 포함하는 어느 구간으로 제한해도 $\exp$의 제한은 해입니다.
:::

:::example[$f' = 2x$, $f(1) = 0$: $x_0$보다 왼쪽에서도 같은 식]
$I = J = \mathbb{R}$이고 $F(x, y) = 2x$, $x_0 = 1$, $y_0 = 0$이라 합시다. $\varphi(x) = 2x$로 정한 $\varphi : \mathbb{R} \to \mathbb{R}$는 [[continuity-of-sum-and-product|합과 곱의 연속]]의 (3)과 [[continuous-function]]의 (4)에 의해 연속함수이므로 (3)을 쓸 수 있습니다.

[[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)과 [[derivative]]의 (1)에 의해 값이 $x^2 = xx$인 함수는 미분가능하고 도함수가 $\varphi$이므로 $\varphi$의 원시함수이고, [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (2)에 의해 모든 실수 $x$에서 $\int_1^x 2t\,dt = x^2 - 1$입니다. 이 값은 모두 $J = \mathbb{R}$에 들므로 (3)의 (ii)에 의해 $\mathbb{R}$ 위의 해는 $f(x) = x^2 - 1$ 하나입니다. $x = 0 < x_0$에서도 방향 있는 적분으로 $\int_1^0 2t\,dt = -\int_0^1 2t\,dt = -1$이고, 실제로 $f(0) = -1$입니다.
:::

:::counterexample[$F = 1$, $J = [0, 1]$, $y_0 = 0$: $[-1, 1]$에서는 해가 없고 $[0, 1]$에서는 해가 있는 예]
$I = [-1, 1]$, $J = [0, 1]$이고 $F(x, y) = 1$, $x_0 = 0$, $y_0 = 0$이라 합시다. $y_0$은 $J$의 끝점입니다. $F$는 값이 $1$인 상수함수 $\varphi : I \to \mathbb{R}$로 $F(x, y) = \varphi(x)$이므로 (3)을 쓸 수 있고, [[oriented-integral]]의 (4)에 의해 $\int_0^x 1\,dt = x$입니다.

$I' = [-1, 1]$이면 (3)의 (ii)의 함수는 $f_0(x) = x$이고, $f_0(-\tfrac{1}{2}) = -\tfrac{1}{2} \notin J$입니다. 그러므로 $[-1, 1]$ 위에서는 해가 없습니다. $I' = [0, 1]$이면 같은 식의 값 $x$가 모두 $[0, 1] = J$에 들므로 $f_0(x) = x$가 $[0, 1]$ 위의 해입니다. 조건 (a)를 빼면 $f_0(x) = x$는 $[-1, 1]$ 전체에서 $f_0' = 1$, $f_0(0) = 0$을 만족하지만, 값이 $J$에 들어야 한다는 (a) 때문에 해가 되는 구간이 줄어듭니다.
:::

## 확인 질문

:::check[$I = J = \mathbb{R}$, $F(x, y) = x + y$, $x_0 = 0$, $y_0 = -1$일 때, $f(x) = -1 - x$는 $\mathbb{R}$ 위의 해인가?]
그렇습니다. $F$는 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)에 의해 연속입니다. $f$는 미분가능하고 $f'(x) = -1$이며, $F(x, f(x)) = x + (-1 - x) = -1$이므로 (b)가 성립하고, $f(0) = -1$입니다. 적분방정식으로 확인하면 $t$에서 $F(t, f(t)) = -1$이므로 [[oriented-integral]]의 (4)에 의해 $-1 + \int_0^x (-1)\,dt = -1 - x = f(x)$입니다.
:::

:::check[$I = \mathbb{R}$, $J = [0, 1]$, $F$가 상수 $0$, $x_0 = 0$일 때, $y_0 = 2$이면 해가 있는가? $y_0 = 1$이면?]
$y_0 = 2$이면 $2 \notin J$이므로 (2)의 (ii)에 의해 어느 구간 위에서도 해가 없습니다. $y_0 = 1$이면 $1 \in J$이므로 (3)의 (iii)에 의해 $0$을 포함하는 어느 구간 $I'$ 위에서도 해가 있고, 그것은 값이 $1$인 상수함수입니다.
:::
