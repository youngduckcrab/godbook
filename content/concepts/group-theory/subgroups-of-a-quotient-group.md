---
title: 몫군의 부분군 (대응 정리)
title_en: Subgroups of a Quotient Group (Correspondence Theorem)
aliases: [대응 정리, 몫군의 부분군, correspondence theorem, subgroups of a quotient group, lattice isomorphism theorem]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: N이 군 G의 정규부분군일 때 N을 포함하는 G의 부분군 H를 몫군의 부분군 H/N으로 보내는 대응은 N을 포함하는 부분군 전체와 G/N의 부분군 전체 사이의 포함 관계를 보존하는 전단사이고, 정규부분군은 정규부분군에 대응한다. G가 유한군이면 G/N의 부분군 S에 대응하는 부분군의 원소의 개수는 |S|·|N|이다.
requires: [set, subset, power-set, function, injective-surjective-bijective, function-composition, inverse-function, group, group-basic-properties, subgroup, subgroup-criteria, subgroup-examples, left-coset, lagrange-theorem, normal-subgroup, quotient-group, canonical-homomorphism, homomorphism-kernel-and-image, subgroups-of-cyclic-groups, number-groups, integers-modulo-n, congruence-modulo-n, equivalence-classes-equal-iff-related, division-theorem, integer-cancellation, prime-number, divisibility, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 11.2절 The Isomorphism Theorems, Theorem 11.13 (Correspondence Theorem) p.137, 11.4절 연습문제 14 p.139
    checked: original
    note: "출처 Theorem 11.13(p.137)은 'H 를 H/N 으로 보내는 것이 N 을 포함하는 G 의 부분군 전체와 G/N 의 부분군 전체 사이의 일대일대응이고, N 을 포함하는 정규부분군은 G/N 의 정규부분군에 대응한다'고 진술한다. 이 항목의 (1)–(3), (5)가 그것이다. 출처의 증명은 H/N 이 부분군((aN)(b⁻¹N) = ab⁻¹N), 전사(H = {g ∈ G : gN ∈ S} 로 S = H/N), 단사(h₁N = h₂N ⊂ H₂)의 순서이고 이 항목도 같은 집합 H_S 를 쓴다. 이 항목은 기호 H/N 의 두 뜻(군 H 의 몫군과 G/N 의 부분집합)이 같은 집합과 같은 연산이라는 것을 (1)로 진술하고, H_S 가 부분군이라는 것을 준동형에 의한 부분군의 역상(추상대수의 준동형의 핵과 상 항목 (5))으로 보인다. 출처는 정규의 대응을 준동형 G/N → G/H 의 핵과 합성 G → G/N → (G/N)/(H/N) 의 핵으로 증명하는데(그 과정에서 제3 동형 정리 Theorem 11.14 를 얻는다), 이 항목은 제3 동형 정리를 쓰지 않고 켤레 (gN)(hN)(gN)⁻¹ = (ghg⁻¹)N 을 직접 계산한다. 포함 관계를 보존한다는 것은 출처의 진술에 없지만, 출처의 단사 증명(p.137)이 H₁/N = H₂/N 에서 h₁N = h₂N ⊂ H₂ 로 H₁ ⊂ H₂ 를 얻는 것이 같은 논법이다. (4)는 출처 11.4절 연습문제 14(p.139, 'H 가 G/N 의 부분군이면 표준 준동형에 의한 H 의 역상은 위수가 |H|·|N| 인 G 의 부분군임을 보여라')이고 출처는 연습문제로만 둔다. 출처는 15.1절 Theorem 15.4 와 Lemma 15.5 의 증명(p.182)에서 이 사실을 쓴다. (6)은 출처 Lemma 15.5 의 증명(p.182)이 ⟨xP⟩ ⊂ N(P)/P 로 쓰며 N(P) 안의 잉여류를 G 의 잉여류와 같은 것으로 다루는 것을 진술로 둔 것이다. 예시 '$\\mathbb{Z}$에서 $6\\mathbb{Z}$를 포함하는 부분군'이 쓰는 'ℤ 의 부분군은 nℤ (n ≥ 0)'는 출처 4.1절 Corollary 4.11(p.48)이고, 거기서 얻는 ℤ₆ 의 부분군 {0, 2, 4} 와 {0, 3} 은 출처 4.1절 Example 4.5(p.47, ⟨2⟩ = {0, 2, 4}), 6.1절 Example 6.1(p.74, ℤ₆ 의 부분군 {0, 3}), 9.2절 Example 9.28(p.121)에 나오는 부분군과 같다. 출처 4.5절 연습문제 3(c)(p.55, ℤ₁₂ 의 부분군을 모두 구하라)도 같은 종류의 물음이다. 출처 Example 11.15(p.137)는 ℤ/mnℤ 의 부분군 mℤ/mnℤ 의 원소가 n 개라고 적는데, 이 예시의 ℤ 에서 6ℤ 를 포함하는 mℤ 와 그 상 π(mℤ) 는 mn = 6 인 경우의 같은 대상이다. 이 사이트에서는 추상대수의 '유한 순환군의 부분군' 항목이 같은 결론을 주고, 이 예시는 그것을 대응으로 다시 얻는다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨 코시의 귀납 통독, '출처는 정리로 진술하지 않는다' 를 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $N$이 $G$의 [[normal-subgroup|정규부분군]]이라 하자. 왼쪽 잉여류 $aN$은 [[left-coset|잉여류]]의 것이고, 몫군 $G/N$과 그 곱 $(aN)(bN) = (ab)N$은 [[quotient-group|몫군]]의 것이며, $\pi : G \to G/N$, $\pi(a) = aN$은 [[canonical-homomorphism|표준 준동형]]이다. $G$의 부분집합 $X$에 대하여 $\pi(X) = \{xN : x \in X\}$는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 상이다. 부분군은 [[subgroup|부분군]]의 뜻이다.

1. (몫군 $H/N$) $H$가 $N \subseteq H$인 $G$의 부분군이면, $N$은 군 $H$의 정규부분군이고, 각 $h \in H$에서 군 $H$ 안에서 만든 $N$의 왼쪽 잉여류는 $G$ 안에서 만든 $hN$과 같은 집합이다. 따라서 군 $H$의 몫군 $H/N$은 집합으로 $\pi(H)$와 같고, $\pi(H)$는 $G/N$의 부분군이며, 몫군 $H/N$의 연산은 $G/N$의 연산을 $\pi(H)$로 제한한 것과 같다. 특히 $G$가 유한군이면 $|H| = |\pi(H)| \cdot |N|$이다.
2. (부분군의 되돌림) $S$가 $G/N$의 부분군이면
   $$H_S = \{g \in G : gN \in S\}$$
   는 $N \subseteq H_S$인 $G$의 부분군이고 $\pi(H_S) = S$이다.
3. (대응) $N$을 포함하는 $G$의 부분군 전체의 집합을 $\mathcal{A} = \{H \in \mathscr{P}(G) : H \text{는 } G \text{의 부분군이고 } N \subseteq H\}$, $G/N$의 부분군 전체의 집합을 $\mathcal{B} = \{S \in \mathscr{P}(G/N) : S \text{는 } G/N \text{의 부분군}\}$이라 하자. 모든 $H \in \mathcal{A}$에서 $\Phi(H) = \pi(H)$인 함수 $\Phi : \mathcal{A} \to \mathcal{B}$와 모든 $S \in \mathcal{B}$에서 $\Psi(S) = H_S$인 함수 $\Psi : \mathcal{B} \to \mathcal{A}$에 대하여 $\Psi \circ \Phi = i_{\mathcal{A}}$이고 $\Phi \circ \Psi = i_{\mathcal{B}}$이다. 따라서 $\Phi$와 $\Psi$는 전단사이고 서로의 역함수이다. 곧 $H \in \mathcal{A}$이면 $H_{\pi(H)} = H$이다. 또 $H, H' \in \mathcal{A}$에 대하여 $H \subseteq H'$인 것은 정확히 $\pi(H) \subseteq \pi(H')$일 때이다.
4. (원소의 개수) $G$가 유한군이고 $S$가 $G/N$의 부분군이면 $|H_S| = |S| \cdot |N|$이다.
5. (정규부분군의 대응) $H \in \mathcal{A}$이면, $H$가 $G$의 정규부분군인 것은 정확히 $\pi(H)$가 군 $G/N$의 정규부분군일 때이다.
6. (부분군 안에서 만든 잉여류) 이 번호는 정규성을 가정하지 않는다. $K$와 $M$이 $G$의 부분군이고 $K \subseteq M$이면 $K$는 군 $M$의 부분군이고, 각 $m \in M$에서 군 $M$ 안에서 만든 $K$의 왼쪽 잉여류는 $G$ 안에서 만든 $mK$와 같은 집합이다. 따라서 군 $M$에서의 왼쪽 잉여류 전체의 집합 $M/K$는 $\{mK : m \in M\}$이고 $G/K$의 부분집합이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $N$ be a normal subgroup of $G$. Left cosets $aN$ are as in the entry on cosets, the quotient group $G/N$ and its product $(aN)(bN) = (ab)N$ are as in the entry on quotient groups, and $\pi : G \to G/N$, $\pi(a) = aN$, is the canonical homomorphism. For a subset $X$ of $G$, $\pi(X) = \{xN : x \in X\}$ is the image in the sense of the entry on kernels and images of homomorphisms. Subgroups are as in the entry on subgroups.

1. (The quotient group $H/N$) If $H$ is a subgroup of $G$ with $N \subseteq H$, then $N$ is a normal subgroup of the group $H$, and for each $h \in H$ the left coset of $N$ formed inside the group $H$ is the same set as $hN$ formed inside $G$. Hence the quotient group $H/N$ of the group $H$ is equal, as a set, to $\pi(H)$; $\pi(H)$ is a subgroup of $G/N$; and the operation of the quotient group $H/N$ is the restriction of the operation of $G/N$ to $\pi(H)$. In particular, if $G$ is finite, then $|H| = |\pi(H)| \cdot |N|$.
2. (Pulling back a subgroup) If $S$ is a subgroup of $G/N$, then
   $$H_S = \{g \in G : gN \in S\}$$
   is a subgroup of $G$ with $N \subseteq H_S$, and $\pi(H_S) = S$.
3. (Correspondence) Let $\mathcal{A} = \{H \in \mathscr{P}(G) : H \text{ is a subgroup of } G \text{ and } N \subseteq H\}$ be the set of all subgroups of $G$ containing $N$, and let $\mathcal{B} = \{S \in \mathscr{P}(G/N) : S \text{ is a subgroup of } G/N\}$ be the set of all subgroups of $G/N$. For the function $\Phi : \mathcal{A} \to \mathcal{B}$ with $\Phi(H) = \pi(H)$ for all $H \in \mathcal{A}$ and the function $\Psi : \mathcal{B} \to \mathcal{A}$ with $\Psi(S) = H_S$ for all $S \in \mathcal{B}$, we have $\Psi \circ \Phi = i_{\mathcal{A}}$ and $\Phi \circ \Psi = i_{\mathcal{B}}$. Hence $\Phi$ and $\Psi$ are bijections and are inverse to each other; that is, $H_{\pi(H)} = H$ for $H \in \mathcal{A}$. Moreover, for $H, H' \in \mathcal{A}$, $H \subseteq H'$ if and only if $\pi(H) \subseteq \pi(H')$.
4. (Number of elements) If $G$ is finite and $S$ is a subgroup of $G/N$, then $|H_S| = |S| \cdot |N|$.
5. (Normal subgroups correspond) For $H \in \mathcal{A}$, $H$ is a normal subgroup of $G$ if and only if $\pi(H)$ is a normal subgroup of the group $G/N$.
6. (Cosets formed inside a subgroup) This item does not assume normality. If $K$ and $M$ are subgroups of $G$ with $K \subseteq M$, then $K$ is a subgroup of the group $M$, and for each $m \in M$ the left coset of $K$ formed inside the group $M$ is the same set as $mK$ formed inside $G$. Hence the set $M/K$ of left cosets in the group $M$ is $\{mK : m \in M\}$, a subset of $G/K$.
:::

## 직관

몫군 $G/N$은 $G$의 원소를 $N$의 잉여류 단위로 묶어 본 것입니다. 사진을 낮은 해상도로 줄이면 픽셀 여러 개가 한 점이 되는 것과 비슷합니다. 줄인 사진에서 고른 영역(부분군 $S$)은 원래 사진에서 그 점들에 해당하는 픽셀을 모두 모은 영역($H_S$)으로 되돌릴 수 있고, 그렇게 되돌린 영역은 언제나 한 점에 묶인 픽셀 묶음($N$)을 통째로 포함합니다. 비유에서 "한 점에 묶인 픽셀"이 잉여류 $gN$이고, "통째로 포함한다"가 $N \subseteq H_S$입니다.

그래서 $N$을 포함하는 부분군과 $G/N$의 부분군은 정확히 짝지어집니다((3)). $N$을 포함하지 않는 부분군은 줄인 사진에서 다른 부분군과 같은 모양이 될 수 있어 짝이 깨집니다(아래 반례). 유한군에서는 잉여류마다 원소가 $|N|$개이므로 되돌린 부분군의 원소는 $|S| \cdot |N|$개입니다((4)).

## 증명

:::idea
(1)은 군 $H$ 안의 곱이 $G$의 곱과 같다는 것에서 잉여류와 몫군의 곱이 그대로 같아진다는 관찰이다. (2)는 $H_S$가 준동형 $\pi$에 의한 $S$의 역상이라는 것이고, (3)은 $H_{\pi(H)} = H$를 잉여류가 같을 조건으로 보이는 것이다. (4)는 $H_S$에 (1)을 쓴다.
:::

:::hint
(3)에서 $g \in H_{\pi(H)}$이면 $gN = hN$인 $h \in H$가 있습니다. 그러면 $h^{-1}g \in N \subseteq H$입니다.
:::

:::hint
(5)의 거꾸로 방향에서 $g \in G$, $h \in H$이면 $(ghg^{-1})N = (gN)(hN)(gN)^{-1}$입니다. 이것이 $\pi(H)$에 있으면 $ghg^{-1} \in H_{\pi(H)}$입니다.
:::

:::proof
"잉여류의 ($k$)", "몫군의 ($k$)", "핵과 상의 ($k$)", "부분군의 ($k$)"는 각각 [[left-coset|잉여류]], [[quotient-group|몫군]], [[homomorphism-kernel-and-image|준동형의 핵과 상]], [[subgroup|부분군]]의 ($k$)이다. [[canonical-homomorphism|표준 준동형]]의 (1)에 의해 $\pi$는 준동형이고, 같은 항목의 (2)에 의해 $\operatorname{Ker} \pi = N$이다.

**(1)** $H$가 $N \subseteq H$인 $G$의 부분군이라 하자. $N$은 $G$의 부분군이고 $N \subseteq H$이므로 부분군의 (6)에 의해 군 $H$의 부분군이다. 부분군의 (1)–(3)에 의해 군 $H$의 항등원, 역원, 곱은 $G$의 것과 같다. $h \in H$, $n \in N$이면 $N$이 $G$의 정규부분군이므로 $hnh^{-1} \in N$이고, 이것은 군 $H$에서 계산한 $hnh^{-1}$과 같으므로 $N$은 군 $H$의 정규부분군이다.

$h \in H$일 때 군 $H$ 안에서 만든 왼쪽 잉여류는 잉여류 항목의 정의에 의해 $\{hn : n \in N\}$이고 $hn$은 $G$의 곱과 같으므로, 이것은 $G$ 안에서 만든 $hN$과 같은 집합이다. 따라서 군 $H$의 왼쪽 잉여류 전체의 집합은 $\{hN : h \in H\} = \pi(H)$이고, 몫군의 (2)에 의해 이 집합 위의 몫군 $H/N$의 곱은 $(hN)(h'N) = (hh')N$이다. 이것은 $G/N$에서의 곱 $(hN)(h'N) = (hh')N$과 같다. 핵과 상의 (4)에 의해 $\pi(H)$는 $G/N$의 부분군이다.

$G$가 유한군이면 부분군의 (8)에 의해 $H$는 유한군이고, 몫군의 (5)를 군 $H$와 정규부분군 $N$에 쓰면 $|H| = |H/N| \cdot |N| = |\pi(H)| \cdot |N|$이다.

**(2)** $S$가 $G/N$의 부분군이라 하자. 모든 $g \in G$에서 $\pi(g) = gN$이므로 $H_S = \{g \in G : \pi(g) \in S\}$이고, 핵과 상의 (5)에 의해 이것은 $\operatorname{Ker} \pi = N$을 포함하는 $G$의 부분군이다. $g \in H_S$이면 $\pi(g) = gN \in S$이므로 $\pi(H_S) \subseteq S$이다. 거꾸로 $C \in S$이면 $S \subseteq G/N$이므로 잉여류 항목의 $G/N$의 정의에 의해 $C = aN$인 $a \in G$가 있고, $aN \in S$이므로 $a \in H_S$이며 $C = \pi(a) \in \pi(H_S)$이다. 따라서 $\pi(H_S) = S$이다.

**(3)** (1)에 의해 $H \in \mathcal{A}$이면 $\pi(H) \in \mathcal{B}$이고, (2)에 의해 $S \in \mathcal{B}$이면 $H_S \in \mathcal{A}$이다. 따라서 $\Phi$와 $\Psi$는 [[function|함수]]이다. (2)에 의해 모든 $S \in \mathcal{B}$에서 $\Phi(\Psi(S)) = \pi(H_S) = S$이다.

$H \in \mathcal{A}$이면 $H_{\pi(H)} = H$임을 보인다. $h \in H$이면 $hN = \pi(h) \in \pi(H)$이므로 $h \in H_{\pi(H)}$이다. 거꾸로 $g \in H_{\pi(H)}$이면 $gN \in \pi(H)$이므로 $gN = hN$인 $h \in H$가 있다. 잉여류의 (3)의 (i)과 (iv)의 동치에 의해 $h^{-1}g \in N \subseteq H$이고, $H$는 곱에 대하여 닫혀 있으므로 $g = h(h^{-1}g) \in H$이다. 따라서 모든 $H \in \mathcal{A}$에서 $\Psi(\Phi(H)) = H$이다.

$\Phi(H) = \Phi(H')$이면 $H = \Psi(\Phi(H)) = \Psi(\Phi(H')) = H'$이므로 $\Phi$는 단사이고, $S \in \mathcal{B}$이면 $S = \Phi(\Psi(S))$이므로 $\Phi$는 전사이다. 같은 방법으로 $\Psi$도 단사이고 전사이다([[injective-surjective-bijective|단사, 전사, 전단사]]). $\Psi \circ \Phi = i_{\mathcal{A}}$, $\Phi \circ \Psi = i_{\mathcal{B}}$이므로 $\Phi$의 [[inverse-function|역관계]] $\Phi^{-1}$은 $\Psi$와 같은 집합 $\{(S, \Psi(S)) : S \in \mathcal{B}\}$이다. $(S, H) \in \Phi^{-1}$은 $\Phi(H) = S$와 같고, 이것은 $H = \Psi(\Phi(H)) = \Psi(S)$와 같기 때문이다(거꾸로 $H = \Psi(S)$이면 $\Phi(H) = \Phi(\Psi(S)) = S$). 따라서 $\Psi$는 $\Phi$의 역함수이고, $\Phi$와 $\Psi$의 자리를 바꾼 같은 논법으로 $\Phi$는 $\Psi$의 역함수이다.

포함 관계: $H \subseteq H'$이면 $\pi(H) = \{hN : h \in H\} \subseteq \{hN : h \in H'\} = \pi(H')$이다. 거꾸로 $\pi(H) \subseteq \pi(H')$이고 $g \in H$이면 $gN \in \pi(H) \subseteq \pi(H')$이므로 $g \in H_{\pi(H')} = H'$이다.

