---
title: 피카르의 존재와 유일성 정리
title_en: Picard's Existence and Uniqueness Theorem
aliases: [피카르 정리, 피카르 반복열, Picard's theorem, Picard iteration, Picard iterates]
kind: theorem
field: real-analysis
msc: ["34A12", "47H10"]
level: undergrad
summary: 닫힌 직사각형 위의 연속이고 둘째 변수에 대하여 립시츠인 F 와, y₀ 에서 α 이내의 직사각형이 들어가는 점 (x₀, y₀) 에 대해, 0 < h ≤ α, h(M + Lα) ≤ α 이면 [x₀ − h, x₀ + h] 위에서 값이 J 에 드는 초깃값 문제 y′ = F(x, y), y(x₀) = y₀ 의 해가 정확히 하나 있다. 상수 y₀ 에서 시작하는 피카르 반복열은 그 해로 고르게 수렴하고, 거리를 등비 꼴로 어림할 수 있다. 피카르 사상에 바나흐 고정점 정리를 쓴다.
requires: [set, subset, function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, real-valued-function, oriented-integral, linearity-of-the-integral, antiderivative-and-integral-of-power, continuously-differentiable, metric-space, metric-space-examples, convergence-in-metric-spaces, contraction-mapping, banach-fixed-point-theorem, pointwise-convergence, uniform-convergence, bounded-maps-and-uniform-metric, space-of-continuous-maps, continuous-function-on-a-rectangle, initial-value-problem-and-integral-equation, picard-operator]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.2절 Picard's theorem, Theorem 7.6.3 과 증명 (pp.298–299); 7.6.1절 Theorem 7.6.2 (p.296); 6.3.2절 The theorem, Theorem 6.3.2 와 증명 (pp.247–249); 6.3.4절 연습문제 6.3.3 (p.252); 7.6.3절 연습문제 7.6.3 (p.299); 7.6.3절 연습문제 7.6.8 (p.300)"
    checked: original
    note: "출처 Theorem 7.6.3(p.298, 그림으로 대조)과 Theorem 6.3.2(p.247)는 같은 문장이다: I, J 가 닫힌 유계 구간이고 (x₀, y₀) ∈ I° × J°(내부는 열린구간 (a, b) 를 뜻한다는 각주, p.247), F 가 연속이고 둘째 변수에 대하여 립시츠(L ∈ ℝ)이면, [x₀ − h, x₀ + h] ⊂ I 인 h > 0 과, f′(x) = F(x, f(x)), f(x₀) = y₀ 인 유일한 미분가능한 함수 f : [x₀ − h, x₀ + h] → J 가 있다. 유일성의 범위는 출처와 같다: 그 구간 위에서 정의되고 값이 J 에 드는 미분가능한 해 가운데 하나뿐이다. I 전체에서의 존재·유일성과 해를 이어 붙여 늘리는 것(출처 Example 6.3.3, p.250)은 싣지 않았다. 출처의 '(x₀, y₀) 가 내부의 점'은 이 항목에서 [x₀ − α, x₀ + α] ⊆ I, [y₀ − α, y₀ + α] ⊆ J 인 α > 0 이 있다는 꼴로 쓰고, 두 꼴이 같다는 것을 (5)로 보였다(출처는 증명에서 이런 α 를 'Pick α > 0' 으로 바로 잡는다). 출처는 진술에서 h 가 있다고만 하고 증명에서 h = min{α, α/(M + Lα)} 를 잡는다. 이 항목은 h 를 0 < h ≤ α, h(M + Lα) ≤ α 를 만족하는 아무 수로 두고, 출처의 h 가 그런 수라는 것을 (1)에 둔다. 그래서 (4)(더 작은 구간)도 함께 나온다. 출처는 x₀ = 0 으로 줄이고 일반 x₀ 를 연습문제 6.3.3(p.252)과 7.6.3(p.299)으로 남긴다. 이 항목은 방향 있는 적분으로 처음부터 일반 x₀ 를 다룬다. 증명은 출처 Theorem 7.6.3 의 경로(바나흐 고정점 정리, 출처 7.6.1절 Theorem 7.6.2, p.296)를 따르고, 공간을 출처의 Y(값이 J 에 드는 연속함수 전체) 대신 picard-operator 의 닫힌 공 Z 로 둔다. 출처 Theorem 6.3.2 의 증명(pp.247–249)은 다른 경로이다: 피카르 반복 f_k 를 직접 정의하고 ∥f_n − f_k∥ ≤ C^k α 로 고르게 코시임을 보인 뒤, 고른 극한이 적분방정식을 만족한다는 것을 적분과 극한의 교환으로 보이고, 극한의 값이 [y₀ − α, y₀ + α] 에 남는다는 것은 '(why?)'로 남긴다. 피카르 반복열(출처의 Picard iterates, p.247)은 출처가 f₀ 부터 세고 이 항목은 f₁ 부터 세므로 첨자가 하나 밀린다. (3)의 거리의 어림은 바나흐 고정점 정리의 어림을 옮긴 것이고, 출처 연습문제 7.6.8 a)(p.300: 축소 상수 k 의 반복 x_{n+1} = f(x_n) 과 고정점 x 에서 d(x, x_n) ≤ kⁿ d(x₁, x₀)/(1 − k))와 같은 꼴이며(첨자가 하나 밀린다), 출처 6.3.2 의 증명의 어림 ∥f_n − f_k∥ ≤ C^k α 와도 같은 꼴이다. 예시 'F(x, y) = xy, x₀ = 0, y₀ = 2 의 피카르 반복열'은 출처 6.3.4절 연습문제 6.3.4(p.252, f′(x) = x f(x), f(0) = 2 의 피카르 반복 f₀, …, f₄)와 같은 방정식이다. 확인 질문 'F(x, y) = 2x'의 F 는 출처 6.3.1절(p.246)이 'F 가 x 변수만 담으면 해는 미적분의 기본정리로 주어진다'고 하는 경우이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 1건과 앞뒤가 모순이던 확인 질문 1건, 메모의 부정 주장 1건, 틀린 인용 2곳을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
닫힌구간과 열린구간은 [[interval]]의 것이고, 초깃값 문제와 그 해는 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 것이다. 설정, $I_0$, $Z$, 고른 거리 $d_\infty$, 상수 사상 $\kappa_{y_0}$, 피카르 사상 $T$는 [[picard-operator|피카르 사상]]의 것이고, 반복열은 [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 것이며, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이다. 거듭제곱 $k^n$은 [[power-of-a-real-number]]의 것이고 $k^0 = 1$이다.

**설정**([[picard-operator|피카르 사상]]과 같다). $I$, $J$는 닫힌구간이고, $F : I \times J \to \mathbb{R}$는 연속함수이며 $0 \le L$인 실수 $L$에 대하여 둘째 변수에 대하여 $L$-립시츠이다. $M$은 $0 < M$이고 $I \times J$의 모든 점에서 $|F(x, y)| \le M$인 실수이다. $x_0$, $y_0$은 실수이고 $\alpha$는 양의 실수이며 $[x_0 - \alpha, x_0 + \alpha] \subseteq I$, $[y_0 - \alpha, y_0 + \alpha] \subseteq J$이다. $h$가 $0 < h \le \alpha$이고 $h\,(M + L\alpha) \le \alpha$인 실수일 때 $I_0 = [x_0 - h, x_0 + h]$로 둔다.

1. ($h$를 잡는 법) $h_* = \min\{\alpha, \alpha\,(M + L\alpha)^{-1}\}$는 $0 < h_* \le \alpha$이고 $h_*\,(M + L\alpha) \le \alpha$이다. 또 $h$가 이 두 조건을 만족하고 $0 < h' \le h$이면 $h'$도 두 조건을 만족한다.
2. (존재와 유일성) $h$가 위의 두 조건을 만족하면, $I_0$ 위에서 초깃값 문제
   $$
   y' = F(x, y), \qquad y(x_0) = y_0
   $$
   의 해가 정확히 하나 있다. 곧 값이 모두 $J$에 들고 미분가능하며 모든 $x \in I_0$에서 $f'(x) = F(x, f(x))$이고 $f(x_0) = y_0$인 실함수 $f : I_0 \to \mathbb{R}$가 있고, 이런 실함수는 하나뿐이다. 이 해 $f$는 연속미분가능하고, 모든 $x \in I_0$에서 $|f(x) - y_0| \le M\,|x - x_0| \le \alpha$이다.
3. (피카르 반복열) $h$가 위의 두 조건을 만족하고 $f$가 (2)의 해라 하자. $Z$에서 $\kappa_{y_0}$에서 시작하는 $T$의 반복열, 곧 $f_1 = \kappa_{y_0}$이고 모든 자연수 $n$에서 $f_{n+1} = T f_n$인 $Z$의 수열 $(f_n)$을 **피카르 반복열**(Picard iterates)이라 부른다. 모든 자연수 $n$에서 $f_{n+1}(x) = y_0 + \int_{x_0}^{x} F(t, f_n(t))\,dt$이다.
   - (i) 모든 자연수 $n$과 모든 $x \in I_0$에서
     $$
     \begin{aligned}
     &|f_n(x) - f(x)| \\
     &\quad \le d_\infty(f_n, f) \\
     &\quad \le \frac{(Lh)^{n-1}}{1 - Lh}\,Mh
     \end{aligned}
     $$
     이다.
   - (ii) $(f_n)$은 $(Z, d_\infty)$에서 $f$로 수렴하고, $I_0$에서 $\mathbb{R}$로의 사상의 열로서 $f$로 고르게 수렴한다.
4. (더 작은 구간) $h$가 위의 두 조건을 만족하고 $f$가 (2)의 해이며 $0 < h' \le h$이면, $[x_0 - h', x_0 + h']$ 위의 해는 정확히 하나이고 그것은 제한 $f|_{[x_0 - h', x_0 + h']}$이다.
5. ($\alpha$가 있을 조건) $I = [a_1, b_1]$, $J = [a_2, b_2]$라 하자. $[x_0 - \alpha, x_0 + \alpha] \subseteq I$이고 $[y_0 - \alpha, y_0 + \alpha] \subseteq J$인 양의 실수 $\alpha$가 있는 것은 정확히 $x_0 \in (a_1, b_1)$이고 $y_0 \in (a_2, b_2)$일 때이다. 이때 $\alpha = \min\bigl\{\min\{x_0 - a_1, b_1 - x_0\}, \min\{y_0 - a_2, b_2 - y_0\}\bigr\}$가 그런 수이다. 특히 $y_0$이 $J$의 끝점 $a_2$나 $b_2$이면 그런 $\alpha$는 없다.
6. ($L = 0$) $L = 0$이면 (2)의 해는 $f = T\kappa_{y_0}$, 곧 모든 $x \in I_0$에서 $f(x) = y_0 + \int_{x_0}^{x} F(t, y_0)\,dt$이고, $n \ge 2$인 모든 자연수 $n$에서 $f_n = f$이다.
:::

:::english
Closed and open intervals are as in the entry on intervals, and initial value problems and their solutions are as in the corresponding entry. The setting, $I_0$, $Z$, the uniform metric $d_\infty$, the constant map $\kappa_{y_0}$ and the Picard operator $T$ are as in the entry on the Picard operator, sequences of iterates are as in the entry on the Banach fixed point theorem, and uniform convergence is as in the corresponding entry. Powers $k^n$ are as in the entry on powers of real numbers, with $k^0 = 1$.

**Setting** (the same as in the entry on the Picard operator). $I$ and $J$ are closed intervals, and $F : I \times J \to \mathbb{R}$ is a continuous function that is $L$-Lipschitz in the second variable for a real number $L$ with $0 \le L$. $M$ is a real number with $0 < M$ and $|F(x, y)| \le M$ at every point of $I \times J$. $x_0$ and $y_0$ are real numbers, $\alpha$ is a positive real number, $[x_0 - \alpha, x_0 + \alpha] \subseteq I$ and $[y_0 - \alpha, y_0 + \alpha] \subseteq J$. When $h$ is a real number with $0 < h \le \alpha$ and $h\,(M + L\alpha) \le \alpha$, let $I_0 = [x_0 - h, x_0 + h]$.

1. (Choosing $h$) $h_* = \min\{\alpha, \alpha\,(M + L\alpha)^{-1}\}$ satisfies $0 < h_* \le \alpha$ and $h_*\,(M + L\alpha) \le \alpha$. Moreover, if $h$ satisfies these two conditions and $0 < h' \le h$, then $h'$ also satisfies them.
2. (Existence and uniqueness) If $h$ satisfies the two conditions above, the initial value problem
   $$
   y' = F(x, y), \qquad y(x_0) = y_0
   $$
   has exactly one solution on $I_0$. That is, there is a real-valued function $f : I_0 \to \mathbb{R}$ all of whose values lie in $J$, which is differentiable, and which satisfies $f'(x) = F(x, f(x))$ for all $x \in I_0$ and $f(x_0) = y_0$, and there is only one such function. This solution $f$ is continuously differentiable, and $|f(x) - y_0| \le M\,|x - x_0| \le \alpha$ for all $x \in I_0$.
3. (Picard iterates) Let $h$ satisfy the two conditions above and let $f$ be the solution in (2). The sequence of iterates of $T$ in $Z$ starting at $\kappa_{y_0}$, that is, the sequence $(f_n)$ in $Z$ with $f_1 = \kappa_{y_0}$ and $f_{n+1} = T f_n$ for every natural number $n$, is called the sequence of **Picard iterates**. For every natural number $n$, $f_{n+1}(x) = y_0 + \int_{x_0}^{x} F(t, f_n(t))\,dt$.
   - (i) For every natural number $n$ and every $x \in I_0$,
     $$
     \begin{aligned}
     &|f_n(x) - f(x)| \\
     &\quad \le d_\infty(f_n, f) \\
     &\quad \le \frac{(Lh)^{n-1}}{1 - Lh}\,Mh.
     \end{aligned}
     $$
   - (ii) $(f_n)$ converges to $f$ in $(Z, d_\infty)$, and, as a sequence of maps from $I_0$ to $\mathbb{R}$, converges uniformly to $f$.
4. (Smaller intervals) If $h$ satisfies the two conditions above, $f$ is the solution in (2), and $0 < h' \le h$, then there is exactly one solution on $[x_0 - h', x_0 + h']$, namely the restriction $f|_{[x_0 - h', x_0 + h']}$.
5. (When $\alpha$ exists) Let $I = [a_1, b_1]$ and $J = [a_2, b_2]$. There is a positive real number $\alpha$ with $[x_0 - \alpha, x_0 + \alpha] \subseteq I$ and $[y_0 - \alpha, y_0 + \alpha] \subseteq J$ precisely when $x_0 \in (a_1, b_1)$ and $y_0 \in (a_2, b_2)$. In that case $\alpha = \min\bigl\{\min\{x_0 - a_1, b_1 - x_0\}, \min\{y_0 - a_2, b_2 - y_0\}\bigr\}$ is such a number. In particular, if $y_0$ is an endpoint $a_2$ or $b_2$ of $J$, there is no such $\alpha$.
6. ($L = 0$) If $L = 0$, the solution in (2) is $f = T\kappa_{y_0}$, that is, $f(x) = y_0 + \int_{x_0}^{x} F(t, y_0)\,dt$ for all $x \in I_0$, and $f_n = f$ for every natural number $n \ge 2$.
:::

## 직관

[[picard-operator|피카르 사상]]은 해를 찾는 문제를 닫힌 공 $Z$ 위의 축소 사상 $T$의 고정점을 찾는 문제로 바꾸었습니다. $Z$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 닫힌 공이어서 완비이고 공집합이 아니므로, [[banach-fixed-point-theorem|바나흐 고정점 정리]]가 고정점이 정확히 하나 있다는 것과 반복열이 그리로 수렴한다는 것을 한꺼번에 줍니다. 해가 하나 있다는 것은 고정점이 있다는 것이고, 해가 하나뿐이라는 것은 고정점이 하나뿐이라는 것입니다.

유일성에는 한 단계가 더 있습니다. 바나흐 정리는 $Z$ 안의 고정점이 하나뿐이라고 말하지만, 다른 해가 $Z$ 밖에 있을지도 모릅니다. 피카르 사상의 (4)의 (i)이 그것을 막습니다. 값이 $J$에 드는 해는 기울기의 크기가 $M$ 이하이므로 $y_0$에서 $Mh \le \alpha$보다 멀리 가지 못하고, 그래서 저절로 $Z$에 듭니다. 이 정리의 유일성은 $I_0$ 위에서 정의되고 값이 $J$에 드는 해 사이의 것입니다.

정리가 보장하는 구간은 $h$로 정해지는 짧은 구간 $I_0$입니다. 해가 실제로는 더 긴 구간에서 있어도 이 정리는 그것을 말하지 않습니다.

## 증명

:::idea
[[picard-operator|피카르 사상]]의 $T : Z \to Z$는 축소 상수 $Lh$의 축소 사상이고 $(Z, d_\infty)$는 공집합이 아닌 완비 거리공간이다. 바나흐 고정점 정리의 고정점이 해이고, 해는 모두 $Z$에 드는 고정점이다.
:::

:::hint
(3)의 어림에서는 바나흐 고정점 정리의 어림의 $d(x_1, x_2) = d_\infty(\kappa_{y_0}, T\kappa_{y_0})$를 피카르 사상의 (2)로 $Mh$ 이하로 누릅니다.
:::

:::hint
(4)에서는 $h'$으로 이 정리를 다시 쓰고, $f$의 제한이 해라는 것을 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (2)의 (iii)으로 봅니다.
:::

:::proof
"순서 성질"은 [[order-properties-of-reals]]의 번호이고, "절댓값"은 [[absolute-value]]의 번호이다.

**(1).** $0 < M$이고 순서 성질 (4)의 (iv)에 의해 $0 \le L\alpha$이므로 $0 < M + L\alpha$이고, 순서 성질 (6)의 (i)과 (4)의 (i)에 의해 $0 < \alpha\,(M + L\alpha)^{-1}$이다. 절댓값 (10)에 의해 $h_*$는 $\alpha$이거나 $\alpha\,(M + L\alpha)^{-1}$이므로 $0 < h_*$이고, $h_* \le \alpha$, $h_* \le \alpha\,(M + L\alpha)^{-1}$이다. 뒤의 부등식에 $0 < M + L\alpha$를 곱하면(순서 성질 (4)의 (iii)) $h_*\,(M + L\alpha) \le \alpha$이다. $0 < h' \le h$이면 $h' \le h \le \alpha$이고, 같은 곱셈으로 $h'\,(M + L\alpha) \le h\,(M + L\alpha) \le \alpha$이다.

**(2).** [[picard-operator|피카르 사상]]의 설정 단락에 의해 $(Z, d_\infty)$는 완비이고 $\kappa_{y_0} \in Z$이므로 $Z$는 공집합이 아니다. 같은 항목의 (3)에 의해 $T : Z \to Z$는 축소 상수 $Lh$의 축소 사상이다. [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)에 의해 $T$의 고정점 $f$가 정확히 하나 있다.

*존재.* [[picard-operator|피카르 사상]]의 (4)의 (ii)에 의해 고정점 $f$는 $I_0$ 위의 해이다.

*유일성.* $g$가 $I_0$ 위의 해이면 [[picard-operator|피카르 사상]]의 (4)의 (i)에 의해 $g \in Z$이고, (4)의 (ii)에 의해 $Tg = g$이다. 고정점은 $f$ 하나뿐이므로 $g = f$이다.

*성질.* [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (2)의 (i)에 의해 $f$는 연속미분가능하다. [[picard-operator|피카르 사상]]의 (4)의 (i)에 의해 모든 $x \in I_0$에서 $|f(x) - y_0| \le M\,|x - x_0| \le Mh \le \alpha$이다.

**(3).** [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 반복열의 정의에 의해 $\kappa_{y_0}$에서 시작하는 $T$의 반복열 $(f_n)$이 정확히 하나 있고, 모든 항이 $Z$의 원소이다. $f_n \in Z$이므로 피카르 사상의 정의에 의해 $f_{n+1}(x) = (Tf_n)(x) = y_0 + \int_{x_0}^{x} F(t, f_n(t))\,dt$이다.

(i) $k = Lh$로 두자. 피카르 사상의 (3)에 의해 $0 \le k < 1$이다. [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)는 그 고정점 $f$에 대해 모든 자연수 $n$에서 $d_\infty(f_n, f) \le k^{n-1}(1 - k)^{-1}\,d_\infty(f_1, f_2)$를 준다. $f_2 = T\kappa_{y_0}$이고 피카르 사상의 (2)에 의해 모든 $x \in I_0$에서 $|(T\kappa_{y_0})(x) - \kappa_{y_0}(x)| = |(T\kappa_{y_0})(x) - y_0| \le Mh$이며 $0 \le Mh$이므로, [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (2)의 (ii)에 의해 $d_\infty(f_1, f_2) \le Mh$이다(피카르 사상의 증명의 준비에서 본 대로 $Z$의 $d_\infty$는 그 항목의 $d_\infty$와 같다). [[power-of-a-real-number]]의 (6)의 (i)과 순서 성질 (6)의 (i)에 의해 $0 \le k^{n-1}(1 - k)^{-1}$이므로, 순서 성질 (4)의 (iii)에 의해 둘째 부등식을 얻는다. 첫 부등식은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (2)의 (i)과 [[metric-space-examples]]의 (1)이다.

(ii) [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 (2)에 의해 $(f_n)$은 $(Z, d_\infty)$에서 $f$로 수렴한다. [[convergence-in-metric-spaces]]의 (1)에 의해, 양의 실수 $\varepsilon$마다 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$에서 $d_\infty(f_n, f) < \varepsilon$이고, (i)의 첫 부등식에 의해 그런 $n$과 모든 $x \in I_0$에서 $|f_n(x) - f(x)| < \varepsilon$이다. 각 $f_n$과 $f$는 $I_0$에서 $\mathbb{R}$로의 사상이므로 $(f_n)$은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 뜻의 사상의 열이고, [[uniform-convergence|고른 수렴]]의 (8)에 의해 $(f_n)$은 $f$로 고르게 수렴한다.

**(4).** (1)에 의해 $h'$도 두 조건을 만족하므로, (2)를 $h'$에 쓰면 $I_1 = [x_0 - h', x_0 + h']$ 위의 해가 정확히 하나 있다. $0 < h' \le h$이므로 $x_0 - h \le x_0 - h' < x_0 < x_0 + h' \le x_0 + h$이고, $I_1$은 $I_0$에 포함된 구간이며 $x_0 \in I_1$이다. [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (2)의 (iii)에 의해 $f|_{I_1}$은 $I_1$ 위의 해이므로 그 하나의 해는 $f|_{I_1}$이다.

**(5).** 먼저 $\alpha$가 있다고 하자. [[interval]]의 (3)에 의해 $x_0 - \alpha \in [x_0 - \alpha, x_0 + \alpha] \subseteq [a_1, b_1]$이므로 $a_1 \le x_0 - \alpha < x_0$이고, 같은 방법으로 $x_0 < x_0 + \alpha \le b_1$, $a_2 \le y_0 - \alpha < y_0$, $y_0 < y_0 + \alpha \le b_2$이다. 그러므로 $x_0 \in (a_1, b_1)$, $y_0 \in (a_2, b_2)$이다.

거꾸로 $a_1 < x_0 < b_1$, $a_2 < y_0 < b_2$라 하자. 순서 성질 (3)의 (i)에 의해 네 수 $x_0 - a_1$, $b_1 - x_0$, $y_0 - a_2$, $b_2 - y_0$은 양수이고, 절댓값 (10)에 의해 진술의 $\alpha$는 그 가운데 하나이므로 양수이며 네 수 모두 이하이다. $\alpha \le x_0 - a_1$에서 $a_1 \le x_0 - \alpha$이고, $\alpha \le b_1 - x_0$에서 $x_0 + \alpha \le b_1$이다(순서 성질 (2)). $0 < \alpha$이므로 $x_0 - \alpha < x_0 + \alpha$이고, $x_0 - \alpha \le t \le x_0 + \alpha$이면 순서 성질 (1)의 (v)에 의해 $a_1 \le t \le b_1$이다. 곧 $[x_0 - \alpha, x_0 + \alpha] \subseteq I$이다. 같은 계산을 $y_0$, $a_2$, $b_2$로 하면 $[y_0 - \alpha, y_0 + \alpha] \subseteq J$이다.

$y_0 = a_2$이거나 $y_0 = b_2$이면 $y_0 \notin (a_2, b_2)$이므로 앞 단락의 첫 부분에 의해 그런 $\alpha$가 없다.

**(6).** $L = 0$이면 [[picard-operator|피카르 사상]]의 (5)에 의해 $Z$의 모든 원소 $g$에서 $Tg = T\kappa_{y_0}$이다. (2)의 해 $f$는 $T$의 고정점이므로 $f = Tf = T\kappa_{y_0} = f_2$이고, 모든 $t \in I_0$에서 $\kappa_{y_0}(t) = y_0$이므로 $f(x) = y_0 + \int_{x_0}^{x} F(t, y_0)\,dt$이다. 모든 자연수 $n$에서 $f_n \in Z$이므로 $f_{n+1} = Tf_n = T\kappa_{y_0} = f$이다. 곧 $n \ge 2$이면 $f_n = f$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$F(x, y) = xy$, $x_0 = 0$, $y_0 = 2$의 피카르 반복열]
$I = [-1, 1]$, $J = [1, 3]$, $F(x, y) = xy$, $x_0 = 0$, $y_0 = 2$, $\alpha = 1$이라 합시다. [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)에 의해 $F$는 연속이고, $|x| \le 1$이므로 그 (6)의 (ii)에 의해 둘째 변수에 대하여 $1$-립시츠입니다. $|xy| \le 1 \cdot 3$이므로 $M = 3$으로 둡니다. 조건은 $h \le 1$, $h\,(3 + 1) \le 1$이므로 $h = 1/4$를 쓸 수 있고, $I_0 = [-1/4, 1/4]$, 축소 상수는 $Lh = 1/4$입니다.

반복열은 $f_1 = 2$, $f_2(x) = 2 + \int_0^x 2t\,dt = 2 + x^2$, $f_3(x) = 2 + \int_0^x (2t + t^3)\,dt = 2 + x^2 + x^4/4$입니다([[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (6)). (3)의 (i)에 의해 $|f_3(x) - f(x)| \le (1/4)^2 \cdot (4/3) \cdot (3/4) = 1/16$입니다.
:::

:::counterexample[$y_0$이 $J$의 끝점인 경우: $J = [0, 1]$, $y_0 = 0$]
$I = [-1, 1]$, $J = [0, 1]$, $F(x, y) = 1$, $x_0 = 0$, $y_0 = 0$이라 합시다. (5)에 의해 설정의 $\alpha$가 없으므로 이 정리를 쓸 수 없습니다. 실제로 $0 < h \le 1$인 어떤 $[-h, h]$에서도 해가 없습니다. [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (3)에 의해 해가 있다면 $f(x) = \int_0^x 1\,dt = x$이어야 하는데([[oriented-integral]]의 (4)), $f(-h) = -h < 0$이어서 $f(-h) \notin J$이기 때문입니다. 정리의 가정이 깨지면 결론도 깨질 수 있다는 예입니다.
:::

## 확인 질문

:::check[설정에서 $L = 2$, $M = 1$, $\alpha = 1$이면 (1)의 $h_*$와 축소 상수 $Lh_*$는?]
$\alpha\,(M + L\alpha)^{-1} = 1/3$이므로 $h_* = \min\{1, 1/3\} = 1/3$이고, $Lh_* = 2/3 < 1$입니다. $h_*\,(M + L\alpha) = 1$이므로 등호로 조건이 성립합니다.
:::

:::check[$I = J = [-1, 1]$, $F(x, y) = 2x$, $x_0 = y_0 = 0$일 때 (6)을 쓰면 해와 반복열은?]
$F$는 둘째 변수에 의존하지 않으므로 $L = 0$입니다. $\alpha = 1$, $M = 2$로 두면 조건은 $h \le 1$, $2h \le 1$이므로 $h = 1/2$를 쓸 수 있습니다. (6)에 의해 해는 $f(x) = \int_0^x 2t\,dt = x^2$이고 $f_2 = f_3 = \cdots = x^2$, $f_1 = 0$입니다.
:::
