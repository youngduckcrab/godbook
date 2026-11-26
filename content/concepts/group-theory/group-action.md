---
title: 군의 작용
title_en: Group Action
aliases: [작용, 군 작용, G-집합, 불변 부분집합, 작용이 정하는 준동형, group action, G-set, invariant subset]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: 군 G 의 집합 X 위의 작용은 e·x = x 이고 (gh)·x = g·(h·x) 인 함수 G × X → X 이다. 각 g 가 X 의 치환을 정하고 그 대응이 준동형 G → S_X 이며, 거꾸로 준동형 G → S_X 는 작용을 정한다. 작용은 부분군과 불변 부분집합으로 제한할 수 있고, 모든 점을 고정하는 원소 전체는 정규부분군이다.
requires: [set, set-operations, cartesian-product, function, injective-surjective-bijective, adding-or-removing-an-element, recursion-theorem, proof-by-contradiction, group, group-basic-properties, subgroup, subgroup-examples, number-groups, real-number-arithmetic, symmetric-group, cycle-permutation, group-homomorphism, homomorphism-kernel-and-image, normal-subgroup]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.1절 Groups Acting on Sets, 작용과 G-set 의 정의 (p.168), Example 14.1–14.3 (p.168–169); 14.5절 Exercises, 연습문제 20 (p.180)"
    checked: original
    note: "출처 14.1절(p.168)은 (왼쪽) 작용(a (left) action of G on X)을 G × X → X 인 map 으로서 1. ex = x, 2. (g₁g₂)x = g₁(g₂x) 를 만족하는 것으로 정의하고 이때 X 를 G-set 이라 부른다. 이 항목의 정의와 같은 내용이고, 출처의 값 gx 를 이 사이트는 g·x 로 쓴다(출처도 Example 14.3(p.169)과 Lemma 14.18(p.173)에서는 가운뎃점을 쓴다). 출처는 같은 쪽에서 S_X 의 부분군 G 가 (σ, x) 를 σ(x) 로 보내는 작용을 말하고, Example 14.3(p.169)에서 왼쪽 곱 작용을 λ_g(x) = gx 로 적는다. (1)–(3)의 증명은 이 사이트가 썼다. 출처 14장에서 'homomorphism' 은 Lemma 14.18 의 증명(p.173)과 15장의 표준 준동형(p.182)에서만, 'SX' 는 p.168 의 위 문장에서만 나오고('permutation of X', 'bijection', 'one-to-one' 으로도 찾았다. 'one-to-one' 은 Theorem 14.11 과 Lemma 15.6 의 증명), 14.5절 연습문제 1–25 를 처음부터 읽었을 때 작용과 준동형 G → S_X 의 대응을 묻는 것은 없었다. 가장 가까운 것은 연습문제 20(p.180)으로, 항등원만이 모든 점을 고정하는 작용을 faithful 이라 하고 그것이 서로 다른 두 원소가 같은 작용을 하지 않는 것과 동치임을 보이게 한다. 이것은 (6)의 마지막 문장과 같은 내용이다. 출처 Proposition 14.21(p.175)이 치환군의 원소 σ 마다 함수 f 를 f ∘ σ 로 보내는 함수가 단사임을 보이는 것은 (1)과 같은 발상이다. '작용이 정하는 준동형', 'G-불변', '작용의 조건' 이라는 이름은 이 사이트의 것이다(검색어 'invariant' 는 역사 서술과 문서 사용 허가에만 나온다). 예시 '부호를 바꾸는 작용' 은 출처 Example 14.1(p.168)의 GL₂(ℝ) 가 ℝ² 에 왼쪽 곱으로 작용하는 것을 크기 1 에서 부분군 {1, −1} 로 줄인 것과 같은 발상이다. 반례 '오른쪽 곱은 작용의 조건 (ii)를 깨뜨릴 수 있다' 의 고친 작용 xg⁻¹ 은 출처 9.4절 연습문제 44(p.123)의 ρ_g(x) = xg⁻¹ 과 같은 함수이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인('(1)–(3) 은 명제로 없다' 를 검색어 넷으로 대조, 14.1절 원문 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $X$가 [[set|집합]]이라 하자. 곱 $gh$와 역원 $g^{-1}$은 [[group|군]]의 표기이고, $S_X$와 그 곱(합성) $\sigma\tau = \sigma \circ \tau$, 항등원 $i_X$는 [[symmetric-group|대칭군]]의 것이다. $G \times X$는 [[cartesian-product|곱집합]]이다.

