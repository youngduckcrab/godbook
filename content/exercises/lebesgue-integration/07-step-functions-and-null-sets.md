---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "6.5절 Project: The change of variables theorem, 6.6.2 Procedure 의 3, 4 (p.193) — 문제 1 과 문제 3 과 같은 발상(일차변환 x ↦ ax + ζ 로 옮기면 길이와 적분이 |a| 배가 된다). 출처는 르베그 측도와 적분가능한 함수에 대해 묻는다"
  - ref: lebl-basic-analysis-2
    loc: "10.4.3 소절, Exercise 10.4.11 (p.122) — 문제 5 와 같은 꼴의 물음(유리수와 무리수에서 값을 달리 정한 함수의 점마다의 진동을 구한다). 출처는 popcorn 함수를 쓴다"
  - ref: lebl-basic-analysis
    loc: "3.2.4 소절, Exercise 3.2.3 (p.127) — 문제 5 와 같은 발상(유리수에서 x, 무리수에서 다른 식으로 정한 함수는 두 식이 같은 점에서만 연속이다)"
added: 2026-11-28
---

:::exercise[계단함수의 평행이동과 늘이기]
$\varphi$를 계단함수, $c$를 실수, $s$를 양의 실수라 하고, 실수 $x$에서의 값이 $\varphi(x - c)$, $\varphi(sx)$인 함수를 각각 $\psi$, $\theta$라 하자.

1. $a \le b$이면 모든 실수 $x$에서 $\chi_{[a, b)}(x - c) = \chi_{[a + c, b + c)}(x)$이고 $\chi_{[a, b)}(sx) = \chi_{[a/s, b/s)}(x)$임을 보여라.
2. $\psi$와 $\theta$가 계단함수이고 $\int_{\mathbb{R}} \psi = \int_{\mathbb{R}} \varphi$, $\int_{\mathbb{R}} \theta = s^{-1} \int_{\mathbb{R}} \varphi$임을 보여라. $\varphi = 3\chi_{[0, 2)} - \chi_{[1, 5)}$, $s = 2$일 때 $\theta$의 계단 꼴과 $\int_{\mathbb{R}} \theta$를 구하라.
3. 실수 $x$에서의 값이 $\chi_{[0, 1)}(-x)$인 함수는 계단함수가 아님을 보여라.
:::

:::solution
계단함수, 일차결합 꼴, 계단 꼴과 적분은 [[step-function|계단함수와 그 적분]]의 것이고 "계단 (n)"은 그 번호이다. 지시함수의 값은 [[indicator-function|지시함수]]의 (1)로 읽는다.

**1.** $x - c \in [a, b)$인 것은 정확히 $a \le x - c < b$, 곧 $a + c \le x < b + c$일 때이고, $a + c \le b + c$이다. $s > 0$이므로 [[order-properties-of-reals|실수의 순서 성질]]에 의해 $a \le sx < b$인 것은 정확히 $a/s \le x < b/s$일 때이고, $a/s \le b/s$이다. 두 지시함수는 값이 $1$인 점이 같으므로 모든 점에서 같다.

**2.** $\varphi$의 일차결합 꼴을 $\varphi(x) = \sum_{i=1}^{N} \lambda_i\,\chi_{[a_i, b_i)}(x)$라 하자. 1에 의해 모든 실수 $x$에서
$$
\begin{aligned}
\psi(x) &= \sum_{i=1}^{N} \lambda_i\,\chi_{[a_i + c,\, b_i + c)}(x), \\
\theta(x) &= \sum_{i=1}^{N} \lambda_i\,\chi_{[a_i/s,\, b_i/s)}(x)
\end{aligned}
$$
이고, 이것들은 일차결합 꼴이므로 $\psi$와 $\theta$는 계단함수이다. 계단 (6)의 (iv)에 의해
$$
\begin{aligned}
\int_{\mathbb{R}} \psi &= \sum_{i=1}^{N} \lambda_i (b_i - a_i) = \int_{\mathbb{R}} \varphi, \\
\int_{\mathbb{R}} \theta &= \sum_{i=1}^{N} \lambda_i \cdot \frac{b_i - a_i}{s} = s^{-1} \int_{\mathbb{R}} \varphi
\end{aligned}
$$
이다(마지막 등식은 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (1)의 상수배).

