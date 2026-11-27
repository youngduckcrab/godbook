---
title: 단순 확대로의 동형 연장
title_en: Extending Isomorphisms to Simple Extensions
aliases: [동형사상의 연장, 켤레 원소와 동형, 근을 근으로 보낸다, extension of isomorphisms, extending a field isomorphism, conjugate elements]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "σ : K → K′ 이 체의 동형사상이고 α 가 K 위에서 대수적이며 m 이 그 최소다항식이면, σ 를 K(α) 로 연장한 환 준동형은 α 를 m^σ 의 근으로 보내고 그 값으로 하나로 정해지며, 거꾸로 m^σ 의 근 β 마다 α 를 β 로 보내는 연장이 정확히 하나 있고 그것은 K(α) 에서 K′(β) 로의 동형사상이다. 따라서 연장의 개수는 m^σ 의 근의 개수이다. 연장은 f 의 근을 f^σ 의 근으로 보낸다."
requires: [function, function-composition, inverse-function, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, finite-set, number-of-elements-is-unique, prime-number, real-number-arithmetic, square-root-exists, integers-modulo-n, ring, ring-basic-properties, ring-examples, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, ideal, quotient-ring, first-isomorphism-theorem-for-rings, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, divisibility-in-integral-domains, subfield, irreducible-polynomial, rational-numbers-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, field-extension-examples]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, Lemma 21.32 와 그 증명, Figure 21.33 (p.269); 23.1절 Field Automorphisms, Proposition 23.5 (p.294), 켤레 원소의 정의와 예 (p.294), Proposition 23.6 과 Theorem 23.7 의 증명 (p.295); 21.5절 Exercises, 연습문제 12, 13 (p.276), 21 (p.277); 23.1절 Corollary 23.9 (p.295); 22.4절 Exercises, 연습문제 8, 21 (p.289–290)"
    checked: original
    note: "(3)은 출처 Lemma 21.32(p.269)이다. 출처는 체의 동형사상 ϕ : E → F 와 E 위의 대수적 원소 α 의 최소다항식 p(x), 그것을 ϕ 로 옮긴 다항식의 근 β 에 대하여 ϕ 가 ϕ(α) = β 인 동형사상 E(α) → F(β) 로 하나뿐이게 연장된다고 진술하고, 존재는 계수 사상이 ⟨p(x)⟩ 를 ⟨q(x)⟩ 로 보내 만든 동형사상 E[x]/⟨p(x)⟩ → F[x]/⟨q(x)⟩ 를 대입으로 정한 두 동형사상 사이에 끼운 합성(Figure 21.33)으로 보인다. 이 항목의 (3)의 증명도 같은 합성이고, 몫환 사이의 동형은 K[X] → K′[X]/m^σK′[X] 의 핵이 mK[X] 라는 것과 환의 제1 동형 정리로 얻는다. 출처는 유일성을 'We leave the proof of uniqueness as a exercise' 라고 적는다. 이 항목은 유일성을 (2)의 (iii)에서 K(α) 의 원소가 모두 g(α) 꼴이라는 것으로 보인다. (1)은 출처 Proposition 23.5(p.294, G(E/F) 의 자기동형은 E 안의 f(x) 의 근을 근으로 보낸다)를 σ 의 연장으로 넓힌 것이고 증명은 같은 계산이다. 출처는 그 명제에서 근의 치환이 정해진다고까지 진술하지만 이 항목은 근을 근으로 보낸다는 것만 진술한다. (5)는 최소다항식이 같은 원소를 'conjugate over F' 라 부르는 출처 p.294 의 정의 아래의 Proposition 23.6(p.295)이고(출처는 그 앞 문장에서 'The proof follows directly from Lemma 21.32' 라고 적는다), 이 항목은 켤레라는 이름을 쓰지 않는다. (4)의 '연장은 α 의 상으로 정해지고 그 개수는 근의 개수' 는 출처 Theorem 23.7 의 증명(p.295, 'there are exactly d isomorphisms ϕ : F(α) → F(β_i) that fix F, one for each root')에서 쓰는 사실을 진술로 올린 것이다. 출처 21.5절 연습문제 21(p.277)은 (1)과 같은 사실을 최소다항식에 대해 묻는다. 반례 '$\\mathbb{Q}(\\sqrt{3})$에서 $\\mathbb{Q}$로 가는 연장이 없는 예' 와 확인 질문 '$\\mathbb{Q}(\\sqrt{3})$에서 $\\mathbb{R}$로 가는 환 준동형으로 유리수를 모두 고정하는 것은 몇 개이고, 각각 $1 + \\sqrt{3}$을 어디로 보내는가?' 는 출처 p.294 의 예(ℚ(√2) 에서 √2 와 −√2 는 켤레)와 같은 발상이다. 출처 21.5절 연습문제 12, 13(p.276)도 원소 하나를 붙인 두 체의 동형을 묻는다. 예시 '법 $3$의 정수 위의 두 크로네커 체 사이의 동형사상' 은 서로 다른 기약 다항식으로 만든 두 유한체가 동형인지 묻는 출처 22.4절 연습문제 8(p.289, Z_2[x]/⟨x³ + x + 1⟩ 과 Z_2[x]/⟨x³ + x² + 1⟩)과 같은 발상이다. 확인 질문 '$\\mathbb{Z}_7$ 위의 $X^2 + [1]$로 만든 크로네커 체 $L$에서 $L$로 가는 환 준동형으로 $\\iota(\\mathbb{Z}_7)$의 원소를 모두 고정하는 것은 몇 개인가?' 의 답 2 는 출처 Corollary 23.9(p.295, [E : F] = k 인 유한체의 G(E/F) 는 위수 k 인 순환군)를 k = 2 에 쓴 것과 같고, 항등함수가 아닌 것은 출처 22.4절 연습문제 21(p.290)의 프로베니우스 사상 α ↦ α^7 과 같은 함수이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(반례 다항식의 인수분해, 상수 다항식 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체와 확대체는 [[subfield|부분체]]와 [[extension-field|확대체]]의 뜻이다. 환 준동형과 환 동형사상은 [[ring-homomorphism|환 준동형]]의 것이다. 다항식환, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값, 근, 계수를 옮긴 다항식 $f^{\varphi}$와 계수 사상은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이고, 대수적, 최소다항식은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이며, $K(\alpha)$와 $K(\alpha)$의 차수는 [[simple-algebraic-extension|단순 대수적 확대]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**설정.** $E$와 $E'$이 체이고, $K$는 $E$의 부분체, $K'$은 $E'$의 부분체이며, $\sigma : K \to K'$은 환 동형사상이라 하자. 기약 다항식의 (7)에 의해 $\sigma(1) = 1$이고, $f \in K[X]$에 $f^{\sigma} \in K'[X]$를 대응시키는 $\sigma$의 계수 사상은 환 동형사상 $K[X] \to K'[X]$이다. 부분체의 (3)의 (iv)에 의해 $K[X] \subseteq E[X]$, $K'[X] \subseteq E'[X]$이므로 $f$의 $E$ 안의 근과 $f^{\sigma}$의 $E'$ 안의 근을 말한다. 정의역이 $K$를 포함하는 함수 $\tau$가 모든 $c \in K$에서 $\tau(c) = \sigma(c)$일 때 "$\tau$는 $K$ 위에서 $\sigma$와 같다"고 하고, $\tau$를 $\sigma$의 **연장**(extension)이라고도 한다.

