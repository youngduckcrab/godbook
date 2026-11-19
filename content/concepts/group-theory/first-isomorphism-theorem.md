---
title: 제1 동형 정리
title_en: First Isomorphism Theorem
aliases: [첫째 동형 정리, 준동형 정리, 기본 준동형 정리, first isomorphism theorem, fundamental homomorphism theorem]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: "군 준동형 φ : G → G′의 핵을 K라 하면, 잉여류 aK를 φ(a)로 보내는 함수 η : G/K → φ(G)가 정확히 하나 있고 동형사상이다. 따라서 G/Ker φ ≅ φ(G)이고, φ가 전사이면 G/Ker φ ≅ G′이다. G/{e} ≅ G와 ℤ/mℤ ≅ ℤ_m을 따름으로 얻는다."
requires: [set, subset, function, function-composition, inverse-function, injective-surjective-bijective, operation-on-equivalence-classes, binary-operation, group, subgroup, subgroup-examples, power-in-a-group, cyclic-subgroup, order-of-an-element, number-groups, integers-modulo-n, congruence-modulo-n, divisibility, equivalence-classes-equal-iff-related, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, classification-of-cyclic-groups, left-coset, normal-subgroup, quotient-group, canonical-homomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 11.2절 The Isomorphism Theorems, Theorem 11.10 p.135–136, Example 11.11 p.136
    checked: original
    note: "(1)은 출처 Theorem 11.10(p.135–136)이다. 출처의 진술은 'K 는 정규이고, ϕ : G → G/K 가 표준 준동형이면 ψ = ηϕ 인 동형사상 η : G/K → ψ(G) 가 정확히 하나 있다'이다. 출처는 η(gK) = ψ(g) 로 정의하고 g₁K = g₂K 이면 g₁k = g₂ 인 k 로 값이 같음을 보인 뒤 'uniquely defined since ψ = ηϕ' 라고 적으며, 전사는 'Clearly' 로 넘긴다. 이 항목은 함수와 그 유일성을 동치류 위의 연산의 (1)로 얻고, 공역을 ψ(G) 로 다시 선언하는 단계와 유일성을 따로 쓴다. 출처의 ψ = ηϕ 는 두 변의 공역이 다르므로 이 항목은 (2)에서 값의 등식과 포함 함수 ι 를 써서 적는다. (3)은 출처에 따로 진술되어 있지 않고 Example 11.11(p.136)이 전사인 준동형으로 쓴다. (4)의 (i)은 출처에 명제로 없다(출처 Example 13.14(p.163)가 ⟨20⟩/{0} ≅ ℤ₃ 처럼 쓰고 그 근거는 적지 않는다. 검색어 '/{e}|/ ?{0}' 3건은 모두 그 예). (4)의 (ii)는 출처 Example 11.11(p.136)의 유한한 경우를 G = ℤ_m 에 쓴 것과 같고, 출처 Example 16.39(p.199)는 몫환으로서 ℤ/nℤ ≅ ℤ_n 이라고 증명 없이 쓴다. η 가 항등함수라는 것은 출처에 없다. 제2·제3 동형 정리와 대응 정리는 출처 Theorem 11.12–11.14(p.136–137)에 있고 이 항목은 다루지 않는다. 직관의 '같은 값으로 가는 원소들을 묶는다'는 출처 11장 연습문제 19(p.139, ϕ(a) = ϕ(b) 로 정한 관계의 동치류를 기술하라)와 같은 발상이다. 예시 '순환군의 분류를 다시 얻기'는 출처 Example 11.11(p.136)과 같은 대상과 같은 방법이다. 예시 'ℤ₆ 에서 ℤ₃ 으로'는 출처 11장 연습문제 15(p.139, 정규부분군을 정규부분군 안으로 보내는 준동형이 몫군 사이의 준동형을 유도함)의 한 경우와 같은 발상이고, 연습문제 5(p.138, ℤ₂₄ 에서 ℤ₁₈ 로의 준동형)와 출처 Example 13.14(p.163, ℤ₆₀/⟨3⟩ ≅ ℤ₃)와 같은 종류이다. 첫째 확인 질문(자명한 준동형)은 출처 Example 11.8(p.135)이 같은 준동형(모든 원소를 0 으로)을 다룬다. 둘째 확인 질문(단사인 준동형이면 G 와 상이 동형)은 출처 Cayley 정리의 증명(p.117)이 단사 준동형 g ↦ λ_g 와 그 상 사이의 동형을 보이는 것과 같은 결론이다. 이름 '기본 준동형 정리'(fundamental homomorphism theorem)는 출처에 나오지 않는다(검색어 'fundamental homomorphism|homomorphism theorem' 0건)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 단원 글의 '같다'를 '동형'으로, 근거 누락과 출처 예와 겹치는 것을 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$와 $(G', \ast')$이 [[group|군]]이고 $e$, $e'$이 각각 그 항등원이며, $\varphi : G \to G'$이 [[group-homomorphism|군 준동형]]이라 하자. 핵 $\operatorname{Ker} \varphi$와 상 $\varphi(G)$는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 것이고, 그 항목의 (4)에 의해 $\varphi(G)$는 $G'$의 부분군이므로 [[subgroup|부분군]]의 뜻으로 $G'$의 연산을 제한한 군이다. 동형사상과 $\cong$은 [[group-isomorphism|군의 동형]]의 것이다. $K = \operatorname{Ker} \varphi$라 하자. [[normal-subgroup|정규부분군]]의 (4)에 의해 $K$는 $G$의 정규부분군이므로 [[quotient-group|몫군]] $G/K$와 [[canonical-homomorphism|표준 준동형]] $\pi : G \to G/K$, $\pi(a) = aK$가 있다.

1. (제1 동형 정리) 함수 $\eta : G/K \to \varphi(G)$로서 모든 $a \in G$에서
   $$\eta(aK) = \varphi(a)$$
   인 것이 정확히 하나 있고, $\eta$는 군 $G/K$에서 군 $\varphi(G)$로의 동형사상이다. 따라서 $G/\operatorname{Ker} \varphi \cong \varphi(G)$이다.
2. (표준 준동형과의 관계) 모든 $a \in G$에서 $\eta(\pi(a)) = \varphi(a)$이다. 곧 $\iota : \varphi(G) \to G'$이 포함 함수(모든 $y \in \varphi(G)$에서 $\iota(y) = y$)이면 $\varphi = \iota \circ \eta \circ \pi$이다.
3. (전사인 경우) $\varphi : G \to G'$이 전사이면 $\varphi(G) = G'$이고, $\eta$는 군 $G/K$에서 군 $G'$으로의 동형사상이다. 따라서 $G/\operatorname{Ker} \varphi \cong G'$이다.
4. (따름) 
   - (i) 모든 군 $G$에서 $G/\{e\} \cong G$이고, 동형사상은 각 $\{a\}$를 $a$로 보낸다.
   - (ii) $m$이 자연수이면, 각 정수 $n$에 $[n] \in \mathbb{Z}_m$을 대응시키는 준동형 $f : \mathbb{Z} \to \mathbb{Z}_m$([[group-homomorphism|군 준동형]]의 (7)(i))에 이 정리를 쓰면 $(\mathbb{Z}, +)$의 몫군 $\mathbb{Z}/m\mathbb{Z}$는 $(\mathbb{Z}_m, +)$와 동형이고, 이때 $\eta$는 $\mathbb{Z}_m$의 항등함수이다. [[quotient-group|몫군]]의 (6)은 더 나아가 두 군이 같은 군이라고 말한다.

$G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면 (1)의 등식은 $\eta(a + K) = \varphi(a)$로 쓴다.
:::

:::english
Let $(G, \ast)$ and $(G', \ast')$ be groups with identities $e$ and $e'$ respectively, and let $\varphi : G \to G'$ be a group homomorphism. The kernel $\operatorname{Ker} \varphi$ and the image $\varphi(G)$ are those of the entry on kernels and images of homomorphisms; by item (4) of that entry $\varphi(G)$ is a subgroup of $G'$, hence a group under the restriction of the operation of $G'$ in the sense of the entry on subgroups. Isomorphisms and $\cong$ are those of the entry on isomorphisms of groups. Let $K = \operatorname{Ker} \varphi$. By item (4) of the entry on normal subgroups, $K$ is a normal subgroup of $G$, so there are the quotient group $G/K$ and the canonical homomorphism $\pi : G \to G/K$, $\pi(a) = aK$.

1. (First isomorphism theorem) There is exactly one function $\eta : G/K \to \varphi(G)$ such that
   $$\eta(aK) = \varphi(a)$$
   for all $a \in G$, and $\eta$ is an isomorphism from the group $G/K$ to the group $\varphi(G)$. Hence $G/\operatorname{Ker} \varphi \cong \varphi(G)$.
2. (Relation to the canonical homomorphism) $\eta(\pi(a)) = \varphi(a)$ for all $a \in G$. That is, if $\iota : \varphi(G) \to G'$ is the inclusion ($\iota(y) = y$ for all $y \in \varphi(G)$), then $\varphi = \iota \circ \eta \circ \pi$.
3. (The surjective case) If $\varphi : G \to G'$ is surjective, then $\varphi(G) = G'$ and $\eta$ is an isomorphism from the group $G/K$ to the group $G'$. Hence $G/\operatorname{Ker} \varphi \cong G'$.
4. (Consequences)
   - (i) For every group $G$, $G/\{e\} \cong G$, by the isomorphism sending each $\{a\}$ to $a$.
   - (ii) If $m$ is a natural number, applying the theorem to the homomorphism $f : \mathbb{Z} \to \mathbb{Z}_m$ assigning $[n] \in \mathbb{Z}_m$ to each integer $n$ (item (7)(i) of the entry on group homomorphisms) shows that the quotient group $\mathbb{Z}/m\mathbb{Z}$ of $(\mathbb{Z}, +)$ is isomorphic to $(\mathbb{Z}_m, +)$, and in this case $\eta$ is the identity function of $\mathbb{Z}_m$. Item (6) of the entry on quotient groups says further that the two groups are the same group.

If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, the equation in (1) is written $\eta(a + K) = \varphi(a)$.
:::

## 직관

준동형 $\varphi$는 서로 다른 원소를 같은 곳으로 보낼 수 있습니다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (2)에 의해 $\varphi(a) = \varphi(b)$인 것은 정확히 $a^{-1}b \in K$, 곧 $a$와 $b$가 같은 잉여류에 속할 때입니다. 그러니 같은 곳으로 가는 원소들을 한 잉여류로 묶으면, 묶음과 값이 하나씩 짝지어집니다. 이 짝짓기가 $\eta$이고, 곱셈도 지키므로 동형사상입니다((1)).

사진을 찍는 것에 비유할 수 있습니다. 앞뒤로 겹쳐 서서 사진에서 구별되지 않는 사람들을 한 무리로 묶으면, 무리와 사진 속의 모습이 하나씩 대응합니다. 비유에서 "사진"이 $\varphi$에, "사진에서 구별되지 않는 사람들의 무리"가 핵의 잉여류에, "사진 속의 모습 전체"가 상 $\varphi(G)$에 해당합니다. 비유가 맞지 않는 곳은, 사진에는 곱셈이 없지만 이 정리에서는 곱셈을 지킨다는 것이 핵심이라는 점입니다.

(2)는 $\varphi$를 세 단계로 나눕니다. 먼저 $\pi$로 잉여류로 보내고, $\eta$로 상에 옮기고, 끝으로 상을 $G'$ 안에 둡니다. $\pi$는 전사, $\eta$는 전단사, $\iota$는 단사이므로, 준동형이 "얼마나 많이 겹치는지"는 모두 첫 단계에, "얼마나 덮지 못하는지"는 모두 마지막 단계에 있습니다.

## 증명

:::idea
$\varphi$는 관계 $\sim_K$와 호환되므로 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)이 $\eta$를 정한다. 준동형은 몫군의 곱의 정의에서, 단사는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (2)의 역방향에서, 전사는 상의 정의에서 나온다.
:::