$\varphi = 3\chi_{[0, 2)} - \chi_{[1, 5)}$, $s = 2$이면 $\theta = 3\chi_{[0, 1)} - \chi_{[1/2, 5/2)}$이다. $x$가 $[0, \tfrac12)$이면 $\theta(x) = 3$, $[\tfrac12, 1)$이면 $3 - 1 = 2$, $[1, \tfrac52)$이면 $-1$, 그 밖에서는 $0$이므로 $\theta$는 점 $0, \tfrac12, 1, \tfrac52$와 값 $3, 2, -1$의 계단 꼴을 갖는다. 계단 (4)의 (ii)에 의해 $\int_{\mathbb{R}} \theta = 3 \cdot \tfrac12 + 2 \cdot \tfrac12 - 1 \cdot \tfrac32 = 1$이고, 이것은 $\int_{\mathbb{R}} \varphi = 3 \cdot 2 - 1 \cdot 4 = 2$의 $\tfrac12$이다.

**3.** 그 함수를 $\rho$라 하자. $\rho(x) = 1$인 것은 정확히 $0 \le -x < 1$, 곧 $-1 < x \le 0$일 때이다. $\rho$가 계단함수라면 계단 (2)의 (iii)에 의해 양수 $\delta$가 있어 $0 \le y < \delta$인 모든 $y$에서 $\rho(y) = \rho(0) = 1$이다. 그런데 $y = \delta/2$는 $0 < y$이므로 $\rho(y) = 0$이다. 모순이므로 $\rho$는 계단함수가 아니다. 그래서 2는 $s > 0$일 때만 진술한다. $s < 0$이면 $sx \in [a, b)$인 $x$ 전체는 $\{x : b/s < x \le a/s\}$이어서 왼쪽 끝이 빠지고 오른쪽 끝을 갖는다.
:::

:::exercise[0 이상인 계단함수의 적분이 0 이 되는 경우]
1. $\varphi$가 계단함수이고 모든 실수 $x$에서 $0 \le \varphi(x)$이며 $\int_{\mathbb{R}} \varphi = 0$이면 $\varphi$가 영함수임을 보여라.
2. $\varphi$, $\psi$가 계단함수이고 $\int_{\mathbb{R}} |\varphi - \psi| = 0$이면 $\varphi = \psi$임을 보여라.
:::

:::solution
"계단 (n)"은 [[step-function|계단함수와 그 적분]]의 번호이다.

**1.** $\varphi$가 영함수가 아니라고 하자. $\varphi(x_0) \ne 0$인 실수 $x_0$이 있고 가정에 의해 $\varphi(x_0) > 0$이다. 계단 (2)에 의해 $\varphi$는 어떤 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 갖는다. 계단 꼴의 정의에 의해 $x_0 < t_0$이거나 $t_m \le x_0$이면 $\varphi(x_0) = 0$이므로 $t_0 \le x_0 < t_m$이고, 계단 (2)의 (i)에 의해 $t_{j-1} \le x_0 < t_j$인 $j$가 있어 $v_j = \varphi(x_0) > 0$이다.

$\eta = v_j\,\chi_{[t_{j-1}, t_j)}$로 두면 모든 실수 $x$에서 $\eta(x) \le \varphi(x)$이다. $x \in [t_{j-1}, t_j)$이면 두 값이 모두 $v_j$이고, 아니면 $\eta(x) = 0 \le \varphi(x)$이기 때문이다. 계단 (4)의 (iii)과 (6)의 (i), (ii)에 의해
$$
0 < v_j (t_j - t_{j-1}) = \int_{\mathbb{R}} \eta \le \int_{\mathbb{R}} \varphi
$$
이다($t_{j-1} < t_j$). 이것은 $\int_{\mathbb{R}} \varphi = 0$이라는 가정과 어긋나므로 $\varphi$는 영함수이다.

**2.** 계단 (5)에 의해 $|\varphi - \psi|$는 계단함수이고 모든 값이 $0$ 이상이다. 1에 의해 $|\varphi - \psi|$는 영함수이므로 모든 $x$에서 $\varphi(x) = \psi(x)$이다.