1. (근을 근으로 보낸다) $L$이 체이고 $K$가 $L$의 부분체이며 $\tau : L \to E'$이 $K$ 위에서 $\sigma$와 같은 환 준동형이라 하자. 그러면 $\tau(1) = 1$이고 $\tau$는 단사이다. $f \in K[X]$를 $L[X]$의 원소로 보고 계수를 $\tau$로 옮긴 $f^{\tau}$는 $E'[X]$에서 $f^{\sigma}$와 같고, 모든 $r \in L$에서
   $$
   \tau(f(r)) = f^{\sigma}(\tau(r))
   $$
   이다. 따라서 $r \in L$이 $f$의 근이면 $\tau(r)$은 $f^{\sigma}$의 근이다.
2. (원소 하나의 상으로 정해진다) $\alpha \in E$가 $K$ 위에서 대수적이고 $m$이 그 최소다항식이며 $d = \deg m$이라 하자.
   - (i) $m^{\sigma}$는 $K'$ 위의 모닉 기약 다항식이고 $\deg m^{\sigma} = d$이다.
   - (ii) $\rho : K(\alpha) \to E'$이 $K$ 위에서 $\sigma$와 같은 환 준동형이면, $\rho(\alpha)$는 $m^{\sigma}$의 근이고, $\rho(\alpha)$는 $K'$ 위에서 대수적이며 그 최소다항식은 $m^{\sigma}$이다. 모든 $g \in K[X]$에서 $\rho(g(\alpha)) = g^{\sigma}(\rho(\alpha))$이고, $\rho(K(\alpha)) = K'(\rho(\alpha))$이며, $\rho$를 함수 $\rho : K(\alpha) \to K'(\rho(\alpha))$로 선언한 것은 환 동형사상이다.
   - (iii) $K$ 위에서 $\sigma$와 같은 두 환 준동형 $\rho, \rho' : K(\alpha) \to E'$이 $\rho(\alpha) = \rho'(\alpha)$를 만족하면 $\rho = \rho'$이다.
