---
title: 한정 기호
title_en: Quantifiers (∀, ∃)
aliases: [quantifier, 전칭 기호, 존재 기호, 전칭 한정사, 존재 한정사, 전칭 한정 기호, 존재 한정 기호, universal quantifier, existential quantifier, 한정사]
kind: definition
field: logic-foundations
msc: ["03B10"]
level: intro
summary: "\"모든 원소에 대하여\"를 뜻하는 ∀와 \"어떤 원소가 존재하여\"를 뜻하는 ∃. 열린 문장 앞에 붙여 명제를 만든다."
requires: [proposition, open-sentence, logical-connectives, set, conditional-statement, empty-set-is-subset]
sources:
  - ref: hammack-book-of-proof
    loc: 2.7절 Quantifiers, Definition 2.1, pp.53–55 (정의 p.53, ∀와 ∃가 쓰인 명제의 참·거짓 판정은 p.54, 한정 기호 순서와 일상어의 오용은 p.55)
    checked: original
    note: "출처는 부정을 ∼ 로 쓰고 이 사이트는 ¬ 로 쓴다. 한정 기호가 겹칠 때 순서가 뜻을 바꾼다는 점은 출처 p.55(예 2.7)가 다루는 내용이고, 이 항목의 예시는 새로 만들었다. 반례 '일상어의 부정'은 출처 p.55의 'All integers are not even / Not all integers are even'을 바탕으로 even을 3의 배수로 바꿔 쓴 것이다. 겹친 한정 명제를 안쪽 열린 문장에 대한 한정으로 푸는 설명과 공집합일 때의 설명은 출처 p.53–55에 없고 이 사이트에서 덧붙인 것이다. 직관 절의 무한 논리곱·논리합 설명은 출처 p.53의 동기 설명을 다시 쓴 것이다. ∀ 는 전칭, ∃ 는 존재라는 한국어 이름은 출처에 나오지 않는다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회. 참·거짓 조건을 양방향으로 고치고 공집합과 겹친 한정 기호의 뜻을 보완."
added: 2026-11-16
---

:::statement
기호 $\forall$와 $\exists$를 **한정 기호**(quantifier)라 한다.

- $\forall$는 "모든 ~에 대하여"(for all, for every, for each)를 뜻하는 **전칭 기호**(universal quantifier)이다.
- $\exists$는 "~인 것이 존재한다"(there exists, there is)를 뜻하는 **존재 기호**(existential quantifier)이다.

$X$가 [[set]]이고 $P(x)$가 $X$의 원소 $x$에 관한 [[open-sentence]]일 때, 두 한정 기호로 다음 명제를 만들며 각각의 참·거짓은 이렇게 정해진다.

- $\forall x \in X,\ P(x)$ : $X$의 **모든** 원소 $x$에서 $P(x)$가 참일 때 참이고, 그렇지 않을 때, 곧 $P(x)$가 거짓인 원소가 **적어도 하나** 있을 때 거짓이다.
- $\exists x \in X,\ P(x)$ : $P(x)$가 참인 원소가 **적어도 하나** 있을 때 참이고, 그렇지 않을 때, 곧 $P(x)$가 참인 원소가 하나도 없을 때 거짓이다.

한정 기호가 들어 있는 명제를 **한정 명제**(quantified statement)라 한다. 그 가운데 $\forall$로 시작하는 것을 전칭 명제(universally quantified statement), $\exists$로 시작하는 것을 존재 명제(existentially quantified statement)라 한다.

한정 기호가 겹친 명제는 안쪽부터 열린 문장으로 읽는다. 예를 들어 $Y$도 집합이고 $P(x, y)$가 $x \in X$, $y \in Y$에 관한 열린 문장일 때, $\forall x \in X,\ \exists y \in Y,\ P(x, y)$는, $x$에 관한 열린 문장 $Q(x)$를 "$\exists y \in Y,\ P(x, y)$"로 두었을 때의 $\forall x \in X,\ Q(x)$를 뜻한다. 한정 기호의 순서를 바꾸면 다른 명제가 되며, 참·거짓이 달라질 수도 있다.
:::

:::english
The symbols $\forall$ and $\exists$ are called **quantifiers**.

