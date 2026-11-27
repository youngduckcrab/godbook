---
title: 유한체의 예
title_en: Examples of Finite Fields
aliases: [원소가 9개인 체, 원소가 25개인 체, examples of finite fields, field with nine elements, field with twenty-five elements]
kind: proposition
field: field-theory
msc: ["12E20"]
level: undergrad
summary: "Z_3 위의 X² + 1 로 만든 크로네커 체는 원소가 9 개이고, 곱셈군의 생성원은 두 좌표가 모두 0 이 아닌 네 원소이며, 프로베니우스 사상은 α 를 −α 로 보낸다. Z_5 위의 X² − 2 로 만든 체는 원소가 25 개이고, β 의 위수는 8, 2 + β 의 위수는 24 이다. 두 체의 부분체는 소체와 자기 자신뿐이다."
requires: [mathematical-induction, finite-set, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, prime-number, well-ordering-principle, divisibility, greatest-common-divisor, prime-power-divisors, group, power-in-a-group, laws-of-exponents, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, order-of-a-power, order-divides-group-order, integers-modulo-n, ring, ring-basic-properties, ring-homomorphism, field, finite-integral-domain-is-a-field, finite-products-in-a-commutative-ring, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial, subfield, extension-field, kronecker-theorem, splitting-field-examples, frobenius-map, order-of-a-finite-field, finite-multiplicative-subgroup-is-cyclic, subfields-of-a-finite-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Example 22.13 (p.281–282); 22.4절 Exercises, 연습문제 4, 5 (p.289), 21, 22 (p.290); 21.1절 Extension Fields, Example 21.2 (p.261), Example 21.14 (p.264); 21.5절 Exercises, 연습문제 5 (p.276); 17.3절 Irreducible Polynomials, Example 17.12 (p.215)"
    checked: original
    note: "출처는 유한체의 예로 Example 21.2(p.261, Z_2[x]/⟨x² + x + 1⟩, 원소 4개)와 Example 22.13(p.281–282, GF(2^4) = Z_2[x]/⟨1 + x + x^4⟩ 과 생성원 α 의 거듭제곱표)을 들고, 원소 8개, 27개인 체를 만드는 것을 연습문제 21.5.5(p.276), 22.4.4, 22.4.5(p.289)로 둔다. 이 항목의 두 체(Z_3 위의 X² + 1, Z_5 위의 X² − 2)는 그것들과 다른 체이고, 원소를 a·1 + b·α 로 쓰고 생성원의 거듭제곱을 계산하는 것은 Example 22.13 과 같은 발상이다. α² = −1 로 원소를 a + bα 꼴로 계산하는 것은 출처 Example 21.14(p.264)가 R[x]/⟨x² + 1⟩ 에 쓰는 것과 같은 발상이다. X² − [2] 가 Z_5 위에서 기약임을 근이 없음으로 보이는 것은 출처 Example 17.12(p.215)와 같은 발상이다. (1)의 (iii)과 (2)의 (iii)의 프로베니우스 사상은 출처 연습문제 22.4.21(p.290, 프로베니우스 사상은 위수 n 인 자기동형이다)을 n = 2 에서 계산한 것이고, 확인 질문 '$L$에서 $\\operatorname{Fr}_3$은 $X^2 + 1$의 두 근을 어디로 보내는가?' 는 그 연습문제와 같은 대상을 다룬다. 예시 '원소가 $9$개인 체에서 $1 + \\alpha$의 거듭제곱과 역원' 은 출처 Example 22.13 의 거듭제곱표와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 위수·생성원을 프로그램으로 재계산, (7) 경계값). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원의 군 $F^{\times}$, 역원은 [[field|가역원과 체]]의 것이고, $0$, $1$, $-a$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이다. 크로네커 정리의 설정 $L$, $\iota$, $\alpha$는 [[kronecker-theorem|크로네커 정리]]의 것이다. 원소의 위수와 생성원은 [[order-of-an-element|원소의 위수]]와 [[cyclic-subgroup|순환 부분군]]의 것이고, 프로베니우스 사상 $\operatorname{Fr}_q$는 [[frobenius-map|프로베니우스 사상]], 소체 $\mathbb{P}_F$는 [[order-of-a-finite-field|유한체의 원소 개수]], 부분체는 [[subfield|부분체]]의 것이다. 거듭제곱 $x^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

1. (원소가 $9$개인 체) $h = X^2 + [1] \in \mathbb{Z}_3[X]$로 만든 크로네커 정리의 설정을 $L$, $\iota$, $\alpha$라 하자([[splitting-field-examples|분해체의 예]]의 (3)에 의해 $h$는 기약이고 $L$은 원소가 $9$개인 체이다).
   - (i) $L$의 모든 원소는 $0 \le a, b \le 2$인 정수 $a$, $b$에 대한 $a \cdot 1 + b \cdot \alpha$로 정확히 한 가지로 쓰인다. $\alpha^2 = -1$이고, $\operatorname{char} L = 3$이며, $\mathbb{P}_L = \iota(\mathbb{Z}_3) = \{0, 1, 2 \cdot 1\}$이다.
   - (ii) $\alpha$의 위수는 $4$이다. $L^{\times}$의 생성원은 정확히 $a \ne 0$, $b \ne 0$인 네 원소 $a \cdot 1 + b \cdot \alpha$이다.
   - (iii) 모든 정수 $a$, $b$에서 $\operatorname{Fr}_3(a \cdot 1 + b \cdot \alpha) = a \cdot 1 - b \cdot \alpha$이다. $L$의 부분체는 $\mathbb{P}_L$과 $L$ 둘뿐이고, $\mathbb{P}_L = \{x \in L : x^3 = x\}$이다.
2. (원소가 $25$개인 체) $g = X^2 - [2] \in \mathbb{Z}_5[X]$는 $\mathbb{Z}_5$ 위에서 기약이다. $g$로 만든 크로네커 정리의 설정을 $M$, $\iota'$, $\beta$라 하자.
   - (i) $M$은 원소가 $25$개인 체이고, $M$의 모든 원소는 $0 \le a, b \le 4$인 정수 $a$, $b$에 대한 $a \cdot 1 + b \cdot \beta$로 정확히 한 가지로 쓰인다. $\beta^2 = 2 \cdot 1$이고, $\operatorname{char} M = 5$이며, $\mathbb{P}_M = \iota'(\mathbb{Z}_5)$이다.
   - (ii) $\beta$의 위수는 $8$이고, $2 \cdot 1 + \beta$의 위수는 $24$이다. 따라서 $2 \cdot 1 + \beta$는 $M^{\times}$의 생성원이다.
   - (iii) 모든 정수 $a$, $b$에서 $\operatorname{Fr}_5(a \cdot 1 + b \cdot \beta) = a \cdot 1 - b \cdot \beta$이다. $M$의 부분체는 $\mathbb{P}_M$과 $M$ 둘뿐이다.
:::

:::english
Fields, the group of units $F^{\times}$ and inverses are those of the entry on units and fields, and $0$, $1$, $-a$ and integer multiples $k \cdot a$ are the notation of the entry on rings. The setting $L$, $\iota$, $\alpha$ of Kronecker's theorem is that of the entry on Kronecker's theorem. Orders of elements and generators are those of the entries on the order of an element and on cyclic subgroups; the Frobenius map $\operatorname{Fr}_q$ is that of the entry on the Frobenius map, the prime subfield $\mathbb{P}_F$ that of the entry on the number of elements of a finite field, and subfields that of the entry on subfields. Powers $x^k$ are those of the entry on finite products and powers in a commutative ring.

1. (A field with $9$ elements) Let $L$, $\iota$, $\alpha$ be the setting of Kronecker's theorem made from $h = X^2 + [1] \in \mathbb{Z}_3[X]$ (by (3) of the entry on examples of splitting fields, $h$ is irreducible and $L$ is a field with $9$ elements).
   - (i) Every element of $L$ can be written in exactly one way as $a \cdot 1 + b \cdot \alpha$ with integers $0 \le a, b \le 2$. Moreover $\alpha^2 = -1$, $\operatorname{char} L = 3$ and $\mathbb{P}_L = \iota(\mathbb{Z}_3) = \{0, 1, 2 \cdot 1\}$.
   - (ii) The order of $\alpha$ is $4$. The generators of $L^{\times}$ are exactly the four elements $a \cdot 1 + b \cdot \alpha$ with $a \ne 0$ and $b \ne 0$.
   - (iii) For all integers $a$, $b$, $\operatorname{Fr}_3(a \cdot 1 + b \cdot \alpha) = a \cdot 1 - b \cdot \alpha$. The only subfields of $L$ are $\mathbb{P}_L$ and $L$, and $\mathbb{P}_L = \{x \in L : x^3 = x\}$.
2. (A field with $25$ elements) $g = X^2 - [2] \in \mathbb{Z}_5[X]$ is irreducible over $\mathbb{Z}_5$. Let $M$, $\iota'$, $\beta$ be the setting of Kronecker's theorem made from $g$.
   - (i) $M$ is a field with $25$ elements, and every element of $M$ can be written in exactly one way as $a \cdot 1 + b \cdot \beta$ with integers $0 \le a, b \le 4$. Moreover $\beta^2 = 2 \cdot 1$, $\operatorname{char} M = 5$ and $\mathbb{P}_M = \iota'(\mathbb{Z}_5)$.
   - (ii) The order of $\beta$ is $8$ and the order of $2 \cdot 1 + \beta$ is $24$. Hence $2 \cdot 1 + \beta$ is a generator of $M^{\times}$.
   - (iii) For all integers $a$, $b$, $\operatorname{Fr}_5(a \cdot 1 + b \cdot \beta) = a \cdot 1 - b \cdot \beta$. The only subfields of $M$ are $\mathbb{P}_M$ and $M$.
:::

## 직관

크로네커 정리로 만든 체에서는 원소를 소체의 원소 둘로 된 좌표로 적고, 덧붙인 원소의 제곱을 소체의 원소로 바꾸며 계산합니다. 원소가 $9$개인 체 $L$에서 $\alpha^2 = -1$은 복소수의 $i^2 = -1$과 같은 규칙이고, 실수 대신 $\mathbb{Z}_3$의 세 원소가 좌표에 들어갑니다. 프로베니우스 사상이 $\alpha$를 $-\alpha$로 보내는 것도 켤레복소수와 닮았습니다.

곱셈군이 순환군이라는 것([[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4))은 존재만 말하고, 어느 원소가 생성원인지는 계산해 보아야 압니다. $L$에서는 소체 밖의 원소 가운데 $\pm\alpha$를 뺀 네 원소가 모두 생성원이지만, 원소가 $25$개인 $M$에서는 소체 밖의 원소라도 생성원이 아닐 수 있습니다(아래 반례).

## 증명

:::idea
원소의 꼴은 크로네커 정리의 (2)와 $\iota([k]) = k \cdot 1$에서, 위수는 거듭제곱을 직접 계산하고 위수가 군의 원소 개수를 나눈다는 것에서, 생성원의 개수는 순환군의 생성원이 $\gcd(k, 8) = 1$인 $k$에 대한 거듭제곱이라는 것에서 나온다. 부분체는 유한체의 부분체의 (4)로 센다.
:::

:::hint
(2)의 (ii)에서 $(2 \cdot 1 + \beta)^8$과 $(2 \cdot 1 + \beta)^{12}$을 계산한다. $24$의 양의 약수 가운데 $24$가 아닌 것은 모두 $8$이나 $12$를 나눈다.
:::

:::proof
**쓰는 사실.** "크로네커의 (n)"은 [[kronecker-theorem|크로네커 정리]]의 (n), "원소 개수의 (n)"은 [[order-of-a-finite-field|유한체의 원소 개수]]의 (n), "프로베니우스의 (n)"은 [[frobenius-map|프로베니우스 사상]]의 (n)이다. 정수배의 계산은 [[ring-basic-properties|환의 기본 성질]]의 (5), (6)과 [[laws-of-exponents|지수법칙]]의 (6)을 쓰고, 표수 $3$(또는 $5$)인 환에서 정수 $k$, $l$이 $k \equiv l$($\bmod 3$ 또는 $\bmod 5$)이면 $k \cdot 1 = l \cdot 1$이라는 것은 [[characteristic-of-a-ring|환의 표수]]의 (1)과 지수법칙의 (6)에서 나온다. 곱의 계산은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (6)이다.

**두 체에 공통인 것.** $K = \mathbb{Z}_p$($p = 3$ 또는 $5$), 기약 다항식 $u = X^2 - [c]$($c = -1$ 또는 $2$)와 그 크로네커 정리의 설정 $N$, $\iota_0$, $\gamma$를 생각한다. 크로네커의 (1)의 (i), (ii)에 의해 $N$은 체이고 $\iota_0$는 $\iota_0([1]) = 1$인 단사인 환 준동형이다. 환의 표수의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} N = p$이고, 원소 개수의 (2)의 (i)에 의해 $\iota_0 = \eta$, 곧 모든 정수 $k$에서 $\iota_0([k]) = k \cdot 1$이며 $\iota_0(\mathbb{Z}_p) = \mathbb{P}_N$이다. 크로네커의 (2)의 (ii)에 의해 $N$의 모든 원소는 $a_0, a_1 \in \mathbb{Z}_p$에 대한 $\iota_0(a_0) + \iota_0(a_1)\gamma$로 정확히 한 가지로 쓰인다. [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $\mathbb{Z}_p$의 원소는 $0 \le a \le p - 1$인 정수 $a$에 대한 $[a]$로 정확히 한 가지로 쓰이고, $\iota_0([a]) + \iota_0([b])\gamma = a \cdot 1 + (b \cdot 1)\gamma = a \cdot 1 + b \cdot \gamma$이다. 따라서 $N$의 원소는 $0 \le a, b \le p - 1$인 $a \cdot 1 + b \cdot \gamma$로 정확히 한 가지로 쓰인다. 크로네커의 (1)의 (iv)에 의해 $u^{\iota_0}(\gamma) = 0$이고, [[evaluation-homomorphism|대입 준동형]]의 (1), (3)에 의해 이것은 $\gamma^2 - \iota_0([c]) = 0$, 곧 $\gamma^2 = c \cdot 1$이다. 크로네커의 (4)에 의해 $|N| = p^2$이다. $|N| = p^2$이므로 [[subfields-of-a-finite-field|유한체의 부분체]]의 (4)에 의해 $N$의 부분체는 $2$의 양의 약수 $1$, $2$에 대응하는 $N_1 = \mathbb{P}_N$과 $N_2 = N$ 둘뿐이다(그 항목의 (2)).

또 $\gamma^p = \gamma \cdot (\gamma^2)^{(p-1)/2} = \gamma \cdot c^{(p-1)/2} \cdot 1$이고(마지막 등호의 $(c \cdot 1)^k = c^k \cdot 1$은 [[ring-basic-properties|환의 기본 성질]]의 (6)의 $(m \cdot 1)(n \cdot 1) = (mn) \cdot 1$과 $k$에 대한 귀납법으로 얻는다), 프로베니우스의 (1)에 의해 모든 정수 $a$, $b$에서 $\operatorname{Fr}_p(a \cdot 1 + b \cdot \gamma) = a \cdot 1 + b \cdot \gamma^p$이다.

**1의 증명.** $p = 3$, $c = -1$로 위를 쓴다. $h = X^2 + [1] = X^2 - [-1]$이므로 (i)의 원소의 꼴, $\alpha^2 = (-1) \cdot 1 = -1$, $\operatorname{char} L = 3$, $\mathbb{P}_L = \iota(\mathbb{Z}_3) = \{0 \cdot 1, 1 \cdot 1, 2 \cdot 1\} = \{0, 1, 2 \cdot 1\}$을 얻는다.

(ii) $\alpha^2 = -1$이고 $\alpha^4 = (\alpha^2)^2 = 1$이다. $-1 = 2 \cdot 1$이고 원소의 꼴이 한 가지이므로 $-1 \ne 1$이다. 따라서 [[order-of-an-element|원소의 위수]]의 (2)에 의해 $\alpha$의 위수는 $4$를 나누고 $2$를 나누지 않으므로 $4$이다($4$의 양의 약수는 $1$, $2$, $4$). 같은 이유로 $(2 \cdot \alpha)^2 = 4 \cdot \alpha^2 = \alpha^2 = -1$이므로 $2 \cdot \alpha = -\alpha$의 위수도 $4$이다. $1$의 위수는 $1$이고, $(2 \cdot 1)^2 = 4 \cdot 1 = 1$이며 $2 \cdot 1 \ne 1$이므로 $2 \cdot 1$의 위수는 $2$이다.

[[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4)와 원소 개수의 (6)에 의해 $L^{\times}$는 원소가 $8$개인 순환군이고, $L^{\times} = \langle t \rangle$이며 $\operatorname{ord}(t) = 8$인 $t$가 있다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $L^{\times}$의 원소는 $0 \le k \le 7$인 $t^k$로 서로 다르고, [[order-of-a-power|거듭제곱의 위수]]의 (6)에 의해 $t^k$가 생성원인 것은 정확히 $\gcd(k, 8) = 1$, 곧 $k \in \{1, 3, 5, 7\}$일 때이다. 따라서 $L^{\times}$의 생성원 전체의 집합 $T$는 원소가 $4$개이다. 순환 부분군의 크기의 (4)에 의해 생성원의 위수는 $8$이므로 앞 문단의 네 원소 $1$, $2 \cdot 1$, $\alpha$, $2 \cdot \alpha$는 $T$에 속하지 않는다. $L^{\times}$에서 이 네 원소를 뺀 집합 $Q$는 $a \ne 0$, $b \ne 0$인 $a \cdot 1 + b \cdot \alpha$ 네 개이고([[disjoint-union-count|서로소인 합집합의 원소 개수]]의 (2)), $T \subseteq Q$이며 $|T| = |Q| = 4$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $T = Q$이다.

(iii) $(-1)^1 = -1$이므로 공통 부분에 의해 $\alpha^3 = (-1) \cdot \alpha = -\alpha$이고 $\operatorname{Fr}_3(a \cdot 1 + b \cdot \alpha) = a \cdot 1 + b \cdot (-\alpha) = a \cdot 1 - b \cdot \alpha$이다. 부분체는 공통 부분의 마지막 문장이고, 유한체의 부분체의 (2)에 의해 $\mathbb{P}_L = L_1 = \{x \in L : x^3 = x\}$이다.

**2의 증명.** $\mathbb{Z}_5$의 원소의 제곱은 $[0], [1], [4], [9] = [4], [16] = [1]$이므로 $[2]$가 아니고, $g$는 $\mathbb{Z}_5$ 안에 근이 없다. $\deg g = 2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $g$는 기약이다. $p = 5$, $c = 2$로 공통 부분을 쓰면 (i)을 얻는다.

(ii) $\beta^2 = 2 \cdot 1$, $\beta^4 = 4 \cdot 1 = -1$, $\beta^8 = 1$이다. $4 \cdot 1 \ne 1$이므로(원소의 꼴이 한 가지) $\beta^4 \ne 1$이고, 원소의 위수의 (2)에 의해 $\beta$의 위수는 $8$을 나누고 $4$를 나누지 않으므로 $8$이다($8$의 양의 약수는 $1, 2, 4, 8$).

$y = 2 \cdot 1 + \beta$라 하자. $5 \cdot 1 = 0$과 $\beta^2 = 2 \cdot 1$로 계산하면
$$
\begin{aligned}
y^2 &= 1 + 4 \cdot \beta, \\
y^4 &= 3 \cdot 1 + 3 \cdot \beta, \\
y^8 &= 2 \cdot 1 + 3 \cdot \beta, \\
y^{12} &= y^8 y^4 = 4 \cdot 1
\end{aligned}
$$
이다. 각 줄은 앞 줄을 제곱해 펼친 것이다. 곧 $y^2 = 4 \cdot 1 + 4 \cdot \beta + 2 \cdot 1$, $y^4 = 1 + 8 \cdot \beta + 32 \cdot 1$, $y^8 = 9 \cdot 1 + 18 \cdot \beta + 18 \cdot 1$이고, 마지막 줄은 $(2 \cdot 1 + 3 \cdot \beta)(3 \cdot 1 + 3 \cdot \beta) = 6 \cdot 1 + 15 \cdot \beta + 9 \cdot \beta^2 = 24 \cdot 1 + 15 \cdot \beta$이다. 원소의 꼴이 한 가지이므로 $y^8 \ne 1$, $y^{12} \ne 1$이다. 원소 개수의 (6)에 의해 $y^{24} = 1$이므로 $y$의 위수 $r$은 $24$를 나눈다. $24$의 양의 약수 가운데 $24$가 아닌 것($1, 2, 3, 4, 6, 8, 12$)은 모두 $8$이나 $12$를 나누므로, $r \ne 24$이면 원소의 위수의 (2)에 의해 $y^8 = 1$이거나 $y^{12} = 1$이어서 모순이다. 따라서 $r = 24 = |M^{\times}|$이고, 순환 부분군의 크기의 (4)에 의해 $y$는 $M^{\times}$의 생성원이다.

(iii) 공통 부분에 의해 $\beta^5 = \beta \cdot (2 \cdot 1)^2 = 4 \cdot \beta = -\beta$이므로 $\operatorname{Fr}_5(a \cdot 1 + b \cdot \beta) = a \cdot 1 - b \cdot \beta$이다. 부분체는 공통 부분의 마지막 문장이다.
:::

## 예시와 반례

:::example[원소가 $9$개인 체에서 $1 + \alpha$의 거듭제곱과 역원]
(1)의 (ii)에 의해 $1 + \alpha$는 $L^{\times}$의 생성원입니다. $\alpha^2 = -1$과 $3 \cdot 1 = 0$으로 거듭제곱을 차례로 계산하면
$$
\begin{aligned}
&1 + \alpha,\quad 2 \cdot \alpha,\quad 1 + 2 \cdot \alpha,\quad 2 \cdot 1, \\
&2 \cdot 1 + 2 \cdot \alpha,\quad \alpha,\quad 2 \cdot 1 + \alpha,\quad 1
\end{aligned}
$$
입니다. 예를 들어 $(1 + \alpha)^2 = 1 + 2 \cdot \alpha + \alpha^2 = 2 \cdot \alpha$입니다. 여덟 원소가 모두 나오고, $(1 + \alpha)^8 = 1$이므로 $1 + \alpha$의 역원은 $(1 + \alpha)^7 = 2 \cdot 1 + \alpha$입니다. 실제로 $(1 + \alpha)(2 \cdot 1 + \alpha) = 2 \cdot 1 + 3 \cdot \alpha + \alpha^2 = 2 \cdot 1 - 1 = 1$입니다.
:::

:::counterexample[원소가 $25$개인 체에서 생성원이 아닌 $1 + \beta$]
$M$에서는 소체에 속하지 않는 원소라도 생성원이 아닐 수 있습니다. $z = 1 + \beta$라 하면
$$
\begin{aligned}
z^2 &= 3 \cdot 1 + 2 \cdot \beta, \\
z^4 &= 2 \cdot 1 + 2 \cdot \beta, \\
z^6 &= z^4 z^2 = 4 \cdot 1, \\
z^{12} &= (z^6)^2 = 16 \cdot 1 = 1
\end{aligned}
$$
입니다($z^2 = 1 + 2 \cdot \beta + 2 \cdot 1$, $z^4 = 9 \cdot 1 + 12 \cdot \beta + 8 \cdot 1$, $z^4 z^2 = 6 \cdot 1 + 10 \cdot \beta + 8 \cdot 1$). 그래서 $z$의 위수는 $12$ 이하이고 $24$가 아닙니다. 그래서 $z$는 $M^{\times}$의 생성원이 아닙니다. $z^4 \ne 1$이고 $z^6 = -1 \ne 1$이므로 $z$의 위수는 $12$입니다.
:::

## 확인 질문

:::check[$L$에서 $\operatorname{Fr}_3$은 $X^2 + 1$의 두 근을 어디로 보내는가?]
서로 바꿉니다. $L$에서 $X^2 + 1$의 근은 $\alpha$와 $-\alpha$이고(분해체의 예의 (3)), (1)의 (iii)에 의해 $\operatorname{Fr}_3(\alpha) = -\alpha$, $\operatorname{Fr}_3(-\alpha) = \alpha$입니다.
:::

:::check[$M$의 부분체 가운데 $\beta$를 원소로 갖는 것은?]
$M$뿐입니다. (2)의 (iii)에 의해 $M$의 부분체는 $\mathbb{P}_M$과 $M$이고, $\mathbb{P}_M = \iota'(\mathbb{Z}_5)$의 원소는 $a \cdot 1 + 0 \cdot \beta$ 꼴이므로 원소의 꼴이 한 가지라는 것((2)의 (i))에 의해 $\beta = 0 \cdot 1 + 1 \cdot \beta$는 $\mathbb{P}_M$에 속하지 않습니다.
:::
