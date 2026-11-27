---
title: 유한체의 존재와 유일성
title_en: Existence and Uniqueness of Finite Fields
aliases: [유한체의 존재, 유한체의 유일성, 갈루아 체, existence of finite fields, uniqueness of finite fields, Galois field]
kind: theorem
field: field-theory
msc: ["12E20"]
level: undergrad
summary: "소수 p 와 자연수 n 에 대하여 q = pⁿ 이면 X^q − X 는 표수 p 인 체에서 중근을 갖지 않는다. Z_p 위의 X^q − X 의 분해체는 원소가 q 개인 체이고, 원소가 q 개인 체는 모두 소체 위에서 X^q − X 의 분해체이며 서로 환으로서 동형이다. 따라서 원소가 N 개인 체가 있는 것은 정확히 N 이 소수의 거듭제곱일 때이고, Z_p 위에는 모든 차수의 모닉 기약 다항식이 있다. 유한체 E 의 부분체 F 에 대하여 E 는 F 위에서 X^|E| − X 의 분해체이고, 그 모닉 기약 인수마다 E 에서 근이 서로 다르다."
requires: [function, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, divisibility, prime-power-divisors, group, cyclic-subgroup, integers-modulo-n, ring, ring-homomorphism, field, finite-integral-domain-is-a-field, finite-products-in-a-commutative-ring, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, formal-derivative, multiple-roots-and-derivative, irreducible-polynomial, subfield, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, splitting-field, separable-polynomial, splitting-field-examples, kronecker-theorem, isomorphism-extension-to-simple-extension, extension-of-isomorphism-to-splitting-fields, frobenius-map, order-of-a-finite-field, finite-multiplicative-subgroup-is-cyclic]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Theorem 22.6 과 그 증명, GF(p^n) 의 정의 (p.280), Lemma 22.5 와 그 증명 (p.279), Corollary 22.12 (p.281); 22.4절 Exercises, 연습문제 4, 5 (p.289), 8 (p.289), 16, 20 (p.290); 21.2절 Splitting Fields, Corollary 21.36 (p.270); 21.1절 Extension Fields, Example 21.2 (p.261)"
    checked: original
    note: "(2)–(4)는 출처 Theorem 22.6(p.280) 'For every prime p and every positive integer n, there exists a finite field F with p^n elements. Furthermore, any field of order p^n is isomorphic to the splitting field of x^{p^n} − x over Z_p' 이다. 출처의 증명은 존재에서 x^{p^n} − x 의 분해체 F 를 잡고 Lemma 22.5 와 f′(x) = −1 로 근이 p^n 개임을 보인 뒤 근 전체가 부분체이므로 분해체 전체와 같다고 하고, 유일성에서 원소 p^n 개인 체 E 의 모든 원소가 근이므로 'E must be a splitting field of f(x)' 라 하고 Corollary 21.36 을 쓴다. 이 항목은 Z_p 와 소체를 같은 것으로 보지 않고, 존재는 단사 ι : Z_p → E 를 거친 분해체로, 유일성은 두 소체 사이의 환 동형사상 σ 와 그 연장으로 진술한다. 이 항목은 출처 Lemma 22.5(p.279, f 가 분리 다항식인 것은 f 와 f′ 이 서로소일 때)를 쓰지 않고, 도함수가 0 이 아닌 상수이면 중근이 없다는 것만 쓴다. 출처는 원소 p^n 개인 체를 GF(p^n) 이라 부르고(p.280), 이 항목은 그 기호를 쓰지 않고 '원소가 q 개인 두 체는 환으로서 동형이다' 로 쓴다. (6)은 출처 연습문제 22.4.20(p.290, Z_p[x] 에 모든 차수의 기약 다항식이 있다)이고, 증명은 출처 Corollary 22.12 의 증명(p.281)처럼 곱셈군의 생성원을 쓴다. 출처 연습문제 22.4.8(p.289, Z_2[x]/⟨x³ + x + 1⟩ ≅ Z_2[x]/⟨x³ + x² + 1⟩)과 22.4.16(p.290)은 (4)를 쓰는 물음이고, 22.4.4, 22.4.5(p.289)는 원소 8 개, 27 개인 체를 만드는 물음이다. 예시 '원소가 $4$개인 체에서 $X^4 - X$의 일차식 분해' 의 체는 출처 Example 21.2(p.261)의 원소 4개인 체와 같은 구성이고, 크로네커 체 안에서 다항식이 일차식으로 분해됨을 보이는 것은 출처 연습문제 22.4.4(p.289)와 같은 발상이다. 반례 '$\\mathbb{Z}_2$에서 중근을 갖는 $X^3 - X$' 는 출처 Lemma 22.5 의 증명이 다루는 (x − α)^k 꼴 인수와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 위수·생성원을 프로그램으로 재계산, (7) 경계값). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$p$가 [[prime-number|소수]]이고 $n$이 자연수이며 $q = p^n$이라 하자. 지수 $p^n$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다. [[field|체]], 가역원의 군 $F^{\times}$는 [[field|가역원과 체]]의 것이고, 표수는 [[characteristic-of-a-ring|환의 표수]], 부분체는 [[subfield|부분체]], 확대체와 차수 $[E : F]$는 [[extension-field|확대체]]의 것이다. 다항식환, 부정원 $X$, 상수 다항식과 읽는 약속은 [[polynomial-ring|다항식환]]의 것이고, 차수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값과 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]], 중근은 [[multiple-roots-and-derivative|중근과 도함수]], 기약은 [[irreducible-polynomial|기약 다항식]]의 것이다. "분해된다"와 분해체는 [[splitting-field|분해체]]의 것이고, "$K$ 위에서 $\sigma$와 같다"는 [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 것이다. 유한체, 소체 $\mathbb{P}_F$, $\eta$는 [[order-of-a-finite-field|유한체의 원소 개수]]의 것이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

