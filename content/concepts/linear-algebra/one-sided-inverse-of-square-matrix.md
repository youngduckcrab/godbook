---
title: 정사각행렬의 한쪽 역
title_en: One-Sided Inverses of a Square Matrix
aliases: [정사각행렬의 가역 조건, 한쪽 역이면 역행렬, 왼쪽 역이면 가역, one-sided inverse of a square matrix, invertible matrix theorem]
kind: theorem
field: linear-algebra
msc: ["15A09"]
level: undergrad
summary: 정사각행렬 A 는 가역인 것, 왼쪽 가역인 것, 오른쪽 가역인 것, T_A 가 단사인 것, T_A 가 전사인 것, 열이 일차독립인 것, 열이 ℝⁿ 을 생성하는 것이 모두 같은 조건이다. BA = I 이면 AB = I 이고, 정사각행렬의 곱 AB 가 가역이면 A 와 B 가 모두 가역이다.
requires: [vector-space, vector-space-basic-properties, real-function-space, real-number-arithmetic, finite-sum-of-vectors, linear-combination-and-span, linear-independence, injective-surjective-bijective, linear-map, kernel-and-range, injective-iff-trivial-kernel, isomorphism, dimension, dimension-of-subspace, rank-and-nullity, injective-iff-surjective-equal-dimension, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3.2절, Proposition 3.8 과 그 증명, p.50–51; 1장 6.2절, Remark 6.2, p.26; 2장 7절 연습문제 7.6, p.68"
    checked: original
    note: "출처의 Proposition 3.8(p.50)은 정사각(n × n) 행렬이 왼쪽 가역이거나 오른쪽 가역이면 가역이라고 하고, 이것이 정사각행렬에만 적용된다고 강조한다. 1장 Remark 6.2(p.26)는 같은 사실을 뒤에서 증명한다며 미리 적는다. 출처의 증명(p.50–51)은 왼쪽 역 B 가 있으면 Ax = 0 의 해가 x = 0 뿐이어서 사다리꼴의 모든 열에 피벗이 있고, 정사각이면 모든 행에도 피벗이 있어 가역이라고 하며, 오른쪽 역 C 가 있으면 x = Cb 가 Ax = b 의 해이므로 모든 행에 피벗이 있다고 한다. 이 항목은 두 계산(x = B(Ax), b = A(Cb))을 그대로 쓰되 피벗 대신 차원이 같은 공간 사이의 선형사상에 관한 정리로 마무리한다. 일곱 조건을 한데 묶은 진술은 출처에 이 꼴로 없다(2장 3절, 7절과 그 연습문제를 읽은 범위). 가역인 것과 열이 기저인 것이 같다는 것은 출처 1장 Corollary 6.9 로 이미 이 사이트의 invertible-matrix (3)에 있다. (2)는 출처가 연습문제 7.6(p.68, n × n 행렬의 곱 AB 가 가역이면 A 와 B 가 가역임을 보여라, 힌트는 앞의 두 문제)으로 둔다. 이 항목의 증명은 1장 연습문제 6.6(p.29, AB 가 가역이면 A 는 오른쪽 가역, B 는 왼쪽 가역. 힌트: 오른쪽 역과 왼쪽 역의 식을 적는다)의 식을 쓰고 (1)로 마무리하며, 출처 힌트가 가리키는 계수의 부등식은 쓰지 않는다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $T_A : \mathbb{R}^n \to \mathbb{R}^n$은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이고, $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $A$의 열을 차례로 늘어놓은 $\mathbb{R}^n$의 벡터의 열이다. 다음 일곱 조건은 서로 같다. 곧 어느 하나가 성립하면 나머지가 모두 성립한다.

- (가) $A$는 [[invertible-matrix|가역]]이다.
- (나) $A$는 왼쪽 가역이다.
- (다) $A$는 오른쪽 가역이다.
- (라) $T_A$는 [[injective-surjective-bijective|단사]]이다.
- (마) $T_A : \mathbb{R}^n \to \mathbb{R}^n$은 전사이다.
- (바) 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$은 [[linear-independence|일차독립]]이다.
- (사) 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $\mathbb{R}^n$을 [[linear-combination-and-span|생성]]한다.

또 다음이 성립한다.

1. $BA = I_n$인 $n \times n$ 행렬 $B$가 있으면 $A$는 가역이고 $B = A^{-1}$이며, 따라서 $AB = I_n$이다. $AC = I_n$인 $n \times n$ 행렬 $C$가 있으면 $A$는 가역이고 $C = A^{-1}$이며, 따라서 $CA = I_n$이다.
2. $B$도 $n \times n$ 행렬이고 $AB$가 가역이면 $A$와 $B$는 둘 다 가역이다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. Let $T_A : \mathbb{R}^n \to \mathbb{R}^n$ be the linear map of property (2) of the matrix–vector product, and let $\mathbf{a}_1, \dots, \mathbf{a}_n$ be the sequence of vectors in $\mathbb{R}^n$ formed by the columns of $A$ in order. The following seven conditions are equivalent; that is, if any one of them holds, then all the others hold.

- (a) $A$ is invertible.
- (b) $A$ is left invertible.
- (c) $A$ is right invertible.
- (d) $T_A$ is injective.
- (e) $T_A : \mathbb{R}^n \to \mathbb{R}^n$ is surjective.
- (f) The sequence of vectors $\mathbf{a}_1, \dots, \mathbf{a}_n$ is linearly independent.
- (g) The sequence of vectors $\mathbf{a}_1, \dots, \mathbf{a}_n$ spans $\mathbb{R}^n$.

Moreover, the following hold.

1. If there is an $n \times n$ matrix $B$ with $BA = I_n$, then $A$ is invertible and $B = A^{-1}$; hence $AB = I_n$. If there is an $n \times n$ matrix $C$ with $AC = I_n$, then $A$ is invertible and $C = A^{-1}$; hence $CA = I_n$.
2. If $B$ is also an $n \times n$ matrix and $AB$ is invertible, then both $A$ and $B$ are invertible.
:::

## 직관

정사각행렬에서는 "되돌릴 수 있다"는 성질의 여러 모습이 하나로 묶입니다. 열쇠와 자물쇠에 빗대어 봅시다. 보통은 잠그는 열쇠와 여는 열쇠를 따로 확인해야 하지만, 칸 수가 정확히 맞는 자물쇠라면 한쪽으로 돌아가는 열쇠는 반대쪽으로도 돌아갑니다. 여기서 칸 수가 맞는다는 것은 정의역과 공역의 차원이 같다($n = n$)는 것이고, 한쪽으로 돈다는 것은 한쪽 역이 있다는 것입니다. 비유와 다른 점은, 이 결론이 경험이 아니라 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에 관한 정리에서 나온다는 것입니다.

왼쪽 역이 있으면 $T_A$가 단사이고, 오른쪽 역이 있으면 $T_A$가 전사입니다. 정의역과 공역이 모두 $n$차원인 $\mathbb{R}^n$이므로 단사와 전사는 같은 조건이고, 둘 다 성립하면 $T_A$는 동형사상, 곧 $A$는 가역입니다. 열에 관한 두 조건은 $T_A$의 상이 열들의 생성이라는 데서 각각 전사와 계수의 조건으로 바뀝니다. 정사각이 아니면 이 고리가 끊어질 수 있습니다. [[invertible-matrix-is-square|가역행렬은 정사각행렬이다]]의 예시처럼 한쪽 역만 있는 행렬이 있습니다.

## 증명

:::idea
한쪽 역이 있으면 $T_A$가 단사이거나 전사이고, $\mathbb{R}^n$에서 $\mathbb{R}^n$으로 가는 선형사상에서는 둘이 같으므로 $T_A$는 동형사상이다. 열에 관한 조건은 $\operatorname{Ran} T_A$가 열들의 생성이라는 것으로 $T_A$의 조건으로 옮긴다.
:::

:::hint
$BA = I_n$이고 $Ax$가 영벡터이면 $x = I_n x = (BA)x = B(Ax)$입니다. $AC = I_n$이면 모든 $b$에서 $b = A(Cb)$입니다.
:::

:::hint
(2)에서는 $D = (AB)^{-1}$이라 두고 $A(BD)$와 $(DA)B$를 결합법칙으로 계산해 보세요.
:::

:::proof
[[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이고 $\dim \mathbb{R}^n = n$이다. $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 선형사상이다.

**(가)이면 (나), (다)** 가역의 정의([[invertible-matrix|가역행렬과 역행렬]])에 의해 가역인 행렬은 왼쪽 가역이고 오른쪽 가역이다.

**(나)이면 (라)** $BA = I_n$인 $n \times n$ 행렬 $B$가 있다고 하자. $x \in \mathbb{R}^n$이고 $Ax = 0_{\mathbb{R}^n}$이면 행렬과 벡터의 곱의 (3), [[matrix-product|행렬의 곱]]의 (1)과 $T_B$에 대한 [[linear-map|(T1)]]에 의해
$$x = I_n x = (BA)x = B(Ax) = B0_{\mathbb{R}^n} = 0_{\mathbb{R}^n}$$
이다. (T1)에 의해 $0_{\mathbb{R}^n} \in \operatorname{Ker} T_A$이므로 $\operatorname{Ker} T_A = \{0_{\mathbb{R}^n}\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T_A$는 단사이다.

**(다)이면 (마)** $AC = I_n$인 $n \times n$ 행렬 $C$가 있다고 하자. $b \in \mathbb{R}^n$이면 행렬과 벡터의 곱의 (3)과 행렬의 곱의 (1)에 의해 $b = I_n b = (AC)b = A(Cb)$이므로, $b$는 $T_A$의 $Cb$에서의 값이다. 따라서 $T_A : \mathbb{R}^n \to \mathbb{R}^n$은 전사이다.

**(라), (마)이면 (가)** 정의역과 공역이 모두 유한차원이고 차원이 $n$으로 같으므로, [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에 의해 $T_A$가 단사이거나 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 전사이면 $T_A$는 [[isomorphism|동형사상]]이다. 가역행렬과 역행렬의 (2)에 의해 $A$는 가역이다.

여기까지에서 (가)이면 (나)이고 (나)이면 (라)이며 (라)이면 (가)이다. 또 (가)이면 (다)이고 (다)이면 (마)이며 (마)이면 (가)이다. 따라서 (가)–(마) 가운데 어느 하나가 성립하면 (가)가 성립하고, (가)에서 나머지 넷이 모두 나온다((라)는 (가)에서 (나)를 거쳐, (마)는 (다)를 거쳐 나온다).

**(바)와 (사)** 행렬과 벡터의 곱의 (6)에 의해 $\operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이다. [[kernel-and-range|핵과 상]]의 (3)에 의해 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 전사인 것은 정확히 $\operatorname{Ran} T_A = \mathbb{R}^n$일 때, 곧 정확히 $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n) = \mathbb{R}^n$일 때이다. 따라서 (마)와 (사)는 같다. 또 [[rank-and-nullity|계수와 퇴화차수]]의 (5)에 의해 (마)는 정확히 $\operatorname{rank} T_A = n$일 때이다. $\operatorname{rank} T_A$는 벡터공간 $\operatorname{Ran} T_A$, 곧 부분공간 $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$의 차원이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 이 차원이 $n$인 것은 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립일 때이다. 따라서 (마)와 (바)는 같다. 이로써 일곱 조건이 모두 같다.

**(1)** $BA = I_n$이면 $A$는 왼쪽 가역이므로 위에서 가역이다. 가역행렬과 역행렬의 (1)에 의해 가역인 $A$의 왼쪽 역은 $A^{-1}$ 하나뿐이므로 $B = A^{-1}$이고, 같은 (1)의 $AA^{-1} = I_n$에서 $AB = I_n$이다. $AC = I_n$이면 $A$는 오른쪽 가역이므로 가역이고, 같은 (1)에 의해 오른쪽 역은 $A^{-1}$ 하나뿐이므로 $C = A^{-1}$이며, $A^{-1}A = I_n$에서 $CA = I_n$이다.

**(2)** $AB$는 $n \times n$ 행렬이고 가역이므로 가역행렬과 역행렬의 (1)에 의해 $D = (AB)^{-1}$은 $(AB)D = I_n$, $D(AB) = I_n$인 $n \times n$ 행렬이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1)(결합법칙)에 의해
$$A(BD) = (AB)D = I_n, \qquad (DA)B = D(AB) = I_n$$
이다. $BD$는 $n \times n$ 행렬이므로 $A$는 오른쪽 가역이고, 위에서 $A$는 가역이다. $DA$는 $n \times n$ 행렬이므로 $B$는 왼쪽 가역이고, 위의 "(나)이면 (가)"를 $n \times n$ 행렬 $B$에 쓰면 $B$는 가역이다.
:::

## 예시와 반례

:::example[왼쪽 역 하나만 확인하기]
$$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$$
이라 합시다. [[matrix-product|행렬의 곱]]의 정의에 의해 $BA$의 열은 $B\mathbf{a}_1$, $B\mathbf{a}_2$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 정의로 계산하면 $B\mathbf{a}_1 = 1(1, 0) + 0(-2, 1) = (1, 0)$, $B\mathbf{a}_2 = 2(1, 0) + 1(-2, 1) = (2 - 2, 0 + 1) = (0, 1)$입니다. 이것은 $I_2$의 열이므로 [[matrix|행렬]]의 (3)에 의해 $BA = I_2$입니다. 이 항목의 (1)에 의해 $A$는 가역이고 $B = A^{-1}$이며, $AB$를 계산하지 않고도 $AB = I_2$임을 압니다. 실제로 $A\mathbf{b}_1 = 1(1, 0) + 0(2, 1) = (1, 0)$, $A\mathbf{b}_2 = (-2)(1, 0) + 1(2, 1) = (0, 1)$입니다.
:::

:::counterexample[정사각이 아니면 BA = I 이어도 AB ≠ I 일 수 있다]
$3 \times 2$ 행렬 $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$와 $2 \times 3$ 행렬 $B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$를 봅시다. $BA$의 열은 $B\mathbf{a}_1 = 1(1, 0) + 0(0, 1) + 1(0, 0) = (1, 0)$과 $B\mathbf{a}_2 = 0(1, 0) + 1(0, 1) + 1(0, 0) = (0, 1)$이므로 $BA = I_2$입니다. 그러나 $AB$의 셋째 열은 $A\mathbf{b}_3$이고 $\mathbf{b}_3 = (0, 0)$이므로 $A\mathbf{b}_3 = 0(1, 0, 1) + 0(0, 1, 1) = (0, 0, 0)$입니다. 이것은 $I_3$의 셋째 열 $e_3$이 아니므로 행렬의 (3)에 의해 $AB \ne I_3$입니다. 이 항목의 (1)은 정사각행렬에 대한 것이고, 이 예에서 그 가정을 뺄 수 없습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$의 열이 $\mathbf{a}_3 = \mathbf{a}_1 + \mathbf{a}_2$를 만족하면 $A$는 가역인가?]
아닙니다. 실수의 열 $1, 1, -1$에 대하여, [[finite-sum-of-vectors|벡터의 유한 합]]의 정의와 (H0), [[vector-space|벡터공간]]의 (V5), [[vector-space-basic-properties|(B5)]]에 의해 $1\mathbf{a}_1 + 1\mathbf{a}_2 + (-1)\mathbf{a}_3 = (\mathbf{a}_1 + \mathbf{a}_2) + (-\mathbf{a}_3)$이고, $\mathbf{a}_3 = \mathbf{a}_1 + \mathbf{a}_2$이므로 (B2)에 의해 이것은 영벡터입니다. 이 실수의 열의 셋째 항 $-1$은 $0$이 아닙니다($-1 = 0$이면 [[real-number-arithmetic|(K4)]]와 (K8)의 (ii)에 의해 $1 = 1 + 0 = 1 + (-1) = 0$이 되어 (K4)의 $0 \ne 1$에 어긋납니다). 따라서 벡터의 열 $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$은 일차독립이 아닙니다. (바)가 성립하지 않으므로 (가)도 성립하지 않습니다.
:::

:::check[$n \times n$ 행렬 $A$에 대하여 $AA$가 가역이면 $A$는 가역인가?]
그렇습니다. 이 항목의 (2)를 $B = A$로 쓰면 $A$와 $A$가 둘 다 가역입니다.
:::
