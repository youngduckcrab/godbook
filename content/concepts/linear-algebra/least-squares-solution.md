---
title: 최소제곱 해와 정규방정식
title_en: Least Squares Solutions and the Normal Equation
aliases: [최소제곱법, 최소 제곱 해, 정규방정식, 정규 방정식, least squares solution, least squares, normal equation]
kind: theorem
field: linear-algebra
msc: ["15A06", "65F20"]
level: undergrad
summary: m × n 행렬 A 와 b ∈ ℝᵐ 에 대해 ‖Ax − b‖ 를 가장 작게 하는 x 를 Ax = b 의 최소제곱 해라 한다. x 가 최소제곱 해인 것은 정확히 Ax 가 b 의 열공간으로의 직교사영일 때이고, 정확히 정규방정식 AᵀAx = Aᵀb 를 만족할 때이다. 최소제곱 해는 늘 있고, 두 최소제곱 해의 차는 A 의 핵에 든다. 해가 하나뿐인 것은 정확히 A 의 열이 일차독립일 때이고 그때 해는 (AᵀA)⁻¹Aᵀb, 열공간으로의 직교사영의 행렬은 A(AᵀA)⁻¹Aᵀ 이다. Ax = b 가 해를 가지면 최소제곱 해는 정확히 그 해들이다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-independence, matrix, linear-map, kernel-and-range, injective-iff-trivial-kernel, dimension-of-subspace, matrix-vector-product, matrix-product, matrix-product-properties, matrix-of-a-linear-map, invertible-matrix, rank-of-a-matrix, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-projection, orthonormal-basis-exists, orthogonal-complement, kernel-of-transpose-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 4절 Least square solution. Formula for the orthogonal projection 의 첫머리와 4.1 Least square solution, 4.1.1 Geometric approach, p.136; 4.1.2 Normal equation 과 4.2 Formula for the orthogonal projection, p.137; 같은 절의 연습문제 4.5, 4.6, pp.141–142
    checked: original
    note: "최소제곱 해의 정의는 출처 4.1(p.136)이 오차 ‖Ax − b‖ 를 가장 작게 하는 x 를 찾으면 'the so-called least square solution' 을 얻는다고 적는 것이다. (1)의 (가)와 (나)가 같다는 것은 출처 4.1.1(p.136)이 'x 를 모두 지나면 Ax 는 Ran A 의 모든 벡터를 지나므로 ‖Ax − b‖ 가 가장 작은 것은 정확히 Ax = P_{Ran A} b 일 때' 라고 적는 것이고, 이 항목은 그것을 2단원 직교사영의 (2)(가장 가까운 원소의 양방향)로 증명했다. (나)와 (다), (다)와 (라)가 같다는 것은 출처 4.1.2(p.137)가 열마다의 직교 조건을 모아 정규방정식 A*Ax = A*b 를 얻는 것이고, 이 항목은 3단원 kernel-of-transpose-product 의 (5)로 한 번에 썼다. 출처는 Ran A 로 쓰고 이 사이트는 같은 집합을 열공간 Col A 로 쓴다. (2)의 존재는 Ran A 로의 직교사영이 있어야 나오는데, 이 항목은 Col A 가 유한차원이라는 것으로 그것을 보였다. (4)의 '해가 하나뿐인 것은 정확히 A*A 가 가역일 때' 는 출처 4.1.2 끝(p.137)이 적는 문장이고, 이 항목은 그것을 열의 일차독립과 같은 조건으로 진술해 (3)과 kernel-of-transpose-product 의 (4)로 증명했다. (4)의 해의 식과 (5)의 행렬 A(A*A)⁻¹A* 는 출처 4.2(p.137)이다. (3)은 출처 연습문제 4.6(p.142)이 '최소제곱 해 가운데 노름이 가장 작은 것' 을 다룰 때 쓰는 최소제곱 해 전체와 같은 대상이고, (6)은 출처 4절 첫머리(p.136)가 'Ax = b 는 정확히 b ∈ Ran A 일 때 해를 갖는다' 고 적고 4.1 이 '오차가 0 이 되는 x 를 찾으면 정확한 해를 얻는다' 고 적는 것과 같은 내용이다. 출처가 언급하는 편미분의 길(p.136)은 쓰지 않았다. 예시 'ℝ³ 의 세 식으로 된 연립방정식의 최소제곱 해' 는 출처 연습문제 4.1(p.141)이 해가 없는 3 × 2 연립방정식의 최소제곱 해를 구하게 하는 것과 같은 발상이고, 그 행렬의 열이 (1, 1, 1) 과 (1, 2, 3) 이어서 출처 4.3(p.138)의 직선 맞추기의 행렬과 같은 꼴(점 (1, 1), (2, 1), (3, 4) 에 직선을 맞추는 것)이다. 반례 '식 몇 개만 맞추면 최소제곱 해가 아닐 수 있는 예' 는 같은 예시의 행렬을 쓴다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이며 $b \in \mathbb{R}^m$이라 하자. $\mathbb{R}^n$과 $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$과 열공간 $\operatorname{Col} A$는 [[rank-of-a-matrix|행렬의 계수]]의 것이고, $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상, $\operatorname{Ker}$는 [[kernel-and-range|핵과 상]]의 것, $S^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이다. $\operatorname{Col} A$는 $\mathbb{R}^m$의 유한차원 부분공간이므로 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 [[orthogonal-projection|직교사영]] $\operatorname{proj}_{\operatorname{Col} A} : \mathbb{R}^m \to \mathbb{R}^m$이 정해진다. $p = \operatorname{proj}_{\operatorname{Col} A} b$로 쓴다.

