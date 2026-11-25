---
title: 최소제곱의 예
title_en: Examples of Least Squares
aliases: [직선 맞추기, 최소제곱 직선, 회귀 직선, line fitting, least squares line]
kind: proposition
field: linear-algebra
msc: ["15A06", "65F20"]
level: undergrad
summary: 네 점에 가장 가까운 직선을 최소제곱 해로 구하고, 같은 행렬의 열공간으로의 직교사영의 행렬을 A(AᵀA)⁻¹Aᵀ 로 계산한다. 또 연립방정식이 해를 가지면 최소제곱 해가 그 해와 같다는 것과, 열이 일차종속이면 최소제곱 해가 무수히 많고 그 차가 핵에 든다는 것을 구체적인 행렬로 확인한다.
requires: [real-number-arithmetic, linear-independence, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, inner-product-space, standard-inner-product, norm-in-inner-product-space, kernel-of-transpose-product, least-squares-solution]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 4절 Least square solution. Formula for the orthogonal projection 의 4.3 An example. line fitting 과 4.3.1 An example, pp.138–139; 4.2 Formula for the orthogonal projection, p.137; 같은 절의 연습문제 4.2, 4.3, p.141 과 4.6, p.142
    checked: original
    note: "(1)은 출처 4.3(p.138)이 n 개의 점 (x_k, y_k) 에 직선 y = a + bx 를 맞추는 일을 열이 (1, …, 1) 과 (x_1, …, x_n) 인 행렬의 최소제곱 해로 바꾸는 것과 같은 발상이고, 출처 4.3.1(p.139)의 다섯 점 (−2, 4), (−1, 2), (0, 1), (2, 1), (3, 1) 과 연습문제 4.3(p.141)의 네 점과는 다른 점을 썼다. 출처는 맞춤의 오차를 '제곱 오차의 합' 으로 적는다(p.138). (2)는 출처 4.2(p.137)의 식 A(A*A)⁻¹A* 를 쓴 계산이고, 출처 연습문제 4.2(p.141)가 3 × 2 행렬의 열공간으로의 직교사영의 행렬을 이 식으로 구하게 하는 것과 같은 발상이다. (4)의 해 전체가 핵만큼 흔들린다는 것은 출처 연습문제 4.6(p.142)이 다루는 '최소제곱 해 전체' 와 같은 대상이다. 예시 '평균은 상수 맞춤의 최소제곱 해' 의 행렬은 출처 4.3 의 직선 맞추기 행렬의 첫째 열과 같은 열 (1, …, 1) 하나로 된 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
아래에서 $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이며, 최소제곱 해와 정규방정식은 [[least-squares-solution|최소제곱 해와 정규방정식]]의 것이다. $T_A$와 $\operatorname{Ker}$, $\operatorname{Col}$은 그 항목에서와 같다.
$$
A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}, \qquad b = (1, 3, 4, 4)
$$
로 둔다.

1. (네 점의 직선 맞추기) $Ax = b$의 최소제곱 해는 $x = \bigl(\tfrac{3}{2}, 1\bigr)$ 하나뿐이다. 이때 $Ax = \bigl(\tfrac{3}{2}, \tfrac{5}{2}, \tfrac{7}{2}, \tfrac{9}{2}\bigr)$, $b - Ax = \bigl(-\tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr)$이고 가장 작은 값은 $\lVert Ax - b \rVert^2 = 1$이다. 곧 네 점 $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$에 대하여, 실수 $c$, $d$로 $k$번째 항이 $(c + d \cdot (k - 1)) - q_k$인 열의 제곱의 합($q_1, \dots, q_4$는 $1, 3, 4, 4$)을 가장 작게 하는 $(c, d)$는 $\bigl(\tfrac{3}{2}, 1\bigr)$ 하나뿐이다.
2. (사영의 행렬) $\operatorname{proj}_{\operatorname{Col} A}$의 행렬은
   $$
   \begin{aligned}
   &A (A^T A)^{-1} A^T \\
   &\quad = \frac{1}{10}\begin{pmatrix} 7 & 4 & 1 & -2 \\ 4 & 3 & 2 & 1 \\ 1 & 2 & 3 & 4 \\ -2 & 1 & 4 & 7 \end{pmatrix}
   \end{aligned}
   $$
   이다.
