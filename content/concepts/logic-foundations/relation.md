---
title: 관계
title_en: Relation
aliases: [이항관계, binary relation, 집합 위의 관계, relation on a set]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 집합 A 위의 관계는 곱집합 A × A의 부분집합이며, (x, y)가 그 안에 있을 때 x R y라 쓴다.
requires: [set, subset, cartesian-product]
sources:
  - ref: hammack-book-of-proof
    loc: 11.1절 Relations, Definition 11.1, p.202 (도입 예는 pp.201–202)
    checked: original
    note: "출처의 도입 부분(pp.201–202)은 집합 {1, 2, 3, 4, 5} 위의 <를 순서쌍의 집합으로 적어 보이는 것으로 시작한다. 첫째 예시(원소 3개 집합 위의 <)는 그 발상을 작은 집합에 옮긴 것이다. 예시 '같음'을 {(1, 1), (2, 2), (3, 3)}으로 적은 것은 출처 Example 11.6(p.203, ℝ 위의 =)과, 'ℤ 위의 ≤'를 조건제시법으로 적은 예시는 Example 11.5(p.203, ℤ 위의 >)와, 둘째 확인 질문({1, 2, 3} 위의 ≥)은 Example 11.1(p.202, {1, 2, 3, 4} 위의 ≥)과 같은 발상이다. 공집합이 관계라는 점은 출처 11.1절 연습문제 8(p.204)에도 나온다. 'A × A도 관계'라는 말과 '이항관계'라는 별칭은 출처에 나오지 않는다. 나머지 예시와 반례는 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
$A$가 [[set]]일 때, $A$ **위의 관계**(relation on $A$)는 [[cartesian-product|곱집합]] $A \times A$의 [[subset]] $R$, 곧 $R \subseteq A \times A$이다.

$x, y \in A$에 대하여, $(x, y) \in R$인 것을 $x R y$로 쓰고 "$x$는 $y$와 $R$의 관계에 있다"고 읽는다. $(x, y) \notin R$인 것은 $x \not R\, y$로 쓴다. 따라서 $x, y \in A$에 대하여 $x R y$가 성립하는 것은 정확히 $(x, y) \in R$일 때이다.
:::

:::english
Let $A$ be a set. A **relation on** $A$ is any subset $R$ of the Cartesian product $A \times A$.

For $x, y \in A$, we write $x R y$ to mean $(x, y) \in R$, and read it "$x$ is related to $y$ by $R$". We write $x \not R\, y$ to mean $(x, y) \notin R$. Thus, for $x, y \in A$, the statement $x R y$ holds exactly when $(x, y) \in R$.
:::

## 직관

"$3 < 5$는 참이고 $5 < 3$은 거짓이다"처럼, 두 대상 사이의 관계는 순서를 정한 두 대상에 대해 참이거나 거짓인 문장입니다. 어떤 관계든 "참이 되는 순서쌍을 전부 모은 집합"을 알면 그 관계를 완전히 알 수 있습니다. 정의는 이 점을 그대로 받아, 관계를 그 집합과 같은 것으로 삼습니다. "누가 누구에게 노트를 빌려 주었는가"를 (빌려 준 사람, 빌린 사람) 쌍으로 전부 적어 둔 명단이 곧 그 관계라고 생각하면 됩니다.

이 비유에서 명단에 적힌 쌍은 $x R y$가 참인 경우에 해당하고, 적히지 않은 쌍은 거짓인 경우에 해당합니다. 다만 명단은 순서쌍으로 적으므로 $(x, y)$가 있다고 해서 $(y, x)$도 있는 것은 아닙니다.

## 예시와 반례

:::example[작은 집합 위의 $<$]
$A = \{1, 2, 3\}$ 위에서 "작다"를 순서쌍의 집합으로 적으면
$$R = \{(1, 2), (1, 3), (2, 3)\}$$
입니다. $R \subseteq A \times A$이므로 $R$은 $A$ 위의 관계입니다. $1 R 3$은 성립하고, $3 R 1$과 $2 R 2$는 성립하지 않습니다.
:::

:::example[같음과 극단적인 관계]
$A = \{1, 2, 3\}$ 위에서 "같다"는 $\{(1, 1), (2, 2), (3, 3)\}$입니다. 아무 쌍도 포함하지 않는 $\emptyset$과 모든 쌍을 포함하는 $A \times A$도 $A$ 위의 관계입니다. $R = \emptyset$이면 어떤 $x, y \in A$에 대해서도 $x R y$가 성립하지 않고, $R = A \times A$이면 모든 $x, y \in A$에 대해 $x R y$가 성립합니다.
:::

:::example[무한집합 위의 관계]
정수 전체의 집합 $\mathbb{Z}$ 위에서 $\le$는 $\{(x, y) \in \mathbb{Z} \times \mathbb{Z} : x \le y\}$라는 집합입니다. 원소를 하나씩 적을 수는 없지만 조건제시법으로 쓸 수 있습니다.
:::

:::counterexample[관계가 아닌 집합]
$A = \{1, 2, 3\}$일 때 $S = \{(1, 2), (2, 5)\}$는 $A$ 위의 관계가 아닙니다. $(2, 5)$의 둘째 성분 $5$가 $A$의 원소가 아니므로 $(2, 5) \notin A \times A$이고, 따라서 $S \not\subseteq A \times A$입니다. $S$는 $\{1, 2, 5\}$ 위에서는 관계가 됩니다. 같은 순서쌍의 집합도 어느 집합 위에서 보느냐에 따라 관계가 되기도 하고 안 되기도 합니다. 그래서 관계를 말할 때는 어느 집합 위의 관계인지 밝힙니다.
:::

:::counterexample[$x R y$와 $y R x$는 다르다]
위의 $R = \{(1, 2), (1, 3), (2, 3)\}$에서 $1 R 2$는 성립하지만 $(2, 1) \notin R$이므로 $2 R 1$은 성립하지 않습니다. 모든 관계에서 $x R y$이면 $y R x$도 성립하는 것은 아닙니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$, $R = \{(1, 2), (3, 1)\}$일 때 $2 R 1$과 $3 R 1$은 각각 성립하는가?]
$(2, 1) \notin R$이므로 $2 R 1$은 성립하지 않습니다. $(3, 1) \in R$이므로 $3 R 1$은 성립합니다. 성분의 순서를 정확히 읽어야 합니다.
:::

:::check[$A = \{1, 2, 3\}$ 위에서 "$x \ge y$"인 쌍 전체를 순서쌍의 집합으로 적어라.]
$x = 1$이면 $y = 1$, $x = 2$이면 $y = 1, 2$, $x = 3$이면 $y = 1, 2, 3$이므로
$\{(1, 1), (2, 1), (2, 2), (3, 1), (3, 2), (3, 3)\}$입니다.
:::
