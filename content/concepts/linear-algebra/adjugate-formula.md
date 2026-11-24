---
title: 수반행렬과 역행렬의 공식
title_en: The Adjugate Formula for the Inverse
aliases: [역행렬의 여인수 공식, 수반행렬로 구한 역행렬, 2 × 2 역행렬의 공식, adjugate formula, cofactor formula for the inverse]
kind: theorem
field: linear-algebra
msc: ["15A09", "15A15"]
level: undergrad
summary: 2 이상인 n 에 대하여 n × n 행렬 A 는 가역이든 아니든 A·adj A = adj A·A = (det A)Iₙ 을 만족한다. 따라서 A 가 가역이면 역행렬은 (det A)⁻¹ adj A 이고, 2 × 2 행렬의 역행렬의 식이 나온다. det A = 0 이면 두 곱이 영행렬이고, 수반행렬의 행렬식은 (det A)ⁿ⁻¹ 이다.
requires: [real-number-arithmetic, finite-sum-of-vectors, vector-space, matrix, echelon-form, matrix-product, matrix-product-properties, invertible-matrix, power-of-a-real-number, determinant, determinant-and-invertibility, determinant-of-product, cofactor-expansion, adjugate-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5.1 Cofactor formula for the inverse matrix, Theorem 5.2, p.92, 그 증명, p.93; 5.2 Some applications of the cofactor formula for the inverse, Example (Inverting 2 × 2 matrices), pp.93–94, 그 뒤 문단, p.94; 5절 연습문제 5.4, p.95"
    checked: original
    note: "(2)는 출처 Theorem 5.2(p.92) 'Let A be an invertible matrix and let C be its cofactor matrix. Then A⁻¹ = (1/det A) Cᵀ' 와 같다(Cᵀ 가 이 사이트의 adj A). 출처의 증명(p.93)은 ACᵀ 의 대각성분이 j 번째 행 전개로 det A 이고, 대각 밖의 성분은 j 번째 행을 k 번째 행으로 바꾼 행렬의 j 번째 행 전개이며 그 행렬은 같은 두 행을 가져 0 이라는 것으로 ACᵀ = (det A)I 를 얻은 뒤, (1/det A)Cᵀ 가 오른쪽 역이고 A 가 정사각이므로 역행렬이라고 한다. 이 항목은 그 계산을 가역 가정 없이 (1)로 진술하고, 대각 밖의 성분에는 여인수 전개의 (3)(b)(출처의 같은 논법을 진술로 올린 것)를 인용한다. 출처가 진술하지 않는 CᵀA = (det A)I 는 열 전개와 그 (3)(a)로 직접 보이므로, 정사각행렬의 한쪽 역에 관한 사실을 쓰지 않고 가역행렬의 정의로 (2)를 얻는다. (3)은 출처 5.2절의 예(pp.93–94) A⁻¹ = (1/det A)(d −b; −c a) 와 같다. 출처는 이 예 뒤(p.94)에서 이 공식이 3 보다 큰 차원에서는 실용적이지 않지만 이론적 가치가 크다고 적는다. (4), (5)와 n = 1 의 (6)은 출처에 명제로 없다(검색어 'cofactor matrix' 3건, 'det(adj' 0건, 'det C' 1건(3장 연습문제 3.11 의 블록 C 로 다른 뜻), 'AC T' 로 찾은 Theorem 5.2 의 증명을 읽었고, 3장 5절 연습문제 5.1–5.7 과 7절 연습문제 7.1–7.5 를 처음부터 읽었다). 예시 '3 × 3 행렬과 그 수반행렬의 곱'과 예시 '2 × 2 행렬의 역행렬'은 출처 연습문제 5.4(p.95, 여인수 공식으로 2 × 2 행렬 셋과 3 × 3 행렬 하나의 역행렬을 구하라)와 같은 발상이다(행렬은 다르다). 선형대수 강의에는 2 × 2 역행렬의 일반 식을 적은 진술이 없고, 가역행렬 항목의 예시가 한 행렬의 역행렬을 확인할 뿐이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 예의 수치 재계산). 가역 가정 없는 꼴과 n = 1, det A = 0 의 경우를 진술에 두었다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 행렬의 [[matrix-product|곱]], 스칼라배, 단위행렬 $I_n$은 앞 항목들의 것이고, 가역과 역행렬 $A^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]의 것이다. $n \ge 2$이면 여인수와 $\operatorname{adj} A$는 [[cofactor-expansion|여인수 전개]]와 [[adjugate-matrix|여인수행렬과 수반행렬]]의 것이다. 아래 (1)–(5)에서는 $n \ge 2$이다.

1. (수반행렬과의 곱) $A \operatorname{adj} A = (\operatorname{adj} A) A = (\det A) I_n$이다. 곧 $i$, $j \in \{1, \dots, n\}$에서, $A \operatorname{adj} A$의 $(i, j)$ 성분은 $k$번째 항이 $a_{i,k}$와 $A$의 $(j, k)$ 여인수의 곱인 길이 $n$인 실수의 열의 합이고, $(\operatorname{adj} A) A$의 $(i, j)$ 성분은 $k$번째 항이 $A$의 $(k, i)$ 여인수와 $a_{k,j}$의 곱인 길이 $n$인 실수의 열의 합이며, 두 성분은 $i = j$이면 $\det A$이고 $i \ne j$이면 $0$이다. $A$가 가역이라는 가정은 없다.
2. (역행렬의 공식) $A$가 가역인 것은 정확히 $\det A \ne 0$일 때이고, 그때
   $$
   A^{-1} = (\det A)^{-1} \operatorname{adj} A
   $$
   이다. 곧 $A^{-1}$의 $(k, j)$ 성분은 $(\det A)^{-1}$과 $A$의 $(j, k)$ 여인수의 곱이다.
3. ($2 \times 2$의 역행렬) $n = 2$이고 $a_{1,1}a_{2,2} - a_{2,1}a_{1,2} \ne 0$이면 $A$는 가역이고
   $$
   \begin{aligned}
   A^{-1} &= (a_{1,1}a_{2,2} - a_{2,1}a_{1,2})^{-1} \\
   &\qquad \begin{pmatrix} a_{2,2} & -a_{1,2} \\ -a_{2,1} & a_{1,1} \end{pmatrix}
   \end{aligned}
   $$
   이다.
4. (행렬식이 $0$일 때) $\det A = 0$이면 $A \operatorname{adj} A$와 $(\operatorname{adj} A) A$는 모두 영행렬이다.
5. (수반행렬의 행렬식) $\det(\operatorname{adj} A) = (\det A)^{n-1}$이다.
6. ($n = 1$) $n = 1$이면 수반행렬은 없다. 이때 $A = \begin{pmatrix} a \end{pmatrix}$가 가역인 것은 정확히 $a \ne 0$일 때이고, 그때 $A^{-1} = \begin{pmatrix} a^{-1} \end{pmatrix}$이다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. Matrix products, scalar multiples and the identity matrix $I_n$ are those of the preceding entries, and invertibility and the inverse $A^{-1}$ are those of the entry on invertible matrices. If $n \ge 2$, cofactors and $\operatorname{adj} A$ are those of the entries on cofactor expansion and on cofactor and adjugate matrices. In (1)–(5) below, $n \ge 2$.

1. (Product with the adjugate) $A \operatorname{adj} A = (\operatorname{adj} A) A = (\det A) I_n$. That is, for $i$, $j \in \{1, \dots, n\}$, the $(i, j)$ entry of $A \operatorname{adj} A$ is the sum of the sequence of real numbers of length $n$ whose $k$-th term is the product of $a_{i,k}$ and the $(j, k)$ cofactor of $A$, the $(i, j)$ entry of $(\operatorname{adj} A) A$ is the sum of the sequence of real numbers of length $n$ whose $k$-th term is the product of the $(k, i)$ cofactor of $A$ and $a_{k,j}$, and both entries equal $\det A$ if $i = j$ and $0$ if $i \ne j$. It is not assumed that $A$ is invertible.
2. (Formula for the inverse) $A$ is invertible exactly when $\det A \ne 0$, and then
   $$
   A^{-1} = (\det A)^{-1} \operatorname{adj} A.
   $$
   That is, the $(k, j)$ entry of $A^{-1}$ is the product of $(\det A)^{-1}$ and the $(j, k)$ cofactor of $A$.
3. (Inverse of a $2 \times 2$ matrix) If $n = 2$ and $a_{1,1}a_{2,2} - a_{2,1}a_{1,2} \ne 0$, then $A$ is invertible and
   $$
   \begin{aligned}
   A^{-1} &= (a_{1,1}a_{2,2} - a_{2,1}a_{1,2})^{-1} \\
   &\qquad \begin{pmatrix} a_{2,2} & -a_{1,2} \\ -a_{2,1} & a_{1,1} \end{pmatrix}.
   \end{aligned}
   $$
4. (When the determinant is $0$) If $\det A = 0$, then $A \operatorname{adj} A$ and $(\operatorname{adj} A) A$ are both the zero matrix.
5. (Determinant of the adjugate) $\det(\operatorname{adj} A) = (\det A)^{n-1}$.
6. ($n = 1$) If $n = 1$, there is no adjugate. In this case $A = \begin{pmatrix} a \end{pmatrix}$ is invertible exactly when $a \ne 0$, and then $A^{-1} = \begin{pmatrix} a^{-1} \end{pmatrix}$.
:::

## 직관

$A$의 한 행의 성분들에 같은 행의 여인수들을 짝지어 더하면 그 행을 따라 전개한 행렬식이 되고, 다른 행의 여인수들과 짝지어 더하면 $0$이 됩니다. 행렬의 곱은 행과 열을 짝지어 더하는 것이므로, $A$의 행을 여인수행렬의 행과 짝짓도록 여인수행렬을 전치한 것이 수반행렬입니다. 그러면 곱 $A \operatorname{adj} A$의 대각성분은 모두 $\det A$이고 나머지 성분은 모두 $0$입니다. 거꾸로 곱한 $(\operatorname{adj} A) A$에서는 열을 따라 전개한 것이 같은 일을 합니다.

이 계산은 $A$가 가역인지와 관계없이 성립합니다. $\det A \ne 0$이면 양변을 $\det A$로 나누어 $(\det A)^{-1} \operatorname{adj} A$가 양쪽에서 곱해 $I_n$이 되는 행렬, 곧 역행렬임을 얻습니다. $\det A = 0$이면 같은 등식이 $A \operatorname{adj} A$가 영행렬이라고 말합니다. 이때 $\operatorname{adj} A$는 영행렬이 아닐 수 있습니다.

$2 \times 2$에서는 수반행렬이 대각성분을 맞바꾸고 나머지 성분의 부호를 바꾼 행렬이므로, (3)은 $2 \times 2$ 행렬의 역행렬을 성분으로 적은 식입니다. [[invertible-matrix|가역행렬과 역행렬]]의 예시에서 두 곱을 직접 계산해 확인한 역행렬도 (3)에 넣으면 바로 나옵니다.

## 증명

:::idea
행렬의 곱의 성분을 적으면 $A \operatorname{adj} A$의 성분은 행 전개, $(\operatorname{adj} A) A$의 성분은 열 전개의 꼴이 되고, 대각 밖의 성분은 남의 여인수로 전개한 합이라 $0$이다. 역행렬은 이 등식을 $\det A$로 나눈 것이다.
:::

:::hint
$(\operatorname{adj} A)_{k,j}$는 $A$의 $(j, k)$ 여인수입니다. 행렬의 곱의 $(i, j)$ 성분을 적고 [[cofactor-expansion|여인수 전개]]의 번호 가운데 어느 것과 같은 꼴인지 보세요.
:::

:::hint
(5)에서 $\det A = 0$이고 $\det(\operatorname{adj} A) \ne 0$이라고 해 봅시다. 그러면 $\operatorname{adj} A$가 가역이고, $A = A(\operatorname{adj} A)(\operatorname{adj} A)^{-1}$로 쓸 수 있습니다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, 행렬의 곱의 성질은 [[matrix-product-properties|행렬의 곱의 성질]]의 번호로 인용한다. 행렬의 (2)에 의해 같은 크기의 두 행렬은 모든 성분이 같으면 같다. 스칼라 $d$와 $n \times n$ 행렬에 대하여, 행렬의 (1), (6)과 (K4), (K9)에 의해 $dI_n$의 $(i, j)$ 성분은 $i = j$이면 $d$이고 $i \ne j$이면 $0$이다. 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 같은 열이므로 합도 같다. 아래에서 $A$의 $(j, k)$ 여인수를 "$(j, k)$ 여인수"라고만 쓴다.

**(1)의 증명.** $n \ge 2$이다. [[matrix-product|행렬의 곱]]의 (2)에 의해 $A \operatorname{adj} A$의 $(i, j)$ 성분은 $k$번째 항이 $a_{i,k} (\operatorname{adj} A)_{k,j}$인 길이 $n$인 열의 합이고, 수반행렬의 정의에 의해 $(\operatorname{adj} A)_{k,j}$는 $(j, k)$ 여인수이다. $i = j$이면 이 합은 [[cofactor-expansion|여인수 전개]]의 (2)(행 $j$를 따른 전개)에 의해 $\det A$이고, $i \ne j$이면 여인수 전개의 (3)의 (b)에 의해 $0$이다.

같은 방법으로 $(\operatorname{adj} A) A$의 $(i, j)$ 성분은 $k$번째 항이 $(\operatorname{adj} A)_{i,k}\, a_{k,j}$, 곧 $(k, i)$ 여인수와 $a_{k,j}$의 곱인 길이 $n$인 열의 합이다. (K1)에 의해 이 항은 $a_{k,j}$와 $(k, i)$ 여인수의 곱과 같다. $i = j$이면 이 합은 여인수 전개의 (1)(열 $i$를 따른 전개. 그 진술의 합의 첨자 $j$를 여기서는 $k$로 읽는다)에 의해 $\det A$이다. $i \ne j$이면 여인수 전개의 (3)의 (a)를 그 진술의 $k$를 $i$로, $l$을 $j$로 두어 쓰면 이 합은 $0$이다.

따라서 두 곱의 모든 성분이 $(\det A) I_n$의 성분과 같고, (1)이 나온다.

**(2)의 증명.** $A$가 가역인 것이 정확히 $\det A \ne 0$일 때라는 것은 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)이다. $d = \det A \ne 0$이라 하고 $X = d^{-1} \operatorname{adj} A$로 두자. 행렬의 곱의 성질의 (3)과 이 정리의 (1)에 의해
$$
\begin{aligned}
AX &= d^{-1} (A \operatorname{adj} A) = d^{-1}(d I_n), \\
XA &= d^{-1} ((\operatorname{adj} A) A) = d^{-1}(d I_n)
\end{aligned}
$$
이다. [[vector-space|벡터공간]]의 (V6)과 (V5)를 벡터공간 $M_{n \times n}$(행렬의 (1))에 쓰고 $d^{-1} d = 1$((K1)과 (K8)의 (iii))을 쓰면 $d^{-1}(d I_n) = (d^{-1} d) I_n = 1 I_n = I_n$이다. 따라서 $AX = XA = I_n$이므로 $X$는 $A$의 왼쪽 역이자 오른쪽 역이고, [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1} = X$이다. 행렬의 (1)에 의해 $X$의 $(k, j)$ 성분은 $d^{-1} (\operatorname{adj} A)_{k,j}$, 곧 $d^{-1}$과 $(j, k)$ 여인수의 곱이다.

