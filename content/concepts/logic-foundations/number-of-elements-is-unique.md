---
title: 원소의 개수는 하나로 정해진다
title_en: The Number of Elements Is Uniquely Determined
aliases: [원소의 개수, 유한집합의 크기, 개수의 유일성, number of elements, cardinality of a finite set]
kind: corollary
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 집합이 원소를 m개 갖고 n개도 가지면 m = n이다. 그래서 유한집합의 원소의 개수를 |A|로 쓸 수 있고, 두 유한집합 사이에 전단사가 있는 것은 원소의 개수가 같을 때뿐이다.
requires: [set, function, injective-surjective-bijective, equal-cardinality, composition-preserves-injectivity-and-surjectivity, finite-set, pigeonhole-principle, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 1.1절 Introduction to Sets, p.4(유한집합 X의 |X|는 원소의 개수). 14.1절 Sets with Equal Cardinalities, p.269(유한집합에서는 원소를 세어 같은 수가 나오면 |A| = |B|라 해 왔다는 설명), Definition 14.1
    checked: original
    note: "출처는 1.1절(p.4)에서 유한집합 X의 크기 |X|를 '원소의 개수'라 하고, 14.1절(p.269)에서 '지금까지는 A와 B의 원소를 세어 같은 수가 나오면 |A| = |B|라 했다'고 쓰며 그 뒤에 전단사로 |A| = |B|를 정의한다(Definition 14.1). 출처가 읽은 범위(1.1절, 3.9절, 12.3절, 14.1절)에는 '원소의 개수가 하나로 정해진다'는 진술이나 증명, 그리고 두 가지 뜻의 |A| = |B|가 유한집합에서 일치한다는 진술이나 증명을 찾지 못했다. 이 항목의 진술과 증명은 이 사이트의 것이다. 출처의 표기 |X|는 유한집합에서 수로 쓰이므로 이 항목이 그 쓰임을 엄밀하게 만든다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$와 $B$가 [[set|집합]]이고 $m$, $n$이 정수($m \ge 0$, $n \ge 0$)라 하자. "원소를 $n$개 갖는다"는 [[finite-set]]의 뜻이다.

1. (유일성) $A$가 원소를 $m$개 갖고 원소를 $n$개도 가지면 $m = n$이다.
2. (전단사와 개수) $A$가 원소를 $m$개, $B$가 원소를 $n$개 가질 때, $A$에서 $B$로의 전단사가 존재하는 것은 정확히 $m = n$일 때이다.

따라서 유한집합 $A$에 대하여 $A$가 원소를 $n$개 갖게 하는 정수 $n \ge 0$은 하나뿐이다. 이 정수를 $A$의 **원소의 개수**(number of elements)라 하고 $|A|$로 쓴다. 곧 $|A| = n$은 "$A$가 원소를 $n$개 갖는다"와 같은 말이다([[finite-set]]에서 약속한 줄임 표기이다). 이 표기는 유한집합에서만 쓴다.

두 유한집합 $A$, $B$에 대하여, [[equal-cardinality|크기가 같다]]는 뜻의 $|A| = |B|$($A$에서 $B$로의 전단사가 존재한다)와 원소의 개수가 같다는 뜻의 $|A| = |B|$(정수 $|A|$와 $|B|$가 같다)는 서로 같은 조건이다. 따라서 유한집합에서는 두 뜻의 $|A| = |B|$가 충돌하지 않는다.

증명에서 정수와 부등식에 관하여 [[well-ordering-principle]]의 (L2)를 인용하고, [[finite-set]]의 (F3)–(F5)를 쓰며, [[pigeonhole-principle|비둘기집 원리]]도 쓴다.
:::

:::english
Let $A$ and $B$ be sets and $m$, $n$ integers with $m \ge 0$ and $n \ge 0$. "Has $n$ elements" is in the sense of the entry on finite sets.

1. (Uniqueness) If $A$ has $m$ elements and also has $n$ elements, then $m = n$.
2. (Bijections and the number of elements) Suppose $A$ has $m$ elements and $B$ has $n$ elements. Then there exists a bijection from $A$ to $B$ exactly when $m = n$.

Hence for a finite set $A$ there is exactly one integer $n \ge 0$ such that $A$ has $n$ elements. We call this integer the **number of elements** of $A$ and write $|A|$. That is, $|A| = n$ means the same as "$A$ has $n$ elements" (the abbreviation agreed on in the entry on finite sets). This notation is used only for finite sets.

For two finite sets $A$ and $B$, the statement $|A| = |B|$ in the sense of having the same cardinality (there exists a bijection from $A$ to $B$) and the statement $|A| = |B|$ in the sense of equal numbers of elements (the integers $|A|$ and $|B|$ are equal) are the same condition. So the two meanings of $|A| = |B|$ do not conflict for finite sets.

In the proof we cite (L2) of the entry on the well-ordering principle for integers and inequalities, and we use (F3)–(F5) of the entry on finite sets and the pigeonhole principle.
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

**표기에 관한 주장.** 1에 의해 유한집합 $A$가 원소를 $n$개 갖게 하는 $n$은 하나뿐이다. $A$, $B$가 유한집합이고 $|A| = m$, $|B| = n$이면 $A$가 원소를 $m$개, $B$가 원소를 $n$개 가지므로, 2에 의해 $A$에서 $B$로의 전단사가 존재하는 것은 정확히 $m = n$, 곧 정수 $|A|$와 $|B|$가 같을 때이다. $\blacksquare$
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

:::check[$A$가 원소를 $4$개 갖고 $B$가 원소를 $5$개 갖는다. $A$에서 $B$로의 전단사가 있을 수 있는가?]
없습니다. 2에 의해 전단사가 존재하는 것은 정확히 개수가 같을 때인데 $4 \ne 5$입니다.
:::

:::check[$S = \{x \in \mathbb{Z} : 1 \le x \le 6\}$이고 $T = \{x \in \mathbb{Z} : 11 \le x \le 16\}$이다. $S$에서 $T$로의 전단사를 하나 쓰고, 왜 그런 전단사가 있다고 처음부터 알 수 있었는지 설명하라.]
$s(x) = x + 10$으로 정한 $s : S \to T$를 쓰면 $s(1) = 11, \dots, s(6) = 16$이어서 값이 모두 서로 다르고 $T$의 원소를 모두 얻으므로 전단사입니다. 처음부터 알 수 있었던 까닭은 $S$가 $\{1, \dots, 6\}$ 자신이고 $T$는 $h(i) = i + 10$으로 정한 $h : \{1, \dots, 6\} \to T$($h(1) = 11, \dots, h(6) = 16$)라는 전단사가 있어 둘 다 원소를 $6$개 갖기 때문입니다. 2에 의해 원소의 개수가 같으면 전단사가 있습니다.
:::
