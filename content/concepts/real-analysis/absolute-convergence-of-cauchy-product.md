---
title: 절대수렴하는 급수의 코시 곱
title_en: Cauchy Product of Absolutely Convergent Series
aliases: [코시 곱의 절대수렴, 절대수렴하는 두 급수의 곱, absolute convergence of the Cauchy product]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 0부터 번호가 붙은 두 수열의 급수가 모두 절대수렴하면 코시 곱의 급수도 절대수렴하고, 그 절댓값의 합은 두 절댓값의 합의 곱 이하이다. 코시 곱의 항의 절댓값은 두 수열의 절댓값의 코시 곱으로 누를 수 있다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, series-and-partial-sums, linearity-of-series, absolute-convergence, alternating-series-test, harmonic-series-diverges, finite-sum-of-reals, linearity-and-order-of-finite-sums, sum-of-a-series, series-indexed-from-zero, cauchy-product, mertens-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.6절 Exercise 2.6.2 (p.110)
    checked: original
    note: "출처 Exercise 2.6.2(p.110, PDF 그림으로 대조)는 Σ_{n=0}^∞ a_n 과 Σ_{n=0}^∞ b_n 이 모두 절대수렴할 때 c_n = a_0 b_n + a_1 b_{n−1} + ⋯ + a_n b_0 의 급수도 절대수렴함을 보이라는 연습문제이다. 출처에 증명은 없다. 이 항목의 (1)의 절대수렴이 그 진술이고, 증명(절댓값의 코시 곱으로 누르고 메르텐스 정리와 비교를 쓰는 것)과 (1)의 합의 부등식, (2)는 이 사이트가 썼다. 반례 '한쪽만 절대수렴하는 두 급수의 코시 곱이 절대수렴하지 않는 예'의 수열 (−1)ⁿ (n + 1)⁻¹ 은 출처 2.5.4절(p.93)과 Example 2.6.4(p.103)의 교대 조화급수를 0 부터 번호를 붙인 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(메르텐스 증명의 구조와 예의 어림 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
0부터 번호가 붙은 수열, 그 유한 합과 급수, 급수의 합 $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이고, 코시 곱은 [[cauchy-product]]의 것이며, 0부터 번호가 붙은 수열의 급수의 절대수렴은 [[mertens-theorem]]의 진술의 것이다. $(x_n)_{n \ge 0}$, $(y_n)_{n \ge 0}$을 0부터 번호가 붙은 수열, $(z_n)_{n \ge 0}$을 그 코시 곱이라 하자.

1. (절대수렴) $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수가 모두 절대수렴하면, 코시 곱 $(z_n)_{n \ge 0}$의 급수도 절대수렴하고
   $$
   \begin{gathered}
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr), \\
   \sum_{n=0}^{\infty} |z_n| \le \Bigl( \sum_{n=0}^{\infty} |x_n| \Bigr) \Bigl( \sum_{n=0}^{\infty} |y_n| \Bigr)
   \end{gathered}
   $$
   이다.
2. (절댓값의 코시 곱으로 누르기) $n$에서의 값이 $|x_n|$인 수열과 $|y_n|$인 수열의 코시 곱을 $(w_n)_{n \ge 0}$이라 하면, $0$ 이상인 모든 정수 $n$에서 $|z_n| \le w_n$이다.
:::

:::english
Sequences indexed from zero, their finite sums and series, and sums of series $\sum_{n=0}^{\infty}$ are as in the entry on sums of sequences indexed from zero; the Cauchy product is as in the entry on the Cauchy product; and absolute convergence of the series of a sequence indexed from zero is as in the statement of the entry on Mertens' theorem. Let $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$ be sequences indexed from zero, and let $(z_n)_{n \ge 0}$ be their Cauchy product.

