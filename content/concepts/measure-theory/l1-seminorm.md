---
title: L¹ 반노름과 L¹ 수렴
title_en: The L¹ Seminorm and L¹ Convergence
aliases: [L¹ 반노름, L1 반노름, L¹ 수렴, 평균 수렴, L¹ 코시 열, 𝓛¹, L1 seminorm, convergence in L1, convergence in mean, Cauchy sequence in L1]
kind: definition
field: measure-theory
msc: ["28A25", "46E30"]
level: undergrad
summary: 측도공간 위의 μ-적분가능한 실숫값 함수 전체의 집합 𝓛¹(μ) 위에 절댓값의 적분으로 L¹ 반노름을 정의하고, L¹ 수렴과 L¹ 코시 열을 정의한 뒤, 반노름의 세 성질과 역삼각부등식, 반노름이 0 인 것과 μ-거의 어디서나 0 인 것이 같다는 것, L¹ 수렴의 극한이 μ-거의 어디서나 하나로 정해진다는 것, 적분과 반노름의 수렴, 셈측도에서 반노름이 절댓값의 급수의 합이라는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, power-set, measurable-function, indicator-function, finite-set, number-of-elements-is-unique, extended-nonnegative-reals, extended-measurable-function, measure, measure-examples, measure-zero-and-almost-everywhere, integral-of-nonnegative-measurable-function, integral-with-respect-to-counting-measure, markov-inequality-and-null-integral, series-and-partial-sums, sum-of-a-series, absolute-convergence, integrable-function-for-a-measure, linearity-of-the-measure-integral]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 6.4절 Exercises, Exercise 6.3 (p.185); 7.1절 Definitions and basic properties, Lᵖ 의 정의와 (7.1) (p.195–196), Theorem 7.3, Proposition 7.4 (p.198); 7.2절 Hölder-Riesz and Minkowski inequalities, Definition 7.8, Theorem 7.9 과 그 뒤 문단 (p.204), Definition 7.10 (p.205); 7.3절 The spaces Lp, Example 7.15 (p.207), (7.12)–(7.14) 와 Remark 7.16 (p.207–208), Corollary 7.21 (p.212); 8.1절 Definitions and examples, Definition 8.7 (p.227), Theorem 8.9 의 증명과 Example 8.10 의 증명 (p.228); 8.2절 Riesz–Weyl Theorem, Proposition 8.17 (p.237); 8.5절 Exercises, Exercise 8.7 (p.249), Exercise 8.15 (p.250), Exercise 8.21 (p.251), Exercise 8.25 (p.252–253)
    checked: original
    note: "출처 7.1절(p.195)은 p ∈ (0, ∞) 에서 Lᵖ(X, S, µ) 를 |f|ᵖ 이 적분가능한 가측함수 f 전체로 정의하고, p = 1 이면 앞 장의 L(X, S, µ) 와 같다고 적는다. (7.1)(p.196)은 |f|_p 를 (∫_X |f|ᵖ dµ)^{1/p} 로 정의한다. 이 항목의 𝓛¹(μ) 와 ‖f‖₁ 은 p = 1 인 이 집합과 함수이다. 출처는 이 함수를 막대 하나에 첨자를 붙인 |f|_p 로 쓰고, 동치류 위의 노름을 ∥[f]_µ∥_p 로 쓴다(7.3절 (7.14), p.208). 이 항목은 동치류를 쓰지 않으므로(지휘자 결정) 함수 위의 것을 ‖f‖₁ 로 썼다. 출처는 7.3절(p.207–208)에서 f ∼_µ g ⇔ f = g µ a.e. 로 동치관계 (7.12)를 두고 Lᵖ 을 그 동치류의 집합 (7.13)으로 정의하며, Remark 7.16(p.208)에서 함수를 그 동치류와 같이 본다고 적는다. 이 강의는 이 동일시를 하지 않고 함수와 함수열로 진술한다. 출처 Definition 7.8(p.204)은 벡터공간 위의 반노름을 (SN1)–(SN3) 으로 정의하고, Theorem 7.9(p.204)는 Lᵖ(X, S, µ) 가 |·|_p 로 반노름 공간이라고 진술한다. 이 항목은 반노름 일반을 정의하지 않고 (1)의 (ii)–(iv)로 그 세 성질을 증명했다. 직관의 '출처는 이 양이 노름의 조건 가운데 이것을 만족하지 않는다고 적고'는 출처 7장 첫머리(p.195, 'the seminorm defining them does not satisfy all the properties of a norm')와 Example 7.15 뒤 문단(p.207, (N1)이 성립하지 않아 노름이 될 수 없다)의 내용이다. (1)의 (i)은 출처 Theorem 7.3(p.198)의 p = 1 인 경우와 같은 사실이다. (2)는 출처 Proposition 7.4(p.198)의 p = 1 인 경우이고, 출처의 증명도 Corollary 6.8 로 ∫|f| dµ = 0 과 |f| = 0 µ a.e. 를 잇는다. 이 항목은 마르코프 부등식과 적분이 0 인 함수의 (3)으로 잇는다. 출처 Exercise 6.3(p.185)은 f = 0 µ a.e., 모든 A 에서 ∫_A f dµ = 0, ∫_X |f| dµ = 0 이 서로 같다는 것을 보이라는 문제이고, 그 첫째와 셋째의 동치가 (2)의 (i)과 같은 사실이다. 'L¹ 수렴'은 출처 7장의 표기 'f_k → f in Lᵖ'(Theorem 7.20 의 증명, p.211)에 해당하고, 출처 Definition 8.7(p.227)은 같은 수렴을 'converges in mean p' 라 부른다. 'L¹ 코시 열'은 출처가 노름 공간의 코시 열(Lemma 7.17, p.209)로 쓰는 것을 반노름으로 적은 것이다. 출처 Example 8.10 의 증명(p.228)은 Lᵖ 수렴하는 열이 코시 열이라는 것을 쓴다(이 사이트에서는 L¹ 코시 열의 빠르게 수렴하는 부분수열 항목의 (1)). (3)의 (i)은 출처 Corollary 7.21 (a)의 증명(p.212)이 두 극한 f 와 f̃ 에서 f = f̃ 라고 결론짓는 곳에 쓰이는 사실이고, 출처 Proposition 8.17 (a)(p.237)는 같은 꼴을 측도 수렴에 대해 증명한다. (5)의 (i)은 출처 7.2절 Theorem 7.9 뒤 문단(p.204)이 Example 5.15 와 Exercise 6.12 에서 Lᵖ(ℕ, P(ℕ), µ♯) = {f : Σ|f(k)|ᵖ < +∞} 를 끌어내는 것의 p = 1 인 경우이고, 출처 Definition 7.10(p.205)은 그 집합을 수열의 공간 ℓᵖ(ℝ) 로 부른다. (5)의 (ii)에 쓰는 '셈측도의 측도가 0 인 부분집합은 공집합뿐'은 출처 p.205 첫 문단에도 있다. 예시 '디랙 측도에서 반노름이 0 인 함수와 여러 극한'의 앞부분(공집합이 아닌 측도가 0 인 집합의 지시함수는 반노름이 0 이다)은 출처 Example 7.15(p.207)와 같은 발상이다. 반례 '고르게 0 으로 가고 적분도 0 이지만 L¹ 수렴하지 않는 열'은 출처 Exercise 8.7(p.249, 르베그 측도 위의 k^{−1/p}χ_{(0,k)} 가 고르게 0 으로 가지만 평균 p 수렴하지 않는다)과 같은 발상이고, 출처 Exercise 8.25 (b)(p.253)가 참·거짓을 묻는 '고른 수렴은 평균 p 수렴을 준다'의 반례가 된다. 확인 질문 '가중 셈측도 μ_x 에서 L¹ 수렴하면 점마다 수렴하는가?'의 첫 부등식은 출처 Theorem 8.9 의 증명(p.228)이 쓰는 µ(A_k(ξ))ξᵖ ≤ ∥f_k − f∥ᵖ_p 와 같은 꼴(마르코프 부등식)이다. 출처 Exercise 8.15(p.250)는 네 가지 수렴에서 γf_k, f_k + g_k, |f_k| 등의 수렴을 보이라는 문제이고, 이 항목은 그것을 싣지 않았다. 출처 Exercise 8.21(p.251)은 셈측도에서 측도 수렴과 고른 수렴이 같음을 보이라는 문제로, (5)의 (iii)과 같은 대상(셈측도)에서 수렴의 종류를 비교한다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(첨자열 k_j = K(j) + j 가 가장 작은 번호로 정해지는지, 셈측도 판의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간은 [[measure|측도와 측도공간]]의 것이고, 측도가 0 인 집합과 $\mu$-거의 어디서나는 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이다. $X$ 위의 실숫값 함수와 그 연산 $f + g$, $f - g$, $cf$, $|f|$, 상수함수와 $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, $X$ 위의 실숫값 함수열은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. $\mu$-적분가능과 적분 $\int f\,d\mu$, $\int_A f\,d\mu$는 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 것이고, 0 이상인 가측함수의 적분은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이다. 수열과 그 수렴은 [[sequence|수열]]과 [[limit-of-sequence|수열의 극한]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이다.

