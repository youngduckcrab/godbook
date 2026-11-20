---
title: 거리공간의 콤팩트 집합은 닫혀 있고 유계이다
title_en: Compact Sets in Metric Spaces Are Closed and Bounded
aliases: [거리공간의 유계 집합, bounded set in a metric space, 유계 집합, bounded set, 콤팩트이면 닫혀 있고 유계, compact implies closed and bounded]
kind: theorem
field: topology
msc: ["54D30", "54E35"]
level: undergrad
summary: 거리공간의 부분집합이 공집합이거나 어떤 열린 공에 포함되면 유계라 하고, 부분집합과 합집합, 중심 바꾸기, 실수에서 해석학 입문의 유계와 같다는 것을 보인다. 거리공간의 콤팩트 집합은 닫혀 있고 유계이며, 이산 거리를 준 무한집합은 닫혀 있고 유계이지만 콤팩트가 아니다.
requires: [set, subset, set-operations, family-of-sets, finite-set, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, upper-bound-and-supremum, archimedean-property, metric-space, metric-space-examples, open-ball, open-ball-is-open, open-set-in-metric-space, topology-examples, closed-set, subspace-topology, metric-subspace-topology, open-and-closed-sets-of-reals, metric-space-is-hausdorff, compact-space, compact-subset-of-hausdorff-is-closed]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.1절 Definition 7.1.12 와 그 아래 문단 (p.261), 연습문제 7.1.9 (p.262); 7.2.4절 연습문제 7.2.16 (p.273); 7.4.2절 Proposition 7.4.9 와 증명, 그 아래 문단 (p.280–282), Lemma 7.4.10 아래 문단 (p.282), Example 7.4.15, Remark 7.4.16 (p.285), 연습문제 7.4.19 (p.286)"
    checked: original
    note: "출처 Definition 7.1.12(p.261)는 거리공간 X 의 부분집합 S 가 유계라는 것을 'd(p, x) ≤ B 가 모든 x ∈ S 에서 성립하는 p ∈ X 와 B ∈ ℝ 이 있다'로 정의한다. 이 항목의 정의(S = ∅ 이거나 S ⊆ B(p, r) 인 p ∈ X, r > 0 이 있다)는 X ≠ ∅ 이면 출처의 정의와 같은 뜻이고(d(p, x) ≤ B 이면 d(p, x) < B + 1 이고 B + 1 > 0 으로 잡을 수 있다), X = ∅ 일 때 출처의 정의로는 p 가 없어 ∅ 이 유계가 아니며 이 항목에서는 유계이다. 출처는 정의 아래 문단(p.261)에서 ℝ 의 보통 거리에서 이 유계가 1장의 유계와 같다는 것이 '어렵지 않게 보인다'고 적고, 이 항목의 (2)가 그것을 증명한다. 그 문단과 다음 문단은 보통 거리의 ℝ 이 유계인 거리공간이 아니고 이산 거리를 준 집합은 늘 유계라고 적는다. (4)의 '이산 거리에서 모든 부분집합은 유계'와 예시 '정수 전체는 유계가 아니다'는 그 두 문장과 같은 방향의 내용이다. (1)의 (ii)(중심 바꾸기)는 출처가 정의 아래(p.261)에서 같은 뜻의 조건 (i)로 적고 증명을 연습문제로 돌린 것이고, 연습문제 7.1.9 a)(p.262)와 같은 내용이다. (3)은 출처 Proposition 7.4.9(p.280)와 같은 진술이다. 출처의 유계 부분 증명(p.281)은 덮개 {B(p, n)} 의 유한 부분덮개의 첨수를 n₁ < ⋯ < n_m 으로 늘어놓아 B(p, n_m) 하나로 줄이고, 이 항목은 유계인 부분집합 전체의 집합족에 compact-space 의 (1)을 쓴다. 출처의 닫힘 부분 증명은 닫힌 공의 여집합으로 된 덮개를 쓰고, 이 항목은 거리공간이 하우스도르프 공간이라는 것과 compact-subset-of-hausdorff-is-closed 의 (2)를 쓴다. (4)는 출처 Example 7.4.15 (ii)(iii)(p.285, 이산 거리를 준 무한집합에서 모든 부분집합이 닫혀 있고 유계이며, 콤팩트인 것은 유한집합뿐이다)와 같은 대상, 같은 결론이다. 출처는 p.281–282 의 문단에서 일반 거리공간에서는 닫히고 유계인 것이 콤팩트와 같지 않다고 적고 (0, 1) 을 예로 든다. 같은 곳(p.282)은 (0, 1] 이 ℝ 에서 닫혀 있지 않다고 적는데, 확인 질문 '{x : 0 < x ≤ 1} 은 유계인가? 콤팩트 부분집합인가?'도 같은 대상에서 그 사실을 쓴다. 반례 '위상은 같고 유계는 다른 두 거리'는 출처 Remark 7.4.16(p.285, 콤팩트성은 위상에만 달려 있고 코시 수열과 완비성은 거리에 달려 있다)과 같은 방향의 내용을 유계에 대해 본 것이고, 연습문제 7.2.16(p.273: 거리공간마다 같은 위상을 주는 유계인 거리 d′ 가 있음을 보이라)과 같은 발상(위상을 바꾸지 않고 유계를 바꾸는 거리)이다. 연습문제 7.4.19(p.286)도 ℝ 위에서 같은 위상을 주는 두 거리 d, d′ 를 다룬다. 예시 '정수 전체는 유계가 아니다'의 ℤ 는 출처가 p.282 에서 수열 콤팩트가 아니라고 적는 ℕ ⊆ ℝ 과 비슷한 대상이다."
  - ref: fuglede-basic-topology
    loc: "Compactness in ℝⁿ 절의 유계의 정의와 Theorem heine-borel 의 증명, content/compactness.tex:191–204; Compactness 절의 예, 29–31"
    checked: original
    note: "출처는 거리공간의 유계를 'd(x, y) ≤ r 가 모든 x, y ∈ A 에서 성립하는 r > 0 이 있다'로 정의하는 문장을 주석으로 남기고(192), 실제 정의로는 ℝⁿ 의 부분집합 A 가 어떤 K > 0 에 대해 A ⊆ [−K, K]ⁿ 일 때 유계라 한다(193). 이 항목의 (2)의 끝 문장은 n = 1 일 때 그 정의와 같은 꼴이다. 출처의 하이네–보렐 정리 증명(200–204)은 A 가 유계가 아니라고 하고 각 k 마다 d(x_k, 0) > k 인 x_k ∈ A 를 고른다. 이 항목은 고르지 않는다. 확인 질문 '{x : 0 < x ≤ 1} 은 유계인가? 콤팩트 부분집합인가?'의 (0, 1] 이 콤팩트가 아니라는 것은 출처의 예(29–31)와 같은 대상, 같은 결론이다(출처는 덮개 (1/n, 1] 로 보인다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 곳 3군데, 근거 없는 연속 주장, 단원 글의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간은 [[metric-space]]의 것이고, 열린 공 $B(x, r)$와 닫힌 공 $C(x, r)$는 [[open-ball]]의 것이며, $(X, d)$에서 닫힌집합은 [[open-set-in-metric-space]]의 것이다. 거리공간에는 거리위상([[topology-examples]]의 (4))을 주고, 콤팩트 부분집합(콤팩트 집합)은 [[compact-space]]의 것이다. 해석학 입문의 "유계"(위로 유계이고 아래로 유계)는 [[upper-bound-and-supremum]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

