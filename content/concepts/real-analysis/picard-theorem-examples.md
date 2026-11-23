---
title: 피카르 정리의 예
title_en: Examples for Picard's Theorem
aliases: [f′ = f 의 피카르 반복, f′ = f² 의 해, 해가 하나가 아닌 초깃값 문제, examples of Picard's theorem, nonuniqueness without Lipschitz condition]
kind: proposition
field: real-analysis
msc: ["34A12"]
level: undergrad
summary: 피카르 정리를 세 초깃값 문제에 쓴다. f′ = f, f(0) = 1 에서는 정리가 주는 h 가 늘 1/2 보다 작지만 해 exp 는 실수 전체에서 있고, 피카르 반복열은 1, 1 + x, 1 + x + x²/2, … 이다. f′ = f², f(0) = 1 의 해 (1 − x)⁻¹ 은 1 에 가까이 가면 위로 유계가 아니고, 정리가 주는 h 는 늘 1/4 이하이다. 둘째 변수에 대하여 립시츠가 아닌 f′ = 2√|f|, f(0) = 0 에는 [0, h] 위의 해가 둘 있다.
requires: [set, subset, function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, square-root-exists, real-valued-function, derivative, derivative-rules, derivative-of-power, oriented-integral, linearity-of-the-integral, antiderivative-and-integral-of-power, exponential-function, laws-of-exponential-function, continuous-function-on-a-rectangle, initial-value-problem-and-integral-equation, picard-operator, picard-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.3.3절 Examples, Example 6.3.3, 6.3.4, 6.3.5 (pp.250–251); 7.6.2절 Picard's theorem 의 예 문단 (p.297); 6.3.4절 연습문제 6.3.7 (p.252); 7.6.3절 연습문제 7.6.7 (p.300); 6.3.4절 연습문제 6.3.8 (p.253); 5.4.2절 Remark 5.4.4 (p.211)"
    checked: original
    note: "(1)은 출처 Example 6.3.3(p.250, f′(x) = f(x), f(0) = 1, F(x, y) = y, L = 1)과 7.6.2절(p.297)의 y′ = y, y(0) = 1 과 같은 문제이다. 출처는 'I 와 J 를 크게 잡으면 증명이 h < 1/2 인 아무 h 를 준다는 것을 독자에게 맡기고 계산을 생략한다'고 적고, 연습문제 6.3.7(p.252)이 그것을 묻는다. (1)의 (ii)는 정리가 주는 h 가 늘 1/2 보다 작다는 쪽을, (iii)은 1/2 보다 작은 모든 h 가 나온다는 쪽을 x₀ = 0, y₀ = 1 에서 증명한 것이다. 출처는 해를 eˣ 로 쓰고, 이 항목은 리만 적분 강의의 exp 를 쓴다. (1)의 (iv)(exp 가 이 초깃값 문제의 해)는 출처 5.4.2절 Remark 5.4.4(p.211: 지수함수를 E′ = E, E(0) = 1 의 해로 정의하는 길이 있다며 Example 6.3.3 을 가리킨다)와 같은 사실이다. (1)의 (v)의 반복열은 출처 Example 6.3.3 의 f₀ = 1, f₁ = 1 + x, f₂ = 1 + x + x²/2, f₃ = 1 + x + x²/2 + x³/6 과 같은 함수들이고, 출처는 f₀ 부터 세므로 첨자가 하나 밀린다. 출처가 이어서 적는 '해를 이어 붙여 모든 x 에서 지수함수를 만든다'(p.250)는 싣지 않았다. (2)는 출처 Example 6.3.4(pp.250–251, f′(x) = f(x)², f(0) = 1 의 해 1/(1 − x), 'h < 1 은 되지만 더 큰 h 는 안 된다', 증명이 주는 가장 좋은 h 는 1 − √3/2 ≈ 0.134 라는 것은 계산을 생략한다)와 7.6.2절(p.297, 해가 x = 1 에서 'blows up')과 같은 문제이다. 이 항목은 '더 큰 h 는 안 된다'와 출처의 0.134 는 다루지 않고, (2)의 (iii)에서 정리의 조건을 만족하는 h 가 늘 1/4 이하라는 것만 보인다(0.134 < 1/4 이므로 출처의 값과 어긋나지 않는다). '터진다'는 한쪽 극한 대신 (2)의 (ii)의 꼴(모든 실수 K 에 그보다 큰 값이 있다)로 쓴다. 예시 'f′ = f² 의 피카르 반복열'은 출처 연습문제 7.6.7(p.300, y′ = y², y(0) = 1 에서 f₀(x) = 1 로 시작하는 반복을 적어도 f₂ 까지 구하라)과 같은 계산이다. (3)은 출처 Example 6.3.5(p.251, f′(x) = 2√|f(x)|, f(0) = 0, 해 0 과 x ≥ 0 에서 x², x < 0 에서 −x² 인 함수)와 같은 문제이고, 이 항목은 구간 [0, h] 위의 두 해 0 과 x² 만 다룬다. F 가 립시츠가 아니라는 출처의 '(why?)'는 continuous-function-on-a-rectangle (6)의 (iv)에 있다. 확인 질문 '(3)의 F(x, y) = 2√y 를 I = [−1, 1], J = [1/4, 9/4], x₀ = 0, y₀ = 1 로 옮기면 피카르 정리를 쓸 수 있는가?'는 출처 Example 6.3.5 와 같은 F 를 0 을 포함하지 않는 J 로 옮긴 것이고, 0 에서만 립시츠가 깨지는 F 를 0 에서 떨어진 처음 값에서 쓰는 것은 출처 6.3.4절 연습문제 6.3.8 a)(p.253: y′ = y^{1/3} x, y(1) = 1 에는 정리를 쓸 수 있다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 1건과 앞뒤가 모순이던 확인 질문 1건, 메모의 부정 주장 1건, 틀린 인용 2곳을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
닫힌구간과 구간은 [[interval]]의 것이고, $I \times J$ 위의 연속함수와 둘째 변수에 대한 립시츠 조건은 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 것이다. 초깃값 문제와 그 해는 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 것이고, 피카르 정리의 설정(조건을 만족하는 $L$, $M$, $\alpha$, $h$), 해, 피카르 반복열은 [[picard-theorem|피카르의 존재와 유일성 정리]]와 [[picard-operator|피카르 사상]]의 것이다. 지수함수 $\exp$는 [[exponential-function|지수함수]]의 것이다. 아래에서 "$F$에 피카르 정리의 설정이 성립한다"는 것은 닫힌구간 $I$, $J$ 위의 그 $F$와 주어진 $x_0$, $y_0$에 대하여 실수 $L$, $M$, $\alpha$, $h$가 피카르 정리의 설정의 조건과 $0 < h \le \alpha$, $h\,(M + L\alpha) \le \alpha$를 모두 만족한다는 뜻이다.

1. ($f' = f$, $f(0) = 1$) $x_0 = 0$, $y_0 = 1$이고 $F(x, y) = y$이다.
   - (i) 구간 $I$, $J$ 위에서 $F$는 연속이고 둘째 변수에 대하여 $1$-립시츠이다.
   - (ii) 닫힌구간 $I$, $J$ 위의 $F$에 피카르 정리의 설정이 성립하면 $1 \le L$, $1 + \alpha \le M$이고 $h \le \alpha\,(1 + 2\alpha)^{-1} < \tfrac{1}{2}$이다.
   - (iii) 거꾸로 $0 < h < \tfrac{1}{2}$이면 $\alpha = h\,(1 - 2h)^{-1}$, $I = [-\alpha, \alpha]$, $J = [1 - \alpha, 1 + \alpha]$, $L = 1$, $M = 1 + \alpha$로 피카르 정리의 설정이 성립하고, $h\,(M + L\alpha) = \alpha$이다.
   - (iv) 닫힌구간 $I$, $J$ 위의 $F$에 피카르 정리의 설정이 성립하면 $[-h, h]$ 위의 해는 $\exp$의 제한 $\exp|_{[-h, h]}$이다. 또 $I = J = \mathbb{R}$로 두면 $\exp$는 $\mathbb{R}$ 위의 해이다.
   - (v) (ii)와 같은 설정에서 피카르 반복열의 처음 네 항은 $[-h, h]$ 위의 함수
     $$
     \begin{aligned}
     f_1(x) &= 1, \\
     f_2(x) &= 1 + x, \\
     f_3(x) &= 1 + x + \frac{x^2}{2}, \\
     f_4(x) &= 1 + x + \frac{x^2}{2} \\
     &\qquad + \frac{x^3}{6}
     \end{aligned}
     $$
     이다.
2. ($f' = f^2$, $f(0) = 1$) $x_0 = 0$, $y_0 = 1$이고 $F(x, y) = y^2$이다.
   - (i) $I = J = \mathbb{R}$로 두자. $I'$이 구간이고 $0 \in I'$이며 $I'$의 모든 원소가 $1$보다 작으면, $g(x) = (1 - x)^{-1}$로 정한 $g : I' \to \mathbb{R}$는 $I'$ 위의 해이다.
   - (ii) 모든 실수 $K$에 대하여 $0 \le x < 1$이고 $(1 - x)^{-1} > K$인 실수 $x$가 있다.
   - (iii) 닫힌구간 $I$, $J$ 위의 $F$에 피카르 정리의 설정이 성립하면 $(1 + \alpha)^2 \le M$이고 $h \le \tfrac{1}{4}$이다.
   - (iv) $I = [-1, 1]$, $J = [0, 2]$, $\alpha = 1$, $L = 4$, $M = 4$, $h = \tfrac{1}{8}$로 피카르 정리의 설정이 성립하고, $[-\tfrac{1}{8}, \tfrac{1}{8}]$ 위의 해는 (i)의 $g$를 그 구간으로 제한한 것이다.
3. ($f' = 2\sqrt{|f|}$, $f(0) = 0$) $I = J = [-1, 1]$, $x_0 = y_0 = 0$이고 $F(x, y) = 2\sqrt{|y|}$이다.
   - (i) $F$는 연속이지만 둘째 변수에 대하여 립시츠가 아니다. $\alpha = 1$, $M = 2$는 피카르 정리의 설정의 $\alpha$, $M$에 관한 조건을 만족한다.
   - (ii) $0 < h \le 1$이면 구간 $[0, h]$ 위의 해가 둘 있다. 값이 $0$인 상수함수와 $x^2$으로 정한 함수이다.
:::

:::english
Closed intervals and intervals are as in the entry on intervals, and continuous functions on $I \times J$ and the Lipschitz condition in the second variable are as in the entry on continuous functions on a closed rectangle. Initial value problems and their solutions are as in the corresponding entry, and the setting of Picard's theorem (numbers $L$, $M$, $\alpha$, $h$ satisfying its conditions), solutions and Picard iterates are as in the entries on Picard's existence and uniqueness theorem and on the Picard operator. The exponential function $\exp$ is as in the entry on the exponential function. Below, "the setting of Picard's theorem holds for $F$" means that, for that $F$ on closed intervals $I$, $J$ and the given $x_0$, $y_0$, real numbers $L$, $M$, $\alpha$, $h$ satisfy all conditions of the setting of Picard's theorem together with $0 < h \le \alpha$ and $h\,(M + L\alpha) \le \alpha$.

1. ($f' = f$, $f(0) = 1$) Here $x_0 = 0$, $y_0 = 1$ and $F(x, y) = y$.
   - (i) On intervals $I$, $J$, $F$ is continuous and $1$-Lipschitz in the second variable.
   - (ii) If the setting of Picard's theorem holds for $F$ on closed intervals $I$, $J$, then $1 \le L$, $1 + \alpha \le M$ and $h \le \alpha\,(1 + 2\alpha)^{-1} < \tfrac{1}{2}$.
   - (iii) Conversely, if $0 < h < \tfrac{1}{2}$, then the setting of Picard's theorem holds with $\alpha = h\,(1 - 2h)^{-1}$, $I = [-\alpha, \alpha]$, $J = [1 - \alpha, 1 + \alpha]$, $L = 1$, $M = 1 + \alpha$, and $h\,(M + L\alpha) = \alpha$.
   - (iv) If the setting of Picard's theorem holds for $F$ on closed intervals $I$, $J$, then the solution on $[-h, h]$ is the restriction $\exp|_{[-h, h]}$. Moreover, with $I = J = \mathbb{R}$, $\exp$ is a solution on $\mathbb{R}$.
   - (v) In the same setting as in (ii), the first four Picard iterates are the functions on $[-h, h]$
     $$
     \begin{aligned}
     f_1(x) &= 1, \\
     f_2(x) &= 1 + x, \\
     f_3(x) &= 1 + x + \frac{x^2}{2}, \\
     f_4(x) &= 1 + x + \frac{x^2}{2} \\
     &\qquad + \frac{x^3}{6}.
     \end{aligned}
     $$
2. ($f' = f^2$, $f(0) = 1$) Here $x_0 = 0$, $y_0 = 1$ and $F(x, y) = y^2$.
   - (i) Let $I = J = \mathbb{R}$. If $I'$ is an interval with $0 \in I'$ all of whose elements are less than $1$, then $g : I' \to \mathbb{R}$ defined by $g(x) = (1 - x)^{-1}$ is a solution on $I'$.
   - (ii) For every real number $K$ there is a real number $x$ with $0 \le x < 1$ and $(1 - x)^{-1} > K$.
   - (iii) If the setting of Picard's theorem holds for $F$ on closed intervals $I$, $J$, then $(1 + \alpha)^2 \le M$ and $h \le \tfrac{1}{4}$.
   - (iv) The setting of Picard's theorem holds with $I = [-1, 1]$, $J = [0, 2]$, $\alpha = 1$, $L = 4$, $M = 4$, $h = \tfrac{1}{8}$, and the solution on $[-\tfrac{1}{8}, \tfrac{1}{8}]$ is the restriction of $g$ from (i) to that interval.
3. ($f' = 2\sqrt{|f|}$, $f(0) = 0$) Here $I = J = [-1, 1]$, $x_0 = y_0 = 0$ and $F(x, y) = 2\sqrt{|y|}$.
   - (i) $F$ is continuous but not Lipschitz in the second variable. The numbers $\alpha = 1$ and $M = 2$ satisfy the conditions on $\alpha$ and $M$ in the setting of Picard's theorem.
   - (ii) If $0 < h \le 1$, there are two solutions on the interval $[0, h]$: the constant function with value $0$ and the function defined by $x^2$.
:::

## 직관

세 예는 피카르 정리가 말하는 것과 말하지 않는 것을 보여 줍니다. $f' = f$에서는 해 $\exp$가 실수 전체에서 있지만, 정리는 직사각형을 어떻게 잡아도 $1/2$보다 짧은 반지름의 구간만 보장합니다((1)의 (ii)). 정리가 주는 $h$는 해가 있는 구간의 길이가 아니라 증명이 감당할 수 있는 길이입니다. $\alpha$를 키우면 $M$도 $1 + \alpha$ 이상으로 커져서, $h$의 상한 $\alpha\,(1 + 2\alpha)^{-1}$은 $1/2$에 다가갈 뿐 넘지 못합니다.

$f' = f^2$의 해 $(1 - x)^{-1}$은 $x$가 $1$에 다가가면 어떤 수보다도 커집니다((2)의 (ii)). 그래서 $1$에 가까운 곳까지 해의 값을 모두 담는 유계인 $J$는 없고, 정리는 유계인 $J$ 위에서만 립시츠 조건을 씁니다. $J$에 $y_0 = 1$에서 $\alpha$만큼 떨어진 값이 들어가면 기울기의 상한 $M$이 $(1 + \alpha)^2$ 이상이 되어, $h$는 $1/4$을 넘지 못합니다((2)의 (iii)).

$f' = 2\sqrt{|f|}$에서는 $F$가 연속이고 $|F| \le 2$여서 둘째 변수에 대한 립시츠 조건 말고는 정리의 가정이 모두 성립합니다. 그런데 $x_0 = 0$에서 출발하는 구간 $[0, h]$ 위에 해가 둘 있습니다((3)). 한 해는 $0$에 그대로 머물고, 다른 해는 곧바로 $0$을 떠납니다. $y = 0$ 근처에서 $2\sqrt{|y|}$가 $|y|$의 어떤 상수배보다도 커질 수 있어서 립시츠 조건이 성립하지 않고, 유일성의 증명(피카르 사상이 축소 사상이라는 것)을 쓸 수 없습니다.

## 증명

:::idea
각 해는 도함수를 계산해 초깃값 문제의 정의에 넣어 확인한다. $h$의 상한은 $M$이 $J$의 끝값에서의 $|F|$ 이상이라는 것과 $h\,(M + L\alpha) \le \alpha$에서 나온다. 해가 정리의 해와 같다는 것은 값이 $J$에 든다는 것을 확인한 뒤 피카르 정리의 유일성으로 본다.
:::

:::hint
(1)의 (iv)에서 $\exp(x)$가 $J$에 든다는 것은 [[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (4)의 두 어림 $1 + x \le \exp(x) \le (1 - x)^{-1}$로 봅니다.
:::

:::hint
(2)의 (iii)에서는 $(1 - \alpha)^2 \ge 0$, 곧 $(1 + \alpha)^2 \ge 4\alpha$를 씁니다.
:::

:::proof
"순서 성질"은 [[order-properties-of-reals]]의 번호이고, "절댓값"은 [[absolute-value]]의 번호이다. 설정이 성립할 때 [[interval]]의 (3)에 의해 닫힌구간의 끝점은 그 구간의 원소이므로, $0 \in [-\alpha, \alpha] \subseteq I$이고 $1 - \alpha$, $1 + \alpha$, $y_0 \pm \alpha$는 $J$의 원소이다.

**(1).** (i) [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)의 (i)과 (6)의 (ii)이다.

(ii) $y = 1 + \alpha$, $z = 1 - \alpha$는 $J$의 원소이고 $|y - z| = 2\alpha > 0$이므로, 립시츠 조건 $2\alpha = |F(0, y) - F(0, z)| \le L \cdot 2\alpha$에서 순서 성질 (6)의 (iv)에 의해 $1 \le L$이다. $(0, 1 + \alpha) \in I \times J$이므로 $1 + \alpha = |F(0, 1 + \alpha)| \le M$이다. 따라서 순서 성질 (2), (4)에 의해 $1 + 2\alpha \le M + L\alpha$이고, $0 < h$를 곱해 $h\,(1 + 2\alpha) \le h\,(M + L\alpha) \le \alpha$이다. $0 < 1 + 2\alpha$이므로 순서 성질 (6)의 (iv)에 의해 $h \le \alpha\,(1 + 2\alpha)^{-1}$이다. 끝으로 $2\alpha < 1 + 2\alpha$에 $(1 + 2\alpha)^{-1}\,2^{-1} > 0$을 곱하면 $\alpha\,(1 + 2\alpha)^{-1} < \tfrac{1}{2}$이다.

(iii) $0 < h < \tfrac{1}{2}$이면 $0 < 1 - 2h$이므로 $0 < \alpha$이다. (K1)–(K8)로 계산하면 $1 + 2\alpha = (1 - 2h + 2h)(1 - 2h)^{-1} = (1 - 2h)^{-1}$이고, 따라서 $h\,(M + L\alpha) = h\,(1 + 2\alpha) = h\,(1 - 2h)^{-1} = \alpha$이다. $1 < 1 + 2\alpha$이므로 순서 성질 (6)의 (ii)에 의해 $(1 + 2\alpha)^{-1} < 1$이고, $h = \alpha\,(1 + 2\alpha)^{-1} < \alpha$이다. [[interval]]의 (1)에 의해 $I$, $J$는 닫힌구간이고 $[x_0 - \alpha, x_0 + \alpha] = I$, $[y_0 - \alpha, y_0 + \alpha] = J$이다. (i)에 의해 $F$는 연속이고 둘째 변수에 대하여 $1$-립시츠이다. $J$의 원소 $y$는 $1 - \alpha \le y \le 1 + \alpha$를 만족하고, $-1 < 1$에서 $-(1 + \alpha) < 1 - \alpha$이므로 $-(1 + \alpha) \le y \le 1 + \alpha$이며, 절댓값 (7)에 의해 $|F(x, y)| = |y| \le 1 + \alpha = M$이다. $0 < M$이다. 그러므로 설정이 성립한다.

(iv) (ii)에 의해 $h\,(1 + 2\alpha) \le \alpha$이고 $h < \tfrac{1}{2} < 1$이다. $x \in [-h, h]$라 하자. 절댓값 (8)에 의해 $-h \le x \le h$이다. [[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (4)에 의해 $1 + x \le \exp(x)$이므로 $\exp(x) - 1 \ge x \ge -h \ge -\alpha$이다. 또 $x \le h < 1$이므로 같은 (4)에 의해 $0 < 1 - x$이고 $\exp(x) \le (1 - x)^{-1}$이다. $0 < 1 - h \le 1 - x$이므로 순서 성질 (6)의 (ii)(또는 같을 때 등호)에 의해 $(1 - x)^{-1} \le (1 - h)^{-1}$이고, $\exp(x) - 1 \le (1 - h)^{-1} - 1 = h\,(1 - h)^{-1}$이다. $h\,(1 + 2\alpha) \le \alpha$에서 $h \le \alpha - 2\alpha h \le \alpha - \alpha h = \alpha\,(1 - h)$이고($0 \le \alpha h$), $0 < (1 - h)^{-1}$을 곱하면 $h\,(1 - h)^{-1} \le \alpha$이다. 그러므로 $-\alpha \le \exp(x) - 1 \le \alpha$이고, 절댓값 (7), (8)에 의해 $\exp(x) \in [1 - \alpha, 1 + \alpha] \subseteq J$이다.

[[exponential-function|지수함수]]의 (3)에 의해 $\exp$는 미분가능한 함수이고 $\exp' = \exp$이며, (1)에 의해 $\exp(0) = 1$이다. [[derivative]]의 (2)에 의해 $e_0 = \exp|_{[-h, h]}$는 미분가능한 함수이고 모든 $x \in [-h, h]$에서 $e_0'(x) = \exp(x) = F(x, e_0(x))$이며, $e_0(0) = 1$이다. 값이 모두 $J$에 들므로 $e_0$은 $[-h, h]$ 위의 해이고, [[picard-theorem|피카르의 존재와 유일성 정리]]의 (2)의 유일성에 의해 그 해이다. $I = J = \mathbb{R}$이면 같은 계산으로 $\exp$가 $\mathbb{R}$ 위의 해이다($\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이고, 값이 $J = \mathbb{R}$에 드는 것은 당연하다).

(v) 이 $F$에서는 피카르 사상이 $(Tf)(x) = 1 + \int_0^x f(t)\,dt$이다. [[picard-theorem|피카르의 존재와 유일성 정리]]의 (3)에 의해 $f_1 = \kappa_1$이고 $f_{n+1}(x) = 1 + \int_0^x f_n(t)\,dt$이다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)에 의해 $\int_0^x t^n\,dt = x^{n+1}(n + 1)^{-1}$이고, [[linearity-of-the-integral|적분의 선형성]]의 (6)에 의해 합과 상수배의 방향 있는 적분은 각 항의 적분의 합과 상수배이며, [[oriented-integral]]의 (5)에 의해 적분은 $0$과 $x$ 사이의 값만으로 정해진다. 따라서
$$
\begin{aligned}
f_2(x) &= 1 + \int_0^x 1\,dt \\
&= 1 + x, \\
f_3(x) &= 1 + \int_0^x (1 + t)\,dt \\
&= 1 + x + \frac{x^2}{2}, \\
f_4(x) &= 1 + \int_0^x \Bigl(1 + t + \frac{t^2}{2}\Bigr)dt \\
&= 1 + x + \frac{x^2}{2} + \frac{x^3}{6}
\end{aligned}
$$
이다($\tfrac{1}{2} \cdot \tfrac{x^3}{3} = \tfrac{x^3}{6}$).

**(2).** (i) 값이 $y$인 함수끼리의 곱이므로 $F$는 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)의 (i), (ii)에 의해 $\mathbb{R} \times \mathbb{R}$ 위에서 연속이다. $x \in I'$이면 $x < 1$이므로 $0 < 1 - x$이다. $u(x) = 1 - x$로 정한 $u : I' \to \mathbb{R}$는 [[derivative]]의 (1)에 의해 미분가능하고 $u' = -1$이며, $I'$에서 $0$이 아니다. [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $g = 1/u$는 미분가능하고 모든 $x \in I'$에서
$$
\begin{aligned}
g'(x) &= -(-1)\,\bigl(u(x)^2\bigr)^{-1} \\
&= \bigl((1 - x)^{-1}\bigr)^2 = g(x)^2
\end{aligned}
$$
이다([[power-of-a-real-number]]의 (3)). $g(0) = 1$이고 값은 $J = \mathbb{R}$에 든다. 그러므로 $g$는 $I'$ 위의 해이다.

(ii) $x = 1 - (|K| + 1)^{-1}$로 두자. 절댓값 (2)에 의해 $1 \le |K| + 1$이므로 순서 성질 (6)에 의해 $0 < (|K| + 1)^{-1} \le 1$이고 $0 \le x < 1$이다. $(1 - x)^{-1} = |K| + 1 > |K| \ge K$이다(절댓값 (6)).

(iii) $(0, 1 + \alpha) \in I \times J$이므로 $(1 + \alpha)^2 = |F(0, 1 + \alpha)| \le M$이다. $0 \le L\alpha$이므로 $h\,(1 + \alpha)^2 \le hM \le h\,(M + L\alpha) \le \alpha$이다. (K1)–(K3)과 순서 성질 (5)의 (iii)에 의해 $(1 + \alpha)^2 - 4\alpha = (1 - \alpha)^2 \ge 0$이므로 $4\alpha \le (1 + \alpha)^2$이고, $4\alpha h \le h\,(1 + \alpha)^2 \le \alpha$이다. $0 < \alpha$로 나누면(순서 성질 (6)의 (iv)) $4h \le 1$, 곧 $h \le \tfrac{1}{4}$이다.

(iv) $[x_0 - \alpha, x_0 + \alpha] = [-1, 1] = I$이고 $[y_0 - \alpha, y_0 + \alpha] = [0, 2] = J$이다. $F$는 (i)과 같은 이유로 연속이고, $J$의 모든 $y$에서 $|y| \le 2$이므로 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (6)의 (iii)에 의해 둘째 변수에 대하여 $4$-립시츠이다. $|y^2| \le 4$이므로 $M = 4$를 쓸 수 있다. $h = \tfrac{1}{8}$은 $0 < h \le 1$이고 $h\,(4 + 4) = 1 \le \alpha$이다. 설정이 성립한다.

$I' = [-\tfrac{1}{8}, \tfrac{1}{8}]$은 $0$을 원소로 갖고 모든 원소가 $1$보다 작으므로, (i)에 의해 $g$는 $\mathbb{R} \times \mathbb{R}$ 위의 $F$에 대한 $I'$ 위의 해이다. $x \in I'$이면 $\tfrac{7}{8} \le 1 - x \le \tfrac{9}{8}$이므로 순서 성질 (6)의 (ii)에 의해 $\tfrac{8}{9} \le g(x) \le \tfrac{8}{7}$이고 $g(x) \in [0, 2]$이다. [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (4)를 $I_1 = [-1, 1]$, $J_1 = [0, 2]$에 쓰면 $g$는 $[-1, 1] \times [0, 2]$ 위의 $F$에 대한 $I'$ 위의 해이고, [[picard-theorem|피카르의 존재와 유일성 정리]]의 (2)의 유일성에 의해 그 해이다.

**(3).** (i) [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (6)의 (iv)이다($0 \in J$). $[x_0 - 1, x_0 + 1] = I$, $[y_0 - 1, y_0 + 1] = J$이고, $|y| \le 1$이면 [[square-root-exists|제곱근의 존재]]의 (2)에 의해 $\sqrt{|y|} \le \sqrt{1} = 1$이므로 $|F(x, y)| \le 2$이다. $0 < 2$이다.

(ii) $[0, h]$는 [[interval]]의 (1)에 의해 구간이고 $0 \in [0, h] \subseteq I$이다. 값이 $0$인 상수함수 $z$는 [[derivative]]의 (1)에 의해 미분가능하고 $z' = 0$이며, $\sqrt{0} = 0$이므로 $F(x, z(x)) = 2\sqrt{0} = 0 = z'(x)$이다. $z(0) = 0$이고 값 $0$은 $J$에 든다. $q(x) = x^2$으로 정한 $q : [0, h] \to \mathbb{R}$는 [[derivative-of-power|거듭제곱의 도함수]]의 (1)과 [[derivative]]의 (2)에 의해 미분가능하고 $q'(x) = 2x$이다. $0 \le x$이므로 [[power-of-a-real-number]]의 (1)과 [[square-root-exists|제곱근의 존재]]의 (2)에 의해 $\sqrt{|x^2|} = \sqrt{xx} = x$이고 $F(x, q(x)) = 2x = q'(x)$이다. $q(0) = 0$이고, $0 \le x \le h \le 1$이므로 $0 \le x^2 \le 1$, 곧 값이 $J$에 든다. 두 해는 $x = h$에서 $z(h) = 0 \ne h^2 = q(h)$이므로 다르다. $\blacksquare$
:::

## 예시와 반례

:::example[$f' = f$에서 $\alpha = 1$로 잡은 경우의 어림]
(1)에서 $I = [-1, 1]$, $J = [0, 2]$, $\alpha = 1$, $L = 1$, $M = 2$로 두면 조건은 $h \le 1$, $3h \le 1$이므로 $h = \tfrac{1}{3}$을 쓸 수 있고, 축소 상수는 $Lh = \tfrac{1}{3}$입니다. [[picard-theorem|피카르의 존재와 유일성 정리]]의 (3)의 (i)에 의해 $[-\tfrac{1}{3}, \tfrac{1}{3}]$의 모든 $x$에서
$$
\begin{aligned}
|f_4(x) - \exp(x)| &\le \frac{(1/3)^3}{2/3} \cdot \frac{2}{3} \\
&= \frac{1}{27}
\end{aligned}
$$
입니다. 여기서 $f_4(x) = 1 + x + x^2/2 + x^3/6$입니다((1)의 (v)). 이 $h = \tfrac{1}{3}$은 (1)의 (ii)의 상한 $\alpha\,(1 + 2\alpha)^{-1} = \tfrac{1}{3}$과 같습니다.
:::

:::example[$f' = f^2$의 피카르 반복열]
(2)의 (iv)의 설정에서 피카르 사상은 $(Tf)(x) = 1 + \int_0^x f(t)^2\,dt$입니다. $f_1 = 1$이면 $f_2(x) = 1 + x$이고, $(1 + t)^2 = 1 + 2t + t^2$이므로 [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (6)에 의해
$$
f_3(x) = 1 + x + x^2 + \frac{x^3}{3}
$$
입니다. 축소 상수는 $Lh = 4 \cdot \tfrac{1}{8} = \tfrac{1}{2}$입니다.
:::

## 확인 질문

:::check[(1)에서 $\alpha = 2$, $I = [-2, 2]$, $J = [-1, 3]$, $L = 1$, $M = 3$으로 잡으면 쓸 수 있는 가장 큰 $h$는?]
조건은 $h \le 2$와 $h\,(3 + 2) \le 2$이므로 가장 큰 $h$는 $\tfrac{2}{5}$입니다. (1)의 (ii)의 상한 $\alpha\,(1 + 2\alpha)^{-1} = \tfrac{2}{5}$와 같고, $\tfrac{1}{2}$보다 작습니다.
:::

:::check[(3)의 $F(x, y) = 2\sqrt{y}$를 $I = [-1, 1]$, $J = [\tfrac{1}{4}, \tfrac{9}{4}]$, $x_0 = 0$, $y_0 = 1$로 옮기면 피카르 정리를 쓸 수 있는가?]
쓸 수 있습니다. $J$에서는 $|y| = y$이고, $y$, $z \in J$이면 $\sqrt{y} \ge \tfrac{1}{2}$, $\sqrt{z} \ge \tfrac{1}{2}$이므로 $\sqrt{y} + \sqrt{z} \ge 1$입니다. $(\sqrt{y} - \sqrt{z})(\sqrt{y} + \sqrt{z}) = y - z$에서 $|2\sqrt{y} - 2\sqrt{z}| = 2|y - z|\,(\sqrt{y} + \sqrt{z})^{-1} \le 2|y - z|$이므로 둘째 변수에 대하여 $2$-립시츠입니다. $\alpha = \tfrac{3}{4}$이면 $[-\tfrac{3}{4}, \tfrac{3}{4}] \subseteq I$, $[\tfrac{1}{4}, \tfrac{7}{4}] \subseteq J$입니다. $F$는 이 닫힌 직사각형 위에서 연속이므로 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (3)에 의해 $M$도 있습니다. (3)에서는 $J$가 $0$을 포함해 립시츠 조건이 성립하지 않았습니다.
:::