3. (해가 있을 때) $b' = (1, 2, 3, 4)$이면 $Ax = b'$의 최소제곱 해는 $(1, 1)$ 하나뿐이고, 그것은 $Ax = b'$의 해이며 $\lVert A(1, 1) - b' \rVert = 0$이다.
4. (열이 일차종속일 때)
   $$
   A' = \begin{pmatrix} 1 & 2 \\ 1 & 2 \\ 1 & 2 \end{pmatrix}, \qquad b'' = (1, 2, 6)
   $$
   이면 $A'x = b''$의 최소제곱 해 전체의 집합은 $\{(3 - 2s, s) : s \in \mathbb{R}\}$이고, 이것은 $\{(3, 0) + h : h \in \operatorname{Ker} T_{A'}\}$이며 $\operatorname{Ker} T_{A'} = \{s(-2, 1) : s \in \mathbb{R}\}$이다. 모든 최소제곱 해 $x$에서 $A'x = (3, 3, 3)$이고 $\lVert A'x - b'' \rVert^2 = 14$이다.
:::

:::english
Below, $\mathbb{R}^m$ carries the standard inner product, norms are those of the entry on norms, and least squares solutions and the normal equation are those of the entry on least squares solutions. $T_A$, $\operatorname{Ker}$ and $\operatorname{Col}$ are as in that entry. Let
$$
A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}, \qquad b = (1, 3, 4, 4).
$$

1. (Fitting a line to four points) The least squares solution of $Ax = b$ is unique and equals $x = \bigl(\tfrac{3}{2}, 1\bigr)$. Then $Ax = \bigl(\tfrac{3}{2}, \tfrac{5}{2}, \tfrac{7}{2}, \tfrac{9}{2}\bigr)$, $b - Ax = \bigl(-\tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr)$, and the smallest value is $\lVert Ax - b \rVert^2 = 1$. That is, for the four points $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$, the unique pair $(c, d)$ of real numbers minimizing the sum of squares of the sequence whose $k$-th term is $(c + d \cdot (k - 1)) - q_k$ (where $q_1, \dots, q_4$ are $1, 3, 4, 4$) is $\bigl(\tfrac{3}{2}, 1\bigr)$.
2. (Matrix of the projection) The matrix of $\operatorname{proj}_{\operatorname{Col} A}$ is
   $$
   \begin{aligned}
   &A (A^T A)^{-1} A^T \\
   &\quad = \frac{1}{10}\begin{pmatrix} 7 & 4 & 1 & -2 \\ 4 & 3 & 2 & 1 \\ 1 & 2 & 3 & 4 \\ -2 & 1 & 4 & 7 \end{pmatrix}.
   \end{aligned}
   $$
