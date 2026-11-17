---
title: 미분가능하면 연속이다
title_en: Differentiability Implies Continuity
aliases: [미분가능성과 연속, 미분가능한 함수는 연속, differentiable implies continuous, differentiability implies continuity]
kind: proposition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "구간 위의 실함수가 한 점에서 미분가능하면 그 점에서 연속이고, 그 점을 뺀 정의역 위에서 함숫값이 그 점의 함숫값으로 수렴한다. 미분가능한 함수는 연속함수이다. 역은 성립하지 않는다."
requires: [subset, set-operations, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function, continuity-of-sum-and-product, derivative]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.1.1절 Example 4.1.5 뒤 문단과 Proposition 4.1.6, 그 증명 (p.157)
    checked: original
    note: "출처의 Proposition 4.1.6(p.157)은 f : I → ℝ 가 c ∈ I 에서 미분가능하면 c 에서 연속이라는 것이고, 이 항목의 (1)의 첫 문장이다. 출처는 f(x) − f(c) = ((f(x) − f(c))/(x − c))(x − c) 와 곱의 극한으로 lim (f(x) − f(c)) = f′(c) · 0 = 0 을 얻는다. 이 항목도 같은 경로이고, 그 계산을 I − {c} 위의 함수로 하고 limit-of-a-function 의 (6)으로 I 위로 옮긴다. (1)의 둘째 문장과 (2)는 출처에 명제로 없다(검색한 범위). 출처는 그 앞 문단(p.157)에서 어느 점에서도 미분가능하지 않은 연속함수가 있다는 바이어슈트라스의 예를 들고, 그 구성은 다루지 않는다고 적는다. 반례 '연속이어도 미분가능하지 않을 수 있다'의 |x| 는 출처의 Example 4.1.5(p.157)와 같은 함수이고(미분불가능은 derivative 의 (3)을 인용한다), 출처는 그것을 이 명제의 역이 거짓인 예로 적지는 않는다. 예시 '계단 함수'는 출처에 이 명제의 예로는 없다(검색한 범위). 출처는 같은 꼴의 계단 함수를 Example 3.2.10(p.125–126)에서 불연속의 예로 쓴다. 확인 질문 2 의 함수(한 점의 값만 바꾼 함수)는 출처의 Example 3.2.13(p.127; x ≠ 0 이면 0, g(0) = 1 인 함수의 불연속)과 같은 발상이고, 출처는 그것을 미분과 잇지 않는다. 확인 질문 1 은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
구간과 미분가능, 미분계수, 차분몫은 [[derivative]]의 것이고, 연속은 [[continuous-function]]의 것이며, 수렴과 제한은 [[limit-of-a-function]]과 [[real-valued-function]]의 것이다. $I$를 구간, $f : I \to \mathbb{R}$를 $I$ 위의 실함수라 하자.

1. (한 점에서) $f$가 $c \in I$에서 미분가능하면 $f$는 $c$에서 연속이다. 또 제한 $f|_{I - \{c\}}$는 $c$에서 $f(c)$로 수렴한다. 곧 $f$와 $f|_{I - \{c\}}$ 어느 쪽으로 읽어도 $\lim_{x \to c} f(x) = f(c)$이다.
2. (미분가능한 함수) $A \subseteq I$이고 $f$가 $A$에서 미분가능하면 $f$는 $A$에서 연속이다. 특히 미분가능한 함수는 연속함수이다.
:::

:::english
Intervals, differentiability, derivatives at a point and difference quotients are those of the entry on derivatives; continuity is that of the entry on continuous functions; convergence and restriction are those of the entries on limits of functions and on real-valued functions. Let $I$ be an interval and $f : I \to \mathbb{R}$ a real-valued function on $I$.

1. (At a point) If $f$ is differentiable at $c \in I$, then $f$ is continuous at $c$. Moreover, the restriction $f|_{I - \{c\}}$ converges to $f(c)$ at $c$. That is, $\lim_{x \to c} f(x) = f(c)$, whether read for $f$ or for $f|_{I - \{c\}}$.
2. (Differentiable functions) If $A \subseteq I$ and $f$ is differentiable on $A$, then $f$ is continuous on $A$. In particular, a differentiable function is a continuous function.
:::