**(4)** $G$가 유한군이고 $S$가 $G/N$의 부분군이라 하자. (2)에 의해 $H_S \in \mathcal{A}$이고 $\pi(H_S) = S$이므로, (1)의 마지막 문장에 의해 $|H_S| = |\pi(H_S)| \cdot |N| = |S| \cdot |N|$이다.

**(5)** $H \in \mathcal{A}$라 하자. 몫군의 (2)에 의해 $G/N$에서 $(gN)^{-1} = g^{-1}N$이고, $g, h \in G$이면 몫군의 곱의 정의와 [[group|군]]의 세 원소의 곱의 약속에 의해
$$(gN)(hN)(gN)^{-1} = \bigl((gh)N\bigr)(g^{-1}N) = \bigl((gh)g^{-1}\bigr)N = (ghg^{-1})N$$
이다.

$H$가 $G$의 정규부분군이라 하자. $\pi(H)$의 원소는 $hN$($h \in H$) 꼴이고 $G/N$의 원소는 $gN$($g \in G$) 꼴이다. 위 식에서 $(gN)(hN)(gN)^{-1} = (ghg^{-1})N$이고 $ghg^{-1} \in H$이므로 이것은 $\pi(H)$에 있다. 따라서 $\pi(H)$는 $G/N$의 정규부분군이다([[normal-subgroup|정규부분군]]의 정의).