$x \in \mathbb{R}^n$이 방정식 $Ax = b$의 **최소제곱 해**(least squares solution)인 것은 정확히 모든 $y \in \mathbb{R}^n$에서
$$
\lVert Ax - b \rVert \le \lVert Ay - b \rVert
$$
일 때이다. $x$에 관한 방정식 $A^T A x = A^T b$를 $Ax = b$의 **정규방정식**(normal equation)이라 한다.

1. (판정) $x \in \mathbb{R}^n$에 대하여 다음 넷은 서로 같다. 곧 어느 하나가 성립하면 나머지가 모두 성립한다.
   - (가) $x$는 $Ax = b$의 최소제곱 해이다.
   - (나) $Ax = p$이다.
   - (다) $b - Ax \in (\operatorname{Col} A)^\perp$이다.
   - (라) $A^T A x = A^T b$이다.
2. (존재) $Ax = b$의 최소제곱 해가 있다. 모든 최소제곱 해 $x$에서 $\lVert Ax - b \rVert = \lVert b - p \rVert$이다.
3. (해 전체) $x_0$이 $Ax = b$의 최소제곱 해이면, $x \in \mathbb{R}^n$이 최소제곱 해인 것은 정확히 $x - x_0 \in \operatorname{Ker} T_A$일 때이다. 곧 최소제곱 해 전체의 집합은 $\{x_0 + h : h \in \operatorname{Ker} T_A\}$이고, 두 최소제곱 해의 차는 $\operatorname{Ker} T_A$에 속한다.
4. (하나뿐일 때) 최소제곱 해가 하나뿐인 것은 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 [[linear-independence|일차독립]]일 때이다. 이때 $A^T A$는 [[invertible-matrix|가역]]이고 그 하나뿐인 최소제곱 해는 $x = (A^T A)^{-1} A^T b$이다.
5. (사영의 행렬) $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립이면 $\operatorname{proj}_{\operatorname{Col} A}$의 [[matrix-of-a-linear-map|행렬]]은 $m \times m$ 행렬 $A (A^T A)^{-1} A^T$이다.
6. (해가 있을 때) $Ax = b$를 만족하는 $x \in \mathbb{R}^n$이 있으면, $x$가 최소제곱 해인 것은 정확히 $Ax = b$일 때이다. 이때 $p = b$이다.
:::

