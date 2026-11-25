---
title: 복소 지수함수
title_en: Complex Exponential Function
aliases: [복소수의 지수함수, 지수함수의 멱급수, complex exponential, exponential of a complex number]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 계수가 1/n! 인 복소 멱급수가 모든 복소수에서 수렴하므로, 복소수 z 에서의 값이 그 합인 함수 exp(ℂ 에서 ℂ 로)를 복소 지수함수라 한다. 실수를 옮긴 복소수에서 실수의 지수함수와 같은 값이라는 것, exp(0) = 1, 켤레, 절댓값의 어림, 실수부와 허수부의 급수를 진술한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, factorial-from-zero, complex-finite-sum, series-indexed-from-zero, exponential-function, exponential-power-series, laws-of-exponential-function, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, complex-series, absolute-convergence-of-complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-series-examples]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.1절 The complex exponential (p.163); 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.165)
    checked: original
    note: "출처는 p.163 에서 E(z) = Σ_{k=0}^∞ z^k/k! 가 모든 복소수에서 수렴한다고 적고 e^z = E(z) 로 정의한다. 실수 x 에서 E(x) = eˣ 인 것은 E′ = E, E(0) = 1 인 함수의 유일성(Lebl I 5.4절 또는 피카르 정리)으로 보이고, 'We notice that E(0) = 1' 이라고 적는다. 이 항목은 기호 e^z 와 E 를 쓰지 않고 exp 하나만 쓰며, 실수에서의 일치 (2)를 미분방정식의 유일성 대신 실수 지수함수의 멱급수 전개와 복소 멱급수의 실수 계수 일치로 보인다. 켤레 (4)는 출처가 p.165(Proposition 11.4.2 의 증명)에서 '켤레가 연속함수이므로' 정의에서 나온다고 적는 등식이고, 이 항목은 연속을 쓰지 않고 복소 급수의 켤레 성질로 보인다. 실수 y 에서 exp(iy) 의 실수부를 Re(iⁿ) 의 급수로 쓴 (6)의 둘째 부분은 출처 Proposition 11.4.2 (v)(p.165)의 cos(x) = Re(e^{ix}) 와 (iv)(p.164)의 cos 의 멱급수를 함께 본 것과 같은 계산이고, 출처는 그 멱급수의 계산을 연습문제 11.4.1(p.168)로 둔다."
  - ref: lebl-basic-analysis
    loc: 5.4.2절 The exponential, Proposition 5.4.2 (p.209)
    checked: original
    note: "Lebl I 의 Proposition 5.4.2(p.209)는 E(0) = 1 이고 E′ = E 인 함수 E : ℝ → (0, ∞) 의 존재와 유일성이다. 출처 II 는 실수에서의 일치를 이 명제에 넘기고, 이 항목은 그 길을 쓰지 않는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(연속 증명 통독, 예 (2)–(4)에 경계값, 보조정리 n = 0). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 복소 급수와 그 합 $\sum_{n=m}^{\infty}$는 [[complex-series|복소 급수]], 절대수렴은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]], 복소 멱급수와 모든 복소수에서 수렴하는 복소 멱급수는 [[complex-power-series|복소 멱급수]], 복소 멱급수가 나타내는 함수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이다. 계승 $n!$($0! = 1$)은 [[factorial-from-zero]]의 것이고 $u / n!$은 $u\,\iota(n!)^{-1}$이다. 실수의 지수함수 $\exp : \mathbb{R} \to \mathbb{R}$는 [[exponential-function]]의 것이다.

**복소 지수함수.** [[complex-series-examples|복소 급수의 예]]의 (1)에 의해 중심이 $0$이고 계수가 $\bigl((n!)^{-1}\bigr)_{n \ge 0}$인 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이다. 이 복소 멱급수가 $\mathbb{C}$ 위에 나타내는 함수를 **복소 지수함수**(complex exponential function)라 하고 $\exp : \mathbb{C} \to \mathbb{C}$로 쓴다. 곧 모든 복소수 $z$에서
$$
\exp(z) = \sum_{n=0}^{\infty} \frac{z^n}{n!}
$$
이다. 실수의 지수함수와 같은 글자를 쓰지만, 아래 (2)에 의해 실수 $x$를 복소수 자리에 써서 $\exp(x)$, 곧 $\exp(\iota(x))$라고 읽어도 그 값은 실수의 $\exp(x)$를 $\iota$로 옮긴 것과 같다. 실수 $y$에 대하여 $\exp(iy)$는 $\exp(i\,\iota(y))$이다. 기호 $e^z$는 쓰지 않는다.

