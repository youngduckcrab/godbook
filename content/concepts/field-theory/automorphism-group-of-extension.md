---
title: 확대의 자기동형군
title_en: Automorphism Group of an Extension
aliases: [자기동형, 체의 자기동형, 자기동형군, 부분체를 고정하는 자기동형, 다항식의 갈루아 군, 갈루아 군, automorphism of a field, automorphism group, Galois group of a polynomial]
kind: definition
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "체 E 에서 E 로의 환 동형사상을 E 의 자기동형이라 하고, 그 전체 Aut(E) 와 부분체 F 의 원소를 모두 고정하는 것 전체 Aut(E/F) 는 합성에 대해 대칭군 S_E 의 부분군이다. Aut(E/F) 의 원소는 F-선형이고, 두 자기동형이 F 와 몇 개의 대수적인 원소에서 같으면 그 원소들을 붙인 체 전체에서 같다. Aut(E/F) 는 E 에 작용하며, E 가 F 위에서 f 의 분해체일 때 Aut(E/F) 를 f 의 갈루아 군이라 부른다."
requires: [power-in-a-group, function, function-composition, inverse-function, injective-surjective-bijective, integers-modulo-n, prime-number, group, subgroup, subgroup-criteria, symmetric-group, group-homomorphism, group-isomorphism, group-action, group-action-examples, stabilizer-and-fixed-points, ring, ring-homomorphism, field, finite-integral-domain-is-a-field, characteristic-of-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, evaluation-homomorphism, subfield, rational-numbers-field, real-number-arithmetic, square-root-exists, vector-space-over-a-field, linear-maps-over-a-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, finite-extension-is-algebraic, field-extension-examples, splitting-field, extension-of-isomorphism-to-splitting-fields, splitting-field-examples, frobenius-map, order-of-a-finite-field]
sources:
  - ref: judson-abstract-algebra
    loc: "23.1절 Field Automorphisms, Proposition 23.1, 23.2 (p.293), Aut(E) 와 G(E/F) 의 정의, f(x) 의 갈루아 군의 정의, Example 23.3, 23.4 (p.294), Corollary 23.9 의 증명 (p.295); 23.2절 The Fundamental Theorem, Proposition 23.14 의 증명 (p.297); 23.5절 Exercises, 연습문제 15 (p.309); 16.7절 Exercises, 연습문제 35 (p.207); 22.4절 Exercises, 연습문제 21 (p.290); 9.4절 Exercises, 연습문제 37 (p.123)"
    checked: original
    note: "출처 p.294 는 체 F 의 자기동형 전체를 Aut(F) 로, 부분체 F 의 원소를 하나씩 고정하는 E 의 자기동형 전체를 G(E/F) 로 쓰고 이것을 'the Galois group of E over F' 라 부른다. 이 항목은 G(E/F) 대신 Aut(E/F) 로 쓰고 'E 의 F 위의 자기동형군' 이라 부르며, '갈루아 군' 이라는 이름은 출처가 'the Galois group of f(x)' 라 부르는 경우, 곧 E 가 F 위에서 f 의 분해체일 때에만 쓴다. 출처는 자기동형을 정의 없이 쓰며, 이 항목은 그것을 환 동형사상 E → E 로 정한다. 출처는 정의 뒤에 복소 켤레가 G(ℂ/ℝ) 의 원소라는 Example 23.3 과 ℚ(√3, √5) 의 자기동형을 드는 Example 23.4(p.294)를 둔다. (1)의 (i)(ii)는 출처 Proposition 23.1, 23.2(p.293)이고, 출처는 그것을 합성에 대한 군으로 진술한다. 이 항목은 대칭군 S_E 의 부분군으로 진술하며, 이것은 군의 자기동형 전체가 S_G 의 부분군이라는 출처 9.4절 연습문제 37(p.123)과 같은 발상이다. 환의 자기동형 전체 Aut(R) 는 출처 16.7절 연습문제 35(p.207)에도 나온다. (2)의 σ(1) = 1 과 σ(a⁻¹) = σ(a)⁻¹ 은 출처 Proposition 23.14 의 증명(p.297)이 'σ_i(a⁻¹) = [σ_i(a)]⁻¹ = a⁻¹ … σ_i(1) = 1 since σ_i is an automorphism' 이라고 쓰는 사실이다. 출처는 f(x) 의 갈루아 군을 'the splitting field' 의 G(E/F) 로 정의하고(p.294), 이 항목은 분해체를 밝혀 이름을 붙인 뒤 (6)에서 분해체를 바꾸어도 군이 동형임을 보인다. 예시 '원소 $9$개인 체의 프로베니우스 자기동형' 은 출처 22.4절 연습문제 21(p.290, GF(pⁿ) 의 프로베니우스 사상 α ↦ α^p 는 위수 n 인 자기동형)과 같은 대상이고, 출처 Corollary 23.9 의 증명(p.295)이 쓰는 σ(α) = α^{p^n} 과 같은 사상이다. 확인 질문 '소수 $p$에 대하여 $\\mathbb{Z}_p$의 자기동형은 몇 개인가?' 와 '$\\mathbb{Q}$의 자기동형은 몇 개인가?' 는 환 ℤ 의 자기동형 전체 Aut(ℤ) 를 구하라는 출처 16.7절 연습문제 35(d)(p.207)와 같은 종류의 물음이고, ℝ 의 자기동형을 다루는 출처 23.5절 연습문제 15(p.309)와도 닿아 있다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 연습문제 대조, 근이 없는 경우 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 역원 $a^{-1}$은 [[field|가역원과 체]]의 것이고, $0$, $1$, 곱 $ab$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이다. 환 준동형, 환 동형사상은 [[ring-homomorphism|환 준동형]]의 것이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. $F$-선형사상은 [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 것이다. 대수적은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 뜻이고, $F(\alpha)$와 $F(\alpha_1, \dots, \alpha_n)$은 [[simple-algebraic-extension|단순 대수적 확대]]와 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 것이다. 대칭군 $S_E$와 그 곱(합성), 항등원 $i_E$는 [[symmetric-group|대칭군]]의 것이고, 부분군은 [[subgroup|부분군]], 동형 $\cong$은 [[group-isomorphism|군의 동형]]의 뜻이다. 작용, 작용이 정하는 준동형 $\theta$, 제한한 작용은 [[group-action|군의 작용]]의 것이고, 켤레 $gAg^{-1}$는 [[group-action-examples|군의 작용의 예]]의 (4)의 것이며, 안정자 $G_x$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이다. 분해체는 [[splitting-field|분해체]]의 것이고, 소체 $\mathbb{P}_E$는 [[order-of-a-finite-field|유한체의 원소 개수]]의 것이다.

