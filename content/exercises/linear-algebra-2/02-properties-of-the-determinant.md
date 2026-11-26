---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절, 연습문제 3.3 (p.85)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 7절, 연습문제 7.2 (p.97)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절, 연습문제 3.5 (p.85)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절, 연습문제 3.4 (p.85)"
added: 2026-11-26
---

:::exercise[대각성분이 0 이고 나머지 성분이 1 인 4 × 4 행렬]
$J$를 $(i, l)$ 성분이 $i = l$이면 $0$, $i \ne l$이면 $1$인 $4 \times 4$ 행렬이라 하자.

1. 행 연산으로 $J$를 위삼각행렬로 바꾸어 $\det J = -3$임을 보여라.
2. $J$가 가역임을 보이고 $\det(J^{-1})$, $\det(2J)$, $\det(J^T J)$를 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, 기본행렬을 곱한 결과는 [[elementary-matrix|기본행렬]]의 (2)로 계산한다.

**(1)** $J$의 행은 $(0, 1, 1, 1)$, $(1, 0, 1, 1)$, $(1, 1, 0, 1)$, $(1, 1, 1, 0)$이다. 첫째 행에 둘째, 셋째, 넷째 행을 차례로 더한 행렬

$$
J_1 = R_{1,4}(1)\Big(R_{1,3}(1)\big(R_{1,2}(1)J\big)\Big)
$$

은 첫째 행이 $(3, 3, 3, 3)$이고 나머지 행이 $J$의 것이다. [[determinant|행렬식]]의 (5)를 세 번 쓰면 $\det J_1 = \det J$이다.

$K$를 첫째 행이 $(1, 1, 1, 1)$이고 나머지 행이 $J$의 것인 $4 \times 4$ 행렬이라 하자. $J_1$은 첫째 행을 뺀 모든 행에서 $K$와 같고 $J_1$의 첫째 행은 $3$($K$의 첫째 행)이므로, 행렬식의 (7)의 (b)에 의해 $\det J_1 = 3 \det K$이다.

$K$의 둘째, 셋째, 넷째 행에서 각각 첫째 행을 빼면

$$
\begin{aligned}
U &= R_{4,1}(-1)\Big(R_{3,1}(-1) \\
&\qquad \big(R_{2,1}(-1)K\big)\Big) \\
&= \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}
\end{aligned}
$$

