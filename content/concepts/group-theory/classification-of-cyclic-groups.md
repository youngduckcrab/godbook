---
title: 순환군의 분류
title_en: Classification of Cyclic Groups
aliases: [무한 순환군, 유한 순환군, 순환군의 동형, classification of cyclic groups, infinite cyclic group, finite cyclic group]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 무한군인 순환군은 모두 정수의 덧셈군 (ℤ, +)와 동형이고, 원소가 n개인 순환군은 모두 (ℤ_n, +)와 동형이다. 따라서 한 원소가 생성하는 순환 부분군은 ℤ나 어떤 ℤ_n과 동형이고, 두 순환군이 동형인 것은 둘 다 무한군이거나 원소의 개수가 같을 때이다.
requires: [set, function, finite-set, number-of-elements-is-unique, well-ordering-principle, prime-number, congruence-modulo-n, equivalence-classes-equal-iff-related, operation-on-equivalence-classes, real-number-arithmetic, group, subgroup, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, order-of-an-element, order-of-cyclic-subgroup, group-homomorphism, group-isomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 9.1절 Definition and Examples, Theorem 9.7, Theorem 9.8, Corollary 9.9 p.116, Example 11.11 p.136
    checked: original
    note: "(1)은 출처 Theorem 9.7(p.116, 무한 위수의 순환군은 모두 ℤ 와 동형이다)이다. 출처는 n 을 aⁿ 으로 보내는 사상의 단사를 'm > n 이고 aᵐ = aⁿ 이면 a^{m−n} = e 가 a 의 위수가 무한하다는 것에 어긋난다'로 보이고, 생성원의 위수가 무한하다는 것의 근거는 적지 않는다. 이 항목은 그것을 순환 부분군의 크기 항목의 (5)로, 전단사를 같은 항목의 (2)로 인용한다. (2)는 출처 Theorem 9.8(p.116)이다. 출처는 대표 0 ≤ k < n 을 골라 k 를 aᵏ 로 보내는 사상을 정의하고 그것이 동형사상이라는 증명은 연습문제 9.7(p.122)로 둔다. 이 항목은 대표를 고르지 않고, k 를 aᵏ 로 보내는 함수가 법 n 합동과 호환된다는 것으로 동치류 위의 함수를 정한다(동치류 위의 연산 항목의 (1)). 출처 Corollary 9.9(p.116, 소수 p 개의 원소를 갖는 군은 ℤ_p 와 동형)는 Corollary 6.12(라그랑주 정리의 따름)를 쓰므로 이 항목에 싣지 않았다. (3)은 출처에 명제로 없다(검색어 'h[a-z]i ∼ = Z' 꼴 0건, 'cyclic subgroup … isomorphic|isomorphic to (either )?Z or' 0건, 'infinite cyclic group' 3건은 읽기 질문 9.3 의 4, 13장, 연습문제 9.1 의 답). 출처 Example 11.11(p.136)은 g 가 생성하는 순환군에 대해 같은 결론을 제1 동형 정리로 얻는다. (4)는 출처 Example 11.11(p.136)의 '두 순환군은 위수가 같을 때 정확히 동형이고, 동형을 같다고 보면 순환군은 ℤ 와 ℤ_n 뿐'과 같은 내용이다. 출처는 무한군에도 위수가 같다고 말하고, 이 항목은 '둘 다 무한군이거나 원소의 개수가 같다'로 쓴다. 출처 읽기 질문 9.3 의 4(p.121, 이제 '그 무한 순환군'이라고 말할 수 있는 까닭)도 같은 결론을 묻는다. 예시 'U(5) 와 ℤ₄'는 출처 연습문제 9.32(p.123, U(5) ≅ ℤ₄ 를 증명하라)와 같은 대상, 같은 결론이다. 예시 '{1, −1}'은 원소가 둘인 군이 ℤ₂ 와 동형이라는 것으로, 출처 Example 10.7(p.127)이 원소가 정확히 둘인 Dₙ/Rₙ 을 ℤ₂ 와 동형이라 하는 것과 같은 발상이다. 반례 'ℤ₄ 에서 ℤ₆ 으로 [k] 를 [k] 로'는 출처 11.4절 연습문제 5(p.138, ℤ₂₄ 에서 ℤ₁₈ 로의 준동형을 모두 구하라)와 같은 물음을 다룬다. 첫째 확인 질문의 ⟨[4]⟩ 는 집합으로 출처 Example 4.5(p.47)의 ℤ₆ 의 ⟨2⟩ = {0, 2, 4} 와 같다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 출처의 연습문제와 겹치는 것을 메모에 밝히고 경계 경우의 문장을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 거듭제곱은 [[power-in-a-group|군의 거듭제곱]]의 것이고, $\langle a \rangle$, 순환군, 생성원은 [[cyclic-subgroup|순환 부분군]]의 것이며, 원소의 위수와 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이다. 동형사상과 $\cong$은 [[group-isomorphism|군의 동형]]의 것이고, $(\mathbb{Z}, +)$와 $(\mathbb{Z}_n, +)$($n$은 자연수)는 [[number-groups|수로 이루어진 군]]의 군이다.

1. (무한 순환군) $G = \langle a \rangle$이고 $a$의 위수가 무한하면, 각 정수 $k$에 $a^k$를 대응시키는 함수 $\gamma : \mathbb{Z} \to G$는 $(\mathbb{Z}, +)$에서 $G$로의 동형사상이다. 따라서 $G \cong (\mathbb{Z}, +)$이다. 또 무한군인 순환군은 모두 $(\mathbb{Z}, +)$와 동형이고, 무한군인 두 순환군은 서로 동형이다.
2. (유한 순환군) $G$가 유한군인 순환군이고 $n = |G|$이며 $a$가 $G$의 생성원이라 하자. 그러면 함수 $\bar\gamma : \mathbb{Z}_n \to G$로서 모든 정수 $k$에서 $\bar\gamma([k]) = a^k$인 것이 정확히 하나 있고, $\bar\gamma$는 $(\mathbb{Z}_n, +)$에서 $G$로의 동형사상이다. 따라서 $G \cong (\mathbb{Z}_n, +)$이다. 또 원소가 $n$개인 두 순환군은 서로 동형이다.
3. (순환 부분군) $a \in G$라 하자. $a$의 위수가 무한하면 군 $\langle a \rangle$는 $(\mathbb{Z}, +)$와 동형이고, $a$의 위수가 유한하면 군 $\langle a \rangle$는 $(\mathbb{Z}_{\operatorname{ord}(a)}, +)$와 동형이다.
4. (두 순환군이 동형일 조건) $G$와 $G'$이 순환군이라 하자. $G \cong G'$인 것은 정확히 $G$와 $G'$이 둘 다 무한군이거나, 둘 다 유한군이고 $|G| = |G'|$일 때이다. 특히 자연수 $n$에 대하여 $(\mathbb{Z}, +)$와 $(\mathbb{Z}_n, +)$는 동형이 아니고, 자연수 $m$, $n$에 대하여 $(\mathbb{Z}_m, +) \cong (\mathbb{Z}_n, +)$인 것은 정확히 $m = n$일 때이다.
:::

:::english
Let $G$ be a group with identity $e$. Powers are as in the entry on powers in a group; $\langle a \rangle$, cyclic groups and generators as in the entry on cyclic subgroups; the order of an element and $\operatorname{ord}(a)$ as in the entry on the order of an element. Isomorphisms and $\cong$ are as in the entry on isomorphism of groups, and $(\mathbb{Z}, +)$ and $(\mathbb{Z}_n, +)$ ($n$ a natural number) are the groups of the entry on groups of numbers.

1. (Infinite cyclic groups) If $G = \langle a \rangle$ and $a$ has infinite order, then the function $\gamma : \mathbb{Z} \to G$ assigning $a^k$ to each integer $k$ is an isomorphism from $(\mathbb{Z}, +)$ to $G$. Hence $G \cong (\mathbb{Z}, +)$. Moreover, every cyclic group that is infinite is isomorphic to $(\mathbb{Z}, +)$, and any two infinite cyclic groups are isomorphic.
2. (Finite cyclic groups) Let $G$ be a finite cyclic group, $n = |G|$, and $a$ a generator of $G$. Then there is exactly one function $\bar\gamma : \mathbb{Z}_n \to G$ with $\bar\gamma([k]) = a^k$ for every integer $k$, and $\bar\gamma$ is an isomorphism from $(\mathbb{Z}_n, +)$ to $G$. Hence $G \cong (\mathbb{Z}_n, +)$. Moreover, any two cyclic groups with $n$ elements are isomorphic.
3. (Cyclic subgroups) Let $a \in G$. If $a$ has infinite order, then the group $\langle a \rangle$ is isomorphic to $(\mathbb{Z}, +)$; if $a$ has finite order, then the group $\langle a \rangle$ is isomorphic to $(\mathbb{Z}_{\operatorname{ord}(a)}, +)$.
4. (When two cyclic groups are isomorphic) Let $G$ and $G'$ be cyclic groups. Then $G \cong G'$ exactly when both are infinite, or both are finite and $|G| = |G'|$. In particular, for a natural number $n$, $(\mathbb{Z}, +)$ and $(\mathbb{Z}_n, +)$ are not isomorphic, and for natural numbers $m$, $n$, $(\mathbb{Z}_m, +) \cong (\mathbb{Z}_n, +)$ exactly when $m = n$.
:::

## 직관

순환군에서는 모든 원소가 생성원 $a$의 거듭제곱 $a^k$이고, 두 원소의 곱은 지수의 합으로 계산됩니다($a^k a^l = a^{k+l}$). 그래서 순환군의 곱셈표는 "지수를 더하는 표"이고, 남는 물음은 서로 다른 지수가 같은 원소를 줄 때가 언제인가뿐입니다. [[order-of-an-element|원소의 위수]]가 이 물음에 답합니다. 위수가 무한하면 서로 다른 지수는 늘 다른 원소를 주므로 지수를 정수 그대로 더하는 $(\mathbb{Z}, +)$와 같고, 위수가 $n$이면 지수가 법 $n$으로 합동일 때 같은 원소이므로 지수를 법 $n$으로 더하는 $(\mathbb{Z}_n, +)$와 같습니다.

비유로 말하면, 순환군은 한 칸씩만 움직이는 말입니다. 끝없이 곧게 뻗은 길을 따라 움직이면 정수와 같고, 칸이 $n$개인 둥근 판을 돌면 시계와 같습니다. 비유의 "한 칸"이 생성원, "움직인 칸 수"가 지수, "길이 곧은가 둥근가"가 위수가 무한한가 유한한가에 해당합니다. 비유가 놓치는 것도 있습니다. 같은 순환군에서도 생성원을 다르게 고르면 "한 칸"이 달라지고, 그에 따라 동형사상도 달라질 수 있습니다.

유한한 경우에 $[k]$를 $a^k$로 보내는 함수를 정하는 데에는 주의가 필요합니다. $[k] = [l]$인 서로 다른 정수 $k$, $l$이 있으므로, $a^k = a^l$이어야 함수가 정해집니다. 이 자리에서 $\operatorname{ord}(a) = n$을 위수의 (3)으로 쓰고, 단사임을 보일 때 위수의 (3)을 반대 방향으로 한 번 더 씁니다. 아래 반례는 이 조건이 없으면 함수가 정해지지 않을 수 있음을 보여 줍니다.

## 증명

:::idea
$k$에 $a^k$를 대응시키는 준동형 $\mathbb{Z} \to G$에서 출발한다. 위수가 무한하면 이것이 이미 전단사이다. 위수가 $n$이면 $a^k = a^l$인 것이 정확히 $k \equiv l \pmod n$일 때이므로, 이 함수는 동치류 위의 함수 $\mathbb{Z}_n \to G$를 정하고 그 함수가 단사이다.
:::

:::hint
(2): [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)을 쓰려면 "법 $n$으로 합동이면 값이 같다"를 보여야 한다. [[order-of-an-element|원소의 위수]]의 (3)을 본다.
:::

:::hint
(4): 한 방향은 [[group-isomorphism|군의 동형]]의 (3)(iii)이고, 다른 방향은 (1), (2)와 동형의 대칭·추이이다.
:::

:::proof
아래에서 "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$), "크기의 ($k$)"는 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 ($k$), "동형의 ($k$)"는 [[group-isomorphism|군의 동형]]의 ($k$)이다. [[group-homomorphism|군 준동형]]의 (7)(ii)에 의해 각 정수 $k$에 $a^k$를 대응시키는 함수 $\gamma : \mathbb{Z} \to G$는 $(\mathbb{Z}, +)$에서 $G$로의 준동형이다.

**(1)** 크기의 (2)에 의해 $\gamma$는 $\mathbb{Z}$에서 $\langle a \rangle$로의 전단사이고, $\langle a \rangle = G$이므로 $\gamma : \mathbb{Z} \to G$는 전단사이다. 따라서 $\gamma$는 동형사상이고, 동형의 (2)(대칭)에 의해 $G \cong (\mathbb{Z}, +)$이다. 무한군인 순환군 $G$의 생성원 $a$는 크기의 (5)에 의해 위수가 무한하므로, 앞 문장에 의해 $G \cong (\mathbb{Z}, +)$이다. 무한군인 두 순환군 $G$, $G'$에 대하여 $G \cong (\mathbb{Z}, +)$이고 $G' \cong (\mathbb{Z}, +)$이므로, 동형의 (2)(대칭, 추이)에 의해 $G \cong G'$이다.

**(2)** 크기의 (4)에 의해 $a$의 위수는 유한하고 $\operatorname{ord}(a) = |G| = n$이다. 따라서 $n$은 자연수이다. $\sim$을 $\mathbb{Z}$ 위의 법 $n$ 합동이라 하면 [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $\mathbb{Z}_n = \mathbb{Z}/{\sim}$이고 $[k]$는 $k$의 동치류이다.

- *호환.* $k \equiv l \pmod n$이면 위수의 (3)에 의해 $a^k = a^l$, 곧 $\gamma(k) = \gamma(l)$이다. 따라서 $\gamma$는 $\sim$과 호환되고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 함수 $\bar\gamma : \mathbb{Z}_n \to G$로서 모든 정수 $k$에서 $\bar\gamma([k]) = \gamma(k) = a^k$인 것이 정확히 하나 있다.
- *준동형.* $P, Q \in \mathbb{Z}_n$이면 $P = [k]$, $Q = [l]$인 정수 $k$, $l$이 있다. [[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $P + Q = [k + l]$이고, [[laws-of-exponents|지수법칙]]의 (1)에 의해 $\bar\gamma(P + Q) = a^{k+l} = a^k a^l = \bar\gamma(P)\,\bar\gamma(Q)$이다.
- *단사.* $\bar\gamma([k]) = \bar\gamma([l])$이면 $a^k = a^l$이고, 위수의 (3)에 의해 $k \equiv l \pmod n$이며, [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[k] = [l]$이다.
- *전사.* $g \in G = \langle a \rangle$이면 [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $g = a^k$인 정수 $k$가 있고 $g = \bar\gamma([k])$이다.

따라서 $\bar\gamma$는 동형사상이고, 동형의 (2)에 의해 $G \cong (\mathbb{Z}_n, +)$이다. 원소가 $n$개인 두 순환군 $G$, $G'$은 각각 $(\mathbb{Z}_n, +)$와 동형이므로, 동형의 (2)(대칭, 추이)에 의해 $G \cong G'$이다.

**(3)** [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle a \rangle$는 $G$의 부분군이므로 제한한 연산으로 군이고, 같은 항목의 (6)의 마지막 문장에 의해 이 군은 순환군이고 $a$는 그 생성원이다. 위수의 (9)에 의해 군 $\langle a \rangle$에서 $a$의 위수가 유한한지와 그 값은 $G$에서와 같다.
- $a$의 위수가 무한하면, 군 $\langle a \rangle$에서도 $a$의 위수가 무한하고 $\langle a \rangle$는 $a$가 생성하므로, (1)을 군 $\langle a \rangle$에 써서 $\langle a \rangle \cong (\mathbb{Z}, +)$이다.
- $a$의 위수가 유한하면, 크기의 (1)에 의해 $\langle a \rangle$는 유한집합이고 $|\langle a \rangle| = \operatorname{ord}(a)$이다. (2)를 유한군 $\langle a \rangle$와 생성원 $a$에 써서 $\langle a \rangle \cong (\mathbb{Z}_{\operatorname{ord}(a)}, +)$이다.

**(4)** $G \cong G'$이면 동형사상 $\varphi : G \to G'$이 있고, 동형의 (3)(iii)에 의해 $G$가 유한군인 것은 정확히 $G'$이 유한군일 때이며 그때 $|G| = |G'|$이다. 곧 둘 다 무한군이거나, 둘 다 유한군이고 $|G| = |G'|$이다. 거꾸로 둘 다 무한군이면 (1)에 의해, 둘 다 유한군이고 $|G| = |G'|$이면 (2)에 의해 $G \cong G'$이다.

[[cyclic-subgroup|순환 부분군]]의 (6)에 의해 $(\mathbb{Z}, +)$와 $(\mathbb{Z}_n, +)$는 순환군이다. [[number-groups|수로 이루어진 군]]의 (1)과 (4)에 의해 $(\mathbb{Z}, +)$는 무한군이고 $(\mathbb{Z}_n, +)$는 유한군이므로 앞 문단에 의해 동형이 아니다. 같은 항목의 (4)에 의해 $|\mathbb{Z}_m| = m$, $|\mathbb{Z}_n| = n$이므로, 앞 문단에 의해 $(\mathbb{Z}_m, +) \cong (\mathbb{Z}_n, +)$인 것은 정확히 $m = n$일 때이다.
:::

## 예시와 반례

:::example[U(5)와 ℤ₄]
[[group-of-units-modulo-n|법 n의 단원군]] $U(5)$를 봅시다. 단원군의 (2)에 의해 그 곱은 $\mathbb{Z}_5$의 곱셈이고 항등원은 $[1]$입니다. $[1][1] = [1]$, $[2][3] = [3][2] = [6] = [1]$, $[4][4] = [16] = [1]$이므로($6 - 1 = 5 \cdot 1$, $16 - 1 = 5 \cdot 3$이고 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]) 단원군의 (3)에 의해 $[1], [2], [3], [4] \in U(5)$입니다. $[0]$은 모든 $Q \in \mathbb{Z}_5$에 대하여 $[0]Q = [0] \ne [1]$이므로 단원군의 (3)에 의해 $U(5)$에 속하지 않습니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0], \dots, [4]$는 서로 다르므로 $U(5) = \{[1], [2], [3], [4]\}$이고, $i$를 $[i]$로 보내는 함수 $\{1, 2, 3, 4\} \to U(5)$가 전단사이므로 [[finite-set|유한집합]]의 정의와 [[number-of-elements-is-unique|원소의 개수]]에 의해 $|U(5)| = 4$입니다.

[[power-in-a-group|군의 거듭제곱]]의 (8)에 의해 $[2]^k = [2^k]$이므로 $[2]^1 = [2]$, $[2]^2 = [4]$, $[2]^3 = [8] = [3]$, $[2]^4 = [16] = [1]$이고, 처음 셋은 $[1]$이 아닙니다. 따라서 [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}([2]) = 4 = |U(5)|$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $[2]$는 $U(5)$의 생성원입니다. (2)에 의해 $U(5) \cong (\mathbb{Z}_4, +)$이고, 그 동형사상은 $[0]$, $[1]$, $[2]$, $[3]$을 차례로 $[1]$, $[2]$, $[4]$, $[3]$으로 보냅니다.
:::

:::example[0이 아닌 실수의 곱셈군에서 ⟨−1⟩]
군 $(\mathbb{R} - \{0\}, \cdot)$에서 $a = -1$이라 합시다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 $(-1)^1 = -1 \ne 1$이고, (K12)(iii)과 (K4)에 의해 $(-1)^2 = (-1)(-1) = 1$입니다([[power-in-a-group|군의 거듭제곱]]의 (1)). 따라서 $\operatorname{ord}(-1) = 2$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle -1 \rangle = \{(-1)^0, (-1)^1\} = \{1, -1\}$입니다. (3)에 의해 이 군은 $(\mathbb{Z}_2, +)$와 동형이고, 동형사상은 $[0]$을 $1$로, $[1]$을 $-1$로 보냅니다.
:::

:::counterexample[ℤ₄에서 ℤ₆으로 [k]를 [k]로 보내는 함수는 없다]
이 반례에서만 법 $4$의 동치류를 $[k]_4$, 법 $6$의 동치류를 $[k]_6$으로 씁니다. 함수 $F : \mathbb{Z}_4 \to \mathbb{Z}_6$이 모든 정수 $k$에서 $F([k]_4) = [k]_6$이라 해 봅시다. $4 - 0 = 4 \cdot 1$이므로 $[4]_4 = [0]_4$이고, $F$가 함수이므로 $[4]_6 = [0]_6$, 곧 $4 = 6c$인 정수 $c$가 있어야 합니다. 그러나 $c \le 0$이면 $6c \le 0 < 4$이고 $c \ge 1$이면 $6c \ge 6 > 4$입니다([[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)로 $c \le 0$이거나 $c \ge 1$이고, 같은 곳의 (Z3), (Z6)). 따라서 그런 함수는 없습니다. (2)에서는 $\operatorname{ord}(a) = n$이 "$k \equiv l \pmod n$이면 $a^k = a^l$"을 보장하므로 함수가 정해지지만, 여기서는 $[1]_6$의 위수가 $6$이어서 법 $4$와 맞지 않습니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}_6, +)$에서 군 $\langle [4] \rangle$는 어느 군과 동형인가?]
$(\mathbb{Z}_3, +)$와 동형입니다. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $1 \cdot [4] = [4]$, $2 \cdot [4] = [8] = [2]$, $3 \cdot [4] = [12] = [0]$이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[4]$와 $[2]$는 $[0]$이 아닙니다. 따라서 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([4]) = 3$이고, (3)에 의해 $\langle [4] \rangle \cong (\mathbb{Z}_3, +)$입니다.
:::

:::check[$G$가 원소 $6$개인 순환군이고 $a$가 그 생성원일 때, (2)의 $\bar\gamma$는 $[9]$와 $[-1]$을 각각 어디로 보내는가?]
$\bar\gamma([9]) = a^9$이고, $9 \equiv 3 \pmod 6$이므로 $[9] = [3]$이어서 $a^9 = a^3$이기도 합니다([[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $\operatorname{ord}(a) = 6$이고, [[order-of-an-element|원소의 위수]]의 (3)). $\bar\gamma([-1]) = a^{-1}$이고, $-1 \equiv 5 \pmod 6$이므로 $a^{-1} = a^5$입니다.
:::
