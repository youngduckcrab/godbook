---
title: 가역행렬과 역행렬
title_en: Invertible Matrix and Inverse Matrix
aliases: [가역행렬, 역행렬, 왼쪽 역행렬, 오른쪽 역행렬, 정칙행렬, invertible matrix, inverse matrix, left inverse, right inverse, nonsingular matrix]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: m × n 행렬 A 는 BA = Iₙ 인 B 가 있으면 왼쪽 가역, AC = Iₘ 인 C 가 있으면 오른쪽 가역, 둘 다이면 가역이다. 가역이면 왼쪽 역과 오른쪽 역은 같고 하나뿐이며(역행렬), A 가 가역인 것은 T_A 가 동형사상일 때, 또 A 의 열들이 ℝᵐ 의 기저일 때와 같다.
requires: [real-number-arithmetic, function, inverse-function, injective-surjective-bijective, finite-sum-of-vectors, basis, linear-map, isomorphism, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-product-properties]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 6.2절 Invertible transformations 의 정의, Theorem 6.1 과 따름, 행렬의 가역성의 정의와 예, Remark 6.2, pp.24–26; 6.4절 Corollary 6.9, p.29
    checked: original
    note: "출처는 6.2절(pp.24–25)에서 선형사상 A : V → W 가 왼쪽 가역인 것을 BA = I 인 선형사상 B : W → V 가 있는 것으로, 오른쪽 가역을 AC = I 인 선형사상 C 가 있는 것으로, 가역을 둘 다인 것으로 정의하고, 왼쪽 역과 오른쪽 역이 일반적으로 하나로 정해지지 않는다고 적는다. Theorem 6.1(p.25)은 가역이면 왼쪽 역과 오른쪽 역이 하나뿐이고 같다는 것이고, 증명은 B = B(AC) = (BA)C = C 의 계산이다. 이 항목의 (1)은 같은 계산을 행렬에서 하며 결합법칙과 단위행렬 법칙을 matrix-product-properties 에서 인용한다. 출처는 행렬이 가역(왼쪽 가역, 오른쪽 가역)인 것을 대응하는 선형사상이 그런 것으로 정의한다(p.25). 이 항목은 행렬의 곱으로 직접 정의하고, (2)에서 가역성이 T_A 가 동형사상인 것과 같음을 보인다. 왼쪽 가역과 오른쪽 가역만 따로 떼어 선형사상의 말로 옮기는 것은 이 항목에서 하지 않는다. 출처의 Corollary 6.9(p.29)는 m × n 행렬이 가역인 것은 그 열들이 Fᵐ 의 기저를 이룰 때라는 것이고, 출처는 이것을 Theorem 6.6 과 6.7 의 따름으로 적을 뿐 따로 증명하지 않는다. 이 항목의 (3)은 T_A 가 전단사라는 조건이 기저의 정의와 같은 말임을 직접 보인다. 출처의 Remark 6.2(p.26)는 가역행렬은 정사각이어야 하고 정사각행렬은 한쪽 역만 있으면 가역이라고 적되 뒤에서 증명하겠다며 그때까지 쓰지 않는다고 적는다. 이 항목도 이 두 사실을 주장하지 않고 쓰지 않는다. 반례의 '왼쪽 역이 둘 이상이므로 오른쪽 가역이 아니다'는 출처 p.26 의 예 3(2 × 1 행렬, 왼쪽 역이 둘 이상)과 같은 발상이고, 행렬은 3 × 2 로 바꾸고 분수가 없는 수를 골랐다. 예시와 나머지 반례, 확인 질문은 출처의 6절 연습문제 6.1–6.13 을 다시 읽고 겹치지 않게 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. 행렬의 [[matrix-product|곱]]과 단위행렬 $I_n$, $I_m$은 앞 항목들에서 정한 것이다.

