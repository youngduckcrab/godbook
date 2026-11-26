---
title: 위수 pq인 군
title_en: Groups of Order pq
aliases: [원소가 pq개인 군, 위수가 pq인 군, groups of order pq, group of order pq is cyclic]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: p < q인 소수 p, q에 대하여 원소가 pq개인 군에는 원소가 q개인 부분군이 정확히 하나 있고 그것은 정규부분군이므로, 이 군은 단순군이 아니다. 원소가 p개인 부분군이 정규부분군이면 이 군은 순환군이고, p가 q − 1을 나누지 않으면 언제나 그렇다.
requires: [prime-number, well-ordering-principle, even-and-odd, divisibility, congruence-modulo-n, greatest-common-divisor, division-theorem, prime-power-divisors, group, subgroup, normal-subgroup, number-groups, group-isomorphism, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, order-divides-group-order, classification-of-cyclic-groups, sylow-subgroup, first-sylow-theorem, third-sylow-theorem, simple-group, commuting-elements-of-coprime-order, symmetric-group, order-of-symmetric-group, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.2절 Examples and Applications, Theorem 15.10 p.184(증명 p.184), Example 15.11 p.184; 15.3절 Reading Questions 2 p.187; 15.4절 연습문제 9, 17 p.187; 4.5절 연습문제 34 p.57
    checked: original
    note: "진술 (1), (2), (4)는 출처 Theorem 15.10(p.184, 'p < q 인 서로 다른 소수 p, q 에 대하여 위수 pq 인 모든 군 G 에는 위수 q 인 부분군이 하나뿐이고 그것은 정규부분군이다. 따라서 G 는 단순군일 수 없다. 또 q ≢ 1 (mod p) 이면 G 는 순환군이다')과 같다. 출처의 조건 q ≢ 1 (mod p) 는 합동의 정의에 의해 이 항목의 p ∤ q − 1 과 같다. 출처의 증명(p.184)은 위수 q 인 부분군 H 의 켤레의 개수가 pq 를 나누고 1 + kq (k = 0, 1, …) 꼴이라 한 뒤 'However, 1 + q is already too large to divide the order of the group; hence, H can only be conjugate to itself.' 라고 쓴다. 이 항목은 n_q 가 m = p 를 나눈다는 것('실로우 제3 정리' (2))을 써서 n_q 를 1 과 p 로 좁히고, n_q = p 이면 q 가 p − 1 을 나누어 q ≤ p − 1 이 되는 것으로 p 를 지운다. 출처는 이어서 실로우 p-부분군 K 의 켤레의 개수가 q 를 나누고 1 + kp 꼴이라 하고, 'If 1 + kp = 1, then K is normal in G. In this case, we can easily show that G satisfies the criteria, given in Chapter 9, for the internal direct product of H and K.' 라고 쓴 뒤 Theorem 9.21 로 G ≅ Z_p × Z_q ≅ Z_pq 를 얻는다. (3)은 이 'If 1 + kp = 1' 이하의 부분을 진술로 올린 것이고, 이 항목은 직곱 대신 '서로소인 위수의 교환되는 원소' (1)–(3)으로 위수가 pq 인 원소를 직접 만든다. 예시 '원소가 $35$개인 군'은 출처 Example 15.11(p.184, 15 = 5·3 이고 5 ≢ 1 (mod 3) 이므로 위수 15 인 군은 순환군)과 같은 발상이고, 출처 15.5절의 Table 15.21(p.189)은 위수 35 인 군의 개수를 1 로 적으며, 출처 Example 15.14(p.185)는 원소가 35 개인 몫군 G/H₁ 이 Theorem 15.10 에 의해 아벨군이라고 쓴다. 출처 15.3절 Reading Questions 2(p.187, 위수 69 인 군의 개수)와 15.4절 연습문제 9(p.187, 위수 33 인 군의 실로우 3-부분군은 하나뿐), 17(p.187, 위수 255 인 군은 순환군)도 같은 갈래의 물음이다. 반례 '$p \\mid q - 1$인 $S_3$'의 S₃ 이 순환군이 아니라는 것은 출처 Figure 4.8 앞뒤(p.47, S₃ 의 부분군은 모두 순환군이지만 S₃ 을 생성하는 원소는 없다)에 나온다. 반례 '서로 같은 두 소수와 $V$'의 V 와 같은 꼴의 군 Z₂ × Z₂ 가 순환군이 아니라는 것은 출처 Example 3.28(p.39)과 Example 9.15(p.118, 항등원이 아닌 모든 원소의 위수가 2)에 나온다. 확인 질문 '원소가 $6$개인 아벨군은 순환군인가?'는 출처 4.5절 연습문제 34(p.57, gcd(p, q) = 1 이고 위수 pq 인 아벨군이 위수 p, q 인 원소를 가지면 순환군)와 같은 발상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(위수 pq 의 n_p·n_q 판정과 단순군 (5) 의 조건에 경계값, 지시와 요약의 어긋남 처리 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$, $q$가 $p < q$인 [[prime-number|소수]]이고 $G$가 원소를 $pq$개 갖는 유한 [[group|군]]이며 $e$가 그 항등원이라 하자. 합동은 [[congruence-modulo-n|합동]]의 것이고, $\operatorname{Syl}_p(G)$와 $n_p$는 [[sylow-subgroup|실로우 p-부분군]]의 것이며, 단순군은 [[simple-group|단순군]]의 것이다. 순환군은 [[cyclic-subgroup|순환 부분군]]의 것이고, $(\mathbb{Z}_{pq}, +)$는 [[number-groups|수로 이루어진 군]]의 군이며, $\cong$은 [[group-isomorphism|군의 동형]]의 것이다.

1. (원소가 $q$개인 부분군) $G$의 원소가 $q$개인 부분군은 정확히 하나 있고, 그것은 $G$의 [[normal-subgroup|정규부분군]]이다. 곧 $n_q = 1$이다.
2. (단순군이 아니다) $G$는 단순군이 아니다.
3. (원소가 $p$개인 정규부분군이 있으면) $G$의 원소가 $p$개인 부분군 가운데 $G$의 정규부분군인 것이 있으면 $G$는 순환군이고 $G \cong (\mathbb{Z}_{pq}, +)$이다.
4. (순환군일 조건) $p \nmid q - 1$이면, 곧 $q \not\equiv 1 \pmod p$이면, $G$의 원소가 $p$개인 부분군은 정확히 하나 있고 그것은 $G$의 정규부분군이다. 따라서 $G$는 순환군이고 $G \cong (\mathbb{Z}_{pq}, +)$이다.
:::

:::english
Let $p$ and $q$ be primes with $p < q$, let $G$ be a finite group with $pq$ elements, and let $e$ be its identity. Congruence is as in the entry on congruence, $\operatorname{Syl}_p(G)$ and $n_p$ are as in the entry on Sylow $p$-subgroups, and simple groups are as in the entry on simple groups. Cyclic groups are as in the entry on cyclic subgroups, $(\mathbb{Z}_{pq}, +)$ is the group from the entry on groups of numbers, and $\cong$ is as in the entry on isomorphisms of groups.

1. (Subgroups with $q$ elements) $G$ has exactly one subgroup with $q$ elements, and it is a normal subgroup of $G$. That is, $n_q = 1$.
2. (Not simple) $G$ is not simple.
3. (If a subgroup with $p$ elements is normal) If some subgroup of $G$ with $p$ elements is a normal subgroup of $G$, then $G$ is cyclic and $G \cong (\mathbb{Z}_{pq}, +)$.
4. (A condition for being cyclic) If $p \nmid q - 1$, that is, $q \not\equiv 1 \pmod p$, then $G$ has exactly one subgroup with $p$ elements, and it is a normal subgroup of $G$. Hence $G$ is cyclic and $G \cong (\mathbb{Z}_{pq}, +)$.
:::

## 직관

원소의 개수가 서로 다른 두 소수의 곱인 군에서는 실로우 정리가 많은 것을 알려 줍니다. 원소가 $q$개인 부분군의 개수 $n_q$는 $p$를 나누므로 $1$이거나 $p$이고, $q$를 법으로 $1$과 합동이어야 합니다. $p$는 $q$보다 작아서 $p - 1$은 $q$로 나누어떨어질 수 없으므로 $n_q = 1$입니다. 큰 소수 쪽의 실로우 부분군은 늘 하나뿐이어서 정규부분군입니다.

작은 소수 쪽은 $n_p$가 $1$이거나 $q$입니다. $q$가 $p$를 법으로 $1$과 합동이 아니면 $n_p = 1$이고, 두 실로우 부분군 $H$와 $K$가 모두 정규부분군이 됩니다. 원소의 개수가 서로소이므로 $H \cap K = \{e\}$이고, 그래서 $H$와 $K$의 원소끼리 교환됩니다. 위수가 $q$인 원소와 위수가 $p$인 원소를 곱하면 위수가 $pq$인 원소가 나오고, 이것이 $G$를 생성합니다. 서로 맞물려 도는 두 톱니바퀴의 칸 수가 서로소이면, 둘이 함께 처음 자리로 돌아오기까지 두 칸 수의 곱만큼 돌아야 하는 것과 같습니다. 두 톱니바퀴가 두 원소에, 맞물려 돈다는 것이 교환된다는 것에 해당합니다.

$q \equiv 1 \pmod p$이면 $n_p = q$일 수 있고, 그때 $G$는 순환군이 아닙니다. 이 항목의 반례가 그런 예 $S_3$을 보입니다.

## 증명

:::idea
실로우 제3 정리로 $n_q$를 $p$의 양의 약수 $1$, $p$ 가운데 $q$를 법으로 $1$과 합동인 것으로 좁히면 $n_q = 1$이다. (3)에서는 원소가 $p$개, $q$개인 두 정규부분군의 원소끼리 교환되고 원소의 개수가 서로소이므로, 두 부분군의 생성원의 곱이 위수 $pq$인 원소가 된다. (4)는 같은 방법으로 $n_p = 1$을 얻어 (3)을 쓴다.
:::

:::hint
$n_q = p$라면 $q$는 $p - 1$을 나눕니다. $p - 1$은 $1$ 이상이고 $q$보다 작습니다.
:::

:::hint
(3)에서는 [[commuting-elements-of-coprime-order|서로소인 위수와 교환되는 원소]]의 세 번호를 차례로 씁니다.
:::

:::proof
정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1), (L3)을 인용하고, 자연수 $n$의 양의 약수 $d$가 $1 \le d \le n$이라는 것(소수의 진술)을 "약수의 크기"라 부른다. "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술이고, "제3 정리의 ($k$)"는 [[third-sylow-theorem|실로우 제3 정리]]의 ($k$)이다.

