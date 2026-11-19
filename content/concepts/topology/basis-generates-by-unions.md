---
title: 생성된 위상은 기저 원소들의 합집합
title_en: The Generated Topology Consists of Unions of Basis Elements
aliases: [기저 원소들의 합집합, unions of basis elements, 기저가 생성하는 가장 거친 위상, coarsest topology containing a basis]
kind: proposition
field: topology
msc: ["54A05"]
level: undergrad
summary: 집합족 ℬ 로 정한 𝒯_ℬ 의 원소는 정확히 ℬ 의 부분족의 합집합이고, 𝒯_ℬ 가 위상인 것은 정확히 ℬ 가 위상의 기저일 때이며, 그때 𝒯_ℬ 는 ℬ 를 포함하는 위상 가운데 가장 거칠다.
requires: [set, subset, power-set, empty-set-is-subset, family-of-sets, topological-space, basis-for-a-topology, comparing-topologies]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Basis for a topology 절의 Lemma genereated-by-unions 와 그 증명, content/topological-spaces.tex:95–108"
    checked: original
    note: "(1)은 출처 Lemma genereated-by-unions(96–99, 'U ∈ 𝒯_ℬ 인 것은 정확히 어떤 B_i ∈ ℬ 들에 대하여 U = ⋃_{i∈I} B_i 일 때')를 첨수 없이 부분족 𝒞 ⊆ ℬ 의 합집합으로 쓴 것이고, (2)는 같은 Lemma 의 둘째 문장('𝒯_ℬ 는 ℬ 의 원소들의 합집합 전체')을 집합 등식으로 쓴 것이다. 출처는 그 증명(100–108)에서 공집합을 '관례상 빈 합집합'으로 따로 두고, 거꾸로 방향에서 각 x ∈ U 마다 x ∈ B_x ⊆ U 인 기저 원소 B_x 를 골라(105) U = ⋃_{x∈U} B_x 로 보인다. 이 항목은 고르지 않고 부분족 {B ∈ ℬ : B ⊆ U} 를 쓰며(basis-for-a-topology 의 (3)), 빈 부분족을 다른 부분족과 같이 다룬다. 출처의 Lemma 는 ℬ 가 기저라고 가정하지만 (1), (2)는 ℬ 가 X 의 아무 집합족이어도 성립하므로 이 항목은 그렇게 진술한다. (3)의 '가장 거친 위상'은 출처 63줄이 기저를 '위상에 넣고 싶은 집합들을 적은 뒤 (T1)–(T3)에 필요한 집합을 더해 위상을 얻는 방법'으로 설명하는 것을 명제로 적은 것이다. 예시 '분할이 생성하는 위상'과 같은 꼴(서로 겹치지 않는 집합들이 생성하는 위상)은 출처 643줄의 위상 {∅, {a}, {b, c}, X} 이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 예 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
위상과 그 조건 (i)–(iii)은 [[topological-space]]의 것이고, 위상의 기저와 $\mathcal{T}_{\mathcal{B}}$는 [[basis-for-a-topology]]의 것이며, "거칠다"는 [[comparing-topologies]]의 것이다. 집합족과 식으로 정한 집합족은 [[family-of-sets]]의 것이다. 아래에서 $X$는 집합이고 $\mathcal{B}$는 $X$의 집합족이다. $\mathcal{C} \subseteq \mathcal{B}$이면 $\mathcal{C}$도 $X$의 집합족이고, $\mathcal{C}$를 $\mathcal{B}$의 **부분족**이라 한다.

