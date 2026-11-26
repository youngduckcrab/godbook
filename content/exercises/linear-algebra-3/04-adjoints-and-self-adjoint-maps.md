---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "8장 1.4.2절, Lagrange interpolation (pp.223–224)"
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 5.3절, The “essential” part of a linear transformation (pp.144–145)"
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 5절, 연습문제 5.3, 5.4 (pp.145–146)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절, 연습문제 5.7 (p.24)"
added: 2026-11-26
---

:::exercise[세 점에서의 값으로 정한 내적과 한 점에서의 값을 나타내는 벡터]
$\mathcal{P}_2$는 [[polynomial-function|다항함수]]의 것이다. $p, q \in \mathcal{P}_2$에 대하여

$$
\begin{aligned}
\langle p, q \rangle &= p(-1)q(-1) + p(0)q(0) \\
&\quad + p(1)q(1)
\end{aligned}
$$

로 정하자.

1. $Sp = (p(-1), p(0), p(1))$로 정한 함수 $S : \mathcal{P}_2 \to \mathbb{R}^3$가 단사인 선형사상임을 보이고, 이것으로 $\langle \cdot, \cdot \rangle$이 $\mathcal{P}_2$ 위의 내적임을 보여라.
2. $f(p) = p(2)$로 정한 함수 $f : \mathcal{P}_2 \to \mathbb{R}$가 선형사상임을 보이고, 이 내적에 관해 $f$를 나타내는 벡터 $u \in \mathcal{P}_2$를 구하라.
:::

