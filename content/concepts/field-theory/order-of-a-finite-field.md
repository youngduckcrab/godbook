---
title: 유한체의 원소 개수
title_en: Number of Elements of a Finite Field
aliases: [유한체, 소체, 유한체의 표수, 유한체의 위수, finite field, prime subfield, order of a finite field]
kind: theorem
field: field-theory
msc: ["12E20"]
level: undergrad
summary: "유한집합인 체를 유한체라 한다. 유한체의 표수는 소수 p 이다. 표수가 소수 p 인 체에서 1 의 정수배 전체는 Z_p 와 환으로서 동형인 부분체(소체)이고 모든 부분체에 들어 있다. 유한체는 소체 위의 n차원 벡터공간이어서 원소가 pⁿ 개이고, 유한체 E 의 부분체 F 에 대하여 |E| = |F|^[E : F] 이다. 원소가 q 개인 유한체의 모든 원소 a 는 a^q = a 를 만족한다."
requires: [set, function, recursion-theorem, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, prime-number, well-ordering-principle, divisibility, prime-power-divisors, group, subgroup, power-in-a-group, laws-of-exponents, order-of-an-element, cyclic-subgroup, order-divides-group-order, integers-modulo-n, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, quotient-ring, first-isomorphism-theorem-for-rings, finite-products-in-a-commutative-ring, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial, subfield, vector-space-over-a-field, dimension-over-a-field, number-of-elements-of-finite-vector-space, extension-field, kronecker-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Proposition 22.1, Proposition 22.2 와 그 증명 (p.278), Theorem 22.6 의 증명 (p.280), Theorem 22.7 의 증명 (p.280); 22.4절 Exercises, 연습문제 1, 2, 3 (p.289), 18 (p.290); 16.2절 Integral Domains and Fields, 표수의 정의, Example 16.17, Theorem 16.19 (p.194–195); 16.7절 Exercises, 연습문제 29 (p.206); 18.4절 Exercises, 연습문제 10 (p.235–236); 6.3절, Theorem 6.19 (p.78); 21.1절 Extension Fields, Example 21.2 (p.261), Example 21.6 (p.262); 21.5절 Exercises, 연습문제 5 (p.276); 22.1절, Example 22.8 과 Figure 22.9 (p.280–281); 22.4절, 연습문제 5 (p.289); 17.3절 Irreducible Polynomials, Example 17.12 (p.215)"
    checked: original
    note: "(1)은 출처 Proposition 22.1(p.278)이다. 출처는 그 앞 문단에서 'Suppose that F is a finite field with n elements. Then nα = 0 for all α in F' 라고 이유를 덧붙이지 않고 쓰고, Theorem 16.19(p.195, 정역의 표수는 소수이거나 0)로 표수가 소수임을 얻는다. 이 항목은 덧셈군에서 1 의 위수가 유한하다는 것과 환의 표수 항목(characteristic-of-a-ring)의 (3)으로 보인다. (2)의 소체는 출처 Proposition 22.2 의 증명(p.278)이 ϕ(n) = n · 1 의 상으로 잡는 'subfield of F isomorphic to Z_p' 이고, 출처는 그것을 K 로 쓰며 상이 부분체이고 Z_p 와 동형이라는 것을 'Since the characteristic of F is p, the kernel of ϕ must be pZ and the image of ϕ must be a subfield' 한 문장으로 쓴다. 이 항목은 환의 제1 동형 정리와 체 사이의 단사인 환 준동형으로 그 단계를 채운다. 이름 '소체(prime subfield)' 와 '모든 체는 소체를 하나 갖고 표수 p 이면 그것은 Z_p 와 동형이다' 는 출처 연습문제 18.4.10(p.235–236)이다. 출처의 소체는 '진부분체가 없는 부분체' 로 정의되고, 이 항목은 1 의 정수배 전체로 정의한 뒤 (2)의 (iii)에서 그 부분체가 자기 자신뿐임을 보인다. (3)은 출처 Proposition 22.2 이고 증명은 출처와 같이 소체 위의 차원과 일차결합의 개수로 하며, 개수는 유한체 위 벡터공간의 원소 개수 항목(number-of-elements-of-finite-vector-space)의 (4)로 센다. (4)의 |E| = |F|^{[E : F]} 는 출처 연습문제 22.4.18(p.290, 원소 q 개인 체 위의 n 차 대수적 원소 α 에 대하여 F(α) 는 원소 q^n 개)과 같은 발상이다. (5)는 출처 Theorem 22.7 의 증명(p.280)의 첫 문장이 [E : K] = [E : F][F : K] 로 m | n 을 얻는 것과 결론이 같다. 이 항목은 차수의 곱셈 공식을 쓰지 않고 |E| = |F|^{[E : F]} 와 소수의 거듭제곱의 지수 비교로 보인다. 확인 질문 '원소가 $81$개인 체 $E$의 부분체가 가질 수 있는 원소의 개수의 후보는?' 은 부분체의 격자와 차수를 묻는 출처 연습문제 22.4.1–22.4.3(p.289)과 같은 종류의 물음이다. (6)을 F = Z_p 에서 보면 출처 Theorem 6.19(Fermat's Little Theorem, p.78)이다. 확인 질문 '원소가 $7$개인 체에서 $a^{20}$을 더 낮은 거듭제곱으로 쓰면?' 은 Theorem 6.19 의 a^{p−1} ≡ 1 로 지수를 줄이는 것과 같은 발상이다. 반례 '모든 원소가 $a^9 = a$를 만족하는 체 $\\mathbb{Z}_3$' 이 쓰는 '모든 원소가 a³ = a 를 만족하는 환' 은 출처 연습문제 16.7.29(p.206)의 조건과 같다. 예시 '원소가 $8$개인 체의 부분체' 는 출처 Theorem 22.7(p.280)의 첫 부분과 Example 22.8, Figure 22.9(p.280–281, GF(p^{24}) 의 부분체의 격자)와 같은 발상이고, 원소가 8개인 체는 출처 Example 21.6(p.262)과 연습문제 21.5.5(p.276)에 나온다. 예시 '크로네커 정리로 만든 원소 $25$개인 체' 처럼 기약 다항식의 몫환으로 유한체를 만들고 원소를 세는 것은 출처 Example 21.2(p.261, 원소 4개), 연습문제 21.5.5(p.276, 원소 8개), 22.4.5(p.289, 원소 27개)와 같은 발상이다. (6)의 a^q = a 는 출처 Theorem 22.6 의 증명(p.280)이 'The order of the multiplicative group of nonzero elements of E is p^n − 1; hence, α^{p^n−1} = 1 or α^{p^n} − α = 0' 이라고 쓰는 것과 같다. 출처 Example 16.17(p.194–195)은 Z_p 가 표수 p 인 체임을 보인다. 예시 '크로네커 정리로 만든 원소 $25$개인 체' 의 다항식 X² + X + [1] 이 Z_5 위에서 기약이라는 것은 근이 없음으로 확인하며, 이 방법은 출처 Example 17.12(p.215)가 Z_3 위의 삼차 다항식에 쓰는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 순환군 증명과 프로베니우스 (4)(iii) 통독). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원, 역원 $a^{-1}$, 가역원의 군 $F^{\times}$는 [[field|가역원과 체]]의 것이고, $0$, $1$, 곱 $ab$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이다. 표수 $\operatorname{char} F$는 [[characteristic-of-a-ring|환의 표수]]의 것이고, 부분체는 [[subfield|부분체]], 확대체, 유한 확대, 차수 $[E : F]$는 [[extension-field|확대체]]의 뜻이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 환 준동형, 환 동형사상, $\cong$, 상 $\varphi(R)$은 [[ring-homomorphism|환 준동형]]의 것이고, $\mathbb{Z}_p$와 $[k]$는 [[integers-modulo-n|법 n의 정수]]의 것이다. 유한집합, 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 뜻이고, 정수의 거듭제곱 $p^n$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 것이며, 체의 원소의 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**유한체.** 체 $F$가 유한집합일 때 $F$를 **유한체**(finite field)라 한다.

**소체.** $F$가 체이고 $p = \operatorname{char} F$가 [[prime-number|소수]]라 하자.
$$
\mathbb{P}_F = \{k \cdot 1 : k \in \mathbb{Z}\}
$$
를 $F$의 **소체**(prime subfield)라 한다. 아래 (2)의 (ii)에 의해 이것은 $F$의 부분체이다.

다음이 성립한다.

1. (표수) 유한체의 표수는 소수이다.
2. (소체) $F$가 체이고 $p = \operatorname{char} F$가 소수라 하자.
   - (i) 모든 정수 $k$에서 $\eta([k]) = k \cdot 1$인 함수 $\eta : \mathbb{Z}_p \to F$가 정확히 하나 있다. $\eta$는 $\eta([1]) = 1$인 단사인 환 준동형이고 $\eta(\mathbb{Z}_p) = \mathbb{P}_F$이다. 또 $\varphi : \mathbb{Z}_p \to F$가 $\varphi([1]) = 1$인 환 준동형이면 $\varphi = \eta$이다.
   - (ii) $\mathbb{P}_F$는 $F$의 부분체이고, $\eta$를 함수 $\eta : \mathbb{Z}_p \to \mathbb{P}_F$로 선언한 것은 환 동형사상이다. 따라서 $\mathbb{Z}_p \cong \mathbb{P}_F$이고 $|\mathbb{P}_F| = p$이다.
   - (iii) $K$가 $F$의 부분체이면 $\operatorname{char} K = p$이고 $\mathbb{P}_K = \mathbb{P}_F$이다. 따라서 $\mathbb{P}_F \subseteq K$이다. 특히 체 $\mathbb{P}_F$의 부분체는 $\mathbb{P}_F$뿐이다.
3. (원소의 개수) $F$가 유한체이고 $p = \operatorname{char} F$라 하자. $F$는 $\mathbb{P}_F$의 유한 확대이고, $n = [F : \mathbb{P}_F]$라 하면 $n \ge 1$이고 $|F| = p^n$이다.
4. (유한체의 부분체) $E$가 유한체이고 $F$가 $E$의 부분체라 하자. 그러면 $F$는 유한체이고, $\operatorname{char} F = \operatorname{char} E$이며 $\mathbb{P}_F = \mathbb{P}_E$이다. 또 $E$는 $F$의 유한 확대이고
   $$
   |E| = |F|^{[E : F]}
   $$
   이다. 오른쪽은 정수의 거듭제곱이다.
5. (지수의 비교) (4)의 가정 아래 $p = \operatorname{char} E$이고, $m$, $n$이 $|F| = p^m$, $|E| = p^n$인 $0$ 이상의 정수라 하자((3)에 의해 그런 $m$, $n$이 있다). 그러면 $n = m \cdot [E : F]$이다. 따라서 $m \mid n$이다.
6. (원소의 거듭제곱) $F$가 유한체이고 $q = |F|$라 하자. 그러면 $F^{\times} = F - \{0\}$은 원소가 $q - 1$개인 군이고, $F^{\times}$의 모든 원소 $a$에서 $a^{q-1} = 1$이며, $F$의 모든 원소 $a$에서 $a^q = a$이다.
:::

:::english
Fields, units, inverses $a^{-1}$ and the group of units $F^{\times}$ are those of the entry on units and fields, and $0$, $1$, the product $ab$ and integer multiples $k \cdot a$ are the notation of the entry on rings. The characteristic $\operatorname{char} F$ is that of the entry on the characteristic of a ring; subfields are in the sense of the entry on subfields, and extension fields, finite extensions and the degree $[E : F]$ in the sense of the entry on extension fields; an extension field is regarded as a vector space with the operations of (1)(i) of that entry. Ring homomorphisms, ring isomorphisms, $\cong$ and images $\varphi(R)$ are those of the entry on ring homomorphisms, and $\mathbb{Z}_p$ and $[k]$ are those of the entry on the integers modulo $n$. Finite sets and the number of elements $|A|$ are in the sense of the entries on finite sets and on the number of elements; the integer power $p^n$ is that of the entry on prime power divisors, and powers $a^k$ of field elements are those of the entry on finite products and powers in a commutative ring.

**Finite fields.** A field $F$ that is a finite set is called a **finite field**.

**Prime subfield.** Let $F$ be a field and suppose that $p = \operatorname{char} F$ is a prime. The set
$$
\mathbb{P}_F = \{k \cdot 1 : k \in \mathbb{Z}\}
$$
is called the **prime subfield** of $F$. By (2)(ii) below it is a subfield of $F$.

The following hold.

1. (Characteristic) The characteristic of a finite field is a prime.
2. (Prime subfield) Let $F$ be a field and suppose that $p = \operatorname{char} F$ is a prime.
   - (i) There is exactly one function $\eta : \mathbb{Z}_p \to F$ with $\eta([k]) = k \cdot 1$ for every integer $k$. It is an injective ring homomorphism with $\eta([1]) = 1$, and $\eta(\mathbb{Z}_p) = \mathbb{P}_F$. Moreover, if $\varphi : \mathbb{Z}_p \to F$ is a ring homomorphism with $\varphi([1]) = 1$, then $\varphi = \eta$.
   - (ii) $\mathbb{P}_F$ is a subfield of $F$, and $\eta$ declared as a function $\eta : \mathbb{Z}_p \to \mathbb{P}_F$ is a ring isomorphism. Hence $\mathbb{Z}_p \cong \mathbb{P}_F$ and $|\mathbb{P}_F| = p$.
   - (iii) If $K$ is a subfield of $F$, then $\operatorname{char} K = p$ and $\mathbb{P}_K = \mathbb{P}_F$; hence $\mathbb{P}_F \subseteq K$. In particular, the only subfield of the field $\mathbb{P}_F$ is $\mathbb{P}_F$ itself.
3. (Number of elements) Let $F$ be a finite field and $p = \operatorname{char} F$. Then $F$ is a finite extension of $\mathbb{P}_F$, and with $n = [F : \mathbb{P}_F]$ we have $n \ge 1$ and $|F| = p^n$.
4. (Subfields of a finite field) Let $E$ be a finite field and $F$ a subfield of $E$. Then $F$ is a finite field, $\operatorname{char} F = \operatorname{char} E$ and $\mathbb{P}_F = \mathbb{P}_E$. Moreover $E$ is a finite extension of $F$ and
   $$
   |E| = |F|^{[E : F]},
   $$
   where the right side is an integer power.
5. (Comparing exponents) Under the hypotheses of (4), let $p = \operatorname{char} E$ and let $m$, $n$ be integers $\ge 0$ with $|F| = p^m$ and $|E| = p^n$ (such $m$, $n$ exist by (3)). Then $n = m \cdot [E : F]$; hence $m \mid n$.
6. (Powers of elements) Let $F$ be a finite field and $q = |F|$. Then $F^{\times} = F - \{0\}$ is a group with $q - 1$ elements, $a^{q-1} = 1$ for every element $a$ of $F^{\times}$, and $a^q = a$ for every element $a$ of $F$.
:::

## 직관

체에는 $0$과 $1$이 있으므로 $1$, $1 + 1$, $1 + 1 + 1$, …을 차례로 만들 수 있습니다. 원소가 유한개이면 이 줄은 언젠가 되풀이되고, 처음으로 $0$이 되는 횟수가 표수입니다. 체에는 영인자가 없으므로 이 수는 더 작은 두 자연수의 곱으로 쪼개지지 않는 소수입니다. 그래서 $1$의 정수배는 $\mathbb{Z}_p$와 똑같이 계산되는 작은 체를 이룹니다. 이것이 소체이고, 모든 부분체가 $1$을 가지므로 모든 부분체 안에 들어 있습니다.

큰 체를 소체 위의 벡터공간으로 보면 기저가 $n$개일 때 원소는 좌표 $n$개로 하나씩 정해지고, 좌표마다 $p$가지가 있으므로 원소는 $p^n$개입니다. 숫자가 $p$개 새겨진 바퀴를 $n$개 단 번호 자물쇠의 번호가 $p^n$가지인 것과 같습니다. 바퀴의 숫자가 소체의 원소, 바퀴의 개수가 차원, 번호 하나가 좌표의 열에 해당합니다. 그래서 원소가 $6$개나 $10$개인 체는 없습니다.

(6)은 라그랑주 정리를 곱셈군 $F^{\times}$에 쓴 것입니다. $0$이 아닌 원소는 원소가 $q - 1$개인 군의 원소이므로 $q - 1$제곱하면 $1$이 되고, 한 번 더 곱하면 자기 자신이 됩니다. $0$은 처음부터 $0^q = 0$입니다.

## 증명

:::idea
(1)은 덧셈군에서 $1$의 위수가 유한하다는 것과 정역의 표수가 $0$이거나 소수라는 것이다. (2)는 $k$를 $k \cdot 1$로 보내는 환 준동형 $\mathbb{Z} \to F$에 환의 제1 동형 정리를 쓴다. (3)과 (4)는 유한체 위의 유한차원 벡터공간의 원소 개수, (5)는 소수의 거듭제곱의 지수 비교, (6)은 곱셈군의 위수이다.
:::

:::hint
(2)의 (iii)에서 $K$의 덧셈군은 $F$의 덧셈군의 부분군이고 $1$을 포함한다. 순환 부분군 $\langle 1 \rangle$을 덧셈으로 쓰면 무엇인가?
:::

:::hint
(5)에서 $p^n = (p^m)^{[E : F]}$를 지수법칙으로 $p$의 한 거듭제곱으로 쓴다.
:::

:::proof
**쓰는 사실.** "표수의 (n)"은 [[characteristic-of-a-ring|환의 표수]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "개수의 (n)"은 [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (n), "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n)이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)를 쓴다.

**1의 증명.** $F$가 유한체라 하자. 덧셈군 $(F, +)$는 유한군이므로 [[order-of-an-element|원소의 위수]]의 (6)에 의해 $1$의 위수는 유한하고, 표수의 정의에 의해 $\operatorname{char} F = \operatorname{ord}(1)$은 자연수이다. 곧 $\operatorname{char} F \ne 0$이다. [[field|가역원과 체]]의 (3)에 의해 $F$는 정역이므로 표수의 (3)에 의해 $\operatorname{char} F$는 $0$이거나 소수이고, $0$이 아니므로 소수이다.

**2의 증명.** $F$가 체이고 $p = \operatorname{char} F$가 소수라 하자.

(i) 각 정수 $k$에 $F$의 원소 $k \cdot 1$이 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\psi(k) = k \cdot 1$인 [[function|함수]] $\psi : \mathbb{Z} \to F$가 있다. 정수 $k$, $l$에 대하여 [[laws-of-exponents|지수법칙]]의 (6)에 의해 $\psi(k + l) = (k + l) \cdot 1 = k \cdot 1 + l \cdot 1$이고, [[ring-basic-properties|환의 기본 성질]]의 (6)에 의해 $\psi(kl) = (kl) \cdot 1 = (k \cdot 1)(l \cdot 1)$이다. 따라서 $\psi$는 환 $\mathbb{Z}$([[ring-examples|환의 예]])에서 $F$로의 환 준동형이다. 표수의 (1)에 의해 $k \cdot 1 = 0$인 것은 정확히 $p \mid k$일 때이므로 $\operatorname{Ker} \psi = p\mathbb{Z}$이고, $\psi(\mathbb{Z}) = \mathbb{P}_F$이다.

[[first-isomorphism-theorem-for-rings|환의 제1 동형 정리]]의 (1)에 의해 모든 정수 $k$에서 $\eta_0(k + p\mathbb{Z}) = k \cdot 1$인 환 동형사상 $\eta_0 : \mathbb{Z}/p\mathbb{Z} \to \mathbb{P}_F$가 있다. [[quotient-ring|몫환]]의 (6)에 의해 $\mathbb{Z}/p\mathbb{Z}$는 환 $\mathbb{Z}_p$와 같은 환이고 $k + p\mathbb{Z} = [k]$이다. $\iota : \mathbb{P}_F \to F$를 포함 함수라 하고 $\eta = \iota \circ \eta_0$로 두면, $\eta : \mathbb{Z}_p \to F$는 모든 정수 $k$에서 $\eta([k]) = k \cdot 1$이고, [[ring-homomorphism|환 준동형]]의 (7)의 (ii)와 (6)의 (i)에 의해 환 준동형이다. $\eta([1]) = 1 \cdot 1 = 1$이다([[power-in-a-group|군의 거듭제곱]]의 (4)). $\eta([k]) = 0$이면 $p \mid k$이므로 [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $[k] = [0]$이다. 곧 $\operatorname{Ker} \eta = \{[0]\}$이고, 환 준동형의 (2)에 의해 $\eta$는 단사이다. $\eta$의 값은 $k \cdot 1$ 꼴이고 모든 $k \cdot 1$은 $\eta([k])$이므로 $\eta(\mathbb{Z}_p) = \mathbb{P}_F$이다.

같은 성질의 함수가 둘 있으면, $\mathbb{Z}_p$의 모든 원소가 어떤 정수 $k$에 대한 $[k]$이므로 두 함수는 모든 원소에서 같은 값 $k \cdot 1$을 갖고, 따라서 같다. 이제 $\varphi : \mathbb{Z}_p \to F$가 $\varphi([1]) = 1$인 환 준동형이라 하자. 군의 거듭제곱의 (7)에 의해 $[k] = k \cdot [1]$이고, 환 준동형의 (1)에 의해 $\varphi([k]) = k \cdot \varphi([1]) = k \cdot 1$이다. 따라서 $\varphi$도 위의 성질을 가지므로 $\varphi = \eta$이다.

(ii) [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)에 의해 $\mathbb{Z}_p$는 체이고 $|\mathbb{Z}_p| = p$이다. (i)에 의해 $\eta$는 체 사이의 단사인 환 준동형이므로 확대체의 (3)의 (iii)에 의해 $\eta(\mathbb{Z}_p) = \mathbb{P}_F$는 $F$의 부분체이고, $\eta : \mathbb{Z}_p \to \mathbb{P}_F$는 환 동형사상이다. 이 전단사에 의해 [[number-of-elements-is-unique|원소의 개수]]의 (2)로 $|\mathbb{P}_F| = p$이다.

(iii) $K$가 $F$의 부분체라 하자. 부분체의 정의에 의해 $K$는 $1 \in K$인 $F$의 [[subring|부분환]]이므로 표수의 (5)의 (iii)에 의해 $\operatorname{char} K = p$이고, 따라서 $\mathbb{P}_K$가 정의된다. 부분환의 (1)에 의해 $K$는 덧셈군 $(F, +)$의 [[subgroup|부분군]]이고 $1 \in K$이다. [[cyclic-subgroup|순환 부분군]]의 (2)와 (5)에 의해 $\{k \cdot 1 : k \in \mathbb{Z}\} \subseteq K$이고, 군의 거듭제곱의 (5)에 의해 $k \cdot 1$은 $K$의 덧셈군에서 계산해도 $F$에서 계산한 것과 같다. 따라서 $\mathbb{P}_K = \mathbb{P}_F$이고 $\mathbb{P}_F \subseteq K$이다.

특히 $L$이 체 $\mathbb{P}_F$의 부분체이면, $\mathbb{P}_F$가 $F$의 부분체이므로 부분체의 (5)의 (i)에 의해 $L$은 $F$의 부분체이다. 앞 문단에 의해 $\mathbb{P}_F \subseteq L$이고 $L \subseteq \mathbb{P}_F$이므로 $L = \mathbb{P}_F$이다.

**3의 증명.** $F$가 유한체이고 $p = \operatorname{char} F$라 하자. (1)에 의해 $p$는 소수이므로 $\mathbb{P}_F$가 정의되고, (2)의 (ii)에 의해 $\mathbb{P}_F$는 $F$의 부분체이다. 확대체의 정의에 의해 $F$는 $\mathbb{P}_F$의 확대체이고, 확대체의 (1)의 (i)에 의해 $\mathbb{P}_F$ 위의 벡터공간이다. $F$가 유한집합이므로 개수의 (4)에 의해 $F$는 $\mathbb{P}_F$ 위에서 유한차원이고 $|F| = |\mathbb{P}_F|^{\dim_{\mathbb{P}_F} F}$이다. 곧 $F$는 $\mathbb{P}_F$의 유한 확대이고 $n = [F : \mathbb{P}_F]$이면 $|F| = p^n$이다((2)의 (ii)). 확대체의 (2)의 (i)에 의해 $n \ge 1$이다.

**4의 증명.** $E$가 유한체이고 $F$가 $E$의 부분체라 하자. $F \subseteq E$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $F$는 유한집합이고, 따라서 유한체이다. $F$는 $1 \in F$인 $E$의 부분환이므로 표수의 (5)의 (iii)에 의해 $\operatorname{char} F = \operatorname{char} E$이다. (1)에 의해 이 표수는 소수이므로 (2)의 (iii)을 체 $E$와 그 부분체 $F$에 쓰면 $\mathbb{P}_F = \mathbb{P}_E$이다. 확대체의 정의와 (1)의 (i)에 의해 $E$는 $F$ 위의 벡터공간이고, $F$와 $E$가 유한집합이므로 개수의 (4)에 의해 $E$는 $F$ 위에서 유한차원이며 $|E| = |F|^{\dim_F E}$이다. 곧 $E$는 $F$의 유한 확대이고 $|E| = |F|^{[E : F]}$이다.

**5의 증명.** $d = [E : F]$라 하자. (4)와 거듭제곱의 (1)의 (iii)에 의해
$$
p^n = |E| = |F|^d = (p^m)^d = p^{md}
$$
이다. 거듭제곱의 (2)에 의해 $p^n = p^{md}$이면 $n = md$이다. [[divisibility|나누어떨어짐]]의 정의에 의해 $m \mid n$이다.

**6의 증명.** $F$가 유한체이고 $q = |F|$라 하자. 체의 정의에 의해 $0$이 아닌 원소는 모두 가역원이고, 가역원과 체의 (1)에 의해 $0$은 가역원이 아니므로 $F^{\times} = F - \{0\}$이다. 가역원과 체의 (1)에 의해 $F^{\times}$는 군이다. $\{0\} \subseteq F$이고 $|\{0\}| = 1$이므로 [[disjoint-union-count|서로소인 합집합의 원소 개수]]의 (2)에 의해 $F^{\times}$는 유한집합이고 $|F^{\times}| = q - 1$이다.

$a \in F^{\times}$이면 [[order-divides-group-order|원소의 위수와 군의 위수]]의 (2)에 의해 군 $F^{\times}$에서 $a^{q-1} = 1$이다. 곱의 (8)에 의해 군 $F^{\times}$에서의 거듭제곱은 환 $F$에서의 거듭제곱과 같으므로 환 $F$에서도 $a^{q-1} = 1$이다. 곱의 (6)의 (i)에 의해 $a^q = a^{q-1}a = 1a = a$이다. $a = 0$이면, $F$는 $0$을 원소로 가져 공집합이 아니므로 [[finite-set|유한집합]]의 (F2)에 의해 $q \ne 0$이고 $q \ge 1$이며((Z1)), 곱의 (6)의 (v)에 의해 $0^q = 0$이다.
:::

## 예시와 반례

:::example[크로네커 정리로 만든 원소 $25$개인 체]
$h = X^2 + X + [1] \in \mathbb{Z}_5[X]$에 $\mathbb{Z}_5$의 원소를 넣으면 $h([0]) = [1]$, $h([1]) = [3]$, $h([2]) = [7] = [2]$, $h([3]) = [13] = [3]$, $h([4]) = [21] = [1]$이므로 $h$는 $\mathbb{Z}_5$ 안에 근이 없고, 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. [[kronecker-theorem|크로네커 정리]]의 설정의 $L$, $\iota : \mathbb{Z}_5 \to L$을 잡으면, 크로네커 정리의 (1)과 (4)에 의해 $L$은 원소가 $5^2 = 25$개인 체입니다.

$\iota$는 $\iota([1]) = 1$인 단사인 환 준동형이므로 [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)에 의해 $\operatorname{char} L = \operatorname{char} \mathbb{Z}_5 = 5$입니다. (2)의 (i)의 마지막 문장에 의해 $\iota$는 $\eta$와 같은 함수이므로 소체는 $\mathbb{P}_L = \iota(\mathbb{Z}_5)$입니다. 크로네커 정리의 (2)의 (iii)에 의해 $[L : \mathbb{P}_L] = 2$이고, (3)의 $|L| = 5^2$과 맞습니다.
:::

:::example[원소가 $8$개인 체의 부분체]
$E$가 원소를 $8 = 2^3$개 갖는 체이면 (1)과 (3)에 의해 $\operatorname{char} E$는 소수 $p$이고 $8 = p^n$인 $n \ge 1$이 있습니다. $p \mid 8$이므로 $p = 2$입니다([[prime-power-divisors|소수의 거듭제곱인 약수]]의 (3)과 (2)에 의해 $8$의 양의 약수는 $1, 2, 4, 8$이고, 이 가운데 소수는 $2$뿐입니다). $E$의 부분체 $F$가 원소를 $2^m$개 가지면 (5)에 의해 $m \mid 3$이므로 $m = 1$이거나 $m = 3$입니다. 따라서 $E$의 부분체는 원소가 $2$개이거나 $8$개이고, 원소가 $4$개인 부분체는 없습니다. 원소가 $2$개인 부분체는 (2)의 (iii)에 의해 모든 부분체에 들어 있는 $\mathbb{P}_E$이고, 원소가 $8$개인 부분체는 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $E$ 자신입니다.
:::

:::counterexample[모든 원소가 $a^9 = a$를 만족하는 체 $\mathbb{Z}_3$]
(6)의 역은 성립하지 않을 수 있습니다. 체 $\mathbb{Z}_3$에서 $[0]^3 = [0]$, $[1]^3 = [1]$, $[2]^3 = [8] = [2]$이므로 모든 원소가 $a^3 = a$를 만족하고, 그래서 $a^9 = (a^3)^3 = a^3 = a$입니다. 그러나 $\mathbb{Z}_3$의 원소는 $9$개가 아니라 $3$개입니다. "모든 원소가 $a^q = a$를 만족한다"는 것만으로 원소의 개수가 $q$라고 말할 수는 없습니다.
:::

## 확인 질문

:::check[원소가 $81$개인 체 $E$의 부분체가 가질 수 있는 원소의 개수의 후보는?]
$3$, $9$, $81$입니다. $81 = 3^4$이므로 앞 예시와 같은 방법으로 $\operatorname{char} E = 3$입니다. 부분체 $F$의 원소가 $3^m$개이면 (5)에 의해 $m \mid 4$이고 (3)에 의해 $m \ge 1$이므로 $m$은 $1$, $2$, $4$ 가운데 하나입니다. 원소가 $27 = 3^3$개인 부분체는 $3 \nmid 4$이므로 없습니다. 원소가 $9$개인 부분체가 실제로 있는지는 이 항목이 말하지 않습니다.
:::

:::check[원소가 $7$개인 체에서 $a^{20}$을 더 낮은 거듭제곱으로 쓰면?]
$a^{20} = a^2$입니다. $a \ne 0$이면 (6)에 의해 $a^6 = 1$이므로 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (6)의 (ii), (iii)에 의해 $a^{20} = (a^6)^3 a^2 = a^2$입니다. $a = 0$이면 두 쪽이 모두 $0$입니다.
:::
