---
title: 르베그 적분가능한 함수와 그 적분
title_en: Lebesgue Integrable Functions and Their Integrals
aliases: [르베그 적분가능, 르베그 적분, 표현, 계단함수의 급수 표현, 번갈아 늘어놓은 열, 미쿠신스키의 정의, Lebesgue integrable function, Lebesgue integral, representation by step functions]
kind: definition
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 계단함수의 열로서 적분의 절댓값의 급수가 수렴하고 절대수렴하는 점마다 급수의 합이 f 의 값인 것을 f 의 표현이라 하고, 표현이 있는 함수를 르베그 적분가능, 표현의 적분의 급수의 합을 르베그 적분이라 한다. 두 열을 번갈아 늘어놓은 표현, 0 이상인 함수의 표현의 적분의 합이 0 이상이라는 것, 적분이 표현에 따라 달라지지 않는다는 것, 계단함수의 두 적분이 같다는 것을 증명한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, even-and-odd, prime-number, interval, real-valued-function, sequence, limit-of-sequence, limit-is-unique, limit-of-sum-and-product, limits-preserve-inequalities, subsequence, monotone-convergence-theorem, tail-of-a-sequence, series-and-partial-sums, absolute-convergence, sum-of-a-series, linearity-of-series, comparison-test, finite-sum-of-reals, pointwise-convergence, riemann-integral, step-function, daniell-condition-for-step-functions]
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "1절 Introduction (p.1); 2절 Definition 2.7 (p.4); 3절 Definition 3.1, Lemma 3.2, Lemma 3.3 (p.5–6), Corollary 3.4 와 그 뒤 문단 (p.6), Corollary 3.5 (p.6–7)"
    checked: original
    note: "출처 1절(p.1)은 ℝ^N 위의 실함수 f 가 르베그 적분가능하다는 것을 'simple function'(이 강의의 계단함수) f_1, f_2, … 의 열이 있어 (A) Σ∫|f_n| < ∞, (B) Σ|f_n(x)| < ∞ 인 모든 x 에서 f(x) = Σf_n(x) 일 때로 정의하고, 이 길이 미쿠신스키의 것이라고 적는다. Definition 2.7(p.4)은 같은 조건을 다니엘 공간 U 에서 적고 f ≃ Σf_n 으로 쓰며, p.5 에서 이것을 f 의 'representation' 이라 부른다. 이 항목은 N = 1 만 다루고, 그 열을 f 의 '표현'이라 부르며 기호 ≃ 를 쓰지 않는다(위상수학 입문에서 위상동형의 기호이다). Definition 3.1(p.5)은 표현이 있는 함수 전체를 U* 로, 적분을 Σ∫f_n 으로 정의한다. 이 항목의 (4)는 Lemma 3.2(p.5)이다. 출처는 두 증가열 (g_n), (h_n) 의 극한(∞ 일 수 있다)을 비교하는 꼴로 적고, 이 항목은 극한에 ∞ 를 쓰지 않으려고 가정을 'max{h(x) − g_n(x), 0} 이 0 으로 간다' 꼴로, h 를 계단함수 하나로 바꾸었다. 증명의 뼈대(h − min{h, g_n} 이 감소하여 0 으로 가므로 다니엘 조건을 쓴다)는 출처와 같다. (5)는 Lemma 3.3(p.5)이다. 출처의 증명(p.6)은 g_n = f_1 + ⋯ + f_p + |f_{p+1}| + ⋯ + |f_{p+n}| 과 h_n = g_n ∧ 0(곧 min{g_n, 0})을 두고 'lim g_n = lim h_n' 이라 적은 뒤 Lemma 3.2 로 lim ∫g_n = lim ∫h_n ≥ 0 을 얻는다. 그런데 h_n = min{g_n, 0} 은 0 이하이므로 ∫h_n ≤ 0 이고, g_n 의 극한이 양수인 점에서 lim g_n = lim h_n 이 성립하지 않는다. h_n = max{g_n, 0} 으로 고치면 두 문장이 모두 성립한다. 이 항목의 증명은 (4)를 h = 영함수로 한 번 쓰며, 출처의 논법을 그렇게 고친 것과 같은 결론을 준다. (6)은 Corollary 3.4(p.6)이고 증명(0 ≃ f_1 − g_1 + f_2 − g_2 + ⋯ 에 Lemma 3.3 을 두 번 쓴다)은 출처와 같다. 출처는 그 번갈아 늘어놓은 열이 표현이라는 것을 따로 보이지 않는다. 이 항목은 그것을 (1)과 (3)으로 증명한다. (7)은 Corollary 3.4 뒤 문단(p.6, 'f ≃ f + 0 + 0 + ⋯')이다. (3)의 상수배와 번갈아 늘어놓기는 Corollary 3.5 의 증명(p.6–7)에 식만 적혀 있는 것이다. 구간 위의 함수를 0 으로 늘여 [a, b] 에서의 르베그 적분가능과 ∫_{[a,b]} 를 정하는 것은 이 강의의 약속이다. 출처의 함수는 X 전체에서 정의된 실함수이다. 예시 '0 근처에서 유계가 아닌 함수'는 출처 p.5 의 Σ 2^{−n}χ_{[n−1,n)} (계단함수가 아닌 함수를 계단함수의 급수로 쓴 예)와 같은 발상이다. 반례 '점마다 수렴하지만 조건 A 를 만족하지 않는 열의 예'는 그 예와 같은 칸 [n − 1, n) 의 지시함수를 계수 1 로 더한 것이다."
  - ref: lebl-basic-analysis
    loc: "5.2.4 소절, Proposition 5.2.10 (p.197)"
    checked: original
    note: "출처 Proposition 5.2.10(p.197)은 리만 적분가능한 함수의 값을 유한 개의 점에서 바꾸어도 리만 적분가능하고 적분이 같다는 것이다. 예시 '한 점에서 값을 바꾼 함수'는 같은 결론(한 점의 값을 바꾸어도 적분이 같다)을 이 항목의 르베그 적분에 대해 보인 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 Lemma 3.3 증명의 ∧ 오식을 원문으로 대조, (7) 의 a < b 경계, 기록의 검색어). 독립 검토 없음."
