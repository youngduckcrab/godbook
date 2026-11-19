---
title: 거듭제곱의 위수
title_en: Order of a Power
aliases: [aᵏ의 위수, 원소의 거듭제곱의 위수, order of a power, order of a^k]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 원소 a의 위수가 유한하고 n = ord(a)이며 d = gcd(k, n), n = d·n′이면 aᵏ의 위수는 n′이다. 따라서 ⟨aᵏ⟩ = ⟨aᵈ⟩이고, aᵏ가 ⟨a⟩를 생성하는 것은 정확히 gcd(k, n) = 1일 때이다. 위수가 무한한 a에 대해 k ≠ 0이면 aᵏ의 위수도 무한하다.
requires: [set, subset, even-and-odd, prime-number, well-ordering-principle, divisibility, greatest-common-divisor, bezout-identity, integer-cancellation, coprime-divides-product, finite-set, number-of-elements-is-unique, subset-of-finite-set, group, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, order-of-an-element, order-of-cyclic-subgroup]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 4.1절 Subgroups of Cyclic Groups, Theorem 4.13, p.48
    checked: original
    note: "(3)은 출처 Theorem 4.13(p.48)이다. 출처는 '위수 n 인 순환군의 생성원 a'와 b = aᵏ 에 대해 b 의 위수가 n/d (d = gcd(k, n))라고 진술한다. 이 항목은 위수가 유한한 임의의 원소에 대해 진술하고, 정수의 나눗셈 n/d 대신 n = d·n′ 인 정수 n′ 으로 쓴다(이 사이트에는 정수의 나눗셈 기호가 없다). 출처의 증명은 'n | km 이면 n/d | m(k/d)'를 거쳐 'n/d 와 k/d 는 서로소'라고 쓰고 서로소인 까닭을 적지 않는다(p.48 의 증명을 그림으로 대조). 이 항목은 그것을 (2)로 진술하고 베주 항등식으로 증명한다. (2)는 출처 Theorem 4.13 의 증명이 까닭을 적지 않고 쓰는 사실이고, 출처에 명제나 증명으로는 없다(검색어 '[a-z]/d' 의 건들은 Theorem 4.13 과 그 증명, 9장 Theorem 9.21 의 증명, 17장과 16장 힌트의 분수, 'relatively prime' 을 2장(p.20–26)과 4장에서 찾은 건들에 이 진술이 없다). (1)은 출처에서 찾지 못했다(검색어 'gcd\\([a-z], ?[a-z]\\) = [a-z]' 3건은 2장의 유클리드 호제법 설명, 9장 Theorem 9.21 의 증명, 16장 연습문제 38, 'divisor of n', 'positive divisor' 의 건은 Theorem 4.13 의 증명뿐). (4)는 Theorem 4.13 의 특수한 경우이고 출처는 따로 적지 않는다. (5)의 ⟨aᵏ⟩ = ⟨aᵈ⟩ 는 출처에서 찾지 못했다(검색어 'ham i', 'han i', 'had i', 'hak i' 의 건들은 4장 연습문제 28(⟨aᵐ⟩ ∩ ⟨aⁿ⟩ 의 생성원)과 18장의 아이디얼). (6)의 '⇐' 방향은 출처 4장 연습문제 32(p.57, '위수 n 인 순환군의 생성원 x 와 gcd(k, n) = 1 이면 y = xᵏ 는 생성원')이다. (7)은 출처에 명제로 없다(검색어 'infinite order' 7건). 출처 Example 9.19(p.119)는 'gcd(8, 12) = 4 이므로 ℤ₁₂ 에서 8 의 위수는 12/4 = 3'이라고 Theorem 4.13 을 쓴다. 예시 'ℤ₂₀ 에서 [8] 의 위수'는 같은 발상이다(검색어 'Z20' 0건). 예시 'U(15) 에서 [2]⁶ 의 위수'는 출처에서 찾지 못했다(검색어 'U (15)' 0건). 반례 'k = 0 이면 위수가 무한한 원소의 거듭제곱도 위수가 유한하다'는 출처에서 찾지 못했다. 확인 질문 'ord(a) = 12 일 때 a⁻⁹ 의 위수'는 출처 4장 연습문제 2(ℤ₁₂ 에서 5 의 위수 등)와 같은 종류의 계산이다. 확인 질문 'ord(a) = 10 일 때 ⟨a⟩ 를 생성하는 aᵏ'은 출처 Example 4.15(p.48–49, ℤ₁₆ 의 생성원)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $a \in G$라 하자. 거듭제곱은 [[power-in-a-group|군의 거듭제곱]], $\langle a \rangle$와 생성원은 [[cyclic-subgroup|순환 부분군]], 원소의 위수와 $\operatorname{ord}$는 [[order-of-an-element|원소의 위수]]의 것이다. $\gcd$와 서로소는 [[greatest-common-divisor|최대공약수]]의 것이고, $\gcd(x, y)$는 $x$, $y$가 둘 다 $0$은 아닌 정수일 때만 쓴다. 이 사이트는 정수의 나눗셈 기호를 쓰지 않고, $n = d \cdot n'$처럼 곱으로 쓴다.

