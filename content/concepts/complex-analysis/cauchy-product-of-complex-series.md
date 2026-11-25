---
title: 복소 급수의 코시 곱
title_en: Cauchy Product of Complex Series
aliases: [복소 코시 곱, 복소 급수의 곱, 복소수판 메르텐스 정리, Cauchy product of complex series, complex Cauchy product, Mertens' theorem for complex series]
kind: theorem
field: complex-analysis
msc: ["30", "40A05"]
level: undergrad
summary: 0부터 번호가 붙은 두 복소수열의 코시 곱을 정의하고, 그 실수부와 허수부가 실수부·허수부 수열의 실수 코시 곱 네 개로 적힌다는 것을 보인다. 이것으로 두 급수가 수렴하고 적어도 하나가 절대수렴하면 코시 곱의 급수가 두 합의 곱으로 수렴한다는 것(메르텐스 정리의 복소수판)과, 둘 다 절대수렴하면 코시 곱의 급수도 절대수렴한다는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, finite-sum-of-reals, series-indexed-from-zero, cauchy-product, mertens-theorem, absolute-convergence-of-cauchy-product, cauchy-product-examples, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-finite-sum, convergence-of-complex-sequences, complex-series, absolute-convergence-of-complex-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "2.6절 More on series, 2.6.4소절 Multiplication of series, Theorem 2.6.5 (p.104), Example 2.6.6 (p.106); 2.6.6소절 Exercise 2.6.2 (p.110)"
    checked: original
    note: "출처 Theorem 2.6.5(Mertens' theorem, p.104)는 실수 급수 Σ_{n=0}^∞ a_n, Σ_{n=0}^∞ b_n 이 각각 A, B 로 수렴하고 적어도 하나가 절대수렴하면 c_n = Σ_{i=0}^n a_i b_{n−i} 의 급수가 AB 로 수렴한다는 것이고, 그 급수를 Cauchy product 라 부른다. (3)은 그 정리의 복소수판이다. 출처는 ε 으로 부분합의 차를 직접 누르지만, 이 항목은 (1)로 실수부와 허수부를 실수 코시 곱 네 개로 적고 실수판 정리(이 사이트의 mertens-theorem)를 네 번 쓴다. 출처 Exercise 2.6.2(p.110)는 두 실수 급수가 절대수렴하면 코시 곱의 급수도 절대수렴함을 보이게 한다. (4)는 그 복소수판이다. 반례 '두 급수가 절대수렴하지 않으면 깨질 수 있는 예'의 허수부 수열 (−1)ⁿ(√(n + 1))⁻¹ 은 출처 Example 2.6.6(p.106)이 조건수렴하는 두 급수의 코시 곱이 발산함을 보이는 수열과 같은 수열이고, 이 항목은 그 수열에 i 를 곱했다."
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.2소절 Complex numbers and limits (p.141); 11.4절 Complex exponential and trigonometric functions, 11.4.1소절 The complex exponential, Proposition 11.4.1 (p.164)"
    checked: original
    note: "출처 11.1.2소절(p.141)은 복소수열의 곱 z_n w_n 의 실수부와 허수부를 x_n s_n − y_n t_n, x_n t_n + y_n s_n 으로 적어 실수의 극한 법칙에 넘긴다. (1)은 같은 방법을 코시 곱의 각 항에 쓴 것이다. 출처 Proposition 11.4.1(p.164)은 복소 지수함수의 지수법칙을 일치 정리(Theorem 11.3.9)로 증명한다. 이 사이트는 그 지수법칙을 이 항목의 (4)로 증명한다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(첫 번호 m 의 정의 재진술과 복소 메르텐스의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 복소수의 절댓값은 [[modulus-of-complex-number]]의 것이다. 0부터 번호가 붙은 복소수열 $(x_n)_{n \ge 0}$은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이고, 범위에서만 정해진 항의 $0$부터의 복소수 합 $\sum_{k=0}^{n}$은 [[complex-finite-sum]]의 것이며, 복소 급수의 수렴과 합 $\sum_{n=0}^{\infty}$는 [[complex-series|복소 급수]], 그 절대수렴은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 것이다. 실수의 0부터 번호가 붙은 수열, 그 급수와 합은 [[series-indexed-from-zero]]의 것이고, 실수 코시 곱은 [[cauchy-product]], 그 급수의 절대수렴은 [[mertens-theorem]]의 진술의 것이다. 합의 첨자로 허수단위와 겹치는 $i$를 쓰지 않는다.

**코시 곱.** $(x_n)_{n \ge 0}$, $(y_n)_{n \ge 0}$을 0부터 번호가 붙은 복소수열이라 하자. $0$ 이상인 정수 $n$과 $0 \le k \le n$인 정수 $k$에서 $n - k$는 $0$ 이상인 정수이므로, $x_k y_{n-k}$는 $0 \le k \le n$에서 정해진 복소수이다. 그 합을
$$
z_n = \sum_{k=0}^{n} x_k y_{n-k}
$$
로 두고, $n$에서의 값이 $z_n$인 0부터 번호가 붙은 복소수열 $(z_n)_{n \ge 0}$을 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 **코시 곱**(Cauchy product)이라 한다. $(z_n)_{n \ge 0}$의 급수를 "코시 곱의 급수"라 한다. 모든 $x_n$, $y_n$이 실수인 복소수이면 이것은 아래 (2)에 의해 [[cauchy-product|코시 곱]]의 실수 코시 곱을 $\iota$로 옮긴 것과 같다.

다음이 성립한다. 아래에서 $(z_n)_{n \ge 0}$은 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 코시 곱이고, $0$ 이상인 정수 $n$에서 $a_n = \operatorname{Re} x_n$, $b_n = \operatorname{Im} x_n$, $c_n = \operatorname{Re} y_n$, $d_n = \operatorname{Im} y_n$으로 쓴다. $(a_n)_{n \ge 0}$, $(b_n)_{n \ge 0}$, $(c_n)_{n \ge 0}$, $(d_n)_{n \ge 0}$은 0부터 번호가 붙은 실수열이다.

1. (실수부와 허수부) $z_0 = x_0 y_0$이다. $0$ 이상인 모든 정수 $n$에서
   $$
   \begin{aligned}
   \operatorname{Re} z_n &= \sum_{k=0}^{n} a_k c_{n-k} - \sum_{k=0}^{n} b_k d_{n-k}, \\
   \operatorname{Im} z_n &= \sum_{k=0}^{n} a_k d_{n-k} + \sum_{k=0}^{n} b_k c_{n-k}
   \end{aligned}
   $$
   이다. 오른쪽의 네 합은 각각 $(a_n)_{n \ge 0}$과 $(c_n)_{n \ge 0}$, $(b_n)_{n \ge 0}$과 $(d_n)_{n \ge 0}$, $(a_n)_{n \ge 0}$과 $(d_n)_{n \ge 0}$, $(b_n)_{n \ge 0}$과 $(c_n)_{n \ge 0}$의 실수 코시 곱의 $n$에서의 값이다.
2. (실수 코시 곱과의 일치) $(p_n)_{n \ge 0}$, $(q_n)_{n \ge 0}$이 0부터 번호가 붙은 실수열이고 모든 $n$에서 $x_n = \iota(p_n)$, $y_n = \iota(q_n)$이면, $0$ 이상인 모든 정수 $n$에서 $z_n = \iota\bigl(\sum_{k=0}^{n} p_k q_{n-k}\bigr)$이다. 오른쪽의 합은 $(p_n)_{n \ge 0}$과 $(q_n)_{n \ge 0}$의 실수 코시 곱의 $n$에서의 값이다.
3. (**메르텐스 정리의 복소수판**) $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수가 수렴하고 그 가운데 적어도 하나가 절대수렴하면, 코시 곱 $(z_n)_{n \ge 0}$의 급수도 수렴하고
   $$
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr)
   $$
   이다.
