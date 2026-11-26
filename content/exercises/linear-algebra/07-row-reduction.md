---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3절, 연습문제 3.1 (p.51); 2장 7.2.3절 The row space, p.63–64"
added: 2026-11-26
---

:::exercise[미지수가 넷인 연립방정식]
연립방정식

$$
\begin{aligned}
x_1 + 2x_2 - x_3 + x_4 &= 2\\
2x_1 + 4x_2 - x_3 + 4x_4 &= 7\\
-x_1 - 2x_2 + 2x_3 + x_4 &= 1
\end{aligned}
$$

의 계수행렬을 $A$, 우변을 $b$라 하자.

1. 첨가행렬 $(A \mid b)$를 기본 행 연산으로 기약 사다리꼴로 만들고, 쓴 기본행렬을 차례로 적어라.
2. 해집합을 구하라.
3. $\operatorname{rank} A$와 $\operatorname{nullity} T_A$를 구하라.
:::

:::solution
[[system-of-linear-equations|연립일차방정식]]의 (1)에 의해 이 연립방정식은

$$
\begin{aligned}
A &= \begin{pmatrix} 1 & 2 & -1 & 1 \\ 2 & 4 & -1 & 4 \\ -1 & -2 & 2 & 1 \end{pmatrix},\\
b &= (2, 7, 1)
\end{aligned}
$$

인 $Ax = b$와 같은 조건이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

**(1)** 각 행 연산의 결과는 [[elementary-matrix|기본행렬과 기본 행 연산]]의 (2)로 계산한다.

- $R_{2,1}(-2)$: 둘째 행에 첫째 행의 $-2$배를 더해 $(0, 0, 1, 2 \mid 3)$으로 만든다.
- $R_{3,1}(1)$: 셋째 행에 첫째 행을 더해 $(0, 0, 1, 2 \mid 3)$으로 만든다.
- $R_{3,2}(-1)$: 셋째 행에서 둘째 행을 빼 영행으로 만든다.
- $R_{1,2}(1)$: 첫째 행에 둘째 행을 더해 $(1, 2, 0, 3 \mid 5)$로 만든다.

$$
\begin{aligned}
&\left(\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 2 \\ 2 & 4 & -1 & 4 & 7 \\ -1 & -2 & 2 & 1 & 1 \end{array}\right)\\
&\to \left(\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 2 \\ 0 & 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 & 3 \end{array}\right)\\
&\to \left(\begin{array}{cccc|c} 1 & 2 & 0 & 3 & 5 \\ 0 & 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right)
\end{aligned}
$$

(첫째 화살표는 처음 두 연산, 둘째 화살표는 나머지 두 연산이다.) $E = R_{1,2}(1)\, R_{3,2}(-1)\, R_{3,1}(1)\, R_{2,1}(-2)$로 두면 [[row-equivalence|행 동치]]의 (1), (2)에 의해 $E$는 기본행렬의 곱이고, [[matrix-product-properties|행렬 곱의 성질]]의 (1)에 의해 $E(A \mid b)$는 마지막 행렬 $M$이다. $M$은 $r = 2$, $\ell_1 = 1$, $\ell_2 = 3$으로 [[echelon-form|사다리꼴과 기약 사다리꼴]]의 (가)–(라)를 만족한다. 첫째 행의 처음 $0$이 아닌 성분은 첫째 열의 $1$이고, 둘째 행은 처음 두 성분이 $0$이고 셋째 성분이 $1$이며, $1 < 3$이고, 셋째 행은 영행이고, 첫째 열은 $e_1$, 셋째 열은 $e_2$이다.

**(2)** 연립일차방정식의 (4)에 의해 $E(A \mid b) = (EA \mid Eb)$이고, 같은 항목의 (3)에 의해 $U = EA$는 $M$의 처음 네 열로 된 행렬, $c = Eb = (5, 3, 0)$이다. [[solutions-from-reduced-echelon-form|기약 사다리꼴에서 해 읽기]]의 (7)에 의해 $U$는 기약 사다리꼴이고 $Ax = b$의 해집합은 $Ux = c$의 해집합과 같다. $U$의 피벗 열의 번호는 $1$, $3$이고 자유 열의 번호의 집합은 $N = \{2, 4\}$이다. $c_3 = 0$이므로 같은 항목의 (2)에 의해 해가 있다.