**거리공간의 유계 집합.** $S \subseteq X$가 $(X, d)$에서 **유계**(bounded)인 것은 정확히 $S = \emptyset$이거나, $S \subseteq B(p, r)$인 점 $p \in X$와 실수 $r > 0$이 있을 때이다. 거리를 밝혀야 할 때는 "$d$로 유계"라고 쓴다.

1. (기본 성질)
   - (i) $S$가 유계이고 $T \subseteq S$이면 $T$는 유계이다.
   - (ii) (중심 바꾸기) $S$가 유계이고 $q \in X$이면 $S \subseteq B(q, r)$인 실수 $r > 0$이 있다.
   - (iii) $S$와 $T$가 유계이면 $S \cup T$는 유계이다.
   - (iv) $p \in X$이고 $r > 0$이면 $B(p, r)$와 $C(p, r)$는 유계이다.
   - (v) $X$의 유한 부분집합은 유계이다.
2. (실수에서의 유계) $\mathbb{R}$에 보통 거리를 주면, $S \subseteq \mathbb{R}$가 이 항목의 뜻으로 유계인 것은 정확히 $S$가 [[upper-bound-and-supremum]]의 뜻으로 유계일 때이다. 또 이때 $S \subseteq [-r, r]$인 실수 $r > 0$이 있다. 그래서 두 뜻을 같은 이름으로 부른다.
3. (콤팩트이면 닫혀 있고 유계) $K$가 $X$의 콤팩트 부분집합이면 $K$는 $(X, d)$에서 닫힌집합이고 유계이다.
4. (거꾸로는 성립하지 않을 수 있다) $X$가 무한집합이고 $d$가 $X$ 위의 이산 거리이면 $X$의 모든 부분집합은 닫혀 있고 유계이지만, $X$의 콤팩트 부분집합은 정확히 유한집합이다. 특히 $X$ 자신은 닫혀 있고 유계이지만 콤팩트가 아니다.
:::

