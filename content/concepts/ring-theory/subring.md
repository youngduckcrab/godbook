---
title: 부분환
title_en: Subring
aliases: [부분환 판정법, subring criterion]
kind: definition
field: ring-theory
msc: ["16"]
level: undergrad
summary: 환 R의 부분집합 S가 R의 덧셈과 곱셈에 닫혀 있고 제한한 두 연산으로 환이 되면 S를 R의 부분환이라 한다. 부분환인 것은 S가 공집합이 아니고 뺄셈과 곱셈에 닫혀 있을 때이다. 부분환은 R의 단위원을 물려받지 않을 수 있고, 단위원을 가져도 R의 것과 다를 수 있다.
requires: [ring, ring-basic-properties, ring-examples, subset, set-operations, binary-operation, group, subgroup, subgroup-criteria, subgroup-examples, number-groups, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, real-number-arithmetic, even-and-odd, well-ordering-principle, vector-space, matrix, matrix-product, matrix-product-properties]
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 부분환의 정의(번호 없음) p.193, Example 16.9 p.193, Proposition 16.10 p.193, 16.7절 연습문제 23, 24, 30 p.206
    checked: original
    note: "출처는 부분환을 'R 에서 물려받은 연산으로 그 자신도 환인 R 의 부분집합 S'로 정의한다(p.193). 이 항목은 부분군 항목처럼 닫혀 있음을 정의의 첫째 조건으로 적는다. (2)는 출처 Proposition 16.10(p.193)과 같은 진술이고, 출처는 증명을 연습문제 16.23(p.206)으로 둔다. 이 항목은 부분군 판정법의 덧셈판으로 증명한다. (1)은 출처에 명제로 없다(검색어 'subring' 30건을 모두 읽었고, 'additive subgroup' 1건은 Proposition 16.27 의 증명(p.197), 'inherit' 2건은 p.38 과 부분환의 정의; 16장 연습문제 1–39 에도 없다). (3)의 (i)은 출처 Example 16.23(p.196)이 {0} 과 R 을 자명한 아이디얼(출처의 정의로 아이디얼은 부분환이다, p.196)이라 하는 데 들어 있다. (3)의 (ii)와 (iii)은 출처에서 찾지 못했다(같은 검색과 'subring of a subring|subrings? of S' 0건, 'commutative subring|subrings?.{0,20}commutative' 1건은 연습문제 16.32). (3)의 (iv)는 출처 연습문제 16.24(p.206)의 앞부분(부분환의 모임의 교집합)을 두 개로 좁힌 것이고, 둘째 반례(합집합)는 같은 연습문제의 뒷부분이 묻는 예이다. (4)는 출처 Example 16.9(p.193)의 'nℤ 는 ℤ 의 부분환'과 부분환의 사슬 ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ 가운데 ℤ ⊂ ℝ 이다. (5)의 (i)은 출처에서 찾지 못했다(검색어 'contain(s|ing) (the )?(identity|1)' 2건, 'subring.{0,40}integral domain|integral domain.{0,40}subring' 2건. 그 가운데 18장 연습문제 4(p.235)는 1 을 포함하는 체의 부분환이 정역인지 묻는다). (5)의 (ii)는 출처 Example 16.9 의 '부분환에 단위원을 요구하지 않는다'와 같은 내용이다. (5)의 (iii)은 출처 연습문제 16.30(p.206, '1_R = 1_S 인지 증명하거나 반증하라')에 반례로 답하는 것이고, 출처 연습문제 16.2(p.204)도 단위원이 없는 환에서 단위원을 갖는 부분환을 찾게 한다. 집합 {[0], [3]} 은 출처 Example 6.1(p.74)과 6.6(p.75)의 ℤ₆ 의 부분군 H = {0, 3} 과 같은 집합이다. 첫째 예시(ℝ 안의 2ℤ)는 출처 Example 16.9 의 부분환의 사슬과 같은 발상이고, 2ℤ 는 출처 p.38 에서 짝수 전체의 덧셈군으로 나온다. 둘째 예시(스칼라 행렬)는 출처 Example 16.11(p.193)이 M₂(ℝ) 의 상삼각행렬 전체가 부분환임을 판정법으로 보이는 것과 같은 종류이고 집합이 다르다. 출처 연습문제 16.32(p.206)는 환의 중심이 가환 부분환임을 보이게 한다. 이 예시는 스칼라 행렬 전체가 중심이라는 것은 다루지 않는다. 첫째 확인 질문(ℤ₆ 의 {[0], [2], [4]})은 (5)의 (iii)과 같이 출처 연습문제 16.30 에 반례로 답하는 예이고, 이 집합은 출처 Example 4.5(p.47)의 ℤ₆ 의 순환 부분군 ⟨2⟩ = {0, 2, 4} 와 같다. 출처 Example 9.28(p.121)은 ℤ₆ 이 {0, 2, 4} × {0, 3} 과 동형이라 적는다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
