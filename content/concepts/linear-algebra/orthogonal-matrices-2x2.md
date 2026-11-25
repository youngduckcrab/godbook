---
title: 2 × 2 직교행렬
title_en: Orthogonal 2 × 2 Matrices
aliases: [2 × 2 직교행렬의 분류, orthogonal 2 by 2 matrices, classification of orthogonal 2 by 2 matrices]
kind: proposition
field: linear-algebra
msc: ["15B10"]
level: undergrad
summary: 2 × 2 행렬이 직교행렬인 것은 정확히 a² + b² = 1 인 실수 a, b 에 대해 첫째 행이 a, −b 이고 둘째 행이 b, a 인 꼴(행렬식 1)이거나 첫째 행이 a, b 이고 둘째 행이 b, −a 인 꼴(행렬식 −1)일 때이다. 첫째 꼴은 b ≠ 0 이면 고윳값이 없고 b = 0 이면 I₂ 나 −I₂ 이다. 둘째 꼴은 대칭이고 고윳값이 1 과 −1 이며 대각화 가능이다.
requires: [real-number-arithmetic, order-properties-of-reals, square-root-exists, power-of-a-real-number, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, eigenvalue-and-eigenvector, diagonalizable, trace, determinant, determinant-of-product, real-eigenvalues-2x2, inner-product-space, standard-inner-product, self-adjoint-map, orthogonal-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절 Isometries and unitary operators. Unitary and orthogonal matrices., 6.2 Examples 의 회전행렬, p.148; 6절 연습문제 6.8, p.151; 6장 2절 Spectral theorem for self-adjoint and normal operators 의 연습문제 2.10, 2.11, 2.12, p.170; 6장 5절 Structure of orthogonal matrices, p.191"
    checked: original
    note: "출처 연습문제 6.8(p.151)은 행렬식이 1 인 2 × 2 직교행렬이 회전행렬(첫째 행 cos α, −sin α, 둘째 행 sin α, cos α. 6.2 Examples, p.148)임을 증명하라고 하고, 6장 5절(p.191)은 행렬식이 −1 인 2 × 2 직교행렬이 늘 반사라고 적는다. 6장 2절 연습문제 2.11(p.170)은 첫째 행 cos α, sin α, 둘째 행 sin α, −cos α 인 행렬을 직교 대각화하라고 하며 실고윳값이 나온다고 적고, 연습문제 2.12 는 그 변환을 기하적으로 설명하라고 한다. 연습문제 2.10 은 회전행렬을 직교 대각화하면 복소 고윳값이 나온다고 적는다. 이 사이트에는 삼각함수가 없으므로 이 항목은 각도 대신 a² + b² = 1 인 두 실수 a, b 로 (1)을 진술하고, 출처의 회전과 반사라는 말은 진술에 쓰지 않는다. (1)의 증명은 열의 정규직교 조건에서 둘째 열을 행렬식 t 로 나타내는 계산이다. (3)은 출처의 연습문제 2.10 이 말하는 것을 실고윳값으로 바꾼 것이고, (4)는 연습문제 2.11 의 실고윳값을 2 × 2 행렬의 실고윳값 항목의 판별식으로 구한 것이다. 예시 'a 나 b 가 0 인 여덟 행렬'에서 첫째 꼴의 a = 0, b = 1 인 행렬은 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬과 같고, 둘째 꼴의 a = 0, b = 1 인 행렬은 연습문제 6.7 a)(p.150)의 둘째 행렬과 같으며, 둘째 꼴의 a = 1, b = 0 인 행렬은 출처 1장 5절의 예(pp.20–21)가 직선 x₁ = 3x₂ 에 대한 반사를 구할 때 쓰는 x₁ 축에 대한 반사 T₀ 의 행렬, 1장 8절 Application to computer graphics 의 8.1(p.33)이 x 축에 대한 반사로 드는 행렬과 같다. 첫째 꼴의 a = −1, b = 0 인 −I₂ 를 출처 6장 5절(p.190)은 각 π 의 회전으로 볼 수 있다고 적는다. 예시 '둘째 꼴의 고유벡터'는 출처 연습문제 2.11 과 같은 꼴의 행렬을 수로 푼 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(2 × 2 고유벡터의 계산 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$Q$가 $2 \times 2$ [[matrix|행렬]]이라 하자. 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것이고, $\det$는 [[determinant|행렬식]], $\operatorname{tr}$은 [[trace|대각합]], $\operatorname{disc}$는 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 판별식, 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다. 실수 $a$, $b$에 대하여

$$
\begin{pmatrix} a & -b \\ b & a \end{pmatrix}, \qquad
\begin{pmatrix} a & b \\ b & -a \end{pmatrix}
$$

을 각각 $a$, $b$의 **첫째 꼴**과 **둘째 꼴**이라 부른다(이 항목 안의 이름이다).

1. (두 꼴) $Q$가 직교행렬인 것은 정확히 $a^2 + b^2 = 1$인 실수 $a$, $b$가 있어 $Q$가 $a$, $b$의 첫째 꼴이거나 둘째 꼴일 때이다. 이때 $a$와 $b$는 $Q$의 첫째 열의 두 값, 곧 $a = q_{1,1}$, $b = q_{2,1}$이다.
2. (행렬식) $a^2 + b^2 = 1$이면 첫째 꼴의 행렬식은 $1$이고 둘째 꼴의 행렬식은 $-1$이다. 따라서 직교행렬 $Q$는 첫째 꼴과 둘째 꼴 가운데 정확히 하나이고, 첫째 꼴인 것은 정확히 $\det Q = 1$일 때이다.
3. (첫째 꼴의 고윳값) $a^2 + b^2 = 1$이고 $Q$가 $a$, $b$의 첫째 꼴이라 하자. $\operatorname{disc} Q = -4b^2$이다. $b \ne 0$이면 $Q$에는 고윳값이 없다. $b = 0$이면 $a = 1$이거나 $a = -1$이고, $a = 1$이면 $Q = I_2$이고 고윳값은 정확히 $1$ 하나이며, $a = -1$이면 $Q = -I_2$이고 고윳값은 정확히 $-1$ 하나이다.
4. (둘째 꼴의 고윳값) $a^2 + b^2 = 1$이고 $Q$가 $a$, $b$의 둘째 꼴이라 하자. $Q$는 [[self-adjoint-map|대칭행렬]]이고 $\operatorname{tr} Q = 0$, $\det Q = -1$, $\operatorname{disc} Q = 4$이다. $Q$의 고윳값은 정확히 $1$과 $-1$이고 $Q$는 [[diagonalizable|대각화 가능]]이다. 또 $a \ne -1$이면 $(1 + a, b)$는 $1$에 속하는 $Q$의 고유벡터이고 $(-b, 1 + a)$는 $-1$에 속하는 $Q$의 고유벡터이며, 두 벡터는 [[standard-inner-product|표준내적]]으로 직교한다. $a = -1$이면 $b = 0$이고 [[standard-basis|표준기저]]의 $e_2$와 $e_1$이 각각 $1$과 $-1$에 속하는 고유벡터이다.
:::

:::english
Let $Q$ be a $2 \times 2$ matrix. Orthogonal matrices are as in the entry on orthogonal matrices; $\det$ is the determinant, $\operatorname{tr}$ the trace, $\operatorname{disc}$ the discriminant of the entry on real eigenvalues of $2 \times 2$ matrices, and eigenvalues are as in the entry on eigenvalues and eigenvectors. For real numbers $a$, $b$ we call

$$
\begin{pmatrix} a & -b \\ b & a \end{pmatrix}, \qquad
\begin{pmatrix} a & b \\ b & -a \end{pmatrix}
$$

the **first form** and the **second form** of $a$, $b$ respectively (names local to this entry).

1. (The two forms) $Q$ is an orthogonal matrix exactly when there are real numbers $a$, $b$ with $a^2 + b^2 = 1$ such that $Q$ is the first form or the second form of $a$, $b$. In that case $a$ and $b$ are the two values of the first column of $Q$, that is, $a = q_{1,1}$ and $b = q_{2,1}$.
2. (Determinant) If $a^2 + b^2 = 1$, the determinant of the first form is $1$ and that of the second form is $-1$. Hence an orthogonal matrix $Q$ is of exactly one of the two forms, and it is of the first form exactly when $\det Q = 1$.
3. (Eigenvalues of the first form) Let $a^2 + b^2 = 1$ and let $Q$ be the first form of $a$, $b$. Then $\operatorname{disc} Q = -4b^2$. If $b \ne 0$, $Q$ has no eigenvalues. If $b = 0$, then $a = 1$ or $a = -1$; if $a = 1$, then $Q = I_2$ and its only eigenvalue is $1$, and if $a = -1$, then $Q = -I_2$ and its only eigenvalue is $-1$.
4. (Eigenvalues of the second form) Let $a^2 + b^2 = 1$ and let $Q$ be the second form of $a$, $b$. Then $Q$ is a symmetric matrix, $\operatorname{tr} Q = 0$, $\det Q = -1$ and $\operatorname{disc} Q = 4$. The eigenvalues of $Q$ are exactly $1$ and $-1$, and $Q$ is diagonalizable. Moreover, if $a \ne -1$, then $(1 + a, b)$ is an eigenvector of $Q$ belonging to $1$ and $(-b, 1 + a)$ is an eigenvector of $Q$ belonging to $-1$, and the two vectors are orthogonal for the standard inner product. If $a = -1$, then $b = 0$, and $e_2$ and $e_1$ are eigenvectors belonging to $1$ and $-1$ respectively.
:::

## 직관

$a^2 + b^2 = 1$인 $(a, b)$는 원점에서 길이가 $1$인 점입니다. $2 \times 2$ 직교행렬은 표준기저 $e_1$을 이런 점 $(a, b)$로 보내고, $e_2$를 그것과 직교하는 길이 $1$인 점으로 보냅니다. 평면에서 $(a, b)$와 직교하고 길이가 $1$인 점은 $(-b, a)$와 $(b, -a)$ 두 개뿐이어서 꼴도 둘입니다((1)).

그림으로 보면, 첫째 꼴은 평면을 원점 둘레로 돌려 $e_1$을 $(a, b)$에 얹는 회전이고, 둘째 꼴은 원점을 지나는 한 직선을 거울로 삼아 뒤집는 반사입니다. 이 항목은 각도와 삼각함수를 쓰지 않으므로 회전과 반사라는 말은 이 그림에만 쓰고, 진술은 $a$, $b$로만 합니다. 돌리는 행렬은 $I_2$와 $-I_2$가 아니면 영벡터가 아닌 어떤 벡터도 자기의 실수배로 보내지 않으므로 고윳값이 없습니다((3)). 뒤집는 행렬은 거울인 직선 위의 벡터를 그대로 두고(고윳값 $1$), 그 직선과 직교하는 벡터를 뒤집습니다(고윳값 $-1$)((4)).

두 꼴은 행렬식으로 갈립니다((2)). [[orthogonal-matrix|직교행렬]]의 (5)에서 본 행렬식 $1$과 $-1$이 $2 \times 2$에서는 각각 첫째 꼴과 둘째 꼴입니다.

## 증명

:::idea
직교행렬의 열은 정규직교입니다. 첫째 열을 $(a, b)$로 두면 둘째 열 $(c, d)$에 대한 세 등식에서 $(c, d)$가 $s(-b, a)$이고 $s = \det Q$임을 계산으로 얻고, $s^2 = 1$에서 두 꼴이 나옵니다. 고윳값은 판별식의 부호로 정합니다.
:::

:::hint
$a^2 + b^2 = 1$이므로 $c = c(a^2 + b^2)$입니다. 이것을 $a(ac + bd)$와 $b(ad - bc)$로 나누어 써 보십시오.
:::

:::hint
첫째 꼴의 판별식은 $(2a)^2 - 4(a^2 + b^2)$이고, 둘째 꼴의 판별식은 $0^2 - 4 \cdot (-1)$입니다.
:::

:::proof
(K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 실수의 제곱 $x^2$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $xx$이다. [[determinant|행렬식]]의 (4)에 의해 $2 \times 2$ 행렬의 행렬식은 $q_{1,1} q_{2,2} - q_{2,1} q_{1,2}$이고, [[trace|대각합]]의 정의와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 그 대각합은 $q_{1,1} + q_{2,2}$이다. $\mathbb{R}^2$의 두 원소의 [[standard-inner-product|표준내적]]은 그 정의와 (H0)에 의해 $\langle (x_1, x_2), (y_1, y_2) \rangle = x_1 y_1 + x_2 y_2$이다.

**(1)의 증명.** $Q$가 직교행렬이라 하고, 첫째 열을 $(a, b)$, 둘째 열을 $(c, d)$라 하자. 곧 $q_{1,1} = a$, $q_{2,1} = b$, $q_{1,2} = c$, $q_{2,2} = d$이다. [[orthogonal-matrix|직교행렬]]의 (2)의 (라)에 의해 두 열은 정규직교 열이므로

$$
\begin{aligned}
&aa + bb = 1, \qquad cc + dd = 1, \\
&ac + bd = 0
\end{aligned}
$$

이다. $s = \det Q = ad - bc$라 하자. (K3), (K1), (K2), (K12)로 전개하면

$$
\begin{aligned}
c &= c(aa + bb) \\
&= a(ac + bd) - b(ad - bc) = -bs, \\
d &= d(aa + bb) \\
&= b(ac + bd) + a(ad - bc) = as
\end{aligned}
$$

이다. 각 줄의 첫 등호는 $aa + bb = 1$과 (K4)이고, 둘째 등호는 양변을 전개하면 같은 항이 남는다는 것이며(첫 줄은 양변이 모두 $aac + bbc$, 둘째 줄은 모두 $aad + bbd$), 셋째 등호는 $ac + bd = 0$과 (K9)이다. 따라서

$$
\begin{aligned}
ss &= ss(aa + bb) \\
&= (as)(as) + (bs)(bs) \\
&= dd + cc = 1
\end{aligned}
$$

이고((K1)–(K4)와 (K12)의 (iii)), (K3), (K1), (K12)로 $(s - 1)(s + 1) = ss + s - s - 1 = ss - 1 = 0$이므로((K12)의 (v)) (K10)에 의해 $s - 1 = 0$이거나 $s + 1 = 0$, 곧 $s = 1$이거나 $s = -1$이다. $s = 1$이면 $c = -b$, $d = a$이므로 [[matrix|행렬]]의 (2)에 의해 $Q$는 $a$, $b$의 첫째 꼴이다. $s = -1$이면 (K9)에 의해 $c = b$, $d = -a$이므로 $Q$는 $a$, $b$의 둘째 꼴이다. 어느 쪽이든 $aa + bb = 1$이다.

거꾸로 $aa + bb = 1$이라 하자. 첫째 꼴의 두 열 $(a, b)$, $(-b, a)$에서 $aa + bb = 1$, $(-b)(-b) + aa = 1$, $a(-b) + ba = 0$이고((K12)의 (ii), (iii)), 둘째 꼴의 두 열 $(a, b)$, $(b, -a)$에서 $aa + bb = 1$, $bb + (-a)(-a) = 1$, $ab + b(-a) = 0$이다. 곧 각 열과 자기 자신의 표준내적은 $1$이고 첫째 열과 둘째 열의 표준내적은 $0$이며, 표준내적이 [[inner-product-space|내적]]이므로(표준내적의 (1)) 내적의 조건 (i)에 의해 둘째 열과 첫째 열의 표준내적도 $0$이다. 따라서 두 열은 정규직교 열이다. 직교행렬의 (2)의 (라)에 의해 두 꼴은 직교행렬이다. 두 꼴의 첫째 열은 모두 $(a, b)$이므로 $a = q_{1,1}$, $b = q_{2,1}$이다.

**(2)의 증명.** 첫째 꼴의 행렬식은 $aa - b(-b) = aa + bb = 1$이고, 둘째 꼴의 행렬식은 $a(-a) - bb = -(aa + bb) = -1$이다((K12)의 (ii), (iv)). (K4)와 (K7)에 의해 $1 \ne -1$이므로 한 행렬이 두 꼴일 수 없다. 따라서 직교행렬 $Q$는 (1)의 두 꼴 가운데 정확히 하나이고, $\det Q = 1$인 것은 정확히 첫째 꼴일 때이다.

**(3)의 증명.** $\operatorname{tr} Q = a + a$이고 (2)에 의해 $\det Q = 1$이므로 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 판별식의 정의에 의해

$$
\begin{aligned}
\operatorname{disc} Q &= (a + a)^2 - 4 \\
&= 4(aa) - 4(aa + bb) \\
&= -4(bb)
\end{aligned}
$$

이다((K3), (K7)의 $2 \cdot 2 = 4$, (K12)). (K7)에 의해 $2 \ne 0$이므로 [[order-properties-of-reals|실수의 순서 성질]]의 (5)의 (i)에 의해 $0 < 2 \cdot 2 = 4$이다. $b \ne 0$이면 같은 (5)의 (i)에 의해 $0 < bb$이고, (4)의 (i)과 (K9)에 의해 $0 = 0 \cdot 4 < (bb)4$이므로 (K1)로 $0 < 4(bb)$이며, (3)의 (ii)에 의해 $-4(bb) < 0$이다. 2 × 2 행렬의 실고윳값의 (2)에 의해 $Q$에는 고윳값이 없다.

$b = 0$이면 $aa = 1$이므로 (1)의 증명의 마지막 계산과 같이 $a = 1$이거나 $a = -1$이다. $a = 1$이면 (K9)의 $-0 = (-1)0 = 0$과 행렬의 (2), (6)에 의해 $Q = I_2$이고, $a = -1$이면 $Q$의 성분은 $-1, 0, 0, -1$이므로 행렬의 (1)에 의해 $Q = -I_2$이다. 어느 경우든 $\operatorname{disc} Q = 0$이므로 2 × 2 행렬의 실고윳값의 (3)에 의해 $Q$의 고윳값은 정확히 $2^{-1} \operatorname{tr} Q = 2^{-1}(a + a) = a$ 하나이다.

**(4)의 증명.** $Q$의 $(1, 2)$ 성분과 $(2, 1)$ 성분이 모두 $b$이므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (7)에 의해 $Q$는 대칭이다. $\operatorname{tr} Q = a + (-a) = 0$이고 (2)에 의해 $\det Q = -1$이므로 $\operatorname{disc} Q = 0 \cdot 0 - 4(-1) = 4$이다. (3)의 증명에서처럼 $0 < 4$이다. [[order-properties-of-reals|실수의 순서 성질]]의 (5)의 (ii)에 의해 $0 < 1$이고 (2)의 (iv)에 의해 $0 = 0 + 0 < 1 + 1 = 2$이므로 $0 \le 2$이고, $2 \cdot 2 = 4$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $\sqrt{4} = 2$이다. 2 × 2 행렬의 실고윳값의 (4)에 의해 $Q$의 고윳값은 정확히 $\lambda_1 = 2^{-1}(0 + 2) = 1$과 $\lambda_2 = 2^{-1}(0 - 2) = -1$이고, $Q$는 대각화 가능이다.

$a \ne -1$이라 하고 $u = (1 + a, b)$, $w = (-b, 1 + a)$라 하자. (K1), (K9)에 의해 $1 + a = a - (-1)$이고, (K12)의 (v)에 의해 이것이 $0$인 것은 정확히 $a = -1$일 때이므로 $1 + a \ne 0$이다. 따라서 $u \ne 0$, $w \ne 0$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Qu$의 두 값은

$$
\begin{aligned}
a(1 + a) + bb &= a + (aa + bb) \\
&= a + 1, \\
b(1 + a) + (-a)b &= b
\end{aligned}
$$

이므로 $Qu = u$이고, $Qw$의 두 값은

$$
\begin{aligned}
&a(-b) + b(1 + a) = b, \\
&b(-b) + (-a)(1 + a) \\
&\quad = -\bigl((aa + bb) + a\bigr) = -(1 + a)
\end{aligned}
$$

이므로 $Qw = -w$이다(각 계산은 (K1)–(K4), (K12)). 따라서 $u$는 $1$에 속하는 고유벡터, $w$는 $-1$에 속하는 고유벡터이다. $\langle u, w \rangle = (1 + a)(-b) + b(1 + a) = 0$이므로 두 벡터는 직교한다.

$a = -1$이면 $aa = 1$이므로 (K1), (K2), (K12)로 $bb = (aa + bb) - aa = 1 - 1 = 0$이고 (K10)에 의해 $b = 0$이다. 이때 $Q$의 성분은 $q_{1,1} = -1$, $q_{1,2} = q_{2,1} = 0$, $q_{2,2} = 1$이므로 행 규칙에 의해 $Qe_2 = e_2$, $Qe_1 = -e_1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[a 나 b 가 0 인 여덟 행렬]
$a^2 + b^2 = 1$이고 $a$나 $b$가 $0$인 경우는 $(a, b)$가 $(1, 0)$, $(-1, 0)$, $(0, 1)$, $(0, -1)$인 네 경우뿐입니다. $b = 0$이면 $a^2 = 1$이고 $a = 0$이면 $b^2 = 1$이기 때문입니다((1)의 증명의 마지막 계산). 첫째 꼴로는

$$
\begin{aligned}
&I_2, \quad -I_2, \\
&\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}
\end{aligned}
$$

이고, 둘째 꼴로는

$$
\begin{aligned}
&\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}, \\
&\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}
\end{aligned}
$$