:::solution
$\mathcal{P}_2$, $t^k$, 계수의 표기는 [[polynomial-function|다항함수]]의 것이다. 그 (1)에 의해 $\mathcal{P}_2$는 $\mathbb{R}^{\mathbb{R}}$의 부분공간이므로 [[subspace|부분공간]]의 (P1)에 의해 함수의 합과 스칼라배로 벡터공간이고, 그 연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 $(p + q)(x) = p(x) + q(x)$, $(\alpha p)(x) = \alpha p(x)$이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** $p, q \in \mathcal{P}_2$이고 $\alpha$가 실수이면 위의 연산에 의해 $S(p + q) = (p(-1) + q(-1), p(0) + q(0), p(1) + q(1)) = Sp + Sq$이고 $S(\alpha p) = \alpha Sp$이다. 따라서 $S$는 [[linear-map|선형사상]]이다. $Sp = (0, 0, 0)$이면 $-1$, $0$, $1$은 모두 $p$의 근이다. 이 세 수는 서로 다르므로 길이 $3 = 2 + 1$인 서로 다른 근의 열이 있고, [[roots-of-polynomial-function|다항함수의 근의 개수]]의 (2)에 의해 $p = o$이다. 곧 $\operatorname{Ker} S = \{o\}$이고 [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $S$는 단사이다.

[[inner-product-examples|내적의 예]]의 (3)의 (i)을 $U = \mathcal{P}_2$, 표준내적을 준 $V = \mathbb{R}^3$, 이 $S$에 쓰면 $(p, q)$에서의 값이 $\langle Sp, Sq \rangle$인 함수는 $\mathcal{P}_2$ 위의 내적이다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 정의에 의해 $\langle Sp, Sq \rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$이므로 이것은 문제의 $\langle \cdot, \cdot \rangle$이다.

**(2)** [[linear-map-examples|선형사상의 예]]의 (4)에 의해 $g \in \mathbb{R}^{\mathbb{R}}$에서 값이 $g(2)$인 함수 $\mathbb{R}^{\mathbb{R}} \to \mathbb{R}$는 선형사상이고, [[kernel-and-range|핵과 상]]의 (4)에 의해 그것을 부분공간 $\mathcal{P}_2$로 제한한 $f$도 선형사상이다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (1)에 의해 $\mathcal{P}_2$는 유한차원이므로, [[riesz-representation-theorem|리스 표현 정리]]의 (1)에 의해 모든 $p \in \mathcal{P}_2$에서 $p(2) = \langle p, u \rangle$인 $u \in \mathcal{P}_2$가 정확히 하나 있다.

$u$를 구하자. 다항함수의 (3)과 [[power-of-a-real-number|실수의 거듭제곱]]의 정의($x^0 = 1$), (1), (2)의 (iv), (5)에 의해 $t^0$, $t^1$, $t^2$의 $-1$, $0$, $1$, $2$에서의 값은 차례로 $1, 1, 1, 1$과 $-1, 0, 1, 2$와 $1, 0, 1, 4$이다. $p = t^0$, $t^1$, $t^2$를 $p(2) = \langle p, u \rangle$에 넣으면

$$
\begin{aligned}
u(-1) + u(0) + u(1) &= 1, \\
-u(-1) + u(1) &= 2, \\
u(-1) + u(1) &= 4
\end{aligned}
$$

이므로 $u(1) = 3$, $u(-1) = 1$, $u(0) = -3$이다. $u \in \mathcal{P}_2$이므로 $u = c_0 t^0 + c_1 t^1 + c_2 t^2$인 실수 $c_0$, $c_1$, $c_2$가 있고, 다항함수의 (3)에 의해 $c_0 = u(0) = -3$, $c_0 + c_1 + c_2 = 3$, $c_0 - c_1 + c_2 = 1$이다. 따라서 $c_1 + c_2 = 6$, $-c_1 + c_2 = 4$이고 $c_2 = 5$, $c_1 = 1$이다. 곧

$$
u = (-3)t^0 + 1\,t^1 + 5\,t^2
$$

이다. 확인하자. $p = a_0 t^0 + a_1 t^1 + a_2 t^2 \in \mathcal{P}_2$이면 $p(-1) = a_0 - a_1 + a_2$, $p(0) = a_0$, $p(1) = a_0 + a_1 + a_2$, $p(2) = a_0 + 2a_1 + 4a_2$이고

$$
\begin{aligned}
\langle p, u \rangle &= (a_0 - a_1 + a_2) \cdot 1 \\
&\quad + a_0 \cdot (-3) \\
&\quad + (a_0 + a_1 + a_2) \cdot 3 \\
&= a_0 + 2a_1 + 4a_2 = p(2)
\end{aligned}
$$

이다. 리스 표현 정리의 (1)의 유일성에 의해 이 $u$가 $f$를 나타내는 벡터이다.
:::

:::exercise[행렬의 공간에서 ℝ² 로 가는 사상의 수반사상]
$M_{2 \times 2}$에 [[inner-product-examples|내적의 예]]의 (2)의 프로베니우스 내적을 주고 $\mathbb{R}^2$에 표준내적을 주자. $c = (c_1, c_2) \in \mathbb{R}^2$를 정하고, $T(X) = Xc$로 정한 함수 $T : M_{2 \times 2} \to \mathbb{R}^2$를 생각하자.

1. $M_{2 \times 2}$가 유한차원임을 보여라.
2. $T$가 선형사상이고, $y \in \mathbb{R}^2$에서 $T^* y$가 $(j, k)$ 성분이 $y_j c_k$인 $2 \times 2$ 행렬임을 보여라.
3. $T \circ T^* = \langle c, c \rangle\, i_{\mathbb{R}^2}$임을 보이고, $c \ne 0$이면 $T$가 전사임을 보여라.
:::

:::solution
행렬과 그 연산은 [[matrix|행렬]]의 것이고, $Xc$는 [[matrix-vector-product|행렬과 벡터의 곱]]이며, 수반사상은 [[adjoint-map|수반사상]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)에 의한다.

**(1)** $j, k \in \{1, 2\}$마다 $(j, k)$ 성분이 $1$이고 나머지 성분이 $0$인 $2 \times 2$ 행렬을 $J_{j,k}$라 하자(이 풀이에서만 쓰는 이름). 행렬의 (1)과 (2)로 성분마다 비교하면 모든 $X \in M_{2 \times 2}$에서

$$
\begin{aligned}
X &= x_{1,1} J_{1,1} + x_{1,2} J_{1,2} \\
&\quad + x_{2,1} J_{2,1} + x_{2,2} J_{2,2}
\end{aligned}
$$

이다. 곧 길이 $4$인 열 $J_{1,1}, J_{1,2}, J_{2,1}, J_{2,2}$가 $M_{2 \times 2}$를 생성하므로, [[dimension|유한차원과 차원]]의 정의에 의해 $M_{2 \times 2}$는 유한차원이다.

**(2)** 행렬과 벡터의 곱의 (4)에 의해 $(X + X')c = Xc + X'c$이고 $(\alpha X)c = \alpha(Xc)$이므로 $T$는 [[linear-map|선형사상]]이다. 내적의 예의 (2)의 마지막 꼴(행마다 먼저 더한 이중 합)에 의해 $X, B \in M_{2 \times 2}$의 프로베니우스 내적은 $(x_{1,1} b_{1,1} + x_{1,2} b_{1,2}) + (x_{2,1} b_{2,1} + x_{2,2} b_{2,2})$이다.

$y \in \mathbb{R}^2$에서 $(j, k)$ 성분이 $y_j c_k$인 $2 \times 2$ 행렬을 $Ry$라 하자([[real-function-space|(G)]]와 행렬의 (2)에 의해 하나 있다). 그러면

$$
\begin{aligned}
\langle X, Ry \rangle &= (x_{1,1} y_1 c_1 + x_{1,2} y_1 c_2) \\
&\quad + (x_{2,1} y_2 c_1 + x_{2,2} y_2 c_2)
\end{aligned}
$$

이다. 한편 행렬과 벡터의 곱의 (1)에 의해 $Xc = (x_{1,1} c_1 + x_{1,2} c_2,\ x_{2,1} c_1 + x_{2,2} c_2)$이므로

$$
\begin{aligned}
\langle Xc, y \rangle &= (x_{1,1} c_1 + x_{1,2} c_2) y_1 \\
&\quad + (x_{2,1} c_1 + x_{2,2} c_2) y_2
\end{aligned}
$$

이고, (K1)–(K3)과 (K12)의 (i)에 의해 두 값은 같다. 곧 모든 $X$와 $y$에서 $\langle TX, y \rangle = \langle X, Ry \rangle$이다. (1)에 의해 두 공간은 유한차원이므로 수반사상의 정의와 (1)의 유일성에 의해 $T^* = R$이다.

**(3)** $y \in \mathbb{R}^2$이면 행렬과 벡터의 곱의 (1)에 의해

$$
\begin{aligned}
T(T^* y) &= (y_1 c_1 c_1 + y_1 c_2 c_2, \\
&\qquad y_2 c_1 c_1 + y_2 c_2 c_2) \\
&= (c_1 c_1 + c_2 c_2)(y_1, y_2) \\
&= \langle c, c \rangle y
\end{aligned}
$$

이다. 함수의 같음에 의해 $T \circ T^* = \langle c, c \rangle\, i_{\mathbb{R}^2}$이다. $c \ne 0$이면 내적의 조건 (iii)에 의해 $\langle c, c \rangle \ne 0$이므로, 모든 $y \in \mathbb{R}^2$에서 $X = T^*(\langle c, c \rangle^{-1} y)$로 두면 앞의 등식에 의해 $TX = \langle c, c \rangle(\langle c, c \rangle^{-1} y) = y$이다. 따라서 $T$는 전사이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (6)의 $R \circ R^*$이 자기수반이라는 것과도 맞는다($\langle c, c \rangle\, i_{\mathbb{R}^2}$는 그 항목의 (4)에 의해 자기수반이다).
:::

:::exercise[자기수반사상과 두 번 합성한 사상의 핵]
$V$가 유한차원인 내적공간이고 $T : V \to V$가 자기수반사상이라 하자.

1. $\operatorname{Ker}(T \circ T) = \operatorname{Ker} T$임을 보여라.
2. $T \circ T$가 영사상이면 $T$가 영사상임을 보여라.
3. $A = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}$이면 $AA$는 영행렬이지만 $T_A : \mathbb{R}^2 \to \mathbb{R}^2$는 영사상이 아님을 보이고, 이것이 (2)와 어긋나지 않는 까닭을 말하라.
:::

:::solution
자기수반은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것이고, 핵은 [[kernel-and-range|핵과 상]]의 것이다.

**(1)** $Tv = 0_V$이면 [[linear-map|선형사상]]의 (T1)에 의해 $T(Tv) = T0_V = 0_V$이다. 거꾸로 $T(Tv) = 0_V$라 하자. 자기수반사상과 대칭행렬의 (1)에서 $x = v$, $y = Tv$로 두면 $\langle Tv, Tv \rangle = \langle v, T(Tv) \rangle = \langle v, 0_V \rangle = 0$이다(마지막 등식은 [[inner-product-space|내적과 내적공간]]의 (2)). 내적의 조건 (iii)에 의해 $Tv = 0_V$이다. 따라서 두 핵은 같다.

**(2)** $T \circ T$가 영사상이면 $\operatorname{Ker}(T \circ T) = V$이고, (1)에 의해 $\operatorname{Ker} T = V$이다. 곧 모든 $v$에서 $Tv = 0_V$이므로 $T$는 영사상이다.

**(3)** [[matrix-product|행렬의 곱]]의 (2)에 의해 $AA$의 성분은 $1 \cdot 1 + 1 \cdot (-1) = 0$, $1 \cdot 1 + 1 \cdot (-1) = 0$, $(-1) \cdot 1 + (-1)(-1) = 0$, $(-1) \cdot 1 + (-1)(-1) = 0$이므로 $AA$는 영행렬이고, 행렬의 곱의 (1)에 의해 $T_A \circ T_A = T_{AA}$는 영사상이다. 그런데 $A e_1 = (1, -1) \ne 0$이므로 $T_A$는 영사상이 아니다. $A$의 $(1, 2)$ 성분 $1$과 $(2, 1)$ 성분 $-1$이 달라 $A$는 대칭이 아니므로, 자기수반사상과 대칭행렬의 (2)에 의해 $T_A$는 표준내적에 관해 자기수반이 아니다. (2)는 자기수반사상에 대한 것이므로 어긋나지 않는다. 실제로 $\operatorname{Ker} T_A$는 $x_1 + x_2 = 0$인 $x$ 전체이고 $\operatorname{Ker}(T_A \circ T_A) = \mathbb{R}^2$이어서 (1)도 이 $T_A$에서는 성립하지 않는다.
:::

:::exercise[수반사상이 부호만 바뀐 사상]
$V$가 유한차원인 내적공간이라 하자. 선형사상의 합, 차, 스칼라배는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이다.

1. 선형사상 $T : V \to V$가 $T^* = -T$를 만족하면 모든 $x \in V$에서 $\langle Tx, x \rangle = 0$이고, $T$의 고윳값은 (있다면) $0$뿐임을 보여라.
2. 모든 선형사상 $R : V \to V$가 $S^* = S$인 선형사상 $S$와 $K^* = -K$인 선형사상 $K$로 $R = S + K$로 쓰이고, 그런 $S$와 $K$는 하나뿐임을 보여라.
3. $A = \begin{pmatrix} 1 & 3 & 0 \\ 1 & 2 & 4 \\ 2 & 0 & 5 \end{pmatrix}$을 대칭행렬 $S$와 $K^T = -K$인 행렬 $K$의 합으로 쓰고, $x = (1, 1, 1)$에서 $\langle Kx, x \rangle = 0$을 확인하라.
:::

:::solution
수반사상과 그 계산 법칙은 [[adjoint-map|수반사상]]의 것이고, 자기수반은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것이다. [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (2)에 의해 $-T = (-1)T$이고 $(-T)x = -(Tx)$이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** $x \in V$이면 수반사상의 정의와 가정에 의해 $\langle Tx, x \rangle = \langle x, T^* x \rangle = \langle x, -(Tx) \rangle$이다. [[inner-product-space|내적과 내적공간]]의 (2)와 조건 (i)에 의해 이것은 $-\langle x, Tx \rangle = -\langle Tx, x \rangle$이다. 따라서 $\langle Tx, x \rangle + \langle Tx, x \rangle = 0$이고, (K12)의 (i)에 의해 $2\langle Tx, x \rangle = 0$이며 $2 \ne 0$이므로 (K10)에 의해 $\langle Tx, x \rangle = 0$이다.

$\lambda$가 $T$의 고윳값이면 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의에 의해 $Tv = \lambda v$이고 $v \ne 0_V$인 $v$가 있다. 위의 결과와 내적과 내적공간의 (1)에 의해 $0 = \langle \lambda v, v \rangle = \lambda \langle v, v \rangle$이고, 조건 (iii)에 의해 $\langle v, v \rangle \ne 0$이므로 (K10)에 의해 $\lambda = 0$이다.

**(2)** (존재) $S = 2^{-1}(R + R^*)$, $K = 2^{-1}(R - R^*)$로 두자. 수반사상의 (3)의 (i)과 (iii)에 의해 $S^* = 2^{-1}(R^* + R) = S$이고 $K^* = 2^{-1}(R^* - R) = -K$이다(선형사상의 공간이 벡터공간이므로 [[vector-space|벡터공간]]의 (V1)–(V8)과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B9)–(B11)로 계산한다). 같은 계산으로 $S + K = 2^{-1}(R + R^* + R - R^*) = 2^{-1}(2R) = R$이다.

(유일성) $R = S_1 + K_1 = S_2 + K_2$이고 $S_i^* = S_i$, $K_i^* = -K_i$라 하자. $N = S_1 - S_2$로 두면 벡터공간의 계산으로 $N = K_2 - K_1$이다. 수반사상의 (3)의 (i)에 의해 $N^* = S_1^* - S_2^* = N$이고, 또 $N^* = K_2^* - K_1^* = -K_2 + K_1 = -N$이다. 따라서 $N = -N$, 곧 $2N$이 영사상이고, $2 \ne 0$이므로 벡터공간의 기본 성질의 (B6)에 의해 $N$은 영사상이다. 곧 $S_1 = S_2$이고 $K_1 = K_2$이다.

**(3)** [[transpose|전치행렬]]의 정의에 의해 $A^T = \begin{pmatrix} 1 & 1 & 2 \\ 3 & 2 & 0 \\ 0 & 4 & 5 \end{pmatrix}$이다. [[matrix|행렬]]의 (1)의 연산으로

$$
\begin{aligned}
S &= 2^{-1}(A + A^T) \\
&= \begin{pmatrix} 1 & 2 & 1 \\ 2 & 2 & 2 \\ 1 & 2 & 5 \end{pmatrix}, \\
K &= 2^{-1}(A - A^T) \\
&= \begin{pmatrix} 0 & 1 & -1 \\ -1 & 0 & 2 \\ 1 & -2 & 0 \end{pmatrix}
\end{aligned}
$$

이다. 성분마다 보면 $S^T = S$이고 $K^T = -K$이며 $S + K = A$이다(예를 들어 $(1, 2)$ 성분은 $2 + 1 = 3$, $(2, 1)$ 성분은 $2 - 1 = 1$이다). 이 $S$, $K$가 하나뿐이라는 것은 (2)에서 나온다. [[adjoint-map|수반사상]]의 (4)와 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해 $(T_S)^* = T_{S^T} = T_S$, $(T_K)^* = T_{K^T} = T_{(-1)K} = -T_K$, $T_A = T_S + T_K$이고, 대칭행렬 $S'$과 $K'^T = -K'$인 $K'$으로 $A = S' + K'$이면 같은 이유로 $T_A = T_{S'} + T_{K'}$이므로, (2)의 유일성에 의해 $T_S = T_{S'}$, $T_K = T_{K'}$이고 행렬과 벡터의 곱의 (5)에 의해 $S = S'$, $K = K'$이다.

$x = (1, 1, 1)$이면 행렬과 벡터의 곱의 (1)에 의해 $Kx = (0 + 1 - 1,\ -1 + 0 + 2,\ 1 - 2 + 0) = (0, 1, -1)$이고 $\langle Kx, x \rangle = 0 + 1 - 1 = 0$이다. (1)과 맞는다.
:::

:::exercise[자기수반사상의 핵과 상]
$V$가 유한차원인 내적공간이고 $T : V \to V$가 자기수반사상이라 하자.

1. $\operatorname{Ker} T = (\operatorname{Ran} T)^\perp$임을 보이고, 모든 $v \in V$가 $\operatorname{Ker} T$의 원소와 $\operatorname{Ran} T$의 원소의 합으로 단 한 가지로 쓰임을 보여라.
2. $\operatorname{Ran} T$가 $T$-불변이고, $T$를 $\operatorname{Ran} T$로 제한한 사상 $\operatorname{Ran} T \to \operatorname{Ran} T$가 동형사상임을 보여라.
3. 문제 3의 $A$에 대하여 $\operatorname{Ker} T_A = \operatorname{Ran} T_A$임을 보이고, $T_A$에서는 (1)과 (2)의 결론이 성립하지 않음을 보여라.
:::

:::solution
핵과 상은 [[kernel-and-range|핵과 상]]의 것이고, 직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이며, 불변 부분공간과 제한한 사상은 [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 것이다.

**(1)** [[kernel-and-range-of-adjoint|상과 핵의 직교 관계]]의 (1)에 의해 $\operatorname{Ker} T^* = (\operatorname{Ran} T)^\perp$이고, $T$가 자기수반이므로 $T^* = T$이다. 따라서 $\operatorname{Ker} T = (\operatorname{Ran} T)^\perp$이다. [[rank-and-nullity|계수와 퇴화차수]]의 (1)에 의해 $\operatorname{Ran} T$는 유한차원이므로, 직교 여공간의 (3)에 의해 모든 $v$에 대하여 $v = r + k$인 $r \in \operatorname{Ran} T$와 $k \in (\operatorname{Ran} T)^\perp = \operatorname{Ker} T$가 있고, 그런 $r$과 $k$는 하나뿐이다. [[vector-space|벡터공간]]의 (V1)에 의해 $v = k + r$이다.

**(2)** $v \in \operatorname{Ran} T$이면 $Tv$는 $T$의 값이므로 $Tv \in \operatorname{Ran} T$이다. 곧 $\operatorname{Ran} T$는 $T$-불변이고, 불변 부분공간의 (2)에 의해 제한한 사상 $T|_{\operatorname{Ran} T} : \operatorname{Ran} T \to \operatorname{Ran} T$는 선형사상이다. $v \in \operatorname{Ran} T$이고 $T|_{\operatorname{Ran} T} v = Tv = 0_V$이면 $v \in \operatorname{Ran} T \cap \operatorname{Ker} T = \operatorname{Ran} T \cap (\operatorname{Ran} T)^\perp$이고, 직교 여공간의 (2)에 의해 $v = 0_V$이다. [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 제한한 사상은 단사이다. $\operatorname{Ran} T$는 유한차원이므로 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에 의해 제한한 사상은 동형사상이다.

**(3)** [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Ax = x_1(1, -1) + x_2(1, -1) = (x_1 + x_2)(1, -1)$이다. 따라서 $\operatorname{Ran} T_A = \operatorname{span}((1, -1))$이고, $Ax = 0$인 것은 정확히 $x_1 + x_2 = 0$, 곧 $x = x_1(1, -1)$일 때이므로 $\operatorname{Ker} T_A = \operatorname{span}((1, -1))$이다. 두 부분공간은 같다.

$(1, -1)$은 $\operatorname{Ker} T_A$에 속하지만 $\langle (1, -1), (1, -1) \rangle = 2 \ne 0$이므로 $(\operatorname{Ran} T_A)^\perp$에 속하지 않는다. 곧 $\operatorname{Ker} T_A \ne (\operatorname{Ran} T_A)^\perp$이다. 또 $v = (1, -1) \in \operatorname{Ran} T_A$이면 $T_A v = 0 \cdot (1, -1) = 0$이므로 제한한 사상은 단사가 아니고 동형사상이 아니다. $(1, -1)$은 $(1, -1) + 0 = 0 + (1, -1)$처럼 $\operatorname{Ker} T_A$의 원소와 $\operatorname{Ran} T_A$의 원소의 합으로 두 가지로 쓰인다. 문제 3에서 본 대로 $T_A$는 자기수반이 아니다.
:::

:::exercise[사상과 그 수반사상의 합성의 상]
$V$, $W$가 유한차원인 내적공간이고 $T : V \to W$가 선형사상이라 하자.

1. $\operatorname{Ker}(T \circ T^*) = \operatorname{Ker} T^*$임을 보여라.
2. $\operatorname{Ran}(T \circ T^*) = \operatorname{Ran} T$임을 보여라.
3. $m$, $n$이 자연수이고 $A$가 $m \times n$ 행렬이면 $\operatorname{Col}(AA^T) = \operatorname{Col} A$임을 보여라.
:::

:::solution
수반사상은 [[adjoint-map|수반사상]]의 것이고, 핵과 상, 계수와 퇴화차수는 [[kernel-and-range|핵과 상]]과 [[rank-and-nullity|계수와 퇴화차수]]의 것이다.

**(1)** $T^* w = 0_V$이면 [[linear-map|선형사상]]의 (T1)에 의해 $T(T^* w) = 0_W$이다. 거꾸로 $T(T^* w) = 0_W$라 하자. 수반사상의 (2)에서 $v = T^* w$로 두면 $\langle T^* w, T^* w \rangle = \langle w, T(T^* w) \rangle = \langle w, 0_W \rangle = 0$이다(마지막 등식은 [[inner-product-space|내적과 내적공간]]의 (2)). 내적의 조건 (iii)에 의해 $T^* w = 0_V$이다.

**(2)** $w \in W$이면 $T(T^* w)$는 $T$의 값이므로 $\operatorname{Ran}(T \circ T^*) \subseteq \operatorname{Ran} T$이다. 수반사상의 (1)과 [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $T \circ T^* : W \to W$와 $T^* : W \to V$는 선형사상이고, [[rank-nullity-theorem|차원 정리]]를 두 사상에 쓰면 (1)에 의해

$$
\begin{aligned}
&\operatorname{rank}(T \circ T^*) \\
&= \dim W - \operatorname{nullity}(T \circ T^*) \\
&= \dim W - \operatorname{nullity} T^* \\
&= \operatorname{rank} T^*
\end{aligned}
$$

이다. [[kernel-and-range-of-adjoint|상과 핵의 직교 관계]]의 (5)에 의해 $\operatorname{rank} T^* = \operatorname{rank} T$이다. 곧 부분공간 $\operatorname{Ran}(T \circ T^*) \subseteq \operatorname{Ran} T$의 차원이 같고, $\operatorname{Ran} T$는 유한차원이므로 [[dimension-of-subspace|부분공간의 차원]]의 (5)에 의해 두 부분공간은 같다.

**(3)** $\mathbb{R}^n$, $\mathbb{R}^m$에 표준내적을 주면 수반사상의 (4)에 의해 $(T_A)^* = T_{A^T}$이고, [[matrix-product|행렬의 곱]]의 (1)에 의해 $T_{AA^T} = T_A \circ T_{A^T} = T_A \circ (T_A)^*$이다. [[rank-of-a-matrix|행렬의 계수]]의 정의에 의해 $\operatorname{Col}(AA^T) = \operatorname{Ran} T_{AA^T}$이고 $\operatorname{Col} A = \operatorname{Ran} T_A$이므로, (2)를 $T = T_A$에 쓰면 $\operatorname{Col}(AA^T) = \operatorname{Col} A$이다. [[dimension|유한차원과 차원]]의 (4)에 의해 두 공간은 유한차원이다.
:::
