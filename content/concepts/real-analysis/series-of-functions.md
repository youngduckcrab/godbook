---
title: 함수항 급수
title_en: Series of Functions
aliases: [함수의 급수, 함수항 급수의 점별 수렴, 함수항 급수의 고른 수렴, 합 함수, series of functions, pointwise convergence of a series, uniform convergence of a series, sum function]
kind: definition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 집합 X 에서 ℝ 로의 사상의 열 (f_n) 의 함수항 급수가 점별로 또는 고르게 수렴한다는 것을 부분합 함수의 열이 그렇게 수렴하는 것으로 정하고, 점별 수렴하면 합 함수의 x 에서의 값이 Σ_{n=1}^∞ f_n(x) 라는 것, 고른 수렴의 ε 꼴과 꼬리 꼴, 고른 코시 판정, 부분집합 위의 수렴, 0부터 번호가 붙은 열의 급수, 항이 상수 사상인 급수를 진술한다.
requires: [function, adding-or-removing-an-element, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, series-and-partial-sums, finite-sum-of-reals, pointwise-convergence, uniform-convergence, uniformly-cauchy-sequence-of-maps, sum-of-a-series, series-indexed-from-zero, finite-sums-of-functions]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits 의 11.2.1절 Continuity: 점별 수렴의 정의 뒤 문단 (p.144), 고른 수렴의 정의 뒤 문단 (p.145), Proposition 11.2.3 (p.145), Theorem 11.2.4 의 증명 (p.146); 11.2.4절 Exercises 의 Exercise 11.2.8 (p.152)"
    checked: original
    note: "출처 11.2.1절(p.144)은 Y = ℂ 일 때 함수항 급수가 f 로 점별 수렴한다는 것을 모든 x ∈ X 에서 f(x) = lim_n Σ_{k=1}^n f_k(x) = Σ_{k=1}^∞ f_k(x) 인 것으로 정의하고, p.145 는 복소숫값 함수항 급수 Σ_{n=1}^∞ f_n 이 f 로 고르게 수렴한다는 것을 부분합의 열이 고르게 수렴하는 것, 곧 모든 ε > 0 에 M 이 있어 n ≥ M 과 모든 x 에서 |Σ_{k=1}^n f_k(x) − f(x)| < ε 인 것으로 정의한다. 이 항목은 값을 실수로 옮기고(복소수를 쓰지 않는다), 부분합의 열을 함수의 유한 합 항목의 부분합 함수의 열로 두며, 출처처럼 급수를 기호 Σ_{n=1}^∞ f_n 으로 쓰지 않고 수렴할 때의 합 함수의 값만 Σ_{n=1}^∞ f_n(x) 로 쓴다. (2)는 출처의 고른 수렴의 정의를 실숫값으로 옮긴 꼴이다. (4)의 고른 코시 판정은 출처 Proposition 11.2.3(p.145, 고르게 수렴하면 고르게 코시이고 공역이 완비이면 거꾸로도 성립하며 증명은 연습문제 11.2.2 로 둔다)을 부분합 함수의 열에 쓴 것이다. 출처의 Theorem 11.2.4 의 증명(p.146)도 함수항 급수의 부분합의 차 Σ_{k=n+1}^{m} f_k(x) 를 x 에 따르지 않는 수로 눌러 고른 수렴을 얻는다. (3)의 꼬리 꼴은 같은 증명의 마지막 식(p.146)이 꼬리의 합으로 부분합과의 차를 누르는 것과 같은 발상이다. 예시 '항이 상수 사상인 급수'의 수열 (3⁻¹)ⁿ 의 급수는 Basic Analysis I 의 Example 2.5.4(p.88, Σ 1/2ⁿ = 1)와 공비만 다른 등비급수이다. 반례 '점마다 0 이 아닌 항이 많아야 하나인 급수'는 출처 연습문제 11.2.8(p.152)의 함수열(1/(n+1) < x < 1/n 에서만 n 이고 그 밖에서 0)과 같이 점마다 0 이 아닌 항이 많아야 하나인 열이다. 그 연습문제의 급수는 고르게 수렴하고, 이 반례의 급수는 고르게 수렴하지 않는다."
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Proposition 6.2.11 의 증명 (p.241); 2.5.1절 Definition 의 Example 2.5.4 (p.88)"
    checked: original
    note: "Basic Analysis I 의 6.2.4절은 멱급수의 부분합이 고르게 수렴하는 것을 다룬다. Proposition 6.2.11 의 증명(p.241)은 멱급수의 부분합이 고르게 코시이므로 고르게 수렴한다고 적는다. 이것은 (4)를 멱급수에 쓴 것과 같은 논법이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(M 판정의 가정과 빈 정의역의 경우 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
사상의 열, 값의 수열 $(f_n(x))$, 점별 수렴과 점별 극한, 제한의 열 $(f_n|_A)$와 "$A$ 위에서"는 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴과 고른 극한은 [[uniform-convergence|고른 수렴]]의 것이며, 고르게 코시는 [[uniformly-cauchy-sequence-of-maps]]의 것이다. $\mathbb{R}$에는 보통 거리를 준다. 부분합 함수 $F_m$과 부분합 함수의 열 $(F_m)$, 0부터 번호가 붙은 사상의 열, 한 칸 옮긴 사상의 열, 0부터의 부분합 함수 $G_m$은 [[finite-sums-of-functions|함수의 유한 합]]의 것이다. 급수의 수렴과 합은 [[series-and-partial-sums]]의 것이고, 기호 $\sum_{n=1}^{\infty}$, $\sum_{n=m+1}^{\infty}$와 꼬리의 합은 [[sum-of-a-series]]의 것이며, 0부터 번호가 붙은 수열의 합 $\sum_{n=0}^{k}$, $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이다. 아래에서 $X$는 집합이고, $(f_n)$은 $X$에서 $\mathbb{R}$로의 사상의 열, $(F_m)$은 그 부분합 함수의 열이다.

