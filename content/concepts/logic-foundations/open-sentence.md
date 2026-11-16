---
title: 열린 문장
title_en: Open Sentence
aliases: [open sentence, 명제함수, 조건, 변수가 있는 문장]
kind: definition
field: logic-foundations
msc: ["03B10"]
level: intro
summary: 변수의 값이 정해져야 참·거짓이 정해지는 문장.
requires: [proposition, set, subset]
sources:
  - ref: hammack-book-of-proof
    loc: 2.1절 Statements, pp.36–37 (변수가 있는 문장의 표기 P(x)는 p.36, 열린 문장의 정의는 p.36, 변수가 함수인 예는 p.37)
    checked: original
    note: 출처는 statement 라는 말을 쓰고, 이 사이트는 명제라 부른다. "명제함수"라는 별칭은 출처에 나오지 않는다. 예시와 확인 질문은 새로 만들었다. 반례의 '6의 배수이면 3의 배수' 문장은 출처 p.36의 예(6의 배수이면 짝수)를 바탕으로 결론을 바꾼 것이다. '모든 x에 대하여가 생략된 것으로 읽는다'는 설명은 p.36에 없고 이 사이트에서 덧붙였다.
status: reviewed
review_note: "2026-11-16 독립 검토 2회. 정의 기준을 뒤 항목과 맞게 고치고 출처에서 가져온 예를 사실대로 밝힘."
added: 2026-11-16
---

:::statement
**열린 문장**(open sentence)은 하나 이상의 **변수**(variable)를 포함하는 문장으로, 변수의 값이 정해져야 비로소 참·거짓이 정해지는 것이다. 값이 정해지기 전에는 [[proposition]]가 아니다. 값에 따라 진릿값이 달라지는 것이 보통이지만, 모든 값에서 참이거나 모든 값에서 거짓인 문장도 열린 문장일 수 있다.

- 변수가 $x$ 하나인 열린 문장은 $P(x)$로, 변수가 $x$, $y$ 두 개인 열린 문장은 $P(x, y)$로 쓰는 식으로, 어떤 변수에 관한 문장인지를 드러낼 수 있다.
- 변수는 수일 필요가 없다. 함수, 집합 등 어떤 대상이든 변수가 될 수 있다.
- 변수에 구체적인 값을 정해 넣으면, 참이거나 거짓인 명제가 된다.
:::

:::english
An **open sentence** is a sentence that contains one or more **variables** and whose truth or falsity is settled only once values are given to the variables; before that it is not a statement. Usually the truth value varies with the values, but a sentence that is true for all values, or false for all values, may also be an open sentence.

- An open sentence in one variable $x$ may be written $P(x)$, and one in two variables $x$ and $y$ may be written $P(x, y)$, and so on, to show which variables it is about.
- A variable need not be a number. Functions, sets, or any other kind of object can serve as variables.
- Once specific values are assigned to the variables, the sentence becomes a statement that is either true or false.
:::

## 직관

"□는 $3$의 배수이다"처럼 빈칸이 뚫린 문장을 생각해 보세요. 빈칸이 채워지기 전에는 참인지 거짓인지 물을 수 없습니다. 빈칸에 $6$을 넣으면 참인 명제가, $10$을 넣으면 거짓인 명제가 됩니다. 열린 문장의 변수가 바로 이 빈칸입니다.

비유가 맞아떨어지는 곳은 "빈칸을 채워야 비로소 명제가 된다"는 점입니다. 다만 빈칸에 **무엇이든** 넣을 수 있는 것은 아닙니다. "□는 $3$의 배수이다"의 빈칸에 "고양이"를 넣으면 말이 되지 않으므로, 변수가 어떤 범위의 대상을 나타내는지를 함께 정해 두어야 합니다. 이 항목의 예시에서 "정수 $x$"처럼 범위를 밝히는 것은 그 때문입니다. 빈칸에 무엇을 넣든 결과가 늘 참(또는 늘 거짓)인 문장도 있지만, 값을 정해야 참·거짓이 정해진다는 점은 마찬가지이므로 열린 문장으로 봅니다.

빈칸을 채우는 것 말고도 열린 문장을 명제로 만드는 방법이 있습니다. 다음 항목 [[quantifiers]]에서 "모든 $x$에 대하여", "어떤 $x$가 존재하여"를 앞에 붙여서 명제를 만드는 법을 배웁니다.

## 예시와 반례

:::example
$x$를 실수라 하고 $P(x)$를 "$x^2 = 4$"라 합시다. 이것은 열린 문장입니다. $x = 2$를 넣은 $P(2)$는 참이고, $x = -2$를 넣은 $P(-2)$도 참이며, $x = 3$을 넣은 $P(3)$은 거짓입니다.
:::

:::example[변수가 둘인 경우]
$x$, $y$를 정수라 하고 $Q(x, y)$를 "$x < y$"라 합시다. $Q(2, 5)$는 참이고 $Q(5, 2)$는 거짓입니다. 변수가 둘이면 어느 값을 어느 변수에 넣는지에 따라 결과가 달라지므로 $Q(x, y)$와 $Q(y, x)$를 구별해야 합니다.
:::

:::example[변수가 수가 아닌 경우]
$R(A, B)$를 "집합 $A$는 집합 $B$의 부분집합이다"라 합시다. 변수 $A$, $B$는 집합입니다. $A = \{1, 2\}$, $B = \{1, 2, 3\}$을 넣으면 참이고, $A$와 $B$를 서로 바꿔 넣으면 거짓입니다.
:::

:::counterexample[변수가 보여도 명제로 읽는 경우]
"정수 $x$가 $6$의 배수이면 $x$는 $3$의 배수이다"에는 변수 $x$가 있지만, 수학 글에서는 이런 문장을 "모든 정수 $x$에 대하여"가 생략된 것으로 읽어 참인 명제로 봅니다. "모든 $x$에 대하여"의 정확한 뜻은 다음 항목 [[quantifiers]]에서 다룹니다. 이렇게 읽지 않고 $x$를 정하지 않은 채로 두면 "$x$는 $3$의 배수이다"처럼 값이 정해져야 참·거짓이 정해지는 열린 문장이 됩니다.
:::

## 확인 질문

:::check[자연수 $n$에 대한 열린 문장 $P(n)$: "$n$은 소수이다"에서 $P(7)$과 $P(9)$의 진릿값은?]
$P(7)$은 참이고 $P(9)$는 거짓입니다. $7$은 $1$과 자기 자신 외의 약수가 없는 반면, $9 = 3 \times 3$이기 때문입니다. 같은 열린 문장이 값에 따라 다른 진릿값을 가진다는 점이 핵심입니다.
:::

:::check[실수 $x$에 대한 문장 "$x + 1 = 5$"에서 $x$에 $4$를 넣은 문장과 $x$를 정하지 않은 문장 중 명제는 어느 쪽인가?]
$x$에 $4$를 넣은 "$4 + 1 = 5$"가 명제이고 참입니다. $x$를 정하지 않은 "$x + 1 = 5$"는 $x = 4$일 때만 참이므로 열린 문장입니다.
:::
