---
title: 튜브 보조정리와 두 콤팩트 공간의 곱
title_en: The Tube Lemma and the Product of Two Compact Spaces
aliases: [튜브 보조정리, tube lemma, 콤팩트 공간의 곱, product of compact spaces, 평면의 하이네–보렐 정리, Heine–Borel theorem in the plane]
kind: theorem
field: topology
msc: ["54D30", "54B10"]
level: undergrad
summary: 콤팩트 공간을 한 인자로 하는 곱에서 한 점 위의 단면을 품은 열린집합은 그 점의 근방 위의 튜브를 품는다. 두 콤팩트 공간의 곱은 콤팩트이고, 두 인자가 공집합이 아니면 거꾸로도 성립한다. 콤팩트 부분집합의 곱과 ℝ × ℝ 의 하이네–보렐 정리를 얻는다.
requires: [set, subset, set-operations, cartesian-product, family-of-sets, real-order-axioms, order-properties-of-reals, absolute-value, interval, topological-space, closed-set, neighborhood, subspace-topology, product-topology, maps-into-a-product, metric-space-examples, open-ball, open-set-in-metric-space, topology-examples, standard-topology-on-reals, max-metric-and-product-topology, open-and-closed-sets-of-reals, continuous-map, compact-space, closed-subset-of-compact, continuous-image-of-compact, closed-interval-is-compact, compact-metric-closed-and-bounded]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness 절의 Lemma [The tube lemma] 와 증명, Theorem tikhonov-theorem 과 증명, Remark, content/compactness.tex:89–115; Compactness in ℝⁿ 절의 Theorem heine-borel, 196–204"
    checked: original
    note: "(1)의 (i)은 출처의 튜브 보조정리(89–91)와 같은 진술이다. '튜브'라는 이름은 출처가 따옴표를 쳐서 쓴 말(\"tube\")이다. 출처의 증명(92–94)은 y ∈ Y 마다 (x₀, y) 를 품은 U_y × V_y ⊆ N 을 잡고, {x₀} × Y 가 콤팩트라는 것(y 를 (x₀, y) 로 보내는 함수의 상)으로 유한 개 y₁, …, y_n 을 골라 W = ⋂U_{y_i} 로 둔다. 이 항목은 'x₀ ∈ W, W × S 가 조건을 만족하는 열린 W 가 있다'를 만족하는 S 전체의 집합족에 compact-space 의 (1)을 써서 점마다 U_y 를 고르지 않는다. (1)의 (ii)(덮개판)는 이 항목이 (2)의 증명에 쓰려고 둔 것이다. (2)와 (3)은 출처 Theorem tikhonov-theorem(96–99, 유한 개의 공간의 곱이 콤팩트인 것은 정확히 모든 인자가 콤팩트일 때)을 두 공간으로 좁힌 것이다. 출처의 진술은 'if and only if' 이고, 인자 가운데 공집합이 있는 경우를 따로 적지 않는다. 출처의 첫 방향 증명(101)은 각 인자가 사영의 상이라고 적는다. 이 항목의 (3)은 두 인자가 공집합이 아니라는 가정을 두고(그때 사영이 전사이다), 그 가정을 뺄 수 없는 예를 함께 적는다. 출처의 둘째 방향 증명(103–111)은 x ∈ X 마다 유한 개 U_i^x 와 W_x 를 고르고 유한 개 x_j 를 고른다. 이 항목은 (1)의 (ii)와 compact-space 의 (1)로 고르지 않는다. 출처 Remark(113–115)는 임의 개수의 곱에서도 성립한다는 티호노프 정리를 언급하고, 이 항목은 두 공간만 다룬다. (5)는 출처 Theorem heine-borel(196–199)을 n = 2 로 좁힌 것이다. 출처는 [−K, K]ⁿ 이 콤팩트라는 것을 tikhonov-theorem 으로 얻고, 이 항목은 (4)와 product-topology 의 (7)로 얻는다."
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Theorem 7.4.14 와 n = 2 의 증명 (p.284–285)"
    checked: original
    note: "출처 Theorem 7.4.14(p.284)는 ℝⁿ 의 닫히고 유계인 부분집합이 콤팩트라고 진술하고, n = 2 의 증명(p.284–285)은 K 를 B = [a, b] × [c, d] 안에 넣은 뒤 B 의 수열에서 성분마다 수렴하는 부분수열을 두 번 잡아 B 가 (수열) 콤팩트임을 보인다. 이 항목의 (5)는 같은 진술을 ℝ × ℝ 에 대해 열린 덮개로 증명하고, [−r, r] × [−r, r] 의 콤팩트는 (4)로 얻는다. 출처 Definition 7.1.12 의 유계와 이 사이트의 유계의 관계는 compact-metric-closed-and-bounded 의 note 에 있다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 곳 3군데, 근거 없는 연속 주장, 단원 글의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 근방은 [[topological-space]], [[neighborhood]]의 것이고, 곱위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$와 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이다. 콤팩트 공간, 콤팩트 부분집합, $\mathcal{K}_{\mathcal{U}}$는 [[compact-space]]의 것이다. 아래에서 $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$는 위상공간이고 $X_1 \times X_2$에는 곱위상을 준다.

