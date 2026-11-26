---
title: 복소수의 유한 합
title_en: Finite Sums of Complex Numbers
aliases: [복소수의 합의 기호, 복소수의 시그마, 유한 등비합, 정수배, finite sum of complex numbers, complex sigma notation, finite geometric sum]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 범위 m ≤ k ≤ n 에서 정해진 복소수 z_k 의 유한 합을 실수부의 합과 허수부의 합으로 Σ z_k = ι(Σ Re z_k) + ι(Σ Im z_k)i 로 정하고, 0 부터의 합도 정한다. 빈 합, 끝항과 첫 항 떼기, 쪼개기, 첨자 옮기기, 복소수 상수배에 대한 선형성, 켤레, 실수의 합과의 일치, 절댓값의 부등식, 유한 등비합, 덧셈군의 정수배 n·z = ι(n)z 를 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, series-indexed-from-zero, group, power-in-a-group, ring, ring-basic-properties, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1.2절 Complex numbers and limits (p.141); 11.3.1절 Analytic functions (p.153)
    checked: original
    note: "출처는 p.141 에서 복소수열의 급수가 수렴한다는 것을 부분합 Σ_{n=1}^k z_n 의 극한으로 정의하고, p.153 에서 |z| < 1 이면 Σ_{n=0}^∞ zⁿ = 1/(1 − z) 라 적는다. 두 곳 모두 복소수의 유한 합을 기호로 쓴다. 이 항목은 그 기호를 실수부의 합과 허수부의 합으로 정의해, 리만 적분의 실수의 유한 합과 급수와 멱급수의 0 부터의 합의 성질을 그대로 옮긴다. (9)의 유한 등비합은 p.153 의 등비급수의 부분합이다."
  - ref: lebl-basic-analysis
    loc: 0.3.2절 Induction, Example 0.3.8 (p.13); 1.3절 Absolute value and bounded functions, Corollary 1.3.4 (p.37)
    checked: original
    note: "Lebl I 의 Example 0.3.8(p.13)은 c ≠ 1 인 실수와 0 이상인 정수 n 에서 1 + c + ⋯ + cⁿ = (1 − c^{n+1})/(1 − c) 를 귀납법으로 보인다. (9)는 같은 등식을 복소수 z 에 대해 진술한 것이고, 이 항목은 귀납법 대신 첨자 옮기기로 증명한다. 실수 z 에서는 (6)에 의해 급수와 멱급수의 0부터의 합의 등비합과 같은 값이다. 1.3절 Corollary 1.3.4(p.37)는 실수 x₁, …, xₙ 에서 |x₁ + ⋯ + xₙ| ≤ |x₁| + ⋯ + |xₙ| 를 귀납법으로 보인다. (7)은 같은 부등식을 복소수에 진술한 것이고 이 항목도 귀납법으로 증명한다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(삼각부등식의 등호 조건, 예의 거듭제곱 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 켤레는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 실수의 유한 합 $\sum_{k=m}^{n}$, 빈 합, 범위에서만 정해진 항의 합은 [[finite-sum-of-reals|실수의 유한 합]] 항목과 [[linearity-and-order-of-finite-sums]]의 (8)의 것이고, $0$부터의 합 $\sum_{n=0}^{K}$는 [[series-indexed-from-zero]]의 것이다. 합의 첨자로는 허수단위와 겹치지 않도록 $i$를 쓰지 않는다.

