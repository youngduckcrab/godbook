---
title: 실로우 p-부분군
title_en: Sylow p-Subgroups
aliases: [실로우 부분군, 실로우 p-부분군의 집합, Syl_p(G), n_p, Sylow p-subgroup, Sylow subgroup]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: "유한군 G의 원소의 개수를 pʳm (p는 m을 나누지 않음)으로 쓸 때 원소가 pʳ개인 부분군을 실로우 p-부분군이라 하고, 그 집합 Syl_p(G)와 개수 n_p를 정한 뒤, 실로우 p-부분군이 원소의 개수가 가장 큰 p-부분군이라는 것, 지표로 하는 판정, p가 |G|를 나누지 않을 때와 G가 p-군일 때, 켤레로 하는 작용, 하나뿐이면 정규라는 것, 실로우 p-부분군을 포함하는 부분군의 지표를 증명한다."
requires: [prime-number, prime-power-divisors, well-ordering-principle, divisibility, divisibility-is-transitive, finite-set, subset-of-finite-set, group, subgroup, lagrange-theorem, normal-subgroup, p-group, group-action, group-action-examples, stabilizer-and-fixed-points, centralizer-and-normalizer, number-groups, cyclic-subgroup, power-in-a-group, order-of-an-element, order-of-cyclic-subgroup, subgroups-of-finite-cyclic-group, integers-modulo-n, division-theorem, even-and-odd, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절, Theorem 15.4 뒤의 정의 p.182, Lemma 15.5 의 증명 p.182, Theorem 15.7·15.8 의 증명 p.183, 15.4절 연습문제 1, 11 p.187
    checked: original
    note: "출처는 실로우 p-부분군을 '극대 p-부분군'(포함 관계로 더 큰 p-부분군이 없는 p-부분군)으로 정의한다(p.182, Theorem 15.4 의 증명 바로 뒤. 그 쪽을 그림으로 확인했다). 이 항목은 |G| = pʳm (p ∤ m) 일 때 원소가 pʳ 개인 부분군을 실로우 p-부분군이라 정의한다. 출처는 증명 안에서 원소의 개수를 쓴다: Lemma 15.5 의 증명(p.182)은 'P 의 위수는 |G| 를 나누는 p 의 가장 큰 거듭제곱'이라 쓰고, Theorem 15.7 의 증명(p.183)은 '|G| = pʳm 이고 |P| = pʳ 이라 하자'로 시작한다. 출처는 극대 p-부분군의 원소의 개수가 pʳ 이라는 것을 이 자리에서 증명하지 않는다(검색어 'maximal p' 1건(정의), 'largest power' 1건(Lemma 15.5 의 증명), 'Sylow p-subgroup' 29건을 모두 읽었다). 이 항목은 두 정의가 같다는 것을 진술하지 않는다. 출처는 실로우 p-부분군 전체의 집합과 그 개수에 기호를 두지 않고, Theorem 15.7 의 증명(p.183)에서 P 의 켤레 전체를 S = {P = P₁, …, P_k}, Theorem 15.8 의 증명(p.183)에서 실로우 p-부분군 전체를 같은 꼴의 S 로 쓴다. 기호 Syl_p(G) 와 n_p 는 이 항목이 정했다(검색어 'Syl[^o]' 0건). 출처는 Theorem 15.7, 15.8 을 'p 가 |G| 를 나누는' 경우로 진술한다. (3)의 p ∤ |G| 인 경우(r = 0, 실로우 p-부분군은 {e})는 이 강의의 정의에 넣었다. (5)의 켤레가 실로우 p-부분군이라는 것은 출처 Theorem 15.7 의 증명이 S 를 'P 의 서로 다른 켤레'로 두며 쓰는 사실이고, 출처는 부분군 위의 켤레 작용을 p.182 에서 정의한다. (6)은 출처 15.4절 연습문제 11(p.187, |G| 를 나누는 소수 p 에 대해 실로우 p-부분군이 하나뿐이면 그것은 정규부분군)과 같다. (7)의 'p ∤ [G : N_G(P)]' 는 출처 Theorem 15.7 의 증명(p.183)이 '|G| = pʳm = |N(P)|·k 이고 pʳ 이 |N(P)| 를 나누므로 p 는 k 를 나누지 않는다'고 쓰는 것과 같은 결론이다. (2)의 '지표가 p 로 나누어떨어지지 않는다'는 출처에 명제로 없다(검색어 'Sylow' 와 'index'(15장에서 1건, p.186 의 위수 48 의 예), 15장에서 'cannot divide' 1건(Theorem 15.7 의 증명의 'p cannot divide k'), 'does not divide' 4건(Theorem 15.4·15.7 의 증명과 15.4절 연습문제 25 — 25 는 원소가 p^k 개인 부분집합 전체의 개수를 다룬다)으로 찾고 15.4절 연습문제 1–26 을 처음부터 읽었다). 예시 '$(\\mathbb{Z}_{12}, +)$의 실로우 부분군'의 군 Z₁₂ 의 부분군은 출처 4.5절 연습문제 3(c)(p.55, Z₁₂ 의 부분군의 원소를 모두 적어라)와 같은 대상이고, 13.4절 연습문제 4 의 힌트(p.327)가 {0} ⊂ ⟨6⟩ ⊂ ⟨3⟩ ⊂ Z₁₂ 를 적는다. 예시 '$A_4$의 실로우 부분군'의 군 A₄ 는 출처 Example 5.18(p.65)과 5.4절 연습문제 6(p.71, A₄ 의 부분군을 모두 구하라)과 같은 대상이고, 출처 15장 첫머리(p.181)가 A₄ 를 원소 12 개이면서 원소 6 개인 부분군이 없는 군으로 든다. 그 예시의 실로우 3-부분군 ⟨(1 2 3)⟩ 은 출처 부록의 15.4절 연습문제 2 의 힌트(p.328)가 S₄ 의 실로우 3-부분군으로 적는 P₁ = {(1), (1 2 3), (1 3 2)} 와 같은 집합이고, 실로우 부분군의 원소의 개수를 위수의 소인수분해로 읽는 것은 출처 Example 15.9(p.184, A₅ 의 실로우 p-부분군의 위수는 3, 4, 5)와 같은 발상이다. 반례 '원소가 $2$개인 $\\{[0], [6]\\}$'의 부분군은 위 힌트의 ⟨6⟩ 과 같다. 확인 질문 '원소가 $40$개인 군에서 실로우 $2$-부분군, 실로우 $3$-부분군, 실로우 $5$-부분군의 원소의 개수는 무엇인가?'는 출처 15.4절 연습문제 1(p.187, 위수 18, 24, 54, 72, 80 인 군의 실로우 p-부분군의 위수)과 같은 발상이다. 확인 질문 '원소가 $15$개인 군 $G$의 실로우 $5$-부분군 $P$에 대하여 $[G : N_G(P)]$는 무엇일 수 있는가?'는 출처 Theorem 15.10 의 증명(p.184)이 위수 pq 인 군에서 켤레의 개수가 pq 를 나눈다고 쓰는 것과 같은 갈래의 계산이고, 원소가 15 개인 군은 출처 Example 15.11(p.184, 원소가 15 개인 군은 모두 순환군)의 대상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인((3)(4) 에 p ∤ |G| 와 p-군 대입, 뒤 단원 경로와 n_p 의 유한성 처리 결정). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 유한군([[group|군]])이며 $e$가 그 항등원이라 하자. 거듭제곱 $p^k$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이고, $p$-군과 $p$-부분군은 [[p-group|p-군]]의 것이다. 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이다. 켤레 $gKg^{-1}$, 부분군 위의 켤레 작용과 $\mathcal{S}_k$는 [[group-action-examples|군의 작용의 예]]의 (4), (6)의 것이고, 정규화 부분군 $N_G(H)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이다.

$|G|$는 자연수이고, 소수의 거듭제곱과 그 약수의 (5)에 의해 $|G| = p^r \cdot m$이고 $p \nmid m$인 $0$ 이상인 정수 $r$과 자연수 $m$의 쌍 $(r, m)$이 정확히 하나 있다. 이 항목에서 $r$과 $m$은 늘 이 쌍이다.

$G$의 부분군 $P$가 $G$의 **실로우 $p$-부분군**(Sylow $p$-subgroup)인 것은 정확히 $P$가 원소를 $p^r$개 가질 때, 곧 $|P| = p^r$일 때이다. $G$의 실로우 $p$-부분군 전체의 집합을 $\operatorname{Syl}_p(G)$로 쓴다. 곧 $\operatorname{Syl}_p(G) = \mathcal{S}_{p^r}$이다. $\operatorname{Syl}_p(G)$가 [[finite-set|유한집합]]일 때 그 원소의 개수를 $n_p$로 쓰고, 군을 밝혀야 하면 $n_p(G)$로 쓴다. 이 정의는 실로우 $p$-부분군이 있다는 것을 주장하지 않는다.

1. ($p$-부분군 가운데 원소가 가장 많은 것) 실로우 $p$-부분군은 $G$의 $p$-부분군이다. $G$의 모든 $p$-부분군 $Q$에는 $0 \le k \le r$이고 $|Q| = p^k$인 정수 $k$가 있고, $Q$가 실로우 $p$-부분군인 것은 정확히 $k = r$일 때이다. 따라서 $P$가 실로우 $p$-부분군이고 $Q$가 $G$의 $p$-부분군이면 $|Q| \le |P|$이다.
2. (지표로 하는 판정) $G$의 부분군 $H$가 실로우 $p$-부분군인 것은 정확히 $H$가 $G$의 $p$-부분군이고 $p \nmid [G : H]$일 때이다. $P$가 실로우 $p$-부분군이면 $[G : P] = m$이다.
3. ($p$가 $|G|$를 나누지 않는 경우) $p \nmid |G|$인 것은 정확히 $r = 0$일 때이다. 이때 $\operatorname{Syl}_p(G) = \{\{e\}\}$이고 $n_p = 1$이다.
4. ($G$가 $p$-군인 경우) $G$가 $p$-군이고 $|G| = p^n$이면 $r = n$, $m = 1$이고, $\operatorname{Syl}_p(G) = \{G\}$이며 $n_p = 1$이다.
5. (켤레와 작용) $P$가 실로우 $p$-부분군이고 $g \in G$이면 $gPg^{-1}$도 실로우 $p$-부분군이다. $G$와 $G$의 모든 부분군 $H$는 $\operatorname{Syl}_p(G)$에 켤레로, 곧 $h \cdot P = hPh^{-1}$로 작용한다. 이 작용은 부분군 위의 켤레 작용을 $\operatorname{Syl}_p(G)$로 제한하고 다시 $H$로 제한한 것이다. 이 작용에서 $P \in \operatorname{Syl}_p(G)$의 안정자는 $N_G(P) \cap H$이고, $P$가 이 작용의 고정점인 것은 정확히 $H \subseteq N_G(P)$일 때이다. 특히 $H = G$이면 $P$의 안정자는 $N_G(P)$이다.
6. (하나뿐이면 정규) $\operatorname{Syl}_p(G) = \{P\}$이면, 곧 $n_p = 1$이고 $P$가 그 하나이면, $P$는 $G$의 [[normal-subgroup|정규부분군]]이다.
7. (실로우 $p$-부분군을 포함하는 부분군) $P$가 $G$의 실로우 $p$-부분군이고 $H$가 $P \subseteq H$인 $G$의 부분군이면, $P$는 군 $H$의 실로우 $p$-부분군이고, $[G : H]$는 $m$을 나누며 $p \nmid [G : H]$이다. 특히 $p \nmid [G : N_G(P)]$이다.
:::

:::english
Let $p$ be a prime, $G$ a finite group, and $e$ its identity. Powers $p^k$ and divisibility are as in the entry on powers of a prime and their divisors, and $p$-groups and $p$-subgroups are as in the entry on $p$-groups. The index $[G : H]$ is as in the entry on Lagrange's theorem. Conjugates $gKg^{-1}$, the action by conjugation on subgroups, and $\mathcal{S}_k$ are as in items (4) and (6) of the entry on examples of group actions, and the normalizer $N_G(H)$ is as in the entry on centralizers and normalizers.

$|G|$ is a natural number, and by item (5) of the entry on powers of a prime there is exactly one pair $(r, m)$ of an integer $r \ge 0$ and a natural number $m$ with $|G| = p^r \cdot m$ and $p \nmid m$. In this entry $r$ and $m$ always denote this pair.

A subgroup $P$ of $G$ is a **Sylow $p$-subgroup** of $G$ if and only if $P$ has $p^r$ elements, that is, $|P| = p^r$. The set of all Sylow $p$-subgroups of $G$ is written $\operatorname{Syl}_p(G)$; that is, $\operatorname{Syl}_p(G) = \mathcal{S}_{p^r}$. When $\operatorname{Syl}_p(G)$ is a finite set, its number of elements is written $n_p$, or $n_p(G)$ when the group must be named. This definition does not assert that a Sylow $p$-subgroup exists.

1. (The $p$-subgroups with the most elements) A Sylow $p$-subgroup is a $p$-subgroup of $G$. Every $p$-subgroup $Q$ of $G$ has an integer $k$ with $0 \le k \le r$ and $|Q| = p^k$, and $Q$ is a Sylow $p$-subgroup if and only if $k = r$. Hence, if $P$ is a Sylow $p$-subgroup and $Q$ is a $p$-subgroup of $G$, then $|Q| \le |P|$.
2. (A test by the index) A subgroup $H$ of $G$ is a Sylow $p$-subgroup if and only if $H$ is a $p$-subgroup of $G$ and $p \nmid [G : H]$. If $P$ is a Sylow $p$-subgroup, then $[G : P] = m$.
3. (When $p$ does not divide $|G|$) $p \nmid |G|$ if and only if $r = 0$. In that case $\operatorname{Syl}_p(G) = \{\{e\}\}$ and $n_p = 1$.
4. (When $G$ is a $p$-group) If $G$ is a $p$-group with $|G| = p^n$, then $r = n$ and $m = 1$, $\operatorname{Syl}_p(G) = \{G\}$, and $n_p = 1$.
5. (Conjugates and the action) If $P$ is a Sylow $p$-subgroup and $g \in G$, then $gPg^{-1}$ is also a Sylow $p$-subgroup. $G$ and every subgroup $H$ of $G$ act on $\operatorname{Syl}_p(G)$ by conjugation, that is, by $h \cdot P = hPh^{-1}$. This action is the action by conjugation on subgroups restricted to $\operatorname{Syl}_p(G)$ and then restricted to $H$. In this action the stabilizer of $P \in \operatorname{Syl}_p(G)$ is $N_G(P) \cap H$, and $P$ is a fixed point of this action if and only if $H \subseteq N_G(P)$. In particular, for $H = G$ the stabilizer of $P$ is $N_G(P)$.
6. (A unique one is normal) If $\operatorname{Syl}_p(G) = \{P\}$, that is, $n_p = 1$ and $P$ is the only one, then $P$ is a normal subgroup of $G$.
7. (Subgroups containing a Sylow $p$-subgroup) If $P$ is a Sylow $p$-subgroup of $G$ and $H$ is a subgroup of $G$ with $P \subseteq H$, then $P$ is a Sylow $p$-subgroup of the group $H$, $[G : H]$ divides $m$, and $p \nmid [G : H]$. In particular, $p \nmid [G : N_G(P)]$.
:::

## 직관

라그랑주 정리에 의해 부분군의 원소의 개수는 $|G|$를 나눕니다. 그래서 $p$-부분군의 원소의 개수 $p^k$는 $|G| = p^r m$을 나누는 $p$의 거듭제곱이고, 그런 거듭제곱 가운데 가장 큰 것이 $p^r$입니다((1)). 실로우 $p$-부분군은 이 한계에 닿는 부분군입니다. 길이가 $12$인 막대를 같은 길이의 조각으로 남김없이 자를 때, 조각의 길이로 쓸 수 있는 $2$의 거듭제곱은 $1, 2, 4$이고 가장 긴 것이 $4$인 것과 같습니다. 막대의 길이가 $|G|$, 조각의 길이가 부분군의 원소의 개수, "남김없이 자른다"가 라그랑주 정리의 나누어떨어짐에 해당합니다.

비유는 크기만 말합니다. 원소가 $p^r$개인 부분군이 실제로 있는지는 정의가 말하지 않습니다. 이 항목의 예시에서는 그런 부분군을 하나하나 찾아 보입니다.

$p \nmid [G : P]$라는 판정((2))은 "$p$를 더 떼어 낼 수 없다"는 뜻입니다. $|G| = [G : P] \cdot |P|$에서 $|P|$가 $p$의 거듭제곱이고 나머지 인수에 $p$가 없으면, 그 거듭제곱은 $|G|$에서 떼어 낼 수 있는 $p$를 모두 가져간 것입니다. 그래서 실로우 $p$-부분군을 포함하는 부분군의 지표에도 $p$가 남지 않습니다((7)).

## 증명

:::idea
(1)과 (2)는 $|G| = p^r m$으로 쓰는 방법이 한 가지뿐이라는 것에 라그랑주 정리를 넣은 것이다. (5)는 켤레 사상이 원소의 개수를 바꾸지 않는다는 것이고, (6)은 모든 켤레가 하나뿐인 실로우 $p$-부분군과 같아지는 것이며, (7)은 탑 공식 $[G : P] = [G : H] \cdot [H : P]$이다.
:::

:::hint
(2)에서 $H$가 원소를 $p^k$개 갖고 $p \nmid [G : H]$이면 $|G| = p^k \cdot [G : H]$는 $|G|$를 $p$의 거듭제곱과 $p$로 나누어떨어지지 않는 자연수의 곱으로 쓴 것입니다. 그런 꼴은 한 가지뿐입니다.
:::

:::hint
(7)에서 $[G : H]$가 $m$을 나누는데 $p \mid [G : H]$이면 $p \mid m$이 됩니다.
:::

:::proof
정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1), (Z2)와 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5), (L1)을 인용하고, 정수의 계산(교환·결합법칙)은 정렬 원리의 진술에서 받아들인 계산 법칙으로 쓴다. 아래에서 "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술을 가리킨다.

