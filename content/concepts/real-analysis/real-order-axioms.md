---
title: 실수의 순서
title_en: Order Axioms for the Real Numbers
aliases: [순서 공리, 순서체의 공리, order axioms, ordered field, 삼분법, trichotomy]
kind: axiom
field: real-analysis
msc: ["12J15"]
level: undergrad
summary: 실수 위의 관계 < 에 대하여 삼분법, 추이성, 덧셈과 순서, 양수의 곱은 양수라는 네 가지를 증명 없이 받아들이고, ≤, >, ≥, 양수와 음수를 정의한다.
requires: [real-number-arithmetic, relation]
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 Basic properties, Definition 1.1.1 (p.23), Definition 1.1.7 (p.25)
    checked: original
    note: "출처는 순서집합(ordered set, Definition 1.1.1)과 순서체(ordered field, Definition 1.1.7)를 일반의 집합과 체에 대해 정의하고, 실수가 최소상계 성질을 가진 순서체라는 것은 1.2절의 Theorem 1.2.1 로 들인다. 이 항목은 그 가운데 순서에 관한 네 조건만 ℝ 에 대해 받아들인다. (W1), (W2)는 Definition 1.1.1 의 (i) trichotomy 와 (ii) transitivity 이고, (W3), (W4)는 Definition 1.1.7 의 (i), (ii)이다. 출처는 (W4)를 'x > 0 이고 y > 0 이면 xy > 0'으로 적는다. 번호 (W1)–(W4)와 항목의 이름은 이 사이트의 것이다. ≤ 의 정의는 출처와 같고, 출처는 > 와 ≥ 를 'in the obvious way'로 정한다고만 적는다. 출처는 양수, 음수에 더해 nonnegative(x ≥ 0), nonpositive(x ≤ 0)도 정의하는데, 이 항목은 그 두 용어를 두지 않는다. a < b < c 같은 이어 쓴 부등식은 출처가 정의 없이 쓴다(예: Proposition 1.1.8 (v)의 0 < x < y). 체의 공리는 출처의 Definition 1.1.5 이고, 이 사이트는 그것 대신 real-number-arithmetic 의 (K1)–(K7)을 쓴다. 예시, 반례, 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-17 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 정수와 실수의 순서를 잇는 진술의 범위, 인용 근거, 번호 표기, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-17
---

:::statement
실수 전체의 집합 $\mathbb{R}$와 그 덧셈, 곱셈, $0$, $1$은 [[real-number-arithmetic]]의 것이다. $\mathbb{R}$ 위에는 [[relation|관계]] $<$가 하나 있다. 실수 $a$, $b$에 대하여 $a < b$를 "$a$는 $b$보다 **작다**"고 읽는다.

**증명 없이 받아들이는 성질.** 아래에서 $a$, $b$, $c$는 임의의 실수이다.

- (W1) (삼분법) $a < b$, $a = b$, $b < a$ 가운데 정확히 하나가 성립한다.
- (W2) (추이성) $a < b$이고 $b < c$이면 $a < c$이다.
- (W3) (덧셈과 순서) $a < b$이면 $a + c < b + c$이다.
- (W4) (곱셈과 순서) $0 < a$이고 $0 < b$이면 $0 < ab$이다.

**용어와 기호.** 아래에서 $a$, $b$, $c$는 실수이다.

- $a \le b$인 것은 정확히 $a < b$이거나 $a = b$일 때이다. 이를 "$a$는 $b$ 이하이다"라고 읽는다.
- $a > b$는 $b < a$를 뜻하고, $a \ge b$는 $b \le a$를 뜻한다.
- $a$가 **양수**(positive number)인 것은 정확히 $0 < a$일 때이고, **음수**(negative number)인 것은 정확히 $a < 0$일 때이다.
- $a < b < c$는 "$a < b$이고 $b < c$"를 뜻한다. $a \le b < c$처럼 $<$와 $\le$가 섞인 꼴도 같은 방식으로 읽는다.
:::

:::english
The set $\mathbb{R}$ of real numbers, together with its addition, multiplication, $0$, and $1$, is the one in the entry on arithmetic of the real numbers. On $\mathbb{R}$ there is a relation $<$. For real numbers $a$ and $b$, we read $a < b$ as "$a$ is **less than** $b$".

**Properties accepted without proof.** Below, $a$, $b$, $c$ are arbitrary real numbers.

- (W1) (Trichotomy) Exactly one of $a < b$, $a = b$, $b < a$ holds.
- (W2) (Transitivity) If $a < b$ and $b < c$, then $a < c$.
- (W3) (Addition and order) If $a < b$, then $a + c < b + c$.
- (W4) (Multiplication and order) If $0 < a$ and $0 < b$, then $0 < ab$.

