---
title: 서로소인 위수와 교환되는 원소
title_en: Commuting Elements of Coprime Order
aliases: [서로소인 위수의 교환되는 원소, 교환되는 원소의 곱의 위수, 정규부분군의 원소의 교환, commuting elements of coprime order, order of a product of commuting elements]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 원소의 개수가 서로소인 두 유한 부분군의 교집합은 항등원뿐이고, 교집합이 항등원뿐인 두 정규부분군의 원소끼리는 교환된다. 교환되는 두 원소의 위수 m, n이 서로소이면 곱의 위수는 mn이다.
requires: [group, group-basic-properties, subgroup, subgroup-examples, power-in-a-group, laws-of-exponents, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, lagrange-theorem, normal-subgroup, subset-of-finite-set, number-of-elements-is-unique, finite-set, greatest-common-divisor, coprime-divisors-product-divides, divisibility, prime-number, well-ordering-principle, even-and-odd, division-theorem, symmetric-group, function, function-composition, number-groups, integers-modulo-n, congruence-modulo-n, equivalence-classes-equal-iff-related]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 9.2절 Direct Products, Theorem 9.17 p.119, Theorem 9.21 p.119, 내부 직곱의 조건(번호 없음) p.120, 9.4절 연습문제 22 p.123. 15.2절 Theorem 15.10 의 증명 p.184
    checked: original
    note: "출처는 이 세 사실을 하나의 명제로 진술하지 않는다(검색어 'order mn' 0건, 'order of ab' 1건(4.5절 연습문제 23, ab 와 ba 의 위수가 같다는 것), 'H ∩ K = {e}' 3건(내부 직곱의 조건, 11.4절 연습문제 16, 15.2절 Theorem 15.10 의 증명 근처), 'relatively prime orders' 0건). 출처가 같은 자리에서 쓰는 것은 직곱이다. 15.2절 Theorem 15.10(위수 pq 인 군)의 증명(p.184)은 G 가 H 와 K 의 내부 직곱의 조건을 만족한다고 하고 Theorem 9.21(p.119, gcd(m, n) = 1 일 때 ℤ_m × ℤ_n ≅ ℤ_mn)로 G ≅ ℤ_p × ℤ_q ≅ ℤ_pq 를 얻는다. 9.2절의 내부 직곱의 조건(p.120)은 G = HK, H ∩ K = {e}, hk = kh 이고, 이 항목의 (1)과 (2)는 앞의 둘에서 셋째를 얻는 쪽이다. (3)은 출처 Theorem 9.17(p.119, 직곱 G × H 에서 (g, h) 의 위수는 g 와 h 의 위수의 최소공배수)과 같은 발상이고 증명도 같다(곱의 위수가 두 위수의 공배수이고 공배수의 약수). 출처는 직곱의 원소에 대해 진술하고 이 항목은 한 군 안의 교환되는 두 원소에 대해 진술하며, 최소공배수 대신 서로소인 경우의 곱 mn 만 다룬다. 출처 9.4절 연습문제 22(p.123)는 원소가 20 개인 군에서 원소가 4 개, 5 개인 부분군의 원소끼리 교환되면 내부 직곱임을 보이라고 묻는데, 거기에 (1)의 H ∩ K = {e} 가 필요하다. 예시 '$\\mathbb{Z}_6$에서 위수가 $2$, $3$인 두 원소'는 출처 9.2절 Example 9.20(p.119, ℤ₂ × ℤ₃ 은 (1, 1) 이 생성하는 순환군이어서 ℤ₆ 과 동형)과 Example 9.28(p.121, ℤ₆ 은 {0, 2, 4} × {0, 3} 과 동형인 내부 직곱)과 같은 발상이고, ℤ₆ 에서 2 의 위수가 3 이고 5 가 생성원이라는 것은 출처 4.1절 Example 4.5(p.47)에 있다. 반례 '교환되지 않으면 깨질 수 있다'의 대칭군 S_X 는 출처 5장의 S₃ 와 같은 군이고, 출처 9.2절 Example 9.26(p.120)은 S₃ 에서 원소가 3 개인 부분군과 2 개인 부분군의 원소가 교환되지 않는다고 적는다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨 코시의 귀납 통독, '출처는 정리로 진술하지 않는다' 를 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 부분군은 [[subgroup|부분군]], 정규부분군은 [[normal-subgroup|정규부분군]], 원소의 위수와 $\operatorname{ord}$는 [[order-of-an-element|원소의 위수]], $\langle a \rangle$는 [[cyclic-subgroup|순환 부분군]], $\gcd$와 서로소는 [[greatest-common-divisor|최대공약수]]의 것이다.

