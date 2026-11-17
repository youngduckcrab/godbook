---
title: 0 으로 가는 수열과의 비교
title_en: Comparison with a Sequence Converging to Zero
aliases: [영으로 수렴하는 수열과의 비교, 거리로 수렴 판정하기, comparison with a null sequence, null sequence]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열이 L 로 수렴하는 것은 정확히 n 번째 항이 |x_n − L| 인 수열이 0 으로 수렴할 때이고, 특히 x_n 이 0 으로 수렴하는 것은 |x_n| 이 0 으로 수렴할 때이다. 0 으로 수렴하는 수열 a_n 이 있어 어떤 번호 이후로 |x_n − L| ≤ a_n 이면 x_n 은 L 로 수렴한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.4절 첫 문단 (p.67), Proposition 2.2.10 과 그 증명 (p.68), 연습문제 2.1.7 (p.59)
    checked: original
    note: "출처는 2.2.4절 첫 문단(p.67)에서 '{x_n} 이 x 로 수렴하는 것은 정확히 {|x_n − x|} 가 0 으로 수렴할 때'라는 것을 이 절의 요지로 말하고 증명하지 않는다. 이 항목의 (1)이 그 진술이다. 출처의 Proposition 2.2.10(p.68)은 lim a_n = 0 이고 모든 n ∈ ℕ 에서 |x_n − x| ≤ a_n 이면 {x_n} 이 수렴하고 lim x_n = x 라는 것이고, 이 항목의 (3)에서 K = 1 인 경우이다. 출처의 증명은 a_n ≥ 0 임을 먼저 적고 a_n = |a_n − 0| < ε 인 M 을 잡는다. 이 항목은 a_n ≤ |a_n − 0| 을 써서 같은 결론을 얻고, 부등식이 K 이상인 n 에서만 성립하는 경우까지 진술한다. 이 꼬리 판은 출처에 없다(검색한 범위). (2)는 출처의 연습문제 2.1.7 a)(p.59, lim x_n = 0 인 것은 정확히 lim |x_n| = 0 일 때임을 보여라)이다. 반례 '번갈아 바뀌는 수열의 절댓값'은 출처의 연습문제 2.1.7 b)(|x_n| 은 수렴하고 x_n 은 발산하는 예를 찾아라)가 찾으라는 예이고, 출처는 p.65(Proposition 2.2.7 바로 앞)에서도 이 연습문제를 들어 Proposition 2.2.7 의 역이 성립하지 않는다고 적는다. 예시 '3 + (−1)ⁿ n⁻¹'은 출처의 연습문제 2.1.3(p.59, (−1)ⁿ/(2n) 이 수렴하는가)과 같은 발상이고, 연습문제 2.3.5 a)(p.81)도 수열 (−1)ⁿ/n 을 쓴다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이다. $(x_n)$을 수열, $L$을 실수라 하자. 아래 (1), (2)의 수열은 [[sequence]]의 (1)로 정한 것이다.

1. $(x_n)$이 $L$로 수렴하는 것은 정확히 $n$번째 항이 $|x_n - L|$인 수열이 $0$으로 수렴할 때이다. 곧 $\lim_{n \to \infty} x_n = L$인 것은 정확히 $\lim_{n \to \infty} |x_n - L| = 0$일 때이다.
2. $(x_n)$이 $0$으로 수렴하는 것은 정확히 $n$번째 항이 $|x_n|$인 수열이 $0$으로 수렴할 때이다. 곧 $\lim_{n \to \infty} x_n = 0$인 것은 정확히 $\lim_{n \to \infty} |x_n| = 0$일 때이다.
3. (0으로 수렴하는 수열과의 비교) $(a_n)$이 $0$으로 수렴하는 수열이고, 어떤 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$에서 $|x_n - L| \le a_n$이면, $(x_n)$은 $L$로 수렴한다. 곧 $\lim_{n \to \infty} x_n = L$이다. 특히 모든 자연수 $n$에서 $|x_n - L| \le a_n$이면 그렇다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and the absolute value is the one in the entry on absolute value. Let $(x_n)$ be a sequence and $L$ a real number. The sequences in (1) and (2) below are defined by item (1) of the entry on sequences.

1. $(x_n)$ converges to $L$ exactly when the sequence whose $n$th term is $|x_n - L|$ converges to $0$. That is, $\lim_{n \to \infty} x_n = L$ exactly when $\lim_{n \to \infty} |x_n - L| = 0$.
2. $(x_n)$ converges to $0$ exactly when the sequence whose $n$th term is $|x_n|$ converges to $0$. That is, $\lim_{n \to \infty} x_n = 0$ exactly when $\lim_{n \to \infty} |x_n| = 0$.
3. (Comparison with a sequence converging to $0$) If $(a_n)$ is a sequence converging to $0$ and there is a natural number $K$ such that $|x_n - L| \le a_n$ for every natural number $n$ with $n \ge K$, then $(x_n)$ converges to $L$; that is, $\lim_{n \to \infty} x_n = L$. In particular, this holds if $|x_n - L| \le a_n$ for every natural number $n$.
:::