## 직관

$x \ne c$이면 $f(x) - f(c) = q_c(x)\,(x - c)$입니다. $x$가 $c$로 갈 때 첫째 인수는 $f'(c)$라는 정해진 수로 가고, 둘째 인수는 $0$으로 가므로 곱은 $0$으로 갑니다. 곧 미분가능하면 $f(x) - f(c)$는 $c$ 가까이에서 대략 $x - c$의 $f'(c)$배이고, $x - c$보다 느리게 작아질 수 없습니다. 그러면 $f(x) - f(c)$가 $0$으로 가는 것은 당연합니다.

비유하면, 순간 속력이 있는 자동차는 순간 이동을 하지 않습니다. 짧은 시간 동안 간 거리는 대략 "속력 × 시간"이어서 시간이 $0$으로 가면 거리도 $0$으로 갑니다. 비유가 맞는 곳은 곱 $q_c(x)\,(x - c)$의 두 인수입니다. 맞지 않는 곳은, 거꾸로 순간 이동을 하지 않는다고 순간 속력이 있지는 않다는 점입니다. 아래 반례처럼 연속이어도 미분가능하지 않을 수 있습니다.

## 증명

:::idea
$I - \{c\}$ 위에서 $f(x) - f(c) = q_c(x)\,(x - c)$로 쓰고 곱의 극한을 쓴다. 그 뒤 $c$를 뺀 정의역에서의 극한을 $I$ 위의 극한으로 옮기고 연속과 잇는다.
:::

:::hint
$S = I - \{c\}$ 위의 함수 $e(x) = x - c$는 $c$에서 어디로 수렴하는가?
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "실함수 (2)"처럼 쓴 것은 [[real-valued-function]]의 번호, "집적점 (6)"은 [[cluster-point]]의 번호, "극한 (4)"는 [[limit-of-a-function]]의 번호, "극한 법칙 (3)"은 [[limit-laws-for-functions]]의 번호, "연속 (3)"은 [[continuous-function]]의 번호이다.

**1의 증명.** $S = I - \{c\}$로 두자. [[derivative]]의 진술에 의해 $c$는 $S$의 집적점이고, $f$의 $c$에서의 차분몫 $q_c : S \to \mathbb{R}$는 $c$에서 $f'(c)$로 수렴한다. $S$ 위에서 $e(x) = x - c$로 정한 함수 $e$와 값이 $f(c)$인 상수함수 $u$를 생각한다. $e$는 $S$ 위의 항등함수 $i_S$와 값이 $c$인 상수함수의 차이므로(실함수 (2), (3), (4)) 극한 (4)와 극한 법칙 (4)에 의해 $c$에서 $c - c = 0$으로 수렴한다((K12)의 (v)). 극한 법칙 (5)에 의해 곱 $q_c\,e$는 $c$에서 $f'(c) \cdot 0 = 0$으로 수렴하고((K9)), 극한 (4)와 극한 법칙 (3)에 의해 $q_c\,e + u$는 $c$에서 $0 + f(c) = f(c)$로 수렴한다((K1), (K4)).

$x \in S$이면 $x - c \ne 0$이므로 (K2), (K8)의 (iii), (K4)에 의해 $q_c(x)\,e(x) = (f(x) - f(c))(x - c)^{-1}(x - c) = f(x) - f(c)$이고, (K1), (K2), (K5), (K8)의 (ii), (K4)에 의해 $(q_c\,e + u)(x) = (f(x) - f(c)) + f(c) = f(x)$이다. 실함수 (6)에 의해 $f|_S(x) = f(x)$이므로 실함수 (2)에 의해 $f|_S = q_c\,e + u$이고, $f|_S$는 $c$에서 $f(c)$로 수렴한다. 이것이 둘째 문장이다. 극한 (6)에 의해 $f$도 $c$에서 $f(c)$로 수렴한다. $I$가 구간이고 $c \in I$이므로 집적점 (6)에 의해 $c$는 $I$의 집적점이고, 연속 (3)에 의해 $f$는 $c$에서 연속이다. 마지막 식은 기호 $\lim$의 약속([[limit-of-a-function]])이다.

