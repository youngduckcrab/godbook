---
title: 동치류 전체는 분할을 이룬다
title_en: Equivalence Classes Form a Partition
aliases: [동치류의 분할, equivalence classes partition the set]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 동치관계 R이 집합 A 위에 주어지면, 동치류 [a](a ∈ A) 전체의 집합은 A의 분할이다.
requires: [equivalence-relation, equivalence-class, properties-of-relations, partition, equivalence-classes-equal-iff-related, contrapositive-law, set, subset, set-operations]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 11.4절 Equivalence Classes and Partitions, Theorem 11.2, pp.216–217 (진술은 p.216, 증명은 pp.216–217)
    checked: original
    note: "출처의 증명과 같은 구성이다. 합집합이 A임을 보이는 부분과 서로 다른 동치류가 겹치지 않음을 대우로 보이는 부분으로 나눈다. 출처는 합집합 표기를 쓰고 이 사이트는 분할의 조건을 원소로 풀어 쓰므로 그에 맞게 다시 적었다. 출처는 공집합이 아닌 동치류라는 점을 따로 쓰지 않는데, 분할의 정의에 그 조건이 있으므로 이 사이트에서 증명에 덧붙였다. A가 공집합인 경우에 대한 설명과 예시, 반례, 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$R$이 집합 $A$ 위의 [[equivalence-relation]]이라 하자. $R$의 [[equivalence-class]] 전체의 집합
$$\mathcal{C} = \{[a] : a \in A\}$$
는 $A$의 [[partition]]이다. 곧 다음이 성립한다.

1. $\mathcal{C}$의 모든 원소는 $A$의 공집합이 아닌 부분집합이다.
2. $A$의 모든 원소 $x$는 $\mathcal{C}$의 어떤 원소에 속한다.
3. $\mathcal{C}$의 서로 다른 두 원소는 공통 원소가 없다.

$A = \emptyset$이면 $\mathcal{C} = \emptyset$이고, 이는 $\emptyset$의 분할이다.
:::

:::english
Let $R$ be an equivalence relation on a set $A$. The set of all equivalence classes of $R$,
$$\mathcal{C} = \{[a] : a \in A\},$$
is a partition of $A$. That is, the following hold.

1. Every element of $\mathcal{C}$ is a non-empty subset of $A$.
2. Every element $x$ of $A$ belongs to some element of $\mathcal{C}$.
3. Any two different elements of $\mathcal{C}$ have no element in common.

If $A = \emptyset$, then $\mathcal{C} = \emptyset$, which is a partition of $\emptyset$.
:::

## 직관

"같은 반"으로 학생들을 모으면, 모든 학생은 정확히 한 반에 들어가고 어느 반도 비어 있지 않습니다. 이 정리는 그 사실이 모든 동치관계에서 성립한다고 말합니다. 동치관계는 같은 것으로 보는 기준이고, 그 기준으로 $A$의 원소들을 나누면 바구니들(동치류)이 겹치지 않게 $A$를 덮습니다.

주의할 점은 $\{[a] : a \in A\}$에서 서로 다른 $a$가 같은 동치류를 줄 수 있다는 것입니다. 집합 $\mathcal{C}$에서는 같은 집합이 한 번만 원소로 세어지므로, 예를 들어 $[1] = [2]$이면 $\mathcal{C}$에는 이 집합이 하나만 들어 있습니다.

## 증명

:::idea
분할의 세 조건을 하나씩 확인한다. 비어 있지 않음과 모든 원소가 어딘가에 속함은 반사성에서 나오고, 서로 다른 동치류가 겹치지 않음은 겹친다고 가정하면 [[equivalence-classes-equal-iff-related]]에 의해 두 동치류가 같아짐을 보여서 얻는다.
:::

:::hint
$a \in [a]$인지 먼저 확인해 보세요. 조건 1과 2가 한꺼번에 풀립니다.
:::

:::hint
조건 3은 대우로 보입니다. $[a] \cap [b]$에 원소 $c$가 있다고 가정하고 $a R b$를 이끌어내세요.
:::

:::proof
$[a]$의 정의에 의해 $A$의 원소 $x$에 대하여 $x \in [a]$인 것은 정확히 $x R a$일 때이다.

**조건 1.** $\mathcal{C}$의 원소는 어떤 $a \in A$에 대한 $[a]$이다. $[a] = \{x \in A : x R a\}$이므로 $[a]$는 $A$의 부분집합이다. $R$은 반사적이므로 $a R a$이고, $a \in A$이므로 $a \in [a]$이다. 따라서 $[a]$는 공집합이 아니다.

