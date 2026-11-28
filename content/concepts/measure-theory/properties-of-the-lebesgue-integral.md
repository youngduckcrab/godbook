---
title: 르베그 적분의 선형성·단조성·절댓값
title_en: Linearity, Monotonicity, and Absolute Values of the Lebesgue Integral
aliases: [르베그 적분의 성질, 르베그 적분의 선형성, 르베그 적분의 단조성, 작은 표현, 절댓값 표현, 꼬리 표현, 양의 부분, 음의 부분, properties of the Lebesgue integral]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 르베그 적분가능한 함수의 상수배·합·차·절댓값·최대·최소·양의 부분·음의 부분이 르베그 적분가능하다는 것을 주어진 표현에서 식으로 만든 표현으로 보이고, 적분의 선형성과 단조성, 적분의 절댓값의 부등식, 적분의 절댓값의 합이 ∫|f| 에 가까운 작은 표현, 부분합이 적분의 뜻으로 f 에 다가간다는 것을 증명한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, well-ordering-principle, sequence, limit-of-sequence, limit-is-unique, limit-of-sum-and-product, limits-preserve-inequalities, limit-of-absolute-value-and-square-root, comparison-with-null-sequence, subsequence, terms-of-convergent-series-tend-to-zero, series-and-partial-sums, sum-of-a-series, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, positive-and-negative-parts, real-valued-function, step-function, lebesgue-integrable-function]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "3절 Corollary 3.5 (p.6–7), Theorem 3.6 (p.7), Corollary 3.7 (p.7–8), Lemma 3.8 (p.8); 4절 Definition 4.1 (p.9), Theorem 4.7 (p.10–11)"
    checked: original
    note: "(1)과 (2)는 출처 Corollary 3.5(p.6–7)이다. 출처는 f + g 의 표현을 f_1 + g_1 + f_2 + g_2 + ⋯, λf 의 표현을 λf_1 + λf_2 + ⋯ 로 적고, 단조성을 Lemma 3.3 으로 얻는다. 이 항목은 그 두 표현이 표현이라는 것을 lebesgue-integrable-function 의 (3)으로 인용한다. (3)은 Theorem 3.6(p.7)이다. 출처는 s_n = f_1 + ⋯ + f_n, g_1 = |s_1|, g_n = |s_n| − |s_{n−1}| 로 두고 |f| 의 표현을 g_1 + f_1 − f_1 + g_2 + f_2 − f_2 + ⋯ (세 항씩)로 적는다. 이 항목의 abs(Φ) 는 같은 γ_n 을 쓰되 γ_m + φ_m, −φ_m 의 두 항씩으로 묶어, lebesgue-integrable-function 의 (1)의 번갈아 늘어놓기 하나로 다룬다. |γ_n| ≤ |φ_n| 을 역삼각부등식으로 얻는 것은 출처와 같다. 출처는 |∫f| ≤ ∫|f| 와 ∫|f| = lim ∫|f_1 + ⋯ + f_n| 를 진술하고, (3)의 (iii)의 ∫|f| ≤ Σ∫|φ_n| 은 출처 Theorem 4.7 의 증명(p.11)이 'by Theorem 3.6' 이라며 쓰는 부등식이다. (4)는 Corollary 3.7(p.7–8)의 식 f ∨ g = (f + g + |f − g|)/2, f ∧ g = (f + g − |f − g|)/2 이고, 양의 부분과 음의 부분의 표현은 같은 식에 g = 0 을 넣은 것이다. (5)는 Lemma 3.8(p.8)이다. 출처의 증명은 'Choose n_1 ∈ N such that Σ_{n_1+1}^∞ ∫|g_n| < ε/2' 와 'there exists an n_2 ∈ N such that ∫|g_1 + ⋯ + g_n| < ∫|f| + ε/2 for every n ≥ n_2' 로 두 번호를 잡고 n_0 = max(n_1, n_2) 로 둔다. 이 항목은 두 조건을 함께 만족하는 가장 작은 자연수를 정렬 원리로 잡아 n_ε 이 Φ 와 ε 으로 하나로 정해지게 했다. 새 표현의 꼴(첫 항이 부분합, 나머지가 원래 열의 꼬리)은 출처와 같다. (6)은 Theorem 4.7(p.10–11)이다. 출처는 노름 ‖f‖ = ∫|f| (Definition 4.1, p.9)으로 'the series converges to f in norm' 이라 진술하고, 증명에서 f − f_1 − ⋯ − f_n 의 표현이 f_{n+1} + f_{n+2} + ⋯ 라고 적는다. 이 항목은 노름의 기호를 두지 않고 ∫|f − s_n| 으로 적는다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 Lemma 3.3 증명의 ∧ 오식을 원문으로 대조, (7) 의 a < b 경계, 기록의 검색어). 독립 검토 없음."
added: 2026-11-28
---

:::statement
르베그 적분가능, 표현, 르베그 적분 $\int_{\mathbb{R}}$, 계단함수의 열, $k\Phi$, $-\Phi$, 번갈아 늘어놓은 열 $\operatorname{alt}(\Phi, \Psi)$는 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 계단함수와 영함수는 [[step-function|계단함수와 그 적분]]의 것이다. 실함수의 합·차·상수배·절댓값은 [[real-valued-function]]의 것이고, 두 수의 최대 $\max\{a, b\}$, 최소 $\min\{a, b\}$는 [[absolute-value]], 실수의 양의 부분과 음의 부분은 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 것이다. 급수의 합과 $\sum_{m=n+1}^{\infty}$은 [[sum-of-a-series|급수의 합의 기호]]의 것이다.