실수 $s$, $t$에 대하여 $f(2) = s$, $f(4) = t$로 두면 $f' = (0, s, 0, t)$이고, 행 규칙으로 $Uf'$의 첫째 값은 $2s + 3t$, 둘째 값은 $2t$이다. 같은 항목의 (3)에 의해 둘째 값이 $s$이고 넷째 값이 $t$인 해는 정확히 하나이고

$$
x = (5 - 2s - 3t,\ s,\ 3 - 2t,\ t)
$$

이다. 모든 해 $x$는 $s = x_2$, $t = x_4$로 두었을 때의 이 해이므로, 해집합은 $\{(5 - 2s - 3t, s, 3 - 2t, t) : s, t \in \mathbb{R}\}$이다. 검산으로 $s = t = 0$이면 $x = (5, 0, 3, 0)$이고 세 식의 왼쪽은 $5 - 3 = 2$, $10 - 3 = 7$, $-5 + 6 = 1$이다.

**(3)** $U = EA$는 피벗이 $2$개인 기약 사다리꼴이므로 [[pivot-columns-and-rank|피벗 열과 계수]]의 (1)에 의해 $\operatorname{rank} A = 2$이고 $\operatorname{nullity} T_A = 4 - 2 = 2$이다.
:::

:::exercise[성분 하나가 매개변수인 3 × 3 행렬]
실수 $c$에 대하여

$$
A_c = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & c \end{pmatrix}
$$

라 하자. $A_c$가 가역인 $c$를 모두 구하라.
:::

:::solution
행 연산은 [[elementary-matrix|기본행렬과 기본 행 연산]]의 (2)로 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. $R_{2,1}(-1)$로 둘째 행을 $(0, 1, 2)$로, $R_{3,1}(-1)$로 셋째 행을 $(0, 2, c - 1)$로, $R_{3,2}(-2)$로 셋째 행을 $(0, 0, (c - 1) - 4) = (0, 0, c - 5)$로, $R_{1,2}(-1)$로 첫째 행을 $(1, 0, -1)$로 만든다. $E_1 = R_{1,2}(-1)\, R_{3,2}(-2)\, R_{3,1}(-1)\, R_{2,1}(-1)$이라 하면 [[row-equivalence|행 동치]]의 (1), (2)에 의해 $E_1$은 기본행렬의 곱이고, [[matrix-product-properties|행렬 곱의 성질]]의 (1)에 의해

$$
E_1 A_c = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & c - 5 \end{pmatrix}
$$

이다.

*$c = 5$인 경우.* $E_1 A_5$의 셋째 행은 영행이고, $r = 2$, $\ell_1 = 1$, $\ell_2 = 2$로 [[echelon-form|사다리꼴과 기약 사다리꼴]]의 (가)–(라)를 만족한다(첫째 열은 $e_1$, 둘째 열은 $e_2$). 이 기약 사다리꼴은 $(3, 3)$ 성분이 $0$이어서 $I_3$이 아니므로, [[invertible-matrix-and-row-reduction|가역행렬과 행 소거]]의 (2)의 마지막 문장에 의해 $A_5$는 가역이 아니다. 실제로 $A_5(1, -2, 1) = (1 - 2 + 1,\ 1 - 4 + 3,\ 1 - 6 + 5) = (0, 0, 0)$이다.

*$c \ne 5$인 경우.* $d = c - 5$라 하면 (K12)의 (v)에 의해 $d \ne 0$이므로 $D_3(d^{-1})$이 있다. $D_3(d^{-1})$로 셋째 행을 $(0, 0, d^{-1}d) = (0, 0, 1)$로, $R_{1,3}(1)$로 첫째 행을 $(1, 0, 0)$으로, $R_{2,3}(-2)$로 둘째 행을 $(0, 1, 0)$으로 만들면 $I_3$을 얻는다. 곧 $F = R_{2,3}(-2)\, R_{1,3}(1)\, D_3(d^{-1})\, E_1$은 기본행렬의 곱이고 $FA_c = I_3$이므로 $A_c$와 $I_3$은 행 동치이다. 가역행렬과 행 소거의 (1)의 (ii)에서 (i)로 $A_c$는 가역이다.

따라서 $A_c$가 가역인 것은 정확히 $c \ne 5$일 때이다.
:::

