---
title: 정역의 나누어떨어짐과 기약원
title_en: Divisibility in Integral Domains
aliases: [연관원, 기약원, 소원, associates, irreducible element, prime element, divisibility in a ring]
kind: definition
field: ring-theory
msc: ["13A05", "13F15"]
level: undergrad
summary: 단위원을 갖는 가환환의 나누어떨어짐을 주 아이디얼의 포함으로 바꿔 쓰고, 연관원을 정의한다. 정역에서 기약원과 소원을 0 이 아니고 가역원이 아닌 원소에 정의하고, 소원은 기약원이라는 것, 소원과 소 아이디얼의 관계, 정수에서 기약원과 소원이 정확히 소수와 그 음수라는 것을 보인다.
requires: [equivalence-relation, divisibility, prime-number, well-ordering-principle, euclids-lemma, integers-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, field, finite-integral-domain-is-a-field, ideal, maximal-and-prime-ideals, polynomial-ring, degree-of-a-polynomial]
sources:
  - ref: judson-abstract-algebra
    loc: "18.2절 Factorization in Integral Domains, 나누어떨어짐·가역원·연관원·기약원·소원의 정의 (p.228), Example 18.10, Lemma 18.11, Corollary 18.13 의 증명 (p.229); 18.4절 Exercises, 연습문제 5, 13 (p.235–236); 16.1절 Rings, Example 16.2 (p.191)"
    checked: original
    note: "출처(p.228)는 단위원을 갖는 가환환 R 에서 나누어떨어짐과 가역원, 연관원('a = ub 인 가역원 u 가 있다')을 정의하고, 정역 D 에서 기약원을 '0 이 아니고 가역원이 아니며 p = ab 이면 a 나 b 가 가역원' 으로 정의한 뒤 'Furthermore, p is prime if whenever p | ab either p | a or p | b' 로 소원을 정의한다. 이 항목은 소원의 정의에도 '0 이 아니고 가역원이 아니다' 를 밝혀 적는다. 나누어떨어짐은 새로 정의하지 않고 다항식환 항목의 (6)의 것을 쓰며, 가역원은 '가역원과 체' 항목의 것이다. 주 아이디얼은 출처의 ⟨a⟩ 대신 aR 로 쓴다. (1)–(3)은 출처 Lemma 18.11(p.229)의 세 동치와 같은 내용이다. 출처의 (2) 역방향 증명은 a = bx = ayx 에서 'Since D is an integral domain, xy = 1' 이라고 적는데, 이 항목은 a = 0 인 경우(그때 b = 0)를 따로 쓴다. (2)의 '연관원이다는 동치관계' 는 출처 연습문제 13(p.236)이고, (6)의 '소원은 기약원' 은 연습문제 5(p.235)이다. (7)의 '소원과 소 아이디얼' 은 출처 Corollary 18.13 의 증명(p.229)이 ⟨p⟩ 가 소 아이디얼이라는 것에서 p | a 또는 p | b 를 얻는 것과 같은 발상이다. (9)는 출처 18.2절 첫머리(p.228)가 정수의 소수를 인수분해의 바탕으로 들고 체 위의 기약 다항식이 비슷한 구실을 한다고 적는 것을 정수 쪽에서 밝힌 것이다. 예시 '$\\mathbb{Z}$와 $\\mathbb{Z}_7[X]$의 연관원' 의 '−12 와 연관원인 정수는 −12 와 12 뿐' 과 확인 질문 '(5)로 보면 $\\mathbb{Z}$에서 $15$는 기약원인가?' 의 '가역원은 ±1' 은 출처 16.1절 Example 16.2(p.191)의 'The only integers with multiplicative inverses are 1 and −1' 과 같은 내용이고, 반례 '$2$는 $\\mathbb{Z}$에서 기약원이지만 $\\mathbb{R}$에서는 가역원이다' 는 같은 예시가 'There is no integer that is the multiplicative inverse of 2, since 1/2 is not an integer' 라고 하는 것과 같은 대상이다. 확인 질문 '정역 $D$에서 $0$과 연관원인 원소, $1$과 연관원인 원소는 각각 무엇인가?' 의 둘째 답은 출처 Lemma 18.11 (3)의 증명(p.229)의 'An element a ∈ D is a unit if and only if a is an associate of 1' 과 같다. 출처 Example 18.10(p.229)은 Z[√3 i] 에서 '2 is not a unit multiple of either 1 − √3 i or 1 + √3 i' 로 연관원이 아님을 따진다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(진술의 경계 경우 0·체·영 아이디얼 대입, 직관 문장 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 가환환([[ring|환]]의 뜻)이라 하자. 나누어떨어짐 $a \mid b$와 $a \nmid b$는 [[polynomial-ring|다항식환]]의 (6)에서 단위원을 갖는 가환환에 정한 것이고, 가역원, 역원 $a^{-1}$, $R^{\times}$는 [[field|가역원과 체]]의 것이며, 주 아이디얼 $aR = \{ar : r \in R\}$은 [[ideal|아이디얼]]의 (6)의 것이다.

