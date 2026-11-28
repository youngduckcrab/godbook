---
title: 르베그 적분의 단조 수렴 정리
title_en: The Monotone Convergence Theorem for the Lebesgue Integral
aliases: [르베그 적분의 단조수렴정리, 단조 수렴 정리 (르베그 적분), monotone convergence theorem for the Lebesgue integral, Beppo Levi theorem]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 표현족이 주어진 르베그 적분가능한 함수열이 모든 점에서 증가하고 적분이 위로 유계이면, 점마다 위로 유계인 곳에서 극한, 아닌 곳에서 0 으로 정한 함수가 르베그 적분가능하고 그 적분이 적분의 극한이며, 위로 유계가 아닌 점 전체가 식으로 정해진 영 덮개열을 갖는 영집합이라는 것을 차의 급수로 증명한다. 감소열과 리만 적분가능한 함수열의 경우도 다룬다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, monotone-convergence-theorem, limits-preserve-inequalities, limit-of-sum-and-product, series-and-partial-sums, comparison-test, sum-of-a-series, finite-sum-of-reals, telescoping-sum, interval, real-valued-function, archimedean-property, power-of-a-real-number, riemann-integral, step-function, null-set-of-reals, lebesgue-integrable-function, properties-of-the-lebesgue-integral, null-functions-and-almost-everywhere, riemann-integrable-is-lebesgue-integrable, representation-family]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "2절 Definition 2.8 뒤 문단 (p.5); 3절 Theorem 3.9 (p.8), Corollary 3.11 (p.9); 6절 Theorem 6.3 (p.14)"
    checked: original
    note: "출처 Theorem 6.3(p.14)은 U 의 단조열 f_n 이 모든 n 에서 ∫f_n ≤ M 이면 f_n 이 노름과 거의 어디서나의 뜻으로 수렴하는 f ∈ U 가 있고 ∫f ≤ M 이라는 것이다. 출처의 증명은 'Without loss of generality, we can assume that the sequence is non-decreasing and the functions are non-negative' 로 시작해 Σ∫|f_{n+1} − f_n| ≤ M 에서 Corollary 3.11 로 f ≃ f_1 + (f_2 − f_1) + ⋯ 를 얻고, Theorem 4.7 과 Corollary 5.10 으로 결론을 낸다. 감소열에서는 ∫f_n ≤ ∫f_1 이 늘 성립하므로, 이 항목은 (1)의 증가열에 '적분이 위로 유계', (2)의 감소열에 '적분이 아래로 유계'를 따로 가정한다. Corollary 3.11(p.9)의 증명은 f 를 식으로 정의하는 것뿐이고, f 가 U* 의 원소라는 것은 Theorem 3.9(p.8)에서 나오며 그 증명이 함수마다 표현을 고르므로, 이 항목은 표현족이 주어진 꼴로 좁히고 representation-family 의 (3)–(5)를 쓴다. 출처의 극한 f 는 거의 어디서나로만 정해지지만, 이 항목은 점마다 위로 유계인 곳에서 극한, 아닌 곳에서 0 으로 하나를 정한다. 예시 '0 쪽으로 높아지는 계단의 극한'은 출처 p.5 의 Σ 2^{−n}χ_{[n−1,n)} (계단함수의 급수로 쓴 계단함수가 아닌 함수)와 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(아르첼라의 출처 주장을 Lebl I 6.2.2 각주와 다섯 출처의 검색으로 대조, 수렴 정리의 예외 집합 가정 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
