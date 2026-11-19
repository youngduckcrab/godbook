---
title: 환
title_en: Ring
aliases: [단위원, 단위원을 갖는 환, 가환환, 영환, 곱셈의 항등원, 정수배, unity, ring with unity, ring with identity, commutative ring, zero ring]
kind: definition
field: ring-theory
msc: ["16"]
level: undergrad
summary: 집합 R과 R 위의 두 이항연산 +, ·에 대하여 (R, +)가 아벨군이고 곱셈이 결합법칙과 양쪽 분배법칙을 만족하면 (R, +, ·)를 환이라 한다. 단위원을 갖는 환(곱셈의 항등원이 있고 0과 다르다), 가환환, 정수배 n·a의 표기를 정하고, 원소가 하나인 영환은 환이지만 단위원을 갖는 환이 아님을 보인다.
requires: [set, binary-operation, group, number-groups, power-in-a-group, recursion-theorem, natural-numbers-are-infinite, well-ordering-principle, prime-number, even-and-odd]
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 Rings, 환·단위원을 갖는 환·가환환의 정의(번호 없음) p.190, 16.2절 표수의 정의 p.194, 16.7절 연습문제 31 p.206
    checked: original
    note: "출처는 환을 '덧셈과 곱셈이라는 두 닫힌 이항연산을 갖고 여섯 조건을 만족하는 공집합이 아닌 집합 R'로 정의한다(p.190). 덧셈의 네 조건(교환, 결합, a + 0 = a, a + (−a) = 0)을 한쪽만 적고, 바로 뒤에서 처음 네 조건은 덧셈으로 아벨군이라는 뜻이며 환을 '아벨군 (R, +) 와 다섯째·여섯째 조건을 만족하는 둘째 이항연산'으로 정의해도 된다고 적는다. 이 항목은 그 둘째 방식을 따르고 환을 (R, +, ·) 로 적는다(출처는 R 로 쓴다). 출처는 단위원을 갖는 환을 '1 ≠ 0 이고 모든 a 에서 1a = a1 = a 인 1 이 있는 환'으로, 가환환을 '모든 a, b 에서 ab = ba 인 환'으로 정의한다(p.190). 이 항목은 1 ≠ 0 없이 '곱셈의 항등원'을 먼저 부르고 단위원을 갖는 환에 1 ≠ 0 을 요구하는데, 단위원을 갖는 환의 뜻은 출처와 같다. 출처는 unity 와 identity 를 같은 뜻으로 쓴다. 정수배: 출처는 표수를 정의하는 곳(p.194)에서 음이 아닌 정수 n 에 대해 'r + ⋯ + r (n 개)'를 nr 로 쓰고, Lemma 16.18 의 증명(p.195)에서 nr = n(1r) = (n1)r 로 쓴다. 이 항목은 2단원의 n·a (모든 정수 n)를 쓰고 가운뎃점으로 환의 곱과 구별한다. (1)의 영환: 출처는 연습문제 16.31(p.206)에서 '환의 단위원이 0 과 다르기를 요구하지 않으면 그리 흥미로운 구조를 얻지 못한다'고 적고 1 = 0 인 환은 R = {0} 임을 보이게 한다. 직관의 '1 ≠ 0 을 따로 요구하는 까닭'은 이 문장에 기댄다. '영환'(zero ring)이라는 이름은 출처에서 찾지 못했다(검색어 'zero ring', 'trivial ring', 'one element|single element|only element' 를 책 전체에서. 'R = {0}' 은 연습문제 16.31 한 곳). (2)는 출처가 정의에서 R 이 공집합이 아니라고 적는 것과 같은 내용이다. 첫째 예시(곱을 모두 0 으로 정한 ℤ)의 결론 가운데 '곱셈의 항등원이 없는 환'은 출처 Example 16.9(p.193, nℤ)와 연습문제 16.2(p.204, 단위원이 없는 2 × 2 행렬의 환)와 같은 결론이다. 출처 연습문제 16.1(p.204)은 주어진 집합들이 보통의 덧셈과 곱셈으로 환인지 묻는다(힌트 p.329: (f)는 환이 아니다). 첫째 반례의 ℕ 은 출처 p.4 의 기호 N(자연수)이다. 둘째 확인 질문의 (−1)·a = −a 는 정수배의 계산이고, 출처 연습문제 16.17(p.205)의 (−1)a = −a 는 단위원을 갖는 환에서 원소 −1 과의 곱에 관한 것이다(이 사이트에서는 환의 기본 성질의 (6))."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
