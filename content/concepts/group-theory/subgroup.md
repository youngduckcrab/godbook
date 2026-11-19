---
title: 부분군
title_en: Subgroup
aliases: [자명한 부분군, 진부분군, trivial subgroup, proper subgroup]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군 G의 부분집합 H가 G의 연산에 대해 닫혀 있고 그 연산을 H로 제한한 것으로 군이 되면 H를 G의 부분군이라 한다. 부분군의 항등원과 역원은 G의 것과 같다.
requires: [set, subset, set-operations, adding-or-removing-an-element, finite-set, subset-of-finite-set, number-of-elements-is-unique, binary-operation, group, group-basic-properties, natural-numbers-are-infinite, well-ordering-principle, even-and-odd, real-number-arithmetic, number-groups, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, function, inverse-function, function-composition, injective-surjective-bijective, symmetric-group]
sources:
  - ref: judson-abstract-algebra
    loc: 3.3절 Subgroups, 부분군·자명한 부분군·진부분군의 정의(번호 없음) p.38, Example 3.27 p.38–39, Proposition 3.30 의 증명 p.39
    checked: original
    note: "출처는 부분군을 'G 의 연산을 H 로 제한했을 때 H 가 그 자체로 군이 되는 G 의 부분집합'으로 정의한다(p.38). 제한한 연산이 H 위의 이항연산이 되려면 H 가 닫혀 있어야 한다는 것은 정의에 적지 않고, Example 3.27(p.38)에서 부분군은 G 의 이항연산을 물려받아야 한다고 덧붙인다. 이 항목은 닫혀 있음을 정의의 첫째 조건으로 적고, 제한한 연산은 이항연산 항목의 (3)의 것을 쓴다. 출처는 진부분군을 'G 의 진부분집합인 부분군'이라 하며(p.38), 이 항목의 'H ≠ G 인 부분군'과 같은 뜻이다. 출처는 부분군 관계를 기호로 쓰지 않는다(검색어 'H ≤ G', '≤ G', 'H < G'). (1)과 (2)는 출처가 Proposition 3.30 의 증명(p.39)에서 보이는 것이다. 출처는 (1)을 e_H e_H = e_H 와 e e_H = e_H 에서 오른쪽 소거로, (2)를 G 에서의 역원의 유일성으로 보이고, 이 항목은 (1)에 같은 소거를 담은 군의 기본 성질의 (9)를, (2)에 같은 항목의 (2)를 인용한다. (4)의 앞부분은 출처 p.38 의 '원소가 둘 이상인 군은 부분군을 적어도 둘, 곧 {e} 와 G 자신을 갖는다'와 같은 내용이다(출처는 따로 증명하지 않는다). (5)–(8)은 출처에 명제로 없다(검색어 'empty', 'nonempty' 17건, 'subgroup of a subgroup|subgroup of H' 4건(11장의 동형 정리, 13장 연습문제, 15장), 'subgroups? of an abelian' 1건(Example 13.11 의 정규열), 'subgroup of a finite group' 4건(15장), '|H| ≤' 0건을 책 전체에서 찾았다. 출처는 Proposition 3.31(p.39)에서 판정의 조건으로 H ≠ ∅ 를 쓴다). 예시(ℤ₈ 의 {[0], [4]})는 출처 Example 3.28(p.39)이 ℤ₄ 의 부분군 {0, 2} 를 드는 것과 같은 발상이다(원소가 둘인 ℤ_n 의 부분군. 출처는 확인 과정을 적지 않는다). 둘째 반례(ℝ − {0} 은 (ℝ, +) 의 부분군이 아니다)는 출처 Example 3.27(p.38–39)이 GL₂(ℝ) 는 행렬의 곱으로 군이지만 (M₂(ℝ), +) 의 부분군이 아님을 보이는 것과 같은 발상이고, 이 항목은 수의 군으로 바꾸었다. 셋째 반례의 {i_X, t} 는 출처 Figure 4.8(p.47)과 연습문제 3.35(p.42)의 답(p.321)에 나오는 S₃ 의 원소가 둘인 부분군 {id, μ₁} 과 같은 꼴의 부분군이고(출처의 S₃ 는 정삼각형의 대칭으로 소개된다), 이 반례가 답하는 물음은 출처 연습문제 3.52(p.43, '아벨군이 아닌 군의 모든 진부분군은 아벨군이 아니다'를 증명하거나 반박하라)와 같다. 둘째 확인 질문은 출처 Example 4.1(p.46)이 (ℤ, +) 의 3 의 배수 전체를 부분군으로 드는 것과 같은 대상에서 출발하고, 거듭제곱 없이 이 항목의 (1), (2)와 닫혀 있음만 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이다. $G$의 [[subset|부분집합]] $H$가 $G$의 **부분군**(subgroup)인 것은 정확히 다음 두 조건이 모두 성립할 때이다.

