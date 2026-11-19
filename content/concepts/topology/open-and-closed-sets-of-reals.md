---
title: 실수의 열린집합과 닫힌집합의 예
title_en: Open and Closed Subsets of the Real Line
aliases: [열린구간은 열린집합이다, 닫힌구간은 닫힌집합이다, 반열린구간, 정수 전체는 닫힌집합이다, 유리수 전체는 열려 있지도 닫혀 있지도 않다]
kind: proposition
field: topology
msc: ["54E35", "26A03"]
level: undergrad
summary: 실수의 보통 거리에서 열린구간과 열린 반직선은 열린집합이고 닫힌구간, 닫힌 반직선, 한 점, 정수 전체는 닫힌집합이며, 반열린구간과 유리수 전체와 무리수 전체는 열려 있지도 닫혀 있지도 않다.
requires: [interval, metric-space-examples, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, set-operations, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, prime-number, rational-and-irrational-numbers, rationals-are-dense, square-root-exists]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "1.2절 연습문제 1.2.8 (p.34), 7.2.1절 Topology, Example 7.2.5 (p.265), Proposition 7.2.10 (p.266), 연습문제 7.2.3 (p.272)"
    checked: original
    note: "(1)과 (2)의 구간·반직선 부분은 출처 Proposition 7.2.10('a < b 이면 (a, b), (a, ∞), (−∞, b) 는 ℝ 에서 열려 있고 [a, b], [a, ∞), (−∞, b] 는 닫혀 있다')과 같다. 출처는 ∞ 를 쓰는 구간 기호로 적고, 이 사이트는 구간 항목의 약속대로 집합 표기로 쓴다. 출처는 이 명제의 증명을 연습문제 7.2.3 으로 둔다. 출처 Example 7.2.5 는 (0, ∞) 가 열려 있음을 δ = x 로, [0, ∞) 가 닫혀 있음을 여집합에서 δ = −x 로 보이고 [0, 1) 이 어느 쪽도 아님을 보인다. 이 항목의 반직선의 증명(반지름을 끝점까지의 거리로 잡는다)과 (3)의 증명은 그것과 같은 발상이다. (6)의 (i)은 출처 연습문제 1.2.8(p.34)과 같은 사실이다. 출처의 힌트는 x/√2 와 y/√2 사이에 유리수를 잡으라는 것이고, 이 항목은 x − √2 와 y − √2 사이에 유리수를 잡아 √2 를 더한다(0 을 피할 필요가 없다)."
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 예 (content/topological-spaces.tex:626)"
    checked: original
    note: "출처는 ℚ 가 ℝ 에서 조밀함을 보이는 예에서 '모든 구간은 유리수와 무리수를 (무한히 많이) 포함한다'를 증명 없이 쓰고, 그로부터 ℚ 의 경계가 ℝ 전체라고 적는다. 이 항목의 (6)은 같은 사실(모든 열린 공에 유리수와 무리수가 있다)로 ℚ 가 열려 있지도 닫혀 있지도 않음을 보이며, 무리수 쪽은 해석학 입문의 유리수의 조밀성과 √2 의 무리성으로 증명한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 1건과 다른 항목의 예를 근거로 삼은 예를 고쳤다."
added: 2026-11-19
---

:::statement
$\mathbb{R}$에는 보통 거리를 준다([[metric-space-examples]]의 (1)). 열린집합과 닫힌집합은 [[open-set-in-metric-space]]의 것이고, 구간의 기호 $(a, b)$, $[a, b]$, $[a, b)$, $(a, b]$는 [[interval]]의 것이다(이 기호는 $a < b$일 때만 쓴다). 유리수 전체 $\mathbb{Q}$와 무리수는 [[rational-and-irrational-numbers]]의 것이다. 아래에서 $a$, $b$는 실수이다.

