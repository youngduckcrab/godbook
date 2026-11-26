---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "7장 5절, Positive definite forms and inner products 의 G-내적 (pp.214–215)"
added: 2026-11-26
---

:::exercise[매개변수가 들어간 ℝ² 위의 함수가 내적이 될 조건]
실수 $a$에 대하여 $(x, y) \in \mathbb{R}^2 \times \mathbb{R}^2$에서의 값이

$$
\begin{aligned}
g_a(x, y) &= x_1 y_1 + a(x_1 y_2 + x_2 y_1) \\
&\quad + x_2 y_2
\end{aligned}
$$

인 함수 $g_a : \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$를 생각하자($x_k = x(k)$, $y_k = y(k)$).

1. 모든 실수 $a$에서 $g_a$가 내적의 조건 (i)과 (ii)를 만족함을 보여라.
2. $g_a$가 $\mathbb{R}^2$ 위의 내적인 것은 정확히 $-1 < a < 1$일 때임을 보여라.
3. $a = 2^{-1}$일 때 $g_a$가 정하는 노름으로 잰 $e_1 + e_2$의 노름을 구하고, 표준내적이 정하는 노름으로 잰 값과 비교하라.
:::

:::solution
내적과 내적의 조건 (i)–(iii)은 [[inner-product-space|내적과 내적공간]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)에 의하고, 정수 사이의 구체적인 계산은 (K7)이다. 순서에 관한 사실은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다. $\mathbb{R}^2$의 덧셈과 스칼라배는 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 값마다의 연산이다.

**(1)** (i) $x, y \in \mathbb{R}^2$이면 (K1)에 의해 $y_1 x_1 = x_1 y_1$, $y_1 x_2 = x_2 y_1$, $y_2 x_1 = x_1 y_2$, $y_2 x_2 = x_2 y_2$이고, 다시 (K1)에 의해 $x_2 y_1 + x_1 y_2 = x_1 y_2 + x_2 y_1$이다. 따라서 $g_a(y, x) = y_1 x_1 + a(y_1 x_2 + y_2 x_1) + y_2 x_2 = g_a(x, y)$이다.

(ii) $x, y, z \in \mathbb{R}^2$이고 $\alpha$, $\beta$가 실수라 하자. $u = \alpha x + \beta y$이면 $u_k = \alpha x_k + \beta y_k$이므로, (K12)의 (i)과 (K2)에 의해 모든 $k, l \in \{1, 2\}$에서 $u_k z_l = \alpha(x_k z_l) + \beta(y_k z_l)$이다. 이것을 $g_a(u, z)$의 네 곱 $u_1 z_1$, $u_1 z_2$, $u_2 z_1$, $u_2 z_2$에 넣고 (K1)–(K3)으로 $\alpha$가 붙은 항과 $\beta$가 붙은 항을 따로 모으면

$$
\begin{aligned}
g_a(u, z) &= \alpha\bigl(x_1 z_1 + a(x_1 z_2 + x_2 z_1) \\
&\qquad + x_2 z_2\bigr) \\
&\quad + \beta\bigl(y_1 z_1 + a(y_1 z_2 + y_2 z_1) \\
&\qquad + y_2 z_2\bigr) \\
&= \alpha g_a(x, z) + \beta g_a(y, z)
\end{aligned}
$$

이다.

**(2)** $x \in \mathbb{R}^2$이면 (K1)에 의해 $x_2 x_1 = x_1 x_2$이고, (K12)의 (i)과 $1 + 1 = 2$에 의해 $x_1 x_2 + x_1 x_2 = 2 x_1 x_2$이므로 $g_a(x, x) = x_1 x_1 + 2a\, x_1 x_2 + x_2 x_2$이다. 한편 (K3), (K12)의 (i), (K1), (K2)로 전개하면

$$
\begin{aligned}
&(x_1 + a x_2)(x_1 + a x_2) \\
&\quad + (1 - aa)(x_2 x_2) \\
&\quad = x_1 x_1 + 2a\, x_1 x_2 + aa\, x_2 x_2 \\
&\qquad + x_2 x_2 - aa\, x_2 x_2 \\
&\quad = g_a(x, x)
\end{aligned}
$$

이다. 이 등식을 (가)라 하자.

