---
title: 분할
title_en: Partition
aliases: [partition, 집합의 분할]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 집합 A의 분할은 공집합이 아닌 부분집합들의 집합으로, A의 모든 원소가 그 부분집합 중 적어도 하나에 속하고 서로 다른 둘은 겹치지 않는 것이다.
requires: [set, subset, set-operations, quantifiers]
sources:
  - ref: hammack-book-of-proof
    loc: 11.4절 Equivalence Classes and Partitions, Definition 11.5, p.216 (예 11.14, p.216)
    checked: original
    note: "출처의 정의는 '공집합이 아닌 부분집합들의 집합으로, 그 부분집합 전체의 합집합이 A이고 서로 다른 둘의 교집합이 공집합인 것'이다. 출처의 합집합은 1.8절의 여러 집합에 대한 합집합 표기를 쓰는데, 독자가 아직 배우지 않았으므로 이 사이트는 'A의 모든 원소가 그 부분집합들 가운데 적어도 하나에 속한다'로 풀어 썼다. 조각이 모두 A의 부분집합이라는 조건 1과 함께 보면 이 조건은 합집합이 A라는 조건과 같은 뜻이다. 예시, 반례, 확인 질문은 새로 만들었다. 출처의 예 11.14(집합 {a, b, c, d}), 예 11.15({-1, 1, 2, 3, 4})와 다른 집합 {1, 2, 3, 4, 5}를 썼고, A가 공집합인 경우의 논의도 이 사이트에서 덧붙였다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
$A$가 [[set]]일 때, $A$의 **분할**(partition)은 $A$의 부분집합들을 원소로 하는 집합 $\mathcal{S}$로서 다음 세 조건을 모두 만족하는 것이다. 정확히 이 세 조건이 모두 성립할 때 $\mathcal{S}$를 $A$의 분할이라 한다.

1. $\mathcal{S}$의 모든 원소 $X$는 $A$의 [[subset]]이고 공집합이 아니다.
2. $A$의 모든 원소 $x$에 대하여, $x \in X$인 $X \in \mathcal{S}$가 적어도 하나 있다.
3. $\mathcal{S}$의 모든 원소 $X, Y$에 대하여, $X \ne Y$이면 $X \cap Y = \emptyset$이다. 여기서 $\cap$는 [[set-operations|집합 연산 항목]]의 교집합이다.

$A = \emptyset$이면 조건 1에 맞는 $X$가 없으므로 $\mathcal{S} = \emptyset$ 하나만 분할이 될 수 있고, 이 $\mathcal{S}$는 세 조건을 모두 만족하므로 $\emptyset$의 분할이다.
:::

:::english
Let $A$ be a set. A **partition** of $A$ is a set $\mathcal{S}$ of subsets of $A$ satisfying all of the following three conditions; $\mathcal{S}$ is a partition of $A$ exactly when all three hold.

1. Every element $X$ of $\mathcal{S}$ is a subset of $A$ and is non-empty.
2. For every element $x$ of $A$, there is at least one $X \in \mathcal{S}$ with $x \in X$.
3. For all elements $X, Y$ of $\mathcal{S}$, if $X \ne Y$ then $X \cap Y = \emptyset$.

If $A = \emptyset$, no $X$ satisfies condition 1, so only $\mathcal{S} = \emptyset$ can be a partition, and this $\mathcal{S}$ satisfies all three conditions; hence it is a partition of $\emptyset$.
:::

## 직관

분할은 $A$를 조각으로 나누는 방법입니다. 케이크를 자르는 것에 비유하면, 조각이 빈 조각이면 안 되고(조건 1), 케이크 어느 부분도 빠뜨리지 않아야 하며(조건 2), 두 조각이 겹쳐서는 안 됩니다(조건 3). 이 비유에서 조각 하나가 $\mathcal{S}$의 원소 하나에 해당합니다.

조건 2와 3을 합치면 $A$의 모든 원소가 $\mathcal{S}$의 원소 **정확히 하나**에 들어갑니다. 조건 2가 적어도 하나를 보장하고, $x$가 서로 다른 두 $X, Y \in \mathcal{S}$에 모두 들어 있다면 $x \in X \cap Y$이므로 조건 3에 어긋나기 때문입니다.

주의할 점은 분할이 **집합들의 집합**이라는 것입니다. $\{\{1, 2\}, \{3\}\}$은 $\{1, 2, 3\}$의 분할이지만 $\{1, 2, 3\}$ 자신이나 $\{1, 2\}$는 분할이 아닙니다. 이 둘의 원소는 수이지 $\{1, 2, 3\}$의 부분집합이 아니기 때문입니다.