:::english
Metric spaces are as in the entry on metric spaces, open balls $B(x, r)$ and closed balls $C(x, r)$ are as in the entry on open balls, and closed sets in $(X, d)$ are as in the entry on open sets in a metric space. Metric spaces carry the metric topology ((4) of the entry on examples of topologies), and compact subsets (compact sets) are as in the entry on open covers and compact spaces. "Bounded" in the sense of the analysis course (bounded above and bounded below) is as in the entry on upper bounds and suprema. Below, $(X, d)$ is a metric space.

**Bounded sets in a metric space.** A subset $S \subseteq X$ is **bounded** in $(X, d)$ exactly when $S = \emptyset$, or there are a point $p \in X$ and a real number $r > 0$ with $S \subseteq B(p, r)$. When the metric must be named we say "bounded with respect to $d$".

1. (Basic properties)
   - (i) If $S$ is bounded and $T \subseteq S$, then $T$ is bounded.
   - (ii) (Changing the center) If $S$ is bounded and $q \in X$, then there is a real number $r > 0$ with $S \subseteq B(q, r)$.
   - (iii) If $S$ and $T$ are bounded, then $S \cup T$ is bounded.
   - (iv) If $p \in X$ and $r > 0$, then $B(p, r)$ and $C(p, r)$ are bounded.
   - (v) Finite subsets of $X$ are bounded.
2. (Boundedness in the reals) If $\mathbb{R}$ carries the standard metric, then $S \subseteq \mathbb{R}$ is bounded in the sense of this entry exactly when $S$ is bounded in the sense of the entry on upper bounds and suprema. Moreover, in that case there is a real number $r > 0$ with $S \subseteq [-r, r]$. Hence the two meanings are called by the same name.
3. (Compact implies closed and bounded) If $K$ is a compact subset of $X$, then $K$ is a closed set in $(X, d)$ and is bounded.
4. (The converse may fail) If $X$ is an infinite set and $d$ is the discrete metric on $X$, then every subset of $X$ is closed and bounded, but the compact subsets of $X$ are exactly the finite sets. In particular $X$ itself is closed and bounded but not compact.
:::

## 직관

유계는 "한 공 안에 다 들어간다"는 말입니다. 공의 중심은 아무 데나 잡아도 됩니다. 중심을 옮기면 옮긴 거리만큼 반지름을 늘리면 되기 때문입니다((1)의 (ii)). 실수에서 공은 열린구간이므로, 한 열린구간 안에 다 들어간다는 것은 위아래로 막혀 있다는 해석학 입문의 유계와 같은 말이 됩니다((2)).

콤팩트 집합이 유계인 까닭은 다음과 같습니다. 한 점 $p$를 중심으로 반지름이 $1, 2, 3, \dots$인 공들은 공간 전체를 덮으므로 콤팩트 집합 $K$도 덮고, $K$가 콤팩트이므로 그 가운데 유한 개로 $K$가 덮입니다. 유한 개의 공의 합집합은 유계이므로 $K$도 유계입니다. 이 강의는 "유한 개 가운데 가장 큰 반지름"을 고르는 대신, 유계인 집합 전체가 공집합을 포함하고 두 집합의 합집합에 닫혀 있다는 것((1)의 (iii))과 [[compact-space]]의 (1)을 씁니다. 닫혀 있다는 것은 거리공간이 하우스도르프 공간이라는 데서 나옵니다.

