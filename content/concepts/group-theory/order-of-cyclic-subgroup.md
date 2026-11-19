---
title: 순환 부분군의 크기
title_en: Size of a Cyclic Subgroup
aliases: [순환 부분군의 원소의 개수, 생성원의 위수, order of a cyclic subgroup, order of a generator]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 원소 a의 위수가 유한하면 ⟨a⟩는 지수가 0부터 ord(a) − 1까지인 서로 다른 거듭제곱으로 이루어진 유한집합이고 |⟨a⟩| = ord(a)이다. 위수가 무한하면 ⟨a⟩는 무한집합이다. 유한군 G에서 a가 생성원인 것은 정확히 ord(a) = |G|일 때이다.
requires: [set, function, injective-surjective-bijective, recursion-theorem, finite-set, pigeonhole-principle, number-of-elements-is-unique, subset-of-finite-set, even-and-odd, prime-number, well-ordering-principle, division-theorem, divisibility, congruence-modulo-n, integer-cancellation, equivalence-classes-equal-iff-related, group, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, integers-modulo-n, order-of-an-element]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 출처는 이것을 정리로 진술하지 않는다. 쓰는 곳은 4.1절 Proposition 4.12, Theorem 4.13 의 증명(p.48), 6.2절 Corollary 6.12 의 증명(p.76), 9.1절 Theorem 9.7, 9.8 의 증명(p.116)
    checked: original
    note: "출처는 '순환 부분군의 원소의 개수는 생성원의 위수와 같다'를 정리로 적지 않고 여러 증명에서 쓴다. Proposition 4.12 와 Theorem 4.13(p.48)은 '위수 n 인 순환군의 생성원 a'에 대해 진술한다. Proposition 4.12 의 증명은 'aᵐ = e 인 가장 작은 양의 정수는 n'이라고 써서 이 항목의 (4)를 쓰고, Theorem 4.13 의 증명은 Proposition 4.12 를 쓴다. Corollary 6.12 의 증명(p.76)은 |⟨g⟩| > 1 에서 ⟨g⟩ 의 원소의 개수와 g 의 위수를 같은 것으로 쓴다. Theorem 9.7 의 증명(p.116)은 무한한 순환군의 생성원이 위수가 무한하다는 것(이 항목의 (5))을 쓰고, Theorem 9.8 의 증명(p.116)은 ℤ_n 에서 G 로의 함수를 0 ≤ k < n 인 k 의 aᵏ 로 정해 (1)의 나열을 쓴다(그 증명은 출처가 연습문제로 둔다). 출처에서 '|⟨g⟩|' 의 꼴은 이 한 곳과 15장의 |⟨xP⟩| 뿐이다(검색어 '\\|h[a-z0-9]+ ?i\\|' 2건). 검색어 'cyclic subgroup of order', 'order of the cyclic' 은 0건이고, 'cyclic group of order' 9건은 Proposition 4.12, Theorem 4.13, 4장 연습문제 32 와 39, 6장 연습문제 21, 9장 연습문제 7, Theorem 9.8 과 그 증명, 13장의 문장이어서 이 진술이 없다. 출처 Example 11.1(p.133)과 Example 11.11(p.136)은 n 에 gⁿ 을 대응시키는 함수 ℤ → G 가 ⟨g⟩ 위로의 함수라고 적고, Example 11.11 은 g 가 생성원이고 위수가 무한하면 이것이 동형이라고 적는다. (2)와 (5)의 전단사와 같은 내용이다. 출처 Theorem 22.10 의 증명(p.281)은 위수가 m 인 원소에 대해 'm ≤ |G|'를 알고 있는 것으로 쓰고, 위수가 |G| 인 원소가 있으면 순환군이라고 결론짓는다. (4)의 두 문장을 쓰는 것이다(검색어 '≤ ?\\|G\\|', 'at most \\|G\\|' 4건 가운데 이 한 곳만 원소의 위수에 관한 것이다). 증명은 이 사이트의 것이다. 예시 'ℤ₁₀ 에서 ⟨[4]⟩'는 출처에서 찾지 못했다(검색어 'Z10' 5건은 9장·11장·16장·17장의 다른 문제, 'h4i' 5건은 ℤ₂₄ 와 ℤ₆₀ 의 부분군, 'order of 4' 0건). 출처 Example 4.5(p.47, ℤ₆ 에서 2 의 위수 3 과 ⟨2⟩ = {0, 2, 4})와 4장 연습문제 3(p.55–56, 순환 부분군의 원소 나열)이 같은 종류의 계산이다. 예시 'ℤ₁₀ 의 생성원 [3]'은 출처 Example 4.5(ℤ₆ 의 생성원 1 과 5)와 Example 4.15(p.48–49, ℤ₁₆ 에서 9 의 배수를 늘어놓아 생성원임을 보인다)와 같은 발상이다. 반례 '(ℤ, +) 에서 2 는 위수가 무한하지만 생성원이 아니다'는 출처에서 찾지 못했다. 출처 p.47 은 ℤ 의 생성원으로 1 과 −1 을 든다(검색어 'h2i' 의 건들은 ℤ₆, ℤ₂₄, ℤ₆₀, ℤ₄ 의 부분군, 'generator.{0,30}Z' 의 건들은 p.47 의 그 문장, 9장·11장의 함수 ℤ → G, 14장의 G/Z(G) 의 생성원). 확인 질문 'ℤ₁₅ 에서 ⟨[6]⟩'은 출처에서 찾지 못했다(검색어 'Z15' 2건은 9장 읽기 질문과 22장, 'h6i' 3건은 ℤ₂₄ 와 ℤ₁₂ 의 부분군, 'order of 6' 0건). 4장 연습문제 3 과 같은 종류이다. 확인 질문 '위수가 무한한 a 에 대해 ⟨a²⟩'는 출처에서 찾지 못했다(검색어 'ha2 i' 2건은 18장의 아이디얼, 'a2 .{0,20}infinite' 0건, 'infinite order' 7건에 이 진술이 없다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $a \in G$라 하자. 거듭제곱은 [[power-in-a-group|군의 거듭제곱]], $\langle a \rangle$와 생성원은 [[cyclic-subgroup|순환 부분군]], 원소의 위수와 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이다. 유한집합, 무한집합, $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 것이고, $|A|$는 [[number-of-elements-is-unique|원소의 개수]]이다.

