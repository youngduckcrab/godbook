---
title: 구간
title_en: Interval
aliases: [닫힌구간, 열린구간, 반열린구간, closed interval, open interval, half-open interval]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: ℝ 의 부분집합이 서로 다른 두 원소를 갖고, 그 두 점 사이의 모든 실수를 포함할 때 구간이라 한다. a < b 일 때 닫힌구간 [a, b], 열린구간 (a, b), 반열린구간을 집합으로 정의하고 이들과 ℝ, 한쪽으로만 유계인 네 집합이 구간임을 증명한다.
requires: [set, subset, set-operations, cartesian-product, real-number-arithmetic, real-order-axioms, order-properties-of-reals]
sources:
  - ref: lebl-basic-analysis
    loc: 1.4절 첫머리의 정의와 각주, Proposition 1.4.1 과 그 뒤 문단 (p.41), 연습문제 1.4.3 (p.43)
    checked: original
    note: "출처는 1.4절 첫머리(p.41)에서 a < b 일 때 [a, b], (a, b), (a, b], [a, b) 를 집합으로 정의하고 각각 closed interval, open interval, half-open interval 이라 부른다. 이어서 [a, ∞), (a, ∞), (−∞, b], (−∞, b) 와 (−∞, ∞) := ℝ 을 유계가 아닌 구간으로 정의하고, 각주에서 한 점 집합과 공집합을 구간이라 부르기도 하지만 이 책의 구간은 두 점 이상을 갖는다고 적는다. Proposition 1.4.1(p.41)은 'I ⊂ ℝ 가 구간인 것은 정확히 I 가 두 점 이상을 갖고, a, c ∈ I, b ∈ ℝ, a < b < c 이면 b ∈ I 일 때'이고, 증명은 연습문제 1.4.3(p.43)으로 둔다. 그 연습문제는 이 성질을 가진 집합이 1.4절의 아홉 꼴 가운데 하나임을 보이는 것과 아홉 꼴이 모두 이 성질을 가짐을 보이는 것을 함께 묻는다. 이 항목은 Proposition 1.4.1 의 조건을 구간의 정의로 삼고, 아홉 꼴이 이 조건을 만족한다는 방향만 (1), (2)로 증명한다. 이 조건을 만족하는 집합이 아홉 꼴 가운데 하나라는 방향은 싣지 않는다. 유계가 아닌 구간에는 기호를 두지 않고 집합 표기로 쓰며, ∞ 를 구간 기호에 쓰지 않는다. (3)의 첫 문장은 출처가 Proposition 1.4.1 바로 뒤 문단(p.41)에서 '모든 열린구간 (a, b) 는 공집합이 아니고, 예컨대 (a + b)/2 를 포함한다'고 적는 것이다. (4)는 출처에 명제로 없고(검색한 범위), 출처는 Proposition 4.2.6 의 증명(p.165)에서 'I 가 구간이므로 [x, y] ⊂ I'라고 쓴다. 열린구간과 순서쌍의 표기가 같다는 문단은 출처에 없다(검색한 범위). 예시 '두 닫힌구간의 합집합'은 출처에 없다(검색한 범위). 반례 '한 점 집합'은 출처의 위 각주와 같은 내용을 정의의 두 조건으로 따진 것이다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 ε–δ 로 직접 증명. 출처 쪽수와 메모, 기호 |f| 와 'c 가까이에서'의 구별을 고침"
added: 2026-11-17
---

:::statement
순서 $<$, $\le$는 [[real-order-axioms]]의 것이고, 덧셈과 나눗셈은 [[real-number-arithmetic]]의 것이다.

**구간.** $\mathbb{R}$의 [[subset|부분집합]] $I$가 **구간**(interval)인 것은 정확히 다음 두 조건이 모두 성립할 때이다.

- (i) $I$는 서로 다른 두 원소를 갖는다. 곧 $x \ne z$인 $I$의 원소 $x$, $z$가 있다.
- (ii) $x$, $z$가 $I$의 원소이고 $y$가 실수이며 $x < y < z$이면 $y \in I$이다.

