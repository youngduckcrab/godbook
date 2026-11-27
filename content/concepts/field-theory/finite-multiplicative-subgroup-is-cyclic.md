---
title: 체의 곱셈군의 유한 부분군은 순환군이다
title_en: Finite Subgroups of the Multiplicative Group of a Field Are Cyclic
aliases: [유한체의 곱셈군은 순환군, 원시근, 곱셈군의 생성원, finite multiplicative subgroup is cyclic, multiplicative group of a finite field is cyclic]
kind: theorem
field: field-theory
msc: ["12E20", "20K01"]
level: undergrad
summary: "자연수 k 의 소수 거듭제곱 약수가 모두 m 을 나누면 k 는 m 을 나눈다. 유한 아벨군에서 위수가 가장 큰 원소의 위수는 모든 원소의 위수의 배수이다. 이것과 근의 개수로, 체의 0 이 아닌 원소의 곱셈군의 부분군이 유한집합이면 순환군이고, 원소가 n 개이면 xⁿ = 1 인 원소 전체와 같다. 특히 유한체의 곱셈군은 순환군이고, 그 생성원을 포함하는 부분체는 전체뿐이다."
requires: [finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, strong-induction, divisibility, greatest-common-divisor, coprime-divisors-product-divides, prime-power-divisors, group, subgroup, power-in-a-group, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, order-of-a-power, commuting-elements-of-coprime-order, group-of-units-modulo-n, integers-modulo-n, ring, ring-examples, integral-domain, field, finite-integral-domain-is-a-field, subfield, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, order-of-a-finite-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Theorem 22.10 과 그 증명, Corollary 22.11, Corollary 22.12 와 그 증명 (p.281); 22.4절 Exercises, 연습문제 6 (p.289), 19 (p.290); 13.1절 Finite Abelian Groups, Lemma 13.9 와 그 뒤 문단 (p.161–162); 4.2절 Multiplicative Group of Complex Numbers, Theorem 4.25 (p.52); 4.5절 Exercises, 연습문제 1(b) (p.55); 3.2절 Definitions and Examples, Example 3.11 과 Figure 3.12 (p.35); 9.4절 Exercises, 연습문제 32 (p.123); 22.1절, Example 22.13 (p.281–282)"
    checked: original
    note: "(3)과 (4)는 출처 Theorem 22.10 과 Corollary 22.11(p.281)이다. 출처의 증명은 유한 아벨군의 기본정리(Theorem 13.4)로 G ≅ Z_{p_1^{e_1}} × ⋯ × Z_{p_k^{e_k}} 로 쓰고 p_i^{e_i} 의 최소공배수 m 에 대해 'G contains an element of order m' 이라고 한 뒤, 모든 원소가 x^m − 1 의 근이고 x^m − 1 의 근은 m 개 이하라는 것으로 n ≤ m, m ≤ |G| 를 얻는다. 이 항목은 유한 아벨군의 기본정리와 최소공배수를 쓰지 않고, 위수가 가장 큰 원소를 정렬 원리로 잡은 뒤 (1)과 교환되는 두 원소의 곱의 위수로 (2)를 보이며, 그 뒤의 근의 개수 논법은 출처와 같다. '위수가 가장 큰 원소를 잡는다' 는 출처 Lemma 13.9 와 그 뒤 문단(p.161–162)이 유한 아벨군의 기본정리를 증명할 때 쓰는 출발점과 같은 발상이고, Lemma 13.9 의 증명(p.161)은 유한 아벨 p-군에서 위수가 가장 큰 원소 g 의 위수 p^m 에 대하여 'a^{p^m} = e for all a ∈ G' 라고 쓴다. (2)는 이 결론을 p-군이 아닌 유한 아벨군에서 진술한 꼴이다. (1)은 (2)의 증명에 쓰는 정수의 사실이다. (5)는 출처 Corollary 22.12(p.281, 유한체의 유한 확대는 단순 확대이다)의 증명 'Let α be a generator for the cyclic group E^* … Then E = F(α)' 를, F(α) 라는 기호 없이 'α 를 포함하는 부분체는 E 뿐이다' 로 적은 것이고, 같은 내용이 출처 연습문제 22.4.19(p.290)이다. (3)을 K 가 복소수의 체이고 G 가 n 제곱근 전체인 경우에 보면 출처 Theorem 4.25(p.52)의 'the nth roots of unity form a cyclic subgroup of T of order n' 과 같은 결론이고, (3)의 마지막 등식 G = {x ∈ K : x^n = 1} 은 그 정리와 같은 꼴이다. (4)를 F = Z_p 에서 보면 'U(p) 는 순환군이다' 이고, 출처 연습문제 9.4.32(p.123)는 U(5) ≅ Z_4 를 보이고 U(p) 로 일반화하라고 묻는다. 예시 '법 $7$의 정수의 곱셈군에서 원소의 위수' 와 확인 질문 '$\\mathbb{Z}_{13}^{\\times}$의 부분군으로서 원소가 $3$개인 것은 몇 개인가?' 는 이 연습문제와 같은 대상(U(p))을 다룬다. 확인 질문 '원소가 $16$개인 체 $F$의 곱셈군에서 위수가 $5$인 원소는 몇 개인가?' 는 출처 Example 22.13(p.281–282)이 GF(2^4) 의 곱셈군을 생성원 α 의 거듭제곱으로 늘어놓은 것과 같은 대상이다. 반례 '체가 아닌 환 $\\mathbb{Z}_8$의 가역원의 군' 의 U(8) = {1, 3, 5, 7} 은 출처 Example 3.11 의 곱셈표(Figure 3.12, p.35)와 같은 대상이고, U(8) 이 순환군인지는 출처 연습문제 4.5.1(b)(p.55)가 묻는다. 출처 연습문제 22.4.6(p.289)은 Q^* 가 순환군인지 묻는다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 순환군 증명과 프로베니우스 (4)(iii) 통독). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[group|군]], 항등원, 아벨군은 [[group|군]]의 것이고, 거듭제곱 $a^k$는 [[power-in-a-group|군의 거듭제곱]], 원소의 위수 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]], $\langle a \rangle$와 생성원과 순환군은 [[cyclic-subgroup|순환 부분군]]의 것이다. 나누어떨어짐 $a \mid b$는 [[divisibility|나누어떨어짐]]의 것이고, 정수의 거듭제곱 $p^j$는 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 것이다. [[field|체]], 가역원의 군 $K^{\times}$는 [[field|가역원과 체]]의 것이고, 부분체는 [[subfield|부분체]], 유한체는 [[order-of-a-finite-field|유한체의 원소 개수]]의 뜻이다. 유한집합, 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 뜻이다.

1. (소수의 거듭제곱인 약수로 나누어떨어짐 판정) $k$와 $m$이 자연수이고, 모든 소수 $p$와 $0$ 이상인 모든 정수 $j$에서 "$p^j \mid k$이면 $p^j \mid m$"이라 하자. 그러면 $k \mid m$이다.
2. (위수가 가장 큰 원소) $G$가 유한군이고 아벨군이며 $e$가 그 항등원이라 하자. 그러면 $G$의 모든 원소 $b$에서 $\operatorname{ord}(b) \mid \operatorname{ord}(a)$인 $a \in G$가 있다. 이때 $m = \operatorname{ord}(a)$이면 $G$의 모든 원소 $b$에서 $b^m = e$이다.
3. (본 정리) $K$가 체이고 $G$가 군 $K^{\times}$의 [[subgroup|부분군]]이며 유한집합이라 하자. $n = |G|$라 하면 $G = \langle a \rangle$인 $a \in G$가 있다. 곧 $G$는 순환군이다. 이런 $a$는 모두 $\operatorname{ord}(a) = n$을 만족한다. 또
   $$
   G = \{x \in K : x^n = 1\}
   $$
   이다. 여기서 $x^n$은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.
4. (유한체의 곱셈군) $F$가 유한체이면 $F^{\times}$는 순환군이고, $F^{\times} = \langle a \rangle$인 $a$는 모두 $\operatorname{ord}(a) = |F| - 1$을 만족한다.
5. (생성원을 포함하는 부분체) $E$가 유한체이고 $a$가 $E^{\times} = \langle a \rangle$인 원소라 하자((4)에 의해 그런 $a$가 있다). 그러면 $a$를 원소로 갖는 $E$의 부분체는 $E$뿐이다. 따라서 $F$가 $E$의 부분체이면 $F$를 포함하고 $a$를 원소로 갖는 $E$의 부분체는 $E$뿐이다.
:::

:::english
Groups, identity elements and abelian groups are those of the entry on groups; powers $a^k$ are those of the entry on powers in a group, the order $\operatorname{ord}(a)$ of an element is that of the entry on the order of an element, and $\langle a \rangle$, generators and cyclic groups are those of the entry on cyclic subgroups. Divisibility $a \mid b$ is that of the entry on divisibility, and integer powers $p^j$ are those of the entry on prime power divisors. Fields and the group of units $K^{\times}$ are those of the entry on units and fields; subfields are in the sense of the entry on subfields, and finite fields in the sense of the entry on the number of elements of a finite field. Finite sets and the number of elements $|A|$ are in the sense of the entries on finite sets and on the number of elements.

1. (Divisibility from prime power divisors) Let $k$ and $m$ be natural numbers such that for every prime $p$ and every integer $j \ge 0$, "if $p^j \mid k$ then $p^j \mid m$". Then $k \mid m$.
2. (An element of largest order) Let $G$ be a finite abelian group with identity $e$. Then there is $a \in G$ such that $\operatorname{ord}(b) \mid \operatorname{ord}(a)$ for every element $b$ of $G$. For such $a$, with $m = \operatorname{ord}(a)$, we have $b^m = e$ for every element $b$ of $G$.
3. (Main theorem) Let $K$ be a field and $G$ a subgroup of the group $K^{\times}$ that is a finite set. With $n = |G|$, there is $a \in G$ with $G = \langle a \rangle$; that is, $G$ is cyclic. Every such $a$ satisfies $\operatorname{ord}(a) = n$. Moreover,
   $$
   G = \{x \in K : x^n = 1\},
   $$
   where $x^n$ is the power of the entry on finite products and powers in a commutative ring.
4. (Multiplicative group of a finite field) If $F$ is a finite field, then $F^{\times}$ is cyclic, and every $a$ with $F^{\times} = \langle a \rangle$ satisfies $\operatorname{ord}(a) = |F| - 1$.
5. (Subfields containing a generator) Let $E$ be a finite field and $a$ an element with $E^{\times} = \langle a \rangle$ (such $a$ exists by (4)). Then the only subfield of $E$ having $a$ as an element is $E$ itself. Hence, if $F$ is a subfield of $E$, the only subfield of $E$ containing $F$ and having $a$ as an element is $E$.
:::

## 직관

순환군은 원소 하나의 거듭제곱으로 전체를 다 얻는 군입니다. 원소가 $n$개인 군이 순환군이려면 위수가 $n$인 원소가 하나 있으면 됩니다. 이 정리는 체의 곱셈군의 부분군이 유한집합이면 그런 원소가 언제나 있다고 말합니다.

까닭은 둘입니다. 첫째, 유한 아벨군에서는 위수가 가장 큰 원소 $a$의 위수 $m$을 다른 모든 원소의 위수가 나눕니다((2)). 어떤 원소 $b$의 위수가 $m$을 나누지 않으면, $b$의 위수에 더 많이 들어 있는 소수의 거듭제곱 부분과 $a$의 위수의 나머지 부분을 각각 맡는 두 원소를 만들어 곱할 수 있고, 그 곱의 위수가 $m$보다 커지기 때문입니다. 그래서 모든 원소가 $x^m = 1$을 만족합니다. 둘째, 체에서는 차수가 $m$인 다항식의 근이 $m$개 이하이므로 원소의 개수 $n$이 $m$ 이하입니다. 위수는 원소의 개수를 넘지 못하므로 $m = n$이고, $a$가 생성원입니다.

시계에 비유하면, 여러 바늘이 각자의 주기로 돌 때 모든 바늘이 동시에 처음 자리로 돌아오는 주기가 $m$이고, 그런 주기로 돌아오는 자리가 체 안에는 많아야 $m$개라는 것입니다. 바늘 하나가 원소 하나의 거듭제곱, 주기가 위수, "동시에 돌아오는 자리"가 $x^m = 1$의 근에 해당합니다. 두 번째 까닭에는 근의 개수가 차수 이하라는 것이 필요합니다. 영인자가 있는 환에서는 이것이 깨질 수 있고, 그런 환의 가역원의 군은 순환군이 아닐 수 있습니다(아래 반례).

## 증명

:::idea
(1)은 $k$에 대한 강한 귀납법으로, $k$를 나누는 소수 하나의 거듭제곱 부분을 떼어 낸다. (2)는 위수가 가장 큰 원소를 잡고, 위수가 그것을 나누지 않는 원소가 있으면 (1)로 찾은 소수의 거듭제곱으로 더 큰 위수의 원소를 만든다. (3)은 (2)와 다항식 $X^m - 1$의 근의 개수이다.
:::

:::hint
(2)에서 $k = \operatorname{ord}(b)$가 $m$을 나누지 않으면 (1)에 의해 $p^j \mid k$이고 $p^j \nmid m$인 소수 $p$와 $j$가 있다. $k = p^s k'$, $m = p^t m'$($p \nmid k'$, $p \nmid m'$)으로 쓰면 $t < s$이다. $a^{p^t}$와 $b^{k'}$의 위수는 무엇인가?
:::

:::hint
(3)에서 $G$의 원소는 모두 $X^m - 1 \in K[X]$의 근이다.
:::

:::proof
**쓰는 사실.** "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n)이다. 정수의 순서와 계산은 [[prime-number]]의 (Z1), (Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1), (L2)와 그 진술의 계산 법칙을 쓴다. 정수의 나누어떨어짐에서 "$a \mid b$이고 $b \mid c$이면 $a \mid c$"는 [[polynomial-ring|다항식환]]의 (6)의 (ii)를 환 $\mathbb{Z}$에 쓴 것이다(그 항목의 (6)에 의해 환 $\mathbb{Z}$에서의 $a \mid b$는 [[divisibility|나누어떨어짐]]의 것과 같다).

**1의 증명.** 자연수 $k$에 대한 명제 $T_k$를 "모든 자연수 $m$에 대하여, 모든 소수 $p$와 $0$ 이상인 모든 정수 $j$에서 $p^j \mid k$이면 $p^j \mid m$일 때, $k \mid m$이다"로 두고 [[strong-induction|강한 귀납법]](시작점 $1$, $r = 0$)으로 보인다.

기초 단계: $m = 1 \cdot m$이므로 $1 \mid m$이다.

귀납 단계: $k \ge 1$이고 $T_1, \dots, T_k$가 참이라 하자. $k + 1$과 $m$이 $T_{k+1}$의 가정을 만족한다고 하자.

먼저 $k + 1$을 나누는 소수가 있음을 보인다. $D = \{d \in \mathbb{N} : d \ge 2, d \mid k + 1\}$이라 하자. $k \ge 1$이므로 $k + 1 \ge 2$이고 $k + 1 \in D$이다. [[well-ordering-principle|정렬 원리]]의 (2)에 의해 $D$의 최소 원소 $p$가 있다. $e$가 $p$의 양의 약수이면 [[prime-number|소수]]의 진술에 의해 $1 \le e \le p$이고, $e \mid p$, $p \mid k + 1$이므로 $e \mid k + 1$이다. $e \ge 2$이면 $e \in D$이므로 $p \le e$이고 (L2)에 의해 $e = p$이다. $e < 2$이면 (Z1)에 의해 $e + 1 \le 2$이므로 $e \le 1$이고 (L2)에 의해 $e = 1$이다. 따라서 $p$의 양의 약수는 $1$과 $p$뿐이고, $p \ge 2$이므로 $1 \ne p$여서 $p$는 소수이다.

거듭제곱의 (5)에 의해 $k + 1 = p^s \cdot k'$이고 $p \nmid k'$인 $0$ 이상인 정수 $s$와 자연수 $k'$이 있다. $p \mid k + 1$이므로 같은 곳에 의해 $s \ne 0$이고, $s \ge 1$이다. 가정에 의해 ($j = s$) $p^s \mid m$이다.

다음으로 $k' \le k$이다. 거듭제곱의 (2)에 의해 $p^s \ge p \ge 2$이고 $k' \ge 1 > 0$이므로 (Z3)에 의해 $k + 1 = p^s k' \ge 2k' = k' + k'$이다. $k' \ge 1$이므로 (Z7)과 (Z6)에 의해 $k' + k' \ge k' + 1$이고, 따라서 $k + 1 \ge k' + 1$, 곧 $k' \le k$이다((Z7)).

$k'$과 $m$은 $T_{k'}$의 가정을 만족한다. 소수 $q$와 $j \ge 0$에 대하여 $q^j \mid k'$이면, $k' \mid k + 1$이므로 $q^j \mid k + 1$이고, 가정에 의해 $q^j \mid m$이다. $1 \le k' \le k$이므로 귀납 가정 $T_{k'}$에 의해 $k' \mid m$이다.

