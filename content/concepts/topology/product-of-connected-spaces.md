---
title: 두 연결공간의 곱
title_en: Products of Two Connected Spaces
aliases: [연결공간의 곱, 곱공간의 연결, product of connected spaces, the plane is connected]
kind: theorem
field: topology
msc: ["54D05", "54B10"]
level: undergrad
summary: 두 연결공간의 곱은 곱위상에서 연결이고, 거꾸로 두 인자가 공집합이 아니면 곱이 연결일 때 두 인자도 연결이다. 연결 부분집합의 곱은 연결 부분집합이어서 ℝ × ℝ 과 구간의 곱은 연결이다.
requires: [set, subset, set-operations, cartesian-product, family-of-sets, real-order-axioms, order-properties-of-reals, interval, topology-examples, subspace-topology, product-topology, maps-into-a-product, max-metric-and-product-topology, image-and-preimage, connected-space, continuous-image-of-connected, union-of-connected-sets, connected-subsets-of-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Connectedness 절의 Theorem products-connected 와 증명 (content/connectedness.tex:101–115), 그 다음 Corollary 와 증명 (116–122); 연습문제 2.5, 2.15 (content/exercises.tex:83, 93)"
    checked: original
    note: "(1)과 (2)는 출처 Theorem products-connected(101–115)를 두 공간으로 좁힌 것이다. 출처는 임의 개수의 곱에 대해 '곱이 연결인 것은 정확히 모든 X_i 가 연결일 때'라고 진술하고(103), '곱이 연결이면 각 인자가 연결'을 사영 π_j 의 연속(106)으로 보인다. 이 항목의 (2)는 두 인자가 공집합이 아니라는 가정을 두고, 한 인자가 공집합인 예를 진술에 적었다. (1)의 증명은 출처와 같은 길이다. 출처는 x 를 하나 고정해 A_x = {x} × Y, B_y = X × {y} 로 두고 A_x ∪ B_y 들의 합집합이 모두 (x, y′) 를 품는다고 쓴다(110–114). 이 항목은 가로줄의 둘째 좌표 b 를 고정하고 x 마다 T_x 를 두어 식으로 정한 집합족으로 쓰며, 세로줄과 가로줄의 연결은 maps-into-a-product 의 위상동형과 connected-space 의 (7)로 얻는다(출처는 y 를 (x, y) 로 보내는 함수의 상으로 얻는다). 출처는 유한 개의 곱을 두 개로 귀납하고 무한 개를 연습문제 2.15(exercises.tex:93)로 두며, 이 항목은 두 공간만 다룬다. (3)의 ℝ × ℝ 은 출처 Corollary(117–122: ℝⁿ 은 연결이다)의 n = 2 경우와 같다. 예시 '한 점을 뺀 평면'은 출처 연습문제 2.5(exercises.tex:83: n ≥ 2 이면 ℝⁿ ∖ {0} 은 연결임을 보이라)의 n = 2 경우와 같은 물음이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 공집합·한 점인 경우를 빠뜨린 진술의 가정, 근거 없는 예시와 반례 제목을 고쳤다."
added: 2026-11-19
---

:::statement
연결공간과 연결 부분집합은 [[connected-space|연결공간]]의 것이고, 곱위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$와 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이다. 아래에서 $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$는 위상공간이고, 곱집합 $X_1 \times X_2$에는 곱위상을, 그 부분집합에는 곱위상의 부분공간 위상을 준다.

1. (곱은 연결이다) $X_1$과 $X_2$가 연결공간이면 $X_1 \times X_2$는 연결공간이다.
2. (거꾸로) $X_1 \ne \emptyset$, $X_2 \ne \emptyset$이고 $X_1 \times X_2$가 연결공간이면 $X_1$과 $X_2$는 연결공간이다. 공집합이 아니라는 가정은 뺄 수 없다. 예컨대 $X_1$이 서로 다른 두 점을 가진 이산공간이고 $X_2 = \emptyset$이면 $X_1 \times X_2 = \emptyset$은 연결이지만 $X_1$은 연결이 아니다.
3. (연결 부분집합의 곱) $A$가 $X_1$의 연결 부분집합이고 $B$가 $X_2$의 연결 부분집합이면 $A \times B$는 $X_1 \times X_2$의 연결 부분집합이다. 특히 보통 위상의 $\mathbb{R} \times \mathbb{R}$([[max-metric-and-product-topology|최대 거리와 곱위상]]의 (2))은 연결공간이고, $I$, $J$가 구간([[interval]])이면 $I \times J$는 $\mathbb{R} \times \mathbb{R}$의 연결 부분집합이다.
:::

:::english
Connected spaces and connected subsets are as in the entry on connected spaces, and the product topology $\mathcal{T}_1 \otimes \mathcal{T}_2$ and the projections $\pi_1$, $\pi_2$ are as in the entry on the product topology of two spaces. Below, $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are topological spaces, the Cartesian product $X_1 \times X_2$ carries the product topology, and its subsets carry the subspace topology of the product topology.

1. (The product is connected) If $X_1$ and $X_2$ are connected spaces, then $X_1 \times X_2$ is a connected space.
2. (Conversely) If $X_1 \ne \emptyset$, $X_2 \ne \emptyset$ and $X_1 \times X_2$ is a connected space, then $X_1$ and $X_2$ are connected spaces. The nonemptiness hypothesis cannot be dropped. For example, if $X_1$ is a discrete space with two distinct points and $X_2 = \emptyset$, then $X_1 \times X_2 = \emptyset$ is connected but $X_1$ is not.
3. (Products of connected subsets) If $A$ is a connected subset of $X_1$ and $B$ is a connected subset of $X_2$, then $A \times B$ is a connected subset of $X_1 \times X_2$. In particular, $\mathbb{R} \times \mathbb{R}$ with its standard topology (item (2) of the entry on the max metric and the product topology) is a connected space, and if $I$, $J$ are intervals, then $I \times J$ is a connected subset of $\mathbb{R} \times \mathbb{R}$.
:::

## 직관

곱 $X_1 \times X_2$의 점 $(x, y)$에서 출발해 첫째 좌표를 고정하고 둘째 좌표만 움직이면 "세로줄" $\{x\} \times X_2$를 지나고, 둘째 좌표를 $b$로 고정하면 "가로줄" $X_1 \times \{b\}$를 지납니다. 세로줄은 $X_2$와, 가로줄은 $X_1$과 위상동형이므로 둘 다 연결이고, 세로줄 하나와 가로줄 $X_1 \times \{b\}$는 점 $(x, b)$에서 만납니다. 그래서 "세로줄 하나 더하기 가로줄" 꼴의 집합은 모두 연결이고, 이것들은 모두 가로줄 위의 점 $(a, b)$를 함께 품으므로 합집합인 곱 전체도 연결입니다. 비유하자면 빗의 등(가로줄)에 이빨(세로줄)이 모두 붙어 있으면 빗 전체가 한 덩어리입니다. "등에 붙어 있다"가 각 세로줄이 가로줄과 만난다는 것에, "한 덩어리"가 연결에 맞습니다.

거꾸로 방향은 사영이 연속이라는 것에서 나옵니다. 연결의 연속 상은 연결이고, 다른 인자가 공집합이 아니면 사영의 상은 인자 전체입니다. 다른 인자가 공집합이면 곱 자체가 공집합이 되어 인자에 대해 아무것도 알려 주지 않습니다.

## 증명

:::idea
점 $(a, b)$를 하나 잡고, 각 $x$마다 세로줄 $\{x\} \times X_2$와 가로줄 $X_1 \times \{b\}$의 합집합을 만든다. 이것들은 연결이고 모두 $(a, b)$를 품으므로 합집합인 곱이 연결이다.
:::

:::hint
[[maps-into-a-product]]의 (4)의 (ii), (iii)은 세로줄과 가로줄이 각 인자와 위상동형이라는 것입니다. [[connected-space]]의 (7)로 연결을 옮기세요.
:::

:::hint
$T_x = (\{x\} \times X_2) \cup (X_1 \times \{b\})$로 두고, 식으로 정한 집합족 $\{T_x : x \in X_1\}$에 [[union-of-connected-sets]]의 (1)을 쓰세요. 그 합집합이 곱 전체라는 것도 확인해야 합니다.
:::

:::proof
아래에서 "연결 (3)"처럼 쓴 것은 [[connected-space]]의 번호이고, "합집합 (1)"처럼 쓴 것은 [[union-of-connected-sets]]의 번호이다.

**(1).** $X_1 = \emptyset$이거나 $X_2 = \emptyset$이면 [[product-topology]]의 (1)의 (b)에 의해 $X_1 \times X_2 = \emptyset$이고, 연결 (5)의 (i)에 의해 연결공간이다. 이제 $X_1 \ne \emptyset$, $X_2 \ne \emptyset$이라 하고 $a \in X_1$, $b \in X_2$를 하나씩 잡는다.

세로줄과 가로줄. $x \in X_1$이면 [[maps-into-a-product]]의 (4)의 (ii)에 의해 $X_2 \simeq \{x\} \times X_2$이다. 여기서 $\{x\} \times X_2$에는 곱위상의 부분공간 위상을 준다. $X_2$가 연결공간이므로 연결 (7)의 첫 문장에 의해 $\{x\} \times X_2$는 이 위상으로 연결공간, 곧 $X_1 \times X_2$의 연결 부분집합이다. 같은 방식으로 [[maps-into-a-product]]의 (4)의 (iii)에 의해 $X_1 \simeq X_1 \times \{b\}$이므로 $X_1 \times \{b\}$는 $X_1 \times X_2$의 연결 부분집합이다.

$x \in X_1$마다 $T_x = (\{x\} \times X_2) \cup (X_1 \times \{b\})$로 둔다. $(x, b)$는 두 집합에 모두 속하므로 합집합 (2)에 의해 $T_x$는 $X_1 \times X_2$의 연결 부분집합이다. 각 $x$마다 $T_x$는 $x$에 대한 식으로 정해지므로 $\mathcal{C} = \{T_x : x \in X_1\}$은 [[family-of-sets]]의 식으로 정한 집합족이고 $X_1 \times X_2$의 집합족이다. $\mathcal{C}$의 원소는 어떤 $x$에 대한 $T_x$이므로 모두 연결 부분집합이고, $(a, b) \in X_1 \times \{b\} \subseteq T_x$이므로 모두 점 $(a, b)$를 품는다. 합집합 (1)에 의해 $\bigcup \mathcal{C}$는 $X_1 \times X_2$의 연결 부분집합이다.

$\bigcup \mathcal{C} = X_1 \times X_2$임을 보인다. $\bigcup \mathcal{C}$는 $X_1 \times X_2$의 부분집합이다. 거꾸로 $(x, y) \in X_1 \times X_2$이면 $(x, y) \in \{x\} \times X_2 \subseteq T_x$이므로 [[family-of-sets]]의 (9)에 의해 $(x, y) \in \bigcup \mathcal{C}$이다. 따라서 $X_1 \times X_2$는 자신의 연결 부분집합이고, 연결 (3)의 둘째 문장에 의해 연결공간이다.

**(2).** [[maps-into-a-product]]의 (1)의 (i)에 의해 사영 $\pi_1 : X_1 \times X_2 \to X_1$은 연속이다. $X_2 \ne \emptyset$이므로 [[product-topology]]의 (6)의 (b)에 의해 $\pi_1(X_1 \times X_2) = X_1$이다. $X_1 \times X_2$가 연결공간이므로 [[continuous-image-of-connected]]의 (1)에 의해 $X_1$은 $X_1$의 연결 부분집합이고, 연결 (3)의 둘째 문장에 의해 연결공간이다. $X_1 \ne \emptyset$이므로 같은 방식으로 $\pi_2(X_1 \times X_2) = X_2$이고 $X_2$도 연결공간이다.

예. $X_1 = \{p, q\}$($p \ne q$)에 이산위상을 주면 연결 (5)의 (iii)에 의해 $X_1$은 연결이 아니다. $X_2 = \emptyset$이면 [[product-topology]]의 (1)의 (b)에 의해 $X_1 \times X_2 = \emptyset$이고 연결 (5)의 (i)에 의해 연결이다.

**(3).** [[product-topology]]의 (7)에 의해 $A \times B$ 위에서 $(\mathcal{T}_1 \otimes \mathcal{T}_2)|_{A \times B} = (\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B)$이다. 가정에 의해 $(A, \mathcal{T}_1|_A)$와 $(B, \mathcal{T}_2|_B)$는 연결공간이므로 (1)에 의해 $(A \times B, (\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B))$는 연결공간이고, 이것은 부분공간 위상을 준 $A \times B$이다. 따라서 $A \times B$는 $X_1 \times X_2$의 연결 부분집합이다.

$\mathbb{R} \times \mathbb{R}$. [[max-metric-and-product-topology|최대 거리와 곱위상]]의 (2)에 의해 $\mathbb{R} \times \mathbb{R}$의 보통 위상은 $\mathbb{R}$의 보통 위상 둘의 곱위상이다. [[connected-subsets-of-reals]]의 (3)에 의해 $\mathbb{R}$은 연결공간이므로 (1)에 의해 $\mathbb{R} \times \mathbb{R}$은 연결공간이다. $I$, $J$가 구간이면 [[connected-subsets-of-reals]]의 (2)에 의해 $\mathbb{R}$의 연결 부분집합이므로, 앞 문단에 의해 $I \times J$는 $\mathbb{R} \times \mathbb{R}$의 연결 부분집합이다.
:::

## 예시와 반례

:::example[한 점을 뺀 평면]
$S = (\mathbb{R} \times \mathbb{R}) - \{(0, 0)\}$은 $\mathbb{R} \times \mathbb{R}$의 연결 부분집합입니다. $P = \{t \in \mathbb{R} : 0 < t\}$, $N = \{t \in \mathbb{R} : t < 0\}$으로 두고 네 집합
$$
A = P \times \mathbb{R}, \qquad B = N \times \mathbb{R}, \qquad C = \mathbb{R} \times P, \qquad D = \mathbb{R} \times N
$$
을 봅니다. [[connected-subsets-of-reals]]의 (2)에 의해 $P$, $N$, $\mathbb{R}$은 연결이므로 (3)에 의해 네 집합은 모두 연결입니다.

$(1, 1) \in A \cap C$이므로 합집합 $A \cup C$는 [[union-of-connected-sets]]의 (2)에 의해 연결입니다. $(-1, 1) \in C \cap B$이므로 $(A \cup C) \cup B$도 연결이고, $(-1, -1) \in B \cap D$이므로 $A \cup C \cup B \cup D$도 연결입니다($0 < 1$과 $-1 < 0$은 [[order-properties-of-reals]]의 (5)의 (ii), (3)의 (ii)). 이 합집합이 $S$입니다. $(x, y) \ne (0, 0)$이면 $x \ne 0$이거나 $y \ne 0$이고, [[real-order-axioms]]의 (W1)에 의해 $x \ne 0$이면 $x \in P$ 또는 $x \in N$이므로 $(x, y) \in A \cup B$이며, $y \ne 0$이면 같은 방식으로 $(x, y) \in C \cup D$입니다. 거꾸로 네 집합의 점은 한 좌표가 $0$이 아니므로 $(0, 0)$이 아닙니다.
:::

:::counterexample[실수와 정수의 곱]
$\mathbb{R} \times \mathbb{Z}$($\mathbb{Z}$에는 보통 위상의 부분공간 위상)는 연결공간이 아닙니다. [[connected-space]]의 (5)의 (v)에 의해 $\mathbb{Z}$는 연결이 아니고, $\mathbb{R}$과 $\mathbb{Z}$는 공집합이 아니므로 (2)의 대우에 의해 곱은 연결이 아닙니다. 그림으로는 서로 떨어진 가로줄들이 늘어선 모양입니다. 마찬가지로 $\mathbb{R}_l \times \mathbb{R}$도 $\mathbb{R}_l$이 연결이 아니므로([[connected-space]]의 (5)의 (iv)) 연결이 아닙니다.
:::

## 확인 질문

:::check[$X_1 = \{p\}$가 한 점 공간이면 $X_1 \times X_2$가 연결인 것은 언제인가?]
정확히 $X_2$가 연결일 때입니다. [[maps-into-a-product]]의 (4)의 (ii)에 의해 $X_2 \simeq \{p\} \times X_2 = X_1 \times X_2$이고, [[connected-space]]의 (7)에 의해 위상동형인 두 공간은 함께 연결이거나 함께 연결이 아닙니다. (1)과 (2)로 보아도 같습니다. 한 점 공간은 연결이므로 $X_2$가 연결이면 (1)에 의해 곱이 연결이고, $X_2 \ne \emptyset$이고 곱이 연결이면 (2)에 의해 $X_2$가 연결입니다($X_2 = \emptyset$이면 둘 다 연결입니다).
:::

:::check[$\mathbb{R} \times \mathbb{R}$의 부분집합 $\{(x, y) : 0 \le x \le 1,\ 0 \le y\}$는 연결인가?]
연결입니다. 이 집합은 닫힌구간 $[0, 1]$과 반직선 $\{y \in \mathbb{R} : 0 \le y\}$의 곱이고, 둘 다 [[interval]]의 (1), (2)에 의해 구간이므로 (3)에 의해 연결 부분집합입니다.
:::
