---
title: 정렬 원리
title_en: Well-Ordering Principle
aliases: [well-ordering principle, 최소 원소 원리, 자연수의 정렬성]
kind: theorem
field: number-theory
msc: ["11"]
level: undergrad
summary: 자연수의 공집합이 아닌 부분집합은 최소 원소를 갖는다. 아래로 유계인 정수의 집합은 최소 원소를, 위로 유계인 정수의 집합은 최대 원소를 갖는다.
requires: [mathematical-induction, proof-by-contradiction, set, subset, divisibility, prime-number, even-and-odd]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 1.9절 Sets That Are Number Systems, p.30 (번호 없는 서술, 책 뒤 색인에 "well-ordering principle, 30")
    checked: original
    note: "출처는 \"N의 공집합이 아닌 부분집합은 최소 원소를 갖는다\"와 시작점이 정수 b인 {b, b+1, b+2, ...}의 부분집합에 대한 같은 사실을 \"우리 몸에 밴 수의 순서 감각\"으로 알 수 있는 것으로 서술하고(p.30), 이를 정렬 원리라 부른다고만 한다. 출처는 이 사실을 증명하지 않는다. 아래 증명은 이 사이트의 mathematical-induction 진술에서 끌어낸 이 사이트가 직접 쓴 증명이다. 출처에 없는 것: 최소 원소의 형식적 정의, 최소 원소의 유일성, 아래로 유계인 정수 집합의 판((가)), 위로 유계인 정수 집합의 최대 원소 판((나)), 그리고 아래 (Z5)–(Z7)의 명시. 출처는 N, Z, Q, R의 원소의 자연스러운 순서를 사실로 받아들인다고 쓴다(p.30). 반례로 든 양의 실수의 집합은 출처 p.30의 {1/n : n은 자연수} 예와 같은 취지이며 집합은 새로 골랐다. Stein의 Elementary Number Theory에는 이 원리의 서술이 없다(well-ordering이라는 말이 책에 나오지 않는다). 증명의 경로(S_n을 \"n 이하인 A의 원소가 없다\"로 두는 귀납)는 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 받아들이는 사실 (Z8)과 따름 사실 (L1)–(L3)을 진술에 명시, 거짓이던 예시 문장과 출처 쪽수 정정."
added: 2026-11-16
---

:::statement
정수의 집합 $A$($A \subseteq \mathbb{Z}$)에 대하여 다음 용어를 쓴다. 정수 $a$, $b$에 대하여 $a \le b$는 "$a < b$ 또는 $a = b$"를 뜻하고, $a > b$는 $b < a$, $a \ge b$는 $b \le a$를 뜻한다.

- $A$의 원소 $m$이 $A$의 **최소 원소**(least element)인 것은 정확히 $A$의 모든 원소 $a$에 대하여 $m \le a$일 때이다.
- $A$의 원소 $M$이 $A$의 **최대 원소**(greatest element)인 것은 정확히 $A$의 모든 원소 $a$에 대하여 $a \le M$일 때이다.
- $A$가 **아래로 유계**(bounded below)인 것은 정확히 어떤 정수 $c$가 있어 $A$의 모든 원소 $a$에 대하여 $c \le a$일 때이다.
- $A$가 **위로 유계**(bounded above)인 것은 정확히 어떤 정수 $d$가 있어 $A$의 모든 원소 $a$에 대하여 $a \le d$일 때이다.

**정렬 원리**(well-ordering principle)는 아래 2번 명제, 곧 자연수의 집합 $\mathbb{N} = \{1, 2, 3, \dots\}$의 공집합이 아닌 부분집합은 최소 원소를 갖는다는 명제이다. 이 사이트에서 이는 정리이며, 다음 네 가지가 함께 성립한다.

1. (유일성) 정수의 집합 $A$의 최소 원소는 있으면 하나뿐이고, 최대 원소도 있으면 하나뿐이다.
2. ($\mathbb{N}$의 경우) $\mathbb{N}$의 공집합이 아닌 부분집합은 최소 원소를 갖는다.
3. (가) 정수의 집합 $A$가 공집합이 아니고 아래로 유계이면 $A$는 최소 원소를 갖는다.
4. (나) 정수의 집합 $A$가 공집합이 아니고 위로 유계이면 $A$는 최대 원소를 갖는다.

이 사이트는 정수와 부등식에 관하여 [[prime-number]] 항목의 (Z1)–(Z4)에 더해 다음 성질을 증명 없이 받아들인다. 여기서 $a$, $b$, $c$는 정수이다.

