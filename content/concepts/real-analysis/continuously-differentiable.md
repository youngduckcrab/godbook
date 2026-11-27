---
title: 연속미분가능한 함수
title_en: Continuously Differentiable Function
aliases: [연속미분가능, 연속미분가능성, C¹ 함수, C1 함수, continuously differentiable, continuously differentiable function, C1 function]
kind: definition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: 구간 I 위의 실함수 f 가 연속미분가능하다는 것은 f 가 미분가능한 함수이고 도함수 f′ 이 연속함수라는 것이다. 연속미분가능한 함수는 연속이고 f 와 f′ 은 I 안의 닫힌구간마다 적분가능하며, 부분구간으로의 제한, 상수배·합·차·곱·몫, 일차함수와 거듭제곱 함수, 합성이 연속미분가능하다는 것을 도함수의 식과 함께 진술한다.
requires: [function-composition, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, absolute-value, interval, real-valued-function, limit-of-a-function, continuous-function, continuity-of-sum-and-product, composition-of-continuous-functions, power-function-is-continuous, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, chain-rule, riemann-integral, continuous-implies-integrable]
sources:
  - ref: lebl-basic-analysis
    loc: 4.2절(4.2.5 소절 Continuity of derivatives and the intermediate value theorem) 끝 문단 (p.169), Example 4.2.12 (p.168); 5.3절(5.3.3 소절 Change of variables) 첫 문단 (p.203)
    checked: original
    note: "출처의 정의(4.2.5 소절 끝 문단, p.169)는 f : I → ℝ 가 미분가능하고 도함수 f′ 이 I 에서 연속이면 f 를 continuously differentiable 이라 하고, I 위의 그런 함수 전체를 흔히 C¹(I) 로 쓴다고 적는다. 5.3.3 소절 첫 문단(p.203)은 같은 정의를 'Recall' 로 다시 적는다. 이 항목의 정의는 같고, 기호 C¹(I) 는 쓰지 않는다(aliases 에만 둔다). 출처는 이 정의 바로 앞의 Example 4.2.12(p.168, 그림으로 확인)에서 x ≠ 0 이면 (x sin(1/x))², x = 0 이면 0 으로 정한 함수 ℝ → ℝ 가 모든 점에서 미분가능하지만 도함수가 0 에서 연속이 아니라고 보인다. 이 항목은 sin 을 쓰지 않아 그 예를 싣지 않았고, 반례 블록에는 이 사이트에서 증명되는 '절댓값 함수'를 들었다. 성질 (1)–(6)은 연속미분가능한 함수에 관한 명제로는 출처에 없다(책 전체에서 'continuously differentiable' 27건, 'continuous derivative' 9건, 'derivative is continuous' 1건, 'f′ is continuous' 5건, 'C¹' 11건을 줄을 이어 찾아 모두 읽었고, 4.1.3, 4.2.6, 4.4.2, 5.3.4 소절의 연습문제를 처음부터 읽었다). (1)의 두 부분은 출처의 Proposition 4.1.6(4.1.1 소절, p.157; 미분가능하면 연속)과 Lemma 5.2.7(5.2.3 소절, p.195; 연속함수는 리만 적분가능)을 이 정의에 쓴 것이고, (3), (5), (6)의 도함수의 식은 출처의 Proposition 4.1.7–4.1.10(4.1.1–4.1.2 소절, p.157–159; 선형성, 곱의 법칙, 몫의 법칙, 연쇄 법칙)의 식이다. (4)의 일차함수의 도함수는 출처 Example 4.1.3(4.1.1 소절, p.156; ax + b 의 도함수는 a)과 같은 계산이고, 확인 질문 1 의 도함수 −1 도 이 계산의 a = −1 인 경우와 같다. (4)의 거듭제곱 함수에 대해서는 출처가 Corollary 4.4.3 의 증명(4.4.1 소절, p.178)에서 (0, ∞) 위의 yⁿ 이 연속미분가능하고 도함수가 n yⁿ⁻¹ 이라고 적고(근거로 연습문제 4.1.3 을 든다), Example 4.4.5(p.178)에서 ℝ 위의 x³ 이 연속인 도함수를 갖는다고 적는다. (1)의 '연속인 도함수는 적분가능하다'는 쓰임은 출처 Theorem 5.3.5 의 증명(5.3.3 소절, p.204)이 g, g′, f 가 연속이므로 f(g(x))g′(x) 가 연속이고 적분가능하다고 적는 곳과 같다. 예시 '(x² + 1)³ 의 도함수'는 출처 연습문제 4.1.8(4.1.3 소절, p.160; (fⁿ)′ = n fⁿ⁻¹ f′)을 n = 3, f(x) = x² + 1 에 쓴 것과 같은 계산이다. 예시 'x|x|' 는 출처 연습문제 4.3.3(4.3.3 소절, p.174; |x|³ 의 f′ 과 f″ 을 구하고 0 에서 셋째 도함수가 없음을 보이라)과 같은 발상이다(절댓값이 든 함수를 한 번 더 미분하면 0 에서 막힌다). 반례 '절댓값 함수'는 출처 Example 4.1.5(4.1.1 소절, p.157; |x| 는 원점에서 미분가능하지 않다)와 같은 함수, 같은 결론을 이 정의에 쓴 것이다. 출처는 p.164(Theorem 4.2.3 뒤 문단)에서 [−1, 1] 위의 |x| 를, 5.3.2 소절(p.203)에서 0 에서 미분가능하지 않은 F(x) = |x| 를 다시 든다. 확인 질문 1 은 출처 Example 4.1.5 의 x < 0 쪽 계산(차분몫이 −1)과 같은 발상이다. 확인 질문 2 의 (ff)′ = 2ff′ 은 출처 연습문제 4.1.8 의 n = 2 인 경우와 같은 식이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 넓게 쓴 주장 1건과 근거가 빠진 예시 문장을 고쳤다."
