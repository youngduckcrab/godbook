---
title: 실로우 제1 정리
title_en: The First Sylow Theorem
aliases: [실로우의 제1 정리, 실로우 부분군의 존재, First Sylow Theorem, Sylow's first theorem, existence of Sylow subgroups]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: 유한군 G의 원소가 pᵏ개인 부분군 H에 대하여 pᵏ⁺¹이 |G|를 나누면, H를 정규부분군으로 포함하는 원소가 pᵏ⁺¹개인 부분군이 있다. 따라서 pᵏ이 |G|를 나누면 원소가 pᵏ개인 부분군이 있고, 실로우 p-부분군이 있으며, 모든 p-부분군은 어떤 실로우 p-부분군에 들어간다.
requires: [prime-number, well-ordering-principle, divisibility, integer-cancellation, even-and-odd, mathematical-induction, congruence-modulo-n, prime-power-divisors, group, subgroup, lagrange-theorem, left-coset, normal-subgroup, quotient-group, group-action, group-action-examples, centralizer-and-normalizer, subgroups-of-a-quotient-group, p-group, fixed-points-of-p-group-action, cauchy-theorem, sylow-subgroup, symmetric-group, cycle-permutation, cyclic-subgroup, order-of-cyclic-subgroup, conjugate-of-a-cycle, disjoint-cycles-commute, alternating-group, division-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 The Sylow Theorems, Theorem 15.4 p.182(증명 p.182), 정규화 부분군에 관한 문단 p.182; 11.4절 연습문제 14 p.139
    checked: original
    note: "진술 (3)은 출처 Theorem 15.4(p.182, 'pʳ 이 |G| 를 나누면 G 에는 위수 pʳ 인 부분군이 있다')와 같다. 출처의 r 은 |G| 를 나누는 아무 거듭제곱의 지수이고, 이 항목의 r 은 '실로우 p-부분군'의 진술의 쌍 (r, m) 의 r 이므로 출처의 r 을 이 항목에서는 k 로 쓴다. 출처의 증명은 |G| 에 대한 귀납과 류 방정식으로 한다(p.182, 그 쪽을 그림으로 확인했다): 어떤 i 에서 p 가 [G : C(x_i)] 를 나누지 않으면 C(x_i) 에 귀납 가정을 쓰고, 그렇지 않으면 p | |Z(G)| 이므로 코시 정리로 위수 p 인 g ∈ Z(G) 를 얻어 N = ⟨g⟩ 로 나눈 G/N 에 귀납 가정을 쓴 뒤, 표준 준동형에 의한 역상이 위수 pʳ 인 부분군이라고 적는다. 출처는 그 역상의 원소의 개수를 이 자리에서 증명하지 않고, 같은 사실을 11.4절 연습문제 14(p.139)가 묻는다. 이 강의는 그것을 '몫군의 부분군' (4)로 쓴다. 이 항목은 지휘자 결정에 따라 (1)의 꼴을 먼저 증명하고 (2)–(4)를 그것으로 얻는다. (1)의 증명은 H 의 G/H 위 왼쪽 곱 작용의 고정점을 세는 것이고, 고정점 전체가 N_G(H)/H 라는 것과 코시 정리, 몫군의 부분군의 원소의 개수를 쓴다. 출처는 p.182 의 정규화 부분군 문단(Lemma 15.5 바로 앞)에서 H 가 N(H) 의 정규부분군이고 N(H) 는 H 가 정규부분군인 G 의 가장 큰 부분군이라고 적는다. (1)의 K ⊆ N_G(H) 는 이 사실과 같은 갈래이다. (2)를 G 가 p-군인 경우에 쓴 것(원소가 pʳ 개인 군에 원소가 pʳ⁻¹ 개인 부분군이 있다)에 정규성까지 묻는 것이 출처 15.4절 연습문제 12(p.187)이다. 예시 '$A_4$에서 $\\{i, (1\\ 2)(3\\ 4)\\}$를 포함하는 $V$'와 반례 '$A_4$의 정규부분군이 아닌 $\\{i, (1\\ 2)(3\\ 4)\\}$'의 군 A₄ 는 출처 Example 5.18(p.65)에 원소가 나열되어 있고, 반례의 켤레 계산은 A₄ 의 켤레류를 구하라는 14.5절 연습문제 5(p.179)와 같은 대상의 계산이다. 예시 '원소가 $24$개인 군'과 확인 질문 '원소가 $18$개인 군 $G$의 원소가 $3$개인 부분군 $H$에 대하여 $N_G(H)$의 원소의 개수에 관해 무엇을 말할 수 있는가?'의 원소의 개수 24, 18 은 출처 15.4절 연습문제 1(p.187, 위수 18, 24, 54, 72, 80 인 군의 실로우 p-부분군의 위수)에 나오는 수이다. 확인 질문 '원소가 $p^n$개인 군 $G$에서 $0 \\le k \\le n$인 정수 $k$마다 원소가 $p^k$개인 부분군이 있는가?'는 출처 14.5절 연습문제 25(p.180, 위수 pⁿ (n ≥ 2) 인 군에 위수 p 인 진부분군이 있음을 보이고, n ≥ 3 이면 위수 p² 인 진부분군이 있는지 묻는다)와 같은 물음이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(제1 정리 강한 꼴의 고정점 단계 대조, 코시 정리의 두 경우와 p-군 동치 (2) 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 유한 [[group|군]]이며 $e$가 그 항등원이라 하자. $0$ 이상인 정수 $k$에 대한 거듭제곱 $p^k$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이고, $p$-군과 $p$-부분군은 [[p-group|p-군]]의 것이다. 실로우 $p$-부분군, $\operatorname{Syl}_p(G)$, 그리고 $|G| = p^r \cdot m$이고 $p \nmid m$인 쌍 $(r, m)$은 [[sylow-subgroup|실로우 p-부분군]]의 것이다. 정규화 부분군 $N_G(H)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이고, 정규부분군은 [[normal-subgroup|정규부분군]]의 것이다. 아래에서 $k$와 $j$는 $0$ 이상인 정수이다.

1. (한 단계 큰 부분군) $H$가 원소가 $p^k$개인 $G$의 부분군이고 $p^{k+1} \mid |G|$이면, $H \subseteq K \subseteq N_G(H)$이고 원소가 $p^{k+1}$개인 $G$의 부분군 $K$가 있으며, 이 $K$에서 $H$는 군 $K$의 정규부분군이다. 여기서 $p^{k+1} \mid |G|$인 것은 정확히 $k < r$일 때이다.
2. (사슬) $H$가 원소가 $p^k$개인 $G$의 부분군이고 $k \le j \le r$이면, $H \subseteq K$이고 원소가 $p^j$개인 $G$의 부분군 $K$가 있다.
3. (실로우 제1 정리) $p^k \mid |G|$이면 원소가 $p^k$개인 $G$의 부분군이 있다. 특히 $G$의 실로우 $p$-부분군이 있다. 곧 $\operatorname{Syl}_p(G) \ne \emptyset$이다.
4. ($p$-부분군을 포함하는 실로우 $p$-부분군) $H$가 $G$의 $p$-부분군이면 $H \subseteq P$인 $P \in \operatorname{Syl}_p(G)$가 있다.
:::

:::english
Let $p$ be a prime and let $G$ be a finite group with identity $e$. For an integer $k \ge 0$, the power $p^k$ and divisibility are as in the entry on powers of a prime and their divisors, and $p$-groups and $p$-subgroups are as in the entry on $p$-groups. Sylow $p$-subgroups, $\operatorname{Syl}_p(G)$, and the pair $(r, m)$ with $|G| = p^r \cdot m$ and $p \nmid m$ are as in the entry on Sylow $p$-subgroups. The normalizer $N_G(H)$ is as in the entry on centralizers and normalizers, and normal subgroups are as in the entry on normal subgroups. Below, $k$ and $j$ are integers with $k, j \ge 0$.

1. (One step larger) If $H$ is a subgroup of $G$ with $p^k$ elements and $p^{k+1} \mid |G|$, then there is a subgroup $K$ of $G$ with $p^{k+1}$ elements and $H \subseteq K \subseteq N_G(H)$, and for this $K$, $H$ is a normal subgroup of the group $K$. Here $p^{k+1} \mid |G|$ holds if and only if $k < r$.
2. (Chains) If $H$ is a subgroup of $G$ with $p^k$ elements and $k \le j \le r$, then there is a subgroup $K$ of $G$ with $p^j$ elements and $H \subseteq K$.
3. (The First Sylow Theorem) If $p^k \mid |G|$, then $G$ has a subgroup with $p^k$ elements. In particular, $G$ has a Sylow $p$-subgroup; that is, $\operatorname{Syl}_p(G) \ne \emptyset$.
4. (A Sylow $p$-subgroup containing a $p$-subgroup) If $H$ is a $p$-subgroup of $G$, then there is $P \in \operatorname{Syl}_p(G)$ with $H \subseteq P$.
:::

## 직관

[[sylow-subgroup|실로우 p-부분군]]은 원소가 $p^r$개인 부분군으로 정의했을 뿐, 그런 부분군이 있는지는 말하지 않았습니다. 이 정리는 그것이 있다는 것, 더 나아가 원소가 $p^k$개인 부분군을 $p^r$개가 될 때까지 한 번에 $p$배씩 키울 수 있다는 것을 말합니다. 블록을 한 층씩 쌓는 탑에 비유할 수 있습니다. 한 층을 쌓을 때마다 원소의 개수가 $p$배가 되고((1)), 새로 쌓은 탑 $K$ 안에서 아래층 $H$는 정규부분군입니다. 탑의 높이는 $|G|$가 허락하는 $p^r$에서 멈춥니다. 탑의 한 층이 인수 $p$ 하나, 탑 전체가 부분군의 사슬 $H \subseteq K \subseteq \cdots$에 해당하고, 탑이 멈추는 높이가 실로우 $p$-부분군입니다.

한 층을 쌓는 방법은 고정점을 세는 것입니다. $H$가 잉여류 전체 $G/H$에 왼쪽 곱으로 작용하면, [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]에 의해 고정되는 잉여류의 개수는 $p$를 법으로 $[G : H]$와 같습니다. $p^{k+1}$이 $|G|$를 나누면 $p$가 $[G : H]$를 나누므로, 고정되는 잉여류의 개수도 $p$로 나누어떨어집니다. 그런데 고정되는 잉여류는 정확히 $N_G(H)$의 원소를 대표로 하는 잉여류이고, 이들은 몫군 $N_G(H)/H$를 이룹니다. 원소의 개수가 $p$로 나누어떨어지는 이 몫군에서 [[cauchy-theorem|코시 정리]]로 원소가 $p$개인 부분군을 찾아 $N_G(H)$로 되돌리면, 원소가 $p^{k+1}$개인 $K$를 얻습니다.

## 증명

:::idea
(1)이 핵심이다. $H$의 $G/H$ 위 왼쪽 곱 작용에서 고정점 전체는 $N_G(H)/H$이므로, 고정점의 개수에 관한 합동에 의해 $p$가 $|N_G(H)/H|$를 나눈다. 코시 정리로 $N_G(H)/H$에 원소가 $p$개인 부분군 $S$를 얻고, 몫군의 부분군의 대응으로 $S$를 $N_G(H)$의 부분군 $K$로 되돌린다. (2)는 (1)을 되풀이하는 귀납이고, (3)과 (4)는 (2)를 $\{e\}$와 $p$-부분군에 쓴 것이다.
:::

:::hint
$a \in G$에 대하여, 모든 $h \in H$에서 $(ha)H = aH$인 것은 정확히 모든 $h \in H$에서 $a^{-1}ha \in H$일 때입니다. $H$가 유한집합이면 이것은 $a \in N_G(H)$와 같습니다.
:::

:::hint
$|G| = [G : H] \cdot p^k$이고 $p^{k+1}$이 $|G|$를 나누면 $p$는 $[G : H]$를 나눕니다. [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (4)에 의해 $p$는 고정되는 잉여류의 개수도 나눕니다.
:::

:::proof
정수에 관하여 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5), (Z6), (L3), 그리고 거기서 받아들인 계산 법칙을 쓰고, 정수끼리의 차가 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술이고, "중심화·정규화의 ($k$)"는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 ($k$)이다.

**(1)** 먼저 마지막 문장을 보인다. PPD의 (5)에 의해 $p^{k+1} \mid |G|$인 것은 정확히 $k + 1 \le r$일 때이다. $k < r$이면 (Z1)에 의해 $k + 1 \le r$이고, $k + 1 \le r$이면 (L3)의 $k < k + 1$과 (Z6)에 의해 $k < r$이다.

$H$가 원소가 $p^k$개인 $G$의 부분군이고 $p^{k+1} \mid |G|$라 하자. $M = N_G(H)$로 둔다. 중심화·정규화의 (3)에 의해 $M$은 $G$의 부분군이고 $H \subseteq M$이며, $H$는 군 $M$의 정규부분군이다. [[subgroup|부분군]]의 (8)에 의해 $M$은 유한군이다.

*단계 1: $p \mid [G : H]$.* [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $G/H$는 유한집합이고 $|G| = [G : H] \cdot p^k$이다. $p^{k+1} \mid |G|$이므로 $|G| = p^{k+1} c$인 정수 $c$가 있고, PPD의 (1)의 (i)에 의해 $p^{k+1} = p^k \cdot p$이다. 따라서 $p^k \cdot [G : H] = p^k \cdot (pc)$이다. PPD의 (2)에 의해 $p^k \ge 1 > 0$이므로 (Z6)과 (Z5)에 의해 $p^k \ne 0$이고, [[integer-cancellation|정수의 소거]]의 (2)에 의해 $[G : H] = pc$이다. 곧 $p \mid [G : H]$이다.

*단계 2: 고정점의 개수.* [[group-action-examples|군의 작용의 예]]의 (5)에 의해 $G$는 $G/H$에 $g \cdot (aH) = (ga)H$로 작용하고, 이것을 $H$로 제한한 작용으로 $H$는 $G/H$에 $h \cdot (aH) = (ha)H$로 작용한다. 군 $H$는 유한군이고 원소가 $p^k$개이므로 [[p-group|p-군]]의 정의에 의해 $H$는 $G$의 $p$-부분군이다. [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (4)를 군 $G$, 유한집합 $X = G/H$, $p$-부분군 $H$에 쓰면, $H$의 작용의 고정점 전체의 집합
$$F = \{C \in G/H : \text{모든 } h \in H \text{에서 } h \cdot C = C\}$$
에 대하여 $|G/H| \equiv |F| \pmod p$이다.

*단계 3: $F = \{aH : a \in M\}$.* $a \in G$라 하자. $h \in H$에 대하여 [[left-coset|잉여류]]의 (3)의 (i)과 (v)의 동치를 두 원소 $ha$와 $a$에 쓰면, $(ha)H = aH$인 것은 정확히 $a^{-1}(ha) = a^{-1}ha \in H$일 때이다. 따라서 $aH \in F$인 것은 정확히 모든 $h \in H$에서 $a^{-1}ha \in H$일 때이다. $H$는 유한집합이므로 중심화·정규화의 (5)의 (i)과 (iv)의 동치에 의해, 이것은 정확히 $a \in M$일 때이다. 이제 $C \in F$이면 $G/H$의 정의에 의해 $C = aH$인 $a \in G$가 있고, 방금 본 것에 의해 $a \in M$이므로 $C \in \{aH : a \in M\}$이다. 거꾸로 $a \in M$이면 $aH \in G/H$이고 $aH \in F$이다. 따라서 $F = \{aH : a \in M\}$이다.

*단계 4: $p \mid |M/H|$.* $H \subseteq M$이므로 [[subgroups-of-a-quotient-group|몫군의 부분군]]의 (6)에 의해, 군 $M$에서의 $H$의 왼쪽 잉여류 전체의 집합 $M/H$는 $\{aH : a \in M\}$이고, 단계 3에 의해 이것은 $F$와 같은 집합이다. $H$가 군 $M$의 정규부분군이므로 [[quotient-group|몫군]]의 (2)와 (5)에 의해 $M/H$는 유한군이다. $F$와 $M/H$는 같은 집합이므로 $|F| = |M/H|$이고, 단계 2와 $|G/H| = [G : H]$에 의해 $[G : H] \equiv |M/H| \pmod p$이므로, [[congruence-modulo-n|합동]]의 정의에 의해 $[G : H] - |M/H| = pu$인 정수 $u$가 있다. 단계 1의 $[G : H] = pc$와 함께 $|M/H| = pc - pu = p(c - u)$이고 $c - u$는 정수이므로 $p \mid |M/H|$이다.

*단계 5: $K$를 만든다.* [[cauchy-theorem|코시 정리]]의 (1)을 유한군 $M/H$와 소수 $p$에 쓰면, 원소가 $p$개인 $M/H$의 부분군 $S$가 있다. 몫군의 부분군의 (2)와 (4)를 유한군 $M$과 그 정규부분군 $H$에 쓰면
$$K = \{g \in M : gH \in S\}$$
는 $H \subseteq K$인 군 $M$의 부분군이고 $|K| = |S| \cdot |H| = p \cdot p^k = p^{k+1}$이다(PPD의 (1)의 (i)). $K \subseteq M$이고 $M$은 $G$의 부분군이므로 부분군의 (6)에 의해 $K$는 $G$의 부분군이다. 또 $K \subseteq M = N_G(H)$이다.

*단계 6: $H$는 군 $K$의 정규부분군이다.* $H \subseteq K$이고 $H$와 $K$는 $G$의 부분군이므로 부분군의 (6)에 의해 $H$는 군 $K$의 부분군이다. $g \in K$, $h \in H$이면 $g \in N_G(H)$이므로 정규화 부분군의 정의에 의해 $gHg^{-1} = H$이고, 따라서 $ghg^{-1} \in gHg^{-1} = H$이다. 부분군의 (3)에 의해 군 $K$에서의 곱과 역원은 $G$의 것과 같으므로, [[normal-subgroup|정규부분군]]의 정의에 의해 $H$는 군 $K$의 정규부분군이다.

**(2)** $H$가 원소가 $p^k$개인 $G$의 부분군이라 하자. $j \ge k$인 정수 $j$에 대한 명제 $T_j$: "$j \le r$이면 $H \subseteq K$이고 원소가 $p^j$개인 $G$의 부분군 $K$가 있다"를 시작점이 $k$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

*기초 단계 $j = k$.* $K = H$로 두면 된다.

*귀납 단계.* $j \ge k$이고 $T_j$가 참이라 하자. $j + 1 \le r$이라 하면, (L3)에 의해 $j < j + 1$이므로 (Z6)에 의해 $j < r$이고, $T_j$에 의해 $H \subseteq K$이고 원소가 $p^j$개인 부분군 $K$가 있다. $j \ge k \ge 0$이고 $j < r$이므로 (1)의 마지막 문장에 의해 $p^{j+1} \mid |G|$이다. (1)을 $K$에 쓰면 $K \subseteq K'$이고 원소가 $p^{j+1}$개인 $G$의 부분군 $K'$이 있고, $H \subseteq K \subseteq K'$이다. 따라서 $T_{j+1}$이 참이다.

수학적 귀납법에 의해 $j \ge k$인 모든 정수 $j$에서 $T_j$가 참이고, $k \le j \le r$이면 $T_j$가 원하는 $K$를 준다.

**(3)** PPD의 (5)에 의해 $p^k \mid |G|$인 것은 정확히 $k \le r$일 때이다. 부분군의 (4)에 의해 $\{e\}$는 $G$의 부분군이고, [[group|군]]의 (5)와 PPD의 $0$제곱에 의해 $|\{e\}| = 1 = p^0$이다. $0 \le k \le r$이므로 (2)를 $H = \{e\}$, $0$, $k$에 쓰면 원소가 $p^k$개인 $G$의 부분군이 있다. 특히 $k = r$이면 $r \le r$이므로 원소가 $p^r$개인 부분군이 있고, [[sylow-subgroup|실로우 p-부분군]]의 정의에 의해 그것은 실로우 $p$-부분군이다.

**(4)** $H$가 $G$의 $p$-부분군이면 실로우 $p$-부분군의 (1)에 의해 $0 \le k \le r$이고 $|H| = p^k$인 정수 $k$가 있다. (2)를 $j = r$에 쓰면 $H \subseteq P$이고 원소가 $p^r$개인 $G$의 부분군 $P$가 있고, 실로우 $p$-부분군의 정의에 의해 $P \in \operatorname{Syl}_p(G)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$A_4$에서 $\{i, (1\ 2)(3\ 4)\}$를 포함하는 $V$]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 2^2 \cdot 3$이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에 의해 $2 \nmid 3$입니다. 따라서 $p = 2$에서 $r = 2$, $m = 3$입니다.

$\tau = (1\ 2)(3\ 4)$라 하면 교대군의 (5)에 의해 $\tau \in A_4$이고 $\operatorname{ord}(\tau) = 2$입니다. [[cyclic-subgroup|순환 부분군]]의 (1)과 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $H = \langle \tau \rangle = \{\tau^0, \tau^1\} = \{i, \tau\}$는 원소가 $2 = 2^1$개인 $A_4$의 부분군입니다. $k = 1 < 2 = r$이므로 (1)에 의해 $H$를 정규부분군으로 포함하는, 원소가 $4$개인 부분군이 있습니다.

실제로 교대군의 (6)의 $V = \{i\} \cup D$가 그런 부분군입니다. $V$는 원소가 $4$개인 $A_4$의 부분군이고 $H \subseteq V$입니다. $D$의 서로 다른 두 원소 $d$, $d'$에 대하여 같은 (6)에 의해 $dd'$과 $d'd$는 둘 다 $D$의 나머지 한 원소이므로 $dd' = d'd$이고, $i$는 모든 원소와 교환되므로 군 $V$는 아벨군입니다. [[normal-subgroup|정규부분군]]의 (3)에 의해 $H$는 군 $V$의 정규부분군입니다. (1)은 이런 부분군이 있다는 것만 말하고, 하나뿐이라고는 말하지 않습니다.
:::

:::example[원소가 $24$개인 군]
$G$가 원소가 $24$개인 군이라 합시다. $24 = 2^3 \cdot 3$이고 $3$은 홀수여서 $2 \nmid 3$이므로 $p = 2$에서 $r = 3$입니다. (3)에 의해 $G$에는 원소가 $1$, $2$, $4$, $8$개인 부분군이 있고, 원소가 $8$개인 것이 실로우 $2$-부분군입니다. $24 = 3 \cdot 8$이고 $8 = 3 \cdot 2 + 2$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $3 \nmid 8$이며, $p = 3$에서 $r = 1$이고 원소가 $3$개인 부분군이 있습니다.

(2)에 의해 원소가 $2$개인 부분군은 모두 원소가 $4$개인 어떤 부분군에 들어가고, 원소가 $4$개인 부분군은 모두 원소가 $8$개인 어떤 부분군에 들어갑니다. 이 군이 어떤 군인지 모르고도 여기까지 말할 수 있습니다.
:::

:::counterexample[$A_4$의 정규부분군이 아닌 $\{i, (1\ 2)(3\ 4)\}$]
(1)의 결론은 $H$가 새 부분군 $K$의 정규부분군이라는 것이고, $G$의 정규부분군이라는 것이 아닙니다. 첫째 예시의 $H = \{i, \tau\}$, $\tau = (1\ 2)(3\ 4)$는 $V$의 정규부분군이지만 $A_4$의 정규부분군이 아닙니다.

$\sigma = (1\ 2\ 3)$이라 하면 교대군의 (5)에 의해 $\sigma \in A_4$이고, [[cycle-permutation|순환치환]]의 정의에 의해 $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$, $\sigma(4) = 4$입니다. [[group-action-examples|군의 작용의 예]]의 (4)의 (iii)에 의해 $c_\sigma(x) = \sigma x \sigma^{-1}$는 [[symmetric-group|대칭군]] $S_4$에서 $S_4$로의 동형사상이므로
$$\sigma\tau\sigma^{-1} = c_\sigma((1\ 2))\, c_\sigma((3\ 4)) = (\sigma(1)\ \sigma(2))(\sigma(3)\ \sigma(4)) = (2\ 3)(1\ 4)$$
입니다. 가운데 등호는 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)입니다. [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (1)에 의해 $(2\ 3)(1\ 4) = (1\ 4)(2\ 3)$이고, 이것은 교대군의 (5)의 $D$의 원소입니다. 그 항목에서 열두 치환은 서로 다르므로 $(1\ 4)(2\ 3)$은 $i$와도 $\tau$와도 다르고, $\sigma\tau\sigma^{-1} \notin H$입니다. 따라서 정규부분군의 정의에 의해 $H$는 $A_4$의 정규부분군이 아닙니다.
:::

## 확인 질문

:::check[원소가 $p^n$개인 군 $G$에서 $0 \le k \le n$인 정수 $k$마다 원소가 $p^k$개인 부분군이 있는가?]
있습니다. [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (2)에 의해 $k \le n$이면 $p^k \mid p^n = |G|$이므로 (3)에 의해 원소가 $p^k$개인 부분군이 있습니다.
:::

:::check[원소가 $18$개인 군 $G$의 원소가 $3$개인 부분군 $H$에 대하여 $N_G(H)$의 원소의 개수에 관해 무엇을 말할 수 있는가?]
$9$이거나 $18$입니다. $18 = 3^2 \cdot 2$이므로 $3^{1+1} \mid 18$이고, (1)에 의해 $H \subseteq K \subseteq N_G(H)$이고 원소가 $9$개인 부분군 $K$가 있습니다. [[lagrange-theorem|라그랑주 정리]]의 (1)을 군 $N_G(H)$와 그 부분군 $K$에 쓰면 $|N_G(H)| = [N_G(H) : K] \cdot 9$이고, 같은 정리를 $G$와 그 부분군 $N_G(H)$에 쓰면 $18 = [G : N_G(H)] \cdot |N_G(H)|$입니다. 두 식에서 $18 = 9 \cdot ([G : N_G(H)] \cdot [N_G(H) : K])$이고, [[integer-cancellation|정수의 소거]]에 의해 $[G : N_G(H)] \cdot [N_G(H) : K] = 2$입니다. 지표는 잉여류의 개수이고 잉여류가 적어도 하나 있으므로 두 인수는 자연수이며, 따라서 $[N_G(H) : K]$는 $2$의 양의 약수 $1$ 또는 $2$이고, $|N_G(H)|$는 $9$ 또는 $18$입니다.
:::