1. (열린구간과 열린 반직선) $a < b$이면 열린구간 $(a, b)$는 열린집합이다. $\{x \in \mathbb{R} : a < x\}$와 $\{x \in \mathbb{R} : x < a\}$는 열린집합이다.
2. (닫힌구간, 닫힌 반직선, 한 점) $a < b$이면 닫힌구간 $[a, b]$는 닫힌집합이다. $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : x \le a\}$, $\{a\}$는 닫힌집합이다.
3. (반열린구간) $a < b$이면 $[a, b)$와 $(a, b]$는 열린집합도 아니고 닫힌집합도 아니다.
4. (반대쪽은 성립하지 않는다) $a < b$이면 $(a, b)$는 닫힌집합이 아니고 $[a, b]$는 열린집합이 아니다. $\{x : a < x\}$와 $\{x : x < a\}$는 닫힌집합이 아니고, $\{x : a \le x\}$와 $\{x : x \le a\}$는 열린집합이 아니다.
5. (정수 전체) $\mathbb{Z}$는 닫힌집합이고 열린집합이 아니다.
6. (유리수와 무리수)
   - (i) $a < b$이면 $a < z < b$인 무리수 $z$가 있다.
   - (ii) $\mathbb{Q}$는 열린집합도 아니고 닫힌집합도 아니다.
   - (iii) 무리수 전체의 집합 $\mathbb{R} - \mathbb{Q}$도 열린집합도 아니고 닫힌집합도 아니다.
7. (이름의 일치) 따라서 [[interval]]의 열린구간은 보통 거리에서 열린집합이면서 닫힌집합이 아니고, 닫힌구간은 닫힌집합이면서 열린집합이 아니며, 반열린구간은 어느 쪽도 아니다.
:::

:::english
$\mathbb{R}$ carries the standard metric. Open and closed sets are as in the entry on open and closed sets in a metric space, and the interval notations $(a, b)$, $[a, b]$, $[a, b)$, $(a, b]$ are as in the entry on intervals (they are used only when $a < b$). The set $\mathbb{Q}$ of rational numbers and irrational numbers are as in the earlier entry. Throughout, $a$ and $b$ are real numbers.

1. (Open intervals and open rays) If $a < b$, the open interval $(a, b)$ is open. The sets $\{x \in \mathbb{R} : a < x\}$ and $\{x \in \mathbb{R} : x < a\}$ are open.
2. (Closed intervals, closed rays, points) If $a < b$, the closed interval $[a, b]$ is closed. The sets $\{x \in \mathbb{R} : a \le x\}$, $\{x \in \mathbb{R} : x \le a\}$ and $\{a\}$ are closed.
3. (Half-open intervals) If $a < b$, then $[a, b)$ and $(a, b]$ are neither open nor closed.
4. (The other side fails) If $a < b$, then $(a, b)$ is not closed and $[a, b]$ is not open. The sets $\{x : a < x\}$ and $\{x : x < a\}$ are not closed, and $\{x : a \le x\}$ and $\{x : x \le a\}$ are not open.
5. (The integers) $\mathbb{Z}$ is closed and not open.
6. (Rationals and irrationals)
   - (i) If $a < b$, there is an irrational number $z$ with $a < z < b$.
   - (ii) $\mathbb{Q}$ is neither open nor closed.
   - (iii) The set $\mathbb{R} - \mathbb{Q}$ of irrational numbers is also neither open nor closed.
7. (Agreement of names) Hence, with the standard metric, an open interval in the sense of the entry on intervals is open and not closed, a closed interval is closed and not open, and a half-open interval is neither.
:::

## 직관

해석학 입문은 $[a, b]$를 "닫힌구간", $(a, b)$를 "열린구간"이라 불렀습니다. 그때의 "열린", "닫힌"은 이름일 뿐이었는데, (7)은 이 이름이 거리공간의 열린집합·닫힌집합과 맞는다는 것을 확인합니다. 열린구간 안의 점은 양쪽 끝에서 조금 떨어져 있어 둘레의 작은 구간이 통째로 들어가고, 닫힌구간 밖의 점은 끝점에서 조금 떨어져 있어 둘레의 작은 구간이 닫힌구간과 만나지 않습니다.

반대로 끝점이 걸리는 곳에서는 조건이 깨집니다. 닫힌구간의 끝점 $a$ 둘레의 공은 언제나 $a$보다 작은 수를 담고 있어 닫힌구간 밖으로 나갑니다. 열린구간 밖의 끝점 $a$ 둘레의 공은 언제나 구간 안의 수를 담습니다.

