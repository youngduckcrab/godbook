---
title: 곱의 폐포와 내부
title_en: Closure and Interior of a Product
aliases: [곱의 폐포, closure of a product, 곱의 내부, interior of a product, 곱의 경계, 닫힌집합의 곱]
kind: proposition
field: topology
msc: ["54B10"]
level: undergrad
summary: 두 공간의 곱에서 곱집합 A × B 의 폐포는 폐포의 곱이고 내부는 내부의 곱이며, 경계는 (∂A × B̄) ∪ (Ā × ∂B) 이다. 그래서 공집합이 아닌 곱집합이 닫혀(열려) 있는 것은 두 인자가 닫혀(열려) 있을 때이다. 닫힌구간의 곱과 열린구간의 곱의 폐포·내부·경계를 구한다.
requires: [set, subset, set-operations, cartesian-product, topological-space, closed-set, neighborhood, interior-and-closure, boundary, boundary-closure-and-cluster-points, closure-by-neighborhoods, product-topology, interval, closure-in-a-metric-space, open-and-closed-sets-of-reals, standard-topology-on-reals, max-metric-and-product-topology, order-properties-of-reals, dense-subset, dense-subsets-of-the-reals, topology-examples]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Proposition closures-of-products, content/topological-spaces.tex:628–639; Homeomorphisms 장 The quotient topology 절의 사각형 예, content/homeomorphisms.tex:236"
    checked: original
    note: "(1)은 출처 Proposition closures-of-products(임의 개수의 곱에서 ∏ Ā_i = closure(∏ A_i))를 두 공간으로 좁힌 것이다. 출처의 증명(635–639)은 앞 방향에서 모든 i 에 대하여 y_i ∈ U_i ∩ A_i 를 잡고, 뒤 방향에서 π_i⁻¹(V_i) 를 근방으로 쓴다. 이 항목은 앞 방향을 곱집합 등식 (U × V) ∩ (A × B) = (U ∩ A) × (V ∩ B) 와 '곱이 공집합인 것은 한쪽이 공집합일 때'로 보이고, 뒤 방향은 U × X₂ 꼴의 기저 원소로 보인다. (2)–(4)의 증명은 이 항목이 쓴 것이다. 반례 '경계가 경계의 곱과 다른 예'의 정사각형 [0, 1] × [0, 1] 은 출처 homeomorphisms.tex:236 이 마주 보는 변을 붙이는 데 쓰는 사각형 X = [0, 1] × [0, 1] 과 같은 대상이다."
  - ref: lebl-basic-analysis
    loc: "0.3절 Definition 0.3.10 과 그 아래 예, p.14"
    checked: original
    note: "출처는 곱집합의 예로 [0, 1] × [0, 1] 을 '꼭짓점이 (0, 0), (0, 1), (1, 0), (1, 1) 인 정사각형으로 둘러싸인 평면의 부분집합'이라 적는다. 반례 '경계가 경계의 곱과 다른 예'는 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간, 닫힌집합, 근방은 [[topological-space]], [[closed-set]], [[neighborhood]]의 것이고, 내부 $\operatorname{Int} A$, 폐포 $\overline{A}$, 경계 $\partial A$는 [[interior-and-closure]]와 [[boundary]]의 것이다. 곱위상과 그 기저 $\mathcal{B}$는 [[product-topology|두 공간의 곱위상]]의 것이다. 아래에서 $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$는 위상공간이고 $X_1 \times X_2$에는 곱위상을 주며, $A \subseteq X_1$, $B \subseteq X_2$이다. $\overline{A}$, $\operatorname{Int} A$, $\partial A$는 $X_1$에서의 것, $\overline{B}$, $\operatorname{Int} B$, $\partial B$는 $X_2$에서의 것, $\overline{A \times B}$, $\operatorname{Int}(A \times B)$, $\partial(A \times B)$는 $X_1 \times X_2$에서의 것이다.