다음이 성립한다. 아래에서 $z$는 복소수이고 $x$, $y$는 실수이다.

1. (절대수렴과 절댓값) $(z^n / n!)_{n \ge 0}$의 급수는 절대수렴하고
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} \Bigl| \frac{z^n}{n!} \Bigr| &= \exp(|z|), \\
   |\exp(z)| &\le \exp(|z|)
   \end{aligned}
   $$
   이다. 오른쪽의 $\exp$는 실수의 지수함수이다.
2. (실수의 지수함수와의 일치) $\exp(\iota(x)) = \iota(\exp(x))$이다. 따라서 $\exp(\iota(x))$는 실수인 복소수이고, 그 실수부 $\exp(x)$는 양수이다.
3. ($0$에서의 값) $\exp(0) = 1$이다.
4. (켤레) $\overline{\exp(z)} = \exp(\overline{z})$이다.
5. ($1$을 뺀 것) $n \ge 1$에서 정해진 항 $z^n / n!$의 급수는 수렴하고
   $$
   \begin{aligned}
   \exp(z) - 1 &= \sum_{n=1}^{\infty} \frac{z^n}{n!}, \\
   |\exp(z) - 1| &\le \exp(|z|) - 1
   \end{aligned}
   $$
   이다.
6. (실수부와 허수부의 급수) $n$에서의 값이 $\operatorname{Re}(z^n)\,(n!)^{-1}$인 실수 항의 급수와 $\operatorname{Im}(z^n)\,(n!)^{-1}$인 실수 항의 급수는 수렴하고
   $$
   \begin{aligned}
   \operatorname{Re} \exp(z) &= \sum_{n=0}^{\infty} \frac{\operatorname{Re}(z^n)}{n!}, \\
   \operatorname{Im} \exp(z) &= \sum_{n=0}^{\infty} \frac{\operatorname{Im}(z^n)}{n!}
   \end{aligned}
   $$
   이다. 특히 $z = iy$이면 $0$ 이상인 모든 정수 $n$에서 $\operatorname{Re}\bigl((iy)^n\bigr) = \operatorname{Re}(i^n)\, y^n$이고 $\operatorname{Im}\bigl((iy)^n\bigr) = \operatorname{Im}(i^n)\, y^n$이므로
   $$
   \begin{aligned}
   \operatorname{Re} \exp(iy) &= \sum_{n=0}^{\infty} \frac{\operatorname{Re}(i^n)\, y^n}{n!}, \\
   \operatorname{Im} \exp(iy) &= \sum_{n=0}^{\infty} \frac{\operatorname{Im}(i^n)\, y^n}{n!}
   \end{aligned}
   $$
   이고, 이 두 실수 항의 급수는 수렴한다. $\operatorname{Re}(i^n)$과 $\operatorname{Im}(i^n)$은 [[power-of-a-complex-number]]의 (6)의 표의 값이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the conjugate $\overline{z}$, the modulus, and powers are those of their entries. Complex series and their sums $\sum_{n=m}^{\infty}$ are those of the entry on complex series, absolute convergence is that of its entry, complex power series and complex power series converging at every complex number are those of the entry on complex power series, and the function represented by a complex power series is that of item (7) of the entry on the radius of convergence of complex power series. The factorial $n!$ (with $0! = 1$) is that of the entry on factorials from zero, and $u / n!$ means $u\,\iota(n!)^{-1}$. The real exponential function $\exp : \mathbb{R} \to \mathbb{R}$ is that of its entry.

**Complex exponential function.** By item (1) of the entry on examples of complex series, the complex power series with center $0$ and coefficients $\bigl((n!)^{-1}\bigr)_{n \ge 0}$ converges at every complex number. The function it represents on $\mathbb{C}$ is called the **complex exponential function** and is written $\exp : \mathbb{C} \to \mathbb{C}$. That is, for every complex number $z$,
$$
\exp(z) = \sum_{n=0}^{\infty} \frac{z^n}{n!}.
$$
The same letter as for the real exponential function is used; by (2) below, if a real number $x$ is written where a complex number is required and $\exp(x)$ is read as $\exp(\iota(x))$, its value is the image under $\iota$ of the real $\exp(x)$. For a real number $y$, $\exp(iy)$ means $\exp(i\,\iota(y))$. The symbol $e^z$ is not used.

