---
title: 벡터공간
title_en: Vector Space
aliases: [실벡터공간, 선형공간, 벡터, 영벡터, 스칼라배, vector space, real vector space, linear space, vector, zero vector, scalar multiplication]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 집합 V에 덧셈과 스칼라배가 함수로 주어지고 여덟 가지 계산 법칙 (V1)–(V8)이 모두 성립할 때 V를 벡터공간이라 하고, V의 원소를 벡터라 한다.
requires: [set, cartesian-product, function, real-number-arithmetic]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1절 Vector spaces, 번호 없는 정의(공리 1–8), p.1–2
    checked: original
    note: "(V1)–(V8)은 출처의 공리 1–8과 같은 순서이다(1 교환, 2 결합, 3 영벡터, 4 덧셈의 역원, 5 곱셈의 항등원, 6 곱셈의 결합, 7과 8 두 분배). 출처는 벡터를 굵은 소문자로 쓰고(p.1 각주 1) 이 사이트는 보통 글자로 쓴다. 다른 점은 다음과 같다. (1) 출처는 연산을 'two operations'라고만 하고 닫혀 있다는 것을 따로 말하지 않는다. 이 항목은 덧셈과 스칼라배를 V × V에서 V로, ℝ × V에서 V로의 함수로 적어 닫혀 있음을 정의에 넣었다. (2) 출처의 공리 3은 '영벡터 0이 있어 v + 0 = v'이고 공리 4의 0은 그 0이다. 이 항목은 영벡터를 '모든 v에서 v + z = v인 z'로 정의하고 (V3)을 영벡터가 존재한다는 조항으로, (V4)를 모든 영벡터 z에 대하여 v + w = z인 w가 있다는 조항으로 썼다. 영벡터가 하나뿐임은 vector-space-basic-properties에서 (V1)과 (V3)만으로 증명되므로 (V4)를 어느 영벡터로 읽어도 같은 정의이다. (3) 출처는 스칼라를 실수 또는 복소수로 하고 임의의 체도 가능하다고 말하며(p.2) 이 항목은 실수만 쓴다. (4) '실벡터공간'이라는 말은 출처에 있으나(p.2) 이 항목은 스칼라가 실수뿐이므로 줄여 '벡터공간'이라 부른다. (V1)–(V8)이라는 번호 이름은 이 사이트의 것이다. 첫째 예시 ℝ이 벡터공간이라는 것은 출처 1.1절 Remark(p.3)의 'the set R of real numbers is a real vector space'와 같은 사실이고, 이 항목은 (V1)–(V8)을 하나씩 확인해 보인다. 나머지 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 정수와 실수를 잇는 문구, 뒤 단원이 쓸 부호 규칙과 계산 법칙, 값으로 함수 정하기, 출처 메모를 보완했다."
added: 2026-11-16
---

:::statement
$V$가 [[set]]이고, 다음 두 [[function|함수]]가 주어졌다고 하자.

- **덧셈** $+ : V \times V \to V$. $(u, v) \in V \times V$에서의 값을 $u + v$로 쓴다.
- **스칼라배** $\cdot : \mathbb{R} \times V \to V$. $(\alpha, v) \in \mathbb{R} \times V$에서의 값을 $\alpha v$로 쓴다.

$V$의 원소를 **벡터**(vector)라 한다. 실수 $\alpha$, $\beta$는 [[real-number-arithmetic|스칼라]]이고, $\alpha\beta$와 $\alpha + \beta$는 실수의 곱과 합이다. 벡터 $u$, $v$에 대하여 $\alpha u + \beta v$는 $(\alpha u) + (\beta v)$를 뜻한다. 벡터 $z \in V$가 **영벡터**(zero vector)인 것은 정확히 모든 $v \in V$에서 $v + z = v$일 때이다.

$V$가 (이 두 연산에 관한) **벡터공간**(vector space)인 것은 정확히 다음 (V1)–(V8)이 모두 성립할 때이다. 아래에서 $u$, $v$, $w$는 $V$의 임의의 원소이고 $\alpha$, $\beta$는 임의의 실수이다.