- $H$가 $\ast$에 대하여 닫혀 있다. 곧 모든 $a, b \in H$에 대하여 $ab \in H$이다.
- [[binary-operation|이항연산]]의 (3)에서 정한, $\ast$를 $H$로 제한한 연산(같은 기호 $\ast$로 쓴다)으로 $(H, \ast)$가 군이다.

"$H$는 $G$의 부분군이다"는 기호로 줄이지 않고 이렇게 말로 쓴다. 다음이 성립한다. (1)–(3)에서 $H$는 $G$의 부분군이다.

1. (항등원) $e \in H$이고, 군 $(H, \ast)$의 항등원은 $e$이다.
2. (역원) $a \in H$이면 $a^{-1} \in H$이고, 군 $(H, \ast)$에서 $a$의 역원은 $G$에서의 역원 $a^{-1}$이다.
3. (같은 계산) $a, b \in H$이면 군 $(H, \ast)$에서 $a$와 $b$의 곱은 $G$에서의 곱 $ab$이다. 따라서 (1), (2)와 함께, $H$ 안의 계산에서 항등원 $e$, 역원 $a^{-1}$, 곱 $ab$를 $G$의 것과 구별하지 않고 쓴다.
4. (자명한 부분군과 $G$ 자신) $\{e\}$와 $G$는 $G$의 부분군이다. $\{e\}$를 $G$의 **자명한 부분군**(trivial subgroup)이라 하고, $G$의 부분군 $H$가 $H \ne G$일 때 $H$를 $G$의 **진부분군**(proper subgroup)이라 한다.
5. (공집합) $\emptyset$은 $G$의 부분군이 아니다.
6. (부분군의 부분군) $H$가 $G$의 부분군이고 $K \subseteq H$라 하자. $K$가 군 $(H, \ast)$의 부분군인 것은 정확히 $K$가 $G$의 부분군일 때이다.
7. (아벨군) $G$가 아벨군이면 $G$의 모든 부분군은 아벨군이다.
8. (유한군) $G$가 유한군이면 $G$의 모든 부분군 $H$는 유한군이고 $|H| \le |G|$이다.
:::

:::english
Let $(G, \ast)$ be a group with identity $e$. Products $ab$ and inverses $a^{-1}$ are written as in the entry on groups. A subset $H$ of $G$ is a **subgroup** of $G$ exactly when both of the following conditions hold.

- $H$ is closed under $\ast$; that is, $ab \in H$ for all $a, b \in H$.
- With the restriction of $\ast$ to $H$, defined in (3) of the entry on binary operations (and written with the same symbol $\ast$), $(H, \ast)$ is a group.

We do not abbreviate "$H$ is a subgroup of $G$" by a symbol; we say it in words. The following hold, where in (1)–(3) $H$ is a subgroup of $G$.

1. (Identity) $e \in H$, and the identity of the group $(H, \ast)$ is $e$.
2. (Inverses) If $a \in H$, then $a^{-1} \in H$, and the inverse of $a$ in the group $(H, \ast)$ is its inverse $a^{-1}$ in $G$.
3. (Same computations) If $a, b \in H$, the product of $a$ and $b$ in the group $(H, \ast)$ is their product $ab$ in $G$. Hence, together with (1) and (2), in computations inside $H$ we use the identity $e$, inverses $a^{-1}$ and products $ab$ without distinguishing them from those of $G$.
4. (The trivial subgroup and $G$ itself) $\{e\}$ and $G$ are subgroups of $G$. $\{e\}$ is called the **trivial subgroup** of $G$, and a subgroup $H$ of $G$ with $H \ne G$ is called a **proper subgroup** of $G$.
5. (The empty set) $\emptyset$ is not a subgroup of $G$.
6. (Subgroups of subgroups) Let $H$ be a subgroup of $G$ and $K \subseteq H$. Then $K$ is a subgroup of the group $(H, \ast)$ exactly when $K$ is a subgroup of $G$.
7. (Abelian groups) If $G$ is abelian, every subgroup of $G$ is abelian.
8. (Finite groups) If $G$ is a finite group, every subgroup $H$ of $G$ is a finite group and $|H| \le |G|$.
:::

## 직관

