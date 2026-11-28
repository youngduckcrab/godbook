---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "6.4절 Exercises, Exercise 6.5 (p.185) — 문제 4 의 2 가 함께 주는 결론(적분가능한 함수의 절댓값이 일정 이상인 집합의 측도가 실수이다)"
added: 2026-11-28
---

:::exercise[가중치에 ∞ 가 있는 가중 셈측도의 적분가능성]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고, $x_1 = \infty$이며 $2$ 이상인 자연수 $n$에서 $x_n = 2^{-n}$인 $[0, \infty]$의 원소열 $(x_n)$으로 정한 가중 셈측도를 $\mu_x$라 하자.

1. $\mathbb{N}$ 위의 실숫값 함수 $f$가 $\mu_x$-적분가능인 것은 정확히 $f(1) = 0$이고 $n \ge 2$에서 정해진 항 $|f(n)|\,2^{-n}$의 급수가 수렴할 때임을 보여라.
2. $f$가 $\mu_x$-적분가능하면 $n \ge 2$에서 정해진 항 $f(n)\,2^{-n}$의 급수가 수렴하고 $\int f\,d\mu_x = \sum_{n=2}^{\infty} f(n)\,2^{-n}$임을 보여라.
3. $g(1) = 0$이고 $n \ge 2$에서 $g(n) = (-1)^n$인 함수 $g$와, 값이 $1$인 상수함수 $h$가 각각 $\mu_x$-적분가능한지 밝히고, 적분가능하면 적분을 구하라.
:::

:::solution
가중 셈측도는 [[measure-examples|측도의 예]]의 (3)의 것이다. "적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호, "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다.

**준비.** $\mathbb{N}$ 위의 실숫값 함수 $f$와 실수 $c$에서 $\{f > c\}$는 $\mathbb{N}$의 부분집합이므로 $\mathcal{M}$의 원소이고, [[measurable-function|가측함수]]의 (2)에 의해 $f$는 가측이다. $u$가 모든 값이 $0$ 이상인 $\mathbb{N}$ 위의 실숫값 함수이면 [[integral-with-respect-to-counting-measure|셈측도에 대한 적분과 급수]]의 (1)과 합 (7)의 (i)에 의해 $\int u\,d\mu_x = \sum_{n=1}^{\infty} u(n)\,x_n$이고, 합 (4)를 $K = 1$에 쓰고 합 (1)의 (i)을 쓰면
$$
\int u\,d\mu_x = u(1)\,\infty + \sum_{n=2}^{\infty} u(n)\,2^{-n}
$$
이다(합과 곱은 $[0, \infty]$의 것). 확장 (4)의 (i)에 의해 첫째 항은 $u(1) = 0$이면 $0$, $u(1) > 0$이면 $\infty$이다. 둘째 항은 항이 모두 $0$ 이상인 실수이므로, 합 (3)의 (iii)에 의해 $\infty$보다 작은 것은 정확히 $n \ge 2$에서 정해진 항 $u(n)\,2^{-n}$의 급수가 수렴할 때이고 그때 그 급수의 합과 같다.

**1.** $f$는 가측이므로 정의에 의해 $f$가 $\mu_x$-적분가능인 것은 정확히 $\int |f|\,d\mu_x < \infty$일 때이다. 준비를 $u = |f|$에 쓴다. $f(1) \ne 0$이면 $|f(1)| > 0$이므로 첫째 항이 $\infty$이고 확장 (3)의 (i)에 의해 $\int |f|\,d\mu_x = \infty$이다. $f(1) = 0$이면 첫째 항이 $0$이므로 $\int |f|\,d\mu_x = \sum_{n=2}^{\infty} |f(n)|\,2^{-n}$이고, 이것이 $\infty$보다 작은 것은 정확히 그 급수가 수렴할 때이다. 따라서 1이 성립한다.

