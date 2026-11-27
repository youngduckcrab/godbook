---
title: 갈루아 이론의 기본정리
title_en: Fundamental Theorem of Galois Theory
aliases: [갈루아 기본정리, 갈루아 대응, 중간체와 부분군의 대응, fundamental theorem of Galois theory, Galois correspondence]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "E 가 F 위에서 f 의 분해체이고 f 의 모닉 기약 인수마다 E 에서 근이 서로 다르면, 중간체 K 에 Aut(E/K) 를 대응시키는 함수는 중간체 전체에서 G = Aut(E/F) 의 부분군 전체로의 전단사이고 그 역함수는 고정체이다. 이 대응은 포함을 뒤집고 [K : F] = [G : Aut(E/K)] 이며, 모든 σ ∈ G 에서 σ(K) = K 인 것은 정확히 Aut(E/K) 가 정규부분군일 때이고, 그때 제한은 G/Aut(E/K) 와 Aut(K/F) 의 동형을 준다."
requires: [set, power-set, function, function-composition, inverse-function, injective-surjective-bijective, adding-or-removing-an-element, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, square-root-exists, rational-numbers-field, group, subgroup, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, lagrange-theorem, normal-subgroup, index-two-subgroup-is-normal, quotient-group, first-isomorphism-theorem, ring, ring-homomorphism, field, characteristic-of-a-ring, polynomial-ring, evaluation-homomorphism, subfield, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, field-extension-examples, splitting-field, separable-polynomial, extension-of-isomorphism-to-splitting-fields, automorphism-group-of-extension, automorphisms-permute-roots, fixed-field, order-of-galois-group, artin-lemma]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.2절 The Fundamental Theorem, Theorem 23.23 과 그 증명 (p.300–301), Figure 23.24 (p.301), Corollary 23.20 (p.299), 정규 확대의 정의 (p.299); 23.5절 Exercises, 연습문제 8, 18, 19, 21 (p.308–309)"
    checked: original
    note: "출처 Theorem 23.23(p.300)은 F 가 유한체이거나 표수 0 이고 E 가 F 의 유한 정규 확대일 때 (1) K 에 G(E/K) 를 대응시키는 함수가 전단사, (2) [E : K] = |G(E/K)|, [K : F] = [G(E/F) : G(E/K)], (3) F ⊂ K ⊂ L ⊂ E 인 것은 {id} ⊂ G(E/L) ⊂ G(E/K) ⊂ G(E/F) 일 때, (4) K 가 F 의 정규 확대인 것은 G(E/K) 가 정규부분군일 때이고 그때 G(K/F) ≅ G(E/F)/G(E/K) 라고 진술한다. 이 항목은 '정규 확대' 를 정의하지 않고, 가정을 'E 는 F 위에서 f 의 분해체이고 f 의 모닉 기약 인수마다 근이 서로 다르다' 로 둔다. 출처의 (4)의 '정규 확대' 는 이 항목의 (4)에서 (i) '모든 σ ∈ G 에서 σ(K) = K' 로 바꾸었고, (iii) 'K 가 F 위의 분해체이면 (i)' 만 싣고 그 역은 싣지 않는다. 출처는 (3)의 증명을 'We leave the proof of this property as an exercise' 라고 연습으로 두고, 이 항목은 (2)에서 증명한다. (1)의 '고정체 쪽이 역함수' 는 출처 Corollary 23.20(p.299, F = K_G 이면 G = G(K/F))과 같은 계산(유한집합의 부분집합으로 크기가 같다)이다. (4)의 (iv)의 전사의 증명이 쓰는 'E 는 중간체 K 위에서도 분해체' 는 출처 23.5절 연습문제 8(p.308, E 가 F 의 정규 확대이면 K 의 정규 확대)과 같은 사실이다. 출처의 (4)의 증명은 σ 를 K 로 제한한 사상 ϕ 가 준동형이고 핵이 G(E/K) 이며 위수의 비교로 전사라고 보이고, 이 항목은 전사를 분해체로의 동형 연장으로 보인다. 반례 '분해체가 아닌 $\\mathbb{Q}(c)$에서 단사가 아닌 대응' 은 출처 23.5절 연습문제 18(p.309, 서로 다른 부분군의 고정체가 다른지 묻는다)과 반대 방향의 물음이고, 확인 질문 '$[K : F] = 2$인 중간체 $K$는 (4)의 (i)을 만족하는가?' 는 출처 23.5절 연습문제 19(p.309, [E : F] = 2 인 중간체는 분해체)와 같은 대상을 묻는다. 확인 질문 '$|G|$가 소수 $p$이면 중간체는 몇 개인가?' 는 출처 23.5절 연습문제 21(p.309)과 같은 대응의 셈이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 아르틴 보조정리 증명 통독, 예의 부분군·중간체 대응). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 분해체는 [[splitting-field|분해체]]의 것이고, 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. $\operatorname{Aut}(E/F)$와 그 곱(합성)은 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 고정체 $E^H$는 [[fixed-field|고정체]]의 것이며, 중간체는 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 것이다. 부분군, 지표 $[G : H]$, 정규부분군, 몫군 $G/N$, 동형 $\cong$은 [[subgroup|부분군]], [[lagrange-theorem|라그랑주 정리]], [[normal-subgroup|정규부분군]], [[quotient-group|몫군]], [[group-isomorphism|군의 동형]]의 것이다. 함수의 제한 $\sigma|_K$는 [[adding-or-removing-an-element|함수의 제한]]의 것이고, 멱집합은 [[power-set|멱집합]]의 것이다.

