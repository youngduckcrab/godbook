---
title: 붙이기 보조정리
title_en: Pasting Lemma
aliases: [pasting lemma, 붙임 보조정리, 연속함수 붙이기, gluing lemma]
kind: theorem
field: topology
msc: ["54C05"]
level: undergrad
summary: 공간이 열린집합들로 덮이거나 두 닫힌집합의 합집합이면, 각 조각으로의 제한이 연속인 함수는 연속이다. 두 조각 위의 함수가 겹치는 곳에서 같은 값을 가지면 둘을 이어 붙인 함수가 하나로 정해진다. 열린 조각과 닫힌 조각을 섞거나 닫힌 조각이 무한히 많으면 결론이 깨질 수 있다.
requires: [set, subset, set-operations, cartesian-product, function, adding-or-removing-an-element, image-and-preimage, family-of-sets, topological-space, topology-examples, closed-set, subspace-topology, continuous-map, continuity-criteria, subspace-and-continuity, homeomorphism, homeomorphism-examples, order-properties-of-reals, interval, open-and-closed-sets-of-reals, standard-topology-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "The subspace topology 절의 Lemma pasting-lemma 와 그 앞의 예, Remark pasting-closed, content/topological-spaces.tex:423–452"
    checked: original
    note: "출처의 진술(428–434)은 X = U ∪ V(U, V 열림), 함수 f : U → Y, g : V → Y 가 U ∩ V 에서 같을 때 f, g 가 연속인 것과 이어 붙인 h 가 연속인 것이 같다는 것이다. 이 항목은 이어 붙인 함수가 함수로 정해진다는 것을 (1)에서 함수의 정의(순서쌍의 집합 f ∪ g)로 보이고, 연속성은 (2), (3)에서 주어진 함수의 제한으로 진술한다. 출처의 증명(437–445)은 f⁻¹(W) = U ∩ U′, g⁻¹(W) = V ∩ V′ 인 열린 U′, V′ 를 잡아 h⁻¹(W) 를 계산한다. 이 항목은 열린 조각 안에서 열린집합이 X 에서도 열려 있다는 것(부분공간 위상의 (3)의 (ii))으로 증명하고, 열린집합의 족 전체로 진술한다. 출처의 Remark(447–452)는 '열린'을 '닫힌'으로 바꾸어도 같은 결과가 성립하고, U 와 V 를 무한히 많은 열린(또는 닫힌) 집합의 족으로 바꾸어도 성립한다고 적는다. 이 항목은 닫힌 조각을 두 개로 진술하고((3)), 닫힌 한 점 집합들로 덮은 반례로 닫힌 조각이 무한히 많은 경우를 따로 보인다. 예시 '두 반직선 위의 일차함수'는 출처 424–426 의 예((−∞, 1) 과 (−1, ∞) 에서 연속인 함수)와 같은 발상이다. Lebl, Basic Analysis I 연습문제 3.2.14(p.128, [−1, 0] 과 [0, 1] 위의 연속함수 f, g 가 f(0) = g(0) 이면 이어 붙인 h : [−1, 1] → ℝ 이 연속이다)는 (3)을 두 닫힌구간에서 묻는 것과 같고, 예시 '두 반직선 위의 일차함수'도 0 에서 만나는 두 닫힌 조각을 쓰는 같은 발상이다. 반례 '열린 조각과 닫힌 조각을 섞은 예'의 함수는 Lebl Example 3.2.10(p.125, x < 0 에서 −1, x ≥ 0 에서 1)과 같은 꼴의 계단 함수이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 함수의 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이고, 부분집합에는 [[subspace-topology]]의 부분공간 위상을 준다. 아래에서 $(X, \mathcal{T}_X)$와 $(W, \mathcal{T}_W)$는 위상공간이다.

1. (이어 붙인 함수) $A$, $B$가 $X = A \cup B$인 부분집합이고, $g : A \to W$, $h : B \to W$가 함수이며, 모든 $x \in A \cap B$에서 $g(x) = h(x)$라 하자. 그러면 순서쌍의 집합 $g \cup h$는 $X$에서 $W$로의 함수이고, $(g \cup h)|_A = g$, $(g \cup h)|_B = h$이다. 또 $f|_A = g$이고 $f|_B = h$인 함수 $f : X \to W$는 $g \cup h$ 하나뿐이다. $A \cap B = \emptyset$이면 값에 관한 조건은 따질 점이 없어 늘 성립한다.
2. (열린 조각) $\mathcal{U}$가 $X$의 열린집합들의 집합족이고 $\bigcup \mathcal{U} = X$이며, $f : X \to W$가 함수라 하자. 모든 $U \in \mathcal{U}$에서 $f|_U : U \to W$가 연속이면 $f$는 연속이다. 특히 $A$, $B$가 $X$의 열린집합이고 $X = A \cup B$이며 $f|_A$, $f|_B$가 연속이면 $f$는 연속이다.
3. (닫힌 조각 두 개) $A$, $B$가 $X$의 닫힌집합이고 $X = A \cup B$이며, $f : X \to W$가 함수라 하자. $f|_A$와 $f|_B$가 연속이면 $f$는 연속이다.
4. (거꾸로) $f : X \to W$가 연속이면 모든 $A \subseteq X$에서 $f|_A$는 연속이다. 따라서 (2), (3)의 가정 아래에서 $f$가 연속인 것은 정확히 각 조각으로의 제한이 연속일 때이고, (1)의 $g$, $h$에 대하여 $A$, $B$가 둘 다 열려 있거나 둘 다 닫혀 있으면 $g \cup h$가 연속인 것은 정확히 $g$와 $h$가 연속일 때이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, closed sets are as in the entry on closed sets, and continuity is as in the entry on continuous maps between topological spaces. The restriction $f|_A$ of a function is as in the entry on restrictions, and subsets are given the subspace topology of the entry on the subspace topology. Throughout, $(X, \mathcal{T}_X)$ and $(W, \mathcal{T}_W)$ are topological spaces.

1. (The pasted function) Let $A$, $B$ be subsets with $X = A \cup B$, let $g : A \to W$ and $h : B \to W$ be functions, and suppose $g(x) = h(x)$ for every $x \in A \cap B$. Then the set of ordered pairs $g \cup h$ is a function from $X$ to $W$, and $(g \cup h)|_A = g$, $(g \cup h)|_B = h$. Moreover, $g \cup h$ is the only function $f : X \to W$ with $f|_A = g$ and $f|_B = h$. If $A \cap B = \emptyset$, the condition on values holds vacuously.
2. (Open pieces) Let $\mathcal{U}$ be a family of open sets of $X$ with $\bigcup \mathcal{U} = X$, and let $f : X \to W$ be a function. If $f|_U : U \to W$ is continuous for every $U \in \mathcal{U}$, then $f$ is continuous. In particular, if $A$, $B$ are open sets of $X$ with $X = A \cup B$ and $f|_A$, $f|_B$ are continuous, then $f$ is continuous.
3. (Two closed pieces) Let $A$, $B$ be closed sets of $X$ with $X = A \cup B$, and let $f : X \to W$ be a function. If $f|_A$ and $f|_B$ are continuous, then $f$ is continuous.
4. (Conversely) If $f : X \to W$ is continuous, then $f|_A$ is continuous for every $A \subseteq X$. Hence, under the hypotheses of (2) or (3), $f$ is continuous exactly when its restrictions to the pieces are continuous; and for $g$, $h$ as in (1), if $A$ and $B$ are both open or both closed, then $g \cup h$ is continuous exactly when $g$ and $h$ are continuous.
:::

## 직관

천 조각을 꿰매어 옷을 만들 때, 조각마다 매끈하고 솔기에서 서로 맞으면 옷 전체가 매끈합니다. 함수로 말하면 "조각마다 연속"이 각 $f|_U$의 연속이고, "솔기에서 맞는다"가 (1)의 조건 $g(x) = h(x)$ ($x \in A \cap B$)입니다. (1)은 맞는 조각들이 실제로 하나의 함수가 된다는 것이고, (2), (3)은 그 함수가 연속이라는 것입니다.

조각이 열려 있으면 조각 안에서 열린집합이 전체에서도 열려 있으므로, 역상을 조각마다 구해 합치면 됩니다. 이 논증은 조각이 몇 개이든 됩니다. 닫힌 조각은 닫힌집합의 역상으로 같은 일을 하는데, 닫힌집합의 합집합이 닫혀 있다는 것은 유한 개에서만 보장되므로 조각이 두 개인 꼴로 싣습니다. 닫힌 조각이 무한히 많으면 결론이 깨질 수 있고, 열린 조각과 닫힌 조각을 섞어도 그렇습니다(아래 반례).

## 증명

:::idea
$f^{-1}(V)$를 조각마다 자르면 $f^{-1}(V) \cap U = (f|_U)^{-1}(V)$이다. 조각이 열려 있으면 이것이 $X$에서 열려 있고, 그 합집합이 $f^{-1}(V)$이다. 닫힌 조각에서는 닫힌집합의 역상으로 같은 계산을 한다.
:::

:::hint
$f^{-1}(V) = \bigcup \{f^{-1}(V) \cap U : U \in \mathcal{U}\}$는 집합족의 분배법칙입니다.
:::

:::proof
[[subspace-and-continuity]]의 (2)에 의해 $A \subseteq X$이고 $V \subseteq W$이면 $(f|_A)^{-1}(V) = f^{-1}(V) \cap A$이다. 이것을 (가)라 부른다. 집합족의 성질은 [[family-of-sets]]의 것이다.

**(1).** $g \subseteq A \times W$, $h \subseteq B \times W$이고 $A, B \subseteq X$이므로 $g \cup h \subseteq X \times W$이다. 존재: $x \in X = A \cup B$이면 $x \in A$이거나 $x \in B$이고, 각각 $(x, g(x)) \in g$이거나 $(x, h(x)) \in h$이므로 $(x, w) \in g \cup h$인 $w \in W$가 있다. 유일: $(x, w), (x, w') \in g \cup h$라 하자. 둘 다 $g$에 속하면 $g$가 함수이므로 $w = w'$이고, 둘 다 $h$에 속해도 같다. $(x, w) \in g$이고 $(x, w') \in h$이면 $x \in A$이고 $x \in B$이므로 $x \in A \cap B$이고, $w = g(x) = h(x) = w'$이다. 반대 경우도 같은 방식으로 $w' = g(x) = h(x) = w$이다. 따라서 [[function]]의 정의에 의해 $g \cup h$는 $X$에서 $W$로의 함수이다.
$(g \cup h)|_A = \{(x, w) \in g \cup h : x \in A\}$이다. $g$의 원소는 첫째 성분이 $A$에 속하므로 이 집합에 속한다. 거꾸로 $(x, w) \in h$이고 $x \in A$이면 $x \in A \cap B$이므로 $w = h(x) = g(x)$, 곧 $(x, w) \in g$이다. 따라서 $(g \cup h)|_A = g$이다. $(g \cup h)|_B = h$도 같은 방식으로, $(x, w) \in g$이고 $x \in B$이면 $w = g(x) = h(x)$이므로 $(x, w) \in h$이다.
$f : X \to W$가 $f|_A = g$, $f|_B = h$이면 $x \in A$에서 $f(x) = f|_A(x) = g(x) = (g \cup h)(x)$이고 $x \in B$에서 $f(x) = h(x) = (g \cup h)(x)$이다. $X = A \cup B$이므로 모든 $x \in X$에서 $f(x) = (g \cup h)(x)$이고, [[function]]의 함수의 같음에 의해 $f = g \cup h$이다.

**(2).** $V \in \mathcal{T}_W$라 하자. 집합족의 분배법칙 (6)에 의해
$$
\begin{aligned}
f^{-1}(V) &= f^{-1}(V) \cap \bigcup \mathcal{U} \\
&= \bigcup \{f^{-1}(V) \cap U : U \in \mathcal{U}\}
\end{aligned}
$$
이다. $U \in \mathcal{U}$이면 $f|_U$가 연속이므로 (가)에 의해 $f^{-1}(V) \cap U = (f|_U)^{-1}(V)$는 $U$에서 열려 있고, $U$가 $X$에서 열려 있으므로 [[subspace-topology]]의 (3)의 (ii)에 의해 $X$에서 열려 있다. 따라서 $\{f^{-1}(V) \cap U : U \in \mathcal{U}\}$는 $X$의 열린집합들의 집합족이고, 위상의 조건 (ii)에 의해 그 합집합 $f^{-1}(V)$는 열려 있다. $\mathcal{U} = \emptyset$이면 $X = \bigcup \emptyset = \emptyset$이고 위 등식의 양쪽은 $\emptyset$이다. 특히 부분: $\mathcal{U} = \{A, B\}$로 두면 집합족의 (3)에 의해 $\bigcup \mathcal{U} = A \cup B = X$이다.

**(3).** [[continuity-criteria]]의 (1)에 의해 $W$의 모든 닫힌집합 $F$에 대하여 $f^{-1}(F)$가 $X$에서 닫혀 있음을 보이면 된다. $X = A \cup B$이므로 원소로 따져 $f^{-1}(F) = (f^{-1}(F) \cap A) \cup (f^{-1}(F) \cap B)$이다. (가)에 의해 $f^{-1}(F) \cap A = (f|_A)^{-1}(F)$이고, $f|_A$가 연속이므로 [[continuity-criteria]]의 (1)에 의해 이것은 $A$에서 닫혀 있다. $A$가 $X$에서 닫혀 있으므로 [[subspace-topology]]의 (3)의 (iii)에 의해 $X$에서 닫혀 있다. $B$에 대해서도 같다. [[closed-set]]의 (3)에 의해 두 닫힌집합의 합집합 $f^{-1}(F)$는 닫혀 있다.

**(4).** [[subspace-and-continuity]]의 (2)이다. (1)의 $g$, $h$에 대해서는 $f = g \cup h$에 이것과 (2), (3)을 쓰고, (1)의 $(g \cup h)|_A = g$, $(g \cup h)|_B = h$를 쓴다.
:::

## 예시와 반례

:::example[두 반직선 위의 일차함수]
$\mathbb{R}$(보통 위상)에서 $A = \{x \in \mathbb{R} : x \le 0\}$, $B = \{x \in \mathbb{R} : 0 \le x\}$라 하면 [[open-and-closed-sets-of-reals]]의 (2)에 의해 둘 다 닫힌집합이고 $A \cup B = \mathbb{R}$, $A \cap B = \{0\}$입니다([[order-properties-of-reals]]의 (1)의 (iv), (ii)). $g(x) = 2x$로 정한 $g : A \to \mathbb{R}$와 $h(x) = 3x$로 정한 $h : B \to \mathbb{R}$는 $0$에서 같은 값 $0$을 가지므로 (1)에 의해 $g \cup h$는 $\mathbb{R}$에서 $\mathbb{R}$로의 함수입니다. [[homeomorphism-examples]]의 (1)에 의해 $x$를 $2x$로, $3x$로 보내는 함수 $\mathbb{R} \to \mathbb{R}$는 위상동형사상이고 특히 연속입니다([[homeomorphism]]의 정의). $g$와 $h$는 이 두 함수를 $A$, $B$로 제한한 것이므로 (4)에 의해 연속이고, (3)에 의해 $g \cup h$는 연속입니다.
:::

:::counterexample[열린 조각과 닫힌 조각을 섞은 예]
$\mathbb{R}$(보통 위상)에서 $A = \{x \in \mathbb{R} : x < 0\}$, $B = \{x \in \mathbb{R} : 0 \le x\}$라 합시다. $A$는 열려 있고 $B$는 닫혀 있으며([[open-and-closed-sets-of-reals]]의 (1), (2). [[standard-topology-on-reals]]의 (5)와 [[closed-set]]의 (6)에 의해 보통 위상에서도 그렇습니다), $A \cup B = \mathbb{R}$, $A \cap B = \emptyset$입니다. 값이 늘 $0$인 $g : A \to \mathbb{R}$와 값이 늘 $1$인 $h : B \to \mathbb{R}$는 상수함수이므로 [[continuous-map]]의 (2)에 의해 연속이고, (1)에 의해 $f = g \cup h$는 함수입니다.

그러나 $f$는 연속이 아닙니다. 열린구간 $V = (\tfrac{1}{2}, \tfrac{3}{2})$에 대하여 $f^{-1}(V) = B$인데, $B$는 [[open-and-closed-sets-of-reals]]의 (4)에 의해 열린집합이 아닙니다. 두 조각이 둘 다 열려 있거나 둘 다 닫혀 있어야 한다는 가정을 빼면 (2), (3)의 결론이 깨질 수 있습니다.
:::

:::counterexample[닫힌 조각이 무한히 많은 예]
바로 위의 $f$를 다시 봅니다. $\mathcal{C} = \{\{x\} : x \in \mathbb{R}\}$은 한 점 집합 전체의 집합족이고, [[open-and-closed-sets-of-reals]]의 (2)에 의해 원소가 모두 닫힌집합이며 $\bigcup \mathcal{C} = \mathbb{R}$입니다. 한 점 집합 $\{x\}$ 위의 함수 $f|_{\{x\}}$는 상수함수이므로 연속입니다. 그런데 $f$는 연속이 아닙니다. 따라서 (3)의 "닫힌 조각 두 개"를 "닫힌집합들의 집합족"으로 넓힐 수는 없습니다.
:::

## 확인 질문

:::check[$X$에 이산위상을 주면 모든 함수 $f : X \to W$에 대하여 (2)의 가정이 성립하는가?]
성립합니다. $\mathcal{U} = \{\{x\} : x \in X\}$로 두면 한 점 집합은 이산위상에서 열려 있고([[topology-examples]]의 (1)) 그 합집합은 $X$이며, 한 점 집합 위의 함수는 상수함수라 연속입니다. 그래서 (2)는 모든 함수가 연속이라는 [[continuous-map]]의 (3)과 맞습니다.
:::

:::check[(1)에서 $A \cap B$의 한 점 $x$에서 $g(x) \ne h(x)$이면 $g \cup h$는 함수인가?]
아닙니다. $(x, g(x))$와 $(x, h(x))$가 둘 다 $g \cup h$에 속하고 둘째 성분이 다르므로 [[function]]의 유일 조건이 깨집니다.
:::
