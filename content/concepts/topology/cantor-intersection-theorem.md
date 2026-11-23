---
title: 칸토어 교집합 정리
title_en: Cantor's Intersection Theorem
aliases: [칸토어의 교집합 정리, Cantor's intersection theorem, 콤팩트 집합의 감소열, 집합의 감소열, decreasing sequence of sets]
kind: theorem
field: topology
msc: ["54D30", "54E45"]
level: undergrad
summary: 하우스도르프 공간, 특히 거리공간에서 공집합이 아닌 콤팩트 부분집합들의 감소하는 수열의 교집합은 공집합이 아니다. 첫 집합이 콤팩트이고 모두 닫혀 있으면 위상공간에서도 그렇고, 거리공간에서 지름이 0 으로 수렴하면 교집합은 한 점이다. 콤팩트가 아니거나, 닫혀 있지 않거나, 하우스도르프가 아니면 교집합이 빌 수 있다.
requires: [set, subset, set-operations, power-set, function, family-of-sets, negation-of-quantified-statements, proof-by-contradiction, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, interval, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, limits-preserve-inequalities, topological-space, closed-set, hausdorff-space, topology-examples, metric-space, metric-space-examples, metric-space-is-hausdorff, sequence-in-a-space, compact-space, compact-subset-of-hausdorff-is-closed, closed-interval-is-compact, compact-metric-closed-and-bounded, diameter, open-and-closed-sets-of-reals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.3소절 Exercises 의 연습문제 7.4.10 (p.286); 7.2.1소절 Example 7.2.7 (p.266); 1.4.1소절 연습문제 1.4.6 (p.43); 7.3.4소절 연습문제 7.3.8 (p.277)"
    checked: original
    note: "출처 연습문제 7.4.10(p.286)은 (X, d) 가 완비이고 공집합이 아닌 콤팩트 집합들의 가산 무한 족 E_1 ⊃ E_2 ⊃ E_3 ⊃ ⋯ 이 있으면 ⋂_{j=1}^∞ E_j ≠ ∅ 임을 보이라고 한다. 이 항목의 (3)은 완비 가정 없이 하우스도르프 공간(거리공간 포함)에서 같은 결론을 진술한다. 출처는 증명을 독자에게 맡기고, 출처의 번호 붙은 문장에서 '칸토어 교집합 정리'라는 이름은 찾지 못했다(source-grep 'Cantor' 17건은 칸토어–베른슈타인–슈뢰더 정리, Theorem 0.3.34, 1.4.2, 1.5.2, 칸토어 대각선 논법과 색인; 'nested' 0건, 'intersection theorem' 0건). 이 이름은 fuglede-basic-topology 에 있다. 감소열 (E_j) 를 출처는 집합들의 족으로 적고, 이 항목은 𝒫(X) 의 수열로 적는다. 예시 '0 으로 줄어드는 닫힌구간들'의 교집합 {0} 은 출처 Example 7.2.7(p.266: 열린구간 (−1/n, 1/n) 들의 교집합이 {0} 이다)과 같은 교집합을 닫힌구간으로 본 것이고, 출처 연습문제 1.4.6 c)(p.43: 공집합이 아닌 족의 유계 닫힌구간들의 교집합은 공집합, 한 점, 유계 닫힌구간 가운데 하나이다)와 같은 대상을 다룬다. 출처 연습문제 7.3.8(p.277)은 교집합이 {p} 인 열린집합들의 감소열을 다룬다."
  - ref: fuglede-basic-topology
    loc: "Set #3 소절, 베어 범주 정리 연습문제의 힌트 (b), content/exercises.tex:124–137 ((b)는 131–135)"
    checked: original
    note: "출처는 위상공간의 공집합이 아닌 콤팩트 부분집합 K_1 ⊃ K_2 ⊃ ⋯ 의 교집합이 공집합이 아님을 보이라고 하고, 이 결과를 Cantor's intersection theorem 이라 부른다(131–135). 이 문제는 국소 콤팩트 하우스도르프 공간의 베어 범주 정리 연습문제(124)의 힌트에 들어 있다. 이 항목의 (3)은 하우스도르프 공간에서 진술하고, (2)는 K_1 이 콤팩트이고 모든 K_n 이 닫힌집합인 위상공간에서 진술한다. 반례 '하우스도르프가 아닌 공간에서는 교집합이 빌 수 있다'는 여유한 위상을 준 ℕ 에서 콤팩트 부분집합들의 감소열의 교집합이 공집합인 예이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 근거 없던 설명 문장 5건, 틀린 인용 번호 2건, 메모의 쪽 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
위상공간, 닫힌집합, 하우스도르프 공간은 [[topological-space]], [[closed-set]], [[hausdorff-space]]의 것이고, 콤팩트 부분집합은 [[compact-space]]의 것이다. 집합의 수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 수열 단락의 것이고, 집합족과 식으로 정한 집합족, 그 교집합은 [[family-of-sets]]의 것이다. 거리공간에는 거리위상을 주고, 지름은 [[diameter]]의 것이며, 실수열의 수렴은 [[limit-of-sequence]]의 것이다.

**집합의 감소열.** $X$가 집합일 때 $\mathscr{P}(X)$의 수열 $(K_n)$, 곧 함수 $\mathbb{N} \to \mathscr{P}(X)$를 **$X$의 부분집합의 수열**이라 한다. $(K_n)$이 **감소한다**(decreasing)는 것은 정확히 모든 자연수 $n$에서 $K_{n+1} \subseteq K_n$일 때이다. $(K_n)$의 교집합은 식으로 정한 $X$의 집합족 $\{K_n : n \in \mathbb{N}\}$의 교집합
$$
\bigcap \{K_n : n \in \mathbb{N}\}
$$
이다. [[family-of-sets]]의 (9)에 의해 대상 $a$가 이 교집합의 원소인 것은 정확히 $a \in X$이고 모든 자연수 $n$에서 $a \in K_n$일 때이다.

1. (감소열의 두 항) $(K_n)$이 $X$의 부분집합의 감소하는 수열이면, $n \le m$인 모든 자연수 $n$, $m$에서 $K_m \subseteq K_n$이다.
2. (첫 집합이 콤팩트이고 모두 닫혀 있는 경우) $(X, \mathcal{T})$가 위상공간이고 $(K_n)$이 $X$의 부분집합의 감소하는 수열이며, 모든 $K_n$이 공집합이 아닌 닫힌집합이고 $K_1$이 $X$의 콤팩트 부분집합이면 $\bigcap \{K_n : n \in \mathbb{N}\} \ne \emptyset$이다.
3. (칸토어 교집합 정리) $(X, \mathcal{T})$가 하우스도르프 공간이고 $(K_n)$이 $X$의 공집합이 아닌 콤팩트 부분집합들의 감소하는 수열이면 $\bigcap \{K_n : n \in \mathbb{N}\} \ne \emptyset$이다. 특히 거리공간에서 그렇다.
4. (지름이 0 으로 수렴하는 경우) $(X, d)$가 거리공간이고 $(K_n)$이 $X$의 공집합이 아닌 콤팩트 부분집합들의 감소하는 수열이라 하자. 각 $K_n$은 공집합이 아니고 유계이므로 지름 $\operatorname{diam} K_n$이 정해진다. $n$번째 항이 $\operatorname{diam} K_n$인 실수열이 $0$으로 수렴하면, $\bigcap \{K_n : n \in \mathbb{N}\} = \{p\}$인 점 $p \in X$가 있다.
:::

:::english
Topological spaces, closed sets and Hausdorff spaces are as in the entries on topological spaces, closed sets and Hausdorff spaces, and compact subsets as in the entry on open covers and compact spaces. Sequences of sets are as in the paragraph on sequences of the entry on sequences and convergence in a topological space, and families of sets, families defined by a formula and their intersections are as in the entry on families of sets. Metric spaces carry the metric topology, the diameter is as in the entry on the diameter, and convergence of real sequences is as in the entry on limits of sequences.

**Decreasing sequences of sets.** For a set $X$, a sequence $(K_n)$ in $\mathscr{P}(X)$, that is, a function $\mathbb{N} \to \mathscr{P}(X)$, is called a **sequence of subsets of $X$**. $(K_n)$ is **decreasing** exactly when $K_{n+1} \subseteq K_n$ for every natural number $n$. The intersection of $(K_n)$ is the intersection
$$
\bigcap \{K_n : n \in \mathbb{N}\}
$$
of the family $\{K_n : n \in \mathbb{N}\}$ of subsets of $X$ defined by a formula. By (9) of the entry on families of sets, an object $a$ belongs to this intersection exactly when $a \in X$ and $a \in K_n$ for every natural number $n$.

1. (Two terms of a decreasing sequence) If $(K_n)$ is a decreasing sequence of subsets of $X$, then $K_m \subseteq K_n$ for all natural numbers $n \le m$.
2. (When the first set is compact and all are closed) If $(X, \mathcal{T})$ is a topological space, $(K_n)$ is a decreasing sequence of subsets of $X$, every $K_n$ is a nonempty closed set, and $K_1$ is a compact subset of $X$, then $\bigcap \{K_n : n \in \mathbb{N}\} \ne \emptyset$.
3. (Cantor's intersection theorem) If $(X, \mathcal{T})$ is a Hausdorff space and $(K_n)$ is a decreasing sequence of nonempty compact subsets of $X$, then $\bigcap \{K_n : n \in \mathbb{N}\} \ne \emptyset$. In particular this holds in a metric space.
4. (When the diameters tend to 0) Let $(X, d)$ be a metric space and $(K_n)$ a decreasing sequence of nonempty compact subsets of $X$. Each $K_n$ is nonempty and bounded, so its diameter $\operatorname{diam} K_n$ is defined. If the real sequence whose $n$th term is $\operatorname{diam} K_n$ converges to $0$, then there is a point $p \in X$ with $\bigcap \{K_n : n \in \mathbb{N}\} = \{p\}$.
:::

## 직관

공집합이 아닌 집합들을 점점 줄여 가면, 하나하나는 공집합이 아니어도 모두에 공통인 점은 없을 수 있습니다. 실수에서 $n$ 이상인 수 전체의 집합들은 줄어들면서 모든 점을 언젠가 놓치고, $0$보다 크고 $n^{-1}$ 이하인 수 전체의 집합들은 $0$ 쪽으로 몰리지만 $0$ 자신은 담지 않습니다(아래 반례). 칸토어 교집합 정리는 하우스도르프 공간에서 집합들이 콤팩트이면 이런 일이 없다고 말합니다.

까닭은 여집합으로 보면 드러납니다. 교집합이 비어 있다면 $K_1$의 모든 점이 어떤 $K_n$ 밖에, 곧 열린집합 $X - K_n$ 안에 있으므로 이 열린집합들이 $K_1$을 덮습니다. $K_1$이 콤팩트이므로 그 가운데 유한 개로 덮이고, 유한 개의 $X - K_n$은 모두 어떤 하나의 $K_m$과 만나지 않습니다. 그런데 $K_m$은 $K_1$ 안에 있으니 공집합이어야 해서 모순입니다. 콤팩트라는 가정은 유한 개로 줄이는 데에, 닫혀 있다는 가정은 $X - K_n$이 열린집합이라는 데에 쓰입니다. 하우스도르프 공간에서는 콤팩트 집합이 저절로 닫혀 있습니다.

이 항목은 유한 개의 첨자 가운데 가장 큰 것을 잡지 않습니다. "어떤 $K_m$과 만나지 않는 집합" 전체가 두 집합의 합집합에 닫혀 있다는 것을, 두 첨자의 합 $m_1 + m_2$로 보이고 [[compact-space|유한 합집합의 보조정리]]를 씁니다.

거리공간에서 지름까지 $0$으로 줄어들면 교집합은 꼭 한 점입니다. 교집합의 두 점 사이의 거리는 모든 지름 이하이므로 $0$이어야 하기 때문입니다. 이 이름은 사이트의 [[cantors-theorem|칸토어 정리]](집합과 그 멱집합의 크기)와 다른 정리이므로 늘 "칸토어 교집합 정리"라고 부릅니다.

## 증명

:::idea
교집합이 비어 있다고 하면 여집합 $X - K_n$들이 $K_1$을 덮는다. "어떤 $K_m$과 만나지 않는 집합" 전체에 유한 합집합의 보조정리를 써서 하나의 $K_m$이 공집합이라는 모순을 얻는다.
:::

:::hint
$S \cap K_{m_1} = \emptyset$이고 $T \cap K_{m_2} = \emptyset$이면 (1)에 의해 $K_{m_1 + m_2}$는 $K_{m_1}$과 $K_{m_2}$에 모두 포함되므로 $S \cup T$와 만나지 않습니다.
:::

:::proof
자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 순서에는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰며, 정수의 합은 정수이다([[even-and-odd]]). "순서 성질 (1)의 (ii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "콤팩트 (1)"은 [[compact-space]]의 번호이다.

**(1).** 자연수 $n$을 고정하고, $n$ 이상인 정수 $m$에 대한 명제 "$K_m \subseteq K_n$"을 [[mathematical-induction|수학적 귀납법]]의 시작점이 $n$인 꼴로 보인다. $m = n$이면 $K_n \subseteq K_n$이다. $m \ge n$이고 $K_m \subseteq K_n$이면, $m$은 자연수이므로 감소의 정의에 의해 $K_{m+1} \subseteq K_m \subseteq K_n$이다.

**(2).** 교집합이 공집합이라고 하자([[proof-by-contradiction|귀류법]]). 자연수 $n$마다 $U_n = X - K_n$으로 두면 $K_n$이 닫힌집합이므로 [[closed-set]]의 정의에 의해 $U_n \in \mathcal{T}$이다. $\mathcal{V} = \{U_n : n \in \mathbb{N}\}$는 식으로 정한 $X$의 집합족이고 원소가 모두 열린집합이다.

*$\mathcal{V}$는 $K_1$을 덮는다.* $x \in K_1$이면 $x \in X$이고 $x$는 교집합의 원소가 아니므로, [[family-of-sets]]의 (9)와 [[negation-of-quantified-statements|한정 명제의 부정]]에 의해 $x \notin K_n$인 자연수 $n$이 있다. 그러면 $x \in U_n$이고, [[family-of-sets]]의 (9)에 의해 $x \in \bigcup \mathcal{V}$이다.

*집합족 $\mathcal{K}$.* $\mathscr{P}(X)$의 원소 $S$ 가운데 "$S \cap K_m = \emptyset$인 자연수 $m$이 있다"를 만족하는 것 전체를 $\mathcal{K}$라 하자. $\emptyset \cap K_1 = \emptyset$이므로 $\emptyset \in \mathcal{K}$이다. $S, T \in \mathcal{K}$이고 각각의 자연수를 $m_1$, $m_2$라 하자. $m = m_1 + m_2$는 정수이고, (Z1)에 의해 $m_2 \ge 1$이므로 (Z7), (L3), (Z6)에 의해 $m > m_1 \ge 1 > 0$((Z8))이어서 자연수이며, 같은 방법으로 $m > m_2$이다. (1)에 의해 $K_m \subseteq K_{m_1}$이고 $K_m \subseteq K_{m_2}$이다. $a \in (S \cup T) \cap K_m$이면 $a \in S$이고 $a \in K_{m_1}$이거나, $a \in T$이고 $a \in K_{m_2}$인데, 둘 다 $S \cap K_{m_1} = \emptyset$, $T \cap K_{m_2} = \emptyset$에 어긋난다. 따라서 $(S \cup T) \cap K_m = \emptyset$이고 $S \cup T \in \mathcal{K}$이다. 그러므로 $\mathcal{K}$는 콤팩트 (1)의 가정을 만족한다. 또 $U_n \cap K_n = (X - K_n) \cap K_n = \emptyset$이므로 $\mathcal{V} \subseteq \mathcal{K}$이다.

*모순.* $K_1$이 콤팩트 부분집합이고 $\mathcal{V}$가 $K_1 \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이므로, 콤팩트 (3)에 의해 $K_1 \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이므로 콤팩트 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이고, $\bigcup \mathcal{F} \cap K_m = \emptyset$인 자연수 $m$이 있다. (Z1)에 의해 $m \ge 1$이므로 (1)에 의해 $K_m \subseteq K_1 \subseteq \bigcup \mathcal{F}$이고, 따라서 $K_m = \bigcup \mathcal{F} \cap K_m = \emptyset$이다. 이것은 $K_m$이 공집합이 아니라는 가정에 어긋난다. 그러므로 교집합은 공집합이 아니다.

**(3).** [[compact-subset-of-hausdorff-is-closed|하우스도르프 공간의 콤팩트 부분집합은 닫혀 있다]]의 (2)에 의해 모든 $K_n$은 닫힌집합이고, $K_1$은 콤팩트 부분집합이므로 (2)에 의해 교집합은 공집합이 아니다. 거리공간 $(X, d)$에서는 [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $(X, \mathcal{T}_d)$가 하우스도르프 공간이므로 그렇다.

**(4).** [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (3)에 의해 각 $K_n$은 유계이고, 공집합이 아니므로 [[diameter]]의 정의에 의해 $\operatorname{diam} K_n$이 정해지며, [[sequence]]의 (1)에 의해 $n$번째 항이 $\operatorname{diam} K_n$인 실수열이 있다. (3)에 의해 교집합의 점 $p$가 있다. 교집합의 점 $q$를 잡는다. 모든 자연수 $n$에서 $p$, $q \in K_n$이므로 [[diameter]]의 (2)의 (ii)에 의해 $d(p, q) \le \operatorname{diam} K_n$이다. 이 실수열은 $0$으로 수렴하므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)과 [[limit-is-unique]]에 의해 $d(p, q) \le 0$이다. 거리의 조건 (i)에 의해 $0 \le d(p, q)$이므로 순서 성질 (1)의 (ii)에 의해 $d(p, q) = 0$이고, 조건 (ii)에 의해 $q = p$이다. 따라서 교집합은 $\{p\}$이다.
:::

## 예시와 반례

:::example[0 으로 줄어드는 닫힌구간들]
보통 거리의 $\mathbb{R}$에서 $K_n = [-n^{-1}, n^{-1}]$로 둡니다([[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 $-n^{-1} < 0 < n^{-1}$). 같은 항목의 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$이므로 $K_{n+1} \subseteq K_n$이고, [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 각 $K_n$은 공집합이 아닌 콤팩트 부분집합입니다. [[diameter]]의 (7)에 의해 $\operatorname{diam} K_n = 2n^{-1}$이고, [[basic-limits]]의 (2)와 [[limit-of-sum-and-product]]의 (5)에 의해 이 실수열은 $0$으로 수렴합니다. (4)에 의해 교집합은 한 점이고, $0$이 모든 $K_n$에 들므로 그 점은 $0$입니다.
:::

:::counterexample[콤팩트가 아닌 닫힌집합의 감소열은 교집합이 빌 수 있다]
보통 거리의 $\mathbb{R}$에서 $K_n = \{x \in \mathbb{R} : n \le x\}$로 둡니다. [[open-and-closed-sets-of-reals]]의 (2)에 의해 각 $K_n$은 닫힌집합이고, $n \in K_n$이므로 공집합이 아니며, $n < n + 1$이므로 $K_{n+1} \subseteq K_n$입니다. 그러나 교집합은 공집합입니다. 실수 $x$에 대하여 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $x < n$인 자연수 $n$이 있고, 그러면 $x \notin K_n$이기 때문입니다. 그래서 (2)에 의해 $K_1$은 콤팩트 부분집합이 아니고, (2)의 "$K_1$이 콤팩트"라는 가정은 뺄 수 없습니다.
:::

:::counterexample[닫혀 있지 않으면 교집합이 빌 수 있다]
보통 거리의 $\mathbb{R}$에서 $K_n = \{x \in \mathbb{R} : 0 < x \le n^{-1}\}$로 둡니다. $n^{-1} \in K_n$이므로 공집합이 아니고, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$이므로 감소합니다. 그러나 실수 $x$가 모든 $K_n$에 든다면 $0 < x$이므로 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/n < x$인 자연수 $n$이 있고, $x \notin K_n$이어서 모순입니다. 교집합은 공집합이고, 따라서 (3)에 의해 이 $K_n$ 가운데 콤팩트 부분집합이 아닌 것이 있습니다. 실제로 $K_n$은 반열린구간 $(0, n^{-1}]$이고 [[open-and-closed-sets-of-reals]]의 (3)에 의해 닫힌집합이 아닙니다.
:::

:::counterexample[하우스도르프가 아닌 공간에서는 교집합이 빌 수 있다]
$\mathbb{N}$에 [[hausdorff-space]]의 (5)의 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 주고 $K_n = \{m \in \mathbb{N} : n \le m\}$으로 둡니다. $n \in K_n$이므로 공집합이 아니고, $K_{n+1} \subseteq K_n$이며, [[compact-space]]의 (8)의 (v)에 의해 모든 부분집합이 콤팩트이므로 $K_n$은 콤팩트 부분집합입니다. 그러나 자연수 $m$은 [[well-ordering-principle]]의 (L3)에 의해 $m < m + 1$이므로 $K_{m+1}$에 들지 않고, 교집합은 공집합입니다. (2)와 맞추어 보면 $K_n$들 가운데 닫힌집합이 아닌 것이 있다는 뜻입니다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이므로, [[hausdorff-space]]의 (5)에 의해 이 공간은 하우스도르프 공간이 아니고 (3)과 어긋나지 않습니다.
:::

## 확인 질문

:::check[모든 항이 같은 콤팩트 집합 $K \ne \emptyset$인 수열 $K_n = K$에서 교집합은 무엇인가? 지름의 수열이 $0$으로 수렴하는 것은 언제인가?]
모든 자연수 $n$에서 $K_{n+1} = K_n$이므로 감소하고, [[family-of-sets]]의 (9)에 의해 교집합은 $K$ 자신입니다. 지름의 수열은 모든 항이 $\operatorname{diam} K$인 상수 수열이므로 [[basic-limits]]의 (1)과 [[limit-is-unique]]에 의해 정확히 $\operatorname{diam} K = 0$일 때 $0$으로 수렴하고, [[diameter]]의 (3)에 의해 그것은 정확히 $K$가 한 점 집합일 때입니다. (4)의 결론과 맞습니다.
:::

:::check[감소하지 않는 수열이면 공집합이 아닌 콤팩트 집합들의 교집합이 빌 수 있는가?]
그렇습니다. 보통 거리의 $\mathbb{R}$에서 홀수 $n$이면 $K_n = \{0\}$, 짝수 $n$이면 $K_n = \{1\}$로 두면([[even-and-odd]]), 각 $K_n$은 [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (2)에 의해 공집합이 아닌 콤팩트 부분집합이지만, $0 \notin K_2$이고 $1 \notin K_1$이므로 교집합은 공집합입니다. (3)의 "감소한다"는 가정을 뺄 수 없습니다.
:::
