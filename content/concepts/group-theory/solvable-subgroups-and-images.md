---
title: 가해군의 부분군과 준동형상
title_en: Subgroups and Homomorphic Images of Solvable Groups
aliases: [가해군의 부분군, 가해군의 몫군, 가해군의 확장, 가해군의 준동형상, subgroups of solvable groups, quotients of solvable groups, extensions of solvable groups]
kind: theorem
field: group-theory
msc: ["20F16"]
level: undergrad
summary: "가해군의 부분군과 전사 준동형에 의한 상, 몫군은 가해군이다. 거꾸로 정규부분군 N과 몫군 G/N이 모두 가해군이면 G도 가해군이다."
requires: [set, subset, function, set-operations, injective-surjective-bijective, group, subgroup, subgroup-examples, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, normal-subgroup, left-coset, quotient-group, canonical-homomorphism, subgroups-of-a-quotient-group, finite-product-in-a-group, commutator, solvable-group, number-groups, greatest-common-divisor, coprime-divisors-product-divides, well-ordering-principle, prime-number, even-and-odd, symmetric-group, alternating-group, lagrange-theorem, order-divides-group-order, cyclic-subgroup]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "13.4 Exercises, 연습문제 12, 14, 15 (p.166); 부록 B 의 13.4.12 힌트 (p.327)"
    checked: original
    note: "(1)은 출처 연습문제 13.4.14('가해군의 부분군은 가해군'), (4)는 연습문제 13.4.15('가해군 G 와 정규부분군 N 에 대하여 G/N 은 가해군'), (5)는 연습문제 13.4.12('N 과 G/N 이 가해군이면 G 도 가해군')이고, 출처는 셋 모두 증명을 연습문제로 둔다. 13.4.12 의 힌트(p.327)는 N 과 G/N 의 가해열 N = Nₙ ⊃ ⋯ ⊃ N₀ = {e}, G/N = Gₙ/N ⊃ ⋯ ⊃ G₀/N = {N} 을 적는데, 이것은 G/N 의 부분군을 N 을 포함하는 부분군 Gᵢ 의 몫으로 쓴 꼴이다. 이 항목의 (5)는 그 대신 G/N 의 부분군 S 에서 Hₛ = {g ∈ G : gN ∈ S} 를 만들어(subgroups-of-a-quotient-group (2)) 두 열을 이어 붙인다. (2)(3)의 준동형상은 출처 13.4절 연습문제에 따로 없고, 같은 절의 연습문제 9(p.166, 가해군 둘의 직곱)는 이 항목이 다루지 않는 직곱에 관한 것이다. 예시 '정수의 덧셈군의 가해열을 3ℤ로 자르기'는 출처 Example 13.11(p.162)의 정수의 배수로 만든 열과 같은 대상이다. 예시 '아벨군 둘로 쌓은 $S_3$'의 몫군 S₃/A₃ 은 출처 Example 10.5(p.126)의 대상이고, 그 열은 출처 23.3절(p.304)의 {id} ⊂ A₃ ⊂ S₃ 과 같다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$G$와 $G'$이 [[group|군]]이고 $e$, $e'$이 각각 그 항등원이라 하자. 부분군의 열, 부분정규열, 가해열, 가해군은 [[solvable-group|가해군]]의 것이고, 교환자 $aba^{-1}b^{-1}$은 [[commutator|교환자]]의 것이다. 준동형과 상 $\varphi(X)$는 [[group-homomorphism|군 준동형]]과 [[homomorphism-kernel-and-image|준동형의 핵과 상]], 동형 $\cong$은 [[group-isomorphism|군의 동형]], 정규부분군과 몫군 $G/N$은 [[normal-subgroup|정규부분군]]과 [[quotient-group|몫군]]의 것이다.