The following hold. Below, $z$ is a complex number and $x$, $y$ are real numbers.

1. (Absolute convergence and modulus) The series of $(z^n / n!)_{n \ge 0}$ converges absolutely, and
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} \Bigl| \frac{z^n}{n!} \Bigr| &= \exp(|z|), \\
   |\exp(z)| &\le \exp(|z|),
   \end{aligned}
   $$
   where $\exp$ on the right is the real exponential function.
2. (Agreement with the real exponential function) $\exp(\iota(x)) = \iota(\exp(x))$. Hence $\exp(\iota(x))$ is a real complex number whose real part $\exp(x)$ is positive.
3. (Value at $0$) $\exp(0) = 1$.
4. (Conjugate) $\overline{\exp(z)} = \exp(\overline{z})$.
5. (Subtracting $1$) The series of the terms $z^n / n!$ defined for $n \ge 1$ converges, and
   $$
   \begin{aligned}
   \exp(z) - 1 &= \sum_{n=1}^{\infty} \frac{z^n}{n!}, \\
   |\exp(z) - 1| &\le \exp(|z|) - 1.
   \end{aligned}
   $$
6. (Series of the real and imaginary parts) The series of real terms whose value at $n$ is $\operatorname{Re}(z^n)\,(n!)^{-1}$ and the series of real terms whose value at $n$ is $\operatorname{Im}(z^n)\,(n!)^{-1}$ converge, and
   $$
   \begin{aligned}
   \operatorname{Re} \exp(z) &= \sum_{n=0}^{\infty} \frac{\operatorname{Re}(z^n)}{n!}, \\
   \operatorname{Im} \exp(z) &= \sum_{n=0}^{\infty} \frac{\operatorname{Im}(z^n)}{n!}.
   \end{aligned}
   $$
   In particular, if $z = iy$, then $\operatorname{Re}\bigl((iy)^n\bigr) = \operatorname{Re}(i^n)\, y^n$ and $\operatorname{Im}\bigl((iy)^n\bigr) = \operatorname{Im}(i^n)\, y^n$ for every integer $n \ge 0$, so
   $$
   \begin{aligned}
   \operatorname{Re} \exp(iy) &= \sum_{n=0}^{\infty} \frac{\operatorname{Re}(i^n)\, y^n}{n!}, \\
   \operatorname{Im} \exp(iy) &= \sum_{n=0}^{\infty} \frac{\operatorname{Im}(i^n)\, y^n}{n!},
   \end{aligned}
   $$
   and these two series of real terms converge. The values of $\operatorname{Re}(i^n)$ and $\operatorname{Im}(i^n)$ are those in the table of item (6) of the entry on powers of a complex number.
:::

## 직관

실수의 지수함수는 모든 실수 $x$에서 $\sum x^n / n!$로 쓸 수 있었습니다([[exponential-power-series|지수함수의 멱급수]]). 이 식의 $x$ 자리에 복소수를 넣어도 항의 절댓값이 $|z|^n / n!$이어서 급수가 절대수렴하므로, 같은 식을 복소수의 지수함수의 정의로 삼습니다. 실수의 지수함수가 자연로그의 역함수로 정의되었다는 것과는 다른 길이므로, 실수에서 두 정의의 값이 같다는 것을 (2)로 따로 증명합니다.

같은 요리법에 재료만 바꾸는 것에 비유할 수 있습니다. 요리법(급수의 식)은 그대로이고 재료(실수 $x$)를 복소수 $z$로 바꾸었으며, 재료가 실수이면 예전 요리와 같은 맛이 난다는 것이 (2)입니다. 비유가 맞지 않는 곳은 요리법이 늘 통하는지가 따로 보여야 한다는 점입니다. 급수가 모든 복소수에서 수렴한다는 것은 [[complex-series-examples|복소 급수의 예]]의 (1)이 맡습니다.

(4)와 (6)은 급수의 항마다 성립하는 사실을 합으로 옮긴 것입니다. 켤레는 항마다 $\overline{z^n / n!} = \overline{z}^n / n!$이고, 실수부는 항마다 $\operatorname{Re}(z^n) / n!$입니다. $z = iy$이면 $i^n$이 $1, i, -1, -i$를 되풀이하므로 실수부의 급수에는 $n$이 짝수인 항만, 허수부의 급수에는 $n$이 홀수인 항만 남습니다. $y = 0$이면 두 급수의 합은 $1$과 $0$입니다.