**$r$, $m$이 정해진다는 것.** [[subgroup|부분군]]의 (4)에 의해 $G$는 $G$ 자신의 부분군이므로 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|G| \ge 1$이다. 곧 $|G|$는 자연수이고, PPD의 (5)가 쌍 $(r, m)$을 준다.

먼저 다음 (가)를 보인다: *$G$의 부분군 $H$와 $0$ 이상인 정수 $k$에 대하여 $|H| = p^k$이고 $p \nmid [G : H]$이면 $k = r$이고 $[G : H] = m$이다.* 라그랑주 정리의 (1)에 의해 $|G| = [G : H] \cdot |H| = p^k \cdot [G : H]$이다. $[G : H] \le 0$이면 $p^k > 0$이므로 (Z2)에 의해 $|G| \le 0$이 되어 $|G| \ge 1$과 함께 (L1)에 어긋난다. 따라서 $[G : H] > 0$이고, 정수이므로 (Z1)에 의해 자연수이다. 그러면 쌍 $(k, [G : H])$는 PPD의 (5)의 조건을 만족하므로, 그 유일성에 의해 $(k, [G : H]) = (r, m)$이다.

**(1)** $P$가 실로우 $p$-부분군이면 라그랑주 정리의 (1)에 의해 군 $P$는 유한군이고 $|P| = p^r$이므로, [[p-group|p-군]]의 정의에 의해 $P$는 $G$의 $p$-부분군이다. $Q$가 $G$의 $p$-부분군이면 $p$-군의 (8)에 의해 $|Q| = p^k$이고 $k \le r$인 $0$ 이상인 정수 $k$가 있다. $k = r$이면 $|Q| = p^r$이므로 $Q$는 실로우 $p$-부분군이다. 거꾸로 $Q$가 실로우 $p$-부분군이면 $p^k = |Q| = p^r$이므로 PPD의 (2)에 의해 $k = r$이다. 마지막으로 $k \le r$이므로, $k = r$이면 $|Q| = |P|$이고 $k < r$이면 PPD의 (2)에 의해 $|Q| = p^k < p^r = |P|$이다.

