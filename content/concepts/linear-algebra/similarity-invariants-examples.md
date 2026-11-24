---
title: 행렬식과 대각합이 같지만 닮지 않은 행렬의 예
title_en: Examples of Non-Similar Matrices with the Same Determinant and Trace
aliases: [닮음 불변량의 예, 닮지 않은 행렬의 예, non-similar matrices with equal determinant and trace]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 스칼라 행렬 cIₙ 과 닮은 행렬은 cIₙ 자신뿐이다. 그래서 I₂ 와 N = (1 1; 0 1) 은 행렬식과 대각합이 같지만 닮지 않았다. 행렬식만 같거나 대각합만 같은 예와, 실제로 닮은 두 행렬에서 두 값을 확인하는 예를 함께 든다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, matrix, matrix-product, matrix-product-properties, invertible-matrix, change-of-basis-and-similarity, eigenvalue-and-eigenvector, eigenvalue-examples, determinant, trace, similarity-invariants]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2절, 2.7.3 A non-diagonalizable matrix, pp.113–114 과 그 각주 5, p.114; 2장 8절 연습문제 8.6, p.73
    checked: original
    note: "(2)의 N 은 출처 4장 2.7.3(p.113)의 대각화할 수 없는 행렬과 같은 행렬이다. 출처는 그 소절의 각주 5(p.114)에서 '어떤 기저에서 행렬이 I 인 선형변환은 항등변환뿐'이라 적고, 그래서 N 이 대각화될 수 없다고 결론짓는다. (1)은 이 각주와 같은 발상을 행렬의 닮음으로 적은 것이다. 출처는 N 을 고윳값과 대각화로 다루고, 이 항목은 같은 행렬을 행렬식과 대각합이 같은데도 닮지 않은 예로 쓴다. (3)과 (4)에서 대각합이나 행렬식이 달라 닮지 않음을 보이는 것은 출처 2장 8절의 연습문제 8.6(p.73)과 같은 발상이다. N 은 선형대수 강의의 고윳값이 없는 행렬과 대각화할 수 없는 행렬의 예 항목 (2)에도 나오고, (1)의 c = 1 인 경우는 기저 변환과 닮은 행렬 항목의 확인 질문 '$n \\times n$ 행렬 $A$가 $I_n$과 닮았으면 $A$는 무엇인가?' 와 같은 내용이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 어긋난 인용 번호 1건, 경계 경우에서 거짓이거나 넓던 설명 문장 3건, 뒤 단원을 예고하던 문장 1건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]에서, $\det$는 [[determinant|행렬식]]에서, $\operatorname{tr}$은 [[trace|대각합]]에서 정한 것이다.

1. (스칼라 행렬) $n$이 자연수이고 $c$가 실수이며 $Q$가 [[invertible-matrix|가역]]인 $n \times n$ 행렬이면 $Q^{-1}(cI_n)Q = cI_n$이다. 따라서 $n \times n$ 행렬 $A$가 $cI_n$과 닮은 것은 정확히 $A = cI_n$일 때이다.
2. $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 하면 $\det N = \det I_2 = 1$이고 $\operatorname{tr} N = \operatorname{tr} I_2 = 2$이지만, $N$과 $I_2$는 닮지 않았다.
3. (행렬식만 같은 예) $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$과 $\begin{pmatrix} 1 & 0 \\ 0 & 6 \end{pmatrix}$은 행렬식이 둘 다 $6$이지만 대각합이 $5$와 $7$이고, 닮지 않았다.
4. (대각합만 같은 예) $I_2$와 $\begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}$은 대각합이 둘 다 $2$이지만 행렬식이 $1$과 $0$이고, 닮지 않았다.
5. (닮은 두 행렬) $B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $Q = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 하면 $Q$는 가역이고 $Q^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$이며 $Q^{-1}BQ = \begin{pmatrix} -2 & -4 \\ 3 & 7 \end{pmatrix}$이다. 이 행렬과 $B$는 닮았고, 행렬식은 둘 다 $-2$, 대각합은 둘 다 $5$이다.
:::

:::english
Similarity, $\det$ and $\operatorname{tr}$ are as defined in the entries on change of basis and similar matrices, on the determinant, and on the trace.

1. (Scalar matrices) If $n$ is a natural number, $c$ is a real number and $Q$ is an invertible $n \times n$ matrix, then $Q^{-1}(cI_n)Q = cI_n$. Hence an $n \times n$ matrix $A$ is similar to $cI_n$ exactly when $A = cI_n$.
2. Let $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Then $\det N = \det I_2 = 1$ and $\operatorname{tr} N = \operatorname{tr} I_2 = 2$, but $N$ and $I_2$ are not similar.
3. (Same determinant only) $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ and $\begin{pmatrix} 1 & 0 \\ 0 & 6 \end{pmatrix}$ both have determinant $6$, but their traces are $5$ and $7$, and they are not similar.
4. (Same trace only) $I_2$ and $\begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}$ both have trace $2$, but their determinants are $1$ and $0$, and they are not similar.
5. (Two similar matrices) Let $B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $Q = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Then $Q$ is invertible, $Q^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$, and $Q^{-1}BQ = \begin{pmatrix} -2 & -4 \\ 3 & 7 \end{pmatrix}$. This matrix and $B$ are similar, and both have determinant $-2$ and trace $5$.
:::