1. (튜브 보조정리) $(X_2, \mathcal{T}_2)$가 콤팩트이고 $x_0 \in X_1$이라 하자.
   - (i) $N$이 $X_1 \times X_2$의 열린집합이고 $\{x_0\} \times X_2 \subseteq N$이면, $W \times X_2 \subseteq N$인 $x_0$의 근방 $W$가 있다. 집합 $W \times X_2$를 **튜브**(tube)라 부른다.
   - (ii) (덮개판) $\mathcal{U}$가 $X_1 \times X_2$의 열린집합들의 집합족이고 $\{x_0\} \times X_2 \subseteq \bigcup \mathcal{U}$이면, $W \times X_2 \in \mathcal{K}_{\mathcal{U}}$인 $x_0$의 근방 $W$가 있다. 곧 $W \times X_2$는 $\mathcal{U}$의 유한 부분족으로 덮인다.
2. (두 콤팩트 공간의 곱) $(X_1, \mathcal{T}_1)$과 $(X_2, \mathcal{T}_2)$가 콤팩트이면 $X_1 \times X_2$는 콤팩트이다.
3. (거꾸로) $X_1 \ne \emptyset$, $X_2 \ne \emptyset$이고 $X_1 \times X_2$가 콤팩트이면 $(X_1, \mathcal{T}_1)$과 $(X_2, \mathcal{T}_2)$는 콤팩트이다. 가정 $X_1 \ne \emptyset$, $X_2 \ne \emptyset$은 뺄 수 없다. $X_2 = \emptyset$이면 $X_1 \times X_2 = \emptyset$은 어떤 $(X_1, \mathcal{T}_1)$에 대해서도 콤팩트이고, 예컨대 보통 위상을 준 $\mathbb{R}$은 콤팩트가 아니다.
4. (콤팩트 부분집합의 곱) $A$가 $X_1$의 콤팩트 부분집합이고 $B$가 $X_2$의 콤팩트 부분집합이면 $A \times B$는 $X_1 \times X_2$의 콤팩트 부분집합이다.
5. ($\mathbb{R} \times \mathbb{R}$의 하이네–보렐 정리) $\mathbb{R} \times \mathbb{R}$에 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 보통 위상을 주고, 유계는 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 뜻으로 최대 거리 $d_{\max}$에 대해 말한다. $K \subseteq \mathbb{R} \times \mathbb{R}$에 대하여 다음이 성립한다.
   - (i) $K$가 $d_{\max}$로 유계인 것은 정확히, 닫힌구간 $I = [-r, r]$에 대하여 $K \subseteq I \times I$인 실수 $r > 0$이 있을 때이다.
   - (ii) $K$가 $\mathbb{R} \times \mathbb{R}$의 콤팩트 부분집합인 것은 정확히 $K$가 닫힌집합이고 $d_{\max}$로 유계일 때이다.
