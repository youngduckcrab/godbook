---
title: 극대 아이디얼과 소 아이디얼
title_en: Maximal and Prime Ideals
aliases: [극대 아이디얼, 소 아이디얼, 소이데알, 극대이데알, maximal ideal, prime ideal]
kind: theorem
field: ring-theory
msc: ["13A15"]
level: undergrad
summary: 단위원을 갖는 가환환에서, 진아이디얼 M보다 큰 아이디얼이 R뿐이면 M을 극대 아이디얼, 곱 ab가 P에 들면 a나 b가 P에 드는 진아이디얼 P를 소 아이디얼이라 한다. M이 극대인 것은 R/M이 체일 때이고, P가 소인 것은 R/P가 정역일 때이며, 극대 아이디얼은 소 아이디얼이다. ℤ에서 n ≥ 2이면 nℤ가 극대인 것, 소인 것, n이 소수인 것이 모두 같고, {0}은 소 아이디얼이지만 극대가 아니다.
requires: [set, subset, left-coset, well-ordering-principle, prime-number, divisibility, group-basic-properties, subgroup, subgroups-of-cyclic-groups, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, field, finite-integral-domain-is-a-field, ideal, quotient-ring]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.4절 극대 아이디얼의 정의(번호 없음), Theorem 16.35 p.198–199, Example 16.36, 소 아이디얼의 정의(번호 없음), Example 16.37, Proposition 16.38, Example 16.39, Corollary 16.40 p.199. 16.7절 연습문제 4, 16, 26 p.204–206
    checked: original
    note: "출처는 극대 아이디얼을 '환 R 의 진아이디얼 M 으로서 R 자신 말고는 M 을 진부분집합으로 포함하는 아이디얼이 없는 것', 곧 M 을 진부분집합으로 포함하는 아이디얼 I 는 R 인 것으로 정의한다(p.198). 정의는 가환을 요구하지 않는다. 소 아이디얼은 '가환환 R 의 진아이디얼 P 로서 ab ∈ P 이면 a ∈ P 또는 b ∈ P 인 것'으로 정의하고(p.199), 소 아이디얼에도 진아이디얼임을 요구한다. 각주 9(p.199)는 비가환환에서도 소 아이디얼을 정의할 수 있다고 적는다. 이 항목은 두 정의를 단위원을 갖는 가환환에서만 쓰고, '진부분집합으로 포함한다' 대신 'M ⊆ J 이면 J = M 이거나 J = R' 로 적는다. (1)은 출처에 명제로 없다. 출처는 Theorem 16.35 의 증명(p.198)에서 'R/M 은 가환환이고 1 + M 이 항등원'이라고 증명 없이 쓴다. (2)는 출처 Theorem 16.35(p.198–199)이다. 출처의 증명은 I = {ra + m : r ∈ R, m ∈ M} 이 아이디얼임을 그 자리에서 보이고 'I 는 M 을 진부분집합으로 포함한다'고 쓴다. 이 항목은 같은 집합을 aR + M 으로 두고 아이디얼의 (6), (8)을 인용하며, a ∈ J 와 J ≠ M 을 따로 보인다. 역방향은 출처와 같이 1 ∈ J 를 보인다. (3)은 출처 Proposition 16.38(p.199)이고, 출처는 R 에 '단위원 1 ≠ 0 을 갖는 가환환'을 가정한다. 출처의 증명은 R/P 가 정역일 때 P 가 진아이디얼이라는 것과, P 가 소 아이디얼일 때 R/P 가 단위원을 갖는다는 것을 따로 말하지 않는다. 이 항목은 둘을 몫환의 (4)로 보인다. (4)는 출처 Corollary 16.40(p.199)이고 출처는 '체는 정역이므로'라는 한 문장으로 증명한다. (5)의 '체이면 아이디얼은 {0} 과 R 뿐'은 출처 연습문제 16.16(p.205)이고, 역방향은 출처 연습문제 16.26(p.206)이 R 을 정역으로 가정하고 묻는 것을 단위원을 갖는 가환환으로 넓힌 것이다. 힌트 16.7.26(p.329)이 주 아이디얼로 ab = 1 을 얻는 것은 이 항목의 증명과 같다. '{0} 이 극대'와의 동치와 (6)은 출처에 명제로 없다. (7)의 (i)에서 'p 가 소수이면 pℤ 는 극대'는 출처 Example 16.36(p.199)이 ℤ/pℤ ≅ ℤ_p 가 체라는 것으로 보인다. 출처 Example 16.39(p.199)는 'ℤ 의 모든 아이디얼은 nℤ 꼴이다. 몫환 ℤ/nℤ ≅ ℤ_n 은 n 이 소수일 때만 정역이다. 실제로 체이다. 따라서 ℤ 의 0 이 아닌 소 아이디얼은 소수 p 에 대한 pℤ 이다'라고 적고, 이 예가 소 아이디얼의 정의에 '소'라는 말을 쓰는 것을 정당화한다고 덧붙인다(p.199 를 그림으로 확인했다). 이 항목은 n ≥ 2 인 경우를 (i)로, {0} 과 ℤ 를 (ii), (iii)으로 따로 진술한다. 출처 Example 16.37(p.199, ℤ₁₂ 의 {0, 2, 4, 6, 8, 10} 이 소이고 극대)은 법이 둘인 몫을 쓰게 되므로 싣지 않았다. 출처 16.7절 연습문제 4(p.204)는 ℤ₁₈ 등의 아이디얼 가운데 극대인 것과 소인 것을 묻는다. 예시(4ℤ, 6ℤ)는 출처 Example 16.39(p.199)의 'ℤ/nℤ 는 n 이 소수일 때만 정역'의 n = 4, 6 인 경우와 같은 결론이다. 반례(ℤ₆ 의 {[0]})는 출처 Example 16.4(p.191, ℤ₁₂ 에서 3·4 ≡ 0)가 영인자를 보이는 것과 같은 발상이고 법이 다르다. 첫째 확인 질문은 출처 연습문제 16.16 과 같은 내용에 (4), (5)를 쓴 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 일반 문장으로 읽히는 반례 제목(n = 1, 영환, 체인 경우)을 좁히고 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$R$이 단위원 $1$을 갖는 [[ring|가환환]]이라 하자. $0$, $1$, 곱 $ab$, $a - b$는 [[ring|환]]의 표기이고, 아이디얼, 진아이디얼, 주 아이디얼 $aR$, 두 아이디얼의 합 $I + J$는 [[ideal|아이디얼]]의 것이며, 몫환 $R/I$와 그 원소 $a + I$는 [[quotient-ring|몫환]]의 것이다. 정역은 [[integral-domain|영인자와 정역]]의 뜻이고, 가역원과 체는 [[field|가역원과 체]]의 뜻이다.

