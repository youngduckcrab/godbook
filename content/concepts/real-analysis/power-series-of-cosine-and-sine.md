---
title: 코사인과 사인의 멱급수
title_en: Power Series of Cosine and Sine
aliases: [코사인의 멱급수, 사인의 멱급수, 코사인의 테일러 급수, power series of cosine, power series of sine, Maclaurin series of sine and cosine]
kind: theorem
field: real-analysis
msc: ["26A09", "40A30"]
level: undergrad
summary: 0 이상인 정수 n 에서 c_n = Re(iⁿ)/n!, s_n = Im(iⁿ)/n! 로 두면 c_2k = (−1)ᵏ/(2k)!, s_2k+1 = (−1)ᵏ/(2k+1)! 이고 나머지는 0 이다. 중심이 0 이고 계수가 이것들인 두 멱급수는 모든 실수에서 수렴하고, 각각 cos 와 sin 을 나타낸다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, real-valued-function, even-and-odd, series-indexed-from-zero, factorial-from-zero, exponential-power-series, power-series, radius-of-convergence, algebra-of-power-series, complex-number, complex-field, power-of-a-complex-number, complex-exponential-function, cosine-and-sine]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (iv) (p.164)와 그 증명 (p.165); 11.4.4절 Exercises, Exercise 11.4.1 (p.168)
    checked: original
    note: "출처의 Proposition 11.4.2 (iv)(p.164)는 모든 복소수 z 에서 cos(z) = Σ_{k=0}^∞ (−1)ᵏ z^{2k}/(2k)!, sin(z) = Σ_{k=0}^∞ (−1)ᵏ z^{2k+1}/(2k + 1)! 이고, 증명(p.165)은 'The computation of the power series for both is left as an exercise' 라고 적으며, 같은 계산이 Exercise 11.4.1(p.168)이다. 출처의 꼴은 계수가 0 인 항을 적지 않고 2k, 2k + 1 로 번호를 다시 붙인 것이고, 이 항목의 (1)이 그 계수이다. 예시 '계수가 0 이 아닌 처음 몇 항'은 출처 (iv)의 처음 몇 항을 적은 것이다. 이 항목은 실수에서만 진술하고, 계수가 0 인 항을 그대로 둔 멱급수(중심 0, 계수 (c_n)_{n≥0}, (s_n)_{n≥0})로 적어 이 사이트의 멱급수와 수렴 반지름의 말에 맞춘다. 증명은 복소 지수함수의 실수부·허수부의 급수에서 바로 얻는다. '계수가 0 인 항을 빼고 번호를 다시 붙이면 다른 멱급수가 되는 예'의 x = −1 에서의 급수 Σ 1/(2k)! 는 출처 Exercise 11.4.9(p.168)가 멱급수를 구하라고 하는 쌍곡코사인 cosh 의 1 에서의 값과 같은 대상이다(이 사이트에는 cosh 이 없다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 어림 (4)의 증명 통독, cos 1·cos 2·x/3 ≤ sin x 와 cos(1/2) 예의 값 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수와 그 중심, 계수, $x$에서의 수렴과 합은 [[power-series]]의 것이고, 모든 실수에서 수렴하는 멱급수와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이다. 0부터 번호가 붙은 수열은 [[series-indexed-from-zero]], $0$ 이상인 정수의 계승은 [[factorial-from-zero]], 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다. 허수단위 $i$와 $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 복소수의 거듭제곱 $i^n$은 [[power-of-a-complex-number]]의 것이고, 코사인과 사인은 [[cosine-and-sine|코사인과 사인]]의 것이다.

**계수.** $0$ 이상인 정수 $n$에서
$$
\begin{aligned}
c_n &= \operatorname{Re}(i^n)\,(n!)^{-1}, \\
s_n &= \operatorname{Im}(i^n)\,(n!)^{-1}
\end{aligned}
$$
으로 정한 0부터 번호가 붙은 수열 $(c_n)_{n \ge 0}$, $(s_n)_{n \ge 0}$을 생각한다. 이 두 이름은 이 항목과 이 항목을 인용하는 곳에서 쓴다.

