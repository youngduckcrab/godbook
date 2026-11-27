---
title: 가해군
title_en: Solvable Group
aliases: [부분정규열, 가해열, 풀 수 있는 군, solvable group, soluble group, subnormal series, solvable series]
kind: definition
field: group-theory
msc: ["20F16"]
level: undergrad
summary: "군 G의 부분군의 열 {e} = H₀ ⊆ H₁ ⊆ ⋯ ⊆ Hₘ = G에서 각 Hᵢ가 Hᵢ₊₁의 정규부분군이면 부분정규열, 그 몫군 Hᵢ₊₁/Hᵢ가 모두 아벨군이면 가해열이라 하고, 가해열이 있는 군을 가해군이라 한다."
requires: [set, function, subset, prime-number, well-ordering-principle, group, group-basic-properties, finite-product-in-a-group, subgroup, subgroup-criteria, normal-subgroup, left-coset, quotient-group, commutator, number-groups, subgroup-examples, symmetric-group, cycle-permutation, conjugate-of-a-cycle]
sources:
  - ref: judson-abstract-algebra
    loc: "13.2절 Solvable Groups, 부분정규열의 정의(번호 없음, p.162)와 가해군의 정의(번호 없음, p.165); 23.3절 Solvability by Radicals, 가해군의 정의를 다시 적은 곳(번호 없음, p.303–304)"
    checked: original
    note: "출처는 부분정규열을 내려가는 꼴 G = Hₙ ⊃ Hₙ₋₁ ⊃ ⋯ ⊃ H₁ ⊃ H₀ = {e} 로 적고(p.162, 기호 ⊃ 는 같음을 허락한다 — 같은 곳에서 열의 길이를 '진포함의 개수'로 센다), 'Hᵢ 가 Hᵢ₊₁ 의 정규부분군'을 조건으로 둔다. 가해군은 '모든 몫군 Hᵢ₊₁/Hᵢ 가 아벨군인 부분정규열을 갖는 군'이다(p.165). 13장 첫머리(p.158)와 23.3절(p.303–304)도 같은 정의를 적는다. 이 항목은 열을 0, 1, …, m 을 정의역으로 하는 함수로 정하고 올라가는 꼴로 적으며, 출처의 길이(진포함의 개수) 대신 첨자의 끝 m 을 길이라 부른다. '가해열'(solvable series)이라는 이름은 부록 B 의 13.4절 연습문제 12 의 힌트(p.327, 'they have solvable series')에 나온다. (1)은 출처 연습문제 10.4.14 (b)(p.132, G/N 이 아벨군인 것은 N 이 교환자 부분군을 포함할 때)를 각 층의 몫군에 쓴 것이다. 예시 '정수의 덧셈군의 가해열'은 출처 Example 13.11(p.162)의 Z ⊃ 9Z ⊃ 45Z ⊃ 180Z ⊃ {0} 과 같은 발상(정수의 배수로 만든 부분군의 열)이다. 반례 '정규부분군이 아닌 자리가 있는 열'은 출처 Example 13.12(p.162)가 D₄ 에서 정규가 아닌 자리를 보이는 것과 같은 종류이고, 그 부분군 {i, (1 2)} 는 출처 Example 10.2(p.125)가 S₃ 의 정규부분군이 아닌 예로 드는 H = {(1), (12)} 와 같은 대상이다(출처는 (123)H 와 H(123) 이 다르다는 것으로 보인다)."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 부분군과 자명한 부분군 $\{e\}$는 [[subgroup|부분군]], 정규부분군은 [[normal-subgroup|정규부분군]], 몫군 $H/N$은 [[quotient-group|몫군]], 교환자 $aba^{-1}b^{-1}$은 [[commutator|교환자]]의 것이다. $m$이 $0$ 이상인 정수일 때 $\{0, 1, \dots, m\} = \{i \in \mathbb{Z} : 0 \le i \le m\}$으로 쓴다.

**부분군의 열.** $m$이 $0$ 이상인 정수일 때, 정의역이 $\{0, 1, \dots, m\}$이고 각 $i$에서의 값 $H_i$가 $G$의 부분군인 [[function|함수]]를 $G$의 부분군의 길이 $m$인 **열**이라 하고 $H_0, H_1, \dots, H_m$으로 쓴다.

**부분정규열과 가해열.** $G$의 부분군의 열 $H_0, H_1, \dots, H_m$이 $G$의 **부분정규열**(subnormal series)인 것은 정확히 다음 두 조건이 모두 성립할 때이다.

