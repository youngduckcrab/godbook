---
title: 확대체
title_en: Extension Field
aliases: [확대, 유한 확대, 확대의 차수, extension field, field extension, finite extension, degree of an extension]
kind: definition
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "체 E 가 F 를 부분체로 가질 때 E 를 F 의 확대체라 한다. 이때 E 는 곱셈을 스칼라배로 F 위의 벡터공간이고, 그 차원이 유한하면 차원을 차수 [E : F] 로 쓴다. 차수가 1 인 것은 E = F 일 때이다. 체 사이의 환 준동형은 영 준동형이거나 단사이고, 단사이면 1 을 1 로 보내며 상은 부분체이고 기저를 기저로 옮긴다. F 의 원소를 고정하는 환 준동형은 F-선형사상이고, 환 동형사상은 체를 체로 보낸다."
requires: [function, inverse-function, injective-surjective-bijective, integers-modulo-n, prime-number, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, first-isomorphism-theorem-for-rings, quotient-ring, finite-sums-in-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, irreducible-polynomial, irreducible-polynomial-and-maximal-ideal, subfield, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, basis-extension-over-a-field, linear-maps-over-a-field]
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, 확대체의 정의 (p.260), Example 21.2 (p.261), 확대체를 벡터공간으로 보는 문단과 유한 확대·[E : F] 의 정의 (p.264–265); 23.1절 Field Automorphisms, Corollary 23.9 의 증명 (p.295); 16.3절 Ring Homomorphisms and Ideals, 환 준동형의 정의 (p.195); 16.7절 Exercises, 연습문제 6, 16, 18 (p.205), 30 (p.206); 17.3절 Irreducible Polynomials, Example 17.12 (p.215); 18.4절 Exercises, 연습문제 10 (p.235–236)"
    checked: original
    note: "확대체의 정의는 출처 21.1절 첫머리(p.260)의 'A field E is an extension field of a field F if F is a subfield of E' 와 같다. 출처는 이것을 F ⊂ E 로 적고 F 를 base field 라 부른다. 이 항목은 기호 없이 'E 는 F 의 확대체이다' 로 쓰고 밑체라는 이름을 두지 않는다. (1)은 출처 p.264 의 'If we regard E as a vector space over F … The elements in the field E are vectors; the elements in the field F are scalars' 를 정의대로 확인한 것이고, (2)의 유한 확대와 [E : F] 는 출처 p.264–265 의 'finite extension of degree n over F. We write [E : F] = n' 과 같다. (2)의 (ii)의 '[E : F] = 1 이면 E = F' 는 출처 Theorem 23.7 의 증명(p.295)이 'If [E : F] = 1, then E = F' 라고 쓰는 사실이다. (3)의 '체 사이의 영이 아닌 환 준동형은 단사' 는 출처 Corollary 23.9 의 증명(p.295)이 'Since σ is a nonzero homomorphism of fields, it must be injective' 라고 이유를 덧붙이지 않고 쓰는 사실이고, 상이 체라는 것은 출처 16.7절 연습문제 18(d)(p.205, R 이 체이고 φ(R) ≠ 0 이면 φ(R) 은 체)이다. 체의 아이디얼이 {0} 과 자기 자신뿐이라는 연습문제 16(p.205)은 (3)의 증명의 첫 단계와 같은 발상이다. 출처 16.3절(p.195)의 환 준동형의 정의도 단위원을 단위원으로 보낼 것을 요구하지 않고, 연습문제 18(c)(p.205)는 전사이면 그렇다는 것을 묻는다. 반례 '$\\mathbb{Z}_6$에서 $P$를 $[3]P$로 보내는 환 준동형' 은 출처 16.7절 연습문제 6(p.205, Z/6Z → Z/15Z 의 환 준동형을 모두 찾아라)과 같은 종류의 대상이고, 부분환의 단위원이 큰 환의 단위원과 같은지 묻는 연습문제 30(p.206)과 닿아 있다. 예시 '$\\mathbb{Z}_3[X]/(X^2 + X + [2])\\mathbb{Z}_3[X]$의 상수의 잉여류' 는 출처 Example 21.2(p.261)가 Z_2[x]/⟨x² + x + 1⟩ 의 원소를 나머지로 세는 것과 같은 발상이고, 이 예시에서 근이 없음을 값으로 확인해 기약성을 얻는 것은 출처 Example 17.12(p.215)가 Z_3 위의 x³ + x² + 2 에 쓰는 것과 같은 발상이다. (7)과 확인 질문 '체 $F$가 $\\mathbb{Z}_7$의 부분체이면 $[\\mathbb{Z}_7 : F]$는 얼마인가?' 는 출처 18.4절 연습문제 10(p.235–236)의 소체(진부분체가 없는 체)와 닿아 있다. 확인 질문 '환 준동형 $\\varphi : \\mathbb{Z}_5 \\to \\mathbb{Z}_5$가 $\\varphi([1]) \\ne [0]$을 만족하면 $\\varphi$는 무엇인가?' 는 출처 16.7절 연습문제 6(p.205)과 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예 다섯의 계산 재계산, 체 준동형의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원, 역원 $a^{-1}$은 [[field|가역원과 체]]의 것이고, $0$, $1$, $-a$, $a - b$, 곱 $ab$는 [[ring|환]]의 표기이며, 부분체는 [[subfield|부분체]]의 뜻이다. 환 준동형, 환 동형사상, 영 준동형, 핵, 상 $\varphi(R)$은 [[ring-homomorphism|환 준동형]]의 것이다. $F$ 위의 벡터공간과 스칼라배는 [[vector-space-over-a-field|체 위의 벡터공간]]의 것이고, 부분공간, 생성 $\operatorname{span}_F$, 일차독립은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]], 기저는 [[basis-over-a-field|체 위의 기저와 좌표]], 유한차원과 $\dim_F$는 [[dimension-over-a-field|체 위의 차원]], $F$-선형사상은 [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 것이다.

