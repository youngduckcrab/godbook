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
    note: "출처의 정의는 '공집합이 아닌 부분집합들의 집합으로, 그 부분집합 전체의 합집합이 A이고 서로 다른 둘의 교집합이 공집합인 것'이다. 출처의 합집합은 1.8절의 여러 집합에 대한 합집합 표기를 쓰는데, 독자가 아직 배우지 않았으므로 이 사이트는 'A의 모든 원소가 그 부분집합들 가운데 적어도 하나에 속한다'로 풀어 썼다. 합집합이 A라는 조건은 부분집합들이 모두 A의 부분집합이라는 조건과 함께 이 풀어 쓴 조건과 같은 뜻이다. A가 공집합인 경우의 논의, 반례, 확인 질문은 이 사이트에서 새로 만들었다. 첫째 예시({a, b, c, d}의 분할)는 출처 p.216의 예 11.14와 같은 집합을 쓴다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$가 [[set]]일 때, $A$의 **분할**(partition)은 $A$의 부분집합들을 원소로 하는 집합 $\mathcal{S}$로서 다음 세 조건을 모두 만족하는 것이다. 정확히 이 세 조건이 모두 성립할 때 $\mathcal{S}$를 $A$의 분할이라 한다.

1. $\mathcal{S}$의 모든 원소 $X$는 $A$의 [[subset]]이고 공집합이 아니다.
2. $A$의 모든 원소 $x$에 대하여, $x \in X$인 $X \in \mathcal{S}$가 적어도 하나 있다.
3. $\mathcal{S}$의 모든 원소 $X, Y$에 대하여, $X \ne Y$이면 $X \cap Y = \emptyset$이다. 여기서 $\cap$는 [[set-operations]]의 교집합이다.

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

주의할 점은 분할이 **집합들의 집합**이라는 것입니다. $\{\{1, 2\}, \{3\}\}$은 $\{1, 2, 3\}$의 분할이지만 $\{1, 2, 3\}$ 자신이나 $\{1, 2\}$는 분할이 아닙니다.

## 예시와 반례

:::example
$A = \{a, b, c, d\}$일 때 $\{\{a, b\}, \{c\}, \{d\}\}$는 분할입니다. 각 원소가 공집합이 아닌 부분집합이고, $a, b, c, d$ 모두 어느 조각엔가 들어 있으며, 서로 다른 두 조각의 교집합이 공집합이기 때문입니다. $\{\{a, b, c, d\}\}$(조각 하나)와 $\{\{a\}, \{b\}, \{c\}, \{d\}\}$(원소마다 한 조각)도 분할입니다.
:::

:::example[공집합의 분할]
$A = \emptyset$이면 조건 1에서 $\mathcal{S}$에 원소가 있다면 그것은 $\emptyset$의 공집합이 아닌 부분집합이어야 하는데 그런 것이 없으므로 $\mathcal{S} = \emptyset$이어야 합니다. $\mathcal{S} = \emptyset$이면 세 조건은 모두 "모든 원소에 대하여"로 시작하는데 원소가 없어 깨지는 경우가 없으므로 참입니다. 따라서 $\emptyset$의 분할은 $\emptyset$ 하나뿐입니다. $\{\emptyset\}$은 원소 $\emptyset$이 공집합이므로 조건 1에 어긋나 분할이 아닙니다.
:::

:::counterexample[조건 3이 깨짐]
$A = \{a, b, c, d\}$, $\mathcal{S} = \{\{a, b\}, \{b, c\}, \{d\}\}$는 분할이 아닙니다. $\{a, b\} \ne \{b, c\}$이지만 $\{a, b\} \cap \{b, c\} = \{b\} \ne \emptyset$입니다.
:::

:::counterexample[조건 2가 깨짐]
$A = \{a, b, c, d\}$, $\mathcal{S} = \{\{a\}, \{b\}, \{c\}\}$는 분할이 아닙니다. $d \in A$이지만 $d$를 원소로 갖는 $X \in \mathcal{S}$가 없습니다.
:::

:::counterexample[조건 1이 깨짐]
$A = \{c, d\}$, $\mathcal{S} = \{\emptyset, \{c, d\}\}$는 분할이 아닙니다. $\emptyset \in \mathcal{S}$이지만 $\emptyset$은 공집합입니다. 조건 2와 3은 성립하는데도 조건 1 때문에 분할이 되지 못합니다.
:::

## 확인 질문

:::check[$A = \{1, 2\}$의 분할을 모두 구하라.]
$\{\{1, 2\}\}$와 $\{\{1\}, \{2\}\}$입니다. $\mathcal{S}$가 분할이면 $1$을 포함하는 조각 $X$가 있습니다. $2 \in X$이면 $X = \{1, 2\}$이고, 다른 조각은 공집합이 아닌 $A$의 부분집합이어서 $1$이나 $2$를 포함하므로 $X$와 겹치게 되어 $\mathcal{S} = \{\{1, 2\}\}$입니다. $2 \notin X$이면 $X = \{1\}$이고, $2$를 포함하는 조각은 $\{2\}$ 하나뿐이므로 $\mathcal{S} = \{\{1\}, \{2\}\}$입니다.
:::

:::check[$\{\{1, 2\}, \{2, 3\}\}$은 $\{1, 2, 3\}$의 분할인가?]
아닙니다. $2$가 두 조각에 모두 들어 있어 $\{1, 2\} \cap \{2, 3\} = \{2\} \ne \emptyset$이므로 조건 3이 깨집니다.
:::