added: 2026-11-20
---

:::statement
구간, 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이며, 실함수와 그 연산(합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 몫 $f/g$, $1/g$), 상수함수, 항등함수, 제한은 [[real-valued-function]]의 것이다. 리만 적분가능과 "$[a, b]$에서 적분가능"은 [[riemann-integral]]의 것이고, 함수 $p_n$은 [[power-function-is-continuous]]의 (1)의 것이다. $I$를 구간이라 하자.

**연속미분가능.** $I$ 위의 실함수 $f : I \to \mathbb{R}$가 **연속미분가능하다**(continuously differentiable)는 것은 정확히 $f$가 미분가능한 함수이고 그 도함수 $f' : I \to \mathbb{R}$가 연속함수일 때이다. $f'$의 연속은 $I$의 모든 원소에서 묻는다. 예를 들어 $I = [a, b]$이면 $f'(a)$와 $f'(b)$도 [[derivative]]의 정의대로 정해지고, $f'$은 $a$와 $b$에서도 연속이어야 한다.

다음이 성립한다. (1)–(4)와 (6)에서 $f$, $g$는 $I$ 위의 실함수이고 $k$는 실수이다.

1. (연속과 적분가능) $f$가 연속미분가능하면 $f$는 연속함수이다. 또 실수 $a$, $b$가 $a < b$이고 $[a, b] \subseteq I$를 만족하면, $f$와 $f'$은 $[a, b]$에서 리만 적분가능하다([[riemann-integral]]의 (4)의 뜻). 특히 $a$, $b$가 $I$의 원소이고 $a < b$이면 $[a, b] \subseteq I$이다.
2. (제한) $f$가 연속미분가능하고 $J$가 구간이며 $J \subseteq I$이면, 제한 $f|_J : J \to \mathbb{R}$는 연속미분가능하고 $(f|_J)' = f'|_J$이다.
3. (상수배, 합, 차, 곱) $f$가 연속미분가능하면 $kf$는 연속미분가능하고 $(kf)' = k f'$이다. $f$와 $g$가 연속미분가능하면 $f + g$, $f - g$, $fg$는 연속미분가능하고
   $$
   \begin{gathered}
   (f + g)' = f' + g', \\
   (f - g)' = f' - g', \\
   (fg)' = f g' + f' g
   \end{gathered}
   $$
   이다.
