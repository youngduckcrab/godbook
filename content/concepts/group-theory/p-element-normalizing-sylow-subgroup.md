---
title: 실로우 부분군을 정규화하는 p-원소
title_en: p-Elements Normalizing a Sylow Subgroup
aliases: [실로우 부분군의 정규화 부분군 안의 p-원소, 정규화 부분군 안의 실로우 부분군, p-elements in the normalizer of a Sylow subgroup]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: 유한군 G의 실로우 p-부분군 P를 정규화하는 원소의 위수가 p의 거듭제곱이면 그 원소는 P에 들어간다. 따라서 N_G(P)에 들어가는 p-부분군은 P에 들어가고, N_G(P)에 들어가는 실로우 p-부분군은 P뿐이며, P가 실로우 p-부분군 전체에 켤레로 작용할 때 고정점은 P 하나뿐이다.
requires: [prime-number, well-ordering-principle, even-and-odd, divisibility, finite-set, subset-of-finite-set, prime-power-divisors, group, subgroup, left-coset, normal-subgroup, quotient-group, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, centralizer-and-normalizer, subgroups-of-a-quotient-group, p-group, cauchy-theorem, sylow-subgroup, group-action, stabilizer-and-fixed-points, power-in-a-group, cycle-permutation, conjugate-of-a-cycle, alternating-group, number-groups, integers-modulo-n, division-theorem, congruence-modulo-n, equivalence-classes-equal-iff-related]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 The Sylow Theorems, Lemma 15.5 p.182(증명 p.182–183), 15.4절 연습문제 4 p.187
    checked: original
    note: "진술 (1)은 출처 Lemma 15.5(p.182, 'P 가 유한군 G 의 실로우 p-부분군이고 x 의 위수가 p 의 거듭제곱일 때 x⁻¹Px = P 이면 x ∈ P')와 같다. 출처의 가정 x⁻¹Px = P 와 이 항목의 가정 x ∈ N_G(P) 가 같다는 것은 '중심화 부분군과 정규화 부분군' (5)이다. 출처의 증명(p.182, 그 쪽을 그림으로 확인했다)은 'x ∈ N(P) 이고 순환 부분군 ⟨xP⟩ ⊂ N(P)/P 의 위수가 p 의 거듭제곱'이라 하고, 대응 정리로 H/P = ⟨xP⟩ 인 N(P) 의 부분군 H 를 얻어 |H| = |P|·|⟨xP⟩| 가 p 의 거듭제곱이라 한 뒤 'P 의 위수는 |G| 를 나누는 p 의 가장 큰 거듭제곱이므로 H = P' 라고 적는다. 출처는 x⁻¹Px = P 에서 x ∈ N(P) 를 'Certainly' 로, ⟨xP⟩ 의 위수가 p 의 거듭제곱이라는 것을 까닭을 붙이지 않고 적는다. 출처의 실로우 p-부분군의 정의는 '극대 p-부분군'(p.182)이고, 증명의 'P 의 위수는 |G| 를 나누는 p 의 가장 큰 거듭제곱' 에는 까닭이 붙어 있지 않다. 이 항목은 실로우 p-부분군을 원소의 개수로 정의하는 이 강의의 정의를 쓰고, (xP)^{pᵏ} = P 에서 xP 의 위수가 pᵏ 을 나누는 것, 몫군의 부분군의 원소의 개수, '실로우 p-부분군' (1)로 H 의 원소의 개수가 pʳ 을 넘지 못한다는 것을 차례로 보인다. (3)은 출처 15.4절 연습문제 4(p.187, 'H 가 G 의 실로우 p-부분군이면 N(H) 에 들어가는 G 의 실로우 p-부분군은 H 뿐이다')와 같다. (2)와 (4)는 출처 Theorem 15.7 의 증명(p.183)의 마지막 문장('x⁻¹P_jx = P_j 가 모든 x ∈ Q 에서 성립하므로 Lemma 15.5 에 의해 P_j = Q')과 Theorem 15.8 의 증명(p.183, 'P 의 켤레 작용에서 P 의 켤레는 P 자신뿐')이 Lemma 15.5 를 쓰는 자리를 진술로 올린 것이다. 예시 '$A_4$의 $\\langle (1\\ 2\\ 3) \\rangle$과 $(1\\ 2\\ 4)$'의 켤레 계산 (1 2 4)(1 2 3)(1 2 4)⁻¹ = (2 4 3) 은 출처 Proposition 6.15 의 증명(p.77)에 같은 식으로 나온다. 반례 '위수가 $2$의 거듭제곱이 아닌 $[2] \\in \\mathbb{Z}_6$'의 대상은 출처 Example 4.5(p.47, Z₆ 에서 2 의 위수는 3)와 Example 6.1·6.6(p.74–75, Z₆ 의 부분군 H = {0, 3})에 나오는 것과 같다. 반례 '실로우 $2$-부분군이 아닌 $\\{[0], [2]\\}$'의 부분군은 출처 3.3절(p.39, Z₄ 의 자명하지 않은 진부분군은 {0, 2} 하나)에 나오고, 출처 13.1절(p.159)은 Z₄ 를 2-군의 예로 든다. 확인 질문 '$G$의 실로우 $p$-부분군 $P$가 $G$의 정규부분군이면 $G$의 실로우 $p$-부분군은 몇 개인가?'의 결론은 출처 15.4절 연습문제 7(p.187, 원소가 pᵏ 개인 정규부분군은 모든 실로우 p-부분군에 들어간다)을 P 자신에 쓴 것과 같고, 그 역이 15.4절 연습문제 11(p.187)이다. 확인 질문 '유한 아벨군 $G$의 실로우 $p$-부분군 $P$에 대하여, 위수가 $p$의 거듭제곱인 $G$의 원소는 모두 $P$에 들어가는가?'의 결론은 출처 Lemma 13.8(p.160)이 유한 아벨군에서 위수가 pᵢ 의 거듭제곱인 원소 전체를 부분군 Gᵢ 로 두는 것과 같은 대상을 말한다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(제1 정리 강한 꼴의 고정점 단계 대조, 코시 정리의 두 경우와 p-군 동치 (2) 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 유한 [[group|군]]이며 $e$가 그 항등원이라 하자. 원소의 위수 $\operatorname{ord}(x)$는 [[order-of-an-element|원소의 위수]]의 것이고, $G$의 원소의 위수는 모두 유한하다(그 항목의 (6)). $x \in G$의 **위수가 $p$의 거듭제곱**이라는 것은 $\operatorname{ord}(x) = p^k$인 $0$ 이상인 정수 $k$가 있다는 뜻이고, $p^k$는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이다. 위수가 $p$의 거듭제곱인 원소를 **$p$-원소**($p$-element)라 한다. $p$-부분군은 [[p-group|p-군]]의 것이고, 실로우 $p$-부분군, $\operatorname{Syl}_p(G)$, 그리고 $\operatorname{Syl}_p(G)$ 위의 켤레 작용은 [[sylow-subgroup|실로우 p-부분군]]의 것이며, 정규화 부분군 $N_G(P)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이다.