**연관원.** $a, b \in R$가 **연관원**(associates)인 것은 정확히 $a = ub$인 $u \in R^{\times}$가 있을 때이다.

**기약원과 소원.** $D$가 [[integral-domain|정역]]이고 $a \in D$라 하자.

- $a$가 $D$의 **기약원**(irreducible element)인 것은 정확히 $a \ne 0$이고 $a \notin D^{\times}$이며, $a = bc$인 모든 $b, c \in D$에 대하여 $b \in D^{\times}$이거나 $c \in D^{\times}$일 때이다.
- $a$가 $D$의 **소원**(prime element)인 것은 정확히 $a \ne 0$이고 $a \notin D^{\times}$이며, $a \mid bc$인 모든 $b, c \in D$에 대하여 $a \mid b$이거나 $a \mid c$일 때이다.

다음이 성립한다. (1)–(3)에서 $a, b \in R$이다.

1. (나누어떨어짐과 주 아이디얼) $a \mid b$인 것은 정확히 $b \in aR$일 때이고, 정확히 $bR \subseteq aR$일 때이다. 따라서 $a \mid b$이고 $b \mid a$인 것은 정확히 $aR = bR$일 때이다.
2. (연관원) "연관원이다"는 $R$ 위의 [[equivalence-relation|동치관계]]이다. $a$와 $b$가 연관원이면 $a \mid b$, $b \mid a$이고 $aR = bR$이다. $a$가 $0$과 연관원인 것은 정확히 $a = 0$일 때이다. $R$이 정역이면 다음 세 조건은 서로 동치이다: $a$와 $b$가 연관원이다, $a \mid b$이고 $b \mid a$이다, $aR = bR$이다.
3. (가역원) 다음 세 조건은 서로 동치이다: $a \in R^{\times}$이다, $a \mid 1$이다, $aR = R$이다. 가역원은 $R$의 모든 원소를 나눈다. $a$가 $1$과 연관원인 것은 정확히 $a \in R^{\times}$일 때이다.

(4)–(8)에서 $D$는 정역이고 $a, a', b \in D$이다.

4. (연관원으로 바꾸기) $a$와 $a'$이 연관원이라 하자. 그러면 $a \mid b$인 것은 정확히 $a' \mid b$일 때이고, $b \mid a$인 것은 정확히 $b \mid a'$일 때이다. 또 $a$가 기약원인 것은 정확히 $a'$이 기약원일 때이고, $a$가 소원인 것은 정확히 $a'$이 소원일 때이다.
5. (약수로 본 기약원) $a \ne 0$이고 $a \notin D^{\times}$이면, $a$가 기약원인 것은 정확히 $c \mid a$인 모든 $c \in D$가 가역원이거나 $a$와 연관원일 때이다.
6. (소원은 기약원) $D$의 소원은 $D$의 기약원이다.
7. (소원과 소 아이디얼) $a \ne 0$이면, $a$가 소원인 것은 정확히 $aD$가 $D$의 [[maximal-and-prime-ideals|소 아이디얼]]일 때이다. $a = 0$이면 $aD = \{0\}$은 $D$의 소 아이디얼이지만 $0$은 소원이 아니다.
8. (체) $D$가 체이면 $D$에는 기약원도 소원도 없고, $0$이 아닌 두 원소는 연관원이다.
9. (정수) 환 $\mathbb{Z}$는 [[ring-examples|환의 예]]의 (1)의 것이다.
   - (i) 정수 $a$, $b$에 대하여, 환 $\mathbb{Z}$에서 $a \mid b$인 것은 정확히 [[divisibility|나누어떨어짐]]의 뜻으로 $a \mid b$일 때이다.
   - (ii) $\mathbb{Z}^{\times} = \{1, -1\}$이고, 정수 $a$, $b$가 연관원인 것은 정확히 $a = b$이거나 $a = -b$일 때이다.
   - (iii) 정수 $p$에 대하여 다음 세 조건은 서로 동치이다: $p$가 $\mathbb{Z}$의 기약원이다, $p$가 $\mathbb{Z}$의 소원이다, $p$와 $-p$ 가운데 하나가 [[prime-number|소수]]이다. 특히 자연수 $p$에 대하여 $p$가 $\mathbb{Z}$의 기약원인 것, $p$가 $\mathbb{Z}$의 소원인 것, $p$가 소수인 것은 서로 동치이다.