## 직관

[[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)은 닮은 두 행렬의 행렬식과 대각합이 같다는 것입니다. 이 항목은 그 거꾸로가 $2 \times 2$에서 이미 성립하지 않는다는 것을 보입니다. 행렬식과 대각합은 행렬마다 수 두 개를 정할 뿐이고, $n \ge 2$이면 닮음은 그 두 수만으로 정해지지 않습니다. 두 사람의 키와 몸무게가 같아도 같은 사람이 아닌 것과 비슷합니다. 비유와 다른 점은, 닮은 행렬은 같은 행렬이 아니어도 된다는 것입니다((5)). 닮음은 "같다"보다 넓은 관계입니다.

(1)은 스칼라 행렬 $cI_n$이 어느 가역행렬로 끼워도 바뀌지 않는다는 것입니다. 그래서 $cI_n$과 닮은 행렬은 자기 자신 하나뿐이고, 행렬식과 대각합이 $cI_n$과 같더라도 $cI_n$이 아닌 행렬은 $cI_n$과 닮지 않습니다. $N$이 그런 행렬입니다. $1 \times 1$ 행렬에서는 이런 예가 없습니다. $1 \times 1$ 행렬의 행렬식은 하나뿐인 성분이므로([[determinant|행렬식]]의 (2)), 행렬식이 같은 두 $1 \times 1$ 행렬은 같은 행렬이기 때문입니다.

(3)과 (4)는 거꾸로 행렬식과 대각합 가운데 하나만 달라도 닮지 않았다고 판정할 수 있다는 것을 보입니다.

## 증명

:::idea
(1)은 행렬 곱의 성질로 $Q^{-1}(cI_n)Q$를 계산한다. (2)는 (1)을, (3)과 (4)는 닮은 행렬의 행렬식과 대각합의 (1)을 쓴다. (5)는 곱을 성분으로 계산한다.
:::

:::proof
행렬식의 값은 [[determinant|행렬식]]의 (1)의 (iii)과 (4)의 $2 \times 2$ 식 $\det A = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$로, 대각합은 [[trace|대각합]]의 정의로 계산한다. 두 행렬이 같은지는 [[matrix|행렬]]의 (2)로, 곱은 [[matrix-product|행렬의 곱]]의 (2)로 계산한다.

**(1)의 증명.** [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $Q^{-1}$은 $Q^{-1}Q = I_n$인 $n \times n$ 행렬이다. [[matrix-product-properties|행렬 곱의 성질]]의 (3)과 (4)에 의해 $Q^{-1}(cI_n) = c(Q^{-1}I_n) = cQ^{-1}$이고, 다시 (3)에 의해 $(cQ^{-1})Q = c(Q^{-1}Q) = cI_n$이다. 따라서 $Q^{-1}(cI_n)Q = cI_n$이다.

$A$가 $cI_n$과 닮았으면 $A = Q^{-1}(cI_n)Q$인 가역 $Q$가 있고, 방금 보인 것에 의해 $A = cI_n$이다. 거꾸로 $A = cI_n$이면 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (4)(닮음은 동치관계이므로 반사적이다)에 의해 $A$는 $cI_n$과 닮았다.

**(2)의 증명.** $\det N = 1 \cdot 1 - 0 \cdot 1 = 1$이고 $\det I_2 = 1$이다. $\operatorname{tr} N = 1 + 1 = 2$이고 대각합의 (4)에 의해 $\operatorname{tr} I_2 = 2$이다. $N$의 $(1, 2)$ 성분은 $1$이고 $I_2$의 $(1, 2)$ 성분은 $0$이므로 $N \ne I_2$이다. (1)을 $n = 2$, $c = 1$에 쓰면 $I_2$와 닮은 행렬은 $1 \cdot I_2 = I_2$뿐이므로 $N$은 $I_2$와 닮지 않았다.

**(3)의 증명.** 두 행렬의 행렬식은 $2 \cdot 3 - 0 \cdot 0 = 6$과 $1 \cdot 6 - 0 \cdot 0 = 6$이고, 대각합은 $2 + 3 = 5$와 $1 + 6 = 7$이다. $5 \ne 7$이므로 [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)의 대우에 의해 두 행렬은 닮지 않았다.

**(4)의 증명.** 대각합은 $\operatorname{tr} I_2 = 2$와 $2 + 0 = 2$이고, 행렬식은 $\det I_2 = 1$과 $2 \cdot 0 - 0 \cdot 0 = 0$이다. $1 \ne 0$이므로 닮은 행렬의 행렬식과 대각합의 (1)의 대우에 의해 두 행렬은 닮지 않았다.

**(5)의 증명.** $K = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$이라 하면, 성분을 계산해 $QK$의 $(1, 1)$, $(1, 2)$, $(2, 1)$, $(2, 2)$ 성분은 $1 \cdot 1 + 1 \cdot 0 = 1$, $1 \cdot (-1) + 1 \cdot 1 = 0$, $0 \cdot 1 + 1 \cdot 0 = 0$, $0 \cdot (-1) + 1 \cdot 1 = 1$이고 $KQ$의 같은 성분은 $1 \cdot 1 + (-1) \cdot 0 = 1$, $1 \cdot 1 + (-1) \cdot 1 = 0$, $0 \cdot 1 + 1 \cdot 0 = 0$, $0 \cdot 1 + 1 \cdot 1 = 1$이므로 $QK = KQ = I_2$이다. 따라서 $K$는 $Q$의 왼쪽 역이자 오른쪽 역이므로 [[invertible-matrix|가역행렬과 역행렬]]의 정의와 그 항목의 (1)에 의해 $Q$는 가역이고 $Q^{-1} = K$이다. 다음으로 성분을 계산하면 $(BQ)_{1,1} = 1 \cdot 1 + 2 \cdot 0 = 1$, $(BQ)_{1,2} = 1 \cdot 1 + 2 \cdot 1 = 3$, $(BQ)_{2,1} = 3 \cdot 1 + 4 \cdot 0 = 3$, $(BQ)_{2,2} = 3 \cdot 1 + 4 \cdot 1 = 7$이므로 $BQ = \begin{pmatrix} 1 & 3 \\ 3 & 7 \end{pmatrix}$이고, $(K(BQ))_{1,1} = 1 \cdot 1 + (-1) \cdot 3 = -2$, $(K(BQ))_{1,2} = 1 \cdot 3 + (-1) \cdot 7 = -4$, $(K(BQ))_{2,1} = 0 \cdot 1 + 1 \cdot 3 = 3$, $(K(BQ))_{2,2} = 0 \cdot 3 + 1 \cdot 7 = 7$이므로 $K(BQ) = \begin{pmatrix} -2 & -4 \\ 3 & 7 \end{pmatrix}$이다. 행렬 곱의 성질의 (1)에 의해 $Q^{-1}BQ = K(BQ)$이다. 닮음의 정의에 의해 이 행렬은 $B$와 닮았다. 행렬식은 $\det B = 1 \cdot 4 - 3 \cdot 2 = -2$와 $(-2) \cdot 7 - 3 \cdot (-4) = -14 + 12 = -2$이고, 대각합은 $1 + 4 = 5$와 $-2 + 7 = 5$이다. 이것은 닮은 행렬의 행렬식과 대각합의 (1)과 맞는다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 에서 같은 발상]
$$
M = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

은 [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해 $\det M = 1 \cdot (1 \cdot 1 - 0 \cdot 0) - 0 + 0 = 1$이고, 대각합은 $(1 + 1) + 1 = 3$입니다. $I_3$도 행렬식이 $1$, 대각합이 $3$이지만 $M \ne I_3$이므로 (1)에 의해 $M$은 $I_3$과 닮지 않았습니다.
:::

:::example[고윳값까지 같은 I₂ 와 N]
[[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)에 의해 $N$의 고윳값은 $1$뿐입니다. $I_2$도 고윳값이 $1$뿐입니다. 영벡터가 아닌 모든 $v$에서 $I_2 v = v = 1v$이므로 $1$은 고윳값이고, 실수 $\lambda$에 대하여 $I_2 v = \lambda v$이고 $v \ne 0$이면 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B11)에 의해 $(1 - \lambda)v = v - \lambda v = 0$이고 (B6)에 의해 $1 - \lambda = 0$, 곧 $\lambda = 1$이기 때문입니다([[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의). 행렬식, 대각합, 고윳값이 모두 같아도 (2)대로 두 행렬은 닮지 않았습니다.
:::

## 확인 질문

:::check[$\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$과 닮은 $2 \times 2$ 행렬은 무엇인가?]
이 행렬은 $3I_2$이므로 (1)에 의해 $3I_2$와 닮은 $2 \times 2$ 행렬은 $3I_2$ 자신뿐입니다.
:::

:::check[$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$과 $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$은 행렬식이 둘 다 $-1$, 대각합이 둘 다 $0$이다. 두 행렬은 닮았는가?]
닮았습니다. 행렬식과 대각합이 같다는 것만으로는 알 수 없으므로 $Q$를 찾습니다. $Q = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $K = 2^{-1}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$이라 하면 $QQ = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = 2I_2$이므로 [[matrix-product-properties|행렬 곱의 성질]]의 (3)에 의해 $QK = PQ = 2^{-1}(2I_2) = I_2$이고 $Q^{-1} = K$입니다. $C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이라 하면 $CQ = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$이고 $Q(CQ) = \begin{pmatrix} 2 & 0 \\ 0 & -2 \end{pmatrix}$이므로 $Q^{-1}CQ = 2^{-1}\begin{pmatrix} 2 & 0 \\ 0 & -2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$입니다. 따라서 두 행렬은 닮았습니다.
:::