**설정.** $E$가 체이고 $F$가 $E$의 부분체이며, $f \in F[X]$가 영다항식이 아니고 $\deg f \ge 1$이며, $E$가 $F$ 위에서 $f$의 분해체이고, $f$의 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다고 하자. $G = \operatorname{Aut}(E/F)$로 두고, 중간체 전체의 집합을 $\mathcal{K} = \{K \in \mathscr{P}(E) : K \text{는 } E \text{의 부분체이고 } F \subseteq K\}$, $G$의 부분군 전체의 집합을 $\mathcal{G} = \{H \in \mathscr{P}(G) : H \text{는 } G \text{의 부분군}\}$으로 둔다.

1. (대응) $K \in \mathcal{K}$이면 $\operatorname{Aut}(E/K) \in \mathcal{G}$이고, $H \in \mathcal{G}$이면 $E^H \in \mathcal{K}$이다. 또
   $$
   \begin{aligned}
   E^{\operatorname{Aut}(E/K)} &= K, \\
   \operatorname{Aut}(E/E^H) &= H
   \end{aligned}
   $$
   이다. 따라서 각 $K \in \mathcal{K}$에 $\operatorname{Aut}(E/K)$를 대응시키는 함수 $\mathcal{K} \to \mathcal{G}$는 전단사이고, 그 역함수는 각 $H \in \mathcal{G}$에 $E^H$를 대응시키는 함수이다.