**(2)** $P$가 실로우 $p$-부분군이라 하자. (1)에 의해 $P$는 $p$-부분군이다. 라그랑주 정리의 (1)에 의해 $p^r \cdot m = |G| = [G : P] \cdot p^r = p^r \cdot [G : P]$이므로, 같은 항목의 (1)의 유일성("$[G : P]$는 등식 $|G| = x \cdot |P|$를 만족하는 유일한 정수")에 의해 $[G : P] = m$이고, $p \nmid m$이므로 $p \nmid [G : P]$이다.

거꾸로 $H$가 $G$의 $p$-부분군이고 $p \nmid [G : H]$라 하자. $p$-군의 정의에 의해 $|H| = p^k$인 $0$ 이상인 정수 $k$가 있고, (가)에 의해 $k = r$이므로 $|H| = p^r$이다. 따라서 $H$는 실로우 $p$-부분군이다.

**(3)** PPD의 (5)에 의해 $p \nmid |G|$인 것은 정확히 $r = 0$일 때이다. $r = 0$이라 하자. $P$가 실로우 $p$-부분군이면 (1)에 의해 $P$는 $G$의 $p$-부분군이고, $p \nmid |G|$이므로 $p$-군의 (8)에 의해 $P = \{e\}$이다. 거꾸로 부분군의 (4)에 의해 $\{e\}$는 $G$의 부분군이고 [[group|군]]의 (5)에 의해 $|\{e\}| = 1 = p^0$이므로 실로우 $p$-부분군이다. 따라서 $\operatorname{Syl}_p(G) = \{\{e\}\}$이다. [[finite-set|유한집합]]의 (F1)에 의해 $\{1, \dots, 1\} = \{1\}$이고, $1$을 $\{e\}$로 보내는 함수 $\{1\} \to \{\{e\}\}$는 전단사이므로 $\operatorname{Syl}_p(G)$는 원소를 $1$개 갖는 유한집합이고 $n_p = 1$이다.