1. (부분족의 합집합) $U \subseteq X$에 대하여, $U \in \mathcal{T}_{\mathcal{B}}$인 것은 정확히 $U = \bigcup \mathcal{C}$인 부분족 $\mathcal{C} \subseteq \mathcal{B}$가 있을 때이다. 이때 $\mathcal{C} = \{B \in \mathcal{B} : B \subseteq U\}$로 잡을 수 있다. $\mathcal{C} = \emptyset$이면 $\bigcup \mathcal{C} = \emptyset$이다.
2. (집합 등식) 식으로 정한 집합족으로 읽은
   $$
   \Bigl\{\bigcup \mathcal{C} : \mathcal{C} \in \mathscr{P}(\mathcal{B})\Bigr\} = \Bigl\{U \in \mathscr{P}(X) : \text{어떤 } \mathcal{C} \in \mathscr{P}(\mathcal{B}) \text{에 대하여 } U = \bigcup \mathcal{C}\Bigr\}
   $$
   에 대하여 $\mathcal{T}_{\mathcal{B}} = \bigl\{\bigcup \mathcal{C} : \mathcal{C} \in \mathscr{P}(\mathcal{B})\bigr\}$이다. 곧 $\mathcal{T}_{\mathcal{B}}$는 $\mathcal{B}$의 부분족의 합집합 전체이다. (1)과 (2)는 $\mathcal{B}$가 위상의 기저가 아니어도 성립한다.
3. (가장 거친 위상) $\mathcal{T}$가 $X$ 위의 위상이고 $\mathcal{B} \subseteq \mathcal{T}$이면 $\mathcal{T}_{\mathcal{B}} \subseteq \mathcal{T}$이다. 따라서 $\mathcal{B}$가 위상의 기저이면 $\mathcal{T}_{\mathcal{B}}$는 $\mathcal{B}$를 포함하는 위상이고, $\mathcal{B}$를 포함하는 $X$ 위의 모든 위상보다 거칠다.
4. (위상이 될 조건) $\mathcal{T}_{\mathcal{B}}$가 $X$ 위의 위상인 것은 정확히 $\mathcal{B}$가 $X$ 위의 위상의 기저일 때이다.
:::

:::english
Topologies and their conditions (i)–(iii) are as in the entry on topological spaces, bases for a topology and $\mathcal{T}_{\mathcal{B}}$ are as in the entry on bases, and "coarser" is as in the entry on comparing topologies. Families of sets and families given by an expression are as in the entry on families of sets. Throughout, $X$ is a set and $\mathcal{B}$ is a family of subsets of $X$. If $\mathcal{C} \subseteq \mathcal{B}$, then $\mathcal{C}$ is also a family of subsets of $X$, and we call $\mathcal{C}$ a **subfamily** of $\mathcal{B}$.

1. (Unions of subfamilies) For $U \subseteq X$, we have $U \in \mathcal{T}_{\mathcal{B}}$ exactly when there is a subfamily $\mathcal{C} \subseteq \mathcal{B}$ with $U = \bigcup \mathcal{C}$. In that case one can take $\mathcal{C} = \{B \in \mathcal{B} : B \subseteq U\}$. If $\mathcal{C} = \emptyset$, then $\bigcup \mathcal{C} = \emptyset$.
2. (As an equality of sets) Reading
   $$
   \Bigl\{\bigcup \mathcal{C} : \mathcal{C} \in \mathscr{P}(\mathcal{B})\Bigr\} = \Bigl\{U \in \mathscr{P}(X) : U = \bigcup \mathcal{C} \text{ for some } \mathcal{C} \in \mathscr{P}(\mathcal{B})\Bigr\}
   $$
   as a family given by an expression, we have $\mathcal{T}_{\mathcal{B}} = \bigl\{\bigcup \mathcal{C} : \mathcal{C} \in \mathscr{P}(\mathcal{B})\bigr\}$. That is, $\mathcal{T}_{\mathcal{B}}$ consists of all unions of subfamilies of $\mathcal{B}$. Items (1) and (2) hold even if $\mathcal{B}$ is not a basis for a topology.
