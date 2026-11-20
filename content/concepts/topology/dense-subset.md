---
title: 조밀한 부분집합
title_en: Dense Subset
aliases: [조밀, 조밀하다, dense, dense subset]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 부분집합의 폐포가 전체이면 그 부분집합이 조밀하다고 한다. 전체는 조밀하고, 공집합은 공간이 공집합일 때만 조밀하며, 이산위상에서는 전체만, 밀착위상에서는 공집합이 아닌 모든 부분집합이 조밀함을 보인다.
requires: [set, subset, set-operations, topological-space, topology-examples, closed-set, interior-and-closure, metric-space-examples, interval, order-properties-of-reals]
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Definition (iii), content/topological-spaces.tex:543; 연습문제 3.10 (content/exercises.tex:124–137)"
    checked: original
    note: "정의는 출처 Definition (iii)(543, 'Y 의 폐포가 X 이면 Y 를 X 에서 dense 라 한다')과 같다. (1)–(3)은 두 출처에 명제로 없다(검색어 dense 로 두 출처 전체의 모든 건(Fuglede 6줄, Lebl 8줄)을 읽었고, everywhere, '폐포 = X'의 식 꼴, X ⊂ S 의 폐포 꼴로도 찾았다). 예시 '세 점 위의 위상에서 조밀한 집합'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 확인 질문 '두 점 위의 위상에서 조밀한 집합'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다. 반례 '조밀한 두 집합의 교집합은 조밀하지 않을 수 있다'는 출처 연습문제 3.10(exercises.tex:124–137)과 같은 주제(조밀한 집합의 교집합)를 다룬다. 그 연습문제는 열린 조밀 집합들의 가산 교집합이 조밀함(베르 범주 정리)을 보이게 한 뒤 임의 개수의 족으로 바꾸면 어떻게 되는지 묻는다."
  - ref: lebl-basic-analysis
    loc: "7.1절, Example 7.1.7 (p.259), Definition 7.1.12 뒤 문단 (p.261); 7.2.3절 Closure and boundary, Example 7.2.25 (p.271); 7.3.4절 Exercises, 연습문제 7.3.7 (p.277)"
    checked: original
    note: "출처 연습문제 7.3.7(p.277)은 거리공간에서 'X ⊂ S 의 폐포이면 S 를 X 에서 dense 라 한다'고 정의하고(그림으로 대조했다), 이것을 'X 의 모든 점 p 에 S 의 점으로 이루어지고 p 로 수렴하는 수열이 있다'로 바꿔 말한 뒤 ℝⁿ 에 가산인 조밀한 부분집합이 있음을 보이라고 한다. 이 항목의 정의는 앞의 폐포 꼴이다(폐포는 X 의 부분집합이므로 X ⊂ 폐포는 폐포 = X 와 같다). 수열 꼴은 싣지 않는다. (2)의 이산위상의 경우는 출처 Example 7.2.25(p.271, 이산 거리를 준 X = {a, b} 에서 {a} 의 폐포는 {a})에서 한 예를 볼 수 있다. 확인 질문 'ℝ 에 이산 거리의 거리위상을 주면 열린구간 (0, 1) 은 조밀한가'의 공간은 출처 Example 7.1.7(p.259)과 Definition 7.1.12 뒤 문단(p.261)이 말하는 실수 위의 이산 거리와 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(A = ∅, X = ∅, 밀착위상)에서 거짓이던 직관 문장 3건과 출처 메모의 주장 4건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간은 [[topological-space]]의 것이고, 폐포 $\overline{A}$는 [[interior-and-closure]]의 것이며, 이산위상과 밀착위상은 [[topology-examples]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$는 $X$의 부분집합이다.

**조밀한 부분집합.** $A$가 $X$에서 **조밀하다**(dense)는 것은 정확히 $\overline{A} = X$일 때이다. 이때 $A$를 $X$의 **조밀한 부분집합**(dense subset)이라 한다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서 조밀하다"고 쓴다.

다음이 성립한다.

1. (전체와 공집합) $X$는 $X$에서 조밀하다. $\emptyset$이 $X$에서 조밀한 것은 정확히 $X = \emptyset$일 때이다.
2. (이산위상) $\mathcal{T}$가 이산위상이면, $A$가 조밀한 것은 정확히 $A = X$일 때이다.
3. (밀착위상) $\mathcal{T}$가 밀착위상이면 $A \ne \emptyset$인 모든 $A$는 조밀하다. 따라서 $X \ne \emptyset$이면, $A$가 조밀한 것은 정확히 $A \ne \emptyset$일 때이다.
:::

:::english
Topological spaces are as in the entry on topological spaces, the closure $\overline{A}$ is as in the entry on interior and closure, and the discrete and indiscrete topologies are as in the entry on examples of topologies. Below, $(X, \mathcal{T})$ is a topological space and $A$ is a subset of $X$.

**Dense subsets.** $A$ is **dense** in $X$ exactly when $\overline{A} = X$. In this case $A$ is called a **dense subset** of $X$. When the topology must be named we say "dense in $(X, \mathcal{T})$".

The following hold.

1. (Whole space and empty set) $X$ is dense in $X$. $\emptyset$ is dense in $X$ exactly when $X = \emptyset$.
2. (Discrete topology) If $\mathcal{T}$ is the discrete topology, then $A$ is dense exactly when $A = X$.
3. (Indiscrete topology) If $\mathcal{T}$ is the indiscrete topology, then every $A$ with $A \ne \emptyset$ is dense. Hence, if $X \ne \emptyset$, $A$ is dense exactly when $A \ne \emptyset$.
:::

## 직관

