---
title: 합집합·교집합의 폐포와 내부
title_en: Closure and Interior of Unions and Intersections
aliases: [폐포와 합집합, 내부와 교집합, closure of a union, interior of an intersection]
kind: proposition
field: topology
msc: ["54A05"]
level: undergrad
summary: 두 집합의 합집합의 폐포는 폐포들의 합집합이고 교집합의 폐포는 폐포들의 교집합에 포함되며, 두 집합의 교집합의 내부는 내부들의 교집합이고 합집합의 내부는 내부들의 합집합을 포함한다. 집합족에 대해서는 포함 관계만 성립하며, 포함이 등호가 아닌 예를 보인다.
requires: [set, subset, set-operations, family-of-sets, topological-space, topology-examples, closed-set, interior-and-closure, metric-space-examples, open-set-in-metric-space, open-sets-of-a-metric-space, open-and-closed-sets-of-reals, interval]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Proposition (이름표 없음), content/topological-spaces.tex:559–574"
    checked: original
    note: "(1)–(4)는 출처의 Proposition(559–567)의 (i)–(iv)와 같다. 출처는 증명에서 (i)과 (ii)만 '폐포는 Y 를 포함하는 가장 작은 닫힌집합'이라는 것과 두 닫힌집합의 합집합이 닫혀 있다는 것으로 보이고, '(iii)과 (iv)는 같은 논리로 나온다'고 적는다. 이 항목은 넷을 모두 증명한다. 출처의 (ii)와 (iii)은 포함 기호로만 적혀 있다. 반례 '세 점 위의 위상에서 등호가 깨지는 경우'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Example 7.2.7 (p.266)"
    checked: original
    note: "반례 '열린집합 무한히 많은 것의 교집합의 내부'는 출처 Example 7.2.7(p.266, 무한히 많은 열린구간의 교집합 {0} 은 열려 있지 않다)과 같은 발상이고, 쓰는 집합족은 open-sets-of-a-metric-space 의 (7)의 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 틀린 근거 1건, 부정확한 직관과 단원 글 문장, 블록 제목이 깨지는 화면 오류를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]], 닫힌집합은 [[closed-set]], 내부와 폐포는 [[interior-and-closure]]의 것이고, 집합족과 식으로 정한 집합족, 그 합집합과 교집합은 [[family-of-sets]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$, $B$는 $X$의 부분집합이며, $\mathcal{A}$는 $X$의 집합족이고 집합족의 교집합은 $X$의 집합족으로 본 것이다.

1. (합집합의 폐포) $\overline{A \cup B} = \overline{A} \cup \overline{B}$이다.
2. (교집합의 폐포) $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$이다.
3. (합집합의 내부) $\operatorname{Int} A \cup \operatorname{Int} B \subseteq \operatorname{Int}(A \cup B)$이다.
4. (교집합의 내부) $\operatorname{Int}(A \cap B) = \operatorname{Int} A \cap \operatorname{Int} B$이다.
5. (집합족) 식으로 정한 집합족 $\{\overline{A} : A \in \mathcal{A}\}$와 $\{\operatorname{Int} A : A \in \mathcal{A}\}$에 대하여
$$
\bigcup \{\overline{A} : A \in \mathcal{A}\} \subseteq \overline{\bigcup \mathcal{A}}, \qquad \overline{\bigcap \mathcal{A}} \subseteq \bigcap \{\overline{A} : A \in \mathcal{A}\},
$$
$$
\bigcup \{\operatorname{Int} A : A \in \mathcal{A}\} \subseteq \operatorname{Int}\Bigl(\bigcup \mathcal{A}\Bigr), \qquad \operatorname{Int}\Bigl(\bigcap \mathcal{A}\Bigr) \subseteq \bigcap \{\operatorname{Int} A : A \in \mathcal{A}\}
$$
이다. $\mathcal{A} = \emptyset$이어도 성립한다.
:::

:::english
Topological spaces and open sets, closed sets, and interior and closure are as in the corresponding entries, and families of sets, families defined by an expression, and their unions and intersections are as in the entry on families of sets. Below, $(X, \mathcal{T})$ is a topological space, $A$ and $B$ are subsets of $X$, $\mathcal{A}$ is a family of subsets of $X$, and intersections of families are taken regarding them as families of subsets of $X$.