- (i) $H_0 = \{e\}$이고 $H_m = G$이다.
- (ii) $0 \le i \le m - 1$인 모든 정수 $i$에서 $H_i \subseteq H_{i+1}$이고, $H_i$는 군 $H_{i+1}$의 정규부분군이다. (부분군의 (6)에 의해 $H_i$는 군 $H_{i+1}$의 부분군이다.)

$G$의 부분정규열 $H_0, \dots, H_m$이 $G$의 **가해열**(solvable series)인 것은 정확히 $0 \le i \le m - 1$인 모든 정수 $i$에서 몫군 $H_{i+1}/H_i$가 아벨군일 때이다.

**가해군.** $G$가 **가해군**(solvable group)인 것은 정확히 $0$ 이상인 어떤 정수 $m$에 대하여 $G$의 길이 $m$인 가해열이 있을 때이다.

다음이 성립한다.

1. (교환자로 쓴 판정) $H_0, \dots, H_m$이 $G$의 부분정규열이고 $i$가 $0 \le i \le m - 1$인 정수이면, $H_{i+1}/H_i$가 아벨군인 것은 정확히 모든 $a, b \in H_{i+1}$에서 $aba^{-1}b^{-1} \in H_i$일 때이다. 따라서 $G$의 부분정규열 $H_0, \dots, H_m$이 가해열인 것은 정확히 $0 \le i \le m - 1$인 모든 정수 $i$와 모든 $a, b \in H_{i+1}$에서 $aba^{-1}b^{-1} \in H_i$일 때이다.
2. (길이 $0$) $G$의 길이 $0$인 부분정규열이 있는 것은 정확히 $G = \{e\}$일 때이고, 그때 $H_0 = \{e\}$인 길이 $0$인 열은 $G$의 가해열이다. 따라서 원소가 하나인 군은 가해군이다.
:::

:::english
Let $G$ be a group with identity $e$. Subgroups and the trivial subgroup $\{e\}$, normal subgroups, quotient groups $H/N$, and commutators $aba^{-1}b^{-1}$ are as in the corresponding entries. For an integer $m \ge 0$ we write $\{0, 1, \dots, m\} = \{i \in \mathbb{Z} : 0 \le i \le m\}$.

**Sequences of subgroups.** For an integer $m \ge 0$, a function with domain $\{0, 1, \dots, m\}$ whose value $H_i$ at each $i$ is a subgroup of $G$ is called a **sequence** of subgroups of $G$ of length $m$, written $H_0, H_1, \dots, H_m$.

**Subnormal and solvable series.** A sequence $H_0, H_1, \dots, H_m$ of subgroups of $G$ is a **subnormal series** of $G$ exactly when both of the following hold.

- (i) $H_0 = \{e\}$ and $H_m = G$.
- (ii) For every integer $i$ with $0 \le i \le m - 1$, $H_i \subseteq H_{i+1}$ and $H_i$ is a normal subgroup of the group $H_{i+1}$. (By (6) of the entry on subgroups, $H_i$ is a subgroup of the group $H_{i+1}$.)

A subnormal series $H_0, \dots, H_m$ of $G$ is a **solvable series** of $G$ exactly when the quotient group $H_{i+1}/H_i$ is abelian for every integer $i$ with $0 \le i \le m - 1$.

**Solvable groups.** $G$ is a **solvable group** exactly when, for some integer $m \ge 0$, $G$ has a solvable series of length $m$.

The following hold.

1. (A criterion by commutators) If $H_0, \dots, H_m$ is a subnormal series of $G$ and $i$ is an integer with $0 \le i \le m - 1$, then $H_{i+1}/H_i$ is abelian exactly when $aba^{-1}b^{-1} \in H_i$ for all $a, b \in H_{i+1}$. Hence a subnormal series $H_0, \dots, H_m$ of $G$ is a solvable series exactly when $aba^{-1}b^{-1} \in H_i$ for every integer $i$ with $0 \le i \le m - 1$ and all $a, b \in H_{i+1}$.
2. (Length $0$) $G$ has a subnormal series of length $0$ exactly when $G = \{e\}$, and in that case the sequence of length $0$ with $H_0 = \{e\}$ is a solvable series of $G$. Hence a group with one element is solvable.
:::

## 직관

가해군은 아벨군을 차례로 쌓아 만들 수 있는 군입니다. $\{e\}$에서 출발해 $G$까지 부분군을 한 층씩 올리되, 아래층이 바로 위층의 정규부분군이어서 몫군 $H_{i+1}/H_i$가 정해지고, 그 몫군이 모두 아벨군이어야 합니다. 몫군이 아벨군이라는 것은 (1)에 의해 위층의 두 원소의 교환자가 늘 아래층에 떨어진다는 뜻입니다. 층을 하나 내려갈 때마다 교환되지 않는 부분이 아래층으로 밀려나고, 맨 아래에서는 $\{e\}$만 남습니다.