**최대, 최소, 양의 부분, 음의 부분.** $f, g : \mathbb{R} \to \mathbb{R}$에 대하여 $\max\{f, g\}$, $\min\{f, g\}$는 $x$에서의 값이 $\max\{f(x), g(x)\}$, $\min\{f(x), g(x)\}$인 함수이고, $f^+$, $f^-$는 $x$에서의 값이 $f(x)$의 양의 부분 $\max\{f(x), 0\}$, 음의 부분 $\max\{-f(x), 0\}$인 함수이다. $f^+$를 $f$의 **양의 부분**, $f^-$를 $f$의 **음의 부분**이라 한다.

**부분합과 세 가지 열.** $\Phi = (\varphi_n)$을 계단함수의 열이라 하자. $s_0$은 영함수이고, 자연수 $n$에 대하여 $s_n$은 $x$에서의 값이 $\sum_{j=1}^{n} \varphi_j(x)$인 계단함수이다.

- 자연수 $n$마다 $\gamma_n = |s_n| - |s_{n-1}|$로 둔다. 모든 자연수 $m$에서 $2m - 1$번째 항이 $\gamma_m + \varphi_m$이고 $2m$번째 항이 $-\varphi_m$인 계단함수의 열을 $\operatorname{abs}(\Phi)$로 쓰고 $\Phi$로 만든 **절댓값 표현**이라 한다. 곧 $\operatorname{abs}(\Phi)$는 $n$번째 항이 $\gamma_n + \varphi_n$인 열과 $-\Phi$를 번갈아 늘어놓은 열이다.
- $0$ 이상인 정수 $n$에 대하여 $j$번째 항이 $\varphi_{n+j}$인 계단함수의 열을 $\operatorname{tail}_n(\Phi)$로 쓰고 $\Phi$의 $n$-**꼬리**라 한다.
- $\Phi$가 르베그 적분가능한 함수 $f$의 표현이고 $\varepsilon$이 양의 실수일 때, 아래 (5)의 $n_\varepsilon$에 대하여 첫째 항이 $s_{n_\varepsilon}$이고 $j \ge 2$인 $j$번째 항이 $\varphi_{n_\varepsilon + j - 1}$인 계단함수의 열을 $\operatorname{small}_\varepsilon(\Phi)$로 쓰고 $\Phi$의 $\varepsilon$-**작은 표현**이라 한다.

다음이 성립한다. 아래에서 $f, g : \mathbb{R} \to \mathbb{R}$는 르베그 적분가능하고 $\Phi = (\varphi_n)$, $\Psi = (\psi_n)$은 각각 $f$, $g$의 표현이며, $s_n$, $\gamma_n$은 위에서 $\Phi$로 정한 것이고, $k$는 실수이다.

1. (선형성) $kf$, $f + g$, $f - g$는 르베그 적분가능하고, $k\Phi$, $\operatorname{alt}(\Phi, \Psi)$, $\operatorname{alt}(\Phi, -\Psi)$가 각각의 표현이며
   $$
   \begin{gathered} \int_{\mathbb{R}} kf = k \int_{\mathbb{R}} f, \\ \int_{\mathbb{R}} (f + g) = \int_{\mathbb{R}} f + \int_{\mathbb{R}} g, \\ \int_{\mathbb{R}} (f - g) = \int_{\mathbb{R}} f - \int_{\mathbb{R}} g \end{gathered}
   $$
   이다.
2. (단조성) 모든 실수 $x$에서 $f(x) \le g(x)$이면 $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} g$이다. 특히 모든 실수 $x$에서 $0 \le f(x)$이면 $0 \le \int_{\mathbb{R}} f$이다.
3. (절댓값)
   - (i) 모든 자연수 $n$과 모든 실수 $x$에서 $|\gamma_n(x)| \le |\varphi_n(x)|$이다. $\operatorname{abs}(\Phi)$는 $|f|$의 표현이고, 그 $n$번째 항을 $\rho_n$이라 하면 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\rho_n| \le 3 \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$이다.
   - (ii) $|f|$는 르베그 적분가능하고, $n$번째 항이 $\int_{\mathbb{R}} |s_n|$인 수열은 $\int_{\mathbb{R}} |f|$로 수렴한다.
   - (iii) $\left| \int_{\mathbb{R}} f \right| \le \int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$이다. 따라서 $f$의 모든 표현 $\Theta = (\theta_n)$에서 $\int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\theta_n|$이다.
   - (iv) $\left| \int_{\mathbb{R}} f - \int_{\mathbb{R}} g \right| \le \int_{\mathbb{R}} |f - g|$이다.
