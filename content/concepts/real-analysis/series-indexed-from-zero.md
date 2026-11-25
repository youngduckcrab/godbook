---
title: 0부터 번호가 붙은 수열의 합
title_en: Sums of Sequences Indexed from Zero
aliases: [0부터 번호가 붙은 수열, 0부터 시작하는 급수, 0부터 시작하는 유한 합, 한 칸 옮긴 수열, sequence indexed from zero, series starting at zero]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 0 이상인 정수마다 실수가 정해진 0부터 번호가 붙은 수열 (x_n)_{n≥0} 의 유한 합 Σ_{n=0}^k x_n 과 급수의 합 Σ_{n=0}^∞ x_n 을 한 칸 옮긴 수열 y_j = x_{j−1} 로 정의하고, 빈 합, 끝항 떼기, 쪼개기, 유한 합과 급수의 선형성·비교·절댓값, 꼬리와 수렴의 같음, 코시 판정, 등비급수의 합 Σ_{n=0}^∞ rⁿ = 1/(1 − r) 를 번호 붙인 규칙으로 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, tail-of-a-sequence, series-and-partial-sums, tail-of-a-series, geometric-series, cauchy-criterion-for-series, terms-of-convergent-series-tend-to-zero, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, telescoping-sum, sum-of-a-series]
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.1절 Definition, Remark 2.5.2 (p.87), Proposition 2.5.5 와 그 뒤 문단 (p.88–89), 2.6.4절 Multiplication of series 첫 문단 (p.104), 2.6.5절 Power series 첫 문단 (p.106), 0.3절 Example 0.3.8 (p.13)
    checked: original
    note: "출처 Remark 2.5.2(p.87)는 첨자를 1 이 아닌 번호에서 시작하면 편할 때가 있다며 Σ_{n=0}^∞ rⁿ = Σ_{n=1}^∞ r^{n−1} 을 예로 들고, 왼쪽이 쓰기 편하다고 적는다. 이 항목은 이 식의 오른쪽을 왼쪽의 정의로 삼아, 0부터 번호가 붙은 수열의 유한 합과 급수를 한 칸 옮긴 수열로 정의한다. 출처는 0 부터 시작하는 급수의 수렴과 합을 따로 정의하지 않고 이렇게 쓰며, 2.6.4절 첫 문단(p.104)은 급수의 곱에서, 2.6.5절 첫 문단(p.106)은 멱급수에서 0 부터 시작하는 급수를 쓰고 0⁰ = 1 로 약속한다. (13)의 (ii)의 등비급수의 합은 Proposition 2.5.5(p.88)이고 출처는 증명을 연습문제 2.5.2(p.97)로 둔다. (13)의 (i)의 유한 합의 식은 그 증명의 요지로 적힌 Σ_{n=0}^{k−1} rⁿ = (1 − r^k)/(1 − r)(p.89)과 Example 0.3.8(p.13, n 이 0 이상인 정수일 때 1 + c + ⋯ + cⁿ = (1 − c^{n+1})/(1 − c))과 같다. (8)의 첫 항 떼기는 Proposition 2.5.6 의 증명(p.89)이 부분합을 쪼개는 것과 같은 발상이다. (11)은 Proposition 2.5.15(p.92)와 연습문제 2.5.10(p.98)을, (12)는 Proposition 2.5.8(p.89)을 0 부터 번호가 붙은 수열로 옮긴 것이다. 예시 '첫 항을 떼어 낸 합'은 Proposition 2.5.5 에 r = −1/2 을 넣은 것이고, 그 둘째 합은 Proposition 2.5.12 뒤 문단(p.91–92)의 식 Σ_{n=i}^∞ rⁿ = rⁱ/(1 − r) 에 i = 1 을 넣은 것과 같다. 예시 '공비가 0 인 등비급수'의 0⁰ = 1 은 위 2.6.5절 첫 문단의 약속과 같은 약속이고, 같은 문단(p.106)은 x = x₀ 이면 첫 항 말고는 모든 항이 0 이라서 멱급수가 늘 수렴한다고 적는다. 이 예시의 Σ_{n=0}^∞ 0ⁿ = 1 과 같은 발상이다. 반례 '첨자의 시작만 바꾼 합은 다를 수 있다'의 (1/2)ⁿ 의 두 합은 Remark 2.5.2 의 식에 r = 1/2 을 넣은 것과 Example 2.5.4(p.88)의 Σ_{n=1}^∞ 1/2ⁿ = 1 이다. 확인 질문 'k = −1, 0, 1 일 때 Σ_{n=0}^k 2ⁿ 은 얼마인가?'는 Example 0.3.8 의 식에 c = 2 를 넣은 것과 같다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(정의가 둘이 되지 않는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열과 그 항, 수열의 같음과 값으로 정한 수열은 [[sequence]]의 것이고, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. 유한 합 $\sum_{i=m}^{n}$, 빈 합, 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이고, 급수의 합의 기호 $\sum_{n=m}^{\infty}$와 "$n \ge m$에서 정해진 항의 급수"는 [[sum-of-a-series]]의 것이다. 거듭제곱은 [[power-of-a-real-number]], 절댓값은 [[absolute-value]]의 것이다.

