---
title: 표현족과 르베그 적분가능한 함수의 급수
title_en: Representation Families and Series of Lebesgue Integrable Functions
aliases: [표현족, 항별 표현, 르베그 적분가능한 함수의 급수, 절대수렴하는 이중급수, representation family, series of integrable functions]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 함수열의 각 항의 표현을 한 번에 주는 표현족을 정의하고, 표현족이 주어진 르베그 적분가능한 함수열의 적분의 절댓값의 급수가 수렴하면 그 급수로 나타나는 함수가 르베그 적분가능하고 적분을 항별로 더할 수 있다는 것을 작은 표현을 짝짓기 함수로 늘어놓은 식으로 증명한다. 꼬리의 어림, 절대수렴하지 않는 점의 영 덮개열, 절대수렴하는 실수 이중급수의 순서 바꾸기도 함께 다룬다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, comparison-with-null-sequence, series-and-partial-sums, absolute-convergence, sum-of-a-series, linearity-of-series, comparison-test, tail-of-a-series, geometric-series, positive-and-negative-parts, real-valued-function, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, null-set-of-reals, lebesgue-integrable-function, properties-of-the-lebesgue-integral, null-functions-and-almost-everywhere, riemann-integrable-is-lebesgue-integrable]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "3절 Theorem 3.9 (p.8), Corollary 3.11 (p.9); 4절 Theorem 4.7 (p.10–11); 5절 Theorem 5.9 (p.12–13), Corollary 5.10 (p.13)"
    checked: original
    note: "출처 Theorem 3.9(p.8)는 f ≃ Σf_n 이고 f_n 이 U* 의 원소(르베그 적분가능)이면 f 가 르베그 적분가능하고 ∫f = Σ∫f_n 이라는 것이다. 출처의 증명은 'Choose g_in ∈ U … such that f_i ≃ Σ_n g_in and Σ_n ∫|g_in| ≤ ∫|f_i| + 2^{−i}' 로 i 마다 표현을 고르고, 'Let (h_n) be a sequence arranged from all the functions g_in' 이라 적어 늘어놓는 법을 정하지 않으며, 그 열이 f 의 표현이라는 것을 'Then clearly' 로 적는다. 이 항목은 표현이 표현족으로 주어진 꼴로 진술을 좁히고, 고르는 대신 작은 표현(properties-of-the-lebesgue-integral 의 (5))을 쓰고, 짝짓기 함수로 늘어놓으며, 조건 B 를 (1)의 이중급수의 순서 바꾸기로 증명한다. 이 항목의 '항별 표현'은 출처가 항이 U* 의 원소인 f ≃ Σf_n 으로 쓰는 것이다. (3)은 Corollary 3.11(p.9, Σ∫|f_n| < ∞ 이면 절대수렴하는 점에서 합, 아니면 0 으로 정한 함수에 대하여 f ≃ Σf_n)을 표현족이 주어진 꼴로 좁힌 것이다. 출처는 3절 끝(p.9)부터 완비 다니엘 공간을 가정하므로 Theorem 4.7(p.10–11), Theorem 5.9(p.12–13), Corollary 5.10(p.13)의 항 f_n 은 U 의 원소이고, 계단함수에서 만든 공간으로 읽으면 항이 U* 의 원소(르베그 적분가능)인 경우이다. (4)는 Theorem 4.7 을, (5)는 Theorem 5.9 와 Corollary 5.10 을 그런 항에 대해 표현족을 써서 진술한 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(아르첼라의 출처 주장을 Lebl I 6.2.2 각주와 다섯 출처의 검색으로 대조, 수렴 정리의 예외 집합 가정 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