- (Z5) (삼분법) $a < b$, $a = b$, $a > b$ 가운데 정확히 하나가 성립한다.
- (Z6) (추이성) $a < b$이고 $b < c$이면 $a < c$이다. $a \le b$이고 $b \le c$이면 $a \le c$이다. $a < b$이고 $b \le c$이거나, $a \le b$이고 $b < c$이면 $a < c$이다.
- (Z7) $a < b$이면 $a + c < b + c$이고, $a = b$이면 $a + c = b + c$이다. 따라서 $a \le b$이면 $a + c \le b + c$이다. 뺄셈은 $-c$를 더하는 것이므로 양변에서 같은 정수를 빼도 같다.
- (Z8) $0 < 1$이다.

이 밖에 정수의 덧셈과 곱셈의 교환법칙, 결합법칙, 분배법칙과 $0$, $1$, 음수에 관한 계산($0 \cdot a = 0$, $1 \cdot a = a$, $a + (-a) = 0$ 등)과 구체적인 정수 사이의 등식과 부등식(예: $0 < 3$, $-18 < 0$)은 계산으로 보아 증명 없이 쓰며 쓸 때마다 적지 않는다. 정수끼리 더하거나 빼거나 곱한 결과가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.

위 성질에서 따라 나오는 다음 사실을 뒤 항목들이 인용한다. 여기서 $a$, $b$는 정수이다. 증명은 아래 "(L1)–(L3)의 증명"에 있다.

- (L1) $a < b$와 $b \le a$는 동시에 성립하지 않는다.
- (L2) $a \le b$이고 $b \le a$이면 $a = b$이다.
- (L3) $a - 1 < a < a + 1$이다. 특히 $0 \ne 1$이다.
:::

:::english
For a set $A$ of integers ($A \subseteq \mathbb{Z}$) we use the following terms. For integers $a$ and $b$, $a \le b$ means "$a < b$ or $a = b$", $a > b$ means $b < a$, and $a \ge b$ means $b \le a$.

- An element $m$ of $A$ is a **least element** of $A$ exactly when $m \le a$ for every element $a$ of $A$.
- An element $M$ of $A$ is a **greatest element** of $A$ exactly when $a \le M$ for every element $a$ of $A$.
- $A$ is **bounded below** exactly when there is an integer $c$ such that $c \le a$ for every element $a$ of $A$.
- $A$ is **bounded above** exactly when there is an integer $d$ such that $a \le d$ for every element $a$ of $A$.

The **well-ordering principle** is statement 2 below: every nonempty subset of the set $\mathbb{N} = \{1, 2, 3, \dots\}$ of natural numbers has a least element. On this site it is a theorem, and the following four statements hold together.

1. (Uniqueness) A set $A$ of integers has at most one least element, and at most one greatest element.
2. (The case of $\mathbb{N}$) Every nonempty subset of $\mathbb{N}$ has a least element.
3. (a) If a set $A$ of integers is nonempty and bounded below, then $A$ has a least element.
4. (b) If a set $A$ of integers is nonempty and bounded above, then $A$ has a greatest element.

In addition to (Z1)–(Z4) in the entry on prime numbers, this text accepts the following properties of integers and inequalities without proof. Here $a$, $b$, $c$ are integers.

- (Z5) (Trichotomy) Exactly one of $a < b$, $a = b$, $a > b$ holds.
- (Z6) (Transitivity) If $a < b$ and $b < c$, then $a < c$. If $a \le b$ and $b \le c$, then $a \le c$. If $a < b$ and $b \le c$, or if $a \le b$ and $b < c$, then $a < c$.
- (Z7) If $a < b$, then $a + c < b + c$, and if $a = b$, then $a + c = b + c$. Hence if $a \le b$, then $a + c \le b + c$. Subtraction is addition of $-c$, so subtracting the same integer from both sides works the same way.
- (Z8) $0 < 1$.

Besides these, the commutative, associative, and distributive laws of addition and multiplication of integers and the computations involving $0$, $1$, and negatives ($0 \cdot a = 0$, $1 \cdot a = a$, $a + (-a) = 0$, and so on), as well as equalities and inequalities between specific integers (for example $0 < 3$ and $-18 < 0$), are treated as computations and are used without proof and are not cited each time. That the sum, difference, and product of integers are integers is the fact accepted earlier on this site.

The following facts follow from the properties above and are cited by later entries. Here $a$ and $b$ are integers. They are proved below.

