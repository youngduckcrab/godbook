---
title: 켤레류
title_en: Conjugacy Class
aliases: [켤레, 켤레 원소, 켤레 관계, conjugacy class, conjugate elements, conjugacy]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: "군 G 의 원소 a 와 b 는 b = gag⁻¹ 인 g 가 있을 때 켤레이고, a 의 켤레류 cl(a) 는 켤레 작용에서 a 의 궤도이다. 켤레류 전체는 G 의 분할이고, 유한군에서 cl(a) 의 원소는 [G : C_G(a)] 개이다. cl(a) = {a} 인 것은 a 가 중심에 들 때이고, 켤레인 원소는 위수가 같으며, 정규부분군은 원소의 켤레류를 포함하는 부분군이다. 유한집합 위의 대칭군에서 길이 k 인 순환치환의 켤레류는 길이 k 인 순환치환 전체이다."
requires: [set, subset, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, equivalence-relation, equivalence-class, partition, group, group-basic-properties, finite-product-in-a-group, subgroup, subgroup-examples, order-of-an-element, group-isomorphism, normal-subgroup, lagrange-theorem, symmetric-group, order-of-symmetric-group, support-of-a-permutation, cycle-permutation, conjugate-of-a-cycle, group-action-examples, orbit-of-an-action, stabilizer-and-fixed-points, centralizer-and-normalizer, orbit-stabilizer-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.2절 The Class Equation, 켤레 작용과 켤레류의 정의 (p.171), Example 14.12–14.14 (p.171); 15.1절 The Sylow Theorems, 첫 문단 (p.181); 5.4절 Exercises, 연습문제 31 (p.73); 6.5절 Exercises, 연습문제 15 (p.79); 6.2절 Theorem 6.16 (p.77)"
    checked: original
    note: "출처 14.2절(p.171, 그림으로 대조)은 G 가 자기 자신에 켤레로 작용할 때 'The nontrivial orbits of the action are called the conjugacy classes of G' 라고 정의한다. 곧 출처의 정의에서 켤레류는 원소가 둘 이상인 궤도이다. 그런데 바로 뒤 Example 14.12(p.171)는 S₃ 의 켤레류를 {(1)}, {(1 2 3), (1 3 2)}, {(1 2), (1 3), (2 3)} 로 늘어놓아 {(1)} 을 켤레류에 넣고 6 = 1 + 2 + 3 이라 적으며, Example 14.13(p.171)은 D₄ 의 중심 {(1), (1 3)(2 4)} 을 따로 적고 원소가 둘인 켤레류 셋만 늘어놓은 뒤 8 = 2 + 2 + 2 + 2 라 적는다. Example 14.14(p.171)는 S₃ 의 켤레류가 셋이라고 세고, 15.1절 첫 문단(p.181)은 'conjugacy classes of G that consist of more than one element' 라고 써서 원소가 하나인 켤레류가 있는 듯이 말한다. 이 항목은 원소가 하나인 궤도도 켤레류라 부른다. 출처의 'nontrivial' 켤레류는 이 항목에서 원소가 둘 이상인 켤레류, 곧 (3)에 의해 중심 밖의 원소의 켤레류이다. 기호 cl(a) 는 이 사이트의 것이고 출처는 궤도의 기호 O_x 를 쓴다. (1)의 켤레 관계가 동치관계라는 것은 출처 5.4절 연습문제 31(p.73)이 S_n 에서 보이게 하는 것과 같은 내용이고, 6.5절 연습문제 15(p.79)는 β = γαγ⁻¹ 인 γ 가 있을 때 α 와 β 가 conjugate 라 한다. (2)는 출처 14.2절(p.171)이 'the order of each conjugacy class must divide the order of G' 라고 적는 것과 같은 내용이다. (6)은 출처 Example 14.14(p.171)가 Theorem 6.16(p.77)으로 τστ⁻¹ = (τ(a₁), …, τ(a_k)) 를 쓰고 'any two cycles of the same length are conjugate' 라고 적는 것과 같은 내용이며, 이 사이트에서는 1단원의 순환치환의 켤레 항목의 (3)을 쓴다. 출처가 이어서 적는 순환 분해의 꼴에 의한 켤레류의 분류는 싣지 않았다. 예시 '$S_4$에서 호환의 켤레류' 의 켤레류는 출처 14.5절 연습문제 6 (a)(p.179)의 힌트(p.328)에 S₄ 의 켤레류 O_(12) 로 나온다. 반례 '위수가 같아도 켤레가 아닐 수 있다' 의 (1 2)(3 4) 의 켤레류도 같은 힌트에 O_(1 2)(3 4) 로 나온다. 확인 질문 '$S_3$에서 $\\operatorname{cl}((1\\ 2\\ 3))$은 무엇인가?' 는 출처 Example 14.12(p.171)의 켤레류 {(1 2 3), (1 3 2)} 와 같다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(정규화 부분군 (5) 의 유한 가정, 켤레류 (3)(5) 에 아벨군·정규 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 켤레 작용과 $c_g$는 [[group-action-examples|군의 작용의 예]]의 (4)의 것이고, 중심 $Z(G)$는 [[subgroup-examples|부분군의 예]]의 (5), 중심화 부분군 $C_G(a)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]], 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]], 위수 $\operatorname{ord}$은 [[order-of-an-element|원소의 위수]]의 것이다.

$a, b \in G$가 **켤레**(conjugate)인 것은 정확히 $b = gag^{-1}$인 $g \in G$가 있을 때이다. $a \in G$에 대하여
$$\operatorname{cl}(a) = \{gag^{-1} : g \in G\}$$
를 $a$의 **켤레류**(conjugacy class)라 한다. 곧 $\operatorname{cl}(a)$는 켤레 작용에서 $a$의 궤도이고, $b \in \operatorname{cl}(a)$인 것은 정확히 $a$와 $b$가 켤레일 때이다. $G$의 부분집합 $C$가 $G$의 켤레류인 것은 정확히 어떤 $a \in G$에서 $C = \operatorname{cl}(a)$일 때이다. 원소가 하나인 켤레류도 켤레류라 부른다.

다음이 성립한다.

1. (분할) "켤레이다"는 $G$ 위의 [[equivalence-relation|동치관계]]이고, $\operatorname{cl}(a)$는 그 동치관계의 $a$를 포함하는 [[equivalence-class|동치류]]이며 $a \in \operatorname{cl}(a)$이다. 켤레류 전체의 집합 $\{\operatorname{cl}(a) : a \in G\}$는 $G$의 [[partition|분할]]이다. $a, b \in G$에 대하여 $b \in \operatorname{cl}(a)$인 것은 정확히 $\operatorname{cl}(b) = \operatorname{cl}(a)$일 때이다.
2. (원소의 개수) $G$가 유한군이면 $\operatorname{cl}(a)$는 원소를 $[G : C_G(a)]$개 갖는 유한집합이고, 이 수는 $|G|$를 나눈다.
3. (원소가 하나인 켤레류) $\operatorname{cl}(a) = \{a\}$인 것은 정확히 $a \in Z(G)$일 때이다. 특히 $\operatorname{cl}(e) = \{e\}$이다. $G$가 아벨군인 것은 정확히 모든 $a \in G$에서 $\operatorname{cl}(a) = \{a\}$일 때이다.
4. (켤레와 위수) $a$와 $b$가 켤레이면, 모든 정수 $n$에서 $a^n = e$인 것은 정확히 $b^n = e$일 때이다. 따라서 $a$의 위수가 유한한 것은 정확히 $b$의 위수가 유한할 때이고, 그때 $\operatorname{ord}(a) = \operatorname{ord}(b)$이다.
5. (정규부분군) $G$의 부분군 $N$이 $G$의 [[normal-subgroup|정규부분군]]인 것은 정확히 모든 $a \in N$에서 $\operatorname{cl}(a) \subseteq N$일 때이다.
6. (대칭군의 순환치환) $X$가 [[finite-set|유한집합]]이고 $k \ge 2$가 정수이며 $\tau$가 $S_X$의 길이 $k$인 순환치환이면, $S_X$에서 $\tau$의 켤레류는 $S_X$의 길이 $k$인 순환치환 전체의 집합이다.
:::

:::english
Let $G$ be a group with identity $e$. The action by conjugation and $c_g$ are those of item (4) of the examples of group actions, the center $Z(G)$ is that of item (5) of the examples of subgroups, the centralizer $C_G(a)$ that of the entry on centralizers and normalizers, the index $[G : H]$ that of the entry on Lagrange's theorem, and the order $\operatorname{ord}$ that of the entry on the order of an element.

Elements $a, b \in G$ are **conjugate** exactly when there is $g \in G$ with $b = gag^{-1}$. For $a \in G$, the set
$$\operatorname{cl}(a) = \{gag^{-1} : g \in G\}$$
is called the **conjugacy class** of $a$. Thus $\operatorname{cl}(a)$ is the orbit of $a$ under the action by conjugation, and $b \in \operatorname{cl}(a)$ exactly when $a$ and $b$ are conjugate. A subset $C$ of $G$ is a conjugacy class of $G$ exactly when $C = \operatorname{cl}(a)$ for some $a \in G$. A conjugacy class with one element is also called a conjugacy class.

The following hold.

1. (Partition) "Being conjugate" is an equivalence relation on $G$, $\operatorname{cl}(a)$ is the equivalence class of this relation containing $a$, and $a \in \operatorname{cl}(a)$. The set $\{\operatorname{cl}(a) : a \in G\}$ of all conjugacy classes is a partition of $G$. For $a, b \in G$, $b \in \operatorname{cl}(a)$ exactly when $\operatorname{cl}(b) = \operatorname{cl}(a)$.
2. (Number of elements) If $G$ is finite, then $\operatorname{cl}(a)$ is a finite set with $[G : C_G(a)]$ elements, and this number divides $|G|$.
3. (One-element classes) $\operatorname{cl}(a) = \{a\}$ exactly when $a \in Z(G)$. In particular $\operatorname{cl}(e) = \{e\}$. $G$ is abelian exactly when $\operatorname{cl}(a) = \{a\}$ for every $a \in G$.
4. (Conjugates and order) If $a$ and $b$ are conjugate, then for every integer $n$, $a^n = e$ exactly when $b^n = e$. Hence $a$ has finite order exactly when $b$ has finite order, and in that case $\operatorname{ord}(a) = \operatorname{ord}(b)$.
5. (Normal subgroups) A subgroup $N$ of $G$ is a normal subgroup of $G$ exactly when $\operatorname{cl}(a) \subseteq N$ for every $a \in N$.
6. (Cycles in a symmetric group) If $X$ is a finite set, $k \ge 2$ is an integer and $\tau$ is a cycle of length $k$ in $S_X$, then the conjugacy class of $\tau$ in $S_X$ is the set of all cycles of length $k$ in $S_X$.
:::

## 직관

$gag^{-1}$은 "$g$로 이름표를 바꿔 붙인 $a$"입니다. 치환으로 말하면, $\tau$가 점들을 옮기는 방식을 $\sigma$로 점의 이름을 바꿔 다시 적은 것이 $\sigma\tau\sigma^{-1}$입니다((6)). 그래서 켤레인 원소는 겉모습은 달라도 하는 일이 같고, 위수 같은 성질을 함께 가집니다((4)). 켤레류는 이렇게 "이름만 다른 원소들"을 한데 모은 것입니다. 비유가 정의와 맞는 곳은 이름표 바꾸기가 동형사상 $c_g$라는 점이고, 맞지 않는 곳은 위수가 같다고 해서 켤레인 것은 아니라는 점입니다(아래 반례).

켤레류는 켤레 작용의 궤도이므로 군을 겹치지 않게 나누고((1)), 유한군에서는 궤도–안정자 정리로 그 크기를 셉니다((2)). 이름표를 어떻게 바꿔도 그대로인 원소, 곧 모든 원소와 교환되는 중심의 원소는 켤레류가 자기 하나뿐입니다((3)).

## 증명

:::idea
켤레류는 켤레 작용의 궤도이므로 궤도의 성질과 궤도–안정자 정리를 그대로 쓴다. 위수는 $c_g$가 동형사상이라는 것으로, 대칭군의 경우는 1단원의 순환치환의 켤레로 본다.
:::

:::hint
켤레 작용에서 $g \cdot a = gag^{-1}$이다. "켤레이다"는 그 작용의 $G$-동치와 같은 관계이다.
:::

:::hint
$b = c_g(a)$이고 $c_g$는 동형사상이다.
:::

:::proof
켤레 작용에서 $g \cdot a = gag^{-1}$이므로([[group-action-examples|군의 작용의 예]]의 (4)의 (i)), "$a$와 $b$가 켤레이다"는 [[orbit-of-an-action|궤도]]의 진술의 관계 $a \sim_G b$와 같고, $\operatorname{cl}(a)$는 그 항목의 궤도 $G \cdot a$와 같다.

**(1)** 궤도의 (1), (2)를 켤레 작용에 쓴 것이다.

**(2)** [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (5)이다.

**(3)** [[stabilizer-and-fixed-points|안정자와 고정점]]의 (4)의 (ii)에 의해 $G \cdot a = \{a\}$인 것은 정확히 $a$가 켤레 작용의 고정점일 때이고, 같은 항목의 (5)의 (iv)에 의해 그 고정점 전체는 $Z(G)$이다. [[subgroup|부분군]]의 (1)에 의해 $e \in Z(G)$이므로 $\operatorname{cl}(e) = \{e\}$이다. [[subgroup-examples|부분군의 예]]의 (5)에 의해 $G$가 아벨군인 것은 정확히 $Z(G) = G$일 때, 곧 모든 $a$가 $Z(G)$에 속할 때이고, 이것은 방금 것에 의해 모든 $a$에서 $\operatorname{cl}(a) = \{a\}$인 것과 같다.

**(4)** $b = gag^{-1} = c_g(a)$라 하자. [[group-action-examples|군의 작용의 예]]의 (4)의 (iii)에 의해 $c_g$는 동형사상이므로, [[group-isomorphism|군의 동형]]의 (3)의 (v)에 의해 모든 정수 $n$에서 $a^n = e$인 것은 정확히 $c_g(a)^n = c_g(e)$일 때이다. [[group-basic-properties|군의 기본 성질]]의 (4)와 군의 표기에 의해 $c_g(e) = geg^{-1} = gg^{-1} = e$이므로 $a^n = e$인 것은 정확히 $b^n = e$일 때이다. 따라서 $a^n = e$인 자연수 $n$의 집합과 $b^n = e$인 자연수 $n$의 집합이 같고, [[order-of-an-element|원소의 위수]]의 정의에 의해 $a$의 위수가 유한한 것은 정확히 $b$의 위수가 유한할 때이며, 그때 두 위수는 같은 집합의 가장 작은 원소이므로 같다.

**(5)** [[normal-subgroup|정규부분군]]의 정의에 의해 $N$이 정규부분군인 것은 정확히 모든 $g \in G$와 $a \in N$에서 $gag^{-1} \in N$일 때이고, $\operatorname{cl}(a)$의 정의에 의해 이것은 정확히 모든 $a \in N$에서 $\operatorname{cl}(a) \subseteq N$일 때이다.

**(6)** $S_X$에서 $\tau$의 켤레류는 $\{\sigma\tau\sigma^{-1} : \sigma \in S_X\}$이고, [[conjugate-of-a-cycle|순환치환의 켤레]]의 (3)에 의해 이것은 $S_X$의 길이 $k$인 순환치환 전체의 집합이다.
:::

## 예시와 반례

아래에서 순환치환은 [[cycle-permutation|순환치환]]의 표기이고, 곱은 오른쪽 치환을 먼저 적용합니다. $X = \{1, 2, 3, 4\}$이고 $S_4 = S_X$이며 항등원을 $i_X$로 씁니다.

:::example[$S_4$에서 호환의 켤레류]
(6)에 의해 $\operatorname{cl}((1\ 2))$는 $S_4$의 호환 전체입니다. 호환 $(a\ b)$는 순환치환의 (2)에 의해 받침이 $\{a, b\}$이고 (5)에 의해 $(a\ b) = (b\ a)$이므로, 받침이 같은 두 호환은 같고 받침이 다른 두 호환은 다릅니다. $X$의 원소 둘로 된 부분집합은 $\{1, 2\}$, $\{1, 3\}$, $\{1, 4\}$, $\{2, 3\}$, $\{2, 4\}$, $\{3, 4\}$의 여섯이므로 $|\operatorname{cl}((1\ 2))| = 6$입니다.

[[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_4| = 24$이므로, (2)와 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $24 = 6 \cdot |C_{S_4}((1\ 2))|$이고 $|C_{S_4}((1\ 2))| = 4$입니다. 실제로 $i_X$, $(1\ 2)$, $(3\ 4)$, $(1\ 2)(3\ 4)$는 $(1\ 2)$와 교환됩니다. $(3\ 4)$는 $(1\ 2)$와 받침이 겹치지 않으므로 [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 교환되고, $(1\ 2)$가 $(1\ 2)$와 $(3\ 4)$ 둘 다와 교환되므로 [[finite-product-in-a-group|군의 유한 곱]]의 (8)에 의해 $(1\ 2)(3\ 4)$와도 교환됩니다. 네 치환은 $1$과 $3$에서의 값 $(1, 3)$, $(2, 3)$, $(1, 4)$, $(2, 4)$가 서로 달라 서로 다르므로, [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $C_{S_4}((1\ 2))$는 이 넷입니다.
:::

:::counterexample[위수가 같아도 켤레가 아닐 수 있다]
$S_4$에서 $(1\ 2)$와 $\rho = (1\ 2)(3\ 4)$를 봅시다. 순환치환의 (5)에 의해 $\operatorname{ord}((1\ 2)) = 2$입니다. $(1\ 2)$와 $(3\ 4)$는 받침이 겹치지 않으므로 [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 교환되고, 따라서 $\rho\rho = (1\ 2)(1\ 2)(3\ 4)(3\ 4) = i_X$이고, $\rho(1) = 2$이므로 $\rho \ne i_X$입니다. 따라서 [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}(\rho) = 2$입니다. 그러나 [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 $\operatorname{supp} \rho = \{1, 2, 3, 4\}$이고 호환의 받침은 원소가 둘이므로(순환치환의 (2)) $\rho$는 호환이 아니며, (6)에 의해 $\rho \notin \operatorname{cl}((1\ 2))$입니다. (4)의 역은 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$S_3$에서 $\operatorname{cl}((1\ 2\ 3))$은 무엇인가?]
(6)에 의해 $S_3$의 길이 $3$인 순환치환 전체입니다. 길이 $3$인 순환치환 $(a_1\ a_2\ a_3)$은 순환치환의 (3)으로 돌려 적어 $a_1 = 1$로 둘 수 있고, 그러면 $(a_2, a_3)$은 $(2, 3)$ 또는 $(3, 2)$입니다. 따라서 $\operatorname{cl}((1\ 2\ 3)) = \{(1\ 2\ 3), (1\ 3\ 2)\}$이고, 두 치환은 $1$을 각각 $2$, $3$으로 보내므로 다릅니다. (2)에 의해 $[S_3 : C_{S_3}((1\ 2\ 3))] = 2$이고, [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)의 $|S_3| = 6$과 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|C_{S_3}((1\ 2\ 3))| = 3$입니다.
:::

:::check[$z \in Z(G)$이면 $\operatorname{cl}(za)$와 $\operatorname{cl}(a)$는 어떤 관계인가?]
$g \in G$이면 $gz = zg$이므로 [[finite-product-in-a-group|군의 유한 곱]]의 (3)으로 묶음을 바꿔 $g(za)g^{-1} = (gz)ag^{-1} = (zg)ag^{-1} = z(gag^{-1})$입니다. 따라서 $\operatorname{cl}(za) = \{zb : b \in \operatorname{cl}(a)\}$, 곧 $\operatorname{cl}(a)$를 왼쪽 곱 $L_z$로 옮긴 집합입니다. $L_z$는 전단사이므로([[group-basic-properties|군의 기본 성질]]의 (10)) $G$가 유한군이면 두 켤레류의 원소의 개수가 같습니다.
:::
