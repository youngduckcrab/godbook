---
title: 고윳값이 없는 행렬과 대각화할 수 없는 행렬
title_en: A Matrix without Eigenvalues and Non-diagonalizable Matrices
aliases: [실수 고윳값이 없는 행렬, 대각화할 수 없는 행렬, 대각화 불가능, 멱영행렬, matrix with no real eigenvalues, non-diagonalizable matrix, nilpotent matrix]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 실수 a, b 에 대하여 aa + bb = 0 이면 a = b = 0 이라는 사실을 받아들이면 (0 −1; 1 0) 에는 고윳값이 없다. (1 1; 0 1) 은 고윳값 1 을 갖지만 대각화 가능하지 않고, 영행렬이 아니면서 자기 자신과의 곱이 영행렬인 행렬도 대각화 가능하지 않다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, standard-basis, linear-combination-and-span, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, eigenvalue-and-eigenvector, change-of-basis-and-similarity, diagonalizable, eigenvalues-of-triangular-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1.4절 Complex vs real spaces, p.102; 2.7.2절 Complex eigenvalues, p.113; 2.7.3절 A non-diagonalizable matrix와 각주 5, pp.113–114; 4장 연습문제 1.1 c, 1.6(p.104), 2.12(p.115)
    checked: original
    note: "출처는 1.4절(p.102)에서 실수 공간에서 실수 고윳값이 없는 선형사상을 만들기는 쉽다고 하며 평면의 회전 R_α(α ≠ πn)를 예로 들고, 증명은 적지 않는다. 출처는 이어서 실수 행렬을 ℂⁿ 위의 연산자로 보아 복소 고윳값을 허용하기로 약속하고, 2.7.2절(p.113)에서 (1 2; −2 1) 의 고윳값을 특성다항식으로 1 ± 2i 로 구한다. 이 사이트는 스칼라를 실수로만 두고 삼각함수와 복소수를 쓰지 않는다. (1)의 J 는 회전을 쓰지 않고 행렬로 준 예이며, 실수 고윳값이 없다는 것을 받아들이는 사실 (Y1)로 증명한다. 출처는 (Y1)을 진술로 쓰지 않는다. 출처 연습문제 1.1 c(p.104)는 실수 고윳값이 없는 실수 정사각행렬이 있는지 묻는다. (2)의 N = (1 1; 0 1) 은 출처 2.7.3절(pp.113–114)의 예와 같다. 출처는 특성다항식으로 고윳값 1 의 중복도가 2 이고 고유공간이 1차원이라 대각화할 수 없다고 하고, 각주 5(p.114)에서 '어떤 기저에서 행렬이 I 인 선형사상은 항등사상뿐이므로' 대각화할 수 없다고 적는다. 이 항목의 (2)의 증명은 그 각주와 같은 발상(대각행렬이 I₂ 여야 한다)을 닮음과 고윳값으로 적은 것이다. (3)은 출처 연습문제 2.12(p.115, A⁵ = 0 이고 A ≠ 0 이면 대각화할 수 없다)와 1.6(p.104, 멱영 연산자의 고윳값)을 행렬의 거듭제곱 없이 AA 로 바꾼 것이다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
이 항목은 다음 사실을 증명 없이 받아들인다.

- (Y1) (제곱의 합) 실수 $a$, $b$에 대하여 $aa + bb = 0$이면 $a = 0$이고 $b = 0$이다.

고윳값, 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서, 닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]에서, 대각화 가능은 [[diagonalizable|대각화 가능]]에서 정한 것이다.

1. $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$에는 고윳값이 없다. 곧 어떤 실수도 $J$의 고윳값이 아니다. 따라서 $J$는 대각화 가능이 아니다.
2. $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$의 고윳값은 $1$뿐이고, $1$에 대한 고유공간은 $\operatorname{span}(e_1) = \{(t, 0) : t \in \mathbb{R}\}$이다. $N$은 대각화 가능이 아니다.
3. $n$이 자연수이고 $A$가 영행렬이 아닌 $n \times n$ 행렬이며 $AA$가 영행렬이면, $A$의 고윳값은 $0$뿐이고 $A$는 대각화 가능이 아니다.
:::

:::english
This entry accepts the following fact without proof.

- (Y1) (Sum of squares) For real numbers $a$, $b$, if $aa + bb = 0$ then $a = 0$ and $b = 0$.

