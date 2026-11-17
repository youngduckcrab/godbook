---
title: 상한과 덧셈·곱셈
title_en: Suprema and Arithmetic Operations
aliases: [상한의 성질, 하한의 성질, 상한의 근사, properties of supremum, sup(x + A), sup(xA), approximation property of supremum]
kind: proposition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 집합을 평행이동하거나 수를 곱하면 상한·하한이 어떻게 바뀌는지, 부분집합과 상한의 크기, 한 집합의 원소가 다른 집합의 원소 이하일 때 sup A ≤ inf B, 상한에 얼마든지 가까운 원소가 있다는 것.
requires: [subset, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.2.3절 Using supremum and infimum, Proposition 1.2.6 (진술 p.32, 증명 p.33), Proposition 1.2.7, 1.2.8 (p.33), 연습문제 1.1.4 (p.27), 1.2.3, 1.2.12 (p.34–35)
    checked: original
    note: "x + A, xA 의 정의와 이 항목의 (1)–(3)은 출처의 Proposition 1.2.6 (i)–(vi)과 같다. 출처는 (i)(이 항목의 (1)의 첫 문장)만 증명하고 나머지는 연습문제 1.2.3 으로 돌린다. 이 항목은 모두 증명하며, (3)은 infimum-exists 의 −A 를 거쳐 (2)로 돌린다. 출처는 진술에서 x + A, xA 가 공집합이 아니고 유계라는 것을 '그 상한이 있다는 진술이 함의한다'고 말하고, 이 항목은 그것을 각 진술에 적었다. (4)는 출처 연습문제 1.1.4(inf B ≤ inf A ≤ sup A ≤ sup B)의 일부이다. (5)는 출처의 Proposition 1.2.7 이고 증명의 경로가 같다. 출처는 A 가 위로 유계라는 것과 inf B 가 있다는 것을 증명에서 따로 적지 않는다. (6)은 출처의 Proposition 1.2.8 이고, 출처는 증명을 독자에게 맡기며(연습문제 1.2.12) 하한에 대해 비슷한 결과가 성립한다고만 한다. 이 항목은 (6)을 upper-bound-and-supremum 의 (4)에서 끌어낸다. 반례는 출처 p.33 의 A = {0}, B = {1/n : n ∈ ℕ}(모든 원소가 엄격히 작아도 sup A < inf B 는 아니다)과 같은 발상이고, B 를 양의 실수 전체로 바꾸었다. 예시는 출처 p.32 의 A = {1, 2, 3}, 5 + A, 3A 와 다른 집합(upper-bound-and-supremum 의 예시의 집합)을 썼다. 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-17
---

:::statement
상계, 하계, 상한, 하한, 유계는 [[upper-bound-and-supremum]]의 것이다. $A$를 $\mathbb{R}$의 공집합이 아닌 부분집합, $x$를 실수라 하고
$$x + A = \{x + a : a \in A\}, \qquad xA = \{xa : a \in A\}$$
로 쓴다. 곧 실수 $y$가 $x + A$의 원소인 것은 정확히 $y = x + a$인 $a \in A$가 있을 때이고, $xA$의 원소인 것은 정확히 $y = xa$인 $a \in A$가 있을 때이다. 아래에서 "상한이 있고 $\sup(\cdots) = \cdots$이다"를 줄여 "$\sup(\cdots) = \cdots$이다"로 쓴다. 다음이 성립한다.

1. (평행이동) $A$가 위로 유계이면 $x + A$는 위로 유계이고 $\sup(x + A) = x + \sup A$이다. $A$가 아래로 유계이면 $x + A$는 아래로 유계이고 $\inf(x + A) = x + \inf A$이다.
2. (양수배) $0 < x$라 하자. $A$가 위로 유계이면 $xA$는 위로 유계이고 $\sup(xA) = x \sup A$이다. $A$가 아래로 유계이면 $xA$는 아래로 유계이고 $\inf(xA) = x \inf A$이다.
3. (음수배) $x < 0$이라 하자. $A$가 아래로 유계이면 $xA$는 위로 유계이고 $\sup(xA) = x \inf A$이다. $A$가 위로 유계이면 $xA$는 아래로 유계이고 $\inf(xA) = x \sup A$이다.
4. (부분집합) $A \subseteq B \subseteq \mathbb{R}$라 하자. $B$가 위로 유계이면 $\sup A \le \sup B$이다. $B$가 아래로 유계이면 $\inf B \le \inf A$이다.
5. (두 집합) $B$도 $\mathbb{R}$의 공집합이 아닌 부분집합이고 $A$의 모든 원소 $a$와 $B$의 모든 원소 $b$에 대하여 $a \le b$이면, $A$는 위로 유계이고 $B$는 아래로 유계이며 $\sup A \le \inf B$이다.
6. (상한의 근사) $A$가 위로 유계이면 모든 양수 $\varepsilon$에 대하여 $\sup A - \varepsilon < a \le \sup A$인 $a \in A$가 있다. $A$가 아래로 유계이면 모든 양수 $\varepsilon$에 대하여 $\inf A \le a < \inf A + \varepsilon$인 $a \in A$가 있다.
:::

:::english
Upper bounds, lower bounds, suprema, infima, and boundedness are as in the entry on upper bounds and suprema. Let $A$ be a nonempty subset of $\mathbb{R}$ and $x$ a real number, and write
$$x + A = \{x + a : a \in A\}, \qquad xA = \{xa : a \in A\}.$$
That is, a real number $y$ is an element of $x + A$ exactly when $y = x + a$ for some $a \in A$, and an element of $xA$ exactly when $y = xa$ for some $a \in A$. Below, "the supremum exists and $\sup(\cdots) = \cdots$" is abbreviated to "$\sup(\cdots) = \cdots$". The following hold.

1. (Translation) If $A$ is bounded above, then $x + A$ is bounded above and $\sup(x + A) = x + \sup A$. If $A$ is bounded below, then $x + A$ is bounded below and $\inf(x + A) = x + \inf A$.
2. (Positive multiples) Let $0 < x$. If $A$ is bounded above, then $xA$ is bounded above and $\sup(xA) = x \sup A$. If $A$ is bounded below, then $xA$ is bounded below and $\inf(xA) = x \inf A$.
3. (Negative multiples) Let $x < 0$. If $A$ is bounded below, then $xA$ is bounded above and $\sup(xA) = x \inf A$. If $A$ is bounded above, then $xA$ is bounded below and $\inf(xA) = x \sup A$.
4. (Subsets) Let $A \subseteq B \subseteq \mathbb{R}$. If $B$ is bounded above, then $\sup A \le \sup B$. If $B$ is bounded below, then $\inf B \le \inf A$.
5. (Two sets) If $B$ is also a nonempty subset of $\mathbb{R}$ and $a \le b$ for every element $a$ of $A$ and every element $b$ of $B$, then $A$ is bounded above, $B$ is bounded below, and $\sup A \le \inf B$.
6. (Approximation of the supremum) If $A$ is bounded above, then for every positive $\varepsilon$ there is an $a \in A$ with $\sup A - \varepsilon < a \le \sup A$. If $A$ is bounded below, then for every positive $\varepsilon$ there is an $a \in A$ with $\inf A \le a < \inf A + \varepsilon$.
:::

## 직관

집합 $A$를 수직선 위에서 오른쪽으로 $x$만큼 옮기면 가장 작은 상계도 같이 $x$만큼 옮겨 갑니다((1)). 양수 $x$를 곱하는 것은 $0$을 중심으로 늘이거나 줄이는 것이어서 상한도 같은 배율로 바뀝니다((2)). 음수를 곱하면 수직선이 뒤집히므로 위쪽 끝과 아래쪽 끝이 바뀌어, 상한이 하한에서 나옵니다((3)). 이것은 [[infimum-exists|하한의 존재]]에서 $-A$로 본 것을 일반화한 것입니다. 비유가 맞지 않는 곳은 $x = 0$입니다. $0A = \{0\}$이어서 늘이거나 줄이는 그림이 아니라 한 점으로 모으는 것이고, (2)와 (3)은 이 경우를 다루지 않습니다(아래 확인 질문 1).

(5)는 "왼쪽 집합 전체가 오른쪽 집합 전체보다 아래에 있으면 왼쪽의 위쪽 끝이 오른쪽의 아래쪽 끝 이하"라는 것입니다. 모든 원소 사이에 $<$가 성립해도 끝끼리는 같을 수 있다는 점이 아래 반례입니다. (6)은 [[upper-bound-and-supremum|상계와 상한]]의 (4)를 "$\varepsilon$만큼 아래"라는 꼴로 다시 쓴 것으로, 뒤의 증명에서 자주 쓰는 모양입니다.

## 증명

:::idea
상한을 보일 때는 늘 두 가지를 확인한다. 후보가 상계라는 것, 그리고 임의의 상계가 후보 이상이라는 것. 평행이동과 양수배는 부등식을 그대로 옮기고, 음수배는 $-A$를 거쳐 양수배로 돌린다.
:::

:::hint
$c$가 $x + A$의 상계이면 $c - x$는 $A$의 상계입니다. $c$가 $xA$의 상계이고 $0 < x$이면 $x^{-1}c$가 $A$의 상계입니다.
:::

:::proof
"(2)의 (ii)" 같은 번호는 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. 상한이 있다는 것은 [[least-upper-bound-property|최소상계 성질]] (U)에서, 하한이 있다는 것은 [[infimum-exists|하한의 존재]]의 (4)에서 얻는다. 두 집합이 공집합이 아니라는 것은 $a_0 \in A$를 하나 잡아 $x + a_0 \in x + A$, $xa_0 \in xA$로 본다.

**이 항목의 (1).** $A$가 위로 유계라 하고 $s = \sup A$로 둔다. $x + A$의 원소 $x + a$($a \in A$)에 대하여 $a \le s$이므로 (2)의 (i)과 (K1)에 의해 $x + a \le x + s$이다. 따라서 $x + s$는 $x + A$의 상계이고 $x + A$는 위로 유계이다. $c$가 $x + A$의 임의의 상계라 하자. $a \in A$이면 $x + a \le c$이고, (2)의 (i)로 양변에 $-x$를 더하면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $a \le c - x$이다. 따라서 $c - x$는 $A$의 상계이고 $s \le c - x$이다. 양변에 $x$를 더하면 $x + s \le c$이다($(c - x) + x = c$). 그러므로 $x + s$는 $x + A$의 상한이다.

$A$가 아래로 유계라 하고 $t = \inf A$로 둔다. $a \in A$이면 $t \le a$이므로 $x + t \le x + a$이고, $x + t$는 $x + A$의 하계이다. $c$가 $x + A$의 임의의 하계이면 $a \in A$에 대하여 $c \le x + a$이고, 양변에 $-x$를 더하면 $c - x \le a$이다. 따라서 $c - x$는 $A$의 하계이고 $c - x \le t$이며, 양변에 $x$를 더하면 $c \le x + t$이다. 그러므로 $x + t$는 $x + A$의 하한이다.

**이 항목의 (2).** $0 < x$이므로 (6)의 (i)에 의해 $0 < x^{-1}$이다. 실수 $c$에 대하여 (K1), (K2), (K8)의 (iii), (K4)에 의해 $x(x^{-1}c) = c$이다.

$A$가 위로 유계라 하고 $s = \sup A$로 둔다. $a \in A$이면 $a \le s$이므로 (6)의 (iv)와 (K1)에 의해 $xa \le xs$이다. 따라서 $xs$는 $xA$의 상계이다. $c$가 $xA$의 임의의 상계라 하자. $a \in A$이면 $xa \le c = x(x^{-1}c)$이고, (6)의 (iv)(양수 $x$를 곱한 것을 비교)와 (K1)에 의해 $a \le x^{-1}c$이다. 따라서 $x^{-1}c$는 $A$의 상계이고 $s \le x^{-1}c$이다. (6)의 (iv)에 의해 $xs \le x(x^{-1}c) = c$이다. 그러므로 $xs$는 $xA$의 상한이다.

$A$가 아래로 유계라 하고 $t = \inf A$로 둔다. $a \in A$이면 $t \le a$이므로 $xt \le xa$이고, $xt$는 $xA$의 하계이다. $c$가 $xA$의 임의의 하계이면 $a \in A$에 대하여 $x(x^{-1}c) = c \le xa$이므로 (6)의 (iv)에 의해 $x^{-1}c \le a$이다. 따라서 $x^{-1}c$는 $A$의 하계이고 $x^{-1}c \le t$이며, (6)의 (iv)에 의해 $c \le xt$이다. 그러므로 $xt$는 $xA$의 하한이다.

**이 항목의 (3).** $x < 0$이라 하고 $u = -x$로 두면 (3)의 (ii)에 의해 $0 < u$이고, (K9)에 의해 $x = -u$이다. [[infimum-exists|하한의 존재]]의 기호로 $-A = \{-a : a \in A\}$이다. 먼저 $xA = u(-A)$임을 보인다. $a \in A$에 대하여 (K9)와 (K12)의 (ii)에 의해 $xa = (-u)a = -(ua) = u(-a)$이다. 따라서 $xA$의 원소 $xa$는 $u(-A)$의 원소 $u(-a)$와 같고, 거꾸로 $u(-A)$의 원소는 $u(-a)$($a \in A$) 꼴이고 이것은 $xa$이다.

$A$가 아래로 유계라 하자. [[infimum-exists|하한의 존재]]의 (1), (2)에 의해 $-A$는 공집합이 아니고 위로 유계이며, 그 (4)에 의해 $\inf A = -\sup(-A)$, 곧 (K9)에 의해 $\sup(-A) = -\inf A$이다. 이 항목의 (2)를 $u$와 $-A$에 쓰면 $xA = u(-A)$는 위로 유계이고 $\sup(xA) = u\sup(-A) = (-x)(-\inf A)$이며, (K12)의 (iii)에 의해 이것은 $x \inf A$이다.

$A$가 위로 유계라 하자. [[infimum-exists|하한의 존재]]의 (1), (2)에 의해 $-A$는 공집합이 아니고 아래로 유계이며, 그 (4)의 둘째 문장에 의해 $\inf(-A) = -\sup A$이다. 이 항목의 (2)를 $u$와 $-A$에 쓰면 $xA$는 아래로 유계이고 $\inf(xA) = u\inf(-A) = (-x)(-\sup A) = x \sup A$이다.

**이 항목의 (4).** $A \subseteq B$이다. $B$가 위로 유계이면 (U)에 의해 $\sup B$가 있다. $a \in A$이면 $a \in B$이므로 $a \le \sup B$이다. 따라서 $\sup B$는 $A$의 상계이고, $A$는 공집합이 아니고 위로 유계이므로 $\sup A$가 있으며 상한의 정의에 의해 $\sup A \le \sup B$이다. $B$가 아래로 유계이면 $\inf B$가 있고, $a \in A$이면 $a \in B$이므로 $\inf B \le a$이다. 따라서 $\inf B$는 $A$의 하계이고, $\inf A$가 있으며 하한의 정의에 의해 $\inf B \le \inf A$이다.

**이 항목의 (5).** $B$의 원소 $b_0$을 하나 잡으면 $A$의 모든 원소 $a$가 $a \le b_0$이므로 $A$는 위로 유계이다. $A$의 원소 $a_0$을 하나 잡으면 $B$의 모든 원소 $b$가 $a_0 \le b$이므로 $B$는 아래로 유계이다. 따라서 $\sup A$와 $\inf B$가 있다. $a \in A$이면 $a$는 $B$의 하계이므로 하한의 정의에 의해 $a \le \inf B$이다. 따라서 $\inf B$는 $A$의 상계이고, 상한의 정의에 의해 $\sup A \le \inf B$이다.

**이 항목의 (6).** $A$가 위로 유계라 하고 $s = \sup A$, $0 < \varepsilon$이라 하자. $s - (s - \varepsilon) = \varepsilon$이므로 (3)의 (i)에 의해 $s - \varepsilon < s$이다. [[upper-bound-and-supremum|상계와 상한]]의 (4)에 의해 $s - \varepsilon < a$인 $a \in A$가 있고, $s$가 상계이므로 $a \le s$이다. $A$가 아래로 유계이면 $t = \inf A$에 대하여 $(t + \varepsilon) - t = \varepsilon$이므로 $t < t + \varepsilon$이고, [[upper-bound-and-supremum|상계와 상한]]의 (4)에 의해 $a < t + \varepsilon$인 $a \in A$가 있으며 $t \le a$이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱이 $1$ 이하인 수를 옮기고 늘이기]
$E = \{x \in \mathbb{R} : xx \le 1\}$은 [[upper-bound-and-supremum|상계와 상한]]의 예시에서 $\sup E = 1$, $\inf E = -1$임을 본 집합입니다. (1)에 의해 $\sup(5 + E) = 5 + 1 = 6$, $\inf(5 + E) = 5 + (-1) = 4$입니다. (2)에 의해 $\sup(2E) = 2 \cdot 1 = 2$, $\inf(2E) = 2 \cdot (-1) = -2$입니다. (3)에 의해 $\sup((-3)E) = (-3)\inf E = (-3)(-1) = 3$이고 $\inf((-3)E) = (-3)\sup E = -3$입니다.
:::