**Terms and notation.** Below, $a$, $b$, $c$ are real numbers.

- $a \le b$ holds exactly when $a < b$ or $a = b$. We read it as "$a$ is less than or equal to $b$".
- $a > b$ means $b < a$, and $a \ge b$ means $b \le a$.
- $a$ is **positive** exactly when $0 < a$, and **negative** exactly when $a < 0$.
- $a < b < c$ means "$a < b$ and $b < c$". Mixed forms such as $a \le b < c$ are read in the same way.
:::

## 직관

수직선을 떠올리면 $a < b$는 "$a$가 $b$보다 왼쪽에 있다"는 뜻입니다. (W1)은 두 점이 같은 자리에 있거나, 아니면 둘 중 하나가 다른 하나의 왼쪽에 있다는 것, (W2)는 왼쪽의 왼쪽은 왼쪽이라는 것, (W3)은 수직선 전체를 $c$만큼 밀어도 좌우 관계가 바뀌지 않는다는 것입니다. 비유가 맞지 않는 곳은 (W4)입니다. 양수끼리의 곱이 양수라는 것은 점을 밀거나 비교하는 그림에서는 보이지 않고, 곱셈과 순서를 잇는 별도의 약속입니다. 또 수직선은 그림일 뿐이고, 증명에서 쓸 수 있는 것은 위의 네 문장뿐입니다.

[[real-number-arithmetic]]은 선형대수 강의에서 실수의 덧셈과 곱셈을 (K1)–(K7)로 받아들이고 (K8)–(K12)를 증명한 항목입니다. 그 항목은 순서를 일부러 넣지 않았습니다. 이 강의는 그 계산 법칙을 다시 받아들이지 않고 그대로 인용하며, 그 위에 이 항목의 순서 (W1)–(W4)를 더하고, 이 단원의 [[least-upper-bound-property|최소상계 성질]]에서 완비성 (U)를 더합니다.

정수의 순서에 관해서는 [[prime-number]]의 (Z1)–(Z4)와 [[well-ordering-principle]]의 (Z5)–(Z8)이 이미 받아들여져 있습니다. 그것들은 정수의 순서에 관한 사실이고(다만 [[prime-number]]의 목록 (Z1)–(Z4)는 앞머리에서 수를 "정수 또는 실수"라고 적었고, 그 가운데 순서에 관한 것으로 실수에도 걸리는 것은 (Z2), (Z3)입니다), 이 항목은 실수 전체의 순서를 정합니다. 정수는 (K7)에 의해 실수이므로 두 정수 사이에는 정수로서의 순서와 실수로서의 순서가 함께 있는 셈입니다. 둘이 일치한다는 것은 다음 항목 [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에서 증명합니다. 이 강의는 실수의 부등식을 다룰 때 (Z1)–(Z8)을 실수에 대해 인용하지 않고, (W1)–(W4)와 거기서 증명한 사실을 씁니다.

## 예시와 반례

:::example[양수 두 개의 합은 양수이다]
실수 $a$, $b$가 양수라 합시다. $0 < a$의 양변에 $b$를 더하면 (W3)에 의해 $0 + b < a + b$이고, (K1)과 (K4)에 의해 $0 + b = b$이므로 $b < a + b$입니다. $0 < b$와 $b < a + b$에서 (W2)에 의해 $0 < a + b$입니다. 곧 $a + b$는 양수입니다.
:::

:::counterexample[$\le$로 바꾸면 "정확히 하나"가 언제나 성립하지는 않는다]
(W1)을 $\le$로 바꾸어 "$a \le b$, $a = b$, $b \le a$ 가운데 정확히 하나가 성립한다"고 읽으면 틀립니다. $a = b = 0$으로 두면 $0 = 0$이므로 $\le$의 정의에 의해 $0 \le 0$이 성립하고, 세 문장 $0 \le 0$, $0 = 0$, $0 \le 0$이 모두 참입니다. $\le$는 "작거나 같다"이므로 같은 경우와 겹칩니다.
:::

## 확인 질문

:::check[실수 $a$, $b$에 대하여 $a \le b$이고 $a \ne b$이면 $a < b$인가?]
그렇습니다. $\le$의 정의에 의해 $a \le b$는 "$a < b$이거나 $a = b$"이고, $a = b$는 가정에 의해 성립하지 않으므로 $a < b$입니다.
:::

:::check[실수 $a$가 양수이고 실수 $b$가 음수이면 $b < a$인가?]
그렇습니다. 양수와 음수의 정의에 의해 $b < 0$이고 $0 < a$이므로, (W2)에 의해 $b < a$입니다.
:::
