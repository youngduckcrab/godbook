---
title: 블록 삼각행렬의 행렬식
title_en: Determinant of a Block Triangular Matrix
aliases: [블록 대각행렬의 행렬식, 블록 행렬, 블록 위삼각행렬, block triangular matrix, block diagonal matrix]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: n = g + h 일 때 n × n 행렬을 왼쪽 위 g × g, 오른쪽 위 g × h, 왼쪽 아래 h × g, 오른쪽 아래 h × h 의 네 블록으로 나누어 쓰는 법을 정하고, 왼쪽 아래 블록이 영행렬이면 행렬식이 대각선의 두 블록의 행렬식의 곱이라는 것을 증명한다. 오른쪽 위 블록이 영행렬인 꼴, 블록 대각행렬, 특성다항식의 곱 공식과 블록끼리의 합과 곱도 함께 증명한다.
requires: [function, real-function-space, real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, finite-sum-of-vectors, standard-basis, matrix, matrix-product, transpose, eigenvalue-and-eigenvector, power-of-a-real-number, minor-matrix, determinant, determinant-of-transpose, determinant-of-triangular-matrix, determinant-with-leading-columns, product-of-polynomial-functions, characteristic-polynomial]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 연습문제 3.10, 3.11, p.86; 4장 1절 Main definitions, 연습문제 1.7, p.105; 9장 3.3 Geometric meaning of algebraic multiplicity, Proposition 3.8 의 증명, p.264; 6장 1절 Upper triangular (Schur) representation of an operator, Theorem 1.2 의 증명, p.165; 3장 4절 연습문제 4.2, p.89"
    checked: original
    note: "출처 연습문제 3.10(p.86)은 정사각행렬 A 에 대해 블록 삼각행렬 (I ∗; 0 A), (A ∗; 0 I), (I 0; ∗ A), (A 0; ∗ I) 의 행렬식이 모두 det A 라는 것을 보이라 하고, 연습문제 3.11 은 그것과 힌트의 블록 곱 (A B; 0 C) = (I B; 0 C)(A 0; 0 I) 로 det(A B; 0 C) = det A det C 를 보이라 한다. 출처는 연습문제 3.11 앞에 '다음 문제들은 블록 행렬 표기의 힘을 보여 준다'고 적는다(p.86). (2)는 연습문제 3.11 의 결론이다. 이 항목은 블록으로 쓴 꼴을 성분의 범위로 정의하고, (2)를 블록 곱의 분해 대신 왼쪽 위 블록의 크기 g 에 대한 귀납과 첫째 열 전개로 증명한다. (1)의 (iii)의 블록끼리의 곱은 출처의 힌트의 등식이 쓰는 계산을 진술로 올린 것이다. (5)는 출처 4장 연습문제 1.7(p.105, 블록 삼각행렬 (A ∗; 0 B) 의 특성다항식은 det(A − λI) det(B − λI), 3장 연습문제 3.11 을 쓰라)이다. 출처 9장 Proposition 3.8 의 증명(p.264)은 블록 대각 꼴의 det(A − λI) 를 블록마다의 det(A_k − λI_{E_k}) 의 곱으로 쓰는데, 그것은 (4)와 (5)를 블록 여럿에 되풀이한 것이다. 출처 6장 Theorem 1.2 의 증명(p.165)은 첫째 열이 λ₁e₁ 인 꼴에서 det(A − λI) = (λ₁ − λ) det(A₁ − λ) 를 '첫째 행을 따라 여인수 전개하면 된다(for example)'고 적으며, 그것은 (5)의 g = 1 인 경우이다. 예시 '왼쪽 위 블록이 2 × 2 인 4 × 4 행렬의 행렬식'은 연습문제 3.11 과 같은 대상에 수를 넣은 것이고, 예시 '블록 대각행렬의 특성다항식'은 4장 연습문제 1.7 과 같은 발상이다. 그 예시의 B = (0 1; 1 0) 은 출처 3장 4절 연습문제 4.2(p.89)가 다루는 치환행렬(permutation matrix)의 하나이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(서로소 판정의 f = 0 경계, 블록 행렬식의 귀납 꼴, 유한 열 보조정리의 r = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$g$, $h$가 자연수이고 $n = g + h$라 하자. 행렬, 성분, 단위행렬 $I_n$, 영행렬, 행렬의 합과 스칼라배는 [[matrix|행렬]]의 것이고, 행렬의 곱은 [[matrix-product|행렬의 곱]], 행렬식 $\det$는 [[determinant|행렬식]], 특성다항식 $p_A$는 [[characteristic-polynomial|특성다항식]], 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. 크기를 밝히지 않은 $O$는 그 자리에 맞는 크기의 영행렬이다.