**(3)의 증명.** $n = 2$이면 [[determinant|행렬식]]의 (4)에 의해 $\det A = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$이고, 여인수행렬과 수반행렬의 (1)에 의해 $\operatorname{adj} A$는 (3)의 오른쪽에 적은 행렬이다. 이 수가 $0$이 아니면 (2)에 의해 (3)이 나온다.

**(4)의 증명.** $\det A = 0$이면 (1)에 의해 두 곱은 $0 I_n$이고, 행렬의 (1)과 (K9)에 의해 $0 I_n$은 영행렬이다.

**(5)의 증명.** $d = \det A$라 하자.

$d \ne 0$인 경우. [[determinant-of-product|곱의 행렬식]]의 (1)과 이 정리의 (1)에 의해 $d \det(\operatorname{adj} A) = \det(A \operatorname{adj} A) = \det(d I_n)$이고, 곱의 행렬식의 (4)에 의해 $\det(d I_n) = d^n$이다. $n - 1 \ge 0$은 정수이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $d^n = d^{(n-1)+1} = d^{n-1} d$이다. 따라서 (K1)에 의해 $d \det(\operatorname{adj} A) = d \cdot d^{n-1}$이고, $d \ne 0$이므로 (K11)에 의해 $\det(\operatorname{adj} A) = d^{n-1}$이다.

