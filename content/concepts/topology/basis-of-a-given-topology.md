---
title: 주어진 위상의 기저 판정
title_en: Recognizing a Basis for a Given Topology
aliases: [위상 𝒯 의 기저, basis for a given topology, basis of a topology, 기저 판정]
kind: proposition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상 𝒯 의 부분족 𝒞 가 열린집합 U 의 각 점 x 에서 x ∈ C ⊆ U 인 원소 C 를 가지면 𝒞 는 𝒯 의 기저, 곧 위상의 기저이고 𝒯 를 생성한다. 거꾸로 𝒯 의 기저는 모두 이 조건을 만족하며, 𝒯 의 열린집합은 그 안에 든 기저 원소 전체의 합집합이다.
requires: [set, subset, family-of-sets, topological-space, topology-examples, basis-for-a-topology, basis-generates-by-unions]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Basis for a topology 절의 셋째 Lemma 와 그 앞 문장, 그 증명, content/topological-spaces.tex:109–119, 예 example-discrete-topology 121–128"
    checked: original
    note: "(1)은 출처의 Lemma(110–112, 위상공간 (X, 𝒯) 의 𝒞 ⊆ 𝒯 가 '각 U ∈ 𝒯 와 x ∈ U 에 x ∈ C ⊆ U 인 C ∈ 𝒞 가 있다'를 만족하면 𝒞 는 𝒯 의 기저이다)와 같다. 출처는 증명(113–119)에서 (B1)을 U = X 로, (B2)를 C₁ ∩ C₂ 가 열려 있다는 것으로 보이고, 𝒯_𝒞 ⊆ 𝒯 는 Lemma genereated-by-unions 와 (T2)로 보인다. 이 항목의 증명도 같은 길이며, Lemma genereated-by-unions 는 고르기 없이 쓴 basis-generates-by-unions 의 (1)로 인용한다. 출처는 '𝒞 는 𝒯 의 기저(a basis for 𝒯)'라는 말을 정의 환경으로 두지 않고, Lemma 바로 앞(109)에서 '주어진(given) 위상을 생성하는 기저'라고 말한 뒤 Lemma 에서 쓴다. 이 항목은 그 말을 '위상의 기저이고 𝒯_𝒞 = 𝒯'로 정의하고, (2)의 거꾸로 방향과 (3)을 더한다. (4)의 (ii)의 한 점 집합들의 집합족은 출처의 예 example-discrete-topology(121–128)와 같은 대상이고, 확인 질문 '이산위상의 기저는 모든 한 점 집합을 원소로 가져야 하는가'도 같은 대상을 다룬다. 예시와 확인 질문의 위상은 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 예 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