계단함수가 아닌 함수에서는 1의 결론이 성립하지 않을 수 있다. 예를 들어 한 점에서만 $1$이고 나머지에서 $0$인 함수 $\chi_{\{0\}}$은 계단 (2)의 (iii)에 의해 계단함수가 아니다($0 < y$인 점에서 값이 $0$). 1의 증명은 계단함수의 값이 왼쪽 끝을 가진 길이가 양수인 칸 위에서 일정하다는 데 기댄다.
:::

:::exercise[영집합의 평행이동과 실수배]
$A$를 $\mathbb{R}$의 영집합, $\bigl((c_n), (d_n)\bigr)$을 그 영 덮개열이라 하고, 실수 $c$와 $0$이 아닌 실수 $s$에 대하여 $A + c = \{a + c : a \in A\}$, $sA = \{sa : a \in A\}$로 둔다.

1. $\bigl((c_n + c), (d_n + c)\bigr)$이 $A + c$의 영 덮개열임을 보여라.
2. $s > 0$이면 $\bigl((s c_n), (s d_n)\bigr)$이 $sA$의 영 덮개열임을 보여라.
3. $s < 0$이면 $\bigl((s d_n), (s c_n + 2^{-n})\bigr)$이 $sA$의 영 덮개열임을 보이고, $2^{-n}$을 더하지 않은 $\bigl((s d_n), (s c_n)\bigr)$은 $sA$의 영 덮개열이 아닐 수 있음을 $A = \{0\}$으로 보여라.
:::

:::solution
영집합, 영 덮개열과 그 총길이는 [[null-set-of-reals|ℝ 의 영집합]]의 것이다. $T = \sum_{n=1}^{\infty} (d_n - c_n) < \infty$로 둔다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호이다. 영 덮개열의 정의의 둘째 조건은 그 항목의 정의 뒤의 문장대로 "$A$의 모든 원소 $x$와 모든 자연수 $M$에 대하여 $M \le n$이고 $x \in [c_n, d_n)$인 $n$이 있다"로 읽는다.

**1.** 모든 $n$에서 $c_n + c \le d_n + c$이고 $(d_n + c) - (c_n + c) = d_n - c_n$이므로 총길이는 $T$이다. $y \in A + c$이면 $y = a + c$인 $a \in A$가 있다. 자연수 $M$에 대하여 $M \le n$이고 $c_n \le a < d_n$인 $n$이 있고, 그 $n$에서 $c_n + c \le y < d_n + c$이다. 따라서 이 쌍은 $A + c$의 영 덮개열이다.

**2.** $s > 0$이므로 $s c_n \le s d_n$이고 길이는 $s(d_n - c_n)$이며, 합 (5)에 의해 총길이는 $sT < \infty$이다. $y = sa$($a \in A$)와 자연수 $M$에 대하여, $M \le n$이고 $c_n \le a < d_n$인 $n$에서 [[order-properties-of-reals|실수의 순서 성질]]에 의해 $s c_n \le y < s d_n$이다.

**3.** $s < 0$이므로 $c_n \le d_n$에서 $s d_n \le s c_n < s c_n + 2^{-n}$이고, 길이는 $(s c_n + 2^{-n}) - s d_n = |s|(d_n - c_n) + 2^{-n}$이다. 합 (5)와 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii), 합 (3)의 (i)에 의해 총길이는 $|s|\,T + 1 < \infty$이다. $y = sa$($a \in A$)와 자연수 $M$에 대하여, $M \le n$이고 $c_n \le a < d_n$인 $n$에서 $s d_n < sa \le s c_n$이므로 $s d_n \le y < s c_n + 2^{-n}$이다. 따라서 이 쌍은 $sA$의 영 덮개열이고, 1, 2와 함께 $A + c$와 $sA$는 영집합이다.

$A = \{0\}$의 영 덮개열로 모든 $n$에서 $c_n = 0$, $d_n = 2^{-n}$을 잡자. $0$은 모든 칸 $[0, 2^{-n})$에 들고 총길이는 $1$이다. $sA = \{0\}$이지만 $2^{-n}$을 더하지 않은 칸은 $[s\,2^{-n}, 0)$이고 $0$을 원소로 갖지 않으므로, $0$은 이 열의 상극한의 원소가 아니다. $c_n \le a$의 등호가 $s$를 곱하면 오른쪽 끝의 등호가 되기 때문에 오른쪽을 조금 늘려야 한다.
:::