3. (The coarsest topology) If $\mathcal{T}$ is a topology on $X$ and $\mathcal{B} \subseteq \mathcal{T}$, then $\mathcal{T}_{\mathcal{B}} \subseteq \mathcal{T}$. Hence, if $\mathcal{B}$ is a basis for a topology, then $\mathcal{T}_{\mathcal{B}}$ is a topology containing $\mathcal{B}$ and is coarser than every topology on $X$ containing $\mathcal{B}$.
4. (When it is a topology) $\mathcal{T}_{\mathcal{B}}$ is a topology on $X$ exactly when $\mathcal{B}$ is a basis for a topology on $X$.
:::

## 직관

위상의 기저는 열린집합의 견본이고, 생성된 위상은 견본을 몇 개든 이어 붙여 만든 집합 전체입니다. (1)과 (2)는 이 그림이 [[basis-for-a-topology|위상의 기저와 생성된 위상]]의 정의("각 점에서 그 점을 감싸는 견본이 안에 들어간다")와 정확히 같은 말이라는 것입니다. 견본을 하나도 쓰지 않으면 공집합이 나오므로, 공집합도 따로 다룰 필요가 없습니다.

(3)은 "필요한 만큼만 더했다"는 뜻입니다. 위상은 합집합에 대해 닫혀 있으므로 $\mathcal{B}$를 포함하는 위상은 $\mathcal{B}$의 원소들의 합집합을 모두 포함해야 하고, 생성된 위상은 바로 그것들만으로 이루어져 있습니다. (4)는 기저의 두 조건이 "합집합 전체가 위상이 된다"는 것과 정확히 맞아떨어진다는 것입니다. 덮기 조건이 없으면 $X$가 합집합으로 나오지 않을 수 있고, 교집합 조건이 없으면 두 합집합의 교집합이 다시 합집합으로 나오지 않을 수 있습니다.

## 증명

:::idea
(1)의 한 방향은 [[basis-for-a-topology]]의 (3)이고, 다른 방향은 합집합의 점이 어느 원소에 속하는지 보면 됩니다. (3)은 (1)과 위상의 조건 (ii), (4)는 [[basis-for-a-topology]]의 (1)과 (2)로 얻습니다.
:::

:::hint
(4)의 거꾸로 방향에서는 $\mathcal{T}_{\mathcal{B}}$가 위상이라는 가정을 $X \in \mathcal{T}_{\mathcal{B}}$와 $B_1 \cap B_2 \in \mathcal{T}_{\mathcal{B}}$에 써 보세요. 두 번째에는 기저 원소가 $\mathcal{T}_{\mathcal{B}}$에 속한다는 것이 필요합니다.
:::

:::proof
집합족의 성질 (1)–(10)과 빈 집합족 단락, 식으로 정한 집합족은 [[family-of-sets]]의 것이다. $A \in \mathscr{P}(Y)$인 것은 정확히 $A \subseteq Y$일 때이다([[power-set]]). [[basis-for-a-topology]]의 정의에 의해, $U \subseteq X$일 때 $U \in \mathcal{T}_{\mathcal{B}}$인 것은 정확히 $U$의 모든 점 $x$에 대하여 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있을 때이다. 이것을 (가)라 부른다.

**부분족.** $\mathcal{C} \subseteq \mathcal{B}$이면 $\mathcal{C}$의 원소는 $\mathcal{B}$의 원소이고 $\mathcal{B} \subseteq \mathscr{P}(X)$이므로 $\mathcal{C} \subseteq \mathscr{P}(X)$이다. 곧 $\mathcal{C}$는 $X$의 집합족이고 $\bigcup \mathcal{C}$는 $X$의 부분집합이다. $\bigcup \emptyset = \emptyset$은 빈 집합족 단락이다.

