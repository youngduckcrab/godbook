---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5절, 연습문제 5.4 (p.95)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5.2절, Example (Inverse of a polynomial matrix) (p.94)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5.2절, Example (Matrix with integer inverse) (p.94)"
added: 2026-11-26
---

:::exercise[대각선 바로 위에 매개변수가 있는 3 × 3 행렬의 역행렬]
실수 $t$에 대하여
$$
U(t) = \begin{pmatrix} 1 & t & 0 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{pmatrix}
$$
이라 하자.

1. $U(t)$의 아홉 여인수를 구하고 $\operatorname{cof} U(t)$와 $\operatorname{adj} U(t)$를 적어라.
2. $\det U(t)$와 $U(t)^{-1}$을 구하라.
3. $U(t)^{-1} = U(-t)$인 실수 $t$를 모두 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, $t^2 = tt$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)이다. $(-1)^{j+k}$는 $j + k$가 짝수이면 $1$, 홀수이면 $-1$이다(거듭제곱의 (5)).

**(1)** [[minor-matrix|소행렬]] $U(t)^{(j,k)}$는 $j$번째 행과 $k$번째 열을 지운 $2 \times 2$ 행렬이고, 그 행렬식은 [[determinant|행렬식]]의 (4)로 계산한다. [[cofactor-expansion|여인수 전개]]에서 정한 $(j, k)$ 여인수 $(-1)^{j+k} \det U(t)^{(j,k)}$는 다음과 같다.

| $(j, k)$ | 소행렬 | 행렬식 | 여인수 |
|---|---|---|---|
| $(1, 1)$ | $\begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$ | $1$ | $1$ |
| $(1, 2)$ | $\begin{pmatrix} 0 & t \\ 0 & 1 \end{pmatrix}$ | $0$ | $0$ |
| $(1, 3)$ | $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ | $0$ | $0$ |
| $(2, 1)$ | $\begin{pmatrix} t & 0 \\ 0 & 1 \end{pmatrix}$ | $t$ | $-t$ |
| $(2, 2)$ | $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ | $1$ | $1$ |
| $(2, 3)$ | $\begin{pmatrix} 1 & t \\ 0 & 0 \end{pmatrix}$ | $0$ | $0$ |
| $(3, 1)$ | $\begin{pmatrix} t & 0 \\ 1 & t \end{pmatrix}$ | $t^2$ | $t^2$ |
| $(3, 2)$ | $\begin{pmatrix} 1 & 0 \\ 0 & t \end{pmatrix}$ | $t$ | $-t$ |
| $(3, 3)$ | $\begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$ | $1$ | $1$ |

예컨대 $(3, 1)$ 소행렬은 첫째·둘째 행의 둘째·셋째 성분으로 된 행렬이고 그 행렬식은 $t \cdot t - 1 \cdot 0 = t^2$이다. [[adjugate-matrix|여인수행렬과 수반행렬]]의 정의에 의해

$$
\begin{aligned}
\operatorname{cof} U(t) &= \begin{pmatrix} 1 & 0 & 0 \\ -t & 1 & 0 \\ t^2 & -t & 1 \end{pmatrix}, \\
\operatorname{adj} U(t) &= \begin{pmatrix} 1 & -t & t^2 \\ 0 & 1 & -t \\ 0 & 0 & 1 \end{pmatrix}
\end{aligned}
$$

이다. 뒤의 것은 앞의 것의 [[transpose|전치행렬]]이다.

