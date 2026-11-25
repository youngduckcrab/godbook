---
title: p-급수
title_en: p-Series
aliases: [p급수, p-급수 판정법, p-series, p-test]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수 p 에 대하여 n 번째 항이 (nᵖ)⁻¹ 인 수열의 급수가 수렴하는 것은 정확히 p > 1 일 때이다. p > 1 이면 합은 (1 − 2^{1−p})⁻¹ 이하이고, p ≤ 0 이면 항이 0 으로 수렴하지 않으며, p > 0 이면 항이 단조감소하며 0 으로 수렴한다. 자연수 p 에서는 해석학 입문의 (nᵖ)⁻¹ 의 급수와 같다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, series-and-partial-sums, harmonic-series-diverges, terms-of-convergent-series-tend-to-zero, comparison-test, natural-logarithm, exponential-function, real-power, sum-of-a-series, series-indexed-from-zero, cauchy-condensation-test]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.5절 Comparison test and the p-series, Proposition 2.5.17 과 그 증명, 각주 (p.94–95), Example 2.5.18 (p.95). 5.5.1절 Example 5.5.14 (p.223–224)
    checked: original
    note: "출처 Proposition 2.5.17(p.94)은 실수 p 에 대해 Σ 1/nᵖ 이 수렴하는 것은 정확히 p > 1 일 때라고 진술하고, 각주(p.94)는 xᵖ 을 아직 정의하지 않았으며 xᵖ = exp(p ln x) 로 5.4절에서 정의한다고 적는다. 이 항목은 그 정의(리만 적분 강의 real-power)를 쓴다. 출처의 증명은 p ≤ 1 이면 1/nᵖ ≥ 1/n 과 조화급수의 발산, 비교 판정법으로 발산을 보이고(이 항목의 (1)의 발산 쪽과 같다), p > 1 이면 부분합 s_{2^k−1} 을 2ⁱ 개씩 묶어 1 + Σ (1/2^{p−1})ⁱ 아래로 누른다(p.95). 이 항목은 수렴 쪽을 cauchy-condensation-test 로 증명한다. 그 판정법이 출처의 묶음과 같은 발상이고, 출처는 연습문제 2.5.15(p.99)에서 이 증명이 응축 원리로 일반화된다고 적는다. (2)의 합의 어림 (1 − 2^{1−p})⁻¹ 은 출처의 증명이 얻는 1 + Σ_{i=1}^∞ (1/2^{p−1})ⁱ 과 같은 수이다. 이 항목은 해석학 입문 comparison-test 의 (6)(자연수 p 에 대한 (nᵖ)⁻¹ 의 급수)을 실수 p 로 넓힌 것이고, (4)가 두 nᵖ 이 같다는 것을 밝힌다. 예시 'p = 2 의 합의 어림'은 출처 Example 5.5.14(p.223–224)가 같은 급수의 합을 적분 판정법으로 어림하는 것과 같은 대상이다. Example 2.5.18(p.95)은 이 판정을 1/(n² + 1) 의 비교에 쓴다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(적분 판정 예의 적분과 번호 옮김 대조, 출처의 극한 비교 진술 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$\mathbb{R}_{>0}$은 [[natural-logarithm]]의 것이고, 양수 밑의 실수 거듭제곱 $a^y$는 [[real-power]]의 것이다. 자연수는 $\mathbb{R}_{>0}$의 원소이다. 급수의 수렴과 발산은 [[series-and-partial-sums]]의 것이고, 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]]의 것이며, 조화급수는 [[harmonic-series-diverges]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

$p$를 실수라 하자. $n$번째 항이 $(n^p)^{-1}$인 수열의 급수를 **$p$-급수**($p$-series)라 한다. [[real-power]]의 (4)의 (ii)에 의해 $(n^p)^{-1} = n^{-p}$이다.

1. (**$p$-급수 판정법**) $p$-급수가 수렴하는 것은 정확히 $1 < p$일 때이다.
2. (합의 어림) $1 < p$이면 $0 < 2^{1-p} < 1$이고
   $$
   1 \le \sum_{n=1}^{\infty} \frac{1}{n^p} \le \frac{1}{1 - 2^{1-p}}
   $$
   이다.
