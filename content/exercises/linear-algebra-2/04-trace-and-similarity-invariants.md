---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 8절, 연습문제 8.6 (p.73)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절, 연습문제 5.5 (p.23)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5.5절, Theorem 5.1 뒤의 설명 (p.23)"
added: 2026-11-26
---

:::exercise[닮았는지 판정하는 두 쌍]
다음 두 쌍의 행렬이 닮았는지 판정하라.

1. $A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$와 $B = \begin{pmatrix} 5 & 2 \\ 3 & 1 \end{pmatrix}$. ($Q = P_{1,2}$로 $Q^{-1}AQ$를 계산해 보아라.)
2. $C = \operatorname{diag}(1, 6, 6)$과 $D = \operatorname{diag}(2, 2, 9)$. 두 행렬의 행렬식과 대각합이 각각 같음을 확인하고, $C - I_3$과 $D - I_3$의 행렬식을 비교하라.
:::

:::solution
닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]에서 정한 것이다. $2 \times 2$ 행렬의 행렬식은 [[determinant|행렬식]]의 (4)로, 대각합은 [[trace|대각합]]의 정의로 계산한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** [[elementary-matrix|기본행렬]]의 정의에 의해 $Q = P_{1,2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이고, 그 (3)에 의해 $Q$는 가역이며 $Q^{-1} = Q$이다. 기본행렬의 (2)에 의해 $QA$는 $A$의 두 행을 맞바꾼 $\begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$이다. [[matrix-product|행렬의 곱]]의 (2)에 의해 $K = QA$일 때 $(KQ)_{j,1} = k_{j,1} \cdot 0 + k_{j,2} \cdot 1 = k_{j,2}$, $(KQ)_{j,2} = k_{j,1} \cdot 1 + k_{j,2} \cdot 0 = k_{j,1}$이므로

$$
Q^{-1}AQ = (QA)Q = \begin{pmatrix} 5 & 2 \\ 3 & 1 \end{pmatrix} = B
$$

이다. 따라서 $A$와 $B$는 닮았다. 실제로 $\det A = 5 - 6 = -1 = 5 - 6 = \det B$이고 $\operatorname{tr} A = 1 + 5 = 6 = 5 + 1 = \operatorname{tr} B$로, [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)과 맞는다.

**(2)** $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]에서 정한 대각행렬이다. [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)와 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해 $\det C = (1 \cdot 6) \cdot 6 = 36$이고 $\det D = (2 \cdot 2) \cdot 9 = 36$이다. 대각합은 $\operatorname{tr} C = (1 + 6) + 6 = 13$, $\operatorname{tr} D = (2 + 2) + 9 = 13$이다. 행렬식과 대각합이 각각 같으므로 닮은 행렬의 행렬식과 대각합의 (1)로는 판정할 수 없다.

[[matrix|행렬]]의 (1)에 의해 $C - I_3$은 대각성분이 $1 - 1$, $6 - 1$, $6 - 1$이고 나머지 성분이 $0 - 0 = 0$인 행렬, 곧 $\operatorname{diag}(0, 5, 5)$이고, 같은 방법으로 $D - I_3 = \operatorname{diag}(1, 1, 8)$이다. 삼각행렬의 행렬식의 (5)에 의해 $\det(C - I_3) = (0 \cdot 5) \cdot 5 = 0$이고 $\det(D - I_3) = (1 \cdot 1) \cdot 8 = 8$이다. $C$와 $D$가 닮았다면 닮은 행렬의 행렬식과 대각합의 (3)을 $c = 1$에 써서 $\det(C - I_3) = \det(D - I_3)$이어야 하는데 $0 \ne 8$이다. 따라서 $C$와 $D$는 닮지 않았다.
:::

:::exercise[전치해도 같은 행렬과 전치하면 부호가 바뀌는 행렬의 곱]
$n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이며 $A^T = A$, $B^T = -B$라 하자.

1. $\operatorname{tr}(AB) = 0$임을 보여라.
2. $A^T = A$라는 가정을 빼면 결론이 성립하지 않을 수 있음을 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$으로 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 행렬 $M$에 대하여 $-M$은 [[matrix|행렬]]의 (1)에 의해 성분이 $-m_{j,k}$인 행렬이고, (K9)에 의해 $-m_{j,k} = (-1)m_{j,k}$이므로 행렬의 (2)에 의해 $-M = (-1)M$이다.

**(1)** [[transpose|전치행렬]]의 (4)와 가정에 의해 $(AB)^T = B^T A^T = (-B)A$이고, [[matrix-product-properties|행렬 곱의 성질]]의 (3)에 의해 $(-B)A = \big((-1)B\big)A = (-1)(BA) = -(BA)$이다. [[trace|대각합]]의 (3)과 (2), [[trace-of-product|곱의 대각합]]의 (1)에 의해

