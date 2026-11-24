---
title: 닮은 행렬의 행렬식과 대각합
title_en: Determinant and Trace of Similar Matrices
aliases: [닮음 불변량, 닮은 행렬의 불변량, similarity invariants, determinant and trace of similar matrices]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 닮은 두 n × n 행렬은 행렬식과 대각합이 같고, 가역인지도 같다. A 와 B 가 닮았으면 실수 c 마다 A − cIₙ 과 B − cIₙ 도 닮았고, 닮은 두 1 × 1 행렬은 같은 행렬이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, matrix, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, change-of-basis-and-similarity, determinant, determinant-and-invertibility, determinant-of-product, trace, trace-of-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 3장 3절 연습문제 3.6, p.85; 2장 8절 연습문제 8.5, p.73; 4장 1절, 1.3 Finding characteristic polynomial and eigenvalues of an abstract operator, p.101; 5장 6절 연습문제 6.7, pp.150–151
    checked: original
    note: "(1)의 행렬식 쪽은 출처 3장 3절의 연습문제 3.6(p.85)이 증명하라는 것이고, 대각합 쪽은 2장 8절의 연습문제 8.5(p.73)가 증명하라는 것이다. 출처는 4장 1.3(p.101)에서 닮음을 A = SBS⁻¹ 로 적고, det A = det S det B det S⁻¹ = det B 로 닮은 행렬의 행렬식이 같음을 보인 뒤, A − λI = S(B − λI)S⁻¹ 를 계산해 A − λI 와 B − λI 가 닮았다고 적는다. (3)은 이 계산과 같은 것을 행렬 곱의 성질의 번호로 적은 것이다. 이 사이트의 닮음은 A = Q⁻¹BQ 로 적고(같은 관계이다. S = Q⁻¹), 출처는 5장 6절 연습문제 6.7(pp.150–151)의 귀띔(p.151)에서도 닮은 행렬의 대각합, 행렬식, 고윳값이 같다고 적는다. (1)은 이 사이트의 행렬식의 곱의 성질과 대각합의 순서 바꾸기로 증명했고, (2)와 (4)의 증명은 이 사이트가 썼다. 확인 질문 '$3 \\times 3$ 행렬 $A$의 대각합이 $5$이고 $Q$가 가역인 $3 \\times 3$ 행렬이면 $Q^{-1}AQ - 2I_3$의 대각합은 무엇인가?'가 (3)으로 Q⁻¹AQ − 2I₃ 를 A − 2I₃ 와 닮은 행렬로 보는 것은 출처 4장 1.3(p.101)의 A − λI = S(B − λI)S⁻¹ 계산과 같은 발상이다. 확인 질문 '$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$과 $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$는 닮았는가?' 는 출처 2장 8절의 연습문제 8.6(p.73)과 같은 발상이다(대각합이 달라 닮지 않음을 보인다)."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 어긋난 인용 번호 1건, 경계 경우에서 거짓이거나 넓던 설명 문장 3건, 뒤 단원을 예고하던 문장 1건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$, $B$가 $n \times n$ [[matrix|행렬]]이라 하자. 닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]에서 정한 것이다. 곧 $A$가 $B$와 닮은 것은 정확히 $A = Q^{-1}BQ$인 가역 $n \times n$ 행렬 $Q$가 있을 때이고, 그 항목의 (4)에 의해 이때 $B$도 $A$와 닮았으므로 $A$와 $B$가 닮았다고 한다. $\det$는 [[determinant|행렬식]], $\operatorname{tr}$은 [[trace|대각합]]이다.

1. $A$와 $B$가 닮았으면 $\det A = \det B$이고 $\operatorname{tr} A = \operatorname{tr} B$이다.
2. $A$와 $B$가 닮았으면, $A$가 [[invertible-matrix|가역]]인 것은 정확히 $B$가 가역일 때이다.
3. $Q$가 가역인 $n \times n$ 행렬이고 $A = Q^{-1}BQ$이며 $c$가 실수이면 $A - cI_n = Q^{-1}(B - cI_n)Q$이다. 따라서 $A$와 $B$가 닮았으면 모든 실수 $c$에서 $A - cI_n$과 $B - cI_n$도 닮았고 $\det(A - cI_n) = \det(B - cI_n)$이다.
4. $n = 1$이고 $A$와 $B$가 닮았으면 $A = B$이다.
:::

