---
title: 분해체의 갈루아 군의 위수
title_en: Order of the Galois Group of a Splitting Field
aliases: [갈루아 군의 위수는 차수, 자기동형의 개수와 차수, 갈루아 군의 고정체, order of the Galois group, number of automorphisms equals the degree]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "E 가 F 위에서 f 의 분해체이고 f 의 F 위의 모닉 기약 인수마다 E 에서 근이 서로 다르면, Aut(E/F) 는 원소가 [E : F] 개인 유한군이다. F 와 E 사이의 모든 체 K 에서도 Aut(E/K) 는 원소가 [E : K] 개이고, Aut(E/K) 의 고정체는 K 자신이다."
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, prime-number, group, subgroup, ring, ring-homomorphism, field, finite-integral-domain-is-a-field, integers-modulo-n, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial, subfield, extension-field, kronecker-theorem, tower-law, splitting-field, separable-polynomial, extension-of-isomorphism-to-splitting-fields, splitting-field-examples, field-extension-examples, finite-extension-is-algebraic, automorphism-group-of-extension, fixed-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.1절 Field Automorphisms, Theorem 23.7 과 그 증명 (p.295), Example 23.10 (p.296); 23.2절 The Fundamental Theorem, Proposition 23.17 과 그 증명 (p.298), Theorem 23.19 의 증명 (p.299), Theorem 23.23 의 (2)와 그 증명 (p.300); 23.5절 Exercises, 연습문제 6 (p.308), 20 (p.309)"
    checked: original
    note: "(1)은 출처 Theorem 23.7(p.295, 'If f(x) has no repeated roots, then |G(E/F)| = [E : F]')이다. 출처는 f(x) 자신이 중근을 갖지 않는다고 가정하고, 이 항목은 f 의 모닉 기약 인수마다 근이 서로 다르다고 가정한다. f 자신에 중근이 없으면 이 가정이 성립한다([[separable-polynomial|근이 서로 다른 다항식]]의 (4)). 출처의 증명은 자기동형의 개수에 대한 귀납 가정을 동형사상 F(α) → F(β) 의 연장에 쓰고, 이 항목은 그 귀납을 동형사상의 연장에 대한 명제로 한 [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (5)를 인용한다. (3)은 출처 Proposition 23.17(p.298, 'Let E be a splitting field over F of a separable polynomial. Then E_{G(E/F)} = F')을 모든 중간체 K 로 넓힌 것이고, 증명도 출처처럼 E 가 고정체 위의 분해체라는 것과 위수와 차수의 등식을 쓴다. 출처 Theorem 23.19 의 증명(p.299)도 (3)을 K = F 에서 쓴다. (2)의 |Aut(E/K)| = [E : K] 는 출처 Theorem 23.23 의 (2)와 그 증명(p.300, Theorem 23.7 로 |G(E/K)| = [E : K] 를 얻는다)과 같고, (2)의 'E 는 K 위에서도 f 의 분해체' 는 출처 Theorem 23.7 의 증명(p.295)이 'Since E is a splitting field of f(x) over F, it is also a splitting field over F(α)' 라고 쓰는 것을 일반 중간체에서 진술한 것이다. 예시 '$\\mathbb{Q}(\\sqrt{3})$의 $\\mathbb{Q}$ 위의 자기동형' 은 기약 이차 다항식의 갈루아 군이 위수 2 라는 출처 23.5절 연습문제 6(p.308)과 같은 결론이고, 출처 Example 23.10(p.296)이 |G| = [E : Q] 로 갈루아 군을 정하는 것과 같은 방법이다. 확인 질문 '$\\mathbb{Z}_5$ 위의 $X^2 - [2]$로 만든 크로네커 체 $L$에서 $|\\operatorname{Aut}(L/\\iota(\\mathbb{Z}_5))|$는 얼마인가?' 도 같은 연습문제 6 과 같은 결론이다. 확인 질문 '$E = \\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$이고 $K = \\mathbb{Q}(\\sqrt{2})$이면 $\\operatorname{Aut}(E/K)$의 원소는 몇 개인가?' 는 출처 Example 23.10(p.296)의 ℚ(√3, √5) 와 같은 꼴의 체이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 아르틴 보조정리 증명 통독, 예의 부분군·중간체 대응). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 분해체는 [[splitting-field|분해체]]의 것이고, 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. 자기동형, $\operatorname{Aut}(E/F)$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 고정체 $E^H$는 [[fixed-field|고정체]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**설정.** $E$가 체이고 $F$가 $E$의 부분체이며, $f \in F[X]$가 영다항식이 아니고 $\deg f \ge 1$이며, $E$가 $F$ 위에서 $f$의 분해체라 하자. 또 $f$의 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다고 하자. $F \subseteq K$인 $E$의 부분체 $K$를 이 항목에서 **중간체**(intermediate field)라 부른다.

