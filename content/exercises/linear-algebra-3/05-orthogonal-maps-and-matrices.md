---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 3절, 연습문제 3.3 (p.133); 5장 6절, 연습문제 6.9의 힌트 (p.151); 6장 5절, 정리 5.1의 증명 (p.189)"
added: 2026-11-26
---

:::exercise[두 열이 주어진 3 × 3 직교행렬을 완성하기]
$\mathbb{R}^3$에 표준내적을 주고

$$
\begin{aligned}
u_1 &= 9^{-1}(1, 4, 8), \\
u_2 &= 9^{-1}(4, 7, -4)
\end{aligned}
$$

라 하자. $c \in \mathbb{R}^3$에 대하여 열이 차례로 $u_1$, $u_2$, $c$인 $3 \times 3$ 행렬을 $Q_c$라 한다.

1. $Q_c$가 직교행렬이 되는 $c$를 모두 구하라.
2. (1)에서 구한 $c$마다 $\det Q_c$를 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. $c = (c_1, c_2, c_3)$으로 쓴다.

**(1)** [[orthogonal-matrix|직교행렬]]의 (2)의 (가)와 (라)에 의해 $Q_c$가 직교행렬인 것은 정확히 $u_1, u_2, c$가 $\mathbb{R}^3$의 정규직교 열일 때이다. [[orthonormal-list|직교하는 열과 정규직교 열]]의 정의와 [[inner-product-space|내적과 내적공간]]의 조건 (i)에 의해 이것은 정확히 다음 여섯 등식이 성립할 때이다.

$$
\begin{aligned}
&\langle u_1, u_1 \rangle = \langle u_2, u_2 \rangle = 1, \\
&\langle u_1, u_2 \rangle = 0, \\
&\langle c, u_1 \rangle = \langle c, u_2 \rangle = 0, \\
&\langle c, c \rangle = 1
\end{aligned}
$$

[[standard-inner-product|ℝⁿ 의 표준내적]]의 정의와 내적과 내적공간의 (1)로 계산하면 $\langle u_1, u_1 \rangle = 81^{-1}(1 + 16 + 64) = 1$, $\langle u_2, u_2 \rangle = 81^{-1}(16 + 49 + 16) = 1$, $\langle u_1, u_2 \rangle = 81^{-1}(4 + 28 - 32) = 0$이므로 처음 세 등식은 늘 성립한다.

*넷째와 다섯째 등식.* $\langle c, u_1 \rangle = 9^{-1}(c_1 + 4c_2 + 8c_3)$이고 $9^{-1} \ne 0$이므로 (K9)와 (K10)에 의해 $\langle c, u_1 \rangle = 0$인 것은 정확히 $c_1 + 4c_2 + 8c_3 = 0$일 때이다. 같은 까닭으로 $\langle c, u_2 \rangle = 0$인 것은 정확히 $4c_1 + 7c_2 - 4c_3 = 0$일 때이다. 첫째 식에서 $c_1 = -4c_2 - 8c_3$이고, 이것을 둘째 식에 넣으면 $-16c_2 - 32c_3 + 7c_2 - 4c_3 = -9c_2 - 36c_3 = 0$이므로 (K11)에 의해 $c_2 = -4c_3$이며, 그러면 $c_1 = 16c_3 - 8c_3 = 8c_3$이다. 거꾸로 $s$가 실수이고 $c = s(8, -4, 1)$이면 $c_1 + 4c_2 + 8c_3 = s(8 - 16 + 8) = 0$, $4c_1 + 7c_2 - 4c_3 = s(32 - 28 - 4) = 0$이다. 따라서 두 등식이 성립하는 것은 정확히 어떤 실수 $s$로 $c = s(8, -4, 1)$일 때이다(그때 $s = c_3$).

*여섯째 등식.* $c = s(8, -4, 1)$이면 $\langle c, c \rangle = (ss)(64 + 16 + 1) = 81\,ss$이므로, $\langle c, c \rangle = 1$인 것은 정확히 $ss = 81^{-1}$일 때이다. $(s - 9^{-1})(s + 9^{-1}) = ss - 81^{-1}$이므로 (K12)의 (v)와 (K10)에 의해 이것은 정확히 $s = 9^{-1}$이거나 $s = -9^{-1}$일 때이다.

따라서 $Q_c$가 직교행렬인 것은 정확히 $c = 9^{-1}(8, -4, 1)$이거나 $c = -9^{-1}(8, -4, 1)$일 때이고, 그런 $c$는 이 둘뿐이다.