**함수항 급수의 수렴.** $f : X \to \mathbb{R}$를 사상이라 하자.

- $(f_n)$의 **함수항 급수**(series of functions)가 $f$로 **점별 수렴한다**(converges pointwise)는 것은 정확히 $(F_m)$이 $f$로 점별 수렴할 때이다.
- $(f_n)$의 함수항 급수가 $f$로 **고르게 수렴한다**(converges uniformly)는 것은 정확히 $(F_m)$이 $f$로 고르게 수렴할 때이다.
- $(f_n)$의 함수항 급수가 **점별 수렴한다**(**고르게 수렴한다**)는 것은 정확히 $(F_m)$이 어떤 사상 $X \to \mathbb{R}$로 점별 수렴할(고르게 수렴할) 때이다.
- $A \subseteq X$일 때 $(f_n)$의 함수항 급수가 **$A$ 위에서** 사상 $h : A \to \mathbb{R}$로 점별 수렴한다(고르게 수렴한다)는 것은 정확히 $(f_n|_A)$의 함수항 급수가 $h$로 점별 수렴할(고르게 수렴할) 때이다.

**합 함수.** $(f_n)$의 함수항 급수가 점별 수렴하면, 아래 (1)에 의해 모든 $x \in X$에서 $(f_n(x))$의 급수가 수렴하고, $x$에서의 값이 $\sum_{n=1}^{\infty} f_n(x)$인 사상 $X \to \mathbb{R}$가 $(F_m)$의 하나뿐인 점별 극한이다. 이 사상을 $(f_n)$의 함수항 급수의 **합 함수**(sum function)라 한다.

"함수항 급수"는 [[series-and-partial-sums|급수와 부분합]]의 "급수"처럼 별도의 대상이 아니다. "$(f_n)$의 함수항 급수가 ○○이다"는 부분합 함수의 열 $(F_m)$에 관한 위의 문장을 뜻한다. 이 사이트는 함수항 급수를 나타내는 기호를 두지 않고, 기호 $\sum_{n=1}^{\infty} f_n(x)$는 $(f_n(x))$의 급수가 수렴할 때 그 합인 실수에만 쓴다.

다음이 성립한다. 아래에서 $f : X \to \mathbb{R}$는 사상이다.

1. (점별 수렴은 점마다의 수렴이다) $(f_n)$의 함수항 급수가 $f$로 점별 수렴하는 것은 정확히 모든 $x \in X$에서 $(f_n(x))$의 급수가 수렴하고 $\sum_{n=1}^{\infty} f_n(x) = f(x)$일 때이다. $(f_n)$의 함수항 급수가 점별 수렴하는 것은 정확히 모든 $x \in X$에서 $(f_n(x))$의 급수가 수렴할 때이고, 이때 합 함수가 $(F_m)$의 하나뿐인 점별 극한이다.
2. (고른 수렴의 $\varepsilon$ 꼴) $(f_n)$의 함수항 급수가 $f$로 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $m \ge N$인 모든 자연수 $m$과 $X$의 모든 점 $x$에서
   $$
   \Bigl| \sum_{n=1}^{m} f_n(x) - f(x) \Bigr| < \varepsilon
   $$
   일 때이다. 이때 $(f_n)$의 함수항 급수는 $f$로 점별 수렴하고, $f$는 합 함수이다. 곧 모든 $x \in X$에서 $f(x) = \sum_{n=1}^{\infty} f_n(x)$이다.
3. (꼬리 꼴) $(f_n)$의 함수항 급수가 점별 수렴한다고 하자. $0$ 이상인 모든 정수 $m$과 $x \in X$에서 $n \ge m + 1$에서 정해진 항 $f_n(x)$의 급수가 수렴하고
   $$
   \begin{aligned}
   &\sum_{n=1}^{\infty} f_n(x) - \sum_{n=1}^{m} f_n(x) \\
   &\quad = \sum_{n=m+1}^{\infty} f_n(x)
   \end{aligned}
   $$
   이다. $(f_n)$의 함수항 급수가 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $m \ge N$인 모든 자연수 $m$과 $X$의 모든 점 $x$에서 $\left| \sum_{n=m+1}^{\infty} f_n(x) \right| < \varepsilon$일 때이다.
4. (고른 코시 판정) $(f_n)$의 함수항 급수가 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $N \le m < k$인 모든 정수 $m$, $k$와 $X$의 모든 점 $x$에서
   $$
   \Bigl| \sum_{n=m+1}^{k} f_n(x) \Bigr| < \varepsilon
   $$
   일 때이다. 이때 $(f_n)$의 함수항 급수는 합 함수로 고르게 수렴한다.