먼저 $-1 < a < 1$이라 하자. [[absolute-value|절댓값]]의 (7)에 의해 $|a| < 1$이고, 그 (2)에 의해 $0 \le |a|$이다. 순서의 성질의 (7)의 (i)에 의해 $|a||a| < 1 \cdot 1 = 1$이고, 절댓값의 (5)에 의해 $|a||a| = aa$이므로 $aa < 1$이다. 순서의 성질의 (3)의 (i)에 의해 $0 < 1 - aa$이다. $p = (x_1 + a x_2)(x_1 + a x_2)$, $q = (1 - aa)(x_2 x_2)$로 두면 순서의 성질의 (5)의 (iii)에 의해 $0 \le p$, $0 \le x_2 x_2$이고, (4)의 (iv)에 의해 $0 \le q$이다. (2)의 (iii)과 (K4)에 의해 $0 = 0 + 0 \le p + q$이므로 (가)에 의해 $0 \le g_a(x, x)$이다.

$g_a(x, x) = 0$이라 하자. 그러면 $p + q = 0$이다. $0 \le p$이므로 순서의 성질의 (2)의 (i)과 (K1), (K4)에 의해 $q = 0 + q \le p + q = 0$이고, $0 \le q$이므로 순서의 성질의 (1)의 (ii)에 의해 $q = 0$이다. 그러면 (K4)에 의해 $p = p + q = 0$이다. $0 < 1 - aa$이므로 순서의 성질의 (1)의 (i)에 의해 $1 - aa \ne 0$이고, (K10)을 $q = 0$에 두 번 쓰면 $x_2 x_2 = 0$이고 $x_2 = 0$이다. 그러면 (K9)와 (K4)에 의해 $x_1 + a x_2 = x_1$이어서 $p = x_1 x_1 = 0$이고, (K10)에 의해 $x_1 = 0$이다. 따라서 $x = (0, 0)$이다. 거꾸로 $x = (0, 0)$이면 (K9)와 (K4)에 의해 $g_a(x, x) = 0$이다. 곧 조건 (iii)이 성립하고, (1)과 함께 $g_a$는 $\mathbb{R}^2$ 위의 내적이다.

다음으로 $-1 < a < 1$이 아니라 하자. 절댓값의 (7)에 의해 $|a| < 1$이 아니므로, 순서의 성질의 (1)의 (iii)에 의해 $1 \le |a|$이다. $0 \le 1$이므로 (7)의 (ii)와 절댓값의 (5)에 의해 $1 = 1 \cdot 1 \le |a||a| = aa$이고, (3)의 (i)과 (iii)에 의해 $1 - aa \le 0$이다. $x = (-a, 1)$로 두면 $x_1 + a x_2 = -a + a = 0$이므로 (가)와 (K9), (K4)에 의해 $g_a(x, x) = 1 - aa \le 0$이다. $g_a$가 내적이라면 조건 (iii)에 의해 $0 \le g_a(x, x)$이므로 순서의 성질의 (1)의 (ii)에 의해 $g_a(x, x) = 0$이고, 다시 (iii)에 의해 $x = (0, 0)$이어야 한다. 그런데 $x$의 $2$에서의 값은 $1 \ne 0$이다((K4)). 따라서 $g_a$는 내적이 아니다.

두 경우를 합하면 $g_a$가 내적인 것은 정확히 $-1 < a < 1$일 때이다.

**(3)** $a = 2^{-1}$이면 $-1 < 0 < 2^{-1} < 1$이므로(순서의 성질의 (8)을 $0 < 1$에 쓴 것과 (3)의 (ii)) (2)에 의해 $g_a$는 내적이다. $x = e_1 + e_2 = (1, 1)$이면 $g_a(x, x) = 1 + 2^{-1}(1 + 1) + 1 = 1 + 1 + 1 = 3$이다. [[norm-in-inner-product-space|내적공간의 노름]]의 정의에 의해 이 내적으로 잰 노름은 $\sqrt{3}$이다. [[standard-inner-product|ℝⁿ 의 표준내적]]으로는 $\langle x, x \rangle = 1 + 1 = 2$이므로 노름의 (8)에 의해 노름은 $\sqrt{2}$이다. $0 \le 2 < 3$이므로 [[square-root-exists|제곱근의 존재]]의 (2)에 의해 $\sqrt{2} < \sqrt{3}$이다. 이 예에서처럼 같은 벡터라도 내적에 따라 길이가 다를 수 있다.
:::

