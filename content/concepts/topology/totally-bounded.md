---
title: 완전유계
title_en: Totally Bounded
aliases: [완전유계 집합, totally bounded set, 완전유계 거리공간, totally bounded metric space, 콤팩트이면 완전유계, compact implies totally bounded]
kind: definition
field: topology
msc: ["54E35", "54E45"]
level: undergrad
summary: 거리공간의 부분집합이 어떤 양수 ε 에서도 유한 개의 점을 중심으로 한 반지름 ε 의 열린 공들로 덮이면 완전유계라 한다. 완전유계이면 유계이고, 부분집합과 폐포로 물려주며, 중심을 그 집합 안에서 잡아도 같은 뜻이다. 콤팩트 집합은 완전유계이고, 실수에서는 유계와 같은 말이며, 무한집합 위의 이산 거리는 유계이지만 완전유계가 아니다.
requires: [set, subset, set-operations, power-set, family-of-sets, finite-set, subset-of-finite-set, disjoint-union-count, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, interval, upper-bound-and-supremum, metric-space, metric-space-examples, open-ball, open-ball-is-open, topology-examples, standard-topology-on-reals, metric-subspace-topology, interior-and-closure, closure-in-a-metric-space, homeomorphism, homeomorphism-examples, compact-space, closed-interval-is-compact, compact-metric-closed-and-bounded, heine-borel-on-reals]
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.3소절 Exercises 의 연습문제 7.4.12 와 그 Note (p.286), 연습문제 7.4.19 (p.286); 7.4.2소절 Remark 7.4.16 (p.285); 7.3.4소절 연습문제 7.3.10 (p.278)"
    checked: original
    note: "출처 연습문제 7.4.12(p.286)는 완비 거리공간 X 에서 K ⊆ X 가 콤팩트인 것이 정확히 K 가 닫혀 있고 모든 ε > 0 에 대하여 K ⊆ B(x_1, ε) ∪ ⋯ ∪ B(x_n, ε) 인 유한 개의 점 x_1, …, x_n 이 있을 때임을 보이라고 하고, Note 에서 그런 K 를 totally bounded 라 부른다고 적는다. 점 x_j 가 K 의 점인지 X 의 점인지는 적혀 있지 않다. 이 항목은 중심을 X 의 유한 부분집합 F 로 잡고 줄임표 합집합 대신 집합족 {B(x, ε) : x ∈ F} 의 합집합으로 쓴다. F = ∅ 을 허락하므로 공집합은 완전유계이다. 출처에서 'totally bounded' 는 이 Note 의 두 줄과 색인(p.308)에만 나온다(source-grep 'totally bounded' 3건, 'finite set of points' 1건, 'finitely many balls' 0건). (4)는 그 연습문제의 한 방향(콤팩트이면 완전유계)을 완비 가정 없이 진술한 것이다. 출처는 그 연습문제를 독자에게 맡기고, 이 항목의 증명은 공마다 중심을 고르지 않도록 compact-space 의 (1)을 쓴다. 그 연습문제의 다른 방향(완비 공간에서 닫혀 있고 완전유계이면 콤팩트)은 이 강의가 싣지 않는다. 반례 '위상동형인 두 공간의 완전유계가 다를 수 있다'는 출처 Remark 7.4.16(p.285: 콤팩트성과 수렴은 위상에만 달려 있고 코시 수열과 완비성은 거리에 달려 있다)과 같은 방향의 내용을 완전유계에 대해 본 것이고, 연습문제 7.4.19(p.286: ℝ 위에서 보통 거리와 같은 위상을 주는 거리 d′(x, y) = |x/(1 + |x|) − y/(1 + |y|)| 를 다룬다)와 같은 발상(위상은 그대로 두고 거리를 바꾼다)이다. 그 반례가 인용하는 위상동형사상의 역함수 g(y) = y(1 + |y|)⁻¹ 은 그 연습문제의 d′ 에 나오는 식 x/(1 + |x|) 와 같은 꼴이고, 연습문제 7.3.10(p.278: 확장된 실수 위의 거리)도 같은 식을 쓴다."
  - ref: fuglede-basic-topology
    loc: "Sequential compactness 소절, Theorem seq-compact-vs-compact 의 증명의 거리공간 부분, content/compactness.tex:156–162"
    checked: original
    note: "출처는 수열 콤팩트인 거리공간에서 반지름 r 인 공 전체의 덮개 {B_d(x, r) | x ∈ X} 가 유한 부분덮개를 갖는다는 것을 보인다(158–162). 곧 수열 콤팩트인 거리공간이 이 항목의 뜻으로 완전유계라는 것이다. 출처에서 'totally bounded' 를 찾으면 0건이다(grep -i 'totally' 는 totally ordered 와 totally disconnected 만 준다). 이 항목의 (4)는 같은 결론을 콤팩트성에서 얻고, 출처의 증명처럼 유한 부분덮개를 고르지 않으며 점을 차례로 잡는 수열도 쓰지 않는다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 넓던 설명 문장 4건, 메모의 틀린 장 번호 1건과 줄 범위 4건, 겹치는 이름표 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예, 부분공간 거리 $d_S$는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$와 $B_S(x, r)$는 [[open-ball]]의 것이다. 유한집합은 [[finite-set]]의 것이고, $X$의 **유한 부분집합**은 $X$의 부분집합 가운데 유한집합인 것이다. 집합족과 그 합집합, 식으로 정한 집합족 $\{B(x, \varepsilon) : x \in F\}$, 빈 집합족은 [[family-of-sets]]의 것이다. 거리공간의 유계 집합은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 것이고, 거리공간에는 거리위상을 주며, 폐포 $\overline{S}$는 [[interior-and-closure]]의 것이고, 콤팩트 부분집합은 [[compact-space]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