5. (부분집합 위에서) $A \subseteq X$라 하자. $(f_n|_A)$의 부분합 함수의 열은 $(F_m|_A)$이다. 따라서 $(f_n)$의 함수항 급수가 $A$ 위에서 $h : A \to \mathbb{R}$로 고르게 수렴하는 것은 정확히 $(F_m)$이 $A$ 위에서 $h$로 고르게 수렴할 때이고, 점별 수렴도 같다. $(f_n)$의 함수항 급수가 $f$로 고르게(점별) 수렴하면 $X$의 모든 부분집합 $A$ 위에서 $f|_A$로 고르게(점별) 수렴한다.
6. (0부터 번호가 붙은 열) $(f_n)_{n \ge 0}$을 $X$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열, $(g_j)$를 그 한 칸 옮긴 사상의 열, $G_m$을 그 0부터의 부분합 함수라 하자. $(f_n)_{n \ge 0}$의 **함수항 급수**가 $f$로 점별 수렴한다(고르게 수렴한다)는 것은 정확히 $(g_j)$의 함수항 급수가 $f$로 점별 수렴할(고르게 수렴할) 때이다. 점별 수렴, 고른 수렴, "$A$ 위에서", 합 함수도 같은 방식으로 $(g_j)$의 것으로 정한다. 그러면 다음이 성립한다.
   - (i) $(f_n)_{n \ge 0}$의 함수항 급수가 $f$로 점별 수렴하는 것은 정확히 모든 $x \in X$에서 $(f_n(x))_{n \ge 0}$의 급수가 수렴하고 $\sum_{n=0}^{\infty} f_n(x) = f(x)$일 때이다. 합 함수의 $x$에서의 값은 $\sum_{n=0}^{\infty} f_n(x)$이다.
   - (ii) $(f_n)_{n \ge 0}$의 함수항 급수가 $f$로 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0$ 이상인 정수 $M$이 있어 $m \ge M$인 모든 정수 $m$과 $X$의 모든 점 $x$에서 $|G_m(x) - f(x)| < \varepsilon$일 때이다.
   - (iii) $(f_n)_{n \ge 0}$의 함수항 급수가 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0$ 이상인 정수 $M$이 있어 $M \le m < k$인 모든 정수 $m$, $k$와 $X$의 모든 점 $x$에서 $|G_k(x) - G_m(x)| < \varepsilon$일 때이다. 여기서 $G_k(x) - G_m(x) = \sum_{n=m+1}^{k} f_n(x)$이다.
   - (iv) $(f_n)_{n \ge 0}$의 함수항 급수가 점별 수렴하면, $0$ 이상인 모든 정수 $m$과 $x \in X$에서 $\sum_{n=0}^{\infty} f_n(x) - G_m(x) = \sum_{n=m+1}^{\infty} f_n(x)$이다. 이때 고르게 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0$ 이상인 정수 $M$이 있어 $m \ge M$인 모든 정수 $m$과 $X$의 모든 점 $x$에서 $\left| \sum_{n=m+1}^{\infty} f_n(x) \right| < \varepsilon$일 때이다.
   - (v) $(f_n)_{n \ge 0}$의 함수항 급수가 고르게(점별) 수렴하는 것은 정확히 $(f_n)_{n \ge 1}$, 곧 $n$번째 항이 $f_n$인 사상의 열의 함수항 급수가 고르게(점별) 수렴할 때이고, 이때 모든 $x \in X$에서 $\sum_{n=0}^{\infty} f_n(x) = f_0(x) + \sum_{n=1}^{\infty} f_n(x)$이다.
7. (항이 상수 사상인 급수) $(a_n)$을 실수열이라 하고, 모든 자연수 $n$과 $x \in X$에서 $f_n(x) = a_n$이라 하자. $(a_n)$의 급수가 수렴하면 $(f_n)$의 함수항 급수는 모든 점에서 값이 $\sum_{n=1}^{\infty} a_n$인 사상으로 고르게 수렴한다. $X$가 공집합이 아니고 $(f_n)$의 함수항 급수가 점별 수렴하면 $(a_n)$의 급수가 수렴한다. 따라서 $X \ne \emptyset$이면 $(f_n)$의 함수항 급수가 점별 수렴하는 것, 고르게 수렴하는 것, $(a_n)$의 급수가 수렴하는 것은 서로 같다.
:::

:::english
Sequences of maps, the sequence of values $(f_n(x))$, pointwise convergence and pointwise limits, the sequence of restrictions $(f_n|_A)$ and "on $A$" are those of the entry on sequences of maps and pointwise convergence, uniform convergence and uniform limits are those of the entry on uniform convergence, and being uniformly Cauchy is that of the entry on uniformly Cauchy sequences of maps. $\mathbb{R}$ carries the usual metric. The partial sum functions $F_m$ and the sequence of partial sum functions $(F_m)$, sequences of maps indexed from zero, the shifted sequence of maps and the partial sum functions from zero $G_m$ are those of the entry on finite sums of functions. Convergence and the sum of a series are those of the entry on series and partial sums, the symbols $\sum_{n=1}^{\infty}$, $\sum_{n=m+1}^{\infty}$ and sums of tails are those of the entry on the notation for the sum of a series, and the sums $\sum_{n=0}^{k}$, $\sum_{n=0}^{\infty}$ of sequences indexed from zero are those of the entry on sums of sequences indexed from zero. Below, $X$ is a set, $(f_n)$ is a sequence of maps from $X$ to $\mathbb{R}$, and $(F_m)$ is its sequence of partial sum functions.

**Convergence of a series of functions.** Let $f : X \to \mathbb{R}$ be a map.

- The **series of functions** of $(f_n)$ **converges pointwise** to $f$ exactly when $(F_m)$ converges pointwise to $f$.
- The series of functions of $(f_n)$ **converges uniformly** to $f$ exactly when $(F_m)$ converges uniformly to $f$.
- The series of functions of $(f_n)$ **converges pointwise** (**converges uniformly**) exactly when $(F_m)$ converges pointwise (uniformly) to some map $X \to \mathbb{R}$.
- For $A \subseteq X$, the series of functions of $(f_n)$ converges pointwise (uniformly) **on $A$** to a map $h : A \to \mathbb{R}$ exactly when the series of functions of $(f_n|_A)$ converges pointwise (uniformly) to $h$.

