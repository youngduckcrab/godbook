---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 2절, 연습문제 2.5, 2.7 (p.114–115)"
added: 2026-11-26
---

:::exercise[고윳값이 겹치는 3 × 3 행렬의 대각화]

$$
A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}
$$

이라 하자. $x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓴다.

1. $1$과 $4$에 대한 $A$의 고유공간을 구하라.
2. $u_1 = (1, -1, 0)$, $u_2 = (0, 1, -1)$, $u_3 = (1, 1, 1)$로 된 열이 $A$의 고유벡터로 된 $\mathbb{R}^3$의 기저임을 보이고, $A = SDS^{-1}$인 가역행렬 $S$와 대각행렬 $D$를 적어라.
3. $A$의 고윳값이 정확히 $1$과 $4$임을 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)로 계산한다.

**(1)** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)에 의해 $\lambda$에 대한 고유공간 $\operatorname{Ker}(T_A - \lambda i_{\mathbb{R}^3})$은 $\operatorname{Ker} T_{A - \lambda I_3}$이고, [[matrix|행렬]]의 (1), (6)에 의해 $A - \lambda I_3$은 $A$의 대각성분에서 $\lambda$를 뺀 행렬이다.

*$\lambda = 1$.* $A - I_3$은 모든 성분이 $1$이므로 $(A - I_3)x$의 세 값은 모두 $x_1 + x_2 + x_3$이다. 따라서 고유공간은 $\{x \in \mathbb{R}^3 : x_1 + x_2 + x_3 = 0\}$이다.

*$\lambda = 4$.* $(A - 4I_3)x = (-2x_1 + x_2 + x_3,\ x_1 - 2x_2 + x_3,\ x_1 + x_2 - 2x_3)$이다. 이것이 $(0, 0, 0)$이면 첫째 값에서 둘째 값을 빼 $-3x_1 + 3x_2 = 0$, 곧 $3(x_2 - x_1) = 0$이고, $3 \ne 0$이므로 (K10)과 (K12)의 (v)에 의해 $x_1 = x_2$이다. 같은 방법으로 둘째 값에서 셋째 값을 빼 $x_2 = x_3$이다. 거꾸로 $x = (t, t, t)$이면 세 값은 모두 $-2t + t + t = 0$이다. 따라서 고유공간은 $\{(t, t, t) : t \in \mathbb{R}\}$이다.

**(2)** 행 규칙으로 $Au_1 = (2 - 1, 1 - 2, 1 - 1) = (1, -1, 0) = 1u_1$, $Au_2 = (1 - 1, 2 - 1, 1 - 2) = (0, 1, -1) = 1u_2$, $Au_3 = (4, 4, 4) = 4u_3$이다. 세 벡터는 영벡터가 아니므로 $u_1$, $u_2$는 $1$에, $u_3$은 $4$에 속하는 고유벡터이다.