**(2)** $U(t)$는 위삼각행렬이고 대각성분이 모두 $1$이므로 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (3)과 [[finite-product-of-reals|실수의 유한 곱]]의 (4)에 의해 $\det U(t) = 1$이다. [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (2)에 의해 $U(t)$는 가역이고 $U(t)^{-1} = 1^{-1} \operatorname{adj} U(t) = \operatorname{adj} U(t)$이다($1 \cdot 1 = 1$이므로 (K8)의 (iii)에 의해 $1^{-1} = 1$이고, [[vector-space|벡터공간]]의 (V5)에 의해 $1M = M$).

확인으로 $U(t) \operatorname{adj} U(t)$의 성분을 [[matrix-product|행렬의 곱]]의 (2)로 계산하면, 예컨대 $(1, 2)$ 성분은 $1 \cdot (-t) + t \cdot 1 + 0 \cdot 0 = 0$, $(1, 3)$ 성분은 $1 \cdot t^2 + t \cdot (-t) + 0 \cdot 1 = 0$, $(2, 3)$ 성분은 $0 \cdot t^2 + 1 \cdot (-t) + t \cdot 1 = 0$이고, 대각성분은 모두 $1$, 대각선 아래 성분은 모두 $0$이어서 $I_3$이 나온다.

**(3)** $U(-t)$의 $(1, 3)$ 성분은 $0$이고 $U(t)^{-1}$의 $(1, 3)$ 성분은 $t^2$이다. 두 행렬의 나머지 성분은 서로 같다($(1, 2)$와 $(2, 3)$ 성분이 둘 다 $-t$이고, 대각성분이 $1$, 대각선 아래가 $0$이다). [[matrix|행렬]]의 (2)에 의해 $U(t)^{-1} = U(-t)$인 것은 정확히 $t^2 = tt = 0$일 때이고, (K10)과 (K9)에 의해 이것은 정확히 $t = 0$일 때이다. $t = 0$이면 두 행렬은 모두 $I_3$이다.
:::

:::exercise[매개변수가 있는 연립방정식을 크라메르 공식으로 풀기]
실수 $a$를 하나 정하고
$$
A = \begin{pmatrix} 1 & a & 0 \\ a & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}, \qquad b = (1, 1, 0)
$$
이라 하자.

1. $\det A = 1 - a^2$임을 보여라.
2. $a \ne 1$이고 $a \ne -1$이면 $Ax = b$의 해가 하나뿐이고 $x = \big((1 + a)^{-1},\ (1 + a)^{-1},\ -2(1 + a)^{-1}\big)$임을 크라메르 공식으로 보여라.
3. $a = -1$이면 $Ax = b$의 해가 없음을 크라메르 공식의 (3)으로 보여라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, $a^2 = aa$이다. $3 \times 3$ 행렬식은 [[determinant|행렬식]]의 (4)의 식으로 계산하고, $A_k(b)$는 [[cramers-rule|크라메르 공식]]에서 정한 $A$의 $k$번째 열을 $b$로 바꾼 행렬이다.

**(1)** 행렬식의 (4)에 의해

$$
\begin{aligned}
\det A &= 1 \cdot (1 \cdot 1 - 1 \cdot 0) \\
&\quad - a \cdot (a \cdot 1 - 1 \cdot 0) \\
&\quad + 1 \cdot (a \cdot 0 - 1 \cdot 0) \\
&= 1 - a^2
\end{aligned}
$$

이다.

**(2)** 같은 식으로

$$
\begin{aligned}
\det A_1(b) &= \det \begin{pmatrix} 1 & a & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \\
&= 1 \cdot 1 - 1 \cdot a + 0 \\
&= 1 - a, \\
\det A_2(b) &= \det \begin{pmatrix} 1 & 1 & 0 \\ a & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \\
&= 1 \cdot 1 - a \cdot 1 + 1 \cdot 0 \\
&= 1 - a, \\
\det A_3(b) &= \det \begin{pmatrix} 1 & a & 1 \\ a & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix} \\
&= 1 \cdot (0 - 1) - a \cdot (0 - 1) \\
&\quad + 1 \cdot (a - 1) \\
&= 2a - 2 = -2(1 - a)
\end{aligned}
$$

이다. 분배법칙 (K3), (K12)로 전개하면 $(1 - a)(1 + a) = 1 + a - a - a^2 = 1 - a^2$이다. $a \ne 1$, $a \ne -1$이면 (K12)의 (v)에 의해 $1 - a \ne 0$, $1 + a \ne 0$이므로, (K12)의 (vi)에 의해 $\det A = (1 - a)(1 + a) \ne 0$이고 $(\det A)^{-1} = (1 - a)^{-1}(1 + a)^{-1}$이다.