3. ($p \le 0$인 경우) $p \le 0$이면 모든 자연수 $n$에서 $1 \le (n^p)^{-1}$이고, $n$번째 항이 $(n^p)^{-1}$인 수열은 $0$으로 수렴하지 않는다.
4. (자연수 지수와의 일치) $p$가 자연수이면 $n^p$은 [[power-of-a-real-number]]의 거듭제곱 $n^p$과 같은 수이다. 따라서 이때 $p$-급수는 [[comparison-test|비교 판정법]]의 (6)의 $(n^p)^{-1}$의 급수와 같고, (1)은 그 (6)을 실수 $p$로 넓힌 것이다. $p = 1$이면 $p$-급수는 조화급수이다.
5. ($0 < p$인 경우의 항) $0 < p$이면 $n$번째 항이 $(n^p)^{-1}$인 수열은 단조감소이고 $0$으로 수렴한다. 곧 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $0 < (n^p)^{-1} < \varepsilon$이다.
:::

:::english
$\mathbb{R}_{>0}$ is that of the entry on the natural logarithm, and the real power $a^y$ of a positive base is that of the entry on real powers. Natural numbers are elements of $\mathbb{R}_{>0}$. Convergence and divergence of a series are those of the entry on series and partial sums, the symbol $\sum_{n=1}^{\infty}$ is that of the entry on the notation for the sum of a series, and the harmonic series is that of the entry on its divergence. Below, a sequence written by a formula is the one given by item (1) of the entry on sequences.

Let $p$ be a real number. The series of the sequence whose $n$th term is $(n^p)^{-1}$ is called the **$p$-series**. By item (4)(ii) of the entry on real powers, $(n^p)^{-1} = n^{-p}$.

1. (**$p$-series test**) The $p$-series converges exactly when $1 < p$.
2. (Estimate of the sum) If $1 < p$, then $0 < 2^{1-p} < 1$ and
   $$
   1 \le \sum_{n=1}^{\infty} \frac{1}{n^p} \le \frac{1}{1 - 2^{1-p}} .
   $$
3. (The case $p \le 0$) If $p \le 0$, then $1 \le (n^p)^{-1}$ for every natural number $n$, and the sequence whose $n$th term is $(n^p)^{-1}$ does not converge to $0$.
4. (Agreement with natural exponents) If $p$ is a natural number, $n^p$ is the same number as the power $n^p$ of the entry on powers of a real number. Hence in that case the $p$-series is the series of $(n^p)^{-1}$ in item (6) of the comparison test, and (1) extends that item (6) to real $p$. If $p = 1$, the $p$-series is the harmonic series.
5. (Terms when $0 < p$) If $0 < p$, the sequence whose $n$th term is $(n^p)^{-1}$ is monotone decreasing and converges to $0$. That is, for every positive real number $\varepsilon$ there is a natural number $M$ such that $0 < (n^p)^{-1} < \varepsilon$ for every natural number $n \ge M$.
:::

## 직관

$p$가 클수록 $n^p$은 빨리 커지고 그 역수는 빨리 작아집니다. (1)은 그 경계가 정확히 $p = 1$이라는 것입니다. $p = 1$은 발산하는 [[harmonic-series-diverges|조화급수]]이고, $p$가 $1$보다 조금이라도 크면 수렴합니다. 해석학 입문의 [[comparison-test|비교 판정법]]은 자연수 $p$만 다루어 $p = 1$과 $p = 2$ 사이를 말하지 못했는데, 실수 지수로 그 사이가 채워집니다.

수렴 쪽은 [[cauchy-condensation-test|코시 응축 판정법]]으로 봅니다. 번호가 $2^k$인 항만 모아 $2^k$배 하면 $2^k (2^k)^{-p} = (2^{1-p})^k$로 공비가 $2^{1-p}$인 등비수열이 되고, 이 공비가 $1$보다 작은 것은 정확히 $p > 1$일 때입니다. 비유하자면 점점 얇아지는 책을 쌓는 것과 같습니다. 책 두께가 $1, 2, 4, 8, \dots$권 묶음마다 일정한 비율로 줄어들면 더미의 높이가 한정되고, 묶음의 두께가 줄지 않으면 더미는 한없이 높아집니다. 묶음의 두께 비가 공비 $2^{1-p}$에 해당합니다.

발산 쪽은 비교로 봅니다. $p \le 1$이면 $n^{-p} \ge n^{-1}$이므로 조화급수보다 크고, $p \le 0$이면 항이 $1$ 이상이라 항이 $0$으로 가지도 않습니다((3)). $0 < p \le 1$이면 항은 $0$으로 가지만((5)) 급수는 발산합니다.

## 증명

:::idea
$p \le 1$이면 항을 조화급수의 항과 비교하고, $1 < p$이면 응축 수열이 공비 $2^{1-p}$인 등비수열임을 보여 응축 판정법을 쓴다.
:::

:::hint
$n \ge 1$인 밑 $n$에 대해 $y$에서의 값이 $n^y$인 함수는 단조이다([[real-power]]의 (6)의 (i)). $-p$와 $-1$을 비교해 보라.
:::

