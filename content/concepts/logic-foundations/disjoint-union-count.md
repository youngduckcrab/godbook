---
title: 서로소인 합집합의 원소의 개수
title_en: Number of Elements of a Disjoint Union
aliases: [덧셈 원리, 뺄셈 원리, 합집합의 원소의 개수, 차집합의 원소의 개수, addition principle, subtraction principle, inclusion-exclusion for two sets]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 서로소인 두 유한집합의 합집합은 유한집합이고 원소의 개수는 두 개수의 합이다. 유한집합 A의 부분집합 B에 대해 A − B의 원소의 개수는 |A| − |B|이고, 두 유한집합의 합집합도 유한집합이며 |A ∪ B| + |A ∩ B| = |A| + |B|이다.
requires: [set, subset, set-operations, mathematical-induction, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 3.3절 The Addition and Subtraction Principles, Fact 3.2(p.74), Fact 3.3(p.76). 3.7절 The Inclusion-Exclusion Principle, Fact 3.6(p.93)
    checked: original
    note: "(1)은 출처 Fact 3.2(덧셈 원리, p.74)의 조각이 둘인 경우이다. 출처는 조각이 n 개인 꼴 |X| = |X₁| + ⋯ + |Xₙ| 로 진술하고, 이 원리는 오래전부터 직관적으로 써 온 것에 이름을 붙이는 것이라고 쓰며 증명하지 않는다. (2)는 출처 Fact 3.3(뺄셈 원리, p.76)과 같은 내용이다. 출처는 '여집합에 있는 것의 개수는 분명히 U 에 있는 것의 개수에서 X 에 있는 것의 개수를 뺀 것'이라고 쓰고 증명하지 않는다. (3)은 출처 Fact 3.6(포함배제 공식, p.93)의 |A ∪ B| = |A| + |B| − |A ∩ B| 를 뺄셈 없이 적은 것이다. 출처는 A ∩ B 의 원소가 두 번 세어진다는 설명만 하고, 같은 쪽에서 A ∩ B = ∅ 이면 덧셈 원리가 된다고 적는다. 이 항목은 원소의 개수를 전단사로 정의한 이 사이트의 뜻으로 세 문장을 증명한다. 조각이 셋 이상인 꼴은 첨수가 붙은 합집합이 필요하므로 진술하지 않는다(첨수가 붙은 유한 합집합은 르베그 적분과 측도론 sequence-of-sets 가 집합열에 대해 정의한다). 첫째 확인 질문(합집합의 개수에서 교집합의 개수를 구하기)은 출처 3.7절 연습문제 1(p.95, 합집합과 교집합의 학생 수에서 한 집합의 학생 수를 구하기)과 같은 발상이다. 반례(공통 원소가 두 번 세어진다)는 출처 p.75 의 '두 조각이 원소를 공유하면 그 원소는 두 번 세어져 |X| < |X₁| + ⋯ + |Xₙ| 이 된다'는 설명과 같은 발상이다."
  - ref: judson-abstract-algebra
    loc: 6.2절, Theorem 6.10 의 증명, p.76
    checked: original
    note: "출처는 라그랑주 정리(Theorem 6.10)의 증명에서 '군 G 는 [G : H] 개의 서로 다른 왼쪽 잉여류로 분할되고 각 왼쪽 잉여류는 원소가 |H| 개이므로 |G| = [G : H]|H|'라고 쓴다. 조각의 원소의 개수를 더해 전체의 개수를 얻는 사실은 그 자리에서 증명 없이 쓰인다. 출처에서 서로소인 합집합의 원소의 개수를 진술한 곳은 찾지 못했다(검색어 'disjoint union' 1건(Theorem 6.4, p.75), 'addition principle' 0건, '|A ∪ B|' 의 꼴 0건, 'number of elements in' 7건(6장 5건, 14장 2건)). 14.2절의 류 방정식(p.171)도 '궤도들이 X 를 분할하므로'라는 말로 같은 사실을 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$A$와 $B$가 [[set|집합]]이라 하자. "원소를 $n$개 갖는다"와 유한집합은 [[finite-set]]의 뜻이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique]]의 뜻이다. 합집합 $A \cup B$, 교집합 $A \cap B$, 차집합 $A - B$는 [[set-operations|집합 연산 항목]]의 것이다. 다음이 성립한다.

1. (서로소인 합집합) $A$와 $B$가 유한집합이고 $A \cap B = \emptyset$이면 $A \cup B$는 유한집합이고 $|A \cup B| = |A| + |B|$이다.
2. (차집합) $A$가 유한집합이고 $B \subseteq A$이면 $A - B$와 $B$는 유한집합이고 $|A - B| = |A| - |B|$이다.
3. (일반적인 합집합) $A$와 $B$가 유한집합이면 $A \cup B$와 $A \cap B$는 유한집합이고 $|A \cup B| + |A \cap B| = |A| + |B|$이다.

여기서 $|A| + |B|$와 $|A| - |B|$는 정수의 덧셈과 뺄셈이다. 증명에서 정수의 계산에 관하여 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z6), (Z7)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $A$ and $B$ be sets. "Has $n$ elements" and finite sets are in the sense of the entry on finite sets, and the number of elements $|A|$ is in the sense of the entry on the uniqueness of the number of elements. The union $A \cup B$, the intersection $A \cap B$ and the difference $A - B$ are those of the entry on set operations. Then the following hold.