:::

:::english
Let $R$ be a commutative ring with unity. Divisibility $a \mid b$ and $a \nmid b$ are as defined for commutative rings with unity in item (6) of the polynomial ring; units, inverses $a^{-1}$ and $R^{\times}$ are those of units and fields; and the principal ideal $aR = \{ar : r \in R\}$ is that of item (6) of ideals.

**Associates.** Elements $a, b \in R$ are **associates** if and only if $a = ub$ for some $u \in R^{\times}$.

**Irreducible and prime elements.** Let $D$ be an integral domain and $a \in D$.

- $a$ is an **irreducible element** of $D$ if and only if $a \ne 0$, $a \notin D^{\times}$, and for all $b, c \in D$ with $a = bc$ we have $b \in D^{\times}$ or $c \in D^{\times}$.
- $a$ is a **prime element** of $D$ if and only if $a \ne 0$, $a \notin D^{\times}$, and for all $b, c \in D$ with $a \mid bc$ we have $a \mid b$ or $a \mid c$.

The following hold. In (1)–(3), $a, b \in R$.

1. (Divisibility and principal ideals) $a \mid b$ if and only if $b \in aR$, if and only if $bR \subseteq aR$. Hence $a \mid b$ and $b \mid a$ if and only if $aR = bR$.
2. (Associates) Being associates is an equivalence relation on $R$. If $a$ and $b$ are associates, then $a \mid b$, $b \mid a$ and $aR = bR$. The element $a$ is an associate of $0$ if and only if $a = 0$. If $R$ is an integral domain, the following three conditions are equivalent: $a$ and $b$ are associates; $a \mid b$ and $b \mid a$; $aR = bR$.
3. (Units) The following three conditions are equivalent: $a \in R^{\times}$; $a \mid 1$; $aR = R$. A unit divides every element of $R$. The element $a$ is an associate of $1$ if and only if $a \in R^{\times}$.

In (4)–(8), $D$ is an integral domain and $a, a', b \in D$.

4. (Replacing by an associate) Let $a$ and $a'$ be associates. Then $a \mid b$ if and only if $a' \mid b$, and $b \mid a$ if and only if $b \mid a'$. Moreover $a$ is irreducible if and only if $a'$ is irreducible, and $a$ is prime if and only if $a'$ is prime.
5. (Irreducibility via divisors) If $a \ne 0$ and $a \notin D^{\times}$, then $a$ is irreducible if and only if every $c \in D$ with $c \mid a$ is a unit or an associate of $a$.
6. (Primes are irreducible) Every prime element of $D$ is an irreducible element of $D$.
7. (Prime elements and prime ideals) If $a \ne 0$, then $a$ is prime if and only if $aD$ is a prime ideal of $D$. If $a = 0$, then $aD = \{0\}$ is a prime ideal of $D$, but $0$ is not a prime element.
8. (Fields) If $D$ is a field, then $D$ has no irreducible elements and no prime elements, and any two nonzero elements are associates.
9. (Integers) The ring $\mathbb{Z}$ is that of item (1) of the examples of rings.
   - (i) For integers $a$, $b$, we have $a \mid b$ in the ring $\mathbb{Z}$ if and only if $a \mid b$ in the sense of divisibility of integers.
   - (ii) $\mathbb{Z}^{\times} = \{1, -1\}$, and integers $a$, $b$ are associates if and only if $a = b$ or $a = -b$.
   - (iii) For an integer $p$ the following three conditions are equivalent: $p$ is an irreducible element of $\mathbb{Z}$; $p$ is a prime element of $\mathbb{Z}$; one of $p$ and $-p$ is a prime number. In particular, for a natural number $p$, being an irreducible element of $\mathbb{Z}$, being a prime element of $\mathbb{Z}$ and being a prime number are equivalent.
