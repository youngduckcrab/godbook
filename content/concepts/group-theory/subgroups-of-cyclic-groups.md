---
title: 순환군의 부분군
title_en: Subgroups of Cyclic Groups
aliases: [순환군의 부분군은 순환군이다, 정수의 덧셈군의 부분군, subgroups of a cyclic group, subgroups of the integers]
kind: theorem
field: group-theory
msc: ["20A05", "20K99"]
level: undergrad
summary: 순환군 ⟨a⟩의 부분군 H는 {e}이거나, H에 속하는 a의 거듭제곱 가운데 지수가 가장 작은 자연수 m인 aᵐ이 생성하는 순환군이다. (ℤ, +)의 부분군은 정확히 0 이상의 정수 n에 대한 nℤ이고 그 n은 하나뿐이며, 둘 다 0은 아닌 정수 a, b에 대하여 ax + by 꼴의 정수 전체는 gcd(a, b)ℤ이다.
requires: [set, subset, even-and-odd, prime-number, well-ordering-principle, division-theorem, divisibility, greatest-common-divisor, bezout-identity, group, group-basic-properties, subgroup, subgroup-criteria, subgroup-examples, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, order-of-an-element, order-of-cyclic-subgroup]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 4.1절 Subgroups of Cyclic Groups, Theorem 4.10 과 Corollary 4.11, p.48
    checked: original
    note: "(1)의 '순환군의 모든 부분군은 순환군'은 출처 Theorem 4.10(p.48)이고, 증명도 출처와 같은 방법(정렬 원리로 H 에 속하는 가장 작은 양의 지수 m 을 잡고 나눗셈 정리로 H = ⟨aᵐ⟩ 를 보인다)이다. 이 항목은 그 증명 안의 사실 'aᵏ ∈ H 인 것은 정확히 m | k 일 때'를 진술에 올렸고, 출처가 'n 이나 −n 이 양수'라고만 적는 곳에서 지수가 0 이 아니라는 것(g ≠ e = a⁰)을 밝혔다. 'G 가 유한군이면 m | |G|'는 출처에 명제로 없다(검색어 'divid' 와 '\\| ?[a-z]' 로 4.1절과 4.5절(p.46–58)을 찾은 건들은 Proposition 4.12, Theorem 4.13 과 그 증명, 원소의 위수의 기호, 복소수의 절댓값, 연습문제 23, 30, 38('순환군의 원소의 위수는 군의 위수를 나눈다'), 39('위수 m 인 순환군과 d | m 이면 위수 d 인 부분군이 있다'), 44, 45 이다). (2)의 앞 문장은 출처 Corollary 4.11(p.48)이다. 출처는 그 증명을 두지 않고 4장 연습문제 35(p.57)로 같은 문장을 증명하라고 한다. 출처의 Corollary 4.11 과 연습문제 35 는 n 이 하나뿐이라는 것과 n 이 H 의 가장 작은 양의 원소라는 것을 적지 않는다(두 곳의 문장을 읽었다). 출처 13장 Example 13.17(p.164)도 ℤ 의 부분군을 kℤ 꼴로 쓴다. (3)은 출처에 명제로 없다(검색어 'mZ ⊂', 'nZ ⊂', '⊂ nZ', '⊂ mZ', 'mZ ⊆', 'nZ ⊆' 0건). 출처 13장 Example 13.11, 13.13(p.162–163)이 ℤ ⊃ 9ℤ ⊃ 45ℤ ⊃ 180ℤ 같은 사슬을 쓴다. (4)는 출처 Theorem 2.10(p.20)과 같은 발상이고, 출처 9장 연습문제 53(p.124, ⟨m, n⟩ = ⟨d⟩ 인 것은 정확히 d = gcd(m, n) 일 때)과 같은 결론이다. 출처의 ⟨m, n⟩ 은 m 과 n 이 생성하는 부분군이다(13.1절, p.158). 출처는 그 정리의 증명에서 {am + bn : am + bn > 0} 의 가장 작은 원소가 gcd(a, b) 라는 것을 보인다. 이 항목은 집합 {ax + by} 전체가 (ℤ, +) 의 부분군이고 gcd(a, b)ℤ 와 같다는 꼴로 진술하고, gcd 의 존재는 정수론 입문의 최대공약수 항목, gcd(a, b) 가 이 집합에 있다는 것은 베주 항등식 항목에서 가져온다. 출처 Theorem 2.10 은 a, b 가 둘 다 0 이 아닌 경우로 진술하고, 이 항목은 둘 다 0 은 아닌 경우로 진술한다. 예시 '6x + 10y 꼴의 정수 전체'와 확인 질문 '12 와 18 을 원소로 갖는 부분군'은 출처 Theorem 2.10 의 증명, 9장 연습문제 53 과 같은 발상이다. 예시 '거듭제곱이 항등원이 되는 지수 전체'는 출처 Example 11.9(p.135)와 Example 11.11(p.136)이 n 에 gⁿ 을 대응시키는 준동형의 핵을 '위수가 무한하면 {0}, 위수가 n 이면 nℤ'라고 적는 것과 같은 결론이다. 출처는 준동형의 핵으로 말하고, 이 예시는 (2)와 원소의 위수 항목으로 보인다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 거듭제곱은 [[power-in-a-group|군의 거듭제곱]]의 것이고, $\langle a \rangle$, 순환군, 생성원은 [[cyclic-subgroup|순환 부분군]]의 것이며, 부분군은 [[subgroup|부분군]]의 뜻이다. $\mathbb{N}$은 양의 정수의 집합이다. $(\mathbb{Z}, +)$는 [[number-groups|수로 이루어진 군]]의 군이고, 정수 $n$에 대하여 $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$는 [[subgroup-examples|부분군의 예와 교집합]]의 (1)의 것이다.

