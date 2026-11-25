---
title: 이계도함수 판정법
title_en: Second Derivative Test
aliases: [이계도함수 판정, 2계 도함수 판정법, 엄격한 극소, 엄격한 극대, second derivative test, strict relative minimum, strict relative maximum]
kind: proposition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "함수가 한 점의 둘레에서 그 점의 값보다 늘 큰 값을 가질 때 엄격한 극소, 늘 작은 값을 가질 때 엄격한 극대라 하고, 구간 위의 미분가능한 함수 f 와 f′ 이 미분가능한 점 x₀ 에서 f′(x₀) = 0 이고 f″(x₀) > 0 이면 x₀ 은 엄격한 극소, f″(x₀) < 0 이면 엄격한 극대임을 증명한다."
requires: [real-order-axioms, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, limit-of-a-function, continuous-function, derivative, differentiable-implies-continuous, derivative-rules, interior-extremum, mean-value-theorem, higher-derivative, taylor-polynomial, taylor-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "4.3절 Taylor's theorem 의 4.3.2절 Taylor's theorem: Proposition 4.3.3 (Second derivative test) 앞 문단과 진술, 증명 (p.174); 4.3.3절 Exercises 의 Exercise 4.3.10, Exercise 4.3.11 (p.175); 4.1.3절 Exercises 의 Exercise 4.1.16 (p.161); 4.2.1절 Relative minima and maxima 의 Definition 4.2.1 (p.162)"
    checked: original
    note: "출처는 Proposition 4.3.3 앞 문단(p.174)에서 'strict relative minimum' 을 어떤 δ > 0 이 있어 x ≠ c 인 모든 x ∈ (c − δ, c + δ) 에서 f(x) > f(c) 인 것으로 정하고 엄격한 극대도 마찬가지라고 적는다. 이 항목의 정의는 정의역 S 의 점으로 한정하고 |x − c| < δ 로 적는다(출처의 함수는 열린구간 위에 있다). Proposition 4.3.3 은 f : (a, b) → ℝ 가 두 번 연속미분가능하고 x₀ ∈ (a, b), f′(x₀) = 0, f″(x₀) > 0 이면 x₀ 에서 엄격한 극소라고 진술하고, f″ 의 연속으로 x₀ 둘레에서 f″ > 0 인 δ 를 잡은 뒤(연습문제 3.2.11 을 가리킨다) n = 1 인 테일러 정리로 증명한다. 출처는 같은 문단에서 이계도함수의 연속은 필요 없지만 증명이 더 어려워 연습문제로 둔다고 적고, 그것이 연습문제 4.3.11(p.175, f 가 미분가능하고 f′(x₀) = 0 이며 f″(x₀) 이 있고 양수이면 엄격한 극소. 힌트: f″(x₀) 의 극한으로서의 정의)이다. 이 항목의 (2)는 연습문제 4.3.11 의 진술을 구간 위의 함수로 적은 것이고(x₀ 이 끝점이어도 된다), 증명은 그 힌트대로 f′ 의 차분몫에서 x₀ 양쪽의 f′ 의 부호를 얻고 평균값 정리를 쓴다. f′ 의 부호를 얻는 단계는 출처의 연습문제 4.1.16(p.161, f(c) = 0, f′(c) > 0 이면 c 의 왼쪽에서 f < 0, 오른쪽에서 f > 0)을 f′ 에 쓴 것과 같은 발상이다. 참고 블록 '이계도함수가 연속일 때 테일러 정리로 보기'는 Proposition 4.3.3 의 증명과 같은 길이다. (3)의 엄격한 극대는 출처에 따로 진술되어 있지 않고(출처는 'A strict relative maximum is defined similarly' 라고만 정의를 적는다), 연습문제 4.3.10(p.175)의 (b)가 n 계 도함수 판정법에서 엄격한 극대를 함께 묻는다. (1)은 출처에 명제로 없다(검색어 'strict relative', 'relative minimum', 'relative maximum' 으로 책 전체를 찾았다). 극대·극소의 정의는 출처 Definition 4.2.1(p.162)이고 해석학 입문의 항목이 그것을 따른다. 반례 '이계도함수가 0 인 세 함수'의 x³ 과 x⁴ 은 연습문제 4.3.10 의 (a)(n 이 홀수이면 극값이 아니다)와 (b)(n 이 짝수이면 엄격한 극값)를 n = 3, n = 4 에 쓴 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 정리의 망원 합·롤 정리 경로와 이계도함수 판정의 가정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
실함수와 그 상수배 $(-1)f$는 [[real-valued-function]]의 것이고, 절댓값은 [[absolute-value]]의 것이며, 극대와 극소는 해석학 입문의 [[interior-extremum|극값 항목]]의 것이다. 구간은 [[interval]]의 것이고, 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]]의 것이며, 한 점에서의 이계도함수의 값 $f''(x_0)$은 [[higher-derivative]]의 (3)의 것이다.

