---
title: 코시 곱의 예
title_en: Examples of Cauchy Products
aliases: [등비급수의 코시 곱, 발산하는 코시 곱, 코시 곱의 반례, examples of Cauchy products, Cauchy product of geometric series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 공비가 r 인 등비급수를 자기 자신과 코시 곱하면 n 번째 항이 (n + 1)rⁿ 이고, |r| < 1 이면 그 합은 1/(1 − r)² 이다. 수렴하지만 절대수렴하지 않는 (−1)ⁿ/√(n + 1) 의 급수를 자기 자신과 코시 곱하면 항의 절댓값이 1 이상이어서 발산한다. 한쪽 급수가 발산해도 코시 곱의 급수가 수렴하는 예도 든다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, square-root-exists, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-absolute-value-and-square-root, series-and-partial-sums, linearity-of-series, comparison-test, harmonic-series-diverges, alternating-series-test, terms-of-convergent-series-tend-to-zero, finite-sum-of-reals, linearity-and-order-of-finite-sums, sum-of-a-series, series-indexed-from-zero, cauchy-product, mertens-theorem, absolute-convergence-of-cauchy-product]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.4절 Multiplication of series, Example 2.6.6 (p.106). 2.6.5절 Power series, Example 2.6.13 (p.109–110). 6.2.4절 Example 6.2.15 (p.242)
    checked: original
    note: "(2)는 출처 Example 2.6.6(p.106, PDF 그림으로 대조)과 같은 수열 a_n = b_n = (−1)ⁿ/√(n + 1) 의 코시 곱이다. 출처는 이 급수가 교대급수 판정법으로 수렴하고 p-판정법으로 절대수렴하지 않는다고 적고, |c_n| = Σ_{i=0}^{n} 1/√((i + 1)(n − i + 1)) ≥ Σ_{i=0}^{n} 1/√((n + 1)(n + 1)) = 1 이어서 항이 0 으로 가지 않으므로 코시 곱의 급수가 수렴할 수 없다고 적는다. 이 항목은 같은 어림을 √(i + 1)√(n − i + 1) ≤ n + 1 로 하고, 절대수렴하지 않는다는 것은 p-급수 대신 (n + 1)⁻¹ ≤ (√(n + 1))⁻¹ 과 조화급수의 발산으로, 수렴은 한 칸 옮긴 수열에 교대급수 판정법을 써서 보인다. (1)은 출처 Example 2.6.13(p.109–110)이 공비 −x 인 등비급수의 제곱을 코시 곱으로 계산해 c_0 = 1, c_1 = −2, c_2 = 3 을 얻고 x/(1 + 2x + x²) = Σ (−1)^{n+1} n xⁿ 을 적는 것과 같은 계산이고, Example 6.2.15(p.242)는 Σ n xⁿ = x/(1 − x)² 를 항별 미분으로 얻는다. 예시 '공비가 1/2 인 등비급수의 코시 곱'의 급수는 (1)에 r = 1/2 을 넣은 것이고, 확인 질문 'Σ_{n=0}^∞ (n + 1)(−1/2)ⁿ 은 얼마인가?'는 Example 2.6.13 이 Σ (−1)ⁿ xⁿ 과 그 자신의 코시 곱의 계수 c_0 = 1, c_1 = −2, c_2 = 3, … 으로 x/(1 + 2x + x²) = Σ (−1)^{n+1} n xⁿ 을 얻는 계산에 x = 1/2 을 넣은 것과 같은 계산이다. 예시 '(2)의 코시 곱의 처음 세 항'은 Example 2.6.6 의 c_n 의 식에 n = 0, 1, 2 를 넣은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(메르텐스 증명의 구조와 예의 어림 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
0부터 번호가 붙은 수열, 그 유한 합과 급수, 급수의 합 $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이고, 코시 곱은 [[cauchy-product]]의 것이며, 0부터 번호가 붙은 수열의 급수의 절대수렴은 [[mertens-theorem]]의 진술의 것이다. 거듭제곱은 [[power-of-a-real-number]], 제곱근은 [[square-root-exists]]의 것이다.