**준비 1: 두 소수.** PPD의 (2)에 의해 $p \ge 2$, $q \ge 2$이다. $q \mid p$이면 $q$는 $p$의 양의 약수이므로 소수의 정의에 의해 $q = 1$이거나 $q = p$인데, $q \ge 2$이고 $p < q$이므로 둘 다 (L1)과 (Z5)에 어긋난다. 따라서 $q \nmid p$이다. 같은 방법으로 $p \mid q$이면 $p = 1$이거나 $p = q$인데 둘 다 어긋나므로 $p \nmid q$이다. $p$의 양의 약수는 $1$과 $p$뿐이고 $p \nmid q$이므로 $p$와 $q$의 양의 공약수는 $1$뿐이다. [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $\gcd(p, q)$는 양의 공약수이므로 $\gcd(p, q) = 1$이다.

**준비 2: 실로우 부분군과 원소의 개수.** PPD의 (1)의 (i)에 의해 $q^1 = q$이므로 $|G| = pq = q^1 \cdot p$이고 $q \nmid p$이다. PPD의 (5)의 유일성에 의해 소수 $q$에 대한 [[sylow-subgroup|실로우 p-부분군]]의 쌍은 $(r, m) = (1, p)$이고, 실로우 $q$-부분군은 정확히 원소가 $q$개인 부분군이다. 같은 방법으로 $|G| = p^1 \cdot q$이고 $p \nmid q$이므로 소수 $p$에 대한 쌍은 $(1, q)$이고, 실로우 $p$-부분군은 정확히 원소가 $p$개인 부분군이다.

**준비 3: 소수를 나누는 개수.** $\ell$이 소수 $p$, $q$ 가운데 하나이고 $\ell'$이 나머지 하나라 하자. 제3 정리의 (2)에 의해 $n_\ell$은 $\ell'$을 나눈다. $n_\ell$은 원소의 개수이므로 $0$ 이상이고, $n_\ell = 0$이면 $\ell' = 0 \cdot c = 0$인 정수 $c$가 있어 $\ell' \ge 2$에 어긋나므로 (Z5)에 의해 $n_\ell > 0$이다. 따라서 $n_\ell$은 소수 $\ell'$의 양의 약수이고, 소수의 정의에 의해 $n_\ell = 1$이거나 $n_\ell = \ell'$이다.

**(1)** 준비 3에 의해 $n_q = 1$이거나 $n_q = p$이다. $n_q = p$라 하자. 제3 정리의 (1)에 의해 $p \equiv 1 \pmod q$이므로, 합동의 정의에 의해 $q \mid p - 1$이다. $p \ge 2$이므로 (Z7)에 의해 $p - 1 \ge 1$이고 $p - 1$은 자연수이며, $q$는 그 양의 약수이므로 약수의 크기에 의해 $q \le p - 1$이다. (L3)에 의해 $p - 1 < p$이므로 (Z6)에 의해 $q < p$가 되어 $p < q$와 함께 (L1)에 어긋난다. 따라서 $n_q = 1$이다.

준비 2에 의해 원소가 $q$개인 부분군 전체의 집합은 $\operatorname{Syl}_q(G)$이고, 이것은 원소가 하나이다. 곧 원소가 $q$개인 부분군은 정확히 하나 있다. 그것을 $H$라 하면 $H \in \operatorname{Syl}_q(G)$이고 $n_q = 1$이므로 제3 정리의 (3)에 의해 $H$는 $G$의 정규부분군이다.

**(2)** 준비 2에 의해 소수 $q$에 대한 쌍 $(r, m) = (1, p)$는 $r = 1 \ge 1$이고 $m = p \ge 2$를 만족하고, (1)에 의해 $n_q = 1$이다. 단순군의 (5)에 의해 $G$는 단순군이 아니다.

**(3)** $K$가 원소가 $p$개인 $G$의 부분군이고 $G$의 정규부분군이라 하자. (1)의 $H$는 원소가 $q$개인 정규부분군이다.

*교환.* $\gcd(|K|, |H|) = \gcd(p, q) = 1$이므로 [[commuting-elements-of-coprime-order|서로소인 위수와 교환되는 원소]]의 (1)에 의해 $K \cap H = \{e\}$이다. $K$와 $H$가 정규부분군이므로 같은 항목의 (2)에 의해 모든 $a \in K$, $b \in H$에서 $ab = ba$이다.

*생성원.* [[subgroup|부분군]]의 (1)에 의해 $e \in K$이고 $|K| = p \ge 2$이므로, $\{e\}$와 $K$는 원소의 개수가 달라 같지 않고 $a \ne e$인 $a \in K$가 있다. [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)을 원소의 개수가 소수 $p$인 군 $K$에 쓰면 군 $K$에서 $\operatorname{ord}(a) = p$이고, [[order-of-an-element|원소의 위수]]의 (9)에 의해 $G$에서도 $\operatorname{ord}(a) = p$이다. 같은 방법으로 $\operatorname{ord}(b) = q$인 $b \in H$가 있다.

*결론.* $ab = ba$이고 $\gcd(p, q) = 1$이므로 서로소인 위수와 교환되는 원소의 (3)에 의해 $\operatorname{ord}(ab) = pq = |G|$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $ab$는 $G$의 생성원이고 $G$는 순환군이다. [[classification-of-cyclic-groups|순환군의 분류]]의 (2)에 의해 $G \cong (\mathbb{Z}_{pq}, +)$이다.

**(4)** $p \nmid q - 1$이라 하자. 합동의 정의에 의해 이것은 $q \not\equiv 1 \pmod p$와 같다. 준비 3에 의해 $n_p = 1$이거나 $n_p = q$이고, $n_p = q$이면 제3 정리의 (1)에 의해 $q \equiv 1 \pmod p$가 되어 어긋나므로 $n_p = 1$이다. 준비 2에 의해 원소가 $p$개인 부분군 전체의 집합은 $\operatorname{Syl}_p(G)$이므로, 원소가 $p$개인 부분군은 정확히 하나 있다. 그것을 $K$라 하면 제3 정리의 (3)에 의해 $K$는 $G$의 정규부분군이고, (3)에 의해 $G$는 순환군이며 $G \cong (\mathbb{Z}_{pq}, +)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $35$개인 군]
$5$의 양의 약수는 $5$ 이하이고 $5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]에 의해 $1$과 $5$뿐이어서 $5$는 소수입니다. 같은 방법으로 $7 = 2 \cdot 3 + 1 = 3 \cdot 2 + 1 = 4 \cdot 1 + 3 = 5 \cdot 1 + 2 = 6 \cdot 1 + 1$이므로 $7$도 소수입니다. $35 = 5 \cdot 7$이고 $5 < 7$이며, $7 - 1 = 6 = 5 \cdot 1 + 1$이므로 나눗셈 정리에 의해 $5 \nmid 6$입니다. 따라서 (4)에 의해 원소가 $35$개인 군은 모두 순환군이고 $(\mathbb{Z}_{35}, +)$와 동형입니다. 원소가 $5$개인 부분군과 $7$개인 부분군이 하나씩 있고 둘 다 정규부분군입니다.
:::