:::counterexample[모든 원소가 엄격히 작아도 $\sup A < \inf B$는 아니다]
$A = \{0\}$, $B = \{y \in \mathbb{R} : 0 < y\}$로 두면 $A$의 원소 $0$은 $B$의 모든 원소보다 작습니다. 그러나 $\sup A = 0$이고 $\inf B = 0$입니다. $0$은 $B$의 하계이고, $0 < c$인 실수 $c$는 [[order-properties-of-reals]]의 (8)에 의해 $0 < \frac{c}{2} < c$이므로 $\frac{c}{2} \in B$가 $c$보다 작아 하계가 아닙니다. 따라서 $B$의 하계 $c$는 모두 $c \le 0$이고([[order-properties-of-reals]]의 (1)의 (iii)), $\inf B = 0$입니다. 이 항목의 (5)의 결론은 $\le$일 뿐 $<$로 강해지지 않습니다.
:::

## 확인 질문

:::check[$x = 0$이면 $\sup(0A) = 0 \cdot \sup A$인가? ($A$는 공집합이 아니고 위로 유계)]
그렇습니다. (K9)에 의해 $0a = 0$이므로 $0A = \{0\}$입니다. $\{0\}$의 원소는 $0$뿐이고 $0 \le 0$이므로 $0$은 $\{0\}$의 최댓값이고, [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 $\sup \{0\} = 0$입니다. (K9)에 의해 $0 \cdot \sup A = 0$이므로 두 값이 같습니다. (2)와 (3)이 $x = 0$을 따로 다루지 않는 것은 증명에서 $x^{-1}$을 쓰기 때문입니다.
:::

:::check[$A \subseteq B$이고 둘 다 공집합이 아닌 유계 집합이며 $\sup A = \sup B$이면 $A = B$인가?]
아닙니다. $A = \{1\}$, $B = \{0, 1\}$이면 $A \subseteq B$이고 두 집합의 상한(최댓값)은 모두 $1$이지만 $A \ne B$입니다. (4)는 $\sup A \le \sup B$만 말합니다.
:::