:::exercise[노름이 같은 두 벡터의 합과 차]
$V$가 내적공간이고 $x, y \in V$라 하자.

1. $\langle x + y, x - y \rangle = \lVert x \rVert^2 - \lVert y \rVert^2$임을 보이고, 이로부터 $\lVert x \rVert = \lVert y \rVert$인 것은 정확히 $\langle x + y, x - y \rangle = 0$일 때임을 보여라.
2. $\lVert x \rVert = \lVert y \rVert = 1$이면 $\langle x, y \rangle = 1 - 2^{-1}\lVert x - y \rVert^2$임을 보여라.
:::

:::solution
내적의 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** 내적과 내적공간의 (2)의 마지막 문장(둘째 자리의 차)에 의해 $\langle x + y, x - y \rangle = \langle x + y, x \rangle - \langle x + y, y \rangle$이고, (1)의 첫째 자리의 덧셈에 의해 이것은

$$
\begin{aligned}
&\bigl(\langle x, x \rangle + \langle y, x \rangle\bigr) - \bigl(\langle x, y \rangle + \langle y, y \rangle\bigr)
\end{aligned}
$$

이다. 조건 (i)에 의해 $\langle y, x \rangle = \langle x, y \rangle$이므로 (K1), (K2), (K5), (K12)의 (iv)로 정리하면 $\langle x, x \rangle - \langle y, y \rangle$이다. 노름의 (2)에 의해 $\langle x, x \rangle = \lVert x \rVert^2$, $\langle y, y \rangle = \lVert y \rVert^2$이므로 첫 등식이 나온다.

노름의 (2)에 의해 $\lVert x \rVert = \lVert y \rVert$인 것은 정확히 $\langle x, x \rangle = \langle y, y \rangle$일 때이고, (K12)의 (v)에 의해 그것은 정확히 $\langle x, x \rangle - \langle y, y \rangle = 0$일 때, 곧 위의 등식에 의해 정확히 $\langle x + y, x - y \rangle = 0$일 때이다.

**(2)** [[power-of-a-real-number|실수의 거듭제곱]]의 (1)과 (K4)에 의해 $\lVert x \rVert^2 = 1 \cdot 1 = 1$이고 $\lVert y \rVert^2 = 1$이다. 노름의 (5)에 의해

$$
\begin{aligned}
\lVert x - y \rVert^2 &= 1 - 2\langle x, y \rangle + 1 \\
&= 2 - 2\langle x, y \rangle
\end{aligned}
$$

이다. 따라서 $2\langle x, y \rangle = 2 - \lVert x - y \rVert^2$이고, 양변에 $2^{-1}$을 곱하면 (K2), (K3), (K12)의 (i)과 $2^{-1} \cdot 2 = 1$에 의해 $\langle x, y \rangle = 1 - 2^{-1}\lVert x - y \rVert^2$이다.

예를 들어 표준내적을 준 $\mathbb{R}^2$에서 $x = e_1$, $y = e_2$이면 $\lVert e_1 - e_2 \rVert^2 = 1 + 1 = 2$이므로 오른쪽은 $1 - 1 = 0$이고, 실제로 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_1, e_2 \rangle = 0$이다.
:::

:::exercise[세 벡터 사이의 거리와 가운데 점]
$V$가 내적공간이고 $x, y, z \in V$이며 $m = 2^{-1}(x + y)$라 하자.

1. 다음 등식을 보여라.
   $$
   \begin{aligned}
   &\lVert z - x \rVert^2 + \lVert z - y \rVert^2 \\
   &\quad = 2\lVert z - m \rVert^2 + 2^{-1}\lVert x - y \rVert^2
   \end{aligned}
   $$
2. 모든 $z \in V$에서 $2^{-1}\lVert x - y \rVert^2 \le \lVert z - x \rVert^2 + \lVert z - y \rVert^2$이고, 등호가 성립하는 것은 정확히 $z = m$일 때임을 보여라.
:::

:::solution
벡터의 계산은 [[vector-space|벡터공간]]의 (V1)–(V8)과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B1)–(B12)에 의하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로 인용한다.

