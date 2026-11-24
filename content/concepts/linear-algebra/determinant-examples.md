---
title: 행렬식의 계산 예
title_en: Examples of Computing Determinants
aliases: [행렬식 계산, 2 × 2 행렬식의 계산, 3 × 3 행렬식의 계산, computing determinants]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 2 × 2 와 3 × 3 행렬의 행렬식을 첫째 열 전개와 행 소거의 두 길로 계산해 같은 값을 얻고, 같은 두 행, 영행, 한 행이 다른 행의 상수배인 행렬의 행렬식이 0 이라는 것과 단위행렬, 대각행렬, 위삼각행렬의 작은 예를 계산한다.
requires: [real-number-arithmetic, matrix, matrix-product-properties, elementary-matrix, row-equivalence, echelon-form, power-of-a-real-number, minor-matrix, determinant]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 1절 Introduction, p.75; 3.3 Determinants of diagonal and triangular matrices, p.81; 3절 연습문제 3.1–3.3, p.85; 5절 연습문제 5.1, 5.2, p.94; 3.2 Proposition 3.1, p.79; 4절 연습문제 4.2, p.89; 7절 연습문제 7.1 b), f), 7.2, p.97"
    checked: original
    note: "출처 3절의 연습문제 3.3(p.85)은 열 연산이나 행 연산으로 행렬식을 계산하게 하고, 5절의 연습문제 5.1, 5.2(p.94)는 아무 방법으로나, 또는 0 이 많은 행·열로 전개해 계산하게 한다. (1)과 (2)는 이 연습문제들과 같은 일을 다른 행렬로 한 것이다. (3)의 같은 두 행은 출처 연습문제 7.1 b)(p.97)가, 영행과 상수배의 행은 3.6절의 4, 6(p.84)이 다루는 경우와 같은 대상이며, 한 행이 다른 행의 배인 C₃ 은 Proposition 3.1 의 3(p.79)의 행판과 같은 대상이다. (4)의 대각행렬은 출처 3.3절(p.81)이 대각행렬의 행렬식을 대각성분의 곱이라 하는 것과, 연습문제 3.2 a)(p.85)가 열마다 수를 곱하는 것과 같은 발상이다. (5)의 위삼각행렬은 출처 3.3절(p.81)과 연습문제 7.1 f)(p.97)의 '삼각행렬의 행렬식은 대각성분의 곱'을 한 행렬에서 확인한 것이다. 반례 '$\\det(2I_2)$와 $2 \\det I_2$가 다른 예'는 출처 연습문제 3.1(p.85)의 det(5A) 와 det A 의 관계, 그 Remark('1 × 1 에서만 det(5A) = 5 det A'), 연습문제 7.2(p.97)의 det(3A) 와 같은 발상이다. 확인 질문 '$\\det \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix}$은 무엇인가?'의 행렬은 출처 4절(p.88)이 단위행렬에서 열을 맞바꾸어 얻는다고 하는 행렬, 연습문제 4.2(p.89)의 치환행렬과 같은 종류이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목을 인용하던 확인 질문 1건, 틀린 근거 번호 1건, 출처의 말을 틀리게 옮긴 메모 1건, 조건이 빠진 설명 문장 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
[[determinant|행렬식]]과 그 항목의 번호를 쓴다. 다음 행렬의 행렬식은 오른쪽의 값이다.

1. ($2 \times 2$를 두 길로) $A = \begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$이면 $\det A = 1$이다. 첫째 열 전개로 얻는 값과, $EA = I_2$인 기본행렬의 곱 $E$로 얻는 값이 같다.
2. ($3 \times 3$을 두 길로) 
   $$
   B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & 0 & 1 \end{pmatrix}
   $$
   이면 $\det B = 13$이다. 첫째 열 전개로 얻는 값과 행 소거로 얻는 값이 같다.