**(4)** $|G| = p^n = p^n \cdot 1$이고 PPD의 (7)에 의해 $p \nmid 1$이므로, PPD의 (5)의 유일성에 의해 $(r, m) = (n, 1)$이다. $P$가 실로우 $p$-부분군이면 $P \subseteq G$이고 $|P| = p^n = |G|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $P = G$이다. 거꾸로 $G$는 $G$ 자신의 부분군이고 원소를 $p^n = p^r$개 가지므로 실로우 $p$-부분군이다. 따라서 $\operatorname{Syl}_p(G) = \{G\}$이고, (3)의 증명과 같이 $1$을 $G$로 보내는 함수 $\{1\} \to \{G\}$가 전단사이므로 $n_p = 1$이다.

**(5)** $P$가 실로우 $p$-부분군이고 $g \in G$이면, [[group-action-examples|군의 작용의 예]]의 (6)(i)에 의해 $gPg^{-1}$은 $G$의 부분군이고 유한집합이며 $|gPg^{-1}| = |P| = p^r$이므로 실로우 $p$-부분군이다.

같은 항목의 (6)(iii)의 정의에 의해, $G$의 부분군 $K$가 $\mathcal{S}_{p^r}$에 속하는 것은 정확히 $K$가 원소를 $p^r$개 갖는 유한집합일 때, 곧 $|K| = p^r$일 때이다. 따라서 $\operatorname{Syl}_p(G) = \mathcal{S}_{p^r}$이고, 같은 (6)(iii)에 의해 $\operatorname{Syl}_p(G)$는 부분군 위의 켤레 작용((6)(ii))에 대해 $G$-불변이다. [[group-action|군의 작용]]의 (5)에 의해 $G$는 $\operatorname{Syl}_p(G)$에 제한한 작용으로 작용하고, 같은 항목의 (4)에 의해 이 작용을 $H \times \operatorname{Syl}_p(G)$로 제한한 것은 군 $H$의 작용이며, 그 값은 $h \cdot P = hPh^{-1}$이다.