**(1)** $a = z - m$, $b = 2^{-1}(x - y)$로 두자. (K12)의 (i)과 $1 + 1 = 2$, $2 \cdot 2^{-1} = 1$에 의해 $2^{-1} + 2^{-1} = 1$이므로, (V5)와 (V8)에 의해 $x = 1x = 2^{-1}x + 2^{-1}x$이고 마찬가지로 $y = 2^{-1}y + 2^{-1}y$이다. (V7)에 의해 $m = 2^{-1}x + 2^{-1}y$이고 (B11)에 의해 $b = 2^{-1}x - 2^{-1}y$이다. 따라서 (V1), (V2), (B2), (B10)으로 계산하면

$$
\begin{aligned}
m - x &= (2^{-1}x + 2^{-1}y) \\
&\quad - (2^{-1}x + 2^{-1}x) \\
&= 2^{-1}y - 2^{-1}x = -b, \\
m - y &= (2^{-1}x + 2^{-1}y) \\
&\quad - (2^{-1}y + 2^{-1}y) \\
&= 2^{-1}x - 2^{-1}y = b
\end{aligned}
$$

이다. 같은 계산으로 $z - x = (z - m) + (m - x) = a - b$이고 $z - y = (z - m) + (m - y) = a + b$이다.

노름의 (7)(평행사변형 법칙)에 의해 $\lVert a + b \rVert^2 + \lVert a - b \rVert^2 = 2(\lVert a \rVert^2 + \lVert b \rVert^2)$이다. 노름의 (3)과 [[absolute-value|절댓값]]의 (1)에 의해 $\lVert b \rVert = |2^{-1}|\lVert x - y \rVert = 2^{-1}\lVert x - y \rVert$이므로, [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $\lVert b \rVert^2 = 4^{-1}\lVert x - y \rVert^2$이다($2^{-1} \cdot 2^{-1} = 4^{-1}$은 (K12)의 (vi)). $2 \cdot 4^{-1} = 2^{-1}$이므로 (K1), (K3)에 의해

$$
\begin{aligned}
&\lVert z - y \rVert^2 + \lVert z - x \rVert^2 \\
&\quad = 2\lVert z - m \rVert^2 + 2^{-1}\lVert x - y \rVert^2
\end{aligned}
$$

이고, (K1)로 왼쪽의 두 항을 바꾸면 보일 등식이다.

**(2)** 노름의 (1)과 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le \lVert z - m \rVert^2$이고, (4)의 (iv)에 의해 $0 \le 2\lVert z - m \rVert^2$이다. 순서의 성질의 (2)의 (i)에 의해 (1)의 오른쪽은 $0 + 2^{-1}\lVert x - y \rVert^2 = 2^{-1}\lVert x - y \rVert^2$ 이상이다. 이것이 부등식이다.

등호가 성립하는 것은 (1)과 (K12)의 (v)에 의해 정확히 $2\lVert z - m \rVert^2 = 0$일 때이다. $2 \ne 0$이므로 (K10)과 (K9)에 의해 이것은 정확히 $\lVert z - m \rVert \lVert z - m \rVert = 0$일 때이고, 다시 (K10)과 (K9)에 의해 정확히 $\lVert z - m \rVert = 0$일 때이다. 노름의 (1)에 의해 그것은 정확히 $z - m = 0_V$일 때이고, (B12)에 의해 정확히 $z = m$일 때이다.
:::

:::exercise[가중치를 곱한 내적으로 얻는 부등식]
$n$이 자연수이고 $w_1, \dots, w_n$이 모든 항이 양수인 실수의 열, $a_1, \dots, a_n$이 실수의 열이라 하자.

1. 다음 부등식을 보여라. 오른쪽의 둘째 괄호는 $k$번째 항이 $a_k^2 w_k^{-1}$인 길이 $n$인 실수의 열의 합이다.
   $$
   \begin{aligned}
   &(a_1 + \cdots + a_n)^2 \\
   &\quad \le (w_1 + \cdots + w_n) \\
   &\qquad \cdot (a_1^2 w_1^{-1} + \cdots + a_n^2 w_n^{-1})
   \end{aligned}
   $$
   ([[inner-product-examples|내적의 예]]의 (1)의 내적 $\langle \cdot, \cdot \rangle_w$에서 $k$에서의 값이 $a_k w_k^{-1}$인 벡터와 모든 값이 $1$인 벡터를 생각하라.)
2. 등호가 성립하는 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $a_k = c\,w_k$인 실수 $c$가 있을 때임을 보여라.
3. $n = 3$, $w = (1, 2, 3)$일 때 $a = (1, 1, 1)$과 $a = (2, 4, 6)$에서 두 변을 계산해 (1), (2)와 맞는지 확인하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)에 의하고, $c^2$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $cc$이다. 길이가 같은 두 실수의 열은 모든 자리에서 항이 같으면 같은 열이고, 같은 열의 합은 같다([[finite-sum-of-vectors|벡터의 유한 합]]).

