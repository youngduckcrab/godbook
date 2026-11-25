---
title: 멱급수
title_en: Power Series
aliases: [거듭제곱급수, 멱급수의 수렴, 멱급수의 항, power series, power series centered at a]
kind: definition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 실수 a 와 0부터 번호가 붙은 계수열 (c_n) 에 대하여 중심이 a 인 멱급수를 정하고, 실수 x 에서 멱급수가 수렴·발산·절대수렴한다는 것을 n 에서의 값이 c_n(x − a)ⁿ 인 0부터 번호가 붙은 수열의 급수로 정한다. 0부터 번호가 붙은 수열의 유계를 정하고, 중심에서는 늘 수렴해 합이 c_0 이라는 것과 수렴하는 점에서는 항이 유계라는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, convergent-sequence-is-bounded, series-and-partial-sums, absolute-convergence, geometric-series, terms-of-convergent-series-tend-to-zero, series-indexed-from-zero]
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.5절 Power series 첫 두 문단 (p.106), 같은 절 Proposition 2.6.12 뒤 문단 (p.109)
    checked: original
    note: "출처 2.6.5절 첫 문단(p.106)은 x_0 을 중심으로 하는 멱급수를 Σ_{n=0}^∞ a_n(x − x_0)ⁿ 꼴의 급수로 정하고, 멱급수는 사실상 x 의 함수라고 하며, x = x_0 이고 n = 0 일 때를 위해 0⁰ = 1 로 약속한다. 둘째 문단은 x ≠ x_0 인 점 하나라도 급수를 수렴하게 하면 멱급수가 convergent 라 하고, x = x_0 에서는 첫 항을 빼고 모두 0 이므로 늘 수렴한다고 적으며, x ≠ x_0 인 어느 점에서도 수렴하지 않으면 divergent 라 한다. 이 항목은 출처의 a_n, x_0 을 c_n, a 로 쓰고, 급수를 별도의 대상으로 두지 않고 점 x 마다 0부터 번호가 붙은 수열 (c_n(x − a)ⁿ)_{n≥0} 의 급수로 정한다. 출처의 'convergent power series'와 'divergent power series'는 쓰지 않는다('x 에서 수렴한다'와 수렴 반지름의 말로 대신한다). 0⁰ = 1 은 power-of-a-real-number 의 정의에 이미 있다. (3)은 출처 둘째 문단의 'x = x_0 이면 첫 항을 빼고 모두 0 이므로 늘 수렴한다'에 합이 c_0 이라는 것을 더해 적은 것이다. 예시 '계수가 유한 개만 0 이 아닌 멱급수'는 p.109 의 '다항식은 계수가 충분히 큰 n 에서 모두 0 인 멱급수'라는 문단과 그 예 2x² − 3x + 4 = 3 + (x − 1) + 2(x − 1)² 과 같은 발상이다. 반례 '$x$마다 수렴과 발산이 다를 수 있다'는 p.109 의 등비급수 문단(|x| < 1 에서 1/(1 − x) = Σ xⁿ, |x| > 1 에서 발산)과 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: 11.3.1절 Analytic functions 첫 문단 (p.153)
    checked: original
    note: "출처 II 권 11.3.1절 첫 문단(p.153)은 복소수 c_n, z, a 에 대한 Σ_{n=0}^∞ c_n(z − a)ⁿ 꼴의 급수를 (복소) 멱급수라 하고, z ≠ a 인 점에서 수렴하면 급수가 수렴한다고 한다. 이 항목은 실수만 쓰고, 계수와 중심의 글자 c_n, a 는 이 책의 것을 따랐다. 반례 '$x$마다 수렴과 발산이 다를 수 있다'의 계수 (1/2)ⁿ 은 11.3.2절 Example 11.3.3(p.155)이 1/(1 − z) 를 a 중심으로 펼친 멱급수의 계수 cⁿ⁺¹(c = 1/(1 − a)) 처럼 계수가 등비수열인 멱급수이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반지름의 sup 정의와 판정 (6)의 경계 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열과 유계는 [[sequence]]의 것이고, 0부터 번호가 붙은 수열, 그 유한 합과 급수의 수렴·발산과 합 $\sum_{n=0}^{\infty}$, $(x_n)_{n \ge 1}$은 [[series-indexed-from-zero]]의 것이다. 절대수렴과 조건수렴은 [[absolute-convergence]]의 말을 0부터 번호가 붙은 수열에 옮긴 것이다. 거듭제곱(지수가 $0$ 이상인 정수, $0^0 = 1$)은 [[power-of-a-real-number]], 절댓값은 [[absolute-value]]의 것이다.

