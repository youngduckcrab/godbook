---
title: 자연로그
title_en: Natural Logarithm
aliases: [로그, 로그함수, 자연로그 함수, ln, natural logarithm, logarithm]
kind: definition
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "양의 실수 전체의 구간 위에서 자연로그를 ln x = ∫ t⁻¹ dt (1 에서 x 까지의 방향 있는 적분)로 정의한다. ln 1 = 0 이고, ln 은 미분가능하며 도함수는 x⁻¹ 이고, 순증가이며, 이 두 성질을 가진 함수는 ln 하나뿐이다. 또 1/t 의 적분은 ln 의 값의 차이고, x ≠ 1 이면 1 − x⁻¹ < ln x < x − 1 이다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, injective-surjective-bijective, interval, real-valued-function, bounded-function, continuous-function, continuity-of-sum-and-product, derivative, mean-value-theorem, derivative-and-monotonicity, riemann-integral, oriented-integral, continuously-differentiable, fundamental-theorem-of-calculus-second-form, antiderivative-and-integral-of-power]
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.1 소절 The logarithm) Proposition 5.4.1 의 (i)(ii)와 증명의 첫 두 문단·(iv)의 증명·(iii)의 증명·유일성 문단 (p.207–208), ln 의 정의 문단 (p.208), Figure 5.6 (p.209); 5.3절(5.3.2 소절 Second form of the theorem) Remark 5.3.4 와 자연로그 문단 (p.203); 5.3.3 소절 Example 5.3.7 (p.204); 5.3.4 소절 연습문제 5.3.4, 5.3.6 (p.205); 5.4.3 소절 연습문제 5.4.6 (p.212); 5.5절 Proposition 5.5.2 (p.214); 3.2절(3.2.1 소절) Example 3.2.3 (p.123), 3.2.4 소절 연습문제 3.2.2 (p.127); 3.3절(3.3.1 소절) Example 3.3.6 (p.132)
    checked: original
    note: "출처의 Proposition 5.4.1(5.4.1 소절, p.207, PDF 그림으로 대조)은 (0, ∞) 위의 함수 L 가운데 (i) L(1) = 0, (ii) 미분가능하고 L′(x) = 1/x, (iii)–(v)를 만족하는 것이 정확히 하나 있다는 명제이고, 증명은 L(x) := ∫_1^x (1/t) dt 로 존재를 보인 뒤 (i)은 'Obviously', (ii)는 미적분의 기본정리 둘째 꼴(Theorem 5.3.3)로 얻고, 유일성은 첫째 꼴(Theorem 5.3.1)로 한 문장에 적는다(p.208). 그 뒤 ln(x) := L(x) 로 정하고 '수학자들은 보통 log(x) 로 쓴다'고 적는다(p.208). 이 항목은 존재·유일성 명제를 거치지 않고 적분으로 바로 정의하며, (1), (2), (4)가 출처의 (i), (ii)와 유일성이다. 출처의 유일성 문장(p.208)은 L(1) = 0 이고 L′(x) = 1/x 인 함수가 ∫_1^x (1/t) dt 하나뿐이라는 것이다. (4)의 앞 문장(G(x) = ln x + G(1))은 그것을 G(1) 이 0 이 아닌 경우까지 적은 꼴이고(로그의 성질 (1)의 증명이 이 꼴을 쓴다), 증명은 첫째 꼴 대신 도함수가 같은 두 함수의 차가 상수라는 정리로 한다. 출처 연습문제 5.3.6(5.3.4 소절, p.205)은 [a, b] 위의 연속미분가능한 두 함수에 대해 같은 사실을 기본정리로 보이게 한다. (3)의 순증가와 단사는 출처 (iii)의 증명 첫 문장(p.208; L′(x) = 1/x > 0 이므로 순증가이고 단사)과 같다. (5)의 α = 1, β = 4 인 경우를 출처 Figure 5.6(p.209; 1/x 아래 1 부터 4 까지의 넓이가 ln(4))이 그림으로 보이고, (5)를 α = y, β = xy 에 쓴 식 ∫_y^{xy} (1/u) du = L(xy) − L(y) 는 출처 (iv)의 증명(p.207)에 나온다. 출처 5.3.2 소절의 문단(p.203)도 자연로그를 'ln 1 = 0 인 1/x 의 원시함수' ln x := ∫_1^x (1/s) ds 로 정의한다. 출처는 정의역을 (0, ∞) 로 쓰고, 이 사이트는 구간 기호에 ∞ 를 쓰지 않으므로 ℝ_{>0} 로 쓴다. 출처는 (ii)의 근거로 [a, b] 위의 정리인 Theorem 5.3.3 을 든다(p.207). 이 항목은 구간 위에서 밑점을 아무 점으로 둔 이 사이트의 둘째 꼴 (4)로 정의를 정당화하고, x < 1 에서 ln x 가 방향 있는 적분 −∫_x^1 t⁻¹ dt 라는 것을 정의에 적는다. r = 1/t 의 연속은 출처 Example 3.2.3(3.2.1 소절, p.123; (0, ∞) 위의 1/x 는 연속)과 같은 사실이고, 출처 연습문제 3.2.2(3.2.4 소절, p.127)는 이것을 연속의 정의로 직접 보이게 한다. (6)의 어림은 미분의 평균값 정리로 증명한다. 출처 (iii)의 증명에서 [1, 2] 위에서 1/t ≥ 1/2 로 얻는 L(2) ≥ 1/2(p.208)는 (6)의 x = 2 인 왼쪽 부등식 1/2 < ln 2 와 같은 수의 어림이다. 출처 연습문제 5.4.6 a)(5.4.3 소절, p.212; n ≥ 2 에서 Σ_{k=2}^{n} 1/k ≤ ln n ≤ Σ_{k=1}^{n−1} 1/k)는 (6)을 x = (k + 1)/k 에 써서 더하면 나오는 부등식이다. 예시 '0 과 1 사이의 점에서의 값'의 점 2⁻¹ 은 출처 (iii)의 증명이 음수 값을 얻으려고 넣는 x = 2⁻ⁿ(p.208)에서 n = 1 인 점이다. 예시 'ln 2 의 어림을 좁히기'의 둘째 줄은 위의 L(2) ≥ 1/2 와 같은 발상(작은 구간에서 1/t 를 상수로 누르기)을 [3/2, 2] 에 쓴 것이다. 반례 '밑점 0'은 출처 Example 5.3.7(5.3.3 소절, p.204; ln|x|/x 는 0 에서 정의되지 않고 0 에서의 값을 어떻게 정해도 연속이 되지 않으며, 유계가 아니므로 [−1, 1] 에서 리만 적분가능하지 않다)과 같은 발상이다. 그 반례의 함수(x = 1 이고 f(0) = 0 일 때)는 출처 Example 3.3.6(3.3.1 소절, p.132; [0, 1] 위에서 x > 0 이면 1/x, f(0) = 0 으로 정한 함수는 최댓값을 갖지 않는다)과 같은 대상이다. 출처 5.5절 Proposition 5.5.2(소절 앞, p.214)는 이상적분 ∫_0^1 x^{−p} dx 가 p ≥ 1 이면 발산한다고 적는다(이 사이트는 이상적분을 다루지 않는다). 확인 질문 2 는 출처 Remark 5.3.4(5.3.2 소절, p.203; 둘째 꼴의 밑점을 [a, b] 의 아무 점으로 바꾸어도 된다)를 밑점 2 에 쓴 것과 같은 발상이고, 출처는 그 증명을 연습문제 5.3.4(5.3.4 소절, p.205)로 둔다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이던 예시의 일반 문장 2개와 메모의 부정 주장 2개를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
