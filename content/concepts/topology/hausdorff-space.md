---
title: T₁ 공간과 하우스도르프 공간
title_en: T1 Spaces and Hausdorff Spaces
aliases: [하우스도르프 공간, Hausdorff space, T1 공간, T1 space, T2 공간, T2 space, 여유한 위상, cofinite topology, 한 점 집합이 닫힌 공간]
kind: definition
field: topology
msc: ["54D10"]
level: undergrad
summary: 서로 다른 두 점마다 한 점을 품고 다른 점을 품지 않는 근방이 있는 공간을 T₁ 공간, 서로소인 두 근방이 있는 공간을 하우스도르프 공간이라 한다. T₁ 은 한 점 집합이 모두 닫혀 있다는 것, 유한 부분집합이 모두 닫혀 있다는 것과 같고, 이산위상·밀착위상·여유한 위상의 경우와 더 섬세한 위상, 위상동형에서 두 성질이 어떻게 되는지 보인다.
requires: [set, subset, set-operations, complement, de-morgan-laws-sets, function, injective-surjective-bijective, image-and-preimage, mathematical-induction, finite-set, adding-or-removing-an-element, subset-of-finite-set, disjoint-union-count, natural-numbers-are-infinite, family-of-sets, topological-space, topology-examples, closed-set, comparing-topologies, neighborhood, homeomorphism]
sources:
  - ref: fuglede-basic-topology
    loc: "Separation axioms and Hausdorff spaces 절: 정의 (content/topological-spaces.tex:646–653), 그 뒤 문장 (654), Proposition points-closed-in-t1 과 증명 (655–667), 예 (668–686); Topological invariants 절의 예 (content/homeomorphisms.tex:69–75); Separation -- part 2 절의 ℝ_K 예 (content/separation.tex:26–30)"
    checked: original
    note: "T₁ 의 정의는 출처 정의의 (ii)(650줄)와 같다. 출처는 x 의 근방 가운데 y 를 품지 않는 것과 y 의 근방 가운데 x 를 품지 않는 것을 함께 요구하고, 이 항목은 서로 다른 모든 두 점의 순서쌍에 대해 앞쪽 하나를 요구하므로 두 점의 자리를 바꾸면 같은 조건이 된다. 하우스도르프 공간은 출처 (iii)(651줄)의 'T₂ or Hausdorff' 이다. 출처 651줄은 두 근방의 조건을 U_x ∩ U_y ≠ ∅ 로 적고, 같은 출처의 Proposition limits-unique-hausdorff 의 증명(725줄)과 content/compactness.tex:51 은 서로소인 두 근방(disjoint neighbourhoods)을 쓴다. 이 항목은 U ∩ V = ∅ 으로 정의한다. 출처 정의의 (i) T₀ 은 싣지 않는다. 출처는 위상의 세 조건에 (T1)–(T3) 이라는 이름을 붙이고(content/topological-spaces.tex:10–12), 이 항목의 T₁ 공간은 그것과 다른 이름이다. (1)은 출처 654줄의 문장(T₂ 공간은 T₁ 이다)과 같다. (2)의 (a)와 (b)가 같다는 것은 출처 Proposition points-closed-in-t1 과 같다. 출처는 (a)에서 (b)를 얻을 때 x 와 다른 각 y 마다 x 를 품지 않는 근방 U_y 를 잡아 합집합을 취하고, 이 항목은 topological-space 의 (3)의 국소 판정으로 증명한다. (4)는 출처의 두 예(668–673: 점이 둘 이상인 밀착위상은 T₀, T₁, T₂ 가 아니다, 이산위상은 하우스도르프이다)와 같다. (5)의 위상을 가리키는 '여유한 위상'(cofinite topology)이라는 용어는 두 출처에 나오지 않는다(검색어 cofinite, co-finite, finite complement, complement is finite, complements are finite 로 Fuglede content 폴더 전체와 Lebl 전체를 찾아 0건). (6)은 출처의 ℝ_K 예(content/separation.tex:27)가 'ℝ 이 하우스도르프이고 ℝ_K 의 위상이 보통 위상보다 섬세하므로 ℝ_K 는 하우스도르프'라고 쓰는 논법과 같다. (7)은 출처 Topological invariants 절의 예(content/homeomorphisms.tex:69–75)가 하우스도르프, T₀, T₁ 이 위상동형으로 옮겨지는 성질(topological property)이라고 적는 것과 같은 내용이다. 예시 '원소 둘인 집합 위의 네 위상'의 위상들은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₁–𝒯₄ 와 같고, 그 가운데 밀착위상과 이산위상의 결론은 출처의 예(668–673)와 같다. 확인 질문 '세 점 위의 한 위상'의 위상은 topology-examples 의 (8)의 (ii)의 것으로, 출처 연습문제 1.2(content/exercises.tex:13, {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 출처 678–682줄의 예도 세 점 위의 위상({∅, {b}, {c}, {b, c}, X})이 T₁ 이 아님을 적는다. 확인 질문 '더 거친 위상'의 두 위상은 출처의 예 two-point-topologies 의 𝒯₁ 과 𝒯₄ 이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 유한집합에서 거짓이던 단원 글 문장, 어긋난 줄 번호와 겹친 글자를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 위상의 조건 (i)–(iii)과 열린집합의 국소 판정은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 닫힌집합은 [[closed-set]]의 것이다. 이산위상과 밀착위상은 [[topology-examples]]의 것이고, "섬세하다"는 [[comparing-topologies]]의 것이며, 위상동형사상은 [[homeomorphism]]의 것이다. "원소를 $n$개 갖는다"와 유한집합, 무한집합은 [[finite-set]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