**확대체.** $E$와 $F$가 체라 하자. $E$가 $F$의 **확대체**(extension field)인 것은 정확히 $F$가 $E$의 부분체일 때이다. 이때 $F \subseteq E$이고, 체 $F$의 연산은 $E$의 연산을 $F$로 제한한 것이다. "$E$는 $F$의 확대체이다"는 기호로 줄이지 않고 말로 쓴다.

**유한 확대와 차수.** $E$가 $F$의 확대체이고, 아래 (1)의 (i)로 $F$ 위의 벡터공간으로 본 $E$가 $F$ 위에서 유한차원이라 하자. 이때 $E$를 $F$의 **유한 확대**(finite extension)라 하고, $\dim_F E$를 $E$의 $F$ 위의 **차수**(degree)라 하여 $[E : F]$로 쓴다. $E$가 $F$ 위에서 무한차원이면 차수를 정의하지 않는다. 대괄호 $[\ :\ ]$는 군의 지표 $[G : H]$와 같은 모양이지만, 괄호 안이 체이면 차수를 뜻한다.

다음이 성립한다.

1. (벡터공간) $F$가 체 $E$의 부분체라 하자.
   - (i) $E$의 덧셈과, $(c, v) \in F \times E$에서의 값이 $E$에서의 곱 $cv$인 함수 $F \times E \to E$를 스칼라배로 하여, $E$는 $F$ 위의 벡터공간이다. 그 영벡터는 $E$의 $0$이고 $v$의 덧셈 역원은 $E$에서의 $-v$이며, 벡터의 열의 합 $\sum$은 환 $E$의 [[finite-sums-in-a-ring|유한 합]]이다. 이후 확대체 $E$를 $F$ 위의 벡터공간으로 볼 때는 언제나 이 연산으로 본다. $E = F$이면 이것은 [[vector-space-over-a-field|체 위의 벡터공간]]의 (3)의 (iv)의 벡터공간 $F$이다.
   - (ii) (사이의 체) $K$가 $E$의 부분체이고 $F \subseteq K$이면, $F$는 체 $K$의 부분체이고, $K$는 $F$ 위의 벡터공간 $E$의 부분공간이다. (i)로 $F$ 위의 벡터공간으로 본 $K$는, 부분공간 $K$를 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 (1)의 (ii)의 연산으로 본 벡터공간과 같다.
2. (차수) $F$가 체 $E$의 부분체라 하자.
   - (i) $E$가 $F$의 유한 확대이면 $[E : F] \ge 1$이다.
   - (ii) $E = F$이면 $E$는 $F$의 유한 확대이고 $[E : F] = 1$이다. 거꾸로 $E$가 $F$의 유한 확대이고 $[E : F] = 1$이면 $E = F$이다.
   - (iii) $K$가 $E$의 부분체이고 $F \subseteq K$이며 $E$가 $F$의 유한 확대이면, $K$는 $F$의 유한 확대이고 $[K : F] \le [E : F]$이며, $[K : F] = [E : F]$인 것은 정확히 $K = E$일 때이다.
3. (체 사이의 환 준동형) $K$와 $L$이 체이고 $\varphi : K \to L$이 환 준동형이라 하자.
   - (i) $\varphi$는 영 준동형이거나 단사이다.
   - (ii) $\varphi$가 단사인 것은 정확히 $\varphi(1) = 1$일 때이다.
   - (iii) $\varphi$가 단사이면 $\varphi(K)$는 $L$의 부분체이고, $0$이 아닌 모든 $a \in K$에서 $\varphi(a^{-1}) = \varphi(a)^{-1}$이며, $\varphi$를 함수 $\varphi : K \to \varphi(K)$로 선언한 것은 환 동형사상이다. 따라서 $L$은 $\varphi(K)$의 확대체이다.