거꾸로 $\pi(H)$가 $G/N$의 정규부분군이라 하고 $g \in G$, $h \in H$라 하자. 위 식에서 $(ghg^{-1})N = (gN)(hN)(gN)^{-1} \in \pi(H)$이므로 $ghg^{-1} \in H_{\pi(H)}$이고, (3)에 의해 $H_{\pi(H)} = H$이다. 따라서 $H$는 $G$의 정규부분군이다.

**(6)** $K \subseteq M$이고 둘 다 $G$의 부분군이므로 부분군의 (6)에 의해 $K$는 군 $M$의 부분군이다. $m \in M$이면 군 $M$ 안에서 만든 왼쪽 잉여류는 잉여류 항목의 정의에 의해 $\{mk : k \in K\}$이고, 부분군의 (3)에 의해 군 $M$에서의 곱 $mk$는 $G$에서의 곱과 같으므로 이 집합은 $G$ 안에서 만든 $mK$이다. 따라서 군 $M$의 왼쪽 잉여류 전체의 집합은 $\{mK : m \in M\}$이고, 각 $mK$는 $G/K$의 원소이다. (1)의 둘째 문단은 이것을 $M = H$, $K = N$에 쓴 것과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{Z}$에서 $6\mathbb{Z}$를 포함하는 부분군]
$G = (\mathbb{Z}, +)$, $N = 6\mathbb{Z}$로 둡니다. $\mathbb{Z}$는 아벨군이므로 $6\mathbb{Z}$는 정규부분군이고, [[quotient-group|몫군]]의 (6)에 의해 $\mathbb{Z}/6\mathbb{Z}$는 군 $(\mathbb{Z}_6, +)$와 같으며, [[left-coset|잉여류]]의 (8)에 의해 $\pi(a) = a + 6\mathbb{Z} = [a]$입니다.