:::

:::english
Topological spaces, open sets and neighborhoods are as in the entries on topological spaces and neighborhoods, and the product topology $\mathcal{T}_1 \otimes \mathcal{T}_2$ and the projections $\pi_1$, $\pi_2$ are as in the entry on the product topology of two spaces. Compact spaces, compact subsets and $\mathcal{K}_{\mathcal{U}}$ are as in the entry on open covers and compact spaces. Below, $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are topological spaces and $X_1 \times X_2$ carries the product topology.

1. (The tube lemma) Let $(X_2, \mathcal{T}_2)$ be compact and $x_0 \in X_1$.
   - (i) If $N$ is an open set of $X_1 \times X_2$ with $\{x_0\} \times X_2 \subseteq N$, then there is a neighborhood $W$ of $x_0$ with $W \times X_2 \subseteq N$. The set $W \times X_2$ is called a **tube**.
   - (ii) (Cover version) If $\mathcal{U}$ is a family of open sets of $X_1 \times X_2$ with $\{x_0\} \times X_2 \subseteq \bigcup \mathcal{U}$, then there is a neighborhood $W$ of $x_0$ with $W \times X_2 \in \mathcal{K}_{\mathcal{U}}$; that is, $W \times X_2$ is covered by a finite subfamily of $\mathcal{U}$.
2. (The product of two compact spaces) If $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are compact, then $X_1 \times X_2$ is compact.
3. (The converse) If $X_1 \ne \emptyset$, $X_2 \ne \emptyset$ and $X_1 \times X_2$ is compact, then $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are compact. The hypotheses $X_1 \ne \emptyset$, $X_2 \ne \emptyset$ cannot be dropped: if $X_2 = \emptyset$, then $X_1 \times X_2 = \emptyset$ is compact for every $(X_1, \mathcal{T}_1)$, while for example $\mathbb{R}$ with the standard topology is not compact.
4. (Products of compact subsets) If $A$ is a compact subset of $X_1$ and $B$ is a compact subset of $X_2$, then $A \times B$ is a compact subset of $X_1 \times X_2$.
5. (The Heine–Borel theorem for $\mathbb{R} \times \mathbb{R}$) Give $\mathbb{R} \times \mathbb{R}$ the standard topology of (2) of the entry on the max metric and the product topology, and speak of boundedness in the sense of the entry on compact sets in metric spaces, with respect to the max metric $d_{\max}$. For $K \subseteq \mathbb{R} \times \mathbb{R}$ the following hold.
   - (i) $K$ is bounded with respect to $d_{\max}$ exactly when there is a real number $r > 0$ with $K \subseteq I \times I$ for the closed interval $I = [-r, r]$.
   - (ii) $K$ is a compact subset of $\mathbb{R} \times \mathbb{R}$ exactly when $K$ is a closed set and is bounded with respect to $d_{\max}$.
:::

## 직관

$X_2$가 콤팩트이면 단면 $\{x_0\} \times X_2$는 "유한 개로 다룰 수 있는" 집합입니다. 단면의 점 $(x_0, y)$마다 그 점을 품은 열린 상자 $U \times V$가 $N$ 안에 있고, 상자들의 $V$ 쪽이 $X_2$를 덮으므로 유한 개의 상자로 단면이 덮입니다. 그 유한 개의 $U$ 쪽의 교집합 $W$는 여전히 $x_0$의 근방이고, $W \times X_2$는 그 상자들 안에 듭니다. 이것이 튜브 보조정리입니다. 단면을 둘러싼 열린집합은 단면만이 아니라 그 둘레의 굵기가 있는 관(튜브) 하나를 품습니다.