위상과 그 조건 (i)–(iii), 국소 판정은 [[topological-space]]의 것이고, 위상의 기저와 $\mathcal{T}_{\mathcal{B}}$는 [[basis-for-a-topology]]의 것이며, 부분족은 [[basis-generates-by-unions]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이다.

**위상 $\mathcal{T}$의 기저.** $X$의 집합족 $\mathcal{C}$가 **위상 $\mathcal{T}$의 기저**(basis for $\mathcal{T}$)인 것은 정확히 $\mathcal{C}$가 $X$ 위의 위상의 기저이고 $\mathcal{T}_{\mathcal{C}} = \mathcal{T}$일 때이다. 이것을 "$\mathcal{C}$는 $\mathcal{T}$를 생성한다"고도 한다.

다음이 성립한다. 아래에서 $\mathcal{C}$는 $X$의 집합족이다.

1. (판정) $\mathcal{C} \subseteq \mathcal{T}$이고, 모든 $U \in \mathcal{T}$와 모든 $x \in U$에 대하여 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있으면, $\mathcal{C}$는 $\mathcal{T}$의 기저이다.
2. (판정의 역) $\mathcal{C}$가 $\mathcal{T}$의 기저이면 $\mathcal{C} \subseteq \mathcal{T}$이고, 모든 $U \in \mathcal{T}$와 모든 $x \in U$에 대하여 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다. 따라서 $\mathcal{C}$가 $\mathcal{T}$의 기저인 것은 정확히 (1)의 두 조건이 성립할 때이다.
3. (열린집합은 기저 원소들의 합집합) $\mathcal{C}$가 $\mathcal{T}$의 기저이고 $U \subseteq X$이면 다음 셋은 서로 같은 말이다.
   - (a) $U \in \mathcal{T}$이다.
   - (b) $U = \bigcup \{C \in \mathcal{C} : C \subseteq U\}$이다.
   - (c) $U = \bigcup \mathcal{D}$인 부분족 $\mathcal{D} \subseteq \mathcal{C}$가 있다.
4. (예)
   - (i) $\mathcal{T}$ 자신과 $\mathcal{T} - \{\emptyset\}$은 둘 다 $\mathcal{T}$의 기저이다.
   - (ii) 한 점 집합 전체의 집합족 $\{\{x\} : x \in X\}$는 이산위상 $\mathscr{P}(X)$의 기저이다. $\{X\}$는 밀착위상 $\{\emptyset, X\}$의 기저이다.
:::

:::english
Topologies with their conditions (i)–(iii) and the local test are as in the entry on topological spaces, bases for a topology and $\mathcal{T}_{\mathcal{B}}$ are as in the entry on bases, and subfamilies are as in the entry on unions of basis elements. Throughout, $(X, \mathcal{T})$ is a topological space.

**A basis for $\mathcal{T}$.** A family $\mathcal{C}$ of subsets of $X$ is a **basis for the topology $\mathcal{T}$** exactly when $\mathcal{C}$ is a basis for a topology on $X$ and $\mathcal{T}_{\mathcal{C}} = \mathcal{T}$. We also say "$\mathcal{C}$ generates $\mathcal{T}$".

The following hold. Here $\mathcal{C}$ is a family of subsets of $X$.

1. (A test) If $\mathcal{C} \subseteq \mathcal{T}$ and for every $U \in \mathcal{T}$ and every $x \in U$ there is a $C \in \mathcal{C}$ with $x \in C$ and $C \subseteq U$, then $\mathcal{C}$ is a basis for $\mathcal{T}$.
2. (The converse of the test) If $\mathcal{C}$ is a basis for $\mathcal{T}$, then $\mathcal{C} \subseteq \mathcal{T}$, and for every $U \in \mathcal{T}$ and every $x \in U$ there is a $C \in \mathcal{C}$ with $x \in C$ and $C \subseteq U$. Hence $\mathcal{C}$ is a basis for $\mathcal{T}$ exactly when the two conditions of (1) hold.
3. (Open sets are unions of basis elements) If $\mathcal{C}$ is a basis for $\mathcal{T}$ and $U \subseteq X$, then the following three statements are equivalent.
   - (a) $U \in \mathcal{T}$.
   - (b) $U = \bigcup \{C \in \mathcal{C} : C \subseteq U\}$.
   - (c) $U = \bigcup \mathcal{D}$ for some subfamily $\mathcal{D} \subseteq \mathcal{C}$.
4. (Examples)
   - (i) $\mathcal{T}$ itself and $\mathcal{T} - \{\emptyset\}$ are both bases for $\mathcal{T}$.
   - (ii) The family $\{\{x\} : x \in X\}$ of all one-point sets is a basis for the discrete topology $\mathscr{P}(X)$. The family $\{X\}$ is a basis for the indiscrete topology $\{\emptyset, X\}$.
:::

## 직관

[[basis-for-a-topology|위상의 기저와 생성된 위상]]에서는 견본 $\mathcal{B}$를 먼저 정하고 위상을 만들었습니다. 이 항목은 거꾸로, 이미 있는 위상 $\mathcal{T}$를 몇 안 되는 견본으로 기술하는 방법입니다. 판정 (1)의 조건은 "열린집합의 어느 점에서든 그 점을 감싸는 견본이 그 열린집합 안에 있다"는 것이고, 견본 자신은 열린집합이어야 합니다.

견본이 열린집합이어야 한다는 조건($\mathcal{C} \subseteq \mathcal{T}$)을 빼면 판정이 깨질 수 있습니다. 예를 들어 이산위상이 아닌 위상에 대해 $\mathcal{C} = \mathscr{P}(X)$로 두면 둘째 조건은 늘 성립하지만($C = \{x\}$), $\mathcal{C}$가 생성하는 위상은 [[basis-for-a-topology]]의 (5)의 (ii)에 의해 이산위상이어서 $\mathcal{T}$와 다릅니다.

(3)은 열린집합을 기저 원소로 다룰 수 있게 해 줍니다. 열린집합은 그 안에 든 기저 원소를 모두 모은 것이기 때문입니다.

## 증명

:::idea
(1)은 [[basis-for-a-topology]]의 두 조건을 위상의 조건 (i), (iii)으로 확인하고, $\mathcal{T}_{\mathcal{C}} = \mathcal{T}$는 한쪽 포함을 정의로, 다른 쪽을 [[topological-space]]의 국소 판정으로 봅니다. (2)는 기저 원소가 생성된 위상에 속한다는 것과 생성된 위상의 정의를 그대로 읽습니다.
:::

:::hint
(1)에서 덮기 조건은 $U = X$로 두면 나옵니다. 교집합 조건에는 $C_1 \cap C_2$가 열린집합이라는 것을 쓰세요.
:::

:::proof
[[basis-for-a-topology]]의 정의에 의해, $U \subseteq X$일 때 $U \in \mathcal{T}_{\mathcal{C}}$인 것은 정확히 $U$의 모든 점 $x$에 대하여 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있을 때이다. 이것을 (가)라 부른다.

**(1).** 덮기 조건: $x \in X$라 하자. 조건 (i)에 의해 $X \in \mathcal{T}$이므로 가정을 $U = X$에 쓰면 $x \in C$인 $C \in \mathcal{C}$가 있다.
교집합 조건: $C_1, C_2 \in \mathcal{C}$이고 $x \in C_1 \cap C_2$라 하자. $\mathcal{C} \subseteq \mathcal{T}$이므로 $C_1, C_2 \in \mathcal{T}$이고 조건 (iii)에 의해 $C_1 \cap C_2 \in \mathcal{T}$이다. 가정을 $U = C_1 \cap C_2$와 점 $x$에 쓰면 $x \in C_3$이고 $C_3 \subseteq C_1 \cap C_2$인 $C_3 \in \mathcal{C}$가 있다.
따라서 $\mathcal{C}$는 위상의 기저이다.
$\mathcal{T} \subseteq \mathcal{T}_{\mathcal{C}}$: $U \in \mathcal{T}$이면 $U \subseteq X$이고, 가정에 의해 $U$의 모든 점 $x$에 $x \in C \subseteq U$인 $C \in \mathcal{C}$가 있으므로 (가)에 의해 $U \in \mathcal{T}_{\mathcal{C}}$이다.
$\mathcal{T}_{\mathcal{C}} \subseteq \mathcal{T}$: $U \in \mathcal{T}_{\mathcal{C}}$이면 (가)에 의해 $U$의 모든 점 $x$에 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다. 그런 $C$는 $\mathcal{T}$의 원소, 곧 열린집합이므로 [[topological-space]]의 (3)의 (b)에서 (a)로 가는 방향에 의해 $U \in \mathcal{T}$이다.
두 집합은 서로 포함하므로 $\mathcal{T}_{\mathcal{C}} = \mathcal{T}$이다([[set]]).

**(2).** $\mathcal{C}$가 $\mathcal{T}$의 기저라 하자. [[basis-for-a-topology]]의 (2)에 의해 $\mathcal{C} \subseteq \mathcal{T}_{\mathcal{C}} = \mathcal{T}$이다. $U \in \mathcal{T}$이면 $U \in \mathcal{T}_{\mathcal{C}}$이고 $U \subseteq X$이므로, (가)에 의해 $U$의 모든 점 $x$에 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다. 둘째 문장은 이것과 (1)을 합친 것이다.

**(3).** $\mathcal{T} = \mathcal{T}_{\mathcal{C}}$이므로 (a)는 $U \in \mathcal{T}_{\mathcal{C}}$와 같은 말이다. [[basis-for-a-topology]]의 (3)에 의해 이것은 (b)와 같은 말이고, [[basis-generates-by-unions]]의 (1)에 의해 (c)와 같은 말이다.

**(4).** (i) [[basis-for-a-topology]]의 (5)의 (iii)에 의해 $\mathcal{T}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{T}} = \mathcal{T}$이므로 $\mathcal{T}$의 기저이다. $\mathcal{T} - \{\emptyset\}$에는 (1)을 쓴다. $\mathcal{T} - \{\emptyset\} \subseteq \mathcal{T}$이다. $U \in \mathcal{T}$이고 $x \in U$이면 $U \ne \emptyset$이므로 $U \in \mathcal{T} - \{\emptyset\}$이고, $C = U$가 $x \in C \subseteq U$를 만족한다.
(ii) [[basis-for-a-topology]]의 (5)의 (ii)에 의해 $\{\{x\} : x \in X\}$는 위상의 기저이고 생성한 위상은 $\mathscr{P}(X)$이다. 같은 항목의 (5)의 (i)에 의해 $\{X\}$는 위상의 기저이고 생성한 위상은 $\{\emptyset, X\}$이다. [[topology-examples]]의 (1), (2)에 의해 이 둘은 각각 이산위상과 밀착위상이다.
:::

