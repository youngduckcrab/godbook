---
title: 유리수와 무리수
title_en: Rational and Irrational Numbers
aliases: [rational number, irrational number, 유리수, 무리수]
kind: definition
field: number-theory
msc: ["11A99"]
level: intro
summary: 두 정수의 비 a/b (b ≠ 0)로 쓸 수 있는 실수를 유리수, 그렇지 않은 실수를 무리수라 한다.
requires: [set, quantifiers, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 6.1절 Proving Statements with Contradiction, Definition 6.1, p.139. 기약분수에 관한 설명은 같은 쪽의 √2 증명 안(p.139)
    checked: original
    note: 출처의 정의는 "x = a/b인 a, b ∈ Z가 있으면 유리수, 모든 a, b ∈ Z에 대해 x ≠ a/b이면 무리수"이며 b ≠ 0을 따로 적지 않는다. 아래 정의는 a/b가 의미를 가지도록 b ≠ 0을 명시했다. 출처는 √2의 증명에서 "Let this fraction be fully reduced; in particular, this means that a and b are not both even"라고 하고, 둘 다 짝수이면 2를 약분할 수 있다는 괄호 설명만 붙인다(p.139). 곧 출처는 이 사실을 정식 증명 없이 쓴다. 아래의 "받아들이는 사실"은 이를 분명하게 적은 것이다. 예시와 확인 질문은 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
실수 $x$에 대하여 다음과 같이 정의한다. 실수 전체의 집합을 $\mathbb{R}$로 쓴다.

- $x$가 **유리수**(rational number)인 것은 정확히 $x = \dfrac{a}{b}$인 정수 $a$, $b$($b \ne 0$)가 **존재할** 때이다($\exists a, b \in \mathbb{Z},\ b \ne 0 \text{이고 } x = a/b$).
- $x$가 **무리수**(irrational number)인 것은 정확히 $x$가 유리수가 아닐 때, 곧 $x = a/b$인 정수 $a$, $b$($b \ne 0$)가 하나도 없을 때이다.

유리수 전체의 집합을 $\mathbb{Q}$로 쓴다.

이 사이트는 다음 사실을 증명 없이 받아들인다. 모든 유리수 $x$는 $x = a/b$인 정수 $a$, $b$($b \ne 0$)로서 $a$와 $b$가 둘 다 짝수는 아니도록 쓸 수 있다. 곧 둘 다 짝수인 분수에서 분자와 분모를 $2$로 나누는 일을 되풀이하면, 유한 번 만에 둘 다 짝수는 아닌 분수에 이른다는 것이다.
:::

:::english
For a real number $x$, define the following. The set of real numbers is denoted $\mathbb{R}$.

- $x$ is a **rational number** if and only if there exist integers $a$ and $b$ with $b \ne 0$ such that $x = \dfrac{a}{b}$ ($\exists a, b \in \mathbb{Z},\ b \ne 0 \text{ and } x = a/b$).
- $x$ is an **irrational number** if and only if $x$ is not rational, that is, there are no integers $a$ and $b$ with $b \ne 0$ such that $x = a/b$.

The set of rational numbers is denoted $\mathbb{Q}$.

This site accepts the following fact without proof. Every rational number $x$ can be written as $x = a/b$ with integers $a$ and $b$, $b \ne 0$, such that $a$ and $b$ are not both even. That is, starting from a fraction whose numerator and denominator are both even, repeatedly dividing both by $2$ reaches, after finitely many steps, a fraction whose numerator and denominator are not both even.
:::

## 직관

유리수는 "두 정수의 비로 나타낼 수 있는 수"입니다. 분수 $\tfrac{3}{4}$가 대표적이고, 정수 $n$도 $n = \tfrac{n}{1}$이므로 유리수입니다. 무리수는 실수이면서 그렇게 나타낼 수 없는 수입니다.

같은 유리수를 여러 분수로 쓸 수 있습니다. $\tfrac{3}{4} = \tfrac{6}{8} = \tfrac{-12}{-16}$이 모두 같은 수입니다. 이 가운데 분자와 분모가 둘 다 짝수인 것(예: $\tfrac{6}{8}$)은 $2$로 약분해 줄일 수 있습니다. 위의 받아들인 사실은 이 약분을 계속하면 결국 둘 다 짝수는 아닌 분수에 이른다는 말입니다. 이 사실은 [[sqrt2-is-irrational]]의 증명에서 쓰입니다. 무리수의 예는 그 항목에서 처음 증명합니다. 어떤 수가 무리수임을 보이려면 "그런 정수 $a$, $b$가 하나도 없다"를 증명해야 하므로, 예를 드는 것부터가 정리입니다.

## 예시와 반례

:::example
- $0.75 = \tfrac{3}{4}$이므로 유리수입니다.
- $-5 = \tfrac{-5}{1}$이므로 유리수입니다. 모든 정수 $n$은 $n = \tfrac{n}{1}$이므로 유리수입니다.
- $\tfrac{-7}{-14} = \tfrac{1}{2}$이므로 유리수입니다. 분자와 분모가 모두 음수여도 정의의 $a$, $b$는 정수이기만 하면 됩니다.
- $0 = \tfrac{0}{1}$도 유리수입니다.
:::

:::counterexample
분모가 $0$인 꼴 $\tfrac{5}{0}$은 수를 나타내지 않으므로 이것으로 어떤 수를 유리수라고 할 수 없습니다. 정의에 $b \ne 0$이 들어 있는 이유입니다. 또 정의는 $a$, $b$가 **정수**일 것을 요구하므로, $\tfrac{0.5}{1.5}$처럼 분자와 분모가 정수가 아닌 분수 꼴로 쓴 것만으로는 정의의 조건을 확인한 것이 아닙니다. $\tfrac{0.5}{1.5} = \tfrac{1}{3}$으로 고쳐 써서 정수 $1$, $3$을 얻어야 유리수임이 확인됩니다.
:::

## 확인 질문

:::check[$x = \tfrac{6}{-9}$는 유리수인가? 둘 다 짝수는 아닌 분수로 쓰면?]
$6$, $-9$는 정수이고 $-9 \ne 0$이므로 유리수입니다. $6$과 $-9$를 $3$으로 나누면 $x = \tfrac{2}{-3}$이고, $2$는 짝수이지만 $-3$은 짝수가 아니므로 둘 다 짝수는 아닌 분수입니다.
:::

:::check[분수 $\tfrac{20}{12}$를 둘 다 짝수는 아닌 분수가 될 때까지 $2$로 약분하면?]
$\tfrac{20}{12} = \tfrac{10}{6} = \tfrac{5}{3}$입니다. $5$와 $3$은 둘 다 홀수이므로 멈춥니다.
:::