3. (연장의 존재) $\alpha$, $m$이 (2)의 것이고 $\beta \in E'$이 $m^{\sigma}$의 근이라 하자. 그러면 $K$ 위에서 $\sigma$와 같고 $\rho(\alpha) = \beta$인 환 준동형 $\rho : K(\alpha) \to E'$이 정확히 하나 있다. 이 $\rho$는 모든 $g \in K[X]$에서 $\rho(g(\alpha)) = g^{\sigma}(\beta)$를 만족하고, $\rho : K(\alpha) \to K'(\beta)$는 환 동형사상이다.
4. (연장과 근의 전단사) $\alpha$, $m$, $d$가 (2)의 것이라 하자. $K$ 위에서 $\sigma$와 같은 환 준동형 $K(\alpha) \to E'$ 전체의 집합을 $\mathcal{R}$, $E'$ 안의 $m^{\sigma}$의 근 전체의 집합을 $R'$이라 하자. 각 $\rho \in \mathcal{R}$에 $\rho(\alpha)$를 대응시키는 함수 $\mathcal{R} \to R'$은 전단사이다. 따라서 $\mathcal{R}$은 유한집합이고 $|\mathcal{R}| = |R'| \le d$이다. 특히 $R'$이 원소를 $d$개 가지면 $|\mathcal{R}| = d = [K(\alpha) : K]$이다.
5. ($\sigma$가 항등함수일 때) $K$가 체 $E$의 부분체이고 체 $E'$의 부분체이기도 하며, $\alpha \in E$가 $K$ 위에서 대수적이고 $m$이 그 최소다항식이라 하자. $\beta \in E'$이 $m$의 근이면, $K$의 모든 원소를 고정하고 $\alpha$를 $\beta$로 보내는 환 준동형 $\rho : K(\alpha) \to E'$이 정확히 하나 있고, $\rho : K(\alpha) \to K(\beta)$는 환 동형사상이다. 특히 $\alpha, \beta \in E$의 $K$ 위의 최소다항식이 같으면, $K$의 모든 원소를 고정하고 $\alpha$를 $\beta$로 보내는 환 동형사상 $K(\alpha) \to K(\beta)$가 정확히 하나 있다.
:::

:::english
Fields are as in "Units and Fields", and subfields and extension fields are as in the corresponding entries. Ring homomorphisms and ring isomorphisms are as in "Ring Homomorphism". Polynomial rings, constant polynomials with the reading convention, the indeterminate $X$ and divisibility are as in "Polynomial Ring"; degree and monic are as in "Degree of a Polynomial"; values, roots, the polynomial $f^{\varphi}$ with transported coefficients and coefficient maps are as in "Evaluation Homomorphism". Irreducible is meant as in "Irreducible Polynomial"; algebraic and minimal polynomial are as in "Algebraic Elements and Minimal Polynomials"; $K(\alpha)$ and its degree are as in "Simple Algebraic Extensions". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Setting.** Let $E$ and $E'$ be fields, let $K$ be a subfield of $E$ and $K'$ a subfield of $E'$, and let $\sigma : K \to K'$ be a ring isomorphism. By (7) of "Irreducible Polynomial", $\sigma(1) = 1$ and the coefficient map of $\sigma$, sending $f \in K[X]$ to $f^{\sigma} \in K'[X]$, is a ring isomorphism $K[X] \to K'[X]$. By (3)(iv) of the subfield entry, $K[X] \subseteq E[X]$ and $K'[X] \subseteq E'[X]$, so we speak of the roots of $f$ in $E$ and of the roots of $f^{\sigma}$ in $E'$. If $\tau$ is a function whose domain contains $K$ and $\tau(c) = \sigma(c)$ for all $c \in K$, we say that $\tau$ agrees with $\sigma$ on $K$, and we also call $\tau$ an **extension** of $\sigma$.

1. (Roots go to roots) Let $L$ be a field with $K$ a subfield of $L$, and let $\tau : L \to E'$ be a ring homomorphism agreeing with $\sigma$ on $K$. Then $\tau(1) = 1$ and $\tau$ is injective. For $f \in K[X]$, the polynomial $f^{\tau}$ obtained by regarding $f$ as an element of $L[X]$ and transporting its coefficients by $\tau$ equals $f^{\sigma}$ in $E'[X]$, and for every $r \in L$
   $$
   \tau(f(r)) = f^{\sigma}(\tau(r)).
   $$
   Hence if $r \in L$ is a root of $f$, then $\tau(r)$ is a root of $f^{\sigma}$.
