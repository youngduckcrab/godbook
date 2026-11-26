---
title: 궤도–안정자 정리
title_en: Orbit–Stabilizer Theorem
aliases: [궤도-안정자 정리, 궤도와 안정자, 켤레의 개수, orbit-stabilizer theorem, number of conjugates]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: "군 G 가 집합 X 에 작용하면 gG_x 를 g·x 로 보내는 함수 G/G_x → G·x 가 정확히 하나 있고 전단사이다. 따라서 G 가 유한군이면 |G| = |G·x|·|G_x| 이고 궤도의 원소 개수는 |G| 를 나눈다. 부분군 K 의 켤레는 [G : N_G(K)] 개, 원소 a 의 켤레는 [G : C_G(a)] 개이다."
requires: [set, function, normal-subgroup, injective-surjective-bijective, inverse-function, finite-set, number-of-elements-is-unique, partition-into-equal-blocks, prime-number, divisibility, division-theorem, proof-by-contradiction, operation-on-equivalence-classes, group, subgroup, left-coset, lagrange-theorem, symmetric-group, order-of-symmetric-group, cycle-permutation, group-action, group-action-examples, orbit-of-an-action, stabilizer-and-fixed-points, centralizer-and-normalizer]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.1절 Groups Acting on Sets, Theorem 14.11 과 그 증명 (p.170); 15.1절 The Sylow Theorems, Lemma 15.6 과 그 증명 (p.183); 14.2절 The Class Equation (p.171); 15.4절 Exercises, 연습문제 23 (p.188)"
    checked: original
    note: "출처 Theorem 14.11(p.170)은 G 가 유한군이고 X 가 유한 G-집합이면 |O_x| = [G : G_x] 라고 진술한다. 출처의 증명은 궤도의 점 y 마다 gx = y 인 g 를 잡아 ϕ(y) = gG_x 로 정하고, ϕ(y₁) = ϕ(y₂) 에서 y₁ = y₂ 를 끌어내 one-to-one 이라 하며, 잉여류 gG_x 마다 gx = y 이면 ϕ(y) = gG_x 라고 해 onto 라 한다. 이 항목은 반대 방향의 함수 G/G_x → G·x 를 동치류 위의 함수로 정해 g 를 고르지 않는다. 출처가 one-to-one 의 근거로 쓰는 계산(g₁G_x = g₂G_x 이면 g₁x = g₂x)이 이 항목에서는 함수가 하나로 정해진다는 것(호환)이 된다. (1)과 (2)는 G 와 X 의 유한성을 가정하지 않는다. (3)은 Theorem 14.11 에 라그랑주 정리를 더한 꼴로, 출처는 14.2절(p.171)에서 'the order of each conjugacy class must divide the order of G' 라고 적는다. (4)의 둘째 문장은 출처 Lemma 15.6(p.183) 'The number of distinct H-conjugates of K is [H : N(K) ∩ H]' 와 같은 내용이다. 출처는 H-켤레를 h⁻¹Kh 로, 대응을 오른쪽 잉여류 (N(K) ∩ H)h 로 쓰고 전사는 'easy to see' 라고 적는다. 이 항목은 hKh⁻¹ 와 왼쪽 잉여류를 쓰고, 개수는 [H : N_G(K) ∩ H] 로 같다(왼쪽 잉여류와 오른쪽 잉여류의 개수가 같다는 것은 라그랑주 정리 항목의 (4)). (4)의 첫째 문장은 출처 15.4절 연습문제 23(p.188) '부분군 H 의 서로 다른 켤레의 개수는 [G : N(H)]' 와 같은 내용이다. (5)는 출처 14.2절(p.171)이 켤레류의 원소의 개수를 Theorem 14.11 로 [G : C(x_i)] 라 하는 것과 같은 내용이다. 예시 '$S_4$의 자연스러운 작용' 은 출처 14.5절 연습문제 3(p.178)이 치환군에서 |G| = |O_x|·|G_x| 를 확인하게 하는 것과 같은 발상이다. 반례 '안정자의 오른쪽 잉여류로는 궤도의 점이 정해지지 않을 수 있다' 의 G₃ = {(1), (1 2)} 와 그 오른쪽 잉여류 {(1 3), (1 3 2)} 는 출처 14.5절 연습문제 2 (a)의 힌트(p.328)와 6.1절 Example 6.2 다음 문단(p.75)에 나온다. 확인 질문 '원소가 $7$개인 군이 원소가 $10$개인 집합에 작용하면 고정점이 있는가?' 는 출처 14.5절 연습문제 24(p.180)의 |X| ≡ |X_G| (mod p) 와 같은 발상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(정규화 부분군 (5) 의 유한 가정, 켤레류 (3)(5) 에 아벨군·정규 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며, $G$가 집합 $X$에 작용한다고 하자. 작용과 그 값 $g \cdot x$는 [[group-action|군의 작용]], 궤도 $G \cdot x$는 [[orbit-of-an-action|궤도]], 안정자 $G_x$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이다. 왼쪽 잉여류 $gG_x$와 $G/G_x$는 [[left-coset|잉여류]], 지표 $[G : H]$와 "지표가 유한하다"는 [[lagrange-theorem|라그랑주 정리]]의 것이고, $C_G(a)$와 $N_G(K)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이다.