[[function|함수]] $G \times X \to X$의 $(g, x)$에서의 값을 $g \cdot x$로 쓰자. 이 함수가 $G$의 $X$ 위의 **작용**(action)인 것은 정확히 다음 두 조건이 모두 성립할 때이다. 이 둘을 **작용의 조건** (i), (ii)라 부른다.

- (i) 모든 $x \in X$에서 $e \cdot x = x$이다.
- (ii) 모든 $g, h \in G$와 모든 $x \in X$에서 $(gh) \cdot x = g \cdot (h \cdot x)$이다.

이때 "$G$가 $X$에 작용한다"고 하고, $X$를 **$G$-집합**($G$-set)이라 한다. 가운뎃점을 찍은 $g \cdot x$는 작용의 값이고, 점 없이 붙여 쓴 $gh$는 군 $G$의 곱이다. (ii)의 왼쪽에서는 먼저 $G$에서 $gh$를 계산한다.

$G$가 $X$에 작용할 때, $X$의 부분집합 $Y$가 **$G$-불변**($G$-invariant)인 것은 정확히 모든 $g \in G$와 모든 $y \in Y$에서 $g \cdot y \in Y$일 때이다.

다음이 성립한다. (3)을 뺀 나머지에서 $G$는 $X$에 작용하고 그 값을 $g \cdot x$로 쓴다.

1. (원소마다 치환) 각 $g \in G$에 대하여, $X$의 각 $x$에 $g \cdot x$를 대응시키는 함수를 $\theta(g) : X \to X$라 하자. 그러면 $\theta(g)$는 [[injective-surjective-bijective|전단사]]이고, 곧 $\theta(g) \in S_X$이다. $x, y \in X$에 대하여 $g \cdot x = y$인 것은 정확히 $x = g^{-1} \cdot y$일 때이다. 특히 $g \cdot x = g \cdot y$이면 $x = y$이다.
2. (작용이 정하는 준동형) 각 $g \in G$에 $\theta(g)$를 대응시키는 함수 $\theta : G \to S_X$는 군 $G$에서 군 $S_X$로의 [[group-homomorphism|준동형]]이다. 곧 모든 $g, h \in G$에서 $\theta(gh) = \theta(g)\theta(h) = \theta(g) \circ \theta(h)$이다. 또 $\theta(e) = i_X$이고 $\theta(g^{-1}) = \theta(g)^{-1}$이다. 이 $\theta$를 작용이 정하는 **준동형**이라 한다.
3. (준동형이 정하는 작용) $\varphi : G \to S_X$가 준동형이면, 각 $(g, x) \in G \times X$에 $\varphi(g)(x)$를 대응시키는 함수 $G \times X \to X$는 $G$의 $X$ 위의 작용이고, 이 작용이 정하는 준동형은 $\varphi$이다. 거꾸로 $G$의 $X$ 위의 작용이 있고 그것이 정하는 준동형이 $\theta$이면, 각 $(g, x)$에 $\theta(g)(x)$를 대응시키는 함수는 처음의 작용과 같은 함수이다.
4. (부분군으로 제한) $H$가 $G$의 [[subgroup|부분군]]이면, 작용을 $H \times X$로 [[adding-or-removing-an-element|제한]]한 함수 $H \times X \to X$는 군 $H$의 $X$ 위의 작용이다. 그 값도 $h \cdot x$로 쓴다.
5. (불변 부분집합으로 제한) $Y \subseteq X$가 $G$-불변이면, 작용을 $G \times Y$로 제한한 함수를 $G \times Y \to Y$로 선언한 것은 $G$의 $Y$ 위의 작용이다. 이것을 $Y$로 **제한한 작용**이라 하고 그 값도 $g \cdot y$로 쓴다. 또 다음이 성립한다.
   - (i) $X$와 $\emptyset$은 $G$-불변이다.
   - (ii) $Y$가 $G$-불변이면 $X - Y$도 $G$-불변이다.
   - (iii) $H$가 $G$의 부분군이고 $Y$가 $G$-불변이면, $Y$는 (4)의 $H$의 작용에 대해 $H$-불변이다. 따라서 $H$는 $Y$에 $h \cdot y$로 작용한다.