1. (서로소인 원소의 개수) $H$와 $K$가 $G$의 부분군이고 둘 다 유한집합이며 $\gcd(|H|, |K|) = 1$이면 $H \cap K = \{e\}$이다.
2. (교집합이 자명한 두 정규부분군) $H$와 $K$가 $G$의 정규부분군이고 $H \cap K = \{e\}$이면, 모든 $h \in H$와 모든 $k \in K$에 대하여 $hk = kh$이다.
3. (교환되는 두 원소의 곱의 위수) $a, b \in G$가 $ab = ba$를 만족하고, $a$와 $b$의 위수가 유한하며 $m = \operatorname{ord}(a)$, $n = \operatorname{ord}(b)$가 $\gcd(m, n) = 1$을 만족하면, $ab$의 위수는 유한하고 $\operatorname{ord}(ab) = mn$이다. 따라서 $|\langle ab \rangle| = mn$이다.
:::

:::english
Let $G$ be a group with identity $e$. Subgroups, normal subgroups, the order of an element and $\operatorname{ord}$, $\langle a \rangle$, and $\gcd$ and coprimality are as in the corresponding entries.

1. (Coprime numbers of elements) If $H$ and $K$ are subgroups of $G$, both finite sets, with $\gcd(|H|, |K|) = 1$, then $H \cap K = \{e\}$.
2. (Two normal subgroups with trivial intersection) If $H$ and $K$ are normal subgroups of $G$ with $H \cap K = \{e\}$, then $hk = kh$ for every $h \in H$ and every $k \in K$.
3. (Order of a product of commuting elements) If $a, b \in G$ satisfy $ab = ba$, both $a$ and $b$ have finite order, and $m = \operatorname{ord}(a)$ and $n = \operatorname{ord}(b)$ satisfy $\gcd(m, n) = 1$, then $ab$ has finite order and $\operatorname{ord}(ab) = mn$. Hence $|\langle ab \rangle| = mn$.
:::

## 직관

(1)은 라그랑주 정리의 간단한 응용입니다. $H \cap K$는 $H$의 부분군이면서 $K$의 부분군이므로 그 원소의 개수는 $|H|$와 $|K|$를 모두 나누고, 둘이 서로소이면 $1$뿐입니다.

(2)는 "교환자" $hkh^{-1}k^{-1}$을 두 가지로 묶어 보는 것입니다. $(hkh^{-1})k^{-1}$로 묶으면 $K$의 원소이고, $h(kh^{-1}k^{-1})$로 묶으면 $H$의 원소입니다. 두 부분군에 함께 드는 원소는 $e$뿐이므로 교환자가 $e$이고, 이것은 $hk = kh$와 같습니다. 두 정규부분군이 모두 쓰입니다. $K$가 정규이어야 $hkh^{-1} \in K$이고, $H$가 정규이어야 $kh^{-1}k^{-1} \in H$입니다.

