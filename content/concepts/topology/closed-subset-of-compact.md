---
title: 콤팩트 공간의 닫힌 부분집합
title_en: Closed Subsets of Compact Spaces
aliases: [닫힌 부분집합은 콤팩트, closed subset of a compact space, closed subspace of a compact space, 콤팩트 집합과 닫힌집합의 교집합]
kind: theorem
field: topology
msc: ["54D30"]
level: undergrad
summary: 콤팩트 공간의 닫힌집합은 콤팩트 집합이고, 콤팩트 집합과 닫힌집합의 교집합도 콤팩트 집합이다. 닫혀 있지 않은 부분집합은 콤팩트 공간 안에서도 콤팩트가 아닐 수 있다.
requires: [set, subset, set-operations, power-set, family-of-sets, finite-set, adding-or-removing-an-element, subset-of-finite-set, natural-numbers-are-infinite, well-ordering-principle, topological-space, topology-examples, closed-set, subspace-topology, metric-subspace-topology, open-and-closed-sets-of-reals, compact-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness 절의 Theorem closed-in-compact 와 증명, content/compactness.tex:37–43; 예 23–28; Local compactness and one-point compactification 절의 닫힌 부분공간에 관한 Proposition 증명, 361; 부분공간 위상의 예, content/topological-spaces.tex:402–404"
    checked: original
    note: "(1)은 출처의 Theorem closed-in-compact(37–40, '콤팩트 공간의 닫힌 부분공간은 콤팩트이다')와 같다. 출처의 증명(41–43)은 A 의 열린 덮개 {U_i} 의 각 U_i 마다 U_i = A ∩ V_i 인 X 의 열린 V_i 를 두고 {V_i} ∪ {Aᶜ} 의 유한 부분덮개에서 A 의 덮개로 돌아간다. 이 항목은 compact-space 의 (3)(바깥 공간의 열린집합으로 판정)을 써서, X 의 열린집합들의 집합족 𝒱 에 X − F 를 더한 덮개의 유한 부분덮개에서 X − F 를 빼는 것으로 증명한다. (2)의 K ∩ F 는 출처가 국소 콤팩트에 관한 Proposition 의 증명(361: A 가 닫혀 있으면 A ∩ K 는 닫혀 있으므로 Theorem closed-in-compact 로 콤팩트이다)에서 쓰는 꼴이고, 이 항목은 그것을 (1)과 부분공간 위상으로 증명해 진술에 둔다. (3)에 대해서는, 콤팩트 공간 안에 닫혀 있지 않고 콤팩트가 아닌 부분집합이 있다는 같은 현상을 출처의 두 예(23–28, A = {1/n} 은 콤팩트가 아니고 A ∪ {0} 은 콤팩트이다)가 보인다. 예시 '콤팩트가 아닌 공간의 닫힌집합'의 ℤ 가 이산위상을 갖는다는 것은 출처 content/topological-spaces.tex:402–404 와 같은 대상, 같은 결론이다."
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Proposition 7.4.13 과 그 아래 문장, 증명 (p.284)"
    checked: original
    note: "출처 Proposition 7.4.13(p.284)은 거리공간에서 'K 가 콤팩트이고 E ⊆ K 가 닫힌집합이면 E 는 콤팩트'라고 진술하고, 바로 아래에서 K 가 닫혀 있으므로 E 가 K 에서 닫힌 것과 X 에서 닫힌 것이 같다고 적는다. 이 항목의 (2)의 끝 문장(F ⊆ K 이고 F 가 X 에서 닫혀 있는 경우)과 같은 꼴이다. 출처의 증명은 수열과 수렴하는 부분수열로 한다. 이 항목은 열린 덮개로 증명한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 직관 문장 2건, 다른 항목의 증명을 근거로 삼은 곳, 넘겨짚은 단원 글 문장을 고쳤다."
added: 2026-11-19
---

:::statement
콤팩트 공간과 콤팩트 부분집합(콤팩트 집합)은 [[compact-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 부분공간 위상 $\mathcal{T}|_Y$와 "$Y$에서 닫힌"은 [[subspace-topology]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

1. (닫힌 부분집합) $(X, \mathcal{T})$가 콤팩트이고 $F \subseteq X$가 닫힌집합이면 $F$는 $X$의 콤팩트 부분집합이다.
2. (콤팩트 집합과 닫힌집합의 교집합) $K$가 $X$의 콤팩트 부분집합이고 $F$가 $X$의 닫힌집합이면 $K \cap F$는 $X$의 콤팩트 부분집합이다. 특히 $F \subseteq K$이면 $F$는 $X$의 콤팩트 부분집합이다.
3. (닫혀 있지 않은 부분집합) 콤팩트 공간의 부분집합이 닫혀 있지 않으면 콤팩트 부분집합이 아닐 수 있다. 예컨대 $X = \{0\} \cup \mathbb{N}$이고 $\mathcal{T}_0$이 $0$을 원소로 갖지 않는 $X$의 부분집합 전체에 $X$를 더한 집합족, 곧 $\mathcal{T}_0 = \{U \in \mathscr{P}(X) : 0 \notin U\} \cup \{X\}$이면 $\mathcal{T}_0$은 $X$ 위의 위상이고 $(X, \mathcal{T}_0)$은 콤팩트이다. 그러나 $\mathbb{N}$은 $(X, \mathcal{T}_0)$에서 닫혀 있지 않고, $(X, \mathcal{T}_0)$의 콤팩트 부분집합도 아니다.
:::

:::english
Compact spaces and compact subsets (compact sets) are as in the entry on open covers and compact spaces, closed sets are as in the entry on closed sets, and the subspace topology $\mathcal{T}|_Y$ and "closed in $Y$" are as in the entry on the subspace topology. Below, $(X, \mathcal{T})$ is a topological space.

1. (Closed subsets) If $(X, \mathcal{T})$ is compact and $F \subseteq X$ is a closed set, then $F$ is a compact subset of $X$.
2. (Intersection of a compact set with a closed set) If $K$ is a compact subset of $X$ and $F$ is a closed set of $X$, then $K \cap F$ is a compact subset of $X$. In particular, if $F \subseteq K$, then $F$ is a compact subset of $X$.
3. (Subsets that are not closed) A subset of a compact space that is not closed may fail to be a compact subset. For example, if $X = \{0\} \cup \mathbb{N}$ and $\mathcal{T}_0$ is the family of all subsets of $X$ not containing $0$ together with $X$, that is $\mathcal{T}_0 = \{U \in \mathscr{P}(X) : 0 \notin U\} \cup \{X\}$, then $\mathcal{T}_0$ is a topology on $X$ and $(X, \mathcal{T}_0)$ is compact. However, $\mathbb{N}$ is not closed in $(X, \mathcal{T}_0)$, and it is not a compact subset of $(X, \mathcal{T}_0)$ either.
:::

## 직관

닫힌집합 $F$의 바깥 $X - F$는 열린집합입니다. 그래서 $F$를 덮는 열린집합들에 $X - F$ 하나를 보태면 $X$ 전체를 덮는 열린 덮개가 되고, $X$가 콤팩트이므로 그 가운데 유한 개로 $X$가 덮입니다. 그 유한 개에서 $X - F$를 빼도 $F$는 여전히 덮입니다. $X - F$는 $F$의 점을 하나도 품지 않기 때문입니다. 이 논증에서 $F$가 닫혀 있다는 가정은 "$X - F$가 열린집합이라서 덮개에 보탤 수 있다"는 한 곳에만 쓰입니다.

비유하자면 콤팩트 공간은 어떤 방식으로 천막을 쳐도 유한 개의 천막이면 다 덮이는 운동장입니다. 그 안의 한 구역 $F$를 덮고 싶을 때, 구역 밖 전체를 덮는 천막 $X - F$ 하나를 잠시 빌려 와 운동장 전체를 덮은 뒤 유한 개만 남기고, 마지막에 빌린 천막을 돌려줍니다. 이 천막을 빌릴 수 있는 것이 "$X - F$가 열린집합"이라는 조건에 맞습니다.

(3)은 그 조건이 없으면 결론이 깨질 수 있음을 보입니다. 그 공간에서 $0$을 품는 열린집합은 $X$ 하나뿐이어서 $X$는 콤팩트이지만, $\mathbb{N}$의 부분집합은 모두 $0$을 품지 않아 열린집합이므로, $\mathbb{N}$의 부분공간 위상은 이산위상이고 $\mathbb{N}$은 무한히 많은 열린 한 점 집합으로 쪼개집니다. $\mathbb{N}$의 바깥 $\{0\}$은 열린집합이 아니므로 위의 논증에서 빌려 올 천막이 없습니다.

## 증명

:::idea
덮개에 $X - F$를 보태 $X$의 열린 덮개를 만들고, 유한 부분덮개에서 $X - F$를 뺀다.
:::

:::hint
[[compact-space]]의 (3)을 쓰면 $F$를 덮는 열린집합들을 $X$의 열린집합으로 받을 수 있습니다.
:::

:::hint
(2)는 콤팩트 공간 $(K, \mathcal{T}|_K)$에 (1)을 쓰는 것입니다. $K \cap F$가 $K$에서 닫혀 있는지는 [[subspace-topology]]의 (2)로 봅니다.
:::

:::proof
"콤팩트 (3)"처럼 쓴 것은 [[compact-space]]의 번호이고, "집합족 (7)"처럼 쓴 것은 [[family-of-sets]]의 번호이다.

**(1).** 콤팩트 (3)의 (b)를 보인다. $\mathcal{V}$가 $F \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이라 하자. $F$가 닫힌집합이므로 [[closed-set]]의 정의에 의해 $X - F$는 열린집합이고, $\mathcal{V}' = \mathcal{V} \cup \{X - F\}$는 열린집합들의 집합족이다. 집합족 (7)과 (3)에 의해 $\bigcup \mathcal{V}' = \bigl(\bigcup \mathcal{V}\bigr) \cup (X - F)$이고, 이것은 $F \cup (X - F) = X$를 포함하므로 $\bigcup \mathcal{V}' = X$이다. 곧 $\mathcal{V}'$은 $X$의 열린 덮개이다. $(X, \mathcal{T})$가 콤팩트이므로 $\bigcup \mathcal{F} = X$인 $\mathcal{V}'$의 유한 부분족 $\mathcal{F}$가 있다.

$\mathcal{F}' = \mathcal{F} - \{X - F\}$로 둔다. $\mathcal{F}' \subseteq \mathcal{F}$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $\mathcal{F}'$은 유한집합이다. $\mathcal{F}'$의 원소는 $\mathcal{V}'$의 원소이고 $X - F$가 아니므로 $\mathcal{V}$의 원소이다. 곧 $\mathcal{F}'$은 $\mathcal{V}$의 유한 부분족이다. $x \in F$이면 $x \in X = \bigcup \mathcal{F}$이므로 $x \in G$인 $G \in \mathcal{F}$가 있다. $x \notin X - F$이므로 $G \ne X - F$이고, $G \in \mathcal{F}'$이다. 따라서 $F \subseteq \bigcup \mathcal{F}'$이고 $F \in \mathcal{K}_{\mathcal{V}}$이다. 콤팩트 (3)에 의해 $F$는 $X$의 콤팩트 부분집합이다.

**(2).** $K$가 $X$의 콤팩트 부분집합이므로 $(K, \mathcal{T}|_K)$는 콤팩트 공간이다. $F$는 $X$의 닫힌집합이고 $K \cap F = F \cap K$이므로, [[subspace-topology]]의 (2)에 의해 $K \cap F$는 $K$에서 닫힌집합이다. (1)을 콤팩트 공간 $(K, \mathcal{T}|_K)$에 쓰면 $K \cap F$는 $K$의 콤팩트 부분집합이고, $K \cap F \subseteq K \subseteq X$이므로 콤팩트 (4)에 의해 $X$의 콤팩트 부분집합이다. $F \subseteq K$이면 $K \cap F = F$이다.

**(3).** $\mathbb{N}$은 양의 정수의 집합이고([[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 진술), 정수 $0$은 $0 < 0$을 만족하지 않으므로([[well-ordering-principle]]의 (Z5)) 양의 정수가 아니고 $0 \notin \mathbb{N}$이다. 따라서 $X$의 원소는 $0$이거나 $\mathbb{N}$의 원소이고 둘 다인 원소는 없으며, $X - \mathbb{N} = \{0\}$이다.

*$\mathcal{T}_0$은 위상이다.* [[topological-space]]의 조건 (i)–(iii)을 확인한다. (i): $0 \notin \emptyset$이므로 $\emptyset \in \mathcal{T}_0$이고, $X \in \mathcal{T}_0$이다. (ii): $\mathcal{U} \subseteq \mathcal{T}_0$이라 하자. $X \in \mathcal{U}$이면 집합족 (1)에 의해 $X \subseteq \bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X \in \mathcal{T}_0$이다. $X \notin \mathcal{U}$이면 $\mathcal{U}$의 모든 원소가 $0$을 품지 않으므로 $0 \notin \bigcup \mathcal{U}$이고, $\bigcup \mathcal{U} \in \mathcal{T}_0$이다. (iii): $U$, $V \in \mathcal{T}_0$이라 하자. $U = V = X$이면 $U \cap V = X$이다. 그렇지 않으면 둘 가운데 하나는 $0$을 품지 않으므로 $0 \notin U \cap V$이고 $U \cap V \in \mathcal{T}_0$이다.

*$(X, \mathcal{T}_0)$은 콤팩트이다.* $\mathcal{U}$가 열린 덮개이면 $0 \in X = \bigcup \mathcal{U}$이므로 $0 \in U$인 $U \in \mathcal{U}$가 있다. $\mathcal{T}_0$의 원소 가운데 $0$을 품는 것은 $X$뿐이므로 $X \in \mathcal{U}$이다. [[finite-set]]의 (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고 $X \notin \emptyset$이므로 [[adding-or-removing-an-element]]의 (a)에 의해 $\{X\} = \emptyset \cup \{X\}$는 원소를 $1$개 갖는 유한집합이고, 집합족 (3)에 의해 $\bigcup \{X\} = X$이므로 유한 부분덮개이다.

*$\mathbb{N}$은 닫혀 있지 않다.* $X - \mathbb{N} = \{0\}$이고, $\{0\}$은 $0$을 품으면서 $X$가 아니다. $1 \in \mathbb{N} \subseteq X$이고, (Z8)의 $0 < 1$과 (Z5)에 의해 $1 \ne 0$이므로 $1 \notin \{0\}$이기 때문이다. 따라서 $\{0\} \notin \mathcal{T}_0$이고, 닫힌집합의 정의에 의해 $\mathbb{N}$은 닫혀 있지 않다.

*$\mathbb{N}$은 콤팩트 부분집합이 아니다.* $\mathcal{T}_0|_{\mathbb{N}} = \mathscr{P}(\mathbb{N})$임을 보인다. $\mathcal{T}_0|_{\mathbb{N}}$의 원소는 $\mathbb{N}$의 부분집합이다. 거꾸로 $S \subseteq \mathbb{N}$이면 $0 \notin S$이므로 $S \in \mathcal{T}_0$이고 $S = S \cap \mathbb{N} \in \mathcal{T}_0|_{\mathbb{N}}$이다. 따라서 $\mathbb{N}$의 부분공간 위상은 이산위상이다. [[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 (1)에 의해 $\mathbb{N}$은 유한집합이 아니므로, 콤팩트 (8)의 (iv)에 의해 이산위상을 준 $\mathbb{N}$은 콤팩트가 아니다. 곧 $\mathbb{N}$은 $(X, \mathcal{T}_0)$의 콤팩트 부분집합이 아니다.
:::

## 예시와 반례

:::example[콤팩트가 아닌 공간의 닫힌집합]
(1)에서 공간이 콤팩트라는 가정은 뺄 수 없습니다. $\mathbb{Z}$는 [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{R}$의 닫힌집합입니다. 그러나 [[metric-subspace-topology]]의 (4)의 (i)에 의해 $\mathbb{Z}$의 부분공간 위상은 이산위상이고, [[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 (2)에 의해 $\mathbb{Z}$는 무한집합이므로 [[compact-space]]의 (8)의 (iv)에 의해 $\mathbb{Z}$는 콤팩트 부분집합이 아닙니다. [[compact-space]]의 (8)의 (vi)에 의해 $\mathbb{R}$은 콤팩트가 아니므로 이것은 (1)과 어긋나지 않습니다.
:::

:::example[닫혀 있지 않아도 콤팩트인 부분집합]
(3)은 "닫혀 있지 않으면 콤팩트가 아니다"가 아니라 "아닐 수 있다"입니다. $a \ne b$이고 $X = \{a, b\}$에 밀착위상을 주면 $X$는 콤팩트이고, [[closed-set]]의 (7)에 의해 $\{a\}$는 닫혀 있지 않습니다. 그래도 [[compact-space]]의 (8)의 (iii)에 의해 밀착위상에서는 모든 부분집합이 콤팩트이므로 $\{a\}$는 콤팩트 부분집합입니다. 닫혀 있다는 것은 콤팩트 공간의 부분집합이 콤팩트이기 위한 충분조건이고, 이 예에서 보듯 필요조건은 아닙니다.
:::

## 확인 질문

:::check[$(X, \mathcal{T})$가 콤팩트이고 $F$가 닫힌집합, $K$가 콤팩트 부분집합이면 $F \cup K$는 콤팩트 부분집합인가?]
그렇습니다. (1)에 의해 $F$는 콤팩트 부분집합이고, [[compact-space]]의 (6)에 의해 두 콤팩트 부분집합의 합집합은 콤팩트 부분집합입니다. $K$가 닫혀 있는지는 쓰지 않습니다.
:::

:::check[(3)의 공간 $(X, \mathcal{T}_0)$에서 $\{0\}$은 닫혀 있는가? 콤팩트 부분집합인가?]
둘 다 그렇습니다. $X - \{0\} = \mathbb{N}$이고 $0 \notin \mathbb{N}$이므로 $\mathbb{N} \in \mathcal{T}_0$, 곧 $\{0\}$은 닫힌집합입니다. 그러면 (1)에 의해 $\{0\}$은 콤팩트 부분집합입니다([[compact-space]]의 (8)의 (ii)로도 나옵니다). 반면 그 여집합 $\mathbb{N}$은 열린집합이지만 (3)에서 본 대로 콤팩트 부분집합이 아닙니다.
:::
