---
title: 고정체
title_en: Fixed Field
aliases: [고정체, 자기동형의 고정체, 부분군의 고정체, fixed field, field fixed by a group of automorphisms]
kind: definition
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "체 E 의 자기동형들의 집합 H 에 대하여, H 의 모든 원소가 고정하는 E 의 원소 전체 E^H 를 H 의 고정체라 한다. E^H 는 E 의 부분체이고, H 가 부분군이면 E 위의 작용의 고정점 전체와 같다. H 를 키우면 고정체는 작아지고, H ⊆ Aut(E/K) 인 것은 정확히 K ⊆ E^H 일 때이며, 자기동형 σ 로 옮기면 σ(E^H) 는 σHσ⁻¹ 의 고정체이다."
requires: [power-in-a-group, set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, integers-modulo-n, group, subgroup, symmetric-group, group-action, group-action-examples, stabilizer-and-fixed-points, ring, ring-homomorphism, integral-domain, field, characteristic-of-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, evaluation-homomorphism, factor-theorem-for-polynomials, subfield, rational-numbers-field, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, square-root-exists, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, field-extension-examples, splitting-field-examples, isomorphism-extension-to-simple-extension, frobenius-map, order-of-a-finite-field, automorphism-group-of-extension, automorphisms-permute-roots]
sources:
  - ref: judson-abstract-algebra
    loc: "23.2절 The Fundamental Theorem, Proposition 23.14, Corollary 23.15 (p.297), 고정체의 정의와 기호 F_{σ_i}, F_G, Example 23.16, Proposition 23.17 의 증명 (p.298), Corollary 23.20 의 증명 (p.299), Theorem 23.23 (p.300); 23.5절 Exercises, 연습문제 14, 18, 20, 21 (p.309); 22.4절 Exercises, 연습문제 21 (p.290); 21.2절 Splitting Fields, Example 21.30 (p.268); 23.5절 Exercises, 연습문제 1 (p.308)"
    checked: original
    note: "출처 Proposition 23.14(p.297)는 체의 자기동형의 모임 {σ_i : i ∈ I} 가 모두 고정하는 원소 전체 F_{σ_i} 가 부분체라는 것이고, Corollary 23.15 는 Aut(F) 의 부분군 G 에 대하여 같은 것을 F_G 로 쓴다. 출처 p.298 은 F_{σ_i} 를 'the fixed field of {σ_i}' 라 부른다. 이 항목은 아래첨자 대신 위첨자 E^H 를 쓰고, H 를 Aut(E) 의 부분집합으로 두어 두 경우를 함께 다룬다. 위첨자를 쓰는 것은 군의 작용 강의의 고정점 X^H 와 맞추려는 것이고 (2)가 두 기호가 같은 집합을 가리킨다는 것이다. (4)의 둘째 문장 F ⊆ E^{Aut(E/F)} 는 출처 Proposition 23.17 의 증명(p.298)이 'Clearly, F ⊂ E_G ⊂ E' 라고 쓰는 사실이고, (5)의 첫 등식은 같은 증명이 'G(E/F) = G(E/E_G)' 라고 쓰는 사실을 일반화한 것이다. (4)의 첫째 따름 H ⊆ Aut(E/E^H) 는 출처 Corollary 23.20 의 증명(p.299)이 'Since F = K_G, G is a subgroup of G(K/F)' 라고 쓰는 사실이다. (3)의 포함의 뒤집힘은 출처 Theorem 23.23 의 (3)(p.300)과 23.5절 연습문제 21(p.309)이 중간체와 그 자기동형군의 포함에 대해 진술하는 것과 같은 방향의 사실이고, (7)은 켤레인 중간체를 다루는 출처 23.5절 연습문제 14(p.309)와 닿아 있다. 예시 '$\\mathbb{Q}(\\sqrt{2})$의 켤레 자기동형의 고정체' 는 출처 Example 23.16(p.298, ℚ(√3, √5) 에서 √3 을 −√3 으로 보내는 자기동형의 고정체는 ℚ(√5))과 같은 발상이다. 반례 '고정체 $E^{\\operatorname{Aut}(E/\\mathbb{Q})}$가 $\\mathbb{Q}$보다 큰 $E = \\mathbb{Q}(c)$' 는 출처 23.5절 연습문제 20(c)(p.309, G(ℚ(ω)/ℚ) 의 고정체는 ℚ 임을 보여라)이 묻는 등식이 성립하지 않는 경우이다. 실수의 세제곱근 하나를 붙인 체에 다항식의 다른 근이 들지 않는다는 것은 출처 Example 21.30(p.268, ℚ(∛3) 은 x³ − 3 의 분해체가 아니다)과 같은 발상이고, 출처 23.5절 연습문제 1 (b)(p.308, G(ℚ(⁴√5)/ℚ) 를 구하고 정규 확대가 아니면 그것을 담는 정규 확대를 찾아라)도 실수의 거듭제곱근 하나를 붙인 체의 자기동형군을 묻는다. 확인 질문 '$\\mathbb{Z}_3$ 위의 $X^2 + [1]$로 만든 크로네커 체 $L$에서 $L^{\\{\\operatorname{Fr}_3\\}}$은 무엇인가?' 는 출처 22.4절 연습문제 21(p.290)의 프로베니우스 자기동형을 쓴다. 확인 질문 '$H = \\{\\operatorname{Fr}_3\\}$이면 $\\operatorname{Aut}(L/L^H)$는 $H$와 같은가?' 는 서로 다른 부분군의 고정체가 다른지를 묻는 출처 23.5절 연습문제 18(p.309)과 닿아 있다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 연습문제 대조, 근이 없는 경우 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 역원 $a^{-1}$은 [[field|가역원과 체]]의 것이고, $0$, $1$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이다. 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 자기동형, $\operatorname{Aut}(E)$, $\operatorname{Aut}(E/F)$와 그 $E$ 위의 작용 $\sigma \cdot a = \sigma(a)$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 항등원 $i_E$는 [[symmetric-group|대칭군]]의 것이다. 작용과 제한한 작용은 [[group-action|군의 작용]]의 것이고, 고정점 전체 $X^G$, $X^H$, $X^g$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이며, 켤레 $gAg^{-1}$는 [[group-action-examples|군의 작용의 예]]의 (4)의 것이다. 소체 $\mathbb{P}_E$는 [[order-of-a-finite-field|유한체의 원소 개수]]의 것이다.

