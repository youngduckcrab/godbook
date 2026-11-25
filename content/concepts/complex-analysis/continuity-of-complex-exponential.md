---
title: 복소 지수함수의 연속
title_en: Continuity of the Complex Exponential
aliases: [복소 지수함수는 연속이다, continuity of exp, exp is continuous]
kind: proposition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 절댓값이 1/2 이하인 복소수 h 에서 |exp(h) − 1| ≤ 2|h| 이고, 따라서 |z − z₀| ≤ 1/2 이면 |exp(z) − exp(z₀)| ≤ 2|exp(z₀)||z − z₀| 이다. 이 어림으로 복소 지수함수 exp 와 실수 t 를 exp(it) 로 보내는 함수 ℝ → ℂ 가 연속임을 ε–δ 로 보인다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, metric-space-examples, continuity-in-metric-spaces, exponential-function, laws-of-exponential-function, complex-number, complex-field, modulus-of-complex-number, complex-plane-as-metric-space, complex-exponential-function, addition-law-of-complex-exponential]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.3.3절 Properties of analytic functions, Proposition 11.3.4 (p.156); 11.4.1절 The complex exponential (p.163)
    checked: original
    note: "출처는 p.163 에서 E(z) = Σ z^k/k! 가 모든 복소수에서 수렴하므로 'by Corollary 11.3.7, E is analytic on ℂ' 라고 적고, 해석함수가 연속이라는 것은 Proposition 11.3.4(p.156)에 있다. 이 항목은 해석함수를 거치지 않고, 실수 지수함수의 어림 exp(t) ≤ (1 − t)⁻¹ 과 덧셈 법칙으로 ε–δ 를 직접 보인다. 실수 t 를 e^{it} 로 보내는 함수는 출처 Proposition 11.4.2 (xiii)(p.165)에서 [0, 2π) 위의 함수로 나온다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(연속 증명 통독, 예 (2)–(4)에 경계값, 보조정리 n = 0). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 [[complex-exponential-function]], 실수의 지수함수는 [[exponential-function]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]] $d(z, w) = |z - w|$를, $\mathbb{R}$에는 보통 거리([[metric-space-examples|거리공간의 예]])를 주고, 연속은 [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 것이다.

아래에서 $h$, $z$, $z_0$은 복소수이고 $s$, $t$는 실수이다.

1. ($0$ 가까이의 어림) $|h| \le 1/2$이면 $|\exp(h) - 1| \le 2|h|$이다.
2. (두 점의 어림) $|\exp(z) - \exp(z_0)| \le |\exp(z_0)|\,\bigl(\exp(|z - z_0|) - 1\bigr)$이다. 따라서 $|z - z_0| \le 1/2$이면
   $$
   \begin{aligned}
   &|\exp(z) - \exp(z_0)| \\
   &\qquad \le 2\,|\exp(z_0)|\,|z - z_0|
   \end{aligned}
   $$
   이다.
3. (연속) $\exp : \mathbb{C} \to \mathbb{C}$는 연속이다.
4. (순허수 쪽) $|t - s| \le 1/2$이면 $|\exp(it) - \exp(is)| \le 2|t - s|$이다. 실수 $t$에서의 값이 $\exp(it)$, 곧 $\exp(i\,\iota(t))$인 함수 $\mathbb{R} \to \mathbb{C}$는 연속이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; moduli are those of their entry. The complex exponential function $\exp : \mathbb{C} \to \mathbb{C}$ is that of its entry, and the real exponential function is that of its entry. $\mathbb{C}$ carries the metric $d(z, w) = |z - w|$ of the complex plane, $\mathbb{R}$ carries the usual metric, and continuity is that of the entry on continuity in metric spaces.

Below, $h$, $z$, $z_0$ are complex numbers and $s$, $t$ are real numbers.

1. (Estimate near $0$) If $|h| \le 1/2$, then $|\exp(h) - 1| \le 2|h|$.
2. (Estimate at two points) $|\exp(z) - \exp(z_0)| \le |\exp(z_0)|\,\bigl(\exp(|z - z_0|) - 1\bigr)$. Hence, if $|z - z_0| \le 1/2$, then
   $$
   \begin{aligned}
   &|\exp(z) - \exp(z_0)| \\
   &\qquad \le 2\,|\exp(z_0)|\,|z - z_0|.
   \end{aligned}
   $$
3. (Continuity) $\exp : \mathbb{C} \to \mathbb{C}$ is continuous.
4. (Along the imaginary direction) If $|t - s| \le 1/2$, then $|\exp(it) - \exp(is)| \le 2|t - s|$. The function $\mathbb{R} \to \mathbb{C}$ whose value at a real number $t$ is $\exp(it)$, that is, $\exp(i\,\iota(t))$, is continuous.
:::

## 직관