3. (When a solution exists) If $b' = (1, 2, 3, 4)$, the least squares solution of $Ax = b'$ is unique and equals $(1, 1)$; it is a solution of $Ax = b'$, and $\lVert A(1, 1) - b' \rVert = 0$.
4. (Dependent columns) If
   $$
   A' = \begin{pmatrix} 1 & 2 \\ 1 & 2 \\ 1 & 2 \end{pmatrix}, \qquad b'' = (1, 2, 6),
   $$
   then the set of all least squares solutions of $A'x = b''$ is $\{(3 - 2s, s) : s \in \mathbb{R}\}$, which equals $\{(3, 0) + h : h \in \operatorname{Ker} T_{A'}\}$, where $\operatorname{Ker} T_{A'} = \{s(-2, 1) : s \in \mathbb{R}\}$. For every least squares solution $x$, $A'x = (3, 3, 3)$ and $\lVert A'x - b'' \rVert^2 = 14$.
:::

## 직관

네 점 $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$는 한 직선 위에 있지 않습니다. 높이가 $c$에서 시작해 가로로 $1$ 갈 때마다 $d$씩 오르는 직선이 가로 좌표 $0, 1, 2, 3$에서 각 점의 높이와 같으려면 미지수 $c$, $d$에 대한 네 식이 모두 맞아야 하는데, 이 연립방정식 $Ax = b$는 해가 없습니다(앞의 두 식에서 $c = 1$, $d = 2$인데 셋째 식에서 $1 + 2 \cdot 2 \ne 4$입니다). 그래서 네 식의 어긋남의 제곱의 합을 가장 작게 하는 $(c, d)$를 찾고, 그것이 최소제곱 해입니다. 비유에서 "점의 높이"가 $b$의 성분, "직선의 높이"가 $Ax$의 성분입니다.

정규방정식은 $2 \times 2$ 연립방정식이어서 손으로 풀 수 있고, 답의 어긋남 $b - Ax$는 $A$의 두 열과 모두 직교합니다. 첫째 열이 $(1, 1, 1, 1)$이므로 어긋남의 성분을 더하면 $0$이 되고, 직선이 점들의 위아래로 고르게 지나갑니다.

$Ax = b$가 해를 가지면 최소제곱 해는 그 해이고((3)), 열이 일차종속이면 $Ax$는 정해지지만 $x$는 핵의 원소만큼 흔들립니다((4)). (4)의 행렬은 열이 모두 $(1, 1, 1)$의 배수이므로 $A'x$는 늘 $(1, 1, 1)$의 배수이고, $b''$에 가장 가까운 것은 성분이 $b''$의 성분의 평균 $3$인 벡터입니다.

## 증명

:::idea
각 경우에 $A^T A$와 $A^T b$를 열끼리의 내적으로 계산해 정규방정식을 풀고, [[least-squares-solution|최소제곱 해와 정규방정식]]의 (1), (3), (4), (5), (6)을 쓴다.
:::

:::hint
$A^T A$의 성분은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 열끼리의 내적이고, $A^T b$의 성분은 같은 항목의 (3)에 의해 열과 $b$의 내적입니다.
:::

:::proof
[[least-squares-solution|최소제곱 해와 정규방정식]]의 번호는 "최소제곱의 (1)"처럼, [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호는 "표준내적의 (5)"처럼 줄여 쓴다. 분수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한 것이다. $A$의 열은 $\mathbf{a}_1 = (1, 1, 1, 1)$, $\mathbf{a}_2 = (0, 1, 2, 3)$이다.

**(1)의 증명.** $c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = 0$이면 첫째 성분에서 $c_1 = 0$, 둘째 성분에서 $c_1 + c_2 = 0$이므로 $c_2 = 0$이다. 따라서 열은 [[linear-independence|일차독립]]이고, 최소제곱의 (4)에 의해 최소제곱 해는 하나뿐이며 $A^T A$는 가역이다. 표준내적의 (5)와 (3)에 의해
$$
\begin{aligned}
A^T A &= \begin{pmatrix} 4 & 6 \\ 6 & 14 \end{pmatrix}, \\
A^T b &= (12, 23)
\end{aligned}
$$
이다. 성분은 $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = 4$, $\langle \mathbf{a}_1, \mathbf{a}_2 \rangle = 0 + 1 + 2 + 3 = 6$, $\langle \mathbf{a}_2, \mathbf{a}_2 \rangle = 0 + 1 + 4 + 9 = 14$, $\langle \mathbf{a}_1, b \rangle = 1 + 3 + 4 + 4 = 12$, $\langle \mathbf{a}_2, b \rangle = 0 + 3 + 8 + 12 = 23$이다. $N = \begin{pmatrix} 14 & -6 \\ -6 & 4 \end{pmatrix}$이라 하면 [[matrix-product|행렬의 곱]]의 (2)에 의해
$$
\begin{aligned}
(A^T A) N &= \begin{pmatrix} 56 - 36 & -24 + 24 \\ 84 - 84 & -36 + 56 \end{pmatrix}, \\
N (A^T A) &= \begin{pmatrix} 56 - 36 & 84 - 84 \\ -24 + 24 & -36 + 56 \end{pmatrix}
\end{aligned}
$$
이고 둘 다 모든 대각성분이 $20$, 나머지가 $0$이므로, [[matrix-product-properties|행렬의 곱의 성질]]의 (3)으로 $\tfrac{1}{20}$을 곱하면 [[invertible-matrix|가역행렬]]의 (1)에 의해 $(A^T A)^{-1} = \tfrac{1}{20} N$이다. 최소제곱의 (4)에 의해 최소제곱 해는
$$
\begin{aligned}
x &= \tfrac{1}{20} N (12, 23) \\
&= \tfrac{1}{20}(168 - 138, -72 + 92) \\
&= \bigl(\tfrac{3}{2}, 1\bigr)
\end{aligned}
$$
이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Ax$의 $k$번째 값은 $\tfrac{3}{2} + (k - 1)$이므로 $Ax = \bigl(\tfrac{3}{2}, \tfrac{5}{2}, \tfrac{7}{2}, \tfrac{9}{2}\bigr)$이고, $b - Ax = \bigl(-\tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr)$이다. [[norm-in-inner-product-space|내적공간의 노름]]의 (3)과 (8)에 의해 $\lVert Ax - b \rVert^2 = \lVert b - Ax \rVert^2 = \tfrac{1}{4} \cdot 4 = 1$이고, 최소제곱 해의 정의에 의해 이것이 모든 $y$에 대한 $\lVert Ay - b \rVert^2$ 가운데 가장 작은 값이다(노름의 (2)에 의해 노름을 비교하는 것과 제곱을 비교하는 것은 같다).

마지막 문장: $y = (c, d)$이면 행렬과 벡터의 곱의 (1)에 의해 $Ay - b$의 $k$번째 값은 $(c + d \cdot (k - 1)) - q_k$이고, 노름의 (8)에 의해 $\lVert Ay - b \rVert^2$은 그 제곱의 합이다. 노름의 (2)에 의해 제곱의 합을 가장 작게 하는 $y$는 정확히 $\lVert Ay - b \rVert$를 가장 작게 하는 $y$, 곧 최소제곱 해이다.

**(2)의 증명.** 열이 일차독립이므로 최소제곱의 (5)에 의해 행렬은 $A (A^T A)^{-1} A^T = \tfrac{1}{20} A N A^T$이다. $A$의 $j$번째 행은 $(1, j - 1)$이므로 행렬의 곱의 (2)에 의해 $AN$의 $j$번째 행은 $(14 - 6(j - 1), -6 + 4(j - 1))$, 곧 $j = 1, 2, 3, 4$에서 $(14, -6)$, $(8, -2)$, $(2, 2)$, $(-4, 6)$이다. $A^T$의 $k$번째 열은 $(1, k - 1)$이므로 $(AN)A^T$의 $(j, k)$ 성분은 $(14 - 6(j - 1)) + (-6 + 4(j - 1))(k - 1)$이다. $j = 1$이면 $14 - 6(k - 1)$로 $14, 8, 2, -4$, $j = 2$이면 $8 - 2(k - 1)$로 $8, 6, 4, 2$, $j = 3$이면 $2 + 2(k - 1)$로 $2, 4, 6, 8$, $j = 4$이면 $-4 + 6(k - 1)$로 $-4, 2, 8, 14$이다. 모든 성분을 $20$으로 나누면 진술의 행렬이다.

**(3)의 증명.** 행렬과 벡터의 곱의 (1)에 의해 $A(1, 1)$의 $k$번째 값은 $1 + (k - 1) = k$이므로 $A(1, 1) = b'$이다. 최소제곱의 (6)에 의해 최소제곱 해는 정확히 $Ax = b'$의 해이고, (1)의 증명에서 열이 일차독립이므로 최소제곱의 (4)에 의해 최소제곱 해는 하나뿐이다. 따라서 그것은 $(1, 1)$이고, $A(1, 1) - b'$은 영벡터이므로 노름은 $0$이다.

**(4)의 증명.** $A'$의 열은 $\mathbf{a}'_1 = (1, 1, 1)$, $\mathbf{a}'_2 = (2, 2, 2)$이다. 표준내적의 (5)와 (3)에 의해
$$
\begin{aligned}
A'^T A' &= \begin{pmatrix} 3 & 6 \\ 6 & 12 \end{pmatrix}, \\
A'^T b'' &= (9, 18)
\end{aligned}
$$
이다($1 + 2 + 6 = 9$, $2 + 4 + 12 = 18$). $x = (x_1, x_2)$에 대한 정규방정식은 $3x_1 + 6x_2 = 9$, $6x_1 + 12x_2 = 18$이고, 둘째 식은 첫째 식의 양변에 $2$를 곱한 것이며 첫째 식은 양변에 $3^{-1}$을 곱하면 $x_1 + 2x_2 = 3$과 같다. 따라서 최소제곱의 (1)에 의해 최소제곱 해 전체는 $x_1 + 2x_2 = 3$인 $x$ 전체, 곧 $x_2 = s$로 두면 $\{(3 - 2s, s) : s \in \mathbb{R}\}$이다. 같은 계산으로 $A'x$의 모든 값은 $x_1 + 2x_2$이므로 $\operatorname{Ker} T_{A'} = \{x : x_1 + 2x_2 = 0\} = \{s(-2, 1) : s \in \mathbb{R}\}$이고, $(3 - 2s, s) = (3, 0) + s(-2, 1)$이다. 최소제곱 해 $x$에서는 $x_1 + 2x_2 = 3$이므로 $A'x = (3, 3, 3)$이고, $b'' - A'x = (-2, -1, 3)$이어서 노름의 (8)에 의해 $\lVert A'x - b'' \rVert^2 = 4 + 1 + 9 = 14$이다. $\blacksquare$
:::

## 예시와 반례

:::example[평균은 상수 맞춤의 최소제곱 해]
세 측정값 $2$, $5$, $11$을 하나의 수 $c$로 가장 잘 나타내려면, 열이 $(1, 1, 1)$ 하나인 $3 \times 1$ 행렬 $A$와 $b = (2, 5, 11)$로 $Ax = b$의 최소제곱 해를 구합니다. $A^T A = \begin{pmatrix} 3 \end{pmatrix}$, $A^T b$는 $\mathbb{R}^1$에서 값이 $2 + 5 + 11 = 18$인 원소이므로 정규방정식은 $3c = 18$이고 $c = 6$입니다. 이것은 세 값의 평균 $\tfrac{18}{3}$입니다. 어긋남 $(2 - 6, 5 - 6, 11 - 6) = (-4, -1, 5)$의 성분의 합은 $0$이어서 열 $(1, 1, 1)$과 직교합니다.
:::

:::counterexample[열이 일차종속이면 해의 식을 쓸 수 없는 예]
(4)의 $A'$에서 $A'^T A' = \begin{pmatrix} 3 & 6 \\ 6 & 12 \end{pmatrix}$는 열이 일차종속이므로 [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (4)에 의해 가역이 아닙니다. 실제로 이 행렬에 $(-2, 1)$을 곱하면 $(0, 0)$입니다. 그래서 식 $(A'^T A')^{-1} A'^T b''$는 뜻이 없고, 최소제곱 해는 (4)처럼 무수히 많습니다.
:::

## 확인 질문

:::check[(1)에서 $Ax$의 성분의 합과 $b$의 성분의 합은 어떤 관계인가?]
같습니다. [[least-squares-solution|최소제곱 해와 정규방정식]]의 (1)에 의해 $b - Ax$는 열공간과 직교하므로 첫째 열 $(1, 1, 1, 1)$과의 내적, 곧 성분의 합이 $0$입니다. 실제로 $\tfrac{3}{2} + \tfrac{5}{2} + \tfrac{7}{2} + \tfrac{9}{2} = 12 = 1 + 3 + 4 + 4$입니다.
:::

:::check[(2)의 행렬에 $(1, 1, 1, 1)$을 곱하면 무엇이 나오는가?]
$(1, 1, 1, 1)$은 $A$의 첫째 열이므로 열공간에 속하고, 그 직교사영은 자기 자신입니다. 실제로 각 행의 성분의 합은 $7 + 4 + 1 - 2 = 10$, $4 + 3 + 2 + 1 = 10$, $1 + 2 + 3 + 4 = 10$, $-2 + 1 + 4 + 7 = 10$이어서, $\tfrac{1}{10}$을 곱하면 $(1, 1, 1, 1)$이 나옵니다.
:::