1. (위수와 차수) $E$는 $F$의 유한 확대이고, $\operatorname{Aut}(E/F)$는 유한군이며
   $$
   |\operatorname{Aut}(E/F)| = [E : F]
   $$
   이다.
2. (중간체 위에서) $K$가 중간체이면, $E$는 $K$ 위에서도 $f$의 분해체이고 $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다. 따라서 $E$는 $K$의 유한 확대이고, $\operatorname{Aut}(E/K)$는 유한군이며 $|\operatorname{Aut}(E/K)| = [E : K]$이다.
3. (고정체) $K$가 중간체이면 $E^{\operatorname{Aut}(E/K)} = K$이다. 특히 $E^{\operatorname{Aut}(E/F)} = F$이다.
:::

:::english
Fields are as in "Units and Fields", and subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. Splitting fields are as in "Splitting Field", and monic irreducible factors and "has distinct roots" are as in the entry on polynomials with distinct roots. Automorphisms and $\operatorname{Aut}(E/F)$ are as in the entry on the automorphism group of an extension, and fixed fields $E^H$ as in "Fixed Field". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Setting.** Let $E$ be a field, $F$ a subfield of $E$, $f \in F[X]$ nonzero with $\deg f \ge 1$, and let $E$ be a splitting field of $f$ over $F$. Suppose moreover that every monic irreducible factor of $f$ over $F$ has distinct roots in $E$. In this entry a subfield $K$ of $E$ with $F \subseteq K$ is called an **intermediate field**.

1. (Order and degree) $E$ is a finite extension of $F$, $\operatorname{Aut}(E/F)$ is a finite group, and
   $$
   |\operatorname{Aut}(E/F)| = [E : F].
   $$
2. (Over an intermediate field) If $K$ is an intermediate field, then $E$ is also a splitting field of $f$ over $K$, and every monic irreducible factor of $f$ over $K$ has distinct roots in $E$. Hence $E$ is a finite extension of $K$, $\operatorname{Aut}(E/K)$ is a finite group, and $|\operatorname{Aut}(E/K)| = [E : K]$.
3. (Fixed field) If $K$ is an intermediate field, then $E^{\operatorname{Aut}(E/K)} = K$. In particular $E^{\operatorname{Aut}(E/F)} = F$.
:::

## 직관