- $A$가 **왼쪽 가역**(left invertible)인 것은 정확히 $BA = I_n$인 $n \times m$ 행렬 $B$가 있을 때이다. 이런 $B$를 $A$의 **왼쪽 역**(left inverse)이라 한다.
- $A$가 **오른쪽 가역**(right invertible)인 것은 정확히 $AC = I_m$인 $n \times m$ 행렬 $C$가 있을 때이다. 이런 $C$를 $A$의 **오른쪽 역**(right inverse)이라 한다.
- $A$가 **가역**(invertible)인 것은 정확히 $A$가 왼쪽 가역이고 오른쪽 가역일 때이다.

다음이 성립한다. $T_A : \mathbb{R}^n \to \mathbb{R}^m$은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에서 정한 선형사상이고, $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $A$의 열을 차례로 늘어놓은 $\mathbb{R}^m$의 벡터의 열이다.

1. $A$가 가역이고 $B$가 $A$의 왼쪽 역, $C$가 $A$의 오른쪽 역이면 $B = C$이다. 따라서 가역인 $A$의 왼쪽 역은 하나뿐이고, 오른쪽 역도 하나뿐이며, 둘은 같다. 이 행렬을 $A$의 **역행렬**(inverse matrix)이라 하고 $A^{-1}$로 쓴다. 곧 $A^{-1}$은 $A^{-1}A = I_n$이고 $AA^{-1} = I_m$인 $n \times m$ 행렬이고, 이 두 등식을 만족하는 $n \times m$ 행렬은 $A^{-1}$뿐이다.
2. $A$가 가역인 것은 정확히 $T_A$가 [[isomorphism|동형사상]]일 때이다. 이때 $T_{A^{-1}}$은 $T_A$의 [[inverse-function|역함수]] $(T_A)^{-1} : \mathbb{R}^m \to \mathbb{R}^n$이다.
3. $A$가 가역인 것은 정확히 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 $\mathbb{R}^m$의 [[basis|기저]]일 때이다.

가역행렬이 정사각행렬이어야 하는지, 정사각행렬이 한쪽 역만 가지면 가역인지는 이 항목에서 다루지 않는다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. The product of matrices and the identity matrices $I_n$, $I_m$ are as defined in the preceding entries.

- $A$ is **left invertible** exactly when there is an $n \times m$ matrix $B$ with $BA = I_n$. Such a $B$ is called a **left inverse** of $A$.
- $A$ is **right invertible** exactly when there is an $n \times m$ matrix $C$ with $AC = I_m$. Such a $C$ is called a **right inverse** of $A$.
- $A$ is **invertible** exactly when $A$ is left invertible and right invertible.

The following hold. $T_A : \mathbb{R}^n \to \mathbb{R}^m$ is the linear map defined in (2) of the entry on the matrix–vector product, and $\mathbf{a}_1, \dots, \mathbf{a}_n$ is the sequence of vectors of $\mathbb{R}^m$ formed by the columns of $A$ in order.

1. If $A$ is invertible, $B$ is a left inverse of $A$ and $C$ is a right inverse of $A$, then $B = C$. Hence an invertible $A$ has only one left inverse and only one right inverse, and they are equal. This matrix is called the **inverse matrix** of $A$ and written $A^{-1}$. That is, $A^{-1}$ is the $n \times m$ matrix with $A^{-1}A = I_n$ and $AA^{-1} = I_m$, and $A^{-1}$ is the only $n \times m$ matrix satisfying these two equations.
2. $A$ is invertible exactly when $T_A$ is an isomorphism. In that case $T_{A^{-1}}$ is the inverse function $(T_A)^{-1} : \mathbb{R}^m \to \mathbb{R}^n$ of $T_A$.
3. $A$ is invertible exactly when the sequence of vectors $\mathbf{a}_1, \dots, \mathbf{a}_n$ is a basis of $\mathbb{R}^m$.

Whether an invertible matrix must be a square matrix, and whether a square matrix with a one-sided inverse is invertible, are not treated in this entry.
:::

## 직관