1. (부분군) $H_0, \dots, H_m$이 $G$의 가해열이고 $K$가 $G$의 부분군이면, 각 $i \in \{0, 1, \dots, m\}$에서의 값이 $K \cap H_i$인 열 $K \cap H_0, \dots, K \cap H_m$은 군 $K$의 길이 $m$인 가해열이다. 따라서 가해군의 모든 부분군은 가해군이다.
2. (전사 준동형의 상) $\varphi : G \to G'$이 준동형이고 [[injective-surjective-bijective|전사]]이며 $H_0, \dots, H_m$이 $G$의 가해열이면, 열 $\varphi(H_0), \dots, \varphi(H_m)$은 $G'$의 길이 $m$인 가해열이다. 따라서 $G$가 가해군이고 $G$에서 $G'$으로의 전사인 준동형이 있으면 $G'$은 가해군이다.
3. (준동형의 상과 동형) $\varphi : G \to G'$이 준동형이고 $G$가 가해군이면 군 $\varphi(G)$는 가해군이다. $G \cong G'$이면, $G$가 가해군인 것은 정확히 $G'$이 가해군일 때이다.
4. (몫군) $G$가 가해군이고 $N$이 $G$의 정규부분군이면 몫군 $G/N$은 가해군이다.
5. (정규부분군과 몫군에서 쌓기) $N$이 $G$의 정규부분군이고, $N_0, \dots, N_k$가 군 $N$의 가해열, $S_0, \dots, S_l$이 군 $G/N$의 가해열이라 하자. $G/N$의 부분군 $S$에 대하여 $H_S = \{g \in G : gN \in S\}$는 [[subgroups-of-a-quotient-group|몫군의 부분군]]의 (2)의 부분군이다. 각 $i \in \{0, 1, \dots, k + l\}$에서
   $$
   T_i = \begin{cases} N_i & 0 \le i \le k, \\ H_{S_{i-k}} & k \le i \le k + l \end{cases}
   $$
   로 정하면 ($i = k$에서는 두 줄이 모두 $N$을 준다) $T_0, \dots, T_{k+l}$은 $G$의 길이 $k + l$인 가해열이다. 따라서 $N$과 $G/N$이 가해군이면 $G$는 가해군이다.
:::

:::english
Let $G$ and $G'$ be groups with identities $e$ and $e'$. Sequences of subgroups, subnormal series, solvable series, and solvable groups are as in the entry on solvable groups, and commutators $aba^{-1}b^{-1}$ are as in the entry on commutators. Homomorphisms and images $\varphi(X)$, isomorphism $\cong$, normal subgroups, and quotient groups $G/N$ are as in the corresponding entries.

1. (Subgroups) If $H_0, \dots, H_m$ is a solvable series of $G$ and $K$ is a subgroup of $G$, then the sequence $K \cap H_0, \dots, K \cap H_m$, whose value at each $i \in \{0, 1, \dots, m\}$ is $K \cap H_i$, is a solvable series of length $m$ of the group $K$. Hence every subgroup of a solvable group is solvable.
2. (Images under surjective homomorphisms) If $\varphi : G \to G'$ is a surjective homomorphism and $H_0, \dots, H_m$ is a solvable series of $G$, then the sequence $\varphi(H_0), \dots, \varphi(H_m)$ is a solvable series of length $m$ of $G'$. Hence if $G$ is solvable and there is a surjective homomorphism from $G$ to $G'$, then $G'$ is solvable.
3. (Homomorphic images and isomorphism) If $\varphi : G \to G'$ is a homomorphism and $G$ is solvable, then the group $\varphi(G)$ is solvable. If $G \cong G'$, then $G$ is solvable exactly when $G'$ is solvable.
4. (Quotient groups) If $G$ is solvable and $N$ is a normal subgroup of $G$, then the quotient group $G/N$ is solvable.
5. (Building from a normal subgroup and its quotient) Let $N$ be a normal subgroup of $G$, let $N_0, \dots, N_k$ be a solvable series of the group $N$, and let $S_0, \dots, S_l$ be a solvable series of the group $G/N$. For a subgroup $S$ of $G/N$, $H_S = \{g \in G : gN \in S\}$ is the subgroup of (2) of the entry on subgroups of a quotient group. For each $i \in \{0, 1, \dots, k + l\}$ define
   $$
   T_i = \begin{cases} N_i & 0 \le i \le k, \\ H_{S_{i-k}} & k \le i \le k + l \end{cases}
   $$
   (at $i = k$ both lines give $N$). Then $T_0, \dots, T_{k+l}$ is a solvable series of length $k + l$ of $G$. Hence if $N$ and $G/N$ are solvable, then $G$ is solvable.
:::

## 직관