따라서 한 점만으로 이루어진 집합과 공집합은 구간이 아니다.

**유계인 구간의 기호.** $a < b$인 실수 $a$, $b$에 대하여 다음 네 집합을 정한다.
$$
\begin{aligned}
[a, b] &= \{x \in \mathbb{R} : a \le x \le b\}, & (a, b) &= \{x \in \mathbb{R} : a < x < b\}, \\
(a, b] &= \{x \in \mathbb{R} : a < x \le b\}, & [a, b) &= \{x \in \mathbb{R} : a \le x < b\}.
\end{aligned}
$$
$[a, b]$를 **닫힌구간**(closed interval), $(a, b)$를 **열린구간**(open interval), $(a, b]$와 $[a, b)$를 **반열린구간**(half-open interval)이라 한다. 이 네 기호는 $a < b$일 때만 쓴다.

**열린구간과 순서쌍.** 열린구간 $(a, b)$와 [[cartesian-product|곱집합]]의 원소인 순서쌍 $(a, b)$는 같은 표기이다. 이 사이트는 둘을 문맥으로 구별한다. "열린구간 $(a, b)$", "구간 $(a, b)$"처럼 구간이라는 말과 함께 쓰거나 "실수 $x$에 대하여 $x \in (a, b)$"처럼 실수가 원소로 속하는 집합으로 쓰면 열린구간이고, "$(a, b) \in \mathbb{R} \times \mathbb{R}$"처럼 곱집합의 원소로 쓰거나 함수에 속하는 쌍으로 쓰면 순서쌍이다.

**유계가 아닌 구간.** 실수 $a$에 대하여 네 집합 $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$와 $\mathbb{R}$은 아래 (2)에 의해 구간이다. 이 사이트는 이것들에 구간 기호를 따로 두지 않고 집합 표기로 쓰며, $\infty$를 구간 기호 안에 쓰지 않는다.

다음이 성립한다. 아래에서 $a$, $b$는 실수이다.

1. (네 꼴의 구간) $a < b$이면 $[a, b]$, $(a, b)$, $(a, b]$, $[a, b)$는 모두 구간이다.
2. (유계가 아닌 구간) 네 집합 $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$와 $\mathbb{R}$은 모두 구간이다.
3. (가운데 점과 포함 관계) $a < b$이면 $\dfrac{a + b}{2} \in (a, b)$이다. 또 $a < b$이면 $(a, b)$는 $(a, b]$와 $[a, b)$의 부분집합이고, $(a, b]$와 $[a, b)$는 $[a, b]$의 부분집합이며, $a$와 $b$는 $[a, b]$의 원소이다.
4. (두 점 사이의 닫힌구간) $I$가 구간이고 $x$, $y$가 $I$의 원소이며 $x < y$이면 $[x, y] \subseteq I$이다.
:::

:::english
The order $<$, $\le$ is that of the entry on the order axioms, and addition and division are those of the entry on real arithmetic.

**Intervals.** A subset $I$ of $\mathbb{R}$ is an **interval** exactly when both of the following conditions hold.

- (i) $I$ has two distinct elements; that is, there are elements $x$, $z$ of $I$ with $x \ne z$.
- (ii) If $x$ and $z$ are elements of $I$, $y$ is a real number, and $x < y < z$, then $y \in I$.

Hence a set consisting of a single point, and the empty set, are not intervals.

**Notation for bounded intervals.** For real numbers $a$, $b$ with $a < b$ we define the following four sets.
$$
\begin{aligned}
[a, b] &= \{x \in \mathbb{R} : a \le x \le b\}, & (a, b) &= \{x \in \mathbb{R} : a < x < b\}, \\
(a, b] &= \{x \in \mathbb{R} : a < x \le b\}, & [a, b) &= \{x \in \mathbb{R} : a \le x < b\}.
\end{aligned}
$$
$[a, b]$ is called a **closed interval**, $(a, b)$ an **open interval**, and $(a, b]$ and $[a, b)$ **half-open intervals**. These four symbols are used only when $a < b$.