행렬 $A$를 "곱하는 작업"으로 보면 왼쪽 역은 그 작업을 뒤에서 되돌리는 작업이고, 오른쪽 역은 먼저 해 두면 $A$가 그것을 되돌리는 작업입니다. 열쇠와 자물쇠에 비유할 수 있습니다. 잠근 것을 여는 열쇠(왼쪽 역)가 여러 개 있을 수 있듯이 왼쪽 역은 일반적으로 하나로 정해지지 않습니다. 그러나 양쪽 역이 모두 있으면 (1)에 의해 둘은 같은 하나의 행렬이 됩니다. 비유가 맞지 않는 곳은, 열쇠는 잠그는 쪽과 여는 쪽이 따로 없지만 행렬에서는 $BA = I_n$과 $AB = I_m$이 서로 다른 조건이라는 점입니다(아래 반례).

(1)의 증명은 $B(AC)$를 두 가지로 묶어 계산하는 것이고, 여기서 결합법칙이 핵심입니다. (2)는 가역성을 선형사상의 말로 옮깁니다. 행렬의 곱이 사상의 합성에, $I_n$이 항등함수에 대응하므로 "역행렬이 있다"는 "역함수가 선형사상으로 있다"와 같은 말이 됩니다. (3)은 다시 $T_A$가 전단사라는 조건을 풀어 읽은 것으로, "모든 $y$가 열들의 일차결합으로 정확히 한 가지로 쓰인다"는 기저의 정의 그 자체입니다.

## 성질의 증명

:::proof
아래에서 결합법칙과 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)이다. 곱을 쓸 때마다 크기가 맞는지 확인한다.

**(1)의 증명.** $B$와 $C$는 $n \times m$ 행렬이고 $BA = I_n$, $AC = I_m$이다. 단위행렬 법칙에 의해 $B = BI_m$이고, $AC = I_m$이므로 $BI_m = B(AC)$이다. $B$는 $n \times m$, $A$는 $m \times n$, $C$는 $n \times m$이므로 결합법칙에 의해 $B(AC) = (BA)C$이다. $BA = I_n$이므로 $(BA)C = I_n C$이고, 단위행렬 법칙에 의해 $I_n C = C$이다. 따라서 $B = C$이다.

$B$와 $B'$가 둘 다 왼쪽 역이면, $A$가 오른쪽 가역이므로 오른쪽 역 $C$를 하나 잡을 수 있고 방금 보인 것에 의해 $B = C$이고 $B' = C$이므로 $B = B'$이다. $C$와 $C'$가 둘 다 오른쪽 역이면, 왼쪽 역 $B$를 하나 잡아 $C = B$이고 $C' = B$이므로 $C = C'$이다. 따라서 왼쪽 역과 오른쪽 역은 각각 하나뿐이고 서로 같다. 끝으로 $n \times m$ 행렬 $D$가 $DA = I_n$이고 $AD = I_m$이면 $D$는 왼쪽 역이므로 $D = A^{-1}$이다.