:::hint
$aK = bK$인 것은 정확히 $a^{-1}b \in K$일 때이고, $\varphi(a) = \varphi(b)$인 것도 정확히 $a^{-1}b \in K$일 때이다.
:::

:::hint
$\eta$를 먼저 $G/K$에서 $G'$으로의 함수로 얻은 뒤, 값이 모두 $\varphi(G)$에 있다는 것으로 공역을 바꾼다.
:::

:::proof
아래에서 "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$), "핵과 상의 ($k$)"는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 ($k$), "준동형의 ($k$)"는 [[group-homomorphism|군 준동형]]의 ($k$), "몫군의 ($k$)"는 [[quotient-group|몫군]]의 ($k$)이다. 잉여류의 (2)에 의해 $G/K$는 몫집합 $G/{\sim_K}$이고 $a$의 동치류는 $aK$이다.

**(1)** *함수.* $a, b \in G$이고 $a \sim_K b$이면 $a^{-1}b \in K$이므로 핵과 상의 (2)에 의해 $\varphi(a) = \varphi(b)$이다. 곧 $\varphi : G \to G'$은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 뜻으로 $\sim_K$와 호환되고, 그 항목의 (1)에 의해 함수 $\eta_0 : G/K \to G'$으로서 모든 $a \in G$에서 $\eta_0(aK) = \varphi(a)$인 것이 정확히 하나 있다. $G/K$의 원소는 모두 어떤 $a \in G$의 $aK$이고 $\eta_0(aK) = \varphi(a) \in \varphi(G)$이므로, [[function|함수]]의 진술에 의해 같은 집합 $\eta_0$은 $G/K$에서 $\varphi(G)$로의 함수이기도 하다. 이것을 $\eta : G/K \to \varphi(G)$로 쓴다. 유일성: $\eta' : G/K \to \varphi(G)$가 모든 $a$에서 $\eta'(aK) = \varphi(a)$를 만족하면, $\varphi(G) \subseteq G'$이므로 $\eta'$은 $G/K$에서 $G'$으로의 함수이기도 하고, $\eta_0$의 유일성에 의해 $\eta' = \eta_0 = \eta$이다.