:::

## 직관

정수에서 $6$과 $-6$은 부호만 다를 뿐 나누는 수와 나누어지는 수가 똑같습니다. 부호를 바꾸는 것은 가역원 $-1$을 곱하는 일이고, 가역원은 모든 수를 나누므로 나누어떨어짐에 아무 영향을 주지 않습니다. **연관원**은 이렇게 "가역원을 곱한 차이밖에 없는" 두 원소입니다. 사람의 이름을 성과 이름 순서로 쓰든 거꾸로 쓰든 같은 사람을 가리키듯이, 연관원은 나누어떨어짐의 눈으로 보면 구별되지 않습니다((4)). 이 비유에서 "이름을 바꿔 쓰는 방법"이 가역원 하나를 곱하는 것에 해당합니다.

소수에는 두 얼굴이 있습니다. "$1$과 자기 자신 말고는 약수가 없다"는 얼굴과 "곱을 나누면 인수 하나를 나눈다"는 얼굴(유클리드 보조정리)입니다. 일반적인 정역에서는 두 얼굴을 따로 이름 붙여 앞의 것을 **기약원**, 뒤의 것을 **소원**이라 합니다. 두 정의 모두 $0$과 가역원을 뺍니다. 가역원을 빼지 않으면 $1$도 "$1 = bc$이면 $b$나 $c$가 가역원"을 만족합니다($bc = 1$이면 $b$와 $c$가 모두 가역원입니다). 가역원을 빼 두어야 정수에서 기약원이 정확히 소수와 그 음수가 됩니다((9)). 소원은 언제나 기약원이고((6)), 정수에서는 두 개념이 일치합니다.

주 아이디얼로 옮겨 보면 그림이 단순해집니다. "$a$가 $b$를 나눈다"는 "$a$의 배수 전체가 $b$의 배수 전체를 품는다"($bR \subseteq aR$)이고, 연관원은 같은 주 아이디얼을 만드는 원소이며, 가역원은 환 전체를 만드는 원소입니다. 다만 (2)의 마지막 동치는 소거법칙을 쓰므로 정역에서 진술합니다.

## 증명

:::idea
나누어떨어짐은 주 아이디얼의 포함으로, 연관원은 같은 주 아이디얼로 옮겨 읽고, 정역에서는 $a = a(xy)$에서 소거법칙으로 $xy = 1$을 얻는다. 정수의 경우는 양수 쪽으로 옮긴 뒤 소수의 정의와 유클리드 보조정리를 쓴다.
:::

:::hint
(2)의 정역 부분에서 $a = 0$인 경우는 소거법칙을 쓸 수 없으므로 따로 봅니다.
:::

:::proof
**쓰는 사실.** 다항식환의 (6)의 정의대로 $a \mid b$는 $b = ac$인 $c \in R$가 있다는 것이다. $R$은 가환환이므로 $ac = ca$이다. 아이디얼의 (6)에 의해 $aR$은 $R$의 아이디얼이고, $a \in aR$이며, $a \in J$인 모든 아이디얼 $J$에 대하여 $aR \subseteq J$이다. 가역원과 체의 (1)에 의해 $R^{\times}$는 곱셈에 대한 군이고 $1 \in R^{\times}$, $u \in R^{\times}$이면 $u^{-1} \in R^{\times}$이다.