르베그 적분가능, 표현, $\int_{\mathbb{R}}$은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 작은 표현 $\operatorname{small}_\varepsilon$은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 것이다. 영집합, 영 덮개열, 계단함수열의 표준 영 덮개열은 [[null-set-of-reals|ℝ 의 영집합]]의 것이다. 짝짓기 함수 $\pi$와 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]], $[0, \infty]$의 원소열과 이중첨수 원소열의 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]과 [[nonnegative-double-series|0 이상인 이중급수]]의 것이다. 급수의 수렴, 절대수렴, 합의 기호는 [[series-and-partial-sums]], [[absolute-convergence]], [[sum-of-a-series|급수의 합의 기호]]의 것이다. 아래에서 $(f_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열이다.

**표현족.** 자연수 $n$마다 계단함수의 열 $\Phi_n = (\varphi_{n,k})_k$를 주는 함수 $(\Phi_n)_n$, 곧 자연수의 쌍 $(n, k)$마다 계단함수 $\varphi_{n,k}$를 주는 함수로서 모든 자연수 $n$에서 $\Phi_n$이 $f_n$의 표현인 것을 $(f_n)$의 **표현족**(representation family)이라 한다. 표현족이 있으면 모든 $f_n$은 르베그 적분가능하다.

**항별 표현.** 모든 $f_n$이 르베그 적분가능하다고 하자. $f : \mathbb{R} \to \mathbb{R}$에 대하여 $(f_n)$이 $f$의 **항별 표현**인 것은 정확히 다음 두 조건이 성립할 때이다.

- $n$번째 항이 $\int_{\mathbb{R}} |f_n|$인 수열의 급수가 수렴한다.
- 실수 $x$에서 $n$번째 항이 $f_n(x)$인 수열의 급수가 절대수렴하면 $f(x) = \sum_{n=1}^{\infty} f_n(x)$이다.

**급수의 표현.** $(\Phi_n)$이 $(f_n)$의 표현족이고 $\varepsilon$이 양의 실수일 때, 자연수 $n$마다 $\Theta^n = (\theta_{n,k})_k = \operatorname{small}_{\varepsilon (1/2)^n}(\Phi_n)$으로 두고, 자연수 $m$마다 $\rho_m = \theta_{\kappa_1(m), \kappa_2(m)}$으로 정한 계단함수의 열 $(\rho_m)$을 $(\Phi_n)$과 $\varepsilon$으로 만든 **급수의 표현**이라 하고 $\operatorname{ser}_\varepsilon(\Phi_n)$으로 쓴다.

다음이 성립한다.

1. (절대수렴하는 이중급수) 함수 $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$에 대하여 $a(n, k)$를 $a_{n,k}$로 쓰고, $m$번째 항이 $|a_{\kappa_1(m), \kappa_2(m)}|$인 수열의 급수가 수렴한다고 하자. 그러면 모든 $n$에서 $k$번째 항이 $a_{n,k}$인 수열의 급수가 절대수렴하고, $n$번째 항이 $\sum_{k=1}^{\infty} a_{n,k}$인 수열의 급수도 절대수렴하며
   $$
   \begin{gathered} \sum_{m=1}^{\infty} a_{\kappa_1(m), \kappa_2(m)} = \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} a_{n,k}, \\ \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} |a_{n,k}| = \sum_{m=1}^{\infty} |a_{\kappa_1(m), \kappa_2(m)}| \end{gathered}
   $$
   이다.
2. (급수의 표현) $(\Phi_n)$이 $(f_n)$의 표현족이고, $n$번째 항이 $\int_{\mathbb{R}} |f_n|$인 수열의 급수가 수렴하며, $\varepsilon$이 양의 실수이고, $(\rho_m) = \operatorname{ser}_\varepsilon(\Phi_n)$이라 하자.
   - (i) $m$번째 항이 $\int_{\mathbb{R}} |\rho_m|$인 수열의 급수는 수렴하고 $\sum_{m=1}^{\infty} \int_{\mathbb{R}} |\rho_m| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n| + \varepsilon$이다.
   - (ii) 실수 $x$에서 $(\rho_m(x))$의 급수가 절대수렴하면, $(f_n(x))$의 급수도 절대수렴하고 $\sum_{m=1}^{\infty} \rho_m(x) = \sum_{n=1}^{\infty} f_n(x)$이다.
   - (iii) $(f_n)$이 $f$의 항별 표현이면 $(\rho_m)$은 $f$의 표현이다. 따라서 $f$는 르베그 적분가능하고 $\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} \int_{\mathbb{R}} f_n$이다.
