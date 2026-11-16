---
title: 반사적, 대칭적, 추이적 관계
title_en: Reflexive, Symmetric, and Transitive Relations
aliases: [반사성, 대칭성, 추이성, 반사관계, 대칭관계, 추이관계, reflexive, symmetric, transitive]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 관계 R이 반사적이면 모든 x에 대해 xRx, 대칭적이면 xRy일 때마다 yRx, 추이적이면 xRy와 yRz일 때마다 xRz이다.
requires: [relation, quantifiers, conditional-statement, logical-connectives]
sources:
  - ref: hammack-book-of-proof
    loc: 11.2절 Properties of Relations, Definition 11.2, p.205
    checked: original
    note: "처는 정의 직후 $\\mathbb{Z}$ 위의 $<$, $\\le$, $=$ 등의 성질을 표로 정리한다(p.205). 이 항목의 첫째 예시(정수 위의 $<$, $\\le$, $=$)는 그 표에 나오는 관계들을 다시 따져 본 것이다. \"추이적 관계에서 $x$, $y$, $z$가 서로 달라야 하는 것은 아니다\"는 설명, \"정확히 ~일 때\"의 부정 문장, 공집합 위의 관계와 빈 관계에 대한 논의는 출처에 없고 이 사이트에서 덧붙였다. 나머지 예시와 반례는 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$R$이 집합 $A$ 위의 [[relation]]이라 하자. 다음 세 성질을 정의한다. 한정 기호의 뜻은 [[quantifiers]]를 따른다.

1. $R$이 **반사적**(reflexive)이라는 것은 정확히 다음이 성립할 때이다: 모든 $x \in A$에 대하여 $x R x$이다. 곧 $\forall x \in A,\ x R x$.
2. $R$이 **대칭적**(symmetric)이라는 것은 정확히 다음이 성립할 때이다: 모든 $x, y \in A$에 대하여 $x R y$이면 $y R x$이다. 곧 $\forall x, y \in A,\ (x R y) \Rightarrow (y R x)$.
3. $R$이 **추이적**(transitive)이라는 것은 정확히 다음이 성립할 때이다: 모든 $x, y, z \in A$에 대하여 $x R y$이고 $y R z$이면 $x R z$이다. 곧 $\forall x, y, z \in A,\ \bigl((x R y) \land (y R z)\bigr) \Rightarrow (x R z)$.

각 성질이 성립하지 않는 경우는 다음과 같다.

- 반사적이 아니다 $\iff$ $x R x$가 성립하지 않는 $x \in A$가 적어도 하나 있다.
- 대칭적이 아니다 $\iff$ $x R y$이지만 $y R x$는 아닌 $x, y \in A$가 적어도 한 쌍 있다.
- 추이적이 아니다 $\iff$ $x R y$이고 $y R z$이지만 $x R z$는 아닌 $x, y, z \in A$가 적어도 하나 있다.

세 성질 모두에서 한정 기호가 가리키는 대상은 같은 것일 수 있다. 예를 들어 추이성의 $x, y, z$는 서로 달라야 하는 것이 아니다.
:::

:::english
Let $R$ be a relation on a set $A$. We define three properties; quantifiers are understood as usual.

1. $R$ is **reflexive** exactly when $x R x$ for every $x \in A$; that is, $\forall x \in A,\ x R x$.
2. $R$ is **symmetric** exactly when, for all $x, y \in A$, $x R y$ implies $y R x$; that is, $\forall x, y \in A,\ (x R y) \Rightarrow (y R x)$.
3. $R$ is **transitive** exactly when, for all $x, y, z \in A$, if $x R y$ and $y R z$, then $x R z$; that is, $\forall x, y, z \in A,\ \bigl((x R y) \land (y R z)\bigr) \Rightarrow (x R z)$.

Each property fails in the following cases.

- $R$ is not reflexive $\iff$ there is at least one $x \in A$ for which $x R x$ does not hold.
- $R$ is not symmetric $\iff$ there is at least one pair $x, y \in A$ with $x R y$ but not $y R x$.
- $R$ is not transitive $\iff$ there are $x, y, z \in A$ with $x R y$ and $y R z$ but not $x R z$.