- (L1) $a < b$ and $b \le a$ do not hold together.
- (L2) If $a \le b$ and $b \le a$, then $a = b$.
- (L3) $a - 1 < a < a + 1$. In particular $0 \ne 1$.
:::

## 직관

계단 맨 아래 칸에서 출발해 한 칸씩 올라가며 "이 칸에 불이 켜져 있나?" 확인한다고 합시다. 불 켜진 칸이 하나라도 있으면 처음 만나는 칸이 있을 것입니다. 이 칸이 최소 원소입니다. 올라가는 동안 칸마다 "여기까지 켜진 칸이 없다"를 확인하는 것이 증명의 $S_n$입니다. 끝까지 켜진 칸을 못 만났다면 처음부터 켜진 칸이 없었다는 것입니다.

"아래로 유계"가 필요한 까닭은 출발할 맨 아래 칸이 있어야 하기 때문입니다. 끝없이 내려가는 계단에서는 처음 만나는 칸이 없을 수 있습니다. 정수 전체 $\mathbb{Z}$가 그런 예입니다. 위로 유계인 집합의 최대 원소는 같은 이야기를 위아래로 뒤집은 것으로, 아래에서 증명하듯 각 원소의 부호를 바꾸어 (가)로 돌립니다.

이 사이트에서는 [[mathematical-induction]]의 원리를 증명 없이 받아들이고, 정렬 원리는 거기서 끌어낸 정리로 증명합니다.

## 증명

:::idea
집합 $A$에 최소 원소가 없다고 가정하고 "$n$ 이하인 $A$의 원소가 없다"를 $n$에 대한 귀납으로 모든 $n$에서 보인다. 그러면 $A$의 원소 $a_0$ 자신이 $a_0$ 이하이므로 모순이다.
:::

:::hint
$A$가 최소 원소를 갖는지 직접 찾으려 하지 말고, 갖지 않는다고 가정하세요. 그러면 "$A$의 원소 가운데 $n$ 이하인 것이 없다"는 문장 $S_n$을 $n$에 대한 귀납으로 증명할 수 있습니다. 시작점은 아래 경계 $c$입니다.
:::

:::hint
귀납 단계에서 $A$의 원소 $a$가 $k+1$ 이하라고 가정하면, $a$는 $k$ 이하이거나 정확히 $k+1$입니다. 앞의 경우는 귀납 가정에 어긋납니다. 뒤의 경우는 $a$가 $A$의 최소 원소가 됨을 보이세요.
:::

:::proof
먼저 진술의 (L1), (L2)를 쓴다.

**1. 유일성.** $m$과 $m'$이 모두 $A$의 최소 원소라 하자. $m' \in A$이고 $m$이 최소 원소이므로 $m \le m'$이다. 같은 이유로 $m' \le m$이다. (L2)에 의해 $m = m'$이다. $M$과 $M'$이 모두 최대 원소이면 $M \le M'$이고 $M' \le M$이므로 같은 논증으로 $M = M'$이다.

**3. (가)의 증명.** [[proof-by-contradiction]]의 틀(조건문 꼴)을 따른다. $A$는 공집합이 아니고 아래로 유계라고 가정하고, 동시에 $A$가 최소 원소를 갖지 **않는다고** 가정한다. 아래 경계를 $c$라 하자. 곧 $A$의 모든 원소 $a$에 대하여 $c \le a$이다.

$c$ 이상인 정수 $n$마다 명제 $S_n$을 "$A$의 원소 가운데 $n$ 이하인 것은 없다"로 정한다. 시작점이 $c$인 [[mathematical-induction]]으로 $c$ 이상의 모든 정수 $n$에서 $S_n$이 참임을 보인다.

*기초 단계 ($S_c$).* $A$의 원소 $a$가 $a \le c$라 하자. $c$가 아래 경계이므로 $c \le a$이다. (L2)에 의해 $a = c$이다. 그러면 $A$의 모든 원소 $x$에 대하여 $c \le x$, 곧 $a \le x$이므로 $a$는 $A$의 최소 원소이다. 이것은 최소 원소가 없다는 가정에 어긋난다. 따라서 $c$ 이하인 $A$의 원소는 없다. 곧 $S_c$가 참이다.

*귀납 단계.* $k \ge c$인 정수 $k$를 하나 잡고 $S_k$가 참이라고 가정한다(귀납 가정). $S_{k+1}$이 참임을 보이려고, $A$의 원소 $a$가 $a \le k + 1$이라고 가정한다. $a \le k + 1$은 $a < k + 1$ 또는 $a = k + 1$이다.

