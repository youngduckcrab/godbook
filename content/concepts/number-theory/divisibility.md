---
title: 나누어떨어짐 (약수와 배수)
title_en: Divisibility
aliases: [divides, divisor, multiple, 약수, 배수, 나눈다]
kind: definition
field: number-theory
msc: ["11A05"]
level: intro
summary: 정수 a, b에 대하여 b = ac인 정수 c가 있으면 a는 b를 나눈다(a | b)고 한다.
requires: [set, quantifiers, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 4.2절 Definitions, Definition 4.4, p.116
    checked: original
    note: 출처의 정의는 "b = ac인 c ∈ Z가 있으면"의 꼴이다. 정의를 쌍조건문으로 읽는다는 설명은 앞 쪽(p.115)에 있으며, 이에 따라 아래 진술은 "정확히 ~일 때"로 적었다. 문장과 수의 구별(a | b는 문장, 몫은 수)은 출처 p.116의 설명을 바탕으로 했고 예는 새로 골랐다. a = 0인 경우의 설명은 출처가 p.116에서 0의 약수 집합이 Z라고 적은 것을 확인하고 정의에서 직접 풀어 쓴 것이다. 예시 중 −4 | 20, 6 ∤ 15는 출처 p.116의 예(−6 | 6, 6 ∤ 9)와 같은 꼴에 수를 바꾼 것이고, 나머지 예시와 확인 질문은 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
$a$와 $b$가 정수일 때, 정확히 $b = ac$인 정수 $c$가 **존재할**($\exists c \in \mathbb{Z},\ b = ac$) 때 "$a$가 $b$를 **나눈다**(divides)"고 하고 $a \mid b$로 쓴다. 이때 $a$를 $b$의 **약수**(divisor), $b$를 $a$의 **배수**(multiple)라고도 한다.

$a$가 $b$를 나누지 않으면 $a \nmid b$로 쓴다. 이는 $b = ac$를 만족하는 정수 $c$가 하나도 없다는 뜻이다.
:::

:::english
Let $a$ and $b$ be integers. We say that $a$ **divides** $b$, and write $a \mid b$, exactly when there exists an integer $c$ with $b = ac$ ($\exists c \in \mathbb{Z},\ b = ac$). In this case $a$ is also called a **divisor** of $b$, and $b$ is called a **multiple** of $a$.

If $a$ does not divide $b$, we write $a \nmid b$. This means that there is no integer $c$ with $b = ac$.
:::

## 직관

$b = ac$는 $b$가 $a$의 정수배라는 뜻입니다. $a \ne 0$일 때는 "$b$를 $a$씩 묶으면 남김없이 떨어진다"는 그림으로 생각할 수 있습니다. $a = 0$인 경우는 아래 예시에서 따로 다룹니다. 약수와 배수는 같은 관계를 양쪽에서 부르는 이름입니다.

$a \mid b$는 참인지 거짓인지 따질 수 있는 **문장**이고, 몫 $b/a$는 **수**입니다. $4 \mid 12$는 참인 명제이고 $12/4 = 3$은 수입니다. $4 \mid 10$은 거짓인 명제이지만 $10/4 = 2.5$는 여전히 수입니다. 둘을 섞어 쓰지 않도록 주의합니다.

## 예시와 반례

:::example
- $7 \mid 42$입니다. $42 = 7 \cdot 6$이고 $6$이 정수이기 때문입니다.
- $-4 \mid 20$입니다. $20 = (-4) \cdot (-5)$이고 $-5$가 정수입니다. 약수가 음수여도 됩니다.
- 모든 정수 $n$에 대해 $n \mid 0$입니다. $0 = n \cdot 0$이고 $0$은 정수이기 때문입니다.
- 정수 $b$에 대하여 $0 \mid b$인 것은 정확히 $b = 0$일 때입니다. 모든 정수 $c$에 대해 $0 \cdot c = 0$이므로 $b = 0 \cdot c$이면 $b = 0$이고, 거꾸로 $0 = 0 \cdot 0$이므로 $0 \mid 0$입니다. $a \mid b$는 곱셈으로 정의되므로 $0 \mid 0$은 참이지만, 이것이 $0 \div 0$을 계산할 수 있다는 뜻은 아닙니다.
:::

:::counterexample
$6 \nmid 15$입니다. $15 = 6c$이면 $c = 2.5$여야 하므로 정수 $c$가 없습니다. 반면 $3 \mid 15$입니다. $15 = 3 \cdot 5$입니다. 나누어떨어짐은 순서가 중요합니다. $3 \mid 15$이지만 $15 \nmid 3$입니다. $3 = 15c$이면 $c = 0.2$여야 하기 때문입니다.
:::

## 확인 질문

:::check[$n$이 정수일 때 $n \mid 5n$인가?]
그렇습니다. $5n = n \cdot 5$이고 $5$는 정수이므로 $c = 5$로 잡으면 정의가 만족됩니다. $n = 0$이어도 $0 = 0 \cdot 5$이므로 성립합니다.
:::

:::check[짝수인 정수를 "나누어떨어짐"의 말로 나타내면?]
정수 $n$이 [[even-and-odd|짝수]]라는 것은 $n = 2a$인 정수 $a$가 존재한다는 뜻이고, 이는 $n = 2 \cdot a$이므로 정확히 $2 \mid n$이라는 뜻입니다. 곧 짝수는 $2$의 배수입니다.
:::