1. (궤도와 잉여류의 대응) $x \in X$이면, 함수 $\psi_x : G/G_x \to G \cdot x$로서 모든 $g \in G$에서 $\psi_x(gG_x) = g \cdot x$인 것이 정확히 하나 있다. 이 $\psi_x$는 [[injective-surjective-bijective|전단사]]이다.
2. (궤도의 크기) $x \in X$이면, $G \cdot x$가 [[finite-set|유한집합]]인 것은 정확히 $G_x$의 지표가 유한할 때이고, 그때 $|G \cdot x| = [G : G_x]$이다.
3. (유한군) $G$가 유한군이면 모든 $x \in X$에서 $G \cdot x$는 유한집합이고
   $$|G| = |G \cdot x| \cdot |G_x|$$
   이다. 따라서 $|G \cdot x|$는 $|G|$를 나눈다.
4. (부분군의 켤레의 개수) $G$가 유한군이고 $K$가 $G$의 부분군이라 하자.
   - (i) $\{gKg^{-1} : g \in G\}$는 원소를 $[G : N_G(K)]$개 갖는 유한집합이고, 이 수는 $|G|$를 나눈다. 이 수가 $1$인 것은 정확히 $K$가 $G$의 정규부분군일 때이다.
   - (ii) $H$가 $G$의 부분군이면 $N_G(K) \cap H$는 $H$의 부분군이고, $\{hKh^{-1} : h \in H\}$는 원소를 $[H : N_G(K) \cap H]$개 갖는 유한집합이며, 이 수는 $|H|$를 나눈다. 여기서 $[H : N_G(K) \cap H]$는 군 $H$에서의 지표이다.
5. (원소의 켤레의 개수) $G$가 유한군이고 $a \in G$이면 $\{gag^{-1} : g \in G\}$는 원소를 $[G : C_G(a)]$개 갖는 유한집합이고, 이 수는 $|G|$를 나눈다.
:::

:::english
Let $G$ be a group with identity $e$, and suppose $G$ acts on a set $X$. Actions and their values $g \cdot x$ are those of the entry on group actions, orbits $G \cdot x$ those of the entry on orbits, and stabilizers $G_x$ those of the entry on stabilizers and fixed points. Left cosets $gG_x$ and $G/G_x$ are those of the entry on cosets, the index $[G : H]$ and "the index is finite" are those of the entry on Lagrange's theorem, and $C_G(a)$ and $N_G(K)$ are those of the entry on centralizers and normalizers.