**Sum function.** If the series of functions of $(f_n)$ converges pointwise, then by (1) below the series of $(f_n(x))$ converges for every $x \in X$, and the map $X \to \mathbb{R}$ whose value at $x$ is $\sum_{n=1}^{\infty} f_n(x)$ is the unique pointwise limit of $(F_m)$. This map is called the **sum function** of the series of functions of $(f_n)$.

A "series of functions" is not a separate object, just as a "series" in the entry on series and partial sums is not. "The series of functions of $(f_n)$ is such-and-such" means the corresponding statement above about the sequence of partial sum functions $(F_m)$. This site has no symbol for a series of functions, and the symbol $\sum_{n=1}^{\infty} f_n(x)$ is used only for the real number that is the sum of the series of $(f_n(x))$ when that series converges.

The following hold. Below, $f : X \to \mathbb{R}$ is a map.

1. (Pointwise convergence is convergence at each point) The series of functions of $(f_n)$ converges pointwise to $f$ exactly when for every $x \in X$ the series of $(f_n(x))$ converges and $\sum_{n=1}^{\infty} f_n(x) = f(x)$. The series of functions of $(f_n)$ converges pointwise exactly when the series of $(f_n(x))$ converges for every $x \in X$, and then the sum function is the unique pointwise limit of $(F_m)$.
2. ($\varepsilon$ form of uniform convergence) The series of functions of $(f_n)$ converges uniformly to $f$ exactly when for every positive real $\varepsilon$ there is a natural number $N$ such that for every natural number $m \ge N$ and every point $x$ of $X$
   $$
   \Bigl| \sum_{n=1}^{m} f_n(x) - f(x) \Bigr| < \varepsilon .
   $$
   In that case the series of functions of $(f_n)$ converges pointwise to $f$, and $f$ is the sum function; that is, $f(x) = \sum_{n=1}^{\infty} f_n(x)$ for every $x \in X$.
3. (Tail form) Suppose the series of functions of $(f_n)$ converges pointwise. For every integer $m \ge 0$ and $x \in X$, the series of the terms $f_n(x)$ given for $n \ge m + 1$ converges and
   $$
   \begin{aligned}
   &\sum_{n=1}^{\infty} f_n(x) - \sum_{n=1}^{m} f_n(x) \\
   &\quad = \sum_{n=m+1}^{\infty} f_n(x) .
   \end{aligned}
   $$
   The series of functions of $(f_n)$ converges uniformly exactly when for every positive real $\varepsilon$ there is a natural number $N$ such that $\left| \sum_{n=m+1}^{\infty} f_n(x) \right| < \varepsilon$ for every natural number $m \ge N$ and every point $x$ of $X$.
4. (Uniform Cauchy criterion) The series of functions of $(f_n)$ converges uniformly exactly when for every positive real $\varepsilon$ there is a natural number $N$ such that for all integers $m$, $k$ with $N \le m < k$ and every point $x$ of $X$
   $$
   \Bigl| \sum_{n=m+1}^{k} f_n(x) \Bigr| < \varepsilon .
   $$
   In that case the series of functions of $(f_n)$ converges uniformly to its sum function.
5. (On a subset) Let $A \subseteq X$. The sequence of partial sum functions of $(f_n|_A)$ is $(F_m|_A)$. Hence the series of functions of $(f_n)$ converges uniformly on $A$ to $h : A \to \mathbb{R}$ exactly when $(F_m)$ converges uniformly on $A$ to $h$, and likewise for pointwise convergence. If the series of functions of $(f_n)$ converges uniformly (pointwise) to $f$, then it converges uniformly (pointwise) to $f|_A$ on every subset $A$ of $X$.
6. (Sequences indexed from zero) Let $(f_n)_{n \ge 0}$ be a sequence of maps indexed from zero from $X$ to $\mathbb{R}$, $(g_j)$ its shifted sequence of maps, and $G_m$ its partial sum functions from zero. The **series of functions** of $(f_n)_{n \ge 0}$ converges pointwise (uniformly) to $f$ exactly when the series of functions of $(g_j)$ converges pointwise (uniformly) to $f$. Pointwise convergence, uniform convergence, "on $A$" and the sum function are likewise defined as those of $(g_j)$. Then the following hold.
   - (i) The series of functions of $(f_n)_{n \ge 0}$ converges pointwise to $f$ exactly when for every $x \in X$ the series of $(f_n(x))_{n \ge 0}$ converges and $\sum_{n=0}^{\infty} f_n(x) = f(x)$. The value of the sum function at $x$ is $\sum_{n=0}^{\infty} f_n(x)$.
   - (ii) The series of functions of $(f_n)_{n \ge 0}$ converges uniformly to $f$ exactly when for every positive real $\varepsilon$ there is an integer $M \ge 0$ such that $|G_m(x) - f(x)| < \varepsilon$ for every integer $m \ge M$ and every point $x$ of $X$.
   - (iii) The series of functions of $(f_n)_{n \ge 0}$ converges uniformly exactly when for every positive real $\varepsilon$ there is an integer $M \ge 0$ such that $|G_k(x) - G_m(x)| < \varepsilon$ for all integers $m$, $k$ with $M \le m < k$ and every point $x$ of $X$. Here $G_k(x) - G_m(x) = \sum_{n=m+1}^{k} f_n(x)$.
   - (iv) If the series of functions of $(f_n)_{n \ge 0}$ converges pointwise, then $\sum_{n=0}^{\infty} f_n(x) - G_m(x) = \sum_{n=m+1}^{\infty} f_n(x)$ for every integer $m \ge 0$ and $x \in X$. In that case it converges uniformly exactly when for every positive real $\varepsilon$ there is an integer $M \ge 0$ such that $\left| \sum_{n=m+1}^{\infty} f_n(x) \right| < \varepsilon$ for every integer $m \ge M$ and every point $x$ of $X$.
   - (v) The series of functions of $(f_n)_{n \ge 0}$ converges uniformly (pointwise) exactly when the series of functions of $(f_n)_{n \ge 1}$, that is, of the sequence of maps whose $n$th term is $f_n$, converges uniformly (pointwise), and in that case $\sum_{n=0}^{\infty} f_n(x) = f_0(x) + \sum_{n=1}^{\infty} f_n(x)$ for every $x \in X$.
