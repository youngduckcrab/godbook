---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "5.2.5절, Exercise 5.2.5 (p.197) — 문제 '적분이 0 인 음이 아닌 함수의 하한'과 같은 설정(0 이상이고 적분이 0 인 함수). 출처는 f 가 연속이라 두고 f 가 모든 점에서 0 임을 묻는다"
added: 2026-11-26
---

:::exercise[구간마다 식이 다른 함수의 방향 있는 적분]
$x \le 1$이면 $f(x) = x^2$, $1 < x$이면 $f(x) = 2x - 1$로 정한 함수 $f : [0, 2] \to \mathbb{R}$를 생각한다.

1. $[0, 2]$의 모든 $t$에서 $f$가 $1$과 $t$ 사이에서 적분가능하고
   $$
   \int_1^t f = \begin{cases} \dfrac{t^3 - 1}{3} & (0 \le t \le 1) \\[2mm] t^2 - t & (1 \le t \le 2) \end{cases}
   $$
   임을 보여라. ($t = 1$에서는 두 식이 같은 값이다.)
2. $f$가 $[0, 2]$에서 적분가능함을 보이고 $\int_0^2 f$와 $\int_2^0 f$를 구하라.
:::

:::solution
리만 적분가능, 적분, "$[c, d]$에서 적분가능"은 [[riemann-integral|리만 적분]]의 것이고, "사이에서 적분가능"과 방향 있는 적분은 [[oriented-integral|방향 있는 적분]]의 것이다. 거듭제곱 $x^2 = xx$, $t^3 = t^2 t$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. 각 실수는 $x \le 1$과 $1 < x$ 가운데 정확히 하나를 만족하므로([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)) [[real-valued-function|실함수]]의 (1)에 의해 $f$가 정해진다.

1. **$1 < t \le 2$인 경우.** $g(x) = 2x - 1$로 정한 $g : [1, t] \to \mathbb{R}$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)($p = 2$, $q = -1$)에 의해 적분가능하고
   $$
   \begin{aligned}
   \int_1^t g &= \frac{2(t^2 - 1)}{2} - (t - 1) \\
   &= t^2 - t
   \end{aligned}
   $$
   이다. $[1, t]$의 $x$에서 $x = 1$이면 $f(1) = 1 = 2 \cdot 1 - 1 = g(1)$이고, $1 < x$이면 $f(x) = 2x - 1 = g(x)$이다. 리만 적분의 (4)의 마지막 문장에 의해 $f$는 $[1, t]$에서 적분가능하고 $\int_1^t f = t^2 - t$이다. $1 < t$이므로 방향 있는 적분의 정의에 의해 $f$는 $1$과 $t$ 사이에서 적분가능하고 이 값이 $\int_1^t f$이다.

   **$0 \le t < 1$인 경우.** $g(x) = x^2$으로 정한 $g : [t, 1] \to \mathbb{R}$는 $0 \le t$이므로 리만 적분의 예의 (2)에 의해 적분가능하고 $\int_t^1 g = \frac{1 - t^3}{3}$이다. $[t, 1]$의 모든 $x$는 $x \le 1$이므로 $f(x) = x^2 = g(x)$이고, 같은 까닭으로 $f$는 $[t, 1]$에서 적분가능하며 $\int_t^1 f = \frac{1 - t^3}{3}$이다. $t < 1$이므로 방향 있는 적분의 정의에 의해 $f$는 $1$과 $t$ 사이에서 적분가능하고
   $$
   \begin{aligned}
   \int_1^t f &= -\int_t^1 f = -\frac{1 - t^3}{3} \\
   &= \frac{t^3 - 1}{3}
   \end{aligned}
   $$
   이다.

   **$t = 1$인 경우.** 방향 있는 적분의 정의에 의해 $\int_1^1 f = 0$이고, $\frac{1^3 - 1}{3} = 0 = 1^2 - 1$이다.

2. 1의 $t = 0$과 $t = 2$의 경우에 의해 $f$는 $[0, 1]$과 $[1, 2]$에서 적분가능하고 $\int_0^1 f = \frac{1}{3}$, $\int_1^2 f = 4 - 2 = 2$이다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)을 $0 < 1 < 2$에 쓰면 $f$는 $[0, 2]$에서 적분가능하고
   $$
   \int_0^2 f = \frac{1}{3} + 2 = \frac{7}{3}
   $$
   이다. $2 > 0$이므로 방향 있는 적분의 정의에 의해 $\int_2^0 f = -\frac{7}{3}$이다.