$K$가 단위원을 갖는 가환환일 때 $X^q - X$는 $K[X]$의 원소 $X^q - X$를 뜻한다.

1. (중근이 없다) $K$가 체이고 $\operatorname{char} K = p$라 하자. 그러면 $X^q - X \in K[X]$는 영다항식이 아니고 차수가 $q$이며, $K$ 안에 중근을 갖지 않는다. $K$ 안의 $X^q - X$의 근 전체의 집합은 $\{a \in K : a^q = a\}$이고, 이것은 $K$의 부분체이며 원소가 $q$개 이하인 유한집합이다.
2. (존재) 체 $E$와 $\iota([1]) = 1$인 단사인 환 준동형 $\iota : \mathbb{Z}_p \to E$로서, $E$가 $E$의 부분체 $\iota(\mathbb{Z}_p)$ 위에서 $X^q - X$의 분해체인 것이 있다. 이런 $E$와 $\iota$에 대하여 $\operatorname{char} E = p$, $\iota(\mathbb{Z}_p) = \mathbb{P}_E$이고, $E$의 모든 원소 $a$가 $a^q = a$를 만족하며, $E$는 원소가 $q$개인 유한체이고 $[E : \mathbb{P}_E] = n$이다. 특히 원소가 $q$개인 체가 있다.
3. (원소가 $q$개인 체는 분해체) $F$가 원소가 $q$개인 체이면 $\operatorname{char} F = p$이고, $X^q - X$는 $\mathbb{P}_F[X]$의 원소로서 $F$에서 분해되며, $F$ 안의 $X^q - X$의 근 전체는 $F$이고, $F$는 $\mathbb{P}_F$ 위에서 $X^q - X$의 분해체이다.
4. (유일성) $F$와 $F'$이 원소가 $q$개인 체이고, $\eta : \mathbb{Z}_p \to F$, $\eta' : \mathbb{Z}_p \to F'$이 [[order-of-a-finite-field|유한체의 원소 개수]]의 (2)의 것이라 하자. 그러면 $\sigma = \eta' \circ \eta^{-1}$은 환 동형사상 $\mathbb{P}_F \to \mathbb{P}_{F'}$이고, $\mathbb{P}_F$ 위에서 $\sigma$와 같은 환 동형사상 $F \to F'$이 있다. 따라서 원소가 $q$개인 두 체는 환으로서 동형이다.
5. (원소의 개수가 될 수 있는 수) 자연수 $N$에 대하여, 원소가 $N$개인 체가 있는 것은 정확히 어떤 소수 $p'$과 자연수 $n'$에서 $N = p'^{n'}$일 때이다.
6. (모든 차수의 기약 다항식) $\mathbb{Z}_p$ 위의 모닉 기약 다항식으로서 차수가 $n$인 것이 있다.
7. (유한체의 부분체 위의 분해체) $E$가 유한체이고 $F$가 $E$의 부분체이며 $Q = |E|$라 하자. 그러면 $X^Q - X \in F[X]$는 $E$에서 분해되고, $E$ 안의 $X^Q - X$의 근 전체는 $E$이며, $E$는 $F$ 위에서 $X^Q - X$의 분해체이다. 또 $X^Q - X$의 $F$ 위의 모닉 기약 인수([[separable-polynomial|근이 서로 다른 다항식]]의 뜻)마다 $E$에서 근이 서로 다르다.
:::