**2의 증명.** $A$의 각 원소 $c$에서 $f$가 미분가능하므로 (1)에 의해 $f$는 $c$에서 연속이다. 따라서 [[continuous-function]]의 정의에 의해 $f$는 $A$에서 연속이다. $f$가 미분가능한 함수이면 $A = I$로 두어 $f$는 $I$에서 연속, 곧 연속함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[계단 함수는 $0$에서 미분가능하지 않다]
$H(x) = 0$ ($x < 0$일 때), $H(x) = 1$ ($0 \le x$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$는 $0$에서 연속이 아닙니다. [[continuous-function]]의 (1)을 $\varepsilon = 2^{-1}$로 확인합니다. 양의 실수 $\delta$를 잡고 $x = -2^{-1}\delta$로 두면 [[order-properties-of-reals]]의 (8)과 (3)의 (ii)에 의해 $x < 0$이고 $|x - 0| = 2^{-1}\delta < \delta$이며([[absolute-value|절댓값]]의 (1), (3)), 절댓값의 (3), (1)에 의해 $|H(x) - H(0)| = |0 - 1| = |-1| = 1$이며, [[order-properties-of-reals]]의 (8)에 의해 $2^{-1} < 1$이므로 $|H(x) - H(0)| \ge 2^{-1}$입니다. (1)의 대우에 의해 $H$는 $0$에서 미분가능하지 않습니다. 차분몫을 계산하지 않고도 미분가능하지 않음을 알 수 있습니다.
:::

:::counterexample[연속이어도 미분가능하지 않을 수 있다]
$a(x) = |x|$로 정한 $a : \mathbb{R} \to \mathbb{R}$는 $a = |i_{\mathbb{R}}|$이므로([[real-valued-function]]의 (2), (4)) [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (1)에 의해 $0$에서 연속입니다. 그러나 $\mathbb{R}$은 [[interval]]의 (2)에 의해 $-1$과 $1$을 포함하는 구간이므로, [[derivative]]의 (3)을 $r = 1$로 쓰면 $a$는 $0$에서 미분가능하지 않습니다. 따라서 (1)의 거꾸로("연속이면 미분가능하다")는 성립하지 않습니다.
:::

## 역사와 맥락

Lebl은 바이어슈트라스(Weierstrass)의 유명한 예가 어느 점에서도 미분가능하지 않은 연속함수가 있음을 보여 준다고 적고, 그 함수의 구성은 그 장의 범위를 넘는다고 적습니다. 그 바로 뒤에 미분가능한 함수는 언제나 연속이라는 이 명제를 둡니다.

## 확인 질문

:::check[$f : I \to \mathbb{R}$가 $c$에서 미분가능하고 $f(c) = 2$이면, $x \in I$이고 $|x - c| < \delta$인 모든 $x$에서 $1 < f(x)$인 양수 $\delta$가 있는가?]
있습니다. (1)에 의해 $f$는 $c$에서 연속이고, $1 < 2 = f(c)$이므로 [[continuous-function]]의 (7)을 $a = 1$에 쓰면 그런 $\delta$가 나옵니다. 이 $\delta$ 안에는 $c$ 자신도 들어갑니다.
:::

:::check[$g(x) = x$ ($x \ne 0$일 때), $g(0) = 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 $0$에서 미분가능한가?]
미분가능하지 않습니다. $g$는 $0$에서 연속이 아니기 때문입니다. 양의 실수 $\delta$에 대하여 $x = \min\{2^{-1}\delta, 2^{-1}\}$로 두면 $0 < x < \delta$이고 $x \le 2^{-1}$이므로 $|g(x) - g(0)| = |x - 1| = 1 - x \ge 2^{-1}$입니다([[absolute-value|절댓값]]의 (1), (10), [[order-properties-of-reals]]의 (1)의 (v), (2), (3), (8)). [[continuous-function]]의 (1)이 $\varepsilon = 2^{-1}$로 성립하므로 $g$는 $0$에서 불연속이고, (1)의 대우에 의해 $0$에서 미분가능하지 않습니다.
:::
