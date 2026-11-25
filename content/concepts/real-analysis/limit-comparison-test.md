---
title: 극한 비교 판정법
title_en: Limit Comparison Test
aliases: [극한비교판정법, 극한 비교, limit comparison test]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 항이 양수인 두 수열에서 항의 비 x_n/y_n 이 양수로 수렴하면 두 급수는 함께 수렴하거나 함께 발산한다. 비가 0 으로 수렴하거나 한없이 커지는 경우의 한 방향 판정도 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, series-and-partial-sums, linearity-of-series, harmonic-series-diverges, comparison-test]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.7절 Exercises, Exercise 2.5.11 (p.98)
    checked: original
    note: "출처 연습문제 2.5.11(p.98)은 모든 n 에서 a_n > 0, b_n > 0 이고 0 < lim a_n/b_n < ∞ 이면 두 급수가 함께 수렴하거나 함께 발산한다는 것을 증명하라고 한다. 이 항목의 (1)이 그것이고, 출처의 '< ∞'는 비의 수열이 실수로 수렴한다는 것으로 읽었다. 출처는 증명을 연습문제로 둔다. 증명은 비교 판정법의 꼬리 판(comparison-test (4))으로 이 항목이 썼다. 연습문제 2.5.11 은 비의 극한이 양수인 경우만 진술한다. (2)의 비가 0 으로 가는 경우와 (3)의 비가 한없이 커지는 경우는 이 항목이 (1)과 같은 방법으로 덧붙였다. 예시 '(2n − 1)⁻¹ 의 급수'의 수열은 출처 연습문제 2.5.3 b)(p.97)와 같은 수열이고, 연습문제 2.5.3 a)(p.97, 3/(9n+1))도 조화급수와의 극한 비교로 풀리는 같은 발상이다. 예시 'n(n³ + 1)⁻¹ 의 급수'는 Example 2.5.18(p.95)이 1/(n² + 1) 을 1/n² 과 비교 판정법으로 비교하는 것과 같은 발상이다. 확인 질문 '(n² + n)⁻¹ 의 급수를 (n²)⁻¹ 의 급수와 극한으로 비교하라.'의 수열은 연습문제 2.5.3 d)(p.97)의 1/(n(n+1)) 과 같다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(적분 판정 예의 적분과 번호 옮김 대조, 출처의 극한 비교 진술 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 급수의 수렴과 발산은 [[series-and-partial-sums]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다. $(x_n)$, $(y_n)$을 모든 자연수 $n$에서 $0 < x_n$이고 $0 < y_n$인 수열이라 하고, $n$번째 항이 $q_n = x_n y_n^{-1}$인 수열을 $(q_n)$이라 하자.

1. (**극한 비교 판정법**, limit comparison test) $(q_n)$이 양의 실수 $L$로 수렴한다고 하자. 그러면 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서
   $$
   \frac{L}{2}\, y_n < x_n < \frac{3L}{2}\, y_n
   $$
   이다. 또 $(x_n)$의 급수가 수렴하는 것은 정확히 $(y_n)$의 급수가 수렴할 때이다. 따라서 $(x_n)$의 급수가 발산하는 것은 정확히 $(y_n)$의 급수가 발산할 때이다.
2. (비가 $0$으로 수렴하는 경우) $(q_n)$이 $0$으로 수렴하고 $(y_n)$의 급수가 수렴하면 $(x_n)$의 급수도 수렴한다. 곧 $(q_n)$이 $0$으로 수렴하고 $(x_n)$의 급수가 발산하면 $(y_n)$의 급수도 발산한다.
3. (비가 한없이 커지는 경우) 모든 실수 $B$에 대하여 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$에서 $B \le q_n$이라 하자. 그러면 $(x_n)$의 급수가 수렴할 때 $(y_n)$의 급수도 수렴하고, $(y_n)$의 급수가 발산할 때 $(x_n)$의 급수도 발산한다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence and on uniqueness of limits, and convergence and divergence of a series are those of the entry on series and partial sums. Below, a sequence written by a formula is the one given by item (1) of the entry on sequences. Let $(x_n)$, $(y_n)$ be sequences with $0 < x_n$ and $0 < y_n$ for every natural number $n$, and let $(q_n)$ be the sequence whose $n$th term is $q_n = x_n y_n^{-1}$.