입니다. (3)에 의해 첫째 꼴의 뒤의 두 행렬은 고윳값이 없고 $I_2$, $-I_2$는 고윳값이 하나입니다. (4)에 의해 둘째 꼴의 네 행렬은 모두 고윳값 $1$과 $-1$을 가집니다. 예를 들어 셋째 행렬($a = 0$, $b = 1$)에서 $(1 + a, b) = (1, 1)$은 $1$에, $(-b, 1 + a) = (-1, 1)$은 $-1$에 속하는 고유벡터입니다.
:::

:::example[둘째 꼴의 고유벡터]
$a = 5/13$, $b = 12/13$이면 $a^2 + b^2 = (25 + 144)/169 = 1$이므로 둘째 꼴

$$
Q = \begin{pmatrix} 5/13 & 12/13 \\ 12/13 & -5/13 \end{pmatrix}
$$

은 (1)에 의해 직교행렬이고 (2)에 의해 $\det Q = -1$입니다. (4)의 고유벡터는 $(1 + a, b) = (18/13, 12/13)$과 $(-b, 1 + a) = (-12/13, 18/13)$이고, 이것의 $13 \cdot 6^{-1}$배인 $(3, 2)$와 $(-2, 3)$도 고유벡터입니다. 실제로 $u = (3, 2)$, $w = (-2, 3)$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Qu$의 두 값은 $(15 + 24)/13 = 3$과 $(36 - 10)/13 = 2$이고, $Qw$의 두 값은 $(-10 + 36)/13 = 2$와 $(-24 - 15)/13 = -3$입니다. 곧 $Qu = u$이고 $Qw = -w$이어서, $Q$는 $u$를 그대로 두고 $w$를 뒤집습니다. $\langle u, w \rangle = -6 + 6 = 0$이므로 두 벡터는 직교합니다.
:::

