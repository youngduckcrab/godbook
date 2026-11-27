---
title: 분해체로의 동형 연장
title_en: Extending Isomorphisms to Splitting Fields
aliases: [분해체의 유일성, 분해체로의 연장, 연장의 개수, uniqueness of splitting fields, extension of isomorphisms to splitting fields, number of extensions]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "체의 동형사상 σ : K → K′ 과 f ∈ K[X] 에 대하여, K 위에서 f 의 분해체 E 에서 K′ 위에서 f^σ 의 분해체 E′ 으로 σ 를 연장한 동형사상이 있고 [E′ : K′] = [E : K] 이다. K 위에서 σ 와 같은 환 준동형 E → E′ 은 모두 동형사상이고, f 의 모닉 기약 인수마다 근이 서로 다르면 그런 연장은 정확히 [E : K] 개이다. 특히 분해체는 동형사상을 빼면 하나로 정해지고, 근이 서로 다르다는 조건은 분해체에 상관없다."
requires: [set, function, function-composition, inverse-function, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, partition, real-number-arithmetic, square-root-exists, rational-numbers-field, field-extension-examples, finite-set, number-of-elements-is-unique, order-of-symmetric-group, strong-induction, ring, ring-homomorphism, integral-domain, field, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, subfield, irreducible-polynomial, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, splitting-field, isomorphism-extension-to-simple-extension, separable-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, Theorem 21.34 와 그 증명, Figure 21.35, Corollary 21.36 (p.269–270); 23.1절 Field Automorphisms, Example 23.4 (p.294), Theorem 23.7 과 그 증명, Figure 23.8 (p.295); 22.1절 Structure of a Finite Field, Theorem 22.6 의 증명 (p.280); 21.5절 Exercises, 연습문제 21 (p.277)"
    checked: original
    note: "(1)은 출처 Theorem 21.34(p.269, 'ϕ extends to an isomorphism ψ : K → L')이고, (4)의 (ii)의 첫 문장은 Corollary 21.36(p.270, 'unique up to isomorphism')이다. 출처의 증명은 deg p(x) 에 대한 귀납으로 'We can assume that p(x) is irreducible over E. Therefore, q(x) is also irreducible over F' 라고 적은 뒤 근 α, β 와 Lemma 21.32 의 동형사상 E(α) → F(β) 를 잡고, p(x) = (x − α)f(x) 로 써서 K 가 E(α) 위에서 f(x) 의 분해체라고 하여 귀납 가정을 쓴다. 이 항목은 기약이라고 가정하지 않고 [E : K] 에 대한 강한 귀납으로 증명하며, 귀납 가정을 쓰는 다항식은 처음의 f 자신이다(분해체의 (8)). (2)는 출처 Theorem 23.7(p.295, 'If f(x) has no repeated roots, then |G(E/F)| = [E : F]')을 σ 의 연장의 개수로 넓힌 것이다. 출처의 증명은 [E : F] 에 대한 귀납으로 d 개의 동형사상 ϕ : F(α) → F(β_i) 가 각각 '[E : F]/d extensions' 를 갖는다고 적고, 마지막에 F 를 고정하는 자기동형 σ 의 F(α) 로의 제한이 어떤 ϕ 라고 적는다. 이 항목은 귀납 명제를 처음부터 동형사상 σ : K → K′ 의 연장에 대한 것으로 두고, 연장 전체를 τ(α) 의 값으로 나눈 분할과 대칭군의 원소의 개수의 (7)로 센다. 가정은 출처의 'no repeated roots' 대신 '모닉 기약 인수마다 근이 서로 다르다' 이다(근이 서로 다른 다항식의 (4)에 의해 출처의 가정에서 이것이 나온다). (3), (4)의 (i), (4)의 (ii)의 둘째 문장은 출처의 증명들이 쓰는 '근을 근으로 보낸다' 에서 나오는 사실을 진술로 올린 것이고, (5)는 출처 Theorem 23.7 의 결론을 자기동형의 이름 없이 적은 것이다. 출처 Theorem 22.6 의 증명(p.280)은 유한체의 유일성에 Corollary 21.36 을 쓴다. 출처 21.5절 연습문제 21(p.277)은 F 를 고정하는 자기동형이 최소다항식의 근을 치환한다는 것을 묻는다. 예시 '$\\sqrt{2}$를 $-\\sqrt{2}$로 보내는 동형사상을 $\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$로 넓히기' 는 Q(√3, √5) 에서 a + b√3 을 a − b√3 으로 보내는 자기동형을 드는 출처 Example 23.4(p.294)와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(연장 개수의 귀납과 분할 셈 통독). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 환 준동형과 환 동형사상은 [[ring-homomorphism|환 준동형]]의 것이고, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. "분해된다", 일차식 분해, 분해체는 [[splitting-field|분해체]]의 것이고, 연장과 "$K$ 위에서 $\sigma$와 같다"는 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 것이며, "근이 서로 다르다"와 모닉 기약 인수는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**설정.** $E$와 $E'$이 체이고, $K$는 $E$의 부분체, $K'$은 $E'$의 부분체이며, $\sigma : K \to K'$은 환 동형사상이라 하자. $f \in K[X]$는 영다항식이 아니고 $\deg f \ge 1$이며, [[irreducible-polynomial|기약 다항식]]의 (7)에 의해 $f^{\sigma} \in K'[X]$도 영다항식이 아니고 $\deg f^{\sigma} = \deg f$이다. $E$는 $K$ 위에서 $f$의 분해체이고, $E'$은 $K'$ 위에서 $f^{\sigma}$의 분해체라 하자. $K$ 위에서 $\sigma$와 같은 환 동형사상 $E \to E'$ 전체의 집합을 $\mathcal{T}(\sigma)$로 쓴다($E$, $E'$, $f$에 따라 정해지는 이 항목 안의 이름이다).

1. (연장의 존재) $\mathcal{T}(\sigma)$는 공집합이 아니다. 또 $E'$은 $K'$의 유한 확대이고 $[E' : K'] = [E : K]$이다.
2. (연장의 개수) $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르면, $\mathcal{T}(\sigma)$는 유한집합이고 $|\mathcal{T}(\sigma)| = [E : K]$이다.
3. (준동형이면 동형사상) $K$ 위에서 $\sigma$와 같은 환 준동형 $\tau : E \to E'$은 환 동형사상이다. 곧 $\tau \in \mathcal{T}(\sigma)$이다. 또 $\tau$는 $E$ 안의 $f$의 근 전체의 집합을 $E'$ 안의 $f^{\sigma}$의 근 전체의 집합 위로 전단사로 보낸다.
4. (분해체의 유일성과 근이 서로 다르다는 조건)
   - (i) $h$가 $f$의 $K$ 위의 모닉 기약 인수이면 $h^{\sigma}$는 $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수이고, $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수는 모두 이런 $h^{\sigma}$이다. $h$가 $E$에서 근이 서로 다른 것은 정확히 $h^{\sigma}$가 $E'$에서 근이 서로 다를 때이다. 따라서 "$f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다"는 것은 정확히 "$f^{\sigma}$의 $K'$ 위의 모닉 기약 인수마다 $E'$에서 근이 서로 다르다"일 때이다.
   - (ii) ($\sigma$가 항등함수일 때) $K$가 체 $E$의 부분체이고 체 $E'$의 부분체이기도 하며, $E$와 $E'$이 둘 다 $K$ 위에서 $f$의 분해체이면, $K$의 모든 원소를 고정하는 환 동형사상 $E \to E'$이 있고 $[E : K] = [E' : K]$이다. 또 $f$의 $K$ 위의 모닉 기약 인수 $h$가 $E$에서 근이 서로 다른 것은 정확히 $E'$에서 근이 서로 다를 때이다.