$(R, +, \cdot)$가 [[ring|환]]이고 $S$가 $R$의 [[subset|부분집합]]이라 하자. $0$, $-a$, $a - b$, 곱 $ab$는 [[ring|환]]의 표기이다. $S$가 $R$의 **부분환**(subring)인 것은 정확히 다음 두 조건이 모두 성립할 때이다.

- $S$가 덧셈과 곱셈에 대하여 닫혀 있다. 곧 모든 $a, b \in S$에 대하여 $a + b \in S$이고 $ab \in S$이다.
- [[binary-operation|이항연산]]의 (3)에서 정한, 덧셈과 곱셈을 $S$로 제한한 두 연산(같은 기호 $+$, $\cdot$으로 쓴다)으로 $(S, +, \cdot)$가 환이다.

"$S$는 $R$의 부분환이다"는 기호로 줄이지 않고 말로 쓴다. 다음이 성립한다.

1. (덧셈의 부분군) $S$가 $R$의 부분환이면 $S$는 덧셈군 $(R, +)$의 [[subgroup|부분군]]이다. 따라서 $0 \in S$이고 환 $S$의 $0$은 $R$의 $0$이다. $a \in S$이면 $-a \in S$이고 환 $S$에서 $a$의 덧셈의 역원은 $R$에서의 $-a$이다. $a, b \in S$이면 환 $S$에서의 $a + b$, $a - b$, $ab$는 $R$에서의 것과 같다.
2. (판정법) $S$가 $R$의 부분환인 것은 정확히 $S \ne \emptyset$이고, 모든 $a, b \in S$에 대하여 $a - b \in S$이고 $ab \in S$일 때이다.
3. (자명한 부분환과 물려받는 성질)
   - (i) $\{0\}$과 $R$은 $R$의 부분환이다.
   - (ii) $R$이 가환환이면 $R$의 모든 부분환은 가환환이다.
   - (iii) (부분환의 부분환) $S$가 $R$의 부분환이고 $T \subseteq S$라 하자. $T$가 환 $S$의 부분환인 것은 정확히 $T$가 $R$의 부분환일 때이다.
   - (iv) (교집합) $S$와 $T$가 $R$의 부분환이면 $S \cap T$는 $R$의 부분환이다.
4. (정수와 실수) 환은 [[ring-examples|환의 예]]의 것이다. 모든 정수 $n$에 대하여 $n\mathbb{Z}$는 환 $\mathbb{Z}$의 부분환이고, 이 부분환은 환의 예의 (4)의 환이다. $\mathbb{Z}$는 환 $\mathbb{R}$의 부분환이고, 실수의 덧셈과 곱셈을 $\mathbb{Z}$로 제한한 연산은 정수의 덧셈과 곱셈이다. 곧 이 부분환은 환의 예의 (1)의 환이다.
5. (단위원)
   - (i) $R$이 단위원 $1$을 갖는 환이고 $S$가 $1 \in S$인 부분환이면, $S$는 단위원 $1$을 갖는 환이다.
   - (ii) $R$이 단위원을 갖는 환이어도 부분환에는 곱셈의 항등원이 없을 수 있다. 환 $\mathbb{Z}$의 부분환 $2\mathbb{Z}$가 그렇다.
   - (iii) 부분환이 단위원을 갖는 환이어도 그 단위원은 $R$의 단위원과 다를 수 있다. [[integers-modulo-n|법 n의 정수]]의 환 $\mathbb{Z}_6$에서 $\{[0], [3]\}$은 부분환이고 단위원 $[3]$을 갖는 환이며, $[3]$은 $\mathbb{Z}_6$의 단위원 $[1]$과 다르다.