## 예시와 반례

:::example
$A = \{1, 2, 3, 4, 5\}$일 때 $\{\{1, 2, 3\}, \{4, 5\}\}$는 분할입니다. 두 조각 모두 공집합이 아닌 $A$의 부분집합이고, $1$부터 $5$까지 모두 어느 조각엔가 들어 있으며, 서로 다른 두 조각 $\{1, 2, 3\}$과 $\{4, 5\}$의 교집합이 공집합이기 때문입니다.

$\{\{1, 5\}, \{2\}, \{3, 4\}\}$도 분할입니다. 조각 $\{1, 5\}$, $\{2\}$, $\{3, 4\}$ 가운데 어느 둘의 교집합도 공집합이고, 세 조각의 원소를 모으면 $1, 5, 2, 3, 4$로 $A$의 모든 원소가 들어 있습니다. 조각이 하나뿐인 $\{\{1, 2, 3, 4, 5\}\}$도 분할입니다. 서로 다른 두 조각을 고를 일이 없어 조건 3은 공허하게 성립합니다.
:::

:::example[공집합의 분할]
$A = \emptyset$이면 조건 1에서 $\mathcal{S}$에 원소가 있다면 그것은 $\emptyset$의 공집합이 아닌 부분집합이어야 하는데 그런 것이 없으므로 $\mathcal{S} = \emptyset$이어야 합니다. $\mathcal{S} = \emptyset$이면 세 조건은 모두 "모든 원소에 대하여"로 시작하는데 원소가 없어 깨지는 경우가 없으므로 참입니다. 따라서 $\emptyset$의 분할은 $\emptyset$ 하나뿐입니다. $\{\emptyset\}$은 원소 $\emptyset$이 공집합이므로 조건 1에 어긋나 분할이 아닙니다.
:::

:::counterexample[조건 3이 깨짐]
$A = \{1, 2, 3, 4, 5\}$, $\mathcal{S} = \{\{1, 2\}, \{2, 3\}, \{4, 5\}\}$는 분할이 아닙니다. 모든 원소가 어느 조각엔가 들어 있지만, $\{1, 2\} \ne \{2, 3\}$인데 $\{1, 2\} \cap \{2, 3\} = \{2\} \ne \emptyset$입니다.
:::

:::counterexample[조건 2가 깨짐]
$A = \{1, 2, 3, 4, 5\}$, $\mathcal{S} = \{\{1, 2\}, \{3, 4\}\}$는 분할이 아닙니다. $5 \in A$이지만 $5$를 원소로 갖는 $X \in \mathcal{S}$가 없습니다.
:::

:::counterexample[조건 1이 깨짐]
$A = \{1, 2, 3, 4, 5\}$, $\mathcal{S} = \{\emptyset, \{1, 2, 3\}, \{4, 5\}\}$는 분할이 아닙니다. $\emptyset \in \mathcal{S}$인데 $\emptyset$은 공집합입니다. 조건 2와 3은 성립하는데도 조건 1 때문에 분할이 되지 못합니다.
:::

## 확인 질문

:::check[$\{1, 2, 3\}$의 분할 가운데 $\{1\}$을 조각으로 갖는 것을 모두 구하라.]
$\{\{1\}, \{2, 3\}\}$와 $\{\{1\}, \{2\}, \{3\}\}$입니다. $\{1\}$이 아닌 다른 조각은 조건 3에 의해 $\{1\}$과 겹치지 않으므로 $1$을 포함하지 않고, 공집합이 아닌 $\{1, 2, 3\}$의 부분집합이므로 $\{2\}$, $\{3\}$, $\{2, 3\}$ 중 하나입니다. 이 조각들은 조건 2에 의해 $2$와 $3$을 모두 덮고 서로 겹치지 않아야 하므로, $\{2, 3\}$ 하나이거나 $\{2\}$와 $\{3\}$ 둘입니다. 어느 쪽이든 세 조건이 성립합니다.
:::

:::check[$\{\{1, 2\}, \{2, 3\}\}$은 $\{1, 2, 3\}$의 분할인가?]
아닙니다. $2$가 두 조각에 모두 들어 있어 $\{1, 2\} \cap \{2, 3\} = \{2\} \ne \emptyset$이므로 조건 3이 깨집니다.
:::
