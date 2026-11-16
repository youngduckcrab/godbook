---
title: 멱집합
title_en: Power Set
aliases: [power set, 부분집합 전체의 집합]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 집합 A의 부분집합을 모두 모은 집합.
requires: [set, subset, empty-set-is-subset]
sources:
  - ref: hammack-book-of-proof
    loc: 1.4절 Power Sets, Definition 1.4와 Fact 1.4, p.15
    checked: original
status: reviewed
review_note: "2026-11-16 독립 검토. 지적 사항 없음."
added: 2026-11-16
---

:::statement
[[set]] $A$의 **멱집합**(power set) $\mathscr{P}(A)$는 $A$의 [[subset]] 전체의 집합이다.

$$\mathscr{P}(A) = \{X : X \subseteq A\}$$
:::

:::english
The **power set** $\mathscr{P}(A)$ of a set $A$ is the set of all subsets of $A$:

$$\mathscr{P}(A) = \{X : X \subseteq A\}$$
:::

## 직관

멱집합은 **집합을 원소로 갖는 집합**입니다. $\mathscr{P}(A)$의 원소 하나하나가 $A$의 부분집합입니다. 그래서 다음 두 문장은 같은 말입니다.

$$X \in \mathscr{P}(A) \quad\text{과}\quad X \subseteq A$$

[[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이고 모든 집합은 자기 자신의 부분집합이므로, $\emptyset$과 $A$는 언제나 $\mathscr{P}(A)$의 원소입니다.

부분집합을 하나 만든다는 것은 $A$의 원소마다 "넣는다 / 뺀다"를 정하는 일입니다. 원소가 $n$개이면 이런 선택이 $n$번 있으므로 부분집합은 모두 $2^n$개가 됩니다.

:::remark[원소의 개수]
$A$가 유한집합이면 $|\mathscr{P}(A)| = 2^{|A|}$ 입니다. 출처는 이를 Fact 1.4로 싣고 있습니다. 위의 "넣는다 / 뺀다" 설명은 왜 그런지에 대한 요지이며, 엄밀한 증명은 수학적 귀납법이나 경우의 수 세기를 다룬 뒤 별도 항목으로 추가할 예정입니다.
:::

## 예시와 반례

:::example
$A = \{1, 2, 3\}$이면

$$\mathscr{P}(A) = \bigl\{\emptyset,\ \{1\},\ \{2\},\ \{3\},\ \{1,2\},\ \{1,3\},\ \{2,3\},\ \{1,2,3\}\bigr\}$$

이고 원소는 $2^3 = 8$개입니다.
:::

:::example[공집합의 멱집합]
$\mathscr{P}(\emptyset) = \{\emptyset\}$ 입니다. 공집합의 부분집합은 공집합 하나뿐이기 때문입니다. $\mathscr{P}(\emptyset)$은 원소가 $2^0 = 1$개인 집합이지, 공집합이 아닙니다.
:::

:::counterexample
$A = \{1, 2, 3\}$일 때 $1 \in \mathscr{P}(A)$는 거짓입니다. $\mathscr{P}(A)$의 원소는 집합이어야 하는데 $1$은 $A$의 부분집합이 아니라 원소입니다. 참인 것은 $\{1\} \in \mathscr{P}(A)$ 입니다.
:::

## 확인 질문

:::check[$\mathscr{P}(\{a, b\})$ 를 구하라.]
$\{\emptyset, \{a\}, \{b\}, \{a, b\}\}$ 입니다. 원소는 $2^2 = 4$개입니다.
:::

:::check[$A \subseteq B$ 이면 $\mathscr{P}(A) \subseteq \mathscr{P}(B)$ 인가?]
그렇습니다. $X \in \mathscr{P}(A)$를 잡으면 $X \subseteq A$입니다. $X$의 원소는 모두 $A$의 원소이고, $A \subseteq B$이므로 모두 $B$의 원소입니다. 따라서 $X \subseteq B$, 곧 $X \in \mathscr{P}(B)$입니다.
:::