## 확인 질문

:::check[$2 \times 2$ 직교행렬이 대칭이면 둘째 꼴이거나 $I_2$, $-I_2$ 가운데 하나인가?]
그렇습니다. (1)에 의해 직교행렬은 첫째 꼴이거나 둘째 꼴입니다. 첫째 꼴의 $(1, 2)$ 성분은 $-b$, $(2, 1)$ 성분은 $b$이므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (7)에 의해 첫째 꼴이 대칭인 것은 정확히 $-b = b$, 곧 $b = 0$일 때이고, (3)에 의해 그때 $Q$는 $I_2$이거나 $-I_2$입니다.
:::

:::check[둘째 꼴인 두 $2 \times 2$ 직교행렬의 곱은 어느 꼴인가?]
첫째 꼴입니다. $Q_1$, $Q_2$가 둘째 꼴의 직교행렬이면 [[orthogonal-matrix|직교행렬]]의 (4)에 의해 $Q_1 Q_2$는 직교행렬이고, (2)와 [[determinant-of-product|곱의 행렬식]]의 (1), [[real-number-arithmetic|(K12)]]의 (iii)에 의해 $\det(Q_1 Q_2) = (-1)(-1) = 1$입니다. (2)에 의해 $Q_1 Q_2$는 첫째 꼴입니다. 예를 들어 $Q_1 = Q_2$이면 (4)에 의해 $Q_1^T = Q_1$이므로 직교행렬의 (2)의 (나)에 의해 $Q_1 Q_1 = Q_1 Q_1^T = I_2$이고, 이것은 $a = 1$, $b = 0$의 첫째 꼴입니다.
:::