이 강의는 "점마다 상자를 하나씩 고르는" 단계를 쓰지 않습니다. 대신 $X_2$의 부분집합 $S$ 가운데 "$x_0$을 품고 $W \times S \subseteq N$인 열린 $W$가 있는 것" 전체를 생각합니다. 두 집합 $S_1$, $S_2$에 대한 $W_1$, $W_2$가 있으면 $W_1 \cap W_2$가 $S_1 \cup S_2$에 대한 것이 되므로, [[compact-space]]의 (1)이 유한 개의 합집합까지 넓혀 줍니다. (2)는 같은 생각을 두 번 씁니다. 먼저 $X_1$의 점마다 그 위의 튜브가 유한 개로 덮이고((1)의 (ii)), 그 튜브들의 밑면들이 $X_1$을 덮으므로 다시 유한 개로 줄입니다.

비유하자면 $X_1 \times X_2$는 가로 $X_1$, 세로 $X_2$인 천이고, 단면 $\{x_0\} \times X_2$는 세로로 그은 실 한 가닥입니다. 세로 방향이 콤팩트하면 실을 덮는 천 조각들 가운데 유한 개면 되고, 그 조각들이 공통으로 가진 가로 폭만큼의 띠가 통째로 덮입니다. 세로 방향이 콤팩트하지 않으면 띠의 폭이 위로 갈수록 좁아져 0으로 다가갈 수 있습니다(아래 반례).

## 증명

:::idea
$x_0$을 품고 $W \times S$가 원하는 조건을 만족하는 열린 $W$가 있는 $S$ 전체가 두 집합의 합집합에 닫혀 있음을 보이고, $X_2$의 콤팩트성과 유한 합집합의 보조정리로 $S = X_2$까지 넓힌다. 같은 일을 $X_1$에서 한 번 더 한다.
:::

:::hint
$(W_1 \cap W_2) \times (S_1 \cup S_2) \subseteq (W_1 \times S_1) \cup (W_2 \times S_2)$를 [[product-topology|두 공간의 곱위상]]의 (1)의 곱집합 등식으로 확인합니다.
:::

:::hint
(2)에서는 $X_1$의 부분집합 $S$ 가운데 $S \times X_2 \in \mathcal{K}_{\mathcal{U}}$인 것 전체를 봅니다. (1)의 (ii)가 그것을 품는 근방이 각 점에 있다는 것을 줍니다.
:::

:::proof
"곱 (1)의 (c)"처럼 쓴 것은 [[product-topology|두 공간의 곱위상]]의 번호, "콤팩트 (2)의 (iv)"처럼 쓴 것은 [[compact-space]]의 번호, "근방 (2)"는 [[neighborhood]]의 번호이다.

먼저 쓸 곱집합 사실을 적는다. $W_1$, $W_2 \subseteq X_1$, $S_1$, $S_2 \subseteq X_2$이면
$$
\begin{aligned}
&(W_1 \cap W_2) \times (S_1 \cup S_2) \\
&\quad \subseteq (W_1 \times S_1) \cup (W_2 \times S_2)
\end{aligned}
$$
이다. 곱 (1)의 (e)에 의해 왼쪽은 $\bigl((W_1 \cap W_2) \times S_1\bigr) \cup \bigl((W_1 \cap W_2) \times S_2\bigr)$이고, $W_1 \cap W_2 \subseteq W_1$, $W_1 \cap W_2 \subseteq W_2$이므로 곱 (1)의 (c)에 의해 앞의 것은 $W_1 \times S_1$에, 뒤의 것은 $W_2 \times S_2$에 포함된다. 이것을 "(가)"라 부른다.

**(1).** (ii)를 먼저 보인다. $\mathcal{K}_{\mathcal{U}}$는 $X_1 \times X_2$의 집합족 $\mathcal{U}$에 대한 콤팩트 (2)의 것이다.
$X_2$의 부분집합 $S$ 가운데 $x_0 \in W$이고 $W \times S \in \mathcal{K}_{\mathcal{U}}$인 $W \in \mathcal{T}_1$이 있는 것 전체의 집합족을 $\mathcal{E}$라 하자. $W = X_1$은 $x_0$을 품는 열린집합이고 곱 (1)의 (b)에 의해 $X_1 \times \emptyset = \emptyset \in \mathcal{K}_{\mathcal{U}}$(콤팩트 (2)의 (i))이므로 $\emptyset \in \mathcal{E}$이다. $S_1$, $S_2 \in \mathcal{E}$이고 $W_1$, $W_2$가 각각 그 열린집합이면, 근방 (2)에 의해 $W_1 \cap W_2$는 $x_0$을 품는 열린집합이고, (가)와 콤팩트 (2)의 (ii), (iii)에 의해 $(W_1 \cap W_2) \times (S_1 \cup S_2) \in \mathcal{K}_{\mathcal{U}}$이다. 따라서 $S_1 \cup S_2 \in \mathcal{E}$이고, $\mathcal{E}$는 콤팩트 (1)의 가정을 만족한다.

