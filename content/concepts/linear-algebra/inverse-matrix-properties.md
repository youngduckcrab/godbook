---
title: 역행렬의 성질
title_en: Properties of the Inverse Matrix
aliases: [곱의 역행렬, 전치행렬의 역행렬, 역행렬의 역행렬, inverse of a product, inverse of the transpose]
kind: proposition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: 단위행렬은 자기 자신이 역행렬이고, 가역행렬의 역행렬과 전치행렬도 가역이며, 가역행렬의 곱의 역행렬은 역행렬을 순서를 바꾸어 곱한 것이다. A 와 AB 가 가역이면 B 도 가역이다.
requires: [real-number-arithmetic, vector-space, matrix, matrix-product, matrix-product-properties, transpose, invertible-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 6.2절의 예 1, p.25; 6.2.1절 Properties of the inverse transformation 의 Theorem 6.3, Remark 6.4, Theorem 6.5, pp.26–27; 연습문제 6.5, 6.7, p.29
    checked: original
    note: "출처의 예 1(p.25)은 항등사상(행렬)이 가역이고 I⁻¹ = I 라는 것이다. Theorem 6.3(p.26)은 A, B 가 가역이고 곱 AB 가 정의되면 AB 가 가역이고 (AB)⁻¹ = B⁻¹A⁻¹ 이라는 것이고, 증명은 (AB)(B⁻¹A⁻¹) 과 (B⁻¹A⁻¹)(AB) 를 직접 계산한다. Theorem 6.5(p.26)는 (Aᵀ)⁻¹ = (A⁻¹)ᵀ 이고 증명은 (AB)ᵀ = BᵀAᵀ 와 Iᵀ = I 를 쓴다. 이 항목의 (3), (4)는 같은 경로이고, 결합법칙과 단위행렬 법칙을 쓰는 자리와 행렬의 크기를 밝혔다. 출처는 p.27 에서 A 가 가역이면 A⁻¹ 도 가역이고 (A⁻¹)⁻¹ = A 라고 적는데, 그 자리에 증명은 없다. 이 항목의 (2)가 그 증명이다. 출처의 Remark 6.4(p.26)는 AB 가 가역이어도 A, B 가 가역이라는 보장은 없지만 한 인자와 AB 가 가역이면 다른 인자도 가역이라고 적고 증명을 연습문제 6.7(p.29)로 돌린다. 이 항목의 (5)는 A 와 AB 가 가역인 경우의 증명이다. 반례(곱이 1 × 1 인 경우)는 출처 연습문제 6.5(p.29)의 덧붙인 말, 곧 AB 가 1 × 1 행렬이면 이런 A, B 를 쉽게 만들 수 있다는 것과 같은 발상이고, 가역이 아님을 왼쪽 역이나 오른쪽 역이 둘 이상인 것으로 보였다. 예시와 확인 질문은 출처의 6절 연습문제 6.1–6.13 을 다시 읽고 겹치지 않게 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$, $r$이 자연수라 하자. 가역, 역행렬 $A^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]에서, 전치행렬 $A^T$는 [[transpose|전치행렬]]에서 정한 것이다.

1. $I_n$은 가역이고 $I_n^{-1} = I_n$이다.
2. $A$가 가역인 $m \times n$ 행렬이면 $n \times m$ 행렬 $A^{-1}$도 가역이고 $(A^{-1})^{-1} = A$이다.
3. $A$가 가역인 $m \times n$ 행렬이고 $B$가 가역인 $n \times r$ 행렬이면 $m \times r$ 행렬 $AB$도 가역이고 $(AB)^{-1} = B^{-1}A^{-1}$이다.
4. $A$가 가역인 $m \times n$ 행렬이면 $n \times m$ 행렬 $A^T$도 가역이고 $(A^T)^{-1} = (A^{-1})^T$이다.
5. $A$가 $m \times n$ 행렬이고 $B$가 $n \times r$ 행렬이며 $A$와 $AB$가 가역이면 $B$도 가역이고 $B^{-1} = (AB)^{-1}A$이다.
:::

:::english
Let $m$, $n$, $r$ be natural numbers. Invertibility and the inverse matrix $A^{-1}$ are as defined in the entry on invertible matrices, and the transpose $A^T$ as in the entry on the transpose.

1. $I_n$ is invertible and $I_n^{-1} = I_n$.
2. If $A$ is an invertible $m \times n$ matrix, then the $n \times m$ matrix $A^{-1}$ is invertible and $(A^{-1})^{-1} = A$.
3. If $A$ is an invertible $m \times n$ matrix and $B$ is an invertible $n \times r$ matrix, then the $m \times r$ matrix $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$.
4. If $A$ is an invertible $m \times n$ matrix, then the $n \times m$ matrix $A^T$ is invertible and $(A^T)^{-1} = (A^{-1})^T$.
5. If $A$ is an $m \times n$ matrix, $B$ is an $n \times r$ matrix, and $A$ and $AB$ are invertible, then $B$ is invertible and $B^{-1} = (AB)^{-1}A$.
:::

## 직관

역행렬은 작업을 되돌리는 행렬입니다. 양말을 신고 신발을 신었다면, 되돌릴 때는 신발을 먼저 벗고 양말을 나중에 벗습니다. $AB$는 "먼저 $B$, 그다음 $A$"이므로 되돌리는 순서는 "먼저 $A^{-1}$, 그다음 $B^{-1}$", 곧 $B^{-1}A^{-1}$입니다. 이것이 (3)이고, 비유는 순서가 뒤집힌다는 점에서 정의와 맞습니다. 비유가 맞지 않는 곳은, 양말과 신발은 벗는 방법이 하나로 정해져 있다고 여기지만 행렬에서 되돌리는 행렬이 하나뿐이라는 것은 [[invertible-matrix|가역행렬과 역행렬]]의 (1)로 증명해야 하는 사실이라는 점입니다.

모든 증명은 "후보를 하나 내놓고, 왼쪽과 오른쪽에서 곱해 단위행렬이 됨을 확인한다"는 같은 틀을 따릅니다. 역행렬이 하나뿐이므로 두 등식을 확인한 후보가 곧 역행렬입니다. 두 등식을 다 확인해야 하는 까닭은, 이 사이트에는 한쪽 등식만으로 가역임을 끌어내는 정리가 없기 때문입니다. (5)에서 $A$가 가역이라는 가정은 $B = A^{-1}(AB)$로 쓰는 단계에서 쓰이고, 이 가정을 빼면 결론이 깨질 수 있습니다(아래 반례).

## 증명

:::idea
$X$가 $Y$의 역행렬임을 보이려면 $XY$와 $YX$가 알맞은 크기의 단위행렬임을 확인하면 된다. [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 이런 $X$는 하나뿐이다. 곱을 다시 묶는 데 결합법칙을, 단위행렬을 지우는 데 단위행렬 법칙을 쓴다.
:::

:::hint
(3)에서는 $(AB)(B^{-1}A^{-1})$을 $A(B(B^{-1}A^{-1}))$로 묶은 뒤 안쪽을 $(BB^{-1})A^{-1}$로 다시 묶어 보세요.
:::

:::hint
(5)에서는 $B = I_n B = (A^{-1}A)B$를 다시 묶어 $B$를 가역행렬 둘의 곱으로 나타내세요.
:::

:::proof
아래에서 결합법칙, 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)이다. 또 $X$가 $p \times q$ 행렬이고 $Y$가 $q \times p$ 행렬이며 $YX = I_q$, $XY = I_p$이면, $Y$는 $X$의 왼쪽 역이면서 오른쪽 역이므로 $X$는 가역이고, [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $X^{-1} = Y$이다. 이것을 "역행렬의 판정"이라 부른다.

**(1)의 증명.** 단위행렬 법칙을 $A = I_n$에 쓰면 $I_n I_n = I_n$이다. 역행렬의 판정을 $X = Y = I_n$에 쓰면 $I_n$은 가역이고 $I_n^{-1} = I_n$이다.

**(2)의 증명.** $A^{-1}$은 $n \times m$ 행렬이고 역행렬의 정의에 의해 $AA^{-1} = I_m$, $A^{-1}A = I_n$이다. 역행렬의 판정을 $X = A^{-1}$ ($n \times m$), $Y = A$ ($m \times n$)에 쓰면, $YX = AA^{-1} = I_m$이고 $XY = A^{-1}A = I_n$이므로 $A^{-1}$은 가역이고 $(A^{-1})^{-1} = A$이다.

**(3)의 증명.** $B^{-1}$은 $r \times n$, $A^{-1}$은 $n \times m$ 행렬이므로 $B^{-1}A^{-1}$은 $r \times m$ 행렬이다. 결합법칙과 역행렬의 정의, 단위행렬 법칙에 의해
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}(AB)) = B^{-1}((A^{-1}A)B) = B^{-1}(I_n B) = B^{-1}B = I_r$$
이다. 첫째 등호는 $B^{-1}A^{-1}$ ($r \times m$)과 $AB$ ($m \times r$)를 결합법칙으로 다시 묶은 것이고, 둘째 등호도 $A^{-1}$, $A$, $B$에 결합법칙을 쓴 것이다. 셋째 등호는 $A^{-1}A = I_n$, 넷째 등호는 $B$가 $n \times r$이므로 단위행렬 법칙, 다섯째 등호는 $B^{-1}B = I_r$이다. 같은 방법으로
$$(AB)(B^{-1}A^{-1}) = A(B(B^{-1}A^{-1})) = A((BB^{-1})A^{-1}) = A(I_n A^{-1}) = AA^{-1} = I_m$$
이다. 여기서 $BB^{-1} = I_n$이고, $A^{-1}$이 $n \times m$이므로 단위행렬 법칙에 의해 $I_n A^{-1} = A^{-1}$이다. 역행렬의 판정을 $X = AB$ ($m \times r$), $Y = B^{-1}A^{-1}$ ($r \times m$)에 쓰면 $AB$는 가역이고 $(AB)^{-1} = B^{-1}A^{-1}$이다.