부분군은 군 안에 들어 있으면서 같은 연산으로 다시 군이 되는 부분집합입니다. 놀이의 규칙은 그대로 두고 놀이판의 일부(전부일 수도 있습니다)만 쓰는 것과 같습니다. 비유의 각 부분이 정의에 맞습니다. 규칙을 그대로 둔다는 것이 $G$의 연산을 $H$로 제한해 쓴다는 것이고, 놀이를 하는 동안 말이 그 일부를 벗어나지 않는다는 것이 $H$가 닫혀 있다는 것이며, 그 일부만으로도 "제자리"와 "되돌리기"가 있다는 것이 $(H, \ast)$가 군이라는 것입니다.

비유가 말해 주지 않는 것이 (1)과 (2)입니다. $H$만으로 놀이를 할 때의 "제자리" $e_H$가 원래 놀이판의 제자리 $e$와 다를 수도 있을 것 같지만, $e_H e_H = e_H$이므로 [[group-basic-properties|군의 기본 성질]]의 (9)에 의해 $e_H = e$입니다. 역원도 $G$에서 역원이 하나뿐이므로(같은 항목의 (2)) $G$의 역원과 같습니다. 그래서 부분군 안에서는 $G$의 기호를 그대로 씁니다.

정의의 두 조건은 모두 "같은 연산"에 관한 것입니다. 부분집합이 다른 연산으로 군을 이룬다는 것만으로는 부분군이 되지 않고(아래 둘째 반례), 같은 연산에 닫혀 있어도 군을 이루지 않으면 부분군이 아닙니다(아래 첫째 반례).

:::remark[(1)–(3)의 증명]
$H$가 $G$의 부분군이라 하자. [[binary-operation|이항연산]]의 (3)에 의해 $\ast$를 $H$로 제한한 연산의 $(a, b) \in H \times H$에서의 값은 $G$에서의 곱 $ab$이다. 이것이 (3)이다.

(1) $(H, \ast)$가 군이므로 [[group|군]]의 진술에 의해 그 항등원 $e_H \in H$가 하나 있다. 항등원의 성질을 $e_H$ 자신에 쓰면, $(H, \ast)$에서 $e_H$와 $e_H$의 곱은 $e_H$이다. (3)에 의해 이 곱은 $G$에서의 곱이므로 $G$에서 $e_H e_H = e_H$이다. [[group-basic-properties|군의 기본 성질]]의 (9)에 의해 $e_H = e$이다. 따라서 $e = e_H \in H$이고 $(H, \ast)$의 항등원은 $e$이다.

(2) $a \in H$라 하자. $(H, \ast)$가 군이므로 $(H, \ast)$에서 $a$의 역원 $b \in H$가 있다. 곧 $(H, \ast)$에서 $a$와 $b$의 곱, $b$와 $a$의 곱이 모두 $(H, \ast)$의 항등원이고, 그 항등원은 (1)에 의해 $e$이다. (3)에 의해 $G$에서 $ab = e$이고 $ba = e$이다. [[group-basic-properties|군의 기본 성질]]의 (2)에 의해 $b = a^{-1}$이다. 따라서 $a^{-1} = b \in H$이고, $(H, \ast)$에서 $a$의 역원은 $a^{-1}$이다.
:::

:::remark[(4)–(8)의 증명]
(4) $\{e\}$: $e$의 성질에 의해 $ee = e$이다. $a, b \in \{e\}$이면 $a = b = e$이므로 $ab = ee = e \in \{e\}$이고, $\{e\}$는 닫혀 있다. [[binary-operation|이항연산]]의 (3)에 의해 $\ast$를 $\{e\}$로 제한한 연산은 $\{e\}$ 위의 이항연산이다. [[group|군]]의 (5)에 의해 원소가 하나인 집합 $\{e\}$ 위의 이항연산은 하나뿐이고 그 연산으로 $\{e\}$는 군이다. 따라서 $(\{e\}, \ast)$는 군이고 $\{e\}$는 $G$의 부분군이다.

$G$: $G \subseteq G$이고, $\ast$가 $G \times G$에서 $G$로의 함수이므로 모든 $a, b \in G$에서 $ab \in G$이다. $\ast$는 $G \times G$에서 $G$로의 관계이므로 $\ast$의 모든 원소는 첫째 성분이 $G \times G$에 속하는 순서쌍이고, [[adding-or-removing-an-element|함수의 제한]]의 정의 $\ast|_{G \times G} = \{(x, y) \in \ast : x \in G \times G\}$에 의해 $\ast|_{G \times G} = \ast$이다. 따라서 $\ast$를 $G$로 제한한 연산은 $\ast$ 자신이고, $(G, \ast)$는 군이므로 $G$는 $G$의 부분군이다.

(5) (1)에 의해 $G$의 부분군은 원소 $e$를 가지므로 공집합이 아니다.

