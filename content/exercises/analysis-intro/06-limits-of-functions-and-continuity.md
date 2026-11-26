---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "3.2.4절, Exercise 3.2.11 (p.128)"
  - ref: lebl-basic-analysis
    loc: "3.2.4절, Exercise 3.2.17 (p.128)"
  - ref: lebl-basic-analysis
    loc: "3.2.4절, Exercise 3.2.14 (p.128)"
added: 2026-11-26
---

:::exercise[두 절댓값의 합의 극한]
$f(x) = |x - 1| + |x + 1|$로 정한 $f : \mathbb{R} \to \mathbb{R}$를 생각한다.

1. $-1 < x < 1$이면 $f(x) = 2$이고, $1 < x$이면 $f(x) = 2x$임을 보여라.
2. $\lim_{x \to 0} f(x)$와 $\lim_{x \to 2} f(x)$를 구하라. $f$는 $0$에서 연속인가?
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "절댓값"은 [[absolute-value|절댓값]]의 번호이다.

**(1)** $-1 < x < 1$이라 하자. 순서 성질 (2)의 (ii)로 양변에 $-1$과 $1$을 더하면 $x - 1 < 0$이고 $0 < x + 1$이다. 절댓값 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (iv), (K9)에 의해 $|x - 1| = -(x - 1) = 1 - x$이고 $|x + 1| = x + 1$이다. (K1), (K2), (K8)의 (ii)와 (K7)의 $1 + 1 = 2$에 의해 $f(x) = (1 - x) + (x + 1) = 2$이다.

$1 < x$라 하자. 같은 방법으로 $0 < x - 1$이고, $0 < 1 < x$이므로(순서 성질 (5)의 (ii)와 (1)의 (v)) $0 < x + 1$이다. 절댓값 (1)에 의해 $f(x) = (x - 1) + (x + 1) = 2x$이다((K1), (K2), (K8)의 (ii), (K12)의 (i)).

**(2)** $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이므로 [[cluster-point|집적점]]의 (6)에 의해 $0$과 $2$는 $\mathbb{R}$의 집적점이다.

$0$에서: $x \ne 0$이고 $|x - 0| < 1$이면 절댓값 (7)에 의해 $-1 < x < 1$이므로 (1)에 의해 $f(x) = 2$이다. $u$를 $\mathbb{R}$ 위의 값이 $2$인 상수함수라 하면 "$f(x) = u(x)$"가 $0$ 가까이에서 성립한다([[limit-of-a-function|함수의 극한]]의 정의에서 $\delta_0 = 1$). 함수의 극한의 (4)에 의해 $u$는 $0$에서 $2$로 수렴하므로, (5)에 의해 $\lim_{x \to 0} f(x) = 2$이다.

$2$에서: $|x - 2| < 1$이면 절댓값 (8)에 의해 $1 < x < 3$이므로 (1)에 의해 $f(x) = 2x$이다. $i = i_{\mathbb{R}}$를 항등함수라 하면 함수의 극한의 (4)에 의해 $i$는 $2$에서 $2$로 수렴하고, [[limit-laws-for-functions|함수의 극한의 사칙연산]]의 (6)에 의해 $2i$는 $2$에서 $2 \cdot 2 = 4$로 수렴한다. "$f(x) = (2i)(x)$"가 $2$ 가까이에서 성립하므로 함수의 극한의 (5)에 의해 $\lim_{x \to 2} f(x) = 4$이다.

$f(0) = |-1| + |1| = 1 + 1 = 2$이고(절댓값 (3), (1)) $\lim_{x \to 0} f(x) = 2 = f(0)$이므로, [[continuous-function|연속함수]]의 (3)에 의해 $f$는 $0$에서 연속이다.
:::

:::exercise[연속인 두 함수의 대소가 유지되는 범위]
$S$를 $\mathbb{R}$의 부분집합, $c$를 $S$의 원소, $f$, $g$를 $S$ 위의 실함수라 하자.