**$T_1$ 공간.** $(X, \mathcal{T})$가 **$T_1$ 공간**($T_1$ space)인 것은 정확히 $X$의 서로 다른 모든 두 점 $x$, $y$에 대하여 $y \notin U$인 $x$의 근방 $U$가 있을 때이다. 이 조건은 서로 다른 두 점의 모든 순서쌍에 대해 요구하므로, $x$와 $y$의 자리를 바꾼 "$x \notin V$인 $y$의 근방 $V$가 있다"도 이 조건에 들어 있다.

**하우스도르프 공간.** $(X, \mathcal{T})$가 **하우스도르프 공간**(Hausdorff space)인 것은 정확히 $X$의 서로 다른 모든 두 점 $x$, $y$에 대하여 $U \cap V = \emptyset$인 $x$의 근방 $U$와 $y$의 근방 $V$가 있을 때이다. 하우스도르프 공간을 $T_2$ 공간이라고도 하며, $T_1$과 $T_2$의 아래첨자는 이름의 일부이다.

위상을 밝혀야 할 때는 "$(X, \mathcal{T})$는 하우스도르프 공간이다", "$\mathcal{T}$를 준 $X$는 $T_1$ 공간이다"처럼 쓴다. 다음이 성립한다.

1. (하우스도르프이면 $T_1$) 하우스도르프 공간은 $T_1$ 공간이다.
2. (닫힌 한 점 집합) 다음 셋은 서로 같은 말이다.
   - (a) $(X, \mathcal{T})$는 $T_1$ 공간이다.
   - (b) $X$의 모든 점 $x$에 대하여 한 점 집합 $\{x\}$는 닫힌집합이다.
   - (c) $X$의 부분집합 가운데 유한집합인 것은 모두 닫힌집합이다.