7. (Series whose terms are constant maps) Let $(a_n)$ be a sequence of real numbers and suppose $f_n(x) = a_n$ for every natural number $n$ and every $x \in X$. If the series of $(a_n)$ converges, the series of functions of $(f_n)$ converges uniformly to the map whose value at every point is $\sum_{n=1}^{\infty} a_n$. If $X$ is nonempty and the series of functions of $(f_n)$ converges pointwise, then the series of $(a_n)$ converges. Hence, if $X \ne \emptyset$, pointwise convergence of the series of functions of $(f_n)$, its uniform convergence, and convergence of the series of $(a_n)$ are all equivalent.
:::

## 직관

함수항 급수는 점마다 수의 급수가 하나씩 있는 것입니다. $x$를 하나 정하면 $f_1(x), f_2(x), \dots$는 실수열이고, 그 급수가 수렴하면 합 $\sum_{n=1}^{\infty} f_n(x)$가 하나 정해집니다. 모든 점에서 그렇게 합이 정해질 때가 점별 수렴이고, 그 합들을 모은 함수가 합 함수입니다. 해석학 입문이 급수를 부분합 수열로 정의했듯이, 이 항목은 함수항 급수를 부분합 함수의 열 $(F_m)$로 정의해 거리공간과 완비성 4단원의 점별 수렴과 고른 수렴을 그대로 가져옵니다.

고른 수렴은 "점마다 부분합이 합에 가까워진다"에 "같은 번호부터 모든 점에서 한꺼번에"를 더한 것입니다. (3)이 말하듯 부분합과 합의 차는 꼬리의 합이므로, 고른 수렴은 꼬리의 합이 모든 점에서 한꺼번에 작아지는 것입니다. 비유하자면 여러 마을에 같은 날 일을 시작한 공사가 있을 때, 마을마다 언젠가 공사가 거의 끝나는 것(점별)과 어떤 날 이후에는 모든 마을에서 남은 일이 정해진 양보다 적은 것(고른)의 차이입니다. 비유가 맞지 않는 곳은, 마을이 무한히 많을 수 있고 남은 일의 양이 줄어들기만 하는 것도 아니라는 점입니다(꼬리의 합은 음수이거나 커졌다 작아질 수 있다).

(4)의 고른 코시 판정은 합 함수를 모르고도 고른 수렴을 확인하게 해 줍니다. $\mathbb{R}$이 완비이기 때문에 부분합 함수들이 모든 점에서 한꺼번에 서로 가까워지기만 하면 고르게 수렴합니다. 바이어슈트라스 M 판정법은 이 판정으로 증명합니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 합과 차는 정수이다([[even-and-odd]]). [[order-properties-of-reals]]의 (10)에 의해 정수 사이의 부등식은 실수의 부등식으로 읽어도 뜻이 같다. 절댓값의 성질은 [[absolute-value]]의 것이다. 아래에서 [[pointwise-convergence]]의 항목과 [[uniform-convergence]]의 항목은 $Y = \mathbb{R}$(보통 거리)에 쓴다.

**1의 증명.** $x \in X$를 잡는다. [[finite-sums-of-functions|함수의 유한 합]]의 (1)의 (ii)에 의해 실수열 $(F_m(x))$는 $(f_n(x))$의 부분합 수열이다. [[pointwise-convergence]]의 (8)에 의해 $(F_m(x))$가 거리공간 $\mathbb{R}$에서 $f(x)$로 수렴하는 것은 정확히 해석학 입문의 뜻으로 $f(x)$로 수렴할 때이고, [[series-and-partial-sums]]의 정의와 [[limit-is-unique|극한의 유일성]]에 의해 이것은 정확히 $(f_n(x))$의 급수가 수렴하고 그 합이 $f(x)$일 때이며, [[sum-of-a-series]]의 정의에 의해 이것은 "$\sum_{n=1}^{\infty} f_n(x) = f(x)$"이다. 모든 $x$에서 이것을 쓰면 첫째 문장이 나온다.

둘째 문장: [[pointwise-convergence]]의 (4)에 의해 $(F_m)$이 어떤 사상으로 점별 수렴하는 것은 정확히 모든 $x$에서 $(F_m(x))$가 수렴할 때이고, 앞 문단처럼 이것은 정확히 모든 $x$에서 $(f_n(x))$의 급수가 수렴할 때이다. 이때 같은 (4)에 의해 $x$에서의 값이 $\lim_{m \to \infty} F_m(x)$인 사상이 $(F_m)$의 점별 극한이고 그 (3)에 의해 점별 극한은 이것뿐이다. [[sum-of-a-series]]의 (1)에 의해 $\lim_{m \to \infty} F_m(x) = \sum_{n=1}^{\infty} f_n(x)$이므로 이 사상은 합 함수이다. 합 함수가 사상으로서 있다는 것은 [[recursion-theorem]]의 (1)에 의한 것이다. 진술의 "합 함수"의 문단은 이 둘째 문장을 가리킨다.