:::english
Let $n$ be a natural number and let $A$, $B$ be $n \times n$ matrices. Similarity is as defined in the entry on change of basis and similar matrices: $A$ is similar to $B$ exactly when there is an invertible $n \times n$ matrix $Q$ with $A = Q^{-1}BQ$, and by item (4) of that entry $B$ is then similar to $A$, so we say that $A$ and $B$ are similar. $\det$ is the determinant and $\operatorname{tr}$ is the trace.

1. If $A$ and $B$ are similar, then $\det A = \det B$ and $\operatorname{tr} A = \operatorname{tr} B$.
2. If $A$ and $B$ are similar, then $A$ is invertible exactly when $B$ is invertible.
3. If $Q$ is an invertible $n \times n$ matrix, $A = Q^{-1}BQ$ and $c$ is a real number, then $A - cI_n = Q^{-1}(B - cI_n)Q$. Hence if $A$ and $B$ are similar, then for every real number $c$ the matrices $A - cI_n$ and $B - cI_n$ are also similar and $\det(A - cI_n) = \det(B - cI_n)$.
4. If $n = 1$ and $A$ and $B$ are similar, then $A = B$.
:::

## 직관

[[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (3)에 의해, 같은 선형사상 $T : V \to V$를 두 기저로 적은 행렬은 닮았습니다. 닮은 행렬은 같은 대상을 다른 좌표로 적은 것이라 할 수 있고, 행렬식과 대각합은 좌표를 바꾸어도 바뀌지 않는 수라는 것이 (1)입니다. 한 건물을 서로 다른 방향에서 찍은 사진은 서로 다르지만 건물의 층수는 어느 사진에서 세어도 같은 것과 비슷합니다. 비유와 다른 점은, 닮음은 사진이나 기저를 말하지 않고 $A = Q^{-1}BQ$라는 행렬의 등식으로만 정의된다는 것입니다.

(1)의 증명은 두 가지 서로 다른 성질에 기댑니다. 행렬식 쪽은 곱의 행렬식이 행렬식의 곱이라는 것이고, 대각합 쪽은 $\operatorname{tr}(AB) = \operatorname{tr}(BA)$입니다. 대각합은 곱을 곱으로 보내지 않을 수 있지만, 곱하는 순서를 바꾸어도 대각합이 같다는 것만으로 충분합니다. (3)은 $Q^{-1}$과 $Q$ 사이에 끼운 $cI_n$이 그대로 $cI_n$으로 나오기 때문에 성립합니다.

(4)는 $1 \times 1$ 행렬에서는 행렬식이 성분 그 자체이기 때문입니다. $n \ge 2$이면 (1)의 거꾸로, 곧 행렬식과 대각합이 같으면 닮았다는 것은 이 항목에서 주장하지 않습니다.

## 증명

:::idea
$A = Q^{-1}BQ$에 행렬식과 대각합의 "가역행렬로 끼우기" 성질을 쓴다. 가역성은 행렬식이 $0$이 아닌 것과 같으므로 (1)에서 나온다.
:::

:::hint
(3)은 행렬 곱의 분배법칙과 스칼라의 성질로 $Q^{-1}(B - cI_n)Q$를 풀어 쓰면 된다. $Q^{-1}(cI_n)Q$는 무엇인가?
:::

:::proof
아래에서 (B2), (B9)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것을 [[matrix|행렬]]의 (1)의 벡터공간 $M_{n \times n}$에 쓴 것이다. 곧 $X - Y = X + (-Y)$이고 $-(cY) = (-c)Y$이다.

**(1)의 증명.** $A$와 $B$가 닮았으므로 $A = Q^{-1}BQ$인 가역 $n \times n$ 행렬 $Q$가 있다. [[determinant-of-product|곱의 행렬식]]의 (3)에 의해 $\det A = \det(Q^{-1}BQ) = \det B$이고, [[trace-of-product|곱의 대각합]]의 (3)에 의해 $\operatorname{tr} A = \operatorname{tr}(Q^{-1}BQ) = \operatorname{tr} B$이다.

**(2)의 증명.** [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$가 가역인 것은 정확히 $\det A \ne 0$일 때이고, $B$가 가역인 것은 정확히 $\det B \ne 0$일 때이다. (1)에 의해 $\det A = \det B$이므로 두 조건은 같다.

**(3)의 증명.** [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $Q^{-1}$은 $Q^{-1}Q = I_n$인 $n \times n$ 행렬이다. (B2)와 (B9)에 의해 $B - cI_n = B + (-c)I_n$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (2), (3), (4)에 의해

$$
\begin{aligned}
&Q^{-1}(B - cI_n) \\
&= Q^{-1}B + Q^{-1}((-c)I_n) \\
&= Q^{-1}B + (-c)(Q^{-1}I_n) \\
&= Q^{-1}B + (-c)Q^{-1}
\end{aligned}
$$

이고, 다시 같은 (2), (3)과 $Q^{-1}Q = I_n$에 의해

$$
\begin{aligned}
&(Q^{-1}B + (-c)Q^{-1})Q \\
&= (Q^{-1}B)Q + ((-c)Q^{-1})Q \\
&= Q^{-1}BQ + (-c)(Q^{-1}Q) \\
&= A + (-c)I_n
\end{aligned}
$$

이다. 괄호 없이 쓴 세 행렬의 곱은 행렬 곱의 성질의 (1)에 의해 어떻게 묶어도 같으므로 $Q^{-1}(B - cI_n)Q$는 이 행렬이고, (B9)와 (B2)에 의해 $A + (-c)I_n = A - cI_n$이다. 따라서 $A - cI_n = Q^{-1}(B - cI_n)Q$이다.

$A$와 $B$가 닮았으면 $A = Q^{-1}BQ$인 가역 $Q$가 있고, 위 등식에 의해 같은 $Q$로 $A - cI_n = Q^{-1}(B - cI_n)Q$이므로 닮음의 정의에 의해 $A - cI_n$과 $B - cI_n$은 닮았다. (1)을 이 두 행렬에 쓰면 $\det(A - cI_n) = \det(B - cI_n)$이다.

**(4)의 증명.** $n = 1$이면 [[determinant|행렬식]]의 (2)에 의해 $\det A = a_{1,1}$이고 $\det B = b_{1,1}$이다. (1)에 의해 $a_{1,1} = b_{1,1}$이고, $1 \times 1$ 행렬의 성분은 이 하나뿐이므로 [[matrix|행렬]]의 (2)에 의해 $A = B$이다. $\blacksquare$
:::

## 예시와 반례

:::example[가역행렬과 닮을 수 없는 2 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
$$

이면 [[determinant|행렬식]]의 (4)에 의해 $\det A = 1 \cdot 4 - 2 \cdot 2 = 0$이므로, [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$는 가역이 아닙니다. (2)에 의해 $A$와 닮은 $2 \times 2$ 행렬은 모두 가역이 아닙니다. 특히 $A$는 가역인 $I_2$와 닮지 않았습니다.
:::

:::counterexample[양쪽에 서로 다른 가역행렬을 곱한 예]
(1)은 같은 $Q$의 역행렬과 $Q$로 양쪽을 끼운 $Q^{-1}BQ$에 관한 것입니다. 양쪽에 서로 다른 가역행렬을 곱하면 행렬식과 대각합이 달라질 수 있습니다. $Q_1 = I_2$, $Q_2 = 2I_2$라 합시다. [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 $Q_1$은 가역이고 $Q_1^{-1} = I_2$입니다. [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(2I_2) = 2^2 = 4 \ne 0$이므로 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $Q_2$도 가역입니다. $B = I_2$이면 [[matrix-product-properties|행렬 곱의 성질]]의 (3), (4)에 의해 $Q_1^{-1}BQ_2 = I_2 I_2 (2I_2) = 2I_2$입니다. 따라서 $\det(Q_1^{-1}BQ_2) = 4$이고 $\operatorname{tr}(2I_2) = 2 \cdot 2 = 4$([[trace|대각합]]의 (4))이지만, $\det I_2 = 1$이고 $\operatorname{tr} I_2 = 2$입니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$의 대각합이 $5$이고 $Q$가 가역인 $3 \times 3$ 행렬이면 $Q^{-1}AQ - 2I_3$의 대각합은 무엇인가?]
(3)에 의해 $Q^{-1}AQ - 2I_3 = Q^{-1}(A - 2I_3)Q$이므로 이 행렬은 $A - 2I_3$과 닮았고, (1)에 의해 대각합은 $\operatorname{tr}(A - 2I_3)$입니다. [[trace|대각합]]의 (2)와 (4)에 의해 이것은 $\operatorname{tr} A - \operatorname{tr}(2I_3) = 5 - 3 \cdot 2 = -1$입니다.
:::

:::check[$\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$과 $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$는 닮았는가?]
닮지 않았습니다. 대각합이 $2 + 3 = 5$와 $2 + 2 = 4$로 다르므로, (1)에 의해 두 행렬은 닮을 수 없습니다. 행렬식은 $6$과 $4$로 이것도 다릅니다.
:::
