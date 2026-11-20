---
title: 거리공간의 열린집합과 닫힌집합
title_en: Open and Closed Sets in a Metric Space
aliases: [열린집합, 닫힌집합, open set, closed set, 열려 있다, 닫혀 있다]
kind: definition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간의 부분집합이 그 모든 점에서 그 점을 중심으로 하는 어떤 열린 공을 포함하면 열린집합, 여집합이 열린집합이면 닫힌집합이라 한다. 공집합과 전체, 한 점 집합, 이산 거리의 경우, 열려 있지도 닫혀 있지도 않은 집합, 거리공간에 따라 달라지는 예를 증명한다.
requires: [metric-space, metric-space-examples, open-ball, subset, set-operations, negation-of-quantified-statements, interval, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, prime-number]
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Definition 7.2.4 와 그 뒤 문단 (p.264), Example 7.2.5 (p.265), Proposition 7.2.9 뒤 문단 (p.266); 7.4.2절 Compactness, Example 7.4.15 (p.285)"
    checked: original
    note: "열린집합과 닫힌집합의 정의, '공간을 밝혀 X 에서 열린(닫힌)이라고 말한다'는 약속은 출처 Definition 7.2.4 와 같다. 출처는 그 뒤 문단에서 대부분의 집합은 열린집합도 닫힌집합도 아니라고 적는다. 출처 Example 7.2.5 는 (0, ∞) 가 열려 있고 [0, ∞) 가 닫혀 있으며 [0, 1) 이 어느 쪽도 아님을 보이고, 한 점 집합이 닫혀 있음은 연습으로 두며, {0} ⊂ ℝ 은 열려 있지 않고 X = {x} 이면 {x} 가 열려 있다고 적는다. 이 항목의 (4)의 (ii)는 출처의 [0, 1) 과 같은 집합을 같은 두 점(0 과 1)에서 따진 것이고, (5)는 출처가 연습으로 둔 것을 증명한 것이며, (6)의 'ℝ 에서 {0} 은 열려 있지 않다'는 출처의 같은 예이다. (6)의 정수의 부분공간은 출처가 같은 예 다음 쪽(p.266)에서 [0, 1/2) 이 [0, 1] 에서는 열려 있고 ℝ 에서는 아니라고 적는 것과 같은 발상이다. 예시 '0 을 뺀 실수 전체'는 출처 Example 7.2.5 의 (0, ∞) 와 같은 발상(점마다 그 점과 경계점의 거리를 반지름으로 잡는다)이고, 반례 '열린집합의 부분집합'은 같은 예의 {0} ⊂ ℝ 을 쓴다. 확인 질문 '원소가 하나인 집합'은 같은 예의 'X = {x} 이면 {x} 는 열려 있다'와 같은 물음이고, 확인 질문 '{1, 2} 는 닫힌집합인가'는 같은 예가 연습으로 두는 '한 점 집합은 닫혀 있다'를 두 점으로 넓힌 물음이다. (3)은 출처가 Definition 7.2.4 뒤 문단(p.264)에서 닫힌집합을 'E 밖의 모든 것이 E 에서 어느 거리만큼 떨어져 있는 집합'이라고 설명하는 것을 판정법으로 쓴 것이고, 직관의 '움직일 여유'는 같은 문단의 직관('wiggle')과 같다. (4)의 (iii)의 '모든 부분집합은 닫혀 있다'는 출처 Example 7.4.15 의 (ii)(p.285, 무한집합 위의 이산 거리)가 적는 것이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절의 Remark 와 discrete metric 예, content/topological-spaces.tex:235–261"
    checked: original
    note: "출처는 거리공간의 열린집합을 공들이 생성하는 위상(metric topology)의 원소로 정하고, Remark 에서 'U 가 그 위상에서 열려 있는 것은 정확히 모든 x ∈ U 에 B_d(x, r) ⊂ U 인 r > 0 이 있을 때'라고 적는다(한 방향만 쓰고 다른 방향은 'Likewise' 로 넘긴다). 이 항목은 이 조건을 열린집합의 정의로 삼는다. 출처의 이산 거리 예(248–261)는 그 거리위상이 이산위상(모든 부분집합이 열린 위상)이라고 적고, 이것은 (4)의 (iii)의 앞 절반과 같은 내용이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 4건과 경계 경우의 문장을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

