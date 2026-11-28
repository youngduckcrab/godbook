---
title: 상계와 상한
title_en: Upper Bound and Supremum
aliases: [상계, 상한, 하계, 하한, 최소상계, 최대하계, 최댓값, 최솟값, 위로 유계, 아래로 유계, 유계, upper bound, supremum, least upper bound, lower bound, infimum, greatest lower bound, maximum, minimum, bounded above, bounded below, bounded, sup, inf]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 실수 집합의 상계·하계, 위로·아래로 유계, 상한(가장 작은 상계)과 하한, 최댓값과 최솟값을 정의하고, 상한은 있으면 하나뿐이며 최댓값이 있으면 그것이 상한이고 공집합은 상한이 없다는 것을 증명한다.
requires: [set, subset, conditional-statement, negation-of-quantified-statements, proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, well-ordering-principle]
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 Definition 1.1.2 ((i)(ii)는 p.23, (iii)(iv)와 bounded 는 p.24)와 상한의 유일성 문단 (p.24), 연습문제 1.1.2, 1.1.4, 1.1.5 (p.27); 1.2절 Proposition 1.2.8 과 Definition 1.2.9 (p.33), 1.2.4 Maxima and minima (p.34)
    checked: original
    note: "출처의 Definition 1.1.2 는 일반의 순서집합 S 의 부분집합 E 에 대해 위로 유계와 상계(i), 아래로 유계와 하계(ii), 상한(iii), 하한(iv)을 정의하고, 위로도 아래로도 유계이면 bounded 라 한다. 출처는 '상계 b 가 있으면 E 는 위로 유계이고 b 는 상계'라는 한 문장으로 두 용어를 함께 정한다. 이 항목은 S = ℝ 로 두고 용어마다 '정확히 ~일 때' 꼴로 적었다. 출처는 상한(과 하한)이 있으면 하나뿐이라서 sup E, inf E 기호가 정당하다고 말하고, 상한에 대해서만 'b ≤ b′ 이고 b′ ≤ b 이므로 b = b′'으로 보인다(p.24). 이 항목의 (1)은 하한, 최댓값, 최솟값까지 적었다. 최댓값에 관해 출처는 1.2.4절(p.34)에서 실수의 집합 A 가 위로 유계이고 sup A ∈ A 일 때 sup A 를 maximum, max A 라 부를 수 있다고 한다. 이 항목은 최댓값을 'E 에 속하는 상계'로 정의하고, 출처의 뜻과 같다는 것을 (2), (3)으로 증명한다. (2)의 첫 문장은 출처 연습문제 1.1.5(상계 b 가 A 에 속하면 b = sup A)와 같은 내용이다. (4)의 둘째 문장은 출처의 Proposition 1.2.8(p.33, 증명은 독자에게 맡기고 연습문제 1.2.12 로 둔다)의 '공집합이 아니고 위로 유계인 S 와 모든 ε > 0 에 대해 (sup S) − ε < x ≤ sup S 인 x ∈ S 가 있다'를 ε 없이 c < s 로 적은 것이고, 출처는 하한에 대해 비슷한 결과가 성립한다고만 적는다. 출처는 Theorem 1.2.4 의 증명(p.31)에서도 '상한보다 작은 b − 1 은 상계일 수 없다'는 꼴로 쓴다. (4)의 첫째 문장(상계보다 큰 수도 상계)은 출처에 명제로 없다(검색한 범위). (5)에 관해 출처는 Definition 1.2.9(p.33)에서 실수의 부분집합 A 가 공집합이면 sup A := −∞, inf A := ∞ 로 정하고, 그 뒤에서 이것을 확장 실수 ℝ* 에서 상한·하한을 잡는 것으로 설명한다. 연습문제 1.1.13 의 Remark 는 순서집합이 실수나 확장 실수이면 공집합의 경우가 다르다고만 적는다. 이 항목은 ℝ 의 부분집합만 다루어 ∞ 를 쓰지 않으며, ℝ 안에서 공집합이 상한과 하한을 갖지 않는다는 것을 증명한다. 정수의 집합에 대한 정의와의 관계(참고 블록)는 이 사이트가 덧붙였다. 예시 '0 과 1 사이의 수'는 출처 p.24 의 {x ∈ ℚ : x < 1}(상한 1 이 집합에 속하지 않는다)과 같은 발상이며, 집합은 실수의 집합으로 바꾸었고 출처는 그 예를 증명하지 않는다. 예시 '제곱이 1 이하인 수'의 상계를 보이는 방법(1 < x 이면 1 < xx)은 출처 Example 1.2.3 의 증명(p.30)에서 x ≥ 2 이면 x² ≥ 4 로 상계를 보이는 것과 같은 발상이다. 최댓값과 최솟값을 따지는 부분은 출처에 없다. 반례 'ℝ 은 위로 유계가 아니다'는 출처 p.24 의 {x ∈ ℚ : x ≥ 0}(상계가 없다, why?)과 같은 발상이다. 확인 질문 1 은 출처 연습문제 1.1.2(공집합이 아닌 유한집합의 sup, inf 가 있고 집합에 속한다)의 원소가 하나인 경우이고, 확인 질문 2 의 앞부분(공집합이 아니면 하계는 상계 이하)은 출처 연습문제 1.1.4 의 inf A ≤ sup A 와 같은 발상이다."