:::exercise[증가하여 계단함수로 가는 계단함수열의 적분]
$(\varphi_n)$을 계단함수의 열, $\varphi$를 계단함수라 하고, 모든 자연수 $n$과 실수 $x$에서 $\varphi_n(x) \le \varphi_{n+1}(x)$이며 실수열 $(\varphi_n(x))$가 $\varphi(x)$로 수렴한다고 하자. $\lim_{n \to \infty} \int_{\mathbb{R}} \varphi_n = \int_{\mathbb{R}} \varphi$임을 보여라.
:::

:::solution
"계단 (n)"은 [[step-function|계단함수와 그 적분]]의 번호이다. 자연수 $n$마다 $\psi_n = \varphi - \varphi_n$으로 두면 계단 (5)에 의해 $\psi_n$은 계단함수이고, $(\psi_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열이다([[pointwise-convergence|사상의 열과 점별 수렴]]).

$\psi_{n+1}(x) = \varphi(x) - \varphi_{n+1}(x) \le \varphi(x) - \varphi_n(x) = \psi_n(x)$이므로 [[daniell-condition-for-step-functions|감소하여 0 으로 가는 계단함수열의 적분]]의 가정 1이 성립하고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)와 [[basic-limits|기본적인 극한]]의 (1)에 의해 $(\psi_n(x))$는 $\varphi(x) - \varphi(x) = 0$으로 수렴하므로 가정 2도 성립한다. 그 항목의 (2)에 의해 $\int_{\mathbb{R}} \psi_n \to 0$이다. 계단 (6)의 (i)에 의해 $\int_{\mathbb{R}} \psi_n = \int_{\mathbb{R}} \varphi - \int_{\mathbb{R}} \varphi_n$이므로
$$
\int_{\mathbb{R}} \varphi_n = \int_{\mathbb{R}} \varphi - \int_{\mathbb{R}} \psi_n
$$
이고, 극한의 사칙연산의 (2)에 의해 이것은 $\int_{\mathbb{R}} \varphi$로 수렴한다.

극한 $\varphi$가 계단함수라는 가정이 있어야 $\psi_n$이 계단함수이다. 예를 들어 $\varphi_n = \chi_{[1/n, 1)}$은 증가하고 모든 점에서 수렴하지만 극한은 $0 < x < 1$에서 $1$이고 나머지에서 $0$인 함수로, 계단 (2)의 (iii)에 의해 점 $0$에서 계단함수가 아니다($0 < y$인 점에서 값이 $1$이고 $0$에서 값이 $0$). 그런 극한에는 계단함수 항목의 적분이 정해지지 않으므로 이 문제의 결론을 쓸 수 없다.
:::

:::exercise[유리수에서만 x 인 함수의 진동]
$[0, 1]$ 위의 함수 $f$를 $x$가 유리수이면 $f(x) = x$, 무리수이면 $f(x) = 0$으로 정한다.

1. $[0, 1]$의 모든 $x$에서 $o(f, x) = x$임을 보여라.
2. $f$의 불연속점 전체의 집합 $D_f$와, $0 < r \le 1$일 때 진동이 $r$ 이상인 점의 집합 $S_r$을 구하라.
3. $f$가 리만 적분가능하지 않음을 보여라.
:::

:::solution
진동 $o(f, x, \delta)$, $o(f, x)$, 둘레 $B_{[0, 1]}(x, \delta)$, $S_r$은 [[oscillation-of-a-function|점에서의 진동]]의 것이고 "진동 (n)"은 그 번호이다. 모든 $y \in [0, 1]$에서 $0 \le f(y) \le y \le 1$이므로 $f$는 유계이다.

**준비.** $x \in [0, 1]$, $\delta > 0$이라 하고 $B = B_{[0, 1]}(x, \delta)$로 두자. $0 < \eta$이면 $c = \max\{x - \eta, 0\}$, $d = \min\{x + \eta, 1\}$은 $c < d$이고 $[c, d] \subseteq [0, 1]$이다($x < 1$이면 $x < d$이고 $c \le x$이며, $x = 1$이면 $c < 1 = d$). [[dirichlet-function|디리클레 함수]]의 (2)에 의해 $[c, d]$에는 유리수와 무리수가 모두 있다.