- $\forall$ stands for "for all" (or "for every", "for each") and is the **universal quantifier**.
- $\exists$ stands for "there exists" (or "there is") and is the **existential quantifier**.

Let $X$ be a set and let $P(x)$ be an open sentence about elements $x$ of $X$. The two quantifiers form the following statements, whose truth values are determined as follows.

- $\forall x \in X,\ P(x)$ is true exactly when $P(x)$ is true for **every** element $x$ of $X$, and false otherwise, that is, when there is **at least one** element for which $P(x)$ is false.
- $\exists x \in X,\ P(x)$ is true exactly when there is **at least one** element for which $P(x)$ is true, and false otherwise, that is, when there is no element for which $P(x)$ is true.

A statement that contains a quantifier is called a **quantified statement**. Among these, one that begins with $\forall$ is called a universally quantified statement and one that begins with $\exists$ an existentially quantified statement.

A statement with nested quantifiers is read from the inside out as an open sentence. For example, if $Y$ is also a set and $P(x, y)$ is an open sentence about $x \in X$ and $y \in Y$, then $\forall x \in X,\ \exists y \in Y,\ P(x, y)$ means $\forall x \in X,\ Q(x)$, where $Q(x)$ is the open sentence "$\exists y \in Y,\ P(x, y)$" about $x$. Changing the order of the quantifiers gives a different statement, and its truth value can change as well.
:::

## 직관

반 학생 명부를 떠올려 보세요. "모든 학생이 과제를 냈다"를 확인하려면 명부의 모든 이름을 확인해야 하고, 한 명이라도 안 냈으면 거짓입니다. "과제를 낸 학생이 있다"를 확인하려면 낸 학생을 한 명만 찾으면 되고, 명단 전체를 훑고도 못 찾았을 때만 거짓입니다. $\forall$는 "모든 이름에 대한 확인", $\exists$는 "하나라도 되는 이름 찾기"입니다.

이 기호가 필요한 이유는 원소가 무한히 많을 때 드러납니다. 집합 $X$의 원소가 $x_1, x_2, x_3, \dots$로 끝없이 이어지면, "모두 $P$를 만족한다"를 "$P(x_1)$ 그리고 $P(x_2)$ 그리고 …"로 쓰면 한도 끝도 없습니다. $\forall$는 이 무한히 긴 "그리고"를 한 기호로 줄인 것이고, $\exists$는 무한히 긴 "또는"을 줄인 것으로 볼 수 있습니다.

비유가 맞지 않는 곳도 있습니다. 명부에는 학생이 유한하게 있어 하나씩 확인할 수 있지만, 수학에서는 "모든 실수"처럼 하나씩 확인할 수 없는 경우가 많습니다. 그럴 때는 임의의 원소를 하나 잡아 논증하는 식으로 $\forall$를 다룹니다.

한정 기호가 두 개 이상 겹치면 **읽는 순서**가 뜻을 정합니다. "모든 학생에게는 짝이 되는 친구가 있다"와 "어떤 한 사람이 있어서, 그 사람이 모든 학생의 짝이다"는 다른 말입니다. 앞의 것은 학생마다 친구가 달라도 되지만, 뒤의 것은 한 사람이 모두의 짝이어야 합니다.

## 예시와 반례

:::example[전칭 명제와 존재 명제]
- $\forall x \in \mathbb{R},\ x^2 + 1 > 0$ 은 참입니다. 실수의 제곱은 $0$ 이상이므로 어느 실수에서도 $x^2 + 1 \ge 1 > 0$ 입니다.
- $\exists x \in \mathbb{R},\ x^2 = 2$ 는 참입니다. $x = \sqrt{2}$ 하나를 찾았으니 충분합니다.
- 같은 종류의 한정 기호가 이어질 때는 $\forall a, b \in \mathbb{R}$ 처럼 묶어 쓰기도 합니다. "모든 실수 $a$와 모든 실수 $b$에 대하여"라는 뜻입니다.
:::

:::example[한정 기호의 순서가 뜻을 바꾼다]
정수 $x$, $y$에 대한 열린 문장 $x + y = 0$을 생각합시다.