status: reviewed
review_note: "2026-11-17 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 정수와 실수의 순서를 잇는 진술의 범위, 인용 근거, 번호 표기, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-17
---

:::statement
$E$를 $\mathbb{R}$의 [[subset]]이라 하자. 순서 $<$, $\le$는 [[real-order-axioms]]의 것이다.

- 실수 $b$가 $E$의 **상계**(upper bound)인 것은 정확히 $E$의 모든 원소 $x$에 대하여 $x \le b$일 때이다. $E$가 **위로 유계**(bounded above)인 것은 정확히 $E$의 상계인 실수가 있을 때이다.
- 실수 $b$가 $E$의 **하계**(lower bound)인 것은 정확히 $E$의 모든 원소 $x$에 대하여 $b \le x$일 때이다. $E$가 **아래로 유계**(bounded below)인 것은 정확히 $E$의 하계인 실수가 있을 때이다.
- $E$가 **유계**(bounded)인 것은 정확히 $E$가 위로 유계이고 아래로 유계일 때이다.
- 실수 $s$가 $E$의 **상한**(supremum) 또는 **최소상계**(least upper bound)인 것은 정확히 $s$가 $E$의 상계이고 $E$의 모든 상계 $b$에 대하여 $s \le b$일 때이다.
- 실수 $t$가 $E$의 **하한**(infimum) 또는 **최대하계**(greatest lower bound)인 것은 정확히 $t$가 $E$의 하계이고 $E$의 모든 하계 $b$에 대하여 $b \le t$일 때이다.
- 실수 $M$이 $E$의 **최댓값**(maximum)인 것은 정확히 $M \in E$이고 $M$이 $E$의 상계일 때이다. 실수 $m$이 $E$의 **최솟값**(minimum)인 것은 정확히 $m \in E$이고 $m$이 $E$의 하계일 때이다.

다음이 성립한다.