**고정체.** $E$가 체이고 $H \subseteq \operatorname{Aut}(E)$라 하자.
$$
\begin{aligned}
&E^H = \{a \in E : \\
&\qquad \text{모든 } \sigma \in H \text{에서 } \sigma(a) = a\}
\end{aligned}
$$
를 $H$의 **고정체**(fixed field)라 한다. $\sigma \in \operatorname{Aut}(E)$이면 $E^{\{\sigma\}}$를 $\sigma$의 고정체라 한다. 위첨자 $E^H$는 거듭제곱이 아니고, 가역원의 군 $E^{\times}$와도 다른 기호이다. 아래 (2)에 의해 이것은 고정점 전체 $X^H$와 같은 뜻의 같은 기호이다.

다음이 성립한다. 아래에서 $E$는 체이고 $H$, $H'$은 $\operatorname{Aut}(E)$의 부분집합이다.

1. (부분체) $E^H$는 $E$의 부분체이다. $E^{\emptyset} = E$이고 $E^{\{i_E\}} = E$이다. 모든 정수 $k$에서 $k \cdot 1 \in E^H$이고, 따라서 $\operatorname{char} E$가 소수이면 $\mathbb{P}_E \subseteq E^H$이다.
2. (작용의 고정점) $G$가 $\operatorname{Aut}(E)$의 부분군이고 [[automorphism-group-of-extension|확대의 자기동형군]]의 (5)의 (i)로 $E$에 작용한다고 하자. 이 작용의 고정점 전체 $X^G$($X = E$)는 $E^G$이고, $\sigma \in G$이면 $\sigma$의 고정점 전체 $X^{\sigma}$는 $E^{\{\sigma\}}$이다. $H$가 $G$의 부분군이면, $H$로 제한한 작용의 고정점 전체 $X^H$는 $E^H$이다.
3. (포함이 뒤집힌다) $H \subseteq H'$이면 $E^{H'} \subseteq E^H$이다.
4. (두 방향의 관계) $K$가 $E$의 부분체이면, $H \subseteq \operatorname{Aut}(E/K)$인 것은 정확히 $K \subseteq E^H$일 때이다. 따라서 $H \subseteq \operatorname{Aut}(E/E^H)$이고 $K \subseteq E^{\operatorname{Aut}(E/K)}$이다.
5. (두 번 하면 제자리) $K$가 $E$의 부분체이면 $\operatorname{Aut}(E/E^{\operatorname{Aut}(E/K)}) = \operatorname{Aut}(E/K)$이다. 또 $E^{\operatorname{Aut}(E/E^H)} = E^H$이다.
6. (사이의 체) $F$가 $E$의 부분체이고 $H \subseteq \operatorname{Aut}(E/F)$이면 $F \subseteq E^H$이고, $F$는 체 $E^H$의 부분체이다. 이때 $E$가 $F$의 유한 확대이면, $E^H$는 $F$의 유한 확대이고 $E$는 $E^H$의 유한 확대이며 $[E : F] = [E : E^H]\,[E^H : F]$이다.
7. (켤레) $\sigma \in \operatorname{Aut}(E)$이면 $\sigma(E^H) = E^{\sigma H \sigma^{-1}}$이다. 여기서 $\sigma H \sigma^{-1} = \{\sigma\tau\sigma^{-1} : \tau \in H\}$는 군 $\operatorname{Aut}(E)$에서의 켤레이다.
:::