[[subgroups-of-cyclic-groups|순환군의 부분군]]의 (2)에 의해 $\mathbb{Z}$의 부분군은 $m\mathbb{Z}$($m \ge 0$) 꼴이고, 같은 항목의 (3)에 의해 $6\mathbb{Z} \subseteq m\mathbb{Z}$인 것은 정확히 $m \mid 6$일 때입니다. $m = 0$이면 $0\mathbb{Z} = \{0\}$은 $6$을 포함하지 않으므로, $m$은 $6$의 양의 약수 $1$, $2$, $3$, $6$입니다($6$ 이하이고, $6 = 4 \cdot 1 + 2 = 5 \cdot 1 + 1$이므로 $4$, $5$는 약수가 아닙니다). 따라서 $\mathcal{A}$의 원소는 $\mathbb{Z}$, $2\mathbb{Z}$, $3\mathbb{Z}$, $6\mathbb{Z}$이고, (3)에 의해 $\mathbb{Z}_6$의 부분군은 정확히 네 개
$$\pi(\mathbb{Z}) = \mathbb{Z}_6, \quad \pi(2\mathbb{Z}) = \{[0], [2], [4]\}, \quad \pi(3\mathbb{Z}) = \{[0], [3]\}, \quad \pi(6\mathbb{Z}) = \{[0]\}$$
입니다. 예를 들어 $\pi(2\mathbb{Z}) = \{[2k] : k \in \mathbb{Z}\}$입니다. [[division-theorem|나눗셈 정리]]로 $k = 3q + t$($0 \le t \le 2$)라 쓰면 $2k = 6q + 2t$이므로 $[2k] = [2t]$는 $[0]$, $[2]$, $[4]$ 가운데 하나이고, 이 셋은 $[2 \cdot 0]$, $[2 \cdot 1]$, $[2 \cdot 2]$입니다. $\pi(3\mathbb{Z})$도 같은 방법으로 셉니다. 포함 관계도 그대로 옮겨져 $6\mathbb{Z} \subseteq 2\mathbb{Z}$이고 $\{[0]\} \subseteq \{[0], [2], [4]\}$입니다.
:::

