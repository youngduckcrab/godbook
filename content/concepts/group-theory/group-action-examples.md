---
title: 군의 작용의 예
title_en: Examples of Group Actions
aliases: [자명한 작용, 자연스러운 작용, 왼쪽 곱 작용, 켤레 작용, 잉여류 위의 작용, 부분군 위의 켤레 작용, trivial action, action by left multiplication, action by conjugation, conjugation action]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: 자명한 작용, 대칭군의 부분군이 집합에 치환으로 작용하는 것, 군이 자기 자신에 왼쪽 곱과 켤레로 작용하는 것, 왼쪽 잉여류 전체에 왼쪽 곱으로 작용하는 것, 부분군 전체에 켤레로 작용하는 것이 모두 군의 작용임을 보인다. 켤레 c_g 는 동형사상이고 부분군의 켤레는 원소의 개수가 같은 부분군이다.
requires: [set, subset, power-set, function, function-composition, injective-surjective-bijective, inverse-function, image-and-preimage, preimage-and-set-operations, recursion-theorem, finite-set, number-of-elements-is-unique, equivalence-relation, operation-on-equivalence-classes, group, group-basic-properties, finite-product-in-a-group, subgroup, subgroup-criteria, cyclic-subgroup, symmetric-group, order-of-symmetric-group, cycle-permutation, left-coset, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, cayley-theorem, normal-subgroup, group-action]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.1절 Groups Acting on Sets, 자명한 작용과 S_X 의 부분군의 작용 (p.168), Example 14.3–14.5 (p.169); 14.2절 The Class Equation, 켤레 작용 (p.171); 15.1절 The Sylow Theorems, 부분군 전체 위의 켤레 작용 (p.182); 9.4절 Exercises, 연습문제 41, 44 (p.123); 11.5절 Additional Exercises: Automorphisms, 연습문제 2, 5 (p.139–140)"
    checked: original
    note: "(1)은 출처 14.1절(p.168)이 모든 군이 모든 집합에 'the trivial action (g, x) ↦ x' 로 작용한다고 적는 것, (2)는 같은 쪽에서 X 가 집합이고 G 가 S_X 의 부분군이면 X 가 (σ, x) ↦ σ(x) 로 G-set 이라고 적는 것과 같은 내용이다. 이 두 문장에는 증명이 없고, 증명은 이 사이트가 썼다. (3)은 Example 14.3(p.169)으로, 출처는 이것을 left regular representation λ_g(x) = gx 로 쓰고 끝에서 부분군 H 도 왼쪽 곱으로 G 에 작용한다고 적는다. 출처는 이 이름을 9.1절 Cayley's Theorem 의 증명 뒤(p.117)에서 g 를 λ_g 로 보내는 동형사상에 붙인다. (4)의 켤레 작용은 Example 14.4(p.169)가 부분군 H 의 G 위 작용 (h, g) ↦ hgh⁻¹ 로, 14.2절(p.171)이 G 자신의 작용 (g, x) ↦ gxg⁻¹ 로 쓴다. c_g 가 동형사상이라는 것은 출처 9.4절 연습문제 41(p.123)과 11.5절 연습문제 2(p.139)가 i_g(x) = gxg⁻¹ 을 inner automorphism 이라 부르며 보이게 하는 것이고, c_g ∘ c_h = c_{gh} 는 11.5절 연습문제 5(p.140)가 g 를 i_g 로 보내는 함수가 준동형임을 보이게 하는 것과 같은 내용이다. 9.4절 연습문제 44(p.123)는 i_g 를 ρ_g ∘ λ_g (ρ_g(x) = xg⁻¹) 로 쓰게 하는데, 이것은 이 항목의 c_g = L_g ∘ R_{g⁻¹} 과 인수의 순서만 다른 같은 분해이다(출처의 ρ_g 가 이 항목의 R_{g⁻¹} 이다). 기호 c_g 는 이 사이트의 것이다. (5)는 Example 14.5(p.169)로, 출처는 조건 1 을 'easy to see' 라 하고 조건 2 를 (gg′)xH = g(g′xH) 로 확인한다. 값이 대표에 상관없이 정해진다는 것(호환)은 이 항목이 동치류 위의 함수로 보였다. (6)의 작용은 15.1절(p.182)이 부분군 전체의 모임 S 위에서 부분군 H 가 h · K ↦ hKh⁻¹ 로 작용한다고 적는 것과 같은 것이고, (6)의 (i)과 (iii)의 증명은 이 사이트가 썼다. 예시 '$S_3$에서 켤레 작용과 왼쪽 곱 작용' 은 출처 Example 14.12(p.171)가 S₃ 의 켤레류를 늘어놓는 것과 같은 군을 쓴다. 예시 '잉여류 위의 왼쪽 곱 작용' 과 반례 '오른쪽 잉여류에서는 같은 꼴의 규칙이 함수가 되지 않을 수 있다' 의 잉여류는 출처 6.1절 Example 6.2 다음 문단(p.75)이 K = {(1), (1 2)} 의 왼쪽 잉여류와 오른쪽 잉여류를 늘어놓는 것과 같은 대상이고, 그 반례의 계산(H 의 왼쪽 잉여류와 오른쪽 잉여류가 다르다)은 출처 10.1절 Example 10.2(p.125)가 (1 2 3)H = {(1 2 3), (1 3)} 과 H(1 2 3) = {(1 2 3), (2 3)} 으로 H 가 정규가 아님을 보이는 것과 같은 발상이다. 확인 질문 '아벨군의 켤레 작용은 어떤 작용인가?' 는 출처 연습문제 14.6 (c)(p.179)가 아벨군 ℤ₉ 의 켤레류를 묻는 것과 같은 발상이다. 확인 질문 '$S_3$의 부분군 $H = \\{i_X, (1\\ 2)\\}$에 대하여 $(2\\ 3)H(2\\ 3)^{-1}$은 무엇인가?' 의 답 {(1), (1 3)} 은 출처 14.5절 연습문제 2 (a)의 힌트(p.328)에 S₃ 에서 2 의 안정자로 나오고, 그 답이 H 와 다르다는 것은 출처 Example 10.2(p.125)가 H = {(1), (1 2)} 를 정규가 아니라고 하는 것과 같은 결론이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인('(1)–(3) 은 명제로 없다' 를 검색어 넷으로 대조, 14.1절 원문 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 작용, 작용의 조건 (i), (ii), 작용이 정하는 준동형 $\theta$, $G$-불변, 제한한 작용은 [[group-action|군의 작용]]의 것이다. 왼쪽 곱 $L_g$와 오른쪽 곱 $R_g$는 [[group-basic-properties|군의 기본 성질]]의 (10)의 것이고, 대칭군 $S_X$, 그 곱(합성)과 항등원 $i_X$는 [[symmetric-group|대칭군]]의 것이며, 왼쪽 잉여류 $aH$와 $G/H$는 [[left-coset|잉여류]]의 것이다. 네 개 이상의 원소의 곱은 [[finite-product-in-a-group|군의 유한 곱]]의 것이다.

