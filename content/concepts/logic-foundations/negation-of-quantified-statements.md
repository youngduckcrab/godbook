---
title: 한정 명제의 부정
title_en: Negation of Quantified Statements
aliases: [한정 기호의 부정, 전칭 명제의 부정, 존재 명제의 부정, 드 모르간 법칙 (한정 기호), negating quantifiers]
kind: theorem
field: logic-foundations
msc: ["03B10"]
level: intro
summary: "\"모든 x에 대하여 P\"의 부정은 \"P가 아닌 x가 존재한다\"이고, \"P인 x가 존재한다\"의 부정은 \"모든 x에 대하여 P가 아니다\"이다."
requires: [quantifiers, open-sentence, logical-connectives, logical-equivalence, set]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 2.10절 Negating Statements, 식 (2.8), (2.9), p.60 (겹친 한정 기호의 부정은 예 2.13, p.61)
    checked: original
    note: 출처는 "모든 x에서 P가 참인 것은 아니다는 P가 거짓인 x가 적어도 하나 있다는 뜻"이라는 말로 규칙을 설명하고 형식적으로 증명하지는 않는다. 아래 증명은 이 출처에 없고, 한정 기호의 참·거짓 정의에서 출발해 경우를 나눠 직접 쓴 것이다. 출처는 부정을 ∼ 로, 동치를 = 로 쓰고 이 사이트는 ¬ 와 ≡ 를 쓴다. 예시는 새로 만들었다.
status: reviewed
review_note: "2026-11-16 독립 검토 2회. 증명이 정의에 적힌 것만 인용하도록 다시 쓰고 순환으로 읽히는 문장 삭제."
added: 2026-11-16
---

:::statement
$X$가 [[set]]이고 $P(x)$가 $X$의 원소 $x$에 관한 [[open-sentence]]일 때, 다음 두 쌍의 명제는 각각 같은 진릿값을 가진다. 여기서 $\equiv$는 $X$와 $P(x)$가 무엇이든 양쪽의 진릿값이 같다는 뜻으로, 진리표로 정의한 동치([[logical-equivalence]])를 한정 명제로 넓혀 쓴 것이다.

1. $\lnot\bigl(\forall x \in X,\ P(x)\bigr) \equiv \exists x \in X,\ \lnot P(x)$
2. $\lnot\bigl(\exists x \in X,\ P(x)\bigr) \equiv \forall x \in X,\ \lnot P(x)$

여기서 $\lnot P(x)$는 $P(x)$의 부정으로 만든 열린 문장이다.
:::

:::english
Let $X$ be a set and let $P(x)$ be an open sentence about elements $x$ of $X$. Then each of the following pairs of statements has the same truth value. Here $\equiv$ means that the two sides have the same truth value whatever $X$ and $P(x)$ are; it extends to quantified statements the equivalence defined by truth tables.

1. $\lnot\bigl(\forall x \in X,\ P(x)\bigr) \equiv \exists x \in X,\ \lnot P(x)$
2. $\lnot\bigl(\exists x \in X,\ P(x)\bigr) \equiv \forall x \in X,\ \lnot P(x)$

Here $\lnot P(x)$ is the open sentence obtained by negating $P(x)$.
:::

## 직관

"모든 학생이 합격했다"가 거짓이라는 것은 무슨 뜻일까요? 합격하지 못한 학생이 **적어도 한 명 있다**는 뜻입니다. "모든 학생이 합격하지 못했다"까지 갈 필요가 없습니다. 이것이 첫째 규칙입니다. 전칭 명제를 부정하면 $\forall$가 $\exists$로 바뀌고, 성질 $P$는 그 부정 $\lnot P$로 바뀝니다.

둘째 규칙도 같은 이야기입니다. "합격한 학생이 있다"가 거짓이라는 것은, 모든 학생이 합격하지 못했다는 뜻입니다. 한 명도 예외가 없어야 합니다.

[[de-morgan-laws-logic]]과 닮았다고 느낀 분이 있을 겁니다. $\forall$는 무한히 긴 "그리고", $\exists$는 무한히 긴 "또는"처럼 볼 수 있으므로, "그리고"의 부정이 "또는", "또는"의 부정이 "그리고"가 되는 드 모르간 법칙이 한정 기호로 옮겨진 모습이라고 할 수 있습니다. 다만 이 항목의 증명은 이 닮음에 기대지 않고 한정 기호의 뜻에서 곧바로 출발합니다.

## 증명