실수 $\alpha$, $\beta$, $\gamma$에 대하여 $\alpha u_1 + \beta u_2 + \gamma u_3 = (\alpha + \gamma,\ -\alpha + \beta + \gamma,\ -\beta + \gamma)$이다. 이것이 $(0, 0, 0)$이면 세 값을 더해 $3\gamma = 0$이므로 (K10)에 의해 $\gamma = 0$이고, 첫째 값에서 $\alpha = 0$, 셋째 값에서 $\beta = 0$이다. 곧 열 $u_1, u_2, u_3$은 [[linear-independence|일차독립]]이고, [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $\mathbb{R}^3$의 기저이다.

[[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (4)에 의해, $k$번째 열이 $u_k$인 행렬

$$
S = \begin{pmatrix} 1 & 0 & 1 \\ -1 & 1 & 1 \\ 0 & -1 & 1 \end{pmatrix}
$$

은 가역이고 $D = \operatorname{diag}(1, 1, 4)$에 대하여 $A = SDS^{-1}$이다.

**(3)** [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q = S^{-1}$은 가역이고 $Q^{-1} = S$이므로 $A = Q^{-1}DQ$, 곧 $A$는 $D$와 닮았다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)에 의해 $A$의 고윳값은 $D$의 고윳값과 같고, [[diagonalizable|대각화 가능]]의 (4)에 의해 $D$의 고윳값은 정확히 대각성분 $1$, $1$, $4$ 가운데 하나와 같은 실수이다. 따라서 $A$의 고윳값은 정확히 $1$과 $4$이다. 이 행렬은 서로 다른 고윳값이 두 개뿐이지만 대각화 가능하다. (2)의 기저에는 $1$에 속하는 고유벡터 $u_1$, $u_2$가 함께 들어 있다.
:::

:::exercise[역사상의 고윳값]
$V$가 벡터공간이고 $T : V \to V$가 동형사상이라 하자.

1. $v$가 $\lambda$에 속하는 $T$의 고유벡터이면 $\lambda \ne 0$이고, $v$는 $\lambda^{-1}$에 속하는 $T^{-1}$의 고유벡터임을 증명하라.
2. $n$이 자연수이고 $A$가 가역인 $n \times n$ 행렬이며 $\lambda$가 $A$의 고윳값이면, $\lambda \ne 0$이고 $\lambda^{-1}$은 $A^{-1}$의 고윳값임을 보여라.
:::

:::solution
**(1)** [[isomorphism|동형사상]]의 정의에 의해 $T$는 전단사, 특히 단사이므로 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (6)에 의해 $0$은 $T$의 고윳값이 아니다. $\lambda$는 $T$의 고윳값이므로 $\lambda \ne 0$이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)의 (iii)에 의해 $\lambda^{-1}$이 있다.

동형사상의 (2)에 의해 $T^{-1}$은 선형사상이다. [[inverse-function|역관계와 역함수]]의 등식 $T^{-1} \circ T = i_V$와 $Tv = \lambda v$에 의해

$$
v = T^{-1}(Tv) = T^{-1}(\lambda v) = \lambda\, T^{-1}v
$$

이다. 양변에 $\lambda^{-1}$을 곱하면 [[vector-space|벡터공간]]의 (V6), (V5)와 (K1), (K8)의 (iii)에 의해

$$
\begin{aligned}
\lambda^{-1} v &= (\lambda^{-1}\lambda)\, T^{-1}v\\
&= 1\, T^{-1}v = T^{-1}v
\end{aligned}
$$

이다. $v \ne 0_V$이므로 $v$는 $\lambda^{-1}$에 속하는 $T^{-1}$의 고유벡터이다.

**(2)** [[invertible-matrix|가역행렬과 역행렬]]의 (2)에 의해 $T_A$는 동형사상이고 $T_{A^{-1}}$은 $T_A$의 역함수이다. 고윳값과 고유벡터의 진술에 의해 행렬의 고윳값은 $T_A$의 고윳값이므로, (1)을 $T = T_A$에 쓰면 $\lambda \ne 0$이고 $\lambda^{-1}$은 $(T_A)^{-1} = T_{A^{-1}}$의 고윳값, 곧 $A^{-1}$의 고윳값이다.
:::

:::exercise[자기 자신과의 곱이 자기 자신인 행렬]
$n$이 자연수이고 $A$가 $AA = A$인 $n \times n$ 행렬이라 하자.

1. $\lambda$가 $A$의 고윳값이면 $\lambda = 0$이거나 $\lambda = 1$임을 보여라.
2. $A$가 대각화 가능임을 증명하라.
3. $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$이 $AA = A$를 만족함을 확인하고, $A = SDS^{-1}$인 가역행렬 $S$와 대각행렬 $D$를 하나 구하라.
:::

:::solution
**(1)** $v$를 $\lambda$에 속하는 고유벡터라 하자. [[matrix-product|행렬의 곱]]의 (1)과 가정에 의해 $A(Av) = (AA)v = Av = \lambda v$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)와 [[vector-space|벡터공간]]의 (V6)에 의해 $A(Av) = A(\lambda v) = \lambda(Av) = \lambda(\lambda v) = (\lambda\lambda)v$이다. 따라서 $(\lambda\lambda)v = \lambda v$이고, [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B12), (B11)에 의해 $(\lambda\lambda - \lambda)v = 0$이다. $v \ne 0$이므로 (B6)에 의해 $\lambda\lambda - \lambda = 0$이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K3), (K4), (K12)의 (ii)에 의해 $\lambda\lambda - \lambda = \lambda(\lambda - 1)$이므로, (K10)에 의해 $\lambda = 0$이거나 $\lambda - 1 = 0$이고, 뒤의 것은 (K12)의 (v)에 의해 $\lambda = 1$이다.

