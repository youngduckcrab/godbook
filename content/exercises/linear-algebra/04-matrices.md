---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 3절, 연습문제 3.3 (p.17)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절, 연습문제 5.1 (p.23)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 6절, 연습문제 6.9 (p.29)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3.3절 Determinants of diagonal and triangular matrices (p.81)"
added: 2026-11-26
---

:::exercise[식으로 주어진 두 사상의 행렬과 합성]
각 $x \in \mathbb{R}^3$에서 값이 $(x_1 - x_2,\ 2x_2 + x_3)$인 함수 $T : \mathbb{R}^3 \to \mathbb{R}^2$와, 각 $y \in \mathbb{R}^2$에서 값이 $(y_1 + y_2,\ 3y_2)$인 함수 $S : \mathbb{R}^2 \to \mathbb{R}^2$를 생각한다.

1. 모든 $x \in \mathbb{R}^3$에서 $Tx = Ax$인 $2 \times 3$ 행렬 $A$를 찾고, 이로부터 $T$가 선형사상이고 $[T] = A$임을 보여라.
2. 같은 방법으로 $S$가 선형사상임을 보이고 $[S]$를 구하라.
3. $[S \circ T]$를 구하고, $x = (1, 2, 3)$에서 $(S \circ T)x$를 두 가지로 계산해 맞춰 보아라.
4. 곱 $[T][S]$는 정의되는가?
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, 길이 $3$인 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 정의와 (H0)에 의해 처음 두 항의 합에 셋째 항을 더한 것이다.

**(1)** $A = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 2 & 1 \end{pmatrix}$이라 하자. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Ax$의 첫째 값은 $(1x_1 + (-1)x_2) + 0x_3$이고, (K1), (K4), (K9)에 의해 이것은 $(x_1 + (-x_2)) + 0 = x_1 - x_2$이다. 둘째 값은 $(0x_1 + 2x_2) + 1x_3 = (0 + 2x_2) + x_3 = 2x_2 + x_3$이다(같은 근거). 따라서 모든 $x$에서 $Tx = Ax$이고, 함수의 같음에 의해 $T = T_A$이다. 행렬과 벡터의 곱의 (2)에 의해 $T$는 선형사상이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[T] = [T_A] = A$이다.

**(2)** $B = \begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix}$이라 하면 행 규칙에 의해 $By$의 두 값은 $1y_1 + 1y_2 = y_1 + y_2$와 $0y_1 + 3y_2 = 3y_2$이다((K1), (K4), (K9)). 따라서 $S = T_B$는 선형사상이고 $[S] = B$이다.

**(3)** [[matrix-product|행렬의 곱]]의 (3)에 의해 $[S \circ T] = [S][T] = BA$이다. $BA$의 열은 $A$의 열 $\mathbf{a}_1 = (1, 0)$, $\mathbf{a}_2 = (-1, 2)$, $\mathbf{a}_3 = (0, 1)$에 $B$를 곱한 것이고, 곱의 정의($Bx$는 $B$의 열 $(1, 0)$, $(1, 3)$의 일차결합)에 의해

$$
\begin{aligned}
B\mathbf{a}_1 &= 1(1, 0) + 0(1, 3) = (1, 0),\\
B\mathbf{a}_2 &= (-1)(1, 0) + 2(1, 3)\\
&= (-1, 0) + (2, 6) = (1, 6),\\
B\mathbf{a}_3 &= 0(1, 0) + 1(1, 3) = (1, 3)
\end{aligned}
$$

이다. 따라서

$$
[S \circ T] = BA = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 6 & 3 \end{pmatrix}
$$

이다. $x = (1, 2, 3)$이면 선형사상의 행렬의 (1)에 의해 $(S \circ T)x = (BA)x = 1(1, 0) + 2(1, 6) + 3(1, 3) = (1 + 2 + 3,\ 0 + 12 + 9) = (6, 21)$이다. 정의대로 계산하면 $Tx = (1 - 2,\ 4 + 3) = (-1, 7)$이고 $S(-1, 7) = ((-1) + 7,\ 3 \cdot 7) = (6, 21)$이어서 같다(수의 계산은 (K7)).