**1.** $a \mid b$이면 $b = ac \in aR$이다. $b \in aR$이면 $b = ar$인 $r$이 있으므로 $a \mid b$이다. $b \in aR$이면 $aR$이 $b$를 포함하는 아이디얼이므로 $bR \subseteq aR$이다. $bR \subseteq aR$이면 $b \in bR$이므로 $b \in aR$이다. 마지막 문장은 앞의 것을 $a$와 $b$의 자리를 바꿔 함께 쓴 것이다.

**2.** (반사) $a = 1a$이고 $1 \in R^{\times}$이다. (대칭) $a = ub$이고 $u \in R^{\times}$이면 $b = u^{-1}a$이고 $u^{-1} \in R^{\times}$이다. (추이) $a = ub$, $b = vc$이고 $u, v \in R^{\times}$이면 $a = (uv)c$이고 $uv \in R^{\times}$이다. 따라서 동치관계이다. $a = ub$이면 $a = bu$이므로 $b \mid a$이고, $b = u^{-1}a$이므로 $a \mid b$이며, (1)에 의해 $aR = bR$이다. $a$가 $0$과 연관원이면 $a = u0 = 0$이고([[ring-basic-properties|환의 기본 성질]]의 (1)), 거꾸로 $0 = 1 \cdot 0$이다.

$R$이 정역이라 하자. 연관원이면 $a \mid b$이고 $b \mid a$인 것은 위에서 보였고, 그것과 $aR = bR$의 동치는 (1)이다. $a \mid b$이고 $b \mid a$라 하고 $b = ax$, $a = by$라 하자. $a = 0$이면 $b = 0x = 0$이므로 $a = 1b$이고 연관원이다. $a \ne 0$이면 $a \cdot 1 = a = by = a(xy)$이므로, [[integral-domain|영인자와 정역]]의 (1)의 소거법칙에 의해 $xy = 1$이다. 가환이므로 $yx = 1$이고 $x \in R^{\times}$이다. $b = xa$이므로 $b$와 $a$는 연관원이고, 대칭성에 의해 $a$와 $b$도 연관원이다.

**3.** $a \in R^{\times}$이면 $1 = a a^{-1}$이므로 $a \mid 1$이다. $a \mid 1$이면 (1)에 의해 $1 \in aR$이고, 아이디얼의 (4)에 의해 $aR = R$이다. $aR = R$이면 $1 = ar$인 $r$이 있고 $ra = 1$이므로 $a \in R^{\times}$이다. 가역원 $a$와 $b \in R$에 대하여 $b = a(a^{-1}b)$이므로 $a \mid b$이다. $a$가 $1$과 연관원이면 $a = u \cdot 1 = u \in R^{\times}$이고, 거꾸로 $a \in R^{\times}$이면 $a = a \cdot 1$이다.

**4.** $a = ua'$이고 $u \in D^{\times}$라 하자. $a \mid b$이면 $b = ac = a'(uc)$이므로 $a' \mid b$이다. $b \mid a$이면 $a = bc$이고 $a' = u^{-1}a = b(u^{-1}c)$이므로 $b \mid a'$이다. $a$가 기약원이라 하자. $a' = 0$이면 $a = u0 = 0$이 되어 어긋나므로 $a' \ne 0$이다. $a' \in D^{\times}$이면 $a = ua' \in D^{\times}$가 되어 어긋난다. $a' = bc$이면 $a = (ub)c$이므로 $ub \in D^{\times}$이거나 $c \in D^{\times}$이고, $ub \in D^{\times}$이면 $b = u^{-1}(ub) \in D^{\times}$이다. 따라서 $a'$은 기약원이다. $a$가 소원이라 하자. 위와 같이 $a' \ne 0$, $a' \notin D^{\times}$이고, $a' \mid bc$이면 앞에서 보인 첫 문장을 연관원 $a'$, $a$에 쓴 것($a' = u^{-1}a$)에 의해 $a \mid bc$이며, $a \mid b$이거나 $a \mid c$이고, 다시 첫 문장에 의해 $a' \mid b$이거나 $a' \mid c$이다. 따라서 $a'$은 소원이다.