비유하자면 유계는 "울타리 하나로 다 두를 수 있다"이고, 콤팩트는 "어떻게 천막을 쳐도 그 가운데 유한 개로 덮인다"입니다. 콤팩트에서 유계가 나오는 것은 점점 커지는 울타리들을 천막으로 삼은 경우입니다. 거꾸로는 성립하지 않을 수 있습니다. 이산 거리에서는 모든 점이 반지름 $2$인 공 하나에 들어가 공간 전체가 유계이지만, 점마다 자기만의 작은 천막(한 점 집합)이 있어 무한히 많은 점을 유한 개로 덮을 수 없습니다.

## 증명

:::idea
유계인 부분집합 전체가 공집합을 포함하고 두 집합의 합집합에 닫혀 있음을 보이고, 중심이 고정된 공들의 덮개에 유한 합집합의 보조정리를 쓴다.
:::

:::hint
(1)의 (iii)은 (ii)로 두 집합의 공을 같은 중심으로 옮긴 뒤 두 반지름의 최대를 씁니다.
:::

:::hint
(3)의 유계 부분에서는 점 $p$ 하나를 잡고 $\{B(p, n) : n \in \mathbb{N}\}$을 씁니다. 아르키메데스 성질이 이것이 $X$를 덮는다는 것을 줍니다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "공 (5)"는 [[open-ball]]의 번호, "콤팩트 (3)"은 [[compact-space]]의 번호이다. 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이고, (K…)는 [[real-number-arithmetic]]의 계산 법칙이다.

**(1).** (i) $S = \emptyset$이면 $T = \emptyset$이다. $S \subseteq B(p, r)$이면 $T \subseteq S \subseteq B(p, r)$이다.

(ii) $S = \emptyset$이면 $r = 1$로 두면 된다. $S \subseteq B(p, r_0)$이라 하고 $r = r_0 + d(p, q)$로 둔다. 거리의 조건 (i)에 의해 $0 \le d(p, q)$이고 $0 < r_0$이므로 순서 성질 (2)의 (iv)에 의해 $0 < r_0 + d(p, q) = r$이다. $x \in S$이면 거리의 삼각부등식과 조건 (iii)에 의해 $d(q, x) \le d(q, p) + d(p, x) = d(p, q) + d(p, x)$이고, $d(p, x) < r_0$이므로 순서 성질 (2)의 (iv)에 의해 $d(p, q) + d(p, x) < d(p, q) + r_0 = r$이고, 순서 성질 (1)의 (v)에 의해 $d(q, x) < r$이다. 따라서 $S \subseteq B(q, r)$이다.

(iii) $S = \emptyset$이면 $S \cup T = T$이고, $T = \emptyset$이면 $S \cup T = S$이다. 둘 다 공집합이 아니면 $S \subseteq B(p, r_1)$인 $p$, $r_1$이 있고, (ii)에 의해 $T \subseteq B(p, r_2)$인 $r_2 > 0$이 있다. $r = \max\{r_1, r_2\}$는 절댓값 (10)에 의해 $r_1$이거나 $r_2$이므로 양수이고 $r_1 \le r$, $r_2 \le r$이다. 공 (2)에 의해 $B(p, r_1) \subseteq B(p, r)$이고 $B(p, r_2) \subseteq B(p, r)$이므로 $S \cup T \subseteq B(p, r)$이다.

(iv) $B(p, r) \subseteq B(p, r)$이다. 순서 성질 (5)의 (ii)와 (2)의 (ii)에 의해 $r < r + 1$이므로 공 (2)에 의해 $C(p, r) \subseteq B(p, r + 1)$이고, $0 < r < r + 1$이다.