**자기동형.** $E$가 체라 하자. 환 동형사상 $E \to E$를 $E$의 **자기동형**(automorphism)이라 하고, $E$의 자기동형 전체의 집합을 $\operatorname{Aut}(E)$로 쓴다.

**부분체를 고정하는 자기동형.** $F$가 $E$의 부분체라 하자. $\sigma \in \operatorname{Aut}(E)$가 모든 $a \in F$에서 $\sigma(a) = a$일 때 "$\sigma$는 $F$의 원소를 고정한다"고 하고,
$$
\begin{aligned}
&\operatorname{Aut}(E/F) = \{\sigma \in \operatorname{Aut}(E) : \\
&\qquad \text{모든 } a \in F \text{에서 } \sigma(a) = a\}
\end{aligned}
$$
로 쓴다. $\operatorname{Aut}(E/F)$를 $E$의 **$F$ 위의 자기동형군**(automorphism group of $E$ over $F$)이라 한다. 기호 $\operatorname{Aut}(E/F)$의 빗금은 몫군 $G/N$의 빗금과 다른 것이다.

**다항식의 갈루아 군.** $F$가 체 $E$의 부분체이고, $f \in F[X]$가 영다항식이 아니며 $\deg f \ge 1$이고, $E$가 $F$ 위에서 $f$의 분해체라 하자. 이때 $\operatorname{Aut}(E/F)$를 **$E$를 분해체로 하는 $f$의 $F$ 위의 갈루아 군**(Galois group of $f$ over $F$)이라 한다. 분해체를 바꾸어도 이 군은 동형이다(아래 (6)).

다음이 성립한다. 아래에서 $E$는 체이고 $F$는 $E$의 부분체이다.

1. (군)
   - (i) $\operatorname{Aut}(E) \subseteq S_E$이고, $\operatorname{Aut}(E)$는 대칭군 $S_E$의 부분군이다. 곧 $\sigma, \tau \in \operatorname{Aut}(E)$의 곱은 합성 $\sigma\tau = \sigma \circ \tau$이고, 항등원은 $i_E$이며, $\sigma$의 역원은 역함수 $\sigma^{-1}$이다.
   - (ii) $\operatorname{Aut}(E/F)$는 $\operatorname{Aut}(E)$의 부분군이다. $\operatorname{Aut}(E/E) = \{i_E\}$이다.
   - (iii) $K$가 $E$의 부분체이고 $F \subseteq K$이면 $\operatorname{Aut}(E/K)$는 $\operatorname{Aut}(E/F)$의 부분군이다.