이다(예컨대 둘째 행은 $(1 - 1, 0 - 1, 1 - 1, 1 - 1)$). 행렬식의 (5)에 의해 $\det U = \det K$이다. $U$는 $j > k$인 모든 $(j, k)$ 성분이 $0$이므로 위삼각행렬이고, [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (3)과 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해

$$
\begin{aligned}
\det U &= \big((1 \cdot (-1)) \cdot (-1)\big) \cdot (-1) \\
&= -1
\end{aligned}
$$

이다. 따라서 $\det J = \det J_1 = 3 \det K = 3 \det U = -3$이다.

**(2)** $\det J = -3 \ne 0$이므로 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $J$는 가역이고, 그 (2)에 의해 $\det(J^{-1}) = (-3)^{-1}$이다. $(-3)(-(3^{-1})) = 3 \cdot 3^{-1} = 1$이므로((K12)의 (iii)) (K8)의 (iii)에 의해 $(-3)^{-1} = -(3^{-1})$이다.

[[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(2J) = 2^4 \det J = 16 \cdot (-3) = -48$이다($2^4 = 16$은 [[power-of-a-real-number|실수의 거듭제곱]]의 정의와 (K7)).

[[determinant-of-transpose|전치행렬의 행렬식]]의 (1)에 의해 $\det J^T = \det J = -3$이고, 곱의 행렬식의 (1)에 의해 $\det(J^T J) = \det J^T \cdot \det J = (-3)(-3) = 9$이다.
:::

:::exercise[자기 자신과의 곱이 자기 자신인 행렬의 행렬식]
$n$이 자연수이고 $A$가 $AA = A$인 $n \times n$ 행렬이라 하자.

1. $\det A$는 $0$이거나 $1$임을 보여라.
2. $\det A = 1$이면 $A = I_n$임을 보여라.
3. $2 \times 2$ 행렬로 다음 예를 하나씩 들어라. (가) $AA = A$이고 영행렬이 아니며 $\det A = 0$인 것. (나) $\det A = 1$이지만 $AA \ne A$인 것.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** $d = \det A$라 하자. [[determinant-of-product|곱의 행렬식]]의 (1)에 의해 $\det(AA) = d \cdot d$이고 $AA = A$이므로 $dd = d$이다. (K12)의 (v)에 의해 $dd - d = 0$이고, (K4), (K12)의 (ii), (K3)에 의해 $dd - d = dd + d(-1) = d(d + (-1)) = d(d - 1)$이다. (K10)에 의해 $d = 0$이거나 $d - 1 = 0$이고, 뒤의 경우 (K12)의 (v)에 의해 $d = 1$이다.

**(2)** $\det A = 1 \ne 0$이므로 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$는 가역이다. [[invertible-matrix|가역행렬과 역행렬]]의 (1)의 $A^{-1}A = I_n$과 [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)에 의해

$$
\begin{aligned}
A &= I_n A = (A^{-1}A)A \\
&= A^{-1}(AA) = A^{-1}A = I_n
\end{aligned}
$$

이다.

**(3)** 곱은 [[matrix-product|행렬의 곱]]의 (2)로 성분마다 계산한다.

(가) $E = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$이면 $EE$의 성분은 $(EE)_{1,1} = 1 \cdot 1 + 0 \cdot 0 = 1$, $(EE)_{1,2} = 1 \cdot 0 + 0 \cdot 0 = 0$, $(EE)_{2,1} = 0 \cdot 1 + 0 \cdot 0 = 0$, $(EE)_{2,2} = 0 \cdot 0 + 0 \cdot 0 = 0$이므로 [[matrix|행렬]]의 (2)에 의해 $EE = E$이다. $E$는 영행렬이 아니고, [[determinant|행렬식]]의 (4)에 의해 $\det E = 1 \cdot 0 - 0 \cdot 0 = 0$이다.

(나) $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $\det N = 1 \cdot 1 - 0 \cdot 1 = 1$이다. 그런데 $(NN)_{1,2} = 1 \cdot 1 + 1 \cdot 1 = 2 \ne 1 = n_{1,2}$이므로 행렬의 (2)에 의해 $NN \ne N$이다. 따라서 (1)의 거꾸로, 곧 "$\det A$가 $0$이나 $1$이면 $AA = A$"는 성립하지 않을 수 있다. 이것은 (2)와 어긋나지 않는다. (2)는 $AA = A$를 가정한다.
:::

:::exercise[곱하는 순서를 바꾸면 부호가 바뀌는 두 행렬]
$n$이 자연수이고 $A$, $B$가 $AB = -BA$인 $n \times n$ 행렬이라 하자.

1. $n$이 홀수이면 $A$와 $B$ 가운데 적어도 하나는 가역이 아님을 보여라.
2. $n = 2$에서 $AB = -BA$이고 $A$와 $B$가 둘 다 가역인 예를 들어라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 행렬 $M$에 대하여 $-M$은 [[matrix|행렬]]의 (1)에 의해 성분이 $-m_{j,k}$인 행렬이고, (K9)에 의해 $-m_{j,k} = (-1)m_{j,k}$이므로 행렬의 (2)에 의해 $-M = (-1)M$이다.

**(1)** $n$이 홀수라 하자. [[determinant-of-product|곱의 행렬식]]의 (4), [[power-of-a-real-number|실수의 거듭제곱]]의 (5), 곱의 행렬식의 (2)에 의해

$$
\begin{aligned}
\det(AB) &= \det\big((-1)(BA)\big) \\
&= (-1)^n \det(BA) \\
&= -\det(BA) \\
&= -\det(AB)
\end{aligned}
$$

이다(셋째 등호에서 $(-1)^n = -1$과 (K9)). 따라서 $\det(AB) + \det(AB) = 0$이고, (K4)와 (K12)의 (i)에 의해 왼쪽은 $(1 + 1)\det(AB) = 2 \det(AB)$이다. $2 \ne 0$이므로((K7)) (K10)에 의해 $\det(AB) = 0$이다. 곱의 행렬식의 (1)에 의해 $\det A \cdot \det B = 0$이고, (K10)에 의해 $\det A = 0$이거나 $\det B = 0$이다. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 행렬식이 $0$인 쪽은 가역이 아니다.

**(2)** $A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이라 하자. [[matrix-product|행렬의 곱]]의 (2)로 성분을 계산하면

$(AB)_{1,1} = 1 \cdot 0 + 0 \cdot 1 = 0$, $(AB)_{1,2} = 1 \cdot 1 + 0 \cdot 0 = 1$, $(AB)_{2,1} = 0 \cdot 0 + (-1) \cdot 1 = -1$, $(AB)_{2,2} = 0 \cdot 1 + (-1) \cdot 0 = 0$이고 $(BA)_{1,1} = 0 \cdot 1 + 1 \cdot 0 = 0$, $(BA)_{1,2} = 0 \cdot 0 + 1 \cdot (-1) = -1$, $(BA)_{2,1} = 1 \cdot 1 + 0 \cdot 0 = 1$, $(BA)_{2,2} = 1 \cdot 0 + 0 \cdot (-1) = 0$이므로

$$
\begin{aligned}
AB &= \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \\
BA &= \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
\end{aligned}
$$

이다. 행렬의 (1)과 (2)에 의해 $-BA$의 성분은 $0$, $1$, $-1$, $0$이므로 $AB = -BA$이다. [[determinant|행렬식]]의 (4)에 의해 $\det A = 1 \cdot (-1) - 0 \cdot 0 = -1$, $\det B = 0 \cdot 0 - 1 \cdot 1 = -1$이고 둘 다 $0$이 아니므로, 행렬식과 가역성의 (1)에 의해 $A$와 $B$는 둘 다 가역이다. (1)의 계산에서 $n = 2$이면 $(-1)^2 = 1$이므로 $\det(AB) = \det(BA)$만 나오고 모순이 생기지 않는다.
:::

:::exercise[열의 순서를 뒤집으면 아래삼각행렬이 되는 행렬]
실수 $a$, $b$, $c$, $d$, $u$, $v$, $w$, $x$, $y$, $z$에 대하여
$$
\begin{aligned}
M &= \begin{pmatrix} 0 & 0 & 0 & a \\ 0 & 0 & b & x \\ 0 & c & y & z \\ d & u & v & w \end{pmatrix}, \\
N &= \begin{pmatrix} 0 & 0 & a \\ 0 & b & x \\ c & y & z \end{pmatrix}
\end{aligned}
$$
이라 하자.

1. 열 맞바꾸기와 삼각행렬의 행렬식으로 $\det M = abcd$이고 $\det N = -abc$임을 보여라.
2. $M$이 가역인 것은 정확히 $a$, $b$, $c$, $d$가 모두 $0$이 아닐 때임을 보여라.
:::

:::solution
열을 맞바꾸는 일은 [[determinant-of-transpose|전치행렬의 행렬식]]의 (6)으로 하고, 아래삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]에서 정한 것($j < k$인 모든 $(j, k)$ 성분이 $0$)이다.

**(1)** $M$의 열은 $\mathbf{m}_1 = (0, 0, 0, d)$, $\mathbf{m}_2 = (0, 0, c, u)$, $\mathbf{m}_3 = (0, b, y, v)$, $\mathbf{m}_4 = (a, x, z, w)$이다. $M'$을 $M$의 첫째 열과 넷째 열을 맞바꾼 행렬, $M''$을 $M'$의 둘째 열과 셋째 열을 맞바꾼 행렬이라 하자. 곧 $M''$의 열은 차례로 $\mathbf{m}_4$, $\mathbf{m}_3$, $\mathbf{m}_2$, $\mathbf{m}_1$이고

$$
M'' = \begin{pmatrix} a & 0 & 0 & 0 \\ x & b & 0 & 0 \\ z & y & c & 0 \\ w & v & u & d \end{pmatrix}
$$

이다. 전치행렬의 행렬식의 (6)에 의해 $\det M' = -\det M$이고 $\det M'' = -\det M'$이므로 [[real-number-arithmetic|(K9)]]에 의해 $\det M = -\det M' = -(-\det M'') = \det M''$이다. $M''$은 아래삼각행렬이고 대각성분이 $a$, $b$, $c$, $d$이므로 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (4)와 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해 $\det M'' = ((ab)c)d$이다. 따라서 $\det M = abcd$이다.

$N$의 열은 $(0, 0, c)$, $(0, b, y)$, $(a, x, z)$이다. 첫째 열과 셋째 열을 맞바꾼 행렬 $N'$은

$$
N' = \begin{pmatrix} a & 0 & 0 \\ x & b & 0 \\ z & y & c \end{pmatrix}
$$

이고 아래삼각행렬이므로 같은 근거로 $\det N' = (ab)c$이다. 전치행렬의 행렬식의 (6)에 의해 $\det N = -\det N' = -abc$이다. 크기 $4$에서는 맞바꾸기가 두 번, 크기 $3$에서는 한 번이어서 부호가 다르다.

**(2)** [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $M$이 가역인 것은 정확히 $\det M \ne 0$일 때이다. (1)에서 $\det M$은 길이 $4$인 열 $a$, $b$, $c$, $d$의 곱이므로, 실수의 유한 곱의 (5)에 의해 $\det M \ne 0$인 것은 정확히 네 항이 모두 $0$이 아닐 때이다.
:::

:::exercise[성분이 행 번호와 열 번호의 합인 행렬]
$n \ge 2$인 자연수 $n$에 대하여 $H_n$을 $(j, k)$ 성분이 정수 $j + k$인 $n \times n$ 행렬이라 하자.

1. $\det H_2 = -1$임을 보여라.
2. $n \ge 3$이면 $\det H_n = 0$임을 열 연산으로 보여라.
3. $n \ge 3$이면 $H_n x = 0$이고 $x \ne 0$인 $x \in \mathbb{R}^n$이 있음을 행렬식으로 설명하고, 그런 $x$를 하나 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, 정수 사이의 계산은 (K7)이다. $H_n$의 $k$번째 열을 $\mathbf{h}_k$로 쓰면 $\mathbf{h}_k$의 $j$번째 값은 $j + k$이다.

**(1)** $H_2 = \begin{pmatrix} 2 & 3 \\ 3 & 4 \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해 $\det H_2 = 2 \cdot 4 - 3 \cdot 3 = 8 - 9 = -1$이다.

**(2)** $n \ge 3$이라 하고, $\mathbf{u} \in \mathbb{R}^n$을 모든 값이 $1$인 벡터라 하자. $H'$을 셋째 열을 뺀 모든 열에서 $H_n$과 같고 셋째 열이 $\mathbf{h}_3 + (-1)\mathbf{h}_2$인 행렬이라 하자. 그 셋째 열의 $j$번째 값은 $(j + 3) + (-1)(j + 2) = 1$이므로 셋째 열은 $\mathbf{u}$이다. [[determinant-of-transpose|전치행렬의 행렬식]]의 (7)($j = 2$, $k = 3$, $c = -1$)에 의해 $\det H' = \det H_n$이다.

$H''$을 둘째 열을 뺀 모든 열에서 $H'$과 같고 둘째 열이 $\mathbf{h}_2 + (-1)\mathbf{h}_1$인 행렬이라 하자. $H'$의 첫째 열과 둘째 열은 $\mathbf{h}_1$, $\mathbf{h}_2$이므로 전치행렬의 행렬식의 (7)($j = 1$, $k = 2$, $c = -1$)에 의해 $\det H'' = \det H'$이다. $H''$의 둘째 열의 $j$번째 값은 $(j + 2) + (-1)(j + 1) = 1$이므로 둘째 열도 $\mathbf{u}$이다. $H''$의 둘째 열과 셋째 열이 같으므로 전치행렬의 행렬식의 (4)에 의해 $\det H'' = 0$이다. 따라서 $\det H_n = \det H' = \det H'' = 0$이다.

**(3)** (2)와 [[determinant-and-invertibility|행렬식과 가역성]]의 (3)의 (b)에 의해 그런 $x$가 있다. 실제로 $x$를 첫째, 둘째, 셋째 값이 $1$, $-2$, $1$이고 나머지 값이 $0$인 $\mathbb{R}^n$의 원소라 하자. $x \ne 0$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $H_n x$의 $j$번째 값은 $k$번째 항이 $(j + k) x_k$인 길이 $n$인 열의 합이다. $k \ge 4$인 항은 (K9)에 의해 $0$이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H2), (H5), (H0)과 (K4)에 의해 이 합은 처음 세 항의 합

$$
\begin{aligned}
&\big((j + 1) \cdot 1 + (j + 2)(-2)\big) \\
&\quad + (j + 3) \cdot 1 \\
&= (j + 1) - 2j - 4 + j + 3 \\
&= 0
\end{aligned}
$$

이다. 따라서 $H_n x = 0$이다.
:::
