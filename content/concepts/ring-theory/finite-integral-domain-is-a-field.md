---
title: 유한 정역은 체이다
title_en: Every Finite Integral Domain Is a Field
aliases: [유한 정역, ℤ_p는 체, finite integral domain, Z_p is a field]
kind: theorem
field: ring-theory
msc: ["13", "12"]
level: undergrad
summary: 원소가 유한 개인 정역은 체이다. 따라서 n ≥ 2일 때 n이 소수인 것, ℤ_n이 정역인 것, ℤ_n이 체인 것은 모두 같고, 소수 p에 대하여 ℤ_p는 원소가 p개인 체이다. 무한 정역은 체가 아닐 수 있다.
requires: [ring, ring-basic-properties, ring-examples, integral-domain, field, function, injective-surjective-bijective, finite-set, subset-of-finite-set, number-of-elements-is-unique, recursion-theorem, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, division-theorem, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.2절 Theorem 16.16 p.194, Example 16.17 p.194–195, 16.4절 Example 16.39 p.199
    checked: original
    note: "(1)은 출처 Theorem 16.16(p.194)과 같은 진술이다. 출처는 0 이 아닌 원소 전체 D* 위의 λ_a(d) = ad 가 단사임을 보이고 'D* 가 유한집합이므로 λ_a 는 전사여야 한다'고 쓰며 그 근거를 적지 않는다. 이 항목은 R 전체 위의 함수 x ↦ ax 의 치역 T 가 R 과 다르면 유한집합의 부분집합의 (3)에 어긋난다는 것으로 보인다(2단원 부분군 판정법의 (4)의 증명과 같은 논법이고, 그 증명은 인용할 수 없으므로 여기서 다시 썼다). 출처는 이 정리를 'due to Wedderburn' 이라 적는데 이 항목은 역사 서술을 하지 않는다. (2)는 출처 Example 16.17(p.194–195, ℤ_p 는 체 — 명제 3.4 에 의해)과 Example 16.39(p.199, 'ℤ/nℤ ≅ ℤ_n 은 n 이 소수일 때만 정역이고, 실은 체')를 모은 것이다. (3)은 Example 16.17 의 앞부분과 같다. (4)는 출처 Example 16.2(p.191)와 p.225 의 '정수 ℤ 는 정역이지만 체가 아니다'와 같다. 예시(ℤ₇ 에서 [3] 의 역원을 대응표로 찾기)는 출처 연습문제 16.3(c)(p.204, ℤ₇ 의 단원, 힌트 p.329 {1, …, 6})와 같은 대상이고, 출처 연습문제 3.1(a)(p.40, 3x ≡ 2 (mod 7))도 법 7 에서 3 을 곱하는 일차 합동식이다. 반례(ℤ₆ 에서 [2] 를 곱하는 대응)는 출처 Example 3.11(p.34–35)이 2 에 곱셈의 역원이 없음을 보이려고 0·2 = 0, 1·2 = 2, 2·2 = 4, 3·2 = 0, 4·2 = 2, 5·2 = 4 를 나열한 것과 같다. 이 항목은 그것을 (1)의 논법에서 단사가 깨지는 곳으로 읽는다. 첫째 확인 질문의 ℤ₂ 는 출처가 21장(p.261)에서 체로 쓴다. 출처 연습문제 16.34(p.206)는 '모든 유한 정역은 ℤ_p 와 동형인가'를 묻는데 이 항목은 다루지 않는다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
정역은 [[integral-domain|영인자와 정역]]의 뜻이고, 가역원과 체는 [[field|가역원과 체]]의 뜻이다. 유한집합과 원소의 개수는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 뜻이다.

1. (유한 정역) $R$이 정역이고 $R$이 유한집합이면 $R$은 체이다.
2. (법 $n$의 정수) $n \ge 2$인 자연수 $n$에 대하여 다음 셋은 서로 같다: $n$이 소수이다, [[ring-examples|환의 예]]의 (3)의 환 $\mathbb{Z}_n$이 정역이다, $\mathbb{Z}_n$이 체이다. 곧 하나가 성립하면 나머지 둘도 성립한다.
3. (원소가 $p$개인 체) $p$가 소수이면 $\mathbb{Z}_p$는 체이고 $|\mathbb{Z}_p| = p$이다.
4. (무한 정역) 유한집합이 아닌 정역은 체가 아닐 수 있다. $\mathbb{Z}$는 정역이지만 체가 아니다.
:::

:::english
Integral domains are as in the entry on zero divisors and integral domains, and units and fields as in the entry on units and fields. Finite sets and the number of elements are as in the entries on finite sets and on the number of elements.

1. (Finite integral domains) If $R$ is an integral domain and $R$ is a finite set, then $R$ is a field.
2. (Integers modulo $n$) For every natural number $n \ge 2$ the following three are equivalent: $n$ is prime; the ring $\mathbb{Z}_n$ of (3) in the entry on examples of rings is an integral domain; $\mathbb{Z}_n$ is a field. That is, if one of them holds, the other two hold as well.
3. (A field with $p$ elements) If $p$ is prime, then $\mathbb{Z}_p$ is a field and $|\mathbb{Z}_p| = p$.
4. (Infinite integral domains) An integral domain that is not a finite set need not be a field. $\mathbb{Z}$ is an integral domain but not a field.
:::

## 직관

정역에서는 $0$이 아닌 $a$를 곱하는 일이 서로 다른 원소를 서로 다른 원소로 보냅니다(소거법칙). 원소가 유한 개이면, 서로 다른 것을 서로 다른 것으로 보내는 대응은 빠짐없이 모든 원소에 닿아야 합니다. 그러면 $1$에도 닿으므로 $ax = 1$인 $x$가 있고, $a$는 가역원입니다.

비유하자면 의자가 $n$개인 방에 $n$명이 한 의자에 한 명씩만 앉으면 빈 의자가 남지 않습니다. 사람이 $R$의 원소 $x$, 앉는 의자가 $ax$, 한 의자에 한 명이라는 것이 단사, 빈 의자가 없다는 것이 모든 원소에 닿는다는 것입니다. 방이 무한히 크면 이 논법은 통하지 않습니다. 정수에서 $2$를 곱하는 대응은 서로 다른 정수를 서로 다른 정수로 보내지만 $1$에는 닿지 않습니다((4)).

$\mathbb{Z}_n$은 원소가 $n$개인 유한집합이므로 (1)이 그대로 적용됩니다. 그래서 $\mathbb{Z}_n$에서는 정역과 체가 같은 조건이 되고, 그 조건은 $n$이 소수라는 것입니다.

## 증명

:::idea
$a \ne 0$에 대해 $x$에 $ax$를 대응시키는 함수 $R \to R$은 소거법칙에 의해 단사이다. 그 치역이 $R$과 다르면 유한집합 $R$에서 그 진부분집합으로의 단사가 생겨 모순이므로, 치역은 $R$이고 $1$을 포함한다.
:::

:::hint
치역 $T = \{ax : x \in R\}$은 $R$의 부분집합이다. [[subset-of-finite-set|유한집합의 부분집합]]의 (3)이 $T \ne R$일 때 무엇을 금지하는가?
:::

:::hint
(2): 소수 ⇒ 정역은 [[integral-domain|영인자와 정역]]의 (3), 정역 ⇒ 체는 (1), 체 ⇒ 정역은 [[field|가역원과 체]]의 (3)이다.
:::

:::proof
**(1)** $R$이 유한집합인 정역이라 하자. [[integral-domain|정역]]의 정의에 의해 $R$은 단위원을 갖는 가환환이다. $a \in R$이고 $a \ne 0$이라 하자. $a$가 가역원임을 보이면 된다.

$R$이 유한집합이므로 원소를 $m$개 갖는 정수 $m \ge 0$이 있다. 각 $x \in R$에 $R$의 원소 $ax$가 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f = \{(x, ax) : x \in R\}$는 $R$에서 $R$로의 [[function|함수]]이고 $f(x) = ax$이다. $f(x) = f(y)$이면 $ax = ay$이고 $a \ne 0$이므로 [[integral-domain|영인자와 정역]]의 (1)의 소거법칙에 의해 $x = y$이다. 따라서 $f$는 [[injective-surjective-bijective|단사]]이다.

$T = \{ax : x \in R\}$를 $f$의 치역이라 하면 $T \subseteq R$이고, [[function|함수]]의 진술(공역은 선언하기 나름이다)에 의해 $f$는 $R$에서 $T$로의 함수이며, 단사인지는 집합 $f$만으로 정해지므로([[injective-surjective-bijective|단사, 전사, 전단사]]의 진술) $f : R \to T$는 단사이다. 만약 $T \ne R$이면, $R$이 원소를 $m$개 갖고 $T \subseteq R$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (3)에 의해 $R$에서 $T$로의 단사가 없어야 하는데, $f$가 그런 단사이므로 모순이다. 따라서 $T = R$이다.

$1 \in R = T$이므로 $ax = 1$인 $x \in R$이 있다. $R$은 가환환이므로 $xa = ax = 1$이고, $a$는 가역원이다. $0$이 아닌 모든 원소가 가역원이므로 [[field|가역원과 체]]의 정의에 의해 $R$은 체이다.

**(2)** $n \ge 2$라 하자. $n$이 소수이면 [[integral-domain|영인자와 정역]]의 (3)의 (ii)에 의해 $\mathbb{Z}_n$은 정역이다. $\mathbb{Z}_n$이 정역이면, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_n$은 유한집합이므로 (1)에 의해 체이다. $\mathbb{Z}_n$이 체이면 [[field|가역원과 체]]의 (3)에 의해 정역이고, [[integral-domain|영인자와 정역]]의 (3)의 마지막 문장에 의해 $n$은 소수이다. 이 세 함의가 한 바퀴를 이루므로 세 조건은 서로 같다.

**(3)** $p$가 소수이면 $p$의 양의 약수는 $1$과 $p$ 둘이므로 $p \ne 1$이고, 양의 정수이므로 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)와 [[prime-number]]의 (Z1)에 의해 $p \ge 2$이다. (2)에 의해 $\mathbb{Z}_p$는 체이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $|\mathbb{Z}_p| = p$이다.