$\mathbb{R}$의 어느 열린 공에나 유리수와 무리수가 다 들어 있습니다((6)의 (i)과 해석학 입문의 유리수의 조밀성). 그래서 $\mathbb{Q}$의 점 둘레의 공은 무리수를 담아 $\mathbb{Q}$ 밖으로 나가고, $\mathbb{Q}$ 밖의 점 둘레의 공은 유리수를 담아 $\mathbb{Q}$와 만납니다. 정수는 그렇지 않습니다. 정수가 아닌 수는 이웃한 두 정수 사이에 떨어져 있어 둘레에 정수가 없는 공이 있습니다.

## 증명

:::idea
열린 쪽은 반지름을 끝점까지의 거리로 잡아 보이고, 닫힌 쪽은 여집합이 열려 있음을 보입니다. 열리지 않음과 닫히지 않음은 끝점 둘레의 공이 집합의 안과 밖을 모두 담는다는 것으로 보입니다.
:::

:::hint
$a$ 둘레의 공 $B(a, r)$에서 $a$보다 작은 수 하나와, $a < e$일 때 $a$보다 크고 $e$보다 작은 수 하나를 $r$에 맞춰 골라 보세요.
:::

:::hint
정수가 아닌 $x$에 대해서는 [[archimedean-property]]의 (4)로 $n - 1 < x < n$인 정수 $n$을 찾을 수 있습니다.
:::

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓴다. 보통 거리에서 $d(x, y) = |x - y|$이고, [[absolute-value]]의 (8)에 의해 $y \in B(x, r)$인 것은 정확히 $x - r < y < x + r$일 때이다. 이것을 (가)라 부른다. 먼저 증명에 거듭 쓰는 두 사실을 보인다.

(나) 실수 $c$와 $0 < r$에 대하여 $c - r/2 < c < c + r/2$이고 $c - r/2$와 $c + r/2$는 $B(c, r)$에 속한다. 순서 성질 (8)에 의해 $0 < r/2 < r$이므로 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $c - r < c - r/2 < c < c + r/2 < c + r$이고, (가)에 의해 두 수는 $B(c, r)$에 속한다.

(다) 실수 $c < e$와 $0 < r$에 대하여 $m = \min\{r, e - c\}/2$라 하면 $c < c + m < e$, $c < e - m < e$이고 $c + m \in B(c, r)$, $e - m \in B(e, r)$이다. [[absolute-value]]의 (10)에 의해 $\min\{r, e - c\}$는 $r$이나 $e - c$이므로 양수이고(순서 성질 (3)의 (i)), $r$ 이하이며 $e - c$ 이하이다. 순서 성질 (8)과 (1)의 (v)에 의해 $0 < m < r$이고 $m < e - c$이다. 따라서 순서 성질 (2)의 (ii)에 의해 $c < c + m < e$이고 $c < e - m < e$이며, $c - r < c + m < c + r$, $e - r < e - m < e + r$이므로 (가)에 의해 $c + m \in B(c, r)$, $e - m \in B(e, r)$이다.

**(1).** $a < b$이면 [[open-ball]]의 (5)에 의해 $(a, b)$는 열린 공이고 [[open-ball-is-open|열린 공이 열린집합이라는 명제]]의 (1)에 의해 열린집합이다. $L = \{x : a < x\}$라 하고 $x \in L$이라 하자. $r = x - a$는 순서 성질 (3)의 (i)에 의해 양수이고, $y \in B(x, r)$이면 (가)에 의해 $a = x - r < y$이므로 $y \in L$이다. 따라서 $L$은 열린집합이다. $\{x : x < a\}$도 같다. $x < a$이면 $r = a - x > 0$이고, $y \in B(x, r)$이면 $y < x + r = a$이다.

**(2).** $a < b$이면 [[open-ball]]의 (5)에 의해 $[a, b]$는 닫힌 공이고 [[open-ball-is-open|열린 공이 열린집합이라는 명제]]의 (2)에 의해 닫힌집합이다. 순서 성질 (1)의 (iii)에 의해 실수 $y$가 $a \le y$를 만족하지 않는 것은 정확히 $y < a$일 때이므로 $\mathbb{R} - \{x : a \le x\} = \{x : x < a\}$이고, 이것은 (1)에 의해 열린집합이다. 따라서 $\{x : a \le x\}$는 닫힌집합이다. 같은 방식으로 $\mathbb{R} - \{x : x \le a\} = \{x : a < x\}$는 열린집합이므로 $\{x : x \le a\}$는 닫힌집합이다. $\{a\}$는 [[open-set-in-metric-space]]의 (5)에 의해 닫힌집합이다.