**0부터 번호가 붙은 수열의 유계.** 0부터 번호가 붙은 수열 $(t_n)_{n \ge 0}$이 **유계**(bounded)인 것은 정확히 어떤 실수 $B$가 있어 $0$ 이상인 모든 정수 $n$에서 $|t_n| \le B$일 때이다.

**멱급수.** 실수 $a$와 0부터 번호가 붙은 수열 $(c_n)_{n \ge 0}$의 순서쌍을 **중심**(center)이 $a$이고 **계수**(coefficients)가 $(c_n)_{n \ge 0}$인 **멱급수**(power series)라 한다. 실수 $x$마다 $n$에서의 값이 $c_n (x - a)^n$인 0부터 번호가 붙은 수열이 있다([[series-indexed-from-zero]]의 진술). 이것을 $x$에서의 멱급수의 **항**이라 하고 $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$으로 쓴다.

- 멱급수가 **$x$에서 수렴한다**(발산한다)는 것은 정확히 $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$의 급수가 수렴할(발산할) 때이다. 수렴할 때 그 합 $\sum_{n=0}^{\infty} c_n (x - a)^n$을 **$x$에서의 멱급수의 합**이라 한다. 발산하면 이 기호를 쓰지 않는다.
- 멱급수가 **$x$에서 절대수렴한다**는 것은 정확히 $n$에서의 값이 $|c_n (x - a)^n|$인 0부터 번호가 붙은 수열의 급수가 수렴할 때이고, **$x$에서 조건수렴한다**는 것은 정확히 $x$에서 수렴하고 절대수렴하지 않을 때이다.

다음이 성립한다. 아래에서 $a$는 실수, $(c_n)_{n \ge 0}$은 0부터 번호가 붙은 수열이고 "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수이며, $x$는 실수이다.

1. (유계) 0부터 번호가 붙은 수열 $(t_n)_{n \ge 0}$이 유계인 것은 정확히 수열 $(t_n)_{n \ge 1}$이 [[sequence]]의 뜻으로 유계일 때이다. $0$ 이상인 모든 정수 $n$에서 $0 \le t_n$이면, $(t_n)_{n \ge 0}$이 유계인 것은 정확히 어떤 실수 $B$가 있어 $0$ 이상인 모든 정수 $n$에서 $t_n \le B$일 때이다.
2. (항) $0$ 이상인 모든 정수 $n$에서 $|c_n (x - a)^n| = |c_n|\,|x - a|^n$이다. $0$번째 항은 $c_0 (x - a)^0 = c_0$이다.
3. (중심) 멱급수는 $x = a$에서 절대수렴하고 수렴하며, 그 합은 $c_0$이다. 곧 $\sum_{n=0}^{\infty} c_n (a - a)^n = c_0$이다.
4. (절대수렴하면 수렴한다) 멱급수가 $x$에서 절대수렴하면 $x$에서 수렴하고
   $$
   \begin{aligned}
   &\left| \sum_{n=0}^{\infty} c_n (x - a)^n \right| \\
   &\qquad \le \sum_{n=0}^{\infty} |c_n (x - a)^n|
   \end{aligned}
   $$
   이다.
5. (수렴하는 점의 항) 멱급수가 $x$에서 수렴하면 수열 $\bigl(c_n (x - a)^n\bigr)_{n \ge 1}$은 $0$으로 수렴하고, $x$에서의 항 $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$은 유계이다. 따라서 $x$에서의 항이 유계가 아니면 멱급수는 $x$에서 발산한다.
:::

:::english
Sequences and boundedness are as in the entry on sequences; sequences indexed from zero, their finite sums, convergence and divergence of their series, the sum $\sum_{n=0}^{\infty}$ and $(x_n)_{n \ge 1}$ are as in the entry on sums of sequences indexed from zero. Absolute and conditional convergence are the notions of the entry on absolute convergence carried over to sequences indexed from zero. Powers (with exponent an integer $\ge 0$ and $0^0 = 1$) and absolute values are as in their entries.