**(2)의 증명.** 먼저 $A$가 가역이라 하자. [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해
$$T_{A^{-1}} \circ T_A = T_{A^{-1}A} = T_{I_n} = i_{\mathbb{R}^n}, \qquad T_A \circ T_{A^{-1}} = T_{AA^{-1}} = T_{I_m} = i_{\mathbb{R}^m}$$
이다. $T_{A^{-1}} : \mathbb{R}^m \to \mathbb{R}^n$은 선형사상이므로 [[isomorphism|동형사상]]의 (3)에 의해 $T_A$는 동형사상이고 $T_{A^{-1}} = (T_A)^{-1}$이다.

거꾸로 $T_A$가 동형사상이라 하자. 동형사상의 (2)에 의해 역함수 $(T_A)^{-1} : \mathbb{R}^m \to \mathbb{R}^n$은 선형사상이므로 [[matrix-of-a-linear-map|선형사상의 행렬]]에서 정한 $n \times m$ 행렬 $B = [(T_A)^{-1}]$가 있고, 그 항목의 (1)에 의해 $T_B = (T_A)^{-1}$이다. 행렬의 곱의 (1)과 [[inverse-function|역함수]]의 두 등식, 행렬과 벡터의 곱의 (3)에 의해
$$T_{BA} = T_B \circ T_A = (T_A)^{-1} \circ T_A = i_{\mathbb{R}^n} = T_{I_n}, \qquad T_{AB} = T_A \circ T_B = T_A \circ (T_A)^{-1} = i_{\mathbb{R}^m} = T_{I_m}$$
이다. 행렬과 벡터의 곱의 (5)에 의해 $BA = I_n$이고 $AB = I_m$이다. 따라서 $B$는 $A$의 왼쪽 역이면서 오른쪽 역이고, $A$는 가역이다.

**(3)의 증명.** $T_A$는 선형사상이므로 동형사상의 정의에 의해 $T_A$가 동형사상인 것은 정확히 $T_A : \mathbb{R}^n \to \mathbb{R}^m$이 [[injective-surjective-bijective|전단사]]일 때이다. (2)와 함께, $A$가 가역인 것은 정확히 $T_A$가 단사이고 $T_A : \mathbb{R}^n \to \mathbb{R}^m$이 전사일 때이다. 이 두 조건이 [[basis|기저]]의 정의의 두 조건과 같음을 보인다. 그 전에, 길이 $n$인 실수의 열은 함수 $\{1, \dots, n\} \to \mathbb{R}$이므로([[finite-sum-of-vectors|벡터의 유한 합]]) $\mathbb{R}^n$의 원소와 같은 것이고, $x \in \mathbb{R}^n$에서 $T_A x = Ax = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$이다.

(전사와 존재) $T_A$가 전사인 것은 정확히 모든 $y \in \mathbb{R}^m$에 $T_A x = y$인 $x \in \mathbb{R}^n$이 있을 때, 곧 모든 $y$에 $y = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$인 길이 $n$인 실수의 열 $x$가 있을 때이다. 이것이 기저의 (존재)이다.

(단사와 유일성) [[injective-surjective-bijective|단사의 동치 꼴]]에 의해 $T_A$가 단사인 것은 정확히 모든 $x$, $x' \in \mathbb{R}^n$에서 $T_A x = T_A x'$이면 $x = x'$일 때이다. $T_A x = T_A x'$은 $x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n = x'_1 \mathbf{a}_1 + \cdots + x'_n \mathbf{a}_n$이고, [[function|함수의 같음]]에 의해 $x = x'$은 모든 $k$에서 $x_k = x'_k$라는 것이다. 따라서 이 조건은 기저의 (유일성) 그대로이다.

두 조건이 각각 같으므로 $A$가 가역인 것은 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 $\mathbb{R}^m$의 기저일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 가역행렬과 그 역행렬]
$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
$$

이라 합시다. $AD$의 열은 $D$의 열 $(1, -1)$, $(-1, 2)$에 $A$를 곱한 $1(2, 1) + (-1)(1, 1) = (2, 1) + (-1, -1) = (1, 0)$과 $(-1)(2, 1) + 2(1, 1) = (-2, -1) + (2, 2) = (0, 1)$이므로 $AD = I_2$입니다. $DA$의 열은 $A$의 열 $(2, 1)$, $(1, 1)$에 $D$를 곱한 $2(1, -1) + 1(-1, 2) = (2, -2) + (-1, 2) = (1, 0)$과 $1(1, -1) + 1(-1, 2) = (1, -1) + (-1, 2) = (0, 1)$이므로 $DA = I_2$입니다. 두 등식을 모두 확인했으므로 $D$는 왼쪽 역이면서 오른쪽 역이고, $A$는 가역이며 (1)에 의해 $A^{-1} = D$입니다. (3)에 의해 $A$의 열 $(2, 1)$, $(1, 1)$은 $\mathbb{R}^2$의 기저입니다.
:::