**복소수의 유한 합.** $m$, $n$을 $1 \le m$이고 $m - 1 \le n$인 정수라 하고, $m \le k \le n$인 정수 $k$마다 복소수 $z_k$가 $k$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자. 복소수
$$
\begin{aligned}
\sum_{k=m}^{n} z_k = {}&\iota\Bigl(\sum_{k=m}^{n} \operatorname{Re} z_k\Bigr) \\
&+ \iota\Bigl(\sum_{k=m}^{n} \operatorname{Im} z_k\Bigr) i
\end{aligned}
$$
를 $z_k$의 $k = m$부터 $n$까지의 **유한 합**이라 한다. 오른쪽의 두 합은 범위에서만 정해진 실수 항의 유한 합이다. 곧 이 복소수는 실수부가 $\sum_{k=m}^{n} \operatorname{Re} z_k$이고 허수부가 $\sum_{k=m}^{n} \operatorname{Im} z_k$인 복소수이다([[complex-field]]의 (4)). $n = m - 1$이면 **빈 합**이다.

**0부터의 합.** $K$를 $-1$ 이상인 정수라 하고, $0 \le n \le K$인 정수 $n$마다 복소수 $z_n$이 위의 뜻으로 정해져 있다고 하자. $1 \le j \le K + 1$에서 정해진 항 $z_{j-1}$의 합으로
$$
\sum_{n=0}^{K} z_n = \sum_{j=1}^{K+1} z_{j-1}
$$
로 정한다. $K = -1$이면 빈 합이다. 합의 첨자는 기호 안에서만 쓰는 이름이다.

다음이 성립한다. 아래에서 $m$, $n$은 $1 \le m$이고 $m - 1 \le n$인 정수이고, $z_k$, $w_k$는 식에 나오는 번호 $k$에서 정해진 복소수, $x_k$는 실수, $c$와 $z$는 복소수이다.

1. (실수부와 허수부) $\operatorname{Re} \sum_{k=m}^{n} z_k = \sum_{k=m}^{n} \operatorname{Re} z_k$이고 $\operatorname{Im} \sum_{k=m}^{n} z_k = \sum_{k=m}^{n} \operatorname{Im} z_k$이다. $m \le k \le n$인 모든 $k$에서 $z_k = w_k$이면 $\sum_{k=m}^{n} z_k = \sum_{k=m}^{n} w_k$이다.
2. (빈 합, 한 항, 끝항과 첫 항) $\sum_{k=m}^{m-1} z_k = 0$이고 $\sum_{k=m}^{m} z_k = z_m$이다. $\sum_{k=m}^{n+1} z_k = \sum_{k=m}^{n} z_k + z_{n+1}$이고, $m \le n$이면 $\sum_{k=m}^{n} z_k = z_m + \sum_{k=m+1}^{n} z_k$이다.
3. (쪼개기와 첨자 옮기기) $m - 1 \le p \le n$인 정수 $p$에서 $\sum_{k=m}^{n} z_k = \sum_{k=m}^{p} z_k + \sum_{k=p+1}^{n} z_k$이다. $1 \le m + r$인 정수 $r$에서 $\sum_{k=m}^{n} z_k = \sum_{j=m+r}^{n+r} z_{j-r}$이다.
4. (선형성)
   $$
   \begin{aligned}
   \sum_{k=m}^{n} (c\,z_k + w_k) &= c \sum_{k=m}^{n} z_k \\
   &\qquad + \sum_{k=m}^{n} w_k, \\
   \sum_{k=m}^{n} (z_k - w_k) &= \sum_{k=m}^{n} z_k \\
   &\qquad - \sum_{k=m}^{n} w_k
   \end{aligned}
   $$
   이다. 모든 항이 $c$인 합은 $\sum_{k=m}^{n} c = (n - m + 1)\,c$이다.
