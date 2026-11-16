---
title: 드 모르간 법칙 (집합)
title_en: De Morgan's Laws (Sets)
aliases: [De Morgan's laws for sets, 드모르간 법칙]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 교집합의 여집합은 여집합들의 합집합이고, 합집합의 여집합은 여집합들의 교집합이다.
requires: [set, subset, set-operations, complement, de-morgan-laws-logic]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: "8.3절 끝부분의 법칙 목록, p.165 (진술). 8장 연습문제 11번 풀이, p.329 (둘째 법칙의 증명)"
    checked: original
    note: 출처는 둘째 법칙을 조건제시법으로 쓴 집합을 차례로 변형하는 등식 사슬로 증명하고, 그 과정에서 논리의 드 모르간 법칙을 쓴다. 아래 증명은 같은 핵심 단계를 쓰되 양쪽 포함을 따로 보이는 방식으로 다시 구성했다.
status: reviewed
review_note: "2026-11-16 독립 검토. 지적 사항 없음."
added: 2026-11-16
---

:::statement
$A$와 $B$가 전체집합 $U$ 안의 [[set]]일 때 다음이 성립한다. 여기서 $X^c = U - X$는 [[complement]]이다.

1. $(A \cap B)^c = A^c \cup B^c$
2. $(A \cup B)^c = A^c \cap B^c$
:::

## 직관

첫째 법칙의 왼쪽은 "$A$와 $B$ 양쪽에 다 들어 있는 것은 아닌" 원소들입니다. 양쪽에 다 들어 있지 않다는 것은 **적어도 한쪽에서 빠져 있다**는 뜻이므로, $A$ 밖에 있거나 $B$ 밖에 있는 원소들, 곧 오른쪽과 같습니다.

둘째 법칙의 왼쪽은 "$A$와 $B$ 어느 쪽에도 들어 있지 않은" 원소들입니다. 이는 $A$ 밖에 있으면서 동시에 $B$ 밖에 있다는 뜻입니다.

[[de-morgan-laws-logic]]과 모양이 똑같습니다. 교집합은 "그리고", 합집합은 "또는", 여집합은 "아니다"에 대응하므로, 논리의 법칙을 원소 하나하나에 적용하면 집합의 법칙이 나옵니다.

## 증명

:::idea
두 집합이 같음을 보이려면 양쪽 포함을 보이면 됩니다. 각 포함은 원소 $x$ 하나를 잡아 정의를 풀어 쓴 다음, "$x \in A$ 그리고 $x \in B$"의 부정에 논리의 드 모르간 법칙을 적용하면 됩니다.
:::

:::hint
$x \in (A \cap B)^c$를 정의대로 풀면 "$x \in U$ 그리고 $\lnot(x \in A \land x \in B)$"입니다. 부정 부분을 드 모르간 법칙으로 바꿔 보세요.
:::

:::hint
"$x \notin A$ 또는 $x \notin B$"를 얻었으면 두 경우로 나누세요. 각 경우에 $x$가 $A^c$와 $B^c$ 중 어디에 속하는지 보면 됩니다.
:::

:::hint
반대쪽 포함은 같은 단계를 거꾸로 밟습니다. 둘째 법칙은 "그리고"와 "또는"의 역할만 바꾸면 됩니다.
:::

:::proof
두 집합 $X$, $Y$에 대해 $X \subseteq Y$이고 $Y \subseteq X$이면 두 집합의 원소가 정확히 일치하므로 $X = Y$이다. 각 법칙에서 이 양쪽 포함을 보인다.

**첫째 법칙: $(A \cap B)^c = A^c \cup B^c$.**

($\subseteq$) $x \in (A \cap B)^c$라 하자. 여집합의 정의에 의해 $x \in U$이고 $x \notin A \cap B$이다. 뒤의 것은 "$x \in A$ 그리고 $x \in B$"가 거짓이라는 뜻이므로, 논리의 드 모르간 법칙에 의해 "$x \notin A$ 또는 $x \notin B$"가 참이다.

- $x \notin A$인 경우: $x \in U$이고 $x \notin A$이므로 $x \in A^c$이다.
- $x \notin B$인 경우: $x \in U$이고 $x \notin B$이므로 $x \in B^c$이다.

어느 경우든 $x \in A^c$ 또는 $x \in B^c$이므로 $x \in A^c \cup B^c$이다.

($\supseteq$) $x \in A^c \cup B^c$라 하자. 그러면 $x \in A^c$ 또는 $x \in B^c$이다.

- $x \in A^c$인 경우: $x \in U$이고 $x \notin A$이다.
- $x \in B^c$인 경우: $x \in U$이고 $x \notin B$이다.

어느 경우든 $x \in U$이고, "$x \notin A$ 또는 $x \notin B$"가 참이다. 논리의 드 모르간 법칙에 의해 "$x \in A$ 그리고 $x \in B$"는 거짓이고, 이는 $x \notin A \cap B$라는 뜻이다. $x \in U$이고 $x \notin A \cap B$이므로 $x \in (A \cap B)^c$이다.

**둘째 법칙: $(A \cup B)^c = A^c \cap B^c$.**

($\subseteq$) $x \in (A \cup B)^c$라 하자. 그러면 $x \in U$이고 $x \notin A \cup B$이다. 뒤의 것은 "$x \in A$ 또는 $x \in B$"가 거짓이라는 뜻이므로, 논리의 드 모르간 법칙에 의해 "$x \notin A$ 그리고 $x \notin B$"가 참이다. $x \in U$이고 $x \notin A$이므로 $x \in A^c$이고, $x \in U$이고 $x \notin B$이므로 $x \in B^c$이다. 따라서 $x \in A^c \cap B^c$이다.

($\supseteq$) $x \in A^c \cap B^c$라 하자. 그러면 $x \in A^c$이고 $x \in B^c$이므로, $x \in U$이고 $x \notin A$이며 $x \notin B$이다. "$x \notin A$ 그리고 $x \notin B$"가 참이므로 논리의 드 모르간 법칙에 의해 "$x \in A$ 또는 $x \in B$"는 거짓이고, 이는 $x \notin A \cup B$라는 뜻이다. $x \in U$이고 $x \notin A \cup B$이므로 $x \in (A \cup B)^c$이다.
:::

## 예시와 반례

:::example
$U = \{1, 2, 3, 4, 5\}$, $A = \{1, 2, 3\}$, $B = \{3, 4\}$라 합시다.

- $A \cap B = \{3\}$이므로 $(A \cap B)^c = \{1, 2, 4, 5\}$. 한편 $A^c = \{4, 5\}$, $B^c = \{1, 2, 5\}$이므로 $A^c \cup B^c = \{1, 2, 4, 5\}$. 일치합니다.
- $A \cup B = \{1, 2, 3, 4\}$이므로 $(A \cup B)^c = \{5\}$. 한편 $A^c \cap B^c = \{5\}$. 일치합니다.
:::

:::counterexample
연산을 뒤바꾸지 않은 "$(A \cap B)^c = A^c \cap B^c$"는 성립하지 않습니다. $U = \{1, 2, 3\}$, $A = \{1, 2\}$, $B = \{2, 3\}$이면 $(A \cap B)^c = \{2\}^c = \{1, 3\}$이지만 $A^c \cap B^c = \{3\} \cap \{1\} = \emptyset$ 입니다.
:::

## 역사와 맥락

논리의 법칙과 마찬가지로 오거스터스 드 모르간의 이름을 딴 것입니다. 인물에 관한 내용은 [[de-morgan-laws-logic]]의 역사 부분을 보세요.

## 확인 질문

:::check[증명에서 $x \in U$ 라는 조건은 어디에 쓰였는가?]
여집합에 속함을 말할 때마다 쓰였습니다. $x \in A^c$는 "$x \notin A$"만이 아니라 "$x \in U$ 그리고 $x \notin A$"입니다. 이 조건을 빠뜨리면 $U$ 밖의 대상까지 여집합에 들어가는 것처럼 되어 논증이 틀어집니다.
:::

:::check[$(A^c \cup B^c)^c$ 를 간단히 하라.]
둘째 법칙을 $A^c$와 $B^c$에 적용하면 $(A^c \cup B^c)^c = (A^c)^c \cap (B^c)^c = A \cap B$ 입니다. 여집합의 여집합은 원래 집합입니다.
:::