**블록으로 쓴 꼴.** $B$가 $g \times g$, $C$가 $g \times h$, $E$가 $h \times g$, $D$가 $h \times h$ 행렬이라 하자. $(i, l)$ 성분이 다음과 같은 $n \times n$ 행렬은 정확히 하나 있다.

- $i \le g$이고 $l \le g$이면 $b_{i,l}$,
- $i \le g < l$이면 $c_{i,\,l-g}$,
- $l \le g < i$이면 $e_{i-g,\,l}$,
- $g < i$이고 $g < l$이면 $d_{i-g,\,l-g}$.

이 행렬을 $\begin{pmatrix} B & C \\ E & D \end{pmatrix}$로 쓰고, $B$, $C$, $E$, $D$를 차례로 그 **왼쪽 위 블록**, **오른쪽 위 블록**, **왼쪽 아래 블록**, **오른쪽 아래 블록**이라 한다. 모든 $n \times n$ 행렬 $M$은 $b_{i,l} = m_{i,l}$, $c_{i,l} = m_{i,\,g+l}$, $e_{i,l} = m_{g+i,\,l}$, $d_{i,l} = m_{g+i,\,g+l}$로 정한 네 행렬로 $M = \begin{pmatrix} B & C \\ E & D \end{pmatrix}$이고, 이렇게 쓰는 네 행렬은 이것뿐이다. 블록은 늘 정해진 $g$, $h$에 대하여 말한다.

$n \times n$ 행렬 $M$이 ($g$, $h$에 대한) **블록 위삼각행렬**인 것은 정확히 왼쪽 아래 블록이 영행렬일 때, 곧 $l \le g < i$인 모든 $(i, l)$에서 $m_{i,l} = 0$일 때이다. **블록 아래삼각행렬**인 것은 정확히 오른쪽 위 블록이 영행렬일 때이고, **블록 대각행렬**인 것은 정확히 두 블록이 모두 영행렬일 때이다.

다음이 성립한다. 아래에서 $B, B'$은 $g \times g$, $C, C'$은 $g \times h$, $E, E'$은 $h \times g$, $D, D'$은 $h \times h$ 행렬이다.

1. (블록끼리의 연산)
   - (i) $I_n = \begin{pmatrix} I_g & O \\ O & I_h \end{pmatrix}$이다.
   - (ii) $M = \begin{pmatrix} B & C \\ E & D \end{pmatrix}$, $M' = \begin{pmatrix} B' & C' \\ E' & D' \end{pmatrix}$이고 $\alpha$가 실수이면, $M + M'$은 네 블록이 차례로 $B + B'$, $C + C'$, $E + E'$, $D + D'$인 행렬이고, $\alpha M$은 네 블록이 차례로 $\alpha B$, $\alpha C$, $\alpha E$, $\alpha D$인 행렬이다.
   - (iii) 같은 $M$, $M'$에 대하여 $MM'$은 네 블록이 차례로 $BB' + CE'$, $BC' + CD'$, $EB' + DE'$, $EC' + DD'$인 행렬이다. 특히 두 블록 위삼각행렬의 곱은 왼쪽 위 블록이 $BB'$이고 오른쪽 아래 블록이 $DD'$인 블록 위삼각행렬이고, 두 블록 대각행렬의 곱은 $\begin{pmatrix} BB' & O \\ O & DD' \end{pmatrix}$이다.