:::english
Fields and inverses $a^{-1}$ are as in "Units and Fields", and $0$, $1$ and integer multiples $k \cdot a$ are the notation of the entry on rings. Subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. Automorphisms, $\operatorname{Aut}(E)$, $\operatorname{Aut}(E/F)$ and their action $\sigma \cdot a = \sigma(a)$ on $E$ are as in the entry on the automorphism group of an extension, and the identity $i_E$ is as in "Symmetric Group". Actions and restricted actions are as in "Group Action"; the sets of fixed points $X^G$, $X^H$, $X^g$ are as in the entry on stabilizers and fixed points; and conjugates $gAg^{-1}$ are as in (4) of the entry on examples of group actions. The prime subfield $\mathbb{P}_E$ is as in the entry on the number of elements of a finite field.

**Fixed fields.** Let $E$ be a field and $H \subseteq \operatorname{Aut}(E)$.
$$
\begin{aligned}
&E^H = \{a \in E : \\
&\qquad \sigma(a) = a \text{ for all } \sigma \in H\}
\end{aligned}
$$
is called the **fixed field** of $H$. If $\sigma \in \operatorname{Aut}(E)$, then $E^{\{\sigma\}}$ is called the fixed field of $\sigma$. The superscript in $E^H$ is not a power, and it is a different symbol from the group of units $E^{\times}$. By (2) below, it is the same symbol with the same meaning as the set of fixed points $X^H$.

The following hold. Below, $E$ is a field and $H$, $H'$ are subsets of $\operatorname{Aut}(E)$.

1. (Subfield) $E^H$ is a subfield of $E$. $E^{\emptyset} = E$ and $E^{\{i_E\}} = E$. For every integer $k$, $k \cdot 1 \in E^H$; hence if $\operatorname{char} E$ is a prime, then $\mathbb{P}_E \subseteq E^H$.
2. (Fixed points of the action) Let $G$ be a subgroup of $\operatorname{Aut}(E)$ acting on $E$ by (5)(i) of the entry on the automorphism group of an extension. The set $X^G$ ($X = E$) of fixed points of this action is $E^G$, and for $\sigma \in G$ the set $X^{\sigma}$ of fixed points of $\sigma$ is $E^{\{\sigma\}}$. If $H$ is a subgroup of $G$, the set $X^H$ of fixed points of the action restricted to $H$ is $E^H$.
3. (Inclusions are reversed) If $H \subseteq H'$, then $E^{H'} \subseteq E^H$.
4. (The two directions) If $K$ is a subfield of $E$, then $H \subseteq \operatorname{Aut}(E/K)$ exactly when $K \subseteq E^H$. Hence $H \subseteq \operatorname{Aut}(E/E^H)$ and $K \subseteq E^{\operatorname{Aut}(E/K)}$.
5. (Twice brings it back) If $K$ is a subfield of $E$, then $\operatorname{Aut}(E/E^{\operatorname{Aut}(E/K)}) = \operatorname{Aut}(E/K)$. Moreover $E^{\operatorname{Aut}(E/E^H)} = E^H$.
6. (Intermediate field) If $F$ is a subfield of $E$ and $H \subseteq \operatorname{Aut}(E/F)$, then $F \subseteq E^H$ and $F$ is a subfield of the field $E^H$. If moreover $E$ is a finite extension of $F$, then $E^H$ is a finite extension of $F$, $E$ is a finite extension of $E^H$, and $[E : F] = [E : E^H]\,[E^H : F]$.
7. (Conjugation) If $\sigma \in \operatorname{Aut}(E)$, then $\sigma(E^H) = E^{\sigma H \sigma^{-1}}$. Here $\sigma H \sigma^{-1} = \{\sigma\tau\sigma^{-1} : \tau \in H\}$ is the conjugate in the group $\operatorname{Aut}(E)$.
:::

