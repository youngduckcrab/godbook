---
title: 합동 (mod n)
title_en: Congruence Modulo n
aliases: [congruent modulo n, 합동식, 법 n에 대한 합동, 모듈러 합동]
kind: definition
field: number-theory
msc: ["11A07"]
level: intro
summary: 정수 a, b와 자연수 n에 대하여 n이 a − b를 나눌 때, 그리고 그때에만, a와 b는 n을 법으로 합동이라 하고 a ≡ b (mod n)으로 쓴다.
requires: [divisibility, even-and-odd, logical-equivalence]
sources:
  - ref: hammack-book-of-proof
    loc: 5.2절 Congruence of Integers, Definition 5.1, p.131 (예 5.1과 같은 나머지에 관한 설명도 p.131)
    checked: original
    note: "출처의 정의는 '정수 a, b와 n ∈ ℕ에 대하여 n | (a − b)이면 a와 b는 n을 법으로 합동이다'이다. 이 사이트는 이를 '정확히 ~일 때'로 읽어 썼고, ℕ은 1부터 시작하는 자연수이다. 출처는 같은 쪽에서 합동을 'n으로 나눈 나머지가 같다'는 뜻으로 설명하고 그 역은 5장 연습문제 32번에 맡긴다. 이 사이트의 정의는 나머지를 쓰지 않으며, 직관의 시계 비유와 예시는 새로 만들었다. 기호 ≡가 논리적 동치에도 쓰인다는 구별은 이 사이트에서 덧붙였다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
$a$, $b$가 정수이고 $n$이 자연수($n \in \mathbb{N} = \{1, 2, 3, \dots\}$)라 하자. $n \mid (a - b)$일 때, 그리고 그때에만, $a$와 $b$는 $n$을 법으로 **합동**(congruent modulo $n$)이라 하고 $a \equiv b \pmod n$으로 쓴다. 합동이 아니면 $a \not\equiv b \pmod n$으로 쓴다.

여기서 $n \mid (a - b)$는 [[divisibility|나누어떨어짐]]에서 정수 $n$이 정수 $a - b$를 나눈다는 뜻이므로, 정확히 $a - b = nc$인 정수 $c$가 존재할 때이다. ($a - b$는 정수끼리의 차이므로 정수이다. 이는 [[even-and-odd]]에서 증명 없이 받아들인 기본 성질이다.)

기호 $\equiv$는 [[logical-equivalence]]에서는 명제 사이의 논리적 동치를 뜻한다. 합동의 $\equiv$는 항상 $(\bmod\ n)$이 뒤따르는 정수 사이의 관계이므로 구별된다.
:::

:::english
Let $a$ and $b$ be integers and let $n$ be a natural number ($n \in \mathbb{N} = \{1, 2, 3, \dots\}$). We say that $a$ and $b$ are **congruent modulo $n$**, and write $a \equiv b \pmod n$, exactly when $n \mid (a - b)$. If they are not congruent, we write $a \not\equiv b \pmod n$.

Here $n \mid (a - b)$ means that the integer $n$ divides the integer $a - b$; this holds exactly when there exists an integer $c$ with $a - b = nc$. (The difference $a - b$ of integers is an integer; this is a basic property accepted without proof.)

The symbol $\equiv$ is also used for logical equivalence between statements. The $\equiv$ of congruence is always followed by $(\bmod\ n)$ and relates integers, so the two uses can be told apart.
:::

## 직관

시계에서 $15$시와 $3$시는 바늘이 같은 자리를 가리킵니다. $15 - 3 = 12$는 $12$의 배수이므로 $15 \equiv 3 \pmod{12}$입니다. $n$을 법으로 합동이라는 것은 두 수의 차가 $n$의 배수라는 것, 곧 한 수에서 $n$씩 건너뛰면 다른 수에 닿는다는 뜻입니다. 이 비유에서 시계의 한 바퀴가 $n$에 해당합니다.

출처는 정의 바로 뒤에서 합동을 "$n$으로 나눈 나머지가 같다"는 말로 풀어 설명합니다. 이 항목의 정의는 나머지를 쓰지 않고 나누어떨어짐만 씁니다. 차 $a - b$가 음수여도 [[divisibility|나누어떨어짐]]의 정의에 따라 $a - b = nc$인 정수 $c$만 있으면 됩니다.

## 예시와 반례

:::example
- $17 \equiv 5 \pmod 6$입니다. $17 - 5 = 12 = 6 \cdot 2$이고 $2$가 정수이기 때문입니다.
- $-3 \equiv 7 \pmod 5$입니다. $-3 - 7 = -10 = 5 \cdot (-2)$이고 $-2$가 정수입니다. 차가 음수여도 됩니다.
- 모든 정수 $a$와 모든 자연수 $n$에 대하여 $a \equiv a \pmod n$입니다. $a - a = 0 = n \cdot 0$이고 $0$이 정수이기 때문입니다.
- 모든 정수 $a, b$에 대하여 $a \equiv b \pmod 1$입니다. $a - b = 1 \cdot (a - b)$이고 $a - b$가 정수이기 때문입니다.
- 정수 $a$, $b$에 대하여 $a \equiv b \pmod 2$인 것은 정확히 $a - b$가 짝수일 때입니다. $2 \mid (a - b)$는 $a - b = 2c$인 정수 $c$가 있다는 뜻이고, 이것이 [[even-and-odd|짝수와 홀수 항목]]의 짝수의 정의이기 때문입니다.
:::

:::counterexample
$11 \not\equiv 2 \pmod 6$입니다. $11 - 2 = 9$이고 $9 = 6c$이면 $c = 1.5$여야 하므로 정수 $c$가 없어 $6 \nmid 9$이기 때문입니다. 한편 $11 \equiv 2 \pmod 3$입니다. $9 = 3 \cdot 3$입니다. 같은 두 수가 법에 따라 합동일 수도, 아닐 수도 있습니다.
:::

:::counterexample[$\equiv$ 와 $=$ 는 다르다]
$17 \equiv 5 \pmod 6$이지만 $17 \ne 5$입니다. 합동은 같음이 아니라 "차가 $n$의 배수"라는 약한 조건입니다.
:::

## 확인 질문

:::check[$20 \equiv 8 \pmod 6$인가? $5 \equiv -5 \pmod 4$인가?]
$20 - 8 = 12 = 6 \cdot 2$이므로 $20 \equiv 8 \pmod 6$입니다. $5 - (-5) = 10$이고 $10 = 4c$이면 $c = 2.5$이므로 $4 \nmid 10$입니다. 따라서 $5 \not\equiv -5 \pmod 4$입니다.
:::

:::check[정수 $a, b$와 자연수 $n$에 대하여 $a \equiv b \pmod n$이면 $b \equiv a \pmod n$인가?]
그렇습니다. $a - b = nc$인 정수 $c$가 있으면 $b - a = n(-c)$이고 $-c$도 정수이므로 $n \mid (b - a)$입니다. 같은 계산이 합동이 동치관계임을 보이는 뒤의 항목에서 쓰입니다.
:::
