---
title: 연결집합의 합집합과 폐포
title_en: Unions and Closures of Connected Sets
aliases: [연결집합의 합집합, 연결집합의 폐포, union of connected sets, closure of a connected set]
kind: theorem
field: topology
msc: ["54D05"]
level: undergrad
summary: 한 점을 함께 품는 연결 부분집합들의 합집합은 연결이고, 특히 만나는 두 연결집합의 합집합은 연결이다. 연결집합 A 와 그 폐포 사이에 끼인 집합도 연결이므로 폐포는 연결이다. 공통점이 없으면 합집합이 연결이 아닐 수 있고, 연결집합의 내부는 연결이 아닐 수 있다.
requires: [set, subset, set-operations, power-set, family-of-sets, real-number-arithmetic, real-order-axioms, order-properties-of-reals, topological-space, topology-examples, closed-set, neighborhood, interior-and-closure, closure-by-neighborhoods, subspace-topology, open-and-closed-sets-of-reals, standard-topology-on-reals, connected-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Connectedness 절의 Theorem unions-connected 와 증명 (content/connectedness.tex:59–65), Theorem connected-closures 와 증명 (66–78); 연습문제 2.11 (content/exercises.tex:89)"
    checked: original
    note: "(1)은 출처 Theorem unions-connected(59–65)를 첨수가 붙은 족 {A_i}_{i∈I} 대신 X 의 집합족 𝒞 로 쓴 것이다. 출처는 공통점 x 가 U 에 있다고 두고(without loss of generality) Lemma connectedness-subspace-lemma 로 모든 A_i ⊆ U 를 얻는다. 이 항목은 connected-space 의 (2)와 (4)의 (i)로 증명하고 p ∈ U 와 p ∈ V 의 두 경우를 따로 쓴다. 𝒞 = ∅ 인 경우와 ⋂𝒞 ≠ ∅ 과의 관계는 이 항목이 덧붙였다. (2)는 출처가 Theorem products-connected 의 증명(110: A_x ∪ B_y)과 연결 성분 명제의 증명(216: C = A ∪ B)에서 Theorem unions-connected 를 쓰는 꼴이다. (3)은 출처 Theorem connected-closures(66–78)이다. 출처는 B 의 분리 U, V 에서 A ⊆ U 라고 두고, U = B ∩ U′, V = B ∩ V′ 인 X 의 열린집합 U′, V′ 로 U 의 X 에서의 폐포가 X − V′ 에 포함됨을 보여 V = ∅ 을 얻는다. 이 항목은 connected-space 의 (2)와 closure-by-neighborhoods 의 (1)로, V ∩ B 의 점의 근방이 A 와 만난다는 것에서 모순을 얻고 A ⊆ U, A ⊆ V 의 두 경우를 따로 쓴다. 확인 질문 '세 연결집합의 사슬'은 출처 연습문제 2.11(exercises.tex:89: A_n ∩ A_{n+1} ≠ ∅ 인 연결 부분공간들의 합집합은 연결임을 보이라)과 같은 발상(이웃한 두 집합이 만나는 사슬)이다. 예시 '세 점 위의 위상에서 두 연결집합'과 확인 질문 'A ⊆ B 를 빼면'의 세 점 위의 위상은 출처 연습문제 1.2(exercises.tex:13: 세 점 위의 위상을 모두 구하라)가 묻는 위상 가운데 하나이다."
  - ref: lebl-basic-analysis
    loc: "7.2.4절 연습문제 7.2.10, 7.2.11 (p.272)"
    checked: original
    note: "(1)은 연습문제 7.2.10(p.272: 모든 S_i 가 한 점 x 를 품는 가산 개의 연결집합의 합집합은 연결임을 보이라)과 같은 내용을 임의의 집합족에 대해 진술한 것이다. (3)의 끝 문장과 (4)의 (ii)는 연습문제 7.2.11(p.272)의 (a) 연결집합의 폐포는 연결인가, (b) 내부는 연결인가와 같은 물음에 답한 것이다(그림으로 대조: (a)의 기호는 윗줄이 있는 폐포이다). 출처의 힌트는 ℝ² 의 집합을 생각하라고 하고, 이 항목의 (4)의 (ii)는 네 점 위의 위상으로 답한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 X = ∅ 과 한 점 집합에서 거짓이던 직관 문장, 단원 글과 확인 질문의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 위상의 조건 (i)–(iii)은 [[topological-space]]의 것이고, 집합족과 그 합집합 $\bigcup \mathcal{C}$, 교집합 $\bigcap \mathcal{C}$는 [[family-of-sets]]의 것이다. 폐포 $\overline{A}$와 내부 $\operatorname{Int} A$는 [[interior-and-closure]]의 것이고, 연결 부분집합은 [[connected-space|연결공간]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고, 폐포와 내부는 $X$에서의 것이다.

1. (공통점이 있는 집합족) $\mathcal{C}$가 $X$의 집합족이고 $\mathcal{C}$의 원소가 모두 $X$의 연결 부분집합이라 하자. $X$의 점 $p$가 모든 $C \in \mathcal{C}$에 속하면 $\bigcup \mathcal{C}$는 $X$의 연결 부분집합이다. $\mathcal{C} = \emptyset$이어도 성립한다($\bigcup \emptyset = \emptyset$). 여기서 "그런 점 $p$가 있다"는 것은 $\mathcal{C}$를 $X$의 집합족으로 본 교집합 $\bigcap \mathcal{C}$가 공집합이 아니라는 것과 같다.
2. (만나는 두 연결집합) $A$, $B$가 $X$의 연결 부분집합이고 $A \cap B \ne \emptyset$이면 $A \cup B$는 $X$의 연결 부분집합이다.
3. (폐포) $A$가 $X$의 연결 부분집합이고 $B \subseteq X$가 $A \subseteq B \subseteq \overline{A}$를 만족하면 $B$는 $X$의 연결 부분집합이다. 특히 $\overline{A}$는 $X$의 연결 부분집합이다.
4. (성립하지 않을 수 있는 것)
   - (i) $\mathbb{R}$에 보통 위상을 주면 $\{0\}$과 $\{1\}$은 $\mathbb{R}$의 연결 부분집합이고 $\{0\} \cap \{1\} = \emptyset$이며, $\{0, 1\}$은 $\mathbb{R}$의 연결 부분집합이 아니다.
   - (ii) $X = \{1, 2, 3, 4\}$이고 $\mathcal{T} = \{\emptyset, \{1\}, \{3\}, \{1, 3\}, X\}$이면 $\mathcal{T}$는 $X$ 위의 위상이다. 이 위상에서 $A = \{1, 2, 3\}$은 $X$의 연결 부분집합이고, $\operatorname{Int} A = \{1, 3\}$은 $X$의 연결 부분집합이 아니다. 곧 연결 부분집합의 내부는 연결이 아닐 수 있다.
:::

:::english
Topological spaces, open sets and the conditions (i)–(iii) for a topology are as in the entry on topological spaces, and families of sets with their unions $\bigcup \mathcal{C}$ and intersections $\bigcap \mathcal{C}$ are as in the entry on families of sets. The closure $\overline{A}$ and interior $\operatorname{Int} A$ are as in the entry on interior and closure, and connected subsets are as in the entry on connected spaces. Below, $(X, \mathcal{T})$ is a topological space, and closures and interiors are taken in $X$.

1. (Families with a common point) Let $\mathcal{C}$ be a family of subsets of $X$ all of whose members are connected subsets of $X$. If a point $p$ of $X$ belongs to every $C \in \mathcal{C}$, then $\bigcup \mathcal{C}$ is a connected subset of $X$. This also holds when $\mathcal{C} = \emptyset$ ($\bigcup \emptyset = \emptyset$). Here, "there is such a point $p$" is the same as saying that the intersection $\bigcap \mathcal{C}$, with $\mathcal{C}$ regarded as a family of subsets of $X$, is nonempty.
2. (Two connected sets that meet) If $A$ and $B$ are connected subsets of $X$ and $A \cap B \ne \emptyset$, then $A \cup B$ is a connected subset of $X$.
3. (Closures) If $A$ is a connected subset of $X$ and $B \subseteq X$ satisfies $A \subseteq B \subseteq \overline{A}$, then $B$ is a connected subset of $X$. In particular, $\overline{A}$ is a connected subset of $X$.
4. (What may fail)
   - (i) If $\mathbb{R}$ has the standard topology, then $\{0\}$ and $\{1\}$ are connected subsets of $\mathbb{R}$ with $\{0\} \cap \{1\} = \emptyset$, and $\{0, 1\}$ is not a connected subset of $\mathbb{R}$.
   - (ii) If $X = \{1, 2, 3, 4\}$ and $\mathcal{T} = \{\emptyset, \{1\}, \{3\}, \{1, 3\}, X\}$, then $\mathcal{T}$ is a topology on $X$. In this topology $A = \{1, 2, 3\}$ is a connected subset of $X$, while $\operatorname{Int} A = \{1, 3\}$ is not a connected subset of $X$. That is, the interior of a connected subset need not be connected.
:::

## 직관

연결 부분집합은 분리의 두 쪽에 걸칠 수 없습니다([[connected-space]]의 (4)). 여러 연결집합이 점 $p$를 함께 품고 있을 때 그 합집합을 두 쪽으로 가르려 하면, 각 집합은 한쪽에 통째로 들어가야 하고, $p$를 품으므로 모두 $p$가 있는 쪽에 들어갑니다. 그러면 다른 쪽은 비게 되어 가르기가 실패합니다. 이것이 (1)입니다. 비유하자면 한 광장으로 모이는 길들은 하나하나가 끊기지 않았으므로 광장을 거쳐 모두 이어져 있습니다. "길 하나하나가 끊기지 않았다"가 각 $C$의 연결에, "한 광장"이 공통점 $p$에 맞습니다.

공통점의 조건이 빠지면 결론이 깨질 수 있습니다. (4)의 (i)의 두 한 점 집합은 각각 연결이지만 합집합은 연결이 아닙니다. 다만 공통점이 없다고 늘 깨지는 것은 아니어서, 아래 반례처럼 서로소인 두 연결집합의 합집합이 연결인 경우도 있습니다.

(3)은 연결집합에 그 "가장자리"의 점을 얼마든지 붙여도 여전히 연결이라는 것입니다. 붙인 점 $b$는 $\overline{A}$에 있으므로 $b$의 근방은 모두 $A$와 만납니다. 그래서 $b$를 $A$와 다른 쪽에 두는 열린집합은 $A$의 점도 품게 되어 가르기가 실패합니다. 내부는 반대로 가장자리를 깎아 내는 것이어서, 깎다가 연결집합이 두 조각으로 끊어질 수 있습니다. (4)의 (ii)가 그 예입니다.

## 증명

:::idea
합집합이나 $B$를 가르는 두 열린집합이 있다고 하면, 연결집합은 그 한쪽에 통째로 들어간다. 공통점이나 폐포의 점이 다른 쪽을 비게 만든다.
:::

:::hint
(1)에서 $\bigcup \mathcal{C}$를 가르는 열린집합 $U$, $V$를 [[connected-space]]의 (2)로 잡고, 각 $C \in \mathcal{C}$에 [[connected-space]]의 (4)의 (i)을 쓰세요. $p$가 $U$에 있는 경우와 $V$에 있는 경우를 나눕니다.
:::

:::hint
(3)에서 $A \subseteq U$라 하고 $V \cap B$의 점 $b$를 잡으세요. $b \in \overline{A}$이고 $V$는 $b$의 근방입니다. [[closure-by-neighborhoods]]의 (1)이 무엇을 줍니까?
:::

:::proof
아래에서 "연결 (2)"처럼 쓴 것은 [[connected-space]]의 번호이고, "집합족 (1)"처럼 쓴 것은 [[family-of-sets]]의 번호이다.

**(1).** $W = \bigcup \mathcal{C}$로 둔다. $\mathcal{C} = \emptyset$이면 빈 집합족의 약속에 의해 $W = \emptyset$이고, 연결 (5)의 (i)에 의해 $\emptyset$은 연결 부분집합이다. 이제 $\mathcal{C} \ne \emptyset$이라 하고, $W$가 연결 부분집합이 아니라고 하자. 연결 (2)에 의해 $X$의 열린집합 $U$, $V$로서
$$
\begin{gathered}
W \subseteq U \cup V, \qquad U \cap V \cap W = \emptyset, \\
U \cap W \ne \emptyset, \qquad V \cap W \ne \emptyset
\end{gathered}
$$
인 것이 있다.

$C \in \mathcal{C}$이면 집합족 (1)에 의해 $C \subseteq W$이므로 $C \subseteq U \cup V$이고 $U \cap V \cap C \subseteq U \cap V \cap W = \emptyset$이다. $C$는 연결 부분집합이므로 연결 (4)의 (i)에 의해 $C \subseteq U$이거나 $C \subseteq V$이다. 이것을 (가)라 부른다.

$\mathcal{C} \ne \emptyset$이므로 $C_0 \in \mathcal{C}$가 있고, $p \in C_0 \subseteq W \subseteq U \cup V$이다. 따라서 $p \in U$이거나 $p \in V$이다.

- $p \in U$인 경우. $C \in \mathcal{C}$라 하자. $C \subseteq V$라면 $p \in C$이므로 $p \in U \cap V \cap C = \emptyset$이 되어 모순이다. 그러므로 (가)에 의해 $C \subseteq U$이다. 모든 $C \in \mathcal{C}$에서 $C \subseteq U$이므로 집합족 (2)의 (i)에 의해 $W \subseteq U$이다. 그러면 $V \cap W \subseteq U \cap V \cap W = \emptyset$이 되어 $V \cap W \ne \emptyset$에 어긋난다.
- $p \in V$인 경우. $C \in \mathcal{C}$라 하자. $C \subseteq U$라면 $p \in U \cap V \cap C = \emptyset$이 되어 모순이므로 (가)에 의해 $C \subseteq V$이다. 집합족 (2)의 (i)에 의해 $W \subseteq V$이고, $U \cap W \subseteq U \cap V \cap W = \emptyset$이 되어 $U \cap W \ne \emptyset$에 어긋난다.

어느 경우에도 모순이므로 $W$는 $X$의 연결 부분집합이다.

마지막 문장. [[family-of-sets]]의 교집합의 정의에 의해, 대상 $p$가 $\bigcap \mathcal{C}$의 원소인 것은 정확히 $p \in X$이고 모든 $C \in \mathcal{C}$에서 $p \in C$일 때이다. 따라서 그런 점 $p$가 있는 것은 정확히 $\bigcap \mathcal{C} \ne \emptyset$일 때이다. $\mathcal{C} = \emptyset$이면 둘 다 "$X \ne \emptyset$"이라는 말이 된다($\bigcap \emptyset = X$).

**(2).** $A \cap B \ne \emptyset$이므로 $p \in A$이고 $p \in B$인 점 $p$가 있다. $\mathcal{C} = \{A, B\}$는 $X$의 집합족이고, 그 원소는 $A$이거나 $B$이므로 모두 연결 부분집합이며 모두 $p$를 원소로 갖는다. (1)에 의해 $\bigcup \mathcal{C}$는 연결 부분집합이고, 집합족 (3)에 의해 $\bigcup \mathcal{C} = A \cup B$이다.

**(3).** $B$가 연결 부분집합이 아니라고 하자. 연결 (2)에 의해 $X$의 열린집합 $U$, $V$로서
$$
\begin{gathered}
B \subseteq U \cup V, \qquad U \cap V \cap B = \emptyset, \\
U \cap B \ne \emptyset, \qquad V \cap B \ne \emptyset
\end{gathered}
$$
인 것이 있다. $A \subseteq B$이므로 $A \subseteq U \cup V$이고 $U \cap V \cap A \subseteq U \cap V \cap B = \emptyset$이다. $A$는 연결 부분집합이므로 연결 (4)의 (i)에 의해 $A \subseteq U$이거나 $A \subseteq V$이다.

- $A \subseteq U$인 경우. $V \cap B \ne \emptyset$이므로 $b \in V$이고 $b \in B$인 점 $b$가 있다. $V$는 열린집합이고 $b \in V$이므로 [[neighborhood]]의 정의에 의해 $V$는 $b$의 근방이다. $b \in B \subseteq \overline{A}$이므로 [[closure-by-neighborhoods]]의 (1)에 의해 $V \cap A \ne \emptyset$이고, $a \in V \cap A$인 점 $a$가 있다. $a \in A \subseteq U$이고 $a \in A \subseteq B$이므로 $a \in U \cap V \cap B = \emptyset$이 되어 모순이다.
- $A \subseteq V$인 경우. $U \cap B \ne \emptyset$이므로 $b \in U \cap B$인 점 $b$가 있다. $U$는 $b$의 근방이고 $b \in \overline{A}$이므로 [[closure-by-neighborhoods]]의 (1)에 의해 $a \in U \cap A$인 점 $a$가 있다. $a \in A \subseteq V$이고 $a \in B$이므로 $a \in U \cap V \cap B = \emptyset$이 되어 모순이다.

따라서 $B$는 연결 부분집합이다. 특히 [[interior-and-closure]]의 (1)에 의해 $A \subseteq \overline{A}$이므로, $B = \overline{A}$로 두면 $A \subseteq B \subseteq \overline{A}$이고 $\overline{A}$는 연결 부분집합이다.

**(4).** (i) 연결 (5)의 (i)에 의해 한 점 집합 $\{0\}$, $\{1\}$은 연결 부분집합이다. [[real-number-arithmetic]]의 (K4)에 의해 $0 \ne 1$이므로 $\{0\} \cap \{1\} = \emptyset$이다. $U = \{x \in \mathbb{R} : x < 1\}$, $V = \{x \in \mathbb{R} : 0 < x\}$로 두면 [[open-and-closed-sets-of-reals]]의 (1)과 [[standard-topology-on-reals]]의 (5)에 의해 둘은 보통 위상에서 열린집합이다. [[order-properties-of-reals]]의 (5)의 (ii)에 의해 $0 < 1$이므로 $0 \in U$이고 $1 \in V$이다. 따라서 $\{0, 1\} \subseteq U \cup V$, $U \cap \{0, 1\} \ne \emptyset$, $V \cap \{0, 1\} \ne \emptyset$이다. [[real-order-axioms]]의 (W1)에 의해 $0 < 0$과 $1 < 1$은 성립하지 않으므로 $0 \notin V$, $1 \notin U$이고, $U \cap V \cap \{0, 1\} = \emptyset$이다. 연결 (2)에 의해 $\{0, 1\}$은 연결 부분집합이 아니다.

(ii) 먼저 $\mathcal{T}$가 위상임을 보인다. $S = \{1, 3\}$으로 두면 $S$의 부분집합은 $\emptyset$, $\{1\}$, $\{3\}$, $S$이므로 $\mathcal{T} = \mathscr{P}(S) \cup \{X\}$이다. $S \subseteq X$이므로 $\mathcal{T}$의 원소는 모두 $X$의 부분집합이다.

- (i) $\emptyset \in \mathscr{P}(S)$이고 $X \in \mathcal{T}$이다.
- (ii) $\mathcal{U} \subseteq \mathcal{T}$라 하자. $X \in \mathcal{U}$이면 집합족 (1)에 의해 $X \subseteq \bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X \in \mathcal{T}$이다. $X \notin \mathcal{U}$이면 $\mathcal{U} \subseteq \mathscr{P}(S)$이므로 $\mathcal{U}$의 원소는 모두 $S$의 부분집합이고, 집합족 (2)의 (i)에 의해 $\bigcup \mathcal{U} \subseteq S$, 곧 $\bigcup \mathcal{U} \in \mathscr{P}(S) \subseteq \mathcal{T}$이다($\mathcal{U} = \emptyset$인 경우도 여기에 든다).
- (iii) $U$, $V \in \mathcal{T}$라 하자. $U = X$이면 $U \cap V = V \in \mathcal{T}$이고, $V = X$이면 $U \cap V = U \in \mathcal{T}$이다. 둘 다 $X$가 아니면 $U \subseteq S$이므로 $U \cap V \subseteq S$이고 $U \cap V \in \mathscr{P}(S) \subseteq \mathcal{T}$이다.

$1$, $2$, $3$, $4$는 서로 다른 정수이다. $A = \{1, 2, 3\}$의 부분공간 위상은 원소마다 $A$와의 교집합을 구한
$$
\mathcal{T}|_A = \{\emptyset, \{1\}, \{3\}, \{1, 3\}, A\}
$$
이다($X \cap A = A$). $F \subseteq A$가 $A$에서 닫힌집합인 것은 [[closed-set]]의 정의에 의해 $A - F \in \mathcal{T}|_A$일 때이고, [[closed-set]]의 (5)에 의해 그런 $F$는 $\mathcal{T}|_A$의 원소의 $A$에서의 여집합이다. 그 여집합은 $A$, $\{2, 3\}$, $\{1, 2\}$, $\{2\}$, $\emptyset$이다. 이 가운데 $\mathcal{T}|_A$의 원소인 것은 $\emptyset$과 $A$뿐이다($\{2, 3\}$, $\{1, 2\}$, $\{2\}$는 $2$를 원소로 갖는데, $\mathcal{T}|_A$에서 $2$를 원소로 갖는 것은 $A$뿐이다). 연결 (1)에 의해 $(A, \mathcal{T}|_A)$는 연결공간이고, $A$는 연결 부분집합이다.

$\mathcal{T}$의 원소 가운데 $A$에 포함되는 것은 $\emptyset$, $\{1\}$, $\{3\}$, $\{1, 3\}$이다($4 \in X$이고 $4 \notin A$이므로 $X \not\subseteq A$이다). 이 넷은 모두 $\{1, 3\}$에 포함되고 $\{1, 3\}$은 그 가운데 하나이므로, 집합족 (1)과 (2)의 (i)에 의해 $\operatorname{Int} A = \bigcup \{\emptyset, \{1\}, \{3\}, \{1, 3\}\} = \{1, 3\}$이다. 끝으로 $U = \{1\}$, $V = \{3\}$은 $X$의 열린집합이고 $\{1, 3\} \subseteq U \cup V$, $U \cap V = \emptyset$, $U \cap \{1, 3\} = \{1\} \ne \emptyset$, $V \cap \{1, 3\} = \{3\} \ne \emptyset$이므로, 연결 (2)에 의해 $\{1, 3\}$은 연결 부분집합이 아니다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 두 연결집합]
$X = \{1, 2, 3\}$에 위상 $\mathcal{T} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$([[topology-examples]]의 (8)의 (ii))를 줍니다. $\{1, 2\}$의 부분공간 위상은 원소마다 교집합을 구한 $\{\emptyset, \{2\}, \{1, 2\}\}$이고($\{2, 3\} \cap \{1, 2\} = \{2\}$), $\{1, 2\}$에서 닫힌집합은 그 여집합 $\{1, 2\}$, $\{1\}$, $\emptyset$입니다. 둘 다인 것은 $\emptyset$과 $\{1, 2\}$뿐이므로 [[connected-space]]의 (1)에 의해 $\{1, 2\}$는 연결입니다. $\{2, 3\}$도 부분공간 위상이 $\{\emptyset, \{2\}, \{2, 3\}\}$이고 닫힌집합이 $\{2, 3\}$, $\{3\}$, $\emptyset$이므로 같은 이유로 연결입니다.