- (V1) $u + v = v + u$이다.
- (V2) $(u + v) + w = u + (v + w)$이다.
- (V3) 영벡터가 있다. 곧 모든 $v \in V$에서 $v + z = v$인 $z \in V$가 있다.
- (V4) 모든 영벡터 $z$와 모든 $v \in V$에 대하여 $v + w = z$인 $w \in V$가 있다.
- (V5) $1v = v$이다.
- (V6) $(\alpha\beta)v = \alpha(\beta v)$이다.
- (V7) $\alpha(u + v) = \alpha u + \alpha v$이다.
- (V8) $(\alpha + \beta)v = \alpha v + \beta v$이다.

영벡터가 하나뿐이라는 것은 [[vector-space-basic-properties]]에서 증명한다. 그 전에는 영벡터를 특정한 하나의 벡터로 가리키지 않는다.
:::

:::english
Let $V$ be a set, and suppose the following two functions are given.

- **Addition** $+ : V \times V \to V$. We write $u + v$ for its value at $(u, v) \in V \times V$.
- **Scalar multiplication** $\cdot : \mathbb{R} \times V \to V$. We write $\alpha v$ for its value at $(\alpha, v) \in \mathbb{R} \times V$.

The elements of $V$ are called **vectors**. Real numbers $\alpha$, $\beta$ are scalars, and $\alpha\beta$ and $\alpha + \beta$ are the product and the sum of real numbers. $\alpha u + \beta v$ means $(\alpha u) + (\beta v)$ for vectors $u$, $v$. A vector $z \in V$ is a **zero vector** exactly when $v + z = v$ for every $v \in V$.

$V$ is a **vector space** (with respect to these two operations) exactly when the following (V1)–(V8) all hold. Below, $u$, $v$, $w$ are arbitrary elements of $V$ and $\alpha$, $\beta$ are arbitrary real numbers.

- (V1) $u + v = v + u$.
- (V2) $(u + v) + w = u + (v + w)$.
- (V3) A zero vector exists; that is, there is a $z \in V$ with $v + z = v$ for every $v \in V$.
- (V4) For every zero vector $z$ and every $v \in V$ there is a $w \in V$ with $v + w = z$.
- (V5) $1v = v$.
- (V6) $(\alpha\beta)v = \alpha(\beta v)$.
- (V7) $\alpha(u + v) = \alpha u + \alpha v$.
- (V8) $(\alpha + \beta)v = \alpha v + \beta v$.

That there is only one zero vector is proved in the entry on basic properties of vector spaces. Until then we do not refer to the zero vector as one particular vector.
:::

## 직관

벡터공간의 정의는 벡터가 무엇으로 만들어졌는지를 말하지 않습니다. 대신 "더할 수 있고, 실수를 곱할 수 있고, 그때 여덟 가지 계산 법칙이 지켜진다"는 것만 요구합니다. 장기에서 말이 무엇으로 깎였는지는 상관없고 말이 움직이는 규칙만 중요한 것과 같습니다. 수의 목록이든 함수든 이 규칙을 지키면 모두 같은 이름으로 불립니다.

법칙의 내용은 수의 계산 규칙과 같습니다. (V1), (V2)는 덧셈의 교환과 결합, (V3), (V4)는 아무것도 바꾸지 않는 벡터와 되돌리는 벡터, (V5)–(V8)은 실수를 곱하는 것이 덧셈과 곱셈에 어떻게 어울리는지를 말합니다. 달라지는 점은 연산이 어떤 대상 사이에서 일어나는지입니다. 정의에 있는 연산은 벡터끼리의 덧셈과 실수와 벡터 사이의 스칼라배 둘뿐입니다. (V8)의 $\alpha + \beta$는 실수끼리의 합이고 $\alpha v + \beta v$의 $+$는 벡터끼리의 합이라서 같은 기호가 두 가지 연산을 가리킵니다.

두 연산을 함수로 적은 것은 "V의 두 벡터를 더하면 다시 V의 벡터이다"가 정의의 일부임을 드러내기 위해서입니다. 영벡터는 "더해도 아무것도 바뀌지 않는 벡터"로 정의하고, 그런 벡터가 하나뿐이라는 것은 정의가 아니라 다음 항목에서 증명할 사실입니다. 그래서 (V4)는 모든 영벡터에 대하여 적었습니다. 증명 뒤에는 어느 영벡터로 읽어도 같은 말입니다.

## 예시와 반례