**1.** *위로 누르기.* $y \in B$이면 $0 \le f(y) \le y < x + \delta$이므로 $\sup f(B) \le x + \delta$이고 $0 \le \inf f(B)$이다. 그래서 $o(f, x, \delta) \le x + \delta$이다.

*아래로 누르기.* 준비를 $\eta = \delta/2$에 쓰면 $B$에 무리수 $y$가 있어 $f(y) = 0$이므로 $\inf f(B) \le 0$이다. $x = 0$이면 $\sup f(B) \ge f(0) = 0 = x$이다. $x > 0$이고 $0 < \varepsilon$이면, $\eta = \min\{\varepsilon, \delta\}/2$로 두고 $[\max\{x - \eta, 0\}, x]$에 디리클레 함수의 (2)를 쓰면(왼쪽 끝이 $x$보다 작다) 유리수 $y$가 있어 $x - \eta \le y \le x$이다. $y \in B$이고 $f(y) = y > x - \varepsilon$이므로 $\sup f(B) > x - \varepsilon$이다. $\varepsilon$이 아무 양수이므로 $\sup f(B) \ge x$이다. 따라서 모든 $\delta$에서 $x \le o(f, x, \delta)$이다.

진동 (1)의 (iii)에 의해 $x \le o(f, x)$이다. 또 $r > x$이면 $\delta = (r - x)/2$에서 $o(f, x, \delta) \le x + \delta < r$이므로 같은 (iii)에 의해 $o(f, x) < r$이다. $o(f, x) > x$였다면 $r = o(f, x)$에서 모순이므로 $o(f, x) = x$이다.

**2.** 진동 (2)에 의해 $f$가 $x$에서 연속인 것은 정확히 $o(f, x) = x = 0$일 때이므로 $D_f = \{x \in [0, 1] : 0 < x\}$이다. $0 < r \le 1$이면 1에 의해 $S_r = \{x \in [0, 1] : r \le x\}$이다. 이것은 $r < 1$이면 닫힌구간 $[r, 1]$이고 $r = 1$이면 $\{1\}$이며, 진동 (3)의 (ii)대로 닫힌집합이다.

**3.** $D_f$는 $[\tfrac12, 1)$을 포함하므로 [[null-set-of-reals|ℝ 의 영집합]]의 (7)에 의해 영집합이 아니다. [[riemann-lebesgue-criterion|리만 적분가능성의 르베그 판정]]의 (1)에 의해 $f$는 리만 적분가능하지 않다.

검산으로 $x = \tfrac12$에서 $\delta = \tfrac14$이면 둘레는 $(\tfrac14, \tfrac34)$이고 $f$의 값은 $0$과 $\tfrac34$보다 작은 유리수들이므로 $o(f, \tfrac12, \tfrac14) = \tfrac34 - 0 = \tfrac34$로 $x + \delta$와 같다.
:::

:::exercise[2의 거듭제곱 칸마다 부호가 바뀌는 계단]
$[0, 1]$ 위의 함수 $f$를 $f(0) = 0$으로, 그리고 자연수 $k$와 $2^{-k} < x \le 2^{1-k}$인 $x$에서 $f(x) = (-1)^k 2^{-k}$로 정한다.

1. $0 < x \le 1$인 모든 $x$에 대하여 $2^{-k} < x \le 2^{1-k}$인 자연수 $k$가 정확히 하나 있음을 보여라. 곧 $f$가 하나로 정해진다.
2. $f$의 불연속점 전체의 집합이 $\{2^{-k} : k \in \mathbb{N}\}$임을 보이고, 리만 적분가능성의 르베그 판정으로 $f$가 리만 적분가능함을 보여라.
3. $\int_0^1 f = -\tfrac15$임을 보여라.
:::

:::solution
$2^{-k}$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(\tfrac12)^k$이고, 같은 항목의 (6)의 (iv)에 의해 $k < k'$이면 $2^{-k'} < 2^{-k}$이다. 자연수 $k$마다 $I_k = \{x : 2^{-k} < x \le 2^{1-k}\}$로 둔다.