4. (일차함수와 거듭제곱 함수) 실수 $m$에 대하여 $h(x) = mx + k$로 정한 함수 $h : I \to \mathbb{R}$는 연속미분가능하고, $h'$은 $I$ 위의 값이 $m$인 상수함수이다. 특히 $I$ 위의 상수함수와 항등함수 $i_I$는 연속미분가능하다. $n$이 $0$ 이상인 정수이면 $p_n : \mathbb{R} \to \mathbb{R}$와 그 제한 $p_n|_I$는 연속미분가능하고 $(p_n|_I)' = p_n'|_I$이다. 여기서 $p_0'$은 $\mathbb{R}$ 위의 값이 $0$인 상수함수이고, $n \ge 1$이면 $p_n' = n\,p_{n-1}$이다.
5. (합성) 이 번호에서는 $I_1$, $I_2$가 구간이다. [[chain-rule]]의 진술에서처럼 함수 $g : I_1 \to I_2$는 $I_1$ 위의 실함수이기도 하고, $g$의 연속미분가능은 이 실함수로서의 것을 뜻한다. $g : I_1 \to I_2$와 $f : I_2 \to \mathbb{R}$가 연속미분가능하면 합성 $f \circ g : I_1 \to \mathbb{R}$는 연속미분가능하고
   $$
   (f \circ g)' = (f' \circ g)\,g'
   $$
   이다. 곧 모든 $x \in I_1$에서 $(f \circ g)'(x) = f'(g(x))\,g'(x)$이다. $g$가 $I_1$ 위의 실함수이고 모든 $x \in I_1$에서 $g(x) \in I_2$이면, [[chain-rule]]의 (3)에서처럼 $g$를 $g : I_1 \to I_2$로 선언해 $f \circ g$를 정할 수 있고, 이때 앞 문장이 그대로 성립한다.
6. (역수와 몫) $g$가 연속미분가능하고 $I$의 모든 원소 $x$에서 $g(x) \ne 0$이라 하자. 그러면 $1/g$의 정의역은 $I$이고, $1/g : I \to \mathbb{R}$는 연속미분가능하며 모든 $x \in I$에서 $(1/g)'(x) = -g'(x)\,\bigl(g(x)^2\bigr)^{-1}$이다. 여기에 더해 $f$가 연속미분가능하면 $f/g : I \to \mathbb{R}$는 연속미분가능하고 모든 $x \in I$에서
   $$
   \begin{aligned}
   (f/g)'(x) &= \bigl(f'(x)\,g(x) \\
   &\qquad - f(x)\,g'(x)\bigr) \\
   &\quad \cdot \bigl(g(x)^2\bigr)^{-1}
   \end{aligned}
   $$
   이다.
:::

:::english
Intervals, differentiability, derivatives at a point, differentiable functions and the derivative are those of the entry on derivatives; continuity and continuous functions are those of the entry on continuous functions; real-valued functions and their operations (the sum $f + g$, difference $f - g$, product $fg$, constant multiple $kf$, quotients $f/g$ and $1/g$), constant functions, identity functions and restrictions are those of the entry on real-valued functions. Riemann integrability and "integrable on $[a, b]$" are those of the entry on the Riemann integral, and the function $p_n$ is that of (1) of the entry on the continuity of power functions. Let $I$ be an interval.

**Continuously differentiable.** A real-valued function $f : I \to \mathbb{R}$ on $I$ is **continuously differentiable** exactly when $f$ is a differentiable function and its derivative $f' : I \to \mathbb{R}$ is a continuous function. Continuity of $f'$ is required at every element of $I$. For example, if $I = [a, b]$, then $f'(a)$ and $f'(b)$ are also defined as in the entry on derivatives, and $f'$ must be continuous at $a$ and at $b$ as well.

The following hold. In (1)–(4) and (6), $f$ and $g$ are real-valued functions on $I$ and $k$ is a real number.

1. (Continuity and integrability) If $f$ is continuously differentiable, then $f$ is a continuous function. Moreover, if real numbers $a$, $b$ satisfy $a < b$ and $[a, b] \subseteq I$, then $f$ and $f'$ are Riemann integrable on $[a, b]$ (in the sense of (4) of the entry on the Riemann integral). In particular, if $a$, $b$ are elements of $I$ with $a < b$, then $[a, b] \subseteq I$.
2. (Restriction) If $f$ is continuously differentiable, $J$ is an interval and $J \subseteq I$, then the restriction $f|_J : J \to \mathbb{R}$ is continuously differentiable and $(f|_J)' = f'|_J$.
3. (Constant multiples, sums, differences, products) If $f$ is continuously differentiable, then $kf$ is continuously differentiable and $(kf)' = k f'$. If $f$ and $g$ are continuously differentiable, then $f + g$, $f - g$ and $fg$ are continuously differentiable and
   $$
   \begin{gathered}
   (f + g)' = f' + g', \\
   (f - g)' = f' - g', \\
   (fg)' = f g' + f' g.
   \end{gathered}
   $$
