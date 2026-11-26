---
title: 순환치환의 켤레
title_en: Conjugates of a Cycle
aliases: [순환치환의 켤레, 켤레 순환치환, 같은 길이의 순환치환, conjugate of a cycle, conjugate cycles, cycles of the same length are conjugate]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 치환 σ 와 순환치환 (a₁ ⋯ a_k) 에 대하여 σ(a₁ ⋯ a_k)σ⁻¹ = (σ(a₁) ⋯ σ(a_k)) 이고, 유한집합 위에서 길이가 같은 두 순환치환 τ, μ 에는 μ = στσ⁻¹ 인 치환 σ 가 있다. 따라서 길이 k 인 순환치환 τ 에 대하여 στσ⁻¹ 꼴의 치환 전체는 길이 k 인 순환치환 전체이다.
requires: [set, set-operations, function, injective-surjective-bijective, inverse-function, finite-set, number-of-elements-is-unique, disjoint-union-count, recursion-theorem, group, group-basic-properties, symmetric-group, finite-product-in-a-group, support-of-a-permutation, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "6.2절 Theorem 6.16 과 그 증명 (p.77); 5.4절 Exercises, 연습문제 30 (p.72); 부록의 힌트 5.4.30 (p.322); 14.2절 Example 14.12, Example 14.14 (p.171)"
    checked: original
    note: "출처 Theorem 6.16(p.77)은 'S_n 의 두 순환치환 τ, μ 는 μ = στσ⁻¹ 인 σ ∈ S_n 이 있을 때 정확히 길이가 같다' 이다. 출처의 증명은 같은 길이일 때 σ 를 σ(a_i) = b_i 로만 적어 '정의' 하고, 나머지 점에서의 값과 σ 가 치환이라는 것을 말하지 않는다. 이 항목의 (2)는 A 와 B 의 여집합 사이의 전단사(finite-set 의 (F5))를 붙여 σ 를 정하고 전단사임을 보인다. 출처의 반대 방향은 '(σ(a_i)) 에서의 값이 σ(a_{(i mod k)+1}) 이므로 μ = (σ(a₁), …, σ(a_k))' 라고 하고 a 가 아닌 점의 계산은 적지 않는다. 이 항목의 (1)은 그 식을 모든 점에서 보인 것이고, 출처 연습문제 5.30(p.72)의 (a) 'στσ⁻¹ = (σ(a₁), …, σ(a_k)) 은 길이 k 인 순환치환' 과 같은 내용이며, 부록의 힌트 5.4.30(p.322) 'στσ⁻¹(σ(a_i)) = σ(a_{i+1}) 을 보여라' 와 같은 발상이다. (2)는 연습문제 5.30 의 (b)와 같다. (3)은 출처 Example 14.14(p.171)가 Theorem 6.16 에서 '같은 길이의 두 순환치환은 켤레' 라고 끌어내는 것과 같은 결론을 집합의 등식으로 적은 것이다. 출처는 S_n 에서 진술하고, 이 항목은 (1)을 임의의 집합 X 에서, (2)와 (3)을 유한집합 X 에서 진술한다. 예시 '$\\sigma$로 이름을 바꾼 순환치환' 은 출처 힌트 5.4.30 의 계산을 구체적인 수로 한 것이다. 반례 '길이가 다른 두 순환치환' 은 출처 Theorem 6.16 의 한 방향(켤레이면 길이가 같다)을 구체적인 두 순환치환에 쓴 것이다. 확인 질문 '$S_3$에서 $\\sigma(1\\ 2)\\sigma^{-1}$ 꼴의 치환 전체는 무엇인가?' 는 출처 Example 14.12(p.171)가 S₃ 의 켤레류 {(1 2), (1 3), (2 3)} 을 적는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(호환의 곱 (1) 을 오른쪽부터 계산해 대조, 켤레 (2)(3) 의 유한 가정 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이라 하자. 순환치환과 그 길이는 [[cycle-permutation|순환치환]], 받침은 [[support-of-a-permutation|치환의 받침]]의 것이다. $\sigma, \tau \in S_X$에 대하여 $\sigma\tau\sigma^{-1}$은 세 원소의 곱이다([[finite-product-in-a-group|군의 유한 곱]]의 (1)).

1. (켤레의 식) $k \ge 2$가 정수이고 $a_1, \dots, a_k$가 $X$의 서로 다른 원소이며 $\sigma \in S_X$이면, $\sigma(a_1), \dots, \sigma(a_k)$는 서로 다른 원소이고
   $$\sigma\,(a_1\ a_2\ \cdots\ a_k)\,\sigma^{-1} = (\sigma(a_1)\ \sigma(a_2)\ \cdots\ \sigma(a_k))$$
   이다. 따라서 길이 $k$인 순환치환 $\tau$에 대하여 $\sigma\tau\sigma^{-1}$은 길이 $k$인 순환치환이고, $\operatorname{supp}(\sigma\tau\sigma^{-1}) = \sigma(\operatorname{supp} \tau)$이다.
2. (같은 길이면 켤레) $X$가 [[finite-set|유한집합]]이고 $\tau$, $\mu$가 $S_X$의 같은 길이의 순환치환이면 $\mu = \sigma\tau\sigma^{-1}$인 $\sigma \in S_X$가 있다. 더 자세히, $\tau = (a_1\ \cdots\ a_k)$, $\mu = (b_1\ \cdots\ b_k)$이면 모든 $i$에서 $\sigma(a_i) = b_i$인 $\sigma \in S_X$가 있고, 그런 모든 $\sigma$에 대하여 $\sigma\tau\sigma^{-1} = \mu$이다.
3. (길이 $k$인 순환치환 전체) $X$가 유한집합이고 $\tau$가 길이 $k$인 순환치환이면
   $$\{\sigma\tau\sigma^{-1} : \sigma \in S_X\} = \{\mu \in S_X : \mu \text{는 길이 } k \text{인 순환치환}\}$$
   이다.
:::

:::english
Let $X$ be a set and $S_X$ the symmetric group. Cycles and their lengths are as in the entry on cycles, and the support is as in the entry on the support of a permutation. For $\sigma, \tau \in S_X$, $\sigma\tau\sigma^{-1}$ is a triple product ((1) of the entry on finite products in a group).

1. (Formula for conjugates) If $k \ge 2$ is an integer, $a_1, \dots, a_k$ are distinct elements of $X$ and $\sigma \in S_X$, then $\sigma(a_1), \dots, \sigma(a_k)$ are distinct and
   $$\sigma\,(a_1\ a_2\ \cdots\ a_k)\,\sigma^{-1} = (\sigma(a_1)\ \sigma(a_2)\ \cdots\ \sigma(a_k)).$$
   Hence, for a cycle $\tau$ of length $k$, $\sigma\tau\sigma^{-1}$ is a cycle of length $k$ and $\operatorname{supp}(\sigma\tau\sigma^{-1}) = \sigma(\operatorname{supp} \tau)$.
2. (Cycles of the same length are conjugate) If $X$ is finite and $\tau$, $\mu$ are cycles in $S_X$ of the same length, then there is $\sigma \in S_X$ with $\mu = \sigma\tau\sigma^{-1}$. More precisely, if $\tau = (a_1\ \cdots\ a_k)$ and $\mu = (b_1\ \cdots\ b_k)$, then there is $\sigma \in S_X$ with $\sigma(a_i) = b_i$ for all $i$, and every such $\sigma$ satisfies $\sigma\tau\sigma^{-1} = \mu$.
3. (All cycles of length $k$) If $X$ is finite and $\tau$ is a cycle of length $k$, then
   $$\{\sigma\tau\sigma^{-1} : \sigma \in S_X\} = \{\mu \in S_X : \mu \text{ is a cycle of length } k\}.$$
:::

## 직관

$\sigma\tau\sigma^{-1}$은 "이름을 바꾼 $\tau$"입니다. 원탁에 앉은 사람들에게 $\sigma$로 새 이름표를 붙였다고 합시다. 새 이름 $\sigma(a_i)$를 가진 사람을 찾아가려면 $\sigma^{-1}$로 옛 이름 $a_i$로 돌아가고, $\tau$로 옮겨 $a_{i+1}$이 된 뒤, $\sigma$로 다시 새 이름 $\sigma(a_{i+1})$을 붙입니다. 그래서 같은 원탁 돌리기를 새 이름으로 적은 순환치환이 나옵니다. 이런 $\sigma\tau\sigma^{-1}$을 $\tau$의 켤레라고 부릅니다.

이름표를 바꾸어도 원탁에 앉은 사람의 수는 그대로이므로 길이는 바뀌지 않습니다((1)). 거꾸로 (2)는 $X$가 유한집합일 때 같은 수의 사람이 앉은 두 원탁이면 한쪽의 이름표를 바꾸어 다른 쪽을 만들 수 있다는 것입니다. 원탁 밖의 사람들에게도 이름표를 하나씩 겹치지 않게 붙여야 하는데, 원탁 밖의 사람 수가 양쪽에서 같으므로 그렇게 할 수 있습니다.

## 증명

:::idea
(1)은 점마다 값을 비교한다. 새 이름 $\sigma(a_i)$에서는 $\sigma^{-1}$, 순환치환, $\sigma$를 차례로 적용하고, 그 밖의 점은 $\sigma^{-1}$로 옮겨도 $\{a_1, \dots, a_k\}$ 밖이라 고정된다. (2)는 각 $a_i$를 $b_i$로 보내는 대응을 두 받침의 여집합 사이의 전단사와 붙여 치환을 만든다.
:::

:::hint
(2)에서 두 받침은 원소가 $k$개씩이므로 $X$에서 뺀 두 여집합의 원소의 개수가 같다.
:::

:::proof
$S_X$의 곱은 합성이다([[symmetric-group|대칭군]]의 (1)). 유한 곱의 (1)과 (2)에 의해 $\sigma\tau\sigma^{-1} = (\sigma\tau)\sigma^{-1}$이므로 모든 $y$에서 $(\sigma\tau\sigma^{-1})(y) = \sigma(\tau(\sigma^{-1}(y)))$이다. 두 함수의 같음은 [[function|함수]]의 것이다.

**(1)** $\sigma$가 단사이므로 $i \ne j$이면 $\sigma(a_i) \ne \sigma(a_j)$이고, $\gamma = (\sigma(a_1)\ \cdots\ \sigma(a_k))$가 정해진다. $A = \{a_1, \dots, a_k\}$, $B = \{\sigma(a_1), \dots, \sigma(a_k)\}$라 하고 $\tau = (a_1\ \cdots\ a_k)$로 둔다. $y \in X$의 경우를 나눈다.
- $y = \sigma(a_i)$, $1 \le i \le k - 1$: $\sigma^{-1}(y) = a_i$([[inverse-function|역함수]])이고 $\tau(a_i) = a_{i+1}$이므로 값은 $\sigma(a_{i+1})$이다. $\gamma$도 $\sigma(a_i)$를 $\sigma(a_{i+1})$로 보낸다.
- $y = \sigma(a_k)$: 값은 $\sigma(\tau(a_k)) = \sigma(a_1)$이고, $\gamma$도 $\sigma(a_k)$를 $\sigma(a_1)$로 보낸다.
- $y \notin B$: $\sigma^{-1}(y) \in A$이면 $y = \sigma(\sigma^{-1}(y)) \in B$가 되어 어긋나므로 $\sigma^{-1}(y) \notin A$이고 $\tau(\sigma^{-1}(y)) = \sigma^{-1}(y)$이다. 따라서 값은 $\sigma(\sigma^{-1}(y)) = y$이고, $\gamma$도 $y$를 고정한다.

모든 점에서 값이 같으므로 $\sigma\tau\sigma^{-1} = \gamma$이다. [[cycle-permutation|순환치환]]의 정의에 의해 $\gamma$는 길이 $k$인 순환치환이고, 순환치환의 (2)에 의해 $\operatorname{supp} \gamma = B = \sigma(A) = \sigma(\operatorname{supp} \tau)$이다. 길이 $k$인 순환치환 $\tau$는 어떤 서로 다른 $a_1, \dots, a_k$로 $\tau = (a_1\ \cdots\ a_k)$이므로 뒤 문장이 따른다.

**(2)** 순환치환의 (2)에 의해 $\tau$와 $\mu$의 길이가 같다는 것은 $\tau = (a_1\ \cdots\ a_k)$, $\mu = (b_1\ \cdots\ b_k)$로 같은 $k$로 쓸 수 있다는 것이다. $A = \{a_1, \dots, a_k\}$, $B = \{b_1, \dots, b_k\}$는 순환치환의 (2)에 의해 원소가 $k$개씩이다. [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $X - A$와 $X - B$는 원소를 $|X| - k$개씩 가지므로, [[finite-set|유한집합]]의 (F5)에 의해 전단사 $f : X - A \to X - B$가 있다. 각 $y \in X$에 $y = a_i$이면 $b_i$를, $y \notin A$이면 $f(y)$를 대응시킨다. $y \in A$이면 $y = a_i$인 $i$는 하나뿐이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 함수 $\sigma : X \to X$이다.

$\sigma$는 [[injective-surjective-bijective|전단사]]이다. 단사: $\sigma(y) = \sigma(y')$이라 하자. 둘 다 $A$에 속하면 $b_i = b_j$에서 $i = j$이므로 $y = y'$이다. 둘 다 $A$ 밖이면 $f$가 단사이므로 $y = y'$이다. 하나만 $A$에 속하면 한 값은 $B$에, 다른 값은 $X - B$에 속하므로 같을 수 없다. 전사: $z \in B$이면 $z = b_i = \sigma(a_i)$이고, $z \notin B$이면 $f$가 전사이므로 $z = f(y) = \sigma(y)$인 $y \in X - A$가 있다. 따라서 $\sigma \in S_X$이고 모든 $i$에서 $\sigma(a_i) = b_i$이다.

$\sigma \in S_X$가 모든 $i$에서 $\sigma(a_i) = b_i$를 만족하면 (1)에 의해 $\sigma\tau\sigma^{-1} = (\sigma(a_1)\ \cdots\ \sigma(a_k)) = (b_1\ \cdots\ b_k) = \mu$이다.

**(3)** 왼쪽의 원소는 (1)에 의해 길이 $k$인 순환치환이다. 오른쪽의 원소 $\mu$는 $\tau$와 길이가 같으므로 (2)에 의해 어떤 $\sigma$로 $\mu = \sigma\tau\sigma^{-1}$이고 왼쪽에 속한다.
:::

## 예시와 반례

:::example[$\sigma$로 이름을 바꾼 순환치환]
$X = \{1, 2, 3, 4, 5\}$에서 $\tau = (1\ 2\ 3)$이고 $\sigma$가 $1, 2, 3, 4, 5$를 각각 $4, 5, 1, 2, 3$으로 보낸다고 합시다. (1)에 의해 $\sigma\tau\sigma^{-1} = (\sigma(1)\ \sigma(2)\ \sigma(3)) = (4\ 5\ 1)$입니다. 한 점에서 확인하면 $\sigma^{-1}(4) = 1$, $\tau(1) = 2$, $\sigma(2) = 5$이므로 $(\sigma\tau\sigma^{-1})(4) = 5$이고, $(4\ 5\ 1)$도 $4$를 $5$로 보냅니다. $2$는 $\{4, 5, 1\}$ 밖에 있고 $\sigma^{-1}(2) = 4$는 $\tau$가 고정하므로 $(\sigma\tau\sigma^{-1})(2) = \sigma(4) = 2$입니다.
:::

:::counterexample[길이가 다른 두 순환치환]
$X = \{1, 2, 3\}$에서 $(1\ 2)$와 $(1\ 2\ 3)$은 길이가 $2$와 $3$으로 다릅니다. (1)에 의해 모든 $\sigma \in S_X$에서 $\sigma(1\ 2)\sigma^{-1}$은 길이 $2$인 순환치환이고, [[cycle-permutation|순환치환]]의 (2)에 의해 순환치환의 길이는 치환으로 정해지므로 $(1\ 2\ 3)$과 같을 수 없습니다. 곧 $(1\ 2\ 3) = \sigma(1\ 2)\sigma^{-1}$인 $\sigma$는 없습니다.
:::

## 확인 질문

:::check[$S_3$에서 $\sigma(1\ 2)\sigma^{-1}$ 꼴의 치환 전체는 무엇인가?]
(3)에 의해 길이 $2$인 순환치환 전체, 곧 $\{(1\ 2), (1\ 3), (2\ 3)\}$입니다. 길이 $2$인 순환치환은 서로 다른 두 원소로 정해지고, 순환치환의 (5)에 의해 $(a\ b) = (b\ a)$이므로 $\{1, 2, 3\}$의 두 원소 부분집합 셋에 하나씩입니다.
:::

:::check[$X = \{1, 2, 3, 4\}$에서 $(1\ 2\ 3)$을 $(2\ 4\ 3)$으로 바꾸는 $\sigma$, 곧 $\sigma(1\ 2\ 3)\sigma^{-1} = (2\ 4\ 3)$인 $\sigma$를 하나 찾아라.]
(2)의 방법대로 $\sigma(1) = 2$, $\sigma(2) = 4$, $\sigma(3) = 3$으로 두고, 남은 $4$는 남은 $1$로 보냅니다. 이 $\sigma$는 $1, 2, 3, 4$를 각각 $2, 4, 3, 1$로 보내는 치환이고, (1)에 의해 $\sigma(1\ 2\ 3)\sigma^{-1} = (2\ 4\ 3)$입니다.
:::