4. (최대, 최소, 양의 부분, 음의 부분) $\Lambda = \operatorname{alt}(\Phi, \Psi)$, $\Delta = \operatorname{abs}\bigl(\operatorname{alt}(\Phi, -\Psi)\bigr)$로 두자. $\max\{f, g\}$, $\min\{f, g\}$, $f^+$, $f^-$는 르베그 적분가능하고, 각각
   $$
   \begin{gathered} \tfrac{1}{2} \operatorname{alt}(\Lambda, \Delta), \\ \tfrac{1}{2} \operatorname{alt}(\Lambda, -\Delta), \\ \tfrac{1}{2} \operatorname{alt}\bigl(\Phi, \operatorname{abs}(\Phi)\bigr), \\ \tfrac{1}{2} \operatorname{alt}\bigl(\operatorname{abs}(\Phi), -\Phi\bigr) \end{gathered}
   $$
   가 그 표현이다. 또 $f = f^+ - f^-$, $|f| = f^+ + f^-$이고
   $$
   \begin{aligned} \int_{\mathbb{R}} \max\{f, g\} &= \tfrac{1}{2} \Bigl( \int_{\mathbb{R}} f + \int_{\mathbb{R}} g \Bigr) \\ &\quad + \tfrac{1}{2} \int_{\mathbb{R}} |f - g|, \\ \int_{\mathbb{R}} \min\{f, g\} &= \tfrac{1}{2} \Bigl( \int_{\mathbb{R}} f + \int_{\mathbb{R}} g \Bigr) \\ &\quad - \tfrac{1}{2} \int_{\mathbb{R}} |f - g|, \\ \int_{\mathbb{R}} f &= \int_{\mathbb{R}} f^+ - \int_{\mathbb{R}} f^- \end{aligned}
   $$
   이다.
5. (작은 표현) $\varepsilon$이 양의 실수이면, 자연수 $n$으로서
   $$
   \begin{gathered} \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} |\varphi_m| < \frac{\varepsilon}{2}, \\ \int_{\mathbb{R}} |s_n| < \int_{\mathbb{R}} |f| + \frac{\varepsilon}{2} \end{gathered}
   $$
   를 모두 만족하는 것이 있다. 그 가운데 가장 작은 것을 $n_\varepsilon$이라 한다. $n_\varepsilon$은 $\Phi$와 $\varepsilon$으로 정해진다. $\operatorname{small}_\varepsilon(\Phi) = (\theta_j)$는 $f$의 표현이고
   $$
   \sum_{j=1}^{\infty} \int_{\mathbb{R}} |\theta_j| < \int_{\mathbb{R}} |f| + \varepsilon
   $$
   이다.
6. (꼬리 표현과 부분합) $0$ 이상인 정수 $n$에 대하여 $\operatorname{tail}_n(\Phi)$는 $f - s_n$의 표현이고
   $$
   \begin{gathered} \int_{\mathbb{R}} (f - s_n) = \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} \varphi_m, \\ \int_{\mathbb{R}} |f - s_n| \le \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} |\varphi_m| \end{gathered}
   $$
   이다. $n$번째 항이 $\int_{\mathbb{R}} |f - s_n|$인 수열은 $0$으로 수렴하고, $n$번째 항이 $\int_{\mathbb{R}} s_n$인 수열은 $\int_{\mathbb{R}} f$로 수렴한다.
:::

:::english
Lebesgue integrability, representations, the Lebesgue integral $\int_{\mathbb{R}}$, sequences of step functions, $k\Phi$, $-\Phi$, and the alternating sequence $\operatorname{alt}(\Phi, \Psi)$ are as in the entry on Lebesgue integrable functions, and step functions and the zero function are as in the entry on step functions. Sums, differences, scalar multiples, and absolute values of real-valued functions are as in the entry on real-valued functions; the maximum $\max\{a, b\}$ and minimum $\min\{a, b\}$ of two numbers are as in the entry on absolute value, and the positive and negative parts of a real number are as in the corresponding entry. Sums of series and $\sum_{m=n+1}^{\infty}$ are as in the entry on the notation for sums of series.

**Maximum, minimum, positive part, negative part.** For $f, g : \mathbb{R} \to \mathbb{R}$, $\max\{f, g\}$ and $\min\{f, g\}$ are the functions whose values at $x$ are $\max\{f(x), g(x)\}$ and $\min\{f(x), g(x)\}$, and $f^+$, $f^-$ are the functions whose values at $x$ are the positive part $\max\{f(x), 0\}$ and the negative part $\max\{-f(x), 0\}$ of $f(x)$. We call $f^+$ the **positive part** and $f^-$ the **negative part** of $f$.

**Partial sums and three sequences.** Let $\Phi = (\varphi_n)$ be a sequence of step functions. Let $s_0$ be the zero function, and for a natural number $n$ let $s_n$ be the step function whose value at $x$ is $\sum_{j=1}^{n} \varphi_j(x)$.

- For each natural number $n$ put $\gamma_n = |s_n| - |s_{n-1}|$. The sequence of step functions whose $(2m - 1)$th term is $\gamma_m + \varphi_m$ and whose $2m$th term is $-\varphi_m$ for every natural number $m$ is denoted $\operatorname{abs}(\Phi)$ and called the **absolute-value representation** made from $\Phi$. That is, $\operatorname{abs}(\Phi)$ alternates the sequence whose $n$th term is $\gamma_n + \varphi_n$ with $-\Phi$.
- For an integer $n \ge 0$, the sequence of step functions whose $j$th term is $\varphi_{n+j}$ is denoted $\operatorname{tail}_n(\Phi)$ and called the $n$-**tail** of $\Phi$.
- When $\Phi$ is a representation of a Lebesgue integrable function $f$ and $\varepsilon$ is a positive real, with $n_\varepsilon$ as in (5) below, the sequence of step functions whose first term is $s_{n_\varepsilon}$ and whose $j$th term for $j \ge 2$ is $\varphi_{n_\varepsilon + j - 1}$ is denoted $\operatorname{small}_\varepsilon(\Phi)$ and called the $\varepsilon$-**small representation** of $\Phi$.