1. (순환군의 부분군은 순환군) $G$가 순환군이고 $a$가 그 생성원이며 $H$가 $G$의 부분군이라 하자. $M = \{m \in \mathbb{N} : a^m \in H\}$로 둔다.
   - $H \ne \{e\}$이면 $M$은 공집합이 아니다.
   - $M$이 공집합이 아니면, $M$의 최소 원소([[well-ordering-principle|정렬 원리]]의 (2)와 (1)에 의해 하나로 정해진다)를 $m_0$이라 할 때, 모든 정수 $k$에 대하여 $a^k \in H$인 것은 정확히 $m_0 \mid k$일 때이고, $H = \langle a^{m_0} \rangle$이다.
   - $M$이 공집합이면 $H = \{e\} = \langle e \rangle$이다.

   따라서 순환군의 모든 부분군은 순환군이다. 또 $G$가 유한군이면 $M$은 공집합이 아니고 $m_0 \mid |G|$이다.
2. (정수의 덧셈군의 부분군) $\mathbb{Z}$의 부분집합 $H$가 $(\mathbb{Z}, +)$의 부분군인 것은 정확히 $H = n\mathbb{Z}$인 $0$ 이상의 정수 $n$이 있을 때이다. 그런 $n$은 하나뿐이다. $H = \{0\}$이면 $n = 0$이고, $H \ne \{0\}$이면 $n$은 $H$의 가장 작은 양의 원소이다.
3. (포함과 나누어떨어짐) 정수 $m$, $n$에 대하여 $m\mathbb{Z} \subseteq n\mathbb{Z}$인 것은 정확히 $n \mid m$일 때이다.
4. (일차결합 전체) $a$, $b$가 둘 다 $0$은 아닌 정수이면 $S = \{ax + by : x, y \in \mathbb{Z}\}$는 $(\mathbb{Z}, +)$의 부분군이고 $S = \gcd(a, b)\mathbb{Z}$이다. 따라서 $\gcd(a, b)$는 $S$의 가장 작은 양의 원소이다. 여기서 $\gcd$는 [[greatest-common-divisor|최대공약수]]이다.
:::