**Boundedness of a sequence indexed from zero.** A sequence indexed from zero $(t_n)_{n \ge 0}$ is **bounded** exactly when there is a real number $B$ with $|t_n| \le B$ for every integer $n \ge 0$.

**Power series.** The ordered pair of a real number $a$ and a sequence indexed from zero $(c_n)_{n \ge 0}$ is called the **power series** with **center** $a$ and **coefficients** $(c_n)_{n \ge 0}$. For every real number $x$ there is a sequence indexed from zero whose value at $n$ is $c_n (x - a)^n$. It is called the sequence of **terms** of the power series at $x$ and is written $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$.

- The power series **converges at $x$** (diverges at $x$) exactly when the series of $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$ converges (diverges). When it converges, its sum $\sum_{n=0}^{\infty} c_n (x - a)^n$ is called the **sum of the power series at $x$**. If it diverges, this symbol is not used.
- The power series **converges absolutely at $x$** exactly when the series of the sequence indexed from zero with values $|c_n (x - a)^n|$ converges, and it **converges conditionally at $x$** exactly when it converges at $x$ but not absolutely.

The following hold. Below, $a$ is a real number, $(c_n)_{n \ge 0}$ is a sequence indexed from zero, "the power series" is the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$, and $x$ is a real number.

1. (Boundedness) A sequence indexed from zero $(t_n)_{n \ge 0}$ is bounded exactly when the sequence $(t_n)_{n \ge 1}$ is bounded in the sense of sequences. If $0 \le t_n$ for every integer $n \ge 0$, then $(t_n)_{n \ge 0}$ is bounded exactly when there is a real number $B$ with $t_n \le B$ for every integer $n \ge 0$.
2. (Terms) For every integer $n \ge 0$, $|c_n (x - a)^n| = |c_n|\,|x - a|^n$. The $0$th term is $c_0 (x - a)^0 = c_0$.
3. (Center) The power series converges absolutely and converges at $x = a$, and its sum there is $c_0$; that is, $\sum_{n=0}^{\infty} c_n (a - a)^n = c_0$.
4. (Absolute convergence implies convergence) If the power series converges absolutely at $x$, then it converges at $x$ and
   $$
   \begin{aligned}
   &\left| \sum_{n=0}^{\infty} c_n (x - a)^n \right| \\
   &\qquad \le \sum_{n=0}^{\infty} |c_n (x - a)^n|.
   \end{aligned}
   $$
5. (Terms at a point of convergence) If the power series converges at $x$, then the sequence $\bigl(c_n (x - a)^n\bigr)_{n \ge 1}$ converges to $0$ and the terms $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$ at $x$ are bounded. Hence if the terms at $x$ are not bounded, the power series diverges at $x$.
:::

## 직관

멱급수는 "끝없이 긴 다항식"입니다. 계수 $c_0, c_1, c_2, \dots$와 중심 $a$를 정해 두고, 실수 $x$를 넣을 때마다 수 $c_0 + c_1 (x - a) + c_2 (x - a)^2 + \cdots$를 더해 보는 것입니다. 다만 끝없는 덧셈은 부분합의 극한으로만 뜻을 가지므로, 이 항목은 멱급수를 "점 $x$마다 하나씩 생기는 수의 급수들의 묶음"으로 다룹니다. 그래서 "멱급수가 수렴한다"는 말은 따로 두지 않고 언제나 "$x$에서 수렴한다"고 점을 밝혀 씁니다.

비유하자면 멱급수는 요리법이고 $x$는 재료입니다. 요리법(중심과 계수)은 하나지만 재료를 바꿀 때마다 다른 요리(수의 급수)가 나오고, 어떤 재료로는 요리가 완성되고(수렴) 어떤 재료로는 끝나지 않습니다(발산). 정의에서 요리법이 순서쌍 $(a, (c_n)_{n \ge 0})$이고, 재료마다의 요리가 $x$에서의 항 $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$의 급수입니다. 비유가 맞지 않는 곳은, 재료를 하나도 넣지 않은 요리가 없다는 것입니다. $x = a$에서도 $0$번째 항은 $c_0 (a - a)^0 = c_0 \cdot 0^0 = c_0$으로 남습니다.