3. (식으로 정한 합) (2)의 처음 두 가정 아래, 실수 $x$에서 $(f_n(x))$의 급수가 절대수렴하면 $f^{\Sigma}(x) = \sum_{n=1}^{\infty} f_n(x)$, 아니면 $f^{\Sigma}(x) = 0$으로 정한 함수 $f^{\Sigma} : \mathbb{R} \to \mathbb{R}$에 대하여 $(f_n)$은 $f^{\Sigma}$의 항별 표현이다. 따라서 $f^{\Sigma}$는 르베그 적분가능하고 $\operatorname{ser}_1(\Phi_n)$이 그 표현이다.
4. (꼬리) (2)의 처음 두 가정 아래 $(f_n)$이 $f$의 항별 표현이라 하자.
   - (i) $\int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n|$이다.
   - (ii) $0$ 이상인 정수 $N$에 대하여, $j$번째 항이 $f_{N+j}$인 함수열은 $f - \sum_{n=1}^{N} f_n$의 항별 표현이고 $(\Phi_{N+j})_j$가 그 표현족이며
     $$
     \begin{aligned} &\int_{\mathbb{R}} \Bigl| f - \sum_{n=1}^{N} f_n \Bigr| \\ &\quad \le \sum_{n=N+1}^{\infty} \int_{\mathbb{R}} |f_n| \end{aligned}
     $$
     이다. 여기서 $\sum_{n=1}^{N} f_n$은 $x$에서의 값이 $\sum_{n=1}^{N} f_n(x)$인 함수이다.
   - (iii) $N$번째 항이 $\int_{\mathbb{R}} \bigl| f - \sum_{n=1}^{N} f_n \bigr|$인 수열은 $0$으로 수렴하고, $N$번째 항이 $\sum_{n=1}^{N} \int_{\mathbb{R}} f_n$인 수열은 $\int_{\mathbb{R}} f$로 수렴한다.
5. (절대수렴하지 않는 점) (2)의 처음 두 가정 아래 $(\rho_m) = \operatorname{ser}_1(\Phi_n)$이라 하고, $(\rho_m(x))$의 급수가 절대수렴하지 않는 실수 $x$ 전체의 집합을 $N$이라 하자. 그러면 $N$은 영집합이고 $(|\rho_m|)$의 표준 영 덮개열이 그 영 덮개열이다. $N$ 밖의 모든 $x$에서 $(f_n(x))$의 급수는 절대수렴하고, $(f_n)$이 $f$의 항별 표현이면 $f(x) = \sum_{n=1}^{\infty} f_n(x)$이다.
6. (표현족이 식으로 주어지는 경우)
   - (i) 모든 $f_n$이 계단함수이면, $\varphi_{n,1} = f_n$이고 $k \ge 2$이면 $\varphi_{n,k}$가 영함수인 $(\Phi_n)_n$($\Phi_n = (\varphi_{n,k})_k$)은 $(f_n)$의 표현족이다.
   - (ii) $a < b$이고 자연수 $n$마다 리만 적분가능한 $g_n : [a, b] \to \mathbb{R}$가 정해져 있으면, $n$번째 항이 $g_n$의 표준 표현인 열은 $0$으로 늘인 함수의 열 $(\hat{g_n})$의 표현족이다([[riemann-integrable-is-lebesgue-integrable|리만 적분가능한 함수의 르베그 적분]]의 (3)).
   - (iii) $(\Phi_n)$, $(\Psi_n)$이 $(f_n)$, $(g_n)$의 표현족이고 $k$가 실수이면, $(k\Phi_n)_n$, $(\operatorname{alt}(\Phi_n, \Psi_n))_n$, $(\operatorname{alt}(\Phi_n, -\Psi_n))_n$은 각각 $(kf_n)$, $(f_n + g_n)$, $(f_n - g_n)$의 표현족이다. 또 르베그 적분의 선형성·단조성·절댓값의 (3), (4)의 식을 $n$마다 쓴 것은 $(|f_n|)$, $(\max\{f_n, g_n\})$, $(\min\{f_n, g_n\})$의 표현족이다.
:::

:::english
Lebesgue integrability, representations, and $\int_{\mathbb{R}}$ are as in the entry on Lebesgue integrable functions, and the small representation $\operatorname{small}_\varepsilon$ is as in the entry on properties of the Lebesgue integral. Null sets, null cover sequences, and the standard null cover sequence of a sequence of step functions are as in the entry on null sets of real numbers. The pairing function $\pi$ with $\kappa_1$, $\kappa_2$, and sums of sequences and double-indexed sequences in $[0, \infty]$ are as in the corresponding entries. Convergence of series, absolute convergence, and the notation for sums are as in the corresponding entries. Below, $(f_n)$ is a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$.