:::

:::english
Let $(R, +, \cdot)$ be a ring and $S$ a subset of $R$. The notation $0$, $-a$, $a - b$ and the product $ab$ are those of the entry on rings. $S$ is a **subring** of $R$ exactly when both of the following conditions hold.

- $S$ is closed under addition and multiplication; that is, $a + b \in S$ and $ab \in S$ for all $a, b \in S$.
- With addition and multiplication restricted to $S$, as defined in (3) of the entry on binary operations (and written with the same symbols $+$ and $\cdot$), $(S, +, \cdot)$ is a ring.

We do not abbreviate "$S$ is a subring of $R$" by a symbol; we say it in words. The following hold.

1. (Additive subgroup) If $S$ is a subring of $R$, then $S$ is a subgroup of the additive group $(R, +)$. Hence $0 \in S$ and the $0$ of the ring $S$ is the $0$ of $R$. If $a \in S$, then $-a \in S$ and the additive inverse of $a$ in the ring $S$ is $-a$ in $R$. If $a, b \in S$, then $a + b$, $a - b$ and $ab$ in the ring $S$ are the same as in $R$.
2. (Criterion) $S$ is a subring of $R$ exactly when $S \ne \emptyset$ and $a - b \in S$ and $ab \in S$ for all $a, b \in S$.
3. (Trivial subrings and inherited properties)
   - (i) $\{0\}$ and $R$ are subrings of $R$.
   - (ii) If $R$ is a commutative ring, every subring of $R$ is a commutative ring.
   - (iii) (Subrings of subrings) Let $S$ be a subring of $R$ and $T \subseteq S$. Then $T$ is a subring of the ring $S$ exactly when $T$ is a subring of $R$.
   - (iv) (Intersections) If $S$ and $T$ are subrings of $R$, then $S \cap T$ is a subring of $R$.
4. (Integers and real numbers) The rings are those of the entry on examples of rings. For every integer $n$, $n\mathbb{Z}$ is a subring of the ring $\mathbb{Z}$, and this subring is the ring of (4) in that entry. $\mathbb{Z}$ is a subring of the ring $\mathbb{R}$, and the real addition and multiplication restricted to $\mathbb{Z}$ are the addition and multiplication of integers; that is, this subring is the ring of (1) in that entry.
5. (Unity)
   - (i) If $R$ is a ring with unity $1$ and $S$ is a subring with $1 \in S$, then $S$ is a ring with unity $1$.
   - (ii) Even if $R$ is a ring with unity, a subring may have no multiplicative identity. The subring $2\mathbb{Z}$ of the ring $\mathbb{Z}$ is an example.
   - (iii) Even if a subring is a ring with unity, its unity may differ from the unity of $R$. In the ring $\mathbb{Z}_6$ of integers modulo $6$, $\{[0], [3]\}$ is a subring and a ring with unity $[3]$, and $[3]$ differs from the unity $[1]$ of $\mathbb{Z}_6$.
:::

## 직관

부분환은 [[subgroup|부분군]]과 같은 생각입니다. 환 안에 들어 있으면서 같은 덧셈과 같은 곱셈으로 다시 환이 되는 부분집합입니다. 계산 규칙은 그대로 두고 쓸 수 있는 원소만 줄인 것이며, 규칙을 그대로 둔다는 것이 두 연산을 $S$로 제한해 쓴다는 것, 계산하는 동안 $S$를 벗어나지 않는다는 것이 $S$가 닫혀 있다는 것에 해당합니다.