가해열은 $\{e\}$에서 $G$까지 올라가는 층이고, 층마다 위층의 교환자가 아래층에 떨어집니다([[solvable-group|가해군]]의 (1)). 이 성질은 층을 자르거나 옮겨도 남습니다. 부분군 $K$로 자르면 층 $K \cap H_i$의 교환자는 $K$에도 $H_i$에도 들고((1)), 준동형으로 옮기면 교환자의 상이 상의 교환자이므로 옮긴 층에서도 교환자가 아래층에 떨어집니다((2), [[commutator|교환자]]의 (4)). 몫군은 표준 준동형으로 옮긴 상입니다((4)).

(5)는 거꾸로 두 탑을 하나로 쌓습니다. 아래에는 $N$의 가해열을 그대로 두고, 그 위에 $G/N$의 가해열의 각 층 $S_j$를 "잉여류가 $S_j$에 드는 원소 전체" $H_{S_j}$로 되돌려 올립니다. 이음매에서는 $S_0 = \{N\}$이 $N$으로 되돌아가므로 두 탑이 맞물립니다. 위층에서 교환자가 아래층에 떨어진다는 것은 $G/N$에서 확인한 것을 되돌린 것입니다.

정규부분군 $N$과 몫군 $G/N$이 모두 아벨군이어도 $G$가 아벨군일 필요는 없지만 $G$는 가해군입니다(아래 예시 '아벨군 둘로 쌓은 $S_3$'). 그래서 가해군은 아벨군보다 넓은 무리이면서, 부분군·몫군·쌓기에 대해 닫혀 있습니다.

## 증명

:::idea
[[solvable-group|가해군]]의 (1)에 의해 가해열의 조건은 "위층의 두 원소의 교환자가 아래층에 든다"이다. 자르기, 옮기기, 되돌리기가 모두 이 조건을 지킨다는 것을 층마다 확인한다.
:::

:::hint
(2)에서 $\varphi(H_{i+1})$의 두 원소는 $\varphi(a)$, $\varphi(b)$($a, b \in H_{i+1}$) 꼴입니다. 교환자의 (4)를 쓰십시오.
:::

:::hint
(5)에서 $g \in H_{S_{j+1}}$, $n \in H_{S_j}$이면 표준 준동형 $\pi$에 대해 $\pi(gng^{-1}) = \pi(g)\pi(n)\pi(g)^{-1}$입니다. $S_j$가 $S_{j+1}$의 정규부분군이라는 것을 쓰십시오.
:::

:::proof
**(1)** $T_i = K \cap H_i$로 두자. [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $T_i$는 $G$의 부분군이고, $T_i \subseteq K$이므로 [[subgroup|부분군]]의 (6)에 의해 군 $K$의 부분군이다. 따라서 $T_0, \dots, T_m$은 군 $K$의 부분군의 열이다. [[subgroup|부분군]]의 (1)에 의해 $e \in K$이므로 $T_0 = K \cap \{e\} = \{e\}$이고, $K \subseteq G$이므로 $T_m = K \cap G = K$이다. 군 $K$의 항등원은 부분군의 (1)에 의해 $e$이다.

$0 \le i \le m - 1$이라 하자. $H_i \subseteq H_{i+1}$이므로 $T_i \subseteq T_{i+1}$이다. $T_{i+1}$은 $G$의 부분군이고 $T_{i+1} \subseteq H_{i+1}$이므로 부분군의 (6)에 의해 군 $H_{i+1}$의 부분군이다. $H_i$는 군 $H_{i+1}$의 정규부분군이므로, [[normal-subgroup|정규부분군]]의 (6)을 군 $H_{i+1}$, 그 부분군 $T_{i+1}$, 정규부분군 $H_i$에 쓰면 $T_{i+1} \cap H_i$는 군 $T_{i+1}$의 정규부분군이다. $T_{i+1} \cap H_i = K \cap H_{i+1} \cap H_i = K \cap H_i = T_i$이므로($H_i \subseteq H_{i+1}$) $T_i$는 군 $T_{i+1}$의 정규부분군이다. 곧 $T_0, \dots, T_m$은 $K$의 부분정규열이다.

$a, b \in T_{i+1}$이라 하자. $a, b \in K$이므로 [[commutator|교환자]]의 (3)에 의해 $aba^{-1}b^{-1} \in K$이다. $a, b \in H_{i+1}$이고 $H_0, \dots, H_m$은 가해열이므로 [[solvable-group|가해군]]의 (1)에 의해 $aba^{-1}b^{-1} \in H_i$이다. 따라서 $aba^{-1}b^{-1} \in T_i$이고, 가해군의 (1)에 의해 $T_0, \dots, T_m$은 군 $K$의 가해열이다. 군 $K$의 곱과 역원이 $G$의 것과 같다는 것은 부분군의 (3)이다. 둘째 문장은 $G$의 가해열 하나에 첫째 문장을 쓴 것이다.

**(2)** $T_i = \varphi(H_i)$로 두자. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $T_i$는 $G'$의 부분군이다. [[group-homomorphism|군 준동형]]의 (1)에 의해 $T_0 = \varphi(\{e\}) = \{e'\}$이고, $\varphi$가 전사이므로 준동형의 핵과 상의 (4)에 의해 $T_m = \varphi(G) = G'$이다.