## 직관

내비게이션은 목적지까지 남은 거리를 보여 줍니다. 차가 목적지 $L$에 다가가는지 알려면 차의 위치 $x_n$ 자체보다 남은 거리 $|x_n - L|$이 $0$에 다가가는지를 보면 됩니다. (1)은 이것이 정확히 같은 말이라는 것입니다. 수렴의 정의가 처음부터 거리 $|x_n - L|$로 쓰여 있으므로, 증명은 "거리의 수열과 $0$ 사이의 거리"가 그 거리 자신이라는 계산 하나입니다. 비유가 맞지 않는 곳은, 수열은 목적지에 실제로 도착하지 않아도 된다는 점입니다.

(3)은 남은 거리를 직접 계산하기 어려울 때 쓰는 방법입니다. 남은 거리가 어떤 번호 이후로 언제나 $a_n$ 이하이고 $a_n$이 $0$으로 가면, 남은 거리도 $0$으로 갑니다. 가정 $|x_n - L| \le a_n$은 증명의 마지막 줄에서 $|x_n - L| \le a_n < \varepsilon$으로 한 번 쓰입니다.

(2)는 (1)에서 $L = 0$인 경우로, "절댓값을 씌운 수열이 $0$으로 수렴한다"와 "원래 수열이 $0$으로 수렴한다"가 같은 말이라는 것입니다. 절댓값을 씌운 수열이 $0$이 아닌 수로 수렴할 때는 원래 수열이 발산할 수도 있습니다(아래 반례).

## 증명

:::idea
$|x_n - L|$은 $0$ 이상이므로 $\bigl|\,|x_n - L| - 0\,\bigr| = |x_n - L|$이다. 그래서 두 수렴의 정의가 글자 그대로 같은 명제가 된다. (3)은 $a_n < \varepsilon$이 되는 번호와 $K$ 가운데 큰 것을 잡는다.
:::

:::hint
$-0 = 0$과 [[absolute-value|절댓값]]의 (1), (2)로 $\bigl|\,|x_n - L| - 0\,\bigr|$를 계산한다.
:::

:::hint
(3)에서 $a_n$이 $0$ 이상이라는 가정은 없다. $a_n = a_n - 0 \le |a_n - 0|$을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (6)"은 [[absolute-value]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호이다. [[limit-is-unique]]의 기호의 약속에 의해 "$\lim_{n \to \infty} x_n = L$"은 정확히 $(x_n)$이 $L$로 수렴한다는 뜻이다. (K4)에 의해 $0 + 0 = 0$이므로 (K8)의 (ii)에 의해 $-0 = 0$이고, 따라서 모든 실수 $t$에서 (K4)에 의해 $t - 0 = t + 0 = t$이다.

**1의 증명.** $n$번째 항이 $|x_n - L|$인 수열을 $(d_n)$이라 하자. 자연수 $n$마다 절댓값 (2)에 의해 $0 \le d_n$이므로 절댓값 (1)에 의해 $|d_n| = d_n$이고, 따라서
$$
|d_n - 0| = |d_n| = d_n = |x_n - L|
$$
이다. [[limit-of-sequence]]의 정의에 의해 $(x_n)$이 $L$로 수렴하는 것은 정확히 "모든 양의 실수 $\varepsilon$에 대하여 $M$ 이상인 모든 자연수 $n$에서 $|x_n - L| < \varepsilon$인 자연수 $M$이 있다"가 참일 때이고, $(d_n)$이 $0$으로 수렴하는 것은 정확히 "모든 양의 실수 $\varepsilon$에 대하여 $M$ 이상인 모든 자연수 $n$에서 $|d_n - 0| < \varepsilon$인 자연수 $M$이 있다"가 참일 때이다. 모든 $n$에서 $|d_n - 0| = |x_n - L|$이므로 두 명제는 같은 명제이다. 따라서 $(x_n)$이 $L$로 수렴하는 것은 정확히 $(d_n)$이 $0$으로 수렴할 때이고, 기호의 약속에 의해 둘째 문장도 성립한다.

**2의 증명.** 모든 $n$에서 $x_n - 0 = x_n$이므로 $|x_n - 0| = |x_n|$이다. 따라서 $n$번째 항이 $|x_n - 0|$인 수열과 $n$번째 항이 $|x_n|$인 수열은 모든 항이 같고, [[sequence]]의 진술(함수의 같음)에 의해 같은 수열이다. (1)을 $L = 0$에 쓰면 (2)를 얻는다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. $(a_n)$이 $0$으로 수렴하므로 $M_1$ 이상인 모든 자연수 $n$에서 $|a_n - 0| < \varepsilon$인 자연수 $M_1$이 있다. 그런 $n$에서 절댓값 (6)에 의해 $a_n = a_n - 0 \le |a_n - 0|$이므로 순서 성질 (1)의 (v)에 의해 $a_n < \varepsilon$이다. $M = \max\{M_1, K\}$로 두면 절댓값 (10)에 의해 $M$은 $M_1$이거나 $K$이므로 자연수이고, $M_1 \le M$, $K \le M$이다.