1. (자명한 작용) $X$가 집합이면, 각 $(g, x) \in G \times X$에 $x$를 대응시키는 함수 $G \times X \to X$는 $G$의 $X$ 위의 작용이다. 이것을 **자명한 작용**(trivial action)이라 한다. 이 작용에서 모든 $g$에 대하여 $\theta(g) = i_X$이다.
2. (치환군의 작용) $X$가 집합이고 $G$가 $S_X$의 [[subgroup|부분군]]이면, 각 $(\sigma, x) \in G \times X$에 $\sigma(x)$를 대응시키는 함수 $G \times X \to X$는 $G$의 $X$ 위의 작용이고, 모든 $\sigma \in G$에서 $\theta(\sigma) = \sigma$이다. 특히 $G = S_X$로 두면 $S_X$는 $X$에 $\sigma \cdot x = \sigma(x)$로 작용한다. 이것을 $S_X$의 $X$ 위의 **자연스러운 작용**(natural action)이라 한다. $S_X$의 부분군 $G$의 위 작용은 이 작용을 $G$로 제한한 것이다. 또 $\sigma \in S_X$이면 [[cyclic-subgroup|순환 부분군]] $\langle \sigma \rangle$가 $X$에 $\tau \cdot x = \tau(x)$로 작용한다.
3. (왼쪽 곱 작용) 각 $(g, x) \in G \times G$에 군의 곱 $gx$를 대응시키는 함수 $G \times G \to G$는 $G$의 집합 $G$ 위의 작용이다. 이것을 **왼쪽 곱 작용**이라 한다. 이 작용에서 모든 $g$에 대하여 $\theta(g) = L_g$이고, 따라서 $\theta$는 [[cayley-theorem|케일리 정리]]의 (1)의 $\lambda : G \to S_G$와 같은 함수이다. $H$가 $G$의 부분군이면 이것을 $H$로 제한한 작용으로 $H$는 $G$에 $h \cdot x = hx$로 작용한다.
4. (켤레 작용) $g \in G$에 대하여 $c_g = L_g \circ R_{g^{-1}} : G \to G$라 하자. 곧 모든 $x \in G$에서 $c_g(x) = gxg^{-1}$이다. $A \subseteq G$이면 $c_g$에 의한 $A$의 [[image-and-preimage|상]]을
   $$gAg^{-1} = c_g(A) = \{gag^{-1} : a \in A\}$$
   로 쓴다. $A$가 부분군이면 이것은 [[normal-subgroup|정규부분군]]의 진술의 $gAg^{-1}$과 같은 집합이다.
   - (i) 각 $(g, x) \in G \times G$에 $gxg^{-1}$을 대응시키는 함수 $G \times G \to G$는 $G$의 집합 $G$ 위의 작용이다. 이것을 **켤레 작용**(action by conjugation)이라 한다. 이 작용에서 $g \cdot x$는 $gxg^{-1}$이고 곱 $gx$가 아니다. 모든 $g$에 대하여 $\theta(g) = c_g$이다.
   - (ii) $c_e = i_G$이고, 모든 $g, h \in G$에서 $c_g \circ c_h = c_{gh}$이며, $c_g : G \to G$는 전단사이고 그 [[inverse-function|역함수]]는 $c_{g^{-1}}$이다.
   - (iii) 모든 $g \in G$에서 $c_g$는 군 $G$에서 군 $G$로의 [[group-isomorphism|동형사상]]이다.
   - (iv) $H$가 $G$의 부분군이면 켤레 작용을 $H$로 제한한 작용으로 $H$는 $G$에 $h \cdot x = hxh^{-1}$로 작용한다.