1. (등비급수의 코시 곱) $r$을 실수라 하자. $n$에서의 값이 $r^n$인 0부터 번호가 붙은 수열과 그 자신의 코시 곱은 $n$에서의 값이 $(n + 1) r^n$인 수열이다. $|r| < 1$이면 그 급수는 절대수렴하고
   $$
   \sum_{n=0}^{\infty} (n + 1) r^n = \frac{1}{(1 - r)^2}
   $$
   이다.
2. (수렴하지만 절대수렴하지 않는 두 급수의 코시 곱) $0$ 이상인 정수 $n$에서 $x_n = (-1)^n \bigl(\sqrt{n + 1}\bigr)^{-1}$이라 하고, $(z_n)_{n \ge 0}$을 $(x_n)_{n \ge 0}$과 그 자신의 코시 곱이라 하자.
   - (i) $(x_n)_{n \ge 0}$의 급수는 수렴하지만 절대수렴하지 않는다.
   - (ii) $0$ 이상인 모든 정수 $n$에서 $1 \le |z_n|$이다.
   - (iii) $(z_n)_{n \ge 0}$의 급수는 발산한다.
3. (발산하는 급수와의 코시 곱) $x_0 = 1$, $x_1 = -1$이고 $n \ge 2$에서 $x_n = 0$이라 하고, 모든 $n \ge 0$에서 $y_n = 1$이라 하자. $(y_n)_{n \ge 0}$의 급수는 발산하지만, 코시 곱 $(z_n)_{n \ge 0}$은 $z_0 = 1$이고 $n \ge 1$에서 $z_n = 0$이며, 그 급수는 수렴하고 합은 $1$이다.
:::

:::english
Sequences indexed from zero, their finite sums and series, and sums of series $\sum_{n=0}^{\infty}$ are as in the entry on sums of sequences indexed from zero; the Cauchy product is as in the entry on the Cauchy product; and absolute convergence of the series of a sequence indexed from zero is as in the statement of the entry on Mertens' theorem. Powers are as in the entry on powers of a real number, and square roots as in the entry on the existence of square roots.

1. (Cauchy product of a geometric series) Let $r$ be a real number. The Cauchy product of the sequence indexed from zero with value $r^n$ at $n$ and itself is the sequence with value $(n + 1) r^n$ at $n$. If $|r| < 1$, its series converges absolutely and
   $$
   \sum_{n=0}^{\infty} (n + 1) r^n = \frac{1}{(1 - r)^2} .
   $$
2. (Cauchy product of two series that converge but not absolutely) For integers $n \ge 0$ let $x_n = (-1)^n \bigl(\sqrt{n + 1}\bigr)^{-1}$, and let $(z_n)_{n \ge 0}$ be the Cauchy product of $(x_n)_{n \ge 0}$ and itself.
   - (i) The series of $(x_n)_{n \ge 0}$ converges but does not converge absolutely.
   - (ii) $1 \le |z_n|$ for every integer $n \ge 0$.
   - (iii) The series of $(z_n)_{n \ge 0}$ diverges.
3. (Cauchy product with a divergent series) Let $x_0 = 1$, $x_1 = -1$, and $x_n = 0$ for $n \ge 2$, and let $y_n = 1$ for every $n \ge 0$. The series of $(y_n)_{n \ge 0}$ diverges, but the Cauchy product $(z_n)_{n \ge 0}$ satisfies $z_0 = 1$ and $z_n = 0$ for $n \ge 1$, and its series converges with sum $1$.
:::

## 직관

세 예는 [[mertens-theorem|메르텐스 정리]]의 가정을 하나씩 건드립니다. (1)은 정리가 쓰이는 전형적인 경우입니다. 등비급수 $1 + r + r^2 + \cdots$를 제곱하면 $r^n$을 만드는 곱 $r^i \cdot r^{n-i}$가 $n + 1$개이므로 $(n + 1) r^n$이 나오고, 합은 $(1 - r)^{-1}$의 제곱입니다. 다항식을 곱할 때 같은 차수의 항을 모으는 계산과 같습니다.

(2)는 두 급수가 수렴하지만 둘 다 절대수렴하지 않는 경우입니다. 항의 크기가 $(\sqrt{n + 1})^{-1}$로 천천히 작아지면, 코시 곱의 $n$번째 항은 크기가 대략 $(n + 1)^{-1}$인 곱 $n + 1$개의 합이 되어 $0$으로 가지 않습니다. 부호는 $(-1)^i (-1)^{n-i} = (-1)^n$으로 모두 같아서 서로 지워 주지도 않습니다. 메르텐스 정리에서 "적어도 하나가 절대수렴"을 빼면 결론이 깨질 수 있다는 것입니다.