4. (고정하는 준동형은 선형) $F$가 체 $E$의 부분체이고 체 $E'$의 부분체이기도 하다고 하자. $\tau : E \to E'$이 환 준동형이고 모든 $c \in F$에서 $\tau(c) = c$이면 다음이 성립한다.
   - (i) $\tau(1) = 1$이고 $\tau$는 단사이며, $\tau$는 (1)의 (i)로 본 $F$ 위의 벡터공간 $E$에서 $E'$으로의 $F$-선형사상이다.
   - (ii) $E$와 $E'$이 $F$의 유한 확대이고 $[E : F] = [E' : F]$이면 $\tau : E \to E'$은 전단사이고 환 동형사상이다.
5. (단사인 준동형과 차수) $E$와 $E'$이 체이고 $\tau : E \to E'$이 단사인 환 준동형이며, $F$가 $E$의 부분체라 하자.
   - (i) $\tau(F)$와 $\tau(E)$는 $E'$의 부분체이고, $\tau(F)$는 체 $\tau(E)$의 부분체이다.
   - (ii) $n \ge 0$이고 길이 $n$인 열 $v_1, \dots, v_n$이 $F$ 위의 벡터공간 $E$의 기저이면, 열 $\tau(v_1), \dots, \tau(v_n)$은 $\tau(F)$ 위의 벡터공간 $\tau(E)$의 기저이다.
   - (iii) $E$가 $F$의 유한 확대인 것은 정확히 $\tau(E)$가 $\tau(F)$의 유한 확대일 때이고, 이때 $[\tau(E) : \tau(F)] = [E : F]$이다.
6. (환 동형사상은 체를 체로 보낸다) $E$가 체이고 $R$이 환이며 $\varphi : E \to R$이 환 동형사상이면, $R$은 체이고 $\varphi(1)$은 $R$의 단위원이다.
7. (법 $p$의 정수) $p$가 [[prime-number|소수]]이면 체 $\mathbb{Z}_p$([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3))의 부분체는 $\mathbb{Z}_p$뿐이다([[subfield|부분체]]의 (6)). 따라서 체 $F$에 대하여 $\mathbb{Z}_p$가 $F$의 확대체인 것은 정확히 $F = \mathbb{Z}_p$일 때이고, 이때 $[\mathbb{Z}_p : F] = 1$이다.
:::

:::english
Fields, units, inverses $a^{-1}$ are those of units and fields; $0$, $1$, $-a$, $a - b$ and products $ab$ are the notation of rings; subfields are as in the entry on subfields. Ring homomorphisms, ring isomorphisms, the zero homomorphism, kernels and images $\varphi(R)$ are those of ring homomorphisms. Vector spaces over $F$ and scalar multiplication are those of vector spaces over a field; subspaces, spans $\operatorname{span}_F$ and linear independence are those of span and independence over a field; bases are those of bases over a field; finite-dimensionality and $\dim_F$ are those of dimension over a field; $F$-linear maps are those of linear maps over a field.

**Extension fields.** Let $E$ and $F$ be fields. $E$ is an **extension field** of $F$ if and only if $F$ is a subfield of $E$. In this case $F \subseteq E$ and the operations of the field $F$ are those of $E$ restricted to $F$. We say "$E$ is an extension field of $F$" in words, without a symbol.

**Finite extensions and degree.** Let $E$ be an extension field of $F$, and suppose that $E$, regarded as a vector space over $F$ by item (1)(i) below, is finite-dimensional over $F$. Then $E$ is called a **finite extension** of $F$, and $\dim_F E$ is called the **degree** of $E$ over $F$, written $[E : F]$. If $E$ is infinite-dimensional over $F$, no degree is defined. The brackets $[\ :\ ]$ look like the index $[G : H]$ of groups, but when the entries are fields they denote the degree.

The following hold.

1. (Vector space) Let $F$ be a subfield of a field $E$.
   - (i) With the addition of $E$ and, as scalar multiplication, the function $F \times E \to E$ whose value at $(c, v) \in F \times E$ is the product $cv$ in $E$, $E$ is a vector space over $F$. Its zero vector is the $0$ of $E$, the additive inverse of $v$ is $-v$ in $E$, and the sum $\sum$ of a list of vectors is the finite sum in the ring $E$. From now on an extension field $E$ regarded as a vector space over $F$ always carries these operations. If $E = F$, this is the vector space $F$ of item (3)(iv) of vector spaces over a field.
   - (ii) (Fields in between) If $K$ is a subfield of $E$ with $F \subseteq K$, then $F$ is a subfield of the field $K$ and $K$ is a subspace of the vector space $E$ over $F$. The vector space $K$ over $F$ given by (i) is the same as the subspace $K$ with the operations of item (1)(ii) of span and independence over a field.
