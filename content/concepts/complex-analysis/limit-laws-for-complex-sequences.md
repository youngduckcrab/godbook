---
title: 복소수열의 극한 법칙
title_en: Limit Laws for Complex Sequences
aliases: [복소수열의 극한의 사칙연산, 복소수열의 극한과 켤레, 복소수열의 극한과 절댓값, limit laws for complex sequences]
kind: theorem
field: complex-analysis
msc: ["30", "40A05"]
level: undergrad
summary: 수렴하는 두 복소수열의 합, 차, 곱, 상수배는 극한의 합, 차, 곱, 상수배로 수렴하고, 켤레의 수열은 극한의 켤레로, 절댓값의 실수열은 극한의 절댓값으로 수렴한다. 극한이 0 이 아니면 어느 번호부터 항이 0 이 아니고, 역수와 몫도 극한의 역수와 몫으로 수렴한다. 실수열 (xₙ) 과 ι 로 옮긴 복소수열 (ι(xₙ)) 은 함께 수렴하고 극한도 ι 로 맞는다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, comparison-with-null-sequence, tail-of-a-sequence, archimedean-property, ring, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, metric-space, sequence-in-a-space, limit-unique-in-hausdorff, complex-plane-as-metric-space, convergence-of-complex-sequences]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.2소절 Complex numbers and limits, Proposition 11.1.3 (p.141); 11.1.4소절 Exercise 11.1.3 (p.142)"
    checked: original
    note: "출처 Proposition 11.1.3(p.141)은 두 복소수열이 z, w 로 수렴하면 (i) 합, (ii) 곱, (iii) 모든 n 에서 w_n ≠ 0 이고 w ≠ 0 일 때 몫, (iv) 절댓값, (v) 켤레의 극한이 각각 z + w, zw, z/w, |z|, z̄ 라고 진술한다(PDF 그림으로 대조). 출처는 (ii)만 본문(p.141)에서 증명한다. 곱의 실수부와 허수부를 x_n s_n − y_n t_n, x_n t_n + y_n s_n 으로 쓰고 실수의 극한 법칙을 쓰는 것이다. 이 항목 (2)의 곱의 증명이 같은 방법이다. 나머지는 Exercise 11.1.3(p.142)으로 남긴다. 이 항목의 (1), (3), (4), (5)가 그것의 증명이고, (4)는 실수부·허수부 대신 거리의 역삼각부등식으로 증명한다. 차, 상수배, 극한이 0 이 아닌 수열의 어느 번호부터 항이 0 이 아니라는 것, (6)의 실수열과의 일치와 실수배는 출처의 이 명제에 들어 있지 않고 이 사이트가 진술에 더했다. 출처는 같은 소절에서 절댓값과 켤레가 연속함수라고도 적는다(p.141). (4)의 증명이 쓰는 부등식 ||z_n| − |z|| ≤ |z_n − z| 는 출처 11.1.1소절(p.140)이 적는 두 번째 꼴의 삼각부등식 ||z| − |w|| ≤ |z − w| 와 같다(PDF 그림으로 대조)."
  - ref: lebl-basic-analysis
    loc: "2.2절 Facts about limits of sequences, 2.2.2소절 Continuity of algebraic operations, Proposition 2.2.5 (p.63) 와 그 증명 (p.63–64), Proposition 2.2.7 (p.65); 2.1절 Sequences and limits, Example 2.1.5 (p.53), 2.1.4소절 Exercise 2.1.7 (p.59)"
    checked: original
    note: "출처 Proposition 2.2.5(p.63)는 실수열의 합, 차, 곱, 몫의 극한이고 Proposition 2.2.7(p.65)은 실수열의 절댓값의 극한이다. 이 사이트에서는 해석학 입문의 limit-of-sum-and-product 와 limit-of-absolute-value-and-square-root 의 내용이고, 이 항목은 앞의 것을 실수부와 허수부에 써서 (1), (2), (5)를 증명한다. Proposition 2.2.5 (iv)의 증명(p.64)은 극한 y 가 0 이 아니면 어느 M 부터 |y_n| > |y|/2 임을 보이고 그것으로 1/y_n 의 극한을 어림하는데, (5)의 (ii)의 앞 문장이 복소수열에서 같은 부등식이다. 출처 Exercise 2.1.7 b)(p.59)는 절댓값의 수열은 수렴하지만 수열은 발산하는 실수열의 예를 찾게 하고, 출처는 Proposition 2.2.7 바로 앞(p.65)에서 그 거꾸로가 성립하지 않는다며 이 연습문제를 가리킨다. 반례 '절댓값의 수열은 수렴하지만 수열은 발산하는 예'는 같은 물음을 복소수열로 한 것이고, 그 수열의 허수부는 출처 Example 2.1.5(p.53)의 수열 ((−1)ⁿ) 이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(d 와 d_E 가 같은 함수라는 것, 꼬리판 역수의 극한 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이며, 켤레복소수 $\overline{z}$는 [[complex-conjugate]], 복소수의 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 복소수열, 그 수렴과 극한의 기호, 실수부의 수열과 허수부의 수열, 0부터 번호가 붙은 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이고, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다. 실수열과 그 수렴, 극한의 기호는 해석학 입문의 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이다. 아래의 "$n$번째 항이 $z_n + w_n$인 복소수열"처럼 식으로 쓴 수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 값으로 정한 수열이다.