$R$의 진아이디얼 $M$이 $R$의 **극대 아이디얼**(maximal ideal)인 것은 정확히 $M \subseteq J$인 $R$의 모든 아이디얼 $J$에 대하여 $J = M$이거나 $J = R$일 때이다. $R$의 진아이디얼 $P$가 $R$의 **소 아이디얼**(prime ideal)인 것은 정확히 모든 $a, b \in R$에 대하여 $ab \in P$이면 $a \in P$이거나 $b \in P$일 때이다. 두 정의 모두 진아이디얼에만 쓴다. 곧 $R$ 자신은 극대 아이디얼도 소 아이디얼도 아니다.

다음이 성립한다.

1. (출발점) $I$가 $R$의 진아이디얼이면 $R/I$는 단위원 $1 + I$를 갖는 가환환이다. $R/R$은 영환이므로 정역도 체도 아니다.
2. (극대 아이디얼과 체) $R$의 아이디얼 $M$이 극대 아이디얼인 것은 정확히 $R/M$이 체일 때이다.
3. (소 아이디얼과 정역) $R$의 아이디얼 $P$가 소 아이디얼인 것은 정확히 $R/P$가 정역일 때이다.
4. (극대이면 소) $R$의 극대 아이디얼은 소 아이디얼이다.
5. (체) 다음 세 조건은 서로 동치이다: $R$이 체이다, $\{0\}$이 $R$의 극대 아이디얼이다, $R$의 아이디얼은 $\{0\}$과 $R$뿐이다.
6. (정역) $R$이 정역인 것은 정확히 $\{0\}$이 $R$의 소 아이디얼일 때이다.
7. (정수) 환 $\mathbb{Z}$는 [[ring-examples|환의 예]]의 (1)의 것이다.
   - (i) $n \ge 2$인 자연수 $n$에 대하여 다음 세 조건은 서로 동치이다: $n\mathbb{Z}$가 $\mathbb{Z}$의 극대 아이디얼이다, $n\mathbb{Z}$가 $\mathbb{Z}$의 소 아이디얼이다, $n$이 [[prime-number|소수]]이다.
   - (ii) $\{0\}$은 $\mathbb{Z}$의 소 아이디얼이지만 극대 아이디얼이 아니다. $\{0\} \subseteq 2\mathbb{Z}$이고 $2\mathbb{Z}$는 $\{0\}$과도 $\mathbb{Z}$와도 다른 아이디얼이다.
   - (iii) $1\mathbb{Z} = \mathbb{Z}$는 진아이디얼이 아니므로 극대 아이디얼도 소 아이디얼도 아니다.
   
   따라서 $\mathbb{Z}$의 소 아이디얼은 정확히 $\{0\}$과, 소수 $p$에 대한 $p\mathbb{Z}$이고, $\mathbb{Z}$의 극대 아이디얼은 정확히 소수 $p$에 대한 $p\mathbb{Z}$이다.
