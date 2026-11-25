---
title: 지수함수의 멱급수
title_en: Power Series of the Exponential Function
aliases: [exp 의 멱급수, e 의 급수, 지수함수의 급수 전개, exponential series, power series of exp]
kind: theorem
field: real-analysis
msc: ["40A30", "26A09"]
level: undergrad
summary: 모든 실수 x 에서 지수함수 exp(x) 가 계수 1/n! 인 중심 0 의 멱급수의 합 Σ xⁿ/n! 과 같다는 것을, 항별 미분으로 그 합이 자기 자신을 도함수로 갖고 0 에서 1 이라는 것과 지수함수의 유일성으로 증명하고, e = Σ 1/n! 과 x ≥ 0 에서 부분합이 exp(x) 이하라는 것을 얻는다.
requires: [real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, factorial-from-zero, series-indexed-from-zero, power-series, radius-of-convergence, power-series-examples, termwise-differentiation-of-power-series, exponential-function, real-power]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Example 6.2.14 (p.242); 2.6.5절 Power series 의 Example 2.6.7 (p.106); 5.4.2절 The exponential 의 Remark 5.4.4 (p.211); 5.4.3절 Exercises 의 Exercise 5.4.3 (p.212)"
    checked: original
    note: "출처 Example 6.2.14(p.242)는 지수함수를 이 결과로 정의할 수도 있었다고 하면서, f(x) = Σ xⁿ/n! 의 반지름이 ∞ 이고 f(0) = 1 이며 항별 미분하면 f′ = f 라고 적는다. 그것이 exp 와 같다는 마지막 단계는 적지 않는다. 이 항목의 증명은 이 예와 같은 길이고, 마지막 단계는 이 사이트의 exponential-function 의 (5)(F′ = F, F(0) = 1 인 F 는 exp 뿐)로 닫았다. Example 2.6.7(p.106)은 이 급수가 모든 x 에서 절대수렴함을 비 판정으로 보이고 미적분에서 이것이 eˣ 로 수렴함을 떠올리라고 한다. Remark 5.4.4(p.211)는 지수함수를 멱급수로 정의하는 길이 있다고 Example 6.2.14 를 가리킨다. Exercise 5.4.3(p.212)은 같은 등식 eˣ = Σ xⁿ/n! 을 테일러 정리의 나머지로 보이라고 하고, 항별 미분은 그것을 증명하지 않는 한 쓰지 말라고 한다. 이 항목은 항별 미분을 termwise-differentiation-of-power-series 로 증명한 뒤 쓴다. (2) e = Σ 1/n! 은 (1)에 x = 1 을 넣은 것이다. 예시 'e 의 아래 어림'의 부분합은 (3)을 x = 1 에 쓴 것이고, 확인 질문 'Σ 2ⁿ/n! 은 무엇인가?' 와 'Σ (−1)ⁿ/n! 은 무엇인가?' 는 (1)에 x = 2, x = −1 을 넣은 것이다."
  - ref: lebl-basic-analysis-2
    loc: "11.2.1절 Continuity 의 Example 11.2.6 (p.147); 11.3.2절 Convergence of power series 의 Example 11.3.2 (p.155); 11.4.1절 The complex exponential 첫 문단 (p.163)"
    checked: original
    note: "출처 II 권 11.4.1절(p.163)은 E(z) = Σ zᵏ/k! 이 모든 z 에서 수렴하고, E(0) = 1 이며 실수 x 에서 직접 계산하면 E′(x) = E(x) 이고, I 권 5.4절에서 E′ = E, E(0) = 1 을 만족하는 실함수가 지수함수뿐임을 보였으므로 실수 x 에서 eˣ = E(x) 라고 적은 뒤 복소 지수를 이것으로 정의한다. 이 항목의 (1)은 그 실수 부분과 같은 논법이다. 이 항목은 복소수를 쓰지 않는다. Example 11.2.6(p.147)은 이 급수가 유계인 구간마다 고르게 수렴함을, Example 11.3.2(p.155)는 반지름이 ∞ 임을 적는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(로그 급수의 나머지 적분과 어림 재계산, 이항급수 유일성의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수와 그 수렴·합은 [[power-series]]의 것이고, 모든 실수에서 수렴하는 멱급수는 [[radius-of-convergence]]의 것이다. 계승 $n!$($0! = 1$)은 [[factorial-from-zero]], 지수함수 $\exp$는 [[exponential-function]], 수 $e = \exp(1)$은 [[real-power]]의 것이다. 0부터 번호가 붙은 수열의 유한 합과 급수의 합 $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이다.

