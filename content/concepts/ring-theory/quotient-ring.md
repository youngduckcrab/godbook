---
title: 몫환
title_en: Quotient Ring
aliases: [잉여환, 인자환, 환의 표준 준동형, factor ring, quotient ring, R/I]
kind: theorem
field: ring-theory
msc: ["16"]
level: undergrad
summary: 환의 곱셈이 덧셈의 부분군 I의 잉여류의 관계와 호환되는 것은 정확히 I가 아이디얼일 때이다. 그때 잉여류 전체 R/I는 (a + I)(b + I) = ab + I로 환이 되고, 이것을 몫환이라 한다. 가환성과 곱셈의 항등원이 몫환으로 내려가고, R/I가 단위원을 갖는 환인 것은 I가 진아이디얼일 때이며, a를 a + I로 보내는 함수는 핵이 I인 전사 환 준동형이다. ℤ/nℤ는 환 ℤ_n과 같다.
requires: [set, subset, function, injective-surjective-bijective, binary-operation, operation-on-equivalence-classes, equivalence-classes-equal-iff-related, congruence-modulo-n, divisibility, division-theorem, well-ordering-principle, prime-number, even-and-odd, real-number-arithmetic, group, group-basic-properties, subgroup, subgroup-examples, number-groups, integers-modulo-n, left-coset, normal-subgroup, quotient-group, canonical-homomorphism, ring, ring-basic-properties, ring-examples, ring-homomorphism, ideal]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.3절 Theorem 16.29, 몫환의 이름(번호 없음), Theorem 16.30, 표준 준동형의 이름(번호 없음) p.197. 16.4절 Theorem 16.35 의 증명 p.198–199, Example 16.36, 16.39 p.199. 16.7절 연습문제 2, 5, 19 p.204–206
    checked: original
    note: "출처 Theorem 16.29(p.197)는 'I 가 R 의 아이디얼이면 몫군 R/I 는 곱셈 (r + I)(s + I) = rs + I 로 환이다'이다. 출처의 증명은 r′ = r + a, s′ = s + b (a, b ∈ I) 로 두고 r′s′ = rs + as + rb + ab 에서 as + rb + ab ∈ I 를 써서 곱이 잉여류의 대표에 따르지 않음을 보이고, 곱셈의 결합법칙과 분배법칙의 확인은 연습문제로 둔다(연습문제 16.19, p.206). 이 항목은 (1)을 동치류 위의 연산의 (3)으로 한쪽씩 확인하고, 결합법칙과 분배법칙을 같은 항목의 (4), (6)으로 얻는다. (1)의 (i), (ii)와 역방향(호환되면 아이디얼)은 출처에서 찾지 못했다(검색어 'well-defined.{0,80}ideal|ideal.{0,80}well-defined' 0건, 'independent of the choice' 3건은 Theorem 10.4, Theorem 16.29, Lemma 18.2). 몫환은 출처의 factor or quotient ring(p.197)이다. (3)은 출처에 명제로 없다. (4)의 (i)과 (ii)의 첫 문장은 출처가 Theorem 16.35 의 증명(p.198)에서 'R 이 가환환이면 R/M 도 가환환이다', '1 + M 은 R/M 의 항등원 노릇을 한다'라고 증명 없이 쓰는 것이다. 출처는 같은 정리의 역방향 증명(p.199)에서 'R/M 은 체이므로 적어도 두 원소 0 + M 과 1 + M 을 가지고, 따라서 M 은 진아이디얼이다'라고 쓴다. (4)의 (ii)의 동치와 (iii)은 출처에 명제로 없다(검색어 'R/R|zero ring' 0건). (5)의 첫 문장은 출처 Theorem 16.30(p.197)이고, 출처는 π 가 전사인 아벨군의 준동형이라는 것은 'Certainly' 로 넘기고 곱셈만 확인한다. 이름 natural or canonical homomorphism 도 p.197 에 있다. (5)의 마지막 문장은 출처에 명제로 없다. 출처는 Theorem 16.30 앞(p.197)에서 군 준동형과 정규부분군처럼 환 준동형과 아이디얼 사이에도 관계가 있다고 적는다. (6)은 출처 Example 16.39(p.199)가 ℤ/nℤ ≅ ℤ_n 이라고, Example 16.36(p.199)이 ℤ/pℤ ≅ ℤ_p 라고 증명 없이 쓰는 것을, 동형이 아니라 같은 환이라는 꼴로 진술하고 증명한 것이다. 첫째 예시는 출처 연습문제 16.5(a)(p.204, R = ℤ, I = 6ℤ 의 덧셈표와 곱셈표)와 같은 몫환에서 계산한 것이다. 둘째 예시(2ℤ/6ℤ)에서 단위원이 없는 환의 몫환이 단위원을 갖는 것을 보는 발상은 출처 연습문제 16.2(p.204, 단위원이 없는 행렬의 환에서 단위원을 갖는 부분환을 찾아라)와 같고, 계산은 부분환 항목의 첫째 확인 질문(ℤ₆ 의 {[0], [2], [4]} 의 단위원 [4])과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 일반 문장으로 읽히는 반례 제목(n = 1, 영환, 체인 경우)을 좁히고 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(R, +, \cdot)$가 [[ring|환]]이고 $I$가 덧셈군 $(R, +)$의 [[subgroup|부분군]]이라 하자. $0$, $1$, $-a$, $a - b$, 곱 $ab$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이고, 아이디얼, 진아이디얼, 왼쪽 흡수, 오른쪽 흡수는 [[ideal|아이디얼]]의 것이다. $(R, +)$는 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $I$는 정규부분군이다. [[left-coset|잉여류]]의 (8)의 덧셈 표기로, $a, b \in R$에 대하여 $a \sim_I b$인 것은 정확히 $-a + b \in I$일 때이고, $a$의 동치류는 $a + I = \{a + x : x \in I\}$이며, 몫집합 $R/{\sim_I}$는 $R/I = \{a + I : a \in R\}$이다(잉여류의 (2)). [[quotient-group|몫군]]의 (2)와 (6)에 의해 $R/I$는 덧셈