**엄격한 극소와 엄격한 극대.** $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자. $f$가 $c$에서 **엄격한 극소**(strict relative minimum)라는 것은 정확히, 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $x \ne c$이며 $|x - c| < \delta$인 모든 $x$에서 $f(c) < f(x)$일 때이다. $f$가 $c$에서 **엄격한 극대**(strict relative maximum)라는 것은 정확히, 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $x \ne c$이며 $|x - c| < \delta$인 모든 $x$에서 $f(x) < f(c)$일 때이다.

다음이 성립한다.

1. (극소와의 관계) $f$가 $c$에서 엄격한 극소이면 $c$에서 극소이고, 엄격한 극대이면 $c$에서 극대이다. $f$가 $c$에서 엄격한 극소인 것은 정확히 $(-1)f$가 $c$에서 엄격한 극대일 때이다.
2. (이계도함수 판정법: 극소) $I$를 구간, $f : I \to \mathbb{R}$를 미분가능한 함수, $x_0$을 $I$의 원소라 하고, $f'$이 $x_0$에서 미분가능하다고 하자. $f'(x_0) = 0$이고 $0 < f''(x_0)$이면 $f$는 $x_0$에서 엄격한 극소이다. $x_0$이 $I$의 끝점이어도 된다. 특히 $f$가 $2$번 미분가능하면 이 가정이 성립한다.
3. (이계도함수 판정법: 극대) (2)와 같은 가정 아래, $f'(x_0) = 0$이고 $f''(x_0) < 0$이면 $f$는 $x_0$에서 엄격한 극대이다.
:::

:::english
Real-valued functions and their multiple $(-1)f$ are those of the entry on real-valued functions; absolute value is that of the entry on absolute value; relative maxima and minima are those of the entry on interior extrema. Intervals are those of the entry on intervals; differentiability, the derivative at a point, differentiable functions and the derivative function are those of the entry on the derivative; the value $f''(x_0)$ of the second derivative at a point is that of item (3) of the entry on higher-order derivatives.

**Strict relative minimum and maximum.** Let $S$ be a subset of $\mathbb{R}$, $f : S \to \mathbb{R}$ a real-valued function on $S$, and $c$ an element of $S$. $f$ has a **strict relative minimum** at $c$ exactly when there is a positive real $\delta$ such that $f(c) < f(x)$ for every $x \in S$ with $x \ne c$ and $|x - c| < \delta$. $f$ has a **strict relative maximum** at $c$ exactly when there is a positive real $\delta$ such that $f(x) < f(c)$ for every $x \in S$ with $x \ne c$ and $|x - c| < \delta$.

The following hold.

1. (Relation to relative minima) If $f$ has a strict relative minimum at $c$, then it has a relative minimum at $c$; if it has a strict relative maximum at $c$, then it has a relative maximum at $c$. $f$ has a strict relative minimum at $c$ exactly when $(-1)f$ has a strict relative maximum at $c$.
2. (Second derivative test: minimum) Let $I$ be an interval, $f : I \to \mathbb{R}$ a differentiable function, $x_0$ an element of $I$, and suppose $f'$ is differentiable at $x_0$. If $f'(x_0) = 0$ and $0 < f''(x_0)$, then $f$ has a strict relative minimum at $x_0$. $x_0$ may be an endpoint of $I$. In particular, the hypothesis holds if $f$ is $2$ times differentiable.
3. (Second derivative test: maximum) Under the same hypotheses as in (2), if $f'(x_0) = 0$ and $f''(x_0) < 0$, then $f$ has a strict relative maximum at $x_0$.
:::

## 직관

$f'(x_0) = 0$이면 $x_0$에서 그래프의 접선이 수평입니다. 그 점이 골짜기의 바닥인지, 봉우리인지, 둘 다 아닌지는 기울기만으로는 알 수 없습니다. $f''(x_0) > 0$은 기울기 $f'$이 $x_0$에서 증가하는 빠르기가 양수라는 뜻이므로, $x_0$ 바로 왼쪽에서는 기울기가 음수이고 바로 오른쪽에서는 양수입니다. 내려가다 올라가니 $x_0$은 바닥입니다. 증명은 이 그림을 [[mean-value-theorem|평균값 정리]]로 옮긴 것입니다.