1. (위수가 유한한 경우) $a$의 위수가 유한하고 $n = \operatorname{ord}(a)$라 하자. 각 $i \in \{1, \dots, n\}$에 $a^{i-1}$을 대응시키는 함수 $h : \{1, \dots, n\} \to \langle a \rangle$는 전단사이다. 따라서 $\langle a \rangle$는 유한집합이고 $|\langle a \rangle| = n = \operatorname{ord}(a)$이다. 곧 $\langle a \rangle$의 원소는 정확히 $0 \le k \le n - 1$인 정수 $k$에 대한 $a^k$이고, $0 \le k < l \le n - 1$인 정수 $k$, $l$에 대하여 $a^k \ne a^l$이다. 또 모든 정수 $k$에 대하여, $k$를 $n$으로 나눈 [[division-theorem|나머지]]를 $r$이라 하면 $a^k = a^r$이다.
2. (위수가 무한한 경우) $a$의 위수가 무한하면 각 정수 $k$에 $a^k$를 대응시키는 함수 $f : \mathbb{Z} \to \langle a \rangle$는 전단사이고, $\langle a \rangle$는 무한집합이다.
3. (두 경우를 잇는 문장) $\langle a \rangle$가 유한집합인 것은 정확히 $a$의 위수가 유한할 때이고, 그때 $|\langle a \rangle| = \operatorname{ord}(a)$이다.
4. (유한군의 생성원) $G$가 유한군이면 모든 $a \in G$의 위수는 유한하고([[order-of-an-element|원소의 위수]]의 (6)) $\operatorname{ord}(a) \le |G|$이다. $a$가 $G$의 생성원인 것은 정확히 $\operatorname{ord}(a) = |G|$일 때이다. 따라서 유한군 $G$가 순환군인 것은 정확히 $\operatorname{ord}(a) = |G|$인 $a \in G$가 있을 때이다.
5. (무한군의 생성원) $G$가 무한군이고 $a$가 $G$의 생성원이면 $a$의 위수는 무한하고, 각 정수 $k$에 $a^k$를 대응시키는 함수 $\mathbb{Z} \to G$는 전단사이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $a \in G$. Powers are those of the entry on powers in a group, $\langle a \rangle$ and generators are those of the entry on cyclic subgroups, and the order of an element and $\operatorname{ord}(a)$ are those of the entry on the order of an element. Finite sets, infinite sets and $\{1, \dots, n\}$ are those of the entry on finite sets, and $|A|$ is the number of elements.