**열린집합.** $X$의 부분집합 $U$가 $(X, d)$에서 **열린집합**(open set)인 것은 정확히 $U$의 모든 점 $x$에 대하여 $B(x, r) \subseteq U$인 실수 $r > 0$이 있을 때이다. 이것을 "$U$는 $X$에서 열려 있다"고도 한다.

**닫힌집합.** $X$의 부분집합 $F$가 $(X, d)$에서 **닫힌집합**(closed set)인 것은 정확히 차집합 $X - F$가 $(X, d)$에서 열린집합일 때이다. 이것을 "$F$는 $X$에서 닫혀 있다"고도 한다.

**어느 거리공간에서인지.** 열린집합과 닫힌집합은 거리공간 $(X, d)$를 함께 정해야 뜻이 정해진다. $Y \subseteq X$에 부분공간 거리를 줄 때 같은 집합 $U \subseteq Y$가 $(Y, d_Y)$에서는 열려 있고 $(X, d)$에서는 열려 있지 않을 수 있으므로(아래 (6)), 문맥에서 분명하지 않으면 "$(X, d)$에서 열린", "$X$에서 닫힌"처럼 공간을 밝힌다.

다음이 성립한다.

1. $\emptyset$과 $X$는 $(X, d)$에서 열린집합이면서 닫힌집합이다.
2. (열려 있지 않다는 것) $U \subseteq X$가 열린집합이 아닌 것은 정확히 다음을 만족하는 $U$의 점 $x$가 있을 때이다: 모든 실수 $r > 0$에 대하여 $d(x, y) < r$이고 $y \notin U$인 $X$의 점 $y$가 있다.
3. (닫힌집합의 판정) $F \subseteq X$가 닫힌집합인 것은 정확히 $X - F$의 모든 점 $x$에 대하여 $B(x, r) \cap F = \emptyset$인 실수 $r > 0$이 있을 때이다. 따라서 $F$가 닫힌집합이 아닌 것은 정확히 다음을 만족하는 $X - F$의 점 $x$가 있을 때이다: 모든 실수 $r > 0$에 대하여 $B(x, r) \cap F \ne \emptyset$이다.
4. ("열려 있지 않다"와 "닫혀 있다"는 다른 말이다)
   - (i) (1)의 $\emptyset$과 $X$는 열린집합이면서 닫힌집합이다.
   - (ii) $\mathbb{R}$에 보통 거리를 주면 반열린구간 $[0, 1) = \{x \in \mathbb{R} : 0 \le x < 1\}$은 열린집합도 아니고 닫힌집합도 아니다.
   - (iii) $d$가 이산 거리이면 $X$의 모든 부분집합은 열린집합이면서 닫힌집합이다.
   따라서 열린집합이 아니라고 해서 닫힌집합인 것은 아니고, 닫힌집합이 아니라고 해서 열린집합인 것도 아니다.
5. (한 점 집합) $x \in X$이면 $\{x\}$는 $(X, d)$에서 닫힌집합이다.
6. (거리공간에 따라 달라진다) $\mathbb{Z} \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리를 주면 $\{0\}$은 $\mathbb{Z}$에서 열린집합이지만, $\{0\}$은 $\mathbb{R}$(보통 거리)에서 열린집합이 아니다.
:::

:::english
Metric spaces and their examples are as in the earlier entries, and the open ball $B(x, r)$ is as in the entry on open balls. Throughout, $(X, d)$ is a metric space.

**Open sets.** A subset $U$ of $X$ is an **open set** in $(X, d)$ exactly when for every point $x$ of $U$ there is a real number $r > 0$ with $B(x, r) \subseteq U$. We also say "$U$ is open in $X$".

**Closed sets.** A subset $F$ of $X$ is a **closed set** in $(X, d)$ exactly when the difference $X - F$ is an open set in $(X, d)$. We also say "$F$ is closed in $X$".

