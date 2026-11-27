---
title: 자기동형과 근의 치환
title_en: Automorphisms Permute Roots
aliases: [자기동형은 근을 근으로 보낸다, 갈루아 군은 근의 치환군, 근 위의 추이적 작용, 고정하는 부분군의 켤레, automorphisms permute roots, Galois group as a permutation group, transitive action on roots]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "F 의 원소를 고정하는 E 의 자기동형은 F 위의 다항식 f 의 E 안의 근 전체 R 을 R 로 옮기고, R 위의 치환을 정한다. E 가 F 와 R 로 생성되면 이렇게 얻는 준동형 Aut(E/F) → S_R 은 단사이고, 근이 하나 이상이면 |Aut(E/F)| 는 근의 개수의 계승을 나눈다. E 가 f 의 분해체이면 f 의 모닉 기약 인수마다 그 근 위에 추이적으로 작용한다. 자기동형 σ 로 부분체 K 를 옮기면 고정하는 부분군은 σ 의 켤레로 옮겨진다."
requires: [function, function-composition, inverse-function, injective-surjective-bijective, adding-or-removing-an-element, finite-set, number-of-elements-is-unique, mathematical-induction, divisibility, divisibility-is-transitive, factorial, prime-number, integers-modulo-n, group, subgroup, symmetric-group, order-of-symmetric-group, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, lagrange-theorem, group-action, group-action-examples, orbit-of-an-action, ring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, irreducible-polynomial, subfield, rational-numbers-field, real-number-arithmetic, square-root-exists, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, finite-extension-is-algebraic, field-extension-examples, splitting-field, isomorphism-extension-to-simple-extension, separable-polynomial, extension-of-isomorphism-to-splitting-fields, splitting-field-examples, automorphism-group-of-extension]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.1절 Field Automorphisms, Example 23.4, Proposition 23.5 와 그 증명, 켤레 원소의 정의와 예 (p.294), Proposition 23.6, Theorem 23.7 의 증명, Corollary 23.9 (p.295); 23.2절 The Fundamental Theorem, Theorem 23.23 의 (4)의 증명 (p.300); 23.3절 Applications, Example 23.33 (p.306); 21.5절 Exercises, 연습문제 21 (p.277); 23.5절 Exercises, 연습문제 9, 14 (p.308–309); 22.4절 Exercises, 연습문제 21 (p.290)"
    checked: original
    note: "(1)은 출처 Proposition 23.5(p.294, 'any automorphism in G(E/F) defines a permutation of the roots of f(x) that lie in E')이다. 출처의 증명은 σ(α) 가 다시 근이라는 계산만 하고, 그것이 근 전체 위의 전단사라는 것은 적지 않는다. 이 항목은 σ⁻¹ 도 근을 근으로 보낸다는 것으로 σ(R) = R 을 보이고, 근 위의 치환을 R 로 제한한 작용이 정하는 준동형으로 진술한다. (1)의 계산은 출처 21.5절 연습문제 21(p.277, 자기동형은 최소다항식의 근 전체 위의 치환을 정한다)과 같은 발상이다. (2)의 단사성은 출처 Example 23.33(p.306)이 'every automorphism of K fixing Q is determined by the way it permutes the roots of f(x)' 라고 쓰는 사실이고, (2)의 (iii)의 '|Aut(E/F)| 는 (deg f)! 을 나눈다' 는 출처 23.5절 연습문제 9(p.308)이다. (3)의 추이성은 출처 Example 23.33(p.306)이 'Since f is irreducible, there is an element in σ ∈ G(K/Q) such that σ(a) = b for two roots a and b of f(x)' 라고 쓰는 사실이고, 출처는 그 예에서 f 가 기약이라는 것을 근거로 든다. 이 항목은 출처 Proposition 23.6(p.295, 최소다항식이 같은 α, β 에 대하여 F(α) → F(β) 의 동형사상이 있다)의 동형사상을 출처 Theorem 23.7 의 증명(p.295)처럼 분해체로 연장해 보인다. (4)는 출처 23.5절 연습문제 14(p.309, 두 중간체 K, L 이 σ(K) = L 로 켤레이면 G(E/K) 와 G(E/L) 이 켤레인 부분군)의 한 방향이고, σ(K) = K 일 때의 계산은 출처 Theorem 23.23 의 (4)의 증명(p.300)이 σ⁻¹τσ 가 G(E/K) 에 든다는 것을 보이는 계산과 같다. 출처 p.294 는 최소다항식이 같은 원소를 'conjugate over F' 라 부르지만 이 항목은 그 이름을 쓰지 않는다. 예시 '원소 $4$개인 체의 자기동형군' 은 [E : F] = k 인 유한체에서 G(E/F) 가 위수 k 인 순환군이라는 출처 Corollary 23.9(p.295)를 k = 2 에 쓴 것과 같은 결론이고, 그 생성원은 출처 22.4절 연습문제 21(p.290)의 프로베니우스 사상이다. 반례 '$\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$의 네 근 위에서 궤도가 둘인 작용' 과 확인 질문 '$\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$에서 $\\sqrt{5}$를 고정하고 $\\sqrt{2}$를 $-\\sqrt{2}$로 보내는 자기동형이 있는가?' 는 출처 Example 23.4(p.294)가 ℚ(√3, √5) 에서 ℚ(√5) 를 고정하고 √3 의 부호를 바꾸는 자기동형을 드는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 연습문제 대조, 근이 없는 경우 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체와 확대체는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 다항식환, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 최소다항식은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이고, 분해체는 [[splitting-field|분해체]]의 것이며, 모닉 기약 인수는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. 자기동형, $\operatorname{Aut}(E)$, $\operatorname{Aut}(E/F)$와 그 $E$ 위의 작용 $\sigma \cdot a = \sigma(a)$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이다. 대칭군 $S_R$은 [[symmetric-group|대칭군]]의 것이고, 작용, $G$-불변, 제한한 작용, 작용이 정하는 준동형은 [[group-action|군의 작용]]의 것이며, 궤도와 추이적 작용은 [[orbit-of-an-action|궤도]]의 것이고, 켤레 $gAg^{-1}$는 [[group-action-examples|군의 작용의 예]]의 (4)의 것이다. 함수의 제한 $\sigma|_R$은 [[adding-or-removing-an-element|함수의 제한]]의 것이고, 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이며, 계승 $n!$은 [[factorial|계승]]의 것이다.