결합법칙과 분배법칙은 등식이므로 $R$에서 성립하면 $S$의 원소에서도 저절로 성립합니다. 그래서 확인할 것은 $S$가 비어 있지 않은지와 뺄셈과 곱셈이 $S$를 벗어나지 않는지이고, (2)의 판정법이 그것을 세 조건으로 적습니다. 덧셈과 곱셈에 닫혀 있는 것만으로는 모자랍니다. 자연수 전체 $\mathbb{N}$은 $\mathbb{Z}$ 안에서 두 연산에 닫혀 있지만 $0$도 음수도 없어 부분환이 아닙니다([[ring|환]]의 첫째 반례). 덧셈 쪽은 [[subgroup-criteria|부분군 판정법]]의 (3)이 "공집합이 아니고 뺄셈에 닫혀 있음"으로 처리하고, 곱셈 쪽은 곱에 닫혀 있다는 것 하나가 남습니다.

물려받지 않는 것이 하나 있습니다. 곱셈의 항등원은 등식이 아니라 "그런 원소가 있다"는 조건이어서, $R$의 $1$이 $S$ 밖에 있으면 $S$는 항등원이 없거나((5)의 (ii)) 다른 원소를 항등원으로 가질 수 있습니다((5)의 (iii)). 덧셈의 항등원은 사정이 다릅니다. 덧셈군에서는 부분군의 항등원이 언제나 큰 군의 항등원과 같기 때문입니다((1)).

:::remark[(1)과 (2)의 증명]
(1) $S$가 $R$의 부분환이라 하자. $S$는 덧셈에 대하여 닫혀 있고, 덧셈을 $S$로 제한한 연산으로 $(S, +)$는 군이다(환 $(S, +, \cdot)$의 첫째 조건). 따라서 [[subgroup|부분군]]의 정의에 의해 $S$는 $(R, +)$의 부분군이다. 같은 항목의 (1), (2), (3)을 덧셈 표기로 읽으면, $0 \in S$이고 군 $(S, +)$의 항등원은 $0$이며, $a \in S$이면 $-a \in S$이고 $(S, +)$에서 $a$의 역원은 $-a$이고, $S$ 안의 합은 $R$에서의 합이다. 환 $S$의 $0$과 덧셈의 역원은 [[ring|환]]의 표기에 의해 덧셈군 $(S, +)$의 항등원과 역원이므로 $R$의 것과 같다. 따라서 환 $S$에서의 $a - b = a + (-b)$도 $R$에서의 것과 같다. [[binary-operation|이항연산]]의 (3)에 의해 제한한 곱셈의 값은 $R$에서의 곱 $ab$이다.

(2) $S$가 부분환이라 하자. (1)에 의해 $0 \in S$이므로 $S \ne \emptyset$이다. $a, b \in S$이면 (1)에 의해 $-b \in S$이고, $S$가 덧셈에 닫혀 있으므로 $a - b = a + (-b) \in S$이다. $S$가 곱셈에 닫혀 있으므로 $ab \in S$이다.

거꾸로 $S \ne \emptyset$이고 모든 $a, b \in S$에서 $a - b \in S$, $ab \in S$라 하자. $(R, +)$는 덧셈 표기로 쓰는 아벨군이므로 [[subgroup-criteria|부분군 판정법]]의 (3)의 둘째 문장에 의해 $S$는 $(R, +)$의 부분군이다. 곧 $S$는 덧셈에 대하여 닫혀 있고 덧셈을 $S$로 제한한 연산으로 $(S, +)$는 군이며, [[subgroup|부분군]]의 (7)에 의해 아벨군이다. 가정에 의해 $S$는 곱셈에 대하여 닫혀 있으므로 [[binary-operation|이항연산]]의 (3)에 의해 곱셈을 $S$로 제한한 연산은 $S$ 위의 이항연산이고, 같은 항목의 (3)의 (i)에 의해 결합적이다. $a, b, c \in S$이면 제한한 두 연산의 값은 $R$에서의 합과 곱이고 $R$에서 $a(b + c) = ab + ac$, $(a + b)c = ac + bc$이므로, 같은 등식이 제한한 연산으로도 성립한다. 따라서 $(S, +, \cdot)$는 환이고, $S$는 두 연산에 닫혀 있으므로 $R$의 부분환이다.
:::

