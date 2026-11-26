---
title: 단순군
title_en: Simple Groups
aliases: [단순 군, simple group, simple groups]
kind: theorem
field: group-theory
msc: ["20D05", "20E32"]
level: undergrad
summary: 원소가 하나인 군이 아니고 정규부분군이 자명한 부분군과 자기 자신뿐인 군을 단순군이라 정의한다. 원소의 개수가 소수인 군은 단순군이고, 아벨군이 단순군인 것은 정확히 원소의 개수가 소수인 유한군일 때이며, 원소가 pⁿ개인 군이 단순군인 것은 정확히 n = 1일 때이다. 실로우 p-부분군이 하나뿐이고 그것이 자명하지도 전체도 아니면 단순군이 아니다.
requires: [quantifiers, negation-of-quantified-statements, de-morgan-laws-logic, prime-number, well-ordering-principle, even-and-odd, divisibility, division-theorem, finite-set, subset-of-finite-set, prime-power-divisors, group, subgroup, subgroup-examples, normal-subgroup, number-groups, order-of-an-element, order-divides-group-order, p-group, center-of-p-group, sylow-subgroup, first-sylow-theorem, third-sylow-theorem, symmetric-group, order-of-symmetric-group, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 10.2절 The Simplicity of the Alternating Group, 정의 p.127, Historical Note p.130; 15.2절 Examples and Applications, Finite Simple Groups 의 정의 p.185, Example 15.15·15.16 p.185, Theorem 15.20 p.186; 15.4절 연습문제 13 p.187
    checked: original
    note: "출처는 단순군을 두 곳에서 정의한다. 10.2절 첫머리(p.127)는 'nontrivial normal subgroup 이 없는 군'을 단순군이라 하고, 15.2절의 Finite Simple Groups(p.185)는 'proper nontrivial normal subgroup 이 없는 군'이라고 다시 적는다. 두 문장은 원소가 하나인 군을 따로 다루지 않는다(검색어 'simple' 76건을 모두 읽었고 'trivial group' 1건은 직곱에 관한 9장 물음이다). 이 항목은 지휘자 결정에 따라 원소가 하나인 군을 단순군에서 뺀다. (2)는 출처 10.2절 첫머리(p.127)가 Z_p 를 '항등원만으로 된 부분군 말고는 진부분군이 없으므로' 단순군이라고 하는 것과 같은 내용이다. (4)의 n ≥ 2 인 경우는 출처 Example 15.16(p.185)과 같다. 출처는 그 예에서 'By Theorem 14.15, G has a nontrivial center. Since the center of any group G is a normal subgroup, G cannot be a simple group.' 이라고 쓰고, 중심이 G 전체인 경우(G 가 아벨군인 경우)를 따로 다루지 않는다. 이 항목은 그 경우를 (3)으로 다룬다. (5)는 출처 Example 15.15(p.185, 위수 20)와 Example 15.17(p.185, 위수 56)이 '실로우 p-부분군이 하나뿐이면 정규부분군'으로 단순군이 아님을 보이는 논법을 진술로 올린 것이다. 예시 '원소가 $28$개인 군'은 출처 Example 15.15(p.185, 위수 20 인 군의 실로우 5-부분군의 개수를 합동과 나눔으로 1 로 정한다)와 같은 발상이고, 28 = 7·4 에서 4 < 7 이므로 출처 15.4절 연습문제 13(p.187, 위수가 pⁿk 이고 k < p 인 군은 정규부분군을 갖는다)의 한 경우이다. 예시 '$A_4$의 정규부분군 $V$'에서 원소의 위수로 실로우 2-부분군이 하나뿐임을 보이는 것은 출처 Example 15.17(p.185)이 위수 7 인 원소의 개수를 세어 실로우 2-부분군이 들어갈 자리가 하나뿐임을 보이는 것과 같은 발상이고, A₄ ⊃ {(1), (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} 의 사슬은 출처 Example 13.19(p.165)에 나온다. 확인 질문 '$S_3$은 단순군인가?'의 정규부분군 A₃ 은 출처 Example 10.5(p.126, S₃ 의 정규부분군 N = {(1), (1 2 3), (1 3 2)})에 나오고, 출처 10.4절 연습문제 10(p.131)은 지표가 2 인 부분군이 정규부분군임을 보여 n ≥ 3 에서 S_n 이 단순군이 아님을 결론짓게 한다. 예시 '$(\\mathbb{Z}, +)$의 정규부분군 $2\\mathbb{Z}$'의 2ℤ 는 출처 3.3절 첫머리(p.38, 짝수 전체 2Z 는 덧셈에 대해 군이고 Z 의 부분군)와 같은 대상이다. 역사와 맥락의 문장은 출처 10.2절 끝의 Historical Note(p.130)와 Theorem 15.20 앞뒤(p.186)에서 읽은 것이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(위수 pq 의 n_p·n_q 판정과 단순군 (5) 의 조건에 경계값, 지시와 요약의 어긋남 처리 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 자명한 부분군 $\{e\}$와 진부분군은 [[subgroup|부분군]]의 (4)의 것이고, 정규부분군은 [[normal-subgroup|정규부분군]]의 것이다. 정규부분군의 (2)에 의해 $\{e\}$와 $G$는 언제나 $G$의 정규부분군이다.

$G$가 **단순군**(simple group)인 것은 정확히 $G \ne \{e\}$이고, $G$의 모든 정규부분군 $N$에 대하여 $N = \{e\}$이거나 $N = G$일 때이다. 따라서 원소가 하나인 군은 단순군이 아니다.

1. (단순군이 아닐 조건) $G \ne \{e\}$라 하자. $G$가 단순군이 아닌 것은 정확히 $N \ne \{e\}$이고 $N \ne G$인 $G$의 정규부분군 $N$이 있을 때이다.
2. (원소의 개수가 소수인 군) $G$가 유한군이고 $|G|$가 [[prime-number|소수]]이면 $G$는 단순군이다.
3. (아벨군) $G$가 아벨군이면, $G$가 단순군인 것은 정확히 $G$가 유한군이고 $|G|$가 소수일 때이다.
4. ($p$-군) $p$가 소수이고 $G$가 [[p-group|p-군]]이며 $|G| = p^n$이면, $G$가 단순군인 것은 정확히 $n = 1$일 때이다.
5. (실로우 $p$-부분군이 하나뿐인 군) $p$가 소수이고 $G$가 유한군이며, [[sylow-subgroup|실로우 p-부분군]]의 쌍 $(r, m)$이 $r \ge 1$, $m \ge 2$를 만족한다고 하자. $n_p = 1$이면, $G$의 실로우 $p$-부분군 $P$는 $P \ne \{e\}$이고 $P \ne G$인 $G$의 정규부분군이다. 따라서 $G$는 단순군이 아니다.
:::

:::english
Let $G$ be a group and $e$ its identity. The trivial subgroup $\{e\}$ and proper subgroups are as in item (4) of the entry on subgroups, and normal subgroups are as in the entry on normal subgroups. By item (2) of that entry, $\{e\}$ and $G$ are always normal subgroups of $G$.

$G$ is a **simple group** if and only if $G \ne \{e\}$ and every normal subgroup $N$ of $G$ satisfies $N = \{e\}$ or $N = G$. Hence a group with one element is not simple.

1. (When a group is not simple) Suppose $G \ne \{e\}$. Then $G$ is not simple if and only if $G$ has a normal subgroup $N$ with $N \ne \{e\}$ and $N \ne G$.
2. (Groups of prime order) If $G$ is finite and $|G|$ is a prime, then $G$ is simple.
3. (Abelian groups) If $G$ is abelian, then $G$ is simple if and only if $G$ is finite and $|G|$ is a prime.
4. ($p$-groups) If $p$ is a prime and $G$ is a $p$-group with $|G| = p^n$, then $G$ is simple if and only if $n = 1$.
5. (Groups with a unique Sylow $p$-subgroup) Let $p$ be a prime and $G$ a finite group, and suppose the pair $(r, m)$ of the entry on Sylow $p$-subgroups satisfies $r \ge 1$ and $m \ge 2$. If $n_p = 1$, then the Sylow $p$-subgroup $P$ of $G$ is a normal subgroup of $G$ with $P \ne \{e\}$ and $P \ne G$. Hence $G$ is not simple.
:::

## 직관

$\{e\}$도 $G$도 아닌 정규부분군 $N$이 있으면 몫군 $G/N$을 만들어 $G$를 $N$과 $G/N$이라는 두 군으로 나누어 볼 수 있습니다. 단순군은 원소가 하나인 군이 아니면서 이렇게 나눌 수 없는 군, 곧 $\{e\}$와 $G$ 자신 말고는 정규부분군이 없는 군입니다. 수를 소인수로 나누다가 더 나눌 수 없는 소수에 닿는 것에 빗댈 수 있습니다. 수를 나누는 것이 정규부분군으로 몫군을 만드는 것에, 소수가 단순군에 해당합니다. 원소가 하나인 군을 단순군에 넣지 않는 것도 $1$을 소수에 넣지 않는 것과 닮았습니다. (2)와 (3)에 의해 아벨군에서는 이 비유가 그대로 맞습니다. 아벨군이 단순군인 것은 정확히 원소의 개수가 소수일 때입니다.

이 항목은 또 "단순군이 아니다"를 보이는 두 방법을 줍니다. 하나는 중심입니다. 원소가 $p^n$개($n \ge 2$)인 군은 중심이 $\{e\}$가 아니므로, 중심이 $G$ 전체가 아니면 중심이 정규부분군 $N$의 역할을 하고, 중심이 $G$ 전체이면 아벨군이므로 (3)으로 돌아갑니다. 다른 하나는 [[third-sylow-theorem|실로우 제3 정리]]입니다. $n_p$의 후보를 합동과 나눔으로 좁혀 $n_p = 1$이 되면 하나뿐인 실로우 $p$-부분군이 정규부분군이고, 그것이 $\{e\}$도 $G$도 아니면 $G$는 단순군이 아닙니다.

## 증명

:::idea
(1)은 정의의 부정이다. (2)는 원소의 개수가 소수인 군의 부분군이 $\{e\}$와 $G$뿐이라는 것이고, (3)은 아벨군에서는 모든 부분군이 정규부분군이라는 것이다. (4)는 $n = 0$, $n = 1$, $n \ge 2$로 나누고, $n \ge 2$에서는 중심이 $G$ 전체인지로 다시 나눈다. (5)는 실로우 제3 정리의 (3)이다.
:::

:::hint
(4)에서 $n \ge 2$이고 $Z(G) = G$이면 $G$는 아벨군입니다. $p^n$은 소수입니까?
:::

:::hint
(5)에서 $P \ne G$를 보이려면 원소의 개수 $p^r$와 $p^r m$을 비교합니다.
:::

:::proof
정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1), (Z3)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1)을 인용한다. "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술이다.