**(4)** [[field|가역원과 체]]의 (4)에 의해 $\mathbb{Z}$는 정역이지만 체가 아니다. (1)과 함께 보면 $\mathbb{Z}$는 유한집합이 아니다.
:::

## 예시와 반례

:::example[법 7의 정수에서 역원 찾기]
(3)에 의해 $\mathbb{Z}_7$은 체이므로 $[3]$은 가역원입니다. (1)의 증명을 따라 $x$에 $[3]x$를 대응시키면 $[0], [1], \dots, [6]$이 차례로 $[0], [3], [6], [9] = [2], [12] = [5], [15] = [1], [18] = [4]$로 갑니다($9 - 2$, $12 - 5$, $15 - 1$, $18 - 4$가 모두 $7$의 배수). 일곱 값이 모두 다르고 $\mathbb{Z}_7$의 일곱 원소를 빠짐없이 덮으며, $[1]$에 닿는 것이 $[5]$이므로 $[3]^{-1} = [5]$입니다.
:::

:::counterexample[유한해도 정역이 아니면 체가 아니다]
체는 정역이므로([[field|가역원과 체]]의 (3)) 정역이 아닌 환은 유한하든 아니든 체가 아닙니다. $\mathbb{Z}_6$은 원소가 $6$개인 유한집합이지만 $6 = 2 \cdot 3$이 소수가 아니므로 (2)에 의해 체가 아닙니다. (1)의 논법이 깨지는 곳은 단사입니다. $[2]$를 곱하는 대응은 $[0]$과 $[3]$을 모두 $[0]$으로 보내고($[2][3] = [6] = [0]$), $[0], [1], \dots, [5]$를 차례로 $[0], [2], [4], [6] = [0], [8] = [2], [10] = [4]$로 보내므로 치역은 $\{[0], [2], [4]\}$뿐이고 $[1]$에 닿지 않습니다.
:::

