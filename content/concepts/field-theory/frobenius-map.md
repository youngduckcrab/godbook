---
title: 프로베니우스 사상
title_en: Frobenius Map
aliases: [프로베니우스 준동형, 프로베니우스 자기동형, Frobenius map, Frobenius endomorphism, Frobenius automorphism]
kind: theorem
field: field-theory
msc: ["13A35", "12E20"]
level: undergrad
summary: "표수가 소수 p 인 단위원을 갖는 가환환에서, q 가 p 의 거듭제곱일 때 a 를 a 의 q 제곱으로 보내는 함수 Fr_q 는 1 을 1 로 보내는 환 준동형이고, 두 함수의 합성은 지수를 곱한 것이다. 정역에서는 단사이고, 유한집합인 정역에서는 환 동형사상이다. q 제곱해도 제자리인 원소 전체는 덧셈, 뺄셈, 곱셈에 닫혀 있고 체에서는 부분체이다."
requires: [function, recursion-theorem, inverse-function, function-composition, injective-surjective-bijective, finite-set, subset-of-finite-set, prime-number, well-ordering-principle, divisibility, mathematical-induction, prime-power-divisors, power-in-a-group, integers-modulo-n, ring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, subfield, finite-products-in-a-commutative-ring, characteristic-of-a-ring, binomial-theorem, polynomial-ring, degree-of-a-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Lemma 22.3 과 그 증명 (p.278–279), Theorem 22.6 의 증명 (p.280); 22.4절 Exercises, 연습문제 13, 14 (p.290), 21, 22 (p.290); 6.3절 Fermat's and Euler's Theorems, Theorem 6.19 (p.78); 22.1절, Theorem 22.7 의 증명 (p.280); 23.1절 Field Automorphisms, Corollary 23.9 의 증명 (p.295); 16.7절 Exercises, 연습문제 28 (p.206); 23.5절 Exercises, 연습문제 13 (p.308)"
    checked: original
    note: "출처 Lemma 22.3(Freshman's Dream, p.278–279)은 표수 p 인 정역 D 에서 a^{p^n} + b^{p^n} = (a + b)^{p^n} (n 은 자연수)을 진술하고 n = 1 은 이항정리와 'p cannot divide k!(p − k)!' 로, 그 뒤는 n 에 대한 귀납으로 증명한다. 예시 '법 5의 정수 위의 다항식환에서 다섯제곱' 은 Lemma 22.3 을 n = 1 에서 환 Z_5[X] 에 쓴 것이다. 이 항목은 이 등식을 이항정리 항목(binomial-theorem)의 (3)에서 가져오고, 정역을 가정하지 않고 단위원을 갖는 가환환에서 진술하며 지수 p^0 = 1 도 넣는다. 함수 a ↦ a^p 의 이름 'Frobenius map' 은 출처 연습문제 22.4.21(p.290, GF(p^n) 의 프로베니우스 사상은 위수 n 인 자기동형이다)에 나오고, 출처는 그 함수를 Φ 로 쓴다. 출처 Corollary 23.9 의 증명(p.295)은 σ(α) = α^{p^n} 으로 정한 함수가 유한체의 갈루아 군의 생성원임을 보인다. 이 항목은 기호 Fr_q 를 쓰고 지수가 p 의 거듭제곱인 경우까지 Fr_q 로 이름 붙인다(Φ 는 이 사이트의 다른 항목이 대응 정리의 함수에 쓴다). (3)의 '유한집합인 체에서 모든 원소가 정확히 하나의 원소의 q 제곱이다' 는 q = p 일 때 출처 연습문제 22.4.22(p.290, GF(p^n) 의 모든 원소는 정확히 하나의 a 에 대한 a^p 이다)와 같은 내용이다. (3)의 단사와 전단사는 출처 Corollary 23.9 의 증명(p.295)이 σ(α) = α^{p^n} 에 대하여 'Since σ is a nonzero homomorphism of fields, it must be injective. It must also be onto, since E is a finite field' 라고 쓰는 것과 같은 결론이다. (4)의 (iii)은 출처 Theorem 22.7 의 증명(p.280) 끝의 'every zero of x^{p^m} − x is also a zero of x^{p^n} − x' 와 같은 결론이고, 확인 질문 '표수가 $3$인 체 $F$의 원소 $a$, $b$가 $a^9 = a$, $b^3 = b$를 만족하면 $(a + b)^9$는 무엇인가?' 는 그것을 m = 1, n = 2 에 쓴 것이다. 출처는 그 결론을 p^m − 1 | p^n − 1 에서 다항식의 나누어떨어짐으로 얻고, 이 항목은 (2)와 귀납법으로 얻는다. (4)의 (i)(ii)는 출처 Theorem 22.6 의 증명(p.280)이 x^{p^n} − x 의 근 전체가 부분체임을 보이는 계산(합과 곱은 Lemma 22.3 으로, 덧셈의 역원은 p 가 홀수인지 2 인지로 나누어, 역원은 (α^{-1})^{p^n} = (α^{p^n})^{-1} 로)과 같은 발상이다. 이 항목은 뺄셈 꼴 (a − b)^q = a^q − b^q 로 덧셈의 역원과 뺄셈을 한 번에 다루며, 그 뺄셈 꼴은 출처 연습문제 22.4.14(p.290)이다. (5)를 q = p 에서 보면 출처 Theorem 6.19(Fermat's Little Theorem, p.78)의 'for any integer b, b^p ≡ b (mod p)' 와 같은 내용이고, 이 항목은 그것을 Fr_q 가 k·1 을 고정한다는 것에서 얻는다. 반례 '정역 $\\mathbb{Z}_3[X]$에서 세제곱이 아닌 원소 $X$' 는 유한집합이 아닌 표수 p 인 체를 묻는 출처 연습문제 22.4.13(p.290, Z_p(x))과 닿아 있고, 출처 23.5절 연습문제 13(p.308, Z_p(t)[x] 에서 x^p − t 가 기약이고 분리 다항식이 아님을 보여라)은 유리함수체의 원소 t 가 p제곱이 아니라는 것을 담고 있어 이 반례와 같은 발상이다. 확인 질문 '$\\mathbb{Z}_2[X]$에서 $f^2 = f$인 다항식 $f$를 모두 구하면?' 은 a² = a 인 원소를 다루는 출처 연습문제 16.7.28(p.206, Boolean ring)과 같은 조건을 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 순환군 증명과 프로베니우스 (4)(iii) 통독). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$p$가 [[prime-number|소수]]이고 $R$이 단위원 $1$을 갖는 가환환([[ring|환]]의 뜻)이며 $\operatorname{char} R = p$라 하자. 표수 $\operatorname{char} R$는 [[characteristic-of-a-ring|환의 표수]]의 것이고, $0$, $1$, $a - b$, 곱 $ab$, 정수배 $k \cdot a$는 [[ring|환]]의 표기이다. 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이고, 지수 $p^n$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다($p^0 = 1$). 환 준동형과 환 동형사상은 [[ring-homomorphism|환 준동형]]의 것이고, 정역은 [[integral-domain|영인자와 정역]], 체와 역원 $a^{-1}$은 [[field|가역원과 체]], 부분체는 [[subfield|부분체]]의 뜻이다.

**프로베니우스 사상.** $n$이 $0$ 이상인 정수이고 $q = p^n$이라 하자. 모든 $a \in R$에서
$$
\operatorname{Fr}_q(a) = a^q
$$
인 [[function|함수]] $\operatorname{Fr}_q : R \to R$를 생각한다. 특히 $\operatorname{Fr}_p$, 곧 $a$를 $a^p$로 보내는 함수를 $R$의 **프로베니우스 사상**(Frobenius map)이라 한다. $\operatorname{Fr}_q$는 환 $R$에 따라 정해지며, 환을 밝혀야 하면 "$R$의 $\operatorname{Fr}_q$"라고 쓴다.

다음이 성립한다. 아래에서 $m$, $n$은 $0$ 이상인 정수, $q = p^n$이고, $a$, $b$는 $R$의 원소이다.

1. (환 준동형) $(a + b)^q = a^q + b^q$, $(a - b)^q = a^q - b^q$, $(ab)^q = a^q b^q$, $1^q = 1$이다. 따라서 $\operatorname{Fr}_q : R \to R$는 $\operatorname{Fr}_q(1) = 1$인 환 준동형이다. 또 모든 정수 $k$에서 $\operatorname{Fr}_q(k \cdot 1) = k \cdot 1$이다.
2. (합성) $\operatorname{Fr}_1$은 항등함수 $i_R$이고,
   $$
   \begin{aligned}
   \operatorname{Fr}_{p^m} \circ \operatorname{Fr}_{p^n} &= \operatorname{Fr}_{p^{m+n}} \\
   &= \operatorname{Fr}_{p^n} \circ \operatorname{Fr}_{p^m}
   \end{aligned}
   $$
   이다. 곧 $\bigl(a^{p^n}\bigr)^{p^m} = a^{p^{m+n}}$이다.
3. (정역) $R$이 정역이면 $\operatorname{Fr}_q$는 단사이다. $R$이 정역이고 [[finite-set|유한집합]]이면 $\operatorname{Fr}_q : R \to R$는 전단사이고 환 동형사상이다. 특히 $R$이 유한집합인 체이면, 모든 $b \in R$에 대하여 $a^q = b$인 $a \in R$가 정확히 하나 있다.
4. ($q$제곱해도 제자리인 원소) 집합 $\{a \in R : a^q = a\}$에 대하여 다음이 성립한다.
   - (i) 모든 정수 $k$에서 $k \cdot 1$은 이 집합에 속한다. $a$와 $b$가 이 집합에 속하면 $a + b$, $a - b$, $ab$도 이 집합에 속한다.
   - (ii) $R$이 체이면 $\{a \in R : a^q = a\}$는 $R$의 부분체이다.
   - (iii) $m \mid n$이면 $\{a \in R : a^{p^m} = a\} \subseteq \{a \in R : a^{p^n} = a\}$이다.
5. (법 $p$의 정수) 체 $\mathbb{Z}_p$([[integers-modulo-n|법 n의 정수]])에서 $\operatorname{Fr}_q$는 항등함수이다. 곧 모든 $x \in \mathbb{Z}_p$에서 $x^q = x$이다.
:::

:::english
Let $p$ be a prime and let $R$ be a commutative ring with unity $1$ (in the sense of the entry on rings) with $\operatorname{char} R = p$. The characteristic $\operatorname{char} R$ is that of the entry on the characteristic of a ring, and $0$, $1$, $a - b$, the product $ab$ and integer multiples $k \cdot a$ are the notation of the entry on rings. Powers $a^k$ are those of the entry on finite products and powers in a commutative ring, and the exponent $p^n$ is the integer power of the entry on prime power divisors ($p^0 = 1$). Ring homomorphisms and ring isomorphisms are those of the entry on ring homomorphisms; integral domains are in the sense of the entry on zero divisors and integral domains, fields and inverses $a^{-1}$ in the sense of the entry on units and fields, and subfields in the sense of the entry on subfields.

**Frobenius maps.** Let $n$ be an integer $\ge 0$ and $q = p^n$. Consider the function $\operatorname{Fr}_q : R \to R$ with
$$
\operatorname{Fr}_q(a) = a^q
$$
for all $a \in R$. In particular $\operatorname{Fr}_p$, the function sending $a$ to $a^p$, is called the **Frobenius map** of $R$. $\operatorname{Fr}_q$ depends on the ring $R$; when the ring must be named we write "the $\operatorname{Fr}_q$ of $R$".

The following hold. Below, $m$, $n$ are integers $\ge 0$, $q = p^n$, and $a$, $b$ are elements of $R$.

1. (Ring homomorphism) $(a + b)^q = a^q + b^q$, $(a - b)^q = a^q - b^q$, $(ab)^q = a^q b^q$ and $1^q = 1$. Hence $\operatorname{Fr}_q : R \to R$ is a ring homomorphism with $\operatorname{Fr}_q(1) = 1$. Moreover $\operatorname{Fr}_q(k \cdot 1) = k \cdot 1$ for every integer $k$.
2. (Composition) $\operatorname{Fr}_1$ is the identity function $i_R$, and
   $$
   \begin{aligned}
   \operatorname{Fr}_{p^m} \circ \operatorname{Fr}_{p^n} &= \operatorname{Fr}_{p^{m+n}} \\
   &= \operatorname{Fr}_{p^n} \circ \operatorname{Fr}_{p^m}.
   \end{aligned}
   $$
   That is, $\bigl(a^{p^n}\bigr)^{p^m} = a^{p^{m+n}}$.
3. (Integral domains) If $R$ is an integral domain, then $\operatorname{Fr}_q$ is injective. If $R$ is an integral domain and a finite set, then $\operatorname{Fr}_q : R \to R$ is bijective and a ring isomorphism. In particular, if $R$ is a field that is a finite set, then for every $b \in R$ there is exactly one $a \in R$ with $a^q = b$.
4. (Elements fixed by the $q$th power) For the set $\{a \in R : a^q = a\}$ the following hold.
   - (i) $k \cdot 1$ belongs to this set for every integer $k$. If $a$ and $b$ belong to this set, so do $a + b$, $a - b$ and $ab$.
   - (ii) If $R$ is a field, then $\{a \in R : a^q = a\}$ is a subfield of $R$.
   - (iii) If $m \mid n$, then $\{a \in R : a^{p^m} = a\} \subseteq \{a \in R : a^{p^n} = a\}$.
5. (Integers modulo $p$) In the field $\mathbb{Z}_p$ (the integers modulo $p$), $\operatorname{Fr}_q$ is the identity function; that is, $x^q = x$ for all $x \in \mathbb{Z}_p$.
:::

## 직관

정수나 실수에서 $(a + b)^2$는 $a^2 + b^2$와 다를 수 있습니다. $a = b = 1$이면 $4$와 $2$입니다. 가운데 항 $2ab$가 $0$이 아니면 남기 때문입니다. 표수가 소수 $p$인 환에서는 $p$제곱을 펼칠 때 양 끝을 뺀 이항계수가 모두 $p$의 배수이고 $p \cdot x = 0$이므로 가운데 항이 모두 사라집니다([[binomial-theorem|이항정리]]의 (2)). 그래서 "$p$제곱하기"가 덧셈과 뺄셈을 그대로 지나가고, 곱셈은 가환이므로 처음부터 지나갑니다. 이것이 (1)입니다.

환율이 고정된 환전을 생각해 볼 수 있습니다. 두 금액을 더한 뒤 바꾸든 따로 바꾼 뒤 더하든 결과가 같습니다. 환 준동형은 이런 "바꾸는 규칙"이고, (1)은 표수 $p$인 환 안에서 $q$제곱하기가 그런 규칙이라는 말입니다. 비유가 맞지 않는 곳도 있습니다. 환전은 다른 화폐로 옮기지만 $\operatorname{Fr}_q$는 같은 환 안에서 옮기고, 곱셈과 $1$도 지킵니다.

$q = 1$이면 $\operatorname{Fr}_1$은 아무것도 바꾸지 않습니다. 정역에서 $\operatorname{Fr}_q$가 단사인 것은 $0$이 아닌 원소의 거듭제곱이 $0$이 될 수 없기 때문이고, 유한집합에서는 단사인 함수가 자기 자신으로의 전사이기도 하므로 (3)의 둘째 문장이 나옵니다. 원소가 무한히 많으면 전사가 아닐 수 있습니다(아래 반례). (4)는 $\operatorname{Fr}_q$가 덧셈, 뺄셈, 곱셈을 지키므로 $\operatorname{Fr}_q$가 움직이지 않는 원소끼리 계산한 결과도 움직이지 않는다는 말입니다.

## 증명

:::idea
(1)의 합과 차는 이항정리의 (3)이고, 곱과 $1$은 거듭제곱의 법칙이다. (3)은 핵이 $\{0\}$이라는 것과 유한집합의 부분집합의 원소 개수로, (4)는 (1)과 부분체의 판정법으로, (4)의 (iii)은 (2)와 귀납법으로 보인다.
:::

:::hint
(4)의 (iii)에서 $n = mc$로 두고, $a^{p^m} = a$이면 $0$ 이상인 모든 정수 $c$에서 $a^{p^{mc}} = a$임을 $c$에 대한 귀납법으로 보인다. 귀납 단계에서 (2)를 $p^{mc + m}$에 쓴다.
:::

:::hint
(5)에서 $\mathbb{Z}_p$의 모든 원소는 어떤 정수 $k$에 대한 $[k] = k \cdot [1]$이다.
:::

:::proof
**쓰는 사실.** "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n), "준동형의 (n)"은 [[ring-homomorphism|환 준동형]]의 (n)이다. 정수의 순서와 계산은 [[prime-number]]의 (Z1), (Z3)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)과 그 진술의 계산 법칙을 쓴다. 각 $a \in R$에 $R$의 원소 $a^q$가 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\operatorname{Fr}_q$는 $R$에서 $R$로의 함수이다.

**1의 증명.** 거듭제곱의 (2)에 의해 $q = p^n \ge 1$이다. [[binomial-theorem|이항정리]]의 (3)을 $r = n$에 쓰면 $(a + b)^q = a^q + b^q$이고 $(a - b)^q = a^q - b^q$이다. 곱의 (6)의 (iv)에 의해 $(ab)^q = a^q b^q$이고, 곱의 (6)의 (v)에 의해 $1^q = 1$이다. 앞의 둘과 셋째가 각각 $\operatorname{Fr}_q(a + b) = \operatorname{Fr}_q(a) + \operatorname{Fr}_q(b)$, $\operatorname{Fr}_q(ab) = \operatorname{Fr}_q(a)\operatorname{Fr}_q(b)$이므로 $\operatorname{Fr}_q$는 환 준동형이고, 넷째는 $\operatorname{Fr}_q(1) = 1$이다. 준동형의 (1)에 의해 모든 정수 $k$에서 $\operatorname{Fr}_q(k \cdot 1) = k \cdot \operatorname{Fr}_q(1) = k \cdot 1$이다.

**2의 증명.** 거듭제곱의 정의에 의해 $p^0 = 1$이고, 곱의 (6)의 (i)에 의해 $\operatorname{Fr}_1(a) = a^1 = a$이므로 $\operatorname{Fr}_1 = i_R$이다([[inverse-function|항등함수]]). 곱의 (6)의 (iii)과 거듭제곱의 (1)의 (ii)에 의해
$$
\bigl(a^{p^n}\bigr)^{p^m} = a^{p^n \cdot p^m} = a^{p^{n+m}}
$$
이다. 곧 모든 $a$에서 $(\operatorname{Fr}_{p^m} \circ \operatorname{Fr}_{p^n})(a) = \operatorname{Fr}_{p^{m+n}}(a)$이다([[function-composition|합성]]). $m$과 $n$을 바꾸어 같은 계산을 하면 $\operatorname{Fr}_{p^n} \circ \operatorname{Fr}_{p^m} = \operatorname{Fr}_{p^{n+m}}$이고, $n + m = m + n$이다. 정의역이 같고 모든 원소에서 값이 같으므로 세 함수는 같다.

**3의 증명.** $R$이 정역이라 하자. $\operatorname{Fr}_q(a) = 0$이면 $a^q = 0$이므로 곱의 (7)에 의해 $a = 0$이다. 곧 $\operatorname{Ker} \operatorname{Fr}_q = \{0\}$이고, 준동형의 (2)에 의해 $\operatorname{Fr}_q$는 단사이다.

이제 $R$이 정역이고 유한집합이라 하자. $T = \operatorname{Fr}_q(R)$이라 하면 $T \subseteq R$이고, [[function|함수]]의 진술(공역은 선언하기 나름이다)에 의해 $\operatorname{Fr}_q$는 $R$에서 $T$로의 함수이며, 단사인지는 집합 $\operatorname{Fr}_q$만으로 정해지므로([[injective-surjective-bijective|단사, 전사, 전단사]]) $\operatorname{Fr}_q : R \to T$는 단사이다. $R$은 유한집합이므로 원소를 $s$개 갖는 정수 $s \ge 0$이 있다([[finite-set|유한집합]]). 만약 $T \ne R$이면 [[subset-of-finite-set|유한집합의 부분집합]]의 (3)에 의해 $R$에서 $T$로의 단사가 없어야 하므로 모순이다. 따라서 $T = R$이고 $\operatorname{Fr}_q : R \to R$는 전사이다. 단사이고 전사이므로 전단사이고, (1)에 의해 환 준동형이므로 환 동형사상이다.

$R$이 유한집합인 체이면 [[field|가역원과 체]]의 (3)에 의해 정역이므로 $\operatorname{Fr}_q : R \to R$는 전단사이다. 전사이므로 모든 $b \in R$에 $a^q = b$인 $a$가 있고, 단사이므로 그런 $a$는 하나뿐이다.

**4의 증명.** $A = \{a \in R : a^q = a\}$라 하자.

(i) (1)에 의해 모든 정수 $k$에서 $(k \cdot 1)^q = k \cdot 1$이므로 $k \cdot 1 \in A$이다. $a, b \in A$이면 (1)에 의해 $(a + b)^q = a^q + b^q = a + b$, $(a - b)^q = a^q - b^q = a - b$, $(ab)^q = a^q b^q = ab$이므로 $a + b$, $a - b$, $ab$는 $A$에 속한다.

(ii) $R$이 체라 하자. [[subfield|부분체]]의 (1)의 세 조건을 확인한다. [[power-in-a-group|군의 거듭제곱]]의 (4)에 의해 $1 \cdot 1 = 1$이므로 (i)에 의해 $1 \in A$이다. (i)에 의해 $A$는 뺄셈과 곱셈에 닫혀 있다. $a \in A$이고 $a \ne 0$이면 $a$는 가역원이고, 곱의 (8)에 의해 $(a^{-1})^q = (a^q)^{-1} = a^{-1}$이므로 $a^{-1} \in A$이다. 따라서 $A$는 $R$의 부분체이다.

(iii) $m \mid n$이라 하자. [[divisibility|나누어떨어짐]]의 정의에 의해 $n = mc$인 정수 $c$가 있다.

$m = 0$이면 $n = 0 \cdot c = 0$이므로 $p^m = p^n = 1$이고 두 집합은 같다.

$m \ne 0$이면 $m \ge 1$이다((Z5), (Z1)). 먼저 $c \ge 0$임을 보인다. $c < 0$이면 (Z1)에 의해 $c + 1 \le 0$, 곧 $c \le -1$이고((Z7)), $m > 0$이므로 (Z3)에 의해 $mc \le -m$이다. $0 < m$이므로 (Z7)에 의해 $-m < 0$이고, (Z6)에 의해 $n = mc < 0$이다. 이것은 $n \ge 0$과 (L1)에 의해 모순이다. 따라서 $c \ge 0$이다.

$a^{p^m} = a$인 $a \in R$를 잡는다. $0$ 이상인 모든 정수 $j$에서 $a^{p^{mj}} = a$임을 $j$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $j = 0$이면 $p^0 = 1$이고 곱의 (6)의 (i)에 의해 $a^1 = a$이다. $j$에서 성립하면 $m(j + 1) = mj + m$이고 (2)에 의해
$$
a^{p^{mj + m}} = \bigl(a^{p^m}\bigr)^{p^{mj}} = a^{p^{mj}} = a
$$
이다. 첫 등호는 (2)를 $\operatorname{Fr}_{p^{mj}} \circ \operatorname{Fr}_{p^m} = \operatorname{Fr}_{p^{mj + m}}$의 꼴로 쓴 것이고, 둘째 등호는 $a^{p^m} = a$, 셋째는 귀납 가정이다. 이 결과를 $j = c$에 쓰면 $a^{p^n} = a$이다.

**5의 증명.** [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)에 의해 $\mathbb{Z}_p$는 체이고, [[characteristic-of-a-ring|환의 표수]]의 (4)에 의해 $\operatorname{char} \mathbb{Z}_p = p$이므로 이 항목의 가정이 $R = \mathbb{Z}_p$에서 성립한다. $x \in \mathbb{Z}_p$이면 [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $x = [k]$인 정수 $k$가 있고, [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $[k] = k \cdot [1]$이다. (1)에 의해 $x^q = \operatorname{Fr}_q(k \cdot [1]) = k \cdot [1] = x$이다.
:::

## 예시와 반례

:::example[법 5의 정수 위의 다항식환에서 다섯제곱]
$R = \mathbb{Z}_5[X]$라 합시다([[polynomial-ring|다항식환]]). 상수 다항식을 만드는 $\kappa : \mathbb{Z}_5 \to \mathbb{Z}_5[X]$는 $\kappa([1]) = 1$인 단사인 환 준동형이므로(다항식환의 (3)의 (i)) [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} \mathbb{Z}_5[X] = \operatorname{char} \mathbb{Z}_5 = 5$입니다.

(1)과 (5)에 의해
$$
(X + [2])^5 = X^5 + [2]^5 = X^5 + [2]
$$
입니다. 여기서 $[2]^5$는 상수 다항식 $[2]$의 다섯제곱이고, [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (9)에 의해 $\kappa([2])^5 = \kappa([2]^5) = \kappa([2])$입니다. 직접 계산해도 $[2]^5 = [32] = [2]$입니다. 같은 방법으로 $(X^2 - X)^5 = (X^2)^5 - X^5 = X^{10} - X^5$입니다(유한 곱의 (6)의 (iii)).
:::

:::counterexample[정역 $\mathbb{Z}_3[X]$에서 세제곱이 아닌 원소 $X$]
$R = \mathbb{Z}_3[X]$의 표수는 앞 예시와 같은 까닭으로 $3$입니다. $\mathbb{Z}_3$은 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)) 정역이고([[field|가역원과 체]]의 (3)), [[degree-of-a-polynomial|다항식의 차수]]의 (6)에 의해 $R$도 정역입니다. 그래서 (3)에 의해 $\operatorname{Fr}_3$은 단사입니다. 그러나 $\operatorname{Fr}_3$은 전사가 아닙니다. $f^3 = X$인 $f \in R$가 있다고 합시다. $0^3 = 0 \ne X$이므로 $f \ne 0$이고, $d = \deg f$라 하면 차수의 (6)을 두 번 써서 $f^3 = (ff)f$의 차수는 $3d$입니다. $X$의 차수는 $1$이므로(차수의 (2)) $3d = 1$이어야 하는데, $d = 0$이면 $3d = 0$이고 $d \ge 1$이면 $3d \ge 3$이므로 그런 정수 $d$는 없습니다.

(3)의 둘째 문장에 의해, 이것은 $\mathbb{Z}_3[X]$가 유한집합이 아니라는 것도 보여 줍니다. 유한집합이라는 가정이 없으면 (3)의 둘째 문장은 깨질 수 있습니다.
:::

## 확인 질문

:::check[표수가 $3$인 체 $F$의 원소 $a$, $b$가 $a^9 = a$, $b^3 = b$를 만족하면 $(a + b)^9$는 무엇인가?]
$a + b$입니다. (4)의 (iii)을 $m = 1$, $n = 2$에 쓰면 $b^3 = b$에서 $b^9 = b$이고, (1)을 $q = 9$에 쓰면 $(a + b)^9 = a^9 + b^9 = a + b$입니다.
:::

:::check[$\mathbb{Z}_2[X]$에서 $f^2 = f$인 다항식 $f$를 모두 구하면?]
$0$과 $1$뿐입니다. $f$가 상수 다항식 $c$이면 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (9)에 의해 $f^2$은 상수 다항식 $c^2$이고, $\mathbb{Z}_2$의 두 원소 $[0]$, $[1]$은 모두 $c^2 = c$를 만족합니다((5)). 따라서 상수 다항식 $0$과 $1$은 $f^2 = f$를 만족합니다. $f$가 상수가 아니면 $d = \deg f \ge 1$이고 $\mathbb{Z}_2$는 체이므로 정역이어서 [[degree-of-a-polynomial|다항식의 차수]]의 (6)에 의해 $\deg f^2 = 2d$입니다. $2d = d + d > d$이므로 $f^2 \ne f$입니다. (4)의 (i)과 맞게, 답의 집합 $\{0, 1\}$은 덧셈, 뺄셈, 곱셈에 닫혀 있습니다.
:::