**Open intervals and ordered pairs.** The open interval $(a, b)$ and the ordered pair $(a, b)$, an element of a Cartesian product, are written the same way. This site tells them apart by context. When written together with the word interval, as in "the open interval $(a, b)$" or "the interval $(a, b)$", or as a set to which a real number belongs, as in "$x \in (a, b)$ for a real number $x$", it is the open interval; when written as an element of a Cartesian product, as in "$(a, b) \in \mathbb{R} \times \mathbb{R}$", or as a pair belonging to a function, it is the ordered pair.

**Unbounded intervals.** For a real number $a$, the four sets $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$ and $\mathbb{R}$ are intervals by (2) below. This site introduces no separate interval symbols for them and writes them in set notation; $\infty$ is not used inside interval symbols.

The following hold. Below, $a$ and $b$ are real numbers.

1. (The four kinds of intervals) If $a < b$, then $[a, b]$, $(a, b)$, $(a, b]$ and $[a, b)$ are all intervals.
2. (Unbounded intervals) The four sets $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : a < x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{x \in \mathbb{R} : x < a\}$ and $\mathbb{R}$ are all intervals.
3. (The midpoint and inclusions) If $a < b$, then $\dfrac{a + b}{2} \in (a, b)$. Moreover, if $a < b$, then $(a, b)$ is a subset of $(a, b]$ and of $[a, b)$, the sets $(a, b]$ and $[a, b)$ are subsets of $[a, b]$, and $a$ and $b$ are elements of $[a, b]$.
4. (The closed interval between two points) If $I$ is an interval, $x$ and $y$ are elements of $I$, and $x < y$, then $[x, y] \subseteq I$.
:::

## 직관

구간은 수직선 위에서 "끊어진 곳이 없는" 집합입니다. 곧게 뻗은 도로의 한 구역을 떠올리면, 그 구역 안의 두 지점 사이에 있는 땅은 모두 그 구역에 들어 있습니다. 조건 (ii)가 이것을 말하고, 두 지점은 $x$와 $z$, 그 사이의 땅은 $x < y < z$인 $y$에 해당합니다. 비유가 맞지 않는 곳은 끝입니다. 도로의 구역은 늘 양쪽 끝이 있지만, 구간은 $\mathbb{R}$이나 모든 양수의 집합처럼 한쪽이나 양쪽으로 끝없이 뻗을 수 있고, 끝점이 있더라도 그 끝점이 구간에 속할 수도 속하지 않을 수도 있습니다.

조건 (i)은 점 하나뿐인 집합과 공집합을 빼기 위한 것입니다. 이 둘은 조건 (ii)를 만족합니다(서로 다른 두 원소가 없으므로 $x < y < z$인 $y$가 생기지 않습니다). 이 강의는 뒤에서 구간의 모든 점에 그 점과 다른 구간의 점이 얼마든지 가까이 있다는 것을 쓰는데, 점 하나뿐인 집합에서는 이것이 성립하지 않습니다.

이 항목은 구간을 기호의 목록이 아니라 성질로 정의합니다. 그래서 어떤 집합이 구간인지 따질 때는 두 조건을 확인하면 되고, 증명에서 구간을 쓸 때는 (4)처럼 "두 점 사이의 닫힌구간이 통째로 들어 있다"는 꼴을 쓰면 됩니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "이 항목의 (3)"은 위 진술의 번호이다. 먼저 자주 쓰는 사실 둘을 본다.

- (ㄱ) 실수 $p$, $q$, $r$에 대하여 "$p \le q$ 또는 $p < q$"이고 $q < r$이면 $p < r$이다. $p < q$이면 (W2)에 의해, $p \le q$이면 순서 성질 (1)의 (v)에 의해 그렇다. 같은 방식으로 $p < q$이고 "$q \le r$ 또는 $q < r$"이면 $p < r$이다.
- (ㄴ) 모든 실수 $t$에 대하여 $t - 1 < t < t + 1$이다. 순서 성질 (5)의 (ii)에 의해 $0 < 1$이고, 순서 성질 (2)의 (ii)로 양변에 $t$를 더하면 (K1), (K4)에 의해 $t < t + 1$이다. 또 순서 성질 (3)의 (ii)에 의해 $-1 < 0$이고, 양변에 $t$를 더하면 (K1), (K4)에 의해 $t - 1 < t$이다. 특히 순서 성질 (1)의 (i)에 의해 $t - 1 \ne t$이고 $t \ne t + 1$이다.