(3)은 두 톱니바퀴가 맞물려 도는 모습과 비슷합니다. 한 바퀴가 $m$칸, 다른 바퀴가 $n$칸마다 제자리로 오면, 둘이 함께 제자리로 오는 것은 $m$과 $n$의 공배수 칸에서입니다. 서로소이면 그 가장 작은 것이 $mn$입니다. 비유가 맞는 곳은 $ab = ba$이어서 $(ab)^k = a^k b^k$로 두 바퀴를 따로 돌릴 수 있다는 점이고, "함께 제자리"가 $(ab)^k = e$입니다. 다만 $a^k b^k = e$에서 $a^k = e$, $b^k = e$를 따로 얻는 데는 (1)이 필요합니다. 톱니바퀴와 달리 군에서는 $a^k$와 $b^{-k}$가 $e$가 아닌 같은 원소일 수도 있기 때문입니다.

## 증명

:::idea
(1)은 $H \cap K$에 라그랑주 정리를 두 번 쓴다. (2)는 $c = (hk)(h^{-1}k^{-1})$을 두 가지로 묶어 $c \in H \cap K$를 보인다. (3)은 $(ab)^k = a^k b^k$이므로 $(ab)^k = e$이면 $a^k = b^{-k} \in \langle a \rangle \cap \langle b \rangle$이고, (1)로 이것이 $e$이다.
:::

:::hint
(3)에서 $|\langle a \rangle| = m$, $|\langle b \rangle| = n$이고 $\gcd(m, n) = 1$이므로 (1)을 $\langle a \rangle$와 $\langle b \rangle$에 쓸 수 있습니다.
:::

:::hint
$m \mid k$이고 $n \mid k$이면 [[coprime-divisors-product-divides|서로소인 두 약수의 곱]]에 의해 $mn \mid k$입니다.
:::

:::proof
"위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$), "지수법칙의 ($k$)"는 [[laws-of-exponents|지수법칙]]의 ($k$), "기본 성질의 ($k$)"는 [[group-basic-properties|군의 기본 성질]]의 ($k$)이다. 정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (L2)를 쓰고, 자연수 $n$의 양의 약수 $d$가 $1 \le d \le n$이라는 것(소수의 진술)을 "약수의 크기"라 부른다.

**(1)** [[subgroup-examples|부분군의 예]]의 (4)에 의해 $H \cap K$는 $G$의 부분군이고, $H \cap K \subseteq H$이므로 [[subgroup|부분군]]의 (6)에 의해 군 $H$의 부분군이며, 마찬가지로 군 $K$의 부분군이다. $H$는 유한군이므로 [[lagrange-theorem|라그랑주 정리]]의 (1)을 군 $H$에 쓰면 $H \cap K$는 유한집합이고 $d = |H \cap K| \ge 1$이며 $d \mid |H|$이다. 같은 정리를 군 $K$에 쓰면 $d \mid |K|$이다. 따라서 $d$는 $|H|$와 $|K|$의 공약수이고, [[greatest-common-divisor|최대공약수]]의 정의에 의해 $d \le \gcd(|H|, |K|) = 1$이다. (L2)에 의해 $d = 1$이다. 부분군의 (1)에 의해 $e \in H \cap K$이므로 $\{e\} \subseteq H \cap K$이고, 둘 다 원소가 하나이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 2에 의해 $H \cap K = \{e\}$이다.

**(2)** $h \in H$, $k \in K$라 하고 $c = (hk)(h^{-1}k^{-1})$로 둔다. [[group|군]]의 결합법칙과 세 원소의 곱의 약속에 의해
$$c = \bigl((hk)h^{-1}\bigr)k^{-1} = (hkh^{-1})k^{-1}, \qquad c = h\bigl(k(h^{-1}k^{-1})\bigr) = h(kh^{-1}k^{-1})$$
이다. $K$는 정규부분군이므로 $hkh^{-1} \in K$이고, 부분군의 (2)에 의해 $k^{-1} \in K$이므로 $K$가 곱에 대해 닫혀 있어 $c \in K$이다. 또 부분군의 (2)에 의해 $h^{-1} \in H$이고 $H$는 정규부분군이므로 $kh^{-1}k^{-1} \in H$이며, $h \in H$이므로 $c \in H$이다. 따라서 $c \in H \cap K = \{e\}$이고 $(hk)(h^{-1}k^{-1}) = e$이다. 기본 성질의 (3)에 의해 $hk = (h^{-1}k^{-1})^{-1}$이고, 기본 성질의 (6)과 (5)에 의해 $(h^{-1}k^{-1})^{-1} = (k^{-1})^{-1}(h^{-1})^{-1} = kh$이다. 따라서 $hk = kh$이다.