$\exp$의 연속은 $\exp(z)$가 $\exp(z_0)$에 얼마나 가까운지를 $|z - z_0|$로 어림하면 나옵니다. 덧셈 법칙으로 $\exp(z) = \exp(z_0)\exp(z - z_0)$이므로 $\exp(z) - \exp(z_0) = \exp(z_0)\bigl(\exp(z - z_0) - 1\bigr)$이고, 결국 $0$ 가까이의 $h$에서 $\exp(h)$가 $1$에 얼마나 가까운지만 알면 됩니다. 그것이 (1)입니다.

(1)은 급수 $\exp(h) - 1 = \sum_{n \ge 1} h^n / n!$의 각 항을 절댓값으로 바꾼 실수 급수 $\exp(|h|) - 1$로 누르고, 실수의 어림 $\exp(t) \le (1 - t)^{-1}$로 $\exp(t) - 1 \le t(1 - t)^{-1}$을 얻은 것입니다. $t \le 1/2$이면 $(1 - t)^{-1} \le 2$이어서 $2t$로 누를 수 있습니다. 비유하자면 $\exp$는 출발점 $z_0$ 가까이에서 "거리를 $2|\exp(z_0)|$배 넘게 늘리지 않는" 확대기입니다. 비유가 맞는 범위는 $|z - z_0| \le 1/2$이고, 그보다 멀리서는 이 배율이 통하지 않을 수 있습니다(반례).

(4)는 (2)를 $z = it$, $z_0 = is$에 쓴 것인데, $|\exp(is)| = 1$이어서 배율이 $s$에 상관없이 $2$입니다. $t = s$이면 양변이 모두 $0$입니다.

## 증명

:::idea
$\exp(z) - \exp(z_0) = \exp(z_0)(\exp(z - z_0) - 1)$이고, $|\exp(h) - 1| \le \exp(|h|) - 1$을 실수의 어림 $\exp(t) \le (1 - t)^{-1}$로 $2|h|$까지 누른다. 그러면 $\delta$를 $1/2$과 $\varepsilon (2|\exp(z_0)|)^{-1}$ 가운데 작은 것으로 잡으면 된다.
:::

:::hint
[[complex-exponential-function|복소 지수함수]]의 (5)로 $|\exp(h) - 1|$을 실수 $\exp(|h|) - 1$로 누르고, [[laws-of-exponential-function|지수함수의 성질]]의 (4)를 $t = |h|$에 쓰세요.
:::

:::hint
$|\exp(z_0)|$이 $0$이 아니어야 $\varepsilon (2|\exp(z_0)|)^{-1}$을 쓸 수 있습니다. [[addition-law-of-complex-exponential|덧셈 법칙]]의 (2)를 보세요.
:::

:::proof
"정의의 (5)"는 [[complex-exponential-function]], "덧셈 법칙의 (1)"은 [[addition-law-of-complex-exponential]], "절댓값의 (3)"은 [[modulus-of-complex-number]], "복소평면의 (1)"은 [[complex-plane-as-metric-space]], "순서 성질의 (4)"는 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다.

**1의 증명.** $t = |h|$로 두면 절댓값의 (1)에 의해 $0 \le t \le 1/2$이다. 정의의 (5)에 의해 $|\exp(h) - 1| \le \exp(t) - 1$이다. $t \le 1/2 < 1$이므로 [[laws-of-exponential-function|지수함수의 성질]]의 (4)에 의해 $0 < 1 - t$이고 $\exp(t) \le (1 - t)^{-1}$이다. 또 순서 성질의 (2)와 (3)에 의해 $t \le 1/2$에서 $1/2 \le 1 - t$이다. $1/2 = 1 - t$이면 $(1 - t)^{-1} = 2$이고, $1/2 < 1 - t$이면 순서 성질의 (6)의 (ii)에 의해 $(1 - t)^{-1} < (1/2)^{-1} = 2$이다. 어느 경우든 $(1 - t)^{-1} \le 2$이다. (K…)의 계산으로 $(1 - t)^{-1} - 1 = (1 - t)^{-1}\bigl(1 - (1 - t)\bigr) = (1 - t)^{-1} t$이고, $0 \le t$이므로 순서 성질의 (4)의 (iii)에 의해 $(1 - t)^{-1} t \le 2t$이다. 순서 성질의 (2)로 이어 붙이면
$$
\begin{aligned}
|\exp(h) - 1| &\le \exp(t) - 1 \\
&\le (1 - t)^{-1} - 1 \le 2t
\end{aligned}
$$
이다.

**2의 증명.** $z = z_0 + (z - z_0)$이므로 덧셈 법칙의 (1)에 의해 $\exp(z) = \exp(z_0)\exp(z - z_0)$이고, 분배법칙에 의해 $\exp(z) - \exp(z_0) = \exp(z_0)\bigl(\exp(z - z_0) - 1\bigr)$이다. 절댓값의 (3)에 의해 $|\exp(z) - \exp(z_0)| = |\exp(z_0)|\,|\exp(z - z_0) - 1|$이다. 정의의 (5)를 $z - z_0$에 쓰고 $0 \le |\exp(z_0)|$에 순서 성질의 (4)의 (iii)을 쓰면 첫 부등식이 나온다. $|z - z_0| \le 1/2$이면 (1)을 $h = z - z_0$에 쓰고 같은 (4)의 (iii)을 쓰면 둘째 부등식이 나온다.