$$(a + I) + (b + I) = (a + b) + I$$
으로 아벨군이고, 이 덧셈은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (2)에서 $R$의 덧셈이 $R/{\sim_I} = R/I$에 정하는 연산이다. 호환은 동치류 위의 연산의 것이다.

1. (호환과 아이디얼) 
   - (i) 모든 $a, a', b \in R$에 대하여 $a \sim_I a'$이면 $ab \sim_I a'b$인 것은 정확히 $I$가 오른쪽 흡수를 만족할 때이다.
   - (ii) 모든 $a, a', b \in R$에 대하여 $a \sim_I a'$이면 $ba \sim_I ba'$인 것은 정확히 $I$가 왼쪽 흡수를 만족할 때이다.
   - (iii) 따라서 $R$의 곱셈이 $\sim_I$와 호환되는 것은 정확히 $I$가 $R$의 아이디얼일 때이다.

(2)–(6)에서 $I$는 $R$의 아이디얼이다.

2. (몫환) $R/I$ 위의 이항연산으로서 모든 $a, b \in R$에서 $a + I$와 $b + I$에서의 값이 $ab + I$인 것이 정확히 하나 있다. 이 값을 $(a + I)(b + I)$로 쓴다. 곧
   $$(a + I)(b + I) = ab + I$$
   이다. 이 연산은 동치류 위의 연산의 (2)에서 $R$의 곱셈이 $R/{\sim_I} = R/I$에 정하는 연산이다. 위의 덧셈과 이 곱셈으로 $(R/I, +, \cdot)$는 환이고, 이 환을 $I$에 대한 $R$의 **몫환**(quotient ring)이라 하며 "환 $R/I$"라 부른다. 곱 $(a + I)(b + I)$는 이 연산의 값이고, 두 잉여류의 원소끼리의 곱을 모은 집합이 아니다.
3. (영, 덧셈의 역원, 같을 조건) $a, b \in R$이고 $k$가 정수이면 다음이 성립한다. 환 $R/I$의 $0$은 $0 + I = I$이고, $-(a + I) = (-a) + I$, $(a + I) - (b + I) = (a - b) + I$, $k \cdot (a + I) = (k \cdot a) + I$이다. 또 $a + I = b + I$인 것은 정확히 $a - b \in I$일 때이고, 특히 $a + I = 0 + I$인 것은 정확히 $a \in I$일 때이다.
4. (가환환과 단위원) 
   - (i) $R$이 가환환이면 $R/I$도 가환환이다.
   - (ii) $R$이 단위원 $1$을 갖는 환이면 $1 + I$는 $R/I$의 곱셈의 항등원이다. 이때 환 $R/I$가 단위원을 갖는 환인 것은 정확히 $I$가 $R$의 진아이디얼일 때이고, 그때 $R/I$의 단위원은 $1 + I$이다.
   - (iii) 모든 환 $R$에서 $R/R = \{R\}$이고, 환 $R/R$은 [[ring|환]]의 (1)의 영환이다.