1. (Closure of a union) $\overline{A \cup B} = \overline{A} \cup \overline{B}$.
2. (Closure of an intersection) $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$.
3. (Interior of a union) $\operatorname{Int} A \cup \operatorname{Int} B \subseteq \operatorname{Int}(A \cup B)$.
4. (Interior of an intersection) $\operatorname{Int}(A \cap B) = \operatorname{Int} A \cap \operatorname{Int} B$.
5. (Families) For the families $\{\overline{A} : A \in \mathcal{A}\}$ and $\{\operatorname{Int} A : A \in \mathcal{A}\}$ defined by expressions,
$$
\bigcup \{\overline{A} : A \in \mathcal{A}\} \subseteq \overline{\bigcup \mathcal{A}}, \qquad \overline{\bigcap \mathcal{A}} \subseteq \bigcap \{\overline{A} : A \in \mathcal{A}\},
$$
$$
\bigcup \{\operatorname{Int} A : A \in \mathcal{A}\} \subseteq \operatorname{Int}\Bigl(\bigcup \mathcal{A}\Bigr), \qquad \operatorname{Int}\Bigl(\bigcap \mathcal{A}\Bigr) \subseteq \bigcap \{\operatorname{Int} A : A \in \mathcal{A}\}.
$$
This also holds when $\mathcal{A} = \emptyset$.
:::

## 직관

폐포와 내부는 포함 관계를 지키므로([[interior-and-closure]]의 (4)) 한쪽 방향의 포함은 언제나 성립합니다. 큰 집합의 폐포는 작은 집합의 폐포를 포함하고, 큰 집합의 내부는 작은 집합의 내부를 포함하기 때문입니다. (5)는 이것만으로 나오는 포함이고, (2)와 (3)도 그렇습니다.

등호가 되는 두 경우에는 조건 하나가 더 쓰입니다. (1)에서는 두 닫힌집합의 합집합이 닫혀 있다는 것([[closed-set]]의 (3)), (4)에서는 두 열린집합의 교집합이 열려 있다는 것(위상의 조건 (iii))이 쓰입니다. 그래서 폐포는 합집합과, 내부는 교집합과 짝이 맞습니다. 닫힌집합의 무한한 합집합이나 열린집합의 무한한 교집합은 닫혀 있거나 열려 있지 않을 수 있으므로, 집합족에서는 그 등호가 깨질 수 있습니다(아래 반례).

비유하자면 폐포는 땅 둘레에 친 가장 작은 울타리입니다. 두 땅을 합친 땅의 울타리는 두 울타리를 이어 붙인 것으로 충분하지만, 두 땅이 겹친 부분의 울타리는 두 울타리가 겹친 부분보다 작을 수 있습니다. 이 비유에서 "울타리를 이어 붙여도 울타리"가 [[closed-set]]의 (3)에 맞습니다.

## 증명

:::idea
포함은 [[interior-and-closure]]의 (4)로, 등호의 나머지 방향은 그 (2)("가장 작은 닫힌집합", "가장 큰 열린집합")로 보인다.
:::

:::hint
(1): $\overline{A} \cup \overline{B}$는 $A \cup B$를 포함하는 닫힌집합이다.
:::

:::hint
(5): $\mathcal{A}$의 원소 $A$마다 $A \subseteq \bigcup \mathcal{A}$이고 $\bigcap \mathcal{A} \subseteq A$이다([[family-of-sets]]의 (1)).
:::

:::proof
[[interior-and-closure|내부와 폐포]]의 성질 (1)–(9)를 "내부·폐포의 (n)"으로 부른다. 집합족의 성질은 [[family-of-sets]]의 것이다. 등식은 양쪽 포함으로 보인다.

**(1).** $A \subseteq A \cup B$이므로 내부·폐포의 (4)에 의해 $\overline{A} \subseteq \overline{A \cup B}$이고, 같은 까닭으로 $B \subseteq A \cup B$에서 $\overline{B} \subseteq \overline{A \cup B}$이다. 따라서 $\overline{A} \cup \overline{B} \subseteq \overline{A \cup B}$이다([[set-operations|합집합]]의 정의). 거꾸로 내부·폐포의 (1)에 의해 $\overline{A}$, $\overline{B}$는 닫힌집합이고 $A \subseteq \overline{A}$, $B \subseteq \overline{B}$이다. [[closed-set]]의 (3)에 의해 $\overline{A} \cup \overline{B}$는 닫힌집합이고, $A \cup B \subseteq \overline{A} \cup \overline{B}$이다. 내부·폐포의 (2)에 의해 $\overline{A \cup B} \subseteq \overline{A} \cup \overline{B}$이다.

**(2).** $A \cap B \subseteq A$이고 $A \cap B \subseteq B$이므로 내부·폐포의 (4)에 의해 $\overline{A \cap B} \subseteq \overline{A}$이고 $\overline{A \cap B} \subseteq \overline{B}$이다. 따라서 $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$이다.