5. (잉여류 위의 왼쪽 곱 작용) $H$가 $G$의 부분군이라 하자. 각 $g \in G$에 대하여, 함수 $G/H \to G/H$로서 모든 $a \in G$에서 $aH$를 $(ga)H$로 보내는 것이 정확히 하나 있다. 각 $(g, C) \in G \times (G/H)$에 이 함수의 $C$에서의 값을 대응시키는 함수 $G \times (G/H) \to G/H$는 $G$의 $G/H$ 위의 작용이다. 곧 모든 $g, a \in G$에서 $g \cdot (aH) = (ga)H$이다. 이것을 **잉여류 위의 왼쪽 곱 작용**이라 한다. $K$가 $G$의 부분군이면 이것을 $K$로 제한한 작용으로 $K$는 $G/H$에 $k \cdot (aH) = (ka)H$로 작용한다.
6. (부분군 위의 켤레 작용) $\mathcal{S} = \{K \in \mathscr{P}(G) : K \text{는 } G \text{의 부분군}\}$, 곧 $G$의 부분군 전체의 집합이라 하자([[power-set|멱집합]]).
   - (i) $K$가 $G$의 부분군이고 $g \in G$이면 $gKg^{-1}$은 $G$의 부분군이고, $c_g$를 $K$로 제한한 함수를 $K \to gKg^{-1}$로 선언한 것은 군 $K$에서 군 $gKg^{-1}$로의 동형사상이다. 따라서 $K$가 [[finite-set|유한집합]]이면 $gKg^{-1}$도 유한집합이고 $|gKg^{-1}| = |K|$이다.
   - (ii) 각 $(g, K) \in G \times \mathcal{S}$에 $gKg^{-1}$을 대응시키는 함수 $G \times \mathcal{S} \to \mathcal{S}$는 $G$의 $\mathcal{S}$ 위의 작용이다. 이것을 **부분군 위의 켤레 작용**이라 한다. 이 작용에서 $g \cdot K$는 $gKg^{-1}$이고 왼쪽 잉여류 $gK$가 아니다.
   - (iii) 자연수 $k$에 대하여, 원소를 $k$개 갖는 유한집합인 $G$의 부분군 전체의 집합을 $\mathcal{S}_k$라 하자. 곧 $\mathcal{S}_k \subseteq \mathcal{S}$이고, $K \in \mathcal{S}$에 대하여 $K \in \mathcal{S}_k$인 것은 정확히 $K$가 원소를 $k$개 갖는 유한집합일 때이다. $\mathcal{S}_k$는 (ii)의 작용에 대해 $G$-불변이다. 따라서 $G$와 $G$의 모든 부분군 $H$는 $\mathcal{S}_k$에 켤레로 작용한다. 곧 $h \in H$, $K \in \mathcal{S}_k$에서 $h \cdot K = hKh^{-1}$이다.
:::

:::english
Let $G$ be a group with identity $e$. Actions, the conditions for an action (i) and (ii), the homomorphism $\theta$ determined by an action, $G$-invariance and restricted actions are those of the entry on group actions. Left multiplication $L_g$ and right multiplication $R_g$ are those of item (10) of the basic properties of groups, the symmetric group $S_X$ with its product (composition) and identity $i_X$ is that of the entry on symmetric groups, and left cosets $aH$ and $G/H$ are those of the entry on cosets. Products of four or more elements are those of the entry on finite products in a group.