크라메르 공식의 (2)에 의해 $Ax = b$인 $x$가 정확히 하나 있고

$$
\begin{aligned}
x_1 &= (1 - a)^{-1}(1 + a)^{-1}(1 - a) \\
&= (1 + a)^{-1}, \\
x_2 &= (1 + a)^{-1}, \\
x_3 &= (1 - a)^{-1}(1 + a)^{-1} \\
&\qquad \cdot (-2)(1 - a) \\
&= -2(1 + a)^{-1}
\end{aligned}
$$

이다((K1), (K2), $(1 - a)^{-1}(1 - a) = 1$과 (K4)). 확인하면 첫째 식은 $x_1 + a x_2 = (1 + a)(1 + a)^{-1} = 1$, 둘째 식은 $a x_1 + x_2 = 1$, 셋째 식은 $x_1 + x_2 + x_3 = 2(1 + a)^{-1} - 2(1 + a)^{-1} = 0$이다.

**(3)** $a = -1$이면 (1)에 의해 $\det A = 1 - 1 = 0$이고, (2)의 계산에 의해 $\det A_1(b) = 1 - (-1) = 2 \ne 0$이다. 크라메르 공식의 (3)에 의해 $Ax = b$인 $x$는 없다. 실제로 이때 첫째 식은 $x_1 - x_2 = 1$, 둘째 식은 $-x_1 + x_2 = 1$이고, 두 식을 더하면 $0 = 2$가 되어 맞지 않는다.
:::

:::exercise[곱의 수반행렬]
$n \ge 2$인 자연수 $n$과 가역인 $n \times n$ 행렬 $A$, $B$에 대하여 다음을 보여라.

1. $\operatorname{adj}(AB) = (\operatorname{adj} B)(\operatorname{adj} A)$이다.
2. $\operatorname{adj} A$는 가역이고 $(\operatorname{adj} A)^{-1} = \operatorname{adj}(A^{-1})$이다.
:::

:::solution
행렬의 스칼라배에 관한 계산은 [[matrix|행렬]]의 (1)에 의해 $M_{n \times n}$이 [[vector-space|벡터공간]]이라는 것((V5)의 $1M = M$, (V6)의 $(\alpha\beta)M = \alpha(\beta M)$)과 [[matrix-product-properties|행렬 곱의 성질]]의 (3)으로 한다. (3)을 두 번 쓰면 실수 $\alpha$, $\beta$와 $n \times n$ 행렬 $X$, $Y$에서 $(\alpha X)(\beta Y) = \alpha\big(X(\beta Y)\big) = \alpha\big(\beta(XY)\big) = (\alpha\beta)(XY)$이다.