In each of these quantifiers the chosen elements may coincide. For example, in the definition of transitivity, $x$, $y$, $z$ need not be distinct.
:::

## 직관

"친구 사이"를 관계로 보고 세 성질을 읽어 봅시다. 반사성은 "누구든 자기 자신과 관계가 있다", 대칭성은 "관계는 오는 쪽과 가는 쪽이 같다", 추이성은 "관계가 한 걸음 건너 이어지면 바로 이어진다"입니다. 실제 친구 관계는 보통 세 번째 성질이 성립하지 않습니다. 친구의 친구가 친구라는 보장이 없기 때문입니다. 이 비유는 어떤 성질이 어떤 관계에서 성립하거나 깨지는지를 읽는 연습에 쓰이고, 수학적 정의는 어디까지나 위의 한정 기호 문장입니다.

대칭성과 추이성은 "$\Rightarrow$" 꼴이므로 가정이 거짓인 $x$, $y$는 따질 필요가 없습니다. 그래서 어떤 쌍도 포함하지 않는 관계에서는 이 두 성질이 저절로 성립합니다. 반사성은 가정 없이 모든 $x$에서 $x R x$를 요구하므로 사정이 다릅니다.

또 대칭성은 "$x R y$인 어떤 $x$, $y$에서 $y R x$가 성립한다"가 아니라 "$x R y$인 **모든** $x$, $y$에서" 성립한다는 뜻입니다. $x R y \Rightarrow y R x$가 일부 $x$, $y$에서 참인 것만으로는 대칭적이라 할 수 없습니다.

## 예시와 반례

:::example[정수 위의 $<$, $\le$, $=$]
$\mathbb{Z}$ 위에서 다음이 성립합니다.

| | 반사적 | 대칭적 | 추이적 |
|---|---|---|---|
| $<$ | 아니다 | 아니다 | 그렇다 |
| $\le$ | 그렇다 | 아니다 | 그렇다 |
| $=$ | 그렇다 | 그렇다 | 그렇다 |

$<$가 반사적이 아닌 것은 $1 < 1$이 거짓이기 때문입니다. $<$와 $\le$가 대칭적이 아닌 것은 $1 < 2$, $1 \le 2$이지만 $2 < 1$, $2 \le 1$이 거짓이기 때문입니다. 추이성은 $x < y$이고 $y < z$이면 $x < z$이고, $\le$도 마찬가지이기 때문에 성립합니다. $=$의 세 성질은 같음의 성질 그대로입니다.
:::

:::example[세 성질을 모두 갖는 작은 관계]
$A = \{1, 2, 3\}$, $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\}$이라 합시다.

- 반사적입니다. $1R1$, $2R2$, $3R3$이 모두 성립합니다.
- 대칭적입니다. $R$의 쌍 $(1, 1)$, $(2, 2)$, $(3, 3)$은 성분이 같으므로 뒤집어도 같은 쌍이고, $(1, 2)$를 뒤집은 $(2, 1)$과 $(2, 1)$을 뒤집은 $(1, 2)$가 모두 $R$에 있습니다.
- 추이적입니다. $x R y$이고 $y R z$인 경우를 모두 확인합니다. $x = 3$이면 $3Ry$에서 $y = 3$뿐이고 $3 R z$에서 $z = 3$이므로 $3 R 3$입니다. $x \in \{1, 2\}$이면 $y \in \{1, 2\}$이고 $z \in \{1, 2\}$인데, $\{1, 2\}$ 안의 모든 순서쌍 $(1, 1)$, $(1, 2)$, $(2, 1)$, $(2, 2)$가 $R$에 있으므로 $x R z$입니다.
:::