:::english
Let $m$ and $n$ be natural numbers, $A$ an $m \times n$ matrix, and $b \in \mathbb{R}^m$. Give $\mathbb{R}^n$ and $\mathbb{R}^m$ the standard inner product; norms are those of the entry on norms. The columns $\mathbf{a}_1, \dots, \mathbf{a}_n$ and the column space $\operatorname{Col} A$ are those of the entry on the rank of a matrix, $T_A$ is the linear map of item (2) of the entry on matrix–vector products, $\operatorname{Ker}$ is that of the entry on kernel and range, and $S^\perp$ is that of the entry on orthogonal complements. Since $\operatorname{Col} A$ is a finite-dimensional subspace of $\mathbb{R}^m$, by item (4) of the entry on existence and extension of orthonormal bases the orthogonal projection $\operatorname{proj}_{\operatorname{Col} A} : \mathbb{R}^m \to \mathbb{R}^m$ is defined. Write $p = \operatorname{proj}_{\operatorname{Col} A} b$.

A vector $x \in \mathbb{R}^n$ is a **least squares solution** of the equation $Ax = b$ exactly when for every $y \in \mathbb{R}^n$
$$
\lVert Ax - b \rVert \le \lVert Ay - b \rVert.
$$
The equation $A^T A x = A^T b$ in $x$ is called the **normal equation** of $Ax = b$.

1. (Criteria) For $x \in \mathbb{R}^n$ the following four are equivalent; that is, if one holds, all the others hold.
   - (a) $x$ is a least squares solution of $Ax = b$.
   - (b) $Ax = p$.
   - (c) $b - Ax \in (\operatorname{Col} A)^\perp$.
   - (d) $A^T A x = A^T b$.
2. (Existence) $Ax = b$ has a least squares solution. For every least squares solution $x$, $\lVert Ax - b \rVert = \lVert b - p \rVert$.
3. (All solutions) If $x_0$ is a least squares solution of $Ax = b$, then $x \in \mathbb{R}^n$ is a least squares solution exactly when $x - x_0 \in \operatorname{Ker} T_A$. That is, the set of all least squares solutions is $\{x_0 + h : h \in \operatorname{Ker} T_A\}$, and the difference of two least squares solutions lies in $\operatorname{Ker} T_A$.
4. (Uniqueness) The least squares solution is unique exactly when $\mathbf{a}_1, \dots, \mathbf{a}_n$ are linearly independent. In that case $A^T A$ is invertible and the unique least squares solution is $x = (A^T A)^{-1} A^T b$.
5. (Matrix of the projection) If $\mathbf{a}_1, \dots, \mathbf{a}_n$ are linearly independent, then the matrix of $\operatorname{proj}_{\operatorname{Col} A}$ is the $m \times m$ matrix $A (A^T A)^{-1} A^T$.
6. (When a solution exists) If some $x \in \mathbb{R}^n$ satisfies $Ax = b$, then $x$ is a least squares solution exactly when $Ax = b$. In that case $p = b$.
:::

## 직관

측정값에는 오차가 섞이므로 이론상 해가 있어야 할 연립방정식 $Ax = b$가 해를 갖지 않을 수 있습니다. 그러면 등식을 포기하고 $Ax$가 $b$에 가장 가깝게 되는 $x$를 찾습니다. $\lVert Ax - b \rVert^2$은 각 식의 어긋남의 제곱을 더한 것이므로, 이 $x$를 "최소제곱" 해라 부릅니다.

$x$가 모든 벡터를 지나면 $Ax$는 열공간 $\operatorname{Col} A$의 모든 원소를 지납니다. 그래서 $\lVert Ax - b \rVert$를 가장 작게 하는 것은 $\operatorname{Col} A$에서 $b$에 가장 가까운 원소, 곧 직교사영 $p$를 $Ax$로 만드는 것입니다. 비유하면 바닥(열공간) 위에서 공중의 점 $b$에 가장 가까운 곳은 $b$에서 내린 수선의 발이고, 남은 화살표 $b - Ax$는 바닥과 직각입니다. 직각이라는 조건을 열마다 적으면 $\langle \mathbf{a}_k, b - Ax \rangle = 0$이고, 이것을 모은 것이 정규방정식입니다.

$p$는 늘 있으므로 최소제곱 해도 늘 있습니다. 다만 $Ax = p$를 만족하는 $x$는 $A$의 핵의 원소만큼 흔들릴 수 있어서, 열이 일차종속이면 해가 여럿입니다. $Ax = b$가 처음부터 해를 가지면 $b$가 이미 바닥 위에 있으므로 $p = b$이고, 최소제곱 해는 보통의 해와 같습니다.