## 예시와 반례

:::example[세 점 위의 위상의 기저]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (ii)의 위상 $\mathcal{T} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 줍니다. $\mathcal{C} = \{\{2\}, \{1, 2\}, \{2, 3\}\}$에 (1)을 씁니다. $\mathcal{C} \subseteq \mathcal{T}$입니다. 둘째 조건은 열린집합과 그 점마다 확인합니다.

- $U = \{2\}$: 점 $2$에 $C = \{2\}$.
- $U = \{1, 2\}$: 점 $1$과 $2$에 $C = \{1, 2\}$.
- $U = \{2, 3\}$: 점 $2$와 $3$에 $C = \{2, 3\}$.
- $U = X$: 점 $1$에 $\{1, 2\}$, 점 $2$에 $\{2\}$, 점 $3$에 $\{2, 3\}$.
- $U = \emptyset$: 점이 없습니다.

따라서 $\mathcal{C}$는 $\mathcal{T}$의 기저입니다. $X$는 $\mathcal{C}$의 원소가 아니지만 (3)에 의해 $X = \{1, 2\} \cup \{2, 3\}$처럼 기저 원소들의 합집합입니다.
:::

:::counterexample[견본이 모자라면 기저가 아닐 수 있다]
같은 $\mathcal{T}$에서 $\mathcal{C}' = \{\{1, 2\}, \{2, 3\}\}$은 $\mathcal{T}$의 기저가 아닙니다. 열린집합 $U = \{2\}$와 점 $2$에 대하여 $2 \in C \subseteq \{2\}$인 $C \in \mathcal{C}'$가 없으므로 (2)의 조건이 깨지기 때문입니다. $\mathcal{C}'$는 위상의 기저조차 아닙니다. $2 \in \{1, 2\} \cap \{2, 3\} = \{2\}$인데 $\{2\}$ 안에 든 $\mathcal{C}'$의 원소가 없어 교집합 조건이 깨집니다.
:::

