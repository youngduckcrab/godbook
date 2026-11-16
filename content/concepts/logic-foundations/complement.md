---
title: 여집합
title_en: Complement
aliases: [전체집합, universal set, 보집합]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 전체집합 U 안에서 A에 속하지 않는 원소 전체의 집합.
requires: [set, set-operations]
sources:
  - ref: hammack-book-of-proof
    loc: 1.6절 Complement, Definition 1.6, p.20
    checked: original
    note: 출처는 여집합을 A 위에 줄을 그어 표기한다. 이 사이트는 같은 뜻으로 A^c 를 쓴다.
status: source-checked
added: 2026-11-16
---

:::statement
[[set]] $A$가 전체집합 $U$ 안에 있을 때, $A$의 **여집합**(complement)은 [[set-operations|차집합]]

$$A^c = U - A = \{x : x \in U \text{ 그리고 } x \notin A\}$$

이다.
:::

## 직관

"$A$에 속하지 않는 것 전부"를 모으고 싶을 때가 있습니다. 그런데 "짝수가 아닌 것 전부"라고만 하면 홀수뿐 아니라 $\tfrac12$, 삼각형, 함수까지 다 들어가 버립니다. 그래서 먼저 **어느 범위 안에서** 이야기하는지를 정해야 합니다. 그 범위가 **전체집합**(universal set) $U$입니다.

전체집합은 하나로 고정된 것이 아니라 문맥에 따라 정하는 것입니다. 정수에 관해 이야기하고 있으면 $U = \mathbb{Z}$이고, 실수에 관해 이야기하고 있으면 $U = \mathbb{R}$입니다. 여집합은 전체집합이 달라지면 함께 달라집니다.

여집합은 논리의 "아니다"에 해당합니다. $U$의 원소 $x$에 대해 $x \in A^c$는 $x \in A$의 부정입니다.

## 예시와 반례

:::example
$U = \{1, 2, 3, 4, 5, 6\}$, $A = \{2, 4, 6\}$이면 $A^c = \{1, 3, 5\}$ 입니다.
:::

:::example
$U = \mathbb{Z}$이고 $E$가 짝수인 정수의 집합이면 $E^c$는 홀수인 정수의 집합입니다.
:::

:::counterexample[전체집합이 바뀌면 여집합도 바뀐다]
$A = \{1, 2\}$라 합시다. $U = \{1, 2, 3\}$으로 보면 $A^c = \{3\}$이지만, $U = \{1, 2, 3, 4\}$로 보면 $A^c = \{3, 4\}$ 입니다. 전체집합을 밝히지 않은 "$A^c$"는 뜻이 정해지지 않습니다.
:::

## 확인 질문

:::check[$(A^c)^c$ 는 무엇인가?]
$A$입니다. $U$의 원소 $x$가 $(A^c)^c$에 속한다는 것은 $x \notin A^c$라는 뜻이고, 이는 $x \in A$와 같습니다. 논리의 이중 부정에 해당합니다.
:::

:::check[$U^c$ 와 $\emptyset^c$ 는 각각 무엇인가?]
$U^c = U - U = \emptyset$이고 $\emptyset^c = U - \emptyset = U$입니다.
:::