- $a < k + 1$이면 (Z1)에 의해 $a + 1 \le k + 1$이고, 양변에서 $1$을 빼면 (Z7)에 의해 $a \le k$이다. $a \in A$이므로 귀납 가정 $S_k$에 어긋난다. 따라서 이 경우는 일어나지 않는다.
- 따라서 $a = k + 1$이다. 이제 $A$의 임의의 원소 $x$를 잡는다. $S_k$에 의해 $x \le k$는 아니다. 곧 $x < k$도 $x = k$도 아니므로 (Z5)에 의해 $x > k$, 곧 $k < x$이다. $x$와 $k$가 정수이므로 (Z1)에 의해 $k + 1 \le x$이다. 곧 $a \le x$이다. $x$는 $A$의 임의의 원소였으므로 $a$는 $A$의 최소 원소이다. 이것은 최소 원소가 없다는 가정에 어긋난다. 따라서 이 경우도 일어나지 않는다.

두 경우 모두 일어나지 않으므로 $k + 1$ 이하인 $A$의 원소는 없다. 곧 $S_{k+1}$이 참이다.

귀납법의 원리(시작점이 $c$인 꼴)에 의해 $c$ 이상의 모든 정수 $n$에서 $S_n$이 참이다. 이제 $A$가 공집합이 아니므로 원소 $a_0 \in A$를 하나 잡는다. $c \le a_0$이므로 $n = a_0$에 $S_n$을 쓸 수 있다. $S_{a_0}$는 $a_0$ 이하인 $A$의 원소가 없다고 하는데, $a_0 \in A$이고 $a_0 \le a_0$이다. 모순이다. 따라서 가정이 틀렸고, $A$는 최소 원소를 갖는다.

**2. $\mathbb{N}$의 경우.** $A$가 $\mathbb{N}$의 공집합이 아닌 부분집합이라 하자. 자연수는 양의 정수이므로 $A \subseteq \mathbb{Z}$이다. $A$의 원소 $n$은 $0 < n$이고 (Z1)에 의해 $0 + 1 \le n$, 곧 $1 \le n$이다. 따라서 $A$는 $c = 1$을 아래 경계로 갖는 공집합이 아닌 정수의 집합이다. (가)에 의해 $A$는 최소 원소를 갖는다.

**4. (나)의 증명.** $A$가 공집합이 아니고 $d$가 위 경계라고 하자. 집합 $B = \{-x : x \in A\}$를 만든다. $B$는 정수의 집합이고 $A$가 공집합이 아니므로 $B$도 공집합이 아니다. $B$의 원소 $y$는 어떤 $x \in A$에 대하여 $y = -x$이다. $x \le d$의 양변에 정수 $-x - d$를 더하면 (Z7)에 의해 $x + (-x - d) \le d + (-x - d)$, 곧 $-d \le -x = y$이다. 따라서 $B$는 $-d$를 아래 경계로 가져 아래로 유계이다. (가)에 의해 $B$는 최소 원소 $m$을 갖는다. $m \in B$이므로 $m = -x_0$인 $x_0 \in A$가 있고, $M = x_0 = -m$으로 둔다. $A$의 임의의 원소 $x$에 대하여 $-x \in B$이므로 $m \le -x$이다. 양변에 정수 $x - m$을 더하면 (Z7)에 의해 $m + (x - m) \le -x + (x - m)$, 곧 $x \le -m = M$이다. $M \in A$이므로 $M$은 $A$의 최대 원소이다. $\blacksquare$
:::

:::remark[(L1)–(L3)의 증명]
(L1) $b \le a$는 $b < a$ 또는 $b = a$이다. 둘 다 (Z5)에 의해 $a < b$와 함께 성립하지 않는다.

(L2) $a \ne b$라 하면 $a \le b$에서 $a < b$이다. 이것과 $b \le a$는 (L1)에 의해 함께 성립할 수 없다. 따라서 $a = b$이다.

(L3) (Z8) $0 < 1$의 양변에 $a$를 더하면 (Z7)에 의해 $a < a + 1$이다. 또 $0 < 1$의 양변에 $a - 1$을 더하면 (Z7)에 의해 $a - 1 < a$이다. $0 = 1$이면 (Z5)에 의해 $0 < 1$과 양립하지 않으므로 $0 \ne 1$이다.
:::

## 예시와 반례