:::english
Let $G$ be a group with identity $e$. Powers are those of the entry on powers in a group; $\langle a \rangle$, cyclic groups and generators are those of the entry on cyclic subgroups; subgroups are meant in the sense of the entry on subgroups. $\mathbb{N}$ is the set of positive integers. $(\mathbb{Z}, +)$ is the group of the entry on groups of numbers, and for an integer $n$, $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ is the set of (1) of the entry on examples of subgroups.

1. (Subgroups of a cyclic group are cyclic) Let $G$ be a cyclic group with generator $a$, and let $H$ be a subgroup of $G$. Put $M = \{m \in \mathbb{N} : a^m \in H\}$.
   - If $H \ne \{e\}$, then $M$ is nonempty.
   - If $M$ is nonempty and $m_0$ is the least element of $M$ (determined uniquely by (2) and (1) of the well-ordering principle), then for every integer $k$, $a^k \in H$ exactly when $m_0 \mid k$, and $H = \langle a^{m_0} \rangle$.
   - If $M$ is empty, then $H = \{e\} = \langle e \rangle$.

   Hence every subgroup of a cyclic group is cyclic. Moreover, if $G$ is finite, then $M$ is nonempty and $m_0 \mid |G|$.
2. (Subgroups of the additive group of integers) A subset $H$ of $\mathbb{Z}$ is a subgroup of $(\mathbb{Z}, +)$ exactly when $H = n\mathbb{Z}$ for some integer $n \ge 0$. Such an $n$ is unique. If $H = \{0\}$ then $n = 0$, and if $H \ne \{0\}$ then $n$ is the least positive element of $H$.
3. (Inclusion and divisibility) For integers $m$ and $n$, $m\mathbb{Z} \subseteq n\mathbb{Z}$ exactly when $n \mid m$.
4. (All integer combinations) If $a$ and $b$ are integers that are not both $0$, then $S = \{ax + by : x, y \in \mathbb{Z}\}$ is a subgroup of $(\mathbb{Z}, +)$ and $S = \gcd(a, b)\mathbb{Z}$. Hence $\gcd(a, b)$ is the least positive element of $S$. Here $\gcd$ is the greatest common divisor.
:::

## 직관

순환군 $\langle a \rangle$의 원소는 모두 $a$의 거듭제곱이므로, 부분군 $H$는 "어떤 지수의 거듭제곱을 담고 있는가"로 정해집니다. $H$에 $a^k$와 $a^l$이 들어 있으면 곱과 역원에 닫혀 있으므로 $a^{k+l}$, $a^{-k}$도 들어 있습니다. 그래서 $H$에 들어 있는 지수 전체는 $0$을 담고($a^0 = e$) 덧셈과 부호 바꾸기에 닫혀 있으며, 그런 정수의 모임은 $\{0\}$이거나, 가장 작은 양의 원소의 배수 전체일 수밖에 없습니다. 나눗셈 정리로 나머지를 떼어 내면, $0$이 아닌 나머지는 더 작은 양의 지수가 되어 "가장 작은"에 어긋나기 때문입니다.

자로 길이를 재는 일에 비유할 수 있습니다. 어떤 길이들을 더하고 빼서 만들 수 있는 길이 전체를 생각하면, 그 가운데 가장 짧은 양의 길이가 눈금 한 칸이 되고 나머지 길이는 모두 그 눈금의 정수배입니다. "가장 짧은 양의 길이"가 $m_0$, "더하고 빼서 만들 수 있다"가 부분군의 닫힘에 해당합니다. 비유가 맞지 않는 곳도 있습니다. 길이에서는 가장 짧은 양의 길이가 있는지를 따로 따져야 하지만, 여기서는 지수가 정수이므로 양의 지수가 하나라도 있으면 정렬 원리에 의해 가장 작은 것이 있습니다.

