---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절, 연습문제 1.1 f) (p.104)"
added: 2026-11-26
---

:::exercise[삼각행렬이 아닌 3 × 3 행렬의 두 중복도]

$$
A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
$$

이라 하자. $x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓴다.

1. $p_A = (-1)^3 (t - 2)^2 (t - 1)^1$임을 보이고, $A$가 완전히 인수분해됨을 보여라.
2. $A$의 각 고윳값의 대수적 중복도와 기하적 중복도를 구하라.
3. 서로 다른 고윳값들의 기하적 중복도의 합과 대수적 중복도의 합을 비교하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)로 계산한다.

**(1)** $x$를 실수라 하자. [[matrix|행렬]]의 (1), (6)에 의해 $A - xI_3 = \begin{pmatrix} 2 - x & 0 & 1 \\ 1 & 1 - x & 0 \\ 0 & 0 & 2 - x \end{pmatrix}$이고, [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
&p_A(x) \\
&= (2 - x)\bigl((1 - x)(2 - x) - 0 \cdot 0\bigr) \\
&\quad - 1 \cdot \bigl(0 \cdot (2 - x) - 0 \cdot 1\bigr) + 0 \\
&= (2 - x)(2 - x)(1 - x)
\end{aligned}
$$

이다. (K9)와 (K12)에 의해 $2 - x = (-1)(x - 2)$, $1 - x = (-1)(x - 1)$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1), (2)의 (i), (iii)에 의해

$$
p_A(x) = (-1)^3 (x - 2)^2 (x - 1)^1
$$