$M$ 이상인 자연수 $n$을 잡으면 순서 성질 (1)의 (v)에 의해 $M_1 \le n$이고 $K \le n$이다. 가정에 의해 $|x_n - L| \le a_n$이고 위에서 본 대로 $a_n < \varepsilon$이므로, 순서 성질 (1)의 (v)에 의해 $|x_n - L| < \varepsilon$이다. 따라서 $(x_n)$은 $L$로 수렴한다.

마지막 문장은 $K = 1$인 경우이다. 자연수 $n$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수이므로 [[prime-number]]의 (Z1)과 순서 성질 (10)에 의해 $1 \le n$이기 때문이다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $3 + (-1)^n n^{-1}$인 수열]
[[power-of-a-real-number|실수의 거듭제곱]]으로 $x_n = 3 + (-1)^n n^{-1}$인 수열을 정합니다. 처음 세 항은 $x_1 = 3 - 1 = 2$, $x_2 = 3 + 2^{-1}$, $x_3 = 3 - 3^{-1}$입니다.

$t_n = (-1)^n n^{-1}$로 두면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $x_n - 3 = (t_n + 3) + (-3) = t_n$입니다. [[absolute-value|절댓값]]의 (4)와 [[power-of-a-real-number|거듭제곱]]의 (4)에 의해 $|t_n| = |(-1)^n|\,|n^{-1}| = |-1|^n\,|n^{-1}|$입니다. $-1 < 0$이므로 절댓값의 정의와 (K9)에 의해 $|-1| = 1$이고, 거듭제곱의 (2)의 (iv)에 의해 $|-1|^n = 1^n = 1$입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로 $|n^{-1}| = n^{-1}$입니다. 따라서 모든 $n$에서 $|x_n - 3| = n^{-1}$입니다.

$a_n = n^{-1}$로 두면 [[basic-limits]]의 (2)에 의해 $(a_n)$은 $0$으로 수렴하고 모든 $n$에서 $|x_n - 3| \le a_n$이므로, 이 항목의 (3)에 의해 $\lim_{n \to \infty} x_n = 3$입니다.
:::

:::counterexample[절댓값의 수열이 $0$이 아닌 수로 수렴하는 경우]
[[basic-limits]]의 (3)의 수열 $(s_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)을 생각합니다. [[absolute-value|절댓값]]의 (1)에 의해 $|1| = 1$이고, 위의 예시에서처럼 $|-1| = 1$이므로 모든 $n$에서 $|s_n| = 1$입니다. 따라서 $n$번째 항이 $|s_n|$인 수열은 모든 항이 $1$인 상수 수열이고 [[basic-limits]]의 (1)에 의해 $1$로 수렴합니다. 그러나 $(s_n)$은 발산합니다([[basic-limits]]의 (3)).

곧 (2)에서 $0$을 $1$로 바꾼 문장의 한 방향 "$\lim_{n \to \infty} |x_n| = 1$이면 $\lim_{n \to \infty} x_n = 1$이다"는 거짓이고, $(x_n)$이 수렴한다는 것조차 나오지 않습니다. (2)가 성립하는 것은 $0$까지의 거리 $|x_n - 0|$이 $|x_n|$ 자신이기 때문입니다. $1$까지의 거리 $|x_n - 1|$은 $|x_n|$만으로 정해지지 않습니다. 예컨대 $s_1 = -1$이면 $|s_1| = 1$이지만 $|s_1 - 1| = |-2| = 2$입니다.
:::

## 확인 질문

:::check[수열 $(x_n)$이 모든 $n$에서 $|x_n - 2| \le (n + 1)^{-1}$을 만족하면 $(x_n)$은 수렴하는가?]
수렴하고 극한은 $2$입니다. 자연수 $n$에 대하여 [[well-ordering-principle]]의 (L3)과 [[order-properties-of-reals]]의 (10)에 의해 $0 < n < n + 1$이므로, 그 항목의 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$입니다. 그 항목의 (1)의 (v)에 의해 모든 $n$에서 $|x_n - 2| \le n^{-1}$이고, [[basic-limits]]의 (2)에 의해 $n$번째 항이 $n^{-1}$인 수열은 $0$으로 수렴하므로 이 항목의 (3)에 의해 $\lim_{n \to \infty} x_n = 2$입니다.
:::

:::check[$\lim_{n \to \infty} x_n = 0$이면 $n$번째 항이 $-x_n$인 수열은 어떻게 되는가?]
$0$으로 수렴합니다. 이 항목의 (2)에 의해 $\lim_{n \to \infty} |x_n| = 0$입니다. [[absolute-value|절댓값]]의 (3)에 의해 모든 $n$에서 $|-x_n| = |x_n|$이므로, $n$번째 항이 $|-x_n|$인 수열은 $n$번째 항이 $|x_n|$인 수열과 같고 $0$으로 수렴합니다. (2)를 수열 $(-x_n)$에 다시 쓰면 $\lim_{n \to \infty} (-x_n) = 0$입니다.
:::