조밀한 집합은 폐포를 취하면 공간 전체가 되는 집합입니다. 폐포는 $A$를 포함하는 가장 작은 닫힌집합이므로([[interior-and-closure]]의 (2)), $A$가 조밀하다는 것은 $A$를 감싸는 닫힌집합이 $X$ 하나뿐이라는 것과 같습니다. $A$를 포함하는 닫힌집합 $F$가 있으면 $X = \overline{A} \subseteq F$이므로 $F = X$이기 때문입니다. 거꾸로 $A$를 포함하는 닫힌집합이 $X$뿐이면 폐포는 집합족 $\{X\}$의 교집합이므로 $X$입니다. $A$ 자신은 작아도 됩니다. 아래 예시에서는 점 하나짜리 집합이 조밀합니다.

비유하자면 닫힌집합은 울타리이고, 조밀한 집합은 마당 전체가 아니면 어떤 울타리로도 다 가둘 수 없는 씨앗들입니다. "가둔다"가 $A \subseteq F$, "마당 전체"가 $F = X$에 맞습니다. 씨앗이 몇 개인지만으로는 정해지지 않고, 울타리로 쓸 수 있는 것이 무엇인지(위상)가 결과를 정합니다. 그래서 같은 집합이라도 이산위상에서는 전체만 조밀하고((2)), 밀착위상에서는 $X$가 공집합이 아닐 때 공집합만 빼고 모두 조밀합니다((3)).

## 성질의 증명

:::proof
**(1).** [[interior-and-closure]]의 (8)에 의해 $\overline{X} = X$이므로 $X$는 조밀하다. 같은 (8)에 의해 $\overline{\emptyset} = \emptyset$이므로, $\emptyset$이 조밀한 것, 곧 $\overline{\emptyset} = X$인 것은 정확히 $\emptyset = X$일 때이다.

**(2).** $\mathcal{T}$가 이산위상이면 [[interior-and-closure]]의 (9)에 의해 $\overline{A} = A$이므로, $\overline{A} = X$인 것은 정확히 $A = X$일 때이다.

**(3).** $\mathcal{T}$가 밀착위상이고 $A \ne \emptyset$이면 [[interior-and-closure]]의 (9)에 의해 $\overline{A} = X$이므로 $A$는 조밀하다. $X \ne \emptyset$이면 (1)에 의해 $\emptyset$은 조밀하지 않으므로, 조밀한 $A$는 $A \ne \emptyset$을 만족한다. 두 문장을 합치면 둘째 문장이 나온다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 조밀한 집합]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 주면, $X$의 부분집합 $A$가 조밀한 것은 정확히 $1 \in A$일 때입니다.

[[closed-set]]의 (5)에 의해 닫힌집합은 정확히 열린집합의 여집합이므로 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$의 넷이고, 이 가운데 $1$을 원소로 갖는 것은 $X$뿐입니다. $1 \in A$이면 $A$를 포함하는 닫힌집합은 $X$뿐이므로, [[interior-and-closure]]의 (7)에 의해 $X$의 모든 점이 $\overline{A}$에 들고 $\overline{A} = X$입니다. $1 \notin A$이면 $A \subseteq \{2, 3\}$이고 $\{2, 3\}$은 닫힌집합이므로 [[interior-and-closure]]의 (2)에 의해 $\overline{A} \subseteq \{2, 3\}$이며, $1 \notin \overline{A}$이므로 $\overline{A} \ne X$입니다.

특히 점 하나짜리 집합 $\{1\}$이 조밀합니다. 이 위상에서 조밀한 집합은 $X$ 하나뿐인 것도 아니고($\{1\}$이 조밀합니다) 공집합이 아닌 모든 부분집합도 아닙니다($\{2\}$는 조밀하지 않습니다).
:::

:::counterexample[조밀한 두 집합의 교집합은 조밀하지 않을 수 있다]
$X = \{a, b\}$ ($a \ne b$)에 밀착위상을 주면 (3)에 의해 $\{a\}$와 $\{b\}$는 둘 다 조밀합니다. 그러나 $a \ne b$이므로 $\{a\} \cap \{b\} = \emptyset$이고, $X \ne \emptyset$이므로 (1)에 의해 $\emptyset$은 조밀하지 않습니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 조밀한 부분집합은 무엇인가?]
$\{a\}$와 $X$입니다. 닫힌집합은 열린집합의 여집합 $X$, $\{b\}$, $\emptyset$입니다. $a$를 원소로 갖는 닫힌집합은 $X$뿐이므로 $\overline{\{a\}} = X$이고, (1)에 의해 $X$는 조밀합니다. $\{b\}$는 닫힌집합이므로 [[interior-and-closure]]의 (3)에 의해 $\overline{\{b\}} = \{b\} \ne X$이고, $X \ne \emptyset$이므로 $\emptyset$은 조밀하지 않습니다.
:::

:::check[$\mathbb{R}$에 이산 거리의 거리위상을 주면 열린구간 $(0, 1)$은 조밀한가?]
아닙니다. [[topology-examples]]의 (5)에 의해 이산 거리([[metric-space-examples]]의 (2))의 거리위상은 이산위상이므로, (2)에 의해 조밀한 부분집합은 $\mathbb{R}$뿐입니다. $2 \in (0, 1)$이라면 [[interval]]의 정의에 의해 $2 < 1$이어야 하는데, $1 < 2$와 $2 < 1$은 함께 성립하지 않으므로([[order-properties-of-reals]]의 (1)의 (i)과 (10)) $2 \notin (0, 1)$이고 $(0, 1) \ne \mathbb{R}$입니다.
:::