1. (Correspondence between an orbit and cosets) If $x \in X$, there is exactly one function $\psi_x : G/G_x \to G \cdot x$ with $\psi_x(gG_x) = g \cdot x$ for every $g \in G$. This $\psi_x$ is a bijection.
2. (Size of an orbit) If $x \in X$, then $G \cdot x$ is finite exactly when the index of $G_x$ is finite, and in that case $|G \cdot x| = [G : G_x]$.
3. (Finite groups) If $G$ is finite, then for every $x \in X$ the orbit $G \cdot x$ is finite and
   $$|G| = |G \cdot x| \cdot |G_x|.$$
   Hence $|G \cdot x|$ divides $|G|$.
4. (Number of conjugates of a subgroup) Let $G$ be finite and $K$ a subgroup of $G$.
   - (i) $\{gKg^{-1} : g \in G\}$ is a finite set with $[G : N_G(K)]$ elements, and this number divides $|G|$. This number is $1$ exactly when $K$ is a normal subgroup of $G$.
   - (ii) If $H$ is a subgroup of $G$, then $N_G(K) \cap H$ is a subgroup of $H$, and $\{hKh^{-1} : h \in H\}$ is a finite set with $[H : N_G(K) \cap H]$ elements, and this number divides $|H|$. Here $[H : N_G(K) \cap H]$ is the index in the group $H$.
5. (Number of conjugates of an element) If $G$ is finite and $a \in G$, then $\{gag^{-1} : g \in G\}$ is a finite set with $[G : C_G(a)]$ elements, and this number divides $|G|$.
:::

## 직관

$x$를 $y$로 보내는 원소가 하나 있으면, 그런 원소는 정확히 그것의 왼쪽 잉여류 $gG_x$만큼 있습니다. $x$를 제자리에 두는 원소를 먼저 하고 $g$를 하면 여전히 $y$로 가기 때문입니다. 그래서 군의 원소들이 궤도의 점마다 같은 크기의 무리로 나뉘고, "군의 크기 = 궤도의 크기 × 무리의 크기"가 됩니다. 비유하면 교실의 학생들(군의 원소)이 저마다 한 자리(궤도의 점)로 가는데, 모든 자리에 같은 수의 학생이 몰리는 셈입니다. 비유가 정의와 맞는 곳은 자리마다 몰리는 수가 $|G_x|$라는 점입니다. 맞지 않는 곳은 보통의 교실이라면 자리마다 몰리는 수가 다를 수 있지만, 작용에서는 그 무리가 $G_x$의 왼쪽 잉여류라서 늘 같은 수라는 점입니다.

출처는 궤도의 점에서 잉여류로 가는 함수를 점마다 원소 하나를 잡아 정합니다. 이 항목은 거꾸로 잉여류에서 궤도로 가는 함수를 정합니다. 잉여류의 원소 어느 것을 써도 같은 점이 나오므로 아무것도 고르지 않아도 됩니다((1)).

(4), (5)는 부분군 위의 켤레 작용과 켤레 작용에 (3)을 쓴 것입니다. 켤레의 개수는 정규화 부분군, 중심화 부분군이 클수록 적습니다. 정규부분군이나 중심의 원소는 켤레가 자기 하나뿐입니다.

## 증명

:::idea
$g$에 $g \cdot x$를 대응시키는 함수는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 (2)에 의해 정확히 $G_x$의 같은 왼쪽 잉여류에서 같은 값을 갖는다. 그래서 $G/G_x$ 위의 함수로 내려가고 단사이다. 크기는 라그랑주 정리로 센다.
:::