5. (자기 자신으로의 연장) $K$가 체 $E$의 부분체이고 $E$가 $K$ 위에서 $f$의 분해체라 하자. $K$의 모든 원소를 고정하는 환 준동형 $E \to E$는 모두 전단사인 환 동형사상이고, 항등함수가 그 하나이다. $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르면 그런 환 동형사상은 정확히 $[E : K]$개이다.
:::

:::english
Fields are as in "Units and Fields"; subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. Ring homomorphisms and ring isomorphisms are as in "Ring Homomorphism", and the polynomial $f^{\varphi}$ with transported coefficients is as in "Evaluation Homomorphism". "Splits", factorizations into linear factors and splitting fields are as in "Splitting Field"; extensions and "agrees with $\sigma$ on $K$" are as in "Extending Isomorphisms to Simple Extensions"; "has distinct roots" and monic irreducible factors are as in "Polynomials with Distinct Roots". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Setting.** Let $E$ and $E'$ be fields, let $K$ be a subfield of $E$ and $K'$ a subfield of $E'$, and let $\sigma : K \to K'$ be a ring isomorphism. Let $f \in K[X]$ be nonzero with $\deg f \ge 1$; by (7) of "Irreducible Polynomial", $f^{\sigma} \in K'[X]$ is nonzero and $\deg f^{\sigma} = \deg f$. Let $E$ be a splitting field of $f$ over $K$ and $E'$ a splitting field of $f^{\sigma}$ over $K'$. Denote by $\mathcal{T}(\sigma)$ the set of all ring isomorphisms $E \to E'$ that agree with $\sigma$ on $K$ (a name local to this entry, depending on $E$, $E'$ and $f$).

1. (Existence of an extension) $\mathcal{T}(\sigma)$ is nonempty. Moreover, $E'$ is a finite extension of $K'$ and $[E' : K'] = [E : K]$.
2. (Number of extensions) If every monic irreducible factor of $f$ over $K$ has distinct roots in $E$, then $\mathcal{T}(\sigma)$ is a finite set and $|\mathcal{T}(\sigma)| = [E : K]$.
3. (Homomorphisms are isomorphisms) Every ring homomorphism $\tau : E \to E'$ that agrees with $\sigma$ on $K$ is a ring isomorphism; that is, $\tau \in \mathcal{T}(\sigma)$. Moreover, $\tau$ maps the set of all roots of $f$ in $E$ bijectively onto the set of all roots of $f^{\sigma}$ in $E'$.
4. (Uniqueness of splitting fields and the condition of distinct roots)
   - (i) If $h$ is a monic irreducible factor of $f$ over $K$, then $h^{\sigma}$ is a monic irreducible factor of $f^{\sigma}$ over $K'$, and every monic irreducible factor of $f^{\sigma}$ over $K'$ is of this form. Moreover, $h$ has distinct roots in $E$ exactly when $h^{\sigma}$ has distinct roots in $E'$. Hence every monic irreducible factor of $f$ over $K$ has distinct roots in $E$ exactly when every monic irreducible factor of $f^{\sigma}$ over $K'$ has distinct roots in $E'$.
   - (ii) (When $\sigma$ is the identity) If $K$ is a subfield of a field $E$ and also of a field $E'$, and both $E$ and $E'$ are splitting fields of $f$ over $K$, then there is a ring isomorphism $E \to E'$ fixing every element of $K$, and $[E : K] = [E' : K]$. Moreover, a monic irreducible factor $h$ of $f$ over $K$ has distinct roots in $E$ exactly when it has distinct roots in $E'$.
