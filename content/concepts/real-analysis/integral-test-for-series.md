---
title: 급수의 적분 판정법
title_en: Integral Test for Series
aliases: [적분 판정법, 적분판정법, integral test]
kind: theorem
field: real-analysis
msc: ["40A05", "26A42"]
level: undergrad
summary: 1 이상인 모든 실수에서 정의되고 0 이상이며 단조감소인 함수 f 에 대하여, n 번째 항이 f(n) 인 수열의 급수가 수렴하는 것은 정확히 m 번째 항이 ∫_1^m f 인 수열이 위로 유계일 때이다. 부분합과 적분 사이의 부등식과, 수렴할 때 합과 꼬리의 합의 어림을 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, mathematical-induction, finite-set, real-number-arithmetic, order-properties-of-reals, archimedean-property, interval, real-valued-function, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, monotone-convergence-theorem, tail-of-a-sequence, limit-of-sum-and-product, series-and-partial-sums, comparison-test, finite-sum-of-reals, sum-of-a-series, derivative-and-monotonicity, chain-rule, continuously-differentiable, riemann-integral, monotone-implies-integrable, oriented-integral, changing-finitely-many-values, natural-logarithm, laws-of-logarithm, real-power, integrals-with-logarithm-and-exponential]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.5.1절 Integral test for series, Proposition 5.5.13 과 그 증명의 식 (5.3), Figure 5.10 (p.222–223), Example 5.5.14 (p.223–224). 2.5.7절 Exercise 2.5.16 (p.99)
    checked: original
    note: "출처 Proposition 5.5.13(p.222)은 정수 k 와 감소하고 0 이상인 f : [k, ∞) → ℝ 에 대해 Σ_{n=k}^∞ f(n) 이 수렴하는 것은 정확히 이상적분 ∫_k^∞ f 가 수렴할 때이고, 그때 ∫_k^∞ f ≤ Σ f(n) ≤ f(k) + ∫_k^∞ f 라고 진술한다. 이 사이트에는 이상적분과 무한대에서의 극한이 없으므로, 이 항목은 k = 1 로 두고 '이상적분이 수렴한다' 대신 'm 번째 항이 ∫_1^m f 인 수열이 위로 유계이다'로 진술하며, 출처의 ∫_k^∞ f 자리에 그 수열의 극한 L 을 쓴다. 출처의 증명은 식 (5.3) ∫_ℓ^m f ≤ Σ_{n=ℓ}^{m−1} f(n) ≤ f(ℓ) + ∫_ℓ^{m−1} f 를 세운 뒤 수렴 쪽은 코시 판정으로, 발산 쪽은 Proposition 5.5.4(p.215, 0 이상인 함수의 이상적분은 ∫_a^x f 들의 상한이고, 발산하면 그 상한을 ∞ 로 둔다)로 ∫_k^m f 가 무한대로 간다는 것을 얻어 마친다. 이 항목의 (2)는 식 (5.3)의 m 을 m + 1 로 옮긴 것이고 귀납법으로 증명한다. (3)은 코시 판정 대신 항이 0 이상인 급수의 유계 판정(comparison-test (1))과 단조수렴 정리로 증명한다. (4)의 꼬리의 어림은 Example 5.5.14(p.223–224)가 1/n² 에 대해 쓰는 1/k ≤ Σ_{n=k}^∞ 1/n² ≤ 1/k² + 1/k 과 같은 꼴이다. 예시 'x⁻² 에 쓰기'는 Example 5.5.14 와 같은 함수이고, 그 꼬리의 어림은 그 예의 계산과 같은 발상이다(출처는 k = 10). 예시 '(n ln n)⁻¹ 의 급수'의 급수는 연습문제 2.5.16 b)(p.99)가 코시 응축 판정법으로 판정하게 하는 Σ_{n=2}^∞ 1/(n ln n) 과 같다. 리만 적분 강의의 integrals-with-logarithm-and-exponential 의 (5)는 f(x) = x⁻¹ 에 대해 이 항목의 (2)와 같은 부등식(조화 합과 ln n)을 자연로그의 어림으로 증명한 것이고, 확인 질문 'f(x) = x⁻¹ 에 (2)를 k = 1, m = 3 으로 써 보라.'의 부등식은 그 (5)의 n = 4, n = 3 인 경우와 같은 내용이다. 확인 질문 'f 가 D 위의 값이 1 인 상수함수이면 (3)은 무엇을 말하는가?'의 모든 항이 1 인 급수는 출처 Example 2.5.10(p.90)의 r = 1 인 등비급수와 같고, 출처도 항이 0 으로 가지 않는다는 것으로 발산을 보인다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(적분 판정 예의 적분과 번호 옮김 대조, 출처의 극한 비교 진술 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