$X_2$의 열린집합들의 집합족 $\mathcal{V} = \{V \in \mathcal{T}_2 : V \in \mathcal{E}\}$를 둔다. $y \in X_2$이면 $(x_0, y) \in \bigcup \mathcal{U}$이므로 $(x_0, y) \in G$인 $G \in \mathcal{U}$가 있다. $G$는 곱위상에서 열려 있으므로 곱 (3)의 (a)에서 (b)로 $x_0 \in U$, $y \in V$, $U \times V \subseteq G$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. 콤팩트 (2)의 (iv)에 의해 $U \times V \in \mathcal{K}_{\mathcal{U}}$이므로 $V \in \mathcal{E}$, 곧 $V \in \mathcal{V}$이고 $y \in V$이다. 따라서 $\bigcup \mathcal{V} = X_2$이고 $\mathcal{V}$는 $X_2$의 열린 덮개이다. $X_2$가 콤팩트이므로 $\bigcup \mathcal{F} = X_2$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있고, $\mathcal{F} \subseteq \mathcal{E}$이므로 콤팩트 (1)의 (i)에 의해 $X_2 \in \mathcal{E}$이다. 곧 $x_0 \in W$이고 $W \times X_2 \in \mathcal{K}_{\mathcal{U}}$인 열린집합 $W$가 있고, $W$는 $x_0$의 근방이다.

(i) $\mathcal{U} = \{N\}$으로 두면 $N$은 열린집합이고 [[family-of-sets]]의 (3)에 의해 $\bigcup \{N\} = N \supseteq \{x_0\} \times X_2$이다. (ii)에 의해 $W \times X_2 \subseteq \bigcup \mathcal{F}$인 $\{N\}$의 유한 부분족 $\mathcal{F}$와 $x_0$의 근방 $W$가 있다. $\mathcal{F}$는 $\emptyset$이거나 $\{N\}$이므로 $\bigcup \mathcal{F} \subseteq N$이고, $W \times X_2 \subseteq N$이다.

**(2).** $\mathcal{U}$가 $X_1 \times X_2$의 열린 덮개라 하자.
$X_1$의 부분집합 $S$ 가운데 $S \times X_2 \in \mathcal{K}_{\mathcal{U}}$인 것 전체의 집합족을 $\mathcal{E}'$이라 하자. 곱 (1)의 (b)에 의해 $\emptyset \times X_2 = \emptyset \in \mathcal{K}_{\mathcal{U}}$이므로 $\emptyset \in \mathcal{E}'$이다. 곱 (1)의 (e)에 의해 $(S_1 \cup S_2) \times X_2 = (S_1 \times X_2) \cup (S_2 \times X_2)$이므로 콤팩트 (2)의 (ii)에 의해 $\mathcal{E}'$은 두 원소의 합집합에 닫혀 있다. $X_1$의 열린집합들의 집합족 $\mathcal{W} = \{W \in \mathcal{T}_1 : W \in \mathcal{E}'\}$를 둔다. $x \in X_1$이면 $\{x\} \times X_2 \subseteq X_1 \times X_2 = \bigcup \mathcal{U}$이므로 (1)의 (ii)에 의해 $x \in W$이고 $W \times X_2 \in \mathcal{K}_{\mathcal{U}}$인 열린 $W$가 있다. 이 $W$는 $\mathcal{W}$의 원소이다. 따라서 $\mathcal{W}$는 $X_1$의 열린 덮개이고, $X_1$이 콤팩트이므로 $\bigcup \mathcal{F} = X_1$인 유한 부분족 $\mathcal{F} \subseteq \mathcal{W} \subseteq \mathcal{E}'$이 있다. 콤팩트 (1)의 (i)에 의해 $X_1 \in \mathcal{E}'$, 곧 $X_1 \times X_2 \in \mathcal{K}_{\mathcal{U}}$이고, 콤팩트 (2)의 (v)에 의해 $\mathcal{U}$는 유한 부분덮개를 갖는다.

