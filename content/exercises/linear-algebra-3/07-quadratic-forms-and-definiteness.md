---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "7장 1절, 연습문제 1.3 (p.199); 7장 2절, 연습문제 2.1 (p.206); 7장 4절, 연습문제 4.1, 4.2 (p.214); 6장 2절, 연습문제 2.7 a) (p.170)"
added: 2026-11-26
---

:::exercise[세 변수 이차형식의 대칭행렬과 음의 정부호 판정]
$\mathbb{R}^3$에 표준내적을 주고, 모든 $x \in \mathbb{R}^3$에서

$$
\begin{aligned}
q(x) &= -2x_1^2 + 2x_1 x_2 - 3x_2^2 \\
&\quad + 4x_2 x_3 - 5x_3^2
\end{aligned}
$$

인 함수 $q : \mathbb{R}^3 \to \mathbb{R}$를 보자.

1. $q = q_A$인 $3 \times 3$ 대칭행렬 $A$를 구하라. 그런 대칭행렬은 하나뿐임을 밝혀라.
2. 실베스터 판정법으로 $A$가 음의 정부호임을 보여라. 곧 $x \ne 0$이면 $q(x) < 0$이다.
:::

:::solution
이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, 제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $x_k^2 = x_k x_k$이다.

**(1)**

$$
A = \begin{pmatrix} -2 & 1 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -5 \end{pmatrix}
$$

로 두자. $A$는 [[transpose|전치행렬]]의 정의로 $A^T = A$이어서 대칭행렬이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Ax = (-2x_1 + x_2,\ x_1 - 3x_2 + 2x_3,\ 2x_2 - 5x_3)$이므로, 쌍선형 형식과 이차형식의 (1)에서 $y = x$로 둔 식에 의해

$$
\begin{aligned}
q_A(x) &= (-2x_1 + x_2)x_1 \\
&\quad + (x_1 - 3x_2 + 2x_3)x_2 \\
&\quad + (2x_2 - 5x_3)x_3 \\
&= -2x_1^2 + 2x_1 x_2 - 3x_2^2 \\
&\quad + 4x_2 x_3 - 5x_3^2
\end{aligned}
$$

이다. 곧 모든 $x$에서 $q_A(x) = q(x)$이고, [[function|함수]]의 같음에 의해 $q = q_A$이다. 쌍선형 형식과 이차형식의 (4)의 (ii)에 의해 $q = q_B$인 대칭행렬 $B$는 $A$뿐이다.

**(2)** [[sylvester-criterion|실베스터 판정법]]의 앞 주 소행렬로 $A^{[1]} = \begin{pmatrix} -2 \end{pmatrix}$, $A^{[2]} = \begin{pmatrix} -2 & 1 \\ 1 & -3 \end{pmatrix}$, $A^{[3]} = A$이다. [[determinant|행렬식]]의 (2), (4)에 의해

$$
\begin{aligned}
\det A^{[1]} &= -2, \\
\det A^{[2]} &= (-2)(-3) - 1 \cdot 1 = 5, \\
\det A &= (-2)\bigl((-3)(-5) - 2 \cdot 2\bigr) \\
&\quad - 1\bigl(1 \cdot (-5) - 2 \cdot 0\bigr) + 0 \\
&= -22 + 5 = -17
\end{aligned}
$$

이다. [[power-of-a-real-number|실수의 거듭제곱]]으로 $(-1)^1 = -1$, $(-1)^2 = 1$, $(-1)^3 = -1$이므로 $(-1)^k \det A^{[k]}$는 차례로 $2$, $5$, $17$이고 모두 양수이다. 실베스터 판정법의 (3)에 의해 $A$는 음의 정부호이다.

같은 판정법의 (2)로는 결론이 나오지 않는다는 것도 볼 수 있다. $\det A^{[1]} = -2 < 0$이므로 $A$는 양의 정부호가 아니다. [[positive-definite-matrix|양의 정부호 행렬]]의 (2)의 (ii)에 의해 $A$가 음의 정부호인 것은 $-A$가 양의 정부호인 것과 같고, $-A$의 앞 주 소행렬의 행렬식 $2$, $5$, $17$로 같은 결론을 다시 얻는다([[determinant-of-product|곱의 행렬식]]의 (4)).
:::