2. (Degree) Let $F$ be a subfield of a field $E$.
   - (i) If $E$ is a finite extension of $F$, then $[E : F] \ge 1$.
   - (ii) If $E = F$, then $E$ is a finite extension of $F$ and $[E : F] = 1$. Conversely, if $E$ is a finite extension of $F$ with $[E : F] = 1$, then $E = F$.
   - (iii) If $K$ is a subfield of $E$ with $F \subseteq K$ and $E$ is a finite extension of $F$, then $K$ is a finite extension of $F$, $[K : F] \le [E : F]$, and $[K : F] = [E : F]$ if and only if $K = E$.
3. (Ring homomorphisms between fields) Let $K$ and $L$ be fields and $\varphi : K \to L$ a ring homomorphism.
   - (i) $\varphi$ is either the zero homomorphism or injective.
   - (ii) $\varphi$ is injective if and only if $\varphi(1) = 1$.
   - (iii) If $\varphi$ is injective, then $\varphi(K)$ is a subfield of $L$, $\varphi(a^{-1}) = \varphi(a)^{-1}$ for every nonzero $a \in K$, and $\varphi$ declared as a function $\varphi : K \to \varphi(K)$ is a ring isomorphism. Hence $L$ is an extension field of $\varphi(K)$.
4. (Homomorphisms fixing $F$ are linear) Let $F$ be a subfield of a field $E$ and also a subfield of a field $E'$. If $\tau : E \to E'$ is a ring homomorphism with $\tau(c) = c$ for every $c \in F$, then:
   - (i) $\tau(1) = 1$, $\tau$ is injective, and $\tau$ is an $F$-linear map from the vector space $E$ over $F$ (regarded via (1)(i)) to $E'$.
   - (ii) If $E$ and $E'$ are finite extensions of $F$ and $[E : F] = [E' : F]$, then $\tau : E \to E'$ is bijective and a ring isomorphism.
5. (Injective homomorphisms and degree) Let $E$ and $E'$ be fields, $\tau : E \to E'$ an injective ring homomorphism, and $F$ a subfield of $E$.
   - (i) $\tau(F)$ and $\tau(E)$ are subfields of $E'$, and $\tau(F)$ is a subfield of the field $\tau(E)$.
   - (ii) If $n \ge 0$ and a list $v_1, \dots, v_n$ of length $n$ is a basis of the vector space $E$ over $F$, then the list $\tau(v_1), \dots, \tau(v_n)$ is a basis of the vector space $\tau(E)$ over $\tau(F)$.
   - (iii) $E$ is a finite extension of $F$ if and only if $\tau(E)$ is a finite extension of $\tau(F)$, and in that case $[\tau(E) : \tau(F)] = [E : F]$.
6. (Ring isomorphisms carry fields to fields) If $E$ is a field, $R$ is a ring and $\varphi : E \to R$ is a ring isomorphism, then $R$ is a field and $\varphi(1)$ is the unity of $R$.
7. (Integers modulo $p$) If $p$ is a prime, the only subfield of the field $\mathbb{Z}_p$ (item (3) of finite integral domains are fields) is $\mathbb{Z}_p$ (item (6) of subfields). Hence, for a field $F$, $\mathbb{Z}_p$ is an extension field of $F$ if and only if $F = \mathbb{Z}_p$, and then $[\mathbb{Z}_p : F] = 1$.
:::

## 직관

큰 체 $E$ 안에 작은 체 $F$가 같은 연산으로 들어 있으면, $E$를 $F$를 넓힌 체로 봅니다. 이때 $E$의 원소에 $F$의 원소를 곱하는 것을 "스칼라배"로 읽으면 $E$는 $F$ 위의 벡터공간이 되고((1)), 그 차원이 차수 $[E : F]$입니다. 유한 확대에서 차수는 "$E$의 원소를 좌표로 적는 데 $F$의 원소가 몇 개 필요한가"를 셉니다. 좌표가 하나면 충분한 것, 곧 차수가 $1$인 것은 넓히지 않은 경우 $E = F$뿐입니다((2)의 (ii)).

체 사이의 환 준동형은 영 준동형이 아니면 체를 다른 체 안으로 그대로 옮겨 놓습니다((3)). $0$이 아닌 원소 하나가 $0$으로 가면, 그 원소의 역원을 곱해 모든 원소를 만들 수 있으므로 모든 원소가 $0$으로 갑니다. 그래서 영 준동형이 아니면 단사이고, $\varphi(1)\varphi(1) = \varphi(1)$에서 $\varphi(1) = 1$이 나옵니다. 이 논법은 정의역이 체라는 것($0$이 아닌 원소마다 역원이 있다)과 공역이 정역이라는 것을 씁니다. 체가 아닌 환 사이에서는 $1$을 $1$도 $0$도 아닌 원소로 보내는 환 준동형이 있을 수 있습니다(아래 반례).

(5)는 한 체를 단사인 환 준동형으로 다른 체 안에 옮기면 차수가 바뀌지 않는다는 것입니다. 이 강의는 한 체를 다른 체 안에 넣을 때 두 체를 같은 것으로 보지 않으므로, 옮긴 뒤의 체 $\tau(F) \subseteq \tau(E)$에 대해 차수를 따로 말하고 그것이 원래 차수와 같음을 이 진술로 확인합니다.