1. (Finite order) Suppose $a$ has finite order and $n = \operatorname{ord}(a)$. The function $h : \{1, \dots, n\} \to \langle a \rangle$ assigning $a^{i-1}$ to each $i \in \{1, \dots, n\}$ is a bijection. Hence $\langle a \rangle$ is a finite set and $|\langle a \rangle| = n = \operatorname{ord}(a)$. That is, the elements of $\langle a \rangle$ are exactly the $a^k$ for integers $k$ with $0 \le k \le n - 1$, and $a^k \ne a^l$ for integers $k$, $l$ with $0 \le k < l \le n - 1$. Moreover, for every integer $k$, if $r$ is the remainder of $k$ on division by $n$, then $a^k = a^r$.
2. (Infinite order) If $a$ has infinite order, then the function $f : \mathbb{Z} \to \langle a \rangle$ assigning $a^k$ to each integer $k$ is a bijection, and $\langle a \rangle$ is an infinite set.
3. (Linking the two cases) $\langle a \rangle$ is a finite set exactly when $a$ has finite order, and then $|\langle a \rangle| = \operatorname{ord}(a)$.
4. (Generators of a finite group) If $G$ is a finite group, then every $a \in G$ has finite order (by (6) of the entry on the order of an element) and $\operatorname{ord}(a) \le |G|$. An element $a$ is a generator of $G$ exactly when $\operatorname{ord}(a) = |G|$. Hence a finite group $G$ is cyclic exactly when there is $a \in G$ with $\operatorname{ord}(a) = |G|$.
5. (Generators of an infinite group) If $G$ is an infinite group and $a$ is a generator of $G$, then $a$ has infinite order, and the function $\mathbb{Z} \to G$ assigning $a^k$ to each integer $k$ is a bijection.
:::

## 직관

$a^0 = e, a^1, a^2, \dots$를 차례로 적어 나가면, 위수가 유한한 경우 $a^n$($n = \operatorname{ord}(a)$)에서 처음으로 $e$로 돌아오고 그 뒤로는 $a^0, a^1, \dots, a^{n-1}$이 같은 순서로 되풀이됩니다. 음의 지수 쪽으로 가도 같은 원소들이 거꾸로 되풀이될 뿐입니다. 그래서 $\langle a \rangle$에는 원소가 정확히 $n$개 있습니다. 위수가 무한하면 되풀이가 일어나지 않으므로 지수마다 다른 원소가 나와 $\langle a \rangle$는 무한집합이 됩니다.

원형 트랙을 일정한 보폭으로 걷는 사람을 떠올려 봅시다. 걸음마다 밟는 자리가 $a$의 거듭제곱이고, 처음으로 출발점을 다시 밟을 때까지의 걸음 수가 위수입니다. 그때까지 밟은 자리가 모두 서로 다르다는 것이 (1)의 "서로 다르다"에 해당합니다. 출발점을 다시 밟기 전에 같은 자리를 두 번 밟을 수 없는 까닭은, 그러면 두 걸음 사이의 걸음 수만큼 걸어 출발점으로 돌아온 셈이 되어 "처음으로"에 어긋나기 때문입니다. 끝없이 곧게 뻗은 길이라면 같은 자리를 다시 밟지 않으니 위수가 무한한 경우에 해당합니다.

