---
title: 극값에서 미분계수는 0 이다
title_en: Derivative Vanishes at an Interior Extremum
aliases: [극대, 극소, 극값, 페르마의 정리, relative maximum, relative minimum, local extremum, interior extremum]
kind: lemma
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "함수가 c 에서 극대라는 것은 c 에서 거리 δ 안의 정의역의 모든 점에서 함숫값이 f(c) 이하라는 뜻이다(극소도 같다). 구간 위의 함수가 구간의 끝점이 아닌 점 c 에서 미분가능하고 극대 또는 극소이면 f′(c) = 0 이다."
requires: [subset, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, limit-of-a-function, limits-of-functions-and-inequalities, extreme-value-theorem, derivative, derivative-rules, derivative-of-power]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.2.1절 Definition 4.2.1, Lemma 4.2.2 와 그 증명, 그 뒤 문단 (p.162–163)
    checked: original
    note: "출처의 Definition 4.2.1(p.162)은 S ⊂ ℝ, f : S → ℝ 에 대하여 어떤 δ > 0 이 있어 |x − c| < δ 인 모든 x ∈ S 에서 f(x) ≤ f(c) 이면 f 가 c ∈ S 에서 relative maximum 을 갖는다고 하고, relative minimum 도 같다고 한다. 이 항목의 정의는 같고, relative maximum 을 극대, relative minimum 을 극소로 옮겼다. 출처의 Lemma 4.2.2(p.162)는 f : (a, b) → ℝ 가 c ∈ (a, b) 에서 미분가능하고 c 에서 극대 또는 극소이면 f′(c) = 0 이라는 것이다. 이 항목의 (3)은 정의역을 구간 I 로 두고 c 의 양쪽에 I 의 점 a, b 가 있다는 조건으로 진술한다. I = (a, b) 이면 출처의 진술이다. 출처는 c 의 오른쪽과 왼쪽의 차분몫의 부호를 보고, c 로 수렴하는 수열 {x_n}, {y_n} 을 잡아 그 수열을 따라 극한을 계산한다(p.162–163). 이 항목은 수열을 쓰지 않고, f′(c) 가 양수이면 limits-of-functions-and-inequalities 의 (1)로 c 가까이에서 차분몫이 양수라는 것과 식으로 준 한 점의 차분몫이 0 이하라는 것이 어긋남을 보인다(음수도 같다). 출처는 극소를 −f 로 다루고, 이 항목의 (2)와 증명도 그렇게 한다. (1)(최댓값을 갖는 점은 극대)은 출처에 명제로 없다(검색한 범위). 출처는 그 뒤 문단(p.163)에서 이 정리가 구간의 안쪽 점에 대한 것이라고 적는다. 반례 '끝점에서는'과 '역은 성립하지 않는다'는 출처에 이 꼴로 없다(검색한 범위). 출처는 x³ 이 0 에서 미분계수 0 이라는 것을 Proposition 4.2.8 뒤(p.166)에서 다른 목적(순증가의 예)으로 적는다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 그 상수배 $kf$는 [[real-valued-function]]의 것이고, 절댓값은 [[absolute-value]]의 것이며, 최댓값과 최솟값을 갖는다는 말은 [[extreme-value-theorem|최대·최소 정리]]의 것이고, 구간, 미분가능, 미분계수는 [[derivative]]의 것이다.

**극대와 극소.** $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자. $f$가 $c$에서 **극대**(relative maximum)라는 것은 정확히, 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $f(x) \le f(c)$일 때이다. $f$가 $c$에서 **극소**(relative minimum)라는 것은 정확히, 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $f(c) \le f(x)$일 때이다.

다음이 성립한다.

1. (최댓값과 극대) $f$가 $c$에서 최댓값을 가지면 $f$는 $c$에서 극대이다. $f$가 $c$에서 최솟값을 가지면 $f$는 $c$에서 극소이다.
2. (극소와 $-1$배) $f$가 $c$에서 극소인 것은 정확히 $(-1)f$가 $c$에서 극대일 때이다.
3. (**극값에서 미분계수는 $0$**) $I$를 구간, $f : I \to \mathbb{R}$를 $I$ 위의 실함수, $c$를 $I$의 원소라 하고, $a < c < b$인 $I$의 원소 $a$, $b$가 있다고 하자. $f$가 $c$에서 미분가능하고 $c$에서 극대이거나 극소이면 $f'(c) = 0$이다.
:::