6. (모든 점을 고정하는 원소) $K = \{g \in G : \text{모든 } x \in X \text{에서 } g \cdot x = x\}$라 하면 $K = \operatorname{Ker} \theta$이고, $K$는 $G$의 [[normal-subgroup|정규부분군]]이다. $\theta$가 단사인 것은 정확히 $K = \{e\}$일 때이다.
:::

:::english
Let $G$ be a group with identity $e$ and let $X$ be a set. The product $gh$ and the inverse $g^{-1}$ are in the notation for groups, and $S_X$ with its product (composition) $\sigma\tau = \sigma \circ \tau$ and identity $i_X$ is the symmetric group. $G \times X$ is the Cartesian product.

For a function $G \times X \to X$, write $g \cdot x$ for its value at $(g, x)$. This function is an **action** of $G$ on $X$ exactly when both of the following conditions hold. We call them the **conditions for an action** (i) and (ii).

- (i) $e \cdot x = x$ for every $x \in X$.
- (ii) $(gh) \cdot x = g \cdot (h \cdot x)$ for all $g, h \in G$ and all $x \in X$.

In this case we say that "$G$ acts on $X$", and $X$ is called a **$G$-set**. The dotted $g \cdot x$ is a value of the action, while $gh$ written without a dot is the product in the group $G$. On the left side of (ii), $gh$ is computed in $G$ first.

When $G$ acts on $X$, a subset $Y$ of $X$ is **$G$-invariant** exactly when $g \cdot y \in Y$ for every $g \in G$ and every $y \in Y$.

The following hold. Except in (3), $G$ acts on $X$ and its values are written $g \cdot x$.

1. (Each element gives a permutation) For each $g \in G$, let $\theta(g) : X \to X$ be the function assigning $g \cdot x$ to each $x \in X$. Then $\theta(g)$ is a bijection, that is, $\theta(g) \in S_X$. For $x, y \in X$, $g \cdot x = y$ exactly when $x = g^{-1} \cdot y$. In particular, $g \cdot x = g \cdot y$ implies $x = y$.
2. (The homomorphism determined by the action) The function $\theta : G \to S_X$ assigning $\theta(g)$ to each $g \in G$ is a homomorphism from the group $G$ to the group $S_X$. That is, $\theta(gh) = \theta(g)\theta(h) = \theta(g) \circ \theta(h)$ for all $g, h \in G$. Also $\theta(e) = i_X$ and $\theta(g^{-1}) = \theta(g)^{-1}$. This $\theta$ is called the **homomorphism** determined by the action.
3. (The action determined by a homomorphism) If $\varphi : G \to S_X$ is a homomorphism, then the function $G \times X \to X$ assigning $\varphi(g)(x)$ to each $(g, x) \in G \times X$ is an action of $G$ on $X$, and the homomorphism determined by this action is $\varphi$. Conversely, if $G$ acts on $X$ and the homomorphism it determines is $\theta$, then the function assigning $\theta(g)(x)$ to each $(g, x)$ is the same function as the original action.
4. (Restriction to a subgroup) If $H$ is a subgroup of $G$, then the restriction of the action to $H \times X$, a function $H \times X \to X$, is an action of the group $H$ on $X$. Its values are also written $h \cdot x$.
5. (Restriction to an invariant subset) If $Y \subseteq X$ is $G$-invariant, then the restriction of the action to $G \times Y$, declared as a function $G \times Y \to Y$, is an action of $G$ on $Y$. It is called the **restricted action** on $Y$, and its values are also written $g \cdot y$. Moreover:
   - (i) $X$ and $\emptyset$ are $G$-invariant.
   - (ii) If $Y$ is $G$-invariant, then so is $X - Y$.
   - (iii) If $H$ is a subgroup of $G$ and $Y$ is $G$-invariant, then $Y$ is $H$-invariant for the action of $H$ in (4). Hence $H$ acts on $Y$ by $h \cdot y$.
6. (Elements fixing every point) Let $K = \{g \in G : g \cdot x = x \text{ for every } x \in X\}$. Then $K = \operatorname{Ker} \theta$, and $K$ is a normal subgroup of $G$. The homomorphism $\theta$ is injective exactly when $K = \{e\}$.
:::

## 직관