## 증명

:::idea
(1)은 벡터공간의 조건이 환의 결합·분배법칙과 $1 \in F$에서 나온다는 것이고, (2)는 차원에 관한 [[basis-extension-over-a-field|기저로 늘리기와 줄이기]]를 쓴다. (3)은 $0$이 아닌 원소의 역원으로 핵을 다루고, (5)는 단사인 준동형이 일차결합을 일차결합으로 옮긴다는 데서 나온다.
:::

:::hint
(3)에서 $a \ne 0$이고 $\varphi(a) = 0$이면, 모든 $b \in K$에 대하여 $b = (ba^{-1})a$입니다.
:::

:::hint
(2)의 (ii)의 뒤 방향에서는 길이 $1$인 열 $1$이 일차독립이라는 것과, 길이가 차원과 같은 일차독립인 열은 기저라는 것을 씁니다.
:::

:::proof
**쓰는 사실.** "부분체의 (n)"은 [[subfield|부분체]]의 (n), "준동형의 (n)"은 [[ring-homomorphism|환 준동형]]의 (n), "생성·독립의 (n)"은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 (n), "차원의 (n)"은 [[dimension-over-a-field|체 위의 차원]]의 (n)이다. 체는 단위원을 갖는 가환환이므로 $1 \ne 0$이고([[ring-basic-properties|환의 기본 성질]]의 (7)), [[field|가역원과 체]]의 (3)에 의해 정역이다.

**1.** (i) [[ring|환]]의 정의에 의해 $(E, +)$는 아벨군이다. $c, d \in F$, $u, v \in E$이면 $F$에서의 합과 곱은 $E$에서의 것과 같으므로(부분체의 (3)의 (i)) 스칼라배의 조건은 $E$에서의 등식 $c(dv) = (cd)v$, $(c + d)v = cv + dv$, $c(u + v) = cu + cv$, $1v = v$이다. 앞의 셋은 $E$의 곱셈의 결합법칙과 분배법칙이고, 마지막은 체 $F$의 $1$이 $E$의 $1$이라는 것(부분체의 (3)의 (i))과 $1$이 $E$의 곱셈의 항등원이라는 것이다. 따라서 $E$는 $F$ 위의 벡터공간이다. [[vector-space-over-a-field|체 위의 벡터공간]]의 표기에서 영벡터와 덧셈 역원은 군 $(E, +)$의 항등원과 역원, 곧 $E$의 $0$과 $-v$이고, 벡터의 열의 합은 덧셈군 $(E, +)$에서의 [[finite-sums-in-a-ring|환의 유한 합]]이므로 환 $E$의 유한 합과 같다. $E = F$이면 덧셈과 스칼라배가 $F$의 덧셈과 곱셈 $F \times F \to F$이므로 체 위의 벡터공간의 (3)의 (iv)의 것과 같다.

(ii) $F \subseteq K$이고 $F$는 $E$의 부분체이므로 부분체의 (5)의 (i)에 의해 $F$는 체 $K$의 부분체이다. $0 \in K$이고, $u, v \in K$이면 $u + v \in K$이며, $c \in F \subseteq K$이고 $v \in K$이면 $cv \in K$이다(부분체의 (1)). 따라서 $K$는 $F$ 위의 벡터공간 $E$의 부분공간이다. 생성·독립의 (1)의 (ii)의 연산은 $E$의 덧셈을 $K$로 제한한 것과 스칼라배를 $F \times K$로 제한한 것이다. (i)를 체 $K$와 그 부분체 $F$에 쓴 연산은 체 $K$의 덧셈과, $(c, v) \in F \times K$에서 체 $K$에서의 곱 $cv$를 값으로 하는 함수이고, 체 $K$의 연산은 $E$의 연산을 $K$로 제한한 것이므로 두 쪽의 연산은 같다.

**2.** (i) $1 \ne 0$이므로 $E \ne \{0\}$이고, 차원의 (6)에 의해 $\dim_F E \ne 0$이다. $\dim_F E$는 $0$ 이상인 정수이므로 $[E : F] \ge 1$이다.

(ii) $E = F$이면 (1)의 (i)에 의해 $E$는 체 위의 벡터공간의 (3)의 (iv)의 $F$이고, 차원의 (6)에 의해 $F$ 위에서 $1$차원이다. 거꾸로 $[E : F] = 1$이라 하자. $1 \ne 0$이므로 생성·독립의 (3)의 (iii)에 의해 항이 $1$ 하나인 길이 $1$인 열은 일차독립이고, [[basis-extension-over-a-field|기저로 늘리기와 줄이기]]의 (3)에 의해 $E$의 기저이다. 따라서 모든 $v \in E$에 대하여 $v = c1 = c$인 $c \in F$가 있고, $v \in F$이다. $E \subseteq F$이고 $F \subseteq E$이므로 $E = F$이다.