1. (Trivial action) If $X$ is a set, the function $G \times X \to X$ assigning $x$ to each $(g, x) \in G \times X$ is an action of $G$ on $X$. It is called the **trivial action**. For this action, $\theta(g) = i_X$ for every $g$.
2. (Action of a permutation group) If $X$ is a set and $G$ is a subgroup of $S_X$, then the function $G \times X \to X$ assigning $\sigma(x)$ to each $(\sigma, x) \in G \times X$ is an action of $G$ on $X$, and $\theta(\sigma) = \sigma$ for every $\sigma \in G$. In particular, taking $G = S_X$, the group $S_X$ acts on $X$ by $\sigma \cdot x = \sigma(x)$. This is called the **natural action** of $S_X$ on $X$. The above action of a subgroup $G$ of $S_X$ is the restriction of this action to $G$. Also, if $\sigma \in S_X$, the cyclic subgroup $\langle \sigma \rangle$ acts on $X$ by $\tau \cdot x = \tau(x)$.
3. (Action by left multiplication) The function $G \times G \to G$ assigning the product $gx$ to each $(g, x) \in G \times G$ is an action of $G$ on the set $G$. It is called the **action by left multiplication**. For this action, $\theta(g) = L_g$ for every $g$, so $\theta$ is the same function as $\lambda : G \to S_G$ of item (1) of Cayley's theorem. If $H$ is a subgroup of $G$, then by restricting this action to $H$, the group $H$ acts on $G$ by $h \cdot x = hx$.
4. (Action by conjugation) For $g \in G$, let $c_g = L_g \circ R_{g^{-1}} : G \to G$; that is, $c_g(x) = gxg^{-1}$ for every $x \in G$. For $A \subseteq G$, write the image of $A$ under $c_g$ as
   $$gAg^{-1} = c_g(A) = \{gag^{-1} : a \in A\}.$$
   If $A$ is a subgroup, this is the same set as $gAg^{-1}$ in the statement of the entry on normal subgroups.
   - (i) The function $G \times G \to G$ assigning $gxg^{-1}$ to each $(g, x) \in G \times G$ is an action of $G$ on the set $G$. It is called the **action by conjugation**. In this action, $g \cdot x$ is $gxg^{-1}$, not the product $gx$. For every $g$, $\theta(g) = c_g$.
   - (ii) $c_e = i_G$, $c_g \circ c_h = c_{gh}$ for all $g, h \in G$, and $c_g : G \to G$ is a bijection whose inverse function is $c_{g^{-1}}$.
   - (iii) For every $g \in G$, $c_g$ is an isomorphism from the group $G$ to the group $G$.
   - (iv) If $H$ is a subgroup of $G$, then by restricting the action by conjugation to $H$, the group $H$ acts on $G$ by $h \cdot x = hxh^{-1}$.
5. (Action by left multiplication on cosets) Let $H$ be a subgroup of $G$. For each $g \in G$ there is exactly one function $G/H \to G/H$ sending $aH$ to $(ga)H$ for every $a \in G$. The function $G \times (G/H) \to G/H$ assigning to each $(g, C) \in G \times (G/H)$ the value of this function at $C$ is an action of $G$ on $G/H$. That is, $g \cdot (aH) = (ga)H$ for all $g, a \in G$. It is called the **action by left multiplication on cosets**. If $K$ is a subgroup of $G$, then by restricting this action to $K$, the group $K$ acts on $G/H$ by $k \cdot (aH) = (ka)H$.
6. (Action by conjugation on subgroups) Let $\mathcal{S} = \{K \in \mathscr{P}(G) : K \text{ is a subgroup of } G\}$, the set of all subgroups of $G$ (power set).
   - (i) If $K$ is a subgroup of $G$ and $g \in G$, then $gKg^{-1}$ is a subgroup of $G$, and the restriction of $c_g$ to $K$, declared as a function $K \to gKg^{-1}$, is an isomorphism from the group $K$ to the group $gKg^{-1}$. Hence, if $K$ is finite, then $gKg^{-1}$ is finite and $|gKg^{-1}| = |K|$.
   - (ii) The function $G \times \mathcal{S} \to \mathcal{S}$ assigning $gKg^{-1}$ to each $(g, K) \in G \times \mathcal{S}$ is an action of $G$ on $\mathcal{S}$. It is called the **action by conjugation on subgroups**. In this action, $g \cdot K$ is $gKg^{-1}$, not the left coset $gK$.
   - (iii) For a natural number $k$, let $\mathcal{S}_k$ be the set of all subgroups of $G$ that are finite sets with $k$ elements. That is, $\mathcal{S}_k \subseteq \mathcal{S}$, and for $K \in \mathcal{S}$, $K \in \mathcal{S}_k$ exactly when $K$ is a finite set with $k$ elements. $\mathcal{S}_k$ is $G$-invariant for the action in (ii). Hence $G$ and every subgroup $H$ of $G$ act on $\mathcal{S}_k$ by conjugation; that is, $h \cdot K = hKh^{-1}$ for $h \in H$ and $K \in \mathcal{S}_k$.
