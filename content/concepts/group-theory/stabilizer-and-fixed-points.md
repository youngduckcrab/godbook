---
title: 안정자와 고정점
title_en: Stabilizers and Fixed Points
aliases: [안정자, 안정자 부분군, 고정점 집합, 작용의 고정점, stabilizer, isotropy subgroup, fixed point set]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: 군 G 가 집합 X 에 작용할 때 x 를 고정하는 원소 전체 G_x 는 부분군이고, g·x = h·x 인 것은 정확히 gG_x = hG_x 일 때이며, G_(g·x) = gG_xg⁻¹ 이다. g 의 고정점 집합 X^g 와 작용의 고정점 집합 X^G 를 정하고, 여러 작용에서 안정자와 고정점이 무엇인지 보인다. 켤레 작용의 고정점 전체는 중심이다.
requires: [set, subset, set-operations, function, proof-by-contradiction, real-number-arithmetic, number-groups, group, group-basic-properties, finite-product-in-a-group, subgroup, subgroup-criteria, subgroup-examples, symmetric-group, order-of-symmetric-group, cycle-permutation, support-of-a-permutation, left-coset, group-isomorphism, normal-subgroup, group-action, group-action-examples, orbit-of-an-action]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.1절 Groups Acting on Sets, 고정점 집합과 안정자의 정의와 Remark 14.8 (p.169), Example 14.9 와 Proposition 14.10 (p.170); 14.2절 The Class Equation, X_G 의 정의 (p.170)와 켤레 작용의 고정점 (p.171); 14.3절 Lemma 14.18 (p.173)"
    checked: original
    note: "출처 14.1절(p.169)은 작용에서 g 의 fixed point set X_g 를 gx = x 인 x 전체로, x 의 stabilizer subgroup(또는 isotropy subgroup) G_x 를 x 를 고정하는 원소 전체로 정하고, Proposition 14.10(p.170)에서 G_x 가 부분군임을 증명한다. 14.2절 첫머리(p.170)는 X_G = {x ∈ X : gx = x for all g ∈ G} 로 정한다. 이 사이트는 출처의 아래첨자 X_g, X_G 를 위첨자 X^g, X^G 로 쓰고(G_x 와 구별하려는 것이다), 안정자의 기호 G_x 는 출처와 같다. (1)은 Proposition 14.10 과 같은 내용이고 같은 방법으로 증명한다(역원에서 출처는 x = (g⁻¹g)x = g⁻¹x 로 계산한다). (2)는 출처 Theorem 14.11 의 증명(p.170)이 g₁G_x = g₂G_x 이면 g₁x = g₂x 임을 보이는 단계와 같은 내용을 양방향으로 진술한 것이다. (3)은 출처 Lemma 14.18(p.173)이 x ∼ y 이면 G_x 와 G_y 가 동형이고 원소의 개수가 같다고 진술하고 a 를 gag⁻¹ 로 보내는 동형사상으로 증명하는 것과 같은 사상을 쓰며, 이 항목은 상이 정확히 G_{g·x} 라는 등식까지 진술한다. (5)의 (iv)는 출처 14.2절(p.171)이 중심 Z(G) 를 'the set of points that are fixed by conjugation' 이라 하고 켤레 작용의 안정자를 C(x_i) = {g ∈ G : gx_i = x_ig} 로 쓰는 것과 같은 내용이다. (5)의 (v)는 출처 15.4절 연습문제 19(p.187)가 정규인 실로우 부분군은 모든 내부 자기동형사상이 고정한다는 것을 보이게 하는 것과 같은 발상이다. (4), (5)의 (ii)·(iii), (6)의 증명은 이 사이트가 썼다. 출처의 'fixed point' 는 군의 작용에 대한 말이고, 치환 항목의 고정점(σ(x) = x)과 (5)의 (ii)에서 맞춘다. 예시 '부호를 바꾸는 작용의 안정자와 고정점' 은 출처 14.5절 연습문제 4 (c)(p.179)가 평면의 회전 작용에서 원점이 아닌 점의 안정자를 묻는 것과 같은 발상이다. 반례 '같은 궤도에 있는 두 점의 안정자는 다를 수 있다' 는 출처 Lemma 14.18(p.173)의 같은 궤도의 두 안정자에 대한 예이고, 그 두 부분군 {(1), (1 2)}, {(1), (2 3)} 은 출처 14.5절 연습문제 2 (a)의 힌트(p.328)에 S₃ 의 자연스러운 작용의 안정자 G₃, G₁ 으로 나온다. 확인 질문 '원소가 $k$개인 부분군이 하나뿐이면 그 부분군은 정규부분군인가?' 는 출처 10.4절 연습문제 11(p.131)과 15.4절 연습문제 11(p.187)과 같은 내용이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인('(1)–(3) 은 명제로 없다' 를 검색어 넷으로 대조, 14.1절 원문 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며, $G$가 집합 $X$에 작용한다고 하자. 작용, 그 값 $g \cdot x$, $G$-불변, 제한한 작용은 [[group-action|군의 작용]]의 것이고, 궤도 $G \cdot x$는 [[orbit-of-an-action|궤도]]의 것이다. 왼쪽 잉여류 $aH$와 $G/H$는 [[left-coset|잉여류]], $c_g$와 $gAg^{-1}$, 여러 작용의 이름은 [[group-action-examples|군의 작용의 예]]의 것이다.