(iii) (1)의 (ii)에 의해 $K$는 $F$ 위의 벡터공간 $E$의 부분공간이고, 기저로 늘리기와 줄이기의 (5)에 의해 $K$는 $F$ 위에서 유한차원이며 $\dim_F K \le \dim_F E$이고, $\dim_F K = \dim_F E$이면 $K = E$이다. (1)의 (ii)에 의해 이 차원은 (1)의 (i)로 본 $K$의 차원이므로, $K$는 $F$의 유한 확대이고 $[K : F] \le [E : F]$이다. $K = E$이면 두 차수는 같은 벡터공간의 차원이므로 같다.

**3.** (i) $\varphi$가 단사가 아니라 하자. 준동형의 (2)에 의해 $\operatorname{Ker}\varphi \ne \{0\}$이므로 $\varphi(a) = 0$이고 $a \ne 0$인 $a \in K$가 있다. 모든 $b \in K$에 대하여 $b = (ba^{-1})a$이므로 $\varphi(b) = \varphi(ba^{-1})\varphi(a) = \varphi(ba^{-1}) \cdot 0 = 0$이다(환의 기본 성질의 (1)). 따라서 $\varphi$는 영 준동형이다.

(ii) $\varphi$가 단사라 하자. 준동형의 (1)에 의해 $\varphi(0) = 0$이고 $1 \ne 0$이므로 $\varphi(1) \ne 0$이다. $\varphi(1)\varphi(1) = \varphi(1 \cdot 1) = \varphi(1)$이고 $L$은 정역이므로 [[integral-domain|영인자와 정역]]의 (5)에 의해 $\varphi(1) = 1$이다. 거꾸로 $\varphi(1) = 1$이면 $1 \ne 0$이므로 $\varphi$는 영 준동형이 아니고, (i)에 의해 단사이다.

(iii) (ii)에 의해 $\varphi(1) = 1$이므로 $1 \in \varphi(K)$이다. $y, z \in \varphi(K)$이면 $y = \varphi(a)$, $z = \varphi(b)$인 $a, b \in K$가 있고, 준동형의 (1)과 정의에 의해 $y - z = \varphi(a - b)$, $yz = \varphi(ab)$는 $\varphi(K)$에 속한다. $a \ne 0$이면 $\varphi(a)\varphi(a^{-1}) = \varphi(aa^{-1}) = \varphi(1) = 1$이고 $L$은 가환이므로 $\varphi(a^{-1})\varphi(a) = 1$이다. 가역원과 체의 정의에서 역원은 하나뿐이므로 $\varphi(a)^{-1} = \varphi(a^{-1})$이다. 특히 $y = \varphi(a) \ne 0$이면 $a \ne 0$이고($\varphi(0) = 0$) $y^{-1} = \varphi(a^{-1}) \in \varphi(K)$이다. 부분체의 (1)에 의해 $\varphi(K)$는 $L$의 부분체이다. [[first-isomorphism-theorem-for-rings|환의 제1 동형 정리]]의 (5)에 의해 $\varphi : K \to \varphi(K)$는 환 동형사상이다. 확대체의 정의에 의해 $L$은 $\varphi(K)$의 확대체이다.

**4.** (i) 부분체의 (3)의 (i)에 의해 체 $F$의 $1$은 $E$의 $1$이고 $E'$의 $1$이기도 하다. $1 \in F$이므로 $\tau(1) = 1$이고, (3)의 (ii)에 의해 $\tau$는 단사이다. $u, v \in E$, $c \in F$이면 $\tau(u + v) = \tau(u) + \tau(v)$이고 $\tau(cv) = \tau(c)\tau(v) = c\,\tau(v)$이다. (1)의 (i)에 의해 이 등식의 $cv$와 $c\,\tau(v)$는 $E$와 $E'$에서의 스칼라배이므로 $\tau$는 $F$-선형사상이다.