:::exercise[행렬방정식 AX = B 를 소거로 풀기]
$n$, $p$가 자연수이고 $A$가 $n \times n$ 행렬, $B$가 $n \times p$ 행렬이라 하자.

1. $E$가 $n \times n$ 기본행렬의 곱이고 어떤 $n \times p$ 행렬 $C$에 대하여 $E(A \mid B) = (I_n \mid C)$이면, $A$는 가역이고 $AX = B$인 $n \times p$ 행렬 $X$는 $C$ 하나뿐임을 증명하라.
2. $A = \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$일 때 $AX = B$인 $2 \times 2$ 행렬 $X$를 구하라.
:::

:::solution
**(1)** [[system-of-linear-equations|연립일차방정식]]의 (4)에 의해 $E(A \mid B) = (EA \mid EB)$이고, 같은 항목의 (3)(이어 붙인 행렬의 분해)에 의해 $(EA \mid EB) = (I_n \mid C)$에서 $EA = I_n$, $EB = C$이다. [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (1)에 의해 $A$는 가역이고 $E = A^{-1}$이다.

$X$가 $AX = B$인 $n \times p$ 행렬이면 [[matrix-product-properties|행렬 곱의 성질]]의 (4), (1)과 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해

$$
\begin{aligned}
X &= I_n X = (A^{-1}A)X = A^{-1}(AX)\\
&= A^{-1}B = EB = C
\end{aligned}
$$

이다. 거꾸로 $AC = A(A^{-1}B) = (AA^{-1})B = I_n B = B$이므로 $C$는 실제로 $AX = B$를 만족한다. 따라서 그런 $X$는 $C$ 하나뿐이다.

**(2)** [[elementary-matrix|기본행렬과 기본 행 연산]]의 (2)로 계산한다. $R_{2,1}(-1)$로 둘째 행을 $(0, 1, 1, 1)$로 만들고, $R_{1,2}(-2)$로 첫째 행을 $(1, 0, 3 - 2, 1 - 2) = (1, 0, 1, -1)$로 만든다.

$$
\begin{aligned}
&\left(\begin{array}{cc|cc} 1 & 2 & 3 & 1 \\ 1 & 3 & 4 & 2 \end{array}\right)\\
&\to \left(\begin{array}{cc|cc} 1 & 2 & 3 & 1 \\ 0 & 1 & 1 & 1 \end{array}\right)\\
&\to \left(\begin{array}{cc|cc} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 1 \end{array}\right)
\end{aligned}
$$

$E = R_{1,2}(-2)\, R_{2,1}(-1)$은 [[row-equivalence|행 동치]]의 (1), (2)에 의해 기본행렬의 곱이고, 마지막 행렬은 연립일차방정식의 (3)에 의해 $(I_2 \mid C)$, $C = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$이다. (1)에 의해 $X = C$이다. 검산하면 $AC$의 열은 $1(1, 1) + 1(2, 3) = (3, 4)$와 $(-1)(1, 1) + 1(2, 3) = (1, 2)$로 $B$의 열과 같다.
:::

:::exercise[행 연산과 행공간]
$m$, $n$이 자연수이고 $A$가 $m \times n$ 행렬이며 $E$가 $m \times m$ 기본행렬의 곱이라 하자. $\operatorname{Row}$는 행공간이다.

1. $\operatorname{Row}(EA) = \operatorname{Row} A$임을 증명하라.
2. $U = EA$가 기약 사다리꼴이고 피벗의 개수가 $r$이면, $U$의 처음 $r$개의 행으로 된 길이 $r$인 열이 벡터공간 $\operatorname{Row} A$의 기저임을 증명하라.
3. 문제 1의 계수행렬 $A$에 대하여 $\operatorname{Row} A$의 기저를 하나 적어라.
:::

:::solution
**(1)** 먼저 $G$가 임의의 $m \times m$ 행렬이면 $\operatorname{Row}(GA) \subseteq \operatorname{Row} A$임을 보인다. [[row-rank-equals-column-rank|행 계수와 열 계수]]의 (1)에 의해 행렬 $M$마다 $\operatorname{Row} M = \operatorname{Col} M^T$이다. [[transpose|전치행렬]]의 (4)에 의해 $(GA)^T = A^T G^T$이고, [[rank-of-a-matrix|행렬의 계수]]의 (7)을 $n \times m$ 행렬 $A^T$와 $m \times m$ 행렬 $G^T$에 쓰면 $\operatorname{Col}(A^T G^T) \subseteq \operatorname{Col} A^T$이다. 곧

$$
\begin{aligned}
\operatorname{Row}(GA) &= \operatorname{Col}(A^T G^T)\\
&\subseteq \operatorname{Col} A^T = \operatorname{Row} A
\end{aligned}
$$

이다.

$G = E$로 두면 $\operatorname{Row}(EA) \subseteq \operatorname{Row} A$이다. [[row-equivalence|행 동치]]의 (3)에 의해 $E$는 가역이고, [[matrix-product-properties|행렬 곱의 성질]]의 (4), (1)과 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A = I_m A = (E^{-1}E)A = E^{-1}(EA)$이다. 위의 사실을 행렬 $EA$와 $G = E^{-1}$에 쓰면 $\operatorname{Row} A = \operatorname{Row}(E^{-1}(EA)) \subseteq \operatorname{Row}(EA)$이다. 두 포함에 의해 $\operatorname{Row}(EA) = \operatorname{Row} A$이다.

**(2)** $U$의 행을 $\rho_1, \dots, \rho_m$이라 하고 $L = \operatorname{span}(\rho_1, \dots, \rho_r)$이라 하자($r = 0$이면 빈 열의 생성 $\{0\}$이다). [[echelon-form|사다리꼴과 기약 사다리꼴]]의 (다)에 의해 $r < j \le m$이면 $\rho_j$는 영벡터이다.

[[linear-combination-and-span|일차결합과 생성]]의 (N1), (N2)에 의해 $\operatorname{Row} U$는 $\rho_1, \dots, \rho_r$을 원소로 갖는 부분공간이므로 (N3)에 의해 $L \subseteq \operatorname{Row} U$이다. 거꾸로 $j \le r$이면 (N2)에 의해 $\rho_j \in L$이고, $j > r$이면 $\rho_j = 0 \in L$이다((N1)과 [[subspace|부분공간]]의 (S1)). (N3)에 의해 $\operatorname{Row} U \subseteq L$이다. 따라서 (1)과 함께 $\operatorname{Row} A = \operatorname{Row} U = L$이다.

행 계수와 열 계수의 (1), (2)와 [[pivot-columns-and-rank|피벗 열과 계수]]의 (1)에 의해 벡터공간 $\operatorname{Row} A$는 유한차원이고 $\dim \operatorname{Row} A = \operatorname{rank} A^T = \operatorname{rank} A = r$이다. 열 $\rho_1, \dots, \rho_r$은 모든 항이 $\operatorname{Row} A$에 속하고, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J2)에 의해 벡터공간 $\operatorname{Row} A$에서 계산한 생성도 $L = \operatorname{Row} A$이므로 $\operatorname{Row} A$를 생성한다. 길이가 $r = \dim \operatorname{Row} A$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (4)에 의해 이 열은 $\operatorname{Row} A$의 기저이다.

