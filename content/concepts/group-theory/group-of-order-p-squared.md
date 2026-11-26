---
title: 위수 p²인 군
title_en: Groups of Order p²
aliases: [위수가 p제곱인 군, 원소가 p²개인 군, 위수 p 제곱인 군은 아벨군, groups of order p squared]
kind: theorem
field: group-theory
msc: ["20D15", "20K01"]
level: undergrad
summary: "소수 p에 대하여 원소가 p²개인 군은 아벨군이다. 그런 군은 위수가 p²인 원소가 있으면 순환군으로서 (ℤ_{p²}, +)와 동형이고, 그런 원소가 없으면 e가 아닌 모든 원소의 위수가 p이다."
requires: [set, subset, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, even-and-odd, divisibility, greatest-common-divisor, congruence-modulo-n, equivalence-classes-equal-iff-related, integers-modulo-n, prime-power-divisors, proof-by-contradiction, divisibility-is-transitive, group, subgroup, subgroup-examples, number-groups, lagrange-theorem, normal-subgroup, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, classification-of-cyclic-groups, group-of-units-modulo-n, p-group, center-of-p-group, cyclic-quotient-by-center, symmetric-group, order-of-symmetric-group, cycle-permutation, group-isomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.2절 The Class Equation, Corollary 14.16 과 그 증명 (p.172); 14.4절 Reading Questions, 읽기 질문 3 (p.178); 15.2절 Examples and Applications, Example 15.12 (p.184), Example 15.16 (p.185)"
    checked: original
    note: "(1)의 '아벨군이다'는 출처 Corollary 14.16(p.172, 'Let G be a group of order p² where p is prime. Then G is abelian.', 그 쪽을 그림으로 확인했다)과 같다. 출처의 증명은 Theorem 14.15 로 |Z(G)| = p 또는 p² 라 한 뒤 |Z(G)| = p 를 가정해 Z(G) 와 G/Z(G) 가 위수 p 의 순환군이라 하고, G/Z(G) 의 생성원 aZ(G) 를 잡아 g = a^m x, h = a^n y (x, y ∈ Z(G)) 로 쓴 다음 gh = hg 를 계산해 'G 는 아벨군이고, 따라서 |Z(G)| = p²'로 끝낸다. 이 항목은 그 계산을 '중심에 대한 몫군이 순환군이면 아벨군'(cyclic-quotient-by-center)의 (2)로 대신하고, 아벨군이 아니라고 가정하면 [G : Z(G)] 가 1 또는 소수 p 가 되어 그 (2)와 어긋난다는 귀류로 쓴다. 출처는 위수 p² 인 군의 꼴을 Example 15.12(p.184, 위수 99 인 군의 분류)에서 위수 9 인 실로우 부분군 H 에 대해 'Corollary 14.16 에 의해 H 는 아벨군이고, 따라서 Z₃ × Z₃ 또는 Z₉ 와 동형'이라 적고, 14.4절 읽기 질문 3(p.178)에서 '위수 49 인 군은 무엇인가'를 묻는다. 이 사이트에는 직곱이 없으므로 (2)는 순환군인 경우와 아닌 경우를 원소의 위수로만 나눈다. 9.2절 Example 9.15(p.118)는 'Z₂ × Z₂ 와 Z₄ 는 원소가 넷이지만 동형이 아니다 — Z₂ × Z₂ 의 항등원이 아닌 원소는 위수가 2 이고 Z₄ 는 순환군'이라 적는데, 이것이 p = 2 에서의 (2)의 두 경우이다. Example 15.16(p.185)의 끝은 'Corollary 14.16 에 의해 위수 4, 9, 25, 49 인 군은 아벨군'이라 쓴다. 예시 '원소가 $4$개인 두 군'은 출처 Example 9.15 와 같은 발상이고, U(8) 은 출처 3.2절 Example 3.11(p.35, U(8) 의 곱셈표), 9.1절 Example 9.4(p.115, U(8) = {1, 3, 5, 7}), 9.2절 Example 9.24(p.120), 4.5절 연습문제 1(b)(p.55, 'U(8) 은 순환군이다'를 증명하거나 반증하라), 9.4절 연습문제 3(p.121, 'U(8) ≅ Z₄'를 증명하거나 반증하라)과 같은 대상이며, Z₄ 는 출처 13.1절(p.159)이 2-군의 예로 드는 Z₄ 와 같은 대상이며, 3.3절 Example 3.28(p.39)도 Z₄ 와 Z₂ × Z₂ 가 다른 군임을 부분군으로 보인다. 반례 '원소가 $6$개인 $S_3$'은 출처 9.1절 Example 9.5(p.115, 원소의 개수가 같은 S₃ 와 Z₆ 은 'Z₆ 은 아벨군이고 S₃ 는 아벨군이 아니므로' 동형이 아니다)와 같은 대상과 같은 사실을 쓴다. 확인 질문 '원소가 $p^2$개인 군의 원소 $a$, $b$에 대하여 $(ab)(ab) = (aa)(bb)$인가?'는 출처 3.5절 연습문제 33(p.42, 모든 a, b 에서 (ab)² = a²b² 이면 G 는 아벨군)과 같은 등식을 반대 방향에서 묻는다. 확인 질문 '원소가 $9$개인 군은 아벨군인가? 순환군인가?'는 출처 Example 15.12 의 위수 9 인 H, Example 15.16 끝의 9 와 같은 대상이고, 3.5절 연습문제 34(p.42, Z₃ × Z₃ 의 부분군으로 Z₃ × Z₃ 과 Z₉ 가 다른 군임을 보여라)가 원소가 9 개인 순환군과 순환군이 아닌 군을 다루며, 읽기 질문 3(위수 49)과 같은 갈래의 물음이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(류 방정식 (3)·고정점 (2)·중심 (1) 에 자명한 작용과 n = 0 대입, 뒤 단원 경로 대조, fixed-points (4) 를 받아들임). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 [[group|군]]이며 $e$가 그 항등원이라 하자. 거듭제곱 $p^2$은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이고, 원소의 위수 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]], 순환군은 [[cyclic-subgroup|순환 부분군]], 중심 $Z(G)$는 [[subgroup-examples|부분군의 예와 교집합]]의 (5), $(\mathbb{Z}_{p^2}, +)$는 [[number-groups|수로 이루어진 군]]의 것이다. $G$가 유한군이고 $|G| = p^2$이라 하자.

1. (아벨군) $G$는 아벨군이고 $Z(G) = G$이다. 따라서 $G$의 모든 부분군은 $G$의 [[normal-subgroup|정규부분군]]이다.
2. (순환인 경우와 아닌 경우) $G$가 순환군인 것은 정확히 $\operatorname{ord}(a) = p^2$인 $a \in G$가 있을 때이고, 그때 $G \cong (\mathbb{Z}_{p^2}, +)$이다([[group-isomorphism|군의 동형]]). $G$가 순환군이 아니면 $e$가 아닌 $G$의 모든 원소의 위수는 $p$이다.
:::

:::english
Let $p$ be a prime and $G$ a group with identity $e$. The power $p^2$ is as in the entry on powers of a prime, the order $\operatorname{ord}(a)$ of an element is as in the entry on the order of an element, cyclic groups are as in the entry on cyclic subgroups, the center $Z(G)$ is item (5) of the entry on examples of subgroups, and $(\mathbb{Z}_{p^2}, +)$ is as in the entry on groups of numbers. Let $G$ be a finite group with $|G| = p^2$.

1. (Abelian) $G$ is abelian and $Z(G) = G$. Hence every subgroup of $G$ is a normal subgroup of $G$.
2. (The cyclic case and the other case) $G$ is cyclic if and only if there is $a \in G$ with $\operatorname{ord}(a) = p^2$, and in that case $G \cong (\mathbb{Z}_{p^2}, +)$. If $G$ is not cyclic, then every element of $G$ other than $e$ has order $p$.
:::

## 직관

원소가 $p^2$개인 군은 $p$-군이므로 [[center-of-p-group|p-군의 중심]]의 (1)에 의해 중심의 원소가 $p$개이거나 $p^2$개입니다. $p^2$개이면 중심이 군 전체여서 아벨군입니다. $p$개라면 중심의 지표가 $p^2 / p = p$, 곧 소수가 되는데, [[cyclic-quotient-by-center|중심에 대한 몫군이 순환군이면 아벨군이다]]의 (2)에 의해 아벨군이 아닌 유한군에서는 중심의 지표가 소수일 수 없습니다. 어느 쪽이든 아벨군입니다.

중심은 "모든 원소와 자리를 바꿔도 되는 원소"의 모임이라 할 수 있습니다. 원소가 $p^2$개인 군에서는 그런 원소가 $p$개만 있는 상황이 생길 수 없다는 것이 증명의 요점입니다. 이 논증은 중심의 지표가 $1$이나 소수로 좁혀질 때만 결론을 줍니다. 원소가 $p^3$개인 군이면 중심의 원소가 $p$, $p^2$, $p^3$개 가운데 하나여서 지표가 $p^2$인 경우가 남고, 이 논증으로는 결론이 나오지 않습니다. 원소의 개수가 소수의 거듭제곱이 아니면 중심에 대해 아는 것이 더 적고, 원소가 $6 = 2 \cdot 3$개인 $S_3$은 아벨군이 아닙니다(아래 반례).

(2)는 원소의 위수로 두 경우를 나눕니다. $e$가 아닌 원소의 위수는 $p$이거나 $p^2$이고, 위수가 $p^2$인 원소가 하나라도 있으면 그 원소가 군 전체를 생성합니다.

## 증명

:::idea
[[center-of-p-group|p-군의 중심]]의 (1)로 $|Z(G)|$는 $p$ 또는 $p^2$이고, 지표 $[G : Z(G)]$는 $p$ 또는 $1$이다. 아벨군이 아니라면 [[cyclic-quotient-by-center|중심에 대한 몫군이 순환군이면 아벨군이다]]의 (2)에 의해 이 지표는 $1$도 소수도 아니어야 하므로 어긋난다.
:::

:::hint
[[p-group|p-군]]의 (4)는 $p$-군의 부분군의 지표가 $p^{n-k}$라는 것을 줍니다. 여기서 $n = 2$입니다.
:::

:::hint
(2)에서 $e$가 아닌 원소의 위수는 [[p-group|p-군]]의 (5)에 의해 $p^1$ 또는 $p^2$입니다.
:::

:::proof
아래에서 "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술을 가리킨다. 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5), (L1), (L2)를 인용한다. $|G| = p^2$이므로 [[p-group|p-군]]의 정의에 의해 $G$는 $n = 2$인 $p$-군이다.

먼저 다음 (가)를 보인다: *정수 $k$가 $1 \le k \le 2$이면 $k = 1$이거나 $k = 2$이다.* $k \ne 1$이면 $1 \le k$에서 $1 < k$이고 (Z1)에 의해 $2 \le k$이므로 (L2)에 의해 $k = 2$이다.

**(1)** $n = 2 \ge 1$이므로 [[center-of-p-group|p-군의 중심]]의 (1)에 의해 $1 \le k \le 2$이고 $|Z(G)| = p^k$인 정수 $k$가 있다. [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $Z(G)$는 $G$의 부분군이고, [[p-group|p-군]]의 (4)를 부분군 $Z(G)$에 쓰면 $[G : Z(G)] = p^{2-k}$이다(그 진술의 $k$는 $|Z(G)| = p^k$인 수이고, PPD의 (2)에 의해 이 $k$와 같다).

$G$가 아벨군이 아니라고 가정하자([[proof-by-contradiction|귀류법]]). [[cyclic-quotient-by-center|중심에 대한 몫군이 순환군이면 아벨군이다]]의 (2)에 의해 $[G : Z(G)]$는 $1$이 아니고 소수도 아니다. (가)에 의해 $k = 1$이거나 $k = 2$이다. $k = 2$이면 $[G : Z(G)] = p^0 = 1$이어서 어긋나고, $k = 1$이면 PPD의 (1)의 (i)에 의해 $[G : Z(G)] = p^1 = p$는 소수여서 어긋난다. 따라서 $G$는 아벨군이다.

부분군의 예와 교집합의 (5)에 의해 $Z(G) = G$이고, [[normal-subgroup|정규부분군]]의 (3)에 의해 $G$의 모든 부분군은 $G$의 정규부분군이다.

**(2)** [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 유한군 $G$가 순환군인 것은 정확히 $\operatorname{ord}(a) = |G| = p^2$인 $a \in G$가 있을 때이다. 그때 [[classification-of-cyclic-groups|순환군의 분류]]의 (2)에 의해 $G \cong (\mathbb{Z}_{p^2}, +)$이다.

$G$가 순환군이 아니라 하고 $a \in G$, $a \ne e$라 하자. [[p-group|p-군]]의 (5)에 의해 $\operatorname{ord}(a) = p^j$이고 $1 \le j \le 2$인 정수 $j$가 있다. (가)에 의해 $j = 1$이거나 $j = 2$인데, $j = 2$이면 $\operatorname{ord}(a) = p^2$이 되어 위 문단에 의해 $G$가 순환군이므로 어긋난다. 따라서 $j = 1$이고 PPD의 (1)의 (i)에 의해 $\operatorname{ord}(a) = p^1 = p$이다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $4$개인 두 군]
$p = 2$이면 $p^2 = 4$입니다. [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_4, +)$는 원소가 $4$개인 군이고, [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 4$이므로 (2)에 의해 순환군입니다.

[[group-of-units-modulo-n|법 n의 단원군]] $U(8)$도 원소가 $4$개입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_8$의 원소는 서로 다른 $[0], [1], \dots, [7]$입니다. $a$가 $0 \le a \le 7$인 짝수이면 $2$는 $a$와 $8$의 공약수이므로 [[greatest-common-divisor|최대공약수]]의 정의에 의해 $\gcd(a, 8) \ge 2$입니다(단, $a = 0$이어도 $8 \ne 0$이므로 최대공약수가 정해집니다). $a$가 홀수이면 $\gcd(a, 8)$은 $8 = 2^3$의 양의 약수이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $2^j$ 꼴이고, $j \ge 1$이면 그 (2)에 의해 $2 \mid 2^j \mid a$가 되어 $a$가 짝수가 되므로 $j = 0$, 곧 $\gcd(a, 8) = 1$입니다. 단원군의 (1)에 의해 $U(8) = \{[1], [3], [5], [7]\}$이고 원소가 $4$개입니다.

[[cyclic-subgroup|순환 부분군]]의 (7)에 의해 $U(8)$은 순환군이 아니므로, (2)에 의해 $[1]$이 아닌 세 원소의 위수는 모두 $2$입니다. 실제로 법 $n$의 정수의 (2)의 곱셈으로 $[3][3] = [9]$, $[5][5] = [25]$, $[7][7] = [49]$이고, $9 - 1 = 8 \cdot 1$, $25 - 1 = 8 \cdot 3$, $49 - 1 = 8 \cdot 6$이므로 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]에 의해 셋 모두 $[1]$입니다. 두 군은 모두 (1)대로 아벨군입니다.
:::

:::counterexample[원소가 $6$개인 $S_3$]
원소의 개수가 두 소수의 곱이어도 (1)은 성립하지 않을 수 있습니다. $X = \{1, 2, 3\}$이면 [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_X| = 6 = 2 \cdot 3$이고, [[cyclic-subgroup|순환 부분군]]의 (7)에 의해 $S_X$는 아벨군이 아닙니다. $6$은 어떤 소수의 제곱도 아닙니다. $6 = p^2$이라 하면 $2$와 $3$이 모두 $p^2$의 양의 약수이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)과 (6)에 의해 $2 = p = 3$이 되어 어긋납니다. 증명에서는 [[center-of-p-group|p-군의 중심]]의 (1)로 중심의 지표가 $1$ 또는 $p$가 된다는 단계에서 $|G| = p^2$을 썼습니다.
:::

## 확인 질문

:::check[원소가 $9$개인 군은 아벨군인가? 순환군인가?]
$3$은 소수입니다([[prime-number|소수]]의 진술에 의해 $3$의 양의 약수는 $3$ 이하이고, $3 = 2 \cdot 1 + 1$은 홀수여서 $2 \nmid 3$입니다, [[even-and-odd|짝수와 홀수]]). $9 = 3^2$이므로 (1)에 의해 아벨군입니다. 순환군인지는 (1)만으로 정해지지 않고, (2)에 의해 위수가 $9$인 원소가 있는지에 달려 있습니다. 예를 들어 [[number-groups|수로 이루어진 군]]의 (4)의 $(\mathbb{Z}_9, +)$에서는 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 9$이므로 순환군입니다. 위수가 $9$인 원소가 없는 군이면 (2)에 의해 $e$가 아닌 모든 원소의 위수가 $3$입니다.
:::

:::check[원소가 $p^2$개인 군의 원소 $a$, $b$에 대하여 $(ab)(ab) = (aa)(bb)$인가?]
그렇습니다. (1)에 의해 $G$는 아벨군이므로 $ba = ab$이고, 따라서 $(ab)(ab) = a(ba)b = a(ab)b = (aa)(bb)$입니다. 여기서 네 원소의 곱의 괄호를 옮기는 데는 결합법칙([[group|군]]의 조건 1)을 썼습니다. 원소가 $p^2$개가 아닌 군에서는 그렇지 않을 수 있습니다. $X = \{1, 2, 3\}$, $S_3 = S_X$에서 $a = (1\ 2)$, $b = (1\ 3)$이라 하면([[cycle-permutation|순환치환]]의 표기, 곱은 오른쪽을 먼저 적용합니다) 순환치환의 (5)에 의해 $aa = bb = i_X$이므로 $(aa)(bb) = i_X$입니다. 한편 $ab$는 $1, 2, 3$을 각각 $3, 1, 2$로 보내므로 $(ab)(ab)$는 $1$을 $ab(3) = 2$로 보내고, $(ab)(ab) \ne i_X$입니다.
:::