순환군 $G = \langle a \rangle$에서는 $G$ 전체가 $a$의 거듭제곱이므로, 유한군이면 $|G| = \operatorname{ord}(a)$입니다. 거꾸로 위수가 $|G|$인 원소가 있으면 그 원소의 거듭제곱만으로 원소 $|G|$개가 나오므로 $G$를 다 채웁니다((4)).

## 증명

:::idea
(1)은 $h$가 단사인 것을 원소의 위수의 (3)으로, 전사인 것을 나눗셈 정리로 보인다. (2)는 원소의 위수의 (4)가 단사를 주고, $\langle a \rangle$가 원소를 $N$개 갖는다면 $a^1, \dots, a^{N+1}$에 비둘기집 원리를 쓴다. (4)는 $\langle a \rangle \subseteq G$와 원소의 개수를 비교한다.
:::

:::hint
(1)의 단사: $1 \le i < j \le n$이고 $a^{i-1} = a^{j-1}$이면 $n$이 $j - i$를 나눈다. 그런데 $0 < j - i < n$이다.
:::

:::hint
(4)의 "거꾸로": 유한집합의 부분집합이 원래 집합과 원소의 개수가 같으면 두 집합은 같다.
:::

:::proof
아래에서 "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$)이다. (Z1)은 [[prime-number|소수]]의 진술에서, (Z5), (Z7), (L1), (L3)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들이거나 증명한 것이다.