2. (블록 위삼각행렬) $\det \begin{pmatrix} B & C \\ O & D \end{pmatrix} = \det B \cdot \det D$이다.
3. (블록 아래삼각행렬) $\det \begin{pmatrix} B & O \\ E & D \end{pmatrix} = \det B \cdot \det D$이다.
4. (블록 대각행렬) $\det \begin{pmatrix} B & O \\ O & D \end{pmatrix} = \det B \cdot \det D$이다.
5. (특성다항식) $M = \begin{pmatrix} B & C \\ O & D \end{pmatrix}$이면 모든 실수 $x$에서 $M - xI_n = \begin{pmatrix} B - xI_g & C \\ O & D - xI_h \end{pmatrix}$이고, 따라서 $p_M = p_B\, p_D$이다(오른쪽은 함수의 곱). $M = \begin{pmatrix} B & O \\ E & D \end{pmatrix}$일 때도 $p_M = p_B\, p_D$이다.
6. (처음 몇 열이 단위벡터의 배수인 꼴) $c$가 실수이고 $M = \begin{pmatrix} cI_g & C \\ O & D \end{pmatrix}$이면 (2)에 의해 $\det M = c^g \det D$이다. 이때 $M$의 처음 $g$개의 열은 차례로 $c\,e_1, \dots, c\,e_g$이고($e_k$는 $\mathbb{R}^n$의 [[standard-basis|표준기저]]), $D$는 [[determinant-with-leading-columns|처음 몇 열이 단위벡터의 배수인 행렬의 행렬식]]의 (1)의 행렬 $C$이다. 곧 (2)는 그 항목의 (1)과 같은 값을 준다.
:::

:::english
Let $g$, $h$ be natural numbers and $n = g + h$. Matrices, entries, the identity matrix $I_n$, zero matrices, and sums and scalar multiples of matrices are those of the matrix entry; the matrix product, $\det$, the characteristic polynomial $p_A$ and products of functions are those of the corresponding entries. An $O$ whose size is not stated is the zero matrix of the size that fits its position.

**Block form.** Let $B$ be $g \times g$, $C$ be $g \times h$, $E$ be $h \times g$ and $D$ be $h \times h$ matrices. There is exactly one $n \times n$ matrix whose $(i, l)$ entry is

- $b_{i,l}$ if $i \le g$ and $l \le g$,
- $c_{i,\,l-g}$ if $i \le g < l$,
- $e_{i-g,\,l}$ if $l \le g < i$,
- $d_{i-g,\,l-g}$ if $g < i$ and $g < l$.

We write this matrix as $\begin{pmatrix} B & C \\ E & D \end{pmatrix}$ and call $B$, $C$, $E$, $D$ its **upper left block**, **upper right block**, **lower left block** and **lower right block**. Every $n \times n$ matrix $M$ equals $\begin{pmatrix} B & C \\ E & D \end{pmatrix}$ for the four matrices defined by $b_{i,l} = m_{i,l}$, $c_{i,l} = m_{i,\,g+l}$, $e_{i,l} = m_{g+i,\,l}$, $d_{i,l} = m_{g+i,\,g+l}$, and these are the only four matrices that do so. Blocks are always taken with respect to fixed $g$ and $h$.

An $n \times n$ matrix $M$ is **block upper triangular** (with respect to $g$, $h$) exactly when its lower left block is the zero matrix, that is, when $m_{i,l} = 0$ for all $(i, l)$ with $l \le g < i$. It is **block lower triangular** exactly when its upper right block is the zero matrix, and **block diagonal** exactly when both of these blocks are zero matrices.

The following hold, where $B, B'$ are $g \times g$, $C, C'$ are $g \times h$, $E, E'$ are $h \times g$, and $D, D'$ are $h \times h$ matrices.

1. (Operations blockwise)
   - (i) $I_n = \begin{pmatrix} I_g & O \\ O & I_h \end{pmatrix}$.
   - (ii) If $M = \begin{pmatrix} B & C \\ E & D \end{pmatrix}$, $M' = \begin{pmatrix} B' & C' \\ E' & D' \end{pmatrix}$ and $\alpha$ is a real number, then $M + M'$ is the matrix whose four blocks are $B + B'$, $C + C'$, $E + E'$, $D + D'$, and $\alpha M$ is the matrix whose four blocks are $\alpha B$, $\alpha C$, $\alpha E$, $\alpha D$.
   - (iii) For the same $M$, $M'$, the product $MM'$ is the matrix whose four blocks are $BB' + CE'$, $BC' + CD'$, $EB' + DE'$, $EC' + DD'$. In particular, the product of two block upper triangular matrices is block upper triangular with upper left block $BB'$ and lower right block $DD'$, and the product of two block diagonal matrices is $\begin{pmatrix} BB' & O \\ O & DD' \end{pmatrix}$.