added: 2026-11-28
---

:::statement
계단함수, 그 적분 $\int_{\mathbb{R}}$, 영함수는 [[step-function|계단함수와 그 적분]]의 것이다. 실함수와 그 합·차·상수배·절댓값, 제한은 [[real-valued-function|실함수와 그 연산]]의 것이고, $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열과 $x$에서의 값의 수열은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이다. 수열과 그 수렴, 부분합 수열, 급수의 수렴과 합, 절대수렴, 합의 기호 $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$은 [[sequence]], [[limit-of-sequence|수열의 극한 항목]], [[series-and-partial-sums]], [[absolute-convergence]], [[sum-of-a-series|급수의 합의 기호]]의 것이다. 두 수의 최대 $\max\{a, b\}$는 [[absolute-value]]의 것이고, 닫힌구간 $[a, b]$($a < b$)는 [[interval]]의 것이다.

**계단함수의 열.** 아래에서 **계단함수의 열** $\Phi = (\varphi_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열로서 모든 자연수 $n$에서 $\varphi_n$이 계단함수인 것이다. 실수 $k$에 대하여 $k\Phi$는 $n$번째 항이 $k\varphi_n$인 계단함수의 열이고, $-\Phi = (-1)\Phi$이다. 계단함수의 열 $\Phi = (\varphi_n)$, $\Psi = (\psi_n)$에 대하여 $\operatorname{alt}(\Phi, \Psi)$는 모든 자연수 $m$에서 $2m - 1$번째 항이 $\varphi_m$이고 $2m$번째 항이 $\psi_m$인 계단함수의 열이다. 이것을 $\Phi$와 $\Psi$를 **번갈아 늘어놓은 열**이라 한다. 실수열 $(a_m)$, $(b_m)$에 대해서도 같은 식으로 번갈아 늘어놓은 수열을 정하고 $\operatorname{alt}\bigl((a_m), (b_m)\bigr)$으로 쓴다. 아래 (1)에 의해 이 열들은 하나씩 정해진다.

**표현.** $f : \mathbb{R} \to \mathbb{R}$라 하자. 계단함수의 열 $\Phi = (\varphi_n)$이 $f$의 **표현**(representation)인 것은 정확히 다음 두 조건이 성립할 때이다.

- (조건 A) $n$번째 항이 $\int_{\mathbb{R}} |\varphi_n|$인 수열의 급수가 수렴한다.
- (조건 B) 실수 $x$에서 $n$번째 항이 $\varphi_n(x)$인 수열의 급수가 절대수렴하면, 그 급수의 합이 $f(x)$이다. 곧 $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$이다.

조건 B는 $n$번째 항이 $\varphi_n(x)$인 수열의 급수가 절대수렴하지 않는 점 $x$에서의 $f(x)$에 대해서는 아무것도 요구하지 않는다.

**르베그 적분가능과 르베그 적분.** $f : \mathbb{R} \to \mathbb{R}$가 **르베그 적분가능**(Lebesgue integrable)인 것은 정확히 $f$의 표현이 있을 때이다. 이때 $f$의 표현 $\Phi = (\varphi_n)$에 대하여 아래 (2)에 의해 $n$번째 항이 $\int_{\mathbb{R}} \varphi_n$인 수열의 급수가 수렴하고, (6)에 의해 그 합은 $f$의 어느 표현으로 구해도 같다. 이 수를 $f$의 **르베그 적분**(Lebesgue integral)이라 하고 $\int_{\mathbb{R}} f$로 쓴다. 곧
$$
\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n
$$
이다. "르베그"는 리만 적분의 "적분가능"과 구별하려고 붙인다. $f$가 계단함수이면 (7)에 의해 $f$는 르베그 적분가능하고 이 $\int_{\mathbb{R}} f$는 [[step-function|계단함수 항목]]의 $\int_{\mathbb{R}} f$와 같은 수이므로, 기호 $\int_{\mathbb{R}}$의 뜻이 둘이 되지 않는다.

**구간 위의 함수.** $a < b$인 실수 $a$, $b$와 $g : [a, b] \to \mathbb{R}$에 대하여, $x \in [a, b]$이면 $\hat{g}(x) = g(x)$이고 $x \notin [a, b]$이면 $\hat{g}(x) = 0$으로 정한 함수 $\hat{g} : \mathbb{R} \to \mathbb{R}$를 $g$를 **$0$으로 늘인 함수**라 한다. $g$가 **$[a, b]$에서 르베그 적분가능**하다는 것은 정확히 $\hat{g}$가 르베그 적분가능할 때이고, 이때 $\int_{[a, b]} g = \int_{\mathbb{R}} \hat{g}$로 쓴다. $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$이면, $h$가 $[a, b]$에서 르베그 적분가능하다는 것은 제한 $h|_{[a, b]}$가 그렇다는 것이고 $\int_{[a, b]} h = \int_{[a, b]} h|_{[a, b]}$이다.

다음이 성립한다. 아래에서 $f, g : \mathbb{R} \to \mathbb{R}$이고, $\Phi = (\varphi_n)$, $\Psi = (\psi_n)$은 계단함수의 열이며, $k$는 실수이다.

1. (번갈아 늘어놓은 수열) 모든 자연수 $n$에 대하여 $n = 2m - 1$이거나 $n = 2m$인 자연수 $m$이 정확히 하나 있고, 두 경우가 함께 성립하지 않는다. $(a_m)$, $(b_m)$이 실수열이고 $(c_n) = \operatorname{alt}\bigl((a_m), (b_m)\bigr)$이며, $(A_m)$, $(B_m)$, $(C_n)$이 각각의 부분합 수열이고 $B_0 = 0$이라 하자.
   - (i) 모든 자연수 $m$에서 $C_{2m} = A_m + B_m$이고 $C_{2m-1} = A_m + B_{m-1}$이다.
   - (ii) $(|c_n|)$의 급수가 수렴하는 것은 정확히 $(|a_m|)$의 급수와 $(|b_m|)$의 급수가 모두 수렴할 때이다. 곧 $(c_n)$의 급수가 절대수렴하는 것은 정확히 $(a_m)$의 급수와 $(b_m)$의 급수가 모두 절대수렴할 때이고, 이때 $\sum_{n=1}^{\infty} |c_n| = \sum_{m=1}^{\infty} |a_m| + \sum_{m=1}^{\infty} |b_m|$이다.
   - (iii) $(a_m)$의 급수와 $(b_m)$의 급수가 수렴하면 $(c_n)$의 급수도 수렴하고 $\sum_{n=1}^{\infty} c_n = \sum_{m=1}^{\infty} a_m + \sum_{m=1}^{\infty} b_m$이다.
2. (적분의 급수) $\Phi$가 $f$의 표현이면 $n$번째 항이 $\int_{\mathbb{R}} \varphi_n$인 수열의 급수는 절대수렴하고
   $$
   \left| \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n \right| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|
   $$
   이다.
3. (상수배와 번갈아 늘어놓기) $\Phi$가 $f$의 표현이고 $\Psi$가 $g$의 표현이라 하자.
   - (i) $k\Phi$는 $kf$의 표현이고 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} k\varphi_n = k \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$이다.
   - (ii) $\operatorname{alt}(\Phi, \Psi)$는 $f + g$의 표현이고, 그 $n$번째 항을 $\theta_n$이라 하면 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \theta_n = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n + \sum_{n=1}^{\infty} \int_{\mathbb{R}} \psi_n$이다. 특히 $\operatorname{alt}(\Phi, -\Psi)$는 $f - g$의 표현이다.
