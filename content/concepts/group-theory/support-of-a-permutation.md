---
title: 치환의 받침
title_en: Support of a Permutation
aliases: [받침, 움직이는 점의 집합, 고정점, 서로소인 치환, support of a permutation, fixed point, disjoint permutations]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 치환 σ 가 움직이는 점의 집합을 받침 supp σ 라 하고, 받침이 σ 와 σ⁻¹ 과 거듭제곱으로 닫혀 있다는 것, 곱의 받침, 받침이 겹치지 않는 두 치환은 교환되고 그 곱의 값은 각 점을 움직이는 쪽의 값이라는 것, 받침이 겹치지 않는 치환들의 유한 곱의 값과 받침을 보인다.
requires: [set, subset, set-operations, function, injective-surjective-bijective, inverse-function, function-composition, mathematical-induction, prime-number, well-ordering-principle, group, group-basic-properties, symmetric-group, power-in-a-group, laws-of-exponents, finite-product-in-a-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "5.1절 Cycle Notation, 서로소인 순환치환의 정의와 Example 5.7 (p.61), Proposition 5.8 과 그 증명 (p.62)"
    checked: original
    note: "출처는 두 순환치환 (a₁, …, a_k), (b₁, …, b_l) 을 모든 i, j 에서 a_i ≠ b_j 일 때 서로소(disjoint)라 하고(p.61, 그림으로 대조), Proposition 5.8(p.62)에서 서로소인 두 순환치환이 교환된다는 것을 x 가 어느 쪽의 원소도 아닌 경우와 a_i 인 경우를 계산하고 b_j 인 경우는 'Similarly' 로 넘겨 증명한다. 이 항목은 '서로소' 를 모든 치환에 대해 받침이 겹치지 않는다는 것으로 정하고, (4)에서 Proposition 5.8 을 그 꼴로 진술한다(순환치환에 대해 출처의 정의와 같은 뜻이라는 것은 순환치환 항목에서 보인다). 출처의 증명이 쓰는 'σ 가 a_i 를 다시 a 가운데 하나로 보낸다' 는 이 항목의 (2)가 맡고, 출처가 넘긴 경우도 (4)의 증명에 적었다. 받침(support)과 기호 supp 는 출처에 없다(검색어 'support' 12건은 모두 다른 뜻, 'supp' 는 support·suppose 의 일부로만 나오고, 'moves' 2건과 'moved' 1건도 다른 뜻). 'fix' 는 Proposition 5.8 의 증명(p.62)이 'both σ and τ fix x. That is, σ(x) = x and τ(x) = x' 로 쓰고, 이 항목의 '고정점' 은 그 뜻이다(출처의 'fixed point set'(p.169)은 군의 작용에 대한 것이다). (5)의 유한 곱판은 출처 Theorem 5.9 의 증명(p.62)이 서로소인 집합 X_i 위의 순환치환 σ_i 로 σ = σ₁σ₂⋯σ_r 이라 할 때 쓰는 사실을 진술로 만든 것이다. 반례 '받침이 겹치는 두 맞바꿈' 은 출처 Example 5.7(p.61)이 서로소가 아닌 두 순환치환의 곱을 계산하는 것과 같은 종류이다. 확인 질문 '바로 위 질문의 $\\sigma$와 $\\sigma^2$는 서로소인가? 교환되는가?' 의 두 치환은 출처 Proposition 5.8 의 가정(서로소)이 없어도 교환되는 예이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(순환치환 (8) 에 항등치환과 ℤ 위의 옮기기를 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이라 하자. 곱 $\sigma\tau$는 합성 $\sigma \circ \tau$이고, $i_X$는 항등치환, $\sigma^{-1}$은 역함수, $\sigma^n$($n \in \mathbb{Z}$)은 [[power-in-a-group|군의 거듭제곱]]이다. 유한 곱은 [[finite-product-in-a-group|군의 유한 곱]]의 것이다.

$\sigma \in S_X$에 대하여
$$\operatorname{supp} \sigma = \{x \in X : \sigma(x) \ne x\}$$
를 $\sigma$의 **받침**(support)이라 한다. $x \in X$가 $\sigma$의 **고정점**(fixed point)인 것은 정확히 $\sigma(x) = x$일 때, 곧 $x \notin \operatorname{supp} \sigma$일 때이다. 두 치환 $\sigma, \tau \in S_X$가 **서로소**(disjoint)인 것은 정확히 $\operatorname{supp} \sigma \cap \operatorname{supp} \tau = \emptyset$일 때이다.

다음이 성립한다. 아래에서 $\sigma, \tau \in S_X$이다.

1. (항등치환) $\operatorname{supp} i_X = \emptyset$이다. 거꾸로 $\operatorname{supp} \sigma = \emptyset$이면 $\sigma = i_X$이다.
2. (받침은 $\sigma$로 닫혀 있다) $x \in X$에 대하여 $x \in \operatorname{supp} \sigma$인 것은 정확히 $\sigma(x) \in \operatorname{supp} \sigma$일 때이고, 또 정확히 $\sigma^{-1}(x) \in \operatorname{supp} \sigma$일 때이다. $\operatorname{supp} \sigma^{-1} = \operatorname{supp} \sigma$이고 $\sigma(\operatorname{supp} \sigma) = \operatorname{supp} \sigma$이다. 모든 정수 $n$에 대하여, $x \in \operatorname{supp} \sigma$이면 $\sigma^n(x) \in \operatorname{supp} \sigma$이고, $x \notin \operatorname{supp} \sigma$이면 $\sigma^n(x) = x$이다. 따라서 $\operatorname{supp} \sigma^n \subseteq \operatorname{supp} \sigma$이다.
3. (곱의 받침) $\operatorname{supp}(\sigma\tau) \subseteq \operatorname{supp} \sigma \cup \operatorname{supp} \tau$이다.
4. (서로소인 두 치환) $\sigma$와 $\tau$가 서로소이면, 모든 $x \in X$에서
   $$
   (\sigma\tau)(x) =
   \begin{cases}
   \sigma(x) & x \in \operatorname{supp} \sigma, \\
   \tau(x) & x \in \operatorname{supp} \tau, \\
   x & (\text{그 밖})
   \end{cases}
   $$
   이고, $\sigma\tau = \tau\sigma$이며 $\operatorname{supp}(\sigma\tau) = \operatorname{supp} \sigma \cup \operatorname{supp} \tau$이다.
5. (서로소인 치환들의 유한 곱) $n \ge 0$이 정수이고 $\sigma_1, \dots, \sigma_n$이 $S_X$의 원소의 열로서, $i \ne j$인 모든 $i, j \in \{1, \dots, n\}$에서 $\sigma_i$와 $\sigma_j$가 서로소라 하자. $\rho = \sigma_1 \cdots \sigma_n$이라 하면 모든 $x \in X$에 대하여 다음이 성립한다.
   - (i) $x \in \operatorname{supp} \sigma_i$인 $i$는 많아야 하나이다. 그런 $i$가 있으면 $\rho(x) = \sigma_i(x)$이고, 없으면 $\rho(x) = x$이다.
   - (ii) $x \in \operatorname{supp} \rho$인 것은 정확히 어떤 $i$에서 $x \in \operatorname{supp} \sigma_i$일 때이다.
   - (iii) $\tau \in S_X$가 모든 $\sigma_i$와 서로소이면 $\tau$와 $\rho$는 서로소이고 $\tau\rho = \rho\tau$이다.
   - (iv) $x \in \operatorname{supp} \sigma_i$이면 모든 정수 $m$에서 $\rho^m(x) = \sigma_i^m(x)$이다.
:::

:::english
Let $X$ be a set and $S_X$ the symmetric group. The product $\sigma\tau$ is the composite $\sigma \circ \tau$, $i_X$ is the identity permutation, $\sigma^{-1}$ is the inverse function, and $\sigma^n$ ($n \in \mathbb{Z}$) are powers in the group. Finite products are those of the entry on finite products in a group.

For $\sigma \in S_X$, the set
$$\operatorname{supp} \sigma = \{x \in X : \sigma(x) \ne x\}$$
is called the **support** of $\sigma$. An element $x \in X$ is a **fixed point** of $\sigma$ exactly when $\sigma(x) = x$, that is, when $x \notin \operatorname{supp} \sigma$. Two permutations $\sigma, \tau \in S_X$ are **disjoint** exactly when $\operatorname{supp} \sigma \cap \operatorname{supp} \tau = \emptyset$.

The following hold, where $\sigma, \tau \in S_X$.

1. (Identity) $\operatorname{supp} i_X = \emptyset$. Conversely, if $\operatorname{supp} \sigma = \emptyset$, then $\sigma = i_X$.
2. (The support is closed under $\sigma$) For $x \in X$, $x \in \operatorname{supp} \sigma$ exactly when $\sigma(x) \in \operatorname{supp} \sigma$, and also exactly when $\sigma^{-1}(x) \in \operatorname{supp} \sigma$. We have $\operatorname{supp} \sigma^{-1} = \operatorname{supp} \sigma$ and $\sigma(\operatorname{supp} \sigma) = \operatorname{supp} \sigma$. For every integer $n$: if $x \in \operatorname{supp} \sigma$, then $\sigma^n(x) \in \operatorname{supp} \sigma$, and if $x \notin \operatorname{supp} \sigma$, then $\sigma^n(x) = x$. Hence $\operatorname{supp} \sigma^n \subseteq \operatorname{supp} \sigma$.
3. (Support of a product) $\operatorname{supp}(\sigma\tau) \subseteq \operatorname{supp} \sigma \cup \operatorname{supp} \tau$.
4. (Two disjoint permutations) If $\sigma$ and $\tau$ are disjoint, then for every $x \in X$
   $$
   (\sigma\tau)(x) =
   \begin{cases}
   \sigma(x) & x \in \operatorname{supp} \sigma, \\
   \tau(x) & x \in \operatorname{supp} \tau, \\
   x & (\text{otherwise}),
   \end{cases}
   $$
   and $\sigma\tau = \tau\sigma$ and $\operatorname{supp}(\sigma\tau) = \operatorname{supp} \sigma \cup \operatorname{supp} \tau$.
5. (Finite products of disjoint permutations) Let $n \ge 0$ be an integer and let $\sigma_1, \dots, \sigma_n$ be a sequence of elements of $S_X$ such that $\sigma_i$ and $\sigma_j$ are disjoint for all $i, j \in \{1, \dots, n\}$ with $i \ne j$. Put $\rho = \sigma_1 \cdots \sigma_n$. Then for every $x \in X$:
   - (i) There is at most one $i$ with $x \in \operatorname{supp} \sigma_i$. If there is such an $i$, then $\rho(x) = \sigma_i(x)$; if there is none, then $\rho(x) = x$.
   - (ii) $x \in \operatorname{supp} \rho$ exactly when $x \in \operatorname{supp} \sigma_i$ for some $i$.
   - (iii) If $\tau \in S_X$ is disjoint from every $\sigma_i$, then $\tau$ and $\rho$ are disjoint and $\tau\rho = \rho\tau$.
   - (iv) If $x \in \operatorname{supp} \sigma_i$, then $\rho^m(x) = \sigma_i^m(x)$ for every integer $m$.
:::

## 직관

카드를 섞을 때 자리가 바뀐 카드만 모은 것이 받침입니다. 받침 밖의 카드는 섞기 전후에 같은 자리에 있습니다. 비유가 정의와 맞는 곳은 "자리가 바뀌었다"가 $\sigma(x) \ne x$라는 점이고, 맞지 않는 곳은 $X$가 무한집합일 수도 있다는 점입니다.

(2)는 받침 안의 점이 $\sigma$를 몇 번 적용해도 받침 밖으로 나가지 않는다는 것입니다. 받침 밖의 점은 이미 제자리이므로, 받침 안의 점이 받침 밖의 점으로 가면 두 점이 같은 곳으로 가게 되어 단사가 깨지기 때문입니다.

(4)는 서로 다른 카드 묶음만 건드리는 두 섞기는 어느 것을 먼저 해도 결과가 같다는 것입니다. 각 점은 많아야 한쪽에서만 움직이고, 그 점이 움직여 간 자리도 같은 쪽의 받침 안에 있어 다른 쪽은 그것을 건드리지 않습니다. (5)는 이것을 여러 치환으로 넓힌 것입니다. 서로소인 치환들을 곱하면 각 점의 값은 그 점을 움직이는 하나의 치환이 정하고, 곱하는 순서는 값에 영향을 주지 않습니다.

## 증명

:::idea
받침 안의 점이 $\sigma$로 받침 밖에 갈 수 없다는 것을 단사로 보이고((2)), 서로소인 두 치환의 곱을 점마다 세 경우로 계산한다((4)). (5)는 유한 곱의 끝항 떼기와 (4)로 하는 길이에 대한 귀납법이다.
:::

:::hint
$x \in \operatorname{supp} \sigma$인데 $\sigma(x) \notin \operatorname{supp} \sigma$라면 $\sigma(\sigma(x)) = \sigma(x)$이다. 이것과 $\sigma$가 단사라는 것을 함께 쓴다.
:::

:::hint
(5)에서 처음 $n$개의 곱 $\rho'$의 받침이 (ii)에 의해 $\operatorname{supp} \sigma_1, \dots, \operatorname{supp} \sigma_n$의 점들로 이루어진다는 것을 귀납 가정으로 얻으면, $\rho'$과 $\sigma_{n+1}$이 서로소이다.
:::

:::proof
[[symmetric-group|대칭군]]의 (1)에 의해 $S_X$의 곱은 합성이고 $(\sigma\tau)(x) = \sigma(\tau(x))$이며, 항등원은 $i_X$, 역원은 역함수이다. 두 함수의 같음은 [[function|함수]]의 것이다.

**(1)** $i_X(x) = x$이므로 $\operatorname{supp} i_X = \emptyset$이다. $\operatorname{supp} \sigma = \emptyset$이면 모든 $x$에서 $\sigma(x) = x = i_X(x)$이므로 $\sigma = i_X$이다.

**(2)** 먼저 $x \in \operatorname{supp} \sigma$이면 $\sigma(x) \in \operatorname{supp} \sigma$임을 보인다. $\sigma(x) \notin \operatorname{supp} \sigma$라 하면 $\sigma(\sigma(x)) = \sigma(x)$이고, $\sigma$가 [[injective-surjective-bijective|단사]]이므로 $\sigma(x) = x$이다. 이것은 $x \in \operatorname{supp} \sigma$와 어긋난다. 거꾸로 $x \notin \operatorname{supp} \sigma$이면 $\sigma(x) = x \notin \operatorname{supp} \sigma$이다. 따라서 $x \in \operatorname{supp} \sigma$인 것은 정확히 $\sigma(x) \in \operatorname{supp} \sigma$일 때이다.

$\sigma^{-1}(x) = x$이면 양변에 $\sigma$를 적용해 $x = \sigma(x)$이고, $\sigma(x) = x$이면 양변에 $\sigma^{-1}$을 적용해 $x = \sigma^{-1}(x)$이다([[inverse-function|역함수]]의 $\sigma^{-1} \circ \sigma = i_X$, $\sigma \circ \sigma^{-1} = i_X$). 따라서 $\operatorname{supp} \sigma^{-1} = \operatorname{supp} \sigma$이다. 앞 문단을 $\sigma^{-1}$에 쓰면 $x \in \operatorname{supp} \sigma^{-1}$인 것은 정확히 $\sigma^{-1}(x) \in \operatorname{supp} \sigma^{-1}$일 때이고, 두 받침이 같으므로 $x \in \operatorname{supp} \sigma$인 것은 정확히 $\sigma^{-1}(x) \in \operatorname{supp} \sigma$일 때이다.

$\sigma(\operatorname{supp} \sigma) = \{\sigma(x) : x \in \operatorname{supp} \sigma\}$는 첫 문단에 의해 $\operatorname{supp} \sigma$에 포함된다. 거꾸로 $y \in \operatorname{supp} \sigma$이면 $\sigma^{-1}(y) \in \operatorname{supp} \sigma$이고 $\sigma(\sigma^{-1}(y)) = y$이므로 $y \in \sigma(\operatorname{supp} \sigma)$이다.

거듭제곱. $\theta$를 $\sigma$나 $\sigma^{-1}$ 가운데 하나라 하자. 위에서 $\operatorname{supp} \theta = \operatorname{supp} \sigma$이고, $y \in \operatorname{supp} \sigma$이면 $\theta(y) \in \operatorname{supp} \sigma$, $y \notin \operatorname{supp} \sigma$이면 $\theta(y) = y$이다. $0$ 이상인 정수 $n$에 대한 귀납법으로 다음을 보인다: $x \in \operatorname{supp} \sigma$이면 $\theta^n(x) \in \operatorname{supp} \sigma$이고, $x \notin \operatorname{supp} \sigma$이면 $\theta^n(x) = x$이다. $n = 0$이면 $\theta^0 = i_X$이다. $n$에서 성립하면 [[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 $\theta^{n+1} = \theta\,\theta^n$이므로 $\theta^{n+1}(x) = \theta(\theta^n(x))$이고, 앞의 사실을 $y = \theta^n(x)$에 쓰면 된다. 이제 $n$이 $0$ 이상이면 $\theta = \sigma$로 두고, $n$이 음수이면 군의 거듭제곱의 정의에 의해 $\sigma^n = (\sigma^{-1})^{-n}$이고 $-n$이 자연수이므로 $\theta = \sigma^{-1}$로 둔다. 마지막으로 $x \notin \operatorname{supp} \sigma$이면 $\sigma^n(x) = x$이므로 $x \notin \operatorname{supp} \sigma^n$이다. 대우에 의해 $\operatorname{supp} \sigma^n \subseteq \operatorname{supp} \sigma$이다.

**(3)** $x$가 $\operatorname{supp} \sigma$에도 $\operatorname{supp} \tau$에도 속하지 않으면 $(\sigma\tau)(x) = \sigma(\tau(x)) = \sigma(x) = x$이므로 $x \notin \operatorname{supp}(\sigma\tau)$이다. 대우를 취하면 된다.

**(4)** $x \in X$의 경우를 나눈다. 두 받침은 겹치지 않으므로 $x$는 많아야 한쪽에 속한다.

- $x \in \operatorname{supp} \sigma$이면 $x \notin \operatorname{supp} \tau$이므로 $\tau(x) = x$이고 $(\sigma\tau)(x) = \sigma(x)$이다. (2)에 의해 $\sigma(x) \in \operatorname{supp} \sigma$이므로 $\sigma(x) \notin \operatorname{supp} \tau$이고 $(\tau\sigma)(x) = \tau(\sigma(x)) = \sigma(x)$이다.
- $x \in \operatorname{supp} \tau$이면 같은 방법으로 $\sigma(x) = x$이고 $(\tau\sigma)(x) = \tau(x)$이며, (2)를 $\tau$에 써서 $\tau(x) \in \operatorname{supp} \tau$이므로 $\tau(x) \notin \operatorname{supp} \sigma$이고 $(\sigma\tau)(x) = \sigma(\tau(x)) = \tau(x)$이다.
- 그 밖이면 $\sigma(x) = x$, $\tau(x) = x$이므로 $(\sigma\tau)(x) = x = (\tau\sigma)(x)$이다.

세 경우 모두 $(\sigma\tau)(x) = (\tau\sigma)(x)$이고 값은 진술의 식과 같다. 따라서 $\sigma\tau = \tau\sigma$이다. 받침: (3)에 의해 $\operatorname{supp}(\sigma\tau) \subseteq \operatorname{supp} \sigma \cup \operatorname{supp} \tau$이다. $x \in \operatorname{supp} \sigma$이면 $(\sigma\tau)(x) = \sigma(x) \ne x$이고, $x \in \operatorname{supp} \tau$이면 $(\sigma\tau)(x) = \tau(x) \ne x$이므로 반대쪽 포함도 성립한다.

**(5)** $n$에 대한 귀납법으로 (i)과 (ii)를 함께 보인다. (i)의 "많아야 하나"는 $i \ne j$이고 $x \in \operatorname{supp} \sigma_i \cap \operatorname{supp} \sigma_j$이면 $\sigma_i$와 $\sigma_j$가 서로소라는 가정에 어긋나므로 성립한다.

$n = 0$이면 $\rho$는 빈 곱 $i_X$이고([[finite-product-in-a-group|군의 유한 곱]]의 (1)), $x \in \operatorname{supp} \sigma_i$인 $i$는 없으며 $\rho(x) = x$, $\operatorname{supp} \rho = \emptyset$이다.

$n$에서 성립한다고 하고 $\sigma_1, \dots, \sigma_{n+1}$이 가정을 만족하는 열이라 하자. 처음 $n$개도 가정을 만족하므로, 그 곱을 $\rho'$이라 하면 귀납 가정이 $\rho'$에 대해 성립한다. 유한 곱의 (2)에 의해 $\rho = \rho'\,\sigma_{n+1}$이다. $\rho'$과 $\sigma_{n+1}$은 서로소이다. $x \in \operatorname{supp} \rho' \cap \operatorname{supp} \sigma_{n+1}$이면 귀납 가정의 (ii)에 의해 어떤 $i \le n$에서 $x \in \operatorname{supp} \sigma_i$이고, 이것은 $\sigma_i$와 $\sigma_{n+1}$이 서로소라는 것에 어긋나기 때문이다. 이제 (4)를 $\rho'$과 $\sigma_{n+1}$에 쓴다.

- 어떤 $i \le n$에서 $x \in \operatorname{supp} \sigma_i$이면 귀납 가정의 (ii)에 의해 $x \in \operatorname{supp} \rho'$이므로 $\rho(x) = \rho'(x)$이고, 귀납 가정의 (i)에 의해 이것은 $\sigma_i(x)$이다.
- $x \in \operatorname{supp} \sigma_{n+1}$이면 $\rho(x) = \sigma_{n+1}(x)$이다.
- 어느 $\sigma_i$의 받침에도 속하지 않으면 귀납 가정의 (ii)에 의해 $x \notin \operatorname{supp} \rho'$이므로 $\rho(x) = x$이다.

이것이 (i)이다. (4)에 의해 $\operatorname{supp} \rho = \operatorname{supp} \rho' \cup \operatorname{supp} \sigma_{n+1}$이고, 귀납 가정의 (ii)와 합치면 (ii)이다.

(iii) $x \in \operatorname{supp} \tau \cap \operatorname{supp} \rho$이면 (ii)에 의해 어떤 $i$에서 $x \in \operatorname{supp} \sigma_i$이므로 $\tau$와 $\sigma_i$가 서로소라는 것에 어긋난다. 따라서 $\tau$와 $\rho$는 서로소이고, (4)에 의해 $\tau\rho = \rho\tau$이다.

(iv) $S = \operatorname{supp} \sigma_i$로 두자. (2)에 의해 $y \in S$이면 $\sigma_i(y) \in S$이고 $\sigma_i^{-1}(y) \in S$이다. (i)에 의해 $y \in S$이면 $\rho(y) = \sigma_i(y)$이다. 또 $y \in S$이면 $z = \sigma_i^{-1}(y) \in S$이므로 $\rho(z) = \sigma_i(z) = y$이고, 양변에 $\rho^{-1}$을 적용해 $\rho^{-1}(y) = z = \sigma_i^{-1}(y)$이다. 이제 $\alpha$를 $\rho$나 $\rho^{-1}$, $\beta$를 각각 $\sigma_i$나 $\sigma_i^{-1}$이라 하면, $S$의 모든 $y$에서 $\alpha(y) = \beta(y) \in S$이다. $0$ 이상인 정수 $n$에 대한 귀납법으로 $x \in S$이면 $\alpha^n(x) = \beta^n(x) \in S$임을 보인다. $n = 0$이면 둘 다 $x$이다. $n$에서 성립하면 [[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 $\alpha^{n+1}(x) = \alpha(\alpha^n(x)) = \alpha(\beta^n(x)) = \beta(\beta^n(x)) = \beta^{n+1}(x)$이고 이것은 $S$에 속한다. $m \ge 0$이면 $\alpha = \rho$, $\beta = \sigma_i$로 두고, $m < 0$이면 군의 거듭제곱의 정의에 의해 $\rho^m = (\rho^{-1})^{-m}$, $\sigma_i^m = (\sigma_i^{-1})^{-m}$이므로 $\alpha = \rho^{-1}$, $\beta = \sigma_i^{-1}$, $n = -m$으로 둔다.
:::

## 예시와 반례

:::example[받침이 겹치지 않는 두 치환의 곱]
$X = \{1, 2, 3, 4, 5, 6\}$에서 $\sigma$는 $1$과 $2$를 맞바꾸고 나머지 점은 그대로 두며, $\tau$는 $3$, $4$, $5$를 각각 $4$, $5$, $3$으로 보내고 나머지 점은 그대로 둔다고 합시다. $\operatorname{supp} \sigma = \{1, 2\}$, $\operatorname{supp} \tau = \{3, 4, 5\}$이므로 둘은 서로소이고, $6$은 둘의 공통 고정점입니다. (4)에 의해 $\sigma\tau$는 $1, 2, 3, 4, 5, 6$을 각각 $2, 1, 4, 5, 3, 6$으로 보냅니다. 직접 계산해도 $(\sigma\tau)(3) = \sigma(4) = 4$, $(\tau\sigma)(3) = \tau(3) = 4$처럼 두 순서의 값이 같고, $\operatorname{supp}(\sigma\tau) = \{1, 2, 3, 4, 5\}$입니다.
:::

:::counterexample[받침이 겹치는 두 맞바꿈]
$X = \{1, 2, 3\}$에서 $f$는 $1$과 $2$를, $g$는 $2$와 $3$을 맞바꾼다고 합시다. $\operatorname{supp} f = \{1, 2\}$, $\operatorname{supp} g = \{2, 3\}$은 $2$를 공유합니다. $(fg)(1) = f(1) = 2$이고 $(gf)(1) = g(2) = 3$이므로 $fg \ne gf$입니다. 또 $3$은 $\operatorname{supp} g$에만 속하지만 $(fg)(3) = f(g(3)) = f(2) = 1$이고 $g(3) = 2$이므로, (4)의 식은 여기서 성립하지 않습니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에서 $1$, $2$, $3$을 각각 $2$, $3$, $1$로 보내는 $\sigma$에 대하여 $\operatorname{supp} \sigma^2$와 $\operatorname{supp} \sigma^3$은 무엇인가?]
$\sigma^2 = \sigma\sigma$는 $1$, $2$, $3$을 각각 $3$, $1$, $2$로 보내므로 $\operatorname{supp} \sigma^2 = \{1, 2, 3\} = \operatorname{supp} \sigma$입니다. $\sigma^3 = \sigma^2\sigma$([[power-in-a-group|군의 거듭제곱]]의 (1))는 $\sigma^3(1) = \sigma^2(2) = 1$, $\sigma^3(2) = \sigma^2(3) = 2$, $\sigma^3(3) = \sigma^2(1) = 3$처럼 세 점을 모두 제자리로 보내므로 $\sigma^3 = i_X$이고 $\operatorname{supp} \sigma^3 = \emptyset$입니다. (2)의 포함 $\operatorname{supp} \sigma^n \subseteq \operatorname{supp} \sigma$는 등호일 수도, 진부분집합일 수도 있습니다.
:::

:::check[바로 위 질문의 $\sigma$와 $\sigma^2$는 서로소인가? 교환되는가?]
서로소가 아닙니다. 두 받침이 모두 $\{1, 2, 3\}$입니다. 그러나 [[laws-of-exponents|지수법칙]]의 (1)에 의해 $\sigma\sigma^2 = \sigma^3 = \sigma^2\sigma$이므로 교환됩니다. (4)의 역, 곧 "교환되면 서로소이다"는 성립하지 않을 수 있습니다.
:::