- $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{Z},\ x + y = 0$ 은 참입니다. 정수 $x$가 무엇이든 $y = -x$를 잡으면 $x + y = 0$입니다. $y$는 $x$를 본 다음에 고르므로 $x$마다 달라도 됩니다.
- $\exists y \in \mathbb{Z},\ \forall x \in \mathbb{Z},\ x + y = 0$ 은 거짓입니다. 이런 $y$가 있다고 가정하면, 모든 $x$에서 $x + y = 0$이어야 합니다. $x = 0$을 넣으면 $y = 0$이고, 이어서 $x = 1$을 넣으면 $1 + 0 = 1 \ne 0$이어서 모순입니다. 따라서 모든 $x$에 통하는 하나의 $y$는 없습니다.

두 명제는 한정 기호의 순서만 다르지만 참·거짓이 다릅니다.
:::

:::counterexample[전칭 명제는 반례 하나로 깨진다]
$\forall n \in \mathbb{N},\ n^2 > n$ 은 거짓입니다. $n = 1$에서 $1^2 = 1$이고 $1 > 1$이 아니므로, $P(n)$이 거짓인 원소가 하나 있기 때문입니다. $n = 2, 3, 4$에서 모두 참이라도 소용없습니다.

한편 $\exists n \in \mathbb{Z},\ 3n = 10$ 은 거짓입니다. $3n = 10$을 만족하는 $n$은 $\frac{10}{3}$뿐이고 정수가 아니므로, 참이 되는 원소가 하나도 없습니다. 존재 명제를 거짓으로 보이려면 몇 개를 검사해 보는 것으로는 안 되고 **모든** 원소가 안 됨을 보여야 합니다.
:::

:::counterexample[일상어의 부정]
"모든 정수는 $3$의 배수가 아니다"와 "모든 정수가 $3$의 배수인 것은 아니다"는 다른 말입니다. 앞의 것은 $\forall n \in \mathbb{Z},\ \lnot(n$은 $3$의 배수$)$로, $n = 3$이 반례가 되므로 거짓입니다. 뒤의 것은 $\lnot\bigl(\forall n \in \mathbb{Z},\ n$은 $3$의 배수$\bigr)$로, $n = 1$이 $3$의 배수가 아니므로 참입니다. 일상에서는 두 문장을 같은 뜻으로 쓰기도 하지만 수학에서는 뜻이 정확히 구별되어야 합니다.
:::

:::remark[공집합일 때]
$X = \emptyset$이면 $\forall x \in X,\ P(x)$는 참이고 $\exists x \in X,\ P(x)$는 거짓입니다. $\forall$가 거짓이 되려면 $P(x)$가 거짓인 원소가 하나 있어야 하는데 원소가 아예 없고, $\exists$가 참이 되려면 $P(x)$가 참인 원소가 하나 있어야 하는데 역시 없기 때문입니다. [[empty-set-is-subset]]에서 "$x \in \emptyset$이면 $x \in B$이다"가 모든 $x$에서 참이었던 것과 같은 논리입니다. 반례가 될 원소가 없으면 "모든"은 성립합니다.
:::

## 확인 질문

:::check[$\forall x \in \mathbb{Z},\ \exists y \in \mathbb{Z},\ x < y$ 와 $\exists y \in \mathbb{Z},\ \forall x \in \mathbb{Z},\ x < y$ 의 참·거짓은?]
앞의 것은 참입니다. 정수 $x$가 무엇이든 $y = x + 1$을 잡으면 $x < y$입니다. 뒤의 것은 거짓입니다. 그런 $y$가 있다면 모든 정수 $x$에서 $x < y$여야 하는데, $x = y$를 넣으면 $y < y$가 되어 거짓이기 때문입니다.
:::

:::check[$X = \{1, 2, 3\}$일 때 $\exists x \in X,\ x^2 = 4$ 와 $\forall x \in X,\ x^2 = 4$ 의 참·거짓은?]
앞의 것은 참입니다. $x = 2$에서 $2^2 = 4$입니다. 뒤의 것은 거짓입니다. $x = 1$에서 $1^2 = 1 \ne 4$이므로 $P(x)$가 거짓인 원소가 있습니다.
:::
