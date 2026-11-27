---
title: 가해군의 예
title_en: Examples of Solvable Groups
aliases: [아벨군은 가해군이다, p-군은 가해군이다, S3과 S4는 가해군이다, abelian groups are solvable, p-groups are solvable, S4 is solvable]
kind: proposition
field: group-theory
msc: ["20F16"]
level: undergrad
summary: "아벨군, 대칭군 S₃과 S₄, 소수 p에 대한 p-군은 모두 가해군이다. S₄의 가해열은 {i} ⊆ V ⊆ A₄ ⊆ S₄이다."
requires: [set, subset, function, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, even-and-odd, integer-cancellation, strong-induction, group, subgroup, subgroup-examples, normal-subgroup, left-coset, lagrange-theorem, quotient-group, cyclic-subgroup, order-divides-group-order, finite-product-in-a-group, symmetric-group, order-of-symmetric-group, support-of-a-permutation, cycle-permutation, conjugate-of-a-cycle, alternating-group, prime-power-divisors, p-group, center-of-p-group, commutator, solvable-group, solvable-subgroups-and-images, groups-of-order-pq]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "13.2절 Solvable Groups, Example 13.19 (p.165); 23.3절 Solvability by Radicals, S₃ 의 예(번호 없음, p.304); 13장 첫머리 (p.158); 10.1절, Example 10.5 (p.126); 15.2절, Theorem 15.10 (p.184); 13.4 Exercises, 연습문제 14, 16 (p.166); 부록 B 의 13.4.16 힌트 (p.327), 14.5.6 힌트 (p.328)"
    checked: original
    note: "(3)의 열 {i} ⊆ V ⊆ A₄ ⊆ S₄ 는 출처 Example 13.19(p.165)의 열 S₄ ⊃ A₄ ⊃ {(1), (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} ⊃ {(1)} 과 같다. 출처는 '몫군이 아벨군이다'라고만 적고, 이 항목은 V 가 S₄ 의 정규부분군이라는 것(켤레가 고정점을 갖지 않는 짝치환이라는 것)과 몫군의 원소의 개수로 그것을 증명한다. (2)의 열 {i} ⊆ A₃ ⊆ S₃ 은 출처 23.3절(p.304)의 '{id} ⊂ A₃ ⊂ S₃ 을 보면 S₃ 은 가해군이다'와 같고, 몫군 S₃/A₃ 은 출처 Example 10.5(p.126)의 대상이다. 출처 연습문제 13.4.16(p.166, 모든 n 에서 D_n 은 가해군)과 그 부록 힌트(p.327, 'Use the fact that D_n has a cyclic subgroup of index 2')는 (2)의 열이 지표 2 인 순환 부분군 A₃ 을 쓰는 것과 같은 발상이다. 출처 13장 첫머리(p.158)는 가해군을 몫군이 아벨군인 부분군의 열로 소개한다. (4)의 증명은 p-군의 중심(center-of-p-group)과 이 사이트의 solvable-subgroups-and-images (5)에 의한 귀납이다. 반례 '가해열이 되지 않는 $S_4$의 부분정규열'의 V 가 S₄ 의 정규부분군이라는 것은 출처 부록 B 의 14.5.6 힌트(p.328, S₄ 의 켤레류 O_(1 2)(3 4) = {(1 2)(3 4), (1 3)(2 4), (1 4)(2 3)})와 같은 대상에 관한 것이다. 확인 질문 '원소가 $pq$개인 군은 가해군인가? ($p < q$는 소수)'는 출처 15.2절 Theorem 15.10(p.184, 위수 pq 인 군에는 위수 q 인 정규부분군이 하나뿐이다)과 같은 대상이다. 확인 질문 '$S_4$의 부분군 $\\{\\sigma \\in S_4 : \\sigma(4) = 4\\}$는 가해군인가?' 는 출처 연습문제 13.4.14(p.166, 가해군의 부분군은 가해군)를 Example 13.19 의 S₄ 에 쓰는 것과 같은 물음이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