**Representation families.** A function $(\Phi_n)_n$ assigning to each natural number $n$ a sequence of step functions $\Phi_n = (\varphi_{n,k})_k$, that is, a function assigning a step function $\varphi_{n,k}$ to each pair $(n, k)$, such that $\Phi_n$ is a representation of $f_n$ for every natural number $n$, is called a **representation family** of $(f_n)$. If a representation family exists, every $f_n$ is Lebesgue integrable.

**Termwise representations.** Suppose every $f_n$ is Lebesgue integrable. For $f : \mathbb{R} \to \mathbb{R}$, $(f_n)$ is a **termwise representation** of $f$ precisely when the following two conditions hold.

- The series of the sequence whose $n$th term is $\int_{\mathbb{R}} |f_n|$ converges.
- If, at a real number $x$, the series of the sequence whose $n$th term is $f_n(x)$ converges absolutely, then $f(x) = \sum_{n=1}^{\infty} f_n(x)$.

**The representation of a series.** When $(\Phi_n)$ is a representation family of $(f_n)$ and $\varepsilon$ is a positive real, put $\Theta^n = (\theta_{n,k})_k = \operatorname{small}_{\varepsilon (1/2)^n}(\Phi_n)$ for each natural number $n$. The sequence of step functions $(\rho_m)$ defined by $\rho_m = \theta_{\kappa_1(m), \kappa_2(m)}$ for each natural number $m$ is called the **representation of the series** made from $(\Phi_n)$ and $\varepsilon$, and is written $\operatorname{ser}_\varepsilon(\Phi_n)$.

The following hold.

1. (Absolutely convergent double series) For a function $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ write $a_{n,k}$ for $a(n, k)$, and suppose the series of the sequence whose $m$th term is $|a_{\kappa_1(m), \kappa_2(m)}|$ converges. Then for every $n$ the series of the sequence whose $k$th term is $a_{n,k}$ converges absolutely, the series of the sequence whose $n$th term is $\sum_{k=1}^{\infty} a_{n,k}$ also converges absolutely, and
   $$
   \begin{gathered} \sum_{m=1}^{\infty} a_{\kappa_1(m), \kappa_2(m)} = \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} a_{n,k}, \\ \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} |a_{n,k}| = \sum_{m=1}^{\infty} |a_{\kappa_1(m), \kappa_2(m)}|. \end{gathered}
   $$
2. (The representation of a series) Let $(\Phi_n)$ be a representation family of $(f_n)$, suppose the series of the sequence whose $n$th term is $\int_{\mathbb{R}} |f_n|$ converges, let $\varepsilon$ be a positive real, and let $(\rho_m) = \operatorname{ser}_\varepsilon(\Phi_n)$.
   - (i) The series of the sequence whose $m$th term is $\int_{\mathbb{R}} |\rho_m|$ converges and $\sum_{m=1}^{\infty} \int_{\mathbb{R}} |\rho_m| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n| + \varepsilon$.
   - (ii) If, at a real number $x$, the series of $(\rho_m(x))$ converges absolutely, then the series of $(f_n(x))$ also converges absolutely and $\sum_{m=1}^{\infty} \rho_m(x) = \sum_{n=1}^{\infty} f_n(x)$.
   - (iii) If $(f_n)$ is a termwise representation of $f$, then $(\rho_m)$ is a representation of $f$. Hence $f$ is Lebesgue integrable and $\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} \int_{\mathbb{R}} f_n$.
3. (The sum defined by a formula) Under the first two assumptions of (2), for the function $f^{\Sigma} : \mathbb{R} \to \mathbb{R}$ defined by $f^{\Sigma}(x) = \sum_{n=1}^{\infty} f_n(x)$ if the series of $(f_n(x))$ converges absolutely and $f^{\Sigma}(x) = 0$ otherwise, $(f_n)$ is a termwise representation of $f^{\Sigma}$. Hence $f^{\Sigma}$ is Lebesgue integrable and $\operatorname{ser}_1(\Phi_n)$ is a representation of it.
4. (Tails) Under the first two assumptions of (2), let $(f_n)$ be a termwise representation of $f$.
   - (i) $\int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n|$.
   - (ii) For an integer $N \ge 0$, the sequence of functions whose $j$th term is $f_{N+j}$ is a termwise representation of $f - \sum_{n=1}^{N} f_n$, $(\Phi_{N+j})_j$ is a representation family of it, and
     $$
     \begin{aligned} &\int_{\mathbb{R}} \Bigl| f - \sum_{n=1}^{N} f_n \Bigr| \\ &\quad \le \sum_{n=N+1}^{\infty} \int_{\mathbb{R}} |f_n|. \end{aligned}
     $$
     Here $\sum_{n=1}^{N} f_n$ is the function whose value at $x$ is $\sum_{n=1}^{N} f_n(x)$.
   - (iii) The sequence whose $N$th term is $\int_{\mathbb{R}} \bigl| f - \sum_{n=1}^{N} f_n \bigr|$ converges to $0$, and the sequence whose $N$th term is $\sum_{n=1}^{N} \int_{\mathbb{R}} f_n$ converges to $\int_{\mathbb{R}} f$.
