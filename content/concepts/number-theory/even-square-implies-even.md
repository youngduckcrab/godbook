---
title: 제곱이 짝수이면 짝수이다
title_en: If a Square Is Even, Then the Integer Is Even
aliases: [even square, 짝수의 제곱근]
kind: proposition
field: number-theory
msc: ["11A07"]
level: intro
summary: 정수 a에 대하여 a의 제곱이 짝수이면 a도 짝수이다.
requires: [divisibility, even-and-odd, odd-square-is-odd, proof-by-contrapositive, contrapositive-law]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 6.2절 Proving Conditional Statements by Contradiction, 명제 "Suppose a ∈ Z. If a² is even, then a is even", p.141
    checked: original
    note: 출처는 이 명제를 귀류법으로 증명한다(p.141). 아래 증명은 대우 증명이며 출처와 방법이 다르다. 출처의 귀류법 증명은 a가 홀수라고 가정하고 a = 2c + 1을 제곱해 a²이 홀수임을 직접 계산하지만, 아래 증명은 같은 계산을 odd-square-is-odd 항목으로 대신한다. 출처는 6.1절 √2 증명(p.139)에서 이 명제를 "앞에서 증명했다(5장 연습문제 1, p.136)"고 인용한다. 출처의 5장 연습문제 1(p.136)은 이 명제를 대우 증명으로 풀라고 하는 문제이며, 아래 증명은 같은 방법이다. 예시와 확인 질문은 새로 만들었다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 증명 없이 받아들이는 사실을 진술에 명시하고 출처 기록과 설명 문장을 보완."
added: 2026-11-16
---

:::statement
$a$가 정수일 때, $a^2$이 [[even-and-odd|짝수]]이면 $a$도 짝수이다.
:::

:::english
Let $a$ be an integer. If $a^2$ is even, then $a$ is even.
:::

## 직관

[[odd-square-is-odd]]는 홀수를 제곱하면 홀수라고 말합니다. 이 명제는 그 말을 뒤집은 것처럼 보이지만, 그냥 뒤집은 것이 아니라 대우입니다. "$a$가 홀수이면 $a^2$도 홀수이다"의 대우는 "$a^2$이 홀수가 아니면 $a$는 홀수가 아니다"이고, 정수는 짝수이거나 홀수이고 둘 다는 아니므로 이는 "$a^2$이 짝수이면 $a$는 짝수이다"와 같은 말입니다.

그래서 이 명제는 [[proof-by-contrapositive]]로 증명합니다. 가정 "$a^2$이 짝수"에서 곧바로 $a$를 뽑아내기는 어렵지만, "$a$가 짝수가 아니다"에서 출발하면 이미 아는 사실을 쓸 수 있습니다.

## 증명

:::idea
$a$가 짝수가 아니면 홀수이고, 홀수의 제곱은 홀수이므로 $a^2$은 짝수가 아니다.
:::

:::hint
"$a^2$이 짝수이면 $a$는 짝수이다"의 대우를 먼저 쓰세요. 가정과 결론이 무엇이 됩니까?
:::

:::hint
$a$가 짝수가 아니라는 가정을 "홀수"로 바꾸어야 이미 증명된 항목을 쓸 수 있습니다. 어떤 사실이 이를 허락합니까?
:::

:::proof
이 명제의 대우는 "$a$가 짝수가 아니면 $a^2$은 짝수가 아니다"이다. [[proof-by-contrapositive]]의 틀에 따라 이를 증명한다.

$a$가 짝수가 아니라고 가정한다. [[even-and-odd]]에서 받아들인 사실에 의해 모든 정수는 짝수이거나 홀수이므로 $a$는 홀수이다. [[odd-square-is-odd]]에 의해 홀수의 제곱은 홀수이므로 $a^2$은 홀수이다. 같은 사실에 의해 짝수이면서 홀수인 정수는 없으므로 $a^2$은 짝수가 아니다. 이로써 대우가 증명되었다.

[[contrapositive-law]]에 의해 대우와 원래 명제는 같은 말이므로, $a^2$이 짝수이면 $a$는 짝수이다. $\blacksquare$
:::

## 예시와 반례

:::example
$a = 14$이면 $a^2 = 196 = 2 \cdot 98$은 짝수이고 $a = 14$도 짝수입니다. 대우 쪽에서 보면 $a = 9$는 짝수가 아니고 $a^2 = 81 = 2 \cdot 40 + 1$도 짝수가 아닙니다.
:::

:::counterexample
"짝수"를 "$4$의 배수"로 바꾼 "$a^2$이 $4$의 배수이면 $a$는 $4$의 배수이다"는 거짓입니다. $a = 2$이면 $a^2 = 4 = 4 \cdot 1$은 $4$의 배수인데, $2 = 4c$이면 $c = 0.5$이므로 $2$는 $4$의 배수가 아닙니다. 이 명제의 증명은 "홀수의 제곱은 홀수이다"와 "정수는 짝수이거나 홀수이다"에 기대고 있어서, $4$의 배수에는 그대로 옮겨 쓸 수 없습니다.
:::

## 확인 질문

:::check[$a$가 정수이고 $a^2$이 짝수이면 $a^2$은 $4$의 배수인가?]
그렇습니다. 이 명제에 의해 $a$는 짝수이므로 $a = 2c$인 정수 $c$가 있고, $a^2 = 4c^2$입니다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $c^2$은 정수이므로 $a^2$은 $4$의 배수입니다.
:::

:::check[$a$가 정수이고 $a^2 = 100$이면 $a$에 대해 무엇을 말할 수 있는가?]
$100 = 2 \cdot 50$이므로 $a^2$은 짝수이고, 이 명제에 의해 $a$는 짝수입니다. 실제로 $a = 10$ 또는 $a = -10$입니다.
:::
