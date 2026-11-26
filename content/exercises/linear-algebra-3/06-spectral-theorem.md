---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절, 연습문제 6.1, 6.6 (p.150); 6장 2절, 연습문제 2.1 h), 2.4 (p.169); 5장 3절, 연습문제 3.8 (p.134); 5장 5절, 연습문제 5.6 (p.146); 6장 4.2절, 작용소 노름과 프로베니우스 노름의 비교 (p.182); 7장 4.2절, 따름정리 4.4 (p.212)"
added: 2026-11-26
---

:::exercise[대각성분이 같은 2 × 2 대칭행렬의 직교 대각화]
$a$, $b$가 실수이고

$$
A = \begin{pmatrix} a & b \\ b & a \end{pmatrix}
$$

라 하자. $\mathbb{R}^2$에는 표준내적을 준다.

1. $a$와 $b$에 상관없는 직교행렬 $Q$로 $A = QDQ^T$인 대각행렬 $D$를 구하라.
2. $A$의 고윳값을 모두 구하라.
3. $b \ne 0$이면, (1)의 $D$로 $A = Q' D Q'^T$인 직교행렬 $Q'$은 첫째 열이 $(\sqrt{2})^{-1}(1, 1)$이나 그 $-1$배이고 둘째 열이 $(\sqrt{2})^{-1}(1, -1)$이나 그 $-1$배인 네 행렬뿐임을 보여라. $b = 0$이면 어떤가?
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, $\sqrt{2}$는 [[square-root-exists|제곱근의 존재]]의 (1)의 것이다. $A$는 $(1, 2)$ 성분과 $(2, 1)$ 성분이 같으므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (7)에 의해 대칭행렬이다.