*준동형.* $P, Q \in G/K$이면 $P = aK$, $Q = bK$인 $a, b \in G$가 있다. 몫군의 (2)와 $\varphi$가 준동형이라는 것에 의해
$$\eta(PQ) = \eta\bigl((ab)K\bigr) = \varphi(ab) = \varphi(a)\varphi(b) = \eta(P)\eta(Q)$$
이다. 오른쪽의 곱은 $G'$에서의 곱이고, [[subgroup|부분군]]의 (3)에 의해 군 $\varphi(G)$에서의 곱과 같다. 따라서 $\eta$는 군 $G/K$에서 군 $\varphi(G)$로의 준동형이다.

*단사.* $\eta(aK) = \eta(bK)$이면 $\varphi(a) = \varphi(b)$이고, 핵과 상의 (2)에 의해 $a^{-1}b \in K$이며, 잉여류의 (3)의 (iv)에서 (i)로 가는 방향에 의해 $aK = bK$이다.

*전사.* $y \in \varphi(G)$이면 $\varphi(a) = y$인 $a \in G$가 있고 $\eta(aK) = y$이다.

따라서 $\eta : G/K \to \varphi(G)$는 전단사인 준동형, 곧 동형사상이고 $G/K \cong \varphi(G)$이다.

**(2)** $a \in G$이면 $\eta(\pi(a)) = \eta(aK) = \varphi(a)$이다. $\eta \circ \pi : G \to \varphi(G)$와 $\iota : \varphi(G) \to G'$의 [[function-composition|합성]] $\iota \circ \eta \circ \pi$는 $G$에서 $G'$으로의 함수이고, $a$에서의 값은 $\iota(\eta(\pi(a))) = \varphi(a)$이다. 두 함수 $\varphi$와 $\iota \circ \eta \circ \pi$는 정의역이 $G$로 같고 모든 원소에서 값이 같으므로 같은 함수이다.