4. (절대수렴) $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수가 모두 절대수렴한다고 하자. $n$에서의 값이 $|x_n|$인 실수열과 $|y_n|$인 실수열의 실수 코시 곱을 $(w_n)_{n \ge 0}$이라 하면, $0$ 이상인 모든 정수 $n$에서 $|z_n| \le w_n$이다. 코시 곱 $(z_n)_{n \ge 0}$의 급수는 절대수렴하고
   $$
   \begin{gathered}
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr), \\
   \sum_{n=0}^{\infty} |z_n| \le \Bigl( \sum_{n=0}^{\infty} |x_n| \Bigr) \Bigl( \sum_{n=0}^{\infty} |y_n| \Bigr)
   \end{gathered}
   $$
   이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers where complex numbers are required, and the form $a + bi$ are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. Complex sequences $(x_n)_{n \ge 0}$ indexed from zero are those of the entry on convergence of complex sequences; sums from zero $\sum_{k=0}^{n}$ of complex terms defined on a range are those of the entry on finite sums of complex numbers; convergence and sums $\sum_{n=0}^{\infty}$ of complex series are those of the entry on complex series, and their absolute convergence is that of the entry on absolute convergence of complex series. Real sequences indexed from zero, their series, and sums are those of the entry on sequences indexed from zero; the real Cauchy product is that of the entry on Cauchy products, and absolute convergence of its series is that of the statement of Mertens' theorem. The letter $i$, which would clash with the imaginary unit, is not used as a summation index.