**완전유계.** $S \subseteq X$가 $(X, d)$에서 **완전유계**(totally bounded)인 것은 정확히, 모든 실수 $\varepsilon > 0$에 대하여 $X$의 유한 부분집합 $F$가 있어
$$
S \subseteq \bigcup \{B(x, \varepsilon) : x \in F\}
$$
일 때이다. $F = \emptyset$이어도 된다. 거리를 밝혀야 할 때는 "$d$로 완전유계"라고 쓴다. $X$ 자신이 완전유계이면 $(X, d)$를 **완전유계 거리공간**이라 한다.

다음이 성립한다. 아래에서 $S$는 $X$의 부분집합이다.

1. (유계) $S$가 완전유계이면 $S$는 유계이다.
2. (부분집합과 폐포) $S$가 완전유계이고 $T \subseteq S$이면 $T$는 완전유계이다. $S$가 완전유계이면 $\overline{S}$도 완전유계이다.
3. (중심을 $S$ 안에서 잡기) $S$가 완전유계인 것은 정확히, 모든 실수 $\varepsilon > 0$에 대하여 $S$의 유한 부분집합 $G$가 있어 $S \subseteq \bigcup \{B(s, \varepsilon) : s \in G\}$일 때이다. 따라서 $S$가 $(X, d)$에서 완전유계인 것은 정확히 부분공간 거리를 준 $(S, d_S)$가 완전유계 거리공간일 때이다.
4. (콤팩트 집합) $K$가 $X$의 콤팩트 부분집합이면 $K$는 완전유계이다.
5. (실수) $\mathbb{R}$에 보통 거리를 주면, $S \subseteq \mathbb{R}$가 완전유계인 것은 정확히 $S$가 유계일 때이다. 여기서 유계는 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (2)에 의해 [[upper-bound-and-supremum]]의 뜻으로 읽어도 같다.
6. (예)
   - (i) $\emptyset$과 $X$의 유한 부분집합은 완전유계이다.
   - (ii) $d$가 $X$ 위의 이산 거리이면, $S \subseteq X$가 완전유계인 것은 정확히 $S$가 유한집합일 때이다. 특히 $X$가 무한집합이면 $X$는 유계이지만 완전유계가 아니다.
:::

