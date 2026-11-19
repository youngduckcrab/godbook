---
title: 하우스도르프 공간의 부분공간과 곱, 대각선
title_en: Subspaces and Products of Hausdorff Spaces, and the Diagonal
aliases: [하우스도르프 공간의 부분공간, 하우스도르프 공간의 곱, 대각선, diagonal, subspace of a Hausdorff space, product of Hausdorff spaces]
kind: proposition
field: topology
msc: ["54D10", "54B10"]
level: undergrad
summary: 하우스도르프(T₁) 공간에 부분공간 위상을 준 부분집합은 하우스도르프(T₁)이고, 두 하우스도르프 공간의 곱은 하우스도르프이며, 곱이 하우스도르프이고 두 인자가 공집합이 아니면 두 인자도 하우스도르프이다. 공간이 하우스도르프인 것은 정확히 대각선이 곱위상에서 닫혀 있을 때이다.
requires: [set, subset, set-operations, cartesian-product, topological-space, topology-examples, closed-set, neighborhood, subspace-topology, product-topology, hausdorff-space, metric-space-is-hausdorff, standard-topology-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Separation -- part 2 절의 Theorem 과 그 증명 (content/separation.tex:69–76), 연습문제 subspace-Hausdorff, products-Hausdorff 와 그 다음 연습문제 (content/exercises.tex:34, 36, 38–42)"
    checked: original
    note: "(1)의 하우스도르프 부분과 (2)의 (i)은 출처 Theorem(separation.tex:70)의 첫 문장(하우스도르프 공간의 부분공간과 하우스도르프 공간들의 곱은 하우스도르프이다)과 같다. 출처는 부분공간의 경우를 연습문제 subspace-Hausdorff(exercises.tex:34)로 두고, 곱은 연습문제 products-Hausdorff(36)에서 두 공간으로 묻고 Theorem 의 증명(separation.tex:75)에서 임의 개수의 곱에 대해 사영의 역상 π_i⁻¹(U), π_i⁻¹(V) 로 증명한다. 이 항목은 두 공간의 곱만 다루고, 사영의 연속을 쓰지 않고 product-topology 의 (4)의 열린집합 U × X₂ 로 증명한다. (3)은 출처 연습문제(exercises.tex:38–42: X 가 하우스도르프인 것은 정확히 대각선 Δ = {(x, x) ∈ X × X | x ∈ X} 가 곱위상에서 닫혀 있을 때이다)와 같다. 이 항목은 Δ 를 조건으로 정한 부분집합 {(a, b) ∈ X × X : a = b} 로 쓴다. 반례 '밀착위상의 대각선'의 위상은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₁ 이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 근거 없이 결론을 내린 확인 질문 1건, 상수 수열에서 거짓이던 반례 제목, 줄 범위와 빠진 근거를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 열린집합의 국소 판정은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 근방은 [[neighborhood]]의 것이다. $T_1$ 공간과 하우스도르프 공간은 [[hausdorff-space]]의 것이다. 부분공간 위상 $\mathcal{T}|_Y$는 [[subspace-topology]]의 것이고, 곱위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$는 [[product-topology]]의 것이다. 두 위상공간의 곱집합에는 곱위상을 준다.

1. (부분공간) $(X, \mathcal{T})$가 위상공간이고 $Y \subseteq X$라 하자. $(X, \mathcal{T})$가 하우스도르프 공간이면 $(Y, \mathcal{T}|_Y)$도 하우스도르프 공간이고, $(X, \mathcal{T})$가 $T_1$ 공간이면 $(Y, \mathcal{T}|_Y)$도 $T_1$ 공간이다. $Y = \emptyset$이어도 된다.
2. (두 공간의 곱) $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$가 위상공간이라 하자.
   - (i) $(X_1, \mathcal{T}_1)$과 $(X_2, \mathcal{T}_2)$가 하우스도르프 공간이면 $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$도 하우스도르프 공간이다.
   - (ii) $X_1 \ne \emptyset$, $X_2 \ne \emptyset$이고 $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$가 하우스도르프 공간이면 $(X_1, \mathcal{T}_1)$과 $(X_2, \mathcal{T}_2)$는 하우스도르프 공간이다.
   - (iii) (ii)의 가정 $X_1 \ne \emptyset$, $X_2 \ne \emptyset$은 뺄 수 없다. 예컨대 $X_2 = \emptyset$이면 $X_1 \times X_2 = \emptyset$이므로 곱은 어떤 $(X_1, \mathcal{T}_1)$에 대해서도 하우스도르프 공간이고, $X_1$에 서로 다른 두 점이 있고 $\mathcal{T}_1$이 밀착위상이면 $(X_1, \mathcal{T}_1)$은 하우스도르프 공간이 아니다.
3. (대각선) $(X, \mathcal{T})$가 위상공간이고
   $$
   \Delta_X = \{(a, b) \in X \times X : a = b\}
   $$
   를 $X$의 **대각선**(diagonal)이라 하자. 곧 $\Delta_X$는 $x \in X$인 순서쌍 $(x, x)$ 전체의 집합이다. $(X, \mathcal{T})$가 하우스도르프 공간인 것은 정확히 $\Delta_X$가 $(X \times X, \mathcal{T} \otimes \mathcal{T})$에서 닫힌집합일 때이다.
:::

:::english
Topological spaces, open sets and the local test for open sets are as in the entry on topological spaces, closed sets as in the entry on closed sets, and neighborhoods as in the entry on neighborhoods. $T_1$ spaces and Hausdorff spaces are as in the entry on $T_1$ and Hausdorff spaces. The subspace topology $\mathcal{T}|_Y$ is as in the entry on the subspace topology, and the product topology $\mathcal{T}_1 \otimes \mathcal{T}_2$ is as in the entry on the product topology. The product set of two topological spaces carries the product topology.

1. (Subspaces) Let $(X, \mathcal{T})$ be a topological space and $Y \subseteq X$. If $(X, \mathcal{T})$ is a Hausdorff space, then so is $(Y, \mathcal{T}|_Y)$, and if $(X, \mathcal{T})$ is a $T_1$ space, then so is $(Y, \mathcal{T}|_Y)$. Here $Y = \emptyset$ is allowed.
2. (Products of two spaces) Let $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ be topological spaces.
   - (i) If $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are Hausdorff spaces, then so is $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$.
   - (ii) If $X_1 \ne \emptyset$, $X_2 \ne \emptyset$ and $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$ is a Hausdorff space, then $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are Hausdorff spaces.
   - (iii) The hypotheses $X_1 \ne \emptyset$, $X_2 \ne \emptyset$ in (ii) cannot be dropped. For instance, if $X_2 = \emptyset$ then $X_1 \times X_2 = \emptyset$, so the product is a Hausdorff space whatever $(X_1, \mathcal{T}_1)$ is; and if $X_1$ has two distinct points and $\mathcal{T}_1$ is the indiscrete topology, then $(X_1, \mathcal{T}_1)$ is not a Hausdorff space.
3. (The diagonal) Let $(X, \mathcal{T})$ be a topological space, and call
   $$
   \Delta_X = \{(a, b) \in X \times X : a = b\}
   $$
   the **diagonal** of $X$; that is, $\Delta_X$ is the set of all ordered pairs $(x, x)$ with $x \in X$. Then $(X, \mathcal{T})$ is a Hausdorff space exactly when $\Delta_X$ is closed in $(X \times X, \mathcal{T} \otimes \mathcal{T})$.
:::

## 직관

하우스도르프는 "서로 다른 두 점을 서로소인 두 열린집합으로 가를 수 있다"는 성질입니다. 부분공간 위상의 열린집합은 원래 열린집합을 $Y$로 자른 것이므로, $X$에서 두 점을 가른 두 열린집합을 $Y$로 자르면 그대로 $Y$에서 두 점을 가릅니다((1)). 서로소인 두 집합을 같은 집합으로 잘라도 서로소이기 때문입니다.

곱 $X_1 \times X_2$의 서로 다른 두 점은 첫째 성분이 다르거나 둘째 성분이 다릅니다. 첫째 성분이 다르면 $X_1$에서 그 두 성분을 가른 두 열린집합에 $X_2$ 전체를 곱해 띠 모양의 두 열린집합을 만들고, 그 두 띠는 서로소입니다((2)의 (i)). 거꾸로 곱에서 두 점을 가를 수 있으면, 둘째 성분을 같게 둔 두 점 $(x, y)$, $(x', y)$를 가른 열린집합 안의 곱 꼴 기저 원소에서 첫째 성분 쪽만 떼어 내면 $x$와 $x'$을 가르는 열린집합이 나옵니다. 이때 둘째 성분으로 쓸 점 $y$가 있어야 하므로 $X_2 \ne \emptyset$이 필요합니다((2)의 (ii), (iii)).

(3)은 하우스도르프를 곱공간의 닫힌집합 하나로 바꿔 말합니다. 대각선 밖의 점 $(x, y)$는 $x \ne y$인 점이고, 그 점을 품고 대각선과 만나지 않는 곱 꼴 열린집합 $U \times V$가 있다는 것은 정확히 $x$, $y$를 서로소인 $U$, $V$로 가를 수 있다는 것입니다. $U \times V$가 대각선과 만나는 것은 $U$와 $V$가 공통의 점 $z$를 가져 $(z, z) \in U \times V$일 때뿐이기 때문입니다.

## 증명

:::idea
부분공간에서는 두 근방을 $Y$로 자르고, 곱에서는 다른 성분 쪽의 두 근방에 나머지 인자 전체를 곱한다. 대각선은 "$U \times V$가 대각선과 만나지 않는다"와 "$U \cap V = \emptyset$"이 같은 말이라는 데서 나온다.
:::

:::hint
$(x, y) \ne (x', y')$이면 $x \ne x'$이거나 $y \ne y'$입니다. 앞의 경우 $U \times X_2$ 꼴의 집합을 생각해 보세요.
:::

:::hint
대각선의 여집합이 열려 있는지는 [[product-topology]]의 (3)의 판정으로 확인합니다. 여집합의 점 $(x, y)$에서 $U \times V$가 여집합에 들어간다는 것을 $U$와 $V$의 말로 옮겨 보세요.
:::

:::proof
아래에서 "곱위상 (3)"처럼 쓴 것은 [[product-topology]]의 번호이다. 두 순서쌍 $(x, y)$, $(x', y')$이 같은 것은 정확히 $x = x'$이고 $y = y'$일 때이다([[cartesian-product]]).

**(1).** $(X, \mathcal{T})$가 하우스도르프 공간이고 $y_1$, $y_2$가 $Y$의 서로 다른 점이라 하자. $Y \subseteq X$이므로 $y_1$, $y_2$는 $X$의 서로 다른 점이고, $U \cap V = \emptyset$인 $X$에서의 $y_1$의 근방 $U$와 $y_2$의 근방 $V$가 있다. 부분공간 위상의 정의에 의해 $U \cap Y$와 $V \cap Y$는 $\mathcal{T}|_Y$의 원소이다. $y_1 \in U$이고 $y_1 \in Y$이므로 $y_1 \in U \cap Y$이고, 같은 방식으로 $y_2 \in V \cap Y$이다. 따라서 둘은 $(Y, \mathcal{T}|_Y)$에서 각각 $y_1$, $y_2$의 근방이다. $(U \cap Y) \cap (V \cap Y) \subseteq U \cap V = \emptyset$이므로 둘은 서로소이다. 그러므로 $(Y, \mathcal{T}|_Y)$는 하우스도르프 공간이다.

$(X, \mathcal{T})$가 $T_1$ 공간이고 $y_1$, $y_2$가 $Y$의 서로 다른 점이면 $y_2 \notin U$인 $X$에서의 $y_1$의 근방 $U$가 있다. 위와 같이 $U \cap Y$는 $(Y, \mathcal{T}|_Y)$에서 $y_1$의 근방이고, $U \cap Y \subseteq U$이므로 $y_2 \notin U \cap Y$이다. 그러므로 $(Y, \mathcal{T}|_Y)$는 $T_1$ 공간이다. $Y = \emptyset$이면 위의 논증은 확인할 두 점이 없는 경우로서 그대로 성립한다([[hausdorff-space]]의 (3)과 같다).

**(2)의 (i).** $(x, y)$, $(x', y')$이 $X_1 \times X_2$의 서로 다른 점이라 하자. 그러면 $x \ne x'$이거나 $y \ne y'$이다.

$x \ne x'$이면, $(X_1, \mathcal{T}_1)$이 하우스도르프 공간이므로 $U \cap U' = \emptyset$인 $x$의 근방 $U$와 $x'$의 근방 $U'$이 있다. 곱위상 (4)에 의해 $U \times X_2$와 $U' \times X_2$는 곱위상에서 열린집합이다. $x \in U$, $y \in X_2$이므로 $(x, y) \in U \times X_2$이고, 같은 방식으로 $(x', y') \in U' \times X_2$이다. 곱위상 (1)의 (a)에 의해 $(U \times X_2) \cap (U' \times X_2) = (U \cap U') \times (X_2 \cap X_2) = \emptyset \times X_2$이고, 곱위상 (1)의 (b)에 의해 이것은 공집합이다. 따라서 $U \times X_2$와 $U' \times X_2$는 서로소인 $(x, y)$의 근방과 $(x', y')$의 근방이다.

$y \ne y'$이면, $(X_2, \mathcal{T}_2)$가 하우스도르프 공간이므로 $V \cap V' = \emptyset$인 $y$의 근방 $V$와 $y'$의 근방 $V'$이 있다. 곱위상 (4)에 의해 $X_1 \times V$와 $X_1 \times V'$은 열린집합이고, $(x, y) \in X_1 \times V$, $(x', y') \in X_1 \times V'$이다. 곱위상 (1)의 (a), (b)에 의해 $(X_1 \times V) \cap (X_1 \times V') = X_1 \times (V \cap V') = X_1 \times \emptyset = \emptyset$이다.

두 경우 모두 서로소인 두 근방이 있으므로 곱은 하우스도르프 공간이다.

**(2)의 (ii).** $X_1 \ne \emptyset$, $X_2 \ne \emptyset$이고 곱이 하우스도르프 공간이라 하자.

먼저 $(X_1, \mathcal{T}_1)$을 본다. $x$, $x'$이 $X_1$의 서로 다른 점이라 하고, $X_2$의 점 $y$를 하나 잡는다. $x \ne x'$이므로 $(x, y) \ne (x', y)$이고, $W \cap W' = \emptyset$인 곱위상에서의 $(x, y)$의 근방 $W$와 $(x', y)$의 근방 $W'$이 있다. 곱위상 (3)의 (a)에서 (b)로, $x \in U$, $y \in V$, $U \times V \subseteq W$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있고, $x' \in U'$, $y \in V'$, $U' \times V' \subseteq W'$인 $U' \in \mathcal{T}_1$, $V' \in \mathcal{T}_2$가 있다. $U$는 $x$의 근방, $U'$은 $x'$의 근방이다. $z \in U \cap U'$인 $z$가 있다면, $y \in V \cap V'$이므로 $(z, y) \in U \times V \subseteq W$이고 $(z, y) \in U' \times V' \subseteq W'$이어서 $(z, y) \in W \cap W' = \emptyset$이 되어 모순이다. 따라서 $U \cap U' = \emptyset$이고 $(X_1, \mathcal{T}_1)$은 하우스도르프 공간이다.

$(X_2, \mathcal{T}_2)$도 같은 방식이다. $y$, $y'$이 $X_2$의 서로 다른 점이라 하고 $X_1$의 점 $x$를 하나 잡는다. $(x, y) \ne (x, y')$이므로 서로소인 근방 $W$, $W'$이 있고, 곱위상 (3)에 의해 $x \in U$, $y \in V$, $U \times V \subseteq W$와 $x \in U'$, $y' \in V'$, $U' \times V' \subseteq W'$인 $U, U' \in \mathcal{T}_1$, $V, V' \in \mathcal{T}_2$가 있다. $z \in V \cap V'$이면 $x \in U \cap U'$이므로 $(x, z) \in W \cap W' = \emptyset$이 되어 모순이다. 따라서 $V \cap V' = \emptyset$이고, $V$, $V'$은 $y$, $y'$의 서로소인 근방이다.

**(2)의 (iii).** $X_2 = \emptyset$이면 곱위상 (1)의 (b)에 의해 $X_1 \times X_2 = \emptyset$이고, [[hausdorff-space]]의 (3)에 의해 곱은 하우스도르프 공간이다. $X_1$에 서로 다른 두 점이 있고 $\mathcal{T}_1$이 밀착위상이면 [[hausdorff-space]]의 (4)에 의해 $(X_1, \mathcal{T}_1)$은 하우스도르프 공간이 아니다.

**(3).** $Z = (X \times X) - \Delta_X$로 둔다. $(a, b) \in X \times X$에 대하여 $(a, b) \in Z$인 것은 정확히 $a \ne b$일 때이다. 먼저 다음을 보인다.

(가) $U$, $V \subseteq X$이면, $U \times V \subseteq Z$인 것은 정확히 $U \cap V = \emptyset$일 때이다.

$U \cap V$의 원소 $z$가 있으면 $(z, z) \in U \times V$이고 $(z, z) \in \Delta_X$이므로 $U \times V \not\subseteq Z$이다. 거꾸로 $U \cap V = \emptyset$이고 $(a, b) \in U \times V$이면 $a \in U$, $b \in V$이다. $a = b$라면 $a \in U \cap V$가 되어 모순이므로 $a \ne b$이고 $(a, b) \in Z$이다. 따라서 $U \times V \subseteq Z$이다.

$(X, \mathcal{T})$가 하우스도르프 공간이라 하자. $Z$의 점 $(x, y)$를 잡으면 $x \ne y$이므로 $U \cap V = \emptyset$인 $x$의 근방 $U$와 $y$의 근방 $V$가 있고, (가)에 의해 $U \times V \subseteq Z$이다. 곱위상 (3)의 (b)에서 (a)로 $Z$는 곱위상에서 열린집합이고, 닫힌집합의 정의에 의해 $\Delta_X$는 닫힌집합이다.

거꾸로 $\Delta_X$가 닫힌집합이라 하자. 닫힌집합의 정의에 의해 $Z$는 곱위상에서 열린집합이다. $x$, $y$가 $X$의 서로 다른 점이면 $(x, y) \in Z$이므로, 곱위상 (3)의 (a)에서 (b)로 $x \in U$, $y \in V$, $U \times V \subseteq Z$인 $U, V \in \mathcal{T}$가 있다. (가)에 의해 $U \cap V = \emptyset$이고, $U$, $V$는 $x$, $y$의 서로소인 근방이다. 따라서 $(X, \mathcal{T})$는 하우스도르프 공간이다.
:::

## 예시와 반례

:::example[실수의 부분집합과 곱]
$\mathbb{R}$에 보통 위상을 주면 [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)에 의해 하우스도르프 공간이므로, (1)에 의해 $\mathbb{R}$의 모든 부분집합, 예컨대 $\mathbb{Q}$나 $\mathbb{Z}$나 닫힌구간은 부분공간 위상에서 하우스도르프 공간입니다. (2)의 (i)에 의해 보통 위상 둘의 곱위상을 준 $\mathbb{R} \times \mathbb{R}$도 하우스도르프 공간이고, (3)에 의해 대각선 $\{(a, b) \in \mathbb{R} \times \mathbb{R} : a = b\}$, 곧 직선 $y = x$는 그 곱위상에서 닫힌집합입니다.

$\mathbb{R}_l$도 하우스도르프이므로 $\mathbb{R}_l$ 둘의 곱위상을 준 $\mathbb{R} \times \mathbb{R}$도 하우스도르프입니다.
:::

:::example[여유한 위상의 곱]
$\mathbb{N}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 주면 [[hausdorff-space]]의 (5)에 의해 하우스도르프 공간이 아닙니다. $\mathbb{N} \ne \emptyset$이므로 (2)의 (ii)의 대우에 의해 곱 $(\mathbb{N} \times \mathbb{N}, \mathcal{T}_{\mathrm{cof}} \otimes \mathcal{T}_{\mathrm{cof}})$도 하우스도르프 공간이 아니고, (3)에 의해 대각선 $\Delta_{\mathbb{N}}$은 이 곱위상에서 닫혀 있지 않습니다. 한편 $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이어서 한 점 집합이 모두 닫혀 있습니다. 공간이 $T_1$이어도 대각선은 닫혀 있지 않을 수 있습니다.
:::

:::counterexample[밀착위상의 대각선]
$a \ne b$이고 $X = \{a, b\}$에 밀착위상을 줍니다. [[product-topology]]의 (8)에 의해 곱위상은 $X \times X$ 위의 밀착위상 $\{\emptyset, X \times X\}$입니다. 대각선의 여집합은 $\{(a, b), (b, a)\}$인데, 이것은 $(a, a)$를 원소로 갖지 않으므로 $X \times X$가 아니고 $(a, b)$를 원소로 가지므로 공집합도 아닙니다. 따라서 열린집합이 아니고, 대각선 $\{(a, a), (b, b)\}$는 닫혀 있지 않습니다. (3)대로 $X$는 하우스도르프가 아닙니다. 이산위상을 주면 곱위상도 이산위상이어서([[product-topology]]의 (8)) 대각선이 닫혀 있고, $X$는 하우스도르프입니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에 밀착위상을 주고 $Y = \{1\}$에 부분공간 위상을 주면 $Y$는 하우스도르프 공간인가? 이것은 (1)의 거꾸로가 성립한다는 뜻인가?]
$Y$는 점이 하나뿐이므로 [[hausdorff-space]]의 (3)에 의해 하우스도르프 공간입니다. 그러나 $X$는 서로 다른 두 점이 있는 밀착위상이므로 하우스도르프가 아닙니다. 부분공간이 하우스도르프라고 해서 전체가 하우스도르프인 것은 아니며, (1)은 한 방향만 말합니다.
:::

:::check[$(X_1, \mathcal{T}_1)$이 한 점 공간 $\{p\}$이면, 곱 $X_1 \times X_2$가 하우스도르프인 것은 언제인가?]
정확히 $(X_2, \mathcal{T}_2)$가 하우스도르프일 때입니다. $X_2$가 하우스도르프이면 한 점 공간도 하우스도르프이므로([[hausdorff-space]]의 (3)) (2)의 (i)에 의해 곱이 하우스도르프입니다. 거꾸로 곱이 하우스도르프이고 $X_2 \ne \emptyset$이면 (2)의 (ii)에 의해 $X_2$가 하우스도르프이고, $X_2 = \emptyset$이면 $X_2$는 공집합이므로 하우스도르프입니다.
:::