1. (원소) $P \in \operatorname{Syl}_p(G)$이고 $x \in G$의 위수가 $p$의 거듭제곱이며 $x \in N_G(P)$이면 $x \in P$이다. 여기서 $x \in N_G(P)$인 것은 정확히 $x^{-1}Px = P$일 때이다.
2. ($p$-부분군) $P \in \operatorname{Syl}_p(G)$이고 $Q$가 $G$의 $p$-부분군이며 $Q \subseteq N_G(P)$이면 $Q \subseteq P$이다.
3. (정규화 부분군 안의 실로우 $p$-부분군) $P, Q \in \operatorname{Syl}_p(G)$이면, $Q \subseteq N_G(P)$인 것은 정확히 $Q = P$일 때이다. 곧 $N_G(P)$에 포함되는 $G$의 실로우 $p$-부분군은 $P$뿐이다.
4. (켤레 작용의 고정점) $H$가 $G$의 $p$-부분군이고, 실로우 $p$-부분군의 (5)에 의해 $H$가 $\operatorname{Syl}_p(G)$에 $h \cdot Q = hQh^{-1}$로 작용한다고 하자. $Q \in \operatorname{Syl}_p(G)$가 이 작용의 고정점인 것은 정확히 $H \subseteq Q$일 때이다. 특히 $P \in \operatorname{Syl}_p(G)$이고 $H = P$이면, 이 작용의 고정점 전체의 집합은 $\{P\}$이다.
:::

