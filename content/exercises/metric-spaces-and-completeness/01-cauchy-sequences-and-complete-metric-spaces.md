---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "2.4.1절, Exercise 2.4.2 (p.86)"
  - ref: lebl-basic-analysis
    loc: "7.4.3절, Exercise 7.4.3 a) (p.285), Exercise 7.4.19 e)–f) (p.286)"
added: 2026-11-26
---

:::exercise[보통 거리에 이산 거리를 더한 거리]
$\mathbb{R}$의 보통 거리를 $d$, $\mathbb{R}$ 위의 이산 거리를 $\delta$라 하고, 실수 $x$, $y$에 대하여
$$
\rho(x, y) = d(x, y) + \delta(x, y)
$$
로 정한다.

1. $(\mathbb{R}, \rho)$가 거리공간임을 보여라.
2. $\mathbb{R}$의 수열 $(x_n)$이 $\rho$로 코시인 것은 정확히 $n \ge M$인 모든 자연수 $n$에서 $x_n = x_M$인 자연수 $M$이 있을 때임을 보여라.
3. $(\mathbb{R}, \rho)$가 완비임을 보여라. 또 모든 실수 $x$, $y$에서 $d(x, y) \le \rho(x, y)$이지만, 모든 실수 $x$, $y$에서 $\rho(x, y) \le c\, d(x, y)$인 $0$ 이상의 실수 $c$는 없음을 보여라.
:::

:::solution
거리공간과 거리의 조건 (i)–(iv)는 [[metric-space|거리공간]]의 것이고, 보통 거리와 이산 거리는 [[metric-space-examples|거리공간의 예]]의 (1), (2)의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 계산 법칙 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**1.** $d$와 $\delta$는 둘 다 $\mathbb{R}$ 위의 거리이므로 조건 (i)–(iv)를 만족한다. $x$, $y$, $z$가 실수라 하자.

- (i) $0 \le d(x, y)$이고 $0 \le \delta(x, y)$이므로 순서 성질 (2)의 (iii)에 의해 $0 = 0 + 0 \le \rho(x, y)$이다.
- (ii) $x = y$이면 $d(x, y) = 0$, $\delta(x, y) = 0$이므로 $\rho(x, y) = 0$이다. 거꾸로 $\rho(x, y) = 0$이라 하자. $0 \le \delta(x, y)$와 순서 성질 (2)의 (i)에 의해 $d(x, y) = d(x, y) + 0 \le \rho(x, y) = 0$이고, $0 \le d(x, y)$이므로 순서 성질 (1)의 (ii)에 의해 $d(x, y) = 0$이다. $d$의 조건 (ii)에 의해 $x = y$이다.
- (iii) $d(x, y) = d(y, x)$이고 $\delta(x, y) = \delta(y, x)$이므로 $\rho(x, y) = \rho(y, x)$이다.
- (iv) $d(x, z) \le d(x, y) + d(y, z)$와 $\delta(x, z) \le \delta(x, y) + \delta(y, z)$를 순서 성질 (2)의 (iii)으로 더하고 (K1), (K2)로 항을 묶으면 $\rho(x, z) \le \rho(x, y) + \rho(y, z)$이다.

따라서 $(\mathbb{R}, \rho)$는 거리공간이다.

**2.** 모든 실수 $x$, $y$에서 $0 \le d(x, y)$이므로, 1의 (ii)와 같은 계산으로 $\delta(x, y) \le \rho(x, y) = 1 \cdot \rho(x, y)$이다.

$(x_n)$이 $\rho$로 코시라 하자. [[cauchy-subsequence-and-limit|코시 수열의 부분수열과 극한]]의 (4)의 (i)을 거리 $\rho$, $\delta$와 $c = 1$에 쓰면 $(x_n)$은 $\delta$로 코시이다. [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]의 (5)에 의해 $n \ge M$인 모든 자연수 $n$에서 $x_n = x_M$인 자연수 $M$이 있다.