**2.** $f$가 $\mu_x$-적분가능하면 1에 의해 $f(1) = 0$이므로 $f^+(1) = f^-(1) = 0$이다. 적분가능 (1)에 의해 $\int f^+\,d\mu_x$와 $\int f^-\,d\mu_x$는 실수이므로, 준비를 $u = f^+$, $u = f^-$에 쓰면 $n \ge 2$에서 정해진 항 $f^+(n)\,2^{-n}$과 $f^-(n)\,2^{-n}$의 급수는 수렴하고 그 합이 각각 $\int f^+\,d\mu_x$, $\int f^-\,d\mu_x$이다. 가측함수의 (5)에 의해 $f(n) = f^+(n) - f^-(n)$이므로 급수 (3)에 의해 $f(n)\,2^{-n}$의 급수도 수렴하고, 적분의 정의에 의해
$$
\begin{aligned}
\int f\,d\mu_x &= \int f^+\,d\mu_x - \int f^-\,d\mu_x \\
&= \sum_{n=2}^{\infty} f(n)\,2^{-n}
\end{aligned}
$$
이다.

**3.** $g(1) = 0$이고 $n \ge 2$에서 [[power-of-a-real-number|실수의 거듭제곱]]의 (4), (5)에 의해 $|g(n)| = 1$이다. 급수 (6)의 (iii)을 $r = \tfrac12$, $m = 2$에 쓰면 $\sum_{n=2}^{\infty} 2^{-n} = \tfrac{1/4}{1 - 1/2} = \tfrac12$로 수렴하므로(거듭제곱의 (3)에 의해 $2^{-n} = (\tfrac12)^n$), 1에 의해 $g$는 $\mu_x$-적분가능하다. 거듭제곱의 (2)의 (iii)과 (3)에 의해 $(-1)^n 2^{-n} = (-\tfrac12)^n$이므로, 2와 급수 (6)의 (iii)($r = -\tfrac12$, $m = 2$)에 의해
$$
\int g\,d\mu_x = \sum_{n=2}^{\infty} \Bigl(-\frac{1}{2}\Bigr)^n = \frac{1/4}{1 + 1/2} = \frac{1}{6}
$$
이다. 한편 $h(1) = 1 \ne 0$이므로 1에 의해 $h$는 $\mu_x$-적분가능하지 않다. 실제로 준비에 의해 $\int h\,d\mu_x = \infty$이다. $n \ge 2$에서의 값 $h(n)$만 보면 그 급수는 $g$의 절댓값의 급수와 같아 수렴하지만, 가중치가 $\infty$인 점 $1$에서 값이 $0$이 아니면 적분가능하지 않다.
:::

:::exercise[가측집합 위의 적분의 평균값 부등식]
$(X, \mathcal{M}, \mu)$를 측도공간, $A \in \mathcal{M}$을 $\mu(A) < \infty$인 집합, $f$를 $\mu$-적분가능한 실숫값 함수라 하고, 실수 $a$, $b$가 $A$의 모든 원소 $x$에서 $a \le f(x) \le b$를 만족한다고 하자.

1. $a\,\mu(A) \le \int_A f\,d\mu \le b\,\mu(A)$임을 보여라. $\mu(A) > 0$이면 $\mu(A)^{-1} \int_A f\,d\mu$가 $a$ 이상 $b$ 이하임을 보여라.
2. $\int_A f\,d\mu = b\,\mu(A)$이면 $\mu(\{x \in A : f(x) < b\}) = 0$임을 보여라.
:::

:::solution
"적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호이고, "선형 (n)"은 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 번호이다. $\mu(A)$는 실수이다. $\chi_A$는 [[indicator-function|지시함수]]이다.

**1.** 적분가능 (5)의 (i)에 의해 $f\chi_A$는 $\mu$-적분가능하고 $\int f\chi_A\,d\mu = \int_A f\,d\mu$이다. 적분가능 (6)의 (i)에 의해 $b\chi_A$와 $a\chi_A$는 $\mu$-적분가능하고 $\int b\chi_A\,d\mu = b\,\mu(A)$, $\int a\chi_A\,d\mu = a\,\mu(A)$이다. 모든 $x \in X$에서 $a\chi_A(x) \le f(x)\chi_A(x) \le b\chi_A(x)$이다. $x \in A$이면 지시함수의 (1)에 의해 세 값이 $a$, $f(x)$, $b$이고, $x \notin A$이면 세 값이 모두 $0$이기 때문이다. 선형 (4)를 집합 $X$에서 쓰고 적분가능 (5)의 (i)의 $\int_X = \int$를 쓰면
$$
a\,\mu(A) \le \int_A f\,d\mu \le b\,\mu(A)
$$
이다. $\mu(A) > 0$이면 이 부등식에 양수 $\mu(A)^{-1}$을 곱해 [[order-properties-of-reals|실수의 순서 성질]]로 $a \le \mu(A)^{-1}\int_A f\,d\mu \le b$를 얻는다.