5. (켤레) $\overline{\sum_{k=m}^{n} z_k} = \sum_{k=m}^{n} \overline{z_k}$이다.
6. (실수의 합과의 일치) $\sum_{k=m}^{n} \iota(x_k) = \iota\Bigl(\sum_{k=m}^{n} x_k\Bigr)$이다. 오른쪽은 실수의 유한 합이다. 따라서 실수 항의 합을 복소수 자리에 써도 두 읽기의 값이 같다.
7. (절댓값) $\Bigl|\sum_{k=m}^{n} z_k\Bigr| \le \sum_{k=m}^{n} |z_k|$이다. 오른쪽은 실수의 유한 합이다.
8. (0부터의 합) $-1$ 이상인 정수 $K$에서 (1), (4)–(7)은 $\sum_{k=m}^{n}$을 $\sum_{n=0}^{K}$로 바꾸어도 성립한다(첨자를 $n$으로 쓰고, (4)의 상수의 합은 $(K + 1)c$이다). 또
   $$
   \begin{aligned}
   \sum_{n=0}^{-1} z_n &= 0, \qquad \sum_{n=0}^{0} z_n = z_0, \\
   \sum_{n=0}^{K+1} z_n &= \sum_{n=0}^{K} z_n + z_{K+1}, \\
   \sum_{n=0}^{K} z_{n+1} &= \sum_{n=1}^{K+1} z_n
   \end{aligned}
   $$
   이고, $K \ge 0$이면 $\sum_{n=0}^{K} z_n = z_0 + \sum_{n=1}^{K} z_n$이다. $0 \le p \le K$인 정수 $p$에서 $\sum_{n=0}^{K} z_n = \sum_{n=0}^{p} z_n + \sum_{n=p+1}^{K} z_n$이다.
9. (유한 등비합) $-1$ 이상인 모든 정수 $K$에서
   $$
   (1 - z) \sum_{n=0}^{K} z^n = 1 - z^{K+1}
   $$
   이다. 따라서 $z \ne 1$이면 $\sum_{n=0}^{K} z^n = (1 - z^{K+1}) / (1 - z)$이다.
10. (정수배) 덧셈군 $(\mathbb{C}, +)$에서의 정수배 $n \cdot z$([[ring|환]]의 정수배, [[power-in-a-group|군의 거듭제곱]]의 (4))는 모든 정수 $n$에서 $n \cdot z = nz$, 곧 $\iota(n)z$이다. 특히 자연수 $n$에서 $\sum_{k=1}^{n} z = nz$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, and $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers where complex numbers are required, and the form $a + bi$ are those of the entry on the field of complex numbers; conjugates, moduli, and powers are those of their entries. Finite sums $\sum_{k=m}^{n}$ of real numbers, empty sums, and sums of terms defined only on a range are those of the entry on finite sums of reals and item (8) of the entry on linearity and order of finite sums, and sums from zero $\sum_{n=0}^{K}$ are those of the entry on sequences indexed from zero. The letter $i$ is not used as a summation index, to avoid confusion with the imaginary unit.

**Finite sums of complex numbers.** Let $m$, $n$ be integers with $1 \le m$ and $m - 1 \le n$, and suppose that for each integer $k$ with $m \le k \le n$ a complex number $z_k$ is given by an expression in $k$ or as an already determined object. The complex number
$$
\begin{aligned}
\sum_{k=m}^{n} z_k = {}&\iota\Bigl(\sum_{k=m}^{n} \operatorname{Re} z_k\Bigr) \\
&+ \iota\Bigl(\sum_{k=m}^{n} \operatorname{Im} z_k\Bigr) i
\end{aligned}
$$
is called the **finite sum** of the $z_k$ from $k = m$ to $n$. The two sums on the right are finite sums of real terms defined on a range; that is, this complex number has real part $\sum_{k=m}^{n} \operatorname{Re} z_k$ and imaginary part $\sum_{k=m}^{n} \operatorname{Im} z_k$ (item (4) of the entry on the field of complex numbers). If $n = m - 1$, it is the **empty sum**.

**Sums from zero.** Let $K$ be an integer $\ge -1$, and suppose that for each integer $n$ with $0 \le n \le K$ a complex number $z_n$ is given in the above sense. Define
$$
\sum_{n=0}^{K} z_n = \sum_{j=1}^{K+1} z_{j-1},
$$
the sum of the terms $z_{j-1}$ defined for $1 \le j \le K + 1$. If $K = -1$, it is the empty sum. The summation index is a name used only inside the symbol.