거꾸로 그런 $M$이 있다고 하자. 양의 실수 $\varepsilon$이 주어지면, $n \ge M$이고 $k \ge M$인 자연수 $n$, $k$에서 $x_n = x_M = x_k$이므로 $\rho(x_n, x_k) = 0 < \varepsilon$이다. 따라서 $(x_n)$은 $\rho$로 코시이다.

**3.** *완비.* $(x_n)$이 $\rho$로 코시이면 2에 의해 $n \ge M$일 때 $x_n = x_M$인 자연수 $M$이 있다. 양의 실수 $\varepsilon$에 대하여 $n \ge M$이면 $\rho(x_n, x_M) = 0 < \varepsilon$이므로, [[convergence-in-metric-spaces|거리공간에서의 수렴]]의 (1)에 의해 $(x_n)$은 $(\mathbb{R}, \rho)$에서 $x_M$으로 수렴한다. 모든 코시 수열이 $\mathbb{R}$의 점으로 수렴하므로 [[complete-metric-space|완비 거리공간]]의 정의에 의해 $(\mathbb{R}, \rho)$는 완비이다.

*$d \le \rho$.* $0 \le \delta(x, y)$와 순서 성질 (2)의 (i)에 의해 $d(x, y) = d(x, y) + 0 \le \rho(x, y)$이다.

*$\rho \le c\,d$인 $c$는 없다.* $0 \le c$인 실수 $c$가 모든 $x$, $y$에서 $\rho(x, y) \le c\,d(x, y)$를 만족한다고 하자. 순서 성질 (5)의 (ii), (2)의 (ii)에 의해 $c < c + 1$이고, $0 \le c$와 (1)의 (v)에 의해 $0 < c + 1$이므로, $y = (c + 1)^{-1}$로 두면 순서 성질 (6)의 (i)에 의해 $0 < y$이다. $y \ne 0$이므로 $\delta(0, y) = 1$이고, [[absolute-value|절댓값]]의 (1)과 (3)에 의해 $d(0, y) = |0 - y| = y$이다. 그러면 $\rho(0, y) = y + 1$이고 순서 성질 (2)의 (ii)에 의해 $1 < y + 1$이다. 한편 $0 < y$와 $c < c + 1$에 순서 성질 (4)의 (i)을 쓰면 $c\,d(0, y) = cy < (c + 1)y = 1$이다((K8)). 순서 성질 (1)의 (v)에 의해 $c\,d(0, y) < \rho(0, y)$이므로, 순서 성질 (1)의 (i)에 의해 $\rho(0, y) \le c\,d(0, y)$와 어긋난다.

[[complete-metric-space|완비 거리공간]]의 (2)에 의해 $(\mathbb{R}, d)$도 완비이므로, 그 (5)의 두 부등식이 함께 성립하지 않는 두 거리가 둘 다 완비일 수도 있다.
:::

:::exercise[이웃한 항의 거리가 (1/2)ⁿ 이하인 수열]
$(X, d)$가 거리공간이고 $(x_n)$이 $X$의 수열이며, 모든 자연수 $n$에서
$$
d(x_n, x_{n+1}) \le \Bigl(\frac{1}{2}\Bigr)^n
$$
이라 하자.

1. 모든 자연수 $n$과 $0$ 이상인 모든 정수 $m$에서 $d(x_n, x_{n+m}) \le 2\,(1/2)^n$임을 보여라.
2. $(x_n)$이 코시 수열임을 보여라.
3. $(X, d)$가 완비이면 $(x_n)$이 어떤 점 $p \in X$로 수렴하고, 모든 자연수 $n$에서 $d(x_n, p) \le 2\,(1/2)^n$임을 보여라.
:::