## 확인 질문

:::check[위 예의 위상 $\mathcal{T}$의 기저는 모두 $\{2\}$, $\{1, 2\}$, $\{2, 3\}$을 원소로 가져야 하는가?]
그렇습니다. $\mathcal{C}$가 $\mathcal{T}$의 기저이면 (2)에 의해 $\mathcal{C} \subseteq \mathcal{T}$이고, 열린집합 $\{1, 2\}$와 점 $1$에 대하여 $1 \in C \subseteq \{1, 2\}$인 $C \in \mathcal{C}$가 있어야 합니다. $\mathcal{T}$의 원소 가운데 $1$을 포함하고 $\{1, 2\}$에 드는 것은 $\{1, 2\}$뿐이므로 $\{1, 2\} \in \mathcal{C}$입니다. 같은 방식으로 $\{2, 3\}$과 점 $3$에서 $\{2, 3\} \in \mathcal{C}$이고, $\{2\}$와 점 $2$에서 $\{2\} \in \mathcal{C}$입니다. 따라서 예시의 $\mathcal{C}$는 이 위상의 가장 작은 기저입니다.
:::

:::check[이산위상의 기저는 모든 한 점 집합을 원소로 가져야 하는가?]
그렇습니다. 이산위상에서 $\{x\}$는 열린집합이므로 (2)에 의해 $x \in C \subseteq \{x\}$인 기저 원소 $C$가 있어야 하고, 그런 $C$는 $\{x\}$뿐입니다.
:::