중심이 $0$이고 계수가 $\bigl((n!)^{-1}\bigr)_{n \ge 0}$인 멱급수를 생각한다. 다음이 성립한다.

1. (지수함수의 멱급수) 이 멱급수는 모든 실수에서 수렴하는 멱급수이고, 모든 실수 $x$에서
   $$
   \exp(x) = \sum_{n=0}^{\infty} \frac{x^n}{n!}
   $$
   이다. 곧 이 멱급수가 $\mathbb{R}$ 위에 나타내는 함수는 $\exp$이다.
2. (수 $e$) $\displaystyle e = \sum_{n=0}^{\infty} \frac{1}{n!}$이다.
3. (부분합의 어림) $0 \le x$이면 $-1$ 이상인 모든 정수 $N$에서
   $$
   0 \le \sum_{n=0}^{N} \frac{x^n}{n!} \le \exp(x)
   $$
   이다. 특히 $\sum_{n=0}^{N} (n!)^{-1} \le e$이다.
:::

:::english
Power series, their convergence and sums are as in the entry on power series, and power series converging at every real number are as in the entry on the radius of convergence. The factorial $n!$ (with $0! = 1$), the exponential function $\exp$, and the number $e = \exp(1)$ are as in their entries. Finite sums and the sum $\sum_{n=0}^{\infty}$ of sequences indexed from zero are as in the entry on sums of sequences indexed from zero.

Consider the power series with center $0$ and coefficients $\bigl((n!)^{-1}\bigr)_{n \ge 0}$. The following hold.

1. (Power series of the exponential function) This power series converges at every real number, and for every real $x$
   $$
   \exp(x) = \sum_{n=0}^{\infty} \frac{x^n}{n!}.
   $$
   That is, the function this power series represents on $\mathbb{R}$ is $\exp$.
2. (The number $e$) $\displaystyle e = \sum_{n=0}^{\infty} \frac{1}{n!}$.
3. (Bounds by partial sums) If $x \ge 0$, then for every integer $N \ge -1$
   $$
   0 \le \sum_{n=0}^{N} \frac{x^n}{n!} \le \exp(x).
   $$
   In particular $\sum_{n=0}^{N} (n!)^{-1} \le e$.
:::

## 직관

리만 적분 강의는 지수함수 $\exp$를 자연로그의 역함수로 정의했고, $\exp' = \exp$이며 $\exp(0) = 1$이라는 것과 이 두 성질을 가진 미분가능한 함수가 $\exp$ 하나뿐이라는 것을 증명했습니다. 멱급수 $\sum x^n/n!$은 항마다 미분하면 $n x^{n-1}/n! = x^{n-1}/(n - 1)!$이 되어 한 칸씩 당겨진 같은 멱급수로 돌아옵니다. 그래서 그 합도 자기 자신이 도함수이고 $0$에서 $1$이며, 유일성에 의해 $\exp$입니다.

비유하자면 이름표가 없는 사람을 지문으로 알아보는 일입니다. "도함수가 자기 자신이고 $0$에서 $1$"이라는 지문을 가진 함수는 하나뿐이므로, 멱급수가 그 지문을 가지면 그 함수가 $\exp$입니다. 비유가 맞는 곳은 지문이 하나의 함수를 정한다는 것([[exponential-function|지수함수]]의 (5))이고, 맞지 않는 곳은 그 지문이 정의역 $\mathbb{R}$ 전체에서 확인되어야 한다는 것입니다. 그래서 먼저 이 멱급수가 모든 실수에서 수렴한다는 것이 필요합니다.

$x = 1$을 넣으면 $e = 1 + 1 + 1/2 + 1/6 + \cdots$입니다. 리만 적분 강의는 같은 수를 $(1 + 1/n)^n$의 극한으로도 얻었습니다. 같은 수를 두 가지 극한으로 얻은 셈입니다.

## 증명

:::idea
항별 미분한 멱급수의 계수는 $(n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}$로 원래 계수와 같으므로, 나타내는 함수 $F$는 $F' = F$, $F(0) = 1$을 만족하고 지수함수의 유일성에 의해 $\exp$이다.
:::

:::hint
[[factorial-from-zero|0부터의 계승]]의 (4)의 셋째 식을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. $c_n = (n!)^{-1}$로 쓴다.