4. (계단함수의 비교) $(g_n)$이 계단함수의 열로서 모든 자연수 $n$과 모든 실수 $x$에서 $g_n(x) \le g_{n+1}(x)$이고, $n$번째 항이 $\int_{\mathbb{R}} g_n$인 수열이 위로 유계라 하자. $h$가 계단함수이고, 모든 실수 $x$에서 $n$번째 항이 $\max\{h(x) - g_n(x), 0\}$인 수열이 $0$으로 수렴하면, $n$번째 항이 $\int_{\mathbb{R}} g_n$인 수열은 수렴하고
   $$
   \int_{\mathbb{R}} h \le \lim_{n \to \infty} \int_{\mathbb{R}} g_n
   $$
   이다.
5. (0 이상인 함수의 표현) $\Phi$가 $f$의 표현이고 모든 실수 $x$에서 $0 \le f(x)$이면 $0 \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$이다.
6. (표현에 따라 달라지지 않는다) $\Phi$와 $\Psi$가 모두 $f$의 표현이면 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \psi_n$이다.
7. (계단함수) $\varphi$가 계단함수이면, 첫째 항이 $\varphi$이고 $n \ge 2$인 항이 모두 영함수인 계단함수의 열은 $\varphi$의 표현이다. 따라서 $\varphi$는 르베그 적분가능하고, 그 르베그 적분은 [[step-function|계단함수 항목]]의 적분 $\int_{\mathbb{R}} \varphi$와 같다. 특히 영함수는 르베그 적분가능하고 그 르베그 적분은 $0$이다.
:::

:::english
Step functions, their integral $\int_{\mathbb{R}}$, and the zero function are as in the entry on step functions. Real-valued functions with their sums, differences, scalar multiples, absolute values, and restrictions are as in the entry on real-valued functions, and sequences of maps from $\mathbb{R}$ to $\mathbb{R}$ with the sequence of values at $x$ are as in the entry on sequences of maps. Sequences and their convergence, sequences of partial sums, convergence and sums of series, absolute convergence, and the notation $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$ are as in the corresponding entries. The maximum $\max\{a, b\}$ of two numbers is as in the entry on absolute value, and the closed interval $[a, b]$ ($a < b$) is as in the entry on intervals.

**Sequences of step functions.** Below, a **sequence of step functions** $\Phi = (\varphi_n)$ is a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ such that $\varphi_n$ is a step function for every natural number $n$. For a real number $k$, $k\Phi$ is the sequence of step functions whose $n$th term is $k\varphi_n$, and $-\Phi = (-1)\Phi$. For sequences of step functions $\Phi = (\varphi_n)$, $\Psi = (\psi_n)$, $\operatorname{alt}(\Phi, \Psi)$ is the sequence of step functions whose $(2m - 1)$th term is $\varphi_m$ and whose $2m$th term is $\psi_m$ for every natural number $m$. It is called the sequence **alternating** $\Phi$ and $\Psi$. For real sequences $(a_m)$, $(b_m)$ we define the alternating sequence by the same formula and write $\operatorname{alt}\bigl((a_m), (b_m)\bigr)$. By (1) below these sequences are well defined.

**Representations.** Let $f : \mathbb{R} \to \mathbb{R}$. A sequence of step functions $\Phi = (\varphi_n)$ is a **representation** of $f$ precisely when the following two conditions hold.

- (Condition A) The series of the sequence whose $n$th term is $\int_{\mathbb{R}} |\varphi_n|$ converges.
- (Condition B) If, at a real number $x$, the series of the sequence whose $n$th term is $\varphi_n(x)$ converges absolutely, then its sum is $f(x)$; that is, $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$.

Condition B requires nothing about $f(x)$ at points $x$ where the series of the sequence whose $n$th term is $\varphi_n(x)$ does not converge absolutely.

**Lebesgue integrability and the Lebesgue integral.** A function $f : \mathbb{R} \to \mathbb{R}$ is **Lebesgue integrable** precisely when $f$ has a representation. In that case, for a representation $\Phi = (\varphi_n)$ of $f$, the series of the sequence whose $n$th term is $\int_{\mathbb{R}} \varphi_n$ converges by (2) below, and by (6) its sum is the same for every representation of $f$. This number is called the **Lebesgue integral** of $f$ and denoted $\int_{\mathbb{R}} f$; that is,
$$
\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n.
$$
The word "Lebesgue" distinguishes this from "integrable" for the Riemann integral. If $f$ is a step function, then by (7) $f$ is Lebesgue integrable and this $\int_{\mathbb{R}} f$ is the same number as $\int_{\mathbb{R}} f$ of the entry on step functions, so the symbol $\int_{\mathbb{R}}$ does not acquire two meanings.