5. (Points of non-absolute convergence) Under the first two assumptions of (2), let $(\rho_m) = \operatorname{ser}_1(\Phi_n)$ and let $N$ be the set of all real $x$ at which the series of $(\rho_m(x))$ does not converge absolutely. Then $N$ is a null set and the standard null cover sequence of $(|\rho_m|)$ is a null cover sequence of it. At every $x$ outside $N$ the series of $(f_n(x))$ converges absolutely, and if $(f_n)$ is a termwise representation of $f$, then $f(x) = \sum_{n=1}^{\infty} f_n(x)$.
6. (Representation families given by formulas)
   - (i) If every $f_n$ is a step function, then $(\Phi_n)_n$ with $\Phi_n = (\varphi_{n,k})_k$, $\varphi_{n,1} = f_n$ and $\varphi_{n,k}$ the zero function for $k \ge 2$ is a representation family of $(f_n)$.
   - (ii) If $a < b$ and a Riemann integrable $g_n : [a, b] \to \mathbb{R}$ is given for each natural number $n$, then the sequence whose $n$th term is the standard representation of $g_n$ is a representation family of the sequence of extensions by zero $(\hat{g_n})$ (item (3) of the entry on the Lebesgue integral of a Riemann integrable function).
   - (iii) If $(\Phi_n)$, $(\Psi_n)$ are representation families of $(f_n)$, $(g_n)$ and $k$ is real, then $(k\Phi_n)_n$, $(\operatorname{alt}(\Phi_n, \Psi_n))_n$, and $(\operatorname{alt}(\Phi_n, -\Psi_n))_n$ are representation families of $(kf_n)$, $(f_n + g_n)$, and $(f_n - g_n)$, respectively. Moreover, applying for each $n$ the formulas of items (3) and (4) of the entry on properties of the Lebesgue integral gives representation families of $(|f_n|)$, $(\max\{f_n, g_n\})$, and $(\min\{f_n, g_n\})$.
:::

## 직관

함수 하나가 르베그 적분가능하다는 것은 "표현이 있다"는 것입니다. 함수가 끝없이 많을 때 "모든 $f_n$이 르베그 적분가능하다"는 것만 알면, 각 $f_n$의 표현을 실제로 하나씩 손에 쥐려면 끝없이 많은 선택이 필요합니다. 표현족은 그 표현들이 처음부터 한 묶음으로 주어져 있다는 가정입니다. 서랍마다 열쇠가 있다는 것을 아는 것과, 열쇠 꾸러미 하나를 받는 것의 차이와 같습니다. 꾸러미가 표현족이고, 꾸러미에서 $n$번째 열쇠를 꺼내는 것은 고르는 일이 아닙니다.

표현족이 있으면 함수들의 급수도 계단함수의 급수로 바꿔 쓸 수 있습니다. 각 $f_n$의 표현을 적분의 절댓값의 합이 $\int_{\mathbb{R}} |f_n|$보다 조금만 크도록 줄이고(작은 표현), 그 계단함수들을 짝짓기 함수로 한 줄로 늘어놓으면 됩니다. 줄이는 양을 $\varepsilon/2$, $\varepsilon/4$, …로 잡으므로 늘어놓은 열의 적분의 절댓값의 합이 유한하고, 이것이 (2)입니다.

(4)는 급수의 꼬리가 적분의 뜻으로 작아진다는 것이고, (5)는 급수가 절대수렴하지 않는 점이 작은 집합이라는 것입니다. 둘 다 뒤의 수렴 정리가 함수열의 극한을 다룰 때 씁니다. (6)은 표현족을 따로 가정하지 않아도 되는 경우입니다. 계단함수의 열과 리만 적분가능한 함수의 열에는 표현족이 식으로 주어집니다.