:::

:::english
Let $R$ be a commutative ring with unity $1$. The notation $0$, $1$, the product $ab$ and $a - b$ are those of the entry on rings; ideals, proper ideals, principal ideals $aR$ and the sum $I + J$ of two ideals are those of the entry on ideals; the quotient ring $R/I$ and its elements $a + I$ are those of the entry on quotient rings. Integral domains are as in the entry on zero divisors and integral domains, and units and fields as in the entry on units and fields.

A proper ideal $M$ of $R$ is a **maximal ideal** of $R$ exactly when, for every ideal $J$ of $R$ with $M \subseteq J$, $J = M$ or $J = R$. A proper ideal $P$ of $R$ is a **prime ideal** of $R$ exactly when, for all $a, b \in R$, $ab \in P$ implies $a \in P$ or $b \in P$. Both definitions apply only to proper ideals; that is, $R$ itself is neither a maximal ideal nor a prime ideal.

The following hold.

1. (Starting point) If $I$ is a proper ideal of $R$, then $R/I$ is a commutative ring with unity $1 + I$. $R/R$ is the zero ring, so it is neither an integral domain nor a field.
2. (Maximal ideals and fields) An ideal $M$ of $R$ is a maximal ideal exactly when $R/M$ is a field.
3. (Prime ideals and integral domains) An ideal $P$ of $R$ is a prime ideal exactly when $R/P$ is an integral domain.
4. (Maximal implies prime) Every maximal ideal of $R$ is a prime ideal.
5. (Fields) The following three conditions are equivalent: $R$ is a field; $\{0\}$ is a maximal ideal of $R$; the only ideals of $R$ are $\{0\}$ and $R$.
6. (Integral domains) $R$ is an integral domain exactly when $\{0\}$ is a prime ideal of $R$.
7. (Integers) The ring $\mathbb{Z}$ is that of item (1) of the entry on examples of rings.
   - (i) For a natural number $n \ge 2$, the following three conditions are equivalent: $n\mathbb{Z}$ is a maximal ideal of $\mathbb{Z}$; $n\mathbb{Z}$ is a prime ideal of $\mathbb{Z}$; $n$ is prime.
   - (ii) $\{0\}$ is a prime ideal of $\mathbb{Z}$ but not a maximal ideal: $\{0\} \subseteq 2\mathbb{Z}$, and $2\mathbb{Z}$ is an ideal different from both $\{0\}$ and $\mathbb{Z}$.
   - (iii) $1\mathbb{Z} = \mathbb{Z}$ is not a proper ideal, so it is neither a maximal ideal nor a prime ideal.

   Hence the prime ideals of $\mathbb{Z}$ are exactly $\{0\}$ and $p\mathbb{Z}$ for primes $p$, and the maximal ideals of $\mathbb{Z}$ are exactly $p\mathbb{Z}$ for primes $p$.
:::

## 직관