구간은 [[interval]]의 것이고, $D = \{x \in \mathbb{R} : 1 \le x\}$는 그 (2)에 의해 구간이다. 실함수는 [[real-valued-function]]의 것이고 단조감소는 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 것이다. 리만 적분가능과 적분, 방향 있는 적분 $\int_\alpha^\beta f$는 [[riemann-integral]]과 [[oriented-integral]]의 것이다. 수열, 위로 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 급수의 수렴과 발산은 [[series-and-partial-sums]]의 것이며, 유한 합은 [[finite-sum-of-reals]], 급수의 합의 기호는 [[sum-of-a-series]]의 것이다.

$f : D \to \mathbb{R}$가 단조감소이고 모든 $x \in D$에서 $0 \le f(x)$라 하자. 자연수는 $D$의 원소이므로 $n$번째 항이 $f(n)$인 수열이 있다.

1. (적분값의 수열) $D$의 원소 $\alpha$, $\beta$에 대하여 $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하다. 자연수 $m$마다 $I_m = \int_1^m f$로 두면($I_1 = 0$) $(I_m)$은 단조증가인 수열이고 모든 항이 $0$ 이상이다.
2. (부분합과 적분) $k \le m$인 모든 자연수 $k$, $m$에서
   $$
   \begin{aligned}
   \int_k^{m+1} f &\le \sum_{n=k}^{m} f(n) \\
   &\le f(k) + \int_k^m f
   \end{aligned}
   $$
   이다.
3. (**적분 판정법**, integral test) $n$번째 항이 $f(n)$인 수열의 급수가 수렴하는 것은 정확히 $(I_m)$이 위로 유계일 때이다. 이때 $(I_m)$은 수렴하고, $L = \lim_{m \to \infty} I_m$이라 하면
   $$
   L \le \sum_{n=1}^{\infty} f(n) \le f(1) + L
   $$
   이다.
4. (꼬리의 어림) (3)의 급수가 수렴하고 $L$이 (3)과 같으면, 모든 자연수 $k$에서
   $$
   \begin{aligned}
   L - I_k &\le \sum_{n=k}^{\infty} f(n) \\
   &\le f(k) + L - I_k
   \end{aligned}
   $$
   이다.
:::

:::english
Intervals are those of the entry on intervals, and $D = \{x \in \mathbb{R} : 1 \le x\}$ is an interval by its item (2). Real-valued functions are those of the corresponding entry, and monotone decreasing is that of the entry on derivatives and monotonicity. Riemann integrability, the integral and the oriented integral $\int_\alpha^\beta f$ are those of the entries on the Riemann integral and the oriented integral. Sequences, bounded above, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence and on uniqueness of limits, convergence and divergence of a series are those of the entry on series and partial sums, finite sums are those of the entry on finite sums of real numbers, and the notation for the sum of a series is that of the corresponding entry.

Let $f : D \to \mathbb{R}$ be monotone decreasing with $0 \le f(x)$ for every $x \in D$. Natural numbers are elements of $D$, so there is a sequence whose $n$th term is $f(n)$.

1. (The sequence of integrals) For elements $\alpha$, $\beta$ of $D$, $f$ is integrable between $\alpha$ and $\beta$. For each natural number $m$ let $I_m = \int_1^m f$ (so $I_1 = 0$). Then $(I_m)$ is a monotone increasing sequence and all its terms are $\ge 0$.
2. (Partial sums and integrals) For all natural numbers $k \le m$,
   $$
   \begin{aligned}
   \int_k^{m+1} f &\le \sum_{n=k}^{m} f(n) \\
   &\le f(k) + \int_k^m f
   \end{aligned}
   $$