:::english
Metric spaces, their examples and the subspace metric $d_S$ are as in the entries on metric spaces and their examples, and open balls $B(x, r)$ and $B_S(x, r)$ are as in the entry on open balls. Finite sets are as in the entry on finite sets, and a **finite subset** of $X$ is a subset of $X$ that is a finite set. Families of sets, their unions, families defined by a formula $\{B(x, \varepsilon) : x \in F\}$ and the empty family are as in the entry on families of sets. Bounded sets in a metric space are as in the entry on compact sets in metric spaces; metric spaces carry the metric topology, the closure $\overline{S}$ is as in the entry on interior and closure, and compact subsets are as in the entry on open covers and compact spaces. Below, $(X, d)$ is a metric space.

**Totally bounded.** A subset $S \subseteq X$ is **totally bounded** in $(X, d)$ exactly when for every real number $\varepsilon > 0$ there is a finite subset $F$ of $X$ with
$$
S \subseteq \bigcup \{B(x, \varepsilon) : x \in F\}.
$$
$F = \emptyset$ is allowed. When the metric must be named we say "totally bounded with respect to $d$". If $X$ itself is totally bounded, $(X, d)$ is called a **totally bounded metric space**.

The following hold. Below, $S$ is a subset of $X$.

1. (Bounded) If $S$ is totally bounded, then $S$ is bounded.
2. (Subsets and closure) If $S$ is totally bounded and $T \subseteq S$, then $T$ is totally bounded. If $S$ is totally bounded, then so is $\overline{S}$.
3. (Centers inside $S$) $S$ is totally bounded exactly when for every real number $\varepsilon > 0$ there is a finite subset $G$ of $S$ with $S \subseteq \bigcup \{B(s, \varepsilon) : s \in G\}$. Consequently, $S$ is totally bounded in $(X, d)$ exactly when $(S, d_S)$ with the subspace metric is a totally bounded metric space.
4. (Compact sets) If $K$ is a compact subset of $X$, then $K$ is totally bounded.
5. (The reals) If $\mathbb{R}$ carries the standard metric, then $S \subseteq \mathbb{R}$ is totally bounded exactly when $S$ is bounded. Here, by (2) of the entry on compact sets in metric spaces, bounded may equally be read in the sense of the entry on upper bounds and suprema.
6. (Examples)
   - (i) $\emptyset$ and the finite subsets of $X$ are totally bounded.
   - (ii) If $d$ is the discrete metric on $X$, then $S \subseteq X$ is totally bounded exactly when $S$ is a finite set. In particular, if $X$ is an infinite set, then $X$ is bounded but not totally bounded.
:::

## 직관

유계는 "등불 하나를 크게 켜면 다 비출 수 있다"는 말입니다. 완전유계는 "등불의 크기를 아무리 작게 정해도, 그 크기의 등불 유한 개로 다 비출 수 있다"는 말입니다. 비유의 등불이 열린 공이고, "크기를 아무리 작게 정해도"가 "모든 $\varepsilon > 0$에 대하여", "유한 개"가 중심의 집합 $F$가 유한집합이라는 것입니다. 등불의 크기가 정해진 다음에 그 개수를 정하므로, $\varepsilon$이 작아지면 $F$는 커져도 됩니다.

완전유계이면 유계입니다((1)). 반지름 $1$인 공 유한 개의 합집합은 유계이기 때문입니다. 거꾸로는 성립하지 않을 수 있습니다. 무한집합에 이산 거리를 주면 반지름 $2$인 공 하나가 전체를 덮지만, 반지름 $1$인 공은 한 점뿐이어서 유한 개로는 무한히 많은 점을 덮을 수 없습니다((6)). 실수에서는 이런 일이 없어서, 유계인 집합은 닫힌구간 안에 들고 닫힌구간이 콤팩트이므로 완전유계입니다((5)). $S$가 어떤 공 $B(p, \varepsilon)$ 하나에 들어가면 그 $\varepsilon$에서는 중심 하나로 충분하지만, 완전유계는 그보다 작은 모든 반지름에서도 유한 개로 충분해야 한다는 조건입니다.