**(3)** 문제 1의 풀이에서 $EA$는 첫째 행이 $(1, 2, 0, 3)$, 둘째 행이 $(0, 0, 1, 2)$, 셋째 행이 영행인 기약 사다리꼴이고 $r = 2$이다. (2)에 의해 $(1, 2, 0, 3)$, $(0, 0, 1, 2)$로 된 열이 $\operatorname{Row} A$의 기저이다.
:::

:::exercise[해가 있을 우변의 조건]

$$
A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 5 & 3 \\ 1 & 3 & 2 \end{pmatrix}
$$

이라 하자.

1. $b = (b_1, b_2, b_3) \in \mathbb{R}^3$에 대하여 $Ax = b$의 해가 있을 조건을 $b_1$, $b_2$, $b_3$의 식으로 나타내라.
2. $\operatorname{Col} A$를 식으로 나타내고 $\operatorname{rank} A$를 구하라.
3. $b = (1, 3, 2)$일 때 해집합을 구하라.
:::

:::solution
행 연산은 [[elementary-matrix|기본행렬과 기본 행 연산]]의 (1), (2)로 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

**(1)** $A$에 차례로 $R_{2,1}(-2)$, $R_{3,1}(-1)$, $R_{3,2}(-1)$, $R_{1,2}(-2)$를 하면 둘째 행이 $(0, 1, 1)$, 셋째 행이 $(0, 1, 1)$을 거쳐 영행, 첫째 행이 $(1, 0, -1)$이 되어