## 확인 질문

:::check[원소가 둘인 정역은 체인가?]
체입니다. 원소가 둘인 집합은 유한집합이므로 (1)에 의해 그 정역은 체입니다. 예를 들어 $\mathbb{Z}_2$가 그렇습니다((3)).
:::

:::check[$\mathbb{Z}_{11}$에서 $[0]$이 아닌 모든 원소가 가역원인 까닭을 이 항목의 번호로 말하라.]
[[prime-number|소수]]의 진술에 의해 $11$의 양의 약수 $d$는 $1 \le d \le 11$입니다. $11 = 2 \cdot 5 + 1 = 3 \cdot 3 + 2 = 4 \cdot 2 + 3 = 5 \cdot 2 + 1$이고, $6 \le d \le 10$이면 정수 $c$에 대하여 $c \le 1$이면 $dc \le d < 11$이고 $c \ge 2$이면 $dc \ge 2d \ge 12$이므로((Z3), (Z5), (Z1)) $11 = dc$가 될 수 없습니다. 나머지가 $0$이 아니므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $2$부터 $5$까지도 $11$을 나누지 않습니다. 따라서 $11$의 양의 약수는 $1$과 $11$뿐이므로 $11$은 소수이고, (3)에 의해 $\mathbb{Z}_{11}$은 체입니다. 체의 정의에 의해 $[0]$이 아닌 모든 원소가 가역원입니다.
:::