3. (**Integral test**) The series of the sequence whose $n$th term is $f(n)$ converges exactly when $(I_m)$ is bounded above. In that case $(I_m)$ converges, and with $L = \lim_{m \to \infty} I_m$,
   $$
   L \le \sum_{n=1}^{\infty} f(n) \le f(1) + L .
   $$
4. (Estimate of tails) If the series in (3) converges and $L$ is as in (3), then for every natural number $k$,
   $$
   \begin{aligned}
   L - I_k &\le \sum_{n=k}^{\infty} f(n) \\
   &\le f(k) + L - I_k
   \end{aligned}
   $$
:::

## 직관

$f(n)$은 밑변이 $1$이고 높이가 $f(n)$인 직사각형의 넓이로 볼 수 있습니다. $f$가 단조감소이므로 $[n, n + 1]$에서 그래프는 높이 $f(n)$ 아래에, $[n - 1, n]$에서는 높이 $f(n)$ 위에 있습니다. 그래서 직사각형들의 넓이의 합, 곧 부분합은 그래프 아래의 넓이(적분)와 첫 직사각형 하나만큼의 차이 안에서 같이 움직입니다((2)). 항이 $0$ 이상인 급수는 부분합이 위로 유계일 때 수렴하므로, 적분값이 위로 유계인지가 급수의 수렴을 정합니다((3)).

비유하자면 비탈길의 계단과 같습니다. 계단의 각 단을 왼쪽 끝 높이로 깎으면 비탈 위로 튀어나오고, 오른쪽 끝 높이로 깎으면 비탈 아래로 들어갑니다. 튀어나온 계단의 넓이는 비탈 아래 넓이보다 크고, 들어간 계단의 넓이는 작습니다. "왼쪽 끝 높이"가 $f(n)$을 $[n, n + 1]$ 위에 둔 것에, "오른쪽 끝 높이"가 $[n - 1, n]$ 위에 둔 것에 해당합니다. 비유가 맞지 않는 곳은, 이 판정은 적분값 전체의 수열을 보며 그래프의 모양에서 한 번에 넓이를 읽지 않는다는 점입니다.

이 사이트에는 이상적분이 없으므로 "$\int_1^\infty f$가 수렴한다" 대신 "$\int_1^m f$들이 위로 유계이다"라고 진술합니다. 단조감소라는 가정은 $f$가 적분가능하다는 것과 $[n, n + 1]$에서 $f(n + 1) \le f(x) \le f(n)$으로 적분을 누르는 데 쓰이고, 이 가정이 없으면 판정이 맞지 않을 수 있습니다(아래 반례).

## 증명

:::idea
$[n, n + 1]$에서 $f(n + 1) \le f \le f(n)$이므로 $f(n + 1) \le \int_n^{n+1} f \le f(n)$이다. 이것을 귀납법으로 더해 (2)를 얻고, 항이 $0$ 이상인 급수의 유계 판정과 단조수렴 정리로 (3), (4)를 얻는다.
:::

:::hint
[[riemann-integral|리만 적분]]의 (2)는 함숫값의 범위로 적분을 누른다. 길이가 $1$인 구간 $[n, n + 1]$에 써 보라.
:::

:::hint
$\int_k^{m+1} f = \int_k^{m} f + \int_m^{m+1} f$([[oriented-integral|방향 있는 적분]]의 (2))이다. (4)는 (2)에서 $m$을 키운 극한이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (2)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고 (Z1)에 의해 $1$ 이상이며, 순서 성질 (10)에 의해 실수로서도 $1 \le n$이므로 $D$의 원소이다.

**1의 증명.** $f$는 단조감소이므로 [[monotone-implies-integrable|단조함수의 적분가능성]]의 정의에 의해 $D$ 위의 단조함수이고, 그 (4)에 의해 $a < b$인 $D$의 원소 $a$, $b$에서 $[a, b] \subseteq D$([[interval]]의 (4))이므로 $f$는 $[a, b]$에서 적분가능하다. 따라서 $D$의 원소 $\alpha$, $\beta$에 대하여 $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하다([[oriented-integral]]의 정의; $\alpha = \beta$이면 정의에 의해). 특히 $I_m$이 정해지고, $I_1 = \int_1^1 f = 0$이다.