**(4)의 증명.** $A^T$는 $n \times m$, $(A^{-1})^T$는 $m \times n$ 행렬이다. [[transpose|전치행렬]]의 (4)를 $m \times n$ 행렬 $A$와 $n \times m$ 행렬 $A^{-1}$에 쓰고, 전치행렬의 (3)을 쓰면
$$(A^{-1})^T A^T = (AA^{-1})^T = I_m^T = I_m$$
이다. 같은 (4)를 $n \times m$ 행렬 $A^{-1}$과 $m \times n$ 행렬 $A$에 쓰면
$$A^T (A^{-1})^T = (A^{-1}A)^T = I_n^T = I_n$$
이다. 역행렬의 판정을 $X = A^T$ ($n \times m$), $Y = (A^{-1})^T$ ($m \times n$)에 쓰면, $YX = I_m$이고 $XY = I_n$이므로 $A^T$는 가역이고 $(A^T)^{-1} = (A^{-1})^T$이다.

**(5)의 증명.** 단위행렬 법칙, 역행렬의 정의, 결합법칙에 의해 $B = I_n B = (A^{-1}A)B = A^{-1}(AB)$이다. (2)에 의해 $n \times m$ 행렬 $A^{-1}$은 가역이고, 가정에 의해 $m \times r$ 행렬 $AB$는 가역이다. (3)을 이 두 행렬에 쓰면 $A^{-1}(AB)$는 가역이고 그 역행렬은 $(AB)^{-1}(A^{-1})^{-1}$이며, (2)에 의해 이것은 $(AB)^{-1}A$이다. $B = A^{-1}(AB)$이므로 $B$는 가역이고 $B^{-1} = (AB)^{-1}A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[곱의 역행렬은 순서를 바꾸어 곱한다]
$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad B^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}
$$