$$
\begin{aligned}
U &= EA = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
\end{aligned}
$$

이다. 여기서 $E = R_{1,2}(-2)\, R_{3,2}(-1)\, R_{3,1}(-1)\, R_{2,1}(-2)$이다([[matrix-product-properties|행렬 곱의 성질]]의 (1)). $U$는 $r = 2$, $\ell_1 = 1$, $\ell_2 = 2$인 [[echelon-form|기약 사다리꼴]]이고, $E$는 [[row-equivalence|행 동치]]의 (1), (2)에 의해 기본행렬의 곱이다.

[[matrix-product|행렬의 곱]]의 (1)에 의해 $Eb$는 $b$에 같은 네 연산을 차례로 한 것이고, 기본행렬의 (1)에 의해 $b$는

$$
\begin{aligned}
&(b_1, b_2 - 2b_1, b_3)\\
&\to (b_1, b_2 - 2b_1, b_3 - b_1)\\
&\to (b_1, b_2 - 2b_1, b_1 - b_2 + b_3)\\
&\to (5b_1 - 2b_2, b_2 - 2b_1, b_1 - b_2 + b_3)
\end{aligned}
$$

로 바뀐다. 셋째 값은 $(b_3 - b_1) - (b_2 - 2b_1) = b_1 - b_2 + b_3$이고, 첫째 값은 $b_1 - 2(b_2 - 2b_1) = 5b_1 - 2b_2$이다. 행 동치의 (5)에 의해 $Ax = b$의 해집합은 $Ux = Eb$의 해집합과 같고, [[solutions-from-reduced-echelon-form|기약 사다리꼴에서 해 읽기]]의 (2)에 의해 $Ux = Eb$의 해가 있는 것은 정확히 $Eb$의 셋째 값이 $0$일 때이다. 따라서 $Ax = b$의 해가 있는 것은 정확히 $b_1 - b_2 + b_3 = 0$일 때이다.

**(2)** [[system-of-linear-equations|연립일차방정식]]의 (2)에 의해 $Ax = b$의 해가 있는 것은 정확히 $b \in \operatorname{Ran} T_A$일 때이고, [[rank-of-a-matrix|행렬의 계수]]의 진술에 의해 $\operatorname{Ran} T_A = \operatorname{Col} A$이다. (1)과 함께 $\operatorname{Col} A = \{b \in \mathbb{R}^3 : b_1 - b_2 + b_3 = 0\}$이다. [[pivot-columns-and-rank|피벗 열과 계수]]의 (1)에 의해 $\operatorname{rank} A = 2$이다.

**(3)** $1 - 3 + 2 = 0$이므로 해가 있고, $Eb = (5 - 6,\ 3 - 2,\ 0) = (-1, 1, 0)$이다. 자유 열의 번호의 집합은 $N = \{3\}$이다. $f(3) = s$로 두면 $f' = (0, 0, s)$이고 $Uf' = (-s, s, 0)$이므로, 기약 사다리꼴에서 해 읽기의 (3)에 의해 셋째 값이 $s$인 해는 $x_1 = -1 - (-s) = -1 + s$, $x_2 = 1 - s$인 $x$ 하나이다. 모든 해는 $s = x_3$으로 둔 이 해이므로 해집합은 $\{(-1 + s,\ 1 - s,\ s) : s \in \mathbb{R}\}$이다. 검산으로 $A(-1 + s, 1 - s, s)$의 세 값은 $(-1 + s) + 2(1 - s) + s = 1$, $2(-1 + s) + 5(1 - s) + 3s = 3$, $(-1 + s) + 3(1 - s) + 2s = 2$이다.
:::

:::exercise[행 맞바꾸기를 다른 두 연산으로 하기]
$m = 2$인 기본행렬에 대하여

1. $P_{1,2} = D_2(-1)\, R_{1,2}(1)\, R_{2,1}(-1)\, R_{1,2}(1)$임을 보여라.
2. 이것을 써서, $2 \times n$ 행렬 $M$의 두 행을 맞바꾸는 일을 행 더하기 세 번과 행의 상수배 한 번으로 할 수 있음을 설명하라.
:::