**설정.** $E$가 체이고 $F$가 $E$의 부분체이며, $f \in F[X]$가 영다항식이 아니라 하자. $f$를 $E[X]$의 원소로 보아 $E$ 안의 $f$의 근 전체의 집합을 $R$이라 하자.

1. (근을 근으로)
   - (i) $R$은 유한집합이고 $|R| \le \deg f$이다.
   - (ii) $\sigma \in \operatorname{Aut}(E/F)$이면 모든 $a \in E$에서 $\sigma(f(a)) = f(\sigma(a))$이다. 따라서 $\sigma(R) = R$이다.
   - (iii) $R$은 $\operatorname{Aut}(E/F)$의 $E$ 위의 작용에 대해 $\operatorname{Aut}(E/F)$-불변이다. $R$로 제한한 작용이 정하는 준동형을 $\theta_R : \operatorname{Aut}(E/F) \to S_R$이라 하면, 각 $\sigma$에서 $\theta_R(\sigma)$는 $\sigma$의 $R$로의 제한을 함수 $R \to R$로 선언한 $\sigma|_R$이다. 따라서 $\sigma|_R \in S_R$이고, $\sigma, \tau \in \operatorname{Aut}(E/F)$에서 $(\sigma\tau)|_R = \sigma|_R \, \tau|_R$, $(\sigma^{-1})|_R = (\sigma|_R)^{-1}$이다.
2. (근의 치환으로 정해진다) $F$를 포함하고 $R$의 원소를 모두 갖는 $E$의 부분체가 $E$뿐이라 하자. $\deg f \ge 1$이고 $E$가 $F$ 위에서 $f$의 분해체이면 분해체의 정의에 의해 이 가정이 성립한다.
   - (i) $\theta_R$은 단사이다. 곧 $\sigma, \tau \in \operatorname{Aut}(E/F)$가 $R$의 모든 원소에서 같은 값을 가지면 $\sigma = \tau$이고, $R$의 원소를 모두 고정하는 $\operatorname{Aut}(E/F)$의 원소는 $i_E$뿐이다. 따라서 $\theta_R$을 $\operatorname{Aut}(E/F) \to \theta_R(\operatorname{Aut}(E/F))$로 선언한 것은 군의 동형사상이고, $\operatorname{Aut}(E/F)$는 $S_R$의 부분군 $\theta_R(\operatorname{Aut}(E/F))$와 동형이다.
   - (ii) $R = \emptyset$이면 $E = F$이고 $\operatorname{Aut}(E/F) = \{i_E\}$이다.
   - (iii) $m$이 자연수이고 $R$이 원소를 $m$개 가지면, $\operatorname{Aut}(E/F)$는 유한군이고 $|\operatorname{Aut}(E/F)|$는 $m!$을 나눈다. 또 $n \ge m$인 모든 정수 $n$에서 $|\operatorname{Aut}(E/F)|$는 $n!$을 나눈다. 특히 $\deg f \ge 1$이고 $E$가 $F$ 위에서 $f$의 분해체이면 $|\operatorname{Aut}(E/F)|$는 $(\deg f)!$을 나눈다.
3. (추이성) $\deg f \ge 1$이고 $E$가 $F$ 위에서 $f$의 분해체라 하자.
   - (i) $h$가 $f$의 $F$ 위의 모닉 기약 인수이고 $R_h$가 $E$ 안의 $h$의 근 전체의 집합이면, $R_h \subseteq R$이고 $R_h \ne \emptyset$이며, $R_h$는 $\operatorname{Aut}(E/F)$-불변이고, $\operatorname{Aut}(E/F)$를 $R_h$로 제한한 작용은 추이적이다. 곧 $\alpha, \beta \in R_h$이면 $\sigma(\alpha) = \beta$인 $\sigma \in \operatorname{Aut}(E/F)$가 있다.
   - (ii) $\alpha \in R$이고 $m$이 $\alpha$의 $F$ 위의 최소다항식이면, 궤도 $\operatorname{Aut}(E/F) \cdot \alpha$는 $E$ 안의 $m$의 근 전체의 집합이다.