지금까지 보인 것은 연관원인 모든 쌍 $(a, a')$에 대한 것이다. (2)에 의해 $a'$과 $a$도 연관원이므로, 두 자리를 바꿔 쓰면 네 동치의 나머지 방향이 나온다.

**5.** $a$가 기약원이고 $c \mid a$, 곧 $a = cd$라 하자. 그러면 $c \in D^{\times}$이거나 $d \in D^{\times}$이다. $d \in D^{\times}$이면 $c = d^{-1}a$이므로 $c$는 $a$와 연관원이다. 거꾸로 $a$의 약수가 모두 가역원이거나 $a$와 연관원이라 하고 $a = bc$라 하자. $b \mid a$이므로 $b \in D^{\times}$이거나 $b = ua$인 $u \in D^{\times}$가 있다. 뒤의 경우 $a \cdot 1 = a = uac = a(uc)$이고 $a \ne 0$이므로 소거법칙에 의해 $uc = 1$이고, $c \in D^{\times}$이다. 따라서 $a$는 기약원이다.

**6.** $a$가 소원이고 $a = bc$라 하자. $a \mid a$이므로 $a \mid bc$이고, $a \mid b$이거나 $a \mid c$이다. $b = ad$이면 $a \cdot 1 = a = adc = a(dc)$이므로 소거법칙에 의해 $dc = 1$이고 $c \in D^{\times}$이다. $c = ad$이면 같은 계산으로 $a(bd) = a$이므로 $bd = 1$이고 $b \in D^{\times}$이다. $a \ne 0$이고 $a \notin D^{\times}$인 것은 소원의 정의에 있다.

**7.** $a \ne 0$이라 하자. 극대 아이디얼과 소 아이디얼의 정의에 의해 $aD$가 소 아이디얼인 것은 정확히 $aD \ne D$이고 $bc \in aD$이면 $b \in aD$이거나 $c \in aD$일 때이다. (3)에 의해 $aD \ne D$인 것은 정확히 $a \notin D^{\times}$일 때이고, (1)에 의해 $x \in aD$인 것은 정확히 $a \mid x$일 때이다. 이렇게 바꿔 읽으면 그 조건은 $a \ne 0$일 때 소원의 정의와 같다. $a = 0$이면 $0D = \{0 \cdot r : r \in D\} = \{0\}$이고, [[maximal-and-prime-ideals|극대 아이디얼과 소 아이디얼]]의 (6)에 의해 정역에서 $\{0\}$은 소 아이디얼이다. $0$은 소원의 정의의 $a \ne 0$을 만족하지 않는다.

**8.** 체에서는 $0$이 아닌 원소가 모두 가역원이므로, $0$이 아니고 가역원이 아닌 원소가 없다. $a$, $b$가 $0$이 아니면 $a = (ab^{-1})b$이고 $ab^{-1} \in D^{\times}$이다.

**9.** (i) 환 $\mathbb{Z}$의 곱은 정수의 곱이므로(환의 예의 (1)) 두 정의는 모두 "$b = ac$인 정수 $c$가 있다"이다. 이것은 다항식환의 (6)이 적은 것이기도 하다.

(ii) 가역원과 체의 (2)의 (i)에 의해 $\mathbb{Z}^{\times} = \{1, -1\}$이다. 따라서 $a$와 $b$가 연관원인 것은 정확히 $a = 1b = b$이거나 $a = (-1)b = -b$일 때이다.

(iii) 먼저 자연수 $n$에 대하여 세 조건이 동치임을 보인다. 정수의 순서는 [[prime-number|소수]]의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z8), (L1)을 쓴다.

