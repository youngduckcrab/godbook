---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "6.4절 Exercises, Exercise 6.23 (a) (p.187–188) — 문제 4 와 같은 발상(증가하는 집합열 위의 적분이 합집합 위의 적분으로 간다). 출처는 측도공간의 적분가능한 함수와 가측집합열로 묻는다"
added: 2026-11-28
---

:::exercise[0 쪽으로 커지는 함수의 표현과 적분]
자연수 $n$마다 $\varphi_n = \chi_{[0, 2^{-n})} - \chi_{[2^{-n}, 2^{1-n})}$으로 두고, $\Phi = (\varphi_n)$이라 하자. 또 $f : \mathbb{R} \to \mathbb{R}$를, 자연수 $k$와 $2^{-k} \le x < 2^{1-k}$인 $x$에서 $f(x) = k - 2$, 그 밖의 $x$(곧 $x \le 0$이거나 $1 \le x$)에서 $f(x) = 0$으로 정한다.

1. $0 < x < 1$인 모든 $x$에 대하여 $2^{-k} \le x < 2^{1-k}$인 자연수 $k$가 정확히 하나 있음을 보여라.
2. $\Phi$가 $f$의 표현임을 보이고 $\int_{\mathbb{R}} f$를 구하라.
3. 부분합 $s_n = \sum_{j=1}^{n} \varphi_j$가 모든 $n$에서 $\int_{\mathbb{R}} |s_n| = 1$을 만족함을 보이고, $\int_{\mathbb{R}} |f|$를 구하라.
:::

:::solution
계단함수와 그 적분은 [[step-function|계단함수와 그 적분]]의 것이고 "계단 (n)"은 그 번호이다. 표현과 르베그 적분은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이다. $2^{-n}$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(\tfrac12)^n$이고, 같은 항목의 (6)의 (iv)에 의해 $n < n'$이면 $2^{-n'} < 2^{-n}$이다. 특히 $2^{1-n} = 2 \cdot 2^{-n}$이고 $2^{-n} = 2^{1-n} - 2^{-n}$이다.

**1.** $0 < x < 1$이라 하자. [[geometric-sequence-limit|등비수열의 극한]]에 의해 $2^{-k} \le x$인 자연수 $k$가 있고, [[well-ordering-principle|정렬 원리]]에 의해 그 가운데 가장 작은 것 $k$가 있다. $k = 1$이면 $x < 1 = 2^{0}$이고, $k \ge 2$이면 $k - 1$은 조건을 만족하지 않으므로 $x < 2^{1-k}$이다. $k < k'$이면 $2^{1-k'} \le 2^{-k}$이므로 두 칸 $[2^{-k}, 2^{1-k})$, $[2^{-k'}, 2^{1-k'})$은 서로소이고, 그런 $k$는 하나뿐이다.

**2.** *조건 A.* $[0, 2^{-n})$과 $[2^{-n}, 2^{1-n})$은 서로소이므로 $|\varphi_n| = \chi_{[0, 2^{-n})} + \chi_{[2^{-n}, 2^{1-n})}$이고, 계단 (4)의 (iii)과 (6)의 (i)에 의해 $\int_{\mathbb{R}} |\varphi_n| = 2^{-n} + 2^{-n} = 2^{1-n}$이며 $\int_{\mathbb{R}} \varphi_n = 2^{-n} - 2^{-n} = 0$이다. [[geometric-series|등비급수]]의 (2)에 의해 $(2^{1-n})$의 급수는 수렴하고 합은 $2$이다.

