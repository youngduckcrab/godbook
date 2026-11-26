---
title: 치환의 궤도
title_en: Orbits of a Permutation
aliases: [궤도, 치환이 정하는 동치관계, 궤도의 모양, orbit of a permutation, orbits under a permutation]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: "치환 σ 에 대하여 σⁿ(x) = y 인 정수 n 이 있을 때 x ∼ y 로 정한 관계는 동치관계이고, x 의 동치류가 σ 의 궤도 {σⁿ(x) : n ∈ ℤ} 이다. 궤도 전체는 분할이고, 원소가 하나인 궤도는 고정점의 것이며, 원소가 k 개인 유한한 궤도는 x, σ(x), …, σ^(k−1)(x) 가 서로 다르고 σᵏ(x) = x 인 모양이다."
requires: [set, subset, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, pigeonhole-principle, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, division-theorem, congruence-modulo-n, equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, equivalence-classes-form-a-partition, partition, partition-into-equal-blocks, group, group-basic-properties, subgroup, subgroup-examples, symmetric-group, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, group-homomorphism, homomorphism-kernel-and-image, subgroups-of-cyclic-groups, support-of-a-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "5.4절 Exercises, 연습문제 32 (p.73); 5.1절 Theorem 5.9 의 증명 (p.62); 5.4절 연습문제 12 (p.72); 14.1절 Example 14.7 (p.169)"
    checked: original
    note: "출처 연습문제 5.32(p.73)는 σ ∈ S_X 에 대해 '어떤 n ∈ ℤ 에서 σⁿ(x) = y 이면 x ∼ y' 로 정하고 (a) 동치관계임, (b) 궤도 O_{x,σ} = {y : x ∼ y} 의 계산, (c) 두 궤도가 겹치면 같다는 것과 '궤도는 ∼ 의 동치류' 라는 것, (d) ⟨σ⟩ 가 추이적일 조건을 묻는다. 이 항목의 정의와 (1), (2)는 (a), (c)와 같은 내용이고, 기호는 출처의 O_{x,σ} 대신 O_σ(x) 를 쓴다. 출처 Theorem 5.9 의 증명(p.62)은 X₁ = {σ(1), σ²(1), …} 로 두고 'X 가 유한이므로 X₁ 은 유한' 이라고만 적는다. (5), (6)의 궤도의 모양(x, σ(x), …, σ^{k−1}(x) 가 서로 다르고 σᵏ(x) = x, 원소의 개수가 k)은 출처가 명제로 진술하지 않는다(검색어 'orbit' 23건은 연습문제 5.32 와 14·15장의 작용의 궤도, 'finite since' 1건은 위의 Theorem 5.9 의 증명, 'σ k (' 1건은 23장의 다른 내용이었다. 5장 연습문제 1–37 을 처음부터 읽었고 가장 가까운 것은 연습문제 12 'σ ∈ S_n 의 위수가 n 이면 σⁱ = σʲ 인 것은 정확히 i ≡ j (mod n) 일 때' 이다). (6)의 (i)은 그 연습문제를 한 점 x 에서의 값으로 바꾼 꼴과 같은 발상이다. 증명(정수의 덧셈군의 부분군과 비둘기집 원리)은 이 사이트가 썼다. 출처 14.1절(p.169)의 G-동치와 궤도 O_x 는 군의 작용에 대한 것이고, (1)의 O_σ(x) = {τ(x) : τ ∈ ⟨σ⟩} 는 그것과 맞출 때 쓰는 꼴이다. 예시 '일곱 점 위의 치환의 궤도' 는 출처 연습문제 5.32(b)(p.73)가 S₅ 의 세 치환의 궤도를 계산하게 하는 것, Example 14.7(p.169)이 치환군의 궤도 {1, 2, 3}, {4, 5} 를 적는 것과 같은 발상이다. 확인 질문 '$X = \\{1, 2, 3, 4, 5\\}$에서 $\\sigma$가 $1, 2, 3, 4, 5$를 각각 $2, 3, 1, 5, 4$로 보낼 때 $\\sigma^{10}(1)$은 무엇인가?' 는 출처 연습문제 5.2 (j)(p.71) (1 2 5 4)¹⁰⁰ 의 계산과 같은 발상이다. 그 σ 는 (1 2 3)(4 5) 로, 출처 연습문제 5.32 (b)(p.73)의 β 와 같은 치환이고, 출처 Example 14.7(p.169)의 원소 여섯 개인 치환군은 이 치환의 거듭제곱 전체와 같은 집합이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(순환치환 (8) 에 항등치환과 ℤ 위의 옮기기를 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $\sigma \in S_X$라 하자. $S_X$와 그 곱(합성)은 [[symmetric-group|대칭군]], 거듭제곱 $\sigma^n$($n \in \mathbb{Z}$, $\sigma^0 = i_X$)은 [[power-in-a-group|군의 거듭제곱]], $\langle \sigma \rangle = \{\sigma^n : n \in \mathbb{Z}\}$는 [[cyclic-subgroup|순환 부분군]], 받침 $\operatorname{supp} \sigma$와 고정점은 [[support-of-a-permutation|치환의 받침]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 뜻이고, 합동은 [[congruence-modulo-n|합동]]의 것이다.

$X$ 위의 관계 $\sim_\sigma$를 다음과 같이 정한다: $x, y \in X$에 대하여 $x \sim_\sigma y$인 것은 정확히 $\sigma^n(x) = y$인 정수 $n$이 있을 때이다. $x \in X$에 대하여
$$O_\sigma(x) = \{\sigma^n(x) : n \in \mathbb{Z}\}$$
를 $\sigma$에 의한 $x$의 **궤도**(orbit)라 한다. 곧 $y \in O_\sigma(x)$인 것은 정확히 $\sigma^n(x) = y$인 정수 $n$이 있을 때이다. $X$의 부분집합 $O$가 $\sigma$의 **궤도**인 것은 정확히 어떤 $x \in X$에서 $O = O_\sigma(x)$일 때이다.

다음이 성립한다.

1. (동치관계) $\sim_\sigma$는 $X$ 위의 [[equivalence-relation|동치관계]]이다. 모든 $x \in X$에서 $O_\sigma(x)$는 $\sim_\sigma$의 $x$를 포함하는 [[equivalence-class|동치류]]이고, $x \in O_\sigma(x)$이며, $O_\sigma(x) = \{\tau(x) : \tau \in \langle \sigma \rangle\}$이다.
2. (분할) $\sigma$의 궤도 전체의 집합 $\{O_\sigma(x) : x \in X\}$는 $X$의 [[partition|분할]]이다. $x, y \in X$에 대하여 $y \in O_\sigma(x)$인 것은 정확히 $O_\sigma(y) = O_\sigma(x)$일 때이다. 특히 모든 정수 $m$에서 $\sigma^m(x) \in O_\sigma(x)$이고 $O_\sigma(\sigma^m(x)) = O_\sigma(x)$이다.
3. (역치환의 궤도) 모든 $x \in X$에서 $O_{\sigma^{-1}}(x) = O_\sigma(x)$이다.
4. (고정점과 받침) $x \in X$에 대하여 $O_\sigma(x) = \{x\}$인 것은 정확히 $\sigma(x) = x$일 때, 곧 $x \notin \operatorname{supp} \sigma$일 때이다. $x \in \operatorname{supp} \sigma$이면 $O_\sigma(x) \subseteq \operatorname{supp} \sigma$이고, $O_\sigma(x)$는 서로 다른 두 원소 $x$와 $\sigma(x)$를 갖는다.
5. (유한한 궤도) $x \in X$에 대하여 $O_\sigma(x)$가 유한집합인 것은 정확히 $\sigma^n(x) = x$인 자연수 $n$이 있을 때이다. $X$가 유한집합이면 $\sigma$의 모든 궤도는 유한집합이다.
6. (궤도의 모양) $x \in X$이고 $O = O_\sigma(x)$가 유한집합이며 $k = |O|$라 하자. 그러면 $k$는 자연수이고 다음이 성립한다.
   - (i) 정수 $m$, $m'$에 대하여 $\sigma^m(x) = \sigma^{m'}(x)$인 것은 정확히 $m \equiv m' \pmod k$일 때이다. 특히 $\sigma^m(x) = x$인 것은 정확히 $k \mid m$일 때이고, $\sigma^k(x) = x$이며, $k$는 $\sigma^n(x) = x$인 자연수 $n$ 가운데 가장 작은 것이다.
   - (ii) 각 $i \in \{1, \dots, k\}$에 $\sigma^{i-1}(x)$를 대응시키는 함수 $\{1, \dots, k\} \to O$는 전단사이다. 곧 $x, \sigma(x), \dots, \sigma^{k-1}(x)$는 서로 다르고 $O = \{\sigma^i(x) : i \in \mathbb{Z},\ 0 \le i \le k - 1\}$이다.
   - (iii) $0 \le i \le k - 2$인 정수 $i$에서 $\sigma(\sigma^i(x)) = \sigma^{i+1}(x)$이고, $\sigma(\sigma^{k-1}(x)) = x$이다.
   - (iv) $O$의 모든 원소 $y$에서 $\sigma^k(y) = y$이다.