**(1)** [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 각 $i \in \{1, \dots, n\}$마다 $a^{i-1}$이 하나로 정해지고, $i - 1$은 정수이므로 $a^{i-1} \in \langle a \rangle$이다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $h : \{1, \dots, n\} \to \langle a \rangle$, $h(i) = a^{i-1}$은 함수이다.

*단사.* $i, j \in \{1, \dots, n\}$이 $i \ne j$이고 $h(i) = h(j)$라 하자. (Z5)에 의해 $i < j$이거나 $j < i$이다. 둘 가운데 작은 쪽을 $s$, 큰 쪽을 $t$라 하면 $a^{s-1} = a^{t-1}$이고, 위수의 (3)에 의해 $(t - 1) \equiv (s - 1) \pmod n$, 곧 [[congruence-modulo-n|합동]]의 정의에 의해 $n \mid (t - s)$이다. (Z7)에 의해 $0 < t - s$이므로 $t - s$는 자연수이고, $n$은 $t - s$의 양의 약수이다. [[prime-number|소수]]의 진술에 의해 $n \le t - s$이다. 한편 $t \le n$이고 $1 \le s$이므로 (Z7)과 [[well-ordering-principle|정렬 원리]]의 (Z6)에 의해 $t - s \le n - 1$이고, (L3)과 (Z6)에 의해 $t - s < n$이다. 이것은 $n \le t - s$와 함께 성립할 수 없다((L1)). 따라서 $h$는 단사이다.

*전사.* $x \in \langle a \rangle$이면 $x = a^k$인 정수 $k$가 있다. $n$은 양의 정수이므로 [[division-theorem|나눗셈 정리]]에 의해 $k = qn + r$, $0 \le r < n$인 정수 $q$, $r$이 있다. $k - r = nq$이므로 $k \equiv r \pmod n$이고, 위수의 (3)에 의해 $a^k = a^r$이다. $0 \le r$이므로 (Z7)에 의해 $1 \le r + 1$이고, $r < n$이므로 (Z1)에 의해 $r + 1 \le n$이다. 곧 $r + 1 \in \{1, \dots, n\}$이고 $h(r + 1) = a^r = x$이다. 따라서 $h : \{1, \dots, n\} \to \langle a \rangle$는 전사이다.

$h$가 [[injective-surjective-bijective|전단사]]이므로 [[finite-set|유한집합]]의 정의에 의해 $\langle a \rangle$는 원소를 $n$개 갖는 유한집합이고, [[number-of-elements-is-unique|원소의 개수]]에 의해 $|\langle a \rangle| = n$이다. $\langle a \rangle$의 원소는 $h$의 값, 곧 $i \in \{1, \dots, n\}$에 대한 $a^{i-1}$이고, $k = i - 1$로 두면 이것은 $0 \le k \le n - 1$인 정수 $k$에 대한 $a^k$이다((Z7)). $0 \le k < l \le n - 1$이면 $k + 1 \ne l + 1$이고((Z7)) $h$가 단사이므로 $a^k = h(k + 1) \ne h(l + 1) = a^l$이다. 끝 문장은 전사의 증명에서 보인 $a^k = a^r$이다(나눗셈 정리의 유일성에 의해 그 $r$이 $k$를 $n$으로 나눈 나머지이다).

**(2)** 거듭제곱의 (1)과 재귀 정리의 (1)에 의해 $f : \mathbb{Z} \to \langle a \rangle$, $f(k) = a^k$는 함수이다. [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $\langle a \rangle$의 모든 원소는 어떤 정수 $k$에 대한 $a^k$이므로 $f : \mathbb{Z} \to \langle a \rangle$는 전사이다. $f(k) = f(l)$, 곧 $a^k = a^l$이면 위수의 (4)에 의해 $k = l$이므로 $f$는 단사이다.

$\langle a \rangle$가 유한집합이라 하자. 그러면 $\langle a \rangle$가 원소를 $N$개 갖는 정수 $N \ge 0$이 있다. 재귀 정리의 (1)에 의해 $g : \{1, \dots, N+1\} \to \langle a \rangle$, $g(i) = a^i$는 함수이다. 유한집합의 (F2)에 의해 $\{1, \dots, N+1\}$은 원소를 $N + 1$개 갖고, (L3)에 의해 $N + 1 > N$이므로 [[pigeonhole-principle|비둘기집 원리]]의 (2)에 의해 $i \ne i'$이고 $a^i = a^{i'}$인 $i, i' \in \{1, \dots, N+1\}$이 있다. 이것은 위수의 (4)에 어긋난다. 따라서 $\langle a \rangle$는 무한집합이다.

**(3)** $a$의 위수가 유한하면 (1)에 의해 $\langle a \rangle$는 유한집합이고 $|\langle a \rangle| = \operatorname{ord}(a)$이다. 거꾸로 $\langle a \rangle$가 유한집합이면, $a$의 위수가 무한하다고 할 때 (2)에 의해 $\langle a \rangle$가 무한집합이 되어 어긋나므로 $a$의 위수는 유한하다.

**(4)** $G$가 유한군이면 위수의 (6)에 의해 $a$의 위수는 유한하고, (3)에 의해 $|\langle a \rangle| = \operatorname{ord}(a)$이다. 순환 부분군의 (1)에 의해 $\langle a \rangle$는 $G$의 부분군이므로 $\langle a \rangle \subseteq G$이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $\operatorname{ord}(a) = |\langle a \rangle| \le |G|$이다.

$a$가 $G$의 생성원이면 순환 부분군의 (6)에 의해 $G = \langle a \rangle$이므로 $|G| = |\langle a \rangle| = \operatorname{ord}(a)$이다. 거꾸로 $\operatorname{ord}(a) = |G|$이면 $|\langle a \rangle| = |G|$이고, $\langle a \rangle \subseteq G$이므로 유한집합의 부분집합의 (2)에 의해 $\langle a \rangle = G$이다. 곧 $a$는 $G$의 생성원이다. 마지막 문장은 순환군의 정의(순환 부분군의 (6))와 방금 보인 것에서 나온다.

**(5)** $G = \langle a \rangle$이다. $a$의 위수가 유한하다면 (1)에 의해 $G = \langle a \rangle$는 유한집합이 되어 $G$가 무한군이라는 가정에 어긋난다. 따라서 $a$의 위수는 무한하고, (2)에 의해 $\mathbb{Z} \to \langle a \rangle = G$, $k$에서의 값이 $a^k$인 함수는 전단사이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_{10}$에서 $\langle [4] \rangle$]
$(\mathbb{Z}_{10}, +)$에서 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $k \cdot [4] = [4k]$입니다. $k = 1, 2, 3, 4$이면 $[4]$, $[8]$, $[12] = [2]$, $[16] = [6]$이고($12 - 2 = 10$, $16 - 6 = 10$), $5 \cdot [4] = [20] = [0]$입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[4]$, $[8]$, $[2]$, $[6]$은 $[0]$이 아니므로, $k \cdot [4] = [0]$인 자연수 $k$는 $5$ 이상이고([[prime-number|소수]]의 (Z1)과 정렬 원리의 (Z5)) [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}([4]) = 5$입니다. (1)에 의해
$$\langle [4] \rangle = \{[0], [4], [8], [2], [6]\}$$
이고 이 다섯 원소는 서로 다르며 $|\langle [4] \rangle| = 5$입니다. 또 $13 = 2 \cdot 5 + 3$이므로 (1)의 끝 문장에 의해 $13 \cdot [4] = 3 \cdot [4] = [2]$이고, 직접 계산한 $13 \cdot [4] = [52] = [2]$($52 - 2 = 10 \cdot 5$)와 맞습니다.
:::