1. (**Limit comparison test**) Suppose $(q_n)$ converges to a positive real number $L$. Then there is a natural number $M$ such that for every natural number $n \ge M$,
   $$
   \frac{L}{2}\, y_n < x_n < \frac{3L}{2}\, y_n .
   $$
   Moreover, the series of $(x_n)$ converges exactly when the series of $(y_n)$ converges. Hence the series of $(x_n)$ diverges exactly when the series of $(y_n)$ diverges.
2. (Ratio converging to $0$) If $(q_n)$ converges to $0$ and the series of $(y_n)$ converges, then the series of $(x_n)$ converges. That is, if $(q_n)$ converges to $0$ and the series of $(x_n)$ diverges, then the series of $(y_n)$ diverges.
3. (Ratio growing without bound) Suppose that for every real number $B$ there is a natural number $K$ such that $B \le q_n$ for every natural number $n \ge K$. Then if the series of $(x_n)$ converges, so does the series of $(y_n)$, and if the series of $(y_n)$ diverges, so does the series of $(x_n)$.
:::

## 직관

[[comparison-test|비교 판정법]]을 쓰려면 $x_n \le c\,y_n$ 같은 부등식을 항마다 찾아야 합니다. 그런데 $x_n = n(n^3 + 1)^{-1}$과 $y_n = (n^2)^{-1}$처럼 두 수열이 "거의 비례"할 때는 그런 부등식을 직접 찾기보다 비 $x_n y_n^{-1}$의 극한을 구하는 편이 쉽습니다. 비가 양수 $L$로 수렴하면 어느 번호부터는 비가 $L/2$와 $3L/2$ 사이에 있으므로, 두 수열은 그 번호부터 서로의 상수배로 위아래가 눌립니다. 급수의 수렴은 처음 몇 항과 $0$이 아닌 상수배에 상관없으므로 두 급수는 함께 수렴하거나 함께 발산합니다.

비유하자면 두 사람의 지출을 견주는 것과 같습니다. 어느 달부터 한 사람의 지출이 늘 다른 사람의 지출의 절반과 한 배 반 사이에 있다면, 한 사람의 누적 지출이 어떤 금액 아래에 머무는 것은 정확히 다른 사람의 것도 그럴 때입니다. "어느 달부터"가 (1)의 번호 $M$에, "절반과 한 배 반"이 $L/2$와 $3L/2$에 해당합니다. 비유가 맞지 않는 곳은, 이 판정은 누적액이 얼마인지는 알려 주지 않는다는 점입니다.

비가 $0$으로 가면 어느 번호부터 $x_n < y_n$이므로 한쪽 방향만 남고((2)), 비가 한없이 커지면 어느 번호부터 $y_n \le x_n$이므로 반대쪽 방향만 남습니다((3)). (3)의 증명에는 $B = 1$인 경우만 쓰입니다.

## 증명

:::idea
비의 극한으로 어느 번호부터 $x_n$과 $y_n$을 서로의 상수배로 누르고, 꼬리에서만 성립하는 비교 판정법을 쓴다.
:::

:::hint
극한의 정의에서 $\varepsilon = L/2$로 두면 어느 번호부터 $L/2 < q_n < 3L/2$이다. 양수 $y_n$을 곱해 보라.
:::

:::hint
[[comparison-test|비교 판정법]]의 (4)는 어떤 번호 이후에만 $0 \le x_n \le y_n$이어도 된다. 상수배는 [[linearity-of-series|급수의 선형성]]으로 다룬다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 모든 자연수 $n$에서 $0 < y_n$이므로 순서 성질 (1)의 (i)에 의해 $y_n \ne 0$이고 $y_n^{-1}$이 정해진다. 또 (K2), (K8)의 (iii), (K1), (K4)에 의해 $q_n y_n = x_n (y_n^{-1} y_n) = x_n$이다. 이것을 (가)라 부른다.