이라 합시다. $A^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]의 예시에서 확인한 것입니다. $B$의 경우 $BB^{-1}$의 열은 $1(1, 0) + 0(1, 1) = (1, 0)$과 $(-1)(1, 0) + 1(1, 1) = (0, 1)$이고, $B^{-1}B$의 열은 $1(1, 0) + 0(-1, 1) = (1, 0)$과 $1(1, 0) + 1(-1, 1) = (0, 1)$이므로 두 곱이 모두 $I_2$입니다.

$AB$의 열은 $1(2, 1) + 0(1, 1) = (2, 1)$과 $1(2, 1) + 1(1, 1) = (3, 2)$이므로 $AB = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$입니다. (3)에 의한 역행렬 $B^{-1}A^{-1}$의 열은 $A^{-1}$의 열 $(1, -1)$, $(-1, 2)$에 $B^{-1}$을 곱한 $1(1, 0) + (-1)(-1, 1) = (2, -1)$과 $(-1)(1, 0) + 2(-1, 1) = (-3, 2)$입니다. 확인하면 이 두 열에 $AB$를 곱한 $2(2, 1) + (-1)(3, 2) = (4, 2) + (-3, -2) = (1, 0)$과 $(-3)(2, 1) + 2(3, 2) = (-6, -3) + (6, 4) = (0, 1)$이 나와 $(AB)(B^{-1}A^{-1}) = I_2$입니다. 순서를 바꾸지 않은 $A^{-1}B^{-1}$의 첫째 열은 $B^{-1}$의 첫째 열 $(1, 0)$에 $A^{-1}$을 곱한 $(1, -1)$이고, $AB$와 이 벡터의 곱은 $1(2, 1) + (-1)(3, 2) = (-1, -1)$이라 $(1, 0)$이 아니므로, $(AB)(A^{-1}B^{-1}) \ne I_2$이고 $A^{-1}B^{-1}$은 $AB$의 역행렬이 아닙니다.
:::