**(3)** 핵과 상의 (4)에 의해 $\varphi$가 전사이면 $\varphi(G) = G'$이다. 그러면 군 $\varphi(G)$의 연산은 $G'$의 연산을 $G'$ 자신으로 제한한 것이고, [[binary-operation|이항연산]]의 (3)에 의해 모든 $x, y \in G'$에서 값이 $x \ast' y$이므로 이항연산의 같음에 의해 $\ast'$ 자신이다. 곧 군 $\varphi(G)$는 군 $G'$이고, (1)의 $\eta$는 군 $G/K$에서 군 $G'$으로의 동형사상이다.

**(4)** (i) 준동형의 (4)에 의해 [[inverse-function|항등함수]] $i_G : G \to G$는 준동형이다. 핵의 정의에 의해 $\operatorname{Ker} i_G = \{g \in G : g = e\} = \{e\}$이고, $i_G : G \to G$는 전사이다. (3)에 의해 $\eta : G/\{e\} \to G$, $\eta(a\{e\}) = a$는 동형사상이다. $x \in a\{e\}$인 것은 정확히 $x = ae = a$일 때이므로 $a\{e\} = \{a\}$이고, $\eta(\{a\}) = a$이다.

(ii) 핵과 상의 (8)에 의해 $\operatorname{Ker} f = m\mathbb{Z}$이고 $f(\mathbb{Z}) = \mathbb{Z}_m$이므로, 핵과 상의 (4)에 의해 $f : \mathbb{Z} \to \mathbb{Z}_m$은 전사이다. (3)과 덧셈 표기에 의해 $\eta : \mathbb{Z}/m\mathbb{Z} \to \mathbb{Z}_m$, $\eta(n + m\mathbb{Z}) = [n]$은 동형사상이다. 잉여류의 (8)에 의해 $n + m\mathbb{Z} = [n]$이고 $\mathbb{Z}/m\mathbb{Z} = \mathbb{Z}_m$이므로, 모든 $P \in \mathbb{Z}_m$에서 $\eta(P) = P$이다. 곧 $\eta$는 $\mathbb{Z}_m$의 항등함수이다.