아래에서 $(z_n)$, $(w_n)$은 수렴하는 복소수열이고 $z = \lim_{n \to \infty} z_n$, $w = \lim_{n \to \infty} w_n$이며, $c$는 복소수이다.

1. (합과 차) $n$번째 항이 $z_n + w_n$인 복소수열은 $z + w$로 수렴하고, $n$번째 항이 $z_n - w_n$인 복소수열은 $z - w$로 수렴한다.
2. (곱과 상수) $n$번째 항이 $z_n w_n$인 복소수열은 $zw$로 수렴한다. $n$번째 항이 $c z_n$인 복소수열은 $cz$로, $n$번째 항이 $c + z_n$인 복소수열은 $c + z$로 수렴한다.
3. (켤레) $n$번째 항이 $\overline{z_n}$인 복소수열은 $\overline{z}$로 수렴한다.
4. (절댓값) $n$번째 항이 $|z_n|$인 실수열은 $|z|$로 수렴한다. 곧 $\lim_{n \to \infty} |z_n| = \bigl|\lim_{n \to \infty} z_n\bigr|$이다.
5. (역수와 몫)
   - (i) $w \ne 0$이고 모든 자연수 $n$에서 $w_n \ne 0$이면, $n$번째 항이 $w_n^{-1}$인 복소수열은 $w^{-1}$로 수렴하고, $n$번째 항이 $z_n / w_n$인 복소수열은 $z / w$로 수렴한다.
   - (ii) $w \ne 0$이면 자연수 $K$가 있어 $n > K$인 모든 자연수 $n$에서 $|w_n| > |w| / 2$이고, 따라서 $w_n \ne 0$이다. 이때 $(w_n)$의 $K$-꼬리 $(w_{n+K})$와 $(z_n)$의 $K$-꼬리 $(z_{n+K})$에 (i)을 쓸 수 있어, $n$번째 항이 $w_{n+K}^{-1}$인 복소수열은 $w^{-1}$로, $n$번째 항이 $z_{n+K} / w_{n+K}$인 복소수열은 $z / w$로 수렴한다.
6. (실수열과의 일치) $(x_n)$이 실수열이고 $x$가 실수라 하자.
   - (i) $n$번째 항이 $\iota(x_n)$인 복소수열이 $\iota(x)$로 수렴하는 것은 정확히 $(x_n)$이 $x$로 수렴할 때이다. 따라서 $(\iota(x_n))$이 수렴하는 것은 정확히 $(x_n)$이 수렴할 때이고, 이때 $\lim_{n \to \infty} \iota(x_n) = \iota\bigl(\lim_{n \to \infty} x_n\bigr)$이다.
   - (ii) 모든 $z_n$이 실수인 복소수이면 $z$도 실수인 복소수이고, $z = \iota\bigl(\lim_{n \to \infty} \operatorname{Re} z_n\bigr)$이다.
   - (iii) (실수배) $(x_n)$이 $x$로 수렴하면, $n$번째 항이 $x_n z_n$, 곧 $\iota(x_n) z_n$인 복소수열은 $xz$, 곧 $\iota(x) z$로 수렴한다.