정의는 중심을 $X$의 점으로 허락합니다. 중심을 $S$ 안에서 잡아도 같은 뜻이 된다는 것이 (3)입니다. 반지름 $\varepsilon/2$인 공 하나가 $S$와 만나면 그 공과 $S$의 공통점 하나를 중심으로 반지름 $\varepsilon$인 공이 그 공의 $S$ 쪽 부분을 모두 덮기 때문입니다. 공마다 공통점을 하나씩 고르는 대신, 이 항목은 [[compact-space]]의 유한 합집합의 보조정리를 씁니다. 콤팩트 집합이 완전유계라는 (4)도 같은 방법으로, 반지름 $\varepsilon$인 공들의 덮개에서 유한 부분덮개의 공마다 중심을 고르지 않고 보입니다.

## 성질의 증명

:::proof
"공 (1)"처럼 쓴 것은 [[open-ball]]의 번호, "콤팩트 (1)"은 [[compact-space]]의 번호, "유계 (1)의 (iii)"은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 번호, "집합족 (9)"는 [[family-of-sets]]의 번호, "순서 성질 (8)"은 [[order-properties-of-reals]]의 번호이다. 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이고, 실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하며 "계산"이라고만 적는다. 한 원소 집합 $\{c\}$가 유한집합이라는 것은 [[compact-space]]의 증명의 "한 원소 집합" 단락에 있고, 두 유한집합의 합집합이 유한집합이라는 것은 [[disjoint-union-count]]의 (3)이다.

*준비: 공들의 합집합.* 실수 $r > 0$과 $F \subseteq X$에 대하여 이 증명 안에서만
$$
W_r(F) = \bigcup \{B(x, r) : x \in F\}
$$
로 쓴다. 이것은 $X$의 부분집합이다. 다음이 성립한다.

- (ㄱ) $a \in W_r(F)$인 것은 정확히 $d(x, a) < r$인 $x \in F$가 있을 때이다. 집합족 (9)에 의해 $a \in W_r(F)$인 것은 정확히 $a \in B(x, r)$인 $x \in F$가 있을 때이고, 열린 공의 정의에 의해 $a \in B(x, r)$는 $a \in X$이고 $d(x, a) < r$이라는 뜻이다.
- (ㄴ) $W_r(\emptyset) = \emptyset$이다. $x \in \emptyset$인 $x$가 없으므로 (ㄱ)에 의해 $W_r(\emptyset)$의 원소는 없다.
- (ㄷ) $a \in X$이면 $W_r(\{a\}) = B(a, r)$이다. $x \in \{a\}$인 것은 정확히 $x = a$일 때이므로 (ㄱ)과 열린 공의 정의에 의해 두 집합의 원소가 같다.
- (ㄹ) $F, G \subseteq X$이면 $W_r(F \cup G) = W_r(F) \cup W_r(G)$이다. (ㄱ)에 의해 $a$가 왼쪽의 원소인 것은 정확히 $d(x, a) < r$인 $x \in F \cup G$가 있을 때이고, 그런 $x$는 $F$나 $G$에 속하므로 이것은 정확히 $a \in W_r(F)$이거나 $a \in W_r(G)$일 때이다.

정의는 "모든 $\varepsilon > 0$에 대하여 $S \subseteq W_\varepsilon(F)$인 $X$의 유한 부분집합 $F$가 있다"이다. 또 $Y \subseteq X$와 $\varepsilon > 0$에 대하여, $\mathscr{P}(X)$의 원소 $A$ 가운데 "$A \cap Y \subseteq W_\varepsilon(G)$인 $Y$의 유한 부분집합 $G$가 있다"를 만족하는 것 전체를 $\mathcal{E}_\varepsilon(Y)$로 쓴다. 조건으로 정한 부분집합이므로 $X$의 집합족이다.