$p \nmid k'$이므로 거듭제곱의 (4)에 의해 $\gcd(p^s, k') = 1$이다([[greatest-common-divisor|최대공약수]]). $p^s \mid m$이고 $k' \mid m$이므로 [[coprime-divisors-product-divides|서로소인 두 약수의 곱은 약수이다]]에 의해 $p^s k' \mid m$, 곧 $k + 1 \mid m$이다. 따라서 $T_{k+1}$이 참이다.

**2의 증명.** $G$가 유한 아벨군이라 하자. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $G$의 모든 원소의 위수는 유한하고 $|G|$ 이하이다. 정수의 집합 $O = \{\operatorname{ord}(b) : b \in G\}$는 $\operatorname{ord}(e) = 1$이므로([[order-of-an-element|원소의 위수]]의 (1)) 공집합이 아니고, 모든 원소가 $|G|$ 이하이므로 위로 유계이다. 정렬 원리의 (나)에 의해 $O$는 최대 원소 $m$을 갖고, $m \in O$이므로 $\operatorname{ord}(a) = m$인 $a \in G$가 있다.

$b \in G$이고 $k = \operatorname{ord}(b)$라 하자. $k \mid m$임을 (1)로 보인다. 그러려면 모든 소수 $p$와 $j \ge 0$에서 $p^j \mid k$이면 $p^j \mid m$임을 보이면 된다. 그렇지 않다고 하자. 곧 $p^j \mid k$이고 $p^j \nmid m$인 소수 $p$와 $j \ge 0$이 있다고 하자.