안정자. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)(v)에 의해 부분군 위의 켤레 작용에서 $P$의 안정자는 $\{g \in G : gPg^{-1} = P\}$이고, 이것은 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 정의에 의해 $N_G(P)$이다. 같은 항목(안정자와 고정점)의 (6)(ii)에 의해 $\operatorname{Syl}_p(G)$로 제한한 작용에서도 $P$의 안정자는 $N_G(P)$이고, 같은 항목의 (6)(i)에 의해 그것을 $H$로 제한한 작용에서 $P$의 안정자는 $N_G(P) \cap H$이다. 같은 항목의 (4)(ii)를 $H$의 작용에 쓰면, $P$가 $H$의 작용의 고정점인 것은 정확히 $P$의 안정자가 $H$일 때, 곧 $N_G(P) \cap H = H$일 때이고, 이것은 정확히 $H \subseteq N_G(P)$일 때이다. $H = G$이면 $N_G(P) \cap G = N_G(P)$이다.

**(6)** $\operatorname{Syl}_p(G) = \{P\}$라 하자. 모든 $g \in G$에서 (5)에 의해 $gPg^{-1} \in \operatorname{Syl}_p(G) = \{P\}$이므로 $gPg^{-1} = P$이다. 따라서 정규화 부분군의 정의에 의해 $N_G(P) = G$이고, 중심화 부분군과 정규화 부분군의 (4)에 의해 $P$는 $G$의 정규부분군이다.