몫환 $R/I$는 $I$에 속하는 것을 $0$으로 치고 계산하는 환입니다. 그러니 $R/I$가 얼마나 "좋은" 환인지는 $I$가 어떤 아이디얼인지로 정해집니다. 소 아이디얼의 조건 "$ab \in P$이면 $a \in P$이거나 $b \in P$"를 몫환에서 읽으면 "곱이 $0$이면 한쪽이 $0$"이 되어 정역의 조건과 같고((3)), 극대 아이디얼의 조건 "사이에 끼는 아이디얼이 없다"는 몫환에서 "$0$이 아닌 원소마다 역원이 있다"가 되어 체의 조건과 같습니다((2)).

정수가 좋은 예입니다. 소수 $p$의 배수 전체 $p\mathbb{Z}$가 소 아이디얼이라는 것은 "$p$가 $ab$를 나누면 $a$나 $b$를 나눈다"는 유클리드 보조정리의 성질을 아이디얼의 말로 한 것입니다. 6의 배수 전체는 그렇지 않습니다. $2 \cdot 3 \in 6\mathbb{Z}$이지만 $2$도 $3$도 $6$의 배수가 아닙니다. 한편 $\{0\}$은 정수의 곱이 $0$이면 한쪽이 $0$이므로 소 아이디얼이지만, $\{0\}$과 $\mathbb{Z}$ 사이에 $2\mathbb{Z}$가 끼므로 극대 아이디얼은 아닙니다. 체는 정역이므로 극대이면 소이고((4)), 그 역은 $\mathbb{Z}$의 $\{0\}$에서 깨집니다.

## 증명

:::idea
(2)는 $a \notin M$일 때 $aR + M$이 $M$보다 큰 아이디얼이라는 것과, 몫환에서 $1 + M = (a + M)(r + M)$이 곧 $1 - ar \in M$이라는 것을 오간다. (3)은 정역의 정의를 몫환의 원소 $a + P$로 옮겨 쓰는 것뿐이다.
:::

:::hint
(2)의 정방향: $a + M \ne 0 + M$이면 $a \notin M$이다. $a$를 포함하면서 $M$을 포함하는 아이디얼을 아이디얼의 (6), (8)로 만든다.
:::

:::hint
(2)의 역방향: $M \subseteq J$이고 $J \ne M$이면 $J$에는 $M$ 밖의 원소 $a$가 있다. 몫환에서 $a + M$의 역원을 잡고 $1 \in J$를 보인다.
:::

:::proof
아래에서 "몫환의 ($k$)"는 [[quotient-ring|몫환]]의 ($k$), "아이디얼의 ($k$)"는 [[ideal|아이디얼]]의 ($k$)이다. $R/I$의 원소는 [[left-coset|잉여류]]의 정의에 의해 모두 $a + I$ ($a \in R$) 꼴이다. 몫환의 (3)에 의해 $a + I = b + I$인 것은 정확히 $a - b \in I$일 때이고, 특히 $a + I = 0 + I$인 것은 정확히 $a \in I$일 때이다. 이것을 아래에서 "몫환의 (3)"으로 짧게 인용한다.

**(1)** 몫환의 (4)의 (i)과 (ii)이다. $R/R$은 몫환의 (4)의 (iii)에 의해 영환이고, 영환은 [[ring|환]]의 (1)에 의해 단위원을 갖는 환이 아니다. 정역과 체는 단위원을 갖는 환이어야 하므로([[integral-domain|정역]]과 [[field|체]]의 정의) $R/R$은 둘 다 아니다.

**(2)** $M$이 극대 아이디얼이라 하자. $M$은 진아이디얼이므로 (1)에 의해 $R/M$은 단위원 $1 + M$을 갖는 가환환이다. $X \in R/M$이고 $X \ne 0 + M$이라 하자. $X = a + M$인 $a \in R$이 있고, 몫환의 (3)에 의해 $a \notin M$이다. $J = aR + M$이라 하자. 아이디얼의 (6)의 (i)에 의해 $aR$은 아이디얼이고, (8)의 (ii)에 의해 $J$는 $aR \subseteq J$, $M \subseteq J$인 아이디얼이다. 아이디얼의 (6)의 (ii)에 의해 $a \in aR \subseteq J$이고 $a \notin M$이므로 $J \ne M$이다. $M$이 극대 아이디얼이므로 $J = R$이고, 따라서 $1 \in J$이다. 곧 $1 = x + m$인 $x \in aR$, $m \in M$이 있고, $x = ar$인 $r \in R$이 있다. $(R, +)$에서 $1 - ar = (ar + m) - ar = m$이므로(덧셈의 교환법칙, 결합법칙과 $-(ar) + ar = 0$) $1 - ar \in M$이다. 몫환의 (3)과 (2)에 의해
$$1 + M = ar + M = (a + M)(r + M)$$
이고, $R/M$이 가환환이므로 $(r + M)(a + M) = 1 + M$이다. 따라서 $X = a + M$은 $R/M$의 가역원이다. $0$이 아닌 $R/M$의 모든 원소가 가역원이므로 체의 정의에 의해 $R/M$은 체이다.