:::idea
$\forall$와 $\exists$가 참·거짓이 되는 조건을 정의대로 적고, 부정된 쪽과 부정되지 않은 쪽이 같은 상황에서 참이 됨을 보입니다. 경우를 "원래 명제가 참일 때"와 "거짓일 때"로 나누면 됩니다.
:::

:::hint
$\forall x \in X,\ P(x)$가 거짓이라는 것은 정의에 따르면 무엇을 뜻하는지 적어 보세요. 그 원소에서 $\lnot P(x)$는 어떻습니까?
:::

:::hint
$\exists x \in X,\ P(x)$가 거짓이라는 것은 $P(x)$가 참인 원소가 하나도 없다는 뜻입니다. 그러면 각 원소에서 $P(x)$는 참입니까, 거짓입니까?
:::

:::hint
각 규칙에서 양쪽의 진릿값이 같음을 보이려면, 왼쪽이 참일 때 오른쪽도 참이고 왼쪽이 거짓일 때 오른쪽도 거짓임을 보이면 됩니다.
:::

:::proof
먼저 쓰는 사실을 정리한다. [[logical-connectives]]의 부정의 정의에 의해, $X$의 원소 $a$에 대하여 $\lnot P(a)$가 참인 것은 $P(a)$가 거짓인 것과 같고, $\lnot P(a)$가 거짓인 것은 $P(a)$가 참인 것과 같다. 또 [[quantifiers]]의 진술은 $\forall$와 $\exists$의 참·거짓을 "정확히 ~일 때"로 정한다. 곧 다음 네 가지가 성립한다.

- (A1) $\forall x \in X,\ P(x)$가 참인 것은 $X$의 모든 원소에서 $P$가 참인 것과 같다.
- (A2) $\forall x \in X,\ P(x)$가 거짓인 것은 $P$가 거짓인 원소가 적어도 하나 있는 것과 같다.
- (E1) $\exists x \in X,\ P(x)$가 참인 것은 $P$가 참인 원소가 적어도 하나 있는 것과 같다.
- (E2) $\exists x \in X,\ P(x)$가 거짓인 것은 $P$가 참인 원소가 하나도 없는 것과 같다.

(A2)와 (E2)는 정의에서 "그렇지 않을 때, 곧 $P(x)$가 거짓인 원소가 적어도 하나 있을 때(각각 $P(x)$가 참인 원소가 하나도 없을 때) 거짓"이라 한 부분이다. 이 네 가지는 $P$ 자리에 열린 문장 $\lnot P$를 넣어도 성립한다. 아래 증명은 $X$가 공집합인 경우에도 그대로 성립한다. 아래 증명 어디에서도 $X$에 원소가 있다고 가정하지 않는다.

**규칙 1: $\lnot\bigl(\forall x \in X,\ P(x)\bigr) \equiv \exists x \in X,\ \lnot P(x)$.** 두 명제의 진릿값이 같음을 두 경우로 나누어 보인다.

*경우 (가): $\forall x \in X,\ P(x)$가 참이다.* 그러면 왼쪽 명제는 이 명제의 부정이므로 거짓이다. 한편 (A1)에 의해 $X$의 모든 원소 $a$에서 $P(a)$가 참이므로 $\lnot P(a)$는 모두 거짓이다. 따라서 $\lnot P$가 참인 원소는 하나도 없고, (E1)에 의해 $\exists x \in X,\ \lnot P(x)$는 참이 아니므로 거짓이다. 양쪽 모두 거짓이다.

*경우 (나): $\forall x \in X,\ P(x)$가 거짓이다.* 그러면 왼쪽 명제는 참이다. 한편 (A2)에 의해 $P(a)$가 거짓인 원소 $a \in X$가 적어도 하나 있다. 그 $a$에서 $\lnot P(a)$는 참이므로, (E1)에 의해 $\exists x \in X,\ \lnot P(x)$는 참이다. 양쪽 모두 참이다.

어느 경우에도 양쪽의 진릿값이 같으므로 규칙 1이 성립한다.

**규칙 2: $\lnot\bigl(\exists x \in X,\ P(x)\bigr) \equiv \forall x \in X,\ \lnot P(x)$.**

*경우 (가): $\exists x \in X,\ P(x)$가 참이다.* 그러면 왼쪽 명제는 거짓이다. 한편 (E1)에 의해 $P(a)$가 참인 원소 $a \in X$가 적어도 하나 있다. 그 $a$에서 $\lnot P(a)$는 거짓이므로 $\lnot P$가 거짓인 원소가 존재하고, (A2)에 의해 $\forall x \in X,\ \lnot P(x)$는 거짓이다. 양쪽 모두 거짓이다.

