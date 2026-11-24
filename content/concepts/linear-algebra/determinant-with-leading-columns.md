---
title: 처음 몇 열이 단위벡터의 배수인 행렬의 행렬식
title_en: Determinant of a Matrix Whose First Columns Are Multiples of Standard Basis Vectors
aliases: [블록 삼각행렬의 행렬식, 처음 g 개 열이 c e_k 인 행렬, determinant of a block triangular matrix]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: n × n 행렬 M 의 처음 g 개 열이 차례로 c·e₁, …, c·e_g 이면, g < n 일 때 det M 은 c^g 와 M 의 처음 g 개 행과 열을 지운 (n − g) × (n − g) 행렬의 행렬식의 곱이고, g = n 이면 M = cIₙ 이고 det M = cⁿ 이다. B − xIₙ 꼴과 행에 대한 같은 꼴도 함께 증명한다.
requires: [real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, matrix, transpose, standard-basis, power-of-a-real-number, minor-matrix, determinant, determinant-of-product, determinant-of-transpose, determinant-of-triangular-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 연습문제 3.10, 3.11, p.86; 4장 1절 Main definitions, 연습문제 1.7, 1.8, p.105; 6장 1절 Upper triangular (Schur) representation of an operator, Theorem 1.2 의 증명, p.165; 9장 3.3 Geometric meaning of algebraic multiplicity, Proposition 3.8 의 증명, p.264; 3장 3.3 Determinants of diagonal and triangular matrices, p.81; 3.6 Summary of properties of determinant 의 12, p.85; 4절 연습문제 4.2, p.89"
    checked: original
    note: "출처는 블록 삼각행렬의 행렬식을 3장 연습문제 3.10–3.12(p.86)와 4장 연습문제 1.7(p.105)에 두고, 9장 3.3절 Proposition 3.8 의 증명(p.264)에서는 블록 대각 꼴의 det(A − λI) 를 블록마다의 행렬식의 곱으로 쓴다. 연습문제 3.10(p.86)은 정사각행렬 A 에 대해 블록 삼각행렬 (I ∗; 0 A), (A ∗; 0 I), (I 0; ∗ A), (A 0; ∗ I) 의 행렬식이 모두 det A 라는 것을 보이라 하고, 3.11 은 det(A B; 0 C) = det A det C 를 그 힌트의 블록 곱으로 보이라 한다. 출처는 블록 행렬의 표기와 곱을 정의하지 않는다(p.86 'The following problems illustrate the power of block matrix notation'). 이 항목은 블록 행렬을 정의하지 않고 처음 g 개 열이 c e₁, …, c e_g 라는 조건을 성분으로 적는다. (1)은 연습문제 3.10 의 첫째 꼴 (I ∗; 0 A) 에서 I 를 c 배한 꼴이고, (4)는 셋째 꼴 (I 0; ∗ A) 에서 같은 것을 한 꼴이다. 일반의 det(A B; 0 C) = det A det C 는 싣지 않았다. (3)은 4장 연습문제 1.8(p.105, 기저의 처음 k 개 벡터가 고윳값 λ 의 고유벡터이면 그 기저에서 행렬이 (λI_k ∗; 0 B) 꼴)의 행렬에서 1.7(p.105, 블록 삼각행렬의 특성다항식은 det(A − λI) det(B − λI), 3장 연습문제 3.11 을 쓰라)이 계산하는 것을 이 꼴에 한정해 진술한 것이다. 출처는 1.8 과 1.7 로 1.9(기하적 중복도 ≤ 대수적 중복도)를 보이게 한다. (3)의 g = 1 인 경우는 6장 Theorem 1.2 의 증명(p.165)이 첫째 열이 λ₁e₁ 인 꼴 (1.1) 의 행렬에 대해 det(A − λI) = (λ₁ − λ) det(A₁ − λ) 를 '첫째 행을 따라 여인수 전개하면 된다(for example)'고 적으며 쓰는 것과 같다. 증명은 g 에 대한 귀납으로 삼각행렬의 행렬식의 (1)(첫째 열이 c e₁ 인 행렬)을 되풀이한 이 사이트의 것이다. 예시 '처음 두 열이 $3e_1$, $3e_2$인 $4 \\times 4$ 행렬'은 연습문제 3.10 의 첫째 꼴과 같은 발상이다. 예시 '처음 한 열이 $4e_1$인 $B$의 $B - xI_3$'은 4장 연습문제 1.7(p.105, 블록 삼각행렬의 det(A − λI))과 같은 발상이다. 반례 '첫째 열이 $e_2$인 $2 \\times 2$ 행렬'의 행렬은 3장 4절 연습문제 4.2(p.89)가 다루는 치환행렬(permutation matrix)의 하나이다. 확인 질문 '$3 \\times 3$ 행렬 $M$의 세 열이 모두 $c\\,e_k$ 꼴이고 $c = -2$이면 $\\det M$은 무엇인가?'와 (2)의 M = cIₙ 은 출처 3.3절(p.81)의 대각행렬의 행렬식, 3.6절의 12(p.85) det(aA) = aⁿ det A 를 A = I 에 쓴 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 예의 수치 재계산). 가역 가정 없는 꼴과 n = 1, det A = 0 의 경우를 진술에 두었다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $M$이 $n \times n$ [[matrix|행렬]]이며 $g \in \{1, \dots, n\}$이고 $c$가 실수라 하자. $e_k$는 $\mathbb{R}^n$의 [[standard-basis|표준기저]]의 $k$번째 벡터이고, $c^g$는 [[power-of-a-real-number|실수의 거듭제곱]]이다. 모든 $k \in \{1, \dots, g\}$에서 $M$의 $k$번째 열 $\mathbf{m}_k$가 $c\,e_k$라 하자. 곧 $k \le g$이면 $m_{k,k} = c$이고 $j \ne k$인 모든 $j$에서 $m_{j,k} = 0$이다. 블록 행렬은 정의하지 않는다.

1. ($g < n$) $g < n$이면, $(i, l)$ 성분이 $m_{g+i, g+l}$인 $(n - g) \times (n - g)$ 행렬을 $C$라 할 때
   $$
   \det M = c^g \det C
   $$
   이다. $C$는 $M$에서 처음 $g$개의 행과 처음 $g$개의 열을 지우고 남은 성분을 그 순서대로 모은 행렬이다.
2. ($g = n$) $g = n$이면 $M = cI_n$이고 $\det M = c^n$이다.
3. ($B - xI_n$의 꼴) $B$가 $n \times n$ 행렬이고 $\lambda$가 실수이며, 모든 $k \in \{1, \dots, g\}$에서 $B$의 $k$번째 열이 $\lambda e_k$라 하자. 실수 $x$에 대하여 $M = B - xI_n$이라 하면, 모든 $k \le g$에서 $M$의 $k$번째 열은 $(\lambda - x) e_k$이다. $g < n$이면 $(i, l)$ 성분이 $b_{g+i, g+l}$인 $(n - g) \times (n - g)$ 행렬을 $B'$이라 할 때 (1)의 $C$는 $B' - xI_{n-g}$이고
   $$
   \begin{aligned}
   &\det(B - xI_n) \\
   &= (\lambda - x)^g \det(B' - xI_{n-g})
   \end{aligned}
   $$
   이다. $g = n$이면 $\det(B - xI_n) = (\lambda - x)^n$이다.
4. (행에 대한 같은 꼴) 처음 $g$개의 열 대신 처음 $g$개의 행에 대한 같은 가정, 곧 모든 $k \in \{1, \dots, g\}$에서 $M$의 $k$번째 행이 $\mathbb{R}^n$의 원소 $c\,e_k$이면, (1)과 (2)가 같은 $C$로 성립한다.
:::

:::english
Let $n$ be a natural number, $M$ an $n \times n$ matrix, $g \in \{1, \dots, n\}$ and $c$ a real number. Here $e_k$ is the $k$-th vector of the standard basis of $\mathbb{R}^n$ and $c^g$ is a power of a real number. Suppose that for every $k \in \{1, \dots, g\}$ the $k$-th column $\mathbf{m}_k$ of $M$ is $c\,e_k$. That is, for $k \le g$ we have $m_{k,k} = c$ and $m_{j,k} = 0$ for every $j \ne k$. Block matrices are not defined.

1. ($g < n$) If $g < n$ and $C$ is the $(n - g) \times (n - g)$ matrix whose $(i, l)$ entry is $m_{g+i, g+l}$, then
   $$
   \det M = c^g \det C.
   $$
   The matrix $C$ is obtained from $M$ by deleting the first $g$ rows and the first $g$ columns and collecting the remaining entries in their order.
2. ($g = n$) If $g = n$, then $M = cI_n$ and $\det M = c^n$.
3. (The form $B - xI_n$) Let $B$ be an $n \times n$ matrix and $\lambda$ a real number, and suppose that for every $k \in \{1, \dots, g\}$ the $k$-th column of $B$ is $\lambda e_k$. For a real number $x$ let $M = B - xI_n$. Then for every $k \le g$ the $k$-th column of $M$ is $(\lambda - x) e_k$. If $g < n$ and $B'$ is the $(n - g) \times (n - g)$ matrix whose $(i, l)$ entry is $b_{g+i, g+l}$, then the matrix $C$ of (1) is $B' - xI_{n-g}$ and
   $$
   \begin{aligned}
   &\det(B - xI_n) \\
   &= (\lambda - x)^g \det(B' - xI_{n-g}).
   \end{aligned}
   $$
   If $g = n$, then $\det(B - xI_n) = (\lambda - x)^n$.
4. (The same form for rows) If the same assumption is made on the first $g$ rows instead of the first $g$ columns, that is, if for every $k \in \{1, \dots, g\}$ the $k$-th row of $M$ is the element $c\,e_k$ of $\mathbb{R}^n$, then (1) and (2) hold with the same $C$.
:::

## 직관

$g = 1 < n$인 경우가 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (1)입니다. 첫째 열이 $c\,e_1$이면 첫째 열을 따라 전개할 때 첫째 항만 남아 $\det M = c \det M^{(1,1)}$이 됩니다. 처음 $g$개의 열이 모두 이런 꼴이면, $M^{(1,1)}$의 처음 $g - 1$개의 열이 다시 같은 꼴이므로, $g < n$이면 이 일을 $g$번 되풀이할 수 있고, 그때마다 $c$가 하나씩 곱해집니다.

벽돌을 쌓은 탑에서 맨 아래 벽돌을 하나씩 빼내는 것에 비유할 수 있습니다. 벽돌 하나를 뺄 때마다 무게 $c$가 기록되고 탑이 한 층 낮아지며, $g$개를 빼면 기록은 $c^g$이고 남은 탑이 $C$입니다. 비유에서 "맨 아래"에 해당하는 것은 행렬의 왼쪽 위 구석이고, 빼낼 수 있는 까닭은 그 열의 다른 성분이 모두 $0$이기 때문입니다. 오른쪽 위의 성분 $m_{k,l}$($k \le g < l$)은 아무 값이어도 되고 결과에 나타나지 않습니다.

(3)은 선형대수 강의의 고윳값에서 쓰던 $A - \lambda I_n$처럼 대각선에서 같은 수를 뺀 행렬 $B - xI_n$에 (1)을 쓴 것입니다. 처음 $g$개의 열이 $\lambda e_k$인 $B$에서 $xI_n$을 빼면 그 열들이 $(\lambda - x)e_k$가 되고, 남는 블록은 $B$의 오른쪽 아래 블록에서 $xI_{n-g}$를 뺀 것이 됩니다.

## 증명

:::idea
$g$에 대한 귀납법을 쓴다. 첫째 열이 $c\,e_1$이므로 $\det M = c \det M^{(1,1)}$이고, $M^{(1,1)}$의 처음 $g - 1$개의 열이 다시 $c\,e_1, \dots, c\,e_{g-1}$이며 그 오른쪽 아래 블록이 $M$의 것과 같다는 것을 성분으로 확인한다.
:::

:::hint
[[minor-matrix|소행렬]]의 (2)에 의해 $(M^{(1,1)})_{i,l} = m_{i+1,l+1}$입니다. $l \le g - 1$이면 $l + 1 \le g$이므로 $m_{i+1,l+1}$은 무엇입니까?
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, 정수의 순서는 [[well-ordering-principle|정렬 원리]] 항목의 번호로 인용한다. 행렬의 (2)에 의해 같은 크기의 두 행렬은 모든 성분이 같으면 같다. [[standard-basis|표준기저]]의 정의에 의해 $c\,e_k$의 $j$번째 값은 $j = k$이면 $c$, $j \ne k$이면 $0$이다((K4), (K9)).

**(1)의 증명.** 자연수 $g$에 대하여 다음 명제를 $Q(g)$라 하고 [[mathematical-induction|수학적 귀납법]]을 쓴다.

> $Q(g)$: $n > g$인 모든 자연수 $n$과, 모든 $k \in \{1, \dots, g\}$에서 $k$번째 열이 $c\,e_k$인 모든 $n \times n$ 행렬 $M$에 대하여, $(i, l)$ 성분이 $m_{g+i, g+l}$인 $(n - g) \times (n - g)$ 행렬 $C$는 $\det M = c^g \det C$를 만족한다.

- 기초 단계 $Q(1)$: $n > 1$이므로 [[prime-number|소수]] 항목의 (Z1)에 의해 $n \ge 2$이고, $M$의 첫째 열은 $c\,e_1$이다. [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (1)에 의해 $\det M = c \det M^{(1,1)}$이다. 소행렬의 (2)에 의해 $(M^{(1,1)})_{i,l} = m_{i+1,l+1} = m_{1+i,1+l}$((K1), (K7))이므로 $M^{(1,1)} = C$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $c^1 = c$이므로 $\det M = c^1 \det C$이다.
- 귀납 단계: $Q(g)$가 참이라 하자. $n > g + 1$인 자연수 $n$과, 모든 $k \in \{1, \dots, g + 1\}$에서 $k$번째 열이 $c\,e_k$인 $n \times n$ 행렬 $M$을 잡는다. $(i, l)$ 성분이 $m_{(g+1)+i, (g+1)+l}$인 $(n - g - 1) \times (n - g - 1)$ 행렬을 $C$라 하자. $g + 1 \ge 2$이므로 $n \ge 3$이고, 첫째 열은 $c\,e_1$이므로 삼각행렬의 행렬식의 (1)에 의해 $\det M = c \det M'$이다. 여기서 $M' = M^{(1,1)}$은 $(n - 1) \times (n - 1)$ 행렬이고 소행렬의 (2)에 의해 $m'_{i,l} = m_{i+1,l+1}$이다.
  - $M'$의 처음 $g$개의 열. $l \in \{1, \dots, g\}$이면 $g < n - 1$이므로 $l \le n - 1$이고, $l + 1 \in \{2, \dots, g + 1\}$이므로 $M$의 $(l + 1)$번째 열은 $c\,e_{l+1}$이다. 따라서 $m'_{i,l} = m_{i+1,l+1}$은 $i + 1 = l + 1$이면 $c$, 아니면 $0$이다. (Z7)에 의해 $i + 1 = l + 1$인 것은 정확히 $i = l$일 때이므로, $M'$의 $l$번째 열은 $\mathbb{R}^{n-1}$의 $c\,e_l$이다.
  - $n - 1 > g$이므로 $Q(g)$를 $M'$에 쓸 수 있고, $(i, l)$ 성분이 $m'_{g+i, g+l}$인 $((n - 1) - g) \times ((n - 1) - g)$ 행렬 $C'$에 대하여 $\det M' = c^g \det C'$이다. $m'_{g+i, g+l} = m_{g+i+1, g+l+1} = m_{(g+1)+i, (g+1)+l}$((K1), (K2), (K7))이고 $(n - 1) - g = n - g - 1$이므로 $C' = C$이다.

  따라서 $\det M = c \cdot c^g \det C$이고, 실수의 거듭제곱의 (1)과 (K1), (K2)에 의해 $c \cdot c^g = c^g c = c^{g+1}$이므로 $\det M = c^{g+1} \det C$이다. 곧 $Q(g + 1)$이 참이다.

따라서 모든 자연수 $g$에서 $Q(g)$가 참이고, $g < n$이면 (1)이 나온다.

**(2)의 증명.** $g = n$이면 $M$의 모든 열이 $c\,e_k$이다. [[matrix|행렬]]의 (5)와 (6)에 의해 $cI_n$의 $k$번째 열도 $c\,e_k$이므로 행렬의 (3)에 의해 $M = cI_n$이다. [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det M = \det(cI_n) = c^n$이다.

**(3)의 증명.** $M = B - xI_n$은 $M_{n \times n}$에서 $B$에 $xI_n$의 덧셈 역원을 더한 것이므로, 행렬의 (1)에 의해 $m_{j,l} = b_{j,l} - x (I_n)_{j,l}$이다. $k \le g$라 하자. $j = k$이면 $m_{k,k} = \lambda - x \cdot 1 = \lambda - x$이고, $j \ne k$이면 $m_{j,k} = 0 - x \cdot 0 = 0$이다((K4), (K9)). 따라서 $M$의 $k$번째 열은 $(\lambda - x) e_k$이다.

$g < n$이라 하자. (1)의 $C$의 $(i, l)$ 성분은 $m_{g+i, g+l} = b_{g+i, g+l} - x (I_n)_{g+i, g+l}$이다. (Z7)에 의해 $g + i = g + l$인 것은 정확히 $i = l$일 때이므로 $(I_n)_{g+i, g+l} = (I_{n-g})_{i,l}$이고, 따라서 $C$의 $(i, l)$ 성분은 $B' - xI_{n-g}$의 $(i, l)$ 성분과 같다. 곧 $C = B' - xI_{n-g}$이다. (1)을 $c = \lambda - x$로 쓰면 $\det(B - xI_n) = (\lambda - x)^g \det(B' - xI_{n-g})$이다. $g = n$이면 (2)를 $c = \lambda - x$로 쓴다.

**(4)의 증명.** [[transpose|전치행렬]]의 (2)에 의해 $M^T$의 $k$번째 열은 $M$의 $k$번째 행이므로, $k \le g$에서 $M^T$의 $k$번째 열은 $c\,e_k$이다. [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)에 의해 $\det M = \det M^T$이다.

$g < n$이면 (1)을 $M^T$에 쓴다. $M^T$에 대한 (1)의 행렬의 $(i, l)$ 성분은 전치행렬의 정의에 의해 $(M^T)_{g+i, g+l} = m_{g+l, g+i} = C_{l,i} = (C^T)_{i,l}$($C_{l,i}$는 $C$의 $(l, i)$ 성분)이므로 그 행렬은 $C^T$이고, $\det M = \det M^T = c^g \det C^T = c^g \det C$이다(전치행렬의 행렬식의 (1)).

$g = n$이면 (2)에 의해 $M^T = cI_n$이고, 전치행렬의 (1), (3)에 의해 $M = (M^T)^T = (cI_n)^T = cI_n^T = cI_n$이며 $\det M = c^n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[처음 두 열이 $3e_1$, $3e_2$인 $4 \times 4$ 행렬]
$$
M = \begin{pmatrix} 3 & 0 & 1 & 2 \\ 0 & 3 & 4 & 1 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 5 & 3 \end{pmatrix}
$$
은 $g = 2$, $c = 3$인 경우입니다. 처음 두 행과 두 열을 지우면 $C = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$이고 [[determinant|행렬식]]의 (4)에 의해 $\det C = 6 - 5 = 1$이므로, (1)에 의해 $\det M = 3^2 \cdot 1 = 9$입니다. 오른쪽 위의 성분 $1$, $2$, $4$, $1$은 결과에 나타나지 않습니다.
:::

:::example[처음 한 열이 $4e_1$인 $B$의 $B - xI_3$]
$$
B = \begin{pmatrix} 4 & 1 & 2 \\ 0 & 1 & 3 \\ 0 & 2 & 2 \end{pmatrix}
$$
이면 $g = 1$, $\lambda = 4$이고 $B' = \begin{pmatrix} 1 & 3 \\ 2 & 2 \end{pmatrix}$입니다. (3)과 행렬식의 (4)에 의해 모든 실수 $x$에서
$$
\begin{aligned}
&\det(B - xI_3) \\
&= (4 - x) \det \begin{pmatrix} 1 - x & 3 \\ 2 & 2 - x \end{pmatrix} \\
&= (4 - x)\big((1 - x)(2 - x) - 6\big)
\end{aligned}
$$
입니다. $x = 0$으로 두면 $\det B = 4(2 - 6) = -16$이고, 이것은 $B$를 첫째 열을 따라 전개한 $4 \cdot (1 \cdot 2 - 2 \cdot 3) = -16$과 같습니다.
:::

:::counterexample[첫째 열이 $e_2$인 $2 \times 2$ 행렬]
$M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$의 첫째 열은 $c\,e_1$ 꼴이 아니라 $e_2$입니다. 이 행렬에 (1)의 식을 $g = 1$, $c = 1$로 억지로 쓰면 $C = \begin{pmatrix} m_{2,2} \end{pmatrix}$의 행렬식은 $0$이어서 $1 \cdot 0 = 0$이 나오지만, 행렬식의 (4)에 의해 $\det M = 0 - 1 = -1$입니다. 이 예에서는 $c\,e_k$의 $c$가 놓이는 자리가 대각선 위가 아니어서 (1)을 쓸 수 없습니다.
:::

## 확인 질문

:::check[$n \times n$ 행렬 $M$의 처음 두 열이 $2e_1$, $3e_2$이고 $n \ge 3$이면 $\det M$은 (1)의 $C$($g = 2$)의 행렬식의 몇 배인가?]
$6$배입니다. 두 열의 배수가 달라 (1)을 $g = 2$로 바로 쓸 수는 없지만, $g = 1$, $c = 2$로 쓰면 $\det M = 2 \det M^{(1,1)}$이고, [[minor-matrix|소행렬]]의 (2)에 의해 $M^{(1,1)}$의 첫째 열은 $3e_1$이므로 다시 $g = 1$, $c = 3$으로 쓰면 $\det M^{(1,1)} = 3 \det C$입니다. 여기서 $M^{(1,1)}$에 대한 (1)의 행렬은 $(i, l)$ 성분이 $m_{2+i, 2+l}$인 $C$입니다.
:::

:::check[$3 \times 3$ 행렬 $M$의 세 열이 모두 $c\,e_k$ 꼴이고 $c = -2$이면 $\det M$은 무엇인가?]
(2)에 의해 $M = -2I_3$이고 $\det M = (-2)^3 = -8$입니다.
:::
