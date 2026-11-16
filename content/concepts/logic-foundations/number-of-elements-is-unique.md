---
title: 원소의 개수는 하나로 정해진다
title_en: The Number of Elements Is Uniquely Determined
aliases: [원소의 개수, 유한집합의 크기, 개수의 유일성, number of elements, cardinality of a finite set]
kind: corollary
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 집합이 원소를 m개 갖고 n개도 가지면 m = n이다. 그래서 유한집합의 원소의 개수를 |A|로 쓸 수 있고, 두 유한집합 사이에 전단사가 있는 것은 개수가 같을 때, 단사가 있는 것은 개수가 작거나 같을 때뿐이다.
requires: [set, subset, cartesian-product, function, injective-surjective-bijective, inverse-function, equal-cardinality, comparing-cardinalities, composition-preserves-injectivity-and-surjectivity, finite-set, pigeonhole-principle, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 1.1절 Introduction to Sets, p.4(유한집합 X의 |X|는 원소의 개수). 14.1절 Sets with Equal Cardinalities, p.269(유한집합에서는 원소를 세어 같은 수가 나오면 |A| = |B|라 해 왔다는 설명), Definition 14.1
    checked: original
    note: "출처는 1.1절(p.4)에서 유한집합 X의 크기 |X|를 '원소의 개수'라 하고, 14.1절(p.269)에서 '지금까지는 A와 B의 원소를 세어 같은 수가 나오면 |A| = |B|라 했다'고 쓰며 그 뒤에 전단사로 |A| = |B|를 정의한다(Definition 14.1). 이 사이트가 확인한 출처의 범위(1.1절, 3.9절, 12.3절, 14.1절)에서는 '원소의 개수가 하나로 정해진다'는 진술이나 증명, 그리고 두 가지 뜻의 |A| = |B|나 |A| ≤ |B|가 유한집합에서 일치한다는 진술이나 증명을 찾지 못했다. 이 항목의 진술과 증명은 이 사이트의 것이다. 출처의 표기 |X|는 유한집합에서 수로 쓰이므로 이 항목이 그 쓰임을 엄밀하게 만든다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 증명에서 건너뛴 경우와 근거, 진술에 구성을 넣는 일, 출처 메모, 증명한 범위보다 넓은 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$A$와 $B$가 [[set|집합]]이고 $m$, $n$이 정수($m \ge 0$, $n \ge 0$)라 하자. "원소를 $n$개 갖는다"는 [[finite-set]]의 뜻이다.

1. (유일성) $A$가 원소를 $m$개 갖고 원소를 $n$개도 가지면 $m = n$이다.
2. (전단사와 개수) $A$가 원소를 $m$개, $B$가 원소를 $n$개 가질 때, $A$에서 $B$로의 전단사가 존재하는 것은 정확히 $m = n$일 때이다.
3. (단사와 개수) 같은 가정 아래, $A$에서 $B$로의 단사가 존재하는 것은 정확히 $m \le n$일 때이다. 또 $A$에서 $B$로의 단사가 존재하지만 전단사는 존재하지 않는 것은 정확히 $m < n$일 때이다.

따라서 유한집합 $A$에 대하여 $A$가 원소를 $n$개 갖게 하는 정수 $n \ge 0$은 하나뿐이다. 이 정수를 $A$의 **원소의 개수**(number of elements)라 하고 $|A|$로 쓴다. 곧 $|A| = n$은 "$A$가 원소를 $n$개 갖는다"를 줄여 쓴 것이다. 이 표기는 유한집합에서만 쓴다.

유한집합 $A$, $B$에 대해 $|A| = |B|$, $|A| \le |B|$, $|A| < |B|$는 두 가지로 읽힐 수 있다. 하나는 [[equal-cardinality|크기가 같다]]와 [[comparing-cardinalities|크기의 비교]]의 뜻(전단사나 단사의 존재)이고, 다른 하나는 정수 $|A|$와 $|B|$의 같음과 대소이다. 2와 3에 의해 이 두 읽기는 같은 조건이다. 곧 $|A| = |B|$인 것은 $A$에서 $B$로의 전단사가 존재할 때이고, $|A| \le |B|$인 것은 단사가 존재할 때이며, $|A| < |B|$인 것은 단사는 존재하지만 전단사는 존재하지 않을 때이다. 따라서 유한집합에서는 두 읽기가 충돌하지 않는다.

증명에서 정수와 부등식에 관하여 [[well-ordering-principle]]의 (L2)와 (Z5)를 인용하고, [[finite-set]]의 (F1)–(F5)를 쓰며, [[pigeonhole-principle|비둘기집 원리]]도 쓴다.
:::

:::english
Let $A$ and $B$ be sets and $m$, $n$ integers with $m \ge 0$ and $n \ge 0$. "Has $n$ elements" is in the sense of the entry on finite sets.

1. (Uniqueness) If $A$ has $m$ elements and also has $n$ elements, then $m = n$.
2. (Bijections and the number of elements) Suppose $A$ has $m$ elements and $B$ has $n$ elements. Then there exists a bijection from $A$ to $B$ exactly when $m = n$.
3. (Injections and the number of elements) Under the same assumptions, there exists an injection from $A$ to $B$ exactly when $m \le n$. Also, there exists an injection from $A$ to $B$ but no bijection exactly when $m < n$.

Hence for a finite set $A$ there is exactly one integer $n \ge 0$ such that $A$ has $n$ elements. We call this integer the **number of elements** of $A$ and write $|A|$. That is, $|A| = n$ is an abbreviation for "$A$ has $n$ elements". This notation is used only for finite sets.

For finite sets $A$ and $B$, the statements $|A| = |B|$, $|A| \le |B|$, $|A| < |B|$ can be read in two ways. One is the sense of having the same cardinality and of comparing cardinalities (existence of a bijection or an injection); the other is equality and order of the integers $|A|$ and $|B|$. By 2 and 3 the two readings are the same condition. That is, $|A| = |B|$ holds exactly when there is a bijection from $A$ to $B$, $|A| \le |B|$ holds exactly when there is an injection, and $|A| < |B|$ holds exactly when there is an injection but no bijection. So the two readings do not conflict for finite sets.

In the proof we cite (L2) and (Z5) of the entry on the well-ordering principle for integers and inequalities, and we use (F1)–(F5) of the entry on finite sets and the pigeonhole principle.
:::

## 직관

같은 물건을 순서를 바꿔 가며 세어도 같은 수가 나온다는 것은 우리의 경험입니다. 이 항목은 그것을 [[finite-set|전단사로 정의한 개수]]에 대해 증명합니다. 두 번 센 결과를 집합 $A$를 거쳐 이으면 첫 번째 번호에서 두 번째 번호로 가는 전단사가 생기고, 그것은 특히 단사이므로 [[pigeonhole-principle|비둘기집 원리]]에 의해 한 수가 다른 수 이하입니다. 두 방향에서 같은 일을 하면 두 수가 같습니다.

"하나로 정해진다"는 것이 증명되었으므로 $|A| = n$이라는 줄임 표기를 이제 마음 놓고 쓸 수 있습니다. 비유가 어긋나는 곳은 무한집합입니다. 이 항목의 $|A|$는 유한집합의 원소의 개수라는 정수이고, 무한집합에서는 $|A|$가 수가 아니라 $|A| = |B|$라는 표기 전체에 뜻이 있다는 [[equal-cardinality|크기가 같은 집합]]의 약속이 그대로 유지됩니다.

## 증명

:::idea
두 번 센 결과 $f : \{1, \dots, m\} \to A$와 $g : \{1, \dots, n\} \to A$를 이어 $g^{-1} \circ f$를 만들면 $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 단사이므로 $m \le n$, 반대로 이으면 $n \le m$이다.
:::

:::hint
$f$와 $g$는 전단사이므로 역관계도 전단사입니다. 그 합성이 단사이면 비둘기집 원리를 쓸 수 있습니다.
:::

:::proof
**1의 증명.** $f : \{1, \dots, m\} \to A$와 $g : \{1, \dots, n\} \to A$가 전단사라 하자. [[finite-set]]의 (F3)에 의해 $g^{-1} : A \to \{1, \dots, n\}$과 $f^{-1} : A \to \{1, \dots, m\}$도 전단사이다. [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 $g^{-1} \circ f : \{1, \dots, m\} \to \{1, \dots, n\}$은 전단사이므로 특히 단사이고, [[pigeonhole-principle]]의 1번에 의해 $m \le n$이다. 같은 정리에 의해 $f^{-1} \circ g : \{1, \dots, n\} \to \{1, \dots, m\}$도 전단사이므로 단사이고, [[pigeonhole-principle]]의 1번에 $m$과 $n$의 역할을 바꾸어 쓰면 $n \le m$이다. (L2)에 의해 $m = n$이다.

**2의 증명.** $A$에서 $B$로의 전단사 $k$가 있다고 하자. $A$가 원소를 $m$개 가지므로 (F4)에 의해 $B$도 원소를 $m$개 갖는다. $B$는 원소를 $n$개도 가지므로 1에 의해 $m = n$이다. 거꾸로 $m = n$이면 $A$와 $B$가 둘 다 원소를 $n$개 가지므로 (F5)에 의해 $A$에서 $B$로의 전단사가 있다.

**3의 증명.** 먼저 $A$에서 $B$로의 단사 $f$가 있다고 하자. [[pigeonhole-principle]]의 2(긍정 꼴)에 의해 $m \le n$이다. 거꾸로 $m \le n$이라 하자. $i \in \{1, \dots, m\}$이면 $1 \le i \le m \le n$이므로 (Z6)에 의해 $i \le n$이고 $i \in \{1, \dots, n\}$이다. 따라서 $\iota = \{(i, i) : i \in \{1, \dots, m\}\}$는 $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 함수이고, $\iota(i) = \iota(i')$이면 $i = i'$이므로 단사이다. $h_A : \{1, \dots, m\} \to A$와 $h_B : \{1, \dots, n\} \to B$를 전단사라 하면 (F3)에 의해 $h_A^{-1} : A \to \{1, \dots, m\}$도 전단사이고 특히 단사이다. [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번을 두 번 쓰면 $h_B \circ \iota \circ h_A^{-1} : A \to B$는 단사이다. 이로써 단사의 존재와 $m \le n$은 서로 동치이다.

둘째 주장. 단사가 존재하지만 전단사는 존재하지 않는 것은, 위와 2에 의해 정확히 $m \le n$이고 $m \ne n$일 때이다. $m \le n$은 $m < n$ 또는 $m = n$이므로, $m \le n$이고 $m \ne n$이면 $m < n$이다. 거꾸로 $m < n$이면 $m \le n$이고 (Z5)에 의해 $m = n$이 아니다. 따라서 정확히 $m < n$일 때이다.

**표기에 관한 주장.** 1에 의해 유한집합 $A$가 원소를 $n$개 갖게 하는 $n$은 하나뿐이다. $A$, $B$가 유한집합이고 $|A| = m$, $|B| = n$이면 $A$가 원소를 $m$개, $B$가 원소를 $n$개 가지므로, 2에 의해 $A$에서 $B$로의 전단사가 존재하는 것은 정확히 정수 $|A|$와 $|B|$가 같을 때이고, 3에 의해 단사가 존재하는 것은 정확히 $|A| \le |B|$일 때이며 단사는 있지만 전단사가 없는 것은 정확히 $|A| < |B|$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[전단사가 없음을 개수로 알기]
$A = \{1, 2, 3\}$과 $B = \{1, 2, 3, 4\}$ 사이에는 전단사가 없습니다. $A = \{1, 2, 3\}$은 $\{1, \dots, 3\}$ 자신이므로 ([[finite-set]]의 (F2)) 원소를 $3$개 갖고, 같은 이유로 $B$는 원소를 $4$개 갖습니다. $3 \ne 4$이므로 2에 의해 $A$에서 $B$로의 전단사가 존재하지 않습니다. [[equal-cardinality|크기가 같은 집합]]의 반례에서는 $9$개의 함수를 모두 늘어놓아야 했던 비슷한 확인을 이 정리가 한 번에 해 줍니다.
:::

:::example[전단사가 있음을 개수로 알기]
$C = \{\text{가}, \text{나}, \text{다}, \text{라}\}$와 $D = \{2, 4, 6, 8\}$은 각각 $\{(1, \text{가}), (2, \text{나}), (3, \text{다}), (4, \text{라})\}$와 $\{(1, 2), (2, 4), (3, 6), (4, 8)\}$으로 원소를 $4$개 갖습니다. 따라서 2에 의해 $C$에서 $D$로의 전단사가 있습니다. 증명의 방법대로 만들면 $\{(\text{가}, 2), (\text{나}, 4), (\text{다}, 6), (\text{라}, 8)\}$입니다.
:::

:::counterexample[함수 하나가 전단사가 아니라고 개수가 다른 것은 아니다]
$A = \{1, 2, 3\}$이고 $f = \{(1, 1), (2, 1), (3, 1)\}$은 $A$에서 $A$로의 함수입니다. $f(1) = f(2)$이고 $1 \ne 2$이므로 단사가 아니어서 전단사가 아닙니다. 그러나 정의역과 공역이 모두 $A$이고 $A$는 원소를 $3$개 가지므로, 2에 의해 $A$에서 $A$로의 전단사가 존재합니다(예컨대 항등함수). 2는 전단사가 "존재한다"와 개수가 같다를 잇는 것이고, 주어진 함수 하나가 전단사인지는 말하지 않습니다.
:::

## 확인 질문

:::check[$A$가 원소를 $4$개 갖고 $f : A \to B$가 전단사이며 $B$가 원소를 $n$개 갖는다. $n$은 얼마인가?]
$n = 4$입니다. [[finite-set]]의 (F4)에 의해 $B$는 원소를 $4$개 갖고, $B$가 원소를 $n$개도 가지므로 1에 의해 $n = 4$입니다.
:::

:::check[$S = \{x \in \mathbb{Z} : 3 \le x \le 8\}$이고 $T = \{x \in \mathbb{Z} : 11 \le x \le 16\}$이다. $S$에서 $T$로의 전단사가 있는지를, 전단사를 직접 찾지 않고 판단하라.]
$h_S(i) = i + 2$로 정한 $h_S : \{1, \dots, 6\} \to S$는 $h_S(1) = 3, \dots, h_S(6) = 8$이어서 값이 서로 다르고 $S$의 원소를 모두 얻으므로 전단사이고, $S$는 원소를 $6$개 갖습니다. $h_T(i) = i + 10$으로 정한 $h_T : \{1, \dots, 6\} \to T$도 $h_T(1) = 11, \dots, h_T(6) = 16$이므로 전단사이고 $T$도 원소를 $6$개 갖습니다. 2에 의해 두 개수가 같으므로 $S$에서 $T$로의 전단사가 있습니다. 증명이 알려 주는 구성은 $h_T \circ h_S^{-1}$이고, $x$에 $x + 8$을 대응시키는 함수로 계산됩니다.
:::