2. (Block upper triangular) $\det \begin{pmatrix} B & C \\ O & D \end{pmatrix} = \det B \cdot \det D$.
3. (Block lower triangular) $\det \begin{pmatrix} B & O \\ E & D \end{pmatrix} = \det B \cdot \det D$.
4. (Block diagonal) $\det \begin{pmatrix} B & O \\ O & D \end{pmatrix} = \det B \cdot \det D$.
5. (Characteristic polynomial) If $M = \begin{pmatrix} B & C \\ O & D \end{pmatrix}$, then $M - xI_n = \begin{pmatrix} B - xI_g & C \\ O & D - xI_h \end{pmatrix}$ for every real $x$, and hence $p_M = p_B\, p_D$ (a product of functions). Also $p_M = p_B\, p_D$ when $M = \begin{pmatrix} B & O \\ E & D \end{pmatrix}$.
6. (First columns multiples of standard basis vectors) If $c$ is a real number and $M = \begin{pmatrix} cI_g & C \\ O & D \end{pmatrix}$, then $\det M = c^g \det D$ by (2). In this case the first $g$ columns of $M$ are $c\,e_1, \dots, c\,e_g$ (with $e_k$ the standard basis vectors of $\mathbb{R}^n$), and $D$ is the matrix $C$ of item (1) of the entry on determinants of matrices whose first columns are multiples of standard basis vectors. Thus (2) gives the same value as item (1) of that entry.
:::

## 직관

큰 행렬을 가로줄과 세로줄 하나씩으로 네 칸으로 나누면, 각 칸은 작은 행렬입니다. 왼쪽 아래 칸이 모두 $0$이면 행렬은 계단처럼 생겼고, 이때 행렬식은 대각선에 놓인 두 정사각 블록의 행렬식을 곱한 것입니다. 오른쪽 위 블록 $C$는 무엇이든 결과에 나타나지 않습니다. 이것은 $1 \times 1$ 블록으로 끝까지 나눈 경우, 곧 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]이 대각성분의 곱이라는 것을 블록으로 넓힌 것입니다.

증명은 왼쪽 위 블록의 크기 $g$를 하나씩 줄여 가는 귀납입니다. 첫째 열을 따라 전개하면 첫째 열의 성분 가운데 $0$이 아닐 수 있는 것은 위쪽 $g$개뿐이고, $g \ge 2$이면 그 각각의 소행렬은 다시 같은 꼴이며 왼쪽 위 블록이 $B$의 소행렬, 오른쪽 아래 블록이 그대로 $D$입니다. $g = 1$이면 남는 소행렬이 $D$ 자신입니다. 그래서 $\det D$를 묶어 내면 남는 것이 $B$의 첫째 열 전개입니다.

두 층으로 된 건물에서 위층의 물건이 아래층으로 내려가지 않는다면 두 층을 따로 정리할 수 있는 것과 비슷합니다. 위층은 처음 $g$개의 번호, 아래층은 나머지 $h$개의 번호입니다. 비유의 "내려가지 않는다"가 왼쪽 아래 블록이 영행렬이라는 조건이고(처음 $g$개의 열의 아래쪽 성분이 $0$), 아래층에서 위층으로 올라오는 것(오른쪽 위 블록 $C$)은 있어도 됩니다. 반례에서 보듯 왼쪽 아래 블록이 영행렬이 아니면 이 공식은 틀릴 수 있습니다.

## 증명

:::idea
$g$에 대한 귀납법을 쓴다. 첫째 열 전개에서 $j > g$인 항은 $m_{j,1} = 0$이라 사라지고, $j \le g$인 항의 소행렬 $M^{(j,1)}$은 왼쪽 위 블록이 $B^{(j,1)}$이고 오른쪽 아래 블록이 $D$인 블록 위삼각행렬이다.
:::

:::hint
[[minor-matrix|소행렬]]의 (2)에 의해 $(M^{(j,1)})_{i,l} = m_{s_j(i),\,l+1}$입니다. $j \le g \le i$이면 $s_j(i)$는 무엇입니까?
:::

:::hint
(3)은 전치행렬을 취하면 (2)가 됩니다. (5)는 $xI_n$을 (1)의 (i)로 블록으로 쓰고 (1)의 (ii)로 빼면 됩니다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, 정수의 순서는 [[well-ordering-principle|정렬 원리]] 항목의 번호와 [[prime-number|소수]] 항목의 (Z1)로 인용한다. [[matrix|행렬]]의 (2)에 의해 같은 크기의 두 행렬은 모든 성분이 같으면 같다.