The following hold. Below, $m$, $n$ are integers with $1 \le m$ and $m - 1 \le n$; $z_k$ and $w_k$ are complex numbers defined at the indices $k$ appearing in the formulas, $x_k$ are real numbers, and $c$ and $z$ are complex numbers.

1. (Real and imaginary parts) $\operatorname{Re} \sum_{k=m}^{n} z_k = \sum_{k=m}^{n} \operatorname{Re} z_k$ and $\operatorname{Im} \sum_{k=m}^{n} z_k = \sum_{k=m}^{n} \operatorname{Im} z_k$. If $z_k = w_k$ for all $k$ with $m \le k \le n$, then $\sum_{k=m}^{n} z_k = \sum_{k=m}^{n} w_k$.
2. (Empty sum, one term, last and first terms) $\sum_{k=m}^{m-1} z_k = 0$ and $\sum_{k=m}^{m} z_k = z_m$. Moreover $\sum_{k=m}^{n+1} z_k = \sum_{k=m}^{n} z_k + z_{n+1}$, and if $m \le n$, then $\sum_{k=m}^{n} z_k = z_m + \sum_{k=m+1}^{n} z_k$.
3. (Splitting and shifting) For an integer $p$ with $m - 1 \le p \le n$, $\sum_{k=m}^{n} z_k = \sum_{k=m}^{p} z_k + \sum_{k=p+1}^{n} z_k$. For an integer $r$ with $1 \le m + r$, $\sum_{k=m}^{n} z_k = \sum_{j=m+r}^{n+r} z_{j-r}$.
4. (Linearity)
   $$
   \begin{aligned}
   \sum_{k=m}^{n} (c\,z_k + w_k) &= c \sum_{k=m}^{n} z_k \\
   &\qquad + \sum_{k=m}^{n} w_k, \\
   \sum_{k=m}^{n} (z_k - w_k) &= \sum_{k=m}^{n} z_k \\
   &\qquad - \sum_{k=m}^{n} w_k.
   \end{aligned}
   $$
   The sum all of whose terms are $c$ is $\sum_{k=m}^{n} c = (n - m + 1)\,c$.
5. (Conjugate) $\overline{\sum_{k=m}^{n} z_k} = \sum_{k=m}^{n} \overline{z_k}$.
6. (Agreement with sums of real numbers) $\sum_{k=m}^{n} \iota(x_k) = \iota\Bigl(\sum_{k=m}^{n} x_k\Bigr)$, where the right side is a finite sum of real numbers. Hence, when a sum of real terms is written where a complex number is required, the two readings have the same value.
7. (Modulus) $\Bigl|\sum_{k=m}^{n} z_k\Bigr| \le \sum_{k=m}^{n} |z_k|$, where the right side is a finite sum of real numbers.
8. (Sums from zero) For an integer $K \ge -1$, items (1) and (4)–(7) remain true with $\sum_{k=m}^{n}$ replaced by $\sum_{n=0}^{K}$ (with the index written $n$, and with the constant sum of (4) equal to $(K + 1)c$). Moreover
   $$
   \begin{aligned}
   \sum_{n=0}^{-1} z_n &= 0, \qquad \sum_{n=0}^{0} z_n = z_0, \\
   \sum_{n=0}^{K+1} z_n &= \sum_{n=0}^{K} z_n + z_{K+1}, \\
   \sum_{n=0}^{K} z_{n+1} &= \sum_{n=1}^{K+1} z_n,
   \end{aligned}
   $$
   and if $K \ge 0$, then $\sum_{n=0}^{K} z_n = z_0 + \sum_{n=1}^{K} z_n$. For an integer $p$ with $0 \le p \le K$, $\sum_{n=0}^{K} z_n = \sum_{n=0}^{p} z_n + \sum_{n=p+1}^{K} z_n$.