자연수 $n$에 대하여 $[n, n + 1]$의 모든 $x$에서 단조감소에 의해 $f(n + 1) \le f(x) \le f(n)$이다($x = n$이나 $x = n + 1$이면 등호). [[riemann-integral]]의 (2)의 (i)과 (4)를 $[n, n + 1]$에 쓰면 $(n + 1) - n = 1$이므로
$$
f(n + 1) \le \int_n^{n+1} f \le f(n)
$$
이다. 이것을 (가)라 부른다. $1 \le m < m + 1$이 모두 $[1, m + 1]$의 원소이므로 [[oriented-integral]]의 (2)에 의해 $I_{m+1} = I_m + \int_m^{m+1} f$이고, (가)와 $0 \le f(m + 1)$에 의해 $0 \le \int_m^{m+1} f$이므로 순서 성질 (2)의 (i)에 의해 $I_m \le I_{m+1}$이다. 따라서 $(I_m)$은 단조증가이고, [[sequence]]의 (4)에 의해 모든 $m$에서 $0 = I_1 \le I_m$이다.

**2의 증명.** 자연수 $k$를 잡고 $k$ 이상인 정수 $m$에 대한 명제 "$\int_k^{m+1} f \le \sum_{n=k}^{m} f(n) \le f(k) + \int_k^m f$"를 시작점이 $k$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 합은 $n$번째 항이 $f(n)$인 수열의 유한 합이다.

- 기초 단계: [[finite-sum-of-reals]]의 (2)에 의해 $\sum_{n=k}^{k} f(n) = f(k)$이다. (가)에 의해 $\int_k^{k+1} f \le f(k)$이고, $\int_k^k f = 0$이므로 $f(k) = f(k) + \int_k^k f$이다((K4)).
- 귀납 단계: $m \ge k$이고 명제가 $m$에서 성립한다고 하자. $k \le m < m + 1 < m + 2$가 모두 $[k, m + 2]$의 원소이므로 [[oriented-integral]]의 (2)에 의해 $\int_k^{m+2} f = \int_k^{m+1} f + \int_{m+1}^{m+2} f$이고 $\int_k^{m+1} f = \int_k^m f + \int_m^{m+1} f$이다. [[finite-sum-of-reals]]의 (3)에 의해 $\sum_{n=k}^{m+1} f(n) = \sum_{n=k}^{m} f(n) + f(m + 1)$이다. (가)를 $m + 1$과 $m$에 쓰면 $\int_{m+1}^{m+2} f \le f(m + 1) \le \int_m^{m+1} f$이다. 귀납 가정과 순서 성질 (2)의 (iii)으로 더하면
  $$
  \begin{aligned}
  &\int_k^{m+2} f \\
  &\quad \le \sum_{n=k}^{m} f(n) + f(m + 1) \\
  &\quad = \sum_{n=k}^{m+1} f(n) \\
  &\quad \le f(k) + \int_k^m f + \int_m^{m+1} f \\
  &\quad = f(k) + \int_k^{m+1} f
  \end{aligned}
  $$
  이다((K2)). 따라서 명제가 $m + 1$에서 성립한다.

**3의 증명.** $n$번째 항이 $f(n)$인 수열의 $m$번째 부분합을 $s_m$이라 하면 [[finite-sum-of-reals]]의 (1)에 의해 $s_m = \sum_{n=1}^{m} f(n)$이고, (2)를 $k = 1$에 쓰면 모든 자연수 $m$에서
$$
I_{m+1} \le s_m \le f(1) + I_m
$$
이다. 이것을 (나)라 부른다. 모든 항 $f(n)$은 $0$ 이상이다.

$(I_m)$이 위로 유계이고 $B$가 그 상계라 하면, (나)와 순서 성질 (2)의 (i), (1)의 (v)에 의해 모든 $m$에서 $s_m \le f(1) + B$이므로 부분합 수열은 위로 유계이고 [[comparison-test|비교 판정법]]의 (1)에 의해 급수는 수렴한다. 거꾸로 급수가 수렴하고 합이 $S$라 하면, [[sum-of-a-series]]의 (4)의 (ii)에 의해 모든 $m$에서 $s_m \le S$이고, (나)에 의해 $I_{m+1} \le S$이며 $I_1 = 0 \le s_1 \le S$이다. 따라서 $(I_m)$은 위로 유계이다.