**$\{e\}$의 원소의 개수.** [[group|군]]의 (5)에 의해 $|\{e\}| = 1$이다. 따라서 $G$가 유한군이고 $|G| \ne 1$이면 $G \ne \{e\}$이다. 또 $G$가 유한군이고 $|G| = 1$이면, [[subgroup|부분군]]의 (1)에 의해 $\{e\} \subseteq G$이고 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $G = \{e\}$이다.

**(1)** $G \ne \{e\}$이므로, 정의에 의해 $G$가 단순군인 것은 정확히 "모든 정규부분군 $N$에 대하여 $N = \{e\}$이거나 $N = G$"일 때이다. [[negation-of-quantified-statements|한정 명제의 부정]]의 (1)과 [[de-morgan-laws-logic|드 모르간 법칙]]에 의해 이 명제의 부정은 "$N \ne \{e\}$이고 $N \ne G$인 정규부분군 $N$이 있다"이다.

**(2)** $|G|$가 소수이면 PPD의 (2)를 소수 $|G|$에 쓰면 $|G| \ge 2$이므로 $|G| \ne 1$이고, 위의 문단에 의해 $G \ne \{e\}$이다. [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)에 의해 $G$의 부분군은 $\{e\}$와 $G$뿐이다. 정규부분군은 부분군이므로, $G$의 모든 정규부분군 $N$은 $N = \{e\}$이거나 $N = G$이다. 따라서 $G$는 단순군이다.