2. (Determined by the image of one element) Let $\alpha \in E$ be algebraic over $K$ with minimal polynomial $m$, and let $d = \deg m$.
   - (i) $m^{\sigma}$ is a monic irreducible polynomial over $K'$ and $\deg m^{\sigma} = d$.
   - (ii) If $\rho : K(\alpha) \to E'$ is a ring homomorphism agreeing with $\sigma$ on $K$, then $\rho(\alpha)$ is a root of $m^{\sigma}$, and $\rho(\alpha)$ is algebraic over $K'$ with minimal polynomial $m^{\sigma}$. For every $g \in K[X]$, $\rho(g(\alpha)) = g^{\sigma}(\rho(\alpha))$; moreover $\rho(K(\alpha)) = K'(\rho(\alpha))$, and $\rho$ declared as a function $\rho : K(\alpha) \to K'(\rho(\alpha))$ is a ring isomorphism.
   - (iii) If two ring homomorphisms $\rho, \rho' : K(\alpha) \to E'$ agree with $\sigma$ on $K$ and satisfy $\rho(\alpha) = \rho'(\alpha)$, then $\rho = \rho'$.
3. (Existence of the extension) Let $\alpha$ and $m$ be as in (2), and let $\beta \in E'$ be a root of $m^{\sigma}$. Then there is exactly one ring homomorphism $\rho : K(\alpha) \to E'$ that agrees with $\sigma$ on $K$ and satisfies $\rho(\alpha) = \beta$. This $\rho$ satisfies $\rho(g(\alpha)) = g^{\sigma}(\beta)$ for every $g \in K[X]$, and $\rho : K(\alpha) \to K'(\beta)$ is a ring isomorphism.
4. (Extensions correspond to roots) Let $\alpha$, $m$ and $d$ be as in (2). Let $\mathcal{R}$ be the set of all ring homomorphisms $K(\alpha) \to E'$ agreeing with $\sigma$ on $K$, and let $R'$ be the set of all roots of $m^{\sigma}$ in $E'$. The function $\mathcal{R} \to R'$ sending each $\rho \in \mathcal{R}$ to $\rho(\alpha)$ is a bijection. Hence $\mathcal{R}$ is a finite set and $|\mathcal{R}| = |R'| \le d$. In particular, if $R'$ has $d$ elements, then $|\mathcal{R}| = d = [K(\alpha) : K]$.
5. (When $\sigma$ is the identity) Let $K$ be a subfield of a field $E$ and also of a field $E'$, and let $\alpha \in E$ be algebraic over $K$ with minimal polynomial $m$. If $\beta \in E'$ is a root of $m$, then there is exactly one ring homomorphism $\rho : K(\alpha) \to E'$ fixing every element of $K$ and sending $\alpha$ to $\beta$, and $\rho : K(\alpha) \to K(\beta)$ is a ring isomorphism. In particular, if $\alpha, \beta \in E$ have the same minimal polynomial over $K$, then there is exactly one ring isomorphism $K(\alpha) \to K(\beta)$ fixing every element of $K$ and sending $\alpha$ to $\beta$.
:::

## 직관

$\sigma : K \to K'$을 $K(\alpha)$까지 넓히려면 $\alpha$를 어디로 보낼지만 정하면 됩니다. $K(\alpha)$의 원소는 모두 $K$ 위의 다항식에 $\alpha$를 넣은 값 $g(\alpha)$이고, $K$ 위에서 $\sigma$와 같은 환 준동형은 $g(\alpha)$를 $g^{\sigma}(\rho(\alpha))$로 보내기 때문입니다((2)). $\alpha$가 최소다항식 $m$의 근이므로 그 상은 $m^{\sigma}$의 근이어야 하고((1)), 거꾸로 $m^{\sigma}$의 근 $\beta$마다 $\alpha$를 $\beta$로 보내는 연장이 꼭 하나 있습니다((3)). 그래서 연장의 개수는 $E'$ 안의 $m^{\sigma}$의 근의 개수와 같습니다((4)).

(3)의 연장은 몫환을 거쳐 만듭니다. 계수 사상은 $m$의 배수를 정확히 $m^{\sigma}$의 배수로 보내므로 두 몫환 $K[X]/mK[X]$와 $K'[X]/m^{\sigma}K'[X]$가 동형이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (2)에 의해 두 몫환은 각각 $K(\alpha)$, $K'(\beta)$와 동형입니다. 세 동형사상을 이으면 $K(\alpha)$에서 $K'(\beta)$로 가는 동형사상이 나옵니다.