다음이 성립한다.

1. (계수의 값) $0$ 이상인 모든 정수 $k$에서
   $$
   \begin{aligned}
   c_{2k} &= (-1)^k \bigl((2k)!\bigr)^{-1}, \\
   c_{2k+1} &= 0, \\
   s_{2k} &= 0, \\
   s_{2k+1} &= (-1)^k \bigl((2k + 1)!\bigr)^{-1}
   \end{aligned}
   $$
   이다. $0$ 이상인 모든 정수 $n$은 어떤 $0$ 이상인 정수 $k$에 대하여 $2k$이거나 $2k + 1$이므로, 이것으로 모든 계수가 정해진다.
2. (멱급수) 중심이 $0$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수와 중심이 $0$이고 계수가 $(s_n)_{n \ge 0}$인 멱급수는 모두 모든 실수에서 수렴하는 멱급수이고, 모든 실수 $x$에서
   $$
   \begin{aligned}
   \cos x &= \sum_{n=0}^{\infty} c_n x^n, \\
   \sin x &= \sum_{n=0}^{\infty} s_n x^n
   \end{aligned}
   $$
   이다. 따라서 $\cos : \mathbb{R} \to \mathbb{R}$와 $\sin : \mathbb{R} \to \mathbb{R}$는 각각 이 두 멱급수가 [[radius-of-convergence]]의 (7)의 $I = \mathbb{R}$ 위에 나타내는 함수이다.
:::

:::english
Power series with their centers and coefficients, and convergence and sums at $x$, are those of the entry on power series; power series converging at every real number and the function represented by a power series on $I$ are those of the entry on the radius of convergence. Sequences indexed from zero, factorials of nonnegative integers, and powers of real numbers are those of their entries. The imaginary unit $i$, $\operatorname{Re}$, and $\operatorname{Im}$ are those of the entry on complex numbers, powers $i^n$ are those of the entry on powers of complex numbers, and cosine and sine are those of their entry.

**Coefficients.** Consider the sequences indexed from zero $(c_n)_{n \ge 0}$ and $(s_n)_{n \ge 0}$ defined for nonnegative integers $n$ by
$$
\begin{aligned}
c_n &= \operatorname{Re}(i^n)\,(n!)^{-1}, \\
s_n &= \operatorname{Im}(i^n)\,(n!)^{-1}.
\end{aligned}
$$
These two names are used in this entry and where it is cited.

The following hold.

1. (Values of the coefficients) For every nonnegative integer $k$,
   $$
   \begin{aligned}
   c_{2k} &= (-1)^k \bigl((2k)!\bigr)^{-1}, \\
   c_{2k+1} &= 0, \\
   s_{2k} &= 0, \\
   s_{2k+1} &= (-1)^k \bigl((2k + 1)!\bigr)^{-1}.
   \end{aligned}
   $$
   Every nonnegative integer $n$ equals $2k$ or $2k + 1$ for some nonnegative integer $k$, so this determines all coefficients.
2. (Power series) The power series with center $0$ and coefficients $(c_n)_{n \ge 0}$ and the power series with center $0$ and coefficients $(s_n)_{n \ge 0}$ both converge at every real number, and for every real number $x$,
   $$
   \begin{aligned}
   \cos x &= \sum_{n=0}^{\infty} c_n x^n, \\
   \sin x &= \sum_{n=0}^{\infty} s_n x^n.
   \end{aligned}
   $$
   Hence $\cos : \mathbb{R} \to \mathbb{R}$ and $\sin : \mathbb{R} \to \mathbb{R}$ are the functions represented by these two power series on $I = \mathbb{R}$ in the sense of item (7) of the entry on the radius of convergence.
:::

## 직관