**(3)** $G$가 유한군이고 $|G|$가 소수이면 (2)에 의해 $G$는 단순군이다. 거꾸로 $G$가 아벨군이고 단순군이라 하자. [[normal-subgroup|정규부분군]]의 (3)에 의해 $G$의 모든 부분군은 정규부분군이므로, 단순군의 정의에 의해 $G$의 모든 부분군 $H$는 $H = \{e\}$이거나 $H = G$이다. 또 $G \ne \{e\}$이고 $e \in G$이므로 $\{e\}$에 들지 않는 $a \in G$가 있고, $a \ne e$이다. 곧 $G$에는 서로 다른 두 원소 $e$, $a$가 있다. 원소의 위수는 군의 위수를 나눈다의 (4)에 의해 $G$는 유한군이고 $|G|$는 소수이다.

**(4)** $n$은 $0$ 이상인 정수이므로 (Z5)와 (Z1)에 의해 $n = 0$, $n = 1$, $n \ge 2$ 가운데 하나이다.

*$n = 0$.* PPD의 $0$제곱에 의해 $|G| = p^0 = 1$이고, 위의 문단에 의해 $G = \{e\}$이므로 $G$는 단순군이 아니다.

*$n = 1$.* PPD의 (1)의 (i)에 의해 $|G| = p^1 = p$는 소수이므로 (2)에 의해 $G$는 단순군이다.