1. (유일성) $E$의 상한은 있으면 하나뿐이다. $E$의 하한, 최댓값, 최솟값도 각각 있으면 하나뿐이다. 그래서 이것들이 있을 때 각각 $\sup E$, $\inf E$, $\max E$, $\min E$로 쓴다. 없을 때는 이 기호를 쓰지 않는다.
2. $E$가 최댓값 $M$을 가지면 $M$은 $E$의 상한이다. 곧 $\sup E = \max E$이다. $E$가 최솟값 $m$을 가지면 $m$은 $E$의 하한이다. 곧 $\inf E = \min E$이다.
3. $E$의 상한 $s$가 $E$에 속하면 $s$는 $E$의 최댓값이다. $E$의 하한 $t$가 $E$에 속하면 $t$는 $E$의 최솟값이다.
4. (상계보다 큰 수와 상한보다 작은 수) $b$가 $E$의 상계이고 $b \le c$이면 $c$도 $E$의 상계이다. $s$가 $E$의 상한이고 실수 $c$가 $c < s$이면 $c$는 $E$의 상계가 아니다. 곧 $c < x$인 $E$의 원소 $x$가 있다. 하계에 대해서도, $b$가 $E$의 하계이고 $c \le b$이면 $c$도 $E$의 하계이고, $t$가 $E$의 하한이고 실수 $c$가 $t < c$이면 $c$는 $E$의 하계가 아니다. 곧 $x < c$인 $E$의 원소 $x$가 있다.
5. (공집합) 모든 실수는 공집합 $\emptyset$의 상계이자 하계이다. 따라서 $\emptyset$은 유계이다. 그러나 $\emptyset$은 상한도 하한도 갖지 않는다.
:::

:::english
Let $E$ be a subset of $\mathbb{R}$. The order $<$, $\le$ is the one in the entry on the order of the real numbers.

- A real number $b$ is an **upper bound** of $E$ exactly when $x \le b$ for every element $x$ of $E$. The set $E$ is **bounded above** exactly when some real number is an upper bound of $E$.
- A real number $b$ is a **lower bound** of $E$ exactly when $b \le x$ for every element $x$ of $E$. The set $E$ is **bounded below** exactly when some real number is a lower bound of $E$.
- $E$ is **bounded** exactly when $E$ is bounded above and bounded below.
- A real number $s$ is a **supremum**, or **least upper bound**, of $E$ exactly when $s$ is an upper bound of $E$ and $s \le b$ for every upper bound $b$ of $E$.
- A real number $t$ is an **infimum**, or **greatest lower bound**, of $E$ exactly when $t$ is a lower bound of $E$ and $b \le t$ for every lower bound $b$ of $E$.
- A real number $M$ is a **maximum** of $E$ exactly when $M \in E$ and $M$ is an upper bound of $E$. A real number $m$ is a **minimum** of $E$ exactly when $m \in E$ and $m$ is a lower bound of $E$.

The following hold.

1. (Uniqueness) $E$ has at most one supremum. Likewise $E$ has at most one infimum, at most one maximum, and at most one minimum. So, when they exist, we write them $\sup E$, $\inf E$, $\max E$, $\min E$. When they do not exist, these symbols are not used.
2. If $E$ has a maximum $M$, then $M$ is the supremum of $E$; that is, $\sup E = \max E$. If $E$ has a minimum $m$, then $m$ is the infimum of $E$; that is, $\inf E = \min E$.
3. If the supremum $s$ of $E$ belongs to $E$, then $s$ is the maximum of $E$. If the infimum $t$ of $E$ belongs to $E$, then $t$ is the minimum of $E$.
4. (Numbers above an upper bound and below the supremum) If $b$ is an upper bound of $E$ and $b \le c$, then $c$ is also an upper bound of $E$. If $s$ is the supremum of $E$ and $c$ is a real number with $c < s$, then $c$ is not an upper bound of $E$; that is, there is an element $x$ of $E$ with $c < x$. Likewise for lower bounds: if $b$ is a lower bound of $E$ and $c \le b$, then $c$ is also a lower bound of $E$; and if $t$ is the infimum of $E$ and $c$ is a real number with $t < c$, then $c$ is not a lower bound of $E$; that is, there is an element $x$ of $E$ with $x < c$.
5. (The empty set) Every real number is both an upper bound and a lower bound of the empty set $\emptyset$. Hence $\emptyset$ is bounded. However, $\emptyset$ has neither a supremum nor an infimum.
:::

## 직관