:::english
Let $p$ be a prime and let $G$ be a finite group with identity $e$. The order $\operatorname{ord}(x)$ of an element is as in the entry on the order of an element, and every element of $G$ has finite order (item (6) of that entry). We say that **the order of $x \in G$ is a power of $p$** if there is an integer $k \ge 0$ with $\operatorname{ord}(x) = p^k$, where $p^k$ is as in the entry on powers of a prime and their divisors. An element whose order is a power of $p$ is called a **$p$-element**. $p$-subgroups are as in the entry on $p$-groups; Sylow $p$-subgroups, $\operatorname{Syl}_p(G)$, and the conjugation action on $\operatorname{Syl}_p(G)$ are as in the entry on Sylow $p$-subgroups; and the normalizer $N_G(P)$ is as in the entry on centralizers and normalizers.

1. (Elements) If $P \in \operatorname{Syl}_p(G)$, the order of $x \in G$ is a power of $p$, and $x \in N_G(P)$, then $x \in P$. Here $x \in N_G(P)$ holds if and only if $x^{-1}Px = P$.
2. ($p$-subgroups) If $P \in \operatorname{Syl}_p(G)$, $Q$ is a $p$-subgroup of $G$, and $Q \subseteq N_G(P)$, then $Q \subseteq P$.
3. (Sylow $p$-subgroups inside the normalizer) If $P, Q \in \operatorname{Syl}_p(G)$, then $Q \subseteq N_G(P)$ if and only if $Q = P$. That is, $P$ is the only Sylow $p$-subgroup of $G$ contained in $N_G(P)$.
4. (Fixed points of the conjugation action) Let $H$ be a $p$-subgroup of $G$, and let $H$ act on $\operatorname{Syl}_p(G)$ by $h \cdot Q = hQh^{-1}$, as in item (5) of the entry on Sylow $p$-subgroups. Then $Q \in \operatorname{Syl}_p(G)$ is a fixed point of this action if and only if $H \subseteq Q$. In particular, if $P \in \operatorname{Syl}_p(G)$ and $H = P$, then the set of all fixed points of this action is $\{P\}$.
:::

## 직관

실로우 $p$-부분군 $P$는 $|G|$에 들어 있는 $p$를 모두 가져간 부분군입니다. 위수가 $p$의 거듭제곱인 원소 $x$가 $P$를 정규화하면서 $P$ 밖에 있다면, $P$와 $x$를 함께 담은 부분군을 $N_G(P)$ 안에 만들 수 있고 그 원소의 개수는 $|P|$보다 큰 $p$의 거듭제곱이 됩니다. 그런 $p$-부분군은 [[sylow-subgroup|실로우 p-부분군]]의 (1)에 의해 있을 수 없으므로 $x$는 처음부터 $P$에 있어야 합니다.

정원이 꽉 찬 동아리에 비유할 수 있습니다. 어떤 학교에서 한 종류의 학생이 가장 많이 모인 동아리가 있을 때, 그 동아리와 잘 어울리는 같은 종류의 학생은 이미 그 동아리의 회원입니다. 아니라면 그 학생을 넣어 더 큰 동아리를 만들 수 있기 때문입니다. 동아리가 $P$, "같은 종류"가 위수가 $p$의 거듭제곱이라는 것, "잘 어울린다"가 $x$가 $P$를 정규화한다는 것, "가장 많이 모였다"가 원소의 개수가 $p^r$이라는 것에 해당합니다.

(4)는 이것을 작용의 말로 바꾼 것입니다. $p$-부분군 $H$가 켤레로 고정하는 실로우 $p$-부분군은 정확히 $H$를 포함하는 것이고, 실로우 $p$-부분군 $P$ 자신이 고정하는 실로우 $p$-부분군은 $P$ 하나뿐입니다.

## 증명

:::idea
$M = N_G(P)$에서 $P$는 정규부분군이다. 몫군 $M/P$에서 $xP$의 위수는 $\operatorname{ord}(x)$를 나누므로 $p$의 거듭제곱 $p^j$이고, $\langle xP \rangle$를 몫군의 부분군의 대응으로 되돌린 $M$의 부분군은 원소가 $p^{r+j}$개인 $p$-부분군이다. 실로우 $p$-부분군의 (1)에 의해 $r + j \le r$이므로 $j = 0$이고 $xP = P$, 곧 $x \in P$이다.
:::