이다. 오른쪽은 [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 값에 의해 함수 $(-1)^3 (t - 2)^2 (t - 1)^1$의 $x$에서의 값이므로, [[function|함수]]의 같음에 의해 $p_A = (-1)^3 (t - 2)^2 (t - 1)^1$이다. $2 \ne 1$이므로 열 $2, 1$은 서로 다르고 $2$, $1$은 자연수이므로, 이것은 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 정의에서 $r = 2$, $\mu = 2, 1$, $m = 2, 1$인 완전 인수분해이다.

**(2)** 완전히 인수분해되는 특성다항식의 (2)의 (ii), (iii)에 의해 $A$의 고윳값은 정확히 $2$와 $1$이고, 대수적 중복도는 각각 $2$와 $1$이다.

[[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $\lambda$의 고유공간은 $\{x : Ax = \lambda x\}$이고, 행 규칙으로 $Ax = (2x_1 + x_3,\ x_1 + x_2,\ 2x_3)$이다.

*$\lambda = 2$.* $Ax = 2x$인 것은 정확히 $2x_1 + x_3 = 2x_1$, $x_1 + x_2 = 2x_2$, $2x_3 = 2x_3$일 때, 곧 $x_3 = 0$이고 $x_2 = x_1$일 때이다. 그런 $x$는 $x_1(1, 1, 0)$이고 거꾸로 이 꼴은 조건을 만족하므로, [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 고유공간은 $\operatorname{span}((1, 1, 0))$이다. $(1, 1, 0) \ne 0$이므로 [[linear-independence|일차독립]]의 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 그 차원은 $1$이다. 곧 $2$의 기하적 중복도는 $1$이다.

*$\lambda = 1$.* $Ax = x$인 것은 정확히 $2x_1 + x_3 = x_1$, $x_1 + x_2 = x_2$, $2x_3 = x_3$일 때이다. 셋째 식에서 $x_3 = 0$, 둘째 식에서 $x_1 = 0$이고, 그러면 첫째 식도 성립한다. 따라서 고유공간은 $\operatorname{span}(e_2)$이고 기하적 중복도는 $1$이다. 이것은 대수적 중복도가 $1$인 고윳값의 기하적 중복도가 $1$이라는 [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (4)와 맞는다.

**(3)** 열 $2, 1$에서 기하적 중복도의 합은 $1 + 1 = 2$이고 대수적 중복도의 합은 $2 + 1 = 3$이다. $2 < 3$이고, 이것은 기하적 중복도는 대수적 중복도 이하의 (3)의 부등식이 등호 없이 성립하는 경우이다. $2$에서 두 중복도가 $1$과 $2$로 다르기 때문이다.
:::

:::exercise[대각합으로 대수적 중복도 정하기]
$3 \times 3$ 행렬 $A$의 고윳값이 정확히 $1$과 $2$이고, $A$에서 $1$과 $2$의 대수적 중복도의 합이 $3$이며, $\operatorname{tr} A = 5$라 하자. $1$과 $2$의 대수적 중복도와 $\det A$, $p_A$를 구하라.
:::

:::solution
$1$과 $2$의 대수적 중복도를 $m_1$, $m_2$라 하자. [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (1)에 의해 둘 다 $1$ 이상인 정수이다. $1 \ne 2$이므로 길이 $2$인 열 $1, 2$는 서로 다르고, 모든 항이 고윳값이며 대수적 중복도의 합이 $3$이다. [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (3)에 의해 $r = 2$, $\mu = 1, 2$, $m = m_1, m_2$는 $p_A$의 완전 인수분해이다.

같은 항목의 (7)에 의해 $\operatorname{tr} A = m_1 \cdot 1 + m_2 \cdot 2$이다. $m_1 = 3 - m_2$이므로 [[real-number-arithmetic|실수의 계산 법칙]]으로 $5 = (3 - m_2) + 2m_2 = 3 + m_2$이고 $m_2 = 2$, $m_1 = 1$이다. 같은 (7)에 의해 $\det A = 1^1 \cdot 2^2 = 4$이고([[power-of-a-real-number|실수의 거듭제곱]]의 (1)), 완전 인수분해의 정의에 의해

$$
p_A = (-1)^3 (t - 1)^1 (t - 2)^2
$$

이다. 대각합이 $4$였다면 같은 계산으로 $m_2 = 1$, $m_1 = 2$이고 $\det A = 2$이다. 두 중복도가 모두 $1$ 이상이므로 대각합은 $1 \cdot 2 + 2 \cdot 1 = 4$와 $1 \cdot 1 + 2 \cdot 2 = 5$ 둘 가운데 하나뿐이다.
:::

:::exercise[짝수 크기에서 행렬식이 음수인 행렬의 고윳값]
1. $n$이 짝수인 자연수이고 $A$가 $n \times n$ 행렬이며 $\det A < 0$이면, $A$는 양수인 고윳값과 음수인 고윳값을 함께 가짐을 증명하라.
2. $n = 3$이면 (1)의 결론이 성립하지 않을 수 있음을 $-I_3$으로 보여라.
:::

:::solution
**(1)** [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $p_A$는 영함수가 아니고 차수가 $n \ge 1$이며 최고차계수가 $(-1)^n$이다. $n$이 짝수이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 최고차계수는 $1$이다. [[odd-dimension-has-real-eigenvalue|홀수 크기의 행렬은 실고윳값을 갖는다]]의 (2)에 의해 $1 \le R$인 실수 $R$이 있어, $R \le |x|$인 모든 실수 $x$에서 $0 < p_A(x)\,(1 \cdot x^n)$이다.

*$x = R$, $x = -R$에서 $p_A$는 양수이다.* $0 < R$이고 $-R < 0$이므로 [[absolute-value|절댓값]]의 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)의 $-(-R) = R$에 의해 $|R| = |-R| = R$이다. [[even-and-odd|짝수와 홀수]]의 정의에 의해 $n = 2a$인 정수 $a$가 있고, $0 < n = a \cdot 2$이며 $0 < 2$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (6)의 (iv)에 의해 $0 < a$이다. $x = R$ 또는 $x = -R$이면 $x \ne 0$이므로 순서의 성질의 (5)의 (i)에 의해 $0 < xx = x^2$이고, 거듭제곱의 (2)의 (ii)와 (6)의 (i)에 의해 $0 < (x^2)^a = x^n$이다. $0 < p_A(x)\,x^n$이고 $0 < x^n$이므로 순서의 성질의 (6)의 (iii)에 의해 $0 < p_A(x)$이다.

*사잇값 정리를 쓴다.* [[characteristic-polynomial|특성다항식]]의 (2)에 의해 $p_A(0) = \det A < 0$이다. 홀수 크기의 행렬은 실고윳값을 갖는다의 (1)에 의해 $p_A$는 연속함수이다. $0 < 1 \le R$이므로 $-R < 0 < R$이다. [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (1)을 닫힌구간 $[0, R]$와 $y = 0$에 쓰면 $p_A(0) < 0 < p_A(R)$이므로 $0 < c < R$이고 $p_A(c) = 0$인 $c$가 있다. 같은 방법으로 $[-R, 0]$에서 $p_A(0) < 0 < p_A(-R)$이므로 $-R < c' < 0$이고 $p_A(c') = 0$인 $c'$이 있다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 양수 $c$와 음수 $c'$은 $A$의 고윳값이다.

**(2)** [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(-I_3) = (-1)^3 = -1 < 0$이다. $-I_3 = (-1)I_3$은 대각성분이 모두 $-1$인 삼각행렬이므로 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (3)에 의해 고윳값은 정확히 $-1$ 하나이다. 양수인 고윳값이 없으므로 (1)의 결론은 $n = 3$에서 성립하지 않는다. (1)의 증명에서 $n$이 짝수라는 가정은 최고차계수가 $1$이라는 것과 $(-R)^n > 0$이라는 것에 쓰인다.
:::

:::exercise[고윳값이 하나뿐인데 완전히 인수분해되지 않는 3 × 3 행렬]
1. $n$이 자연수이고 $A$가 $n \times n$ 행렬이며 $A$의 고윳값이 정확히 $\lambda$ 하나라 하자. $A$가 완전히 인수분해되면 $\operatorname{tr} A = n\lambda$이고 $\det A = \lambda^n$임을 증명하라.
2. $C = \begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & -1 \\ 2 & 0 & 0 \end{pmatrix}$의 고윳값이 정확히 $-1$ 하나임을 보이고, $C$가 완전히 인수분해되지 않음을 보여라.
:::

:::solution
**(1)** $r$, $\mu$, $m$을 $p_A$의 완전 인수분해라 하자. [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (2)의 (ii)에 의해 모든 $\mu_j$는 $A$의 고윳값이므로 $\mu_j = \lambda$이다. 정의에 의해 $r \ge 1$이고, $r \ge 2$라면 $\mu_1 = \mu_2 = \lambda$가 되어 열 $\mu$가 서로 다르다는 데 어긋나므로 $r = 1$이다. 같은 항목의 (2)의 (i)에 의해 $m_1 = n$이고, (7)에 의해 $\operatorname{tr} A = n\lambda$, $\det A = \lambda^n$이다.

**(2)** 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. $x$를 실수라 하자. [[matrix|행렬]]의 (1), (6)과 [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
&p_C(x) \\
&= (-x)\bigl((-x)(-x) - 0 \cdot (-1)\bigr) \\
&\quad - (-1)\bigl(1 \cdot (-x) - 0 \cdot 0\bigr) \\
&\quad + 2\bigl(1 \cdot (-1) - (-x) \cdot 0\bigr) \\
&= -xxx - x - 2
\end{aligned}
$$

이고, 전개해 비교하면 $-xxx - x - 2 = -(x + 1)(xx - x + 2)$이다.

*$xx - x + 2$는 늘 양수이다.* $4(xx - x + 2) = (2x - 1)(2x - 1) + 7$이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le (2x - 1)(2x - 1)$이며 $0 < 7$이므로 (2)의 (iv)에 의해 $0 < 4(xx - x + 2)$이다. $0 < 4$이므로 (6)의 (iv)에 의해 $0 < xx - x + 2$이다.

따라서 (K10)과 (K9)에 의해 $p_C(x) = 0$인 것은 정확히 $x + 1 = 0$, 곧 $x = -1$일 때이고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $C$의 고윳값은 정확히 $-1$ 하나이다. [[trace|대각합]]의 정의에 의해 $\operatorname{tr} C = 0 + 0 + 0 = 0$이고, $3 \cdot (-1) = -3 \ne 0$이다. $C$가 완전히 인수분해된다면 (1)에 의해 $\operatorname{tr} C = -3$이어야 하므로, $C$는 완전히 인수분해되지 않는다.
:::

:::exercise[닮은 두 행렬의 고유공간]
$A = \operatorname{diag}(1, 2)$, $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 하자.

1. $S$가 가역이고 $S^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$이며 $B = SAS^{-1}$임을 보여라.
2. 고윳값 $2$에 대한 $A$의 고유공간과 $B$의 고유공간이 다름을 보이고, 두 행렬에서 $2$의 기하적 중복도는 같음을 보여라.
:::

:::solution
**(1)** $P = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$이라 하자. [[matrix-product|행렬의 곱]]의 (2)로 성분을 계산하면 $SP = I_2$이고 $PS = I_2$이다. 예컨대 $(SP)_{1,2} = 1 \cdot (-1) + 1 \cdot 1 = 0$이고 $(PS)_{1,2} = 1 \cdot 1 + (-1) \cdot 1 = 0$이다. 따라서 [[invertible-matrix|가역행렬과 역행렬]]의 정의와 (1)에 의해 $S$는 가역이고 $S^{-1} = P$이다. 또 같은 방법으로

$$
\begin{aligned}
SA &= \begin{pmatrix} 1 & 2 \\ 0 & 2 \end{pmatrix}, \\
(SA)P &= \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = B
\end{aligned}
$$

이다($((SA)P)_{1,2} = 1 \cdot (-1) + 2 \cdot 1 = 1$). [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q = S^{-1}$은 가역이고 $Q^{-1} = S$이므로 $B = Q^{-1}AQ$, 곧 $B$와 $A$는 [[change-of-basis-and-similarity|닮았다]].

**(2)** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 행렬 $M$이 $A$이거나 $B$일 때 $2$에 대한 $M$의 고유공간은 $\{x \in \mathbb{R}^2 : Mx = 2x\}$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Ax = (x_1, 2x_2)$이고 $Bx = (x_1 + x_2, 2x_2)$이다. $Ax = 2x$인 것은 정확히 $x_1 = 2x_1$, 곧 $x_1 = 0$일 때이므로 $A$의 고유공간은 $\operatorname{span}(e_2)$이다. $Bx = 2x$인 것은 정확히 $x_1 + x_2 = 2x_1$, 곧 $x_2 = x_1$일 때이므로 $B$의 고유공간은 $\operatorname{span}((1, 1))$이다([[linear-combination-and-span|일차결합과 생성]]의 (N4)). $e_2 = (0, 1)$이 $\alpha(1, 1) = (\alpha, \alpha)$라면 첫째 값에서 $\alpha = 0$, 둘째 값에서 $\alpha = 1$이 되어 [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)의 $0 \ne 1$에 어긋나므로, $e_2$는 $B$의 고유공간에 들지 않는다. 따라서 두 고유공간은 다르다.

두 고유공간은 모두 영벡터가 아닌 벡터 하나의 생성이므로 [[linear-independence|일차독립]]의 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 차원이 $1$이다. 곧 두 행렬에서 $2$의 기하적 중복도는 $1$로 같고, 이것은 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (5)와 맞는다. 닮은 두 행렬에서 같은 것은 고유공간의 차원이고, 고유공간 자체는 다를 수 있다. 두 고유공간은 $S$로 옮겨진다. $B = Q^{-1}AQ$이므로 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)를 그 항목의 두 행렬 자리에 $B$와 $A$를 차례로 넣어 쓰면, $2$에 속하는 $A$의 고유벡터 $e_2$에 $Q^{-1} = S$를 곱한 $Se_2 = (1, 1)$이 $2$에 속하는 $B$의 고유벡터이다.
:::

:::exercise[기하적 중복도가 n − 1 인 고윳값]
$n \ge 2$가 정수이고 $A$가 $n \times n$ 행렬이며, 실수 $\lambda$가 $A$에서 기하적 중복도 $n - 1$을 갖는다고 하자. $A$가 완전히 인수분해됨을 증명하라.
:::

:::solution
$\lambda$의 대수적 중복도를 $m$이라 하자. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (2)에 의해 $n - 1 \le m$이고, [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (2)에 의해 $m \le n$이다. $m \ne n$이면 [[well-ordering-principle|정렬 원리]]의 (Z5)에 의해 $m < n$이고, [[prime-number|소수]]의 (Z1)과 정렬 원리의 (Z7)에 의해 $m \le n - 1$이므로 (L2)에 의해 $m = n - 1$이다. 곧 $m = n$이거나 $m = n - 1$이다. $n \ge 2$이므로 기하적 중복도 $n - 1$은 $1$ 이상이고, 대수적 중복도와 기하적 중복도의 (1)에 의해 $\lambda$는 고윳값이다.

*$m = n$.* 길이 $1$인 열 $\lambda$는 서로 다르고, 모든 항이 고윳값이며 대수적 중복도의 합이 $n$이다. [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (3)에 의해 $A$는 완전히 인수분해된다.

*$m = n - 1$.* [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $p_A$는 영함수가 아니고 차수가 $n$이다. [[multiplicity-of-a-root|근의 중복도]]의 (1), (2)에 의해 $p_A = (t - \lambda)^{n-1} g$, $g(\lambda) \ne 0$인 다항함수 $g$가 있고 $g \ne o$, $\deg g = n - (n - 1) = 1$이다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (4)와 (2)의 (iii)에 의해 $g = b_0 t^0 + b_1 t^1$이고 $b_1 \ne 0$이다. $\mu = -b_0 b_1^{-1}$이라 하면 [[real-number-arithmetic|실수의 계산 법칙]]에 의해 $g(\mu) = b_0 + b_1(-b_0 b_1^{-1}) = b_0 - b_0 = 0$이다. $g(\lambda) \ne 0$이므로 $\mu \ne \lambda$이다. [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 곱의 값에 의해 $p_A(\mu) = (\mu - \lambda)^{n-1} g(\mu) = 0$이므로, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\mu$는 고윳값이고, 대수적 중복도와 기하적 중복도의 (1)에 의해 $\mu$의 대수적 중복도 $m'$은 $1$ 이상이다.

길이 $2$인 열 $\lambda, \mu$는 서로 다르므로 대수적 중복도와 기하적 중복도의 (3)에 의해 $m + m' \le n$이고, $m + m' \ge (n - 1) + 1 = n$이므로 $m + m' = n$이다. 완전히 인수분해되는 특성다항식의 (3)에 의해 $A$는 완전히 인수분해된다.

$n = 2$이면 가정에 의해 $\lambda$는 $A$의 고윳값이므로, 이 경우의 결론은 완전히 인수분해되는 특성다항식의 (6)과 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (2)로도 얻는다. 다만 $A = \lambda I_2$이면 $\lambda$의 기하적 중복도는 $2$이므로 이 문제의 가정을 만족하지 않는다.
:::