**3의 증명.** $a < b$라 하자. 순서 성질 (8)에 의해 $a < \dfrac{a + b}{2} < b$이므로 $\dfrac{a + b}{2} \in (a, b)$이다. $x \in (a, b)$이면 $a < x$이고 $x < b$이므로, [[real-order-axioms]]의 $\le$의 뜻에 의해 $a \le x$이고 $x \le b$이다. 따라서 $x$는 $(a, b]$와 $[a, b)$에 속한다. 같은 이유로 $(a, b]$나 $[a, b)$의 원소는 $[a, b]$에 속한다. $a \le a$이고(순서 성질 (1)의 (iv)) $a < b$에서 $a \le b$이므로 $a \in [a, b]$이고, 같은 방식으로 $b \in [a, b]$이다.

**1의 증명.** $a < b$라 하고 $m = \dfrac{a + b}{2}$로 두자. 이 항목의 (3)에 의해 $a < m < b$이다. 다시 이 항목의 (3)을 $a < m$에 쓰면 $m' = \dfrac{a + m}{2}$은 $a < m' < m$을 만족한다.

조건 (i): $[a, b]$는 $a$, $b$를 원소로 갖고(이 항목의 (3)) 순서 성질 (1)의 (i)에 의해 $a \ne b$이다. $(a, b]$는 $m$과 $b$를 원소로 갖고($a < m < b$, $a < b \le b$) $m \ne b$이다. $[a, b)$는 $a$와 $m$을 원소로 갖고($a \le a < b$, $a < m < b$) $a \ne m$이다. $(a, b)$는 $m'$과 $m$을 원소로 갖고($a < m' < m < b$에서 (W2)로 $m' < b$) $m' \ne m$이다. 서로 다르다는 것은 모두 순서 성질 (1)의 (i)에 의한다.

조건 (ii): 네 집합 가운데 하나를 $J$라 하고, $x$, $z$가 $J$의 원소이며 $y$가 실수이고 $x < y < z$라 하자. $J$의 원소 $x$는 "$a \le x$ 또는 $a < x$"를 만족하므로 $x < y$와 (ㄱ)에 의해 $a < y$이다. $J$의 원소 $z$는 "$z \le b$ 또는 $z < b$"를 만족하므로 $y < z$와 (ㄱ)에 의해 $y < b$이다. 따라서 $y \in (a, b)$이고, 이 항목의 (3)에 의해 $(a, b)$는 네 집합 모두의 부분집합이므로 $y \in J$이다.

**2의 증명.** 실수 $a$를 잡는다. (ㄴ)을 $t = a$와 $t = a + 1$, $t = a - 1$에 쓰면 $a - 1 - 1 < a - 1 < a < a + 1 < a + 1 + 1$이다.

- $\{x \in \mathbb{R} : a \le x\}$: $a \le a$(순서 성질 (1)의 (iv))이고 $a < a + 1$이므로 $a$와 $a + 1$이 원소이고, (ㄴ)에 의해 서로 다르다. $a \le x$이고 $x < y$이면 (ㄱ)에 의해 $a < y$이므로 $a \le y$이다.
- $\{x \in \mathbb{R} : a < x\}$: $a < a + 1$이고 (W2)에 의해 $a < a + 1 + 1$이므로 $a + 1$과 $a + 1 + 1$이 원소이고, (ㄴ)에 의해 서로 다르다. $a < x$이고 $x < y$이면 (W2)에 의해 $a < y$이다.
- $\{x \in \mathbb{R} : x \le a\}$: $a$와 $a - 1$이 원소이고, (ㄴ)에 의해 서로 다르다. $y < z$이고 $z \le a$이면 (ㄱ)에 의해 $y < a$이므로 $y \le a$이다.
- $\{x \in \mathbb{R} : x < a\}$: $a - 1$과 $a - 1 - 1$이 원소이고((W2)로 $a - 1 - 1 < a$), (ㄴ)에 의해 서로 다르다. $y < z$이고 $z < a$이면 (W2)에 의해 $y < a$이다.
- $\mathbb{R}$: (K4)에 의해 $0 \ne 1$이므로 조건 (i)이 성립하고, 실수 $y$는 언제나 $\mathbb{R}$에 속하므로 조건 (ii)가 성립한다.