$$
\begin{aligned}
\operatorname{tr}(AB) &= \operatorname{tr}\big((AB)^T\big) \\
&= \operatorname{tr}\big(-(BA)\big) \\
&= -\operatorname{tr}(BA) \\
&= -\operatorname{tr}(AB)
\end{aligned}
$$

이다. 따라서 $\operatorname{tr}(AB) + \operatorname{tr}(AB) = 0$이고, (K4)와 (K12)의 (i)에 의해 왼쪽은 $2 \operatorname{tr}(AB)$이다. $2 \ne 0$이므로((K7)) (K10)에 의해 $\operatorname{tr}(AB) = 0$이다.

**(2)** [[transpose|전치행렬]]의 정의에 의해 $B^T = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이고, 행렬의 (1)과 (2)에 의해 이것은 $-B$이다. $A^T = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$은 $(1, 2)$ 성분이 $A$와 달라 $A^T \ne A$이다. [[matrix-product|행렬의 곱]]의 (2)에 의해 $(AB)_{1,1} = 0 \cdot 0 + 1 \cdot (-1) = -1$, $(AB)_{2,2} = 0 \cdot 1 + 0 \cdot 0 = 0$이므로 $\operatorname{tr}(AB) = -1 + 0 = -1 \ne 0$이다.
:::

:::exercise[AB 와 BA 가 닮지 않는 예]
$n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이라 하자.

1. $A$가 가역이면 $AB$와 $BA$가 닮았음을 보여라.
2. $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $AB$와 $BA$의 행렬식과 대각합이 각각 같지만 $AB$와 $BA$는 닮지 않았음을 보여라.
:::

:::solution
닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]에서 정한 것이다.

**(1)** $A$가 가역이면 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1}A = I_n$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)에 의해

$$
\begin{aligned}
A^{-1}(AB)A &= \big((A^{-1}A)B\big)A \\
&= (I_n B)A = BA
\end{aligned}
$$

이다. 곧 가역행렬 $Q = A$에 대하여 $BA = Q^{-1}(AB)Q$이므로 $BA$는 $AB$와 닮았다.

**(2)** [[matrix-product|행렬의 곱]]의 (2)로 계산하면

$(AB)_{1,2} = 1 \cdot 1 + 0 \cdot 0 = 1$이고 나머지 세 성분은 $1 \cdot 0 + 0 \cdot 0$, $0 \cdot 0 + 0 \cdot 0$, $0 \cdot 1 + 0 \cdot 0$으로 $0$이다. $BA$의 네 성분은 $0 \cdot 1 + 1 \cdot 0$, $0 \cdot 0 + 1 \cdot 0$, $0 \cdot 1 + 0 \cdot 0$, $0 \cdot 0 + 0 \cdot 0$으로 모두 $0$이다. 따라서

$$
\begin{aligned}
AB &= \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \\
BA &= \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
\end{aligned}
$$

이다. [[determinant|행렬식]]의 (4)에 의해 $\det(AB) = 0 \cdot 0 - 0 \cdot 1 = 0 = \det(BA)$이고, [[trace|대각합]]의 정의에 의해 $\operatorname{tr}(AB) = 0 + 0 = 0 = \operatorname{tr}(BA)$이다.