**Functions on an interval.** For reals $a < b$ and $g : [a, b] \to \mathbb{R}$, the function $\hat{g} : \mathbb{R} \to \mathbb{R}$ defined by $\hat{g}(x) = g(x)$ for $x \in [a, b]$ and $\hat{g}(x) = 0$ for $x \notin [a, b]$ is called the **extension of $g$ by $0$**. We say $g$ is **Lebesgue integrable on $[a, b]$** precisely when $\hat{g}$ is Lebesgue integrable, and then we write $\int_{[a, b]} g = \int_{\mathbb{R}} \hat{g}$. If $[a, b] \subseteq S \subseteq \mathbb{R}$ and $h : S \to \mathbb{R}$, then $h$ is Lebesgue integrable on $[a, b]$ when the restriction $h|_{[a, b]}$ is, and $\int_{[a, b]} h = \int_{[a, b]} h|_{[a, b]}$.

The following hold. Below, $f, g : \mathbb{R} \to \mathbb{R}$, $\Phi = (\varphi_n)$ and $\Psi = (\psi_n)$ are sequences of step functions, and $k$ is a real number.

1. (Alternating sequences) For every natural number $n$ there is exactly one natural number $m$ with $n = 2m - 1$ or $n = 2m$, and the two cases do not hold together. Let $(a_m)$, $(b_m)$ be real sequences, $(c_n) = \operatorname{alt}\bigl((a_m), (b_m)\bigr)$, let $(A_m)$, $(B_m)$, $(C_n)$ be their sequences of partial sums, and put $B_0 = 0$.
   - (i) For every natural number $m$, $C_{2m} = A_m + B_m$ and $C_{2m-1} = A_m + B_{m-1}$.
   - (ii) The series of $(|c_n|)$ converges precisely when the series of $(|a_m|)$ and of $(|b_m|)$ both converge. That is, the series of $(c_n)$ converges absolutely precisely when the series of $(a_m)$ and of $(b_m)$ both converge absolutely, and then $\sum_{n=1}^{\infty} |c_n| = \sum_{m=1}^{\infty} |a_m| + \sum_{m=1}^{\infty} |b_m|$.
   - (iii) If the series of $(a_m)$ and of $(b_m)$ converge, then the series of $(c_n)$ converges and $\sum_{n=1}^{\infty} c_n = \sum_{m=1}^{\infty} a_m + \sum_{m=1}^{\infty} b_m$.
2. (The series of integrals) If $\Phi$ is a representation of $f$, then the series of the sequence whose $n$th term is $\int_{\mathbb{R}} \varphi_n$ converges absolutely and
   $$
   \left| \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n \right| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|.
   $$
3. (Scalar multiples and alternation) Let $\Phi$ be a representation of $f$ and $\Psi$ a representation of $g$.
   - (i) $k\Phi$ is a representation of $kf$, and $\sum_{n=1}^{\infty} \int_{\mathbb{R}} k\varphi_n = k \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$.
   - (ii) $\operatorname{alt}(\Phi, \Psi)$ is a representation of $f + g$, and if $\theta_n$ denotes its $n$th term, then $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \theta_n = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n + \sum_{n=1}^{\infty} \int_{\mathbb{R}} \psi_n$. In particular, $\operatorname{alt}(\Phi, -\Psi)$ is a representation of $f - g$.
4. (Comparison of step functions) Let $(g_n)$ be a sequence of step functions with $g_n(x) \le g_{n+1}(x)$ for every natural number $n$ and every real $x$, and suppose the sequence whose $n$th term is $\int_{\mathbb{R}} g_n$ is bounded above. If $h$ is a step function and, for every real $x$, the sequence whose $n$th term is $\max\{h(x) - g_n(x), 0\}$ converges to $0$, then the sequence whose $n$th term is $\int_{\mathbb{R}} g_n$ converges and
   $$
   \int_{\mathbb{R}} h \le \lim_{n \to \infty} \int_{\mathbb{R}} g_n.
   $$
5. (Representations of nonnegative functions) If $\Phi$ is a representation of $f$ and $0 \le f(x)$ for every real $x$, then $0 \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$.
6. (Independence of the representation) If $\Phi$ and $\Psi$ are both representations of $f$, then $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \psi_n$.
7. (Step functions) If $\varphi$ is a step function, then the sequence of step functions whose first term is $\varphi$ and whose terms for $n \ge 2$ are all the zero function is a representation of $\varphi$. Hence $\varphi$ is Lebesgue integrable, and its Lebesgue integral equals the integral $\int_{\mathbb{R}} \varphi$ of the entry on step functions. In particular, the zero function is Lebesgue integrable with Lebesgue integral $0$.
:::

## 직관

계단함수는 적분을 바로 계산할 수 있는 함수입니다. 이 항목은 계단함수를 끝없이 더해서 만들 수 있는 함수까지 적분을 넓힙니다. 소수 전개가 수를 $3 + 0.1 + 0.04 + \cdots$처럼 쉬운 수의 합으로 쓰듯, 표현은 함수를 계단함수의 합으로 씁니다. 비유가 맞아떨어지는 곳은 "부분합이 점점 맞는 값에 다가간다"는 것이고, 어긋나는 곳은 표현이 함수의 모든 점에서 값을 맞출 필요가 없다는 것입니다.

조건 A는 더하는 계단함수들이 "모두 합쳐 유한한 넓이"를 가진다는 것입니다. 이 조건이 있으면 적분의 급수 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$이 수렴하므로 그 합을 적분으로 삼을 수 있습니다. 조건 B는 계단함수의 값을 더한 급수가 절대수렴하는 점에서만 그 합이 $f$의 값이어야 한다고 요구합니다. 절대수렴하지 않는 점에서는 $f$의 값을 묻지 않으므로, 그런 점에서 값을 바꾼 함수도 같은 열을 표현으로 갖습니다(아래 예시 '한 점에서 값을 바꾼 함수').