구간은 [[interval]]의 것이고, 실함수, 항등함수와 제한은 [[real-valued-function]]의 것이며, 연속과 연속함수는 [[continuous-function]]의 것이다. 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]]의 것이고, 연속미분가능은 [[continuously-differentiable]]의 것이며, 순증가는 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 것이고, 원시함수는 [[antiderivative-and-integral-of-power]]의 것이다. 방향 있는 적분 $\int_\alpha^\beta f$와 적분 변수를 쓴 $\int_\alpha^\beta f(t)\,dt$는 [[oriented-integral]]의 것이고, 밑점은 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 것이다. 단사는 [[injective-surjective-bijective|단사·전사·전단사]] 항목의 것이고, $t^{-1}$은 [[real-number-arithmetic]]의 역수이다.

**양의 실수 전체의 집합.** $\mathbb{R}_{>0} = \{x \in \mathbb{R} : 0 < x\}$로 쓴다. [[interval]]의 (2)에 의해 $\mathbb{R}_{>0}$은 구간이다. $1 \in \mathbb{R}_{>0}$이고, $x \in \mathbb{R}_{>0}$이면 $x \ne 0$이며 $x^{-1} \in \mathbb{R}_{>0}$이다(아래 증명).

**자연로그.** $r(t) = t^{-1}$로 정한 함수 $r : \mathbb{R}_{>0} \to \mathbb{R}$는 연속함수이다(아래 증명). 따라서 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $r$는 $\mathbb{R}_{>0}$의 어느 두 점 사이에서도 적분가능하고, 밑점을 $1$로 하여
$$
\ln x = \int_1^x t^{-1}\,dt
$$
로 정한 함수 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$가 있다. 이 함수를 **자연로그**(natural logarithm)라 하고, $\ln x$를 $x$의 자연로그라 한다. 인자가 한 글자나 한 수가 아닐 때는 $\ln(xy)$, $\ln(x^{-1})$처럼 괄호를 친다. $0 < x < 1$이면 방향 있는 적분의 정의에 의해 $\ln x = -\int_x^1 t^{-1}\,dt$이고, 오른쪽의 적분은 $[x, 1]$ 위의 적분이다. $x = 1$이면 $\ln x = 0$이고, $1 < x$이면 $\ln x$는 $[1, x]$ 위의 적분이다.

