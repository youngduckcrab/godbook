---
title: 서로소인 순환치환으로의 분해
title_en: Decomposition into Disjoint Cycles
aliases: [순환 분해, 순환치환 분해, 서로소인 순환치환의 곱, 서로소 순환 분해, cycle decomposition, disjoint cycle decomposition, product of disjoint cycles]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 유한집합의 치환 σ 는 서로 다른 두 원소를 갖는 궤도마다 그 궤도 위에서만 σ 와 같은 순환치환을 만들어 그것들을 어떤 순서로든 곱한 것과 같다. 거꾸로 σ 를 서로소인 순환치환들의 곱으로 쓰면 그 순환치환들의 집합은 σ 로 정해진다.
requires: [set, subset, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, adding-or-removing-an-element, partition, recursion-theorem, group, symmetric-group, finite-product-in-a-group, support-of-a-permutation, orbits-of-a-permutation, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "5.1절 Theorem 5.9 와 그 증명, Example 5.10 (p.62–63); 6.5절 Exercises, 연습문제 15 (p.79); 14.2절 Example 14.14 (p.171)"
    checked: original
    note: "출처 Theorem 5.9(p.62)는 'S_n 의 모든 치환은 서로소인 순환치환의 곱으로 쓸 수 있다' 이다. 출처의 증명은 X₁ = {σ(1), σ²(1), …} 로 두고 'X₁ 에 없는 첫 정수 i' 로 X₂ 를 만드는 일을 '이렇게 계속하면(Continuing in this manner)' 되풀이해 X₁, …, X_r 을 얻은 뒤, X_i 위에서 σ 이고 밖에서 항등인 σ_i 로 σ = σ₁σ₂⋯σ_r 이라 적는다(그 곱의 계산은 적지 않는다). 이 항목은 되풀이 대신 궤도 전체가 이루는 분할(orbits-of-a-permutation)을 쓰고, 출처의 σ_i 와 같은 식의 σ_O 가 순환치환이라는 것은 cycle-permutation 의 (7), 곱이 σ 라는 것은 support-of-a-permutation 의 (5)로 보인다. 출처의 X_i 에는 원소가 하나인 것도 들어갈 수 있는데(σ_i 가 항등치환), 이 항목은 서로 다른 두 원소를 갖는 궤도만 쓰고 항등치환은 빈 곱으로 쓴다. 유일성 (3)은 출처가 명제로 진술하지 않는다(검색어 'unique' 와 'cycle' 이 30자 안에 함께 나오는 곳 0건, 'cycle decomposition' 5건, 'product of disjoint cycles' 를 포함한 'product of (disjoint )?cycles' 8건을 읽었다). 다만 출처 연습문제 6.15(p.79)는 '순환 분해(the cycle decomposition)' 의 순환치환들의 길이를 순서 없는 목록으로 정의하고, 그 예 σ = (1 2)(3 4 5)(7 8)(9) 에 길이 1 인 (9) 를 넣는다. Example 14.14(p.171)도 'a cycle decomposition' 의 길이들로 켤레를 말한다. 예시 '여섯 점 위의 치환의 분해' 는 출처 Example 5.10(p.62–63)이 두 줄 표기의 치환을 순환치환의 곱으로 쓰는 것, 5.4절 연습문제 1(p.71)이 두 줄 표기의 치환을 순환 표기로 쓰게 하는 것과 같은 발상이고, 확인 질문 '$X = \\{1, 2, 3, 4\\}$에서 $1, 2, 3, 4$를 각각 $3, 4, 1, 2$로 보내는 치환을 서로소인 순환치환의 곱으로 쓰면?' 도 같은 종류이다. 그 답 (1 3)(2 4) 는 출처 5.2절(p.68)이 정사각형의 회전 r² 으로 적는 치환이다. 반례 '서로소가 아닌 순환치환의 곱으로 쓰는 방법은 여럿일 수 있다' 는 출처 Example 5.13(p.63)이 호환의 곱으로 쓰는 방법이 하나가 아니라고 하는 것과 같은 종류의 물음이고, 그 등식 (1 2 3) = (1 2)(2 3) 은 출처 Example 5.7(p.61)이 서로소가 아닌 순환치환의 곱은 더 간단해질 수 있다고 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(호환의 곱 (1) 을 오른쪽부터 계산해 대조, 켤레 (2)(3) 의 유한 가정 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[finite-set|유한집합]]이고 $\sigma \in S_X$라 하자. $S_X$는 [[symmetric-group|대칭군]], 유한 곱과 빈 곱은 [[finite-product-in-a-group|군의 유한 곱]], 받침과 서로소는 [[support-of-a-permutation|치환의 받침]], 궤도 $O_\sigma(x)$는 [[orbits-of-a-permutation|치환의 궤도]], 순환치환과 그 길이는 [[cycle-permutation|순환치환]]의 것이다.

$\sigma$의 궤도 가운데 서로 다른 두 원소를 갖는 것 전체의 집합을 $\mathcal{O}(\sigma)$라 한다. $O \in \mathcal{O}(\sigma)$이면, 각 $y \in X$에 $y \in O$일 때 $\sigma(y)$를, $y \notin O$일 때 $y$를 대응시키는 함수를 $\sigma_O$라 한다.

1. ($\sigma_O$는 순환치환) $O \in \mathcal{O}(\sigma)$이면 $O$는 유한집합이고 $|O| \ge 2$이며, $\sigma_O$는 길이 $|O|$인 순환치환이고 $\operatorname{supp} \sigma_O = O$이다. $O, O' \in \mathcal{O}(\sigma)$이고 $O \ne O'$이면 $\sigma_O$와 $\sigma_{O'}$은 서로소이다.
2. (존재) $\mathcal{O}(\sigma)$는 유한집합이다. $m = |\mathcal{O}(\sigma)|$라 하면 전단사 $h : \{1, \dots, m\} \to \mathcal{O}(\sigma)$가 있고, 그런 모든 $h$에 대하여 $i$번째 항이 $\sigma_{h(i)}$인 열은 서로 다른 두 항이 서로소인 순환치환의 열이며
   $$\sigma = \sigma_{h(1)} \sigma_{h(2)} \cdots \sigma_{h(m)}$$
   이다. 따라서 유한집합의 모든 치환은, 서로 다른 자리의 두 항이 서로소인 순환치환의 열(길이 $0$ 이상)의 곱이다. $\sigma = i_X$인 것은 정확히 $m = 0$일 때이고, 그때 위의 곱은 빈 곱이다.
3. (유일성) $n \ge 0$이 정수이고 $\gamma_1, \dots, \gamma_n$이 순환치환의 열로서 $i \ne j$이면 $\gamma_i$와 $\gamma_j$가 서로소이고 $\gamma_1 \cdots \gamma_n = \sigma$라 하자. 그러면 $i \ne j$이면 $\gamma_i \ne \gamma_j$이고,
   $$\{\gamma_1, \dots, \gamma_n\} = \{\sigma_O : O \in \mathcal{O}(\sigma)\}$$
   이며 $n = m$이다. 또 각 $\operatorname{supp} \gamma_i$는 $\mathcal{O}(\sigma)$의 원소이고 $\gamma_i = \sigma_{\operatorname{supp} \gamma_i}$이다. 곧 $\sigma$를 서로소인 순환치환들의 곱으로 쓸 때, 곱하는 순서를 따지지 않으면 그 순환치환들의 집합은 $\sigma$로 정해진다.
:::

:::english
Let $X$ be a finite set and $\sigma \in S_X$. $S_X$ is the symmetric group, finite products and the empty product are those of the entry on finite products in a group, the support and disjointness are as in the entry on the support of a permutation, orbits $O_\sigma(x)$ are as in the entry on orbits of a permutation, and cycles and their lengths are as in the entry on cycles.

Let $\mathcal{O}(\sigma)$ be the set of all orbits of $\sigma$ that have two distinct elements. For $O \in \mathcal{O}(\sigma)$, let $\sigma_O$ be the function assigning to each $y \in X$ the element $\sigma(y)$ if $y \in O$ and $y$ if $y \notin O$.

1. ($\sigma_O$ is a cycle) If $O \in \mathcal{O}(\sigma)$, then $O$ is finite, $|O| \ge 2$, $\sigma_O$ is a cycle of length $|O|$, and $\operatorname{supp} \sigma_O = O$. If $O, O' \in \mathcal{O}(\sigma)$ and $O \ne O'$, then $\sigma_O$ and $\sigma_{O'}$ are disjoint.
2. (Existence) $\mathcal{O}(\sigma)$ is finite. With $m = |\mathcal{O}(\sigma)|$ there is a bijection $h : \{1, \dots, m\} \to \mathcal{O}(\sigma)$, and for every such $h$ the sequence whose $i$th term is $\sigma_{h(i)}$ is a sequence of cycles any two of which are disjoint, and
   $$\sigma = \sigma_{h(1)} \sigma_{h(2)} \cdots \sigma_{h(m)}.$$
   Hence every permutation of a finite set is the product of a sequence (of length $\ge 0$) of cycles whose terms in different places are disjoint. Moreover $\sigma = i_X$ exactly when $m = 0$, and then the product above is the empty product.
3. (Uniqueness) Let $n \ge 0$ be an integer and let $\gamma_1, \dots, \gamma_n$ be a sequence of cycles such that $\gamma_i$ and $\gamma_j$ are disjoint whenever $i \ne j$, and $\gamma_1 \cdots \gamma_n = \sigma$. Then $\gamma_i \ne \gamma_j$ whenever $i \ne j$,
   $$\{\gamma_1, \dots, \gamma_n\} = \{\sigma_O : O \in \mathcal{O}(\sigma)\},$$
   and $n = m$. Moreover each $\operatorname{supp} \gamma_i$ belongs to $\mathcal{O}(\sigma)$ and $\gamma_i = \sigma_{\operatorname{supp} \gamma_i}$. That is, when $\sigma$ is written as a product of disjoint cycles, the set of these cycles, disregarding the order of multiplication, is determined by $\sigma$.
:::

## 직관

치환 하나를 여러 원탁에서 동시에 한 칸씩 옮겨 앉는 것으로 보는 정리입니다. 궤도가 원탁이고, 원소가 하나인 궤도는 혼자 앉아 움직이지 않는 사람입니다. 원탁마다 그 원탁만 돌리는 순환치환 $\sigma_O$를 만들면 원탁들은 사람을 공유하지 않으므로, 이것들을 어떤 순서로 곱해도 원래의 치환이 됩니다. 비유가 정의와 맞는 곳은 원탁이 $\mathcal{O}(\sigma)$의 원소, 원탁에 앉은 사람이 궤도의 원소라는 점입니다.

유일성 (3)은 원탁 나누기가 치환으로 정해진다는 것입니다. 서로소인 순환치환들로 $\sigma$를 쓰면 각 순환치환의 받침은 $\sigma$의 궤도 하나와 같아질 수밖에 없고, 그 위에서 순환치환은 $\sigma$와 같아야 합니다. 정해지지 않는 것은 곱하는 순서뿐이고, 서로소인 순환치환은 교환되므로 순서는 값에 영향을 주지 않습니다.

## 증명

:::idea
궤도 전체가 $X$의 분할이므로 서로 다른 두 원소를 갖는 궤도들은 겹치지 않는다. 그 위의 순환치환 $\sigma_O$들은 서로소이고, 서로소인 치환들의 곱의 값은 각 점을 움직이는 하나의 값이므로 곱이 $\sigma$와 점마다 같다. 유일성은 곱의 거듭제곱이 각 받침 위에서 그 순환치환의 거듭제곱과 같다는 것으로 받침이 $\sigma$의 궤도임을 보인다.
:::

:::hint
$x$가 $\mathcal{O}(\sigma)$의 어느 원소에도 속하지 않으면 $O_\sigma(x)$는 $x$ 말고 다른 원소를 갖지 않는다.
:::

:::hint
유일성에서 $x \in \operatorname{supp} \gamma_i$이면 [[support-of-a-permutation|치환의 받침]]의 (5)의 (iv)에 의해 $\sigma$와 $\gamma_i$의 거듭제곱이 $x$에서 같다.
:::

:::proof
궤도의 번호는 [[orbits-of-a-permutation|치환의 궤도]], 받침의 번호는 [[support-of-a-permutation|치환의 받침]], 순환치환의 번호는 [[cycle-permutation|순환치환]]의 것이다. 두 함수의 같음은 [[function|함수]]의 것이다.

**(1)** $O \in \mathcal{O}(\sigma)$이면 $O = O_\sigma(x)$인 $x$가 있다. $X$가 유한이므로 궤도의 (5)에 의해 $O$는 유한집합이다. $O$의 서로 다른 두 원소 $u$, $v$에 대하여, [[finite-set|유한집합]]의 (F2)와 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)를 두 번 쓰면 $\{u, v\}$는 원소를 $2$개 갖고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $|O| \ge 2$이다. 순환치환의 (7)을 $\rho = \sigma$, $x$에 쓰면 $\sigma_O$는 길이 $|O|$인 순환치환이고 $\operatorname{supp} \sigma_O = O$이다. 궤도의 (2)에 의해 궤도 전체는 $X$의 [[partition|분할]]이므로 $O \ne O'$이면 $O \cap O' = \emptyset$이고, 두 받침이 겹치지 않으므로 $\sigma_O$와 $\sigma_{O'}$은 서로소이다.

**(2)** 궤도의 (7)에 의해 궤도 전체의 집합은 유한집합이고, $\mathcal{O}(\sigma)$는 그 부분집합이므로 유한집합의 부분집합의 (1)에 의해 유한집합이다. 유한집합의 정의에 의해 전단사 $h : \{1, \dots, m\} \to \mathcal{O}(\sigma)$가 있다. 이런 $h$ 하나를 생각하자. 각 $i$에 $\sigma_{h(i)}$가 하나씩 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이 열이 있고, (1)에 의해 각 항은 순환치환이다. $i \ne j$이면 $h$가 단사이므로 $h(i) \ne h(j)$이고, (1)에 의해 $\sigma_{h(i)}$와 $\sigma_{h(j)}$는 서로소이다.

$\rho = \sigma_{h(1)} \cdots \sigma_{h(m)}$이라 하고 $x \in X$의 값을 비교한다. $x$가 어떤 $i$에서 $x \in h(i) = \operatorname{supp} \sigma_{h(i)}$이면 받침의 (5)의 (i)에 의해 $\rho(x) = \sigma_{h(i)}(x)$이고, $\sigma_O$의 정의에 의해 이것은 $\sigma(x)$이다. 그런 $i$가 없으면 받침의 (5)의 (i)에 의해 $\rho(x) = x$이다. 이때 $h$가 전사이므로 $x$는 $\mathcal{O}(\sigma)$의 어느 원소에도 속하지 않는다. 궤도의 (1)에 의해 $x \in O_\sigma(x)$이므로 $O_\sigma(x) \notin \mathcal{O}(\sigma)$, 곧 $O_\sigma(x)$는 서로 다른 두 원소를 갖지 않는다. 따라서 $O_\sigma(x)$의 원소는 모두 $x$이고 $O_\sigma(x) = \{x\}$이며, 궤도의 (4)에 의해 $\sigma(x) = x = \rho(x)$이다. 모든 점에서 값이 같으므로 $\sigma = \rho$이다.

$m = 0$이면 위의 곱은 빈 곱 $i_X$이므로([[finite-product-in-a-group|군의 유한 곱]]의 (1)) $\sigma = i_X$이다. 거꾸로 $\sigma = i_X$이면 모든 $x$가 고정점이므로 궤도의 (4)에 의해 모든 궤도가 원소 하나의 집합이고 $\mathcal{O}(\sigma) = \emptyset$이며, 유한집합의 (F2)와 [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $m = 0$이다.

**(3)** 먼저 각 $i$에 대하여 $C = \operatorname{supp} \gamma_i$라 하고 $C \in \mathcal{O}(\sigma)$이며 $\gamma_i = \sigma_C$임을 보인다. $\gamma_i = (c_1\ \cdots\ c_k)$라 하면 순환치환의 (2)에 의해 $C = \{c_1, \dots, c_k\}$이다. $x \in C$이면 받침의 (5)의 (iv)에 의해 모든 정수 $t$에서 $\sigma^t(x) = \gamma_i^t(x)$이므로, 궤도의 정의에 의해 $O_\sigma(x) = O_{\gamma_i}(x)$이고 순환치환의 (4)에 의해 이것은 $C$이다. 따라서 $C$는 $\sigma$의 궤도이고 서로 다른 두 원소 $c_1$, $c_2$를 가지므로 $C \in \mathcal{O}(\sigma)$이다. $y \in C$이면 받침의 (5)의 (i)에 의해 $\sigma(y) = \gamma_i(y)$이므로 $\sigma_C(y) = \gamma_i(y)$이고, $y \notin C$이면 $\sigma_C(y) = y = \gamma_i(y)$이다. 따라서 $\gamma_i = \sigma_C$이다.

이로써 $\{\gamma_1, \dots, \gamma_n\} \subseteq \{\sigma_O : O \in \mathcal{O}(\sigma)\}$이다. 거꾸로 $O \in \mathcal{O}(\sigma)$이면 $O$의 원소 $x$가 있고 $O = O_\sigma(x)$이다(궤도의 (2)). $O$는 $\{x\}$가 아니므로 궤도의 (4)에 의해 $x \in \operatorname{supp} \sigma$이고, 받침의 (5)의 (ii)에 의해 어떤 $i$에서 $x \in C = \operatorname{supp} \gamma_i$이다. 앞 문단에 의해 $C = O_\sigma(x) = O$이고 $\gamma_i = \sigma_C = \sigma_O$이다. 따라서 두 집합은 같다.

$i \ne j$이면 $\gamma_i$와 $\gamma_j$의 받침은 겹치지 않고, 순환치환의 (2)에 의해 둘 다 공집합이 아니므로 두 받침은 다르다. 받침이 다른 두 치환은 다르므로 $\gamma_i \ne \gamma_j$이다. 그러면 각 $i$에 $\gamma_i$를 대응시키는 함수는 $\{1, \dots, n\}$에서 $\Gamma = \{\sigma_O : O \in \mathcal{O}(\sigma)\}$로의 전단사이므로 $\Gamma$는 원소를 $n$개 갖는다. 또 각 $O$에 $\sigma_O$를 대응시키는 함수 $\mathcal{O}(\sigma) \to \Gamma$는 전사이고, (1)에 의해 $\operatorname{supp} \sigma_O = O$이므로 단사이다. 유한집합의 (F4)에 의해 $\Gamma$는 원소를 $m$개도 가지므로, 원소의 개수의 (1)에 의해 $n = m$이다.
:::

## 예시와 반례

:::example[여섯 점 위의 치환의 분해]
$X = \{1, 2, 3, 4, 5, 6\}$에서 $\sigma$가 $1, 2, 3, 4, 5, 6$을 각각 $5, 4, 3, 2, 6, 1$로 보낸다고 합시다. $\sigma(1) = 5$, $\sigma(5) = 6$, $\sigma(6) = 1$이므로 $O_\sigma(1) = \{1, 5, 6\}$이고, $\sigma(2) = 4$, $\sigma(4) = 2$이므로 $O_\sigma(2) = \{2, 4\}$이며, $3$은 고정점입니다. 따라서 $\mathcal{O}(\sigma) = \{\{1, 5, 6\}, \{2, 4\}\}$이고, [[cycle-permutation|순환치환]]의 (7)에 의해 $\sigma_{\{1, 5, 6\}} = (1\ 5\ 6)$, $\sigma_{\{2, 4\}} = (2\ 4)$입니다. (2)에 의해
$$\sigma = (1\ 5\ 6)(2\ 4) = (2\ 4)(1\ 5\ 6)$$
이고, (3)에 의해 $\sigma$를 서로소인 순환치환들의 곱으로 쓰는 방법은 이 두 순서뿐입니다. 순환치환의 (3)에 의해 $(1\ 5\ 6)$을 $(5\ 6\ 1)$로 적어도 같은 순환치환입니다.
:::

:::counterexample[서로소가 아닌 순환치환의 곱으로 쓰는 방법은 여럿일 수 있다]
(3)의 유일성에는 서로소라는 가정이 필요합니다. $X = \{1, 2, 3\}$에서 $(1\ 2\ 3)$은 그 자체로 순환치환 하나의 곱이지만, $(1\ 2)(2\ 3)$은 $1, 2, 3$을 각각 $2, 3, 1$로 보내므로 서로소가 아닌 두 호환의 곱으로도 $(1\ 2\ 3) = (1\ 2)(2\ 3)$입니다. 두 쓰는 법의 순환치환의 집합 $\{(1\ 2\ 3)\}$과 $\{(1\ 2), (2\ 3)\}$은 다릅니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3, 4\}$에서 $1, 2, 3, 4$를 각각 $3, 4, 1, 2$로 보내는 치환을 서로소인 순환치환의 곱으로 쓰면?]
$\sigma(1) = 3$, $\sigma(3) = 1$이고 $\sigma(2) = 4$, $\sigma(4) = 2$이므로 $\mathcal{O}(\sigma) = \{\{1, 3\}, \{2, 4\}\}$입니다. (2)에 의해 $\sigma = (1\ 3)(2\ 4)$이고, (3)에 의해 쓰는 순환치환의 집합은 $\{(1\ 3), (2\ 4)\}$로 정해집니다.
:::

:::check[유한집합 $X$의 치환 $\sigma$가 서로소인 순환치환 셋의 곱이면 $\sigma$의 궤도 가운데 서로 다른 두 원소를 갖는 것은 몇 개인가?]
셋입니다. (3)에 의해 순환치환의 개수 $n = 3$은 $m = |\mathcal{O}(\sigma)|$와 같습니다.
:::