**$\mathcal{L}^1(\mu)$.** $X$ 위의 실숫값 함수 가운데 $\mu$-적분가능한 것 전체의 집합을 $\mathcal{L}^1(X, \mathcal{M}, \mu)$로 쓰고, 줄여서 $\mathcal{L}^1(\mu)$로 쓴다. 모든 항이 $\mathcal{L}^1(\mu)$의 원소인 $X$ 위의 실숫값 함수열을 **$\mathcal{L}^1(\mu)$의 함수열**이라 한다.

**L¹ 반노름.** $f \in \mathcal{L}^1(\mu)$이면 $|f|$는 모든 값이 $0$ 이상인 가측함수이므로
$$
\lVert f \rVert_1 = \int |f|\,d\mu
$$
가 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻으로 정해진다. 아래 (1)의 (ii)에 의해 이것은 $0$ 이상인 실수이고, [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 뜻으로 읽은 $|f|$의 적분과 같다. 함수 $\lVert \cdot \rVert_1 : \mathcal{L}^1(\mu) \to \mathbb{R}$를 $\mu$에 대한 **L¹ 반노름**(L¹ seminorm)이라 한다. 기호에 아래 첨자 $1$을 붙여, 선형대수 3 강의의 내적이 정하는 노름 $\lVert x \rVert$와 구별한다.

**L¹ 수렴.** $(f_n)$이 $\mathcal{L}^1(\mu)$의 함수열이고 $f \in \mathcal{L}^1(\mu)$일 때, $(f_n)$이 $f$로 **L¹ 수렴한다**(converges to $f$ in L¹)는 것은 정확히 $n$번째 항이 $\lVert f_n - f \rVert_1$인 실수열이 $0$으로 수렴할 때이다(아래 (1)의 (i)에 의해 $f_n - f \in \mathcal{L}^1(\mu)$이다).

**L¹ 코시 열.** $\mathcal{L}^1(\mu)$의 함수열 $(f_n)$이 **L¹ 코시 열**(Cauchy sequence in L¹)인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이고 $k \ge M$인 모든 자연수 $n$, $k$에서 $\lVert f_n - f_k \rVert_1 < \varepsilon$일 때이다.

다음이 성립한다. 아래에서 $f$, $g$, $h$는 $\mathcal{L}^1(\mu)$의 원소이고, $c$는 실수이며, $A$는 $\mathcal{M}$의 원소이다.

1. (반노름의 성질)
   - (i) 값이 $0$인 상수함수는 $\mathcal{L}^1(\mu)$의 원소이고, $f + g$, $f - g$, $cf$도 $\mathcal{L}^1(\mu)$의 원소이다.
   - (ii) $\lVert f \rVert_1$은 실수이고 $0 \le \lVert f \rVert_1$이다. $|f|$는 $\mu$-적분가능하고, $\lVert f \rVert_1$은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 뜻의 $\int |f|\,d\mu$와 같다.
   - (iii) $\lVert cf \rVert_1 = |c|\,\lVert f \rVert_1$이다. 특히 $\lVert f - g \rVert_1 = \lVert g - f \rVert_1$이다.
   - (iv) (삼각부등식) $\lVert f + g \rVert_1 \le \lVert f \rVert_1 + \lVert g \rVert_1$이고, $\lVert f - h \rVert_1 \le \lVert f - g \rVert_1 + \lVert g - h \rVert_1$이다.
   - (v) (역삼각부등식) $\bigl|\,\lVert f \rVert_1 - \lVert g \rVert_1\bigr| \le \lVert f - g \rVert_1$이다.
   - (vi) (적분의 차) $\left|\int_A f\,d\mu - \int_A g\,d\mu\right| \le \lVert f - g \rVert_1$이다.
2. (반노름이 $0$인 함수)
   - (i) $\lVert f \rVert_1 = 0$인 것은 정확히 $f = 0$이 $\mu$-거의 어디서나 성립할 때이다.
   - (ii) $\lVert f - g \rVert_1 = 0$인 것은 정확히 $f = g$가 $\mu$-거의 어디서나 성립할 때이다.
   - (iii) $u$가 $X$ 위의 가측인 실숫값 함수이고 $f = u$가 $\mu$-거의 어디서나 성립하면 $u \in \mathcal{L}^1(\mu)$이고 $\lVert f - u \rVert_1 = 0$이다.
3. (L¹ 수렴의 극한) $(f_n)$이 $\mathcal{L}^1(\mu)$의 함수열이라 하자.
   - (i) $(f_n)$이 $f$로 L¹ 수렴하고 $g$로도 L¹ 수렴하면 $f = g$가 $\mu$-거의 어디서나 성립한다.
   - (ii) $(f_n)$이 $f$로 L¹ 수렴하고, $u$가 $X$ 위의 가측인 실숫값 함수로서 $f = u$가 $\mu$-거의 어디서나 성립하면, $u \in \mathcal{L}^1(\mu)$이고 $(f_n)$은 $u$로 L¹ 수렴한다.
4. (적분과 반노름의 수렴) $(f_n)$이 $\mathcal{L}^1(\mu)$의 함수열이고 $f$로 L¹ 수렴하면, 모든 $A \in \mathcal{M}$에서 $n$번째 항이 $\int_A f_n\,d\mu$인 실수열은 $\int_A f\,d\mu$로 수렴하고, $n$번째 항이 $\lVert f_n \rVert_1$인 실수열은 $\lVert f \rVert_1$로 수렴한다. 특히 $\lim_{n \to \infty} \int f_n\,d\mu = \int f\,d\mu$이다.
5. (셈측도) $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu = \mu^{\sharp}$가 [[measure-examples|측도의 예]]의 셈측도라 하자. 급수의 수렴, 합의 기호 $\sum_{n=1}^{\infty}$, 절대수렴은 [[series-and-partial-sums|급수와 부분합]], [[sum-of-a-series|급수의 합의 기호]], [[absolute-convergence|절대수렴]]의 것이다.
   - (i) $\mathbb{N}$ 위의 실숫값 함수 $f$가 $\mathcal{L}^1(\mu^{\sharp})$의 원소인 것은 정확히 $n$번째 항이 $f(n)$인 수열의 급수가 절대수렴할 때이고, 이때 $\lVert f \rVert_1 = \sum_{n=1}^{\infty} |f(n)|$이다.
   - (ii) $f \in \mathcal{L}^1(\mu^{\sharp})$이면, $\lVert f \rVert_1 = 0$인 것은 정확히 모든 자연수 $m$에서 $f(m) = 0$일 때이다.
   - (iii) $f \in \mathcal{L}^1(\mu^{\sharp})$이면 모든 자연수 $m$에서 $|f(m)| \le \lVert f \rVert_1$이다. 따라서 $\mathcal{L}^1(\mu^{\sharp})$의 함수열 $(f_n)$이 $f$로 L¹ 수렴하면, 모든 자연수 $m$에서 실수열 $(f_n(m))$은 $f(m)$으로 수렴한다.
:::

:::english
Measure spaces are as in the entry on measures, and sets of measure zero and $\mu$-almost everywhere are as in the entry on sets of measure zero. Real-valued functions on $X$ and the operations $f + g$, $f - g$, $cf$, $|f|$, constant functions and $\mathcal{M}$-measurability are as in the entry on measurable functions, and sequences of real-valued functions on $X$ are as in the entry on measurable functions with values in $[0, \infty]$. $\mu$-integrability and the integrals $\int f\,d\mu$, $\int_A f\,d\mu$ are as in the entry on $\mu$-integrable functions, and integrals of nonnegative measurable functions are as in the entry on such integrals. Sequences and their convergence are as in the entries on sequences and on limits of sequences. Below, $(X, \mathcal{M}, \mu)$ is a measure space.

**$\mathcal{L}^1(\mu)$.** The set of all $\mu$-integrable real-valued functions on $X$ is denoted $\mathcal{L}^1(X, \mathcal{M}, \mu)$, or $\mathcal{L}^1(\mu)$ for short. A sequence of real-valued functions on $X$ all of whose terms belong to $\mathcal{L}^1(\mu)$ is called a **sequence in $\mathcal{L}^1(\mu)$**.

**The L¹ seminorm.** If $f \in \mathcal{L}^1(\mu)$, then $|f|$ is a measurable function all of whose values are at least $0$, so
$$
\lVert f \rVert_1 = \int |f|\,d\mu
$$
is defined in the sense of integrals of nonnegative measurable functions. By (1)(ii) below it is a real number at least $0$, and it equals the integral of $|f|$ read in the sense of $\mu$-integrable functions. The function $\lVert \cdot \rVert_1 : \mathcal{L}^1(\mu) \to \mathbb{R}$ is called the **L¹ seminorm** with respect to $\mu$. The subscript $1$ distinguishes it from the norm $\lVert x \rVert$ determined by an inner product in the course Linear Algebra 3.

**L¹ convergence.** If $(f_n)$ is a sequence in $\mathcal{L}^1(\mu)$ and $f \in \mathcal{L}^1(\mu)$, then $(f_n)$ **converges to $f$ in L¹** exactly when the real sequence whose $n$-th term is $\lVert f_n - f \rVert_1$ converges to $0$ (by (1)(i) below, $f_n - f \in \mathcal{L}^1(\mu)$).

**L¹-Cauchy sequences.** A sequence $(f_n)$ in $\mathcal{L}^1(\mu)$ is a **Cauchy sequence in L¹** exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $\lVert f_n - f_k \rVert_1 < \varepsilon$ for all natural numbers $n$, $k$ with $n \ge M$ and $k \ge M$.

The following hold. Below, $f$, $g$, $h$ are elements of $\mathcal{L}^1(\mu)$, $c$ is a real number, and $A$ is an element of $\mathcal{M}$.

1. (Properties of the seminorm)
   - (i) The constant function with value $0$ belongs to $\mathcal{L}^1(\mu)$, and so do $f + g$, $f - g$ and $cf$.
   - (ii) $\lVert f \rVert_1$ is a real number and $0 \le \lVert f \rVert_1$. The function $|f|$ is $\mu$-integrable, and $\lVert f \rVert_1$ equals $\int |f|\,d\mu$ in the sense of $\mu$-integrable functions.
   - (iii) $\lVert cf \rVert_1 = |c|\,\lVert f \rVert_1$. In particular $\lVert f - g \rVert_1 = \lVert g - f \rVert_1$.
   - (iv) (Triangle inequality) $\lVert f + g \rVert_1 \le \lVert f \rVert_1 + \lVert g \rVert_1$ and $\lVert f - h \rVert_1 \le \lVert f - g \rVert_1 + \lVert g - h \rVert_1$.
   - (v) (Reverse triangle inequality) $\bigl|\,\lVert f \rVert_1 - \lVert g \rVert_1\bigr| \le \lVert f - g \rVert_1$.
   - (vi) (Difference of integrals) $\left|\int_A f\,d\mu - \int_A g\,d\mu\right| \le \lVert f - g \rVert_1$.
2. (Functions with seminorm $0$)
   - (i) $\lVert f \rVert_1 = 0$ exactly when $f = 0$ holds $\mu$-almost everywhere.
   - (ii) $\lVert f - g \rVert_1 = 0$ exactly when $f = g$ holds $\mu$-almost everywhere.
   - (iii) If $u$ is a measurable real-valued function on $X$ and $f = u$ holds $\mu$-almost everywhere, then $u \in \mathcal{L}^1(\mu)$ and $\lVert f - u \rVert_1 = 0$.
3. (Limits in L¹) Let $(f_n)$ be a sequence in $\mathcal{L}^1(\mu)$.
   - (i) If $(f_n)$ converges in L¹ to $f$ and also to $g$, then $f = g$ holds $\mu$-almost everywhere.
   - (ii) If $(f_n)$ converges in L¹ to $f$ and $u$ is a measurable real-valued function on $X$ with $f = u$ $\mu$-almost everywhere, then $u \in \mathcal{L}^1(\mu)$ and $(f_n)$ converges in L¹ to $u$.
4. (Convergence of integrals and of seminorms) If $(f_n)$ is a sequence in $\mathcal{L}^1(\mu)$ converging in L¹ to $f$, then for every $A \in \mathcal{M}$ the real sequence whose $n$-th term is $\int_A f_n\,d\mu$ converges to $\int_A f\,d\mu$, and the real sequence whose $n$-th term is $\lVert f_n \rVert_1$ converges to $\lVert f \rVert_1$. In particular $\lim_{n \to \infty} \int f_n\,d\mu = \int f\,d\mu$.
5. (Counting measure) Let $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, and let $\mu = \mu^{\sharp}$ be the counting measure of the entry on examples of measures. Convergence of series, the sum notation $\sum_{n=1}^{\infty}$ and absolute convergence are as in the entries on series and partial sums, on the notation for sums of series and on absolute convergence.
   - (i) A real-valued function $f$ on $\mathbb{N}$ belongs to $\mathcal{L}^1(\mu^{\sharp})$ exactly when the series of the sequence whose $n$-th term is $f(n)$ converges absolutely, and in that case $\lVert f \rVert_1 = \sum_{n=1}^{\infty} |f(n)|$.
   - (ii) If $f \in \mathcal{L}^1(\mu^{\sharp})$, then $\lVert f \rVert_1 = 0$ exactly when $f(m) = 0$ for every natural number $m$.
   - (iii) If $f \in \mathcal{L}^1(\mu^{\sharp})$, then $|f(m)| \le \lVert f \rVert_1$ for every natural number $m$. Hence if a sequence $(f_n)$ in $\mathcal{L}^1(\mu^{\sharp})$ converges in L¹ to $f$, then for every natural number $m$ the real sequence $(f_n(m))$ converges to $f(m)$.
:::

## 직관

두 함수가 얼마나 다른지를 재는 방법은 여럿입니다. 가장 큰 차이를 볼 수도 있고, 점마다 차이를 볼 수도 있습니다. L¹ 반노름은 두 그래프 사이에 낀 넓이, 곧 차의 절댓값을 측도로 모두 더한 양 $\lVert f - g \rVert_1 = \int |f - g|\,d\mu$로 잽니다. 두 그림이 얼마나 다른지를 "다시 칠해야 하는 물감의 양"으로 재는 것과 비슷합니다. 비유의 "물감의 양"이 적분이고, 칠할 곳마다 차이 $|f(x) - g(x)|$만큼, 그 곳의 측도만큼 물감이 든다는 것이 $\int |f - g|\,d\mu$입니다.

이 재는 방법은 측도가 0 인 집합 위의 차이를 보지 못합니다. 측도가 0 인 곳은 물감이 들지 않는 곳이기 때문입니다. 그래서 $f \ne g$인데 $\lVert f - g \rVert_1 = 0$일 수 있습니다. 노름이라면 길이가 $0$인 것은 영벡터뿐이어야 하는데, 여기서는 (2)가 말하듯 $\mu$-거의 어디서나 $0$인 함수가 모두 반노름이 $0$입니다. 출처는 이 양이 노름의 조건 가운데 이것을 만족하지 않는다고 적고 반노름(seminorm)이라 부릅니다. 같은 까닭으로 L¹ 수렴의 극한은 하나로 정해지지 않을 수 있고, 극한을 측도가 0 인 집합 위에서 바꾼 가측함수도 모두 극한입니다((3)의 (ii)). 대신 극한들은 서로 $\mu$-거의 어디서나 같습니다((3)의 (i)).

L¹ 수렴과 점마다의 수렴은 서로 다른 것을 봅니다. 아래 반례에서는 모든 점에서 값이 고르게 $0$으로 가는데 넓이가 퍼져 남아서 L¹ 수렴하지 않습니다. 아래 예시에서는 측도가 0 인 점에서 값이 번호와 함께 커져도 L¹ 수렴합니다. 셈측도에서는 모든 점의 측도가 $1$이므로 (5)의 (iii)처럼 L¹ 수렴이 점마다의 수렴을 줍니다. 한편 (4)는 L¹ 수렴하면 적분도 수렴한다는 것이고, 그 근거는 적분의 차가 반노름으로 막힌다는 (1)의 (vi)입니다.

## 성질의 증명

:::proof
[[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 성질은 "선형성 항목의 (n)"으로, [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 성질은 "$[0, \infty]$의 (n)"으로 인용한다. 함수끼리의 등식과 부등식은 모든 점에서의 값의 등식과 부등식이다. 두 함수가 모든 점에서 같은 값을 가지면 같은 함수이다.

**음이 아닌 실수열이 $0$으로 수렴하는 것.** (가) 모든 항이 $0$ 이상인 실수열 $(a_n)$에서 $|a_n - 0| = a_n$이므로([[absolute-value]]의 (1)), [[limit-of-sequence|수열의 극한]]의 정의에 의해 $(a_n)$이 $0$으로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이면 $a_n < \varepsilon$일 때이다. (나) 따라서 $(a_n)$이 $0$으로 수렴하고, 실수열 $(b_n)$과 실수 $L$이 모든 $n$에서 $|b_n - L| \le a_n$을 만족하면 $(b_n)$은 $L$로 수렴한다. 양의 실수 $\varepsilon$에 (가)의 $M$을 잡으면 $n \ge M$에서 $|b_n - L| \le a_n < \varepsilon$이기 때문이다([[order-properties-of-reals]]의 (1)의 (v)).

**(1)** (i) 적분가능성 항목의 (6)의 (iii)에 의해 값이 $0$인 상수함수는 $\mu$-적분가능하다. 선형성 항목의 (1)과 (2)에 의해 $cf$, $f + g$, $f - g$는 $\mu$-적분가능하다.

(ii) $f$가 가측이므로 [[measurable-function|가측함수]]의 (5)에 의해 $|f|$는 가측이고 모든 값이 $0$ 이상이다. 적분가능성 항목의 (3)의 (i)에 의해 $|f|$는 $\mu$-적분가능하고, 같은 항목의 (2)에 의해 $|f|$의 두 뜻의 적분은 같으며, 같은 항목의 정의에 의해 $\lVert f \rVert_1 = \int |f|\,d\mu < \infty$이다. $[0, \infty]$의 (2)의 (iv)에 의해 $\lVert f \rVert_1$은 실수이고, $[0, \infty] = [0, \infty) \cup \{\infty\}$이며 $[0, \infty]$의 (1)의 (ii)에 의해 $\infty$는 실수가 아니므로 $\lVert f \rVert_1$은 $[0, \infty)$의 원소, 곧 $0$ 이상인 실수이다. 아래에서 $\lVert f \rVert_1$은 늘 이 실수, 곧 $\mu$-적분가능한 함수 $|f|$의 적분으로 읽는다.

(iii) [[absolute-value]]의 (4)에 의해 모든 $x$에서 $|cf(x)| = |c|\,|f(x)|$이므로 $|cf| = |c|\,|f|$이다. (ii)에 의해 $|f|$는 $\mu$-적분가능하므로 선형성 항목의 (1)에 의해 $\lVert cf \rVert_1 = \int |c|\,|f|\,d\mu = |c| \int |f|\,d\mu = |c|\,\lVert f \rVert_1$이다. $g - f = (-1)(f - g)$이고 $|-1| = 1$이므로([[absolute-value]]의 (3)) $\lVert g - f \rVert_1 = \lVert f - g \rVert_1$이다.

(iv) [[triangle-inequality|삼각부등식]]의 (1)에 의해 모든 $x$에서 $|f(x) + g(x)| \le |f(x)| + |g(x)|$이다. (i)과 (ii)에 의해 $|f + g|$와 $|f|$, $|g|$는 $\mu$-적분가능하고, 선형성 항목의 (2)에 의해 $|f| + |g|$도 그렇다. 선형성 항목의 (4)와 (2)에 의해
$$
\begin{aligned}
\lVert f + g \rVert_1 &\le \int (|f| + |g|)\,d\mu \\
&= \lVert f \rVert_1 + \lVert g \rVert_1
\end{aligned}
$$
이다. 모든 $x$에서 $(f(x) - g(x)) + (g(x) - h(x)) = f(x) - h(x)$이므로 $(f - g) + (g - h) = f - h$이고, (i)에 의해 $f - g$, $g - h$가 $\mathcal{L}^1(\mu)$의 원소이므로 방금 보인 부등식을 이 둘에 쓰면 둘째 부등식이 나온다.

(v) $f = (f - g) + g$이므로 (iv)에 의해 $\lVert f \rVert_1 \le \lVert f - g \rVert_1 + \lVert g \rVert_1$, 곧 $\lVert f \rVert_1 - \lVert g \rVert_1 \le \lVert f - g \rVert_1$이다([[order-properties-of-reals]]의 (2)의 (ii)). $f$와 $g$를 바꾸어 같은 일을 하고 (iii)을 쓰면 $\lVert g \rVert_1 - \lVert f \rVert_1 \le \lVert f - g \rVert_1$, 곧 $-\lVert f - g \rVert_1 \le \lVert f \rVert_1 - \lVert g \rVert_1$이다([[order-properties-of-reals]]의 (3)의 (iii)). [[absolute-value]]의 (7)에 의해 결론이 나온다.

(vi) (i)에 의해 $f - g$는 $\mu$-적분가능하고, 선형성 항목의 (5)에 의해 $\left|\int_A f\,d\mu - \int_A g\,d\mu\right| \le \int_A |f - g|\,d\mu$이다. $w = |f - g|$로 두면 적분가능성 항목의 (5)의 (i)에 의해 $\int_A w\,d\mu = \int w\chi_A\,d\mu$이다. [[indicator-function|지시함수]]의 (1)에 의해 $\chi_A(x)$는 $0$이거나 $1$이므로 모든 $x$에서 $w(x)\chi_A(x) \le w(x)$이고($0 \le w(x)$), 선형성 항목의 (4)에 의해 $\int w\chi_A\,d\mu \le \int w\,d\mu = \lVert f - g \rVert_1$이다. 두 부등식을 이으면 결론이다.

**(2)** (i) (1)의 (ii)에 의해 $\lVert f \rVert_1$은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻의 $\int |f|\,d\mu$이고 $|f|$는 가측인 $[0, \infty]$ 값 함수이기도 하다(적분가능성 항목의 맨 위의 약속). [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 (3)에 의해 $\int |f|\,d\mu = 0$인 것은 정확히 $|f| = 0$이 $\mu$-거의 어디서나 성립할 때이다. [[absolute-value]]의 (2)에 의해 모든 $x$에서 "$|f(x)| = 0$"과 "$f(x) = 0$"은 서로를 함의하므로, [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (3)의 (iii)을 두 방향으로 쓰면 $|f| = 0$이 $\mu$-거의 어디서나 성립하는 것은 정확히 $f = 0$이 $\mu$-거의 어디서나 성립할 때이다.

(ii) (1)의 (i)에 의해 $f - g \in \mathcal{L}^1(\mu)$이므로 (i)을 $f - g$에 쓴다. 모든 $x$에서 "$f(x) - g(x) = 0$"과 "$f(x) = g(x)$"는 서로를 함의하므로([[real-number-arithmetic]]), 같은 (3)의 (iii)을 두 방향으로 쓰면 결론이다.

(iii) 적분가능성 항목의 (7)에 의해 $u$는 $\mu$-적분가능하므로 $u \in \mathcal{L}^1(\mu)$이고, (ii)에 의해 $\lVert f - u \rVert_1 = 0$이다.

**(3)** (i) (1)의 (iv)와 (iii)에 의해 모든 $n$에서
$$
\begin{aligned}
\lVert f - g \rVert_1 &\le \lVert f - f_n \rVert_1 + \lVert f_n - g \rVert_1 \\
&= \lVert f_n - f \rVert_1 + \lVert f_n - g \rVert_1
\end{aligned}
$$
이다. 양의 실수 $\varepsilon$을 잡자. [[order-properties-of-reals]]의 (8)에 의해 $\tfrac{\varepsilon}{2}$는 양수이므로 (가)에 의해 자연수 $M_1$, $M_2$가 있어 $n \ge M_1$이면 $\lVert f_n - f \rVert_1 < \tfrac{\varepsilon}{2}$, $n \ge M_2$이면 $\lVert f_n - g \rVert_1 < \tfrac{\varepsilon}{2}$이다. [[absolute-value]]의 (10)에 의해 $n = \max\{M_1, M_2\}$는 자연수이고 두 수 이상이므로 $\lVert f - g \rVert_1 < \varepsilon$이다. (1)의 (ii)에 의해 $0 \le \lVert f - g \rVert_1$이고 $\varepsilon$은 아무것이나 잡았으므로 [[order-properties-of-reals]]의 (9)에 의해 $\lVert f - g \rVert_1 = 0$이다. (2)의 (ii)에 의해 $f = g$가 $\mu$-거의 어디서나 성립한다.

(ii) (2)의 (iii)에 의해 $u \in \mathcal{L}^1(\mu)$이고 $\lVert f - u \rVert_1 = 0$이다. (1)의 (iv)에 의해 모든 $n$에서 $0 \le \lVert f_n - u \rVert_1 \le \lVert f_n - f \rVert_1 + \lVert f - u \rVert_1 = \lVert f_n - f \rVert_1$이므로, (나)를 $b_n = \lVert f_n - u \rVert_1$, $L = 0$, $a_n = \lVert f_n - f \rVert_1$로 쓰면($|b_n - 0| = b_n$) $(\lVert f_n - u \rVert_1)$은 $0$으로 수렴한다.

**(4)** $a_n = \lVert f_n - f \rVert_1$은 가정에 의해 $0$으로 수렴하는 $0$ 이상인 실수열이다. (1)의 (vi)에 의해 $\left|\int_A f_n\,d\mu - \int_A f\,d\mu\right| \le a_n$이고, (1)의 (v)에 의해 $\bigl|\,\lVert f_n \rVert_1 - \lVert f \rVert_1\bigr| \le a_n$이다. (나)에 의해 두 실수열은 각각 $\int_A f\,d\mu$와 $\lVert f \rVert_1$로 수렴한다. $A = X$이면 적분가능성 항목의 (5)의 (i)에 의해 $\int_X = \int$이고, [[limit-is-unique|극한의 유일성]]에 의해 극한을 $\lim$으로 쓸 수 있다.

**(5)** (i) 적분가능성 항목의 (9)의 (iii)에 의해 $f \in \mathcal{L}^1(\mu^{\sharp})$인 것은 정확히 $(f(n))$의 급수가 절대수렴할 때, 곧 [[absolute-convergence|절대수렴]]의 정의에 의해 $(|f(n)|)$의 급수가 수렴할 때이다. 이때 $|f|$의 값은 모두 $0$ 이상인 실수이므로 [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (3)에 의해 $\lVert f \rVert_1 = \int |f|\,d\mu^{\sharp}$는 그 급수의 합 $\sum_{n=1}^{\infty} |f(n)|$이다.

(ii) (2)의 (i)에 의해 $\lVert f \rVert_1 = 0$인 것은 정확히 $f = 0$이 $\mu^{\sharp}$-거의 어디서나 성립할 때이고, [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (i)에 의해 그것은 정확히 모든 $m$에서 $f(m) = 0$일 때이다.

(iii) $m$을 자연수라 하고 $q = |f(m)|\chi_{\{m\}}$로 두자. [[measure-examples|측도의 예]]의 (4)의 (i)과 (3)에 의해 $\mu^{\sharp}(\{m\}) = 1$이므로 적분가능성 항목의 (6)의 (i)에 의해 $q$는 $\mu^{\sharp}$-적분가능하고 $\int q\,d\mu^{\sharp} = |f(m)|$이다. 지시함수의 (1)에 의해 $q(m) = |f(m)|$이고 $x \ne m$이면 $q(x) = 0 \le |f(x)|$이므로 모든 점에서 $q \le |f|$이다. 선형성 항목의 (4)에 의해 $|f(m)| \le \int |f|\,d\mu^{\sharp} = \lVert f \rVert_1$이다. $(f_n)$이 $f$로 L¹ 수렴하면 (1)의 (i)에 의해 $f_n - f \in \mathcal{L}^1(\mu^{\sharp})$이므로 방금 보인 것을 $f_n - f$에 쓰면 $|f_n(m) - f(m)| \le \lVert f_n - f \rVert_1$이고, (나)에 의해 $(f_n(m))$은 $f(m)$으로 수렴한다.
:::

## 예시와 반례

:::example[디랙 측도에서 반노름이 0 인 함수와 여러 극한]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 디랙 측도 $\delta_1$을 생각합시다. $\mathbb{N}$ 위의 실숫값 함수 $f$와 실수 $c$에서 $\{f > c\}$는 $\mathbb{N}$의 부분집합이어서 $\mathscr{P}(\mathbb{N})$의 원소이므로, [[measurable-function|가측함수]]의 (2)에 의해 $\mathbb{N}$ 위의 모든 실숫값 함수는 가측입니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (9)의 (i)에 의해 그 함수들은 모두 $\delta_1$-적분가능합니다. 곧 $\mathcal{L}^1(\delta_1)$은 $\mathbb{N}$ 위의 실숫값 함수 전체입니다. [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (6)에 의해 $\lVert f \rVert_1 = \int |f|\,d\delta_1 = |f(1)|$입니다.

$f = \chi_{\mathbb{N} - \{1\}}$은 $2$ 이상인 모든 점에서 값이 $1$이지만 [[indicator-function|지시함수]]의 (1)에 의해 $f(1) = 0$이므로 $\lVert f \rVert_1 = 0$입니다. (2)의 (i)대로 $f = 0$이 $\delta_1$-거의 어디서나 성립합니다. 실제로 [[measure-examples|측도의 예]]의 (2)에 의해 $\delta_1(\mathbb{N} - \{1\}) = 0$입니다.

이번에는 $f_n(m) = m^n$으로 둡시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $f_n(1) = 1^n = 1$이므로, 값이 $1$인 상수함수를 $v$라 하면 $\lVert f_n - v \rVert_1 = |1 - 1| = 0$이고 $(f_n)$은 $v$로 L¹ 수렴합니다. 그런데 $\lVert f_n - \chi_{\{1\}} \rVert_1 = |1 - 1| = 0$이기도 하므로 $(f_n)$은 $\chi_{\{1\}}$로도 L¹ 수렴합니다. 두 극한 $v$와 $\chi_{\{1\}}$은 점 $1$에서만 같지만, (3)의 (i)이 말하는 대로 $\delta_1$-거의 어디서나 같습니다. 점 $2$에서의 값 $f_n(2) = 2^n$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (iv)에 의해 $n$이 커질 때마다 커집니다. 측도가 0 인 점에서의 값은 L¹ 수렴과 상관이 없습니다.
:::

:::counterexample[고르게 0 으로 가고 적분도 0 이지만 L¹ 수렴하지 않는 열]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $P_n = \{1, \dots, n\}$, $Q_n = \{1, \dots, 2n\} - \{1, \dots, n\}$으로 두고
$$
f_n = \tfrac{1}{n}\chi_{P_n} - \tfrac{1}{n}\chi_{Q_n}
$$
이라 합시다. [[finite-set|유한집합]]의 (F2), [[number-of-elements-is-unique|원소의 개수]], [[measure-examples|측도의 예]]의 (4)에 의해 $\mu^{\sharp}(P_n) = n$, $\mu^{\sharp}(\{1, \dots, 2n\}) = 2n$이고, $P_n \subseteq \{1, \dots, 2n\}$이므로 [[measure|측도와 측도공간]]의 (2)의 (i)에 의해 $\mu^{\sharp}(Q_n) = 2n - n = n$입니다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)과 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 (2)에 의해 $f_n$은 $\mu^{\sharp}$-적분가능하고 $\int f_n\,d\mu^{\sharp} = \tfrac{1}{n} \cdot n - \tfrac{1}{n} \cdot n = 0$입니다.

$P_n$과 $Q_n$은 서로소이고 합집합이 $\{1, \dots, 2n\}$이므로, 지시함수의 (1)에 의해 모든 점에서 $|f_n| = \tfrac{1}{n}\chi_{\{1, \dots, 2n\}}$입니다. 그래서 모든 자연수 $m$에서 $|f_n(m)| \le \tfrac{1}{n}$이어서 값들은 고르게 $0$으로 가고, (1)의 (ii)와 μ-적분가능한 함수와 그 적분의 (6)의 (i)에 의해 $\lVert f_n \rVert_1 = \tfrac{1}{n} \cdot 2n = 2$입니다.

$(f_n)$은 어떤 함수로도 L¹ 수렴하지 않습니다. $(f_n)$이 $f \in \mathcal{L}^1(\mu^{\sharp})$로 L¹ 수렴했다면, (5)의 (iii)에 의해 모든 $m$에서 $(f_n(m))$은 $f(m)$으로 수렴합니다. 그런데 $|f_n(m) - 0| \le n^{-1}$이고 [[basic-limits|기본적인 극한]]의 (2)에 의해 $(n^{-1})$은 $0$으로 수렴하므로 $(f_n(m))$은 $0$으로도 수렴하고, [[limit-is-unique|극한의 유일성]]에 의해 $f(m) = 0$입니다. 그러면 $f_n - f = f_n$이어서 $\lVert f_n - f \rVert_1 = 2$이고 $0$으로 가지 않으므로 모순입니다. 이 열에서는 적분이 극한의 적분과 같고(값이 $0$인 상수함수의 적분은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (iii)에 의해 $0$입니다) 값이 고르게 $0$으로 가지만, 반노름 $2$가 점점 많은 점으로 퍼져 남아서 L¹ 수렴하지 않습니다.
:::

## 확인 질문

:::check[$\mu$가 영측도이면 $\mathcal{L}^1(\mu)$와 L¹ 수렴은 어떻게 되는가?]
[[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (iii)에 의해 모든 열린 문장이 $\mu$-거의 어디서나 성립하므로, 가측인 실숫값 함수 $u$는 모두 $\mu$-거의 어디서나 값이 $0$인 상수함수와 같습니다. (1)의 (i)과 (2)의 (iii)에 의해 $u \in \mathcal{L}^1(\mu)$이고, (2)의 (i)에 의해 $\lVert u \rVert_1 = 0$입니다. 곧 $\mathcal{L}^1(\mu)$는 가측인 실숫값 함수 전체이고 반노름은 늘 $0$입니다. 그래서 $\mathcal{L}^1(\mu)$의 함수열 $(f_n)$과 $f \in \mathcal{L}^1(\mu)$에서 $\lVert f_n - f \rVert_1$은 모두 $0$이고, [[basic-limits|기본적인 극한]]의 (1)에 의해 $(f_n)$은 $f$로 L¹ 수렴합니다. 곧 모든 함수열이 모든 함수로 L¹ 수렴합니다. (3)의 (i)과 어긋나지 않는 까닭은 모든 두 함수가 $\mu$-거의 어디서나 같기 때문입니다.
:::

:::check[가중 셈측도 $\mu_x$에서 L¹ 수렴하면 점마다 수렴하는가?]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $(x_n)$이 모든 항이 실수인 $[0, \infty]$의 원소열이라 합시다. 자연수 $m$과 $f \in \mathcal{L}^1(\mu_x)$에서 $u = |f(m)|\chi_{\{m\}}$은 모든 점에서 $|f|$ 이하이므로, [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 (4), [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i), [[measure-examples|측도의 예]]의 (3)과 (1)의 (ii)에 의해 $|f(m)|\,x_m = \int u\,d\mu_x \le \lVert f \rVert_1$입니다. 그래서 $x_m > 0$인 점 $m$에서는 이것을 $f_n - f$에 써서 $|f_n(m) - f(m)| \le x_m^{-1}\lVert f_n - f \rVert_1$을 얻고([[order-properties-of-reals]]의 (6)의 (iv)), $(f_n)$이 $f$로 L¹ 수렴하면 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 오른쪽이 $0$으로 가므로 $(f_n(m))$은 $f(m)$으로 수렴합니다. $x_m = 0$인 점에서는 그렇지 않을 수 있습니다. 그런 $m$에서는 측도의 예의 (3)에 의해 $\mu_x(\{m\}) = 0$입니다. $g_n = n\chi_{\{m\}}$은 [[measurable-function|가측함수]]의 (6)과 (5)에 의해 가측이고, $\{m\}$ 밖의 모든 점에서 $0$이어서 $\mu_x$-거의 어디서나 $0$입니다. (2)의 (iii)과 (i)에 의해 $g_n \in \mathcal{L}^1(\mu_x)$이고 $\lVert g_n \rVert_1 = 0$이므로 $(g_n)$은 값이 $0$인 상수함수로 L¹ 수렴합니다. 그러나 $g_n(m) = n$이므로 [[basic-limits|기본적인 극한]]의 (4)에 의해 $(g_n(m))$은 발산합니다.
:::
