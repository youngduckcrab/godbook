---
title: p-군의 작용의 고정점
title_en: Fixed Points of a p-Group Action
aliases: [p-군의 고정점 정리, 고정점의 개수와 합동, fixed point congruence, fixed points of p-group actions]
kind: theorem
field: group-theory
msc: ["20D15", "20B05"]
level: undergrad
summary: "소수 p에 대한 p-군 G가 유한집합 X에 작용하면 모든 궤도의 원소 개수는 p의 거듭제곱이고, 원소가 둘 이상인 궤도의 원소 개수는 p로 나누어떨어지므로 |X| ≡ |X^G| (mod p)이다. 따라서 p가 |X|를 나누지 않으면 고정점이 있고, 고정점이 하나뿐이면 |X| ≡ 1 (mod p)이다."
requires: [set, set-operations, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, even-and-odd, divisibility, congruence-modulo-n, congruence-is-an-equivalence-relation, prime-power-divisors, group, group-basic-properties, group-action, group-action-examples, orbit-of-an-action, stabilizer-and-fixed-points, orbit-stabilizer-theorem, class-equation, p-group, symmetric-group, order-of-symmetric-group, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, support-of-a-permutation, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.5절 Exercises, 연습문제 24 (p.180); 15.1절 The Sylow Theorems, Theorem 15.7 과 Theorem 15.8 의 증명 (p.183)"
    checked: original
    note: "(1)은 출처 14.5절 연습문제 24(p.180, 그 쪽을 그림으로 확인했다)의 진술 '위수가 pⁿ (p 는 소수) 인 군 G 와 유한 G-집합 X 에서 X_G = {x ∈ X : 모든 g ∈ G 에 대해 gx = x} 이면 |X| ≡ |X_G| (mod p) 임을 증명하라'와 같고, 출처는 연습문제로만 둔다. 출처의 X_G 는 이 사이트의 X^G 이다. 출처의 본문은 이 연습문제를 번호로 인용하지 않고 쓰는 곳마다 따로 센다(검색어 'Exercise 14' 1건(14.5절 연습문제 3 안), '14.5.24' 0건, 'fixed point' 10건으로 책 전체를 찾았다). Theorem 15.7 의 증명(p.183)은 실로우 p-부분군 Q 의 켤레 작용으로 S 를 나눈 뒤 '각 동치류의 원소 개수는 p 의 거듭제곱'이고 'p 가 k 를 나누지 않으므로 어느 동치류는 실로우 p-부분군 하나만 가진다'고 쓰는데, 이것이 (3)과 (2)의 첫 문장의 쓰임새이다. Theorem 15.8 의 증명(p.183)은 'P 의 켤레류 {P} 를 빼면 각 P-켤레류가 |S| 에 p 의 양의 거듭제곱을 보태므로 |S| ≡ 1 (mod p)'라고 쓰는데, 이것이 (2)의 둘째 문장의 쓰임새이다. 이 항목의 증명은 궤도–안정자 정리와 류 방정식(class-equation)의 (3)으로 한다. 예시 '$\\langle (1\\ 2)(3\\ 4) \\rangle$의 자연스러운 작용'은 출처 14.3절 Example 14.20(p.173–174, X = {1, 2, 3, 4, 5} 위의 G = {(1), (1 3), (1 3)(2 5), (2 5)} 의 궤도 {1, 3}, {2, 5}, {4} 와 고정점 집합)과 같은 발상(원소가 2 의 거듭제곱인 치환군이 {1, …, 5} 에 작용해 원소가 둘인 궤도 둘과 고정점 하나를 갖는다)이고, 14.1절 Example 14.7(p.169, {1, …, 5} 위의 치환군의 궤도), Example 14.9(p.170, {1, …, 6} 위의 원소 넷인 치환군의 고정점 집합)과 14.5절 연습문제 2(b)(p.178, X = {1, …, 6} 위의 치환군에서 모든 X_g 와 G_x 를 구하라)와 같은 갈래이다. 예시 '왼쪽 곱 작용에는 고정점이 없을 수 있다'의 작용은 출처 14.1절 Example 14.3(p.169, G 가 자기 자신에 왼쪽 곱으로 작용한다)과 같은 작용이다. 반례 '$p = 2$와 $S_3$의 자연스러운 작용'은 출처 14.5절 연습문제 2(a)(p.178, X = {1, 2, 3}, G = S₃ 의 X_g 와 G_x)와 같은 대상이다. 확인 질문 '원소가 $p$개인 집합에 $p$-군이 작용하면 고정점은 몇 개인가?'와 '원소가 $9$개인 군이 원소가 $10$개인 집합에 작용하면 고정점은 몇 개일 수 있는가?'는 연습문제 24 를 수에 쓴 것이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(류 방정식 (3)·고정점 (2)·중심 (1) 에 자명한 작용과 n = 0 대입, 뒤 단원 경로 대조, fixed-points (4) 를 받아들임). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고, $p$-군과 $p$-부분군은 [[p-group|p-군]]의 것이라 하자. $0$ 이상인 정수 $j$에 대한 $p^j$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]], 합동은 [[congruence-modulo-n|합동]]의 것이다. 작용과 그 값 $g \cdot x$는 [[group-action|군의 작용]], 궤도 $G \cdot x$와 "궤도"는 [[orbit-of-an-action|궤도]], 고정점 전체의 집합 $X^G$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이고, 원소가 둘 이상인 궤도는 [[class-equation|류 방정식]]의 (2)의 것이다.

$G$가 $p$-군이고 $|G| = p^n$이며, $G$가 [[finite-set|유한집합]] $X$에 작용한다고 하자.

1. (고정점의 개수) $|X| \equiv |X^G| \pmod p$이다.
2. (고정점이 있을 조건) $p \nmid |X|$이면 $X^G \ne \emptyset$이다. 곧 모든 $g \in G$에서 $g \cdot x = x$인 $x \in X$가 있다. 또 $|X^G| = 1$이면 $|X| \equiv 1 \pmod p$이다.
3. (궤도의 크기) 모든 궤도 $O$는 유한집합이고, $|O| = p^j$인 정수 $j$가 $0 \le j \le n$에 있다. $O$가 원소가 둘 이상인 궤도이면 이 $j$는 $j \ge 1$이고 $p \mid |O|$이다.
4. ($p$-부분군으로 제한) $K$가 군이고 $K$가 유한집합 $X$에 작용하며 $H$가 $K$의 $p$-부분군이라 하자. [[group-action|군의 작용]]의 (4)로 $H$가 $X$에 작용할 때, 그 작용의 고정점 전체의 집합 $X^H = \{x \in X : \text{모든 } h \in H \text{에서 } h \cdot x = x\}$에 대하여 $|X| \equiv |X^H| \pmod p$이다. 특히 $p \nmid |X|$이면 $X^H \ne \emptyset$이다.
:::

:::english
Let $p$ be a prime, and let $p$-groups and $p$-subgroups be as in the entry on $p$-groups. The power $p^j$ for an integer $j \ge 0$ and divisibility are as in the entry on powers of a prime, and congruence is as in the entry on congruence. Actions and their values $g \cdot x$, orbits $G \cdot x$, and the set $X^G$ of all fixed points are as in the entries on group actions, orbits, and stabilizers and fixed points, and orbits with at least two elements are as in item (2) of the entry on the class equation.

Let $G$ be a $p$-group with $|G| = p^n$, acting on a finite set $X$.

1. (Number of fixed points) $|X| \equiv |X^G| \pmod p$.
2. (When a fixed point exists) If $p \nmid |X|$, then $X^G \ne \emptyset$; that is, there is $x \in X$ with $g \cdot x = x$ for all $g \in G$. Moreover, if $|X^G| = 1$, then $|X| \equiv 1 \pmod p$.
3. (Sizes of orbits) Every orbit $O$ is a finite set, and there is an integer $j$ with $0 \le j \le n$ and $|O| = p^j$. If $O$ is an orbit with at least two elements, then this $j$ satisfies $j \ge 1$, and $p \mid |O|$.
4. (Restricting to a $p$-subgroup) Let $K$ be a group acting on a finite set $X$, and let $H$ be a $p$-subgroup of $K$. When $H$ acts on $X$ by item (4) of the entry on group actions, the set $X^H = \{x \in X : h \cdot x = x \text{ for all } h \in H\}$ of all fixed points of that action satisfies $|X| \equiv |X^H| \pmod p$. In particular, if $p \nmid |X|$, then $X^H \ne \emptyset$.
:::

## 직관

$p$-군이 작용하면 궤도–안정자 정리에 의해 궤도의 크기는 $|G| = p^n$의 약수, 곧 $1, p, p^2, \dots$ 가운데 하나입니다. 크기가 $1$인 궤도는 고정점 하나뿐이고, 나머지 궤도는 모두 크기가 $p$의 배수입니다((3)). 그래서 $|X|$를 $p$로 나눈 나머지는 고정점의 개수 $|X^G|$를 $p$로 나눈 나머지와 같습니다((1)).

손님들이 탁자에 앉는데 탁자마다 앉는 사람 수가 $1, p, p^2, \dots$ 가운데 하나라고 해 봅시다. 혼자 앉은 손님의 수를 $p$로 나눈 나머지는 전체 손님 수를 $p$로 나눈 나머지와 같습니다. 탁자 하나가 궤도 하나, 혼자 앉은 손님이 고정점, "탁자마다 사람 수가 $p$의 거듭제곱"이 궤도–안정자 정리와 $|G| = p^n$에서 온 (3)입니다. 군의 원소의 개수가 $p$의 거듭제곱이 아니면 이 비유는 맞지 않을 수 있습니다(아래 반례).

이 정리는 고정점을 하나도 고르지 않고 그 존재를 알려 줍니다. $|X|$가 $p$의 배수가 아니면 고정점의 개수도 $p$의 배수가 아니므로 $0$이 아니고((2)), 고정점이 하나뿐이라는 것을 따로 알면 $|X|$를 $p$로 나눈 나머지가 $1$입니다. $n = 0$, 곧 $G$가 원소 하나인 군이면 모든 점이 고정점이어서 (1)은 $|X| \equiv |X|$가 됩니다.

## 증명

:::idea
궤도–안정자 정리로 궤도의 크기가 $p^n$의 약수, 곧 $p^j$ 꼴이다. 원소가 둘 이상이면 $j \ge 1$이라 $p$로 나누어지므로, [[class-equation|류 방정식]]의 (3)에 $d = p$를 넣는다.
:::

:::hint
$|O|$가 $p^n$의 양의 약수이면 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)으로 $p^j$ 꼴입니다. $p^0 = 1$입니다.
:::