$R$이 [[set]]이고 $+$와 $\cdot$이 $R$ 위의 두 [[binary-operation|이항연산]]이라 하자. $(a, b) \in R \times R$에서의 두 연산의 값을 각각 $a + b$, $a \cdot b$로 쓰고, 이 둘을 $a$와 $b$의 **합**과 **곱**이라 한다. 집합 $R$과 두 연산을 이 순서로 함께 적은 것을 $(R, +, \cdot)$로 쓰고, $(R, +, \cdot)$와 $(R', +', \cdot')$은 $R = R'$이고 $+$와 $+'$이 같은 연산이며 $\cdot$과 $\cdot'$이 같은 연산일 때 같은 것으로 본다. $(R, +, \cdot)$가 **환**(ring)인 것은 정확히 다음 세 조건이 모두 성립할 때이다.

- (덧셈) $(R, +)$가 [[group|아벨군]]이다.
- (곱셈의 결합법칙) 모든 $a, b, c \in R$에 대하여 $(a \cdot b) \cdot c = a \cdot (b \cdot c)$이다.
- (분배법칙) 모든 $a, b, c \in R$에 대하여 $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$이고 $(a + b) \cdot c = (a \cdot c) + (b \cdot c)$이다.

**덧셈의 표기.** 아벨군 $(R, +)$에는 [[number-groups|수로 이루어진 군]]의 덧셈 표기를 쓴다. 덧셈의 항등원을 $0$(환을 밝혀야 하면 $0_R$)으로, $a$의 덧셈의 역원을 $-a$로, $a + (-b)$를 $a - b$로 쓰고, 세 원소의 합을 괄호 없이 $a + b + c$로 쓴다.

**곱의 표기.** 환의 곱 $a \cdot b$는 가운뎃점 없이 $ab$로 쓴다. 가운뎃점은 연산의 이름 $(R, +, \cdot)$와 아래의 정수배 $n \cdot a$에 쓰고, 구체적인 정수나 실수끼리의 곱은 지금까지처럼 $2 \cdot 3$으로도 쓴다. 곱을 합보다 먼저 계산한다. 곧 $ab + c$는 $(ab) + c$, $ab - c$는 $(ab) - c$, $c + ab$는 $c + (ab)$를 뜻한다. $ab$의 덧셈의 역원은 괄호를 쳐 $-(ab)$로 쓴다. 곱셈의 결합법칙에 의해 $(ab)c = a(bc)$이므로 이 원소를 괄호 없이 $abc$로 쓴다. 네 개 이상의 원소의 곱과 합은 괄호를 쳐서 쓴다.

**단위원을 갖는 환.** 곱셈 $\cdot$의 항등원, 곧 모든 $a \in R$에 대하여 $ea = a$이고 $ae = a$인 $e \in R$을 $R$의 **곱셈의 항등원**이라 한다. [[binary-operation|이항연산]]의 (1)에 의해 곱셈의 항등원은 있으면 하나뿐이다. 환 $(R, +, \cdot)$가 **단위원을 갖는 환**(ring with unity, ring with identity)인 것은 정확히 $R$에 곱셈의 항등원이 있고 그것이 $0$과 다를 때이다. 이때 곱셈의 항등원을 $R$의 **단위원**(unity)이라 하고 $1$(환을 밝혀야 하면 $1_R$)로 쓴다.

**가환환.** 환 $(R, +, \cdot)$가 **가환환**(commutative ring)인 것은 정확히 곱셈이 교환법칙을 만족할 때, 곧 모든 $a, b \in R$에 대하여 $ab = ba$일 때이다. 환의 정의는 곱셈의 교환법칙도, 곱셈의 항등원도 요구하지 않는다. 덧셈은 언제나 교환법칙을 만족한다.

**줄여 부르기와 기호.** 두 연산이 문맥에서 분명하면 환 $(R, +, \cdot)$를 "환 $R$"이라 부른다. 기호 $0$과 $1$은 $R$의 원소의 이름이며 정수 $0$, $1$과 같은 글자이다. 정수와 구별해야 하면 $0_R$, $1_R$로 쓴다.

**정수배.** $n$이 정수이고 $a \in R$이면 $n \cdot a$는 덧셈군 $(R, +)$에서의 $a$의 $n$배, 곧 [[power-in-a-group|군의 거듭제곱]]의 (4)의 $n \cdot a$이다. 따라서 $1 \cdot a = a$, $0 \cdot a = 0_R$이고, 모든 자연수 $n$에서 $(n + 1) \cdot a = n \cdot a + a$, $(-n) \cdot a = n \cdot (-a)$이다. $n \cdot a$는 환의 곱이 아니다. 환의 곱은 $R$의 두 원소에 대한 것이고 언제나 가운뎃점 없이 쓰며, 정수배 $n \cdot a$에는 언제나 가운뎃점을 붙인다. $R$이 정수 $n$을 원소로 갖더라도 $n \cdot a$는 덧셈군에서의 $n$배를 뜻한다.

다음이 성립한다.

1. (영환) $x$가 대상이면 집합 $\{x\}$ 위의 이항연산은 $x \ast x = x$인 것 하나뿐이다. 이 연산을 덧셈과 곱셈으로 둘 다 쓴 $(\{x\}, +, \cdot)$는 가환환이다. 이 환의 $0$은 $x$이고, $x$는 곱셈의 항등원이지만 $0$과 같으므로 이 환은 단위원을 갖는 환이 아니다. 원소가 하나인 집합 위의 환은 모두 이것이다. 이 환을 **영환**(zero ring)이라 하고, 그 원소가 $0$이므로 $\{0\}$으로 쓴다.
2. (공집합) $R = \emptyset$이면 $\emptyset$ 위의 어떤 두 이항연산 $+$, $\cdot$에 대해서도 $(\emptyset, +, \cdot)$는 환이 아니다.
:::

:::english
Let $R$ be a set and let $+$ and $\cdot$ be two binary operations on $R$. Their values at $(a, b) \in R \times R$ are written $a + b$ and $a \cdot b$ and are called the **sum** and the **product** of $a$ and $b$. The set $R$ together with the two operations, written in this order, is denoted $(R, +, \cdot)$; we regard $(R, +, \cdot)$ and $(R', +', \cdot')$ as the same when $R = R'$, $+$ and $+'$ are the same operation, and $\cdot$ and $\cdot'$ are the same operation. $(R, +, \cdot)$ is a **ring** exactly when all three of the following conditions hold.

- (Addition) $(R, +)$ is an abelian group.
- (Associativity of multiplication) $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ for all $a, b, c \in R$.
- (Distributive laws) $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$ and $(a + b) \cdot c = (a \cdot c) + (b \cdot c)$ for all $a, b, c \in R$.

**Notation for addition.** For the abelian group $(R, +)$ we use the additive notation of the entry on groups of numbers. The additive identity is written $0$ (or $0_R$ when the ring must be named), the additive inverse of $a$ is written $-a$, $a + (-b)$ is written $a - b$, and a sum of three elements is written $a + b + c$ without parentheses.

**Notation for products.** The product $a \cdot b$ in a ring is written $ab$, without the dot. The dot is used in the name $(R, +, \cdot)$ of the operations and for the integer multiples $n \cdot a$ below, while products of specific integers or real numbers may still be written as $2 \cdot 3$. Products are computed before sums: $ab + c$ means $(ab) + c$, $ab - c$ means $(ab) - c$, and $c + ab$ means $c + (ab)$. The additive inverse of $ab$ is written with parentheses as $-(ab)$. By associativity of multiplication $(ab)c = a(bc)$, and this element is written $abc$ without parentheses. Products and sums of four or more elements are written with parentheses.

**Rings with unity.** An identity element of the multiplication $\cdot$, that is, an $e \in R$ with $ea = a$ and $ae = a$ for all $a \in R$, is called a **multiplicative identity** of $R$. By (1) of the entry on binary operations, a multiplicative identity is unique if it exists. A ring $(R, +, \cdot)$ is a **ring with unity** (ring with identity) exactly when $R$ has a multiplicative identity and it is different from $0$. In that case the multiplicative identity is called the **unity** of $R$ and is written $1$ (or $1_R$ when the ring must be named).

**Commutative rings.** A ring $(R, +, \cdot)$ is a **commutative ring** exactly when multiplication is commutative, that is, $ab = ba$ for all $a, b \in R$. The definition of a ring requires neither commutativity of multiplication nor a multiplicative identity. Addition is always commutative.

**Abbreviations and symbols.** When the two operations are clear from the context, the ring $(R, +, \cdot)$ is called "the ring $R$". The symbols $0$ and $1$ are names of elements of $R$ and are the same letters as the integers $0$ and $1$. When they must be distinguished from the integers, we write $0_R$ and $1_R$.

**Integer multiples.** If $n$ is an integer and $a \in R$, then $n \cdot a$ is the $n$th multiple of $a$ in the additive group $(R, +)$, that is, the $n \cdot a$ of (4) in the entry on powers in a group. Thus $1 \cdot a = a$, $0 \cdot a = 0_R$, and for every natural number $n$, $(n + 1) \cdot a = n \cdot a + a$ and $(-n) \cdot a = n \cdot (-a)$. The multiple $n \cdot a$ is not a product in the ring. A product in the ring is taken of two elements of $R$ and is always written without the dot, while the multiple $n \cdot a$ is always written with the dot. Even if $R$ has the integer $n$ as an element, $n \cdot a$ means the $n$th multiple in the additive group.

The following hold.

1. (The zero ring) If $x$ is an object, the only binary operation on the set $\{x\}$ is the one with $x \ast x = x$. With this operation used as both addition and multiplication, $(\{x\}, +, \cdot)$ is a commutative ring. Its $0$ is $x$, and $x$ is a multiplicative identity, but it equals $0$, so this ring is not a ring with unity. Every ring on a one-element set is this one. It is called the **zero ring** and, since its element is $0$, it is written $\{0\}$.
2. (The empty set) If $R = \emptyset$, then $(\emptyset, +, \cdot)$ is not a ring for any two binary operations $+$ and $\cdot$ on $\emptyset$.
:::

## 직관

군은 연산 하나를 다루었습니다. 정수에는 덧셈과 곱셈이 함께 있고, 둘은 "괄호 풀기" $a(b + c) = ab + ac$로 이어져 있습니다. 환은 이 셋, 곧 마음대로 더하고 뺄 수 있다는 것(덧셈으로 아벨군), 곱을 묶는 순서를 바꿔도 된다는 것(곱셈의 결합법칙), 괄호를 풀 수 있다는 것(분배법칙)만 남기고 나머지를 버린 것입니다.

분배법칙은 장보기 계산과 같습니다. 한 묶음에 사과와 배가 들어 있으면, 묶음 값을 먼저 더한 뒤 묶음 수를 곱해도 되고, 사과 값과 배 값에 따로 묶음 수를 곱해 더해도 됩니다. 묶음 값의 합이 $b + c$, 두 계산이 같다는 것이 $a(b + c) = ab + ac$에 해당합니다. 비유가 정의와 어긋나는 곳도 있습니다. 장보기의 묶음 수는 정수이지만 환의 분배법칙에서 $a$는 환의 원소입니다. 정수를 곱하는 쪽은 환에서 정수배 $n \cdot a$이고, 이것은 환의 곱과 다른 것입니다(아래 첫째 예시).

환의 정의는 곱셈의 항등원을 요구하지 않습니다. 그래서 짝수 전체처럼 곱셈의 항등원이 없는 집합도 정수의 덧셈과 곱셈으로 환이 됩니다([[ring-examples|환의 예]]의 (4)). 곱셈의 항등원이 있을 때 "$1 \ne 0$"을 따로 요구하는 까닭은 (1)의 영환에 있습니다. 영환에서는 덧셈의 항등원과 곱셈의 항등원이 같은 원소이고, 이런 일은 원소가 하나인 환에서만 일어납니다([[ring-basic-properties|환의 기본 성질]]의 (7)).

:::remark[(1)과 (2)의 증명]
(1) [[group|군]]의 (5)에 의해 $\{x\}$ 위의 이항연산은 $x \ast x = x$인 것 하나뿐이고, 그 연산으로 $(\{x\}, \ast)$는 아벨군이며 항등원은 $x$이다. 따라서 덧셈과 곱셈이 둘 다 이 연산이면 $(\{x\}, +)$는 아벨군이고 $0 = x$이다. $\{x\}$의 원소는 $x$뿐이므로 $a, b, c \in \{x\}$이면 $a = b = c = x$이고, $x + x = x$, $xx = x$에 의해
$$(xx)x = xx = x = x(xx), \qquad x(x + x) = xx = x = x + x = xx + xx$$
이며, 같은 계산으로 $(x + x)x = xx + xx$이다. 따라서 곱셈은 결합법칙과 양쪽 분배법칙을 만족하고 $(\{x\}, +, \cdot)$는 환이다. $xx = xx$이므로 가환환이다. $xx = x$이므로 $x$는 곱셈의 항등원이다. 그런데 $0 = x$이므로 곱셈의 항등원이 $0$과 같고, 단위원을 갖는 환의 정의에 의해 이 환은 단위원을 갖는 환이 아니다. 원소가 하나인 집합 $\{x\}$ 위의 환 $(\{x\}, +, \cdot)$에서 $+$와 $\cdot$은 둘 다 $\{x\}$ 위의 이항연산이므로 둘 다 위의 하나뿐인 연산이다. 따라서 그런 환은 모두 위의 환이다.

(2) [[group|군]]의 (4)에 의해 $\emptyset$ 위의 어떤 이항연산 $+$에 대해서도 $(\emptyset, +)$는 군이 아니다. 따라서 환의 첫째 조건이 성립하지 않는다.
:::

## 예시와 반례

:::example[곱을 모두 0으로 정한 정수의 환]
정수의 집합 $\mathbb{Z}$에 정수의 덧셈 $+$를 주고, 곱셈 대신 모든 $a, b \in \mathbb{Z}$에서 $a \ast b = 0$인 연산 $\ast$를 줍니다. 각 $(a, b) \in \mathbb{Z} \times \mathbb{Z}$에 정수 $0$이 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\ast$는 $\mathbb{Z} \times \mathbb{Z}$에서 $\mathbb{Z}$로의 함수, 곧 $\mathbb{Z}$ 위의 이항연산입니다.

$(\mathbb{Z}, +, \ast)$가 환임을 확인합니다. [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$는 아벨군입니다. $a, b, c \in \mathbb{Z}$이면 $(a \ast b) \ast c = 0 \ast c = 0$이고 $a \ast (b \ast c) = a \ast 0 = 0$이므로 결합법칙이 성립합니다. $a \ast (b + c) = 0$이고 $(a \ast b) + (a \ast c) = 0 + 0 = 0$이며, 같은 계산으로 $(a + b) \ast c = (a \ast c) + (b \ast c)$이므로 분배법칙도 성립합니다. $a \ast b = 0 = b \ast a$이므로 가환환입니다.

이 환에는 곱셈의 항등원이 없습니다. $e$가 곱셈의 항등원이라면 $e \ast 1 = 1$이어야 하는데 $e \ast 1 = 0$이고, [[well-ordering-principle|정렬 원리]]의 진술의 (L3)에 의해 $0 \ne 1$이기 때문입니다.

이 환에서 정수배와 환의 곱이 다르다는 것을 볼 수 있습니다. $2$와 $1$은 둘 다 이 환의 원소입니다. 덧셈군 $(\mathbb{Z}, +)$에서의 $1$의 $2$배는 [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 정수의 곱 $2 \cdot 1 = 2$이지만, 환의 곱 $2 \ast 1$은 $0$입니다. 구체적인 정수 사이의 부등식 $0 \ne 2$(정렬 원리의 진술에서 받아들인 계산)에 의해 둘은 다릅니다.
:::

:::counterexample[덧셈과 곱셈에 닫혀 있지만 환이 아닌 자연수 전체]
$\mathbb{N}$은 양의 정수의 집합입니다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). $a, b \in \mathbb{N}$이라 합시다. $a + b$와 $ab$는 정수입니다([[even-and-odd]]에서 받아들인 사실). $0 < b$의 양변에 $a$를 더하면 $a < a + b$이고((Z7)) $0 < a$와 함께 $0 < a + b$입니다((Z6)). 또 [[prime-number]]의 (Z1)에 의해 $1 \le a$이고, (Z3)에 의해 $1 \cdot b \le ab$이므로 $0 < b \le ab$에서 $0 < ab$입니다((Z6)). 여기서 (Z6), (Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질입니다. 따라서 $a + b, ab \in \mathbb{N}$이고, 정수의 덧셈과 곱셈을 $\mathbb{N}$으로 제한한 두 연산이 있습니다([[binary-operation|이항연산]]의 (3)).

그래도 이 둘로 $\mathbb{N}$은 환이 아닙니다. $(\mathbb{N}, +)$에 덧셈의 항등원 $e$가 있다면 $e + 1 = 1$이고, 양변에서 $1$을 빼면 (Z7)에 의해 $e = 0$입니다. 그런데 $0 < 0$은 $0 = 0$과 함께 성립할 수 없으므로(삼분법 (Z5)) $0 \notin \mathbb{N}$입니다. 따라서 $(\mathbb{N}, +)$는 항등원이 없어 군이 아니고, 환의 첫째 조건이 깨집니다.
:::

:::counterexample[정수에서 곱셈 자리에 덧셈을 한 번 더 쓰면 분배법칙이 깨진다]
$\mathbb{Z}$에 덧셈 $+$를 주고, 곱셈 자리에도 덧셈을 써서 $a \ast b = a + b$로 정해 봅니다. $(\mathbb{Z}, +)$는 아벨군이고 $\ast$는 결합법칙을 만족하지만([[binary-operation|이항연산]]의 (4)), $(\mathbb{Z}, +, \ast)$는 환이 아닙니다. $a = 1$, $b = c = 0$이면
$$1 \ast (0 + 0) = 1 + 0 = 1, \qquad (1 \ast 0) + (1 \ast 0) = 1 + 1 = 2$$
이고 $1 \ne 2$이므로 분배법칙이 깨집니다. 분배법칙은 두 연산이 서로 맞물려 있을 것을 요구하는 조건입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}$에 정수의 덧셈과, 모든 $a, b$에서 $a \ast b = b$인 연산 $\ast$를 주면 $(\mathbb{Z}, +, \ast)$는 환인가?]
환이 아닙니다. $\ast$는 결합법칙을 만족하고($(a \ast b) \ast c = c = a \ast (b \ast c)$) 왼쪽 분배법칙 $a \ast (b + c) = b + c = (a \ast b) + (a \ast c)$도 성립합니다. 그러나 오른쪽 분배법칙이 깨집니다. $a = b = c = 1$이면 $(1 + 1) \ast 1 = 1$이고 $(1 \ast 1) + (1 \ast 1) = 1 + 1 = 2$이며 $1 \ne 2$입니다. 곱셈이 가환이면 한쪽 분배법칙에서 다른 쪽이 나오지만, 이 $\ast$처럼 가환이 아닌 연산에서는 한쪽만 성립할 수 있습니다.
:::

:::check[환 $R$의 원소 $a$에 대하여 $(-1) \cdot a$와 $2 \cdot a$를 덧셈과 $-a$로 나타내어라.]
정수배의 규칙 $(-n) \cdot a = n \cdot (-a)$에 $n = 1$을 넣으면 $(-1) \cdot a = 1 \cdot (-a) = -a$입니다. $(n + 1) \cdot a = n \cdot a + a$에 $n = 1$을 넣으면 $2 \cdot a = 1 \cdot a + a = a + a$입니다. 둘 다 덧셈군 $(R, +)$에서의 계산이고 환의 곱을 쓰지 않습니다.
:::