$x \in X$에 대하여
$$G_x = \{g \in G : g \cdot x = x\}$$
를 $x$의 **안정자**(stabilizer)라 한다. $g \in G$에 대하여
$$X^g = \{x \in X : g \cdot x = x\}, \qquad X^G = \{x \in X : \text{모든 } g \in G \text{에서 } g \cdot x = x\}$$
로 정하고, $X^g$의 원소를 이 작용에서 $g$의 **고정점**(fixed point), $X^G$의 원소를 이 작용의 **고정점**이라 한다. 위첨자 $X^g$, $X^G$는 거듭제곱이 아니다.

다음이 성립한다.

1. (안정자는 부분군) 모든 $x \in X$에서 $G_x$는 $G$의 [[subgroup|부분군]]이다.
2. (같은 값) $g, h \in G$, $x \in X$에 대하여 다음 세 조건은 서로 동치이다: (i) $g \cdot x = h \cdot x$ (ii) $g^{-1}h \in G_x$ (iii) $gG_x = hG_x$.
3. (궤도를 따라 옮긴 안정자) $g \in G$, $x \in X$이면 $G_{g \cdot x} = gG_xg^{-1}$이고, $c_g$를 $G_x$로 제한한 함수를 $G_x \to G_{g \cdot x}$로 선언한 것은 군 $G_x$에서 군 $G_{g \cdot x}$로의 [[group-isomorphism|동형사상]]이다. 따라서 $y \in G \cdot x$이면 $G_x \cong G_y$이고, $G_x$가 유한집합이면 $G_y$도 유한집합이며 $|G_y| = |G_x|$이다.
4. (고정점)
   - (i) $X^e = X$이다. $x \in X$에 대하여 $x \in X^G$인 것은 정확히 모든 $g \in G$에서 $x \in X^g$일 때이다. 따라서 모든 $g$에서 $X^G \subseteq X^g$이다.
   - (ii) $x \in X$에 대하여 다음 세 조건은 서로 동치이다: $x \in X^G$이다; $G_x = G$이다; $G \cdot x = \{x\}$이다.
   - (iii) $X^G$와 $X - X^G$는 $G$-불변이다.
   - (iv) $x \in X - X^G$이면 $G \cdot x \subseteq X - X^G$이고, $G \cdot x$는 $x$와 다른 원소를 갖는다.