- $n$이 기약원이면 소수이다. $n \notin \{1, -1\}$이므로 $n \ne 1$이고, $n \ge 1$((Z1))이므로 $n > 1$이다. $d$가 $n$의 양의 약수, 곧 $n = dc$인 정수 $c$가 있는 양의 정수라 하자. 기약원이므로 $d \in \{1, -1\}$이거나 $c \in \{1, -1\}$이다. $d > 0$이고 $-1 < 0$이므로 $d \ne -1$이다. $c = 1$이면 $d = n$이고, $c = -1$이면 $d = -n < 0$이 되어 어긋난다. 따라서 $n$의 양의 약수는 $1$과 $n$뿐이고, $n \ne 1$이므로 정확히 두 개이다. 곧 $n$은 소수이다.
- $n$이 소수이면 소원이다. 소수의 진술에 의해 $n \ne 1$이고 $n > 0$이므로 $n \notin \{0, 1, -1\}$이다. $n \mid bc$이면 (i)에 의해 정수의 뜻으로 $n \mid bc$이고, [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $n \mid b$이거나 $n \mid c$이다.
- $n$이 소원이면 (6)에 의해 기약원이다.

이제 정수 $p$를 생각한다. $p = 0$이면 $0$은 기약원도 소원도 아니고(정의의 $a \ne 0$), $0 = -0$은 자연수가 아니므로 소수가 아니다. $p \ne 0$이면 (Z5)에 의해 $p > 0$이거나 $p < 0$이다. $p > 0$이면 $n = p$로 두고, $p < 0$이면 (Z7)에 의해 $0 < -p$이므로 $n = -p$로 둔다. 어느 경우든 $n$은 자연수이고 (ii)에 의해 $p$와 연관원이므로, (4)에 의해 $p$가 기약원인 것은 정확히 $n$이 기약원일 때이고, 소원도 같다. 또 $p$와 $-p$ 가운데 음수인 쪽은 자연수가 아니어서 소수가 아니므로, "$p$와 $-p$ 가운데 하나가 소수"인 것은 정확히 $n$이 소수일 때이다. 위의 자연수의 경우에 의해 세 조건은 동치이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}$와 $\mathbb{Z}_7[X]$의 연관원]
(9)의 (ii)에 의해 정수 $-12$와 연관원인 정수는 $-12$와 $12$뿐입니다. $\mathbb{Z}$에서 $6 = 2 \cdot 3$이고 $2$와 $3$은 $\{1, -1\}$에 속하지 않으므로 $6$은 기약원이 아닙니다. $-5$는 $5$가 소수이므로 (9)의 (iii)에 의해 기약원이고 소원입니다.

$\mathbb{Z}_7$은 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $\mathbb{Z}_7[X]$는 정역이고, 그 가역원은 영이 아닌 상수 다항식입니다([[degree-of-a-polynomial|다항식의 차수]]의 (6), (7)). $[3][5] = [15] = [1]$이므로 $[5]([3]X^2 + [6]) = [15]X^2 + [30] = X^2 + [2]$이고, 따라서 $[3]X^2 + [6]$과 $X^2 + [2]$는 연관원입니다. (2)에 의해 두 다항식은 같은 주 아이디얼을 만듭니다.
:::

:::counterexample[$2$는 $\mathbb{Z}$에서 기약원이지만 $\mathbb{R}$에서는 가역원이다]
$2$는 소수이므로 (9)의 (iii)에 의해 $\mathbb{Z}$의 기약원입니다. 그런데 $\mathbb{R}$은 체이고([[field|가역원과 체]]의 (4)) $\mathbb{R}^{\times} = \mathbb{R} - \{0\}$이므로(같은 항목의 (2)의 (ii)) 실수 $2$는 $\mathbb{R}$의 가역원이고, (8)에 의해 $\mathbb{R}$에는 기약원이 없습니다. 같은 원소라도 어느 정역에서 보느냐에 따라 기약원인지가 달라질 수 있습니다.
:::

## 확인 질문

:::check[(5)로 보면 $\mathbb{Z}$에서 $15$는 기약원인가?]
아닙니다. $15 = 3 \cdot 5$이므로 $3 \mid 15$이고, (9)의 (ii)에 의해 가역원은 $\pm 1$, $15$와 연관원인 정수는 $\pm 15$인데 $3$은 그 어느 것도 아닙니다. $15 \ne 0$이고 $15 \notin \{1, -1\}$이므로 (5)에 의해 $15$는 기약원이 아닙니다.
:::

:::check[정역 $D$에서 $0$과 연관원인 원소, $1$과 연관원인 원소는 각각 무엇인가?]
(2)에 의해 $0$과 연관원인 것은 $0$뿐이고, (3)에 의해 $1$과 연관원인 것은 정확히 가역원입니다. 그래서 (2)의 동치류로 나누면 $\{0\}$과 $D^{\times}$가 각각 하나의 동치류입니다.
:::