:::hint
[[quotient-group|몫군]]의 (3)에 의해 $(xP)^{p^k} = x^{p^k}P = P$이므로 $xP$의 위수는 $p^k$를 나눕니다.
:::

:::hint
[[subgroups-of-a-quotient-group|몫군의 부분군]]의 (4)에 의해 $\langle xP \rangle$에 짝지어지는 $M$의 부분군은 원소가 $|\langle xP \rangle| \cdot |P|$개입니다.
:::

:::proof
정수에 관하여 [[well-ordering-principle|정렬 원리]]의 진술의 (Z7), (L2)와 거기서 받아들인 계산 법칙을 쓴다. "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술이고, "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$), "중심화·정규화의 ($k$)"는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 ($k$)이다. $(r, m)$은 실로우 $p$-부분군의 진술의 쌍이다.

**(1)** 마지막 문장은 중심화·정규화의 (5)의 첫 문장이다. $P \in \operatorname{Syl}_p(G)$이고 $\operatorname{ord}(x) = p^k$이며 $x \in N_G(P)$라 하자. $M = N_G(P)$로 둔다.

*$M$과 몫군 $M/P$.* 중심화·정규화의 (3)에 의해 $M$은 $G$의 부분군이고 $P \subseteq M$이며, $P$는 군 $M$의 정규부분군이다. [[subgroup|부분군]]의 (8)에 의해 $M$은 유한군이고, [[quotient-group|몫군]]의 (2)와 (5)에 의해 $M/P$는 유한군이며 그 항등원은 $eP = P$이다. [[subgroups-of-a-quotient-group|몫군의 부분군]]의 (6)에 의해 $a \in M$에 대하여 군 $M$ 안에서 만든 $P$의 왼쪽 잉여류는 $G$ 안에서 만든 $aP$와 같은 집합이므로 그대로 $aP$로 쓴다.

*$xP$의 위수.* $x \in M$이고 위수의 (9)에 의해 군 $M$에서도 $\operatorname{ord}(x) = p^k$이다. 몫군의 (3)을 군 $M$에 쓰면 $(xP)^{p^k} = x^{p^k}P = eP$이다. 위수의 (6)에 의해 $xP$의 위수는 유한하고, 위수의 (2)를 군 $M/P$의 원소 $xP$에 쓰면 $\operatorname{ord}(xP) \mid p^k$이다. $\operatorname{ord}(xP)$는 자연수이므로 $p^k$의 양의 약수이고, PPD의 (3)에 의해 $0 \le j \le k$이고 $\operatorname{ord}(xP) = p^j$인 정수 $j$가 있다.

*되돌린 부분군.* $S = \langle xP \rangle$라 하자. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $S$는 $M/P$의 부분군이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $|S| = p^j$이다. 몫군의 부분군의 (2)와 (4)를 유한군 $M$과 그 정규부분군 $P$에 쓰면 $L = \{g \in M : gP \in S\}$는 군 $M$의 부분군이고
$$|L| = |S| \cdot |P| = p^j \cdot p^r = p^{r+j}$$
이다(PPD의 (1)의 (ii)). 부분군의 (6)에 의해 $L$은 $G$의 부분군이고, 군 $L$은 원소가 $p^{r+j}$개인 유한군이므로 [[p-group|p-군]]의 정의에 의해 $L$은 $G$의 $p$-부분군이다.

*$j = 0$.* [[sylow-subgroup|실로우 p-부분군]]의 (1)에 의해 $|L| = p^{k'}$이고 $k' \le r$인 $0$ 이상인 정수 $k'$이 있다. $p^{k'} = p^{r+j}$이므로 PPD의 (2)에 의해 $k' = r + j$이고, 따라서 $r + j \le r$이다. (Z7)에 의해 양변에서 $r$을 빼면 $j \le 0$이고, $0 \le j$이므로 (L2)에 의해 $j = 0$이다.

*결론.* $\operatorname{ord}(xP) = p^0 = 1$이므로 위수의 (1)을 군 $M/P$에 쓰면 $xP$는 그 항등원 $P$이다. [[left-coset|잉여류]]의 (5)를 군 $M$과 그 부분군 $P$에 쓰면 $xP = P$에서 $x \in P$이다.

