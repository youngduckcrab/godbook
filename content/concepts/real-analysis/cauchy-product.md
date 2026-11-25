---
title: 코시 곱
title_en: Cauchy Product
aliases: [급수의 코시 곱, 급수의 곱, 코시 곱의 급수, Cauchy product of series, product of series]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 0부터 번호가 붙은 두 수열 (x_n), (y_n) 의 코시 곱을 n 번째 항이 x_0 y_n + x_1 y_{n−1} + … + x_n y_0 인 수열로 정의한다. 두 수열의 순서를 바꾸어도 같은 곱이고, 곱의 부분합은 한쪽의 항과 다른 쪽의 부분합으로 쓸 수 있다. 0부터의 범위에서만 정해진 항의 합에 대한 선형성·비교·절댓값·상수의 합도 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, series-and-partial-sums, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, sum-of-a-series, series-indexed-from-zero, rearranging-a-finite-sum]
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.4절 Multiplication of series, Theorem 2.6.5 와 그 뒤 문단 (p.104), Theorem 2.6.5 의 증명 첫 식 (p.105). 2.6.5절 Power series, Proposition 2.6.12 (p.108). 2.5.7절 Exercise 2.5.9 (p.98)
    checked: original
    note: "출처는 Theorem 2.6.5(p.104, 메르텐스 정리)의 진술 안에서 c_n = a_0 b_n + a_1 b_{n−1} + ⋯ + a_n b_0 = Σ_{i=0}^{n} a_i b_{n−i} 로 정의하고, 바로 뒤 문단에서 급수 Σ c_n 을 두 급수의 Cauchy product 라 부른다. 이 항목은 급수가 아니라 0부터 번호가 붙은 수열 (z_n) 을 코시 곱이라 부르고, 글자를 a, b, c, A, B 대신 x, y, z, X, Y 로 쓴다. 출처는 이 정의를 '급수를 0 에서 시작하는 것이 편하다'는 말과 함께 메르텐스 정리 앞에 두고, 증명 첫 식(p.105)에서 'We rearrange the mth partial sum' 이라 적고 Σ_{n=0}^{m} c_n = Σ_{n=0}^{m} B_n a_{m−n} 을 쓴다. 이 항목의 (3)은 이 식을 m 에 대한 귀납법으로 재배열 없이 증명하고, 출처의 B_n a_{m−n} 꼴과 x_i Y_{m−i} 꼴은 (2)와 rearranging-a-finite-sum 의 (4)의 (ii)로 잇는다. (4)는 출처 Proposition 2.6.12(p.108)의 멱급수의 곱의 계수 c_n = a_0 b_n + ⋯ + a_n b_0 이 쓰는 계산이다. (5)는 이 사이트가 0부터의 합을 한 칸 옮긴 합으로 정의했기 때문에 둔 규칙이다. 예시 '처음 몇 항만 0 이 아닌 두 수열의 코시 곱'은 출처 Proposition 2.6.12 뒤 문단(p.109)의 '다항식은 유한한 멱급수'라는 말과 같은 생각이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(메르텐스 증명의 구조와 예의 어림 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
0부터 번호가 붙은 수열 $(x_n)_{n \ge 0}$, 그 유한 합 $\sum_{n=0}^{k}$, 범위에서만 정해진 항의 0부터의 합, 급수의 수렴과 합 $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이다. 거듭제곱은 [[power-of-a-real-number]]의 것이고, 절댓값은 [[absolute-value]]의 것이다.