:::counterexample[$p \mid q - 1$인 $S_3$]
(4)의 가정 $p \nmid q - 1$을 빼면 결론이 깨질 수 있습니다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6 = 2 \cdot 3$이고, $p = 2 < 3 = q$이며 $q - 1 = 2 = 2 \cdot 1$이므로 $p \mid q - 1$입니다. [[cyclic-subgroup|순환 부분군]]의 (7)에 의해 $\{1, 2, 3\}$의 [[symmetric-group|대칭군]] $S_3$은 순환군이 아닙니다.

$S_3$에서도 (1)은 성립합니다. 원소가 $3$개인 부분군은 하나뿐이고 정규부분군이며, [[alternating-group|교대군]]의 (1), (4)에 의해 그것은 $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$입니다. 한편 $S_3$이 순환군이 아니므로, (3)에 의해 원소가 $2$개인 $S_3$의 부분군은 어느 것도 정규부분군이 아닙니다. 원소가 $2$개인 부분군은 실로우 $2$-부분군이므로, [[third-sylow-theorem|실로우 제3 정리]]의 (3)에 의해 $n_2 \ne 1$이고, 같은 정리의 (2)에 의해 $n_2$는 소수 $3$의 양의 약수이므로 $n_2 = 3$입니다.
:::

:::counterexample[서로 같은 두 소수와 $V$]
$p < q$라는 가정, 곧 두 소수가 서로 다르다는 가정도 뺄 수 없습니다. [[alternating-group|교대군]]의 (6)의 $V = \{i\} \cup D$는 원소가 $4 = 2 \cdot 2$개인 군입니다. 같은 항목의 (5)에 의해 $D$의 원소의 위수는 $2$이고, [[order-of-an-element|원소의 위수]]의 (1)과 (9)에 의해 군 $V$에서 $i$의 위수는 $1$, $D$의 원소의 위수는 $2$입니다. 위수가 $4$인 원소가 없으므로 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $V$는 순환군이 아닙니다. 또 $d \in D$마다 [[cyclic-subgroup|순환 부분군]]의 (1)과 순환 부분군의 크기의 (1)에 의해 $\langle d \rangle = \{i, d\}$는 원소가 $2$개인 부분군이고, $D$의 세 원소가 서로 다르므로 이런 부분군이 셋 있습니다. (1)의 "하나뿐"도 성립하지 않습니다.
:::