:::english
Let $p$ be a prime, $n$ a natural number and $q = p^n$, where the exponent $p^n$ is the integer power of the entry on prime power divisors. Fields and the group of units $F^{\times}$ are those of the entry on units and fields; the characteristic is that of the entry on the characteristic of a ring, subfields that of the entry on subfields, and extension fields and the degree $[E : F]$ those of the entry on extension fields. Polynomial rings, the indeterminate $X$, constant polynomials and the reading convention are those of the entry on polynomial rings; degree and monic are those of the entry on the degree of a polynomial, values and roots and the polynomial $f^{\varphi}$ with transferred coefficients those of the entry on the evaluation homomorphism, multiple roots that of the entry on multiple roots and the derivative, and irreducible that of the entry on irreducible polynomials. "Splits" and splitting fields are those of the entry on splitting fields, and "agrees with $\sigma$ on $K$" is that of the entry on extending isomorphisms to simple extensions. Finite fields, the prime subfield $\mathbb{P}_F$ and $\eta$ are those of the entry on the number of elements of a finite field, and the number of elements $|A|$ is that of the entry on the number of elements.

When $K$ is a commutative ring with unity, $X^q - X$ denotes the element $X^q - X$ of $K[X]$.

1. (No multiple roots) Let $K$ be a field with $\operatorname{char} K = p$. Then $X^q - X \in K[X]$ is nonzero of degree $q$ and has no multiple root in $K$. The set of roots of $X^q - X$ in $K$ is $\{a \in K : a^q = a\}$; it is a subfield of $K$ and a finite set with at most $q$ elements.
2. (Existence) There are a field $E$ and an injective ring homomorphism $\iota : \mathbb{Z}_p \to E$ with $\iota([1]) = 1$ such that $E$ is a splitting field of $X^q - X$ over its subfield $\iota(\mathbb{Z}_p)$. For any such $E$ and $\iota$ we have $\operatorname{char} E = p$ and $\iota(\mathbb{Z}_p) = \mathbb{P}_E$, every element $a$ of $E$ satisfies $a^q = a$, $E$ is a finite field with $q$ elements, and $[E : \mathbb{P}_E] = n$. In particular, there is a field with $q$ elements.
3. (A field with $q$ elements is a splitting field) If $F$ is a field with $q$ elements, then $\operatorname{char} F = p$, $X^q - X$ as an element of $\mathbb{P}_F[X]$ splits in $F$, the set of roots of $X^q - X$ in $F$ is $F$, and $F$ is a splitting field of $X^q - X$ over $\mathbb{P}_F$.
4. (Uniqueness) Let $F$ and $F'$ be fields with $q$ elements, and let $\eta : \mathbb{Z}_p \to F$ and $\eta' : \mathbb{Z}_p \to F'$ be as in (2) of the entry on the number of elements of a finite field. Then $\sigma = \eta' \circ \eta^{-1}$ is a ring isomorphism $\mathbb{P}_F \to \mathbb{P}_{F'}$, and there is a ring isomorphism $F \to F'$ that agrees with $\sigma$ on $\mathbb{P}_F$. Hence any two fields with $q$ elements are isomorphic as rings.
5. (Possible numbers of elements) For a natural number $N$, there is a field with $N$ elements if and only if $N = p'^{n'}$ for some prime $p'$ and some natural number $n'$.
6. (Irreducible polynomials of every degree) There is a monic irreducible polynomial over $\mathbb{Z}_p$ of degree $n$.
7. (Splitting fields over a subfield of a finite field) Let $E$ be a finite field, $F$ a subfield of $E$, and $Q = |E|$. Then $X^Q - X \in F[X]$ splits in $E$, the set of roots of $X^Q - X$ in $E$ is $E$, and $E$ is a splitting field of $X^Q - X$ over $F$. Moreover, every monic irreducible factor of $X^Q - X$ over $F$ (in the sense of the entry on polynomials with distinct roots) has distinct roots in $E$.
:::