:::example[$\mathbb{Z}_{10}$의 생성원 $[3]$]
$k \cdot [3] = [3k]$이므로 $k = 1, 2, \dots, 9$일 때 차례로 $[3]$, $[6]$, $[9]$, $[12] = [2]$, $[15] = [5]$, $[18] = [8]$, $[21] = [1]$, $[24] = [4]$, $[27] = [7]$이고 모두 $[0]$이 아니며, $10 \cdot [3] = [30] = [0]$입니다. 앞의 예시와 같은 방법으로 $\operatorname{ord}([3]) = 10$입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $|\mathbb{Z}_{10}| = 10$이므로 (4)에 의해 $[3]$은 $\mathbb{Z}_{10}$의 생성원입니다. 실제로 위의 아홉 원소와 $[0]$이 $\mathbb{Z}_{10}$의 원소 열 개를 모두 채웁니다.
:::

:::counterexample[$(\mathbb{Z}, +)$에서 $2$는 위수가 무한하지만 생성원이 아니다]
(5)의 역은 성립하지 않습니다. [[order-of-an-element|원소의 위수]]의 (7)에 의해 $2$의 위수는 무한하고, (2)에 의해 $\langle 2 \rangle$는 무한집합입니다. 그러나 [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $\langle 2 \rangle = 2\mathbb{Z}$이고, [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 홀수 $1 = 2 \cdot 0 + 1$은 짝수가 아니므로 $1 \notin 2\mathbb{Z}$입니다. 곧 $\langle 2 \rangle \ne \mathbb{Z}$이고 $2$는 $(\mathbb{Z}, +)$의 생성원이 아닙니다. 유한군에서는 (4)에 의해 위수만 보고 생성원인지 알 수 있지만, 무한군 $(\mathbb{Z}, +)$에서는 위수가 무한한 원소 $1$과 $2$ 가운데 $1$만 생성원입니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}_{15}, +)$에서 $\langle [6] \rangle$의 원소는 몇 개이고 무엇인가?]
$5$개이고 $\{[0], [6], [12], [3], [9]\}$입니다. $k \cdot [6] = [6k]$이므로 $k = 1, 2, 3, 4$일 때 $[6]$, $[12]$, $[18] = [3]$, $[24] = [9]$이고 모두 $[0]$이 아니며, $5 \cdot [6] = [30] = [0]$입니다. 따라서 $\operatorname{ord}([6]) = 5$이고, (1)에 의해 $\langle [6] \rangle$는 $0 \cdot [6], 1 \cdot [6], \dots, 4 \cdot [6]$의 다섯 원소로 이루어집니다.
:::

:::check[$a$의 위수가 무한하면 $\langle a^2 \rangle$는 무한집합인가?]
그렇습니다. 자연수 $n$에 대하여 $(a^2)^n = e$라면 [[laws-of-exponents|지수법칙]]의 (2)에 의해 $a^{2n} = e$이고, [[order-of-an-element|원소의 위수]]의 (4)에 의해 $2n = 0$이며, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $n = 0$이 되어 $n$이 자연수라는 데 어긋납니다. 따라서 $a^2$의 위수는 무한하고, $a^2$에 (2)를 쓰면 $\langle a^2 \rangle$는 무한집합입니다.
:::