**Which metric space.** Open and closed sets are determined only together with the metric space $(X, d)$. When $Y \subseteq X$ carries the subspace metric, the same set $U \subseteq Y$ may be open in $(Y, d_Y)$ and not open in $(X, d)$ (see (6) below), so when the context does not make it clear we name the space, as in "open in $(X, d)$" or "closed in $X$".

The following hold.

1. $\emptyset$ and $X$ are both open and closed in $(X, d)$.
2. (Not being open) A subset $U \subseteq X$ is not open exactly when there is a point $x$ of $U$ such that for every real number $r > 0$ there is a point $y$ of $X$ with $d(x, y) < r$ and $y \notin U$.
3. (A test for closed sets) A subset $F \subseteq X$ is closed exactly when for every point $x$ of $X - F$ there is a real number $r > 0$ with $B(x, r) \cap F = \emptyset$. Hence $F$ is not closed exactly when there is a point $x$ of $X - F$ such that $B(x, r) \cap F \ne \emptyset$ for every real number $r > 0$.
4. ("Not open" and "closed" are different things)
   - (i) The sets $\emptyset$ and $X$ of (1) are both open and closed.
   - (ii) With the standard metric on $\mathbb{R}$, the half-open interval $[0, 1) = \{x \in \mathbb{R} : 0 \le x < 1\}$ is neither open nor closed.
   - (iii) If $d$ is the discrete metric, then every subset of $X$ is both open and closed.
   Hence a set that is not open need not be closed, and a set that is not closed need not be open.
5. (One-point sets) If $x \in X$, then $\{x\}$ is closed in $(X, d)$.
6. (It depends on the metric space) Give $\mathbb{Z} \subseteq \mathbb{R}$ the subspace metric of the standard metric. Then $\{0\}$ is open in $\mathbb{Z}$, but $\{0\}$ is not open in $\mathbb{R}$ (with the standard metric).
:::

## 직관

열린집합은 "안의 어느 점에서든 조금은 움직일 여유가 있는 집합"입니다. $U$의 점 $x$마다 $x$를 중심으로 하는 작은 공이 통째로 $U$ 안에 있어야 합니다. 공의 반지름 $r$은 점마다 달라도 됩니다. 예를 들어 아래 예시의 $\{x \in \mathbb{R} : x \ne 0\}$에서는 $0$에 가까운 점일수록 작은 공을 잡아야 합니다.

닫힌집합은 여집합으로 정합니다. $F$ 밖의 점마다 $F$와 닿지 않는 작은 공이 있다는 뜻입니다((3)). 이름 때문에 "열림"과 "닫힘"이 반대말처럼 들리지만 그렇지 않습니다. 문의 경우와 달리, 집합은 열려 있으면서 닫혀 있을 수도 있고((1), (4)의 (iii)) 어느 쪽도 아닐 수도 있습니다((4)의 (ii)).

또 "열려 있다"는 집합 혼자만의 성질이 아니라 어느 거리공간 안에서 보는지에 따른 성질입니다. $\mathbb{Z}$ 안에서는 $0$ 둘레의 반지름 $1/2$인 공에 $0$밖에 없어서 $\{0\}$이 열려 있지만, $\mathbb{R}$ 안에서는 $0$ 둘레의 어떤 공에도 $0$이 아닌 실수가 들어 있습니다((6)).

## 성질의 증명

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓴다. 거리의 조건 (i)–(iv)와 성질 (1)은 [[metric-space]]의 것이고, 공의 성질 (1)–(9)는 [[open-ball]]의 번호이다. 공 $B(x, r)$는 $X$의 부분집합이다.

**(1).** $\emptyset$에는 점이 없으므로 "$\emptyset$의 모든 점 $x$에 대하여 …"는 참이고, $\emptyset$은 열린집합이다. $X$의 점 $x$에 대하여 $B(x, 1)$은 $X$의 부분집합이므로 $X$는 열린집합이다. [[set-operations|차집합]]의 정의에 의해 $X - \emptyset = X$이고 $X - X = \emptyset$이다. 두 집합이 열린집합이므로 $\emptyset$과 $X$는 닫힌집합이다.

