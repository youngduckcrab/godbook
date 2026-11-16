---
title: 동치류
title_en: Equivalence Class
aliases: [equivalence class]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 동치관계 R에서 a의 동치류 [a]는 a와 관계있는 A의 원소 전체의 집합이다.
requires: [equivalence-relation, relation, set]
sources:
  - ref: hammack-book-of-proof
    loc: 11.3절 Equivalence Relations, Definition 11.4, p.211 (예 11.9–11.11, p.211)
    checked: original
    note: "처는 동치류를 {x ∈ A : x R a}로 정의하고 [a]로 쓴다. 이 항목의 예시와 확인 질문은 새로 만들었고, 출처 p.211의 예(같음 R1에서 [2]={2}를 구하는 것)와 같은 종류인 \"같음\"의 예가 하나 들어 있다. [a]는 어느 관계인지가 문맥에서 정해질 때의 약식 표기이다. \"a ∈ [a]\"와 \"x R a를 a R x로 읽어도 된다\"는 설명은 출처에 없고 이 사이트에서 덧붙였다."
status: source-checked
added: 2026-11-16
---

:::statement
$R$이 집합 $A$ 위의 [[equivalence-relation]]이고 $a \in A$라 하자. $a$를 포함하는 **동치류**(equivalence class)는 $A$의 원소 가운데 $a$와 $R$의 관계에 있는 것 전체의 집합이며 $[a]$로 쓴다.
$$[a] = \{x \in A : x R a\}$$
따라서 $A$의 원소 $x$에 대하여 $x \in [a]$인 것은 정확히 $x R a$일 때이다.
:::

:::english
Let $R$ be an equivalence relation on a set $A$, and let $a \in A$. The **equivalence class** containing $a$ is the set of all elements of $A$ that are related to $a$ by $R$, and it is denoted $[a]$.
$$[a] = \{x \in A : x R a\}$$
Hence, for an element $x \in A$, we have $x \in [a]$ exactly when $x R a$.
:::

## 직관

학생들 사이의 "같은 반이다"를 생각하면, $a$의 동치류는 $a$와 같은 반인 학생 전체입니다. 동치관계는 같은 것으로 취급하는 기준이고, 동치류는 $a$와 같은 것으로 취급되는 원소를 모은 바구니입니다. 이 비유에서 $[a]$라는 이름표는 $a$가 정합니다. 다만 같은 바구니에 이름표가 여러 개 붙을 수 있다는 점은 아래 예시에서 보입니다.

동치관계의 반사성에서 $a R a$이므로 $a \in [a]$입니다. 그래서 동치류는 비어 있지 않습니다. 또 대칭성 때문에 $x R a$와 $a R x$는 서로 같은 뜻이므로, $[a]$를 "$a R x$인 $x$ 전체"로 읽어도 같은 집합입니다. 이 두 사실은 $R$이 동치관계라는 가정에서 나오며, 일반 관계에서는 성립하지 않을 수 있습니다.

## 예시와 반례

:::example[작은 집합]
$A = \{1, 2, 3, 4\}$, $S = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1)\}$이면 $S$는 $A$ 위의 동치관계입니다([[equivalence-relation]]의 예시).

- $[1] = \{x \in A : x S 1\} = \{1, 2\}$. $1S1$과 $2S1$이 성립하고, $3S1$과 $4S1$은 성립하지 않습니다.
- $[2] = \{x \in A : x S 2\} = \{1, 2\}$. 따라서 $[1] = [2]$입니다. 서로 다른 원소의 동치류가 같은 집합일 수 있습니다.
- $[3] = \{3\}$, $[4] = \{4\}$.
:::

:::example[같음]
어떤 집합 $A$ 위의 "같다"에서는 모든 $a \in A$에 대해 $[a] = \{x \in A : x = a\} = \{a\}$입니다. 원소 하나씩이 동치류가 됩니다.
:::

:::example[제곱이 같음]
$\mathbb{Z}$ 위의 "$x R y$는 $x^2 = y^2$을 뜻한다"에서 $[3] = \{x \in \mathbb{Z} : x^2 = 9\} = \{3, -3\}$입니다. $[0] = \{x \in \mathbb{Z} : x^2 = 0\} = \{0\}$입니다.
:::

:::counterexample[서로 다른 원소의 동치류가 반드시 다른 것은 아니다]
위 첫째 예시에서 $1 \ne 2$이지만 $[1] = [2]$입니다. "$a \ne b$이므로 $[a] \ne [b]$이다"라고 쓰면 틀립니다.
:::

:::counterexample[동치관계가 아니면 같은 방식으로 모은 집합이 한 덩어리를 이루지 않는다]
$\mathbb{Z}$ 위의 $\le$는 동치관계가 아니므로 정의의 대상이 아닙니다. 형식만 흉내 내어 $\{x \in \mathbb{Z} : x \le 3\}$을 만들어 보면, $2$는 이 집합의 원소이지만 $3$은 $\{x \in \mathbb{Z} : x \le 2\}$의 원소가 아닙니다. 곧 $2$가 $3$과 한 덩어리에 있어도 $3$은 $2$와 한 덩어리에 있지 않아서, 덩어리를 "서로 같은 것의 모임"으로 읽을 수 없습니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$ 위의 동치관계 $R = \{(1, 1), (2, 2), (3, 3), (1, 3), (3, 1)\}$에서 $[1]$, $[2]$, $[3]$을 구하라.]
$[1] = \{x \in A : x R 1\}$에서 $1R1$, $3R1$이 성립하고 $2R1$은 성립하지 않으므로 $[1] = \{1, 3\}$입니다. $[2]$는 $2R2$만 성립하므로 $\{2\}$입니다. $[3] = \{x \in A : x R 3\}$에서 $1R3$, $3R3$이 성립하고 $2R3$은 성립하지 않으므로 $\{1, 3\}$입니다.
:::

:::check[동치관계 $R$에서 $a \in [a]$인 까닭은 무엇인가?]
$R$이 반사적이므로 모든 $x \in A$에 대하여 $x R x$이고, 특히 $a R a$입니다. 정의에 따라 $[a] = \{x \in A : x R a\}$이고 $a \in A$이며 $a R a$이므로 $a \in [a]$입니다.
:::