:::counterexample[왼쪽 역이 둘 이상인 행렬은 오른쪽 가역이 아니다]
$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}, \qquad B' = \begin{pmatrix} 1 & 0 & 5 \\ 0 & 1 & -2 \end{pmatrix}
$$

이라 합시다. $A$는 $3 \times 2$, $B$와 $B'$는 $2 \times 3$입니다. $BA$의 열은 $A$의 열 $(1, 0, 0)$, $(0, 1, 0)$에 $B$를 곱한 $1(1, 0) + 0(0, 1) + 0(0, 0) = (1, 0)$과 $0(1, 0) + 1(0, 1) + 0(0, 0) = (0, 1)$이므로 $BA = I_2$입니다. 같은 열에 $B'$를 곱하면 $1(1, 0) + 0(0, 1) + 0(5, -2) = (1, 0)$과 $0(1, 0) + 1(0, 1) + 0(5, -2) = (0, 1)$이므로 $B'A = I_2$입니다. $B$와 $B'$는 $(1, 3)$ 성분이 $0$과 $5$로 다르므로 서로 다른 왼쪽 역입니다.

$A$가 오른쪽 가역이라면 $A$는 왼쪽 가역이기도 하므로 가역이고, (1)에 의해 왼쪽 역은 하나뿐이어야 합니다. 왼쪽 역이 둘이므로 $A$는 오른쪽 가역이 아니고, 따라서 가역이 아닙니다. 곧 $BA = I_2$이지만 어떤 $2 \times 3$ 행렬 $C$도 $AC = I_3$을 만족하지 않습니다.
:::

:::counterexample[영행렬이 아니어도 가역이 아닌 2 × 2 행렬]
$A = \begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}$이고 $x = (3, -1)$이면 $Ax = 3(1, 2) + (-1)(3, 6) = (3, 6) + (-3, -6) = (0, 0)$입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)와 [[linear-map|선형사상]]의 (T1)에 의해 $T_A(0, 0) = (0, 0)$이기도 하므로, $T_A$는 서로 다른 두 벡터 $(3, -1)$과 $(0, 0)$을 같은 곳으로 보내고 단사가 아닙니다. 따라서 $T_A$는 동형사상이 아니고, (2)에 의해 $A$는 가역이 아닙니다.
:::

## 확인 질문

:::check[$1 \times 1$ 행렬 $(a)$가 가역인 것은 언제이고, 그때 역행렬은 무엇인가?]
$a \ne 0$일 때이고 역행렬은 $(a^{-1})$입니다. $1 \times 1$ 행렬 $(b)$에 대하여 곱의 정의에 의해 $(b)(a)$의 열은 $a(b) = (ab)$이고 $(a)(b)$의 열은 $b(a) = (ba)$입니다. $a \ne 0$이면 $b = a^{-1}$로 두어 [[real-number-arithmetic|(K1)]]과 $a^{-1}$의 정의에 의해 $ab = ba = 1$이므로 $(b)(a) = (a)(b) = I_1$입니다. $a = 0$이면 모든 $b$에서 (K9)에 의해 $ab = 0$이고 (K4)에 의해 $0 \ne 1$이므로 $(b)(a) \ne I_1$이고, $(a)$는 왼쪽 가역조차 아닙니다.
:::

:::check[$A$가 가역인 $m \times n$ 행렬이고 $x \in \mathbb{R}^n$에서 $Ax$가 영벡터이면 $x$는 무엇인가?]
$x$는 영벡터입니다. [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $x = I_n x = (A^{-1}A)x = A^{-1}(Ax)$이고, $Ax$가 영벡터이므로 $T_{A^{-1}}$에 [[linear-map|선형사상]]의 (T1)을 쓰면 $A^{-1}(Ax)$는 $\mathbb{R}^n$의 영벡터입니다.
:::