:::example[실수 전체]
$V = \mathbb{R}$이고 덧셈과 스칼라배를 실수의 합과 곱으로 정합니다. 곧 $u + v$는 실수의 합이고 $\alpha v$는 실수의 곱입니다. 둘 다 $\mathbb{R}$ 안에 값을 가지므로 함수입니다. (V1)과 (V2)는 [[real-number-arithmetic|(K1)과 (K2)]], (V3)은 (K4)의 $z = 0$입니다. (V4)는 다음과 같습니다. 영벡터 $z$는 모든 실수 $v$에서 $v + z = v$이므로 (K8)의 (i)에 의해 $z = 0$이고, $v + w = 0$인 $w$로 $-v$를 쓰면 됩니다. (V5)는 $1v = v1 = v$((K1), (K4)), (V6)은 (K2), (V7)은 (K3)입니다. (V8)은 $(\alpha + \beta)v = v(\alpha + \beta) = v\alpha + v\beta = \alpha v + \beta v$이고 차례로 (K1), (K3), (K1)에 의합니다.
:::

:::example[원소가 하나뿐인 벡터공간]
원소가 하나뿐인 집합 $V = \{o\}$에서 덧셈은 $o + o = o$, 스칼라배는 모든 실수 $\alpha$에서 $\alpha o = o$로 정합니다. 어느 식이든 양변이 모두 $V$의 원소이고 $V$의 원소는 $o$ 하나이므로 양변이 같습니다. 그래서 (V1), (V2), (V5)–(V8)이 성립합니다. $o + o = o$이므로 $o$가 영벡터이고 (V3)이 성립하며, 영벡터는 $o$뿐이고 $o + o = o$이므로 (V4)에서 $w = o$로 잡으면 됩니다.
:::

:::counterexample[스칼라배가 (V5)를 깨는 경우]
$V = \mathbb{R}$에서 덧셈은 실수의 합으로 두고, 스칼라배를 모든 $\alpha$, $v$에서 $\alpha v = 0$으로 정합니다. 이것은 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수입니다. $v = 1$이면 $1v = 0$인데 (K4)에 의해 $0 \ne 1 = v$입니다. 따라서 (V5)가 깨지고 $V$는 벡터공간이 아닙니다.
:::

:::counterexample[스칼라배가 (V8)을 깨는 경우]
$V = \mathbb{R}$에서 덧셈은 실수의 합으로 두고, 스칼라배를 $\alpha \star v = (\alpha\alpha)v$(오른쪽은 실수의 곱)로 정합니다. $\alpha = \beta = 1$, $v = 1$로 두면 $(\alpha + \beta) \star v = (1 + 1) \star 1 = (2 \cdot 2) \cdot 1 = 4$이고 $\alpha \star v + \beta \star v = 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot 1 = 2$입니다. $4 \ne 2$이므로 (V8)이 깨집니다. 계산한 값은 (K7)에 의합니다.
:::

## 확인 질문

:::check[$V = \mathbb{R}$에서 $u \oplus v = (u + v) + 1$(오른쪽은 실수의 합)로 덧셈을 정하면, 영벡터, 곧 모든 $v$에서 $v \oplus z = v$인 $z$가 있는가?]
있습니다. $z = -1$로 잡으면 $v \oplus (-1) = (v + (-1)) + 1 = v + ((-1) + 1) = v + 0 = v$입니다. 차례로 정의, (K2), $(-1) + 1 = 1 + (-1) = 0$((K1)과 $-1$의 뜻), (K4)에 의합니다. 또 $0 \oplus 0 = (0 + 0) + 1 = 1 \ne 0$이므로 실수 $0$은 영벡터가 아닙니다. 이 덧셈에서 영벡터 하나는 $-1$입니다.
:::

:::check[위의 덧셈 $\oplus$와 보통의 실수 곱을 스칼라배로 삼은 $V = \mathbb{R}$은 (V7)을 만족하는가?]
만족하지 않습니다. $\alpha = 2$, $u = v = 0$이라 하면 $\alpha(u \oplus v) = 2 \cdot ((0 + 0) + 1) = 2 \cdot 1 = 2$이고 $\alpha u \oplus \alpha v = 0 \oplus 0 = (0 + 0) + 1 = 1$입니다. 여기서 $2 \cdot 0 = 0$은 (K9)에 의합니다. $2 \ne 1$이므로 (V7)이 깨집니다.
:::