## 증명

:::idea
$Ay$가 $\operatorname{Col} A$의 모든 원소를 지나므로 최소제곱 해는 직교사영의 "가장 가까운 원소" 성질로 $Ax = p$와 같아지고, 직교 여공간과 $A^T$의 핵의 관계로 정규방정식과 같아진다. 나머지는 $Ax = p$의 해 집합을 보는 것이다.
:::

:::hint
[[orthogonal-projection|직교사영]]의 (2)는 $w \in E$가 직교사영인 것이 정확히 $E$의 모든 원소 $z$에서 $\lVert v - w \rVert \le \lVert v - z \rVert$일 때라고 말합니다. $E = \operatorname{Col} A$, $v = b$, $w = Ax$로 두어 보세요.
:::

:::hint
$b - Ax \in (\operatorname{Col} A)^\perp$를 $A^T$로 옮기는 데는 [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (5)를 씁니다.
:::

:::proof
아래에서 (B2)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다. [[orthogonal-projection|직교사영]], [[orthogonal-complement|직교 여공간]], [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]], [[rank-of-a-matrix|행렬의 계수]], [[matrix-vector-product|행렬과 벡터의 곱]], [[matrix-product|행렬의 곱]]의 번호는 "직교사영의 (2)", "직교 여공간의 (2)", "AᵀA 항목의 (5)", "계수의 (2)", "곱의 (5)", "행렬의 곱의 (1)"처럼 줄여 쓴다. $E = \operatorname{Col} A$로 둔다.

**준비.** 계수의 정의와 행렬과 벡터의 곱의 (6)에 의해 $E = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n) = \operatorname{Ran} T_A$이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $E$는 유한차원인 부분공간이다. 따라서 진술 첫머리의 $\operatorname{proj}_E$가 정해지고 $p \in E$이다. 또 [[norm-in-inner-product-space|내적공간의 노름]]의 (3)에 의해 모든 $y$에서 $\lVert Ay - b \rVert = \lVert b - Ay \rVert$이다.

**(1)의 증명.** (가)와 (나): $x \in \mathbb{R}^n$이라 하자. $Ax \in \operatorname{Ran} T_A = E$이다. $\operatorname{Ran} T_A = E$이므로 $E$의 원소는 정확히 $y \in \mathbb{R}^n$에 대한 $Ay$들이다. 따라서 (가)는 "$E$의 모든 원소 $z$에서 $\lVert b - Ax \rVert \le \lVert b - z \rVert$"와 같고, 직교사영의 (2)에 의해 이것은 정확히 $Ax$가 $b$의 $E$로의 직교사영일 때이다. 직교사영의 (1)의 유일성에 의해 이것은 정확히 $Ax = p$일 때이다.

(나)와 (다): $Ax \in E$이므로 직교 여공간의 (2)의 마지막 문장에 의해 $Ax$가 $b$의 $E$로의 직교사영인 것은 정확히 $b - Ax \in E^\perp$일 때이고, 앞 문단과 같이 이것은 정확히 $Ax = p$일 때이다.

(다)와 (라): AᵀA 항목의 (5)에 의해 $b - Ax \in E^\perp$인 것은 정확히 $A^T(b - Ax) = 0$일 때이다. 곱의 (2)에 의해 $T_{A^T}$는 선형사상이므로 [[linear-map|선형사상]]의 (T2)와 행렬의 곱의 (1)에 의해 $A^T(b - Ax) = A^T b - A^T(Ax) = A^T b - (A^T A)x$이고, (B12)에 의해 이것이 $0$인 것은 정확히 $(A^T A)x = A^T b$일 때이다.

**(2)의 증명.** $p \in E = \operatorname{Ran} T_A$이므로 $Ax = p$인 $x \in \mathbb{R}^n$이 있고, (1)에 의해 그것은 최소제곱 해이다. 모든 최소제곱 해 $x$에서 (1)에 의해 $Ax = p$이므로 준비의 등식에 의해 $\lVert Ax - b \rVert = \lVert b - Ax \rVert = \lVert b - p \rVert$이다.

