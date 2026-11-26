---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5절, 연습문제 5.2 (p.94)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절, 연습문제 3.3 (p.85)"
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3.2절, Proposition 3.1 의 4 와 그 증명 (p.79–80)"
added: 2026-11-26
---

:::exercise[첫째 열에 0 이 둘인 4 × 4 행렬의 행렬식]
$$
A = \begin{pmatrix} 0 & 1 & 2 & 0 \\ 2 & 0 & 1 & 3 \\ -1 & 1 & 0 & 2 \\ 0 & 3 & 1 & 1 \end{pmatrix}
$$
이라 하자.

1. 소행렬 $A^{(2,1)}$과 $A^{(3,1)}$을 구하라.
2. 첫째 열 전개로 $\det A$를 구하라.
3. $A$의 셋째 행에 첫째 행의 $2$배를 더한 뒤, 그 행렬의 둘째 행과 넷째 행을 맞바꾼 행렬을 $B$라 하자. $\det B$를 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)에 의하고, 정수 사이의 구체적인 계산은 (K7)이다. 길이 $4$인 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 정의와 (H0)에 의해 첫 항부터 차례로 더한 것이다.

**(1)** [[minor-matrix|소행렬]]의 진술에서 $s_j(i)$는 $i < j$이면 $i$, $i \ge j$이면 $i + 1$이므로 $s_2(1) = 1$, $s_2(2) = 3$, $s_2(3) = 4$이고 $s_3(1) = 1$, $s_3(2) = 2$, $s_3(3) = 4$이다. 소행렬의 (2)에 의해 $(A^{(j,1)})_{i,l} = a_{s_j(i),\,l+1}$이므로, $A^{(j,1)}$의 $i$번째 행은 $A$의 $s_j(i)$번째 행의 둘째·셋째·넷째 성분을 차례로 늘어놓은 것이다. 따라서

$$
\begin{aligned}
A^{(2,1)} &= \begin{pmatrix} 1 & 2 & 0 \\ 1 & 0 & 2 \\ 3 & 1 & 1 \end{pmatrix}, \\
A^{(3,1)} &= \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 3 & 1 & 1 \end{pmatrix}
\end{aligned}
$$

이다. 앞의 것은 $A$의 첫째·셋째·넷째 행에서, 뒤의 것은 첫째·둘째·넷째 행에서 온 것이다.

**(2)** [[determinant|행렬식]]의 (3)에 의해 $\det A$는 $j$번째 항이 $(-1)^{j+1} a_{j,1} \det A^{(j,1)}$인 길이 $4$인 실수의 열의 합이다. $a_{1,1} = 0$이고 $a_{4,1} = 0$이므로 첫째 항과 넷째 항은 (K9)에 의해 $0$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^3 = -1$, $(-1)^4 = 1$이다.

두 소행렬의 행렬식은 행렬식의 (4)의 $3 \times 3$ 식으로 계산한다. $M = A^{(2,1)}$이면

$$
\begin{aligned}
\det M &= 1 \cdot (0 \cdot 1 - 1 \cdot 2) \\
&\quad - 1 \cdot (2 \cdot 1 - 1 \cdot 0) \\
&\quad + 3 \cdot (2 \cdot 2 - 0 \cdot 0) \\
&= -2 - 2 + 12 = 8
\end{aligned}
$$

이고, $N = A^{(3,1)}$이면

$$
\begin{aligned}
\det N &= 1 \cdot (1 \cdot 1 - 1 \cdot 3) \\
&\quad - 0 \cdot (2 \cdot 1 - 1 \cdot 0) \\
&\quad + 3 \cdot (2 \cdot 3 - 1 \cdot 0) \\
&= -2 - 0 + 18 = 16
\end{aligned}
$$

이다. 따라서 둘째 항은 $(-1) \cdot 2 \cdot 8 = -16$, 셋째 항은 $1 \cdot (-1) \cdot 16 = -16$이고

$$
\begin{aligned}
\det A &= \big((0 + (-16)) + (-16)\big) + 0 \\
&= -32
\end{aligned}
$$

이다.

**(3)** [[elementary-matrix|기본행렬]]의 (2)에 의해 $A$의 셋째 행에 첫째 행의 $2$배를 더한 행렬은 $R_{3,1}(2)A$이고, 그 둘째 행과 넷째 행을 맞바꾼 행렬은 $B = P_{2,4}\big(R_{3,1}(2)A\big)$이다. 행렬식의 (5)를 두 번 쓰면

$$
\begin{aligned}
\det B &= -\det\big(R_{3,1}(2)A\big) \\
&= -\det A = -(-32) = 32
\end{aligned}
$$