**(3)** $m$, $n$은 자연수이다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle a \rangle$, $\langle b \rangle$는 $G$의 부분군이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 유한집합이며 $|\langle a \rangle| = m$, $|\langle b \rangle| = n$이다. $\gcd(m, n) = 1$이므로 (1)에 의해 $\langle a \rangle \cap \langle b \rangle = \{e\}$이다.

$ab = ba$이므로 지수법칙의 (4)에 의해 모든 정수 $k$에서 $(ab)^k = a^k b^k$이다.

*$(ab)^{mn} = e$.* 지수법칙의 (4)와 (2)에 의해 $(ab)^{mn} = a^{mn} b^{mn} = (a^m)^n (b^n)^m = e^n e^m$이고, [[power-in-a-group|군의 거듭제곱]]의 (3)에 의해 $e^n = e^m = e$이므로 $(ab)^{mn} = ee = e$이다. $mn$은 자연수이므로 $ab$의 위수는 유한하다.

*$(ab)^k = e$인 자연수 $k$는 $mn$의 배수이다.* $(ab)^k = e$이면 $a^k b^k = e$이므로 기본 성질의 (3)과 지수법칙의 (3)에 의해 $a^k = (b^k)^{-1} = b^{-k}$이다. 이 원소는 $\langle a \rangle$의 원소 $a^k$이면서 $\langle b \rangle$의 원소 $b^{-k}$이므로 $\langle a \rangle \cap \langle b \rangle = \{e\}$에 들고, $a^k = e$, $b^{-k} = e$이다. 지수법칙의 (3)에 의해 $b^k = (b^{-k})^{-1} = e^{-1} = e$이다(기본 성질의 (4)). 위수의 (2)에 의해 $m \mid k$이고 $n \mid k$이며, $\gcd(m, n) = 1$이므로 [[coprime-divisors-product-divides|서로소인 두 약수의 곱]]에 의해 $mn \mid k$이다.