7. (궤도의 개수) $X$가 유한집합이면 $\sigma$의 궤도 전체의 집합은 유한집합이고, 그 원소의 개수는 $|X|$ 이하이다.
:::

:::english
Let $X$ be a set and $\sigma \in S_X$. The group $S_X$ and its product (composition) are those of the entry on the symmetric group, the powers $\sigma^n$ ($n \in \mathbb{Z}$, $\sigma^0 = i_X$) are powers in the group, $\langle \sigma \rangle = \{\sigma^n : n \in \mathbb{Z}\}$ is the cyclic subgroup, and the support $\operatorname{supp} \sigma$ and fixed points are those of the entry on the support of a permutation. Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements, and congruence is as in the entry on congruence modulo $n$.

Define a relation $\sim_\sigma$ on $X$ as follows: for $x, y \in X$, $x \sim_\sigma y$ exactly when there is an integer $n$ with $\sigma^n(x) = y$. For $x \in X$ the set
$$O_\sigma(x) = \{\sigma^n(x) : n \in \mathbb{Z}\}$$
is called the **orbit** of $x$ under $\sigma$. Thus $y \in O_\sigma(x)$ exactly when $\sigma^n(x) = y$ for some integer $n$. A subset $O$ of $X$ is an **orbit** of $\sigma$ exactly when $O = O_\sigma(x)$ for some $x \in X$.

