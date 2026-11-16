---
title: 조건문의 부정
title_en: Negation of a Conditional Statement
aliases: [함의의 부정, 조건문 부정, negating an implication, negation of implication]
kind: theorem
field: logic-foundations
msc: ["03B05"]
level: intro
summary: "\"P이면 Q이다\"의 부정은 \"P이고 Q가 아니다\"이다."
requires: [conditional-statement, logical-connectives, logical-equivalence, quantifiers, negation-of-quantified-statements]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 2.10절 Negating Statements, 식 (2.10), p.61 (예 2.14와 2.15는 p.62)
    checked: original
    note: 출처는 "P⇒Q가 거짓이 되는 유일한 경우는 P가 참이고 Q가 거짓일 때"라는 말로 규칙을 보이고, 진리표 확인은 2.6절 연습문제 12번에 맡긴다. 아래는 진리표를 직접 그려 증명했다. 출처는 부정을 ∼ 로, 동치를 = 로 쓰고 이 사이트는 ¬ 와 ≡ 를 쓴다. 예시는 새로 만들었다.
status: reviewed
review_note: "2026-11-16 독립 검토 2회. 변수가 정해지지 않아 답이 틀렸던 확인 질문과 예시를 교체."
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여 다음이 성립한다.

$$\lnot(P \Rightarrow Q) \equiv P \land (\lnot Q)$$

곧 "$P$이면 $Q$이다"가 거짓인 것은 "$P$는 참이고 $Q$는 거짓"인 것과 같다.
:::

:::english
For statements $P$ and $Q$, the following holds.

$$\lnot(P \Rightarrow Q) \equiv P \land (\lnot Q)$$

That is, "if $P$ then $Q$" is false exactly when $P$ is true and $Q$ is false.
:::

## 직관

[[conditional-statement]]의 약속 비유를 떠올려 보세요. "시험에 합격하면 과목을 통과시켜 주겠다"는 약속이 **깨졌다**는 것은 어떤 상황입니까? 시험에 합격했는데 과목을 통과시키지 않은 경우뿐입니다. 시험에 떨어진 사람에 대해서는 약속을 어길 수가 없습니다. 이 상황이 정확히 "$P$이고 $Q$가 아니다"입니다.

여기서 주의할 점은, 조건문의 부정이 또 하나의 조건문이 아니라 **"그리고"로 이어진 명제**라는 것입니다. 조건문의 부정을 "$P$이면 $Q$가 아니다"라고 쓰는 것이 가장 흔한 실수입니다.

이 규칙은 증명에서 쓰임이 큽니다. 예를 들어 "모든 $x$에 대하여 $P(x)$이면 $Q(x)$이다"가 거짓임을 보이려면, $P(x)$는 참이고 $Q(x)$는 거짓인 $x$를 하나 찾으면 됩니다. 아래 둘째 예시가 이 경우입니다.

## 증명

:::idea
조건문의 진리표에서 거짓이 되는 줄은 하나뿐입니다. $\lnot(P \Rightarrow Q)$와 $P \land (\lnot Q)$의 진리표를 같이 그려 네 줄이 모두 일치함을 확인합니다.
:::

:::hint
$P$, $Q$의 진릿값이 가능한 네 경우를 나열하고, 각 줄에서 $P \Rightarrow Q$부터 계산하세요.
:::

:::hint
$\lnot(P \Rightarrow Q)$는 $P \Rightarrow Q$의 열을 뒤집으면 됩니다. $P \land (\lnot Q)$는 $\lnot Q$의 열을 먼저 만든 뒤 $P$와 "그리고"로 묶으세요.
:::

:::proof
$P$와 $Q$의 진릿값이 가능한 네 경우마다 두 명제의 진릿값을 구한다. 조건문의 진리표는 [[conditional-statement]]의 진술, $\lnot$와 $\land$의 진리표는 [[logical-connectives]]의 진술에 따른다.

| $P$ | $Q$ | $P \Rightarrow Q$ | $\lnot(P \Rightarrow Q)$ | $\lnot Q$ | $P \land (\lnot Q)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $F$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $T$ | $F$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $F$ |

각 줄은 다음과 같이 계산했다.