[[complex-exponential-function|복소 지수함수]]는 급수 $\sum (ix)^n / n!$로 정의되었고, 그 항은 $1,\ ix,\ -x^2/2,\ -ix^3/6,\ x^4/24, \dots$처럼 $n$이 짝수인 항은 허수부가 $0$이고 $n$이 홀수인 항은 실수부가 $0$입니다. 코사인은 합의 실수부, 사인은 합의 허수부이므로, 짝수 번째 항만 모은 급수가 $\cos x$, 홀수 번째 항의 허수부만 모은 급수가 $\sin x$입니다. 계수 $c_n$, $s_n$은 이 두 무리에 항을 나눈 결과이고, 다른 무리에 간 자리에는 $0$이 적힙니다.

우편물을 두 상자에 나누는 것에 비유할 수 있습니다. 각 항은 실수 상자나 허수 상자 가운데 정확히 한 곳에 들어갑니다. $n$이 짝수이면 $i^n$이 $1$이나 $-1$이어서 실수 상자로, 홀수이면 $i$나 $-i$여서 허수 상자로 갑니다. 이것이 (1)입니다. 비유가 맞지 않는 곳은 합입니다. 무한히 많은 우편물을 나누어 담은 두 상자의 "합계"가 원래 합계의 실수부와 허수부라는 것은 저절로 나오지 않고, 복소 급수가 수렴할 때 실수부의 급수와 허수부의 급수도 수렴한다는 성질([[complex-exponential-function|복소 지수함수]]의 (6))이 필요합니다.

(2)는 수렴 반지름을 따로 계산하지 않습니다. 모든 실수 $x$에서 급수가 수렴한다는 것을 위의 성질로 이미 알기 때문에, [[radius-of-convergence|수렴 반지름]]의 (4)에 의해 "모든 실수에서 수렴하는 멱급수"가 됩니다.

## 증명

:::idea
$\cos x$와 $\sin x$는 $\exp(ix)$의 실수부와 허수부이고, 복소 지수함수의 항목이 그 두 수를 실수 급수 $\sum \operatorname{Re}(i^n) x^n / n!$, $\sum \operatorname{Im}(i^n) x^n / n!$의 합으로 이미 적어 두었다. 이것이 계수가 $c_n$, $s_n$인 멱급수의 $x$에서의 합이다.
:::

:::hint
$i^{2k} = (i^2)^k$이고 $i^2 = -1$입니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)과 (5)를 보세요.
:::

:::hint
멱급수가 모든 실수 $x$에서 수렴하면 [[radius-of-convergence|수렴 반지름]]의 (4)에 의해 모든 실수에서 수렴하는 멱급수입니다.
:::