(6) $\ast$를 $H$로 제한한 연산을 잠시 $\ast_H$로 쓰자. [[binary-operation|이항연산]]의 (3)에 의해 $a, b \in H$에서 $a \ast_H b = ab$이다. $K \subseteq H$이므로, "모든 $a, b \in K$에서 $a \ast_H b \in K$"와 "모든 $a, b \in K$에서 $ab \in K$"는 같은 조건이다. 곧 $K$가 $\ast_H$에 대해 닫혀 있는 것은 정확히 $\ast$에 대해 닫혀 있을 때이다. $K$가 닫혀 있으면, $\ast_H$를 $K$로 제한한 연산과 $\ast$를 $K$로 제한한 연산은 둘 다 $K$ 위의 이항연산이고 모든 $a, b \in K$에서 값이 $a \ast_H b = ab$로 같으므로, [[binary-operation|이항연산]]의 같음에 의해 같은 연산이다. 따라서 $K$에 그 연산을 준 순서쌍은 두 경우에 같은 순서쌍이고, 한쪽이 군인 것은 정확히 다른 쪽이 군일 때이다. 정의의 두 조건이 두 경우에 같으므로 (6)이 성립한다.

(7) $G$가 아벨군이면 $\ast$는 교환법칙을 만족한다([[group|군]]의 아벨군의 정의). $H$가 $G$의 부분군이면 [[binary-operation|이항연산]]의 (3)의 (i)에 의해 $\ast$를 $H$로 제한한 연산도 교환법칙을 만족하므로, 군 $(H, \ast)$는 아벨군이다.

(8) $G$가 유한군이면 [[group|군]]의 정의에 의해 $G$는 유한집합이고, [[number-of-elements-is-unique|원소의 개수]]의 표기로 $G$는 원소를 $|G|$개 갖는다. $H$가 $G$의 부분군이면 $H \subseteq G$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $H$는 유한집합이고 $|H| \le |G|$이다. 따라서 군 $(H, \ast)$는 유한군이다.
:::

## 예시와 반례

:::example[법 8의 정수에서 원소가 둘인 부분군]
[[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_8, +)$는 항등원이 $[0]$인 아벨군입니다. $H = \{[0], [4]\}$로 둡시다. $4 + 4 = 8$이고 $8 - 0 = 8 \cdot 1$이므로 $8 \equiv 0 \pmod 8$, 곧 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]에 의해 $[8] = [0]$입니다. 따라서
$$[0] + [0] = [0], \quad [0] + [4] = [4] + [0] = [4], \quad [4] + [4] = [8] = [0]$$
입니다([[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $[a] + [b] = [a + b]$). 네 값이 모두 $H$에 속하므로 $H$는 닫혀 있습니다. [[binary-operation|이항연산]]의 (3)에 의해 덧셈을 $H$로 제한한 연산은 결합적이고((i)), $[0] \in H$가 그 항등원이며((ii)), $[0] + [0] = [0]$과 $[4] + [4] = [0]$이므로 $[0]$과 $[4]$는 각각 자기 자신이 $H$ 안의 역원입니다((iii)). 따라서 $(H, +)$는 군이고 $H$는 $\mathbb{Z}_8$의 부분군입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0] \ne [4]$이고 $[1] \ne [0]$, $[1] \ne [4]$이므로, $H$는 자명한 부분군도 아니고 $\mathbb{Z}_8$ 자신도 아닌 진부분군입니다.
:::

:::counterexample[덧셈에 닫혀 있지만 부분군이 아닌 자연수 전체]
$\mathbb{N}$은 양의 정수의 집합입니다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). $a, b \in \mathbb{N}$이면 $0 < b$의 양변에 $a$를 더해 $a < a + b$이고((Z7)), $0 < a$와 함께 $0 < a + b$입니다((Z6)). $a + b$는 정수이므로([[even-and-odd]]에서 받아들인 사실) $a + b \in \mathbb{N}$이고, $\mathbb{N}$은 $(\mathbb{Z}, +)$의 덧셈에 대하여 닫혀 있습니다.