$0 \le i \le m - 1$이라 하자. $H_i \subseteq H_{i+1}$이므로 $T_i \subseteq T_{i+1}$이고, 부분군의 (6)에 의해 $T_i$는 군 $T_{i+1}$의 부분군이다. $y \in T_{i+1}$, $z \in T_i$라 하면 $y = \varphi(g)$, $z = \varphi(n)$인 $g \in H_{i+1}$, $n \in H_i$가 있다. [[finite-product-in-a-group|군의 유한 곱]]의 (7)과 군 준동형의 (2)에 의해 $yzy^{-1} = \varphi(g)\varphi(n)\varphi(g)^{-1} = \varphi(gng^{-1})$이고, $H_i$는 군 $H_{i+1}$의 정규부분군이므로 $gng^{-1} \in H_i$이다. 따라서 $yzy^{-1} \in T_i$이고 $T_i$는 군 $T_{i+1}$의 정규부분군이다. 곧 $T_0, \dots, T_m$은 $G'$의 부분정규열이다.

$x, y \in T_{i+1}$이라 하면 $x = \varphi(a)$, $y = \varphi(b)$인 $a, b \in H_{i+1}$이 있다. 교환자의 (4)에 의해 $xyx^{-1}y^{-1} = \varphi(aba^{-1}b^{-1})$이고, 가해군의 (1)에 의해 $aba^{-1}b^{-1} \in H_i$이므로 $xyx^{-1}y^{-1} \in T_i$이다. 가해군의 (1)에 의해 $T_0, \dots, T_m$은 $G'$의 가해열이다.

**(3)** 준동형의 핵과 상의 (4)에 의해 $\varphi(G)$는 $G'$의 부분군이다. 모든 $a \in G$에서 $\varphi(a) \in \varphi(G)$이므로, 군 준동형의 (5)의 (ii)에 의해 같은 집합 $\varphi$를 함수 $\varphi : G \to \varphi(G)$로 선언한 것은 군 $G$에서 군 $\varphi(G)$로의 준동형이고, 그 상은 $\varphi(G)$ 전체이므로 전사이다. (2)에 의해 $\varphi(G)$는 가해군이다.

$G \cong G'$이면 동형사상 $\varphi : G \to G'$이 있고, 이것은 전사인 준동형이므로 $G$가 가해군이면 (2)에 의해 $G'$이 가해군이다. [[group-isomorphism|군의 동형]]의 (1)에 의해 $\varphi^{-1} : G' \to G$도 동형사상이므로, 같은 이유로 $G'$이 가해군이면 $G$가 가해군이다.

**(4)** [[canonical-homomorphism|표준 준동형]]의 (1)에 의해 $\pi : G \to G/N$은 전사인 준동형이므로, (2)에 의해 $G/N$은 가해군이다.

**(5)** $\pi : G \to G/N$을 표준 준동형이라 하자. 그 항목의 (1)에 의해 $\pi$는 준동형이고, 모든 $g \in G$에서 $\pi(g) = gN$이다. 몫군의 부분군의 (2)에 의해 $G/N$의 부분군 $S$마다 $H_S$는 $N \subseteq H_S$인 $G$의 부분군이다.