2. (포함이 뒤집힌다) $K, L \in \mathcal{K}$이면, $K \subseteq L$인 것은 정확히 $\operatorname{Aut}(E/L) \subseteq \operatorname{Aut}(E/K)$일 때이다. $H, H' \in \mathcal{G}$이면, $H \subseteq H'$인 것은 정확히 $E^{H'} \subseteq E^H$일 때이다.
3. (차수와 지표) $G$는 유한군이고 $|G| = [E : F]$이다. $K \in \mathcal{K}$이면 $|\operatorname{Aut}(E/K)| = [E : K]$이고 $[K : F] = [G : \operatorname{Aut}(E/K)]$이다. $H \in \mathcal{G}$이면 $[E : E^H] = |H|$이고 $[E^H : F] = [G : H]$이다.
4. (정규부분군과 제한) $K \in \mathcal{K}$라 하자. 다음 두 조건은 서로 동치이다.
   - (i) 모든 $\sigma \in G$에서 $\sigma(K) = K$이다.
   - (ii) $\operatorname{Aut}(E/K)$는 $G$의 정규부분군이다.

   또 다음이 성립한다.
   - (iii) $h \in F[X]$가 영다항식이 아니고 $\deg h \ge 1$이며 $K$가 $F$ 위에서 $h$의 분해체이면, $K$는 (i)을 만족한다.
   - (iv) $K$가 (i)을 만족하면, 각 $\sigma \in G$에 대하여 $\sigma$의 $K$로의 제한을 함수 $K \to K$로 선언한 $\sigma|_K$는 $\operatorname{Aut}(K/F)$의 원소이다. 각 $\sigma \in G$에 $\sigma|_K$를 대응시키는 함수 $r_K : G \to \operatorname{Aut}(K/F)$는 전사인 군 준동형이고 $\operatorname{Ker} r_K = \operatorname{Aut}(E/K)$이다. 따라서 $G/\operatorname{Aut}(E/K) \cong \operatorname{Aut}(K/F)$이고 $|\operatorname{Aut}(K/F)| = [K : F]$이다.
:::

:::english
Fields are as in "Units and Fields", and subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. Splitting fields are as in "Splitting Field", and monic irreducible factors and "has distinct roots" are as in the entry on polynomials with distinct roots. $\operatorname{Aut}(E/F)$ and its product (composition) are as in the entry on the automorphism group of an extension, fixed fields $E^H$ as in "Fixed Field", and intermediate fields as in the entry on the order of the Galois group of a splitting field. Subgroups, the index $[G : H]$, normal subgroups, quotient groups $G/N$ and isomorphism $\cong$ are as in the entries on subgroups, Lagrange's theorem, normal subgroups, quotient groups and group isomorphisms. The restriction $\sigma|_K$ of a function is as in the entry on restriction of functions, and power sets as in "Power Set".

**Setting.** Let $E$ be a field, $F$ a subfield of $E$, $f \in F[X]$ nonzero with $\deg f \ge 1$, let $E$ be a splitting field of $f$ over $F$, and suppose every monic irreducible factor of $f$ over $F$ has distinct roots in $E$. Put $G = \operatorname{Aut}(E/F)$, let $\mathcal{K} = \{K \in \mathscr{P}(E) : K \text{ is a subfield of } E \text{ and } F \subseteq K\}$ be the set of all intermediate fields, and let $\mathcal{G} = \{H \in \mathscr{P}(G) : H \text{ is a subgroup of } G\}$ be the set of all subgroups of $G$.

1. (Correspondence) If $K \in \mathcal{K}$, then $\operatorname{Aut}(E/K) \in \mathcal{G}$, and if $H \in \mathcal{G}$, then $E^H \in \mathcal{K}$. Moreover
   $$
   \begin{aligned}
   E^{\operatorname{Aut}(E/K)} &= K, \\
   \operatorname{Aut}(E/E^H) &= H.
   \end{aligned}
   $$
   Hence the function $\mathcal{K} \to \mathcal{G}$ assigning $\operatorname{Aut}(E/K)$ to each $K \in \mathcal{K}$ is a bijection, and its inverse is the function assigning $E^H$ to each $H \in \mathcal{G}$.
2. (Inclusions are reversed) For $K, L \in \mathcal{K}$, $K \subseteq L$ exactly when $\operatorname{Aut}(E/L) \subseteq \operatorname{Aut}(E/K)$. For $H, H' \in \mathcal{G}$, $H \subseteq H'$ exactly when $E^{H'} \subseteq E^H$.
3. (Degrees and indices) $G$ is a finite group and $|G| = [E : F]$. If $K \in \mathcal{K}$, then $|\operatorname{Aut}(E/K)| = [E : K]$ and $[K : F] = [G : \operatorname{Aut}(E/K)]$. If $H \in \mathcal{G}$, then $[E : E^H] = |H|$ and $[E^H : F] = [G : H]$.
4. (Normal subgroups and restriction) Let $K \in \mathcal{K}$. The following two conditions are equivalent.
   - (i) $\sigma(K) = K$ for every $\sigma \in G$.
   - (ii) $\operatorname{Aut}(E/K)$ is a normal subgroup of $G$.

   Moreover:
   - (iii) If $h \in F[X]$ is nonzero with $\deg h \ge 1$ and $K$ is a splitting field of $h$ over $F$, then $K$ satisfies (i).
   - (iv) If $K$ satisfies (i), then for each $\sigma \in G$ the restriction of $\sigma$ to $K$, declared as a function $K \to K$, is an element $\sigma|_K$ of $\operatorname{Aut}(K/F)$. The function $r_K : G \to \operatorname{Aut}(K/F)$ assigning $\sigma|_K$ to each $\sigma \in G$ is a surjective group homomorphism with $\operatorname{Ker} r_K = \operatorname{Aut}(E/K)$. Hence $G/\operatorname{Aut}(E/K) \cong \operatorname{Aut}(K/F)$ and $|\operatorname{Aut}(K/F)| = [K : F]$.
:::

## 직관

분해체 $E$와 그 자기동형군 $G$ 사이에는 두 방향의 만듦이 있습니다. 중간체 $K$에서는 그것을 고정하는 자기동형의 군 $\operatorname{Aut}(E/K)$를 만들고, 부분군 $H$에서는 그것이 고정하는 원소의 체 $E^H$를 만듭니다. 근이 서로 다른 분해체에서는 이 두 만듦이 서로를 되돌립니다((1)). 그래서 $E$와 $F$ 사이의 체들을 찾는 문제가 유한군 $G$의 부분군을 찾는 문제로 바뀝니다.

비유하면 중간체는 지도 위의 구역이고 부분군은 그 구역을 지키는 경비원의 무리입니다. 구역이 넓을수록 그것을 통째로 지킬 수 있는 경비원은 적고((2)), 구역의 크기와 경비원의 수가 정확히 맞물립니다((3)). $K$가 클수록 $\operatorname{Aut}(E/K)$는 작고, $[E : K]$와 $|\operatorname{Aut}(E/K)|$가 같습니다.

$K$가 모든 자기동형에 의해 제자리에 있으면 $G$의 원소를 $K$로 제한해 $K$의 자기동형을 얻고, 이렇게 $K$에서 보이는 자기동형들은 $G$를 $\operatorname{Aut}(E/K)$로 나눈 몫군과 같습니다((4)). $F$ 위의 다항식 $h$의 근을 모두 붙여 만든 중간체, 곧 $h$의 분해체는 근이 근으로 가므로 늘 제자리에 있습니다((4)의 (iii)).

## 증명

:::idea
(1)의 첫 등식은 분해체의 갈루아 군의 위수의 (3)이고, 둘째 등식은 아르틴 보조정리의 부등식과 위수의 등식으로 $H \subseteq \operatorname{Aut}(E/E^H)$의 두 유한집합의 크기를 비교한 것이다. (2)와 (3)은 (1)과 차수의 곱셈 공식, 라그랑주 정리이고, (4)는 자기동형과 근의 치환의 켤레 공식, 근을 근으로 보낸다는 것, 분해체로의 동형 연장이다.
:::

:::hint
(1)에서 $L = E^H$라 하면 $H \subseteq \operatorname{Aut}(E/L)$이고 $[E : L] \le |H|$이며 $|\operatorname{Aut}(E/L)| = [E : L]$입니다.
:::

:::hint
(4)의 (iv)에서 $\rho \in \operatorname{Aut}(K/F)$를 $E$로 넓히려면 $E$가 $K$ 위에서 $f$의 분해체이고 $f^{\rho} = f$라는 것을 씁니다.
:::

:::proof
**쓰는 사실.** "위수의 (n)"은 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (n), "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "고정체의 (n)"은 [[fixed-field|고정체]]의 (n), "치환의 (n)"은 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "곱셈 공식의 (n)"은 [[tower-law|차수의 곱셈 공식]]의 (n), "라그랑주의 (n)"은 [[lagrange-theorem|라그랑주 정리]]의 (n)이다.

**1.** $K \in \mathcal{K}$이면 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(E/K)$는 $G$의 부분군이다. $H \in \mathcal{G}$이면 $H \subseteq G = \operatorname{Aut}(E/F)$이므로 고정체의 (1)과 (6)에 의해 $E^H$는 $F \subseteq E^H$인 $E$의 부분체이다. 첫 등식은 위수의 (3)이다.

둘째 등식을 보이자. $L = E^H$라 하자. 위수의 (1)에 의해 $G$는 유한군이므로 [[subgroup|부분군]]의 (8)에 의해 $H$는 유한군이고, 자기동형군의 (1)의 (ii)와 부분군의 (6)에 의해 $H$는 $\operatorname{Aut}(E)$의 부분군이다. [[artin-lemma|아르틴 보조정리]]의 (2)에 의해 $[E : L] \le |H|$이다. $L \in \mathcal{K}$이므로 위수의 (2)에 의해 $|\operatorname{Aut}(E/L)| = [E : L] \le |H|$이다. 고정체의 (4)에 의해 $H \subseteq \operatorname{Aut}(E/L)$이므로, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $|H| \le |\operatorname{Aut}(E/L)|$이고, 따라서 두 수는 같으며 같은 항목의 (2)에 의해 $H = \operatorname{Aut}(E/L)$이다.

두 함수를 $\alpha : \mathcal{K} \to \mathcal{G}$, $\beta : \mathcal{G} \to \mathcal{K}$($\alpha(K) = \operatorname{Aut}(E/K)$, $\beta(H) = E^H$)라 하면, 두 등식은 $\beta \circ \alpha$와 $\alpha \circ \beta$가 항등함수라는 것이다. 따라서 $\alpha$는 전단사이고 $\beta$는 그 역함수이다([[inverse-function|역함수]], [[injective-surjective-bijective|전단사]]).

**2.** $K \subseteq L$이면 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(E/L) \subseteq \operatorname{Aut}(E/K)$이다. 거꾸로 $\operatorname{Aut}(E/L) \subseteq \operatorname{Aut}(E/K)$이면 고정체의 (3)에 의해 $E^{\operatorname{Aut}(E/K)} \subseteq E^{\operatorname{Aut}(E/L)}$이고, (1)에 의해 이것은 $K \subseteq L$이다. $H \subseteq H'$이면 고정체의 (3)에 의해 $E^{H'} \subseteq E^H$이다. 거꾸로 $E^{H'} \subseteq E^H$이면 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(E/E^H) \subseteq \operatorname{Aut}(E/E^{H'})$이고, (1)에 의해 이것은 $H \subseteq H'$이다.