**(7)** $P \subseteq H$이므로 [[lagrange-theorem|라그랑주 정리]]의 (3)(탑 공식)에 의해 $P$는 군 $H$의 부분군이고 $[G : P] = [G : H] \cdot [H : P]$이다. (2)에 의해 $[G : P] = m$이므로 $[G : H]$는 $m$을 나눈다([[divisibility|나누어떨어짐]]). $p \mid [G : H]$이면 [[divisibility-is-transitive|나누어떨어짐의 추이성]]에 의해 $p \mid m$이 되어 어긋나므로 $p \nmid [G : H]$이다.

군 $H$에서 $P$가 실로우 $p$-부분군이라는 것을 보인다. 라그랑주 정리의 (1)을 군 $H$에 쓰면 $H$는 유한군이다. $[H : P]$는 위 등식 $m = [G : H] \cdot [H : P]$에서 $m$을 나누므로, $p \mid [H : P]$이면 추이성에 의해 $p \mid m$이 되어 어긋난다. 따라서 $p \nmid [H : P]$이다. 또 $P$는 군 $P$가 $p$-군이므로 군 $H$의 $p$-부분군이다. (2)를 유한군 $H$와 그 부분군 $P$에 쓰면 $P$는 군 $H$의 실로우 $p$-부분군이다.