1. (Absolute convergence) If the series of $(x_n)_{n \ge 0}$ and the series of $(y_n)_{n \ge 0}$ both converge absolutely, then the series of the Cauchy product $(z_n)_{n \ge 0}$ also converges absolutely, and
   $$
   \begin{gathered}
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr), \\
   \sum_{n=0}^{\infty} |z_n| \le \Bigl( \sum_{n=0}^{\infty} |x_n| \Bigr) \Bigl( \sum_{n=0}^{\infty} |y_n| \Bigr) .
   \end{gathered}
   $$
2. (Bounding by the Cauchy product of absolute values) If $(w_n)_{n \ge 0}$ is the Cauchy product of the sequence with value $|x_n|$ at $n$ and the sequence with value $|y_n|$ at $n$, then $|z_n| \le w_n$ for every integer $n \ge 0$.
:::

## 직관

코시 곱의 항 $z_n$은 곱 $x_i y_{n-i}$들의 합이므로, 삼각부등식으로 그 절댓값은 절댓값들의 곱의 합 $w_n$ 이하입니다((2)). 그리고 $w_n$은 항이 $0$ 이상인 두 급수의 코시 곱이므로 [[mertens-theorem|메르텐스 정리]]에 의해 그 급수가 두 절댓값의 합의 곱으로 수렴합니다. 그러면 비교 판정으로 $|z_n|$의 급수도 수렴합니다. 메르텐스 정리가 합을 말해 주고, 이 항목은 거기에 "곱도 절대수렴한다"를 더합니다.

$\sum |z_n|$과 두 절댓값의 합의 곱이 같지 않을 수 있는 까닭은 $z_n$을 이루는 곱들의 부호가 섞이면 삼각부등식에서 등호가 깨지기 때문입니다(아래 예시).

## 증명

:::idea
(2)는 0부터의 합의 삼각부등식이다. (1)은 $(w_n)_{n \ge 0}$에 메르텐스 정리를 쓰고 비교 판정을 쓴다.
:::

:::hint
$(|x_n|)$의 급수는 수렴하고, 그 항의 절댓값의 급수도 같은 급수이므로 절대수렴합니다. 메르텐스 정리의 가정이 $(|x_n|)$과 $(|y_n|)$에 대해 성립합니다.
:::

:::proof
**(2)의 증명.** [[cauchy-product]]의 (5)의 (iii)과 [[absolute-value]]의 (4)에 의해
$$
\begin{aligned}
|z_n| &= \Bigl| \sum_{i=0}^{n} x_i y_{n-i} \Bigr| \\
&\le \sum_{i=0}^{n} |x_i|\,|y_{n-i}| = w_n
\end{aligned}
$$
이다.

**(1)의 증명.** $U = \sum_{n=0}^{\infty} |x_n|$, $V = \sum_{n=0}^{\infty} |y_n|$이라 하자. $n$에서의 값이 $|x_n|$인 수열의 급수는 가정에 의해 수렴하고, [[absolute-value]]의 (1)과 (2)에 의해 $\bigl| |x_n| \bigr| = |x_n|$이므로 절대수렴한다. $|y_n|$의 수열도 같다. 따라서 [[mertens-theorem|메르텐스 정리]]의 (1)에 의해 $(w_n)_{n \ge 0}$의 급수는 수렴하고 $\sum_{n=0}^{\infty} w_n = UV$이다. (2)와 [[absolute-value]]의 (2)에 의해 모든 $n$에서 $0 \le |z_n| \le w_n$이므로, [[series-indexed-from-zero]]의 (10)의 (iii)에 의해 $n$에서의 값이 $|z_n|$인 수열의 급수가 수렴하고 $\sum_{n=0}^{\infty} |z_n| \le \sum_{n=0}^{\infty} w_n = UV$이다. 곧 코시 곱의 급수는 절대수렴한다. 또 $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수는 [[series-indexed-from-zero]]의 (11)에 의해 수렴하고 절대수렴하므로, [[mertens-theorem]]의 (1)에 의해 $\sum_{n=0}^{\infty} z_n = \bigl(\sum_{n=0}^{\infty} x_n\bigr)\bigl(\sum_{n=0}^{\infty} y_n\bigr)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[절댓값의 합이 곱보다 작은 예]
$x_0 = 1$, $x_1 = -1$, $y_0 = y_1 = 1$이고 $n \ge 2$에서 $x_n = y_n = 0$이라 합시다. 코시 곱은 $z_0 = 1$, $z_1 = 1 \cdot 1 + (-1) \cdot 1 = 0$, $z_2 = 1 \cdot 0 + (-1) \cdot 1 + 0 \cdot 1 = -1$이고 $n \ge 3$에서 $z_n = 0$입니다(다항식으로 $(1 - t)(1 + t) = 1 - t^2$). 그래서 $\sum |z_n| = 2$이고 $\bigl(\sum |x_n|\bigr)\bigl(\sum |y_n|\bigr) = 2 \cdot 2 = 4$이어서 (1)의 부등식이 등호가 아닙니다. $z_1$에서 $1$과 $-1$이 서로 지워졌기 때문입니다. 합은 $\sum z_n = 0 = 0 \cdot 2$로 (1)의 등식과 맞습니다.
:::