*결론.* $(ab)^k = e$인 모든 자연수 $k$에서 $mn \mid k$이고, 약수의 크기에 의해 $mn \le k$이다. $(ab)^{mn} = e$이므로 위수의 정의의 끝 문장에 의해 $\operatorname{ord}(ab) = mn$이다. 순환 부분군의 크기의 (1)에 의해 $|\langle ab \rangle| = mn$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{Z}_6$에서 위수가 $2$, $3$인 두 원소]
아벨군 $(\mathbb{Z}_6, +)$([[number-groups|수로 이루어진 군]]의 (4))에서 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $k \cdot [a] = [ka]$이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0], [1], \dots, [5]$는 서로 다릅니다. $1 \cdot [3] = [3] \ne [0]$, $2 \cdot [3] = [6] = [0]$이므로 $\operatorname{ord}([3]) = 2$이고, $1 \cdot [2] = [2]$, $2 \cdot [2] = [4]$는 $[0]$이 아니고 $3 \cdot [2] = [6] = [0]$이므로 $\operatorname{ord}([2]) = 3$입니다(덧셈 표기는 [[order-of-an-element|원소의 위수]]의 (7)). $\gcd(2, 3) = 1$이고 아벨군이므로 (3)에 의해 $[3] + [2] = [5]$의 위수는 $6$입니다. 따라서 $[5]$는 $\mathbb{Z}_6$의 생성원입니다([[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)).
:::

:::counterexample[교환되지 않으면 깨질 수 있다]
$X = \{1, 2, 3\}$의 [[symmetric-group|대칭군]] $S_X$에서 두 함수 $a, b : X \to X$를
$$a(1) = 2,\ a(2) = 1,\ a(3) = 3, \qquad b(1) = 2,\ b(2) = 3,\ b(3) = 1$$
로 정합시다. 둘 다 전단사이므로 $S_X$의 원소이고, 곱은 합성 $ab = a \circ b$이며 항등원은 $i_X$입니다. $a \circ a$는 $1, 2, 3$을 각각 $1, 2, 3$으로 보내므로 $i_X$이고 $a \ne i_X$이므로 $\operatorname{ord}(a) = 2$입니다. $b \circ b$는 $1, 2, 3$을 각각 $3, 1, 2$로 보내므로 $i_X$가 아니고, $b \circ (b \circ b)$는 $1, 2, 3$을 각각 $1, 2, 3$으로 보내므로 $i_X$입니다. $b \ne i_X$이므로 $\operatorname{ord}(b) = 3$이고, $\gcd(2, 3) = 1$입니다.

그런데 $a \circ b$는 $1, 2, 3$을 각각 $a(2) = 1$, $a(3) = 3$, $a(1) = 2$로 보내므로 $i_X$가 아니고, $(a \circ b) \circ (a \circ b)$는 $1, 2, 3$을 각각 $1, 2, 3$으로 보내므로 $\operatorname{ord}(ab) = 2 \ne 6$입니다. 실제로 $b \circ a$는 $1$을 $b(2) = 3$으로 보내고 $a \circ b$는 $1$을 $1$로 보내므로 $ab \ne ba$이어서 (3)의 가정이 성립하지 않습니다.
:::

:::counterexample[위수가 서로소가 아니면 깨질 수 있다]
$(\mathbb{Z}_2, +)$에서 $a = b = [1]$이면 $a + b = b + a$이고 $\operatorname{ord}([1]) = 2$입니다($[1] \ne [0]$, $2 \cdot [1] = [2] = [0]$). 그런데 $a + b = [2] = [0]$이므로 위수가 $1$이고 $2 \cdot 2 = 4$가 아닙니다. 여기서는 $\gcd(2, 2) = 2$이고, 증명에서 $\langle a \rangle \cap \langle b \rangle = \{e\}$를 얻는 단계가 깨집니다.
:::

## 확인 질문

:::check[군 $G$의 두 부분군 $H$, $K$의 원소가 각각 $8$개, $15$개이면 $H \cap K$는 무엇인가?]
$\{e\}$입니다. $8$의 양의 약수는 $1$, $2$, $4$, $8$이고($8$ 이하이며 $8 = 3 \cdot 2 + 2 = 5 \cdot 1 + 3 = 6 \cdot 1 + 2 = 7 \cdot 1 + 1$이므로 $3$, $5$, $6$, $7$은 약수가 아닙니다), $15 = 2 \cdot 7 + 1 = 4 \cdot 3 + 3 = 8 \cdot 1 + 7$이므로 $2$, $4$, $8$은 $15$를 나누지 않습니다([[division-theorem|나눗셈 정리]]의 나머지의 유일성). 따라서 $8$과 $15$의 양의 공약수는 $1$뿐이고 $\gcd(8, 15) = 1$이므로 (1)에 의해 $H \cap K = \{e\}$입니다.
:::

:::check[아벨군 $G$에 위수가 $4$인 원소 $a$와 위수가 $9$인 원소 $b$가 있으면 위수가 $36$인 원소가 있는가?]
있습니다. 아벨군이므로 $ab = ba$입니다. $4$의 양의 약수는 $4$ 이하이고 $4 = 3 \cdot 1 + 1$이므로 $1$, $2$, $4$뿐이며, $9 = 2 \cdot 4 + 1 = 4 \cdot 2 + 1$이므로 $2$와 $4$는 $9$를 나누지 않아 $\gcd(4, 9) = 1$입니다. (3)에 의해 $\operatorname{ord}(ab) = 4 \cdot 9 = 36$입니다.
:::