**(1).** $U \in \mathcal{T}_{\mathcal{B}}$이면 [[basis-for-a-topology]]의 (3)에 의해 $\mathcal{C} = \{B \in \mathcal{B} : B \subseteq U\}$에 대하여 $U = \bigcup \mathcal{C}$이고, $\mathcal{C}$는 조건으로 정한 $\mathcal{B}$의 부분집합이므로 $\mathcal{B}$의 부분족이다. 거꾸로 $U = \bigcup \mathcal{C}$인 부분족 $\mathcal{C} \subseteq \mathcal{B}$가 있다고 하자. $U \subseteq X$이다. $x \in U$이면 $x \in C$인 $C \in \mathcal{C}$가 있고, $C \in \mathcal{B}$이며 집합족의 (1)에 의해 $C \subseteq \bigcup \mathcal{C} = U$이다. (가)에 의해 $U \in \mathcal{T}_{\mathcal{B}}$이다. $\mathcal{C} = \emptyset$이면 $U = \emptyset$이고 따질 점이 없어 같은 결론이다. 이 논증은 덮기 조건도 교집합 조건도 쓰지 않는다.

**(2).** $\mathscr{P}(\mathcal{B})$의 원소는 $\mathcal{B}$의 부분족이고, 부분족 $\mathcal{C}$마다 $\bigcup \mathcal{C}$는 위의 부분족 단락에 의해 $X$의 부분집합으로 정해져 있다(고르는 것이 없다). 따라서 식으로 정한 집합족 $\{\bigcup \mathcal{C} : \mathcal{C} \in \mathscr{P}(\mathcal{B})\}$는 문장에 적은 $\mathscr{P}(X)$의 부분집합이고, $U$가 그 원소인 것은 정확히 $U \subseteq X$이고 $U = \bigcup \mathcal{C}$인 $\mathcal{C} \subseteq \mathcal{B}$가 있을 때이다. $\mathcal{T}_{\mathcal{B}} \subseteq \mathscr{P}(X)$이므로 (1)에 의해 두 집합족은 원소가 같고, 같은 집합이다([[set]]).

**(3).** $U \in \mathcal{T}_{\mathcal{B}}$라 하자. (1)에 의해 $U = \bigcup \mathcal{C}$인 $\mathcal{C} \subseteq \mathcal{B}$가 있다. $\mathcal{B} \subseteq \mathcal{T}$이므로 $\mathcal{C} \subseteq \mathcal{T}$이고([[subset]]의 정의), 위상의 조건 (ii)에 의해 $U = \bigcup \mathcal{C} \in \mathcal{T}$이다. 곧 $\mathcal{T}_{\mathcal{B}} \subseteq \mathcal{T}$이다. $\mathcal{B}$가 위상의 기저이면 [[basis-for-a-topology]]의 (1), (2)에 의해 $\mathcal{T}_{\mathcal{B}}$는 위상이고 $\mathcal{B} \subseteq \mathcal{T}_{\mathcal{B}}$이다. $\mathcal{B}$를 포함하는 위상 $\mathcal{T}$마다 방금 보인 $\mathcal{T}_{\mathcal{B}} \subseteq \mathcal{T}$는 [[comparing-topologies]]의 정의에 의해 $\mathcal{T}_{\mathcal{B}}$가 $\mathcal{T}$보다 거칠다는 것이다.

**(4).** $\mathcal{B}$가 위상의 기저이면 [[basis-for-a-topology]]의 (1)이다. 거꾸로 $\mathcal{T}_{\mathcal{B}}$가 $X$ 위의 위상이라 하자.
덮기 조건: 조건 (i)에 의해 $X \in \mathcal{T}_{\mathcal{B}}$이므로, $x \in X$이면 (가)에 의해 $x \in B$인 $B \in \mathcal{B}$가 있다.
교집합 조건: $B_1, B_2 \in \mathcal{B}$이고 $x \in B_1 \cap B_2$라 하자. [[basis-for-a-topology]]의 (2)에 의해 $B_1, B_2 \in \mathcal{T}_{\mathcal{B}}$이고, 조건 (iii)에 의해 $B_1 \cap B_2 \in \mathcal{T}_{\mathcal{B}}$이다. (가)를 $U = B_1 \cap B_2$와 점 $x$에 쓰면 $x \in B_3$이고 $B_3 \subseteq B_1 \cap B_2$인 $B_3 \in \mathcal{B}$가 있다.
따라서 $\mathcal{B}$는 위상의 기저이다.
:::

