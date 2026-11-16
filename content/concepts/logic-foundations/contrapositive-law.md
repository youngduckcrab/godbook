---
title: 대우 법칙
title_en: Contrapositive Law
aliases: [대우, contrapositive, 대우 명제]
kind: theorem
field: logic-foundations
msc: ["03B05"]
level: intro
summary: "\"P이면 Q이다\"는 \"Q가 아니면 P가 아니다\"와 논리적으로 동치이다."
requires: [conditional-statement, logical-equivalence]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 2.6절, p.51의 진리표와 p.52의 식 (2.1) Contrapositive law
    checked: original
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 표기와 확인 질문의 답 보완."
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여

$$(P \Rightarrow Q) \;\equiv\; \bigl((\lnot Q) \Rightarrow (\lnot P)\bigr)$$

이다. 오른쪽 명제 $(\lnot Q) \Rightarrow (\lnot P)$를 [[conditional-statement]] $P \Rightarrow Q$의 **대우**(contrapositive)라 한다.
:::

:::english
For statements $P$ and $Q$,

$$(P \Rightarrow Q) \;\equiv\; \bigl((\lnot Q) \Rightarrow (\lnot P)\bigr).$$

The statement on the right, $(\lnot Q) \Rightarrow (\lnot P)$, is called the **contrapositive** of the conditional statement $P \Rightarrow Q$.
:::

## 직관

"비가 오면 땅이 젖는다"가 참이라고 합시다. 그런데 땅이 젖어 있지 않다면? 비가 왔을 리 없습니다. 비가 왔다면 땅이 젖었을 것이기 때문입니다. 이것이 대우 "땅이 젖지 않았으면 비가 오지 않았다"입니다.

조건문과 그 대우는 같은 약속을 서로 반대 방향에서 말하는 것입니다. 약속 $P \Rightarrow Q$가 깨지는 경우는 "$P$는 참, $Q$는 거짓" 하나였습니다. 대우가 깨지는 경우는 "$\lnot Q$는 참, $\lnot P$는 거짓", 곧 "$Q$는 거짓, $P$는 참"으로 똑같은 경우입니다.

## 증명

:::idea
깨지는 경우가 같다는 관찰을 진리표로 옮기면 됩니다. 두 조건문을 한 표에 적고 네 줄을 비교합니다.
:::

:::hint
$\lnot P$와 $\lnot Q$ 열을 먼저 만드세요. $(\lnot Q) \Rightarrow (\lnot P)$는 가정이 $\lnot Q$, 결론이 $\lnot P$인 조건문이므로, $\lnot Q$가 참이고 $\lnot P$가 거짓인 줄에서만 거짓입니다.
:::

:::proof
$P$, $Q$의 진릿값 조합 네 가지에 대해 두 명제를 계산한다. 조건문은 가정이 참이고 결론이 거짓일 때만 거짓이다.

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ | $(\lnot Q) \Rightarrow (\lnot P)$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $F$ | $F$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $T$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $F$ | $T$ | $T$ |
| $F$ | $F$ | $T$ | $T$ | $T$ | $T$ |

마지막 두 열이 네 줄 모두에서 일치하므로 두 명제는 논리적으로 동치이다.
:::

## 예시와 반례

:::example
정수 $n$에 대하여 "$n^2$이 짝수이면 $n$은 짝수이다"의 대우는 "$n$이 짝수가 아니면 $n^2$은 짝수가 아니다", 곧 "$n$이 홀수이면 $n^2$은 홀수이다"입니다. 두 문장은 동치이므로 한쪽을 증명하면 다른 쪽도 증명된 것입니다. 이 경우에는 대우 쪽이 훨씬 다루기 쉽습니다.
:::

:::counterexample
대우를 **역** $Q \Rightarrow P$와 혼동하면 안 됩니다. 조건문과 역은 동치가 아닙니다. "비가 오면 땅이 젖는다"가 참이어도 "땅이 젖었으면 비가 왔다"는 참이 아닐 수 있습니다. 누가 물을 뿌렸을 수도 있기 때문입니다. $P$가 거짓이고 $Q$가 참인 경우에 $P \Rightarrow Q$는 참이지만 $Q \Rightarrow P$는 거짓입니다.
:::

## 쓰임새

수학의 많은 정리는 "$P$이면 $Q$이다" 꼴입니다. 이 법칙 덕분에 그런 정리를 증명할 때 대신 "$Q$가 아니면 $P$가 아니다"를 증명해도 됩니다. 이 방법을 **대우를 이용한 증명**(proof by contrapositive)이라 하며, 출처로 삼은 책도 이 법칙을 소개하면서 바로 그 쓰임새를 이유로 듭니다.

## 확인 질문

:::check[실수 $x$에 대하여 "$x > 3$ 이면 $x^2 > 9$ 이다" 의 대우를 쓰라.]
"$x^2 \le 9$이면 $x \le 3$이다"입니다. 가정과 결론을 각각 부정하고 **자리를 바꿉니다**. "$x^2 > 9$이면 $x > 3$이다"는 역이지 대우가 아니며, $x = -4$에서 거짓입니다.
:::

:::check[대우의 대우는 무엇인가?]
원래 조건문과 동치인 명제입니다. $(\lnot Q) \Rightarrow (\lnot P)$의 대우는 $\lnot(\lnot P) \Rightarrow \lnot(\lnot Q)$입니다. $\lnot(\lnot P)$는 $P$와 진릿값이 항상 같고 $\lnot(\lnot Q)$도 $Q$와 항상 같으므로([[logical-equivalence]]의 이중 부정 예시), 이 조건문의 진리표는 $P \Rightarrow Q$의 진리표와 모든 줄에서 일치합니다.
:::