2. (정수배와 소체) $\sigma \in \operatorname{Aut}(E)$이면 $\sigma(1) = 1$이고, $0$이 아닌 모든 $a \in E$에서 $\sigma(a^{-1}) = \sigma(a)^{-1}$이며, 모든 정수 $k$에서 $\sigma(k \cdot 1) = k \cdot 1$이다. 따라서 $\operatorname{char} E$가 소수이면 $\operatorname{Aut}(E) = \operatorname{Aut}(E/\mathbb{P}_E)$이다.
3. ($F$-선형) $\operatorname{Aut}(E/F)$의 모든 원소는 $F$ 위의 벡터공간 $E$에서 $E$로의 $F$-선형사상이다. 또 $E$가 $F$의 유한 확대이면, 모든 $c \in F$에서 $\tau(c) = c$인 환 준동형 $\tau : E \to E$는 모두 $\operatorname{Aut}(E/F)$의 원소이다.
4. (값이 같은 원소의 부분체) $E'$이 체이고 $\sigma, \tau : E \to E'$이 $\sigma(1) = 1$, $\tau(1) = 1$인 환 준동형이라 하자.
   - (i) $\{a \in E : \sigma(a) = \tau(a)\}$는 $E$의 부분체이다.
   - (ii) $S \subseteq E$이고, $F$를 포함하고 $S$의 원소를 모두 갖는 $E$의 부분체가 $E$뿐이라 하자. 모든 $a \in F$와 모든 $a \in S$에서 $\sigma(a) = \tau(a)$이면 $\sigma = \tau$이다.
   - (iii) $n \ge 0$이고 $\alpha_1, \dots, \alpha_n$이 $F$ 위에서 대수적인 $E$의 원소의 열이라 하자. 모든 $a \in F$와 모든 $i$에서 $\sigma(a) = \tau(a)$, $\sigma(\alpha_i) = \tau(\alpha_i)$이면, 모든 $b \in F(\alpha_1, \dots, \alpha_n)$에서 $\sigma(b) = \tau(b)$이다.
   - (iv) (iii)의 열에 대하여 $\operatorname{Aut}(E/F(\alpha_1, \dots, \alpha_n)) = \{\sigma \in \operatorname{Aut}(E/F) : \text{모든 } i \text{에서 } \sigma(\alpha_i) = \alpha_i\}$이다.
5. (작용)
   - (i) $G$가 $\operatorname{Aut}(E)$의 부분군이면, 각 $(\sigma, a) \in G \times E$에 $\sigma(a)$를 대응시키는 함수 $G \times E \to E$는 $G$의 $E$ 위의 작용이고, 이 작용이 정하는 준동형은 모든 $\sigma \in G$에서 $\theta(\sigma) = \sigma$이다. 곧 $\sigma \cdot a = \sigma(a)$이다. 이후 $\operatorname{Aut}(E)$와 그 부분군(특히 $\operatorname{Aut}(E/F)$)이 $E$에 작용한다고 할 때는 이 작용을 뜻한다. $G$의 이 작용은 $\operatorname{Aut}(E)$의 이 작용을 $G$로 제한한 작용이다.
   - (ii) $\alpha \in E$가 $F$ 위에서 대수적이면, $\operatorname{Aut}(E/F)$의 작용에서 $\alpha$의 안정자는 $\operatorname{Aut}(E/F(\alpha))$이다.