두 집합은 $2$에서 만나므로 (2)에 의해 $\{1, 2\} \cup \{2, 3\} = X$는 연결입니다. 한편 [[connected-space]]의 (2)에서 본 대로 $\{1\} \cup \{3\} = \{1, 3\}$은 연결이 아닙니다. 두 한 점 집합은 각각 연결이지만 만나지 않고, 둘을 이어 줄 점 $2$가 빠져 있습니다.
:::

:::counterexample[공통점이 없어도 합집합이 연결일 수 있는 예]
(1)과 (2)의 공통점 조건은 충분조건일 뿐입니다. $a \ne b$인 $X = \{a, b\}$에 밀착위상을 주면 $\{a\}$와 $\{b\}$는 [[connected-space]]의 (5)의 (i)에 의해 연결이고 서로소이지만, 합집합 $X$는 [[connected-space]]의 (5)의 (ii)에 의해 연결입니다. 그래서 (4)의 (i)은 "공통점이 없으면 합집합은 연결이 아니다"가 아니라 "공통점이 없으면 연결이 아닐 수 있다"를 보인 예입니다.
:::

:::counterexample[폐포가 연결이어도 집합은 연결이 아닐 수 있는 예]
(3)의 거꾸로, 곧 "$\overline{B}$가 연결이면 $B$가 연결"은 성립하지 않을 수 있습니다. (4)의 (ii)의 공간에서 $B = \{1, 3\}$을 봅니다. $X$의 닫힌집합은 열린집합의 여집합 $X$, $\{2, 3, 4\}$, $\{1, 2, 4\}$, $\{2, 4\}$, $\emptyset$이고, 이 가운데 $B$를 포함하는 것은 $X$뿐이므로 $\overline{B} = X$입니다. 열린집합이면서 닫힌집합인 것은 $\emptyset$과 $X$뿐이므로 [[connected-space]]의 (1)에 의해 $X$는 연결입니다. 그러나 (4)의 (ii)에서 본 대로 $B$는 연결이 아닙니다.
:::

