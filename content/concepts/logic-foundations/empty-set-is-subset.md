---
title: 공집합은 모든 집합의 부분집합이다
title_en: The Empty Set Is a Subset of Every Set
aliases: []
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 어떤 집합 B에 대해서도 ∅ ⊆ B 이다.
requires: [set, subset, conditional-statement]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 1.3절, Fact 1.2와 그 앞의 설명, p.12
    checked: original
    note: "출처는 '∅ ⊄ B 이려면 B에 속하지 않는 ∅의 원소가 있어야 하는데 그런 원소가 없다'는 논증을 쓴다. 아래 증명은 같은 내용을 조건문의 진리표로 표현한 것이고, 출처의 논증은 '다른 증명'으로 실었다."
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 부분집합 정의에 조건문 꼴을 넣어 증명의 근거를 분명히 함."
added: 2026-11-16
---

:::statement
$B$가 어떤 [[set]]이든 공집합은 $B$의 [[subset]]이다. 즉

$$\emptyset \subseteq B.$$
:::

## 직관

$\emptyset \subseteq B$가 **거짓**이려면 무엇이 필요할까요? 공집합의 원소 가운데 $B$에 들어 있지 않은 것이 하나는 있어야 합니다. 그런데 공집합에는 원소가 아예 없습니다. 반례가 될 후보가 없으니 거짓일 수 없습니다.

다르게 볼 수도 있습니다. $B$의 부분집합을 만든다는 것은 빈 중괄호 $\{\ \}$에서 시작해 $B$의 원소 중 몇 개를 골라 넣는 일입니다. 아무것도 넣지 않는 것도 하나의 선택이고, 그 결과가 공집합입니다.

## 증명

:::idea
$\emptyset \subseteq B$는 "$x \in \emptyset$이면 $x \in B$이다"라는 조건문이 모든 $x$에 대해 참이라는 뜻입니다. 이 조건문의 가정은 언제나 거짓입니다.
:::

:::hint
[[conditional-statement]]의 진리표에서, 가정이 거짓인 두 줄의 값이 무엇이었는지 떠올려 보세요.
:::

:::proof
부분집합의 정의에 의해, $\emptyset \subseteq B$를 보이려면 임의의 대상 $x$에 대하여 조건문

$$x \in \emptyset \;\Rightarrow\; x \in B$$

가 참임을 보이면 된다.

$x$를 임의로 잡자. 공집합에는 원소가 없으므로 $x \in \emptyset$은 거짓이다. 가정이 거짓인 조건문은 결론의 참·거짓과 관계없이 참이므로, 위 조건문은 참이다.

$x$가 임의였으므로 $\emptyset$의 모든 원소는 $B$의 원소이다. 따라서 $\emptyset \subseteq B$ 이다.
:::

:::remark[다른 증명]
$\emptyset \nsubseteq B$라고 하면, 부분집합이 아니라는 것의 뜻에 따라 $\emptyset$의 원소이면서 $B$의 원소가 아닌 대상이 적어도 하나 있어야 한다. 그러나 $\emptyset$에는 원소가 없으므로 그런 대상은 없다. 따라서 $\emptyset \nsubseteq B$일 수 없고, $\emptyset \subseteq B$ 이다.
:::

## 예시와 반례

:::example
$\emptyset \subseteq \{1, 2, 3\}$, $\emptyset \subseteq \mathbb{Z}$, 그리고 $B$ 자리에 공집합을 넣은 $\emptyset \subseteq \emptyset$도 모두 참입니다.
:::

:::counterexample
$\emptyset \subseteq B$와 $\emptyset \in B$는 다른 주장입니다. 앞의 것은 항상 참이지만 뒤의 것은 그렇지 않습니다. $B = \{1, 2, 3\}$이면 $\emptyset \subseteq B$는 참이지만, $B$의 원소는 $1$, $2$, $3$뿐이므로 $\emptyset \in B$는 거짓입니다.
:::

## 확인 질문

:::check[공집합의 부분집합은 무엇인가?]
공집합 하나뿐입니다. $A \subseteq \emptyset$이면 $A$의 모든 원소가 $\emptyset$의 원소여야 하는데 $\emptyset$에는 원소가 없으므로, $A$에 원소가 하나라도 있으면 안 됩니다. 따라서 $A = \emptyset$입니다.
:::

:::check[같은 논법으로 " 공집합의 모든 원소는 짝수이다 " 도 참이라고 할 수 있는가?]
그렇습니다. "$x \in \emptyset$이면 $x$는 짝수이다"는 가정이 항상 거짓이므로 참입니다. 같은 이유로 "공집합의 모든 원소는 홀수이다"도 참입니다. 둘이 모순되지 않는 까닭은, 이 주장들이 실제로는 어떤 원소에 대해서도 아무것도 말하지 않기 때문입니다.
:::