5. (예에서의 안정자와 고정점)
   - (i) (자명한 작용) 모든 $x$에서 $G_x = G$이고, 모든 $g$에서 $X^g = X$이며, $X^G = X$이다.
   - (ii) (치환군의 작용) $G$가 $S_X$의 부분군이고 $\sigma \cdot x = \sigma(x)$로 작용하면, $x_0 \in X$의 안정자는 $\{\sigma \in G : \sigma(x_0) = x_0\}$이고, $X^\sigma = X - \operatorname{supp} \sigma$이다. 곧 $X^\sigma$의 원소는 정확히 [[support-of-a-permutation|치환의 받침]]의 뜻의 $\sigma$의 고정점이다. $G = S_X$이면 $x_0$의 안정자는 [[subgroup-examples|부분군의 예]]의 (6)의 부분군 $\{f \in S_X : f(x_0) = x_0\}$이다.
   - (iii) (잉여류 위의 왼쪽 곱 작용) $H$가 $G$의 부분군이면, 모든 $a \in G$에서 $aH \in G/H$의 안정자는 $aHa^{-1}$이다. 특히 $H = eH$의 안정자는 $H$이다.
   - (iv) (켤레 작용) $a \in G$의 안정자는 $\{g \in G : ga = ag\}$이고, $g$의 고정점 전체는 $\{x \in G : gx = xg\}$이다. 이 작용의 고정점 전체의 집합 $\{x \in G : \text{모든 } g \in G \text{에서 } gxg^{-1} = x\}$는 중심 $Z(G)$([[subgroup-examples|부분군의 예]]의 (5))이다.
   - (v) (부분군 위의 켤레 작용) 부분군 $K$의 안정자는 $\{g \in G : gKg^{-1} = K\}$이다. $K$가 이 작용의 고정점인 것은 정확히 $K$가 $G$의 [[normal-subgroup|정규부분군]]일 때이다.
6. (제한한 작용의 안정자와 고정점)
   - (i) $H$가 $G$의 부분군이고 [[group-action|군의 작용]]의 (4)로 $H$가 $X$에 작용하면, 그 작용에서 $x$의 안정자는 $H_x = G_x \cap H$이고, 그 작용의 고정점 전체는 $X^H = \{x \in X : \text{모든 } h \in H \text{에서 } h \cdot x = x\}$이다. $X^G \subseteq X^H$이다.
   - (ii) $Y \subseteq X$가 $G$-불변이고 $G$가 $Y$에 제한한 작용으로 작용하면, $y \in Y$의 그 작용에서의 안정자는 $G_y$이고, 그 작용에서 $g$의 고정점 전체는 $Y \cap X^g$, 그 작용의 고정점 전체는 $Y \cap X^G$이다.
:::

:::english
Let $G$ be a group with identity $e$, and suppose $G$ acts on a set $X$. Actions, their values $g \cdot x$, $G$-invariance and restricted actions are those of the entry on group actions, and the orbit $G \cdot x$ is that of the entry on orbits. Left cosets $aH$ and $G/H$ are those of the entry on cosets, and $c_g$, $gAg^{-1}$ and the names of the various actions are those of the entry on examples of group actions.

For $x \in X$, the set
$$G_x = \{g \in G : g \cdot x = x\}$$
is called the **stabilizer** of $x$. For $g \in G$, define
$$X^g = \{x \in X : g \cdot x = x\}, \qquad X^G = \{x \in X : g \cdot x = x \text{ for every } g \in G\},$$
and call the elements of $X^g$ the **fixed points** of $g$ for this action, and the elements of $X^G$ the **fixed points** of the action. The superscripts in $X^g$ and $X^G$ are not powers.

The following hold.

1. (Stabilizers are subgroups) For every $x \in X$, $G_x$ is a subgroup of $G$.
2. (Equal values) For $g, h \in G$ and $x \in X$, the following three conditions are equivalent: (i) $g \cdot x = h \cdot x$; (ii) $g^{-1}h \in G_x$; (iii) $gG_x = hG_x$.
3. (Stabilizers moved along an orbit) If $g \in G$ and $x \in X$, then $G_{g \cdot x} = gG_xg^{-1}$, and the restriction of $c_g$ to $G_x$, declared as a function $G_x \to G_{g \cdot x}$, is an isomorphism from the group $G_x$ to the group $G_{g \cdot x}$. Hence, if $y \in G \cdot x$, then $G_x \cong G_y$, and if $G_x$ is finite, then $G_y$ is finite and $|G_y| = |G_x|$.
4. (Fixed points)
   - (i) $X^e = X$. For $x \in X$, $x \in X^G$ exactly when $x \in X^g$ for every $g \in G$. Hence $X^G \subseteq X^g$ for every $g$.
   - (ii) For $x \in X$, the following three conditions are equivalent: $x \in X^G$; $G_x = G$; $G \cdot x = \{x\}$.
   - (iii) $X^G$ and $X - X^G$ are $G$-invariant.
   - (iv) If $x \in X - X^G$, then $G \cdot x \subseteq X - X^G$, and $G \cdot x$ has an element different from $x$.