(ii) (i)에 의해 $\tau$는 단사인 $F$-선형사상이고 두 벡터공간은 유한차원이며 차원이 같다. [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 (6)에 의해 $\tau : E \to E'$은 전사이고, 따라서 전단사이다. $\tau$는 환 준동형이므로 환 동형사상이다.

**5.** (i) 준동형의 (3)의 (ii)에 의해 $\tau$를 $F$로 제한한 함수 $\tau|_F : F \to E'$은 환 준동형이고, $\tau$가 단사이므로 $\tau|_F$도 단사이다. (3)의 (iii)을 $\tau$와 $\tau|_F$에 쓰면 $\tau(E)$와 $\tau(F)$는 $E'$의 부분체이다. $\tau(F) \subseteq \tau(E)$이므로 부분체의 (5)의 (i)에 의해 $\tau(F)$는 체 $\tau(E)$의 부분체이다. 이제 (1)의 (i)로 $\tau(E)$를 $\tau(F)$ 위의 벡터공간으로 본다. 그 스칼라배와 덧셈은 $E'$의 곱셈과 덧셈을 제한한 것이고, 부분체의 (3)의 (iii)에 의해 $\tau(E)$의 원소의 유한 합은 $\tau(E)$에서 계산하든 $E'$에서 계산하든 같다.

(ii) $\tau$는 덧셈군의 준동형이므로(준동형의 (1)) [[finite-sums-in-a-ring|환의 유한 합]]의 (7)에 의해 스칼라의 열 $a_1, \dots, a_n$에 대하여
$$
\tau\Bigl(\sum_{k=1}^{n} a_k v_k\Bigr) = \sum_{k=1}^{n} \tau(a_k)\tau(v_k)
$$
이다. 생성: $y \in \tau(E)$이면 $y = \tau(x)$인 $x \in E$가 있고, $v$가 $E$를 생성하므로 $x = \sum_{k=1}^{n} a_k v_k$인 $F$의 원소의 열 $a$가 있다. 위 식에 의해 $y$는 $\tau(F)$의 원소 $\tau(a_k)$를 계수로 하는 $\tau(v_1), \dots, \tau(v_n)$의 일차결합이다. 일차독립: $\tau(F)$의 원소의 열 $\beta_1, \dots, \beta_n$이 $\sum_{k=1}^{n} \beta_k \tau(v_k) = 0$을 만족한다고 하자. $\tau|_F : F \to \tau(F)$는 전단사이므로 [[inverse-function|역함수]] $\rho : \tau(F) \to F$가 있고, $a_k = \rho(\beta_k)$로 두면 $\tau(a_k) = \beta_k$이다. 위 식에 의해 $\tau\bigl(\sum_{k=1}^{n} a_k v_k\bigr) = 0 = \tau(0)$이고 $\tau$는 단사이므로 $\sum_{k=1}^{n} a_k v_k = 0$이다. $v$가 일차독립이므로 모든 $k$에서 $a_k = 0$이고, $\beta_k = \tau(0) = 0$이다. 따라서 $\tau(v_1), \dots, \tau(v_n)$은 $\tau(E)$의 $\tau(F)$ 위의 기저이다.

(iii) $E$가 $F$의 유한 확대이고 $[E : F] = n$이면 차원의 (4)에 의해 $E$에 길이 $n$인 기저가 있고, (ii)에 의해 $\tau(E)$에 길이 $n$인 $\tau(F)$ 위의 기저가 있으므로 $\tau(E)$는 $\tau(F)$의 유한 확대이고 $[\tau(E) : \tau(F)] = n$이다. 거꾸로 $\tau(E)$가 $\tau(F)$의 유한 확대라 하자. (3)의 (iii)에 의해 $\tau : E \to \tau(E)$는 환 동형사상이고, 준동형의 (6)의 (iii)에 의해 그 역함수 $\tau' : \tau(E) \to E$도 환 동형사상이다. $\tau'$은 단사이고 $\tau'(\tau(F)) = F$이다. 앞 문장을 체 $\tau(E)$, $E$, 부분체 $\tau(F)$, 준동형 $\tau'$에 쓰면 $E = \tau'(\tau(E))$는 $F = \tau'(\tau(F))$의 유한 확대이다.

**6.** $\varphi : E \to R$은 전사이므로 준동형의 (4)에 의해 $R = \varphi(E)$는 가환환이고, 준동형의 (5)에 의해 $\varphi(1)$은 $R$의 곱셈의 항등원이다. $\varphi$는 단사이고 $1 \ne 0$이므로 $\varphi(1) \ne \varphi(0) = 0$이다. 따라서 $R$은 단위원 $\varphi(1)$을 갖는 가환환이다. $y \in R$, $y \ne 0$이면 $y = \varphi(a)$인 $a \in E$가 있고 $a \ne 0$이다. $\varphi(a)\varphi(a^{-1}) = \varphi(1) = \varphi(a^{-1})\varphi(a)$이므로 $y$는 $R$의 가역원이다. 따라서 $R$은 체이다.

**7.** 첫 문장은 부분체의 (6)이다. $\mathbb{Z}_p$가 $F$의 확대체이면 $F$는 $\mathbb{Z}_p$의 부분체이므로 $F = \mathbb{Z}_p$이다. 거꾸로 $F = \mathbb{Z}_p$이면 부분체의 (4)에 의해 $F$는 $\mathbb{Z}_p$의 부분체이고, (2)의 (ii)에 의해 $[\mathbb{Z}_p : F] = 1$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3[X]/(X^2 + X + [2])\mathbb{Z}_3[X]$의 상수의 잉여류]
$\mathbb{Z}_3$은 체입니다(유한 정역은 체의 (3)). $h = X^2 + X + [2] \in \mathbb{Z}_3[X]$에 $[0], [1], [2]$를 넣으면 $[2]$, $[4] = [1]$, $[8] = [2]$이므로 $h$는 $\mathbb{Z}_3$ 안에 근이 없고, 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. $I = h\mathbb{Z}_3[X]$로 두면 [[irreducible-polynomial-and-maximal-ideal|기약 다항식과 극대 아이디얼]]의 (3)에 의해 $L = \mathbb{Z}_3[X]/I$는 체입니다.