거꾸로 $R/M$이 체라 하자. 체는 단위원을 갖는 환이므로 몫환의 (4)의 (ii)에 의해 $M$은 진아이디얼이다. $J$가 $M \subseteq J$인 아이디얼이고 $J \ne M$이라 하자. $M \subseteq J$이고 $J \ne M$이므로 $a \in J$이고 $a \notin M$인 $a$가 있다. 몫환의 (3)에 의해 $a + M \ne 0 + M$이므로 $a + M$은 가역원이고, $(a + M)(b + M) = 1 + M$인 $b + M \in R/M$이 있다. 몫환의 (2)에 의해 $ab + M = 1 + M$이고, 몫환의 (3)에 의해 $ab - 1 \in M \subseteq J$이다. 아이디얼의 오른쪽 흡수에 의해 $ab \in J$이다. [[group-basic-properties|군의 기본 성질]]의 (5), (6)을 덧셈 표기로 읽으면 $-(ab - 1) = 1 + (-(ab))$이므로
$$ab + \bigl(-(ab - 1)\bigr) = ab + \bigl(1 + (-(ab))\bigr) = ab + \bigl((-(ab)) + 1\bigr) = \bigl(ab + (-(ab))\bigr) + 1 = 0 + 1 = 1$$
이고, $J$는 $(R, +)$의 부분군이므로 $1 = ab - (ab - 1) \in J$이다([[subgroup|부분군]]의 (2)와 닫혀 있음). 아이디얼의 (4)에 의해 $J = R$이다. 따라서 $M \subseteq J$인 아이디얼 $J$는 $M$이거나 $R$이고, $M$은 극대 아이디얼이다.

**(3)** $P$가 소 아이디얼이라 하자. $P$는 진아이디얼이므로 (1)에 의해 $R/P$는 단위원을 갖는 가환환이다. $X, Y \in R/P$이고 $XY = 0 + P$라 하자. $X = a + P$, $Y = b + P$인 $a, b \in R$이 있고, 몫환의 (2)에 의해 $ab + P = 0 + P$, 몫환의 (3)에 의해 $ab \in P$이다. 소 아이디얼의 정의에 의해 $a \in P$이거나 $b \in P$이고, 몫환의 (3)에 의해 $X = 0 + P$이거나 $Y = 0 + P$이다. [[integral-domain|정역]]의 정의에 의해 $R/P$는 정역이다.

거꾸로 $R/P$가 정역이라 하자. 정역은 단위원을 갖는 환이므로 몫환의 (4)의 (ii)에 의해 $P$는 진아이디얼이다. $a, b \in R$이고 $ab \in P$이면 몫환의 (2), (3)에 의해 $(a + P)(b + P) = ab + P = 0 + P$이다. $R/P$가 정역이므로 $a + P = 0 + P$이거나 $b + P = 0 + P$이고, 몫환의 (3)에 의해 $a \in P$이거나 $b \in P$이다. 따라서 $P$는 소 아이디얼이다.

**(4)** $M$이 극대 아이디얼이면 (2)에 의해 $R/M$은 체이고, [[field|가역원과 체]]의 (3)에 의해 체는 정역이므로, (3)에 의해 $M$은 소 아이디얼이다.

**(5)** [[ring-basic-properties|환의 기본 성질]]의 (7)에 의해 단위원을 갖는 환 $R$은 서로 다른 $0$과 $1$을 가지므로 $1 \notin \{0\}$이고, 아이디얼의 (3), (4)에 의해 $\{0\}$은 진아이디얼이다.