$d = 0$인 경우. $n - 1 \ge 1$이므로 실수의 거듭제곱의 (2)의 (iv)에 의해 $0^{n-1} = 0$이고, $\det(\operatorname{adj} A) = 0$을 보이면 된다. $\det(\operatorname{adj} A) \ne 0$이라고 가정하자. 행렬식과 가역성의 (1)에 의해 $\operatorname{adj} A$는 가역이다. $Y = (\operatorname{adj} A)^{-1}$이라 하면 가역행렬과 역행렬의 (1)에 의해 $(\operatorname{adj} A) Y = I_n$이므로, 행렬의 곱의 성질의 (4)와 (1)에 의해
$$
\begin{aligned}
A &= A I_n = A\big((\operatorname{adj} A) Y\big) \\
&= \big(A \operatorname{adj} A\big) Y
\end{aligned}
$$
이고, (4)에 의해 $A \operatorname{adj} A$는 영행렬이다. 행렬의 곱의 (2)에 의해 영행렬과 $Y$의 곱의 각 성분은 모든 항이 $0 \cdot y_{l,j} = 0$((K9))인 열의 합이므로 벡터의 유한 합의 (H5)에 의해 $0$이다. 따라서 $A$는 영행렬이다. 그러면 여인수행렬과 수반행렬의 (4)에 의해 $\operatorname{adj} A$도 영행렬이고, 영행렬의 첫째 행은 [[echelon-form|영행]]이므로 행렬식의 (7)의 (a)에 의해 $\det(\operatorname{adj} A) = 0$이다. 이것은 가정에 어긋나므로 $\det(\operatorname{adj} A) = 0 = 0^{n-1}$이다.

