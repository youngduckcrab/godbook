---
title: 로그함수의 멱급수
title_en: Power Series of the Logarithm
aliases: [ln(1 + x) 의 멱급수, 교대 조화급수의 합, 메르카토르 급수, logarithmic series, power series of ln(1 + x), alternating harmonic series]
kind: theorem
field: real-analysis
msc: ["40A30", "26A09"]
level: undergrad
summary: −1 < x ≤ 1 에서 ln(1 + x) = Σ (−1)ⁿ⁺¹ xⁿ/n 임을 유한 등비 합과 적분의 어림으로 직접 증명하고(부분합과의 차의 어림 포함), 교대 조화급수의 합이 ln 2 라는 것과, 이 멱급수의 수렴 반지름이 1 이고 x = −1 에서 발산한다는 것을 보인다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, comparison-with-null-sequence, geometric-sequence-limit, series-and-partial-sums, linearity-of-series, harmonic-series-diverges, alternating-series-test, interval, riemann-integral, oriented-integral, linearity-of-the-integral, monotonicity-of-the-integral, natural-logarithm, finite-sum-of-reals, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions, power-series, radius-of-convergence, ratio-formula-for-radius, termwise-integration-of-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "5.4.3절 Exercises 의 Exercise 5.4.4 (p.212); 2.6.5절 Power series 의 Example 2.6.8 (p.106–107); 2.6.3절 Rearrangements 의 Example 2.6.4 (p.103); 2.6.5절 Power series 의 Proposition 2.6.12 뒤 문단 (p.109); 2.6.6절 Exercises 의 Exercise 2.6.9 (p.111)"
    checked: original
    note: "출처 Exercise 5.4.4(p.212)는 등비 합의 공식으로 t ≠ −1 에서 1 − t + t² − ⋯ + (−1)ⁿtⁿ = 1/(1 + t) − (−1)ⁿ⁺¹tⁿ⁺¹/(1 + t) 를 보이고, 그것으로 (−1, 1] 의 모든 x 에서 ln(1 + x) = Σ_{n=1}^∞ (−1)ⁿ⁺¹xⁿ/n 임을(x = 1 포함) 보인 뒤 교대 조화급수의 합을 구하라고 한다. 이 항목의 (1), (2)는 이 연습문제의 결론이고 증명도 그 힌트와 같은 길(유한 등비 합을 적분하고 나머지 적분을 어림)이다. 이 사이트의 ln 은 ∫_1^x t⁻¹ dt 로 정의되어 있으므로, 출처의 변수 t 대신 s = 1 + t 로 써서 [1, 1 + x] 사이의 적분으로 계산했고 나머지의 어림을 진술에 올렸다. 연습문제는 반지름을 묻지 않는다. (3)의 반지름은 Exercise 2.6.9(p.111, 비 판정으로 반지름을 구하라)의 결론을 이 사이트에서 진술한 ratio-formula-for-radius 로 구했다. Example 2.6.8(p.106–107)은 Σ xⁿ/n 이 (−1, 1) 에서 절대수렴하고 x = −1 에서 수렴, x = 1 에서 발산함을 보인다. 이 항목의 멱급수는 그 계수에 (−1)ⁿ⁺¹ 을 곱한 것이어서 수렴하는 끝점이 x = 1 쪽으로 바뀐다. Example 2.6.4(p.103)는 교대 조화급수를 재배열해 아무 수로나 수렴하게 하는 예이고 그 합은 적지 않는다. 반례 '$\\ln(1 + x)$가 정해져도 급수는 발산할 수 있다'는 2.6.5절 Proposition 2.6.12 뒤 문단(p.109)의 '유리함수의 급수는 함수가 다른 곳에서 정의되어 있어도 구간에서만 함수를 정한다'(1/(1 − x) 와 Σ xⁿ 의 예)와 같은 발상이다. 확인 질문 '교대급수 판정법이 주는 어림과 (2)가 맞는가?'는 alternating-series-test 의 (4)의 −1 ≤ S ≤ −1/2 와 natural-logarithm 의 (6)의 1/2 < ln 2 < 1 을 맞춰 보는 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(로그 급수의 나머지 적분과 어림 재계산, 이항급수 유일성의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