:::solution
**(1)** [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 오른쪽 곱은 $D_2(-1)\, R_{1,2}(1)\, R_{2,1}(-1)\, R_{1,2}(1)\, I_2$와 같고, 같은 항목의 (1)에 의해 오른쪽부터 차례로 $I_2$에 곱해 계산해도 된다. 각 단계는 [[elementary-matrix|기본행렬과 기본 행 연산]]의 (2)로 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

$$
\begin{aligned}
&I_2 \xrightarrow{R_{1,2}(1)} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\\
&\xrightarrow{R_{2,1}(-1)} \begin{pmatrix} 1 & 1 \\ -1 & 0 \end{pmatrix}\\
&\xrightarrow{R_{1,2}(1)} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\\
&\xrightarrow{D_2(-1)} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
\end{aligned}
$$

첫째 단계는 첫째 행에 둘째 행을 더해 $(1, 1)$로, 둘째 단계는 둘째 행에서 첫째 행을 빼 $(0 - 1, 1 - 1) = (-1, 0)$으로, 셋째 단계는 첫째 행에 둘째 행을 더해 $(1 - 1, 1 + 0) = (0, 1)$로, 넷째 단계는 둘째 행에 $-1$을 곱해 $(1, 0)$으로 만든다((K12)의 (iii), (K9)).

한편 $m = 2$, $j = 1$, $k = 2$이면 $\tau(1) = 2$, $\tau(2) = 1$이므로 기본행렬의 정의에 의해 $P_{1,2}$의 $1$인 성분은 $(1, 2)$와 $(2, 1)$뿐이고 나머지는 $0$이다. 마지막 행렬과 모든 성분이 같으므로 [[matrix|행렬]]의 (2)에 의해 두 행렬은 같다.

**(2)** $M$이 $2 \times n$ 행렬이라 하고 $N_1 = R_{1,2}(1)M$, $N_2 = R_{2,1}(-1)N_1$, $N_3 = R_{1,2}(1)N_2$로 두자. (1)과 행렬 곱의 성질의 (1)에 의해

$$
\begin{aligned}
P_{1,2}M &= \bigl(D_2(-1)\,R_{1,2}(1)\,R_{2,1}(-1)\\
&\qquad R_{1,2}(1)\bigr)M\\
&= D_2(-1)\,N_3
\end{aligned}
$$

이다. 기본행렬의 (2)에 의해 왼쪽은 $M$의 두 행을 맞바꾼 행렬이고, 오른쪽은 $M$에 행 더하기 $R_{1,2}(1)$, $R_{2,1}(-1)$, $R_{1,2}(1)$과 행의 상수배 $D_2(-1)$을 차례로 한 결과이다.
:::

:::exercise[전치하면 행 동치가 아닌 두 행렬]
$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$이라 하자. $A$와 $B$는 행 동치이지만 $A^T$와 $B^T$는 행 동치가 아님을 보여라.
:::

:::solution
[[elementary-matrix|기본행렬과 기본 행 연산]]의 (2)에 의해 $P_{1,2}A$는 $A$의 두 행을 맞바꾼 행렬, 곧 $B$이다. [[row-equivalence|행 동치]]의 (1)에 의해 기본행렬 $P_{1,2}$는 기본행렬의 곱이므로 $A$와 $B$는 행 동치이다.

[[transpose|전치행렬]]의 정의 $(A^T)_{k,j} = a_{j,k}$에 의해 $A^T = A$이고 $B^T = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이다. $A^T$와 $B^T$가 행 동치라 하자. 그러면 $B^T = EA^T$인 기본행렬의 곱 $E$가 있고, 행 동치의 (5)에 의해 $\operatorname{Ker} T_{B^T} = \operatorname{Ker} T_{A^T}$이다. 그런데 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $A^T e_2$는 $A^T$의 둘째 열 $(0, 0)$이므로 $e_2 \in \operatorname{Ker} T_{A^T}$이고, $B^T e_2$는 $B^T$의 둘째 열 $(1, 0)$이어서 영벡터가 아니므로 $e_2 \notin \operatorname{Ker} T_{B^T}$이다. 이것은 두 핵이 같다는 데 어긋나므로, [[proof-by-contradiction|귀류법]]에 의해 $A^T$와 $B^T$는 행 동치가 아니다.

왼쪽에 곱하는 행 연산은 전치하면 오른쪽에 곱하는 연산, 곧 열에 대한 연산이 되기 때문에 이런 일이 생긴다. 실제로 $B^T = (P_{1,2}A)^T = A^T P_{1,2}^T$이다.
:::