거듭제곱의 (5)에 의해 $k = p^s k'$, $m = p^t m'$이고 $p \nmid k'$, $p \nmid m'$인 $0$ 이상인 정수 $s$, $t$와 자연수 $k'$, $m'$이 있고, $p^i \mid k$인 것은 정확히 $i \le s$일 때, $p^i \mid m$인 것은 정확히 $i \le t$일 때이다. 따라서 $j \le s$이고, $j \le t$가 아니므로 (Z5)에 의해 $t < j$이다. (Z6)에 의해 $t < s$이다.

$a' = a^{p^t}$, $b' = b^{k'}$이라 하자. $p^t$는 자연수이고(거듭제곱의 (1)의 (iv)) $m = p^t \cdot m'$이므로 [[order-of-a-power|거듭제곱의 위수]]의 (4)에 의해 $\operatorname{ord}(a') = m'$이다. 같은 곳을 $k = k' \cdot p^s$에 쓰면 $\operatorname{ord}(b') = p^s$이다. $p \nmid m'$이므로 거듭제곱의 (4)에 의해 $\gcd(p^s, m') = 1$이고, 최대공약수의 (ii)에 의해 $\gcd(m', p^s) = 1$이다. $G$가 아벨군이므로 $a'b' = b'a'$이고, [[commuting-elements-of-coprime-order|서로소인 위수와 교환되는 원소]]의 (3)에 의해 $a'b' \in G$의 위수는 $m' p^s$이다.

그런데 $t < s$이므로 거듭제곱의 (2)에 의해 $p^s = p^t \cdot p^{s - t}$이고, $s - t \ge 1$이므로 같은 곳에 의해 $p^{s-t} \ge p \ge 2$이다. 따라서 $m' p^s = m \cdot p^{s-t}$이고, $m \ge 1 > 0$이므로 (Z3)에 의해 $m \cdot p^{s-t} \ge 2m = m + m$이며, (Z7)에 의해 $m + m > m$이다. 곧 $\operatorname{ord}(a'b') > m$이다. 이것은 $\operatorname{ord}(a'b') \in O$이고 $m$이 $O$의 최대 원소라는 것과 (L1)에 의해 모순이다. 따라서 $k \mid m$이다.

마지막 문장: $b \in G$이면 $\operatorname{ord}(b) \mid m$이므로 원소의 위수의 (2)에 의해 $b^m = e$이다.

**3의 증명.** $K$가 체이고 $G$가 $K^{\times}$의 부분군이며 유한집합이고 $n = |G|$라 하자. [[field|가역원과 체]]의 (1)에 의해 $K^{\times}$의 항등원은 $1$이고 $K^{\times}$는 아벨군이다. 부분군의 항등원은 $1$이고([[subgroup|부분군]]), $G$의 원소끼리도 교환되므로 $G$는 유한 아벨군이다. (2)에 의해 $G$의 모든 원소 $b$에서 $\operatorname{ord}(b) \mid \operatorname{ord}(a)$인 $a \in G$가 있다. $m = \operatorname{ord}(a)$라 하면 $m$은 자연수이고, (2)의 마지막 문장에 의해 군 $G$에서 모든 $b \in G$가 $b^m = 1$을 만족한다. [[power-in-a-group|군의 거듭제곱]]의 (5)와 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (8)에 의해 이 거듭제곱은 군 $K^{\times}$에서 계산한 것, 그리고 환 $K$에서 계산한 것과 같다.

$f = X^m - 1 \in K[X]$라 하자([[polynomial-ring|다항식환]]). [[evaluation-homomorphism|대입 준동형]]의 (1)과 (2)에 의해 $x \in K$에서 $f(x) = x^m - 1$이다. 따라서 $f(x) = 0$인 것은 정확히 $x^m = 1$일 때이고, $G$의 모든 원소는 $f$의 근이다. 다항식환의 (2)와 (4)의 (iii), (3)에 의해 $m \ge 1$이므로 $\operatorname{coef}_m(f) = 1$이고 $i > m$이면 $\operatorname{coef}_i(f) = 0$이다. [[degree-of-a-polynomial|다항식의 차수]]의 (1)에 의해 $f \ne 0$이고 $\deg f = m$이다. $K$는 정역이므로(가역원과 체의 (3)) [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)에 의해 $Z = \{x \in K : f(x) = 0\}$은 유한집합이고 $|Z| \le m$이다. $G \subseteq Z$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $n = |G| \le |Z| \le m$이다. 한편 순환 부분군의 크기의 (4)에 의해 $m = \operatorname{ord}(a) \le n$이다. (L2)에 의해 $m = n$이다.

$\operatorname{ord}(a) = n = |G|$이므로 순환 부분군의 크기의 (4)에 의해 $a$는 $G$의 생성원이고 $G = \langle a \rangle$이다. 같은 곳에 의해 $G = \langle a \rangle$인 $a$는 모두 $\operatorname{ord}(a) = |G| = n$을 만족한다. 마지막으로 $m = n$이므로 $Z = \{x \in K : x^n = 1\}$이다. $G \subseteq Z$이고 $|Z| \le n = |G|$이다. $G \ne Z$이면 유한집합의 부분집합의 (2)에 의해 $|G| < |Z|$이므로 $n < |Z| \le n$이 되어 (L1)과 모순이다. 따라서 $G = Z$이다.

**4의 증명.** $F$가 유한체이면 [[order-of-a-finite-field|유한체의 원소 개수]]의 (6)에 의해 $F^{\times}$는 유한집합이고 $|F^{\times}| = |F| - 1$이다. $F^{\times}$는 자기 자신의 부분군이므로([[subgroup|부분군]]) (3)을 $K = F$, $G = F^{\times}$에 쓰면 $F^{\times}$는 순환군이고, $F^{\times} = \langle a \rangle$인 $a$는 모두 $\operatorname{ord}(a) = |F| - 1$을 만족한다.

**5의 증명.** $E$가 유한체이고 $E^{\times} = \langle a \rangle$라 하자. $K$가 $E$의 부분체이고 $a \in K$라 하자. $a \in E^{\times}$이므로 $a \ne 0$이고, [[subfield|부분체]]의 (3)의 (ii)에 의해 $K^{\times} = K - \{0\}$은 $E^{\times}$의 부분군이며 $a \in K^{\times}$이다. [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $E^{\times} = \langle a \rangle \subseteq K^{\times} \subseteq K$이다. 또 $0 \in K$이다. $E = E^{\times} \cup \{0\}$이므로([[order-of-a-finite-field|유한체의 원소 개수]]의 (6)) $E \subseteq K$이고, $K \subseteq E$이므로 $K = E$이다. 마지막 문장은 앞 문장을 $F$를 포함하는 부분체에 쓴 것이다.
:::

## 예시와 반례

:::example[법 $7$의 정수의 곱셈군에서 원소의 위수]
체 $\mathbb{Z}_7$([[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3))의 곱셈군 $\mathbb{Z}_7^{\times}$는 원소가 $6$개입니다. 거듭제곱을 차례로 계산하면 다음과 같습니다.

- $[2]$: $[2], [4], [8] = [1]$이므로 위수 $3$입니다.
- $[3]$: $[3], [9] = [2], [6], [18] = [4], [12] = [5], [15] = [1]$이므로 위수 $6$입니다.
- $[4]$: $[4], [16] = [2], [8] = [1]$이므로 위수 $3$입니다.
- $[5]$: $[5], [25] = [4], [20] = [6], [30] = [2], [10] = [3], [15] = [1]$이므로 위수 $6$입니다.
- $[6]$: $[6], [36] = [1]$이므로 위수 $2$입니다. $[1]$의 위수는 $1$입니다.

위수가 가장 큰 원소의 위수는 $6$이고, 위수 $1, 2, 3, 6$은 모두 $6$을 나눕니다((2)). (3)대로 위수가 $6$인 $[3]$과 $[5]$가 $\mathbb{Z}_7^{\times}$의 생성원입니다.
:::

:::counterexample[체가 아닌 환 $\mathbb{Z}_8$의 가역원의 군]
$\mathbb{Z}_8^{\times}$는 [[group-of-units-modulo-n|법 n의 단원군]] $U(8) = \{[1], [3], [5], [7]\}$입니다([[field|가역원과 체]]의 (2)의 (iii)). $[3]^2 = [9] = [1]$, $[5]^2 = [25] = [1]$, $[7]^2 = [49] = [1]$이므로 $[1]$이 아닌 세 원소의 위수는 모두 $2$이고, 위수가 $4$인 원소가 없으므로 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $U(8)$은 순환군이 아닙니다([[cyclic-subgroup|순환 부분군]]의 (7)도 이것을 말합니다).

(2)는 여기서도 성립합니다. 위수가 가장 큰 원소의 위수 $2$를 모든 위수가 나눕니다. 깨지는 것은 근의 개수입니다. 네 원소가 모두 $X^2 - [1]$의 근이어서 근이 차수 $2$보다 많습니다. $\mathbb{Z}_8$은 $[2][4] = [0]$이어서 정역이 아니므로 근의 개수를 세는 [[factor-theorem-for-polynomials|인수 정리와 근의 개수]]의 (4)를 쓸 수 없습니다.
:::

## 확인 질문

:::check[원소가 $16$개인 체 $F$의 곱셈군에서 위수가 $5$인 원소는 몇 개인가?]
$4$개입니다. (4)에 의해 $F^{\times} = \langle a \rangle$이고 $\operatorname{ord}(a) = 15$인 $a$가 있습니다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $F^{\times}$의 원소는 $0 \le k \le 14$인 $a^k$이고 서로 다릅니다. [[order-of-a-power|거듭제곱의 위수]]의 (3)에 의해 $a^k$의 위수는 $15 = d \cdot n'$($d = \gcd(k, 15)$)의 $n'$이므로, 위수가 $5$인 것은 $\gcd(k, 15) = 3$일 때, 곧 $k = 3, 6, 9, 12$일 때입니다. $k = 0$이면 $\gcd(0, 15) = 15$이므로 위수가 $1$입니다.
:::

:::check[$\mathbb{Z}_{13}^{\times}$의 부분군으로서 원소가 $3$개인 것은 몇 개인가?]
하나입니다. $\mathbb{Z}_{13}$은 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)) 원소가 $3$개인 부분군 $G$는 (3)에 의해 $\{x \in \mathbb{Z}_{13} : x^3 = [1]\}$과 같고, 그래서 그런 부분군은 많아야 하나입니다. $[3] \ne [1]$, $[3]^2 = [9] \ne [1]$, $[3]^3 = [27] = [1]$이므로 $[3]$의 위수는 $3$이고 $\langle [3] \rangle = \{[1], [3], [9]\}$는 원소가 $3$개인 부분군이고([[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)), 실제로 하나 있습니다.
:::
