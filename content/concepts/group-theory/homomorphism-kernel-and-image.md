---
title: 준동형의 핵과 상
title_en: Kernel and Image of a Group Homomorphism
aliases: [군 준동형의 핵, 군 준동형의 상, 준동형사상의 핵, kernel of a group homomorphism, image of a group homomorphism, homomorphic image]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군 준동형 φ의 핵 Ker φ(항등원으로 가는 원소 전체)는 부분군이고, φ(a) = φ(b)인 것은 a⁻¹b가 핵에 속할 때이며, φ가 단사인 것은 핵이 {e}일 때이다. 부분군의 상과 역상은 부분군이고, 아벨군과 순환군의 상은 각각 아벨군과 순환군이며, 준동형을 부분군으로 제한한 것의 핵은 그 부분군과 핵의 교집합이다.
requires: [set, subset, function, injective-surjective-bijective, adding-or-removing-an-element, image-and-preimage, well-ordering-principle, even-and-odd, divisibility, integer-cancellation, congruence-modulo-n, equivalence-classes-equal-iff-related, real-number-arithmetic, group, group-basic-properties, subgroup, subgroup-criteria, subgroup-examples, power-in-a-group, cyclic-subgroup, number-groups, integers-modulo-n, symmetric-group, group-homomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 11.1절 Group Homomorphisms, Proposition 11.4 의 3, 4 p.134, 핵의 정의(번호 없음) p.134, Theorem 11.5 p.135, Example 11.9 p.135, 11.4절 연습문제 9, 10, 18, 19 p.139
    checked: original
    note: "출처는 Proposition 11.4 의 4(p.134)로 ϕ⁻¹({e}) 가 부분군임을 얻고 이것을 ϕ 의 핵(kernel)이라 부르며 ker ϕ 로 쓴다(p.134). 이 항목은 핵을 {g ∈ G : φ(g) = e′} 로 직접 정의하고 역상 기호를 쓰지 않으며, 기호는 선형대수의 Ker 에 맞추었다. 상(φ(G))을 출처는 homomorphic image 라 부른다(p.133). (1)은 핵의 정의 앞의 그 문장, (4)는 Proposition 11.4 의 3, (5)는 그 4 의 앞부분이다(p.134). 출처는 4 에서 ϕ⁻¹(H₂) = {g ∈ G₁ : ϕ(g) ∈ H₂} 로 쓰고, 이 항목은 역원의 기호와 겹치지 않도록 역상 기호 없이 집합으로 쓴다. 출처는 Proposition 11.4 의 3 을 Proposition 3.31(xy⁻¹ 꼴의 부분군 판정법)로, 4 를 같은 꼴의 확인으로 보이고, 이 항목의 (4), (5)의 증명도 같은 판정법을 쓴다. (2)는 출처 본문에 명제로 없고, 출처 연습문제 11.19(p.139, φ(a) = φ(b) 로 정한 관계 a ∼ b 가 동치관계임을 보이고 그 동치류를 기술하라)와 같은 발상이다. 그 동치류가 (2)로 기술된다(검색어 'a ?∼ ?b if' 로 찾았다. 기호 꼴 'g1−1 g2' 5건은 Lemma 6.3, 연습문제 6.11, Theorem 11.10 의 증명이고, 'a−1 b ∈' 0건, 'in the kernel' 2건은 Theorem 11.10 의 증명과 17장이다). 출처는 Theorem 11.10 의 증명(p.135–136)에서 ψ(g₁) = ψ(g₂) 이면 g₁⁻¹g₂ 가 핵에 속한다는 것과, 핵의 원소 k 로 g₁k = g₂ 이면 ψ(g₁) = ψ(g₂) 라는 것을 그 자리에서 쓴다. (3)은 출처 연습문제 11.18(p.139, ϕ 가 단사인 것은 ϕ⁻¹(e) = {e} 일 때)이다. (6)은 출처 Theorem 11.5(p.135, 핵은 정규부분군이다)가 말하는 내용의 한 꼴이고, 같은 계산이 Proposition 11.4 의 4 뒷부분의 증명(p.134)에 ϕ(g⁻¹hg) = [ϕ(g)]⁻¹ϕ(h)ϕ(g) 꼴로 있다. 이 항목은 정규부분군이라는 말을 쓰지 않는다. (7)의 아벨군은 출처 연습문제 11.9(p.139)이고, 그 답의 힌트(p.326)가 이 항목과 같은 계산을 적는다. (7)의 순환군은 출처 연습문제 11.10(p.139)이다. φ(⟨a⟩) = ⟨φ(a)⟩ 의 꼴은 출처에 명제로 없고(검색어 'ϕ(hai)' 꼴, 'hϕ(' 꼴 모두 0건), 연습문제 11.10 과 연습문제 9.27 의 답의 힌트(p.325, ϕ(a) 가 H 의 생성원임을 보이라)가 이 꼴을 쓰게 한다. (9)는 출처 Theorem 11.12 의 증명(p.137)이 표준 준동형을 H 위에서 보고 ker ϕ = {h ∈ H : h ∈ N} = H ∩ N 으로 계산하는 것을 일반 준동형으로 적은 것이다. (8)의 γ 에 관한 부분은 출처 Example 11.1(p.133, 이 준동형은 ℤ 를 g 가 생성하는 순환 부분군 위로 보낸다)과 Example 11.9(p.135, 그 핵)와 같은 대상이고, 이 항목은 핵을 원소의 위수를 쓰지 않고 {n : aⁿ = e} 로 적는다. (8)의 f 의 핵이 mℤ 라는 것은 출처 Example 16.20(p.195)이 같은 함수를 환 준동형으로 보고 적는 결론과 같다. 예시 '정수의 k 배의 핵과 상'은 출처 연습문제 11.4(p.138, ϕ(n) = 7n 의 핵과 상을 구하라)와 같은 발상이다. 예시 '0 이 아닌 실수의 제곱의 핵'의 함수는 출처 연습문제 11.8(p.139, 아벨군에서 g 를 gⁿ 으로 보내는 준동형)의 n = 2 를 (ℝ − {0}, ·) 에 쓴 것이다. 반례 '상이 아벨군이어도 정의역은 아벨군이 아닐 수 있다'는 출처 Example 11.2(p.133, GL₂(ℝ) 에서 ℝ* 로의 행렬식)와 11장 첫머리(p.133, S_n 과 ℤ₂ 의 짝·홀 곱셈표)가 아벨군이 아닌 군에서 아벨군으로 가는 준동형을 드는 것과 같은 발상이다. 첫째 확인 질문(ℤ 에서 ℤ₄ 로 n 을 [2n] 으로)은 출처 연습문제 11.6(p.138, ℤ 에서 ℤ₁₂ 로의 준동형을 모두 구하라)이 다루는 것과 같은 종류의 준동형이고, 핵과 상을 구하는 것은 연습문제 11.4 와 같은 발상이다. 출처 읽기 질문 11.3 의 1(p.138, ℤ₁₀ 에서 x 를 x + x 로)과 11.5절 연습문제 9(p.140, ℤ_n 에서 a 를 ka 로)도 몇 배를 하는 준동형을 다룬다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 출처의 연습문제와 겹치는 것을 메모에 밝히고 경계 경우의 문장을 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$와 $(G', \ast')$이 [[group|군]]이고 $e$, $e'$이 각각 그 항등원이며, $\varphi : G \to G'$이 [[group-homomorphism|군 준동형]]이라 하자. 곱, 역원, 거듭제곱의 표기는 그 항목의 것이고, 부분군은 [[subgroup|부분군]]의 뜻이다. $\varphi$의 **핵**(kernel)과 **상**(image)을
$$\operatorname{Ker} \varphi = \{g \in G : \varphi(g) = e'\}, \qquad \varphi(G) = \{\varphi(g) : g \in G\}$$
로 정한다. $\varphi(G)$와, $X \subseteq G$에 대한 $\varphi(X) = \{\varphi(x) : x \in X\}$는 [[image-and-preimage|상과 역상]]의 (1)의 상이다. 곧 $y \in \varphi(X)$인 것은 정확히 $\varphi(x) = y$인 $x \in X$가 있을 때이다.

1. (핵) $e \in \operatorname{Ker} \varphi$이고, $\operatorname{Ker} \varphi$는 $G$의 부분군이다.
2. (값이 같을 조건) $a, b \in G$에 대하여 $\varphi(a) = \varphi(b)$인 것은 정확히 $a^{-1}b \in \operatorname{Ker} \varphi$일 때이고, 또 정확히 $ab^{-1} \in \operatorname{Ker} \varphi$일 때이다.
3. (단사) $\varphi$가 [[injective-surjective-bijective|단사]]인 것은 정확히 $\operatorname{Ker} \varphi = \{e\}$일 때이다.
4. (부분군의 상) $H$가 $G$의 부분군이면 $\varphi(H)$는 $G'$의 부분군이다. 특히 상 $\varphi(G)$는 $G'$의 부분군이다. 또 $\varphi : G \to G'$이 [[injective-surjective-bijective|전사]]인 것은 정확히 $\varphi(G) = G'$일 때이다.
5. (부분군의 역상) $H'$이 $G'$의 부분군이면 $\{g \in G : \varphi(g) \in H'\}$은 $\operatorname{Ker} \varphi$를 포함하는 $G$의 부분군이다. 이 집합은 [[image-and-preimage|상과 역상]]의 (2)의 역상이지만, 이 강의는 역원의 기호와 겹치지 않도록 역상을 이렇게 집합으로 쓴다.
6. (핵과 켤레) 모든 $g \in G$와 모든 $k \in \operatorname{Ker} \varphi$에 대하여 $gkg^{-1} \in \operatorname{Ker} \varphi$이다.
7. (아벨군과 순환군의 상) $G$가 아벨군이면 군 $\varphi(G)$도 아벨군이다. 모든 $a \in G$에 대하여 $\varphi(\langle a \rangle) = \langle \varphi(a) \rangle$이다. 여기서 $\langle a \rangle$는 $G$에서, $\langle \varphi(a) \rangle$는 $G'$에서 [[cyclic-subgroup|순환 부분군]]의 뜻이다. 따라서 $G$가 순환군이고 $a$가 그 생성원이면 $\varphi(G) = \langle \varphi(a) \rangle$이고, 군 $\varphi(G)$는 순환군이며 $\varphi(a)$는 그 생성원이다.
8. (정수의 덧셈군에서 나가는 준동형) $m$이 자연수이고 $f : \mathbb{Z} \to \mathbb{Z}_m$이 [[group-homomorphism|군 준동형]]의 (7)(i)의 준동형, 곧 $f(n) = [n]$이면 $\operatorname{Ker} f = m\mathbb{Z}$이고 $f(\mathbb{Z}) = \mathbb{Z}_m$이다. $a \in G$이고 $\gamma : \mathbb{Z} \to G$가 같은 항목의 (7)(ii)의 준동형, 곧 $\gamma(n) = a^n$이면 $\operatorname{Ker} \gamma = \{n \in \mathbb{Z} : a^n = e\}$이고 $\gamma(\mathbb{Z}) = \langle a \rangle$이다. 따라서 $\gamma$가 단사인 것은 정확히 $a^n = e$인 정수 $n$이 $0$뿐일 때이다.
9. (제한의 핵) $H$가 $G$의 부분군이면, [[group-homomorphism|군 준동형]]의 (5)(i)의 준동형 $\varphi|_H : H \to G'$의 핵은 $\operatorname{Ker}(\varphi|_H) = H \cap \operatorname{Ker} \varphi$이다.
:::

:::english
Let $(G, \ast)$ and $(G', \ast')$ be groups with identities $e$ and $e'$ respectively, and let $\varphi : G \to G'$ be a group homomorphism. Products, inverses and powers are written as in the entry on group homomorphisms, and subgroups are meant in the sense of the entry on subgroups. The **kernel** and the **image** of $\varphi$ are
$$\operatorname{Ker} \varphi = \{g \in G : \varphi(g) = e'\}, \qquad \varphi(G) = \{\varphi(g) : g \in G\}.$$
$\varphi(G)$, and $\varphi(X) = \{\varphi(x) : x \in X\}$ for $X \subseteq G$, are images in the sense of item (1) of the entry on images and preimages; that is, $y \in \varphi(X)$ exactly when $\varphi(x) = y$ for some $x \in X$.

1. (Kernel) $e \in \operatorname{Ker} \varphi$, and $\operatorname{Ker} \varphi$ is a subgroup of $G$.
2. (When values agree) For $a, b \in G$, $\varphi(a) = \varphi(b)$ exactly when $a^{-1}b \in \operatorname{Ker} \varphi$, and also exactly when $ab^{-1} \in \operatorname{Ker} \varphi$.
3. (Injectivity) $\varphi$ is injective exactly when $\operatorname{Ker} \varphi = \{e\}$.
4. (Images of subgroups) If $H$ is a subgroup of $G$, then $\varphi(H)$ is a subgroup of $G'$. In particular the image $\varphi(G)$ is a subgroup of $G'$. Moreover, $\varphi : G \to G'$ is surjective exactly when $\varphi(G) = G'$.
5. (Preimages of subgroups) If $H'$ is a subgroup of $G'$, then $\{g \in G : \varphi(g) \in H'\}$ is a subgroup of $G$ containing $\operatorname{Ker} \varphi$. This set is the preimage of item (2) of the entry on images and preimages, but this course writes preimages as such sets to avoid a clash with the symbol for inverses.
6. (Kernel and conjugates) For every $g \in G$ and every $k \in \operatorname{Ker} \varphi$, $gkg^{-1} \in \operatorname{Ker} \varphi$.
7. (Images of abelian and cyclic groups) If $G$ is abelian, then the group $\varphi(G)$ is abelian. For every $a \in G$, $\varphi(\langle a \rangle) = \langle \varphi(a) \rangle$, where $\langle a \rangle$ is taken in $G$ and $\langle \varphi(a) \rangle$ in $G'$, in the sense of the entry on cyclic subgroups. Hence if $G$ is cyclic with generator $a$, then $\varphi(G) = \langle \varphi(a) \rangle$, the group $\varphi(G)$ is cyclic, and $\varphi(a)$ is a generator of it.
8. (Homomorphisms out of the additive group of integers) If $m$ is a natural number and $f : \mathbb{Z} \to \mathbb{Z}_m$ is the homomorphism of item (7)(i) of the entry on group homomorphisms, that is, $f(n) = [n]$, then $\operatorname{Ker} f = m\mathbb{Z}$ and $f(\mathbb{Z}) = \mathbb{Z}_m$. If $a \in G$ and $\gamma : \mathbb{Z} \to G$ is the homomorphism of item (7)(ii) of the same entry, that is, $\gamma(n) = a^n$, then $\operatorname{Ker} \gamma = \{n \in \mathbb{Z} : a^n = e\}$ and $\gamma(\mathbb{Z}) = \langle a \rangle$. Hence $\gamma$ is injective exactly when $0$ is the only integer $n$ with $a^n = e$.
9. (Kernel of a restriction) If $H$ is a subgroup of $G$, then the kernel of the homomorphism $\varphi|_H : H \to G'$ of item (5)(i) of the entry on group homomorphisms is $\operatorname{Ker}(\varphi|_H) = H \cap \operatorname{Ker} \varphi$.
:::

## 직관

핵은 준동형으로 옮기면 항등원이 되어 "사라지는" 원소들입니다. 시계로 말하면 정수 $n$시간 뒤의 바늘 자리를 주는 $\mathbb{Z} \to \mathbb{Z}_{12}$에서, 바늘이 제자리로 돌아오는 시간 전체, 곧 $12$의 배수 전체가 핵입니다((8)). 두 시간 $a$, $b$가 같은 바늘 자리를 주는 것은 그 차가 $12$의 배수일 때인데, 이것이 (2)를 덧셈으로 읽은 것입니다($-a + b \in 12\mathbb{Z}$).

(2)는 "값이 같은가"라는 물음을 "핵에 들어 있는가"라는 물음으로 바꿔 줍니다. 그래서 단사인지 보려면 핵만 보면 됩니다((3)). 일반적인 함수에서는 그렇지 않습니다. 한 값으로 가는 원소가 하나뿐이어도 다른 값으로 가는 원소는 여럿일 수 있기 때문입니다(아래 첫째 반례). 준동형에서는 곱셈이 지켜지므로, 같은 값으로 가는 원소들은 그 가운데 한 원소 $a$에 핵의 원소 $k$를 곱한 꼴 $ak$로 모두 나타납니다.

상은 준동형이 실제로 닿는 원소 전체이고, 곱셈이 지켜지므로 다시 부분군입니다((4)). 아벨군의 곱셈표를 옮기면 옮겨 간 곳에서도 곱의 순서를 바꿀 수 있고, 한 원소의 거듭제곱 전체를 옮기면 옮겨 간 원소의 거듭제곱 전체가 됩니다((7)). 거꾸로 상이 아벨군이라고 원래 군이 아벨군이라고 할 수는 없습니다(아래 둘째 반례).

## 증명

:::idea
(1), (4), (5)는 [[subgroup-criteria|부분군 판정법]]의 (2)를 준동형이 곱과 역원을 보존한다는 것으로 확인한다. (2)는 $\varphi(a^{-1}b) = \varphi(a)^{-1}\varphi(b)$가 $e'$인 것과 $\varphi(a) = \varphi(b)$인 것이 같다는 데서, (3)은 (2)에서 나온다.
:::

:::hint
(2): $xy = e'$이면 $y = x^{-1}$이다. $x = \varphi(a)^{-1}$로 두어 본다.
:::

:::hint
(7): $\langle a \rangle$의 원소는 $a^n$ 꼴이고, 준동형은 거듭제곱을 거듭제곱으로 보낸다.
:::

:::proof
아래에서 "준동형의 ($k$)"는 [[group-homomorphism|군 준동형]]의 ($k$), "기본 성질의 ($k$)"는 [[group-basic-properties|군의 기본 성질]]의 ($k$), "판정법의 (2)"는 [[subgroup-criteria|부분군 판정법]]의 (2)이다. 판정법의 (2)는 "정확히 ~일 때"이므로, 부분군 $H$와 $a, b \in H$에 대하여 $ab^{-1} \in H$라는 방향으로도 쓴다. [[image-and-preimage|상과 역상]]의 (1)에 의해 $\varphi(X) \subseteq G'$이고, $\operatorname{Ker} \varphi$와 (5)의 집합은 정의에 의해 $G$의 부분집합이다.

**(1)** 준동형의 (1)에 의해 $\varphi(e) = e'$이므로 $e \in \operatorname{Ker} \varphi$이고 $\operatorname{Ker} \varphi \ne \emptyset$이다. $a, b \in \operatorname{Ker} \varphi$이면 준동형의 정의와 (2), 기본 성질의 (4)($e'^{-1} = e'$)에 의해
$$\varphi(ab^{-1}) = \varphi(a)\varphi(b^{-1}) = \varphi(a)\varphi(b)^{-1} = e'e'^{-1} = e'e' = e'$$
이므로 $ab^{-1} \in \operatorname{Ker} \varphi$이다. 판정법의 (2)에 의해 $\operatorname{Ker} \varphi$는 $G$의 부분군이다.

**(2)** 준동형의 정의와 (2)에 의해 $\varphi(a^{-1}b) = \varphi(a)^{-1}\varphi(b)$이고 $\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1}$이다.
- $\varphi(a) = \varphi(b)$이면 $\varphi(a^{-1}b) = \varphi(a)^{-1}\varphi(a) = e'$이고 $\varphi(ab^{-1}) = \varphi(a)\varphi(a)^{-1} = e'$이므로 $a^{-1}b$와 $ab^{-1}$은 모두 $\operatorname{Ker} \varphi$에 속한다.
- $a^{-1}b \in \operatorname{Ker} \varphi$이면 $\varphi(a)^{-1}\varphi(b) = e'$이다. 기본 성질의 (3)("$xy = e$이면 $y = x^{-1}$")과 (5)에 의해 $\varphi(b) = (\varphi(a)^{-1})^{-1} = \varphi(a)$이다.
- $ab^{-1} \in \operatorname{Ker} \varphi$이면 $\varphi(a)\varphi(b)^{-1} = e'$이다. 기본 성질의 (3)("$xy = e$이면 $x = y^{-1}$")과 (5)에 의해 $\varphi(a) = (\varphi(b)^{-1})^{-1} = \varphi(b)$이다.

**(3)** $\varphi$가 단사라 하자. $g \in \operatorname{Ker} \varphi$이면 $\varphi(g) = e' = \varphi(e)$이므로 [[injective-surjective-bijective|단사의 동치 꼴]]에 의해 $g = e$이다. (1)에 의해 $e \in \operatorname{Ker} \varphi$이므로 $\operatorname{Ker} \varphi = \{e\}$이다. 거꾸로 $\operatorname{Ker} \varphi = \{e\}$라 하자. $a, b \in G$이고 $\varphi(a) = \varphi(b)$이면 (2)에 의해 $a^{-1}b \in \{e\}$, 곧 $a^{-1}b = e$이다. 기본 성질의 (3)과 (5)에 의해 $b = (a^{-1})^{-1} = a$이다. 단사의 동치 꼴에 의해 $\varphi$는 단사이다.

**(4)** [[subgroup|부분군]]의 (1)에 의해 $e \in H$이므로 $\varphi(e) \in \varphi(H)$이고 $\varphi(H) \ne \emptyset$이다. $x, y \in \varphi(H)$이면 $\varphi(a) = x$, $\varphi(b) = y$인 $a, b \in H$가 있다. 판정법의 (2)에 의해 $ab^{-1} \in H$이고, 준동형의 정의와 (2)에 의해
$$xy^{-1} = \varphi(a)\varphi(b)^{-1} = \varphi(a)\varphi(b^{-1}) = \varphi(ab^{-1}) \in \varphi(H)$$
이다. 판정법의 (2)에 의해 $\varphi(H)$는 $G'$의 부분군이다. [[subgroup|부분군]]의 (4)에 의해 $G$는 $G$의 부분군이므로 $\varphi(G)$도 $G'$의 부분군이다. 전사: $\varphi(G) \subseteq G'$은 늘 성립한다. [[injective-surjective-bijective|전사]]의 정의에 의해 $\varphi : G \to G'$이 전사인 것은 정확히 모든 $y \in G'$에 대하여 $\varphi(g) = y$인 $g \in G$가 있을 때, 곧 정확히 $G' \subseteq \varphi(G)$일 때이다. 따라서 정확히 $\varphi(G) = G'$일 때이다.

**(5)** 이 집합을 $L$이라 하자. [[subgroup|부분군]]의 (1)을 $G'$의 부분군 $H'$에 쓰면 $e' \in H'$이다. $g \in \operatorname{Ker} \varphi$이면 $\varphi(g) = e' \in H'$이므로 $g \in L$이다. 곧 $\operatorname{Ker} \varphi \subseteq L$이고, (1)에 의해 $e \in L$이므로 $L \ne \emptyset$이다. $a, b \in L$이면 $\varphi(a), \varphi(b) \in H'$이므로 판정법의 (2)에 의해 $\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1} \in H'$이고, $ab^{-1} \in L$이다. 판정법의 (2)에 의해 $L$은 $G$의 부분군이다.

**(6)** [[group|군]]의 표기의 약속에 의해 $gkg^{-1} = (gk)g^{-1}$이다. 준동형의 정의와 (2), $\varphi(k) = e'$에 의해
$$\varphi\bigl((gk)g^{-1}\bigr) = \varphi(gk)\varphi(g^{-1}) = \bigl(\varphi(g)\varphi(k)\bigr)\varphi(g)^{-1} = \bigl(\varphi(g)e'\bigr)\varphi(g)^{-1} = \varphi(g)\varphi(g)^{-1} = e'$$
이다. 따라서 $gkg^{-1} \in \operatorname{Ker} \varphi$이다.

**(7)** 아벨군: (4)에 의해 $\varphi(G)$는 $G'$의 부분군이고, [[subgroup|부분군]]의 (3)에 의해 군 $\varphi(G)$의 곱은 $G'$의 곱이다. $x, y \in \varphi(G)$이면 $\varphi(a) = x$, $\varphi(b) = y$인 $a, b \in G$가 있고, $G$가 아벨군이므로 $xy = \varphi(a)\varphi(b) = \varphi(ab) = \varphi(ba) = \varphi(b)\varphi(a) = yx$이다. 따라서 군 $\varphi(G)$는 아벨군이다.

순환 부분군: $y \in \varphi(\langle a \rangle)$이면 $\varphi(x) = y$인 $x \in \langle a \rangle$가 있고, [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $x = a^n$인 정수 $n$이 있다. 준동형의 (3)에 의해 $y = \varphi(a^n) = \varphi(a)^n \in \langle \varphi(a) \rangle$이다. 거꾸로 $y \in \langle \varphi(a) \rangle$이면 $y = \varphi(a)^n$인 정수 $n$이 있고, 준동형의 (3)에 의해 $y = \varphi(a^n)$이며 $a^n \in \langle a \rangle$이므로 $y \in \varphi(\langle a \rangle)$이다. 따라서 $\varphi(\langle a \rangle) = \langle \varphi(a) \rangle$이다.

$G = \langle a \rangle$이면 $\varphi(G) = \varphi(\langle a \rangle) = \langle \varphi(a) \rangle$이다. [[cyclic-subgroup|순환 부분군]]의 (6)의 마지막 문장을 $G'$의 원소 $\varphi(a)$에 쓰면 군 $\langle \varphi(a) \rangle$는 순환군이고 $\varphi(a)$는 그 생성원이다. 군 $\varphi(G)$와 군 $\langle \varphi(a) \rangle$는 같은 집합 위에 $G'$의 연산을 제한한 것이므로 같은 군이다.

**(8)** $f$: [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_m, +)$의 항등원은 $[0]$이다. 정수 $n$에 대하여 $n \in \operatorname{Ker} f$인 것은 정확히 $[n] = [0]$일 때이고, [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 정확히 $n \equiv 0 \pmod m$일 때이며, [[congruence-modulo-n|합동]]의 정의에 의해 정확히 $m \mid n - 0$, 곧 $m \mid n$일 때이다. [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 이것은 정확히 $n \in m\mathbb{Z}$일 때이다. 따라서 $\operatorname{Ker} f = m\mathbb{Z}$이다. [[integers-modulo-n|법 m의 정수]]의 정의에 의해 $\mathbb{Z}_m = \{[n] : n \in \mathbb{Z}\} = f(\mathbb{Z})$이다.

$\gamma$: 정의에 의해 $\operatorname{Ker} \gamma = \{n \in \mathbb{Z} : \gamma(n) = e\} = \{n \in \mathbb{Z} : a^n = e\}$이고, [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $\gamma(\mathbb{Z}) = \{a^n : n \in \mathbb{Z}\} = \langle a \rangle$이다. $(\mathbb{Z}, +)$의 항등원은 $0$이므로 (3)에 의해 $\gamma$가 단사인 것은 정확히 $\operatorname{Ker} \gamma = \{0\}$일 때, 곧 $a^n = e$인 정수 $n$이 $0$뿐일 때이다($a^0 = e$이므로 $0$은 늘 $\operatorname{Ker} \gamma$에 속한다).

**(9)** [[group-homomorphism|군 준동형]]의 (5)(i)에 의해 $\varphi|_H : H \to G'$은 준동형이고, [[adding-or-removing-an-element|함수의 제한]]의 진술에 의해 모든 $h \in H$에서 $\varphi|_H(h) = \varphi(h)$이다. 핵의 정의에 의해 $x \in \operatorname{Ker}(\varphi|_H)$인 것은 정확히 $x \in H$이고 $\varphi|_H(x) = e'$일 때, 곧 정확히 $x \in H$이고 $\varphi(x) = e'$일 때, 곧 정확히 $x \in H \cap \operatorname{Ker} \varphi$일 때이다.
:::

## 예시와 반례

:::example[정수의 k 배의 핵과 상]
$k$를 정해진 정수라 하고, (8)의 $\gamma$를 군 $(\mathbb{Z}, +)$와 원소 $a = k$에 대해 생각합시다. [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $\gamma(n) = n \cdot k = nk$이므로 $\gamma$는 각 정수 $n$에 $kn$을 대응시키는 준동형입니다. (8)과 [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 상은 $\langle k \rangle = k\mathbb{Z}$입니다. 핵은 $\{n \in \mathbb{Z} : kn = 0\}$입니다. $k \ne 0$이면 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $kn = 0$에서 $n = 0$이므로 핵은 $\{0\}$이고, (3)에 의해 $\gamma$는 단사입니다. $k = 0$이면 모든 $n$에서 $0n = 0$이므로 핵은 $\mathbb{Z}$이고 상은 $0\mathbb{Z} = \{0\}$입니다.
:::

:::example[0이 아닌 실수의 제곱의 핵]
군 $(\mathbb{R} - \{0\}, \cdot)$([[number-groups|수로 이루어진 군]]의 (3))에서 $s(x) = xx$로 정한 함수 $s$는 준동형입니다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)(vi)에 의해 $xx \ne 0$이고, (K1), (K2)에 의해 $s(xy) = (xy)(xy) = (xx)(yy) = s(x)s(y)$입니다. 이 군의 항등원은 $1$이므로 $\operatorname{Ker} s = \{x : xx = 1\}$입니다. (K3), (K4), (K9), (K12)(i)(iv)로 전개하면 $(x - 1)(x + 1) = xx + x - x - 1 = xx - 1$이므로, $xx = 1$이면 (K12)(v)에 의해 $(x - 1)(x + 1) = 0$이고, (K10)에 의해 $x - 1 = 0$이거나 $x + 1 = 0$, 곧 (K12)(v)와 (K8)(ii)에 의해 $x = 1$이거나 $x = -1$입니다. 거꾸로 $1 \cdot 1 = 1$이고 (K12)(iii)에 의해 $(-1)(-1) = 1$입니다. 따라서 $\operatorname{Ker} s = \{1, -1\}$이고, 이것이 (1)대로 부분군이라는 것은 [[subgroup-examples|부분군의 예와 교집합]]의 (3)과도 맞습니다. (K7)에 의해 $-1 \ne 1$이므로 (3)에 의해 $s$는 단사가 아닙니다. (2)를 쓰면 $s(a) = s(b)$인 것은 정확히 $a^{-1}b \in \{1, -1\}$, 곧 $b = a$이거나 $b = -a$일 때입니다($a^{-1}b = -1$이면 $b = a(a^{-1}b) = a(-1) = -a$).
:::

:::counterexample[준동형이 아닌 함수에서는 (3)이 성립하지 않을 수 있다]
각 정수 $n$에 $nn$을 대응시키는 함수 $q : \mathbb{Z} \to \mathbb{Z}$를 봅시다. [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $nn = 0$인 정수 $n$은 $0$뿐이므로, $0$으로 가는 원소는 $0$ 하나뿐입니다. 그러나 $q(1) = 1 = q(-1)$이고 $1 \ne -1$이므로 $q$는 단사가 아닙니다. $q$는 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}, +)$로의 준동형이 아니고($q(1 + 1) = 4 \ne 2 = q(1) + q(1)$), (3)의 준동형이라는 가정이 빠지면 결론이 깨질 수 있음을 보여 줍니다.
:::

:::counterexample[상이 아벨군이어도 정의역은 아벨군이 아닐 수 있다]
$X$를 서로 다른 세 원소를 갖는 집합이라 하고, [[group-homomorphism|군 준동형]]의 (4)의 자명한 준동형 $z : S_X \to \mathbb{Z}$, 곧 모든 치환에서 값이 $0$인 $S_X$에서 $(\mathbb{Z}, +)$로의 준동형을 봅시다. 상 $z(S_X) = \{0\}$은 원소가 하나인 군이므로 아벨군이고 순환군($\langle 0 \rangle = \{0\}$)입니다([[cyclic-subgroup|순환 부분군]]의 (4)와 (6)). 그러나 [[symmetric-group|대칭군]]의 (4)에 의해 $S_X$는 아벨군이 아니고, 순환 부분군 항목의 (7)에 의해 순환군도 아닙니다. 이때 $\operatorname{Ker} z = S_X$입니다. (7)의 역은 성립하지 않습니다.
:::

## 확인 질문

:::check[각 정수 $n$에 $\mathbb{Z}_4$의 원소 $[2n]$을 대응시키는 함수 $h : \mathbb{Z} \to \mathbb{Z}_4$는 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}_4, +)$로의 준동형인가? 그렇다면 핵과 상은 무엇인가?]
준동형입니다. 각 정수 $n$에 $2n$을 대응시키는 함수를 $d : \mathbb{Z} \to \mathbb{Z}$라 하면, [[group-homomorphism|군 준동형]]의 (7)(ii)를 $(\mathbb{Z}, +)$의 원소 $2$에 쓰고 [[power-in-a-group|군의 거듭제곱]]의 (6)으로 $n \cdot 2 = 2n$이므로 $d$는 준동형입니다. $f : \mathbb{Z} \to \mathbb{Z}_4$를 같은 항목의 (7)(i)의 준동형이라 하면 모든 $n$에서 $h(n) = f(d(n))$이므로 $h = f \circ d$이고, 같은 항목의 (4)에 의해 $h$는 준동형입니다. 핵: $h(n) = [0]$인 것은 정확히 $2n \in \operatorname{Ker} f$일 때이고, (8)에 의해 $\operatorname{Ker} f = 4\mathbb{Z}$이므로 [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 정확히 $4 \mid 2n$일 때입니다. $2n = 4c$이면 [[integer-cancellation|소거 법칙]]의 (2)에 의해 $n = 2c$이고, 거꾸로 $n = 2c$이면 $2n = 4c$입니다. 따라서 $\operatorname{Ker} h = 2\mathbb{Z}$이고, $2 \in \operatorname{Ker} h$이므로 (3)에 의해 $h$는 단사가 아닙니다. 상: [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $n = 2c$이거나 $n = 2c + 1$이고, $[4c] = [0]$, $[4c + 2] = [2]$이므로 $h(\mathbb{Z}) = \{[0], [2]\}$입니다.
:::

:::check[$\varphi : G \to G'$이 단사인 준동형이고 $G'$이 아벨군이면 $G$도 아벨군인가?]
그렇습니다. $a, b \in G$이면 $\varphi(ab) = \varphi(a)\varphi(b) = \varphi(b)\varphi(a) = \varphi(ba)$이고, $\varphi$가 단사이므로 $ab = ba$입니다. 둘째 반례와 견주어 보면, 상에서 정의역으로 성질을 되돌릴 때 단사라는 조건이 쓰였습니다.
:::