상수 다항식 $c$를 $c + I$로 보내는 함수 $\iota : \mathbb{Z}_3 \to L$은 [[polynomial-ring|다항식환]]의 (3)의 $\kappa$와 [[quotient-ring|몫환]]의 (5)의 표준 준동형의 합성이므로 환 준동형입니다(환 준동형의 (6)의 (i)). $I$의 영이 아닌 원소 $hq$는 차수가 $2 + \deg q \ge 2$이므로([[degree-of-a-polynomial|다항식의 차수]]의 (6)) 상수 다항식 $[1]$은 $I$에 속하지 않고, 몫환의 (3)에 의해 $\iota([1]) = [1] + I \ne 0 + I$입니다. (3)에 의해 $\iota$는 단사이고 $\iota(\mathbb{Z}_3) = \{[0] + I, [1] + I, [2] + I\}$는 $L$의 부분체이며, $L$은 $\iota(\mathbb{Z}_3)$의 확대체입니다.

차수를 셉니다. [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (2)와 다항식의 차수의 (1)에 의해 모든 $f \in \mathbb{Z}_3[X]$는 $f = hq + a + bX$($q \in \mathbb{Z}_3[X]$, $a, b \in \mathbb{Z}_3$)로 쓰이고, 몫환의 (2), (3)에 의해 $f + I = (a + bX) + I = (a + I)\,([1] + I) + (b + I)(X + I)$입니다. 곧 길이 $2$인 열 $[1] + I$, $X + I$는 $\iota(\mathbb{Z}_3)$ 위에서 $L$을 생성합니다. $(a + I)([1] + I) + (b + I)(X + I) = 0 + I$이면 $a + bX \in I$이고, 차수가 $2$보다 작은 $I$의 원소는 $0$뿐이므로 $a = b = [0]$입니다. 그래서 이 열은 기저이고 $[L : \iota(\mathbb{Z}_3)] = 2$입니다. $L \ne \iota(\mathbb{Z}_3)$이라는 것과도 맞습니다((2)의 (ii)).
:::

:::counterexample[$\mathbb{Z}_6$에서 $P$를 $[3]P$로 보내는 환 준동형]
$\mathbb{Z}_6$의 각 원소 $P$에 $[3]P$를 대응시키는 함수 $\varphi : \mathbb{Z}_6 \to \mathbb{Z}_6$을 봅시다. 분배법칙으로 $\varphi(P + Q) = [3]P + [3]Q$이고, $[9] = [3]$이므로 $\varphi(P)\varphi(Q) = [9]PQ = [3]PQ = \varphi(PQ)$입니다([[integers-modulo-n|법 n의 정수]]의 (2), (3)). 그래서 $\varphi$는 환 준동형입니다. 그런데 $\varphi([1]) = [3]$은 $[0]$도 $[1]$도 아니고, $\varphi([2]) = [6] = [0]$이므로 $\varphi$는 단사도 영 준동형도 아닙니다. $\mathbb{Z}_6$은 체가 아니므로 (3)과 어긋나지 않습니다. (3)의 증명은 정의역의 $0$이 아닌 원소에 역원이 있다는 것과 공역이 정역이라는 것을 쓰고, $\mathbb{Z}_6$에서는 $[2]$에 역원이 없으며 $[2][3] = [0]$입니다.
:::

## 확인 질문

:::check[환 준동형 $\varphi : \mathbb{Z}_5 \to \mathbb{Z}_5$가 $\varphi([1]) \ne [0]$을 만족하면 $\varphi$는 무엇인가?]
항등함수입니다. $\mathbb{Z}_5$는 체이고(유한 정역은 체의 (3)), $\varphi([1]) \ne [0]$이므로 $\varphi$는 영 준동형이 아니며, (3)의 (i), (ii)에 의해 $\varphi([1]) = [1]$입니다. 덧셈을 보존하므로 $\varphi([2]) = \varphi([1] + [1]) = [2]$이고, 같은 계산으로 $\varphi([3]) = [3]$, $\varphi([4]) = [4]$이며, $\varphi([0]) = [0]$입니다.
:::

:::check[체 $F$가 $\mathbb{Z}_7$의 부분체이면 $[\mathbb{Z}_7 : F]$는 얼마인가?]
$1$입니다. $7$은 소수이므로 (7)에 의해 $F = \mathbb{Z}_7$이고, (2)의 (ii)에 의해 $[\mathbb{Z}_7 : \mathbb{Z}_7] = 1$입니다.
:::