- (ㅁ) $\mathcal{E}_\varepsilon(Y)$는 [[compact-space|콤팩트 (1)]]의 가정을 만족한다. $G = \emptyset$은 [[finite-set]]의 (F2)에 의해 유한집합이고 $Y$의 부분집합이며 $\emptyset \cap Y = \emptyset \subseteq W_\varepsilon(\emptyset)$이므로 $\emptyset \in \mathcal{E}_\varepsilon(Y)$이다. $A_1, A_2 \in \mathcal{E}_\varepsilon(Y)$이고 그 유한 부분집합이 $G_1$, $G_2$이면 $G_1 \cup G_2$는 $Y$의 유한 부분집합이고, $a \in (A_1 \cup A_2) \cap Y$이면 $a \in A_1 \cap Y$이거나 $a \in A_2 \cap Y$이므로 $a \in W_\varepsilon(G_1) \cup W_\varepsilon(G_2) = W_\varepsilon(G_1 \cup G_2)$이다((ㄹ)). 곧 $(A_1 \cup A_2) \cap Y \subseteq W_\varepsilon(G_1 \cup G_2)$이다. 따라서 $A_1 \cup A_2 \in \mathcal{E}_\varepsilon(Y)$이다.

**(1).** $\varepsilon = 1$로 정의를 쓰면 $S \subseteq W_1(F)$인 $X$의 유한 부분집합 $F$가 있다. $\mathscr{P}(X)$의 원소 $T$ 가운데 $W_1(T)$가 유계인 것 전체를 $\mathcal{D}$라 하자. (ㄴ)에 의해 $W_1(\emptyset) = \emptyset$은 유계이므로 $\emptyset \in \mathcal{D}$이다. $T_1, T_2 \in \mathcal{D}$이면 (ㄹ)에 의해 $W_1(T_1 \cup T_2) = W_1(T_1) \cup W_1(T_2)$이고 유계 (1)의 (iii)에 의해 유계이므로 $T_1 \cup T_2 \in \mathcal{D}$이다. $a \in X$이면 (ㄷ)에 의해 $W_1(\{a\}) = B(a, 1)$이고 유계 (1)의 (iv)에 의해 유계이므로 $\{a\} \in \mathcal{D}$이다. 콤팩트 (1)의 (ii)에 의해 $F \in \mathcal{D}$, 곧 $W_1(F)$는 유계이고, $S \subseteq W_1(F)$이므로 유계 (1)의 (i)에 의해 $S$는 유계이다.

**(2).** $T \subseteq S$이면, 모든 $\varepsilon > 0$에 대하여 $S \subseteq W_\varepsilon(F)$인 $F$가 $T \subseteq W_\varepsilon(F)$도 만족한다.

폐포: $\varepsilon > 0$을 잡는다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이므로 $S \subseteq W_{\varepsilon/2}(F)$인 $X$의 유한 부분집합 $F$가 있다. $y \in \overline{S}$라 하자. [[closure-in-a-metric-space|거리공간의 폐포에 관한 항목]]의 (1)에 의해 $B(y, \varepsilon/2) \cap S \ne \emptyset$이므로 그 원소 $s$가 있다. $d(y, s) < \varepsilon/2$이고, $s \in W_{\varepsilon/2}(F)$이므로 (ㄱ)에 의해 $d(x, s) < \varepsilon/2$인 $x \in F$가 있다. 거리의 삼각부등식과 조건 (iii)에 의해 $d(x, y) \le d(x, s) + d(s, y) = d(x, s) + d(y, s)$이고, 순서 성질 (2)의 (iv), (1)의 (v)와 계산에 의해 $d(x, y) < \varepsilon/2 + \varepsilon/2 = \varepsilon$이다. (ㄱ)에 의해 $y \in W_\varepsilon(F)$이다. 따라서 $\overline{S} \subseteq W_\varepsilon(F)$이고, $\overline{S}$는 완전유계이다.

**(3).** *정확히 ~일 때의 뒤쪽에서 앞쪽.* $S$의 유한 부분집합은 $X$의 유한 부분집합이므로 정의가 성립한다.