6. (갈루아 군은 분해체에 상관없다) $f \in F[X]$가 영다항식이 아니고 $\deg f \ge 1$이며, $F$가 체 $E'$의 부분체이기도 하고, $E$와 $E'$이 둘 다 $F$ 위에서 $f$의 분해체라 하자. $F$의 모든 원소를 고정하는 환 동형사상 $\tau : E \to E'$이 있고, 그런 $\tau$마다 각 $\sigma \in \operatorname{Aut}(E/F)$에 $\tau \sigma \tau^{-1} = \tau \circ \sigma \circ \tau^{-1}$을 대응시키는 함수 $\operatorname{Aut}(E/F) \to \operatorname{Aut}(E'/F)$는 군의 동형사상이다. 따라서 $\operatorname{Aut}(E/F) \cong \operatorname{Aut}(E'/F)$이다.
:::

:::english
Fields and inverses $a^{-1}$ are as in "Units and Fields", and $0$, $1$, the product $ab$ and integer multiples $k \cdot a$ are the notation of the entry on rings. Ring homomorphisms and ring isomorphisms are as in "Ring Homomorphism"; subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields, and an extension field is regarded as a vector space by the operations of (1)(i) of the entry on extension fields. $F$-linear maps are as in the entry on linear maps over a field. Algebraic is meant as in the entry on algebraic elements and minimal polynomials, and $F(\alpha)$ and $F(\alpha_1, \dots, \alpha_n)$ are as in the entries on simple algebraic extensions and on finite extensions. The symmetric group $S_E$ with its product (composition) and identity $i_E$ is as in "Symmetric Group"; subgroups are as in "Subgroup", and isomorphism $\cong$ as in the entry on group isomorphisms. Actions, the homomorphism $\theta$ determined by an action and restricted actions are as in "Group Action"; conjugates $gAg^{-1}$ are as in (4) of the entry on examples of group actions, and stabilizers $G_x$ as in the entry on stabilizers and fixed points. Splitting fields are as in "Splitting Field", and the prime subfield $\mathbb{P}_E$ is as in the entry on the number of elements of a finite field.

**Automorphisms.** Let $E$ be a field. A ring isomorphism $E \to E$ is called an **automorphism** of $E$, and the set of all automorphisms of $E$ is written $\operatorname{Aut}(E)$.

**Automorphisms fixing a subfield.** Let $F$ be a subfield of $E$. If $\sigma \in \operatorname{Aut}(E)$ satisfies $\sigma(a) = a$ for every $a \in F$, we say that $\sigma$ fixes the elements of $F$, and we write
$$
\begin{aligned}
&\operatorname{Aut}(E/F) = \{\sigma \in \operatorname{Aut}(E) : \\
&\qquad \sigma(a) = a \text{ for all } a \in F\}.
\end{aligned}
$$
$\operatorname{Aut}(E/F)$ is called the **automorphism group of $E$ over $F$**. The slash in $\operatorname{Aut}(E/F)$ is not the slash of a quotient group $G/N$.

**The Galois group of a polynomial.** Let $F$ be a subfield of a field $E$, let $f \in F[X]$ be nonzero with $\deg f \ge 1$, and let $E$ be a splitting field of $f$ over $F$. Then $\operatorname{Aut}(E/F)$ is called the **Galois group of $f$ over $F$** with $E$ as splitting field. Changing the splitting field gives an isomorphic group ((6) below).

The following hold. Below, $E$ is a field and $F$ is a subfield of $E$.

1. (Groups)
   - (i) $\operatorname{Aut}(E) \subseteq S_E$, and $\operatorname{Aut}(E)$ is a subgroup of the symmetric group $S_E$. That is, the product of $\sigma, \tau \in \operatorname{Aut}(E)$ is the composition $\sigma\tau = \sigma \circ \tau$, the identity is $i_E$, and the inverse of $\sigma$ is the inverse function $\sigma^{-1}$.
   - (ii) $\operatorname{Aut}(E/F)$ is a subgroup of $\operatorname{Aut}(E)$. $\operatorname{Aut}(E/E) = \{i_E\}$.
   - (iii) If $K$ is a subfield of $E$ with $F \subseteq K$, then $\operatorname{Aut}(E/K)$ is a subgroup of $\operatorname{Aut}(E/F)$.
2. (Integer multiples and the prime subfield) If $\sigma \in \operatorname{Aut}(E)$, then $\sigma(1) = 1$, $\sigma(a^{-1}) = \sigma(a)^{-1}$ for every nonzero $a \in E$, and $\sigma(k \cdot 1) = k \cdot 1$ for every integer $k$. Hence if $\operatorname{char} E$ is a prime, then $\operatorname{Aut}(E) = \operatorname{Aut}(E/\mathbb{P}_E)$.
3. ($F$-linearity) Every element of $\operatorname{Aut}(E/F)$ is an $F$-linear map from the vector space $E$ over $F$ to $E$. Moreover, if $E$ is a finite extension of $F$, then every ring homomorphism $\tau : E \to E$ with $\tau(c) = c$ for all $c \in F$ is an element of $\operatorname{Aut}(E/F)$.
4. (The subfield where two maps agree) Let $E'$ be a field and let $\sigma, \tau : E \to E'$ be ring homomorphisms with $\sigma(1) = 1$ and $\tau(1) = 1$.
   - (i) $\{a \in E : \sigma(a) = \tau(a)\}$ is a subfield of $E$.
   - (ii) Let $S \subseteq E$, and suppose that the only subfield of $E$ containing $F$ and all elements of $S$ is $E$. If $\sigma(a) = \tau(a)$ for every $a \in F$ and every $a \in S$, then $\sigma = \tau$.
   - (iii) Let $n \ge 0$ and let $\alpha_1, \dots, \alpha_n$ be a sequence of elements of $E$ algebraic over $F$. If $\sigma(a) = \tau(a)$ for every $a \in F$ and $\sigma(\alpha_i) = \tau(\alpha_i)$ for every $i$, then $\sigma(b) = \tau(b)$ for every $b \in F(\alpha_1, \dots, \alpha_n)$.
   - (iv) For the sequence of (iii), $\operatorname{Aut}(E/F(\alpha_1, \dots, \alpha_n)) = \{\sigma \in \operatorname{Aut}(E/F) : \sigma(\alpha_i) = \alpha_i \text{ for all } i\}$.
5. (Action)
   - (i) If $G$ is a subgroup of $\operatorname{Aut}(E)$, the function $G \times E \to E$ assigning $\sigma(a)$ to each $(\sigma, a) \in G \times E$ is an action of $G$ on $E$, and the homomorphism it determines satisfies $\theta(\sigma) = \sigma$ for every $\sigma \in G$. That is, $\sigma \cdot a = \sigma(a)$. From now on, when $\operatorname{Aut}(E)$ or a subgroup of it (in particular $\operatorname{Aut}(E/F)$) is said to act on $E$, this action is meant. This action of $G$ is the restriction to $G$ of this action of $\operatorname{Aut}(E)$.
   - (ii) If $\alpha \in E$ is algebraic over $F$, then the stabilizer of $\alpha$ under the action of $\operatorname{Aut}(E/F)$ is $\operatorname{Aut}(E/F(\alpha))$.
6. (The Galois group does not depend on the splitting field) Let $f \in F[X]$ be nonzero with $\deg f \ge 1$, let $F$ also be a subfield of a field $E'$, and let $E$ and $E'$ both be splitting fields of $f$ over $F$. There is a ring isomorphism $\tau : E \to E'$ fixing every element of $F$, and for each such $\tau$ the function $\operatorname{Aut}(E/F) \to \operatorname{Aut}(E'/F)$ assigning $\tau\sigma\tau^{-1} = \tau \circ \sigma \circ \tau^{-1}$ to each $\sigma \in \operatorname{Aut}(E/F)$ is an isomorphism of groups. Hence $\operatorname{Aut}(E/F) \cong \operatorname{Aut}(E'/F)$.
:::

## 직관

체의 자기동형은 덧셈과 곱셈을 그대로 지키면서 체의 원소를 서로 바꾸어 놓는 전단사입니다. 도형을 돌리거나 뒤집어도 도형이 제자리에 겹치듯이, 자기동형을 거친 체는 계산 규칙이 처음과 똑같습니다. 이런 "체의 대칭" 전체는 합성에 대해 군을 이루고((1)), $1$과 그 정수배는 어떤 자기동형으로도 움직이지 않습니다((2)).

부분체 $F$의 원소를 하나하나 고정하는 자기동형만 모은 것이 $\operatorname{Aut}(E/F)$입니다. 도형의 비유로는 한 축을 고정한 채 하는 회전에 해당하고, 고정하는 축이 $F$의 원소 전체입니다. 이런 자기동형은 $F$의 원소를 계수로 한 일차결합을 지키므로 $F$-선형사상입니다((3)). 거꾸로 $F$의 원소를 고정하는 $F$-선형 전단사는 곱셈을 지키지 않아 자기동형이 아닐 수 있습니다(아래 반례).

자기동형은 체를 만들어 내는 원소들의 상으로 정해집니다. 두 자기동형이 값이 같은 원소들은 부분체를 이루므로, $F$와 대수적인 원소 $\alpha_1, \dots, \alpha_n$에서 같으면 그것들을 붙인 체 전체에서 같습니다((4)). 그래서 분해체 $E$의 $F$ 위의 자기동형은 다항식의 근들을 어디로 보내는지로 정해지고, 이 군을 근들의 자리바꿈으로 볼 수 있습니다. 이 군을 그 다항식의 갈루아 군이라 부릅니다.

## 증명

:::idea
(1)은 환 동형사상의 합성과 역함수가 다시 환 동형사상이라는 것과 부분군의 판정법이고, (2)는 자기동형이 단사인 환 준동형이라는 것이다. (4)는 두 준동형의 값이 같은 원소들이 부분체의 판정법을 만족한다는 것이고, (5)는 치환군의 작용, (6)은 분해체의 유일성과 켤레이다.
:::

:::hint
(4)의 (i)에서 역원은 [[extension-field|확대체]]의 (3)의 (iii)으로 $\sigma(a^{-1}) = \sigma(a)^{-1}$를 씁니다.
:::

:::hint
(6)에서 $\tau \sigma \tau^{-1}$이 $F$의 원소를 고정하는지는 $c \in F$에서 $\tau^{-1}(c) = c$인지에 달려 있습니다.
:::

:::proof
**쓰는 사실.** "준동형의 (n)"은 [[ring-homomorphism|환 준동형]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "판정법의 (n)"은 [[subgroup-criteria|부분군의 판정법]]의 (n), "부분군의 (n)"은 [[subgroup|부분군]]의 (n)이다.

**1.** (i) 자기동형은 전단사 $E \to E$이므로 $\operatorname{Aut}(E) \subseteq S_E$이다. 준동형의 (6)의 (ii)에 의해 $i_E \in \operatorname{Aut}(E)$이고, (6)의 (i)에 의해 $\sigma, \tau \in \operatorname{Aut}(E)$이면 $\sigma \circ \tau \in \operatorname{Aut}(E)$이며, (6)의 (iii)에 의해 역함수 $\sigma^{-1}$도 $\operatorname{Aut}(E)$에 속한다. [[symmetric-group|대칭군]]의 (1)에 의해 $S_E$의 항등원은 $i_E$, 곱은 합성, $\sigma$의 역원은 역함수 $\sigma^{-1}$이므로, 판정법의 (1)에 의해 $\operatorname{Aut}(E)$는 $S_E$의 부분군이다. 부분군의 (1)–(3)에 의해 이 부분군 안의 곱, 항등원, 역원은 $S_E$의 것과 같다.

(ii) $i_E$는 모든 원소를 고정하므로 $i_E \in \operatorname{Aut}(E/F)$이다. $\sigma, \tau \in \operatorname{Aut}(E/F)$이고 $a \in F$이면 $(\sigma\tau)(a) = \sigma(\tau(a)) = \sigma(a) = a$이고, $\sigma(a) = a$이므로 $\sigma^{-1}(a) = a$이다. 따라서 판정법의 (1)에 의해 $\operatorname{Aut}(E/F)$는 군 $\operatorname{Aut}(E)$의 부분군이다. $\operatorname{Aut}(E/E)$의 원소 $\sigma$는 모든 $a \in E$에서 $\sigma(a) = a$이므로 $\sigma = i_E$이다.

(iii) $\sigma \in \operatorname{Aut}(E/K)$이면 $\sigma$는 $K$의 원소, 따라서 $F$의 원소를 모두 고정하므로 $\operatorname{Aut}(E/K) \subseteq \operatorname{Aut}(E/F)$이다. (ii)에 의해 둘 다 $\operatorname{Aut}(E)$의 부분군이므로 부분군의 (6)에 의해 $\operatorname{Aut}(E/K)$는 군 $\operatorname{Aut}(E/F)$의 부분군이다.

**2.** $\sigma$는 단사이므로 확대체의 (3)의 (ii)에 의해 $\sigma(1) = 1$이고, 확대체의 (3)의 (iii)에 의해 $\sigma(a^{-1}) = \sigma(a)^{-1}$이다. 준동형의 (1)에 의해 $\sigma(k \cdot 1) = k \cdot \sigma(1) = k \cdot 1$이다. $\operatorname{char} E$가 소수이면 $\mathbb{P}_E = \{k \cdot 1 : k \in \mathbb{Z}\}$는 [[order-of-a-finite-field|유한체의 원소 개수]]의 (2)의 (ii)에 의해 $E$의 부분체이고, 방금 본 것에 의해 모든 $\sigma \in \operatorname{Aut}(E)$가 그 원소를 고정한다. 곧 $\operatorname{Aut}(E) \subseteq \operatorname{Aut}(E/\mathbb{P}_E)$이고, 정의에 의해 $\operatorname{Aut}(E/\mathbb{P}_E) \subseteq \operatorname{Aut}(E)$이다.

**3.** $\sigma \in \operatorname{Aut}(E/F)$는 환 준동형 $E \to E$이고 모든 $c \in F$에서 $\sigma(c) = c$이므로, 확대체의 (4)의 (i)을 $E' = E$에 쓰면 $\sigma$는 $F$-선형사상이다. $E$가 $F$의 유한 확대이고 $\tau$가 둘째 문장의 환 준동형이면, 확대체의 (4)의 (ii)를 $E' = E$에 쓸 때 $[E : F] = [E : F]$이므로 $\tau : E \to E$는 전단사이고 환 동형사상이다. 곧 $\tau \in \operatorname{Aut}(E)$이고 $F$의 원소를 고정하므로 $\tau \in \operatorname{Aut}(E/F)$이다.

**4.** (i) $D = \{a \in E : \sigma(a) = \tau(a)\}$라 하자. 부분체의 (1)로 보인다. $\sigma(1) = 1 = \tau(1)$이므로 $1 \in D$이다. $a, b \in D$이면 준동형의 (1)에 의해 $\sigma(a - b) = \sigma(a) - \sigma(b) = \tau(a) - \tau(b) = \tau(a - b)$이고, 준동형의 정의에 의해 $\sigma(ab) = \sigma(a)\sigma(b) = \tau(a)\tau(b) = \tau(ab)$이므로 $a - b, ab \in D$이다. 확대체의 (3)의 (ii)에 의해 $\sigma$와 $\tau$는 단사이므로, $a \in D$이고 $a \ne 0$이면 확대체의 (3)의 (iii)에 의해 $\sigma(a^{-1}) = \sigma(a)^{-1} = \tau(a)^{-1} = \tau(a^{-1})$이고 $a^{-1} \in D$이다. 따라서 $D$는 $E$의 부분체이다.

(ii) (i)의 $D$는 $F$를 포함하고 $S$의 원소를 모두 갖는 $E$의 부분체이므로 가정에 의해 $D = E$이다. 곧 모든 $a \in E$에서 $\sigma(a) = \tau(a)$이고, $\sigma = \tau$이다.

(iii) (i)의 $D$는 $F$를 포함하고 모든 $\alpha_i$를 원소로 갖는 $E$의 부분체이므로, [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $F(\alpha_1, \dots, \alpha_n) \subseteq D$이다.

(iv) $K = F(\alpha_1, \dots, \alpha_n)$이라 하자. 유한 확대와 대수적 확대의 (1)의 (ii)에 의해 $K$는 $F$를 포함하고 모든 $\alpha_i$를 원소로 갖는 $E$의 부분체이다. $\sigma \in \operatorname{Aut}(E/K)$이면 $\sigma$는 $K$의 원소를 고정하므로 $F$의 원소와 모든 $\alpha_i$를 고정하고, 따라서 오른쪽 집합에 속한다. 거꾸로 $\sigma \in \operatorname{Aut}(E/F)$가 모든 $\alpha_i$를 고정하면, (iii)을 $E' = E$와 $\sigma$, $\tau = i_E$에 쓸 때 모든 $b \in K$에서 $\sigma(b) = b$이므로 $\sigma \in \operatorname{Aut}(E/K)$이다.

**5.** (i) (1)의 (i)과 부분군의 (6)에 의해 $G$는 $S_E$의 부분군이므로, [[group-action-examples|군의 작용의 예]]의 (2)에 의해 $(\sigma, a)$에 $\sigma(a)$를 대응시키는 함수는 $G$의 $E$ 위의 작용이고 $\theta(\sigma) = \sigma$이다. $G = \operatorname{Aut}(E)$에서 얻는 작용을 $G \times E$로 제한한 함수는 $(\sigma, a)$에서 같은 값 $\sigma(a)$를 가지므로, [[group-action|군의 작용]]의 (4)의 제한한 작용과 같다.

(ii) 안정자의 정의([[stabilizer-and-fixed-points|안정자와 고정점]])에 의해 $\alpha$의 안정자는 $\{\sigma \in \operatorname{Aut}(E/F) : \sigma(\alpha) = \alpha\}$이고, (4)의 (iv)를 $n = 1$, $\alpha_1 = \alpha$에 쓰면 이것은 $\operatorname{Aut}(E/F(\alpha_1))$이다. 유한 확대와 대수적 확대의 (1)의 (i)에 의해 $F(\alpha_1)$은 단순 대수적 확대의 $F(\alpha)$이다.

**6.** [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (4)의 (ii)에 의해 $F$의 모든 원소를 고정하는 환 동형사상 $\tau : E \to E'$이 있다. 그런 $\tau$를 하나 잡자. 준동형의 (6)의 (iii)에 의해 $\tau^{-1} : E' \to E$는 환 동형사상이고, $c \in F$이면 $\tau(c) = c$이므로 $\tau^{-1}(c) = c$이다. $\sigma \in \operatorname{Aut}(E/F)$이면 준동형의 (6)의 (i)에 의해 $\Gamma(\sigma) = \tau \circ \sigma \circ \tau^{-1}$은 환 동형사상 $E' \to E'$이고, $c \in F$에서 $\Gamma(\sigma)(c) = \tau(\sigma(c)) = \tau(c) = c$이므로 $\Gamma(\sigma) \in \operatorname{Aut}(E'/F)$이다. 같은 이유로 $\rho \in \operatorname{Aut}(E'/F)$에 $\Delta(\rho) = \tau^{-1} \circ \rho \circ \tau$를 대응시키는 함수 $\Delta : \operatorname{Aut}(E'/F) \to \operatorname{Aut}(E/F)$가 정해진다. [[function-composition|합성]]의 결합법칙과 $\tau^{-1} \circ \tau = i_E$, $\tau \circ \tau^{-1} = i_{E'}$([[inverse-function|역함수]])에 의해 $\Delta(\Gamma(\sigma)) = \sigma$이고 $\Gamma(\Delta(\rho)) = \rho$이므로 $\Gamma$는 전단사이다([[injective-surjective-bijective|전단사]]). 또 $\sigma, \sigma' \in \operatorname{Aut}(E/F)$이면
$$
\begin{aligned}
\Gamma(\sigma)\Gamma(\sigma') &= \tau \circ \sigma \circ \tau^{-1} \\
&\qquad \circ \tau \circ \sigma' \circ \tau^{-1} \\
&= \tau \circ (\sigma \circ \sigma') \circ \tau^{-1} \\
&= \Gamma(\sigma\sigma')
\end{aligned}
$$
이므로 $\Gamma$는 [[group-homomorphism|군 준동형]]이다. 따라서 $\Gamma$는 군의 동형사상이고 $\operatorname{Aut}(E/F) \cong \operatorname{Aut}(E'/F)$이다.
:::

## 예시와 반례

:::example[원소 $9$개인 체의 프로베니우스 자기동형]
$\mathbb{Z}_3$ 위의 $h = X^2 + [1]$로 만든 [[kronecker-theorem|크로네커 정리]]의 설정 $L$, $\iota$, $\alpha$를 생각합니다. [[splitting-field-examples|분해체의 예]]의 (3)에 의해 $h$는 기약이고 $L$은 원소가 $9$개이며, $h^{\iota}$는 $L$에서 근이 서로 다르고 그 두 근은 $\alpha$와 $-\alpha$입니다. 같은 항목의 (1)의 (iii)에 의해 $-\alpha \ne \alpha$입니다.

크로네커 정리의 (1)의 (ii)에 의해 $\iota$는 $\iota(1) = 1$인 단사인 환 준동형이므로, [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} L = \operatorname{char} \mathbb{Z}_3 = 3$입니다. $L$은 체이고 유한집합이므로 [[frobenius-map|프로베니우스 사상]]의 (3)에 의해 $\operatorname{Fr}_3 : L \to L$, $\operatorname{Fr}_3(a) = a^3$은 환 동형사상, 곧 $L$의 자기동형입니다. (2)에 의해 $\operatorname{Fr}_3$는 모든 $k \cdot 1$을 고정합니다. $c \in \mathbb{Z}_3$이면 [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $c = [k]$인 정수 $k$가 있고 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $c = k \cdot [1]$이며, 환 준동형의 (1)에 의해 $\iota(c) = k \cdot \iota([1]) = k \cdot 1$이므로 $\operatorname{Fr}_3$는 $\iota(\mathbb{Z}_3)$의 원소를 고정합니다. 곧 $\operatorname{Fr}_3 \in \operatorname{Aut}(L/\iota(\mathbb{Z}_3))$입니다.

[[evaluation-homomorphism|대입 준동형]]의 (3)에 의해 $h^{\iota} = X^2 + \iota([1]) = X^2 + 1$이고, 크로네커 정리의 (1)의 (iv)에 의해 $h^{\iota}(\alpha) = \alpha^2 + 1 = 0$이므로 $\alpha^2 = -1$이고, $\operatorname{Fr}_3(\alpha) = \alpha^3 = \alpha^2\alpha = -\alpha$입니다([[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]). $-\alpha \ne \alpha$이므로 $\operatorname{Fr}_3 \ne i_L$이고, $\operatorname{Aut}(L/\iota(\mathbb{Z}_3))$에는 항등함수가 아닌 원소가 있습니다. $\operatorname{Fr}_3$는 $\iota(a) + \iota(b)\alpha$를 $\iota(a) - \iota(b)\alpha$로 보냅니다.
:::

:::counterexample[환 준동형이 아닌 $\mathbb{Q}$-선형 전단사]
$E = \mathbb{Q}(\sqrt{2})$는 [[field-extension-examples|체의 확대의 예]]의 $\mathbb{R}$의 부분체이고, 그 (1)($2$는 소수)에 의해 $E$의 모든 원소는 유리수 $x$, $y$로 $x + y\sqrt{2}$로 쓰이며 $x$, $y$는 하나로 정해집니다. 그래서 $\lambda(x + y\sqrt{2}) = x + 2y\sqrt{2}$로 정한 함수 $\lambda : E \to E$가 있습니다. 유리수 $c$와 $E$의 두 원소 $u = x + y\sqrt{2}$, $v = x' + y'\sqrt{2}$에 대하여 $u + v = (x + x') + (y + y')\sqrt{2}$, $cu = cx + (cy)\sqrt{2}$이므로 $\lambda(u + v) = \lambda(u) + \lambda(v)$, $\lambda(cu) = c\lambda(u)$이고, $\lambda$는 [[extension-field|확대체]]의 (1)의 (i)로 본 $\mathbb{Q}$ 위의 벡터공간 $E$의 $\mathbb{Q}$-선형사상입니다. $x + y\sqrt{2}$를 $x + \tfrac{1}{2}y\sqrt{2}$로 보내는 함수가 역함수이므로 $\lambda$는 전단사이고, 유리수 $x$를 $x$로 보냅니다.

그러나 $\lambda$는 자기동형이 아닙니다. $\sqrt{2}\sqrt{2} = 2$이므로 $\lambda(\sqrt{2}\sqrt{2}) = \lambda(2) = 2$인데, $\lambda(\sqrt{2})\lambda(\sqrt{2}) = (2\sqrt{2})(2\sqrt{2}) = 8$이고 $2 \ne 8$입니다([[square-root-exists|제곱근의 존재]]의 (1), [[real-number-arithmetic|실수의 계산 법칙]]). 곧 $\lambda$는 곱셈을 지키지 않습니다. (3)은 $\operatorname{Aut}(E/F)$의 원소가 $F$-선형이라는 것이고, $F$의 원소를 고정하는 $F$-선형 전단사가 모두 자기동형이라는 것은 아닙니다.
:::

## 확인 질문

:::check[소수 $p$에 대하여 $\mathbb{Z}_p$의 자기동형은 몇 개인가?]
하나, 곧 항등함수뿐입니다. $\sigma \in \operatorname{Aut}(\mathbb{Z}_p)$이고 $c \in \mathbb{Z}_p$이면 [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $c = [k]$인 정수 $k$가 있고 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $c = k \cdot [1]$이며, (2)에 의해 $\sigma(c) = \sigma(k \cdot [1]) = k \cdot [1] = c$입니다. 따라서 $\sigma = i_{\mathbb{Z}_p}$입니다. ($\mathbb{Z}_p$가 체라는 것은 [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)입니다.)
:::

:::check[$\mathbb{Q}$의 자기동형은 몇 개인가?]
하나, 곧 항등함수뿐입니다. [[rational-numbers-field|유리수체]]의 (2)의 (ii)에 의해 모든 유리수는 정수 $a$와 자연수 $b$로 $a/b = ab^{-1}$로 쓰이고, 그 (5)에 의해 $a = a \cdot 1$, $b = b \cdot 1$입니다. $\sigma \in \operatorname{Aut}(\mathbb{Q})$이면 (2)에 의해 $\sigma(a) = a$, $\sigma(b) = b$, $\sigma(b^{-1}) = \sigma(b)^{-1} = b^{-1}$이므로 $\sigma(ab^{-1}) = \sigma(a)\sigma(b^{-1}) = ab^{-1}$입니다. 곧 $\operatorname{Aut}(\mathbb{Q}) = \{i_{\mathbb{Q}}\}$입니다.
:::
