---
title: √2는 무리수이다
title_en: The Square Root of 2 Is Irrational
aliases: [irrationality of the square root of 2, 루트 2는 무리수, 2의 제곱근은 무리수]
kind: theorem
field: number-theory
msc: ["11J72"]
level: intro
summary: 제곱하여 2가 되는 실수는 유리수가 아니다.
requires: [rational-and-irrational-numbers, even-square-implies-even, proof-by-contradiction, even-and-odd]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 6.1절 Proving Statements with Contradiction, 명제 "The number √2 is irrational", p.139
    checked: original
    note: 출처와 같은 방식의 귀류법 증명이다. 출처는 "√2가 무리수가 아니라고 가정한다"로 시작하고 아래 증명은 같은 가정을 "x² = 2인 실수 x가 유리수라고 가정한다"로 쓴다. 출처는 a²이 짝수이면 a가 짝수라는 사실을 "앞에서 증명했다(5장 연습문제 1, p.136)"고 인용하며, 아래 증명은 이를 even-square-implies-even 항목으로 인용한다. 출처는 기약분수로 쓸 수 있다는 사실을 괄호 설명만으로 쓰며(p.139), 이 사이트는 이를 rational-and-irrational-numbers의 statement에서 증명 없이 받아들인다. 출처의 모순은 "b is even and b is odd"이고, 아래 모순은 "a와 b가 둘 다 짝수이다"와 그 부정이다. 출처는 √2의 존재를 따로 다루지 않으므로, 이 사이트는 존재를 받아들인다고 진술에 적었다. 출처의 진술은 "The number √2 is irrational"이고, 아래 진술은 "x² = 2인 실수 x는 유리수가 아니다" 꼴로 더 정확하게 썼다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 증명 없이 받아들이는 사실을 진술에 명시하고 출처 기록과 설명 문장을 보완."
added: 2026-11-16
---

:::statement
$x$가 실수이고 $x^2 = 2$이면 $x$는 [[rational-and-irrational-numbers|무리수]]이다. 곧 제곱하여 $2$가 되는 유리수는 없다.

이 사이트는 제곱하여 $2$가 되는 양의 실수가 꼭 하나 있음을 증명 없이 받아들이고 그 수를 $\sqrt{2}$로 쓴다. 위 명제에 의해 $\sqrt{2}$는 무리수이다.
:::

:::english
Let $x$ be a real number. If $x^2 = 2$, then $x$ is irrational. That is, no rational number has square $2$.

This site accepts without proof that there is exactly one positive real number whose square is $2$, and denotes it by $\sqrt{2}$. By the statement above, $\sqrt{2}$ is irrational.
:::

## 직관

$\sqrt{2}$가 정수 $a$, $b$($b \ne 0$)로 $\tfrac{a}{b}$라고 해 봅시다. 제곱하면 $a^2 = 2b^2$이므로 $a^2$이 짝수이고, 따라서 $a$가 짝수입니다. $a = 2c$로 쓰고 다시 대입하면 $b^2 = 2c^2$이 되어 $b$도 짝수가 됩니다. 분자와 분모가 둘 다 짝수라는 결론이 나옵니다.

그런데 처음에 분수를 둘 다 짝수는 아니게 약분해 두었으므로 이는 모순입니다. 한 번 약분한 분수에서 약분할 수 있다는 결론이 나온 셈입니다. 이 증명은 [[proof-by-contradiction]]의 조건문 꼴을 씁니다. 가정 "$x$가 실수이고 $x^2 = 2$"에 더해 결론 "$x$가 무리수이다"가 거짓이라고, 곧 $x$가 유리수라고 가정하고 모순을 찾습니다.

## 증명

:::idea
$x = a/b$를 둘 다 짝수는 아닌 분수로 쓰고 $x^2 = 2$에서 $a$와 $b$가 모두 짝수임을 이끌어내어 모순을 얻는다.
:::

:::hint
유리수라고 가정한 $x$를 분수로 쓸 때, 분자와 분모가 둘 다 짝수는 아니도록 쓸 수 있다는 사실([[rational-and-irrational-numbers]]에서 받아들임)을 첫머리에 쓰세요.
:::

:::hint
$x^2 = 2$를 $a$, $b$로 쓰면 $a^2 = 2b^2$입니다. 이 식에서 먼저 $a$가 짝수임을, 그다음 $b$가 짝수임을 보이세요. [[even-square-implies-even]]을 두 번 씁니다.
:::