## 직관

$\operatorname{Aut}(E/K)$는 부분체 $K$에서 출발해 "$K$를 고정하는 자기동형"을 모은 것이고, 고정체 $E^H$는 거꾸로 자기동형의 모임 $H$에서 출발해 "$H$가 모두 고정하는 원소"를 모은 것입니다. 거울에 비친 모양이 그대로인 도형의 부분이 거울 축 위에 있듯이, $H$의 어느 자기동형으로도 움직이지 않는 원소들이 고정체를 이룹니다. 자기동형은 덧셈, 곱셈, 역원을 지키므로 고정되는 원소끼리 계산한 결과도 고정되고, 그래서 고정체는 부분체입니다((1)).

두 방향의 만듦은 포함 관계를 뒤집습니다. 고정해야 할 자기동형이 많아지면 고정되는 원소는 늘지 않고((3)), 고정해야 할 원소가 많아지면 그것을 고정하는 자기동형은 늘지 않습니다. "$H$의 원소가 모두 $K$를 고정한다"는 한 문장을 자기동형 쪽에서 읽으면 $H \subseteq \operatorname{Aut}(E/K)$이고 원소 쪽에서 읽으면 $K \subseteq E^H$입니다((4)). 이 관계에서 (5)가 나옵니다. 부분체에서 자기동형군으로 갔다가 고정체로 돌아오면 처음 부분체를 포함하는 체가 나오는데, 그 체를 고정하는 자기동형군은 처음 것과 같습니다.

$E^{\operatorname{Aut}(E/K)}$는 $K$를 포함하지만 $K$보다 클 수 있습니다(아래 반례). 둘이 같은 예는 아래 예시입니다.

## 증명

:::idea
(1)은 자기동형이 합, 곱, 역원을 지킨다는 것이고, (2)는 작용의 값이 $\sigma(a)$라는 것이다. (3)–(5)는 정의를 두 방향으로 읽은 것이고, (6)은 차수의 곱셈 공식, (7)은 켤레의 계산이다.
:::

:::hint
(5)의 첫 등식에서 $L = E^{\operatorname{Aut}(E/K)}$로 두고, (4)를 $H = \operatorname{Aut}(E/K)$에 써 봅니다.
:::

:::proof
**쓰는 사실.** "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n)이다.

**1.** 부분체의 (1)로 보인다. 자기동형군의 (2)에 의해 모든 $\sigma \in H$에서 $\sigma(1) = 1$이므로 $1 \in E^H$이다. $a, b \in E^H$이고 $\sigma \in H$이면 [[ring-homomorphism|환 준동형]]의 (1)과 정의에 의해 $\sigma(a - b) = \sigma(a) - \sigma(b) = a - b$, $\sigma(ab) = \sigma(a)\sigma(b) = ab$이고, $a \ne 0$이면 자기동형군의 (2)에 의해 $\sigma(a^{-1}) = \sigma(a)^{-1} = a^{-1}$이다. 따라서 $E^H$는 $E$의 부분체이다. $H = \emptyset$이면 조건 "모든 $\sigma \in H$에서"는 모든 $a$에서 성립하므로 $E^{\emptyset} = E$이고, $i_E$는 모든 원소를 고정하므로 $E^{\{i_E\}} = E$이다. 자기동형군의 (2)에 의해 모든 $\sigma \in H$에서 $\sigma(k \cdot 1) = k \cdot 1$이므로 $k \cdot 1 \in E^H$이고, $\operatorname{char} E$가 소수이면 $\mathbb{P}_E = \{k \cdot 1 : k \in \mathbb{Z}\} \subseteq E^H$이다.