3. (값이 $0$인 행렬)
   $$
   \begin{aligned}
   C_1 &= \begin{pmatrix} 1 & 4 & -2 \\ 3 & 0 & 5 \\ 1 & 4 & -2 \end{pmatrix}, \\
   C_2 &= \begin{pmatrix} 3 & -1 & 2 \\ 0 & 0 & 0 \\ 5 & 7 & 1 \end{pmatrix}, \\
   C_3 &= \begin{pmatrix} 2 & -1 & 3 \\ 0 & 5 & 1 \\ 4 & -2 & 6 \end{pmatrix}
   \end{aligned}
   $$
   이면 $\det C_1 = \det C_2 = \det C_3 = 0$이다. $C_1$은 첫째 행과 셋째 행이 같고, $C_2$는 둘째 행이 영행이며, $C_3$은 셋째 행이 첫째 행의 $2$배이다.
4. (단위행렬과 대각행렬) $\det I_3 = 1$이고
   $$
   \det \begin{pmatrix} 2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix} = -8
   $$
   이다.
5. (위삼각행렬) 
   $$
   U = \begin{pmatrix} 2 & 7 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix}
   $$
   이면 $\det U = -6$이고, 이것은 대각성분의 곱 $2 \cdot 3 \cdot (-1)$과 같다.
:::

:::english
We use the determinant and the numbered statements of that entry. The determinants of the following matrices are the values on the right.

1. ($2 \times 2$ in two ways) If $A = \begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$, then $\det A = 1$. The value obtained by the first column expansion and the value obtained from a product $E$ of elementary matrices with $EA = I_2$ agree.
2. ($3 \times 3$ in two ways)
   $$
   B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & 0 & 1 \end{pmatrix}
   $$
   has $\det B = 13$. The value obtained by the first column expansion and the value obtained by row reduction agree.
3. (Matrices with determinant $0$)
   $$
   \begin{aligned}
   C_1 &= \begin{pmatrix} 1 & 4 & -2 \\ 3 & 0 & 5 \\ 1 & 4 & -2 \end{pmatrix}, \\
   C_2 &= \begin{pmatrix} 3 & -1 & 2 \\ 0 & 0 & 0 \\ 5 & 7 & 1 \end{pmatrix}, \\
   C_3 &= \begin{pmatrix} 2 & -1 & 3 \\ 0 & 5 & 1 \\ 4 & -2 & 6 \end{pmatrix}
   \end{aligned}
   $$
   have $\det C_1 = \det C_2 = \det C_3 = 0$. The first and third rows of $C_1$ are equal, the second row of $C_2$ is a zero row, and the third row of $C_3$ is twice its first row.
4. (Identity and diagonal matrices) $\det I_3 = 1$ and
   $$
   \det \begin{pmatrix} 2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix} = -8.
   $$
5. (Upper triangular matrix)
   $$
   U = \begin{pmatrix} 2 & 7 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix}
   $$
   has $\det U = -6$, which equals the product $2 \cdot 3 \cdot (-1)$ of its diagonal entries.
:::

## 직관

행렬식을 계산하는 길은 둘입니다. 하나는 [[determinant|행렬식]]의 (3)의 첫째 열 전개로 크기를 하나씩 줄이는 것이고, 다른 하나는 기본 행 연산으로 행렬을 단위행렬이나 영행이 있는 행렬로 바꾸면서 값이 몇 배 되었는지를 적어 두는 것입니다. 행렬식은 하나로 정해져 있으므로 두 길은 같은 값을 줍니다. 첫째 열에 $0$이 많으면 전개가 빠르고, 크기가 크면 행 소거가 덜 번거로운 경우가 많습니다.

## 증명

:::idea
행렬식 항목의 (4)의 식으로 직접 계산하고, 같은 행렬을 기본 행 연산으로 바꾸며 행렬식 항목의 (5)와 (6)으로 비율을 따라간다.
:::