정의가 뜻을 가지려면 같은 함수의 두 표현이 같은 적분을 주어야 합니다. 그것이 (6)이고, 증명의 핵심은 (5)입니다. 함수가 $0$ 이상이면 표현의 적분의 합도 $0$ 이상이라는 것인데, 이것은 7단원의 [[daniell-condition-for-step-functions|감소하여 0 으로 가는 계단함수열의 적분]]에서 나옵니다. 점마다 감소하여 $0$으로 가는 계단함수열의 적분이 $0$으로 간다는 그 정리가, 계단함수의 급수로 넓힌 적분이 하나로 정해지는 데 쓰입니다.

## 증명

:::idea
(1)은 부분합을 짝수 번째와 홀수 번째로 나누어 보는 것이다. (5)는 앞의 $p$개 항은 그대로, 뒤의 항은 절댓값으로 더한 계단함수열 $(g_n)$에서 $\max\{-g_n(x), 0\}$이 모든 점에서 $0$으로 간다는 것을 (4)에 넣고 $p$를 키운다. (6)은 두 표현을 번갈아 늘어놓으면 영함수의 표현이 된다는 것에 (5)를 두 번 쓴다.
:::

:::hint
(5)에서 $x$에서의 급수가 절대수렴하면, 앞의 $p$개 항의 합에 나머지 항의 절댓값을 더한 수는 $f(x)$ 이상이다. 절대수렴하지 않으면 그 부분합은 끝없이 커진다.
:::

:::hint
(4)에서 $u_n = \max\{h - g_n, 0\}$은 $n$에 대해 감소하는 계단함수이고, $h \le g_n + u_n$이다.
:::