각 경우의 둘째 문장이 조건 (ii)이다. 그 문장에서 $x$나 $z$는 그 집합의 원소이고 $x < y < z$인 $y$를 다룬다. 첫째와 둘째 집합에서는 $z$에 관한 조건을, 셋째와 넷째 집합에서는 $x$에 관한 조건을 쓸 필요가 없다.

**4의 증명.** $I$가 구간이고 $x$, $y \in I$, $x < y$라 하자. $t \in [x, y]$이면 $x \le t$이고 $t \le y$이다. [[real-order-axioms]]의 $\le$의 뜻에 의해 $t = x$이거나 $t = y$이거나, 둘 다 아니어서 $x < t < y$이다. 앞의 두 경우에는 $t \in I$이고, 마지막 경우에는 $I$의 조건 (ii)에 의해 $t \in I$이다. 따라서 $[x, y] \subseteq I$이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 닫힌구간의 합집합은 구간이 아닐 수 있다]
$A = [0, 1] \cup [2, 3]$을 생각합니다([[set-operations|합집합]]). $1 \in A$, $2 \in A$이고 [[order-properties-of-reals]]의 (8)에 의해 $1 < \dfrac{1 + 2}{2} < 2$입니다. 이 수 $\dfrac{3}{2}$는 $1$보다 크므로 $[0, 1]$에 속하지 않고, $2$보다 작으므로 $[2, 3]$에 속하지 않습니다(그 항목의 (1)의 (iii)). 따라서 $x = 1$, $z = 2$, $y = \dfrac{3}{2}$에서 조건 (ii)가 깨지고, $A$는 구간이 아닙니다. 서로 다른 두 원소를 갖는 조건 (i)은 성립하므로, 끊어진 곳이 있다는 것만이 $A$를 구간에서 뺍니다.
:::

:::counterexample[한 점 집합은 조건 (ii)를 만족하지만 구간이 아니다]
실수 $c$에 대하여 $\{c\}$를 생각합니다. $x$, $z$가 $\{c\}$의 원소이면 $x = z = c$이므로, $x < y < z$인 실수 $y$가 있다면 (W2)에 의해 $c < c$가 되어 [[real-order-axioms]]의 (W1)에 어긋납니다. 그래서 조건 (ii)의 가정을 만족하는 $x$, $y$, $z$가 없고, 조건 (ii)는 참입니다. 그러나 서로 다른 두 원소가 없으므로 조건 (i)이 깨지고 $\{c\}$는 구간이 아닙니다. 공집합도 같은 이유로 조건 (ii)를 만족하지만 구간이 아닙니다.
:::

## 확인 질문

:::check[$I$와 $J$가 구간이고 $I \cap J$가 서로 다른 두 원소를 가지면 $I \cap J$는 구간인가?]
그렇습니다. 조건 (i)은 가정입니다. 조건 (ii)를 봅니다. $x$, $z \in I \cap J$이고 $x < y < z$이면 $x$, $z$는 $I$의 원소이므로 $I$의 조건 (ii)에 의해 $y \in I$이고, 같은 이유로 $y \in J$입니다. 따라서 $y \in I \cap J$입니다. 예컨대 $[0, 2] \cap (1, 3)$은 $\{x \in \mathbb{R} : 1 < x \le 2\} = (1, 2]$입니다.
:::

:::check[$0$이 아닌 실수 전체의 집합 $\mathbb{R} - \{0\}$은 구간인가?]
아닙니다. $-1$과 $1$은 이 집합의 원소이고 $-1 < 0 < 1$입니다([[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii)). 그런데 $0$은 이 집합에 속하지 않으므로 조건 (ii)가 깨집니다.
:::