Eigenvalues and eigenvectors are as defined in the entry on eigenvalues and eigenvectors, similarity in the entry on change of basis and similar matrices, and diagonalizability in the entry on diagonalizability.

1. $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has no eigenvalue. That is, no real number is an eigenvalue of $J$. Hence $J$ is not diagonalizable.
2. The only eigenvalue of $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is $1$, and the eigenspace for $1$ is $\operatorname{span}(e_1) = \{(t, 0) : t \in \mathbb{R}\}$. $N$ is not diagonalizable.
3. If $n$ is a natural number and $A$ is a nonzero $n \times n$ matrix such that $AA$ is the zero matrix, then the only eigenvalue of $A$ is $0$, and $A$ is not diagonalizable.
:::

## 직관

앞 항목들은 고윳값이 있을 때 무엇이 성립하는지를 말했습니다. 이 항목은 그 가정이 언제나 충족되는 것은 아님을 세 예로 보입니다. $J$는 $(x_1, x_2)$를 $(-x_2, x_1)$로 보내는데, 어떤 영벡터가 아닌 벡터도 자신의 실수배로 가지 않습니다. 시계 바늘을 늘 한 칸씩 돌리는 장치를 생각하면, 바늘이 "제자리를 가리킨 채 길이만 바뀌는" 일이 없습니다. 비유가 맞는 곳은 "어느 방향도 그대로 두지 않는다"는 점이고, 이 강의에는 각도나 회전이 정의되어 있지 않으므로 비유는 거기까지입니다.

$J$에 고유벡터가 없다는 것은 계산하면 $x_1 x_1 + x_2 x_2 = 0$이라는 등식으로 모입니다. 여기서 $x_1 = x_2 = 0$을 끌어내는 데 (Y1)이 필요합니다. (Y1)은 실수의 순서(제곱은 $0$ 이상이고, $0$ 이상인 두 수의 합이 $0$이면 둘 다 $0$)에서 나오는 사실인데, 이 강의가 받아들인 실수의 법칙 [[real-number-arithmetic|(K1)–(K7)]]에는 순서가 없으므로 따로 받아들입니다. (2)와 (3)은 (Y1)을 쓰지 않습니다.

(2)와 (3)은 고윳값이 있어도 대각화할 수 없는 예입니다. 대각화 가능하다면 대각행렬 $D$와 닮아야 하고, 닮은 행렬은 고윳값이 같으므로 $D$의 대각성분이 모두 고윳값이어야 합니다. 고윳값이 하나뿐이면 $D$는 그 수의 단위행렬 배가 되고, 그러면 원래 행렬도 그 꼴이어야 해서 모순이 됩니다. 이 강의는 행렬식과 다항식, 복소수를 다루지 않으므로 고윳값을 일반적으로 구하는 방법이나 고윳값이 언제 있는지는 다루지 않습니다. 이 항목도 세 행렬 각각에 대해서만 말합니다.

## 증명

:::idea
(1)은 $Jx = \lambda x$의 두 식을 엇갈려 곱해 더하면 $\lambda$가 지워져 $x_1 x_1 + x_2 x_2 = 0$이 된다. (2)와 (3)은 대각화된 꼴 $SDS^{-1}$의 $D$가 고윳값만으로 정해져 버린다는 것을 보인다.
:::

:::hint
(1)에서 $Jx = \lambda x$는 $-x_2 = \lambda x_1$, $x_1 = \lambda x_2$입니다. 첫 식에 $x_2$, 둘째 식에 $x_1$을 곱해 보세요.
:::

:::hint
(2)에서 $N = SDS^{-1}$이라면 $D$의 대각성분은 모두 $N$의 고윳값이어야 합니다. 그러면 $D$는 무엇입니까?
:::

:::proof
아래에서 "닮음 항목"은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]], "대각 항목"은 [[diagonalizable|대각화 가능]]을 가리킨다. 실수의 계산에는 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)를 쓴다. 먼저 세 경우에 함께 쓰는 사실을 보인다.