The following hold.

1. (Equivalence relation) $\sim_\sigma$ is an equivalence relation on $X$. For every $x \in X$, $O_\sigma(x)$ is the equivalence class of $\sim_\sigma$ containing $x$, $x \in O_\sigma(x)$, and $O_\sigma(x) = \{\tau(x) : \tau \in \langle \sigma \rangle\}$.
2. (Partition) The set $\{O_\sigma(x) : x \in X\}$ of all orbits of $\sigma$ is a partition of $X$. For $x, y \in X$, $y \in O_\sigma(x)$ exactly when $O_\sigma(y) = O_\sigma(x)$. In particular, for every integer $m$, $\sigma^m(x) \in O_\sigma(x)$ and $O_\sigma(\sigma^m(x)) = O_\sigma(x)$.
3. (Orbits of the inverse) $O_{\sigma^{-1}}(x) = O_\sigma(x)$ for every $x \in X$.
4. (Fixed points and support) For $x \in X$, $O_\sigma(x) = \{x\}$ exactly when $\sigma(x) = x$, that is, when $x \notin \operatorname{supp} \sigma$. If $x \in \operatorname{supp} \sigma$, then $O_\sigma(x) \subseteq \operatorname{supp} \sigma$, and $O_\sigma(x)$ has the two distinct elements $x$ and $\sigma(x)$.
5. (Finite orbits) For $x \in X$, $O_\sigma(x)$ is finite exactly when there is a natural number $n$ with $\sigma^n(x) = x$. If $X$ is finite, then every orbit of $\sigma$ is finite.
6. (Shape of an orbit) Let $x \in X$, suppose $O = O_\sigma(x)$ is finite, and let $k = |O|$. Then $k$ is a natural number and the following hold.
   - (i) For integers $m$, $m'$, $\sigma^m(x) = \sigma^{m'}(x)$ exactly when $m \equiv m' \pmod k$. In particular $\sigma^m(x) = x$ exactly when $k \mid m$, $\sigma^k(x) = x$, and $k$ is the least natural number $n$ with $\sigma^n(x) = x$.
   - (ii) The function $\{1, \dots, k\} \to O$ assigning $\sigma^{i-1}(x)$ to each $i \in \{1, \dots, k\}$ is a bijection. That is, $x, \sigma(x), \dots, \sigma^{k-1}(x)$ are distinct and $O = \{\sigma^i(x) : i \in \mathbb{Z},\ 0 \le i \le k - 1\}$.
   - (iii) For integers $i$ with $0 \le i \le k - 2$, $\sigma(\sigma^i(x)) = \sigma^{i+1}(x)$, and $\sigma(\sigma^{k-1}(x)) = x$.
   - (iv) $\sigma^k(y) = y$ for every element $y$ of $O$.