**(1)** 모든 $k$에서 $0 < w_k$이므로 [[inner-product-examples|내적의 예]]의 (1)의 (iii)에 의해 $\langle \cdot, \cdot \rangle_w$는 $\mathbb{R}^n$ 위의 내적이다. $0 < w_k$이면 $w_k \ne 0$이어서 $w_k^{-1}$이 있다((K8)의 (iii)). [[real-function-space|(G)]]에 의해 $k$에서의 값이 $x_k = a_k w_k^{-1}$인 $x \in \mathbb{R}^n$과 모든 값이 $1$인 $y \in \mathbb{R}^n$이 있다. (K1), (K2), (K4)와 $w_k w_k^{-1} = 1$로 세 내적의 $k$번째 항을 계산하면

$$
\begin{aligned}
w_k(x_k y_k) &= (w_k w_k^{-1}) a_k = a_k, \\
w_k(x_k x_k) &= (a_k a_k) w_k^{-1} (w_k w_k^{-1}) \\
&= a_k^2 w_k^{-1}, \\
w_k(y_k y_k) &= w_k(1 \cdot 1) = w_k
\end{aligned}
$$

이다. 따라서 $\langle x, y \rangle_w = a_1 + \cdots + a_n$, $\langle x, x \rangle_w = a_1^2 w_1^{-1} + \cdots + a_n^2 w_n^{-1}$, $\langle y, y \rangle_w = w_1 + \cdots + w_n$이다. 내적공간 $(\mathbb{R}^n, \langle \cdot, \cdot \rangle_w)$에 [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]의 (1)을 쓰면 $\langle x, y \rangle_w^2 \le \langle x, x \rangle_w \langle y, y \rangle_w$이고, (K1)로 오른쪽의 곱의 순서를 바꾸면 보일 부등식이다.

**(2)** $y$의 $1$에서의 값은 $1 \ne 0$이므로 $y \ne 0$이다($n \ge 1$이어서 $1 \in \{1, \dots, n\}$이다).

등호가 성립한다고 하자. 이것은 코시–슈바르츠 부등식의 (3)의 (i)이므로, 그 (3)의 마지막 문장에 의해 $c = \langle x, y \rangle_w \langle y, y \rangle_w^{-1}$로 $x = cy$이다. 그러면 모든 $k$에서 $a_k w_k^{-1} = c \cdot 1 = c$이고, 양변에 $w_k$를 곱하면 (K2), (K4)와 $w_k^{-1} w_k = 1$에 의해 $a_k = c\,w_k$이다.

거꾸로 모든 $k$에서 $a_k = c\,w_k$라 하자. 그러면 $x_k = c\,w_k w_k^{-1} = c = c \cdot 1$이므로 $x = cy$이다. 코시–슈바르츠 부등식의 (3)의 "또" 문장에 의해 $x = \alpha y$인 실수 $\alpha$가 있으면 (iii)이 성립하고, 그 (3)에 의해 (i)이 성립한다. 곧 등호가 성립한다.

**(3)** $a = (1, 1, 1)$이면 왼쪽은 $(1 + 1 + 1)^2 = 9$이고 오른쪽은 $(1 + 2 + 3)(1 + 2^{-1} + 3^{-1}) = 6 \cdot \tfrac{11}{6} = 11$이다. $9 < 11$이어서 등호가 아니고, 실제로 $a_k w_k^{-1}$은 $1$, $2^{-1}$, $3^{-1}$로 모두 같지는 않아 (2)와 맞는다. $a = (2, 4, 6)$이면 $a_k = 2w_k$이고, 왼쪽은 $12^2 = 144$, 오른쪽은 $6 \cdot (4 + 16 \cdot 2^{-1} + 36 \cdot 3^{-1}) = 6 \cdot 24 = 144$이어서 등호이다.
:::

:::exercise[노름이 1 이하인 두 벡터의 합의 노름이 2 인 경우]
$V$가 내적공간이고 $x, y \in V$라 하자.