The following hold. Below, $f, g : \mathbb{R} \to \mathbb{R}$ are Lebesgue integrable, $\Phi = (\varphi_n)$ and $\Psi = (\psi_n)$ are representations of $f$ and $g$, respectively, $s_n$ and $\gamma_n$ are defined from $\Phi$ as above, and $k$ is a real number.

1. (Linearity) $kf$, $f + g$, and $f - g$ are Lebesgue integrable, $k\Phi$, $\operatorname{alt}(\Phi, \Psi)$, and $\operatorname{alt}(\Phi, -\Psi)$ are respective representations, and
   $$
   \begin{gathered} \int_{\mathbb{R}} kf = k \int_{\mathbb{R}} f, \\ \int_{\mathbb{R}} (f + g) = \int_{\mathbb{R}} f + \int_{\mathbb{R}} g, \\ \int_{\mathbb{R}} (f - g) = \int_{\mathbb{R}} f - \int_{\mathbb{R}} g. \end{gathered}
   $$
2. (Monotonicity) If $f(x) \le g(x)$ for every real $x$, then $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} g$. In particular, if $0 \le f(x)$ for every real $x$, then $0 \le \int_{\mathbb{R}} f$.
3. (Absolute values)
   - (i) $|\gamma_n(x)| \le |\varphi_n(x)|$ for every natural number $n$ and every real $x$. $\operatorname{abs}(\Phi)$ is a representation of $|f|$, and if $\rho_n$ denotes its $n$th term, then $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\rho_n| \le 3 \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$.
   - (ii) $|f|$ is Lebesgue integrable, and the sequence whose $n$th term is $\int_{\mathbb{R}} |s_n|$ converges to $\int_{\mathbb{R}} |f|$.
   - (iii) $\left| \int_{\mathbb{R}} f \right| \le \int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$. Hence $\int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\theta_n|$ for every representation $\Theta = (\theta_n)$ of $f$.
   - (iv) $\left| \int_{\mathbb{R}} f - \int_{\mathbb{R}} g \right| \le \int_{\mathbb{R}} |f - g|$.
4. (Maximum, minimum, positive part, negative part) Put $\Lambda = \operatorname{alt}(\Phi, \Psi)$ and $\Delta = \operatorname{abs}\bigl(\operatorname{alt}(\Phi, -\Psi)\bigr)$. Then $\max\{f, g\}$, $\min\{f, g\}$, $f^+$, and $f^-$ are Lebesgue integrable, with respective representations
   $$
   \begin{gathered} \tfrac{1}{2} \operatorname{alt}(\Lambda, \Delta), \\ \tfrac{1}{2} \operatorname{alt}(\Lambda, -\Delta), \\ \tfrac{1}{2} \operatorname{alt}\bigl(\Phi, \operatorname{abs}(\Phi)\bigr), \\ \tfrac{1}{2} \operatorname{alt}\bigl(\operatorname{abs}(\Phi), -\Phi\bigr) \end{gathered}
   $$
   Moreover $f = f^+ - f^-$, $|f| = f^+ + f^-$, and
   $$
   \begin{aligned} \int_{\mathbb{R}} \max\{f, g\} &= \tfrac{1}{2} \Bigl( \int_{\mathbb{R}} f + \int_{\mathbb{R}} g \Bigr) \\ &\quad + \tfrac{1}{2} \int_{\mathbb{R}} |f - g|, \\ \int_{\mathbb{R}} \min\{f, g\} &= \tfrac{1}{2} \Bigl( \int_{\mathbb{R}} f + \int_{\mathbb{R}} g \Bigr) \\ &\quad - \tfrac{1}{2} \int_{\mathbb{R}} |f - g|, \\ \int_{\mathbb{R}} f &= \int_{\mathbb{R}} f^+ - \int_{\mathbb{R}} f^- \end{aligned}
   $$
5. (Small representations) If $\varepsilon$ is a positive real, there is a natural number $n$ satisfying both
   $$
   \begin{gathered} \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} |\varphi_m| < \frac{\varepsilon}{2}, \\ \int_{\mathbb{R}} |s_n| < \int_{\mathbb{R}} |f| + \frac{\varepsilon}{2}. \end{gathered}
   $$
   The least such number is denoted $n_\varepsilon$; it is determined by $\Phi$ and $\varepsilon$. $\operatorname{small}_\varepsilon(\Phi) = (\theta_j)$ is a representation of $f$, and
   $$
   \sum_{j=1}^{\infty} \int_{\mathbb{R}} |\theta_j| < \int_{\mathbb{R}} |f| + \varepsilon.
   $$
6. (Tail representations and partial sums) For an integer $n \ge 0$, $\operatorname{tail}_n(\Phi)$ is a representation of $f - s_n$, and
   $$
   \begin{gathered} \int_{\mathbb{R}} (f - s_n) = \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} \varphi_m, \\ \int_{\mathbb{R}} |f - s_n| \le \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} |\varphi_m|. \end{gathered}
   $$
   The sequence whose $n$th term is $\int_{\mathbb{R}} |f - s_n|$ converges to $0$, and the sequence whose $n$th term is $\int_{\mathbb{R}} s_n$ converges to $\int_{\mathbb{R}} f$.
:::

## 직관