## 예시와 반례

:::example[분할이 생성하는 위상]
$X = \{1, 2, 3, 4\}$이고 $\mathcal{B} = \{\{1\}, \{2, 3\}, \{4\}\}$라 합시다. $X$의 점은 모두 $\mathcal{B}$의 어느 원소에 들고, $\mathcal{B}$의 서로 다른 두 원소는 공통인 점이 없으며 같은 원소끼리의 교집합은 그 원소이므로, $\mathcal{B}$는 위상의 기저입니다. (2)에 의해 $\mathcal{T}_{\mathcal{B}}$는 $\mathcal{B}$의 부분족 여덟 개의 합집합 전체입니다.
$$
\emptyset, \quad \{1\}, \quad \{2, 3\}, \quad \{4\}, \quad \{1, 2, 3\}, \quad \{1, 4\}, \quad \{2, 3, 4\}, \quad X.
$$
이 여덟 집합은 서로 다르므로 $\mathcal{T}_{\mathcal{B}}$는 원소가 여덟인 위상입니다. 예컨대 $\{2\}$와 $\{1, 2\}$는 이 위상에서 열린집합이 아닙니다. (3)에 의해 이 여덟 집합은 $\{1\}$, $\{2, 3\}$, $\{4\}$를 열린집합으로 갖는 $X$ 위의 어느 위상에서도 열린집합입니다.
:::

:::counterexample[기저를 포함하는 위상이 생성된 위상보다 진짜로 더 섬세할 수 있다]
위 예의 $\mathcal{B}$는 이산위상 $\mathscr{P}(X)$에도 포함됩니다. (3)에 의해 $\mathcal{T}_{\mathcal{B}} \subseteq \mathscr{P}(X)$이지만 $\{2\} \in \mathscr{P}(X)$이고 $\{2\} \notin \mathcal{T}_{\mathcal{B}}$이므로 두 위상은 같지 않습니다. (3)이 말하는 것은 생성된 위상이 가장 거칠다는 것이고, $\mathcal{B}$를 포함하는 위상이 그것 하나뿐이라는 것은 아닙니다.
:::

## 확인 질문

:::check[$\mathcal{T}$가 $X$ 위의 위상일 때 $\mathcal{T}$의 부분족의 합집합 전체는 무엇인가?]
$\mathcal{T}$ 자신입니다. [[basis-for-a-topology]]의 (5)의 (iii)에 의해 $\mathcal{T}_{\mathcal{T}} = \mathcal{T}$이고, (2)에 의해 $\mathcal{T}_{\mathcal{T}}$는 $\mathcal{T}$의 부분족의 합집합 전체입니다. 위상의 조건 (ii)만으로도 그 합집합들이 $\mathcal{T}$에 든다는 것은 알 수 있고, 거꾸로 $U \in \mathcal{T}$는 부분족 $\{U\}$의 합집합입니다.
:::

:::check[$X \ne \emptyset$이고 $\mathcal{B} = \emptyset$이면 $\mathcal{T}_{\mathcal{B}}$는 무엇이고, 위상인가?]
$\emptyset$의 부분족은 $\emptyset$ 하나뿐이고 그 합집합은 $\emptyset$이므로 (2)에 의해 $\mathcal{T}_{\mathcal{B}} = \{\emptyset\}$입니다. $X \notin \{\emptyset\}$이므로 위상이 아니고, (4)에 맞게 $\emptyset$은 위상의 기저가 아닙니다([[basis-for-a-topology]]의 (4)).
:::