5. (표준 준동형) 각 $a \in R$에 $a + I$를 대응시키는 함수 $\pi : R \to R/I$, 곧 모든 $a \in R$에서 $\pi(a) = a + I$인 함수는 환 $R$에서 환 $R/I$로의 [[ring-homomorphism|환 준동형]]이고, $\pi : R \to R/I$는 전사이며, $\operatorname{Ker} \pi = I$이다. $\pi$는 덧셈군 $(R, +)$의 정규부분군 $I$에 대한 [[canonical-homomorphism|표준 준동형]]과 같은 함수이고, 이것을 $I$에 대한 환의 **표준 준동형**이라 한다. 따라서 $R$의 부분집합 $J$가 $R$의 아이디얼인 것은 정확히 어떤 환 $R'$과 환 준동형 $\varphi : R \to R'$이 있어 $J = \operatorname{Ker} \varphi$일 때이다.
6. (정수의 몫환) $n$이 자연수이면 [[ideal|아이디얼]]의 (7)에 의해 $n\mathbb{Z}$는 환 $\mathbb{Z}$의 아이디얼이고, 몫환 $\mathbb{Z}/n\mathbb{Z}$는 [[ring-examples|환의 예]]의 (3)의 환 $(\mathbb{Z}_n, +, \cdot)$와 같은 환이다. 곧 집합과 덧셈은 [[quotient-group|몫군]]의 (6)대로 같고, 모든 정수 $a$, $b$에서 몫환의 곱 $(a + n\mathbb{Z})(b + n\mathbb{Z})$와 [[integers-modulo-n|법 n의 정수]]의 곱 $[a][b]$는 같은 원소 $[ab]$이므로 두 곱셈은 [[binary-operation|이항연산]]의 뜻으로 같다.
:::

:::english
Let $(R, +, \cdot)$ be a ring and $I$ a subgroup of the additive group $(R, +)$. The notation $0$, $1$, $-a$, $a - b$, the product $ab$ and integer multiples $k \cdot a$ are those of the entry on rings, and ideals, proper ideals, left absorption and right absorption are those of the entry on ideals. Since $(R, +)$ is abelian, $I$ is a normal subgroup by item (3) of the entry on normal subgroups. In the additive notation of item (8) of the entry on cosets, for $a, b \in R$ we have $a \sim_I b$ exactly when $-a + b \in I$; the class of $a$ is $a + I = \{a + x : x \in I\}$, and the quotient set $R/{\sim_I}$ is $R/I = \{a + I : a \in R\}$ (item (2) of the entry on cosets). By items (2) and (6) of the entry on quotient groups, $R/I$ is an abelian group under the addition
$$(a + I) + (b + I) = (a + b) + I,$$
and this addition is the operation induced on $R/{\sim_I} = R/I$ by the addition of $R$ in the sense of item (2) of the entry on operations on equivalence classes. Compatibility is as in that entry.

1. (Compatibility and ideals)
   - (i) "For all $a, a', b \in R$, if $a \sim_I a'$ then $ab \sim_I a'b$" holds exactly when $I$ satisfies right absorption.
   - (ii) "For all $a, a', b \in R$, if $a \sim_I a'$ then $ba \sim_I ba'$" holds exactly when $I$ satisfies left absorption.
   - (iii) Hence the multiplication of $R$ is compatible with $\sim_I$ exactly when $I$ is an ideal of $R$.

In (2)–(6), $I$ is an ideal of $R$.

2. (The quotient ring) There is exactly one binary operation on $R/I$ whose value at $a + I$ and $b + I$ is $ab + I$ for all $a, b \in R$. This value is written $(a + I)(b + I)$; that is,
   $$(a + I)(b + I) = ab + I.$$
   This operation is the operation induced on $R/{\sim_I} = R/I$ by the multiplication of $R$ in the sense of item (2) of the entry on operations on equivalence classes. With the addition above and this multiplication, $(R/I, +, \cdot)$ is a ring, called the **quotient ring** of $R$ by $I$ and referred to as "the ring $R/I$". The product $(a + I)(b + I)$ is a value of this operation, not the set of products of elements of the two cosets.
3. (Zero, additive inverses, equality) For $a, b \in R$ and an integer $k$: the $0$ of the ring $R/I$ is $0 + I = I$, $-(a + I) = (-a) + I$, $(a + I) - (b + I) = (a - b) + I$ and $k \cdot (a + I) = (k \cdot a) + I$. Moreover, $a + I = b + I$ exactly when $a - b \in I$; in particular, $a + I = 0 + I$ exactly when $a \in I$.
4. (Commutativity and unity)
   - (i) If $R$ is a commutative ring, then so is $R/I$.
   - (ii) If $R$ is a ring with unity $1$, then $1 + I$ is the multiplicative identity of $R/I$. In this case the ring $R/I$ is a ring with unity exactly when $I$ is a proper ideal of $R$, and then the unity of $R/I$ is $1 + I$.
   - (iii) For every ring $R$, $R/R = \{R\}$, and the ring $R/R$ is the zero ring of item (1) of the entry on rings.