1. (Disjoint union) If $A$ and $B$ are finite sets and $A \cap B = \emptyset$, then $A \cup B$ is a finite set and $|A \cup B| = |A| + |B|$.
2. (Difference) If $A$ is a finite set and $B \subseteq A$, then $A - B$ and $B$ are finite sets and $|A - B| = |A| - |B|$.
3. (General union) If $A$ and $B$ are finite sets, then $A \cup B$ and $A \cap B$ are finite sets and $|A \cup B| + |A \cap B| = |A| + |B|$.

Here $|A| + |B|$ and $|A| - |B|$ are addition and subtraction of integers. In the proof we use the accepted laws of integer arithmetic and (Z6), (Z7) from the entry on the well-ordering principle, and the accepted fact that sums and differences of integers are integers.
:::

## 직관

두 반의 학생 수를 더해 전체 학생 수를 얻으려면 두 반에 동시에 속한 학생이 없어야 합니다. 이것이 (1)의 $A \cap B = \emptyset$입니다. 이 사이트에서 "원소가 $n$개"는 $1$부터 $n$까지 번호를 붙이는 전단사가 있다는 뜻이므로, (1)은 $A$에 $1$부터 $|A|$까지 번호를 붙인 뒤 $B$의 원소에 이어서 $|A| + 1$부터 번호를 붙일 수 있다는 말입니다. 증명은 $B$의 원소를 하나씩 더하며 이 일을 합니다.

두 반에 동시에 속한 학생이 있으면 그 학생은 두 반의 학생 수에 한 번씩, 모두 두 번 세어집니다. (3)은 그 초과분이 정확히 $|A \cap B|$라는 말입니다. 비유가 맞지 않는 곳도 있습니다. 학생 수는 늘 셀 수 있지만, 이 항목은 $A$와 $B$가 유한집합이라는 가정이 있어야 개수를 말할 수 있습니다.

(2)는 전체에서 일부를 빼고 남은 것의 개수입니다. $A$를 $B$와 $A - B$의 서로소인 합집합으로 보면 (1)에서 바로 나옵니다.

## 증명

:::idea
(1)은 $|B|$에 대한 귀납법이다. $B$에서 원소 $b$ 하나를 빼서 귀납 가정을 쓰고, [[adding-or-removing-an-element|원소 하나를 더하는]] 결과로 $b$를 되돌린다. (2)와 (3)은 집합을 서로소인 두 조각의 합집합으로 나누어 (1)을 쓴다.
:::

:::hint
정수 $n \ge 0$마다 "원소를 $n$개 갖는 모든 집합 $B$와, $B$와 서로소인 모든 유한집합 $A$에 대하여 $A \cup B$는 원소를 $|A| + n$개 갖는다"를 $P(n)$으로 두세요.
:::

:::hint
(3)에서는 $A \cup B = A \cup (B - A)$와 $B = (B - A) \cup (A \cap B)$가 모두 서로소인 합집합입니다.
:::

:::proof
**(1)의 증명.** 정수 $n \ge 0$에 대하여 명제 $P(n)$을 "원소를 $n$개 갖는 모든 집합 $B$와, $A \cap B = \emptyset$인 모든 유한집합 $A$에 대하여 $A \cup B$는 원소를 $|A| + n$개 갖는다"로 정한다. 여기서 $|A| \ge 0$이고 $n \ge 0$이므로 (Z7)과 (Z6)에 의해 $|A| + n \ge 0$이어서, "원소를 $|A| + n$개 갖는다"는 뜻을 갖는다. 시작점이 $0$인 [[mathematical-induction]]으로 모든 정수 $n \ge 0$에서 $P(n)$이 참임을 보인다.