검산으로 방향 있는 적분의 (2)를 $\alpha = 0$, $\beta = 1$, $\gamma = 2$에 쓰면 $\int_0^2 f = \int_0^1 f + \int_1^2 f$이고, 그 (1)에 의해 $\int_0^1 f = -\int_1^0 f = -(-\frac{1}{3})$이므로 1의 두 식으로도 $\frac{1}{3} + 2$가 나온다. 또 $t = \frac{1}{2}$이면 $\int_1^{1/2} f = \frac{1/8 - 1}{3} = -\frac{7}{24}$이다.
:::

:::exercise[적분이 0 인 음이 아닌 함수의 하한]
$a < b$인 실수 $a$, $b$와 리만 적분가능한 $f : [a, b] \to \mathbb{R}$가 $[a, b]$의 모든 $x$에서 $0 \le f(x)$이고 $\int_a^b f = 0$이라 하자. $a \le c < d \le b$인 모든 실수 $c$, $d$에 대하여 다음을 보여라.

1. $f$는 $[c, d]$에서 적분가능하고 $\int_c^d f = 0$이다.
2. $\inf f([c, d]) = 0$이다. 곧 $[c, d]$ 위에서 $f$의 값이 어떤 양수 이상이 될 수는 없다.
:::

:::solution
방향 있는 적분과 "사이에서 적분가능"은 [[oriented-integral|방향 있는 적분]]의 것이고, $[c, d]$ 위의 적분은 [[riemann-integral|리만 적분]]의 (4)의 뜻이다. [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (1)의 (ii)"처럼 쓴다.

1. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (2)에 의해 $f$는 $[c, d]$에서 적분가능하다. $a$, $c$, $d$, $b$는 모두 $[a, b]$의 원소이므로, 방향 있는 적분의 (2)를 $(\alpha, \beta, \gamma) = (a, c, b)$와 $(c, d, b)$에 쓰면 아래의 모든 적분이 정해지고
   $$
   \begin{aligned}
   0 &= \int_a^b f = \int_a^c f + \int_c^b f \\
   &= \int_a^c f + \int_c^d f + \int_d^b f
   \end{aligned}
   $$
   이다. $[a, b]$ 위의 값이 $0$인 상수함수를 $z$라 하면 방향 있는 적분의 (4)에 의해 $z$는 어느 두 점 사이에서도 적분가능하고 적분은 $0$이다. $a \le c$이고 $a$와 $c$ 사이의 모든 $t$에서 $z(t) = 0 \le f(t)$이므로, [[monotonicity-of-the-integral|적분의 단조성]]의 (6)의 (i)에 의해 $0 \le \int_a^c f$이다. 같은 방법으로 $0 \le \int_c^d f$이고 $0 \le \int_d^b f$이다. 위 등식에서 $\int_c^d f = -\left(\int_a^c f + \int_d^b f\right)$이고 괄호 안이 $0$ 이상이므로(순서 성질 (2)의 (iii)) 순서 성질 (3)의 (iii)에 의해 $\int_c^d f \le 0$이다. 순서 성질 (1)의 (ii)에 의해 $\int_c^d f = 0$이다. $c < d$이므로 이 방향 있는 적분은 $[c, d]$ 위의 적분이다.

2. 리만 적분의 (6)에 의해 $f$는 유계이므로 $f([c, d])$는 공집합이 아니고 유계이며 하한 $s = \inf f([c, d])$가 있다([[infimum-exists|하한의 존재]]의 (4)). 모든 $x \in [c, d]$에서 $0 \le f(x)$이므로 $0$은 $f([c, d])$의 하계이고, 하한의 정의에 의해 $0 \le s$이다. 한편 모든 $x \in [c, d]$에서 $s \le f(x)$이므로, 리만 적분의 (2)의 (ii)를 $[c, d]$ 위의 제한 $f|_{[c, d]}$에 쓰면 1에 의해 $s(d - c) \le \int_c^d f = 0 = 0 \cdot (d - c)$이다. $0 < d - c$이므로 순서 성질 (6)의 (iv)에 의해 $s \le 0$이다. 따라서 $s = 0$이다.

   $[c, d]$의 모든 $x$에서 $k \le f(x)$인 양수 $k$가 있다면 $k$는 하계이므로 $k \le s = 0$이 되어 $0 < k$에 어긋난다.
:::

:::exercise[적분의 제곱과 제곱의 적분]
$a < b$인 실수 $a$, $b$와 리만 적분가능한 $f : [a, b] \to \mathbb{R}$에 대하여, $x$에서의 값이 $f(x)^2$인 함수를 $ff$라 하자.

1. 다음 부등식을 보여라.
   $$
   \left(\int_a^b f\right)^2 \le (b - a) \int_a^b ff
   $$
   ($c = (b - a)^{-1}\int_a^b f$로 두고 $x$에서의 값이 $(f(x) - c)^2$인 함수를 생각한다.)
2. $f$가 상수함수이면 등식임을 보여라. 또 $[0, 2]$ 위의 값이 $1$인 상수함수로 $(b - a)$를 지울 수 없음을 보여라.
3. $[0, 2]$ 위의 $f(x) = x$에서 두 쪽을 계산하라.
:::

:::solution
아래에서 [[linearity-of-the-integral|적분의 선형성]]을 "선형성", [[riemann-integral|리만 적분]]을 "리만 적분"이라 줄여 번호와 함께 쓴다. 곱의 적분가능성은 [[product-is-integrable|곱의 적분가능성]]의 것이고, 거듭제곱 $y^2 = yy$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. $\ell = b - a$, $A = \int_a^b f$, $Q = \int_a^b ff$로 둔다. 곱의 적분가능성의 (2)에 의해 $ff$는 적분가능하므로 $Q$가 정해진다.

1. $a < b$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (i)에 의해 $0 < \ell$이고 $\ell \ne 0$이다. $c = \ell^{-1}A$로 두면 $c\ell = A$이다. $[a, b]$ 위의 값이 $c$인 상수함수와 값이 $cc$인 상수함수를 $k_1$, $k_2$라 하면 리만 적분의 (5)에 의해 둘은 적분가능하고 $\int_a^b k_1 = c\ell$, $\int_a^b k_2 = cc\,\ell$이다.

   $g = f - k_1$로 두면 선형성 (4)에 의해 $g$는 적분가능하고, 곱의 적분가능성의 (2)에 의해 $gg$도 적분가능하다. 모든 $x$에서 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K3), (K12)에 의해
   $$
   \begin{aligned}
   &g(x)g(x) \\
   &\quad = (f(x) - c)(f(x) - c) \\
   &\quad = f(x)f(x) + (-2c)f(x) \\
   &\qquad + cc
   \end{aligned}
   $$
   이므로 [[real-valued-function|실함수]]의 (2)에 의해 $gg = (ff + (-2c)f) + k_2$이다. 선형성 (4)를 차례로 쓰면
   $$
   \begin{aligned}
   \int_a^b gg &= Q + (-2c)A + cc\,\ell \\
   &= Q - 2cA + cA \\
   &= Q - cA
   \end{aligned}
   $$
   이다($cc\,\ell = c(c\ell) = cA$). 순서 성질 (5)의 (iii)에 의해 모든 $x$에서 $0 \le g(x)g(x)$이므로 [[monotonicity-of-the-integral|적분의 단조성]]의 (4)에 의해 $0 \le Q - cA$, 곧 $cA \le Q$이다. 양변에 $0 < \ell$을 곱하면(순서 성질 (4)의 (iii)) $(c\ell)A \le \ell Q$이고, $c\ell = A$이므로 $AA \le \ell Q$이다. 곧 $\left(\int_a^b f\right)^2 \le (b - a)\int_a^b ff$이다.