**3.** 첫 문장은 위수의 (1)이고, $|\operatorname{Aut}(E/K)| = [E : K]$는 위수의 (2)이다. 곱셈 공식의 (3)의 (i)에 의해 $[E : F] = [E : K] \cdot [K : F]$이므로 $|G| = [K : F] \cdot |\operatorname{Aut}(E/K)|$이다. 라그랑주의 (1)에 의해 $[G : \operatorname{Aut}(E/K)]$는 정수 $x$에 대한 등식 $|G| = x \cdot |\operatorname{Aut}(E/K)|$를 만족하는 유일한 정수이므로 $[K : F] = [G : \operatorname{Aut}(E/K)]$이다. $H \in \mathcal{G}$이면 (1)에 의해 $K = E^H \in \mathcal{K}$에서 $\operatorname{Aut}(E/K) = H$이므로, 앞의 두 등식을 이 $K$에 쓰면 마지막 문장이 나온다.

**4.** (i) ⇒ (ii). $\sigma \in G$이면 치환의 (4)에 의해 군 $G$에서 $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \operatorname{Aut}(E/\sigma(K)) = \operatorname{Aut}(E/K)$이다. 따라서 $\tau \in \operatorname{Aut}(E/K)$이면 $\sigma\tau\sigma^{-1} \in \operatorname{Aut}(E/K)$이고, 정규부분군의 정의에 의해 (ii)가 성립한다.