**(3)의 증명.** (1)에 의해 최소제곱 해 전체의 집합은 $\{x \in \mathbb{R}^n : Ax = p\}$이고, $x_0$이 최소제곱 해이므로 $Ax_0 = p$이다. [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (2)를 $T_A$와 $p$에 쓰면 이 집합은 $\{x_0 + h : h \in \operatorname{Ker} T_A\}$이다. $x = x_0 + h$이면 아래 계산으로 $x - x_0 = h$이고, 거꾸로 $x - x_0 = h \in \operatorname{Ker} T_A$이면 $x = x_0 + h$이다. 곧 $x$가 최소제곱 해인 것은 정확히 $x - x_0 \in \operatorname{Ker} T_A$일 때이다. 마지막 문장은 이것을 $x_0$으로 쓸 최소제곱 해에 적용한 것이다.

여기서 쓴 두 계산은 다음과 같다. $x = x_0 + h$이면 [[vector-space|(V1)]], (V2), (B2), (H0)([[finite-sum-of-vectors|벡터의 유한 합]])에 의해 $x - x_0 = (h + x_0) + (-x_0) = h + (x_0 + (-x_0)) = h + 0 = h$이다(마지막 등식은 (V1)과 (H0)). 거꾸로 $x - x_0 = h$이면 같은 성질들에 의해 $x_0 + h = x_0 + ((-x_0) + x) = (x_0 + (-x_0)) + x = 0 + x = x$이다.

**(4)의 증명.** (2)에 의해 최소제곱 해 $x_0$이 있다. $\operatorname{Ker} T_A = \{0\}$이면 (3)에 의해 최소제곱 해는 $x_0 + 0 = x_0$ 하나뿐이다. $\operatorname{Ker} T_A$에 $h \ne 0$이 있으면 (3)에 의해 $x_0 + h$도 최소제곱 해이고, (3)의 증명의 계산에 의해 $(x_0 + h) - x_0 = h \ne 0$이므로 (B12)에 의해 $x_0 + h \ne x_0$이어서 최소제곱 해가 둘 이상이다. 따라서 최소제곱 해가 하나뿐인 것은 정확히 $\operatorname{Ker} T_A = \{0\}$일 때이다. 단사인 선형사상과 핵의 (1)에 의해 이것은 정확히 $T_A$가 단사일 때이고, 계수의 (2)에 의해 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립일 때이다.

열이 일차독립이면 AᵀA 항목의 (4)에 의해 $A^T A$는 가역이다. $x = (A^T A)^{-1} A^T b$로 두면, 행렬의 곱의 (1)과 [[matrix-product-properties|행렬의 곱의 성질]]의 (1), [[invertible-matrix|가역행렬]]의 (1), 곱의 (3)에 의해
$$
\begin{aligned}
(A^T A)x &= (A^T A)\bigl((A^T A)^{-1}(A^T b)\bigr) \\
&= \bigl((A^T A)(A^T A)^{-1}\bigr)(A^T b) \\
&= I_n (A^T b) = A^T b
\end{aligned}
$$
이므로 (1)에 의해 $x$는 최소제곱 해이고, 하나뿐이므로 그것이 그 해이다.

**(5)의 증명.** 열이 일차독립이라 하자. $(A^T A)^{-1}$은 $n \times n$, $A^T$는 $n \times m$ 행렬이므로 행렬의 곱의 성질의 (1)에 의해 $M = A (A^T A)^{-1} A^T$는 괄호를 어떻게 치든 같은 $m \times m$ 행렬이다. $c \in \mathbb{R}^m$이라 하자. (4)를 $b$ 대신 $c$에 쓰면 $x_c = (A^T A)^{-1} A^T c$는 $Ax = c$의 최소제곱 해이고, (1)에 의해 $Ax_c = \operatorname{proj}_E c$이다. 행렬의 곱의 (1)에 의해 $Mc = A\bigl(((A^T A)^{-1} A^T) c\bigr) = Ax_c$이다. 한편 선형사상의 행렬의 (1)에 의해 $[\operatorname{proj}_E] c = \operatorname{proj}_E c$이다. 따라서 모든 $c$에서 $Mc = [\operatorname{proj}_E] c$이고, 곱의 (5)에 의해 $[\operatorname{proj}_E] = M$이다([[matrix-of-a-linear-map|선형사상의 행렬]]).

**(6)의 증명.** $Ax_1 = b$인 $x_1$이 있다고 하자. $b = Ax_1 \in \operatorname{Ran} T_A = E$이므로 직교사영의 (1)에 의해 $b$의 $E$로의 직교사영은 $b$ 자신이고 $p = b$이다. (1)에 의해 $x$가 최소제곱 해인 것은 정확히 $Ax = p = b$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 세 식으로 된 연립방정식의 최소제곱 해]
$$
A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}, \qquad b = (1, 1, 4)
$$
라 합시다. $Ax = b$는 $x_1 + x_2 = 1$, $x_1 + 2x_2 = 1$, $x_1 + 3x_2 = 4$입니다. 앞의 두 식에서 $x_2 = 0$, $x_1 = 1$인데 이것은 셋째 식을 만족하지 않으므로 해가 없습니다. 열 $\mathbf{a}_1 = (1, 1, 1)$, $\mathbf{a}_2 = (1, 2, 3)$은 일차독립이므로(둘째 성분에서 첫째 성분을 빼 보면 $c_2 = 0$, 이어서 $c_1 = 0$입니다) (4)에 의해 최소제곱 해는 하나입니다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)와 (3)에 의해
$$
\begin{aligned}
A^T A &= \begin{pmatrix} 3 & 6 \\ 6 & 14 \end{pmatrix}, \\
A^T b &= (6, 15)
\end{aligned}
$$
이므로 정규방정식은 $3x_1 + 6x_2 = 6$, $6x_1 + 14x_2 = 15$입니다. 첫 식의 두 배를 빼면 $2x_2 = 3$, 곧 $x_2 = \tfrac{3}{2}$이고 $x_1 = 2 - 2x_2 = -1$입니다. 이때 $Ax = \bigl(\tfrac{1}{2}, 2, \tfrac{7}{2}\bigr)$이고 $b - Ax = \bigl(\tfrac{1}{2}, -1, \tfrac{1}{2}\bigr)$은 $\langle \mathbf{a}_1, b - Ax \rangle = \tfrac{1}{2} - 1 + \tfrac{1}{2} = 0$, $\langle \mathbf{a}_2, b - Ax \rangle = \tfrac{1}{2} - 2 + \tfrac{3}{2} = 0$이어서 (1)의 (다)와 맞습니다. 가장 작은 오차는 $\lVert b - Ax \rVert^2 = \tfrac{1}{4} + 1 + \tfrac{1}{4} = \tfrac{3}{2}$입니다.
:::