(3)은 중심에서는 $n \ge 1$인 항이 모두 $0$이므로 멱급수가 늘 수렴하고 합이 $c_0$이라는 것입니다. (5)는 해석학 입문의 "수렴하는 급수의 항은 $0$으로 간다"를 멱급수에 옮긴 것입니다. 그 대우 "항이 유계가 아니면 발산한다"는 어떤 점에서 발산함을 보일 때 쓰기 좋은 꼴입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. $0$ 이상인 정수 $n$은 (Z5)에 의해 $n = 0$이거나 $0 < n$이고, $0 < n$이면 (Z1)에 의해 $1 \le n$이므로 $n$은 자연수이다. 거꾸로 자연수 $n$은 $1 \le n$이므로 $0 \le n$이다. 아래에서 이것을 "번호의 두 경우"라 부른다.

**1의 증명.** $(t_n)_{n \ge 0}$이 유계이고 $B$가 $0$ 이상인 모든 정수 $n$에서 $|t_n| \le B$를 만족하면, 번호의 두 경우에 의해 모든 자연수 $n$에서 $|t_n| \le B$이므로 $(t_n)_{n \ge 1}$은 유계이다. 거꾸로 모든 자연수 $n$에서 $|t_n| \le B$라 하고 $B' = \max\{B, |t_0|\}$로 두자. [[absolute-value|절댓값]]의 (10)에 의해 $|t_0| \le B'$이고 $B \le B'$이다. $0$ 이상인 정수 $n$은 번호의 두 경우에 의해 $n = 0$이거나 자연수이고, 자연수이면 순서 성질 (1)의 (v)에 의해 $|t_n| \le B \le B'$이다. 따라서 $0$ 이상인 모든 $n$에서 $|t_n| \le B'$이다.

모든 $n$에서 $0 \le t_n$이면 절댓값의 (1)에 의해 $|t_n| = t_n$이므로, "$|t_n| \le B$"와 "$t_n \le B$"는 같은 조건이다.

**2의 증명.** 절댓값의 (4)에 의해 $|c_n (x - a)^n| = |c_n|\,|(x - a)^n|$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (4)에 의해 $|(x - a)^n| = |x - a|^n$이다. 거듭제곱의 정의에 의해 $(x - a)^0 = 1$이므로 (K4)에 의해 $c_0 (x - a)^0 = c_0 \cdot 1 = c_0$이다.