:::hint
$3 \times 3$에서 첫째 열에 $0$이 있으면 그 항은 계산하지 않아도 됩니다.
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로 인용한다. 기본행렬의 성분과 왼쪽에 곱한 결과는 [[elementary-matrix|기본행렬]]의 정의와 (2)로 계산한다. 기본행렬을 차례로 곱한 행렬이 기본행렬의 곱이라는 것은 [[row-equivalence|행 동치]]의 (1)이고, 곱을 묶는 방법은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)를 쓴다.

**(1)의 증명.** 첫째 열 전개: 행렬식의 (4)에 의해 $\det A = 2 \cdot 3 - 1 \cdot 5 = 6 - 5 = 1$이다.

행 소거: 기본행렬의 (2)로 차례로 계산하면
$$
\begin{aligned}
A_1 &= P_{1,2}A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}, \\
A_2 &= R_{2,1}(-2)A_1 \\
&= \begin{pmatrix} 1 & 3 \\ 0 & -1 \end{pmatrix}, \\
A_3 &= D_2(-1)A_2 \\
&= \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}, \\
R_{1,2}(-3)A_3 &= I_2
\end{aligned}
$$
이다. $E = R_{1,2}(-3)D_2(-1)R_{2,1}(-2)P_{1,2}$로 두면 결합법칙에 의해 $EA = R_{1,2}(-3)A_3 = I_2$이고, $E$는 기본행렬의 곱이다. 행렬식의 (5)를 $A$ 대신 $I_2$와 그 뒤의 행렬에 차례로 쓰면 $\det E = 1 \cdot (-1) \cdot 1 \cdot (-1) \cdot \det I_2 = 1$이다. 행렬식의 (6)과 (1)의 (iii)에 의해 $1 = \det I_2 = \det(EA) = \det E \cdot \det A = \det A$이다. 두 길이 같은 값 $1$을 준다.

**(2)의 증명.** 첫째 열 전개: $b_{1,1} = 1$, $b_{2,1} = 0$, $b_{3,1} = 2$이므로 행렬식의 (4)에 의해
$$
\begin{aligned}
\det B &= 1 \cdot (1 \cdot 1 - 0 \cdot 3) \\
&\quad - 0 \cdot (2 \cdot 1 - 0 \cdot 0) \\
&\quad + 2 \cdot (2 \cdot 3 - 1 \cdot 0) \\
&= 1 + 12 = 13
\end{aligned}
$$
이다.

행 소거: 셋째 행에 첫째 행의 $-2$배를 더하고, 이어서 셋째 행에 둘째 행의 $4$배를 더하면
$$
\begin{aligned}
B_1 &= R_{3,1}(-2)B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 0 & -4 & 1 \end{pmatrix}, \\
V &= R_{3,2}(4)B_1 = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 0 & 0 & 13 \end{pmatrix}
\end{aligned}
$$
이다($-4 + 4 \cdot 1 = 0$, $1 + 4 \cdot 3 = 13$). 행렬식의 (5)에 의해 $\det V = \det B$이다. 다음으로 $W = D_3(13^{-1})V$는 셋째 행이 $(0, 0, 1)$인 행렬이고 행렬식의 (5)에 의해 $\det W = 13^{-1}\det V$이다. $R_{2,3}(-3)W$는 둘째 행이 $(0, 1, 0)$이 되고, 다시 $R_{1,2}(-2)$를 곱하면 첫째 행이 $(1, 0, 0)$이 되어 $R_{1,2}(-2)R_{2,3}(-3)W = I_3$이다. 행렬식의 (5)에 의해 $\det W = \det I_3 = 1$이다. 따라서 $13^{-1}\det V = 1$이고 (K8)의 (iii)과 (K11)에 의해 $\det V = 13$, 곧 $\det B = 13$이다. 두 길이 같은 값을 준다.