:::remark[(3)–(5)의 증명]
(3)의 (i) $\{0\}$: $\{0\} \ne \emptyset$이고, $0 - 0 = 0$이며 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $00 = 0$이므로 (2)에 의해 부분환이다. $R$: $(R, +)$가 군이므로 [[group|군]]의 (4)에 의해 $R \ne \emptyset$이고, 두 연산의 값은 $R$에 속하므로 (2)에 의해 부분환이다.

(3)의 (ii) $R$의 곱셈이 교환법칙을 만족하면 [[binary-operation|이항연산]]의 (3)의 (i)에 의해 곱셈을 부분환 $S$로 제한한 연산도 교환법칙을 만족한다.

(3)의 (iii) (1)에 의해 $a, b \in S$이면 환 $S$에서의 $a - b$와 $ab$는 $R$에서의 것과 같다. $T \subseteq S$이므로, 환 $S$에 대한 (2)의 조건 "$T \ne \emptyset$이고 모든 $a, b \in T$에서 $a - b \in T$, $ab \in T$"와 환 $R$에 대한 (2)의 조건은 같은 조건이다. (2)를 환 $S$와 환 $R$에 한 번씩 쓰면 (iii)이 나온다.

(3)의 (iv) (1)에 의해 $0 \in S$이고 $0 \in T$이므로 $0 \in S \cap T$이고 $S \cap T \ne \emptyset$이다. $a, b \in S \cap T$이면 (2)에 의해 $a - b \in S$, $ab \in S$이고 $a - b \in T$, $ab \in T$이므로 $a - b, ab \in S \cap T$이다. (2)에 의해 $S \cap T$는 부분환이다.

(4) $n\mathbb{Z}$: [[ring-examples|환의 예]]의 (4)에 의해 $n\mathbb{Z}$는 정수의 덧셈과 곱셈에 대해 닫혀 있고, 제한한 두 연산으로 환이다. 정의에 의해 환 $\mathbb{Z}$의 부분환이다.