:::proof
아래에서 "계단함수 항목"은 [[step-function|계단함수와 그 적분]], "합의 기호 항목"은 [[sum-of-a-series|급수의 합의 기호]], "부분합 항목"은 [[series-and-partial-sums|급수와 부분합]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 함수의 같음은 [[real-valued-function|실함수와 그 연산]]의 (2)로, 계단함수끼리의 합·차·상수배·절댓값·최대가 계단함수라는 것은 계단함수 항목의 (5)로 확인한다. 먼저 수열에 관한 사실 하나를 보인다.

- (가) 수열 $(u_n)$과 실수 $L$에 대하여, $m$번째 항이 $u_{2m}$인 수열과 $m$번째 항이 $u_{2m-1}$인 수열이 모두 $L$로 수렴하면 $(u_n)$은 $L$로 수렴한다.

양수 $\varepsilon$이 주어지면 [[limit-of-sequence|수열의 극한]]의 정의에 의해 자연수 $M_1$, $M_2$가 있어 $m \ge M_1$이면 $|u_{2m} - L| < \varepsilon$이고 $m \ge M_2$이면 $|u_{2m-1} - L| < \varepsilon$이다. $M = 2(M_1 + M_2)$로 두고 $n \ge M$이라 하자. 아래 (1)의 첫 문장에 의해 $n = 2m$이거나 $n = 2m - 1$인 자연수 $m$이 있다. $n = 2m$이면 $2m \ge 2(M_1 + M_2)$에서 $m \ge M_1$이다. $n = 2m - 1$이면 $2m > 2m - 1 \ge 2(M_1 + M_2)$에서 $m > M_1 + M_2 \ge M_2$이다. 어느 경우든 $|u_n - L| < \varepsilon$이다.

**(1)** *첫 문장.* $n$은 정수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 짝수이거나 홀수이고 둘 다는 아니다. 짝수이면 $n = 2a$인 정수 $a$가 있고, $n \ge 1$이므로 $a > 0$이며 [[prime-number|소수]]의 (Z1)에 의해 $a$는 자연수이다. 이때 $m = a$이다. 홀수이면 $n = 2a + 1$인 정수 $a$가 있고 $n \ge 1$이므로 $a \ge 0$이며, $m = a + 1$은 자연수이고 $n = 2m - 1$이다. 짝수와 홀수가 동시에 성립하지 않으므로 두 경우는 함께 성립하지 않고, 각 경우의 $m$은 $n$으로 정해진다($m = n/2$ 또는 $m = (n + 1)/2$). 따라서 $(c_n)$의 $n$번째 항은 $n$이 짝수이면 $b_{n/2}$, 홀수이면 $a_{(n+1)/2}$로 정해진다([[sequence]]의 (1)).

(i) $m$에 관한 귀납법으로 보인다. 부분합의 정의에 의해 $C_1 = c_1 = a_1 = A_1 + B_0$이고 $C_2 = C_1 + c_2 = a_1 + b_1 = A_1 + B_1$이다. $m$에서 성립하면
$$
\begin{aligned} C_{2m+1} &= C_{2m} + a_{m+1} \\ &= A_{m+1} + B_m, \\ C_{2m+2} &= C_{2m+1} + b_{m+1} \\ &= A_{m+1} + B_{m+1} \end{aligned}
$$
이다(부분합의 정의와 [[real-number-arithmetic|실수의 계산 법칙]]의 덧셈의 교환·결합법칙).

(ii) $(|c_n|)$은 $(|a_m|)$과 $(|b_m|)$을 번갈아 늘어놓은 수열이므로, 그 부분합 수열 $(U_n)$, $(V_m)$, $(W_m)$에 (i)을 쓸 수 있다: $U_{2m} = V_m + W_m$. 세 수열의 항이 $0$ 이상이므로 부분합 항목의 (3)에 의해 세 부분합 수열은 단조증가이고 $0$ 이상이다. $(|a_m|)$과 $(|b_m|)$의 급수가 수렴하고 합이 $V$, $W$이면 [[comparison-test|비교 판정법]]의 (1)에 의해 $V_m \le V$, $W_m \le W$이고, $n \le 2n$이므로 [[sequence]]의 (4)에 의해 $U_n \le U_{2n} = V_n + W_n \le V + W$이다. 비교 판정법의 (1)에 의해 $(|c_n|)$의 급수가 수렴한다. 거꾸로 $(|c_n|)$의 급수가 수렴하고 합이 $U$이면 $V_m \le V_m + W_m = U_{2m} \le U$이고 $W_m \le U$이므로 두 급수가 수렴한다. 이때 $m$번째 항이 $U_{2m}$인 수열은 $(U_n)$의 부분수열이므로 [[subsequence|부분수열]]의 (3)에 의해 $U$로 수렴하고, [[limit-of-sum-and-product|합과 곱의 극한]]의 (1)에 의해 $V + W$로도 수렴하므로 [[limit-is-unique|극한의 유일성]]에 의해 $U = V + W$이다.

(iii) 합을 $S$, $T$라 하자. (i)과 합과 곱의 극한의 (1)에 의해 $m$번째 항이 $C_{2m} = A_m + B_m$인 수열은 $S + T$로 수렴한다. $m$번째 항이 $B_{m-1}$인 수열의 $1$-꼬리는 $(B_m)$이므로 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 이 수열은 $T$로 수렴하고, 따라서 $m$번째 항이 $C_{2m-1} = A_m + B_{m-1}$인 수열도 $S + T$로 수렴한다. (가)에 의해 $(C_n)$은 $S + T$로 수렴한다.

**(2)** 계단함수 항목의 (6)의 (iii)에 의해 모든 $n$에서 $0 \le \bigl|\int_{\mathbb{R}} \varphi_n\bigr| \le \int_{\mathbb{R}} |\varphi_n|$이다. 조건 A와 비교 판정법의 (2)에 의해 $n$번째 항이 $\bigl|\int_{\mathbb{R}} \varphi_n\bigr|$인 수열의 급수가 수렴하고 그 합은 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$ 이하이다. 곧 $n$번째 항이 $\int_{\mathbb{R}} \varphi_n$인 수열의 급수는 절대수렴하고, [[absolute-convergence|절대수렴]]의 (1)과 (2)에 의해 수렴하며 부등식이 성립한다.

**(3)** (i) 모든 $x$에서 $|k\varphi_n(x)| = |k|\,|\varphi_n(x)|$이므로([[absolute-value]]의 (4)) $|k\varphi_n| = |k|\,|\varphi_n|$이고, 계단함수 항목의 (6)의 (i)에 의해 $\int_{\mathbb{R}} |k\varphi_n| = |k| \int_{\mathbb{R}} |\varphi_n|$이다. [[linearity-of-series|급수의 선형성]]의 (2)에 의해 조건 A가 성립한다. 조건 B: $x$에서 $n$번째 항이 $k\varphi_n(x)$인 수열의 급수가 절대수렴한다고 하자. $k = 0$이면 모든 항이 $0$이고 부분합이 모두 $0$이므로 그 합은 $0 = kf(x)$이다. $k \ne 0$이면 $|\varphi_n(x)| = |k|^{-1}\,|k\varphi_n(x)|$이므로 급수의 선형성의 (2)에 의해 $(\varphi_n(x))$의 급수도 절대수렴하고, $\Phi$의 조건 B에 의해 $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$이며, 다시 급수의 선형성의 (2)에 의해 $\sum_{n=1}^{\infty} k\varphi_n(x) = kf(x)$이다. 적분의 식은 계단함수 항목의 (6)의 (i), 이 항목의 (2), 급수의 선형성의 (2)에서 나온다.

(ii) $\theta_n$의 적분의 절댓값의 수열은 $(\int_{\mathbb{R}} |\varphi_m|)$과 $(\int_{\mathbb{R}} |\psi_m|)$을 번갈아 늘어놓은 수열이고 항이 $0$ 이상이므로, 두 조건 A와 (1)의 (ii)에 의해 조건 A가 성립한다. 조건 B: $x$에서 $(\theta_n(x))$의 급수가 절대수렴하면, $(\theta_n(x))$는 $(\varphi_m(x))$와 $(\psi_m(x))$를 번갈아 늘어놓은 수열이므로 (1)의 (ii)에 의해 두 급수가 절대수렴하고, 두 조건 B에 의해 그 합은 $f(x)$, $g(x)$이며, (1)의 (iii)에 의해 $\sum_{n=1}^{\infty} \theta_n(x) = f(x) + g(x)$이다. 적분의 식은 (2)와 (1)의 (iii)이다. 마지막 문장은 (i)에 의해 $-\Psi$가 $-g$의 표현이고 $f + (-g) = f - g$이기 때문이다.

**(4)** 자연수 $n$마다 $u_n = \max\{h - g_n, 0\}$, 곧 $x$에서의 값이 $\max\{h(x) - g_n(x), 0\}$인 함수로 두면 $u_n$은 계단함수이다(영함수는 $N = 0$인 계단함수이다). 모든 $x$에서 $h(x) - g_{n+1}(x) \le h(x) - g_n(x)$이므로 [[absolute-value]]의 (10)에 의해 $u_{n+1}(x) \le \max\{h(x) - g_n(x), 0\} = u_n(x)$이고, 가정에 의해 $(u_n(x))$는 $0$으로 수렴한다. [[daniell-condition-for-step-functions|감소하여 0 으로 가는 계단함수열의 적분]]의 (2)에 의해 $\lim_{n \to \infty} \int_{\mathbb{R}} u_n = 0$이다.

계단함수 항목의 (6)의 (ii)에 의해 $n$번째 항이 $\int_{\mathbb{R}} g_n$인 수열은 단조증가이고, 가정에 의해 위로 유계이므로 [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 수렴하며, 그 극한을 $G$라 하면 모든 $n$에서 $\int_{\mathbb{R}} g_n \le G$이다. 모든 $x$에서 $h(x) - g_n(x) \le u_n(x)$이므로(absolute-value 의 (10)) $h(x) \le g_n(x) + u_n(x)$이고, 계단함수 항목의 (6)의 (i), (ii)에 의해
$$
\int_{\mathbb{R}} h \le \int_{\mathbb{R}} g_n + \int_{\mathbb{R}} u_n \le G + \int_{\mathbb{R}} u_n
$$
이다. 오른쪽 수열은 합과 곱의 극한의 (5)에 의해 $G$로 수렴하므로, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $\int_{\mathbb{R}} h \le G$이다.

**(5)** (2)에 의해 $S = \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n$이 정해진다. 조건 A의 합을 $P$라 하고, $0$ 이상인 정수 $p$마다 $T_p = \sum_{j=p+1}^{\infty} \int_{\mathbb{R}} |\varphi_j|$로 두면 합의 기호 항목의 (2)에 의해 이 합이 정해지고 $P = \sum_{j=1}^{p} \int_{\mathbb{R}} |\varphi_j| + T_p$이다.

자연수 $p$를 고정하고 $s_p = \sum_{j=1}^{p} \varphi_j$(곧 $x$에서의 값이 $\sum_{j=1}^{p} \varphi_j(x)$인 계단함수)로 둔다. 자연수 $n$마다
$$
g_n = s_p + \sum_{j=1}^{n} |\varphi_{p+j}|
$$
로 두면 $g_n$은 계단함수이고, [[finite-sum-of-reals|유한 합]]의 (3)에 의해 $g_{n+1}(x) = g_n(x) + |\varphi_{p+n+1}(x)| \ge g_n(x)$이다. 계단함수 항목의 (6)의 (i)에 의해
$$
\int_{\mathbb{R}} g_n = \sum_{j=1}^{p} \int_{\mathbb{R}} \varphi_j + \sum_{j=1}^{n} \int_{\mathbb{R}} |\varphi_{p+j}|
$$
이고, 합의 기호 항목의 (1)과 (4)의 (ii)에 의해 둘째 합은 $T_p$ 이하이며 $n \to \infty$에서 $T_p$로 수렴한다. 따라서 $(\int_{\mathbb{R}} g_n)$은 위로 유계이고 그 극한은 $\sum_{j=1}^{p} \int_{\mathbb{R}} \varphi_j + T_p$이다(합과 곱의 극한의 (5)).

이제 $h$를 영함수로 두고 (4)의 가정을 확인한다. 실수 $x$를 고정하고 $w_n = \max\{-g_n(x), 0\}$으로 두면 $w_n \ge 0$이다.

- $(\varphi_j(x))$의 급수가 절대수렴하는 경우. 합의 기호 항목의 (2)에 의해 $\sum_{j=p+1}^{\infty} |\varphi_j(x)|$와 $\sum_{j=p+1}^{\infty} \varphi_j(x)$가 정해지고, 조건 B와 그 (2)에 의해 $f(x) = s_p(x) + \sum_{j=p+1}^{\infty} \varphi_j(x)$이다. 그 (4)의 (i)과 $t \le |t|$([[absolute-value]]의 (6))에 의해 $G_x = s_p(x) + \sum_{j=p+1}^{\infty} |\varphi_j(x)|$로 두면 $0 \le f(x) \le G_x$이다. 합의 기호 항목의 (1)에 의해 $\sum_{j=1}^{n} |\varphi_{p+j}(x)|$는 $n \to \infty$에서 $\sum_{j=p+1}^{\infty} |\varphi_j(x)|$로 수렴하므로, 합과 곱의 극한의 (5)에 의해 $(g_n(x))$는 $G_x$로 수렴한다. 양수 $\varepsilon$이 주어지면 $n \ge M$일 때 $G_x - \varepsilon < g_n(x)$인 $M$이 있고([[limit-of-sequence|수열의 극한]]의 (1)), 그때 $-g_n(x) < \varepsilon - G_x \le \varepsilon$이고 $0 < \varepsilon$이므로 $w_n$은 그 둘 가운데 하나로서 $\varepsilon$보다 작다(absolute-value 의 (10)). 따라서 $|w_n - 0| = w_n < \varepsilon$이다.
- 절대수렴하지 않는 경우. 합의 기호 항목의 (2)에 의해 $n \ge p + 1$에서의 항 $|\varphi_j(x)|$의 급수도 발산하고, 항이 $0$ 이상이므로 비교 판정법의 (1)에 의해 그 부분합 $\sum_{j=1}^{n} |\varphi_{p+j}(x)|$의 수열은 위로 유계가 아니다. 그래서 $\sum_{j=1}^{N} |\varphi_{p+j}(x)| > -s_p(x)$인 $N$이 있고, $n \ge N$이면 $g_n(x) \ge g_N(x) > 0$([[sequence]]의 (4))이므로 $w_n = 0$이다.

어느 경우든 $(w_n)$은 $0$으로 수렴한다. (4)와 계단함수 항목의 (4)의 (iii)에 의해 $0 \le \sum_{j=1}^{p} \int_{\mathbb{R}} \varphi_j + T_p$이다. 이것이 모든 자연수 $p$에서 성립한다. 이제 $p \to \infty$로 보낸다. $p$번째 항이 $\sum_{j=1}^{p} \int_{\mathbb{R}} \varphi_j$인 수열은 합의 기호 항목의 (1)에 의해 $S$로 수렴하고, $T_p = P - \sum_{j=1}^{p} \int_{\mathbb{R}} |\varphi_j|$는 같은 까닭과 합과 곱의 극한의 (2)에 의해 $0$으로 수렴한다. 따라서 $p$번째 항이 $\sum_{j=1}^{p} \int_{\mathbb{R}} \varphi_j + T_p$인 수열은 $S$로 수렴하고 모든 항이 $0$ 이상이므로, 극한과 부등식의 (3)에 의해 $0 \le S$이다.

**(6)** (3)의 (ii)에 의해 $\operatorname{alt}(\Phi, -\Psi)$는 $f - f$, 곧 영함수의 표현이다. 영함수는 모든 점에서 $0$ 이상이므로 (5), (3)의 (ii), (3)의 (i)에 의해
$$
\begin{aligned} 0 &\le \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n + \sum_{n=1}^{\infty} \int_{\mathbb{R}} (-\psi_n) \\ &= \sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n - \sum_{n=1}^{\infty} \int_{\mathbb{R}} \psi_n \end{aligned}
$$
이다. $\Phi$와 $\Psi$의 자리를 바꾸어 같은 논법을 쓰면 반대 방향의 부등식을 얻으므로 두 합은 같다(순서 성질).

**(7)** 그 열을 $(\varphi_n)$이라 하면 $\varphi_1 = \varphi$이고 $n \ge 2$이면 $\varphi_n$은 영함수이다. 계단함수 항목의 (4)의 (iii)에 의해 $n \ge 2$이면 $\int_{\mathbb{R}} |\varphi_n| = 0$이므로 $n$번째 항이 $\int_{\mathbb{R}} |\varphi_n|$인 수열의 부분합은 모두 $\int_{\mathbb{R}} |\varphi|$이고(유한 합의 (3)), 조건 A가 성립한다. 모든 $x$에서 $(\varphi_n(x))$의 부분합과 $(|\varphi_n(x)|)$의 부분합은 모두 $\varphi(x)$와 $|\varphi(x)|$이므로 급수가 절대수렴하고 합이 $\varphi(x)$이다. 따라서 조건 B가 성립한다. 같은 까닭으로 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} \varphi_n = \int_{\mathbb{R}} \varphi$이다. 영함수의 적분은 계단함수 항목의 (4)의 (iii)에 의해 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점에서 값을 바꾼 함수]
$g$를 $x \in [0, 1)$이면 $1$, $x = 5$이면 $3$, 그 밖에서는 $0$인 함수라 합시다. $n$이 $1$이면 $\chi_{[0, 1)}$, $n = 2m$이면 $\chi_{[5, 5 + (1/2)^m)}$, $n = 2m + 1$이면 $-\chi_{[5, 5 + (1/2)^m)}$인 계단함수열을 생각합니다. 적분의 절댓값의 합은 $1 + 2\sum_{m=1}^{\infty} (1/2)^m = 3$으로 유한합니다. $x = 5$에서는 $m$마다 $1$과 $-1$이 한 번씩 더해지므로 절댓값의 급수가 발산하고, 조건 B는 $g(5)$에 대해 아무것도 요구하지 않습니다. $x < 5$이면 둘째 항부터의 값이 모두 $0$이고, $x > 5$이면 $(1/2)^m \le x - 5$인 $m$부터 짝을 이루는 두 항의 값이 $0$이므로 절댓값의 급수가 수렴합니다. 짝을 이루는 두 항은 서로 지워지므로 합은 $\chi_{[0, 1)}(x) = g(x)$입니다. 그래서 이 열은 $g$의 표현이고 $\int_{\mathbb{R}} g = 1 + \sum_{m=1}^{\infty} \bigl((1/2)^m - (1/2)^m\bigr) = 1$입니다.
:::