한 방에 있는 사람들의 키를 집합 $E$라 하고, 방의 천장 높이를 생각해 봅시다. 모든 사람의 키 이상인 높이는 무엇이든 상계입니다. 천장을 얼마든지 높게 달 수 있듯이 상계는 하나가 있으면 그보다 큰 수가 모두 상계입니다(이 항목의 (4)). 상한은 그 가운데 가장 낮은 천장, 곧 누구의 머리도 뚫지 않으면서 더는 내릴 수 없는 높이입니다. 방에 가장 키가 큰 사람이 있으면 그 사람의 키가 최댓값이고, 그것이 곧 상한입니다(이 항목의 (2)).

비유가 맞지 않는 곳은 키처럼 "가장 큰 원소"가 늘 있는 것은 아니라는 점입니다. 아래 예시의 $0$과 $1$ 사이의 수 전체처럼 상한이 집합에 속하지 않을 수 있고, 그때는 최댓값이 없습니다. 상한은 "집합에서 가장 큰 수"가 아니라 "상계 가운데 가장 작은 수"로 정의되었기 때문입니다. 또 상계가 없는 집합과 공집합에는 상한이 없습니다. 공집합은 사람이 없는 방이어서 어떤 높이든 천장이 될 수 있고, 그래서 가장 낮은 천장이 없습니다(이 항목의 (5)).

## 성질의 증명

:::proof
"순서 성질 (1)의 (ii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. (W…)는 [[real-order-axioms]], (K…)는 [[real-number-arithmetic]]의 진술이다.

**1의 증명.** $s$와 $s'$이 모두 $E$의 상한이라 하자. $s'$은 $E$의 상계이고 $s$는 상한이므로 $s \le s'$이다. 또 $s$는 $E$의 상계이고 $s'$은 상한이므로 $s' \le s$이다. 순서 성질 (1)의 (ii)에 의해 $s = s'$이다.

$t$와 $t'$이 모두 $E$의 하한이라 하자. $t'$은 $E$의 하계이고 $t$는 하한이므로 $t' \le t$이다. 또 $t$는 $E$의 하계이고 $t'$은 하한이므로 $t \le t'$이다. 순서 성질 (1)의 (ii)에 의해 $t = t'$이다.

$M$과 $M'$이 모두 $E$의 최댓값이라 하자. $M' \in E$이고 $M$은 $E$의 상계이므로 $M' \le M$이다. 또 $M \in E$이고 $M'$은 $E$의 상계이므로 $M \le M'$이다. 순서 성질 (1)의 (ii)에 의해 $M = M'$이다.

$m$과 $m'$이 모두 $E$의 최솟값이라 하자. $m' \in E$이고 $m$은 $E$의 하계이므로 $m \le m'$이다. 또 $m \in E$이고 $m'$은 $E$의 하계이므로 $m' \le m$이다. 순서 성질 (1)의 (ii)에 의해 $m = m'$이다.

**2의 증명.** $M$이 $E$의 최댓값이라 하자. 정의에 의해 $M$은 $E$의 상계이다. $b$가 $E$의 임의의 상계이면 $M \in E$이므로 $M \le b$이다. 따라서 $M$은 $E$의 상한이다. $m$이 $E$의 최솟값이라 하자. 정의에 의해 $m$은 $E$의 하계이다. $b$가 $E$의 임의의 하계이면 $m \in E$이므로 $b \le m$이다. 따라서 $m$은 $E$의 하한이다. 두 경우 모두 이 항목의 (1)의 유일성에 의해 기호의 등식이 성립한다.

**3의 증명.** $s$가 $E$의 상한이고 $s \in E$이면, $s$는 $E$의 상계이면서 $E$에 속하므로 최댓값의 정의를 만족한다. $t$가 $E$의 하한이고 $t \in E$이면, $t$는 $E$의 하계이면서 $E$에 속하므로 최솟값의 정의를 만족한다.

**4의 증명.** $b$가 $E$의 상계이고 $b \le c$라 하자. $E$의 원소 $x$마다 $x \le b$이고 $b \le c$이므로 순서 성질 (1)의 (v)에 의해 $x \le c$이다. 따라서 $c$는 $E$의 상계이다.