2. $f$가 값이 $p$인 상수함수이면 $ff$는 값이 $pp$인 상수함수이고, 리만 적분의 (5)에 의해 $A = p\ell$, $Q = pp\,\ell$이다. 그러면 $AA = pp\,\ell\ell = \ell Q$이다. 특히 $[0, 2]$ 위의 값이 $1$인 상수함수에서 $A = 2$, $Q = 2$이고 $AA = 4 = 2 \cdot 2 = \ell Q$이지만 $AA = 4 > 2 = Q$이므로, 1의 부등식에서 $(b - a)$를 지운 "$\left(\int_a^b f\right)^2 \le \int_a^b ff$"는 이 함수에서 거짓이다.

3. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_0^2 x\,dx = \frac{4}{2} = 2$이고, $ff$는 $x$에서의 값이 $x^2$인 함수이므로 그 (2)에 의해 $\int_0^2 x^2\,dx = \frac{8}{3}$이다. 왼쪽은 $2^2 = 4$, 오른쪽은 $2 \cdot \frac{8}{3} = \frac{16}{3}$이고 $12 < 16$이므로 $4 < \frac{16}{3}$이다.
:::

:::exercise[무게를 단 적분의 평균값 정리]
$a < b$인 실수 $a$, $b$와 연속함수 $f : [a, b] \to \mathbb{R}$, 리만 적분가능한 $g : [a, b] \to \mathbb{R}$가 있고 $[a, b]$의 모든 $x$에서 $0 \le g(x)$라 하자.