:::example[0 근처에서 유계가 아닌 함수]
$\varphi_n = \chi_{[0, 1/n^2)}$이라 합시다. $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n| = \sum_{n=1}^{\infty} 1/n^2$은 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴합니다. $x < 0$이면 모든 항이 $0$이고, $x > 0$이면 $x < 1/n^2$인 $n$, 곧 $n^2 < 1/x$인 $n$만 값이 $1$이므로 그런 $n$은 유한 개이고 급수가 절대수렴합니다. $x = 0$에서는 모든 항이 $1$이어서 발산합니다. 그래서 $x \ne 0$에서 $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$, $f(0) = 0$으로 정한 $f$는 르베그 적분가능하고 $\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} 1/n^2$입니다. 자연수 $N$에 대하여 $x = 1/(N + 1)^2$이면 $n \le N$인 모든 $n$에서 $\varphi_n(x) = 1$이므로 $f(x) \ge N$입니다. 곧 $f$는 $[0, 1]$에서 유계가 아니고, 그래서 $f$를 $[0, 1]$로 제한한 함수는 리만 적분가능하지 않습니다([[riemann-integral|리만 적분]]의 (6)).
:::

:::counterexample[점마다 수렴하지만 조건 A 를 만족하지 않는 열의 예]
$\varphi_n = \chi_{[n - 1, n)}$이라 합시다. 모든 $x$에서 $\varphi_n(x)$가 $1$인 $n$은 많아야 하나이므로, $(\varphi_n(x))$의 급수는 모든 점에서 절대수렴하고 합은 $x \ge 0$이면 $1$, $x < 0$이면 $0$입니다. 그러나 $\int_{\mathbb{R}} |\varphi_n| = 1$이 모든 $n$에서 성립하므로 적분의 절댓값의 급수가 발산하여 조건 A가 성립하지 않습니다. 그래서 이 열은 어떤 함수의 표현도 아닙니다. 점마다 수렴한다는 것만으로는 표현이 되지 않을 수 있습니다.
:::