덧셈 표기: 잉여류의 (8)에 의해 $aK$는 $a + K$로 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[순환군의 분류를 다시 얻기]
$G$가 순환군이고 $a$가 그 생성원이라 합시다. [[group-homomorphism|군 준동형]]의 (7)(ii)에 의해 각 정수 $k$에 $a^k$를 대응시키는 $\gamma : \mathbb{Z} \to G$는 $(\mathbb{Z}, +)$에서 $G$로의 준동형이고, [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (8)에 의해 $\gamma(\mathbb{Z}) = \langle a \rangle = G$이므로 $\gamma$는 전사입니다. 핵은 $\operatorname{Ker} \gamma = \{k \in \mathbb{Z} : a^k = e\}$입니다.

$a$의 위수가 유한하고 $n = \operatorname{ord}(a)$이면, [[order-of-an-element|원소의 위수]]의 (2)에 의해 $a^k = e$인 것은 정확히 $n \mid k$일 때이고, [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 정확히 $k \in n\mathbb{Z}$일 때입니다. 곧 $\operatorname{Ker} \gamma = n\mathbb{Z}$이고, (3)에 의해 $\mathbb{Z}/n\mathbb{Z} \cong G$입니다. [[quotient-group|몫군]]의 (6)에 의해 $\mathbb{Z}/n\mathbb{Z}$는 군 $(\mathbb{Z}_n, +)$이므로 $(\mathbb{Z}_n, +) \cong G$이고, 이때 $\eta([k]) = a^k$입니다. 이것은 [[classification-of-cyclic-groups|순환군의 분류]]의 (2)의 동형사상 $\bar\gamma$와 같은 함수입니다(두 함수는 $\mathbb{Z}_n$의 모든 원소에서 값이 같다). 그 항목은 이 정리를 쓰지 않고 같은 함수를 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)로 직접 정했습니다.

$a$의 위수가 무한하면 [[order-of-an-element|원소의 위수]]의 (4)에 의해 $a^k = e$인 정수 $k$는 $0$뿐이므로 $\operatorname{Ker} \gamma = \{0\}$입니다. (3)에 의해 $\mathbb{Z}/\{0\} \cong G$이고 (4)(i)에 의해 $\mathbb{Z}/\{0\} \cong (\mathbb{Z}, +)$이므로, [[group-isomorphism|군의 동형]]의 (2)의 대칭과 추이로 $G \cong (\mathbb{Z}, +)$이고, 이것은 순환군의 분류의 (1)입니다.
:::

:::example[ℤ_6에서 ℤ_3으로]
이 예에서만 법 $6$의 동치류를 $[k]_6$, 법 $3$의 동치류를 $[k]_3$으로 씁니다. 정수 $k$, $l$이 $k \equiv l \pmod 6$이면 $k - l = 6c = 3(2c)$이므로 $k \equiv l \pmod 3$이고, [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[k]_3 = [l]_3$입니다. 곧 각 정수 $k$에 $[k]_3$을 대응시키는 함수 $\mathbb{Z} \to \mathbb{Z}_3$은 법 $6$ 합동과 호환되고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 함수 $\varphi : \mathbb{Z}_6 \to \mathbb{Z}_3$으로서 모든 정수 $k$에서 $\varphi([k]_6) = [k]_3$인 것이 정확히 하나 있습니다.

[[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $\varphi([k]_6 + [l]_6) = \varphi([k + l]_6) = [k + l]_3 = [k]_3 + [l]_3$이므로 $\varphi$는 $(\mathbb{Z}_6, +)$에서 $(\mathbb{Z}_3, +)$로의 준동형이고, $\mathbb{Z}_3$의 원소는 모두 $[k]_3 = \varphi([k]_6)$ 꼴이므로 전사입니다. 핵은 $[k]_3 = [0]_3$인 $[k]_6$ 전체입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_6 = \{[0]_6, \dots, [5]_6\}$이고, 같은 (1)을 법 $3$에 쓰면 $[0]_3$, $[1]_3$, $[2]_3$은 서로 다릅니다. $3 - 0 = 3$, $4 - 1 = 3$, $5 - 2 = 3$이므로 $[3]_3 = [0]_3$, $[4]_3 = [1]_3$, $[5]_3 = [2]_3$입니다. 따라서 $k = 0, 1, \dots, 5$ 가운데 $[k]_3 = [0]_3$인 것은 $k = 0$과 $k = 3$뿐이고 $\operatorname{Ker} \varphi = \{[0]_6, [3]_6\}$입니다. (3)에 의해
$$\mathbb{Z}_6/\{[0]_6, [3]_6\} \cong \mathbb{Z}_3$$
이고, 동형사상은 잉여류 $[k]_6 + \{[0]_6, [3]_6\} = \{[k]_6, [k + 3]_6\}$을 $[k]_3$으로 보냅니다.
:::

:::counterexample[핵보다 작은 정규부분군으로 나누면 단사가 아니다]
(1)에서 $K$를 핵보다 작은 정규부분군으로 바꾸면 결론이 깨집니다. $f : \mathbb{Z} \to \mathbb{Z}_2$, $f(n) = [n]$이라 하면 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (8)에 의해 $\operatorname{Ker} f = 2\mathbb{Z}$입니다. $\{0\}$은 $(\mathbb{Z}, +)$의 정규부분군이고([[normal-subgroup|정규부분군]]의 (2)), [[quotient-group|몫군]]의 (7)에 의해 $\mathbb{Z}/\{0\} = \{\{n\} : n \in \mathbb{Z}\}$입니다. 관계 $\sim_{\{0\}}$에서 $a \sim_{\{0\}} b$인 것은 정확히 $-a + b \in \{0\}$, 곧 $a = b$일 때이므로 $f$는 이 관계와 호환되고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 모든 $n$에서 $\{n\}$을 $[n]$으로 보내는 함수 $\mathbb{Z}/\{0\} \to \mathbb{Z}_2$가 있습니다. 그러나 $0 \ne 2$이므로 $\{0\} \ne \{2\}$인데 $2 - 0 = 2 \cdot 1$이어서 $[0] = [2]$이므로, 이 함수는 단사가 아닙니다.

일반적으로 $N$이 $G$의 정규부분군이고 $N \subseteq K$, $N \ne K$라 합시다. $a^{-1}b \in N$이면 $a^{-1}b \in K$이므로 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (2)에 의해 $\varphi(a) = \varphi(b)$이고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 $aN$을 $\varphi(a)$로 보내는 함수 $G/N \to G'$이 있습니다. $k \in K - N$을 잡으면 [[left-coset|잉여류]]의 (5)에 의해 $kN \ne N = eN$인데 $\varphi(k) = e' = \varphi(e)$이므로 이 함수는 단사가 아닙니다. 같은 값으로 가는 원소들을 한 잉여류에 모두 모으려면 핵 전체로 나누어야 합니다.
:::

## 확인 질문

:::check[$\varphi : G \to G'$이 자명한 준동형(모든 값이 $e'$)이면 (1)은 무엇을 말하는가?]
[[homomorphism-kernel-and-image|준동형의 핵과 상]]의 정의에 의해 $\operatorname{Ker} \varphi = G$이고 $\varphi(G) = \{e'\}$입니다. (1)에 의해 $G/G \cong \{e'\}$이고, $\eta$는 $G/G$의 유일한 원소 $G = eG$를 $e'$으로 보냅니다. [[quotient-group|몫군]]의 (7)과 같이 두 군 모두 원소가 하나입니다.
:::

:::check[$\varphi : G \to G'$이 단사인 준동형이면 (1)에서 무엇을 얻는가?]
[[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (3)에 의해 $K = \{e\}$이고, (1)에 의해 $\eta : G/\{e\} \to \varphi(G)$, $\eta(\{a\}) = \varphi(a)$는 동형사상입니다($a\{e\} = \{a\}$는 (4)(i)의 증명). (4)(i)의 동형사상을 $\theta : G/\{e\} \to G$라 하면 $\theta(\{a\}) = a$이므로 [[inverse-function|역함수]] $\theta^{-1}$은 $a$를 $\{a\}$로 보내고, 모든 $a \in G$에서 $\eta(\theta^{-1}(a)) = \varphi(a)$입니다. [[group-isomorphism|군의 동형]]의 (1)과 (2)에 의해 $\eta \circ \theta^{-1} : G \to \varphi(G)$는 동형사상이고, 이것은 $\varphi$를 공역 $\varphi(G)$로 선언한 함수와 같습니다. 곧 같은 항목의 (4)의 $G \cong \varphi(G)$를 이 정리로 다시 얻습니다.
:::