3. (서로 다른 두 점이 없는 공간) $X$에 서로 다른 두 점이 없으면, 곧 $X$의 모든 점 $x$, $y$에서 $x = y$이면, $(X, \mathcal{T})$는 하우스도르프 공간이고 $T_1$ 공간이다. 특히 $X = \emptyset$이거나 어떤 대상 $p$에 대하여 $X = \{p\}$이면 그렇다.
4. (이산위상과 밀착위상) 이산위상 $\mathscr{P}(X)$를 준 $X$는 하우스도르프 공간이다. $X$에 서로 다른 두 점 $a$, $b$가 있으면 밀착위상 $\{\emptyset, X\}$를 준 $X$는 $T_1$ 공간이 아니고, 따라서 하우스도르프 공간도 아니다.
5. (여유한 위상) $X$가 집합이고
   $$
   \mathcal{T}_{\mathrm{cof}} = \{U \in \mathscr{P}(X) : U = \emptyset \text{이거나 } X - U \text{가 유한집합이다}\}
   $$
   이면 $\mathcal{T}_{\mathrm{cof}}$는 $X$ 위의 위상이다. 이것을 $X$ 위의 **여유한 위상**(cofinite topology)이라 한다. $(X, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이다. $X$가 무한집합이면 $(X, \mathcal{T}_{\mathrm{cof}})$는 하우스도르프 공간이 아니다. 특히 $\mathbb{N}$ 위의 여유한 위상을 준 $\mathbb{N}$은 $T_1$ 공간이지만 하우스도르프 공간이 아니다.
6. (더 섬세한 위상) $\mathcal{T}'$이 $X$ 위의 위상이고 $\mathcal{T} \subseteq \mathcal{T}'$이라 하자. $(X, \mathcal{T})$가 $T_1$ 공간이면 $(X, \mathcal{T}')$도 $T_1$ 공간이고, $(X, \mathcal{T})$가 하우스도르프 공간이면 $(X, \mathcal{T}')$도 하우스도르프 공간이다. 따라서 $(X, \mathcal{T}')$가 $T_1$ 공간(하우스도르프 공간)이 아니면 $(X, \mathcal{T})$도 $T_1$ 공간(하우스도르프 공간)이 아니다.
7. (위상동형) $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 위상동형사상이면, $X$가 $T_1$ 공간인 것은 정확히 $Y$가 $T_1$ 공간일 때이고, $X$가 하우스도르프 공간인 것은 정확히 $Y$가 하우스도르프 공간일 때이다.
:::

:::english
Topological spaces, open sets, the conditions (i)–(iii) for a topology and the local test for open sets are as in the entry on topological spaces; neighborhoods are as in the entry on neighborhoods; and closed sets are as in the entry on closed sets. The discrete and indiscrete topologies are as in the entry on examples of topologies, "finer" is as in the entry on comparing topologies, and homeomorphisms are as in the entry on homeomorphisms. "Has $n$ elements", finite sets and infinite sets are as in the entry on finite sets. Below, $(X, \mathcal{T})$ is a topological space.

**$T_1$ spaces.** $(X, \mathcal{T})$ is a **$T_1$ space** exactly when for every two distinct points $x$, $y$ of $X$ there is a neighborhood $U$ of $x$ with $y \notin U$. Since this is required for every ordered pair of distinct points, the condition with $x$ and $y$ interchanged, "there is a neighborhood $V$ of $y$ with $x \notin V$", is part of it.

**Hausdorff spaces.** $(X, \mathcal{T})$ is a **Hausdorff space** exactly when for every two distinct points $x$, $y$ of $X$ there are a neighborhood $U$ of $x$ and a neighborhood $V$ of $y$ with $U \cap V = \emptyset$. A Hausdorff space is also called a $T_2$ space; the subscripts in $T_1$ and $T_2$ are part of the names.

When the topology must be named we say "$(X, \mathcal{T})$ is a Hausdorff space", "$X$ with $\mathcal{T}$ is a $T_1$ space", and so on. The following hold.

1. (Hausdorff implies $T_1$) A Hausdorff space is a $T_1$ space.
2. (Closed one-point sets) The following three statements are equivalent.
   - (a) $(X, \mathcal{T})$ is a $T_1$ space.
   - (b) For every point $x$ of $X$, the one-point set $\{x\}$ is closed.
   - (c) Every subset of $X$ that is a finite set is closed.
3. (Spaces without two distinct points) If $X$ does not have two distinct points, that is, if $x = y$ for all points $x$, $y$ of $X$, then $(X, \mathcal{T})$ is a Hausdorff space and a $T_1$ space. In particular this holds if $X = \emptyset$ or $X = \{p\}$ for some object $p$.
4. (Discrete and indiscrete topologies) $X$ with the discrete topology $\mathscr{P}(X)$ is a Hausdorff space. If $X$ has two distinct points $a$, $b$, then $X$ with the indiscrete topology $\{\emptyset, X\}$ is not a $T_1$ space, and hence not a Hausdorff space.
5. (The cofinite topology) If $X$ is a set and
   $$
   \mathcal{T}_{\mathrm{cof}} = \{U \in \mathscr{P}(X) : U = \emptyset \text{ or } X - U \text{ is a finite set}\},
   $$
   then $\mathcal{T}_{\mathrm{cof}}$ is a topology on $X$, called the **cofinite topology** on $X$. $(X, \mathcal{T}_{\mathrm{cof}})$ is a $T_1$ space. If $X$ is an infinite set, then $(X, \mathcal{T}_{\mathrm{cof}})$ is not a Hausdorff space. In particular, $\mathbb{N}$ with the cofinite topology on $\mathbb{N}$ is a $T_1$ space but not a Hausdorff space.
6. (Finer topologies) Let $\mathcal{T}'$ be a topology on $X$ with $\mathcal{T} \subseteq \mathcal{T}'$. If $(X, \mathcal{T})$ is a $T_1$ space then so is $(X, \mathcal{T}')$, and if $(X, \mathcal{T})$ is a Hausdorff space then so is $(X, \mathcal{T}')$. Consequently, if $(X, \mathcal{T}')$ is not a $T_1$ space (a Hausdorff space), then neither is $(X, \mathcal{T})$.
7. (Homeomorphisms) If $(Y, \mathcal{T}_Y)$ is a topological space and $f : X \to Y$ is a homeomorphism, then $X$ is a $T_1$ space exactly when $Y$ is a $T_1$ space, and $X$ is a Hausdorff space exactly when $Y$ is a Hausdorff space.
:::

## 직관

거리공간에서는 서로 다른 두 점 사이의 거리가 양수이고, 그 거리의 절반을 반지름으로 하는 두 열린 공은 겹치지 않습니다([[open-ball|열린 공]]의 (9)). 곧 두 점을 공으로 떼어 놓을 수 있습니다. 위상공간에는 거리가 없으므로 "떼어 놓는다"를 근방으로 말해야 하고, 그 말에는 세기가 다른 몇 가지가 있습니다. $T_1$은 "$x$를 품되 $y$는 품지 않는 근방이 있다"는 약한 쪽이고, 하우스도르프는 "두 점을 각각 품고 서로 겹치지 않는 두 근방이 있다"는 강한 쪽입니다.

비유하자면 근방은 점이 들어갈 수 있는 방이고, 위상은 지을 수 있는 방의 목록입니다. $T_1$은 서로 다른 두 사람 누구에게나 "나는 들어가고 상대는 들어가지 않는 방"이 목록에 있다는 것이고, 하우스도르프는 두 사람에게 "서로 겹치지 않는 두 방"을 한꺼번에 줄 수 있다는 것입니다. 방이 "목록에 있다"가 근방이 열린집합이라는 조건에, "겹치지 않는다"가 $U \cap V = \emptyset$에 맞습니다. $T_1$에서는 $x$의 방과 $y$의 방이 따로 있을 뿐 둘이 겹칠 수 있습니다. 실제로 (5)의 $\mathbb{N}$ 위의 여유한 위상에서는 공집합이 아닌 두 열린집합이 반드시 겹칩니다.

(2)는 $T_1$을 점 하나만 보고 판정하게 해 줍니다. $\{x\}$가 닫혀 있다는 것은 $X - \{x\}$가 열려 있다는 것이고, 이것은 $x$가 아닌 모든 점 $y$가 "$x$를 품지 않는 근방"을 갖는다는 말과 같습니다. 각 $y$마다 근방을 하나씩 고르지 않고 [[topological-space|열린집합의 국소 판정]]으로 이것을 증명합니다. 2단원의 [[closed-set|닫힌집합]]에서는 점이 둘 이상인 집합의 밀착위상에서 한 점 집합이 닫혀 있지 않다는 것을 보았습니다. (2)에 의해 이것은 (4)의 "그 공간은 $T_1$이 아니다"와 같은 사실을 다르게 말한 것입니다.

(6)은 열린집합이 많을수록 점을 떼어 놓기 쉽다는 것입니다. 이산위상은 모든 위상보다 섬세하고 하우스도르프이며, 밀착위상은 가장 거칠고 점이 둘 이상이면 $T_1$도 아닙니다. (7)은 위상동형사상이 열린집합을 열린집합으로 짝지으므로, 근방으로 정의한 두 성질이 위상동형인 두 공간에서 함께 성립하거나 함께 성립하지 않는다는 것입니다.

## 성질의 증명

:::proof
아래에서 "국소 판정"은 [[topological-space]]의 (3)이고, "근방 (5)"처럼 쓴 것은 [[neighborhood]]의 번호, "닫힌집합 (3)"처럼 쓴 것은 [[closed-set]]의 번호이다. 근방은 열린집합이므로 $\mathcal{T} \subseteq \mathscr{P}(X)$에 의해 $X$의 부분집합이다.

**(1).** $(X, \mathcal{T})$가 하우스도르프 공간이고 $x$, $y$가 $X$의 서로 다른 점이라 하자. $U \cap V = \emptyset$인 $x$의 근방 $U$와 $y$의 근방 $V$가 있다. 만약 $y \in U$이면 $y \in V$이기도 하므로 $y \in U \cap V = \emptyset$이 되어 모순이다. 따라서 $y \notin U$이고 $U$는 $y$를 품지 않는 $x$의 근방이다. 그러므로 $(X, \mathcal{T})$는 $T_1$ 공간이다.

**(2).** (a)에서 (b), (b)에서 (c), (c)에서 (a)를 차례로 보인다.

(a)에서 (b). $x \in X$라 하고 $W = X - \{x\}$로 둔다. $W$의 점 $y$를 잡으면 $y \in X$이고 $y \ne x$이다. (a)를 서로 다른 두 점 $y$, $x$에 쓰면 $x \notin V$인 $y$의 근방 $V$가 있다. $V \subseteq X$이고 $x \notin V$이므로 $V \subseteq X - \{x\} = W$이다. 곧 $W$의 모든 점 $y$에 대하여 $y \in V$이고 $V \subseteq W$인 열린집합 $V$가 있으므로, 국소 판정의 (b)에서 (a)로 $W$는 열린집합이다. $\{x\} \subseteq X$이고 $X - \{x\} = W$가 열린집합이므로 닫힌집합의 정의에 의해 $\{x\}$는 닫힌집합이다.

(b)에서 (c). 정수 $n \ge 0$에 대하여 $S_n$을 "$X$의 부분집합 가운데 원소를 $n$개 갖는 것은 모두 닫힌집합이다"라 하고, [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로 모든 $n \ge 0$에서 $S_n$을 보인다.

- 기초 단계. $F \subseteq X$가 원소를 $0$개 가지면 [[finite-set]]의 (F2)에 의해 $F = \emptyset$이고, 닫힌집합 (1)에 의해 $\emptyset$은 닫힌집합이다.
- 귀납 단계. 정수 $k \ge 0$에 대하여 $S_k$가 참이라 하고, $F \subseteq X$가 원소를 $k + 1$개 갖는다고 하자. 전단사 $h : \{1, \dots, k+1\} \to F$가 있고, (F1)에 의해 $k + 1 \in \{1, \dots, k+1\}$이므로 $c = h(k+1)$은 $F$의 원소이다. [[adding-or-removing-an-element]]의 (b)에 의해 $F - \{c\}$는 원소를 $k$개 갖고, $F - \{c\} \subseteq F \subseteq X$이므로 $S_k$에 의해 닫힌집합이다. $c \in X$이므로 가정한 (2)의 (b)에 의해 $\{c\}$도 닫힌집합이다. $c \in F$이므로 $F = (F - \{c\}) \cup \{c\}$이다($F$의 원소는 $c$이거나 $F - \{c\}$의 원소이고, 거꾸로 두 집합은 모두 $F$의 부분집합이다). 닫힌집합 (3)에 의해 $F$는 닫힌집합이다. 따라서 $S_{k+1}$이 참이다.

$X$의 부분집합 $F$가 유한집합이면 어떤 정수 $n \ge 0$에 대하여 원소를 $n$개 가지므로 $S_n$에 의해 닫힌집합이다.

(c)에서 (a). $x$, $y$가 $X$의 서로 다른 점이라 하자. (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고 $y \notin \emptyset$이므로, [[adding-or-removing-an-element]]의 (a)에 의해 $\emptyset \cup \{y\} = \{y\}$는 원소를 $1$개 갖는다. 곧 $\{y\}$는 $X$의 부분집합이고 유한집합이므로 (c)에 의해 닫힌집합이다. 닫힌집합의 정의에 의해 $U = X - \{y\}$는 열린집합이다. $x \in X$이고 $x \ne y$이므로 $x \in U$이고, $y \notin U$이다. 따라서 $U$는 $y$를 품지 않는 $x$의 근방이다. 그러므로 $(X, \mathcal{T})$는 $T_1$ 공간이다.

**(3).** 하우스도르프 공간과 $T_1$ 공간의 정의는 모두 "$X$의 서로 다른 모든 두 점 $x$, $y$에 대하여 ~"의 꼴이다. $X$에 서로 다른 두 점이 없으면 이 조건을 확인할 두 점이 없으므로 두 정의의 조건은 참이다. $X = \emptyset$이면 점이 없고, $X = \{p\}$이면 $X$의 점은 모두 $p$이므로 어느 경우에도 $X$에 서로 다른 두 점이 없다.

**(4).** $\mathcal{T}$가 이산위상이라 하고 $x$, $y$가 $X$의 서로 다른 점이라 하자. 근방 (5)에 의해 $\{x\}$는 $x$의 근방이고 $\{y\}$는 $y$의 근방이다. $z \in \{x\} \cap \{y\}$이면 $z = x$이고 $z = y$이므로 $x = y$가 되어 모순이다. 따라서 $\{x\} \cap \{y\} = \emptyset$이고 $(X, \mathcal{T})$는 하우스도르프 공간이다.

$\mathcal{T}$가 밀착위상이고 $a$, $b$가 $X$의 서로 다른 점이라 하자. 근방 (5)에 의해 $a$의 근방은 $X$ 하나뿐이고 $b \in X$이다. 따라서 $b$를 품지 않는 $a$의 근방은 없고, $(X, \mathcal{T})$는 $T_1$ 공간이 아니다. 하우스도르프 공간이라면 (1)에 의해 $T_1$ 공간이어야 하므로 하우스도르프 공간도 아니다.

**(5).** 먼저 $\mathcal{T}_{\mathrm{cof}}$가 위상임을 위상의 조건 (i)–(iii)으로 보인다.

(i) $\emptyset \in \mathcal{T}_{\mathrm{cof}}$는 정의의 첫 경우이다. $X - X = \emptyset$은 (F2)에 의해 유한집합이므로 $X \in \mathcal{T}_{\mathrm{cof}}$이다.

(ii) $\mathcal{U} \subseteq \mathcal{T}_{\mathrm{cof}}$라 하고 $W = \bigcup \mathcal{U}$로 둔다. $\mathcal{U}$의 원소가 모두 공집합이면 $W = \emptyset$이다. $a \in W$이면 $a \in U$인 $U \in \mathcal{U}$가 있는데 그 $U$가 공집합이기 때문이다. 따라서 $W \in \mathcal{T}_{\mathrm{cof}}$이다($\mathcal{U} = \emptyset$인 경우도 여기에 든다). 그렇지 않으면 $U_0 \ne \emptyset$인 $U_0 \in \mathcal{U}$가 있고, $U_0 \in \mathcal{T}_{\mathrm{cof}}$이므로 $X - U_0$은 유한집합이다. [[family-of-sets]]의 (1)에 의해 $U_0 \subseteq W$이므로 $X - W \subseteq X - U_0$이다($a \in X$이고 $a \notin W$이면 $a \notin U_0$이다). [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $X - W$는 유한집합이고, $W \in \mathcal{T}_{\mathrm{cof}}$이다.

(iii) $U$, $V \in \mathcal{T}_{\mathrm{cof}}$라 하자. $U = \emptyset$이거나 $V = \emptyset$이면 $U \cap V = \emptyset \in \mathcal{T}_{\mathrm{cof}}$이다. 둘 다 공집합이 아니면 $X - U$와 $X - V$는 유한집합이다. $X$를 전체집합으로 보아 [[de-morgan-laws-sets|드 모르간 법칙]]의 (1)을 쓰면 $X - (U \cap V) = (X - U) \cup (X - V)$이고, [[disjoint-union-count]]의 (3)에 의해 이 집합은 유한집합이다. 따라서 $U \cap V \in \mathcal{T}_{\mathrm{cof}}$이다.

다음으로 $(X, \mathcal{T}_{\mathrm{cof}})$가 $T_1$ 공간임을 (2)의 (c)에서 (a)로 보인다. $F \subseteq X$가 유한집합이면 닫힌집합 (5)에 의해 $X - (X - F) = F$이므로 $X - F$의 여집합은 유한집합이고 $X - F \in \mathcal{T}_{\mathrm{cof}}$이다. 곧 $F$는 $(X, \mathcal{T}_{\mathrm{cof}})$에서 닫힌집합이다. 따라서 (2)의 (c)가 성립하고 $(X, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이다.

끝으로 $X$가 무한집합이라 하자. 먼저 $X$에 서로 다른 두 점이 있음을 보인다. (F2)에 의해 $\emptyset$은 유한집합이므로 $X \ne \emptyset$이고, $X$의 점 $x$를 하나 잡는다. 만약 $X - \{x\} = \emptyset$이면 $X$의 모든 점이 $x$이므로 $X = \{x\}$이고, (2)의 증명의 (c)에서 (a)에서 본 것처럼 $\{x\}$는 원소를 $1$개 가져 유한집합이므로 모순이다. 따라서 $X - \{x\}$의 점 $y$가 있고 $y \ne x$이다.

$x$의 근방 $U$와 $y$의 근방 $V$가 $U \cap V = \emptyset$을 만족한다고 하자. $x \in U$, $y \in V$이므로 둘 다 공집합이 아니고, $\mathcal{T}_{\mathrm{cof}}$의 정의에 의해 $X - U$와 $X - V$는 유한집합이다. (iii)의 계산으로 $X - (U \cap V)$는 유한집합인데, $U \cap V = \emptyset$이므로 이 집합은 $X - \emptyset = X$이다. 이것은 $X$가 무한집합이라는 데 모순이다. 따라서 $x$와 $y$에는 서로소인 두 근방이 없고, $(X, \mathcal{T}_{\mathrm{cof}})$는 하우스도르프 공간이 아니다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이므로 마지막 문장이 나온다.

**(6).** $\mathcal{T} \subseteq \mathcal{T}'$이므로, $(X, \mathcal{T})$에서 $x$의 근방 $U$는 $\mathcal{T}'$의 원소이고 $x \in U$이어서 $(X, \mathcal{T}')$에서도 $x$의 근방이다. $(X, \mathcal{T})$가 $T_1$ 공간이고 $x \ne y$이면 $y \notin U$인 $(X, \mathcal{T})$에서의 $x$의 근방 $U$가 있고, 이 $U$는 $(X, \mathcal{T}')$에서 $y$를 품지 않는 $x$의 근방이다. 따라서 $(X, \mathcal{T}')$는 $T_1$ 공간이다. $(X, \mathcal{T})$가 하우스도르프 공간이고 $x \ne y$이면 $U \cap V = \emptyset$인 $(X, \mathcal{T})$에서의 $x$의 근방 $U$와 $y$의 근방 $V$가 있고, 이 둘은 $(X, \mathcal{T}')$에서도 각각 $x$, $y$의 근방이며 여전히 서로소이다. 따라서 $(X, \mathcal{T}')$는 하우스도르프 공간이다. 마지막 문장은 앞의 두 문장의 대우이다.

**(7).** 먼저 "$X$가 하우스도르프 공간이면 $Y$도 그렇다"와 "$X$가 $T_1$ 공간이면 $Y$도 그렇다"를 보인다.

$y_1$, $y_2$가 $Y$의 서로 다른 점이라 하자. $f$는 전단사이므로 [[injective-surjective-bijective|전사]]이고, $f(x_1) = y_1$, $f(x_2) = y_2$인 $X$의 점 $x_1$, $x_2$가 있다. $x_1 = x_2$이면 $y_1 = f(x_1) = f(x_2) = y_2$이므로 $x_1 \ne x_2$이다.

$X$가 하우스도르프 공간이면 $U_1 \cap U_2 = \emptyset$인 $x_1$의 근방 $U_1$과 $x_2$의 근방 $U_2$가 있다. [[homeomorphism]]의 (2)의 (i)에 의해 [[image-and-preimage|상]] $f(U_1)$, $f(U_2)$는 $Y$에서 열린집합이고, $y_1 = f(x_1) \in f(U_1)$, $y_2 = f(x_2) \in f(U_2)$이다. $z \in f(U_1) \cap f(U_2)$인 $z$가 있다면 $z = f(u_1) = f(u_2)$인 $u_1 \in U_1$, $u_2 \in U_2$가 있고, $f$가 단사이므로 $u_1 = u_2 \in U_1 \cap U_2 = \emptyset$이 되어 모순이다. 따라서 $f(U_1) \cap f(U_2) = \emptyset$이고 $Y$는 하우스도르프 공간이다.

$X$가 $T_1$ 공간이면 $x_2 \notin U$인 $x_1$의 근방 $U$가 있다. 위와 같이 $f(U)$는 $y_1$을 원소로 갖는 $Y$의 열린집합이다. $y_2 \in f(U)$라면 $y_2 = f(u)$인 $u \in U$가 있고, $f(u) = f(x_2)$이므로 $f$가 단사라는 것에서 $u = x_2 \in U$가 되어 모순이다. 따라서 $f(U)$는 $y_2$를 품지 않는 $y_1$의 근방이고 $Y$는 $T_1$ 공간이다.

거꾸로 [[homeomorphism]]의 (3)의 (ii)에 의해 $f^{-1} : Y \to X$도 위상동형사상이므로, 위에서 보인 것을 $f^{-1}$에 쓰면 "$Y$가 하우스도르프 공간($T_1$ 공간)이면 $X$도 그렇다"가 나온다.
:::

## 예시와 반례

:::example[원소 둘인 집합 위의 네 위상]
$a \ne b$이고 $X = \{a, b\}$라 합시다. [[topology-examples]]의 (7)에 의해 $X$ 위의 위상은 $\{\emptyset, X\}$, $\{\emptyset, \{a\}, X\}$, $\{\emptyset, \{b\}, X\}$, $\mathscr{P}(X)$의 넷뿐입니다. (4)에 의해 $\mathscr{P}(X)$는 하우스도르프이고 $\{\emptyset, X\}$는 $T_1$이 아닙니다.

$\mathcal{T} = \{\emptyset, \{a\}, X\}$에서 $b$를 원소로 갖는 열린집합은 $X$뿐이고 $X$는 $a$를 품으므로, $a$를 품지 않는 $b$의 근방이 없습니다. 따라서 $T_1$이 아닙니다. (2)로 보아도 같습니다. $X - \{b\} = \{a\}$는 열려 있으므로 $\{b\}$는 닫혀 있지만, $X - \{a\} = \{b\}$는 열려 있지 않으므로 $\{a\}$는 닫혀 있지 않습니다. $a$와 $b$의 역할을 바꾸면 $\{\emptyset, \{b\}, X\}$도 $T_1$이 아닙니다. 그래서 원소 둘인 집합 위에서는 이산위상만이 $T_1$이고, 그 위상은 하우스도르프이기도 합니다.
:::

:::remark[유한집합 위의 T₁ 위상]
$X$가 유한집합이고 $(X, \mathcal{T})$가 $T_1$ 공간이면 $\mathcal{T} = \mathscr{P}(X)$입니다. $U \subseteq X$이면 $X - U \subseteq X$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $X - U$는 유한집합이고, (2)에 의해 닫힌집합입니다. [[closed-set]]의 (5)에 의해 $U = X - (X - U)$는 열린집합입니다. 곧 $X$의 모든 부분집합이 열려 있으므로 $\mathcal{T} = \mathscr{P}(X)$이고, (4)에 의해 이 공간은 하우스도르프이기도 합니다. 유한집합 위에서는 $T_1$과 하우스도르프가 같은 말이 되는 셈이고, 위의 예시는 그 한 경우입니다.
:::

:::counterexample[T₁ 이지만 하우스도르프가 아닌 공간]
$\mathbb{N}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 줍니다. $U = \mathbb{N} - \{2\}$와 $V = \mathbb{N} - \{1\}$은 여집합이 각각 $\{2\}$, $\{1\}$로 유한집합이므로 열린집합이고, $U$는 $2$를 품지 않는 $1$의 근방, $V$는 $1$을 품지 않는 $2$의 근방입니다. $T_1$의 조건은 이렇게 채워집니다.

그러나 이 두 근방은 $3$을 함께 품습니다. 다른 근방으로 바꾸어도 마찬가지입니다. (5)의 증명대로, $1$의 근방 $U'$과 $2$의 근방 $V'$이 서로소라면 $\mathbb{N} = \mathbb{N} - (U' \cap V') = (\mathbb{N} - U') \cup (\mathbb{N} - V')$가 두 유한집합의 합집합이 되어 유한집합이어야 하는데, $\mathbb{N}$은 무한집합입니다. 그래서 (1)의 거꾸로, 곧 "$T_1$이면 하우스도르프"는 성립하지 않습니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 주면 $T_1$ 공간인가? 세 한 점 집합 가운데 닫힌 것은 어느 것인가?]
$X - \{1\} = \{2, 3\}$과 $X - \{3\} = \{1, 2\}$는 열린집합이므로 $\{1\}$과 $\{3\}$은 닫힌집합입니다. $X - \{2\} = \{1, 3\}$은 열린집합이 아니므로 $\{2\}$는 닫힌집합이 아닙니다. 따라서 (2)에 의해 $T_1$ 공간이 아닙니다. 근방으로 보아도 $1$의 근방은 $\{1, 2\}$와 $X$뿐이고 둘 다 $2$를 품으므로, $2$를 품지 않는 $1$의 근방이 없습니다.
:::

:::check[(6)을 거꾸로 하여, $\mathcal{T} \subseteq \mathcal{T}'$이고 $(X, \mathcal{T}')$가 하우스도르프이면 $(X, \mathcal{T})$도 하우스도르프인가?]
그렇다고 할 수 없습니다. $a \ne b$이고 $X = \{a, b\}$일 때 $\mathcal{T} = \{\emptyset, X\}$, $\mathcal{T}' = \mathscr{P}(X)$이면 $\mathcal{T} \subseteq \mathcal{T}'$입니다. (4)에 의해 $(X, \mathcal{T}')$는 하우스도르프 공간이지만 $(X, \mathcal{T})$는 $T_1$ 공간도 아닙니다. 더 거친 위상으로 가면 근방이 줄어들어 점을 떼어 놓지 못할 수 있습니다.
:::

:::check[$X$가 유한집합이면 $X$ 위의 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$는 어떤 위상인가?]
이산위상 $\mathscr{P}(X)$입니다. $U \subseteq X$이면 $X - U \subseteq X$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $X - U$는 유한집합이고, 따라서 $U \in \mathcal{T}_{\mathrm{cof}}$입니다. 곧 $X$의 모든 부분집합이 $\mathcal{T}_{\mathrm{cof}}$에 속합니다. 그래서 (5)의 "하우스도르프가 아니다"에는 $X$가 무한집합이라는 가정이 필요합니다.
:::