**2.** $u = b\chi_A - f\chi_A$로 두면 선형 (2)에 의해 $u$는 $\mu$-적분가능하고 $\int u\,d\mu = b\,\mu(A) - \int_A f\,d\mu = 0$이다. 1의 부등식에 의해 모든 $x$에서 $u(x) \ge 0$이므로, 적분가능 (2)에 의해 [[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]의 뜻으로도 $\int u\,d\mu = 0$이다. [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 (3)에 의해 $\mu(\{u > 0\}) = 0$이다. $x \notin A$이면 $u(x) = 0$이고 $x \in A$이면 $u(x) = b - f(x)$이므로 $\{u > 0\} = \{x \in A : f(x) < b\}$이다. 따라서 이 집합의 측도는 $0$이다.

$A = \emptyset$이면 1과 2의 모든 값이 $0$이어서 문제의 진술은 그대로 성립한다. $\mu(A) < \infty$라는 가정은 $b\chi_A$와 $a\chi_A$가 $\mu$-적분가능하다는 데 쓰인다($a \ne 0$, $b \ne 0$일 때 적분가능 (6)의 (ii)에 의해 이 가정이 없으면 그렇지 않다).
:::

:::exercise[적분이 가장 큰 가측집합]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$를 $\mu$-적분가능한 실숫값 함수라 하고 $P = \{f > 0\}$으로 둔다.

1. $P \in \mathcal{M}$이고 $\int_P f\,d\mu = \int f^+\,d\mu$, $\int_{X - P} f\,d\mu = -\int f^-\,d\mu$임을 보여라.
2. 모든 $A \in \mathcal{M}$에서 $-\int f^-\,d\mu \le \int_A f\,d\mu \le \int f^+\,d\mu$임을 보여라.
3. 실수 $\int_A f\,d\mu$ ($A \in \mathcal{M}$) 전체의 집합이 가장 큰 원소 $\int f^+\,d\mu$와 가장 작은 원소 $-\int f^-\,d\mu$를 가짐을 보여라. 또 모든 $A \in \mathcal{M}$에서 $\left|\int_A f\,d\mu\right| \le \max\bigl\{\int f^+\,d\mu, \int f^-\,d\mu\bigr\}$임을 보여라.
:::

:::solution
"적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호이고, "선형 (n)"은 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 번호이다. 적분가능 (1)에 의해 $\int f^+\,d\mu$와 $\int f^-\,d\mu$는 실수이다.

**1.** [[measurable-function|가측함수]]의 (2)를 $c = 0$에 쓰면 $P \in \mathcal{M}$이고, [[sigma-algebra|σ-대수와 가측공간]]에 의해 $X - P \in \mathcal{M}$이다. 두 함수의 값을 점마다 비교한다. $x \in P$이면 $f(x) > 0$이므로 $f^+(x) = f(x)$, $f^-(x) = 0$이고, $x \notin P$이면 $f(x) \le 0$이므로 $f^+(x) = 0$, $f^-(x) = -f(x)$이다([[positive-and-negative-parts|양의 부분과 음의 부분]]의 정의). 그래서 [[indicator-function|지시함수]]의 (1)에 의해 모든 $x$에서
$$
\begin{gathered}
f(x)\chi_P(x) = f^+(x), \\
f(x)\chi_{X - P}(x) = -f^-(x)
\end{gathered}
$$
이다. 적분가능 (3)의 (ii)에 의해 $f^+$와 $f^-$는 $\mu$-적분가능하고($|f^\pm| \le |f|$), 적분가능 (5)의 (i)과 선형 (1)($c = -1$)에 의해 $\int_P f\,d\mu = \int f^+\,d\mu$, $\int_{X - P} f\,d\mu = -\int f^-\,d\mu$이다. 오른쪽의 $\int f^\pm\,d\mu$는 적분가능 (2)에 의해 두 뜻의 적분이 같다.

**2.** $B \in \mathcal{M}$이 $B \subseteq P$이면 $\int_B f\,d\mu \ge 0$이고, $B \subseteq X - P$이면 $\int_B f\,d\mu \le 0$이다. 앞의 경우 모든 $x$에서 $f(x)\chi_B(x) \ge 0$이므로 선형 (4)와 적분가능 (6)의 (iii)(값이 $0$인 상수함수의 적분은 $0$)과 (5)의 (i)에 의해 그렇고, 뒤의 경우도 같다.

$A \in \mathcal{M}$이라 하자. $A \cap P$와 $A - P$는 $\mathcal{M}$의 서로소인 원소이고 합집합이 $A$이므로 선형 (6)에 의해 $\int_A f\,d\mu = \int_{A \cap P} f\,d\mu + \int_{A - P} f\,d\mu$이다. 또 $A \cap P$와 $P - A$는 서로소이고 합집합이 $P$이므로 $\int_P f\,d\mu = \int_{A \cap P} f\,d\mu + \int_{P - A} f\,d\mu$이다. 위의 부호에 의해 $\int_{A - P} f\,d\mu \le 0$이고 $\int_{P - A} f\,d\mu \ge 0$이므로
$$
\begin{aligned}
\int_A f\,d\mu &\le \int_{A \cap P} f\,d\mu \\
&\le \int_P f\,d\mu = \int f^+\,d\mu
\end{aligned}
$$
이다. 같은 방법으로 $A - P$와 $(X - P) - A$로 $X - P$를 나누면 $\int_{X - P} f\,d\mu \le \int_{A - P} f\,d\mu \le \int_A f\,d\mu$이고, 1에 의해 왼쪽은 $-\int f^-\,d\mu$이다.

**3.** 1에 의해 $\int f^+\,d\mu$와 $-\int f^-\,d\mu$는 각각 $A = P$, $A = X - P$일 때의 값으로 이 집합의 원소이고, 2에 의해 각각 가장 큰 원소와 가장 작은 원소이다. $A \in \mathcal{M}$에서 $\int_A f\,d\mu \ge 0$이면 2에 의해 $\left|\int_A f\,d\mu\right| \le \int f^+\,d\mu$이고, $\int_A f\,d\mu < 0$이면 $\left|\int_A f\,d\mu\right| = -\int_A f\,d\mu \le \int f^-\,d\mu$이다. 두 경우 모두 오른쪽은 두 수의 최대 이하이다.

예를 들어 $f$의 모든 값이 $0$ 이상이면 $f^-$는 값이 $0$인 상수함수이므로 가장 작은 원소는 $0$이고 그것은 $A = \emptyset$에서도 나온다. $\mu$가 영측도이면 모든 $A \in \mathcal{M}$이 측도가 0 인 집합이므로 적분가능 (5)의 (ii)에 의해 모든 $\int_A f\,d\mu$가 $0$이고, 이 집합은 $\{0\}$이다.
:::

:::exercise[절댓값이 큰 곳 위의 적분]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$를 $\mu$-적분가능한 실숫값 함수라 하고, 자연수 $k$마다 $E_k = \{|f| \ge k\}$로 둔다.

1. 모든 $E_k$가 $\mathcal{M}$의 원소이고 $\lim_{k \to \infty} \int_{E_k} |f|\,d\mu = 0$임을 보여라.
2. 모든 $\mu(E_k)$가 실수이고 $\lim_{k \to \infty} k\,\mu(E_k) = 0$임을 보여라.
3. $\lim_{k \to \infty} \int_{X - E_k} |f|\,d\mu = \int |f|\,d\mu$임을 보여라.
:::

:::solution
"적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호이고, "선형 (n)"은 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 번호이다. 적분가능 (3)의 (i)에 의해 $|f|$는 $\mu$-적분가능하다.

**1.** [[measurable-function|가측함수]]의 (5)에 의해 $|f|$는 가측이고, 같은 항목의 (2)의 (c)에 의해 $E_k \in \mathcal{M}$이다. 적분가능 (5)의 (i)에 의해 $u_k = |f|\chi_{E_k}$는 $\mu$-적분가능하고 $\int u_k\,d\mu = \int_{E_k} |f|\,d\mu$이다. $x \in X$를 고정하면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $|f(x)| < K$인 자연수 $K$가 있고, $k \ge K$이면 $|f(x)| < k$이므로 $x \notin E_k$이고 $u_k(x) = 0$이다. 그래서 [[tail-of-a-sequence|수열의 꼬리]]의 (1)과 [[basic-limits|기본적인 극한]]의 (1)에 의해 $(u_k(x))$는 $0$으로 수렴한다. 또 [[indicator-function|지시함수]]의 (1)에 의해 모든 $x$와 $k$에서 $|u_k(x)| \le |f(x)|$이다. [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]의 (1)을 지배 함수 $|f|$, 극한인 값이 $0$인 상수함수, $N = \emptyset$에 쓰면, 그 (iii)과 적분가능 (6)의 (iii)에 의해 $\int_{E_k} |f|\,d\mu = \int u_k\,d\mu \to 0$이다.

**2.** [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]의 (1)을 $|f|$와 $t = k$에 쓰면 $k\,\mu(E_k) \le \int |f|\,d\mu$이고, 오른쪽이 실수이므로 $\mu(E_k)$는 실수이다. 그러면 적분가능 (6)의 (i)에 의해 $k\chi_{E_k}$는 $\mu$-적분가능하고 적분이 $k\,\mu(E_k)$이다. $x \in E_k$이면 $k \le |f(x)|$이고 $x \notin E_k$이면 두 값이 $0$이므로 모든 점에서 $k\chi_{E_k} \le u_k$이고, 선형 (4)에 의해
$$
0 \le k\,\mu(E_k) \le \int_{E_k} |f|\,d\mu
$$
이다. 1에 의해 오른쪽이 $0$으로 수렴하므로 [[squeeze-lemma|조임 정리]]에 의해 $k\,\mu(E_k) \to 0$이다.

**3.** $E_k$와 $X - E_k$는 $\mathcal{M}$의 서로소인 원소이고 합집합이 $X$이므로, 선형 (6)과 적분가능 (5)의 (i)에 의해 $\int |f|\,d\mu = \int_{E_k} |f|\,d\mu + \int_{X - E_k} |f|\,d\mu$이다. 따라서 $\int_{X - E_k} |f|\,d\mu = \int |f|\,d\mu - \int_{E_k} |f|\,d\mu$이고, 1과 [[limit-of-sum-and-product|극한의 사칙연산]]의 (2), 기본적인 극한의 (1)에 의해 이 수열은 $\int |f|\,d\mu$로 수렴한다.

2에서 $\mu(E_k)$가 실수라는 것만으로는 $k\,\mu(E_k) \to 0$이 나오지 않는다. 마르코프 부등식이 주는 것은 $k\,\mu(E_k)$가 $\int |f|\,d\mu$ 이하라는 것뿐이고, $0$으로 간다는 것은 1의 극한을 거쳐 얻는다.
:::

:::exercise[거듭제곱의 역수를 부호를 바꿔 더한 이중급수]
자연수 $k$, $l$에서 $a_{k,l} = (-1)^{k+1}(l + 1)^{-(k+1)}$로 정한 실수의 이중첨수 수열을 생각한다. 여기서 $(l + 1)^{-(k+1)}$은 $\bigl((l + 1)^{k+1}\bigr)^{-1}$이다.

1. $(k, l)$에서의 값이 $|a_{k,l}|$인 이중첨수 원소열의 반복합 $S$가 $1$임을 보여라.
2. 모든 자연수 $k$에서 $l$번째 항이 $(l + 1)^{-(k+1)}$인 수열의 급수가 수렴함을 보이고, 그 합을 $z_k$라 할 때 $k$번째 항이 $(-1)^{k+1} z_k$인 수열의 급수가 수렴하여
   $$
   \sum_{k=1}^{\infty} (-1)^{k+1} z_k = \frac{1}{2}
   $$
   임을 보여라.
:::

:::solution
실수의 이중첨수 수열, $S$, 행의 합 $r_k$, 열의 합 $c_l$, $T$는 [[fubini-for-double-series|절대수렴하는 이중급수의 합의 순서 바꾸기]]의 것이고 "이중 (n)"은 그 번호이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. 자연수 $l$마다 $q_l = (l + 1)^{-1}$로 두면 $0 < q_l \le \tfrac12$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(l + 1)^{-(k+1)} = q_l^{k+1}$이다.

**1.** $l$을 고정하면 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 열마다 더한 반복합의 $l$번째 항은 $\sum_{k=1}^{\infty} q_l^{k+1}$이다. 급수 (1)에 의해 이것은 $n \ge 2$에서 정해진 항 $q_l^n$의 합이고, 급수 (6)의 (iii)과 합 (3)의 (iii)에 의해
$$
\begin{aligned}
\sum_{k=1}^{\infty} q_l^{k+1} &= \frac{q_l^2}{1 - q_l} \\
&= \frac{(l + 1)^{-2}}{l\,(l + 1)^{-1}} = \frac{1}{l(l + 1)}
\end{aligned}
$$
이다. [[comparison-test|비교 판정법]]의 (5)에 의해 $l$번째 항이 $\bigl(l(l + 1)\bigr)^{-1}$인 수열의 급수는 합이 $1$이므로, 합 (3)의 (i)에 의해 열마다 더한 반복합은 $1$이다. 이중급수 정리의 (2)에 의해 $S = 1$이다.

**2.** $S = 1 < \infty$이므로 이중 (1)에 의해 모든 $k$에서 $l$번째 항이 $a_{k,l}$인 수열의 급수는 절대수렴한다. 그 절댓값의 급수가 $l$번째 항이 $(l + 1)^{-(k+1)}$인 수열의 급수이므로 이 급수는 수렴하고, [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $r_k = (-1)^{k+1} z_k$이다.

이제 열의 합을 구한다. 거듭제곱의 (2)에 의해 $a_{k,l} = q_l^2\,(-q_l)^{k-1}$이다($(-1)^{k+1} = (-1)^{k-1}$이고 $q_l^{k+1} = q_l^2\,q_l^{k-1}$). $|-q_l| < 1$이므로 급수 (6)의 (i)에 의해
$$
\begin{aligned}
c_l &= \sum_{k=1}^{\infty} q_l^2\,(-q_l)^{k-1} = \frac{q_l^2}{1 + q_l} \\
&= \frac{(l + 1)^{-2}}{(l + 2)(l + 1)^{-1}} \\
&= \frac{1}{(l + 1)(l + 2)}
\end{aligned}
$$
이다. $n \ge 2$에서 정해진 항 $\bigl(n(n + 1)\bigr)^{-1}$의 급수는 급수 (1)에 의해 $l$번째 항이 $c_l$인 수열의 급수와 같고, 비교 판정법의 (5)와 급수 (2)를 $K = 1$에 쓰면 그 합은 $1 - \tfrac12 = \tfrac12$이다. 이중 (2)에 의해 $k$번째 항이 $r_k$인 수열의 급수도 수렴하고 $\sum_{k=1}^{\infty} r_k = \sum_{l=1}^{\infty} c_l = \tfrac12$이다. 이중 (4)대로 $|T| = \tfrac12 \le 1 = S$이다.

검산으로 $z_1 = \sum_{n=2}^{\infty} n^{-2}$은 $0.644\ldots$, $z_2 = \sum_{n=2}^{\infty} n^{-3}$은 $0.202\ldots$, $z_3$은 $0.082\ldots$이고 $z_1 - z_2 + z_3 = 0.525\ldots$이다. 부호를 떼고 더하면 1에 의해 $\sum_{k=1}^{\infty} z_k = 1$이다(합 (3)의 (i)).
:::

:::exercise[적분이 모두 0 이고 점마다 1 로 가는 함수열의 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서, 자연수 $k$마다 $P_k = \{1, \dots, k\}$, $Q_k = \{1, \dots, 2k\} - P_k$로 두고 $f_k = \chi_{P_k} - \chi_{Q_k}$라 하자.

1. 모든 $f_k$가 $\mu^{\sharp}$-적분가능하고 $\int f_k\,d\mu^{\sharp} = 0$, $\int |f_k|\,d\mu^{\sharp} = 2k$임을 보여라.
2. 모든 $n$에서 $(f_k(n))$이 $1$로 수렴하지만, 그 극한인 값이 $1$인 상수함수는 $\mu^{\sharp}$-적분가능하지 않음을 보여라.
3. 모든 $k$와 $n$에서 $|f_k(n)| \le g(n)$인 $\mu^{\sharp}$-적분가능한 함수 $g$가 없음을 보이고, $(f_k)$가 모든 점에서 증가하는 열도 아님을 보여라.
:::

:::solution
"적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호이다. [[finite-set|유한집합]]의 (F2), [[number-of-elements-is-unique|원소의 개수]], [[measure-examples|측도의 예]]의 (4)에 의해 $\mu^{\sharp}(P_k) = k$, $\mu^{\sharp}(\{1, \dots, 2k\}) = 2k$이고, $P_k \subseteq \{1, \dots, 2k\}$이므로 [[measure|측도와 측도공간]]의 (2)의 (i)에 의해 $\mu^{\sharp}(Q_k) = 2k - k = k$이다.

**1.** 적분가능 (6)의 (i)에 의해 $\chi_{P_k}$와 $\chi_{Q_k}$는 $\mu^{\sharp}$-적분가능하고 적분이 각각 $k$이다. [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 (2)에 의해 $f_k$는 $\mu^{\sharp}$-적분가능하고 $\int f_k\,d\mu^{\sharp} = k - k = 0$이다. $P_k$와 $Q_k$는 서로소이고 합집합이 $\{1, \dots, 2k\}$이므로 [[indicator-function|지시함수]]의 (1)에 의해 모든 점에서 $|f_k| = \chi_{\{1, \dots, 2k\}}$이고, 적분가능 (6)의 (i)에 의해 $\int |f_k|\,d\mu^{\sharp} = 2k$이다.

**2.** $n$을 고정하면 $k \ge n$인 모든 $k$에서 $n \in P_k$이므로 $f_k(n) = 1$이다. 그래서 [[tail-of-a-sequence|수열의 꼬리]]의 (1)과 [[basic-limits|기본적인 극한]]의 (1)에 의해 $(f_k(n))$은 $1$로 수렴한다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이므로 측도의 예의 (4)에 의해 $\mu^{\sharp}(\mathbb{N}) = \infty$이고, 적분가능 (6)의 (ii)에 의해 값이 $1$인 상수함수는 $\mu^{\sharp}$-적분가능하지 않다.

**3.** 그런 $g$가 있다고 하자. $n$에서 $k = n$으로 두면 $n \in P_n$이므로 $1 = |f_n(n)| \le g(n)$이다. 그래서 모든 $n$에서 $1 \le |g(n)|$이고, $n$번째 항이 $|g(n)|$인 수열은 $0$으로 수렴하지 않으므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 그 급수는 수렴하지 않는다. 적분가능 (9)의 (iii)에 의해 $g$는 $\mu^{\sharp}$-적분가능하지 않으므로 모순이다. 또 $f_1(3) = 0$이고 $3 \in Q_2$이므로 $f_2(3) = -1 < f_1(3)$이어서 $(f_k)$는 모든 점에서 증가하는 열이 아니다.

그래서 이 열에는 [[dominated-convergence-theorem-for-integrals|적분의 지배 수렴 정리]]도, 적분의 선형성과 단조성의 (8)의 (i)도 쓰이지 않는다. 적분들이 유계이고 점마다 수렴하는 것만으로는 극한이 $\mu$-적분가능하지 않을 수 있다.
:::