5. (Canonical homomorphism) The function $\pi : R \to R/I$ that assigns $a + I$ to each $a \in R$, that is, $\pi(a) = a + I$ for all $a \in R$, is a ring homomorphism from the ring $R$ to the ring $R/I$; $\pi : R \to R/I$ is surjective, and $\operatorname{Ker} \pi = I$. The function $\pi$ is the same function as the canonical homomorphism of the additive group $(R, +)$ for its normal subgroup $I$, and it is called the **canonical homomorphism** of rings for $I$. Hence a subset $J$ of $R$ is an ideal of $R$ exactly when there are a ring $R'$ and a ring homomorphism $\varphi : R \to R'$ with $J = \operatorname{Ker} \varphi$.
6. (Quotient rings of the integers) If $n$ is a natural number, then $n\mathbb{Z}$ is an ideal of the ring $\mathbb{Z}$ by item (7) of the entry on ideals, and the quotient ring $\mathbb{Z}/n\mathbb{Z}$ is the same ring as the ring $(\mathbb{Z}_n, +, \cdot)$ of item (3) of the entry on examples of rings. Namely, the sets and the additions are the same by item (6) of the entry on quotient groups, and for all integers $a$ and $b$ the product $(a + n\mathbb{Z})(b + n\mathbb{Z})$ in the quotient ring and the product $[a][b]$ in the integers modulo $n$ are the same element $[ab]$, so the two multiplications are equal as binary operations.
:::

## 직관

몫환은 $I$에 속하는 차이를 "없는 것으로 치고" 덧셈과 곱셈을 하는 환입니다. 정수를 $n$으로 나눈 나머지만 보고 계산하는 것이 그 예이고, 그렇게 얻은 $\mathbb{Z}/n\mathbb{Z}$가 바로 $\mathbb{Z}_n$입니다((6)). 비유에서 "없는 것으로 친다"가 관계 $\sim_I$에, "나머지끼리 계산한다"가 잉여류끼리의 두 연산에 해당합니다. 덧셈 쪽은 6단원의 [[quotient-group|몫군]]이 이미 해 두었으므로, 새로 할 일은 곱셈이 같은 것으로 친 원소에서 같은 결과를 주는지, 곧 호환되는지를 보는 것입니다.