:::

## 직관

같은 군이 같은 집합에 여러 방법으로 작용할 수 있습니다. 이 항목에는 군 $G$가 자기 자신에 작용하는 방법이 세 가지 나옵니다. 아무것도 움직이지 않는 자명한 작용, 왼쪽에서 곱하는 작용, 양쪽에서 $g$와 $g^{-1}$로 감싸는 켤레 작용입니다. $G$가 아벨군이면 켤레 작용은 자명한 작용과 같지만(아래 확인 질문), $G$가 원소를 둘 이상 가지면 왼쪽 곱 작용은 자명한 작용과 다릅니다($g \ne e$이면 $ge \ne e$). 그래서 $g \cdot x$라고만 쓰면 어느 작용인지 밝혀야 합니다.

켤레 $gxg^{-1}$은 "$g$로 이름을 바꿔 붙인 $x$"로 볼 수 있습니다. $x$가 하는 일을 $g$가 옮겨 놓은 자리에서 똑같이 하는 원소입니다. 그래서 $c_g$는 곱을 보존하는 동형사상이고((4)의 (iii)), 부분군을 켤레로 옮기면 생김새가 같은 부분군이 나옵니다((6)의 (i)). 비유가 정의와 맞는 곳은 $c_g$가 곱셈표를 그대로 옮긴다는 점이고, 맞지 않는 곳은 $G$가 아벨군이면 $gxg^{-1} = x$라서 아무것도 옮겨지지 않는다는 점입니다(아래 확인 질문).

(5)의 작용은 잉여류에 대표를 골라 곱하는 것처럼 보이지만, 대표를 고르지 않고 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)로 정합니다. 같은 잉여류의 두 대표 $a$, $b$에서 $(ga)H = (gb)H$이기 때문입니다.

## 증명

:::idea
각 경우마다 함수가 정해진다는 것을 보이고 작용의 조건 (i), (ii)를 확인한다. 켤레 작용은 $c_g \circ c_h = c_{gh}$가 조건 (ii)이고, [[group-action|군의 작용]]의 (1), (2)에서 $c_g$가 전단사라는 것이 따라 나온다.
:::

:::hint
$a^{-1}b \in H$이면 $(ga)^{-1}(gb)$는 무엇인가?
:::

:::hint
$c_g(c_h(K))$는 합성 $c_g \circ c_h$에 의한 $K$의 상이다.
:::

:::proof
함수를 값으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓰고, 두 함수가 같다는 것은 [[function|함수]]의 함수의 같음으로 보인다. 네 개 이상의 원소의 곱을 다시 묶을 때는 [[finite-product-in-a-group|군의 유한 곱]]의 (1)과 (3)(일반 결합법칙)을 쓴다.

**(1)** 값 $x$는 $X$의 원소이므로 함수가 정해진다. $e \cdot x = x$이고, $(gh) \cdot x = x$와 $g \cdot (h \cdot x) = g \cdot x = x$가 같으므로 조건 (i), (ii)가 성립한다. 모든 $x$에서 $\theta(g)(x) = x = i_X(x)$이므로 $\theta(g) = i_X$이다.

**(2)** $\sigma \in G \subseteq S_X$는 $X$에서 $X$로의 함수이므로 $\sigma(x) \in X$이고 함수가 정해진다. [[subgroup|부분군]]의 (1)에 의해 $G$의 항등원은 $S_X$의 항등원 $i_X$([[symmetric-group|대칭군]]의 (1))이므로 $i_X \cdot x = i_X(x) = x$이다. 부분군의 (3)에 의해 $G$에서의 곱 $\sigma\tau$는 $S_X$에서의 곱, 곧 합성이므로 $(\sigma\tau) \cdot x = \sigma(\tau(x)) = \sigma \cdot (\tau \cdot x)$이다. 모든 $x$에서 $\theta(\sigma)(x) = \sigma(x)$이므로 $\theta(\sigma) = \sigma$이다. 부분군의 (4)에 의해 $S_X$는 자기 자신의 부분군이므로 $G = S_X$로 둘 수 있고, 두 작용은 $G \times X$에서 값이 같으므로 $G$의 작용은 $S_X$의 작용을 $G \times X$로 제한한 것이다. [[cyclic-subgroup|순환 부분군]]의 진술에 의해 $\langle \sigma \rangle$는 $S_X$의 부분군이므로 마지막 문장도 성립한다.