7. (0부터 번호가 붙은 복소수열) $(z_n)_{n \ge 0}$, $(w_n)_{n \ge 0}$이 수렴하는 0부터 번호가 붙은 복소수열이면 (1)–(4)와 (5)의 (i)이 그대로 성립한다. 곧 $n$에서의 값이 $z_n + w_n$, $z_n - w_n$, $z_n w_n$, $c z_n$, $c + z_n$, $\overline{z_n}$인 0부터 번호가 붙은 복소수열은 각각 $z + w$, $z - w$, $zw$, $cz$, $c + z$, $\overline{z}$로 수렴하고, 자연수 $n$에서 $n$번째 항이 $|z_n|$인 실수열은 $|z|$로 수렴하며, $w \ne 0$이고 $0$ 이상인 모든 정수 $n$에서 $w_n \ne 0$이면 $n$에서의 값이 $w_n^{-1}$, $z_n / w_n$인 0부터 번호가 붙은 복소수열은 $w^{-1}$, $z / w$로 수렴한다. 여기서 $z$, $w$는 $(z_n)_{n \ge 0}$, $(w_n)_{n \ge 0}$의 극한이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the complex conjugate $\overline{z}$ is that of the entry on complex conjugates, and the modulus $|z|$ is that of the entry on the modulus of a complex number. Complex sequences, their convergence and limit notation, sequences of real and imaginary parts, and complex sequences indexed from zero are those of the entry on convergence of complex sequences, and $K$-tails are those of the entry on sequences and convergence in a topological space. Real sequences, their convergence, and limit notation are those of the entries on sequences, limits of sequences, and uniqueness of limits in introductory analysis. A sequence written by a formula, as in "the complex sequence whose $n$th term is $z_n + w_n$", is a sequence defined by its values as in the entry on sequences and convergence in a topological space.

Below, $(z_n)$, $(w_n)$ are convergent complex sequences, $z = \lim_{n \to \infty} z_n$, $w = \lim_{n \to \infty} w_n$, and $c$ is a complex number.

1. (Sum and difference) The complex sequence whose $n$th term is $z_n + w_n$ converges to $z + w$, and the complex sequence whose $n$th term is $z_n - w_n$ converges to $z - w$.
2. (Product and constants) The complex sequence whose $n$th term is $z_n w_n$ converges to $zw$. The complex sequence whose $n$th term is $c z_n$ converges to $cz$, and the one whose $n$th term is $c + z_n$ converges to $c + z$.
3. (Conjugates) The complex sequence whose $n$th term is $\overline{z_n}$ converges to $\overline{z}$.
4. (Modulus) The real sequence whose $n$th term is $|z_n|$ converges to $|z|$. That is, $\lim_{n \to \infty} |z_n| = \bigl|\lim_{n \to \infty} z_n\bigr|$.
5. (Reciprocals and quotients)
   - (i) If $w \ne 0$ and $w_n \ne 0$ for all natural numbers $n$, then the complex sequence whose $n$th term is $w_n^{-1}$ converges to $w^{-1}$, and the complex sequence whose $n$th term is $z_n / w_n$ converges to $z / w$.
   - (ii) If $w \ne 0$, then there is a natural number $K$ such that $|w_n| > |w| / 2$, and hence $w_n \ne 0$, for all natural numbers $n > K$. Then (i) applies to the $K$-tail $(w_{n+K})$ of $(w_n)$ and the $K$-tail $(z_{n+K})$ of $(z_n)$, so the complex sequence whose $n$th term is $w_{n+K}^{-1}$ converges to $w^{-1}$, and the one whose $n$th term is $z_{n+K} / w_{n+K}$ converges to $z / w$.