5. (Extensions to the field itself) Let $K$ be a subfield of a field $E$ and let $E$ be a splitting field of $f$ over $K$. Every ring homomorphism $E \to E$ fixing every element of $K$ is a bijective ring isomorphism, and the identity function is one of them. If every monic irreducible factor of $f$ over $K$ has distinct roots in $E$, then there are exactly $[E : K]$ such ring isomorphisms.
:::

## 직관

분해체 $E$는 $K$에 $f$의 근을 붙인 체이므로, $\sigma$를 $E$로 넓히려면 근들을 어디로 보낼지 정하면 됩니다. 근 $\alpha$ 하나를 붙인 $K(\alpha)$까지는 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]이 연장을 주고, $E$는 다시 $K(\alpha)$ 위에서 $f$의 분해체이면서 차수가 더 작습니다. 그래서 차수에 대한 귀납으로 연장이 있다는 것((1))이 나옵니다.

연장의 개수는 이 귀납을 따라 셉니다. $\alpha$의 최소다항식 $m$의 차수가 $d$이면, 연장은 $\alpha$를 $m^{\sigma}$의 근으로 보내고, 그 근이 $d$개일 때 $\alpha$의 상이 무엇인지에 따라 연장 전체가 $d$개의 조각으로 나뉩니다. 각 조각은 $K(\alpha)$에서의 연장 하나를 다시 $E$로 넓힌 것들이고, 귀납으로 $[E : K(\alpha)]$개씩 있습니다. 그래서 모두 $d \cdot [E : K(\alpha)] = [E : K]$개입니다((2)). 근이 서로 다르다는 가정은 조각의 개수가 $d$라는 곳과, 그 가정을 $K(\alpha)$ 쪽의 귀납 가정에 넘겨주는 곳에서 쓰입니다.