1. (약수와의 최대공약수) $m$이 자연수이고 $n$이 정수이며 $m \mid n$이면 $\gcd(m, n) = m$이다.
2. (공약수로 나눈 몫은 서로소) $n$이 자연수이고 $k$가 정수이며 $d = \gcd(k, n)$이라 하자. 그러면 $n = d \cdot n'$, $k = d \cdot k'$인 정수 $n'$, $k'$이 하나씩 있고, $n'$은 자연수이며 $\gcd(n', k') = 1$이다.
3. (거듭제곱의 위수) $a$의 위수가 유한하고 $n = \operatorname{ord}(a)$이며, $k$가 정수이고 $d = \gcd(k, n)$, $n = d \cdot n'$이라 하자. 그러면 $a^k$의 위수는 유한하고 $\operatorname{ord}(a^k) = n'$이다. 곧 모든 정수 $j$에 대하여 $(a^k)^j = e$인 것은 정확히 $n' \mid j$일 때이다.
4. (약수 지수) (3)의 가정에서 $d$가 $d \mid n$인 자연수이고 $n = d \cdot n'$이면 $\operatorname{ord}(a^d) = n'$이다.
5. (같은 순환 부분군) (3)의 가정과 기호에서 $\langle a^k \rangle = \langle a^d \rangle$이다.
6. (생성원) (3)의 가정에서 $\langle a^k \rangle = \langle a \rangle$인 것은 정확히 $\gcd(k, n) = 1$일 때이다. 곧 $a^k$가 군 $\langle a \rangle$의 생성원인 것은 정확히 $\gcd(k, n) = 1$일 때이다.
7. (위수가 무한한 경우) $a$의 위수가 무한하고 $k$가 $0$이 아닌 정수이면 $a^k$의 위수도 무한하다.
:::

:::english
Let $G$ be a group with identity $e$, and let $a \in G$. Powers are those of the entry on powers in a group, $\langle a \rangle$ and generators are those of the entry on cyclic subgroups, and the order of an element and $\operatorname{ord}$ are those of the entry on the order of an element. $\gcd$ and "relatively prime" are those of the entry on the greatest common divisor, and $\gcd(x, y)$ is written only when the integers $x$, $y$ are not both $0$. This site does not use a division symbol for integers and writes products such as $n = d \cdot n'$ instead.

1. (Gcd with a divisor) If $m$ is a natural number, $n$ is an integer and $m \mid n$, then $\gcd(m, n) = m$.
2. (Quotients by the gcd are coprime) Let $n$ be a natural number, $k$ an integer and $d = \gcd(k, n)$. Then there are unique integers $n'$, $k'$ with $n = d \cdot n'$ and $k = d \cdot k'$; moreover $n'$ is a natural number and $\gcd(n', k') = 1$.
3. (Order of a power) Suppose $a$ has finite order, $n = \operatorname{ord}(a)$, $k$ is an integer, $d = \gcd(k, n)$ and $n = d \cdot n'$. Then $a^k$ has finite order and $\operatorname{ord}(a^k) = n'$. That is, for every integer $j$, $(a^k)^j = e$ exactly when $n' \mid j$.
4. (Divisor exponents) Under the hypotheses of (3), if $d$ is a natural number with $d \mid n$ and $n = d \cdot n'$, then $\operatorname{ord}(a^d) = n'$.
5. (Same cyclic subgroup) Under the hypotheses and notation of (3), $\langle a^k \rangle = \langle a^d \rangle$.
6. (Generators) Under the hypotheses of (3), $\langle a^k \rangle = \langle a \rangle$ exactly when $\gcd(k, n) = 1$. That is, $a^k$ is a generator of the group $\langle a \rangle$ exactly when $\gcd(k, n) = 1$.
7. (Infinite order) If $a$ has infinite order and $k$ is a nonzero integer, then $a^k$ also has infinite order.
:::

## 직관