$\sigma$가 항등함수이면 (5)는 최소다항식이 같은 두 원소 $\alpha$, $\beta$를 붙인 체가 $K$의 원소를 고정하는 동형사상으로 이어진다는 것입니다. $E'$ 안에 $m^{\sigma}$의 근이 없으면 연장도 없습니다.

## 증명

:::idea
(1)은 대입과 계수 사상의 맞물림이고, (2)는 $K(\alpha)$의 원소가 모두 $g(\alpha)$ 꼴이라는 것이다. (3)은 계수 사상이 만드는 몫환의 동형을 단순 대수적 확대와 몫환의 두 동형 사이에 끼운 합성이고, (4)는 (2)와 (3)을 합친 것이다.
:::

:::hint
(1)에서 $\tau$는 체 $L$ 위의 환 준동형이므로 [[evaluation-homomorphism|대입 준동형]]의 (5)를 $\tau$에 씁니다. $f$를 $L[X]$의 원소로 보아도 계수는 $K$에 있습니다.
:::

:::hint
(3)에서 $\sigma$의 계수 사상과 표준 준동형 $K'[X] \to K'[X]/m^{\sigma}K'[X]$의 합성은 전사이고, 그 핵이 $mK[X]$임을 보이면 [[first-isomorphism-theorem-for-rings|환의 제1 동형 정리]]를 쓸 수 있습니다.
:::

:::proof
**쓰는 사실.** "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n), "준동형의 (n)"은 [[ring-homomorphism|환 준동형]]의 (n)이다.

**1.** $\tau(1) = \sigma(1) = 1$이고, 확대체의 (3)의 (ii)에 의해 $\tau$는 단사이다. $f \in K[X]$를 부분체의 (3)의 (iv)로 $L[X]$의 원소로 보자. $0$ 이상인 모든 $n$에서 $\operatorname{coef}_n(f) \in K$이므로 $\operatorname{coef}_n(f^{\tau}) = \tau(\operatorname{coef}_n(f)) = \sigma(\operatorname{coef}_n(f)) = \operatorname{coef}_n(f^{\sigma})$이고, 다항식환의 (7)의 (i)에 의해 $f^{\sigma}$를 $E'[X]$의 원소로 본 계수도 같으므로 $E'[X]$에서 $f^{\tau} = f^{\sigma}$이다. 대입의 (5)를 $\tau : L \to E'$과 $L[X]$의 원소 $f$에 쓰면 $\tau(f(r)) = f^{\tau}(\tau(r)) = f^{\sigma}(\tau(r))$이다. $f(r) = 0$이면 준동형의 (1)에 의해 $f^{\sigma}(\tau(r)) = \tau(0) = 0$이다.

**2.** (i) 최소의 (3)의 (i)에 의해 $m$은 $K$ 위의 모닉 기약 다항식이고 $d \ge 1$이다. 기약의 (7)의 (i)과 (iii)에 의해 $m^{\sigma}$는 모닉이고 $\deg m^{\sigma} = d$이며 $K'$ 위에서 기약이다.