$\sigma$가 항등함수이면 (1)은 같은 다항식의 두 분해체가 $K$의 원소를 고정하는 동형사상으로 이어진다는 것, 곧 분해체가 동형사상을 빼면 하나로 정해진다는 것입니다((4)). 이 동형사상이 근을 근으로 보내므로, 모닉 기약 인수의 근이 서로 다른지는 어느 분해체에서 보아도 같습니다.

## 증명

:::idea
(3)은 연장이 근을 근으로 보내고 $E$가 근으로 생성된다는 것이다. (1)과 (2)는 $[E : K]$에 대한 강한 귀납으로 함께 보인다. $K$에 속하지 않는 근 $\alpha$를 하나 잡아 $K(\alpha)$로의 연장을 만들고, $E$를 $K(\alpha)$ 위의 분해체로 보아 귀납 가정을 쓰며, 개수는 연장을 $\tau(\alpha)$의 값으로 나눈 분할로 센다.
:::

:::hint
$[E : K] \ge 2$이면 [[splitting-field|분해체]]의 (7)에 의해 $K$에 속하지 않는 근 $\alpha$가 있습니다. [[tower-law|차수의 곱셈 공식]]으로 $[E : K(\alpha)] < [E : K]$입니다.
:::

:::hint
(2)에서 $\beta$가 $m^{\sigma}$의 근일 때 $\{\tau \in \mathcal{T}(\sigma) : \tau(\alpha) = \beta\}$는 $\alpha$를 $\beta$로 보내는 $K(\alpha)$로의 연장 $\rho_{\beta}$를 다시 $E$로 연장한 것 전체와 같습니다.
:::

:::proof
**쓰는 사실.** "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "연장의 (n)"은 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (n), "근의 (n)"은 [[separable-polynomial|근이 서로 다른 다항식]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n), "곱셈의 (n)"은 [[tower-law|차수의 곱셈 공식]]의 (n), "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n)이다. 분해체의 (6)의 (iii)에 의해 $E$는 $K$의 유한 확대이고 $E'$은 $K'$의 유한 확대이다.