**(6)의 증명.** $n = 1$이면 여인수가 정의되지 않으므로 수반행렬도 없다. 행렬식과 가역성의 (5)에 의해 $A$가 가역인 것은 정확히 $a \ne 0$일 때이다. $a \ne 0$이고 $B = \begin{pmatrix} a^{-1} \end{pmatrix}$이라 하자. 행렬의 곱의 (2)와 벡터의 유한 합의 (H0)(길이 $1$인 열의 합은 그 항이다)에 의해 $AB$와 $BA$의 $(1, 1)$ 성분은 $a a^{-1}$과 $a^{-1} a$이고, (K8)의 (iii)과 (K1)에 의해 둘 다 $1$이다. 행렬의 (6)에 의해 $I_1$의 $(1, 1)$ 성분은 $1$이므로 $AB = BA = I_1$이고, 가역행렬과 역행렬의 (1)에 의해 $A^{-1} = B$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬과 그 수반행렬의 곱]
$$
B = \begin{pmatrix} 2 & 1 & 3 \\ 0 & 1 & 1 \\ 1 & 0 & 2 \end{pmatrix}
$$
이라 합시다. 아홉 개의 여인수를 [[determinant|행렬식]]의 (4)의 $2 \times 2$ 식으로 구하면, 첫째 행의 것이 $\det \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = 2$, $-\det \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix} = 1$, $\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$이고, 둘째 행의 것이 $-\det \begin{pmatrix} 1 & 3 \\ 0 & 2 \end{pmatrix} = -2$, $\det \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = 1$, $-\det \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix} = 1$이며, 셋째 행의 것이 $\det \begin{pmatrix} 1 & 3 \\ 1 & 1 \end{pmatrix} = -2$, $-\det \begin{pmatrix} 2 & 3 \\ 0 & 1 \end{pmatrix} = -2$, $\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$입니다. 여인수행렬을 전치하면
$$
\operatorname{adj} B = \begin{pmatrix} 2 & -2 & -2 \\ 1 & 1 & -2 \\ -1 & 1 & 2 \end{pmatrix}
$$
입니다. 곱 $B \operatorname{adj} B$의 첫째 행은 $(4 + 1 - 3,\ -4 + 1 + 3,\ -4 - 2 + 6) = (2, 0, 0)$, 둘째 행은 $(0 + 1 - 1,\ 0 + 1 + 1,\ 0 - 2 + 2) = (0, 2, 0)$, 셋째 행은 $(2 + 0 - 2,\ -2 + 0 + 2,\ -2 + 0 + 4) = (0, 0, 2)$이므로 $B \operatorname{adj} B = 2I_3$이고, (1)에 의해 $\det B = 2$입니다. (2)에 의해 $B^{-1} = 2^{-1} \operatorname{adj} B$이고, (5)에 의해 $\det(\operatorname{adj} B) = 2^2 = 4$입니다.
:::