(ii) ⇒ (i). $\sigma \in G$라 하자. [[normal-subgroup|정규부분군]]의 (1)의 (iii)에 의해 $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \operatorname{Aut}(E/K)$이고, 치환의 (4)에 의해 이것은 $\operatorname{Aut}(E/\sigma(K))$이며 $\sigma(K) \in \mathcal{K}$이다. (1)의 함수 $\mathcal{K} \to \mathcal{G}$는 단사이므로 $\sigma(K) = K$이다.

(iii) $h$는 $K$에서 분해되므로 그 일차식 분해 $h = a(X - c_1) \cdots (X - c_k)$가 있고, 분해체의 (1)의 (i)에 의해 $k = \deg h$이며 분해체의 (6)의 (ii)에 의해 $K = F(c_1, \dots, c_k)$이다. 분해체의 (5)의 마지막 문장을 체 $K \subseteq E$에 쓰면 $E$ 안의 $h$의 근 전체는 $\{c_1, \dots, c_k\}$이다. $\sigma \in G$이면 치환의 (1)의 (ii)를 $h$에 쓸 때 각 $\sigma(c_i)$는 $E$ 안의 $h$의 근이므로 $K$에 속한다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (2)를 $\tau = \sigma$에 쓰면 $\sigma(F) = F$이므로 $\sigma(K) = F(\sigma(c_1), \dots, \sigma(c_k))$이고, 같은 항목의 (1)의 (ii)에 의해 $\sigma(K) \subseteq K$이다. 확대체의 (5)의 (i), (iii)에 의해 $\sigma(K)$는 $E$의 부분체이고 $[\sigma(K) : F] = [\sigma(K) : \sigma(F)] = [K : F]$이며, 분해체의 (6)의 (iii)에 의해 $K$는 $F$의 유한 확대이다. [[subfield|부분체]]의 (5)의 (i)에 의해 $\sigma(K)$는 체 $K$의 부분체이고 $F \subseteq \sigma(K)$이므로, 확대체의 (2)의 (iii)을 $K$와 그 부분체 $\sigma(K)$에 쓰면 $\sigma(K) = K$이다.