$(\mathbb{Z}, +)$는 $1$이 생성하는 순환군이므로, 그 부분군은 $n\mathbb{Z}$ 꼴입니다((2)). 둘 다 $0$은 아닌 두 정수 $a$, $b$의 일차결합 $ax + by$ 전체도 부분군이므로 어떤 $n\mathbb{Z}$이고, 그 $n$이 바로 $\gcd(a, b)$입니다((4)).

## 증명

:::idea
(1)은 $H$에 속하는 거듭제곱의 지수 가운데 가장 작은 자연수 $m_0$을 잡고, 나눗셈 정리로 $a^k \in H$이면 나머지 $r$에 대해서도 $a^r \in H$임을 보여 $r = 0$을 얻는다. (2)는 (1)을 생성원 $1$에 쓴 것이고, (4)는 베주 항등식과 공약수로 두 포함을 보인다.
:::

:::hint
(1): $a^k \in H$이고 $k = qm_0 + r$이면 $a^r = a^k \bigl(a^{m_0}\bigr)^{-q}$이다.
:::

:::hint
(4): $\gcd(a, b)$는 $a$와 $b$를 모두 나누므로 $ax + by$도 나눈다.
:::

:::proof
아래에서 "거듭제곱의 ($k$)", "지수법칙의 ($k$)", "순환 부분군의 ($k$)", "부분군의 ($k$)"는 각각 [[power-in-a-group|군의 거듭제곱]], [[laws-of-exponents|지수법칙]], [[cyclic-subgroup|순환 부분군]], [[subgroup|부분군]]의 ($k$)이다. (Z1)은 [[prime-number|소수]]의 진술에서, (Z5), (Z7), (L1), (L2)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들이거나 증명한 것이다.

**(1)** $G = \langle a \rangle$이다(순환 부분군의 (6)).

*첫째 문장.* 부분군의 (1)에 의해 $e \in H$이므로 $\{e\} \subseteq H$이다. $H$의 모든 원소가 $e$라면 $H \subseteq \{e\}$가 되어 $H = \{e\}$이므로, $H \ne \{e\}$이면 $g \ne e$인 $g \in H$가 있다. $g \in G = \langle a \rangle$이므로 $g = a^k$인 정수 $k$가 있고, $a^0 = e \ne g$이므로 $k \ne 0$이다. 부분군의 (2)와 지수법칙의 (3)에 의해 $a^{-k} = g^{-1} \in H$이다. (Z5)에 의해 $0 < k$이거나 $k < 0$이고, $k < 0$이면 (Z7)에 의해 $0 < -k$이다. 따라서 $k$와 $-k$ 가운데 하나는 자연수이고 그 지수의 거듭제곱은 $H$에 속하므로 $M \ne \emptyset$이다.

*둘째 문장.* $m_0 \in M$이므로 $a^{m_0} \in H$이다. $m_0 \mid k$이면 $k = m_0 q$인 정수 $q$가 있고, 지수법칙의 (2)에 의해 $a^k = (a^{m_0})^q$이며, 거듭제곱의 (5)에 의해 이것은 $H$에 속한다. 거꾸로 $a^k \in H$라 하자. $m_0$은 양의 정수이므로 [[division-theorem|나눗셈 정리]]에 의해 $k = qm_0 + r$, $0 \le r < m_0$인 정수 $q$, $r$이 있다. 지수법칙의 (1), (2)에 의해
$$a^r = a^{k + m_0(-q)} = a^k a^{m_0(-q)} = a^k (a^{m_0})^{-q}$$
이고, 거듭제곱의 (5)에 의해 $(a^{m_0})^{-q} \in H$이며, $H$는 곱에 닫혀 있으므로 $a^r \in H$이다. $r \ne 0$이라면 $0 \le r$이므로 $0 < r$이고, $r$은 자연수이며 $a^r \in H$이므로 $r \in M$이다. 그러면 $m_0 \le r$인데 이것은 $r < m_0$과 함께 성립할 수 없다((L1)). 따라서 $r = 0$이고 $k = m_0 q$이므로 $m_0 \mid k$이다.