:::hint
(4)에서는 군 $H$ 자신이 $p$-군입니다. (1)을 어느 군의 어느 작용에 쓰면 되는지 생각합니다.
:::

:::proof
아래에서 "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술을 가리킨다. 정수의 계산은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수끼리의 차가 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 정렬 원리의 진술의 (Z5), (L1)을 인용한다. [[p-group|p-군]]의 정의에 의해 $G$는 유한군이다.

**(3)** $O$가 궤도이면 궤도의 정의에 의해 $O = G \cdot x$인 $x \in X$가 있다. [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (3)에 의해 $O$는 유한집합이고 $|O|$는 $|G| = p^n$을 나눈다. [[orbit-of-an-action|궤도]]의 (1)에 의해 $x \in O$이므로 $\{x\} \subseteq O$이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)과 [[group|군]]의 (5)에 의해 $1 = |\{x\}| \le |O|$이다. 따라서 $|O|$는 $p^n$의 양의 약수이고, PPD의 (3)에 의해 $|O| = p^j$인 정수 $j$가 $0 \le j \le n$에 있다.

$O$가 원소가 둘 이상인 궤도, 곧 $|O| \ge 2$라 하자. $j = 0$이면 PPD의 $0$제곱에 의해 $|O| = p^0 = 1$이 되어 $|O| \ge 2$와 함께 (L1)에 어긋나므로 $j \ne 0$이다. $0 \le j$이므로 (L1)에 의해 $j < 0$이 아니고, (Z5)에 의해 $j > 0$이며 (Z1)에 의해 $j \ge 1$이다. PPD의 (2)에 의해 $p \mid p^j = |O|$이다.