## 직관

원소가 $q$개인 체에서는 모든 원소가 $a^q = a$를 만족했습니다([[order-of-a-finite-field|유한체의 원소 개수]]의 (6)). 곧 그런 체의 원소는 정확히 $X^q - X$의 근입니다. 그래서 원소가 $q$개인 체를 만들려면 $X^q - X$의 근을 모두 담은 체를 만들고 그 근만 모으면 되고, 두 체를 비교하려면 둘 다 같은 다항식의 분해체라는 것을 쓰면 됩니다.

이 계획에 필요한 사실이 셋입니다. 근이 정확히 $q$개여야 하는데, 도함수가 $q \cdot X^{q-1} - 1 = -1$이어서 중근이 없으므로 근이 $q$개입니다. 근 전체가 체여야 하는데, 프로베니우스 사상의 (4)가 그것을 말합니다. 마지막으로 분해체가 하나로 정해져야 하는데, 이것은 6단원의 동형 연장이 말합니다.

비유하자면 $X^q - X$는 원소 $q$개짜리 체의 설계도입니다. 설계도가 같으면 어디서 지어도 같은 구조가 나옵니다. 다만 이 강의는 두 체를 같은 것으로 보지 않으므로 "같은 구조"는 환 동형사상이 있다는 뜻이고, 그 동형사상은 두 소체를 $\mathbb{Z}_p$를 거쳐 잇는 $\sigma$를 넓힌 것입니다.

## 증명

:::idea
(1)은 도함수가 $-1$이라는 것과 프로베니우스 사상의 (4)이다. (2)는 분해체의 존재에서 근 전체가 $\iota(\mathbb{Z}_p)$를 포함하는 부분체임을 보여 분해체 전체와 같다고 한다. (3)은 모든 원소가 근이라는 것과 근이 차수만큼 있으면 분해된다는 것, (4)는 분해체로의 동형 연장, (6)은 곱셈군의 생성원의 최소다항식이다.
:::

:::hint
(2)에서 $\iota$는 $[1]$을 $1$로 보내는 환 준동형 $\mathbb{Z}_p \to E$이므로 유한체의 원소 개수의 (2)의 (i)에 의해 $\eta$와 같다.
:::

:::hint
(6)에서 원소가 $q$개인 체 $E$의 곱셈군의 생성원 $a$를 포함하는 부분체는 $E$뿐이다. 그러면 $\iota(\mathbb{Z}_p)(a)$는 무엇인가?
:::

:::proof
**쓰는 사실.** "원소 개수의 (n)"은 [[order-of-a-finite-field|유한체의 원소 개수]]의 (n), "프로베니우스의 (n)"은 [[frobenius-map|프로베니우스 사상]]의 (n), "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n)이다. [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)에 의해 $\mathbb{Z}_p$는 원소가 $p$개인 체이다. 거듭제곱의 (2)에 의해 $q \ge p \ge 2$이다.

**계수.** $K$가 단위원을 갖는 가환환이면 [[polynomial-ring|다항식환]]의 (2), (3), (4)의 (iii)에 의해 $X^q - X$의 $q$차 계수는 $1$, $1$차 계수는 $-1$이고($q \ne 1$), 나머지 계수는 $0$이다. $\varphi : K \to K'$이 $\varphi(1) = 1$인 환 준동형이면 [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\varphi(-1) = -1$이므로, 대입의 (3)에 의해 $X^q - X$의 계수를 $\varphi$로 옮긴 다항식은 $K'[X]$의 $X^q - X$이다. 또 $K_0$이 $1 \in K_0$인 $K$의 부분환이면 다항식환의 (7)에 의해 $K_0[X]$의 $X^q - X$와 $K[X]$의 $X^q - X$는 같은 다항식이다.