이다(마지막 등호는 (K9)의 $-(-a) = a$).
:::

:::exercise[매개변수가 들어간 3 × 3 행렬의 행렬식]
실수 $t$에 대하여
$$
M(t) = \begin{pmatrix} 1 & 1 & 1 \\ 1 & t & 1 \\ 1 & 1 & t \end{pmatrix}
$$
이라 하자.

1. 행 더하기를 두 번 하여 첫째 열의 둘째·셋째 성분을 $0$으로 만든 뒤 첫째 열 전개로 $\det M(t) = (t - 1)^2$임을 보여라.
2. $\det M(t) = 0$인 실수 $t$를 모두 구하라. 그 $t$에서 $\det M(t) = 0$을 행렬식 함수의 조건 (ii)로도 확인하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의하고, 뺄셈은 $a - b = a + (-b)$이다.

**(1)** [[elementary-matrix|기본행렬]]의 (2)에 의해 $R_{2,1}(-1)M(t)$는 $M(t)$의 둘째 행에 첫째 행의 $-1$배를 더한 행렬이다. 그 둘째 행은 $(1 - 1,\ t - 1,\ 1 - 1) = (0,\ t - 1,\ 0)$이고 나머지 행은 $M(t)$의 것이다. 여기에 다시 $R_{3,1}(-1)$을 곱하면 셋째 행이 $(1 - 1,\ 1 - 1,\ t - 1) = (0,\ 0,\ t - 1)$이 되어

$$
\begin{aligned}
N &= R_{3,1}(-1)\big(R_{2,1}(-1)M(t)\big) \\
&= \begin{pmatrix} 1 & 1 & 1 \\ 0 & t - 1 & 0 \\ 0 & 0 & t - 1 \end{pmatrix}
\end{aligned}
$$

이다. [[determinant|행렬식]]의 (5)를 두 번 쓰면 $\det N = \det\big(R_{2,1}(-1)M(t)\big) = \det M(t)$이다.

$n_{2,1} = n_{3,1} = 0$이므로 행렬식의 (3)의 첫째 열 전개에서 둘째와 셋째 항은 (K9)에 의해 $0$이다. 길이 $3$인 열의 합은 정의와 (H0)에 의해 $(x + 0) + 0$ 꼴이고 (K4)에 의해 첫째 항 $x$와 같으므로 $\det N = (-1)^{1+1} n_{1,1} \det N^{(1,1)} = \det N^{(1,1)}$이다($(-1)^2 = 1$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)). [[minor-matrix|소행렬]]의 (2)에 의해 $(N^{(1,1)})_{i,l} = n_{i+1,l+1}$이므로 $N^{(1,1)}$은 대각성분이 $t - 1$, $t - 1$이고 나머지 성분이 $0$인 $2 \times 2$ 행렬이다. 행렬식의 (4)에 의해

$$
\begin{aligned}
\det N^{(1,1)} &= (t - 1)(t - 1) - 0 \cdot 0 \\
&= (t - 1)^2
\end{aligned}
$$

이다(거듭제곱의 (1)의 $a^2 = aa$). 따라서 $\det M(t) = (t - 1)^2$이다.

**(2)** $(t - 1)^2 = (t - 1)(t - 1) = 0$이면 (K10)에 의해 $t - 1 = 0$이고, (K12)의 (v)에 의해 $t = 1$이다. 거꾸로 $t = 1$이면 $t - 1 = 0$이고 (K9)에 의해 $(t - 1)^2 = 0$이다. 따라서 $\det M(t) = 0$인 것은 정확히 $t = 1$일 때이다.

$t = 1$이면 $M(1)$의 세 행이 모두 $(1, 1, 1)$이다. 특히 첫째 행과 둘째 행이 같으므로 행렬식의 (1)의 (ii)에 의해 $\det M(1) = 0$이고, 이것은 위의 값과 맞는다.
:::

:::exercise[한 행이 다른 행들의 일차결합인 행렬]
$n \ge 2$인 자연수 $n$과 $n \times n$ 행렬 $A$, 번호 $p$, $q$, $r \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$가 주어져 있고 $q \ne p$, $r \ne p$라 하자($q = r$이어도 된다). $A$의 $p$번째 행이 $\alpha$($A$의 $q$번째 행) $+ \beta$($A$의 $r$번째 행)이라 하자.

1. 행렬식의 (1)의 (i)과 (ii)만으로 $\det A = 0$임을 보여라.
2. 위의 결과로
   $$
   C = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 3 & 1 \\ 2 & 1 & -3 \end{pmatrix}
   $$
   의 행렬식이 $0$임을 보이고, $3 \times 3$ 행렬식의 식으로 확인하라.