**(1)** $p$는 소수이므로 자연수이다. (3)에 의해 원소가 둘 이상인 모든 궤도 $O$에서 $p \mid |O|$이므로, [[class-equation|류 방정식]]의 (3)을 $d = p$로 쓰면 $|X| \equiv |X^G| \pmod p$이다.

**(2)** $p \nmid |X|$라 하자. $X^G = \emptyset$이라 하면 [[finite-set|유한집합]]의 (F2)에 의해 $|X^G| = 0$이고, (1)과 [[congruence-modulo-n|합동]]의 정의에 의해 $p \mid |X| - 0 = |X|$가 되어 가정에 어긋난다. 따라서 $X^G \ne \emptyset$이고, $X^G$의 원소 $x$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 정의에 의해 모든 $g \in G$에서 $g \cdot x = x$를 만족한다.

$|X^G| = 1$이면 (1)은 $|X| \equiv 1 \pmod p$이다.

**(4)** [[group-action|군의 작용]]의 (4)에 의해 작용을 $H \times X$로 제한한 함수는 군 $H$의 $X$ 위의 작용이고, [[stabilizer-and-fixed-points|안정자와 고정점]]의 (6)의 (i)에 의해 그 작용의 고정점 전체의 집합은 $X^H$이다. $H$는 $K$의 $p$-부분군이므로 $p$-부분군의 정의에 의해 군 $H$는 $p$-군이다. 따라서 $p$-군 $H$와 그 $X$ 위의 작용에 (1)과 (2)를 쓰면 $|X| \equiv |X^H| \pmod p$이고, $p \nmid |X|$이면 $X^H \ne \emptyset$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\langle (1\ 2)(3\ 4) \rangle$의 자연스러운 작용]
$X = \{1, 2, 3, 4, 5\}$이고 $\rho = (1\ 2)(3\ 4) \in S_X$라 합시다([[cycle-permutation|순환치환]]의 표기, 곱은 오른쪽을 먼저 적용합니다). $(1\ 2)$와 $(3\ 4)$는 순환치환의 (6)에 의해 서로소이므로 [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 교환되고 $\operatorname{supp} \rho = \{1, 2\} \cup \{3, 4\}$입니다(순환치환의 (2)). 순환치환의 (5)에 의해 각 호환의 제곱은 $i_X$이므로 $\rho\rho = (1\ 2)(1\ 2)(3\ 4)(3\ 4) = i_X$이고, $\rho(1) = 2$이므로 $\rho \ne i_X$입니다. 따라서 [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}(\rho) = 2$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $G = \langle \rho \rangle$는 원소가 $2 = 2^1$개인 $2$-군입니다.

$G$는 [[group-action-examples|군의 작용의 예]]의 (2)로 $X$에 $\tau \cdot x = \tau(x)$로 작용합니다. $\langle \rho \rangle$의 원소는 $\rho^0 = i_X$와 $\rho^1 = \rho$뿐이므로(순환 부분군의 크기의 (1)), 고정점 전체 $X^G$는 $i_X$와 $\rho$가 모두 고정하는 점, 곧 $X - \operatorname{supp} \rho = \{5\}$입니다([[stabilizer-and-fixed-points|안정자와 고정점]]의 (4)의 (i)과 (5)의 (ii)). (1)은 $5 \equiv 1 \pmod 2$이고, 실제로 $5 - 1 = 4 = 2 \cdot 2$입니다. 나머지 네 점은 고정점이 아니므로 [[class-equation|류 방정식]]의 (2)의 (i)에 의해 그 궤도는 원소가 둘 이상이고, (3)에 의해 원소가 $2^j$개($1 \le j \le 1$), 곧 $2$개입니다.
:::

:::example[왼쪽 곱 작용에는 고정점이 없을 수 있다]
$G$가 $p$-군이고 $G \ne \{e\}$이며, $X = G$에 [[group-action-examples|군의 작용의 예]]의 (3)의 왼쪽 곱 작용 $g \cdot x = gx$로 작용한다고 합시다. 이 작용에는 고정점이 없습니다. $x \in X^G$라 하면 $e$가 아닌 $g \in G$에서 $gx = x = ex$이고, [[group-basic-properties|군의 기본 성질]]의 (7)의 소거법칙에 의해 $g = e$가 되어 어긋납니다. 이것은 (1)과 맞습니다. [[p-group|p-군]]의 (3)에 의해 $p \mid |G|$이므로 $|X| = |G| \equiv 0 = |X^G| \pmod p$입니다. (2)의 가정 $p \nmid |X|$가 성립하지 않을 때는 고정점이 없을 수도 있다는 예입니다.
:::

:::counterexample[$p = 2$와 $S_3$의 자연스러운 작용]
$X = \{1, 2, 3\}$이고 $S_3 = S_X$가 $X$에 자연스럽게 작용한다고 합시다. $x \in X$이면 $x$와 다른 $y \in X$가 있고 호환 $(x\ y)$는 $x$를 $y$로 보내므로 $x \notin X^{S_3}$입니다. 곧 $X^{S_3} = \emptyset$이고, $|X| = 3 \not\equiv 0 \pmod 2$입니다($3 - 0 = 2 \cdot 1 + 1$은 홀수이고 짝수이면서 홀수인 정수는 없습니다, [[even-and-odd|짝수와 홀수]]). 곧 (1)의 합동이 $p = 2$에서 성립하지 않습니다. 이것은 정리와 어긋나지 않습니다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6 = 2 \cdot 3$이므로 $3 \mid 6$인데, [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $2^n$의 양의 약수는 $2^j$ 꼴이고, $2^0 = 1 \ne 3$이며 $j \ge 1$이면 (2)에 의해 $2^j$는 짝수여서 홀수 $3$이 아닙니다. 곧 $6$은 $2$의 거듭제곱이 아니고 $S_3$은 $2$-군이 아닙니다. 증명에서 깨지는 곳은 (3)입니다. [[orbit-of-an-action|궤도]]의 (6)의 (나)에 의해 이 작용의 궤도는 $X$ 하나이고, 원소가 $3$개여서 $2$로 나누어지지 않습니다. 같은 작용에서 $p = 3$이면 $3 \equiv 0 \pmod 3$으로 합동이 성립하는데, $S_3$은 $3$-군도 아닙니다. 가정이 깨져도 결론이 우연히 성립할 수는 있습니다.
:::

## 확인 질문

:::check[원소가 $p$개인 집합에 $p$-군이 작용하면 고정점은 몇 개인가?]
$0$개이거나 $p$개입니다. (1)에 의해 $p \mid |X| - |X^G| = p - |X^G|$이고, $X^G \subseteq X$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $0 \le |X^G| \le p$입니다. 곧 $p - |X^G| = pc$인 정수 $c$가 있고 $0 \le pc \le p$입니다. $p > 0$이므로 $c \le -1$이면 $pc \le -p < 0$이고 $c \ge 2$이면 $pc \ge 2p > p$여서([[prime-number|소수]]의 (Z3)) $c$는 $0$ 또는 $1$이며, $|X^G|$는 $p$ 또는 $0$입니다. $|X^G| = p$이면 다시 유한집합의 부분집합의 (2)에 의해 $X^G = X$, 곧 모든 점이 고정점입니다. $|X^G| = 0$이면 고정점이 없습니다.
:::

:::check[원소가 $9$개인 군이 원소가 $10$개인 집합에 작용하면 고정점은 몇 개일 수 있는가?]
$9 = 3^2$이므로 군은 $3$-군이고, (1)과 $10 - 1 = 3 \cdot 3$, [[congruence-is-an-equivalence-relation|합동은 동치관계]]의 대칭성과 추이성에 의해 $|X^G| \equiv 10 \equiv 1 \pmod 3$입니다. 곧 $|X^G| - 1 = 3c$인 정수 $c$가 있고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $0 \le |X^G| \le 10$이므로 $-1 \le 3c \le 9$, 곧 $c$는 $0$, $1$, $2$, $3$ 가운데 하나입니다. 따라서 고정점의 개수는 $1$, $4$, $7$, $10$ 가운데 하나이고, 특히 고정점이 적어도 하나 있습니다. (2)의 첫 문장으로도 $3 \nmid 10$이므로 고정점이 있다는 것이 나옵니다.
:::