$a$의 위수가 $n$이면 $a$를 거듭 곱할 때 $n$번마다 $e$로 돌아옵니다. $a^k$를 거듭 곱하는 것은 $a$의 지수를 $k$씩 건너뛰며 가는 것이므로, $a^k$가 처음으로 $e$로 돌아오는 것은 $k$의 배수 가운데 처음으로 $n$의 배수가 되는 때입니다. 둘레가 $n$칸인 원형 트랙을 $k$칸씩 뛰는 사람이 처음으로 출발점에 서는 것은 몇 번째 뜀인지 묻는 것과 같습니다.

$k$와 $n$이 공약수 $d = \gcd(k, n)$를 나눠 가지면, $k$칸씩 뛰는 것은 $d$칸짜리 눈금으로 $k'$칸씩 뛰는 것이고 트랙의 둘레는 그 눈금으로 $n'$칸입니다. $k'$과 $n'$은 더 나눠 가질 공약수가 없으므로((2)) 출발점에 다시 서려면 $n'$번을 다 뛰어야 합니다((3)). 그래서 $a^k$가 지나는 자리는 $d$칸마다 하나씩, 곧 $a^d$가 지나는 자리와 같습니다((5)). 비유가 맞지 않는 곳도 있습니다. $k$가 $0$이면 제자리에 서 있으므로 한 번 만에 출발점입니다. 실제로 $\gcd(0, n) = n$이고 $n' = 1$이어서 (3)은 $\operatorname{ord}(a^0) = 1$을 줍니다.

## 증명

:::idea
$(a^k)^j = a^{kj}$이므로 $(a^k)^j = e$는 $n \mid kj$와 같고, 양쪽에서 $d$를 소거하면 $n' \mid k'j$이다. $n'$과 $k'$이 서로소이므로 이것은 $n' \mid j$와 같다. 서로소인 것은 베주 항등식 $kx + ny = d$를 $d$로 소거해 $k'x + n'y = 1$을 얻어 보인다.
:::

:::hint
(2): $kx + ny = d$에 $k = dk'$, $n = dn'$을 넣고 양변의 $d$를 소거하라. $n'$과 $k'$의 공약수는 $1$을 나눈다.
:::

:::hint
(5): $d = kx + ny$이면 $a^d = (a^k)^x (a^n)^y$이다.
:::

:::proof
아래에서 "위수의 ($i$)"는 [[order-of-an-element|원소의 위수]]의 ($i$), "지수법칙의 ($i$)"는 [[laws-of-exponents|지수법칙]]의 ($i$)이다. (Z1), (Z2)는 [[prime-number|소수]]의 진술에서, (Z5), (L2)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들이거나 증명한 것이다. "자연수 $m$의 양의 약수 $c$는 $c \le m$"은 [[prime-number|소수]]의 진술이다.

**(1)** $m \ne 0$이므로 $\gcd(m, n)$이 정해진다. $m = m \cdot 1$이므로 $m \mid m$이고, 가정에 의해 $m \mid n$이므로 $m$은 $m$과 $n$의 공약수이다. $c$가 $m$과 $n$의 공약수이면 (Z5)에 의해 $c \le 0$이거나 $c > 0$이다. $c \le 0$이면 $c \le 0 < m$이다. $c > 0$이면 $c$는 자연수 $m$의 양의 약수이므로 $c \le m$이다. 따라서 $m$은 [[greatest-common-divisor|최대공약수]]의 두 조건을 만족하고 $\gcd(m, n) = m$이다.

**(2)** $n \ne 0$이므로 $\gcd(k, n)$이 정해지고, 최대공약수의 (i)에 의해 $d \ge 1$이다. $d$는 $k$와 $n$의 공약수이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $n = dn'$, $k = dk'$인 정수 $n'$, $k'$이 있다. $d \ne 0$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 이런 $n'$, $k'$은 하나씩뿐이다. $n' \le 0$이라면 (Z2)에 의해 $n = dn' \le 0$이 되어 $n$이 자연수라는 데 어긋나므로 $n' > 0$, 곧 $n'$은 자연수이다. 특히 $n' \ne 0$이므로 $\gcd(n', k')$이 정해진다.

[[bezout-identity|베주 항등식]]에 의해 $kx + ny = d$인 정수 $x$, $y$가 있다. 그러면 $d(k'x + n'y) = dk'x + dn'y = kx + ny = d = d \cdot 1$이고, 소거 법칙의 (2)에 의해 $k'x + n'y = 1$이다. $g = \gcd(n', k')$이라 하면 $g \ge 1$이고 $n' = gs$, $k' = gt$인 정수 $s$, $t$가 있으므로 $1 = g(tx + sy)$이다. 곧 $g$는 자연수 $1$의 양의 약수이므로 $g \le 1$이고, (L2)에 의해 $g = 1$이다.