:::

:::solution
행렬의 행은 [[matrix|행렬]]에서 정한 $\mathbb{R}^n$의 원소이고, 두 행이 같은 것은 [[determinant-function|행렬식 함수]]의 (1)에 의해 정확히 같은 자리의 성분이 모두 같을 때이다.

**(1)** 각 $(i, l) \in \{1, \dots, n\} \times \{1, \dots, n\}$에 $i \ne p$이면 $a_{i,l}$, $i = p$이면 $a_{q,l}$을 대응시키면, [[real-function-space|(G)]]와 행렬의 (2)에 의해 그 수를 $(i, l)$ 성분으로 갖는 $n \times n$ 행렬 $A'$이 하나 있다. 같은 방법으로 $i \ne p$이면 $a_{i,l}$, $i = p$이면 $a_{r,l}$을 성분으로 갖는 행렬을 $A''$이라 하자.

$A$, $A'$, $A''$은 $p$번째 행을 뺀 모든 행에서 서로 같다. $A'$의 $p$번째 행은 $A$의 $q$번째 행이고, $q \ne p$이므로 $A'$의 $q$번째 행도 $A$의 $q$번째 행이다. 따라서 $A'$은 서로 다른 두 번호 $p$, $q$의 행이 같고, [[determinant|행렬식]]의 (1)의 (ii)에 의해 $\det A' = 0$이다. 같은 이유로 $r \ne p$에서 $\det A'' = 0$이다.