:::example[공집합 위의 관계]
$A = \emptyset$이면 $A \times A = \emptyset$이므로 $A$ 위의 관계는 $R = \emptyset$ 하나뿐입니다. $\forall x \in A$로 시작하는 세 문장은 $A$에 원소가 없어서 거짓이 되게 하는 $x$가 없으므로 모두 참입니다. 곧 공집합 위의 이 관계는 반사적이고 대칭적이며 추이적입니다.
:::

:::counterexample[반사성만 깨지는 관계]
$A = \{1, 2, 3\}$, $R = \{(1, 1), (2, 2)\}$입니다. $3 R 3$이 성립하지 않으므로 반사적이 아닙니다. 그러나 대칭적입니다. $R$의 쌍은 모두 성분이 같아서 뒤집어도 $R$에 있습니다. 추이적이기도 합니다. $x R y$이고 $y R z$이면 $x = y = z$이고, $x R x$는 성립합니다.

같은 이유로, 원소가 하나라도 있는 집합 $A$ 위의 빈 관계 $\emptyset$은 대칭적이고 추이적이지만 반사적이 아닙니다. $a \in A$를 하나 잡으면 $(a, a) \notin \emptyset$이기 때문입니다. "대칭적이고 추이적이면 반사적이다"라는 생각은 틀립니다. 위의 $R$이 반례입니다.
:::

:::counterexample[대칭성만 깨지는 관계]
$A = \{1, 2, 3\}$, $R = \{(1, 1), (2, 2), (3, 3), (1, 2)\}$입니다. $1 R 2$이지만 $(2, 1) \notin R$이므로 대칭적이 아닙니다. 반사적입니다. $1R1$, $2R2$, $3R3$이 성립합니다. 추이적입니다. $x R y$이고 $y R z$인 경우는 $(x, y, z)$가 $(1, 1, 1)$, $(1, 1, 2)$, $(1, 2, 2)$, $(2, 2, 2)$, $(3, 3, 3)$ 중 하나인데, 각각에서 $x R z$는 $(1, 1)$, $(1, 2)$, $(1, 2)$, $(2, 2)$, $(3, 3)$이 $R$에 있으므로 성립합니다.
:::

:::counterexample[추이성만 깨지는 관계]
$A = \{1, 2, 3\}$, $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (2, 3), (3, 2)\}$입니다. 이 관계는 "두 수가 같거나 이웃한 수이다"에 해당합니다. $1 R 2$이고 $2 R 3$이지만 $(1, 3) \notin R$이므로 추이적이 아닙니다. 반사적입니다. $1R1$, $2R2$, $3R3$이 성립합니다. 대칭적입니다. 성분이 같은 쌍은 뒤집어도 같고, $(1, 2)$와 $(2, 1)$, $(2, 3)$과 $(3, 2)$가 서로 짝으로 $R$에 있습니다.
:::

## 확인 질문

:::check[$A = \{1, 2\}$ 위의 관계 $R = \{(1, 2), (2, 1)\}$은 반사적인가, 대칭적인가, 추이적인가?]
반사적이 아닙니다. $(1, 1) \notin R$이기 때문입니다. 대칭적입니다. $(1, 2)$의 뒤집힌 쌍 $(2, 1)$과 $(2, 1)$의 뒤집힌 쌍 $(1, 2)$가 모두 $R$에 있습니다. 추이적이 아닙니다. $1 R 2$이고 $2 R 1$이지만 $(1, 1) \notin R$이므로, 추이성의 문장에서 $x = z = 1$, $y = 2$로 잡으면 깨집니다.
:::

:::check[$\mathbb{Z}$ 위에서 "$x R y$는 $x \ne y$를 뜻한다"로 정의한 관계는 세 성질 중 어느 것을 갖는가?]
$x R x$는 $x \ne x$인데 이는 거짓이므로 반사적이 아닙니다. $x \ne y$이면 $y \ne x$이므로 대칭적입니다. 추이적이 아닙니다. $x = 1$, $y = 2$, $z = 1$로 잡으면 $1 \ne 2$이고 $2 \ne 1$이지만 $1 \ne 1$이 아니기 때문입니다.
:::