:::counterexample[한쪽만 절대수렴하는 두 급수의 코시 곱이 절대수렴하지 않는 예]
$x_0 = 1$이고 $n \ge 1$에서 $x_n = 0$이라 하고, $y_n = (-1)^n (n + 1)^{-1}$이라 합시다. 코시 곱은 $z_n = x_0 y_n = y_n$입니다($i \ge 1$인 항은 $x_i = 0$이어서 $0$이고, [[series-indexed-from-zero]]의 (3)과 (4), [[linearity-and-order-of-finite-sums]]의 (2)와 (8)에 의해 그 합은 $0$입니다). $(y_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 항은 $(-1)^{j-1} j^{-1} = -\bigl((-1)^j j^{-1}\bigr)$이고([[power-of-a-real-number]]의 (1)에서 $(-1)^{j} = (-1)^{j-1} \cdot (-1)$), [[alternating-series-test|교대급수 판정법]]의 (4)와 [[linearity-of-series]]의 (2)에 의해 그 급수는 수렴합니다. 그 항의 절댓값은 $j^{-1}$이므로 [[harmonic-series-diverges|조화급수의 발산]]에 의해 절댓값의 급수는 발산합니다. 따라서 $(x_n)_{n \ge 0}$은 절대수렴하고 $(y_n)_{n \ge 0}$은 수렴하지만 절대수렴하지 않으며, 코시 곱 $(z_n)_{n \ge 0} = (y_n)_{n \ge 0}$은 수렴하지만 절대수렴하지 않습니다. (1)에서 "둘 다 절대수렴"을 "하나만 절대수렴"으로 바꿀 수 없다는 것입니다.
:::

## 확인 질문

:::check[$x_n = y_n = (-1/2)^n$일 때 코시 곱의 급수의 합과, (1)이 주는 절댓값의 합의 상계는 무엇인가?]
[[series-indexed-from-zero]]의 (13)의 (ii)에 의해 $\sum x_n = (1 + 1/2)^{-1} = 2/3$이고 $\sum |x_n| = \sum (1/2)^n = 2$입니다([[power-of-a-real-number]]의 (4)). 따라서 (1)에 의해 코시 곱의 급수의 합은 $(2/3)^2 = 4/9$이고 $\sum |z_n| \le 2 \cdot 2 = 4$입니다.
:::

:::check[(2)에서 $|z_n| = w_n$이 되는 경우를 하나 들라.]
모든 $n$에서 $0 \le x_n$이고 $0 \le y_n$이면 $|x_i| = x_i$, $|y_j| = y_j$이므로 $w_n = z_n$이고, $z_n \ge 0$이어서 $|z_n| = z_n = w_n$입니다([[absolute-value]]의 (1), [[cauchy-product]]의 (5)의 (ii)). 이때 (1)의 부등식도 등호가 됩니다.
:::