1. (폐포) $\overline{A \times B} = \overline{A} \times \overline{B}$이다.
2. (내부) $\operatorname{Int}(A \times B) = \operatorname{Int} A \times \operatorname{Int} B$이다.
3. (경계) $\partial(A \times B) = (\partial A \times \overline{B}) \cup (\overline{A} \times \partial B)$이다. 이것은 $\partial A \times \partial B$와 다를 수 있다.
4. (닫힌 곱과 열린 곱)
   - (i) $A$, $B$가 닫혀 있으면 $A \times B$는 닫혀 있다. 거꾸로 $A \times B$가 닫혀 있고 $A \times B \ne \emptyset$이면 $A$와 $B$는 닫혀 있다.
   - (ii) $A$, $B$가 열려 있으면 $A \times B$는 열려 있다. 거꾸로 $A \times B$가 열려 있고 $A \times B \ne \emptyset$이면 $A$와 $B$는 열려 있다.
   - (iii) $A \times B = \emptyset$이면 $A \times B$는 열려 있고 닫혀 있지만, 이때 $A$, $B$가 닫혀 있거나 열려 있을 필요는 없다. 예컨대 $A = \emptyset$이면 $B$가 $X_2$의 어떤 부분집합이어도 $A \times B = \emptyset$이다.
5. (실수의 구간의 곱) $\mathbb{R} \times \mathbb{R}$에 보통 위상을 주고 $a < b$, $c < d$라 하자. 닫힌구간 $I' = [a, b]$, $J' = [c, d]$와 열린구간 $I = (a, b)$, $J = (c, d)$에 대하여 $I' \times J'$은 닫혀 있고 $I \times J$는 열려 있으며, $\overline{I \times J} = I' \times J'$, $\operatorname{Int}(I' \times J') = I \times J$, $\partial(I' \times J') = \partial(I \times J) = (\{a, b\} \times J') \cup (I' \times \{c, d\})$이다.
:::

:::english
Topological spaces, closed sets and neighborhoods are as in the corresponding entries; interior $\operatorname{Int} A$, closure $\overline{A}$ and boundary $\partial A$ are as in the entries on interior and closure and on the boundary. The product topology and its basis $\mathcal{B}$ are as in the entry on the product topology of two spaces. Throughout, $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$ are topological spaces, $X_1 \times X_2$ carries the product topology, and $A \subseteq X_1$, $B \subseteq X_2$. $\overline{A}$, $\operatorname{Int} A$, $\partial A$ are taken in $X_1$; $\overline{B}$, $\operatorname{Int} B$, $\partial B$ in $X_2$; and $\overline{A \times B}$, $\operatorname{Int}(A \times B)$, $\partial(A \times B)$ in $X_1 \times X_2$.

1. (Closure) $\overline{A \times B} = \overline{A} \times \overline{B}$.
2. (Interior) $\operatorname{Int}(A \times B) = \operatorname{Int} A \times \operatorname{Int} B$.
3. (Boundary) $\partial(A \times B) = (\partial A \times \overline{B}) \cup (\overline{A} \times \partial B)$. This may differ from $\partial A \times \partial B$.
4. (Closed and open products)
   - (i) If $A$, $B$ are closed, then $A \times B$ is closed. Conversely, if $A \times B$ is closed and $A \times B \ne \emptyset$, then $A$ and $B$ are closed.
   - (ii) If $A$, $B$ are open, then $A \times B$ is open. Conversely, if $A \times B$ is open and $A \times B \ne \emptyset$, then $A$ and $B$ are open.
   - (iii) If $A \times B = \emptyset$, then $A \times B$ is open and closed, but $A$ and $B$ need not be closed or open. For example, if $A = \emptyset$, then $A \times B = \emptyset$ for every subset $B$ of $X_2$.
5. (Products of real intervals) Give $\mathbb{R} \times \mathbb{R}$ the standard topology and let $a < b$, $c < d$. For the closed intervals $I' = [a, b]$, $J' = [c, d]$ and the open intervals $I = (a, b)$, $J = (c, d)$, the set $I' \times J'$ is closed and $I \times J$ is open, and $\overline{I \times J} = I' \times J'$, $\operatorname{Int}(I' \times J') = I \times J$, $\partial(I' \times J') = \partial(I \times J) = (\{a, b\} \times J') \cup (I' \times \{c, d\})$.
:::

