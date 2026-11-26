---
written_by: Claude
status: reviewed
sources: []
added: 2026-11-26
---

:::exercise[매개변수에 따라 차수가 달라지는 다항함수]
실수 $a$마다

$$
f_a = (t - a)\bigl(t - (-a)\bigr) - (1 - a)\,t^2
$$

이라 하자. 여기서 곱은 함수의 곱이고, $(1 - a)\,t^2$은 함수 $t^2$의 $(1 - a)$배이다.

1. $f_a = b_0 t^0 + b_1 t^1 + b_2 t^2$인 실수 $b_0$, $b_1$, $b_2$를 $a$로 나타내라.
2. $f_a$가 영함수인 $a$를 모두 구하고, 그 밖의 $a$에서 $f_a$의 차수와 최고차계수를 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

**(1)** $x$를 실수라 하자. [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 곱의 값과 [[polynomial-function|다항함수]]의 진술에서 정한 $t - c$의 값($x - c$), $t^k$의 값($x^k$)에 의해, 그리고 [[real-function-space|실숫값 함수의 공간]]의 합과 스칼라배의 값($f - g = f + (-g)$이고 $(-g)(x) = -g(x)$)에 의해

$$
\begin{aligned}
f_a(x) &= (x - a)\bigl(x - (-a)\bigr) \\
&\quad - (1 - a)x^2
\end{aligned}
$$

이다. (K9)에 의해 $x - (-a) = x + a$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $x^2 = xx$이다. (K3), (K12)의 (i), (ii)와 (K1)로 전개하면 $(x - a)(x + a) = xx + xa - ax - aa = xx - aa$이고, $(1 - a)xx = xx - a\,xx$이므로

$$
\begin{aligned}
f_a(x) &= (xx - aa) - (xx - a\,xx) \\
&= (-aa) + a\,xx
\end{aligned}
$$

이다. 한편 $g = (-aa)\,t^0 + 0\,t^1 + a\,t^2$이라 하면 다항함수의 (3)에 의해 $g(x) = (-aa) + 0x + a\,x^2 = (-aa) + a\,xx$이다((K9)의 $0x = 0$과 (K4)). 모든 실수 $x$에서 값이 같으므로 [[function|함수]]의 같음에 의해 $f_a = g$이다. 곧 $b_0 = -aa$, $b_1 = 0$, $b_2 = a$이다.

**(2)** [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)에 의해 $f_a$의 $t^0$, $t^1$, $t^2$의 계수는 차례로 $-aa$, $0$, $a$이고, $k > 2$이면 $t^k$의 계수는 $0$이다.

*$a = 0$.* (K9)에 의해 $-aa = -(0 \cdot 0) = 0$이므로 모든 계수가 $0$이고, 같은 항목의 (2)의 (iii)에 의해 $f_0 = o$이다. 영함수의 차수는 정의하지 않는다.

*$a \ne 0$.* $t^2$의 계수 $a$가 $0$이 아니므로 같은 항목의 (2)의 (iii)에 의해 $f_a \ne o$이다. 계수가 $0$이 아닌 $k$는 $2$ 이하이고 $k = 2$가 그런 $k$이므로, 같은 항목의 (4)에 의해 $\deg f_a = 2$이고 최고차계수는 $a$이다.

따라서 $f_a$가 영함수인 것은 정확히 $a = 0$일 때이고, $a \ne 0$이면 $f_a$는 차수가 $2$이고 최고차계수가 $a$이다. $a = 0$이면 (1)의 계산에서 빼는 두 함수가 모두 $t^2$이 되어 서로 지워진다.
:::

:::exercise[모든 x 에서 f(−x) = f(x) 인 다항함수]
$n \ge 0$이 정수이고 $a_0, \dots, a_n$이 $0$부터 번호가 붙은 실수의 열이며 $f = a_0 t^0 + \cdots + a_n t^n$이라 하자. 모든 실수 $x$에서 $f(-x) = f(x)$이면, $k \le n$인 모든 홀수 $k$에서 $a_k = 0$임을 증명하라.
:::

:::solution
$0$부터 번호가 붙은 실수의 열 $b_0, \dots, b_n$을 $b_k = (-1)^k a_k$로 정하고([[power-of-a-real-number|실수의 거듭제곱]]), $g = b_0 t^0 + \cdots + b_n t^n$이라 하자. [[polynomial-function|다항함수]]의 진술에 의해 $g \in \mathcal{P}_n$이다.

*$g$와 $f$는 같다.* $x$를 실수라 하자. [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)에 의해 $-x = (-1)x$이고, 거듭제곱의 (2)의 (iii)에 의해 정수 $k \ge 0$마다 $(-x)^k = (-1)^k x^k$이다. 따라서 (K1), (K2)에 의해 $a_k(-x)^k = (-1)^k a_k\, x^k = b_k x^k$이다. 다항함수의 (3)에 의해 $f(-x)$는 $i$번째 항이 $a_{i-1}(-x)^{i-1}$인 열의 합이고 $g(x)$는 $i$번째 항이 $b_{i-1}x^{i-1}$인 열의 합인데, 두 열은 모든 자리에서 항이 같으므로 같은 열이고([[finite-sum-of-vectors|벡터의 유한 합]]의 진술) 합도 같다. 따라서 $g(x) = f(-x) = f(x)$이다. 모든 $x$에서 값이 같으므로 [[function|함수]]의 같음에 의해 $g = f$이다.

*계수를 비교한다.* [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (i)에 의해 모든 $k \in \{0, \dots, n\}$에서 $b_k = a_k$, 곧 $(-1)^k a_k = a_k$이다. $k$가 홀수이면 거듭제곱의 (5)에 의해 $(-1)^k = -1$이므로 (K9)에 의해 $-a_k = a_k$이다. 양변에 $a_k$를 더하면 (K5)와 (K8)의 $-a_k$의 뜻에 의해 $0 = a_k + a_k$이고, (K4), (K3)에 의해 $a_k + a_k = a_k \cdot 1 + a_k \cdot 1 = a_k(1 + 1) = a_k \cdot 2$이다. $2 \ne 0$((K7))이므로 (K10)에 의해 $a_k = 0$이다.

$n = 0$이면 $k \le 0$인 홀수 $k$가 없으므로 증명할 것이 없다.
:::

:::exercise[모든 x 에서 f(x + 1) = f(x) 인 다항함수]
$f$가 다항함수이고 모든 실수 $x$에서 $f(x + 1) = f(x)$이면, $f$는 값이 $f(0)$인 상수함수 $f(0)\,t^0$임을 증명하라.
:::

:::solution
[[polynomial-function|다항함수]]의 정의에 의해 $f \in \mathcal{P}_n$인 정수 $n \ge 0$이 있다. $c = f(0)$, $g = f - c\,t^0$이라 하자. 다항함수의 (4)에 의해 $c\,t^0 \in \mathcal{P}_0$이고 (2)에 의해 $\mathcal{P}_0 \subseteq \mathcal{P}_n$이므로, (1)에 의해 $g \in \mathcal{P}_n$이다. [[real-function-space|실숫값 함수의 공간]]의 합과 스칼라배의 값에 의해 모든 실수 $x$에서 $g(x) = f(x) - c$이다.

*$0$ 이상인 모든 정수에서 $g$의 값은 $0$이다.* 정수 $k \ge 0$에 대한 명제 "$g(k) = 0$"을 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로 보인다. $k = 0$이면 $g(0) = f(0) - c = c - c = 0$이다([[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (v)). $k \ge 0$이고 $g(k) = 0$이라 하자. 가정을 $x = k$에 쓰면 $f(k + 1) = f(k)$이므로 $g(k + 1) = f(k + 1) - c = f(k) - c = g(k) = 0$이다.

*$g$는 영함수이다.* $i$번째 항이 $i - 1$인 길이 $n + 1$인 실수의 열 $0, 1, \dots, n$을 생각하자. $i \ne j$이면 $i - 1 \ne j - 1$이므로((K7)) 이 열은 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 뜻으로 서로 다르고, 위의 귀납에 의해 모든 항이 $g$의 근이다. $g \in \mathcal{P}_n$이므로 근의 개수의 (2)에 의해 $g = o$이다. 따라서 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B12)에 의해 $f = c\,t^0$이다.
:::

:::exercise[t³ − 3t + 2 의 인수분해와 근의 중복도]
$f = 2t^0 - 3t^1 + 0\,t^2 + 1\,t^3$이라 하자.

1. $f(1) = 0$임을 확인하고, $f = (t - 1)q$인 $q \in \mathcal{P}_2$를 구하라.
2. $f = (t - 1)^2 \bigl(t - (-2)\bigr)$임을 보여라.
3. $f$의 근을 모두 구하고, 각 근의 중복도를 구하라. 중복도의 합과 $\deg f$를 비교하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 다항함수의 값은 [[polynomial-function|다항함수]]의 (3)으로, 함수의 곱의 값은 [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 값으로 계산한다.

**(1)** $f(1) = 2 - 3 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 = 0$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)의 $1^k = 1$). $q = -2t^0 + 1\,t^1 + 1\,t^2$이라 하면 $q \in \mathcal{P}_2$이고, 모든 실수 $x$에서

$$
\begin{aligned}
&\bigl((t - 1)q\bigr)(x) \\
&= (x - 1)(-2 + x + x^2) \\
&= -2x + x^2 + x^3 \\
&\quad + 2 - x - x^2 \\
&= 2 - 3x + x^3 = f(x)
\end{aligned}
$$

이다(거듭제곱의 (1)의 $x^{k+1} = x^k x$). [[function|함수]]의 같음에 의해 $f = (t - 1)q$이다. [[factor-theorem|인수 정리]]의 (2)가 이런 $q$가 있다는 것을 보장하고, [[roots-of-polynomial-function|다항함수의 근의 개수]]의 (6)에 의해 이런 $q$는 이것 하나뿐이다.

**(2)** $q(1) = -2 + 1 + 1 = 0$이다. 모든 실수 $x$에서 $(x - 1)(x - (-2)) = (x - 1)(x + 2) = x^2 + x - 2 = q(x)$이므로 함수의 같음에 의해 $q = (t - 1)\bigl(t - (-2)\bigr)$이다. 다항함수의 곱의 (1)의 결합법칙과 (3)의 $f^2 = f^1 f = ff$에 의해

$$
\begin{aligned}
f &= (t - 1)\Bigl((t - 1)\bigl(t - (-2)\bigr)\Bigr) \\
&= (t - 1)^2\bigl(t - (-2)\bigr)
\end{aligned}
$$

이다. 오른쪽은 항이 $(t - 1)^2$, $t - (-2)$인 길이 $2$인 열의 곱이고(다항함수의 곱의 (2)), (3)의 $f^1 = f$에 의해 $t - (-2) = (t - (-2))^1$이다.

**(3)** $1 \ne -2$이므로 길이 $2$인 열 $1, -2$는 서로 다르다. (2)의 꼴은 [[multiplicity-of-a-root|근의 중복도]]의 (5)에서 $a = 1$, $\mu_1 = 1$, $\mu_2 = -2$, $m_1 = 2$, $m_2 = 1$로 둔 것이다(다항함수의 곱의 (1)의 $t^0 f = f$에 의해 $1$배는 그대로이다). 그 (i)–(iii)에 의해 $f$에서 $1$의 중복도는 $2$, $-2$의 중복도는 $1$이고, $f$의 근은 정확히 $1$과 $-2$이며, $\deg f = 2 + 1 = 3$이다. 중복도의 합 $3$은 차수와 같다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)과 (4)로 보아도 $t^3$의 계수가 $1 \ne 0$이고 그보다 큰 $k$의 계수는 $0$이므로 $\deg f = 3$이다.
:::

:::exercise[더한 다항함수에서 근의 중복도]
$f$, $g$가 영함수가 아닌 다항함수이고 $c$가 실수라 하자. $f$에서 $c$의 중복도를 $m$, $g$에서 $c$의 중복도를 $k$라 하고 $m \le k$라 하자.

1. $f + g$가 영함수가 아니면, $f + g$에서 $c$의 중복도는 $m$ 이상임을 증명하라.
2. $f = (t - 1)t$, $g = (-1)(t - 1)$이면 $f$와 $g$에서 $1$의 중복도는 모두 $1$이지만 $f + g$에서 $1$의 중복도는 $2$임을 보여라. 곧 (1)의 부등식에서 등호가 성립하지 않을 수 있다.
:::

:::solution
**(1)** [[multiplicity-of-a-root|근의 중복도]]의 (1)에 의해 $f = (t - c)^m u$, $g = (t - c)^k v$인 다항함수 $u$, $v$가 있다. $m \le k$이므로 $k - m$은 $0$ 이상인 정수이고, [[product-of-polynomial-functions|다항함수의 곱]]의 (3)에 의해 $(t - c)^k = (t - c)^m (t - c)^{k-m}$이다. 같은 항목의 (1)의 결합법칙과 분배법칙에 의해

$$
\begin{aligned}
f + g &= (t - c)^m u \\
&\quad + (t - c)^m\bigl((t - c)^{k-m} v\bigr) \\
&= (t - c)^m h
\end{aligned}
$$

이다. 여기서 $h = u + (t - c)^{k-m} v$이다. 다항함수의 곱의 (6)과 (4)에 의해 $(t - c)^{k-m} v$는 다항함수이고, [[polynomial-function|다항함수]]의 (5)에 의해 $h$는 다항함수이다. $f + g$는 영함수가 아닌 다항함수이므로, 근의 중복도의 (2)의 마지막 문장을 $f + g$, 정수 $m \ge 0$, 다항함수 $h$에 쓰면 $m$은 $f + g$에서 $c$의 중복도 이하이다.

**(2)** 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로, 함수의 곱의 값은 다항함수의 곱에서 정한 값으로 계산한다. 다항함수의 곱의 (3)에 의해 $(t - 1)^1 = t - 1$이다.

*$f$에서의 중복도.* $f = (t - 1)^1 t$이고 $t(1) = 1 \ne 0$이며, $f(2) = (2 - 1) \cdot 2 = 2 \ne 0$이므로 $f$는 영함수가 아니다. 근의 중복도의 (1)의 유일성에 의해 $f$에서 $1$의 중복도는 $1$이다.

*$g$에서의 중복도.* 다항함수의 곱의 (1)의 $(\alpha f)g = f(\alpha g)$와 $t^0 f = f$에 의해 $g = (-1)\bigl((t - 1)t^0\bigr) = (t - 1)^1\bigl((-1)t^0\bigr)$이고, $\bigl((-1)t^0\bigr)(1) = -1 \ne 0$이다. $g(0) = (-1)(0 - 1) = 1 \ne 0$이므로 $g$는 영함수가 아니고, 같은 이유로 $g$에서 $1$의 중복도는 $1$이다.

*$f + g$에서의 중복도.* 분배법칙(다항함수의 곱의 (1))에 의해 $f + g = (t - 1)\bigl(t + (-1)t^0\bigr)$이고, 다항함수의 진술에 의해 $t + (-1)t^0 = t^1 - 1\,t^0 = t - 1$이므로($-(1\,t^0) = (-1)t^0$은 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B5), (B9)) $f + g = (t - 1)(t - 1) = 1\,(t - 1)^2$이다. $(f + g)(0) = (-1)(-1) = 1 \ne 0$이므로 $f + g$는 영함수가 아니고, 근의 중복도의 (4)를 $a = 1$, $k = 2$에 쓰면 $f + g$에서 $1$의 중복도는 $2$이다. $2$는 $f$와 $g$에서의 중복도 $1$보다 크다.
:::

