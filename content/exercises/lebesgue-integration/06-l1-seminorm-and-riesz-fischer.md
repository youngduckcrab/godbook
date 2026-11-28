---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "8.2절 Riesz–Weyl Theorem, Theorem 8.18 (p.238) — 문제 5 의 결론을 포함하는 정리(측도로 수렴하고 적분가능한 하나의 함수로 지배되면 Lᵖ 수렴한다). 문제 5 는 유한 측도에서 상수로 지배되는 경우를 측도 수렴의 정의만으로 증명한다"
added: 2026-11-28
---

:::exercise[가중 셈측도에서 높이가 커지는 꼬리의 지시함수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu_x$를 $x_n = 2^{-n}$으로 정한 가중 셈측도라 하자. 자연수 $k$마다 $T_k = \{n \in \mathbb{N} : k \le n\}$, $g_k = k\,\chi_{T_k}$로 둔다.

1. 모든 $g_k$가 $\mathcal{L}^1(\mu_x)$의 원소이고 $\lVert g_k \rVert_1 = k\,2^{1-k}$이며, $(g_k)$가 값이 $0$인 상수함수로 L¹ 수렴함을 보여라.
2. $0 < t \le k$이면 $\mu_x(\{|g_k| \ge t\}) = 2^{1-k}$임을 보이고, 이것이 [[l1-convergence-and-almost-everywhere|L¹ 수렴과 μ-거의 어디서나 수렴]]의 (3)의 부등식을 만족함을 확인하라.
3. 모든 자연수 $p$에서 $(g_k(p))$가 $0$으로 수렴함을 같은 항목의 (4)로 얻고, 직접도 확인하라.
:::

:::solution
가중 셈측도는 [[measure-examples|측도의 예]]의 (3)의 것이고, $\mathcal{L}^1$, $\lVert \cdot \rVert_1$, L¹ 수렴은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 것이며 "반노름 (n)"은 그 번호이다. "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 [[measurable-function|가측함수]]의 (2)에 의해 $\mathbb{N}$ 위의 모든 실숫값 함수는 가측이다.

**$\mu_x(T_k)$.** 측도의 예의 (3)과 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (7)의 (iii)을 $T_k$를 차례로 늘어놓은 첨자열, 곧 $j$에서의 값이 $j + k - 1$인 첨자열([[subsequence|부분수열]]의 (2))에 쓰고, 급수 (1), (6)의 (iii)과 확장된 실수의 합의 (3)의 (iii)을 쓰면
$$
\mu_x(T_k) = \sum_{n=k}^{\infty} \Bigl(\frac{1}{2}\Bigr)^n = \frac{(1/2)^k}{1 - 1/2} = 2^{1-k}
$$
이다([[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $2^{-n} = (\tfrac12)^n$).

**1.** $\mu_x(T_k)$가 실수이므로 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $g_k$는 $\mu_x$-적분가능하고 $\int g_k\,d\mu_x = k\,2^{1-k}$이다. $g_k$의 값이 $0$ 이상이므로 $|g_k| = g_k$이고 반노름 (1)의 (ii)에 의해 $\lVert g_k \rVert_1 = k\,2^{1-k}$이다. $y_k = k\,2^{1-k}$로 두면 $k \ge 2$에서 $y_{k+1}/y_k = (k + 1)/(2k) \le \tfrac34$이므로($4k + 4 \le 6k$), [[ratio-test-for-series|급수의 비 판정법]]의 (1)에 의해 $(y_k)$의 급수는 수렴하고 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 $y_k \to 0$이다. 값이 $0$인 상수함수를 $0$이라 쓰면 $g_k - 0 = g_k$이므로 $\lVert g_k - 0 \rVert_1 = y_k \to 0$이고, 반노름 (1)의 (i)에 의해 $0 \in \mathcal{L}^1(\mu_x)$이므로 $(g_k)$는 $0$으로 L¹ 수렴한다.

**2.** $0 < t \le k$이면 $g_k(n) \ge t$인 것은 정확히 $n \in T_k$일 때이므로($n \notin T_k$이면 $g_k(n) = 0 < t$) $\{|g_k| \ge t\} = T_k$이고 그 측도는 $2^{1-k}$이다. 그 항목의 (3)의 부등식은 $t \cdot 2^{1-k} \le k\,2^{1-k} = \lVert g_k - 0 \rVert_1$이고, $t \le k$이므로 성립한다. $t > k$이면 $\{|g_k| \ge t\} = \emptyset$이어서 측도가 $0$이다.

**3.** $\{p\} \in \mathcal{M}$이고 측도의 예의 (3)과 확장된 실수의 합의 (7)의 (i)에 의해 $\mu_x(\{p\}) = 2^{-p}$는 양의 실수이므로, [[l1-convergence-and-almost-everywhere|L¹ 수렴과 μ-거의 어디서나 수렴]]의 (4)와 1에 의해 $(g_k(p))$는 $0$으로 수렴한다. 직접 보면 $k > p$이면 $p \notin T_k$이므로 $g_k(p) = 0$이다. 그 앞의 항 $g_k(p) = k$($k \le p$)는 커지지만 처음 $p$개뿐이다. 값 $\sup_k g_k(p) = p$가 끝없이 커져도 L¹ 수렴하는 까닭은 높이 $k$가 놓인 $T_k$의 측도 $2^{1-k}$가 더 빨리 줄기 때문이다.
:::

:::exercise[L¹ 코시 열의 반노름과 적분의 수열]
$(X, \mathcal{M}, \mu)$를 측도공간, $(f_n)$을 $\mathcal{L}^1(\mu)$의 L¹ 코시 열이라 하자.

1. $n$번째 항이 $\lVert f_n \rVert_1$인 실수열과, 모든 $A \in \mathcal{M}$에서 $n$번째 항이 $\int_A f_n\,d\mu$인 실수열이 수렴함을 [[riesz-fischer-theorem|리스–피셔 정리 (L¹)]]를 쓰지 않고 보여라.
2. 1의 두 극한이 $(f_n)$의 리스–피셔 극한 $f$의 $\lVert f \rVert_1$과 $\int_A f\,d\mu$임을 보여라.
3. 1의 결론의 거꾸로가 성립하지 않을 수 있음을, $\mathbb{N}$ 위의 셈측도 $\mu^{\sharp}$에서 $h_n = \chi_{\{n\}}$으로 보여라. 곧 $(\lVert h_n \rVert_1)$은 수렴하지만 $(h_n)$은 L¹ 코시 열이 아니다.
:::

:::solution
"반노름 (n)"은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 번호이다. 실수열의 코시 수열은 [[cauchy-sequence|코시 수열]]의 것이다.

**1.** 양의 실수 $\varepsilon$에 대하여, L¹ 코시 열의 정의에 의해 자연수 $M$이 있어 $n, k \ge M$이면 $\lVert f_n - f_k \rVert_1 < \varepsilon$이다. 반노름 (1)의 (v)에 의해 그런 $n$, $k$에서 $\bigl|\lVert f_n \rVert_1 - \lVert f_k \rVert_1\bigr| \le \lVert f_n - f_k \rVert_1 < \varepsilon$이고, 반노름 (1)의 (vi)에 의해 $\left|\int_A f_n\,d\mu - \int_A f_k\,d\mu\right| < \varepsilon$이다. 그래서 두 실수열은 코시 수열이고, [[cauchy-iff-convergent|코시 수열과 수렴]]의 (1)에 의해 수렴한다.

**2.** 리스–피셔 정리의 (4)에 의해 $(f_n)$은 $f \in \mathcal{L}^1(\mu)$로 L¹ 수렴한다. 반노름 (4)에 의해 $\lVert f_n \rVert_1 \to \lVert f \rVert_1$이고 $\int_A f_n\,d\mu \to \int_A f\,d\mu$이다. [[limit-is-unique|극한의 유일성]]에 의해 이것들이 1의 극한이다.

**3.** [[measure-examples|측도의 예]]의 (4)의 (i)과 (3)에 의해 $\mu^{\sharp}(\{n\}) = 1$이므로 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)과 반노름 (1)의 (ii)에 의해 $h_n \in \mathcal{L}^1(\mu^{\sharp})$이고 $\lVert h_n \rVert_1 = 1$이다. 그래서 $(\lVert h_n \rVert_1)$은 상수열로 수렴한다([[basic-limits|기본적인 극한]]의 (1)). $n \ne k$이면 $|h_n - h_k| = \chi_{\{n, k\}}$이므로 반노름 (5)의 (i)에 의해 $\lVert h_n - h_k \rVert_1 = 2$이고, $\varepsilon = 1$에 대하여 어떤 $M$을 잡아도 $n = M$, $k = M + 1$에서 $\lVert h_n - h_k \rVert_1 = 2 \ge 1$이다. 따라서 $(h_n)$은 L¹ 코시 열이 아니다. 이 열에서 $A$를 짝수 전체의 집합으로 두면 [[indicator-function|지시함수]]의 (3)에 의해 $h_n\chi_A = \chi_{A \cap \{n\}}$이므로 μ-적분가능한 함수와 그 적분의 (5)의 (i), (6)의 (i)에 의해 $\int_A h_n\,d\mu^{\sharp} = \mu^{\sharp}(A \cap \{n\})$이고, 이 값은 $n$이 짝수이면 $1$, 홀수이면 $0$이다. 이 수열이 어떤 $L$로 수렴했다면 [[subsequence|부분수열]]의 (3)에 의해 첨자열 $2i$와 $2i - 1$로 얻은 부분수열도 $L$로 수렴하므로 $L = 1$이고 $L = 0$이어야 한다. 그래서 이 수열은 수렴하지도 않는다.
:::

:::exercise[L¹ 극한과 점마다의 극한이 같은 함수]
$(X, \mathcal{M}, \mu)$를 측도공간, $(f_n)$을 $\mathcal{L}^1(\mu)$의 함수열, $f \in \mathcal{L}^1(\mu)$라 하고, $(f_n)$이 $f$로 L¹ 수렴한다고 하자. 또 $g : X \to \mathbb{R}$가 있어 모든 $x \in X$에서 실수열 $(f_n(x))$가 $g(x)$로 수렴한다고 하자. $g \in \mathcal{L}^1(\mu)$이고 $f = g$가 $\mu$-거의 어디서나 성립하며 $(f_n)$이 $g$로도 L¹ 수렴함을 보여라.
:::

:::solution
"반노름 (n)"은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 번호이다.

모든 $f_n$은 가측이고 모든 점에서 $(f_n(x))$가 수렴하므로 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (2)에 의해 그 점별 극한 $g$는 가측이다.

[[l1-convergence-and-almost-everywhere|L¹ 수렴과 μ-거의 어디서나 수렴]]의 (1)에 의해 $(f_n)$은 L¹ 코시 열이고, 그 (2)의 첨자열 $(k_j)$와 측도가 0 인 집합 $N$이 있어 $X - N$의 모든 원소 $x$에서 $(f_{k_j}(x))$는 $f(x)$로 수렴한다(그 항목의 (1)의 (i), (ii)). 한편 $(f_{k_j}(x))$는 $g(x)$로 수렴하는 수열 $(f_n(x))$의 부분수열이므로 [[subsequence|부분수열]]의 (3)에 의해 $g(x)$로도 수렴한다. [[limit-is-unique|극한의 유일성]]에 의해 $X - N$의 모든 $x$에서 $f(x) = g(x)$이다. 따라서 $f = g$가 $\mu$-거의 어디서나 성립한다.

$g$는 가측이고 $f = g$가 $\mu$-거의 어디서나 성립하므로, 반노름 (3)의 (ii)에 의해 $g \in \mathcal{L}^1(\mu)$이고 $(f_n)$은 $g$로 L¹ 수렴한다.

점별 극한이 모든 점에서 있다는 가정이 없으면 $g$를 정할 수 없지만, 이 경우에도 반노름 (3)의 (i)에 의해 L¹ 극한끼리는 $\mu$-거의 어디서나 같다. 이 문제는 점별 극한이 있으면 그것이 L¹ 극한 가운데 하나라는 것이다.
:::

:::exercise[점마다 증가하는 L¹ 코시 열의 점마다의 극한]
$(X, \mathcal{M}, \mu)$를 측도공간, $(f_n)$을 $\mathcal{L}^1(\mu)$의 L¹ 코시 열이라 하고, 모든 $x \in X$와 자연수 $n$에서 $f_n(x) \le f_{n+1}(x)$라 하자. $(k_j)$를 그 (2)의 첨자열, $E$와 $f$를 [[riesz-fischer-theorem|리스–피셔 정리 (L¹)]]의 집합과 리스–피셔 극한이라 하자.

1. $X - E$의 모든 원소 $x$에서 실수열 $(f_n(x))$가 위로 유계이고 $f(x)$로 수렴함을 보여라.
2. 실수열 $(f_n(x))$가 수렴하지 않는 $x \in X$ 전체의 집합이 측도가 0 인 집합임을 보여라.
:::

:::solution
**1.** $x \in X - E$라 하자. 리스–피셔 정리의 (3)에 의해 실수열 $(f_{k_j}(x))$는 수렴하고, 리스–피셔 극한의 정의에 의해 그 극한이 $f(x)$이다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]에 의해 실수 $B$가 있어 모든 $j$에서 $f_{k_j}(x) \le B$이다.

$(f_n(x))$는 단조증가이므로 [[sequence|수열]]의 (4)에 의해 $n \le m$이면 $f_n(x) \le f_m(x)$이다. 자연수 $n$에서 [[subsequence|부분수열]]의 (1)에 의해 $k_n \ge n$이므로 $f_n(x) \le f_{k_n}(x) \le B$이다. 곧 $(f_n(x))$는 위로 유계인 단조증가 수열이고, [[monotone-convergence-theorem|단조 수렴 정리]]의 (1)에 의해 수렴한다. 그 극한을 $L$이라 하면 부분수열의 (3)에 의해 $(f_{k_j}(x))$도 $L$로 수렴하므로 [[limit-is-unique|극한의 유일성]]에 의해 $L = f(x)$이다.

**2.** 1에 의해 $(f_n(x))$가 수렴하지 않는 점은 모두 $E$의 원소이다. 모든 $f_n$이 가측이므로 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (4)의 (i)에 의해 $(f_n(x))$가 수렴하는 점의 집합 $C$는 $\mathcal{M}$의 원소이고 $X - C \in \mathcal{M}$이다. 리스–피셔 정리의 (2)에 의해 $E$는 측도가 0 인 집합이고 $X - C \subseteq E$이므로, [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (1)의 (i)에 의해 $X - C$는 측도가 0 인 집합이다.

이 문제에서는 부분수열이 아니라 열 전체가 $X - E$에서 $f$로 수렴한다. 단조라는 가정이 부분수열의 수렴을 열 전체로 옮겨 준다. 리스–피셔 정리의 (4)에 의해 열 전체는 $f$로 L¹ 수렴하기도 한다.
:::

:::exercise[유한 측도에서 고르게 유계이고 측도로 수렴하는 열]
$(X, \mathcal{M}, \mu)$를 측도공간이고 $\mu$를 유한 측도라 하자. $\gamma$를 $0$ 이상인 실수, $(f_n)$을 모든 항이 가측인 $X$ 위의 실숫값 함수열, $f$를 가측인 실숫값 함수라 하고, 모든 $x \in X$와 자연수 $n$에서 $|f_n(x)| \le \gamma$, $|f(x)| \le \gamma$라 하자. 또 모든 양의 실수 $t$에서 $n$번째 항이 $\mu(\{|f_n - f| \ge t\})$인 실수열이 $0$으로 수렴한다고 하자. 모든 $f_n$과 $f$가 $\mathcal{L}^1(\mu)$의 원소이고 $(f_n)$이 $f$로 L¹ 수렴함을 보여라.
:::

:::solution
"적분가능 (n)"은 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 번호, "선형 (n)"은 [[linearity-of-the-measure-integral|적분의 선형성과 단조성]]의 번호이다. $\mu$가 유한 측도이므로 [[measure|측도와 측도공간]]의 (2)의 (iii)에 의해 $\mathcal{M}$의 모든 원소의 측도는 실수이다.

**적분가능성.** [[bounded-convergence-theorem-for-finite-measures|유한 측도에서의 유계 수렴 정리]]의 (3)에 의해 모든 $f_n$과 $f$는 $\mu$-적분가능하다. 곧 $\mathcal{L}^1(\mu)$의 원소이다.

**어림.** 양의 실수 $t$와 자연수 $n$에서 $E_n = \{|f_n - f| \ge t\}$로 두면 [[measurable-function|가측함수]]의 (5), (2)의 (c)와 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)에 의해 $E_n \in \mathcal{M}$이다. 모든 $x$에서
$$
|f_n(x) - f(x)| \le 2\gamma\,\chi_{E_n}(x) + t\,\chi_{X - E_n}(x)
$$
이다. $x \in E_n$이면 [[triangle-inequality|삼각부등식]]에 의해 왼쪽은 $|f_n(x)| + |f(x)| \le 2\gamma$ 이하이고, $x \notin E_n$이면 왼쪽은 $t$보다 작기 때문이다. 오른쪽은 적분가능 (6)의 (i)과 선형 (2)에 의해 $\mu$-적분가능하고 적분이 $2\gamma\,\mu(E_n) + t\,\mu(X - E_n)$이며, 측도와 측도공간의 (2)의 (i)에 의해 이것은 $2\gamma\,\mu(E_n) + t\,\mu(X)$ 이하이다. 선형 (4)에 의해
$$
\lVert f_n - f \rVert_1 \le 2\gamma\,\mu(E_n) + t\,\mu(X)
$$
이다([[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 (1)의 (i), (ii)).

**L¹ 수렴.** 양의 실수 $\varepsilon$이 주어졌다고 하자. $t = \varepsilon\bigl(2\mu(X) + 2\bigr)^{-1}$로 두면 $t > 0$이고 $t\,\mu(X) < \varepsilon/2$이다. 가정에 의해 이 $t$에서 $\mu(E_n) \to 0$이므로 자연수 $K$가 있어 $n \ge K$이면 $2\gamma\,\mu(E_n) < \varepsilon/2$이다($\gamma = 0$이면 모든 $n$에서 그렇고, $\gamma > 0$이면 수열의 극한의 정의를 $\varepsilon(4\gamma)^{-1}$에 쓴다). 그런 $n$에서 $\lVert f_n - f \rVert_1 < \varepsilon$이다. $\lVert f_n - f \rVert_1 \ge 0$이므로 이것은 $n$번째 항이 $\lVert f_n - f \rVert_1$인 실수열이 $0$으로 수렴한다는 것이고, 곧 $(f_n)$은 $f$로 L¹ 수렴한다.

$t$는 $\varepsilon$ 하나에서 식으로 정했고 $K$는 그 $t$에 대한 가정에서 한 번 얻었으므로, 무엇을 번호마다 고르는 일이 없다. $\mu(X)$가 실수라는 가정은 $t\,\mu(X)$를 작게 하는 곳과 유계 수렴 정리의 (3)에 쓰인다.
:::

:::exercise[이웃한 두 항의 차가 0 으로 가는데 L¹ 코시 열이 아닌 예]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서, 자연수 $n$마다 $m \le n$이면 $f_n(m) = m^{-1}$, $m > n$이면 $f_n(m) = 0$으로 정한 함수 $f_n$을 생각한다.

1. 모든 $f_n$이 $\mathcal{L}^1(\mu^{\sharp})$의 원소이고 $\lVert f_{n+1} - f_n \rVert_1 = (n + 1)^{-1}$임을 보여라. 따라서 이 수는 $0$으로 수렴한다.
2. $(f_n)$이 L¹ 코시 열이 아니고, 따라서 어떤 함수로도 L¹ 수렴하지 않음을 보여라.
3. 모든 $m$에서 $(f_n(m))$이 수렴함을 보이고, 그 점별 극한이 $\mathcal{L}^1(\mu^{\sharp})$의 원소가 아님을 보여라.
:::

:::solution
"반노름 (n)"은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 번호이다. 자연수 $n$에서 $s_n = \sum_{m=1}^{n} m^{-1}$은 조화급수의 부분합이다([[harmonic-series-diverges|조화급수의 발산]]).

**1.** $f_n$의 절댓값은 $m > n$에서 $0$이므로, $m$번째 항이 $|f_n(m)|$인 수열의 $n$-꼬리는 모든 항이 $0$이고 그 급수는 부분합이 모두 $0$이어서 $0$으로 수렴한다([[basic-limits|기본적인 극한]]의 (1)). [[tail-of-a-series|급수의 꼬리]]의 (2), (3)에 의해 $(|f_n(m)|)$의 급수는 수렴하고 합이 $s_n$이다. 반노름 (5)의 (i)에 의해 $f_n \in \mathcal{L}^1(\mu^{\sharp})$이다. $f_{n+1} - f_n$은 점 $n + 1$에서 $(n + 1)^{-1}$이고 다른 점에서 $0$이므로 반노름 (5)의 (i)에 의해 $\lVert f_{n+1} - f_n \rVert_1 = (n + 1)^{-1}$이다. 기본적인 극한의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 이 수는 $0$으로 수렴한다.

**2.** 자연수 $M$에서 $f_{2M} - f_M$은 $M < m \le 2M$에서 $m^{-1}$이고 다른 점에서 $0$이므로, 반노름 (5)의 (i)에 의해 $\lVert f_{2M} - f_M \rVert_1 = s_{2M} - s_M$이고 조화급수의 발산의 (1)에 의해 이것은 $\tfrac12$ 이상이다. $\varepsilon = \tfrac12$에 대하여 어떤 자연수 $M$을 잡아도 $n = 2M \ge M$, $k = M$에서 $\lVert f_n - f_k \rVert_1 \ge \varepsilon$이므로 $(f_n)$은 L¹ 코시 열이 아니다. [[l1-cauchy-subsequence|L¹ 코시 열의 빠르게 수렴하는 부분수열]]의 (1)에 의해 L¹ 수렴하는 열은 L¹ 코시 열이므로, $(f_n)$은 어떤 함수로도 L¹ 수렴하지 않는다.

**3.** $m$을 고정하면 $n \ge m$에서 $f_n(m) = m^{-1}$이므로 $(f_n(m))$은 $m^{-1}$로 수렴한다. 점별 극한 $f(m) = m^{-1}$에서 $m$번째 항이 $|f(m)|$인 수열의 급수는 조화급수이고 조화급수의 발산의 (2)에 의해 발산하므로, 반노름 (5)의 (i)에 의해 $f \notin \mathcal{L}^1(\mu^{\sharp})$이다.

[[riesz-fischer-theorem|리스–피셔 정리 (L¹)]]의 증명이 이웃한 두 항의 차가 $2^{-j}$보다 작은 부분수열을 쓰는 것은, 이웃한 차가 $0$으로 가는 것만으로는 이 열처럼 차들의 합이 끝없이 커질 수 있기 때문이다.
:::