**Cauchy product.** Let $(x_n)_{n \ge 0}$, $(y_n)_{n \ge 0}$ be complex sequences indexed from zero. For an integer $n \ge 0$ and an integer $k$ with $0 \le k \le n$, $n - k$ is an integer $\ge 0$, so $x_k y_{n-k}$ is a complex number defined for $0 \le k \le n$. Let
$$
z_n = \sum_{k=0}^{n} x_k y_{n-k},
$$
and call the complex sequence $(z_n)_{n \ge 0}$ indexed from zero whose value at $n$ is $z_n$ the **Cauchy product** of $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$. The series of $(z_n)_{n \ge 0}$ is called "the series of the Cauchy product". If all $x_n$, $y_n$ are real complex numbers, then by (2) below this is the real Cauchy product of the entry on Cauchy products carried over by $\iota$.

The following hold. Below, $(z_n)_{n \ge 0}$ is the Cauchy product of $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$, and for integers $n \ge 0$ we write $a_n = \operatorname{Re} x_n$, $b_n = \operatorname{Im} x_n$, $c_n = \operatorname{Re} y_n$, $d_n = \operatorname{Im} y_n$. Then $(a_n)_{n \ge 0}$, $(b_n)_{n \ge 0}$, $(c_n)_{n \ge 0}$, $(d_n)_{n \ge 0}$ are real sequences indexed from zero.

1. (Real and imaginary parts) $z_0 = x_0 y_0$. For every integer $n \ge 0$,
   $$
   \begin{aligned}
   \operatorname{Re} z_n &= \sum_{k=0}^{n} a_k c_{n-k} - \sum_{k=0}^{n} b_k d_{n-k}, \\
   \operatorname{Im} z_n &= \sum_{k=0}^{n} a_k d_{n-k} + \sum_{k=0}^{n} b_k c_{n-k}.
   \end{aligned}
   $$
   The four sums on the right are the values at $n$ of the real Cauchy products of $(a_n)_{n \ge 0}$ and $(c_n)_{n \ge 0}$, of $(b_n)_{n \ge 0}$ and $(d_n)_{n \ge 0}$, of $(a_n)_{n \ge 0}$ and $(d_n)_{n \ge 0}$, and of $(b_n)_{n \ge 0}$ and $(c_n)_{n \ge 0}$, respectively.
2. (Agreement with the real Cauchy product) If $(p_n)_{n \ge 0}$, $(q_n)_{n \ge 0}$ are real sequences indexed from zero and $x_n = \iota(p_n)$, $y_n = \iota(q_n)$ for all $n$, then $z_n = \iota\bigl(\sum_{k=0}^{n} p_k q_{n-k}\bigr)$ for every integer $n \ge 0$. The sum on the right is the value at $n$ of the real Cauchy product of $(p_n)_{n \ge 0}$ and $(q_n)_{n \ge 0}$.
3. (**Mertens' theorem for complex series**) If the series of $(x_n)_{n \ge 0}$ and of $(y_n)_{n \ge 0}$ converge and at least one of them converges absolutely, then the series of the Cauchy product $(z_n)_{n \ge 0}$ also converges, and
   $$
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr).
   $$