**0부터 번호가 붙은 수열.** $0$ 이상인 정수 전체의 집합 $\{n \in \mathbb{Z} : 0 \le n\}$에서 $\mathbb{R}$로의 함수 $x$를 **0부터 번호가 붙은 수열**(sequence indexed from zero)이라 하고, $n$에서의 값을 $x_n$, 함수 $x$를 $(x_n)_{n \ge 0}$으로 쓴다. 두 0부터 번호가 붙은 수열이 같은 것은 정확히 $0$ 이상인 모든 정수 $n$에서 값이 같을 때이다. $0$ 이상인 정수 $n$마다 실수 $r_n$이 $n$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있으면, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n$에서의 값이 $r_n$인 0부터 번호가 붙은 수열이 있다. $(x_n)_{n \ge 0}$에서 자연수 $n$에서의 값만 쓴 수열, 곧 $n$번째 항이 $x_n$인 수열([[sequence]]의 (1))을 $(x_n)_{n \ge 1}$로 쓴다.

**한 칸 옮긴 수열.** 자연수 $j$에 대하여 $j - 1$은 $0$ 이상인 정수이므로, $j$번째 항이 $x_{j-1}$인 수열이 있다. 이것을 $(x_n)_{n \ge 0}$을 **한 칸 옮긴 수열**이라 하고 아래에서 $(y_j)$로 쓴다.

- **유한 합.** $-1$ 이상인 정수 $k$에 대하여
  $$
  \sum_{n=0}^{k} x_n = \sum_{j=1}^{k+1} y_j
  $$
  로 정한다. $k = -1$이면 이것은 빈 합 $0$이다.
- **범위에서만 정해진 항의 합.** $k$가 $-1$ 이상인 정수이고 $0 \le n \le k$인 정수 $n$마다 실수 $c_n$이 위의 뜻으로 하나씩 정해져 있을 때($k \ge 0$이면 [[telescoping-sum|망원 합]]의 "0부터 번호가 붙은 실수 $c_0, \dots, c_k$"), $\sum_{n=0}^{k} c_n$을 $1 \le j \le k + 1$에서 정해진 항 $c_{j-1}$의 합 $\sum_{j=1}^{k+1} c_{j-1}$로 정한다. $0 \le n \le k$에서 $c_n = x_n$이면 이 수는 위의 $\sum_{n=0}^{k} x_n$과 같다.
- **급수.** $(x_n)_{n \ge 0}$의 **급수가 수렴한다**(발산한다)는 것은 정확히 $(y_j)$의 급수가 수렴할(발산할) 때이다. 수렴할 때 그 합을
  $$
  \sum_{n=0}^{\infty} x_n = \sum_{j=1}^{\infty} y_j
  $$
  로 쓰고, 발산하면 이 기호를 쓰지 않는다. $(y_j)$의 $j$번째 부분합 $\sum_{i=1}^{j} y_i$는 위의 정의에 의해 $\sum_{n=0}^{j-1} x_n$이다.
- **합의 첨자.** $\sum_{n=0}^{k}$와 $\sum_{n=0}^{\infty}$의 글자 $n$은 기호 안에서만 쓰는 이름이다. "$\sum_{n=0}^{\infty}(n\text{에 대한 식})$"은 $n$에서의 값이 그 식인 0부터 번호가 붙은 수열의 급수의 합을 뜻하고, 유한 합도 같다.

다음이 성립한다. 아래에서 $(x_n)_{n \ge 0}$, $(w_n)_{n \ge 0}$은 0부터 번호가 붙은 수열이고 $c$는 실수이다.

1. (빈 합과 한 항) $\sum_{n=0}^{-1} x_n = 0$이고 $\sum_{n=0}^{0} x_n = x_0$이다.
2. (끝항 떼기) $-1$ 이상인 모든 정수 $k$에서 $\sum_{n=0}^{k+1} x_n = \sum_{n=0}^{k} x_n + x_{k+1}$이다.
3. (쪼개기) $-1 \le p \le k$인 정수 $p$, $k$에서
   $$
   \sum_{n=0}^{k} x_n = \sum_{n=0}^{p} x_n + \sum_{n=p+1}^{k} x_n
   $$
   이다. $p \ge 0$이면 오른쪽 둘째 합은 수열 $(x_n)_{n \ge 1}$의 유한 합이고, $p = -1$이면 그것은 $\sum_{n=0}^{k} x_n$ 자신이다. 특히 $0$ 이상인 정수 $k$에서 $\sum_{n=0}^{k} x_n = x_0 + \sum_{n=1}^{k} x_n$이다.
4. (범위에서만 정해진 항) (1)–(3)은 $(x_n)_{n \ge 0}$ 대신 $0 \le n \le N$에서만 정해진 항으로 써도 성립한다. 이때 식에 나오는 항의 번호와 합의 끝 번호는 $N$ 이하여야 한다.
5. (유한 합의 선형성) $-1$ 이상인 모든 정수 $k$에서
   $$
   \begin{aligned}
   \sum_{n=0}^{k} (c\,x_n + w_n) &= c \sum_{n=0}^{k} x_n \\
   &\qquad + \sum_{n=0}^{k} w_n, \\
   \sum_{n=0}^{k} (x_n - w_n) &= \sum_{n=0}^{k} x_n \\
   &\qquad - \sum_{n=0}^{k} w_n
   \end{aligned}
   $$
   이다.