6. (Agreement with real sequences) Let $(x_n)$ be a real sequence and $x$ a real number.
   - (i) The complex sequence whose $n$th term is $\iota(x_n)$ converges to $\iota(x)$ exactly when $(x_n)$ converges to $x$. Hence $(\iota(x_n))$ converges exactly when $(x_n)$ converges, and then $\lim_{n \to \infty} \iota(x_n) = \iota\bigl(\lim_{n \to \infty} x_n\bigr)$.
   - (ii) If every $z_n$ is a real complex number, then $z$ is also a real complex number, and $z = \iota\bigl(\lim_{n \to \infty} \operatorname{Re} z_n\bigr)$.
   - (iii) (Real multiples) If $(x_n)$ converges to $x$, then the complex sequence whose $n$th term is $x_n z_n$, that is, $\iota(x_n) z_n$, converges to $xz$, that is, $\iota(x) z$.
7. (Complex sequences indexed from zero) If $(z_n)_{n \ge 0}$, $(w_n)_{n \ge 0}$ are convergent complex sequences indexed from zero, then (1)–(4) and (i) of (5) hold as they are. That is, the complex sequences indexed from zero whose values at $n$ are $z_n + w_n$, $z_n - w_n$, $z_n w_n$, $c z_n$, $c + z_n$, $\overline{z_n}$ converge to $z + w$, $z - w$, $zw$, $cz$, $c + z$, $\overline{z}$ respectively, the real sequence whose $n$th term is $|z_n|$ for natural numbers $n$ converges to $|z|$, and if $w \ne 0$ and $w_n \ne 0$ for all integers $n \ge 0$, then the complex sequences indexed from zero whose values at $n$ are $w_n^{-1}$, $z_n / w_n$ converge to $w^{-1}$, $z / w$. Here $z$, $w$ are the limits of $(z_n)_{n \ge 0}$, $(w_n)_{n \ge 0}$.
:::

## 직관

해석학 입문의 [[limit-of-sum-and-product|극한의 사칙연산]]은 수렴하는 실수열에 대해 "극한을 먼저 구하고 계산해도, 계산한 뒤 극한을 구해도 같다"는 것이었습니다(나눗셈은 나누는 수열의 항과 극한이 $0$이 아닐 때). 복소수의 덧셈과 곱셈은 실수부와 허수부의 덧셈과 곱셈으로 적히므로, [[convergence-of-complex-sequences|복소수열의 수렴]]의 실수부·허수부 판정을 거치면 같은 말이 복소수열에도 성립합니다. 예컨대 $z_n w_n$의 실수부는 $\operatorname{Re} z_n \operatorname{Re} w_n - \operatorname{Im} z_n \operatorname{Im} w_n$이고, 이것은 실수열 네 개의 곱과 차라서 실수의 극한 법칙이 그대로 통합니다.

절댓값은 조금 다르게 봅니다. $|z_n|$과 $|z|$는 원점까지의 거리이고, 두 점에서 같은 점까지 잰 거리의 차는 두 점 사이의 거리보다 크지 않습니다. 그래서 $z_n$이 $z$에 가까우면 $|z_n|$도 $|z|$에 가깝습니다. 거꾸로는 성립하지 않을 수 있습니다. 원 위를 도는 점들은 원점까지의 거리가 늘 같지만 한 점에 모이지 않을 수 있습니다(아래 반례).

역수에서는 극한이 $0$이 아니라는 가정이 쓰입니다. (5)의 (i)의 증명에서는 $w$의 실수부와 허수부의 제곱의 합 $N$이 $0$이 아니어야 실수열의 역수의 극한 법칙을 쓸 수 있고, (ii)에서는 $|w| / 2$가 양수여야 어느 번호부터 $|w_n| > |w| / 2$라는 것을 얻습니다. 극한이 $0$이면 항이 모두 $0$이 아니어도 역수의 수열이 발산할 수 있습니다(아래 반례).

## 증명