**(3).** $A \subseteq A \cup B$이고 $B \subseteq A \cup B$이므로 내부·폐포의 (4)에 의해 $\operatorname{Int} A \subseteq \operatorname{Int}(A \cup B)$이고 $\operatorname{Int} B \subseteq \operatorname{Int}(A \cup B)$이다. 따라서 $\operatorname{Int} A \cup \operatorname{Int} B \subseteq \operatorname{Int}(A \cup B)$이다.

**(4).** $A \cap B \subseteq A$이고 $A \cap B \subseteq B$이므로 내부·폐포의 (4)에 의해 $\operatorname{Int}(A \cap B)$는 $\operatorname{Int} A$와 $\operatorname{Int} B$에 포함되고, 따라서 $\operatorname{Int} A \cap \operatorname{Int} B$에 포함된다. 거꾸로 내부·폐포의 (1)에 의해 $\operatorname{Int} A$와 $\operatorname{Int} B$는 열린집합이고 각각 $A$, $B$에 포함된다. 위상의 조건 (iii)([[topological-space]])에 의해 $\operatorname{Int} A \cap \operatorname{Int} B$는 열린집합이고 $A \cap B$에 포함된다. 내부·폐포의 (2)에 의해 $\operatorname{Int} A \cap \operatorname{Int} B \subseteq \operatorname{Int}(A \cap B)$이다.

**(5).** 식으로 정한 집합족 $\{\overline{A} : A \in \mathcal{A}\}$의 원소는 정확히 어떤 $A \in \mathcal{A}$에 대한 $\overline{A}$이다($\overline{A}$는 $A$마다 하나로 정해진 $X$의 부분집합이다). $\{\operatorname{Int} A : A \in \mathcal{A}\}$도 같다.

$A \in \mathcal{A}$이면 집합족의 (1)에 의해 $\bigcap \mathcal{A} \subseteq A \subseteq \bigcup \mathcal{A}$이다. 내부·폐포의 (4)에 의해 다음 넷이 성립한다.
$$
\overline{A} \subseteq \overline{\bigcup \mathcal{A}}, \qquad \overline{\bigcap \mathcal{A}} \subseteq \overline{A}, \qquad \operatorname{Int} A \subseteq \operatorname{Int}\Bigl(\bigcup \mathcal{A}\Bigr), \qquad \operatorname{Int}\Bigl(\bigcap \mathcal{A}\Bigr) \subseteq \operatorname{Int} A.
$$
첫째 포함이 $\{\overline{A} : A \in \mathcal{A}\}$의 모든 원소에서 성립하므로 집합족의 (2)의 (i)에 의해 $\bigcup \{\overline{A} : A \in \mathcal{A}\} \subseteq \overline{\bigcup \mathcal{A}}$이다. 둘째 포함이 모든 원소에서 성립하므로 집합족의 (2)의 (ii)에 의해 $\overline{\bigcap \mathcal{A}} \subseteq \bigcap \{\overline{A} : A \in \mathcal{A}\}$이다. 셋째 포함과 집합족의 (2)의 (i)에서 $\bigcup \{\operatorname{Int} A : A \in \mathcal{A}\} \subseteq \operatorname{Int}\bigl(\bigcup \mathcal{A}\bigr)$이고, 넷째 포함과 집합족의 (2)의 (ii)에서 $\operatorname{Int}\bigl(\bigcap \mathcal{A}\bigr) \subseteq \bigcap \{\operatorname{Int} A : A \in \mathcal{A}\}$이다.

$\mathcal{A} = \emptyset$이면 두 식으로 정한 집합족도 $\emptyset$이다. 이때 집합족의 (2)의 (i), (ii)의 조건은 원소가 없어 저절로 성립하므로 위 논증은 그대로 쓰인다. 실제로 빈 집합족 단락에 의해 왼쪽 위는 $\emptyset \subseteq \overline{\emptyset}$, 오른쪽 위는 $\overline{X} \subseteq X$, 왼쪽 아래는 $\emptyset \subseteq \operatorname{Int} \emptyset$, 오른쪽 아래는 $\operatorname{Int} X \subseteq X$이다.
:::

## 예시와 반례

:::counterexample[세 점 위의 위상에서 등호가 깨지는 경우]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. [[closed-set]]의 (5)에 의해 닫힌집합은 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$입니다.

