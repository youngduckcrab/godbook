---
title: 피카르 사상
title_en: The Picard Operator
aliases: [피카르 작용소, 적분방정식의 사상, Picard operator, Picard map]
kind: proposition
field: real-analysis
msc: ["34A12", "47H10"]
level: undergrad
summary: 닫힌 직사각형 위의 연속이고 둘째 변수에 대하여 립시츠인 F 와 초깃값 (x₀, y₀) 에 대해, 구간 [x₀ − h, x₀ + h] 위의 연속함수 가운데 y₀ 에서 α 이내에 머무는 것 전체(연속 사상의 공간의 닫힌 공)에서, f 를 y₀ + ∫ F(t, f(t)) dt 로 보내는 사상 T 를 정의한다. h(M + Lα) ≤ α 이면 T 는 이 닫힌 공을 자기 자신으로 보내는 축소 상수 Lh 의 축소 사상이고, T 의 고정점은 정확히 그 구간 위의 초깃값 문제의 해이다.
requires: [set, subset, function, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-valued-function, oriented-integral, linearity-of-the-integral, antiderivative-and-integral-of-power, continuously-differentiable, fundamental-theorem-of-calculus-second-form, metric-space, metric-space-examples, open-ball, lipschitz-map, contraction-mapping, bounded-maps-and-uniform-metric, space-of-continuous-maps, continuous-function-on-a-rectangle, initial-value-problem-and-integral-equation]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.2절 Picard's theorem, Theorem 7.6.3 의 증명 (pp.298–299); 7.6.3절 연습문제 7.6.1, 7.6.2 (p.299); 6.3.2절 Theorem 6.3.2 의 증명 (pp.247–249)"
    checked: original
    note: "출처 Theorem 7.6.3 의 증명(pp.298–299, 식은 그림으로 대조)은 x₀ = 0 으로 두고, Y = {f ∈ C([−h, h], ℝ) : f([−h, h]) ⊂ J}(값이 J 에 드는 연속함수 전체)에서 T(f)(x) = y₀ + ∫_0^x F(t, f(t)) dt 로 사상 T 를 정의한 뒤, |T(f)(x) − y₀| ≤ |x|M ≤ hM ≤ αM/(M + Lα) ≤ α 와 |T(f)(x) − T(g)(x)| ≤ |x|L d(f, g) ≤ hL d(f, g) ≤ (Lα/(M + Lα)) d(f, g) 를 보인다. 출처의 h 는 min{α, α/(M + Lα)} 하나이고 축소 상수는 Lα/(M + Lα) 이다. 이 항목은 x₀ 를 일반으로 두고(방향 있는 적분과 |x − x₀|), h 를 0 < h ≤ α, h(M + Lα) ≤ α 를 만족하는 아무 수로 두며, 축소 상수를 Lh 로 쓴다. 출처의 h 에서는 Lh ≤ Lα/(M + Lα) 이다. 정의역을 Y 대신 y₀ 에서 α 이내인 연속함수 전체(space-of-continuous-maps (5)의 닫힌 공)로 두었고, 출처도 T(f) 의 값이 [y₀ − α, y₀ + α] 에 든다는 것을 보인다. 그래서 출처가 연습문제 7.6.1(p.299, Y 는 닫혀 있다)로 넘기는 'Y 가 닫혀 있다'는 이 항목에서는 닫힌 공의 완비로 바뀐다. 출처는 'T 가 잘 정의되고 T(f) 가 C([−h, h], ℝ) 에 든다는 것은 연습문제'라고 적고(p.298), 연습문제 7.6.2(p.299)가 그것을 묻는다. 이 항목의 정의 단락과 (1)이 그 답이다. (4)의 (i)(값이 J 에 드는 해는 저절로 닫힌 공에 든다)은 출처가 증명 끝(p.299)에서 '미분가능한 함수는 연속이므로 f 는 유일한 해'라고만 적는 단계를 채운 것이다. 출처 6.3.2절 Theorem 6.3.2 의 증명(pp.247–248)도 피카르 반복의 각 항에 같은 두 어림(|f_k(x) − y₀| ≤ M|x| ≤ Mh 와 ∥f_n − f_k∥ ≤ C∥f_{n−1} − f_{k−1}∥)을 쓴다. '피카르 사상'이라는 이름은 출처에 없다(검색어 'Picard map', 'Picard operator', 'Picard mapping' 0건. 출처는 'a mapping T' 라고만 한다). 예시 'F = x, h = α'의 F 는 출처 6.3.1절(p.246)이 'F 가 x 만 담으면 해는 미적분의 기본정리로 주어진다'고 하는 경우이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 1건과 앞뒤가 모순이던 확인 질문 1건, 메모의 부정 주장 1건, 틀린 인용 2곳을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