**2의 증명.** 정의에 의해 $(f_n)$의 함수항 급수가 $f$로 고르게 수렴하는 것은 $(F_m)$이 $f$로 고르게 수렴하는 것이고, [[uniform-convergence]]의 (8)에 의해 이것은 정확히 모든 $\varepsilon > 0$에 자연수 $N$이 있어 $m \ge N$과 모든 $x$에서 $|F_m(x) - f(x)| < \varepsilon$일 때이다. $F_m(x) = \sum_{n=1}^{m} f_n(x)$이므로 이것이 진술의 조건이다. 이때 [[uniform-convergence]]의 (1)에 의해 $(F_m)$은 $f$로 점별 수렴하고, (1)에 의해 모든 $x$에서 $f(x) = \sum_{n=1}^{\infty} f_n(x)$이므로 $f$는 합 함수와 같은 사상이다([[function]]의 함수의 같음).

**3의 증명.** 점별 수렴하므로 (1)에 의해 모든 $x$에서 $(f_n(x))$의 급수가 수렴한다. $0$ 이상인 정수 $m$에 [[sum-of-a-series]]의 (2)를 첫 번호 $1$, $K = m$으로 쓰면($1 - 1 \le m$), $n \ge m + 1$에서 정해진 항 $f_n(x)$의 급수가 수렴하고 $\sum_{n=1}^{\infty} f_n(x) = \sum_{n=1}^{m} f_n(x) + \sum_{n=m+1}^{\infty} f_n(x)$이다. 양변에서 $\sum_{n=1}^{m} f_n(x)$를 빼면 첫째 등식이다((K…)).

합 함수를 $s$라 하자. 고르게 수렴하면 [[uniform-convergence]]의 (2)에 의해 그 고른 극한은 점별 극한인 $s$이다. 따라서 "고르게 수렴한다"는 "$s$로 고르게 수렴한다"와 같다. 거꾸로 $s$로 고르게 수렴하면 고르게 수렴하는 것은 정의에 의한 것이다. (2)에 의해 $s$로 고르게 수렴하는 것은 정확히 모든 $\varepsilon > 0$에 $N$이 있어 $m \ge N$과 모든 $x$에서 $|F_m(x) - s(x)| < \varepsilon$일 때이다. 첫째 등식과 [[absolute-value]]의 (3)에 의해 $|F_m(x) - s(x)| = \left| \sum_{n=m+1}^{\infty} f_n(x) \right|$이므로 이것이 진술의 조건이다.

**4의 증명.** [[uniformly-cauchy-sequence-of-maps|고르게 코시인 사상의 열]]의 (4)를 $(F_m)$에 쓰면, $(F_m)$이 어떤 사상으로 고르게 수렴하는 것은 정확히 모든 $\varepsilon > 0$에 자연수 $N$이 있어 $m, k \ge N$과 모든 $x$에서 $|F_m(x) - F_k(x)| < \varepsilon$일 때이다. 이 조건이 진술의 조건과 같음을 본다.

- 이 조건이 성립하고 $N \le m < k$이면 $m, k \ge N$이므로 $|F_m(x) - F_k(x)| < \varepsilon$이다. $m \ge N \ge 1$이므로 $0 \le m \le k$이고, [[finite-sums-of-functions]]의 (1)의 (iii)에 의해 $\sum_{n=m+1}^{k} f_n(x) = F_k(x) - F_m(x)$이며, 그 절댓값은 $|F_m(x) - F_k(x)|$와 같다.
- 거꾸로 진술의 조건이 $N$으로 성립하고 $m, k \ge N$이라 하자. (Z5)에 의해 $m < k$, $m = k$, $k < m$ 가운데 하나이다. $m = k$이면 $|F_m(x) - F_k(x)| = 0 < \varepsilon$이다. $m < k$이면 위와 같이 $|F_m(x) - F_k(x)| = \left| \sum_{n=m+1}^{k} f_n(x) \right| < \varepsilon$이고, $k < m$이면 $m$과 $k$의 자리를 바꾸어 같은 결론을 얻는다.

고르게 수렴하면 (3)의 증명의 첫 문단처럼 그 고른 극한은 합 함수이다.

**5의 증명.** [[finite-sums-of-functions]]의 (1)의 (iv)에 의해 $(f_n|_A)$의 $m$번째 부분합 함수는 $F_m|_A$이다. 정의에 의해 $(f_n)$의 함수항 급수가 $A$ 위에서 $h$로 고르게 수렴하는 것은 $(f_n|_A)$의 부분합 함수의 열 $(F_m|_A)$가 $h$로 고르게 수렴하는 것이고, [[uniform-convergence]]의 "$A$ 위에서"의 정의에 의해 이것은 $(F_m)$이 $A$ 위에서 $h$로 고르게 수렴하는 것이다. 점별 수렴도 [[pointwise-convergence]]의 (7)의 정의로 같다. 마지막 문장은 [[uniform-convergence]]의 (6)과 [[pointwise-convergence]]의 (7)을 $(F_m)$에 쓴 것이다.

