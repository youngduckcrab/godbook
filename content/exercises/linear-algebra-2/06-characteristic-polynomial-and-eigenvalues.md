---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절, 연습문제 5.5 (p.23); 3장 5절, 연습문제 5.3 (p.95)"
added: 2026-11-26
---

:::exercise[두 행이 같은 3 × 3 행렬의 고윳값과 고유공간]

$$
A = \begin{pmatrix} -1 & 0 & 2 \\ 0 & 2 & 2 \\ -1 & 0 & 2 \end{pmatrix}
$$

이라 하자. $x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓴다.

1. 모든 실수 $x$에서 $p_A(x) = (2 - x)\,x\,(x - 1)$임을 보이고, $A$의 고윳값을 모두 구하라.
2. 각 고윳값의 고유공간을 구하라.
3. $A$가 가역인지 특성다항식으로 판정하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)로 계산한다.

**(1)** $x$를 실수라 하자. [[matrix|행렬]]의 (1), (6)에 의해 $A - xI_3$은 $A$의 대각성분에서 $x$를 뺀 행렬

$$
\begin{pmatrix} -1 - x & 0 & 2 \\ 0 & 2 - x & 2 \\ -1 & 0 & 2 - x \end{pmatrix}
$$

이다. [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
&p_A(x) \\
&= (-1 - x)\bigl((2 - x)(2 - x) - 0 \cdot 2\bigr) \\
&\quad - 0 \cdot \bigl(0 \cdot (2 - x) - 0 \cdot 2\bigr) \\
&\quad + (-1)\bigl(0 \cdot 2 - (2 - x) \cdot 2\bigr) \\
&= (2 - x)\bigl((-1 - x)(2 - x) + 2\bigr)
\end{aligned}
$$

이고, $(-1 - x)(2 - x) + 2 = (-2 + x - 2x + xx) + 2 = xx - x = x(x - 1)$이므로 $p_A(x) = (2 - x)\,x\,(x - 1)$이다.

(K10)을 두 번 쓰면 $p_A(\lambda) = 0$인 것은 정확히 $2 - \lambda = 0$이거나 $\lambda = 0$이거나 $\lambda - 1 = 0$일 때이고, (K12)의 (v)에 의해 정확히 $\lambda$가 $2$, $0$, $1$ 가운데 하나일 때이다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $A$의 고윳값은 정확히 $0$, $1$, $2$이다.

**(2)** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $\lambda$에 대한 고유공간은 $\{x \in \mathbb{R}^3 : Ax = \lambda x\}$이다. 행 규칙으로 $Ax = (-x_1 + 2x_3,\ 2x_2 + 2x_3,\ -x_1 + 2x_3)$이고, [[real-function-space|실숫값 함수의 공간]]의 $\mathbb{R}^3$의 같음에 의해 두 원소는 세 값이 모두 같을 때 같다.

*$\lambda = 0$.* $Ax = 0$인 것은 정확히 $x_1 = 2x_3$이고 $2x_2 + 2x_3 = 0$, 곧 $x_2 = -x_3$일 때이다($2 \ne 0$이므로 (K11)). 그런 $x$는 $(2x_3, -x_3, x_3) = x_3(2, -1, 1)$이고, 거꾸로 $s(2, -1, 1)$은 이 조건을 만족한다. 따라서 고유공간은 [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 $\operatorname{span}((2, -1, 1))$이다.

*$\lambda = 1$.* $Ax = x$인 것은 정확히 $-x_1 + 2x_3 = x_1$, $2x_2 + 2x_3 = x_2$, $-x_1 + 2x_3 = x_3$일 때, 곧 $x_1 = x_3$이고 $x_2 = -2x_3$일 때이다(첫째 식에서 $2x_3 = 2x_1$, 둘째 식에서 $x_2 = -2x_3$이고, 거꾸로 이런 $x$는 셋째 식도 만족한다). 따라서 고유공간은 $\operatorname{span}((1, -2, 1))$이다.

*$\lambda = 2$.* $Ax = 2x$인 것은 정확히 $-x_1 + 2x_3 = 2x_1$, $2x_2 + 2x_3 = 2x_2$, $-x_1 + 2x_3 = 2x_3$일 때이다. 둘째 식에서 $x_3 = 0$, 셋째 식에서 $x_1 = 0$이고, 그러면 첫째 식도 성립한다. 따라서 고유공간은 $x_2$만 자유로운 $\{(0, x_2, 0)\} = \operatorname{span}(e_2)$이다.

**(3)** $0$이 $A$의 고윳값이므로 고윳값과 특성다항식의 근의 (3)에 의해 $\det A = 0$이고 $A$는 가역이 아니다. [[characteristic-polynomial|특성다항식]]의 (2)로 보아도 $\det A = p_A(0) = 2 \cdot 0 \cdot (-1) = 0$이다. $A$의 첫째 행과 셋째 행이 같으므로 행렬식의 (1)의 (ii)에서도 같은 결론이 나온다.
:::

:::exercise[행렬의 실수배의 특성다항식]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이며 $c$가 $0$이 아닌 실수라 하자.

1. 모든 실수 $x$에서 $p_{cA}(x) = c^n\, p_A(c^{-1}x)$임을 보여라.
2. 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $c\lambda$가 $cA$의 고윳값일 때임을 보여라.
:::

:::solution
**(1)** $x$를 실수라 하자. 벡터공간 $M_{n \times n}$([[matrix|행렬]]의 (1))에서 [[vector-space|벡터공간]]의 (V7), (V6)과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B9)에 의해

$$
\begin{aligned}
&c\bigl(A - (c^{-1}x)I_n\bigr) \\
&= cA + c\Bigl(-\bigl((c^{-1}x)I_n\bigr)\Bigr) \\
&= cA - \bigl(c(c^{-1}x)\bigr)I_n
\end{aligned}
$$

이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K2), (K8)의 (iii), (K4)에 의해 $c(c^{-1}x) = (cc^{-1})x = x$이다. 따라서 $cA - xI_n = c\bigl(A - (c^{-1}x)I_n\bigr)$이고, [[determinant-of-product|곱의 행렬식]]의 (4)에 의해