**1의 증명.** $g = X^q - X \in K[X]$라 하자. 위 계수와 [[degree-of-a-polynomial|다항식의 차수]]의 (1)에 의해 $g \ne 0$이고 $\deg g = q$이다. [[formal-derivative|형식적 도함수]]의 (6)에 의해 $g' = -1$이다. $K$는 체이므로 $1 \ne 0$이고 $-1 \ne 0$이어서 $g'$는 $0$이 아닌 상수 다항식이며, [[multiple-roots-and-derivative|중근과 도함수]]의 (3)에 의해 $g$는 $K$ 안에 중근을 갖지 않는다. 대입의 (1), (2)에 의해 $a \in K$에서 $g(a) = a^q - a$이므로 $g$의 근 전체는 $\{a \in K : a^q = a\}$이고, 프로베니우스의 (4)의 (ii)에 의해 이것은 $K$의 부분체이다. [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 이 집합은 원소가 $q$개 이하인 유한집합이다.

**2의 증명.** 분해체의 (10)을 체 $\mathbb{Z}_p$와 $X^q - X \in \mathbb{Z}_p[X]$(차수 $q \ge 1$)에 쓰면, 체 $E$와 $\iota([1]) = 1$인 단사인 환 준동형 $\iota : \mathbb{Z}_p \to E$가 있어 $\iota(\mathbb{Z}_p)$는 $E$의 부분체이고 $E$는 $\iota(\mathbb{Z}_p)$ 위에서 계수를 $\iota$로 옮긴 다항식의 분해체이다. 위 계수에 의해 그 다항식은 $X^q - X$이다.

이제 그런 $E$와 $\iota$를 잡는다. [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} E = \operatorname{char} \mathbb{Z}_p = p$이다. 원소 개수의 (2)의 (i)의 마지막 문장에 의해 $\iota = \eta$이고 $\iota(\mathbb{Z}_p) = \mathbb{P}_E$이다. $R = \{a \in E : a^q = a\}$라 하자. (1)을 $K = E$에 쓰면 $R$은 $E$ 안의 $X^q - X$의 근 전체이고 $E$의 부분체이며, $X^q - X$는 $E$ 안에 중근을 갖지 않는다. 프로베니우스의 (4)의 (i)에 의해 $\mathbb{P}_E = \{k \cdot 1 : k \in \mathbb{Z}\} \subseteq R$이다. 따라서 $R$은 $\iota(\mathbb{Z}_p)$를 포함하고 $E$ 안의 $X^q - X$의 근을 모두 원소로 갖는 $E$의 부분체이고, 분해체의 정의에 의해 $R = E$이다. 곧 $E$의 모든 원소가 $a^q = a$를 만족한다.

분해체의 정의에 의해 $X^q - X$는 $E$에서 분해되고, 중근을 갖지 않으므로 [[separable-polynomial|근이 서로 다른 다항식]]의 (1)의 (i)과 (iv)에 의해 $R$은 원소를 $q$개 갖는다. $R = E$이므로 $E$는 원소가 $q$개인 유한체이다. 원소 개수의 (3)에 의해 $|E| = p^{[E : \mathbb{P}_E]}$이므로 $p^n = p^{[E : \mathbb{P}_E]}$이고, 거듭제곱의 (2)에 의해 $[E : \mathbb{P}_E] = n$이다.

**3의 증명.** $F$가 원소가 $q$개인 체라 하자. 원소 개수의 (1), (3)에 의해 $p' = \operatorname{char} F$는 소수이고 $q = p'^m$인 자연수 $m$이 있다. 거듭제곱의 (2)에 의해 $p' \mid p'^m = p^n$이고, $p'$은 $p^n$의 양의 약수이므로 거듭제곱의 (3)에 의해 $p' = p^j$인 $0 \le j \le n$이 있다. $p'$이 소수이므로 거듭제곱의 (6)에 의해 $j = 1$이고 $p' = p$이다. 곧 $\operatorname{char} F = p$이다.

$\mathbb{P}_F$는 $F$의 부분체이므로(원소 개수의 (2)의 (ii)) 위 계수에 의해 $X^q - X$는 $\mathbb{P}_F[X]$의 원소이고 $F[X]$의 $X^q - X$와 같다. 원소 개수의 (6)에 의해 $F$의 모든 원소 $a$가 $a^q = a$를 만족하므로, (1)에 의해 $F$ 안의 $X^q - X$의 근 전체는 $F$이고 원소가 $q = \deg(X^q - X)$개이다. 분해체의 (4)에 의해 $X^q - X$는 $F$에서 분해된다. $\mathbb{P}_F$를 포함하고 $F$ 안의 근을 모두 원소로 갖는 $F$의 부분체는 $F$를 포함하므로 $F$뿐이다. 따라서 $F$는 $\mathbb{P}_F$ 위에서 $X^q - X$의 분해체이다.

**4의 증명.** (3)에 의해 $\operatorname{char} F = \operatorname{char} F' = p$이므로 원소 개수의 (2)의 $\eta$, $\eta'$이 있다. 원소 개수의 (2)의 (ii)에 의해 $\eta : \mathbb{Z}_p \to \mathbb{P}_F$와 $\eta' : \mathbb{Z}_p \to \mathbb{P}_{F'}$은 환 동형사상이므로, 환 준동형의 (6)의 (iii)과 (i)에 의해 $\sigma = \eta' \circ \eta^{-1} : \mathbb{P}_F \to \mathbb{P}_{F'}$은 환 동형사상이고 $\sigma(1) = \eta'([1]) = 1$이다. 위 계수에 의해 $X^q - X \in \mathbb{P}_F[X]$의 계수를 $\sigma$로 옮긴 다항식은 $\mathbb{P}_{F'}[X]$의 $X^q - X$이다. (3)에 의해 $F$는 $\mathbb{P}_F$ 위에서 $X^q - X$의 분해체이고 $F'$은 $\mathbb{P}_{F'}$ 위에서 $X^q - X$의 분해체이다. 따라서 [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 설정이 $K = \mathbb{P}_F$, $K' = \mathbb{P}_{F'}$, $f = X^q - X$에서 성립하고, 그 항목의 (1)에 의해 $\mathbb{P}_F$ 위에서 $\sigma$와 같은 환 동형사상 $F \to F'$이 있다.