1. $f$와 $g$가 $c$에서 연속이고 $f(c) < g(c)$이면, 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $f(x) < g(x)$임을 보여라.
2. 1에서 $f(c) < g(c)$를 $f(c) \le g(c)$로 바꾸면, 결론의 $f(x) < g(x)$를 $f(x) \le g(x)$로 약하게 해도 성립하지 않을 수 있음을 예로 보여라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $h = g - f$로 둔다([[real-valued-function|실함수와 그 연산]]의 (4)). [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (1)에 의해 $h$는 $c$에서 연속이고, 순서 성질 (3)의 (i)에 의해 $0 < g(c) - f(c) = h(c)$이다. [[continuous-function|연속함수]]의 (7)에 의해 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $0 < h(x) = g(x) - f(x)$이고, 순서 성질 (3)의 (i)에 의해 $f(x) < g(x)$이다.

**(2)** $S = \mathbb{R}$, $c = 0$이라 하고, $f$를 값이 $0$인 상수함수, $g = i_{\mathbb{R}}$을 항등함수라 하자. 연속함수의 (4)에 의해 둘 다 $0$에서 연속이고, $f(0) = 0 = g(0)$이므로 $f(0) \le g(0)$이다. 양의 실수 $\delta$를 아무것이나 잡고 $x = -2^{-1}\delta$로 두자. 순서 성질 (8)과 (3)의 (ii)에 의해 $0 < 2^{-1}\delta < \delta$이고 $x < 0$이므로, [[absolute-value|절댓값]]의 (1), (3)에 의해 $|x - 0| = 2^{-1}\delta < \delta$이다. 그런데 $g(x) = x < 0 = f(x)$이므로 $f(x) \le g(x)$가 아니다(순서 성질 (1)의 (iii)). 따라서 "$|x - 0| < \delta$인 모든 $x$에서 $f(x) \le g(x)$"인 양수 $\delta$는 없다.
:::

:::exercise[두 함수의 최대와 최소]
1. 실수 $a$, $b$에 대하여
   $$
   \begin{aligned}
   2\max\{a, b\} &= (a + b) + |a - b| \\
   2\min\{a, b\} &= (a + b) - |a - b|
   \end{aligned}
   $$
   임을 보여라.
2. $S$를 $\mathbb{R}$의 부분집합, $f$, $g$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자. $p(x) = \max\{f(x), g(x)\}$, $q(x) = \min\{f(x), g(x)\}$로 정한 함수 $p, q : S \to \mathbb{R}$에 대하여, $f$와 $g$가 $c$에서 연속이면 $p$와 $q$도 $c$에서 연속임을 보여라.
:::

:::solution
**(1)** 최대와 최소는 [[absolute-value|절댓값]]의 진술에서 정한 것이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)에 의해 $a \le b$와 $b < a$ 가운데 정확히 하나가 성립한다.

- $a \le b$이면 순서 성질 (3)의 (i)에 의해 $a - b \le 0$이고, 절댓값 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (iv), (K9)에 의해 $|a - b| = -(a - b) = b - a$이다. (K1), (K2), (K8)의 (ii), (K12)의 (i)과 (K7)의 $1 + 1 = 2$로 계산하면 $(a + b) + (b - a) = 2b$, $(a + b) - (b - a) = 2a$이다. 정의에 의해 $\max\{a, b\} = b$, $\min\{a, b\} = a$이므로 두 등식이 성립한다.
- $b < a$이면 $0 < a - b$이므로 $|a - b| = a - b$이고, 같은 계산으로 $(a + b) + (a - b) = 2a$, $(a + b) - (a - b) = 2b$이다. 정의에 의해 $\max\{a, b\} = a$, $\min\{a, b\} = b$이므로 두 등식이 성립한다.