**(4)** 정의되지 않는다. $[T] = A$는 $2 \times 3$ 행렬이고 $[S] = B$는 $2 \times 2$ 행렬이어서 $A$의 열의 개수 $3$과 $B$의 행의 개수 $2$가 다르다. [[matrix|행렬]]의 (7)에 의해 두 개수는 행렬마다 하나로 정해지므로 행렬의 곱의 정의에 의해 곱 $AB$는 정의되지 않는다.
:::

:::exercise[한 행렬과 곱의 순서를 바꿀 수 있는 행렬]
$N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이라 하자. $AN = NA$인 $2 \times 2$ 행렬 $A$를 모두 구하라.
:::

:::solution
$A = \begin{pmatrix} p & q \\ r & s \end{pmatrix}$라 하자($p$, $q$, $r$, $s$는 실수). $A$의 열은 $\mathbf{a}_1 = (p, r)$, $\mathbf{a}_2 = (q, s)$이고 $N$의 열은 $\mathbf{n}_1 = (0, 0)$, $\mathbf{n}_2 = (1, 0)$이다. [[matrix-product|행렬의 곱]]의 정의에 의해 $AN$의 $k$번째 열은 $A\mathbf{n}_k$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 정의와 [[real-number-arithmetic|(K4)]], (K9)에 의해

$$
\begin{aligned}
A\mathbf{n}_1 &= 0\mathbf{a}_1 + 0\mathbf{a}_2 = (0, 0),\\
A\mathbf{n}_2 &= 1\mathbf{a}_1 + 0\mathbf{a}_2 = (p, r)
\end{aligned}
$$

이다. 같은 방법으로 $NA$의 열은

$$
\begin{aligned}
N\mathbf{a}_1 &= p\mathbf{n}_1 + r\mathbf{n}_2 = (0, 0) + (r, 0)\\
&= (r, 0),\\
N\mathbf{a}_2 &= q\mathbf{n}_1 + s\mathbf{n}_2 = (s, 0)
\end{aligned}
$$

이다. 따라서

$$
AN = \begin{pmatrix} 0 & p \\ 0 & r \end{pmatrix}, \qquad NA = \begin{pmatrix} r & s \\ 0 & 0 \end{pmatrix}
$$

이다. [[matrix|행렬]]의 (2)에 의해 $AN = NA$인 것은 정확히 네 성분이 모두 같을 때, 곧 $0 = r$, $p = s$, $0 = 0$, $r = 0$일 때이다. 이것은 $r = 0$이고 $p = s$인 것과 같다. 따라서 답은 실수 $p$, $q$에 대하여

$$
A = \begin{pmatrix} p & q \\ 0 & p \end{pmatrix}
$$

꼴의 행렬 전체이다. 예를 들어 $p = 1$, $q = 0$이면 $I_2$이고, $p = 0$, $q = 1$이면 $N$ 자신이다.
:::

:::exercise[곱의 행을 행으로 계산하기]
$m$, $n$, $r$이 자연수이고 $A$가 $m \times n$ 행렬, $B$가 $n \times r$ 행렬이라 하자. $j \in \{1, \dots, m\}$에 대하여 $A$의 $j$번째 행을 $\rho \in \mathbb{R}^n$이라 쓰고, $l \in \{1, \dots, n\}$에 대하여 $B$의 $l$번째 행을 $\beta_l \in \mathbb{R}^r$이라 쓴다.

1. $AB$의 $j$번째 행은 $B^T \rho$임을 보여라.
2. 따라서 $AB$의 $j$번째 행은 $a_{j,1}\beta_1 + \cdots + a_{j,n}\beta_n$임을 보여라.
3. $A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 0 & 1 \\ 1 & 1 & 2 \end{pmatrix}$에서 (2)로 $AB$의 두 행을 구하고, 열마다 계산한 $AB$와 맞춰 보아라.
:::

:::solution
**(1)** $AB$는 $m \times r$ 행렬이다. [[transpose|전치행렬]]의 (2)를 $AB$에 쓰면 $(AB)^T$의 $j$번째 열은 $AB$의 $j$번째 행이다. 전치행렬의 (4)에 의해 $(AB)^T = B^T A^T$이고, [[matrix-product|행렬의 곱]]의 정의에 의해 $B^T A^T$의 $j$번째 열은 $B^T$와 $A^T$의 $j$번째 열의 곱이다. 다시 전치행렬의 (2)를 $A$에 쓰면 $A^T$의 $j$번째 열은 $A$의 $j$번째 행 $\rho$이다. 따라서 $AB$의 $j$번째 행은 $B^T \rho$이다.