**1의 증명.** $0 < L$이므로 순서 성질 (8)에 의해 $0 < L/2$이다. [[limit-of-sequence|수열의 극한]]의 정의를 $\varepsilon = L/2$에 쓰면 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|q_n - L| < L/2$이고, [[absolute-value|절댓값]]의 (8)에 의해 $L - L/2 < q_n < L + L/2$이다. (K…)로 계산하면 $L - L/2 = L/2$이고 $L + L/2 = 3L/2$이다. $0 < y_n$이므로 순서 성질 (4)의 (i)에 의해 $(L/2) y_n < q_n y_n < (3L/2) y_n$이고, (가)에 의해 진술의 부등식이 성립한다.

$(y_n)$의 급수가 수렴한다고 하자. [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $n$번째 항이 $(3L/2) y_n$인 수열의 급수도 수렴한다. $M$ 이상인 모든 $n$에서 $0 < x_n < (3L/2) y_n$이므로 [[comparison-test|비교 판정법]]의 (4)에 의해 $(x_n)$의 급수는 수렴한다.

거꾸로 $(x_n)$의 급수가 수렴한다고 하자. $0 < L$이므로 순서 성질 (6)의 (i)에 의해 $0 < 2L^{-1}$이고, $M$ 이상인 $n$에서 $(L/2) y_n < x_n$의 양변에 $2L^{-1}$을 곱하면 순서 성질 (4)의 (i)과 (K…)에 의해 $y_n < 2L^{-1} x_n$이다. 급수의 선형성의 (2)에 의해 $n$번째 항이 $2L^{-1} x_n$인 수열의 급수는 수렴하고, $M$ 이상인 $n$에서 $0 < y_n < 2L^{-1} x_n$이므로 비교 판정법의 (4)에 의해 $(y_n)$의 급수는 수렴한다.

두 급수 가운데 하나가 수렴하는 것은 정확히 다른 하나가 수렴할 때이므로, 하나가 발산하는 것(수렴하지 않는 것)도 정확히 다른 하나가 발산할 때이다.

**2의 증명.** 수열의 극한의 정의를 $\varepsilon = 1$에 쓰면($0 < 1$은 순서 성질 (5)의 (ii)) 자연수 $M$이 있어 $M$ 이상인 모든 $n$에서 $|q_n - 0| < 1$이고, 절댓값의 (8)에 의해 $q_n < 1$이다. 순서 성질 (4)의 (i)과 (가), (K4)에 의해 $x_n = q_n y_n < 1 \cdot y_n = y_n$이다. 따라서 $M$ 이상인 $n$에서 $0 < x_n < y_n$이고, $(y_n)$의 급수가 수렴하면 비교 판정법의 (4)에 의해 $(x_n)$의 급수가 수렴한다. 둘째 문장은 첫째 문장의 대우이다.

**3의 증명.** 가정을 $B = 1$에 쓰면 자연수 $K$가 있어 $K$ 이상인 모든 $n$에서 $1 \le q_n$이다. 순서 성질 (4)의 (iii)과 (가), (K4)에 의해 $y_n = 1 \cdot y_n \le q_n y_n = x_n$이다. 따라서 $K$ 이상인 $n$에서 $0 < y_n \le x_n$이고, 비교 판정법의 (4)를 $(y_n)$과 $(x_n)$에 쓰면 $(x_n)$의 급수가 수렴할 때 $(y_n)$의 급수가 수렴하고, $(y_n)$의 급수가 발산할 때 $(x_n)$의 급수가 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[n(n³ + 1)⁻¹ 의 급수]
$x_n = n(n^3 + 1)^{-1}$, $y_n = (n^2)^{-1}$로 두면 둘 다 양수이고, (K…)로 정리하면
$$
q_n = \frac{n \cdot n^2}{n^3 + 1} = \frac{n^3}{n^3 + 1} = \frac{1}{1 + (n^3)^{-1}}
$$
입니다. [[basic-limits]]의 (2)에 의해 $n^{-1}$은 $0$으로 수렴하고, [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(n^3)^{-1} = (n^{-1})^3$이므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (6)에 의해 $(n^3)^{-1}$은 $0^3 = 0$으로 수렴합니다. 같은 항목의 (5)와 (4)에 의해 $q_n$은 $(1 + 0)^{-1} = 1$로 수렴합니다. [[comparison-test|비교 판정법]]의 (6)에 의해 $(y_n)$의 급수는 수렴하므로, (1)에 의해 $(x_n)$의 급수도 수렴합니다.
:::

:::example[(2n − 1)⁻¹ 의 급수]
$x_n = (2n - 1)^{-1}$, $y_n = n^{-1}$로 두면 $2n - 1 \ge 1$이므로 둘 다 양수이고
$$
q_n = \frac{n}{2n - 1} = \frac{1}{2 - n^{-1}}
$$
입니다. [[basic-limits]]의 (1), (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (2), (4)에 의해 $q_n$은 $(2 - 0)^{-1} = 1/2$로 수렴합니다($2 - n^{-1} \ge 1 > 0$이므로 $0$이 아닙니다). [[harmonic-series-diverges|조화급수]]는 발산하므로 (1)에 의해 $(x_n)$의 급수도 발산합니다.
:::

:::counterexample[비가 0 으로 수렴하고 큰 쪽의 급수가 발산하는 예]
$x_n = (n^2)^{-1}$, $y_n = n^{-1}$이면 $q_n = n^{-1}$이고 [[basic-limits]]의 (2)에 의해 $0$으로 수렴합니다. $(y_n)$의 급수는 조화급수라서 발산하지만, $(x_n)$의 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴합니다. 그래서 (2)는 "$(y_n)$의 급수가 발산하면 $(x_n)$의 급수도 발산한다"로 바꿀 수 없고, (1)의 "$0 < L$"을 "$0 \le L$"로 넓힐 수 없습니다.
:::

## 확인 질문

:::check[$(n^2 + n)^{-1}$의 급수를 $(n^2)^{-1}$의 급수와 극한으로 비교하라.]
수렴합니다. $x_n = (n^2 + n)^{-1}$, $y_n = (n^2)^{-1}$이면 $q_n = n^2 (n^2 + n)^{-1} = (1 + n^{-1})^{-1}$이고, [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5), (4)에 의해 $1$로 수렴합니다. $(y_n)$의 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴하므로 (1)에 의해 $(x_n)$의 급수도 수렴합니다. $n^2 + n = n(n + 1)$이므로 같은 항목의 (5)로 합이 $1$이라는 것까지 알 수 있습니다.
:::

:::check[$x_n = n^{-1}$, $y_n = (n^2)^{-1}$이면 $q_n = n$이다. $(y_n)$의 급수가 수렴한다는 것에서 (3)으로 $(x_n)$의 급수에 대해 무엇을 말할 수 있는가?]
아무것도 말할 수 없습니다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 모든 실수 $B$에 $B < K$인 자연수 $K$가 있고, $K$ 이상인 $n$에서 $B < K \le n = q_n$이므로 (3)의 가정은 성립합니다. 그러나 (3)이 말하는 것은 "$(x_n)$의 급수가 수렴하면 $(y_n)$의 급수가 수렴한다"와 "$(y_n)$의 급수가 발산하면 $(x_n)$의 급수가 발산한다"뿐이고, $(y_n)$의 급수가 수렴한다는 것은 둘 다의 가정이 아닙니다. 실제로 $(x_n)$의 급수는 [[harmonic-series-diverges|조화급수]]라서 발산합니다.
:::