*기초 단계 ($P(0)$).* $B$가 원소를 $0$개 가지면 [[finite-set]]의 (F2)에 의해 $B = \emptyset$이다. $x \in A \cup \emptyset$인 것은 정확히 $x \in A$이거나 $x \in \emptyset$일 때이고 $\emptyset$에는 원소가 없으므로, $A \cup B = A$이다. $A$는 원소를 $|A| = |A| + 0$개 갖는다.

*귀납 단계.* $k \ge 0$인 정수 $k$에 대하여 $P(k)$가 참이라고 가정한다. $B$가 원소를 $k + 1$개 갖고, $A$가 유한집합이며 $A \cap B = \emptyset$이라 하자. 전단사 $g : \{1, \dots, k+1\} \to B$를 하나 잡는다. (F1)에 의해 $\{1, \dots, k+1\} = \{1, \dots, k\} \cup \{k+1\}$이므로 $k + 1 \in \{1, \dots, k+1\}$이고, $b = g(k+1)$은 $B$의 원소이다. $B' = B - \{b\}$로 두면 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $B'$은 원소를 $k$개 갖는다.

$A \cap B' = \emptyset$이다. $x \in A \cap B'$이면 $x \in A$이고 $x \in B' \subseteq B$이므로 $x \in A \cap B$인데, $A \cap B = \emptyset$이기 때문이다. 귀납 가정 $P(k)$를 $B'$과 $A$에 쓰면 $A \cup B'$은 원소를 $|A| + k$개 갖는다.