다음이 성립한다. 아래에서 $x$, $y$, $\alpha$, $\beta$는 $\mathbb{R}_{>0}$의 원소이다.

1. (밑점) $\ln 1 = 0$이다.
2. (도함수) $\ln$은 미분가능한 함수이고 모든 $x$에서 $\ln'(x) = x^{-1}$이다. 곧 $\ln$은 $r$의 원시함수이다. 또 $\ln$은 연속미분가능하고 연속함수이다.
3. (순증가와 부호) $\ln$은 순증가이다. $x < y$인 것은 정확히 $\ln x < \ln y$일 때이고, $x = y$인 것은 정확히 $\ln x = \ln y$일 때이다. 따라서 $\ln$은 단사이다. $0 < x < 1$이면 $\ln x < 0$이고, $1 < x$이면 $0 < \ln x$이다.
4. (유일성) $G : \mathbb{R}_{>0} \to \mathbb{R}$가 미분가능한 함수이고 모든 $x$에서 $G'(x) = x^{-1}$이면, 모든 $x$에서 $G(x) = \ln x + G(1)$이다. 특히 여기에 더해 $G(1) = 0$이면 $G = \ln$이다.
5. ($t^{-1}$의 적분) $\displaystyle\int_\alpha^\beta t^{-1}\,dt = \ln \beta - \ln \alpha$이다. $\alpha$와 $\beta$의 순서와 같음은 아무래도 좋다.
6. (어림) 모든 $x$에서
   $$
   1 - x^{-1} \le \ln x \le x - 1
   $$
   이다. $x \ne 1$이면 두 부등호가 모두 $<$로 성립하고, $x = 1$이면 세 수가 모두 $0$이다. 특히 $2^{-1} < \ln 2 < 1$이고 $0 < \ln 2$이다.
:::

:::english
Intervals are those of the entry on intervals; real-valued functions, identity functions and restrictions are those of the entry on real-valued functions; continuity and continuous functions are those of the entry on continuous functions. Differentiability, derivatives at a point, differentiable functions and the derivative are those of the entry on derivatives; continuous differentiability is that of the entry on continuously differentiable functions; strictly increasing is that of the entry on derivatives and monotonicity; antiderivatives are those of the entry on antiderivatives. The oriented integral $\int_\alpha^\beta f$ and the form $\int_\alpha^\beta f(t)\,dt$ with a variable of integration are those of the entry on the oriented integral, and the base point is that of the second form of the fundamental theorem of calculus. Injectivity is that of the entry on injective, surjective and bijective functions, and $t^{-1}$ is the reciprocal of the entry on real number arithmetic.