:::example[자연수의 부분집합]
$A = \{n \in \mathbb{N} : n^2 > 50\}$을 생각합니다. $1, 2, \dots, 7$의 제곱은 $1, 4, 9, 16, 25, 36, 49$로 모두 $50$ 이하이므로 이 수들은 $A$의 원소가 아닙니다. $8^2 = 64 > 50$이므로 $8 \in A$입니다. $1$부터 $7$까지는 $A$에 없으므로 $A$의 원소는 모두 $8$ 이상이고, 따라서 $8$이 최소 원소입니다. 정렬 원리가 보장하는 최소 원소의 위치를 이 경우에는 직접 찾아낸 것입니다.
:::

:::example[아래로 유계인 정수의 집합과 위로 유계인 정수의 집합]
$A = \{x \in \mathbb{Z} : x^2 < 30\}$은 $-5, -4, \dots, 5$로 이루어져 있습니다($(\pm 5)^2 = 25 < 30$이고 $(\pm 6)^2 = 36 \ge 30$). 아래 경계 $-5$와 위 경계 $5$가 있어, (가)와 (나)에 의해 최소 원소 $-5$와 최대 원소 $5$를 갖습니다.

$C = \{x \in \mathbb{Z} : x < 0\}$은 위로 유계입니다. $x < 0$이면 (Z1)에 의해 $x + 1 \le 0$이므로 모든 원소가 $-1$ 이하이고, $-1 \in C$이므로 $-1$이 최대 원소입니다. 아래로는 유계가 아니어서 최소 원소가 없습니다. 어떤 $x \in C$를 잡아도 $x - 1 < x < 0$에서 $x - 1 \in C$이고 $x - 1 < x$이기 때문입니다((L3), (Z6)).
:::

:::counterexample
가정을 하나 빼면 깨집니다.

- 아래로 유계라는 가정을 뺀 경우: $\mathbb{Z}$ 자신은 공집합이 아니지만 최소 원소가 없습니다. 어떤 정수 $m$도 $m - 1 \in \mathbb{Z}$이고 (L3)에 의해 $m - 1 < m$이어서 최소가 아니기 때문입니다.
- 정수의 집합이라는 가정을 뺀 경우: 양의 실수의 집합 $\{x \in \mathbb{R} : x > 0\}$은 공집합이 아니고 $0$을 아래 경계로 갖지만(최소 원소와 아래 경계의 정의를 실수의 집합에도 같은 문구로 읽습니다) 최소 원소가 없습니다. 어떤 $x$를 잡아도 $\dfrac{x}{2}$가 더 작은 양의 실수이기 때문입니다. 정렬 원리는 정수의 성질이며 실수 전체의 성질이 아닙니다.
:::

## 확인 질문

:::check[$A = \{x \in \mathbb{Z} : x \le 20$이고 $x$는 $6$의 배수$\}$는 최대 원소를 갖는가? 최소 원소를 갖는가?]
$0 = 6 \cdot 0$이므로 $0 \in A$이고 $A$는 공집합이 아니며, $20$을 위 경계로 가지므로 (나)에 의해 최대 원소를 갖습니다. $6$의 배수 가운데 $20$ 이하인 가장 큰 수는 $18$($= 6 \cdot 3$; $24 = 6 \cdot 4 > 20$)이므로 최대 원소는 $18$입니다. 최소 원소는 없습니다. $x \in A$이면 $x - 6$도 $6$의 배수이고($x = 6k$이면 $x - 6 = 6(k - 1)$), $6 > 0$이므로 (Z7)에 의해 $x - 6 < x \le 20$이어서 $A$의 원소이며 $x - 6 < x$이기 때문입니다. $A$는 아래로 유계가 아니어서 (가)를 쓸 수 없습니다.
:::

:::check[$A = \{9, 12, 20\}$에 대하여, 증명의 $S_n$("$A$의 원소 가운데 $n$ 이하인 것은 없다")이 참인 마지막 $n$과 처음으로 거짓이 되는 $n$은 얼마인가? 이것은 $A$의 최소 원소와 어떤 관계인가?]
$S_8$은 참입니다($A$의 원소는 모두 $9$ 이상이므로 $8$ 이하인 것이 없습니다). $S_9$는 $9 \in A$이고 $9 \le 9$이므로 거짓입니다. 그래서 참인 마지막 $n$은 $8$이고 처음 거짓이 되는 $n$은 $9$이며, $9$가 $A$의 최소 원소입니다. 증명은 최소 원소가 없다고 가정해서 이 거짓이 되는 순간이 오지 않음을 보인 것입니다.
:::
