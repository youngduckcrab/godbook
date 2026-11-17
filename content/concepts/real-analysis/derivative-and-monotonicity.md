---
title: 도함수와 증가·감소
title_en: Derivative and Monotonicity
aliases: [단조증가 함수, 단조감소 함수, 순증가 함수, 순감소 함수, 도함수가 0 인 함수, increasing function, decreasing function, strictly increasing function, strictly decreasing function, monotone function]
kind: proposition
field: real-analysis
msc: ["26A48"]
level: undergrad
summary: "실함수의 단조증가·순증가·단조감소·순감소를 정의한다. 구간 위의 미분가능한 함수는 도함수가 0 이면 상수함수이고, 도함수가 같은 두 함수는 상수만큼 다르며, 단조증가인 것은 정확히 도함수가 0 이상일 때이고, 도함수가 양수이면 순증가이다(감소도 같다)."
requires: [subset, function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, sequence, recursion-theorem, interval, real-valued-function, limits-of-functions-and-inequalities, continuous-function, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, mean-value-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.2.4절 Proposition 4.2.6 과 그 증명, 증가·감소의 정의 (p.165), Proposition 4.2.7, 4.2.8 과 그 뒤 문단 (p.165–166), 연습문제 4.2.1, 4.2.6, 4.2.8, 4.2.12 (p.169–170)
    checked: original
    note: "출처의 Proposition 4.2.6(p.165)은 구간 I 위의 미분가능한 f 가 모든 x 에서 f′(x) = 0 이면 상수라는 것이고, 이 항목의 (1)이다. 출처는 x < y 인 x, y ∈ I 에서 [x, y] ⊂ I 이고 f 를 [x, y] 로 제한한 것이 평균값 정리의 가정을 만족한다고 하며, 이 항목도 같은 경로이고 그 단계를 interval 의 (4), continuous-function 의 (5), derivative 의 (2)로 보인다. 출처는 증가·감소를 번호 없이(p.165) x < y 이면 f(x) ≤ f(y)(strictly 이면 <) 로 정의한다. 이 항목의 정의는 같고 increasing 을 단조증가, strictly increasing 을 순증가로 옮겨 sequence, recursion-theorem 의 용어에 맞추었다. (2)는 출처의 연습문제 4.2.8(p.169; (a, b) 위의 f′ = g′ 이면 f = g + C)을 구간 I 위로 진술한 것이다. (3)은 Proposition 4.2.7(p.165–166)이고, 출처는 (i)을 증명하고 (ii)를 연습문제 4.2.1 로 둔다. 이 항목은 (ii)를 (−1)f 로 (i)에서 얻는다. (3)의 ⇒ 방향에서 출처는 차분몫이 0 이상이므로 극한을 취한다고 적고, 이 항목은 limits-of-functions-and-inequalities 의 (3)을 쓴다. (4)는 Proposition 4.2.8(p.166)이고, 출처는 (i)의 증명을 연습문제 4.2.6 으로 두고 (ii)는 −f 로 얻는다고 한다. 이 항목은 (i), (ii)를 평균값 정리로 직접 증명한다. (5)(수열과 첨자열의 용어와의 일치)는 출처에 없다(검색한 범위). 반례 'x³'은 출처가 Proposition 4.2.8 뒤(p.166)에서 x³ 이 순증가이지만 f′(0) = 0 이라고 적는 예와 같다. 출처는 x³ 이 순증가라는 것을 증명하지 않는다. 이 항목은 거듭제곱의 순서 성질로 경우를 나누어 증명한다. 확인 질문 1 은 출처의 연습문제 4.2.12(p.170; f′(x) = a 이고 f(0) = b 인 f 를 구하라)와 같은 발상이다. 예시와 확인 질문 2 는 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 수열을 따라 극한을 계산하는 길 없이 증명. 절댓값 함수의 미분가능성을 진술로 올림, 반례 제목의 일반화와 출처 메모를 고침"
added: 2026-11-17
---

:::statement
실함수, 상수함수와 그 연산, 제한은 [[real-valued-function]]의 것이고, 구간은 [[interval]]의 것이며, 미분가능, 미분계수, 도함수는 [[derivative]]의 것이다.

**증가와 감소.** $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수라 하자.

- $f$가 **단조증가**(increasing)인 것은 정확히, $x < y$인 모든 $x, y \in S$에서 $f(x) \le f(y)$일 때이다.
- $f$가 **순증가**(strictly increasing)인 것은 정확히, $x < y$인 모든 $x, y \in S$에서 $f(x) < f(y)$일 때이다.
- $f$가 **단조감소**(decreasing)인 것은 정확히, $x < y$인 모든 $x, y \in S$에서 $f(y) \le f(x)$일 때이다.
- $f$가 **순감소**(strictly decreasing)인 것은 정확히, $x < y$인 모든 $x, y \in S$에서 $f(y) < f(x)$일 때이다.

다음이 성립한다. (1)–(4)에서 $I$는 구간이고 $f$, $g$는 $I$ 위의 미분가능한 함수이다.

1. (도함수가 $0$) 모든 $x \in I$에서 $f'(x) = 0$이면 $f$는 상수함수이다.
2. (도함수가 같은 두 함수) 모든 $x \in I$에서 $f'(x) = g'(x)$이면 $f - g$는 상수함수이다. 곧 어떤 실수 $C$가 있어 모든 $x \in I$에서 $f(x) = g(x) + C$이다.
3. (단조와 도함수의 부호) $f$가 단조증가인 것은 정확히 모든 $x \in I$에서 $0 \le f'(x)$일 때이다. $f$가 단조감소인 것은 정확히 모든 $x \in I$에서 $f'(x) \le 0$일 때이다.
4. (순증가·순감소의 충분조건) 모든 $x \in I$에서 $0 < f'(x)$이면 $f$는 순증가이다. 모든 $x \in I$에서 $f'(x) < 0$이면 $f$는 순감소이다.
5. (다른 항목의 용어와의 일치) [[sequence|수열]] $(x_n)$, 곧 함수 $\mathbb{N} \to \mathbb{R}$를 $\mathbb{N}$ 위의 실함수로 보면, 위의 뜻으로 단조증가인 것은 정확히 [[sequence]]의 뜻으로 단조증가(모든 자연수 $n$에서 $x_n \le x_{n+1}$)일 때이고, 단조감소도 같다. 함수 $\mathbb{N} \to \mathbb{N}$이 [[recursion-theorem|재귀 정리]]의 (4)의 뜻으로 순증가인 것은 정확히 그것을 $\mathbb{N}$ 위의 실함수로 볼 때 위의 뜻으로 순증가일 때이다.
:::

:::english
Real-valued functions, constant functions and their operations, and restrictions are those of the entry on real-valued functions; intervals are those of the entry on intervals; differentiability, derivatives at a point and derivative functions are those of the entry on derivatives.

**Increasing and decreasing.** Let $S$ be a subset of $\mathbb{R}$ and $f : S \to \mathbb{R}$ a real-valued function on $S$.

- $f$ is **increasing** exactly when $f(x) \le f(y)$ for all $x, y \in S$ with $x < y$.
- $f$ is **strictly increasing** exactly when $f(x) < f(y)$ for all $x, y \in S$ with $x < y$.
- $f$ is **decreasing** exactly when $f(y) \le f(x)$ for all $x, y \in S$ with $x < y$.
- $f$ is **strictly decreasing** exactly when $f(y) < f(x)$ for all $x, y \in S$ with $x < y$.

The following hold. In (1)–(4), $I$ is an interval and $f$, $g$ are differentiable functions on $I$.

1. (Zero derivative) If $f'(x) = 0$ for all $x \in I$, then $f$ is a constant function.
2. (Two functions with the same derivative) If $f'(x) = g'(x)$ for all $x \in I$, then $f - g$ is a constant function. That is, there is a real number $C$ such that $f(x) = g(x) + C$ for all $x \in I$.
3. (Monotonicity and the sign of the derivative) $f$ is increasing exactly when $0 \le f'(x)$ for all $x \in I$. $f$ is decreasing exactly when $f'(x) \le 0$ for all $x \in I$.
4. (Sufficient conditions for strict monotonicity) If $0 < f'(x)$ for all $x \in I$, then $f$ is strictly increasing. If $f'(x) < 0$ for all $x \in I$, then $f$ is strictly decreasing.
5. (Agreement with the terms of other entries) Regarding a sequence $(x_n)$, that is, a function $\mathbb{N} \to \mathbb{R}$, as a real-valued function on $\mathbb{N}$, it is increasing in the above sense exactly when it is monotone increasing in the sense of the entry on sequences ($x_n \le x_{n+1}$ for every natural number $n$), and likewise for decreasing. A function $\mathbb{N} \to \mathbb{N}$ is strictly increasing in the sense of (4) of the entry on the recursion theorem exactly when, regarded as a real-valued function on $\mathbb{N}$, it is strictly increasing in the above sense.
:::

## 직관

평균값 정리는 "두 점 사이의 평균 기울기는 그 사이 어느 점의 미분계수"라고 말합니다. 그러므로 미분계수에 대해 모든 점에서 아는 것(늘 $0$, 늘 $0$ 이상, 늘 양수)은 곧바로 아무 두 점 사이의 평균 기울기에 대한 것이 되고, 그것이 함숫값의 차 $f(y) - f(x)$의 부호를 정합니다. 자동차의 속도계가 내내 $0$이었다면 차는 움직이지 않았고, 내내 $0$ 이상이었다면 뒤로 간 적이 없습니다. 비유가 맞는 곳은 "모든 순간의 속도가 전체 이동을 정한다"는 점이고, 맞지 않는 곳은 정의역이 구간이어야 한다는 조건입니다. 두 점 사이의 모든 점에서 함수가 정의되어 있어야 평균값 정리를 쓸 수 있습니다.

(4)의 거꾸로는 성립하지 않습니다. 순증가인 함수의 미분계수가 한 점에서 $0$일 수 있습니다(아래 반례 $x^3$). (3)에서는 "$\le$"를 다루므로 두 방향이 다 성립하지만, "$<$"에서는 극한을 취하면 엄격한 부등호가 "$\le$"로 바뀌기 때문입니다.

## 증명

:::idea
$x < y$인 $I$의 두 점에서 $f$를 $[x, y]$로 제한해 평균값 정리를 쓰면 $f(y) - f(x) = f'(t)(y - x)$인 $t$가 $x$와 $y$ 사이에 있다. 미분계수의 부호가 함숫값의 차의 부호를 정한다. (3)의 거꾸로 방향은 차분몫이 $0$ 이상이라는 것과 극한과 부등식이다.
:::

:::hint
$[x, y] \subseteq I$는 [[interval]]의 (4)이다. 제한한 함수가 평균값 정리의 가정을 만족하는지를 연속과 미분가능으로 나누어 확인한다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "실함수 (2)"는 [[real-valued-function]]의 번호이다.

**(ㄱ) 평균값 정리를 쓰는 꼴.** $I$가 구간이고 $f$가 $I$ 위의 미분가능한 함수이며 $x < y$인 $x, y \in I$라 하자. 그러면 $x < t < y$이고 $f(y) - f(x) = f'(t)(y - x)$인 실수 $t$가 있다.

[[interval]]의 (4)에 의해 $[x, y] \subseteq I$이고, 같은 항목의 (1)에 의해 $[x, y]$는 구간이다. $F = f|_{[x, y]}$로 둔다. [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 $f$는 연속함수이고, [[continuous-function]]의 (5)에 의해 $F$는 연속함수이다. [[derivative]]의 (2)에 의해 $F$는 $[x, y]$의 모든 점에서 미분가능하고 $F'(t) = f'(t)$이므로, 특히 열린구간 $(x, y)$에서 미분가능하다. [[mean-value-theorem|평균값 정리]]에 의해 $F(y) - F(x) = F'(t)(y - x)$인 $t \in (x, y)$가 있고, 실함수 (6)에 의해 $F(y) = f(y)$, $F(x) = f(x)$이며 $F'(t) = f'(t)$이다.

**1의 증명.** $I$의 원소 $c_0$을 하나 잡는다([[interval]]의 정의 (i)에 의해 $I$는 공집합이 아니다). $x \in I$라 하자. (W1)에 의해 $x < c_0$, $x = c_0$, $c_0 < x$ 가운데 하나이다. $c_0 < x$이면 (ㄱ)에 의해 $f(x) - f(c_0) = f'(t)(x - c_0) = 0 \cdot (x - c_0) = 0$인 $t$가 있으므로((K9)) (K12)의 (v)에 의해 $f(x) = f(c_0)$이다. $x < c_0$이면 (ㄱ)을 $x$, $c_0$에 쓰면 $f(c_0) - f(x) = f'(t)(c_0 - x) = 0 \cdot (c_0 - x) = 0$인 $t$가 있으므로 $f(c_0) = f(x)$이다. $x = c_0$이면 당연히 $f(x) = f(c_0)$이다. 따라서 모든 $x \in I$에서 $f(x) = f(c_0)$이고, 실함수 (2), (3)에 의해 $f$는 값이 $f(c_0)$인 상수함수이다.

**2의 증명.** [[derivative-rules|미분의 연산]]의 (6)에 의해 $f - g$는 미분가능한 함수이고, 모든 $x \in I$에서 $(f - g)'(x) = f'(x) - g'(x) = 0$이다((K12)의 (v)). (1)에 의해 $f - g$는 상수함수이다. 그 값을 $C$라 하면 모든 $x \in I$에서 $f(x) - g(x) = C$이고, (K1), (K2), (K5), (K4)에 의해 $f(x) = g(x) + C$이다.

**3의 증명.** 먼저 단조증가를 본다.

($\Rightarrow$) $f$가 단조증가라 하고 $c \in I$를 잡는다. $q_c$를 $f$의 $c$에서의 차분몫이라 하자. $x \in I - \{c\}$이면 (W1)에 의해 $c < x$이거나 $x < c$이다. $c < x$이면 $f(c) \le f(x)$이므로 순서 성질 (3)의 (i)에 의해 $0 \le f(x) - f(c)$이고 $0 < x - c$이므로 순서 성질 (6)의 (i)에 의해 $0 < (x - c)^{-1}$이며, 순서 성질 (4)의 (iv)에 의해 $0 \le q_c(x)$이다. $x < c$이면 $f(x) \le f(c)$이므로 $f(x) - f(c) \le 0$이고, $x - c < 0$이므로 $(x - c)^{-1} < 0$이며, 순서 성질 (4)의 (iii)의 둘째 문장을 $(x - c)^{-1} \le 0$과 $f(x) - f(c) \le 0$에 쓰면 $0 = 0 \cdot (x - c)^{-1} \le q_c(x)$이다((K9)). 따라서 $c$와 다른 $I$의 모든 원소 $x$에서 $0 \le q_c(x)$이다. $q_c$는 $c$에서 $f'(c)$로 수렴하므로([[derivative]]의 진술) [[limits-of-functions-and-inequalities|함수의 극한과 부등식]]의 (3)에 의해 $0 \le f'(c)$이다.

($\Leftarrow$) 모든 $x \in I$에서 $0 \le f'(x)$라 하자. $x < y$인 $x, y \in I$에서 (ㄱ)의 $t$를 잡으면 $0 \le f'(t)$이고 순서 성질 (3)의 (i)에 의해 $0 < y - x$이므로, 순서 성질 (4)의 (iv)에 의해 $0 \le f'(t)(y - x) = f(y) - f(x)$이다. 순서 성질 (3)의 (i)에 의해 $f(x) \le f(y)$이다. 따라서 $f$는 단조증가이다.

다음으로 단조감소를 본다. $(-1)f$는 [[derivative-rules|미분의 연산]]의 (6)에 의해 미분가능한 함수이고 모든 $x \in I$에서 $((-1)f)'(x) = (-1)f'(x) = -f'(x)$이다((K9)). 실함수 (4)와 (K9)에 의해 $((-1)f)(x) = -f(x)$이므로, 순서 성질 (3)의 (iii)에 의해 $x < y$인 $x, y \in I$에서 $f(y) \le f(x)$인 것은 정확히 $((-1)f)(x) \le ((-1)f)(y)$일 때이다. 따라서 $f$가 단조감소인 것은 정확히 $(-1)f$가 단조증가일 때이다. 앞에서 보인 것을 $(-1)f$에 쓰면, 이것은 정확히 모든 $x \in I$에서 $0 \le -f'(x)$일 때이다. 순서 성질 (3)의 (iii)에 의해 $0 \le -f'(x)$인 것은 정확히 $-(-f'(x)) \le -0$일 때이고, (K9)에 의해 이것은 $f'(x) \le 0$이다.

**4의 증명.** $x < y$인 $x, y \in I$에서 (ㄱ)의 $t$를 잡는다. 순서 성질 (3)의 (i)에 의해 $0 < y - x$이다. $0 < f'(t)$이면 (W4)에 의해 $0 < f'(t)(y - x) = f(y) - f(x)$이고 순서 성질 (3)의 (i)에 의해 $f(x) < f(y)$이다. $f'(t) < 0$이면 순서 성질 (4)의 (iv)의 둘째 문장과 (K1)에 의해 $f(y) - f(x) = f'(t)(y - x) < 0$이다. 순서 성질 (3)의 (ii)와 (K12)의 (iv), (K9)에 의해 $0 < -(f(y) - f(x)) = f(x) - f(y)$이고, 순서 성질 (3)의 (i)에 의해 $f(y) < f(x)$이다.

**5의 증명.** 수열 $(x_n)$이 위의 뜻으로 단조증가이면 모든 자연수 $n$에서 순서 성질 (5)의 (ii)와 (2)의 (ii)에 의해 $n = n + 0 < n + 1$이므로((K4)) $x_n \le x_{n+1}$이다. 거꾸로 [[sequence]]의 뜻으로 단조증가이면 같은 항목의 (4)에 의해 $n < m$인 자연수 $n$, $m$에서 $n \le m$이므로 $x_n \le x_m$이다. 단조감소도 같은 항목의 (4)의 둘째 문장으로 같은 방식이다. 함수 $\mathbb{N} \to \mathbb{N}$은 [[function]]의 진술(공역은 선언하기 나름이다)에 의해 $\mathbb{N}$ 위의 실함수이기도 하고, [[recursion-theorem|재귀 정리]]의 (4)의 정의와 위의 순증가의 정의는 같은 부등식을 요구한다. 그 부등식은 정수의 순서로 읽으나 실수의 순서로 읽으나 같다([[order-properties-of-reals]]의 (10)). $\blacksquare$
:::

## 예시와 반례

:::example[$0$ 이상인 실수 위의 제곱 함수]
$T = \{x \in \mathbb{R} : 0 \le x\}$는 [[interval]]의 (2)에 의해 구간이고, $f = p_2|_T$, 곧 $f(x) = x^2$으로 정한 $f : T \to \mathbb{R}$는 [[derivative-of-power]]의 (2)에 의해 미분가능한 함수이며 $f'(x) = 2x$입니다. 모든 $x \in T$에서 $0 \le 2x$이므로([[order-properties-of-reals]]의 (4)의 (iv)) (3)에 의해 $f$는 단조증가입니다. $f'(0) = 0$이므로 (4)를 $T$에 바로 쓸 수는 없지만, $\{x \in \mathbb{R} : 0 < x\}$(구간)로 제한하면 [[derivative-of-power]]의 (2)에 의해 그 위에서 미분계수가 $2x$로 양수이므로([[real-order-axioms]]의 (W4)) (4)에 의해 순증가입니다.
:::

:::counterexample[순증가여도 미분계수가 $0$인 점이 있을 수 있다]
[[derivative-of-power]]의 $p_3$, 곧 $p_3(x) = x^3$으로 정한 $p_3 : \mathbb{R} \to \mathbb{R}$는 같은 항목의 (1)에 의해 $p_3'(0) = 3 \cdot 0^2 = 0$입니다([[power-of-a-real-number]]의 (2)의 (iv)). 그런데 $p_3$은 순증가입니다. 아래에서 "거듭제곱 (6)"은 [[power-of-a-real-number]]의 번호, "순서 성질 (3)"은 [[order-properties-of-reals]]의 번호, (K…)는 [[real-number-arithmetic]]의 진술입니다.

먼저 모든 실수 $u$에서 $(-u)^3 = -u^3$입니다. 거듭제곱 (2)의 (iii)과 (K9)에 의해 $(-u)^3 = ((-1)u)^3 = (-1)^3 u^3$이고, 거듭제곱 (1)과 (K12)의 (iii), (K4)에 의해 $(-1)^3 = ((-1)(-1))(-1) = 1 \cdot (-1) = -1$이기 때문입니다.

$x < y$인 실수 $x$, $y$를 잡습니다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $0 \le x$이거나 $x < 0$입니다.

- $0 \le x$이면 $0 \le x < y$이므로 거듭제곱 (6)의 (ii)에 의해 $x^3 < y^3$입니다.
- $x < 0$이고 $y \le 0$이면 순서 성질 (3)의 (iii), (ii)에 의해 $0 \le -y < -x$이므로 거듭제곱 (6)의 (ii)에 의해 $(-y)^3 < (-x)^3$, 곧 $-y^3 < -x^3$이고, 순서 성질 (3)의 (iii)에 의해 $x^3 < y^3$입니다.
- $x < 0 < y$이면 $0 < -x$이므로 거듭제곱 (6)의 (i)에 의해 $0 < (-x)^3 = -x^3$, 곧 $x^3 < 0$이고(순서 성질 (3)의 (ii)), 같은 (6)의 (i)에 의해 $0 < y^3$이므로 $x^3 < y^3$입니다.

$x < 0$이면 순서 성질 (1)의 (iii)에 의해 $y \le 0$이거나 $0 < y$이므로 세 경우가 모든 경우를 덮습니다. 따라서 $p_3$은 순증가이지만 모든 점에서 미분계수가 양수인 것은 아닙니다. (4)의 거꾸로는 성립하지 않습니다.
:::

## 확인 질문

:::check[$f : \mathbb{R} \to \mathbb{R}$가 미분가능한 함수이고 모든 $x$에서 $f'(x) = 3$이며 $f(0) = 1$이면 $f$는 어떤 함수인가?]
$f(x) = 3x + 1$입니다. $g(x) = 3x$로 정한 $g$는 [[derivative]]의 (1)에 의해 모든 점에서 $g'(x) = 3 = f'(x)$이므로 (2)에 의해 모든 $x$에서 $f(x) = 3x + C$인 실수 $C$가 있습니다. $x = 0$을 넣으면 $C = f(0) = 1$입니다.
:::

:::check[$\mathbb{R}$ 위의 $p_2$, 곧 $x^2$은 단조증가인가?]
아닙니다. [[derivative-of-power]]의 (1)에 의해 $p_2'(-1) = 2 \cdot (-1) = -2 < 0$이므로, (3)에 의해 $p_2$는 단조증가가 아닙니다. 직접 보아도 $-1 < 0$이지만 $p_2(-1) = 1 > 0 = p_2(0)$입니다.
:::