4. (켤레) $K$가 $E$의 부분체이고 $\sigma \in \operatorname{Aut}(E)$이면, $\sigma(K)$는 $E$의 부분체이고 군 $\operatorname{Aut}(E)$에서
   $$
   \begin{aligned}
   &\sigma \operatorname{Aut}(E/K) \sigma^{-1} \\
   &\quad = \operatorname{Aut}(E/\sigma(K))
   \end{aligned}
   $$
   이다. $F \subseteq K$이고 $\sigma \in \operatorname{Aut}(E/F)$이면 $F \subseteq \sigma(K)$이고, 위 식의 양쪽은 $\operatorname{Aut}(E/F)$의 부분군이며 왼쪽은 군 $\operatorname{Aut}(E/F)$에서 계산한 켤레와 같다. 특히 $\sigma(K) = K$이면 $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \operatorname{Aut}(E/K)$이다.
:::

:::english
Fields are as in "Units and Fields", and subfields and extension fields are as in the corresponding entries. Polynomial rings, the indeterminate $X$ and divisibility are as in "Polynomial Ring"; degree and monic are as in "Degree of a Polynomial"; values and roots are as in "Evaluation Homomorphism". Minimal polynomials are as in the entry on algebraic elements and minimal polynomials, splitting fields as in "Splitting Field", and monic irreducible factors as in the entry on polynomials with distinct roots. Automorphisms, $\operatorname{Aut}(E)$, $\operatorname{Aut}(E/F)$ and their action $\sigma \cdot a = \sigma(a)$ on $E$ are as in the entry on the automorphism group of an extension. The symmetric group $S_R$ is as in "Symmetric Group"; actions, $G$-invariance, restricted actions and the homomorphism determined by an action are as in "Group Action"; orbits and transitive actions are as in "Orbit"; and conjugates $gAg^{-1}$ are as in (4) of the entry on examples of group actions. The restriction $\sigma|_R$ of a function is as in the entry on restriction of functions; finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements; and the factorial $n!$ is as in "Factorial".

**Setting.** Let $E$ be a field, $F$ a subfield of $E$, and $f \in F[X]$ a nonzero polynomial. Regarding $f$ as an element of $E[X]$, let $R$ be the set of all roots of $f$ in $E$.

1. (Roots go to roots)
   - (i) $R$ is a finite set and $|R| \le \deg f$.
   - (ii) If $\sigma \in \operatorname{Aut}(E/F)$, then $\sigma(f(a)) = f(\sigma(a))$ for every $a \in E$. Hence $\sigma(R) = R$.
   - (iii) $R$ is $\operatorname{Aut}(E/F)$-invariant under the action of $\operatorname{Aut}(E/F)$ on $E$. Let $\theta_R : \operatorname{Aut}(E/F) \to S_R$ be the homomorphism determined by the action restricted to $R$. Then for each $\sigma$, $\theta_R(\sigma)$ is the restriction $\sigma|_R$ of $\sigma$ to $R$, declared as a function $R \to R$. Hence $\sigma|_R \in S_R$, and for $\sigma, \tau \in \operatorname{Aut}(E/F)$ we have $(\sigma\tau)|_R = \sigma|_R \, \tau|_R$ and $(\sigma^{-1})|_R = (\sigma|_R)^{-1}$.
2. (Determined by the permutation of the roots) Suppose that the only subfield of $E$ containing $F$ and all elements of $R$ is $E$. If $\deg f \ge 1$ and $E$ is a splitting field of $f$ over $F$, this holds by the definition of a splitting field.
   - (i) $\theta_R$ is injective. That is, if $\sigma, \tau \in \operatorname{Aut}(E/F)$ take the same value at every element of $R$, then $\sigma = \tau$, and the only element of $\operatorname{Aut}(E/F)$ fixing every element of $R$ is $i_E$. Hence $\theta_R$, declared as $\operatorname{Aut}(E/F) \to \theta_R(\operatorname{Aut}(E/F))$, is an isomorphism of groups, and $\operatorname{Aut}(E/F)$ is isomorphic to the subgroup $\theta_R(\operatorname{Aut}(E/F))$ of $S_R$.
   - (ii) If $R = \emptyset$, then $E = F$ and $\operatorname{Aut}(E/F) = \{i_E\}$.
   - (iii) If $m$ is a natural number and $R$ has $m$ elements, then $\operatorname{Aut}(E/F)$ is a finite group and $|\operatorname{Aut}(E/F)|$ divides $m!$. Moreover $|\operatorname{Aut}(E/F)|$ divides $n!$ for every integer $n \ge m$. In particular, if $\deg f \ge 1$ and $E$ is a splitting field of $f$ over $F$, then $|\operatorname{Aut}(E/F)|$ divides $(\deg f)!$.