## 증명

:::idea
(1)은 양의 부분과 음의 부분에 0 이상인 이중급수의 순서 바꾸기를 따로 쓴다. (2)는 작은 표현들을 늘어놓은 열이 조건 A를 만족하고, 그 열이 절대수렴하는 점에서는 (1)에 의해 행마다 더해도 된다는 것이다.
:::

:::hint
$\rho_m$의 적분의 절댓값을 행 $n$마다 더하면 $\int_{\mathbb{R}} |f_n| + \varepsilon (1/2)^n$보다 작다.
:::

:::proof
아래에서 "확장된 합 항목"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], "이중급수 항목"은 [[nonnegative-double-series|0 이상인 이중급수]], "합의 기호 항목"은 [[sum-of-a-series|급수의 합의 기호]], "성질 항목"은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]], "앞 항목"은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 번호이다. 항이 $0$ 이상인 실수일 때 급수의 수렴과 합은 확장된 합 항목의 (3)에 의해 $[0, \infty]$의 합이 실수라는 것과 그 값으로 바꿔 읽는다.

**(1)** 자연수 $n$, $k$에 대하여 $p_{n,k} = \max\{a_{n,k}, 0\}$, $q_{n,k} = \max\{-a_{n,k}, 0\}$로 두면 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 $a_{n,k} = p_{n,k} - q_{n,k}$, $|a_{n,k}| = p_{n,k} + q_{n,k}$이고 $0 \le p_{n,k}, q_{n,k} \le |a_{n,k}|$이다. $S = \sum_{m=1}^{\infty} |a_{\kappa_1(m), \kappa_2(m)}|$로 두자. 확장된 합 항목의 (5)에 의해 $p$와 $q$를 $\pi$로 한 줄로 늘어놓은 원소열의 합은 $S$ 이하이므로, 이중급수 항목의 (2)에 의해 $p$와 $q$의 공통의 값은 실수이다. 이중급수 항목의 (4)의 (i)에 의해 모든 $n$에서 $(p_{n,k})_k$, $(q_{n,k})_k$의 급수가 수렴하고, $n$번째 항이 그 합인 두 수열의 급수가 수렴하며
$$
\begin{gathered} \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} p_{n,k} = \sum_{m=1}^{\infty} p_{\kappa_1(m), \kappa_2(m)}, \\ \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} q_{n,k} = \sum_{m=1}^{\infty} q_{\kappa_1(m), \kappa_2(m)} \end{gathered}
$$
이다. [[linearity-of-series|급수의 선형성]]의 (3), (4)에 의해 $(a_{n,k})_k$와 $(|a_{n,k}|)_k$의 급수가 수렴하고 $\sum_k a_{n,k} = \sum_k p_{n,k} - \sum_k q_{n,k}$이며, $n$에 대한 급수도 수렴해 $\sum_n \sum_k a_{n,k} = \sum_m p_{\kappa(m)} - \sum_m q_{\kappa(m)}$이다($\kappa(m)$은 $(\kappa_1(m), \kappa_2(m))$의 줄임). $b_m = a_{\kappa(m)}$으로 두면 $b_m$의 양의 부분과 음의 부분이 $p_{\kappa(m)}$, $q_{\kappa(m)}$이고 $(b_m)$의 급수는 절대수렴하므로, 양의 부분과 음의 부분의 (2)에 의해 이 값은 $\sum_m b_m$이다. 같은 방식으로 $|a|$에 이중급수 항목의 (4)의 (i)을 쓰면 $\sum_n \sum_k |a_{n,k}| = S$이다. $|\sum_k a_{n,k}| \le \sum_k |a_{n,k}|$([[absolute-convergence|절대수렴]]의 (2))와 [[comparison-test|비교 판정법]]의 (2)에 의해 $n$번째 항이 $\sum_k a_{n,k}$인 수열의 급수는 절대수렴한다.

**(2)** 각 $n$에서 $\varepsilon(1/2)^n$은 양수이므로 성질 항목의 (5)에 의해 $\Theta^n$은 $f_n$의 표현이고 $\sum_{k=1}^{\infty} \int_{\mathbb{R}} |\theta_{n,k}| < \int_{\mathbb{R}} |f_n| + \varepsilon (1/2)^n$이다. 작은 표현은 표현과 양수로 정해지므로 $\theta_{n,k}$는 $(n, k)$에 대한 이미 정해진 계단함수이다.