**2.** 자기동형군의 (5)의 (i)에 의해 이 작용에서 $\sigma \cdot a = \sigma(a)$이다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 정의에 의해 $X^G = \{a \in E : \text{모든 } \sigma \in G \text{에서 } \sigma \cdot a = a\} = E^G$이고 $X^{\sigma} = \{a \in E : \sigma \cdot a = a\} = E^{\{\sigma\}}$이다. $H$가 $G$의 부분군이면 [[group-action|군의 작용]]의 (4)로 $H$가 같은 값 $\sigma \cdot a = \sigma(a)$로 작용하고, 안정자와 고정점의 (6)의 (i)에 의해 그 고정점 전체는 $\{a \in E : \text{모든 } \sigma \in H \text{에서 } \sigma \cdot a = a\} = E^H$이다.

**3.** $a \in E^{H'}$이면 $a$는 $H'$의 모든 원소, 따라서 $H$의 모든 원소에 의해 고정되므로 $a \in E^H$이다.

**4.** $H \subseteq \operatorname{Aut}(E/K)$이면 $H$의 모든 원소가 $K$의 모든 원소를 고정하므로 $K$의 모든 원소는 $E^H$에 속한다. 거꾸로 $K \subseteq E^H$이면 $H$의 각 원소 $\sigma$는 $\operatorname{Aut}(E)$의 원소이고 $K$의 모든 원소를 고정하므로 $\sigma \in \operatorname{Aut}(E/K)$이다. (1)에 의해 $E^H$는 $E$의 부분체이므로 $\operatorname{Aut}(E/E^H)$가 정해지고, 앞의 동치를 $K = E^H$에 쓰면 $E^H \subseteq E^H$에서 $H \subseteq \operatorname{Aut}(E/E^H)$를 얻는다. 앞의 동치를 $H = \operatorname{Aut}(E/K)$에 쓰면 $\operatorname{Aut}(E/K) \subseteq \operatorname{Aut}(E/K)$에서 $K \subseteq E^{\operatorname{Aut}(E/K)}$를 얻는다.

**5.** $L = E^{\operatorname{Aut}(E/K)}$라 하자. (1)에 의해 $L$은 $E$의 부분체이고, (4)에 의해 $K \subseteq L$이므로 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(E/L) \subseteq \operatorname{Aut}(E/K)$이다. (4)의 둘째 문장을 $H = \operatorname{Aut}(E/K)$에 쓰면 $\operatorname{Aut}(E/K) \subseteq \operatorname{Aut}(E/L)$이다. 따라서 두 집합은 같다.

$M = \operatorname{Aut}(E/E^H)$라 하자. (4)에 의해 $H \subseteq M$이므로 (3)에 의해 $E^M \subseteq E^H$이다. (4)의 셋째 문장을 $K = E^H$에 쓰면 $E^H \subseteq E^{\operatorname{Aut}(E/E^H)} = E^M$이다. 따라서 $E^M = E^H$이다.

**6.** $H \subseteq \operatorname{Aut}(E/F)$이므로 (4)에 의해 $F \subseteq E^H$이다. (1)에 의해 $E^H$는 $E$의 부분체이므로 부분체의 (5)의 (i)에 의해 $F$는 체 $E^H$의 부분체이다. $E$가 $F$의 유한 확대이면, [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)을 그 항목의 $K$를 $E^H$로 두고 쓰면 나머지가 나온다.

**7.** 자기동형군의 (1)의 (i)에 의해 $\operatorname{Aut}(E)$의 곱은 합성이고 $\sigma$의 역원은 역함수 $\sigma^{-1}$이다. $a \in E^H$이고 $\tau \in H$이면 $(\sigma\tau\sigma^{-1})(\sigma(a)) = \sigma(\tau(a)) = \sigma(a)$이므로 $\sigma(a) \in E^{\sigma H \sigma^{-1}}$이다. 곧 $\sigma(E^H) \subseteq E^{\sigma H \sigma^{-1}}$이다. 거꾸로 $b \in E^{\sigma H \sigma^{-1}}$이고 $a = \sigma^{-1}(b)$라 하자. $\tau \in H$이면 $\sigma\tau\sigma^{-1}(b) = b$이므로 $\tau(a) = \sigma^{-1}\bigl(\sigma\tau\sigma^{-1}(b)\bigr) = \sigma^{-1}(b) = a$이다. 곧 $a \in E^H$이고 $b = \sigma(a) \in \sigma(E^H)$이다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{2})$의 켤레 자기동형의 고정체]
$E = \mathbb{Q}(\sqrt{2})$는 [[field-extension-examples|체의 확대의 예]]의 $\mathbb{R}$의 부분체이고, 그 (1)($2$는 소수)에 의해 $\sqrt{2}$의 $\mathbb{Q}$ 위의 최소다항식은 $X^2 - 2$이며 $E$의 원소는 유리수 $x$, $y$로 $x + y\sqrt{2}$로 하나로 정해지게 쓰입니다. [[square-root-exists|제곱근의 존재]]의 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]에 의해 $(-\sqrt{2})(-\sqrt{2}) = \sqrt{2}\sqrt{2} = 2$이므로 $-\sqrt{2} \in E$는 $X^2 - 2$의 근입니다. [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (5)를 $K = \mathbb{Q}$, $E' = E$, $\alpha = \sqrt{2}$, $\beta = -\sqrt{2}$에 쓰면, 유리수를 모두 고정하고 $\rho(\sqrt{2}) = -\sqrt{2}$인 환 준동형 $\rho : E \to E$가 있고 $\rho : E \to \mathbb{Q}(-\sqrt{2})$는 환 동형사상입니다. $-\sqrt{2} \in E$이고 $\sqrt{2} = -(-\sqrt{2}) \in \mathbb{Q}(-\sqrt{2})$이므로 [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $\mathbb{Q}(-\sqrt{2}) = E$이고, $\rho \in \operatorname{Aut}(E/\mathbb{Q})$입니다. $\rho(x + y\sqrt{2}) = x + y\rho(\sqrt{2}) = x + (-y)\sqrt{2}$입니다.

$x + y\sqrt{2}$가 $E^{\{\rho\}}$에 속하는 것은 $x + (-y)\sqrt{2} = x + y\sqrt{2}$일 때이고, 좌표가 하나로 정해지므로 정확히 $-y = y$, 곧 $y = 0$일 때입니다. 따라서 $E^{\{\rho\}} = \mathbb{Q}$입니다. (4)에 의해 $\mathbb{Q} \subseteq E^{\operatorname{Aut}(E/\mathbb{Q})}$이고, $\{\rho\} \subseteq \operatorname{Aut}(E/\mathbb{Q})$이므로 (3)에 의해 $E^{\operatorname{Aut}(E/\mathbb{Q})} \subseteq E^{\{\rho\}} = \mathbb{Q}$입니다. 곧 $E^{\operatorname{Aut}(E/\mathbb{Q})} = \mathbb{Q}$입니다.
:::

:::counterexample[고정체 $E^{\operatorname{Aut}(E/\mathbb{Q})}$가 $\mathbb{Q}$보다 큰 $E = \mathbb{Q}(c)$]
[[field-extension-examples|체의 확대의 예]]의 (4)에 의해 $c^3 = 2$이고 $1 < c < 2$인 실수 $c$가 있고, $c$의 $\mathbb{Q}$ 위의 최소다항식은 $X^3 - 2$이며 $[\mathbb{Q}(c) : \mathbb{Q}] = 3$입니다. $E = \mathbb{Q}(c)$라 하고 $x \in E$가 $X^3 - 2$의 근, 곧 $x^3 = 2$라 합시다. [[subfield|부분체]]의 (3)의 (iii)에 의해 $E$에서의 $x^3$은 $\mathbb{R}$에서의 $x^3 = (xx)x$와 같고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 이것은 그 항목의 실수의 거듭제곱과 같습니다. $x < 0$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (i)에 의해 $0 < xx$이고 같은 항목의 (4)의 (iv)에 의해 $(xx)x < 0$인데, 같은 항목의 (10)에 의해 $0 < 2$이므로 $x^3 = 2$와 어긋납니다. 따라서 실수의 순서의 성질의 (1)의 (iii)에 의해 $0 \le x$입니다. 같은 항목의 (5)의 (ii)에 의해 $0 < 1$이고 $1 < c$이므로 $0 \le c$이며, 실수의 거듭제곱의 (6)의 (iii)을 $x^3 = 2 = c^3$에 쓰면 $x = c$입니다. 곧 $E$ 안의 $X^3 - 2$의 근은 $c$뿐입니다.

$\sigma \in \operatorname{Aut}(E/\mathbb{Q})$이면 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)에 의해 $\sigma(c)$는 $E$ 안의 $X^3 - 2$의 근이므로 $\sigma(c) = c$이고, [[automorphism-group-of-extension|확대의 자기동형군]]의 (4)의 (iv)를 $n = 1$에 쓰면 $\sigma \in \operatorname{Aut}(E/\mathbb{Q}(c)) = \operatorname{Aut}(E/E) = \{i_E\}$입니다. 따라서 $\operatorname{Aut}(E/\mathbb{Q}) = \{i_E\}$이고 (1)에 의해 $E^{\operatorname{Aut}(E/\mathbb{Q})} = E^{\{i_E\}} = E$입니다. $[E : \mathbb{Q}] = 3 \ne 1$이므로 [[extension-field|확대체]]의 (2)의 (ii)에 의해 $E \ne \mathbb{Q}$입니다. 곧 (4)의 포함 $\mathbb{Q} \subseteq E^{\operatorname{Aut}(E/\mathbb{Q})}$는 등호가 아닐 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_3$ 위의 $X^2 + [1]$로 만든 크로네커 체 $L$에서 $L^{\{\operatorname{Fr}_3\}}$은 무엇인가?]
$\iota(\mathbb{Z}_3)$입니다. [[kronecker-theorem|크로네커 정리]]의 (1)의 (ii)에 의해 $\iota$는 $\iota(1) = 1$인 단사인 환 준동형이므로 [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} L = 3$이고, [[splitting-field-examples|분해체의 예]]의 (3)에 의해 $L$은 원소가 $9$개인 체이므로 [[frobenius-map|프로베니우스 사상]]의 (3)에 의해 $\operatorname{Fr}_3 \in \operatorname{Aut}(L)$입니다. $L^{\{\operatorname{Fr}_3\}} = \{a \in L : a^3 = a\}$의 원소는 $X^3 - X$의 근이므로 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 $3$개 이하이고, (1)에 의해 $\mathbb{P}_L \subseteq L^{\{\operatorname{Fr}_3\}}$이며 [[order-of-a-finite-field|유한체의 원소 개수]]의 (2)의 (ii)에 의해 $\mathbb{P}_L$은 원소가 $3$개입니다. [[subset-of-finite-set|유한집합의 부분집합]]의 (1), (2)에 의해 $L^{\{\operatorname{Fr}_3\}} = \mathbb{P}_L$입니다. 마지막으로 $c \in \mathbb{Z}_3$은 [[integers-modulo-n|법 n의 정수]]의 정의와 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $c = [k] = k \cdot [1]$인 정수 $k$로 쓰이고 [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\iota(c) = k \cdot \iota([1]) = k \cdot 1 \in \mathbb{P}_L$이므로 $\iota(\mathbb{Z}_3) \subseteq \mathbb{P}_L$이며, 크로네커 정리의 (1)의 (ii)에 의해 $\iota(\mathbb{Z}_3)$는 $L$의 부분체이므로 유한체의 원소 개수의 (2)의 (iii)에 의해 $\mathbb{P}_L$을 포함합니다. 따라서 $L^{\{\operatorname{Fr}_3\}} = \mathbb{P}_L = \iota(\mathbb{Z}_3)$입니다.
:::

:::check[$H = \{\operatorname{Fr}_3\}$이면 $\operatorname{Aut}(L/L^H)$는 $H$와 같은가?]
같지 않습니다. (4)에 의해 $H \subseteq \operatorname{Aut}(L/L^H)$이고, [[automorphism-group-of-extension|확대의 자기동형군]]의 (1)의 (ii)에 의해 $\operatorname{Aut}(L/L^H)$는 군이므로 항등원 $i_L$을 원소로 갖습니다. 그런데 $\alpha$를 크로네커 정리의 $X$의 잉여류라 하면 $\alpha^2 = -1$이므로 $\operatorname{Fr}_3(\alpha) = \alpha^2\alpha = -\alpha$이고, 분해체의 예의 (1)의 (iii)과 (3)에 의해 $-\alpha \ne \alpha$입니다. 그래서 $\operatorname{Fr}_3 \ne i_L$이고 $i_L \notin H$입니다. 곧 $H \subseteq \operatorname{Aut}(L/L^H)$이지만 $H \ne \operatorname{Aut}(L/L^H)$이고, (4)의 포함 $H \subseteq \operatorname{Aut}(E/E^H)$는 등호가 아닐 수 있습니다.
:::