:::hint
$x$에서의 값이 $x^{-p}$인 함수는 $1 < p$이면 순감소이다. 응축 수열의 값 $2^k (2^k)^{-p}$을 지수법칙으로 정리하라.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, "지수 (6)"은 [[real-power]]의 번호이다. 자연수 $n$은 순서 성질 (10)에 의해 양의 실수이므로 $\mathbb{R}_{>0}$의 원소이고, 지수 (4)의 (i)에 의해 $n^p \in \mathbb{R}_{>0}$이므로 $(n^p)^{-1}$이 정해진다.

**비교에 쓰는 사실.** 자연수 $n$과 실수 $u \le v$에 대하여 $n^u \le n^v$이다. $n = 1$이면 지수 (6)의 (i)에 의해 $1^u = 1 = 1^v$이고, $n \ge 2$이면 $1 < n$이므로 같은 (i)에 의해 $y$에서의 값이 $n^y$인 함수가 순증가이기 때문이다($u = v$이면 같다). 이것을 (가)라 부른다.

**3의 증명.** $p \le 0$이면 순서 성질 (3)의 (iii)에 의해 $0 \le -p$이고, (가)에 의해 $n^0 \le n^{-p}$이다. 지수 (1)에 의해 $n^0 = 1$이므로 $1 \le n^{-p} = (n^p)^{-1}$이다. 이 수열이 어떤 $L$로 수렴하면 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $1 \le L$이므로 $L \ne 0$이다. 따라서 $0$으로 수렴하지 않는다.

**1의 증명 (발산 쪽).** $p \le 1$이라 하자. 순서 성질 (3)의 (iii)에 의해 $-1 \le -p$이고, (가)에 의해 $n^{-1} \le n^{-p}$이다. 지수 (2)에 의해 왼쪽의 $n^{-1}$은 역수 $n^{-1}$이다. 모든 자연수 $n$에서 $0 \le n^{-1} \le (n^p)^{-1}$이고([[order-properties-of-reals]]의 (10)) [[harmonic-series-diverges|조화급수]]는 발산하므로, [[comparison-test|비교 판정법]]의 (3)에 의해 $p$-급수는 발산한다.

**1의 증명 (수렴 쪽)과 2의 증명.** $1 < p$라 하자. 그러면 $-p < 0$이므로 지수 (6)의 (ii)에 의해 $x$에서의 값이 $x^{-p}$인 함수 $\mathbb{R}_{>0} \to \mathbb{R}$는 순감소이고, 자연수 $n$에서 $n < n + 1$이므로 $(n + 1)^{-p} < n^{-p}$이다. 지수 (4)의 (i)에 의해 $0 < n^{-p}$이다. 따라서 $x_n = n^{-p}$로 둔 수열은 항이 $0$ 이상이고 단조감소이다.

$0$ 이상인 정수 $k$에 대하여 $2^k$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (7)에 의해 자연수이고, 지수 (1)에 의해 그 거듭제곱 $2^k$는 실수 거듭제곱 $2^k$와 같다. 지수 (4)의 (iii), (ii)와 (K…)에 의해
$$
\begin{aligned}
2^k x_{2^k} &= 2^k (2^k)^{-p} = 2^k\, 2^{-pk} \\
&= 2^{k(1-p)} = (2^{1-p})^k
\end{aligned}
$$
이다. 마지막 등호의 $(2^{1-p})^k$는 지수 (4)의 (iii)의 실수 거듭제곱이고, 지수 (1)에 의해 정수 지수의 거듭제곱과 같다. $1 - p < 0$이고 $1 < 2$이므로 지수 (6)의 (i)에 의해 $2^{1-p} < 2^0 = 1$이고, 지수 (4)의 (i)에 의해 $0 < 2^{1-p}$이다. 이것이 (2)의 첫 문장이다.