:::counterexample[$N$을 포함하지 않는 부분군에서는 짝이 깨질 수 있다]
같은 $G = \mathbb{Z}$, $N = 6\mathbb{Z}$에서 $H = 4\mathbb{Z}$는 $6 \notin 4\mathbb{Z}$이므로 $N$을 포함하지 않습니다($6 = 4k$이면 $2 \cdot 3 = 2 \cdot (2k)$에서 [[integer-cancellation|정수의 소거]]에 의해 $3 = 2k$가 되는데, $3 = 2 \cdot 1 + 1$은 홀수이고 짝수이면서 홀수인 정수는 없습니다). 이때 $\pi(4\mathbb{Z}) = \pi(2\mathbb{Z})$입니다. $[4k] = [2 \cdot (2k)] \in \pi(2\mathbb{Z})$이고, 거꾸로 $8k - 2k = 6k$이므로 $8k \equiv 2k \pmod 6$이고 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[2k] = [8k] = [4 \cdot (2k)] \in \pi(4\mathbb{Z})$이기 때문입니다. $2 = 4k$이면 같은 소거로 $1 = 2k$가 되어 $1$이 짝수이면서 홀수가 되므로 $2 \notin 4\mathbb{Z}$입니다. 따라서 서로 다른 부분군 $4\mathbb{Z} \ne 2\mathbb{Z}$가 같은 부분군으로 가고, $2\mathbb{Z} \in \mathcal{A}$이므로 (3)에 의해 $H_{\pi(4\mathbb{Z})} = H_{\pi(2\mathbb{Z})} = 2\mathbb{Z} \ne 4\mathbb{Z}$입니다. (3)이 $N \subseteq H$인 부분군에 대해서만 말하는 까닭입니다.
:::

## 확인 질문

:::check[원소가 $12$개인 군 $G$의 원소가 $3$개인 정규부분군 $N$이 있고, $S$가 원소가 $2$개인 $G/N$의 부분군이면 $H_S$의 원소는 몇 개인가?]
$6$개입니다. (4)에 의해 $|H_S| = |S| \cdot |N| = 2 \cdot 3 = 6$입니다. 또 (2)에 의해 $H_S$는 $N$을 포함하는 $G$의 부분군입니다.
:::

:::check[$H$가 $N$을 포함하는 $G$의 부분군이고 $\pi(H) = G/N$이면 $H$는 무엇인가?]
$H = G$입니다. $G$ 자신도 $N$을 포함하는 부분군이고 $\pi(G) = G/N$이므로([[canonical-homomorphism|표준 준동형]]의 (1)의 전사) $\pi(H) = \pi(G)$입니다. (3)에 의해 $\Phi$는 단사이므로 $H = G$입니다.
:::