*열이 잘 정해진다.* $i = k$에서 첫째 줄은 $N_k$이고, $N_0, \dots, N_k$는 군 $N$의 부분정규열이므로 $N_k = N$이다. 둘째 줄은 $H_{S_0}$이고, $S_0$은 군 $G/N$의 자명한 부분군이므로 [[quotient-group|몫군]]의 (2)에 의해 $S_0 = \{N\}$이다. $g \in G$에 대하여 $g \in H_{S_0}$인 것은 정확히 $gN = N$일 때이고, [[left-coset|잉여류]]의 (5)에 의해 정확히 $g \in N$일 때이다. 따라서 $H_{S_0} = N$이고, 두 줄이 같은 값을 주므로 $T$는 $\{0, 1, \dots, k + l\}$을 정의역으로 하는 함수이다. $N_i$는 군 $N$의 부분군이고 $N$은 $G$의 부분군이므로 부분군의 (6)에 의해 $N_i$는 $G$의 부분군이다. 따라서 모든 $T_i$는 $G$의 부분군이다.

*양 끝.* $T_0 = N_0 = \{e\}$이다. 군 $N$의 항등원은 부분군의 (1)에 의해 $e$이다. $T_{k+l} = H_{S_l}$이고 $S_l = G/N$이므로 모든 $g \in G$가 $gN \in S_l$을 만족해 $T_{k+l} = G$이다.

*아래쪽 층* ($0 \le i \le k - 1$). $T_i = N_i$, $T_{i+1} = N_{i+1}$이다. $N_i \subseteq N_{i+1}$이고 $N_i$는 군 $N_{i+1}$의 정규부분군이며, 모든 $a, b \in N_{i+1}$에서 $aba^{-1}b^{-1} \in N_i$이다(가해군의 (1)을 군 $N$의 가해열에 쓴 것). 군 $N_{i+1}$의 곱과 역원은 군 $N$에서 보든 $G$에서 보든 부분군의 (3)에 의해 같으므로, 이 조건들은 $G$의 부분군의 열 $T$에서도 그대로이다.

*위쪽 층* ($k \le i \le k + l - 1$). $j = i - k$로 두면 $0 \le j \le l - 1$이고 $T_i = H_{S_j}$, $T_{i+1} = H_{S_{j+1}}$이다.

- 포함: $g \in H_{S_j}$이면 $gN \in S_j \subseteq S_{j+1}$이므로 $g \in H_{S_{j+1}}$이다.
- 정규: $g \in H_{S_{j+1}}$, $n \in H_{S_j}$라 하자. 군의 유한 곱의 (7)과 군 준동형의 (2)에 의해 $\pi(gng^{-1}) = \pi(g)\pi(n)\pi(g)^{-1}$이다. $\pi(g) = gN \in S_{j+1}$, $\pi(n) = nN \in S_j$이고 $S_j$는 군 $S_{j+1}$의 정규부분군이므로 $\pi(gng^{-1}) \in S_j$, 곧 $gng^{-1} \in H_{S_j}$이다. $H_{S_j}$는 $G$의 부분군이고 $H_{S_j} \subseteq H_{S_{j+1}}$이므로 부분군의 (6)에 의해 군 $H_{S_{j+1}}$의 부분군이고, 방금 보인 것에 의해 그 정규부분군이다.
- 교환자: $a, b \in H_{S_{j+1}}$이라 하자. 교환자의 (4)에 의해 $\pi(aba^{-1}b^{-1}) = \pi(a)\pi(b)\pi(a)^{-1}\pi(b)^{-1}$이고, $\pi(a), \pi(b) \in S_{j+1}$이므로 가해군의 (1)을 군 $G/N$의 가해열 $S_0, \dots, S_l$에 쓰면 이것은 $S_j$에 속한다. 곧 $(aba^{-1}b^{-1})N \in S_j$이고 $aba^{-1}b^{-1} \in H_{S_j}$이다.