1. $fg$가 리만 적분가능하고
   $$
   \int_a^b fg = f(c) \int_a^b g
   $$
   인 $c \in [a, b]$가 있음을 보여라.
2. $[0, \frac{1}{2}]$ 위에서 $f(x) = x$, $g(x) = 1 - 2x$일 때 1의 $c$를 구하라.
:::

:::solution
연속함수의 적분가능성은 [[continuous-implies-integrable|연속함수의 적분가능성]]의 것이고, 함수의 최댓값·최솟값은 [[extreme-value-theorem|최대·최소 정리]]의 것이다. [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (4)의 (iii)"처럼 쓴다. $G = \int_a^b g$로 둔다.

1. 연속함수의 적분가능성의 (1)에 의해 $f$는 적분가능하고, [[product-is-integrable|곱의 적분가능성]]의 (1)에 의해 $fg$도 적분가능하다. 최대·최소 정리의 (2)에 의해 모든 $x \in [a, b]$에서 $f(q) \le f(x) \le f(p)$인 $p$, $q \in [a, b]$가 있고 $f(q) = \min f([a, b])$, $f(p) = \max f([a, b])$이다. $0 \le g(x)$이므로 순서 성질 (4)의 (iii)에 의해 모든 $x$에서
   $$
   \begin{aligned}
   f(q)\,g(x) &\le f(x)\,g(x) \\
   &\le f(p)\,g(x)
   \end{aligned}
   $$
   이다. [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $f(q)g$와 $f(p)g$는 적분가능하고 적분은 $f(q)G$와 $f(p)G$이다. [[monotonicity-of-the-integral|적분의 단조성]]의 (3)에 의해 $f(q)G \le \int_a^b fg \le f(p)G$이다. 또 그 (4)에 의해 $0 \le G$이다.

   - $G = 0$이면 위 부등식은 $0 \le \int_a^b fg \le 0$이 되어([[real-number-arithmetic|실수의 계산 법칙]]의 (K9)) 순서 성질 (1)의 (ii)에 의해 $\int_a^b fg = 0 = f(a) \cdot 0$이다. $c = a$로 두면 된다.
   - $G \ne 0$이면 $0 < G$이고 순서 성질 (6)의 (i)에 의해 $0 < G^{-1}$이다. $y = G^{-1}\int_a^b fg$로 두고 부등식의 각 변에 $G^{-1}$을 곱하면(순서 성질 (4)의 (iii)) $f(q) \le y \le f(p)$이다. [[intermediate-value-theorem|사잇값 정리]]의 (4)에 의해, $f(q) < f(p)$이면 $f([a, b]) = [f(q), f(p)]$이므로 $y \in f([a, b])$이고, $f(q) = f(p)$이면 순서 성질 (1)의 (ii)에 의해 $y = f(q) \in f([a, b])$이다. 어느 경우에도 $f(c) = y$인 $c \in [a, b]$가 있고, $f(c)\,G = y\,G = \int_a^b fg$이다.

2. $[0, \frac{1}{2}]$의 $x$에서 $2x \le 1$이므로 $0 \le g(x)$이다. $f$는 $[0, \frac{1}{2}]$ 위의 항등함수이므로 [[continuous-function|연속함수]]의 (4)에 의해 연속함수이다. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해
   $$
   \begin{aligned}
   &\int_0^{1/2} (1 - 2x)\,dx \\
   &\quad = \frac{(-2)\bigl(\frac{1}{4} - 0\bigr)}{2} + \frac{1}{2} \\
   &\quad = \frac{1}{4}
   \end{aligned}
   $$
   이다. $fg$는 $x$에서의 값이 $x - 2x^2$인 함수이고, $x$와 $x^2$의 적분은 리만 적분의 예의 (1), (2)에 의해 $\frac{1}{8}$과 $\frac{1}{24}$이므로 적분의 선형성의 (4)에 의해 $\int_0^{1/2} fg = \frac{1}{8} - 2 \cdot \frac{1}{24} = \frac{1}{24}$이다. $f(c) \cdot \frac{1}{4} = \frac{1}{24}$에서 $c = \frac{1}{6}$이고, $0 \le \frac{1}{6} \le \frac{1}{2}$이다.
:::

:::exercise[부호가 바뀌는 무게의 예]
$[0, 1]$ 위에서 $f(x) = x$, $g(x) = 1 - 2x$로 둔다.

1. $\int_0^1 g = 0$이고 $\int_0^1 fg = -\frac{1}{6}$임을 보이고, 따라서 $\int_0^1 fg = f(c)\int_0^1 g$인 $c \in [0, 1]$이 없음을 보여라. 문제 4의 가정 가운데 무엇이 성립하지 않는가?
2. 거꾸로 $[a, b]$의 모든 $x$에서 $g(x) \le 0$이면 문제 4의 결론이 그대로 성립함을 보여라.
:::

:::solution
1. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_0^1 (1 - 2x)\,dx = \frac{(-2)(1 - 0)}{2} + 1 = 0$이다. $fg$는 $x$에서의 값이 $x - 2x^2$인 함수이고, 리만 적분의 예의 (1), (2)와 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_0^1 fg = \frac{1}{2} - 2 \cdot \frac{1}{3} = -\frac{1}{6}$이다. 어떤 $c$에서도 [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)에 의해 $f(c) \int_0^1 g = f(c) \cdot 0 = 0 \ne -\frac{1}{6}$이므로 그런 $c$는 없다. $f$는 항등함수이므로 연속이고([[continuous-function|연속함수]]의 (4)) $g$는 적분가능하지만, $g(1) = -1 < 0$이어서 "모든 $x$에서 $0 \le g(x)$"가 성립하지 않는다. $g$는 $x = \frac{1}{2}$에서 부호가 바뀐다.

2. $g$가 적분가능하고 모든 $x$에서 $g(x) \le 0$이면, 적분의 선형성의 (4)에 의해 $-g = (-1)g$는 적분가능하고 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (ii)에 의해 모든 $x$에서 $0 \le -g(x)$이다. 문제 4의 1을 $f$와 $-g$에 쓰면 $\int_a^b f(-g) = f(c)\int_a^b (-g)$인 $c \in [a, b]$가 있다. 모든 $x$에서 $f(x)(-g(x)) = (-1)(f(x)g(x))$이므로([[real-number-arithmetic|실수의 계산 법칙]]의 (K9), (K12)) $f(-g) = (-1)(fg)$이고, 적분의 선형성의 (4)에 의해 양변은 $-\int_a^b fg$와 $-f(c)\int_a^b g$이다. 양변에 $-1$을 곱하면 $\int_a^b fg = f(c)\int_a^b g$이다. 따라서 문제 4의 결론에 필요한 것은 $g$의 부호가 한 가지로 정해져 있다는 것이고, 1의 예에서는 그것이 성립하지 않았다. (부호가 바뀌는 $g$에서도 결론이 성립할 수는 있다. 예컨대 $f$가 값이 $p$인 상수함수이면 적분의 선형성의 (4)에 의해 $\int_a^b fg = p\int_a^b g = f(a)\int_a^b g$이다.)
:::
