---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "5.5절 Exercises, Exercise 5.19 (p.158) — 문제 2 와 같은 발상(높이마다 {f ≥ t} 의 측도를 더한 합을 적분과 비교한다. 출처는 높이 2^k 와 유한 측도로 둔다)"
  - ref: sandoval-romero-measure-and-integration
    loc: "5.5절 Exercises, Exercise 5.23 (p.159) — 문제 4 와 같은 발상(높이로 자른 함수의 적분이 단조 수렴 정리로 원래 적분에 다가간다)"
  - ref: sandoval-romero-measure-and-integration
    loc: "6.1절 Integrable Functions, Corollary 6.8 (c) (p.168) — 문제 5 의 1 과 같은 결론(모든 가측집합 위의 적분이 같으면 거의 어디서나 같다. 출처는 적분가능한 실숫값 함수로 진술한다)"
added: 2026-11-28
---

:::exercise[셈측도에 대한 적분이 정하는 측도]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu^{\sharp}$를 셈측도라 하자. $f(n) = 3^{-n}$으로 정한 $[0, \infty]$ 값 함수 $f$와, $A \in \mathcal{M}$에서 $\nu(A) = \int_A f\,d\mu^{\sharp}$로 정한 함수 $\nu$를 생각한다.

1. $\nu$가 $x_n = 3^{-n}$으로 정한 가중 셈측도 $\mu_x$와 같은 함수임을 보여라.
2. $\nu(\mathbb{N})$과 $\nu(\{2j : j \in \mathbb{N}\})$을 구하라.
3. $g(n) = 2^n$일 때 $\int g\,d\nu$를 구하고, 그것이 $\int gf\,d\mu^{\sharp}$와 같음을 보여라. 여기서 $gf$는 $n$에서의 값이 $g(n)f(n)$인 함수이다.
:::

