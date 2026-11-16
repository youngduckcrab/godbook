---
title: 한정 기호
title_en: Quantifiers (∀, ∃)
aliases: [quantifier, 전칭 기호, 존재 기호, 전칭 한정사, 존재 한정사, universal quantifier, existential quantifier, 한정사]
kind: definition
field: logic-foundations
msc: ["03B10"]
level: intro
summary: "\"모든 원소에 대하여\"를 뜻하는 ∀와 \"어떤 원소가 존재하여\"를 뜻하는 ∃. 열린 문장 앞에 붙여 명제를 만든다."
requires: [proposition, open-sentence, logical-connectives, set]
sources:
  - ref: hammack-book-of-proof
    loc: 2.7절 Quantifiers, Definition 2.1, pp.53–55 (정의 p.53, ∀와 ∃가 쓰인 명제의 참·거짓 판정은 p.54, 한정 기호 순서와 일상어의 오용은 p.55)
    checked: original
    note: "출처는 부정을 ∼ 로 쓰고 이 사이트는 ¬ 로 쓴다. 한정 기호가 겹칠 때 순서가 뜻을 바꾼다는 점은 출처 p.55(예 2.7)가 다루는 내용이고, 이 항목의 예시는 새로 만들었다. 일상어에서 '모든 ~은 ~하지 않다'를 잘못 쓰는 경고도 출처 p.55에 있으며 예는 새로 만들었다. 직관 절의 무한 논리곱·논리합 설명은 출처 p.53의 동기 설명을 다시 쓴 것이다. ∀ 는 전칭, ∃ 는 존재라는 한국어 이름은 출처에 나오지 않는다."
status: source-checked
added: 2026-11-16
---

:::statement
기호 $\forall$와 $\exists$를 **한정 기호**(quantifier)라 한다.

- $\forall$는 "모든 ~에 대하여"(for all, for every, for each)를 뜻하는 **전칭 한정 기호**(universal quantifier)이다.
- $\exists$는 "~인 것이 존재한다"(there exists, there is)를 뜻하는 **존재 한정 기호**(existential quantifier)이다.

$X$가 [[set]]이고 $P(x)$가 $X$의 원소 $x$에 관한 [[open-sentence]]일 때, 두 한정 기호로 다음 명제를 만들며 각각의 참·거짓은 이렇게 정해진다.

- $\forall x \in X,\ P(x)$ : $X$의 **모든** 원소 $x$에서 $P(x)$가 참이면 참이다. $P(x)$가 거짓인 원소가 **적어도 하나** 있으면 거짓이다.
- $\exists x \in X,\ P(x)$ : $P(x)$가 참인 원소가 **적어도 하나** 있으면 참이다. 그런 원소가 하나도 없으면 거짓이다.

한정 기호로 시작하는 명제를 **한정 명제**(quantified statement)라 하고, $\forall$로 시작하면 전칭 명제, $\exists$로 시작하면 존재 명제라 한다. 한정 기호가 여러 개일 때는 앞에서부터 차례로 적용한다. 순서를 바꾸면 다른 명제가 되며, 참·거짓이 달라질 수도 있다.
:::

:::english
The symbols $\forall$ and $\exists$ are called **quantifiers**.

- $\forall$ stands for "for all" (or "for every", "for each") and is the **universal quantifier**.
- $\exists$ stands for "there exists" (or "there is") and is the **existential quantifier**.

Let $X$ be a set and let $P(x)$ be an open sentence about elements $x$ of $X$. The two quantifiers form the following statements, whose truth values are determined as follows.

- $\forall x \in X,\ P(x)$ is true if $P(x)$ is true for **every** element $x$ of $X$. It is false if there is **at least one** element for which $P(x)$ is false.
- $\exists x \in X,\ P(x)$ is true if there is **at least one** element for which $P(x)$ is true. It is false if there is no such element.

A statement that begins with a quantifier is called a **quantified statement**; it is a universally quantified statement if it begins with $\forall$ and an existentially quantified statement if it begins with $\exists$. When several quantifiers occur, they are applied one after another from the left. Changing their order gives a different statement, and its truth value can change as well.
:::