닫힌구간은 [[interval]]의 것이고, $I \times J$ 위의 연속함수, 둘째 변수에 대한 $L$-립시츠 조건은 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 것이다. 초깃값 문제와 그 해, 적분방정식은 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 것이고, 방향 있는 적분은 [[oriented-integral]]의 것이다. 상수 사상 $\kappa_{y}$, 고른 거리 $d_\infty$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이고, $C_b(X, \mathbb{R})$와 닫힌 공 $C(g, r)$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이며, 축소 사상, 축소 상수, 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이다.

**설정.** 다음을 가정한다.

- $I$, $J$는 닫힌구간이고, $F : I \times J \to \mathbb{R}$는 연속함수이며, $0 \le L$인 실수 $L$에 대하여 둘째 변수에 대하여 $L$-립시츠이다.
- $M$은 $0 < M$인 실수이고, $I \times J$의 모든 점에서 $|F(x, y)| \le M$이다. (이런 $M$이 있다는 것은 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (3)이다.)
- $x_0$, $y_0$은 실수이고, $\alpha$는 양의 실수이며, $[x_0 - \alpha, x_0 + \alpha] \subseteq I$이고 $[y_0 - \alpha, y_0 + \alpha] \subseteq J$이다.
- $h$는 실수이고 $0 < h \le \alpha$이며 $h\,(M + L\alpha) \le \alpha$이다.

