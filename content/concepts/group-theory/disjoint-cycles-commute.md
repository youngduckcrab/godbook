---
title: 서로소인 순환치환은 교환된다
title_en: Disjoint Cycles Commute
aliases: [서로소인 순환치환, 서로소인 순환치환의 곱, disjoint cycles commute, product of disjoint cycles]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 서로소인 두 순환치환 σ, τ 는 교환되고, 곱 στ 의 값은 각 점을 움직이는 쪽의 값이다. 곱의 받침은 두 받침의 합집합이고, 곱은 순환치환이 아니다.
requires: [set, set-operations, function, finite-set, group, symmetric-group, power-in-a-group, laws-of-exponents, order-of-an-element, finite-product-in-a-group, support-of-a-permutation, orbits-of-a-permutation, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "5.1절 Cycle Notation, 서로소의 정의와 Example 5.7 (p.61), Proposition 5.8 과 그 증명 (p.62); Lemma 5.14 의 증명 (p.63); 5.4절 Exercises, 연습문제 13 (p.72), 연습문제 32 (p.73); 부록의 힌트 5.4.17, 5.4.25 (p.322); 14.1절 Example 14.7 (p.169)"
    checked: original
    note: "(1)은 출처 Proposition 5.8(p.62) 'σ 와 τ 가 S_X 의 서로소인 두 순환치환이면 στ = τσ' 이다. 출처의 증명은 x 가 어느 순환치환의 원소도 아닌 경우와 x = a_i 인 경우를 계산하고 x = b_j 인 경우는 'Similarly' 로 넘기며, σ(a_i) = a_{(i mod k)+1} 이 τ 에 고정된다는 것을 쓴다. 이 항목은 받침에 관한 일반판(support-of-a-permutation 의 (4))을 순환치환에 쓰는 것으로 증명한다. (2)의 곱의 값과 받침도 그 (4)에서 온다. (3)은 출처 Example 5.7(p.61)의 끝 문장 '서로소인 순환치환의 곱은 더 간단히 할 수 없다(cannot be simplified)' 를 '순환치환이 아니다' 라는 명제로 바꾼 것이고, 출처는 이것을 증명하지 않는다. 예시 '$(1\\ 2\\ 3)$과 $(4\\ 5)$의 곱' 은 출처 Example 5.7 이 (1 3 5)(2 7) 을 계산하는 것과 같은 발상이고, 그 곱 (1 2 3)(4 5) 는 출처 연습문제 5.32 (b)(p.73)의 β 와 같은 치환이다. 출처 Lemma 5.14 의 증명(p.63)의 등식 (c, d)(a, b) = (a, b)(c, d) 는 (1)을 서로소인 두 호환에 쓴 것과 같다. 반례 '서로소가 아닌 두 호환의 곱' 은 출처 Example 5.7 의 (1 3 5)(3 4 7) = (1 3 4 7 5) 처럼 서로소가 아닌 순환치환의 곱이 다시 순환치환이 될 수 있다는 것과 같은 발상이고, 부록의 힌트 5.4.25(p.322)가 (a, b)(b, c) 꼴의 곱을 따지게 하는 것, 힌트 5.4.17(p.322)이 (1 2 3)(1 2) 와 (1 2)(1 2 3) 을 비교하게 하는 것과도 같은 발상이다. 확인 질문 '$X = \\{1, 2, 3, 4, 5\\}$에서 $(1\\ 2\\ 3)(4\\ 5)$의 위수는 무엇인가?' 는 출처 연습문제 5.13(p.72, 서로소인 순환치환의 곱의 위수는 길이들의 최소공배수)의 한 예와 같은 발상이고, 출처 Example 14.7(p.169)의 원소 여섯 개인 치환군은 이 치환 (1 2 3)(4 5) 의 거듭제곱 전체와 같은 집합이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(호환의 곱 (1) 을 오른쪽부터 계산해 대조, 켤레 (2)(3) 의 유한 가정 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이라 하자. 순환치환 $(a_1\ \cdots\ a_k)$와 그 길이는 [[cycle-permutation|순환치환]], 받침 $\operatorname{supp}$과 두 치환이 서로소라는 것은 [[support-of-a-permutation|치환의 받침]]의 것이다. $k, l \ge 2$가 정수이고 $a_1, \dots, a_k$와 $b_1, \dots, b_l$이 각각 $X$의 서로 다른 원소이며, 모든 $i \in \{1, \dots, k\}$, $j \in \{1, \dots, l\}$에서 $a_i \ne b_j$라 하자. $\sigma = (a_1\ \cdots\ a_k)$, $\tau = (b_1\ \cdots\ b_l)$, $A = \{a_1, \dots, a_k\}$, $B = \{b_1, \dots, b_l\}$로 둔다.

1. (교환) $\sigma$와 $\tau$는 서로소이고 $\sigma\tau = \tau\sigma$이다.
2. (곱의 값과 받침) 모든 $x \in X$에서
   $$
   (\sigma\tau)(x) =
   \begin{cases}
   \sigma(x) & x \in A, \\
   \tau(x) & x \in B, \\
   x & (\text{그 밖})
   \end{cases}
   $$
   이고, $\operatorname{supp}(\sigma\tau) = A \cup B$이다.
3. (곱은 순환치환이 아니다) $\sigma\tau$는 순환치환이 아니다. $A$와 $B$는 $\sigma\tau$의 서로 다른 두 궤도이다.
:::

:::english
Let $X$ be a set and $S_X$ the symmetric group. Cycles $(a_1\ \cdots\ a_k)$ and their lengths are as in the entry on cycles, and the support $\operatorname{supp}$ and disjointness of permutations are as in the entry on the support of a permutation. Let $k, l \ge 2$ be integers, let $a_1, \dots, a_k$ and $b_1, \dots, b_l$ each be distinct elements of $X$, and suppose $a_i \ne b_j$ for all $i \in \{1, \dots, k\}$ and $j \in \{1, \dots, l\}$. Put $\sigma = (a_1\ \cdots\ a_k)$, $\tau = (b_1\ \cdots\ b_l)$, $A = \{a_1, \dots, a_k\}$ and $B = \{b_1, \dots, b_l\}$.

1. (Commuting) $\sigma$ and $\tau$ are disjoint and $\sigma\tau = \tau\sigma$.
2. (Values and support of the product) For every $x \in X$
   $$
   (\sigma\tau)(x) =
   \begin{cases}
   \sigma(x) & x \in A, \\
   \tau(x) & x \in B, \\
   x & (\text{otherwise}),
   \end{cases}
   $$
   and $\operatorname{supp}(\sigma\tau) = A \cup B$.
3. (The product is not a cycle) $\sigma\tau$ is not a cycle; $A$ and $B$ are two distinct orbits of $\sigma\tau$.
:::

## 직관

두 원탁에 따로 앉은 사람들이 각자 자기 원탁에서 한 칸씩 옮기는 상황입니다. 첫째 원탁이 먼저 옮기든 둘째 원탁이 먼저 옮기든, 두 원탁에 동시에 앉은 사람이 없으므로 결과는 같습니다. 비유가 정의와 맞는 곳은 "동시에 앉은 사람이 없다"가 모든 $i$, $j$에서 $a_i \ne b_j$라는 가정이라는 점입니다.

(3)은 서로소인 두 순환치환을 곱해도 한 원탁으로 합쳐지지 않는다는 것입니다. 곱의 궤도를 보면 두 원탁이 그대로 남아 있어서, 서로 다른 두 원소를 갖는 궤도가 둘이 됩니다. 서로소가 아닌 두 순환치환의 곱은 다시 순환치환일 수도 있습니다(아래 반례).

## 증명

:::idea
순환치환의 받침은 그 원소들의 집합이므로 가정은 두 받침이 겹치지 않는다는 것이다. (1)과 (2)는 받침이 겹치지 않는 두 치환에 관한 일반판을 쓰고, (3)은 곱의 거듭제곱이 각 받침 위에서 그 순환치환의 거듭제곱과 같다는 것으로 궤도를 구한다.
:::

:::hint
[[cycle-permutation|순환치환]]의 (2)와 (6)으로 $\operatorname{supp} \sigma = A$, $\operatorname{supp} \tau = B$이고 둘이 서로소이다.
:::

:::proof
**(1), (2)** [[cycle-permutation|순환치환]]의 (2)에 의해 $\operatorname{supp} \sigma = A$이고 $\operatorname{supp} \tau = B$이며, 같은 항목의 (6)에 의해 $\sigma$와 $\tau$는 서로소이다. [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 $\sigma\tau = \tau\sigma$이고, 같은 (4)의 값의 식과 받침의 등식이 (2)이다.

**(3)** $\rho = \sigma\tau$라 하자. [[finite-product-in-a-group|군의 유한 곱]]의 (1)에 의해 $\rho$는 길이 $2$인 열 $\sigma, \tau$의 곱이고, (1)에 의해 이 열의 두 항은 서로소이다. 받침의 (5)의 (iv)에 의해 $x \in A$이면 모든 정수 $m$에서 $\rho^m(x) = \sigma^m(x)$이므로 [[orbits-of-a-permutation|치환의 궤도]]의 정의에 의해 $O_\rho(a_1) = O_\sigma(a_1)$이고, 이것은 순환치환의 (4)에 의해 $A$이다. 같은 방법으로 $O_\rho(b_1) = O_\tau(b_1) = B$이다. $A$는 서로 다른 두 원소 $a_1$, $a_2$를, $B$는 $b_1$, $b_2$를 갖고, $a_1 \in A$인데 $a_1 \notin B$이므로 $A \ne B$이다. 곧 $\rho$에는 서로 다른 두 원소를 갖는 궤도가 둘 이상 있으므로, 순환치환의 (8)에 의해 $\rho$는 순환치환이 아니다.
:::

## 예시와 반례

:::example[$(1\ 2\ 3)$과 $(4\ 5)$의 곱]
$X = \{1, 2, 3, 4, 5, 6\}$에서 $\sigma = (1\ 2\ 3)$, $\tau = (4\ 5)$라 합시다. $\{1, 2, 3\}$과 $\{4, 5\}$는 공통 원소가 없으므로 (1)에 의해 $\sigma\tau = \tau\sigma$입니다. (2)에 의해 $\sigma\tau$는 $1, 2, 3, 4, 5, 6$을 각각 $2, 3, 1, 5, 4, 6$으로 보냅니다. 직접 계산해도 $(\sigma\tau)(4) = \sigma(5) = 5$이고 $(\tau\sigma)(4) = \tau(4) = 5$입니다. $\sigma\tau$의 궤도는 $\{1, 2, 3\}$, $\{4, 5\}$, $\{6\}$이고, (3)대로 순환치환이 아닙니다.
:::

:::counterexample[서로소가 아닌 두 호환의 곱]
$X = \{1, 2, 3\}$에서 $(1\ 2)$와 $(2\ 3)$은 $2$를 공유합니다. 곱 $(1\ 2)(2\ 3)$은 $1, 2, 3$을 각각 $2, 3, 1$로 보내므로 순환치환 $(1\ 2\ 3)$입니다. 반대 순서 $(2\ 3)(1\ 2)$는 $1, 2, 3$을 각각 $3, 1, 2$로 보내는 $(1\ 3\ 2)$입니다. 두 곱은 $1$에서 값이 $2$와 $3$으로 다르므로 교환되지 않고, (3)과 달리 곱이 순환치환입니다.
:::

## 확인 질문

:::check[$(1\ 2)$와 $(3\ 4)$의 곱의 제곱은 무엇인가?]
$i_X$입니다. $\rho = (1\ 2)(3\ 4)$라 하면 (1)과 [[laws-of-exponents|지수법칙]]의 (4)에 의해 $\rho^2 = (1\ 2)^2 (3\ 4)^2$이고, [[cycle-permutation|순환치환]]의 (5)에 의해 호환의 제곱은 $i_X$이므로 $\rho^2 = i_X i_X = i_X$입니다.
:::

:::check[$X = \{1, 2, 3, 4, 5\}$에서 $(1\ 2\ 3)(4\ 5)$의 위수는 무엇인가?]
$6$입니다. $\rho = (1\ 2\ 3)(4\ 5)$라 하면 (1)과 지수법칙의 (4)에 의해 모든 정수 $n$에서 $\rho^n = (1\ 2\ 3)^n (4\ 5)^n$입니다. 순환치환의 (4)에 의해 $(1\ 2\ 3)^3 = i_X$, $(4\ 5)^2 = i_X$이므로 $\rho^6 = i_X$입니다. $1$은 $(4\ 5)$의 받침 밖에 있으므로 [[support-of-a-permutation|치환의 받침]]의 (2)에 의해 $(4\ 5)^n(1) = 1$이고 $\rho^n(1) = (1\ 2\ 3)^n(1)$입니다. $O_{(1\ 2\ 3)}(1) = \{1, 2, 3\}$은 원소가 $3$개이므로 [[orbits-of-a-permutation|치환의 궤도]]의 (6)의 (i)에 의해 이것이 $1$인 것은 정확히 $3 \mid n$일 때입니다. 따라서 $n = 1, 2, 4, 5$에서 $\rho^n \ne i_X$입니다. $n = 3$이면 같은 방법으로 $\rho^3(4) = (4\ 5)^3(4)$이고, $(4\ 5)^3 = (4\ 5)^2(4\ 5) = (4\ 5)$이므로 값은 $5 \ne 4$입니다. 따라서 [[order-of-an-element|원소의 위수]]의 정의에 의해 위수는 $6$입니다.
:::