1. $\lVert x \rVert \le 1$, $\lVert y \rVert \le 1$이고 $\lVert x + y \rVert = 2$이면 $x = y$이고 $\lVert x \rVert = 1$임을 보여라.
2. $\lVert x \rVert = \lVert y \rVert = 1$이고 $x \ne y$이면 $\lVert 2^{-1}(x + y) \rVert < 1$임을 보여라.
:::

:::solution
삼각부등식은 [[triangle-inequality-for-norm|노름의 삼각부등식]]의 것이고, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로, 순서에 관한 사실은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다.

**(1)** 삼각부등식의 (1)과 순서의 성질의 (2)의 (iii)에 의해 $2 = \lVert x + y \rVert \le \lVert x \rVert + \lVert y \rVert \le 1 + 1 = 2$이고, 순서의 성질의 (1)의 (v)와 (ii)에 의해 $\lVert x \rVert + \lVert y \rVert = 2$이다. $\lVert x \rVert < 1$이라면 순서의 성질의 (2)의 (iv)에 의해 $\lVert x \rVert + \lVert y \rVert < 1 + 1 = 2$가 되어 순서의 성질의 (1)의 (i)에 어긋난다. 따라서 $\lVert x \rVert \le 1$이면서 $\lVert x \rVert < 1$이 아니므로 [[real-order-axioms|실수의 순서]]의 $\le$의 뜻에 의해 $\lVert x \rVert = 1$이다. 같은 논증으로 $\lVert y \rVert = 1$이다.

그러면 $\lVert x + y \rVert = \lVert x \rVert + \lVert y \rVert$이므로 삼각부등식의 (2)에 의해 $0 \le c$이고 $y = cx$인 실수 $c$가 있거나 $0 \le c$이고 $x = cy$인 실수 $c$가 있다. 앞의 경우 노름의 (3)과 [[absolute-value|절댓값]]의 (1)에 의해 $1 = \lVert y \rVert = |c|\lVert x \rVert = c$이므로 [[vector-space|벡터공간]]의 (V5)에 의해 $y = 1x = x$이다. 뒤의 경우도 같은 계산으로 $x = 1y = y$이다. 어느 경우든 $x = y$이고 $\lVert x \rVert = 1$이다.

**(2)** 삼각부등식의 (1)에 의해 $\lVert x + y \rVert \le 1 + 1 = 2$이다. $\lVert x + y \rVert = 2$라면 (1)에 의해 $x = y$가 되어 가정에 어긋나므로 $\lVert x + y \rVert \ne 2$이고, $\le$의 뜻에 의해 $\lVert x + y \rVert < 2$이다. $0 < 2^{-1}$이므로(순서의 성질의 (6)의 (i)과 (10)) 노름의 (3), 절댓값의 (1), 순서의 성질의 (4)의 (i)에 의해

$$
\begin{aligned}
\lVert 2^{-1}(x + y) \rVert &= 2^{-1}\lVert x + y \rVert \\
&< 2^{-1} \cdot 2 = 1
\end{aligned}
$$

이다. 두 단위벡터를 잇는 선분의 가운데 점은 두 벡터가 같지 않으면 노름이 $1$보다 작다.
:::

:::exercise[대칭이 아닌 함수에서 코시–슈바르츠 부등식이 깨지는 예]
$(x, y) \in \mathbb{R}^2 \times \mathbb{R}^2$에서의 값이 $f(x, y) = x_1 y_1 + x_1 y_2 + x_2 y_2$인 함수 $f : \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$를 생각하자.

1. $f$가 내적의 조건 (ii)와 (iii)을 만족하지만 조건 (i)은 만족하지 않음을 보여라.
2. $x = e_1$, $y = (1, 2)$에서 $f(x, y)^2 > f(x, x) f(y, y)$임을 보여라.
3. $h(x, y) = 2^{-1}\bigl(f(x, y) + f(y, x)\bigr)$로 정한 함수 $h$가 $\mathbb{R}^2$ 위의 내적임을 보이고, (2)의 $x$, $y$에서 $h(x, y)^2 \le h(x, x) h(y, y)$를 확인하라.
:::

:::solution
내적의 조건 (i)–(iii)은 [[inner-product-space|내적과 내적공간]]의 것이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이며, 순서에 관한 사실은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다.