## 직관

곱위상의 기저 원소는 직사각형 $U \times V$이고, 직사각형이 $A \times B$와 만나는 것은 두 변이 각각 $A$, $B$와 만날 때입니다. 그래서 점 $(x, y)$가 $A \times B$에 "얼마든지 가까운" 것은 $x$가 $A$에, $y$가 $B$에 각각 얼마든지 가까운 것과 같고, 폐포는 좌표마다 취하면 됩니다((1)). 직사각형이 $A \times B$ 안에 들어가는 것도 두 변이 각각 들어가는 것과 같으므로 내부도 좌표마다 취합니다((2)).

경계는 그렇지 않을 수 있습니다. 정사각형 $[0, 1] \times [0, 1]$의 경계는 네 변 전체인데, $\partial [0, 1] \times \partial [0, 1]$은 네 꼭짓점뿐입니다. 경계의 점은 한 좌표가 경계에 있고 다른 좌표는 폐포 어디에 있어도 되는 점입니다((3)). 공집합은 따로 조심해야 합니다. 곱의 한쪽이 비면 곱 전체가 비어서 열려 있기도 하고 닫혀 있기도 하므로, 그것만으로는 다른 쪽이 열려 있는지 닫혀 있는지 알 수 없습니다((4)의 (iii)).

## 증명

:::idea
폐포는 기저 원소로 판정하고([[closure-by-neighborhoods|근방으로 본 폐포]]의 (2)), 내부도 기저 원소로 판정한다(같은 항목의 (3)). 곱집합 등식 $(U \times V) \cap (A \times B) = (U \cap A) \times (V \cap B)$와 "곱이 공집합인 것은 한쪽이 공집합일 때"가 핵심이다. 경계는 폐포에서 내부를 뺀 것이다.
:::

:::hint
$(x, y) \in \overline{A} \times \overline{B}$이고 $x \in U$, $y \in V$이면 $U \cap A$와 $V \cap B$는 둘 다 공집합이 아닙니다.
:::

:::proof
[[product-topology]]의 진술에서 쓰는 것: (1)의 (a)–(e) 곱집합 등식, (2) $\mathcal{B}$는 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저, (4) 열린집합의 곱은 열려 있고 닫힌집합의 곱은 닫혀 있다. 이 증명에서 "곱위상의 (n)"은 그 항목의 번호이다.

**(1).** $\overline{A} \times \overline{B} \subseteq$ 쪽: $(x, y) \in \overline{A} \times \overline{B}$라 하자. [[closure-by-neighborhoods]]의 (2)를 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저 $\mathcal{B}$에 쓰면, $(x, y) \in U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$마다 $(U \times V) \cap (A \times B) \ne \emptyset$임을 보이면 된다. $U$는 $x$의 근방이고 $x \in \overline{A}$이므로 [[closure-by-neighborhoods]]의 (1)에 의해 $U \cap A \ne \emptyset$이고, 같은 이유로 $V \cap B \ne \emptyset$이다. 곱위상의 (1)의 (a)와 (b)에 의해 $(U \times V) \cap (A \times B) = (U \cap A) \times (V \cap B) \ne \emptyset$이다.
$\overline{A \times B} \subseteq$ 쪽: 곱위상의 (4)에 의해 $\overline{A} \times \overline{B}$는 닫혀 있고, [[interior-and-closure]]의 (1)에 의해 $A \subseteq \overline{A}$, $B \subseteq \overline{B}$이므로 곱위상의 (1)의 (c)에 의해 $A \times B \subseteq \overline{A} \times \overline{B}$이다. [[interior-and-closure]]의 (2)에 의해 $\overline{A \times B} \subseteq \overline{A} \times \overline{B}$이다.