**3.** 연장의 (1)을 $L = E$에 쓰면 $\tau(1) = 1$, $\tau$는 단사이고 $E'[X]$에서 $f^{\tau} = f^{\sigma}$이다. $n = \deg f$, $f = a(X - c_1) \cdots (X - c_n)$을 $f$의 $E$에서의 일차식 분해라 하면, 분해체의 (5)에 의해 $f^{\sigma} = f^{\tau} = \tau(a)(X - \tau(c_1)) \cdots (X - \tau(c_n))$은 $f^{\sigma}$의 $E'$에서의 일차식 분해이고 $E'$ 안의 $f^{\sigma}$의 근 전체는 $\{\tau(c_1), \dots, \tau(c_n)\}$이다. 분해체의 (6)의 (ii)에 의해 $E = K(c_1, \dots, c_n)$이고, [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (2)에 의해
$$
\begin{aligned}
\tau(E) &= \tau(K)\bigl(\tau(c_1), \dots, \tau(c_n)\bigr) \\
&= K'\bigl(\tau(c_1), \dots, \tau(c_n)\bigr)
\end{aligned}
$$
이다($\tau(K) = \sigma(K) = K'$). 분해체의 (6)의 (ii)를 $E'$, $K'$, $f^{\sigma}$와 위의 일차식 분해에 쓰면 이것은 $E'$이다. 따라서 $\tau : E \to E'$은 전사이고, 단사이므로 전단사, 곧 환 동형사상이다. 분해체의 (1)의 (ii)에 의해 $E$ 안의 $f$의 근 전체는 $R = \{c_1, \dots, c_n\}$이고, $\tau$는 $R$을 $\{\tau(c_1), \dots, \tau(c_n)\}$ 위로 보내며 단사이므로, $R$에서 $E'$ 안의 $f^{\sigma}$의 근 전체로의 전단사를 준다.

**1과 2.** 자연수 $n$마다 다음 명제 $P_n$을 [[strong-induction|강한 귀납법]]으로 보인다.

$P_n$은 "모든 체 $E$, $E'$과 그 부분체 $K$, $K'$, 환 동형사상 $\sigma : K \to K'$, 영이 아니고 차수가 $1$ 이상인 $f \in K[X]$로서 $E$가 $K$ 위에서 $f$의 분해체, $E'$이 $K'$ 위에서 $f^{\sigma}$의 분해체이고 $[E : K] = n$인 것에 대하여, (가) $\mathcal{T}(\sigma) \ne \emptyset$이고 $[E' : K'] = n$이며, (나) $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수마다 $E'$에서 근이 서로 다르면 $\mathcal{T}(\sigma)$는 유한집합이고 원소를 $n$개 갖는다"이다.

(1)은 (가)이다. (2)는 아래 (4)의 (i)로 가정을 $f^{\sigma}$ 쪽으로 옮긴 뒤 (나)를 쓴 것이다.

*기초 단계 $n = 1$.* 확대체의 (2)의 (ii)에 의해 $E = K$이고, 분해체의 (7)에 의해 $K[X]$에서 $f = a(X - c_1) \cdots (X - c_k)$로 분해된다. 분해체의 (5)를 $\sigma : K \to K'$에 쓰면 $f^{\sigma}$는 $K'$에서 분해되므로, 분해체의 (7)에 의해 $E' = K'$이고 $[E' : K'] = 1$이다. $\sigma$ 자신은 $E = K$에서 $E' = K'$으로의 환 동형사상이고 $K$ 위에서 $\sigma$와 같으므로 $\sigma \in \mathcal{T}(\sigma)$이다. $\tau \in \mathcal{T}(\sigma)$이면 $\tau$의 정의역 $E = K$의 모든 원소에서 $\tau = \sigma$이므로 $\tau = \sigma$이다. 곧 $\mathcal{T}(\sigma) = \{\sigma\}$는 원소를 $1$개 갖는다.

*귀납 단계.* $n \ge 2$이고 $1 \le n_1 < n$인 모든 $n_1$에서 $P_{n_1}$이 참이라 하고, $[E : K] = n$인 설정을 잡자. 확대체의 (2)의 (ii)에 의해 $E \ne K$이므로, 분해체의 (7)에 의해 $E$ 안의 $f$의 근 $\alpha$로서 $\alpha \notin K$인 것이 있다. 그런 $\alpha$를 하나 잡는다. 근의 (3)의 (ii)에 의해 $\alpha$의 $K$ 위의 최소다항식 $m$은 $f$의 $K$ 위의 모닉 기약 인수이고, $d = \deg m$이라 하면 최소의 (6)에 의해 $d \ne 1$이므로 $d \ge 2$이다. 단순의 (1)에 의해 $K \subseteq K(\alpha) \subseteq E$이고, 단순의 (3)의 (iii)과 곱셈의 (3)의 (i)에 의해 $n = n_1 d$, $n_1 = [E : K(\alpha)]$이며, $d \ge 2$이므로 $1 \le n_1 < n$이다.

연장의 (2)의 (i)에 의해 $m^{\sigma}$는 $K'$ 위의 모닉 기약 다항식이고 차수가 $d$이며, 기약의 (7)의 (ii)에 의해 $K'[X]$에서 $m^{\sigma} \mid f^{\sigma}$이다. 곧 $m^{\sigma}$는 $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수이다. 근의 (3)의 (i)에 의해 $m^{\sigma}$는 $E'$에서 분해되고 그 근은 $f^{\sigma}$의 근이다. $R'$을 $E'$ 안의 $m^{\sigma}$의 근 전체의 집합이라 하면, 분해체의 (1)의 (ii)에 의해 $R' \ne \emptyset$이다.

$\beta \in R'$마다 연장의 (3)에 의해 $K$ 위에서 $\sigma$와 같고 $\rho_{\beta}(\alpha) = \beta$인 환 준동형 $\rho_{\beta} : K(\alpha) \to E'$이 정확히 하나 있고, $\rho_{\beta} : K(\alpha) \to K'(\beta)$는 환 동형사상이다. 부분체의 (3)의 (iv)에 의해 $f \in K(\alpha)[X]$이고, 연장의 (1)에 의해 $f^{\rho_{\beta}}$는 $f^{\sigma}$와 같은 계수를 가지므로 다항식환의 (7)의 (i)에 의해 $K'(\beta)[X]$의 원소로서 $f^{\rho_{\beta}} = f^{\sigma}$이다. 분해체의 (8)에 의해 $E$는 $K(\alpha)$ 위에서 $f$의 분해체이고, $K' \subseteq K'(\beta) \subseteq E'$이므로 $E'$은 $K'(\beta)$ 위에서 $f^{\sigma} = f^{\rho_{\beta}}$의 분해체이다. 곧 $(E, E', K(\alpha), K'(\beta), \rho_{\beta}, f)$는 $[E : K(\alpha)] = n_1$인 설정이다. 이 설정의 $\mathcal{T}$를 $\mathcal{T}(\rho_{\beta})$로 쓴다.

(가): $\beta \in R'$를 하나 잡는다. $P_{n_1}$의 (가)에 의해 $\tau \in \mathcal{T}(\rho_{\beta})$가 있고 $[E' : K'(\beta)] = n_1$이다. $\tau$는 $K(\alpha)$ 위에서 $\rho_{\beta}$와 같고 $\rho_{\beta}$는 $K$ 위에서 $\sigma$와 같으므로 $\tau \in \mathcal{T}(\sigma)$이다. 최소의 (5)에 의해 $\beta$의 $K'$ 위의 최소다항식은 $m^{\sigma}$이므로 단순의 (3)의 (iii)에 의해 $[K'(\beta) : K'] = d$이고, 곱셈의 (2)에 의해 $[E' : K'] = n_1 d = n$이다.

(나): $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수마다 $E'$에서 근이 서로 다르다고 하자. $m^{\sigma}$가 그런 인수이므로 $R'$은 원소를 $d$개 갖는다. 근의 (6)을 $K' \subseteq K'(\beta) \subseteq E'$과 $f^{\sigma}$에 쓰면, $f^{\sigma} = f^{\rho_{\beta}}$의 $K'(\beta)$ 위의 모닉 기약 인수마다 $E'$에서 근이 서로 다르다.

$\tau \in \mathcal{T}(\sigma)$이면 연장의 (1)을 $L = E$에 쓴 것에 의해 $\tau(\alpha)$는 $m^{\sigma}$의 근, 곧 $\tau(\alpha) \in R'$이다. $\beta \in R'$마다 $B_{\beta} = \{\tau \in \mathcal{T}(\sigma) : \tau(\alpha) = \beta\}$로 두자. $B_{\beta} = \mathcal{T}(\rho_{\beta})$이다. 실제로 $\tau \in \mathcal{T}(\rho_{\beta})$이면 앞 문단처럼 $\tau \in \mathcal{T}(\sigma)$이고 $\tau(\alpha) = \rho_{\beta}(\alpha) = \beta$이다. 거꾸로 $\tau \in B_{\beta}$이면 [[ring-homomorphism|환 준동형]]의 (3)의 (ii)에 의해 제한 $\tau|_{K(\alpha)} : K(\alpha) \to E'$은 환 준동형이고 $K$ 위에서 $\sigma$와 같으며 $\alpha$를 $\beta$로 보내므로, 연장의 (2)의 (iii)에 의해 $\rho_{\beta}$와 같다. 곧 $\tau$는 $K(\alpha)$ 위에서 $\rho_{\beta}$와 같고 $\tau \in \mathcal{T}(\rho_{\beta})$이다. $P_{n_1}$의 (가)와 (나)에 의해 각 $B_{\beta}$는 공집합이 아닌 유한집합이고 원소를 $n_1$개 갖는다.

$\mathcal{S} = \{B_{\beta} : \beta \in R'\}$는 $\mathcal{T}(\sigma)$의 [[partition|분할]]이다. 각 $B_{\beta}$는 $\mathcal{T}(\sigma)$의 부분집합이고 공집합이 아니다. $\tau \in \mathcal{T}(\sigma)$이면 $\tau(\alpha) \in R'$이고 $\tau \in B_{\tau(\alpha)}$이다. $\tau \in B_{\beta} \cap B_{\gamma}$이면 $\beta = \tau(\alpha) = \gamma$이므로, $B_{\beta} \ne B_{\gamma}$이면 $B_{\beta} \cap B_{\gamma} = \emptyset$이다. 각 $\beta \in R'$에 $B_{\beta}$를 대응시키는 함수 $R' \to \mathcal{S}$는 정의에 의해 전사이고, $\beta \ne \gamma$이면 방금 본 것에 의해 $B_{\beta} \cap B_{\gamma} = \emptyset$이며 $B_{\beta} \ne \emptyset$이므로 $B_{\beta} \ne B_{\gamma}$, 곧 단사이다. [[finite-set|유한집합]]의 (F4)에 의해 $\mathcal{S}$는 원소를 $d$개 갖는다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (7)을 $A = \mathcal{T}(\sigma)$, $k = d$, $m = n_1$에 쓰면 $\mathcal{T}(\sigma)$는 유한집합이고 원소를 $d n_1 = n$개 갖는다. 이로써 $P_n$이 참이다.

**4.** (i) 기약의 (7)에 의해 $\sigma$의 계수 사상은 환 동형사상 $K[X] \to K'[X]$이고 모닉, 기약, 나누어떨어짐을 양쪽으로 보존하므로, $h$가 $f$의 $K$ 위의 모닉 기약 인수이면 $h^{\sigma}$는 $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수이다. 거꾸로 $u$가 $f^{\sigma}$의 $K'$ 위의 모닉 기약 인수이면, 계수 사상이 전사이므로 $h^{\sigma} = u$인 $h \in K[X]$가 있고, 같은 보존에 의해 $h$는 $f$의 $K$ 위의 모닉 기약 인수이다.

이제 (1)에 의해 $\tau \in \mathcal{T}(\sigma)$를 하나 잡는다. 근의 (3)의 (i)에 의해 $h$는 $E$에서 분해되고, $r = \deg h$, $h = b(X - e_1) \cdots (X - e_r)$를 그 일차식 분해라 하자. 연장의 (1)과 분해체의 (5)에 의해 $h^{\sigma} = h^{\tau} = \sigma(b)(X - \tau(e_1)) \cdots (X - \tau(e_r))$는 $h^{\sigma}$의 $E'$에서의 일차식 분해이다. $\tau$는 단사이므로, 각 $j$에 $e_j$를 대응시키는 함수가 단사인 것은 정확히 $\tau(e_j)$를 대응시키는 함수가 단사일 때이다([[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번과, $\tau(e_i) = \tau(e_j)$이면 $e_i = e_j$라는 것). 근의 (2)와 (1)의 (ii), (iii)에 의해, $h$가 $E$에서 근이 서로 다른 것은 정확히 첫 열이 단사일 때이고, $h^{\sigma}$가 $E'$에서 근이 서로 다른 것은 정확히 둘째 열이 단사일 때이다. 마지막 문장은 앞의 대응에서 나온다.

(ii) [[ring-homomorphism|환 준동형]]의 (6)의 (ii)에 의해 항등함수 $i_K$는 환 동형사상이고, [[evaluation-homomorphism|대입 준동형]]의 (4)에 의해 $f^{i_K} = f$이며 $h^{i_K} = h$이다. 따라서 (1)과 (i)을 $K' = K$, $\sigma = i_K$에 쓰면 된다. "$K$ 위에서 $i_K$와 같다"는 "$K$의 모든 원소를 고정한다"이다.

**5.** (3)을 $E' = E$, $K' = K$, $\sigma = i_K$에 쓰면($f^{i_K} = f$) 첫 문장이 나오고, 항등함수 $i_E$는 환 준동형의 (6)의 (ii)에 의해 그런 환 동형사상이다. 둘째 문장은 같은 설정에서 (2)이다.
:::

## 예시와 반례

:::example[$\sqrt{2}$를 $-\sqrt{2}$로 보내는 동형사상을 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$로 넓히기]
$\mathbb{Q} \subseteq \mathbb{R}$([[rational-numbers-field|유리수체]]의 (1))이고 $K = \mathbb{Q}(\sqrt{2})$라 합시다. [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $\sqrt{2}$의 최소다항식은 $X^2 - 2$이고 $-\sqrt{2}$도 그 근이므로, [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (5)에 의해 유리수를 고정하고 $\sqrt{2}$를 $-\sqrt{2}$로 보내는 환 동형사상 $\sigma : K \to \mathbb{Q}(-\sqrt{2})$가 있습니다. $-\sqrt{2} \in K$이고 $\sqrt{2} = -(-\sqrt{2}) \in \mathbb{Q}(-\sqrt{2})$이므로 [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $\mathbb{Q}(-\sqrt{2}) = K$이고, $\sigma(x + y\sqrt{2}) = x - y\sqrt{2}$입니다.

$f = X^2 - 5 \in K[X]$의 계수는 유리수이므로 $f^{\sigma} = f$입니다. $\mathbb{R}[X]$에서 $f = (X - \sqrt{5})(X - (-\sqrt{5}))$이므로 [[splitting-field|분해체]]의 (9)에 의해 $E = K(\sqrt{5}, -\sqrt{5})$는 $K$ 위에서 $f$의 분해체이고, $-\sqrt{5} \in K(\sqrt{5})$이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $E = K(\sqrt{5}) = \mathbb{Q}(\sqrt{2}, \sqrt{5})$입니다. 체의 확대의 예의 (2)에 의해 $\sqrt{5}$의 $K$ 위의 최소다항식은 $X^2 - 5$이므로 $f$는 $K$ 위에서 모닉 기약이고 $[E : K] = 2$입니다. $f$를 나누는 $K$ 위의 모닉 기약 다항식은 [[irreducible-polynomial|기약 다항식]]의 (3)의 (iv)에 의해 $f$ 자신뿐이고, $E$ 안의 근 $\sqrt{5}$, $-\sqrt{5}$는 $0 < \sqrt{5}$이므로 서로 다릅니다. 곧 $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다릅니다.

(1)과 (2)를 $E' = E$, $K' = K$에 쓰면, $K$ 위에서 $\sigma$와 같은 환 동형사상 $E \to E$는 정확히 $[E : K] = 2$개입니다. (3)에 의해 그것들은 $\sqrt{5}$를 $f$의 근으로 보내므로, 하나는 $\sqrt{5}$를 $\sqrt{5}$로, 다른 하나는 $-\sqrt{5}$로 보냅니다.
:::

:::counterexample[공역이 분해체가 아닌 $\mathbb{R}$일 때 전사가 아닌 연장의 예]
(3)은 공역 $E'$이 $f^{\sigma}$의 분해체라는 것을 씁니다. $K = K' = \mathbb{Q}$, $\sigma = i_{\mathbb{Q}}$, $f = X^2 - 3$, $E = \mathbb{Q}(\sqrt{3})$이라 하면, 분해체의 (9)에 의해 $E = \mathbb{Q}(\sqrt{3}, -\sqrt{3})$은 $\mathbb{Q}$ 위에서 $f$의 분해체입니다. 그러나 공역을 $\mathbb{R}$로 둔 포함 함수 $E \to \mathbb{R}$은 유리수를 고정하는 환 준동형이면서 전사가 아닙니다. 체의 확대의 예의 (4)의 $c^3 = 2$인 실수 $c$는 $\mathbb{Q}$ 위의 차수가 $3$이어서, [[tower-law|차수의 곱셈 공식]]의 (5)에 의해 $[E : \mathbb{Q}] = 2$인 $E$에 속할 수 없기 때문입니다. $\mathbb{R}$은 $\mathbb{Q}$ 위에서 $f$의 분해체가 아니므로 (3)과 어긋나지 않습니다.
:::

## 확인 질문

:::check[$K$ 위의 같은 다항식 $f$의 두 분해체 $E$, $E'$에서 $[E : K]$와 $[E' : K]$는 다를 수 있는가?]
다를 수 없습니다. (4)의 (ii)에 의해 $K$의 원소를 고정하는 환 동형사상 $E \to E'$이 있고 $[E : K] = [E' : K]$입니다.
:::

:::check[$K$가 체 $E$의 부분체이고 $E$가 $K$ 위에서 $f$의 분해체이며 $[E : K] = 3$이고 $f$의 모닉 기약 인수마다 근이 서로 다르다고 하자. $K$의 원소를 고정하는 환 준동형 $E \to E$는 몇 개인가?]
$3$개입니다. (5)에 의해 그런 환 준동형은 모두 동형사상이고 정확히 $[E : K] = 3$개입니다.
:::
