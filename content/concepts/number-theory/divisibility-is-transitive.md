---
title: 나누어떨어짐의 추이성
title_en: Transitivity of Divisibility
aliases: [transitivity of divisibility, 약수의 약수]
kind: proposition
field: number-theory
msc: ["11A05"]
level: intro
summary: 정수 a, b, c에 대하여 a가 b를 나누고 b가 c를 나누면 a가 c를 나눈다.
requires: [divisibility, direct-proof, even-and-odd]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 4.3절 Direct Proof, 명제 "Let a, b and c be integers. If a | b and b | c, then a | c", p.121
    checked: original
    note: 출처와 같은 방식의 직접 증명이다. 곧 b = ad와 c = be를 합쳐 c = a(de)를 얻는다. 문장은 직접 썼다. 출처가 쓰는 사실인 "정수끼리 곱하면 정수"(Fact 4.1, p.117)는 출처가 증명 없이 받아들이는 것이며(출처 원문에 "we accept the following fact without justification or proof"로 적혀 있다), 아래 증명도 같은 사실을 증명 없이 쓰며, 이 사이트는 even-and-odd 항목에서 이를 받아들인다고 밝혔다. "추이성"이라는 이름은 출처의 이 곳에 나오지 않는다. 널리 쓰이는 이름이어서 붙였다. 예시와 확인 질문은 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
$a$, $b$, $c$가 정수일 때, $a \mid b$이고 $b \mid c$이면 $a \mid c$이다.
:::

:::english
Let $a$, $b$, and $c$ be integers. If $a \mid b$ and $b \mid c$, then $a \mid c$.
:::

## 직관

"$a$가 $b$를 나눈다"는 $b$가 $a$의 정수배라는 뜻입니다. $b$가 $a$의 정수배이고 $c$가 $b$의 정수배라면, $c$는 "$a$의 정수배의 정수배"입니다. 작은 상자 하나에 연필이 $a$자루 들어 있고, 큰 상자 하나에 작은 상자가 $d$개 들어 있어 큰 상자 하나의 연필 수가 $b = ad$라 합시다. 큰 상자 $e$개에 든 연필 수 $c = be$는 작은 상자 $de$개에 든 수이므로 역시 $a$의 배수입니다.

중간 단계 $b$를 거쳐도 정수배라는 성질이 유지된다는 것이 이 명제의 내용입니다.

이처럼 $a$와 $b$ 사이, $b$와 $c$ 사이에 성립하는 관계가 $a$와 $c$ 사이로 넘어가는 성질을 **추이성**(transitivity)이라 부릅니다.

[[direct-proof]]로 증명합니다. 가정 "$a \mid b$이고 $b \mid c$"를 [[divisibility]]의 정의로 풀어 쓰고, 결론 "$a \mid c$"가 되려면 $c = a \cdot (\text{정수})$ 꼴이어야 함을 보고 둘을 잇습니다.

## 증명

:::idea
$b = ad$와 $c = be$를 정의로 얻고, $b$를 $ad$로 바꿔 넣어 $c = a(de)$를 만든다. $de$가 정수이므로 $a \mid c$이다.
:::

:::hint
가정 두 개를 모두 정의로 풀어 쓰세요. 이때 두 정의에 나오는 "어떤 정수"는 서로 무관하므로 같은 문자를 쓰면 안 됩니다.
:::

:::hint
결론 $a \mid c$가 되려면 $c = a \cdot (\text{정수})$ 꼴로 쓸 수 있어야 합니다. $c = be$에서 $b$를 바꿔 넣어 보세요.
:::

:::proof
[[direct-proof]]의 틀에 따라 $a \mid b$이고 $b \mid c$라고 가정한다.

$a \mid b$이므로 [[divisibility]]의 정의에 의해 $b = ad$인 정수 $d$가 있다. $b \mid c$이므로 같은 정의에 의해 $c = be$인 정수 $e$가 있다. 두 정수 $d$, $e$는 서로 다른 가정에서 따로 얻은 것이므로 다른 문자를 썼다.

$c = be$의 $b$에 $b = ad$를 대입하면 $c = (ad)e$이다. 곱셈의 결합법칙에 의해 $(ad)e = a(de)$이므로 $c = a(de)$이다. $d$와 $e$가 정수이므로 정수의 곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $de$는 정수이다. 따라서 $c = ax$이고 $x = de$는 정수이다. 정의에 의해 $a \mid c$이다. $\blacksquare$
:::

## 예시와 반례

:::example
$3 \mid 12$이고 $12 \mid 60$이므로 이 명제에 의해 $3 \mid 60$입니다. 증명의 문자로 보면 $12 = 3 \cdot 4$에서 $d = 4$, $60 = 12 \cdot 5$에서 $e = 5$이고, $60 = 3 \cdot (4 \cdot 5) = 3 \cdot 20$입니다.

$-2 \mid 6$이고 $6 \mid 0$이므로 $-2 \mid 0$입니다. $6 = (-2)(-3)$에서 $d = -3$, $0 = 6 \cdot 0$에서 $e = 0$이고, $0 = (-2)(-3 \cdot 0)$입니다. 음수와 $0$이 섞여도 성립합니다.
:::

:::counterexample
가정 하나를 빼면 깨집니다.

- $b \mid c$를 뺀 경우: $a = 2$, $b = 4$, $c = 7$이면 $a \mid b$는 참이지만 $4 \nmid 7$($7 = 4k$이면 $k = 1.75$)이고, 결론 $2 \mid 7$도 거짓입니다. $7 = 2k$이면 $k = 3.5$이기 때문입니다.
- $a \mid b$를 뺀 경우: $a = 3$, $b = 4$, $c = 8$이면 $b \mid c$는 참($8 = 4 \cdot 2$)이지만 $3 \nmid 4$($4 = 3k$이면 $k = 4/3$)이고, 결론 $3 \mid 8$도 거짓입니다. $8 = 3k$이면 $k = 8/3$이기 때문입니다.

두 가정이 모두 있어야 $b$를 사이에 두고 $a$와 $c$를 이을 수 있습니다.
:::

## 확인 질문

:::check[$5 \mid 20$이고 $20 \mid 100$이다. 증명의 $d$, $e$와 $c = ax$의 $x$를 구하라.]
$20 = 5 \cdot 4$이므로 $d = 4$, $100 = 20 \cdot 5$이므로 $e = 5$입니다. $100 = 5 \cdot (4 \cdot 5)$이므로 $x = de = 20$입니다.
:::

:::check[증명에서 $d$와 $e$를 같은 문자 하나로 쓰면 왜 안 되는가?]
$a \mid b$에서 얻은 정수와 $b \mid c$에서 얻은 정수가 같다는 보장이 없기 때문입니다. 예를 들어 $2 \mid 6$에서는 $6 = 2 \cdot 3$이고 $6 \mid 12$에서는 $12 = 6 \cdot 2$이므로 두 정수는 $3$과 $2$로 다릅니다. 같은 문자를 쓰면 실제로는 성립하지 않는 $d = e$를 몰래 가정하게 됩니다.
:::