4. (Affine and power functions) For a real number $m$, the function $h : I \to \mathbb{R}$ defined by $h(x) = mx + k$ is continuously differentiable, and $h'$ is the constant function on $I$ with value $m$. In particular, constant functions on $I$ and the identity function $i_I$ are continuously differentiable. If $n$ is an integer with $n \ge 0$, then $p_n : \mathbb{R} \to \mathbb{R}$ and its restriction $p_n|_I$ are continuously differentiable and $(p_n|_I)' = p_n'|_I$. Here $p_0'$ is the constant function on $\mathbb{R}$ with value $0$, and $p_n' = n\,p_{n-1}$ if $n \ge 1$.
5. (Composition) In this item $I_1$, $I_2$ are intervals. As in the statement of the chain rule, a function $g : I_1 \to I_2$ is also a real-valued function on $I_1$, and continuous differentiability of $g$ means that of this real-valued function. If $g : I_1 \to I_2$ and $f : I_2 \to \mathbb{R}$ are continuously differentiable, then the composition $f \circ g : I_1 \to \mathbb{R}$ is continuously differentiable and
   $$
   (f \circ g)' = (f' \circ g)\,g'.
   $$
   That is, $(f \circ g)'(x) = f'(g(x))\,g'(x)$ for all $x \in I_1$. If $g$ is a real-valued function on $I_1$ with $g(x) \in I_2$ for all $x \in I_1$, then, as in (3) of the chain rule, $g$ may be declared as $g : I_1 \to I_2$ to define $f \circ g$, and the preceding sentence holds as it is.
6. (Reciprocals and quotients) Suppose $g$ is continuously differentiable and $g(x) \ne 0$ for every element $x$ of $I$. Then the domain of $1/g$ is $I$, and $1/g : I \to \mathbb{R}$ is continuously differentiable with $(1/g)'(x) = -g'(x)\,\bigl(g(x)^2\bigr)^{-1}$ for all $x \in I$. If moreover $f$ is continuously differentiable, then $f/g : I \to \mathbb{R}$ is continuously differentiable and, for all $x \in I$,
   $$
   \begin{aligned}
   (f/g)'(x) &= \bigl(f'(x)\,g(x) \\
   &\qquad - f(x)\,g'(x)\bigr) \\
   &\quad \cdot \bigl(g(x)^2\bigr)^{-1}.
   \end{aligned}
   $$
:::

## 직관

미분가능한 함수는 정의역의 모든 점에서 미분계수를 갖고, 도함수 $f'$은 그 미분계수들을 모아 만든 함수입니다. 연속미분가능은 여기에 "도함수 $f'$도 연속함수이다"라는 조건을 하나 더 붙입니다. 이 조건은 [[derivative]]의 미분가능의 정의에 들어 있지 않으므로 이름을 따로 붙여 요구합니다.

자동차에 비유하면 $f(t)$는 시각 $t$의 위치이고 $f'(t)$는 그 순간의 속도입니다. 연속미분가능은 "속도계의 바늘이 어느 순간에도 다른 값으로 건너뛰지 않는다"는 것입니다. 바늘이 가리키는 값이 $f'(t)$이고, 건너뛰지 않는다는 것이 $f'$의 연속입니다. 비유가 맞지 않는 곳은, 속도계는 속력만 보여 음수를 가리키지 않지만 $f'(t)$는 음수일 수 있다는 점입니다(방향까지 가리키는 바늘로 읽으면 맞습니다).

정의는 구간 $I$가 끝점을 원소로 가지면 그 점에서도 미분계수와 $f'$의 연속을 묻습니다. 끝점에서의 미분계수는 [[derivative]]에서처럼 한쪽의 점들만 쓰는 차분몫의 극한이고, 끝점에서 $f'$의 연속도 $I$의 점들하고만 견줍니다.