$s$가 $E$의 상한이고 $c < s$라 하자. $c$가 $E$의 상계라고 하면 상한의 정의에 의해 $s \le c$인데, 이것은 $c < s$와 순서 성질 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 $c$는 $E$의 상계가 아니다. 곧 "$\forall x \in E,\ x \le c$"가 거짓이므로, [[negation-of-quantified-statements]]에 의해 "$x \le c$"가 성립하지 않는 $E$의 원소 $x$가 있다. 순서 성질 (1)의 (iii)에 의해 그 $x$는 $c < x$를 만족한다.

$b$가 $E$의 하계이고 $c \le b$라 하자. $E$의 원소 $x$마다 $b \le x$이고 $c \le b$이므로 순서 성질 (1)의 (v)에 의해 $c \le x$이다. 따라서 $c$는 $E$의 하계이다.

$t$가 $E$의 하한이고 $t < c$라 하자. $c$가 $E$의 하계라고 하면 하한의 정의에 의해 $c \le t$인데, 이것은 $t < c$와 순서 성질 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 $c$는 $E$의 하계가 아니다. 곧 "$\forall x \in E,\ c \le x$"가 거짓이므로, [[negation-of-quantified-statements]]에 의해 "$c \le x$"가 성립하지 않는 $E$의 원소 $x$가 있다. 순서 성질 (1)의 (iii)에 의해 그 $x$는 $x < c$를 만족한다.

**5의 증명.** $b$를 임의의 실수라 하자. $b$가 $\emptyset$의 상계라는 것은 모든 대상 $x$에 대하여 [[conditional-statement]] "$x \in \emptyset$이면 $x \le b$이다"가 참이라는 것이다. 공집합에는 원소가 없으므로 가정 $x \in \emptyset$은 거짓이고, 가정이 거짓인 조건문은 참이다. 따라서 $b$는 $\emptyset$의 상계이다. 같은 까닭으로 조건문 "$x \in \emptyset$이면 $b \le x$이다"도 모든 $x$에 대하여 참이므로 $b$는 $\emptyset$의 하계이다. 특히 $0$은 $\emptyset$의 상계이자 하계이므로 $\emptyset$은 유계이다.

[[proof-by-contradiction]]으로 $\emptyset$에 상한이 없음을 보인다. $s$가 $\emptyset$의 상한이라 하자. 실수 $s - 1$은 위에서 본 대로 $\emptyset$의 상계이므로 상한의 정의에 의해 $s \le s - 1$이다. 한편 순서 성질 (5)의 (ii)의 $0 < 1$에 (W3)으로 $s - 1$을 더하면 $0 + (s - 1) < 1 + (s - 1)$이다. (K1), (K4)에 의해 $0 + (s - 1) = s - 1$이고, (K1), (K2), (K8)의 (ii), (K4)에 의해 $1 + (s - 1) = 1 + (s + (-1)) = s + (1 + (-1)) = s + 0 = s$이므로 $s - 1 < s$이다. 이것은 $s \le s - 1$과 순서 성질 (1)의 (i)에 의해 함께 성립하지 않는다. 모순이므로 $\emptyset$에는 상한이 없다.

같은 방식으로 하한이 없음을 보인다. $t$가 $\emptyset$의 하한이라 하자. 실수 $t + 1$은 $\emptyset$의 하계이므로 하한의 정의에 의해 $t + 1 \le t$이다. 한편 $0 < 1$에 (W3)으로 $t$를 더하면 $0 + t < 1 + t$이고, (K1), (K4)에 의해 $t < t + 1$이다. 이것은 $t + 1 \le t$와 순서 성질 (1)의 (i)에 의해 함께 성립하지 않는다. 모순이므로 $\emptyset$에는 하한이 없다. $\blacksquare$
:::

