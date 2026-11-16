---
title: 피벗 열과 계수
title_en: Pivot Columns and Rank
aliases: [피벗 열, 피벗의 개수와 계수, 열공간의 기저 구하기, pivot columns, rank equals number of pivots, basis of the column space]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 행렬 A 를 기본행렬의 곱 E 로 기약 사다리꼴 EA 로 만들면, 피벗의 개수가 A 의 계수이고, EA 의 피벗 열과 같은 번호의 A 의 열들이 A 의 열공간의 기저이다. 따라서 A 의 열이 일차독립인지, ℝᵐ 을 생성하는지, 기저인지를 피벗의 개수로 판정할 수 있고, 피벗의 개수는 E 를 고르는 방법에 따르지 않는다.
requires: [well-ordering-principle, real-function-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, subspace, basis-iff-independent-and-spanning, linear-map, sequences-in-a-subspace, dimension-of-subspace, rank-and-nullity, matrix, matrix-vector-product, matrix-product, invertible-matrix, rank-of-a-matrix, row-equivalence, echelon-form, row-reduction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3.1절 Proposition 3.1, p.48; 7.1 Computing fundamental subspaces and rank, p.60; 7.2.2 The column space Ran A, pp.62–63"
    checked: original
    note: "출처 Proposition 3.1(p.48)은 Fⁿ 의 벡터 v_1, …, v_m 을 열로 하는 행렬 A 에 대하여, 그 벡터들이 일차독립인 것은 A 의 사다리꼴의 모든 열에 피벗이 있을 때, Fⁿ 을 생성하는 것은 모든 행에 피벗이 있을 때, 기저인 것은 둘 다일 때라고 적고, 연립방정식의 해의 분석(3절 첫머리의 진술 1–3)으로 증명한다. 출처 7.1(p.60)은 원래 행렬 A 의 피벗 열(행 연산 뒤 피벗이 오는 열)이 Ran A 의 기저를 준다고 적고, 7.2.2(pp.62–63)에서 그 이유를 적는다. 기약 사다리꼴의 피벗 열이 그 기약 사다리꼴의 열공간의 기저라는 것을 먼저 들고(원래 행렬의 열공간이 아니라고 강조한다), 행 연산은 가역행렬을 왼쪽에 곱하는 것이므로 일차독립을 바꾸지 않는다는 것과, 피벗 열의 생성이 E⁻¹ 을 곱해 원래 행렬로 옮겨진다는 계산으로 설명한다. 이 항목의 (2)는 그 계산의 생성 부분을 그대로 따르고, 일차독립은 계수가 r 이라는 (1)과 dimension-of-subspace 의 (4)로 얻는다. 출처는 계수가 피벗의 개수와 같다는 것을 7.3절(p.64)에서 차원을 피벗 수로 세어 쓴다. 이 항목의 (1)은 행 동치가 계수를 바꾸지 않는다는 것과 기약 사다리꼴의 계수가 r 이라는 것으로 증명하고, (3)은 rank-of-a-matrix 의 (2), (3)으로 증명한다. 피벗의 개수가 E 를 고르는 방법에 따르지 않는다는 문장은 출처 연습문제 3.9(p.52)의 힌트와 관련되지만, 이 항목은 피벗 열의 위치나 기약 사다리꼴 자체의 유일성은 다루지 않는다. 반례(기약 사다리꼴의 피벗 열은 원래 행렬의 열공간의 기저가 아닐 수 있다)는 출처 7.2.2 의 강조와 같은 발상이다. 예시는 출처 7.1 의 4 × 5 예(p.60)와 다른 행렬로 새로 만들었고, 확인 질문은 출처 3절 연습문제 3.2, 3.3, 3.5 와 7절 연습문제 7.1 을 다시 읽고 겹치지 않게 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이며, $E$가 $m \times m$ [[row-equivalence|기본행렬의 곱]]이고 $U = EA$가 [[echelon-form|기약 사다리꼴]]이라 하자. $U$의 피벗의 개수를 $r$, 피벗 열의 번호를 $\ell_1, \dots, \ell_r$이라 한다. ([[row-reduction|행 소거]]의 (2)에 의해 이런 $E$는 언제나 있다.) $\operatorname{Col} A$와 $\operatorname{rank} A$는 [[rank-of-a-matrix|행렬의 계수]]의 것이다.

1. (피벗의 개수는 계수) $\operatorname{rank} A = r$이고 $\operatorname{nullity} T_A = n - r$이다. 따라서 $E'$도 $m \times m$ 기본행렬의 곱이고 $E'A$가 기약 사다리꼴이면, $E'A$의 피벗의 개수도 $r$이다.
2. (피벗 열은 열공간의 기저) 모든 $k \in \{1, \dots, n\}$에서 $\mathbf{a}_k = E^{-1}\mathbf{u}_k$이고, 특히 $1 \le j \le r$에서 $\mathbf{a}_{\ell_j} = E^{-1}e_j$이다. $A$의 $\ell_1, \dots, \ell_r$번째 열로 된 길이 $r$인 벡터의 열 $\mathbf{a}_{\ell_1}, \dots, \mathbf{a}_{\ell_r}$은 벡터공간 $\operatorname{Col} A$([[subspace|(P1)]]의 제한한 연산)의 [[basis|기저]]이다.
3. (열에 관한 판정) $A$의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 [[linear-independence|일차독립]]인 것은 정확히 $r = n$일 때이고, $\mathbb{R}^m$을 [[linear-combination-and-span|생성]]하는 것은 정확히 $r = m$일 때이며, $\mathbb{R}^m$의 기저인 것은 정확히 $r = n$이고 $r = m$일 때이다.
:::

:::english
Let $m$, $n$ be natural numbers, let $A$ be an $m \times n$ matrix, let $E$ be an $m \times m$ product of elementary matrices, and suppose $U = EA$ is in reduced echelon form. Let $r$ be the number of pivots of $U$ and $\ell_1, \dots, \ell_r$ its pivot column indices. (By (2) of the entry on row reduction, such an $E$ always exists.) $\operatorname{Col} A$ and $\operatorname{rank} A$ are as in the entry on the rank of a matrix.

1. (The number of pivots is the rank) $\operatorname{rank} A = r$ and $\operatorname{nullity} T_A = n - r$. Hence, if $E'$ is also an $m \times m$ product of elementary matrices and $E'A$ is in reduced echelon form, then the number of pivots of $E'A$ is also $r$.
2. (Pivot columns form a basis of the column space) For every $k \in \{1, \dots, n\}$, $\mathbf{a}_k = E^{-1}\mathbf{u}_k$; in particular $\mathbf{a}_{\ell_j} = E^{-1}e_j$ for $1 \le j \le r$. The sequence of vectors $\mathbf{a}_{\ell_1}, \dots, \mathbf{a}_{\ell_r}$ of length $r$, formed by the $\ell_1$-th, …, $\ell_r$-th columns of $A$, is a basis of the vector space $\operatorname{Col} A$ (with the restricted operations of (P1)).
3. (Tests on the columns) The columns $\mathbf{a}_1, \dots, \mathbf{a}_n$ of $A$ are linearly independent exactly when $r = n$, span $\mathbb{R}^m$ exactly when $r = m$, and form a basis of $\mathbb{R}^m$ exactly when $r = n$ and $r = m$.
:::

## 직관

행 연산은 열공간을 바꿀 수 있지만 열들 사이의 관계는 바꾸지 않습니다. $E$가 가역이므로 $c_1\mathbf{a}_1 + \cdots + c_n\mathbf{a}_n = 0$인 것과 $c_1\mathbf{u}_1 + \cdots + c_n\mathbf{u}_n = 0$인 것이 같은 조건이기 때문입니다. 기약 사다리꼴 $U$에서는 관계가 한눈에 보입니다. 피벗 열은 표준기저 벡터 $e_1, \dots, e_r$이고 나머지 열은 모두 그 일차결합입니다. 그래서 같은 번호의 $A$의 열, 곧 $A$의 피벗 열이 $A$의 열공간의 기저가 됩니다.

번역에 비유하면, $E$는 문장의 뜻을 보존하는 번역입니다. 번역본 $U$에서 "어느 열이 앞의 열들로 쓰이는가"를 읽어 내면 원문 $A$에서도 같은 답이 나옵니다. 비유가 맞지 않는 곳은, 번역본의 낱말(열 자체)은 원문의 낱말과 다르다는 점입니다. $U$의 피벗 열 $e_1, \dots, e_r$은 $A$의 열공간에 속하지 않을 수 있습니다(아래 반례).

(1)은 여섯째 단원에서 소거 없이 정의한 행렬의 계수를 계산하는 방법입니다. 피벗의 개수는 $E$를 어떻게 골라도 같은데, 그 까닭은 그 수가 $A$만으로 정해지는 계수와 같기 때문입니다.

## 증명

:::idea
$U = EA$에서 행 동치는 계수를 바꾸지 않고 기약 사다리꼴의 계수는 피벗의 개수이다. 피벗 열의 생성은 $E^{-1}$을 곱해 $A$로 옮기고, 일차독립은 길이와 차원을 비교해 얻는다.
:::

:::hint
$\operatorname{rank} A$는 [[row-equivalence|행 동치]]의 (5)로 $\operatorname{rank} U$와 같고, $\operatorname{rank} U$는 [[echelon-form|사다리꼴]]의 (6)으로 구합니다.
:::

:::hint
$U$의 각 열은 $e_1, \dots, e_r$의 일차결합입니다. 여기에 $E^{-1}$을 곱하면 무엇이 되는지 봅니다.
:::

:::proof
**(1)의 증명.** $U = EA$이고 $E$가 기본행렬의 곱이므로 행 동치의 (5)에 의해 $\operatorname{rank} U = \operatorname{rank} A$이다. 사다리꼴의 (6)에 의해 $\operatorname{rank} U = r$이므로 $\operatorname{rank} A = r$이다. [[rank-of-a-matrix|행렬의 계수]]의 (4)에 의해 $\operatorname{nullity} T_A + r = n$이고, 양변에서 $r$을 빼면 [[well-ordering-principle|정렬 원리]] 항목의 (Z7)에 의해 $\operatorname{nullity} T_A = n - r$이다. $E'A$가 피벗이 $r'$개인 기약 사다리꼴이면 같은 이유, 곧 행 동치의 (5)와 사다리꼴의 (6)에 의해 $r' = \operatorname{rank} A = r$이다.

**(2)의 증명.** 행 동치의 (3)에 의해 $E$는 가역이다. [[matrix-product|행렬의 곱]]의 정의에 의해 $U$의 $k$번째 열은 $\mathbf{u}_k = E\mathbf{a}_k$이다. 행렬의 곱의 (1), [[invertible-matrix|가역행렬]]의 (1)의 $E^{-1}E = I_m$, [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해
$$E^{-1}\mathbf{u}_k = E^{-1}(E\mathbf{a}_k) = (E^{-1}E)\mathbf{a}_k = I_m \mathbf{a}_k = \mathbf{a}_k$$
이다. 사다리꼴의 (라)에 의해 $\mathbf{u}_{\ell_j} = e_j$이므로 $\mathbf{a}_{\ell_j} = E^{-1}e_j$이다.

$p_j = \mathbf{a}_{\ell_j}$ ($1 \le j \le r$)라 하자. [[real-function-space|(G)]]에 의해 이것을 항으로 갖는 길이 $r$인 $\mathbb{R}^m$의 벡터의 열 $p_1, \dots, p_r$이 있다. 먼저 $\operatorname{span}(p_1, \dots, p_r) = \operatorname{Col} A$임을 보인다. $k \in \{1, \dots, n\}$을 잡자. 사다리꼴의 (3)에 의해 $\mathbf{u}_k \in \operatorname{span}(e_1, \dots, e_r)$이므로 어떤 실수의 열 $\beta_1, \dots, \beta_r$로 $\mathbf{u}_k = \beta_1 e_1 + \cdots + \beta_r e_r$이다. $T_{E^{-1}}$은 선형사상이므로 [[linear-map|선형사상]]의 (T5)에 의해
$$\mathbf{a}_k = E^{-1}\mathbf{u}_k = \beta_1 E^{-1}e_1 + \cdots + \beta_r E^{-1}e_r = \beta_1 p_1 + \cdots + \beta_r p_r$$
이고, $\mathbf{a}_k \in \operatorname{span}(p_1, \dots, p_r)$이다. [[linear-combination-and-span|생성]]의 (N1)에 의해 $\operatorname{span}(p_1, \dots, p_r)$은 부분공간이므로 (N3)에 의해 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n) \subseteq \operatorname{span}(p_1, \dots, p_r)$이다. 거꾸로 각 $p_j = \mathbf{a}_{\ell_j}$는 (N2)에 의해 $\operatorname{Col} A$에 속하고 $\operatorname{Col} A$는 (N1)에 의해 부분공간이므로, (N3)에 의해 $\operatorname{span}(p_1, \dots, p_r) \subseteq \operatorname{Col} A$이다.

다음으로 일차독립을 보인다. $\operatorname{Col} A$와 $\operatorname{span}(p_1, \dots, p_r)$은 $\mathbb{R}^m$의 같은 부분집합이고 (P1)의 제한한 연산으로 같은 벡터공간이다. (1)과 행렬의 계수의 정의에 의해 이 벡터공간의 차원은 $\operatorname{rank} A = r$이다. [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\operatorname{span}(p_1, \dots, p_r)$의 차원이 그 길이 $r$과 같으므로 $p_1, \dots, p_r$은 일차독립이다. 이 열의 모든 항은 $\operatorname{Col} A$에 속하고 생성이 $\operatorname{Col} A$이므로, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $p_1, \dots, p_r$은 벡터공간 $\operatorname{Col} A$의 기저이다. ($r = 0$이면 빈 열이고, $\operatorname{Col} A = \{0\}$이다.)

**(3)의 증명.** (1)에 의해 $\operatorname{rank} A = r$이다. 행렬의 계수의 (2)에 의해 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립인 것은 정확히 $\operatorname{rank} A = n$, 곧 $r = n$일 때이고, 같은 항목의 (3)에 의해 $\mathbb{R}^m$을 생성하는 것은 정확히 $\operatorname{rank} A = m$, 곧 $r = m$일 때이다. [[basis-iff-independent-and-spanning|기저와 일차독립·생성]]에 의해 기저인 것은 정확히 일차독립이고 생성할 때, 곧 $r = n$이고 $r = m$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 4 행렬의 열공간의 기저]
[[row-reduction|행 소거]] 항목의 예시의
$$A = \begin{pmatrix} 0 & 2 & 4 & 2 \\ 1 & 1 & 1 & 3 \\ 1 & 3 & 5 & 5 \end{pmatrix}, \qquad U = EA = \begin{pmatrix} 1 & 0 & -1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
에서 $r = 2$, $\ell_1 = 1$, $\ell_2 = 2$입니다. (1)에 의해 $\operatorname{rank} A = 2$이고 $\operatorname{nullity} T_A = 4 - 2 = 2$입니다. (2)에 의해 $A$의 첫째와 둘째 열 $(0, 1, 1)$, $(2, 1, 3)$은 $\operatorname{Col} A$의 기저입니다. 나머지 열이 이 둘의 일차결합이라는 것도 확인할 수 있습니다. $\mathbf{u}_3 = (-1)e_1 + 2e_2$이므로 (2)의 $\mathbf{a}_k = E^{-1}\mathbf{u}_k$, $\mathbf{a}_{\ell_j} = E^{-1}e_j$와 [[linear-map|선형사상]]의 (T5)에 의해 $\mathbf{a}_3 = (-1)\mathbf{a}_1 + 2\mathbf{a}_2 = (0, -1, -1) + (4, 2, 6) = (4, 1, 5)$이고, $\mathbf{u}_4 = 2e_1 + 1e_2$이므로 $\mathbf{a}_4 = 2\mathbf{a}_1 + \mathbf{a}_2 = (0, 2, 2) + (2, 1, 3) = (2, 3, 5)$입니다. 두 값 모두 $A$의 셋째, 넷째 열과 같습니다. (3)에 의해 $A$의 네 열은 일차독립이 아니고($2 \ne 4$) $\mathbb{R}^3$을 생성하지 않습니다($2 \ne 3$).
:::

:::counterexample[기약 사다리꼴의 피벗 열은 원래 열공간에 없을 수 있다]
위 예시에서 $U$의 피벗 열은 $e_1 = (1, 0, 0)$과 $e_2 = (0, 1, 0)$이고, 그 생성의 원소는 모두 셋째 값이 $0$입니다. 그런데 $A$의 첫째 열 $(0, 1, 1)$은 $\operatorname{Col} A$에 속하고 셋째 값이 $1$이므로 $\operatorname{span}(e_1, e_2)$에 속하지 않습니다. 따라서 $\operatorname{Col} U \ne \operatorname{Col} A$이고, $e_1$, $e_2$는 $\operatorname{Col} A$의 기저가 아닙니다. 열공간의 기저는 $U$의 열이 아니라 같은 번호의 $A$의 열로 골라야 합니다.
:::

## 확인 질문

:::check[$A$가 $3 \times 5$ 행렬이고 기본행렬의 곱 $E$로 만든 기약 사다리꼴 $EA$의 피벗이 $3$개이면, $\operatorname{nullity} T_A$는 얼마이고 $A$의 열은 $\mathbb{R}^3$을 생성하는가?]
(1)에 의해 $\operatorname{nullity} T_A = 5 - 3 = 2$이고, $r = 3 = m$이므로 (3)에 의해 $A$의 열은 $\mathbb{R}^3$을 생성합니다. $r = 3 \ne 5$이므로 다섯 열은 일차독립이 아닙니다.
:::

:::check[$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$의 열공간의 기저를 이 항목의 방법으로 구하라.]
[[elementary-matrix|기본행렬]]의 (2)에 의해 $R_{2,1}(-2)A = \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$이고, 이것은 $r = 1$, $\ell_1 = 1$인 기약 사다리꼴입니다(둘째 행은 $(2 - 2,\ 4 - 4) = (0, 0)$). $R_{2,1}(-2)$는 기본행렬의 곱이므로 (2)에 의해 $A$의 첫째 열 $(1, 2)$ 하나로 된 벡터의 열이 $\operatorname{Col} A$의 기저이고, (1)에 의해 $\operatorname{rank} A = 1$입니다.
:::