먼저 가역인 $n \times n$ 행렬 $C$에서 $\operatorname{adj} C = (\det C)C^{-1}$임을 보인다. [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (2)에 의해 $\det C \ne 0$이고 $C^{-1} = (\det C)^{-1} \operatorname{adj} C$이므로, [[real-number-arithmetic|(K8)]]의 (iii)의 $(\det C)(\det C)^{-1} = 1$에 의해

$$
\begin{aligned}
(\det C)C^{-1} &= \big((\det C)(\det C)^{-1}\big) \\
&\qquad \operatorname{adj} C \\
&= \operatorname{adj} C
\end{aligned}
$$

이다. 이것을 (가)라 부른다.

**(1)** [[inverse-matrix-properties|역행렬의 성질]]의 (3)에 의해 $AB$는 가역이고 $(AB)^{-1} = B^{-1}A^{-1}$이며, [[determinant-of-product|곱의 행렬식]]의 (1)에 의해 $\det(AB) = \det A \cdot \det B$이다. (가)를 $C = AB$, $C = B$, $C = A$에 쓰면

$$
\begin{aligned}
&\operatorname{adj}(AB) \\
&= (\det A \cdot \det B)(B^{-1}A^{-1}) \\
&= (\det B \cdot \det A)(B^{-1}A^{-1}) \\
&= \big((\det B)B^{-1}\big)\big((\det A)A^{-1}\big) \\
&= (\operatorname{adj} B)(\operatorname{adj} A)
\end{aligned}
$$

이다. 둘째 등호는 (K1), 셋째는 위의 $(\alpha X)(\beta Y) = (\alpha\beta)(XY)$이다.

**(2)** 역행렬의 성질의 (2)에 의해 $A^{-1}$도 가역이다. (1)을 $A^{-1}$과 $A$의 곱, $A$와 $A^{-1}$의 곱에 쓰고 [[invertible-matrix|가역행렬과 역행렬]]의 (1)의 $A^{-1}A = AA^{-1} = I_n$과 [[adjugate-matrix|여인수행렬과 수반행렬]]의 (3)의 $\operatorname{adj} I_n = I_n$을 쓰면

$$
\begin{aligned}
&(\operatorname{adj} A)\big(\operatorname{adj}(A^{-1})\big) \\
&= \operatorname{adj}(A^{-1}A) = I_n, \\
&\big(\operatorname{adj}(A^{-1})\big)(\operatorname{adj} A) \\
&= \operatorname{adj}(AA^{-1}) = I_n
\end{aligned}
$$

이다. 따라서 $\operatorname{adj}(A^{-1})$은 $\operatorname{adj} A$의 왼쪽 역이자 오른쪽 역이고, 가역행렬과 역행렬의 정의와 (1)에 의해 $\operatorname{adj} A$는 가역이며 $(\operatorname{adj} A)^{-1} = \operatorname{adj}(A^{-1})$이다.
:::

:::exercise[수반행렬의 수반행렬]
$n \ge 2$인 자연수 $n$과 $n \times n$ 행렬 $A$에 대하여 다음을 보여라.

1. $\det A \ne 0$이면 $\operatorname{adj}(\operatorname{adj} A) = (\det A)^{n-2} A$이다.
2. $n = 2$이면 $\det A = 0$인 경우까지 포함해 언제나 $\operatorname{adj}(\operatorname{adj} A) = A$이다.
:::

:::solution
스칼라배의 계산은 [[matrix|행렬]]의 (1)에 의해 $M_{n \times n}$이 [[vector-space|벡터공간]]이라는 것((V5), (V6))과 [[matrix-product-properties|행렬 곱의 성질]]의 (3), (4)로 하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. $d^k$는 [[power-of-a-real-number|실수의 거듭제곱]]이다.

**(1)** $d = \det A \ne 0$이라 하자. [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (2)에 의해 $A$는 가역이고 $A^{-1} = d^{-1} \operatorname{adj} A$이므로, (V6), (K8)의 (iii), (V5)에 의해 $dA^{-1} = (dd^{-1}) \operatorname{adj} A = \operatorname{adj} A$이다.

수반행렬과 역행렬의 공식의 (5)에 의해 $\det(\operatorname{adj} A) = d^{n-1}$이고, 거듭제곱의 (3)에 의해 $d^{n-1} \ne 0$이다. $\operatorname{adj} A$는 $n \times n$ 행렬이고 $n \ge 2$이므로 같은 공식의 (2)를 $\operatorname{adj} A$에 쓸 수 있다. $\operatorname{adj} A$는 가역이고, 위와 같은 계산으로 $\operatorname{adj}(\operatorname{adj} A) = d^{n-1}(\operatorname{adj} A)^{-1} = d^{n-1}(dA^{-1})^{-1}$이다.

$(dA^{-1})(d^{-1}A) = (dd^{-1})(A^{-1}A) = 1 \cdot I_n = I_n$이고, 같은 방법으로 $(d^{-1}A)(dA^{-1}) = (d^{-1}d)(AA^{-1}) = I_n$이다(행렬 곱의 성질의 (3)을 두 번, [[invertible-matrix|가역행렬과 역행렬]]의 (1)). 가역행렬과 역행렬의 (1)의 유일성에 의해 $(dA^{-1})^{-1} = d^{-1}A$이다. 따라서

$$
\begin{aligned}
\operatorname{adj}(\operatorname{adj} A) &= d^{n-1}(d^{-1}A) \\
&= (d^{n-1}d^{-1})A
\end{aligned}
$$

이다. $n - 2 \ge 0$이므로 거듭제곱의 정의에 의해 $d^{n-1} = d^{n-2}d$이고, (K2), (K8)의 (iii), (K4)에 의해 $d^{n-1}d^{-1} = d^{n-2}(dd^{-1}) = d^{n-2}$이다. 따라서 $\operatorname{adj}(\operatorname{adj} A) = d^{n-2}A$이다.

**(2)** $n = 2$이고 $B = \operatorname{adj} A$라 하자. [[adjugate-matrix|여인수행렬과 수반행렬]]의 (1)에 의해 $b_{1,1} = a_{2,2}$, $b_{1,2} = -a_{1,2}$, $b_{2,1} = -a_{2,1}$, $b_{2,2} = a_{1,1}$이다. 같은 (1)을 $B$에 쓰면 $\operatorname{adj} B$의 성분은

$(\operatorname{adj} B)_{1,1} = b_{2,2} = a_{1,1}$, $(\operatorname{adj} B)_{1,2} = -b_{1,2} = -(-a_{1,2}) = a_{1,2}$, $(\operatorname{adj} B)_{2,1} = -b_{2,1} = -(-a_{2,1}) = a_{2,1}$, $(\operatorname{adj} B)_{2,2} = b_{1,1} = a_{2,2}$이다((K9)의 $-(-a) = a$). [[matrix|행렬]]의 (2)에 의해 $\operatorname{adj}(\operatorname{adj} A) = A$이다. 이 계산은 $\det A$에 대한 가정을 쓰지 않는다. $\det A \ne 0$이면 이것은 (1)에서 $n = 2$, $d^0 = 1$인 경우와 맞는다.
:::

:::exercise[성분이 정수인 연립방정식의 정수 해]
$n$이 자연수이고 $A$가 성분이 모두 정수인 $n \times n$ 행렬이며, $b = (b_1, \dots, b_n) \in \mathbb{R}^n$의 값 $b_1, \dots, b_n$이 모두 정수라 하자.

1. $\det A = 1$이거나 $\det A = -1$이면 $Ax = b$의 해가 정확히 하나 있고 그 값이 모두 정수임을 크라메르 공식으로 보여라.
2. $A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $b = (1, 0)$이면 $Ax = b$의 해가 하나뿐이지만 그 값이 정수가 아님을 보여라.
:::

:::solution
정수는 [[real-number-arithmetic|(K7)]]에 의해 실수이고, 정수끼리의 합과 곱은 정수이다.

**(1)** $\det A \ne 0$이므로 [[cramers-rule|크라메르 공식]]의 (2)에 의해 $Ax = b$인 $x$가 정확히 하나 있고 $x_k = (\det A)^{-1} \det A_k(b)$이다. $A_k(b)$의 성분은 $A$의 성분이거나 $b$의 값이므로 모두 정수이고, [[integer-matrix-inverse|정수 성분 행렬의 역행렬]]의 (1)에 의해 $\det A_k(b)$는 정수이다. 한편 $1 \cdot 1 = 1$이고 (K12)의 (iii)에 의해 $(-1)(-1) = 1$이므로, (K8)의 (iii)에 의해 $\det A$가 $1$이나 $-1$이면 $(\det A)^{-1} = \det A$이다. 따라서 $x_k = \det A \cdot \det A_k(b)$는 두 정수의 곱이고 정수이다.

**(2)** [[determinant|행렬식]]의 (4)에 의해 $\det A = 1 \cdot (-1) - 1 \cdot 1 = -2 \ne 0$이고

$$
\begin{aligned}
\det A_1(b) &= \det \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix} = -1, \\
\det A_2(b) &= \det \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} = -1
\end{aligned}
$$