**코시 곱.** $(x_n)_{n \ge 0}$, $(y_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하자. $0$ 이상인 정수 $n$과 $0 \le i \le n$인 정수 $i$에서 $n - i$는 $0$ 이상인 정수이므로, $x_i y_{n-i}$는 $0 \le i \le n$에서 정해진 실수이다. 그 합을
$$
z_n = \sum_{i=0}^{n} x_i y_{n-i}
$$
로 두고, $n$에서의 값이 $z_n$인 0부터 번호가 붙은 수열 $(z_n)_{n \ge 0}$을 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 **코시 곱**(Cauchy product)이라 한다. $(z_n)_{n \ge 0}$의 급수를 "코시 곱의 급수"라 한다. 이 항목에서 $0$ 이상인 정수 $m$에 대하여 $X_m = \sum_{n=0}^{m} x_n$, $Y_m = \sum_{n=0}^{m} y_n$으로 쓴다.

다음이 성립한다. 아래에서 $(z_n)_{n \ge 0}$은 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 코시 곱이다.

1. (처음 두 항) $z_0 = x_0 y_0$이고 $z_1 = x_0 y_1 + x_1 y_0$이다.
2. (대칭) $0$ 이상인 모든 정수 $n$에서 $z_n = \sum_{i=0}^{n} x_{n-i} y_i$이다. 따라서 $(y_n)_{n \ge 0}$과 $(x_n)_{n \ge 0}$의 코시 곱도 $(z_n)_{n \ge 0}$이다.
3. (부분합) $0$ 이상인 모든 정수 $m$에서
   $$
   \begin{aligned}
   \sum_{n=0}^{m} z_n &= \sum_{i=0}^{m} x_i Y_{m-i} \\
   &= \sum_{i=0}^{m} y_i X_{m-i}
   \end{aligned}
   $$
   이다.
4. (거듭제곱을 곱한 수열) $t$가 실수이면, $n$에서의 값이 $x_n t^n$인 0부터 번호가 붙은 수열과 $y_n t^n$인 0부터 번호가 붙은 수열의 코시 곱은 $n$에서의 값이 $z_n t^n$인 수열이다.
5. (범위에서만 정해진 항의 0부터의 합) $k$를 $-1$ 이상인 정수, $a$를 실수라 하고, $0 \le i \le k$인 정수 $i$마다 실수 $c_i$, $d_i$가 정해져 있다고 하자. 그러면 다음이 성립한다.
   - (i) $\sum_{i=0}^{k} (a\,c_i + d_i) = a \sum_{i=0}^{k} c_i + \sum_{i=0}^{k} d_i$이다.
   - (ii) $0 \le i \le k$인 모든 $i$에서 $c_i \le d_i$이면 $\sum_{i=0}^{k} c_i \le \sum_{i=0}^{k} d_i$이다.
   - (iii) $\left| \sum_{i=0}^{k} c_i \right| \le \sum_{i=0}^{k} |c_i|$이다.
   - (iv) $0 \le i \le k$인 모든 $i$에서 $c_i = a$이면 $\sum_{i=0}^{k} c_i = (k + 1)\,a$이다.
:::

:::english
Sequences indexed from zero $(x_n)_{n \ge 0}$, their finite sums $\sum_{n=0}^{k}$, sums from zero of terms defined only on a range, and convergence and sums $\sum_{n=0}^{\infty}$ of series are as in the entry on sums of sequences indexed from zero. Powers are as in the entry on powers of a real number, and absolute values as in the entry on absolute value.

**Cauchy product.** Let $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$ be sequences indexed from zero. For an integer $n \ge 0$ and an integer $i$ with $0 \le i \le n$, $n - i$ is an integer $\ge 0$, so $x_i y_{n-i}$ is a real number defined for $0 \le i \le n$. Let
$$
z_n = \sum_{i=0}^{n} x_i y_{n-i} ,
$$
and call the sequence indexed from zero $(z_n)_{n \ge 0}$ whose value at $n$ is $z_n$ the **Cauchy product** of $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$. The series of $(z_n)_{n \ge 0}$ is called "the series of the Cauchy product". In this entry, for an integer $m \ge 0$ we write $X_m = \sum_{n=0}^{m} x_n$ and $Y_m = \sum_{n=0}^{m} y_n$.

The following hold. Below, $(z_n)_{n \ge 0}$ is the Cauchy product of $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$.

1. (The first two terms) $z_0 = x_0 y_0$ and $z_1 = x_0 y_1 + x_1 y_0$.
2. (Symmetry) For every integer $n \ge 0$, $z_n = \sum_{i=0}^{n} x_{n-i} y_i$. Hence the Cauchy product of $(y_n)_{n \ge 0}$ and $(x_n)_{n \ge 0}$ is also $(z_n)_{n \ge 0}$.
3. (Partial sums) For every integer $m \ge 0$,
   $$
   \begin{aligned}
   \sum_{n=0}^{m} z_n &= \sum_{i=0}^{m} x_i Y_{m-i} \\
   &= \sum_{i=0}^{m} y_i X_{m-i} .
   \end{aligned}
   $$
4. (Multiplying by powers) If $t$ is a real number, then the Cauchy product of the sequence indexed from zero with value $x_n t^n$ at $n$ and the sequence indexed from zero with value $y_n t^n$ at $n$ is the sequence with value $z_n t^n$ at $n$.
5. (Sums from zero of terms defined only on a range) Let $k$ be an integer with $k \ge -1$ and $a$ a real number, and suppose real numbers $c_i$, $d_i$ are given for each integer $i$ with $0 \le i \le k$. Then the following hold.
   - (i) $\sum_{i=0}^{k} (a\,c_i + d_i) = a \sum_{i=0}^{k} c_i + \sum_{i=0}^{k} d_i$.
   - (ii) If $c_i \le d_i$ for every $i$ with $0 \le i \le k$, then $\sum_{i=0}^{k} c_i \le \sum_{i=0}^{k} d_i$.
   - (iii) $\left| \sum_{i=0}^{k} c_i \right| \le \sum_{i=0}^{k} |c_i|$.
   - (iv) If $c_i = a$ for every $i$ with $0 \le i \le k$, then $\sum_{i=0}^{k} c_i = (k + 1)\,a$.
:::

## 직관

두 다항식 $(x_0 + x_1 t + x_2 t^2 + \cdots)$와 $(y_0 + y_1 t + y_2 t^2 + \cdots)$를 곱해 $t^n$의 계수를 모으면, 지수의 합이 $n$인 두 항의 곱 $x_i t^i \cdot y_{n-i} t^{n-i}$을 모두 더한 $x_0 y_n + x_1 y_{n-1} + \cdots + x_n y_0$이 나옵니다. 코시 곱은 이 계수를 급수의 곱의 $n$번째 항으로 삼은 것입니다. (4)는 이 계산을 $t$를 곱한 수열로 적은 것입니다. 번호를 $0$부터 붙이는 까닭도 여기에 있습니다. 상수항이 $0$번째 항이어야 지수와 번호가 맞습니다.

코시 곱의 $n$번째 항은 표의 대각선 하나의 합으로 볼 수 있습니다. $i$행 $j$열에 $x_i y_j$를 적은 표에서 $i + j = n$인 칸들이 $n$번째 대각선입니다. 대각선을 $0$번부터 $m$번까지 모두 더하면 $i + j \le m$인 삼각형 모양의 칸들을 더한 것이고, 이것을 행마다 묶으면 $i$행에서는 $y_0, \dots, y_{m-i}$가 $x_i$에 곱해지므로 (3)의 $\sum_{i=0}^{m} x_i Y_{m-i}$가 됩니다. (3)은 이렇게 칸을 다시 묶는 일을 귀납법으로 증명한 것이며, 두 급수의 곱에 대한 [[mertens-theorem|메르텐스 정리]]의 출발점입니다.

## 성질의 증명

:::proof
정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 실수의 계산은 [[real-number-arithmetic]]의 (K1)–(K12)이다. 0부터 번호가 붙은 수열 $(z_n)_{n \ge 0}$이 있다는 것은 [[series-indexed-from-zero]]의 정의 문단(재귀 정리의 (1))에 의해서이다.

**(5)의 증명.** [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 $\sum_{i=0}^{k} c_i = \sum_{j=1}^{k+1} c_{j-1}$이고, $d_i$, $a\,c_i + d_i$, $|c_i|$의 합도 같은 꼴이다. 오른쪽은 $1 \le j \le k + 1$에서 정해진 항의 합이므로, [[linearity-and-order-of-finite-sums]]의 (8)에 의해 그 항목의 (1)–(5)를 쓸 수 있다. (1)에서 (i), (3)에서 (ii), (5)에서 (iii)을 얻고, (2)에서 $\sum_{j=1}^{k+1} a = ((k + 1) - 1 + 1)\,a = (k + 1)\,a$이므로 (iv)를 얻는다.

**(1)의 증명.** [[series-indexed-from-zero]]의 (1)과 (2)는 그 항목의 (4)에 의해 범위에서만 정해진 항에도 성립하므로, $z_0 = \sum_{i=0}^{0} x_i y_{0-i} = x_0 y_0$이고 $z_1 = \sum_{i=0}^{0} x_i y_{1-i} + x_1 y_0 = x_0 y_1 + x_1 y_0$이다.

**(2)의 증명.** $0 \le i \le n$에서 $c_i = x_i y_{n-i}$로 두고 [[rearranging-a-finite-sum|유한 합의 재배열]]의 (4)의 (ii)를 $k = n$에 쓰면 $z_n = \sum_{i=0}^{n} c_i = \sum_{i=0}^{n} c_{n-i}$이다. $c_{n-i} = x_{n-i} y_{n-(n-i)} = x_{n-i} y_i$이므로 $z_n = \sum_{i=0}^{n} x_{n-i} y_i$이다. (K1)에 의해 $x_{n-i} y_i = y_i x_{n-i}$이므로 이것은 $(y_n)_{n \ge 0}$과 $(x_n)_{n \ge 0}$의 코시 곱의 $n$번째 항이고, 모든 $n$에서 같으므로 두 코시 곱은 같은 수열이다([[series-indexed-from-zero]]의 수열의 같음).

**(3)의 증명.** 첫째 등식을 시작점이 $0$인 [[mathematical-induction|귀납법]]으로 보인다. $m = 0$이면 (1)과 [[series-indexed-from-zero]]의 (1)에 의해 $\sum_{n=0}^{0} z_n = z_0 = x_0 y_0 = x_0 Y_0$이고, 오른변도 $\sum_{i=0}^{0} x_i Y_{0-i} = x_0 Y_0$이다.

$m \ge 0$에서 성립한다고 하자. $0 \le i \le m$이면 $m - i \ge 0$이므로 [[series-indexed-from-zero]]의 (2)에 의해 $Y_{m+1-i} = Y_{m-i} + y_{m+1-i}$이다. 그 항목의 (2)와 (4), 귀납 가정, 이 항목의 (5)의 (i)과 분배법칙 (K3)에 의해
$$
\begin{aligned}
&\sum_{n=0}^{m+1} z_n \\
&= \sum_{n=0}^{m} z_n + z_{m+1} \\
&= \sum_{i=0}^{m} x_i Y_{m-i} \\
&\qquad + \Bigl( \sum_{i=0}^{m} x_i y_{m+1-i} + x_{m+1} y_0 \Bigr) \\
&= \sum_{i=0}^{m} x_i \bigl( Y_{m-i} + y_{m+1-i} \bigr) \\
&\qquad + x_{m+1} y_0 \\
&= \sum_{i=0}^{m} x_i Y_{m+1-i} \\
&\qquad + x_{m+1} Y_0 \\
&= \sum_{i=0}^{m+1} x_i Y_{m+1-i}
\end{aligned}
$$
이다. 여기서 $Y_0 = y_0$이고, 마지막 등호는 [[series-indexed-from-zero]]의 (2)와 (4)이다. 따라서 $m + 1$에서도 성립한다.

둘째 등식: (2)에 의해 $(z_n)_{n \ge 0}$은 $(y_n)_{n \ge 0}$과 $(x_n)_{n \ge 0}$의 코시 곱이므로, 방금 보인 첫째 등식을 $x$와 $y$의 자리를 바꾸어 쓰면 $\sum_{n=0}^{m} z_n = \sum_{i=0}^{m} y_i X_{m-i}$이다.

**(4)의 증명.** $0 \le i \le n$이면 [[power-of-a-real-number]]의 (2)의 (i)과 (K1), (K2)에 의해 $(x_i t^i)(y_{n-i} t^{n-i}) = x_i y_{n-i}\, t^{i + (n-i)} = t^n \cdot x_i y_{n-i}$이다. (5)의 (i)을 $a = t^n$과 모든 항이 $0$인 $d_i$에 쓰고((5)의 (iv)에 의해 $\sum_{i=0}^{n} 0 = 0$), 코시 곱의 $n$번째 항은 $\sum_{i=0}^{n} t^n x_i y_{n-i} = t^n z_n$이다. (K1)에 의해 이것은 $z_n t^n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[처음 몇 항만 0 이 아닌 두 수열의 코시 곱]
$x_0 = 1$, $x_1 = 2$이고 $n \ge 2$에서 $x_n = 0$이며, $y_0 = 3$, $y_1 = -1$이고 $n \ge 2$에서 $y_n = 0$이라 합시다. 정의대로
$$
\begin{aligned}
z_0 &= 1 \cdot 3 = 3, \\
z_1 &= 1 \cdot (-1) + 2 \cdot 3 = 5, \\
z_2 &= 1 \cdot 0 + 2 \cdot (-1) + 0 \cdot 3 = -2
\end{aligned}
$$
이고, $n \ge 3$이면 $x_i y_{n-i}$에서 $i \ge 2$이거나 $n - i \ge 2$이므로 모든 항이 $0$이어서 $z_n = 0$입니다. 이것은 다항식의 곱 $(1 + 2t)(3 - t) = 3 + 5t - 2t^2$의 계수와 같습니다. (3)도 확인됩니다. $m = 2$이면 $Y_2 = 2$, $Y_1 = 2$, $Y_0 = 3$이고 $\sum_{i=0}^{2} x_i Y_{2-i} = 1 \cdot 2 + 2 \cdot 2 + 0 \cdot 3 = 6 = 3 + 5 - 2$입니다.
:::

:::example[모든 항이 1 인 두 수열의 코시 곱]
모든 $n$에서 $x_n = y_n = 1$이면 $z_n = \sum_{i=0}^{n} 1 \cdot 1$이고, (5)의 (iv)에 의해 $z_n = n + 1$입니다. 코시 곱의 처음 항들은 $1, 2, 3, 4, \dots$입니다. (3)으로는 $\sum_{n=0}^{m} z_n = \sum_{i=0}^{m} 1 \cdot Y_{m-i}$이고, $Y_k = k + 1$이므로 이 합은 $(m + 1) + m + \cdots + 1$입니다.
:::

## 확인 질문

:::check[$z_2$와 $z_3$을 $x_i$, $y_j$로 풀어 쓰라. (2)의 꼴로 쓰면 무엇이 달라지는가?]
정의대로 $z_2 = x_0 y_2 + x_1 y_1 + x_2 y_0$이고 $z_3 = x_0 y_3 + x_1 y_2 + x_2 y_1 + x_3 y_0$입니다. (2)의 꼴 $z_3 = x_3 y_0 + x_2 y_1 + x_1 y_2 + x_0 y_3$은 같은 네 곱을 거꾸로 더한 것입니다. 어느 쪽이든 두 첨자의 합이 $3$인 곱을 모두 한 번씩 더합니다.
:::

:::check[$x_0 = 1$이고 $n \ge 1$에서 $x_n = 0$이면 $(x_n)_{n \ge 0}$과 $(y_n)_{n \ge 0}$의 코시 곱은 무엇인가?]
$(y_n)_{n \ge 0}$ 자신입니다. $z_n = \sum_{i=0}^{n} x_i y_{n-i}$에서 $i \ge 1$인 항은 $x_i = 0$이므로 $0$입니다. [[series-indexed-from-zero]]의 (3)과 (4)로 $i = 0$인 항을 떼면 나머지는 모든 항이 $0$인 합이어서 [[linearity-and-order-of-finite-sums]]의 (2)와 (8)에 의해 $0$이고, $z_n = x_0 y_n + 0 = y_n$입니다. 다항식으로 말하면 상수 $1$을 곱한 것입니다.
:::