자연로그 $\ln$과 $\mathbb{R}_{>0}$은 [[natural-logarithm]]의 것이고, 방향 있는 적분은 [[oriented-integral]]의 것이다. 급수의 수렴과 합은 [[series-and-partial-sums]]의 것이고 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]], 유한 합 $\sum_{n=1}^{N}$은 [[finite-sum-of-reals]]의 것이다. 멱급수, 수렴 반지름, 수렴하는 점의 집합은 [[power-series]]와 [[radius-of-convergence]]의 것이다.

1. (로그의 급수와 나머지의 어림) $-1 < x \le 1$이면 $n$번째 항이 $(-1)^{n+1} x^n n^{-1}$인 수열의 급수는 수렴하고
   $$
   \ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}
   $$
   이다. 더 자세히, $0$ 이상인 모든 정수 $N$에서 $R_N = \ln(1 + x) - \sum_{n=1}^{N} (-1)^{n+1} x^n n^{-1}$로 두면
   - (i) $0 \le x \le 1$이면 $|R_N| \le x^{N+1} (N + 1)^{-1}$이고,
   - (ii) $-1 < x < 0$이면 $|R_N| \le |x|^{N+1} (1 + x)^{-1}$이다.
2. (교대 조화급수) $\displaystyle \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$이고, $\displaystyle \sum_{n=1}^{\infty} \frac{(-1)^{n}}{n} = -\ln 2$이다.
3. (멱급수로 보기) 중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (-1)^{n+1} n^{-1}$인 멱급수는 수렴 반지름이 $1$이고, $x = -1$에서 발산한다. 이 멱급수가 수렴하는 실수 전체의 집합은 $\{x : -1 < x \le 1\}$이고, 그 위의 모든 $x$에서 합은 $\ln(1 + x)$이다. 곧 이 멱급수가 $I = (-1, 1)$ 위에 나타내는 함수는 $x$에서의 값이 $\ln(1 + x)$인 함수이다.
:::

:::english
The natural logarithm $\ln$ and $\mathbb{R}_{>0}$ are as in the entry on the natural logarithm, and oriented integrals are as in their entry. Convergence of series and the sum $\sum_{n=1}^{\infty}$, and finite sums $\sum_{n=1}^{N}$, are as in their entries. Power series, the radius of convergence and the set of points of convergence are as in the entries on power series and the radius of convergence.

1. (The series of the logarithm and a bound on the remainder) If $-1 < x \le 1$, then the series of the sequence whose $n$th term is $(-1)^{n+1} x^n n^{-1}$ converges and
   $$
   \ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}.
   $$
   More precisely, for every integer $N \ge 0$ put $R_N = \ln(1 + x) - \sum_{n=1}^{N} (-1)^{n+1} x^n n^{-1}$; then
   - (i) if $0 \le x \le 1$, $|R_N| \le x^{N+1} (N + 1)^{-1}$, and
   - (ii) if $-1 < x < 0$, $|R_N| \le |x|^{N+1} (1 + x)^{-1}$.
2. (The alternating harmonic series) $\displaystyle \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$ and $\displaystyle \sum_{n=1}^{\infty} \frac{(-1)^{n}}{n} = -\ln 2$.
3. (As a power series) The power series with center $0$, $c_0 = 0$ and $c_n = (-1)^{n+1} n^{-1}$ for natural $n$ has radius of convergence $1$ and diverges at $x = -1$. The set of all real numbers at which it converges is $\{x : -1 < x \le 1\}$, and at every $x$ in it the sum is $\ln(1 + x)$. That is, the function this power series represents on $I = (-1, 1)$ is the function whose value at $x$ is $\ln(1 + x)$.
:::

## 직관

$\ln(1 + x)$는 $1$부터 $1 + x$까지 $s^{-1}$을 적분한 것입니다. $s^{-1} = \bigl(1 - (1 - s)\bigr)^{-1}$은 공비가 $1 - s$인 등비급수의 합처럼 보이므로, 등비 합의 처음 $N$개 항을 항마다 적분하면 부분합 $x - x^2/2 + x^3/3 - \cdots$이 나옵니다. 남는 것은 등비 합의 나머지 $(1 - s)^N s^{-1}$의 적분이고, 이것이 $N$이 커질 때 $0$으로 가는지가 전부입니다. 유한 합만 적분하므로 무한 합과 적분의 순서를 바꾸는 정리가 필요하지 않습니다.