:::idea
합, 차, 곱, 켤레, 역수는 실수부와 허수부를 실수열의 식으로 쓰고 실수판 극한 법칙과 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)을 쓴다. 절댓값은 거리의 역삼각부등식 $\bigl|\,|z_n| - |z|\,\bigr| \le |z_n - z|$로 누른다.
:::

:::hint
$w_n^{-1}$의 실수부는 [[complex-field|복소수체]]의 (1)에 의해 $\operatorname{Re} w_n \cdot N_n^{-1}$이고, 여기서 $N_n = (\operatorname{Re} w_n)^2 + (\operatorname{Im} w_n)^2$은 $0$이 아닌 실수입니다. $(N_n)$의 극한이 $0$이 아니라는 것을 먼저 보입니다.
:::

:::hint
(5)의 (ii)에서는 $\varepsilon = |w| / 2$로 수렴의 정의를 쓰고, $|w| = d(w, 0) \le d(w, w_n) + d(w_n, 0)$에서 $|w_n|$을 아래로 누릅니다.
:::

:::proof
"실수 극한 (n)"은 [[limit-of-sum-and-product|극한의 사칙연산]]의 번호, "수렴 (n)"은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 번호, "복소수 (n)", "복소수체 (n)", "켤레 (n)", "복소 절댓값 (n)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]]의 번호, "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이다. 수렴 (3)에 의해 실수열 $(\operatorname{Re} z_n)$, $(\operatorname{Im} z_n)$, $(\operatorname{Re} w_n)$, $(\operatorname{Im} w_n)$은 각각 $\operatorname{Re} z$, $\operatorname{Im} z$, $\operatorname{Re} w$, $\operatorname{Im} w$로 수렴한다. 복소수 $c$의 상수 수열과 실수의 상수 수열은 수렴 (2)와 [[basic-limits]]의 (1)에 의해 그 수로 수렴한다. 아래에서 복소수열이 수렴한다는 것을 보일 때는 모두 수렴 (3)을 쓴다. 곧 그 실수부의 수열과 허수부의 수열이 각각 목표의 실수부와 허수부로 수렴한다는 것을 보인다.

**1의 증명.** 복소수 (2)에 의해 $\operatorname{Re}(z_n + w_n) = \operatorname{Re} z_n + \operatorname{Re} w_n$이고, 실수 극한 (1)에 의해 이것은 $\operatorname{Re} z + \operatorname{Re} w = \operatorname{Re}(z + w)$로 수렴한다. 허수부도 같다. 차는 복소수체 (1)의 $\operatorname{Re}(z_n - w_n) = \operatorname{Re} z_n - \operatorname{Re} w_n$, $\operatorname{Im}(z_n - w_n) = \operatorname{Im} z_n - \operatorname{Im} w_n$에 실수 극한 (2)를 쓴다.

**2의 증명.** 복소수 (2)에 의해
$$
\begin{aligned}
\operatorname{Re}(z_n w_n) &= \operatorname{Re} z_n \operatorname{Re} w_n \\
&\qquad - \operatorname{Im} z_n \operatorname{Im} w_n, \\
\operatorname{Im}(z_n w_n) &= \operatorname{Re} z_n \operatorname{Im} w_n \\
&\qquad + \operatorname{Im} z_n \operatorname{Re} w_n
\end{aligned}
$$
이다. 실수 극한 (3)과 (2)에 의해 첫째 실수열은 $\operatorname{Re} z \operatorname{Re} w - \operatorname{Im} z \operatorname{Im} w$로, 실수 극한 (3)과 (1)에 의해 둘째 실수열은 $\operatorname{Re} z \operatorname{Im} w + \operatorname{Im} z \operatorname{Re} w$로 수렴하고, 복소수 (2)에 의해 이 두 실수는 $\operatorname{Re}(zw)$와 $\operatorname{Im}(zw)$이다. 상수배는 앞 문장을 모든 항이 $c$인 상수 수열과 $(z_n)$에 쓴 것이고, $c + z_n$은 (1)을 같은 상수 수열과 $(z_n)$에 쓴 것이다.