군의 원소를 "조작", $X$의 원소를 "상태"로 보면, 작용은 각 조작이 각 상태를 어느 상태로 바꾸는지 적은 표입니다. 퍼즐 상자의 손잡이 돌리기를 떠올리면 됩니다. 조건 (i)은 "아무것도 하지 않는 조작"이 상태를 바꾸지 않는다는 것이고, 조건 (ii)는 $h$를 한 뒤 $g$를 하는 것이 조작 $gh$를 한 번 하는 것과 같다는 것입니다. 비유가 정의와 맞는 곳은 $gh$에서 오른쪽의 $h$가 먼저 일한다는 점이고, 이것은 치환의 곱 $\sigma\tau$에서 $\tau$를 먼저 적용하는 것과 같은 순서입니다.

비유가 맞지 않는 곳도 있습니다. 군의 원소는 서로 다른데 상태에는 똑같이 일하는 일이 있을 수 있고(아래 확인 질문), 아무 상태도 바꾸지 않는 원소가 항등원 말고도 있을 수 있습니다. (6)의 $K$가 그런 원소를 모은 것입니다.

(1)–(3)은 작용을 보는 두 가지 눈이 같다는 것입니다. 작용을 "$G \times X$에서 $X$로의 함수"로 보든, "각 원소에 $X$의 치환을 하나씩 주는 준동형 $G \to S_X$"로 보든, 한쪽이 정해지면 다른 쪽이 정확히 하나 정해집니다.

## 증명

:::idea
조건 (i), (ii)를 $g$와 $g^{-1}$에 쓰면 $g^{-1}$의 작용이 $g$의 작용을 되돌린다. 준동형이라는 것은 조건 (ii)를 함수의 같음으로 읽은 것이다.
:::

:::hint
$g^{-1} \cdot (g \cdot x)$를 조건 (ii)로 $(g^{-1}g) \cdot x$로 바꿔 보라.
:::

:::hint
$X - Y$가 $G$-불변임을 보일 때, $g \cdot z \in Y$라고 하면 $g^{-1}$을 작용시켜 $z$가 어디에 들어가는지 보라.
:::

:::proof
함수를 값으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓰고, 두 함수가 같다는 것은 [[function|함수]]의 함수의 같음(정의역이 같고 모든 점에서 값이 같다)으로 보인다. $S_X$의 곱은 합성이고 항등원은 $i_X$, 역원은 역함수이다([[symmetric-group|대칭군]]의 (1)).

**(1)** 각 $x \in X$마다 $g \cdot x \in X$가 정해져 있으므로 $\theta(g) = \{(x, g \cdot x) : x \in X\}$는 $X$에서 $X$로의 함수이다. $x, y \in X$라 하자. $g \cdot x = y$이면 조건 (ii)와 (i)에 의해
$$g^{-1} \cdot y = g^{-1} \cdot (g \cdot x) = (g^{-1}g) \cdot x = e \cdot x = x$$
이다. 거꾸로 $x = g^{-1} \cdot y$이면 같은 방법으로 $g \cdot x = g \cdot (g^{-1} \cdot y) = (gg^{-1}) \cdot y = e \cdot y = y$이다.

단사: $g \cdot x = g \cdot y$이고 이 값을 $z$라 하면, 방금 보인 것에 의해 $x = g^{-1} \cdot z$이고 $y = g^{-1} \cdot z$이므로 $x = y$이다. 전사: $y \in X$이면 $x = g^{-1} \cdot y$는 $X$의 원소이고 방금 보인 것에 의해 $g \cdot x = y$이다. 따라서 $\theta(g)$는 전단사이고 $\theta(g) \in S_X$이다.

**(2)** (1)에 의해 각 $g$마다 $\theta(g) \in S_X$가 정해져 있으므로 $\theta : G \to S_X$는 함수이다. $g, h \in G$와 $x \in X$에 대하여, 대칭군의 곱의 정의와 조건 (ii)에 의해
$$\bigl(\theta(g)\theta(h)\bigr)(x) = \theta(g)\bigl(\theta(h)(x)\bigr) = g \cdot (h \cdot x) = (gh) \cdot x = \theta(gh)(x)$$
이다. 모든 $x$에서 값이 같으므로 $\theta(gh) = \theta(g)\theta(h)$이고, $\theta$는 [[group-homomorphism|군 준동형]]이다. 같은 항목의 (1)에 의해 $\theta(e)$는 $S_X$의 항등원 $i_X$이고, (2)에 의해 $\theta(g^{-1})$은 $S_X$에서 $\theta(g)$의 역원 $\theta(g)^{-1}$이다.