르베그 적분가능한 함수를 더하거나 절댓값을 취하면 다시 르베그 적분가능합니다. 이 항목의 진술은 그것만이 아니라 **새 함수의 표현을 원래 표현에서 어떻게 만드는지**를 식으로 적습니다. $f + g$의 표현은 두 표현을 번갈아 늘어놓은 것이고, $|f|$의 표현은 부분합의 절댓값이 늘어난 양 $\gamma_n$으로 만듭니다. 이렇게 식으로 적어 두면, 함수가 끝없이 많을 때에도 함수마다 표현을 하나씩 고르지 않고 주어진 표현들에서 새 표현을 한꺼번에 만들 수 있습니다.

$f + g$의 표현으로 항끼리 더한 열 $(\varphi_n + \psi_n)$을 쓰지 않는 까닭은 조건 B에 있습니다. $(\varphi_n(x) + \psi_n(x))$의 급수가 절대수렴해도 $(\varphi_n(x))$의 급수는 절대수렴하지 않을 수 있고, 그런 점에서는 $f(x)$를 알 수 없습니다. 번갈아 늘어놓으면 절대수렴이 두 열 모두의 절대수렴과 같은 말이 됩니다. $|f|$의 표현에 $\varphi_m$과 $-\varphi_m$을 끼워 넣는 것도 같은 까닭입니다.

작은 표현 (5)는 표현의 앞부분을 부분합 하나로 뭉쳐서, 적분의 절댓값의 합을 $\int_{\mathbb{R}} |f|$에 원하는 만큼 가깝게 만듭니다. 이때 몇 번째까지 뭉칠지를 조건을 만족하는 가장 작은 번호로 정하므로, 새 표현은 $\Phi$와 $\varepsilon$만으로 정해집니다. (6)은 표현의 부분합 $s_n$이 $f$에 "적분의 뜻으로" 다가간다는 것입니다. $s_n(x)$가 $f(x)$로 가지 않는 점이 있을 수 있지만 $\int_{\mathbb{R}} |f - s_n|$은 $0$으로 갑니다.

## 증명

:::idea
모든 진술은 [[lebesgue-integrable-function|앞 항목]]의 (1)–(3)으로 표현을 만들고, 그 (6)에 의해 그 표현으로 적분을 계산하는 것이다. 단조성은 그 (5)이다. 절댓값은 망원 합 $\gamma_1 + \dots + \gamma_m = |s_m|$으로, 작은 표현은 꼬리의 합이 $0$으로 가는 것과 (3)의 (ii)로 보인다.
:::

:::hint
$\operatorname{abs}(\Phi)$의 $2m$번째 부분합은 $|s_m|$이고 $2m - 1$번째 부분합은 $|s_m| + \varphi_m$이다.
:::

:::hint
$\max\{a, b\} = \tfrac{1}{2}(a + b + |a - b|)$이다.
:::

:::proof
아래에서 "앞 항목"은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]], "계단함수 항목"은 [[step-function|계단함수와 그 적분]], "합의 기호 항목"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. 계단함수끼리의 합·차·상수배·절댓값이 계단함수라는 것은 계단함수 항목의 (5)로, 함수의 같음은 [[real-valued-function|실함수와 그 연산]]의 (2)로 확인한다. 앞 항목의 (6)에 의해 르베그 적분은 어느 표현으로 계산해도 된다.

**(1)** 앞 항목의 (3)에 의해 세 열은 각각 $kf$, $f + g$, $f - g$의 표현이므로 세 함수는 르베그 적분가능하다. 그 표현으로 적분을 계산하면 앞 항목의 (3)의 (i), (ii)에 의해 첫째와 둘째 등식이 나오고, $\operatorname{alt}(\Phi, -\Psi)$로 계산하면 $\int_{\mathbb{R}} (f - g) = \int_{\mathbb{R}} f + \bigl(-\int_{\mathbb{R}} g\bigr)$이다.

**(2)** (1)에 의해 $g - f$는 르베그 적분가능하고 $\int_{\mathbb{R}} (g - f) = \int_{\mathbb{R}} g - \int_{\mathbb{R}} f$이다. 모든 $x$에서 $0 \le g(x) - f(x)$이므로 앞 항목의 (5)를 $g - f$의 한 표현에 쓰면 $0 \le \int_{\mathbb{R}} (g - f)$이다. 둘째 문장은 $f$를 영함수, $g$를 $f$로 둔 경우이다(앞 항목의 (7)에 의해 영함수의 적분은 $0$이다).

**(3)** (i) $s_0$은 영함수이므로 $|\gamma_1(x)| = \bigl||s_1(x)|\bigr| = |\varphi_1(x)|$이다. $n \ge 2$이면 [[triangle-inequality|삼각부등식]]의 (2)와 [[finite-sum-of-reals|유한 합]]의 (3)에 의해 $|\gamma_n(x)| = \bigl||s_n(x)| - |s_{n-1}(x)|\bigr| \le |s_n(x) - s_{n-1}(x)| = |\varphi_n(x)|$이다.