(v) $\mathcal{E}$를 $X$의 유계인 부분집합 전체의 집합족이라 하자. 정의에 의해 $\emptyset \in \mathcal{E}$이고, (iii)에 의해 $\mathcal{E}$는 두 원소의 합집합에 닫혀 있다. $x \in X$이면 공 (1)에 의해 $x \in B(x, 1)$이므로 $\{x\} \subseteq B(x, 1)$이고 $\{x\} \in \mathcal{E}$이다. 콤팩트 (1)의 (ii)에 의해 $X$의 유한 부분집합은 $\mathcal{E}$에 든다.

**(2).** 공 (5)에 의해 실수 $p$와 $r > 0$에 대하여 $B(p, r)$는 열린구간 $(p - r, p + r)$이다.

$S$가 이 항목의 뜻으로 유계라 하자. $S = \emptyset$이면 [[upper-bound-and-supremum]]의 (5)에 의해 그 뜻으로도 유계이다. $S \subseteq (p - r, p + r)$이면 $S$의 원소 $x$는 $p - r < x < p + r$이므로 $p + r$은 $S$의 상계이고 $p - r$은 $S$의 하계이다. 따라서 $S$는 그 뜻으로 유계이다.

거꾸로 $S$가 [[upper-bound-and-supremum]]의 뜻으로 유계라 하자. $S = \emptyset$이면 정의에 의해 이 항목의 뜻으로도 유계이다. $S \ne \emptyset$이면 $S$의 하계 $m$과 상계 $M$이 있고, $S$의 원소 $x$ 하나에 대하여 $m \le x \le M$이므로 $m \le M$이다. $p = (m + M)/2$, $r = (M - m)/2 + 1$로 둔다. 순서 성질 (3)의 (i)에 의해 $0 \le M - m$이고, 순서 성질 (6)의 (i)에 의해 $0 < 2^{-1}$이므로 (4)의 (iii)에 의해 $0 \le (M - m)/2$이며, (5)의 (ii)와 (2)의 (iv)에 의해 $0 < r$이다. $S$의 원소 $x$에 대하여 $m \le x \le M$이고, $p - r = m - 1$, $p + r = M + 1$이므로((K…)의 계산) 순서 성질 (2)의 (ii)와 (1)의 (v)에 의해 $p - r < x < p + r$, 곧 $x \in B(p, r)$이다. 따라서 $S$는 이 항목의 뜻으로 유계이다.

끝 문장: $S$가 유계이면 (1)의 (ii)를 $q = 0$에 써서 $S \subseteq B(0, r)$인 $r > 0$이 있다. $B(0, r) = (-r, r)$이고 $-r < r$이며, 그 원소 $x$는 $-r < x < r$이므로 $-r \le x \le r$, 곧 $x \in [-r, r]$이다.