이 조건이 있으면 (1)에 의해 $f$뿐 아니라 $f'$도 $I$ 안의 닫힌구간마다 적분가능합니다. (2)–(6)은 연속함수를 합·곱·합성으로 만들어 가던 것처럼, 일차함수와 거듭제곱 함수에서 시작해 연속미분가능한 함수를 만들어 가는 규칙입니다. 정의역을 줄이면 연속미분가능해지는 함수도 있습니다. 아래 반례의 $\mathbb{R}$ 위의 절댓값 함수는 연속미분가능하지 않지만, $0$ 이상인 실수 전체의 구간으로 제한하면 그 구간 위의 항등함수와 같아져 (4)에 의해 연속미분가능합니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "연속 (5)"처럼 쓴 것은 [[continuous-function]]의 번호, "연산 (3)"은 [[continuity-of-sum-and-product|연속함수의 연산]]의 번호, "실함수 (2)"는 [[real-valued-function]]의 번호, "규칙 (6)"은 [[derivative-rules|미분의 규칙]]의 번호이다. 두 실함수가 같다는 것은 모두 실함수 (2)로, 곧 정의역의 모든 점에서 값이 같음을 보여 얻는다.

**1의 증명.** $f$는 미분가능한 함수이므로 [[differentiable-implies-continuous|미분가능하면 연속이라는 정리]]의 (2)에 의해 연속함수이다. 실수 $a$, $b$가 $a < b$이고 $[a, b] \subseteq I$라 하자. $f$는 $I$의 모든 원소에서 연속이므로 $[a, b]$의 모든 원소에서 연속이고, 곧 $[a, b]$에서 연속이다([[continuous-function]]의 "$A$에서 연속"의 정의). [[continuous-implies-integrable]]의 (2)를 $S = I$로 쓰면 $f$는 $[a, b]$에서 리만 적분가능하다. $f'$도 가정에 의해 $I$ 위의 연속함수이므로 같은 까닭으로 $[a, b]$에서 리만 적분가능하다. 마지막 문장은 [[interval]]의 (4)이다.