$n$번째 항이 $\gamma_n + \varphi_n$인 열을 $\Gamma'$이라 하자. 삼각부등식의 (1)에 의해 $|\gamma_n(x) + \varphi_n(x)| \le 2|\varphi_n(x)|$이므로 계단함수 항목의 (6)의 (i), (ii)에 의해 $0 \le \int_{\mathbb{R}} |\gamma_n + \varphi_n| \le 2 \int_{\mathbb{R}} |\varphi_n|$이다. 비교 판정법([[sum-of-a-series|합의 기호 항목]]의 (4)의 (iii))과 앞 항목의 (1)의 (ii)에 의해 $\operatorname{abs}(\Phi)$의 적분의 절댓값의 급수는 수렴하고(조건 A)
$$
\begin{aligned} \sum_{n=1}^{\infty} \int_{\mathbb{R}} |\rho_n| &= \sum_{m=1}^{\infty} \int_{\mathbb{R}} |\gamma_m + \varphi_m| \\ &\quad + \sum_{m=1}^{\infty} \int_{\mathbb{R}} |\varphi_m| \\ &\le 3 \sum_{m=1}^{\infty} \int_{\mathbb{R}} |\varphi_m| \end{aligned}
$$
이다.

조건 B: 실수 $x$에서 $(\rho_n(x))$의 급수가 절대수렴한다고 하자. 앞 항목의 (1)의 (ii)에 의해 $(-\varphi_m(x))$의 급수가 절대수렴하므로 $(\varphi_m(x))$의 급수가 절대수렴하고, $\Phi$의 조건 B에 의해 $(s_m(x))$는 $f(x)$로 수렴한다. [[telescoping-sum|망원 합]]의 (1)에 의해 $\sum_{j=1}^{m} \gamma_j(x) = |s_m(x)| - |s_0(x)| = |s_m(x)|$이므로, $\Gamma'$의 $m$번째 부분합은 $|s_m(x)| + s_m(x)$이고 $-\Phi$의 $m$번째 부분합은 $-s_m(x)$이다. 앞 항목의 (1)의 (i)에 의해 $(\rho_n(x))$의 부분합 $(R_n)$은 모든 자연수 $m$에서
$$
\begin{aligned} R_{2m} &= |s_m(x)| + s_m(x) - s_m(x) \\ &= |s_m(x)|, \\ R_{2m-1} &= |s_m(x)| + s_m(x) - s_{m-1}(x) \\ &= |s_m(x)| + \varphi_m(x) \end{aligned}
$$
를 만족한다. [[limit-of-absolute-value-and-square-root|절댓값과 제곱근의 극한]]의 (1)에 의해 $(|s_m(x)|)$는 $|f(x)|$로 수렴하고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항]]의 (1)에 의해 $(\varphi_m(x))$는 $0$으로 수렴한다. 양수 $\varepsilon$이 주어지면 $m \ge M$일 때 $\bigl||s_m(x)| - |f(x)|\bigr| < \varepsilon/2$이고 $|\varphi_m(x)| < \varepsilon/2$인 자연수 $M$이 있다(두 수렴이 주는 번호의 합으로 둔다). $n \ge 2M$이면 앞 항목의 (1)의 첫 문장에 의해 $n = 2m$이거나 $n = 2m - 1$인 자연수 $m$이 있고, 어느 경우든 $2m \ge n \ge 2M$이므로 $m \ge M$이며, 삼각부등식의 (1)에 의해 $\bigl|R_n - |f(x)|\bigr| < \varepsilon$이다. 따라서 $(\rho_n(x))$의 급수의 합은 $|f(x)|$이다.

(ii) (i)에 의해 $|f|$는 르베그 적분가능하다. $\operatorname{abs}(\Phi)$로 적분을 계산한다. 위와 같은 계산과 계단함수 항목의 (6)의 (i)에 의해 $n$번째 항이 $\int_{\mathbb{R}} \rho_n$인 수열의 $2m$번째 부분합은
$$
\begin{aligned} &\sum_{j=1}^{m} \int_{\mathbb{R}} (\gamma_j + \varphi_j) - \sum_{j=1}^{m} \int_{\mathbb{R}} \varphi_j \\ &\quad = \int_{\mathbb{R}} \sum_{j=1}^{m} \gamma_j = \int_{\mathbb{R}} |s_m| \end{aligned}
$$
이다(앞 항목의 (1)의 (i)). 앞 항목의 (2)에 의해 그 부분합 수열은 $\int_{\mathbb{R}} |f|$로 수렴하고, $m$번째 항이 $2m$번째 부분합인 수열은 그 부분수열이므로 [[subsequence|부분수열]]의 (3)에 의해 $\int_{\mathbb{R}} |f|$로 수렴한다.