*앞쪽에서 뒤쪽.* $S$가 완전유계이고 $\varepsilon > 0$이라 하자. $0 < \varepsilon/2$이므로 $S \subseteq W_{\varepsilon/2}(F)$인 $X$의 유한 부분집합 $F$가 있다. $\mathscr{P}(X)$의 원소 $T$ 가운데 $W_{\varepsilon/2}(T) \in \mathcal{E}_\varepsilon(S)$인 것 전체를 $\mathcal{D}$라 하자. (ㄴ)과 (ㅁ)에 의해 $\emptyset \in \mathcal{D}$이고, (ㄹ)과 (ㅁ)에 의해 $\mathcal{D}$는 두 원소의 합집합에 닫혀 있다. $a \in X$라 하자. (ㄷ)에 의해 $W_{\varepsilon/2}(\{a\}) = B(a, \varepsilon/2)$이다.

- $B(a, \varepsilon/2) \cap S = \emptyset$이면 $G = \emptyset$으로 $B(a, \varepsilon/2) \in \mathcal{E}_\varepsilon(S)$이다.
- $B(a, \varepsilon/2) \cap S \ne \emptyset$이면 그 원소 $s$가 있다. $G = \{s\}$는 한 원소 집합이므로 $S$의 유한 부분집합이다. $y \in B(a, \varepsilon/2) \cap S$이면 거리의 삼각부등식과 조건 (iii)에 의해 $d(s, y) \le d(s, a) + d(a, y) = d(a, s) + d(a, y)$이고, $d(a, s) < \varepsilon/2$, $d(a, y) < \varepsilon/2$이므로 순서 성질 (2)의 (iv), (1)의 (v)와 계산에 의해 $d(s, y) < \varepsilon/2 + \varepsilon/2 = \varepsilon$이다. 그러므로 $y \in B(s, \varepsilon) = W_\varepsilon(\{s\})$이다((ㄷ)). 따라서 $B(a, \varepsilon/2) \in \mathcal{E}_\varepsilon(S)$이다.

두 경우 모두 $\{a\} \in \mathcal{D}$이다. 콤팩트 (1)의 (ii)에 의해 $F \in \mathcal{D}$, 곧 $W_{\varepsilon/2}(F) \in \mathcal{E}_\varepsilon(S)$이므로 $W_{\varepsilon/2}(F) \cap S \subseteq W_\varepsilon(G)$인 $S$의 유한 부분집합 $G$가 있다. $S \subseteq W_{\varepsilon/2}(F)$이므로 $S = W_{\varepsilon/2}(F) \cap S \subseteq W_\varepsilon(G)$이다.

*부분공간 거리.* $(S, d_S)$가 완전유계 거리공간이라는 것은, 모든 $\varepsilon > 0$에 대하여 $S$의 유한 부분집합 $G$가 있어 $S \subseteq \bigcup \{B_S(s, \varepsilon) : s \in G\}$라는 것이다. 공 (7)에 의해 $s \in S$에서 $B_S(s, \varepsilon) = B(s, \varepsilon) \cap S$이다. $y \in S$에 대하여, 집합족 (9)에 의해 $y \in \bigcup \{B_S(s, \varepsilon) : s \in G\}$인 것은 정확히 $y \in B(s, \varepsilon) \cap S$인 $s \in G$가 있을 때이고, $y \in S$이므로 이것은 정확히 $y \in B(s, \varepsilon)$인 $s \in G$가 있을 때, 곧 $y \in W_\varepsilon(G)$일 때이다. 따라서 $S \subseteq \bigcup \{B_S(s, \varepsilon) : s \in G\}$인 것은 정확히 $S \subseteq W_\varepsilon(G)$일 때이고, 첫째 문장에 의해 둘째 문장이 나온다.