**(2)** [[matrix|행렬]]에서 정한 대로 $\rho$의 $l$번째 값은 $a_{j,l}$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $B^T\rho$는 $B^T$의 $l$번째 열에 $a_{j,l}$을 곱해 더한 것이고, 전치행렬의 (2)를 $B$에 쓰면 $B^T$의 $l$번째 열($l \in \{1, \dots, n\}$)은 $B$의 $l$번째 행 $\beta_l$이다. 따라서 $B^T \rho = a_{j,1}\beta_1 + \cdots + a_{j,n}\beta_n$이고, (1)에 의해 이것이 $AB$의 $j$번째 행이다.

**(3)** $B$의 두 행은 $\beta_1 = (3, 0, 1)$, $\beta_2 = (1, 1, 2)$이다. (2)에 의해 $AB$의 첫째 행은 $1\beta_1 + 2\beta_2 = (3, 0, 1) + (2, 2, 4) = (5, 2, 5)$이고, 둘째 행은 $0\beta_1 + (-1)\beta_2 = (0, 0, 0) + (-1, -1, -2) = (-1, -1, -2)$이다. 한편 정의대로 $B$의 열 $(3, 1)$, $(0, 1)$, $(1, 2)$에 $A$를 곱하면

$$
\begin{aligned}
A\mathbf{b}_1 &= 3(1, 0) + 1(2, -1) = (5, -1),\\
A\mathbf{b}_2 &= 0(1, 0) + 1(2, -1) = (2, -1),\\
A\mathbf{b}_3 &= 1(1, 0) + 2(2, -1) = (5, -2)
\end{aligned}
$$

이므로 $AB = \begin{pmatrix} 5 & 2 & 5 \\ -1 & -1 & -2 \end{pmatrix}$이고, 두 행이 위에서 구한 것과 같다(수의 계산은 [[real-number-arithmetic|(K7)]]).
:::

:::exercise[가역행렬을 곱한 등식의 소거]
$m$, $n$, $p$, $r$이 자연수이고 $A$가 가역인 $m \times n$ 행렬이라 하자. 다음을 보여라.

1. $B$, $C$가 $n \times r$ 행렬이고 $AB = AC$이면 $B = C$이다.
2. $B$, $C$가 $p \times m$ 행렬이고 $BA = CA$이면 $B = C$이다.
:::

