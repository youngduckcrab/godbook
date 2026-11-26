---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절, 연습문제 5.7 (p.24); 4장 1절, 연습문제 1.6 (p.104); 4장 2절, 연습문제 2.7, 2.12 (p.115)"
added: 2026-11-26
---

:::exercise[삼각행렬이 아닌 3 × 3 행렬을 고유공간의 기저로 대각화하기]

$$
A = \begin{pmatrix} 0 & 1 & 0 \\ 2 & -1 & 0 \\ -1 & 1 & 1 \end{pmatrix}
$$

이라 하자. $x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓴다.

1. $p_A = (-1)^3 (t - 1)^2 \bigl(t - (-2)\bigr)^1$임을 보여라.
2. 고윳값 $1$과 $-2$의 고유공간과 기하적 중복도를 구하라.
3. $A$가 대각화 가능임을 판정하고, $A = SDS^{-1}$인 가역행렬 $S$와 대각행렬 $D$를 적어라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)로 계산한다.

**(1)** $x$를 실수라 하자. [[matrix|행렬]]의 (1), (6)에 의해 $A - xI_3 = \begin{pmatrix} -x & 1 & 0 \\ 2 & -1 - x & 0 \\ -1 & 1 & 1 - x \end{pmatrix}$이고, [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
&p_A(x) \\
&= (-x)\bigl((-1 - x)(1 - x) - 1 \cdot 0\bigr) \\
&\quad - 2\bigl(1 \cdot (1 - x) - 1 \cdot 0\bigr) \\
&\quad + (-1)\bigl(1 \cdot 0 - (-1 - x) \cdot 0\bigr) \\
&= (1 - x)\bigl((-x)(-1 - x) - 2\bigr)
\end{aligned}
$$

이다. $(-x)(-1 - x) - 2 = xx + x - 2 = (x - 1)(x + 2)$이고 $1 - x = (-1)(x - 1)$이므로, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)과 (5)에 의해 $p_A(x) = (-1)^3 (x - 1)^2 \bigl(x - (-2)\bigr)^1$이다. [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 값과 [[function|함수]]의 같음에 의해 $p_A = (-1)^3 (t - 1)^2 \bigl(t - (-2)\bigr)^1$이다. $1 \ne -2$이므로 이것은 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 $r = 2$, $\mu = 1, -2$, $m = 2, 1$인 완전 인수분해이고, 그 (2)의 (ii), (iii)에 의해 $A$의 고윳값은 정확히 $1$과 $-2$이며 대수적 중복도는 $2$와 $1$이다.

**(2)** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $\lambda$의 고유공간은 $\{x : Ax = \lambda x\}$이고, 행 규칙으로 $Ax = (x_2,\ 2x_1 - x_2,\ -x_1 + x_2 + x_3)$이다.

*$\lambda = 1$.* $Ax = x$인 것은 정확히 $x_2 = x_1$, $2x_1 - x_2 = x_2$, $-x_1 + x_2 + x_3 = x_3$일 때이고, 셋 모두 $x_2 = x_1$과 같다. 그런 $x$는 $(x_1, x_1, x_3) = x_1 u + x_3 e_3$, $u = (1, 1, 0)$이고 거꾸로 $\alpha u + \beta e_3 = (\alpha, \alpha, \beta)$는 이 조건을 만족하므로, 고유공간은 $\operatorname{span}(u, e_3)$이다. $\alpha u + \beta e_3 = 0$이면 첫째 값과 셋째 값에서 $\alpha = \beta = 0$이므로 $u, e_3$은 [[linear-independence|일차독립]]이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 기하적 중복도는 $2$이다.

*$\lambda = -2$.* $Ax = -2x$인 것은 정확히 $x_2 = -2x_1$, $2x_1 - x_2 = -2x_2$, $-x_1 + x_2 + x_3 = -2x_3$일 때이다. 둘째 식은 $2x_1 + x_2 = 0$, 곧 첫째 식과 같고, 첫째 식을 셋째 식에 넣으면 $-3x_1 = -3x_3$, 곧 $x_3 = x_1$이다($-3 \ne 0$이므로 (K11)). 따라서 고유공간은 $\operatorname{span}(w)$, $w = (1, -2, 1)$이고([[linear-combination-and-span|일차결합과 생성]]의 (N4)), $w \ne 0$이므로 일차독립의 (I4)와 부분공간의 차원의 (4)에 의해 기하적 중복도는 $1$이다.

**(3)** 두 고윳값에서 기하적 중복도가 대수적 중복도와 같으므로 [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]의 (1)에 의해 $A$는 대각화 가능이다.

$\alpha u + \beta e_3 + \gamma w = (\alpha + \gamma,\ \alpha - 2\gamma,\ \beta + \gamma) = 0$이라 하자. 첫째 값과 둘째 값의 차에서 $3\gamma = 0$이므로 $\gamma = 0$이고, 그러면 $\alpha = 0$, $\beta = 0$이다. 곧 $u, e_3, w$는 일차독립이고, [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $\mathbb{R}^3$의 기저이다. 세 벡터는 차례로 $1$, $1$, $-2$에 속하는 고유벡터이므로 [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (4)에 의해

$$
\begin{aligned}
S &= \begin{pmatrix} 1 & 0 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & 1 \end{pmatrix}, \\
D &= \operatorname{diag}(1, 1, -2)
\end{aligned}
$$

에 대하여 $S$는 가역이고 $A = SDS^{-1}$이다. 행 규칙으로 $Au = (1, 1, 0) = u$, $Ae_3 = (0, 0, 1) = e_3$, $Aw = (-2, 4, -2) = -2w$임을 다시 확인할 수 있다.
:::

:::exercise[성분 a 하나가 대각화 가능성을 정하는 위삼각행렬]
실수 $a$, $b$, $c$에 대하여

$$
P = \begin{pmatrix} 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 2 \end{pmatrix}
$$

라 하자. $P$가 대각화 가능인 것은 정확히 $a = 0$일 때임을 증명하라. $b$와 $c$는 아무 실수여도 된다.
:::

:::solution
$P$는 위삼각행렬이고 대각성분이 차례로 $1$, $1$, $2$이므로, [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (5)를 $r = 2$, $\mu = 1, 2$, $m = 2, 1$에 쓰면 $p_P = (-1)^3 (t - 1)^2 (t - 2)^1$이다. $1 \ne 2$이므로 이것은 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 완전 인수분해이고, 그 (2)의 (ii), (iii)에 의해 $P$의 고윳값은 정확히 $1$과 $2$이며 대수적 중복도는 $2$와 $1$이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (4)에 의해 $2$의 기하적 중복도는 $1$이다.

*$1$의 기하적 중복도.* [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Px = (x_1 + ax_2 + bx_3,\ x_2 + cx_3,\ 2x_3)$이고, $Px = x$인 것은 정확히 $ax_2 + bx_3 = 0$, $cx_3 = 0$, $2x_3 = x_3$일 때이다([[real-number-arithmetic|실수의 계산 법칙]]). 셋째 식은 $x_3 = 0$이고, 그러면 둘째 식은 늘 성립하며 첫째 식은 $ax_2 = 0$이다.

- $a = 0$이면 조건은 $x_3 = 0$뿐이고, 고유공간은 $x_1 e_1 + x_2 e_2$ 꼴 전체 $\operatorname{span}(e_1, e_2)$이다. [[standard-basis|표준기저]]에서 $e_3$을 지운 열 $e_1, e_2$는 [[linear-independence|일차독립]]의 (I3)에 의해 일차독립이므로 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 기하적 중복도는 $2$이다.
- $a \ne 0$이면 (K10)에 의해 $x_2 = 0$이므로 조건은 $x_2 = x_3 = 0$이고, 고유공간은 $\operatorname{span}(e_1)$이며 기하적 중복도는 $1$이다(일차독립의 (I4)).

[[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]의 (1)에 의해 $P$가 대각화 가능인 것은 정확히 $1$과 $2$에서 기하적 중복도가 대수적 중복도와 같을 때이다. $2$에서는 늘 같고, $1$에서는 정확히 $a = 0$일 때 같다($a \ne 0$이면 $1 < 2$). 따라서 $P$가 대각화 가능인 것은 정확히 $a = 0$일 때이다. $b$, $c$는 위 조건 어디에서도 결론을 바꾸지 않는다.
:::

:::exercise[대각선에 같은 수를 더한 행렬의 대각화]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이며 $c$가 실수라 하자. $A$가 대각화 가능인 것은 정확히 $A + cI_n$이 대각화 가능일 때임을 증명하라.
:::

:::solution
*$A$가 대각화 가능이면 $A + cI_n$도 그렇다.* [[diagonalizable|대각화 가능]]의 (5)에 의해 $A = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 대각행렬 $D$가 있다. [[matrix-product-properties|행렬 곱의 성질]]의 (2), (3), (4)와 [[invertible-matrix|가역행렬과 역행렬]]의 (1)의 $SS^{-1} = I_n$에 의해

$$
\begin{aligned}
&S(D + cI_n)S^{-1} \\
&= SDS^{-1} + c\bigl(S I_n S^{-1}\bigr) \\
&= A + c(SS^{-1}) = A + cI_n
\end{aligned}
$$

이다. [[matrix|행렬]]의 (1), (6)에 의해 $j \ne k$이면 $(D + cI_n)_{j,k} = d_{j,k} + c \cdot 0 = 0 + 0 = 0$이므로 $D + cI_n$은 대각행렬이다. 대각화 가능의 (5)에 의해 $A + cI_n$은 대각화 가능이다.

*거꾸로.* $A + cI_n$이 대각화 가능이면, 방금 보인 것을 $A + cI_n$과 실수 $-c$에 쓰면 $(A + cI_n) + (-c)I_n$이 대각화 가능이다. 벡터공간 $M_{n \times n}$에서 [[vector-space|벡터공간]]의 (V2), (V8)과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B3)에 의해 $(A + cI_n) + (-c)I_n = A + (c + (-c))I_n = A + 0I_n = A$이다. 따라서 $A$는 대각화 가능이다.

$c = 0$이면 두 조건은 같은 행렬에 대한 것이다. 증명은 $c$의 값을 따로 나누지 않는다.
:::

:::exercise[자기 자신과 곱하면 영행렬이 되는 영행렬이 아닌 행렬]
$n$이 자연수이고 $A$가 $AA = O$인 $n \times n$ 행렬이며 $A \ne O$라 하자($O$는 영행렬). $A$가 대각화 가능이 아님을 증명하라.
:::

:::solution
*$A$의 고윳값은 $0$뿐이다.* $\lambda$가 $A$의 고윳값이고 $v$가 $\lambda$에 속하는 고유벡터라 하자. [[matrix-product|행렬의 곱]]의 (1)과 가정에 의해 $A(Av) = (AA)v = Ov$이고, [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B3)에 의해 $O = 0A$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)와 (B3)에 의해 $Ov = 0(Av) = 0$이다. 한편 행렬과 벡터의 곱의 (2)와 [[vector-space|벡터공간]]의 (V6)에 의해 $A(Av) = A(\lambda v) = \lambda(Av) = \lambda(\lambda v) = (\lambda\lambda)v$이다. 따라서 $(\lambda\lambda)v = 0$이고 $v \ne 0$이므로 (B6)에 의해 $\lambda\lambda = 0$이며, [[real-number-arithmetic|실수의 계산 법칙]]의 (K10)에 의해 $\lambda = 0$이다.

*귀류법.* $A$가 대각화 가능이라 하자. [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]의 (2)와 (6)에 의해 고윳값이 하나도 없는 행렬은 대각화 가능이 아니므로, $A$에는 고윳값이 있고 그것은 $0$이다. 곧 $A$의 고윳값은 정확히 $0$ 하나이다. [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]의 (5)를 $\lambda = 0$에 쓰면 $A = 0I_n$이고, (B3)에 의해 $0I_n = O$이다. 이것은 $A \ne O$에 어긋난다. 따라서 $A$는 대각화 가능이 아니다.

예컨대 $n = 2$이고 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 행렬의 곱의 (2)로 $AA = O$이고 $A \ne O$이므로 $A$는 대각화 가능이 아니다. $A = O$이면 가정 $A \ne O$가 빠진 경우이고, $O = 0I_n$은 대각행렬이라 대각화 가능이다.
:::

:::exercise[고윳값이 1 과 −1 뿐인 대각화 가능 행렬의 제곱]
$n$이 자연수라 하자.

1. $n \times n$ 행렬 $A$가 대각화 가능이고 $A$의 모든 고윳값이 $1$이거나 $-1$이면 $AA = I_n$임을 증명하라.
2. $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$은 모든 고윳값이 $1$이지만 $NN \ne I_2$임을 보이고, 이것이 (1)과 어긋나지 않는 까닭을 설명하라.
:::

:::solution
**(1)** [[diagonalizable|대각화 가능]]의 (5)와 (1)에 의해 $A = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 실수의 열 $\lambda_1, \dots, \lambda_n$으로 된 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이 있다.

*$D$의 대각성분은 $1$이거나 $-1$이다.* [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q = S^{-1}$은 가역이고 $Q^{-1} = S$이므로 $A = Q^{-1}DQ$이다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)에 의해 $A$와 $D$의 고윳값은 같고, 대각화 가능의 (4)에 의해 모든 $\lambda_k$는 $D$의 고윳값이다. 따라서 모든 $\lambda_k$는 $A$의 고윳값이고, 가정에 의해 $1$이거나 $-1$이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)와 (K12)의 (iii)에 의해 어느 쪽이든 $\lambda_k \lambda_k = 1$이다.

*$AA = I_n$이다.* 대각화 가능의 (3)에 의해 $DD = \operatorname{diag}(\lambda_1\lambda_1, \dots, \lambda_n\lambda_n) = \operatorname{diag}(1, \dots, 1)$이고, [[matrix|행렬]]의 (6)과 대각화 가능의 진술의 $\operatorname{diag}$의 정의에 의해 이것은 $I_n$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)와 [[invertible-matrix|가역행렬과 역행렬]]의 (1)의 $S^{-1}S = I_n$, $SS^{-1} = I_n$에 의해

$$
\begin{aligned}
AA &= SD(S^{-1}S)DS^{-1} \\
&= S(DD)S^{-1} = SI_nS^{-1} \\
&= SS^{-1} = I_n
\end{aligned}
$$

이다.

**(2)** [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 위삼각행렬 $N$의 고윳값은 정확히 대각성분 $1$이다. [[matrix-product|행렬의 곱]]의 (2)로 $(NN)_{1,2} = 1 \cdot 1 + 1 \cdot 1 = 2$이고 $I_2$의 $(1, 2)$ 성분은 $0$이므로, 행렬의 (2)에 의해 $NN \ne I_2$이다. (1)의 대우에 의해 $N$은 대각화 가능이 아니어야 하고, 실제로 [[diagonalization-examples|대각화의 예와 반례]]의 (2)에 의해 $N$은 대각화 가능이 아니다. 따라서 (1)과 어긋나지 않는다. (1)의 가정 가운데 대각화 가능을 빼면 결론이 성립하지 않을 수 있다.
:::

:::exercise[대각화 가능한 두 행렬의 합]
$A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$이라 하자. $A$와 $B$는 대각화 가능이지만 $A + B$는 대각화 가능이 아님을 보여라.
:::

:::solution
*$A$는 대각화 가능이다.* $A$는 위삼각행렬이고 대각성분이 $1$, $0$이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 $1$과 $0$은 $A$의 고윳값이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)에 의해 $1 \ne 0$이므로 길이 $2$인 열 $1, 0$은 서로 다르다. [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]의 (3)에 의해 $A$는 대각화 가능이다.

*$B$는 대각화 가능이다.* $B = \operatorname{diag}(0, 1)$은 대각행렬이다([[diagonalizable|대각화 가능]]의 (1)). [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (4)에 의해 닮음은 동치관계이므로 $B$는 자기 자신과 닮았고, 대각화 가능의 정의에 의해 대각화 가능이다.

*$A + B$는 대각화 가능이 아니다.* [[matrix|행렬]]의 (1)에 의해 $A + B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이고, 이것은 [[diagonalization-examples|대각화의 예와 반례]]의 (2)의 $N$이다. 그 (2)에 의해 $A + B$는 대각화 가능이 아니다.

곧 대각화 가능한 $2 \times 2$ 행렬 전체의 집합은 덧셈에 닫혀 있지 않다. 또 $A = SD_1S^{-1}$, $B = SD_2S^{-1}$인 하나의 가역행렬 $S$와 대각행렬 $D_1$, $D_2$는 없다. 있다면 [[matrix-product-properties|행렬 곱의 성질]]의 (2)에 의해 $A + B = S(D_1 + D_2)S^{-1}$이고 $D_1 + D_2$는 대각행렬이므로 $A + B$가 대각화 가능일 것이기 때문이다.
:::