:::exercise[한 점에서 값이 0 인 𝒫ₙ 의 원소들]
$n \ge 1$이 정수이고 $c$가 실수이며 $W = \{f \in \mathcal{P}_n : f(c) = 0\}$이라 하자.

1. $W$가 $\mathbb{R}^{\mathbb{R}}$의 부분공간임을 보여라.
2. $i$번째 항이 $(t - c)t^{i-1}$인 길이 $n$인 열 $(t - c)t^0, (t - c)t^1, \dots, (t - c)t^{n-1}$이 $W$의 기저임을 증명하고, $\dim W = n$임을 보여라.
:::

:::solution
**(1)** [[subspace|부분공간]]의 (S1)–(S3)을 확인한다. [[polynomial-function|다항함수]]의 (1)에 의해 $o \in \mathcal{P}_n$이고 $o(c) = 0$이므로 $o \in W$이다. $f$, $g \in W$이고 $\alpha$가 실수이면 다항함수의 (1)에 의해 $f + g$, $\alpha f \in \mathcal{P}_n$이고, [[real-function-space|실숫값 함수의 공간]]의 합과 스칼라배의 값과 [[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)에 의해 $(f + g)(c) = 0 + 0 = 0$, $(\alpha f)(c) = \alpha \cdot 0 = 0$이다. 따라서 $W$는 부분공간이다.

**(2)** 길이 $n$인 열 $w_1, \dots, w_n$을 $w_i = (t - c)t^{i-1}$로 정한다. [[product-of-polynomial-functions|다항함수의 곱]]의 (1)에 의해 함수 $M : \mathbb{R}^{\mathbb{R}} \to \mathbb{R}^{\mathbb{R}}$, $M(g) = g(t - c)$는 [[linear-map|선형사상]]이고, 같은 항목의 (1)의 교환법칙에 의해 모든 $g$에서 $M(g) = (t - c)g$이다. 따라서 $w_i = M(t^{i-1})$이고, 길이 $n$인 실수의 열 $\beta_1, \dots, \beta_n$에 대하여 선형사상의 (T5)에 의해

$$
\beta_1 w_1 + \cdots + \beta_n w_n = (t - c)\,h
$$

이다. 여기서 $h = \beta_1 t^0 + \cdots + \beta_n t^{n-1}$이고, 이 등식을 (가)라 부른다. $h$는 열 $t^0, \dots, t^{n-1}$의 일차결합이므로 $\mathcal{P}_{n-1}$의 원소이다.

*모든 항이 $W$에 속한다.* $t^{i-1} \in \mathcal{P}_{i-1}$이므로 다항함수의 곱의 (4)에 의해 $w_i \in \mathcal{P}_i$이고, 다항함수의 (2)에 의해 $\mathcal{P}_i \subseteq \mathcal{P}_n$이다. 또 $w_i(c) = (c - c)c^{i-1} = 0$이다((K9)). 따라서 $w_i \in W$이다.

*$W$를 생성한다.* $f \in W$이면 $f \in \mathcal{P}_n$이고 $f(c) = 0$이므로 [[factor-theorem|인수 정리]]의 (2)에 의해 $f = (t - c)q$인 $q \in \mathcal{P}_{n-1}$이 있다. 다항함수의 진술에 의해 $q = \beta_1 t^0 + \cdots + \beta_n t^{n-1}$인 실수의 열 $\beta_1, \dots, \beta_n$이 있고, (가)에 의해 $f = \beta_1 w_1 + \cdots + \beta_n w_n$이다. 따라서 $W \subseteq \operatorname{span}(w_1, \dots, w_n)$이다. 거꾸로 모든 항이 부분공간 $W$에 속하므로 [[linear-combination-and-span|일차결합과 생성]]의 (N3)에 의해 $\operatorname{span}(w_1, \dots, w_n) \subseteq W$이다.

*일차독립이다.* $\beta_1 w_1 + \cdots + \beta_n w_n = o$라 하면 (가)에 의해 $(t - c)h = o$이고 $h \in \mathcal{P}_{n-1}$이므로, [[roots-of-polynomial-function|다항함수의 근의 개수]]의 (5)를 $n - 1$에 쓰면 $h = o$이다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (1)에 의해 열 $t^0, \dots, t^{n-1}$은 일차독립이므로 모든 $\beta_i$가 $0$이다. 곧 $w_1, \dots, w_n$은 [[linear-independence|일차독립]]이다.

[[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $w_1, \dots, w_n$은 벡터공간 $W$의 [[basis|기저]]이고, [[dimension|유한차원과 차원]]의 (1), (2)에 의해 $W$는 유한차원이며 $\dim W = n$이다. $\dim \mathcal{P}_n = n + 1$(계수와 차수의 (1))보다 하나 작다.
:::