아래에서 "열린집합이 아니다"는 [[open-set-in-metric-space]]의 (2)로, "닫힌집합이 아니다"는 같은 항목의 (3)으로 보인다. 곧 집합 $S$의 점 $c$에서 모든 $r > 0$에 대해 $B(c, r)$에 $S$ 밖의 점이 있으면 $S$는 열린집합이 아니고, $S$ 밖의 점 $c$에서 모든 $r > 0$에 대해 $B(c, r)$에 $S$의 점이 있으면 $S$는 닫힌집합이 아니다.

**(3).** $a < b$라 하고 $r > 0$이라 하자. $[a, b)$: $a \in [a, b)$이고 (나)에 의해 $a - r/2 \in B(a, r)$이며 $a - r/2 < a$이므로 $a - r/2 \notin [a, b)$이다. 따라서 열린집합이 아니다. $b \notin [a, b)$이고 (다)를 $c = a$, $e = b$에 쓰면 $a < b - m < b$, $b - m \in B(b, r)$이므로 $b - m \in [a, b)$이다. 따라서 닫힌집합이 아니다. $(a, b]$: $b \in (a, b]$이고 (나)에 의해 $b + r/2 \in B(b, r)$이며 $b < b + r/2$이므로 $b + r/2 \notin (a, b]$이다. $a \notin (a, b]$이고 (다)에 의해 $a + m \in B(a, r)$, $a < a + m < b$이므로 $a + m \in (a, b]$이다. 따라서 $(a, b]$도 어느 쪽도 아니다.

**(4).** $r > 0$이라 하자. $(a, b)$: $a \notin (a, b)$이고 (다)에 의해 $a + m \in B(a, r) \cap (a, b)$이므로 닫힌집합이 아니다. $[a, b]$: $a \in [a, b]$이고 $a - r/2 \in B(a, r)$은 $a$보다 작아 $[a, b]$ 밖이므로 열린집합이 아니다. $\{x : a < x\}$: $a$는 이 집합 밖이고 (나)에 의해 $a + r/2 \in B(a, r)$은 이 집합에 속하므로 닫힌집합이 아니다. $\{x : x < a\}$: $a$는 밖이고 $a - r/2$가 속하므로 닫힌집합이 아니다. $\{x : a \le x\}$: $a$는 이 집합에 속하고 $a - r/2$는 밖이므로 열린집합이 아니다. $\{x : x \le a\}$: $a$는 속하고 $a + r/2$는 밖이므로 열린집합이 아니다.

**(5).** 닫혀 있음. $x \in \mathbb{R} - \mathbb{Z}$라 하자. [[archimedean-property]]의 (4)에 의해 $n - 1 \le x < n$인 정수 $n$이 있고, $x$는 정수가 아니므로 $n - 1 \ne x$, 곧 $n - 1 < x$이다. $r = \min\{x - (n - 1), n - x\}$는 [[absolute-value]]의 (10)과 순서 성질 (3)의 (i)에 의해 양수이다. $y \in B(x, r)$이면 (가)에 의해 $x - r < y < x + r$이고, $r \le x - (n - 1)$, $r \le n - x$이므로 $n - 1 < y < n$이다. 정수 $k$가 $n - 1 < k$이면 (Z1)([[prime-number]]의 진술, 순서 성질 (10))에 의해 $n \le k$이므로, $n - 1 < y < n$인 $y$는 정수가 아니다. 곧 $B(x, r) \cap \mathbb{Z} = \emptyset$이고, [[open-set-in-metric-space]]의 (3)에 의해 $\mathbb{Z}$는 닫힌집합이다.
열려 있지 않음. $0 \in \mathbb{Z}$이고 $r > 0$이라 하자. (다)를 $c = 0$, $e = 1$에 쓰면 $0 < m < 1$이고 $m \in B(0, r)$이다. 위와 같이 (Z1)에 의해 $0 < m < 1$인 정수는 없으므로 $m \notin \mathbb{Z}$이다. 따라서 $\mathbb{Z}$는 열린집합이 아니다.