## 성질의 증명

:::proof
"복소 급수의 (2)"처럼 쓴 것은 [[complex-series]], "절대수렴의 (2)"는 [[absolute-convergence-of-complex-series]], "복소 멱급수의 (5)"는 [[complex-power-series]], "복소수체의 (2)"는 [[complex-field]], "켤레의 (2)"는 [[complex-conjugate]], "절댓값의 (5)"는 [[modulus-of-complex-number]], "거듭제곱의 (3)"은 [[power-of-a-complex-number]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 괄호를 옮기는 곳은 체의 조건에 의한다.

**정의의 확인.** $0$ 이상인 정수 $n$에서 계수는 $c_n = \iota\bigl((n!)^{-1}\bigr)$이고, 복소수체의 (2)의 (i)에 의해 $\iota\bigl((n!)^{-1}\bigr) = \iota(n!)^{-1}$이므로 $z$에서의 항은 $c_n (z - 0)^n = z^n \iota(n!)^{-1} = z^n / n!$이다. 복소 급수의 예의 (1)에 의해 이 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이므로, [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i), (ii)에서 $D = \mathbb{C}$이고 나타내는 함수 $\exp : \mathbb{C} \to \mathbb{C}$가 정해진다.

**1의 증명.** 위의 항이 [[complex-series-examples|복소 급수의 예]]의 (1)의 $z^n / n!$이므로 그 (1)이 바로 이것이다.

**2의 증명.** 복소 멱급수의 (5)를 $a_0 = 0$, $e_n = (n!)^{-1}$에 쓴다. 복소수체의 (2)의 (i)에 의해 $a = 0 = \iota(0)$이고 $c_n = \iota(e_n)$이다. 원래의 실멱급수는 중심이 $0$이고 계수가 $\bigl((n!)^{-1}\bigr)_{n \ge 0}$인 실멱급수이고, [[exponential-power-series|지수함수의 멱급수]]의 (1)에 의해 실수 $x$에서 수렴하고 그 합은 $\exp(x)$이다. 따라서 복소 멱급수의 (5)의 (ii)에 의해 $\exp(\iota(x)) = \sum_{n=0}^{\infty} c_n (\iota(x) - a)^n = \iota(\exp(x))$이다. 복소수체의 (2)의 (ii)에 의해 그 허수부는 $0$이고 실수부는 $\exp(x)$이며, [[exponential-function]]의 (1)에 의해 $0 < \exp(x)$이다.

**3의 증명.** (2)를 $x = 0$에 쓰면 복소수체의 (2)의 (i)과 [[exponential-function]]의 (1)의 $\exp(0) = 1$에 의해 $\exp(0) = \exp(\iota(0)) = \iota(1) = 1$이다.

**4의 증명.** $t_n = z^n / n!$으로 두자. 켤레의 (2)의 곱과 역수, 켤레의 (4)의 $\overline{\iota(n!)} = \iota(n!)$, 거듭제곱의 (4)에 의해 $\overline{t_n} = \overline{z^n}\; \overline{\iota(n!)}^{\,-1} = \overline{z}^{\,n} / n!$이다. (1)에 의해 $t_n$의 급수는 수렴하므로 복소 급수의 (6)에 의해 $\overline{t_n}$의 급수도 수렴하고 $\sum_{n=0}^{\infty} \overline{z}^{\,n} / n! = \overline{\exp(z)}$이다. 왼쪽은 정의에 의해 $\exp(\overline{z})$이다.

**5의 증명.** $t_n = z^n / n!$로 두면 거듭제곱의 정의와 [[factorial-from-zero]]의 (1)에 의해 $t_0 = 1 / 0! = 1$이다. 복소 급수의 (4)를 $m = 0$, $K = 0$에 쓰고 [[complex-finite-sum]]의 (8)의 $\sum_{n=0}^{0} t_n = t_0$을 쓰면 $n \ge 1$에서 정해진 $t_n$의 급수는 수렴하고 $\exp(z) = t_0 + \sum_{n=1}^{\infty} t_n$이므로 첫 등식이 나온다. 절대수렴의 (2)의 꼬리에 관한 문장을 $K = 0$에 쓰면 $\bigl| \sum_{n=1}^{\infty} t_n \bigr| \le \sum_{n=1}^{\infty} |t_n|$이다. 한편 (1)의 실수 항 $|t_n|$의 급수에 [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 쓰면 $\exp(|z|) = |t_0| + \sum_{n=1}^{\infty} |t_n|$이고 절댓값의 (5)에 의해 $|t_0| = |1| = 1$이므로 $\sum_{n=1}^{\infty} |t_n| = \exp(|z|) - 1$이다.

**6의 증명.** (1)에 의해 $t_n = z^n / n!$의 급수는 수렴하므로 복소 급수의 (2)에 의해 $\operatorname{Re} t_n$의 급수와 $\operatorname{Im} t_n$의 급수가 수렴하고 $\operatorname{Re} \exp(z) = \sum_{n=0}^{\infty} \operatorname{Re} t_n$, $\operatorname{Im} \exp(z) = \sum_{n=0}^{\infty} \operatorname{Im} t_n$이다. 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re} t_n = \operatorname{Re}\bigl(\iota((n!)^{-1})\, z^n\bigr) = (n!)^{-1} \operatorname{Re}(z^n)$이고 허수부도 같다. $z = i\,\iota(y)$이면 거듭제곱의 (3)의 (i)과 (5)에 의해 $z^n = i^n \iota(y)^n = \iota(y^n)\, i^n$이므로, 다시 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re}(z^n) = y^n \operatorname{Re}(i^n)$, $\operatorname{Im}(z^n) = y^n \operatorname{Im}(i^n)$이다. 두 실수 항의 급수는 항이 같으므로 같은 급수이다. $\blacksquare$
:::