7. (Number of orbits) If $X$ is finite, then the set of all orbits of $\sigma$ is finite and has at most $|X|$ elements.
:::

## 직관

$\sigma$를 "각 점을 다음 자리로 옮기는 규칙"으로 보면, 점 $x$에서 출발해 $\sigma$를 앞으로도 뒤로도 몇 번이든 적용해 닿는 곳을 모은 것이 궤도입니다. 회전목마에 비유하면 한 말이 돌며 지나가는 자리 전체가 궤도이고, 고정점은 돌지 않는 말입니다. 비유가 정의와 맞는 곳은 "앞으로도 뒤로도"가 정수 지수 $n$이라는 점이고, 맞지 않는 곳은 $X$가 무한집합이면 끝없이 새 자리로 가서 돌아오지 않는 궤도가 있을 수도 있다는 점입니다(아래 반례).

(6)은 유한한 궤도가 원 모양이라는 것입니다. $x$에서 출발해 $\sigma$를 적용하면 $x, \sigma(x), \sigma^2(x), \dots$가 겹치지 않고 나오다가, 궤도의 원소를 모두 한 번씩 지난 바로 다음, 곧 $k$번째에 처음으로 $x$로 돌아옵니다. 그 뒤로는 같은 원을 되풀이하므로 지수는 $k$로 나눈 나머지만 중요합니다.

궤도를 동치류로 정의해 두면 궤도 전체가 저절로 분할이 됩니다((2)). 원소가 둘 이상인 궤도들은 받침을 나누어 가지고, 받침 밖의 점은 원소가 하나인 궤도를 이룹니다((4)).

## 증명

:::idea
동치관계는 지수법칙으로 확인한다. 궤도의 모양은 $\sigma^m(x) = x$인 정수 $m$ 전체가 정수의 덧셈군의 부분군 $d\mathbb{Z}$라는 것에서 나온다. $d \ne 0$이면 나눗셈 정리로 $\{1, \dots, d\}$에서 궤도로의 전단사를 만들고, 궤도가 유한하면 비둘기집 원리로 $d \ne 0$을 얻는다.
:::

:::hint
$K = \{m \in \mathbb{Z} : \sigma^m(x) = x\}$는 각 정수 $m$에 $\sigma^m$을 대응시키는 준동형에 의한, $x$를 고정하는 치환 전체의 부분군의 역상이다.
:::

:::hint
궤도가 원소 $k$개를 가지면 $\sigma^1(x), \dots, \sigma^{k+1}(x)$의 $k + 1$개의 값 가운데 같은 것이 있다.
:::

:::proof
지수의 계산은 [[laws-of-exponents|지수법칙]]의 (1)($\sigma^m\sigma^n = \sigma^{m+n}$)과 [[symmetric-group|대칭군]]의 (1)(곱은 합성, $(\alpha\beta)(y) = \alpha(\beta(y))$)이다. 이 둘로 모든 정수 $m$, $n$과 $y \in X$에서 $\sigma^m(\sigma^n(y)) = \sigma^{m+n}(y)$이다. 이것을 (가)라 부른다. 정수의 순서와 계산은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), 그 진술에서 받아들인 계산 법칙이고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]의 사실이다.

**(1)** 반사성: $\sigma^0 = i_X$이므로 $\sigma^0(x) = x$이다. 대칭성: $\sigma^n(x) = y$이면 (가)에 의해 $\sigma^{-n}(y) = \sigma^{-n}(\sigma^n(x)) = \sigma^0(x) = x$이다. 추이성: $\sigma^n(x) = y$, $\sigma^m(y) = z$이면 (가)에 의해 $\sigma^{m+n}(x) = \sigma^m(\sigma^n(x)) = z$이다. 따라서 $\sim_\sigma$는 동치관계이다.