(가) $n \times n$ 행렬 $M$이 대각화 가능이면, $M = SDS^{-1}$인 가역 $n \times n$ 행렬 $S$와 대각행렬 $D$가 있고(대각 항목의 (5)) $D$의 모든 대각성분 $d_{k,k}$는 $M$의 고윳값이다. 증명: $Q = S^{-1}$로 두면 [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q$는 가역이고 $Q^{-1} = S$이므로 $M = Q^{-1}DQ$, 곧 $M$은 $D$와 닮았다. 대각 항목의 (1), (4)에 의해 $d_{k,k}$는 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$의 고윳값이고, 닮음 항목의 (5)에 의해 $M$의 고윳값이다.

(나) 실수 $c$에 대하여 $S(cI_n)S^{-1} = cI_n$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (3), (4)와 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $S(cI_n)S^{-1} = c\bigl((SI_n)S^{-1}\bigr) = c(SS^{-1}) = cI_n$이기 때문이다.

**(1)의 증명.** $x = (x_1, x_2) \in \mathbb{R}^2$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Jx = x_1(0, 1) + x_2(-1, 0) = (-x_2, x_1)$이다. 실수 $\lambda$에 대하여 $Jx = \lambda x$라 하자. 두 값을 비교하면 $-x_2 = \lambda x_1$이고 $x_1 = \lambda x_2$이다. 첫 식과 (K9)의 $-(-a) = a$에 의해 $x_2 = -(\lambda x_1)$이다. 그러면 (K1), (K2)와 (K12)(ii)에 의해
$$x_1 x_1 = (\lambda x_2)x_1 = \lambda(x_1 x_2), \qquad x_2 x_2 = x_2\bigl(-(\lambda x_1)\bigr) = -\bigl(x_2(\lambda x_1)\bigr) = -\bigl(\lambda(x_1 x_2)\bigr)$$
이므로 $x_1 x_1 + x_2 x_2 = \lambda(x_1 x_2) + \bigl(-(\lambda(x_1 x_2))\bigr) = 0$이다((K8)(ii)). (Y1)에 의해 $x_1 = 0$이고 $x_2 = 0$, 곧 $x = 0$이다. 따라서 어떤 실수 $\lambda$에 대해서도 $Jx = \lambda x$이고 $x \ne 0$인 $x$는 없으며, 고윳값의 정의에 의해 $J$에는 고윳값이 없다. $J$가 대각화 가능이라면 (가)에 의해 $d_{1,1}$이 $J$의 고윳값이어야 하므로, $J$는 대각화 가능이 아니다.

**(2)의 증명.** $N$은 $(2, 1)$ 성분이 $0$이므로 위삼각행렬이고 대각성분은 $1$, $1$이다. [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 실수 $c$가 $N$의 고윳값인 것은 정확히 $c = 1$일 때이다. [[matrix|행렬]]의 (1), (6)에 의해 $N - I_2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이고, $x \in \mathbb{R}^2$이면 $(N - I_2)x = x_1(0, 0) + x_2(1, 0) = (x_2, 0)$이다. 고윳값과 고유벡터의 (1), (4)에 의해 고유공간은 $\{x : (N - I_2)x = 0\} = \{x : x_2 = 0\}$이고, 이것은 $\{(t, 0) : t \in \mathbb{R}\}$이다. $(t, 0) = te_1$이므로 [[linear-combination-and-span|생성]]의 (N4)에 의해 이 집합은 $\operatorname{span}(e_1)$이다.

$N$이 대각화 가능이라 하자. (가)에 의해 $N = SDS^{-1}$이고 $D$의 대각성분 $d_{1,1}$, $d_{2,2}$는 $N$의 고윳값이므로 둘 다 $1$이다. 대각 항목의 (1)에 의해 $D = \operatorname{diag}(1, 1)$이고, 이것은 성분을 비교하면 $I_2$이다(행렬의 (2), (6)). (나)에 의해 $N = SI_2S^{-1} = I_2$인데, $N$의 $(1, 2)$ 성분은 $1$이고 $I_2$의 $(1, 2)$ 성분은 $0$이며 $1 \ne 0$이므로 행렬의 (2)에 의해 $N \ne I_2$이다. 모순이므로 $N$은 대각화 가능이 아니다.

**(3)의 증명.** 먼저 $0$이 고윳값임을 보인다. $A$가 영행렬이 아니므로 행렬의 (3)에 의해 $\mathbf{a}_k \ne 0$인 열이 있고, 행렬과 벡터의 곱의 (3)에 의해 $y = Ae_k = \mathbf{a}_k \ne 0$이다. [[matrix-product|행렬의 곱]]의 (1)에 의해 $Ay = A(Ae_k) = (AA)e_k$이고, $AA$는 영행렬이므로 그 $k$번째 열인 이 벡터는 $0 = 0y$이다((B3)). 따라서 $y$는 $0$에 속하는 고유벡터이고 $0$은 고윳값이다.

실수 $c$가 고윳값이고 $Av = cv$, $v \ne 0$이라 하자. 행렬의 곱의 (1)과 행렬과 벡터의 곱의 (2), (V6)에 의해 $(AA)v = A(Av) = A(cv) = c(Av) = c(cv) = (cc)v$이다. 한편 $AA$가 영행렬이므로 행렬과 벡터의 곱의 정의와 (B4), [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 $(AA)v = 0$이다. (B6)과 $v \ne 0$에 의해 $cc = 0$이고, (K10)에 의해 $c = 0$이다. 곧 $A$의 고윳값은 $0$뿐이다.

$A$가 대각화 가능이라 하자. (가)에 의해 $A = SDS^{-1}$이고 $D$의 모든 대각성분은 $0$이므로, 대각 항목의 (1)에 의해 $D = \operatorname{diag}(0, \dots, 0)$은 영행렬이다. 이것은 $0I_n$이므로(행렬의 (1)과 (K9)) (나)에 의해 $A = S(0I_n)S^{-1} = 0I_n$, 곧 영행렬이다. 가정에 어긋나므로 $A$는 대각화 가능이 아니다. $\blacksquare$
:::

## 예시와 반례

:::example[자기 자신과의 곱이 영행렬인 행렬]
$E = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$은 영행렬이 아닙니다. $EE$의 열은 $E(0, 0) = (0, 0)$과 $E(1, 0) = 1(0, 0) + 0(1, 0) = (0, 0)$이므로 $EE$는 영행렬입니다. (3)에 의해 $E$의 고윳값은 $0$뿐이고 $E$는 대각화 가능이 아닙니다. 위의 (2)의 증명에서 본 것처럼 $E = N - I_2$이므로, $N$이 대각화 가능이 아니라는 것은 이 예에서도 나옵니다. $N = SDS^{-1}$이면 행렬 곱의 성질의 (2), (3)과 증명의 (나)($c = -1$)에 의해 $S(D - I_2)S^{-1} = SDS^{-1} + S\bigl((-1)I_2\bigr)S^{-1} = N + (-1)I_2 = E$이고, $D - I_2$는 대각행렬이므로 $E$가 대각화 가능이 되기 때문입니다.
:::

:::counterexample[부호 하나를 바꾸면 고윳값이 생기는 예]
$J$와 비슷해 보이는 $K = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$에는 고윳값이 있습니다. $K(1, 1) = (1, 1)$이고 $K(1, -1) = (-1, 1) = (-1)(1, -1)$이므로 $1$과 $-1$이 고윳값입니다. $J$에서는 두 식을 엇갈려 곱해 더하면 $x_1 x_1 + x_2 x_2 = 0$이 되었지만, $K$에서 같은 계산($x_2 = \lambda x_1$, $x_1 = \lambda x_2$)을 하면 $x_1 x_1 - x_2 x_2 = 0$이 되어 (Y1)을 쓸 수 없습니다. 고윳값이 없다는 결론은 $J$의 부호 배치에서 나온 것이지, 대각성분이 $0$인 $2 \times 2$ 행렬에 일반적으로 성립하는 것이 아닙니다.
:::

## 확인 질문

:::check[$2J = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$에는 고윳값이 있는가?]
없습니다. $(2J)x = \lambda x$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해 $2(Jx) = \lambda x$이고, 양변에 $2^{-1}$을 곱하면 $Jx = (2^{-1}\lambda)x$입니다((V5), (V6), (K8)). (1)에 의해 이런 $x$는 $0$뿐이므로 $2J$에도 고윳값이 없습니다.
:::

:::check[$\begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$은 대각화 가능인가?]
아닙니다. 위삼각행렬이고 대각성분이 $3$, $3$이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 고윳값은 $3$뿐입니다. 대각화 가능이라면 증명의 (가)에 의해 이 행렬은 $SDS^{-1}$이고 $D$의 대각성분은 모두 $3$이므로, [[diagonalizable|대각화 가능]]의 (1)과 [[matrix|행렬]]의 (1), (6)에 의해 $D = 3I_2$입니다. 증명의 (나)에 의해 이 행렬은 $S(3I_2)S^{-1} = 3I_2$여야 하는데, $(1, 2)$ 성분이 $1 \ne 0$이므로 그렇지 않습니다.
:::