이제 $H = \langle a^{m_0} \rangle$을 보인다. $a^{m_0} \in H$이고 $H$는 부분군이므로 순환 부분군의 (2)에 의해 $\langle a^{m_0} \rangle \subseteq H$이다. 거꾸로 $x \in H$이면 $x \in G = \langle a \rangle$이므로 $x = a^k$인 정수 $k$가 있고, 방금 보인 것에 의해 $m_0 \mid k$, 곧 $k = m_0 q$인 정수 $q$가 있다. 지수법칙의 (2)에 의해 $x = a^{m_0 q} = (a^{m_0})^q \in \langle a^{m_0} \rangle$이다.

*셋째 문장.* 첫째 문장의 대우에 의해 $M = \emptyset$이면 $H = \{e\}$이고, 순환 부분군의 (4)에 의해 $\{e\} = \langle e \rangle$이다.

*순환군이라는 것.* 세 문장에 의해 $H = \langle b \rangle$인 $b \in G$가 있다($b = a^{m_0}$ 또는 $b = e$). 순환 부분군의 (6)의 끝 문장에 의해 군 $\langle b \rangle$는 순환군이다.

*유한군인 경우.* $G$가 유한군이면 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 생성원 $a$의 위수는 유한하고 $\operatorname{ord}(a) = |G|$이다. 따라서 $|G|$는 자연수이고 $a^{|G|} = e \in H$이므로 $|G| \in M$이다. $M \ne \emptyset$이고, 둘째 문장에 의해 $m_0 \mid |G|$이다.

**(2)** $n\mathbb{Z}$가 $(\mathbb{Z}, +)$의 부분군이라는 것은 [[subgroup-examples|부분군의 예와 교집합]]의 (1)이다. 거꾸로 $H$가 부분군이라 하자. 순환 부분군의 (5), (6)에 의해 $(\mathbb{Z}, +)$는 순환군이고 $1$이 생성원이다. 덧셈 표기에서 $1$의 $m$제곱은 $m \cdot 1$이고, 거듭제곱의 (6)에 의해 $m \cdot 1 = m$이다. 따라서 (1)의 $M$은 $H$의 양의 원소 전체의 집합이고, $(\mathbb{Z}, +)$의 항등원은 $0$이다([[number-groups|수로 이루어진 군]]의 (1)).

- $H = \{0\}$이면 부분군의 예의 (1)에 의해 $H = 0\mathbb{Z}$이다.
- $H \ne \{0\}$이면 (1)에 의해 $M$은 공집합이 아니고, 그 최소 원소 $m_0$, 곧 $H$의 가장 작은 양의 원소에 대하여 $H = \langle m_0 \cdot 1 \rangle = \langle m_0 \rangle$이다. 순환 부분군의 (5)에 의해 $\langle m_0 \rangle = m_0\mathbb{Z}$이다.

*$n$은 하나뿐이다.* $0$ 이상의 정수 $n$, $n'$이 $n\mathbb{Z} = n'\mathbb{Z}$를 만족한다고 하자. $n = 0$이면 $n'\mathbb{Z} = 0\mathbb{Z} = \{0\}$이고 $n' = n' \cdot 1 \in n'\mathbb{Z}$이므로 $n' = 0$이다. 같은 방법으로 $n' = 0$이면 $n = 0$이다. 남은 경우는 $n \ne 0$이고 $n' \ne 0$인 경우이고, 이때 $0 \le n$, $0 \le n'$이므로 $n$, $n'$은 자연수이다. $n = n \cdot 1 \in n\mathbb{Z} = n'\mathbb{Z}$이므로 부분군의 예의 (1)에 의해 $n' \mid n$이고, $n'$은 자연수 $n$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $n' \le n$이다. 같은 방법으로 $n \le n'$이고, (L2)에 의해 $n = n'$이다.