(iv) $\sigma \in G$라 하자. $\sigma(K) = K$이므로 $\sigma$의 $K$로의 제한은 값이 모두 $K$에 있고, [[ring-homomorphism|환 준동형]]의 (3)의 (ii), (iii)에 의해 $\sigma|_K : K \to K$는 환 준동형이다. $\sigma$가 단사이므로 $\sigma|_K$도 단사이고, $\sigma(K) = K$이므로 전사이다. $\sigma$는 $F$의 원소를 고정하므로 $\sigma|_K \in \operatorname{Aut}(K/F)$이다. $\sigma, \tau \in G$이면 $\tau(K) \subseteq K$이므로 모든 $a \in K$에서 $(\sigma\tau)|_K(a) = \sigma(\tau(a)) = (\sigma|_K \circ \tau|_K)(a)$이고, 자기동형군의 (1)의 (i)에 의해 $r_K(\sigma\tau) = r_K(\sigma)r_K(\tau)$이다. 곧 $r_K$는 [[group-homomorphism|군 준동형]]이다. 자기동형군의 (1)의 (i)에 의해 $\operatorname{Aut}(K/F)$의 항등원은 $i_K$이고, $r_K(\sigma) = i_K$인 것은 정확히 $\sigma$가 $K$의 모든 원소를 고정할 때, 곧 $\sigma \in \operatorname{Aut}(E/K)$일 때이다. 따라서 $\operatorname{Ker} r_K = \operatorname{Aut}(E/K)$이다.