**(3)의 증명.** $C_1$의 첫째 행과 셋째 행이 같으므로 행렬식의 (1)의 (ii)에 의해 $\det C_1 = 0$이다. $C_2$의 둘째 행은 [[echelon-form|영행]]이므로 행렬식의 (7)의 (a)에 의해 $\det C_2 = 0$이다. $C_3$의 셋째 행에 첫째 행의 $-2$배를 더하면 $(4 - 4, -2 + 2, 6 - 6) = (0, 0, 0)$이므로 $R_{3,1}(-2)C_3$의 셋째 행은 영행이고, 행렬식의 (5)와 (7)의 (a)에 의해 $\det C_3 = \det(R_{3,1}(-2)C_3) = 0$이다. 첫째 열 전개로 확인하면 행렬식의 (4)에 의해 $\det C_3 = 2(5 \cdot 6 - (-2) \cdot 1) - 0 + 4((-1) \cdot 1 - 5 \cdot 3) = 2 \cdot 32 + 4 \cdot (-16) = 0$이다.

**(4)의 증명.** $\det I_3 = 1$은 행렬식의 (1)의 (iii)이다. 기본행렬의 (2)에 의해 $D_3(4)I_3$은 셋째 행에 $4$를 곱한 행렬이고, 그 둘째 행에 $-1$을, 다시 첫째 행에 $2$를 곱하면 주어진 대각행렬이 된다. 곧 이 행렬은 $D_1(2)(D_2(-1)(D_3(4)I_3))$이다. 행렬식의 (5)를 세 번 쓰면 그 행렬식은 $2 \cdot (-1) \cdot 4 \cdot \det I_3 = -8$이다.

**(5)의 증명.** $u_{2,1} = u_{3,1} = 0$이므로 행렬식의 (4)에서 둘째와 셋째 항은 $0$이고 $\det U = 2(3 \cdot (-1) - 0 \cdot 4) = 2 \cdot (-3) = -6$이다. 대각성분의 곱은 $2 \cdot 3 \cdot (-1) = -6$이다. $\blacksquare$
:::

## 예시와 반례

:::counterexample[행렬식의 합과 합의 행렬식이 다른 예]
$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$이면 둘 다 영행이 있으므로 $\det A = \det B = 0$입니다. 그러나 $A + B = I_2$이므로 $\det(A + B) = 1$입니다. 이 두 행렬에서 $\det(A + B) \ne \det A + \det B$입니다. 행렬식은 다른 행을 고정했을 때 각 행에 대해 선형인 것이고, 두 행렬의 합에 대해서는 합을 합으로 옮기지 않을 수 있습니다.
:::

:::counterexample[$\det(2I_2)$와 $2 \det I_2$가 다른 예]
$2I_2 = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해 $\det(2I_2) = 2 \cdot 2 - 0 \cdot 0 = 4$입니다. 그러나 $2 \det I_2 = 2$입니다. $2I_2$는 $I_2$의 두 행에 모두 $2$를 곱한 것이어서, 행렬식의 (7)의 (b)에 의해 값이 $2$배씩 두 번 바뀝니다.
:::

## 확인 질문

:::check[$\det \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$은 무엇인가?]
이 행렬은 $I_3$의 첫째 행과 셋째 행을 맞바꾼 $P_{1,3}I_3 = P_{1,3}$이므로 [[determinant|행렬식]]의 (5)에 의해 $-1$입니다. 첫째 열 전개로 보면 $a_{3,1} = 1$만 $0$이 아니고 그 소행렬이 $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이므로 $(-1)^{3+1} \cdot 1 \cdot (0 \cdot 0 - 1 \cdot 1) = -1$입니다.
:::

:::check[$\det \begin{pmatrix} x & 1 \\ 1 & x \end{pmatrix} = 0$인 실수 $x$는 무엇인가?]
[[determinant|행렬식]]의 (4)에 의해 행렬식은 $x \cdot x - 1 \cdot 1$이고, 이것은 $(x - 1)(x + 1)$과 같습니다. 곱이 $0$이면 한 인수가 $0$이므로([[real-number-arithmetic|(K10)]]) $x = 1$이거나 $x = -1$이고, 거꾸로 두 값에서 행렬식은 $0$입니다. $x = 1$이면 두 행이 같고, $x = -1$이면 둘째 행이 첫째 행의 $-1$배입니다.
:::