**(3)** $\varphi : G \to S_X$가 준동형이라 하자. 각 $(g, x)$에서 $\varphi(g)$는 $X$에서 $X$로의 함수이므로 $\varphi(g)(x) \in X$이고, 따라서 $(g, x)$에 $\varphi(g)(x)$를 대응시키는 함수 $\alpha : G \times X \to X$가 있다. 조건 (i): 군 준동형의 (1)에 의해 $\varphi(e) = i_X$이므로 $\alpha(e, x) = i_X(x) = x$이다. 조건 (ii): $\varphi(gh) = \varphi(g)\varphi(h) = \varphi(g) \circ \varphi(h)$이므로
$$\alpha(gh, x) = \varphi(gh)(x) = \varphi(g)\bigl(\varphi(h)(x)\bigr) = \alpha\bigl(g, \alpha(h, x)\bigr)$$
이다. 따라서 $\alpha$는 작용이다. 이 작용이 정하는 준동형을 $\theta_\alpha$라 하면 모든 $x$에서 $\theta_\alpha(g)(x) = \alpha(g, x) = \varphi(g)(x)$이므로 $\theta_\alpha(g) = \varphi(g)$이고, 모든 $g$에서 그러하므로 $\theta_\alpha = \varphi$이다.

거꾸로 값이 $g \cdot x$인 작용이 정하는 준동형이 $\theta$이고 $\beta(g, x) = \theta(g)(x)$라 하면, 모든 $(g, x)$에서 $\beta(g, x) = g \cdot x$이다. 두 함수는 정의역 $G \times X$가 같고 모든 점에서 값이 같으므로 같은 함수이다.

**(4)** [[adding-or-removing-an-element|함수의 제한]]에 의해 제한한 함수는 $H \times X$에서 $X$로의 함수이고 값은 원래의 $h \cdot x$이다. [[subgroup|부분군]]의 (1)에 의해 군 $H$의 항등원은 $e$이므로 조건 (i)이 성립한다. 같은 항목의 (3)에 의해 $h, k \in H$의 $H$에서의 곱은 $G$에서의 곱 $hk$와 같으므로, 조건 (ii)는 $G$의 조건 (ii)에서 바로 나온다.

**(5)** 제한한 함수는 $G \times Y$에서 $X$로의 함수이고, $Y$가 $G$-불변이므로 모든 값이 $Y$에 속한다. [[function|함수]]의 "공역은 선언하기 나름이다"에 의해 이것을 $G \times Y \to Y$로 선언할 수 있다. 값이 원래의 $g \cdot y$와 같으므로 조건 (i), (ii)는 원래 작용의 조건에서 바로 나온다.

(i) 모든 값 $g \cdot x$는 $X$의 원소이므로 $X$는 $G$-불변이다. $\emptyset$에는 원소가 없으므로 조건이 저절로 성립한다.

(ii) $z \in X - Y$이고 $g \in G$라 하자. $g \cdot z \in Y$라고 하면, $Y$가 $G$-불변이므로 $g^{-1} \cdot (g \cdot z) \in Y$이고, (1)에 의해 이 원소는 $z$이다. 이것은 $z \notin Y$와 모순이다([[proof-by-contradiction|귀류법]]). 따라서 $g \cdot z \in X - Y$이다.

(iii) $H \subseteq G$이므로 모든 $h \in H$, $y \in Y$에서 $h \cdot y \in Y$이다. 곧 $Y$는 (4)의 작용에 대해 $H$-불변이고, 그 작용에 위의 첫 문단을 쓰면 $H$는 $Y$에 작용한다.

**(6)** $g \in \operatorname{Ker} \theta$인 것은 정확히 $\theta(g)$가 $S_X$의 항등원 $i_X$와 같을 때이고, 함수의 같음에 의해 이것은 정확히 모든 $x \in X$에서 $g \cdot x = \theta(g)(x) = x$일 때, 곧 $g \in K$일 때이다. 따라서 $K = \operatorname{Ker} \theta$이고, [[normal-subgroup|정규부분군]]의 (4)에 의해 $K$는 $G$의 정규부분군이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (3)에 의해 $\theta$가 단사인 것은 정확히 $K = \{e\}$일 때이다.
:::

## 예시와 반례