(i) 이중급수 항목의 (2)를 $\int_{\mathbb{R}} |\theta_{n,k}|$에 쓰고, 확장된 합 항목의 (5)와 [[geometric-series|등비급수]]의 (2)를 쓰면
$$
\begin{aligned} \sum_{m=1}^{\infty} \int_{\mathbb{R}} |\rho_m| &= \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} \int_{\mathbb{R}} |\theta_{n,k}| \\ &\le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n| + \varepsilon \end{aligned}
$$
이다(확장된 합 항목의 (5)로 두 원소열의 합을 나누었다. $\sum_{n=1}^{\infty} \varepsilon (1/2)^n = \varepsilon$이다).

(ii) $a_{n,k} = \theta_{n,k}(x)$로 두면 가정은 (1)의 가정이다. (1)에 의해 각 $n$에서 $(\theta_{n,k}(x))_k$의 급수가 절대수렴하므로, $\Theta^n$이 $f_n$의 표현이라는 것(조건 B)에 의해 그 합은 $f_n(x)$이다. (1)에 의해 $(f_n(x))$의 급수는 절대수렴하고 $\sum_m \rho_m(x) = \sum_n f_n(x)$이다.

(iii) (i)에 의해 조건 A가 성립한다. $x$에서 $(\rho_m(x))$의 급수가 절대수렴하면 (ii)에 의해 $(f_n(x))$의 급수가 절대수렴하므로 항별 표현의 둘째 조건에 의해 $f(x) = \sum_n f_n(x) = \sum_m \rho_m(x)$이다. 따라서 $(\rho_m)$은 $f$의 표현이다. $a_{n,k} = \int_{\mathbb{R}} \theta_{n,k}$로 두면 [[step-function|계단함수 항목]]의 (6)의 (iii)에 의해 $|a_{n,k}| \le \int_{\mathbb{R}} |\theta_{n,k}|$이므로 비교 판정법의 (2)와 (i)에 의해 (1)의 가정이 성립한다. (1)과 앞 항목의 (6)(각 $\Theta^n$으로 계산한 적분은 $\int_{\mathbb{R}} f_n$)에 의해 $\int_{\mathbb{R}} f = \sum_m \int_{\mathbb{R}} \rho_m = \sum_n \sum_k \int_{\mathbb{R}} \theta_{n,k} = \sum_n \int_{\mathbb{R}} f_n$이다.

**(3)** 첫째 조건은 가정이고, 둘째 조건은 $f^{\Sigma}$의 정의이다. 나머지는 (2)의 (iii)이다.

**(4)** (i) 모든 양수 $\varepsilon$에서 (2)의 (iii)과 성질 항목의 (3)의 (iii)의 마지막 문장에 의해 $\int_{\mathbb{R}} |f| \le \sum_m \int_{\mathbb{R}} |\rho_m| \le \sum_n \int_{\mathbb{R}} |f_n| + \varepsilon$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (9)에 의해 부등식이 성립한다.

(ii) $g = f - \sum_{n=1}^{N} f_n$은 성질 항목의 (1)에 의해 르베그 적분가능하고, $(\Phi_{N+j})_j$는 $(f_{N+j})_j$의 표현족이다. [[tail-of-a-series|급수의 꼬리]]의 (2)에 의해 $(\int_{\mathbb{R}} |f_{N+j}|)_j$의 급수가 수렴한다($N = 0$이면 원래 급수이다). $x$에서 $(f_{N+j}(x))_j$의 급수가 절대수렴하면 같은 (2)에 의해 $(f_n(x))$의 급수가 절대수렴하므로 $f(x) = \sum_n f_n(x)$이고, 급수의 꼬리의 (3)에 의해 $g(x) = f(x) - \sum_{n=1}^{N} f_n(x) = \sum_{j=1}^{\infty} f_{N+j}(x)$이다. 따라서 $(f_{N+j})_j$는 $g$의 항별 표현이고, (i)을 $g$에 쓰면 부등식이 나온다(합의 기호 항목의 정의에 의해 오른쪽이 $\sum_{j=1}^{\infty} \int_{\mathbb{R}} |f_{N+j}|$이다).