(3)은 정리의 가정이 결론에 꼭 필요한 것은 아니라는 반대쪽 예입니다. 한쪽이 발산해도 다른 쪽이 $1 - t$처럼 서로 지우는 꼴이면 코시 곱이 수렴할 수 있습니다. 다항식으로는 $(1 - t)(1 + t + t^2 + \cdots)$가 $1$이 되는 것입니다.

## 증명

:::idea
(1)은 코시 곱을 계산하고 [[absolute-convergence-of-cauchy-product|절대수렴하는 급수의 코시 곱]]을 쓴다. (2)는 $\sqrt{i + 1}\sqrt{n - i + 1} \le n + 1$로 곱 하나하나를 $(n + 1)^{-1}$ 이상으로 누르고, 항이 $0$으로 가지 않으므로 발산한다. (3)은 직접 계산이다.
:::

:::hint
(2)에서 $0 \le i \le n$이면 $i + 1$과 $n - i + 1$이 모두 $n + 1$ 이하입니다. 제곱근은 순서를 지킵니다.
:::

:::proof
정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽고, 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 실수의 계산은 [[real-number-arithmetic]]의 (K1)–(K12)이고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 0부터 번호가 붙은 수열의 급수의 수렴은 [[series-indexed-from-zero]]의 정의대로 한 칸 옮긴 수열의 급수의 수렴이다.