:::english
Real-valued functions and the scalar multiple $kf$ are those of the entry on real-valued functions, absolute values are those of the entry on absolute value, attaining an absolute maximum or minimum is that of the entry on the extreme value theorem, and intervals, differentiability and derivatives are those of the entry on derivatives.

**Relative maximum and minimum.** Let $S$ be a subset of $\mathbb{R}$, $f : S \to \mathbb{R}$ a real-valued function on $S$, and $c$ an element of $S$. We say $f$ has a **relative maximum** at $c$ exactly when there is a positive real number $\delta$ such that $f(x) \le f(c)$ for all $x \in S$ with $|x - c| < \delta$. We say $f$ has a **relative minimum** at $c$ exactly when there is a positive real number $\delta$ such that $f(c) \le f(x)$ for all $x \in S$ with $|x - c| < \delta$.

The following hold.

1. (Absolute and relative maximum) If $f$ attains an absolute maximum at $c$, then $f$ has a relative maximum at $c$. If $f$ attains an absolute minimum at $c$, then $f$ has a relative minimum at $c$.
2. (Relative minimum and multiplication by $-1$) $f$ has a relative minimum at $c$ exactly when $(-1)f$ has a relative maximum at $c$.
3. (**The derivative vanishes at a relative extremum**) Let $I$ be an interval, $f : I \to \mathbb{R}$ a real-valued function on $I$, and $c$ an element of $I$, and suppose there are elements $a$, $b$ of $I$ with $a < c < b$. If $f$ is differentiable at $c$ and has a relative maximum or a relative minimum at $c$, then $f'(c) = 0$.
:::

## 직관

산꼭대기에 서 있다고 합시다. 오른쪽으로 한 걸음 가면 내려가므로 오른쪽 점과 잇는 직선의 기울기는 $0$ 이하이고, 왼쪽으로 한 걸음 가도 내려가므로 왼쪽 점과 잇는 직선의 기울기는 $0$ 이상입니다. 미분계수는 양쪽의 기울기가 모두 가까워지는 한 수이므로 $0$ 이하이면서 $0$ 이상, 곧 $0$일 수밖에 없습니다. 비유가 맞는 곳은 꼭대기 양쪽의 기울기의 부호이고, 맞지 않는 곳은 극대가 "둘레보다 높다"가 아니라 "둘레보다 낮지 않다"는 뜻이어서 평평한 고원의 모든 점도 극대라는 점입니다.

이 논증은 $c$의 양쪽에 정의역의 점이 있어야 합니다. 그래서 (3)은 $a < c < b$인 $a$, $b$를 $I$에서 잡을 수 있다고 가정합니다. 증명에서 $f'(c) > 0$이면 오른쪽 점 $b$ 쪽에서, $f'(c) < 0$이면 왼쪽 점 $a$ 쪽에서 모순을 얻습니다. 아래 반례처럼 끝점에서는 결론이 성립하지 않을 수 있습니다.

## 증명

:::idea
극대에서 $f'(c) > 0$이라면 $c$ 가까이에서 차분몫이 양수인데, $c$의 바로 오른쪽 점에서는 극대이므로 차분몫이 $0$ 이하이다. $f'(c) < 0$이면 바로 왼쪽 점에서 같은 모순이 생긴다. 극소는 $(-1)f$로 극대에 옮긴다.
:::

:::hint
[[limits-of-functions-and-inequalities|함수의 극한과 부등식]]의 (1)을 차분몫 $q_c$에 쓰면, $0 < f'(c)$일 때 "$0 < q_c(x)$"가 $c$ 가까이에서 성립한다.
:::