**3의 증명.** (K12)의 (v)에 의해 $a - a = 0$이다. $x = a$에서의 항을 $t_n = c_n (a - a)^n = c_n 0^n$이라 하자. (2)에 의해 $t_0 = c_0$이다. 자연수 $n$에서는 거듭제곱의 (2)의 (iv)에 의해 $0^n = 0$이고 (K9)에 의해 $t_n = c_n \cdot 0 = 0$이다. 따라서 수열 $(t_n)_{n \ge 1}$의 모든 항은 $0$이다. 이 수열은 첫째 항이 $0$이고 공비가 $0$인 [[geometric-series|등비급수]]의 수열, 곧 $n$번째 항이 $0 \cdot 0^{n-1}$인 수열과 같다((K9)와 [[sequence]]의 수열의 같음). [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 그 급수는 수렴하고 합은 $0$이다. [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 쓰면 $(t_n)_{n \ge 0}$의 급수가 수렴하고
$$
\sum_{n=0}^{\infty} t_n = t_0 + \sum_{n=1}^{\infty} t_n = c_0 + 0 = c_0
$$
이다((K4)). 절댓값에 대해서도, 절댓값의 (2)에 의해 $|t_0| = |c_0|$이고 자연수 $n$에서 $|t_n| = |0| = 0$이므로 같은 논법으로 $n$에서의 값이 $|t_n|$인 0부터 번호가 붙은 수열의 급수가 수렴한다. 따라서 멱급수는 $a$에서 절대수렴한다.

**4의 증명.** [[series-indexed-from-zero]]의 (11)을 $x$에서의 항에 쓴 것이다.

**5의 증명.** $x$에서의 항을 $t_n = c_n (x - a)^n$이라 하자. 멱급수가 $x$에서 수렴하면 [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 써서 $(t_n)_{n \ge 1}$의 급수가 수렴하고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 $(t_n)_{n \ge 1}$은 $0$으로 수렴한다([[limit-of-sequence]]). [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (2)에 의해 $(t_n)_{n \ge 1}$은 유계이고, (1)에 의해 $(t_n)_{n \ge 0}$은 유계이다. 마지막 문장은 이것의 대우이다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 유한 개만 0 이 아닌 멱급수]
중심 $a = -2$, 계수 $c_0 = 2$, $c_1 = -1$, $c_2 = 3$, $n \ge 3$이면 $c_n = 0$인 멱급수를 봅시다. 실수 $x$에서의 항을 $t_n = c_n (x + 2)^n$이라 하면 $n \ge 3$에서 (K9)에 의해 $t_n = 0$입니다. $n \ge 3$에서 정해진 항 $t_n$을 1부터 다시 번호 붙인 수열은 모든 항이 $0$이므로, 성질 3의 증명과 같이 그 급수는 수렴하고 합은 $0$입니다. [[series-indexed-from-zero]]의 (8)을 $K = 2$로 쓰면 멱급수는 모든 실수 $x$에서 수렴하고, 그 (1)과 (2)에 의해
$$
\begin{aligned}
&\sum_{n=0}^{\infty} c_n (x + 2)^n \\
&\quad = \sum_{n=0}^{2} t_n + 0 \\
&\quad = 2 - (x + 2) + 3 (x + 2)^2
\end{aligned}
$$
입니다. 예컨대 $x = 0$에서의 합은 $2 - 2 + 12 = 12$이고, $x = -2$에서의 합은 성질 (3)대로 $c_0 = 2$입니다.
:::

:::counterexample[$x$마다 수렴과 발산이 다를 수 있다]
중심 $a = 0$, 계수 $c_n = (1/2)^n$인 멱급수를 봅시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $x$에서의 항은 $c_n x^n = (x/2)^n$입니다.

- $x = 1$에서 항은 $(1/2)^n$이고 $|1/2| < 1$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 멱급수는 수렴하고 합은 $(1 - 1/2)^{-1} = 2$입니다.
- $x = 2$에서 항은 $1^n = 1$이고, $x = -2$에서 항은 $(-1)^n$입니다. 두 경우 모두 $(x/2)^n$의 수열 $(n \ge 1)$은 첫째 항이 $x/2$이고 공비가 $x/2$인 등비급수의 수열이고 $|x/2| = 1$이므로, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)과 [[series-indexed-from-zero]]의 (8)에 의해 멱급수는 발산합니다.

같은 멱급수가 $x = 1$에서는 수렴하고 $x = 2$에서는 발산합니다. 그래서 이 사이트는 "멱급수가 수렴한다"를 점 없이 말하지 않습니다. $x = 2$의 항은 모두 $1$이어서 유계이므로, (5)의 역("항이 유계이면 수렴한다")은 이 예에서 성립하지 않습니다.
:::

## 확인 질문

:::check[중심이 $a$인 멱급수는 $x = a + 1$에서 언제 수렴하는가?]
정확히 0부터 번호가 붙은 수열 $(c_n)_{n \ge 0}$ 자신의 급수가 수렴할 때이고, 이때 합은 $\sum_{n=0}^{\infty} c_n$입니다. $x - a = 1$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $1^n = 1$이므로, (K4)에 의해 $x$에서의 항은 $c_n \cdot 1 = c_n$이어서 $(c_n)_{n \ge 0}$과 같은 0부터 번호가 붙은 수열입니다.
:::

:::check[$c_0 = 5$이고 자연수 $n$에서 $c_n = n$인 중심 $2$의 멱급수는 $x = 2$에서 수렴하는가?]
수렴하고 합은 $5$입니다. (3)에 의해 중심 $x = 2$에서는 계수가 무엇이든 수렴하고 합은 $c_0 = 5$입니다. $n \ge 1$인 항은 $n \cdot 0^n = 0$이고, $0$번째 항은 $5 \cdot 0^0 = 5 \cdot 1 = 5$입니다.
:::