$b \notin A \cup B'$이다. $b \in \{b\}$이므로 $b \notin B'$이고, $b \in A$라면 $b \in A \cap B = \emptyset$이 되기 때문이다. 같은 항목의 (a)에 의해 $(A \cup B') \cup \{b\}$는 원소를 $(|A| + k) + 1 = |A| + (k + 1)$개 갖는다.

끝으로 $(A \cup B') \cup \{b\} = A \cup B$이다. 왼쪽의 원소 $x$는 $x \in A$이거나, $x \in B' \subseteq B$이거나, $x = b \in B$이므로 $A \cup B$에 속한다. 거꾸로 $x \in A \cup B$라 하자. $x \in A$이면 왼쪽에 속한다. $x \in B$이고 $x = b$이면 $x \in \{b\}$이고, $x \in B$이고 $x \ne b$이면 $x \in B - \{b\} = B'$이다. 따라서 $A \cup B$는 원소를 $|A| + (k + 1)$개 갖고, $P(k+1)$이 참이다.

귀납법의 원리에 의해 모든 정수 $n \ge 0$에서 $P(n)$이 참이다. 이제 $A$, $B$가 유한집합이고 $A \cap B = \emptyset$이라 하자. $B$는 원소를 $|B|$개 가지므로 $P(|B|)$에 의해 $A \cup B$는 원소를 $|A| + |B|$개 갖는다. 따라서 $A \cup B$는 유한집합이고 [[number-of-elements-is-unique|원소의 개수]]의 정의에 의해 $|A \cup B| = |A| + |B|$이다.

**(2)의 증명.** $A$가 유한집합이므로 원소를 $|A|$개 갖는다. $A - B \subseteq A$이고 $B \subseteq A$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 1에 의해 $A - B$와 $B$는 유한집합이다. $(A - B) \cap B = \emptyset$이다. $x \in A - B$이면 $x \notin B$이기 때문이다. 또 $(A - B) \cup B = A$이다. $x \in A$이면 $x \in B$이거나, $x \notin B$여서 $x \in A - B$이다. 거꾸로 $A - B \subseteq A$이고 $B \subseteq A$이다. (1)에 의해 $|A| = |(A - B) \cup B| = |A - B| + |B|$이다. 양변에서 $|B|$를 빼면 (Z7)에 의해 $|A - B| = |A| - |B|$이다.

**(3)의 증명.** $B - A \subseteq B$이고 $A \cap B \subseteq B$이므로 유한집합의 부분집합의 1에 의해 $B - A$와 $A \cap B$는 유한집합이다.

먼저 $A \cap (B - A) = \emptyset$이고 $A \cup (B - A) = A \cup B$이다. $x \in B - A$이면 $x \notin A$이므로 앞의 것이 성립한다. $x \in A \cup B$이면 $x \in A$이거나, $x \notin A$이고 $x \in B$여서 $x \in B - A$이다. 거꾸로 $B - A \subseteq B$이다. 따라서 (1)에 의해 $A \cup B$는 유한집합이고 $|A \cup B| = |A| + |B - A|$이다.

다음으로 $(B - A) \cap (A \cap B) = \emptyset$이고 $(B - A) \cup (A \cap B) = B$이다. $B - A$의 원소는 $A$에 속하지 않고 $A \cap B$의 원소는 $A$에 속하므로 앞의 것이 성립한다. $x \in B$이면 $x \in A$일 때 $x \in A \cap B$이고, $x \notin A$일 때 $x \in B - A$이다. 거꾸로 $B - A$와 $A \cap B$는 모두 $B$의 부분집합이다. 따라서 (1)에 의해 $|B| = |B - A| + |A \cap B|$이다.

두 등식에서 정수의 계산 법칙에 의해
$$|A \cup B| + |A \cap B| = |A| + \bigl(|B - A| + |A \cap B|\bigr) = |A| + |B|$$
이다. $\blacksquare$
:::

## 예시와 반례

:::example[(1)과 (3)의 계산]
$A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5\}$라 합시다. $A$는 [[finite-set]]의 (F2)에 의해 원소를 $4$개 갖고($A = \{1, \dots, 4\}$), $B$는 $i$를 $i + 2$로 보내는 $\{1, 2, 3\} \to B$의 전단사 $\{(1, 3), (2, 4), (3, 5)\}$로 원소를 $3$개 갖습니다. $A \cup B = \{1, \dots, 5\}$는 원소를 $5$개, $A \cap B = \{3, 4\}$는 $\{(1, 3), (2, 4)\}$로 원소를 $2$개 갖습니다. $5 + 2 = 7 = 4 + 3$이므로 (3)의 등식이 맞습니다. 두 집합이 공통으로 가진 $3$과 $4$가 $|A| + |B|$에서 두 번 세어진 것입니다.

서로소인 경우로 $A$와 $C = \{5, 6\}$을 봅니다. $C$는 $\{(1, 5), (2, 6)\}$으로 원소를 $2$개 갖고 $A \cap C = \emptyset$이며, $A \cup C = \{1, \dots, 6\}$은 원소를 $6 = 4 + 2$개 갖습니다. (1)이 말하는 대로입니다.
:::

:::example[(2)의 계산]
$A = \{\text{가}, \text{나}, \text{다}, \text{라}, \text{마}\}$와 $B = \{\text{나}, \text{라}\}$에서 $B \subseteq A$입니다. $A$는 $\{(1, \text{가}), (2, \text{나}), (3, \text{다}), (4, \text{라}), (5, \text{마})\}$로 원소를 $5$개, $B$는 $\{(1, \text{나}), (2, \text{라})\}$로 원소를 $2$개 가지므로 (2)에 의해 $|A - B| = 5 - 2 = 3$입니다. 실제로 $A - B = \{\text{가}, \text{다}, \text{마}\}$이고, $\{(1, \text{가}), (2, \text{다}), (3, \text{마})\}$가 $\{1, 2, 3\}$에서 이 집합으로의 전단사입니다.
:::

:::counterexample[공통 원소가 있는 두 집합]
$A = \{1, 2\}$, $B = \{2, 3\}$이면 $|A| + |B| = 2 + 2 = 4$이지만 $A \cup B = \{1, 2, 3\}$은 원소를 $3$개 갖습니다([[finite-set]]의 (F2)). $2 \in A \cap B$이므로 (1)의 가정 $A \cap B = \emptyset$이 성립하지 않고, (1)의 등식도 성립하지 않습니다. (3)의 등식은 $A \cap B = \{2\}$가 원소를 $1$개 가지므로 $3 + 1 = 2 + 2$로 맞습니다.
:::

## 확인 질문

:::check[유한집합 $A$, $B$에서 $|A| = 6$, $|B| = 4$이고 $|A \cup B| = 8$이면 $A \cap B$는 원소를 몇 개 갖는가?]
(3)에 의해 $|A \cap B| = |A| + |B| - |A \cup B| = 6 + 4 - 8 = 2$입니다(정수의 등식 $8 + |A \cap B| = 10$의 양변에서 $8$을 뺍니다).
:::

:::check[$B$가 유한집합이고 $A \subseteq B$이며 $|A| = |B|$이면 $B - A$는 무엇인가?]
(2)에 의해 $|B - A| = |B| - |A| = 0$이므로, [[finite-set]]의 (F2)에 의해 $B - A = \emptyset$입니다. 따라서 $B$의 모든 원소가 $A$에 속하고 $A = B$입니다. 이것은 [[subset-of-finite-set|유한집합의 부분집합]]의 2를 다른 길로 얻은 것입니다.
:::