:::proof
[[proof-by-contradiction]]의 조건문 꼴에 따라 $x$가 실수이고 $x^2 = 2$이며 $x$가 무리수가 아니라고, 곧 유리수라고 가정한다.

[[rational-and-irrational-numbers]]에서 받아들인 사실에 의해 $x = a/b$인 정수 $a$, $b$($b \ne 0$)를 $a$와 $b$가 둘 다 짝수는 아니도록 잡을 수 있다. $x^2 = 2$이므로 $(a/b)^2 = a^2/b^2 = 2$이고, $b \ne 0$이므로 양변에 $b^2$을 곱하면 $a^2 = 2b^2$이다.

정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $b^2$은 정수이다. 따라서 $a^2 = 2b^2$은 짝수이다. [[even-square-implies-even]]에 의해 $a$는 짝수이므로 $a = 2c$인 정수 $c$가 있다. 이를 $a^2 = 2b^2$에 대입하면 $4c^2 = 2b^2$이고 양변을 $2$로 나누면 $b^2 = 2c^2$이다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $c^2$은 정수이고, 따라서 $b^2$은 짝수이고, [[even-square-implies-even]]에 의해 $b$도 짝수이다.

따라서 $a$와 $b$는 둘 다 짝수이다. 그런데 $a$와 $b$는 둘 다 짝수는 아니도록 잡았다. $C$를 "$a$와 $b$는 둘 다 짝수이다"로 잡으면 $C \land (\lnot C)$가 나와 모순이다. 따라서 $x$가 유리수라는 가정이 틀렸다. $x$는 무리수이다. $\blacksquare$
:::

## 예시와 반례

:::example
$\tfrac{99}{70}$는 $2$에 아주 가까운 제곱을 줍니다. 제곱하면 $\tfrac{99^2}{70^2} = \tfrac{9801}{4900}$이고, $2 = \tfrac{9800}{4900}$이므로 $\tfrac{9801}{4900} \ne 2$입니다. 증명은 어떤 분수로도 이런 어긋남이 생긴다는 것을 보입니다. $a^2 = 2b^2$을 만족하는 정수 $a$, $b$($b \ne 0$)가 있다면 둘 다 짝수여야 하는데, 둘 다 짝수는 아니도록 줄여 둔 분수에서는 그럴 수 없습니다.
:::

:::counterexample
같은 증명을 "$x^2 = 4$이면 $x$는 무리수이다"에 흉내 내면 어디가 막힙니까? $x = \tfrac{a}{b}$로 쓰면 $a^2 = 4b^2$이고, $a$가 짝수가 되어 $a = 2c$를 대입하면 $4c^2 = 4b^2$, 곧 $c^2 = b^2$이 됩니다. 이제 $b$가 짝수라는 결론이 나오지 않습니다. 실제로 $x = 2 = \tfrac{2}{1}$은 유리수이며, $a = 2$, $b = 1$은 둘 다 짝수는 아닌 분수입니다. 증명의 모순은 $b^2 = 2c^2$ 꼴에서 나오는데, $x^2 = 4$에서는 그 꼴이 나오지 않습니다.
:::

## 확인 질문

:::check[증명에서 $a$와 $b$를 "둘 다 짝수는 아니도록" 잡은 것은 어느 단계에서 쓰였는가?]
마지막에 $a$와 $b$가 둘 다 짝수라는 결론이 나왔을 때 모순을 만드는 데 쓰였습니다. 이 조건이 없으면 $a$, $b$가 둘 다 짝수라는 결론은 모순이 아닙니다. 예컨대 $\tfrac{6}{8}$처럼 약분하지 않은 분수일 수 있기 때문입니다.
:::

:::check[증명에서 $a^2 = 2b^2$으로부터 $a$가 짝수라는 결론은 어떤 사실을 쓰는가?]
$a^2 = 2 \cdot b^2$이고 $b^2$이 정수이므로 $a^2$이 짝수입니다. 그 뒤 [[even-square-implies-even]]을 씁니다. $a^2$이 짝수라는 것에서 $a$가 짝수라는 것은 정의만으로 곧바로 나오지 않고, [[even-square-implies-even]]이 그 다리를 놓습니다.
:::