(iii) 합의 기호 항목의 (2)와 (1)에 의해 꼬리의 합 $\sum_{n=N+1}^{\infty} \int_{\mathbb{R}} |f_n|$은 $0$으로 수렴하고, 성질 항목의 (2)에 의해 $0 \le \int_{\mathbb{R}} |f - \sum_{n=1}^{N} f_n|$이므로 [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)에 의해 첫 문장이 성립한다. 둘째 문장은 (2)의 (iii)의 $\int_{\mathbb{R}} f = \sum_n \int_{\mathbb{R}} f_n$과 합의 기호 항목의 (1)이다.

**(5)** 계단함수 항목의 (5)에 의해 $|\rho_m|$은 $0$ 이상인 계단함수이고, (2)의 (i)에 의해 $\sum_m \int_{\mathbb{R}} |\rho_m|$은 실수이다. 확장된 합 항목의 (3)에 의해 $x \in N$인 것은 정확히 $\sum_m |\rho_m(x)| = \infty$일 때이므로, [[null-set-of-reals|ℝ 의 영집합]]의 (6)의 (i)에 의해 첫 문장이 성립한다. 둘째 문장은 (2)의 (ii)와 항별 표현의 정의이다.

**(6)** (i) 앞 항목의 (7)이다. (ii) 리만 적분가능한 함수의 르베그 적분의 (3)이다. (iii) 성질 항목의 (1), (3)의 (i), (4)를 $n$마다 쓴다. 쓰는 식은 $\Phi_n$, $\Psi_n$, $k$만으로 정해진다. $\blacksquare$
:::

## 예시와 반례

:::example[점마다 다른 높이를 더한 함수들의 급수]
자연수 $n$마다 $f_n = \tfrac{1}{n^2}\chi_{[0, 1)} + n\,\chi_{\{1/n\}}$이라 합시다. 둘째 항은 한 점에서만 $0$이 아니므로 거의 영인 함수이고, 한 점 $\{1/n\}$의 영 덮개열(예를 들어 $c_l = 1/n$, $d_l = 1/n + (1/2)^l$)로 만든 지우는 열과 $\tfrac{1}{n^2}\chi_{[0, 1)}$의 표현 $\bigl(\tfrac{1}{n^2}\chi_{[0, 1)}, 0, 0, \dots\bigr)$을 번갈아 늘어놓은 열이 $n$마다 식으로 정해진 $f_n$의 표현입니다([[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 (1)의 (ii)). 그래서 표현족이 있습니다. $|f_n|$은 한 점 $1/n$ 밖에서 $\tfrac{1}{n^2}\chi_{[0, 1)}$과 같으므로 그 항목의 (5)의 (i)에 의해 $\int_{\mathbb{R}} |f_n| = 1/n^2$이고, 그 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴합니다. 모든 $x$에서 $f_n(x) \ne \tfrac{1}{n^2}\chi_{[0, 1)}(x)$인 $n$은 많아야 하나이므로 $(f_n(x))$의 급수는 절대수렴하고, (3)의 $m \ge 2$인 자연수 $m$에 대하여 $f^{\Sigma}(1/m) = \sum_{n=1}^{\infty} 1/n^2 + m$입니다. $f^{\Sigma}$는 유계가 아니지만 르베그 적분가능하고 $\int_{\mathbb{R}} f^{\Sigma} = \sum_{n=1}^{\infty} 1/n^2$입니다.
:::

## 확인 질문

:::check[(4)의 (ii)에서 N = 0 이면 무엇을 말하는가?]
$\sum_{n=1}^{0} f_n$은 빈 합으로 영함수이므로, $(f_n)$ 자신이 $f$의 항별 표현이고 $\int_{\mathbb{R}} |f| \le \sum_{n=1}^{\infty} \int_{\mathbb{R}} |f_n|$이라는 것, 곧 (4)의 (i)입니다.
:::

:::check[모든 f_n 이 영함수이면 (3)의 f^Σ 와 ser_1 은 무엇인가?]
모든 점에서 $(f_n(x))$의 급수는 절대수렴하고 합이 $0$이므로 $f^{\Sigma}$는 영함수입니다. 표현족이 영함수열들이면 각 작은 표현의 첫째 항은 부분합인 영함수이고 나머지도 영함수이므로, $\operatorname{ser}_1(\Phi_n)$은 영함수열입니다.
:::