**(2)** $x \in Q$라 하자. $Q$는 $G$의 $p$-부분군이므로 [[cauchy-theorem|코시 정리]]의 (3)에 의해 $x$의 위수는 $p$의 거듭제곱이다. $Q \subseteq N_G(P)$이므로 $x \in N_G(P)$이고, (1)에 의해 $x \in P$이다. 따라서 $Q \subseteq P$이다.

**(3)** $Q \subseteq N_G(P)$라 하자. 실로우 $p$-부분군의 (1)에 의해 $Q$는 $G$의 $p$-부분군이므로 (2)에 의해 $Q \subseteq P$이다. 실로우 $p$-부분군의 정의에 의해 $|Q| = p^r = |P|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Q = P$이다. 거꾸로 $Q = P$이면 중심화·정규화의 (3)에 의해 $Q = P \subseteq N_G(P)$이다.

**(4)** 실로우 $p$-부분군의 (5)에 의해, $Q \in \operatorname{Syl}_p(G)$가 $H$의 이 작용의 고정점인 것은 정확히 $H \subseteq N_G(Q)$일 때이다. $H \subseteq N_G(Q)$이면 (2)를 실로우 $p$-부분군 $Q$와 $p$-부분군 $H$에 쓰면 $H \subseteq Q$이다. 거꾸로 $H \subseteq Q$이면 중심화·정규화의 (3)에 의해 $Q \subseteq N_G(Q)$이므로 $H \subseteq N_G(Q)$이다. 따라서 $Q$가 고정점인 것은 정확히 $H \subseteq Q$일 때이다.

$P \in \operatorname{Syl}_p(G)$이면 실로우 $p$-부분군의 (1)에 의해 $P$는 $p$-부분군이므로 $H = P$로 둘 수 있다. 그러면 $Q \in \operatorname{Syl}_p(G)$가 고정점인 것은 정확히 $P \subseteq Q$일 때이다. $P \subseteq Q$이면 $|P| = p^r = |Q|$이므로 유한집합의 부분집합의 (2)에 의해 $P = Q$이고, 거꾸로 $Q = P$이면 $P \subseteq Q$이다. 따라서 고정점 전체의 집합은 $\{Q \in \operatorname{Syl}_p(G) : Q = P\} = \{P\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$A_4$의 $\langle (1\ 2\ 3) \rangle$과 $(1\ 2\ 4)$]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 3 \cdot 4$이고, $4 = 3 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $3 \nmid 4$입니다. 따라서 $p = 3$에서 $r = 1$이고, 원소가 $3$개인 부분군이 실로우 $3$-부분군입니다.

$\sigma = (1\ 2\ 3)$이라 하면 [[cycle-permutation|순환치환]]의 (4)에 의해 $\operatorname{ord}(\sigma) = 3$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $P = \langle \sigma \rangle = \{\sigma^0, \sigma^1, \sigma^2\}$는 원소가 $3$개입니다. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $\sigma^2 = \sigma\sigma$이고, 이것은 $1$을 $3$으로, $2$를 $1$로, $3$을 $2$로, $4$를 $4$로 보내므로 $(1\ 3\ 2)$입니다. 따라서 $P = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$이고 $P \in \operatorname{Syl}_3(A_4)$입니다.

$\rho = (1\ 2\ 4)$는 교대군의 (5)에 의해 $A_4$의 원소이고, 순환치환의 (4)에 의해 위수가 $3 = 3^1$입니다. 교대군의 (5)의 열두 치환은 서로 다르므로 $\rho \notin P$입니다. 따라서 (1)에 의해 $\rho \notin N_{A_4}(P)$, 곧 $\rho P \rho^{-1} \ne P$입니다. 직접 계산해도 그렇습니다. $\rho(1) = 2$, $\rho(2) = 4$, $\rho(3) = 3$이므로 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 $\rho\sigma\rho^{-1} = (2\ 4\ 3)$이고, 교대군의 (5)의 열두 치환은 서로 다르므로 이것은 $P$의 세 원소와 다릅니다.
:::

:::counterexample[위수가 $2$의 거듭제곱이 아닌 $[2] \in \mathbb{Z}_6$]
(1)에서 $x$의 위수가 $p$의 거듭제곱이라는 가정을 빼면 결론이 깨질 수 있습니다. $G = (\mathbb{Z}_6, +)$와 $p = 2$를 봅시다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_6$의 원소는 서로 다른 $[0], [1], \dots, [5]$이고 $|\mathbb{Z}_6| = 6 = 2 \cdot 3$이며, $3$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에 의해 $2 \nmid 3$입니다. 따라서 $r = 1$입니다.