**(3).** *닫혀 있다.* [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $(X, \mathcal{T}_d)$는 하우스도르프 공간이므로, [[compact-subset-of-hausdorff-is-closed]]의 (2)에 의해 $K$는 $(X, \mathcal{T}_d)$에서 닫힌집합이고, [[closed-set]]의 (6)에 의해 $(X, d)$에서 닫힌집합이다.

*유계이다.* $K = \emptyset$이면 정의에 의해 유계이다. $K \ne \emptyset$이면 $X \ne \emptyset$이므로 $X$의 점 $p$ 하나를 잡는다. 식으로 정한 $X$의 집합족 $\mathcal{V} = \{B(p, n) : n \in \mathbb{N}\}$을 둔다. [[open-ball-is-open|열린 공은 열린집합이다]]의 (1)과 [[topology-examples]]의 (4)에 의해 $\mathcal{V}$의 원소는 열린집합이다. $x \in X$이면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $d(p, x) < n$인 자연수 $n$이 있고, 자연수는 양수이므로([[order-properties-of-reals]]의 (10)) $x \in B(p, n)$이다. 따라서 $K \subseteq X = \bigcup \mathcal{V}$이고, $K$가 콤팩트 부분집합이므로 콤팩트 (3)에 의해 $K \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. (1)의 (v)의 증명의 집합족 $\mathcal{E}$는 콤팩트 (1)의 가정을 만족하고, (1)의 (iv)에 의해 $\mathcal{V} \subseteq \mathcal{E}$이다. 콤팩트 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{E}$이고, (1)의 (i)에 의해 $K$는 유계이다.

**(4).** [[topology-examples]]의 (5)에 의해 이산 거리의 거리위상은 이산위상 $\mathscr{P}(X)$이므로 $X$의 모든 부분집합은 열린집합이고, [[closed-set]]의 (7)과 (6)에 의해 $(X, d)$에서 닫힌집합이다. $X$는 무한집합이므로 공집합이 아니고([[finite-set]]의 (F2)에 의해 $\emptyset$은 유한집합이다), 점 $p$ 하나를 잡으면 모든 $x \in X$에서 $d(p, x) \le 1 < 2$이므로 $X \subseteq B(p, 2)$이다. (1)의 (i)에 의해 $X$의 모든 부분집합은 유계이다. [[compact-space]]의 (8)의 (iv)에 의해 이산위상에서 콤팩트 부분집합은 정확히 유한집합이고, $X$는 무한집합이므로 콤팩트가 아니다.
:::

## 예시와 반례

:::example[정수 전체는 유계가 아니다]
$\mathbb{Z}$는 [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{R}$의 닫힌집합이지만 유계가 아닙니다. $\mathbb{Z} \subseteq B(p, r) = (p - r, p + r)$라면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $p + r < n$인 자연수 $n$이 있는데, $n \in \mathbb{Z}$이면서 $n \notin (p - r, p + r)$이어서 모순입니다. 그러므로 (3)의 대우에 의해 $\mathbb{Z}$는 콤팩트 부분집합이 아닙니다. 반면 $A = \{n^{-1} : n \in \mathbb{N}\}$은 유계입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로 $0$은 $A$의 하계이고, $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 같은 항목의 (6)의 (ii)에 의해 $n^{-1} < 1$이므로 $1$은 $A$의 상계입니다. (2)에 의해 $A$는 이 항목의 뜻으로 유계입니다.
:::

:::counterexample[위상은 같고 유계는 다른 두 거리]
$\mathbb{N}$에 보통 거리의 부분공간 거리 $d_1$을 주거나 이산 거리 $d_2$를 주면 두 거리위상은 모두 이산위상 $\mathscr{P}(\mathbb{N})$입니다. [[metric-subspace-topology]]의 (1)과 [[subspace-topology]]의 (4)에 의해 $d_1$의 거리위상은 $\mathbb{Z}$의 부분공간 위상을 다시 $\mathbb{N}$으로 줄인 것이고, [[metric-subspace-topology]]의 (4)의 (i)과 [[subspace-topology]]의 (7)의 (iv)에 의해 그것은 $\mathscr{P}(\mathbb{N})$이며, [[topology-examples]]의 (5)에 의해 $d_2$의 거리위상도 $\mathscr{P}(\mathbb{N})$입니다. 그러나 $\mathbb{N}$은 $d_2$로 유계이고((4)의 증명), $d_1$로는 유계가 아닙니다(위 예시와 같이 아르키메데스 성질로). 곧 유계인지는 위상만으로 정해지지 않고 거리에 달려 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}$의 부분집합 $\{x : 0 < x \le 1\}$은 유계인가? 콤팩트 부분집합인가?]
이 집합은 반열린구간 $(0, 1]$이고 유계입니다. $0$이 하계이고 $1$이 상계이므로 (2)에 의해 이 항목의 뜻으로도 유계입니다. 그러나 [[open-and-closed-sets-of-reals]]의 (3)에 의해 $(0, 1]$은 닫힌집합이 아니므로, (3)의 대우에 의해 콤팩트 부분집합이 아닙니다.
:::

:::check[$X = \emptyset$인 거리공간 $(\emptyset, \emptyset)$에서 $\emptyset$은 유계인가? 공집합이 아닌 거리공간의 유한 부분집합은?]
둘 다 유계입니다. 앞의 것은 정의의 "$S = \emptyset$이거나"에 의해 유계이고, 공 $B(p, r)$의 중심이 될 점이 없어도 됩니다. 뒤의 것은 (1)의 (v)입니다. 예컨대 $\{p, q\}$는 (1)의 (ii)에 의해 $p$를 중심으로 반지름 $d(p, q) + 1$인 공에 듭니다.
:::