$0 \le x \le 1$이면 적분 구간에서 $1 \le s$이므로 나머지의 피적분함수가 $(s - 1)^N$ 이하이고, 그 적분 $x^{N+1}/(N + 1)$은 $x = 1$에서도 $1/(N + 1)$로 $0$에 갑니다. 그래서 끝점 $x = 1$이 포함되고 교대 조화급수의 합이 $\ln 2$로 나옵니다. $-1 < x < 0$이면 $s$가 $1 + x$까지 내려가 $s^{-1}$이 커질 수 있지만 $(1 + x)^{-1}$로 눌리고, $|x|^{N+1}$이 $0$으로 가므로 나머지도 $0$으로 갑니다.

비유하자면 같은 길이의 끈을 점점 짧은 매듭으로 묶어 가는 일입니다. 매듭의 길이(항 $x^n/n$)를 더해 끈 전체($\ln(1 + x)$)에 다가가고, 남은 끈(나머지 $R_N$)의 길이를 직접 재어 $0$으로 감을 확인합니다. 비유가 맞지 않는 곳은 $x \le -1$입니다. $x = -1$에서는 $\ln 0$이 정해지지 않고 급수도 발산하며, $x > 1$에서는 $\ln(1 + x)$는 정해지지만 급수는 발산합니다((3)).

## 증명

:::idea
$s \ne 0$이면 등비 합에 의해 $s^{-1} = \sum_{k=0}^{N-1} (1 - s)^k + (1 - s)^N s^{-1}$이다. $1$과 $1 + x$ 사이에서 적분하면 왼쪽은 $\ln(1 + x)$, 오른쪽의 유한 합은 부분합, 나머지는 $R_N$이다.
:::

:::hint
$(1 - s)^k = (-1)^k (s - 1)^k$이고, $\int_1^{1 + x} (-1)^k (s - 1)^k\,ds = (-1)^k x^{k+1} (k + 1)^{-1}$이다.
:::

:::hint
$-1 < x < 0$이면 $1 + x \le s \le 1$에서 $|1 - s| \le |x|$이고 $s^{-1} \le (1 + x)^{-1}$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고 순서 성질 (10)에 의해 실수의 부등식으로 써도 된다. 거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. $-1 < x \le 1$을 고정하고 $\beta = 1 + x$로 두면 순서 성질 (2)의 (ii)에 의해 $0 < \beta$이므로 $\beta \in \mathbb{R}_{>0}$이다. $1$과 $\beta$ 사이에 있는 점은 [[oriented-integral]]의 (1)에 의해 구간 $\mathbb{R}_{>0}$의 원소이다.

**(가) 등비 합.** $s \in \mathbb{R}_{>0}$이고 $N$이 $0$ 이상인 정수이면 $r = 1 - s$는 $r \ne 1$이고 $1 - r = s$이므로((K12)의 (v)), [[series-indexed-from-zero]]의 (13)의 (i)을 $k = N - 1$에 쓰고 양변에 $s$를 곱해 정리하면
$$
s^{-1} = \sum_{k=0}^{N-1} (1 - s)^k + (1 - s)^N s^{-1}
$$
이다. 곧 $\sum_{k=0}^{N-1} (1 - s)^k = (1 - (1 - s)^N)\, s^{-1}$이고 (K3), (K12)를 쓴다. $N = 0$이면 합은 빈 합 $0$이고 등식은 $s^{-1} = s^{-1}$이다.

**(나) 항의 적분.** $0$ 이상인 정수 $k$에서 거듭제곱의 (2)의 (iii)과 (K9)에 의해 $(1 - s)^k = \bigl((-1)(s - 1)\bigr)^k = (-1)^k (s - 1)^k$이다. [[termwise-integration-of-power-series|멱급수의 항별 적분]]의 (3)을 중심 $1$, 계수 $(-1)^k$에 쓰면 $s$에서의 값이 $(1 - s)^k$인 함수 $\mathbb{R} \to \mathbb{R}$는 어느 두 실수 사이에서도 적분가능하고
$$
\int_1^{\beta} (1 - s)^k\,ds = \frac{(-1)^k x^{k+1}}{k + 1}
$$
이다($\beta - 1 = x$). [[finite-sums-of-functions|함수의 유한 합]]의 (6)의 (iv)를 0부터 번호가 붙은 사상의 열 $\bigl((1 - s)^k\bigr)_{k \ge 0}$에 쓰면 $\int_1^\beta \sum_{k=0}^{N-1} (1 - s)^k\,ds = \sum_{k=0}^{N-1} (-1)^k x^{k+1} (k + 1)^{-1}$이다. [[series-indexed-from-zero]]의 유한 합의 정의(한 칸 옮김)에 의해 이 합은 $\sum_{n=1}^{N} (-1)^{n-1} x^n n^{-1}$이고, 거듭제곱의 (2)의 (i)과 (5)에 의해 $(-1)^{n-1} = (-1)^{n-1}(-1)^2 = (-1)^{n+1}$이다. 이것을 $\sigma_N$이라 쓰자.