**(1)** [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $A(1, 1) = (a + b, a + b) = (a + b)(1, 1)$이고 $A(1, -1) = (a - b, b - a) = (a - b)(1, -1)$이다. $u_1 = (\sqrt{2})^{-1}(1, 1)$, $u_2 = (\sqrt{2})^{-1}(1, -1)$로 두면 행렬과 벡터의 곱의 (2)에 의해 $Au_1 = (a + b)u_1$, $Au_2 = (a - b)u_2$이다. (K12)의 (vi)에 의해 $(\sqrt{2})^{-1}(\sqrt{2})^{-1} = (\sqrt{2}\sqrt{2})^{-1} = 2^{-1}$이므로 [[standard-inner-product|ℝⁿ 의 표준내적]]으로 $\langle u_1, u_1 \rangle = \langle u_2, u_2 \rangle = 2^{-1}(1 + 1) = 1$, $\langle u_1, u_2 \rangle = 2^{-1}(1 - 1) = 0$이다. 곧 $u_1, u_2$는 길이 $2$인 정규직교 열이고, $\dim \mathbb{R}^2 = 2$이므로 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 $\mathbb{R}^2$의 정규직교 기저이다. [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 (4)의 (ii)에 의해

$$
\begin{aligned}
Q &= \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \\
D &= \operatorname{diag}(a + b,\ a - b)
\end{aligned}
$$

에 대하여 $Q$는 직교행렬이고 $A = QDQ^T$이다. $Q$는 $a$, $b$에 따라 바뀌지 않는다.

**(2)** [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)와 [[orthogonal-matrix|직교행렬]]의 정의 $Q^T Q = I_2$에 의해 $Q^T A Q = (Q^T Q) D (Q^T Q) = D$이고, 정규직교 기저의 변환과 직교 닮음의 (3)에 의해 $A$와 $D$는 닮았다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)에 의해 두 행렬의 고윳값은 같고, [[diagonalizable|대각화 가능]]의 (4)에 의해 $D$의 고윳값은 정확히 $a + b$와 $a - b$이다. 따라서 $A$의 고윳값은 정확히 $a + b$와 $a - b$이다. $b = 0$이면 두 수가 같아 고윳값은 $a$ 하나이다.

**(3)** $b \ne 0$이라 하자. 그러면 $a + b \ne a - b$이다($a + b = a - b$이면 $2b = 0$이어서 (K10)에 의해 $b = 0$). $Q'$이 직교행렬이고 $A = Q'DQ'^T$이면, 정규직교 기저의 변환과 직교 닮음의 (4)의 (i)에 의해 $Q'$의 첫째 열 $\mathbf{q}'_1$은 $a + b$에 속하는 $A$의 고유벡터이고 둘째 열 $\mathbf{q}'_2$는 $a - b$에 속하는 고유벡터이며, 두 열은 단위벡터이다.

*$a + b$의 고유공간.* 행 규칙에 의해 $Ax = (a + b)x$인 것은 정확히 $ax_1 + bx_2 = (a + b)x_1$이고 $bx_1 + ax_2 = (a + b)x_2$일 때, 곧 $b(x_2 - x_1) = 0$이고 $b(x_1 - x_2) = 0$일 때이다. $b \ne 0$이므로 (K10)에 의해 이것은 정확히 $x_1 = x_2$일 때이고, 그런 $x$는 $x_1(1, 1) = (\sqrt{2}x_1)u_1$이다. 따라서 $\mathbf{q}'_1 = cu_1$인 실수 $c$가 있고, [[norm-in-inner-product-space|내적공간의 노름]]의 (3)에 의해 $1 = \lVert cu_1 \rVert = |c|$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $c = 1$이거나 $c = -1$이다.

*$a - b$의 고유공간.* 같은 방법으로 $Ax = (a - b)x$인 것은 정확히 $b(x_1 + x_2) = 0$, 곧 $x_2 = -x_1$일 때이고, $\mathbf{q}'_2 = \pm u_2$이다.

거꾸로 $\pm u_1$, $\pm u_2$는 단위 고유벡터이고 $\langle \pm u_1, \pm u_2 \rangle = \pm\langle u_1, u_2 \rangle = 0$이므로, (1)과 같이 정규직교 기저의 변환과 직교 닮음의 (4)의 (ii)에 의해 이 네 행렬은 모두 $A = Q'DQ'^T$를 만족한다. 따라서 그런 $Q'$은 정확히 이 네 행렬이다.

$b = 0$이면 $A = aI_2$이고 $D = aI_2$이므로, 행렬 곱의 성질의 (3), (4)에 의해 모든 $2 \times 2$ 직교행렬 $Q'$에서 $Q'DQ'^T = a(Q'Q'^T) = aI_2 = A$이다(직교행렬의 (2)의 (나)). 곧 $b = 0$이면 $Q'$은 아무 직교행렬이어도 되고, 하나로 정해지지 않는다.
:::

:::exercise[세 번 곱하면 영행렬이 되는 대칭행렬]
$n$이 자연수이고 $A$가 $n \times n$ 대칭행렬이며 $A(AA)$가 영행렬이라 하자. $A$가 영행렬임을 증명하라. 또 대칭이라는 가정을 빼면 결론이 성립하지 않을 수 있음을 예로 보여라.
:::

:::solution
$O$를 $n \times n$ 영행렬이라 하자. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

*$A$의 고윳값은 $0$뿐이다.* $\lambda$가 $A$의 고윳값이고 $v$가 $\lambda$에 속하는 고유벡터라 하자([[eigenvalue-and-eigenvector|고윳값과 고유벡터]]). [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해

$$
\begin{aligned}
\bigl(A(AA)\bigr)v &= A\bigl(A(Av)\bigr) \\
&= A\bigl(A(\lambda v)\bigr) \\
&= \lambda\bigl(A(Av)\bigr) \\
&= \lambda\bigl(\lambda(\lambda v)\bigr) \\
&= \bigl((\lambda\lambda)\lambda\bigr) v
\end{aligned}
$$

이다(마지막은 [[vector-space|벡터공간]]의 (V6)). 한편 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B3)에 의해 $O = 0A$이므로 행렬과 벡터의 곱의 (4)와 (B3)에 의해 $Ov = 0(Av) = 0$이다. 따라서 $((\lambda\lambda)\lambda)v = 0$이고 $v \ne 0$이므로 (B6)에 의해 $(\lambda\lambda)\lambda = 0$이다. (K10)을 두 번 쓰면 $\lambda = 0$이다.

*$A = O$이다.* [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (1)에 의해 $A$에는 고윳값이 있고, 방금 보인 것에 의해 그것은 $0$이다. 곧 $A$의 고윳값은 정확히 $0$ 하나이다. 대칭행렬의 실고윳값의 (4)의 마지막 문장에 의해 $A = cI_n$인 실수 $c$가 있다. [[diagonalizable|대각화 가능]]의 (4)에 의해 $c$는 $cI_n = \operatorname{diag}(c, \dots, c)$의 고윳값, 곧 $A$의 고윳값이므로 $c = 0$이다. (B3)에 의해 $A = 0I_n = O$이다.

*대칭이 아니면.* $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 행렬의 곱의 (2)로 $NN = O$이고, 따라서 $N(NN) = NO = O$이지만 $N \ne O$이다. $N$의 $(1, 2)$ 성분과 $(2, 1)$ 성분이 달라 $N$은 대칭이 아니다.
:::

:::exercise[대칭행렬의 프로베니우스 노름과 고윳값]
$n$이 자연수이고 $A$가 $n \times n$ 대칭행렬이며, $Q$가 직교행렬이고 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이며 $A = QDQ^T$라 하자.

1. $\lVert A \rVert_F^2 = \lambda_1^2 + \cdots + \lambda_n^2$임을 증명하라.
2. $A$의 모든 고윳값이 $1$이거나 $-1$이면 $\lVert A \rVert_F^2 = n$임을 보여라.
3. $B = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$의 고윳값은 정확히 $1$과 $-1$이지만 $\lVert B \rVert_F^2 \ne 2$임을 보이고, (2)와 어긋나지 않는 까닭을 말하라.
:::

:::solution
프로베니우스 노름 $\lVert \cdot \rVert_F$는 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 것이고, 그 (1)에 의해 $\lVert M \rVert_F^2 = \operatorname{tr}(M^T M)$이다. 대각행렬과 $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것이다.

**(1)** [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)와 [[orthogonal-matrix|직교행렬]]의 정의 $Q^T Q = I_n$에 의해

$$
\begin{aligned}
Q^T A Q &= (Q^T Q) D (Q^T Q) \\
&= I_n D I_n = D
\end{aligned}
$$

이다. [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 (3)을 $B = Q^T A Q = D$에 쓰면 $\operatorname{tr}(D^T D) = \operatorname{tr}(A^T A)$이다. [[transpose|전치행렬]]의 정의에 의해 $D^T$의 $(k, j)$ 성분은 $d_{j,k}$이고, $j \ne k$이면 두 성분이 모두 $0$이므로 [[matrix|행렬]]의 (2)에 의해 $D^T = D$이다. 대각화 가능의 (3)에 의해 $D^T D = DD = \operatorname{diag}(\lambda_1 \lambda_1, \dots, \lambda_n \lambda_n)$이고, [[trace|대각합]]의 정의와 대각화 가능의 (1)에 의해 그 대각합은 $\lambda_1 \lambda_1 + \cdots + \lambda_n \lambda_n$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $\lambda_k \lambda_k = \lambda_k^2$이므로 $\lVert A \rVert_F^2 = \operatorname{tr}(A^T A) = \lambda_1^2 + \cdots + \lambda_n^2$이다.

**(2)** [[spectral-theorem|실스펙트럼 정리]]의 (3)의 마지막 문장에 의해 모든 $\lambda_k$는 $A$의 고윳값이므로 $1$이거나 $-1$이고, [[real-number-arithmetic|(K4)]]와 (K12)의 (iii)에 의해 $\lambda_k \lambda_k = 1$이다. 따라서 (1)의 계산에서 $DD = \operatorname{diag}(1, \dots, 1) = I_n$이고(행렬의 (6)), 대각합의 (4)에 의해 $\lVert A \rVert_F^2 = \operatorname{tr} I_n = n$이다.

**(3)** $B$는 위삼각행렬이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 고윳값은 정확히 대각성분 $1$과 $-1$이다. 행렬과 벡터의 곱의 어림의 (1)에 의해 $\lVert B \rVert_F^2$은 열과 자기 자신의 내적의 합 $\langle (1, 0), (1, 0) \rangle + \langle (2, -1), (2, -1) \rangle = 1 + 5 = 6$이고 $6 \ne 2$이다. $B$의 $(1, 2)$ 성분 $2$와 $(2, 1)$ 성분 $0$이 달라 $B$는 대칭이 아니므로 (2)의 가정을 만족하지 않는다. (1)과 (2)에는 $A$가 대칭이어서 $A = QDQ^T$로 쓸 수 있다는 것이 필요하다.

문제 1의 $A = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$에서 (1)은 $a^2 + b^2 + b^2 + a^2 = (a + b)^2 + (a - b)^2$이고, 펼쳐 보면 두 변이 모두 $2a^2 + 2b^2$이다.
:::

:::exercise[대각성분이 모두 0 인 대칭행렬의 고윳값]
$n$이 자연수이고 $A$가 영행렬이 아닌 $n \times n$ 대칭행렬이며 모든 대각성분이 $0$이라 하자. $A$가 양수인 고윳값과 음수인 고윳값을 모두 가짐을 증명하라. 또 대칭이라는 가정을 빼면 결론이 성립하지 않을 수 있음을 예로 보여라.
:::

:::solution
레일리 몫 $\rho_A$와 $\mathcal{R}_A$는 [[rayleigh-quotient|레일리 몫]]의 것이다. 순서는 [[order-properties-of-reals|실수의 순서의 성질]]로 다룬다.

*$0 < \sup \mathcal{R}_A$이다.* 레일리 몫의 (2)에 의해 $\rho_A(e_1) = a_{1,1} = 0$이므로 $0 \in \mathcal{R}_A$이고, 상한은 상계이므로 $0 \le \sup \mathcal{R}_A$이다. 귀류법으로 $\sup \mathcal{R}_A \le 0$이라 하자(실수의 순서의 성질의 (1)의 (iii)). 레일리 몫의 (3)에 의해 모든 $x$에서 $\langle Ax, x \rangle \le (\sup \mathcal{R}_A)\langle x, x \rangle$이고, $0 \le \langle x, x \rangle$이므로 실수의 순서의 성질의 (4)의 (iv)에 의해 오른쪽은 $0$ 이하이다. 곧 모든 $x$에서 $\langle Ax, x \rangle \le 0$이다.

$B = -A$라 하자. 레일리 몫의 (4)에 의해 $B$는 대칭행렬이고 $Bx = -(Ax)$이므로, [[inner-product-space|내적과 내적공간]]의 (2)에 의해 $\langle Bx, x \rangle = -\langle Ax, x \rangle$이며 실수의 순서의 성질의 (3)의 (ii)에 의해 모든 $x$에서 $0 \le \langle Bx, x \rangle$이다. 모든 $k$에서 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)과 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle Ae_k, e_k \rangle$는 $A$의 $k$번째 열의 $k$번째 값 $a_{k,k}$이므로 $\langle Be_k, e_k \rangle = -a_{k,k} = 0$이고, [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]의 (2)에 의해 $Be_k = 0$이다. 행렬과 벡터의 곱의 (3)에 의해 $Be_k$는 $B$의 $k$번째 열이므로 $B$의 모든 열이 영벡터이고, [[matrix|행렬]]의 (3)에 의해 $B$는 영행렬이다. 그러면 $A = -B$도 영행렬이어서 가정에 어긋난다. 따라서 $0 < \sup \mathcal{R}_A$이다.

*$\inf \mathcal{R}_A < 0$이다.* $-A$도 영행렬이 아닌 대칭행렬이고 대각성분이 $-0 = 0$이므로, 방금 보인 것을 $-A$에 쓰면 $0 < \sup \mathcal{R}_{-A}$이다. 레일리 몫의 (4)에 의해 $\sup \mathcal{R}_{-A} = -\inf \mathcal{R}_A$이므로 실수의 순서의 성질의 (3)의 (ii)에 의해 $\inf \mathcal{R}_A < 0$이다.

[[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (1)과 (3)에 의해 $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$는 $A$의 고윳값이므로, $A$는 양수인 고윳값 $\sup \mathcal{R}_A$와 음수인 고윳값 $\inf \mathcal{R}_A$를 갖는다.

*대칭이 아니면.* $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$은 대각성분이 모두 $0$이고 영행렬이 아니지만 $(1, 2)$ 성분과 $(2, 1)$ 성분이 달라 대칭이 아니다. $N$은 위삼각행렬이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 고윳값은 $0$ 하나뿐이고, 양수인 고윳값도 음수인 고윳값도 없다.

영행렬이 아니라는 가정은 귀류법의 모순에 쓰였다. $n \times n$ 영행렬은 대각성분이 모두 $0$이지만 고윳값이 $0$ 하나뿐이다. 또 $n = 1$이면 대각성분이 $0$인 행렬은 영행렬뿐이므로, 이 문제의 행렬은 $n \ge 2$일 때만 있다.
:::

:::exercise[고윳값이 0 과 1 뿐인 대칭행렬]
$n$이 자연수이고 $A$가 $n \times n$ 대칭행렬이라 하자. $\mathbb{R}^n$에는 표준내적을 준다. 다음 세 조건이 서로 같음을 증명하라.

- (가) $A$의 모든 고윳값은 $0$이거나 $1$이다.
- (나) $AA = A$이다.
- (다) $\mathbb{R}^n$의 어떤 부분공간 $E$에서 $A = [\operatorname{proj}_E]$이다.
:::

:::solution
$\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것이고 $[\ ]$는 [[matrix-of-a-linear-map|선형사상의 행렬]]이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

*(나)와 (다)는 같다.* $A$가 대칭이므로 [[orthogonal-projection-is-self-adjoint|자기수반 멱등사상과 직교사영]]의 (4)에 의해, 어떤 부분공간 $E$에서 $A = [\operatorname{proj}_E]$인 것은 정확히 $AA = A$일 때이다.

*(가)이면 (나).* [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $A = QDQ^T$인 직교행렬 $Q$와 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이 있고([[diagonalizable|대각화 가능]]의 (1)), 같은 (3)에 의해 모든 $\lambda_k$는 $A$의 고윳값이므로 $0$이거나 $1$이다. (K9)에 의해 $0 \cdot 0 = 0$이고 (K4)에 의해 $1 \cdot 1 = 1$이므로 어느 쪽이든 $\lambda_k \lambda_k = \lambda_k$이고, 대각화 가능의 (3)에 의해 $DD = \operatorname{diag}(\lambda_1\lambda_1, \dots, \lambda_n\lambda_n) = D$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)와 $Q^T Q = I_n$([[orthogonal-matrix|직교행렬]]의 정의)에 의해

$$
\begin{aligned}
AA &= QD(Q^T Q)DQ^T \\
&= Q(DD)Q^T \\
&= QDQ^T = A
\end{aligned}
$$

이다.

*(나)이면 (가).* $\mu$가 $A$의 고윳값이고 $v$가 $\mu$에 속하는 고유벡터라 하자([[eigenvalue-and-eigenvector|고윳값과 고유벡터]]). [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2), [[vector-space|벡터공간]]의 (V6)에 의해 $(AA)v = A(\mu v) = \mu(Av) = (\mu\mu)v$이고, (나)에 의해 $(AA)v = Av = \mu v$이다. [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B11)과 (B12)에 의해 $(\mu\mu - \mu)v = (\mu\mu)v - \mu v = 0$이고, $v \ne 0$이므로 (B6)에 의해 $\mu\mu - \mu = 0$이다. $\mu\mu - \mu = \mu(\mu - 1)$이므로 (K10)과 (K12)의 (v)에 의해 $\mu = 0$이거나 $\mu = 1$이다.

세 조건 가운데 실스펙트럼 정리가 쓰인 곳은 (가)에서 (나)로 가는 길뿐이다. 예컨대 $A = I_n$은 고윳값이 $1$뿐이고 $E = \mathbb{R}^n$이며, 영행렬은 고윳값이 $0$뿐이고 $E = \{0\}$이다(직교사영의 (6)).
:::

:::exercise[두 자리만 쓰는 벡터로 가장 큰 고윳값을 아래에서 어림하기]
$n \ge 2$가 정수이고 $A$가 $n \times n$ 대칭행렬이며, $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$라 하자.

$$
B = \begin{pmatrix} a_{j,j} & a_{j,k} \\ a_{j,k} & a_{k,k} \end{pmatrix}
$$

로 둔다.

1. $\mathcal{R}_B \subseteq \mathcal{R}_A$임을 보여라.
2. $s = a_{j,j} + a_{k,k}$, $d = (a_{j,j} - a_{k,k})^2 + 4a_{j,k}^2$으로 두면 $0 \le d$이고, $A$의 가장 큰 고윳값이 $2^{-1}(s + \sqrt{d})$ 이상임을 증명하라.
3. 대각성분이 모두 $1$이고 $(1, 3)$ 성분과 $(3, 1)$ 성분이 $4$이며 나머지 성분이 $0$인 $3 \times 3$ 행렬에 (2)를 써서 가장 큰 고윳값을 아래에서 어림하라.
:::

:::solution
$\mathcal{R}$과 $\rho$는 [[rayleigh-quotient|레일리 몫]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다. $B$는 $(1, 2)$ 성분과 $(2, 1)$ 성분이 같으므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (7)에 의해 대칭행렬이다.

**(1)** 첫째 열이 $e_j$, 둘째 열이 $e_k$인 $n \times 2$ 행렬을 $S$라 하자([[matrix|행렬]]의 (4)). $y \in \mathbb{R}^2$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Sy = y_1 e_j + y_2 e_k$이고, 이것은 $j$에서의 값이 $y_1$, $k$에서의 값이 $y_2$, 나머지 자리의 값이 $0$인 벡터이다($j \ne k$). 따라서 [[standard-inner-product|ℝⁿ 의 표준내적]]의 정의에 의해 $\langle Sy, Sy \rangle = y_1 y_1 + y_2 y_2 = \langle y, y \rangle$이고, $y \ne 0$이면 $Sy \ne 0$이다.

또 $A(Sy) = y_1 Ae_j + y_2 Ae_k$이고(행렬과 벡터의 곱의 (2)), 행렬과 벡터의 곱의 (3)에 의해 $Ae_j$, $Ae_k$는 $A$의 $j$번째 열과 $k$번째 열이다. 표준내적의 (2)와 [[inner-product-space|내적과 내적공간]]의 (1)에 의해 $\langle A(Sy), Sy \rangle$는 $A(Sy)$의 $j$에서의 값의 $y_1$배와 $k$에서의 값의 $y_2$배의 합이므로

$$
\begin{aligned}
&\langle A(Sy), Sy \rangle \\
&= (y_1 a_{j,j} + y_2 a_{j,k})y_1 \\
&\quad + (y_1 a_{k,j} + y_2 a_{k,k})y_2
\end{aligned}
$$

이다. $A$가 대칭이므로 $a_{k,j} = a_{j,k}$이고, 행 규칙으로 $By = (a_{j,j}y_1 + a_{j,k}y_2,\ a_{j,k}y_1 + a_{k,k}y_2)$이므로 이것은 $\langle By, y \rangle$와 같다. 따라서 $y \ne 0$이면

$$
\begin{aligned}
\rho_B(y) &= \langle By, y \rangle \langle y, y \rangle^{-1} \\
&= \langle A(Sy), Sy \rangle \langle Sy, Sy \rangle^{-1} \\
&= \rho_A(Sy)
\end{aligned}
$$

이고, $Sy \ne 0$이므로 $\rho_B(y) \in \mathcal{R}_A$이다. 곧 $\mathcal{R}_B \subseteq \mathcal{R}_A$이다.

**(2)** 레일리 몫의 (3)에 의해 $\sup \mathcal{R}_A$는 $\mathcal{R}_A$의 상계이고, (1)에 의해 $\mathcal{R}_B$의 상계이기도 하다. [[upper-bound-and-supremum|상계와 상한]]의 상한의 정의에 의해 $\sup \mathcal{R}_B \le \sup \mathcal{R}_A$이다. [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (1)과 (2)에 의해 $\sup \mathcal{R}_A$는 $A$의 가장 큰 고윳값이고 $\sup \mathcal{R}_B$는 $B$의 가장 큰 고윳값이다.

$B$의 가장 큰 고윳값을 구하자. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (5)에 의해 $\operatorname{disc} B = (a_{j,j} - a_{k,k})^2 + 4a_{j,k}^2 = d$이고 $0 \le d$이며, $\operatorname{tr} B = a_{j,j} + a_{k,k} = s$이다. $\lambda_1 = 2^{-1}(s + \sqrt{d})$라 하자.

- $0 < \operatorname{disc} B$이면 그 항목의 (4)에 의해 $B$의 고윳값은 정확히 $\lambda_1$과 $\lambda_2 = 2^{-1}(\operatorname{tr} B - \sqrt{\operatorname{disc} B})$이고, [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $0 < \sqrt{\operatorname{disc} B}$이므로 $\lambda_2 < \lambda_1$이다. 따라서 $B$의 가장 큰 고윳값은 $\lambda_1$이다.
- $\operatorname{disc} B = 0$이면 그 항목의 (3)에 의해 $B$의 고윳값은 $h = 2^{-1}\operatorname{tr} B$ 하나뿐이고, $\sqrt{0} = 0$이므로 $\lambda_1 = h$이다.

어느 경우든 $\sup \mathcal{R}_B = \lambda_1$이므로 $A$의 가장 큰 고윳값 $\sup \mathcal{R}_A$는 $\lambda_1$ 이상이다.

**(3)** 그 행렬을 $A$라 하면 대칭이고, $j = 1$, $k = 3$으로 두면 $a_{1,1} = a_{3,3} = 1$, $a_{1,3} = 4$이므로 $s = 2$, $d = 0 + 64 = 64$이므로 (2)의 수는 $2^{-1}(2 + \sqrt{64}) = 2^{-1}(2 + 8) = 5$이다($8 \cdot 8 = 64$이고 $0 \le 8$이므로 제곱근의 존재의 (1)에 의해 $\sqrt{64} = 8$). 따라서 $A$의 가장 큰 고윳값은 $5$ 이상이다. 대각성분으로 얻는 어림은 레일리 몫의 (2)에 의한 $1$ 이상이다. 실제로 행 규칙으로 $A(1, 0, 1) = (5, 0, 5)$이므로 $5$는 $A$의 고윳값이다.
:::