**(2)** $c_+ = 9^{-1}(8, -4, 1)$, $c_- = -c_+$로 두자. $Q_{c_+}$는 $M = \begin{pmatrix} 1 & 4 & 8 \\ 4 & 7 & -4 \\ 8 & -4 & 1 \end{pmatrix}$의 $9^{-1}$배이다. 두 행렬의 열이 차례로 같기 때문이다([[matrix|행렬]]의 (3), (5)). [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식으로

$$
\begin{aligned}
\det M &= 1\bigl(7 \cdot 1 - (-4)(-4)\bigr) \\
&\quad - 4\bigl(4 \cdot 1 - (-4) \cdot 8\bigr) \\
&\quad + 8\bigl(4 \cdot (-4) - 7 \cdot 8\bigr) \\
&= -9 - 144 - 576 = -729
\end{aligned}
$$

이고, [[determinant-of-product|곱의 행렬식]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $\det Q_{c_+} = (9^{-1})^3 \det M = (729)^{-1}(-729) = -1$이다. $Q_{c_-}$는 셋째 열을 뺀 모든 열에서 $Q_{c_+}$와 같고 셋째 열이 $(-1)c_+$이므로, [[determinant-of-transpose|전치행렬의 행렬식]]의 (5)의 (b)에 의해 $\det Q_{c_-} = (-1)\det Q_{c_+} = 1$이다. 두 값은 직교행렬의 (5)대로 $1$이거나 $-1$이다.
:::

:::exercise[위삼각행렬인 직교행렬]
$n$이 자연수이고 $Q$가 위삼각행렬인 $n \times n$ 직교행렬이라 하자.

1. $Q$는 대각행렬이고 모든 대각성분이 $1$이거나 $-1$임을 증명하라.
2. 거꾸로 대각성분이 모두 $1$이거나 $-1$인 $n \times n$ 대각행렬은 직교행렬임을 보여라.
3. 아래삼각행렬인 $n \times n$ 직교행렬도 (1)의 결론을 만족함을 보여라.
:::

:::solution
위삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 것이고, 대각행렬과 $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것이다. $Q$의 $k$번째 열을 $\mathbf{q}_k$라 하면 [[matrix|행렬]]에 의해 $\mathbf{q}_k$의 $j$에서의 값은 $q_{j,k}$이고, 위삼각이므로 $j > k$이면 $q_{j,k} = 0$이다. [[orthogonal-matrix|직교행렬]]의 (2)의 (가)와 (라)에 의해 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 정규직교 열이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

**(1)** 자연수 $k$에 대하여 $S_k$를 "$k \le n$이면 $j \le k$인 모든 $j$에서 $\mathbf{q}_j = q_{j,j} e_j$이고 $q_{j,j} q_{j,j} = 1$이다"라 하고, [[mathematical-induction|수학적 귀납법]]으로 모든 자연수 $k$에서 $S_k$를 보인다. $e_j$는 [[standard-basis|표준기저]]의 항이다. $\mathbb{R}^n$의 두 원소는 모든 자리의 값이 같으면 같다(원소가 함수이기 때문이다).

*기초 단계.* $j \ge 2$이면 $q_{j,1} = 0$이므로 $\mathbf{q}_1$과 $q_{1,1} e_1$은 모든 자리에서 값이 같고 $\mathbf{q}_1 = q_{1,1} e_1$이다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 정의에 의해 $1 = \langle \mathbf{q}_1, \mathbf{q}_1 \rangle = q_{1,1} q_{1,1}$이다.

*귀납 단계.* $S_k$가 참이라 하고 $k + 1 \le n$이라 하자. 그러면 $k \le n$이므로 $j \le k$인 모든 $j$에서 $\mathbf{q}_j = q_{j,j} e_j$이고 $q_{j,j} q_{j,j} = 1$이며, (K9)에 의해 $0 \cdot 0 = 0 \ne 1$이므로 $q_{j,j} \ne 0$이다. $j \le k$이면 $j \ne k + 1$이므로 정규직교 열의 정의와 [[inner-product-space|내적과 내적공간]]의 조건 (ii), 표준내적의 (2)에 의해

$$
\begin{aligned}
0 &= \langle \mathbf{q}_j, \mathbf{q}_{k+1} \rangle \\
&= q_{j,j} \langle e_j, \mathbf{q}_{k+1} \rangle \\
&= q_{j,j}\, q_{j,k+1}
\end{aligned}
$$

이고, (K10)에 의해 $q_{j,k+1} = 0$이다. $j > k + 1$이면 위삼각이므로 $q_{j,k+1} = 0$이다. 따라서 $\mathbf{q}_{k+1}$은 $k + 1$번째 자리 말고는 값이 $0$이고 $\mathbf{q}_{k+1} = q_{k+1,k+1} e_{k+1}$이며, $1 = \langle \mathbf{q}_{k+1}, \mathbf{q}_{k+1} \rangle = q_{k+1,k+1} q_{k+1,k+1}$이다. $j \le k$인 $j$는 $S_k$가 다루었으므로 $S_{k+1}$이 성립한다. $k + 1 > n$이면 $S_{k+1}$의 가정이 거짓이어서 $S_{k+1}$은 참이다.

$S_n$에 의해 모든 $k$에서 $\mathbf{q}_k = q_{k,k} e_k$이다. 대각화 가능의 (2)에 의해 이것은 $\operatorname{diag}(q_{1,1}, \dots, q_{n,n})$의 $k$번째 열이므로 행렬의 (3)에 의해 $Q = \operatorname{diag}(q_{1,1}, \dots, q_{n,n})$이다. 또 $(q_{k,k} - 1)(q_{k,k} + 1) = q_{k,k} q_{k,k} - 1 = 0$이므로 (K10)에 의해 $q_{k,k}$는 $1$이거나 $-1$이다.

**(2)** $D = \operatorname{diag}(\varepsilon_1, \dots, \varepsilon_n)$이고 모든 $\varepsilon_k$가 $1$이거나 $-1$이라 하자. 어느 쪽이든 (K4)와 (K12)의 (iii)에 의해 $\varepsilon_k \varepsilon_k = 1$이다. 대각화 가능의 (2)에 의해 $D$의 $k$번째 열은 $\varepsilon_k e_k$이고, 내적의 선형성(내적과 내적공간의 (ii)와 (1))과 표준내적의 (2)에 의해 $\langle \varepsilon_j e_j, \varepsilon_k e_k \rangle = \varepsilon_j \varepsilon_k \langle e_j, e_k \rangle$는 $j = k$일 때 $1$, $j \ne k$일 때 $0$이다. 따라서 열이 정규직교 열이고, 직교행렬의 (2)에 의해 $D$는 직교행렬이다.

**(3)** $Q$가 아래삼각행렬인 직교행렬이면 삼각행렬의 고윳값의 (3)에 의해 $Q^T$는 위삼각행렬이고, 직교행렬의 (4)에 의해 $Q^T$는 직교행렬이다. (1)에 의해 $Q^T = \operatorname{diag}(\varepsilon_1, \dots, \varepsilon_n)$이고 모든 $\varepsilon_k$가 $1$이거나 $-1$이다. [[transpose|전치행렬]]의 정의에서 대각행렬의 전치행렬은 자기 자신이므로, 전치행렬의 (1)에 의해 $Q = (Q^T)^T = \operatorname{diag}(\varepsilon_1, \dots, \varepsilon_n)$이다.

$n = 1$이면 모든 $1 \times 1$ 행렬은 위삼각이고, 결론은 직교행렬의 (7)과 같다.
:::

:::exercise[대칭, 직교, 제곱이 단위행렬이라는 세 조건]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이라 하자. 다음 세 조건을 생각한다.

- (가) $A^T = A$이다.
- (나) $A^T A = I_n$이다.
- (다) $AA = I_n$이다.

세 조건 가운데 어느 둘이 성립하면 나머지 하나도 성립함을 증명하라.
:::

:::solution
곱의 계산은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)(결합법칙)과 (4)(단위행렬)로 한다.

*(가)와 (나)이면 (다).* (가)를 (나)에 넣으면 $AA = A^T A = I_n$이다.

*(가)와 (다)이면 (나).* (가)를 (다)에 넣으면 $A^T A = AA = I_n$이다.

*(나)와 (다)이면 (가).* 

$$
\begin{aligned}
A^T &= A^T I_n = A^T (AA) \\
&= (A^T A) A = I_n A = A
\end{aligned}
$$

이다.

예컨대 [[orthogonal-maps-examples|직교사상의 예와 반례]]의 (1)의 (v)에 의해 단위벡터 $u \in \mathbb{R}^n$에 대한 반사의 행렬 $[H_u]$는 대칭인 직교행렬이므로 (가)와 (나)를 만족하고, 따라서 (다) $[H_u][H_u] = I_n$도 만족한다. 세 조건 가운데 하나만으로는 나머지가 나오지 않을 수 있다는 것은 문제 4에서 본다.
:::

:::exercise[제곱이 단위행렬이지만 직교행렬이 아닌 2 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}
$$

이라 하자.

1. $AA = I_2$이고 $\det A = -1$임을 보이고, $A$의 고윳값이 정확히 $1$과 $-1$이며 $A$가 대각화 가능임을 보여라.
2. $A$가 직교행렬이 아님을 보여라.
3. 직교행렬의 행렬식과 고윳값에 관한 사실, 그리고 문제 3과 견주어 이 예가 무엇을 보여 주는지 설명하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

**(1)** [[matrix-product|행렬의 곱]]의 (2)로 $AA$의 성분은 $1 \cdot 1 + 2 \cdot 0 = 1$, $1 \cdot 2 + 2 \cdot (-1) = 0$, $0 \cdot 1 + (-1) \cdot 0 = 0$, $0 \cdot 2 + (-1)(-1) = 1$이므로 $AA = I_2$이다. [[determinant|행렬식]]의 (4)에 의해 $\det A = 1 \cdot (-1) - 0 \cdot 2 = -1$이다. $A$는 위삼각행렬이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 $A$의 고윳값은 정확히 대각성분 $1$과 $-1$이다. (K4)와 (K7)에 의해 $1 \ne -1$이므로 길이 $2$인 열 $1, -1$은 서로 다르고 모든 항이 고윳값이다. [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]의 (3)에 의해 $A$는 대각화 가능이다.

**(2)** $A$의 둘째 열은 $(2, -1)$이고 [[standard-inner-product|ℝⁿ 의 표준내적]]으로 $\langle (2, -1), (2, -1) \rangle = 4 + 1 = 5 \ne 1$이므로 열이 정규직교 열이 아니다. [[orthogonal-matrix|직교행렬]]의 (2)의 (가)와 (라)에 의해 $A$는 직교행렬이 아니다.

문제 3으로도 볼 수 있다. $A$의 $(1, 2)$ 성분은 $2$이고 $(2, 1)$ 성분은 $0$이어서 [[transpose|전치행렬]]의 정의와 [[matrix|행렬]]의 (2)에 의해 $A^T \ne A$이다. $A$가 직교행렬이면 문제 3의 (나)와 (다)가 성립하므로 (가) $A^T = A$가 성립해야 하는데, 그렇지 않다.

**(3)** 직교행렬의 (5)와 (6)에 의해 직교행렬의 행렬식은 $1$이거나 $-1$이고 실고윳값은 $1$이거나 $-1$이다. $A$는 이 두 결론을 모두 만족하고 대각화 가능하기까지 하지만 직교행렬이 아니다. 따라서 "행렬식이 $1$이나 $-1$이고, 고윳값이 $1$이나 $-1$뿐이며, 대각화 가능이면 직교행렬"이라는 주장은 성립하지 않는다. 또 $A$는 문제 3의 (다)를 만족하지만 (가)와 (나)는 만족하지 않으므로, 문제 3에서 조건 하나만으로는 나머지가 나오지 않을 수 있다.
:::

:::exercise[직교사상의 불변 부분공간의 직교 여공간]
$V$가 내적공간이고 $T : V \to V$가 직교사상이며 $E$가 유한차원인 $T$-불변 부분공간이라 하자.

1. $T$를 $E$로 제한한 사상 $T|_E : E \to E$가 전사임을 보여라. 곧 모든 $x \in E$에 $Tx' = x$인 $x' \in E$가 있음을 보여라.
2. $E^\perp$도 $T$-불변임을 증명하라.
3. $u$가 $T$의 고유벡터이면 $\operatorname{span}(u)^\perp$가 $T$-불변임을 보여라.

$V$는 유한차원이 아니어도 된다.
:::

:::solution
$T$-불변 부분공간과 제한한 사상 $T|_E$는 [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 것이고, $E^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이다.

**(1)** 자기수반사상의 고유벡터와 불변 부분공간의 (2)에 의해 $T|_E : E \to E$는 선형사상이다. $v, w \in E$이고 $T|_E v = T|_E w$이면 $Tv = Tw$이고, [[orthogonal-map|직교사상]]의 (2)에 의해 $T$는 단사이므로 $v = w$이다. 곧 $T|_E$는 단사이다. $E$가 유한차원이므로 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]의 마지막 문장을 벡터공간 $E$와 $T|_E$에 쓰면 $T|_E$는 전사이다. 따라서 $x \in E$이면 $T|_E x' = x$인 $x' \in E$가 있고, $Tx' = T|_E x' = x$이다.

**(2)** $y \in E^\perp$라 하자. $x \in E$이면 (1)에 의해 $Tx' = x$인 $x' \in E$가 있고, 직교사상의 정의와 $y \in E^\perp$에 의해

$$
\begin{aligned}
\langle Ty, x \rangle &= \langle Ty, Tx' \rangle \\
&= \langle y, x' \rangle = 0
\end{aligned}
$$

이다. $x \in E$가 아무것이어도 그러므로 직교 여공간의 정의에 의해 $Ty \in E^\perp$이다. 곧 $E^\perp$는 $T$-불변이다.

$E$가 유한차원이라는 가정은 (1)의 전사에서만 쓰였다. 증명에서 $x$를 $Tx'$ 꼴로 쓸 수 있어야 직교사상의 정의를 쓸 수 있다.

**(3)** 자기수반사상의 고유벡터와 불변 부분공간의 (1)에 의해 $\operatorname{span}(u)$는 $T$-불변이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 유한차원이다. (2)를 $E = \operatorname{span}(u)$에 쓰면 $\operatorname{span}(u)^\perp$는 $T$-불변이다.
:::

:::exercise[원점과 e₁ 을 고정하는 ℝ² 의 등거리 사상]
$\mathbb{R}^2$에 표준내적을 주고 $e_1$, $e_2$를 표준기저라 하자.

1. $f(0) = 0$이고 $f(e_1) = e_1$인 등거리 사상 $f : \mathbb{R}^2 \to \mathbb{R}^2$를 모두 구하라.
2. 조건 $f(0) = 0$을 빼면, $f(e_1) = e_1$이지만 (1)에서 구한 것이 아닌 등거리 사상이 있음을 보여라.
:::

:::solution
등거리 사상은 [[isometry-of-inner-product-space|내적공간의 등거리 사상]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

**(1)** *답은 $x$에서의 값이 $x$인 항등함수와 $(x_1, -x_2)$인 함수, 둘뿐이다.*

$f$가 조건을 만족한다고 하자. 내적공간의 등거리 사상의 (2)에 의해 $f(0) = 0$인 등거리 사상 $f$는 선형사상이고 [[orthogonal-map|직교사상]]이다. [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)에 의해 $Q = [f]$로 두면 모든 $x$에서 $f(x) = Qx$이고, 그 정의에 의해 $Q$의 첫째 열은 $f(e_1) = e_1$이다. $f = T_Q$가 직교사상이므로 [[orthogonal-matrix|직교행렬]]의 (2)의 (사)와 (가)에 의해 $Q$는 직교행렬이다. [[orthogonal-matrices-2x2|2 × 2 직교행렬]]의 (1)에 의해 $Q$는 $a = q_{1,1} = 1$, $b = q_{2,1} = 0$의 첫째 꼴이거나 둘째 꼴이다. 곧

$$
\begin{aligned}
Q &= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad\text{또는} \\
Q &= \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
\end{aligned}
$$

이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $f(x) = x$이거나 $f(x) = (x_1, -x_2)$이다.

거꾸로 두 행렬은 $1^2 + 0^2 = 1$이므로 2 × 2 직교행렬의 (1)에 의해 직교행렬이고, 직교행렬의 (2)의 (사)에 의해 그 사상은 직교사상이다. 내적공간의 등거리 사상의 (3)의 마지막 문장에 의해 선형사상인 직교사상은 등거리 사상이다. [[linear-map|선형사상]]의 (T1)에 의해 두 사상은 $0$을 $0$으로 보내고, 행렬과 벡터의 곱의 (3)에 의해 $e_1$을 첫째 열 $e_1$로 보낸다. 따라서 조건을 만족하는 것은 정확히 이 둘이다.

**(2)** $x$에서의 값이 $g(x) = (1 - x_2,\ x_1 - 1)$인 함수 $g : \mathbb{R}^2 \to \mathbb{R}^2$를 보자. $S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이면 행 규칙에 의해 $g(x) = Sx + (1, -1)$이다. $S$는 2 × 2 직교행렬의 (1)의 $a = 0$, $b = 1$의 첫째 꼴이어서 직교행렬이고 $T_S$는 직교사상이므로, 내적공간의 등거리 사상의 (3)에 의해 $g$는 등거리 사상이다. $g(e_1) = (1 - 0, 1 - 1) = e_1$이지만 $g(0) = (1, -1) \ne 0$이므로 $g$는 (1)의 두 함수 가운데 어느 것도 아니다. (1)에서 $f$가 선형이라는 것은 $f(0) = 0$에서 나왔고, 이 조건이 없으면 $f(e_1) = e_1$만으로는 $f$가 정해지지 않는다.
:::