**(다) 나머지.** $s$에서의 값이 $s^{-1}$인 $\mathbb{R}_{>0}$ 위의 함수는 [[natural-logarithm]]의 진술에 의해 $1$과 $\beta$ 사이에서 적분가능하고 $\int_1^\beta s^{-1}\,ds = \ln \beta$이다. (가)의 등식에 의해 $h_N(s) = (1 - s)^N s^{-1}$로 정한 함수 $h_N : \mathbb{R}_{>0} \to \mathbb{R}$는 $s^{-1}$과 (나)의 유한 합을 $\mathbb{R}_{>0}$로 제한한 함수의 차이므로([[oriented-integral]]의 (5)에 의해 제한해도 적분가능성과 적분은 같다), [[linearity-of-the-integral|적분의 선형성]]의 (6)에 의해 $1$과 $\beta$ 사이에서 적분가능하고
$$
\int_1^\beta h_N = \ln(1 + x) - \sigma_N = R_N
$$
이다.

**(1)(i)의 어림.** $0 \le x \le 1$이면 $1 \le \beta$이고, $1 \le s \le \beta$인 $s$에서 $0 \le s - 1$, $s^{-1} \le 1$(순서 성질 (6)의 (ii))이므로 절댓값의 성질([[absolute-value|절댓값]]의 (1), (3), (4))과 거듭제곱의 (4)에 의해 $|h_N(s)| = (s - 1)^N s^{-1} \le (s - 1)^N$이다. [[monotonicity-of-the-integral|적분의 단조성]]의 (6)의 (ii)와 (i), 그리고 (나)와 같은 계산(계수 $1$)에 의해
$$
\begin{aligned}
|R_N| &\le \int_1^\beta |h_N| \\
&\le \int_1^\beta (s - 1)^N\,ds = \frac{x^{N+1}}{N + 1}
\end{aligned}
$$
이다. $x = 0$이면 $\beta = 1$이고 두 변이 모두 $0$이다.

**(1)(ii)의 어림.** $-1 < x < 0$이면 $\beta < 1$이고, $\beta \le s \le 1$인 $s$에서 $0 \le 1 - s \le 1 - \beta = -x = |x|$이고 $0 < \beta \le s$이므로 $s^{-1} \le \beta^{-1}$이다(순서 성질 (6)의 (ii)). 거듭제곱의 (6)의 (ii)와 순서 성질 (4)의 (iii)에 의해 $|h_N(s)| \le |x|^N \beta^{-1}$이다. [[oriented-integral]]의 (3)을 $k = 0$, $\varepsilon = |x|^N \beta^{-1}$로 쓰면 $|R_N| \le |x|^N \beta^{-1} |\beta - 1| = |x|^{N+1} (1 + x)^{-1}$이다.

**(1)의 수렴.** 자연수 $N$에서 $\sigma_N$은 $n$번째 항이 $(-1)^{n+1} x^n n^{-1}$인 수열의 $N$번째 부분합이다([[finite-sum-of-reals]]의 진술). (i)의 경우 $|\sigma_N - \ln(1 + x)| \le (N + 1)^{-1}$이고, $(N + 1)^{-1}$의 수열은 [[basic-limits]]의 (2)와 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴한다. (ii)의 경우 $|x| < 1$이므로 [[geometric-sequence-limit|등비수열의 극한]]의 (1)과 [[limit-of-sum-and-product]]의 (5)에 의해 $|x|^{N+1} (1 + x)^{-1} = |x| (1 + x)^{-1} \cdot |x|^N$의 수열이 $0$으로 수렴한다. 어느 경우든 [[comparison-with-null-sequence|0 으로 수렴하는 수열과의 비교]]의 (3)에 의해 부분합 수열이 $\ln(1 + x)$로 수렴하므로 급수가 수렴하고 합은 $\ln(1 + x)$이다.