마지막으로 중심화 부분군과 정규화 부분군의 (3)에 의해 $N_G(P)$는 $P \subseteq N_G(P)$인 $G$의 부분군이므로 $H = N_G(P)$로 두면 $p \nmid [G : N_G(P)]$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$(\mathbb{Z}_{12}, +)$의 실로우 부분군]
[[number-groups|수로 이루어진 군]]의 (4)에 의해 $|\mathbb{Z}_{12}| = 12$이고, [[cyclic-subgroup|순환 부분군]]의 (5), (6)에 의해 $\mathbb{Z}_{12}$는 $[1]$이 생성하는 순환군입니다.

$p = 2$이면 $12 = 2^2 \cdot 3$이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$입니다([[even-and-odd|짝수와 홀수]]). 따라서 $r = 2$, $m = 3$이고, 실로우 $2$-부분군은 원소가 $4$개인 부분군입니다. [[subgroups-of-finite-cyclic-group|유한 순환군의 부분군]]의 (2)에 의해 원소가 $4$개인 부분군은 $H_4 = \langle 3 \cdot [1] \rangle$ 하나뿐이고, [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $3 \cdot [1] = [3]$입니다. 따라서 $\operatorname{Syl}_2(\mathbb{Z}_{12}) = \{\langle [3] \rangle\}$이고 $n_2 = 1$입니다.

$p = 3$이면 $12 = 3^1 \cdot 4$이고, $4 = 3 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $3 \nmid 4$입니다. 따라서 $r = 1$, $m = 4$이고, 같은 방법으로 $\operatorname{Syl}_3(\mathbb{Z}_{12}) = \{\langle [4] \rangle\}$, $n_3 = 1$입니다.

$p = 5$이면 $12 = 5 \cdot 2 + 2$이므로 나눗셈 정리에 의해 $5 \nmid 12$이고, (3)에 의해 $\operatorname{Syl}_5(\mathbb{Z}_{12}) = \{\{[0]\}\}$입니다.
:::

:::example[$A_4$의 실로우 부분군]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 2^2 \cdot 3$입니다. 같은 항목의 (6)의 $V = \{i, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$는 원소가 $4$개인 $A_4$의 부분군이므로 $A_4$의 실로우 $2$-부분군입니다. (2)에 의해 $[A_4 : V] = 3$이고 $2 \nmid 3$입니다.

$\sigma = (1\ 2\ 3)$이라 하면 교대군의 (5)에 의해 $\sigma \in A_4$이고 $\operatorname{ord}(\sigma) = 3$입니다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle \sigma \rangle$는 $A_4$의 부분군이고, [[order-of-cyclic-subgroup|순환 부분군의 원소의 개수]]의 (1)에 의해 $|\langle \sigma \rangle| = 3$이므로 $\langle \sigma \rangle$는 $A_4$의 실로우 $3$-부분군입니다. (5)에 의해 $g \in A_4$마다 $g \langle \sigma \rangle g^{-1}$도 실로우 $3$-부분군입니다.
:::

:::counterexample[원소가 $2$개인 $\{[0], [6]\}$]
$(\mathbb{Z}_{12}, +)$에서 $12 = 2 \cdot 6$이므로 [[subgroups-of-finite-cyclic-group|유한 순환군의 부분군]]의 (2)에 의해 $H_2 = \langle 6 \cdot [1] \rangle = \langle [6] \rangle$는 원소가 $2 = 2^1$개인 부분군입니다. $H_2$는 $[0]$과 $[6]$을 포함하고 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0] \ne [6]$이므로 $H = H_2 = \{[0], [6]\}$입니다. 그래서 $H$는 $2$-부분군이지만, $2^1 \ne 2^2$이므로 실로우 $2$-부분군이 아닙니다. 라그랑주 정리에 의해 $12 = [\mathbb{Z}_{12} : H] \cdot 2$이므로 $[\mathbb{Z}_{12} : H] = 6$이고, 이 수는 $2$로 나누어떨어집니다. 이것은 (2)의 판정과 맞습니다. 이처럼 $p$-부분군이 실로우 $p$-부분군이 아닐 수 있습니다.
:::

## 확인 질문

:::check[원소가 $40$개인 군에서 실로우 $2$-부분군, 실로우 $3$-부분군, 실로우 $5$-부분군의 원소의 개수는 무엇인가?]
$40 = 2^3 \cdot 5$이고 $5 = 2 \cdot 2 + 1$은 홀수여서 $2 \nmid 5$이므로 $p = 2$에서 $r = 3$, 실로우 $2$-부분군은 원소가 $8$개입니다. $40 = 3 \cdot 13 + 1$이므로 $3 \nmid 40$이고, (3)에 의해 실로우 $3$-부분군은 $\{e\}$ 하나이며 원소가 $1$개입니다. $40 = 5^1 \cdot 8$이고 $8 = 5 \cdot 1 + 3$이므로 $5 \nmid 8$이어서 실로우 $5$-부분군은 원소가 $5$개입니다. 정의는 원소가 $8$개, $5$개인 부분군이 있다는 것을 말하지 않으므로, 여기서 답한 것은 "있다면 원소가 몇 개인가"입니다.
:::

:::check[원소가 $15$개인 군 $G$의 실로우 $5$-부분군 $P$에 대하여 $[G : N_G(P)]$는 무엇일 수 있는가?]
$15 = 5 \cdot 3$이고 $5 \nmid 3$이므로 $m = 3$입니다. (7)에 의해 $[G : N_G(P)]$는 $3$을 나누는 양의 정수이므로 $1$이거나 $3$입니다([[prime-number|소수]] $3$의 양의 약수). 이 수가 $1$이면 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|G| = 1 \cdot |N_G(P)|$이고 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $N_G(P) = G$이므로, $P$는 정규부분군입니다([[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (4)).
:::