$$
\begin{aligned}
p_{cA}(x) &= c^n \det\bigl(A - (c^{-1}x)I_n\bigr) \\
&= c^n\, p_A(c^{-1}x)
\end{aligned}
$$

이다([[characteristic-polynomial|특성다항식]]의 정의).

**(2)** [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $c\lambda$가 $cA$의 고윳값인 것은 정확히 $p_{cA}(c\lambda) = 0$일 때이다. (1)과 $c^{-1}(c\lambda) = \lambda$에 의해 $p_{cA}(c\lambda) = c^n p_A(\lambda)$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $c^n \ne 0$이므로, (K9)와 (K10)에 의해 $c^n p_A(\lambda) = 0$인 것은 정확히 $p_A(\lambda) = 0$일 때이고, 이것은 다시 (1)에 의해 정확히 $\lambda$가 $A$의 고윳값일 때이다.

$c = 0$이면 $c^{-1}$이 없으므로 (1)의 식은 쓸 수 없다. 이때 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B3)에 의해 $0A$는 영행렬 $O$이고, $O$는 대각성분이 모두 $0$인 삼각행렬이므로 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (3)에 의해 고윳값은 $0$ 하나이다. 이것은 $A$의 고윳값과 상관이 없다.
:::

:::exercise[매개변수 a 에 따라 고윳값이 달라지는 2 × 2 행렬]
실수 $a$마다 $B_a = \begin{pmatrix} 1 & a \\ 1 & 1 \end{pmatrix}$이라 하자. $a < 0$, $a = 0$, $0 < a$인 경우마다 $B_a$의 고윳값을 모두 구하고, $0 < a$이면 각 고윳값에 속하는 고유벡터를 하나씩 적어라.
:::