5. (Stabilizers and fixed points in the examples)
   - (i) (Trivial action) $G_x = G$ for every $x$, $X^g = X$ for every $g$, and $X^G = X$.
   - (ii) (Action of a permutation group) If $G$ is a subgroup of $S_X$ acting by $\sigma \cdot x = \sigma(x)$, then the stabilizer of $x_0 \in X$ is $\{\sigma \in G : \sigma(x_0) = x_0\}$, and $X^\sigma = X - \operatorname{supp} \sigma$. That is, the elements of $X^\sigma$ are exactly the fixed points of $\sigma$ in the sense of the entry on the support of a permutation. If $G = S_X$, the stabilizer of $x_0$ is the subgroup $\{f \in S_X : f(x_0) = x_0\}$ of item (6) of the examples of subgroups.
   - (iii) (Action by left multiplication on cosets) If $H$ is a subgroup of $G$, then for every $a \in G$ the stabilizer of $aH \in G/H$ is $aHa^{-1}$. In particular, the stabilizer of $H = eH$ is $H$.
   - (iv) (Action by conjugation) The stabilizer of $a \in G$ is $\{g \in G : ga = ag\}$, and the set of fixed points of $g$ is $\{x \in G : gx = xg\}$. The set $\{x \in G : gxg^{-1} = x \text{ for every } g \in G\}$ of fixed points of this action is the center $Z(G)$ (item (5) of the examples of subgroups).
   - (v) (Action by conjugation on subgroups) The stabilizer of a subgroup $K$ is $\{g \in G : gKg^{-1} = K\}$. $K$ is a fixed point of this action exactly when $K$ is a normal subgroup of $G$.
6. (Stabilizers and fixed points of restricted actions)
   - (i) If $H$ is a subgroup of $G$ acting on $X$ by item (4) of the entry on group actions, then the stabilizer of $x$ for that action is $H_x = G_x \cap H$, and the set of fixed points of that action is $X^H = \{x \in X : h \cdot x = x \text{ for every } h \in H\}$. We have $X^G \subseteq X^H$.
   - (ii) If $Y \subseteq X$ is $G$-invariant and $G$ acts on $Y$ by the restricted action, then the stabilizer of $y \in Y$ for that action is $G_y$, the set of fixed points of $g$ for that action is $Y \cap X^g$, and the set of fixed points of that action is $Y \cap X^G$.
:::

## 직관

궤도가 "$x$가 갈 수 있는 곳"이라면 안정자는 "$x$를 제자리에 두는 원소들"입니다. 회전하는 원판에서 중심은 모든 회전이 제자리에 두는 점, 곧 작용의 고정점이고, 가장자리의 점을 제자리에 두는 회전은 돌리지 않는 것 하나뿐입니다. 비유가 정의와 맞는 곳은 "제자리에 둔다"가 $g \cdot x = x$라는 점이고, 고정점이 $X^G$에 해당합니다. 맞지 않는 곳은 안정자가 모든 원소를 담을 수도, 항등원만 담을 수도 있다는 점입니다(아래 확인 질문).

(2)는 두 원소가 $x$를 같은 곳으로 보내는 것이 정확히 두 원소가 $G_x$의 같은 왼쪽 잉여류에 들 때라는 것입니다. 그래서 궤도의 점과 $G_x$의 왼쪽 잉여류가 하나씩 짝지어지리라 기대할 수 있습니다. (3)은 같은 궤도의 점들의 안정자가 서로 켤레라는 것이고, 같은 집합일 필요는 없습니다(아래 반례).

## 증명

:::idea
$g \cdot x = h \cdot x$의 양쪽에 $g^{-1}$을 작용시키면 $(g^{-1}h) \cdot x = x$가 된다. 안정자의 켤레는 $gag^{-1}$을 $g \cdot x$에 작용시켜 계산한다.
:::

:::hint
$a \in G_x$이고 $y = g \cdot x$이면 $(gag^{-1}) \cdot y$는 무엇인가? 거꾸로 $b \in G_y$이면 $g^{-1}bg$는 $x$를 어디로 보내는가?
:::

:::hint
$aH$의 안정자를 구하려면 $(ga)H = aH$를 [[left-coset|잉여류]]의 (3)으로 $G$의 원소에 대한 조건으로 바꿔 보라.
:::

:::proof
네 개 이상의 원소의 곱을 다시 묶을 때는 [[finite-product-in-a-group|군의 유한 곱]]의 (1)과 (3)(일반 결합법칙)을 쓴다. [[group-action|군의 작용]]의 (1)의 "$g \cdot x = y$인 것은 정확히 $x = g^{-1} \cdot y$일 때"를 (가)라 부른다.