*$n \ge 2$.* $Z(G)$를 [[subgroup-examples|부분군의 예]]의 (5)의 중심이라 하자. 정규부분군의 (5)에 의해 $Z(G)$는 $G$의 정규부분군이고, $n \ge 1$이므로 [[center-of-p-group|p-군의 중심]]의 (1)에 의해 $Z(G) \ne \{e\}$이다. 또 PPD의 (2)에 의해 $|G| = p^n \ge p \ge 2$이므로 $G \ne \{e\}$이다.

- $Z(G) \ne G$이면, $Z(G)$는 $Z(G) \ne \{e\}$이고 $Z(G) \ne G$인 정규부분군이므로 (1)에 의해 $G$는 단순군이 아니다.
- $Z(G) = G$이면, 부분군의 예의 (5)에 의해 $G$는 아벨군이다. $n \ne 1$이므로 PPD의 (6)에 의해 $p^n$은 소수가 아니다. 따라서 (3)에 의해 $G$는 단순군이 아니다.

세 경우를 모으면 $G$가 단순군인 것은 정확히 $n = 1$일 때이다.

**(5)** [[first-sylow-theorem|실로우 제1 정리]]의 (3)에 의해 $P \in \operatorname{Syl}_p(G)$가 있다. $n_p = 1$이므로 [[third-sylow-theorem|실로우 제3 정리]]의 (3)에 의해 $P$는 $G$의 정규부분군이고 $\operatorname{Syl}_p(G) = \{P\}$이다. 곧 $G$의 실로우 $p$-부분군은 이 $P$ 하나이다.

$r \ge 1$이므로 PPD의 (2)에 의해 $|P| = p^r \ge p \ge 2$이고, 위의 문단에 의해 $P \ne \{e\}$이다. 또 PPD의 (2)에 의해 $p^r \ge 1 > 0$이고 $m \ge 2$이므로 (Z3)에 의해 $|G| = p^r \cdot m \ge p^r \cdot 2 = p^r + p^r$이고, (Z7)에 의해 $p^r + p^r > p^r + 0 = p^r$이다. 따라서 (Z6)에 의해 $|G| > |P|$이고, (L1)에 의해 $|G| \ne |P|$이므로 $P \ne G$이다. 끝으로 $|G| > |P| \ge 2$이므로 $|G| \ne 1$이고 $G \ne \{e\}$이다. (1)에 의해 $G$는 단순군이 아니다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $28$개인 군]
$G$가 원소가 $28$개인 군이라 합시다. $28 = 7 \cdot 4$이고 $4 = 7 \cdot 0 + 4$이므로 [[division-theorem|나눗셈 정리]]에 의해 $7 \nmid 4$입니다. 따라서 $p = 7$에서 $r = 1$, $m = 4$입니다. [[third-sylow-theorem|실로우 제3 정리]]의 (2)에 의해 $n_7$은 $4 = 2^2$의 양의 약수이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $1, 2, 4$ 가운데 하나입니다. $2 - 1 = 1 = 7 \cdot 0 + 1$, $4 - 1 = 3 = 7 \cdot 0 + 3$이므로 나눗셈 정리에 의해 $2$와 $4$는 $7$을 법으로 $1$과 합동이 아니고, 실로우 제3 정리의 (1)에 의해 $n_7 = 1$입니다. $r = 1 \ge 1$이고 $m = 4 \ge 2$이므로 (5)에 의해 $G$는 단순군이 아닙니다. 이 군이 어떤 군인지 몰라도 이렇게 말할 수 있습니다.
:::

:::example[$A_4$의 정규부분군 $V$]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 2^2 \cdot 3$이고 $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$입니다([[even-and-odd|짝수와 홀수]]). 따라서 $p = 2$에서 $r = 2$, $m = 3$이고, 같은 항목의 (6)의 $V = \{i\} \cup D$는 원소가 $4$개인 부분군이므로 실로우 $2$-부분군입니다.

$Q$가 $A_4$의 실로우 $2$-부분군이라 합시다. 군 $Q$는 원소가 $2^2$개인 $2$-군이므로 [[p-group|p-군]]의 (5)에 의해 $Q$의 모든 원소의 위수는 $2$의 거듭제곱이고, [[order-of-an-element|원소의 위수]]의 (9)에 의해 $A_4$에서 따져도 같습니다. 교대군의 (5)의 $C$의 원소는 위수가 $3$입니다. $3 = 2^k$이면 $2^k$가 소수 $3$이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (6)에 의해 $k = 1$이고 $3 = 2$가 되어 어긋납니다. 따라서 $Q$는 $C$의 원소를 갖지 않고, $A_4 = \{i\} \cup C \cup D$이므로 $Q \subseteq \{i\} \cup D = V$입니다. 둘 다 원소가 $4$개이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Q = V$입니다. 따라서 $\operatorname{Syl}_2(A_4) = \{V\}$이고 $n_2 = 1$입니다.