3. (Transitivity) Suppose $\deg f \ge 1$ and $E$ is a splitting field of $f$ over $F$.
   - (i) If $h$ is a monic irreducible factor of $f$ over $F$ and $R_h$ is the set of all roots of $h$ in $E$, then $R_h \subseteq R$, $R_h \ne \emptyset$, $R_h$ is $\operatorname{Aut}(E/F)$-invariant, and the action of $\operatorname{Aut}(E/F)$ restricted to $R_h$ is transitive. That is, if $\alpha, \beta \in R_h$, there is $\sigma \in \operatorname{Aut}(E/F)$ with $\sigma(\alpha) = \beta$.
   - (ii) If $\alpha \in R$ and $m$ is the minimal polynomial of $\alpha$ over $F$, then the orbit $\operatorname{Aut}(E/F) \cdot \alpha$ is the set of all roots of $m$ in $E$.
4. (Conjugation) If $K$ is a subfield of $E$ and $\sigma \in \operatorname{Aut}(E)$, then $\sigma(K)$ is a subfield of $E$, and in the group $\operatorname{Aut}(E)$
   $$
   \begin{aligned}
   &\sigma \operatorname{Aut}(E/K) \sigma^{-1} \\
   &\quad = \operatorname{Aut}(E/\sigma(K)).
   \end{aligned}
   $$
   If $F \subseteq K$ and $\sigma \in \operatorname{Aut}(E/F)$, then $F \subseteq \sigma(K)$, both sides of this equation are subgroups of $\operatorname{Aut}(E/F)$, and the left side equals the conjugate computed in the group $\operatorname{Aut}(E/F)$. In particular, if $\sigma(K) = K$, then $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \operatorname{Aut}(E/K)$.
:::

## 직관

$F$의 원소를 고정하는 자기동형은 계수가 $F$에 있는 식을 그대로 지키므로, $f(r) = 0$이면 $f(\sigma(r)) = \sigma(f(r)) = 0$입니다. 곧 근은 근으로 가고, 근들은 자기동형에 의해 서로 자리를 바꿀 뿐입니다((1)). $\sigma^{-1}$도 근을 근으로 보내므로 이 자리바꿈은 근의 집합 $R$의 치환이고, 근이 $E$를 만들어 내면 자기동형은 이 치환으로 완전히 정해집니다((2)). 그래서 $\operatorname{Aut}(E/F)$는 근의 치환들이 이루는 군으로 볼 수 있고, 근이 하나 이상 있으면 그 위수는 근의 개수의 계승을 나눕니다.

그러나 근의 치환이 모두 자기동형에서 오지는 않을 수 있습니다. 근 $\alpha$는 자기 최소다항식의 근으로만 갈 수 있으므로, 서로 다른 모닉 기약 인수의 근끼리는 섞이지 않습니다. 비유하면 자리 배치를 바꾸되 같은 가족끼리만 자리를 바꿀 수 있는 것과 같고, 가족이 모닉 기약 인수의 근 전체에 해당합니다. 분해체에서는 거꾸로 한 가족 안에서는 어느 자리로든 옮길 수 있습니다((3)). 이것은 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]으로 $F(\alpha) \to F(\beta)$를 만들고 [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]으로 $E$ 전체로 넓혀 얻습니다.

(4)는 자기동형 $\sigma$로 부분체 $K$를 $\sigma(K)$로 옮기면, $K$를 고정하는 자기동형들도 $\sigma$로 "옮겨" 놓은 $\sigma\tau\sigma^{-1}$이 $\sigma(K)$를 고정하는 자기동형들이 된다는 것입니다. $K$가 $\sigma$에 의해 제자리에 있으면 $K$를 고정하는 부분군은 $\sigma$의 켤레로 변하지 않습니다.

## 증명

:::idea
(1)은 대입과 계수 사상의 맞물림이고, (2)는 두 자기동형의 값이 같은 원소들이 부분체를 이룬다는 것이다. (3)은 근 하나를 붙인 체로의 동형 연장을 분해체로 넓히는 것이고, (4)는 켤레의 계산이다.
:::

:::hint
(1)의 (ii)에서 $\sigma(R) \subseteq R$만 보이면 $\sigma^{-1}$에도 같은 것을 써서 $\sigma(R) = R$을 얻습니다.
:::

:::hint
(3)에서 $h$는 $\alpha$의 최소다항식이고, $E$는 $F(\alpha)$ 위에서도 $F(\beta)$ 위에서도 $f$의 분해체입니다.
:::