**(3)** $gx \in G$이므로 함수가 정해진다. [[group|군]]의 (2)에 의해 $ex = x$이고, 군의 (1)에 의해 $(gh)x = g(hx)$이므로 조건 (i), (ii)가 성립한다. 모든 $x$에서 $\theta(g)(x) = gx = L_g(x)$이므로 $\theta(g) = L_g$이다. [[cayley-theorem|케일리 정리]]의 (1)의 $\lambda$도 각 $g$에 $L_g$를 대응시키므로 $\theta = \lambda$이다. 마지막 문장은 [[group-action|군의 작용]]의 (4)이다.

**(4)** $x \in G$이면 $c_g(x) = L_g(R_{g^{-1}}(x)) = g(xg^{-1})$이고, 이것은 [[group|군]]의 표기의 $gxg^{-1}$이다. $gAg^{-1}$에 대한 문장은 [[normal-subgroup|정규부분군]]의 진술이 부분군 $N$에 대하여 $gNg^{-1}$을 같은 함수 $L_g \circ R_{g^{-1}}$에 의한 상으로 정했기 때문이다.

먼저 (ii)의 앞의 두 등식을 보인다. [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $e^{-1} = e$이므로 $c_e(x) = exe = x$이고 $c_e = i_G$이다. $g, h, x \in G$이면 $c_g(c_h(x)) = g(hxh^{-1})g^{-1}$이고, 유한 곱의 (1)과 (3)에 의해 이것은 열 $g, h, x, h^{-1}, g^{-1}$의 곱이며, 같은 이유로 $(gh)x(h^{-1}g^{-1})$와 같다. 군의 기본 성질의 (6)에 의해 $h^{-1}g^{-1} = (gh)^{-1}$이므로 $c_g(c_h(x)) = (gh)x(gh)^{-1} = c_{gh}(x)$이다. 따라서 $c_g \circ c_h = c_{gh}$이다.

(i) $gxg^{-1} \in G$이므로 함수가 정해지고, 그 $(g, x)$에서의 값은 $c_g(x)$이다. $c_e = i_G$이므로 조건 (i)이 성립하고, $c_{gh}(x) = c_g(c_h(x))$이므로 조건 (ii)가 성립한다. 모든 $x$에서 $\theta(g)(x) = c_g(x)$이므로 $\theta(g) = c_g$이다.

(ii) 남은 것은 전단사와 역함수이다. (i)과 [[group-action|군의 작용]]의 (1)에 의해 $c_g = \theta(g)$는 전단사이고, 같은 항목의 (2)에 의해 $\theta(g^{-1}) = \theta(g)^{-1}$이다. $S_G$에서 역원은 역함수이므로([[symmetric-group|대칭군]]의 (1)) $c_{g^{-1}}$은 $c_g$의 역함수이다.

(iii) $x, y \in G$이면 $c_g(x)c_g(y) = (gxg^{-1})(gyg^{-1})$이고, 유한 곱의 (3)에 의해 이것은 $(gx)(g^{-1}g)(yg^{-1}) = (gx)e(yg^{-1}) = (gx)(yg^{-1})$이며, 다시 유한 곱의 (1)과 (3)에 의해 $gxyg^{-1} = c_g(xy)$이다. 따라서 $c_g$는 [[group-homomorphism|준동형]]이고, (ii)에 의해 전단사이므로 [[group-isomorphism|군의 동형]]의 정의에 의해 동형사상이다.

(iv) [[group-action|군의 작용]]의 (4)이다.

**(5)** [[left-coset|잉여류]]의 (1), (2)에 의해 $\sim_H$는 $G$ 위의 동치관계이고 $a$의 동치류는 $aH$이며, 몫집합 $G/{\sim_H}$는 $G/H$이다. $g \in G$를 고정하고 $f_g : G \to G/H$를 $f_g(a) = (ga)H$로 정한다. $a \sim_H b$, 곧 $a^{-1}b \in H$이면 군의 기본 성질의 (6)과 유한 곱의 (3)에 의해
$$(ga)^{-1}(gb) = (a^{-1}g^{-1})(gb) = a^{-1}(g^{-1}g)b = a^{-1}b \in H$$
이므로, 잉여류의 (3)(조건 (iv)에서 (i))에 의해 $(ga)H = (gb)H$, 곧 $f_g(a) = f_g(b)$이다. 따라서 $f_g$는 $\sim_H$와 호환되고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 모든 $a \in G$에서 $\bar f_g(aH) = (ga)H$인 함수 $\bar f_g : G/H \to G/H$가 정확히 하나 있다.

각 $g$마다 $\bar f_g$가 정확히 하나로 정해져 있으므로, 각 $(g, C)$에 $\bar f_g(C)$를 대응시키는 함수 $G \times (G/H) \to G/H$가 정해진다. $G/H$의 원소 $C$는 어떤 $a \in G$에서 $C = aH$이다([[left-coset|잉여류]]의 $G/H$의 정의). 조건 (i): $e \cdot (aH) = (ea)H = aH$이다. 조건 (ii): $g, h \in G$이면 군의 (1)에 의해
$$(gh) \cdot (aH) = \bigl((gh)a\bigr)H = \bigl(g(ha)\bigr)H = g \cdot \bigl((ha)H\bigr) = g \cdot \bigl(h \cdot (aH)\bigr)$$
이다. 마지막 문장은 [[group-action|군의 작용]]의 (4)이다.

**(6)** (i) (4)의 (iii)에 의해 $c_g$는 준동형이므로, [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $gKg^{-1} = c_g(K)$는 $G$의 부분군이다. $c_g$는 동형사상이므로 [[group-isomorphism|군의 동형]]의 (3)의 (iv)에 의해 $c_g$를 $K$로 제한한 함수 $K \to c_g(K)$는 동형사상이고, $K$가 유한집합이면 $c_g(K)$도 유한집합이며 $|c_g(K)| = |K|$이다.

(ii) (i)에 의해 $gKg^{-1} \in \mathcal{S}$이므로 함수 $G \times \mathcal{S} \to \mathcal{S}$가 정해진다. 조건 (i): $c_e = i_G$이므로 $eKe^{-1} = i_G(K) = \{k : k \in K\} = K$이다. 조건 (ii): (4)의 (ii)와 [[preimage-and-set-operations|상과 역상의 성질]]의 (4)(합성에 의한 상)에 의해
$$(gh)K(gh)^{-1} = c_{gh}(K) = (c_g \circ c_h)(K) = c_g\bigl(c_h(K)\bigr) = g\bigl(hKh^{-1}\bigr)g^{-1}$$
이다.

(iii) $K \in \mathcal{S}_k$이고 $g \in G$이면 (i)에 의해 $gKg^{-1}$은 부분군이고 원소를 $k$개 갖는 유한집합이다([[number-of-elements-is-unique|원소의 개수]]). 따라서 $g \cdot K \in \mathcal{S}_k$이고 $\mathcal{S}_k$는 $G$-불변이다. [[group-action|군의 작용]]의 (5)에 의해 $G$는 $\mathcal{S}_k$에 작용하고, 같은 항목의 (5)의 (iii)에 의해 $G$의 부분군 $H$도 $\mathcal{S}_k$에 작용한다.
:::

## 예시와 반례

아래에서 $X = \{1, 2, 3\}$이고 $S_3 = S_X$이며([[symmetric-group|대칭군]]의 (5)), 그 항등원을 $i_X$로 씁니다. 순환치환은 [[cycle-permutation|순환치환]]의 표기이고, 곱은 합성이므로 오른쪽 치환을 먼저 적용합니다.

:::example[$S_3$에서 켤레 작용과 왼쪽 곱 작용]
$g = (1\ 2)$, $x = (1\ 3)$이라 합시다. 왼쪽 곱 작용에서 $g \cdot x = gx = (1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $3, 1, 2$로 보내므로 $(1\ 3\ 2)$입니다. 켤레 작용에서는 순환치환의 (5)에 의해 $g^{-1} = g$이므로 $g \cdot x = (1\ 2)(1\ 3)(1\ 2)$이고, 이것은 $(1\ 3\ 2)(1\ 2)$와 같아 $1, 2, 3$을 각각 $1, 3, 2$로 보냅니다. 곧 켤레 작용에서 $g \cdot x = (2\ 3)$입니다. 같은 군, 같은 집합, 같은 $g$와 $x$인데 두 작용의 값이 다르고, 켤레의 값은 $x$처럼 호환입니다.
:::

:::example[잉여류 위의 왼쪽 곱 작용]
$H = \{i_X, (1\ 2)\}$라 합시다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (2)에 의해 $S_3$은 유한군이고, $H$는 공집합이 아니며 순환치환의 (5)($(1\ 2)(1\ 2) = i_X$)에 의해 곱에 닫혀 있으므로 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 부분군입니다. $(1\ 3)(1\ 2)$는 $1, 2, 3$을 각각 $2, 3, 1$로 보내므로 $(1\ 2\ 3)$이고 $(1\ 3)H = \{(1\ 3), (1\ 2\ 3)\}$입니다. 같은 방법으로 $(2\ 3)(1\ 2) = (1\ 3\ 2)$이므로 $(2\ 3)H = \{(2\ 3), (1\ 3\ 2)\}$입니다.

$g = (1\ 3)$의 작용을 봅시다. $g \cdot H = g \cdot (i_X H) = (1\ 3)H$이고, $g \cdot ((1\ 3)H) = ((1\ 3)(1\ 3))H = i_X H = H$입니다. $(1\ 3)(2\ 3)$은 $1, 2, 3$을 각각 $3, 1, 2$로 보내므로 $(1\ 3\ 2)$이고, 이것은 $(2\ 3)H$의 원소이므로 [[left-coset|잉여류]]의 (3)에 의해 $g \cdot ((2\ 3)H) = (1\ 3\ 2)H = (2\ 3)H$입니다. 곧 $(1\ 3)$은 두 잉여류 $H$와 $(1\ 3)H$를 맞바꾸고 $(2\ 3)H$를 그대로 둡니다. 대표를 바꿔 $(1\ 3)H = (1\ 2\ 3)H$로 써도 $(1\ 3)(1\ 2\ 3) = (1\ 2)$이므로 $g \cdot ((1\ 2\ 3)H) = (1\ 2)H = H$로 같은 답이 나옵니다.
:::

:::counterexample[오른쪽 잉여류에서는 같은 꼴의 규칙이 함수가 되지 않을 수 있다]
위의 $H$의 오른쪽 잉여류([[left-coset|잉여류]]의 (7))에 "$Ha$를 $H(ga)$로 보낸다"는 규칙을 써 봅시다. $g = (1\ 3)$이라 합시다. $(1\ 2) \in H$이므로 잉여류의 (7)에 의해 $Hi_X = H = H(1\ 2)$입니다. 그런데 $a = i_X$로 계산하면 $H(g i_X) = H(1\ 3) = \{(1\ 3), (1\ 2)(1\ 3)\} = \{(1\ 3), (1\ 3\ 2)\}$이고, $a = (1\ 2)$로 계산하면 $g(1\ 2) = (1\ 2\ 3)$이므로 $H(1\ 2\ 3) = \{(1\ 2\ 3), (1\ 2)(1\ 2\ 3)\} = \{(1\ 2\ 3), (2\ 3)\}$입니다. 같은 잉여류 $H$에 두 다른 값이 나오므로, 모든 $a$에서 $Ha$를 $H(ga)$로 보내는 함수는 없습니다. (5)가 왼쪽 잉여류에서 성립하는 것은 $a^{-1}b \in H$에서 $(ga)^{-1}(gb) = a^{-1}b$가 나오기 때문이고, 오른쪽 잉여류의 조건 $ab^{-1} \in H$에서는 $(ga)(gb)^{-1} = gab^{-1}g^{-1}$이 $H$에 든다는 것이 따라 나오지 않고, 이 예에서는 실제로 들지 않습니다.
:::

## 확인 질문

:::check[아벨군의 켤레 작용은 어떤 작용인가?]
자명한 작용입니다. $G$가 아벨군이면 모든 $g, x$에서 $gxg^{-1} = xgg^{-1} = xe = x$이므로, 켤레 작용과 (1)의 자명한 작용은 $G \times G$의 모든 점에서 값이 같습니다. 따라서 모든 $g$에서 $c_g = i_G$이고, (6)의 작용에서도 모든 부분군 $K$에서 $gKg^{-1} = K$입니다.
:::

:::check[$S_3$의 부분군 $H = \{i_X, (1\ 2)\}$에 대하여 $(2\ 3)H(2\ 3)^{-1}$은 무엇인가?]
순환치환의 (5)에 의해 $(2\ 3)^{-1} = (2\ 3)$이므로 구할 집합은 $\{(2\ 3)i_X(2\ 3), (2\ 3)(1\ 2)(2\ 3)\}$입니다. 첫 원소는 $i_X$이고, $(2\ 3)(1\ 2)(2\ 3)$은 $(1\ 3\ 2)(2\ 3)$과 같아 $1, 2, 3$을 각각 $3, 2, 1$로 보내므로 $(1\ 3)$입니다. 따라서 $(2\ 3)H(2\ 3)^{-1} = \{i_X, (1\ 3)\}$이고, (6)의 (i)이 말하는 대로 원소가 $2$개인 부분군입니다. $H$와 다른 부분군이므로 $H$는 이 작용에서 $(2\ 3)$에 의해 옮겨집니다.
:::