## 확인 질문

:::check[f 의 표현에서 첫째 항과 둘째 항의 자리를 바꾼 열도 f 의 표현인가?]
그렇습니다. 바꾼 열의 부분합은 둘째 부분합부터 원래 열의 부분합과 같고, 절댓값의 부분합도 둘째부터 같습니다. 그래서 적분의 절댓값의 급수와 각 점에서의 급수가 수렴하는지, 그 합이 무엇인지가 원래 열과 같습니다([[tail-of-a-sequence|수열의 꼬리]]의 (2)). 조건 A와 B가 그대로 성립하고 르베그 적분도 같습니다.
:::

:::check[f 의 표현에서 첫째 항만 계단함수 ψ 로 바꾼 열은 어느 함수의 표현인가?]
$f - \varphi_1 + \psi$의 표현입니다. 바꾼 열과 원래 열은 첫째 항만 다르므로, 각 점에서 두 급수가 절대수렴하는지는 같고, 절대수렴하면 합의 차는 $\psi(x) - \varphi_1(x)$입니다. 조건 A도 첫째 항 하나의 차이만 있으므로 성립합니다. 그래서 르베그 적분은 $\int_{\mathbb{R}} f - \int_{\mathbb{R}} \varphi_1 + \int_{\mathbb{R}} \psi$입니다.
:::