9. (Finite geometric sums) For every integer $K \ge -1$,
   $$
   (1 - z) \sum_{n=0}^{K} z^n = 1 - z^{K+1}.
   $$
   Hence, if $z \ne 1$, then $\sum_{n=0}^{K} z^n = (1 - z^{K+1}) / (1 - z)$.
10. (Integer multiples) The integer multiple $n \cdot z$ in the additive group $(\mathbb{C}, +)$ (the integer multiple of the entry on rings, item (4) of the entry on powers in a group) satisfies $n \cdot z = nz$, that is, $\iota(n)z$, for every integer $n$. In particular $\sum_{k=1}^{n} z = nz$ for every natural number $n$.
:::

## 직관

복소수는 실수부와 허수부라는 실수 두 개의 짝이고, 덧셈은 실수부끼리, 허수부끼리 더하는 것이었습니다. 그래서 여러 복소수를 더한 결과도 실수부들의 합과 허수부들의 합을 짝지은 것이어야 하고, 이 항목은 그것을 그대로 정의로 삼습니다. 영수증 여러 장을 합칠 때 원화 금액은 원화끼리, 달러 금액은 달러끼리 합산해 한 줄로 적는 것과 같습니다. 이렇게 정의하면 리만 적분과 급수와 멱급수 강의가 실수의 합에 대해 이미 증명한 성질(빈 합, 끝항 떼기, 쪼개기, 첨자 옮기기, 선형성)이 실수부와 허수부마다 그대로 쓰이므로, 합을 정하는 규칙을 새로 받아들이지 않아도 됩니다.

영수증의 비유가 맞지 않는 곳은 곱셈입니다. 복소수를 곱하면 실수부와 허수부가 섞이므로, 상수 $c$를 곱하는 선형성 (4)는 실수부와 허수부를 따로 보는 것만으로는 나오지 않고 [[complex-number|복소수]]의 곱셈의 식을 거쳐야 합니다. 절댓값의 부등식 (7)도 성분마다 나오지 않고, [[complex-triangle-inequality|복소수의 삼각부등식]]을 끝항 떼기와 함께 되풀이해 얻습니다.

(6)은 실수만 더할 때 이 항목의 합과 실수의 합이 같은 값이라는 것이어서, 같은 기호 $\Sigma$에 두 정의가 생기지 않습니다. (10)은 덧셈군의 정수배 $n \cdot z$가 실수 $n$을 옮긴 복소수와의 곱 $nz$와 같다는 것입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "실수의 합의 (3)", "쪼개기·옮기기의 (1)", "선형성·순서의 (1)", "0부터의 합의 (1)"은 [[finite-sum-of-reals]], [[splitting-and-shifting-finite-sums]], [[linearity-and-order-of-finite-sums]], [[series-indexed-from-zero]]의 번호이다. 범위에서만 정해진 실수 항의 합에 이 번호들을 쓸 수 있는 것은 선형성·순서의 (8)이다. "복소수의 (2)", "복소수체의 (4)", "켤레의 (2)", "삼각부등식의 (2)", "거듭제곱의 (1)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[complex-triangle-inequality]], [[power-of-a-complex-number]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

여러 번 쓰는 사실: (가) 복소수의 (1)에 의해 두 복소수가 같은 것은 정확히 실수부끼리, 허수부끼리 같을 때이다. (나) 복소수체의 (4)에 의해 실수 $a$, $b$에서 $\operatorname{Re}(a + bi) = a$, $\operatorname{Im}(a + bi) = b$이다. (다) 복소수의 (2)와 복소수체의 (1)에 의해 실수부와 허수부는 합과 차를 보존한다.

**1의 증명.** 정의와 (나)에서 첫 두 등식이 나온다. $z_k = w_k$이면 $\operatorname{Re} z_k = \operatorname{Re} w_k$, $\operatorname{Im} z_k = \operatorname{Im} w_k$이므로 실수의 합의 (4)에 의해 두 합의 실수부와 허수부가 같고, (가)에 의해 두 합이 같다.