전사임을 보이자. $\rho \in \operatorname{Aut}(K/F)$라 하자. 분해체의 (8)에 의해 $E$는 $K$ 위에서 $f$의 분해체이다. $f$를 $K[X]$의 원소로 보고 계수를 $\rho$로 옮긴 $f^{\rho}$는, [[polynomial-ring|다항식환]]의 (7)의 (i)에 의해 $f$의 계수가 모두 $F$에 있고 $\rho$가 그것을 고정하므로 모든 계수가 $f$의 것과 같아 $f^{\rho} = f$이다([[evaluation-homomorphism|대입 준동형]]의 계수 사상). 따라서 $E$는 $K$ 위에서 $f^{\rho}$의 분해체이다. [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (1)을 그 항목의 $K$, $K'$을 모두 $K$로, $\sigma$를 $\rho$로, $E'$을 $E$로 두고 쓰면, $K$ 위에서 $\rho$와 같은 환 동형사상 $\tau : E \to E$가 있다. $c \in F$이면 $\tau(c) = \rho(c) = c$이므로 $\tau \in G$이고, $r_K(\tau) = \tau|_K = \rho$이다.

[[first-isomorphism-theorem|제1 동형 정리]]의 (3)에 의해 $G/\operatorname{Ker} r_K \cong \operatorname{Aut}(K/F)$이다. [[quotient-group|몫군]]의 (5)에 의해 $G/\operatorname{Aut}(E/K)$는 원소가 $[G : \operatorname{Aut}(E/K)]$개인 유한군이므로, [[group-isomorphism|군의 동형]]의 (3)의 (iii)과 (3)에 의해 $|\operatorname{Aut}(K/F)| = [G : \operatorname{Aut}(E/K)] = [K : F]$이다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{3})$에서의 대응]
[[field-extension-examples|체의 확대의 예]]의 (1)($3$은 소수)에 의해 $[\mathbb{Q}(\sqrt{3}) : \mathbb{Q}] = 2$입니다. $\mathbb{R}$에서 $X^2 - 3 = (X - \sqrt{3})(X + \sqrt{3})$이므로 [[splitting-field|분해체]]의 (9)에 의해 $\mathbb{Q}(\sqrt{3}, -\sqrt{3})$은 $\mathbb{Q}$ 위에서 $X^2 - 3$의 분해체이고, $-\sqrt{3} \in \mathbb{Q}(\sqrt{3})$이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 이것은 $E = \mathbb{Q}(\sqrt{3})$입니다. [[characteristic-of-a-ring|환의 표수]]의 (4)와 (5)의 (iii)에 의해 $\operatorname{char} \mathbb{Q} = 0$이므로 [[separable-polynomial|근이 서로 다른 다항식]]의 (5)에 의해 설정의 가정이 성립합니다.

(3)에 의해 $|G| = 2$이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $G$의 부분군의 원소의 개수는 $1$이거나 $2$이므로 부분군은 $\{i_E\}$와 $G$뿐입니다. (1)에 의해 중간체는 정확히 둘이고, 그것은 $E^{\{i_E\}} = E$와 $E^G$이며, (3)에 의해 $[E^G : \mathbb{Q}] = [G : G] = 1$이므로 $E^G = \mathbb{Q}$입니다. 두 부분군은 모두 정규부분군이므로([[normal-subgroup|정규부분군]]의 (2)) 두 중간체는 (4)의 (i)을 만족하고, (4)의 (iv)의 등식은 $|\operatorname{Aut}(E/\mathbb{Q})| = 2 = [E : \mathbb{Q}]$, $|\operatorname{Aut}(\mathbb{Q}/\mathbb{Q})| = 1 = [\mathbb{Q} : \mathbb{Q}]$입니다.
:::

