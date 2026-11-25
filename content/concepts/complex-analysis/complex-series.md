---
title: 복소 급수
title_en: Complex Series
aliases: [복소수의 급수, 복소 급수의 합, 복소 급수의 수렴, 복소수열의 부분합, complex series, series of complex numbers, sum of a complex series]
kind: definition
field: complex-analysis
msc: ["30", "40A05"]
level: undergrad
summary: 복소수열의 급수가 수렴한다는 것을 부분합 수열의 수렴으로 정하고, 0 이상인 번호 m 부터 정해진 항의 급수와 그 합 Σ_{n=m}^∞ t_n 을 수렴할 때만 쓰는 기호로 정한다. 부분합, 실수부와 허수부로 판정하기, 실수 항의 급수와의 일치, 꼬리로 쪼개기, 복소수 상수에 대한 선형성, 켤레, 수렴하는 급수의 항이 0 으로 수렴한다는 것을 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, sequence, limit-is-unique, basic-limits, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges, finite-sum-of-reals, sum-of-a-series, series-indexed-from-zero, ring, ring-basic-properties, sequence-in-a-space, complex-number, complex-field, complex-conjugate, complex-finite-sum, convergence-of-complex-sequences]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.2소절 Complex numbers and limits (p.141–142); 11.1.4소절 Exercise 11.1.4 (p.142); 11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153); 11.4절 Complex exponential and trigonometric functions, 11.4.2소절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.165)"
    checked: original
    note: "출처 11.1.2소절(p.141)은 복소수열 {z_n} 의 급수 Σ_{n=1}^∞ z_n 이 수렴한다는 것을 부분합 수열이 수렴한다는 것, 곧 lim_{k→∞} Σ_{n=1}^k z_n 이 있다는 것으로 정의한다. 이 항목의 '복소수열의 급수'의 정의와 (1)이 그것이다. 출처는 기호 Σ_{n=1}^∞ z_n 을 급수 자체와 그 합 모두에 쓰지만, 이 항목은 급수와 멱급수 강의의 급수의 합의 기호처럼 수렴할 때의 합인 복소수에만 쓴다. 같은 소절(p.141)은 ℂ 에서의 수렴이 실수부와 허수부의 수렴과 같으므로 실수에 관한 결과를 실수부와 허수부에 써도 된다고 적는다. (2)는 그 말을 급수에 대해 진술한 것이고, (4)–(7)은 모두 (2)를 거쳐 실수판에서 얻는다. 출처 p.142 는 'The following two propositions have essentially the same proofs as their analogues for real series' 라고 적고 Proposition 11.1.4(급수의 코시 판정)를 Exercise 11.1.4(p.142)로 남긴다. 이 항목은 그 명제를 진술하지 않는다. 출처 p.141 의 정의는 n = 1 부터의 급수에 대한 것이고, 출처는 11.3.1소절(p.153)에서 n = 0 부터의 급수 Σ_{n=0}^∞ c_n(z − a)ⁿ 과 Σ_{n=0}^∞ zⁿ 을 쓴다. 이 항목의 '1부터 다시 번호 붙인 수열'은 급수와 멱급수 강의의 정의를 복소수로 옮긴 것이다. (6)의 켤레의 급수는 출처 Proposition 11.4.2 의 증명(p.165)이 켤레가 연속이라는 것으로 지수함수의 급수의 켤레를 켤레의 급수로 바꾸는 것과 같은 사실이다. 이 항목은 연속을 쓰지 않고 실수부와 허수부로 증명한다. 예시 '0부터 번호가 붙은 두 등비 꼴의 합'의 공비 1/2 인 등비급수는 출처 11.3.1소절(p.153)의 Σ zⁿ = 1/(1 − z) 에 z = 1/2 를 넣은 것과 같은 합이다."
  - ref: lebl-basic-analysis
    loc: "2.5절 Series, 2.5.1소절 Definition, Example 2.5.4 (p.88); 2.5.3소절 Basic properties, Example 2.5.10 과 Example 2.5.11 (p.90)"
    checked: original
    note: "예시와 반례의 실수부·허수부는 Lebl I 의 실수 급수의 예와 겹친다. 예시 '0부터 번호가 붙은 두 등비 꼴의 합'의 Σ_{n=1}^∞ (1/2)ⁿ = 1 은 출처 Example 2.5.4(p.88)의 Σ 1/2ⁿ 과 같은 급수이다. 반례 '실수부의 급수만 수렴하는 예'의 허수부(모든 항이 1)는 출처 Example 2.5.10(p.90)의 r = 1 인 등비급수와 같은 급수이고, 출처도 항이 0 으로 가지 않는다는 것으로 발산을 보인다. 반례 '항은 0 으로 수렴하지만 급수는 발산하는 예'의 허수부는 출처 Example 2.5.11(p.90)의 조화급수이고, 출처도 그 예로 항이 0 으로 수렴해도 급수가 발산할 수 있다는 것을 보인다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(첫 번호 m 의 정의 재진술과 복소 메르텐스의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]]의 것이며, 켤레복소수 $\overline{z}$는 [[complex-conjugate]]의 것이다. 복소수의 유한 합 $\sum_{k=m}^{n}$, $0$부터의 합 $\sum_{n=0}^{K}$, 빈 합은 [[complex-finite-sum]]의 것이다. 복소수열, 그 수렴, 발산, 극한의 기호 $\lim_{n \to \infty}$, 실수부의 수열과 허수부의 수열, 0부터 번호가 붙은 복소수열 $(z_n)_{n \ge 0}$과 $(z_n)_{n \ge 1}$은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이고, 식으로 쓴 복소수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 값으로 정한 수열이다. 실수열의 급수, 그 부분합, 수렴, 발산, 합은 [[series-and-partial-sums]]의 것이고, 실수 항의 급수의 합의 기호 $\sum_{n=m}^{\infty}$는 $m$이 자연수이면 [[sum-of-a-series]]의 것, $m = 0$이면 [[series-indexed-from-zero]]의 것이다. 두 경우 모두 $n \ge m$에서 정해진 실수 항 $s_n$의 급수는 $j$번째 항이 $s_{j+m-1}$인 실수열의 급수이고, 수렴할 때 $\sum_{n=m}^{\infty} s_n = \sum_{j=1}^{\infty} s_{j+m-1}$이다.