$x$를 포함하는 동치류는 $\{y \in X : y \sim_\sigma x\}$이다. 대칭성에 의해 $y \sim_\sigma x$인 것은 정확히 $x \sim_\sigma y$, 곧 $y \in O_\sigma(x)$일 때이므로 이 동치류는 $O_\sigma(x)$이다. 반사성에 의해 $x \in O_\sigma(x)$이다. [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $\tau \in \langle \sigma \rangle$인 것은 정확히 어떤 정수 $n$에서 $\tau = \sigma^n$일 때이므로 $\{\tau(x) : \tau \in \langle \sigma \rangle\} = \{\sigma^n(x) : n \in \mathbb{Z}\}$이다.

**(2)** (1)과 [[equivalence-classes-form-a-partition|동치류 전체는 분할을 이룬다]]에 의해 궤도 전체는 $X$의 분할이다. [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $O_\sigma(y) = O_\sigma(x)$인 것은 정확히 $y \sim_\sigma x$일 때이고, 대칭성에 의해 이것은 $x \sim_\sigma y$, 곧 $y \in O_\sigma(x)$와 같다. $\sigma^m(x) \in O_\sigma(x)$는 정의이고, 방금 것에 의해 $O_\sigma(\sigma^m(x)) = O_\sigma(x)$이다.

**(3)** [[laws-of-exponents|지수법칙]]의 (3)에 의해 모든 정수 $n$에서 $(\sigma^{-1})^n = \sigma^{-n}$이다. 따라서 $O_{\sigma^{-1}}(x) = \{\sigma^{-n}(x) : n \in \mathbb{Z}\}$이고, $n$이 모든 정수를 지날 때 $-n$도 모든 정수를 지나므로 이것은 $O_\sigma(x)$이다.

**(4)** $\sigma(x) = x$이면 $x \notin \operatorname{supp} \sigma$이므로 [[support-of-a-permutation|치환의 받침]]의 (2)에 의해 모든 정수 $n$에서 $\sigma^n(x) = x$이고, $O_\sigma(x) = \{x\}$이다. 거꾸로 $O_\sigma(x) = \{x\}$이면 $\sigma(x) = \sigma^1(x) \in O_\sigma(x)$이므로 $\sigma(x) = x$이다. $x \in \operatorname{supp} \sigma$이면 받침의 (2)에 의해 모든 정수 $n$에서 $\sigma^n(x) \in \operatorname{supp} \sigma$이므로 $O_\sigma(x) \subseteq \operatorname{supp} \sigma$이고, $\sigma(x) \ne x$이며 둘 다 $O_\sigma(x)$의 원소이다.

**(5), (6)의 준비.** $x \in X$를 고정하고 $O = O_\sigma(x)$, $K = \{m \in \mathbb{Z} : \sigma^m(x) = x\}$라 하자.

*첫째, $K$의 모양.* [[group-homomorphism|군 준동형]]의 (7)(ii)에 의해 $\gamma(m) = \sigma^m$인 $\gamma : \mathbb{Z} \to S_X$는 $(\mathbb{Z}, +)$에서 $S_X$로의 준동형이다([[number-groups|수로 이루어진 군]]). [[subgroup-examples|부분군의 예]]의 (6)에 의해 $F = \{f \in S_X : f(x) = x\}$는 $S_X$의 부분군이다. $K = \{m \in \mathbb{Z} : \gamma(m) \in F\}$이므로 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (5)에 의해 $K$는 $(\mathbb{Z}, +)$의 부분군이고, [[subgroups-of-cyclic-groups|순환군의 부분군]]의 (2)에 의해 $K = d\mathbb{Z}$인 $0$ 이상의 정수 $d$가 있으며, $K \ne \{0\}$이면 $d$는 $K$의 가장 작은 양의 원소이다. 부분군의 예의 (1)에 의해 정수 $t$에 대하여 $t \in K$인 것은 정확히 $d \mid t$일 때이다.

*둘째, 같은 값의 조건.* 정수 $m$, $m'$에 대하여 $\sigma^m(x) = \sigma^{m'}(x)$인 것은 정확히 $m - m' \in K$일 때이다. (가)에 의해 $\sigma^m(x) = \sigma^{m'}(\sigma^{m-m'}(x))$이고 $\sigma^{m'}(x) = \sigma^{m'}(x)$이므로, $\sigma^{m'}$이 단사([[symmetric-group|대칭군]]의 원소)인 것에 의해 두 값이 같은 것은 정확히 $\sigma^{m-m'}(x) = x$일 때이기 때문이다.

*셋째, $d \ge 1$이면 전단사가 있다.* $d \ge 1$이라 하고, 각 $i \in \{1, \dots, d\}$에 $\sigma^{i-1}(x)$를 대응시키는 함수 $f : \{1, \dots, d\} \to O$를 생각한다([[recursion-theorem|재귀 정리]]의 (1). 값은 $O$의 정의에 의해 $O$에 속한다). 단사: $f(i) = f(j)$이면 둘째에 의해 $(i - 1) - (j - 1) \in K$이므로 $i - 1 = qd + (j - 1)$인 정수 $q$가 있다. 또 $i - 1 = 0 \cdot d + (i - 1)$이고 $0 \le i - 1 < d$, $0 \le j - 1 < d$이므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $j - 1 = i - 1$, 곧 $i = j$이다. 전사: $y \in O$이면 $y = \sigma^m(x)$인 정수 $m$이 있다. 나눗셈 정리에 의해 $m = qd + r$, $0 \le r < d$인 정수 $q$, $r$이 있고, $m - r = qd \in K$이므로 둘째에 의해 $y = \sigma^r(x) = f(r + 1)$이며 $r + 1 \in \{1, \dots, d\}$이다. 따라서 $f$는 [[injective-surjective-bijective|전단사]]이고, [[finite-set|유한집합]]의 정의에 의해 $O$는 원소를 $d$개 갖는 유한집합이다.

*넷째, $O$가 유한이면 $d \ge 1$이다.* $O$가 원소를 $k$개 갖는다고 하자. 각 $i \in \{1, \dots, k + 1\}$에 $\sigma^i(x) \in O$를 대응시키는 함수 $\{1, \dots, k + 1\} \to O$를 생각하면, 정의역은 원소를 $k + 1$개 갖고([[finite-set|유한집합]]의 (F2)) $k + 1 > k$이므로 [[pigeonhole-principle|비둘기집 원리]]의 (2)에 의해 이 함수는 단사가 아니다. 곧 $i \ne i'$이고 $\sigma^i(x) = \sigma^{i'}(x)$인 $i, i'$이 있다. 둘째에 의해 $i - i'$과 $i' - i$는 둘 다 $K$에 속하고, (Z5)에 의해 둘 가운데 하나는 양수이다. 따라서 $K \ne \{0\}$이고 $d$는 $K$의 가장 작은 양의 원소이므로 $d \ge 1$이다.

**(5)** $\sigma^n(x) = x$인 자연수 $n$이 있으면 $n \in K$이므로 $K \ne \{0\}$이고 $d \ge 1$이며, 셋째에 의해 $O$는 유한이다. 거꾸로 $O$가 유한이면 넷째에 의해 $d \ge 1$이고 $d \in K$이므로 $d$가 그런 자연수이다. $X$가 유한이면 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $X$의 부분집합인 $O$도 유한이다.

**(6)** $O$가 유한이고 $k = |O|$이면 넷째에 의해 $d \ge 1$이고, 셋째에 의해 $O$는 원소를 $d$개 갖는다. [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $k = d$이고, 따라서 $k$는 자연수이며 $K = k\mathbb{Z}$이다.

(i) 둘째에 의해 $\sigma^m(x) = \sigma^{m'}(x)$인 것은 정확히 $m - m' \in K$, 곧 $k \mid (m - m')$일 때이고, 이것은 [[congruence-modulo-n|합동]]의 정의에 의해 $m \equiv m' \pmod k$이다. $m' = 0$으로 두면 $\sigma^m(x) = x$인 것은 정확히 $k \mid m$일 때이다. $k \mid k$이므로 $\sigma^k(x) = x$이다. $n$이 자연수이고 $\sigma^n(x) = x$이면 $k \mid n$이므로 $k$는 $n$의 양의 약수이고, [[prime-number|소수]]의 진술에 의해 $k \le n$이다.

(ii) 셋째의 $f$가 그 함수이고 전단사이다. 단사이므로 $x = \sigma^0(x), \dots, \sigma^{k-1}(x)$는 서로 다르고, 전사이므로 $O$는 $0 \le i \le k - 1$인 $\sigma^i(x)$ 전체이다.

(iii) (가)에서 $m = 1$로 두면 $\sigma(\sigma^i(x)) = \sigma^{i+1}(x)$이다. $i = k - 1$이면 이것은 $\sigma^k(x) = x$이다((i)).

(iv) $y \in O$이면 $y = \sigma^m(x)$인 정수 $m$이 있고, (가)와 (i)에 의해 $\sigma^k(y) = \sigma^{k+m}(x) = \sigma^m(\sigma^k(x)) = \sigma^m(x) = y$이다.

**(7)** (2)에 의해 궤도 전체는 $X$의 분할이므로, [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (2)에 의해 유한집합이고 원소의 개수는 $|X|$ 이하이다.
:::

## 예시와 반례

:::example[일곱 점 위의 치환의 궤도]
$X = \{1, 2, 3, 4, 5, 6, 7\}$에서 $\sigma$가 $1, 2, 3, 4, 5, 6, 7$을 각각 $4, 5, 3, 6, 2, 1, 7$로 보낸다고 합시다. $1$에서 출발하면 $\sigma(1) = 4$, $\sigma^2(1) = \sigma(4) = 6$, $\sigma^3(1) = \sigma(6) = 1$이므로 $3$이 $\sigma^n(1) = 1$인 가장 작은 자연수이고, (6)에 의해 $O_\sigma(1) = \{1, 4, 6\}$이며 원소는 $3$개입니다. 같은 방법으로 $\sigma(2) = 5$, $\sigma^2(2) = \sigma(5) = 2$이므로 $O_\sigma(2) = \{2, 5\}$이고, $3$과 $7$은 고정점이므로 (4)에 의해 $O_\sigma(3) = \{3\}$, $O_\sigma(7) = \{7\}$입니다. 궤도는 이 넷이고 $X$를 분할합니다. $\operatorname{supp} \sigma = \{1, 2, 4, 5, 6\}$은 원소가 둘 이상인 두 궤도로 이루어져 있습니다.
:::

:::counterexample[정수 위의 한 칸 옮기기는 유한한 궤도를 갖지 않는다]
$X = \mathbb{Z}$이고 $\sigma(n) = n + 1$이라 합시다. $\tau(n) = n - 1$로 두면 $\sigma \circ \tau = \tau \circ \sigma = i_{\mathbb{Z}}$이므로 $\sigma$는 전단사이고 $\sigma \in S_{\mathbb{Z}}$입니다. [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $\tau = \sigma^{-1}$입니다. 자연수 $m$에 대한 귀납법과 [[power-in-a-group|군의 거듭제곱]]의 (2)로 $\sigma^m(0) = m$, $\tau^m(0) = -m$이고, 군의 거듭제곱의 정의에 의해 $\sigma^{-m} = \tau^m$이므로 모든 정수 $m$에서 $\sigma^m(0) = m$입니다. 따라서 $O_\sigma(0) = \mathbb{Z}$이고, $\sigma^n(0) = n \ne 0$인 자연수 $n$만 있습니다. 따라서 (5)에 의해 이 궤도는 유한집합이 아닙니다. (6)의 원 모양은 궤도가 유한할 때의 이야기입니다. 이 $\sigma$에는 고정점이 없고 궤도는 $\mathbb{Z}$ 하나뿐입니다.
:::

## 확인 질문

:::check[항등치환 $i_X$의 궤도는 무엇인가? $X$가 원소를 $5$개 가지면 궤도는 몇 개인가?]
모든 $x$가 고정점이므로 (4)에 의해 $O_{i_X}(x) = \{x\}$입니다. 궤도 전체는 $\{\{x\} : x \in X\}$이고, $x$에 $\{x\}$를 대응시키는 함수는 $X$에서 이 집합으로의 전단사이므로($\{x\} = \{y\}$이면 $x = y$) [[finite-set|유한집합]]의 (F4)에 의해 궤도는 $5$개입니다. (7)의 부등식이 등호가 되는 경우입니다.
:::

:::check[$X = \{1, 2, 3, 4, 5\}$에서 $\sigma$가 $1, 2, 3, 4, 5$를 각각 $2, 3, 1, 5, 4$로 보낼 때 $\sigma^{10}(1)$은 무엇인가?]
$\sigma(1) = 2$, $\sigma^2(1) = 3$, $\sigma^3(1) = 1$이므로 $O_\sigma(1) = \{1, 2, 3\}$은 원소가 $3$개입니다. $10 \equiv 1 \pmod 3$이므로 (6)의 (i)에 의해 $\sigma^{10}(1) = \sigma^1(1) = 2$입니다.
:::