## 직관

반 학생 명부를 떠올려 보세요. "모든 학생이 과제를 냈다"를 확인하려면 명부의 모든 이름을 확인해야 하고, 한 명이라도 안 냈으면 거짓입니다. "과제를 낸 학생이 있다"를 확인하려면 낸 학생을 한 명만 찾으면 되고, 명단 전체를 훑고도 못 찾았을 때만 거짓입니다. $\forall$는 "모든 이름에 대한 확인", $\exists$는 "하나라도 되는 이름 찾기"입니다.

이 기호가 필요한 이유는 원소가 무한히 많을 때 드러납니다. 집합 $X$의 원소가 $x_1, x_2, x_3, \dots$로 끝없이 이어지면, "모두 $P$를 만족한다"를 "$P(x_1)$ 그리고 $P(x_2)$ 그리고 …"로 쓰면 한도 끝도 없습니다. $\forall$는 이 무한히 긴 "그리고"를 한 기호로 줄인 것이고, $\exists$는 무한히 긴 "또는"을 줄인 것으로 볼 수 있습니다.

비유가 맞지 않는 곳도 있습니다. 명부에는 학생이 유한하게 있어 하나씩 확인할 수 있지만, 수학에서는 "모든 실수"처럼 하나씩 확인할 수 없는 경우가 대부분입니다. 그럴 때는 임의의 원소를 하나 잡아 논증하는 식으로 $\forall$를 다룹니다.

한정 기호가 두 개 이상 겹치면 **읽는 순서**가 뜻을 정합니다. "모든 학생에게는 짝이 되는 친구가 있다"와 "모든 학생의 짝이 되는 친구가 한 명 있다"는 다른 말입니다. 앞의 것은 학생마다 친구가 달라도 되지만, 뒤의 것은 한 사람이 모두의 친구여야 합니다.

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

반면 $\exists n \in \mathbb{Z},\ 3n = 10$ 은 거짓입니다. $3n = 10$을 만족하는 $n$은 $\frac{10}{3}$뿐이고 정수가 아니므로, 참이 되는 원소가 하나도 없습니다. 존재 명제를 거짓으로 보이려면 몇 개를 검사해 보는 것으로는 안 되고 **모든** 원소가 안 됨을 보여야 합니다.
:::

:::counterexample[일상어의 부정]
"모든 정수는 $3$의 배수가 아니다"와 "모든 정수가 $3$의 배수인 것은 아니다"는 다른 말입니다. 앞의 것은 $\forall n \in \mathbb{Z},\ \lnot(n$은 $3$의 배수$)$로, $n = 3$이 반례가 되므로 거짓입니다. 뒤의 것은 $\lnot\bigl(\forall n \in \mathbb{Z},\ n$은 $3$의 배수$\bigr)$로, $n = 1$이 $3$의 배수가 아니므로 참입니다. 일상에서는 두 문장을 같은 뜻으로 쓰기도 하지만 수학에서는 뜻이 정확히 구별되어야 합니다.
:::

## 확인 질문

:::check[$\forall x \in \mathbb{Z},\ \exists y \in \mathbb{Z},\ x < y$ 와 $\exists y \in \mathbb{Z},\ \forall x \in \mathbb{Z},\ x < y$ 의 참·거짓은?]
앞의 것은 참입니다. 정수 $x$가 무엇이든 $y = x + 1$을 잡으면 $x < y$입니다. 뒤의 것은 거짓입니다. 그런 $y$가 있다면 모든 정수 $x$에서 $x < y$여야 하는데, $x = y$를 넣으면 $y < y$가 되어 거짓이기 때문입니다.
:::

:::check[$X = \{1, 2, 3\}$일 때 $\exists x \in X,\ x^2 = 4$ 와 $\forall x \in X,\ x^2 = 4$ 의 참·거짓은?]
앞의 것은 참입니다. $x = 2$에서 $2^2 = 4$입니다. 뒤의 것은 거짓입니다. $x = 1$에서 $1^2 = 1 \ne 4$이므로 $P(x)$가 거짓인 원소가 있습니다.
:::