:::hint
$c$의 오른쪽에서 $I$에 속하면서 극대의 $\delta$와 위의 $\delta_0$ 안에 드는 점을 식으로 하나 잡는다. 그 점이 $I$에 드는 근거는 [[interval|구간]]의 정의이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "부등식 (1)"은 [[limits-of-functions-and-inequalities]]의 번호이다.

**1의 증명.** $f$가 $c$에서 최댓값을 가지면 [[extreme-value-theorem|최대·최소 정리]]의 정의에 의해 모든 $x \in S$에서 $f(x) \le f(c)$이다. 순서 성질 (5)의 (ii)에 의해 $1$은 양수이므로 $\delta = 1$로 두면 극대의 정의가 성립한다. 최솟값도 같은 $\delta = 1$로, 모든 $x \in S$에서 $f(c) \le f(x)$인 것에서 극소의 정의가 성립한다.

**2의 증명.** [[real-valued-function]]의 (4)와 (K9)에 의해 모든 $x \in S$에서 $((-1)f)(x) = (-1)f(x) = -f(x)$이다. 순서 성질 (3)의 (iii)에 의해 실수 $x \in S$에서 $f(c) \le f(x)$인 것은 정확히 $-f(x) \le -f(c)$일 때이다. 따라서 같은 양수 $\delta$에 대하여 "$|x - c| < \delta$인 모든 $x \in S$에서 $f(c) \le f(x)$"와 "$|x - c| < \delta$인 모든 $x \in S$에서 $((-1)f)(x) \le ((-1)f)(c)$"는 진릿값이 같다. 그러므로 극소의 정의를 만족하는 $\delta$가 있는 것은 정확히 $(-1)f$에 대한 극대의 정의를 만족하는 $\delta$가 있을 때이다.

**3의 증명.** 먼저 $f$가 $c$에서 극대인 경우를 본다. $x \in I$이고 $|x - c| < \delta$인 모든 $x$에서 $f(x) \le f(c)$인 양수 $\delta$가 있다. $L = f'(c)$로 두고, [[derivative]]의 진술에 의해 $c$는 $I - \{c\}$의 집적점이고 $f$의 차분몫 $q_c : I - \{c\} \to \mathbb{R}$는 $c$에서 $L$로 수렴한다.

*$0 < L$이 아니다.* $0 < L$이라 하자. 부등식 (1)을 $q_c$와 실수 $0$에 쓰면 "$0 < q_c(x)$"가 $c$ 가까이에서 성립한다. 곧 $x \in I - \{c\}$이고 $|x - c| < \delta_0$이면 $0 < q_c(x)$인 양수 $\delta_0$이 있다([[limit-of-a-function]]의 용어). $c < b$이므로 순서 성질 (3)의 (i)에 의해 $b - c$는 양수이다. $m = \min\{\min\{\delta, \delta_0\}, b - c\}$로 두면, 절댓값 (10)을 두 번 쓰면 $m$은 $\delta$, $\delta_0$, $b - c$ 가운데 하나이므로 양수이고, 셋 모두의 이하이다(순서 성질 (1)의 (v)). $h = 2^{-1}m$, $x = c + h$로 둔다. 순서 성질 (8)에 의해 $0 < h < m$이다.

- 순서 성질 (2)의 (ii)에 의해 $c < c + h = x$이고, $h < m \le b - c$이므로 $x = c + h < c + (b - c) = b$이다(순서 성질 (1)의 (v), (2)의 (ii)). $c$와 $b$가 $I$의 원소이고 $c < x < b$이므로 [[interval]]의 정의 (ii)에 의해 $x \in I$이고, [[order-properties-of-reals]]의 (1)의 (i)에 의해 $x \ne c$이다.
- $x - c = h$이고 절댓값 (1)에 의해 $|x - c| = h$이며, $h < m \le \delta$, $h < m \le \delta_0$이므로 $|x - c| < \delta$이고 $|x - c| < \delta_0$이다.