$r = 2 \ge 1$이고 $m = 3 \ge 2$이므로 (5)에 의해 $V$는 $V \ne \{i\}$이고 $V \ne A_4$인 정규부분군이고, $A_4$는 단순군이 아닙니다. (5)는 $r \ge 1$, $m \ge 2$인 소수 $p$ 하나에서 $n_p = 1$이면 쓸 수 있고, 다른 소수에서 $n_p$가 무엇인지는 따지지 않아도 됩니다.
:::

:::example[$(\mathbb{Z}, +)$의 정규부분군 $2\mathbb{Z}$]
(3)은 무한군인 아벨군도 다룹니다. [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$는 아벨군이고, [[subgroup-examples|부분군의 예]]의 (1), (2)에 의해 $2\mathbb{Z}$는 짝수 전체이며 $(\mathbb{Z}, +)$의 부분군입니다. [[normal-subgroup|정규부분군]]의 (3)에 의해 $2\mathbb{Z}$는 정규부분군입니다. $2 = 2 \cdot 1$은 짝수이고 $2 \ne 0$이므로 $2\mathbb{Z} \ne \{0\}$입니다. $1 = 2 \cdot 0 + 1$은 홀수이고 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 짝수가 아니므로 $1 \notin 2\mathbb{Z}$이고 $2\mathbb{Z} \ne \mathbb{Z}$입니다. (1)에 의해 $(\mathbb{Z}, +)$는 단순군이 아니고, 이것은 $\mathbb{Z}$가 유한군이 아니라는 것과 (3)에 맞습니다.
:::

:::counterexample[$m \ge 2$를 뺄 수 없는 예]
$G$가 원소가 $5$개인 군이라 합시다. $5$의 양의 약수는 $5$ 이하이고 $5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]에 의해 $1$과 $5$뿐이어서 $5$는 [[prime-number|소수]]입니다. 따라서 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (1)의 (i)에 의해 $|G| = 5^1$이고, $G$는 $5$-군입니다. [[sylow-subgroup|실로우 p-부분군]]의 (4)에 의해 $p = 5$에서 $r = 1$, $m = 1$이고 $\operatorname{Syl}_5(G) = \{G\}$, $n_5 = 1$입니다. 그런데 (2)에 의해 $G$는 단순군입니다. 하나뿐인 실로우 $5$-부분군이 $G$ 자신이어서 $P \ne G$가 성립하지 않기 때문입니다. 따라서 (5)에서 $m \ge 2$라는 가정을 빼면 결론이 깨질 수 있습니다.
:::

## 역사와 맥락

Judson 은 유한 단순군을 모두 분류하는 문제가 군론의 으뜸가는 문제 가운데 하나였고 20세기의 마지막 몇십 년에야 풀렸다고 적고, 어떤 뜻에서 유한 단순군은 모든 유한군을 이루는 구성 요소라고 적고 있습니다. 또 아벨군이 아닌 단순군의 위수는 모두 짝수라는 번사이드의 추측을 1963년에 페이트와 톰프슨이 증명했고, 250쪽이 넘는 그 증명이 1960년대와 1970년대의 유한 단순군 분류 계획의 계기가 되었다고 적고 있습니다.

## 확인 질문

:::check[원소가 하나인 군은 단순군인가?]
아닙니다. 단순군의 정의는 $G \ne \{e\}$를 요구하는데, 원소가 하나인 군 $G$는 $e \in G$이므로 $G = \{e\}$입니다. 이 군의 정규부분군은 $\{e\}$ 하나뿐이어서 둘째 조건은 성립하지만, 첫째 조건이 성립하지 않습니다.
:::

:::check[$S_3$은 단순군인가?]
아닙니다. [[alternating-group|교대군]]의 (1)에 의해 $A_3$은 $S_3$의 정규부분군입니다. 같은 항목의 (4)에 의해 $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$이고 $|A_3| = 3$이며, [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$입니다. $|A_3| = 3 \ne 1 = |\{i\}|$이므로 $A_3 \ne \{i\}$이고, $3 \ne 6$이므로 $A_3 \ne S_3$입니다. $S_3 \ne \{i\}$이므로 (1)에 의해 $S_3$은 단순군이 아닙니다.
:::