1. $P = T$, $Q = T$: $P \Rightarrow Q$는 $T$이므로 그 부정은 $F$이다. $\lnot Q = F$이므로 $P \land (\lnot Q) = T \land F = F$이다.
2. $P = T$, $Q = F$: $P \Rightarrow Q$는 $F$이므로 그 부정은 $T$이다. $\lnot Q = T$이므로 $P \land (\lnot Q) = T \land T = T$이다.
3. $P = F$, $Q = T$: $P \Rightarrow Q$는 $T$이므로 그 부정은 $F$이다. $\lnot Q = F$이므로 $P \land (\lnot Q) = F \land F = F$이다.
4. $P = F$, $Q = F$: $P \Rightarrow Q$는 $T$이므로 그 부정은 $F$이다. $\lnot Q = T$이지만 $P = F$이므로 $P \land (\lnot Q) = F \land T = F$이다.

넷째 열 $\lnot(P \Rightarrow Q)$와 여섯째 열 $P \land (\lnot Q)$가 네 줄 모두에서 일치한다($F, T, F, F$). 따라서 [[logical-equivalence]]의 정의에 의해 $\lnot(P \Rightarrow Q) \equiv P \land (\lnot Q)$이다.
:::

## 예시와 반례

:::example
"$8$이 $4$의 배수이면 $8$은 $3$의 배수이다"라는 조건문의 부정은 "$8$은 $4$의 배수이고 $8$은 $3$의 배수가 아니다"입니다. $8 = 4 \times 2$이고 $8$은 $3$의 배수가 아니므로 이 부정은 참이고, 원래 조건문은 거짓입니다.
:::

:::example[변수가 있는 경우]
"모든 실수 $x$에 대하여, $x^2 > 4$이면 $x > 2$이다"의 부정을 구해 봅시다. 이 명제는 $\forall x \in \mathbb{R},\ (x^2 > 4) \Rightarrow (x > 2)$입니다. [[negation-of-quantified-statements]]의 규칙 1을 쓰면 부정은 $\exists x \in \mathbb{R},\ \lnot\bigl((x^2 > 4) \Rightarrow (x > 2)\bigr)$이고, 이 항목의 규칙을 쓰면 $\exists x \in \mathbb{R},\ (x^2 > 4) \land (x \le 2)$가 됩니다. $x = -3$이 이를 만족합니다. $(-3)^2 = 9 > 4$이고 $-3 \le 2$이기 때문입니다. 따라서 부정이 참이고, 원래 명제는 거짓입니다.
:::

:::counterexample[흔한 오류: 부정이 또 하나의 조건문이라는 착각]
$\lnot(P \Rightarrow Q)$는 $P \Rightarrow (\lnot Q)$와 동치가 아닙니다. $P$가 거짓이면 $P \Rightarrow (\lnot Q)$는 $Q$가 무엇이든 참이지만, 위의 진리표에서 보듯 $\lnot(P \Rightarrow Q)$는 거짓입니다. 예를 들어 "$1 = 2$이면 $3$은 짝수이다"는 가정이 거짓이므로 참이고 그 부정은 거짓인데, "$1 = 2$이면 $3$은 짝수가 아니다"도 가정이 거짓이므로 참입니다. 부정이어야 할 두 명제의 진릿값이 같으니 부정이 아닙니다.
:::

## 확인 질문

:::check["$8$이 짝수이면 $8$은 $6$의 배수이다"의 부정을 쓰고, 참·거짓을 판정하라.]
부정은 "$8$은 짝수이고 $8$은 $6$의 배수가 아니다"입니다. $8 = 2 \times 4$이므로 짝수이고, $8 = 6 \times 1 + 2$이므로 $6$의 배수가 아닙니다. 따라서 부정은 참이고 원래 조건문은 거짓입니다.
:::

:::check[$\lnot(P \Rightarrow Q)$ 가 참이 되려면 $P$와 $Q$의 진릿값은 어떠해야 하는가?]
$P$가 참이고 $Q$가 거짓이어야 합니다. $\lnot(P \Rightarrow Q) \equiv P \land (\lnot Q)$이고, "그리고"는 두 부분이 모두 참일 때만 참이기 때문입니다. 특히 $P$가 거짓이면 $Q$가 무엇이든 $\lnot(P \Rightarrow Q)$는 거짓입니다.
:::
