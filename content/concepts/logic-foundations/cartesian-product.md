---
title: 순서쌍과 곱집합
title_en: Ordered Pair and Cartesian Product
aliases: [순서쌍, 곱집합, 데카르트 곱, ordered pair, Cartesian product]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 순서가 구별되는 두 대상의 목록이 순서쌍이고, 첫째 성분이 A에서 둘째 성분이 B에서 온 순서쌍 전체의 집합이 곱집합 A × B이다.
requires: [set]
sources:
  - ref: hammack-book-of-proof
    loc: 1.2절 The Cartesian Product, Definition 1.1, Definition 1.2, p.8 (A² 표기는 p.10)
    checked: original
    note: "출처는 순서쌍을 '괄호로 싸고 쉼표로 구분한 두 대상의 목록'이라 정의하고 (2, 4)와 (4, 2)가 다르다는 예로 순서가 중요함을 보인다. '두 순서쌍이 같을 필요충분조건은 성분이 차례로 같은 것'이라는 문장은 출처에 그대로 있지 않고 이 사이트에서 순서쌍의 뜻을 풀어 쓴 것이다. 직관의 좌표 비유와 '성분은 수일 필요가 없다'는 설명은 순서쌍이 평면의 점을 나타내는 데 쓰이지만 성분이 수일 필요는 없다는 출처 p.8의 문단을 따른 것이다. 첫째 예시(원소 3개와 2개인 집합의 곱)는 출처 p.8–9의 {k, l, m} × {q, r} 예와 Fact 1.1(p.9)을 바탕으로 기호만 바꾼 것이다. 공집합과의 곱이 공집합이라는 설명은 이 사이트에서 덧붙였다. 나머지 예시와 반례는 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
두 대상 $x$, $y$를 이 차례로 늘어놓고 괄호로 묶은 $(x, y)$를 **순서쌍**(ordered pair)이라 한다. $x$를 첫째 성분, $y$를 둘째 성분이라 한다. 두 순서쌍 $(x, y)$와 $(x', y')$이 같다는 것은 $x = x'$이고 $y = y'$라는 뜻이다. 특히 $x \neq y$이면 $(x, y) \neq (y, x)$이다.

두 [[set]] $A$, $B$의 **곱집합**(Cartesian product) $A \times B$는 첫째 성분이 $A$의 원소이고 둘째 성분이 $B$의 원소인 순서쌍 전체의 집합이다.
$$A \times B = \{(a, b) : a \in A,\ b \in B\}$$
따라서 임의의 대상 $x$, $y$에 대하여 $(x, y) \in A \times B$가 성립하는 것은 정확히 $x \in A$이고 $y \in B$일 때이다. $A \times A$는 $A^2$으로 쓰기도 한다.
:::

:::english
An **ordered pair** is a list $(x, y)$ of two objects $x$ and $y$ in this order, enclosed in parentheses; $x$ is its first coordinate and $y$ its second. Two ordered pairs $(x, y)$ and $(x', y')$ are equal exactly when $x = x'$ and $y = y'$. In particular, if $x \neq y$ then $(x, y) \neq (y, x)$.

The **Cartesian product** $A \times B$ of two sets $A$ and $B$ is the set of all ordered pairs whose first coordinate is an element of $A$ and whose second coordinate is an element of $B$.
$$A \times B = \{(a, b) : a \in A,\ b \in B\}$$
Hence, for any objects $x$ and $y$, we have $(x, y) \in A \times B$ exactly when $x \in A$ and $y \in B$. The product $A \times A$ is also written $A^2$.
:::

## 직관

집합 $\{2, 4\}$는 $\{4, 2\}$와 같지만, 순서쌍 $(2, 4)$는 $(4, 2)$와 다릅니다. 지도의 좌표 $(\text{가로}, \text{세로})$를 생각하면 됩니다. 가로 $2$, 세로 $4$인 점과 가로 $4$, 세로 $2$인 점은 다른 점입니다. 곱집합은 가로 눈금을 $A$에서, 세로 눈금을 $B$에서 고르는 모든 점의 모임과 같습니다. 이 비유에서 $A \times B$의 점 하나는 "$A$의 원소 하나와 $B$의 원소 하나를 이 차례로 고른 결과"에 해당합니다.

비유가 맞지 않는 곳도 있습니다. 순서쌍의 성분은 수일 필요가 없고, 집합이나 순서쌍 자체도 될 수 있습니다.

## 예시와 반례

:::example
$A = \{1, 2, 3\}$, $B = \{p, q\}$이면
$$A \times B = \{(1, p), (1, q), (2, p), (2, q), (3, p), (3, q)\}$$
입니다. 첫째 성분은 $A$의 원소 $3$개 중에서, 둘째 성분은 $B$의 원소 $2$개 중에서 고르므로 순서쌍이 $3 \cdot 2 = 6$개 생깁니다.
:::

:::example[$A \times A$]
$A = \{1, 2\}$이면 $A \times A = \{(1, 1), (1, 2), (2, 1), (2, 2)\}$입니다. 두 성분이 같은 $(1, 1)$도 순서쌍입니다.
:::

:::example[공집합과의 곱]
$A \times \emptyset$에는 원소가 없습니다. $(a, b) \in A \times \emptyset$이려면 $b \in \emptyset$이어야 하는데 그런 $b$는 없기 때문입니다. 따라서 모든 집합 $A$에 대하여 $A \times \emptyset = \emptyset$입니다.
:::

:::counterexample[곱집합은 순서를 바꾸면 달라진다]
$A = \{1, 2\}$, $B = \{3\}$이면 $A \times B = \{(1, 3), (2, 3)\}$이고 $B \times A = \{(3, 1), (3, 2)\}$입니다. $(1, 3) \in A \times B$이지만 $(1, 3) \notin B \times A$이므로 두 집합은 같지 않습니다. $A \times B = B \times A$가 항상 성립한다고 생각하면 틀립니다.
:::

:::counterexample[순서쌍과 집합을 혼동하기]
$\{1, 2\} = \{2, 1\}$이지만 $(1, 2) \neq (2, 1)$입니다. 집합은 원소가 무엇인지만 보고, 순서쌍은 어느 성분이 앞에 있는지도 봅니다.
:::

## 확인 질문

:::check[$A = \{0, 1\}$일 때 $A \times A$의 원소를 모두 적어라.]
$(0, 0)$, $(0, 1)$, $(1, 0)$, $(1, 1)$입니다. 첫째 성분 $0, 1$ 각각에 대해 둘째 성분을 $0, 1$ 중에서 고르면 모두 네 개입니다.
:::

:::check[$(2, 5) \in \{1, 2, 3\} \times \{4, 5\}$인가? $(5, 2)$는?]
$(2, 5)$는 속합니다. $2 \in \{1, 2, 3\}$이고 $5 \in \{4, 5\}$이기 때문입니다. $(5, 2)$는 속하지 않습니다. 첫째 성분 $5$가 $\{1, 2, 3\}$의 원소가 아니기 때문입니다.
:::