따라서 $0 < q_c(x)$이다. 한편 극대에 의해 $f(x) \le f(c)$이므로 순서 성질 (3)의 (i)에 의해 $f(x) - f(c) \le 0$이고, 순서 성질 (6)의 (i)에 의해 $0 < h^{-1} = (x - c)^{-1}$이다. 순서 성질 (4)의 (iii)을 $0 \le (x - c)^{-1}$에 쓰면 $q_c(x) = (f(x) - f(c))(x - c)^{-1} \le 0 \cdot (x - c)^{-1} = 0$이다((K9)). 이것은 $0 < q_c(x)$와 함께 성립하지 않는다(순서 성질 (1)의 (i)). 따라서 $0 < L$이 아니다.

*$L < 0$이 아니다.* $L < 0$이라 하자. 부등식 (1)을 $q_c$와 실수 $0$에 쓰면 "$q_c(x) < 0$"이 $c$ 가까이에서 성립하므로, $x \in I - \{c\}$이고 $|x - c| < \delta_0$이면 $q_c(x) < 0$인 양수 $\delta_0$이 있다. $a < c$이므로 순서 성질 (3)의 (i)에 의해 $c - a$는 양수이다. $m = \min\{\min\{\delta, \delta_0\}, c - a\}$로 두면 앞과 같은 까닭으로 $m$은 양수이고 $\delta$, $\delta_0$, $c - a$ 이하이다. $h = 2^{-1}m$, $x = c - h$로 둔다. 순서 성질 (8)에 의해 $0 < h < m$이다.

- 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $x = c - h < c$이고, $h < m \le c - a$이므로 순서 성질 (3)의 (iii)과 (2)의 (ii)에 의해 $a = c - (c - a) < c - h = x$이다. $a$와 $c$가 $I$의 원소이고 $a < x < c$이므로 [[interval]]의 정의 (ii)에 의해 $x \in I$이고, $x \ne c$이다.
- $x - c = -h$이고 절댓값 (1), (3)에 의해 $|x - c| = h$이므로 앞과 같이 $|x - c| < \delta$이고 $|x - c| < \delta_0$이다.

따라서 $q_c(x) < 0$이다. 한편 극대에 의해 $f(x) - f(c) \le 0$이고, $x - c = -h < 0$이므로 순서 성질 (6)의 (i)에 의해 $(x - c)^{-1} < 0$이다. 순서 성질 (4)의 (iii)의 둘째 문장을 $(x - c)^{-1} \le 0$과 $f(x) - f(c) \le 0$에 쓰면 $0 = 0 \cdot (x - c)^{-1} \le (f(x) - f(c))(x - c)^{-1} = q_c(x)$이다. 이것은 $q_c(x) < 0$과 함께 성립하지 않는다. 따라서 $L < 0$이 아니다.

(W1)에 의해 $L < 0$, $L = 0$, $0 < L$ 가운데 정확히 하나가 성립하고, 두 경우가 아니므로 $f'(c) = L = 0$이다.

다음으로 $f$가 $c$에서 극소인 경우를 본다. 이 항목의 (2)에 의해 $(-1)f$는 $c$에서 극대이고, [[derivative-rules|미분의 연산]]의 (1)에 의해 $(-1)f$는 $c$에서 미분가능하며 $((-1)f)'(c) = (-1)f'(c)$이다. 앞의 경우를 $(-1)f$에 쓰면 $(-1)f'(c) = 0$이고, (K9)에 의해 $-f'(c) = 0$이므로 $f'(c) = -(-f'(c)) = -0 = 0$이다((K9)). $\blacksquare$
:::

## 예시와 반례