:::proof
"거듭제곱의 (3)"처럼 쓴 것은 [[power-of-a-complex-number]], "복소수체의 (2)"는 [[complex-field]], "지수함수의 (6)"은 [[complex-exponential-function]], "수렴 반지름의 (4)"는 [[radius-of-convergence]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다.

**1의 증명.** $k$를 $0$ 이상인 정수라 하자. 거듭제곱의 (6)에 의해 $i^2 = -1$이고, 복소수체의 (2)의 (i)에 의해 $-1 = -\iota(1) = \iota(-1)$이다. 거듭제곱의 (3)의 (i)의 $(z^m)^n = z^{mn}$과 (5)에 의해
$$
i^{2k} = (i^2)^k = \iota(-1)^k = \iota\bigl((-1)^k\bigr)
$$
이다. 거듭제곱의 정의 $z^{n+1} = z^n z$에 의해 $i^{2k+1} = \iota\bigl((-1)^k\bigr)\, i$이다. [[complex-number]]의 정의에 의해 $i = (0, 1)$이므로 $\operatorname{Re} i = 0$, $\operatorname{Im} i = 1$이다. 복소수체의 (2)의 (ii)에 의해
$$
\begin{aligned}
\operatorname{Re}(i^{2k}) &= (-1)^k, \\
\operatorname{Im}(i^{2k}) &= 0, \\
\operatorname{Re}(i^{2k+1}) &= (-1)^k \cdot 0 = 0, \\
\operatorname{Im}(i^{2k+1}) &= (-1)^k \cdot 1 = (-1)^k
\end{aligned}
$$
이다((K9)와 (K4)). 계수의 정의에 넣으면 (K9)의 $0a = 0$에 의해 (1)의 네 등식이 나온다. 끝으로 $n$이 $0$ 이상인 정수이면 [[even-and-odd|짝수와 홀수]]의 받아들인 사실에 의해 $n$은 짝수이거나 홀수이므로 어떤 정수 $k$에 대하여 $n = 2k$이거나 $n = 2k + 1$이다. $k < 0$이면 [[prime-number]]의 (Z1)에 의해 $k + 1 \le 0$, 곧 $k \le -1$이고, [[order-properties-of-reals|실수의 순서 성질]]의 (10), (4)의 (iii), (2)의 (i)에 의해 $2k \le -2 < 0$이고 $2k + 1 \le -1 < 0$이어서 $0 \le n$과 어긋난다. 따라서 [[well-ordering-principle]]의 (Z5)에 의해 $0 \le k$이다.

**2의 증명.** 코사인 쪽을 보인다. $x$를 실수라 하자. 뺄셈의 정의와 (K4), 그리고 (K8)의 (ii)에서 나오는 $-0 = 0$에 의해 $x - 0 = x$이므로, 중심이 $0$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수의 $x$에서의 항은 $n$에서의 값이
$$
c_n (x - 0)^n = \operatorname{Re}(i^n)\,(n!)^{-1} x^n
$$
인 0부터 번호가 붙은 수열이다. 지수함수의 (6)을 $y = x$에 쓰면, $n$에서의 값이 $\operatorname{Re}(i^n)\, x^n\,(n!)^{-1}$인 실수 항의 급수는 수렴하고 그 합은 $\operatorname{Re} \exp(ix) = \cos x$이다. (K1)과 (K2)에 의해 두 수열은 모든 $n$에서 값이 같으므로 [[series-indexed-from-zero]]의 진술에 의해 같은 수열이다. 따라서 멱급수는 $x$에서 수렴하고 그 합은 $\cos x$이다. $x$는 아무 실수였으므로 멱급수는 모든 실수 $x$에서 수렴하고, 수렴 반지름의 (4)에 의해 모든 실수에서 수렴하는 멱급수이다. 수렴 반지름의 (7)의 (i)에 의해 $I = \mathbb{R}$이고, 그 (ii)의 함수 $f : \mathbb{R} \to \mathbb{R}$는 모든 실수 $x$에서 $f(x) = \cos x$이므로 [[real-valued-function|실함수]]의 (2)에 의해 $f = \cos$이다. 사인 쪽은 $\operatorname{Re}$를 $\operatorname{Im}$으로, $c_n$을 $s_n$으로, 지수함수의 (6)의 첫 급수를 둘째 급수로 바꾸어 같은 논증을 하면 된다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 0 이 아닌 처음 몇 항]
(1)에 의해 $c_0 = 1$, $c_2 = -1/2$, $c_4 = 1/24$, $c_6 = -1/720$이고 홀수 번째 $c_n$은 $0$이며, $s_1 = 1$, $s_3 = -1/6$, $s_5 = 1/120$이고 짝수 번째 $s_n$은 $0$입니다. 예컨대 $c_4$는 $k = 2$에서 $(-1)^2 (4!)^{-1} = 1/24$이고, $s_3$은 $k = 1$에서 $(-1)^1 (3!)^{-1} = -1/6$입니다. 그래서 (2)의 두 급수는 $1 - x^2/2 + x^4/24 - \cdots$와 $x - x^3/6 + x^5/120 - \cdots$의 꼴이고, 적지 않은 항은 계수가 $0$인 항입니다.
:::