이때 $(I_m)$은 단조증가이고 위로 유계이므로 [[monotone-convergence-theorem|단조수렴 정리]]의 (1)에 의해 수렴한다. 부등식은 (4)를 $k = 1$에 쓴 것이다. $I_1 = 0$이고 [[sum-of-a-series]]의 (2)에서 $K = 0$이면 $\sum_{n=1}^{\infty} f(n)$은 그 자신이다.

**4의 증명.** 자연수 $k$를 잡자. $T = \sum_{n=k}^{\infty} f(n)$은 [[sum-of-a-series]]의 (2)를 $K = k - 1$에 쓰면 정해지고, 그 (1)에 의해 $n \ge k$에서 정해진 항 $f(n)$을 1부터 다시 번호 붙인 수열의 $j$번째 부분합 $\sum_{n=k}^{j+k-1} f(n)$은 $T$로 수렴한다. 자연수 $j$에 대하여 $m = j + k - 1$로 두면 $k \le m$이고, (2)와 [[oriented-integral]]의 (2)($\int_1^{m} f = \int_1^k f + \int_k^m f$)에 의해
$$
\begin{aligned}
I_{j+k} - I_k &\le \sum_{n=k}^{j+k-1} f(n) \\
&\le f(k) + I_{j+k-1} - I_k
\end{aligned}
$$
이다. [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $j$번째 항이 $I_{j+k}$인 수열($k$-꼬리)은 $L$로 수렴하고, $j$번째 항이 $I_{j+k-1}$인 수열은 $k = 1$이면 $(I_m)$ 자신이고 $k \ge 2$이면 $(k - 1)$-꼬리이므로 $L$로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 왼쪽은 $L - I_k$로, 오른쪽은 $f(k) + L - I_k$로 수렴하고, [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 $L - I_k \le T \le f(k) + L - I_k$이다. $\blacksquare$
:::

## 예시와 반례

:::example[x⁻² 에 쓰기]
$f(x) = x^{-2}$([[real-power]]의 실수 거듭제곱, $D$로 제한)로 두면, 그 (6)의 (ii)에 의해 $x$에서의 값이 $x^{-2}$인 함수는 순감소이므로 $f$는 단조감소이고, 그 (4)의 (i)에 의해 $0 < f(x)$입니다. [[integrals-with-logarithm-and-exponential|로그와 지수로 구하는 적분]]의 (3)을 $r = -2$에 쓰면
$$
\begin{aligned}
I_m &= \int_1^m x^{-2}\,dx \\
&= (m^{-1} - 1^{-1})(-1)^{-1} \\
&= 1 - m^{-1}
\end{aligned}
$$
이고([[real-power]]의 (2)에 의해 $m^{-1}$은 역수), [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $L = 1$입니다. (3)에 의해 $1 \le \sum_{n=1}^{\infty} (n^2)^{-1} \le 1 + 1 = 2$이고, (4)를 $k = 5$에 쓰면 $L - I_5 = 5^{-1}$이므로 $\tfrac{1}{5} \le \sum_{n=5}^{\infty} (n^2)^{-1} \le \tfrac{1}{25} + \tfrac{1}{5}$입니다. 처음 두 항의 부분합이 $1 + \tfrac14 = \tfrac54$이므로 합은 $L = 1$보다 큽니다. (3)의 왼쪽 부등식은 등호가 아닐 수 있습니다.
:::

:::example[(n ln n)⁻¹ 의 급수]
$f(x) = \bigl((x + 1)\ln(x + 1)\bigr)^{-1}$($x \in D$)로 둡니다. $x \in D$이면 $x + 1 \ge 2 > 1$이므로 [[natural-logarithm|자연로그]]의 (3)에 의해 $0 < \ln(x + 1)$이고, $f(x)$는 양수입니다. $1 \le x < y$이면 $x + 1 < y + 1$이고 $\ln(x + 1) < \ln(y + 1)$이므로 [[order-properties-of-reals]]의 (11)의 (ii)와 (6)의 (ii)에 의해 $f(y) < f(x)$입니다. 곧 $f$는 단조감소입니다.

$g(x) = \ln(x + 1)$로 정한 $g : D \to \mathbb{R}$는 [[continuously-differentiable|연속미분가능]]의 (4), (5)와 [[natural-logarithm]]의 (2)에 의해 연속미분가능하고, [[chain-rule|연쇄법칙]]의 (2)에 의해 $g'(x) = (x + 1)^{-1}$이며, 모든 $x$에서 $0 < g(x)$입니다. 자연수 $m \ge 2$에서 [[integrals-with-logarithm-and-exponential|로그와 지수로 구하는 적분]]의 (4)와 [[continuously-differentiable]]의 (2)에 의해
$$
\begin{aligned}
I_m &= \int_1^m g'(x)\,g(x)^{-1}\,dx \\
&= \ln\bigl(\ln(m + 1)\bigr) - \ln(\ln 2)
\end{aligned}
$$
입니다. 이 수열은 위로 유계가 아닙니다. 실수 $B$가 주어지면 [[laws-of-logarithm|로그의 법칙]]의 (5)에 의해 양수 $K_1$이 있어 $K_1 < y$이면 $B + \ln(\ln 2) < \ln y$이고, 다시 양수 $K_2$가 있어 $K_2 < z$이면 $K_1 < \ln z$입니다. [[archimedean-property|아르키메데스 성질]]의 (1)로 $K_2 < m$이고 $2 \le m$인 자연수 $m$을 잡으면 $K_2 < m + 1$이므로 $K_1 < \ln(m + 1)$이고 $B < I_m$입니다. 따라서 (3)에 의해 $n$번째 항이 $f(n)$인 수열의 급수는 발산합니다. 이 수열은 $n \ge 2$에서 정해진 항 $(n \ln n)^{-1}$을 1부터 다시 번호 붙인 수열이므로([[sum-of-a-series]]), $n \ge 2$에서 정해진 항 $(n \ln n)^{-1}$의 급수는 발산합니다.
:::

:::counterexample[단조감소가 아닌 f 에서 적분은 커지고 급수는 수렴하는 예]
$x$가 정수이면 $f(x) = 0$, 정수가 아니면 $f(x) = 1$로 정한 $f : D \to \mathbb{R}$를 봅니다. $1 < 3/2 < 2$이고 [[prime-number]]의 (Z1)에 의해 $1$과 $2$ 사이에 정수가 없으므로 $f(3/2) = 1$이고, $f(1) = 0 < 1 = f(3/2)$이므로 단조감소가 아닙니다. 모든 $n$에서 $f(n) = 0$이므로 $n$번째 항이 $f(n)$인 수열의 급수는 합이 $0$으로 수렴합니다. 그러나 자연수 $m \ge 2$에서 $f$는 $[1, m]$에서 유한집합 $\{1, \dots, m\}$([[finite-set]]) 밖의 모든 점에서 값이 $1$인 상수함수와 같으므로, [[changing-finitely-many-values|유한 개의 값을 바꾼 함수의 적분]]의 (4)와 [[riemann-integral]]의 (5)에 의해 $\int_1^m f = m - 1$이고, 이 수열은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 위로 유계가 아닙니다. 단조감소라는 가정을 빼면 (3)이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$f(x) = x^{-1}$에 (2)를 $k = 1$, $m = 3$으로 써 보라.]
$\int_1^4 x^{-1}\,dx \le 1 + \tfrac12 + \tfrac13 \le 1 + \int_1^3 x^{-1}\,dx$, 곧 $\ln 4 \le \tfrac{11}{6} \le 1 + \ln 3$입니다([[natural-logarithm|자연로그]]의 (5)와 (1)). $x^{-1}$은 $D$에서 양수이고 단조감소이므로([[order-properties-of-reals]]의 (6)의 (ii)) (2)의 가정이 성립합니다.
:::

:::check[$f$가 $D$ 위의 값이 $1$인 상수함수이면 (3)은 무엇을 말하는가?]
상수함수는 단조감소이고 값이 $0$ 이상이므로 가정이 성립합니다. [[oriented-integral]]의 (4)에 의해 $I_m = m - 1$이고, 이 수열은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 위로 유계가 아닙니다. 따라서 (3)에 의해 모든 항이 $1$인 수열의 급수는 발산하고, 이것은 항이 $0$으로 가지 않는다는 것과도 맞습니다.
:::