**엄격한** 극소는 [[interior-extremum|해석학 입문의 극소]]에서 등호를 뺀 것입니다. 극소는 둘레의 값이 $f(c)$ 이상이면 되므로 상수함수는 모든 점에서 극소입니다. 엄격한 극소는 $c$가 아닌 둘레의 점에서 값이 $f(c)$보다 **커야** 합니다. 판정법의 결론이 엄격한 극소인 것은 $f''(x_0) > 0$이 기울기의 부호를 $x_0$ 양쪽에서 엄격하게 정해 주기 때문입니다.

$f''(x_0) = 0$이면 이 판정법은 결론을 내리지 않습니다. 아래 반례처럼 그런 점은 엄격한 극소일 수도, 엄격한 극대일 수도, 극값이 아닐 수도 있습니다. 또 판정법은 $f''$이 연속이라고 가정하지 않습니다. $f$가 미분가능한 함수이고 $f'$이 $x_0$ 한 점에서 미분가능하면 됩니다.

## 증명

:::idea
$f''(x_0) > 0$은 $f'$의 $x_0$에서의 차분몫 $f'(t)(t - x_0)^{-1}$이 $x_0$ 가까이에서 양수라는 것을 준다. 그러면 $f'(t)$는 $x_0$의 오른쪽에서 양수, 왼쪽에서 음수이고, 평균값 정리로 $f(x) - f(x_0)$의 부호를 정한다.
:::

:::hint
$f'(x_0) = 0$이므로 $f'$의 $x_0$에서의 차분몫은 $q(t) = f'(t)\,(t - x_0)^{-1}$이고, 그 극한이 $f''(x_0)$이다. $\varepsilon = f''(x_0)$으로 극한의 정의를 쓴다.
:::

:::hint
$x$와 $x_0$ 사이에 평균값 정리를 쓰면 $f(x) - f(x_0) = f'(c)(x - x_0)$이다. $c - x_0$과 $x - x_0$은 부호가 같다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다.

**1의 증명.** $f$가 $c$에서 엄격한 극소이고 $\delta$가 정의의 양수라 하자. $x \in S$, $|x - c| < \delta$이면 $x = c$인 경우 순서 성질 (1)의 (iv)에 의해 $f(c) \le f(x)$이고, $x \ne c$인 경우 $f(c) < f(x)$이므로 $\le$의 정의([[real-order-axioms]])에 의해 $f(c) \le f(x)$이다. 따라서 [[interior-extremum|극값 항목]]의 극소의 정의에 의해 $f$는 $c$에서 극소이다. 엄격한 극대도 부등호의 방향만 바꾸어 같다. 또 모든 $x \in S$에서 $((-1)f)(x) = -f(x)$이고([[real-valued-function]]의 (4), (K…)), 순서 성질 (3)의 (iii)에 의해 $f(c) < f(x)$인 것은 정확히 $-f(x) < -f(c)$일 때이다. 따라서 같은 $\delta$로 엄격한 극소의 조건과 $(-1)f$의 엄격한 극대의 조건이 서로 바뀐다.