따라서 응축 수열은 $k$에서의 값이 $r^k$($r = 2^{1-p}$, $|r| < 1$)인 0부터 번호가 붙은 수열이고, [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 그 급수는 수렴하고 합은 $(1 - 2^{1-p})^{-1}$이다. [[cauchy-condensation-test|코시 응축 판정법]]의 (3)에 의해 $p$-급수는 수렴하고 $\sum_{n=1}^{\infty} (n^p)^{-1} \le (1 - 2^{1-p})^{-1}$이다. 또 [[sum-of-a-series]]의 (4)의 (ii)에 의해 첫 부분합 $x_1 = 1^{-p} = 1$은 합 이하이다. 이로써 (2)와 (1)의 수렴 쪽이 증명되었다. (1)의 두 쪽을 합치면 수렴하는 것은 정확히 $1 < p$일 때이다.

**4의 증명.** $p$가 자연수이면 [[real-power]]의 (1)에 의해 $\exp(p \ln n)$은 [[power-of-a-real-number]]의 $n^p$과 같다. 따라서 두 수열의 항이 모두 같고 급수도 같다. $p = 1$이면 지수 (1)에 의해 $n^1 = n$이므로 항이 $n^{-1}$이다.

**5의 증명.** $0 < p$이면 $-p < 0$이므로, 1의 수렴 쪽의 증명 첫 문단과 같은 이유로 모든 $n$에서 $0 < (n + 1)^{-p} < n^{-p}$이고 수열은 단조감소이다. $0 < \varepsilon$이라 하고 $c = (\varepsilon^{-1})^{1/p}$로 두면 지수 (4)의 (i)에 의해 $c \in \mathbb{R}_{>0}$이다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $c < M$인 자연수 $M$이 있고, $M \le n$이면 $c < n$이다. $0 < p$이므로 지수 (6)의 (ii)에 의해 $x$에서의 값이 $x^p$인 함수는 순증가이고, 지수 (4)의 (iii)과 (1)에 의해 $c^p = (\varepsilon^{-1})^{(1/p)p} = (\varepsilon^{-1})^1 = \varepsilon^{-1}$이므로 $\varepsilon^{-1} < n^p$이다. 순서 성질 (6)의 (i), (ii)에 의해 $0 < (n^p)^{-1} < (\varepsilon^{-1})^{-1} = \varepsilon$이다((K8)). $\blacksquare$
:::

## 예시와 반례

:::example[p = 2 의 합의 어림]
$p = 2$이면 $2^{1-2} = 2^{-1} = 1/2$이므로 (2)에 의해 $1 \le \sum_{n=1}^{\infty} (n^2)^{-1} \le (1 - 1/2)^{-1} = 2$입니다. 처음 두 항의 부분합이 $1 + 1/4 = 5/4$이므로 [[sum-of-a-series]]의 (4)의 (ii)에 의해 합은 $5/4$ 이상입니다. 같은 방법으로 $p = 3$이면 합은 $(1 - 1/4)^{-1} = 4/3$ 이하입니다.
:::

:::example[p = 3/2 와 p = 1/2]
$p = 3/2$이면 $1 < p$이므로 $(n^{3/2})^{-1}$의 급수는 수렴하고, 합은 $(1 - 2^{-1/2})^{-1}$ 이하입니다. [[real-power]]의 (3)에 의해 $n^{3/2} = (\sqrt{n})^3$이고 $2^{-1/2} = (\sqrt{2})^{-1}$입니다. $p = 1/2$이면 $n^{1/2} = \sqrt{n}$이므로 $(\sqrt{n})^{-1}$의 급수는 (1)에 의해 발산합니다.
:::

:::counterexample[p = 0 인 p-급수]
$p = 0$이면 [[real-power]]의 (1)에 의해 $n^0 = 1$이므로 $p$-급수는 모든 항이 $1$인 수열의 급수입니다. 항이 $1$로 수렴하므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 발산합니다. (3)이 말하는 것처럼 $p \le 0$인 $p$-급수는 항이 $0$으로 가지도 않으므로, 조화급수와 비교하지 않아도 발산을 알 수 있습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $(n^{1.01})^{-1}$인 수열의 급수는 수렴하는가? 합의 어림은?]
수렴합니다. $p = 1.01 > 1$이므로 (1)에 의해 수렴하고, (2)에 의해 합은 $1$ 이상 $(1 - 2^{-0.01})^{-1}$ 이하입니다. (2)의 첫 문장에 의해 $0 < 2^{-0.01} < 1$이므로 이 위 어림은 양의 실수입니다.
:::

:::check[$p < q$이면 $q$-급수의 합과 $p$-급수의 합은 어떤 관계인가? ($1 < p$)]
$q$-급수의 합이 $p$-급수의 합 이하입니다. [[real-power]]의 (6)의 (i)에 의해 자연수 $n \ge 2$에서 $n^p < n^q$이고 $n = 1$에서는 둘 다 $1$이므로, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 모든 $n$에서 $(n^q)^{-1} \le (n^p)^{-1}$입니다. 두 급수가 (1)에 의해 수렴하므로 [[sum-of-a-series]]의 (4)의 (i)에 의해 $\sum_{n=1}^{\infty} (n^q)^{-1} \le \sum_{n=1}^{\infty} (n^p)^{-1}$입니다.
:::