:::remark[정수의 집합에 대한 같은 이름의 정의]
[[well-ordering-principle]]는 정수의 집합 $A$에 대해 "위로 유계"를 "어떤 **정수** $d$가 있어 $A$의 모든 원소 $a$에 대하여 $a \le d$"로, "최대 원소"를 "$A$의 모든 원소 이상인 $A$의 원소"로 정의했습니다(부등호는 정수의 순서). 아래로 유계와 최소 원소도 같은 꼴입니다. 이 항목은 상계와 하계를 **실수**로 잡습니다. 정수의 집합 $A$에 대하여 두 정의는 다음과 같이 관계합니다.

- $A$의 원소 $M$이 그 항목의 뜻으로 최대 원소인 것과 이 항목의 뜻으로 최댓값인 것은 같습니다. $M$과 $A$의 원소가 모두 정수이므로, [[order-properties-of-reals]]의 (10)에 의해 "$a \le M$"이 정수로서 성립하는 것과 실수로서 성립하는 것이 같기 때문입니다. 같은 이유로 최소 원소와 최솟값도 같습니다.
- $A$가 정수인 상계 $d$를 가지면, [[order-properties-of-reals]]의 (10)에 의해 $d$는 이 항목의 뜻으로도 $A$의 상계이므로 $A$는 이 항목의 뜻으로 위로 유계입니다. $A$가 정수인 하계를 가지면 그 정수가 이 항목의 뜻의 하계이므로 $A$는 아래로 유계입니다.
- 거꾸로, 실수인 상계를 갖는 정수의 집합이 정수인 상계도 갖는지는 이 항목에서 보이지 않습니다. 그래서 [[well-ordering-principle]]의 (가), (나)를 쓸 때는 그 항목의 뜻대로 정수인 경계가 있음을 확인합니다.
:::

## 예시와 반례

:::example[$0$과 $1$ 사이의 수: 상한은 있지만 최댓값은 없다]
$E = \{x \in \mathbb{R} : 0 < x < 1\}$이라 합시다. $\sup E = 1$이고 $E$에는 최댓값이 없음을 보입니다. [[order-properties-of-reals]]의 번호를 "순서 성질 (1)의 (i)"처럼 씁니다.

$E$의 원소 $x$는 $x < 1$이므로 $x \le 1$이고, $1$은 $E$의 상계입니다. 이제 $b$가 $E$의 상계이면 $1 \le b$임을 보입니다. $1 \le b$가 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $b < 1$입니다. 순서 성질 (5)의 (ii)의 $0 < 1$과 순서 성질 (8)의 둘째 문장에 의해 $0 < \frac{1}{2} < 1$이므로 $\frac{1}{2} \in E$이고, $b$가 상계이므로 $\frac{1}{2} \le b$입니다. 순서 성질 (1)의 (v)에 의해 $0 < b$입니다. 다시 순서 성질 (8)에 의해 $b < \frac{b + 1}{2} < 1$이고, $0 < b$와 (W2)에 의해 $0 < \frac{b + 1}{2}$이므로 $\frac{b + 1}{2} \in E$입니다. 그러면 $b$가 상계이므로 $\frac{b + 1}{2} \le b$인데, 이것은 $b < \frac{b + 1}{2}$과 순서 성질 (1)의 (i)에 의해 함께 성립하지 않습니다. 따라서 $1 \le b$이고, $1$이 $E$의 상한입니다.

$1 < 1$은 (W1)에 의해 성립하지 않으므로 $1 \notin E$입니다. $E$에 최댓값 $M$이 있다면 이 항목의 (2)에 의해 $M = \sup E = 1$이어서 $1 \in E$가 되므로, 최댓값은 없습니다.
:::

:::example[제곱이 $1$ 이하인 수: 최댓값과 최솟값이 있다]
$E = \{x \in \mathbb{R} : xx \le 1\}$이라 합시다. [[order-properties-of-reals]]의 번호를 "순서 성질 (1)의 (i)"처럼 씁니다. $1 \cdot 1 = 1$이므로 $1 \in E$이고, (K12)의 (iii)에 의해 $(-1)(-1) = 1 \cdot 1 = 1$이므로 $-1 \in E$입니다.