**(2).** $\operatorname{Int} A \times \operatorname{Int} B$는 곱위상의 (4)에 의해 열려 있고, $\operatorname{Int} A \subseteq A$, $\operatorname{Int} B \subseteq B$이므로 $A \times B$에 포함된다. [[interior-and-closure]]의 (2)에 의해 $\operatorname{Int} A \times \operatorname{Int} B \subseteq \operatorname{Int}(A \times B)$이다. 거꾸로 $(x, y) \in \operatorname{Int}(A \times B)$라 하자. [[closure-by-neighborhoods]]의 (3)을 기저 $\mathcal{B}$에 쓰면 $(x, y) \in U \times V$이고 $U \times V \subseteq A \times B$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. $(x, y) \in U \times V$이므로 $U \times V \ne \emptyset$이고, 곱위상의 (1)의 (c)에 의해 $U \subseteq A$, $V \subseteq B$이다. $x \in U$이고 $U$는 열려 있으므로 [[interior-and-closure]]의 (2)에 의해 $x \in U \subseteq \operatorname{Int} A$이고, 같은 방식으로 $y \in \operatorname{Int} B$이다.

**(3).** [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)과 (1), (2)에 의해
$$
\begin{aligned}
&\partial(A \times B) \\
&\quad = \overline{A \times B} - \operatorname{Int}(A \times B) \\
&\quad = (\overline{A} \times \overline{B}) - (\operatorname{Int} A \times \operatorname{Int} B)
\end{aligned}
$$
이다. [[interior-and-closure]]의 (1)에 의해 $\operatorname{Int} A \subseteq \overline{A}$, $\operatorname{Int} B \subseteq \overline{B}$이므로, 곱위상의 (1)의 (d)를 집합 $\overline{A}$, $\overline{B}$와 그 부분집합 $\operatorname{Int} A$, $\operatorname{Int} B$에 쓰면 이 차집합은 $\bigl((\overline{A} - \operatorname{Int} A) \times \overline{B}\bigr) \cup \bigl(\overline{A} \times (\overline{B} - \operatorname{Int} B)\bigr)$이고, 다시 [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)에 의해 $(\partial A \times \overline{B}) \cup (\overline{A} \times \partial B)$이다. $\partial A \times \partial B$와 다른 예는 (5)이다.

**(4).** (i) 앞 문장은 곱위상의 (4)이다. $A \times B$가 닫혀 있고 공집합이 아니라 하자. [[interior-and-closure]]의 (3)과 (1)에 의해 $\overline{A} \times \overline{B} = \overline{A \times B} = A \times B$이다. 곱위상의 (1)의 (c)를 $\overline{A} \times \overline{B} \subseteq A \times B$(공집합이 아니다)에 쓰면 $\overline{A} \subseteq A$, $\overline{B} \subseteq B$이고, $A \subseteq \overline{A}$, $B \subseteq \overline{B}$이므로 $\overline{A} = A$, $\overline{B} = B$이다. [[interior-and-closure]]의 (3)에 의해 $A$, $B$는 닫혀 있다.
(ii) 앞 문장은 곱위상의 (4)이다. $A \times B$가 열려 있고 공집합이 아니면 (2)와 [[interior-and-closure]]의 (3)에 의해 $\operatorname{Int} A \times \operatorname{Int} B = A \times B \ne \emptyset$이다. 곱위상의 (1)의 (c)를 $A \times B \subseteq \operatorname{Int} A \times \operatorname{Int} B$에 쓰면 $A \subseteq \operatorname{Int} A$, $B \subseteq \operatorname{Int} B$이고, [[interior-and-closure]]의 (1)과 (3)에 의해 $A$, $B$는 열려 있다.
(iii) $\emptyset$은 위상의 조건 (i)과 [[closed-set]]의 (1)에 의해 열려 있고 닫혀 있다. $A = \emptyset$이면 곱위상의 (1)의 (b)에 의해 $B$가 무엇이든 $A \times B = \emptyset$이다.