**(1)** 작용의 조건 (i)에 의해 $e \in G_x$이다. $g, h \in G_x$이면 조건 (ii)에 의해 $(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x$이므로 $gh \in G_x$이다. $g \in G_x$이면 $g \cdot x = x$이고 (가)에 의해 $x = g^{-1} \cdot x$이므로 $g^{-1} \in G_x$이다. [[subgroup-criteria|부분군 판정법]]의 (1)에 의해 $G_x$는 부분군이다.

**(2)** (i)과 (ii): (가)를 $y = h \cdot x$에 쓰면, $g \cdot x = h \cdot x$인 것은 정확히 $x = g^{-1} \cdot (h \cdot x)$일 때이고, 조건 (ii)에 의해 $g^{-1} \cdot (h \cdot x) = (g^{-1}h) \cdot x$이므로 이것은 정확히 $g^{-1}h \in G_x$일 때이다. (ii)와 (iii): (1)에 의해 $G_x$는 부분군이므로 [[left-coset|잉여류]]의 (3)의 조건 (i)과 (iv)가 동치라는 것에서 나온다.

**(3)** $y = g \cdot x$라 하자. $a \in G_x$이면 유한 곱에 의해 $(gag^{-1})g = (ga)(g^{-1}g) = (ga)e = ga$이므로, 조건 (ii)에 의해
$$(gag^{-1}) \cdot y = \bigl((gag^{-1})g\bigr) \cdot x = (ga) \cdot x = g \cdot (a \cdot x) = g \cdot x = y$$
이다. 따라서 $gG_xg^{-1} \subseteq G_y$이다. 거꾸로 $b \in G_y$라 하고 $a = g^{-1}bg$라 하자. 유한 곱에 의해 $a = (g^{-1}b)g$이므로, 조건 (ii)와 (가)에 의해
$$a \cdot x = (g^{-1}b) \cdot (g \cdot x) = g^{-1} \cdot (b \cdot y) = g^{-1} \cdot y = x$$
이고 $a \in G_x$이다. 또 유한 곱에 의해 $gag^{-1} = (gg^{-1})b(gg^{-1}) = ebe = b$이므로 $b \in gG_xg^{-1}$이다. 따라서 $G_y = gG_xg^{-1} = c_g(G_x)$이다.

[[group-action-examples|군의 작용의 예]]의 (4)의 (iii)에 의해 $c_g$는 동형사상이고 (1)에 의해 $G_x$는 부분군이므로, [[group-isomorphism|군의 동형]]의 (3)의 (iv)에 의해 $c_g$를 $G_x$로 제한한 함수 $G_x \to c_g(G_x) = G_y$는 동형사상이고, $G_x$가 유한집합이면 $G_y$도 유한집합이며 $|G_y| = |G_x|$이다. $y \in G \cdot x$이면 궤도의 정의에 의해 $y = g \cdot x$인 $g$가 있으므로 마지막 문장이 성립한다.

**(4)** (i) 작용의 조건 (i)에 의해 모든 $x$에서 $e \cdot x = x$이므로 $X^e = X$이다. 둘째 문장은 $X^G$와 $X^g$의 정의를 나란히 놓은 것이고, 셋째 문장은 둘째 문장에서 나온다.

(ii) $G_x \subseteq G$이므로 $G_x = G$인 것은 정확히 모든 $g$에서 $g \cdot x = x$일 때, 곧 $x \in X^G$일 때이다. 모든 $g$에서 $g \cdot x = x$이면 $G \cdot x$의 원소는 모두 $x$이고, [[orbit-of-an-action|궤도]]의 (1)에 의해 $x \in G \cdot x$이므로 $G \cdot x = \{x\}$이다. 거꾸로 $G \cdot x = \{x\}$이면 모든 $g$에서 $g \cdot x \in \{x\}$, 곧 $g \cdot x = x$이다.

(iii) $x \in X^G$이고 $g \in G$이면 $g \cdot x = x \in X^G$이므로 $X^G$는 $G$-불변이다. [[group-action|군의 작용]]의 (5)의 (ii)에 의해 $X - X^G$도 $G$-불변이다.

(iv) (iii)과 [[orbit-of-an-action|궤도]]의 (4)에 의해 $G \cdot x \subseteq X - X^G$이다. $G \cdot x$의 원소가 모두 $x$라고 하면, 궤도의 (1)에 의해 $x \in G \cdot x$이므로 $G \cdot x = \{x\}$이고, (ii)에 의해 $x \in X^G$가 되어 $x \in X - X^G$와 모순이다([[proof-by-contradiction|귀류법]]). 따라서 $G \cdot x$는 $x$와 다른 원소를 갖는다.

**(5)** (i) 자명한 작용에서는 모든 $g, x$에서 $g \cdot x = x$이므로 정의에서 바로 나온다.

(ii) $\sigma \cdot x_0 = \sigma(x_0)$이므로 안정자에 대한 문장은 정의이다. $x \in X^\sigma$인 것은 정확히 $\sigma(x) = x$일 때이고, [[support-of-a-permutation|치환의 받침]]의 정의에 의해 이것은 정확히 $x \notin \operatorname{supp} \sigma$일 때이다. $G = S_X$이면 안정자는 $\{f \in S_X : f(x_0) = x_0\}$이다.

(iii) $g \in G$이면 $g \cdot (aH) = (ga)H$이다. [[left-coset|잉여류]]의 (3)의 조건 (i)과 (v)가 동치라는 것을 $ga$와 $a$에 쓰면, $(ga)H = aH$인 것은 정확히 $a^{-1}(ga) \in H$일 때이다. 유한 곱에 의해 $a^{-1}(ga) = a^{-1}ga$이다. $a^{-1}ga = h \in H$이면 유한 곱에 의해 $aha^{-1} = (aa^{-1})g(aa^{-1}) = g$이므로 $g \in aHa^{-1}$이다. 거꾸로 $g = aha^{-1}$($h \in H$)이면 같은 계산으로 $a^{-1}ga = h \in H$이다. 따라서 $aH$의 안정자는 $aHa^{-1}$이다. 잉여류의 (5)에 의해 $eH = H$이고, $eHe^{-1} = c_e(H) = H$([[group-action-examples|군의 작용의 예]]의 (4)의 (ii)에서 $c_e = i_G$)이다.

(iv) 켤레 작용에서 $g \cdot x = gxg^{-1}$이다. $gxg^{-1} = x$이면 오른쪽에 $g$를 곱해 $gx = (gxg^{-1})g = xg$이고(유한 곱), 거꾸로 $gx = xg$이면 $gxg^{-1} = (xg)g^{-1} = x$이다. 따라서 $a$의 안정자는 $\{g : ga = ag\}$이고 $g$의 고정점 전체는 $\{x : gx = xg\}$이다. $x$가 모든 $g$에서 $gx = xg$를 만족하는 것은 [[subgroup-examples|부분군의 예]]의 (5)에 의해 정확히 $x \in Z(G)$일 때이다.

(v) 부분군 위의 켤레 작용에서 $g \cdot K = gKg^{-1}$이므로 안정자에 대한 문장은 정의이다. $K$가 고정점인 것은 정확히 모든 $g$에서 $gKg^{-1} = K$일 때이고, [[normal-subgroup|정규부분군]]의 (1)의 조건 (i)과 (iii)이 동치이므로 이것은 정확히 $K$가 정규부분군일 때이다.

**(6)** (i) 제한한 작용의 값은 원래의 $h \cdot x$이므로, 그 작용에서 $x$의 안정자는 $\{h \in H : h \cdot x = x\}$이고 이것은 $G_x \cap H$이다. 고정점 전체에 대한 문장은 정의이고, $H \subseteq G$이므로 $X^G \subseteq X^H$이다.

(ii) 제한한 작용의 값은 원래의 $g \cdot y$이므로, $y \in Y$의 안정자는 $\{g \in G : g \cdot y = y\} = G_y$이고, $g$의 고정점 전체는 $\{y \in Y : g \cdot y = y\} = Y \cap X^g$, 작용의 고정점 전체는 $Y \cap X^G$이다.
:::

## 예시와 반례

:::example[부호를 바꾸는 작용의 안정자와 고정점]
[[subgroup-examples|부분군의 예]]의 (3)의 $G = \{1, -1\}$($(\mathbb{R} - \{0\}, \cdot)$의 부분군, [[number-groups|수로 이루어진 군]])이 $\mathbb{R}$에 $\varepsilon \cdot x = \varepsilon x$로 작용한다고 합시다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K1), (K4), (K2)에 의해 $1 \cdot x = x$이고 $(\varepsilon\delta) \cdot x = \varepsilon \cdot (\delta \cdot x)$이므로 이것은 작용입니다. (K9)에 의해 $(-1) \cdot x = -x$이고, $x = -x$인 것은 정확히 $x = 0$일 때입니다($x = -x$이면 (K1), (K3), (K4)에 의해 $2x = x + x = 0$이고 $2 \ne 0$이므로 (K10)에 의해 $x = 0$이며, 거꾸로 (K9)에 의해 $-0 = (-1)0 = 0$입니다).

