---
title: 실로우 제2 정리
title_en: The Second Sylow Theorem
aliases: [실로우의 제2 정리, 실로우 부분군의 켤레, Second Sylow Theorem, Sylow's second theorem, Sylow subgroups are conjugate]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: 유한군 G의 모든 p-부분군은 주어진 실로우 p-부분군의 어떤 켤레에 들어가고, 따라서 실로우 p-부분군은 모두 서로 켤레이다. 실로우 p-부분군 전체의 집합은 P의 켤레 전체와 같은 유한집합이고 그 개수 n_p는 정규화 부분군의 지표이며 m을 나눈다. 실로우 p-부분군은 정확히 극대 p-부분군이다.
requires: [prime-number, well-ordering-principle, even-and-odd, divisibility, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-power-divisors, group, group-basic-properties, subgroup, lagrange-theorem, normal-subgroup, group-homomorphism, group-isomorphism, group-action, group-action-examples, orbit-of-an-action, orbit-stabilizer-theorem, centralizer-and-normalizer, p-group, fixed-points-of-p-group-action, sylow-subgroup, first-sylow-theorem, p-element-normalizing-sylow-subgroup, symmetric-group, order-of-symmetric-group, cycle-permutation, conjugate-of-a-cycle, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 The Sylow Theorems, Theorem 15.7 p.183(증명 p.183), Lemma 15.6 p.183, Historical Note p.184; 15.4절 연습문제 2, 7 p.187
    checked: original
    note: "진술 (2)는 출처 Theorem 15.7(p.183, 'G 가 유한군이고 p 가 |G| 를 나누는 소수이면 G 의 실로우 p-부분군은 모두 켤레이다. 곧 두 실로우 p-부분군 P₁, P₂ 에 대하여 gP₁g⁻¹ = P₂ 인 g ∈ G 가 있다')와 같다. 출처는 p 가 |G| 를 나누는 경우로 진술하고, 이 항목은 이 강의의 실로우 p-부분군의 정의(지휘자 결정)에 따라 p ∤ |G| 인 경우(실로우 p-부분군은 {e} 하나)도 넣는다. 출처의 증명(p.183)은 P 의 서로 다른 켤레를 S = {P = P₁, P₂, …, P_k} 로 늘어놓고 Lemma 15.6 으로 k = [G : N(P)] 를 얻은 뒤 'pʳ 이 |N(P)| 를 나누므로 p 는 k 를 나눌 수 없다'고 쓴다. 이어서 다른 실로우 p-부분군 Q 에 대하여 Q-켤레류가 S 를 분할하고 그 크기가 p 의 거듭제곱이라 한 다음 'p 가 k 를 나누지 않으므로 이 동치류 가운데 하나는 실로우 p-부분군을 하나만 담는다. 그것을 P_j 라 하자'고 쓰고, Lemma 15.5 로 P_j = Q 를 얻는다. 출처의 증명은 Q 를 실로우 p-부분군으로 두고 Q ∈ S 를 보인다. 이 항목은 켤레를 늘어놓는 대신 궤도 {gPg⁻¹ : g ∈ G} 를 쓰고, 'P_j 라 하자'의 자리에는 'p-군의 작용의 고정점' (4)가 주는 고정점의 존재를, Lemma 15.5 의 자리에는 '실로우 부분군을 정규화하는 p-원소' (2)를 쓰며, Q 를 아무 p-부분군으로 두어 (1)의 꼴로 증명한다. (3)의 n_p = [G : N_G(P)] 는 출처 Theorem 15.8 의 증명(p.183)이 Lemma 15.6 으로 '|S| = |P 의 궤도| = [G : N(P)]' 라고 쓰는 것과 같다. (4)는 출처의 정의(p.182, 실로우 p-부분군은 극대 p-부분군이다)와 이 강의의 정의가 같은 부분군을 가리킨다는 것이다. (5)는 출처 15.4절 연습문제 7(p.187, |H| = pᵏ 인 정규부분군 H 는 모든 실로우 p-부분군에 들어간다)과 같다. 예시 '$S_3$의 실로우 $2$-부분군 세 개'는 출처 15.4절 연습문제 2(p.187, S₄ 의 실로우 3-부분군을 모두 찾고 모두 켤레임을 보여라)와 같은 발상이다. 그 예시의 대상인 S₃ 의 원소가 2 개인 세 부분군은 출처 Figure 4.8(p.47, S₃ 의 부분군)에 나오고, 호환 세 개가 한 켤레류를 이룬다는 것은 출처 Example 14.12(p.171)에 나온다. 반례 '$V$에서 켤레가 아닌 세 부분군'의 V 는 출처 Example 13.19(p.165)에 A₄ 의 부분군 {(1), (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} 으로 나오고, 출처 Example 3.28(p.39)은 Z₂ × Z₂ 의 원소가 2 개인 세 부분군 H₁, H₂, H₃ 을 적는다. 역사와 맥락의 문장은 출처 15.1절 끝의 Historical Note(p.184)에서 읽은 것이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(위수 pq 의 n_p·n_q 판정과 단순군 (5) 의 조건에 경계값, 지시와 요약의 어긋남 처리 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 유한 [[group|군]]이며 $e$가 그 항등원이라 하자. 거듭제곱 $p^k$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이고, $p$-군과 $p$-부분군은 [[p-group|p-군]]의 것이다. 실로우 $p$-부분군, $\operatorname{Syl}_p(G)$, $n_p$, $\operatorname{Syl}_p(G)$ 위의 켤레 작용, 그리고 $|G| = p^r \cdot m$이고 $p \nmid m$인 쌍 $(r, m)$은 [[sylow-subgroup|실로우 p-부분군]]의 것이다. 켤레 $gKg^{-1}$은 [[group-action-examples|군의 작용의 예]]의 (4)의 것이고, 정규화 부분군 $N_G(H)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이며, 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이다.

1. (강한 꼴) $P \in \operatorname{Syl}_p(G)$이고 $Q$가 $G$의 $p$-부분군이면 $Q \subseteq gPg^{-1}$인 $g \in G$가 있다.
2. (실로우 제2 정리) $P, P' \in \operatorname{Syl}_p(G)$이면 $gPg^{-1} = P'$인 $g \in G$가 있다. 곧 $G$의 실로우 $p$-부분군은 모두 서로 켤레이다.
3. (실로우 $p$-부분군 전체와 그 개수) $\operatorname{Syl}_p(G)$는 공집합이 아닌 [[finite-set|유한집합]]이다. 모든 $P \in \operatorname{Syl}_p(G)$에 대하여 $\operatorname{Syl}_p(G) = \{gPg^{-1} : g \in G\}$이고 $n_p = [G : N_G(P)]$이다. $n_p$는 $m$을 나누고 $|G|$를 나누며, $p \nmid n_p$이다.
4. (극대 $p$-부분군) $G$의 $p$-부분군 $Q$가 $G$의 **극대 $p$-부분군**(maximal $p$-subgroup)인 것은 정확히 $Q \subseteq Q'$이고 $Q' \ne Q$인 $G$의 $p$-부분군 $Q'$이 없을 때라 하자. $G$의 부분군 $Q$가 실로우 $p$-부분군인 것은 정확히 $Q$가 $G$의 극대 $p$-부분군일 때이다.
5. (정규인 $p$-부분군) $H$가 $G$의 [[normal-subgroup|정규부분군]]이고 $G$의 $p$-부분군이면, 모든 $P \in \operatorname{Syl}_p(G)$에서 $H \subseteq P$이다.
:::

:::english
Let $p$ be a prime, $G$ a finite group, and $e$ its identity. Powers $p^k$ and divisibility are as in the entry on powers of a prime and their divisors, and $p$-groups and $p$-subgroups are as in the entry on $p$-groups. Sylow $p$-subgroups, $\operatorname{Syl}_p(G)$, $n_p$, the action by conjugation on $\operatorname{Syl}_p(G)$, and the pair $(r, m)$ with $|G| = p^r \cdot m$ and $p \nmid m$ are as in the entry on Sylow $p$-subgroups. Conjugates $gKg^{-1}$ are as in item (4) of the entry on examples of group actions, the normalizer $N_G(H)$ is as in the entry on centralizers and normalizers, and the index $[G : H]$ is as in the entry on Lagrange's theorem.

1. (Strong form) If $P \in \operatorname{Syl}_p(G)$ and $Q$ is a $p$-subgroup of $G$, then there is $g \in G$ with $Q \subseteq gPg^{-1}$.
2. (The Second Sylow Theorem) If $P, P' \in \operatorname{Syl}_p(G)$, then there is $g \in G$ with $gPg^{-1} = P'$. That is, any two Sylow $p$-subgroups of $G$ are conjugate.
3. (All Sylow $p$-subgroups and their number) $\operatorname{Syl}_p(G)$ is a nonempty finite set. For every $P \in \operatorname{Syl}_p(G)$, $\operatorname{Syl}_p(G) = \{gPg^{-1} : g \in G\}$ and $n_p = [G : N_G(P)]$. The number $n_p$ divides $m$ and divides $|G|$, and $p \nmid n_p$.
4. (Maximal $p$-subgroups) Call a $p$-subgroup $Q$ of $G$ a **maximal $p$-subgroup** of $G$ if and only if there is no $p$-subgroup $Q'$ of $G$ with $Q \subseteq Q'$ and $Q' \ne Q$. A subgroup $Q$ of $G$ is a Sylow $p$-subgroup if and only if $Q$ is a maximal $p$-subgroup of $G$.
5. (Normal $p$-subgroups) If $H$ is a normal subgroup of $G$ and a $p$-subgroup of $G$, then $H \subseteq P$ for every $P \in \operatorname{Syl}_p(G)$.
:::

## 직관

[[first-sylow-theorem|실로우 제1 정리]]는 실로우 $p$-부분군이 있다는 것을 말했습니다. 이 정리는 그것이 본질적으로 하나뿐이라는 것, 곧 실로우 $p$-부분군이 여럿이어도 모두 켤레 $gPg^{-1}$로 서로 옮겨 갈 수 있다는 것을 말합니다. 켤레 사상 $c_g(x) = gxg^{-1}$은 군의 동형사상이므로, 켤레인 두 부분군은 원소의 이름만 바꾼 같은 모양의 군입니다.

증명은 고정점을 세는 것입니다. $P$의 켤레 전체 $\mathcal{C} = \{gPg^{-1} : g \in G\}$의 원소의 개수는 $[G : N_G(P)]$이고, 이 수는 $m$을 나누므로 $p$로 나누어떨어지지 않습니다. $p$-부분군 $Q$가 $\mathcal{C}$에 켤레로 작용하면, [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]에 의해 $Q$가 움직이지 않는 $R \in \mathcal{C}$가 적어도 하나 있습니다. $Q$가 $R$을 움직이지 않는다는 것은 $Q \subseteq N_G(R)$라는 뜻이고, [[p-element-normalizing-sylow-subgroup|실로우 부분군을 정규화하는 p-원소]]에 의해 그러면 $Q \subseteq R$입니다. $R$은 $P$의 켤레이므로 (1)이 나옵니다.

비유하자면 $\mathcal{C}$는 의자가 $p$의 배수가 아닌 개수만큼 놓인 방이고, $Q$의 원소들은 의자를 서로 바꿔 놓는 사람들입니다. $Q$가 의자를 옮기는 묶음 가운데 의자가 둘 이상인 것은 크기가 모두 $p$의 배수이므로, 의자의 개수가 $p$의 배수가 아니면 의자가 하나뿐인 묶음, 곧 제자리에 남는 의자가 있습니다. 의자 하나가 실로우 $p$-부분군 하나, 제자리에 남는 의자가 $Q$의 작용의 고정점에 해당합니다.

## 증명

:::idea
$P$의 켤레 전체 $\mathcal{C}$는 원소가 $[G : N_G(P)]$개이고 이 수는 $p$로 나누어떨어지지 않는다. $p$-부분군 $Q$의 $\mathcal{C}$ 위 켤레 작용에 고정점 $R$이 있고, $Q \subseteq N_G(R)$이므로 실로우 부분군을 정규화하는 $p$-원소의 정리로 $Q \subseteq R$이다. (2)는 (1)에 원소의 개수를 비교한 것이고, (3)은 (2)로 $\operatorname{Syl}_p(G) = \mathcal{C}$를 얻은 것이다.
:::

:::hint
[[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (4)는 $\{gPg^{-1} : g \in G\}$가 원소를 $[G : N_G(P)]$개 갖는 유한집합이라는 것을 줍니다. [[sylow-subgroup|실로우 p-부분군]]의 (7)은 그 수에 대해 무엇을 말합니까?
:::

:::hint
$R \in \mathcal{C}$가 $Q$의 작용의 고정점이면 모든 $q \in Q$에서 $qRq^{-1} = R$이고, 이것은 $Q \subseteq N_G(R)$와 같습니다.
:::

:::proof
정수의 부등식은 [[well-ordering-principle|정렬 원리]]의 진술의 (L2)를 인용한다. "실로우의 ($k$)"는 [[sylow-subgroup|실로우 p-부분군]]의 ($k$)이다.

**준비.** $P \in \operatorname{Syl}_p(G)$라 하고 $\mathcal{C} = \{gPg^{-1} : g \in G\}$로 둔다.

*$\mathcal{C}$는 궤도이다.* 실로우의 (5)에 의해 $G$는 $\operatorname{Syl}_p(G)$에 $g \cdot R = gRg^{-1}$로 작용한다. [[orbit-of-an-action|궤도]]의 정의에 의해 이 작용에서 $P$의 궤도는 $\{g \cdot P : g \in G\} = \{gPg^{-1} : g \in G\} = \mathcal{C}$이다. 특히 $\mathcal{C} \subseteq \operatorname{Syl}_p(G)$이다. 궤도의 (4)에 의해 $G$는 궤도 $\mathcal{C}$에, $\operatorname{Syl}_p(G)$ 위의 작용을 제한한 작용으로 작용하고, 그 값도 $g \cdot R = gRg^{-1}$이다.

*$\mathcal{C}$의 원소의 개수.* [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (4)의 (i)을 $G$의 부분군 $P$에 쓰면, $\mathcal{C}$는 원소를 $[G : N_G(P)]$개 갖는 유한집합이고 이 수는 $|G|$를 나눈다. 실로우의 (7)의 끝 문장(곧 $H = N_G(P)$로 둔 경우)에 의해 $[G : N_G(P)]$는 $m$을 나누고 $p \nmid [G : N_G(P)]$이다. 따라서 $p \nmid |\mathcal{C}|$이다.

**(1)** $Q$가 $G$의 $p$-부분군이라 하자. [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (4)를 군 $K = G$, 유한집합 $X = \mathcal{C}$ 위의 위 작용, $G$의 $p$-부분군 $H = Q$에 쓴다. $p \nmid |\mathcal{C}|$이므로 $Q$의 작용의 고정점이 있다. 곧 모든 $q \in Q$에서 $q \cdot R = R$, 다시 말해 $qRq^{-1} = R$인 $R \in \mathcal{C}$가 있다.

[[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 정의에 의해 이것은 모든 $q \in Q$에서 $q \in N_G(R)$라는 것, 곧 $Q \subseteq N_G(R)$이다. $R \in \mathcal{C} \subseteq \operatorname{Syl}_p(G)$이므로 [[p-element-normalizing-sylow-subgroup|실로우 부분군을 정규화하는 p-원소]]의 (2)를 실로우 $p$-부분군 $R$과 $p$-부분군 $Q$에 쓰면 $Q \subseteq R$이다. $R \in \mathcal{C}$이므로 $R = gPg^{-1}$인 $g \in G$가 있고, $Q \subseteq gPg^{-1}$이다.

**(2)** $P, P' \in \operatorname{Syl}_p(G)$라 하자. 실로우의 (1)에 의해 $P'$은 $G$의 $p$-부분군이므로, (1)에 의해 $P' \subseteq gPg^{-1}$인 $g \in G$가 있다. 실로우의 (5)에 의해 $gPg^{-1}$은 실로우 $p$-부분군이므로, 실로우의 정의에 의해 $gPg^{-1}$과 $P'$은 둘 다 원소를 $p^r$개 갖는다. [[subset-of-finite-set|유한집합의 부분집합]]의 (2)를 원소가 $p^r$개인 집합 $gPg^{-1}$과 그 부분집합 $P'$에 쓰면, $|P'| = p^r$이므로 $P' = gPg^{-1}$이다.

**(3)** [[first-sylow-theorem|실로우 제1 정리]]의 (3)에 의해 $\operatorname{Syl}_p(G) \ne \emptyset$이다. $P \in \operatorname{Syl}_p(G)$라 하고 준비의 $\mathcal{C}$를 쓴다. 준비에서 $\mathcal{C} \subseteq \operatorname{Syl}_p(G)$를 보였다. 거꾸로 $P' \in \operatorname{Syl}_p(G)$이면 (2)에 의해 $P' = gPg^{-1}$인 $g \in G$가 있으므로 $P' \in \mathcal{C}$이다. 따라서 $\operatorname{Syl}_p(G) = \mathcal{C}$이다.

준비에 의해 $\mathcal{C}$는 원소를 $[G : N_G(P)]$개 갖는 유한집합이므로 $\operatorname{Syl}_p(G)$는 유한집합이고, [[number-of-elements-is-unique|원소의 개수]]의 유일성에 의해 $n_p = |\operatorname{Syl}_p(G)| = [G : N_G(P)]$이다. 같은 준비에 의해 이 수는 $m$과 $|G|$를 나누고 $p \nmid n_p$이다.

**(4)** $Q$가 $G$의 부분군이라 하자.

*실로우 $p$-부분군이면 극대 $p$-부분군이다.* $Q \in \operatorname{Syl}_p(G)$라 하자. 실로우의 (1)에 의해 $Q$는 $G$의 $p$-부분군이다. $Q'$이 $Q \subseteq Q'$인 $G$의 $p$-부분군이라 하자. 실로우의 (1)의 끝 문장을 실로우 $p$-부분군 $Q$와 $p$-부분군 $Q'$에 쓰면 $|Q'| \le |Q|$이다. 또 $Q'$은 유한집합이고([[subgroup|부분군]]의 (8)) $Q \subseteq Q'$이므로 유한집합의 부분집합의 (1)에 의해 $|Q| \le |Q'|$이다. (L2)에 의해 $|Q| = |Q'|$이고, 유한집합의 부분집합의 (2)에 의해 $Q = Q'$이다. 따라서 $Q \subseteq Q'$이고 $Q' \ne Q$인 $p$-부분군 $Q'$은 없으므로 $Q$는 극대 $p$-부분군이다.

*극대 $p$-부분군이면 실로우 $p$-부분군이다.* $Q$가 $G$의 극대 $p$-부분군이라 하자. 실로우 제1 정리의 (4)에 의해 $Q \subseteq P$인 $P \in \operatorname{Syl}_p(G)$가 있고, 실로우의 (1)에 의해 $P$는 $G$의 $p$-부분군이다. $P \ne Q$이면 $P$는 $Q \subseteq P$이고 $P \ne Q$인 $p$-부분군이 되어 극대성에 어긋나므로 $P = Q$이다. 따라서 $Q \in \operatorname{Syl}_p(G)$이다.

**(5)** $H$가 $G$의 정규부분군이고 $p$-부분군이며 $P \in \operatorname{Syl}_p(G)$라 하자. (1)에 의해 $H \subseteq gPg^{-1}$인 $g \in G$가 있다. $h \in H$라 하자. [[normal-subgroup|정규부분군]]의 정의에 의해 $ghg^{-1} \in H \subseteq gPg^{-1}$이므로, $gPg^{-1}$의 정의([[group-action-examples|군의 작용의 예]]의 (4))에 의해 $ghg^{-1} = gxg^{-1}$인 $x \in P$가 있다. [[group|군]]의 결합법칙으로 $g(hg^{-1}) = g(xg^{-1})$이고, [[group-basic-properties|군의 기본 성질]]의 (7)의 왼쪽 소거로 $hg^{-1} = xg^{-1}$, 오른쪽 소거로 $h = x$이다. 따라서 $h \in P$이고, $H \subseteq P$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$S_3$의 실로우 $2$-부분군 세 개]
$G = S_3$이라 하고 $i$를 항등치환이라 합시다([[symmetric-group|대칭군]]). [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6 = 2 \cdot 3$이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에 의해 $2 \nmid 3$입니다. 따라서 $p = 2$에서 $r = 1$, $m = 3$이고, 실로우 $2$-부분군은 원소가 $2$개인 부분군입니다.

$\tau = (1\ 2)$라 하면 [[cycle-permutation|순환치환]]의 (5)에 의해 $\operatorname{ord}(\tau) = 2$이고, [[cyclic-subgroup|순환 부분군]]의 (1)과 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $P = \langle \tau \rangle = \{\tau^0, \tau^1\} = \{i, \tau\}$는 원소가 $2$개인 부분군이므로 $P \in \operatorname{Syl}_2(S_3)$입니다. $g \in S_3$이면 $gPg^{-1} = \{gig^{-1}, g\tau g^{-1}\} = \{i, g\tau g^{-1}\}$이고, [[conjugate-of-a-cycle|순환치환의 켤레]]의 (3)에 의해 $g\tau g^{-1}$이 $g \in S_3$에 걸쳐 가지는 값 전체는 $S_3$의 호환 전체입니다. 호환은 $\{1, 2, 3\}$의 서로 다른 두 원소 $a$, $b$로 만든 $(a\ b)$이고 순환치환의 (5)에 의해 $(a\ b) = (b\ a)$이므로, 호환 전체는 $(1\ 2)$, $(1\ 3)$, $(2\ 3)$입니다. 예를 들어 $\sigma = (2\ 3)$이면 순환치환의 켤레의 (1)에 의해 $\sigma\tau\sigma^{-1} = (\sigma(1)\ \sigma(2)) = (1\ 3)$입니다.

따라서 (3)에 의해
$$\operatorname{Syl}_2(S_3) = \bigl\{\{i, (1\ 2)\},\ \{i, (1\ 3)\},\ \{i, (2\ 3)\}\bigr\}$$
입니다. [[alternating-group|교대군]]의 (7)에 의해 $i$, $(1\ 2)$, $(1\ 3)$, $(2\ 3)$은 서로 다르므로 이 세 집합은 서로 다르고, $n_2 = 3$입니다. (3)에 맞게 $n_2 = 3$은 $m = 3$을 나누고, $[S_3 : N_{S_3}(P)] = 3$입니다.
:::

:::counterexample[$V$에서 켤레가 아닌 세 부분군]
(2)는 실로우 $p$-부분군에 대한 것입니다. 원소의 개수가 같은 $p$-부분군이라도 실로우 $p$-부분군이 아니면 켤레가 아닐 수 있습니다.

[[alternating-group|교대군]]의 (5), (6)의 $D$와 군 $V = \{i\} \cup D$를 생각합시다. $D$의 서로 다른 두 원소 $d$, $d'$에 대하여 같은 (6)에 의해 $dd'$과 $d'd$는 둘 다 $D$의 나머지 한 원소이므로 $dd' = d'd$이고, $i$는 모든 원소와 교환되므로 군 $V$는 아벨군입니다. 아벨군에서는 모든 $g$와 부분군 $K$에 대하여 $gkg^{-1} = kgg^{-1} = k$이므로 $gKg^{-1} = K$입니다. 곧 $V$ 안에서 켤레인 두 부분군은 같은 부분군입니다.

$d \in D$이면 교대군의 (5)에 의해 $\operatorname{ord}(d) = 2$이고, [[order-of-an-element|원소의 위수]]의 (9)에 의해 군 $V$에서도 위수가 $2$입니다. [[cyclic-subgroup|순환 부분군]]의 (1)과 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle d \rangle = \{i, d\}$는 원소가 $2$개인 $V$의 부분군이고, $D$의 세 원소가 서로 다르므로 이런 부분군이 셋 있으며 서로 다릅니다. 이 셋은 $V$의 $2$-부분군이지만 서로 켤레가 아닙니다. $|V| = 4 = 2^2$이므로 [[sylow-subgroup|실로우 p-부분군]]의 (4)에 의해 $V$의 실로우 $2$-부분군은 $V$ 하나뿐이고, 이 셋은 실로우 $2$-부분군이 아닙니다. 그래도 (1)의 결론은 성립합니다. 셋 모두 $V = iVi^{-1}$에 들어갑니다.
:::

## 역사와 맥락

Judson 은 실로우가 1872년에 지금 그의 이름이 붙은 정리들을 담은 10쪽짜리 논문을 발표했다고 적고 있습니다.

## 확인 질문

:::check[원소가 $6$개인 군에서 원소가 $2$개인 부분군이 정확히 두 개일 수 있는가?]
없습니다. $6 = 2 \cdot 3$이고 $2 \nmid 3$이므로 $p = 2$에서 $m = 3$이고, 원소가 $2$개인 부분군은 정확히 실로우 $2$-부분군입니다. (3)에 의해 그 개수 $n_2$는 $3$을 나누는 양의 정수이고, $3$은 [[prime-number|소수]]이므로 $n_2$는 $1$이거나 $3$입니다. 따라서 $2$일 수 없습니다.
:::

:::check[유한군 $G$의 실로우 $p$-부분군 가운데 하나가 아벨군이면 나머지도 모두 아벨군인가?]
그렇습니다. $P$가 아벨군인 실로우 $p$-부분군이고 $P'$이 실로우 $p$-부분군이면 (2)에 의해 $P' = gPg^{-1}$인 $g$가 있습니다. [[group-action-examples|군의 작용의 예]]의 (4)의 (iii)에 의해 $c_g(x) = gxg^{-1}$은 [[group-isomorphism|동형사상]]이고, 따라서 [[group-homomorphism|준동형]]입니다. $P'$의 두 원소는 $a, b \in P$로 $c_g(a)$, $c_g(b)$로 쓸 수 있고, $c_g(a)c_g(b) = c_g(ab) = c_g(ba) = c_g(b)c_g(a)$이므로 $P'$도 아벨군입니다.
:::