(1)의 증명을 보면 두 흡수 조건이 하나씩 쓰입니다. $a$와 $a'$이 같은 것으로 쳐질 때 둘에 오른쪽에서 $b$를 곱한 결과의 차는 $(-a + a')b$이고, 이것이 $I$에 들어가는 것이 오른쪽 흡수입니다. 왼쪽에서 곱한 결과의 차 $b(-a + a')$가 $I$에 들어가는 것이 왼쪽 흡수입니다. 6단원에서 군의 곱셈이 호환될 조건이 정확히 정규성이었던 것처럼, 환의 곱셈이 호환될 조건은 정확히 아이디얼이라는 것입니다.

몫환으로 내려가는 성질도 몫군과 같은 방식으로 내려갑니다. 등식으로 적히는 결합법칙, 분배법칙, 교환법칙, 그리고 $R$에 곱셈의 항등원 $1$이 있을 때의 $1 + I$가 그렇습니다. 다만 단위원을 갖는 환에는 $1 \ne 0$이라는 조건이 있고, 몫환에서 이것은 $1 \notin I$, 곧 $I$가 진아이디얼이라는 조건이 됩니다((4)).

## 증명

:::idea
(1)은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (3)으로 한쪽씩 본다. $a \sim_I a'$이면 $-(ab) + a'b = (-a + a')b$이고 $-(ba) + ba' = b(-a + a')$이다. 그 뒤로는 같은 항목의 (2), (4), (6)이 몫환을 준다.
:::

:::hint
(1)의 (i)의 역: $a \in I$이면 $0 \sim_I a$이다. 여기에 오른쪽에서 $r$을 곱해 본다.
:::

:::hint
(2)의 분배법칙은 동치류 위의 연산의 (6)이 요구하는 꼴을 맞추면 된다. 두 연산이 모두 $R$의 연산이 정하는 연산이어야 한다.
:::

:::proof
아래에서 "연산의 ($k$)"는 [[operation-on-equivalence-classes|동치류 위의 연산]]의 ($k$), "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$), "몫군의 ($k$)"는 [[quotient-group|몫군]]의 ($k$), "기본 성질의 ($k$)"는 [[ring-basic-properties|환의 기본 성질]]의 ($k$), "아이디얼의 ($k$)"는 [[ideal|아이디얼]]의 ($k$)이다. [[group-basic-properties|군의 기본 성질]]의 (4)를 덧셈 표기로 읽으면 $-0 = 0$이다.

**(1)** (i) $I$가 오른쪽 흡수를 만족한다고 하자. $a, a', b \in R$이고 $a \sim_I a'$이면 $c = -a + a' \in I$이다. 기본 성질의 (2)와 [[ring|환]]의 오른쪽 분배법칙에 의해
$$-(ab) + a'b = (-a)b + a'b = (-a + a')b = cb$$
이고, 오른쪽 흡수에 의해 $cb \in I$이므로 $ab \sim_I a'b$이다. 거꾸로 이 조건이 성립한다고 하고 $a \in I$, $r \in R$이라 하자. $-0 + a = 0 + a = a \in I$이므로 $0 \sim_I a$이다. 조건에 의해 $0r \sim_I ar$, 곧 $-(0r) + ar \in I$이다. 기본 성질의 (1)에 의해 $0r = 0$이므로 $-(0r) + ar = 0 + ar = ar$이고, 따라서 $ar \in I$이다.

(ii) $I$가 왼쪽 흡수를 만족하고 $a \sim_I a'$, $c = -a + a'$이라 하자. 기본 성질의 (2)와 왼쪽 분배법칙에 의해 $-(ba) + ba' = b(-a) + ba' = b(-a + a') = bc$이고, 왼쪽 흡수에 의해 $bc \in I$이므로 $ba \sim_I ba'$이다. 거꾸로 이 조건이 성립하고 $a \in I$, $r \in R$이면 $0 \sim_I a$에서 $r0 \sim_I ra$이고, 기본 성질의 (1)에 의해 $r0 = 0$이므로 $ra = -(r0) + ra \in I$이다.

(iii) 연산의 (3)에 의해 곱셈이 $\sim_I$와 호환되는 것은 정확히 (i)과 (ii)의 두 조건이 모두 성립할 때이고, (i), (ii)에 의해 이것은 정확히 오른쪽 흡수와 왼쪽 흡수가 모두 성립할 때이다. $I$는 가정에 의해 $(R, +)$의 부분군이므로, 아이디얼의 정의에 의해 이것은 정확히 $I$가 아이디얼일 때이다.

**(2)** (1)에 의해 $R$의 곱셈은 $\sim_I$와 호환된다. 연산의 (2)에 의해 $R/{\sim_I}$ 위의 이항연산 $\odot$로서 모든 $a, b \in R$에서 $[a] \odot [b] = [ab]$인 것이 정확히 하나 있다. 잉여류의 (2)와 (8)에 의해 $R/{\sim_I} = R/I$이고 $[a] = a + I$, $[b] = b + I$, $[ab] = ab + I$이므로, 이것은 진술의 첫 문장이다.

$(R/I, +, \odot)$가 [[ring|환]]의 세 조건을 만족함을 보인다. 덧셈: 몫군의 (6)에 의해 $(R/I, +)$는 아벨군이다. 곱셈의 결합법칙: $R$의 곱셈이 결합법칙을 만족하므로 연산의 (4)의 (i)에 의해 $\odot$도 결합법칙을 만족한다. 분배법칙: 몫군의 (1)을 군 $(R, +)$와 정규부분군 $I$에 쓰면 $R$의 덧셈은 $\sim_I$와 호환되고, 진술 머리의 말대로 $R/I$의 덧셈은 $R$의 덧셈이 정하는 연산이다. 곱셈도 호환되고 $\odot$는 곱셈이 정하는 연산이다. $R$에서 모든 $a, b, c$에 대하여 $a(b + c) = ab + ac$이므로, 연산의 (6)의 첫 문장을 $\ast$를 곱셈, $\star$를 덧셈으로 두어 쓰면 모든 $P, Q, T \in R/I$에서 $P \odot (Q + T) = (P \odot Q) + (P \odot T)$이다. $R$에서 $(b + c)a = ba + ca$이므로 같은 항목의 (6)의 둘째 문장에 의해 $(Q + T) \odot P = (Q \odot P) + (T \odot P)$이다. 따라서 $(R/I, +, \odot)$는 환이다.

**(3)** 몫군의 (6)에 의해 $(R/I, +)$의 항등원은 $0 + I = I$이고 $-(a + I) = (-a) + I$, $k \cdot (a + I) = (k \cdot a) + I$이다. [[ring|환]]의 표기에 의해 환 $R/I$의 $0$과 덧셈의 역원과 정수배는 이 덧셈군의 것이다. 따라서 $(a + I) - (b + I) = (a + I) + ((-b) + I) = (a + (-b)) + I = (a - b) + I$이다. 잉여류의 (3)의 (i)과 (v)를 덧셈 표기로 읽으면 $a + I = b + I$인 것은 정확히 $-b + a \in I$일 때이고, 덧셈의 교환법칙에 의해 $-b + a = a + (-b) = a - b$이다. $b = 0$이면 $a - 0 = a + (-0) = a + 0 = a$이므로 둘째 문장이 나온다.

**(4)** (i) $R$의 곱셈이 교환법칙을 만족하면 연산의 (4)의 (i)에 의해 $\odot$도 교환법칙을 만족한다.

(ii) $1$이 $R$의 곱셈의 항등원이므로 연산의 (4)의 (ii)에 의해 $[1] = 1 + I$는 $\odot$의 항등원이다. [[binary-operation|이항연산]]의 (1)에 의해 $R/I$의 곱셈의 항등원은 $1 + I$뿐이다. [[ring|환]]의 정의에 의해 $R/I$가 단위원을 갖는 환인 것은 정확히 이 항등원이 $R/I$의 $0$과 다를 때, 곧 $1 + I \ne 0 + I$일 때이다. (3)에 의해 이것은 정확히 $1 \notin I$일 때이고, 아이디얼의 (4)에 의해 정확히 $I$가 진아이디얼일 때이다. 그때 단위원은 곱셈의 항등원 $1 + I$이다.

(iii) 아이디얼의 (3)에 의해 $R$은 $R$의 아이디얼이므로 (2)에 의해 $R/R$은 환이다. 몫군의 (7)을 군 $(R, +)$에 쓰면 $R/R = \{R\}$이다. 원소가 하나인 집합 위의 환은 [[ring|환]]의 (1)에 의해 영환이다.

**(5)** [[canonical-homomorphism|표준 준동형]]의 (1), (2)를 군 $(R, +)$와 정규부분군 $I$에 쓰면(그 항목의 마지막 문장의 덧셈 표기로 $\pi(a) = a + I$), $\pi$는 $(R, +)$에서 $(R/I, +)$로의 준동형이고 전사이며, 군 준동형으로서의 핵은 $I$이다. 덧셈군 $(R/I, +)$의 항등원은 환 $R/I$의 $0$이므로 이 핵은 환 준동형의 핵 $\operatorname{Ker} \pi$와 같은 집합이다. 곱셈: $a, b \in R$이면 (2)에 의해 $\pi(ab) = ab + I = (a + I)(b + I) = \pi(a)\pi(b)$이다. 따라서 $\pi$는 환 준동형이다.

마지막 문장: $J$가 아이디얼이면 이 문단을 $J$에 쓴 표준 준동형 $\pi : R \to R/J$에서 $J = \operatorname{Ker} \pi$이다. 거꾸로 $J = \operatorname{Ker} \varphi$이면 아이디얼의 (5)에 의해 $J$는 아이디얼이다.

**(6)** 아이디얼의 (7)에 의해 $n\mathbb{Z}$는 환 $\mathbb{Z}$의 아이디얼이다. [[ring-examples|환의 예]]의 (1)에 의해 환 $\mathbb{Z}$의 덧셈군은 $(\mathbb{Z}, +)$이므로, 몫군의 (6)에 의해 집합으로 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$이고 몫환의 덧셈은 [[integers-modulo-n|법 n의 정수]]의 덧셈과 같은 연산이다. $P, Q \in \mathbb{Z}_n$이면 $P = [a]$, $Q = [b]$인 정수 $a$, $b$가 있고, 잉여류의 (8)에 의해 $a + n\mathbb{Z} = [a]$, $b + n\mathbb{Z} = [b]$, $ab + n\mathbb{Z} = [ab]$이다. (2)에 의해 몫환의 곱은 $(a + n\mathbb{Z})(b + n\mathbb{Z}) = ab + n\mathbb{Z} = [ab]$이고, 법 n의 정수의 (2)에 의해 $[a][b] = [ab]$이다. 두 곱셈은 $\mathbb{Z}_n$의 모든 $P$, $Q$에서 값이 같으므로 [[binary-operation|이항연산]]의 진술에 의해 같은 연산이다. 환의 예의 (3)의 환 $\mathbb{Z}_n$의 연산은 이 덧셈과 곱셈이므로, [[ring|환]]의 진술의 같음에 의해 두 환은 같다. $\blacksquare$
:::

## 예시와 반례

:::example[ℤ/6ℤ에서의 계산]
$n = 6$이라 합시다. $2 + 6\mathbb{Z}$와 $3 + 6\mathbb{Z}$는 몫환 $\mathbb{Z}/6\mathbb{Z}$의 $0$이 아닙니다. (6)에 의해 $2 + 6\mathbb{Z} = [2]$, $3 + 6\mathbb{Z} = [3]$이고 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[2] \ne [0]$, $[3] \ne [0]$이기 때문입니다. 그런데 (2)에 의해
$$(2 + 6\mathbb{Z})(3 + 6\mathbb{Z}) = 6 + 6\mathbb{Z} = 0 + 6\mathbb{Z}$$
입니다. 마지막 등호는 $6 - 0 = 6 \in 6\mathbb{Z}$와 (3)입니다. $0$이 아닌 두 원소의 곱이 $0$이 될 수 있습니다.

또 (3)에 의해 $-(1 + 6\mathbb{Z}) = -1 + 6\mathbb{Z}$이고, $-1 - 5 = -6 \in 6\mathbb{Z}$이므로 이것은 $5 + 6\mathbb{Z}$입니다. $(5 + 6\mathbb{Z})(5 + 6\mathbb{Z}) = 25 + 6\mathbb{Z} = 1 + 6\mathbb{Z}$이고($25 - 1 = 6 \cdot 4$), 이는 [[ring-basic-properties|환의 기본 성질]]의 (3)의 $(-x)(-x) = xx$를 $x = 1 + 6\mathbb{Z}$에 쓴 것과 맞습니다. [[ring-examples|환의 예]]의 (1)에 의해 $\mathbb{Z}$는 단위원 $1$을 갖는 가환환이고 $1 \notin 6\mathbb{Z}$이므로((3)과 $[1] \ne [0]$), (4)에 의해 $\mathbb{Z}/6\mathbb{Z}$는 단위원 $1 + 6\mathbb{Z}$를 갖는 가환환입니다.
:::

:::example[곱셈의 항등원이 없는 환의 몫환 2ℤ/6ℤ]
[[ring-examples|환의 예]]의 (4)의 환 $2\mathbb{Z}$에는 곱셈의 항등원이 없습니다. 그 몫환이 단위원을 가질 수 있음을 봅시다. $6\mathbb{Z} \subseteq 2\mathbb{Z}$입니다($6k = 2(3k)$). [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 $6\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이고 $2\mathbb{Z}$도 그렇습니다. 환 $2\mathbb{Z}$의 덧셈은 정수의 덧셈이므로 [[subgroup|부분군]]의 (6)에 의해 $6\mathbb{Z}$는 $(2\mathbb{Z}, +)$의 부분군입니다. $r \in 2\mathbb{Z}$이고 $a = 6k$이면 $ra = 6(rk) \in 6\mathbb{Z}$이고, 가환이므로 $ar \in 6\mathbb{Z}$입니다. 따라서 $6\mathbb{Z}$는 환 $2\mathbb{Z}$의 아이디얼입니다.

*원소.* $x \in 2\mathbb{Z}$이면 $x = 2k$인 정수 $k$가 있고, [[division-theorem|나눗셈 정리]]에 의해 $k = 3q + s$, $0 \le s < 3$인 정수 $q$, $s$가 있고, [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)에 의해 $s$는 $0$, $1$, $2$ 가운데 하나입니다. $x - 2s = 6q \in 6\mathbb{Z}$이므로 (3)에 의해 $x + 6\mathbb{Z} = 2s + 6\mathbb{Z}$이고, $2s$는 $0$, $2$, $4$ 가운데 하나입니다. 또 정수 $u$, $v$에 대하여 $u - v \in 6\mathbb{Z}$인 것은 정확히 $6 \mid (u - v)$, 곧 $\mathbb{Z}_6$에서 $[u] = [v]$일 때인데([[subgroup-examples|부분군의 예와 교집합]]의 (1), [[congruence-modulo-n|합동]], [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]), $\mathbb{Z}_6$의 $[0]$, $[2]$, $[4]$는 서로 다릅니다([[integers-modulo-n|법 n의 정수]]의 (1)). 따라서 $2\mathbb{Z}/6\mathbb{Z}$는 서로 다른 세 원소 $0 + 6\mathbb{Z}$, $2 + 6\mathbb{Z}$, $4 + 6\mathbb{Z}$로 이루어집니다.

*곱셈의 항등원.* (2)와 (3)에 의해 $(4 + 6\mathbb{Z})(0 + 6\mathbb{Z}) = 0 + 6\mathbb{Z}$, $(4 + 6\mathbb{Z})(2 + 6\mathbb{Z}) = 8 + 6\mathbb{Z} = 2 + 6\mathbb{Z}$($8 - 2 = 6$), $(4 + 6\mathbb{Z})(4 + 6\mathbb{Z}) = 16 + 6\mathbb{Z} = 4 + 6\mathbb{Z}$($16 - 4 = 6 \cdot 2$)입니다. (4)의 (i)에 의해 몫환은 가환환이므로 반대쪽 곱도 같습니다. 따라서 $4 + 6\mathbb{Z}$는 곱셈의 항등원이고, $0 + 6\mathbb{Z}$와 다르므로 $2\mathbb{Z}/6\mathbb{Z}$는 단위원 $4 + 6\mathbb{Z}$를 갖는 환입니다. (4)의 (ii)는 $R$이 단위원을 가질 때만 말하고, $R$에 곱셈의 항등원이 없어도 몫환에는 있을 수 있습니다.
:::

:::counterexample[아이디얼이 아닌 부분군으로는 곱이 정해지지 않는다]
[[ring-examples|환의 예]]의 (2)의 환 $\mathbb{R}$와 $I = \mathbb{Z}$를 봅시다. [[subgroup-examples|부분군의 예와 교집합]]의 (3)에 의해 $\mathbb{Z}$는 $(\mathbb{R}, +)$의 부분군이지만, [[ideal|아이디얼]]의 (2)에 의해 아이디얼이 아닙니다. 실제로 $-0 + 1 = 1 \in \mathbb{Z}$이므로 $0 \sim_{\mathbb{Z}} 1$인데, 오른쪽에서 $2^{-1}$을 곱하면 $0 \cdot 2^{-1} = 0$이고 $1 \cdot 2^{-1} = 2^{-1}$이며([[real-number-arithmetic|실수의 계산 법칙]]의 (K9), (K4), (K1)), 아이디얼의 (2)에 의해 $-0 + 2^{-1} = 2^{-1} \notin \mathbb{Z}$입니다. 곧 $0 \cdot 2^{-1} \not\sim_{\mathbb{Z}} 1 \cdot 2^{-1}$입니다.

따라서 $\mathbb{R}/\mathbb{Z}$ 위의 이항연산으로서 모든 $a, b \in \mathbb{R}$에서 $a + \mathbb{Z}$와 $b + \mathbb{Z}$에서의 값이 $ab + \mathbb{Z}$인 것은 없습니다. 있다면 $0 + \mathbb{Z} = 1 + \mathbb{Z}$이므로 $2^{-1} + \mathbb{Z}$와의 값이 $0 + \mathbb{Z}$이면서 $2^{-1} + \mathbb{Z}$여야 하는데, [[left-coset|잉여류]]의 (3)에 의해 두 잉여류는 다릅니다. 깨진 곳은 (1)의 (i)이 말하는 대로 오른쪽 흡수입니다($a = 1 \in \mathbb{Z}$, $r = 2^{-1}$에서 $ar \notin \mathbb{Z}$). $\mathbb{R}$이 가환환이므로 왼쪽 흡수도 같은 곳에서 깨집니다. 덧셈 $(\mathbb{R}/\mathbb{Z}, +)$는 [[quotient-group|몫군]]으로 여전히 군입니다.
:::

## 확인 질문

:::check[환 $2\mathbb{Z}$의 몫환 $2\mathbb{Z}/4\mathbb{Z}$는 단위원을 갖는 환인가?]
아닙니다. $4\mathbb{Z} \subseteq 2\mathbb{Z}$이고($4k = 2(2k)$), [[subgroup-examples|부분군의 예와 교집합]]의 (1)과 [[subgroup|부분군]]의 (6)에 의해 $4\mathbb{Z}$는 $(2\mathbb{Z}, +)$의 부분군이며, $r \in 2\mathbb{Z}$이고 $a = 4k$이면 $ra = ar = 4(rk) \in 4\mathbb{Z}$이므로 $4\mathbb{Z}$는 환 $2\mathbb{Z}$의 아이디얼입니다. $x = 2k \in 2\mathbb{Z}$이면 $k$는 짝수 $2q$이거나 홀수 $2q + 1$이고([[even-and-odd|짝수와 홀수]]), $x - 0 = 4q$ 또는 $x - 2 = 4q$이므로 (3)에 의해 $x + 4\mathbb{Z}$는 $0 + 4\mathbb{Z}$이거나 $2 + 4\mathbb{Z}$입니다. [[ideal|아이디얼]]의 (6)의 (iii)에서 보인 $2 \notin 4\mathbb{Z}$와 (3)에 의해 둘은 다릅니다. 곱은 $(2 + 4\mathbb{Z})(2 + 4\mathbb{Z}) = 4 + 4\mathbb{Z} = 0 + 4\mathbb{Z}$이고, [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $0 + 4\mathbb{Z}$와의 곱도 $0 + 4\mathbb{Z}$입니다. 두 원소 어느 것을 $2 + 4\mathbb{Z}$에 곱해도 $2 + 4\mathbb{Z}$가 되지 않으므로 곱셈의 항등원이 없습니다.
:::

:::check[가환환이 아닌 환 $R$의 몫환 $R/I$가 가환환일 수 있는가?]
있습니다. $I = R$로 두면 (4)의 (iii)에 의해 $R/R$은 영환이고, [[ring|환]]의 (1)에 의해 영환은 가환환입니다. 예를 들어 [[ring-examples|환의 예]]의 (5)에 의해 $M_2(\mathbb{R})$은 가환환이 아니지만 $M_2(\mathbb{R})/M_2(\mathbb{R})$은 가환환입니다. (4)의 (i)의 역은 성립하지 않습니다.
:::