**3의 증명.** [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (2)에 의해, 모든 $z_0 \in \mathbb{C}$와 모든 실수 $\varepsilon > 0$에 대하여 $|z - z_0| < \delta$인 모든 $z$에서 $|\exp(z) - \exp(z_0)| < \varepsilon$인 실수 $\delta > 0$이 있음을 보이면 된다. 복소평면의 (1)에 의해 $d(z_0, z) = |z - z_0|$이고 $d(\exp(z_0), \exp(z)) = |\exp(z) - \exp(z_0)|$이기 때문이다. $M = |\exp(z_0)|$로 두면 덧셈 법칙의 (2)와 절댓값의 (1)에 의해 $0 < M$이다. $\delta$를 $1/2$과 $\varepsilon (2M)^{-1}$ 가운데 크지 않은 쪽으로 잡으면 순서 성질의 (6)의 (i)과 (4)의 (iv)에 의해 $0 < \delta$이다. $|z - z_0| < \delta$이면 $|z - z_0| \le 1/2$이므로 (2)에 의해, 그리고 $0 < 2M$이므로 순서 성질의 (4)의 (i)과 (iii)에 의해
$$
\begin{aligned}
&|\exp(z) - \exp(z_0)| \\
&\qquad \le 2M\,|z - z_0| < 2M \delta \\
&\qquad \le 2M \cdot \varepsilon (2M)^{-1} = \varepsilon
\end{aligned}
$$
이다.

**4의 증명.** $h = i\,\iota(t - s)$로 두면 복소수체의 (2)와 분배법칙에 의해 $i\,\iota(t) = i\,\iota(s) + h$이므로, 덧셈 법칙의 (1)과 분배법칙에 의해 $\exp(it) - \exp(is) = \exp(is)\bigl(\exp(h) - 1\bigr)$이다. 덧셈 법칙의 (5)에 의해 $|\exp(is)| = 1$이고, 절댓값의 (3)과 (5)에 의해 $|h| = |i|\,|\iota(t - s)| = |t - s|$이다. 따라서 절댓값의 (3)에 의해 $|\exp(it) - \exp(is)| = |\exp(h) - 1|$이고, $|t - s| \le 1/2$이면 (1)에 의해 이것은 $2|h| = 2|t - s|$ 이하이다. 연속은 3의 증명과 같이 하되, $\mathbb{R}$의 보통 거리 $|t - s|$를 쓰고 $\delta$를 $1/2$과 $\varepsilon / 2$ 가운데 크지 않은 쪽으로 잡는다. $|t - s| < \delta$이면 $|\exp(it) - \exp(is)| \le 2|t - s| < 2\delta \le \varepsilon$이다. $\blacksquare$
:::

## 예시와 반례

:::example[z₀ = 0 에서 고른 δ]
$z_0 = 0$이면 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $M = |\exp(0)| = 1$이므로, 3의 증명의 $\delta$는 $1/2$과 $\varepsilon / 2$ 가운데 크지 않은 쪽입니다. 예컨대 $\varepsilon = 1/10$이면 $\delta = 1/20$이고, $|z| < 1/20$인 모든 $z$에서 $|\exp(z) - 1| \le 2|z| < 1/10$입니다.
:::

:::counterexample[h = 3 에서 (1)의 어림이 성립하지 않는 예]
(1)의 가정 $|h| \le 1/2$을 빼면 부등식이 틀릴 수 있습니다. $h = 3$(곧 $\iota(3)$)이면 [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $\exp(h) - 1$은 실수 $\exp(3) - 1$을 옮긴 것입니다. [[laws-of-exponential-function|지수함수의 성질]]의 (4)에 의해 $2 = 1 + 1 < \exp(1)$이고, 같은 항목의 (3)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $\exp(3) = \exp(1)^3 > 2^3 = 8$입니다. 따라서 $|\exp(3) - 1| > 7 > 6 = 2 \cdot 3$입니다.
:::

## 확인 질문

:::check[$z_0 = 2$에서 $|z - 2| \le 1/2$이면 $|\exp(z) - \exp(2)|$를 무엇으로 누를 수 있는가?]
(2)에 의해 $2\,|\exp(2)|\,|z - 2|$로 누를 수 있고, [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $|\exp(2)|$는 실수 $\exp(2)$입니다. 따라서 $2\exp(2)\,|z - 2|$ 이하입니다.
:::

:::check[실수 $t$에서 $|t| \le 1/2$이면 $|\exp(it) - 1| \le 2|t|$인가?]
그렇습니다. (4)를 $s = 0$에 쓰면 $\exp(i\,\iota(0)) = \exp(0) = 1$이므로 $|\exp(it) - 1| \le 2|t - 0| = 2|t|$입니다.
:::