## 예시와 반례

:::example[z = i 에서의 실수부와 허수부의 급수]
(6)을 $y = 1$에 쓰면 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)의 표에 의해 $\operatorname{Re}(i^n)$은 $n = 0, 1, 2, 3, 4, 5, \dots$에서 $1, 0, -1, 0, 1, 0, \dots$이고 $\operatorname{Im}(i^n)$은 $0, 1, 0, -1, 0, 1, \dots$입니다. 따라서
$$
\begin{aligned}
\operatorname{Re} \exp(i) &= 1 - \frac{1}{2} + \frac{1}{24} - \cdots, \\
\operatorname{Im} \exp(i) &= 1 - \frac{1}{6} + \frac{1}{120} - \cdots
\end{aligned}
$$
의 꼴이고, 두 급수에는 각각 $n$이 짝수인 항과 홀수인 항만 남습니다. 또 (4)에 의해 $\exp(-i) = \exp(\overline{i}) = \overline{\exp(i)}$입니다.
:::

:::counterexample[z = -1 에서 (5)의 등호가 성립하지 않는 예]
$z = -1$이면 (2)에 의해 $\exp(-1)$은 실수 $\exp(-1)$을 옮긴 것입니다. [[laws-of-exponential-function|지수함수의 성질]]의 (4)에 의해 $1 + 1 < \exp(1)$이므로 $1 < \exp(1)$이고, 같은 항목의 (2)와 [[order-properties-of-reals|실수의 순서 성질]]의 (6)의 (ii)에 의해 $\exp(-1) = \exp(1)^{-1} < 1$입니다. 따라서 (5)의 왼쪽은 $|\exp(-1) - 1| = 1 - \exp(-1)$이고 [[exponential-function]]의 (1)의 $0 < \exp(-1)$에 의해 $1$보다 작습니다. 오른쪽은 $\exp(|-1|) - 1 = \exp(1) - 1$이고 $1$보다 큽니다. 그래서 $z = -1$에서 (5)의 부등식은 등호가 아닙니다. $z = 0$이면 양변이 모두 $0$이어서 등호입니다.
:::

## 확인 질문

:::check[실수 $x$에서 $\exp(\iota(x))$의 허수부와 실수부의 부호는 무엇인가?]
(2)에 의해 허수부는 $0$이고 실수부는 $\exp(x)$여서 양수입니다. 예컨대 $\exp(\iota(-5))$도 실수부가 양수인 실수인 복소수입니다.
:::

:::check[실수 $y$에서 $\operatorname{Re} \exp(iy)$의 급수의 $n = 7$인 항은 무엇인가?]
$7 = 4 \cdot 1 + 3$이므로 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)의 표에서 $\operatorname{Re}(i^7) = 0$이고, 그 항은 $0$입니다. 허수부의 급수의 $n = 7$인 항은 $\operatorname{Im}(i^7) = -1$이므로 $-y^7 / 7!$입니다.
:::