**3의 증명.** 켤레 (1)에 의해 $\operatorname{Re} \overline{z_n} = \operatorname{Re} z_n$이고 $\operatorname{Im} \overline{z_n} = -\operatorname{Im} z_n$이다. 첫째 실수열은 $\operatorname{Re} z = \operatorname{Re} \overline{z}$로 수렴한다. (K12)에 의해 $-\operatorname{Im} z_n = (-1) \operatorname{Im} z_n$이므로 실수 극한 (5)에 의해 둘째 실수열은 $(-1) \operatorname{Im} z = -\operatorname{Im} z = \operatorname{Im} \overline{z}$로 수렴한다.

**4의 증명.** [[complex-plane-as-metric-space|복소평면의 거리]]의 (1)에 의해 $|z_n| = d(z_n, 0)$, $|z| = d(z, 0)$, $|z_n - z| = d(z_n, z)$이고, [[metric-space|거리공간]]의 (2)의 거리의 역삼각부등식에 의해 모든 $n$에서
$$
\bigl|\,|z_n| - |z|\,\bigr| \le |z_n - z|
$$
이다. 수렴 (1)에 의해 $n$번째 항이 $|z_n - z|$인 실수열은 $0$으로 수렴하므로, [[comparison-with-null-sequence|0으로 수렴하는 수열과의 비교]]의 (3)에 의해 $(|z_n|)$은 $|z|$로 수렴한다.

**5의 증명.** 먼저 (ii)의 앞 문장을 보인다. $w \ne 0$이므로 복소 절댓값 (1)에 의해 $0 < |w|$이고 순서 성질 (8)에 의해 $0 < |w| / 2 < |w|$이다. 수렴 (1)에 의해 $n \ge M$이면 $|w_n - w| < |w| / 2$인 자연수 $M$이 있다. $K = M$으로 두고 $n > K$라 하자. 거리의 삼각부등식(거리공간의 조건 (iv))과 대칭성 (iii), 복소평면의 거리 (1)에 의해
$$
\begin{aligned}
|w| = d(w, 0) &\le d(w, w_n) + d(w_n, 0) \\
&= |w_n - w| + |w_n|
\end{aligned}
$$
이고, $|w_n - w| < |w| / 2$이므로 순서 성질 (2)의 (ii)와 (1)의 (v)에 의해 $|w| < |w| / 2 + |w_n|$, 곧 $|w| / 2 = |w| - |w| / 2 < |w_n|$이다. 따라서 $0 < |w_n|$이고 복소 절댓값 (1)에 의해 $w_n \ne 0$이다.

**(i).** $w_n \ne 0$이므로 복소수체 (1)에 의해 실수 $N_n = (\operatorname{Re} w_n)^2 + (\operatorname{Im} w_n)^2$은 $0$이 아니고
$$
\begin{aligned}
\operatorname{Re}(w_n^{-1}) &= \operatorname{Re} w_n \cdot N_n^{-1}, \\
\operatorname{Im}(w_n^{-1}) &= -\operatorname{Im} w_n \cdot N_n^{-1}
\end{aligned}
$$
이다. 같은 이유로 $N = (\operatorname{Re} w)^2 + (\operatorname{Im} w)^2$은 $0$이 아니고 $w^{-1}$의 실수부와 허수부는 $\operatorname{Re} w \cdot N^{-1}$, $-\operatorname{Im} w \cdot N^{-1}$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $a^2 = aa$이므로 실수 극한 (3)과 (1)에 의해 $(N_n)$은 $N$으로 수렴한다. $N \ne 0$이고 모든 $n$에서 $N_n \ne 0$이므로 실수 극한 (4)에 의해 $(N_n^{-1})$은 $N^{-1}$로 수렴한다. 실수 극한 (3)에 의해 $(\operatorname{Re} w_n \cdot N_n^{-1})$은 $\operatorname{Re} w \cdot N^{-1}$로 수렴하고, (3)의 증명에서처럼 $(-\operatorname{Im} w_n)$은 $-\operatorname{Im} w$로 수렴하므로 $(-\operatorname{Im} w_n \cdot N_n^{-1})$은 $-\operatorname{Im} w \cdot N^{-1}$로 수렴한다. 따라서 $(w_n^{-1})$은 $w^{-1}$로 수렴한다. 몫은 $z_n / w_n = z_n w_n^{-1}$이므로 (2)를 $(z_n)$과 $(w_n^{-1})$에 쓰면 $z w^{-1} = z / w$로 수렴한다.