**복소수열의 급수.** $(z_n)$을 복소수열이라 하자. 자연수 $k$마다 $\sum_{n=1}^{k} z_n$은 복소수의 유한 합으로 정해진 복소수이므로, $k$번째 항이 $\sum_{n=1}^{k} z_n$인 복소수열이 있다. 이것을 $(z_n)$의 **부분합 수열**이라 하고, 그 $k$번째 항을 $(z_n)$의 $k$번째 **부분합**이라 한다.

- $(z_n)$의 **급수가 수렴한다**는 것은 정확히 부분합 수열이 수렴할 때이다. 이때 그 극한을 $(z_n)$의 **급수의 합**이라 한다.
- $(z_n)$의 급수가 **발산한다**는 것은 정확히 부분합 수열이 발산할 때이다.

급수는 수열 $(z_n)$이나 부분합 수열과 다른 별도의 대상이 아니다. "$(z_n)$의 급수"에 대해 말하는 그 밖의 문장은 수열 $(z_n)$이 그렇다는 뜻이다.

**첫 번호가 $m$인 항의 급수.** $m$을 $0$ 이상인 정수라 하고, $m$ 이상인 정수 $n$마다 복소수 $t_n$이 $n$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자. 자연수 $j$에 대하여 $j + m - 1$은 $m$ 이상인 정수이므로, $j$번째 항이 $t_{j+m-1}$인 복소수열이 있다. 이 복소수열을 "$n \ge m$에서 정해진 항 $t_n$을 **1부터 다시 번호 붙인 수열**"이라 한다. "$n \ge m$에서 정해진 항 $t_n$의 급수가 수렴한다(발산한다)"는 것은 정확히 1부터 다시 번호 붙인 수열의 급수가 수렴할(발산할) 때이다.

- $m = 1$이고 $t_n$이 복소수열 $(z_n)$의 항이면 1부터 다시 번호 붙인 수열은 $(z_n)$ 자신이다.
- $m = 0$이고 $t_n$이 0부터 번호가 붙은 복소수열 $(z_n)_{n \ge 0}$의 값이면, 1부터 다시 번호 붙인 수열은 $j$번째 항이 $z_{j-1}$인 복소수열이다. 이것을 $(z_n)_{n \ge 0}$을 **한 칸 옮긴 수열**이라 하고, $(z_n)_{n \ge 0}$의 급수가 수렴한다(발산한다)는 것은 $n \ge 0$에서 정해진 항 $z_n$의 급수가 수렴한다(발산한다)는 뜻이다.
- $K$가 $0$ 이상인 정수이고 $n \ge K + 1$에서 $t_n = z_n$이면, 1부터 다시 번호 붙인 수열은 $j$번째 항이 $z_{j+K}$인 복소수열이다. $K$가 자연수이면 이것은 $(z_n)$의 $K$-꼬리이다.

**급수의 합의 기호.** $n \ge m$에서 정해진 항 $t_n$의 급수가 수렴할 때, 1부터 다시 번호 붙인 수열의 급수의 합을
$$
\sum_{n=m}^{\infty} t_n
$$
으로 쓴다. 복소수 $S$에 대하여 "$\sum_{n=m}^{\infty} t_n = S$"는 정확히 그 급수가 수렴하고 합이 $S$라는 뜻이다. 급수가 발산하면 이 기호를 쓰지 않는다. 특히 $(z_n)$의 급수가 수렴할 때 그 합은 $\sum_{n=1}^{\infty} z_n$이고, $(z_n)_{n \ge 0}$의 급수가 수렴할 때 그 합은 $\sum_{n=0}^{\infty} z_n$이며, $(z_n)$의 $K$-꼬리의 급수가 수렴할 때 그 합 $\sum_{n=K+1}^{\infty} z_n$을 $(z_n)$의 **$K$-꼬리의 합**이라 한다. 기호 안의 $\infty$는 수가 아니라 기호의 일부이고, 합의 첨자 $n$은 기호 안에서만 쓰는 이름이다. "$\sum_{n=m}^{\infty}(n\text{에 대한 식})$"은 $m$ 이상인 정수 $n$마다 그 식으로 정해진 항의 급수의 합을 뜻한다.

다음이 성립한다. 아래에서 $m$은 $0$ 이상인 정수이고, $t_n$, $w_n$은 $m$ 이상인 정수 $n$마다 위의 뜻으로 정해진 복소수, $x_n$은 같은 뜻으로 정해진 실수이며, $c$는 복소수이다. "$t_n$의 급수"는 "$n \ge m$에서 정해진 항 $t_n$의 급수"의 줄임말이고, "$\operatorname{Re} t_n$의 급수"는 $n \ge m$에서 정해진 실수 항 $\operatorname{Re} t_n$의 급수이다.