**(1)의 증명.** $0 \le i \le n$이면 [[power-of-a-real-number]]의 (2)의 (i)에 의해 $r^i r^{n-i} = r^n$이므로, [[cauchy-product]]의 (5)의 (iv)에 의해 코시 곱의 $n$번째 항은 $\sum_{i=0}^{n} r^n = (n + 1) r^n$이다. $|r| < 1$이라 하자. [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 $\sum_{n=0}^{\infty} r^n = (1 - r)^{-1}$이다. [[power-of-a-real-number]]의 (4)에 의해 $|r^n| = |r|^n$이고 $\bigl| |r| \bigr| = |r| < 1$이므로 같은 (13)의 (ii)에 의해 $|r^n|$의 급수도 수렴한다. 곧 $(r^n)_{n \ge 0}$의 급수는 절대수렴한다. [[absolute-convergence-of-cauchy-product]]의 (1)에 의해 코시 곱의 급수는 절대수렴하고 그 합은 $(1 - r)^{-1}(1 - r)^{-1}$이다. (K12)의 (vi)과 [[power-of-a-real-number]]의 (1)에 의해 이것은 $\bigl((1 - r)^2\bigr)^{-1} = \dfrac{1}{(1 - r)^2}$이다. 여기서 $1 - r \ne 0$은 $r \le |r| < 1$에서 나온다([[absolute-value]]의 (6)).

**(2)의 준비.** $0$ 이상인 정수 $n$에 대하여 $a_n = \bigl(\sqrt{n + 1}\bigr)^{-1}$로 두자. 다음이 성립한다.

- (가) $0 < a_n$이다. $0 < n + 1$이므로 [[square-root-exists]]의 (1)에 의해 $0 < \sqrt{n + 1}$이고, [[order-properties-of-reals]]의 (6)의 (i)에 의해 그 역수는 양수이다.
- (나) $a_{n+1} < a_n$이다. $n + 1 < n + 2$이므로 [[square-root-exists]]의 (2)에 의해 $\sqrt{n + 1} < \sqrt{n + 2}$이고, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 역수의 순서가 바뀐다.
- (다) $0 \le m \le n$인 정수 $m$에서 $\sqrt{m + 1} \le \sqrt{n + 1}$이다([[square-root-exists]]의 (2)와 같으면 같다는 것). 또 $1 \le \sqrt{n + 1} \le n + 1$이다. $1 \cdot 1 = 1$이므로 [[square-root-exists]]의 (1)의 유일성에 의해 $\sqrt{1} = 1$이고, $1 \le n + 1$에서 $1 \le \sqrt{n + 1}$이다. 이 부등식에 $0 \le \sqrt{n + 1}$을 곱하면 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $\sqrt{n + 1} \le \sqrt{n + 1}\sqrt{n + 1} = n + 1$이다. 따라서 (6)의 (ii)(같으면 역수도 같다)에 의해 $(n + 1)^{-1} \le a_n$이다.
- (라) 자연수 $j$에서 $a_{j-1} = (\sqrt{j})^{-1}$이고, $j$번째 항이 $a_{j-1}$인 수열은 $0$으로 수렴한다. [[basic-limits]]의 (2)에 의해 $j^{-1}$은 $0$으로 수렴하고, [[limit-of-absolute-value-and-square-root]]의 (2)에 의해 $\sqrt{j^{-1}}$은 $\sqrt{0} = 0$으로 수렴한다. [[square-root-exists]]의 (2)에 의해 $\sqrt{j}\,\sqrt{j^{-1}} = \sqrt{j \cdot j^{-1}} = \sqrt{1} = 1$이므로 (K8)에 의해 $\sqrt{j^{-1}} = (\sqrt{j})^{-1} = a_{j-1}$이다.
- (마) [[power-of-a-real-number]]의 (5)와 [[absolute-value]]의 (4), (1)에 의해 $|x_n| = |(-1)^n|\, a_n = a_n$이다.

**(2)의 (i)의 증명.** $(x_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 항은 $x_{j-1} = (-1)^{j-1} a_{j-1}$이다. [[power-of-a-real-number]]의 (1)에 의해 $(-1)^j = (-1)^{j-1} \cdot (-1)$이므로 $(-1)^{j-1} = -(-1)^j$이고, $x_{j-1} = -\bigl((-1)^j a_{j-1}\bigr)$이다. (나)와 (라)에 의해 $j$번째 항이 $a_{j-1}$인 수열은 단조감소이고 $0$으로 수렴하므로, [[alternating-series-test|교대급수 판정법]]의 (1)에 의해 $j$번째 항이 $(-1)^j a_{j-1}$인 수열의 급수는 수렴하고, [[linearity-of-series]]의 (2)($c = -1$)에 의해 한 칸 옮긴 수열의 급수도 수렴한다. 한편 (마)와 (다)에 의해 그 항의 절댓값은 $a_{j-1} \ge j^{-1} \ge 0$이고, [[harmonic-series-diverges|조화급수]]는 발산하므로 [[comparison-test|비교 판정법]]의 (3)에 의해 절댓값의 급수는 발산한다.

**(2)의 (ii)의 증명.** $0 \le i \le n$이면 [[power-of-a-real-number]]의 (2)의 (i)에 의해 $(-1)^i (-1)^{n-i} = (-1)^n$이므로 $x_i x_{n-i} = (-1)^n a_i a_{n-i}$이다. [[cauchy-product]]의 (5)의 (i)에 의해 $z_n = (-1)^n \sum_{i=0}^{n} a_i a_{n-i}$이다. (다)를 $m = i$와 $m = n - i$에 쓰면 $\sqrt{i + 1} \le \sqrt{n + 1}$이고 $\sqrt{n - i + 1} \le \sqrt{n + 1}$이므로, [[order-properties-of-reals]]의 (11)의 (i)에 의해 $\sqrt{i + 1}\sqrt{n - i + 1} \le \sqrt{n + 1}\sqrt{n + 1} = n + 1$이다. 왼변은 (가)에 의해 양수이므로 (K12)의 (vi)과 (6)의 (ii)에 의해
$$
\begin{aligned}
a_i a_{n-i} &= \bigl(\sqrt{i + 1}\sqrt{n - i + 1}\bigr)^{-1} \\
&\ge (n + 1)^{-1}
\end{aligned}
$$
이다. [[cauchy-product]]의 (5)의 (ii)와 (iv)에 의해 $\sum_{i=0}^{n} a_i a_{n-i} \ge (n + 1)(n + 1)^{-1} = 1$이다. 이 합은 양수이므로 [[absolute-value]]의 (4), (1)과 [[power-of-a-real-number]]의 (5)에 의해 $|z_n| = \sum_{i=0}^{n} a_i a_{n-i} \ge 1$이다.

**(2)의 (iii)의 증명.** $(z_n)_{n \ge 0}$의 급수가 수렴한다면, 한 칸 옮긴 수열의 급수가 수렴하므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 $j$번째 항이 $z_{j-1}$인 수열은 $0$으로 수렴한다. 극한의 정의를 $\varepsilon = 1$에 쓰면 어떤 $j$에서 $|z_{j-1}| < 1$인데, 이것은 (ii)와 함께 성립하지 않는다([[order-properties-of-reals]]의 (1)의 (i)). 따라서 발산한다.

**(3)의 증명.** $(y_n)_{n \ge 0}$을 한 칸 옮긴 수열은 모든 항이 $1$인 상수 수열이고, [[basic-limits]]의 (1)에 의해 $1$로 수렴하므로 [[terms-of-convergent-series-tend-to-zero|항에 관한 정리]]의 (2)에 의해 그 급수는 발산한다. [[cauchy-product]]의 (1)에 의해 $z_0 = x_0 y_0 = 1$이다. $n \ge 1$이면 [[series-indexed-from-zero]]의 (3)과 (4)로 $z_n$의 합을 $i = 1$에서 나누고, $i \ge 2$인 항은 $x_i = 0$이어서 $0$이므로([[linearity-and-order-of-finite-sums]]의 (2)와 (8))
$$
z_n = x_0 y_n + x_1 y_{n-1} + 0 = 1 - 1 = 0
$$
이다. 따라서 [[series-indexed-from-zero]]의 (3)과 위의 계산에 의해 $0$ 이상인 모든 $m$에서 $\sum_{n=0}^{m} z_n = z_0 + \sum_{n=1}^{m} z_n = 1 + 0 = 1$이고, 부분합 수열이 상수 수열이므로([[basic-limits]]의 (1)) 코시 곱의 급수는 $1$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[공비가 1/2 인 등비급수의 코시 곱]
$r = 1/2$이면 (1)에 의해 $\sum_{n=0}^{\infty} (n + 1)(1/2)^n = \bigl((1/2)^2\bigr)^{-1} = 4$입니다. 처음 다섯 항은 $1$, $1$, $3/4$, $1/2$, $5/16$이고 부분합은 $1$, $2$, $2.75$, $3.25$, $3.5625$로 $4$를 향해 늘어납니다. (1)의 $n$번째 항이 $(n + 1) r^n$인 것은, 첨자의 합이 $n$인 곱 $r^i r^{n-i}$가 $i = 0, 1, \dots, n$의 $n + 1$개이기 때문입니다.
:::

:::example[(2)의 코시 곱의 처음 세 항]
$a_0 = 1$, $a_1 = (\sqrt{2})^{-1}$, $a_2 = (\sqrt{3})^{-1}$이므로 $z_0 = a_0 a_0 = 1$, $z_1 = -(a_0 a_1 + a_1 a_0) = -2(\sqrt{2})^{-1} = -\sqrt{2}$, $z_2 = a_0 a_2 + a_1 a_1 + a_2 a_0 = 2(\sqrt{3})^{-1} + 1/2$입니다. [[square-root-exists]]의 (2)에 의해 $1 < 2$에서 $1 < \sqrt{2}$이고, $3 < 4$에서 $\sqrt{3} < \sqrt{4} = 2$이므로 $2(\sqrt{3})^{-1} > 1$이어서 $z_2 > 3/2$입니다. 세 항 모두 절댓값이 $1$ 이상입니다. 한편 $x_n$ 자체는 $1$, $-0.707\ldots$, $0.577\ldots$로 작아지고 있습니다.
:::

## 확인 질문

:::check[$\sum_{n=0}^{\infty} (n + 1)(-1/2)^n$은 얼마인가?]
$|-1/2| < 1$이므로 (1)에 의해 $\bigl((1 + 1/2)^2\bigr)^{-1} = (9/4)^{-1} = 4/9$입니다.
:::

:::check[(3)에서 $y_n = 1$ 대신 $y_n = n + 1$로 바꾸면 코시 곱의 급수는 어떻게 되는가?]
$z_0 = 1 \cdot 1 = 1$이고, $n \ge 1$이면 $z_n = 1 \cdot (n + 1) + (-1) \cdot n = 1$입니다. 모든 항이 $1$이어서 $0$으로 가지 않으므로 코시 곱의 급수는 발산합니다. 다항식으로는 $(1 - t)(1 + 2t + 3t^2 + \cdots) = 1 + t + t^2 + \cdots$입니다.
:::