**(ii)의 뒤 문장.** $(w_n)$의 $K$-꼬리의 $n$번째 항은 $w_{n+K}$이고 $n + K > K$이므로 앞 문단에 의해 $w_{n+K} \ne 0$이다. 수렴 (2)에 의해 두 $K$-꼬리는 각각 $w$, $z$로 수렴하므로 (i)을 두 $K$-꼬리에 쓴다.

**6의 증명.** (i). 복소수체 (2)의 (ii)에 의해 $\operatorname{Re} \iota(x_n) = x_n$, $\operatorname{Im} \iota(x_n) = 0$이고 $\operatorname{Re} \iota(x) = x$, $\operatorname{Im} \iota(x) = 0$이다. 허수부의 수열은 모든 항이 $0$이므로 $0$으로 수렴한다. 수렴 (3)에 의해 $(\iota(x_n))$이 $\iota(x)$로 수렴하는 것은 정확히 $(x_n)$이 $x$로 수렴할 때이다. $(\iota(x_n))$이 어떤 복소수 $u$로 수렴하면 수렴 (3)에 의해 $(x_n) = (\operatorname{Re} \iota(x_n))$이 $\operatorname{Re} u$로 수렴하고 $(\operatorname{Im} \iota(x_n))$이 $\operatorname{Im} u$로 수렴하므로, [[limit-is-unique|극한의 유일성]]에 의해 $\operatorname{Im} u = 0$이고 복소수체 (2)의 (iii)에 의해 $u = \iota(\operatorname{Re} u)$이다. 그러므로 $(\iota(x_n))$이 수렴하는 것은 정확히 $(x_n)$이 수렴할 때이고, 극한의 등식은 앞 문장과 수렴 (2)의 기호에서 나온다.

(ii). 복소수체 (3)에 의해 모든 $n$에서 $\operatorname{Im} z_n = 0$이다. 수렴 (3)에 의해 $(\operatorname{Im} z_n)$은 $\operatorname{Im} z$로 수렴하는데 이 실수열은 모든 항이 $0$이므로 $0$으로도 수렴하고, 극한의 유일성에 의해 $\operatorname{Im} z = 0$이다. 복소수체 (2)의 (iii)에 의해 $z = \iota(\operatorname{Re} z)$이고, 수렴 (3)에 의해 $\operatorname{Re} z = \lim_{n \to \infty} \operatorname{Re} z_n$이다.

(iii). (i)에 의해 $(\iota(x_n))$은 $\iota(x)$로 수렴하므로, (2)를 $(\iota(x_n))$과 $(z_n)$에 쓴다. 복소수체 (3)의 (i)의 약속에 의해 $x_n z_n$은 $\iota(x_n) z_n$을 뜻한다.

**7의 증명.** 수렴 (6)의 (i)에 의해 0부터 번호가 붙은 복소수열이 수렴한다는 것과 그 극한은 자연수에서의 값만 쓴 $(z_n)_{n \ge 1}$의 것이다. 예컨대 $n$에서의 값이 $z_n + w_n$인 0부터 번호가 붙은 복소수열에서 자연수에서의 값만 쓴 것은 $n$번째 항이 $z_n + w_n$인 복소수열, 곧 $(z_n)_{n \ge 1}$과 $(w_n)_{n \ge 1}$에 (1)을 쓰는 수열이다. 다른 경우도 같고, (5)의 (i)에서는 $0$ 이상인 모든 정수 $n$에서 $w_n \ne 0$이면 특히 모든 자연수 $n$에서 $w_n \ne 0$이다.
:::

## 예시와 반례