**(2)** $r = \operatorname{rank} A$라 하자. [[rank-of-a-matrix|행렬의 계수]]의 진술에 의해 벡터공간 $\operatorname{Col} A = \operatorname{Ran} T_A$에 길이 $r$인 기저 $u_1, \dots, u_r$이 있고, 같은 항목의 (4)에 의해 $\operatorname{nullity} T_A = n - r$이므로 [[rank-and-nullity|계수와 퇴화차수]]의 정의에 의해 벡터공간 $\operatorname{Ker} T_A$에 길이 $n - r$인 기저 $k_1, \dots, k_{n-r}$이 있다. [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 두 열은 $\mathbb{R}^n$에서 일차독립이다.

*고유공간에 속한다.* $u_i \in \operatorname{Ran} T_A$이므로 $u_i = Ax$인 $x$가 있고, $Au_i = (AA)x = Ax = u_i = 1u_i$이다((V5)). $k_j \in \operatorname{Ker} T_A$이므로 $Ak_j = 0 = 0k_j$이다((B3)). [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 모든 $u_i$는 고유공간 $K_1 = \operatorname{Ker}(T_A - 1i_{\mathbb{R}^n})$에, 모든 $k_j$는 고유공간 $K_0 = \operatorname{Ker}(T_A - 0i_{\mathbb{R}^n})$에 속하고, 두 고유공간은 부분공간이다.

*이어 붙인 열은 일차독립이다.* $u$와 $k$를 이어 붙인 길이 $r + (n - r) = n$인 열을 $c$라 하고, $\gamma_1 c_1 + \cdots + \gamma_n c_n = 0$이라 하자. $\alpha_i = \gamma_i$, $\beta_j = \gamma_{r+j}$로 두면 [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (1)에 의해 $y + z = 0$이다. 여기서 $y = \alpha_1 u_1 + \cdots + \alpha_r u_r$, $z = \beta_1 k_1 + \cdots + \beta_{n-r} k_{n-r}$이고, [[subspace|부분공간]]의 (S3)과 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H1)에 의해 $y \in K_1$, $z \in K_0$이다. $1 \ne 0$이므로(K4) 실수의 열 $1, 0$은 서로 다르고, (H0)에 의해 $y + z$는 길이 $2$인 열 $y, z$의 합이므로, [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (1)에 의해 $y = 0$이고 $z = 0$이다. $u$와 $k$가 일차독립이므로 모든 $\alpha_i$와 $\beta_j$가 $0$이고, 따라서 모든 $\gamma$의 항이 $0$이다. 곧 $c$는 [[linear-independence|일차독립]]이다.

*고유벡터로 된 기저.* [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $c$는 $\mathbb{R}^n$의 기저이다. 일차독립인 열에는 영벡터인 항이 없으므로(일차독립과 일차종속의 (I1)) $c$의 모든 항은 영벡터가 아니고, 위에서 본 것처럼 $u_i$는 $1$에, $k_j$는 $0$에 속하는 고유벡터이다. [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (4)에 의해 $A$는 대각화 가능이다. $r = 0$이거나 $r = n$이면 $u$나 $k$ 가운데 하나가 빈 열이고, 위 논증은 그대로 성립한다.

**(3)** 행렬의 곱의 정의에 의해 $AA$의 두 열은 $A\mathbf{a}_1 = A(1, 0) = (1, 0)$과 $A\mathbf{a}_2 = A(1, 0) = (1, 0)$이므로([[matrix-vector-product|행렬과 벡터의 곱]]의 (3)) [[matrix|행렬]]의 (3)에 의해 $AA = A$이다. $A(1, 0) = (1, 0) = 1(1, 0)$이고 $A(1, -1) = 1(1, 0) + (-1)(1, 0) = (0, 0) = 0(1, -1)$이므로 $(1, 0)$은 $1$에, $(1, -1)$은 $0$에 속하는 고유벡터이다. $\alpha(1, 0) + \beta(1, -1) = (\alpha + \beta, -\beta)$가 영벡터이면 $\beta = 0$이고 $\alpha = 0$이므로 두 벡터는 일차독립이고, (2)에서와 같이 $\mathbb{R}^2$의 기저이다. 대각화와 고유벡터의 기저의 (4)에 의해

$$
S = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}, \qquad D = \operatorname{diag}(1, 0)
$$

에 대하여 $S$는 가역이고 $A = SDS^{-1}$이다.
:::

:::exercise[AB 와 BA 의 고윳값]
$n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이며 $\lambda$가 실수라 하자.

1. $\lambda \ne 0$이고 $\lambda$가 $AB$의 고윳값이면 $\lambda$는 $BA$의 고윳값임을 증명하라.
2. $0$이 $AB$의 고윳값인 것은 정확히 $0$이 $BA$의 고윳값일 때임을 증명하라.
3. $AB$와 $BA$의 고윳값이 같음을 보여라.
:::

:::solution
**(1)** $x \ne 0$이고 $(AB)x = \lambda x$인 $x \in \mathbb{R}^n$이 있다. $w = Bx$라 하자. $w = 0$이라면 [[matrix-product|행렬의 곱]]의 (1)과 [[linear-map|선형사상]]의 (T1)에 의해 $\lambda x = (AB)x = A(Bx) = A0 = 0$이고, [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B6)에 의해 $\lambda = 0$이거나 $x = 0$이어서 가정에 어긋난다. 따라서 $w \ne 0$이다. 또 행렬의 곱의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해

$$
\begin{aligned}
(BA)w &= B(A(Bx)) = B((AB)x)\\
&= B(\lambda x) = \lambda(Bx) = \lambda w
\end{aligned}
$$

이다. 따라서 $w$는 $\lambda$에 속하는 $BA$의 [[eigenvalue-and-eigenvector|고유벡터]]이고 $\lambda$는 $BA$의 고윳값이다.

**(2)** 고윳값과 고유벡터의 (6)에 의해 $0$이 $AB$의 고윳값인 것은 정확히 $T_{AB}$가 단사가 아닐 때이고, [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (가)와 (라)가 같으므로 이것은 정확히 $AB$가 가역이 아닐 때이다. $BA$에 대해서도 같다. 그러므로 "$AB$가 가역인 것은 정확히 $BA$가 가역일 때"를 보이면 된다. $AB$가 가역이면 정사각행렬의 한쪽 역의 (2)에 의해 $A$와 $B$가 가역이고, [[inverse-matrix-properties|역행렬의 성질]]의 (3)에 의해 $BA$가 가역이다. $A$와 $B$의 자리를 바꾸면 반대 방향도 같다.

**(3)** $\lambda \ne 0$이면 (1)과, (1)에서 $A$와 $B$의 자리를 바꾼 것에 의해 $\lambda$가 $AB$의 고윳값인 것은 정확히 $BA$의 고윳값일 때이다. $\lambda = 0$이면 (2)이다. 실수 $\lambda$는 $0$이거나 $0$이 아니므로, $AB$와 $BA$의 고윳값은 같다.
:::

:::exercise[두 행렬의 합의 고윳값]
1. $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$의 고윳값은 각각 $0$뿐이지만 $0 + 0 = 0$은 $A + B$의 고윳값이 아님을 보여라.
2. $n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이며, $v$가 $\lambda$에 속하는 $A$의 고유벡터이면서 $\mu$에 속하는 $B$의 고유벡터이면, $v$는 $\lambda + \mu$에 속하는 $A + B$의 고유벡터임을 보여라.
:::

:::solution
**(1)** $A$는 $(2, 1)$ 성분이 $0$이어서 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 위삼각행렬이고 대각성분이 $0$, $0$이므로, 같은 항목의 (2)에 의해 $A$의 고윳값은 정확히 $0$이다. $B$는 $(1, 2)$ 성분이 $0$이어서 아래삼각행렬이고 대각성분이 $0$, $0$이므로, 같은 항목의 (3)에 의해 $B$의 고윳값도 정확히 $0$이다.

[[matrix|행렬]]의 (1)에 의해 $A + B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $(A + B)x = (x_2, x_1)$이다. 이것이 $(0, 0)$이면 $x = (0, 0)$이므로 $\operatorname{Ker} T_{A+B} = \{(0, 0)\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T_{A+B}$는 단사이다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (6)에 의해 $0$은 $A + B$의 고윳값이 아니다. 곧 "$\lambda$가 $A$의 고윳값이고 $\mu$가 $B$의 고윳값이면 $\lambda + \mu$는 $A + B$의 고윳값이다"는 이 두 행렬에서 성립하지 않는다.

**(2)** 행렬과 벡터의 곱의 (4)와 [[vector-space|벡터공간]]의 (V8)에 의해 $(A + B)v = Av + Bv = \lambda v + \mu v = (\lambda + \mu)v$이고, $v$는 고유벡터이므로 영벡터가 아니다. 따라서 $v$는 $\lambda + \mu$에 속하는 $A + B$의 고유벡터이다. (1)의 두 행렬에는 이런 공통의 고유벡터가 없다. $A$의 고윳값은 $0$뿐이고 $Ax = (x_2, 0)$이므로 $A$의 고유벡터는 $x_2 = 0$인 영이 아닌 벡터 $(t, 0)$이다. 그런데 $B(t, 0) = (0, t)$가 어떤 실수 $s$에 대하여 $s(t, 0) = (st, 0)$이면 둘째 값에서 $t = 0$이 되어 $(t, 0)$이 영벡터가 아니라는 데 어긋난다.
:::