$\mathbb{Z} \subseteq \mathbb{R}$: [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 정수는 실수이고, 두 정수의 합과 곱은 정수로 계산하든 실수로 계산하든 같은 수이다. 두 정수의 합과 곱은 정수이므로([[even-and-odd]]에서 받아들인 사실) $\mathbb{Z}$는 실수의 덧셈과 곱셈에 대해 닫혀 있다. 제한한 두 연산은 모든 $(a, b) \in \mathbb{Z} \times \mathbb{Z}$에서 정수의 덧셈, 곱셈과 값이 같으므로, [[binary-operation|이항연산]]의 진술의 연산의 같음에 의해 정수의 덧셈, 곱셈 자신이다(덧셈은 [[subgroup-examples|부분군의 예와 교집합]]의 (3)에도 있다). [[ring-examples|환의 예]]의 (1)에 의해 이 두 연산으로 $\mathbb{Z}$는 환이므로, $\mathbb{Z}$는 $\mathbb{R}$의 부분환이다.

(5)의 (i) $1 \in S$이고 $1$은 $R$의 곱셈의 항등원이므로 [[binary-operation|이항연산]]의 (3)의 (ii)에 의해 제한한 곱셈의 항등원이다. (1)에 의해 환 $S$의 $0$은 $R$의 $0$이고 $1 \ne 0$이므로, $S$는 단위원 $1$을 갖는 환이다.

(5)의 (ii) [[ring-examples|환의 예]]의 (1)에 의해 $\mathbb{Z}$는 단위원 $1$을 갖는 환이다. 이 항목의 (4)에 의해 $2\mathbb{Z}$는 그 부분환이고, $2$는 $-1$, $0$, $1$ 가운데 어느 것도 아니므로 환의 예의 (4)에 의해 환 $2\mathbb{Z}$에는 곱셈의 항등원이 없다.

(5)의 (iii) $S = \{[0], [3]\}$으로 둔다. 아래에서 $[a] = [b]$는 $a \equiv b \pmod 6$을 확인하고 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]으로 얻는다. [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_6$은 단위원 $[1]$을 갖는 환이고, $[a]$의 덧셈의 역원은 $[-a]$이므로 $[a] - [b] = [a] + [-b] = [a - b]$이고 $[a][b] = [ab]$이다([[integers-modulo-n|법 n의 정수]]의 (2)). $S \ne \emptyset$이다. 뺄셈: $[0] - [0] = [0]$, $[3] - [3] = [0]$, $[3] - [0] = [3]$이고, $[0] - [3] = [-3] = [3]$이다($3 - (-3) = 6 \cdot 1$). 곱셈: [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $[0]$과의 곱은 $[0]$이고, $[3][3] = [9] = [3]$이다($9 - 3 = 6 \cdot 1$). 모든 값이 $S$에 속하므로 (2)에 의해 $S$는 부분환이다. 위의 곱셈 계산은 $[3][0] = [0][3] = [0]$, $[3][3] = [3]$, 곧 $S$의 두 원소에 $[3]$을 어느 쪽에서 곱해도 그 원소가 됨을 보여 주므로 $[3]$은 환 $S$의 곱셈의 항등원이다. $0 \le 0 < 1 < 3 \le 5$이므로 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[3] \ne [0]$이고 $[3] \ne [1]$이다. (1)에 의해 환 $S$의 $0$은 $[0]$이므로, $S$는 단위원 $[3]$을 갖는 환이고 그 단위원은 $[1]$과 다르다.
:::

## 예시와 반례

:::example[실수 안의 짝수]
(4)에 의해 $2\mathbb{Z}$는 환 $\mathbb{Z}$의 부분환이고 $\mathbb{Z}$는 환 $\mathbb{R}$의 부분환입니다. (3)의 (iii)을 $\mathbb{R}$의 부분환 $\mathbb{Z}$와 $T = 2\mathbb{Z} \subseteq \mathbb{Z}$에 쓰면, $2\mathbb{Z}$는 $\mathbb{R}$의 부분환이기도 합니다. 실수의 덧셈과 곱셈을 $2\mathbb{Z}$로 제한하면 짝수끼리의 합과 곱이 되고, 그것으로 $2\mathbb{Z}$는 곱셈의 항등원이 없는 가환환입니다((3)의 (ii)와 (5)의 (ii). 두 제한한 연산은 (1)에 의해 $\mathbb{Z}$에서 제한한 것과 같습니다).
:::

:::example[행렬 안의 스칼라 행렬]
$n$이 자연수이고 $S = \{cI_n : c \in \mathbb{R}\}$이라 합시다. [[ring-examples|환의 예]]의 (5)의 환 $M_n(\mathbb{R})$에서 $S$는 부분환입니다. $c = 0$이면 $0I_n$이 있으므로 $S \ne \emptyset$입니다. 실수 $c$, $d$에 대하여 [[matrix|행렬]]의 (1)의 스칼라배와 덧셈, $-A$의 정의에 의해 $cI_n - dI_n$의 $(j, k)$ 성분은 $j = k$일 때 $c \cdot 1 - d \cdot 1 = c - d$, $j \ne k$일 때 $c \cdot 0 - d \cdot 0 = 0$이고([[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)), 이것은 $(c - d)I_n$의 $(j, k)$ 성분과 같으므로 행렬의 (2)에 의해 $cI_n - dI_n = (c - d)I_n \in S$입니다. 곱은 [[matrix-product-properties|행렬 곱의 성질]]의 (3)과 (4), [[vector-space|벡터공간]]의 (V6)에 의해
$$(cI_n)(dI_n) = c(I_n(dI_n)) = c(dI_n) = (cd)I_n \in S$$
입니다. (2)에 의해 $S$는 부분환입니다.

같은 계산과 실수의 곱셈의 교환법칙 (K1)에 의해 $(cI_n)(dI_n) = (cd)I_n = (dc)I_n = (dI_n)(cI_n)$이므로 $S$는 가환환입니다. $n \ge 2$이면 $M_n(\mathbb{R})$은 가환환이 아니지만(환의 예의 (5)) 그 부분환 $S$는 가환환입니다. 부분환 하나가 가환환이어도 큰 환은 가환환이 아닐 수 있습니다. 또 (V5)에 의해 $1I_n = I_n \in S$이므로 (5)의 (i)에 의해 $S$는 단위원 $I_n$을 갖는 환입니다.
:::

:::counterexample[덧셈의 부분군이지만 곱셈에 닫혀 있지 않은 집합]
$M_2(\mathbb{R})$에서 대각성분이 모두 $0$인 행렬 전체를 $W$라 합시다. $A, B \in W$이면 $A - B$의 대각성분은 $0 - 0 = 0$이므로 $A - B \in W$이고, 영행렬이 $W$에 있으므로 $W \ne \emptyset$입니다. [[subgroup-criteria|부분군 판정법]]의 (3)에 의해 $W$는 덧셈군 $(M_{2 \times 2}, +)$의 부분군입니다. 그러나
$$A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$$
은 $W$에 속하고, [[matrix-product|행렬의 곱]]의 (2)에 의해 $(AB)_{1,1} = 0 \cdot 0 + 1 \cdot 1 = 1 \ne 0$이므로 $AB \notin W$입니다. $W$는 곱셈에 닫혀 있지 않으므로 부분환이 아닙니다. (2)의 세 조건 가운데 곱셈에 관한 조건은 덧셈의 조건에서 나오지 않습니다.
:::

:::counterexample[두 부분환의 합집합]
(4)에 의해 $2\mathbb{Z}$와 $3\mathbb{Z}$는 환 $\mathbb{Z}$의 부분환이지만, 합집합 $2\mathbb{Z} \cup 3\mathbb{Z}$는 부분환이 아닙니다. [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $2\mathbb{Z} \cup 3\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이 아니고, (1)에 의해 부분환은 덧셈군의 부분군이어야 하기 때문입니다. 교집합((3)의 (iv))과 달리 합집합은 부분환이 되지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_6$의 부분집합 $\{[0], [2], [4]\}$는 부분환인가? 그렇다면 단위원을 갖는 환인가?]
부분환이고 단위원 $[4]$를 갖는 환입니다. 뺄셈은 $[2] - [4] = [-2] = [4]$, $[4] - [2] = [2]$, $[0] - [2] = [-2] = [4]$, $[0] - [4] = [-4] = [2]$와 자기 자신을 뺀 $[0]$, $[0]$을 뺀 자기 자신이므로 모두 집합 안에 있습니다. 곱은 $[0]$과의 곱이 $[0]$이고 $[2][2] = [4]$, $[2][4] = [8] = [2]$, $[4][4] = [16] = [4]$입니다. (2)에 의해 부분환입니다. $[4][2] = [2]$, $[4][4] = [4]$, $[4][0] = [0]$이고 $\mathbb{Z}_6$의 곱셈이 가환이므로([[ring-examples|환의 예]]의 (3)) $[4]$가 곱셈의 항등원이고, $[4] \ne [0]$이므로([[integers-modulo-n|법 n의 정수]]의 (1)) 단위원 $[4]$를 갖는 환입니다. $\mathbb{Z}_6$의 단위원 $[1]$은 이 집합에 없습니다.
:::

:::check[환 $R$의 부분환 $S$가 $R$의 단위원 $1$을 포함하면 $S = R$인가?]
아닙니다. (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고 $1 \in \mathbb{Z}$이지만 $\mathbb{Z} \ne \mathbb{R}$입니다. 실수 $2^{-1}$이 정수 $k$라면 $2k = 2 \cdot 2^{-1} = 1$이 되어((K7)의 $2 \ne 0$과 (K8)의 (iii), 그리고 정수의 곱은 실수의 곱과 같다는 (K7)) $1$이 짝수가 됩니다. $1 = 2 \cdot 0 + 1$이므로 $1$은 홀수이기도 하여 [[even-and-odd]]에서 받아들인 사실에 어긋납니다. 따라서 $2^{-1} \in \mathbb{R} - \mathbb{Z}$입니다.
:::