**2의 증명.** $f$는 $I$의 모든 원소에서 미분가능하고 $J \subseteq I$이므로 $J$의 모든 원소에서 미분가능하다. 곧 $f$는 $J$에서 미분가능하다. $J$가 구간이므로 [[derivative]]의 (2)에 의해 $f|_J$는 미분가능한 함수이고 모든 $x \in J$에서 $(f|_J)'(x) = f'(x)$이다. 실함수 (6)에 의해 $(f'|_J)(x) = f'(x)$이므로 $(f|_J)' = f'|_J$이다. $f'$은 연속함수이므로 연속 (5)에 의해 $f'|_J$는 연속함수이다. 따라서 $f|_J$는 연속미분가능하다.

**3의 증명.** 규칙 (6)을 $g$ 자리에 $f$를 넣어 쓰면, $f$가 미분가능한 함수일 때 $kf$는 미분가능한 함수이고 $(kf)' = kf'$이다. $f'$이 연속함수이므로 연산 (3)에 의해 $kf'$은 연속함수이고, $kf$는 연속미분가능하다.

$f$와 $g$가 연속미분가능하다고 하자. 규칙 (6)에 의해 $f + g$, $f - g$, $fg$는 미분가능한 함수이고 그 도함수는 각각 $f' + g'$, $f' - g'$, $fg' + f'g$이다. $f'$, $g'$은 연속함수이고, 1에 의해 $f$, $g$도 연속함수이다. 연산 (3)에 의해 $f' + g'$, $f' - g'$은 연속함수이고, $fg'$과 $f'g$가 연속함수이므로 그 합 $fg' + f'g$도 연속함수이다. 따라서 $f + g$, $f - g$, $fg$는 연속미분가능하다.

**4의 증명.** [[derivative]]의 (1)에 의해 $h$는 미분가능한 함수이고 $h'$은 $I$ 위의 값이 $m$인 상수함수이며, 연속 (4)에 의해 상수함수는 연속함수이다. 따라서 $h$는 연속미분가능하다. 같은 항목의 (1)의 "특히"에 의해 $I$ 위의 상수함수와 $i_I$는 미분가능한 함수이고 모든 점에서 미분계수가 각각 $0$과 $1$이므로, 실함수 (2), (3)에 의해 두 도함수는 값이 $0$, $1$인 상수함수이고 연속 (4)에 의해 연속함수이다.

$n$을 $0$ 이상인 정수라 하자. [[derivative-of-power]]의 (1)에 의해 $p_n$은 미분가능한 함수이고, $p_0'$은 값이 $0$인 상수함수이며 $n \ge 1$이면 $p_n' = n\,p_{n-1}$이다. $p_0'$은 연속 (4)에 의해 연속함수이다. $n \ge 1$이면 $n - 1$은 $0$ 이상인 정수이므로 [[power-function-is-continuous]]의 (1)에 의해 $p_{n-1}$은 연속함수이고, $n$은 실수이므로((K7)) 연산 (3)에 의해 $n\,p_{n-1}$은 연속함수이다. 따라서 $p_n$은 연속미분가능하다. $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이고 $I \subseteq \mathbb{R}$이므로, 2를 $\mathbb{R}$ 위의 $p_n$과 $J = I$에 쓰면 $p_n|_I$는 연속미분가능하고 $(p_n|_I)' = p_n'|_I$이다.

**5의 증명.** $g : I_1 \to I_2$와 $f : I_2 \to \mathbb{R}$가 연속미분가능하다고 하자. 둘은 미분가능한 함수이므로 [[chain-rule]]의 (2)에 의해 $f \circ g$는 미분가능한 함수이고 $(f \circ g)' = (f' \circ g)\,g'$이다. 1에 의해 $g$는 $I_1$ 위의 실함수로서 연속함수이고, $f' : I_2 \to \mathbb{R}$는 가정에 의해 연속함수이다. $I_1$, $I_2$는 $\mathbb{R}$의 부분집합이므로 [[composition-of-continuous-functions|연속함수의 합성]]의 (2)를 $A = I_1$, $B = I_2$와 $g : I_1 \to I_2$, $f' : I_2 \to \mathbb{R}$에 쓰면 $f' \circ g : I_1 \to \mathbb{R}$는 연속함수이다. $g'$도 연속함수이므로 연산 (3)에 의해 곱 $(f' \circ g)\,g'$은 연속함수이다. 따라서 $f \circ g$는 연속미분가능하다. 둘째 문장은 $(f' \circ g)\,g'$의 $x$에서의 값을 실함수 (4)로 적은 것이다.

$g$가 $I_1$ 위의 실함수이고 모든 $x \in I_1$에서 $g(x) \in I_2$라 하자. [[function-composition]]의 진술에 의해 같은 집합 $g$를 $g : I_1 \to I_2$로 선언할 수 있다. 그렇게 선언한 $g$는 $I_1$ 위의 실함수로서 원래의 $g$와 같은 함수이므로 연속미분가능인지도 같다. 따라서 앞 문단을 그대로 쓸 수 있다.

**6의 증명.** $g$가 연속미분가능하고 $I$의 모든 원소에서 $0$이 아니라 하자. 실함수 (5)에 의해 $1/g$의 정의역 $\{x \in I : g(x) \ne 0\}$은 $I$이고, $f/g$의 정의역도 $I$이다. 규칙 (6)을 $f$ 자리에 $g$를 넣어 쓰면 $1/g$는 미분가능한 함수이고 모든 $x \in I$에서 $(1/g)'(x) = -g'(x)\,\bigl(g(x)^2\bigr)^{-1}$이다. $f$도 연속미분가능하면 규칙 (6)에 의해 $f/g$는 미분가능한 함수이고 진술의 식이 성립한다. 남은 것은 두 도함수가 연속함수라는 것이다.

$w = gg$로 두자. 1에 의해 $g$는 연속함수이므로 연산 (3)에 의해 $w$는 연속함수이다. $x \in I$이면 [[power-of-a-real-number]]의 (1)에 의해 $g(x)^2 = g(x)\,g(x) = w(x)$이고, $g(x) \ne 0$이므로 (K12)의 (vi)에 의해 $w(x) \ne 0$이다. 따라서 $\{x \in I : w(x) \ne 0\} = I$이다.