**(1)** (ii) $x, y, z \in \mathbb{R}^2$이고 $\alpha$, $\beta$가 실수이며 $u = \alpha x + \beta y$이면 $u_k = \alpha x_k + \beta y_k$이므로, (K12)의 (i)과 (K2)에 의해 $u_k z_l = \alpha(x_k z_l) + \beta(y_k z_l)$이다. 이것을 $f(u, z) = u_1 z_1 + u_1 z_2 + u_2 z_2$의 세 곱에 넣고 (K1)–(K3)으로 모으면 $f(u, z) = \alpha f(x, z) + \beta f(y, z)$이다.

(iii) (K1), (K3), (K12)의 (i)과 $2 \cdot 2^{-1} = 1$, $2^{-1} \cdot 2^{-1} = 4^{-1}$, $4^{-1} + 3 \cdot 4^{-1} = 1$로 전개하면

$$
\begin{aligned}
&(x_1 + 2^{-1}x_2)(x_1 + 2^{-1}x_2) \\
&\quad + (3 \cdot 4^{-1})(x_2 x_2) \\
&\quad = x_1 x_1 + x_1 x_2 + x_2 x_2 \\
&\quad = f(x, x)
\end{aligned}
$$

이다. $p = (x_1 + 2^{-1}x_2)(x_1 + 2^{-1}x_2)$, $q = (3 \cdot 4^{-1})(x_2 x_2)$로 두자. 순서의 성질의 (10)과 (6)의 (i)에 의해 $0 < 3$이고 $0 < 4^{-1}$이므로 [[real-order-axioms|실수의 순서]]의 (W4)에 의해 $0 < 3 \cdot 4^{-1}$이다. 순서의 성질의 (5)의 (iii)과 (4)의 (iv)에 의해 $0 \le p$이고 $0 \le q$이다. 따라서 (2)의 (iii)에 의해 $0 \le f(x, x)$이다. $f(x, x) = 0$이면 문제 1의 (2)의 풀이와 같은 논증으로, $p + q = 0$, $0 \le p$, $0 \le q$에서 순서의 성질의 (2)의 (i)과 (1)의 (ii)에 의해 $q = 0$이고 $p = 0$이며, $3 \cdot 4^{-1} \ne 0$이므로 (K10)에 의해 $x_2 = 0$, 이어서 $x_1 x_1 = p = 0$에서 $x_1 = 0$이다. 거꾸로 $x = (0, 0)$이면 (K9)에 의해 $f(x, x) = 0$이다.

(i) $f(e_1, e_2) = 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 = 1$이고 $f(e_2, e_1) = 0 \cdot 1 + 0 \cdot 0 + 1 \cdot 0 = 0$이다. $1 \ne 0$이므로 조건 (i)이 성립하지 않는다.

**(2)** $f(e_1, (1, 2)) = 1 \cdot 1 + 1 \cdot 2 + 0 \cdot 2 = 3$, $f(e_1, e_1) = 1 + 0 + 0 = 1$, $f((1, 2), (1, 2)) = 1 + 2 + 4 = 7$이다. $f(x, y)^2 = 9 > 7 = 1 \cdot 7$이다. 곧 [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]의 (1)의 꼴이 $f$에서는 성립하지 않는다. 그 부등식은 내적에 대한 정리이고, $f$는 (1)에 의해 조건 (i)이 깨져 내적이 아니다.

**(3)** (K1), (K3), (K12)의 (i)로 계산하면

$$
\begin{aligned}
h(x, y) &= 2^{-1}\bigl(2x_1 y_1 + (x_1 y_2 + x_2 y_1) \\
&\qquad + 2x_2 y_2\bigr) \\
&= x_1 y_1 + 2^{-1}(x_1 y_2 + x_2 y_1) \\
&\quad + x_2 y_2
\end{aligned}
$$

이다. 이것은 문제 1의 $g_a$에서 $a = 2^{-1}$인 함수이고, $-1 < 2^{-1} < 1$이므로 문제 1의 (2)에 의해 $\mathbb{R}^2$ 위의 내적이다. (2)의 $x$, $y$에서 $h(x, y) = 1 + 2^{-1}(2 + 0) + 0 = 2$, $h(x, x) = 1$, $h(y, y) = 1 + 2^{-1}(2 + 2) + 4 = 7$이고 $2^2 = 4 \le 7 = 1 \cdot 7$이다. 코시–슈바르츠 부등식의 (1)과 맞는다.
:::
