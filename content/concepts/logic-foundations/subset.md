---
title: 부분집합
title_en: Subset
aliases: [포함 관계, inclusion]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: A의 모든 원소가 B의 원소이면 A는 B의 부분집합이다.
requires: [set, conditional-statement]
sources:
  - ref: hammack-book-of-proof
    loc: 1.3절 Subsets, Definition 1.3, p.12 (두 집합이 같음을 보이는 방법은 8.3절, p.162)
    checked: original
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 정의에 조건문 꼴 추가."
added: 2026-11-16
---

:::statement
$A$와 $B$가 [[set]]일 때, $A$의 **모든** 원소가 $B$의 원소이기도 하면 $A$를 $B$의 **부분집합**(subset)이라 하고 $A \subseteq B$로 쓴다. 다시 말해, 어떤 대상 $x$를 가져오든 [[conditional-statement]] "$x \in A$이면 $x \in B$이다"가 참이라는 뜻이다.

$A$가 $B$의 부분집합이 아니면 $A \nsubseteq B$로 쓴다. 이는 $A$의 원소 가운데 $B$의 원소가 아닌 것이 **적어도 하나** 있다는 뜻이다.
:::

:::english
Let $A$ and $B$ be sets. If **every** element of $A$ is also an element of $B$, then $A$ is called a **subset** of $B$, and we write $A \subseteq B$. In other words, for every object $x$, the conditional statement "if $x \in A$, then $x \in B$" is true.

If $A$ is not a subset of $B$, we write $A \nsubseteq B$. This means that **at least one** element of $A$ is not an element of $B$.
:::

## 직관

$A \subseteq B$는 "$A$가 $B$ 안에 통째로 들어 있다"는 말입니다. 정의의 둘째 문장처럼 조건문으로 읽을 수 있다는 점이 중요합니다. $x$가 $A$의 원소가 아닐 때는 조건문의 가정이 거짓이므로 따질 것이 없고, $x$가 $A$의 원소일 때만 실제로 확인할 일이 생깁니다.

그래서 $A \subseteq B$를 증명하는 표준적인 방법은 "$A$의 원소 $x$를 아무거나 하나 잡고, 그것이 $B$의 원소임을 보이는 것"입니다.

두 집합이 같다는 것은 원소가 정확히 일치한다는 뜻이었습니다. 이는 $A \subseteq B$이면서 $B \subseteq A$라는 것과 같습니다. 그래서 $A = B$를 증명할 때는 보통 **양쪽 포함을 따로** 보입니다.

## 예시와 반례

:::example
- $\{2, 3, 7\} \subseteq \{2, 3, 4, 5, 6, 7\}$
- $\mathbb{N} \subseteq \mathbb{Z}$. 모든 자연수는 정수입니다.
- 어떤 집합 $A$에 대해서도 $A \subseteq A$ 입니다. $A$의 모든 원소는 당연히 $A$의 원소입니다.
:::

:::counterexample
$\{2, 3, 7\} \nsubseteq \{2, 4, 5, 6, 7\}$ 입니다. 왼쪽 집합의 원소 $3$이 오른쪽 집합에 없습니다. 부분집합이 아님을 보이려면 이렇게 빠져나가는 원소 **하나**만 찾으면 됩니다.
:::

:::counterexample[$\in$ 과 $\subseteq$ 를 구별하기]
$A = \{1, \{2, 3\}\}$이라 합시다. $\{2, 3\} \in A$는 참입니다. 하지만 $\{2, 3\} \subseteq A$는 거짓입니다. $\{2, 3\}$의 원소 $2$가 $A$의 원소가 아니기 때문입니다. "원소이다"와 "부분집합이다"는 다른 관계입니다.
:::

## 확인 질문

:::check[$A \subseteq B$ 이고 $B \subseteq C$ 이면 $A \subseteq C$ 인가?]
그렇습니다. $x \in A$를 아무거나 잡으면 $A \subseteq B$에 의해 $x \in B$이고, 다시 $B \subseteq C$에 의해 $x \in C$입니다. $A$의 모든 원소가 $C$의 원소이므로 $A \subseteq C$입니다.
:::

:::check[$\{1, 2\} \subseteq \{1, 2\}$ 는 참인가?]
참입니다. 부분집합의 정의는 "더 작다"를 요구하지 않습니다. 모든 집합은 자기 자신의 부분집합입니다.
:::