:::example[(n⁻¹ + i)(2 − n⁻¹ i) 의 극한]
$z_n = n^{-1} + i$, $w_n = 2 - n^{-1} i$로 두면 [[basic-limits]]의 (1), (2)와 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)에 의해 $(z_n)$은 $0 + 1 i = i$로, $(w_n)$은 $2 - 0 i = 2$로 수렴합니다. (2)에 의해 $n$번째 항이 $z_n w_n$인 복소수열은 $i \cdot 2 = 2i$로 수렴합니다. [[complex-number|복소수]]의 (2)로 곱을 직접 풀면 $\operatorname{Re}(z_n w_n) = n^{-1} \cdot 2 - 1 \cdot (-n^{-1}) = 3 n^{-1}$, $\operatorname{Im}(z_n w_n) = n^{-1}(-n^{-1}) + 1 \cdot 2 = 2 - n^{-1} n^{-1}$이고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5), (3), (2)에 의해 실수부는 $0$으로, 허수부는 $2 - 0 \cdot 0 = 2$로 수렴하므로 같은 답입니다.
:::

:::counterexample[절댓값의 수열은 수렴하지만 수열은 발산하는 예]
자연수 $n$이 짝수이면 $z_n = i$, 홀수이면 $z_n = -i$인 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 반례 '실수부의 수열만 수렴하는 예'에서 본 것처럼 발산합니다. 그런데 [[modulus-of-complex-number|복소수의 절댓값]]의 (2)와 (5)에 의해 $|i| = |-i| = 1$이므로 $(|z_n|)$은 모든 항이 $1$인 상수 수열이고 $1$로 수렴합니다. 그래서 (4)의 거꾸로, 곧 "$(|z_n|)$이 수렴하면 $(z_n)$이 수렴한다"는 성립하지 않을 수 있습니다. 다만 극한이 $0$인 경우에는 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (1)의 마지막 문장대로 거꾸로도 성립합니다.
:::

:::counterexample[극한이 0 인 수열의 역수가 발산하는 예]
$w_n = n^{-1} i$로 두면 모든 항이 $0$이 아니고, 허수부의 수열 $(n^{-1})$이 $0$으로 수렴하므로 $(w_n)$은 $0$으로 수렴합니다. [[complex-field|복소수체]]의 (1)의 역원의 식에 의해 $w_n^{-1} = -n i$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|w_n^{-1}| = n$입니다. 모든 $n$에서 $|w_n^{-1}| \le B$인 실수 $B$는 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 없으므로, [[convergence-of-complex-sequences|복소수열의 수렴]]의 (4)에 의해 $(w_n^{-1})$은 유계가 아니고 수렴하지 않습니다. (5)에서 $w \ne 0$이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$(z_n)$과 $n$번째 항이 $z_n w_n$인 복소수열이 모두 수렴하면 $(w_n)$도 수렴하는가?]
그렇지 않을 수 있습니다. 모든 항이 $0$인 $(z_n)$과, $n$이 짝수이면 $w_n = i$, 홀수이면 $w_n = -i$인 $(w_n)$을 잡으면 모든 항에서 $z_n w_n = 0$이라 곱의 수열은 $0$으로 수렴하지만, $(w_n)$은 위 반례에서 본 것처럼 발산합니다. (2)는 두 수열이 모두 수렴한다고 가정합니다.
:::

:::check[$(z_n)$이 $z$로 수렴하면 $n$번째 항이 $z_n - \overline{z_n}$인 복소수열은 무엇으로 수렴하는가?]
(3)에 의해 $(\overline{z_n})$은 $\overline{z}$로 수렴하고, (1)에 의해 차의 수열은 $z - \overline{z}$로 수렴합니다. [[complex-conjugate|켤레복소수]]의 (3)에 의해 이것은 $2(\operatorname{Im} z) i$입니다. 예컨대 $(z_n)$이 실수인 복소수로만 이루어져 있으면 모든 항이 $0$이고 극한도 $0$인데, 이것은 (6)의 (ii)에 의해 $z$가 실수인 복소수라는 것과 맞습니다.
:::