$BA$는 영행렬이고, [[matrix|행렬]]의 (1)과 [[real-number-arithmetic|(K9)]]에 의해 영행렬은 $0I_2$이다. [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (1)을 $c = 0$에 쓰면 $0I_2$와 닮은 $2 \times 2$ 행렬은 $0I_2$뿐이다. $AB$는 $(1, 2)$ 성분이 $1$이어서 영행렬이 아니므로 $AB$는 $BA$와 닮지 않았다. (1)과 어긋나지 않는다. $\det A = 1 \cdot 0 - 0 \cdot 0 = 0$이므로 $A$는 가역이 아니다([[determinant-and-invertibility|행렬식과 가역성]]의 (1)).
:::

:::exercise[모든 행렬과의 곱의 대각합이 0 인 행렬]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이라 하자.

1. 모든 $n \times n$ 행렬 $X$에서 $\operatorname{tr}(AX) = 0$이면 $A$가 영행렬임을 보여라.
2. $B$도 $n \times n$ 행렬이고 모든 $n \times n$ 행렬 $X$에서 $\operatorname{tr}(AX) = \operatorname{tr}(BX)$이면 $A = B$임을 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것이다. 그 (H7)은 길이가 $1$ 이상인 열에서 한 자리를 뺀 모든 항이 $0$이면 합이 그 자리의 항이라는 것이다.

**(1)** $j$, $k \in \{1, \dots, n\}$을 정하자. 각 $(p, q) \in \{1, \dots, n\} \times \{1, \dots, n\}$에 $(p, q) = (k, j)$이면 $1$, 그 밖에는 $0$을 대응시키면 [[real-function-space|(G)]]와 [[matrix|행렬]]의 (2)에 의해 그 수를 $(p, q)$ 성분으로 갖는 $n \times n$ 행렬 $X$가 하나 있다.

$i \in \{1, \dots, n\}$이라 하자. [[matrix-product|행렬의 곱]]의 (2)에 의해 $(AX)_{i,i}$는 $l$번째 항이 $a_{i,l} x_{l,i}$인 길이 $n$인 실수의 열의 합이다. $i \ne j$이면 모든 $l$에서 $(l, i) \ne (k, j)$이므로 $x_{l,i} = 0$이고, (K9)에 의해 모든 항이 $0$이어서 (H5)에 의해 $(AX)_{i,i} = 0$이다. $i = j$이면 $l \ne k$인 항은 $x_{l,j} = 0$이어서 $0$이고 $l = k$인 항은 (K4)에 의해 $a_{j,k} \cdot 1 = a_{j,k}$이므로, (H7)에 의해 $(AX)_{j,j} = a_{j,k}$이다.

[[trace|대각합]]의 정의에 의해 $\operatorname{tr}(AX)$는 $i$번째 항이 $(AX)_{i,i}$인 열의 합이고, 위에서 $i \ne j$인 항은 모두 $0$이므로 (H7)에 의해 $\operatorname{tr}(AX) = a_{j,k}$이다. 가정에 의해 $a_{j,k} = 0$이다. $j$, $k$는 아무것이나 정했으므로 $A$의 모든 성분이 $0$이고, 행렬의 (1)과 (2)에 의해 $A$는 영행렬이다.

**(2)** $X$가 $n \times n$ 행렬이라 하자. [[matrix-product-properties|행렬 곱의 성질]]의 (2)와 (3)에 의해 $(A - B)X = AX + (-B)X = AX + (-(BX)) = AX - BX$이다. 여기서 $-M = (-1)M$은 행렬의 (1), (2)와 (K9)에서 나온다. 대각합의 (1)과 (2)에 의해 $\operatorname{tr}\big((A - B)X\big) = \operatorname{tr}(AX) - \operatorname{tr}(BX) = 0$이다. (1)에 의해 $A - B$는 영행렬이고, 행렬의 (1)에 의해 모든 $j$, $k$에서 $a_{j,k} - b_{j,k} = 0$이므로 (K12)의 (v)에 의해 $a_{j,k} = b_{j,k}$이다. 행렬의 (2)에 의해 $A = B$이다.
:::

:::exercise[평면 위의 선형사상의 행렬식과 대각합]
$V = \{x \in \mathbb{R}^3 : x_1 + x_2 + x_3 = 0\}$이라 하고, $b_1 = (1, 0, -1)$, $b_2 = (0, 1, -1)$이라 하자. $P = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$이라 하자.

1. $V$가 $\mathbb{R}^3$의 부분공간이고 $\mathcal{B} = b_1, b_2$가 $V$의 기저임을 보여라. 따라서 $\dim V = 2$이다.
2. 각 $x \in V$에서 값이 $(x_2, x_3, x_1)$인 함수 $T : V \to V$가 잘 정해진 선형사상임을 보이고, $[T]_{\mathcal{B}}$, $\det T$, $\operatorname{tr} T$를 구하라.
3. $S = T_P : \mathbb{R}^3 \to \mathbb{R}^3$의 행렬식과 대각합을 구하고, 모든 $x \in \mathbb{R}^3$에서 $Sx = (x_2, x_3, x_1)$임을 보여라. $S$와 $T$의 행렬식과 대각합을 비교하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, $\mathbb{R}^3$의 덧셈과 스칼라배는 [[real-function-space|실숫값 함수의 공간]]의 값마다의 연산이다.

**(1)** [[subspace|부분공간]]의 (S1)–(S3)을 확인한다. $0 + 0 + 0 = 0$이므로 $0 \in V$이다. $x$, $y \in V$이고 $\alpha$가 실수이면 (K1), (K2)에 의해 $(x_1 + y_1) + (x_2 + y_2) + (x_3 + y_3) = (x_1 + x_2 + x_3) + (y_1 + y_2 + y_3) = 0 + 0 = 0$이고, (K3)과 (K9)에 의해 $\alpha x_1 + \alpha x_2 + \alpha x_3 = \alpha(x_1 + x_2 + x_3) = \alpha \cdot 0 = 0$이다. 따라서 $V$는 부분공간이고, 부분공간의 (P1)에 의해 제한한 연산으로 벡터공간이다.

$1 + 0 + (-1) = 0$, $0 + 1 + (-1) = 0$이므로 $b_1$, $b_2 \in V$이다. 실수 $\alpha$, $\beta$에 대하여 $\alpha b_1 + \beta b_2 = (\alpha,\ \beta,\ -\alpha - \beta)$이다.

- (생성) $x \in V$이면 $x_3 = -(x_1 + x_2)$이다((K8)의 (ii)). $\alpha = x_1$, $\beta = x_2$로 두면 (K12)의 (iv)에 의해 $\alpha b_1 + \beta b_2 = (x_1,\ x_2,\ -(x_1 + x_2)) = (x_1, x_2, x_3) = x$이다.
- (일차독립) $\alpha b_1 + \beta b_2 = 0$이면 첫째 값과 둘째 값에서 $\alpha = 0$, $\beta = 0$이다.

[[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 $\mathcal{B}$는 $V$의 기저이고, [[dimension|유한차원과 차원]]의 (2)에 의해 $\dim V = 2$이다.

**(2)** $x \in V$이면 (K1), (K2)에 의해 $x_2 + x_3 + x_1 = x_1 + x_2 + x_3 = 0$이므로 $(x_2, x_3, x_1) \in V$이다. 따라서 $T$는 $V$에서 $V$로의 함수이다. $V$의 연산은 $\mathbb{R}^3$의 것을 제한한 것이므로, $x$, $y \in V$와 실수 $\alpha$에서 $T(x + y) = (x_2 + y_2,\ x_3 + y_3,\ x_1 + y_1) = Tx + Ty$이고 $T(\alpha x) = (\alpha x_2,\ \alpha x_3,\ \alpha x_1) = \alpha Tx$이다. [[linear-map|선형사상]]의 정의에 의해 $T$는 선형사상이다.

$Tb_1 = (0, -1, 1) = 0b_1 + (-1)b_2$이다($(-1)b_2 = (0, -1, 1)$). $Tb_2 = (1, -1, 0)$이고 $1b_1 + (-1)b_2 = (1, 0, -1) + (0, -1, 1) = (1, -1, 0)$이므로 $Tb_2 = 1b_1 + (-1)b_2$이다. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (1)과 (2)에 의해 $[T]_{\mathcal{B}}$의 첫째 열은 $[Tb_1]_{\mathcal{B}} = (0, -1)$, 둘째 열은 $[Tb_2]_{\mathcal{B}} = (1, -1)$이므로

$$
[T]_{\mathcal{B}} = \begin{pmatrix} 0 & 1 \\ -1 & -1 \end{pmatrix}
$$

이다. $\dim V = 2 \ge 1$이므로 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]의 정의에 의해 $\det T = \det [T]_{\mathcal{B}}$, $\operatorname{tr} T = \operatorname{tr} [T]_{\mathcal{B}}$이다. [[determinant|행렬식]]의 (4)에 의해 $\det T = 0 \cdot (-1) - (-1) \cdot 1 = 1$이고, [[trace|대각합]]의 정의에 의해 $\operatorname{tr} T = 0 + (-1) = -1$이다.

**(3)** [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Px = x_1(0, 0, 1) + x_2(1, 0, 0) + x_3(0, 1, 0) = (x_2, x_3, x_1)$이므로 모든 $x \in \mathbb{R}^3$에서 $Sx = (x_2, x_3, x_1)$이다. 선형사상의 행렬식과 대각합의 (2)에 의해 $\det S = \det P$, $\operatorname{tr} S = \operatorname{tr} P$이다. $P$의 첫째 열에서 $0$이 아닌 성분은 $p_{3,1} = 1$뿐이므로 행렬식의 (3)의 첫째 열 전개에서 셋째 항만 남고, [[minor-matrix|소행렬]]의 (2)에 의해 $P^{(3,1)}$은 $P$의 첫째·둘째 행의 둘째·셋째 성분으로 된 $I_2$이다. 따라서 $\det P = (-1)^{3+1} \cdot 1 \cdot \det I_2 = 1$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (5)와 행렬식의 (1)의 (iii)). 대각합은 $\operatorname{tr} P = 0 + 0 + 0 = 0$이다.

정리하면 $\det S = \det T = 1$이지만 $\operatorname{tr} S = 0$, $\operatorname{tr} T = -1$이다. $T$의 값은 $S$의 값과 같은 식으로 주어지지만, $T$는 $2$차원 공간 $V$ 위의 선형사상이고 $S$는 $\mathbb{R}^3$ 위의 선형사상이어서 서로 다른 사상이다. 이 예에서는 대각합이 서로 다르다.
:::