**1의 증명.** [[power-series-examples|멱급수의 예]]의 (2)를 $a = 0$에 쓰면 이 멱급수는 모든 실수에서 수렴하는 멱급수이다. [[radius-of-convergence]]의 (7)에 의해 $I = \mathbb{R}$이고 이 멱급수가 나타내는 함수 $F : \mathbb{R} \to \mathbb{R}$, $F(x) = \sum_{n=0}^{\infty} c_n (x - 0)^n = \sum_{n=0}^{\infty} x^n (n!)^{-1}$이 있다((K4), (K9)에 의해 $x - 0 = x$).

$0$ 이상인 모든 정수 $n$에서 [[factorial-from-zero]]의 (4)에 의해 $(n + 1)\,c_{n+1} = (n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1} = c_n$이다. 따라서 항별 미분한 멱급수는 계수가 $(c_n)_{n \ge 0}$인 멱급수, 곧 이 멱급수 자신이다(두 0부터 번호가 붙은 수열이 같다). [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 (2)에 의해 $F$는 미분가능한 함수이고 $F'$은 항별 미분한 멱급수가 $\mathbb{R}$ 위에 나타내는 함수, 곧 $F$이다. 또 같은 (2)와 [[radius-of-convergence]]의 (7)의 (ii)에 의해 $F(0) = c_0 = (0!)^{-1} = 1^{-1} = 1$이다. [[exponential-function|지수함수]]의 (5)에 의해 $F = \exp$이다.

**2의 증명.** [[real-power]]의 정의에 의해 $e = \exp(1)$이고, (1)에 $x = 1$을 넣으면 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $1^n = 1$이므로 $\exp(1) = \sum_{n=0}^{\infty} (n!)^{-1}$이다((K4)).

**3의 증명.** $0 \le x$이면 거듭제곱의 (6)의 (i)에 의해 $0 \le x^n$이고, [[factorial-from-zero]]의 (3)과 순서 성질 (6)의 (i)에 의해 $0 < (n!)^{-1}$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le x^n (n!)^{-1}$이다. (1)에 의해 이 0부터 번호가 붙은 수열의 급수는 수렴하므로, [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 $-1$ 이상인 모든 $N$에서 $0 \le \sum_{n=0}^{N} x^n (n!)^{-1} \le \sum_{n=0}^{\infty} x^n (n!)^{-1} = \exp(x)$이다. 마지막 문장은 $x = 1$과 (2)이다. $\blacksquare$
:::

## 예시와 반례

:::example[e 의 아래 어림]
(3)을 $x = 1$, $N = 4$로 쓰면
$$
1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} = \frac{65}{24} \le e
$$
입니다. $65/24$는 $2.7$보다 큽니다($65 > 64.8 = 2.7 \cdot 24$). [[real-power]]의 (8)의 어림 $9/4 < e < 3$보다 아래쪽 어림이 좋아졌습니다. 이 항목은 위쪽 어림을 주지 않습니다. 부분합은 $e$보다 작거나 같다는 것만 말합니다.
:::

:::counterexample[음수에서는 부분합이 exp 의 값보다 클 수 있다]
(3)은 $0 \le x$를 가정합니다. $x = -1$, $N = 0$이면 부분합은 $(0!)^{-1}(-1)^0 = 1$이고, [[exponential-function|지수함수]]의 (2)에 의해 $-1 < 0$이므로 $\exp(-1) < \exp(0) = 1$입니다. 따라서 이 부분합은 $\exp(-1)$보다 큽니다. 음수 $x$에서는 항 $x^n/n!$의 부호가 번갈아 바뀌어 (3)의 논법(항이 $0$ 이상이면 부분합이 합 이하)을 쓸 수 없습니다.
:::

## 확인 질문

:::check[$\sum_{n=0}^{\infty} 2^n/n!$은 무엇인가?]
$\exp(2)$, 곧 $e^2$입니다. (1)에 $x = 2$를 넣으면 $\exp(2)$이고, [[real-power]]의 (5)에 의해 $e^2 = \exp(2)$입니다. 같은 항목의 (1)에 의해 이 $e^2$은 거듭제곱 $e \cdot e$와 같습니다.
:::

:::check[$\sum_{n=0}^{\infty} (-1)^n/n!$은 무엇인가?]
$\exp(-1) = e^{-1}$입니다. (1)에 $x = -1$을 넣으면 $\exp(-1)$이고, [[exponential-function|지수함수]]의 (5)의 $\exp(1)\exp(-1) = 1$에 의해 이것은 $e$의 역수 $e^{-1}$입니다.
:::