4. (Absolute convergence) Suppose the series of $(x_n)_{n \ge 0}$ and of $(y_n)_{n \ge 0}$ both converge absolutely. If $(w_n)_{n \ge 0}$ is the real Cauchy product of the real sequences whose values at $n$ are $|x_n|$ and $|y_n|$, then $|z_n| \le w_n$ for every integer $n \ge 0$. The series of the Cauchy product $(z_n)_{n \ge 0}$ converges absolutely, and
   $$
   \begin{gathered}
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr), \\
   \sum_{n=0}^{\infty} |z_n| \le \Bigl( \sum_{n=0}^{\infty} |x_n| \Bigr) \Bigl( \sum_{n=0}^{\infty} |y_n| \Bigr).
   \end{gathered}
   $$
:::

## 직관

두 다항식을 곱할 때 $t^n$의 계수는 차수의 합이 $n$인 계수들의 곱을 모두 더한 것입니다. 코시 곱의 $z_n$이 바로 그 꼴이어서, 두 급수의 항을 "차수의 합이 $n$인 곱"끼리 묶어 더한 것이 코시 곱의 급수입니다. 유한 개의 항만 $0$이 아닐 때는 이 묶음이 분배법칙 그 자체이므로 합이 두 합의 곱이 됩니다(아래 예시). 항이 끝없이 이어지면 묶는 순서를 바꾼 것이 합을 바꿀 수 있어, 가정이 필요합니다.

복소수의 곱은 실수부와 허수부로 $(a + bi)(c + di) = (ac - bd) + (ad + bc) i$입니다. 그래서 $z_n$의 실수부와 허수부는 실수부·허수부 수열끼리의 실수 코시 곱 네 개로 적히고((1)), 급수와 멱급수 강의의 [[mertens-theorem|메르텐스 정리]]를 그 넷에 쓰면 복소 급수의 정리가 됩니다. 적어도 하나가 절대수렴한다는 가정은 네 쌍마다 한쪽이 절대수렴하는 데 쓰입니다. $(x_n)_{n \ge 0}$이 절대수렴하면 $(a_n)_{n \ge 0}$과 $(b_n)_{n \ge 0}$이 절대수렴하고, 네 쌍의 첫째 수열은 늘 이 둘 가운데 하나입니다. $(y_n)_{n \ge 0}$ 쪽이면 둘째 수열이 늘 $(c_n)_{n \ge 0}$이나 $(d_n)_{n \ge 0}$입니다.

(4)의 부등식 $|z_n| \le w_n$은 각 항을 절댓값으로 바꾼 것이 원래 항보다 작지 않다는 삼각부등식입니다. 그래서 절댓값끼리의 실수 코시 곱의 급수가 수렴하면 비교 판정법으로 $(z_n)_{n \ge 0}$의 급수가 절대수렴합니다.

## 증명

:::idea
복소수 곱의 실수부·허수부 공식으로 $\operatorname{Re} z_n$, $\operatorname{Im} z_n$을 실수 코시 곱 네 개로 쓰고, 실수판 메르텐스 정리를 네 번 쓴 뒤 [[complex-series|복소 급수]]의 (2)로 합친다. 절대수렴은 항마다의 삼각부등식과 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 비교 판정법으로 얻는다.
:::

:::hint
$x$ 쪽이 절대수렴하면 $|a_n| \le |x_n|$, $|b_n| \le |x_n|$이므로 $(a_n)_{n \ge 0}$과 $(b_n)_{n \ge 0}$도 절대수렴합니다. 네 실수 코시 곱의 쌍 $(a, c)$, $(b, d)$, $(a, d)$, $(b, c)$의 첫째 자리를 보십시오.
:::

:::hint
$\sum x_n = A + Bi$, $\sum y_n = C + Di$로 두면 두 합의 곱의 실수부는 $AC - BD$, 허수부는 $AD + BC$입니다.
:::