:::example[멱급수로 본 짝과 홀]
실수 $x$와 $0$ 이상인 정수 $n$에서 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $(-x)^n = (-1)^n x^n$이고, 같은 항목의 (5)에 의해 $n$이 짝수이면 $(-1)^n = 1$, 홀수이면 $-1$입니다. (1)에 의해 홀수 번째 $c_n$은 $0$이므로 모든 $n$에서 $c_n (-x)^n = c_n x^n$이고, 짝수 번째 $s_n$은 $0$이므로 모든 $n$에서 $s_n (-x)^n = -s_n x^n$입니다. 따라서 (2)에 의해 $\cos(-x)$는 $\cos x$와 같은 급수의 합이고, $\sin(-x)$는 계수가 $(-s_n)_{n \ge 0}$인 멱급수, 곧 $s$의 멱급수의 상수배의 멱급수의 $x$에서의 합이므로 [[algebra-of-power-series|멱급수의 연산]]의 (1)에 의해 $-\sin x$입니다. 곧 $\cos(-x) = \cos x$이고 $\sin(-x) = -\sin x$이며, 이것은 [[cosine-and-sine|코사인과 사인]]의 (3)과 맞습니다.
:::

:::counterexample[계수가 0 인 항을 빼고 번호를 다시 붙이면 다른 멱급수가 되는 예]
계수가 $0$인 항을 적지 않으면 $\cos x$의 급수는 $1 - x^2/2 + x^4/24 - \cdots$처럼 보입니다. 여기 보이는 수 $1, -1/2, 1/24, \dots$를 차례로 계수로 읽어 "중심이 $0$이고 계수가 $\bigl((-1)^k ((2k)!)^{-1}\bigr)_{k \ge 0}$인 멱급수"를 만들면 $\cos$를 나타내지 않습니다. 이 멱급수의 $x = -1$에서의 항은 $(-1)^k ((2k)!)^{-1} (-1)^k = ((2k)!)^{-1}$입니다. [[factorial-from-zero]]의 (3)에 의해 $k \le 2k$이므로 $0 < k! \le (2k)!$이고, [[order-properties-of-reals|실수의 순서 성질]]의 (6)에 의해 $0 < ((2k)!)^{-1} \le (k!)^{-1}$이며, [[exponential-power-series|지수함수의 멱급수]]의 (1)에 의해 $(k!)^{-1}$의 급수는 수렴하므로 [[series-indexed-from-zero]]의 (10)의 (iii)에 의해 이 급수도 수렴합니다. 같은 (10)의 (ii)에 의해 그 합은 처음 두 항의 합 $1 + 1/2$ 이상입니다. 한편 [[cosine-and-sine|코사인과 사인]]의 (4)에 의해 $\cos(-1) \le 1$이므로 두 값은 다릅니다. $x = 0$에서는 [[power-series|멱급수]]의 (3)에 의해 두 멱급수의 합이 모두 $0$번째 계수 $1$이어서 같습니다.
:::

## 확인 질문

:::check[$s_5$와 $c_6$은 무엇인가?]
$5 = 2 \cdot 2 + 1$이므로 (1)에 의해 $s_5 = (-1)^2 (5!)^{-1} = 1/120$이고, $6 = 2 \cdot 3$이므로 $c_6 = (-1)^3 (6!)^{-1} = -1/720$입니다. 정의대로 계산해도 $i^5 = i$, $i^6 = -1$이어서 같은 값입니다.
:::

:::check[(2)의 두 멱급수의 $x = 0$에서의 합은 무엇이고, 코사인과 사인의 어느 값과 맞는가?]
[[power-series|멱급수]]의 (3)에 의해 중심에서의 합은 $0$번째 계수이므로 $c_0 = \operatorname{Re}(i^0) = 1$과 $s_0 = \operatorname{Im}(i^0) = 0$입니다. 이것은 [[cosine-and-sine|코사인과 사인]]의 (2)의 $\cos 0 = 1$, $\sin 0 = 0$과 맞습니다.
:::