:::solution
[[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 기호로 $\operatorname{tr} B_a = 1 + 1 = 2$이고 $h = 2^{-1} \cdot 2 = 1$이며, 그 (1)에 의해 $\operatorname{disc} B_a = (1 - 1)^2 + 4 \cdot a \cdot 1 = 4a$이다([[real-number-arithmetic|실수의 계산 법칙]]과 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)의 $0^2 = 0$). $0 < 4$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (6)의 (iv)와 (K9)에 의해 $4a$의 부호는 $a$의 부호와 같다. 곧 $4a < 0$인 것은 정확히 $a < 0$일 때이고, $4a = 0$인 것은 정확히 $a = 0$일 때이며((K10)), $0 < 4a$인 것은 정확히 $0 < a$일 때이다.

*$a < 0$.* 2 × 2 행렬의 실고윳값의 (2)에 의해 $B_a$에는 고윳값이 없다.

*$a = 0$.* 같은 항목의 (3)에 의해 고윳값은 정확히 $h = 1$ 하나이다.

*$0 < a$.* [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $\sqrt{4} = 2$이고($0 \le 2$, $2 \cdot 2 = 4$), 같은 항목의 (2)에 의해 $\sqrt{4a} = \sqrt{4}\sqrt{a} = 2\sqrt{a}$이다. 2 × 2 행렬의 실고윳값의 (4)에 의해 고윳값은 정확히

$$
\begin{aligned}
2^{-1}(2 + 2\sqrt{a}) &= 1 + \sqrt{a}, \\
2^{-1}(2 - 2\sqrt{a}) &= 1 - \sqrt{a}
\end{aligned}
$$

이다((K3)과 $2^{-1} \cdot 2 = 1$). $v = (\sqrt{a}, 1)$, $w = (-\sqrt{a}, 1)$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)과 $\sqrt{a}\sqrt{a} = a$에 의해

$$
\begin{aligned}
B_a v &= (\sqrt{a} + a,\ \sqrt{a} + 1) \\
&= (1 + \sqrt{a})v, \\
B_a w &= (-\sqrt{a} + a,\ -\sqrt{a} + 1) \\
&= (1 - \sqrt{a})w
\end{aligned}
$$

이다. 둘째 값이 $1$이므로 $v$, $w$는 영벡터가 아니고, 차례로 $1 + \sqrt{a}$와 $1 - \sqrt{a}$에 속하는 [[eigenvalue-and-eigenvector|고유벡터]]이다.

경계 $a = 0$에서는 $B_0 = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$이고, $0 < a$일 때의 두 고윳값 $1 \pm \sqrt{a}$가 하나로 합쳐진 값 $1$이 고윳값이다.
:::

:::exercise[AB 와 BA 의 특성다항식]
$n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이라 하자.

1. $A$가 가역이면 $p_{AB} = p_{BA}$임을 증명하라.
2. $n = 2$이면 $A$가 가역이 아니어도 $p_{AB} = p_{BA}$임을 증명하라.
3. $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $p_{AB} = p_{BA}$이지만 $AB$와 $BA$는 닮지 않았음을 보여라.
:::

:::solution
**(1)** $A$가 가역이므로 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1}A = I_n$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)에 의해

$$
\begin{aligned}
A^{-1}(AB)A &= (A^{-1}A)(BA) \\
&= I_n(BA) = BA
\end{aligned}
$$

이다. 따라서 $Q = A$로 두면 $BA = Q^{-1}(AB)Q$이고 $BA$는 $AB$와 [[change-of-basis-and-similarity|닮았다]]. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (4)에 의해 $p_{BA} = p_{AB}$이다.

**(2)** [[trace-of-product|곱의 대각합]]의 (1)에 의해 $\operatorname{tr}(AB) = \operatorname{tr}(BA)$이고, [[determinant-of-product|곱의 행렬식]]의 (2)에 의해 $\det(AB) = \det(BA)$이다. $AB$와 $BA$는 $2 \times 2$ 행렬이므로 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (2)에 의해 $p_{AB} = p_{BA}$이다.

**(3)** [[matrix-product|행렬의 곱]]의 (2)로 성분을 계산하면

$$
AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
$$