**블록으로 쓴 꼴.** $\{1, \dots, n\}$의 정수 $i$는 (Z5)에 의해 $i \le g$이거나 $g < i$이고 둘 가운데 하나만 성립한다. $g < i \le n$이면 $1 \le i - g \le h$이다((Z1)). 따라서 네 경우는 서로 겹치지 않고 모든 $(i, l)$을 덮으며, 각 경우에 적은 성분은 실제로 그 행렬의 성분이다. [[real-function-space|(G)]]에 의해 이 값을 갖는 $n \times n$ 행렬이 있고, 행렬의 (2)에 의해 하나뿐이다. $M$이 주어졌을 때 정한 $B$, $C$, $E$, $D$에서는, 예컨대 $i \le g < l$이면 $c_{i,\,l-g} = m_{i,\,g+(l-g)} = m_{i,l}$이고 다른 경우도 같으므로 $M = \begin{pmatrix} B & C \\ E & D \end{pmatrix}$이다. 거꾸로 $M = \begin{pmatrix} \tilde B & \tilde C \\ \tilde E & \tilde D \end{pmatrix}$이면 정의에 의해 $\tilde b_{i,l} = m_{i,l}$, $\tilde c_{i,l} = m_{i,\,g+l}$, $\tilde e_{i,l} = m_{g+i,\,l}$, $\tilde d_{i,l} = m_{g+i,\,g+l}$이므로 네 행렬은 위의 것과 같다.

**(1).** (i) $(I_n)_{i,l}$은 $i = l$이면 $1$, 아니면 $0$이다(행렬의 (6)). $i, l \le g$이면 이것은 $(I_g)_{i,l}$이고, $g < i$, $g < l$이면 $i = l$인 것은 정확히 $i - g = l - g$일 때이므로 $(I_h)_{i-g,\,l-g}$이다. $i \le g < l$이거나 $l \le g < i$이면 $i \ne l$이므로 성분은 $0$이다.