:::solution
셈측도와 가중 셈측도는 [[measure-examples|측도의 예]]의 (4), (3)의 것이고, 그 위의 적분은 [[integral-with-respect-to-counting-measure|셈측도에 대한 적분과 급수]]의 것이며 "셈적분 (n)"은 그 번호이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 $\mathbb{N}$ 위의 모든 $[0, \infty]$ 값 함수는 가측이다. [[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]의 (2)에 의해 $\nu$는 측도이다.

**1.** 셈적분 (2)에 의해 모든 $A \subseteq \mathbb{N}$에서 $\nu(A) = \int_A f\,d\mu^{\sharp} = \sum_{n \in A} f(n) = \sum_{n \in A} 3^{-n}$이고, 측도의 예의 (3)에 의해 이것은 $\mu_x(A)$이다. 두 함수는 정의역이 $\mathscr{P}(\mathbb{N})$으로 같고 모든 점에서 값이 같으므로 같은 함수이다.

**2.** [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $3^{-n} = (3^{-1})^n$이다. 합 (7)의 (i)과 급수 (6)의 (iii)($m = 1$, $r = \tfrac13$)을 합 (3)의 (i)로 옮기면 $\nu(\mathbb{N}) = \sum_{n=1}^{\infty} (\tfrac13)^n = \tfrac13 \cdot \tfrac32 = \tfrac12$이다. 짝수 전체는 첨자열 $p_j = 2j$의 값의 집합이므로([[subsequence|부분수열]]의 (2)) 합 (7)의 (iii)과 거듭제곱의 (2)의 (ii)에 의해
$$
\begin{aligned}
\nu(\{2j : j \in \mathbb{N}\}) &= \sum_{j=1}^{\infty} \Bigl(\frac{1}{9}\Bigr)^{j} \\
&= \frac{1}{9} \cdot \frac{9}{8} = \frac{1}{8}
\end{aligned}
$$
이다(급수 (6)의 (iii)과 합 (3)의 (i)).

**3.** 1에 의해 $\nu = \mu_x$이므로 셈적분 (1)에 의해 $\int g\,d\nu = \sum_{n \in \mathbb{N}} g(n)\,x_n = \sum_{n=1}^{\infty} 2^n\,3^{-n}$이다. 거듭제곱의 (2)의 (iii)과 (3)에 의해 $2^n 3^{-n} = (\tfrac23)^n$이고, $0 < \tfrac23 < 1$이므로 급수 (6)의 (iii)과 합 (3)의 (i)에 의해
$$
\int g\,d\nu = \frac{2}{3} \cdot 3 = 2
$$
이다. 한편 셈적분 (2)에 의해 $\int gf\,d\mu^{\sharp} = \sum_{n=1}^{\infty} g(n)f(n) = \sum_{n=1}^{\infty} 2^n 3^{-n}$이고, 이것은 위의 합과 같은 원소열의 합이므로 같은 값 $2$이다.
:::

:::exercise[높이마다의 측도를 더한 합과 적분]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$를 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수라 하고, 자연수 $k$에서 $F_k = \{f \ge k\}$로 둔다.

1. $\sum_{k=1}^{\infty} \mu(F_k) \le \int f\,d\mu$임을 보여라.
2. $f$의 모든 값이 $0$이거나 자연수이거나 $\infty$이면 1의 등호가 성립함을 보여라.
3. 1의 부등호가 등호가 아닌 예를 들어라.
:::

:::solution
$[0, \infty]$ 값 함수와 그 가측성, $\{f \ge k\}$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고 "확장가측 (n)"은 그 번호이다. 적분은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고 "적분 (n)"은 그 번호이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호이다.

**준비.** 확장가측 (1)에 의해 모든 $F_k$는 $\mathcal{M}$의 원소이고, [[measurable-function|가측함수]]의 (6)과 확장가측 (3)의 (i)에 의해 $\chi_{F_k}$는 가측인 $[0, \infty]$ 값 함수이다. $x \in X$에서의 값이 $\varphi(x) = \sum_{k=1}^{\infty} \chi_{F_k}(x)$인 함수 $\varphi$를 두면, [[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]의 (1)과 적분 (5)($c = 1$)에 의해
$$
\begin{aligned}
\int \varphi\,d\mu &= \sum_{k=1}^{\infty} \int \chi_{F_k}\,d\mu \\
&= \sum_{k=1}^{\infty} \mu(F_k)
\end{aligned}
$$
이다. 이제 점마다 $\varphi(x)$를 구한다.

- $f(x) = \infty$이면 모든 자연수 $k$에서 $k \le \infty$이므로 $x \in F_k$이고 모든 항이 $1$이다. 합 (7)의 (i), (iv)와 $\mathbb{N}$이 무한집합이라는 것([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1))에 의해 $\varphi(x) = \infty = f(x)$이다.
- $f(x)$가 실수이면 $0 \le f(x)$이므로 [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $n - 1 \le f(x) < n$인 자연수 $n$이 정확히 하나 있다. $m = n - 1$로 두면 $m$은 $0$ 이상인 정수이고 $f(x)$ 이하인 정수 가운데 가장 크다. 자연수 $k$에 대하여 $k \le m$이면 $k \le f(x)$이고, $m < k$이면 [[prime-number|소수]]의 (Z1)에 의해 $n \le k$여서 $f(x) < k$이다. 따라서 항은 $k \le m$에서 $1$, $m < k$에서 $0$이고, 합 (4)를 $K = m$에 쓰고 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)를 쓰면 $\varphi(x) = m$이다($m = 0$이면 빈 합 $0$). $m \le f(x)$이다.

**1.** 준비에 의해 모든 $x$에서 $\varphi(x) \le f(x)$이므로 적분 (2)에 의해 $\sum_{k=1}^{\infty} \mu(F_k) = \int \varphi\,d\mu \le \int f\,d\mu$이다.

**2.** $f(x)$가 $0$이거나 자연수이면 그것이 $f(x)$ 이하인 정수 가운데 가장 큰 것이므로 준비의 $m$은 $f(x)$이고 $\varphi(x) = f(x)$이다. $f(x) = \infty$일 때도 준비에 의해 $\varphi(x) = f(x)$이다. 따라서 $\varphi = f$이고 1의 두 쪽은 같다.

**3.** $X = \{1\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$([[measure-examples|측도의 예]]의 (2))이고 $f$가 값이 $\tfrac12$인 상수함수라 하자. 모든 자연수 $k$에서 $\tfrac12 < 1 \le k$이므로 $F_k = \emptyset$이고 왼쪽은 $0$이다. 적분 (6)에 의해 $\int f\,d\delta_1 = f(1) = \tfrac12$이다. $0 < \tfrac12$이다.
:::

:::exercise[항별 적분으로 구하는 급수의 합]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu_x$를 $x_n = 3^{-n}$으로 정한 가중 셈측도라 하자. $f(n) = n$으로 정한 함수 $f$에 대하여 $\int f\,d\mu_x = \tfrac34$임을 보이고, $n$번째 항이 $n\,3^{-n}$인 수열의 급수가 수렴하여 합이 $\tfrac34$임을 끌어내라.
:::

:::solution
가중 셈측도는 [[measure-examples|측도의 예]]의 (3)의 것이고, "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 $\mathbb{N}$ 위의 모든 $[0, \infty]$ 값 함수는 가측이다. $r = \tfrac13$으로 두면 [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $3^{-n} = r^n$이다.

**$f$를 지시함수의 급수로 쓰기.** 자연수 $k$에서 $T_k = \{n \in \mathbb{N} : k \le n\}$으로 둔다. 자연수 $n$을 고정하면 $\chi_{T_k}(n)$은 $k \le n$에서 $1$, $n < k$에서 $0$이므로, 합 (4)를 $K = n$에 쓰고 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)를 쓰면 $\sum_{k=1}^{\infty} \chi_{T_k}(n) = n = f(n)$이다. [[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]의 (1)과 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 (5)에 의해
$$
\begin{aligned}
\int f\,d\mu_x &= \sum_{k=1}^{\infty} \int \chi_{T_k}\,d\mu_x \\
&= \sum_{k=1}^{\infty} \mu_x(T_k)
\end{aligned}
$$
이다.

**$\mu_x(T_k)$.** $p_j = j + k - 1$은 $p_j < p_{j+1}$이므로 [[subsequence|부분수열]]의 (2)에 의해 첨자열이고, 그 값의 집합은 $T_k$이다($n \in T_k$이면 $j = n - k + 1$이 자연수이고 $p_j = n$). 측도의 예의 (3)과 합 (7)의 (iii)에 의해 $\mu_x(T_k) = \sum_{j=1}^{\infty} r^{j+k-1}$이고, 이것은 정의에 의해 $\sum_{n=k}^{\infty} r^n$이다. 급수 (6)의 (iii)과 합 (3)의 (iii)에 의해
$$
\mu_x(T_k) = r^k (1 - r)^{-1} = \frac{1}{2} \Bigl(\frac{1}{3}\Bigr)^{k-1}
$$
이다(거듭제곱의 (1)의 $r^k = r^{k-1} r$와 $\tfrac13 \cdot \tfrac32 = \tfrac12$).

**합.** 급수 (6)의 (i)을 $a = \tfrac12$, $r = \tfrac13$에 쓰고 합 (3)의 (i)로 옮기면
$$
\int f\,d\mu_x = \frac{1/2}{1 - 1/3} = \frac{3}{4}
$$
이다. 한편 [[integral-with-respect-to-counting-measure|셈측도에 대한 적분과 급수]]의 (1)과 합 (7)의 (i)에 의해 $\int f\,d\mu_x = \sum_{n=1}^{\infty} n\,3^{-n}$이다(확장된 실수의 합). 항이 모두 실수이고 이 합이 $\tfrac34 < \infty$이므로, 합 (3)의 (i)에 의해 $n$번째 항이 $n\,3^{-n}$인 수열의 급수는 수렴하고 그 합은 [[sum-of-a-series|급수의 합의 기호]]의 뜻으로 $\tfrac34$이다. 검산으로 처음 세 부분합은 $\tfrac13$, $\tfrac13 + \tfrac29 = \tfrac59$, $\tfrac59 + \tfrac19 = \tfrac23$으로 $\tfrac34$보다 작다.
:::

:::exercise[함수가 높은 곳 위의 적분]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$를 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수라 하고 $\int f\,d\mu < \infty$라 하자. 자연수 $k$에서 $G_k = \{f > k\}$로 둔다. 모든 $\int_{G_k} f\,d\mu$가 실수이고, 실수열 $\bigl(\int_{G_k} f\,d\mu\bigr)$가 $0$으로 수렴함을 보여라.
:::

:::solution
$[0, \infty]$ 값 함수, $\{f > k\}$, $f\chi_A$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이고 "확장가측 (n)"은 그 번호이다. 적분과 그 성질은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고 "적분 (n)"은 그 번호이다. "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호이다.

**잘라 낸 함수의 열.** 정의에 의해 $G_k \in \mathcal{M}$이고 $L_k = X - G_k = \{f \le k\}$도 (σ2)에 의해 $\mathcal{M}$의 원소이다. $g_k = f\chi_{L_k}$는 확장가측 (4)의 (iii)에 의해 가측이고, 순서쌍 $(k, x)$에서 값이 $g_k(x)$인 함수열이 정해진다. $L_k \subseteq L_{k+1}$이므로 $x \in L_k$이면 $g_k(x) = f(x) = g_{k+1}(x)$이고, $x \notin L_k$이면 $g_k(x) = 0 \le g_{k+1}(x)$이다. 곧 모든 $x$에서 $(g_k(x))$는 단조증가이다. 그 극한을 구한다.

- $f(x)$가 실수이면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $f(x) < K$인 자연수 $K$가 있고, $K \le k$이면 $x \in L_k$이어서 $g_k(x) = f(x)$이다. 모든 $k$에서 $g_k(x) \le f(x)$이므로 상한, 곧 극한은 $f(x)$이다.
- $f(x) = \infty$이면 모든 $k$에서 $x \in G_k$이므로 $g_k(x) = 0$이고 극한은 $0$이다.

따라서 극한은 $h = f\chi_{\{f < \infty\}}$이다. [[monotone-convergence-theorem-for-integrals|적분의 단조 수렴 정리]]의 (1)에 의해 $(\int g_k\,d\mu)$는 단조증가이고 $\int h\,d\mu = \lim_{k \to \infty} \int g_k\,d\mu$이다.

**$\int h\,d\mu = \int f\,d\mu$.** [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 (2)에 의해 $\{f = \infty\}$는 측도가 0 인 집합이고, $h(x) \ne f(x)$인 점은 이 집합에 속한다. 따라서 $h = f$가 $\mu$-거의 어디서나 성립하고 같은 항목의 (4)에 의해 $\int h\,d\mu = \int f\,d\mu$이다.

**결론.** $L_k$와 $G_k$는 서로소이고 합집합이 $X$이므로 [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]의 (2)와 적분 (3)의 (i)에 의해
$$
\begin{aligned}
\int f\,d\mu &= \int_{L_k} f\,d\mu + \int_{G_k} f\,d\mu \\
&= \int g_k\,d\mu + \int_{G_k} f\,d\mu
\end{aligned}
$$
이다. 확장 (3)의 (ii)에 의해 두 항은 $\int f\,d\mu$ 이하이므로 확장 (2)의 (iv)에 의해 실수이고, $\int_{G_k} f\,d\mu = \int f\,d\mu - \int g_k\,d\mu$이다. 앞 문단에 의해 단조증가인 실수열 $(\int g_k\,d\mu)$의 극한(상한)은 실수 $\int f\,d\mu$이므로, 확장 (7)의 (iii)에 의해 이 실수열은 [[limit-of-sequence|수열의 극한]]의 뜻으로 $\int f\,d\mu$로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)와 (2)에 의해 $\bigl(\int_{G_k} f\,d\mu\bigr)$는 $\int f\,d\mu - \int f\,d\mu = 0$으로 수렴한다.
:::

:::exercise[모든 가측집합 위의 적분이 같은 두 함수]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$, $g$를 $X$ 위의 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수라 하고, 모든 $A \in \mathcal{M}$에서 $\int_A f\,d\mu = \int_A g\,d\mu$라 하자.

1. $\int f\,d\mu < \infty$이면 $f = g$가 $\mu$-거의 어디서나 성립함을 보여라.
2. 1에서 $\int f\,d\mu < \infty$라는 가정을 뺄 수 없는 예를 들어라.
:::

:::solution
적분은 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 것이고 "적분 (n)"은 그 번호이다. "확장가측 (n)"은 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 번호, "마르코프 (n)"은 [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 번호, "거의 (n)"은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 번호이다.

**1.** $A = X$로 두면 적분 (3)의 (i)에 의해 $\int g\,d\mu = \int f\,d\mu < \infty$이다. 마르코프 (2)에 의해 $N_f = \{f = \infty\}$와 $N_g = \{g = \infty\}$는 측도가 0 인 집합이다.

확장가측 (3)의 (ii)의 실숫값 함수 $f_0$, $g_0$($\infty$인 곳의 값을 $0$으로 바꾼 것)은 가측이다. [[measurable-function|가측함수]]의 (7)과 [[sigma-algebra|σ-대수]]의 (1)에 의해
$$
E = \{f_0 < g_0\} - (N_f \cup N_g)
$$
는 $\mathcal{M}$의 원소이고, $x \in E$이면 $f(x) = f_0(x)$와 $g(x) = g_0(x)$는 실수이고 $f(x) < g(x)$이다. $h = (g_0 - f_0)\chi_E$로 두면, [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)과 가측함수의 (6)에 의해 $h$는 가측인 실숫값 함수이고, $E$ 위에서 $0 < h(x)$, $E$ 밖에서 $h(x) = 0$이다. 값이 $0$ 이상이므로 확장가측 (3)의 (i)에 의해 가측인 $[0, \infty]$ 값 함수이기도 하다.

모든 $x \in X$에서 $g(x)\chi_E(x) = f(x)\chi_E(x) + h(x)$이다. $x \in E$이면 실수의 계산으로 $g(x) = f(x) + (g(x) - f(x))$이고, $x \notin E$이면 세 값이 모두 $0$이기 때문이다. [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]의 (1)에 의해
$$
\int_E g\,d\mu = \int_E f\,d\mu + \int h\,d\mu
$$
이다. 적분 (3)의 (i)에 의해 $\int_E f\,d\mu \le \int f\,d\mu < \infty$이므로 $c = \int_E f\,d\mu$는 실수이고, 가정에 의해 왼쪽도 $c$이다. $\int h\,d\mu = \infty$이면 오른쪽이 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (3)의 (i)에 의해 $\infty \ne c$가 되므로 $\int h\,d\mu$는 실수이고, 실수의 등식 $c = c + \int h\,d\mu$에서 $\int h\,d\mu = 0$이다. 마르코프 (3)에 의해 $\mu(\{h > 0\}) = 0$이고 $\{h > 0\} = E$이다.

$f$와 $g$의 자리를 바꾸어 같은 논법을 쓰면 $E' = \{g_0 < f_0\} - (N_f \cup N_g)$도 측도가 0 인 집합이다(가정은 대칭이고 $\int g\,d\mu < \infty$이다). $f(x) \ne g(x)$이고 $x \notin N_f \cup N_g$이면 $f(x) = f_0(x)$와 $g(x) = g_0(x)$가 서로 다른 실수이므로 $x \in E$이거나 $x \in E'$이다. 따라서 열린 문장 $f(x) = g(x)$의 예외 집합은 $N_f \cup N_g \cup E \cup E'$에 포함되고, 거의 (1)의 (ii)를 세 번 쓰면 이 합집합은 측도가 0 인 집합이다. 곧 $f = g$ $\mu$-거의 어디서나이다.

**2.** $X = \{1\}$, $\mathcal{M} = \mathscr{P}(X) = \{\emptyset, X\}$이고, [[measure-examples|측도의 예]]의 (2)와 (5)의 (i)에 의해 측도인 $\mu = \infty\,\delta_1$을 잡는다. 곧 $\mu(\emptyset) = \infty \cdot 0 = 0$, $\mu(X) = \infty \cdot 1 = \infty$이다. $f$, $g$를 값이 $1$, $2$인 상수함수라 하면 적분 (5)에 의해
$$
\begin{gathered}
\int_{\emptyset} f\,d\mu = 1 \cdot 0 = 0, \\
\int_{\emptyset} g\,d\mu = 2 \cdot 0 = 0, \\
\int_X f\,d\mu = 1 \cdot \infty = \infty, \\
\int_X g\,d\mu = 2 \cdot \infty = \infty
\end{gathered}
$$
이므로 가정은 성립하지만 $\int f\,d\mu = \infty$이다. $f(x) = g(x)$의 예외 집합은 $X$이고 가측이며 $\mu(X) = \infty \ne 0$이므로, 거의 (2)의 (i)에 의해 $f = g$는 $\mu$-거의 어디서나 성립하지 않는다. 1의 증명에서는 $c = \int_E f\,d\mu$가 실수라는 것을 쓴 자리가 이 경우에 막힌다.
:::