**The set of positive reals.** We write $\mathbb{R}_{>0} = \{x \in \mathbb{R} : 0 < x\}$. By the entry on intervals, $\mathbb{R}_{>0}$ is an interval. We have $1 \in \mathbb{R}_{>0}$, and if $x \in \mathbb{R}_{>0}$, then $x \ne 0$ and $x^{-1} \in \mathbb{R}_{>0}$ (proved below).

**The natural logarithm.** The function $r : \mathbb{R}_{>0} \to \mathbb{R}$ defined by $r(t) = t^{-1}$ is continuous (proved below). Hence, by (4) of the second form of the fundamental theorem of calculus, $r$ is integrable between any two points of $\mathbb{R}_{>0}$, and with base point $1$ there is a function $\ln : \mathbb{R}_{>0} \to \mathbb{R}$ defined by
$$
\ln x = \int_1^x t^{-1}\,dt.
$$
This function is called the **natural logarithm**, and $\ln x$ is called the natural logarithm of $x$. When the argument is not a single letter or a single number, we use parentheses, as in $\ln(xy)$ and $\ln(x^{-1})$. If $0 < x < 1$, then by the definition of the oriented integral $\ln x = -\int_x^1 t^{-1}\,dt$, where the integral on the right is the integral over $[x, 1]$. If $x = 1$, then $\ln x = 0$, and if $1 < x$, then $\ln x$ is the integral over $[1, x]$.

The following hold, where $x$, $y$, $\alpha$, $\beta$ are elements of $\mathbb{R}_{>0}$.

1. (Base point) $\ln 1 = 0$.
2. (Derivative) $\ln$ is a differentiable function and $\ln'(x) = x^{-1}$ for all $x$. That is, $\ln$ is an antiderivative of $r$. Moreover, $\ln$ is continuously differentiable and is a continuous function.
3. (Strictly increasing; sign) $\ln$ is strictly increasing. We have $x < y$ exactly when $\ln x < \ln y$, and $x = y$ exactly when $\ln x = \ln y$. Hence $\ln$ is injective. If $0 < x < 1$, then $\ln x < 0$, and if $1 < x$, then $0 < \ln x$.
4. (Uniqueness) If $G : \mathbb{R}_{>0} \to \mathbb{R}$ is a differentiable function with $G'(x) = x^{-1}$ for all $x$, then $G(x) = \ln x + G(1)$ for all $x$. In particular, if in addition $G(1) = 0$, then $G = \ln$.
5. (Integral of $t^{-1}$) $\displaystyle\int_\alpha^\beta t^{-1}\,dt = \ln \beta - \ln \alpha$, in any order of $\alpha$ and $\beta$, equal or not.
6. (Estimate) For all $x$,
   $$
   1 - x^{-1} \le \ln x \le x - 1.
   $$
   If $x \ne 1$, both inequalities hold with $<$, and if $x = 1$, all three numbers are $0$. In particular, $2^{-1} < \ln 2 < 1$ and $0 < \ln 2$.
:::

## 직관

$x > 1$이면 $\ln x$는 곡선 $y = t^{-1}$ 아래, $t = 1$부터 $t = x$까지의 넓이입니다. $0 < x < 1$이면 적분이 $1$에서 왼쪽으로 가므로 [[oriented-integral|방향 있는 적분]]의 정의대로 $[x, 1]$ 위의 넓이에 음의 부호를 붙인 수가 됩니다. 그래서 $1$보다 작은 양수의 로그는 음수이고, $\ln 1 = 0$입니다. $t^{-1}$은 $t = 0$에서 정해지지 않고 $0$ 근처에서 유계도 아니므로, 적분을 $0$에서 시작할 수는 없습니다(아래 반례).