**(4).** $\varepsilon > 0$을 잡는다. $x \in K$이면 $G = \{x\}$는 한 원소 집합이므로 $K$의 유한 부분집합이고, (ㄷ)에 의해 $B(x, \varepsilon) \cap K \subseteq B(x, \varepsilon) = W_\varepsilon(\{x\})$이므로 $B(x, \varepsilon) \in \mathcal{E}_\varepsilon(K)$이다. 거리위상 $\mathcal{T}_d$의 원소 $V$ 가운데 $V \in \mathcal{E}_\varepsilon(K)$인 것 전체를 $\mathcal{V}$라 하자. $x \in K$이면 공 (1)에 의해 $x \in B(x, \varepsilon)$이고, [[open-ball-is-open|열린 공은 열린집합이다]]의 (1)과 [[topology-examples]]의 (4)에 의해 $B(x, \varepsilon) \in \mathcal{T}_d$이므로 $B(x, \varepsilon) \in \mathcal{V}$이다. 따라서 $\mathcal{V}$는 $K \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이고, $K$가 콤팩트 부분집합이므로 콤팩트 (3)에 의해 $K \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{E}_\varepsilon(K)$이므로 (ㅁ)과 콤팩트 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{E}_\varepsilon(K)$이고, $\bigcup \mathcal{F} \cap K \subseteq W_\varepsilon(G)$인 $K$의 유한 부분집합 $G$가 있다. $K \subseteq \bigcup \mathcal{F}$이므로 $K = \bigcup \mathcal{F} \cap K \subseteq W_\varepsilon(G)$이고, $G$는 $X$의 유한 부분집합이다. 따라서 $K$는 완전유계이다.

