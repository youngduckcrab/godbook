---
title: 부분군 판정법
title_en: Subgroup Criteria
aliases: [부분군 판정, 한 단계 판정법, 유한 부분군 판정법, subgroup test, one-step subgroup test, finite subgroup test]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군의 부분집합 H가 부분군인 것은 항등원을 포함하고 곱과 역원에 닫혀 있을 때이고, 또 H가 공집합이 아니고 a, b ∈ H이면 ab⁻¹ ∈ H일 때이다. 유한군에서는 공집합이 아니고 곱에 닫혀 있으면 부분군이다.
requires: [set, subset, function, injective-surjective-bijective, adding-or-removing-an-element, finite-set, subset-of-finite-set, number-of-elements-is-unique, binary-operation, group, group-basic-properties, subgroup, number-groups, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.3절 Some Subgroup Theorems, Proposition 3.30 p.39, Proposition 3.31 p.39–40
    checked: original
    note: "(1)은 출처 Proposition 3.30(p.39), (2)는 Proposition 3.31(p.39–40)과 같은 진술이다. 출처의 3.30 정방향 증명은 항등원과 역원이 G 의 것과 같음을 그 자리에서 보이고, 이 항목은 그것을 부분군 항목의 (1), (2)로 인용한다. 3.30 의 역방향을 출처는 '세 조건과 연산의 결합법칙이 정확히 군의 공리'라고 적고, 이 항목은 이항연산 항목의 (3)의 (i)–(iii)으로 제한한 연산이 공리를 만족함을 보였다. (2)의 증명은 출처와 같다(출처도 원소 하나를 잡아 gg⁻¹ = e, eg⁻¹ = g⁻¹, h₁(h₂⁻¹)⁻¹ = h₁h₂ 를 쓴다). (3)의 덧셈 표기 판은 출처에 군에 대한 명제로 없다(검색어 'a − b ∈ H', 'g − h'). 출처 Proposition 16.10(p.193)의 부분환 판정이 r − s ∈ S 꼴을 쓴다. (4)는 출처에 없다(검색어 'closed' 의 35건을 모두 보았고, 'finite subset', 'nonempty finite', 'H is finite', 'ab ∈ H', 'h1 h2 ∈ H' 로 책 전체를 찾았다). 증명은 이 사이트가 왼쪽 곱의 단사와 유한집합의 부분집합 항목의 (3)으로 썼다. 예시의 {[0], [2], [4]} ⊆ ℤ₆ 은 출처 Example 4.5(p.47)가 ℤ₆ 에서 2 가 생성하는 순환 부분군으로 드는 것과 같은 대상이다. 이 예는 (4)로 보인다. 첫째 반례(공집합)와 둘째 반례({−1, 0, 1})는 출처에서 찾지 못했다(검색어 'empty', '{−1, 0, 1}'). 셋째 반례(0 이상의 정수 전체)는 출처에서 찾지 못했다(검색어 'nonnegative' 의 5건은 2장, 16장, 17장의 다른 내용이다). 첫째 확인 질문(홀수 전체)은 출처에서 찾지 못했다(검색어 'odd' 의 건들 가운데 홀수 정수의 집합은 p.4 의 집합의 예뿐이다). 둘째 확인 질문은 출처 p.47 의 'ℤ_n 은 1 로 생성할 수 있다'와 같은 결론의 n = 5 인 경우이고, 거듭제곱 없이 닫혀 있음만으로 보인다."
status: source-checked
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $H \subseteq G$라 하자. 부분군은 [[subgroup|부분군]]의 뜻이다.

1. (세 조건) $H$가 $G$의 부분군인 것은 정확히 다음 세 조건이 모두 성립할 때이다.
   - (i) $e \in H$이다.
   - (ii) 모든 $a, b \in H$에 대하여 $ab \in H$이다.
   - (iii) 모든 $a \in H$에 대하여 $a^{-1} \in H$이다.
2. (한 조건) $H$가 $G$의 부분군인 것은 정확히 $H \ne \emptyset$이고 모든 $a, b \in H$에 대하여 $ab^{-1} \in H$일 때이다.
3. (덧셈 표기) $G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면, (1)과 (2)는 다음과 같다. $H$가 $G$의 부분군인 것은 정확히 $0 \in H$이고, 모든 $a, b \in H$에 대하여 $a + b \in H$이며, 모든 $a \in H$에 대하여 $-a \in H$일 때이다. 또 $H$가 $G$의 부분군인 것은 정확히 $H \ne \emptyset$이고 모든 $a, b \in H$에 대하여 $a - b \in H$일 때이다.
4. (유한군) $G$가 유한군이고, $H \ne \emptyset$이며, 모든 $a, b \in H$에 대하여 $ab \in H$이면, $H$는 $G$의 부분군이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $H \subseteq G$. Subgroups are meant in the sense of the entry on subgroups.

1. (Three conditions) $H$ is a subgroup of $G$ exactly when all three of the following hold.
   - (i) $e \in H$.
   - (ii) $ab \in H$ for all $a, b \in H$.
   - (iii) $a^{-1} \in H$ for all $a \in H$.
2. (One condition) $H$ is a subgroup of $G$ exactly when $H \ne \emptyset$ and $ab^{-1} \in H$ for all $a, b \in H$.
3. (Additive notation) If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, then (1) and (2) read as follows. $H$ is a subgroup of $G$ exactly when $0 \in H$, $a + b \in H$ for all $a, b \in H$, and $-a \in H$ for all $a \in H$. Also, $H$ is a subgroup of $G$ exactly when $H \ne \emptyset$ and $a - b \in H$ for all $a, b \in H$.
4. (Finite groups) If $G$ is a finite group, $H \ne \emptyset$, and $ab \in H$ for all $a, b \in H$, then $H$ is a subgroup of $G$.
:::

## 직관

[[subgroup|부분군]]의 정의대로 확인하려면 $H$가 닫혀 있는지 본 뒤 제한한 연산이 군의 세 공리를 만족하는지 따져야 합니다. (1)은 그 가운데 결합법칙은 확인할 필요가 없다는 것입니다. $G$에서 이미 성립하는 등식이 $H$의 원소에 대해서도 그대로 성립하기 때문입니다. 남는 것은 "$G$의 항등원, 곱, 역원이 $H$ 밖으로 나가지 않는가"뿐입니다.

(2)는 (1)의 세 조건을 하나로 묶습니다. 같은 원소 $a$를 두 번 넣으면 $aa^{-1} = e$가 나오고, 첫째 자리에 $e$를 넣으면 $a^{-1}$이 나오며, 둘째 자리에 $b^{-1}$을 넣으면 $a(b^{-1})^{-1} = ab$가 나옵니다. 다만 같은 원소를 넣으려면 $H$에 원소가 하나는 있어야 하므로 $H \ne \emptyset$이 따로 필요합니다.

(4)는 유한군에서는 공집합이 아니고 곱에 닫혀 있기만 하면 항등원과 역원을 따로 확인하지 않아도 된다는 것입니다. $a \in H$를 왼쪽에 곱하는 일은 $H$를 $H$ 안으로 보내고 서로 다른 원소를 서로 다른 원소로 보냅니다. $H$가 유한집합이면 이런 대응은 $H$의 모든 원소에 닿아야 하므로, $ax = a$인 $x$와 $ax = e$인 $x$가 $H$ 안에 있습니다. 유한하다는 가정은 이 "모든 원소에 닿는다"는 단계를 보이는 데 쓰입니다(아래 셋째 반례).

## 증명

:::idea
(1)의 한 방향은 [[subgroup|부분군]]의 (1), (2)이고, 다른 방향은 [[binary-operation|이항연산]]의 (3)이 제한한 연산으로 결합법칙, 항등원, 역원을 옮겨 준다는 것이다. (2)는 (1)로, (4)는 왼쪽 곱의 단사와 [[subset-of-finite-set|유한집합의 부분집합]]으로 (1)에 돌린다.
:::

:::hint
(2)의 역방향: $H$의 원소 $c$ 하나를 잡아 $a = b = c$로 넣는다. 그다음 $a = e$를 넣는다.
:::

:::hint
(4): $a \in H$에 대해 왼쪽 곱 $L_a$를 $H$로 제한한 함수의 치역이 $H$와 다르면, $H$에서 $H$의 다른 부분집합으로의 단사가 생긴다.
:::

:::proof
**(1)** 먼저 $H$가 $G$의 부분군이라 하자. [[subgroup|부분군]]의 (1)에 의해 $e \in H$이고 (i)이 성립한다. 부분군의 정의의 첫째 조건이 (ii)이다. 부분군의 (2)에 의해 모든 $a \in H$에서 $a^{-1} \in H$이고 (iii)이 성립한다.

거꾸로 (i)–(iii)이 성립한다고 하자. (ii)는 $H$가 $G$의 연산에 대하여 닫혀 있다는 것이므로, [[binary-operation|이항연산]]의 (3)에 의해 그 연산을 $H$로 제한한 연산은 $H$ 위의 이항연산이다. 이 연산으로 $(H, \ast)$가 군의 세 공리를 만족함을 보인다. $G$의 연산은 결합법칙을 만족하므로([[group|군]]의 (1)) 이항연산의 (3)의 (i)에 의해 제한한 연산도 결합법칙을 만족한다. (i)에 의해 $G$의 항등원 $e$가 $H$에 속하므로 이항연산의 (3)의 (ii)에 의해 $e$는 제한한 연산의 항등원이다. $a \in H$이면 $G$에서 $a$의 역원 $a^{-1}$이 (iii)에 의해 $H$에 속하므로, 이항연산의 (3)의 (iii)에 의해 $a^{-1}$은 제한한 연산에 대해서도 $a$의 역원이다. 따라서 $(H, \ast)$는 [[group|군]]의 (1)–(3)을 만족하는 군이고, 부분군의 정의의 두 조건이 모두 성립하므로 $H$는 $G$의 부분군이다.

**(2)** 먼저 $H$가 $G$의 부분군이라 하자. [[subgroup|부분군]]의 (1)에 의해 $e \in H$이므로 $H \ne \emptyset$이다. $a, b \in H$이면 부분군의 (2)에 의해 $b^{-1} \in H$이고, $H$가 닫혀 있으므로 $ab^{-1} \in H$이다.

거꾸로 $H \ne \emptyset$이고 모든 $a, b \in H$에서 $ab^{-1} \in H$라 하자. (1)의 세 조건을 보인다.

- (i) $H \ne \emptyset$이므로 $c \in H$인 $c$가 있다. 가정에 $a = c$, $b = c$를 넣으면 $cc^{-1} \in H$이고, [[group|군]]의 진술에 의해 $cc^{-1} = e$이므로 $e \in H$이다.
- (iii) $a \in H$라 하자. (i)에 의해 $e \in H$이므로 가정에 $e$와 $a$를 넣으면 $ea^{-1} \in H$이고, $e$의 성질에 의해 $ea^{-1} = a^{-1}$이므로 $a^{-1} \in H$이다.
- (ii) $a, b \in H$라 하자. (iii)에 의해 $b^{-1} \in H$이므로 가정에 $a$와 $b^{-1}$을 넣으면 $a(b^{-1})^{-1} \in H$이다. [[group-basic-properties|군의 기본 성질]]의 (5)에 의해 $(b^{-1})^{-1} = b$이므로 $ab \in H$이다.

(1)에 의해 $H$는 $G$의 부분군이다.

**(3)** [[number-groups|수로 이루어진 군]]의 덧셈 표기에서 곱 $ab$는 $a + b$로, 항등원 $e$는 $0$으로, 역원 $a^{-1}$은 $-a$로 쓰고, $ab^{-1}$은 $a + (-b)$, 곧 $a - b$로 쓴다. (1)과 (2)를 이 표기로 옮겨 적은 것이 (3)이다.

**(4)** $G$가 유한군이고 $H \ne \emptyset$이며 $H$가 $G$의 연산에 대하여 닫혀 있다고 하자. [[group|군]]의 정의에 의해 $G$는 유한집합이므로 원소를 $|G|$개 갖고, $H \subseteq G$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $H$는 유한집합이다. $m = |H|$로 두면 $H$는 원소를 $m$개 갖는다.

$a \in H$를 하나 정한다. [[group-basic-properties|군의 기본 성질]]의 (10)에 의해 왼쪽 곱 $L_a : G \to G$, $L_a(x) = ax$는 전단사이므로 단사이다. [[adding-or-removing-an-element|함수의 제한]]에 의해 그 제한 $f = L_a|_H$는 $H$에서 $G$로의 단사이고, 모든 $x \in H$에서 $f(x) = ax$이다. $H$가 닫혀 있으므로 모든 $x \in H$에서 $f(x) = ax \in H$이다. $T$를 $f$의 치역, 곧 $T = \{ax : x \in H\}$라 하면 방금 본 것에 의해 $T \subseteq H$이고, [[function|함수]]의 진술("공역은 선언하기 나름이다")에 의해 $f$는 $H$에서 $T$로의 함수이다. [[injective-surjective-bijective|단사]]의 진술에 의해 단사 여부는 집합 $f$만으로 정해지므로 $f : H \to T$는 단사이다. 만약 $T \ne H$이면, $H$가 원소를 $m$개 갖고 $T \subseteq H$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (3)에 의해 $H$에서 $T$로의 단사가 존재하지 않아야 하는데, $f$가 그런 단사이므로 모순이다. 따라서 $T = H$이다. 곧 모든 $b \in H$에 대하여 $ax = b$인 $x \in H$가 있다.

- $b = a$로 두면 $ax = a$인 $x \in H$가 있다. [[group-basic-properties|군의 기본 성질]]의 (8)에 의해 $ax = a$인 $x \in G$는 $a^{-1}a$ 하나뿐이고 $a^{-1}a = e$이므로 $x = e$이다. 따라서 $e \in H$이다.
- 이제 $e \in H$이므로 $b = e$로 두면 $ax = e$인 $x \in H$가 있다. [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $x = a^{-1}$이다. 따라서 $a^{-1} \in H$이다.

$a$는 $H$의 아무 원소였으므로 모든 $a \in H$에서 $a^{-1} \in H$이고 (iii)이 성립한다. $H \ne \emptyset$이므로 $H$의 원소 $a$가 적어도 하나 있고, 그 $a$에 대한 첫째 줄에서 $e \in H$, 곧 (i)이 성립한다. (ii)는 가정이다. (1)에 의해 $H$는 $G$의 부분군이다.
:::

## 예시와 반례

:::example[유한군에서는 공집합이 아니고 닫혀 있는지만 보면 된다]
[[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_6$은 원소가 $6$개인 유한집합이고, [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_6, +)$는 아벨군입니다. $H = \{[0], [2], [4]\}$로 둡시다. $[a] + [b] = [a + b]$이고 $6 \equiv 0$, $8 \equiv 2 \pmod 6$($6 - 0 = 6 \cdot 1$, $8 - 2 = 6 \cdot 1$)이므로 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]에 의해
$$[2] + [2] = [4], \quad [2] + [4] = [6] = [0], \quad [4] + [4] = [8] = [2]$$
이고, $[0]$을 더하는 합은 더한 쪽 원소 그대로이며, 덧셈이 가환이므로 $[4] + [2] = [0]$입니다. 모든 합이 $H$에 속하므로 $H$는 공집합이 아니고 닫혀 있으며, (4)에 의해 $H$는 $\mathbb{Z}_6$의 부분군입니다. 역원은 따로 확인하지 않았지만, 위의 표에서 $[2]$와 $[4]$의 합이 $[0]$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $-[2] = [4]$가 실제로 $H$에 있습니다.
:::

:::counterexample[(i)만 빠지는 부분집합은 공집합뿐이다]
$\emptyset$은 (ii)와 (iii)을 만족합니다. "모든 $a, b \in \emptyset$에 대하여 …"는 $\emptyset$에 원소가 없으므로 참이기 때문입니다. 그러나 $e \notin \emptyset$이므로 (i)이 깨지고, $\emptyset$은 부분군이 아닙니다([[subgroup|부분군]]의 (5)). (2)의 조건 "모든 $a, b \in H$에 대하여 $ab^{-1} \in H$"도 $\emptyset$에서는 참이므로, (2)와 (4)에서 $H \ne \emptyset$을 뺄 수 없습니다. 거꾸로 $H \ne \emptyset$이 (ii)와 (iii)을 만족하면 $c \in H$에 대해 $c^{-1} \in H$이고 $e = cc^{-1} \in H$이므로, (ii)와 (iii)을 만족하면서 (i)을 만족하지 않는 부분집합은 $\emptyset$뿐입니다.
:::

:::counterexample[(ii)를 빼면: $\{-1, 0, 1\}$]
$(\mathbb{Z}, +)$에서 $H = \{-1, 0, 1\}$을 봅시다. 항등원 $0$이 $H$에 있고, $-(-1) = 1$, $-0 = 0$, $-1$이 모두 $H$에 있으므로 (3)의 꼴로 (i)과 (iii)이 성립합니다. 그러나 $1 + 1 = 2$이고 $2$는 $-1$, $0$, $1$ 가운데 어느 것과도 같지 않으므로 $2 \notin H$입니다. (ii)가 깨지므로 (1)에 의해 $H$는 부분군이 아닙니다.
:::

:::counterexample[(iii)을 빼면, 그리고 무한군에서의 (4): 0 이상의 정수 전체]
$(\mathbb{Z}, +)$에서 $P = \{a \in \mathbb{Z} : 0 \le a\}$를 봅시다. $0 \le 0$이므로 $0 \in P$입니다. $a, b \in P$이면 $0 \le b$의 양변에 $a$를 더해 $a \le a + b$이고((Z7)), $0 \le a$와 함께 $0 \le a + b$이며((Z6)), $a + b$는 정수이므로([[even-and-odd]]에서 받아들인 사실) $a + b \in P$입니다. 따라서 (i)과 (ii)가 성립합니다. 그러나 $0 < 1$((Z8))이므로 $1 \in P$인데, $-1 < 0$이므로 (L1)에 의해 $0 \le -1$은 성립하지 않고 $-1 \notin P$입니다. (iii)이 깨지므로 $P$는 부분군이 아닙니다. 여기서 (Z6)–(Z8), (L1)은 [[well-ordering-principle|정렬 원리]]의 진술에 있습니다.

$P$는 공집합이 아니고 덧셈에 닫혀 있으므로, 이 예는 (4)에서 유한군의 가정을 뺄 수 없다는 것도 보여 줍니다($(\mathbb{Z}, +)$는 [[number-groups|수로 이루어진 군]]의 (1)에 의해 무한군입니다). (4)의 증명에서 깨지는 단계는 "치역이 $H$ 전체"입니다. $a = 1$일 때 $x \in P$에 $1 + x$를 대응시키는 함수는 $P$에서 $P$로의 단사이지만, $1 + x = 0$이면 $x = -1 \notin P$이므로 치역에 $0$이 없습니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}, +)$에서 홀수 전체의 집합은 부분군인가?]
아닙니다. $0 = 2 \cdot 0$이므로 $0$은 짝수이고, [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 짝수이면서 홀수인 정수는 없으므로 $0$은 홀수가 아닙니다. 항등원 $0$이 없으므로 (1)의 (i)이 깨집니다. (ii)도 깨집니다. $1 = 2 \cdot 0 + 1$은 홀수인데 $1 + 1 = 2 = 2 \cdot 1$은 짝수이므로 홀수가 아닙니다.
:::

:::check[$(\mathbb{Z}_5, +)$의 부분군 가운데 $[1]$을 원소로 갖는 것을 모두 구하여라.]
$\mathbb{Z}_5$ 하나뿐입니다. $H$가 그런 부분군이면 $H$는 닫혀 있으므로 $[1] + [1] = [2]$, $[2] + [1] = [3]$, $[3] + [1] = [4]$, $[4] + [1] = [5] = [0]$이 차례로 $H$에 속합니다($5 - 0 = 5 \cdot 1$이므로 $[5] = [0]$). [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_5 = \{[0], [1], [2], [3], [4]\}$이므로 $H = \mathbb{Z}_5$입니다. 거꾸로 $\mathbb{Z}_5$는 [[subgroup|부분군]]의 (4)에 의해 부분군입니다.
:::