등산로에 비유하면, $t$ 지점의 기울기가 $t^{-1}$인 길에서 $1$ 지점의 높이를 $0$으로 정했을 때 $x$ 지점의 높이가 $\ln x$입니다. 높이를 재기 시작한 곳이 (1)이고, 기울기가 (2)이며, 기울기가 늘 양수라서 오른쪽으로 갈수록 높아지고 $1$의 왼쪽은 높이가 음수라는 것이 (3)입니다. (4)는 기울기와 출발점의 높이가 정해지면 길 전체의 높이가 정해진다는 것입니다. 비유가 맞지 않는 곳은, 실제 등산로와 달리 이 길은 $0$에 가까워질수록 끝없이 내려간다는 점입니다([[laws-of-logarithm|로그의 성질]]의 (5)).

(6)의 오른쪽 $x - 1$은 그래프 위의 점 $(1, 0)$에서 그은 접선의 높이입니다($\ln'(1) = 1$). 기울기 $t^{-1}$은 $1$의 오른쪽에서 $1$보다 작고 왼쪽에서 $1$보다 크므로, $x \ne 1$이면 로그의 그래프는 이 접선보다 아래에 있습니다. 증명은 이것을 미분의 평균값 정리로 정확하게 만듭니다. 이 어림 하나로 $\ln 2$가 $2^{-1}$과 $1$ 사이에 있다는 것을 알 수 있습니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고 (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "기본정리 (4)"는 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 번호이다.

**$\mathbb{R}_{>0}$에 관한 문장.** 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 $1 \in \mathbb{R}_{>0}$이다. $0 < x$이면 순서 성질 (1)의 (i)에 의해 $x \ne 0$이고, 순서 성질 (6)의 (i)에 의해 $0 < x^{-1}$이다. (K4)와 (K8)의 (iii)에 의해 $1 \cdot 1 = 1$이므로 $1^{-1} = 1$이다. 이것을 아래에서 여러 번 쓴다.

**$r$가 연속함수라는 것.** $i$를 $\mathbb{R}_{>0}$ 위의 항등함수라 하자. [[continuous-function]]의 (4)에 의해 $i$는 연속함수이다. 앞 문단에 의해 $\{x \in \mathbb{R}_{>0} : i(x) \ne 0\} = \mathbb{R}_{>0}$이므로, [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $1/i : \mathbb{R}_{>0} \to \mathbb{R}$는 연속함수이다. [[real-valued-function]]의 (5), (3)에 의해 $(1/i)(t) = i(t)^{-1} = t^{-1} = r(t)$이므로, 같은 항목의 (2)에 의해 $r = 1/i$이고 $r$는 연속함수이다. 따라서 정의에서처럼 기본정리 (4)를 $I = \mathbb{R}_{>0}$, $f = r$, 밑점 $p = 1$에 쓸 수 있고, 그 항목의 $F$가 $\ln$이다.

**1의 증명.** 기본정리 (6)에 의해 $\ln 1 = F(1) = 0$이다.

**2의 증명.** $r$는 연속함수이므로 기본정리 (4)에 의해 $\ln$은 미분가능한 함수이고 $\ln' = r$이다. 곧 모든 $x$에서 $\ln'(x) = r(x) = x^{-1}$이다. 이것은 원시함수의 정의 그대로이다. 같은 번호에 의해 $\ln$은 연속미분가능하고, [[continuously-differentiable]]의 (1)에 의해 연속함수이다.

**3의 증명.** $x \in \mathbb{R}_{>0}$이면 2에 의해 $\ln'(x) = x^{-1}$이고, 첫 문단에 의해 $0 < x^{-1}$이다. $\mathbb{R}_{>0}$은 구간이므로 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 (4)에 의해 $\ln$은 순증가이다. 곧 $x < y$이면 $\ln x < \ln y$이다.

거꾸로 $\ln x < \ln y$라 하자. $y < x$이면 순증가에 의해 $\ln y < \ln x$인데, 이것은 순서 성질 (1)의 (i)에 의해 $\ln x < \ln y$와 함께 성립하지 않는다. $y = x$이면 $\ln x = \ln y$인데, 순서 성질 (1)의 (i)에 의해 $\ln x < \ln y$이면 $\ln x \ne \ln y$이다. (W1)에 의해 남은 경우 $x < y$만 성립한다.

$x = y$이면 $\ln$은 함수이므로 $\ln x = \ln y$이다. 거꾸로 $x \ne y$이면 (W1)에 의해 $x < y$이거나 $y < x$이고, 앞에서 보인 것에 의해 $\ln x < \ln y$이거나 $\ln y < \ln x$이며, 어느 쪽이든 순서 성질 (1)의 (i)에 의해 $\ln x \ne \ln y$이다. 따라서 $\ln x = \ln y$이면 $x = y$이고, [[injective-surjective-bijective|단사·전사·전단사]] 항목의 "단사의 동치 꼴"에 의해 $\ln$은 단사이다.

$0 < x < 1$이면 순증가와 1에 의해 $\ln x < \ln 1 = 0$이다. $1 < x$이면 같은 까닭으로 $0 = \ln 1 < \ln x$이다.

**4의 증명.** $G$와 $\ln$은 구간 $\mathbb{R}_{>0}$ 위의 미분가능한 함수이고, 2에 의해 모든 $x$에서 $G'(x) = x^{-1} = \ln'(x)$이다. [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 (2)에 의해 어떤 실수 $C$가 있어 모든 $x$에서 $G(x) = \ln x + C$이다. $x = 1$을 넣으면 1과 (K4), (K1)에 의해 $G(1) = 0 + C = C$이다. 따라서 모든 $x$에서 $G(x) = \ln x + G(1)$이다. $G(1) = 0$이면 (K4)에 의해 모든 $x$에서 $G(x) = \ln x$이고, [[real-valued-function]]의 (2)에 의해 $G = \ln$이다.

**5의 증명.** 기본정리 (1)을 $x = \beta$, $y = \alpha$로 쓰면 $\ln \beta - \ln \alpha = F(\beta) - F(\alpha) = \int_\alpha^\beta r$이고, [[oriented-integral]]의 적분 변수의 약속에 의해 $\int_\alpha^\beta r = \int_\alpha^\beta t^{-1}\,dt$이다. 기본정리 (1)은 세 점의 순서와 같음을 묻지 않는다.

**6의 증명.** $x = 1$이면 1과 $1^{-1} = 1$에 의해 $1 - 1^{-1} = 0$, $\ln 1 = 0$, $1 - 1 = 0$이다.

$1 < x$라 하자. $1$과 $x$는 구간 $\mathbb{R}_{>0}$의 원소이므로 [[interval]]의 (4)에 의해 $[1, x] \subseteq \mathbb{R}_{>0}$이다. $h = \ln|_{[1, x]}$로 두자. 2에 의해 $\ln$은 연속함수이므로 [[continuous-function]]의 (5)에 의해 $h : [1, x] \to \mathbb{R}$는 연속함수이다. $[1, x]$는 [[interval]]의 (1)에 의해 구간이고, $1 < c < x$인 $c$에서 $\ln$은 미분가능하므로 [[derivative]]의 (2)에 의해 $h$는 $c$에서 미분가능하고 $h'(c) = \ln'(c) = c^{-1}$이다. 곧 $h$는 열린구간 $(1, x)$에서 미분가능하다. [[mean-value-theorem|미분의 평균값 정리]]에 의해 $1 < c < x$이고
$$
\ln x - \ln 1 = c^{-1}(x - 1)
$$
인 실수 $c$가 있고, 1에 의해 $\ln x = c^{-1}(x - 1)$이다. $0 < 1 < c < x$이므로 순서 성질 (6)의 (ii)를 두 번 쓰면 $x^{-1} < c^{-1} < 1^{-1} = 1$이다. 순서 성질 (3)의 (i)에 의해 $0 < x - 1$이므로, 양수 $x - 1$을 곱하는 순서 성질 (4)의 (i)를 두 번 쓰면
$$
\begin{aligned}
x^{-1}(x - 1) &< c^{-1}(x - 1) \\
&< 1 \cdot (x - 1)
\end{aligned}
$$
이다. (K1), (K3), (K4), (K12)의 (ii)와 $x^{-1}x = 1$에 의해 $x^{-1}(x - 1) = 1 - x^{-1}$이고 (K4)에 의해 $1 \cdot (x - 1) = x - 1$이므로 $1 - x^{-1} < \ln x < x - 1$이다.

$0 < x < 1$이라 하자. 같은 방법으로 $[x, 1] \subseteq \mathbb{R}_{>0}$이고, $\ln|_{[x, 1]}$에 미분의 평균값 정리를 쓰면 $x < c < 1$이고 $\ln 1 - \ln x = c^{-1}(1 - x)$인 실수 $c$가 있다. 1과 (K9), (K12)의 (ii), (iv)에 의해 $\ln x = -\bigl(c^{-1}(1 - x)\bigr) = c^{-1}(x - 1)$이다. $0 < x < c < 1$이므로 순서 성질 (6)의 (ii)를 두 번 쓰면 $1 = 1^{-1} < c^{-1} < x^{-1}$이다. 순서 성질 (3)의 (i)에 의해 $0 < 1 - x$이고, 같은 항목 (3)의 (ii)와 (K12)의 (iv)에 의해 $x - 1 = -(1 - x) < 0$이다. 음수 $x - 1$을 곱하는 순서 성질 (4)의 (ii)를 두 번 쓰면 부등호가 뒤집혀
$$
\begin{aligned}
x^{-1}(x - 1) &< c^{-1}(x - 1) \\
&< 1 \cdot (x - 1)
\end{aligned}
$$
이고, 앞의 경우와 같은 계산으로 $1 - x^{-1} < \ln x < x - 1$이다.

(W1)에 의해 모든 $x \in \mathbb{R}_{>0}$은 $x < 1$, $x = 1$, $1 < x$ 가운데 하나를 만족하므로 세 경우로 모든 $x$를 다루었다. 두 부등호 $\le$는 이 세 경우에서 나온다.

마지막 문장: $x = 2$이면 $2 \ne 1$이고, (K7)에 의해 $2^{-1} + 2^{-1} = 2 \cdot 2^{-1} = 1$이므로 $1 - 2^{-1} = 2^{-1}$이며, $2 - 1 = 1$이다. 따라서 $2^{-1} < \ln 2 < 1$이다. 순서 성질 (10)과 첫 문단에 의해 $0 < 2^{-1}$이므로 순서 성질 (1)의 (v)에 의해 $0 < \ln 2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$0$과 $1$ 사이의 점에서의 값: $\ln(2^{-1})$]
$x = 2^{-1}$이면 $0 < 2^{-1} < 1$이므로([[order-properties-of-reals|순서 성질]]의 (10)에 의해 $0 < 1 < 2$이고, 같은 항목의 (6)의 (ii)에 의해 $0 < 2^{-1} < 1^{-1} = 1$) 정의에 의해
$$
\ln(2^{-1}) = -\int_{2^{-1}}^1 t^{-1}\,dt
$$
이고 (3)에 의해 이 값은 음수입니다. (6)에 $x = 2^{-1}$을 넣으면 $(2^{-1})^{-1} = 2$이므로 $1 - 2 = -1$, $2^{-1} - 1 = -2^{-1}$이고
$$
-1 < \ln(2^{-1}) < -2^{-1}
$$
입니다. 곧 $[2^{-1}, 1]$ 위의 넓이 $\int_{2^{-1}}^1 t^{-1}\,dt$는 $2^{-1}$보다 크고 $1$보다 작습니다.
:::

:::example[$\ln 2$의 어림을 좁히기]
(6)만 쓰면 $2^{-1} < \ln 2 < 1$입니다. 구간을 $\tfrac{3}{2}$에서 나누면 더 좁힐 수 있습니다. (5)를 $\alpha = \tfrac{3}{2}$, $\beta = 2$에 쓰면
$$
\ln 2 = \ln \tfrac{3}{2} + \int_{3/2}^{2} t^{-1}\,dt
$$
입니다.

- $x = \tfrac{3}{2}$에서 (6)은 $1 - \tfrac{2}{3} < \ln\tfrac{3}{2} < \tfrac{3}{2} - 1$, 곧 $\tfrac{1}{3} < \ln \tfrac{3}{2} < \tfrac{1}{2}$입니다.
- $\tfrac{3}{2} \le t \le 2$라 합시다. 순서 성질 (6)의 (ii)에 의해 $\tfrac{3}{2} < t$이면 $t^{-1} < \tfrac{2}{3}$이고 $t < 2$이면 $\tfrac{1}{2} < t^{-1}$이며, $t = \tfrac{3}{2}$이면 $t^{-1} = \tfrac{2}{3}$, $t = 2$이면 $t^{-1} = \tfrac{1}{2}$입니다. 곧 $\tfrac{1}{2} \le t^{-1} \le \tfrac{2}{3}$입니다. $r$는 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $[\tfrac{3}{2}, 2]$에서 적분가능하고 방향 있는 적분 $\int_{3/2}^{2} t^{-1}\,dt$는 그 적분이므로, [[riemann-integral]]의 (2)의 (i)에 의해 $\tfrac{1}{2} \cdot \tfrac{1}{2} \le \int_{3/2}^{2} t^{-1}\,dt \le \tfrac{2}{3} \cdot \tfrac{1}{2}$, 곧 $\tfrac{1}{4}$ 이상 $\tfrac{1}{3}$ 이하입니다.

두 줄을 더하면 순서 성질 (2)의 (iv)에 의해 $\tfrac{1}{3} + \tfrac{1}{4} < \ln 2 < \tfrac{1}{2} + \tfrac{1}{3}$, 곧
$$
\tfrac{7}{12} < \ln 2 < \tfrac{5}{6}
$$
입니다. 여기서 $\tfrac{7}{12}$은 $0.58$보다 크고 $\tfrac{5}{6}$은 $0.84$보다 작습니다.
:::

:::counterexample[밑점 $0$: 적분이 정해지지 않는 예]
양의 실수 $x$를 하나 정하고, $f : [0, x] \to \mathbb{R}$가 $0 < t \le x$인 모든 $t$에서 $f(t) = t^{-1}$인 함수라 합시다($f(0)$은 아무 값이어도 됩니다). 이런 $f$는 유계가 아닙니다. 실수 $B$가 $[0, x]$의 모든 $t$에서 $|f(t)| \le B$를 만족한다고 합시다. $t = x$를 넣으면 [[absolute-value|절댓값]]의 (6)에 의해 $x^{-1} \le |x^{-1}| \le B$이고, $B < B + 1$이므로 $0 < x^{-1} < B + 1$입니다. 순서 성질 (6)의 (i), (ii)와 $(x^{-1})^{-1} = x$((K8)의 (iii))에 의해 $t_0 = (B + 1)^{-1}$은 $0 < t_0 < x$를 만족하고, $f(t_0) = t_0^{-1} = B + 1$입니다. 그러면 절댓값의 (6)에 의해 $B + 1 \le |f(t_0)| \le B$인데 이것은 $B < B + 1$과 맞지 않습니다. [[bounded-function]]의 정의에 의해 $f$는 유계가 아니고, [[riemann-integral]]의 정의는 유계인 함수에만 적분가능을 말하므로 $f$는 $[0, x]$에서 적분가능하지 않습니다. 그래서 $\int_0^x t^{-1}\,dt$는 $f(0)$을 어떻게 정해도 정해지지 않고, 밑점을 $0$으로 옮길 수 없습니다.
:::

## 확인 질문

:::check[$\ln x = x - 1$인 양의 실수 $x$를 모두 구하면?]
$x = 1$ 하나입니다. $x = 1$이면 두 쪽이 모두 $0$입니다. $x \ne 1$이면 (6)에 의해 $\ln x < x - 1$이므로 순서 성질 (1)의 (i)에 의해 $\ln x \ne x - 1$입니다.
:::

:::check[$H(x) = \int_2^x t^{-1}\,dt$로 정한 함수 $H : \mathbb{R}_{>0} \to \mathbb{R}$를 $\ln$으로 나타내면?]
(5)를 $\alpha = 2$, $\beta = x$에 쓰면 $H(x) = \ln x - \ln 2$입니다. (4)와도 맞습니다: [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $H$는 미분가능하고 $H'(x) = x^{-1}$이므로 $H(x) = \ln x + H(1)$이고, $H(1) = \ln 1 - \ln 2 = -\ln 2$입니다.
:::
