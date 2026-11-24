---
title: 크라메르 공식
title_en: Cramer's Rule
aliases: [크라메르의 규칙, 크래머 공식, Cramer's rule]
kind: theorem
field: linear-algebra
msc: ["15A06", "15A15"]
level: undergrad
summary: n × n 행렬 A 와 b ∈ ℝⁿ 에 대하여 A 의 k 번째 열을 b 로 바꾼 행렬을 A_k(b) 라 하면, Ax = b 인 모든 x 가 x_k det A = det A_k(b) 를 만족한다. 따라서 det A ≠ 0 이면 Ax = b 의 해는 하나뿐이고 그 성분은 det A_k(b) 를 det A 로 나눈 것이며, det A = 0 이고 어떤 det A_k(b) 가 0 이 아니면 해가 없다.
requires: [real-number-arithmetic, real-function-space, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, matrix-product, invertible-matrix, determinant, determinant-and-invertibility, determinant-of-transpose, adjugate-formula]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5.1 Cofactor formula for the inverse matrix, Theorem 5.2 의 증명 뒤 문단과 Corollary 5.3 (Cramer's rule), p.93"
    checked: original
    note: "(2)는 출처 Corollary 5.3(p.93) 'For an invertible matrix A the entry number k of the solution of the equation Ax = b is given by the formula x_k = det B_k / det A, where the matrix B_k is obtained from A by replacing column number k of A by the vector b' 와 같다. 출처의 B_k 를 이 항목은 A_k(b) 로 쓴다(이 사이트에서 B 는 다른 행렬의 이름으로, 𝐛_k 는 행렬 B 의 열로 쓰인다). 출처는 Corollary 바로 앞에서 가역행렬 A 에 대해 Ax = b 의 해가 x = A⁻¹b = (1/det A)Cᵀb 하나뿐임을 떠올려 이것을 Theorem 5.2 의 따름정리로 얻고, Cᵀb 의 k 번째 성분이 det B_k 라는 것(k 번째 열 전개)은 적지 않는다. 이 항목은 수반행렬을 거치지 않고, 열에 대한 선형성(전치행렬의 행렬식의 (9)의 (a))과 같은 두 열(같은 항목의 (4))로 가역 가정 없는 (1)을 먼저 증명한 뒤 (2)를 얻는다. 그래서 n = 1 도 포함한다. (1)과 (3)은 출처에 명제로 없다(검색어 'Cramer' 1건, 'replacing column' 1건, 'det Bk' 로 찾은 Corollary 5.3 을 읽었고, 3장 5절 연습문제 5.1–5.7 과 7절 연습문제 7.1–7.5 를 처음부터 읽었다). 참고 '수반행렬과의 관계'는 출처가 Corollary 5.3 앞에서 쓰는 식 x = (1/det A)Cᵀb 와 같은 관찰이다. 반례 '행렬식이 모두 0 이고 해가 있는 예'와 '행렬식이 모두 0 이고 해가 없는 예'의 행렬(모든 성분이 1 인 3 × 3 행렬)은 출처 5장 3절 연습문제 3.9 b(p.134, 모든 성분이 1 인 n × n 행렬의 고윳값을 구하라)와 같은 대상이다(결론은 다르다)."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 예의 수치 재계산). 가역 가정 없는 꼴과 n = 1, det A = 0 의 경우를 진술에 두었다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이며 $b = (b_1, \dots, b_n) \in \mathbb{R}^n$이라 하자. $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $A$의 열이고, $Ax$는 [[matrix-vector-product|행렬과 벡터의 곱]]이며, $\det$는 [[determinant|행렬식]]이다.

**열을 바꾼 행렬.** $k \in \{1, \dots, n\}$이라 하자. 각 $(j, l) \in \{1, \dots, n\} \times \{1, \dots, n\}$에 실수($l \ne k$이면 $a_{j,l}$, $l = k$이면 $b_j$)가 하나씩 정해지므로 [[real-function-space|(G)]]와 [[matrix|행렬]]의 (2)에 의해 $(j, l)$ 성분이 그 수인 $n \times n$ 행렬이 하나 있다. 이 행렬을 $A_k(b)$로 쓴다. 곧 $A_k(b)$는 $A$의 $k$번째 열을 $b$로 바꾼 행렬이고, 그 $k$번째 열은 $b$, $l \ne k$인 $l$번째 열은 $\mathbf{a}_l$이다. $A_k(b)$의 아래첨자 $k$는 바꾼 열의 번호이고 성분의 첨자가 아니다.

1. (가역 가정 없는 꼴) $x = (x_1, \dots, x_n) \in \mathbb{R}^n$이고 $Ax = b$이면, 모든 $k \in \{1, \dots, n\}$에서
   $$
   x_k \det A = \det A_k(b)
   $$
   이다.
2. (크라메르 공식) $\det A \ne 0$이면 $Ax = b$인 $x \in \mathbb{R}^n$이 정확히 하나 있고, 그 성분은 모든 $k \in \{1, \dots, n\}$에서
   $$
   x_k = (\det A)^{-1} \det A_k(b)
   $$
   이다.
3. (해가 없는 경우) $\det A = 0$이고 어떤 $k \in \{1, \dots, n\}$에서 $\det A_k(b) \ne 0$이면 $Ax = b$인 $x \in \mathbb{R}^n$은 없다.
:::

:::english
Let $n$ be a natural number, $A$ an $n \times n$ matrix and $b = (b_1, \dots, b_n) \in \mathbb{R}^n$. Let $\mathbf{a}_1, \dots, \mathbf{a}_n$ be the columns of $A$, $Ax$ the product of a matrix and a vector, and $\det$ the determinant.

**The matrix with a column replaced.** Let $k \in \{1, \dots, n\}$. Since each $(j, l) \in \{1, \dots, n\} \times \{1, \dots, n\}$ determines a real number ($a_{j,l}$ if $l \ne k$, and $b_j$ if $l = k$), by (G) and (2) of the entry on matrices there is exactly one $n \times n$ matrix whose $(j, l)$ entry is that number. We denote it by $A_k(b)$. That is, $A_k(b)$ is the matrix obtained from $A$ by replacing its $k$-th column by $b$; its $k$-th column is $b$, and its $l$-th column for $l \ne k$ is $\mathbf{a}_l$. The subscript $k$ in $A_k(b)$ is the number of the replaced column, not an index of an entry.

1. (Form without invertibility) If $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ and $Ax = b$, then for every $k \in \{1, \dots, n\}$,
   $$
   x_k \det A = \det A_k(b).
   $$
2. (Cramer's rule) If $\det A \ne 0$, then there is exactly one $x \in \mathbb{R}^n$ with $Ax = b$, and its entries are, for every $k \in \{1, \dots, n\}$,
   $$
   x_k = (\det A)^{-1} \det A_k(b).
   $$
3. (When there is no solution) If $\det A = 0$ and $\det A_k(b) \ne 0$ for some $k \in \{1, \dots, n\}$, then there is no $x \in \mathbb{R}^n$ with $Ax = b$.
:::

## 직관

$Ax = b$는 $b$가 $A$의 열들의 일차결합 $x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$이라는 뜻입니다. 행렬식은 각 열에 대해 선형이므로, $A$의 $k$번째 열 자리에 이 일차결합을 넣은 $\det A_k(b)$는 그 자리에 $\mathbf{a}_1, \dots, \mathbf{a}_n$을 하나씩 넣은 행렬식들에 $x_1, \dots, x_n$을 곱해 더한 것입니다. 그런데 $k$번째 자리에 $\mathbf{a}_l$($l \ne k$)을 넣으면 같은 열이 두 번 나오므로 행렬식이 $0$이고, $\mathbf{a}_k$를 넣으면 $A$ 자신이 됩니다. 그래서 $x_k \det A$ 하나만 남습니다.

장바구니에 비유할 수 있습니다. $b$가 품목 $\mathbf{a}_1, \dots, \mathbf{a}_n$을 $x_1, \dots, x_n$개씩 담은 장바구니라면, $k$번째 품목의 개수 $x_k$를 알려 주는 저울이 $\det A_k(\,\cdot\,)$입니다. 이 저울은 담긴 것에 대해 선형이고(열에 대한 선형성), $k$번째가 아닌 품목에는 $0$을 가리키며(같은 두 열), $k$번째 품목 하나에는 $\det A$를 가리킵니다. 비유가 맞지 않는 곳도 있습니다. $\det A = 0$이면 이 저울은 모든 품목에 $0$을 가리켜 개수를 알려 주지 못하는데, 그래도 등식 (1)은 $0 = \det A_k(b)$로 성립합니다.

$n = 1$이면 $A = \begin{pmatrix} a \end{pmatrix}$, $A_1(b)$는 $(1, 1)$ 성분이 $b_1$인 $1 \times 1$ 행렬이고, (1)은 $x_1 a = b_1$이라는 식 자체입니다.

## 증명

:::idea
$b = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$을 $A_k(b)$의 $k$번째 열에 넣고 열에 대한 선형성으로 풀면, $l \ne k$인 항은 같은 두 열 때문에 $0$이고 $l = k$인 항만 $x_k \det A$로 남는다.
:::

:::hint
$i \in \{1, \dots, n\}$에 대하여 $A_k(\mathbf{a}_i)$는 어떤 행렬입니까? $i = k$일 때와 $i \ne k$일 때를 나눠 보세요.
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, [[determinant-of-transpose|전치행렬의 행렬식]]의 번호는 "전치의 (n)"으로 인용한다. 행렬 $A_k(v)$ ($v \in \mathbb{R}^n$)의 열은 정의에 의해 $k$번째가 $v$이고 나머지가 $A$의 것이다.

**(1)의 증명.** $Ax = b$라 하고 $k$를 잡는다. 행렬과 벡터의 곱의 정의에 의해 $b = Ax = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$이다. 따라서 $A_k(b)$의 $k$번째 열은 $x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$이다. 각 $i \in \{1, \dots, n\}$에서 $A_k(\mathbf{a}_i)$는 $k$번째 열을 뺀 모든 열에서 $A_k(b)$와 같고 $k$번째 열이 $\mathbf{a}_i$인 행렬이므로, 전치의 (9)의 (a)를 $p = n$, $\mathbf{v}_i = \mathbf{a}_i$, $B_i = A_k(\mathbf{a}_i)$로 쓰면 $\det A_k(b)$는 $i$번째 항이 $x_i \det A_k(\mathbf{a}_i)$인 길이 $n$인 실수의 열의 합이다.

- $i = k$이면 $A_k(\mathbf{a}_k)$의 모든 열이 $A$의 열과 같으므로 [[matrix|행렬]]의 (3)에 의해 $A_k(\mathbf{a}_k) = A$이고, 이 항은 $x_k \det A$이다.
- $i \ne k$이면 $A_k(\mathbf{a}_i)$의 $i$번째 열과 $k$번째 열이 둘 다 $\mathbf{a}_i$이므로 전치의 (4)에 의해 $\det A_k(\mathbf{a}_i) = 0$이고, (K9)에 의해 이 항은 $x_i \cdot 0 = 0$이다.

$\mathbb{R}$의 영벡터는 $0$이므로([[finite-sum-of-vectors|벡터의 유한 합]]의 "실수의 합") 같은 항목의 (H7)에 의해 이 합은 $k$번째 항 $x_k \det A$이다. ((H7)은 길이 $n = (n - 1) + 1$인 열에 쓴다.) 따라서 $x_k \det A = \det A_k(b)$이다.

**(2)의 증명.** $\det A \ne 0$이라 하자. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$는 가역이다. $x = A^{-1} b$로 두면 [[matrix-product|행렬의 곱]]의 (1), [[invertible-matrix|가역행렬과 역행렬]]의 (1), 행렬과 벡터의 곱의 (3)에 의해 $Ax = A(A^{-1} b) = (AA^{-1}) b = I_n b = b$이므로 해가 있다.

$Ax = b$인 $x$가 있으면 (1)에 의해 모든 $k$에서 $x_k \det A = \det A_k(b)$이다. 양변에 $(\det A)^{-1}$을 곱하면 (K1), (K2), (K8)의 (iii), (K4)에 의해 $x_k = (\det A)^{-1} \det A_k(b)$이다. 그래서 해 $x$와 $x'$이 있으면 모든 $k$에서 $x_k = x'_k$이고, [[real-function-space|실숫값 함수의 공간]]의 진술에 의해 $x = x'$이다. 곧 해는 하나뿐이고 그 성분은 위의 식과 같다.

**(3)의 증명.** $\det A = 0$이고 $\det A_k(b) \ne 0$이라 하자. $Ax = b$인 $x$가 있다면 (1)에 의해 $\det A_k(b) = x_k \cdot 0$이고 (K9)에 의해 이것은 $0$이다. 이것은 가정에 어긋나므로 그런 $x$는 없다. $\blacksquare$
:::

:::remark[수반행렬과의 관계]
$n \ge 2$이고 $\det A \ne 0$이면, [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (2)에 의해 해는 $x = A^{-1}b = \big((\det A)^{-1} \operatorname{adj} A\big) b$이고 행렬과 벡터의 곱의 (4)에 의해 이것은 $(\det A)^{-1} \big((\operatorname{adj} A) b\big)$입니다. 그 $k$번째 값을 (2)와 비교하면 $\det A_k(b)$는 $(\operatorname{adj} A) b$의 $k$번째 값과 같습니다. 이 항목의 증명은 수반행렬을 쓰지 않으므로 $n = 1$에도, $\det A = 0$인 (1)에도 그대로 쓰입니다.
:::

## 예시와 반례

:::example[크라메르 공식으로 푸는 2 × 2 연립방정식]
$A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$이고 $b = (7, 9)$이면 [[determinant|행렬식]]의 (4)에 의해 $\det A = 12 - 2 = 10 \ne 0$이고
$$
\begin{aligned}
\det A_1(b) &= \det \begin{pmatrix} 7 & 2 \\ 9 & 4 \end{pmatrix} \\
&= 28 - 18 = 10, \\
\det A_2(b) &= \det \begin{pmatrix} 3 & 7 \\ 1 & 9 \end{pmatrix} \\
&= 27 - 7 = 20
\end{aligned}
$$
입니다. (2)에 의해 해는 하나뿐이고 $x_1 = 10^{-1} \cdot 10 = 1$, $x_2 = 10^{-1} \cdot 20 = 2$입니다. 실제로 $1 \cdot (3, 1) + 2 \cdot (2, 4) = (7, 9)$입니다.
:::

:::example[크라메르 공식으로 푸는 3 × 3 연립방정식]
$$
A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & 0 \\ 0 & 1 & 1 \end{pmatrix}
$$
이고 $b = (4, -2, 1)$이라 합시다. 행렬식의 (4)의 $3 \times 3$ 식으로 $\det A = 2(3 - 0) - 1(0 - 1) + 0 = 7$이고
$$
\begin{aligned}
\det A_1(b) &= \det \begin{pmatrix} 4 & 0 & 1 \\ -2 & 3 & 0 \\ 1 & 1 & 1 \end{pmatrix} \\
&= 12 - 2 - 3 = 7, \\
\det A_2(b) &= \det \begin{pmatrix} 2 & 4 & 1 \\ 1 & -2 & 0 \\ 0 & 1 & 1 \end{pmatrix} \\
&= -4 - 3 + 0 = -7, \\
\det A_3(b) &= \det \begin{pmatrix} 2 & 0 & 4 \\ 1 & 3 & -2 \\ 0 & 1 & 1 \end{pmatrix} \\
&= 10 + 4 + 0 = 14
\end{aligned}
$$
입니다. (2)에 의해 해는 $x = (1, -1, 2)$ 하나뿐입니다. 실제로 $1 \cdot (2, 1, 0) + (-1)(0, 3, 1) + 2(1, 0, 1) = (4, -2, 1)$입니다.
:::

:::counterexample[행렬식이 모두 0 이고 해가 있는 예]
$A$를 모든 성분이 $1$인 $3 \times 3$ 행렬이라 하고 $b = (3, 3, 3)$이라 합시다. $A$의 세 열은 모두 $(1, 1, 1)$이므로 [[determinant-of-transpose|전치행렬의 행렬식]]의 (4)에 의해 $\det A = 0$입니다. 각 $k$에서 $A_k(b)$는 $k$가 아닌 두 열이 $(1, 1, 1)$로 같으므로 역시 $\det A_k(b) = 0$입니다. 그래서 (1)은 모든 $k$에서 $0 = 0$이 되어 해에 관해 아무것도 알려 주지 않습니다. 이 경우 해가 있습니다. $x = (1, 1, 1)$이면 $Ax = (1 + 1 + 1)(1, 1, 1) = (3, 3, 3)$이고, $x = (3, 0, 0)$도 해이므로 해가 하나뿐이지도 않습니다.
:::

:::counterexample[행렬식이 모두 0 이고 해가 없는 예]
같은 $A$와 $c = (1, 2, 3)$이라 합시다. 위와 같은 이유로 $\det A = 0$이고 모든 $k$에서 $\det A_k(c) = 0$이므로 (3)은 쓸 수 없습니다. 그런데 $x \in \mathbb{R}^3$이면 $Ax = x_1(1, 1, 1) + x_2(1, 1, 1) + x_3(1, 1, 1)$의 세 값은 모두 $x_1 + x_2 + x_3$으로 같습니다. $c$의 첫째 값 $1$과 둘째 값 $2$는 다르므로 $Ax = c$인 $x$는 없습니다. 행렬식이 모두 $0$이면 해가 있는지는 (1)–(3)만으로 정해지지 않습니다.
:::

## 확인 질문

:::check[$\det A \ne 0$이고 $b$가 영벡터이면 (2)가 주는 해는 무엇인가?]
영벡터입니다. $A_k(b)$는 $k$번째 열이 영벡터이므로 [[determinant-of-transpose|전치행렬의 행렬식]]의 (5)의 (a)에 의해 $\det A_k(b) = 0$이고, (2)에 의해 모든 $k$에서 $x_k = (\det A)^{-1} \cdot 0 = 0$입니다.
:::

:::check[$\det A \ne 0$이고 $b$가 $A$의 $l$번째 열 $\mathbf{a}_l$이면 해는 무엇인가?]
표준기저의 $e_l$입니다. $A_l(\mathbf{a}_l) = A$이므로 $x_l = (\det A)^{-1} \det A = 1$이고, $k \ne l$이면 $A_k(\mathbf{a}_l)$의 $k$번째 열과 $l$번째 열이 둘 다 $\mathbf{a}_l$이므로 [[determinant-of-transpose|전치행렬의 행렬식]]의 (4)에 의해 $\det A_k(\mathbf{a}_l) = 0$이고 $x_k = 0$입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)의 $Ae_l = \mathbf{a}_l$과도 맞습니다.
:::