**5의 증명.** 원소가 $N$개인 체 $F$가 있으면 원소 개수의 (1), (3)에 의해 $p' = \operatorname{char} F$는 소수이고 $N = p'^{n'}$인 자연수 $n'$이 있다. 거꾸로 $N = p'^{n'}$이면 (2)를 $p'$, $n'$에 쓰면 원소가 $N$개인 체가 있다.

**6의 증명.** (2)의 $E$와 $\iota$를 잡는다. $E$는 유한체이므로 [[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4)에 의해 $E^{\times} = \langle a \rangle$인 $a$가 있다. $a$는 $E$ 안의 $X^q - X$의 근이고 $X^q - X$는 $\iota(\mathbb{Z}_p)[X]$의 영이 아닌 원소이므로, [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (1)에 의해 $a$는 $\iota(\mathbb{Z}_p)$ 위에서 대수적이다. 그 (3)에 의해 $a$의 $\iota(\mathbb{Z}_p)$ 위의 최소다항식 $m$은 $\iota(\mathbb{Z}_p)$ 위의 모닉 기약 다항식이다.

[[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $\iota(\mathbb{Z}_p)(a)$는 $\iota(\mathbb{Z}_p)$를 포함하고 $a$를 원소로 갖는 $E$의 부분체이므로, 곱셈군의 유한 부분군의 (5)에 의해 $\iota(\mathbb{Z}_p)(a) = E$이다. 단순 대수적 확대의 (3)의 (iii)에 의해 $\deg m = [E : \iota(\mathbb{Z}_p)]$이고, (2)에 의해 이것은 $[E : \mathbb{P}_E] = n$이다.

[[extension-field|확대체]]의 (3)의 (iii)에 의해 $\iota$를 함수 $\mathbb{Z}_p \to \iota(\mathbb{Z}_p)$로 선언한 것은 환 동형사상이고, 환 준동형의 (6)의 (iii)에 의해 그 역함수 $\theta : \iota(\mathbb{Z}_p) \to \mathbb{Z}_p$도 환 동형사상이다. [[irreducible-polynomial|기약 다항식]]의 (7)에 의해 $h = m^{\theta} \in \mathbb{Z}_p[X]$는 $\mathbb{Z}_p$ 위에서 기약이고 모닉이며 $\deg h = \deg m = n$이다.

**7의 증명.** $E$가 유한체이고 $F$가 $E$의 부분체이며 $Q = |E|$라 하자. 원소 개수의 (1), (3)에 의해 $p_0 = \operatorname{char} E$는 소수이고 $Q = p_0^{N}$인 자연수 $N$이 있다. (1)과 (3)을 $p$ 대신 $p_0$, $n$ 대신 $N$에 쓰면, $X^Q - X$는 $E$ 안에 중근을 갖지 않고, $E$에서 분해되며, $E$ 안의 근 전체는 $E$이다. 위 계수에 의해 $X^Q - X$는 $F[X]$의 원소이고 $E[X]$의 $X^Q - X$와 같으며, 영다항식이 아니고 차수가 $Q \ge 1$이다. $F$를 포함하고 $E$ 안의 근을 모두 원소로 갖는 $E$의 부분체는 $E$를 포함하므로 $E$뿐이고, 따라서 $E$는 $F$ 위에서 $X^Q - X$의 분해체이다. $X^Q - X$가 $E$ 안에 중근을 갖지 않으므로 [[separable-polynomial|근이 서로 다른 다항식]]의 (4)를 $K = F$에 쓰면 $X^Q - X$의 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다.
:::

## 예시와 반례

:::example[원소가 $4$개인 체에서 $X^4 - X$의 일차식 분해]
[[splitting-field-examples|분해체의 예]]의 (2)의 체 $L$(원소 $4$개, $\mathbb{Z}_2$ 위의 $X^2 + X + [1]$로 만든 크로네커 체)을 생각합니다. $\iota$는 $[1]$을 $1$로 보내므로 $\iota(\mathbb{Z}_2) = \mathbb{P}_L = \{0, 1\}$이고(유한체의 원소 개수의 (2)의 (i)), (3)에 의해 $L$은 $\mathbb{P}_L$ 위에서 $X^4 - X$의 분해체이며 $L$의 네 원소 $0$, $1$, $\alpha$, $\alpha + 1$이 모두 근입니다.

직접 확인해 보면, $\operatorname{char} L = 2$이고 $\alpha^2 + \alpha + 1 = 0$이므로 $(X - \alpha)(X - \alpha - 1) = X^2 - (2 \cdot \alpha + 1)X + \alpha^2 + \alpha = X^2 + X + 1$이고,
$$
\begin{aligned}
&X(X - 1)(X^2 + X + 1) \\
&\quad = (X^2 + X)(X^2 + X + 1) \\
&\quad = X^4 + 2 \cdot X^3 + 2 \cdot X^2 + X \\
&\quad = X^4 + X = X^4 - X
\end{aligned}
$$
입니다($2 \cdot y = 0$, $X = -X$).
:::

:::counterexample[$\mathbb{Z}_2$에서 중근을 갖는 $X^3 - X$]
(1)에서 지수 $q$가 표수의 거듭제곱이라는 가정을 빼면 결론이 깨질 수 있습니다. $\mathbb{Z}_2$에서 $X^3 - X = X(X - [1])(X + [1]) = X(X + [1])^2$이므로 $[1]$은 중근입니다($-[1] = [1]$). 도함수는 $[3]X^2 - [1] = X^2 + [1]$이고 $[1]$에서 값이 $[0]$입니다. $3$은 $2$의 거듭제곱이 아니어서 [[formal-derivative|형식적 도함수]]의 (6)을 쓸 수 없습니다.
:::

## 확인 질문

:::check[(6)이 보장하는 $\mathbb{Z}_7$ 위의 차수 $2$인 모닉 기약 다항식을 하나 찾으면?]
$X^2 + [1]$이 그 예입니다. $\mathbb{Z}_7$의 원소의 제곱은 $[0], [1], [4], [2], [2], [4], [1]$이고 $-[1] = [6]$은 그 가운데 없으므로 $X^2 + [1]$은 $\mathbb{Z}_7$ 안에 근이 없습니다. 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다.
:::

:::check[체 $\mathbb{Z}_5$는 $\mathbb{Z}_5$ 위에서 $X^5 - X$의 분해체인가?]
그렇습니다. $\mathbb{Z}_5$는 원소가 $5$개인 체이고, 그 소체는 $\mathbb{Z}_5$ 자신입니다([[subfield|부분체]]의 (6)과 [[order-of-a-finite-field|유한체의 원소 개수]]의 (2)의 (iii)). (3)을 $q = 5$에 쓰면 됩니다.
:::