:::proof
"복소 급수 (n)", "절대수렴 (n)", "유한 합 (n)", "복소수 (n)", "복소수체 (n)", "복소 절댓값 (n)"은 [[complex-series]], [[absolute-convergence-of-complex-series]], [[complex-finite-sum]], [[complex-number]], [[complex-field]], [[modulus-of-complex-number]]의 번호이고, "실수 코시 곱 (n)"은 [[cauchy-product]]의 번호, "0부터 (n)"은 [[series-indexed-from-zero]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이다. $0$ 이상인 정수 $n$과 $0 \le k \le n$인 정수 $k$에서 (Z7)에 의해 $0 \le n - k$이다([[prime-number]], [[well-ordering-principle]]). 코시 곱 $(z_n)_{n \ge 0}$과 실수열 $(a_n)_{n \ge 0}$ 등이 있다는 것은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (6)과 [[series-indexed-from-zero]]의 정의(값으로 정한 0부터 번호가 붙은 수열)에 의한다. 범위에서만 정해진 실수 항의 합은 항으로만 정해진다([[finite-sum-of-reals|실수의 유한 합]]의 범위에서만 정해진 항의 합의 약속과 그 (4)).

**1의 증명.** 유한 합 (8)에 의해 $z_0 = \sum_{k=0}^{0} x_k y_{0-k} = x_0 y_0$이다. $n \ge 0$이라 하자. 유한 합 (8)이 옮긴 (1)에 의해 $\operatorname{Re} z_n = \sum_{k=0}^{n} \operatorname{Re}(x_k y_{n-k})$이고, 복소수 (2)에 의해 $0 \le k \le n$에서
$$
\begin{aligned}
\operatorname{Re}(x_k y_{n-k}) &= a_k c_{n-k} - b_k d_{n-k}, \\
\operatorname{Im}(x_k y_{n-k}) &= a_k d_{n-k} + b_k c_{n-k}
\end{aligned}
$$
이다. 뺄셈의 정의와 (K9)에 의해 $a_k c_{n-k} - b_k d_{n-k} = (-1)(b_k d_{n-k}) + a_k c_{n-k}$((K1)로 순서를 바꾼다)이므로, 실수 코시 곱 (5)의 (i)을 상수 $-1$에 쓰면
$$
\begin{aligned}
\operatorname{Re} z_n &= (-1) \sum_{k=0}^{n} b_k d_{n-k} \\
&\qquad + \sum_{k=0}^{n} a_k c_{n-k} \\
&= \sum_{k=0}^{n} a_k c_{n-k} - \sum_{k=0}^{n} b_k d_{n-k}
\end{aligned}
$$
이다. 허수부도 같은 방법으로, 실수 코시 곱 (5)의 (i)을 상수 $1$에 쓰고 (K4)의 $1 \cdot t = t$를 쓰면 진술의 식이 나온다. 네 합이 실수 코시 곱의 값이라는 것은 [[cauchy-product|코시 곱]]의 정의(합의 첨자는 이름이므로 $i$ 대신 $k$로 써도 같은 수이다)에 의한다.

**2의 증명.** 복소수체 (2)의 (ii)에 의해 $a_n = p_n$, $b_n = 0$, $c_n = q_n$, $d_n = 0$이다. (K9)에 의해 $0 \le k \le n$에서 $b_k d_{n-k} = 0$, $a_k d_{n-k} = 0$, $b_k c_{n-k} = 0$이고, 실수 코시 곱 (5)의 (iv)를 $a = 0$에 쓰면 이 항들의 합은 $(n + 1) \cdot 0 = 0$이다. (1)과 (K4)에 의해 $\operatorname{Re} z_n = \sum_{k=0}^{n} p_k q_{n-k}$이고 $\operatorname{Im} z_n = 0$이다. 복소수체 (2)의 (iii)에 의해 $z_n = \iota(\operatorname{Re} z_n)$이다.

**3의 증명.** $X = \sum_{n=0}^{\infty} x_n$, $Y = \sum_{n=0}^{\infty} y_n$이라 하자. 복소 급수 (2)를 $m = 0$에 쓰면 $(a_n)_{n \ge 0}$, $(b_n)_{n \ge 0}$, $(c_n)_{n \ge 0}$, $(d_n)_{n \ge 0}$의 급수는 모두 수렴하고, 그 합을 $A$, $B$, $C$, $D$라 하면 $\operatorname{Re} X = A$, $\operatorname{Im} X = B$, $\operatorname{Re} Y = C$, $\operatorname{Im} Y = D$이다.

$(x_n)_{n \ge 0}$의 급수가 절대수렴한다고 하자. 절대수렴 (2)를 $m = 0$에 쓰면 실수 항 $|a_n|$과 $|b_n|$의 급수가 수렴한다. 곧 [[mertens-theorem|메르텐스 정리]]의 진술의 뜻으로 $(a_n)_{n \ge 0}$과 $(b_n)_{n \ge 0}$의 급수가 절대수렴한다. 네 쌍 $\bigl((a_n), (c_n)\bigr)$, $\bigl((b_n), (d_n)\bigr)$, $\bigl((a_n), (d_n)\bigr)$, $\bigl((b_n), (c_n)\bigr)$은 모두 두 급수가 수렴하고 첫째 것이 절대수렴하므로, 메르텐스 정리의 (1)에 의해 네 실수 코시 곱의 급수는 각각 수렴하고 합은 $AC$, $BD$, $AD$, $BC$이다. $(y_n)_{n \ge 0}$의 급수가 절대수렴하면 같은 이유로 $(c_n)_{n \ge 0}$과 $(d_n)_{n \ge 0}$의 급수가 절대수렴하고, 네 쌍의 둘째 것이 절대수렴하므로 같은 결론이 나온다.

(1)에 의해 0부터 번호가 붙은 실수열 $(\operatorname{Re} z_n)_{n \ge 0}$은 $n$에서의 값이 (첫째 쌍의 코시 곱) $-$ (둘째 쌍의 코시 곱)인 수열과 같고, $(\operatorname{Im} z_n)_{n \ge 0}$은 (셋째) $+$ (넷째)인 수열과 같다. 0부터 (9)에 의해 앞의 것의 급수는 수렴하고 합은 $AC - BD$이며, 뒤의 것(상수 $1$을 쓴 꼴과 (K4))의 급수는 수렴하고 합은 $AD + BC$이다. 복소 급수 (2)에 의해 $(z_n)_{n \ge 0}$의 급수는 수렴하고
$$
\begin{aligned}
\operatorname{Re} \sum_{n=0}^{\infty} z_n &= AC - BD, \\
\operatorname{Im} \sum_{n=0}^{\infty} z_n &= AD + BC
\end{aligned}
$$
이다. 복소수 (2)에 의해 $\operatorname{Re}(XY) = AC - BD$이고 $\operatorname{Im}(XY) = AD + BC$이므로, 복소수 (1)에 의해 $\sum_{n=0}^{\infty} z_n = XY$이다.

**4의 증명.** $n$에서의 값이 $|x_n|$, $|y_n|$인 0부터 번호가 붙은 실수열을 $(\alpha_n)_{n \ge 0}$, $(\beta_n)_{n \ge 0}$이라 하자. 복소 절댓값 (1)에 의해 그 값은 $0$ 이상이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|\alpha_n| = \alpha_n$, $|\beta_n| = \beta_n$이다. 가정과 절대수렴의 정의에 의해 $(\alpha_n)_{n \ge 0}$과 $(\beta_n)_{n \ge 0}$의 급수가 수렴하고, 앞 문장에 의해 두 급수는 메르텐스 정리의 진술의 뜻으로 절대수렴한다. [[absolute-convergence-of-cauchy-product|절대수렴하는 급수의 코시 곱]]의 (1)에 의해 그 코시 곱 $(w_n)_{n \ge 0}$의 급수는 수렴하고
$$
\sum_{n=0}^{\infty} w_n = \Bigl( \sum_{n=0}^{\infty} |x_n| \Bigr) \Bigl( \sum_{n=0}^{\infty} |y_n| \Bigr)
$$
이다.

$n \ge 0$이라 하자. 유한 합 (8)이 옮긴 (7)과 복소 절댓값 (3)에 의해
$$
\begin{aligned}
|z_n| &\le \sum_{k=0}^{n} |x_k y_{n-k}| \\
&= \sum_{k=0}^{n} |x_k|\,|y_{n-k}| = w_n
\end{aligned}
$$
이다. 가운데 등호는 항이 같은 범위에서만 정해진 합이 같다는 것이다. 절대수렴 (3)을 $m = 0$과 실수 항 $w_n$에 쓰면 $(z_n)_{n \ge 0}$의 급수는 절대수렴하고 $\sum_{n=0}^{\infty} |z_n| \le \sum_{n=0}^{\infty} w_n$이다. 이것과 앞 문단의 등식이 둘째 부등식이다. 절대수렴 (2)에 의해 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 급수는 수렴하고 둘 다 절대수렴하므로, (3)에 의해 첫째 등식이 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[(1, i, 0, …)과 (1, −i, 0, …)의 코시 곱]
$x_0 = 1$, $x_1 = i$, $y_0 = 1$, $y_1 = -i$이고 $n \ge 2$에서 $x_n = y_n = 0$인 두 0부터 번호가 붙은 복소수열을 봅니다. 코시 곱은
$$
\begin{aligned}
z_0 &= x_0 y_0 = 1, \\
z_1 &= x_0 y_1 + x_1 y_0 = -i + i = 0, \\
z_2 &= x_0 y_2 + x_1 y_1 + x_2 y_0 \\
&= i(-i) = 1
\end{aligned}
$$
이고, $n \ge 3$이면 $0 \le k \le n$인 모든 $k$에서 $k \ge 2$이거나 $n - k \ge 2$이므로 $z_n = 0$입니다. [[complex-series|복소 급수]]의 (4)를 $K = 2$에 쓰고 꼬리가 모든 항이 $0$인 급수라는 것((3))을 쓰면 $\sum_{n=0}^{\infty} z_n = 1 + 0 + 1 = 2$입니다. 같은 방법으로 $\sum x_n = 1 + i$, $\sum y_n = 1 - i$이고 $(1 + i)(1 - i) = 1 - i^2 = 2$이므로 (3)과 맞습니다. 이것은 $(1 + it)(1 - it) = 1 + t^2$이라는 다항식의 곱셈과 같은 계산입니다.
:::

:::counterexample[두 급수가 절대수렴하지 않으면 깨질 수 있는 예]
$0$ 이상인 정수 $n$에서 $x_n = y_n = (-1)^n \bigl(\sqrt{n + 1}\bigr)^{-1} i$로 둡니다. 실수부는 모두 $0$이고 허수부는 [[cauchy-product-examples|코시 곱의 예]]의 (2)의 수열이므로, 그 (2)의 (i)과 [[complex-series|복소 급수]]의 (2)에 의해 두 급수는 수렴하지만, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|x_n|$이 그 실수열의 절댓값과 같아 절대수렴하지 않습니다. (1)에서 $a_n = c_n = 0$이므로 $\operatorname{Im} z_n = 0$이고, $\operatorname{Re} z_n$은 그 실수열과 자기 자신의 실수 코시 곱의 값에 $-1$을 곱한 것입니다. 그 (2)의 (ii)에 의해 $1 \le |\operatorname{Re} z_n| \le |z_n|$이므로 $(z_n)_{n \ge 0}$은 $0$으로 수렴하지 않고, 복소 급수의 (7)에 의해 코시 곱의 급수는 발산합니다. (3)에서 "적어도 하나가 절대수렴한다"는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$x_0 = 1$이고 $n \ge 1$에서 $x_n = 0$인 수열과 $(y_n)_{n \ge 0}$의 코시 곱은 무엇인가?]
$(y_n)_{n \ge 0}$ 자신입니다. $z_n = \sum_{k=0}^{n} x_k y_{n-k}$에서 $k \ge 1$인 항은 $x_k = 0$이라 $0$이므로, [[complex-finite-sum|복소수의 유한 합]]의 (8)의 쪼개기와 (4)의 상수의 합에 의해 $z_n = x_0 y_n = y_n$입니다. $n = 0$이면 $z_0 = x_0 y_0 = y_0$입니다. 이 코시 곱의 급수가 수렴하는 것은 정확히 $(y_n)_{n \ge 0}$의 급수가 수렴할 때이고, 이것은 $(x_n)$의 급수가 절대수렴하고 합이 $1$이므로 (3)과도 맞습니다.
:::

:::check[$x_n = (i/2)^n$, $y_n = (-i/2)^n$일 때 코시 곱의 급수의 합은 무엇인가?]
$4/5$입니다. [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)에 의해 두 급수는 절대수렴하고 합은 $(1 - i/2)^{-1}$, $(1 + i/2)^{-1}$이므로, (4)에 의해 코시 곱의 급수의 합은 그 곱 $\bigl((1 - i/2)(1 + i/2)\bigr)^{-1} = (1 + 1/4)^{-1} = 4/5$입니다. [[complex-conjugate|켤레복소수]]의 (1), (2)에 의해 두 합은 서로의 켤레이고, 그 곱은 [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $|(1 - i/2)^{-1}|^2$이라 실수인 복소수입니다.
:::