[[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]은 $F$의 원소를 고정하는 환 준동형 $E \to E$의 개수를 세었습니다. 그런 준동형은 모두 자기동형이므로 그 집합이 곧 $\operatorname{Aut}(E/F)$이고, 근이 서로 다르다는 가정 아래 그 개수가 차수 $[E : F]$입니다((1)). 그래서 이 가정 아래에서는 확대의 차수를 자기동형의 개수로, 자기동형의 개수를 차수로 바꾸어 셀 수 있습니다.

밑체를 $F$에서 중간체 $K$로 키워도 $E$는 여전히 근을 붙여 얻은 체이고 근이 서로 다르다는 가정도 물려받으므로, 같은 등식이 $K$ 위에서도 성립합니다((2)). 그 결과로, $K$를 고정하는 자기동형이 모두 고정하는 원소는 $K$의 원소뿐입니다((3)). $K$보다 큰 체 $L$이 같은 자기동형들로 고정된다면 $L$ 위의 자기동형도 $K$ 위의 것과 같은 수만큼 있어야 하는데, 그러면 $[E : L] = [E : K]$가 되어 $L = K$입니다.

## 증명

:::idea
(1)은 분해체로의 동형 연장의 (5)를 $K = F$에 쓴 것이고, (2)는 분해체와 근이 서로 다르다는 조건이 중간체로 물려진다는 것이다. (3)은 $L = E^{\operatorname{Aut}(E/K)}$에서 두 자기동형군이 같다는 것과 (2)의 등식을 차수의 곱셈 공식에 넣은 것이다.
:::

:::hint
(3)에서 [[fixed-field|고정체]]의 (5)에 의해 $\operatorname{Aut}(E/L) = \operatorname{Aut}(E/K)$입니다.
:::

:::proof
**1.** [[splitting-field|분해체]]의 (6)의 (iii)에 의해 $E$는 $F$의 유한 확대이다. [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (5)를 그 항목의 $K$를 $F$로 두고 쓰면, $F$의 모든 원소를 고정하는 환 준동형 $E \to E$는 모두 전단사인 환 동형사상이고, 가정에 의해 그런 환 동형사상은 정확히 $[E : F]$개이다. [[automorphism-group-of-extension|확대의 자기동형군]]의 정의에 의해 $\operatorname{Aut}(E/F)$는 바로 $F$의 모든 원소를 고정하는 환 동형사상 $E \to E$ 전체의 집합이다. 따라서 $\operatorname{Aut}(E/F)$는 원소가 $[E : F]$개인 유한집합이고, 확대의 자기동형군의 (1)의 (ii)에 의해 군이므로 유한군이다.

**2.** 분해체의 (8)에 의해 $F$는 $K$의 부분체이고 $f \in K[X]$이며, $E$는 $K$ 위에서 $f$의 분해체이다. 분해체에서 $f$는 분해되므로 $K$, $E$, $f$는 [[separable-polynomial|근이 서로 다른 다항식]]의 (3)의 설정을 만족하고, 그 항목의 (6)에 의해 $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다. 따라서 $K$, $E$, $f$가 이 항목의 설정을 만족하고, (1)을 $F$ 대신 $K$에 쓰면 나머지가 나온다.

**3.** $L = E^{\operatorname{Aut}(E/K)}$라 하자. 고정체의 (1)에 의해 $L$은 $E$의 부분체이고, 고정체의 (4)에 의해 $K \subseteq L$이므로 $F \subseteq L$, 곧 $L$은 중간체이다. 고정체의 (5)에 의해 $\operatorname{Aut}(E/L) = \operatorname{Aut}(E/K)$이다. (2)를 $L$과 $K$에 쓰면
$$
\begin{aligned}
[E : L] &= |\operatorname{Aut}(E/L)| \\
&= |\operatorname{Aut}(E/K)| = [E : K]
\end{aligned}
$$
이다. [[subfield|부분체]]의 (5)의 (i)에 의해 $K$는 체 $L$의 부분체이고, $L$은 $E$의 부분체이며, (2)에 의해 $E$는 $K$의 유한 확대이다. [[tower-law|차수의 곱셈 공식]]의 (3)의 (ii)를 그 항목의 $F$, $K$, $E$를 각각 $K$, $L$, $E$로 두고 쓰면, $[E : L] = [E : K]$이므로 $L = K$이다. $K = F$로 두면 마지막 문장이 나온다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{3})$의 $\mathbb{Q}$ 위의 자기동형]
[[field-extension-examples|체의 확대의 예]]의 (1)($3$은 소수)에 의해 $X^2 - 3$은 $\mathbb{Q}$ 위에서 기약이고 $[\mathbb{Q}(\sqrt{3}) : \mathbb{Q}] = 2$입니다. $\mathbb{R}$에서 $X^2 - 3 = (X - \sqrt{3})(X + \sqrt{3})$이므로 [[splitting-field|분해체]]의 (9)에 의해 $\mathbb{Q}(\sqrt{3}, -\sqrt{3})$은 $\mathbb{Q}$ 위에서 $X^2 - 3$의 분해체이고, $-\sqrt{3} \in \mathbb{Q}(\sqrt{3})$이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 이것은 $\mathbb{Q}(\sqrt{3})$입니다. [[characteristic-of-a-ring|환의 표수]]의 (4)와 (5)의 (iii)에 의해 $\operatorname{char} \mathbb{Q} = 0$이므로 [[separable-polynomial|근이 서로 다른 다항식]]의 (5)에 의해 설정의 가정이 성립합니다. (1)에 의해 $|\operatorname{Aut}(\mathbb{Q}(\sqrt{3})/\mathbb{Q})| = 2$이고, (3)에 의해 이 두 자기동형이 모두 고정하는 원소는 유리수뿐입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5$ 위의 $X^2 - [2]$로 만든 크로네커 체 $L$에서 $|\operatorname{Aut}(L/\iota(\mathbb{Z}_5))|$는 얼마인가?]
$2$입니다. $X^2 - [2]$에 $[0], [1], [2], [3], [4]$를 넣은 값은 $[3], [4], [2], [2], [4]$로 $[0]$이 아니므로, [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. [[kronecker-theorem|크로네커 정리]]의 설정의 $\alpha$에 대하여, [[splitting-field-examples|분해체의 예]]의 (1)에서 $b = 0$이므로 $\alpha' = -\alpha$이고, $L$은 $\iota(\mathbb{Z}_5)$ 위에서 $h^{\iota}$의 분해체이며 $[L : \iota(\mathbb{Z}_5)] = 2$입니다. $h^{\iota}(\alpha) = 0$에서 $\alpha^2 = \iota([2])$이고 $\iota$는 단사이므로 $\alpha^2 \ne 0$, 곧 $\alpha \ne 0$입니다. $-\alpha = \alpha$이면 $\iota([2])\alpha = \alpha + \alpha = 0$이 되어 체에서 $\alpha = 0$이므로 $-\alpha \ne \alpha$이고, 같은 항목의 (1)의 (iii)에 의해 $h^{\iota}$는 $L$에서 근이 서로 다릅니다. [[evaluation-homomorphism|대입 준동형]]의 (3)의 (i)에 의해 $h^{\iota}$는 모닉이고 같은 항목의 (1)의 (i)에 의해 기약이므로, [[irreducible-polynomial|기약 다항식]]의 (3)의 (iv)에 의해 $h^{\iota}$의 모닉 기약 인수는 $h^{\iota}$ 자신뿐입니다. (1)에 의해 답은 $2$입니다.
:::

:::check[$E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$이고 $K = \mathbb{Q}(\sqrt{2})$이면 $\operatorname{Aut}(E/K)$의 원소는 몇 개인가?]
$2$개입니다. [[splitting-field-examples|분해체의 예]]의 (5)에 의해 $E$는 $\mathbb{Q}$ 위에서 $(X^2 - 2)(X^2 - 5)$의 분해체이고 설정의 가정이 성립하며, $K$는 중간체입니다. [[field-extension-examples|체의 확대의 예]]의 (1), (2)에 의해 $[K : \mathbb{Q}] = 2$, $[E : \mathbb{Q}] = 4$이고, [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $4 = [E : K] \cdot 2$이므로 $[E : K] = 2$입니다. (2)에 의해 $|\operatorname{Aut}(E/K)| = 2$입니다.
:::
