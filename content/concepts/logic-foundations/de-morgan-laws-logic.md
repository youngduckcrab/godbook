---
title: 드 모르간 법칙 (논리)
title_en: De Morgan's Laws (Logic)
aliases: [De Morgan's laws, DeMorgan's laws, 드모르간 법칙]
kind: theorem
field: logic-foundations
msc: ["03B05"]
level: intro
summary: "\"그리고\"의 부정은 부정들의 \"또는\"이고, \"또는\"의 부정은 부정들의 \"그리고\"이다."
requires: [logical-connectives, logical-equivalence]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 2.6절, Fact 2.1 (DeMorgan's Laws), p.51
    checked: original
    note: 출처는 첫째 법칙을 진리표로 확인하고 둘째 법칙은 연습문제로 남긴다. 여기서는 둘 다 진리표로 증명했다.
  - ref: mactutor-de-morgan
    loc: 생몰 정보와 본문 중 업적을 요약한 단락
    checked: original
    note: 역사와 맥락 부분의 근거.
status: reviewed
review_note: "2026-11-16 독립 검토. 수학적 오류 없음. 역사 서술을 출처의 표현에 맞춤."
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여 다음 두 [[logical-equivalence]]가 성립한다.

1. $\lnot(P \land Q) \equiv (\lnot P) \lor (\lnot Q)$
2. $\lnot(P \lor Q) \equiv (\lnot P) \land (\lnot Q)$
:::

:::english
For statements $P$ and $Q$, the following two logical equivalences hold.

1. $\lnot(P \land Q) \equiv (\lnot P) \lor (\lnot Q)$
2. $\lnot(P \lor Q) \equiv (\lnot P) \land (\lnot Q)$
:::

## 직관

첫째 법칙을 말로 풀어 봅시다. "$P$와 $Q$가 둘 다 참이다"가 **아니라는** 것은 무슨 뜻일까요? 둘 중 적어도 하나가 거짓이라는 뜻입니다. 즉 "$P$가 거짓이거나 $Q$가 거짓이다"입니다.

둘째 법칙도 마찬가지입니다. "$P$와 $Q$ 중 적어도 하나가 참이다"가 아니라는 것은 둘 다 거짓이라는 뜻입니다.

기억하는 요령은 이렇습니다. 부정 기호를 괄호 안으로 밀어 넣으면 각 명제에 부정이 붙고, **$\land$와 $\lor$가 서로 뒤바뀝니다.**

## 증명

:::idea
동치의 정의가 "진리표의 모든 줄에서 진릿값이 일치한다"이므로, 양변을 한 진리표에 적어 네 줄을 모두 비교하면 됩니다.
:::

:::hint
첫째 법칙을 위해 $P$, $Q$, $\lnot P$, $\lnot Q$, $P \land Q$ 열을 먼저 채우세요. 양변은 이 열들로부터 바로 계산됩니다.
:::

:::hint
둘째 법칙은 $P \land Q$ 열 대신 $P \lor Q$ 열을 쓰면 같은 방법으로 됩니다.
:::

:::proof
**첫째 법칙.** $P$, $Q$의 진릿값 조합 네 가지에 대해 양변을 계산한다.

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ | $P \land Q$ | $\lnot(P \land Q)$ | $(\lnot P) \lor (\lnot Q)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $F$ | $F$ | $T$ | $F$ | $F$ |
| $T$ | $F$ | $F$ | $T$ | $F$ | $T$ | $T$ |
| $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ |
| $F$ | $F$ | $T$ | $T$ | $F$ | $T$ | $T$ |

마지막 두 열이 네 줄 모두에서 일치하므로 $\lnot(P \land Q) \equiv (\lnot P) \lor (\lnot Q)$ 이다.

**둘째 법칙.** 같은 방법으로 계산한다.

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ | $P \lor Q$ | $\lnot(P \lor Q)$ | $(\lnot P) \land (\lnot Q)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $F$ | $F$ | $T$ | $F$ | $F$ |
| $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $F$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $T$ | $F$ | $T$ | $T$ |

마지막 두 열이 네 줄 모두에서 일치하므로 $\lnot(P \lor Q) \equiv (\lnot P) \land (\lnot Q)$ 이다.
:::

## 예시와 반례

:::example
정수 $x$에 대하여 "$x$는 짝수이고 $x > 10$이다"의 부정은 "$x$는 짝수가 아니거나 $x \le 10$이다"입니다. $x = 7$은 첫째 조건으로, $x = 4$는 둘째 조건으로 이 부정을 만족합니다.
:::

:::counterexample
흔한 실수는 연결사를 바꾸지 않고 부정만 나누어 붙이는 것입니다. $\lnot(P \land Q)$와 $(\lnot P) \land (\lnot Q)$는 동치가 아닙니다. $P$가 참이고 $Q$가 거짓이면 앞의 것은 참이지만 뒤의 것은 거짓입니다.
:::

## 역사와 맥락

이 법칙의 이름은 수학자 오거스터스 드 모르간(Augustus De Morgan, 1806–1871)에게서 왔습니다. MacTutor 수학사 아카이브의 전기는 그가 이 법칙을 도입했으며, 그의 가장 큰 기여는 수리논리학을 개혁한 데 있다고 적고 있습니다.

같은 모양의 법칙이 집합에 대해서도 성립합니다. [[de-morgan-laws-sets|집합의 드 모르간 법칙]]을 보세요.

## 확인 질문

:::check["나는 수학과 물리를 둘 다 좋아한다" 의 부정을 드 모르간 법칙으로 써 보라.]
"나는 수학을 좋아하지 않거나 물리를 좋아하지 않는다"입니다. "둘 다 좋아하지 않는다"는 부정이 아닙니다. 그것은 $(\lnot P) \land (\lnot Q)$에 해당하며, 원래 문장의 부정보다 더 강한 주장입니다.
:::

:::check[$\lnot(P \lor Q)$ 가 참임을 알면 $P$와 $Q$ 각각에 대해 무엇을 알 수 있는가?]
둘째 법칙에 의해 $(\lnot P) \land (\lnot Q)$가 참이므로, $P$도 거짓이고 $Q$도 거짓입니다.
:::