**1.** $0 < x \le 1$이라 하자. [[geometric-sequence-limit|등비수열의 극한]]에 의해 $(2^{-k})$는 $0$으로 수렴하므로 $2^{-k} < x$인 자연수 $k$가 있고, [[well-ordering-principle|정렬 원리]]에 의해 그 가운데 가장 작은 것 $k$가 있다. $k = 1$이면 $x \le 1 = 2^{0}$이고, $k \ge 2$이면 $k - 1$은 조건을 만족하지 않으므로 $x \le 2^{-(k-1)}$이다. 그래서 $x \in I_k$이다. $k < k'$이면 $2^{1-k'} \le 2^{-k}$이므로 $I_k$와 $I_{k'}$는 서로소이고, 그런 $k$는 하나뿐이다.

**2.** 모든 $x$에서 $|f(x)| \le x$이다($x \in I_k$이면 $|f(x)| = 2^{-k} < x$). 그래서 $|f(x) - f(0)| \le |x - 0|$이고 $f$는 $0$에서 연속이다. $x$가 $I_k$의 원소이고 $2^{-k} < x < 2^{1-k}$이면 $\delta = \min\{x - 2^{-k}, 2^{1-k} - x\}$에 대하여 $|y - x| < \delta$인 $y$는 모두 $I_k$에 들어 $f(y) = f(x)$이므로 $f$는 $x$에서 연속이다. $x = 1$에서는 $|y - 1| < \tfrac12$인 $[0, 1]$의 $y$가 모두 $I_1$에 들므로 연속이다.

$x = 2^{-k}$이면 $x \in I_{k+1}$이므로 $f(x) = (-1)^{k+1} 2^{-k-1}$이다. 양수 $\delta$마다 $y = 2^{-k} + \min\{\delta, 2^{-k}\}/2$는 $I_k$에 들고 $|y - x| < \delta$이며
$$
|f(y) - f(x)| = 2^{-k} + 2^{-k-1} > 2^{-k-1}
$$
이다($f(y)$와 $f(x)$의 부호가 반대이다). 그래서 $\varepsilon = 2^{-k-1}$에 대하여 연속의 정의를 만족하는 $\delta$가 없고([[continuous-function|연속함수]]) $f$는 $2^{-k}$에서 불연속이다. 1에 의해 $[0, 1]$의 점은 $0$, $1$, 어떤 $I_k$의 안쪽 점, 어떤 $2^{-k}$ 가운데 하나이므로 불연속점 전체의 집합은 $D_f = \{2^{-k} : k \in \mathbb{N}\}$이다.

$e(k) = 2^{-k}$로 정한 함수 $e : \mathbb{N} \to \mathbb{R}$에 대하여 $D_f \subseteq \{e(k) : k \in \mathbb{N}\}$이므로 [[null-set-of-reals|ℝ 의 영집합]]의 (3)에 의해 $D_f$는 영집합이다. $|f| \le \tfrac12$로 유계이므로 [[riemann-lebesgue-criterion|리만 적분가능성의 르베그 판정]]의 (1)에 의해 $f$는 리만 적분가능하다. 불연속점이 끝없이 많으므로 [[finitely-many-discontinuities|불연속점이 유한 개인 함수]]의 (3)으로는 이 결론을 얻지 못한다.

**3.** 자연수 $N$을 고정한다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (2)에 의해 $f$는 $[0, 2^{-N}]$과 $[2^{-N}, 1]$에서 적분가능하고, 같은 항목의 (1)에 의해 $\int_0^1 f = \int_0^{2^{-N}} f + \int_{2^{-N}}^1 f$이다.

$1 \le k \le N$이면 $[2^{-k}, 2^{1-k}]$에서 $f$는 왼쪽 끝 $2^{-k}$ 하나를 빼면 상수 $(-1)^k 2^{-k}$이므로, [[riemann-integral|리만 적분]]의 (5)와 [[changing-finitely-many-values|유한 개의 값 바꾸기]]의 (4)에 의해 $\int_{2^{-k}}^{2^{1-k}} f = (-1)^k 2^{-k} \cdot 2^{-k} = (-\tfrac14)^k$이다. 점 $2^{-N} < 2^{1-N} < \dots < 2^{-1} < 1$은 $[2^{-N}, 1]$의 분할이므로 적분의 구간 덧셈의 (3)에 의해 $\int_{2^{-N}}^1 f = \sum_{k=1}^{N} (-\tfrac14)^k$이다. 또 $[0, 2^{-N}]$에서 $|f(x)| \le x \le 2^{-N}$이므로 리만 적분의 (2)의 (iii)에 의해 $r_N = \int_0^{2^{-N}} f$는 $|r_N| \le 4^{-N}$을 만족한다. 정리하면
$$
\int_0^1 f = \sum_{k=1}^{N} \Bigl(-\frac{1}{4}\Bigr)^k + r_N
$$
이다. $N \to \infty$이면 [[geometric-series|등비급수]]의 (2)에 의해 첫째 항은 $\tfrac{-1/4}{1 + 1/4} = -\tfrac15$로 수렴하고, [[squeeze-lemma|조임 정리]]와 등비수열의 극한에 의해 $r_N \to 0$이다. 왼쪽은 $N$과 상관없는 수이므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (1)과 [[limit-is-unique|극한의 유일성]]에 의해 $\int_0^1 f = -\tfrac15$이다.
:::

:::exercise[끝없이 여러 번 덮기를 한 번 덮기로 바꾼 정의]
$\mathbb{R}$의 부분집합 $A$가 **한 번 덮이는 집합**이라는 것을, 모든 자연수 $n$에서 $c_n \le d_n$이고 $\sum_{n=1}^{\infty} (d_n - c_n) < \infty$인 실수열 $(c_n)$, $(d_n)$이 있어 $A \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n)$일 때라고 하자(이 문제에서만 쓰는 이름이다).