**(2).** 열린집합의 정의는 "$U$의 모든 점 $x$에 대하여, $B(x, r) \subseteq U$인 실수 $r > 0$이 있다"이다. [[negation-of-quantified-statements|한정 명제의 부정]]의 1, 2를 차례로 쓰면 이것의 부정은 "$U$의 어떤 점 $x$에 대하여, 모든 실수 $r > 0$에서 $B(x, r) \subseteq U$가 아니다"이다. [[subset]]의 정의에 의해 $B(x, r) \subseteq U$가 아닌 것은 정확히 $y \in B(x, r)$이고 $y \notin U$인 $y$가 있을 때이고, $y \in B(x, r)$은 $y \in X$이고 $d(x, y) < r$이라는 뜻이다.

**(3).** $x \in X$이고 $r > 0$이라 하자. $B(x, r) \subseteq X - F$이면 $B(x, r)$의 점은 $F$에 속하지 않으므로 $B(x, r) \cap F = \emptyset$이다. 거꾸로 $B(x, r) \cap F = \emptyset$이면 $B(x, r)$의 점 $y$는 $X$의 점이고 $F$에 속하지 않으므로 $y \in X - F$이다. 따라서 $B(x, r) \subseteq X - F$인 것은 정확히 $B(x, r) \cap F = \emptyset$일 때이다. $F$가 닫힌집합인 것은 $X - F$가 열린집합인 것이므로 첫 문장이 나온다. 둘째 문장은 첫 문장의 오른쪽을 [[negation-of-quantified-statements|한정 명제의 부정]]의 1, 2로 부정한 것이다.

**(4).** (i)은 (1)이다.

(ii) $S = [0, 1)$이라 하자. [[interval]]의 기호에 의해 $S = \{x \in \mathbb{R} : 0 \le x < 1\}$이다.
$S$는 열린집합이 아니다. $0 \in S$이다. 실수 $r > 0$이 무엇이든 $y = -r/2$로 두면 순서 성질 (8)과 (3)의 (ii)에 의해 $y < 0$이므로 $y \notin S$이고, $|0 - y| = r/2 < r$이다([[absolute-value]]의 (1), (3)과 순서 성질 (8)). 따라서 (2)에 의해 $S$는 열린집합이 아니다.
$S$는 닫힌집합이 아니다. $1 \notin S$이므로 $1 \in \mathbb{R} - S$이다. 실수 $r > 0$을 잡고 $m = \min\{r, 1\}/2$, $y = 1 - m$이라 하자. [[absolute-value]]의 (10)에 의해 $\min\{r, 1\}$은 $r$이나 $1$이므로 양수이고 $\min\{r, 1\} \le r$, $\min\{r, 1\} \le 1$이다. 순서 성질 (8)에 의해 $0 < m < \min\{r, 1\}$이므로 순서 성질 (1)의 (v)에 의해 $0 < m < 1$이고 $m < r$이다. $0 < m$이므로 $y = 1 - m < 1$이고, $m < 1$이므로 $0 < 1 - m = y$이다(순서 성질 (3)의 (i)과 (2)의 (ii)). 따라서 $y \in S$이다. 또 $|1 - y| = |m| = m < r$이므로 $y \in B(1, r)$이다. 곧 모든 $r > 0$에서 $B(1, r) \cap S \ne \emptyset$이고, (3)에 의해 $S$는 닫힌집합이 아니다.

(iii) $d$가 이산 거리이고 $U \subseteq X$라 하자. $U$의 점 $x$에 대하여 [[open-ball]]의 (6)에 의해 $B(x, 1) = \{x\} \subseteq U$이므로 $U$는 열린집합이다. $F \subseteq X$이면 $X - F$도 $X$의 부분집합이므로 방금 보인 것에 의해 열린집합이고, 따라서 $F$는 닫힌집합이다.