1. (부분합) 모든 자연수 $k$에서, $t_n$을 1부터 다시 번호 붙인 수열의 $k$번째 부분합은 $m \ge 1$이면 $\sum_{n=m}^{k+m-1} t_n$이고 $m = 0$이면 $\sum_{n=0}^{k-1} t_n$이다. 따라서 $t_n$의 급수가 수렴하면, $m \ge 1$이면 $\sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} \sum_{n=m}^{k+m-1} t_n$이다. 특히 $(z_n)$의 $k$번째 부분합은 $\sum_{n=1}^{k} z_n$이다. 또 $(z_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 $k$에서의 값이 $\sum_{n=0}^{k} z_n$인 0부터 번호가 붙은 복소수열이 수렴할 때이고, 이때
   $$
   \sum_{n=0}^{\infty} z_n = \lim_{k \to \infty} \sum_{n=0}^{k} z_n
   $$
   이다.
2. (실수부와 허수부) $t_n$의 급수가 수렴하는 것은 정확히 $\operatorname{Re} t_n$의 급수와 $\operatorname{Im} t_n$의 급수가 모두 수렴할 때이다. 이때
   $$
   \begin{aligned}
   \operatorname{Re} \sum_{n=m}^{\infty} t_n &= \sum_{n=m}^{\infty} \operatorname{Re} t_n, \\
   \operatorname{Im} \sum_{n=m}^{\infty} t_n &= \sum_{n=m}^{\infty} \operatorname{Im} t_n
   \end{aligned}
   $$
   이다. 곧 $\sum_{n=m}^{\infty} t_n = \sum_{n=m}^{\infty} \operatorname{Re} t_n + \bigl(\sum_{n=m}^{\infty} \operatorname{Im} t_n\bigr) i$이다.
3. (실수 항의 급수와의 일치) $\iota(x_n)$의 급수가 수렴하는 것은 정확히 실수 항 $x_n$의 급수가 수렴할 때이고, 이때 $\sum_{n=m}^{\infty} \iota(x_n) = \iota\bigl(\sum_{n=m}^{\infty} x_n\bigr)$이다. 오른쪽은 실수 항의 급수의 합이다. 따라서 실수 항의 급수의 합을 복소수 자리에 써도 두 읽기의 값이 같다. 특히 모든 항이 $0$인 급수는 수렴하고 그 합은 $0$이다.
4. (꼬리로 쪼개기) $K$가 $m - 1 \le K$인 정수이면, $t_n$의 급수가 수렴하는 것은 정확히 $n \ge K + 1$에서 정해진 항 $t_n$의 급수가 수렴할 때이고, 이때
   $$
   \sum_{n=m}^{\infty} t_n = \sum_{n=m}^{K} t_n + \sum_{n=K+1}^{\infty} t_n
   $$
   이다. 가운데 합은 $m \ge 1$이면 복소수의 유한 합, $m = 0$이면 $0$부터의 합이고, $K = m - 1$이면 빈 합 $0$이다. 특히 $(z_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 $(z_n)_{n \ge 1}$의 급수가 수렴할 때이고, 이때 $\sum_{n=0}^{\infty} z_n = z_0 + \sum_{n=1}^{\infty} z_n$이다.
5. (선형성) $t_n$의 급수와 $w_n$의 급수가 수렴하면, $c\,t_n + w_n$의 급수, $c\,t_n$의 급수, $t_n - w_n$의 급수도 수렴하고
   $$
   \begin{aligned}
   \sum_{n=m}^{\infty} (c\,t_n + w_n) &= c \sum_{n=m}^{\infty} t_n \\
   &\qquad + \sum_{n=m}^{\infty} w_n, \\
   \sum_{n=m}^{\infty} c\,t_n &= c \sum_{n=m}^{\infty} t_n, \\
   \sum_{n=m}^{\infty} (t_n - w_n) &= \sum_{n=m}^{\infty} t_n \\
   &\qquad - \sum_{n=m}^{\infty} w_n
   \end{aligned}
   $$
   이다. $t_n$의 급수가 수렴하고 $w_n$의 급수가 발산하면 $t_n + w_n$의 급수는 발산한다.
6. (켤레) $\overline{t_n}$의 급수가 수렴하는 것은 정확히 $t_n$의 급수가 수렴할 때이고, 이때 $\sum_{n=m}^{\infty} \overline{t_n} = \overline{\sum_{n=m}^{\infty} t_n}$이다.
7. (수렴하는 급수의 항) $t_n$의 급수가 수렴하면 $t_n$을 1부터 다시 번호 붙인 수열은 $0$으로 수렴한다. 특히 $(z_n)$의 급수가 수렴하면 $(z_n)$은 $0$으로 수렴하고, $(z_n)_{n \ge 0}$의 급수가 수렴하면 $(z_n)_{n \ge 0}$은 $0$으로 수렴한다. 따라서 $(z_n)$(또는 $(z_n)_{n \ge 0}$)이 $0$으로 수렴하지 않으면 그 급수는 발산한다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, the convention for writing real numbers where complex numbers are required, and the form $a + bi$ are those of the entry on the field of complex numbers; the complex conjugate $\overline{z}$ is that of the entry on complex conjugates. Finite sums $\sum_{k=m}^{n}$ of complex numbers, sums from zero $\sum_{n=0}^{K}$, and empty sums are those of the entry on finite sums of complex numbers. Complex sequences, their convergence, divergence, limit notation $\lim_{n \to \infty}$, the sequences of real and imaginary parts, and complex sequences indexed from zero $(z_n)_{n \ge 0}$ and $(z_n)_{n \ge 1}$ are those of the entry on convergence of complex sequences, and a complex sequence written by a formula is a sequence defined by its values as in the entry on sequences in a topological space. Series of real sequences, their partial sums, convergence, divergence, and sums are those of the entry on series and partial sums, and the notation $\sum_{n=m}^{\infty}$ for sums of series of real terms is that of the entry on the notation for the sum of a series when $m$ is a natural number, and that of the entry on sequences indexed from zero when $m = 0$. In both cases the series of real terms $s_n$ defined for $n \ge m$ is the series of the real sequence whose $j$th term is $s_{j+m-1}$, and when it converges, $\sum_{n=m}^{\infty} s_n = \sum_{j=1}^{\infty} s_{j+m-1}$.

**Series of complex sequences.** Let $(z_n)$ be a complex sequence. For each natural number $k$, $\sum_{n=1}^{k} z_n$ is a complex number determined as a finite sum of complex numbers, so there is a complex sequence whose $k$th term is $\sum_{n=1}^{k} z_n$. It is called the **sequence of partial sums** of $(z_n)$, and its $k$th term is the $k$th **partial sum** of $(z_n)$.

- The **series** of $(z_n)$ **converges** exactly when the sequence of partial sums converges. Its limit is then called the **sum of the series** of $(z_n)$.
- The series of $(z_n)$ **diverges** exactly when the sequence of partial sums diverges.

A series is not a separate object distinct from the sequence $(z_n)$ or its sequence of partial sums. Any other sentence about "the series of $(z_n)$" means that the sequence $(z_n)$ has that property.

**Series of terms starting at index $m$.** Let $m$ be an integer $\ge 0$, and suppose that for each integer $n \ge m$ a complex number $t_n$ is given by an expression in $n$ or as an already determined object. For a natural number $j$, $j + m - 1$ is an integer $\ge m$, so there is a complex sequence whose $j$th term is $t_{j+m-1}$. This complex sequence is called the **renumbering from 1** of the terms $t_n$ defined for $n \ge m$. "The series of the terms $t_n$ defined for $n \ge m$ converges (diverges)" means exactly that the series of the renumbering from 1 converges (diverges).

- If $m = 1$ and $t_n$ are the terms of a complex sequence $(z_n)$, the renumbering from 1 is $(z_n)$ itself.
- If $m = 0$ and $t_n$ are the values of a complex sequence $(z_n)_{n \ge 0}$ indexed from zero, the renumbering from 1 is the complex sequence whose $j$th term is $z_{j-1}$. It is called the **shift by one** of $(z_n)_{n \ge 0}$, and "the series of $(z_n)_{n \ge 0}$ converges (diverges)" means that the series of the terms $z_n$ defined for $n \ge 0$ converges (diverges).
- If $K$ is an integer $\ge 0$ and $t_n = z_n$ for $n \ge K + 1$, the renumbering from 1 is the complex sequence whose $j$th term is $z_{j+K}$. If $K$ is a natural number, this is the $K$-tail of $(z_n)$.

**Notation for the sum of a series.** When the series of the terms $t_n$ defined for $n \ge m$ converges, the sum of the series of the renumbering from 1 is written
$$
\sum_{n=m}^{\infty} t_n.
$$
For a complex number $S$, "$\sum_{n=m}^{\infty} t_n = S$" means exactly that the series converges and its sum is $S$. If the series diverges, this notation is not used. In particular, when the series of $(z_n)$ converges its sum is $\sum_{n=1}^{\infty} z_n$; when the series of $(z_n)_{n \ge 0}$ converges its sum is $\sum_{n=0}^{\infty} z_n$; and when the series of the $K$-tail of $(z_n)$ converges, its sum $\sum_{n=K+1}^{\infty} z_n$ is called the **sum of the $K$-tail** of $(z_n)$. The symbol $\infty$ inside the notation is not a number but part of the notation, and the summation index $n$ is a name used only inside the notation. "$\sum_{n=m}^{\infty}(\text{an expression in } n)$" means the sum of the series of the terms given by that expression for each integer $n \ge m$.

The following hold. Below, $m$ is an integer $\ge 0$; $t_n$, $w_n$ are complex numbers given in the above sense for each integer $n \ge m$, and $x_n$ are real numbers given in the same sense; $c$ is a complex number. "The series of $t_n$" abbreviates "the series of the terms $t_n$ defined for $n \ge m$", and "the series of $\operatorname{Re} t_n$" is the series of the real terms $\operatorname{Re} t_n$ defined for $n \ge m$.

1. (Partial sums) For every natural number $k$, the $k$th partial sum of the renumbering from 1 of $t_n$ is $\sum_{n=m}^{k+m-1} t_n$ if $m \ge 1$, and $\sum_{n=0}^{k-1} t_n$ if $m = 0$. Hence, if the series of $t_n$ converges and $m \ge 1$, then $\sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} \sum_{n=m}^{k+m-1} t_n$. In particular, the $k$th partial sum of $(z_n)$ is $\sum_{n=1}^{k} z_n$. Moreover, the series of $(z_n)_{n \ge 0}$ converges exactly when the complex sequence indexed from zero whose value at $k$ is $\sum_{n=0}^{k} z_n$ converges, and then
   $$
   \sum_{n=0}^{\infty} z_n = \lim_{k \to \infty} \sum_{n=0}^{k} z_n.
   $$
2. (Real and imaginary parts) The series of $t_n$ converges exactly when the series of $\operatorname{Re} t_n$ and the series of $\operatorname{Im} t_n$ both converge. In that case
   $$
   \begin{aligned}
   \operatorname{Re} \sum_{n=m}^{\infty} t_n &= \sum_{n=m}^{\infty} \operatorname{Re} t_n, \\
   \operatorname{Im} \sum_{n=m}^{\infty} t_n &= \sum_{n=m}^{\infty} \operatorname{Im} t_n;
   \end{aligned}
   $$
   that is, $\sum_{n=m}^{\infty} t_n = \sum_{n=m}^{\infty} \operatorname{Re} t_n + \bigl(\sum_{n=m}^{\infty} \operatorname{Im} t_n\bigr) i$.
3. (Agreement with series of real terms) The series of $\iota(x_n)$ converges exactly when the series of the real terms $x_n$ converges, and then $\sum_{n=m}^{\infty} \iota(x_n) = \iota\bigl(\sum_{n=m}^{\infty} x_n\bigr)$, where the right side is the sum of a series of real terms. Hence, when the sum of a series of real terms is written where a complex number is required, the two readings have the same value. In particular, the series all of whose terms are $0$ converges and its sum is $0$.
4. (Splitting off a tail) If $K$ is an integer with $m - 1 \le K$, then the series of $t_n$ converges exactly when the series of the terms $t_n$ defined for $n \ge K + 1$ converges, and then
   $$
   \sum_{n=m}^{\infty} t_n = \sum_{n=m}^{K} t_n + \sum_{n=K+1}^{\infty} t_n.
   $$
   The middle sum is a finite sum of complex numbers if $m \ge 1$ and a sum from zero if $m = 0$; if $K = m - 1$ it is the empty sum $0$. In particular, the series of $(z_n)_{n \ge 0}$ converges exactly when the series of $(z_n)_{n \ge 1}$ converges, and then $\sum_{n=0}^{\infty} z_n = z_0 + \sum_{n=1}^{\infty} z_n$.
5. (Linearity) If the series of $t_n$ and of $w_n$ converge, then the series of $c\,t_n + w_n$, of $c\,t_n$, and of $t_n - w_n$ also converge, and
   $$
   \begin{aligned}
   \sum_{n=m}^{\infty} (c\,t_n + w_n) &= c \sum_{n=m}^{\infty} t_n \\
   &\qquad + \sum_{n=m}^{\infty} w_n, \\
   \sum_{n=m}^{\infty} c\,t_n &= c \sum_{n=m}^{\infty} t_n, \\
   \sum_{n=m}^{\infty} (t_n - w_n) &= \sum_{n=m}^{\infty} t_n \\
   &\qquad - \sum_{n=m}^{\infty} w_n.
   \end{aligned}
   $$
   If the series of $t_n$ converges and the series of $w_n$ diverges, then the series of $t_n + w_n$ diverges.
6. (Conjugates) The series of $\overline{t_n}$ converges exactly when the series of $t_n$ converges, and then $\sum_{n=m}^{\infty} \overline{t_n} = \overline{\sum_{n=m}^{\infty} t_n}$.
7. (Terms of a convergent series) If the series of $t_n$ converges, then the renumbering from 1 of $t_n$ converges to $0$. In particular, if the series of $(z_n)$ converges then $(z_n)$ converges to $0$, and if the series of $(z_n)_{n \ge 0}$ converges then $(z_n)_{n \ge 0}$ converges to $0$. Hence, if $(z_n)$ (or $(z_n)_{n \ge 0}$) does not converge to $0$, its series diverges.
:::

## 직관

급수와 멱급수 강의는 실수 항의 급수가 수렴할 때 그 합에 기호 $\sum_{n=1}^{\infty} x_n$을 붙였습니다. 이 항목은 같은 일을 복소수 항에 대해 합니다. 부분합은 [[complex-finite-sum|복소수의 유한 합]]이고, 부분합 수열이 복소평면에서 한 점으로 모이면 그 점이 급수의 합입니다. 발산하는 급수에는 합의 기호를 쓰지 않는다는 약속도 그대로입니다.

복소수의 유한 합은 실수부끼리, 허수부끼리 더한 것이고, [[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)에 의해 복소수열의 수렴은 실수부와 허수부의 수렴입니다. 두 사실을 이으면 (2), 곧 복소 급수는 "실수 급수 두 개를 나란히 놓은 것"이라는 말이 됩니다. 지도 위에서 동쪽으로 간 거리와 북쪽으로 간 거리를 따로 기록하는 것과 같습니다. 걸음마다 두 방향의 거리를 따로 더하고, 두 기록이 각각 어떤 값에 가까워질 때 도착점이 정해집니다. 비유가 정의와 맞는 곳은 두 기록이 모두 정해져야 도착점이 정해진다는 것이고, 어긋나는 곳은 실제 걸음은 끝나지만 부분합은 끝없이 이어진다는 것입니다. 그래서 (3)–(7)은 모두 (2)로 실수부와 허수부에 실수판을 쓰고 다시 합치는 방식으로 얻습니다.

$m = 0$을 허락하는 것은 멱급수처럼 $0$번째 항부터 시작하는 급수를 같은 정의로 다루기 위해서입니다. $m = 0$에서는 $0$번째 항이 첫째 항이 되도록 한 칸 옮긴 수열의 급수를 봅니다. 실수 항이면 이것은 급수와 멱급수 강의의 [[series-indexed-from-zero|0부터 번호가 붙은 수열]]의 급수와 같은 정의이고, (3)이 두 합이 $\iota$로 맞는다는 것을 보장합니다.

## 성질의 증명

:::proof
"복소수 (n)", "복소수체 (n)", "켤레 (n)", "유한 합 (n)", "수렴 (n)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[complex-finite-sum]], [[convergence-of-complex-sequences]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

**진술의 확인.** 자연수 $j$는 (Z1)에 의해 $1 \le j$이므로 (Z7)에 의해 $0 \le j - 1$이고 $m \le (j - 1) + m = j + m - 1$이다. 따라서 $t_{j+m-1}$은 정해진 복소수이고, 1부터 다시 번호 붙인 수열이 있다. $m = 1$이면 $j + 1 - 1 = j$이고, $m = 0$이면 $j + 0 - 1 = j - 1$이며, $m = K + 1$이면 $j + (K + 1) - 1 = j + K$이므로 진술의 세 경우가 나온다($K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (6)의 것이다).

아래에서 $t_n$을 1부터 다시 번호 붙인 수열을 $(u_j)$, 그 $k$번째 부분합을 $P_k = \sum_{j=1}^{k} u_j$로 쓴다. 실수 항 $s_n$의 급수는 진술의 첫 문단대로 $j$번째 항이 $s_{j+m-1}$인 실수열의 급수이므로, $\operatorname{Re} t_n$의 급수는 $j$번째 항이 $\operatorname{Re} t_{j+m-1} = \operatorname{Re} u_j$인 실수열 $(\operatorname{Re} u_j)$의 급수이고, $\operatorname{Im} t_n$의 급수는 $(\operatorname{Im} u_j)$의 급수이다.

**핵심 등식.** 유한 합 (1)에 의해 모든 자연수 $k$에서 $\operatorname{Re} P_k = \sum_{j=1}^{k} \operatorname{Re} u_j$이고 $\operatorname{Im} P_k = \sum_{j=1}^{k} \operatorname{Im} u_j$이다. [[finite-sum-of-reals|실수의 유한 합]]의 (1)에 의해 오른쪽은 각각 실수열 $(\operatorname{Re} u_j)$와 $(\operatorname{Im} u_j)$의 $k$번째 부분합이다. 곧 부분합 수열 $(P_k)$의 실수부의 수열은 $(\operatorname{Re} u_j)$의 부분합 수열이고, 허수부의 수열은 $(\operatorname{Im} u_j)$의 부분합 수열이다.

**2의 증명.** 수렴 (3)에 의해 $(P_k)$가 수렴하는 것은 정확히 $(\operatorname{Re} P_k)$와 $(\operatorname{Im} P_k)$가 모두 수렴할 때이다. 핵심 등식에 의해 이것은 $(\operatorname{Re} u_j)$의 급수와 $(\operatorname{Im} u_j)$의 급수가 모두 수렴할 때, 곧 $\operatorname{Re} t_n$의 급수와 $\operatorname{Im} t_n$의 급수가 모두 수렴할 때이다. 정의에 의해 $(P_k)$가 수렴하는 것은 $t_n$의 급수가 수렴하는 것이다. 수렴할 때 수렴 (3)에 의해
$$
\begin{aligned}
\operatorname{Re} \sum_{n=m}^{\infty} t_n &= \operatorname{Re} \lim_{k \to \infty} P_k = \lim_{k \to \infty} \operatorname{Re} P_k \\
&= \sum_{j=1}^{\infty} \operatorname{Re} u_j = \sum_{n=m}^{\infty} \operatorname{Re} t_n
\end{aligned}
$$
이다. 셋째 등호는 [[series-and-partial-sums|급수와 부분합]]의 급수의 합의 정의와 [[sum-of-a-series]]의 기호이고, 넷째 등호는 진술의 첫 문단의 $\sum_{n=m}^{\infty} s_n = \sum_{j=1}^{\infty} s_{j+m-1}$이다. 허수부도 같다. 마지막 문장은 복소수체 (4)의 $z = \operatorname{Re} z + (\operatorname{Im} z) i$이다.

**1의 증명.** $m \ge 1$이라 하자. 자연수 $k$에 대하여 $r = m - 1$은 $0$ 이상인 정수이므로 $1 \le 1 + r$이고, 유한 합 (3)의 첨자 옮기기에 의해
$$
P_k = \sum_{j=1}^{k} u_j = \sum_{n=m}^{k+m-1} u_{n-m+1}
$$
이다. $m \le n \le k + m - 1$이면 $u_{n-m+1} = t_{(n-m+1)+m-1} = t_n$이므로 유한 합 (1)의 둘째 문장에 의해 $P_k = \sum_{n=m}^{k+m-1} t_n$이다. $m = 0$이면 유한 합의 $0$부터의 합의 정의에 의해 $\sum_{n=0}^{k-1} t_n = \sum_{j=1}^{k} t_{j-1} = P_k$이다. 수렴할 때의 식은 $\sum_{n=m}^{\infty} t_n = \lim_{k \to \infty} P_k$에 이 등식을 넣은 것이다. $(z_n)$에 대한 문장은 $m = 1$인 경우이다.

$(z_n)_{n \ge 0}$에 대한 문장: $0$ 이상인 정수 $k$에서 $Q_k = \sum_{n=0}^{k} z_n$으로 둔 0부터 번호가 붙은 복소수열 $(Q_k)_{k \ge 0}$은 수렴 (6)에 의해 있다. 그 한 칸 옮긴 수열의 $j$번째 항은 $Q_{j-1} = \sum_{n=0}^{j-1} z_n$이고, 앞 문단($m = 0$)에 의해 이것은 $P_j$이다. 수렴 (6)의 (ii)에 의해 $(Q_k)_{k \ge 0}$이 복소수 $S$로 수렴하는 것은 정확히 $(P_j)$가 $S$로 수렴할 때이므로, 두 수열은 함께 수렴하고 극한이 같다.

**3의 증명.** 복소수체 (2)의 (ii)에 의해 $\operatorname{Re} \iota(x_n) = x_n$이고 $\operatorname{Im} \iota(x_n) = 0$이다. 먼저 모든 항이 $0$인 실수 항의 급수를 본다. 1부터 다시 번호 붙인 수열은 모든 항이 $0$인 실수열 $(v_j)$이다. 모든 항이 $0$인 실수열 $(y_j)$는 $y_1 = 0 = v_1$이고 모든 자연수 $j$에서 (K4)에 의해 $y_{j+1} = 0 = 0 + 0 = y_j + v_{j+1}$이므로, [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 $(v_j)$의 부분합 수열이고, [[basic-limits]]의 (1)에 의해 $0$으로 수렴한다. 따라서 그 급수는 수렴하고 합은 $0$이다. 그러므로 (2)에 의해 $\iota(x_n)$의 급수가 수렴하는 것은 정확히 $x_n$의 급수가 수렴할 때이고, 이때 $\operatorname{Re} \sum_{n=m}^{\infty} \iota(x_n) = \sum_{n=m}^{\infty} x_n$, $\operatorname{Im} \sum_{n=m}^{\infty} \iota(x_n) = 0$이다. 복소수체 (2)의 (iii)에 의해 $\sum_{n=m}^{\infty} \iota(x_n) = \iota\bigl(\sum_{n=m}^{\infty} x_n\bigr)$이다. 모든 항이 $0$인 복소수 항의 급수는 복소수체 (2)의 (i)에 의해 $0 = \iota(0)$이므로 $x_n = 0$인 경우이고, 그 합은 $\iota(0) = 0$이다.

**4의 증명.** $K = m - 1$이면 $n \ge K + 1$에서 정해진 항 $t_n$은 $n \ge m$에서 정해진 항 $t_n$과 같은 항이므로 두 급수는 같은 1부터 다시 번호 붙인 수열의 급수이다. 가운데 합은 유한 합 (2)($m \ge 1$)나 (8)($m = 0$)에 의해 빈 합 $0$이고, $0 + S = S$이다.

$m \le K$라 하자. $K + 1$은 자연수이다. (2)에 의해 $t_n$의 급수가 수렴하는 것은 정확히 $\operatorname{Re} t_n$과 $\operatorname{Im} t_n$의 급수가 수렴할 때이다. 실수판의 꼬리 쪼개기([[sum-of-a-series]]의 (2)는 $m \ge 1$에서, [[series-indexed-from-zero]]의 (8)은 $m = 0$, $K \ge 0$에서)에 의해 이것은 정확히 $n \ge K + 1$에서 정해진 실수 항 $\operatorname{Re} t_n$과 $\operatorname{Im} t_n$의 급수가 수렴할 때이고, 다시 (2)를 첫 번호 $K + 1$에 쓰면 정확히 $n \ge K + 1$에서 정해진 항 $t_n$의 급수가 수렴할 때이다. 수렴할 때 실수판의 꼬리 쪼개기와 (2)에 의해
$$
\begin{aligned}
\operatorname{Re} \sum_{n=m}^{\infty} t_n &= \sum_{n=m}^{K} \operatorname{Re} t_n + \sum_{n=K+1}^{\infty} \operatorname{Re} t_n \\
&= \operatorname{Re} \sum_{n=m}^{K} t_n + \operatorname{Re} \sum_{n=K+1}^{\infty} t_n
\end{aligned}
$$
이다. 둘째 줄의 첫 항은 유한 합 (1)($m \ge 1$)이나 (8)이 옮긴 (1)($m = 0$)이다. 복소수 (2)에 의해 이것은 $\operatorname{Re}\bigl(\sum_{n=m}^{K} t_n + \sum_{n=K+1}^{\infty} t_n\bigr)$이고, 허수부도 같으므로 복소수 (1)에 의해 진술의 등식이 나온다. 마지막 문장은 $m = 0$, $K = 0$인 경우이다. 유한 합 (8)에 의해 $\sum_{n=0}^{0} z_n = z_0$이고, $n \ge 1$에서 정해진 항 $z_n$의 급수는 $(z_n)_{n \ge 1}$의 급수이다.

**5의 증명.** $T = \sum_{n=m}^{\infty} t_n$, $W = \sum_{n=m}^{\infty} w_n$으로 두자. (2)에 의해 $\operatorname{Re} t_n$, $\operatorname{Im} t_n$, $\operatorname{Re} w_n$, $\operatorname{Im} w_n$의 급수가 모두 수렴하고 그 합은 $\operatorname{Re} T$, $\operatorname{Im} T$, $\operatorname{Re} W$, $\operatorname{Im} W$이다. 복소수 (2)와 (K9), (K12)에 의해
$$
\begin{aligned}
\operatorname{Re}(c\,t_n + w_n) &= (\operatorname{Re} c) \operatorname{Re} t_n \\
&\qquad + (-\operatorname{Im} c) \operatorname{Im} t_n \\
&\qquad + \operatorname{Re} w_n, \\
\operatorname{Im}(c\,t_n + w_n) &= (\operatorname{Re} c) \operatorname{Im} t_n \\
&\qquad + (\operatorname{Im} c) \operatorname{Re} t_n \\
&\qquad + \operatorname{Im} w_n
\end{aligned}
$$
이다. 세 실수의 합 $a + b + d$는 $a + (b + d)$로 읽는다((K2)). 실수판의 선형성([[sum-of-a-series]]의 (3)은 $m \ge 1$에서, [[series-indexed-from-zero]]의 (9)는 $m = 0$에서)의 $c\,t_n + w_n$ 꼴을 먼저 상수 $-\operatorname{Im} c$와 두 항 $\operatorname{Im} t_n$, $\operatorname{Re} w_n$에 쓰고, 다음에 상수 $\operatorname{Re} c$와 항 $\operatorname{Re} t_n$과 앞의 결과에 쓰면, 첫째 줄의 실수 항의 급수는 수렴하고 합은 $(\operatorname{Re} c) \operatorname{Re} T - (\operatorname{Im} c) \operatorname{Im} T + \operatorname{Re} W$이다. 둘째 줄도 같은 방법으로 수렴하고 합은 $(\operatorname{Re} c) \operatorname{Im} T + (\operatorname{Im} c) \operatorname{Re} T + \operatorname{Im} W$이다. 복소수 (2)에 의해 이 두 실수는 $\operatorname{Re}(cT + W)$와 $\operatorname{Im}(cT + W)$이므로, (2)에 의해 $c\,t_n + w_n$의 급수는 수렴하고 합은 $cT + W$이다(복소수 (1)).

$c\,t_n$의 급수는 $w_n$을 모든 항이 $0$인 항으로 두면 (3)에 의해 $W = 0$이고, [[ring|환]]의 $a + 0 = a$에 의해 $c\,t_n + 0 = c\,t_n$, $cT + 0 = cT$이다. 차는 복소수체 (1)에 의해 $\operatorname{Re}(t_n - w_n) = \operatorname{Re} t_n - \operatorname{Re} w_n$, $\operatorname{Im}(t_n - w_n) = \operatorname{Im} t_n - \operatorname{Im} w_n$이므로, 실수판의 선형성의 차의 등식과 (2)에 의해 수렴하고 합의 실수부는 $\operatorname{Re} T - \operatorname{Re} W = \operatorname{Re}(T - W)$, 허수부는 $\operatorname{Im}(T - W)$이다.

마지막 문장: $t_n + w_n$의 급수가 수렴한다고 하자. [[ring-basic-properties|환의 기본 성질]]에 의해 $(t_n + w_n) - t_n = w_n$이므로, 차의 등식을 $t_n + w_n$과 $t_n$에 쓰면 $w_n$의 급수가 수렴한다. 이것은 가정에 어긋난다.

**6의 증명.** 켤레 (1)에 의해 $\operatorname{Re} \overline{t_n} = \operatorname{Re} t_n$이고 $\operatorname{Im} \overline{t_n} = -\operatorname{Im} t_n = (-1) \operatorname{Im} t_n$이다((K9)). $t_n$의 급수가 수렴하고 합이 $T$이면 (2)에 의해 $\operatorname{Re} t_n$, $\operatorname{Im} t_n$의 급수가 수렴하고, 실수판의 선형성의 $c\,t_n + w_n$ 꼴을 상수 $-1$과 항 $\operatorname{Im} t_n$과 모든 항이 $0$인 항(3의 증명에서 그 급수는 수렴하고 합은 $0$이다)에 쓰면, (K4)에 의해 $(-1) \operatorname{Im} t_n + 0 = (-1) \operatorname{Im} t_n$이므로 $(-1) \operatorname{Im} t_n$의 급수도 수렴하고 합은 $(-1) \operatorname{Im} T + 0 = -\operatorname{Im} T$이다. (2)에 의해 $\overline{t_n}$의 급수는 수렴하고, 합의 실수부는 $\operatorname{Re} T$, 허수부는 $-\operatorname{Im} T$이다. 켤레의 정의와 복소수 (1)에 의해 그 합은 $\overline{T}$이다. 거꾸로 $\overline{t_n}$의 급수가 수렴하면, 켤레 (1)의 $\overline{\overline{t_n}} = t_n$에 의해 앞 문장을 $\overline{t_n}$에 쓴 것이 $t_n$의 급수의 수렴이다.

**7의 증명.** (2)에 의해 $(\operatorname{Re} u_j)$의 급수와 $(\operatorname{Im} u_j)$의 급수가 수렴하므로, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 두 실수열은 $0$으로 수렴한다. 복소수체 (2)의 (ii)에 의해 $\operatorname{Re} 0 = 0$, $\operatorname{Im} 0 = 0$이므로 수렴 (3)에 의해 $(u_j)$는 $0$으로 수렴한다. $m = 1$이면 $(u_j) = (z_n)$이다. $m = 0$이면 $(u_j)$는 $(z_n)_{n \ge 0}$을 한 칸 옮긴 수열이고, 수렴 (6)의 (ii)에 의해 $(z_n)_{n \ge 0}$도 $0$으로 수렴한다. 마지막 문장은 이것의 대우이다. $\blacksquare$
:::

## 예시와 반례

:::example[0부터 번호가 붙은 두 등비 꼴의 합]
$0$ 이상인 정수 $n$에서 $z_n = (1/2)^n + (1/3)^n i$로 둡니다. 실수부 $(1/2)^n$과 허수부 $(1/3)^n$의 급수는 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 수렴하고 합은 각각 $(1 - 1/2)^{-1} = 2$와 $(1 - 1/3)^{-1} = 3/2$입니다. (2)에 의해 $(z_n)_{n \ge 0}$의 급수는 수렴하고
$$
\sum_{n=0}^{\infty} z_n = 2 + \frac{3}{2} i
$$
입니다. $z_0 = 1 + i$이므로 (4)에 의해 $\sum_{n=1}^{\infty} z_n = 2 + (3/2)i - (1 + i) = 1 + (1/2) i$입니다. 실수부 $\sum_{n=1}^{\infty} (1/2)^n = 1$과 허수부 $\sum_{n=1}^{\infty} (1/3)^n = (1/3)(1 - 1/3)^{-1} = 1/2$를 [[sum-of-a-series]]의 (6)의 (iii)으로 따로 구해도 같습니다.
:::

:::counterexample[실수부의 급수만 수렴하는 예]
$n$번째 항이 $z_n = (1/2)^n + i$인 복소수열을 봅니다. 실수부의 급수는 [[sum-of-a-series]]의 (6)의 (iii)에 의해 수렴하지만, 허수부의 수열은 모든 항이 $1$이고 [[basic-limits]]의 (1)에 의해 $1$로 수렴하므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 허수부의 급수는 발산합니다. (2)에 의해 $(z_n)$의 급수는 발산합니다. 실수부와 허수부 가운데 하나라도 발산하면 복소 급수는 발산합니다.
:::

:::counterexample[항은 0 으로 수렴하지만 급수는 발산하는 예]
$n$번째 항이 $z_n = n^{-1} i$인 순허수 항의 복소수열을 봅니다. 실수부의 수열은 모든 항이 $0$이고 허수부의 수열은 $(n^{-1})$이며, [[basic-limits]]의 (2)와 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)에 의해 $(z_n)$은 $0 + 0i = 0$으로 수렴합니다. 그러나 허수부의 급수는 조화급수이고 [[harmonic-series-diverges|조화급수는 발산한다]]의 (2)에 의해 발산하므로, (2)에 의해 $(z_n)$의 급수는 발산합니다. (7)의 거꾸로, 곧 "항이 $0$으로 수렴하면 급수가 수렴한다"는 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[복소수열 $(z_n)$의 급수가 수렴하고 합이 $2 - 3i$이면, $n$번째 항이 $z_n + \overline{z_n}$인 수열의 급수의 합은 무엇인가?]
$4$입니다. (6)에 의해 $(\overline{z_n})$의 급수는 수렴하고 합은 $\overline{2 - 3i} = 2 + 3i$이며, (5)를 $c = 1$에 쓰면 $n$번째 항이 $z_n + \overline{z_n}$인 수열의 급수는 수렴하고 합은 $(2 - 3i) + (2 + 3i) = 4$입니다. [[complex-conjugate|켤레복소수]]의 (3)에 의해 $z_n + \overline{z_n} = 2 \operatorname{Re} z_n$이므로, 이것은 (2)의 $\sum_{n=1}^{\infty} \operatorname{Re} z_n = 2$의 두 배와도 맞습니다.
:::

:::check[$t_n$의 급수가 수렴하고 $w_n$의 급수가 발산하면 $t_n - w_n$의 급수는 어떤가?]
발산합니다. $t_n - w_n$의 급수가 수렴한다면 [[ring-basic-properties|환의 기본 성질]]에 의해 $t_n - (t_n - w_n) = w_n$이므로 (5)의 차의 등식을 $t_n$과 $t_n - w_n$에 쓸 수 있고, 그러면 $w_n$의 급수가 수렴해야 합니다. 이것은 가정에 어긋납니다. (5)의 마지막 문장을 $t_n$과 $-w_n$에 쓰려면 먼저 (5)의 상수배로 $-w_n$의 급수도 발산한다는 것을 보여야 하므로, 위처럼 차의 등식으로 바로 따지는 편이 짧습니다.
:::