**6의 증명.** [[finite-sums-of-functions]]의 (6)의 (i)에 의해 $(g_j)$는 사상의 열이고, $-1$ 이상인 $m$에서 $G_m$은 $(g_j)$의 $(m + 1)$번째 부분합 함수이다. $(g_j)$의 부분합 함수의 열을 $(H_j)$라 하면 자연수 $j$에서 $H_j = G_{j-1}$이다. $x \in X$에서 값의 수열 $(g_j(x))$는 0부터 번호가 붙은 수열 $(f_n(x))_{n \ge 0}$을 한 칸 옮긴 수열이다(같은 항목의 (6)의 (i)의 증명).

(i) (1)을 $(g_j)$에 쓰면, 점별 수렴하는 것은 정확히 모든 $x$에서 $(g_j(x))$의 급수가 수렴하고 그 합이 $f(x)$일 때이다. [[series-indexed-from-zero]]의 급수의 정의에 의해 이것은 $(f_n(x))_{n \ge 0}$의 급수가 수렴하고 $\sum_{n=0}^{\infty} f_n(x) = \sum_{j=1}^{\infty} g_j(x) = f(x)$인 것이다.

(ii) (2)를 $(g_j)$에 쓰면, 고르게 수렴하는 것은 정확히 모든 $\varepsilon > 0$에 자연수 $N$이 있어 $j \ge N$과 모든 $x$에서 $|H_j(x) - f(x)| = |G_{j-1}(x) - f(x)| < \varepsilon$일 때이다. 이 조건이 성립하면 $M = N - 1$($0$ 이상인 정수)로 두면 된다: $m \ge M$이면 $j = m + 1 \ge N$이고 $G_m = H_{m+1}$이다. 거꾸로 $M$이 있으면 $N = M + 1$(자연수)로 두면 $j \ge N$에서 $j - 1 \ge M$이다.

(iii) (4)를 $(g_j)$에 쓰고 (ii)와 같이 번호를 하나씩 옮긴다. $N \le j < l$은 $M = N - 1$, $m = j - 1$, $k = l - 1$에 대해 $M \le m < k$와 같고, $\sum_{i=j+1}^{l} g_i(x) = H_l(x) - H_j(x) = G_k(x) - G_m(x)$이다. 이 차가 $\sum_{n=m+1}^{k} f_n(x)$인 것은 [[series-indexed-from-zero]]의 (3)의 쪼개기($-1 \le m \le k$)이다.

(iv) [[series-indexed-from-zero]]의 (8)을 $K = m$으로 쓰면 $\sum_{n=0}^{\infty} f_n(x) = \sum_{n=0}^{m} f_n(x) + \sum_{n=m+1}^{\infty} f_n(x)$이고, $\sum_{n=0}^{m} f_n(x) = G_m(x)$이다. 둘째 문장은 (ii)를 합 함수 $s$에 쓰고 3의 증명과 같이 $|G_m(x) - s(x)| = \left| \sum_{n=m+1}^{\infty} f_n(x) \right|$를 쓴 것이다. 고르게 수렴하면 그 고른 극한이 합 함수라는 것은 (3)의 증명과 같다.

(v) $(f_n)_{n \ge 1}$의 부분합 함수의 열을 $(F_m)$이라 하면, [[finite-sums-of-functions]]의 (6)의 (i)에 의해 자연수 $m$에서 $G_m(x) = f_0(x) + F_m(x)$이다. $(f_n)_{n \ge 0}$의 함수항 급수가 점별 수렴하는 것은 (i)에 의해 모든 $x$에서 $(f_n(x))_{n \ge 0}$의 급수가 수렴하는 것이고, [[series-indexed-from-zero]]의 (8)($K = 0$)에 의해 이것은 모든 $x$에서 $(f_n(x))_{n \ge 1}$의 급수가 수렴하는 것, 곧 (1)에 의해 $(f_n)_{n \ge 1}$의 함수항 급수가 점별 수렴하는 것이며, 합에 관한 등식도 그 (8)이다. 고른 수렴: $(f_n)_{n \ge 1}$의 급수가 합 함수 $t$로 고르게 수렴하면, $s(x) = f_0(x) + t(x)$로 둘 때 자연수 $m$에서 $|G_m(x) - s(x)| = |F_m(x) - t(x)|$((K…))이므로 (2)의 $N$에 대해 $M = N$으로 (ii)의 조건이 성립한다. 거꾸로 $(f_n)_{n \ge 0}$의 함수항 급수가 고르게 수렴하면 그 고른 극한은 합 함수 $s$이고((iv)의 증명), 위에서 본 점별 수렴과 [[series-indexed-from-zero]]의 (8)에 의해 $(f_n)_{n \ge 1}$의 합 함수 $t$는 $t(x) = s(x) - f_0(x)$이다. (ii)의 조건이 $M$으로 성립하므로 $N = M + 1$로 두면 $m \ge N$에서 $|F_m(x) - t(x)| = |G_m(x) - s(x)| < \varepsilon$이고, (2)에 의해 $(f_n)_{n \ge 1}$의 함수항 급수는 $t$로 고르게 수렴한다.