:::example[2 × 2 행렬의 역행렬]
$A = \begin{pmatrix} 4 & 3 \\ 2 & 5 \end{pmatrix}$이면 $a_{1,1}a_{2,2} - a_{2,1}a_{1,2} = 20 - 6 = 14 \ne 0$이므로 (3)에 의해
$$
A^{-1} = 14^{-1} \begin{pmatrix} 5 & -3 \\ -2 & 4 \end{pmatrix}
$$
입니다. 실제로 $A \begin{pmatrix} 5 & -3 \\ -2 & 4 \end{pmatrix}$의 첫째 행은 $(20 - 6,\ -12 + 12) = (14, 0)$이고 둘째 행은 $(10 - 10,\ -6 + 20) = (0, 14)$입니다.
:::

:::counterexample[행렬식이 0 이고 수반행렬은 영행렬이 아닌 예]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$이면 $\det A = 4 - 4 = 0$이고, [[adjugate-matrix|여인수행렬과 수반행렬]]의 (1)에 의해 $\operatorname{adj} A = \begin{pmatrix} 4 & -2 \\ -2 & 1 \end{pmatrix}$로 영행렬이 아닙니다. 그래도 $A \operatorname{adj} A$의 첫째 행은 $(4 - 4,\ -2 + 2) = (0, 0)$, 둘째 행은 $(8 - 8,\ -4 + 4) = (0, 0)$으로 (4)대로 영행렬입니다. 또 $\det(\operatorname{adj} A) = 4 - 4 = 0 = (\det A)^1$로 (5)와 맞습니다.
:::

## 확인 질문

:::check[$\det A = 3$인 $4 \times 4$ 행렬 $A$에 대하여 $\det(\operatorname{adj} A)$는 무엇인가?]
(5)에 의해 $3^{4-1} = 3^3 = 27$입니다.
:::

:::check[$A$가 가역인 $3 \times 3$ 행렬이면 $\operatorname{adj} A$는 가역인가?]
가역입니다. (5)에 의해 $\det(\operatorname{adj} A) = (\det A)^2$이고, $A$가 가역이므로 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $\det A \ne 0$, 따라서 [[real-number-arithmetic|(K12)]]의 (vi)에 의해 $(\det A)^2 = (\det A)(\det A) \ne 0$입니다. 다시 행렬식과 가역성의 (1)에 의해 $\operatorname{adj} A$는 가역입니다. (1)을 $\det A$로 나누면 $(\operatorname{adj} A)^{-1} = (\det A)^{-1} A$임도 알 수 있습니다.
:::