(iii) 모든 $x$에서 $f(x) \le |f(x)|$이고 $-f(x) \le |f(x)|$이므로([[absolute-value]]의 (6)) (2)와 (1)에 의해 $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} |f|$, $-\int_{\mathbb{R}} f \le \int_{\mathbb{R}} |f|$이고, absolute-value 의 (7)에 의해 첫째 부등식이 성립한다. 둘째: [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (5)에 의해 모든 $x$에서 $|s_n(x)| \le \sum_{j=1}^{n} |\varphi_j(x)|$이므로 계단함수 항목의 (6)에 의해 $\int_{\mathbb{R}} |s_n| \le \sum_{j=1}^{n} \int_{\mathbb{R}} |\varphi_j| \le \sum_{j=1}^{\infty} \int_{\mathbb{R}} |\varphi_j|$이다(합의 기호 항목의 (4)의 (ii)). (ii)와 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 둘째 부등식이 성립한다. 마지막 문장은 $\Phi$ 대신 $\Theta$에 같은 논법을 쓴 것이다.

(iv) (1)에 의해 $f - g$는 르베그 적분가능하고 $\int_{\mathbb{R}} f - \int_{\mathbb{R}} g = \int_{\mathbb{R}} (f - g)$이므로 (iii)을 $f - g$에 쓴다.

**(4)** 먼저 실수 $a$, $b$에 대하여 다음을 보인다.

- (가) $\max\{a, b\} = \tfrac{1}{2}(a + b + |a - b|)$이고 $\min\{a, b\} = \tfrac{1}{2}(a + b - |a - b|)$이다.

$a \le b$이면 $|a - b| = b - a$이고(absolute-value 의 (1), (3)) 오른쪽은 각각 $b$와 $a$이며, 이것은 [[absolute-value]]의 최대·최소의 정의와 같다. $b < a$이면 $|a - b| = a - b$이고 오른쪽은 각각 $a$와 $b$이다.

(가)에 의해 $\max\{f, g\} = \tfrac{1}{2}\bigl((f + g) + |f - g|\bigr)$, $\min\{f, g\} = \tfrac{1}{2}\bigl((f + g) - |f - g|\bigr)$이다. (가)에 $b = 0$을 넣고, $-f(x)$에 넣으면 $f^+ = \tfrac{1}{2}(f + |f|)$, $f^- = \tfrac{1}{2}(|f| + (-f))$이다. (1)에 의해 $\Lambda$는 $f + g$의, $\operatorname{alt}(\Phi, -\Psi)$는 $f - g$의 표현이고, (3)의 (i)에 의해 $\Delta$는 $|f - g|$의, $\operatorname{abs}(\Phi)$는 $|f|$의 표현이다. 다시 (1)을 쓰면 네 열이 차례로 네 함수의 표현이다. 적분의 식은 (1)이다. [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 모든 $x$에서 $f(x) = f^+(x) - f^-(x)$, $|f(x)| = f^+(x) + f^-(x)$이고, 마지막 등식은 (1)이다.

**(5)** 조건 A의 합을 $P$라 하고 $T_n = \sum_{m=n+1}^{\infty} \int_{\mathbb{R}} |\varphi_m|$이라 하자. 합의 기호 항목의 (2)에 의해 $T_n = P - \sum_{m=1}^{n} \int_{\mathbb{R}} |\varphi_m|$이므로 합의 기호 항목의 (1)과 [[limit-of-sum-and-product|합과 곱의 극한]]의 (2)에 의해 $(T_n)$은 $0$으로 수렴한다. 그래서 $n \ge N_1$이면 $T_n < \varepsilon/2$인 자연수 $N_1$이 있다([[limit-of-sequence|수열의 극한]]의 (1)). (3)의 (ii)에 의해 $n \ge N_2$이면 $\int_{\mathbb{R}} |s_n| < \int_{\mathbb{R}} |f| + \varepsilon/2$인 $N_2$가 있다(수열의 극한의 (1)). $N_1 + N_2$는 두 조건을 모두 만족하므로 조건을 만족하는 자연수의 집합은 공집합이 아니고, [[well-ordering-principle|정렬 원리]]에 의해 가장 작은 원소 $n_\varepsilon$이 하나로 정해진다.

$n_\varepsilon$을 $N$으로 줄여 쓴다. $\theta_1 = s_N$이고 $j \ge 2$이면 $\theta_j = \varphi_{N + j - 1}$이다. $(\theta_j)$의 $1$-꼬리는 $\operatorname{tail}_N(\Phi)$이다. 조건 A: 합의 기호 항목의 (7)과 (2)에 의해 $(\int_{\mathbb{R}} |\theta_j|)$의 급수는 수렴하고
$$
\begin{aligned} \sum_{j=1}^{\infty} \int_{\mathbb{R}} |\theta_j| &= \int_{\mathbb{R}} |s_N| + T_N \\ &< \int_{\mathbb{R}} |f| + \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \end{aligned}
$$
이다. 조건 B: $x$에서 $(\theta_j(x))$의 급수가 절대수렴하면 합의 기호 항목의 (2)와 (7)에 의해 $(\varphi_m(x))$의 급수의 $N$-꼬리가 절대수렴하므로 $(\varphi_m(x))$의 급수가 절대수렴하고, $\Phi$의 조건 B와 합의 기호 항목의 (2)에 의해
$$
\begin{aligned} f(x) &= s_N(x) + \sum_{m=N+1}^{\infty} \varphi_m(x) \\ &= \theta_1(x) + \sum_{j=2}^{\infty} \theta_j(x) \\ &= \sum_{j=1}^{\infty} \theta_j(x) \end{aligned}
$$
이다.

**(6)** $s_n$은 계단함수이므로 앞 항목의 (7)에 의해 르베그 적분가능하고 $\int_{\mathbb{R}} s_n = \sum_{j=1}^{n} \int_{\mathbb{R}} \varphi_j$이다(계단함수 항목의 (6)의 (i)). 조건 A: $\operatorname{tail}_n(\Phi)$의 적분의 절댓값의 급수는 $\Phi$의 것의 $n$-꼬리이므로 합의 기호 항목의 (2)에 의해 수렴한다($n = 0$이면 $\Phi$ 자신이다). 조건 B: $x$에서 $(\varphi_{n+j}(x))_j$의 급수가 절대수렴하면 같은 까닭으로 $(\varphi_m(x))$의 급수가 절대수렴하고, $\Phi$의 조건 B와 합의 기호 항목의 (2)에 의해 $f(x) - s_n(x) = \sum_{m=n+1}^{\infty} \varphi_m(x)$이다. 따라서 $\operatorname{tail}_n(\Phi)$는 $f - s_n$의 표현이고, 이것으로 적분을 계산하면 첫째 등식이 나온다. 둘째 부등식은 (3)의 (iii)의 마지막 문장이다. (2)에 의해 $0 \le \int_{\mathbb{R}} |f - s_n|$이고, (5)의 증명에서처럼 $(T_n)$이 $0$으로 수렴하므로 [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)에 의해 $(\int_{\mathbb{R}} |f - s_n|)$은 $0$으로 수렴한다. 마지막 문장은 $\int_{\mathbb{R}} s_n = \sum_{j=1}^{n} \int_{\mathbb{R}} \varphi_j$와 합의 기호 항목의 (1)이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 칸에서 부호가 다른 함수의 절댓값 표현]
$f = \chi_{[0, 1)} - \chi_{[1, 2)}$의 표현으로 $\varphi_1 = \chi_{[0, 1)}$, $\varphi_2 = -\chi_{[1, 2)}$, $n \ge 3$이면 $\varphi_n = 0$인 열을 잡습니다. $s_1 = \chi_{[0, 1)}$, $s_2 = f$이고 $|s_2| = \chi_{[0, 2)}$이므로 $\gamma_1 = \chi_{[0, 1)}$, $\gamma_2 = \chi_{[0, 2)} - \chi_{[0, 1)} = \chi_{[1, 2)}$이고 $n \ge 3$이면 $\gamma_n = 0$입니다. 그래서 $\operatorname{abs}(\Phi)$의 처음 네 항은 $2\chi_{[0, 1)}$, $-\chi_{[0, 1)}$, $0$, $\chi_{[1, 2)}$이고 나머지는 $0$입니다. 네 항을 더하면 $\chi_{[0, 1)} + \chi_{[1, 2)} = \chi_{[0, 2)} = |f|$이고, 적분의 합은 $2 - 1 + 0 + 1 = 2 = \int_{\mathbb{R}} |f|$입니다. 한편 $\int_{\mathbb{R}} f = 1 - 1 = 0$이므로 (3)의 (iii)의 첫 부등식 $|0| \le 2$는 등호가 아닙니다.
:::

:::example[앞의 두 항을 뭉친 작은 표현]
$f = \chi_{[0, 1)}$의 표현으로 $\varphi_1 = \chi_{[0, 2)}$, $\varphi_2 = -\chi_{[1, 2)}$, $n \ge 3$이면 $\varphi_n = 0$인 열을 잡고 $\varepsilon = 1$로 둡니다. $\int_{\mathbb{R}} |f| = 1$입니다. $n = 1$이면 꼬리의 합이 $\int_{\mathbb{R}} |\varphi_2| = 1$이어서 $1/2$보다 작지 않습니다. $n = 2$이면 꼬리의 합이 $0$이고 $\int_{\mathbb{R}} |s_2| = \int_{\mathbb{R}} \chi_{[0, 1)} = 1 < 3/2$입니다. 그래서 $n_1 = 2$이고, $\operatorname{small}_1(\Phi)$는 첫째 항이 $\chi_{[0, 1)}$이고 나머지가 $0$인 열입니다. 그 적분의 절댓값의 합은 $1 < 1 + 1$이고, 원래 표현의 합은 $2 + 1 = 3$이었습니다.
:::

:::counterexample[적분의 절댓값의 합이 ∫|f| 보다 큰 표현의 예]
$f = \chi_{[0, 1)}$의 표현으로 $\chi_{[0, 1)}$, $\chi_{[0, 1)}$, $-\chi_{[0, 1)}$, $0$, $0$, …을 잡으면 모든 점에서 절대수렴하고 합이 $f$이므로 표현입니다. 그 적분의 절댓값의 합은 $3$이고 $\int_{\mathbb{R}} |f| = 1$입니다. (3)의 (iii)의 둘째 부등식은 등호가 아닐 수 있고, 같은 함수의 표현이라도 적분의 절댓값의 합은 표현에 따라 다를 수 있습니다. 적분 자체는 $1 + 1 - 1 = 1$로 같습니다.
:::

## 확인 질문

:::check[0 이상 1 미만에서 1, 1 이상 3 미만에서 −2, 나머지에서 0 인 함수의 양의 부분과 음의 부분의 적분은?]
그 함수는 $f = \chi_{[0, 1)} - 2\chi_{[1, 3)}$입니다. $f^+ = \chi_{[0, 1)}$이고 $f^- = 2\chi_{[1, 3)}$입니다. $x \in [0, 1)$이면 $f(x) = 1$, $x \in [1, 3)$이면 $f(x) = -2$, 그 밖에서는 $0$이기 때문입니다. 그래서 $\int_{\mathbb{R}} f^+ = 1$, $\int_{\mathbb{R}} f^- = 2 \cdot 2 = 4$이고, (4)에 의해 $\int_{\mathbb{R}} f = 1 - 4 = -3$, $\int_{\mathbb{R}} |f| = 1 + 4 = 5$입니다.
:::

:::check[르베그 적분가능한 f, g 에 대하여 max{f, g} 와 min{f, g} 의 적분을 더하면?]
$\int_{\mathbb{R}} f + \int_{\mathbb{R}} g$입니다. (4)의 두 식을 더하면 $\int_{\mathbb{R}} |f - g|$가 지워집니다. 모든 $x$에서 $\max\{f(x), g(x)\} + \min\{f(x), g(x)\} = f(x) + g(x)$라는 것과 (1)로 보아도 같습니다.
:::
