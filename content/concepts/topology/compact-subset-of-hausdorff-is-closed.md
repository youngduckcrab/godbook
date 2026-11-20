---
title: 하우스도르프 공간의 콤팩트 부분집합은 닫혀 있다
title_en: Compact Subsets of Hausdorff Spaces Are Closed
aliases: [콤팩트 집합은 닫혀 있다, compact subset of a Hausdorff space is closed, 점과 콤팩트 집합의 분리, separating a point from a compact set, 콤팩트 집합의 교집합]
kind: theorem
field: topology
msc: ["54D30", "54D10"]
level: undergrad
summary: 하우스도르프 공간에서 콤팩트 집합 밖의 점과 그 콤팩트 집합은 서로소인 두 열린집합으로 떼어 놓을 수 있고, 따라서 콤팩트 집합은 닫힌집합이다. 콤팩트 집합들의 교집합은 콤팩트이고, 하우스도르프가 아니면 콤팩트 집합이 닫혀 있지 않을 수 있다.
requires: [set, subset, set-operations, family-of-sets, finite-set, adding-or-removing-an-element, disjoint-union-count, natural-numbers-are-infinite, real-order-axioms, order-properties-of-reals, absolute-value, interval, open-ball, topological-space, topology-examples, closed-set, neighborhood, open-and-closed-sets-of-reals, standard-topology-on-reals, lower-limit-topology, hausdorff-space, metric-space-is-hausdorff, compact-space, closed-subset-of-compact]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness 절의 Theorem compact-in-Hausdorff 와 증명, content/compactness.tex:44–54; 예 29–31; 연습문제 3.1 (b), 3.3, content/exercises.tex:101, 109; Separation -- part 2 절의 Proposition compact-hausdorff-normal, content/separation.tex:42–48; Separation axioms and Hausdorff spaces 절의 문장과 Proposition points-closed-in-t1, 예, content/topological-spaces.tex:654–670; Basis for a topology 절의 Lemma, 180–188"
    checked: original
    note: "(2)는 출처의 Theorem compact-in-Hausdorff(44–47)와 같다. 출처의 증명(48–54)은 A 의 각 점 y 마다 x 와 y 의 서로소인 근방 U_y, V_y 를 두고, 유한 개 y₁, …, y_n 을 골라 U^x = U_{y₁} ∩ ⋯ ∩ U_{y_n} 이 Aᶜ 에 든다는 것을 보인다. 이 항목은 'x 를 품고 S 와 서로소인 열린집합이 있다'를 만족하는 S 전체의 집합족이 두 원소의 합집합에 닫혀 있음을 보이고 compact-space 의 (1)을 써서, 유한 부분덮개의 원소마다 짝 U 를 고르지 않는다. (1)은 출처 증명 안에서 얻는 U^x 와 V_{y₁} ∪ ⋯ ∪ V_{y_n} 에 해당하는 것을 진술로 올린 것이다. 출처는 콤팩트 하우스도르프 공간이 정규 공간이라는 Proposition compact-hausdorff-normal(separation.tex:42–48)의 증명을 연습문제 3.3(exercises.tex:109)으로 두고, 이 항목은 정규 공간을 다루지 않는다. (3)은 출처 연습문제 3.1 (b)(exercises.tex:101, 하우스도르프 공간에서 콤팩트 부분공간들의 족 {K_i}_{i∈I} 의 교집합은 콤팩트)와 같은 진술이다. 출처의 연습문제는 첨수 집합 I 에 조건을 적지 않고, 이 항목은 빈 족의 경우를 따로 적는다. 예시 '닫혀 있지 않은 실수의 부분집합'의 '(0, 1] 은 콤팩트가 아니다'는 출처의 예(29–31)와 같은 결론이다. 출처는 덮개 (1/n, 1] 로 보이고, 이 항목은 닫혀 있지 않다는 것으로 보인다. (4)의 (i)의 공간이 하우스도르프가 아니라는 것은 출처 content/topological-spaces.tex:669 의 예와 같은 결론이다. 확인 질문 '하우스도르프 공간에서 유한 부분집합이 닫혀 있다는 것을 이 항목으로 보일 수 있는가'와 비슷한 결론을 출처는 T₂ 공간이 T₁ 이라는 문장(topological-spaces.tex:654)과 Proposition points-closed-in-t1(655–667: T₁ 인 것은 정확히 한 점 집합이 모두 닫혀 있을 때)로 적는다. 확인 질문 'K 가 ℝ_l 의 콤팩트 부분집합이면 닫혀 있는가'가 쓰는 '보통 위상은 아래끝 위상에 포함된다'는 출처 topological-spaces.tex:180–183 의 Lemma(ℝ_l 은 보통 위상보다 진짜로 섬세하다)와 같은 결론이다."
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Proposition 7.4.9 와 증명의 뒤 부분 (p.280–281), 그 아래 문단 (p.282); 7.2.3절 Example 7.2.20 (p.270)"
    checked: original
    note: "출처 Proposition 7.4.9(p.280)는 거리공간에서 콤팩트 집합이 닫혀 있고 유계라고 진술하고, 닫혀 있다는 부분(p.281)은 폐포에 있고 K 에 없는 점 x 를 잡아 닫힌 공 C(x, 1/n) 의 여집합들로 된 덮개가 유한 부분덮개를 갖지 않음을 보인다. 이 항목의 (2)를 거리위상에 쓰면 그 닫힌다는 부분이 나온다(거리공간은 하우스도르프 공간이다). 이 항목의 증명은 하우스도르프 성질과 compact-space 의 (1)을 쓴다. 예시 '닫혀 있지 않은 실수의 부분집합'이 쓰는 '(0, 1] 은 ℝ 에서 닫혀 있지 않다'는 출처 p.282 의 문단이 같은 대상에 대해 적는 것과 같다. 반례 '열린구간과 그 끝점'의 점 0 과 (0, 1) 에 대해, 출처 Example 7.2.20(p.270)은 (0, 1) 의 폐포가 [0, 1] 이라고 보인다(0 이 (0, 1) 의 폐포에 든다는 같은 대상의 사실)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 직관 문장 2건, 다른 항목의 증명을 근거로 삼은 곳, 넘겨짚은 단원 글 문장을 고쳤다."