**2의 증명.** $L = f''(x_0)$로 두면 [[higher-derivative]]의 (3)에 의해 $L = (f')'(x_0)$이다. [[derivative]]의 정의에 의해 $f'$의 $x_0$에서의 차분몫 $q : I - \{x_0\} \to \mathbb{R}$, $q(t) = (f'(t) - f'(x_0))(t - x_0)^{-1}$은 $x_0$에서 $L$로 수렴하고, $f'(x_0) = 0$이므로 $q(t) = f'(t)\,(t - x_0)^{-1}$이다. $0 < L$이므로 [[limit-of-a-function]]의 정의를 $\varepsilon = L$에 쓰면, 양의 실수 $\delta$가 있어 $t \in I$, $t \ne x_0$, $|t - x_0| < \delta$인 모든 $t$에서 $|q(t) - L| < L$이고, [[absolute-value]]의 (8)에 의해 $0 = L - L < q(t)$이다. 이 $t$에서 (K…)에 의해 $f'(t) = q(t)\,(t - x_0)$이다. 이것을 (가)라 부른다.

이제 $x \in I$, $x \ne x_0$, $|x - x_0| < \delta$라 하자.

- $x_0 < x$인 경우. [[interval]]의 (4)에 의해 $[x_0, x] \subseteq I$이다. $f$는 미분가능한 함수이므로 [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)와 [[continuous-function]]의 (5)에 의해 제한 $f|_{[x_0, x]}$는 연속함수이고, [[derivative]]의 (2)에 의해 $(x_0, x)$에서 미분가능하며 미분계수는 $f'$의 값과 같다. [[mean-value-theorem|평균값 정리]]에 의해 $x_0 < c < x$이고 $f(x) - f(x_0) = f'(c)(x - x_0)$인 $c$가 있다. $c \in I$, $c \ne x_0$이고 $0 < c - x_0 < x - x_0 = |x - x_0| < \delta$이므로([[absolute-value]]의 (1)) (가)에 의해 $f'(c) = q(c)(c - x_0)$이고, 순서 성질 (4)의 (i)에 의해 $0 < f'(c)$이다. $0 < x - x_0$이므로 같은 성질에 의해 $0 < f'(c)(x - x_0) = f(x) - f(x_0)$, 곧 $f(x_0) < f(x)$이다(순서 성질 (3)의 (i)).
- $x < x_0$인 경우. 같은 이유로 $[x, x_0] \subseteq I$이고 평균값 정리에 의해 $x < c < x_0$이며 $f(x_0) - f(x) = f'(c)(x_0 - x)$인 $c$가 있다. $0 < x_0 - c < x_0 - x = |x - x_0| < \delta$이므로 (가)가 $c$에 쓰이고, $c - x_0 < 0$이므로 순서 성질 (4)의 (iv)에 의해 $f'(c) = q(c)(c - x_0) < 0$이다. $0 < x_0 - x$이므로 같은 성질에 의해 $f(x_0) - f(x) = f'(c)(x_0 - x) < 0$, 곧 $f(x_0) < f(x)$이다.

순서 성질 (1)에 의해 $x \ne x_0$이면 두 경우 가운데 하나이므로, $f$는 $x_0$에서 엄격한 극소이다. $x_0$이 $I$의 끝점이면 한 경우의 $x$가 없을 뿐 논증은 같다. $f$가 $2$번 미분가능하면 [[higher-derivative]]의 (1)에 의해 $f$는 미분가능한 함수이고 $f'$은 미분가능한 함수이므로 가정이 성립한다.

**3의 증명.** [[derivative-rules|미분법]]의 (6)에 의해 $(-1)f$는 미분가능한 함수이고 $((-1)f)' = (-1)f'$이며, 미분법의 (1)에 의해 $(-1)f'$은 $x_0$에서 미분가능하고 미분계수는 $(-1)(f')'(x_0) = -f''(x_0)$이다. 따라서 [[higher-derivative]]의 (3)에 의해 $((-1)f)''(x_0) = -f''(x_0) > 0$이고(순서 성질 (3)의 (ii)), $((-1)f)'(x_0) = -f'(x_0) = 0$이다. (2)에 의해 $(-1)f$는 $x_0$에서 엄격한 극소이다. $f = (-1)\bigl((-1)f\bigr)$이므로((K…)) (1)을 $(-1)f$에 쓰면 $f$는 $x_0$에서 엄격한 극대이다. $\blacksquare$
:::

:::remark[이계도함수가 연속일 때 테일러 정리로 보기]
$f$가 $2$번 미분가능하고 $f''$이 $x_0$에서 연속이면 [[taylor-theorem|테일러 정리]]로도 (2)를 볼 수 있습니다. $0 < f''(x_0)$이므로 [[continuous-function]]의 (7)에 의해 양수 $\delta$가 있어 $t \in I$, $|t - x_0| < \delta$이면 $0 < f''(t)$입니다. $x \in I$, $x \ne x_0$, $|x - x_0| < \delta$이면 테일러 정리의 (3)을 $n = 1$에 쓰고 [[taylor-polynomial|테일러 다항식]]의 (1)과 $f'(x_0) = 0$을 쓰면, $x$와 $x_0$ 사이(끝점 제외)의 $c$가 있어
$$
f(x) = f(x_0) + \frac{f''(c)}{2}\, (x - x_0)^2
$$
입니다. $|c - x_0| < |x - x_0| < \delta$이므로 $0 < f''(c)$이고 $0 < (x - x_0)^2$이어서 $f(x_0) < f(x)$입니다. 이 길은 $f''$의 연속을 쓰고, 위의 증명은 쓰지 않습니다.
:::

## 예시와 반례