가해열과 가해군은 [[solvable-group|가해군]]의 것이다. $S_n$, 항등치환, $A_n$은 [[symmetric-group|대칭군]]과 [[alternating-group|교대군]]의 것이고, $\{1, \dots, n\}$의 항등치환을 $i$로 쓴다. $p$-군은 [[p-group|p-군]]의 것이다.

1. (아벨군) $G$가 아벨군이고 $e$가 그 항등원이면 $H_0 = \{e\}$, $H_1 = G$인 길이 $1$인 열은 $G$의 가해열이다. 따라서 모든 아벨군은 가해군이다.
2. ($S_3$) $H_0 = \{i\}$, $H_1 = A_3$, $H_2 = S_3$인 길이 $2$인 열은 $S_3$의 가해열이다. 따라서 $S_3$은 가해군이다. $S_3$은 아벨군이 아니다.
3. ($S_4$) 교대군의 (6)의 부분군 $V = \{i, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$은 $S_4$의 정규부분군이다. $H_0 = \{i\}$, $H_1 = V$, $H_2 = A_4$, $H_3 = S_4$인 길이 $3$인 열은 $S_4$의 가해열이다. 따라서 $S_4$는 가해군이다.
4. ($p$-군) $p$가 [[prime-number|소수]]이면 모든 $p$-군은 가해군이다.
:::

:::english
Solvable series and solvable groups are as in the entry on solvable groups. $S_n$, identity permutations, and $A_n$ are as in the entries on symmetric and alternating groups, and $i$ denotes the identity permutation of $\{1, \dots, n\}$. $p$-groups are as in the entry on $p$-groups.

1. (Abelian groups) If $G$ is an abelian group with identity $e$, then the sequence of length $1$ with $H_0 = \{e\}$ and $H_1 = G$ is a solvable series of $G$. Hence every abelian group is solvable.
2. ($S_3$) The sequence of length $2$ with $H_0 = \{i\}$, $H_1 = A_3$, $H_2 = S_3$ is a solvable series of $S_3$. Hence $S_3$ is solvable. $S_3$ is not abelian.
3. ($S_4$) The subgroup $V = \{i, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$ of (6) of the entry on alternating groups is a normal subgroup of $S_4$. The sequence of length $3$ with $H_0 = \{i\}$, $H_1 = V$, $H_2 = A_4$, $H_3 = S_4$ is a solvable series of $S_4$. Hence $S_4$ is solvable.
4. ($p$-groups) If $p$ is a prime, then every $p$-group is solvable.
:::

## 직관

아벨군은 층 하나짜리 탑입니다. 아벨군이 아닌 가해군은 층을 둘 이상 쌓아야 합니다. $S_3$은 원소가 $3$개인 회전 부분 $A_3$ 위에 원소가 $2$개인 몫군을 얹은 탑이고, $S_4$는 원소가 $4$개인 $V$, 그 위의 원소가 $3$개인 몫군, 맨 위의 원소가 $2$개인 몫군의 세 층입니다. $S_4$의 맨 아래층 $V$는 원소가 $4$개인 아벨군이고, 그 밖의 층은 원소의 개수가 소수인 몫군이므로 순환군이고, 따라서 아벨군입니다.

$p$-군은 중심에서 한 층을 떼어 냅니다. 원소가 $p^n$개($n \ge 1$)인 군의 중심은 원소가 하나보다 많은 아벨군인 정규부분군이므로([[center-of-p-group|p-군의 중심]]), 중심에 대한 몫군은 더 작은 $p$-군입니다. 몫군에 같은 일을 되풀이하면 유한 번 만에 원소가 하나인 군에 닿고, [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (5)가 떼어 낸 층들을 다시 쌓아 줍니다. 원소가 하나인 $p$-군($n = 0$)은 중심이 자기 자신이고 길이 $0$인 가해열을 가지므로 이 되풀이의 끝입니다.

## 증명

:::idea
(1)–(3)은 열을 적고 층마다 "정규부분군이고 몫군이 아벨군"임을 확인한다. 몫군은 아벨군의 몫이거나 원소의 개수가 소수인 군이다. (4)는 원소의 개수의 지수에 대한 강한 귀납으로, 중심과 그 몫군에 가해군의 쌓기를 쓴다.
:::

:::hint
(3)에서 $V$가 $S_4$의 정규부분군임을 보일 때, $\tau \in V$와 $\sigma \in S_4$에 대해 $\sigma\tau\sigma^{-1}$이 고정점을 갖는지 보십시오. $V$의 $i$가 아닌 원소는 고정점이 없고, 길이 $3$인 순환치환은 고정점이 있습니다.
:::

:::hint
(4)에서 $|G| = p^n$, $n \ge 1$이면 $Z(G)$는 원소가 $p^k$개($k \ge 1$)이므로 $G/Z(G)$는 원소가 $p^{n-k}$개이고 $n - k < n$입니다.
:::

:::proof
아래에서 **(소)**는 다음 사실이다: 유한군 $Q$의 원소의 개수가 소수이면 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)에 의해 $Q$는 순환군이고, [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 아벨군이다. $2$와 $3$은 소수이다. [[prime-number|소수]]의 진술에 의해 $2$의 양의 약수 $d$는 $1 \le d \le 2$이므로 $1$과 $2$뿐이고, $3$의 양의 약수는 $1$, $2$, $3$ 가운데 $3$을 나누는 것인데 $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$이어서([[even-and-odd|짝수와 홀수]]) $1$과 $3$뿐이다.

**(1)** [[subgroup|부분군]]의 (4)에 의해 $\{e\}$와 $G$는 $G$의 부분군이고 $\{e\} \subseteq G$이다. $G$가 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $\{e\}$는 $G$의 정규부분군이고, [[quotient-group|몫군]]의 (4)에 의해 $G/\{e\}$는 아벨군이다. 따라서 이 열은 가해열이고 $G$는 가해군이다.

**(2)** 교대군의 (1)에 의해 $A_3$은 $S_3$의 정규부분군이고, 따라서 부분군이다. 부분군의 (4)와 정규부분군의 (2)에 의해 $\{i\}$는 군 $A_3$의 정규부분군이다. 교대군의 (4)에 의해 $|A_3| = 3$이므로 (소)에 의해 $A_3$은 아벨군이고, 몫군의 (4)에 의해 $A_3/\{i\}$는 아벨군이다. $\{1, 2, 3\}$에는 서로 다른 원소가 있으므로 교대군의 (2)에 의해 $[S_3 : A_3] = 2$이고, 몫군의 (5)에 의해 $|S_3/A_3| = 2$이므로 (소)에 의해 $S_3/A_3$은 아벨군이다. 따라서 이 열은 가해열이다. [[symmetric-group|대칭군]]의 (4)에 의해 $S_3$은 아벨군이 아니다.

**(3)** $X = \{1, 2, 3, 4\}$로 두고, 교대군의 (5)의 $C$와 $D$를 쓴다. 그 항목의 (5), (6)에 의해 $A_4 = \{i\} \cup C \cup D$, $V = \{i\} \cup D$이고 $V$는 $A_4$의 부분군이다. 교대군의 (1)에 의해 $A_4$는 $S_4$의 정규부분군이므로 부분군이고, 부분군의 (6)에 의해 $V$는 $S_4$의 부분군이다.

*$D$의 원소는 고정점이 없다.* 예를 들어 $(1\ 2)(3\ 4)$에서 [[cycle-permutation|순환치환]]의 (6)에 의해 $(1\ 2)$와 $(3\ 4)$는 서로소이므로, [[support-of-a-permutation|치환의 받침]]의 (4)와 순환치환의 (2)에 의해 그 받침은 $\{1, 2\} \cup \{3, 4\} = X$이다. $(1\ 3)(2\ 4)$와 $(1\ 4)(2\ 3)$의 받침도 같은 이유로 $X$이다.

*$i$와 $C$의 원소는 고정점이 있다.* $i$는 모든 점을 고정한다. $c \in C$는 길이 $3$인 순환치환이므로 순환치환의 (2)에 의해 $|\operatorname{supp} c| = 3$이다. $\operatorname{supp} c = X$이면 [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $3 = 4$가 되어 어긋나므로 $\operatorname{supp} c \ne X$이고, $\operatorname{supp} c$에 속하지 않는 $x \in X$는 $c(x) = x$를 만족한다.

*$V$는 $S_4$의 정규부분군이다.* $\sigma \in S_4$, $\tau \in V$라 하고 $\rho = \sigma\tau\sigma^{-1}$로 두자. $\tau = i$이면 $\rho = \sigma\sigma^{-1} = i \in V$이다. $\tau \in D$라 하자. $D \subseteq A_4$이고 $A_4$는 정규부분군이므로 $\rho \in A_4$이다. [[finite-product-in-a-group|군의 유한 곱]]의 (10)에 의해 모든 $x \in X$에서 $\rho(x) = \sigma(\tau(\sigma^{-1}(x)))$이다. $\rho(x) = x$라 하면 $\sigma(\tau(\sigma^{-1}(x))) = x = \sigma(\sigma^{-1}(x))$이고 $\sigma$가 단사이므로 $\tau(\sigma^{-1}(x)) = \sigma^{-1}(x)$, 곧 $\sigma^{-1}(x)$가 $\tau$의 고정점이 되어 앞 문단에 어긋난다. 따라서 $\rho$는 고정점이 없고, 앞 문단에 의해 $\rho \ne i$, $\rho \notin C$이다. $\rho \in A_4 = \{i\} \cup C \cup D$이므로 $\rho \in D \subseteq V$이다. 따라서 $V$는 $S_4$의 정규부분군이다.

*층마다 확인한다.* $\{i\}$는 군 $V$의 정규부분군이다(정규부분군의 (2)). $V$는 아벨군이다. $a, b \in V$이고 둘 중 하나가 $i$이거나 $a = b$이면 $ab = ba$는 바로 나온다. $a$와 $b$가 $D$의 서로 다른 원소이면 교대군의 (6)에 의해 $ab$와 $ba$는 둘 다 $D$의 나머지 한 원소이므로 같다. 따라서 몫군의 (4)에 의해 $V/\{i\}$는 아벨군이다. $V \subseteq A_4$이고, [[normal-subgroup|정규부분군]]의 (6)을 $S_4$, 그 부분군 $A_4$, 정규부분군 $V$에 쓰면 $A_4 \cap V = V$는 군 $A_4$의 정규부분군이다. 몫군의 (5)에 의해 $|A_4| = |A_4/V| \cdot |V|$, 곧 $12 = |A_4/V| \cdot 4 = 3 \cdot 4$이므로 [[integer-cancellation|정수의 소거법칙]]의 (2)에 의해 $|A_4/V| = 3$이고, (소)에 의해 $A_4/V$는 아벨군이다. $A_4$는 $S_4$의 정규부분군이고, 교대군의 (2)와 몫군의 (5)에 의해 $|S_4/A_4| = [S_4 : A_4] = 2$이므로 (소)에 의해 $S_4/A_4$는 아벨군이다. $\{i\} \subseteq V \subseteq A_4 \subseteq S_4$이므로 이 열은 가해열이다.

**(4)** $n \ge 0$인 정수 $n$마다 명제 $P_n$을 "원소가 $p^n$개인 모든 군은 가해군이다"로 두고 [[strong-induction|강한 귀납법]]($m = 0$, $r = 0$)으로 보인다. [[p-group|p-군]]의 정의에 의해 모든 $p$-군은 어떤 $n \ge 0$에서 원소가 $p^n$개이므로, 이것으로 (4)가 나온다. 거듭제곱 $p^n$은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이다.

*기초 단계.* $|G| = p^0 = 1$이면 $e \in G$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $G = \{e\}$이고, [[solvable-group|가해군]]의 (2)에 의해 $G$는 가해군이다.

*귀납 단계.* $k \ge 0$이고 $P_0, \dots, P_k$가 참이라 하자. $|G| = p^{k+1}$이라 하자. $G$는 $p$-군이고 $k + 1 \ge 1$이므로 [[center-of-p-group|p-군의 중심]]의 (1)에 의해 $|Z(G)| = p^j$, $1 \le j \le k + 1$인 정수 $j$가 있다. 정규부분군의 (5)에 의해 $Z = Z(G)$는 $G$의 정규부분군이다. $a, b \in Z$이면 $a$는 $G$의 모든 원소와 교환되므로([[subgroup-examples|부분군의 예와 교집합]]의 (5)) 특히 $ab = ba$이다. 곧 군 $Z$는 아벨군이고, (1)에 의해 가해군이다. p-군의 (6)에 의해 $G/Z$는 원소가 $p^{k+1-j}$개인 $p$-군이고, $1 \le j$이므로 $0 \le k + 1 - j \le k$이다. 귀납 가정 $P_{k+1-j}$에 의해 $G/Z$는 가해군이다. [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (5)에 의해 $G$는 가해군이다. 곧 $P_{k+1}$이 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $8$개인 $(\mathbb{Z}_8, +)$와 그 몫군]
[[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_8, +)$는 원소가 $8 = 2^3$개인 아벨군이므로 (1)에 의해서도 (4)에 의해서도 가해군입니다. (4)의 증명을 따라가면 이 군의 중심은 군 전체이고(아벨군이므로 [[subgroup-examples|부분군의 예와 교집합]]의 (5)), 몫군 $\mathbb{Z}_8/\mathbb{Z}_8$은 원소가 $2^0 = 1$개여서 귀납이 한 번에 끝납니다. (4)가 (1)보다 더 말하는 것은 아벨군이 아닌 $p$-군에 관한 부분입니다.
:::

:::counterexample[가해열이 되지 않는 $S_4$의 부분정규열]
(3)에 의해 $V$는 $S_4$의 정규부분군이므로 $H_0 = \{i\}$, $H_1 = V$, $H_2 = S_4$인 열은 부분정규열입니다. 그러나 $(1\ 2)$와 $(1\ 3)$의 교환자는 $(1\ 2)(1\ 3)(1\ 2)(1\ 3)$이고([[cycle-permutation|순환치환]]의 (5)), [[finite-product-in-a-group|군의 유한 곱]]의 (10)에 의해 오른쪽부터 적용하면 $1 \to 3 \to 3 \to 1 \to 2$, $2 \to 2 \to 1 \to 3 \to 3$, $3 \to 1 \to 2 \to 2 \to 1$, $4 \to 4$이므로 이 교환자는 $(1\ 2\ 3)$입니다. $(1\ 2\ 3) \in C$이고 $C$와 $V = \{i\} \cup D$는 겹치지 않으므로([[alternating-group|교대군]]의 (5)) $(1\ 2\ 3) \notin V$이고, [[solvable-group|가해군]]의 (1)에 의해 $S_4/V$는 아벨군이 아닙니다. 이 열은 가해열이 아니고, (3)의 열은 그 사이에 $A_4$를 끼워 넣어 가해열을 얻습니다.
:::

## 확인 질문

:::check[원소가 $pq$개인 군은 가해군인가? ($p < q$는 소수)]
그렇습니다. [[groups-of-order-pq|원소가 pq개인 군]]의 (1)에 의해 원소가 $q$개인 정규부분군 $Q$가 있고, $Q$는 원소의 개수가 소수이므로 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)과 [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 아벨군입니다. [[quotient-group|몫군]]의 (5)에 의해 $pq = |G/Q| \cdot q$이므로 [[integer-cancellation|정수의 소거법칙]]의 (2)에 의해 $|G/Q| = p$이고, $G/Q$도 같은 이유로 아벨군입니다. (1)에 의해 $Q$와 $G/Q$는 가해군이므로 [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (5)에 의해 $G$는 가해군입니다. 곧 $\{e\} \subseteq Q \subseteq G$가 가해열이 됩니다.
:::

:::check[$S_4$의 부분군 $\{\sigma \in S_4 : \sigma(4) = 4\}$는 가해군인가?]
그렇습니다. [[subgroup-examples|부분군의 예와 교집합]]의 (6)에 의해 이것은 $S_4$의 부분군이고, (3)에 의해 $S_4$는 가해군이므로 [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (1)에 의해 가해군입니다. 이 부분군의 원소의 개수나 구조를 따로 알 필요가 없습니다.
:::