**7의 증명.** $x \in X$이면 값의 수열 $(f_n(x))$는 모든 항이 $(a_n)$의 항과 같으므로 $(a_n)$ 자신이고([[sequence]]), [[finite-sums-of-functions]]의 (1)의 (ii)에 의해 자연수 $m$에서 $F_m(x)$는 $(a_n)$의 $m$번째 부분합 $s_m$이다. $(a_n)$의 급수가 수렴하고 합이 $A = \sum_{n=1}^{\infty} a_n$이라 하자. 값이 $A$인 사상 $f : X \to \mathbb{R}$를 [[recursion-theorem]]의 (1)로 두면, $\varepsilon > 0$에 대하여 $(s_m)$이 $A$로 수렴하므로([[limit-of-sequence]]) 자연수 $N$이 있어 $m \ge N$에서 $|s_m - A| < \varepsilon$이고, 이 $N$은 $x$에 따르지 않으므로 $m \ge N$과 모든 $x$에서 $|F_m(x) - f(x)| = |s_m - A| < \varepsilon$이다. (2)에 의해 함수항 급수는 $f$로 고르게 수렴한다. $X$의 점 $p$가 있고 함수항 급수가 점별 수렴하면, (1)에 의해 $(f_n(p)) = (a_n)$의 급수가 수렴한다. 마지막 문장: 고르게 수렴하면 (2)에 의해 점별 수렴하고, 점별 수렴하면 앞 문장에 의해 $(a_n)$의 급수가 수렴하며, $(a_n)$의 급수가 수렴하면 첫 문장에 의해 고르게 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[항이 상수 사상인 급수]
모든 자연수 $n$과 $x \in X$에서 $f_n(x) = (3^{-1})^n$이라 합시다. [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)에 의해 수열 $\bigl((3^{-1})^n\bigr)$의 급수는 수렴하고 합은 $3^{-1} (1 - 3^{-1})^{-1} = 2^{-1}$이므로, (7)에 의해 함수항 급수는 모든 점에서 값이 $2^{-1}$인 사상으로 고르게 수렴합니다. 같은 항목의 (6)의 (iii)에 의해 꼬리의 합은 모든 점에서
$$
\begin{aligned}
\sum_{n=m+1}^{\infty} (3^{-1})^n &= (3^{-1})^{m+1} (1 - 3^{-1})^{-1} \\
&= 2^{-1} (3^{-1})^m
\end{aligned}
$$
이고, 이 수는 $x$에 따르지 않습니다. 모든 $f_n$이 영함수인 경우는 $a_n = 0$인 경우이고, 합 함수도 영함수입니다.
:::

:::counterexample[점마다 0 이 아닌 항이 많아야 하나인 급수]
$X = \mathbb{R}$에서 $f_n(x)$를 $x = n$이면 $1$, $x \ne n$이면 $0$으로 정합니다. 실수 $x$를 하나 잡고 [[finite-sums-of-functions|함수의 유한 합]]의 (1)의 (i), 곧 $F_0(x) = 0$과 $F_{m+1}(x) = F_m(x) + f_{m+1}(x)$를 $m$에 대한 귀납법으로 거듭 씁니다.

- $x$가 자연수가 아니면 모든 $n$에서 $f_n(x) = 0$이므로 모든 $m$에서 $F_m(x) = 0$입니다.
- $x = k$가 자연수이면 $n \ne k$에서 $f_n(k) = 0$, $f_k(k) = 1$이므로 $m < k$에서 $F_m(k) = 0$이고 $m \ge k$에서 $F_m(k) = 1$입니다.

어느 경우든 $(F_m(x))$의 $K$-꼬리($K = k$ 또는 $K = 1$)는 상수 수열이므로 [[basic-limits]]의 (1)과 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $(F_m(x))$는 수렴합니다. 따라서 함수항 급수는 점별 수렴하고, 합 함수 $s$는 자연수에서 $1$, 그 밖에서 $0$입니다.

그러나 고르게 수렴하지는 않습니다. 모든 자연수 $m$에서 $x = m + 1$을 넣으면 $s(m + 1) = 1$이고 $F_m(m + 1) = 0$이므로 $|F_m(m + 1) - s(m + 1)| = 1$입니다. 따라서 $\varepsilon = 1$에 대해 어떤 자연수 $N$을 잡아도 $m = N$, $x = N + 1$에서 (2)의 부등식이 깨지고, 함수항 급수는 $s$로 고르게 수렴하지 않습니다. (2)에 의해 고르게 수렴한다면 그 극한은 합 함수 $s$여야 하므로, 어떤 사상으로도 고르게 수렴하지 않습니다. (3)으로 말하면 꼬리의 합 $\sum_{n=m+1}^{\infty} f_n(m + 1)$이 모든 $m$에서 $1$입니다.
:::

## 확인 질문

:::check[$X$가 원소 하나 $p$만으로 이루어진 집합이면, 함수항 급수가 고르게 수렴한다는 것은 무슨 뜻인가?]
(2)의 "모든 점 $x$에서"는 $x = p$ 하나에 대한 조건이므로 고른 수렴과 점별 수렴이 같아지고, (1)에 의해 이것은 수열 $(f_n(p))$의 급수가 수렴한다는 것입니다. 곧 원소 하나인 집합 위의 함수항 급수는 수의 급수와 같습니다.
:::

:::check[$f_1 = g$이고 $n \ge 2$에서 $f_n$이 영함수이면, 함수항 급수는 어디로 어떻게 수렴하는가?]
[[finite-sums-of-functions|함수의 유한 합]]의 (1)의 (i)에 의해 $F_1 = f_1 = g$이고, $m \ge 1$이면 모든 $x$에서 $F_{m+1}(x) = F_m(x) + 0 = F_m(x)$이므로 $m$에 대한 귀납법으로 모든 자연수 $m$에서 $F_m = g$입니다. 그러면 (2)의 조건이 $N = 1$로 모든 $\varepsilon$에 대해 성립하므로 함수항 급수는 $g$로 고르게 수렴하고 합 함수는 $g$입니다.
:::