*점마다의 급수.* $x < 0$이거나 $1 \le x$이면 모든 $\varphi_n(x)$가 $0$이다($2^{1-n} \le 1$). $0 < x < 1$이면 1의 $k$에 대하여, $n < k$이면 $x < 2^{1-k} \le 2^{-n}$이므로 $\varphi_n(x) = 1$, $n = k$이면 $\varphi_n(x) = -1$, $n > k$이면 $2^{1-n} \le 2^{-k} \le x$이므로 $\varphi_n(x) = 0$이다. 그래서 $0$이 아닌 항은 유한 개이고 급수는 절대수렴하며, 그 합은 $(k - 1) - 1 = k - 2 = f(x)$이다([[series-and-partial-sums|급수와 부분합]], [[tail-of-a-series|급수의 꼬리]]의 (2), (3)). $x = 0$이면 모든 $\varphi_n(0) = 1$이어서 $(|\varphi_n(0)|)$의 급수는 발산하므로([[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)), 조건 B는 $f(0)$에 대해 아무것도 요구하지 않는다.

따라서 $\Phi$는 $f$의 표현이고, $f$는 르베그 적분가능하며 $\int_{\mathbb{R}} f = \sum_{n=1}^{\infty} 0 = 0$이다.

**3.** $s_n$이 다음을 만족한다는 것을 $n$에 관한 귀납법으로 보인다. $[0, 2^{-n})$에서 $s_n = n$이고, $1 \le k \le n$이면 $[2^{-k}, 2^{1-k})$에서 $s_n = k - 2$이며, $x < 0$이거나 $1 \le x$이면 $s_n(x) = 0$이다. $n = 1$이면 $s_1 = \varphi_1$이므로 그렇다. $n$에서 성립하면 $s_{n+1} = s_n + \varphi_{n+1}$은 $[0, 2^{-n-1})$에서 $n + 1$, $[2^{-n-1}, 2^{-n})$에서 $n - 1 = (n + 1) - 2$이고, $2^{-n}$ 이상인 점에서는 $\varphi_{n+1}$이 $0$이어서 $s_n$과 같다.

그래서 $|s_{n+1}|$과 $|s_n|$은 $[0, 2^{-n})$에서만 다르고, $n \ge 1$이므로 $|n - 1| = n - 1$이어서 모든 점에서
$$
|s_{n+1}| - |s_n| = \chi_{[0, 2^{-n-1})} - \chi_{[2^{-n-1}, 2^{-n})}
$$
이다. 계단 (4)의 (iii)과 (6)의 (i)에 의해 오른쪽의 적분은 $2^{-n-1} - 2^{-n-1} = 0$이므로 $\int_{\mathbb{R}} |s_{n+1}| = \int_{\mathbb{R}} |s_n|$이다. $\int_{\mathbb{R}} |s_1| = \tfrac12 + \tfrac12 = 1$이므로 모든 $n$에서 $\int_{\mathbb{R}} |s_n| = 1$이다. [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (3)의 (ii)에 의해 $\int_{\mathbb{R}} |f| = \lim_{n \to \infty} \int_{\mathbb{R}} |s_n| = 1$이다.

같은 항목의 (4)에 의해 $\int_{\mathbb{R}} f^+ - \int_{\mathbb{R}} f^- = 0$이고 $\int_{\mathbb{R}} f^+ + \int_{\mathbb{R}} f^- = 1$이므로 두 적분은 모두 $\tfrac12$이다. 실제로 $f^-$는 $[\tfrac12, 1)$에서만 $0$이 아니고 값이 $1$이다. $f$는 $0$ 근처에서 유계가 아니고, $\int_{\mathbb{R}} |f| = 1$은 $\Phi$의 적분의 절댓값의 합 $2$보다 작다.
:::

:::exercise[적분의 절댓값이 절댓값의 적분과 같을 때]
$f : \mathbb{R} \to \mathbb{R}$가 르베그 적분가능하다고 하자. $\left|\int_{\mathbb{R}} f\right| = \int_{\mathbb{R}} |f|$인 것은 정확히 $\{x \in \mathbb{R} : f(x) < 0\}$이나 $\{x \in \mathbb{R} : f(x) > 0\}$ 가운데 하나가 영집합일 때임을 보여라.
:::

:::solution
"성질 (n)"은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 번호이고, "거의 영 (n)"은 [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 번호이다. 성질 (4)에 의해 $f^+$, $f^-$는 르베그 적분가능하고 모든 값이 $0$ 이상이며, $f = f^+ - f^-$, $|f| = f^+ + f^-$이다. 성질 (1)에 의해
$$
\begin{gathered}
\int_{\mathbb{R}} f = \int_{\mathbb{R}} f^+ - \int_{\mathbb{R}} f^-, \\
\int_{\mathbb{R}} |f| = \int_{\mathbb{R}} f^+ + \int_{\mathbb{R}} f^-
\end{gathered}
$$
이다. $p = \int_{\mathbb{R}} f^+$, $q = \int_{\mathbb{R}} f^-$로 두면 성질 (2)에 의해 $p \ge 0$, $q \ge 0$이다. 또 $f^-(x) > 0$인 것은 정확히 $f(x) < 0$일 때이고, $f^+(x) > 0$인 것은 정확히 $f(x) > 0$일 때이다([[positive-and-negative-parts|양의 부분과 음의 부분]]).

**등호이면.** $|p - q| = p + q$라 하자. $p - q \ge 0$이면 $p - q = p + q$이므로 $q = 0$이고, $p - q < 0$이면 $q - p = p + q$이므로 $p = 0$이다. $q = \int_{\mathbb{R}} f^- = 0$이면 거의 영 (7)의 (i)에 의해 $\{f^- > 0\} = \{f < 0\}$이 영집합이고, $p = 0$이면 같은 방법으로 $\{f > 0\}$이 영집합이다.

**거꾸로.** $\{f < 0\}$이 영집합이면 거의 영 (7)의 (i)에 의해 $q = 0$이고, $\int_{\mathbb{R}} f = p = \int_{\mathbb{R}} |f|$이며 $p \ge 0$이므로 $\left|\int_{\mathbb{R}} f\right| = \int_{\mathbb{R}} |f|$이다. $\{f > 0\}$이 영집합이면 $p = 0$이고 $\left|\int_{\mathbb{R}} f\right| = |-q| = q = \int_{\mathbb{R}} |f|$이다.

예를 들어 $f = \chi_{\mathbb{Q}} - \chi_{[0, 1)}$이면 $\{f > 0\}$은 $\mathbb{Q}$의 부분집합이어서 [[null-set-of-reals|ℝ 의 영집합]]의 (3), (2)에 의해 영집합이다. 거의 영 (8)과 성질 (1)에 의해 $\int_{\mathbb{R}} f = 0 - 1 = -1$이고, 등호에 의해 $\int_{\mathbb{R}} |f| = 1$이다.
:::

:::exercise[구간을 둘로 나눈 르베그 적분]
$a < b < c$인 실수 $a$, $b$, $c$와 $f : [a, c] \to \mathbb{R}$에 대하여, $f$가 $[a, b]$와 $[b, c]$에서 르베그 적분가능하면 $f$가 $[a, c]$에서 르베그 적분가능하고
$$
\int_{[a, c]} f = \int_{[a, b]} f + \int_{[b, c]} f
$$
임을 보여라. 또 $f(x) = x$이면 $[0, 1]$과 $[1, 3]$에서의 르베그 적분을 리만 적분으로 구해 $\int_{[0, 3]} f$를 구하라.
:::

:::solution
$0$으로 늘인 함수, "$[a, b]$에서 르베그 적분가능", $\int_{[a, b]}$는 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이다.

$g_1$, $g_2$, $F$를 각각 $f|_{[a, b]}$, $f|_{[b, c]}$, $f$를 $0$으로 늘인 함수라 하자. 가정에 의해 $g_1$, $g_2$는 르베그 적분가능하고 $\int_{\mathbb{R}} g_1 = \int_{[a, b]} f$, $\int_{\mathbb{R}} g_2 = \int_{[b, c]} f$이다. 점마다 비교하면 $a \le x < b$에서 $g_1(x) + g_2(x) = f(x) + 0$, $b < x \le c$에서 $0 + f(x)$, $[a, c]$ 밖에서 $0 + 0$이므로 $b$가 아닌 모든 점에서 $F(x) = g_1(x) + g_2(x)$이다. $b$에서는 $g_1(b) + g_2(b) = 2f(b)$이다.

[[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (1)에 의해 $g_1 + g_2$는 르베그 적분가능하고 $\int_{\mathbb{R}} (g_1 + g_2) = \int_{\mathbb{R}} g_1 + \int_{\mathbb{R}} g_2$이다. [[null-set-of-reals|ℝ 의 영집합]]의 (3)에 의해 $\{b\}$는 영집합이고, $\{x : F(x) \ne g_1(x) + g_2(x)\} \subseteq \{b\}$는 같은 항목의 (2)에 의해 영집합이므로, [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 (5)의 (i)에 의해 $F$는 르베그 적분가능하고 $\int_{\mathbb{R}} F = \int_{\mathbb{R}} g_1 + \int_{\mathbb{R}} g_2$이다. 이것이 결론이다.

$f(x) = x$이면 $[0, 1]$, $[1, 3]$로의 제한은 연속이므로 [[continuous-implies-integrable|연속함수는 적분가능하다]]의 (1)에 의해 리만 적분가능하고, [[riemann-integrable-is-lebesgue-integrable|리만 적분가능한 함수의 르베그 적분]]의 (2)에 의해 $[0, 1]$, $[1, 3]$에서 르베그 적분가능하며 $\int_{[0, 1]} f = \int_0^1 x\,dx = \tfrac12$, $\int_{[1, 3]} f = \int_1^3 x\,dx = \tfrac{9 - 1}{2} = 4$이다([[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)). 위의 결론에 의해 $\int_{[0, 3]} f = \tfrac12 + 4 = \tfrac92$이고, 이것은 $\int_0^3 x\,dx = \tfrac92$와 같다.
:::

:::exercise[바깥을 잘라 낸 함수의 표현족과 지배 수렴]
$f : \mathbb{R} \to \mathbb{R}$가 르베그 적분가능하고 $\Phi = (\varphi_k)$가 $f$의 표현이라 하자. 자연수 $n$마다 $f_n = f\,\chi_{[-n, n)}$, 곧 $x$에서의 값이 $f(x)\,\chi_{[-n, n)}(x)$인 함수로 둔다.

1. 자연수 $n$마다 $k$번째 항이 $\varphi_k\,\chi_{[-n, n)}$인 계단함수의 열 $\Phi_n$이 $f_n$의 표현임을 보여라. 따라서 $(\Phi_n)$은 $(f_n)$의 표현족이다.
2. $n$번째 항이 $\int_{\mathbb{R}} |f - f_n|$인 수열이 $0$으로 수렴하고, $n$번째 항이 $\int_{\mathbb{R}} f_n$인 수열이 $\int_{\mathbb{R}} f$로 수렴함을 보여라.
:::

:::solution
계단함수는 [[step-function|계단함수와 그 적분]]의 것이고 "계단 (n)"은 그 번호이다. 표현과 조건 A, B는 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 표현족은 [[representation-family|표현족과 르베그 적분가능한 함수의 급수]]의 것이다. $-n \le n$이므로 계단 (4)의 (iii)에 의해 $\chi_{[-n, n)}$은 계단함수이다.

**1.** 계단 (5)에 의해 $\varphi_k\,\chi_{[-n, n)}$은 계단함수이다. 모든 점에서 $|\varphi_k\,\chi_{[-n, n)}| \le |\varphi_k|$이므로 계단 (6)의 (ii)에 의해 $\int_{\mathbb{R}} |\varphi_k\,\chi_{[-n, n)}| \le \int_{\mathbb{R}} |\varphi_k|$이고, $\Phi$의 조건 A와 [[comparison-test|비교 판정법]]의 (2)에 의해 $\Phi_n$은 조건 A를 만족한다.

$x$에서 $k$번째 항이 $\varphi_k(x)\,\chi_{[-n, n)}(x)$인 수열의 급수가 절대수렴한다고 하자. $x \in [-n, n)$이면 이 수열은 $(\varphi_k(x))$이므로 그 급수가 절대수렴하고, $\Phi$의 조건 B에 의해 합은 $f(x) = f_n(x)$이다. $x \notin [-n, n)$이면 모든 항이 $0$이어서 합은 $0 = f_n(x)$이다. 그래서 $\Phi_n$은 조건 B를 만족하고 $f_n$의 표현이다. $(n, k)$마다 계단함수 $\varphi_k\,\chi_{[-n, n)}$을 주는 함수가 하나 정해지므로 $(\Phi_n)$은 표현족이다.

**2.** $h = |f|$로 두면 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (3)의 (ii)에 의해 $h$는 르베그 적분가능하다. 모든 $x$와 $n$에서 $|f_n(x)| \le h(x)$이다. $x$를 고정하면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $|x| < K$인 자연수 $K$가 있고, $n \ge K$이면 $x \in [-n, n)$이므로 $f_n(x) = f(x)$이다. 그래서 [[tail-of-a-sequence|수열의 꼬리]]의 (1)과 [[basic-limits|기본적인 극한]]의 (1)에 의해 $(f_n(x))$는 $f(x)$로 수렴한다.

$Z = \emptyset$으로 두고, 모든 $l$에서 $c_l = d_l = 0$인 쌍을 그 영 덮개열로 잡는다(총길이는 $0$이고 $\emptyset$은 어느 집합에나 포함된다. [[null-set-of-reals|ℝ 의 영집합]]의 (2)). [[lebesgue-dominated-convergence-theorem|르베그 적분의 지배 수렴 정리와 파투 보조정리]]의 (2)의 (i)을 $(f_n)$, 그 표현족 $(\Phi_n)$, $h$, $Z$, 극한 $g = f$에 쓰면 $\int_{\mathbb{R}} |f_n - f| \to 0$이고 $\int_{\mathbb{R}} f_n \to \int_{\mathbb{R}} f$이다. $|f_n - f| = |f - f_n|$이다.

표현족을 $\Phi$에서 식으로 정했으므로 $n$마다 $f_n$의 표현을 따로 고르지 않는다. 예를 들어 $f$가 계단함수이면 계단 (2)의 (ii)에 의해 어떤 $[c, d]$ 밖에서 $0$이므로 $n > \max\{|c|, |d|\}$이면 $f_n = f$이다.
:::

:::exercise[로그의 부호를 바꾼 함수를 잘라 올리기]
$[0, 1]$ 위의 함수 $g$를 $g(0) = 0$, $0 < x \le 1$이면 $g(x) = -\ln x$로 정하고, 자연수 $n$마다 $[0, 1]$ 위의 $u_n$을 $0 \le x \le \exp(-n)$이면 $u_n(x) = n$, $\exp(-n) < x \le 1$이면 $u_n(x) = -\ln x$로 정한다.

1. 모든 $u_n$이 리만 적분가능하고 $\int_0^1 u_n = 1 - \exp(-n)$임을 보여라.
2. $g$가 $[0, 1]$에서 르베그 적분가능하고 $\int_{[0, 1]} g = 1$임을 보이고, $g$는 리만 적분가능하지 않음을 보여라.
:::

:::solution
자연로그 $\ln$과 그 번호 "로그 (n)"은 [[natural-logarithm|자연로그]]의 것이고, 지수함수 $\exp$는 [[exponential-function|지수함수]]의 것이다. 지수함수의 (1)에 의해 $\exp(-n) > 0$이고 $\ln(\exp(-n)) = -n$이며, 로그 (3)에 의해 $\ln$은 순증가이다. [[laws-of-exponential-function|지수함수의 법칙]]의 (3)을 $n = 0$에 쓰면 $\exp(0) = 1$이다.

**1.** $a = \exp(-n)$으로 두면 $-n < 0$이므로 지수함수의 (2)에 의해 $0 < a < 1$이다. $[0, a]$에서 값이 $n$인 상수함수 $g_1$은 [[riemann-integral|리만 적분]]의 (5)에 의해 적분가능하고 $\int_0^a g_1 = n\,a$이다. $G(x) = x - x\ln x$로 정한 $G : \mathbb{R}_{>0} \to \mathbb{R}$는 [[derivative-rules|미분법칙]]의 (6)과 로그 (2)에 의해 미분가능하고 $G'(x) = 1 - (\ln x + x \cdot x^{-1}) = -\ln x$이다. $x$에서의 값이 $-\ln x$인 함수 $\mathbb{R}_{>0} \to \mathbb{R}$는 로그 (2)에 의해 연속이고 $\mathbb{R}_{>0}$은 [[interval|구간]]이므로 [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (2)에 의해
$$
\begin{aligned}
\int_a^1 (-\ln x)\,dx &= G(1) - G(a) \\
&= 1 - (a + n\,a)
\end{aligned}
$$
이고($\ln 1 = 0$, $\ln a = -n$), [[continuous-implies-integrable|연속함수는 적분가능하다]]의 (2)에 의해 $-\ln$은 $[a, 1]$에서 리만 적분가능하다. $g_1(a) = n = -\ln a$이므로 [[additivity-of-the-integral|적분의 구간 덧셈]]의 (4)에 의해 $u_n$은 적분가능하고
$$
\begin{aligned}
\int_0^1 u_n &= n\,a + 1 - a - n\,a \\
&= 1 - \exp(-n)
\end{aligned}
$$
이다.

**2.** $\hat{u}_n$, $\hat{g}$를 $u_n$, $g$를 $0$으로 늘인 함수라 하자([[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]).

*증가.* $[0, 1]$ 밖에서는 모든 값이 $0$이다. $x \le \exp(-n-1)$이면 $u_n(x) = n < n + 1 = u_{n+1}(x)$이다. $\exp(-n-1) < x \le \exp(-n)$이면 $\ln x \le -n$이므로 $u_{n+1}(x) = -\ln x \ge n = u_n(x)$이다. $x > \exp(-n)$이면 두 값이 모두 $-\ln x$이다. 그래서 모든 실수 $x$에서 $\hat{u}_n(x) \le \hat{u}_{n+1}(x)$이다.

*적분의 상계.* [[riemann-integrable-is-lebesgue-integrable|리만 적분가능한 함수의 르베그 적분]]의 (2)와 1에 의해 $\int_{\mathbb{R}} \hat{u}_n = 1 - \exp(-n) \le 1$이다.

*극한.* $x = 0$이면 $\hat{u}_n(0) = n$이어서 위로 유계가 아니다([[archimedean-property|아르키메데스 성질]]의 (1)). $0 < x \le 1$이면 지수함수의 (4)에 의해 실수 $K_0$이 있어 $t < K_0$이면 $\exp(t) < x$이고, 아르키메데스 성질의 (1)로 $-K_0 < K$인 자연수 $K$를 잡으면 $\exp(-K) < x$이다. 그러면 $n \ge K$이면 $\exp(-n) \le \exp(-K) < x$이므로 $\hat{u}_n(x) = -\ln x$이다. $[0, 1]$ 밖에서는 모든 값이 $0$이다.

[[lebesgue-monotone-convergence-theorem|르베그 적분의 단조 수렴 정리]]의 (3)에 의해 같은 항목의 (1)을 $(\hat{u}_n)$과 $M = 1$에 쓸 수 있다. 그 (1)의 $f$는 위로 유계인 점에서 극한, 아닌 점에서 $0$이므로 위의 극한에 의해 $\hat{g}$이다. (1)의 (iii)에 의해 $\hat{g}$는 르베그 적분가능하고 $\int_{\mathbb{R}} \hat{g} = \lim_{n \to \infty} \bigl(1 - \exp(-n)\bigr) = 1$이다. 마지막 극한은 위와 같이 지수함수의 (4)에서 양수 $\varepsilon$마다 $\exp(-K) < \varepsilon$인 자연수 $K$를 얻고 $n \ge K$이면 $0 < \exp(-n) \le \exp(-K)$라는 것으로 $\exp(-n) \to 0$을 보인 뒤 [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)를 쓴 것이다. 곧 $g$는 $[0, 1]$에서 르베그 적분가능하고 $\int_{[0, 1]} g = 1$이다.

한편 실수 $M$마다 $x = \exp(-|M| - 1)$은 $(0, 1)$에 있고 $g(x) = |M| + 1 > M$이므로 $g$는 유계가 아니고, 리만 적분의 (6)에 의해 리만 적분가능하지 않다.
:::

:::exercise[복리의 역수의 적분의 극한]
자연수 $n$마다 $[0, 1]$ 위의 $f_n$을 $f_n(x) = \bigl((1 + x/n)^n\bigr)^{-1}$로 정한다.

1. 모든 $f_n$이 연속이고 모든 $x \in [0, 1]$에서 $0 < f_n(x) \le 1$임을 보여라.
2. 모든 $x \in [0, 1]$에서 $(f_n(x))$가 $\exp(-x)$로 수렴함을 보여라.
3. $\lim_{n \to \infty} \int_0^1 f_n = 1 - \exp(-1)$임을 보여라.
:::

:::solution
**1.** $0 \le x$이면 $1 \le 1 + x/n$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)와 (2)의 (iv)에 의해 $1 = 1^n \le (1 + x/n)^n$이고, 역수를 잡으면 $0 < f_n(x) \le 1$이다([[order-properties-of-reals|실수의 순서 성질]]). $x$에서의 값이 $1 + x/n$인 함수는 연속이고, [[power-function-is-continuous|거듭제곱 함수의 연속]]의 (1)과 [[composition-of-continuous-functions|연속함수의 합성]]의 (2)에 의해 $x$에서의 값이 $(1 + x/n)^n$인 함수도 연속이며 $0$이 되지 않으므로, [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 $f_n$은 연속이다.

**2.** [[limit-of-compound-interest|복리의 극한]]의 (2)에 의해 $(1 + x/n)^n$은 $\exp(x)$로 수렴하고, [[exponential-function|지수함수]]의 (1)에 의해 $\exp(x) > 0$이다. 1에 의해 모든 항이 $0$이 아니므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (4)에 의해 $f_n(x)$는 $\exp(x)^{-1}$로 수렴하고, [[laws-of-exponential-function|지수함수의 법칙]]의 (2)에 의해 이것은 $\exp(-x)$이다.

**3.** $f(x) = \exp(-x)$로 정한 $f : [0, 1] \to \mathbb{R}$는 지수함수의 (2)와 연속함수의 합성에 의해 연속이고 [[continuous-implies-integrable|연속함수는 적분가능하다]]의 (1)에 의해 리만 적분가능하다. 각 $f_n$도 같은 이유로 리만 적분가능하다. 1에 의해 모든 $n$과 $x$에서 $|f_n(x)| \le 1$이고 2에 의해 $(f_n(x))$는 $f(x)$로 수렴하므로, [[arzela-bounded-convergence-theorem|아르첼라의 유계 수렴 정리]]의 (1)을 $B = 1$에 쓰면 $\int_0^1 f_n \to \int_0^1 f$이다.

$F(x) = -\exp(-x)$로 정한 $F : \mathbb{R} \to \mathbb{R}$는 [[chain-rule|연쇄법칙]]의 (2)와 지수함수의 (3)에 의해 미분가능하고 $F'(x) = -\exp(-x) \cdot (-1) = \exp(-x)$이다. [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (2)에 의해
$$
\begin{aligned}
\int_0^1 \exp(-x)\,dx &= F(1) - F(0) \\
&= 1 - \exp(-1)
\end{aligned}
$$
이다($\exp(0) = 1$은 지수함수의 법칙의 (3)을 $n = 0$에 쓴 것). 검산으로 $\exp(-1)$은 $0.3678\ldots$이므로 극한은 $0.6321\ldots$이고, $n = 100$일 때의 적분은 $0.6329\ldots$이다.

이 열은 극한이 연속이어서 리만 적분만으로도 결론을 쓸 수 있지만, 아르첼라의 정리는 $f_n$이 $f$로 고르게 수렴하는지를 따지지 않고 상수 $1$로 눌린다는 것만 쓴다.
:::

:::exercise[모든 점에서 유한한 계단함수의 급수가 르베그 적분가능하지 않은 예]
자연수 $n$마다 $\varphi_n = n^{-2}\,\chi_{[0, n)}$으로 둔다.

1. 모든 실수 $x$에서 $(\varphi_n(x))$의 급수가 수렴함을 보이고, 그 합을 $f(x)$라 할 때 모든 양의 실수 $\varepsilon$에 대하여 실수 $K$가 있어 $x \ge K$이면 $0 \le f(x) < \varepsilon$임을 보여라.
2. $f$가 르베그 적분가능하지 않음을 보여라.
:::

:::solution
"계단 (n)"은 [[step-function|계단함수와 그 적분]]의 번호이다. $n$번째 항이 $n^{-2}$인 수열의 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴하고, 그 합을 $S$, $K$번째 부분합을 $S_K$라 한다.

**1.** $x < 0$이면 모든 항이 $0$이다. $0 \le x$이면 $\varphi_n(x)$는 $n > x$일 때 $n^{-2}$, $n \le x$일 때 $0$이므로 $0 \le \varphi_n(x) \le n^{-2}$이고, 비교 판정법의 (2)에 의해 급수는 수렴한다. 그래서 $f(x)$가 정해지고 $f(x) \ge 0$이다.

$0 < \varepsilon$이라 하자. [[tail-of-a-series|급수의 꼬리]]의 (3)에 의해 $(n^{-2})$의 $K$-꼬리의 합은 $S - S_K$이고, $S_K \to S$이므로 $S - S_K < \varepsilon$인 자연수 $K$가 있다. $x \ge K$이면 $n \le K$에서 $\varphi_n(x) = 0$이므로 $(\varphi_n(x))$의 급수의 합은 그 $K$-꼬리의 합과 같고(급수의 꼬리의 (3)), 꼬리의 항은 $n^{-2}$ 이하이므로 비교 판정법의 (2)에 의해 $f(x) \le S - S_K < \varepsilon$이다.

**2.** 자연수 $N$마다 $s_N = \sum_{n=1}^{N} \varphi_n$은 계단 (5)에 의해 계단함수이고, 계단 (6)의 (i)과 (4)의 (iii)에 의해 $\int_{\mathbb{R}} s_N = \sum_{n=1}^{N} n^{-2} \cdot n = \sum_{n=1}^{N} n^{-1}$이다. 모든 $x$에서 $f(x) - s_N(x)$는 $(\varphi_n(x))$의 $N$-꼬리의 합이고 항이 $0$ 이상이므로 급수의 꼬리의 (3)과 [[sum-of-a-series|급수의 합의 기호]]의 (4)의 (iii)에 의해 $s_N(x) \le f(x)$이다.

$f$가 르베그 적분가능하다고 하자. [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 (7)에 의해 $s_N$은 르베그 적분가능하고 그 르베그 적분은 위의 $\int_{\mathbb{R}} s_N$이며, [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (2)에 의해 모든 $N$에서 $\sum_{n=1}^{N} n^{-1} \le \int_{\mathbb{R}} f$이다. 이것은 [[harmonic-series-diverges|조화급수의 발산]]의 (3)과 어긋나므로 $f$는 르베그 적분가능하지 않다.

$\Phi = (\varphi_n)$은 모든 점에서 급수가 절대수렴하지만 $\sum_n \int_{\mathbb{R}} |\varphi_n| = \sum_n n^{-1}$이 발산하여 조건 A를 만족하지 않는다. 2는 이 열만이 아니라 $f$의 어떤 표현도 없다는 것이다. $f$는 모든 점에서 유한하고 멀리 가면 $0$에 가깝지만, $[k - 1, k)$에서 $f$의 값이 $\sum_{n=k}^{\infty} n^{-2}$이어서, 칸마다의 넓이를 더하면 끝없이 커진다.
:::