탑을 쌓는 일에 비유할 수 있습니다. 층마다 "그 층만 따로 떼어 보면 단순한 구조"(몫군이 아벨군)이기만 하면 층의 수가 유한한 탑 전체를 가해군이라 부릅니다. 층의 수는 정의에서 정하지 않고 "어떤 $m$"이면 되며, 같은 부분군이 두 층에 이어져도 됩니다. $H_i = H_{i+1}$이면 몫군 $H_{i+1}/H_i$는 [[quotient-group|몫군]]의 (7)에 의해 원소가 하나인 군이고, 이것은 [[group|군]]의 (5)에 의해 아벨군입니다.

정의는 가해열이 하나라도 **있는지**를 묻습니다. 같은 군에 가해열이 아닌 부분정규열이 있어도 됩니다(아래 반례 '가해열이 아닌 부분정규열').

## 성질의 증명

:::proof
**(1)** $0 \le i \le m - 1$이라 하자. 부분정규열의 (ii)에 의해 $H_i$는 군 $H_{i+1}$의 정규부분군이므로, [[commutator|교환자]]의 (5)를 군 $H_{i+1}$과 그 정규부분군 $H_i$에 쓰면 $H_{i+1}/H_i$가 아벨군인 것은 정확히 군 $H_{i+1}$의 모든 교환자가 $H_i$에 속할 때이다. 교환자의 (3)에 의해 $a, b \in H_{i+1}$이면 군 $H_{i+1}$에서 만든 $a$와 $b$의 교환자는 $G$에서의 $aba^{-1}b^{-1}$과 같다. 따라서 $H_{i+1}/H_i$가 아벨군인 것은 정확히 모든 $a, b \in H_{i+1}$에서 $aba^{-1}b^{-1} \in H_i$일 때이다. 이것을 모든 $i$에 대해 모으면 가해열의 정의에서 둘째 문장이 나온다.

**(2)** $G$의 길이 $0$인 부분정규열 $H_0$이 있으면 (i)에 의해 $H_0 = \{e\}$이고 $H_0 = H_m = G$이므로 $G = \{e\}$이다. 거꾸로 $G = \{e\}$라 하자. [[subgroup|부분군]]의 (4)에 의해 $\{e\}$는 $G$의 부분군이므로 $0$에 $\{e\}$를 대응시키는 함수는 $G$의 부분군의 길이 $0$인 열이고, $H_0 = \{e\} = G$이므로 (i)이 성립한다. $0 \le i \le -1$인 정수 $i$는 없다. $i \ge 0$이고 $i \le -1$이면 [[well-ordering-principle|정렬 원리]]의 진술의 (Z6)에 의해 $0 \le -1$인데, (L3)에 의해 $-1 < 0$이므로 (L1)에 어긋나기 때문이다. 따라서 (ii)와 가해열의 조건은 확인할 $i$가 없어 성립하고, 이 열은 가해열이다.

원소가 하나인 군 $G = \{x\}$에서는 [[group|군]]의 (5)에 의해 항등원이 $x$이므로 $G = \{e\}$이고, 앞 문단에 의해 $G$는 가해군이다. $\blacksquare$
:::

## 예시와 반례