:::counterexample[식 몇 개만 맞추면 최소제곱 해가 아닐 수 있는 예]
위의 예시에서 앞의 두 식만 정확히 맞추는 $y = (1, 0)$을 잡으면 $Ay = (1, 1, 1)$이고 $\lVert Ay - b \rVert^2 = 0 + 0 + 9 = 9$입니다. 이것은 최소제곱 해의 $\tfrac{3}{2}$보다 크므로 $y$는 최소제곱 해가 아닙니다. 실제로 $A^T A y = (3, 6) \ne (6, 15) = A^T b$여서 정규방정식을 만족하지 않습니다. 오차를 몇 개의 식에 몰아 두는 것보다 모든 식에 고루 나누는 쪽이 제곱의 합이 작을 수 있습니다.
:::

## 확인 질문

:::check[$b$가 $\operatorname{Col} A$와 직교하면 최소제곱 해는 무엇인가?]
$b \in (\operatorname{Col} A)^\perp$이면 $b - A0 = b \in (\operatorname{Col} A)^\perp$이므로 (1)의 (다)에 의해 $0$은 최소제곱 해이고, (3)에 의해 최소제곱 해 전체는 $\operatorname{Ker} T_A$입니다. 이때 $p = A0 = 0$이어서 가장 좋은 근사는 영벡터입니다.
:::

:::check[$A$가 $m \times n$ 영행렬이면 최소제곱 해는 무엇인가?]
$\operatorname{Ker} T_A = \mathbb{R}^n$이고 모든 $y$에서 $\lVert Ay - b \rVert = \lVert b \rVert$이므로, 정의에 의해 $\mathbb{R}^n$의 모든 원소가 최소제곱 해입니다. (3)과도 맞습니다.
:::