[[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 정수 $n$, $a$에서 $n \cdot [a] = [na]$입니다. $6 - 0 = 6 \cdot 1$이므로 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[6] = [0]$이고, 따라서 $2 \cdot [3] = [6] = [0]$이며 $[3] \ne [0]$이므로 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([3]) = 2$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)과 [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $P = \langle [3] \rangle = \{[0], [3]\}$은 원소가 $2$개인 부분군, 곧 실로우 $2$-부분군입니다. [[number-groups|수로 이루어진 군]]의 (4)에 의해 $\mathbb{Z}_6$은 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $P$는 정규부분군이고, [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (4)에 의해 $N_G(P) = G$입니다.

$x = [2]$는 $N_G(P) = G$의 원소이지만 $P$의 원소가 아닙니다. $1 \cdot [2] = [2]$와 $2 \cdot [2] = [4]$는 $[0]$이 아니고 $3 \cdot [2] = [6] = [0]$이므로 원소의 위수의 (7)에 의해 $\operatorname{ord}([2]) = 3$입니다. $3$은 $2$의 거듭제곱이 아닙니다. $3 = 2^k$이면 $2^k$가 소수이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (6)에 의해 $k = 1$이 되어 $3 = 2$가 되기 때문입니다.
:::

:::counterexample[실로우 $2$-부분군이 아닌 $\{[0], [2]\}$]
(1)에서 $P$가 실로우 $p$-부분군이라는 가정을 빼면 결론이 깨질 수 있습니다. $G = (\mathbb{Z}_4, +)$와 $p = 2$를 봅시다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_4$의 원소는 서로 다른 $[0], [1], [2], [3]$이고 $|\mathbb{Z}_4| = 4 = 2^2$이므로, [[sylow-subgroup|실로우 p-부분군]]의 (4)에 의해 실로우 $2$-부분군은 $\mathbb{Z}_4$ 자신뿐입니다.

군의 거듭제곱의 (7)과 $4 - 0 = 4 \cdot 1$에 의해 $2 \cdot [2] = [4] = [0]$이고 $[2] \ne [0]$이므로 원소의 위수의 (7)에 의해 $\operatorname{ord}([2]) = 2$이고, $Q = \langle [2] \rangle = \{[0], [2]\}$는 원소가 $2$개인 $2$-부분군이지만 실로우 $2$-부분군이 아닙니다. $\mathbb{Z}_4$는 아벨군이므로 앞의 반례와 같은 까닭으로 $N_G(Q) = G$입니다. [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 4 = 2^2$이므로 $[1]$의 위수는 $2$의 거듭제곱이고 $[1] \in N_G(Q)$이지만, $[1] \notin Q$입니다.
:::

## 확인 질문

:::check[$G$의 실로우 $p$-부분군 $P$가 $G$의 정규부분군이면 $G$의 실로우 $p$-부분군은 몇 개인가?]
하나뿐입니다. [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (4)에 의해 $N_G(P) = G$입니다. $Q \in \operatorname{Syl}_p(G)$이면 $Q \subseteq G = N_G(P)$이므로 (3)에 의해 $Q = P$입니다. 따라서 $\operatorname{Syl}_p(G) = \{P\}$이고, $1$을 $P$로 보내는 함수 $\{1\} \to \{P\}$가 전단사이므로 [[finite-set|유한집합]]의 뜻으로 $n_p = 1$입니다.
:::

:::check[유한 아벨군 $G$의 실로우 $p$-부분군 $P$에 대하여, 위수가 $p$의 거듭제곱인 $G$의 원소는 모두 $P$에 들어가는가?]
들어갑니다. [[normal-subgroup|정규부분군]]의 (3)에 의해 $P$는 정규부분군이고, [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (4)에 의해 $N_G(P) = G$입니다. 따라서 위수가 $p$의 거듭제곱인 모든 $x \in G$는 $x \in N_G(P)$이고 (1)에 의해 $x \in P$입니다. 거꾸로 $P$의 원소의 위수는 [[cauchy-theorem|코시 정리]]의 (3)에 의해 $p$의 거듭제곱이므로, 아벨군에서 $P$는 위수가 $p$의 거듭제곱인 원소 전체의 집합과 같습니다.
:::