**2의 증명.** 실수의 합의 (2)에 의해 빈 합의 실수부와 허수부는 $0$이므로 빈 합은 $0 + 0i = 0$이다. 같은 (2)에 의해 $\sum_{k=m}^{m} z_k$의 실수부는 $\operatorname{Re} z_m$, 허수부는 $\operatorname{Im} z_m$이므로 (가)에 의해 이것은 $z_m$이다. 끝항: (1)과 실수의 합의 (3), (다)에 의해 양변의 실수부는 모두 $\sum_{k=m}^{n} \operatorname{Re} z_k + \operatorname{Re} z_{n+1}$이고, 허수부도 같으므로 (가)에 의해 같다. 첫 항은 (3)의 쪼개기를 $p = m$에 쓰고 한 항의 합을 $z_m$으로 바꾼 것이다.

**3의 증명.** 양변의 실수부와 허수부는 (1)과 (다)에 의해 실수의 합이고, 쪼개기·옮기기의 (1), (2)에 의해 같다. (가)에서 나온다.

**4의 증명.** $c = (\alpha, \beta)$로 두면 복소수의 (2)와 (다)에 의해 $\operatorname{Re}(c\,z_k + w_k) = \alpha \operatorname{Re} z_k - \beta \operatorname{Im} z_k + \operatorname{Re} w_k$이다. 선형성·순서의 (1)을 두 번 쓰면 그 합은 $\alpha S - \beta T + U$이고, 여기서 $S$, $T$, $U$는 $\operatorname{Re} z_k$, $\operatorname{Im} z_k$, $\operatorname{Re} w_k$의 합이다. 한편 (1)에 의해 $\sum z_k$의 실수부와 허수부는 $S$, $T$이므로 복소수의 (2)와 (다)에 의해 $\operatorname{Re}\bigl(c \sum z_k + \sum w_k\bigr) = \alpha S - \beta T + U$이다. 허수부도 같은 방법으로 $\alpha T + \beta S + V$($V$는 $\operatorname{Im} w_k$의 합)로 같다. (가)에 의해 첫 등식이 성립한다. 둘째 등식은 (다)와 선형성·순서의 (1)의 차의 꼴로 같은 방법으로 보인다. 상수의 합: 선형성·순서의 (2)에 의해 실수부와 허수부는 $(n - m + 1)\alpha$, $(n - m + 1)\beta$이고, 복소수체의 (2)의 (ii)에 의해 이것은 $\iota(n - m + 1)c$의 실수부와 허수부이다.

**5의 증명.** 켤레의 (1)과 (1)에 의해 왼쪽의 실수부는 $\sum \operatorname{Re} z_k$, 허수부는 $-\sum \operatorname{Im} z_k$이다. 오른쪽은 (1)과 켤레의 (1)에 의해 실수부가 $\sum \operatorname{Re} z_k$, 허수부가 $\sum (-\operatorname{Im} z_k)$이고, (K9)의 $(-1)a = -a$와 선형성·순서의 (1)에 의해 이것은 $-\sum \operatorname{Im} z_k$이다. (가)에서 나온다.

**6의 증명.** 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re} \iota(x_k) = x_k$, $\operatorname{Im} \iota(x_k) = 0$이다. 선형성·순서의 (2)와 (K9)에 의해 $\sum 0 = (n - m + 1) \cdot 0 = 0$이므로, (1)에 의해 왼쪽의 실수부는 $\sum x_k$, 허수부는 $0$이다. 오른쪽도 복소수체의 (2)의 (ii)에 의해 그렇다. (가)에서 나온다.