:::hint
[[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)을 쓰려면 함수 $G \to G \cdot x$가 관계 $\sim_{G_x}$와 호환됨을 보여야 한다.
:::

:::hint
$\{gKg^{-1} : g \in G\}$는 부분군 위의 켤레 작용에서 $K$의 궤도이다. 그 안정자는 무엇인가?
:::

:::proof
**(1)** $f : G \to G \cdot x$를 $f(g) = g \cdot x$로 정한다(궤도의 정의에 의해 값은 $G \cdot x$에 속한다). [[stabilizer-and-fixed-points|안정자와 고정점]]의 (1)에 의해 $G_x$는 부분군이고, [[left-coset|잉여류]]의 (1), (2)에 의해 $\sim_{G_x}$는 동치관계이며 $g$의 동치류는 $gG_x$이고 몫집합은 $G/G_x$이다. $g \sim_{G_x} h$, 곧 $g^{-1}h \in G_x$이면 안정자와 고정점의 (2)의 (ii)에서 (i)로 $g \cdot x = h \cdot x$이므로 $f$는 $\sim_{G_x}$와 호환된다. [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 모든 $g$에서 $\psi_x(gG_x) = g \cdot x$인 함수 $\psi_x : G/G_x \to G \cdot x$가 정확히 하나 있다.

단사: $G/G_x$의 두 원소는 $gG_x$, $hG_x$ 꼴이다. $\psi_x(gG_x) = \psi_x(hG_x)$이면 $g \cdot x = h \cdot x$이고, 안정자와 고정점의 (2)의 (i)에서 (iii)으로 $gG_x = hG_x$이다. 전사: $y \in G \cdot x$이면 $g \cdot x = y$인 $g$가 있고 $\psi_x(gG_x) = y$이다.

**(2)** (1)과 [[finite-set|유한집합]]의 (F3), (F4)에 의해 $G/G_x$가 원소를 $n$개 가지면 $G \cdot x$도 원소를 $n$개 갖고, 거꾸로 $G \cdot x$가 원소를 $n$개 가지면 $\psi_x$의 역함수([[inverse-function|역함수]])가 전단사이므로 $G/G_x$도 원소를 $n$개 갖는다. 따라서 $G \cdot x$가 유한집합인 것은 정확히 $G/G_x$가 유한집합일 때, 곧 $G_x$의 지표가 유한할 때이고, 그때 [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $|G \cdot x| = |G/G_x| = [G : G_x]$이다.

**(3)** $G$가 유한군이면 [[lagrange-theorem|라그랑주 정리]]의 (1)을 부분군 $G_x$에 써서 $G/G_x$가 유한집합이고 $|G| = [G : G_x] \cdot |G_x|$이며 $[G : G_x]$가 $|G|$를 나눈다. (2)에 의해 $G \cdot x$는 유한집합이고 $|G \cdot x| = [G : G_x]$이므로 결론이 나온다.

**(4)** (i) [[group-action-examples|군의 작용의 예]]의 (6)의 (ii)의 부분군 위의 켤레 작용에서 $K$의 궤도는 $\{g \cdot K : g \in G\} = \{gKg^{-1} : g \in G\}$이고, [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (3)에 의해 $K$의 안정자는 $N_G(K)$이다. 이 작용에 (2), (3)을 쓰면 이 궤도는 원소를 $[G : N_G(K)]$개 갖는 유한집합이고 그 수는 $|G|$를 나눈다. $K = eKe^{-1}$이 이 집합에 속하므로, 이 집합의 원소가 하나인 것은 정확히 모든 $g$에서 $gKg^{-1} = K$일 때이고, [[normal-subgroup|정규부분군]]의 (1)의 조건 (i)과 (iii)에 의해 이것은 정확히 $K$가 정규부분군일 때이다.

(ii) [[subgroup|부분군]]의 (8)에 의해 $H$는 유한군이다. [[group-action|군의 작용]]의 (4)로 이 작용을 $H$로 제한하면 $H$는 부분군 전체의 집합에 $h \cdot K = hKh^{-1}$로 작용하고, 그 작용에서 $K$의 궤도는 $\{hKh^{-1} : h \in H\}$이다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (6)의 (i)에 의해 그 작용에서 $K$의 안정자는 $N_G(K) \cap H$이고, 같은 항목의 (1)을 군 $H$의 작용에 쓰면 이것은 $H$의 부분군이다. 군 $H$와 이 작용에 (2), (3)을 쓰면 결론이 나온다.

**(5)** [[group-action-examples|군의 작용의 예]]의 (4)의 켤레 작용에서 $a$의 궤도는 $\{gag^{-1} : g \in G\}$이고, [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (1)에 의해 $a$의 안정자는 $C_G(a)$이다. (2), (3)에서 결론이 나온다.
:::

## 예시와 반례

:::example[$S_4$의 자연스러운 작용]
$X = \{1, 2, 3, 4\}$이고 $G = S_X = S_4$가 $X$에 자연스럽게 작용한다고 합시다([[group-action-examples|군의 작용의 예]]의 (2)). [[orbit-of-an-action|궤도]]의 (6)의 (나)에 의해 이 작용은 추이적이므로 $G \cdot 4 = X$이고 $|G \cdot 4| = 4$입니다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_4| = 24$이므로, (3)에 의해 $24 = 4 \cdot |G_4|$이고 $|G_4| = 6$입니다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (ii)에 의해 $G_4$는 $4$를 고정하는 치환 전체이고, 대칭군의 원소의 개수의 (5)에서 $n = 3$으로 둔 $3! = 6$과 같은 수가 나옵니다. 두 방법은 같은 집합을 다르게 센 것입니다.
:::

:::counterexample[안정자의 오른쪽 잉여류로는 궤도의 점이 정해지지 않을 수 있다]
$X = \{1, 2, 3\}$, $G = S_3$이 $X$에 자연스럽게 작용하고 $x = 3$이라 합시다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (ii)에 의해 $G_3$은 $3$을 고정하는 치환 전체이고, $i_X$와 $(1\ 2)$를 원소로 갖습니다([[cycle-permutation|순환치환]]의 표기). 오른쪽 잉여류 $G_3(1\ 3)$([[left-coset|잉여류]]의 (7))은 $(1\ 3)$과 $(1\ 2)(1\ 3)$을 원소로 갖고, $(1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $3, 1, 2$로 보냅니다. 그런데 $(1\ 3) \cdot 3 = 1$이고 $((1\ 2)(1\ 3)) \cdot 3 = 2$입니다. 같은 오른쪽 잉여류의 두 원소가 $3$을 다른 점으로 보내므로, "$G_3g$를 $g \cdot 3$으로 보낸다"는 규칙은 함수를 정하지 않습니다. (1)이 왼쪽 잉여류를 쓰는 것은 $g^{-1}h \in G_x$가 정확히 $g \cdot x = h \cdot x$와 같기 때문입니다.
:::

## 확인 질문

:::check[작용이 추이적이고 $G$가 유한군이면 $|X|$에 대해 무엇을 말할 수 있는가?]
추이적이면 $X \ne \emptyset$이고 모든 $x$에서 $G \cdot x = X$입니다([[orbit-of-an-action|궤도]]의 (6)). (3)에 의해 $|X| = |G \cdot x| = [G : G_x]$이고 $|X|$는 $|G|$를 나눕니다. 예를 들어 [[group-action-examples|군의 작용의 예]]의 (5)의 잉여류 위의 작용은 추이적이고 [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iii)에 의해 $eH$의 안정자가 $H$이므로, $|G/H| = [G : H]$로 지표의 정의와 맞습니다.
:::

:::check[원소가 $7$개인 군이 원소가 $10$개인 집합에 작용하면 고정점이 있는가?]
있습니다. (3)에 의해 각 궤도의 원소의 개수는 $7$의 양의 약수이고, $7$은 [[prime-number|소수]]이므로 $1$이나 $7$입니다. 고정점이 없다고 하면, [[stabilizer-and-fixed-points|안정자와 고정점]]의 (4)의 (ii)에 의해 원소가 하나인 궤도가 없으므로 모든 궤도가 원소를 $7$개 갖습니다. 궤도 전체는 $X$의 분할이므로([[orbit-of-an-action|궤도]]의 (2)) [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (4)에 의해 $7 \mid 10$이 되는데, $10 = 7 \cdot 1 + 3$이고 $0 \le 3 < 7$이므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $10$을 $7$로 나눈 나머지는 $3$이고 $0$이 아니어서 그렇지 않습니다([[proof-by-contradiction|귀류법]]). 따라서 원소가 하나인 궤도, 곧 고정점이 있습니다.
:::