:::example[최댓값을 갖는 안쪽 점]
$f(x) = x - x^2$으로 정한 $f : [0, 1] \to \mathbb{R}$를 생각합니다. 모든 $x$에서 $x - x^2 = 4^{-1} - (x - 2^{-1})^2$이고([[power-of-a-real-number]]의 (1)과 [[real-number-arithmetic]]의 계산 법칙) [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le (x - 2^{-1})^2$이므로, $f(x) \le 4^{-1} = f(2^{-1})$입니다. 곧 $f$는 $2^{-1}$에서 최댓값을 갖고, (1)에 의해 $2^{-1}$에서 극대입니다. $0 < 2^{-1} < 1$이고 $0$, $1$은 $[0, 1]$의 원소이므로 (3)을 쓸 수 있고, $f'(2^{-1}) = 0$입니다. 실제로 [[derivative-of-power|거듭제곱 함수의 미분]]과 [[derivative-rules|미분의 연산]]의 (3), [[derivative]]의 (2)에 의해 $f'(c) = 1 - 2c$이고 $c = 2^{-1}$에서 $0$입니다.
:::

:::counterexample[끝점에서는 미분계수가 $0$이 아닐 수 있다]
$[0, 1]$ 위의 항등함수 $i_{[0, 1]}$은 모든 $x \in [0, 1]$에서 $x \le 1$이므로 $1$에서 최댓값을 갖고, (1)에 의해 $1$에서 극대입니다. 그러나 [[derivative]]의 (1)에 의해 $1$에서의 미분계수는 $1$입니다. $[0, 1]$에는 $1 < b$인 원소 $b$가 없으므로 (3)의 가정이 성립하지 않습니다. 증명에서 $f'(c) > 0$일 때 모순을 얻으려면 $c$의 오른쪽에 정의역의 점이 필요했고, 그것이 이 가정입니다.
:::

:::counterexample[미분계수가 $0$이어도 극대나 극소가 아닐 수 있다]
[[derivative-of-power]]의 $p_3$, 곧 $p_3(x) = x^3$으로 정한 $p_3 : \mathbb{R} \to \mathbb{R}$는 같은 항목의 (1)에 의해 $p_3'(0) = 3 \cdot 0^2 = 0$입니다([[power-of-a-real-number]]의 (2)의 (iv)). 그러나 $p_3$은 $0$에서 극대도 극소도 아닙니다. 양의 실수 $\delta$를 아무것이나 잡고 $t = 2^{-1}\delta$로 두면 $0 < t < \delta$이고 $|t - 0| = |-t - 0| = t < \delta$입니다([[order-properties-of-reals]]의 (8), [[absolute-value|절댓값]]의 (1), (3)). [[power-of-a-real-number]]의 (6)의 (i)에 의해 $0 < t^3$이므로 $p_3(t) > 0 = p_3(0)$이고, 같은 항목의 (2)의 (iii)과 (1)에 의해 $(-t)^3 = ((-1)t)^3 = (-1)^3 t^3$이며 $(-1)^3 = (-1)(-1)(-1) = -1$이므로((K12)의 (iii), (K4)) $p_3(-t) = -t^3 < 0 = p_3(0)$입니다([[order-properties-of-reals]]의 (3)의 (ii)와 (K9)). 어떤 $\delta$로도 극대의 조건($t$에서 깨짐)과 극소의 조건($-t$에서 깨짐)이 성립하지 않습니다. (3)의 거꾸로("$f'(c) = 0$이면 극대이거나 극소")는 성립하지 않습니다.
:::

## 확인 질문

:::check[$f : I \to \mathbb{R}$가 상수함수이면 $I$의 모든 점에서 극대이고 극소인가?]
그렇습니다. 모든 $x$에서 $f(x) = f(c)$이므로 $f(x) \le f(c)$이고 $f(c) \le f(x)$이며, 어느 양수 $\delta$로도 두 정의가 성립합니다. 이것은 [[derivative]]의 (1)이 말하는 "상수함수의 미분계수는 $0$"과 (3)이 어긋나지 않는다는 것을 보여 줍니다. 극대인 점이 꼭 "가장 높은 한 점"일 필요는 없습니다.
:::

:::check[$f : [0, 2] \to \mathbb{R}$가 $1$에서 미분가능하고 $f'(1) = 3$이면, $f$는 $1$에서 극대일 수 있는가?]
없습니다. $0 < 1 < 2$이고 $0$, $2$는 $[0, 2]$의 원소이므로, $f$가 $1$에서 극대라면 (3)에 의해 $f'(1) = 0$이어야 하는데 $3 \ne 0$입니다. 같은 까닭으로 극소일 수도 없습니다.
:::