**2의 증명.** (1)에 $x = 1$을 넣으면 $1^n = 1$이므로 첫째 등식이다. $n$번째 항이 $(-1)^n n^{-1}$인 수열은 그 수열의 $(-1)$배이므로((K9), 거듭제곱의 정의) [[linearity-of-series|급수의 선형성]]의 (2)에 의해 합이 $-\ln 2$이다.

**3의 증명.** 자연수 $n$에서 $c_n \ne 0$이고 $|c_{n+1}|\,|c_n|^{-1} = n (n + 1)^{-1}$이다. 이 수열은 $1 - (n + 1)^{-1}$이므로 위와 같이 $1$로 수렴한다([[limit-of-sum-and-product]]의 (5)). [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]의 (2)를 $N = 1$, $L = 1$로 쓰면 반지름은 $1$이다. $x = -1$에서 항은 $n = 0$에서 $0$, 자연수 $n$에서 $(-1)^{n+1}(-1)^n n^{-1} = -n^{-1}$이다(거듭제곱의 (2)의 (i)과 (5)). [[harmonic-series-diverges|조화급수의 발산]]의 (2)와 [[linearity-of-series]]의 (2)(계수 $-1$)에 의해 그 급수는 발산하고, [[series-indexed-from-zero]]의 (8)에 의해 멱급수는 $x = -1$에서 발산한다. 멱급수가 $x$에서 수렴하는 것은 (8)에 의해 정확히 (1)의 급수가 수렴할 때이고 합도 같다. $-1 < x \le 1$이면 (1)에 의해 수렴하고 합은 $\ln(1 + x)$이다. $|x| > 1$이면 [[radius-of-convergence]]의 (3)에 의해 발산하고, $x = -1$에서도 발산한다. 따라서 수렴하는 점의 집합은 $\{x : -1 < x \le 1\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\ln(3/2)$의 어림]
(1)을 $x = 1/2$, $N = 3$으로 쓰면 부분합은 $1/2 - 1/8 + 1/24 = 10/24 = 5/12$이고, (i)에 의해 $|\ln(3/2) - 5/12| \le (1/2)^4 \cdot 4^{-1} = 1/64$입니다. 따라서 $5/12 - 1/64 \le \ln(3/2) \le 5/12 + 1/64$, 곧 $77/192 \le \ln(3/2) \le 83/192$입니다. [[natural-logarithm]]의 (6)의 어림 $1 - (3/2)^{-1} = 1/3 < \ln(3/2) < 1/2$보다 좁은 범위입니다.
:::

:::counterexample[$\ln(1 + x)$가 정해져도 급수는 발산할 수 있다]
$x = 2$에서 $\ln 3$은 정해지지만, (3)에 의해 반지름이 $1$이고 $|2| > 1$이므로 [[radius-of-convergence]]의 (3)에 의해 $x = 2$에서의 항은 유계가 아니고 멱급수는 발산합니다. 등식 (1)은 $-1 < x \le 1$에서만 진술됩니다. 함수 $\ln(1 + x)$는 $x > -1$ 전체에서 정해지지만, 그것을 나타내는 중심 $0$의 멱급수는 $x \le 1$까지만 수렴합니다.
:::

## 확인 질문

:::check[교대급수 판정법이 주는 어림과 (2)가 맞는가?]
맞습니다. [[alternating-series-test|교대급수 판정법]]의 (4)는 $n$번째 항이 $(-1)^n n^{-1}$인 수열의 급수의 합 $S$가 $-1 \le S \le -1/2$라고 합니다. (2)에 의해 $S = -\ln 2$이고, [[natural-logarithm]]의 (6)의 $1/2 < \ln 2 < 1$에 의해 $-1 < -\ln 2 < -1/2$이므로 그 어림 안에 있습니다.
:::

:::check[(1)의 (i)로 $\ln 2$를 $1/100$보다 가깝게 구하려면 부분합을 몇 항까지 더하면 되는가?]
$N = 99$이면 됩니다. $x = 1$에서 (i)은 $|R_N| \le (N + 1)^{-1}$이므로 $N + 1 \ge 100$, 곧 $N \ge 99$이면 오차가 $1/100$ 이하입니다(정확히 $1/100$보다 작게 하려면 $N \ge 100$). 이 어림으로는 $x = 1$에서 수렴이 느립니다. 위 예시의 $x = 1/2$처럼 $0 \le x < 1$인 점에서는 (i)의 어림에 $x^{N+1}$이 곱해져 빨리 작아집니다.
:::
