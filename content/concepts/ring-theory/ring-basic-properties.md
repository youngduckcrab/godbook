---
title: 환의 기본 성질
title_en: Basic Properties of Rings
aliases: [영을 곱하면 영, 부호 규칙, 음수 곱하기 음수, sign rules in a ring]
kind: theorem
field: ring-theory
msc: ["16"]
level: undergrad
summary: 환에서 a0 = 0a = 0, a(−b) = (−a)b = −(ab), (−a)(−b) = ab이고 곱이 뺄셈에 대해 분배되며, 정수배는 곱의 어느 쪽으로든 옮길 수 있다. 단위원을 갖는 환에서는 (−1)a = −a이고, 곱셈의 항등원이 0과 같은 환은 영환뿐이다.
requires: [ring, group-basic-properties, power-in-a-group, laws-of-exponents, mathematical-induction, number-groups, recursion-theorem, well-ordering-principle, integer-cancellation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 Proposition 16.8 p.192–193, Lemma 16.18 의 증명 p.195, 16.7절 연습문제 17, 31 p.205–206
    checked: original
    note: "(1)–(3)은 출처 Proposition 16.8(p.192–193)과 같다. 출처는 (2)의 오른쪽을 −ab 로 쓴다. 출처의 증명은 (1)을 a0 = a(0 + 0) = a0 + a0 에서, (2)를 ab + a(−b) = a(b − b) = a0 = 0 에서, (3)을 (2)에서 얻어 이 항목과 같은 길이고, 0a = 0 과 (−a)b = −ab 는 'Similarly' 로 넘긴다. 이 항목은 두 경우를 모두 쓰고, 'a0 = a0 + a0 이므로 a0 = 0' 과 '합이 0 이므로 덧셈의 역원'을 군의 기본 성질의 (9), (3)으로 짚는다. (4)는 출처에 명제로 없다(검색어 'ab − ac|a(b − c)' 1건, '(a − b)c|ac − bc' 0건, 'subtraction' 1건(p.303)을 책 전체에서; 16장 연습문제 1–39 에도 없다). 출처는 Proposition 16.8 의 증명에서 a(b − b) = a0 을, Proposition 16.15 의 증명(p.194)에서 ab = ac 이면 a(b − c) = 0 을 쓰고 그 근거를 적지 않는다. (5)는 출처에 명제로 없다(검색어 'nr|n(ab)|(na)b' 5건 가운데 환에 관한 3건이 p.194–195, 16장 연습문제에도 없다). 출처는 Lemma 16.18 의 증명(p.195)에서 음이 아닌 n 에 대해 nr = n(1r) = (n1)r 을 쓰고 그 근거를 적지 않는다. 이 항목은 모든 정수 n 에 대해 귀납법과 음수의 경우로 증명한다. (6)의 (−1)a = −a 는 출처 연습문제 16.17(p.205)이다. n·a = (n·1)a 는 위 Lemma 16.18 의 증명의 등식이고, (m·1)(n·1) = (mn)·1 은 Theorem 16.19 의 증명(p.195)이 (ab)1 = (a1)(b1) 로 쓰고 근거를 적지 않는 것이다. (7)의 'e = 0 이면 R = {0}' 은 출처 연습문제 16.31(p.206)이다. 예시((a + b)(a − b) 의 전개)는 출처 연습문제 16.28 의 힌트(p.329)가 '(a + b)² 을 계산하라'고 하는 것과 같은 종류의 전개이다. 반례에 쓴 환(곱을 모두 0 으로 정한 ℤ)은 환 항목의 첫째 예시와 같다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
$R$이 [[ring|환]]이라 하자. $0$, $-a$, $a - b$, 곱 $ab$, 정수배 $n \cdot a$는 [[ring|환]]의 표기이다. 아래에서 $a$, $b$, $c$는 $R$의 원소이고 $n$, $m$은 정수이다.

1. (영을 곱하기) $a0 = 0$이고 $0a = 0$이다.
2. (부호) $a(-b) = -(ab)$이고 $(-a)b = -(ab)$이다.
3. $(-a)(-b) = ab$이다.
4. (뺄셈의 분배) $a(b - c) = ab - ac$이고 $(a - b)c = ac - bc$이다.
5. (정수배와 곱) $(n \cdot a)b = n \cdot (ab) = a(n \cdot b)$이다.
6. (단위원을 갖는 환) $R$이 단위원 $1$을 갖는 환이라 하자. 여기서 $-1$은 $R$의 원소 $1$의 덧셈의 역원을 뜻한다(정수 $-1$로 읽지 않는다). 그러면 $(-1)a = -a = a(-1)$이고 $(-1)(-1) = 1$이다. 또 $n \cdot a = (n \cdot 1)a = a(n \cdot 1)$이고 $(m \cdot 1)(n \cdot 1) = (mn) \cdot 1$이다.
7. (곱셈의 항등원이 0인 경우) $R$에 곱셈의 항등원 $e$가 있다고 하자. $e = 0$인 것은 정확히 $R = \{0\}$일 때이다. 따라서 곱셈의 항등원을 갖는 환 $R$이 단위원을 갖는 환인 것은 정확히 $R \ne \{0\}$일 때이다. 특히 단위원을 갖는 환은 서로 다른 두 원소 $0$과 $1$을 갖는다.
:::

:::english
Let $R$ be a ring. The notation $0$, $-a$, $a - b$, the product $ab$ and the integer multiple $n \cdot a$ are those of the entry on rings. Below, $a$, $b$, $c$ are elements of $R$ and $n$, $m$ are integers.

1. (Multiplying by zero) $a0 = 0$ and $0a = 0$.
2. (Signs) $a(-b) = -(ab)$ and $(-a)b = -(ab)$.
3. $(-a)(-b) = ab$.
4. (Distributing over subtraction) $a(b - c) = ab - ac$ and $(a - b)c = ac - bc$.
5. (Integer multiples and products) $(n \cdot a)b = n \cdot (ab) = a(n \cdot b)$.
6. (Rings with unity) Let $R$ be a ring with unity $1$. Here $-1$ denotes the additive inverse of the element $1$ of $R$ (it is not read as the integer $-1$). Then $(-1)a = -a = a(-1)$ and $(-1)(-1) = 1$. Moreover $n \cdot a = (n \cdot 1)a = a(n \cdot 1)$ and $(m \cdot 1)(n \cdot 1) = (mn) \cdot 1$.
7. (When the multiplicative identity is $0$) Suppose $R$ has a multiplicative identity $e$. Then $e = 0$ exactly when $R = \{0\}$. Hence a ring $R$ with a multiplicative identity is a ring with unity exactly when $R \ne \{0\}$. In particular, a ring with unity has two distinct elements $0$ and $1$.
:::

## 직관

학교에서 "음수 곱하기 음수는 양수"를 규칙으로 외웠다면, 이 항목은 그 규칙이 따로 정한 약속이 아니라 분배법칙과 덧셈의 성질에서 나온다는 것을 보여 줍니다. 핵심은 (1)입니다. $0 = 0 + 0$의 양쪽에 $a$를 곱하고 분배법칙으로 풀면 $a0 = a0 + a0$가 되고, 덧셈군에서 자기 자신을 더해 그대로인 원소는 $0$뿐입니다. (2)는 $ab$와 $a(-b)$를 더하면 $a(b + (-b)) = a0 = 0$이 된다는 것, 곧 $a(-b)$가 $ab$를 지우는 원소라는 것입니다.

장부에 비유하면, 같은 금액 $b$의 지출 항목에 반대 금액 $-b$의 환불 항목이 붙어 있으면 두 항목을 몇 배로 하든 합은 $0$입니다. 장부의 "몇 배"가 곱 $a$, 지출과 환불이 서로 지운다는 것이 $b + (-b) = 0$, 몇 배로 해도 합이 $0$이라는 것이 $a(b + (-b)) = a0 = 0$에 해당합니다. 장부의 배수는 정수이므로 이 비유는 환의 곱보다 정수배 $n \cdot a$에 더 가깝습니다. (5)는 정수배를 곱의 어느 쪽에 두어도 같다는 것을 말합니다.

(7)은 [[ring|환]]의 정의가 단위원에 $1 \ne 0$을 요구하는 까닭입니다. 곱셈의 항등원 $e$가 $0$이면 모든 원소가 $a = ae = a0 = 0$이 되어 환에 원소가 하나만 남습니다.

## 증명

:::idea
(1)은 $0 = 0 + 0$에 분배법칙을 쓰고 덧셈군의 소거를 쓴다. (2)는 "더해서 $0$이 되는 원소는 덧셈의 역원"이라는 군의 성질을 쓴다. (5)는 정수배의 재귀적 정의를 따라 자연수에 대한 귀납법으로 보이고, $0$과 음의 정수는 따로 처리한다.
:::

:::hint
(1): 덧셈군 $(R, +)$에서 $x + x = x$이면 $x = 0$이다. [[group-basic-properties|군의 기본 성질]]의 (9)를 덧셈 표기로 읽는다.
:::

:::hint
(5): 자연수 $n$에서 $((n + 1) \cdot a)b = (n \cdot a + a)b$를 오른쪽 분배법칙으로 푼다. 음의 정수 $-m$에서는 $(-m) \cdot a = m \cdot (-a)$와 (2)를 쓴다.
:::

:::proof
$(R, +)$는 아벨군이고 덧셈 표기로 쓰므로([[ring|환]]의 정의와 표기), [[group-basic-properties|군의 기본 성질]]의 번호는 덧셈 표기로 읽는다. 곧 그 항목의 (3)은 "$x + y = 0$이면 $y = -x$", (5)는 "$-(-x) = x$", (9)는 "$x + x = x$이면 $x = 0$"이다.

**(1)** $0$은 덧셈의 항등원이므로 $0 + 0 = 0$이다. 왼쪽 분배법칙에 의해 $a0 = a(0 + 0) = a0 + a0$이고, 군의 기본 성질의 (9)에 의해 $a0 = 0$이다. 오른쪽 분배법칙에 의해 $0a = (0 + 0)a = 0a + 0a$이고, 같은 이유로 $0a = 0$이다.

**(2)** $b + (-b) = 0$이므로 왼쪽 분배법칙과 (1)에 의해 $ab + a(-b) = a(b + (-b)) = a0 = 0$이다. 군의 기본 성질의 (3)에 의해 $a(-b) = -(ab)$이다. 또 $a + (-a) = 0$이므로 오른쪽 분배법칙과 (1)에 의해 $ab + (-a)b = (a + (-a))b = 0b = 0$이고, 같은 성질에 의해 $(-a)b = -(ab)$이다.

**(3)** (2)의 둘째 등식을 $a$와 $-b$에 쓰면 $(-a)(-b) = -(a(-b))$이고, (2)의 첫째 등식에 의해 $a(-b) = -(ab)$이므로 $(-a)(-b) = -(-(ab))$이다. 군의 기본 성질의 (5)에 의해 이것은 $ab$이다.

**(4)** $b - c = b + (-c)$이므로 왼쪽 분배법칙과 (2)에 의해 $a(b - c) = ab + a(-c) = ab + (-(ac)) = ab - ac$이다. 또 $a - b = a + (-b)$이므로 오른쪽 분배법칙과 (2)에 의해 $(a - b)c = ac + (-b)c = ac + (-(bc)) = ac - bc$이다.

**(5)** 정수배는 [[power-in-a-group|군의 거듭제곱]]의 (4)의 것이므로, 모든 $x \in R$에서 $1 \cdot x = x$, $0 \cdot x = 0$이고, 모든 자연수 $k$에서 $(k + 1) \cdot x = k \cdot x + x$, $(-k) \cdot x = k \cdot (-x)$이다. 이것을 아래에서 "정수배의 규칙"이라 부른다.

먼저 자연수 $k$에 대하여, 모든 $x, y \in R$에서 $(k \cdot x)y = k \cdot (xy)$이고 $x(k \cdot y) = k \cdot (xy)$임을 $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $k = 1$이면 정수배의 규칙에 의해 $(1 \cdot x)y = xy = 1 \cdot (xy)$이고 $x(1 \cdot y) = xy = 1 \cdot (xy)$이다. 자연수 $k$에서 두 등식이 모든 $x$, $y$에 대해 성립한다고 하자. 정수배의 규칙, 오른쪽 분배법칙, 귀납 가정, 다시 정수배의 규칙에 의해
$$((k + 1) \cdot x)y = (k \cdot x + x)y = (k \cdot x)y + xy = k \cdot (xy) + xy = (k + 1) \cdot (xy)$$
이고, 같은 순서로 왼쪽 분배법칙을 쓰면
$$x((k + 1) \cdot y) = x(k \cdot y + y) = x(k \cdot y) + xy = k \cdot (xy) + xy = (k + 1) \cdot (xy)$$
이다. 따라서 모든 자연수 $k$에서 두 등식이 성립한다.

이제 정수 $n$을 생각한다. [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 삼분법 (Z5)에 의해 $n > 0$, $n = 0$, $n < 0$ 가운데 하나가 성립한다.

- $n > 0$이면 $n$은 자연수이고, 위에서 $x = a$, $y = b$로 두면 $(n \cdot a)b = n \cdot (ab) = a(n \cdot b)$이다.
- $n = 0$이면 정수배의 규칙과 (1)에 의해 $(0 \cdot a)b = 0b = 0 = 0 \cdot (ab)$이고 $a(0 \cdot b) = a0 = 0$이다.
- $n < 0$이면 양변에 $-n$을 더해 $0 < -n$이므로((Z7)) $m = -n$은 자연수이고 $n = -m$이다. 정수배의 규칙, 위의 자연수의 경우($x = -a$ 또는 $y = -b$), (2), 다시 정수배의 규칙에 의해
$$((-m) \cdot a)b = (m \cdot (-a))b = m \cdot ((-a)b) = m \cdot (-(ab)) = (-m) \cdot (ab),$$
$$a((-m) \cdot b) = a(m \cdot (-b)) = m \cdot (a(-b)) = m \cdot (-(ab)) = (-m) \cdot (ab)$$
이다.

세 경우 모두 $(n \cdot a)b = n \cdot (ab) = a(n \cdot b)$이다.

**(6)** $1$은 곱셈의 항등원이므로 $1a = a$, $a1 = a$이다. (2)에 의해 $(-1)a = -(1a) = -a$이고 $a(-1) = -(a1) = -a$이다. (3)에 의해 $(-1)(-1)$은 $1$과 $1$의 곱이고, $1$이 곱셈의 항등원이므로 이 곱은 $1$이다. (5)를 $1$과 $a$에 쓰면 $(n \cdot 1)a = n \cdot (1a) = n \cdot a$이고, (5)를 $a$와 $1$에 쓰면 $a(n \cdot 1) = n \cdot (a1) = n \cdot a$이다. 마지막으로 (5)를 $1$과 $n \cdot 1$에 쓰면 $(m \cdot 1)(n \cdot 1) = m \cdot (1(n \cdot 1)) = m \cdot (n \cdot 1)$이고, [[laws-of-exponents|지수법칙]]의 (6)의 $n \cdot (m \cdot x) = (nm) \cdot x$(여기서는 두 정수의 자리를 바꾸어 $m \cdot (n \cdot 1) = (mn) \cdot 1$)에 의해 이것은 $(mn) \cdot 1$이다.

**(7)** $e = 0$이라 하자. $a \in R$이면 $e$가 곱셈의 항등원이므로 $a = ae = a0$이고, (1)에 의해 $a0 = 0$이다. 따라서 $R$의 모든 원소가 $0$이므로 $R \subseteq \{0\}$이고, $0 \in R$이므로 $R = \{0\}$이다. 거꾸로 $R = \{0\}$이면 $e \in R$이므로 $e = 0$이다.

곱셈의 항등원 $e$를 갖는 환 $R$이 단위원을 갖는 환인 것은 [[ring|환]]의 정의에 의해 정확히 $e \ne 0$일 때이고, 방금 보인 것에 의해 이것은 정확히 $R \ne \{0\}$일 때이다. 단위원을 갖는 환에서는 단위원 $1$이 $0$과 다르므로 $0$과 $1$은 $R$의 서로 다른 두 원소이다.
:::

## 예시와 반례

:::example[두 합의 곱 펼치기]
환 $R$의 원소 $a$, $b$에 대하여 $(a + b)(a - b)$를 펼쳐 봅니다. 오른쪽 분배법칙과 (4)에 의해
$$(a + b)(a - b) = a(a - b) + b(a - b) = (aa - ab) + (ba - bb)$$
입니다. $R$이 가환환이면 $ba = ab$이므로 오른쪽은 $(aa + (-(ab))) + (ab + (-(bb)))$입니다. 덧셈의 결합법칙을 두 번 쓰면 이것은 $aa + (((-(ab)) + ab) + (-(bb)))$이고, $(-(ab)) + ab = 0$이므로 $aa + (0 + (-(bb))) = aa - bb$입니다. 곧 가환환에서는 익숙한 공식 $(a + b)(a - b) = aa - bb$가 성립합니다. 가환이 아니면 $ab$와 $ba$가 지워지지 않을 수 있으므로 이 공식을 그대로 쓰지 않습니다.
:::

:::counterexample[정수의 소거법칙은 환의 공리에서 나오지 않는다]
정수에서는 $a \ne 0$이고 $ab = ac$이면 $b = c$입니다([[integer-cancellation|정수의 소거법칙]]의 (2)). 이 항목의 (1)–(7)에는 이런 성질이 없고, 실제로 환의 공리만으로는 나오지 않습니다.

[[ring|환]]의 첫째 예시처럼 $\mathbb{Z}$에 정수의 덧셈과, 모든 $a, b$에서 $a \ast b = 0$인 곱셈 $\ast$를 줍니다. $\ast$는 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\mathbb{Z}$ 위의 이항연산이고, $(\mathbb{Z}, +)$는 [[number-groups|수로 이루어진 군]]의 (1)에 의해 아벨군이며, $\ast$의 결합법칙과 분배법칙은 양변이 모두 $0$이므로 성립합니다(예를 들어 $a \ast (b + c) = 0 = 0 + 0 = (a \ast b) + (a \ast c)$). 따라서 $(\mathbb{Z}, +, \ast)$는 환입니다. 이 환의 $0$은 정수 $0$이고, [[well-ordering-principle|정렬 원리]]의 진술의 (L3)에 의해 $1 \ne 0$입니다. 그런데 $1 \ast 2 = 0 = 1 \ast 3$이고 $2 \ne 3$입니다. 소거가 깨집니다.
:::

## 확인 질문

:::check[환 $R$의 원소 $a$에 대하여 $(2 \cdot a)(3 \cdot a) = 6 \cdot (aa)$임을 보여라.]
(5)를 $2 \cdot a$와 $a$에 쓰면 $(2 \cdot a)(3 \cdot a) = 3 \cdot ((2 \cdot a)a)$이고, (5)를 다시 $a$와 $a$에 쓰면 $(2 \cdot a)a = 2 \cdot (aa)$입니다. 따라서 $(2 \cdot a)(3 \cdot a) = 3 \cdot (2 \cdot (aa))$이고, [[laws-of-exponents|지수법칙]]의 (6)의 $n \cdot (m \cdot x) = (nm) \cdot x$에 의해 이것은 $(3 \cdot 2) \cdot (aa) = 6 \cdot (aa)$입니다.
:::

:::check[단위원을 갖는 환에서 $(-1)(-1)(-1)$은 무엇인가?]
$-1$입니다. 세 원소의 곱은 $((-1)(-1))(-1)$이고, (6)에 의해 $(-1)(-1) = 1$이므로 이것은 $1(-1) = -1$입니다. (6)의 $(-1)a = -a$를 $a = -1$에 쓰면 $(-1)(-1) = -(-1) = 1$(마지막 등식은 [[group-basic-properties|군의 기본 성질]]의 (5)의 덧셈판)로도 같은 것을 얻습니다.
:::