이다. 크라메르 공식의 (2)에 의해 해가 하나뿐이고 $x_1 = x_2 = (-2)^{-1}(-1)$이다. $(-2)(2^{-1}) = -1$이므로((K12)의 (ii)와 (K8)의 (iii)) 이 값은 $2^{-1}$이다. 확인하면 $2^{-1} + 2^{-1} = (1 + 1)2^{-1} = 1$, $2^{-1} - 2^{-1} = 0$이다.

$2^{-1}$이 정수 $m$이라면 $2m = 1$이고, 정수 성분 행렬의 역행렬의 (3)에 의해 $2 = m = 1$이거나 $2 = m = -1$이어야 하는데 $2 \ne 1$, $2 \ne -1$이다((K7)). 따라서 $x_1 = 2^{-1}$은 정수가 아니다. $\det A = -2$이므로 (1)의 가정이 성립하지 않는다.
:::

:::exercise[영행렬이 아닌데 수반행렬이 영행렬인 예]
1. $2 \times 2$ 행렬 $A$의 수반행렬 $\operatorname{adj} A$가 영행렬이면 $A$도 영행렬임을 보여라.
2. $n = 3$에서 $(1, 1)$ 성분이 $1$이고 나머지 성분이 모두 $0$인 행렬 $A$의 수반행렬이 영행렬임을 보여라. 따라서 (1)의 결론은 $n = 3$에서 성립하지 않는다.
:::