:::solution
거듭제곱 $(1/2)^n$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고, 거리의 조건 (i)–(iv)와 그 따름은 [[metric-space|거리공간]]의 것이다. 아래에서 $r = 1/2$로 쓰고, "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 실수의 거듭제곱 항목의 (6)의 (i)에 의해 $0$ 이상인 모든 정수 $n$에서 $0 < r^n$이다.

**1.** $0$ 이상인 정수 $m$에 대한 명제 $S_m$을 "모든 자연수 $n$에서 $d(x_n, x_{n+m}) \le 2r^n$"으로 두고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

*기초 단계.* $m = 0$이면 거리공간 항목의 (1)에 의해 $d(x_n, x_n) = 0$이고, $0 < 2$와 $0 < r^n$에 순서 성질 (4)의 (iv)를 쓰면 $0 \le 2r^n$이다.

*귀납 단계.* $m \ge 0$이고 $S_m$이 참이라 하자. 자연수 $n$에 대하여 $n + 1$도 자연수이고 $(n + 1) + m = n + (m + 1)$이다. 거리의 삼각부등식 (iv), 가정, $S_m$을 $n + 1$에 쓴 것을 순서 성질 (2)의 (iii)으로 잇으면
$$
\begin{aligned}
&d(x_n, x_{n+(m+1)}) \\
&\quad \le d(x_n, x_{n+1}) \\
&\qquad + d(x_{n+1}, x_{(n+1)+m}) \\
&\quad \le r^n + 2r^{n+1}
\end{aligned}
$$
이다. 거듭제곱의 정의에 의해 $r^{n+1} = r^n r$이고 $2r = 1$이므로 (K1)–(K3)으로 $r^n + 2r^{n+1} = r^n + r^n = 2r^n$이다. 따라서 $S_{m+1}$이 참이다.