이로써 첫 두 문장이 증명되었다. 끝 문장: $H = \{0\}$이면 위의 첫째 경우와 유일성에 의해 $n = 0$이다. $H \ne \{0\}$이면 둘째 경우의 $m_0$에 대해 $H = m_0\mathbb{Z}$이므로 유일성에 의해 $n = m_0$이고, 이것은 $H$의 가장 작은 양의 원소이다.

**(3)** $m\mathbb{Z} \subseteq n\mathbb{Z}$이면 $m = m \cdot 1 \in m\mathbb{Z} \subseteq n\mathbb{Z}$이므로 부분군의 예의 (1)에 의해 $n \mid m$이다. 거꾸로 $n \mid m$이면 [[divisibility|나누어떨어짐]]의 정의에 의해 $m = nc$인 정수 $c$가 있고, $m\mathbb{Z}$의 원소 $mk$는 $mk = n(ck)$이므로 $n\mathbb{Z}$에 속한다. 여기서 정수의 곱이 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실이다.

**(4)** $g = \gcd(a, b)$라 하자. [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $g \ge 1$이다.

*$S$는 부분군이다.* [[subgroup-criteria|부분군 판정법]]의 (3)의 둘째 판정법을 쓴다. $0 = a \cdot 0 + b \cdot 0 \in S$이므로 $S \ne \emptyset$이다. $ax + by$와 $ax' + by'$이 $S$의 원소이면 $(ax + by) - (ax' + by') = a(x - x') + b(y - y')$이고 $x - x'$, $y - y'$은 정수이므로 이것은 $S$에 속한다.

*$S \subseteq g\mathbb{Z}$.* $g$는 $a$와 $b$의 공약수이므로 $a = gs$, $b = gt$인 정수 $s$, $t$가 있다. 그러면 $ax + by = g(sx + ty) \in g\mathbb{Z}$이다.

*$g\mathbb{Z} \subseteq S$.* [[bezout-identity|베주 항등식]]에 의해 $ax_0 + by_0 = g$인 정수 $x_0$, $y_0$이 있다. $g\mathbb{Z}$의 원소 $gk$는 $gk = a(x_0 k) + b(y_0 k) \in S$이다.

따라서 $S = g\mathbb{Z}$이다. $g \ge 1$이므로 $g$는 $0$ 이상이고, $g = g \cdot 1 \in S$이며 $g \ne 0$이므로 $S \ne \{0\}$이다. (2)의 유일성과 끝 문장에 의해 $g$는 $S$의 가장 작은 양의 원소이다.
:::

## 예시와 반례

:::example[$6x + 10y$ 꼴의 정수 전체]
$S = \{6x + 10y : x, y \in \mathbb{Z}\}$를 봅시다. (4)에 의해 $S$는 $(\mathbb{Z}, +)$의 부분군이고, (2)에 의해 $S$는 그 가장 작은 양의 원소 $n$에 대해 $n\mathbb{Z}$입니다. $2 = 6 \cdot 2 + 10 \cdot (-1) \in S$입니다. 한편 $S$의 원소는 $6x + 10y = 2(3x + 5y)$로 모두 짝수이고, $1 = 2 \cdot 0 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $1 \notin S$입니다. 양의 정수는 $1$ 이상이고([[prime-number|소수]]의 (Z1)) $2$보다 작은 양의 정수는 $1$뿐이므로(정렬 원리의 (Z5)와 (Z1)) $n = 2$이고 $S = 2\mathbb{Z}$입니다. (4)에 의해 $\gcd(6, 10) = 2$라는 것도 함께 나옵니다.
:::

:::example[거듭제곱이 항등원이 되는 지수 전체]
군 $G$의 원소 $a$에 대하여 $K = \{k \in \mathbb{Z} : a^k = e\}$는 $(\mathbb{Z}, +)$의 부분군입니다. $a^0 = e$이므로 $0 \in K$이고, $k, l \in K$이면 [[laws-of-exponents|지수법칙]]의 (1), (3)에 의해 $a^{k-l} = a^k a^{-l} = e\,(a^l)^{-1} = e\,e^{-1} = e$이므로 $k - l \in K$입니다([[group-basic-properties|군의 기본 성질]]의 (4)와 [[subgroup-criteria|부분군 판정법]]의 (3)). 이 항목의 (2)에 의해 $K = n\mathbb{Z}$인 $0$ 이상의 정수 $n$이 하나 있습니다. [[order-of-an-element|원소의 위수]]의 (2)에 의해 $a$의 위수가 유한하면 $k \in K$인 것은 정확히 $\operatorname{ord}(a) \mid k$일 때이므로 $K = \operatorname{ord}(a)\mathbb{Z}$이고 $n = \operatorname{ord}(a)$입니다. 위수가 무한하면 원소의 위수의 (4)에 의해 $K = \{0\}$이고 $n = 0$입니다.
:::

:::counterexample[$4\mathbb{Z}$의 원소 $8$은 $4\mathbb{Z}$를 생성하지 않는다]
(1)에서 생성원으로 잡는 것은 가장 작은 양의 지수의 거듭제곱입니다. 부분군에 속한 다른 원소를 잡으면 생성원이 되지 않을 수 있습니다. $H = 4\mathbb{Z}$이면 $8 = 4 \cdot 2 \in H$이지만, [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $\langle 8 \rangle = 8\mathbb{Z}$이고, (3)에 의해 $4\mathbb{Z} \subseteq 8\mathbb{Z}$이려면 $8 \mid 4$여야 합니다. $8 \mid 4$라면 $8$은 $4$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $8 \le 4$가 되어 $4 < 8$에 어긋납니다(정렬 원리의 (L1)). 따라서 $\langle 8 \rangle \ne 4\mathbb{Z}$입니다. (2)에 의해 $4\mathbb{Z}$의 생성원으로 잡히는 것은 가장 작은 양의 원소 $4$입니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}, +)$의 부분군 $H$가 $12$와 $18$을 원소로 가지면, $H$에 반드시 들어 있는 양의 정수 가운데 가장 작은 것은 무엇인가?]
$6$입니다. $H$는 부분군이므로 정수 $x$, $y$에 대하여 $x \cdot 12 = 12x$와 $y \cdot 18 = 18y$를 담고([[power-in-a-group|군의 거듭제곱]]의 (5), (6)) 그 합 $12x + 18y$도 담습니다. 특히 $6 = 18 \cdot 1 + 12 \cdot (-1) \in H$입니다. 한편 $H = 6\mathbb{Z}$는 $12 = 6 \cdot 2$와 $18 = 6 \cdot 3$을 담는 부분군이고([[subgroup-examples|부분군의 예와 교집합]]의 (1)), $6\mathbb{Z}$의 양의 원소 $6k$에서 $k \le 0$이면 $6k \le 0$이므로 $k > 0$, 곧 $k \ge 1$이고 $6k \ge 6$입니다([[prime-number|소수]]의 (Z1)–(Z3)과 정렬 원리의 (Z5)). 따라서 $1$부터 $5$까지의 정수는 이 $H$에 들어 있지 않고, 반드시 들어 있는 가장 작은 양의 정수는 $6$입니다.
:::

:::check[정수 $m$에 대하여 $m\mathbb{Z} \subseteq 0\mathbb{Z}$인 것은 언제인가? 또 $0\mathbb{Z} \subseteq n\mathbb{Z}$인 정수 $n$은 무엇인가?]
$m\mathbb{Z} \subseteq 0\mathbb{Z}$인 것은 정확히 $m = 0$일 때입니다. (3)에 의해 이것은 $0 \mid m$, 곧 $m = 0 \cdot c$인 정수 $c$가 있을 때이고, $0 \cdot c = 0$이기 때문입니다. $0\mathbb{Z} \subseteq n\mathbb{Z}$는 모든 정수 $n$에서 성립합니다. $0 = n \cdot 0$이므로 $n \mid 0$입니다.
:::