(ii) 단순의 (1)에 의해 $K(\alpha)$는 $K \subseteq K(\alpha)$인 $E$의 부분체이고, 부분체의 (5)의 (i)에 의해 $K$는 $K(\alpha)$의 부분체이다. (1)을 $L = K(\alpha)$, $\tau = \rho$에 쓰면 모든 $g \in K[X]$에서 $\rho(g(\alpha)) = g^{\sigma}(\rho(\alpha))$이고, $m(\alpha) = 0$이므로 $\rho(\alpha)$는 $m^{\sigma}$의 근이다. (i)과 최소의 (5)에 의해 $\rho(\alpha)$는 $K'$ 위에서 대수적이고 그 최소다항식은 $m^{\sigma}$이다. 단순의 (1)에 의해 $K(\alpha) = \{g(\alpha) : g \in K[X]\}$이므로 $\rho(K(\alpha)) = \{g^{\sigma}(\rho(\alpha)) : g \in K[X]\}$이다. $\sigma$의 계수 사상 $K[X] \to K'[X]$는 전단사이므로 이 집합은 $\{h(\rho(\alpha)) : h \in K'[X]\}$이고, 단순의 (1)을 $K'$와 $\rho(\alpha)$에 쓰면 그것은 $K'(\rho(\alpha))$이다. (1)에 의해 $\rho$는 단사이고, 준동형의 (3)의 (iii)에 의해 $\rho : K(\alpha) \to K'(\rho(\alpha))$는 환 준동형이며 상이 공역 전체이므로 전단사이다. 따라서 환 동형사상이다.

(iii) (ii)에 의해 모든 $g \in K[X]$에서 $\rho(g(\alpha)) = g^{\sigma}(\rho(\alpha)) = g^{\sigma}(\rho'(\alpha)) = \rho'(g(\alpha))$이다. 단순의 (1)에 의해 $K(\alpha)$의 모든 원소는 어떤 $g(\alpha)$이므로 두 함수는 모든 원소에서 값이 같고, $\rho = \rho'$이다.

**3.** $I = mK[X]$, $I' = m^{\sigma}K'[X]$라 하자. 최소의 (3)에 의해 $\alpha$의 최소다항식이 $m$이므로 $I$는 단순의 (2)의 아이디얼이다. (2)의 (i)과 최소의 (5)에 의해 $\beta$는 $K'$ 위에서 대수적이고 그 최소다항식은 $m^{\sigma}$이다. 단순의 (2)를 $(K, \alpha)$와 $(K', \beta)$에 쓰면, 모든 $g \in K[X]$에서 $\eta(g + I) = g(\alpha)$인 환 동형사상 $\eta : K[X]/I \to K(\alpha)$와, 모든 $h \in K'[X]$에서 $\eta'(h + I') = h(\beta)$인 환 동형사상 $\eta' : K'[X]/I' \to K'(\beta)$가 있다.

$\theta : K[X] \to K'[X]$를 $\sigma$의 계수 사상, $\pi' : K'[X] \to K'[X]/I'$를 [[quotient-ring|몫환]]의 (5)의 표준 준동형이라 하고, $\varphi = \pi' \circ \theta$라 하자. 준동형의 (6)의 (i)에 의해 $\varphi$는 환 준동형이고, $\theta$와 $\pi'$가 전사이므로 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 2번에 의해 $\varphi : K[X] \to K'[X]/I'$은 전사이다. $g \in K[X]$에 대하여, 몫환의 (3)에 의해 $\varphi(g) = 0$인 것은 정확히 $g^{\sigma} \in I'$일 때이고, [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (1)에 의해 정확히 $K'[X]$에서 $m^{\sigma} \mid g^{\sigma}$일 때이며, 기약의 (7)의 (ii)에 의해 정확히 $K[X]$에서 $m \mid g$일 때, 곧 $g \in I$일 때이다. 따라서 $\operatorname{Ker}\varphi = I$이다. 환의 제1 동형 정리의 (3)에 의해 모든 $g$에서 $\psi(g + I) = \varphi(g) = g^{\sigma} + I'$인 환 동형사상 $\psi : K[X]/I \to K'[X]/I'$이 있다.

준동형의 (6)의 (iii)에 의해 $\eta^{-1} : K(\alpha) \to K[X]/I$는 환 동형사상이고, 준동형의 (6)의 (i)에 의해 $\rho_0 = \eta' \circ \psi \circ \eta^{-1} : K(\alpha) \to K'(\beta)$는 환 동형사상이다. $g \in K[X]$이면
$$
\begin{aligned}
\rho_0(g(\alpha)) &= \eta'(\psi(g + I)) \\
&= \eta'(g^{\sigma} + I') = g^{\sigma}(\beta)
\end{aligned}
$$
이다. $g$가 상수 다항식 $c \in K$이면 대입의 (1)과 (3)에 의해 $g(\alpha) = c$이고 $g^{\sigma}$는 상수 다항식 $\sigma(c)$이므로 $\rho_0(c) = \sigma(c)$이다. $g = X$이면 $X^{\sigma} = X$이므로 $\rho_0(\alpha) = \beta$이다. 단순의 (1)에 의해 $K'(\beta)$는 $E'$의 부분체이므로 준동형의 (7)의 (ii)에 의해 포함 함수 $K'(\beta) \to E'$은 환 준동형이고, 이것과 $\rho_0$의 합성 $\rho : K(\alpha) \to E'$은 준동형의 (6)의 (i)에 의해 환 준동형이다. $\rho$는 $\rho_0$과 같은 값을 가지므로 $K$ 위에서 $\sigma$와 같고 $\rho(\alpha) = \beta$이며 $\rho(g(\alpha)) = g^{\sigma}(\beta)$이다. 그런 환 준동형이 둘 이상이 아니라는 것은 (2)의 (iii)이고, $\rho : K(\alpha) \to K'(\beta)$가 환 동형사상이라는 것은 (2)의 (ii)이다.

**4.** (2)의 (ii)에 의해 각 $\rho \in \mathcal{R}$에서 $\rho(\alpha) \in R'$이므로 함수 $\Phi : \mathcal{R} \to R'$, $\Phi(\rho) = \rho(\alpha)$가 정해진다. (2)의 (iii)에 의해 $\Phi$는 단사이고, (3)에 의해 전사이다. (2)의 (i)에 의해 $m^{\sigma} \ne 0$이고 $\deg m^{\sigma} = d$이며 $E'$은 정역이므로([[field|가역원과 체]]의 (3)), [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 $R'$은 유한집합이고 $|R'| \le d$이다. $R'$이 원소를 $r$개 가지면 [[finite-set|유한집합]]의 (F3)에 의해 $\Phi^{-1} : R' \to \mathcal{R}$은 전단사이고, (F4)에 의해 $\mathcal{R}$도 원소를 $r$개 갖는다. 따라서 $|\mathcal{R}| = |R'| \le d$이다. $|R'| = d$이면 단순의 (3)의 (iii)에 의해 $|\mathcal{R}| = d = [K(\alpha) : K]$이다.

**5.** 준동형의 (6)의 (ii)에 의해 항등함수 $i_K : K \to K$는 환 동형사상이고, 대입의 (4)에 의해 $m^{i_K} = m$이다. "$K$ 위에서 $i_K$와 같다"는 "$K$의 모든 원소를 고정한다"이므로 첫 문장은 (3)을 $K' = K$, $\sigma = i_K$에 쓴 것이다. $\alpha, \beta \in E$의 최소다항식이 같으면 최소의 (3)의 (i)에 의해 $\beta$는 $m$의 근이므로 첫 문장을 $E' = E$에 쓰면 된다. 이때 환 동형사상 $K(\alpha) \to K(\beta)$로서 $K$의 원소를 고정하고 $\alpha$를 $\beta$로 보내는 것은, 공역을 $E$로 바꾸면 첫 문장의 $\rho$이므로 하나뿐이다.
:::

## 예시와 반례

:::example[법 $3$의 정수 위의 두 크로네커 체 사이의 동형사상]
$\mathbb{Z}_3$ 위의 $h_1 = X^2 + [1]$과 $h_2 = X^2 + X + [2]$에 $[0], [1], [2]$를 넣은 값은 각각 $[1], [2], [2]$와 $[2], [1], [2]$이므로 둘 다 $\mathbb{Z}_3$ 안에 근이 없고, [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. [[kronecker-theorem|크로네커 정리]]의 설정으로 $L_1 = \mathbb{Z}_3[X]/h_1\mathbb{Z}_3[X]$, $\iota_1$, $\alpha = X + h_1\mathbb{Z}_3[X]$와 $L_2 = \mathbb{Z}_3[X]/h_2\mathbb{Z}_3[X]$, $\iota_2$, $\gamma = X + h_2\mathbb{Z}_3[X]$를 만듭니다. $K = \iota_1(\mathbb{Z}_3)$, $K' = \iota_2(\mathbb{Z}_3)$이고, [[extension-field|확대체]]의 (3)의 (iii)과 [[ring-homomorphism|환 준동형]]의 (6)에 의해 $\sigma(\iota_1(c)) = \iota_2(c)$로 정한 $\sigma : K \to K'$은 환 동형사상입니다.

[[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (9)에 의해 $\alpha$의 $K$ 위의 최소다항식은 $m = h_1^{\iota_1} = X^2 + \iota_1([1])$이고, [[evaluation-homomorphism|대입 준동형]]의 (4)에 의해 $m^{\sigma} = h_1^{\sigma \circ \iota_1} = h_1^{\iota_2} = X^2 + \iota_2([1])$입니다. $L_2$에서 $h_2^{\iota_2}(\gamma) = 0$이므로 $\gamma^2 = -\gamma - \iota_2([2]) = \iota_2([2])\gamma + \iota_2([1])$이고, $\beta = \iota_2([2]) + \gamma$에 대하여
$$
\begin{aligned}
\beta^2 &= \iota_2([4]) + \iota_2([4])\gamma + \gamma^2 \\
&= \iota_2([1]) + \iota_2([1])\gamma \\
&\qquad + \iota_2([2])\gamma + \iota_2([1]) \\
&= \iota_2([2])
\end{aligned}
$$
입니다. $\iota_2([2]) = -\iota_2([1])$이므로 $\beta$는 $m^{\sigma}$의 근이고, [[ring-basic-properties|환의 기본 성질]]의 (3)에 의해 $(-\beta)^2 = \beta^2$이므로 $-\beta = \iota_2([1]) + \iota_2([2])\gamma$도 근입니다. 크로네커 정리의 (2)의 (ii)에 의해 두 원소는 $\gamma$의 계수가 달라 서로 다르고, [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 근은 둘 이하이므로 $L_2$ 안의 $m^{\sigma}$의 근은 정확히 $\beta$, $-\beta$입니다.

[[simple-algebraic-extension|단순 대수적 확대]]의 (7)에 의해 $L_1 = K(\alpha)$이므로, (4)에 의해 $K$ 위에서 $\sigma$와 같은 환 준동형 $L_1 \to L_2$는 정확히 둘입니다. $\alpha$를 $\beta$로 보내는 것은 (3)에 의해 $\iota_1(a) + \iota_1(b)\alpha$를 $\iota_2(a) + \iota_2(b)\beta = \iota_2(a + [2]b) + \iota_2(b)\gamma$로 보내고, (2)에 의해 $L_1$에서 $K'(\beta)$로의 환 동형사상입니다. $\gamma = \beta - \iota_2([2]) \in K'(\beta)$이므로 크로네커 정리의 (2)의 (iv)에 의해 $K'(\beta) = L_2$입니다. 곧 서로 다른 기약 다항식으로 만든 두 체 $L_1$, $L_2$는 환으로서 동형이고, $\iota_1(c)$를 $\iota_2(c)$로 보내는 동형사상은 둘입니다.
:::

:::counterexample[$\mathbb{Q}(\sqrt{3})$에서 $\mathbb{Q}$로 가는 연장이 없는 예]
$K = K' = \mathbb{Q}$, $\sigma = i_{\mathbb{Q}}$, $E = \mathbb{R}$, $E' = \mathbb{Q}$로 둡니다([[rational-numbers-field|유리수체]]의 (1)). [[field-extension-examples|체의 확대의 예]]의 (1)($3$은 소수)에 의해 $\sqrt{3}$의 $\mathbb{Q}$ 위의 최소다항식은 $m = X^2 - 3$이고, $m^{i_{\mathbb{Q}}} = m$은 차수가 $2$인 기약 다항식이므로 기약 다항식의 (4)에 의해 $\mathbb{Q}$ 안에 근이 없습니다. (4)에서 $R' = \emptyset$이므로 $\mathcal{R} = \emptyset$, 곧 유리수를 모두 고정하는 환 준동형 $\mathbb{Q}(\sqrt{3}) \to \mathbb{Q}$는 없습니다. $\sigma$를 연장하려면 $E'$ 안에 $m^{\sigma}$의 근이 있어야 합니다.
:::

## 확인 질문

:::check[$\mathbb{Q}(\sqrt{3})$에서 $\mathbb{R}$로 가는 환 준동형으로 유리수를 모두 고정하는 것은 몇 개이고, 각각 $1 + \sqrt{3}$을 어디로 보내는가?]
둘이고, $1 + \sqrt{3}$을 $1 + \sqrt{3}$과 $1 - \sqrt{3}$으로 보냅니다. $\sqrt{3}$의 최소다항식은 $X^2 - 3$이고([[field-extension-examples|체의 확대의 예]]의 (1)), $\mathbb{R}$ 안의 근은 $\sqrt{3}$과 $-\sqrt{3}$입니다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $0 < \sqrt{3}$이므로 두 근은 서로 다르고, 인수 정리의 (4)에 의해 근은 둘 이하이므로 근 전체는 이 둘입니다. (5)와 (4)에 의해 그런 환 준동형 $\rho$는 둘이고, $\rho(1 + \sqrt{3}) = 1 + \rho(\sqrt{3})$은 $1 + \sqrt{3}$이거나 $1 - \sqrt{3}$입니다.
:::

:::check[$\mathbb{Z}_7$ 위의 $X^2 + [1]$로 만든 크로네커 체 $L$에서 $L$로 가는 환 준동형으로 $\iota(\mathbb{Z}_7)$의 원소를 모두 고정하는 것은 몇 개인가?]
둘입니다. $X^2 + [1]$에 $[0], \dots, [6]$을 넣은 값은 $[1], [2], [5], [3], [3], [5], [2]$이므로 $\mathbb{Z}_7$ 안에 근이 없고 기약입니다(기약 다항식의 (5)). 크로네커 정리의 $\alpha$에 대하여 최소다항식은 $X^2 + \iota([1])$이고(대수적 원소와 최소다항식의 (9)), $L$ 안의 근은 $\alpha$와 $-\alpha$입니다. 크로네커 정리의 (2)의 (ii)에 의해 $\alpha$와 $-\alpha = \iota([6])\alpha$는 서로 다르고 근은 둘 이하입니다. 단순 대수적 확대의 (7)에 의해 $L = \iota(\mathbb{Z}_7)(\alpha)$이므로 (5)와 (4)에 의해 답은 $2$이고, 항등함수가 아닌 것은 $\iota(a) + \iota(b)\alpha$를 $\iota(a) - \iota(b)\alpha$로 보냅니다.
:::