**(3)** (2)에 의해 $k = dk'$인 정수 $k'$이 있고 $n'$은 자연수이며 $\gcd(n', k') = 1$이다. $j$가 정수일 때 다음이 차례로 동치임을 보인다.

- (가) $(a^k)^j = e$
- (나) $n \mid kj$
- (다) $n' \mid k'j$
- (라) $n' \mid j$

(가)와 (나): 지수법칙의 (2)에 의해 $(a^k)^j = a^{kj}$이고, 위수의 (2)에 의해 $a^{kj} = e$인 것은 정확히 $n \mid kj$일 때이다.

(나)와 (다): $kj = dk'j$이고 $n = dn'$이다. $n \mid kj$이면 $dk'j = dn'c$인 정수 $c$가 있고, $d \ne 0$이므로 소거 법칙의 (2)에 의해 $k'j = n'c$, 곧 $n' \mid k'j$이다. 거꾸로 $k'j = n'c$이면 $kj = dk'j = dn'c = nc$이므로 $n \mid kj$이다.

(다)와 (라): $n' \mid k'j$이면, $n' \ne 0$이고 $\gcd(n', k') = 1$이므로 [[coprime-divides-product|곱의 한 인수와 서로소인 약수는 다른 인수를 나눈다]]에 의해 $n' \mid j$이다. 거꾸로 $j = n'c$이면 $k'j = n'(k'c)$이므로 $n' \mid k'j$이다.

이로써 끝 문장이 증명되었다. $n'$은 자연수이고 $n' \mid n'$이므로 $(a^k)^{n'} = e$이다. 따라서 $a^k$의 위수는 유한하다. 자연수 $j$가 $(a^k)^j = e$를 만족하면 $n' \mid j$이므로 $n'$은 자연수 $j$의 양의 약수이고 $n' \le j$이다. 위수의 정의의 마지막 문장에 의해 $\operatorname{ord}(a^k) = n'$이다.

**(4)** (1)에 의해 $\gcd(d, n) = d$이므로, (3)을 $k = d$에 쓰면 $\operatorname{ord}(a^d) = n'$이다.

**(5)** $k = dk'$이므로 지수법칙의 (2)에 의해 $a^k = (a^d)^{k'} \in \langle a^d \rangle$이다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle a^d \rangle$는 부분군이므로 순환 부분군의 (2)에 의해 $\langle a^k \rangle \subseteq \langle a^d \rangle$이다. 거꾸로 베주 항등식에 의해 $kx + ny = d$인 정수 $x$, $y$가 있고, 지수법칙의 (1), (2)와 [[power-in-a-group|군의 거듭제곱]]의 (3)에 의해
$$a^d = a^{kx + ny} = a^{kx}a^{ny} = (a^k)^x (a^n)^y = (a^k)^x e^y = (a^k)^x \in \langle a^k \rangle$$
이다. 같은 이유로 $\langle a^d \rangle \subseteq \langle a^k \rangle$이므로 $\langle a^k \rangle = \langle a^d \rangle$이다.

**(6)** $a^k \in \langle a \rangle$이므로 순환 부분군의 (2)에 의해 $\langle a^k \rangle \subseteq \langle a \rangle$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)과 이 항목의 (3)에 의해 $|\langle a \rangle| = n$이고 $|\langle a^k \rangle| = \operatorname{ord}(a^k) = n'$이다.

$\gcd(k, n) = 1$이면 $n = 1 \cdot n'$이므로 $n' = n$이고, $\langle a^k \rangle$는 원소를 $n$개 갖는 $\langle a \rangle$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $\langle a^k \rangle = \langle a \rangle$이다. 거꾸로 $\langle a^k \rangle = \langle a \rangle$이면 [[number-of-elements-is-unique|원소의 개수]]의 유일성에 의해 $n' = n$이므로 $n = d \cdot n$이고, $n \ne 0$이므로 (Z4)에 의해 $d = 1$이다.

끝 문장: 순환 부분군의 (6)의 끝 문장에 의해 군 $\langle a^k \rangle$는 $a^k$를 생성원으로 하는 순환군이다. 따라서 $\langle a^k \rangle = \langle a \rangle$이면 $a^k$는 군 $\langle a \rangle$의 생성원이다. 거꾸로 $a^k$가 군 $\langle a \rangle$의 생성원이면, 이 군에서 $a^k$가 생성하는 순환 부분군은 거듭제곱의 (5)에 의해 $G$에서 계산한 $\langle a^k \rangle$와 같으므로 $\langle a^k \rangle = \langle a \rangle$이다.

