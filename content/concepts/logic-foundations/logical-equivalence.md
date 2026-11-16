---
title: 논리적 동치
title_en: Logical Equivalence
aliases: [동치, logically equivalent]
kind: definition
field: logic-foundations
msc: ["03B05"]
level: intro
summary: 진리표의 모든 줄에서 진릿값이 일치하는 두 명제는 같은 말을 하는 것으로 본다.
requires: [proposition, logical-connectives, conditional-statement]
sources:
  - ref: hammack-book-of-proof
    loc: 2.6절 Logical Equivalence, pp.50–51
    checked: original
    note: 출처는 논리적 동치를 등호 = 로 쓴다. 이 사이트는 ≡ 를 쓴다.
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 식에 괄호 추가."
added: 2026-11-16
---

:::statement
[[proposition]]들과 [[logical-connectives]], [[conditional-statement]]으로 만든 두 명제가 **논리적으로 동치**(logically equivalent)라는 것은, 진리표에서 두 명제의 진릿값이 **모든 줄에서** 일치한다는 뜻이다.

$A$와 $B$가 논리적으로 동치일 때 $A \equiv B$로 쓴다.
:::

:::english
Two statements built from given statements using the logical connectives and the conditional are **logically equivalent** if their truth values agree in **every row** of the truth table.

When $A$ and $B$ are logically equivalent, we write $A \equiv B$.
:::

## 직관

논리적으로 동치인 두 명제는 재료 명제들이 참이든 거짓이든 언제나 함께 참이고 함께 거짓입니다. 겉모습은 달라도 담고 있는 정보가 같으므로, 증명에서 한쪽을 다른 쪽으로 **바꿔 써도** 됩니다.

이것이 쓸모 있는 까닭은, 같은 내용이라도 어떤 꼴은 증명하기 쉽고 어떤 꼴은 어렵기 때문입니다. 증명하려는 명제를 다루기 쉬운 동치 명제로 바꾸는 것은 수학에서 가장 자주 쓰는 기술 가운데 하나입니다.

동치인지 확인하는 방법은 기계적입니다. 두 명제를 한 진리표에 나란히 적고 두 열을 비교하면 됩니다.

## 예시와 반례

:::example[이중 부정]
$\lnot(\lnot P) \equiv P$ 입니다.

| $P$ | $\lnot P$ | $\lnot(\lnot P)$ |
|:---:|:---:|:---:|
| $T$ | $F$ | $T$ |
| $F$ | $T$ | $F$ |

첫째 열과 셋째 열이 두 줄 모두에서 일치합니다.
:::

:::example[조건문을 "또는"으로 바꾸기]
$(P \Rightarrow Q) \equiv (\lnot P) \lor Q$ 입니다.

| $P$ | $Q$ | $\lnot P$ | $(\lnot P) \lor Q$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $F$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $F$ | $T$ | $T$ | $T$ |

마지막 두 열이 네 줄 모두에서 일치합니다.
:::

:::counterexample
$P \Rightarrow Q$와 그 역 $Q \Rightarrow P$는 논리적으로 동치가 **아닙니다**.

| $P$ | $Q$ | $P \Rightarrow Q$ | $Q \Rightarrow P$ |
|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $T$ |
| $F$ | $T$ | $T$ | $F$ |
| $F$ | $F$ | $T$ | $T$ |

둘째 줄과 셋째 줄에서 값이 다릅니다. 한 줄이라도 다르면 동치가 아닙니다.
:::

## 확인 질문

:::check[진리표의 네 줄 중 세 줄에서 값이 같으면 "거의 동치"라고 할 수 있는가?]
그런 개념은 없습니다. 논리적 동치는 모든 줄에서 일치할 것을 요구합니다. 한 줄이라도 다르면, 그 줄에 해당하는 상황에서 한 명제는 참이고 다른 명제는 거짓이므로 서로 바꿔 쓸 수 없습니다.
:::

:::check[$P \land Q$ 와 $Q \land P$ 는 논리적으로 동치인가?]
동치입니다. 두 명제 모두 $P$와 $Q$가 둘 다 참일 때만 참이므로 네 줄에서 값이 모두 일치합니다.
:::