$u = (-1)\,g'$로 두면 연산 (3)에 의해 $u$는 연속함수이고, 같은 번호에 의해 $u/w : I \to \mathbb{R}$는 연속함수이다. $x \in I$이면 나눗셈의 정의와 (K9)의 $(-1)a = -a$에 의해
$$
\begin{aligned}
(u/w)(x) &= \bigl((-1)\,g'(x)\bigr)\,w(x)^{-1} \\
&= -g'(x)\,\bigl(g(x)^2\bigr)^{-1} \\
&= (1/g)'(x)
\end{aligned}
$$
이므로 $(1/g)' = u/w$이고, $(1/g)'$은 연속함수이다.

$f$도 연속미분가능하면 1에 의해 $f$는 연속함수이고, $v = f'g - fg'$로 두면 연산 (3)에 의해 $v$는 연속함수이며, 같은 번호에 의해 $v/w : I \to \mathbb{R}$는 연속함수이다. $x \in I$이면 실함수 (4)와 나눗셈의 정의에 의해 $(v/w)(x) = \bigl(f'(x)\,g(x) - f(x)\,g'(x)\bigr)\,w(x)^{-1} = (f/g)'(x)$이므로 $(f/g)' = v/w$이고, $(f/g)'$은 연속함수이다. 따라서 $1/g$와 $f/g$는 연속미분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[$(x^2 + 1)^3$의 도함수]
$u$를 $\mathbb{R}$ 위의 값이 $1$인 상수함수라 하고 $g = p_2 + u$, $f = p_3$으로 둡니다. $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이고, 모든 실수 $x$에서 $g(x) = x^2 + 1$이며 $(f \circ g)(x) = (x^2 + 1)^3$입니다([[real-valued-function]]의 (4)).

(4)에 의해 $p_2$, $p_3$, $u$는 연속미분가능하고, $p_2' = 2\,p_1$, $p_3' = 3\,p_2$이며, $u$는 (4)의 $h$에서 $m = 0$, $k = 1$인 함수이므로 $u'$은 값이 $0$인 상수함수입니다. [[power-of-a-real-number]]의 (1)에 의해 $p_1(x) = x^1 = x$입니다. (3)에 의해 $g$는 연속미분가능하고 $g'(x) = 2x + 0 = 2x$입니다((K4)). (5)를 $I_1 = I_2 = \mathbb{R}$에 쓰면 $f \circ g$는 연속미분가능하고, 모든 실수 $x$에서
$$
\begin{aligned}
(f \circ g)'(x) &= f'(g(x))\,g'(x) \\
&= 3\,(x^2 + 1)^2 \cdot 2x \\
&= 6x\,(x^2 + 1)^2
\end{aligned}
$$
입니다([[real-number-arithmetic]]의 (K1), (K2), (K7)의 $3 \cdot 2 = 6$). 도함수가 연속이라는 것을 이 식에서 따로 확인하지 않아도 (5)가 알려 줍니다. (2)에 의해 이 함수를 어느 구간으로 제한해도 연속미분가능합니다.
:::

:::example[$x\,|x|$: 도함수가 $0$에서 미분가능하지 않은 연속미분가능한 함수]
$\mathbb{R}$ 위에서 $s(x) = |x|$, $v(x) = x\,|x|$로 정한 두 함수를 생각하고 $i = i_{\mathbb{R}}$로 씁니다. [[real-valued-function]]의 (2), (3), (4)에 의해 $v = i\,s$입니다. [[derivative]]의 (3)을 $I = \mathbb{R}$, $r = 1$로 쓰고, $i$는 같은 항목의 (1)에 의해 모든 점에서 미분계수가 $1$입니다. 아래에서 $|c|$의 값은 [[absolute-value|절댓값]]의 (1)로 구합니다.

- $0 < c$이면 $s'(c) = 1$이고 $|c| = c$이므로, [[derivative-rules|곱의 법칙]]의 (4)에 의해 $v'(c) = i(c)\,s'(c) + i'(c)\,s(c) = c + c = 2c = 2|c|$입니다((K3), (K4), (K7)).
- $c < 0$이면 $s'(c) = -1$이고 $|c| = -c$이므로, 같은 법칙에 의해 $v'(c) = c\,(-1) + (-c) = (-c) + (-c) = 2(-c) = 2|c|$입니다((K1), (K3), (K4), (K7), (K9)).
- $c = 0$이면 $x \ne 0$에서 차분몫은 $q_0(x) = \bigl(x\,|x| - 0\bigr)(x - 0)^{-1} = |x|$입니다((K1), (K2), (K4), (K8)의 (iii), (K9)). [[derivative]]의 진술에 의해 $0$은 $\mathbb{R} - \{0\}$의 집적점입니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon$으로 두면, $x \ne 0$이고 $|x - 0| < \delta$인 모든 $x$에서 [[absolute-value|절댓값]]의 (2), (1)에 의해 $\bigl|q_0(x) - 0\bigr| = \bigl|\,|x|\,\bigr| = |x| < \varepsilon$이므로, [[limit-of-a-function]]의 수렴의 정의에 의해 $q_0$은 $0$에서 $0$으로 수렴합니다. 곧 $v'(0) = 0 = 2|0|$입니다.

[[real-order-axioms]]의 (W1)에 의해 모든 실수 $c$는 세 경우 가운데 하나에 들므로 $v$는 미분가능한 함수이고 $v' = 2s$입니다. $s = |i|$는 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이고, 같은 항목의 (3)에 의해 $2s$도 연속함수입니다. 따라서 $v$는 연속미분가능합니다.

그러나 도함수 $v' = 2s$는 $0$에서 미분가능하지 않습니다. 미분가능하다면 [[derivative-rules|미분의 규칙]]의 (1)에 의해 $2^{-1}(2s)$도 $0$에서 미분가능한데, (K2), (K8)의 (iii), (K4)에 의해 $2^{-1}(2s) = s$이고 $s$는 [[derivative]]의 (3)에 의해 $0$에서 미분가능하지 않기 때문입니다. 연속미분가능은 도함수의 연속만 요구하고 도함수의 미분가능은 요구하지 않습니다.
:::

:::counterexample[절댓값 함수: 연속이지만 연속미분가능하지 않은 예]
$s(x) = |x|$로 정한 $s : \mathbb{R} \to \mathbb{R}$는 항등함수 $i_{\mathbb{R}}$의 절댓값 $|i_{\mathbb{R}}|$이므로([[real-valued-function]]의 (2), (3), (4)), [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. 그러나 $\mathbb{R}$은 구간이고 $-1$과 $1$을 원소로 가지므로 [[derivative]]의 (3)을 $r = 1$로 쓰면 $s$는 $0$에서 미분가능하지 않습니다. 따라서 $s$는 미분가능한 함수가 아니고, 연속미분가능하지 않습니다. 곧 (1)의 "연속미분가능하면 연속함수이다"를 거꾸로 하면 이 $s$에서 거짓입니다.
:::

## 확인 질문

:::check[$[-2, -1]$ 위에서 값이 $|x|$인 함수는 연속미분가능한가? 그렇다면 도함수는?]
연속미분가능하고, 도함수는 값이 $-1$인 상수함수입니다. $J = [-2, -1]$은 [[interval]]의 (1)에 의해 구간입니다. $x \in J$이면 $x \le -1 < 0$이므로([[order-properties-of-reals]]의 (3)의 (ii)와 (5)의 (ii)의 $0 < 1$, (1)의 (v)) [[absolute-value|절댓값]]의 (1)에 의해 $|x| = -x = (-1)\,x + 0$입니다([[real-number-arithmetic]]의 (K4), (K9)). 따라서 [[real-valued-function]]의 (2)에 의해 이 함수는 (4)의 $h$에서 $m = -1$, $k = 0$인 함수와 같고, (4)에 의해 연속미분가능하며 $h'$은 값이 $-1$인 상수함수입니다.
:::

:::check[$f$가 $I$ 위에서 연속미분가능하면 $ff$는 연속미분가능한가? 그렇다면 도함수는?]
연속미분가능하고 $(ff)' = 2ff'$입니다. (3)을 $g = f$로 쓰면 $ff$는 연속미분가능하고 $(ff)' = ff' + f'f$입니다. 모든 $x \in I$에서 [[real-number-arithmetic]]의 (K1), (K3), (K4), (K7)에 의해 $f(x)f'(x) + f'(x)f(x) = (1 + 1)\,f(x)f'(x) = 2f(x)f'(x)$이므로, [[real-valued-function]]의 (2), (4)에 의해 $(ff)' = 2ff'$입니다.
:::