:::solution
**(1)** [[adjugate-matrix|여인수행렬과 수반행렬]]의 (1)에 의해 $\operatorname{adj} A$의 성분은 $a_{2,2}$, $-a_{1,2}$, $-a_{2,1}$, $a_{1,1}$이다. 이것이 모두 $0$이면 $a_{2,2} = a_{1,1} = 0$이고, $-a_{1,2} = 0$에서 [[real-number-arithmetic|(K9)]]에 의해 $a_{1,2} = -(-a_{1,2}) = -0 = 0$이며 같은 방법으로 $a_{2,1} = 0$이다($-0 = 0$은 $0 + 0 = 0$과 (K8)의 (ii)). [[matrix|행렬]]의 (1)과 (2)에 의해 $A$는 영행렬이다.

**(2)** $A$의 둘째 행과 셋째 행은 모두 [[echelon-form|영행]]이다. $j$, $k \in \{1, 2, 3\}$이라 하자. [[minor-matrix|소행렬]]의 (1)에 의해 $s_j(1) \ne s_j(2)$이므로 두 수가 모두 $1$일 수는 없고, $s_j(i) \in \{2, 3\}$인 $i \in \{1, 2\}$가 있다. 소행렬의 정의에 의해 $A^{(j,k)}$의 $i$번째 행의 성분은 $a_{s_j(i),\,s_k(l)}$($l = 1, 2$)이고, $A$의 $s_j(i)$번째 행이 영행이므로 모두 $0$이다. 따라서 $A^{(j,k)}$는 영행을 갖고 [[determinant|행렬식]]의 (7)의 (a)에 의해 $\det A^{(j,k)} = 0$이며, (K9)에 의해 $(j, k)$ 여인수 $(-1)^{j+k} \det A^{(j,k)}$는 $0$이다.

모든 여인수가 $0$이므로 $\operatorname{cof} A$는 영행렬이고, [[transpose|전치행렬]]의 정의에 의해 그 전치행렬 $\operatorname{adj} A$의 성분도 모두 $0$이다. $A$는 $(1, 1)$ 성분이 $1 \ne 0$이므로 영행렬이 아니다. 이것은 [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (4)와 맞는다. $A$의 둘째 행이 영행이므로 $\det A = 0$이고, 그때 $A \operatorname{adj} A$는 영행렬이어야 한다.
:::