*경우 (나): $\exists x \in X,\ P(x)$가 거짓이다.* 그러면 왼쪽 명제는 참이다. 한편 (E2)에 의해 $P$가 참인 원소는 하나도 없으므로, $X$의 모든 원소 $a$에서 $P(a)$는 거짓이고 $\lnot P(a)$는 참이다. 따라서 (A1)에 의해 $\forall x \in X,\ \lnot P(x)$는 참이다. 양쪽 모두 참이다.

어느 경우에도 양쪽의 진릿값이 같으므로 규칙 2가 성립한다.
:::

## 예시와 반례

:::example
$R$을 "모든 실수 $x$에 대하여 $x^2 \ge x$이다", 곧 $\forall x \in \mathbb{R},\ x^2 \ge x$라 합시다. 규칙 1에 의해 부정은 $\exists x \in \mathbb{R},\ x^2 < x$입니다. $x = \tfrac12$이면 $x^2 = \tfrac14 < \tfrac12$이므로 부정이 참이고, 따라서 $R$은 거짓입니다.
:::

:::example[존재 명제의 부정]
$S$를 $\exists x \in \mathbb{R},\ x^2 + 1 = 0$이라 합시다. 규칙 2에 의해 부정은 $\forall x \in \mathbb{R},\ x^2 + 1 \ne 0$입니다. 어느 실수에서도 $x^2 + 1 \ge 1$이므로 이 부정은 참이고, $S$는 거짓입니다.
:::

:::example[한정 기호가 겹친 경우]
[[quantifiers]]의 예시 $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{Z},\ x + y = 0$의 부정을 구해 봅시다. 규칙 1을 $P(x)$를 "$\exists y \in \mathbb{Z},\ x + y = 0$"으로 두고 적용하면 $\exists x \in \mathbb{Z},\ \lnot(\exists y \in \mathbb{Z},\ x + y = 0)$입니다. 이어서 이 $x$ 각각에 대해 규칙 2를 적용하면 안쪽이 $\forall y \in \mathbb{Z},\ x + y \ne 0$이 되어, 전체는 $\exists x \in \mathbb{Z},\ \forall y \in \mathbb{Z},\ x + y \ne 0$입니다. 안쪽을 바꾸어도 되는 까닭은, 각 $x$에서 두 안쪽 명제의 진릿값이 같으므로 "$P$가 참인 $x$가 있는가"라는 물음의 답이 변하지 않기 때문입니다. 바깥 기호부터 차례로 $\forall$와 $\exists$를 맞바꾸고 맨 끝의 열린 문장을 부정하면 됩니다.

이 부정은 거짓입니다. 어떤 정수 $x$를 잡아도 $y = -x$에서 $x + y = 0$이어서 "모든 $y$에서 $x + y \ne 0$"이 깨지기 때문입니다. 원래 명제가 참이라는 것과 일치합니다.
:::

:::counterexample[흔한 오류: ∀를 ∀로 둔 채 부정하기]
$\lnot\bigl(\forall x \in X,\ P(x)\bigr)$를 $\forall x \in X,\ \lnot P(x)$라고 쓰면 틀립니다. $X = \mathbb{R}$, $P(x)$를 $x^2 \ge x$라 하면, $\lnot\bigl(\forall x \in \mathbb{R},\ x^2 \ge x\bigr)$는 위에서 보았듯 참입니다. 그러나 $\forall x \in \mathbb{R},\ x^2 < x$는 $x = 2$에서 $4 < 2$가 거짓이므로 거짓입니다. 규칙은 $\forall$를 $\exists$로 **바꿔야** 합니다.
:::

## 확인 질문

:::check[$\forall n \in \mathbb{N},\ \exists m \in \mathbb{N},\ m > n$ 의 부정을 쓰고, 어느 쪽이 참인지 말하라.]
부정은 $\exists n \in \mathbb{N},\ \forall m \in \mathbb{N},\ m \le n$입니다. 원래 명제가 참입니다. 어떤 자연수 $n$이든 $m = n + 1$이 $m > n$을 만족하기 때문입니다. 따라서 부정은 거짓입니다.
:::

:::check["어떤 정수 $n$이 존재하여 $2n = 7$이다"의 부정을 쓰라.]
$\exists n \in \mathbb{Z},\ 2n = 7$의 부정은 규칙 2에 의해 $\forall n \in \mathbb{Z},\ 2n \ne 7$, 곧 "모든 정수 $n$에 대하여 $2n \ne 7$이다"입니다. 이 부정은 참입니다. $2n$은 정수 $n$이 무엇이든 짝수인데 $7$은 홀수여서 같아질 수 없기 때문입니다.
:::