:::counterexample[분해체가 아닌 $\mathbb{Q}(c)$에서 단사가 아닌 대응]
[[field-extension-examples|체의 확대의 예]]의 (4)에 의해 $c^3 = 2$, $1 < c < 2$인 실수 $c$가 있고 $[\mathbb{Q}(c) : \mathbb{Q}] = 3$입니다. $E = \mathbb{Q}(c)$ 안의 $X^3 - 2$의 근 $x$는 $x^3 = (xx)x = 2$인 실수입니다([[subfield|부분체]]의 (3)의 (iii), [[power-of-a-real-number|실수의 거듭제곱]]의 (1)). $x < 0$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (i)과 (4)의 (iv)에 의해 $(xx)x < 0$이고 같은 항목의 (10)에 의해 $0 < 2$이므로 어긋납니다. 따라서 같은 항목의 (1)의 (iii)에 의해 $0 \le x$이고, 같은 항목의 (5)의 (ii)와 $1 < c$에 의해 $0 \le c$이므로 실수의 거듭제곱의 (6)의 (iii)에 의해 $x = c$입니다. 그래서 $\sigma \in \operatorname{Aut}(E/\mathbb{Q})$이면 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)에 의해 $\sigma(c) = c$이고, [[automorphism-group-of-extension|확대의 자기동형군]]의 (4)의 (iv)에 의해 $\sigma \in \operatorname{Aut}(E/E) = \{i_E\}$입니다.

따라서 $\operatorname{Aut}(E/\mathbb{Q}) = \{i_E\} = \operatorname{Aut}(E/E)$인데 $[E : \mathbb{Q}] = 3$이므로 [[extension-field|확대체]]의 (2)의 (ii)에 의해 $\mathbb{Q} \ne E$입니다. 곧 서로 다른 두 체 $\mathbb{Q}$와 $E$에 같은 군이 대응합니다. $E$가 $\mathbb{Q}$ 위에서 어떤 다항식의 분해체이기도 했다면 (1)에 의해 이런 일은 일어나지 않으므로, $E$는 $\mathbb{Q}$ 위의 어떤 다항식의 분해체도 아닙니다(표수 $0$이어서 근이 서로 다르다는 가정은 [[separable-polynomial|근이 서로 다른 다항식]]의 (5)에 의해 늘 성립합니다).
:::

## 확인 질문

:::check[$|G|$가 소수 $p$이면 중간체는 몇 개인가?]
둘, 곧 $F$와 $E$입니다. [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $G$의 부분군의 원소의 개수는 $p$를 나누므로 $1$이거나 $p$입니다. 원소가 $1$개인 부분군은 [[subgroup|부분군]]의 (1)에 의해 항등원 $i_E$를 가지므로 $\{i_E\}$이고, 원소가 $p$개인 부분군은 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $G$입니다. (1)에 의해 중간체는 그 고정체 $E^{\{i_E\}} = E$와 $E^G = F$(분해체의 갈루아 군의 위수의 (3))의 둘입니다.
:::

:::check[$[K : F] = 2$인 중간체 $K$는 (4)의 (i)을 만족하는가?]
만족합니다. (3)에 의해 $[G : \operatorname{Aut}(E/K)] = [K : F] = 2$이므로, [[index-two-subgroup-is-normal|지표가 2인 부분군은 정규부분군]]의 (3)에 의해 $\operatorname{Aut}(E/K)$는 $G$의 정규부분군이고, (4)의 (ii) ⇒ (i)에 의해 모든 $\sigma \in G$에서 $\sigma(K) = K$입니다.
:::