따라서 $T_0, \dots, T_{k+l}$은 $G$의 부분정규열이고, 모든 층에서 위층의 두 원소의 교환자가 아래층에 속하므로 가해군의 (1)에 의해 $G$의 가해열이다. 마지막 문장은 $N$과 $G/N$의 가해열 하나씩에 이것을 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[정수의 덧셈군의 가해열을 3ℤ로 자르기]
[[number-groups|수로 이루어진 군]]의 (1)의 $(\mathbb{Z}, +)$는 아벨군이므로, [[subgroup|부분군]]의 (7), [[normal-subgroup|정규부분군]]의 (3), [[quotient-group|몫군]]의 (4)에 의해 $\{0\} \subseteq 6\mathbb{Z} \subseteq 2\mathbb{Z} \subseteq \mathbb{Z}$인 열 $H_0, H_1, H_2, H_3$은 가해열입니다($6k = 2 \cdot 3k$). $K = 3\mathbb{Z}$로 자르면 (1)의 열은
$$
\begin{aligned}
K \cap H_0 &= \{0\}, & K \cap H_1 &= 6\mathbb{Z}, \\
K \cap H_2 &= 6\mathbb{Z}, & K \cap H_3 &= 3\mathbb{Z}
\end{aligned}
$$
입니다. $6\mathbb{Z} \subseteq 3\mathbb{Z}$($6k = 3 \cdot 2k$)이므로 둘째 값은 $6\mathbb{Z}$이고, 셋째 값은 $2$와 $3$의 배수인 정수 전체입니다. $\gcd(2, 3) = 1$이므로([[greatest-common-divisor|최대공약수]]: $2$의 양의 약수 $1$, $2$ 가운데 $3$을 나누는 것은 $1$뿐이다. $3 = 2 \cdot 1 + 1$은 [[even-and-odd|짝수와 홀수]]의 뜻으로 홀수이므로 $2 \nmid 3$) [[coprime-divisors-product-divides|서로소인 두 약수의 곱]]에 의해 그런 정수는 $6$의 배수이고, 거꾸로 $6$의 배수는 $2$와 $3$의 배수이므로 $3\mathbb{Z} \cap 2\mathbb{Z} = 6\mathbb{Z}$입니다([[subgroup-examples|부분군의 예와 교집합]]의 (1)). 자른 열에서는 같은 부분군 $6\mathbb{Z}$가 두 층에 이어지고, 그 층의 몫군 $6\mathbb{Z}/6\mathbb{Z}$는 몫군의 (7)에 의해 원소가 하나인 군입니다. 열의 길이 $3$은 그대로입니다.
:::

:::example[아벨군 둘로 쌓은 $S_3$]
[[symmetric-group|대칭군]]의 (5)의 $S_3$에서 $N = A_3$으로 둡니다. [[alternating-group|교대군]]의 (1)에 의해 $N$은 정규부분군이고, (4)에 의해 $|A_3| = 3$, (2)와 몫군의 (5)에 의해 $|S_3/A_3| = 2$입니다. [[prime-number|소수]]의 진술에 의해 $2$와 $3$의 양의 약수 $d$는 각각 $1 \le d \le 2$, $1 \le d \le 3$이고, $3 = 2 \cdot 1 + 1$은 홀수여서 $2 \nmid 3$이므로([[even-and-odd|짝수와 홀수]]) $2$와 $3$은 소수입니다. 따라서 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)과 [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 $A_3$과 $S_3/A_3$은 아벨군입니다. 아벨군 $A$에서 $\{e\}$, $A$인 열은 부분군의 (4), 정규부분군의 (3), 몫군의 (4)에 의해 가해열이므로 $N$과 $S_3/N$은 가해군이고, (5)에 의해 $S_3$은 가해군입니다.

(5)가 만드는 열은 $k = l = 1$이므로 $T_0 = \{i\}$, $T_1 = A_3$, $T_2 = H_{S_3/A_3} = S_3$입니다. [[symmetric-group|대칭군]]의 (4)에 의해 $S_3$은 아벨군이 아니므로, 정규부분군과 몫군이 모두 아벨군이어도 군 전체는 아벨군이 아닐 수 있습니다.
:::

## 확인 질문

:::check[$G$가 가해군이고 $H$가 $G$의 부분군이며 $M$이 $H$의 정규부분군이면 몫군 $H/M$은 가해군인가?]
그렇습니다. (1)에 의해 군 $H$는 가해군이고, (4)를 군 $H$와 그 정규부분군 $M$에 쓰면 $H/M$은 가해군입니다.
:::

:::check[(5)에서 $N = \{e\}$이고 $k = 0$이면 열 $T_0, \dots, T_{k+l}$은 무엇인가?]
$k = 0$이므로 $T_0 = N_0 = \{e\}$이고, $0 \le i \le l$에서 $T_i = H_{S_i} = \{g \in G : g\{e\} \in S_i\}$입니다. [[quotient-group|몫군]]의 (7)에 의해 $G/\{e\}$의 원소는 $\{g\}$($g \in G$)이므로 $T_i$는 $\{g\} \in S_i$인 $g$ 전체입니다. 곧 이때 (5)는 $G/\{e\}$의 가해열을 $G$로 옮겨 놓은 것이고, 열의 길이는 $l$입니다.
:::