**(7)** 자연수 $j$에 대하여 $(a^k)^j = e$라 하자. 지수법칙의 (2)에 의해 $a^{kj} = e$이고, 위수의 (4)에 의해 $kj = 0$이다. 소거 법칙의 (1)에 의해 $k = 0$이거나 $j = 0$인데, $k \ne 0$이고 $j$는 양의 정수이므로 (Z5)에 의해 $j \ne 0$이다. 이것은 모순이므로 그런 자연수 $j$는 없고, $a^k$의 위수는 무한하다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_{20}$에서 $[8]$의 위수]
$(\mathbb{Z}_{20}, +)$에서 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 20$이고, [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $[8] = 8 \cdot [1]$입니다. $\gcd(8, 20) = 4$입니다. $4$는 $8 = 4 \cdot 2$와 $20 = 4 \cdot 5$의 공약수이고, $8$과 $20$의 공약수 $c$는 $8 \cdot (-2) + 20 \cdot 1 = 4$를 나누므로 $c \le 0$이거나 $4$의 양의 약수, 곧 $c \le 4$이기 때문입니다([[prime-number|소수]]의 진술). $20 = 4 \cdot 5$이므로 (3)에 의해 $\operatorname{ord}([8]) = 5$이고, (5)에 의해 $\langle [8] \rangle = \langle [4] \rangle$입니다. 직접 계산하면 $j \cdot [8]$은 $j = 1, \dots, 5$에서 $[8]$, $[16]$, $[24] = [4]$, $[32] = [12]$, $[40] = [0]$입니다.
:::

:::example[$U(15)$에서 $[2]^6$의 위수]
[[order-of-an-element|원소의 위수]]의 예시에서 $U(15)$의 $[2]$는 위수가 $4$입니다. $\gcd(6, 4) = 2$이고($2$는 공약수이고 공약수는 $6 \cdot 1 + 4 \cdot (-1) = 2$를 나누므로, 앞 예시와 같은 방법) $4 = 2 \cdot 2$이므로 (3)에 의해 $\operatorname{ord}([2]^6) = 2$입니다. 실제로 $[2]^6 = [2]^2 = [4]$이고($6 - 2 = 4 \cdot 1$, 원소의 위수의 (3)), $[4][4] = [16] = [1]$이며 $[4] \ne [1]$입니다.
:::

:::counterexample[$k = 0$이면 위수가 무한한 원소의 거듭제곱도 위수가 유한하다]
(7)의 "$k \ne 0$"은 뺄 수 없습니다. $(\mathbb{Z}, +)$에서 $1$의 위수는 무한하지만([[order-of-an-element|원소의 위수]]의 (7)), $0 \cdot 1 = 0$은 항등원이므로 원소의 위수의 (1)에 의해 위수가 $1$입니다.
:::

## 확인 질문

:::check[$\operatorname{ord}(a) = 12$이면 $a^{-9}$의 위수는 무엇인가?]
$4$입니다. [[greatest-common-divisor|최대공약수]]의 (iii)에 의해 $\gcd(-9, 12) = \gcd(9, 12)$이고, $3$은 $9$와 $12$의 공약수이며 $9 \cdot (-1) + 12 \cdot 1 = 3$이므로 공약수는 모두 $3$을 나누어 $3$ 이하입니다. 곧 $\gcd(-9, 12) = 3$이고 $12 = 3 \cdot 4$이므로 (3)에 의해 $\operatorname{ord}(a^{-9}) = 4$입니다.
:::

:::check[$\operatorname{ord}(a) = 10$일 때 $0 \le k \le 9$인 정수 $k$ 가운데 $a^k$가 $\langle a \rangle$를 생성하는 것은?]
$k = 1, 3, 7, 9$입니다. (6)에 의해 $\gcd(k, 10) = 1$인 $k$를 찾으면 됩니다. $k = 0$이면 $\gcd(0, 10) = 10$이고, $k = 2, 4, 6, 8$은 $2$를, $k = 5$는 $5$를 $10$과 공약수로 가지므로 $\gcd \ge 2$입니다. $k = 1, 3, 7, 9$의 양의 약수(각각 $1$; $1, 3$; $1, 7$; $1, 3, 9$) 가운데 $10$의 약수이기도 한 것은 $1$뿐이므로, 최대공약수는 $1$입니다.
:::