**조건 2.** $x \in A$라 하자. $R$이 반사적이므로 $x R x$이고, $x \in A$이므로 $x \in [x]$이다. $[x] \in \mathcal{C}$이므로 $x$는 $\mathcal{C}$의 원소 $[x]$에 속한다.

**조건 3.** $X, Y$가 $\mathcal{C}$의 서로 다른 원소라 하자. $a, b \in A$가 있어 $X = [a]$, $Y = [b]$이다. $X \ne Y$이므로 $[a] \ne [b]$이다. $[a] \cap [b] = \emptyset$임을 보이기 위해 대우를 증명한다. 곧 $[a] \cap [b] \ne \emptyset$이면 $[a] = [b]$임을 보인다.

$[a] \cap [b] \ne \emptyset$이라 하자. 교집합의 원소 $c$가 있다. $[a]$와 $[b]$는 $A$의 부분집합이므로 $c \in A$이다. $c \in [a]$이므로 $c R a$이고, $c \in [b]$이므로 $c R b$이다. $R$은 대칭적이고 $c, a \in A$이므로 $c R a$에서 $a R c$이다. $a R c$이고 $c R b$이며 $R$은 추이적이므로 $a R b$이다. [[equivalence-classes-equal-iff-related]]의 둘째 문장에 의해 $[a] = [b]$이다.

이로써 대우가 증명되었으므로, $[a] \ne [b]$이면 $[a] \cap [b] = \emptyset$이다. 곧 $X \cap Y = \emptyset$이다.

세 조건이 모두 성립하므로 $\mathcal{C}$는 $A$의 분할이다. $A = \emptyset$이면 $a \in A$가 없으므로 $\mathcal{C} = \emptyset$이다. 이때 조건 1, 2, 3은 모두 "모든 원소에 대하여" 꼴이고 $\mathcal{C}$와 $A$에 원소가 없어 깨지는 경우가 없으므로 성립하며, 따라서 $\emptyset$의 분할이다.
:::

## 예시와 반례

:::example
$A = \{1, 2, 3, 4\}$, $S = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1)\}$의 동치류는 $[1] = [2] = \{1, 2\}$, $[3] = \{3\}$, $[4] = \{4\}$입니다. 따라서 $\{[a] : a \in A\} = \{\{1, 2\}, \{3\}, \{4\}\}$이고, 이는 $A$의 분할입니다.
:::

:::example
$\mathbb{Z}$ 위의 "$x R y$는 $x^2 = y^2$을 뜻한다"의 동치류는 $[0] = \{0\}$이고, 양의 정수 $n$마다 $[n] = [-n] = \{n, -n\}$입니다. 이 집합들은 서로 겹치지 않고 모든 정수를 덮습니다.
:::

:::counterexample[추이성이 없으면 겹친다]
$A = \{1, 2, 3\}$ 위의 $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (2, 3), (3, 2)\}$는 반사적이고 대칭적이지만 추이적이지 않습니다. 같은 식으로 집합 $\{x \in A : x R a\}$를 만들어 보면 $a = 1$일 때 $\{1, 2\}$, $a = 2$일 때 $\{1, 2, 3\}$, $a = 3$일 때 $\{2, 3\}$입니다. 서로 다른데도 겹치므로 분할이 되지 못합니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3, 4\}$의 분할 $\{\{1, 3\}, \{2, 4\}\}$를 동치류로 갖는 동치관계 $R$을 순서쌍의 집합으로 적어라.]
같은 조각에 속하는 두 원소끼리 관계있게 하면 됩니다. $R = \{(1, 1), (1, 3), (3, 1), (3, 3), (2, 2), (2, 4), (4, 2), (4, 4)\}$입니다. 동치관계임을 확인합니다. 반사적입니다. $(1, 1)$, $(2, 2)$, $(3, 3)$, $(4, 4)$가 있습니다. 대칭적입니다. $(1, 3)$과 $(3, 1)$, $(2, 4)$와 $(4, 2)$가 짝으로 있고 나머지는 성분이 같습니다. 추이적입니다. $x R y$이고 $y R z$이면 $x, y, z$가 모두 $\{1, 3\}$에 있거나 모두 $\{2, 4\}$에 있고, 두 집합 각각의 원소끼리의 모든 쌍이 $R$에 있으므로 $x R z$입니다. 이때 $[1] = \{x \in A : x R 1\} = \{1, 3\} = [3]$, $[2] = \{2, 4\} = [4]$입니다.
:::

:::check[동치관계 $R$에 대하여 $x \in [a]$이고 $x \in [b]$이면 $[a] = [b]$인 까닭은?]
$x$가 $[a] \cap [b]$의 원소이므로 이 교집합이 공집합이 아닙니다. 서로 다른 동치류는 공통 원소가 없다는 조건 3의 대우에 의해 $[a] = [b]$입니다.
:::