## 확인 질문

:::check[원소가 $6$개인 아벨군은 순환군인가?]
그렇습니다. $6 = 2 \cdot 3$이고 $2 < 3$은 소수입니다. $2 \mid 3 - 1$이므로 (4)는 쓸 수 없지만, [[first-sylow-theorem|실로우 제1 정리]]의 (3)에 의해 원소가 $2$개인 부분군이 있고, 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 그것은 정규부분군입니다. 따라서 (3)에 의해 이 군은 순환군이고 $(\mathbb{Z}_6, +)$와 동형입니다.
:::

:::check[원소가 $21$개인 군에 대하여 이 정리는 무엇을 말하는가?]
$21 = 3 \cdot 7$이고 $3 < 7$입니다. $3$의 양의 약수는 $3$ 이하이고 $3 = 2 \cdot 1 + 1$이므로 $3$은 소수이고, $7$이 소수라는 것은 예시에서 계산했습니다. (1)에 의해 원소가 $7$개인 부분군은 하나뿐이고 정규부분군이며, (2)에 의해 이 군은 단순군이 아닙니다. 그런데 $7 - 1 = 6 = 3 \cdot 2$이므로 $3 \mid 7 - 1$이어서 (4)는 쓸 수 없고, 이 정리는 이 군이 순환군인지를 말하지 않습니다. 원소가 $3$개인 부분군 가운데 정규부분군이 있으면 (3)에 의해 순환군입니다.
:::