**7의 증명.** 항이 정해진 범위를 $m \le k \le N$이라 하고, $m - 1 \le n \le N$인 정수 $n$에 대하여 부등식을 시작점이 $m - 1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 명제는 "$n \le N$이면 부등식이 성립한다"이다. $n = m - 1$이면 (2)와 실수의 합의 (2)에 의해 양변은 $|0| = 0$과 $0$이다. $n + 1 \le N$이고 $n$에서 성립하면, (2), 삼각부등식의 (2), 귀납 가정, 실수의 합의 (3)과 [[order-properties-of-reals]]의 (2)의 (i)에 의해
$$
\begin{aligned}
\Bigl|\sum_{k=m}^{n+1} z_k\Bigr| &\le \Bigl|\sum_{k=m}^{n} z_k\Bigr| + |z_{n+1}| \\
&\le \sum_{k=m}^{n} |z_k| + |z_{n+1}| \\
&= \sum_{k=m}^{n+1} |z_k|
\end{aligned}
$$
이다.

**8의 증명.** $0$부터의 합의 정의에 의해 $\sum_{n=0}^{K} z_n$은 $1 \le j \le K + 1$에서 정해진 항 $z_{j-1}$의 합이다. 이 합에 (1)을 쓰면 실수부는 $\sum_{j=1}^{K+1} \operatorname{Re} z_{j-1}$이고, 이것은 [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 $\sum_{n=0}^{K} \operatorname{Re} z_n$이다. 허수부도 같다. 따라서 (1)이 성립한다. (4)–(7)은 이 합을 $\sum_{j=1}^{K+1}$로 쓰고 각 번호를 쓰면 나온다($(K + 1) - 1 + 1 = K + 1$). 빈 합과 한 항, 끝항은 (2)를 $m = 1$, $n = K$에 쓴 것이다. $\sum_{n=0}^{K} z_{n+1}$은 정의에 의해 $1 \le j \le K + 1$에서 정해진 항 $z_{(j-1)+1} = z_j$의 합이므로 $\sum_{n=1}^{K+1} z_n$이다. 끝으로 $K \ge 0$이면 (2)의 첫 항에 의해 $\sum_{j=1}^{K+1} z_{j-1} = z_0 + \sum_{j=2}^{K+1} z_{j-1}$이고, (3)의 첨자 옮기기를 $r = -1$에 쓰면 둘째 합은 $\sum_{n=1}^{K} z_n$이다. 같은 방법으로 $0 \le p \le K$이면 (3)의 쪼개기에 의해 $\sum_{j=1}^{K+1} z_{j-1} = \sum_{j=1}^{p+1} z_{j-1} + \sum_{j=p+2}^{K+1} z_{j-1}$이고, 첫째 합은 정의에 의해 $\sum_{n=0}^{p} z_n$, 둘째 합은 첨자 옮기기($r = -1$)에 의해 $\sum_{n=p+1}^{K} z_n$이다.

**9의 증명.** $K = -1$이면 왼쪽은 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $(1 - z) \cdot 0 = 0$이고 오른쪽은 거듭제곱의 (1)에 의해 $1 - z^0 = 1 - 1 = 0$이다. $K \ge 0$이라 하고 $T = \sum_{n=1}^{K} z^n$이라 하자. (8)의 첫 항에 의해 $\sum_{n=0}^{K} z^n = z^0 + T = 1 + T$이다. (8)의 선형성(상수배)과 거듭제곱의 (1)에 의해 $z \sum_{n=0}^{K} z^n = \sum_{n=0}^{K} z^{n+1}$이고, (8)의 옮기기와 (2)의 끝항에 의해 이것은 $\sum_{n=1}^{K+1} z^n = T + z^{K+1}$이다. 따라서 분배법칙에 의해 $(1 - z)\sum_{n=0}^{K} z^n = (1 + T) - (T + z^{K+1}) = 1 - z^{K+1}$이다. $z \ne 1$이면 $1 - z \ne 0$이므로 양변에 $(1 - z)^{-1}$을 곱하면 된다.

**10의 증명.** $0$ 이상인 정수 $n$에 대한 귀납법으로 $n \cdot z = \iota(n)z$를 보인다. $0 \cdot z = 0 = \iota(0)z$이다(환의 정수배와 환의 기본 성질의 (1)). $n \cdot z = \iota(n)z$이면, $n = 0$일 때는 $1 \cdot z = z = \iota(1)z$이고, $n$이 자연수일 때는 [[power-in-a-group|군의 거듭제곱]]의 (4), 분배법칙, 복소수체의 (2)와 (K7)에 의해 $(n + 1) \cdot z = n \cdot z + z = \iota(n)z + \iota(1)z = \iota(n + 1)z$이다. $n$이 자연수이면 같은 (4)와 방금 보인 것, 환의 기본 성질의 (2), 복소수체의 (2)의 (i)에 의해 $(-n) \cdot z = n \cdot (-z) = \iota(n)(-z) = -(\iota(n)z) = \iota(-n)z$이다. 정수는 $0$ 이상이거나 자연수의 음수이므로((Z5), (Z1)) 모든 정수 $n$에서 성립한다. 자연수 $n$에서 $\sum_{k=1}^{n} z = (n - 1 + 1)z = nz$는 (4)의 상수의 합이다. $\blacksquare$
:::

## 예시와 반례

:::example[i 의 거듭제곱의 합]
[[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 $\sum_{k=1}^{4} i^k = i + (-1) + (-i) + 1 = 0$입니다((2)의 끝항 떼기를 되풀이). (9)로 보면 $(1 - i)\sum_{n=0}^{3} i^n = 1 - i^4 = 0$이고 $1 - i \ne 0$이므로 $\sum_{n=0}^{3} i^n = 0$입니다. 또 $\sum_{n=0}^{2} i^n = (1 - i^3)/(1 - i) = (1 + i)/(1 - i) = i$이고, 직접 더하면 $1 + i + (-1) = i$입니다.

실수 항의 합: (6)에 의해 $\sum_{k=1}^{3} \iota(k) = \iota(1 + 2 + 3) = \iota(6)$입니다. (4)에 의해 $\sum_{k=1}^{3} k(1 + i) = 6(1 + i) = 6 + 6i$입니다.
:::

:::counterexample[절댓값의 부등식이 등호가 아닌 예]
(7)은 등호가 아닐 수 있습니다. $z_1 = 1$, $z_2 = -1$이면 $|z_1 + z_2| = 0$이고 $|z_1| + |z_2| = 2$입니다. $z_1 = 1$, $z_2 = i$이면 $|1 + i| = \sqrt{2}$이고 $|1| + |i| = 2$입니다. 빈 합에서는 양변이 모두 $0$이고 항이 하나이면 양변이 모두 $|z_m|$이어서 등호입니다.
:::

## 확인 질문

:::check[$\sum_{n=0}^{7} i^n$은 무엇인가?]
(9)에 의해 $(1 - i)\sum_{n=0}^{7} i^n = 1 - i^8$이고, $8 = 4 \cdot 2 + 0$이므로 거듭제곱의 (6)에 의해 $i^8 = 1$입니다. $1 - i \ne 0$이므로 합은 $0$입니다.
:::

:::check[$z_1, \dots, z_n$에 대하여 $\sum_{k=1}^{n} (z_k + \overline{z_k})$는 언제나 실수인 복소수인가?]
그렇습니다. [[complex-conjugate|켤레복소수]]의 (3)에 의해 $z_k + \overline{z_k} = \iota(2 \operatorname{Re} z_k)$이므로 (6)에 의해 합은 $\iota\bigl(\sum_{k=1}^{n} 2 \operatorname{Re} z_k\bigr)$이고, 허수부가 $0$입니다. (4)와 (5)로 보면 이것은 $\sum z_k + \overline{\sum z_k}$이기도 합니다.
:::