## 확인 질문

:::check[$A$, $B$, $C$가 $X$의 연결 부분집합이고 $A \cap B \ne \emptyset$, $B \cap C \ne \emptyset$이면 $A \cup B \cup C$는 연결인가?]
연결입니다. (2)에 의해 $A \cup B$는 연결입니다. $B \cap C \ne \emptyset$의 점은 $A \cup B$와 $C$에 함께 속하므로 $(A \cup B) \cap C \ne \emptyset$이고, (2)를 다시 쓰면 $(A \cup B) \cup C$는 연결입니다. $A$와 $C$는 만나지 않아도 됩니다. 두 번째 집합 $B$가 둘을 이어 주기 때문입니다.
:::

:::check[(3)에서 $A \subseteq B$를 빼고 $B \subseteq \overline{A}$만 두면 $B$는 연결인가?]
그렇다고 할 수 없습니다. $X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$를 주고 $A = \{2\}$라 합시다. $A$는 한 점 집합이므로 연결입니다. 닫힌집합은 $X$, $\{1, 3\}$, $\{3\}$, $\{1\}$, $\emptyset$이고 이 가운데 $2$를 원소로 갖는 것은 $X$뿐이므로 $\overline{A} = X$입니다. $B = \{1, 3\}$은 $B \subseteq \overline{A}$이지만 [[connected-space]]의 (2)에서 본 대로 연결이 아닙니다. (3)의 증명에서 $A \subseteq B$는 $B$를 가르는 두 열린집합 $U$, $V$에 대하여 $A \subseteq U \cup V$이고 $U \cap V \cap A = \emptyset$이라는 것과, 찾은 점 $a$가 $B$에 속한다는 것에 쓰입니다.
:::