그러나 $\mathbb{N}$은 $(\mathbb{Z}, +)$의 부분군이 아닙니다. [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$의 항등원은 $0$이고, 이 항목의 (1)에 의해 부분군은 $0$을 원소로 가져야 합니다. 그런데 $0 \in \mathbb{N}$이면 $0 < 0$이 되어, $0 < 0$과 $0 = 0$ 가운데 하나만 성립한다는 삼분법 (Z5)에 어긋납니다. 닫혀 있다는 것만으로는 부분군이 되지 않습니다. 여기서 (Z5)–(Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질입니다.
:::

:::counterexample[0이 아닌 실수 전체는 곱셈으로 군이지만 덧셈의 부분군이 아니다]
$\mathbb{R} - \{0\}$은 $\mathbb{R}$의 부분집합이고, [[number-groups|수로 이루어진 군]]의 (3)에 의해 실수의 곱셈으로 군을 이룹니다. 그러나 $\mathbb{R} - \{0\}$은 $(\mathbb{R}, +)$의 부분군이 아닙니다. 같은 항목의 (2)에 의해 $(\mathbb{R}, +)$의 항등원은 $0$인데, [[set-operations|차집합]]의 뜻에 의해 $0 \notin \mathbb{R} - \{0\}$이므로 이 항목의 (1)이 깨집니다. 실제로 [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)에 의해 $1 + (-1) = 0$이므로 $\mathbb{R} - \{0\}$은 덧셈에 대하여 닫혀 있지도 않습니다. 부분군은 $G$와 **같은** 연산으로 군이어야 합니다.
:::

:::counterexample[아벨군이 아닌 군의 아벨 부분군]
부분군 하나가 아벨군이라고 해서 $G$가 아벨군인 것은 아닙니다. $X = \{1, 2, 3\}$이라 하고 $t = \{(1, 2), (2, 1), (3, 3)\}$으로 둡시다. $t$는 $X$에서 $X$로의 [[function|함수]]이고 $t(t(1)) = t(2) = 1$, $t(t(2)) = t(1) = 2$, $t(t(3)) = t(3) = 3$이므로 [[function-composition|합성]] $t \circ t$는 [[inverse-function|항등함수]] $i_X$와 모든 점에서 값이 같고, 함수의 같음에 의해 $t \circ t = i_X$입니다. $t(x) = t(y)$이면 $x = t(t(x)) = t(t(y)) = y$이므로 $t$는 [[injective-surjective-bijective|단사]]이고, $y \in X$이면 $y = t(t(y))$이므로 전사입니다. 따라서 $t \in S_X$이고, $t(1) = 2 \ne 1$이므로 $t \ne i_X$입니다.

$H = \{i_X, t\}$로 둡시다. [[symmetric-group|대칭군]]의 (1)에 의해 $S_X$의 곱은 합성이고 항등원은 $i_X$이므로 $i_X i_X = i_X$, $i_X t = t i_X = t$, $tt = i_X$이고, $H$는 닫혀 있습니다. [[binary-operation|이항연산]]의 (3)의 (i)–(iii)에 의해 합성을 $H$로 제한한 연산은 결합적이고 $i_X$가 항등원이며, $i_X$와 $t$는 각각 자기 자신이 역원입니다. 따라서 $H$는 $S_X$의 부분군입니다. $H$의 두 원소 $a$, $b$는 $a = b$이거나 $\{a, b\} = \{i_X, t\}$이고, 어느 경우에도 $ab = ba$이므로 $H$는 아벨군입니다. 한편 $X$에 서로 다른 세 원소 $1$, $2$, $3$이 있으므로 [[symmetric-group|대칭군]]의 (4)에 의해 $S_X$는 아벨군이 아닙니다. 그래서 $H \ne S_X$이고, $H$는 아벨군이 아닌 군의 진부분군이면서 아벨군입니다.
:::

## 확인 질문

:::check[원소가 하나인 군 $\{e\}$의 부분군은 모두 몇 개인가?]
하나입니다. $A \subseteq \{e\}$이면 $e \in A$이거나 $e \notin A$입니다. $e \in A$이면 $A = \{e\}$이고, $e \notin A$이면 $A$의 원소는 $\{e\}$의 원소인데 $e$가 아니므로 원소가 없어 $A = \emptyset$입니다. 이 항목의 (5)에 의해 $\emptyset$은 부분군이 아니고 (4)에 의해 $\{e\}$는 부분군입니다. 이 군에서는 자명한 부분군과 군 자신이 같은 부분군이고, 진부분군은 없습니다.
:::

:::check[$H$가 $(\mathbb{Z}, +)$의 부분군이고 $3 \in H$이면 $H$에 반드시 들어 있는 정수 네 개를 근거와 함께 들어라.]
$0$, $-3$, $6$, $-6$입니다. 이 항목의 (1)에 의해 항등원 $0$이 $H$에 있고, (2)에 의해 $3$의 역원 $-3$이 $H$에 있습니다([[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$에서 $3$의 역원은 $-3$입니다). $H$가 닫혀 있으므로 $3 + 3 = 6$과 $(-3) + (-3) = -6$도 $H$에 있습니다.
:::