**(3).** [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 $\pi_1$, $\pi_2$는 연속이고, $X_2 \ne \emptyset$이므로 곱 (6)의 (c)에 의해 $\pi_1 : X_1 \times X_2 \to X_1$은 전사이며, $X_1 \ne \emptyset$이므로 $\pi_2$도 전사이다. [[continuous-image-of-compact]]의 (1)의 끝 문장에 의해 $X_1$과 $X_2$는 콤팩트이다. $X_2 = \emptyset$이면 곱 (1)의 (b)에 의해 $X_1 \times X_2 = \emptyset$이고, 곱 (9)의 (i)에 의해 그 위상은 $\{\emptyset\}$이므로 콤팩트 (8)의 (i)에 의해 콤팩트이다. 보통 위상을 준 $\mathbb{R}$은 콤팩트 (8)의 (vi)에 의해 콤팩트가 아니다.

**(4).** 곱 (7)에 의해 $X_1 \times X_2$의 곱위상을 $A \times B$로 줄인 부분공간 위상은 $(\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B)$이다. $(A, \mathcal{T}_1|_A)$와 $(B, \mathcal{T}_2|_B)$는 콤팩트 공간이므로 (2)에 의해 $(A \times B, (\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B))$는 콤팩트이고, 곧 $A \times B$는 $X_1 \times X_2$의 콤팩트 부분집합이다.

**(5).** $o = (0, 0)$이라 하자. [[metric-space-examples]]의 (5)에 의해 점 $(x, y)$에서 $d_{\max}((x, y), o) = \max\{|x|, |y|\}$이다.

(i) $K$가 유계이면 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (1)의 (ii)에 의해 $K \subseteq B_{d_{\max}}(o, r)$인 $r > 0$이 있다. $(x, y) \in K$이면 $\max\{|x|, |y|\} < r$이고 [[absolute-value]]의 (10)에 의해 $|x| < r$, $|y| < r$이므로, 같은 항목의 (7)에 의해 $-r \le x \le r$, $-r \le y \le r$이다. 곧 $K \subseteq I \times I$이다. 거꾸로 $K \subseteq I \times I$이면 $(x, y) \in K$에서 [[absolute-value]]의 (7)에 의해 $|x| \le r$, $|y| \le r$이고, (10)에 의해 $\max\{|x|, |y|\} \le r < 2r$이다([[order-properties-of-reals]]의 (2)의 (iv)). 곧 $K \subseteq B_{d_{\max}}(o, 2r)$이고 $K$는 유계이다.

(ii) [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)에 의해 $\mathbb{R} \times \mathbb{R}$의 보통 위상은 $d_{\max}$의 거리위상이다. $K$가 콤팩트 부분집합이면 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (3)에 의해 $K$는 $d_{\max}$에서 닫혀 있고 유계이며, [[closed-set]]의 (6)에 의해 보통 위상에서 닫혀 있다. 거꾸로 $K$가 닫혀 있고 유계이면 (i)에 의해 $K \subseteq I \times I$인 $r > 0$이 있다. $-r < r$이므로 [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $I$는 $\mathbb{R}$의 콤팩트 부분집합이고, (4)에 의해 $I \times I$는 $\mathbb{R} \times \mathbb{R}$의 콤팩트 부분집합이다. 여기서 $\mathbb{R} \times \mathbb{R}$의 위상은 보통 위상 둘의 곱위상이다(같은 항목의 (2)). $K = (I \times I) \cap K$이고 $K$는 닫힌집합이므로 [[closed-subset-of-compact]]의 (2)에 의해 $K$는 콤팩트 부분집합이다.
:::

## 예시와 반례

:::example[닫힌 정사각형과 선분]
$[0, 1] \times [0, 1]$은 [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)과 (4)에 의해 $\mathbb{R} \times \mathbb{R}$의 콤팩트 부분집합입니다. $[0, 1] \times \{0\}$도 같은 항목의 (2)에 의해 $\{0\}$이 콤팩트이므로 (4)에 의해 콤팩트 부분집합입니다. 반면 $[0, 1] \times \mathbb{R}$은 $\mathbb{R} \times \mathbb{R}$의 부분공간으로서 $[0, 1]$과 $\mathbb{R}$의 곱위상을 가지므로(곱 (7)) (3)에 의해 콤팩트가 아닙니다. $[0, 1]$과 $\mathbb{R}$이 공집합이 아닌데 $\mathbb{R}$이 콤팩트가 아니기 때문입니다.
:::

:::counterexample[콤팩트가 아닌 인자 위에서 튜브가 없는 예]
(1)에서 $X_2$가 콤팩트라는 가정은 뺄 수 없습니다. $X_1 = X_2 = \mathbb{R}$, $x_0 = 0$이라 하고 $N = \{(x, y) \in \mathbb{R} \times \mathbb{R} : |xy| < 1\}$로 둡니다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (3)에 의해 $m(x, y) = xy$로 정한 곱셈 $m : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 연속이고 열린구간 $(-1, 1)$은 열린집합이므로([[open-and-closed-sets-of-reals]]의 (1)), [[continuous-map|위상공간 사이의 연속함수]]의 정의에 의해 $N = m^{-1}((-1, 1))$은 열린집합입니다([[absolute-value]]의 (7)에 의해 $|xy| < 1$은 $-1 < xy < 1$과 같습니다). 모든 $y$에서 $|0 \cdot y| = 0 < 1$이므로 $\{0\} \times \mathbb{R} \subseteq N$입니다. 그러나 $0$의 근방 $W$는 어떤 $\delta > 0$에 대하여 $(-\delta, \delta)$를 품고([[neighborhood]]의 (4)의 (b)와 [[open-ball]]의 (5)), $x = \delta/2 \in W$와 $y = 2\delta^{-1}$에서 $xy = 1$이므로 $(x, y) \in W \times \mathbb{R}$이지만 $(x, y) \notin N$입니다. 곧 $N$은 튜브를 품지 않습니다. $N$의 가로 폭은 $|y|$가 커질수록 $|y|^{-1}$로 좁아집니다.
:::

## 확인 질문

:::check[$X_2 = \{q\}$가 한 점 공간이면 $X_1 \times X_2$가 콤팩트인 것은 언제인가?]
정확히 $X_1$이 콤팩트일 때입니다. $X_1$이 콤팩트이면 한 점 공간은 유한하므로 [[compact-space]]의 (8)의 (ii)에 의해 콤팩트이고, (2)에 의해 곱이 콤팩트입니다. 거꾸로 곱이 콤팩트이고 $X_1 \ne \emptyset$이면 (3)에 의해 $X_1$이 콤팩트이고, $X_1 = \emptyset$이면 $X_1$은 [[compact-space]]의 (8)의 (i)에 의해 콤팩트입니다. [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (4)의 (iii)의 $X_1 \simeq X_1 \times \{q\}$와 [[compact-space]]의 (7)의 (ii)로 보아도 같습니다.
:::

:::check[$N = X_1 \times X_2$이면 (1)의 (i)의 $W$로 무엇을 잡을 수 있는가?]
$W = X_1$로 잡을 수 있습니다. $X_1$은 열린집합이고 $x_0$을 품으며 $X_1 \times X_2 \subseteq N$입니다. 이 경우에는 $X_2$가 콤팩트라는 가정을 쓰지 않습니다. (1)이 하는 일은 $N$이 작아서 이렇게 할 수 없을 때에도 $x_0$ 둘레의 열린 $W$를 찾는 것입니다.
:::