1. 모든 영집합이 한 번 덮이는 집합임을 보여라.
2. $[0, 1)$과 $\mathbb{N}$이 한 번 덮이는 집합임을 보이고, $[0, 1)$은 영집합이 아님을 보여라. 따라서 영집합의 정의의 "상극한에 포함된다"를 "합집합에 포함된다"로 바꿀 수 없다.
3. $\mathbb{R}$은 한 번 덮이는 집합이 아님을 보여라.
:::

:::solution
영집합과 영 덮개열은 [[null-set-of-reals|ℝ 의 영집합]]의 것이고, 집합열의 합집합과 상극한은 [[sequence-of-sets|집합열]]의 것이다.

**1.** $A$가 영집합이고 $\bigl((c_n), (d_n)\bigr)$이 그 영 덮개열이면, $A$의 원소 $x$에 대하여 영 덮개열의 정의를 $M = 1$에 쓰면 $x \in [c_n, d_n)$인 $n$이 있으므로 $x \in \bigcup_{n=1}^{\infty} [c_n, d_n)$이다. 총길이는 실수이므로 $A$는 한 번 덮이는 집합이다.

**2.** $c_1 = 0$, $d_1 = 1$이고 $n \ge 2$에서 $c_n = d_n = 0$으로 두면 총길이는 $1$이고 $[0, 1) \subseteq [c_1, d_1)$이다([[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (4)). $\mathbb{N}$은 $c_n = n$, $d_n = n + 2^{-n}$으로 덮이고, 총길이는 [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)과 확장된 실수의 합의 (3)의 (i)에 의해 $1$이다. 한편 ℝ 의 영집합의 (7)에 의해 $[0, 1)$은 영집합이 아니다. 그래서 한 번 덮이는 집합이지만 영집합이 아닌 집합이 있다. $[0, 1)$의 한 점은 위의 덮개열의 첫째 칸에만 들고 그 뒤의 칸에는 들지 않으므로 상극한의 원소가 아니다.

**3.** $\mathbb{R}$이 $(c_n)$, $(d_n)$으로 덮이고 총길이가 실수 $L$이라 하자. $[0, L + 1) \subseteq \mathbb{R} \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n)$이므로 [[countable-additivity-of-length|길이의 가산 가법성]]의 (2)에 의해 $L + 1 \le L$이다. 모순이므로 $\mathbb{R}$은 한 번 덮이는 집합이 아니다. 같은 논법으로 $a < b$이면 $[a, b)$를 포함하는 집합을 덮는 열의 총길이는 $b - a$ 이상이다. 한 번 덮기의 총길이를 마음대로 작게 할 수 없다는 것이 영집합과의 차이이다.
:::