$I_0 = [x_0 - h, x_0 + h]$로 두고 $I_0$에 보통 거리의 부분공간 거리를 준다. $Z$를 $(C_b(I_0, \mathbb{R}), d_\infty)$에서 중심이 상수 사상 $\kappa_{y_0}$이고 반지름이 $\alpha$인 닫힌 공 $C(\kappa_{y_0}, \alpha)$라 하고, $Z$에는 $d_\infty$의 부분공간 거리를 주어 그것도 $d_\infty$로 쓴다. [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (5)에 의해 $Z$의 원소는 정확히 연속함수 $f : I_0 \to \mathbb{R}$ 가운데 모든 $x \in I_0$에서 $|f(x) - y_0| \le \alpha$인 것이고, $\kappa_{y_0} \in Z$이며, $(Z, d_\infty)$는 완비이다.

**피카르 사상.** $f \in Z$라 하자. $f$의 값은 모두 $[y_0 - \alpha, y_0 + \alpha] \subseteq J$에 들므로, [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (4)에 의해 $t$에서의 값이 $F(t, f(t))$인 함수 $G_f : I_0 \to \mathbb{R}$는 연속함수이고, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 $I_0$의 어느 두 점 사이에서도 적분가능하다. 그래서 [[real-valued-function]]의 (1)에 의해
$$
(Tf)(x) = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt
$$
로 정한 함수 $Tf : I_0 \to \mathbb{R}$가 있다. 다음이 성립한다.

1. (연속미분가능) $f \in Z$이면 $Tf$는 연속미분가능하고 $(Tf)' = G_f$이며 $(Tf)(x_0) = y_0$이다. 특히 $Tf$는 연속함수이다.
2. (닫힌 공을 닫힌 공으로) $f \in Z$이고 $x \in I_0$이면
   $$
   \begin{aligned}
   |(Tf)(x) - y_0| &\le M\,|x - x_0| \\
   &\le Mh \le \alpha
   \end{aligned}
   $$
   이다. 따라서 $Tf \in Z$이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f$를 $Tf$로 보내는 사상 $T : Z \to Z$가 있다. $T$를 이 설정의 **피카르 사상**(Picard operator)이라 부른다.
3. (축소) $f$, $g \in Z$이고 $x \in I_0$이면
   $$
   \begin{aligned}
   &|(Tf)(x) - (Tg)(x)| \\
   &\quad \le L\,|x - x_0|\,d_\infty(f, g)
   \end{aligned}
   $$
   이고, 따라서 $d_\infty(Tf, Tg) \le Lh\,d_\infty(f, g)$이다. 또 $0 \le Lh < 1$이다. 곧 $T : Z \to Z$는 축소 상수 $Lh$의 축소 사상이다.
4. (고정점과 해) 아래의 "해"는 $I_0$ 위에서 초깃값 문제 $y' = F(x, y)$, $y(x_0) = y_0$의 해, 곧 값이 모두 $J$에 들고 미분가능하며 $g'(x) = F(x, g(x))$, $g(x_0) = y_0$을 만족하는 실함수 $g : I_0 \to \mathbb{R}$이다.
   - (i) $g$가 해이면 모든 $x \in I_0$에서 $|g(x) - y_0| \le M\,|x - x_0|$이고, 따라서 $g \in Z$이다.
   - (ii) $f \in Z$일 때, $Tf = f$인 것은 정확히 $f$가 해일 때이다.

   따라서 해 전체의 집합은 $T$의 고정점 전체의 집합과 같다.
5. ($L = 0$) $L = 0$이면 $Z$의 모든 원소 $f$, $g$에서 $Tf = Tg$이다. 곧 $T$는 상수 사상이고 축소 상수 $0$의 축소 사상이다.
:::

:::english
Closed intervals are as in the entry on intervals, and continuous functions on $I \times J$ and the $L$-Lipschitz condition in the second variable are as in the entry on continuous functions on a closed rectangle. Initial value problems, their solutions and the integral equation are as in the entry on initial value problems, and oriented integrals are as in the corresponding entry. The constant maps $\kappa_y$ and the uniform metric $d_\infty$ are as in the entry on bounded maps and the uniform metric, $C_b(X, \mathbb{R})$ and closed balls $C(g, r)$ are as in the entry on the space of bounded continuous maps, and contractions, contraction constants and fixed points are as in the entry on contractions.

**Setting.** Assume the following.

- $I$ and $J$ are closed intervals, $F : I \times J \to \mathbb{R}$ is a continuous function, and $F$ is $L$-Lipschitz in the second variable for a real number $L$ with $0 \le L$.
- $M$ is a real number with $0 < M$, and $|F(x, y)| \le M$ at every point of $I \times J$. (Such an $M$ exists by part (3) of the entry on continuous functions on a closed rectangle.)
- $x_0$ and $y_0$ are real numbers, $\alpha$ is a positive real number, $[x_0 - \alpha, x_0 + \alpha] \subseteq I$ and $[y_0 - \alpha, y_0 + \alpha] \subseteq J$.
- $h$ is a real number with $0 < h \le \alpha$ and $h\,(M + L\alpha) \le \alpha$.

Let $I_0 = [x_0 - h, x_0 + h]$ with the subspace metric of the standard metric. Let $Z$ be the closed ball $C(\kappa_{y_0}, \alpha)$ in $(C_b(I_0, \mathbb{R}), d_\infty)$ with center the constant map $\kappa_{y_0}$ and radius $\alpha$; give $Z$ the subspace metric of $d_\infty$, also written $d_\infty$. By part (5) of the entry on the space of bounded continuous maps, the elements of $Z$ are exactly the continuous functions $f : I_0 \to \mathbb{R}$ with $|f(x) - y_0| \le \alpha$ for all $x \in I_0$; moreover $\kappa_{y_0} \in Z$ and $(Z, d_\infty)$ is complete.

**The Picard operator.** Let $f \in Z$. All values of $f$ lie in $[y_0 - \alpha, y_0 + \alpha] \subseteq J$, so by part (4) of the entry on continuous functions on a closed rectangle the function $G_f : I_0 \to \mathbb{R}$ with value $F(t, f(t))$ at $t$ is a continuous function, and by part (4) of the second form of the fundamental theorem of calculus it is integrable between any two points of $I_0$. Hence, by part (1) of the entry on real-valued functions, there is a function $Tf : I_0 \to \mathbb{R}$ defined by
$$
(Tf)(x) = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt.
$$
The following hold.

1. (Continuous differentiability) If $f \in Z$, then $Tf$ is continuously differentiable, $(Tf)' = G_f$ and $(Tf)(x_0) = y_0$. In particular $Tf$ is a continuous function.
2. (The closed ball goes into itself) If $f \in Z$ and $x \in I_0$, then
   $$
   \begin{aligned}
   |(Tf)(x) - y_0| &\le M\,|x - x_0| \\
   &\le Mh \le \alpha.
   \end{aligned}
   $$
   Hence $Tf \in Z$, and by part (1) of the recursion theorem there is a map $T : Z \to Z$ sending $f$ to $Tf$. We call $T$ the **Picard operator** of this setting.
3. (Contraction) If $f$, $g \in Z$ and $x \in I_0$, then
   $$
   \begin{aligned}
   &|(Tf)(x) - (Tg)(x)| \\
   &\quad \le L\,|x - x_0|\,d_\infty(f, g),
   \end{aligned}
   $$
   and hence $d_\infty(Tf, Tg) \le Lh\,d_\infty(f, g)$. Moreover $0 \le Lh < 1$. That is, $T : Z \to Z$ is a contraction with contraction constant $Lh$.
4. (Fixed points and solutions) Below, a "solution" means a solution on $I_0$ of the initial value problem $y' = F(x, y)$, $y(x_0) = y_0$, that is, a real-valued function $g : I_0 \to \mathbb{R}$ all of whose values lie in $J$, which is differentiable, and which satisfies $g'(x) = F(x, g(x))$ and $g(x_0) = y_0$.
   - (i) If $g$ is a solution, then $|g(x) - y_0| \le M\,|x - x_0|$ for all $x \in I_0$, and hence $g \in Z$.
   - (ii) For $f \in Z$, $Tf = f$ precisely when $f$ is a solution.

   Hence the set of all solutions equals the set of all fixed points of $T$.
5. ($L = 0$) If $L = 0$, then $Tf = Tg$ for all elements $f$, $g$ of $Z$. That is, $T$ is a constant map and a contraction with contraction constant $0$.
:::

## 직관

미분방정식의 해를 모르는 채로 함수 $f$를 하나 짐작했다고 합시다. 짐작이 맞는지 보려면, $f$를 따라가며 각 점의 기울기 $F(t, f(t))$를 읽고 그 기울기들을 $x_0$에서부터 적분해 새 함수 $Tf$를 만들어 봅니다. 짐작이 맞았다면 기울기를 쌓은 결과가 원래 함수와 같아야 하므로 $Tf = f$입니다. 거꾸로 $Tf = f$이면 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (1)에 의해 $f$는 해입니다((4)). 그래서 해를 찾는 일은 $T$의 고정점을 찾는 일입니다.

$T$를 쓰려면 $Tf$가 다시 $T$를 쓸 수 있는 함수여야 합니다. $F(t, f(t))$가 정해지려면 $f$의 값이 $J$에 들어야 하므로, 값이 $y_0$에서 $\alpha$ 이내인 함수만 다룹니다. 기울기의 크기가 $M$ 이하이므로 $Tf$는 $x_0$에서 $|x - x_0|$만큼 가는 동안 $y_0$에서 많아야 $M|x - x_0|$만큼 벗어나고, $h$를 $Mh \le \alpha$가 되게 작게 잡으면 $Tf$도 그 범위에 남습니다((2)). 또 두 짐작 $f$, $g$의 차이는 립시츠 조건 때문에 기울기에서 많아야 $L$배가 되고, 길이가 $h$ 이하인 구간에서 적분하면 다시 $h$배가 되어 $Lh$배 이하로 줄어듭니다((3)).

$h\,(M + L\alpha) \le \alpha$라는 한 조건이 두 일을 함께 합니다. $hL\alpha \ge 0$이므로 $Mh \le \alpha$가 나오고, $M > 0$이므로 $hL\alpha \le \alpha - hM < \alpha$, 곧 $Lh < 1$이 나옵니다. $M$을 양수로 잡는 까닭이 이 둘째 부등식입니다. $h \le \alpha$는 따로 둔 조건이고, $I_0$가 $I$ 안에 들게 합니다. $M + L\alpha < 1$이면 첫 조건만으로는 $h \le \alpha$가 나오지 않습니다.

## 증명

:::idea
$Tf$는 상수 $y_0$과 연속함수 $G_f$의 적분의 합이므로 미적분의 기본정리 둘째 꼴로 연속미분가능하다. 두 어림은 모두 방향 있는 적분의 어림 $\left|\int_{x_0}^{x} G\right| \le \varepsilon\,|x - x_0|$ 하나로 나온다.
:::

:::hint
(2)에서는 $|G_f(t)| \le M$을, (3)에서는 $|G_f(t) - G_g(t)| \le L\,d_\infty(f, g)$를 $x_0$과 $x$ 사이의 모든 $t$에서 확인하고 [[oriented-integral]]의 (3)에 $k = 0$을 넣습니다.
:::

:::hint
(4)의 (i)에서 해 $g$는 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (1)에 의해 적분방정식을 만족하므로, (2)와 같은 어림을 $g$에 그대로 쓸 수 있습니다.
:::

:::proof
"순서 성질"은 [[order-properties-of-reals]]의 번호이고, "절댓값"은 [[absolute-value]]의 번호이다.

**준비.** $0 < h$이므로 순서 성질 (2)에 의해 $x_0 - h < x_0 < x_0 + h$이고, $I_0$는 [[interval]]의 (1)에 의해 구간이며 $x_0 \in I_0$이다. $h \le \alpha$이므로 $x_0 - \alpha \le x_0 - h$, $x_0 + h \le x_0 + \alpha$이고, 따라서 $I_0 \subseteq [x_0 - \alpha, x_0 + \alpha] \subseteq I$이다. $x \in I_0$인 것은 절댓값 (8)에 의해 정확히 $|x - x_0| \le h$일 때이다. $Z$의 원소 $f$와 $x \in I_0$에서 $|f(x) - y_0| \le \alpha$이므로 절댓값 (8)에 의해 $f(x) \in [y_0 - \alpha, y_0 + \alpha] \subseteq J$이다.

$Z \subseteq C_b(I_0, \mathbb{R}) \subseteq \operatorname{Bd}(I_0, \mathbb{R})$이고 두 단계 모두 부분공간 거리를 주므로, $Z$의 두 원소 사이의 $d_\infty$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 $d_\infty$와 같은 수이다([[metric-space-examples]]의 (3)). 그래서 그 항목의 (1), (2)를 $Z$의 원소에 쓸 수 있다. $\mathbb{R}$의 보통 거리에서 $d(f(x), g(x)) = |f(x) - g(x)|$이다([[metric-space-examples]]의 (1)).

**(1).** [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]을 구간 $I_0$, 연속함수 $G_f$, 밑점 $x_0$에 쓰고, 그 항목의 함수 $\int_{x_0}^{x} G_f$를 여기서 $H : I_0 \to \mathbb{R}$라 쓰자. 그 (4)에 의해 $H$는 연속미분가능하고 $H' = G_f$이며, (6)에 의해 $H(x_0) = 0$이다. $I_0$ 위의 값이 $y_0$인 상수함수를 $c$라 하면, [[continuously-differentiable]]의 (4)에 의해 $c$는 연속미분가능하고 $c'$은 값이 $0$인 상수함수이며, 그 (3)에 의해 $c + H$는 연속미분가능하고 $(c + H)' = c' + H' = G_f$이다. 모든 $x \in I_0$에서 $(Tf)(x) = y_0 + H(x) = (c + H)(x)$이므로 [[real-valued-function]]의 (2)에 의해 $Tf = c + H$이다. 따라서 $Tf$는 연속미분가능하고 $(Tf)' = G_f$이며, $(Tf)(x_0) = y_0 + 0 = y_0$이다. [[continuously-differentiable]]의 (1)에 의해 $Tf$는 연속함수이다.

**(2).** $x \in I_0$라 하자. [[oriented-integral]]의 (1)에 의해 $x_0$과 $x$ 사이에 있는 모든 $t$는 $I_0$의 원소이므로, 준비에서 본 대로 $(t, f(t)) \in I \times J$이고 설정에 의해 $|G_f(t)| = |F(t, f(t))| \le M$이다. [[oriented-integral]]의 (3)에 $k = 0$, $\varepsilon = M$을 넣으면 $\left|\int_{x_0}^{x} G_f\right| \le M\,|x - x_0|$이고, $(Tf)(x) - y_0 = \int_{x_0}^{x} G_f$이므로 첫 부등식을 얻는다. $|x - x_0| \le h$와 $0 \le M$에서 순서 성질 (4)의 (iii)에 의해 $M\,|x - x_0| \le Mh$이다. 끝으로 $0 \le L$, $0 < \alpha$, $0 < h$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le hL\alpha$이고, (K1)–(K3)과 순서 성질 (2)에 의해 $Mh \le Mh + hL\alpha = h\,(M + L\alpha) \le \alpha$이다.

(1)에 의해 $Tf$는 연속함수이고 방금 본 대로 모든 $x \in I_0$에서 $|(Tf)(x) - y_0| \le \alpha$이므로, [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (5)에 의해 $Tf \in Z$이다. $Z$의 각 원소 $f$에 $Z$의 원소 $Tf$가 식으로 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\{(f, Tf) : f \in Z\}$는 $Z$에서 $Z$로의 함수이다.

**(3).** $f$, $g \in Z$, $x \in I_0$라 하자. $x_0$과 $x$ 사이에 있는 $t$는 $I_0$의 원소이고 $f(t)$, $g(t) \in J$이므로, 둘째 변수에 대한 립시츠 조건과 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (2)의 (i)에 의해
$$
\begin{aligned}
|G_f(t) - G_g(t)| &\le L\,|f(t) - g(t)| \\
&\le L\,d_\infty(f, g)
\end{aligned}
$$
이다(둘째 부등식은 $0 \le L$을 곱한 것, 순서 성질 (4)의 (iii)). $G_f$와 $G_g$는 $x_0$과 $x$ 사이에서 적분가능하므로 [[linearity-of-the-integral|적분의 선형성]]의 (6)에 의해 $G_f - G_g$도 그렇고 $(Tf)(x) - (Tg)(x) = \int_{x_0}^{x} G_f - \int_{x_0}^{x} G_g = \int_{x_0}^{x} (G_f - G_g)$이다. [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (1)에 의해 $0 \le d_\infty(f, g)$이므로 $0 \le L\,d_\infty(f, g)$이고, [[oriented-integral]]의 (3)에 $k = 0$, $\varepsilon = L\,d_\infty(f, g)$를 넣으면 첫 부등식을 얻는다. $|x - x_0| \le h$에 $0 \le L\,d_\infty(f, g)$를 곱하면 오른쪽은 $Lh\,d_\infty(f, g)$ 이하이다. $0 \le Lh\,d_\infty(f, g)$이므로 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (2)의 (ii)에 $c = Lh\,d_\infty(f, g)$를 넣어 $d_\infty(Tf, Tg) \le Lh\,d_\infty(f, g)$를 얻는다.

$0 \le L$, $0 < h$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le Lh$이다. $0 < h$, $0 < M$이므로 순서 성질 (4)의 (i)에 의해 $0 < hM$이고, 설정의 $h\,(M + L\alpha) \le \alpha$에서 순서 성질 (2)에 의해 $(Lh)\,\alpha = hL\alpha \le \alpha - hM < \alpha = 1 \cdot \alpha$이다. $0 < \alpha$이므로 순서 성질 (6)의 (iv)에 의해 $Lh < 1$이다. 그러므로 [[lipschitz-map|립시츠 사상]]의 정의에 의해 $T$는 $Lh$-립시츠이고, [[contraction-mapping|축소 사상과 고정점]]의 정의에 의해 축소 상수 $Lh$의 축소 사상이다.

**(4).** $I_0$는 $I$에 포함된 구간이고 $x_0 \in I_0$이므로 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 설정에서 $I' = I_0$로 둘 수 있다.

(i) $g$가 해이면 그 항목의 (1)에 의해 $g$는 연속함수이고 값이 모두 $J$에 들며 모든 $x \in I_0$에서 $g(x) - y_0 = \int_{x_0}^{x} F(t, g(t))\,dt$이다. $x_0$과 $x$ 사이에 있는 $t$에서 $(t, g(t)) \in I \times J$이므로 $|F(t, g(t))| \le M$이고, (2)의 증명과 같이 [[oriented-integral]]의 (3)에 의해 $|g(x) - y_0| \le M\,|x - x_0| \le Mh \le \alpha$이다. $g$는 연속함수이므로 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (5)에 의해 $g \in Z$이다.

(ii) $f \in Z$이면 준비에서 본 대로 $f$의 값은 모두 $J$에 들고 $f$는 연속함수이다. 그러므로 [[initial-value-problem-and-integral-equation|초깃값 문제와 적분방정식]]의 (1)에 의해 $f$가 해인 것은 정확히 모든 $x \in I_0$에서 $f(x) = y_0 + \int_{x_0}^{x} F(t, f(t))\,dt = (Tf)(x)$일 때이고, [[real-valued-function]]의 (2)에 의해 이것은 정확히 $f = Tf$일 때이다.

해 $g$는 (i)에 의해 $Z$의 원소이고 (ii)에 의해 $Tg = g$이다. 거꾸로 $T$의 고정점은 $Z$의 원소이고 (ii)에 의해 해이다. 따라서 두 집합은 같다.

**(5).** $L = 0$이면 (3)에 의해 $d_\infty(Tf, Tg) \le 0 \cdot d_\infty(f, g) = 0$이고, [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (1)에 의해 $0 \le d_\infty(Tf, Tg)$이므로 순서 성질 (1)의 (ii)에 의해 $d_\infty(Tf, Tg) = 0$이다. 그 항목의 (3)에 의해 $d_\infty$는 거리이므로 [[metric-space]]의 조건 (ii)에 의해 $Tf = Tg$이다. 이때 (3)의 축소 상수는 $Lh = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$F(x, y) = x$, $h = \alpha$인 경우]
$I = J = [-1, 1]$, $F(x, y) = x$, $x_0 = y_0 = 0$, $\alpha = 1$이라 합시다. $F$는 [[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (2)의 (i)에 의해 연속이고, (6)의 (i)에 의해 둘째 변수에 대하여 $0$-립시츠이므로 $L = 0$입니다. $|x| \le 1$이므로 $M = 1$로 둘 수 있습니다. 조건은 $0 < h \le 1$과 $h \cdot 1 \le 1$이므로 $h = 1 = \alpha$를 쓸 수 있고, $I_0 = [-1, 1]$입니다.

$f \in Z$이면 $G_f(t) = t$이고, [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)에 의해 $(Tf)(x) = \int_0^x t\,dt = x^2/2$입니다. $f$에 상관없이 같으므로 (5)대로 $T$는 상수 사상입니다. (2)의 어림 $|x^2/2| \le |x|$는 $|x| \le 1$에서 맞습니다. $T$의 고정점은 $x^2/2$로 정한 함수 하나이고, (4)에 의해 그것이 $[-1, 1]$ 위에서 $f' = x$, $f(0) = 0$의 해입니다.
:::

:::counterexample[$h\,(M + L\alpha) \le \alpha$를 빼면: $F = 2$, $h = 1$]
$I = J = [-1, 1]$, $F(x, y) = 2$, $x_0 = y_0 = 0$, $\alpha = 1$, $L = 0$, $M = 2$라 합시다. $h = 1$은 $0 < h \le \alpha$를 만족하지만 $h\,(M + L\alpha) = 2 > 1 = \alpha$입니다. 이때 위의 식으로 $f = \kappa_0$에 대해 $(Tf)(x) = \int_0^x 2\,dt = 2x$이고([[oriented-integral]]의 (4)), $x = 1$에서 $|(Tf)(1) - 0| = 2 > \alpha$이므로 $Tf$는 $Z$의 원소가 아닙니다. 이 경우 $T$는 $Z$를 자기 자신으로 보내지 않습니다. 실제로 $2x$는 $x = 1$에서 값이 $2 \notin J$이므로 $[-1, 1]$ 위의 해도 아닙니다. 조건을 만족하는 $h = 1/2$로 줄이면 $(Tf)(x) = 2x$의 값은 $[-1, 1]$에 머뭅니다.
:::

## 확인 질문

:::check[$I = J = [-1, 1]$, $F(x, y) = x + y$, $x_0 = y_0 = 0$, $\alpha = 1$일 때, $L$, $M$, 쓸 수 있는 가장 큰 $h$와 $T\kappa_0$은?]
[[continuous-function-on-a-rectangle|닫힌 직사각형 위의 연속함수]]의 (6)의 (i), (ii)와 (5)의 (iii)에 의해 $x$는 $0$-립시츠, $y$는 $1$-립시츠이므로 $L = 1$입니다. $|x + y| \le 2$이므로 $M = 2$입니다. 조건 $h \le 1$, $h\,(2 + 1) \le 1$에서 $h$는 $1/3$까지 쓸 수 있고, 그때 축소 상수는 $Lh = 1/3$입니다. $G_{\kappa_0}(t) = t + 0 = t$이므로 $(T\kappa_0)(x) = \int_0^x t\,dt = x^2/2$입니다.
:::

:::check[$L = 1$, $M = 2$, $\alpha = 1$일 때 $h = 1/2$를 쓸 수 있는가?]
설정의 조건으로는 쓸 수 없습니다. $h\,(M + L\alpha) = \tfrac{1}{2} \cdot 3 = \tfrac{3}{2} > 1 = \alpha$입니다. 다만 이 경우에도 $Mh = 1 \le \alpha$이고 $Lh = 1/2 < 1$이므로, 증명에서 실제로 쓰는 두 부등식 $Mh \le \alpha$와 $Lh < 1$은 성립합니다. 조건 $h\,(M + L\alpha) \le \alpha$는 이 두 부등식을 한꺼번에 보장하는 충분조건이고, 두 부등식과 같은 말은 아닙니다.
:::