이다. 예컨대 $(AB)_{1,2} = 1 \cdot 1 + 0 \cdot 0 = 1$이고 $(BA)_{1,1} = 0 \cdot 1 + 1 \cdot 0 = 0$이다. (2)에 의해 $p_{AB} = p_{BA}$이다. [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (1)을 $c = 0$에 쓰면 영행렬 $0I_2$와 닮은 행렬은 영행렬뿐이고, $AB$는 $(1, 2)$ 성분이 $1$이라 영행렬이 아니다. 따라서 $AB$와 $BA$는 닮지 않았다. [[determinant|행렬식]]의 (4)에 의해 $\det A = 1 \cdot 0 - 0 \cdot 0 = 0$이므로 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$는 가역이 아니고, $\det B = 0 \cdot 0 - 0 \cdot 1 = 0$이므로 $B$도 가역이 아니다. 그래서 이 두 행렬에는 (1)을 쓸 수 없다.
:::

:::exercise[최고차계수가 1 인 삼차 다항함수의 근을 고윳값으로 갖는 행렬]
$a_0$, $a_1$, $a_2$가 실수이고

$$
C = \begin{pmatrix} 0 & 0 & -a_0 \\ 1 & 0 & -a_1 \\ 0 & 1 & -a_2 \end{pmatrix}
$$

이라 하고, $g = a_0 t^0 + a_1 t^1 + a_2 t^2 + 1\,t^3$이라 하자.

1. $p_C = (-1)g$임을 보여라.
2. 실수 $r$가 $g$의 근인 것은 정확히 $r$가 $C$의 고윳값일 때임을 보여라.
3. $a_0 = -6$, $a_1 = 11$, $a_2 = -6$이면 $C$의 고윳값이 정확히 $1$, $2$, $3$임을 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

**(1)** $x$를 실수라 하자. [[matrix|행렬]]의 (1), (6)에 의해

$$
C - xI_3 = \begin{pmatrix} -x & 0 & -a_0 \\ 1 & -x & -a_1 \\ 0 & 1 & -a_2 - x \end{pmatrix}
$$

이고, [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해

$$
\begin{aligned}
&p_C(x) \\
&= (-x)\bigl((-x)(-a_2 - x) - (-a_1)\bigr) \\
&\quad - 1 \cdot \bigl(0 \cdot (-a_2 - x) - 1 \cdot (-a_0)\bigr) \\
&\quad + 0 \cdot \bigl(0 \cdot (-a_1) - (-x)(-a_0)\bigr) \\
&= (-x)(a_2 x + xx + a_1) - a_0 \\
&= -(a_0 + a_1 x + a_2 x^2 + x^3)
\end{aligned}
$$

이다. 둘째 줄의 $-(-a_1)$은 $3 \times 3$ 식의 $-a_{3,2}a_{2,3} = -1 \cdot (-a_1)$을 (K4)로 줄여 적은 것이고, 마지막 줄은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)의 $x^2 = xx$, $x^3 = x^2 x$를 쓴 것이다. [[polynomial-function|다항함수]]의 (3)에 의해 오른쪽은 $\bigl((-1)g\bigr)(x)$이므로 [[function|함수]]의 같음에 의해 $p_C = (-1)g$이다.

**(2)** (1)에 의해 모든 실수 $r$에서 $p_C(r) = -g(r)$이고, (K9)에 의해 $-g(r) = 0$인 것은 정확히 $g(r) = 0$일 때이다($-(-u) = u$와 $-0 = 0$). [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $r$가 $C$의 고윳값인 것은 정확히 $p_C(r) = 0$일 때이므로, 정확히 $g(r) = 0$일 때이다.

**(3)** 이때 $g = -6t^0 + 11t^1 - 6t^2 + 1\,t^3$이다. 실수 $x$에서 $(x - 1)(x - 2) = xx - 3x + 2$이고 $(xx - 3x + 2)(x - 3) = x^3 - 6x^2 + 11x - 6 = g(x)$이므로, [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 열의 곱의 값과 함수의 같음에 의해 $g = (t - 1)(t - 2)(t - 3)$이다. 같은 항목의 (2)의 마지막 문장에 의해 $g(r) = 0$인 것은 정확히 $r - 1$, $r - 2$, $r - 3$ 가운데 하나가 $0$일 때, 곧 ((K12)의 (v)) $r$가 $1$, $2$, $3$ 가운데 하나일 때이다. (2)에 의해 $C$의 고윳값은 정확히 $1$, $2$, $3$이다.
:::

:::exercise[고윳값이 같지만 특성다항식이 다른 두 행렬]
$D_1 = \operatorname{diag}(1, 1, 2)$, $D_2 = \operatorname{diag}(1, 2, 2)$라 하자. 두 행렬의 고윳값은 모두 정확히 $1$과 $2$이지만 $p_{D_1} \ne p_{D_2}$임을 보이고, $D_1$과 $D_2$가 닮지 않았음을 보여라.
:::

:::solution
[[diagonalizable|대각화 가능]]의 (4)에 의해 실수 $c$가 $D_1$의 고윳값인 것은 정확히 $c$가 대각성분 $1$, $1$, $2$ 가운데 하나와 같을 때, 곧 $c = 1$이거나 $c = 2$일 때이다. 같은 이유로 $D_2$의 고윳값도 정확히 $1$과 $2$이다.

[[characteristic-polynomial|특성다항식]]의 (2)에 의해 $p_{D_1}(0) = \det D_1$이고 $p_{D_2}(0) = \det D_2$이다. [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)와 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해 $\det D_1 = 1 \cdot 1 \cdot 2 = 2$이고 $\det D_2 = 1 \cdot 2 \cdot 2 = 4$이다. $2 \ne 4$이므로 두 함수는 $0$에서 값이 달라 [[function|함수]]의 같음에 의해 $p_{D_1} \ne p_{D_2}$이다.

$D_1$과 $D_2$가 닮았다면 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (4)에 의해 $p_{D_1} = p_{D_2}$일 것이다. 그렇지 않으므로 두 행렬은 닮지 않았다. 고윳값의 집합만으로는 $3 \times 3$ 행렬의 특성다항식이 정해지지 않고, 이 예에서는 고윳값이 대각선에 몇 번 나오는지가 특성다항식을 가른다.
:::