따라서 $G_0 = G$이고, $0$이 아닌 $x$에서 $G_x = \{1\}$입니다. 고정점은 $X^1 = \mathbb{R}$, $X^{-1} = \{0\}$, $X^G = \{0\}$입니다. (4)의 (ii)대로 $0$은 $G_0 = G$이고 궤도가 $\{0\}$인 점이며, (4)의 (iii)대로 $\mathbb{R} - \{0\}$은 $G$-불변입니다.
:::

:::counterexample[같은 궤도에 있는 두 점의 안정자는 다를 수 있다]
$X = \{1, 2, 3\}$, $G = S_X = S_3$이고 $H = \{i_X, (1\ 2)\}$라 합시다([[cycle-permutation|순환치환]]의 표기). $H$는 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 부분군입니다([[order-of-symmetric-group|대칭군의 원소의 개수]]의 (2)로 $S_3$은 유한군이고, 순환치환의 (5)로 $(1\ 2)(1\ 2) = i_X$). $G$가 $G/H$에 왼쪽 곱으로 작용하면 $(1\ 3) \cdot H = (1\ 3)H$이므로 $H$와 $(1\ 3)H$는 같은 궤도에 있습니다.

(5)의 (iii)에 의해 $H$의 안정자는 $H$이고, $(1\ 3)H$의 안정자는 $(1\ 3)H(1\ 3)^{-1}$입니다. 순환치환의 (5)에 의해 $(1\ 3)^{-1} = (1\ 3)$이고, $(1\ 3)(1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $1, 3, 2$로 보내므로 $(2\ 3)$입니다. 따라서 $(1\ 3)H$의 안정자는 $\{i_X, (2\ 3)\}$입니다. $(1\ 2)$는 $1$을 $2$로 보내고 $i_X$와 $(2\ 3)$은 $1$을 $1$로 보내므로 $(1\ 2) \notin \{i_X, (2\ 3)\}$이고, 두 안정자는 다릅니다. (3)이 말하는 대로 두 안정자는 원소의 개수가 $2$로 같고 서로 켤레입니다.
:::

## 확인 질문

:::check[왼쪽 곱 작용에서 안정자와 고정점은 무엇인가?]
[[group-action-examples|군의 작용의 예]]의 (3)의 작용에서 $gx = x$이면 [[group-basic-properties|군의 기본 성질]]의 (8)에 의해 $g = xx^{-1} = e$입니다. 따라서 모든 $x$에서 $G_x = \{e\}$입니다. 같은 이유로 $g \ne e$이면 $X^g = \emptyset$이고, $X^e = G$입니다. $X^G$는 $G = \{e\}$이면 $G$이고, $G$가 $e$ 말고 원소 $g$를 가지면 $X^G \subseteq X^g = \emptyset$이므로 공집합입니다.
:::

:::check[원소가 $k$개인 부분군이 하나뿐이면 그 부분군은 정규부분군인가?]
그렇습니다. $k$가 자연수이고 $G$의 부분군 가운데 원소를 $k$개 갖는 것이 $K$ 하나뿐이라 하면, [[group-action-examples|군의 작용의 예]]의 (6)의 (iii)의 $\mathcal{S}_k$는 $\{K\}$입니다. 그 항목의 (6)의 (i)에 의해 모든 $g$에서 $gKg^{-1}$은 원소가 $k$개인 부분군이므로 $gKg^{-1} \in \mathcal{S}_k$, 곧 $gKg^{-1} = K$입니다. 따라서 $K$는 부분군 위의 켤레 작용의 고정점이고, (5)의 (v)에 의해 정규부분군입니다.
:::