added: 2026-11-19
---

:::statement
하우스도르프 공간과 $T_1$ 공간, 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$는 [[hausdorff-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 닫힌집합은 [[closed-set]]의 것이다. 콤팩트 공간, 콤팩트 부분집합(콤팩트 집합), $\mathcal{K}_{\mathcal{U}}$와 유한 합집합의 보조정리는 [[compact-space]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

1. (점과 콤팩트 집합의 분리) $(X, \mathcal{T})$가 하우스도르프 공간이고 $K$가 $X$의 콤팩트 부분집합이며 $x \in X - K$이면, $K \subseteq W$이고 $U \cap W = \emptyset$인 $x$의 근방 $U$와 열린집합 $W$가 있다.
2. (닫혀 있다) $(X, \mathcal{T})$가 하우스도르프 공간이면 $X$의 콤팩트 부분집합은 모두 닫힌집합이다.
3. (교집합) $(X, \mathcal{T})$가 하우스도르프 공간이라 하자.
   - (i) $K$, $L$이 콤팩트 부분집합이면 $K \cap L$은 콤팩트 부분집합이다.
   - (ii) $\mathcal{C}$가 콤팩트 부분집합들로 이루어진 $X$의 집합족이고 $\mathcal{C} \ne \emptyset$이면 $\bigcap \mathcal{C}$는 콤팩트 부분집합이다.
   - (iii) $\mathcal{C} = \emptyset$이면 $\bigcap \mathcal{C} = X$이고, 이것이 콤팩트 부분집합인 것은 정확히 $(X, \mathcal{T})$가 콤팩트일 때이다. 예컨대 보통 위상을 준 $\mathbb{R}$에서 빈 족의 교집합 $\mathbb{R}$은 콤팩트 부분집합이 아니다.
4. (하우스도르프가 아닌 공간) 하우스도르프가 아닌 공간에서는 콤팩트 부분집합이 닫혀 있지 않을 수 있다.
   - (i) $a \ne b$이고 $X = \{a, b\}$에 밀착위상을 주면 $\{a\}$는 콤팩트 부분집합이지만 닫힌집합이 아니다.
   - (ii) $\mathbb{N}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 주면 $\mathbb{N} - \{1\}$은 콤팩트 부분집합이지만 닫힌집합이 아니다.
:::

:::english
Hausdorff spaces, $T_1$ spaces and the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ are as in the entry on $T_1$ and Hausdorff spaces, neighborhoods are as in the entry on neighborhoods, and closed sets are as in the entry on closed sets. Compact spaces, compact subsets (compact sets), $\mathcal{K}_{\mathcal{U}}$ and the lemma on finite unions are as in the entry on open covers and compact spaces. Below, $(X, \mathcal{T})$ is a topological space.

1. (Separating a point from a compact set) If $(X, \mathcal{T})$ is a Hausdorff space, $K$ is a compact subset of $X$ and $x \in X - K$, then there are a neighborhood $U$ of $x$ and an open set $W$ with $K \subseteq W$ and $U \cap W = \emptyset$.
2. (Closedness) If $(X, \mathcal{T})$ is a Hausdorff space, then every compact subset of $X$ is a closed set.
3. (Intersections) Let $(X, \mathcal{T})$ be a Hausdorff space.
   - (i) If $K$ and $L$ are compact subsets, then $K \cap L$ is a compact subset.
   - (ii) If $\mathcal{C}$ is a family of subsets of $X$ consisting of compact subsets and $\mathcal{C} \ne \emptyset$, then $\bigcap \mathcal{C}$ is a compact subset.
   - (iii) If $\mathcal{C} = \emptyset$, then $\bigcap \mathcal{C} = X$, and this is a compact subset exactly when $(X, \mathcal{T})$ is compact. For example, in $\mathbb{R}$ with the standard topology the intersection $\mathbb{R}$ of the empty family is not a compact subset.
4. (Spaces that are not Hausdorff) In a space that is not Hausdorff, a compact subset may fail to be closed.
   - (i) If $a \ne b$ and $X = \{a, b\}$ carries the indiscrete topology, then $\{a\}$ is a compact subset but not a closed set.
   - (ii) If $\mathbb{N}$ carries the cofinite topology $\mathcal{T}_{\mathrm{cof}}$, then $\mathbb{N} - \{1\}$ is a compact subset but not a closed set.
:::

## 직관

$K$ 밖의 점 $x$를 하나 정해 둡시다. 하우스도르프 공간이므로 $K$의 점 $y$마다 $x$의 근방과 $y$의 근방을 서로소로 잡을 수 있습니다. $y$ 쪽 근방들은 $K$를 덮고, $K$가 콤팩트이므로 그 가운데 유한 개로 $K$가 덮입니다. 그 유한 개 각각에 짝인 $x$의 근방이 있으니, 짝들의 교집합은 유한 개의 교집합이라 여전히 $x$의 근방이고, 덮은 것 전체와 만나지 않습니다. 그래서 $x$의 근방이 $K$ 밖에 머물고, $x$가 아무 점이었으므로 $K$의 바깥이 열린집합입니다.

이 강의는 "그 유한 개 각각에 짝을 하나씩 잡는" 단계도 쓰지 않습니다. 대신 "$x$를 품고 $S$와 서로소인 열린집합이 있다"는 성질을 가진 부분집합 $S$ 전체를 생각합니다. 두 집합 $S$, $T$가 이 성질을 가지면 두 짝의 교집합이 $S \cup T$의 짝이 되므로 이 집합족은 두 원소의 합집합에 닫혀 있고, [[compact-space]]의 (1)이 유한 개의 합집합까지 넓혀 줍니다. 짝은 고르는 것이 아니라 "있다"로 조건 안에 들어 있습니다.

비유하자면 $x$는 감시를 피하려는 사람이고 $K$는 콤팩트한 구역입니다. 구역의 모든 지점에서 "그 지점과 $x$ 사이에 벽을 세울 수 있다"면(하우스도르프), 구역 전체와 $x$ 사이에도 벽을 세울 수 있습니다(1). 지점이 무한히 많아도 구역이 콤팩트하면 유한 개의 벽을 합치면 되기 때문입니다. 벽 하나가 서로소인 두 근방에, "유한 개를 합친다"가 [[compact-space]]의 (1)에 맞습니다.

하우스도르프 가정은 점마다 짝을 세우는 첫 단계에서만 쓰입니다. (4)의 (i)의 밀착위상에서는 $b$의 근방이 $X$ 하나뿐이어서 $b$를 $a$와 떼어 놓을 수 없고, (ii)의 $\mathbb{N}$ 위의 여유한 위상에서는 공집합이 아닌 두 열린집합이 늘 만납니다. 두 경우 모두 닫혀 있지 않은 콤팩트 집합이 있습니다.

## 증명

:::idea
$x$를 품고 $S$와 서로소인 열린집합이 있는 집합 $S$ 전체가 두 원소의 합집합에 닫혀 있음을 보이고, 유한 합집합의 보조정리로 $K$까지 넓힌다.
:::

:::hint
$X$의 부분집합 $S$ 가운데 $x$를 품고 $S$와 서로소인 열린집합(짝)이 있는 것 전체의 집합족 $\mathcal{K}$를 생각합니다. $S$, $T$의 짝이 $U_1$, $U_2$이면 $S \cup T$의 짝으로 무엇을 쓸 수 있을까요?
:::

:::hint
$K$를 덮는 열린집합들로 $\mathcal{K}$의 원소인 열린집합 전체를 씁니다. 하우스도르프 성질이 그것이 $K$를 덮는다는 것을 줍니다.
:::

:::proof
"콤팩트 (1)"처럼 쓴 것은 [[compact-space]]의 번호이고, "근방 (2)"처럼 쓴 것은 [[neighborhood]]의 번호이다.

**(1).** $X$의 부분집합 $S$ 가운데 $x \in U$이고 $U \cap S = \emptyset$인 열린집합 $U$가 있는 것 전체의 집합족을 $\mathcal{K}$라 하자. 이런 $U$를 $S$의 짝이라 부른다.
근방 (1)에 의해 $X$는 $x$의 근방이고 $X \cap \emptyset = \emptyset$이므로 $\emptyset \in \mathcal{K}$이다. $S$, $T \in \mathcal{K}$이고 $U_1$, $U_2$가 각각 $x$를 품고 $U_1 \cap S = \emptyset$, $U_2 \cap T = \emptyset$인 열린집합이라 하자. 근방 (2)에 의해 $U = U_1 \cap U_2$는 $x$의 근방이다. $z \in U \cap (S \cup T)$인 점이 있다면 $z \in S$일 때 $z \in U_1 \cap S$이고 $z \in T$일 때 $z \in U_2 \cap T$이어서 모순이므로 $U \cap (S \cup T) = \emptyset$이다. 따라서 $S \cup T \in \mathcal{K}$이다. 곧 $\mathcal{K}$는 콤팩트 (1)의 가정을 만족한다.

열린집합들의 집합족 $\mathcal{V} = \{V \in \mathcal{T} : V \in \mathcal{K}\}$를 둔다. $y \in K$이면 $x \notin K$이므로 $y \ne x$이고, 하우스도르프 공간의 정의에 의해 $U \cap V = \emptyset$인 $x$의 근방 $U$와 $y$의 근방 $V$가 있다. $V$는 열린집합이고 $U$가 $x$를 품으며 $U \cap V = \emptyset$이므로 $V \in \mathcal{K}$, 곧 $V \in \mathcal{V}$이고 $y \in V$이다. 따라서 $K \subseteq \bigcup \mathcal{V}$이다. $K$가 콤팩트 부분집합이므로 콤팩트 (3)의 (a)에서 (b)로 $K \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다.

$W = \bigcup \mathcal{F}$로 둔다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{T}$이므로 [[topological-space]]의 조건 (ii)에 의해 $W$는 열린집합이고, $K \subseteq W$이다. 또 $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이고 $\mathcal{F}$가 유한집합이므로 콤팩트 (1)의 (i)에 의해 $W \in \mathcal{K}$이다. 곧 $x \in U$이고 $U \cap W = \emptyset$인 열린집합 $U$가 있고, 이 $U$는 $x$의 근방이다.

**(2).** $K$가 콤팩트 부분집합이라 하고 $X - K$의 점 $x$를 잡는다. (1)의 $U$와 $W$에 대하여 $U \cap K \subseteq U \cap W = \emptyset$이므로 $U \subseteq X - K$이다. 곧 $X - K$의 모든 점 $x$에 대하여 $x \in U$이고 $U \subseteq X - K$인 열린집합 $U$가 있으므로, [[topological-space]]의 (3)의 (b)에서 (a)로 $X - K$는 열린집합이다. [[closed-set]]의 정의에 의해 $K$는 닫힌집합이다. ($K = X$이면 $X - K = \emptyset$이고 이 문단은 할 일이 없다.)

**(3).** (ii) $\mathcal{C} \ne \emptyset$이므로 원소 $K_0 \in \mathcal{C}$를 하나 잡는다. (2)에 의해 $\mathcal{C}$의 원소는 모두 닫힌집합이므로, [[closed-set]]의 (2)에 의해 $\bigcap \mathcal{C}$는 닫힌집합이다. [[family-of-sets]]의 (1)에 의해 $\bigcap \mathcal{C} \subseteq K_0$이다. $K_0$이 콤팩트 부분집합이고 $\bigcap \mathcal{C}$가 닫힌집합이며 $K_0$에 포함되므로, [[closed-subset-of-compact]]의 (2)에 의해 $\bigcap \mathcal{C}$는 콤팩트 부분집합이다.

(i) $\mathcal{C} = \{K, L\}$로 두면 $\mathcal{C} \ne \emptyset$이고 [[family-of-sets]]의 (3)에 의해 $\bigcap \mathcal{C} = K \cap L$이므로 (ii)에서 나온다.

(iii) [[family-of-sets]]의 빈 집합족 단락에 의해 $X$의 집합족으로 본 $\bigcap \emptyset$은 $X$이다. [[compact-space]]의 콤팩트 집합 단락에 의해 $X$가 콤팩트 부분집합인 것은 정확히 $(X, \mathcal{T})$가 콤팩트일 때이다. 보통 위상을 준 $\mathbb{R}$은 [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (i)에 의해 하우스도르프 공간이고, 콤팩트 (8)의 (vi)에 의해 콤팩트가 아니다.

**(4).** (i) [[hausdorff-space]]의 (4)에 의해 이 공간은 하우스도르프 공간이 아니다. $\{a\}$는 [[finite-set]]의 (F2)와 [[adding-or-removing-an-element]]의 (a)에 의해 원소를 $1$개 갖는 유한집합이므로 콤팩트 (8)의 (ii)에 의해 콤팩트 부분집합이고, [[closed-set]]의 (7)에 의해 닫힌집합이 아니다.

(ii) [[hausdorff-space]]의 (5)에 의해 $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$는 하우스도르프 공간이 아니다. 콤팩트 (8)의 (v)에 의해 $A = \mathbb{N} - \{1\}$은 콤팩트 부분집합이다. $A$가 닫힌집합이라면 $\mathbb{N} - A = \{1\}$이 $\mathcal{T}_{\mathrm{cof}}$의 원소이다. $\{1\} \ne \emptyset$이므로 여유한 위상의 정의에 의해 $\mathbb{N} - \{1\} = A$가 유한집합이어야 한다. 그런데 $1 \in \mathbb{N}$이므로 $\mathbb{N} = A \cup \{1\}$이고, $A$와 $\{1\}$이 유한집합이면 [[disjoint-union-count]]의 (3)에 의해 $\mathbb{N}$이 유한집합이 되어 [[natural-numbers-are-infinite|자연수의 집합이 무한집합이라는 항목]]의 (1)과 모순이다. 따라서 $A$는 닫힌집합이 아니다.
:::

## 예시와 반례

:::example[닫혀 있지 않은 실수의 부분집합]
보통 위상을 준 $\mathbb{R}$은 하우스도르프 공간이므로([[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (i)), (2)의 대우에 의해 닫혀 있지 않은 부분집합은 콤팩트 부분집합이 아닙니다. 예컨대 [[open-and-closed-sets-of-reals]]의 (3)에 의해 반열린구간 $(0, 1]$은 닫혀 있지 않으므로 콤팩트 부분집합이 아니고, 같은 항목의 (6)의 (ii)에 의해 $\mathbb{Q}$도 닫혀 있지 않으므로 콤팩트 부분집합이 아닙니다. 덮개를 하나도 만들지 않고 콤팩트가 아님을 안 셈입니다.
:::

:::counterexample[열린구간과 그 끝점]
(1)에서 $K$가 콤팩트라는 가정은 뺄 수 없습니다. $\mathbb{R}$에서 $K = (0, 1)$과 $K$ 밖의 점 $0$을 봅시다. 보통 위상은 보통 거리의 거리위상이므로([[standard-topology-on-reals]]의 (5)), $U$가 $0$의 근방이고 $W$가 $K$를 포함하는 열린집합이라 하면 [[neighborhood]]의 (4)의 (b)에 의해 $B(0, r) \subseteq U$인 실수 $r > 0$이 있고, [[open-ball]]의 (5)에 의해 $B(0, r)$은 열린구간 $(-r, r)$입니다. $m = \min\{r, 1\}$이라 하면 [[absolute-value]]의 (10)에 의해 $m$은 $r$이거나 $1$이므로 양수이고 $m \le r$, $m \le 1$이며, $t = m/2$는 [[order-properties-of-reals]]의 (8)에 의해 $0 < t < m$입니다. 따라서 $0 < t < 1$이고 $-r < 0 < t < r$이므로 $t \in K \subseteq W$이고 $t \in (-r, r) \subseteq U$입니다. 곧 $U \cap W \ne \emptyset$이어서, 점 $0$과 $(0, 1)$은 서로소인 두 열린집합으로 떼어 놓을 수 없습니다. [[compact-space]]의 (8)의 (vi)에 의해 $(0, 1)$은 콤팩트가 아니므로 (1)과 어긋나지 않습니다.
:::

## 확인 질문

:::check[$K$가 $\mathbb{R}_l$의 콤팩트 부분집합이면 $K$는 $\mathbb{R}_l$에서 닫혀 있는가? 보통 위상에서는?]
둘 다 닫혀 있습니다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (ii)에 의해 $\mathbb{R}_l$은 하우스도르프 공간이므로 (2)에 의해 $K$는 $\mathbb{R}_l$에서 닫혀 있습니다. 또 [[lower-limit-topology]]의 (2)에 의해 보통 위상은 아래끝 위상에 포함되므로, [[compact-space]]의 (7)의 (i)에 의해 $K$는 보통 위상에서도 콤팩트 부분집합이고, $\mathbb{R}$이 하우스도르프이므로 보통 위상에서도 닫혀 있습니다.
:::

:::check[하우스도르프 공간에서 유한 부분집합이 닫혀 있다는 것을 이 항목으로 보일 수 있는가?]
보일 수 있습니다. 유한 부분집합은 [[compact-space]]의 (8)의 (ii)에 의해 콤팩트 부분집합이고, (2)에 의해 닫힌집합입니다. 이것은 [[hausdorff-space]]의 (1)과 (2)(하우스도르프이면 $T_1$이고, $T_1$에서는 유한 부분집합이 닫혀 있다)와 같은 결론을 다른 길로 얻은 것입니다.
:::