:::exercise[섞인 항만 있는 이차형식의 관성지수]
$\mathbb{R}^3$에 표준내적을 주고

$$
J = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
$$

이라 하자.

1. 모든 $x$에서 $q_J(x) = 2x_1 x_2 + 2x_2 x_3$임을 보여라.
2. $J$의 특성다항식을 구하고, 그것으로 $J$의 고윳값을 모두 구하라.
3. 고윳값마다 단위 고유벡터를 하나씩 골라 $J = QDQ^T$인 직교행렬 $Q$와 대각행렬 $D$를 적어라.
4. $n_+(J)$와 $n_-(J)$를 구하고, $J$가 부정부호임을 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, $\sqrt{2}$는 [[square-root-exists|제곱근의 존재]]의 (1)의 것이다.

**(1)** [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Jx = (x_2,\ x_1 + x_3,\ x_2)$이므로 [[quadratic-form|쌍선형 형식과 이차형식]]의 (1)에서 $y = x$로 두면 $q_J(x) = x_2 x_1 + (x_1 + x_3)x_2 + x_2 x_3 = 2x_1 x_2 + 2x_2 x_3$이다.

**(2)** $x$가 실수이면 $J - xI_3 = \begin{pmatrix} -x & 1 & 0 \\ 1 & -x & 1 \\ 0 & 1 & -x \end{pmatrix}$이고([[matrix|행렬]]의 (1), (6)), [[characteristic-polynomial|특성다항식]]의 정의와 [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
p_J(x) &= (-x)\bigl((-x)(-x) - 1 \cdot 1\bigr) \\
&\quad - 1\bigl(1 \cdot (-x) - 1 \cdot 0\bigr) \\
&\quad + 0 \\
&= -x(xx - 1) + x \\
&= -x(xx - 2)
\end{aligned}
$$

이다. $\sqrt{2}\sqrt{2} = 2$이므로 $xx - 2 = (x - \sqrt{2})(x + \sqrt{2})$이고, $p_J(x) = -x(x - \sqrt{2})(x + \sqrt{2})$이다. (K10)에 의해 $p_J(x) = 0$인 것은 정확히 $x$가 $0$, $\sqrt{2}$, $-\sqrt{2}$ 가운데 하나일 때이다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $J$의 고윳값은 정확히 $0$, $\sqrt{2}$, $-\sqrt{2}$이다.

**(3)** 행 규칙으로 $J(1, 0, -1) = (0, 0, 0)$, $J(1, \sqrt{2}, 1) = (\sqrt{2}, 2, \sqrt{2}) = \sqrt{2}(1, \sqrt{2}, 1)$, $J(1, -\sqrt{2}, 1) = (-\sqrt{2}, 2, -\sqrt{2}) = -\sqrt{2}(1, -\sqrt{2}, 1)$이다. [[standard-inner-product|ℝⁿ 의 표준내적]]으로 세 벡터의 자기 자신과의 내적은 $2$, $4$, $4$이고 서로의 내적은 $1 - 1 = 0$, $1 - 1 = 0$, $1 - 2 + 1 = 0$이다. 따라서

$$
\begin{aligned}
\mathbf{q}_1 &= (\sqrt{2})^{-1}(1, 0, -1), \\
\mathbf{q}_2 &= 2^{-1}(1, \sqrt{2}, 1), \\
\mathbf{q}_3 &= 2^{-1}(1, -\sqrt{2}, 1)
\end{aligned}
$$

은 길이 $3$인 정규직교 열이고, $\dim \mathbb{R}^3 = 3$이므로 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 $\mathbb{R}^3$의 정규직교 기저이다. 행렬과 벡터의 곱의 (2)에 의해 $J\mathbf{q}_1 = 0\,\mathbf{q}_1$, $J\mathbf{q}_2 = \sqrt{2}\,\mathbf{q}_2$, $J\mathbf{q}_3 = -\sqrt{2}\,\mathbf{q}_3$이다. [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 (4)의 (ii)에 의해 $k$번째 열이 $\mathbf{q}_k$인 $Q$는 직교행렬이고 $D = \operatorname{diag}(0, \sqrt{2}, -\sqrt{2})$로 $J = QDQ^T$이다.

**(4)** [[sylvester-law-of-inertia|실베스터 관성 법칙]]의 (4)를 (3)의 $Q$, $D$에 쓰면 $K_+(D) = \{2\}$, $K_-(D) = \{3\}$이므로 $n_+(J) = 1$, $n_-(J) = 1$이다. 제곱근의 존재의 (1)에 의해 $0 < \sqrt{2}$이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (ii)에 의해 $-\sqrt{2} < 0$이며, 같은 항목의 (1)의 (i)에 의해 $0 < 0$은 성립하지 않기 때문이다. 관성 법칙의 (5)의 (iii)에 의해 $J$는 부정부호이다. 직접 보아도 (1)에 의해 $q_J((1, 1, 0)) = 2 > 0$이고 $q_J((1, -1, 0)) = -2 < 0$이다.
:::

:::exercise[양의 정부호 행렬에 더하기와 양옆에서 곱하기]
$n$이 자연수이고 $A$가 양의 정부호인 $n \times n$ 대칭행렬이라 하자.

1. $B$가 양의 준정부호인 $n \times n$ 대칭행렬이면 $A + B$가 양의 정부호임을 증명하라.
2. $m$이 자연수이고 $S$가 열들이 일차독립인 $n \times m$ 행렬이면 $S^T A S$가 양의 정부호임을 증명하라. 특히 $S$가 가역인 $n \times n$ 행렬이면 그렇다.
3. (2)에서 열들이 일차독립이라는 가정을 빼면 결론이 성립하지 않을 수 있음을 예로 보여라.
:::

:::solution
이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것이고, 다섯 낱말은 [[positive-definite-matrix|양의 정부호 행렬]]의 것이다. 순서는 [[order-properties-of-reals|실수의 순서의 성질]]로 다룬다.

**(1)** [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)에 의해 $A + B$는 대칭이다. $x \ne 0$이면 가정에 의해 $0 < q_A(x)$이고 $0 \le q_B(x)$이며, 쌍선형 형식과 이차형식의 (3)에 의해 $q_{A+B}(x) = q_A(x) + q_B(x)$이다. 실수의 순서의 성질의 (2)의 (iv)에 의해 $0 = 0 + 0 < q_A(x) + q_B(x)$이므로 $A + B$는 양의 정부호이다.

**(2)** 쌍선형 형식과 이차형식의 (5)에 의해 $S^T A S$는 $m \times m$ 대칭행렬이고 모든 $y \in \mathbb{R}^m$에서 $q_{S^T A S}(y) = q_A(Sy)$이다. $S$의 열을 $\mathbf{s}_1, \dots, \mathbf{s}_m$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Sy = y_1 \mathbf{s}_1 + \cdots + y_m \mathbf{s}_m$이다. $y \ne 0$이면 어떤 $y_k$가 $0$이 아니므로, 열들이 [[linear-independence|일차독립]]이라는 것에 의해 $Sy \ne 0$이고, $A$가 양의 정부호이므로 $0 < q_A(Sy) = q_{S^T A S}(y)$이다. 따라서 $S^T A S$는 양의 정부호이다. $S$가 가역인 $n \times n$ 행렬이면 [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 그 열들은 $\mathbb{R}^n$의 기저이고, 따라서 일차독립이다.

**(3)** $n = 2$, $m = 1$이고 $A = I_2$, $S = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$이라 하자. 양의 정부호 행렬의 (10)의 (ii)에 의해 $I_2$는 양의 정부호이다. [[matrix-product|행렬의 곱]]의 (2)로 $S^T A S = \begin{pmatrix} 0 \end{pmatrix}$이고, 양의 정부호 행렬의 (10)의 (i)에 의해 이것은 양의 정부호가 아니다. $S$의 열은 영벡터 하나여서 일차종속이다([[linear-independence|일차독립과 일차종속]]의 (I1)). 영행렬이 아닌 예로는 $S = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$이 있다. 두 열이 같아 (I2)에 의해 일차종속이고, $Sy = (y_1 + y_2, y_1 + y_2)$이므로 $y = (1, -1)$에서 $q_{S^T I_2 S}(y) = q_{I_2}(Sy) = 0$이다.
:::

:::exercise[양의 정부호 행렬의 비대각 성분의 크기]
$n \ge 2$가 정수이고 $A$가 $n \times n$ 대칭행렬이며, $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$라 하자.

1. $A$가 양의 정부호이면 $a_{j,k} a_{j,k} < a_{j,j} a_{k,k}$임을 증명하라.
2. $A$가 양의 준정부호이면 $a_{j,k} a_{j,k} \le a_{j,j} a_{k,k}$임을 증명하고, 등호가 될 수 있음을 예로 보여라.
:::

:::solution
문제 3의 (2)를 쓴다. $e_j$, $e_k$는 [[standard-basis|표준기저]]의 항이고, 다섯 낱말은 [[positive-definite-matrix|양의 정부호 행렬]]의 것이다.

*두 열로 된 행렬.* 첫째 열이 $e_j$, 둘째 열이 $e_k$인 $n \times 2$ 행렬을 $S$라 하자([[matrix|행렬]]의 (4)). $y_1 e_j + y_2 e_k = 0$이면 $j$에서의 값을 보면 ($j \ne k$이므로 $e_k$의 $j$에서의 값은 $0$) $y_1 = 0$이고, $k$에서의 값을 보면 $y_2 = 0$이다. 곧 $S$의 열들은 [[linear-independence|일차독립]]이다.

*$S^T A S$의 성분.* [[matrix-product|행렬의 곱]]의 정의에 의해 $AS$의 열은 $Ae_j$, $Ae_k$이고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $S^T(AS)$의 $(p, r)$ 성분은 $S$의 $p$번째 열과 $AS$의 $r$번째 열의 내적이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Ae_k$는 $A$의 $k$번째 열이고, 표준내적의 (2)에 의해 $\langle e_j, Ae_k \rangle$는 그 $j$에서의 값 $a_{j,k}$이다. 따라서 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 $A$가 대칭이라는 것($a_{k,j} = a_{j,k}$)에 의해

$$
S^T A S = \begin{pmatrix} a_{j,j} & a_{j,k} \\ a_{j,k} & a_{k,k} \end{pmatrix}
$$

이다.

**(1)** 문제 3의 (2)에 의해 $S^T A S$는 양의 정부호인 $2 \times 2$ 대칭행렬이다. [[sylvester-criterion|실베스터 판정법]]의 (4)를 $a = a_{j,j}$, $b = a_{j,k}$, $c = a_{k,k}$에 쓰면 $0 < a_{j,j} a_{k,k} - a_{j,k} a_{j,k}$이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (i)에 의해 $a_{j,k} a_{j,k} < a_{j,j} a_{k,k}$이다.

**(2)** [[quadratic-form|쌍선형 형식과 이차형식]]의 (5)에 의해 $S^T A S$는 대칭이고 모든 $y$에서 $q_{S^T A S}(y) = q_A(Sy) \ge 0$이므로 양의 준정부호이다. 양의 정부호 행렬의 (6)의 (i)에 의해 $0 \le \det(S^T A S)$이고, [[determinant|행렬식]]의 (4)에 의해 $\det(S^T A S) = a_{j,j} a_{k,k} - a_{j,k} a_{j,k}$이므로 $a_{j,k} a_{j,k} \le a_{j,j} a_{k,k}$이다.

등호의 예: $B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$은 대칭이고 쌍선형 형식과 이차형식의 (6)에 의해 $q_B(x) = x_1^2 + 2x_1 x_2 + x_2^2 = (x_1 + x_2)^2 \ge 0$이어서 양의 준정부호이며, $b_{1,2} b_{1,2} = 1 = b_{1,1} b_{2,2}$이다. (1)에 의해 이 $B$는 양의 정부호가 아니다.
:::

:::exercise[매개변수가 있는 3 × 3 행렬을 두 길로 판정하기]
$t$가 실수이고 $J$가 문제 2의 행렬이라 하자.

$$
A_t = I_3 + tJ = \begin{pmatrix} 1 & t & 0 \\ t & 1 & t \\ 0 & t & 1 \end{pmatrix}
$$

1. 실베스터 판정법으로 $A_t$가 양의 정부호인 것이 정확히 $2t^2 < 1$일 때임을 보여라.
2. 문제 2의 $Q$로 $A_t$를 직교 대각화하고, 대각성분의 부호로 (1)의 결론을 다시 얻어라.
3. 모든 실수 $t$에 대하여 $n_+(A_t)$와 $n_-(A_t)$를 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로, 순서는 [[order-properties-of-reals|실수의 순서의 성질]]로 한다. $t^2 = tt$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1)). $A_t$는 [[transpose|전치행렬]]의 정의로 대칭이다.

**(1)** [[sylvester-criterion|실베스터 판정법]]의 앞 주 소행렬에 대하여 [[determinant|행렬식]]의 (2), (4)로

$$
\begin{aligned}
\det A_t^{[1]} &= 1, \\
\det A_t^{[2]} &= 1 - t^2, \\
\det A_t &= 1(1 - t^2) \\
&\quad - t(t \cdot 1 - t \cdot 0) + 0 \\
&= 1 - 2t^2
\end{aligned}
$$

이다. 실베스터 판정법의 (2)에 의해 $A_t$가 양의 정부호인 것은 정확히 $0 < 1 - t^2$이고 $0 < 1 - 2t^2$일 때이다. 실수의 순서의 성질의 (5)의 (iii)에 의해 $0 \le t^2$이므로 $t^2 \le t^2 + t^2 = 2t^2$이고, $2t^2 < 1$이면 $t^2 < 1$이다. 따라서 두 조건이 함께 성립하는 것은 정확히 $2t^2 < 1$일 때이다(실수의 순서의 성질의 (3)의 (i), (1)의 (v)).

**(2)** 문제 2의 (3)에 의해 $J = QDQ^T$, $D = \operatorname{diag}(0, \sqrt{2}, -\sqrt{2})$이고 $Q$는 직교행렬이다. [[orthogonal-matrix|직교행렬]]의 (2)의 (나)에 의해 $QQ^T = I_3$이므로, [[matrix-product-properties|행렬 곱의 성질]]의 (2)–(4)에 의해

$$
\begin{aligned}
A_t &= QI_3Q^T + t\,QDQ^T \\
&= Q(I_3 + tD)Q^T, \\
I_3 + tD &= \operatorname{diag}\bigl(1,\ c_+,\ c_-\bigr), \\
c_\pm &= 1 \pm t\sqrt{2}
\end{aligned}
$$

이다(대각성분은 [[matrix|행렬]]의 (1), (6)과 [[diagonalizable|대각화 가능]]의 (1)로 계산한다). $Q$는 가역이므로(직교행렬의 (2)의 (다)) [[positive-definite-matrix|양의 정부호 행렬]]의 (4)의 (i)을 $S = Q$에 쓰면 $A_t$가 양의 정부호인 것은 정확히 $0 < 1$, $0 < 1 + t\sqrt{2}$, $0 < 1 - t\sqrt{2}$일 때이다. 뒤의 두 조건은 $-1 < t\sqrt{2} < 1$, 곧 [[absolute-value|절댓값]]의 (7)에 의해 $|t\sqrt{2}| < 1$이다. 실수의 순서의 성질의 (7)의 (i), (iii)과 절댓값의 (5)에 의해 이것은 $(t\sqrt{2})(t\sqrt{2}) < 1$, 곧 $2t^2 < 1$과 같다. (1)과 같은 결론이다.

**(3)** [[sylvester-law-of-inertia|실베스터 관성 법칙]]의 (4)에 의해 $n_+(A_t)$와 $n_-(A_t)$는 $I_3 + tD$의 양수인 대각성분과 음수인 대각성분의 개수이다. 첫째 대각성분 $1$은 양수이다. (2)의 $c_\pm$에 대하여 $c_+ + c_- = 2$이고 $c_+ c_- = 1 - 2t^2$이다.

- $2t^2 < 1$이면 (2)에 의해 $c_+$, $c_-$가 모두 양수이므로 $n_+(A_t) = 3$, $n_-(A_t) = 0$이다.
- $2t^2 = 1$이면 $c_+ c_- = 0$이므로 (K10)에 의해 둘 가운데 하나가 $0$이고, 그러면 다른 하나는 $2$이다. 따라서 $n_+(A_t) = 2$, $n_-(A_t) = 0$이다. 관성 법칙의 (5)의 (i), (ii)에 의해 $A_t$는 양의 준정부호이지만 양의 정부호가 아니다.
- $2t^2 > 1$이면 $c_+ c_- < 0$이다. 둘 가운데 하나가 $0$이면 (K9)에 의해 곱이 $0$이므로 둘 다 $0$이 아니다. 둘 다 양수이면 [[real-order-axioms|실수의 순서]]의 (W4)에 의해, 둘 다 음수이면 실수의 순서의 성질의 (4)의 (iv)에 의해 곱이 양수가 되므로, (W1)에 의해 하나는 양수이고 다른 하나는 음수이다. 따라서 $n_+(A_t) = 2$, $n_-(A_t) = 1$이고, 관성 법칙의 (5)의 (iii)에 의해 $A_t$는 부정부호이다.

$t = 0$이면 $A_0 = I_3$이고 첫째 경우에 든다.
:::

:::exercise[두 양의 정부호 행렬의 곱의 이차형식이 음수가 되는 예]
$$
\begin{aligned}
A &= \begin{pmatrix} 1 & 0 \\ 0 & 9 \end{pmatrix}, \\
B &= \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}
\end{aligned}
$$

이라 하자.

1. $A$와 $B$가 양의 정부호임을 보여라.
2. $AB$가 대칭이 아니고, $q_{AB}(x) < 0$인 $x \in \mathbb{R}^2$가 있음을 보여라.
3. 대칭행렬 $2^{-1}(AB + (AB)^T)$가 부정부호임을 보여라.
:::

:::solution
다섯 낱말은 [[positive-definite-matrix|양의 정부호 행렬]]의 것이고, 이차형식은 [[quadratic-form|쌍선형 형식과 이차형식]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

**(1)** $A = \operatorname{diag}(1, 9)$이고 $0 < 1$, $0 < 9$이므로 양의 정부호 행렬의 (10)의 (ii)에 의해 $A$는 양의 정부호이다. $B$는 대칭이고 [[determinant|행렬식]]의 (4)에 의해 $\det B = 2 - 1 = 1 > 0$, [[trace|대각합]]으로 $\operatorname{tr} B = 3 > 0$이므로 양의 정부호 행렬의 (10)의 (iii)에 의해 $B$는 양의 정부호이다.

**(2)** [[matrix-product|행렬의 곱]]의 (2)로

$$
AB = \begin{pmatrix} 1 & 1 \\ 9 & 18 \end{pmatrix}
$$

이고 $(1, 2)$ 성분 $1$과 $(2, 1)$ 성분 $9$가 달라 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (7)에 의해 $AB$는 대칭이 아니다. 쌍선형 형식과 이차형식의 (6)의 $n = 2$ 꼴에 의해 $q_{AB}(x) = x_1^2 + 10x_1 x_2 + 18x_2^2$이고, $x = (-5, 1)$이면 $q_{AB}(x) = 25 - 50 + 18 = -7 < 0$이다.

**(3)** $C = 2^{-1}(AB + (AB)^T) = \begin{pmatrix} 1 & 5 \\ 5 & 18 \end{pmatrix}$이고, 쌍선형 형식과 이차형식의 (4)의 (i)에 의해 $C$는 대칭이며 $q_C = q_{AB}$이다. 행렬식의 (4)에 의해 $\det C = 18 - 25 = -7 < 0$이므로 양의 정부호 행렬의 (10)의 (iii)에 의해 $C$는 부정부호이다. 실제로 $q_C((1, 0)) = 1 > 0$이고 $q_C((-5, 1)) = -7 < 0$이다.

문제 3의 (1)에서 본 것처럼 두 양의 정부호 행렬의 합은 양의 정부호이지만, 곱은 이 예처럼 대칭조차 아닐 수 있고 그 이차형식이 음수가 될 수 있다.
:::