:::example[정수의 덧셈군의 가해열]
[[number-groups|수로 이루어진 군]]의 (1)의 아벨군 $(\mathbb{Z}, +)$에서 $H_0 = \{0\}$, $H_1 = 6\mathbb{Z}$, $H_2 = 2\mathbb{Z}$, $H_3 = \mathbb{Z}$로 둡니다. [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 넷 모두 부분군이고 $0\mathbb{Z} = \{0\}$, $1\mathbb{Z} = \mathbb{Z}$입니다. 정수 $k$에 대하여 $6k = 2(3k)$이므로 $6\mathbb{Z} \subseteq 2\mathbb{Z}$이고, $\{0\} \subseteq 6\mathbb{Z}$, $2\mathbb{Z} \subseteq \mathbb{Z}$입니다.

[[subgroup|부분군]]의 (7)에 의해 $H_1$, $H_2$, $H_3$은 아벨군이므로, [[normal-subgroup|정규부분군]]의 (3)에 의해 $H_i$는 군 $H_{i+1}$의 정규부분군이고, [[quotient-group|몫군]]의 (4)에 의해 몫군 $H_{i+1}/H_i$는 아벨군입니다($i = 0, 1, 2$). 따라서 이 열은 $(\mathbb{Z}, +)$의 길이 $3$인 가해열입니다. $H_0 = \{0\}$, $H_1 = \mathbb{Z}$인 길이 $1$인 열도 같은 이유로 가해열이므로, 한 군의 가해열은 길이가 하나로 정해지지 않습니다.
:::

:::counterexample[가해열이 아닌 부분정규열]
[[symmetric-group|대칭군]]의 (5)의 $S_3$과 그 항등치환 $i$에서 $H_0 = \{i\}$, $H_1 = S_3$인 길이 $1$인 열은 [[subgroup|부분군]]의 (4)와 [[normal-subgroup|정규부분군]]의 (2)에 의해 부분정규열입니다. 그러나 $(1\ 2)$와 $(1\ 3)$의 교환자는 순환치환의 (5)에 의해 $(1\ 2)(1\ 3)(1\ 2)(1\ 3)$이고, [[finite-product-in-a-group|군의 유한 곱]]의 (10)에 의해 각 $x \in \{1, 2, 3\}$에 오른쪽부터 $(1\ 3)$, $(1\ 2)$, $(1\ 3)$, $(1\ 2)$를 차례로 적용하면 $1 \to 3 \to 3 \to 1 \to 2$, $2 \to 2 \to 1 \to 3 \to 3$, $3 \to 1 \to 2 \to 2 \to 1$입니다. 따라서 이 교환자는 $(1\ 2\ 3)$이고, [[cycle-permutation|순환치환]]의 (2)에 의해 항등치환이 아니어서 $H_0 = \{i\}$에 속하지 않습니다. 따라서 (1)에 의해 $S_3/\{i\}$는 아벨군이 아니고, 이 부분정규열은 가해열이 아닙니다. 이 열 하나만으로는 $S_3$이 가해군인지 정해지지 않습니다. 정의는 다른 열을 포함해 가해열이 하나라도 있는지를 묻습니다.
:::

:::counterexample[정규부분군이 아닌 자리가 있는 열]
$S_3$에서 $K = \{i, (1\ 2)\}$로 둡니다. [[cycle-permutation|순환치환]]의 (5)에 의해 $(1\ 2)(1\ 2) = i$이므로 $K$는 곱에 대해 닫혀 있고, $S_3$은 유한군이므로 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 $K$는 $S_3$의 부분군입니다. 그러나 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해
$$
(1\ 3)(1\ 2)(1\ 3)^{-1} = (3\ 2)
$$
이고, $(3\ 2) = (2\ 3)$은 $1$을 고정하고 $2$를 $3$으로 보내므로 $i$와도 $(1\ 2)$와도 다릅니다. 곧 $(3\ 2) \notin K$이고 $K$는 $S_3$의 정규부분군이 아닙니다. 따라서 $H_0 = \{i\}$, $H_1 = K$, $H_2 = S_3$인 열은 (ii)가 $i = 1$에서 깨져 부분정규열이 아닙니다. 이 열의 $i = 0$ 자리에서는 (ii)가 성립합니다($\{i\}$는 $K$의 정규부분군이다).
:::

## 확인 질문

:::check[$H_0, \dots, H_m$이 $G$의 가해열이고 $m \ge 1$이면 군 $H_1$은 아벨군인가?]
그렇습니다. (1)을 $i = 0$에 쓰면 모든 $a, b \in H_1$에서 $aba^{-1}b^{-1} \in H_0 = \{e\}$, 곧 $aba^{-1}b^{-1} = e$입니다. [[commutator|교환자]]의 (2)에 의해 $ab = ba$이므로 $H_1$은 아벨군입니다. 위의 반례에서 $H_1 = S_3$인 열이 가해열이 아닌 것도 이것으로 설명됩니다.
:::

:::check[원소가 하나인 군 $\{e\}$에 길이 $2$인 가해열이 있는가?]
있습니다. $H_0 = H_1 = H_2 = \{e\}$로 두면 (i)이 성립하고, $i = 0, 1$에서 $H_i \subseteq H_{i+1}$이며 [[normal-subgroup|정규부분군]]의 (2)에 의해 $H_i$는 군 $H_{i+1} = \{e\}$의 정규부분군입니다. [[quotient-group|몫군]]의 (7)에 의해 $H_{i+1}/H_i$는 원소가 하나인 군이므로 [[group|군]]의 (5)에 의해 아벨군입니다. 길이 $0$인 가해열((2))도 있으므로 같은 군에 길이가 다른 가해열이 있습니다.
:::