:::example[x⁴ − 2x² 의 세 점]
$f(x) = x^4 - 2x^2$으로 정한 $f : \mathbb{R} \to \mathbb{R}$는 [[higher-derivative]]의 (8)에서 $a = 0$, $m = 4$, $c_2 = -2$, $c_4 = 1$, 나머지 계수가 $0$인 함수입니다. 그 (i)에 의해 $f$는 $2$번 미분가능하고
$$
\begin{aligned}
f'(x) &= 4x^3 - 4x \\
&= 4x(x - 1)(x + 1), \\
f''(x) &= 12x^2 - 4
\end{aligned}
$$
입니다. $f'$이 $0$인 점은 $x = 0, 1, -1$입니다. $f''(0) = -4 < 0$이므로 (3)에 의해 $0$은 엄격한 극대이고, $f''(1) = f''(-1) = 8 > 0$이므로 (2)에 의해 $1$과 $-1$은 엄격한 극소입니다. 값은 $f(0) = 0$, $f(\pm 1) = -1$입니다.
:::

:::counterexample[이계도함수가 0 인 세 함수]
$p(x) = x^3$, $r(x) = x^4$, $s(x) = -x^4$으로 정한 세 함수 $\mathbb{R} \to \mathbb{R}$는 [[higher-derivative]]의 (8)의 (iii)에 의해 $0$에서 $1$계와 $2$계 도함수의 값이 모두 $0$입니다(계수 $c_1 = c_2 = 0$). 그래서 (2)도 (3)도 쓸 수 없는데, 세 함수의 $0$에서의 모습은 다 다릅니다.

- $r$: $x \ne 0$이면 순서 성질 (5)의 (i)에 의해 $0 < xx = x^2$이고 같은 이유로 $0 < (x^2)^2 = x^4$이므로([[power-of-a-real-number]]의 (1), (2)의 (ii)), $r$은 $0$에서 엄격한 극소입니다.
- $s$: 같은 이유로 $x \ne 0$이면 $-x^4 < 0$이므로 $s$는 $0$에서 엄격한 극대입니다.
- $p$: $x > 0$이면 $0 < x^3$이고, $x < 0$이면 $x^3 = -(-x)^3 < 0$입니다([[power-of-a-real-number]]의 (2)의 (iii), (5), (6)의 (i)). 어떤 양수 $\delta$를 잡아도 $x = 2^{-1}\delta$에서 $p(0) < p(x)$이고 $x = -2^{-1}\delta$에서 $p(x) < p(0)$이므로, $p$는 $0$에서 극대도 극소도 아닙니다.
:::

:::counterexample[f′(x₀) 가 0 이 아닌 x + x² 의 예]
$f(x) = x + x^2$으로 정한 $f : \mathbb{R} \to \mathbb{R}$는 [[higher-derivative]]의 (8)에 의해 $f'(x) = 1 + 2x$, $f''(x) = 2$이므로 $f''(0) = 2 > 0$이지만 $f'(0) = 1$입니다. 어떤 양수 $\delta$를 잡아도 $x = -\min\{2^{-1}\delta, 2^{-1}\}$이면 $|x| < \delta$이고 $-2^{-1} \le x < 0$이어서 $1 + x > 0$이므로 $f(x) = x(1 + x) < 0 = f(0)$입니다. 따라서 $f$는 $0$에서 극소가 아니고, (2)의 가정 $f'(x_0) = 0$은 뺄 수 없습니다.
:::

## 확인 질문

:::check[$\mathbb{R}$ 위의 상수함수는 $0$에서 극소인가? 엄격한 극소인가?]
극소이지만 엄격한 극소는 아닙니다. 값을 $k$라 하면 모든 $x$에서 $f(0) = k \le k = f(x)$이므로 어떤 양수 $\delta$로도 극소의 조건이 성립합니다. 그러나 어떤 양수 $\delta$를 잡아도 $x = 2^{-1}\delta$는 $x \ne 0$, $|x| < \delta$이고 $f(0) < f(x)$가 아니므로 엄격한 극소가 아닙니다. 이 함수는 $f'(0) = f''(0) = 0$이어서 판정법도 결론을 내리지 않습니다.
:::

:::check[$f(x) = x^3 - 3x$로 정한 $f : \mathbb{R} \to \mathbb{R}$는 $1$에서 엄격한 극소인가? 그렇다면 $f(1)$은 $f$의 최솟값인가?]
엄격한 극소이지만 최솟값은 아닙니다. [[higher-derivative]]의 (8)에 의해 $f'(x) = 3x^2 - 3$, $f''(x) = 6x$이므로 $f'(1) = 0$, $f''(1) = 6 > 0$이고 (2)에 의해 $1$은 엄격한 극소입니다. 그러나 $f(1) = -2$이고 $f(-3) = -27 + 9 = -18 < -2$이므로 $f(1)$은 최솟값이 아닙니다. 판정법은 $x_0$ 둘레만 봅니다.
:::