:::example[부호를 바꾸는 작용]
[[subgroup-examples|부분군의 예]]의 (3)에 의해 $G = \{1, -1\}$은 [[number-groups|수로 이루어진 군]]의 $(\mathbb{R} - \{0\}, \cdot)$의 부분군이고, 그 곱은 실수의 곱셈입니다. $X = \mathbb{R}$로 두고 $\varepsilon \in G$와 실수 $x$에 대하여 $\varepsilon \cdot x = \varepsilon x$(실수의 곱)로 정하면 이것은 $G$의 $\mathbb{R}$ 위의 작용입니다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)에 의해 $1 \cdot x = 1x = x$이고, (K2)에 의해 $(\varepsilon\delta) \cdot x = (\varepsilon\delta)x = \varepsilon(\delta x) = \varepsilon \cdot (\delta \cdot x)$이기 때문입니다.

(K9)의 $(-1)a = -a$에 의해 $\theta(-1)$은 각 실수 $x$를 $-x$로 보내는 함수이고, $\theta(1) = i_{\mathbb{R}}$입니다. $\theta(-1)(1) = -1 \ne 1$이므로(정수 사이의 계산, (K7)) $\theta(-1) \ne \theta(1)$이고, $\theta$는 단사입니다. $(-1)(-1) = 1$이므로 (2)의 $\theta(g^{-1}) = \theta(g)^{-1}$에 의해 $\theta(-1)$은 자기 자신이 역함수인 전단사입니다.
:::

:::counterexample[오른쪽 곱은 작용의 조건 (ii)를 깨뜨릴 수 있다]
$G = S_3$이라 하고, $g \in G$와 $x \in G$에 대하여 $(g, x)$에서의 값을 군의 곱 $xg$로 정한 함수 $G \times G \to G$를 생각합시다. $G$가 집합 $G$ 자신에 작용하는지 묻는 것입니다. $ex = x$이므로 조건 (i)은 성립합니다. 그러나 조건 (ii)를 $g = (1\ 2)$, $h = (1\ 3)$([[cycle-permutation|순환치환]]의 표기), 원소 $e = i_{\{1, 2, 3\}}$에서 따져 보면, 왼쪽은 $e(gh) = gh$이고 오른쪽은 $(eh)g = hg$입니다.

곱은 합성이므로 $gh = (1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $3, 1, 2$로 보내고, $hg = (1\ 3)(1\ 2)$는 $1, 2, 3$을 각각 $2, 3, 1$로 보냅니다. 두 치환은 $1$에서 값이 다르므로 $gh \ne hg$이고, 이 함수는 작용이 아닙니다.

값을 $xg^{-1}$로 바꾸면 작용이 됩니다. $xe^{-1} = x$이고, [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $x(gh)^{-1} = x(h^{-1}g^{-1}) = (xh^{-1})g^{-1}$이기 때문입니다. $G$가 아벨군이면 $x(gh) = x(hg) = (xh)g$이므로 고치지 않은 규칙도 작용입니다.
:::

## 확인 질문

:::check[원소가 하나인 집합 $X = \{p\}$에 군 $G$가 작용하는 방법은 몇 가지인가?]
한 가지입니다. 함수 $G \times X \to X$의 값은 늘 $X$의 원소, 곧 $p$이므로 그런 함수는 모든 값이 $p$인 것 하나뿐입니다(함수의 같음). 이 함수에서 $e \cdot p = p$이고 $(gh) \cdot p = p = g \cdot (h \cdot p)$이므로 조건 (i), (ii)가 성립합니다. 이때 $\theta(g) = i_X$이므로 (6)의 $K$는 $G$ 전체이고, $G$가 원소를 둘 이상 가지면 $\theta$는 단사가 아닙니다.
:::

:::check[부호를 바꾸는 작용에서 $\{0\}$은 $G$-불변인가? 그렇다면 $\{0\}$으로 제한한 작용의 (6)의 $K$는 무엇인가?]
$1 \cdot 0 = 0$이고 $(-1) \cdot 0 = (-1)0 = 0$([[real-number-arithmetic|실수의 계산 법칙]]의 (K9))이므로 $\{0\}$은 $G$-불변입니다. (5)에 의해 $G$는 $\{0\}$에 작용하고, 두 원소 모두 유일한 점 $0$을 고정하므로 그 작용의 $K$는 $G = \{1, -1\}$ 전체입니다. 같은 $G$라도 $\mathbb{R}$ 전체 위의 작용에서는 $K = \{1\}$입니다. (5)의 (ii)에 의해 $\mathbb{R} - \{0\}$도 $G$-불변입니다.
:::
