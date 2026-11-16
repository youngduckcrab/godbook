---
title: 합집합, 교집합, 차집합
title_en: Union, Intersection, Difference
aliases: [union, intersection, set difference, 합집합, 교집합, 차집합]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 두 집합으로 새 집합을 만드는 세 가지 기본 연산.
requires: [set, subset, logical-connectives]
sources:
  - ref: hammack-book-of-proof
    loc: 1.5절 Union, Intersection, Difference, Definition 1.5, p.18
    checked: original
    note: "출처는 차집합을 A − B 로 쓴다. A ∖ B 로 쓰는 책도 많다. '서로소'라는 용어는 이 출처에 나오지 않으며 널리 쓰이는 이름이어서 함께 적었다."
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 선행 항목과 표현 보완."
added: 2026-11-16
---

:::statement
$A$와 $B$가 [[set]]일 때

- **합집합**(union): $A \cup B = \{x : x \in A \text{ 또는 } x \in B\}$
- **교집합**(intersection): $A \cap B = \{x : x \in A \text{ 그리고 } x \in B\}$
- **차집합**(difference): $A - B = \{x : x \in A \text{ 그리고 } x \notin B\}$
:::

## 직관

수에 덧셈과 곱셈이 있듯이 집합에도 연산이 있습니다.

- $A \cup B$는 $A$나 $B$ 중 **적어도 한 곳**에 들어 있는 것 전부입니다. 여기서 "또는"은 [[logical-connectives]]에서 배운 수학의 "또는"이므로, 양쪽에 다 들어 있는 것도 포함합니다.
- $A \cap B$는 $A$와 $B$ **양쪽 모두**에 들어 있는 것 전부입니다.
- $A - B$는 $A$에는 있지만 $B$에는 **없는** 것 전부입니다.

세 정의가 각각 "또는", "그리고", "그리고 … 아니다"로 쓰여 있다는 점을 눈여겨보세요. 집합의 연산은 원소에 관한 명제의 논리 연결사를 그대로 옮긴 것입니다. 그래서 논리 법칙마다 대응하는 집합 법칙이 있습니다.

## 예시와 반례

:::example
$A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5\}$이면

- $A \cup B = \{1, 2, 3, 4, 5\}$
- $A \cap B = \{3, 4\}$
- $A - B = \{1, 2\}$
- $B - A = \{5\}$
:::

:::counterexample
합집합과 교집합은 순서를 바꾸어도 같지만 차집합은 일반적으로 그렇지 않습니다. 위 예에서 $A - B = \{1, 2\}$이고 $B - A = \{5\}$로 서로 다릅니다.
:::

:::example[공통 원소가 없는 경우]
$\{1, 2\} \cap \{3, 4\} = \emptyset$ 입니다. 교집합이 공집합인 두 집합을 **서로소**(disjoint)라고 부릅니다.
:::

## 확인 질문

:::check[$A \cap B \subseteq A$ 는 항상 참인가?]
참입니다. $x \in A \cap B$이면 정의에 의해 $x \in A$이고 $x \in B$이므로, 특히 $x \in A$입니다.
:::

:::check[$A - B = A$ 가 되는 것은 언제인가?]
$A$와 $B$에 공통 원소가 없을 때, 곧 $A \cap B = \emptyset$일 때입니다. 그때는 $A$의 어떤 원소도 $B$에 들어 있지 않으므로 빼낼 것이 없습니다. 거꾸로 공통 원소 $x$가 있으면 $x \in A$이지만 $x \notin A - B$이므로 $A - B \ne A$입니다.
:::