**(5).** [[standard-topology-on-reals]]의 (5)와 [[closed-set]]의 (6)에 의해 $\mathbb{R}$의 보통 위상의 열린집합, 닫힌집합, 폐포, 내부, 경계는 보통 거리의 것이고, [[closure-in-a-metric-space|거리공간의 폐포]]의 (6)에 의해 $\overline{I} = \overline{I'} = I'$, $\operatorname{Int} I = \operatorname{Int} I' = I$, $\partial I = \partial I' = \{a, b\}$이며 $J$, $J'$도 같다. [[max-metric-and-product-topology|최대 거리의 위상]]의 (2)에 의해 $\mathbb{R} \times \mathbb{R}$의 보통 위상은 $\mathcal{T}_d \otimes \mathcal{T}_d$이다. (4)의 (i), (ii)에 의해 $I' \times J'$은 닫혀 있고 $I \times J$는 열려 있으며, (1), (2)에 의해 $\overline{I \times J} = I' \times J'$, $\operatorname{Int}(I' \times J') = I \times J$이다. (3)에 의해 $\partial(I' \times J') = (\{a, b\} \times J') \cup (I' \times \{c, d\})$이고, $I \times J$에 대해서도 $\overline{I} = I'$, $\overline{J} = J'$이므로 같은 집합이다.
:::

## 예시와 반례

:::counterexample[경계가 경계의 곱과 다른 예]
(5)를 $a = c = 0$, $b = d = 1$로 쓰면 $\partial([0, 1] \times [0, 1]) = (\{0, 1\} \times [0, 1]) \cup ([0, 1] \times \{0, 1\})$입니다. [[order-properties-of-reals]]의 (8)에 의해 $0 < \tfrac{1}{2} < 1$이므로 $(\tfrac{1}{2}, 0)$은 $[0, 1] \times \{0, 1\}$에 속해 경계의 점입니다. 그러나 $\tfrac{1}{2} \notin \{0, 1\}$이므로 $(\tfrac{1}{2}, 0) \notin \partial [0, 1] \times \partial [0, 1] = \{0, 1\} \times \{0, 1\}$입니다. 따라서 이 경우 $\partial(A \times B) \ne \partial A \times \partial B$입니다.
:::

:::example[한쪽이 닫혀 있지 않은 곱]
$\mathbb{R} \times \mathbb{R}$(보통 위상)에서 $A = [0, 1]$, $B = (0, 1)$이면 (1)과 [[closure-in-a-metric-space|거리공간의 폐포]]의 (6)에 의해 $\overline{A \times B} = [0, 1] \times [0, 1]$이고, $A \times B$는 이것과 다르므로($(0, 0)$이 $A \times B$에 속하지 않습니다) 닫혀 있지 않습니다. (2)에 의해 $\operatorname{Int}(A \times B) = (0, 1) \times (0, 1)$이므로 열려 있지도 않습니다. 이것은 (4)가 말하는 대로, $B$가 닫혀 있지 않고 $A$가 열려 있지 않기 때문입니다.
:::

## 확인 질문

:::check[$X_1$, $X_2$에 밀착위상을 주고 $A$, $B$가 공집합이 아니면 $\overline{A \times B}$는 무엇인가?]
[[interior-and-closure]]의 (9)에 의해 $\overline{A} = X_1$, $\overline{B} = X_2$이므로 (1)에 의해 $\overline{A \times B} = X_1 \times X_2$입니다. 이것은 [[product-topology]]의 (8)에 의해 $X_1 \times X_2$의 위상이 밀착위상이고, 공집합이 아닌 집합의 폐포가 전체라는 것과도 맞습니다.
:::

:::check[$\mathbb{R} \times \mathbb{R}$(보통 위상)에서 $\mathbb{Q} \times \mathbb{R}$은 조밀한가?]
조밀합니다. [[dense-subsets-of-the-reals]]의 (2)와 [[dense-subset]]의 정의에 의해 $\overline{\mathbb{Q}} = \mathbb{R}$이고 [[interior-and-closure]]의 (8)에 의해 $\overline{\mathbb{R}} = \mathbb{R}$이므로, (1)에 의해 $\overline{\mathbb{Q} \times \mathbb{R}} = \mathbb{R} \times \mathbb{R}$입니다([[dense-subset]]의 정의).
:::