:::counterexample[AB가 가역이어도 A와 B는 가역이 아닐 수 있다]
(5)에서 $A$가 가역이라는 가정을 빼면 결론이 깨질 수 있습니다. $1 \times 2$ 행렬 $A = \begin{pmatrix} 1 & 0 \end{pmatrix}$과 $2 \times 1$ 행렬 $B = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$을 생각합니다. $AB$의 열은 $1(1) + 0(0) = (1)$이므로(여기서 $(1)$, $(0)$, $(5)$는 $\mathbb{R}^1$의 원소이다) $AB = I_1$이고, (1)에 의해 $AB$는 가역입니다.

그러나 $B$는 가역이 아닙니다. $1 \times 2$ 행렬 $C = \begin{pmatrix} 1 & 0 \end{pmatrix}$과 $C' = \begin{pmatrix} 1 & 5 \end{pmatrix}$에 대하여 $CB$의 열은 $1(1) + 0(0) = (1)$이고 $C'B$의 열은 $1(1) + 0(5) = (1)$이므로 둘 다 $B$의 왼쪽 역입니다. $C \ne C'$이므로 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $B$는 가역일 수 없습니다. 마찬가지로 $2 \times 1$ 행렬 $D = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$과 $D' = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$에 대하여 $AD$의 열은 $1(1) + 0(0) = (1)$이고 $AD'$의 열은 $1(1) + 3(0) = (1)$이므로 둘 다 $A$의 오른쪽 역이고, 같은 이유로 $A$도 가역이 아닙니다.
:::

## 확인 질문

:::check[$A$, $B$, $C$가 가역인 $n \times n$ 행렬이면 $(AB)C$의 역행렬은 무엇인가?]
(3)을 $AB$와 $C$에 쓰면 $(AB)C$는 가역이고 $((AB)C)^{-1} = C^{-1}(AB)^{-1}$입니다. 다시 (3)에 의해 $(AB)^{-1} = B^{-1}A^{-1}$이므로 $((AB)C)^{-1} = C^{-1}(B^{-1}A^{-1})$입니다.
:::

:::check[$A$가 가역인 $m \times n$ 행렬이면 $3A$는 가역인가? 가역이면 역행렬은 무엇인가?]
가역이고 역행렬은 $3^{-1}A^{-1}$입니다. [[matrix-product-properties|행렬 곱의 성질]]의 (3)을 두 번 쓰면 $(3^{-1}A^{-1})(3A) = 3^{-1}(A^{-1}(3A)) = 3^{-1}(3(A^{-1}A))$이고, [[vector-space|(V6)]]에 의해 이것은 $(3^{-1} \cdot 3)(A^{-1}A) = 1 I_n$입니다. [[real-number-arithmetic|(K1)]]과 $3^{-1}$의 정의에 의해 $3^{-1} \cdot 3 = 1$이고 (V5)에 의해 $1 I_n = I_n$입니다. 같은 방법으로 $(3A)(3^{-1}A^{-1}) = (3 \cdot 3^{-1})(AA^{-1}) = 1 I_m = I_m$이므로, 역행렬의 판정에 의해 $(3A)^{-1} = 3^{-1}A^{-1}$입니다.
:::