**(2)** $k = 2^{-1}$로 두고 [[real-valued-function|실함수와 그 연산]]의 (4)로 $P = k\bigl((f + g) + |f - g|\bigr)$, $Q = k\bigl((f + g) - |f - g|\bigr)$를 만든다. 모든 $x \in S$에서 (1)과 (K8)의 (iii), (K2), (K4)에 의해 $P(x) = 2^{-1}\bigl(2\max\{f(x), g(x)\}\bigr) = p(x)$이고 $Q(x) = q(x)$이므로, 실함수와 그 연산의 (2)에 의해 $p = P$, $q = Q$이다. [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (1)에 의해 $f + g$, $f - g$가 $c$에서 연속이고, 다시 (1)에 의해 $|f - g|$, $(f + g) + |f - g|$, $(f + g) - |f - g|$가 $c$에서 연속이며, 상수배 $P$와 $Q$도 $c$에서 연속이다.
:::

:::exercise[제곱근이 든 몫의 극한]
$T = \{x \in \mathbb{R} : -1 \le x\}$, $S = T - \{0\}$으로 두고
$$
f(x) = \bigl(\sqrt{x + 1} - 1\bigr)\,x^{-1}
$$
로 정한 $f : S \to \mathbb{R}$를 생각한다. $\lim_{x \to 0} f(x) = 2^{-1}$임을 보여라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "제곱근"은 [[square-root-exists|제곱근의 존재]]의 번호이다. $x \in T$이면 순서 성질 (2)의 (ii)에 의해 $0 \le x + 1$이므로 $\sqrt{x + 1}$이 정해지고, 제곱근 (1)에 의해 $0 \le \sqrt{x + 1}$이다. 따라서 $1 \le \sqrt{x + 1} + 1$이고 순서 성질 (5)의 (ii)와 (1)의 (v)에 의해 $0 < \sqrt{x + 1} + 1$이다.

**$f$를 다시 쓰기.** $x \in S$라 하고 $r = \sqrt{x + 1}$로 두자. 제곱근 (1)에 의해 $rr = x + 1$이므로, [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K4), (K12)로 전개하면 $(r - 1)(r + 1) = rr - 1 = x$이다. $x \ne 0$이므로 (K9)에 의해 $r - 1 \ne 0$이고, 위에서 본 대로 $r + 1 \ne 0$이다. (K12)의 (vi)에 의해 $x^{-1} = (r - 1)^{-1}(r + 1)^{-1}$이므로 (K2), (K4)와 역수의 정의에 의해
$$
\begin{aligned}
f(x) &= (r - 1)(r - 1)^{-1}(r + 1)^{-1} \\
&= \bigl(\sqrt{x + 1} + 1\bigr)^{-1}
\end{aligned}
$$
이다.

**연속인 함수 만들기.** $h(x) = \bigl(\sqrt{x + 1} + 1\bigr)^{-1}$로 정한 $h : T \to \mathbb{R}$를 생각한다. $u$를 $T$ 위의 값이 $1$인 상수함수, $i_T$를 항등함수라 하면 $g = i_T + u$는 [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이고, 모든 $x \in T$에서 $g(x) = x + 1$은 $T_0 = \{y \in \mathbb{R} : 0 \le y\}$에 속한다. [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (2)에 의해 $T_0$ 위의 제곱근 함수 $q$는 연속함수이므로, [[composition-of-continuous-functions|연속함수의 합성]]의 (3), (2)에 의해 $q \circ g : T \to \mathbb{R}$는 연속함수이다. $q \circ g + u$도 연속함수이고 그 값 $\sqrt{x + 1} + 1$은 $T$의 모든 점에서 $0$이 아니므로, 연속함수의 합·곱·몫의 (3)에 의해 $1/(q \circ g + u) : T \to \mathbb{R}$는 연속함수이다. 모든 $x \in T$에서 값이 같으므로 [[real-valued-function|실함수와 그 연산]]의 (2)에 의해 이 함수는 $h$이다. 제곱근 (1)의 유일성과 (K4)의 $1 \cdot 1 = 1$에 의해 $\sqrt{1} = 1$이므로 $h(0) = (1 + 1)^{-1} = 2^{-1}$이다.

**극한.** $T$는 [[interval]]의 (2)에 의해 구간이므로 [[cluster-point|집적점]]의 (6)에 의해 $0$은 $T$의 집적점이다. $h$는 $0$에서 연속이므로 연속함수의 (3)에 의해 $h$는 $0$에서 $h(0) = 2^{-1}$로 수렴한다. [[limit-of-a-function|함수의 극한]]의 (6)에 의해 $0$은 $S = T - \{0\}$의 집적점이고 제한 $h|_S$도 $0$에서 $2^{-1}$로 수렴한다. 모든 $x \in S$에서 $h|_S(x) = h(x) = f(x)$이므로(실함수와 그 연산의 (6)과 위의 다시 쓰기) 실함수와 그 연산의 (2)에 의해 $h|_S = f$이다. 따라서 $\lim_{x \to 0} f(x) = 2^{-1}$이다.
:::

:::exercise[두 식을 이어 붙인 함수의 연속]
$x \le 1$이면 $f(x) = x x$, $1 < x$이면 $f(x) = 2x - 1$로 정한 $f : \mathbb{R} \to \mathbb{R}$가 연속함수임을 보여라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "절댓값"은 [[absolute-value|절댓값]]의 번호이다. 순서 성질 (1)의 (iii)에 의해 모든 실수 $x$는 $x \le 1$과 $1 < x$ 가운데 정확히 하나를 만족하므로, [[real-valued-function|실함수와 그 연산]]의 (1)에 의해 $f$는 실함수이다. 실수 $c$를 잡는다. [[real-order-axioms]]의 (W1)에 의해 $c < 1$, $c = 1$, $1 < c$ 가운데 하나가 성립한다.

**$c < 1$인 경우.** $\delta_0 = 1 - c$로 두면 순서 성질 (3)의 (i)에 의해 $0 < \delta_0$이다. $A = \{x \in \mathbb{R} : |x - c| < \delta_0\}$의 원소 $x$는 절댓값 (8)에 의해 $x < c + \delta_0 = 1$이므로 $f(x) = x x$이다. [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (1)의 $p_2$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $p_2(x) = x x$이므로, 실함수와 그 연산의 (2), (6)에 의해 $f|_A = p_2|_A$이다. $p_2$는 연속함수이므로 [[continuous-function|연속함수]]의 (5)에 의해 $p_2|_A$, 곧 $f|_A$는 $c$에서 연속이고, 연속함수의 (6)에 의해 $f$는 $c$에서 연속이다.

**$1 < c$인 경우.** $\delta_0 = c - 1 > 0$으로 두면 $A = \{x \in \mathbb{R} : |x - c| < \delta_0\}$의 원소 $x$는 $1 = c - \delta_0 < x$이므로 $f(x) = 2x - 1$이다. $i = i_{\mathbb{R}}$, $u$를 값이 $1$인 상수함수라 하면 연속함수의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $2i - u$는 연속함수이고 $f|_A = (2i - u)|_A$이다. 앞의 경우와 같이 연속함수의 (5), (6)에 의해 $f$는 $c$에서 연속이다.

**$c = 1$인 경우.** $f(1) = 1 \cdot 1 = 1$이다. 양의 실수 $\varepsilon$에 대하여 $\delta = \min\{1, 2^{-1}\varepsilon\}$으로 두면 절댓값 (10)에 의해 $\delta$는 $1$이거나 $2^{-1}\varepsilon$이어서 양수이고, $\delta \le 1$, $\delta \le 2^{-1}\varepsilon$이다. $|x - 1| < \delta$라 하자. 순서 성질 (1)의 (v)에 의해 $|x - 1| < 1$이고 $|x - 1| < 2^{-1}\varepsilon$이며, 절댓값 (8)에 의해 $0 < x < 2$이다.

- $x \le 1$이면 (K1)–(K3), (K12)로 전개해 $f(x) - f(1) = x x - 1 = (x + 1)(x - 1)$이다. $0 < x \le 1$이므로 $0 < x + 1 \le 2$이고, 절댓값 (1), (4)와 순서 성질 (4)의 (iii), (4)의 (i)에 의해
  $$
  \begin{aligned}
  |f(x) - f(1)| &= (x + 1)\,|x - 1| \\
  &\le 2\,|x - 1| \\
  &< 2 \cdot 2^{-1}\varepsilon = \varepsilon
  \end{aligned}
  $$
  이다.
- $1 < x$이면 $f(x) - f(1) = (2x - 1) - 1 = 2(x - 1)$이므로 절댓값 (4), (1)에 의해 $|f(x) - f(1)| = 2\,|x - 1| < 2 \cdot 2^{-1}\varepsilon = \varepsilon$이다.

어느 경우든 $|f(x) - f(1)| < \varepsilon$이므로 연속의 정의에 의해 $f$는 $1$에서 연속이다. 세 경우를 모으면 $f$는 모든 실수에서 연속이고, 연속함수이다.
:::

:::exercise[절댓값은 연속이지만 자신은 불연속인 함수]
1. $0 \le x$이면 $f(x) = 1$, $x < 0$이면 $f(x) = -1$로 정한 $f : \mathbb{R} \to \mathbb{R}$에 대하여, $|f|$는 연속함수이지만 $f$는 $0$에서 불연속임을 보여라. 곧 "$f$가 $c$에서 연속이면 $|f|$도 $c$에서 연속이다"의 역은 성립하지 않는다.
2. $S$를 $\mathbb{R}$의 부분집합, $f$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자. $|f|$가 $c$에서 연속이고 $f(c) = 0$이면 $f$도 $c$에서 연속임을 보여라.
:::

:::solution
**(1)** [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)에 의해 모든 실수는 $0 \le x$와 $x < 0$ 가운데 정확히 하나를 만족하므로 [[real-valued-function|실함수와 그 연산]]의 (1)에 의해 $f$는 실함수이다. [[absolute-value|절댓값]]의 (1), (3)에 의해 $|1| = |-1| = 1$이므로 모든 $x$에서 $|f|(x) = 1$이고, 실함수와 그 연산의 (2)에 의해 $|f|$는 값이 $1$인 상수함수이다. [[continuous-function|연속함수]]의 (4)에 의해 $|f|$는 연속함수이다.

$f$가 $0$에서 불연속임을 수열로 보인다. $x_n = -n^{-1}$로 두면 [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $(x_n)$은 $(-1) \cdot 0 = 0$으로 수렴한다. 순서 성질 (10)과 (3)의 (ii)에 의해 $x_n < 0$이므로 $f(x_n) = -1$이고, 수열 $(f(x_n))$은 모든 항이 $-1$인 상수 수열이어서 basic-limits 의 (1)에 의해 $-1$로 수렴한다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 $-1 \ne 1 = f(0)$이므로 [[limit-is-unique|극한의 유일성]]에 의해 $(f(x_n))$은 $f(0)$으로 수렴하지 않는다. [[sequences-and-continuity|수열로 본 극한과 연속]]의 (3)의 (i)에 의해 $f$는 $0$에서 불연속이다.

**(2)** 양의 실수 $\varepsilon$을 잡는다. $|f|$가 $c$에서 연속이므로 양의 실수 $\delta$가 있어, $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $\bigl|\,|f(x)| - |f(c)|\,\bigr| < \varepsilon$이다. $f(c) = 0$이므로 절댓값 (2)에 의해 $|f(c)| = 0$이고, 절댓값 (2), (1)에 의해 $\bigl|\,|f(x)| - 0\,\bigr| = |f(x)|$이다. 따라서 그런 $x$에서
$$
\begin{aligned}
|f(x) - f(c)| &= |f(x) - 0| \\
&= |f(x)| < \varepsilon
\end{aligned}
$$
이고, 연속의 정의에 의해 $f$는 $c$에서 연속이다.
:::