(ii) 행렬의 (1)에 의해 $(M + M')_{i,l} = m_{i,l} + m'_{i,l}$, $(\alpha M)_{i,l} = \alpha m_{i,l}$이다. 네 경우마다 이것을 블록의 성분으로 읽으면 된다. 예컨대 $i \le g < l$이면 $(M + M')_{i,l} = c_{i,\,l-g} + c'_{i,\,l-g} = (C + C')_{i,\,l-g}$이다.

(iii) [[matrix-product|행렬의 곱]]의 (2)에 의해 $(MM')_{i,l}$은 $k$번째 항이 $m_{i,k} m'_{k,l}$인 길이 $n$인 실수의 열의 합이다. 이 열은 처음 $g$개의 열과 $k$번째 항이 $m_{i,\,g+k} m'_{g+k,\,l}$인 길이 $h$인 열을 이어 붙인 것이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H2)에 의해
$$
\begin{aligned}
&(MM')_{i,l} \\
&= \bigl(m_{i,1} m'_{1,l} + \cdots + m_{i,g} m'_{g,l}\bigr) \\
&\quad + \bigl(m_{i,g+1} m'_{g+1,l} \\
&\qquad + \cdots + m_{i,g+h} m'_{g+h,l}\bigr)
\end{aligned}
$$
이다. $i \le g$, $l \le g$이면 $k \le g$에서 $m_{i,k} = b_{i,k}$, $m'_{k,l} = b'_{k,l}$이고 $m_{i,\,g+k} = c_{i,k}$, $m'_{g+k,\,l} = e'_{k,l}$이므로, 행렬의 곱의 (2)에 의해 위 식은 $(BB')_{i,l} + (CE')_{i,l} = (BB' + CE')_{i,l}$이다. $i \le g < l$이면 $k \le g$에서 $m_{i,k} = b_{i,k}$, $m'_{k,l} = c'_{k,\,l-g}$이고 $m_{i,\,g+k} = c_{i,k}$, $m'_{g+k,\,l} = d'_{k,\,l-g}$이므로 위 식은 $(BC')_{i,\,l-g} + (CD')_{i,\,l-g}$이다. $l \le g < i$이면 $m_{i,k} = e_{i-g,\,k}$, $m'_{k,l} = b'_{k,l}$, $m_{i,\,g+k} = d_{i-g,\,k}$, $m'_{g+k,\,l} = e'_{k,l}$이므로 위 식은 $(EB')_{i-g,\,l} + (DE')_{i-g,\,l}$이다. $g < i$, $g < l$이면 $m_{i,k} = e_{i-g,\,k}$, $m'_{k,l} = c'_{k,\,l-g}$, $m_{i,\,g+k} = d_{i-g,\,k}$, $m'_{g+k,\,l} = d'_{k,\,l-g}$이므로 위 식은 $(EC')_{i-g,\,l-g} + (DD')_{i-g,\,l-g}$이다. 블록 위삼각행렬끼리이면 $E = E' = O$이므로 $EB' + DE' = O$이고 $BB' + CE' = BB'$, $EC' + DD' = DD'$이다. 블록 대각행렬끼리이면 여기에 $C = C' = O$도 더해져 $BC' + CD' = O$이다. 영행렬과의 곱이 영행렬이라는 것은 행렬의 곱의 (2)와 벡터의 유한 합의 (H5)에서 나온다.

**(2).** 자연수 $g$에 대하여 다음 명제를 $Q(g)$라 하고 [[mathematical-induction|수학적 귀납법]]을 쓴다.

> $Q(g)$: 모든 자연수 $h$와, 왼쪽 아래 블록이 영행렬인 모든 $(g + h) \times (g + h)$ 행렬 $M$에 대하여, $M$의 왼쪽 위 블록을 $B$, 오른쪽 아래 블록을 $D$라 하면 $\det M = \det B \cdot \det D$이다.

- 기초 단계 $Q(1)$: $n = 1 + h \ge 2$이고, $j \ge 2$이면 $j > 1 = g$이므로 $m_{j,1} = 0$이다. 곧 $M$의 첫째 열은 $m_{1,1} e_1$이고, [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (1)에 의해 $\det M = m_{1,1} \det M^{(1,1)}$이다. [[minor-matrix|소행렬]]의 (2)에 의해 $(M^{(1,1)})_{i,l} = m_{i+1,\,l+1} = d_{i,l}$이므로 $M^{(1,1)} = D$이다. $B$는 $1 \times 1$ 행렬이고 [[determinant|행렬식]]의 (2)에 의해 $\det B = b_{1,1} = m_{1,1}$이다. 따라서 $\det M = \det B \cdot \det D$이다.
- 귀납 단계: $g \ge 1$이고 $Q(g)$가 참이라 하자. $h$가 자연수이고 $M$이 왼쪽 아래 블록이 영행렬인 $(g + 1 + h) \times (g + 1 + h)$ 행렬이며, 왼쪽 위 $(g + 1) \times (g + 1)$ 블록이 $B$, 오른쪽 아래 블록이 $D$라 하자. $n = g + 1 + h \ge 3$이므로 행렬식의 (3)에 의해 $\det M$은 $j$번째 항이 $(-1)^{j+1} m_{j,1} \det M^{(j,1)}$인 길이 $n$인 실수의 열의 합이다. $j > g + 1$이면 $1 \le g + 1 < j$이므로 $m_{j,1} = 0$이고 그 항은 $0$이다((K9)). 따라서 벡터의 유한 합의 (H2), (H5)와 (K4)에 의해 $\det M$은 처음 $g + 1$개의 항의 합이다.

  $j \in \{1, \dots, g + 1\}$을 정하고 $M' = M^{(j,1)}$이라 하자. $M'$은 $(g + h) \times (g + h)$ 행렬이고 소행렬의 (2)에 의해 $m'_{i,l} = m_{s_j(i),\,l+1}$이다.
  - 왼쪽 아래 블록($g$, $h$에 대한 것). $l \le g < i$이면 $j \le g + 1 \le i$이므로 소행렬의 정의에 의해 $s_j(i) = i + 1 > g + 1$이고, $l + 1 \le g + 1$이므로 $m'_{i,l} = m_{i+1,\,l+1} = 0$이다.
  - 왼쪽 위 블록. $i, l \le g$이면 $s_j(i) \le i + 1 \le g + 1$이고 $l + 1 \le g + 1$이므로 $m'_{i,l} = b_{s_j(i),\,l+1}$이다. $B$는 $(g + 1) \times (g + 1)$ 행렬이고 $g + 1 \ge 2$이므로 소행렬의 (2)를 $B$에 쓰면 이것은 $(B^{(j,1)})_{i,l}$이다(두 경우 모두 $s_j(i)$는 같은 규칙 "$i < j$이면 $i$, $i \ge j$이면 $i + 1$"로 정해진다).
  - 오른쪽 아래 블록. $i, l \le h$이면 $g + i \ge g + 1 \ge j$이므로 $s_j(g + i) = g + i + 1$이고 $m'_{g+i,\,g+l} = m_{(g+1)+i,\,(g+1)+l} = d_{i,l}$이다.

  따라서 $Q(g)$에 의해 $\det M^{(j,1)} = \det B^{(j,1)} \cdot \det D$이다. 또 $j \le g + 1$이면 $m_{j,1} = b_{j,1}$이다. 그러므로 $\det M$은 $j$번째 항이 $\bigl((-1)^{j+1} b_{j,1} \det B^{(j,1)}\bigr) \det D$인 길이 $g + 1$인 실수의 열의 합이고, 벡터의 유한 합의 (H4)와 (K1), (K2)에 의해 이것은 ($j$번째 항이 $(-1)^{j+1} b_{j,1} \det B^{(j,1)}$인 열의 합)$\cdot \det D$이다. 행렬식의 (3)을 $B$에 쓰면 앞의 합은 $\det B$이므로 $\det M = \det B \cdot \det D$이다. 곧 $Q(g + 1)$이 참이다.

따라서 모든 자연수 $g$에서 $Q(g)$가 참이고 (2)가 성립한다.

**(3).** $M = \begin{pmatrix} B & O \\ E & D \end{pmatrix}$이라 하자. [[transpose|전치행렬]]의 정의에 의해 $(M^T)_{i,l} = m_{l,i}$이다. $l \le g < i$이면 $m_{l,i}$는 $M$의 오른쪽 위 블록의 성분이므로 $0$이고, $i, l \le g$이면 $m_{l,i} = b_{l,i} = (B^T)_{i,l}$, $g < i$, $g < l$이면 $m_{l,i} = d_{l-g,\,i-g} = (D^T)_{i-g,\,l-g}$이다. 따라서 $M^T$는 왼쪽 위 블록이 $B^T$, 오른쪽 아래 블록이 $D^T$인 블록 위삼각행렬이다. [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)을 $M$, $B$, $D$에 쓰면 $\det M = \det M^T = \det B^T \cdot \det D^T = \det B \cdot \det D$이다.

**(4).** 블록 대각행렬은 블록 위삼각행렬이므로 (2)의 경우이다.

**(5).** [[characteristic-polynomial|특성다항식]]에서 $M - xI_n$은 $M + \bigl(-(xI_n)\bigr)$이고, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서와 같이 $M_{n \times n}$의 차이다. (1)의 (i), (ii)에 의해 $-(xI_n) = (-x)I_n$의 네 블록은 $(-x)I_g$, $O$, $O$, $(-x)I_h$이고, 다시 (1)의 (ii)에 의해 $M - xI_n$의 네 블록은 $B - xI_g$, $C$, $O$, $D - xI_h$이다($C + O = C$, $O + O = O$). (2)에 의해 모든 실수 $x$에서
$$
\begin{aligned}
&\det(M - xI_n) \\
&= \det(B - xI_g) \cdot \det(D - xI_h)
\end{aligned}
$$
이고, 특성다항식의 정의와 [[product-of-polynomial-functions|다항함수의 곱]]의 정의에 의해 $p_M(x) = p_B(x)\, p_D(x) = (p_B\, p_D)(x)$이다. 두 함수의 값이 모든 $x$에서 같으므로 $p_M = p_B\, p_D$이다. $M = \begin{pmatrix} B & O \\ E & D \end{pmatrix}$이면 같은 계산으로 $M - xI_n$의 네 블록이 $B - xI_g$, $O$, $E$, $D - xI_h$이고 (3)을 쓴다.

**(6).** [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)에 의해 $\det(cI_g) = c^g$이므로 (2)에서 $\det M = c^g \det D$이다. $k \le g$이면 $M$의 $k$번째 열의 $j$번째 값은 $j \le g$이면 $(cI_g)_{j,k}$, $j > g$이면 $0$이므로 $j = k$일 때 $c$, 아닐 때 $0$이다((K9)). 곧 $k$번째 열은 $c\,e_k$([[standard-basis|표준기저]])이다. $d_{i,l} = m_{g+i,\,g+l}$이므로 $D$는 그 항목의 (1)의 $C$이다. $\blacksquare$
:::

## 예시와 반례

:::example[왼쪽 위 블록이 2 × 2 인 4 × 4 행렬의 행렬식]
$$
M = \begin{pmatrix} 1 & 2 & 5 & 6 \\ 3 & 4 & 7 & 8 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}
$$
은 $g = h = 2$에 대한 블록 위삼각행렬이고 $B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $D = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$입니다. [[determinant|행렬식]]의 (4)에 의해 $\det B = 4 - 6 = -2$, $\det D = 2 - 1 = 1$이므로 (2)에 의해 $\det M = -2$입니다.

첫째 열 전개로 직접 확인하면, 첫째 열의 $0$이 아닌 성분은 $m_{1,1} = 1$, $m_{2,1} = 3$이므로 $\det M = 1 \cdot \det M^{(1,1)} - 3 \det M^{(2,1)}$입니다. $M^{(1,1)} = \begin{pmatrix} 4 & 7 & 8 \\ 0 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$의 행렬식은 첫째 열 전개로 $4(2 - 1) = 4$이고, $M^{(2,1)} = \begin{pmatrix} 2 & 5 & 6 \\ 0 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$의 행렬식은 $2(2 - 1) = 2$입니다. 따라서 $\det M = 4 - 3 \cdot 2 = -2$로 같습니다. $B$는 단위행렬의 배수가 아니므로 이 행렬에는 [[determinant-with-leading-columns|처음 몇 열이 단위벡터의 배수인 행렬의 행렬식]]을 쓸 수 없습니다.
:::

:::example[블록 대각행렬의 특성다항식]
$B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$, $M = \begin{pmatrix} B & O \\ O & D \end{pmatrix}$이라 합시다. 행렬식의 (4)에 의해 $p_B(x) = \det \begin{pmatrix} -x & 1 \\ 1 & -x \end{pmatrix} = x^2 - 1$이고, $D$는 아래삼각행렬이므로 $p_D(x) = (2 - x)(3 - x)$입니다. (5)에 의해 모든 실수 $x$에서 $p_M(x) = (x^2 - 1)(2 - x)(3 - x)$이고, $M$의 고윳값은 이 값이 $0$인 $x$, 곧 $1$, $-1$, $2$, $3$입니다.
:::

:::counterexample[왼쪽 아래 블록이 영행렬이 아닌 2 × 2 행렬의 예]
$g = h = 1$이고 $M = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$이면 $B = (1)$, $D = (4)$이고 $\det B \cdot \det D = 4$이지만 $\det M = 4 - 6 = -2$입니다. 왼쪽 아래 블록 $(3)$이 영행렬이 아니어서 (2)의 가정이 성립하지 않습니다. 오른쪽 위 블록 $(2)$도 영행렬이 아니므로 (3)의 가정도 성립하지 않습니다.
:::

## 확인 질문

:::check[g = 1, h = 2 에 대한 블록 위삼각행렬 M 의 왼쪽 위 블록의 성분이 5 이고 오른쪽 아래 블록이 영행렬이면 det M 은 무엇인가?]
(2)에 의해 $\det M = \det(5) \cdot \det O = 5 \cdot 0 = 0$입니다. 행렬식의 (4)에 의해 $2 \times 2$ 영행렬의 행렬식은 $0 \cdot 0 - 0 \cdot 0 = 0$입니다. 오른쪽 위 블록이 무엇이든 그렇습니다.
:::

:::check[g = h = 1 에 대한 블록 대각행렬 M 의 두 블록의 성분이 2 와 3 이면 MM 은 무엇인가?]
(1)의 (iii)에 의해 $MM = \begin{pmatrix} BB & O \\ O & DD \end{pmatrix} = \begin{pmatrix} 4 & 0 \\ 0 & 9 \end{pmatrix}$입니다. 이 경우 $g = h = 1$이고 블록은 $1 \times 1$ 행렬입니다.
:::