:::proof
**쓰는 사실.** "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "작용의 (n)"은 [[group-action|군의 작용]]의 (n), "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "연장의 (n)"은 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (n), "분해체 연장의 (n)"은 [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (n), "근이 서로 다른의 (n)"은 [[separable-polynomial|근이 서로 다른 다항식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n)이다.

**1.** (i) [[field|가역원과 체]]의 (3)에 의해 $E$는 정역이고, 부분체의 (3)의 (iv)에 의해 $f$는 $E[X]$의 영이 아닌 원소이며 차수가 같다. [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 $R$은 유한집합이고 $|R| \le \deg f$이다.

(ii) $\sigma \in \operatorname{Aut}(E/F)$라 하자. [[ring-homomorphism|환 준동형]]의 (6)의 (ii)에 의해 항등함수 $i_F : F \to F$는 환 동형사상이고, $\sigma$는 $F$ 위에서 $i_F$와 같은 환 준동형 $E \to E$이다. 연장의 (1)을 $K = K' = F$, $E' = E$, 그 설정의 $\sigma$를 $i_F$로, $L = E$, $\tau = \sigma$로 두고 쓰면, 모든 $a \in E$에서 $\sigma(f(a)) = f^{i_F}(\sigma(a))$이다. [[evaluation-homomorphism|대입 준동형]]의 (4)에 의해 $f^{i_F} = f$이므로 $\sigma(f(a)) = f(\sigma(a))$이다. $r \in R$이면 $f(\sigma(r)) = \sigma(0) = 0$이므로 $\sigma(r) \in R$이고, 곧 $\sigma(R) \subseteq R$이다. 자기동형군의 (1)의 (ii)에 의해 $\sigma^{-1} \in \operatorname{Aut}(E/F)$이므로 같은 이유로 $\sigma^{-1}(R) \subseteq R$이고, $r \in R$이면 $r = \sigma(\sigma^{-1}(r)) \in \sigma(R)$이다. 따라서 $\sigma(R) = R$이다.

(iii) 자기동형군의 (5)의 (i)에 의해 $\sigma \cdot r = \sigma(r)$이고, (ii)에 의해 이것은 $R$에 속하므로 $R$은 $\operatorname{Aut}(E/F)$-불변이다. 작용의 (5)에 의해 $\operatorname{Aut}(E/F)$는 $R$에 제한한 작용으로 작용하고, 작용의 (1), (2)에 의해 그 작용이 정하는 $\theta_R : \operatorname{Aut}(E/F) \to S_R$은 준동형이며 $\theta_R(\sigma)$는 각 $r \in R$을 $\sigma \cdot r = \sigma(r)$로 보내는 함수이다. 이것은 [[adding-or-removing-an-element|함수의 제한]]의 $\sigma|_R$을 공역 $R$로 선언한 것이다. 준동형이므로 $\theta_R(\sigma\tau) = \theta_R(\sigma)\theta_R(\tau)$이고 작용의 (2)에 의해 $\theta_R(\sigma^{-1}) = \theta_R(\sigma)^{-1}$이다.

**2.** (i) $\sigma, \tau \in \operatorname{Aut}(E/F)$가 $R$의 모든 원소에서 같은 값을 갖는다고 하자. 둘 다 $F$의 원소를 고정하므로 $F$에서도 같은 값을 갖고, 자기동형군의 (2)에 의해 $\sigma(1) = 1 = \tau(1)$이다. 자기동형군의 (4)의 (ii)를 $E' = E$, $S = R$에 쓰면 $\sigma = \tau$이다. $\theta_R(\sigma) = \theta_R(\tau)$이면 $\sigma$와 $\tau$는 $R$에서 같은 값을 가지므로 $\theta_R$은 단사이다. $\sigma$가 $R$의 원소를 모두 고정하면 $\sigma$와 $i_E$가 $R$에서 같은 값을 가지므로 $\sigma = i_E$이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\theta_R(\operatorname{Aut}(E/F))$는 $S_R$의 부분군이고, [[group-isomorphism|군의 동형]]의 (4)에 의해 $\theta_R$을 그 상으로 선언한 것은 동형사상이다.

분해체이면 가정이 성립한다는 것: [[splitting-field|분해체]]의 정의에 의해 분해체 $E$에서는 $F$를 포함하고 $E$ 안의 $f$의 근을 모두 원소로 갖는 $E$의 부분체가 $E$뿐이다.

(ii) $R = \emptyset$이면 $F$ 자신이 $F$를 포함하고 $R$의 원소를 모두 갖는 $E$의 부분체이므로 가정에 의해 $F = E$이다. 자기동형군의 (1)의 (ii)에 의해 $\operatorname{Aut}(E/E) = \{i_E\}$이다.

(iii) [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (3)에 의해 $S_R$은 유한군이고 $|S_R| = m!$이다. [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 그 부분군 $H = \theta_R(\operatorname{Aut}(E/F))$는 유한집합이고 $|H|$는 $m!$을 나눈다. (i)과 군의 동형의 (3)의 (iii)에 의해 $\operatorname{Aut}(E/F)$는 유한군이고 $|\operatorname{Aut}(E/F)| = |H|$이다.

다음으로 $n \ge m$인 모든 정수 $n$에서 $m! \mid n!$임을 $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $m$)으로 보인다. $n = m$이면 $m! = m! \cdot 1$이다. $n \ge m$에서 $m! \mid n!$이면, [[factorial|계승]]의 (1)에 의해 $(n + 1)! = n! \cdot (n + 1)$이므로 $n! \mid (n + 1)!$이고, [[divisibility-is-transitive|나누어떨어짐의 추이성]]에 의해 $m! \mid (n + 1)!$이다. 같은 추이성에 의해 $|\operatorname{Aut}(E/F)|$는 $n!$을 나눈다.

$\deg f = n \ge 1$이고 $E$가 분해체이면, $f$는 $E$에서 분해되므로 분해체의 (1)의 (ii)에 의해 $E$ 안에 근이 있고 $R \ne \emptyset$이다. (1)의 (i)에 의해 $R$의 원소의 개수 $m$은 $1 \le m \le n$이므로, 앞 문단에 의해 $|\operatorname{Aut}(E/F)|$는 $n!$을 나눈다.

**3.** (i) 근이 서로 다른의 (3)의 (i)에 의해 $h$는 $E$에서 분해되고 $R_h \subseteq R$이다. $h$는 기약이므로 [[irreducible-polynomial|기약 다항식]]의 (3)의 (i)에 의해 상수 다항식이 아니고, $\deg h \ge 1$이다. 분해체의 (1)의 (ii)에 의해 $h$는 $E$ 안에 근을 가지므로 $R_h \ne \emptyset$이다. $h \in F[X]$는 영이 아니므로 (1)의 (ii)를 $h$에 쓰면 모든 $\sigma \in \operatorname{Aut}(E/F)$에서 $\sigma(R_h) = R_h$이고, $R_h$는 $\operatorname{Aut}(E/F)$-불변이다.

$\alpha, \beta \in R_h$라 하자. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $\alpha$는 $F$ 위에서 대수적이고 $h$는 $\alpha$의 $F$ 위의 최소다항식이다. $\beta$는 $h$의 근이므로 연장의 (5)를 $E' = E$에 쓰면, $F$의 모든 원소를 고정하고 $\rho(\alpha) = \beta$인 환 준동형 $\rho : F(\alpha) \to E$가 있고 $\rho : F(\alpha) \to F(\beta)$는 환 동형사상이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F(\alpha)$와 $F(\beta)$는 $F$를 포함하는 $E$의 부분체이고, 분해체의 (8)에 의해 $E$는 $F(\alpha)$ 위에서도 $F(\beta)$ 위에서도 $f$의 분해체이다.

$f$를 $F(\alpha)[X]$의 원소로 보고 계수를 $\rho$로 옮긴 $f^{\rho}$를 생각하자. [[polynomial-ring|다항식환]]의 (7)의 (i)에 의해 $f$의 계수는 모두 $F$에 있으므로 $0$ 이상인 모든 $n$에서 $\operatorname{coef}_n(f^{\rho}) = \rho(\operatorname{coef}_n(f)) = \operatorname{coef}_n(f)$이고, 다항식은 계수를 값으로 갖는 함수이므로 $F(\beta)[X]$에서 $f^{\rho} = f$이다. 따라서 $E$는 $F(\beta)$ 위에서 $f^{\rho}$의 분해체이다. 분해체 연장의 (1)을 $K = F(\alpha)$, $K' = F(\beta)$, 그 설정의 $\sigma$를 $\rho$로, $E' = E$로 두고 쓰면, $F(\alpha)$ 위에서 $\rho$와 같은 환 동형사상 $\tau : E \to E$가 있다. $\tau \in \operatorname{Aut}(E)$이고, $c \in F$이면 $\tau(c) = \rho(c) = c$이므로 $\tau \in \operatorname{Aut}(E/F)$이며, $\tau(\alpha) = \rho(\alpha) = \beta$이다. $R_h \ne \emptyset$이므로 [[orbit-of-an-action|궤도]]의 (6)의 정의에 의해 $R_h$ 위의 작용은 추이적이다.

(ii) 근이 서로 다른의 (3)의 (ii)에 의해 $m$은 $f$의 $F$ 위의 모닉 기약 인수이다. $R_m$을 $E$ 안의 $m$의 근 전체의 집합이라 하자. $\sigma \in \operatorname{Aut}(E/F)$이면 (1)의 (ii)를 $m$에 쓸 때 $\sigma \cdot \alpha = \sigma(\alpha) \in R_m$이므로 $\operatorname{Aut}(E/F) \cdot \alpha \subseteq R_m$이다. 거꾸로 $\beta \in R_m$이면, $\alpha \in R_m$이므로 (i)을 $h = m$에 쓸 때 $\sigma(\alpha) = \beta$인 $\sigma$가 있고 $\beta \in \operatorname{Aut}(E/F) \cdot \alpha$이다.

**4.** $\sigma$는 단사인 환 준동형 $E \to E$이므로 [[extension-field|확대체]]의 (5)의 (i)에 의해 $\sigma(K)$는 $E$의 부분체이다. 자기동형군의 (1)의 (i)에 의해 $\operatorname{Aut}(E)$의 곱은 합성이고 $\sigma$의 역원은 역함수 $\sigma^{-1}$이며, [[group-action-examples|군의 작용의 예]]의 (4)에 의해 $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \{\sigma\tau\sigma^{-1} : \tau \in \operatorname{Aut}(E/K)\}$이다.

$\tau \in \operatorname{Aut}(E/K)$이면 $\sigma\tau\sigma^{-1} \in \operatorname{Aut}(E)$이고, $b \in \sigma(K)$이면 $b = \sigma(k)$인 $k \in K$가 있어 $(\sigma\tau\sigma^{-1})(b) = \sigma(\tau(k)) = \sigma(k) = b$이다. 따라서 $\sigma\tau\sigma^{-1} \in \operatorname{Aut}(E/\sigma(K))$이다. 거꾸로 $\rho \in \operatorname{Aut}(E/\sigma(K))$이면 $\tau = \sigma^{-1}\rho\sigma \in \operatorname{Aut}(E)$이고, $k \in K$에서 $\sigma(k) \in \sigma(K)$이므로 $\tau(k) = \sigma^{-1}(\rho(\sigma(k))) = \sigma^{-1}(\sigma(k)) = k$이다. 곧 $\tau \in \operatorname{Aut}(E/K)$이고 $\rho = \sigma\tau\sigma^{-1}$이다. 이로써 두 집합이 같다.

$F \subseteq K$이고 $\sigma \in \operatorname{Aut}(E/F)$이면 $a \in F$에서 $a = \sigma(a) \in \sigma(K)$이므로 $F \subseteq \sigma(K)$이다. 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(E/K)$와 $\operatorname{Aut}(E/\sigma(K))$는 $\operatorname{Aut}(E/F)$의 부분군이고, [[subgroup|부분군]]의 (3)에 의해 군 $\operatorname{Aut}(E/F)$의 곱과 역원은 $\operatorname{Aut}(E)$의 것과 같으므로 두 군에서 계산한 켤레는 같은 집합이다. $\sigma(K) = K$이면 식의 오른쪽이 $\operatorname{Aut}(E/K)$이다.
:::

## 예시와 반례

:::example[원소 $4$개인 체의 자기동형군]
$\mathbb{Z}_2$ 위의 $h = X^2 + X + [1]$로 만든 [[kronecker-theorem|크로네커 정리]]의 설정 $L$, $\iota$, $\alpha$를 생각합니다. [[splitting-field-examples|분해체의 예]]의 (1)의 (i)과 (2)에 의해 $h^{\iota} = X^2 + X + 1$은 $\iota(\mathbb{Z}_2)$ 위에서 기약이고, $L$은 원소가 $4$개이며 $\iota(\mathbb{Z}_2)$ 위에서 $h^{\iota}$의 분해체이고, $h^{\iota}$는 $L$에서 근이 서로 다르며 두 근은 $\alpha$와 $\alpha + 1$입니다. [[evaluation-homomorphism|대입 준동형]]의 (3)의 (i)에 의해 $h^{\iota}$는 모닉이고, [[polynomial-ring|다항식환]]의 (6)의 (i)에 의해 자기 자신을 나누므로 $h^{\iota}$는 자기 자신의 $\iota(\mathbb{Z}_2)$ 위의 모닉 기약 인수입니다.

$R$을 $L$ 안의 $h^{\iota}$의 근 전체라 하면, "근이 서로 다르다"의 정의에 의해 $R = \{\alpha, \alpha + 1\}$은 원소가 $2$개입니다. (2)의 (iii)에 의해 $|\operatorname{Aut}(L/\iota(\mathbb{Z}_2))|$는 $2! = 2$를 나눕니다. (3)의 (i)에 의해 $\sigma(\alpha) = \alpha + 1$인 $\sigma \in \operatorname{Aut}(L/\iota(\mathbb{Z}_2))$가 있고, $\alpha + 1 \ne \alpha$이므로 $\sigma \ne i_L$입니다. 따라서 $\operatorname{Aut}(L/\iota(\mathbb{Z}_2)) = \{i_L, \sigma\}$이고, (2)의 (i)에 의해 $\theta_R$은 $\operatorname{Aut}(L/\iota(\mathbb{Z}_2))$에서 원소가 $2$개인 $S_R$([[symmetric-group|대칭군]]의 (3)) 위로의 동형사상입니다. $\sigma$는 $\iota(a) + \iota(b)\alpha$를 $\iota(a) + \iota(b)(\alpha + 1) = \iota(a + b) + \iota(b)\alpha$로 보냅니다.
:::

:::counterexample[$\mathbb{Q}(\sqrt{2}, \sqrt{5})$의 네 근 위에서 궤도가 둘인 작용]
$E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$와 $f = (X^2 - 2)(X^2 - 5)$를 생각합니다. [[splitting-field-examples|분해체의 예]]의 (5)에 의해 $E$는 $\mathbb{Q}$ 위에서 $f$의 분해체이고, $E$ 안의 $f$의 근은 서로 다른 네 원소 $\sqrt{2}$, $-\sqrt{2}$, $\sqrt{5}$, $-\sqrt{5}$입니다. [[field-extension-examples|체의 확대의 예]]의 (1)($2$와 $5$는 소수)에 의해 $\sqrt{2}$와 $\sqrt{5}$의 $\mathbb{Q}$ 위의 최소다항식은 $X^2 - 2$와 $X^2 - 5$입니다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sqrt{2}\sqrt{2} = 2$이므로 $E[X]$에서 $X^2 - 2 = (X - \sqrt{2})(X + \sqrt{2})$이고, [[splitting-field|분해체]]의 (1)의 (ii)에 의해 $E$ 안의 $X^2 - 2$의 근은 $\sqrt{2}$, $-\sqrt{2}$뿐입니다. $X^2 - 5$도 같습니다.

(3)의 (ii)에 의해 궤도는 $\operatorname{Aut}(E/\mathbb{Q}) \cdot \sqrt{2} = \{\sqrt{2}, -\sqrt{2}\}$와 $\operatorname{Aut}(E/\mathbb{Q}) \cdot \sqrt{5} = \{\sqrt{5}, -\sqrt{5}\}$입니다. 그래서 $\operatorname{Aut}(E/\mathbb{Q})$의 네 근 위의 작용은 궤도가 둘이고, [[orbit-of-an-action|궤도]]의 (6)에 의해 추이적이 아닙니다. 곧 $\sqrt{2}$를 $\sqrt{5}$로 보내는 $\operatorname{Aut}(E/\mathbb{Q})$의 원소는 없습니다. (3)의 추이성은 $f$의 모닉 기약 인수마다 그 근 위에서의 것이고, 이 $f$처럼 기약 인수가 둘이면 근 전체 위에서는 추이적이지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Q}(\sqrt{2}, \sqrt{5})$에서 $\sqrt{5}$를 고정하고 $\sqrt{2}$를 $-\sqrt{2}$로 보내는 자기동형이 있는가?]
있습니다. $K = \mathbb{Q}(\sqrt{5})$, $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$, $f = (X^2 - 2)(X^2 - 5)$라 하면, [[splitting-field|분해체]]의 (8)에 의해 $E$는 $K$ 위에서 $f$의 분해체입니다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (i)과 (iii)에 의해 $E = K(\sqrt{2})$입니다. $\sqrt{2} \in K$이면 [[simple-algebraic-extension|단순 대수적 확대]]의 (4)에 의해 $E = K$가 되어 $[E : \mathbb{Q}] = 4$와 $[K : \mathbb{Q}] = 2$([[field-extension-examples|체의 확대의 예]]의 (1), (2))가 어긋나므로 $\sqrt{2} \notin K$이고, $-\sqrt{2} \notin K$입니다. $E[X]$에서 $X^2 - 2 = (X - \sqrt{2})(X + \sqrt{2})$이므로 [[splitting-field|분해체]]의 (1)의 (ii)에 의해 $E$ 안의 $X^2 - 2$의 근은 $\pm\sqrt{2}$뿐이고, [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 $K$ 안의 근은 $E$ 안의 근이기도 하므로 $X^2 - 2$는 $K$ 안에 근이 없습니다. 그래서 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $K$ 위에서 기약입니다. $f$의 계수는 유리수이므로 $X^2 - 2$는 $K[X]$에서 $f$를 나누는 모닉 기약 다항식, 곧 $f$의 $K$ 위의 모닉 기약 인수이고, (3)의 (i)에 의해 $\sigma(\sqrt{2}) = -\sqrt{2}$인 $\sigma \in \operatorname{Aut}(E/K)$가 있습니다. 이 $\sigma$는 $\sqrt{5} \in K$를 고정합니다.
:::

:::check[$E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$, $K = \mathbb{Q}(\sqrt{2})$이고 $\sigma \in \operatorname{Aut}(E/\mathbb{Q})$이면 $\sigma \operatorname{Aut}(E/K) \sigma^{-1}$은 무엇인가?]
$\operatorname{Aut}(E/K)$ 자신입니다. (1)의 (ii)를 $X^2 - 2$에 쓰면 $\sigma(\sqrt{2})$는 $E$ 안의 $X^2 - 2$의 근, 곧 $\sqrt{2}$나 $-\sqrt{2}$입니다. $\sigma$는 유리수를 고정하므로 $\sigma(\mathbb{Q}) = \mathbb{Q}$이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (5)에 의해 $\sigma(K) = \sigma(\mathbb{Q})(\sigma(\sqrt{2})) = \mathbb{Q}(\pm\sqrt{2})$이며, $-\sqrt{2} \in \mathbb{Q}(\sqrt{2})$, $\sqrt{2} \in \mathbb{Q}(-\sqrt{2})$이므로 같은 항목의 (1)에 의해 $\mathbb{Q}(-\sqrt{2}) = \mathbb{Q}(\sqrt{2})$입니다. 곧 $\sigma(K) = K$이고, (4)에 의해 $\sigma \operatorname{Aut}(E/K) \sigma^{-1} = \operatorname{Aut}(E/K)$입니다.
:::