**(6).** (i) $\sqrt{2}$는 [[square-root-exists]]의 (3)에 의해 무리수이다. $a < b$이므로 순서 성질 (2)의 (ii)에 의해 $a - \sqrt{2} < b - \sqrt{2}$이고, [[rationals-are-dense]]의 (2)에 의해 $a - \sqrt{2} < q < b - \sqrt{2}$인 유리수 $q$가 있다. $z = q + \sqrt{2}$라 하면 순서 성질 (2)의 (ii)에 의해 $a < z < b$이다. $z$가 유리수라면 [[rationals-are-dense]]의 (1)에 의해 $\sqrt{2} = z - q$도 유리수가 되어 어긋나므로, $z$는 무리수이다.
(ii) $0 \in \mathbb{Q}$이고 $r > 0$이면 (i)에 의해 $-r < z < r$인 무리수 $z$가 있고, (가)에 의해 $z \in B(0, r)$, $z \notin \mathbb{Q}$이다. 따라서 $\mathbb{Q}$는 열린집합이 아니다. $\sqrt{2} \notin \mathbb{Q}$이고 $r > 0$이면 [[rationals-are-dense]]의 (2)에 의해 $\sqrt{2} - r < q < \sqrt{2} + r$인 유리수 $q$가 있고, (가)에 의해 $q \in B(\sqrt{2}, r) \cap \mathbb{Q}$이다. 따라서 $\mathbb{Q}$는 닫힌집합이 아니다.
(iii) $\sqrt{2} \in \mathbb{R} - \mathbb{Q}$이고 (ii)에서 본 대로 모든 $r > 0$에 대해 $B(\sqrt{2}, r)$에 유리수, 곧 $\mathbb{R} - \mathbb{Q}$ 밖의 점이 있으므로 $\mathbb{R} - \mathbb{Q}$는 열린집합이 아니다. $\mathbb{Q} \subseteq \mathbb{R}$이므로 $\mathbb{R} - (\mathbb{R} - \mathbb{Q}) = \mathbb{Q}$이고([[set-operations|차집합]]의 정의), (ii)에 의해 이것은 열린집합이 아니므로 $\mathbb{R} - \mathbb{Q}$는 닫힌집합이 아니다.

**(7).** (1)–(4)를 모은 것이다.
:::

## 예시와 반례

:::example[유한 개의 점을 뺀 실수]
$\mathbb{R} - \{0, 1\}$은 열린집합입니다. $\{0\}$과 $\{1\}$은 (2)에 의해 닫힌집합이고, 두 닫힌집합의 합집합 $\{0, 1\}$은 [[open-sets-of-a-metric-space]]의 (5)의 (iii)에 의해 닫힌집합이므로, 그 여집합이 열려 있습니다.
:::

:::counterexample[구간이 아닌 열린집합도 있다]
열린집합은 열린구간이나 반직선만이 아닙니다. 위 예시의 $\mathbb{R} - \{0, 1\}$은 열린집합이지만 [[interval]]의 뜻의 구간이 아닙니다. $-1$과 $2$가 이 집합에 속하고 $-1 < 0 < 2$인데 $0$은 속하지 않기 때문입니다(구간의 조건 (ii)가 깨집니다).
:::

## 확인 질문

:::check[$\{x \in \mathbb{R} : 0 < x\} \cap \{x \in \mathbb{R} : x \le 5\}$는 열린집합인가, 닫힌집합인가?]
어느 쪽도 아닙니다. 이 집합은 반열린구간 $(0, 5]$이고, (3)에 의해 열린집합도 닫힌집합도 아닙니다.
:::

:::check[$\{1/n : n \in \mathbb{N}\} \cup \{0\}$의 여집합에서 점 $x = 3/4$를 중심으로 하는 공 가운데 이 집합과 만나지 않는 것을 하나 들라.]
반지름 $1/4$인 공이 그렇습니다. [[open-ball]]의 (5)에 의해 $B(3/4, 1/4) = (1/2, 1)$입니다. $0$과 $1$은 이 구간에 없고, 자연수 $n \ge 2$이면 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $1/n \le 1/2$이므로 $1/n$도 없습니다.
:::