르베그 적분가능, 표현, $\int_{\mathbb{R}}$은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 표현족, 항별 표현, 급수의 표현 $\operatorname{ser}_1$은 [[representation-family|표현족과 르베그 적분가능한 함수의 급수]]의 것이다. 영집합, 영 덮개열, 표준 영 덮개열은 [[null-set-of-reals|ℝ 의 영집합]]의 것이다. 아래에서 $(f_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열이고 $(\Phi_n)$은 그 표현족이다.

1. (증가열) 모든 자연수 $n$과 모든 실수 $x$에서 $f_n(x) \le f_{n+1}(x)$이고, 어떤 실수 $M$이 있어 모든 $n$에서 $\int_{\mathbb{R}} f_n \le M$이라 하자. $g_1 = f_1$, $n \ge 2$이면 $g_n = f_n - f_{n-1}$로 두고, $\Psi_1 = \Phi_1$, $n \ge 2$이면 $\Psi_n = \operatorname{alt}(\Phi_n, -\Phi_{n-1})$로 둔다. 실수 $x$에서 $(f_n(x))$가 위로 유계이면 $f(x) = \lim_{n \to \infty} f_n(x)$, 아니면 $f(x) = 0$으로 정한다.
   - (i) $(\Psi_n)$은 $(g_n)$의 표현족이고, $n$번째 항이 $\int_{\mathbb{R}} |g_n|$인 수열의 급수가 수렴한다. 모든 $n$과 $x$에서 $\sum_{k=1}^{n} g_k(x) = f_n(x)$이다.
   - (ii) $(f_n(x))$가 위로 유계인 것은 정확히 $(g_n(x))$의 급수가 절대수렴할 때이다. 따라서 $f$는 representation-family 의 (3)의 $f^{\Sigma}$를 $(g_n)$으로 만든 것과 같다.
   - (iii) $f$는 르베그 적분가능하고 $\operatorname{ser}_1(\Psi_n)$이 그 표현이며, $n$번째 항이 $\int_{\mathbb{R}} f_n$인 수열은 $\int_{\mathbb{R}} f$로 수렴하고, $n$번째 항이 $\int_{\mathbb{R}} |f - f_n|$인 수열은 $0$으로 수렴한다. 특히 $\int_{\mathbb{R}} f \le M$이다.
   - (iv) $(f_n(x))$가 위로 유계가 아닌 실수 $x$ 전체의 집합은, $\operatorname{ser}_1(\Psi_n)$의 급수가 절대수렴하지 않는 점 전체의 집합 $N$의 부분집합이다. $N$은 영집합이고 $\operatorname{ser}_1(\Psi_n)$의 절댓값의 열의 표준 영 덮개열이 그 영 덮개열이다. $N$ 밖의 모든 $x$에서 $(f_n(x))$는 $f(x)$로 수렴한다.
2. (감소열) 모든 자연수 $n$과 모든 실수 $x$에서 $f_{n+1}(x) \le f_n(x)$이고, 어떤 실수 $M$이 있어 모든 $n$에서 $-M \le \int_{\mathbb{R}} f_n$이라 하자. 실수 $x$에서 $(f_n(x))$가 아래로 유계이면 $f(x) = \lim_{n \to \infty} f_n(x)$, 아니면 $f(x) = 0$으로 정한다. 그러면 $f$는 르베그 적분가능하고, $\int_{\mathbb{R}} f_n \to \int_{\mathbb{R}} f$, $\int_{\mathbb{R}} |f - f_n| \to 0$이며, $(f_n(x))$가 아래로 유계가 아닌 점 전체는 (1)을 $(-f_n)$과 표현족 $(-\Phi_n)$에 쓴 $N$의 부분집합이다. $f$의 표현은 (1)을 $(-f_n)$에 써서 얻은 표현에 $-1$을 곱한 것이다. 특히 모든 $n$과 $x$에서 $0 \le f_n(x)$이면 모든 $x$에서 $f(x) = \lim_{n \to \infty} f_n(x)$이다.
3. (표현족을 가정하지 않아도 되는 경우) $(f_n)$이 계단함수의 열이거나, $a < b$이고 리만 적분가능한 $u_n : [a, b] \to \mathbb{R}$들을 $0$으로 늘인 함수의 열 $(\hat{u_n})$이면, representation-family 의 (6)의 표현족으로 (1)과 (2)가 성립한다.
:::

:::english
Lebesgue integrability, representations, and $\int_{\mathbb{R}}$ are as in the entry on Lebesgue integrable functions, and representation families, termwise representations, and the representation of a series $\operatorname{ser}_1$ are as in the entry on representation families. Null sets, null cover sequences, and standard null cover sequences are as in the entry on null sets of real numbers. Below, $(f_n)$ is a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ and $(\Phi_n)$ is a representation family of it.

1. (Increasing sequences) Suppose $f_n(x) \le f_{n+1}(x)$ for every natural number $n$ and every real $x$, and there is a real $M$ with $\int_{\mathbb{R}} f_n \le M$ for every $n$. Put $g_1 = f_1$ and $g_n = f_n - f_{n-1}$ for $n \ge 2$, and $\Psi_1 = \Phi_1$ and $\Psi_n = \operatorname{alt}(\Phi_n, -\Phi_{n-1})$ for $n \ge 2$. At a real $x$, put $f(x) = \lim_{n \to \infty} f_n(x)$ if $(f_n(x))$ is bounded above, and $f(x) = 0$ otherwise.
   - (i) $(\Psi_n)$ is a representation family of $(g_n)$, and the series of the sequence whose $n$th term is $\int_{\mathbb{R}} |g_n|$ converges. For every $n$ and $x$, $\sum_{k=1}^{n} g_k(x) = f_n(x)$.
   - (ii) $(f_n(x))$ is bounded above precisely when the series of $(g_n(x))$ converges absolutely. Hence $f$ equals the function $f^{\Sigma}$ of item (3) of the entry on representation families made from $(g_n)$.
   - (iii) $f$ is Lebesgue integrable with representation $\operatorname{ser}_1(\Psi_n)$, the sequence whose $n$th term is $\int_{\mathbb{R}} f_n$ converges to $\int_{\mathbb{R}} f$, and the sequence whose $n$th term is $\int_{\mathbb{R}} |f - f_n|$ converges to $0$. In particular $\int_{\mathbb{R}} f \le M$.
   - (iv) The set of all real $x$ at which $(f_n(x))$ is not bounded above is a subset of the set $N$ of all points at which the series of $\operatorname{ser}_1(\Psi_n)$ does not converge absolutely. $N$ is a null set, and the standard null cover sequence of the sequence of absolute values of $\operatorname{ser}_1(\Psi_n)$ is a null cover sequence of it. At every $x$ outside $N$, $(f_n(x))$ converges to $f(x)$.
2. (Decreasing sequences) Suppose $f_{n+1}(x) \le f_n(x)$ for every natural number $n$ and every real $x$, and there is a real $M$ with $-M \le \int_{\mathbb{R}} f_n$ for every $n$. At a real $x$, put $f(x) = \lim_{n \to \infty} f_n(x)$ if $(f_n(x))$ is bounded below, and $f(x) = 0$ otherwise. Then $f$ is Lebesgue integrable, $\int_{\mathbb{R}} f_n \to \int_{\mathbb{R}} f$, $\int_{\mathbb{R}} |f - f_n| \to 0$, and the set of points at which $(f_n(x))$ is not bounded below is a subset of the set $N$ obtained by applying (1) to $(-f_n)$ with the representation family $(-\Phi_n)$. A representation of $f$ is $-1$ times the representation obtained by applying (1) to $(-f_n)$. In particular, if $0 \le f_n(x)$ for every $n$ and $x$, then $f(x) = \lim_{n \to \infty} f_n(x)$ for every $x$.
3. (Cases needing no assumed representation family) If $(f_n)$ is a sequence of step functions, or if $a < b$ and $(f_n)$ is the sequence $(\hat{u_n})$ of extensions by zero of Riemann integrable $u_n : [a, b] \to \mathbb{R}$, then (1) and (2) hold with the representation family of item (6) of the entry on representation families.
:::

## 직관

증가하는 함수열은 차를 차례로 더한 급수로 볼 수 있습니다. $f_n = f_1 + (f_2 - f_1) + \dots + (f_n - f_{n-1})$이고, $n \ge 2$인 차는 $0$ 이상이므로 그 적분의 합은 $\int_{\mathbb{R}} f_n - \int_{\mathbb{R}} f_1$입니다. 적분이 위로 유계이면 이 합이 유한하고, 앞 항목의 급수 정리가 그대로 쓰입니다. 물이 차오르는 수조에 비유하면, 매 순간 더해지는 물의 양(차의 적분)의 합이 유한하면 다 찬 모양(극한)도 유한한 부피를 가집니다. 비유의 "부피"가 적분이고 "물의 양의 합이 유한하다"가 적분의 위로 유계에 해당합니다.

극한 $f(x)$는 점마다 $(f_n(x))$가 위로 유계인 곳에서만 실수로 정해집니다. 위로 유계가 아닌 점에서는 $0$으로 둡니다. 그런 점들은 차의 급수가 절대수렴하지 않는 점이므로 영집합 안에 들고, 그 영집합의 덮개는 표현족에서 식으로 나옵니다. 그래서 다음 항목이 이 결론을 이어 쓸 수 있습니다.

## 증명

:::idea
$(g_n)$의 급수는 절대수렴하는 점에서 $f$와 같고, 적분의 절댓값의 합은 $\int |f_1| + M - \int f_1$ 이하이다. 표현족과 급수의 정리(representation-family 의 (2)–(5))를 $(g_n)$에 쓴다.
:::

:::hint
$n \ge 2$이면 $g_n \ge 0$이므로 $\int_{\mathbb{R}} |g_n| = \int_{\mathbb{R}} f_n - \int_{\mathbb{R}} f_{n-1}$이다.
:::

:::proof
아래에서 "급수 항목"은 [[representation-family|표현족과 르베그 적분가능한 함수의 급수]], "성질 항목"은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 번호이다.

**(1)** (i) 성질 항목의 (1)에 의해 $\Psi_n$은 $g_n$의 표현이다($n = 1$이면 $\Phi_1$). $\Psi_n$은 $\Phi_n$, $\Phi_{n-1}$로 정해지므로 $(\Psi_n)$은 표현족이다. [[telescoping-sum|망원 합]]의 (1)에 의해 $\sum_{k=1}^{n} g_k(x) = f_n(x)$이다. $n \ge 2$이면 $g_n(x) \ge 0$이므로 $|g_n| = g_n$이고 성질 항목의 (1)에 의해 $\int_{\mathbb{R}} |g_n| = \int_{\mathbb{R}} f_n - \int_{\mathbb{R}} f_{n-1}$이다. 망원 합의 (1)에 의해
$$
\begin{aligned} \sum_{k=1}^{n} \int_{\mathbb{R}} |g_k| &= \int_{\mathbb{R}} |f_1| + \int_{\mathbb{R}} f_n - \int_{\mathbb{R}} f_1 \\ &\le \int_{\mathbb{R}} |f_1| + M - \int_{\mathbb{R}} f_1 \end{aligned}
$$
이고, 항이 $0$ 이상이므로 [[comparison-test|비교 판정법]]의 (1)에 의해 급수가 수렴한다.

(ii) $n \ge 2$이면 $|g_n(x)| = g_n(x)$이므로 $(|g_n(x)|)$의 $n$번째 부분합은 $|f_1(x)| + f_n(x) - f_1(x)$이다. 비교 판정법의 (1)에 의해 $(g_n(x))$의 급수가 절대수렴하는 것은 정확히 이 부분합이 위로 유계일 때, 곧 $(f_n(x))$가 위로 유계일 때이다. 이때 (i)에 의해 급수의 합은 $\lim_n f_n(x)$이고, 그렇지 않을 때 두 함수의 값은 모두 $0$이다. [[real-valued-function]]의 (2)에 의해 $f = f^{\Sigma}$이다.

(iii) 급수 항목의 (3)에 의해 $f$는 르베그 적분가능하고 $\operatorname{ser}_1(\Psi_n)$이 그 표현이다. 급수 항목의 (4)의 (iii)에 의해 $\sum_{k=1}^{n} \int_{\mathbb{R}} g_k = \int_{\mathbb{R}} f_n$(성질 항목의 (1)과 (i))은 $\int_{\mathbb{R}} f$로 수렴하고, $\int_{\mathbb{R}} |f - \sum_{k=1}^{n} g_k| = \int_{\mathbb{R}} |f - f_n|$은 $0$으로 수렴한다. 모든 $n$에서 $\int_{\mathbb{R}} f_n \le M$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $\int_{\mathbb{R}} f \le M$이다.

(iv) 급수 항목의 (5)에 의해 $N$은 영집합이고 그 영 덮개열은 진술의 것이며, $N$ 밖에서 $(g_n(x))$의 급수가 절대수렴한다. (ii)에 의해 그런 점에서 $(f_n(x))$는 위로 유계이므로, 위로 유계가 아닌 점은 $N$에 든다. 위로 유계인 점에서 $(f_n(x))$는 단조증가이므로 [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 수렴하고, 그 극한이 $f(x)$이다.

**(2)** $(-f_n)$은 증가열이고 $(-\Phi_n)$은 그 표현족이며(성질 항목의 (1)), $\int_{\mathbb{R}} (-f_n) = -\int_{\mathbb{R}} f_n \le M$이다. $(f_n(x))$가 아래로 유계인 것은 정확히 $(-f_n(x))$가 위로 유계일 때이고 그때 $\lim(-f_n(x)) = -\lim f_n(x)$이므로([[limit-of-sum-and-product|합과 곱의 극한]]의 (5)), (1)의 $f$를 $(-f_n)$으로 만든 함수를 $\tilde{f}$라 하면 $f = -\tilde{f}$이다. (1)과 성질 항목의 (1)에서 나머지가 나온다($|f - f_n| = |\tilde{f} - (-f_n)|$). $0 \le f_n(x)$이면 $(f_n(x))$는 $0$을 하계로 가지므로 모든 $x$에서 아래로 유계이고 $f(x) = \lim f_n(x)$이다.

**(3)** 급수 항목의 (6)의 (i), (ii)이다. $\blacksquare$
:::

## 예시와 반례

:::example[0 쪽으로 높아지는 계단의 극한]
$n$번째 함수를 $f_n = \sum_{k=1}^{n} k\,\chi_{[(1/2)^k, (1/2)^{k-1})}$로 둡시다. 칸들은 서로소이므로 $f_n$은 증가하는 계단함수열이고, $\int_{\mathbb{R}} f_n = \sum_{k=1}^{n} k (1/2)^k$입니다. 귀납법으로 $\sum_{k=1}^{n} k (1/2)^k = 2 - (n + 2)(1/2)^n$을 확인하면($n = 1$에서 $1/2$, 그리고 $n + 1$번째 항 $(n + 1)(1/2)^{n+1}$을 더하면 $2 - (n + 3)(1/2)^{n+1}$) 적분은 모두 $2$ 이하입니다. $0 < x < 1$이면 $x$는 $(1/2)^k \le x < (1/2)^{k-1}$인 칸 하나에만 들고 $f(x) = k$이며, 그 밖의 $x$에서는 모든 $f_n(x) = 0$입니다. 그래서 (1)에 의해 $f$는 르베그 적분가능하고 $\int_{\mathbb{R}} f \le 2$입니다. $f((1/2)^k) = k$이므로 $f$는 $[0, 1]$에서 유계가 아니고, $[0, 1]$로 제한한 함수는 리만 적분가능하지 않습니다([[riemann-integral|리만 적분]]의 (6)).
:::

:::counterexample[적분이 위로 유계가 아닌 증가열의 예]
$f_n = \chi_{[0, n)}$은 증가하는 계단함수열이고 모든 $x$에서 수렴하며, 극한은 $x \ge 0$이면 $1$, 아니면 $0$인 함수 $h$입니다. 그러나 $\int_{\mathbb{R}} f_n = n$은 위로 유계가 아닙니다. 실제로 $h$는 르베그 적분가능하지 않습니다. 르베그 적분가능하다면 모든 $x$에서 $f_n(x) \le h(x)$이므로 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (2)에 의해 모든 $n$에서 $n \le \int_{\mathbb{R}} h$여야 하는데, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 그런 실수는 없습니다.
:::

## 확인 질문

:::check[모든 n 에서 f_n 이 같은 함수 g 이면 (1)의 f 는 무엇인가?]
모든 $x$에서 $(f_n(x))$는 상수열이어서 위로 유계이고 극한이 $g(x)$이므로 $f = g$입니다. $n \ge 2$이면 $g_n$은 영함수이고, (1)의 결론은 $\int_{\mathbb{R}} g = \int_{\mathbb{R}} g$, $\int_{\mathbb{R}} |g - g| = 0$이라는 당연한 말이 됩니다. $N$이 공집합이 아닐 수도 있지만(그 점에서 $g$의 표현이 절대수렴하지 않는 경우), 진술은 $N$이 영집합이라는 것만 말합니다.
:::

:::check[(2)에서 0 이상이라는 가정이 없으면 극한이 정해지지 않는 점이 생길 수 있는가?]
생길 수 있습니다. $f_n = -n\,\chi_{\{0\}}$은 감소하고, 각 $f_n$은 한 점에서만 $0$이 아니므로 거의 영인 함수이고 적분이 $0$입니다. 한 점 $\{0\}$의 영 덮개열 하나로 만든 지우는 열은 모든 $f_n$의 표현이므로([[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 (1)의 (i)) 그 열을 모든 $n$에 쓴 것이 표현족입니다. $x = 0$에서 $(f_n(0)) = (-n)$은 아래로 유계가 아니므로 (2)의 $f$는 그 점에서 $0$으로 정해지고, 다른 점에서는 극한 $0$입니다. 아래로 유계가 아닌 점 $\{0\}$은 영집합입니다.
:::