$R$이 체라 하자. $I$가 아이디얼이고 $I \ne \{0\}$이면 $a \ne 0$인 $a \in I$가 있다. 체의 정의에 의해 $a$는 가역원이므로 $a^{-1}a = 1$이고, 왼쪽 흡수에 의해 $1 \in I$이다. 아이디얼의 (4)에 의해 $I = R$이다. 따라서 $R$의 아이디얼은 $\{0\}$과 $R$뿐이다.

$R$의 아이디얼이 $\{0\}$과 $R$뿐이라 하자. $\{0\}$은 진아이디얼이고 $\{0\} \subseteq J$인 아이디얼 $J$는 $\{0\}$이거나 $R$이므로, $\{0\}$은 극대 아이디얼이다.

$\{0\}$이 극대 아이디얼이라 하자. $a \in R$이고 $a \ne 0$이면 아이디얼의 (6)의 (ii)에 의해 $aR$은 $a$를 포함하는 아이디얼이므로 $aR \ne \{0\}$이고, $\{0\} \subseteq aR$이므로 극대성에 의해 $aR = R$이다. 따라서 $1 \in aR$, 곧 $ab = 1$인 $b \in R$이 있고, $R$이 가환환이므로 $ba = 1$이다. 곧 $a$는 가역원이다. $R$은 단위원을 갖는 가환환이므로 체의 정의에 의해 체이다.

**(6)** (5)의 첫 문단에 의해 $\{0\}$은 진아이디얼이다. 소 아이디얼의 정의에 의해 $\{0\}$이 소 아이디얼인 것은 정확히 모든 $a, b \in R$에 대하여 $ab = 0$이면 $a = 0$이거나 $b = 0$일 때이다. $R$은 단위원을 갖는 가환환이므로 [[integral-domain|정역]]의 정의에 의해 이것은 정확히 $R$이 정역일 때이다.

**(7)** [[ring-examples|환의 예]]의 (1)에 의해 $\mathbb{Z}$는 단위원 $1$을 갖는 가환환이다.