- (2)의 포함이 등호가 아닌 경우: $A = \{2\}$, $B = \{3\}$이면 $\{2\}$를 포함하는 닫힌집합은 $\{2, 3\}$과 $X$이므로 $\overline{A} = \{2, 3\}$이고, $\{3\}$은 닫힌집합이므로 $\overline{B} = \{3\}$입니다. $\overline{A} \cap \overline{B} = \{3\}$이지만 $A \cap B = \emptyset$이므로 $\overline{A \cap B} = \emptyset$입니다.
- (3)의 포함이 등호가 아닌 경우: $A = \{1\}$, $B = \{2, 3\}$이면 $\{1\}$은 열린집합이므로 $\operatorname{Int} A = \{1\}$이고, $\{2, 3\}$에 포함되는 열린집합은 $\emptyset$뿐이므로 $\operatorname{Int} B = \emptyset$입니다. $\operatorname{Int} A \cup \operatorname{Int} B = \{1\}$이지만 $A \cup B = X$이므로 $\operatorname{Int}(A \cup B) = X$입니다.
:::

:::counterexample[한 점 집합 무한히 많은 것의 합집합의 폐포]
(5)의 첫 포함은 등호가 아닐 수 있습니다. $\mathbb{R}$에 보통 거리 $d$([[metric-space-examples]]의 (1))의 거리위상을 주고, 열린구간 $(0, 1)$의 점 $t$마다 $F(t) = \{t\}$로 정해 $\mathcal{A} = \{F(t) : t \in (0, 1)\}$이라 합시다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)와 [[closed-set]]의 (6)에 의해 한 점 집합은 닫혀 있으므로 [[interior-and-closure]]의 (3)에 의해 $\overline{\{t\}} = \{t\}$입니다. $\mathcal{A}$의 원소는 어떤 $t$에 대한 $\{t\}$이고 그 폐포는 자기 자신이므로 $\{\overline{A} : A \in \mathcal{A}\} = \mathcal{A}$이고, [[family-of-sets]]의 (9)에 의해 실수 $a$가 $\bigcup \mathcal{A}$의 원소인 것은 정확히 $a \in \{t\}$인 $t \in (0, 1)$이 있을 때, 곧 $a \in (0, 1)$일 때입니다. 따라서 $\bigcup \{\overline{A} : A \in \mathcal{A}\} = (0, 1)$입니다. 그러나 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (4)에 의해 $(0, 1)$은 닫힌집합이 아니므로 [[interior-and-closure]]의 (3)에 의해 $\overline{(0, 1)} \ne (0, 1)$입니다.
:::

:::counterexample[열린집합 무한히 많은 것의 교집합의 내부]
(5)의 넷째 포함도 등호가 아닐 수 있습니다. $\mathbb{R}$에 보통 거리의 거리위상을 주고, [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 (7)처럼 자연수 $n$마다 $F(n) = \{x \in \mathbb{R} : -1/n < x < 1\}$, $\mathcal{A} = \{F(n) : n \in \mathbb{N}\}$이라 합시다. 그 (7)에 의해 각 $F(n)$은 $(\mathbb{R}, d)$에서 열려 있으므로 [[topology-examples]]의 (4)와 [[interior-and-closure]]의 (3)에 의해 $\operatorname{Int} F(n) = F(n)$이고, $\bigcap \{\operatorname{Int} A : A \in \mathcal{A}\} = \bigcap \mathcal{A}$입니다. 그 (7)에 의해 $\bigcap \mathcal{A} = \{x \in \mathbb{R} : 0 \le x < 1\}$은 열려 있지 않으므로 [[interior-and-closure]]의 (3)에 의해 $\operatorname{Int}\bigl(\bigcap \mathcal{A}\bigr) \ne \bigcap \mathcal{A}$입니다.
:::

## 확인 질문

:::check[$A \subseteq X$와 그 여집합 $X - A$에 대하여 $\overline{A} \cup \overline{X - A}$는 무엇인가?]
$X$입니다. (1)에 의해 $\overline{A} \cup \overline{X - A} = \overline{A \cup (X - A)}$이고, $A \subseteq X$이므로 $A \cup (X - A) = X$이며, [[interior-and-closure]]의 (8)에 의해 $\overline{X} = X$입니다.
:::

:::check[$A$와 $B$가 열린집합이면 $\operatorname{Int}(A \cup B) = \operatorname{Int} A \cup \operatorname{Int} B$인가?]
그렇습니다. [[topological-space]]의 (1)에 의해 $A \cup B$는 열린집합이므로 [[interior-and-closure]]의 (3)에 의해 $\operatorname{Int}(A \cup B) = A \cup B$이고, 같은 (3)에 의해 $\operatorname{Int} A = A$, $\operatorname{Int} B = B$입니다. 따라서 양변이 모두 $A \cup B$입니다.
:::