**2.** 양의 실수 $\varepsilon$이 주어졌다고 하자. $|r| = r < 1$이므로 [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $(r^n)$은 $0$으로 수렴한다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이므로, [[limit-of-sequence|수열의 수렴]]의 정의에 의해 $n \ge M$인 모든 자연수 $n$에서 $|r^n - 0| < \varepsilon/2$인 자연수 $M$이 있고, $0 < r^n$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $r^n < \varepsilon/2$이다.

$n \ge M$이고 $k \ge M$인 자연수 $n$, $k$를 잡자. 순서 성질 (1)의 (iv)에 의해 $n \le k$이거나 $k \le n$이다. $n \le k$이면 $m = k - n$은 $0$ 이상인 정수이고 $k = n + m$이므로, 1과 순서 성질 (4)의 (i)에 의해 $d(x_n, x_k) \le 2r^n < 2 \cdot (\varepsilon/2) = \varepsilon$이다. $k \le n$이면 같은 방법으로 $d(x_k, x_n) < \varepsilon$이고 거리의 조건 (iii)에 의해 $d(x_n, x_k) < \varepsilon$이다. 따라서 $(x_n)$은 [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]이다.

**3.** 2와 [[complete-metric-space|완비 거리공간]]의 정의에 의해 $(x_n)$은 어떤 점 $p \in X$로 수렴한다. 자연수 $n$을 하나 정한다. [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (6)에 의해 $(x_n)$의 $n$-꼬리, 곧 $m$번째 항이 $y_m = x_{n+m}$인 수열은 $p$로 수렴하고, [[convergence-in-metric-spaces|거리공간에서의 수렴]]의 (2)에 의해 $m$번째 항이 $d(y_m, p)$인 실수열은 $0$으로 수렴한다.

$m$번째 항이 $a_m = d(x_n, y_m)$인 실수열을 보자. 거리공간 항목의 (2)와 거리의 조건 (iii)에 의해
$$
\begin{aligned}
&\bigl|a_m - d(x_n, p)\bigr| \\
&\quad = \bigl|d(y_m, x_n) - d(p, x_n)\bigr| \\
&\quad \le d(y_m, p)
\end{aligned}
$$
이므로, [[comparison-with-null-sequence|0으로 수렴하는 수열과의 비교]]의 (3)에 의해 $(a_m)$은 $d(x_n, p)$로 수렴한다. 1에 의해 모든 자연수 $m$에서 $a_m \le 2r^n$이므로, [[limits-preserve-inequalities|극한은 부등식을 보존한다]]의 (3)에 의해 $d(x_n, p) \le 2r^n$이다.
:::

:::exercise[두 수열 사이의 거리로 이루어진 실수열]
$(X, d)$가 거리공간이고 $(x_n)$, $(y_n)$이 $X$의 수열이다.

1. $(x_n)$과 $(y_n)$이 코시 수열이면, $n$번째 항이 $d(x_n, y_n)$인 실수열이 수렴함을 보여라.
2. $(x_n)$이 코시 수열이고 $n$번째 항이 $d(x_n, y_n)$인 실수열이 $0$으로 수렴하면 $(y_n)$도 코시 수열임을 보여라. 또 이때 $(x_n)$이 점 $p \in X$로 수렴하면 $(y_n)$도 $p$로 수렴함을 보여라.
:::

:::solution
거리공간과 그 따름 (1)–(4)는 [[metric-space|거리공간]]의 것이고, 코시 수열은 [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 자연수 $M_1$, $M_2$에 대하여 $M = M_1 + M_2$로 두면, 순서 성질 (10)에 의해 $0 < M_2$, $0 < M_1$이고 (2)의 (ii)에 의해 $M_1 < M$, $M_2 < M$이다. 그래서 $n \ge M$인 자연수 $n$은 $n \ge M_1$이고 $n \ge M_2$이다(순서 성질 (1)의 (v)).

**1.** 양의 실수 $\varepsilon$에 대하여 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. $(x_n)$이 코시이므로 $n, k \ge M_1$이면 $d(x_n, x_k) < \varepsilon/2$인 자연수 $M_1$이 있고, $(y_n)$에 대해서도 같은 일을 하는 $M_2$가 있다. $M = M_1 + M_2$로 두면 $n, k \ge M$인 자연수 $n$, $k$에서 거리공간 항목의 (4)와 순서 성질 (2)의 (iv)에 의해
$$
\begin{aligned}
&\bigl|d(x_n, y_n) - d(x_k, y_k)\bigr| \\
&\quad \le d(x_n, x_k) + d(y_n, y_k) \\
&\quad < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이다. 따라서 이 실수열은 해석학 입문의 [[cauchy-sequence|코시 수열]]이고, [[cauchy-iff-convergent|코시 수열은 수렴한다]]의 (1)에 의해 수렴한다.

**2.** *코시.* 양의 실수 $\varepsilon$에 대하여 $3^{-1} > 0$이므로(순서 성질 (10), (6)의 (i)) 순서 성질 (4)의 (i)에 의해 $0 < \varepsilon/3$이다. $n, k \ge M_1$이면 $d(x_n, x_k) < \varepsilon/3$인 자연수 $M_1$이 있다. 또 $(d(x_n, y_n))$이 $0$으로 수렴하므로, $n \ge M_2$이면 $|d(x_n, y_n) - 0| < \varepsilon/3$인 자연수 $M_2$가 있고, 거리의 조건 (i)과 [[absolute-value|절댓값]]의 (1)에 의해 $d(x_n, y_n) < \varepsilon/3$이다. $M = M_1 + M_2$로 두면 $n, k \ge M$인 자연수 $n$, $k$에서 거리공간 항목의 (3), 거리의 조건 (iii)과 순서 성질 (2)의 (iv)에 의해
$$
\begin{aligned}
&d(y_n, y_k) \\
&\quad \le d(y_n, x_n) + d(x_n, x_k) \\
&\qquad + d(x_k, y_k) \\
&\quad < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon
\end{aligned}
$$
이다. 따라서 $(y_n)$은 코시 수열이다.

*수렴.* $(x_n)$이 $p$로 수렴하면 [[convergence-in-metric-spaces|거리공간에서의 수렴]]의 (2)에 의해 $(d(x_n, p))$는 $0$으로 수렴하고, [[limit-of-sum-and-product|합과 곱의 극한]]의 (1)에 의해 $n$번째 항이 $a_n = d(x_n, y_n) + d(x_n, p)$인 실수열은 $0 + 0 = 0$으로 수렴한다. 거리의 조건 (iii), (iv)에 의해 $d(y_n, p) \le d(y_n, x_n) + d(x_n, p) = a_n$이고, 거리의 조건 (i)과 절댓값의 (1)에 의해 $|d(y_n, p) - 0| = d(y_n, p) \le a_n$이다. [[comparison-with-null-sequence|0으로 수렴하는 수열과의 비교]]의 (3)에 의해 $(d(y_n, p))$는 $0$으로 수렴하고, 거리공간에서의 수렴 항목의 (2)에 의해 $(y_n)$은 $p$로 수렴한다.
:::

:::exercise[쌍곡선 xy = 1 의 완비성]
곱집합 $\mathbb{R} \times \mathbb{R}$의 부분집합
$$
H = \{(x, y) \in \mathbb{R} \times \mathbb{R} : xy = 1\}
$$
을 생각한다.

1. $H$가 $(\mathbb{R} \times \mathbb{R}, d_{\max})$에서 닫힌집합이고, $H$에 $d_{\max}$의 부분공간 거리를 주면 완비임을 보여라.
2. $H$에 유클리드 거리 $d_E$의 부분공간 거리를 주어도 완비임을 보여라.
:::

:::solution
$d_{\max}$, $d_E$와 부분공간 거리는 [[metric-space-examples|거리공간의 예]]의 (3), (5)의 것이고, $\mathbb{R} \times \mathbb{R}$의 보통 위상은 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 것이다. 완비와 "$H$는 완비이다"는 [[complete-metric-space|완비 거리공간]]의 것이다.

**1.** *닫힌집합.* 최대 거리의 위상은 곱위상이다 항목의 (3)에 의해 $m(x, y) = xy$로 정한 $m : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 보통 위상들 사이에서 연속이다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)에 의해 $\{1\}$은 $(\mathbb{R}, d)$에서 닫힌집합이고, [[closed-set|닫힌집합]]의 (6)에 의해 보통 위상에서도 닫힌집합이다. $H = m^{-1}(\{1\})$이므로 [[continuity-criteria|연속의 판정]]의 (1)에 의해 $H$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상에서 닫힌집합이다. 같은 항목의 (2)에 의해 이 위상은 $d_{\max}$의 거리위상이므로, 닫힌집합 항목의 (6)에 의해 $H$는 $(\mathbb{R} \times \mathbb{R}, d_{\max})$에서 닫힌집합이다.

*완비.* [[completeness-of-products|두 완비 거리공간의 곱]]의 (4)에 의해 $(\mathbb{R} \times \mathbb{R}, d_{\max})$는 완비이다. [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 $H$는 $d_{\max}$의 부분공간 거리로 완비이다.

**2.** $H$ 위의 두 부분공간 거리를 $\rho_{\max}$, $\rho_E$라 하자. 거리공간의 예 항목의 (3)에 의해 $H$의 점 $p$, $q$에서 $\rho_{\max}(p, q) = d_{\max}(p, q)$, $\rho_E(p, q) = d_E(p, q)$이고, 같은 항목의 (7)에 의해 $d_{\max}(p, q) \le d_E(p, q) \le d_{\mathrm{sum}}(p, q) \le 2\,d_{\max}(p, q)$이다. 곧 $H$의 모든 점 $p$, $q$에서
$$
\begin{aligned}
\rho_E(p, q) &\le 2\,\rho_{\max}(p, q), \\
\rho_{\max}(p, q) &\le 1 \cdot \rho_E(p, q)
\end{aligned}
$$
이다. 완비 거리공간 항목의 (5)를 $c = 2$, $c' = 1$에 쓰면, 1에 의해 $(H, \rho_{\max})$가 완비이므로 $(H, \rho_E)$도 완비이다.
:::

:::exercise[극한까지의 거리를 꼬리의 지름으로 누르기]
$(X, d)$가 거리공간이고 $X$의 수열 $(x_n)$이 점 $p \in X$로 수렴한다고 하자. 자연수 $m$에 대하여 $T_m = \{y \in X : y = x_k\text{인 자연수 } k \ge m\text{이 있다}\}$로 둔다.

1. 모든 자연수 $m$에서 $T_m$이 공집합이 아니고 유계이며, $p$가 $T_m$의 폐포 $\overline{T_m}$에 듦을 보여라.
2. 모든 자연수 $m$에서 $d(x_m, p) \le \operatorname{diam} T_m$임을 보여라.
:::

:::solution
$T_m$은 [[cauchy-subsequence-and-limit|코시 수열의 부분수열과 극한]]의 (3)의 집합이고, 지름은 [[diameter|지름]]의 것이며, 폐포는 [[interior-and-closure|내부와 폐포]]의 것이다. 거리공간에는 거리위상을 준다.

**1.** [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]의 (3)에 의해 $(x_n)$은 코시 수열이고, 같은 항목의 (4)에 의해 유계이다. 코시 수열의 부분수열과 극한 항목의 (3)의 (i)에 의해 $T_m$은 $x_m$을 원소로 가져 공집합이 아니고 유계이다.

자연수 $M$이 주어지면 $n = M + m$은 자연수이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (10)과 (2)의 (ii)에 의해 $M < n$이고 $m < n$이므로 $n \ge M$이고 $x_n \in T_m$이다. $(x_n)$이 $p$로 수렴하므로 [[closed-set-and-limits|닫힌집합과 수열의 극한]]의 (1)에 의해 $p \in \overline{T_m}$이다.

**2.** 내부와 폐포 항목의 (1)에 의해 $x_m \in T_m \subseteq \overline{T_m}$이고, 1에 의해 $p \in \overline{T_m}$이다. 지름 항목의 (6)에 의해 $\overline{T_m}$은 공집합이 아니고 유계이며 $\operatorname{diam} \overline{T_m} = \operatorname{diam} T_m$이다. 같은 항목의 (2)의 (ii)를 $\overline{T_m}$의 두 점 $x_m$, $p$에 쓰면
$$
d(x_m, p) \le \operatorname{diam} \overline{T_m} = \operatorname{diam} T_m
$$
이다.
:::

:::exercise[한쪽 부등식만 있는 두 거리]
$\mathbb{N}$ 위의 이산 거리를 $\delta$라 하고, 자연수 $m$, $n$에 대하여
$$
d'(m, n) = \bigl|m^{-1} - n^{-1}\bigr|
$$
로 정한다.

1. $(\mathbb{N}, d')$이 거리공간이고, 모든 자연수 $m$, $n$에서 $d'(m, n) \le \delta(m, n)$임을 보여라.
2. $(\mathbb{N}, \delta)$는 완비이지만 $(\mathbb{N}, d')$은 완비가 아님을 보여라. $n$번째 항이 $n$인 수열을 써라.
3. 모든 자연수 $m$, $n$에서 $\delta(m, n) \le c'\,d'(m, n)$인 $0$ 이상의 실수 $c'$이 없음을 보여라.
:::

:::solution
거리의 조건 (i)–(iv)는 [[metric-space|거리공간]]의 것이고, 이산 거리는 [[metric-space-examples|거리공간의 예]]의 (2)의 것이며, 완비는 [[complete-metric-space|완비 거리공간]]의 것이다. 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값"은 [[absolute-value|절댓값]]의 번호이다. 순서 성질 (10)에 의해 모든 자연수 $n$에서 $0 < n^{-1}$이고, [[prime-number|소수]]의 진술의 (Z1)에 의해 $1 \le n$이므로 $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 순서 성질 (6)의 (ii)에 의해 $n^{-1} < 1$이다. 곧 $0 < n^{-1} \le 1$이다.

**1.** *거리.* 자연수 $l$, $m$, $n$에 대하여 (i) 절댓값 (2)에 의해 $0 \le d'(m, n)$이다. (ii) 절댓값 (2)에 의해 $d'(m, n) = 0$인 것은 정확히 $m^{-1} = n^{-1}$일 때이고, 이것은 양변의 역수를 취하면((K8)의 (iii)) 정확히 $m = n$일 때이다. (iii) 절댓값 (3)에 의해 $d'(m, n) = d'(n, m)$이다. (iv) [[triangle-inequality|삼각부등식]]의 (4)에 의해 $d'(l, n) \le d'(l, m) + d'(m, n)$이다.

*$d' \le \delta$.* $m = n$이면 두 쪽이 모두 $0$이다. $m \ne n$이면 $\delta(m, n) = 1$이고, $0 < m^{-1} \le 1$, $0 < n^{-1} \le 1$에서 순서 성질 (3)의 (iii)과 (2)의 (iv)에 의해 $-1 < m^{-1} - n^{-1} < 1$이므로 절댓값 (7)에 의해 $d'(m, n) < 1 = \delta(m, n)$이다.

**2.** *$(\mathbb{N}, \delta)$는 완비.* 완비 거리공간 항목의 (3)의 (iii)이다.

*$(\mathbb{N}, d')$에서 코시.* 양의 실수 $\varepsilon$에 대하여 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $M$ 이상인 모든 자연수 $n$에서 $n^{-1} < \varepsilon$인 자연수 $M$이 있다. $n, k \ge M$이면 $0 < n^{-1} < \varepsilon$이고 $0 < k^{-1} < \varepsilon$이므로 순서 성질 (3)의 (iii)과 (2)의 (iv)에 의해 $-\varepsilon < n^{-1} - k^{-1} < \varepsilon$이고, 절댓값 (7)에 의해 $d'(n, k) < \varepsilon$이다. 따라서 $n$번째 항이 $n$인 수열은 $d'$으로 코시이다.

*수렴하지 않는다.* 이 수열이 $(\mathbb{N}, d')$에서 $p \in \mathbb{N}$으로 수렴한다고 하자. [[convergence-in-metric-spaces|거리공간에서의 수렴]]의 (2)에 의해 $n$번째 항이 $d'(n, p) = |n^{-1} - p^{-1}|$인 실수열은 $0$으로 수렴하고, [[comparison-with-null-sequence|0으로 수렴하는 수열과의 비교]]의 (1)에 의해 $n$번째 항이 $n^{-1}$인 실수열은 $p^{-1}$로 수렴한다. 그런데 [[basic-limits|기본적인 극한]]의 (2)에 의해 이 실수열은 $0$으로 수렴하므로 [[limit-is-unique|극한의 유일성]]에 의해 $p^{-1} = 0$이고, $0 < p^{-1}$과 어긋난다(순서 성질 (1)의 (i)). 따라서 이 코시 수열은 $\mathbb{N}$의 어떤 점으로도 수렴하지 않고, $(\mathbb{N}, d')$은 완비가 아니다.

**3.** 그런 $c'$이 있다면, 1에 의해 모든 $m$, $n$에서 $d'(m, n) \le 1 \cdot \delta(m, n)$이기도 하므로 완비 거리공간 항목의 (5)를 $c = 1$과 $c'$에 쓸 수 있고, $(\mathbb{N}, \delta)$가 완비인 것과 $(\mathbb{N}, d')$이 완비인 것이 같아야 한다. 이것은 2에 어긋난다. 그래서 그 (5)에서 두 부등식 가운데 하나만 있으면 결론이 성립하지 않을 수 있다.
:::