가정에 의해 $A$의 $p$번째 행은 $\alpha$($A'$의 $p$번째 행) $+ \beta$($A''$의 $p$번째 행)이므로, 행렬식의 (1)의 (i)에 의해

$$
\begin{aligned}
\det A &= \alpha \det A' + \beta \det A'' \\
&= \alpha \cdot 0 + \beta \cdot 0 = 0
\end{aligned}
$$

이다([[real-number-arithmetic|(K9)]]와 (K4)).

**(2)** $C$의 셋째 행은 $2(1, 2, -1) + (-1)(0, 3, 1) = (2, 4, -2) + (0, -3, -1) = (2, 1, -3)$이므로, (1)을 $n = 3$, $p = 3$, $q = 1$, $r = 2$, $\alpha = 2$, $\beta = -1$에 쓰면 $\det C = 0$이다. 행렬식의 (4)로 계산하면

$$
\begin{aligned}
\det C &= 1 \cdot \big(3 \cdot (-3) - 1 \cdot 1\big) \\
&\quad - 0 \cdot \big(2 \cdot (-3) - 1 \cdot (-1)\big) \\
&\quad + 2 \cdot \big(2 \cdot 1 - 3 \cdot (-1)\big) \\
&= -10 - 0 + 10 = 0
\end{aligned}
$$

으로 같다.
:::

:::exercise[행을 한 칸씩 아래로 돌린 행렬]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이라 하자. $B$를 첫째 행이 $A$의 $n$번째 행이고, $2 \le i \le n$인 $i$에서 $i$번째 행이 $A$의 $(i - 1)$번째 행인 $n \times n$ 행렬이라 하자.

1. $\det B = (-1)^{n-1} \det A$임을 보여라.
2. $n = 3$과 $n = 4$에서 $\det B$를 $\det A$로 나타내라.
:::

:::solution
$A$의 $i$번째 행을 $\mathbf{r}_i \in \mathbb{R}^n$으로 쓴다. 행이 모두 같은 두 $n \times n$ 행렬은 [[matrix|행렬]]의 (2)에 의해 같은 행렬이다. 행렬을 행으로 정할 때는 각 성분을 정해 [[real-function-space|(G)]]와 행렬의 (2)를 쓴다.

**(1)** $k \in \{1, \dots, n\}$마다 $C_k$를 다음 행을 갖는 $n \times n$ 행렬이라 하자. $i < k$이면 $i$번째 행이 $\mathbf{r}_i$, $i = k$이면 $\mathbf{r}_n$, $i > k$이면 $\mathbf{r}_{i-1}$이다. $C_n$은 $i < n$에서 $\mathbf{r}_i$, $i = n$에서 $\mathbf{r}_n$을 행으로 가지므로 $C_n = A$이고, $C_1$은 첫째 행이 $\mathbf{r}_n$이고 $i \ge 2$에서 $\mathbf{r}_{i-1}$이므로 $C_1 = B$이다.

$2 \le k \le n$이라 하자. [[elementary-matrix|기본행렬]]의 (2)에 의해 $P_{k-1,k}C_k$는 $C_k$의 $(k-1)$번째 행과 $k$번째 행을 맞바꾼 행렬이다. 그 $(k-1)$번째 행은 $C_k$의 $k$번째 행 $\mathbf{r}_n$, $k$번째 행은 $C_k$의 $(k-1)$번째 행 $\mathbf{r}_{k-1}$이고, 그 밖의 $i$번째 행은 $C_k$의 것, 곧 $i < k - 1$이면 $\mathbf{r}_i$, $i > k$이면 $\mathbf{r}_{i-1}$이다. 한편 $C_{k-1}$의 행은 $i < k - 1$이면 $\mathbf{r}_i$, $i = k - 1$이면 $\mathbf{r}_n$, $i > k - 1$이면 $\mathbf{r}_{i-1}$이어서 $i = k$에서 $\mathbf{r}_{k-1}$이다. 모든 행이 같으므로 $C_{k-1} = P_{k-1,k}C_k$이고, [[determinant|행렬식]]의 (5)에 의해 $\det C_{k-1} = -\det C_k$이다.

이제 $0 \le m \le n - 1$인 정수 $m$에 대하여 $\det C_{n-m} = (-1)^m \det A$임을 $m$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $m = 0$이면 $C_n = A$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $(-1)^0 = 1$이므로 성립한다. $m + 1 \le n - 1$이고 $m$에서 성립한다고 하자. $k = n - m$이라 하면 $k \ge 2$이므로 위에서 보인 것에 의해

$$
\begin{aligned}
\det C_{n-m-1} &= -\det C_{n-m} \\
&= (-1)\big((-1)^m \det A\big) \\
&= \big((-1)^m(-1)\big) \det A \\
&= (-1)^{m+1} \det A
\end{aligned}
$$

이다. 둘째 등호는 [[real-number-arithmetic|(K9)]]의 $(-1)a = -a$, 셋째는 (K1)과 (K2), 넷째는 거듭제곱의 정의 $a^{m+1} = a^m \cdot a$이다. 따라서 모든 $m$에서 성립하고, $m = n - 1$로 두면 $\det B = \det C_1 = (-1)^{n-1} \det A$이다. $n = 1$이면 $B = A$이고 이 등식은 $\det A = \det A$이다.

**(2)** 거듭제곱의 (5)에 의해 $(-1)^2 = 1$, $(-1)^3 = -1$이므로 $n = 3$이면 $\det B = \det A$이고 $n = 4$이면 $\det B = -\det A$이다.
:::

:::exercise[두 행을 맞바꾸면 부호가 바뀌는 함수 하나 정하기]
함수 $f : M_{2 \times 2} \to \mathbb{R}$가 행렬식 함수의 조건 (i)을 만족하고, 모든 $A \in M_{2 \times 2}$에서 $f(P_{1,2}A) = -f(A)$이며, $f(I_2) = 3$이라 하자.

1. 모든 $A \in M_{2 \times 2}$에서 $f(A) = 3 \det A$임을 보여라.
2. 거꾸로 $A$를 $3 \det A$로 보내는 함수가 위의 세 조건을 모두 만족함을 보여라. 따라서 세 조건을 만족하는 함수는 정확히 하나이다.
3. $f\begin{pmatrix} 2 & 5 \\ 1 & 4 \end{pmatrix}$를 구하라.
:::

:::solution
**(1)** [[elementary-matrix|기본행렬]]의 정의에서 $P_{j,k}$는 $\tau(j) = k$, $\tau(k) = j$인 함수 $\tau$로 정한다. $m = 2$에서 $(j, k) = (1, 2)$와 $(j, k) = (2, 1)$은 같은 함수 $\tau$($\tau(1) = 2$, $\tau(2) = 1$)를 주므로 두 행렬의 성분이 모두 같고, [[matrix|행렬]]의 (2)에 의해 $P_{2,1} = P_{1,2}$이다. $\{1, 2\}$에서 $j \ne k$인 순서쌍은 이 둘뿐이므로, 가정은 $j \ne k$인 모든 $j$, $k$와 모든 $A$에서 $f(P_{j,k}A) = -f(A)$라는 것이다.

$f$는 조건 (i)을 만족하므로 [[determinant-function|행렬식 함수]]의 (5)의 (b)($n = 2$)에 의해 조건 (ii)도 만족한다. [[determinant|행렬식]]의 (8)에 의해 모든 $A$에서 $f(A) = f(I_2) \det A = 3 \det A$이다.

**(2)** $g(A) = 3 \det A$라 하자. $A$, $B$, $C$가 조건 (i)의 가정을 만족하면 행렬식의 (1)의 (i)에 의해 $\det C = \alpha \det A + \beta \det B$이고, [[real-number-arithmetic|(K3)]], (K1), (K2)에 의해 $g(C) = 3(\alpha \det A + \beta \det B) = \alpha g(A) + \beta g(B)$이다. 행렬식의 (5)에 의해 $\det(P_{1,2}A) = -\det A$이므로 (K12)의 (ii)에 의해 $g(P_{1,2}A) = 3(-\det A) = -(3 \det A) = -g(A)$이다. 행렬식의 (1)의 (iii)에 의해 $g(I_2) = 3 \cdot 1 = 3$이다. 따라서 $g$는 세 조건을 만족하고, (1)에 의해 세 조건을 만족하는 함수는 모두 $g$와 같다.

**(3)** 행렬식의 (4)에 의해 $\det \begin{pmatrix} 2 & 5 \\ 1 & 4 \end{pmatrix} = 2 \cdot 4 - 1 \cdot 5 = 3$이므로 (1)에 의해 값은 $3 \cdot 3 = 9$이다.
:::

:::exercise[조건 (ii)와 (iii)만 만족하는 함수]
$n$이 자연수이고, 함수 $f : M_{n \times n} \to \mathbb{R}$를 $f(A) = (\det A)^3$으로 정하자.

1. $f$가 행렬식 함수의 조건 (ii)와 (iii)을 만족함을 보여라.
2. $f$가 조건 (i)을 만족하지 않음을, 조건 (i)의 가정을 만족하지만 결론이 거짓인 $p$, $\alpha$, $\beta$, $A$, $B$, $C$를 들어 보여라.
3. 조건 (ii)와 (iii)을 만족하는 함수 $M_{n \times n} \to \mathbb{R}$가 $\det$ 하나뿐은 아님을 설명하라.
:::

:::solution
거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고 $a^3 = (aa)a$이다(그 항목의 정의와 (1)).

**(1)** $A$의 서로 다른 두 행이 같으면 [[determinant|행렬식]]의 (1)의 (ii)에 의해 $\det A = 0$이고, 거듭제곱의 (2)의 (iv)에 의해 $f(A) = 0^3 = 0$이다. 행렬식의 (1)의 (iii)에 의해 $\det I_n = 1$이므로 (2)의 (iv)에 의해 $f(I_n) = 1^3 = 1$이다.

**(2)** $p = 1$, $\alpha = \beta = 1$, $A = B = I_n$이라 하고, $C$를 [[elementary-matrix|기본행렬]] $D_1(2)$라 하자. 기본행렬의 정의에 의해 $D_1(2)$의 $(1, 1)$ 성분은 $2$이고, $i \ge 2$인 $i$번째 행은 $I_n$의 $i$번째 행과 같으며, 첫째 행의 $q \ge 2$번째 성분은 $0$이다. 따라서 $A$, $B$, $C$는 첫째 행을 뺀 모든 행에서 같고, $C$의 첫째 행 $(2, 0, \dots, 0)$은 $1(1, 0, \dots, 0) + 1(1, 0, \dots, 0)$, 곧 $\alpha$($A$의 첫째 행) $+ \beta$($B$의 첫째 행)이다($n = 1$이면 각 행은 성분이 하나인 $(2)$와 $(1)$이다). 조건 (i)의 가정이 모두 성립한다.

행렬식의 (5)에 의해 $\det C = \det D_1(2) = 2$이므로 $f(C) = 2^3 = 8$이다. 한편 (1)에 의해 $\alpha f(A) + \beta f(B) = 1 + 1 = 2$이다. $8 \ne 2$이므로([[real-number-arithmetic|(K7)]]) 조건 (i)의 결론 $f(C) = \alpha f(A) + \beta f(B)$가 거짓이다.

**(3)** 행렬식의 (1)에 의해 $\det$는 조건 (i)–(iii)을 모두 만족하므로 (ii)와 (iii)도 만족한다. (1)에 의해 $f$도 (ii)와 (iii)을 만족한다. 그런데 (2)의 $C = D_1(2)$에서 $f(C) = 8$이고 $\det C = 2$이므로 $f \ne \det$이다. 따라서 (ii)와 (iii)만으로는 함수가 하나로 정해지지 않는다. [[determinant-function-is-unique|행렬식 함수의 유일성]]의 (1)은 세 조건을 모두 가정하고, $f$는 (2)에서 보았듯이 조건 (i)을 만족하지 않으므로 행렬식 함수가 아니어서 그 정리와 어긋나지 않는다.
:::