(i) $n \ge 2$이면 $n\mathbb{Z}$는 진아이디얼이다. 아이디얼의 (7)에 의해 $n\mathbb{Z}$는 아이디얼이고, $n\mathbb{Z} = \mathbb{Z} = 1\mathbb{Z}$라면 같은 항목의 (7)의 $n$이 하나뿐이라는 것에 의해 $n = 1$이어야 하기 때문이다. [[quotient-ring|몫환]]의 (6)에 의해 몫환 $\mathbb{Z}/n\mathbb{Z}$는 환 $\mathbb{Z}_n$과 같은 환이다. [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (2)에 의해, $n$이 소수인 것, $\mathbb{Z}_n$이 정역인 것, $\mathbb{Z}_n$이 체인 것은 서로 같다. (2)에 의해 $n\mathbb{Z}$가 극대 아이디얼인 것은 $\mathbb{Z}/n\mathbb{Z}$가 체인 것과 같고, (3)에 의해 $n\mathbb{Z}$가 소 아이디얼인 것은 $\mathbb{Z}/n\mathbb{Z}$가 정역인 것과 같다. 따라서 세 조건은 서로 동치이다.

(ii) [[integral-domain|영인자와 정역]]의 (2)에 의해 $\mathbb{Z}$는 정역이므로 (6)에 의해 $\{0\}$은 소 아이디얼이다. 아이디얼의 (7)에 의해 $2\mathbb{Z}$는 아이디얼이고 $0 = 2 \cdot 0 \in 2\mathbb{Z}$이므로 $\{0\} \subseteq 2\mathbb{Z}$이다. 같은 항목의 (7)의 $n$의 유일성에 의해 $2\mathbb{Z} \ne 0\mathbb{Z} = \{0\}$이고 $2\mathbb{Z} \ne 1\mathbb{Z} = \mathbb{Z}$이다. 따라서 $\{0\}$은 극대 아이디얼이 아니다.

(iii) 두 정의는 진아이디얼에만 쓴다.

끝 문장: 아이디얼의 (7)에 의해 $\mathbb{Z}$의 아이디얼은 $0$ 이상의 정수 $n$에 대한 $n\mathbb{Z}$이다. $n = 0$, $n = 1$, $n \ge 2$로 나누면([[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)) (ii), (iii), (i)에 의해 소 아이디얼은 $\{0\}$과 소수 $p$에 대한 $p\mathbb{Z}$이고, 극대 아이디얼은 소수 $p$에 대한 $p\mathbb{Z}$이다. 소수는 정의에 의해 $2$ 이상이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℤ에서 4ℤ와 6ℤ]
$4\mathbb{Z}$는 소 아이디얼이 아닙니다. $2 \cdot 2 = 4 \in 4\mathbb{Z}$이지만 [[ideal|아이디얼]]의 (6)의 (iii)에서 보인 대로 $2 \notin 4\mathbb{Z}$입니다. 따라서 (4)에 의해 극대 아이디얼도 아닙니다. 실제로 $4\mathbb{Z} \subseteq 2\mathbb{Z}$이고([[subgroups-of-cyclic-groups|순환군의 부분군]]의 (3), $2 \mid 4$), 아이디얼의 (7)의 유일성에 의해 $2\mathbb{Z}$는 $4\mathbb{Z}$와도 $\mathbb{Z}$와도 다릅니다. 같은 방식으로 $6\mathbb{Z}$에서는 $2 \cdot 3 = 6 \in 6\mathbb{Z}$입니다. $2 \in 6\mathbb{Z}$라면 아이디얼의 (6)의 (ii)에 의해 $2\mathbb{Z} \subseteq 6\mathbb{Z}$이고, $2 \mid 6$이므로 순환군의 부분군의 (3)에 의해 $6\mathbb{Z} \subseteq 2\mathbb{Z}$이어서 $2\mathbb{Z} = 6\mathbb{Z}$가 되는데, 이것은 아이디얼의 (7)의 유일성에 어긋납니다. 따라서 $2 \notin 6\mathbb{Z}$입니다. $2$를 $3$으로 바꾸어($3 \mid 6$) 같은 논법을 쓰면 $3 \notin 6\mathbb{Z}$입니다. 이것은 (7)의 (i)에서 $4$와 $6$이 소수가 아니라는 것과 맞습니다.
:::

:::counterexample[ℤ_6에서 {[0]}은 소 아이디얼이 아니다]
[[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_6$은 단위원을 갖는 가환환입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[2] \ne [0]$이고 $[3] \ne [0]$이지만, 같은 항목의 (2)에 의해 $[2][3] = [6] = [0]$입니다($6 - 0 = 6 \cdot 1$이므로 [[congruence-modulo-n|합동]]과 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]). 곱 $[2][3]$은 $\{[0]\}$에 들지만 두 인수는 어느 것도 들지 않으므로 $\{[0]\}$은 소 아이디얼이 아닙니다. (6)과 맞게 $\mathbb{Z}_6$은 정역이 아니고, (4)에 의해 $\{[0]\}$은 극대 아이디얼도 아닙니다. 곧 $\{[0]\}$과 $\mathbb{Z}_6$ 사이에 다른 아이디얼이 끼는데, 그 하나가 [[ideal|아이디얼]]의 예시의 $\{[0], [3]\}$입니다.
:::

## 확인 질문

:::check[$R$이 체이면 $R$의 극대 아이디얼과 소 아이디얼은 무엇인가?]
둘 다 $\{0\}$ 하나뿐입니다. (5)에 의해 $R$의 아이디얼은 $\{0\}$과 $R$뿐이고 $R$은 진아이디얼이 아니므로, 후보는 $\{0\}$뿐입니다. (5)에 의해 $\{0\}$은 극대 아이디얼이고 (4)에 의해 소 아이디얼입니다.
:::

:::check[ℤ에서 6ℤ를 포함하는 극대 아이디얼을 둘 들어라.]
$2\mathbb{Z}$와 $3\mathbb{Z}$입니다. $2 \mid 6$이고 $3 \mid 6$이므로 [[subgroups-of-cyclic-groups|순환군의 부분군]]의 (3)에 의해 $6\mathbb{Z} \subseteq 2\mathbb{Z}$이고 $6\mathbb{Z} \subseteq 3\mathbb{Z}$입니다. $2$와 $3$은 소수이므로 (7)의 (i)에 의해 $2\mathbb{Z}$와 $3\mathbb{Z}$는 극대 아이디얼입니다.
:::