$1$이 $E$의 상계임을 보입니다. $x \in E$인데 $x \le 1$이 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $1 < x$입니다. 순서 성질 (5)의 (ii)에 의해 $0 \le 1$이므로 $0 \le 1 < x$이고 순서 성질 (1)의 (v)에 의해 $0 < x$이므로 순서 성질 (7)의 (i)에 의해 $1 \cdot 1 < xx$, 곧 $1 < xx$인데, 이것은 $xx \le 1$과 순서 성질 (1)의 (i)에 의해 함께 성립하지 않습니다. 따라서 $x \le 1$입니다. $1 \in E$이므로 $\max E = 1$이고, 이 항목의 (2)에 의해 $\sup E = 1$입니다.

$-1$이 $E$의 하계임을 보입니다. $x \in E$인데 $-1 \le x$가 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $x < -1$이고, 순서 성질 (3)의 (iii)과 (K9)의 $-(-1) = 1$에 의해 $1 < -x$입니다. $0 \le 1 < -x$이고 순서 성질 (1)의 (v)에 의해 $0 < -x$이므로 순서 성질 (7)의 (i)에 의해 $1 < (-x)(-x)$이고, (K12)의 (iii)에 의해 $(-x)(-x) = xx$이므로 $1 < xx$입니다. 이것은 $xx \le 1$과 함께 성립하지 않습니다. 따라서 $-1 \le x$입니다. $-1 \in E$이므로 $\min E = -1$이고, 이 항목의 (2)에 의해 $\inf E = -1$입니다.
:::

:::counterexample[$\mathbb{R}$은 위로 유계가 아니다]
상한은 상계여야 하므로, 상계가 없는 집합에는 상한이 없습니다. $\mathbb{R}$ 자신이 그런 집합입니다. 실수 $b$를 아무것이나 잡으면 $b + 1 \in \mathbb{R}$이고, 순서 성질 (5)의 (ii)의 $0 < 1$에 (W3)으로 $b$를 더하면 $0 + b < 1 + b$이고, (K1)과 (K4)에 의해 $b < b + 1$입니다. 순서 성질 (1)의 (i)에 의해 $b + 1 \le b$는 성립하지 않으므로 $b$는 $\mathbb{R}$의 상계가 아닙니다. 따라서 $\mathbb{R}$은 위로 유계가 아니고 상한을 갖지 않습니다.
:::

## 확인 질문

:::check[실수 $c$ 하나로 이루어진 집합 $\{c\}$의 최댓값, 최솟값, 상한, 하한은 무엇인가?]
모두 $c$입니다. $\{c\}$의 원소는 $c$뿐이고 $c \le c$이므로 $c$는 $\{c\}$의 상계이자 하계이며 $\{c\}$에 속합니다. 따라서 $\max \{c\} = \min \{c\} = c$이고, 이 항목의 (2)에 의해 $\sup \{c\} = \inf \{c\} = c$입니다.
:::

:::check[$E$가 공집합이 아니고 $b$가 $E$의 하계, $c$가 $E$의 상계이면 $b \le c$인가? $E$가 공집합이면 어떤가?]
공집합이 아니면 그렇습니다. $E$의 원소 $x$를 하나 잡으면 $b \le x$이고 $x \le c$이므로 순서 성질 (1)의 (v)에 의해 $b \le c$입니다. 공집합이면 성립하지 않을 수 있습니다. 이 항목의 (5)에 의해 $1$은 $\emptyset$의 하계이고 $0$은 $\emptyset$의 상계인데, 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 순서 성질 (1)의 (i)에 의해 $1 \le 0$은 성립하지 않습니다. 원소 $x$를 하나 잡는 단계가 공집합에서는 불가능하기 때문입니다.
:::