**(5).** $y \in X - \{x\}$라 하자. $y \ne x$이므로 거리공간의 (1)에 의해 $r = d(x, y) > 0$이다. (iii)에 의해 $d(y, x) = r$이고 $r < r$은 성립하지 않으므로((W1), [[real-order-axioms]]) $x \notin B(y, r)$, 곧 $B(y, r) \cap \{x\} = \emptyset$이다. (3)에 의해 $\{x\}$는 닫힌집합이다.

**(6).** $\mathbb{Z}$에서: [[open-ball]]의 (7)과 (5)에 의해 $B_{\mathbb{Z}}(0, 1/2) = (-1/2, 1/2) \cap \mathbb{Z}$이다. 정수 $n$이 $-1/2 < n < 1/2$이면 $-1 < n < 1$이고(순서 성질 (8)에 의해 $0 < 1/2 < 1$, (3)의 (iii)에 의해 $-1 < -1/2$, 그리고 (1)의 (v)), (Z1)([[prime-number]]의 진술, 순서 성질 (10))에 의해 $n + 1 \le 1$이고 $-1 + 1 \le n$, 곧 $n \le 0 \le n$이므로 순서 성질 (1)의 (ii)에 의해 $n = 0$이다. 거꾸로 $0$은 이 집합에 속한다. 따라서 $B_{\mathbb{Z}}(0, 1/2) = \{0\}$이고, $\{0\}$의 유일한 점 $0$에서 반지름 $1/2$인 공이 $\{0\}$에 들어가므로 $\{0\}$은 $\mathbb{Z}$에서 열린집합이다.
$\mathbb{R}$에서: 실수 $r > 0$이 무엇이든 $y = r/2$로 두면 순서 성질 (8)에 의해 $0 < y$이므로 $y \notin \{0\}$이고, $|0 - y| = r/2 < r$이다. (2)에 의해 $\{0\}$은 $\mathbb{R}$에서 열린집합이 아니다.
:::

## 예시와 반례

:::example[0을 뺀 실수 전체]
$\mathbb{R}$(보통 거리)에서 $U = \{x \in \mathbb{R} : x \ne 0\}$은 열린집합입니다. $x \in U$이면 [[absolute-value]]의 (2)에 의해 $r = |x| > 0$이고, $y \in B(x, r)$이면 $|x - y| < |x| = |x - 0|$이므로 $y \ne 0$, 곧 $y \in U$입니다. 따라서 $B(x, r) \subseteq U$입니다.

그러나 $U$는 닫힌집합이 아닙니다. $\mathbb{R} - U = \{0\}$이고, (6)에 의해 $\{0\}$은 $\mathbb{R}$에서 열린집합이 아니기 때문입니다.
:::

:::counterexample[열린집합의 부분집합은 열려 있지 않을 수 있다]
(1)에 의해 $\mathbb{R}$은 $\mathbb{R}$에서 열린집합이고 $\{0\} \subseteq \mathbb{R}$이지만, (6)에 의해 $\{0\}$은 $\mathbb{R}$에서 열린집합이 아닙니다. 열린집합 안에 든 집합이라는 것만으로는 열려 있다고 할 수 없습니다.
:::

## 확인 질문

:::check[원소가 하나인 집합 $X = \{p\}$에 거리를 주면 어느 부분집합이 열린집합이고 어느 것이 닫힌집합인가?]
$X$의 부분집합은 $\emptyset$과 $X$ 둘뿐이고, (1)에 의해 둘 다 열린집합이면서 닫힌집합입니다. 특히 $\{p\} = X$는 열려 있습니다.
:::

:::check[$\mathbb{R}$(보통 거리)에서 $\{1, 2\}$는 닫힌집합인가?]
닫힌집합입니다. $x \in \mathbb{R} - \{1, 2\}$이면 $|x - 1| > 0$, $|x - 2| > 0$이므로 $r = \min\{|x - 1|, |x - 2|\} > 0$입니다. $y \in B(x, r)$이면 $|x - y| < r \le |x - 1|$이므로 $y \ne 1$이고, 같은 방식으로 $y \ne 2$입니다. 따라서 $B(x, r) \cap \{1, 2\} = \emptyset$이고, (3)에 의해 $\{1, 2\}$는 닫힌집합입니다.
:::