**(5).** $S$가 완전유계이면 (1)에 의해 유계이다. 거꾸로 $S$가 유계라 하자. 유계 (2)에 의해 $S \subseteq [-r, r]$인 실수 $r > 0$이 있다. 순서 성질 (3)의 (ii)와 (1)의 (v)에 의해 $-r < 0 < r$이므로 [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 $[-r, r]$는 보통 위상의 $\mathbb{R}$의 콤팩트 부분집합이다. [[standard-topology-on-reals]]의 (5)에 의해 보통 위상은 보통 거리의 거리위상이므로 (4)에 의해 $[-r, r]$는 완전유계이고, (2)에 의해 $S$도 완전유계이다.

**(6).** (i) $S = \emptyset$이면 모든 $\varepsilon > 0$에서 $F = \emptyset$으로 $\emptyset \subseteq W_\varepsilon(\emptyset)$이다. $S$가 $X$의 유한 부분집합이면 $F = S$로 둔다. $s \in S$이면 [[metric-space]]의 (1)에 의해 $d(s, s) = 0 < \varepsilon$이므로 (ㄱ)에 의해 $s \in W_\varepsilon(S)$이다.

(ii) $S$가 유한집합이면 (i)에 의해 완전유계이다. 거꾸로 $S$가 완전유계이면 $\varepsilon = 1$에서 $S \subseteq W_1(F)$인 $X$의 유한 부분집합 $F$가 있다. 공 (6)에 의해 모든 $x \in X$에서 $B(x, 1) = \{x\}$이므로, (ㄱ)과 열린 공의 정의에 의해 $a \in W_1(F)$인 것은 정확히 $a = x$인 $x \in F$가 있을 때, 곧 $a \in F$일 때이다. 따라서 $S \subseteq F$이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $S$는 유한집합이다. $X$가 무한집합이면 유계 (4)에 의해 $X$는 유계이고, 방금 보인 것에 의해 완전유계가 아니다.
:::

## 예시와 반례

:::example[닫힌구간을 두 공으로 덮기]
$\mathbb{R}$에 보통 거리를 주고 $S = [0, 1]$, $\varepsilon = \frac{1}{3}$이라 합시다. $F = \bigl\{\frac{1}{4}, \frac{3}{4}\bigr\}$로 두면 [[open-ball]]의 (5)에 의해
$$
\begin{aligned}
B\Bigl(\frac{1}{4}, \frac{1}{3}\Bigr) &= \Bigl(-\frac{1}{12}, \frac{7}{12}\Bigr), \\
B\Bigl(\frac{3}{4}, \frac{1}{3}\Bigr) &= \Bigl(\frac{5}{12}, \frac{13}{12}\Bigr)
\end{aligned}
$$
입니다($\frac{1}{4} - \frac{1}{3} = -\frac{1}{12}$, $\frac{1}{4} + \frac{1}{3} = \frac{7}{12}$, $\frac{3}{4} - \frac{1}{3} = \frac{5}{12}$, $\frac{3}{4} + \frac{1}{3} = \frac{13}{12}$). $0 \le x \le 1$인 실수 $x$는 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $x < \frac{7}{12}$이거나 $\frac{7}{12} \le x$입니다. 앞의 경우 $-\frac{1}{12} < 0 \le x$이므로 첫째 공에 들고, 뒤의 경우 $\frac{5}{12} < \frac{7}{12} \le x \le 1 < \frac{13}{12}$이므로 둘째 공에 듭니다. 그래서 이 $\varepsilon$에서는 두 점이면 됩니다.

이것만으로 $[0, 1]$이 완전유계라고 할 수는 없습니다. 정의는 모든 $\varepsilon > 0$에서 이런 유한집합을 요구하기 때문입니다. $[0, 1]$은 유계이므로 (5)에 의해 완전유계이고, 그래서 아무리 작은 $\varepsilon$에서도 유한 개의 점으로 덮을 수 있습니다.
:::

:::counterexample[위상동형인 두 공간의 완전유계가 다를 수 있다]
$\mathbb{R}$과 열린구간 $I = (-1, 1)$에 보통 거리와 그 부분공간 거리를 줍니다. [[homeomorphism-examples]]의 (2)에 의해 두 공간은 위상동형입니다([[metric-subspace-topology]]의 (2)에 의해 $I$의 부분공간 거리의 거리위상은 보통 위상의 부분공간 위상입니다).

$I$의 원소 $x$는 $-1 < x < 1$이므로 $-1$은 $I$의 하계, $1$은 상계이고, $I$는 [[upper-bound-and-supremum]]의 뜻으로 유계입니다. (5)에 의해 $I$는 $\mathbb{R}$에서 완전유계이고, (3)에 의해 $(I, d_I)$는 완전유계 거리공간입니다. 반면 $\mathbb{R}$은 유계가 아닙니다. 유계라면 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (2)에 의해 $\mathbb{R}$의 상계 $t$가 있는데, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $t < n$인 자연수 $n$이 있고 $n$은 실수이기 때문입니다. 그래서 (1)에 의해 $\mathbb{R}$은 완전유계가 아닙니다. 위상동형인 두 공간은 둘 다 콤팩트이거나 둘 다 콤팩트가 아니지만([[compact-space]]의 (7)의 (ii)), 완전유계인지는 위상만으로 정해지지 않고 거리에 달려 있습니다.
:::

## 확인 질문

:::check[$S$와 $T$가 거리공간 $X$에서 완전유계이면 $S \cup T$도 완전유계인가?]
그렇습니다. $\varepsilon > 0$에서 $S \subseteq \bigcup \{B(x, \varepsilon) : x \in F_1\}$, $T \subseteq \bigcup \{B(x, \varepsilon) : x \in F_2\}$인 $X$의 유한 부분집합 $F_1$, $F_2$를 잡으면, [[disjoint-union-count]]의 (3)에 의해 $F_1 \cup F_2$는 유한집합입니다. $S$나 $T$의 원소 $y$는 $d(x, y) < \varepsilon$인 $x \in F_1$이나 $x \in F_2$를 가지므로 그 $x$는 $F_1 \cup F_2$에 속하고, [[family-of-sets]]의 (9)에 의해 $y \in \bigcup \{B(x, \varepsilon) : x \in F_1 \cup F_2\}$입니다. 따라서 $F_1 \cup F_2$가 $S \cup T$에 대하여 같은 일을 합니다.
:::

:::check[$\mathbb{R}$의 부분집합 $Q = \{q \in \mathbb{Q} : 0 \le q \le 1\}$은 완전유계인가? 콤팩트 부분집합인가?]
$0$이 하계이고 $1$이 상계이므로 $Q$는 유계이고, (5)에 의해 완전유계입니다. 그러나 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (3)의 (iv)에 의해 $Q$는 콤팩트 부분집합이 아닙니다. 그래서 (4)의 거꾸로는 성립하지 않을 수 있습니다. $Q$처럼 완전유계이지만 콤팩트가 아닌 집합이 있습니다.
:::