6. (유한 합의 비교) $-1$ 이상인 정수 $k$와 $0 \le n \le k$인 모든 정수 $n$에서 $x_n \le w_n$이면 $\sum_{n=0}^{k} x_n \le \sum_{n=0}^{k} w_n$이다.
7. (유한 합의 절댓값) $-1$ 이상인 모든 정수 $k$에서 $\left| \sum_{n=0}^{k} x_n \right| \le \sum_{n=0}^{k} |x_n|$이다.
8. (수렴의 같음과 꼬리) $K$를 $0$ 이상인 정수라 하자. $(x_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 $n \ge K + 1$에서 정해진 항 $x_n$의 급수가 수렴할 때이고, 이때
   $$
   \sum_{n=0}^{\infty} x_n = \sum_{n=0}^{K} x_n + \sum_{n=K+1}^{\infty} x_n
   $$
   이다. 특히($K = 0$) $(x_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 $(x_n)_{n \ge 1}$의 급수가 수렴할 때이고, 이때 $\sum_{n=0}^{\infty} x_n = x_0 + \sum_{n=1}^{\infty} x_n$이다.
9. (급수의 선형성) $(x_n)_{n \ge 0}$과 $(w_n)_{n \ge 0}$의 급수가 수렴하면, $n$에서의 값이 $c\,x_n + w_n$, $x_n - w_n$인 0부터 번호가 붙은 수열의 급수도 수렴하고
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} (c\,x_n + w_n) &= c \sum_{n=0}^{\infty} x_n \\
   &\qquad + \sum_{n=0}^{\infty} w_n, \\
   \sum_{n=0}^{\infty} (x_n - w_n) &= \sum_{n=0}^{\infty} x_n \\
   &\qquad - \sum_{n=0}^{\infty} w_n
   \end{aligned}
   $$
   이다.
10. (급수의 비교)
    - (i) $(x_n)_{n \ge 0}$과 $(w_n)_{n \ge 0}$의 급수가 수렴하고 $0$ 이상인 모든 정수 $n$에서 $x_n \le w_n$이면 $\sum_{n=0}^{\infty} x_n \le \sum_{n=0}^{\infty} w_n$이다.
    - (ii) $0$ 이상인 모든 정수 $n$에서 $0 \le x_n$이라 하자. $(x_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히 어떤 실수 $B$가 있어 $-1$ 이상인 모든 정수 $k$에서 $\sum_{n=0}^{k} x_n \le B$일 때이고, 이때 $-1$ 이상인 모든 정수 $k$에서 $0 \le \sum_{n=0}^{k} x_n \le \sum_{n=0}^{\infty} x_n$이다.
    - (iii) $0$ 이상인 모든 정수 $n$에서 $0 \le x_n \le w_n$이고 $(w_n)_{n \ge 0}$의 급수가 수렴하면 $(x_n)_{n \ge 0}$의 급수도 수렴하고 $0 \le \sum_{n=0}^{\infty} x_n \le \sum_{n=0}^{\infty} w_n$이다.
11. (급수의 절댓값) $n$에서의 값이 $|x_n|$인 0부터 번호가 붙은 수열의 급수가 수렴하면 $(x_n)_{n \ge 0}$의 급수도 수렴하고 $\left| \sum_{n=0}^{\infty} x_n \right| \le \sum_{n=0}^{\infty} |x_n|$이다.
12. (코시 판정) $(x_n)_{n \ge 0}$의 급수가 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0$ 이상인 정수 $M$이 있어 $M \le p < k$인 모든 정수 $p$, $k$에서 $\left| \sum_{n=p+1}^{k} x_n \right| < \varepsilon$일 때이다. 여기서 $\sum_{n=p+1}^{k} x_n$은 (3)의 둘째 합, 곧 $\sum_{n=0}^{k} x_n - \sum_{n=0}^{p} x_n$이다.
13. (등비급수) $a$, $r$을 실수라 하자.
    - (i) $-1$ 이상인 모든 정수 $k$에서, $r \ne 1$이면 $\sum_{n=0}^{k} r^n = \dfrac{1 - r^{k+1}}{1 - r}$이고, $r = 1$이면 $\sum_{n=0}^{k} r^n = k + 1$이다.
    - (ii) $|r| < 1$이면 $n$에서의 값이 $a r^n$인 0부터 번호가 붙은 수열의 급수는 수렴하고 $\sum_{n=0}^{\infty} a r^n = \dfrac{a}{1 - r}$이다. 특히 $\sum_{n=0}^{\infty} r^n = \dfrac{1}{1 - r}$이다.
:::

:::english
Sequences and their terms, equality of sequences and sequences given by values are those of the entry on sequences, and the sequence of partial sums, convergence and divergence of a series and the sum of a series are those of the entry on series and partial sums. Finite sums $\sum_{i=m}^{n}$, the empty sum and sums of terms given only on a range are those of the entry on finite sums of real numbers, and the notation $\sum_{n=m}^{\infty}$ for the sum of a series and "the series of the terms given for $n \ge m$" are those of the entry on the notation for the sum of a series. Powers and absolute values are those of the corresponding entries.

**Sequences indexed from zero.** A function $x$ from the set $\{n \in \mathbb{Z} : 0 \le n\}$ of nonnegative integers to $\mathbb{R}$ is called a **sequence indexed from zero**; its value at $n$ is written $x_n$, and the function $x$ is written $(x_n)_{n \ge 0}$. Two sequences indexed from zero are equal exactly when their values agree at every integer $n \ge 0$. If for each integer $n \ge 0$ a real number $r_n$ is given by a formula in $n$ or by an object already determined, then by item (1) of the recursion theorem there is a sequence indexed from zero whose value at $n$ is $r_n$. The sequence using only the values of $(x_n)_{n \ge 0}$ at natural numbers $n$, that is, the sequence whose $n$th term is $x_n$, is written $(x_n)_{n \ge 1}$.

**The sequence shifted by one.** For each natural number $j$, $j - 1$ is a nonnegative integer, so there is a sequence whose $j$th term is $x_{j-1}$. It is called the **sequence obtained by shifting** $(x_n)_{n \ge 0}$ **by one**, and is denoted $(y_j)$ below.

- **Finite sums.** For an integer $k \ge -1$, define
  $$
  \sum_{n=0}^{k} x_n = \sum_{j=1}^{k+1} y_j .
  $$
  If $k = -1$, this is the empty sum $0$.
- **Sums of terms given only on a range.** If $k$ is an integer $\ge -1$ and for each integer $n$ with $0 \le n \le k$ a real number $c_n$ is given as above (for $k \ge 0$, the "real numbers $c_0, \dots, c_k$ indexed from zero" of the entry on telescoping sums), define $\sum_{n=0}^{k} c_n$ as the sum $\sum_{j=1}^{k+1} c_{j-1}$ of the terms $c_{j-1}$ given for $1 \le j \le k + 1$. If $c_n = x_n$ for $0 \le n \le k$, this number equals $\sum_{n=0}^{k} x_n$ above.
- **Series.** The **series** of $(x_n)_{n \ge 0}$ **converges** (diverges) exactly when the series of $(y_j)$ converges (diverges). When it converges, its sum is written
  $$
  \sum_{n=0}^{\infty} x_n = \sum_{j=1}^{\infty} y_j ,
  $$
  and when it diverges this symbol is not used. By the definition above, the $j$th partial sum $\sum_{i=1}^{j} y_i$ of $(y_j)$ is $\sum_{n=0}^{j-1} x_n$.
- **Summation index.** The letter $n$ in $\sum_{n=0}^{k}$ and $\sum_{n=0}^{\infty}$ is a name used only inside the symbol. "$\sum_{n=0}^{\infty}(\text{an expression in } n)$" means the sum of the series of the sequence indexed from zero whose value at $n$ is that expression, and likewise for finite sums.

The following hold. Below, $(x_n)_{n \ge 0}$ and $(w_n)_{n \ge 0}$ are sequences indexed from zero and $c$ is a real number.

1. (Empty sum and one term) $\sum_{n=0}^{-1} x_n = 0$ and $\sum_{n=0}^{0} x_n = x_0$.
2. (Splitting off the last term) For every integer $k \ge -1$, $\sum_{n=0}^{k+1} x_n = \sum_{n=0}^{k} x_n + x_{k+1}$.
3. (Splitting) For integers $p$, $k$ with $-1 \le p \le k$,
   $$
   \sum_{n=0}^{k} x_n = \sum_{n=0}^{p} x_n + \sum_{n=p+1}^{k} x_n .
   $$
   If $p \ge 0$, the second sum on the right is a finite sum of the sequence $(x_n)_{n \ge 1}$; if $p = -1$, it is $\sum_{n=0}^{k} x_n$ itself. In particular, for every integer $k \ge 0$, $\sum_{n=0}^{k} x_n = x_0 + \sum_{n=1}^{k} x_n$.
4. (Terms given only on a range) (1)–(3) also hold with terms given only for $0 \le n \le N$ in place of $(x_n)_{n \ge 0}$, provided the indices of the terms and the end indices of the sums that appear are at most $N$.
5. (Linearity of finite sums) For every integer $k \ge -1$,
   $$
   \begin{aligned}
   \sum_{n=0}^{k} (c\,x_n + w_n) &= c \sum_{n=0}^{k} x_n \\
   &\qquad + \sum_{n=0}^{k} w_n, \\
   \sum_{n=0}^{k} (x_n - w_n) &= \sum_{n=0}^{k} x_n \\
   &\qquad - \sum_{n=0}^{k} w_n
   \end{aligned}
   $$
6. (Comparison of finite sums) If $k$ is an integer $\ge -1$ and $x_n \le w_n$ for every integer $n$ with $0 \le n \le k$, then $\sum_{n=0}^{k} x_n \le \sum_{n=0}^{k} w_n$.
7. (Absolute value of finite sums) For every integer $k \ge -1$, $\left| \sum_{n=0}^{k} x_n \right| \le \sum_{n=0}^{k} |x_n|$.
8. (Equal convergence and tails) Let $K$ be an integer $\ge 0$. The series of $(x_n)_{n \ge 0}$ converges exactly when the series of the terms $x_n$ given for $n \ge K + 1$ converges, and in that case
   $$
   \sum_{n=0}^{\infty} x_n = \sum_{n=0}^{K} x_n + \sum_{n=K+1}^{\infty} x_n .
   $$
   In particular ($K = 0$), the series of $(x_n)_{n \ge 0}$ converges exactly when the series of $(x_n)_{n \ge 1}$ converges, and then $\sum_{n=0}^{\infty} x_n = x_0 + \sum_{n=1}^{\infty} x_n$.
9. (Linearity of series) If the series of $(x_n)_{n \ge 0}$ and $(w_n)_{n \ge 0}$ converge, then the series of the sequences indexed from zero with values $c\,x_n + w_n$ and $x_n - w_n$ converge, and
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} (c\,x_n + w_n) &= c \sum_{n=0}^{\infty} x_n \\
   &\qquad + \sum_{n=0}^{\infty} w_n, \\
   \sum_{n=0}^{\infty} (x_n - w_n) &= \sum_{n=0}^{\infty} x_n \\
   &\qquad - \sum_{n=0}^{\infty} w_n
   \end{aligned}
   $$
10. (Comparison of series)
    - (i) If the series of $(x_n)_{n \ge 0}$ and $(w_n)_{n \ge 0}$ converge and $x_n \le w_n$ for every integer $n \ge 0$, then $\sum_{n=0}^{\infty} x_n \le \sum_{n=0}^{\infty} w_n$.
    - (ii) Suppose $0 \le x_n$ for every integer $n \ge 0$. The series of $(x_n)_{n \ge 0}$ converges exactly when there is a real number $B$ with $\sum_{n=0}^{k} x_n \le B$ for every integer $k \ge -1$, and then $0 \le \sum_{n=0}^{k} x_n \le \sum_{n=0}^{\infty} x_n$ for every integer $k \ge -1$.
    - (iii) If $0 \le x_n \le w_n$ for every integer $n \ge 0$ and the series of $(w_n)_{n \ge 0}$ converges, then the series of $(x_n)_{n \ge 0}$ converges and $0 \le \sum_{n=0}^{\infty} x_n \le \sum_{n=0}^{\infty} w_n$.
11. (Absolute value of series) If the series of the sequence indexed from zero with values $|x_n|$ converges, then the series of $(x_n)_{n \ge 0}$ converges and $\left| \sum_{n=0}^{\infty} x_n \right| \le \sum_{n=0}^{\infty} |x_n|$.
12. (Cauchy criterion) The series of $(x_n)_{n \ge 0}$ converges exactly when for every positive real number $\varepsilon$ there is an integer $M \ge 0$ such that $\left| \sum_{n=p+1}^{k} x_n \right| < \varepsilon$ for all integers $p$, $k$ with $M \le p < k$. Here $\sum_{n=p+1}^{k} x_n$ is the second sum in (3), that is, $\sum_{n=0}^{k} x_n - \sum_{n=0}^{p} x_n$.
13. (Geometric series) Let $a$, $r$ be real numbers.
    - (i) For every integer $k \ge -1$: if $r \ne 1$ then $\sum_{n=0}^{k} r^n = \dfrac{1 - r^{k+1}}{1 - r}$, and if $r = 1$ then $\sum_{n=0}^{k} r^n = k + 1$.
    - (ii) If $|r| < 1$, the series of the sequence indexed from zero with values $a r^n$ converges and $\sum_{n=0}^{\infty} a r^n = \dfrac{a}{1 - r}$. In particular $\sum_{n=0}^{\infty} r^n = \dfrac{1}{1 - r}$.
:::

## 직관

거듭제곱 $r^0, r^1, r^2, \dots$처럼 번호를 $0$부터 붙이는 것이 자연스러운 수들이 있습니다. 해석학 입문의 수열은 번호가 $1$부터이고, [[finite-sum-of-reals|실수의 유한 합]]도 $1$ 이상의 번호에서 시작하는 합만 정의합니다. 이 항목은 새 덧셈을 만들지 않고, 번호를 하나씩 밀어 $x_0, x_1, x_2, \dots$를 첫째, 둘째, 셋째 항으로 삼은 수열 $(y_j)$의 합으로 $0$부터의 합을 정합니다. 그래서 $1$부터의 합에 관한 정리를 $(y_j)$에 쓰면 $0$부터의 합에 관한 같은 꼴의 정리를 얻습니다. (5)–(7)과 (9)–(12)가 그렇게 얻은 것들입니다.

비유하자면 건물의 층 번호와 같습니다. 어떤 나라는 바닥 층을 $0$층이라 부르고 어떤 나라는 $1$층이라 부르지만, 층마다 사는 사람은 같습니다. "$0$층부터 $k$층까지"는 "$1$층부터 $k + 1$층까지"와 같은 층들을 가리킵니다. 정의의 $\sum_{n=0}^{k} x_n = \sum_{j=1}^{k+1} y_j$가 이 번호 바꾸기이고, 항이 $k + 1$개라는 것도 여기서 보입니다. 비유가 맞지 않는 곳은, 급수에는 맨 위층이 없다는 것입니다. 무한히 많은 층의 합은 [[sum-of-a-series|급수의 합의 기호]]에서처럼 부분합의 극한으로만 뜻을 갖습니다.

(8)은 첫 항 $x_0$을 떼어 내면 해석학 입문의 급수가 된다는 것입니다. 그래서 $0$부터의 급수가 수렴하는지는 $x_0$과 상관없고, 합은 $x_0$만큼 다릅니다. $\sum_{n=0}^{\infty} r^n$에서 $r = 0$이어도 $0^0 = 1$([[power-of-a-real-number|실수의 거듭제곱]])이므로 첫 항은 $1$입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 합과 차는 정수이다([[even-and-odd]]). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 아래에서 $(y_j)$는 $(x_n)_{n \ge 0}$을, $(z_j)$는 $(w_n)_{n \ge 0}$을 한 칸 옮긴 수열이다.

**진술의 확인.** 자연수 $j$는 (Z1)에 의해 $1 \le j$이므로 (Z7)에 의해 $0 \le j - 1$이고, $x_{j-1}$이 정해진 실수이다. $k \ge -1$이면 $k + 1 \ge 0$이므로 시작 번호 $1$, 끝 번호 $k + 1$은 [[finite-sum-of-reals]]의 조건 $1 \le 1$, $1 - 1 \le k + 1$을 만족하고, $\sum_{j=1}^{k+1} y_j$가 뜻을 갖는다. 범위에서만 정해진 항의 경우에는 $1 \le j \le k + 1$이면 (Z7)에 의해 $0 \le j - 1 \le k$이므로 $c_{j-1}$이 정해져 있다. $0 \le n \le k$에서 $c_n = x_n$이면 $1 \le j \le k + 1$에서 $c_{j-1} = x_{j-1} = y_j$이므로, 그 항목의 범위에서만 정해진 항의 합의 약속에 의해 $\sum_{j=1}^{k+1} c_{j-1} = \sum_{j=1}^{k+1} y_j$이다. 마지막으로 $(y_j)$의 $j$번째 부분합은 그 항목의 (1)에 의해 $\sum_{i=1}^{j} y_i$이고, $k = j - 1 \ge 0$으로 두면 정의에 의해 $\sum_{n=0}^{j-1} x_n$이다.

**1의 증명.** 정의와 [[finite-sum-of-reals]]의 (2)에 의해 $\sum_{n=0}^{-1} x_n = \sum_{j=1}^{0} y_j = 0$이고 $\sum_{n=0}^{0} x_n = \sum_{j=1}^{1} y_j = y_1 = x_0$이다.

**2의 증명.** $k \ge -1$이면 $k + 1 \ge 0 = 1 - 1$이므로 그 항목의 (3)에 의해 $\sum_{j=1}^{k+2} y_j = \sum_{j=1}^{k+1} y_j + y_{k+2}$이고, $y_{k+2} = x_{k+1}$이다. 정의에 의해 왼쪽은 $\sum_{n=0}^{k+1} x_n$, 오른쪽 첫 합은 $\sum_{n=0}^{k} x_n$이다.

**3의 증명.** $p = -1$이면 (1)에 의해 첫 합은 $0$이고 둘째 합은 $\sum_{n=0}^{k} x_n$ 자신이므로 (K1), (K4)에 의해 등식이 성립한다. $0 \le p \le k$이면 $1 - 1 \le p + 1 \le k + 1$이므로 [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (1)에 의해
$$
\sum_{i=1}^{k+1} y_i = \sum_{i=1}^{p+1} y_i + \sum_{i=p+2}^{k+1} y_i
$$
이다. 첫 합은 정의에 의해 $\sum_{n=0}^{p} x_n$이다. 둘째 합에는 같은 항목의 (2)를 $(x_n)_{n \ge 1}$, $(y_i)$, 옮기는 수 $1$에 쓴다. 시작 번호 $p + 1$, 끝 번호 $k$는 $1 \le p + 1$, $p \le k$를 만족하고, $p + 1 \le n \le k$인 모든 정수 $n$에서 $y_{n+1} = x_n$이므로 $\sum_{n=p+1}^{k} x_n = \sum_{i=p+2}^{k+1} y_i$이다. 특히 $p = 0$이면 첫 합은 (1)에 의해 $x_0$이다.

**4의 증명.** [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (8)에 의해 [[finite-sum-of-reals]]의 (2), (3)과 쪼개기와 첨자 옮기기의 (1), (2)는 범위에서만 정해진 항으로 써도 성립한다. (1)–(3)의 증명에서 $(y_i)$를 범위에서만 정해진 항 $c_{i-1}$로, $(x_n)_{n \ge 1}$을 범위에서만 정해진 항 $c_n$으로 바꾸면 같은 증명이 된다.

**5–7의 증명.** $n$에서의 값이 $c\,x_n + w_n$인 0부터 번호가 붙은 수열을 한 칸 옮긴 수열의 $i$번째 항은 $c\,x_{i-1} + w_{i-1} = c\,y_i + z_i$이고, 차와 절댓값도 같다($y_i - z_i$, $|y_i|$). 정의에 의해 (5)와 (7)은 [[linearity-and-order-of-finite-sums]]의 (1)과 (5)를 시작 번호 $1$, 끝 번호 $k + 1$에서 $(y_i)$, $(z_i)$에 쓴 것이다. (6): $0 \le n \le k$에서 $x_n \le w_n$이면 $1 \le i \le k + 1$에서 $0 \le i - 1 \le k$이므로 $y_i \le z_i$이고, 그 항목의 (3)에 의해 $\sum_{i=1}^{k+1} y_i \le \sum_{i=1}^{k+1} z_i$이다.

**8의 증명.** $x_n$을 $n \ge K + 1$에서 정해진 항으로 보고 [[sum-of-a-series|급수의 합의 기호]]의 뜻으로 1부터 다시 번호 붙인 수열을 $(v_i)$라 하면 $v_i = x_{i+(K+1)-1} = x_{i+K}$이다. $K + 1$은 자연수이고, 정수의 계산으로 $(i + K + 1) - 1 = i + K$이므로 모든 자연수 $i$에서 $y_{i+(K+1)} = x_{i+K} = v_i$이다. 곧 $(v_i)$는 $(y_i)$의 $(K + 1)$-꼬리([[tail-of-a-sequence]])이다. [[tail-of-a-series|급수의 꼬리]]의 (2)에 의해 $(y_i)$의 급수가 수렴하는 것은 정확히 $(v_i)$의 급수가 수렴할 때이고, 그 (3)에 의해 이때 $\sum_{i=1}^{\infty} y_i$는 $(y_i)$의 $(K + 1)$번째 부분합과 $\sum_{i=1}^{\infty} v_i$의 합이다. 진술의 확인에 의해 그 부분합은 $\sum_{n=0}^{K} x_n$이고, 정의에 의해 $\sum_{i=1}^{\infty} y_i = \sum_{n=0}^{\infty} x_n$, $\sum_{i=1}^{\infty} v_i = \sum_{n=K+1}^{\infty} x_n$이다.

$K = 0$이면 (1)에 의해 $\sum_{n=0}^{0} x_n = x_0$이고, $v_i = x_i$이므로 $(v_i) = (x_n)_{n \ge 1}$이다. 따라서 "$n \ge 1$에서 정해진 항 $x_n$의 급수"는 $(x_n)_{n \ge 1}$의 급수이고 그 합은 $\sum_{n=1}^{\infty} x_n$이다.

**9–11의 증명.** 5–7의 증명에서처럼 $c\,x_n + w_n$, $x_n - w_n$, $|x_n|$을 한 칸 옮긴 수열은 각각 $i$번째 항이 $c\,y_i + z_i$, $y_i - z_i$, $|y_i|$인 수열이다. 또 [[sum-of-a-series]]에서 $m = 1$이고 항이 수열 $(y_i)$의 항이면 1부터 다시 번호 붙인 수열은 $(y_i)$ 자신이다. 따라서

- (9)는 그 항목의 (3)을 $m = 1$, $(y_i)$, $(z_i)$에 쓴 것이다.
- (10)의 (i)은 그 항목의 (4)의 (i)을 $m = 1$에 쓴 것이다. $0$ 이상인 모든 $n$에서 $x_n \le w_n$이면 모든 자연수 $i$에서 $y_i = x_{i-1} \le w_{i-1} = z_i$이다. (10)의 (ii): 모든 자연수 $i$에서 $0 \le y_i$이다. 그 항목의 (4)의 (ii)를 $m = 1$, $(y_i)$에 쓰면, 급수가 수렴하는 것은 정확히 어떤 $B$가 있어 $0$ 이상인 모든 정수 $k'$에서 $\sum_{i=1}^{k'} y_i \le B$일 때이고, 이때 $0 \le \sum_{i=1}^{k'} y_i \le \sum_{i=1}^{\infty} y_i$이다. $k' = k + 1$로 두면 $k'$이 $0$ 이상인 정수 전체를 지나는 것은 정확히 $k$가 $-1$ 이상인 정수 전체를 지날 때이고, 정의에 의해 $\sum_{i=1}^{k+1} y_i = \sum_{n=0}^{k} x_n$이다. (10)의 (iii)은 그 항목의 (4)의 (iii)을 $(y_i)$, $(z_i)$에 쓴 것이다.
- (11)은 그 항목의 (5)를 $m = 1$, $(y_i)$에 쓴 것이다.

**12의 증명.** $(y_i)$의 부분합 수열을 $(s_i)$라 하면 진술의 확인에 의해 $s_i = \sum_{n=0}^{i-1} x_n$이다. 자연수 $u < v$에 대하여 $p = u - 1$, $k = v - 1$로 두면 $0 \le p < k$이고, (3)과 (K1), (K2), (K8)의 (ii), (K4)에 의해 $s_v - s_u = \sum_{n=0}^{k} x_n - \sum_{n=0}^{p} x_n = \sum_{n=p+1}^{k} x_n$이다. [[cauchy-criterion-for-series|급수의 코시 판정법]]의 (2)에 의해 $(y_i)$의 급수가 수렴하는 것은 정확히, 모든 양수 $\varepsilon$에 대하여 자연수 $M'$이 있어 $M' \le u < v$인 모든 자연수 $u$, $v$에서 $|s_v - s_u| < \varepsilon$일 때이다.

이 조건이 성립하면 $M = M' - 1$은 (Z1), (Z7)에 의해 $0$ 이상인 정수이고, $M \le p < k$인 정수 $p$, $k$에 대하여 $u = p + 1$, $v = k + 1$은 $M' \le u < v$인 자연수이므로 $\left| \sum_{n=p+1}^{k} x_n \right| = |s_v - s_u| < \varepsilon$이다. 거꾸로 진술의 조건이 $M$으로 성립하면 $M' = M + 1$은 자연수이고, $M' \le u < v$인 자연수 $u$, $v$에 대하여 $p = u - 1$, $k = v - 1$은 $M \le p < k$이므로 $|s_v - s_u| = \left| \sum_{n=p+1}^{k} x_n \right| < \varepsilon$이다. 정의에 의해 $(y_i)$의 급수가 수렴하는 것은 $(x_n)_{n \ge 0}$의 급수가 수렴하는 것이다.

**13의 증명.** $n$에서의 값이 $a r^n$인 0부터 번호가 붙은 수열을 한 칸 옮긴 수열의 $i$번째 항은 $a r^{i-1}$이므로, 이것은 첫째 항이 $a$이고 공비가 $r$인 [[geometric-series|등비급수]]의 수열이다.

(i) $a = 1$로 두고 그 수열의 부분합 수열을 $(s_i)$라 하자. $k \ge 0$이면 $k + 1$은 자연수이고 진술의 확인에 의해 $\sum_{n=0}^{k} r^n = s_{k+1}$이다. 등비급수의 (1)에 의해 $r \ne 1$이면 $s_{k+1} = \dfrac{1 \cdot (1 - r^{k+1})}{1 - r} = \dfrac{1 - r^{k+1}}{1 - r}$이고((K1), (K4)), $r = 1$이면 $s_{k+1} = (k + 1) \cdot 1 = k + 1$이다. $k = -1$이면 왼쪽은 (1)에 의해 $0$이다. 오른쪽은, $r \ne 1$이면 [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $r^{0} = 1$이므로 $(1 - 1)(1 - r)^{-1} = 0 \cdot (1 - r)^{-1} = 0$이고((K9)), $r = 1$이면 $-1 + 1 = 0$이다.

(ii) $|r| < 1$이면 등비급수의 (2)에 의해 한 칸 옮긴 수열의 급수는 수렴하고 합은 $\dfrac{a}{1 - r}$이다. 정의에 의해 이것이 결론이다. $a = 1$이면 $1 \cdot r^n = r^n$이다((K1), (K4)). $\blacksquare$
:::

## 예시와 반례

:::example[첫 항을 떼어 낸 합]
$r = -1/2$이면 $|r| = 1/2 < 1$이므로 (13)의 (ii)에 의해
$$
\begin{aligned}
\sum_{n=0}^{\infty} \Bigl(-\frac{1}{2}\Bigr)^{n} &= \frac{1}{1 - (-1/2)} \\
&= \frac{1}{3/2} = \frac{2}{3}
\end{aligned}
$$
입니다. (8)에 의해 $\sum_{n=0}^{\infty} (-1/2)^n = (-1/2)^0 + \sum_{n=1}^{\infty} (-1/2)^n$이고 $(-1/2)^0 = 1$이므로 $\sum_{n=1}^{\infty} (-1/2)^n = 2/3 - 1 = -1/3$입니다. [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)을 $m = 1$에 써도 $(-1/2)\bigl(1 - (-1/2)\bigr)^{-1} = (-1/2)(2/3) = -1/3$으로 같습니다.
:::

:::example[공비가 0 인 등비급수]
$r = 0$이면 (13)의 (ii)에 의해 $\sum_{n=0}^{\infty} 0^n = (1 - 0)^{-1} = 1$입니다. 이 합이 $0$이 아닌 것은 [[power-of-a-real-number|실수의 거듭제곱]]에서 $0^0 = 1$로 정했기 때문이고, 그 항목의 (2)의 (iv)에 의해 $n \ge 1$이면 $0^n = 0$입니다. (8)로 첫 항을 떼어 내면 $1 = 0^0 + \sum_{n=1}^{\infty} 0^n$이므로 $\sum_{n=1}^{\infty} 0^n = 0$이고, 이것은 모든 항이 $0$인 수열의 급수의 합과 맞습니다. (13)의 (i)로 유한 합을 보면 $k \ge 0$에서 $\sum_{n=0}^{k} 0^n = (1 - 0^{k+1})(1 - 0)^{-1} = 1$입니다.
:::

:::counterexample[첨자의 시작만 바꾼 합은 다를 수 있다]
같은 식 $(1/2)^n$을 $0$부터 더한 합과 $1$부터 더한 합은 다릅니다. (13)의 (ii)에 의해 $\sum_{n=0}^{\infty} (1/2)^n = (1 - 1/2)^{-1} = 2$이고, [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)을 $m = 1$에 쓰면 $\sum_{n=1}^{\infty} (1/2)^n = (1/2)(1 - 1/2)^{-1} = 1$입니다. 이 예에서 시작 번호를 $0$에서 $1$로 바꾸면서 같은 합을 얻으려면 식도 한 칸 옮겨야 합니다(첫 항 $x_0$이 $0$이면 (8)에 의해 식을 옮기지 않아도 두 합이 같습니다). 정의에 의해 $\sum_{n=0}^{\infty} (1/2)^n = \sum_{j=1}^{\infty} (1/2)^{j-1}$이고, 그 항목의 (6)의 (i)을 $a = 1$에 쓰면 오른쪽도 $2$입니다.
:::

## 확인 질문

:::check[$k = -1, 0, 1$일 때 $\sum_{n=0}^{k} 2^n$은 얼마인가?]
차례로 $0$, $1$, $3$입니다. (1)에 의해 $\sum_{n=0}^{-1} 2^n = 0$이고 $\sum_{n=0}^{0} 2^n = 2^0 = 1$이며, (2)에 의해 $\sum_{n=0}^{1} 2^n = 1 + 2^1 = 3$입니다. (13)의 (i)의 식 $(1 - 2^{k+1})(1 - 2)^{-1} = 2^{k+1} - 1$에 $k = -1, 0, 1$을 넣어도 $1 - 1 = 0$, $2 - 1 = 1$, $4 - 1 = 3$입니다.
:::

:::check[$\sum_{n=0}^{\infty} a r^n = 3$이고 $\sum_{n=1}^{\infty} a r^n = 1$이면 $a$와 $r$은 무엇인가?]
$a = 2$, $r = 1/3$입니다. 두 합이 있으므로 (8)에 의해 $3 = a r^0 + 1 = a + 1$이고 $a = 2$입니다. 한 칸 옮긴 수열은 첫째 항이 $2$이고 공비가 $r$인 등비급수의 수열이며 그 급수가 수렴하므로, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 $|r| < 1$입니다. 그러면 (13)의 (ii)에 의해 $2(1 - r)^{-1} = 3$이므로 $1 - r = 2/3$이고 $r = 1/3$입니다. 거꾸로 $a = 2$, $r = 1/3$이면 $\sum_{n=1}^{\infty} 2 (1/3)^n = 2 \cdot (1/3)(1 - 1/3)^{-1} = 2 \cdot (1/2) = 1$입니다([[sum-of-a-series]]의 (3)과 (6)의 (iii)).
:::
