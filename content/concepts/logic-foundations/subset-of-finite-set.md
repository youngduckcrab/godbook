---
title: 유한집합의 부분집합
title_en: Subsets of a Finite Set
aliases: [부분집합의 개수, 진부분집합, subset of a finite set, proper subset of a finite set]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 원소를 n개 갖는 집합 B의 부분집합 A는 유한집합이고 원소의 개수는 n 이하이며, A ≠ B이면 n보다 작다. 따라서 B에서 그런 A로의 단사는 없다.
requires: [set, subset, empty-set-is-subset, proof-by-contradiction, set-operations, function, injective-surjective-bijective, mathematical-induction, finite-set, adding-or-removing-an-element, pigeonhole-principle, number-of-elements-is-unique, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 3.3절 The Addition and Subtraction Principles, Fact 3.3(p.76)
    checked: original
    note: "출처의 뺄셈 원리(Fact 3.3)는 'X가 유한집합 U의 부분집합이면 |U − X| = |U| − |X|'라고 서술한다(p.76). 출처는 이 문장에서 X가 유한집합이라는 것이나 |X|가 |U| 이하라는 것을 따로 진술하거나 증명하지 않고 그대로 쓰며, 뺄셈 원리 자체도 증명하지 않는다. 이 항목의 진술(부분집합은 유한집합이고 개수는 n 이하이며 A ⊆ B이고 A ≠ B이면 n보다 작다)과 증명(원소를 n개 갖는 집합에 대한 n에 대한 귀납)은 출처에 없고 이 사이트의 것이다. 진술의 3(B에서 A ≠ B인 부분집합 A로의 단사가 없다)도 출처에 없다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 증명에서 건너뛴 경우와 근거, 진술에 구성을 넣는 일, 출처 메모, 증명한 범위보다 넓은 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$B$가 원소를 $n$개 갖는 집합($n \ge 0$인 정수)이고 $A \subseteq B$라 하자. "원소를 $n$개 갖는다"는 [[finite-set]]의 뜻이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique]]의 뜻이다. 그러면 다음이 성립한다.

1. $A$는 유한집합이고 $|A| \le n$이다.
2. $A \ne B$이면 $|A| < n$이다. 곧 $|A| = n$이면 $A = B$이다.
3. $A \ne B$이면 $B$에서 $A$로의 단사는 존재하지 않는다.

증명에서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, [[finite-set]]의 (F1), (F2), [[adding-or-removing-an-element]], [[pigeonhole-principle|비둘기집 원리]]를 쓴다.
:::

:::english
Let $B$ be a set with $n$ elements ($n \ge 0$ an integer) and let $A \subseteq B$. "Has $n$ elements" is in the sense of finite sets, and the number of elements $|A|$ is in the sense of the entry on the uniqueness of the number of elements. Then the following hold.

1. $A$ is a finite set and $|A| \le n$.
2. If $A \ne B$, then $|A| < n$. That is, if $|A| = n$, then $A = B$.
3. If $A \ne B$, then there is no injection from $B$ to $A$.

In the proof we cite (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle, and we use (F1) and (F2) of the entry on finite sets, the results on adding or removing one element, and the pigeonhole principle.
:::

## 직관

좌석 $n$개의 극장에서 일부 좌석만 사람이 앉으면 앉은 좌석의 수는 $n$ 이하이고, 빈 좌석이 하나라도 있으면 $n$보다 작습니다. 이 항목은 이 당연한 이야기를 전단사로 정의한 개수에 대해 증명합니다. 증명은 집합의 원소 하나를 빼고 나머지에 귀납 가정을 쓰는 것입니다.

3은 이 항목에서 가장 눈에 띄는 결과입니다. 원소의 개수가 정해진 집합 $B$는 $A \subseteq B$이고 $A \ne B$인 집합 $A$로 단사를 가질 수 없습니다. [[pigeonhole-principle|비둘기집 원리]]의 반례에서 본 $\mathbb{N}$은 $E \subseteq \mathbb{N}$, $E \ne \mathbb{N}$인 $E$로의 단사를 가졌으므로, 이 결론은 개수가 정해지지 않은 집합에서는 성립하지 않을 수 있습니다.

## 증명

:::idea
원소를 $n$개 갖는 모든 집합과 그 모든 부분집합에 대해 $n$에 대한 귀납법을 쓴다. $B$에서 원소 $a_0$ 하나를 빼고 $B' = B - \{a_0\}$, $A' = A - \{a_0\}$에 귀납 가정을 쓴 뒤, $a_0 \in A$인 경우와 아닌 경우를 따로 본다.
:::

:::hint
정수 $n \ge 0$마다 "원소를 $n$개 갖는 모든 집합 $B$와 모든 $A \subseteq B$에 대하여 $A$가 원소를 $m$개 갖는 정수 $m$이 있어 $m \le n$이고, $A \ne B$이면 $m < n$이다"를 $S_n$으로 두세요.
:::

:::hint
귀납 단계에서 $B$의 원소를 하나 골라 $a_0$이라 하면 $B - \{a_0\}$는 원소를 $n$개 갖습니다. $a_0 \in A$이면 $A - \{a_0\}$에 [[adding-or-removing-an-element|원소 더하기]]를 쓰세요.
:::

:::proof
**1과 2의 증명.** 정수 $n \ge 0$에 대하여 명제 $S_n$을 "원소를 $n$개 갖는 모든 집합 $B$와 $B$의 모든 부분집합 $A$에 대하여, $A$가 원소를 $m$개 갖는 정수 $m$이 있어 $0 \le m \le n$이고, $A \ne B$이면 $m < n$이다"로 정한다. 시작점이 $0$인 [[mathematical-induction]]으로 모든 $n \ge 0$에서 $S_n$이 참임을 보인다.

*기초 단계 ($S_0$).* $B$가 원소를 $0$개 가지면 [[finite-set]]의 (F2)에 의해 $B = \emptyset$이다. $A \subseteq \emptyset$이면 $A$의 원소는 $\emptyset$의 원소여야 하는데 그런 원소는 없으므로 $A = \emptyset$이다. $\emptyset$은 원소를 $0$개 가지므로(F2) $m = 0$이고 $0 \le 0 \le 0$이다. $A = B$이므로 둘째 조건은 비어 있다.

*귀납 단계.* $n \ge 0$인 정수 $n$에 대하여 $S_n$이 참이라고 가정한다. $B$가 원소를 $n + 1$개 갖고 $A \subseteq B$라 하자. $h : \{1, \dots, n+1\} \to B$가 전단사이므로 $n + 1 \in \{1, \dots, n+1\}$에 의해 $a_0 = h(n+1)$은 $B$의 원소이다. [[adding-or-removing-an-element]]의 (b)에 의해 $B' = B - \{a_0\}$은 원소를 $n$개 갖는다. $A' = A - \{a_0\}$으로 두면 $A' \subseteq B'$이다. 실제로 $x \in A'$이면 $x \in A \subseteq B$이고 $x \ne a_0$이므로 $x \in B'$이다. $S_n$에 의해 $A'$은 원소를 $m'$개 갖는 정수 $m'$이 있어 $0 \le m' \le n$이고, $A' \ne B'$이면 $m' < n$이다. 두 경우로 나눈다.

*경우 1: $a_0 \notin A$.* 그러면 $A' = A$이다($A$의 원소는 $a_0$이 아니므로). 따라서 $A$는 원소를 $m'$개 갖고, $m' \le n$과 (L3)의 $n < n + 1$에서 (Z6)에 의해 $m' < n + 1$이다. $m = m'$으로 두면 $0 \le m \le n + 1$이고 $m < n + 1$이다. 이 경우 $a_0 \in B$이고 $a_0 \notin A$이므로 $A \ne B$이고, 필요한 $m < n + 1$을 얻었다.

*경우 2: $a_0 \in A$.* 집합 $X$와 $a_0 \in X$에 대하여 $X = (X - \{a_0\}) \cup \{a_0\}$이다. $x \in X$이면 $x = a_0$이거나 $x \in X - \{a_0\}$이고, 거꾸로 $X - \{a_0\} \subseteq X$이고 $a_0 \in X$이기 때문이다. $X = A$와 $X = B$에 쓰면 $A = A' \cup \{a_0\}$이고 $B = B' \cup \{a_0\}$이다. 또 $a_0 \notin A'$이다. [[adding-or-removing-an-element]]의 (a)에 의해 $A$는 원소를 $m' + 1$개 갖는다. $m = m' + 1$로 두면 $0 \le m'$의 양변에 $1$을 더해 $1 \le m$이므로 $0 \le m$이고, $m' \le n$의 양변에 $1$을 더해 (Z7)에 의해 $m \le n + 1$이다. $A \ne B$라 하자. 만약 $A' = B'$이면 $A = A' \cup \{a_0\} = B' \cup \{a_0\} = B$가 되어 $A \ne B$에 어긋난다(위의 $B = B' \cup \{a_0\}$). 따라서 $A' \ne B'$이고, $m' < n$이다. 양변에 $1$을 더해 (Z7)에 의해 $m = m' + 1 < n + 1$이다.

두 경우 모두 $S_{n+1}$의 결론이 성립한다. 귀납법의 원리에 의해 모든 $n \ge 0$에서 $S_n$이 참이다. 이것이 1과 2이다. $A$가 원소를 $m$개 가지므로 $A$는 유한집합이고, [[number-of-elements-is-unique]]에 의해 $|A| = m$이다. 2의 둘째 문장은 대우이다: $|A| = n$이고 $A \ne B$이면 $|A| < n$이 되어 (L1)에 어긋난다.

**3의 증명.** $A \ne B$이고 단사 $f : B \to A$가 있다고 가정한다. $B$는 원소를 $n$개, $A$는 $|A|$개 갖고, [[pigeonhole-principle]]의 2(긍정 꼴)에 의해 $n \le |A|$이다. 그런데 2에 의해 $|A| < n$이므로 (L1)에 어긋난다. 따라서 단사가 없다. $\blacksquare$
:::

## 예시와 반례

:::example[네 개 가운데 두 개]
$B = \{\text{가}, \text{나}, \text{다}, \text{라}\}$는 $\{(1, \text{가}), (2, \text{나}), (3, \text{다}), (4, \text{라})\}$로 원소를 $4$개 갖습니다. $A = \{\text{나}, \text{라}\}$는 $B$의 부분집합이고 $\{(1, \text{나}), (2, \text{라})\}$로 원소를 $2$개 갖습니다. $2 \le 4$이고 $A \ne B$이므로 $2 < 4$입니다. 3에 의해 $B$에서 $A$로의 단사는 없습니다. 직접 확인하려면 $B$의 네 원소를 $A$의 두 원소로 보내는 함수가 모두 같은 값을 두 번 갖는다는 것을 따져야 하는데, 그 일을 3이 대신해 줍니다.
:::

:::example[공집합과 자기 자신]
$\emptyset$은 모든 집합의 부분집합이므로([[empty-set-is-subset|공집합은 부분집합이라는 정리]]) $B$가 원소를 $n$개 가지면 $|\emptyset| = 0 \le n$입니다. $n \ge 1$이면 $\emptyset \ne B$이고 $0 < n$입니다. $A = B$이면 $|A| = n$으로 부등호가 등호가 됩니다.
:::

:::counterexample[$A \ne B$라는 가정이 필요하다]
2의 "$|A| < n$"은 $A \ne B$일 때만 성립합니다. $A = B$이면 $|A| = n$이어서 $|A| < n$이 아닙니다. 같은 이유로 3에서 $A = B$이면 항등함수 $\{(b, b) : b \in B\}$가 $B$에서 $A$로의 단사입니다.
:::

## 확인 질문

:::check[$B = \{x \in \mathbb{Z} : 1 \le x \le 6\}$이고 $A = \{x \in B : x \text{는 짝수}\}$이다. $A$를 구하고 $|A|$와 $|B|$를 비교하라.]
$B = \{1, \dots, 6\}$이므로 [[finite-set]]의 (F2)에 의해 $|B| = 6$입니다. $A = \{2, 4, 6\}$이고 $\{(1, 2), (2, 4), (3, 6)\}$이 $\{1, 2, 3\}$에서 $A$로의 전단사이므로 $|A| = 3$입니다. $A \subseteq B$이고 $A \ne B$이므로 $3 < 6$이며 정리의 2와 맞습니다.
:::

:::check[$B = \{1, \dots, 5\}$이고 $f : B \to B$가 단사이다. 치역 $f(B) = \{f(i) : i \in B\}$는 $B$와 같은가?]
같습니다. $f(B) \subseteq B$이고, $f$를 $B$에서 $f(B)$로의 함수로 보면 단사이고 정의에 의해 전사이므로 전단사입니다. $B$는 [[finite-set]]의 (F2)에 의해 원소를 $5$개 가지므로 (F4)에 의해 $f(B)$도 원소를 $5$개 갖습니다. $|f(B)| = 5 = |B|$이므로 2의 둘째 문장에 의해 $f(B) = B$입니다.
:::