:::solution
[[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1}$은 $A^{-1}A = I_n$이고 $AA^{-1} = I_m$인 $n \times m$ 행렬이다.

**(1)** [[matrix-product-properties|행렬 곱의 성질]]의 (4), (1), (4)를 차례로 쓰면

$$
\begin{aligned}
B &= I_n B = (A^{-1}A)B = A^{-1}(AB)\\
&= A^{-1}(AC) = (A^{-1}A)C\\
&= I_n C = C
\end{aligned}
$$

이다. 넷째 등호는 가정 $AB = AC$이고, 셋째와 다섯째 등호가 결합법칙 (1)이다.

**(2)** 같은 성질에 의해

$$
\begin{aligned}
B &= B I_m = B(AA^{-1}) = (BA)A^{-1}\\
&= (CA)A^{-1} = C(AA^{-1})\\
&= C I_m = C
\end{aligned}
$$

이다. 넷째 등호는 가정 $BA = CA$이다. 모든 곱은 크기가 맞는다. 예를 들어 $B$는 $p \times m$, $A$는 $m \times n$, $A^{-1}$은 $n \times m$이다.
:::

:::exercise[왼쪽 아래 성분이 0인 2 × 2 행렬이 가역일 조건]
$p$, $q$, $s$가 실수이고 $A = \begin{pmatrix} p & q \\ 0 & s \end{pmatrix}$라 하자.

1. $A$가 가역인 것은 정확히 $p \ne 0$이고 $s \ne 0$일 때임을 보여라.
2. $p \ne 0$이고 $s \ne 0$이면, $c = qs^{-1}$으로 둘 때 $A^{-1} = \begin{pmatrix} p^{-1} & -(p^{-1}c) \\ 0 & s^{-1} \end{pmatrix}$임을 보여라.
3. $\begin{pmatrix} 2 & 4 \\ 0 & -1 \end{pmatrix}$의 역행렬을 (2)로 구하라.
:::

:::solution
$A$의 열은 $\mathbf{a}_1 = (p, 0)$, $\mathbf{a}_2 = (q, s)$이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다. [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 $A$가 가역인 것은 정확히 열 $\mathbf{a}_1, \mathbf{a}_2$가 $\mathbb{R}^2$의 기저일 때이고, [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 기저인 것은 정확히 일차독립이고 $\mathbb{R}^2$를 생성할 때이다.

**(2)를 먼저 보인다.** $p \ne 0$, $s \ne 0$이라 하고 주어진 행렬을 $B$라 하자. $B$의 열은 $\mathbf{b}_1 = (p^{-1}, 0)$, $\mathbf{b}_2 = (-(p^{-1}c), s^{-1})$이다. 쓸 계산 두 가지를 먼저 적는다. (K1), (K2), (K8)의 (iii), (K4)에 의해 $(p^{-1}c)p = (p p^{-1})c = c$이고, (K1), (K2), (K8), (K4)에 의해 $s(p^{-1}c) = p^{-1}(sc)$이며 $sc = s(qs^{-1}) = q(ss^{-1}) = q$이다. 곧 $s(p^{-1}c) = p^{-1}q$이다.

$AB$의 열: [[matrix-vector-product|행렬과 벡터의 곱]]의 정의와 (K9), (K4), (K12)의 (ii)에 의해

$$
\begin{aligned}
A\mathbf{b}_1 &= p^{-1}(p, 0) + 0(q, s)\\
&= (p^{-1}p, 0) = (1, 0),\\
A\mathbf{b}_2 &= \bigl(-(p^{-1}c)\bigr)(p, 0) + s^{-1}(q, s)\\
&= \bigl(-c + s^{-1}q,\ 0 + s^{-1}s\bigr)\\
&= (-c + c,\ 1) = (0, 1)
\end{aligned}
$$

이다($s^{-1}q = qs^{-1} = c$는 (K1)). 두 열이 [[matrix|행렬]]의 (6)에 의해 $I_2$의 열 $e_1$, $e_2$이므로 행렬의 (3)에 의해 $AB = I_2$이다.

$BA$의 열: 같은 근거와 위의 계산에 의해

$$
\begin{aligned}
B\mathbf{a}_1 &= p(p^{-1}, 0) + 0\,\mathbf{b}_2 = (1, 0),\\
B\mathbf{a}_2 &= q(p^{-1}, 0) + s\bigl(-(p^{-1}c), s^{-1}\bigr)\\
&= \bigl(qp^{-1} + (-(p^{-1}q)),\ ss^{-1}\bigr)\\
&= (0, 1)
\end{aligned}
$$

이다($qp^{-1} = p^{-1}q$는 (K1)). 따라서 $BA = I_2$이다. $A$는 왼쪽 역과 오른쪽 역을 모두 가지므로 가역이고, 가역행렬과 역행렬의 (1)에 의해 $A^{-1} = B$이다.

**(1)** ($\Leftarrow$)는 (2)에서 보였다. ($\Rightarrow$)는 대우로 보인다.

$p = 0$이면 $\mathbf{a}_1 = (0, 0)$은 영벡터이므로 [[linear-independence|일차독립과 일차종속]]의 (I1)에 의해 열 $\mathbf{a}_1, \mathbf{a}_2$는 일차종속이다. 따라서 기저가 아니고 $A$는 가역이 아니다.

$p \ne 0$이고 $s = 0$이면 $\mathbf{a}_2 = (q, 0)$이고, 실수 $\alpha$, $\beta$에 대하여 $\alpha\mathbf{a}_1 + \beta\mathbf{a}_2 = (\alpha p + \beta q,\ \alpha 0 + \beta 0) = (\alpha p + \beta q,\ 0)$이다((K9), (K4)). 둘째 값이 언제나 $0$이고 $(0, 1)$의 둘째 값은 $1 \ne 0$이므로 $(0, 1) \notin \operatorname{span}(\mathbf{a}_1, \mathbf{a}_2)$이다. 열이 $\mathbb{R}^2$를 생성하지 않으므로 기저가 아니고 $A$는 가역이 아니다.

두 경우를 합치면, $p = 0$이거나 $s = 0$이면 $A$는 가역이 아니다.

**(3)** $p = 2$, $q = 4$, $s = -1$이다. (K12)의 (iii)과 (K4)에 의해 $(-1)(-1) = 1$이므로 $s^{-1} = -1$이고, $c = 4(-1) = -4$이다. (K7)의 $2 \cdot 2 = 4$와 (K2), (K8), (K1), (K4)에 의해 $2^{-1} \cdot 4 = 2^{-1}(2 \cdot 2) = (2^{-1} \cdot 2) \cdot 2 = 2$이므로 (K12)의 (ii)에 의해 $p^{-1}c = 2^{-1}(-4) = -2$이고 $-(p^{-1}c) = 2$이다((K9)). 따라서

$$
\begin{pmatrix} 2 & 4 \\ 0 & -1 \end{pmatrix}^{-1} = \begin{pmatrix} 2^{-1} & 2 \\ 0 & -1 \end{pmatrix}
$$

이다. 확인하면 둘째 열에 대하여 $2(2, 0) + (-1)(4, -1) = (4, 0) + (-4, 1) = (0, 1)$이다.
:::

:::exercise[오른쪽에서 소거할 수 없는 예]
$A = \begin{pmatrix} 2 & 2 \\ 0 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 2 & 4 \\ -1 & -2 \end{pmatrix}$라 하자.

1. $AC = I_2 C$인데 $A \ne I_2$임을 보여라.
2. 이로부터 문제 4의 (2)를 써서 $C$가 가역이 아님을 결론하고, $C$의 열을 보고 같은 결론을 다시 얻어라.
:::

:::solution
**(1)** $C$의 열은 $\mathbf{c}_1 = (2, -1)$, $\mathbf{c}_2 = (4, -2)$이고 $A$의 열은 $(2, 0)$, $(2, 1)$이다. [[matrix-product|행렬의 곱]]의 정의에 의해 $AC$의 열은

$$
\begin{aligned}
A\mathbf{c}_1 &= 2(2, 0) + (-1)(2, 1)\\
&= (4, 0) + (-2, -1) = (2, -1),\\
A\mathbf{c}_2 &= 4(2, 0) + (-2)(2, 1)\\
&= (8, 0) + (-4, -2) = (4, -2)
\end{aligned}
$$

이다(수의 계산은 [[real-number-arithmetic|(K7)]]). 두 열이 $\mathbf{c}_1$, $\mathbf{c}_2$이므로 [[matrix|행렬]]의 (3)에 의해 $AC = C$이고, [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $C = I_2 C$이다. 한편 $A$의 $(1, 2)$ 성분은 $2$이고 $I_2$의 $(1, 2)$ 성분은 $0$이며 $2 \ne 0$이므로 행렬의 (2)에 의해 $A \ne I_2$이다.

**(2)** $C$가 가역이라면 문제 4의 (2)를 가역인 $2 \times 2$ 행렬 $C$와 $2 \times 2$ 행렬 $A$, $I_2$에 써서 $AC = I_2 C$로부터 $A = I_2$를 얻는다. 이것은 (1)에 어긋나므로 $C$는 가역이 아니다.

열로 보면 $2\mathbf{c}_1 + (-1)\mathbf{c}_2 = (4, -2) + (-4, 2) = (0, 0)$이고 계수 $2$가 $0$이 아니므로 열 $\mathbf{c}_1, \mathbf{c}_2$는 일차종속이다. [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 이 열은 $\mathbb{R}^2$의 기저가 아니고, [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 $C$는 가역이 아니다. 한편 $A$는 문제 5의 (1)에서 $p = 2$, $s = 1$인 경우이므로 가역이다. 곧 가역인 $A$와 영행렬이 아닌 $C$에서 $AC = I_2 C$이지만 $A \ne I_2$이다.
:::
