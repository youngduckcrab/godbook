---
written_by: Claude
status: reviewed
sources:
  - ref: fuglede-basic-topology
    loc: "연습문제 3.7 (content/exercises.tex:113) — 문제 '유리수 끝점의 열린구간'의 1과 같은 발상(유리수로 정한 공들이 보통 위상의 기저가 된다. 출처는 ℝⁿ 에서 중심이 유리수 좌표이고 반지름이 유리수인 공)"
added: 2026-11-26
---

:::exercise[네 점 위의 위상과 그 기저]
$X = \{1, 2, 3, 4\}$ 위의 집합족
$$
\begin{aligned}
\mathcal{T} = \{&\emptyset, \{1\}, \{2\},\\
&\{1, 2\}, \{1, 2, 3\}, X\}
\end{aligned}
$$
를 생각한다.

1. $\mathcal{T}$는 $X$ 위의 위상임을 보여라.
2. $\mathcal{C} = \{\{1\}, \{2\}, \{1, 2, 3\}, X\}$는 위상 $\mathcal{T}$의 기저이고, $\mathcal{C}' = \{\{1\}, \{2\}, X\}$는 위상 $\mathcal{T}$의 기저가 아님을 보여라.
3. $(X, \mathcal{T})$의 닫힌집합을 모두 적고, 열린집합이면서 닫힌집합인 것과 열린집합도 닫힌집합도 아닌 것을 하나씩 찾아라.
:::

:::solution
위상의 조건 (i)–(iii)은 [[topological-space|위상공간]]의 것이고, 집합족의 합집합과 교집합은 [[family-of-sets|집합족]]의 것이다. $\{1, 2\}$의 부분집합은 $\emptyset$, $\{1\}$, $\{2\}$, $\{1, 2\}$뿐이고 넷 다 $\mathcal{T}$의 원소라는 것을 아래에서 거듭 쓴다. 또 $\mathcal{T}$의 원소 가운데 $X$가 아닌 것은 모두 $\{1, 2, 3\}$의 부분집합이다.

**(1)** (i) $\emptyset$과 $X$는 $\mathcal{T}$의 원소이다.

(ii) $\mathcal{U} \subseteq \mathcal{T}$라 하자.
- $X \in \mathcal{U}$이면 집합족의 (1)에 의해 $X \subseteq \bigcup \mathcal{U}$이고, 합집합의 정의에 의해 $\bigcup \mathcal{U} \subseteq X$이므로 $\bigcup \mathcal{U} = X \in \mathcal{T}$이다.
- $X \notin \mathcal{U}$이고 $\{1, 2, 3\} \in \mathcal{U}$이면 $\mathcal{U}$의 원소는 모두 $\{1, 2, 3\}$의 부분집합이므로, 집합족의 (2)의 (i)에 의해 $\bigcup \mathcal{U} \subseteq \{1, 2, 3\}$이고 (1)에 의해 $\{1, 2, 3\} \subseteq \bigcup \mathcal{U}$이다. 따라서 $\bigcup \mathcal{U} = \{1, 2, 3\} \in \mathcal{T}$이다.
- 나머지 경우에는 $\mathcal{U} \subseteq \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$이고 원소가 모두 $\{1, 2\}$의 부분집합이므로, 집합족의 (2)의 (i)에 의해 $\bigcup \mathcal{U} \subseteq \{1, 2\}$이다. 그러면 $\bigcup \mathcal{U}$는 $\{1, 2\}$의 부분집합이므로 $\mathcal{T}$의 원소이다. $\mathcal{U} = \emptyset$인 경우도 여기에 든다($\bigcup \emptyset = \emptyset$).

(iii) $U$, $V \in \mathcal{T}$라 하자. 둘 가운데 하나가 $X$이면 $U \cap V$는 다른 하나이다. 둘 다 $X$가 아니고 하나가 $\{1, 2, 3\}$이면, 다른 하나는 $\{1, 2, 3\}$의 부분집합이므로 $U \cap V$는 그 다른 하나이다. 나머지 경우에는 $U$, $V$가 모두 $\{1, 2\}$의 부분집합이므로 $U \cap V$도 $\{1, 2\}$의 부분집합이고 $\mathcal{T}$의 원소이다.

세 조건이 성립하므로 $\mathcal{T}$는 $X$ 위의 위상이다.

**(2)** [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 (1)과 (2)를 쓴다.

$\mathcal{C}$: $\mathcal{C}$의 네 원소는 모두 $\mathcal{T}$의 원소이다. 판정의 둘째 조건을 공집합이 아닌 열린집합 $U$와 그 점 $x$마다 확인한다($U = \emptyset$에는 점이 없다).
- $U = \{1\}$: $x = 1$이고 $1 \in \{1\} \subseteq U$이다. $U = \{2\}$도 같다.
- $U = \{1, 2\}$: $x = 1$이면 $1 \in \{1\} \subseteq U$이고, $x = 2$이면 $2 \in \{2\} \subseteq U$이다.
- $U = \{1, 2, 3\}$: 세 점 모두 $\{1, 2, 3\} \in \mathcal{C}$에 들고 $\{1, 2, 3\} \subseteq U$이다.
- $U = X$: 네 점 모두 $X \in \mathcal{C}$에 들고 $X \subseteq U$이다.

따라서 판정의 (1)에 의해 $\mathcal{C}$는 $\mathcal{T}$의 기저이다.

$\mathcal{C}'$: 열린집합 $\{1, 2, 3\}$과 그 점 $3$을 보자. $\mathcal{C}'$의 원소 가운데 $3$을 원소로 갖는 것은 $X$뿐인데 $4 \in X$이고 $4 \notin \{1, 2, 3\}$이므로 $X \not\subseteq \{1, 2, 3\}$이다. 곧 $3 \in C \subseteq \{1, 2, 3\}$인 $C \in \mathcal{C}'$이 없으므로, 판정의 (2)에 의해 $\mathcal{C}'$은 $\mathcal{T}$의 기저가 아니다.

**(3)** [[closed-set|위상공간의 닫힌집합]]의 (5)에 의해 닫힌집합은 정확히 열린집합의 여집합이다. $\mathcal{T}$의 여섯 원소의 여집합을 차례로 적으면
$$
\begin{aligned}
&X, \quad \{2, 3, 4\}, \quad \{1, 3, 4\},\\
&\{3, 4\}, \quad \{4\}, \quad \emptyset
\end{aligned}
$$
이고, 이것이 닫힌집합 전부이다.

- 열린집합이면서 닫힌집합: $\emptyset$과 $X$이다. 두 목록에 함께 나오는 것은 이 둘뿐이다.
- 열린집합도 닫힌집합도 아닌 것: $\{3\}$이다. $\{3\}$은 $\mathcal{T}$의 원소가 아니고, 위 닫힌집합 목록에도 없다.
:::

:::exercise[두 위상의 교집합과 합집합]
$\mathcal{T}_1$, $\mathcal{T}_2$가 집합 $X$ 위의 위상이라 하자.

1. $\mathcal{T}_1 \cap \mathcal{T}_2$는 $X$ 위의 위상이고, 두 위상보다 거칠며, 두 위상보다 거친 $X$ 위의 위상은 모두 $\mathcal{T}_1 \cap \mathcal{T}_2$보다 거침을 보여라.
2. $X = \{1, 2, 3\}$, $\mathcal{T}_1 = \{\emptyset, \{1\}, \{1, 2\}, X\}$, $\mathcal{T}_2 = \{\emptyset, \{3\}, \{2, 3\}, X\}$일 때 $\mathcal{T}_1$과 $\mathcal{T}_2$가 위상임을 확인하고, $\mathcal{T}_1 \cup \mathcal{T}_2$는 위상이 아님을 보여라. 이때 $\mathcal{T}_1 \cap \mathcal{T}_2$는 무엇인가?
:::

:::solution
위상의 조건 (i)–(iii)은 [[topological-space|위상공간]]의 것이고, "거칠다"는 [[comparing-topologies|위상의 비교]]의 것이다.

**(1)** $\mathcal{T}_1 \cap \mathcal{T}_2$는 $\mathscr{P}(X)$의 부분집합이다. 조건을 차례로 본다.
- (i) $\emptyset$과 $X$는 두 위상에 모두 들므로 $\mathcal{T}_1 \cap \mathcal{T}_2$에 든다.
- (ii) $\mathcal{U} \subseteq \mathcal{T}_1 \cap \mathcal{T}_2$이면 $\mathcal{U} \subseteq \mathcal{T}_1$이고 $\mathcal{U} \subseteq \mathcal{T}_2$이므로, 두 위상의 조건 (ii)에 의해 $\bigcup \mathcal{U}$는 $\mathcal{T}_1$에도 $\mathcal{T}_2$에도 든다.
- (iii) $U$, $V \in \mathcal{T}_1 \cap \mathcal{T}_2$이면 두 위상의 조건 (iii)에 의해 $U \cap V$는 두 위상에 모두 든다.

따라서 $\mathcal{T}_1 \cap \mathcal{T}_2$는 위상이다. $\mathcal{T}_1 \cap \mathcal{T}_2 \subseteq \mathcal{T}_1$이고 $\mathcal{T}_1 \cap \mathcal{T}_2 \subseteq \mathcal{T}_2$이므로 두 위상보다 거칠다. $\mathcal{T}$가 $\mathcal{T}_1$과 $\mathcal{T}_2$보다 거친 위상이면 $\mathcal{T} \subseteq \mathcal{T}_1$이고 $\mathcal{T} \subseteq \mathcal{T}_2$이므로 $\mathcal{T} \subseteq \mathcal{T}_1 \cap \mathcal{T}_2$, 곧 $\mathcal{T}$는 $\mathcal{T}_1 \cap \mathcal{T}_2$보다 거칠다.

**(2)** $\{1\} \subseteq \{1, 2\} \subseteq X$이고 $\{3\} \subseteq \{2, 3\} \subseteq X$이므로 [[topology-examples|위상의 예]]의 (9)에 의해 $\mathcal{T}_1$과 $\mathcal{T}_2$는 $X$ 위의 위상이다.
$$
\begin{aligned}
\mathcal{T}_1 \cup \mathcal{T}_2 = \{&\emptyset, \{1\}, \{3\},\\
&\{1, 2\}, \{2, 3\}, X\}
\end{aligned}
$$
에서 $\{1\}$과 $\{3\}$은 원소이지만, [[family-of-sets|집합족]]의 (3)에 의해 $\bigcup \{\{1\}, \{3\}\} = \{1, 3\}$이고 $\{1, 3\}$은 원소가 아니다. 따라서 조건 (ii)가 깨지고 $\mathcal{T}_1 \cup \mathcal{T}_2$는 위상이 아니다. 조건 (iii)도 깨진다. $\{1, 2\} \cap \{2, 3\} = \{2\}$가 원소가 아니기 때문이다.

두 위상에 함께 드는 원소는 $\emptyset$과 $X$뿐이므로 $\mathcal{T}_1 \cap \mathcal{T}_2 = \{\emptyset, X\}$, 곧 밀착위상이다. (1)에 맞게 이것은 위상이다.
:::

:::exercise[한 점을 품은 집합들의 위상]
$X$가 집합이고 $p \in X$라 하자.
$$
\begin{aligned}
\mathcal{T}_p = \{U \in \mathscr{P}(X) :{} &U = \emptyset \text{이거나}\\
&p \in U\}
\end{aligned}
$$
로 둔다.

1. $\mathcal{T}_p$는 $X$ 위의 위상임을 보여라.
2. $F \subseteq X$가 $(X, \mathcal{T}_p)$에서 닫힌집합인 것은 정확히 $F = X$이거나 $p \notin F$일 때임을 보여라.
3. $X$에 $p$와 다른 점 $q$가 있으면, $\mathcal{T}_p$는 밀착위상보다 진짜로 더 섬세하고 이산위상보다 진짜로 더 거침을 보여라.
4. $\mathcal{C} = \{\{p, x\} : x \in X\}$(식으로 정한 집합족)는 위상 $\mathcal{T}_p$의 기저임을 보여라.
:::

:::solution
위상의 조건 (i)–(iii)은 [[topological-space|위상공간]]의 것이고, 집합족의 합집합은 [[family-of-sets|집합족]]의 것이다.

**(1)** (i) $\emptyset \in \mathcal{T}_p$이고, $p \in X$이므로 $X \in \mathcal{T}_p$이다.

(ii) $\mathcal{U} \subseteq \mathcal{T}_p$라 하자. $\mathcal{U}$의 원소가 모두 $\emptyset$이면 $x \in A$인 $A \in \mathcal{U}$가 없으므로 $\bigcup \mathcal{U} = \emptyset \in \mathcal{T}_p$이다($\mathcal{U} = \emptyset$인 경우도 여기에 든다). 그렇지 않으면 공집합이 아닌 $A \in \mathcal{U}$가 있고, $A \in \mathcal{T}_p$이므로 $p \in A$이며, 집합족의 (1)에 의해 $p \in \bigcup \mathcal{U}$이다. 어느 쪽이든 $\bigcup \mathcal{U} \in \mathcal{T}_p$이다.

(iii) $U$, $V \in \mathcal{T}_p$라 하자. 하나가 $\emptyset$이면 $U \cap V = \emptyset \in \mathcal{T}_p$이다. 둘 다 공집합이 아니면 $p \in U$이고 $p \in V$이므로 $p \in U \cap V$이다.

**(2)** [[closed-set|위상공간의 닫힌집합]]의 정의에 의해 $F$가 닫힌집합인 것은 정확히 $X - F \in \mathcal{T}_p$, 곧 $X - F = \emptyset$이거나 $p \in X - F$일 때이다. $F \subseteq X$이므로 $X - F = \emptyset$인 것은 정확히 $F = X$일 때이고, $p \in X$이므로 $p \in X - F$인 것은 정확히 $p \notin F$일 때이다.

**(3)** 밀착위상 $\{\emptyset, X\}$와 이산위상 $\mathscr{P}(X)$는 [[topology-examples|위상의 예]]의 (1), (2)의 것이고, [[comparing-topologies|위상의 비교]]의 (3)에 의해 $\{\emptyset, X\} \subseteq \mathcal{T}_p \subseteq \mathscr{P}(X)$이다.
- $\{p\} \in \mathcal{T}_p$이다. $\{p\} \ne \emptyset$이고 $q \notin \{p\}$이므로 $\{p\} \ne X$이다. 따라서 $\{p\}$는 밀착위상의 원소가 아니고, $\mathcal{T}_p \ne \{\emptyset, X\}$이다.
- $\{q\} \in \mathscr{P}(X)$이지만 $\{q\} \ne \emptyset$이고 $p \notin \{q\}$이므로 $\{q\} \notin \mathcal{T}_p$이다. 따라서 $\mathcal{T}_p \ne \mathscr{P}(X)$이다.

그러므로 $\mathcal{T}_p$는 밀착위상보다 진짜로 더 섬세하고 이산위상보다 진짜로 더 거칠다.

**(4)** [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 (1)을 쓴다. $x \in X$이면 $p \in \{p, x\}$이므로 $\{p, x\} \in \mathcal{T}_p$이고, 따라서 $\mathcal{C} \subseteq \mathcal{T}_p$이다. 이제 $U \in \mathcal{T}_p$이고 $x \in U$라 하자. $U \ne \emptyset$이므로 $p \in U$이고, 따라서 $\{p, x\} \subseteq U$이다. $\{p, x\} \in \mathcal{C}$이고 $x \in \{p, x\}$이므로 판정의 둘째 조건도 성립한다. 따라서 $\mathcal{C}$는 $\mathcal{T}_p$의 기저이다.
:::

:::exercise[한 점을 품은 집합들의 위상과 거리위상]
문제 3의 $\mathcal{T}_p$를 생각한다.

1. $X$에 $p$와 다른 점 $q$가 있으면, $X$ 위의 어떤 거리 $d$에 대해서도 $\mathcal{T}_d \ne \mathcal{T}_p$임을 보여라.
2. $X = \{p\}$이면 $\mathcal{T}_p$는 어떤 거리의 거리위상임을 보여라.
:::

:::solution
거리위상 $\mathcal{T}_d$는 [[topology-examples|위상의 예]]의 (4)의 것이다.

**(1)** $d$가 $X$ 위의 거리이고 $\mathcal{T}_d = \mathcal{T}_p$라 하자. [[open-set-in-metric-space|거리공간의 열린집합과 닫힌집합]]의 (5)에 의해 $\{p\}$는 $(X, d)$에서 닫힌집합이고, [[closed-set|위상공간의 닫힌집합]]의 (6)에 의해 $(X, \mathcal{T}_d)$, 곧 $(X, \mathcal{T}_p)$에서 닫힌집합이다. 문제 3의 (2)에 의해 $\{p\} = X$이거나 $p \notin \{p\}$이어야 한다. 그런데 $q \in X$이고 $q \notin \{p\}$이므로 $\{p\} \ne X$이고, $p \in \{p\}$이다. 이것은 모순이므로 $\mathcal{T}_d \ne \mathcal{T}_p$이다.

**(2)** $X = \{p\}$이면 $X$의 부분집합은 $\emptyset$과 $X$뿐이고 둘 다 $\mathcal{T}_p$의 원소이므로 $\mathcal{T}_p = \{\emptyset, X\}$, 곧 밀착위상이다. $X$에는 서로 다른 두 점이 없으므로 위상의 예의 (6)의 뒤 문장에 의해 밀착위상은 $X$ 위의 이산 거리의 거리위상이다.

따라서 (1)의 "$p$와 다른 점 $q$가 있다"는 가정을 뺄 수 없다. (1)에서 실제로 쓴 것은 "거리위상에서는 한 점 집합이 닫혀 있다"는 것 하나이다.
:::

:::exercise[유리수 끝점의 열린구간]
$$
\begin{aligned}
&\mathcal{B}_{\mathbb{Q}} = \{I \in \mathscr{P}(\mathbb{R}) : a < b \text{이고}\\
&\quad I = (a, b) \text{인 유리수 } a, b \text{가 있다}\}
\end{aligned}
$$
로 둔다.

1. $\mathcal{B}_{\mathbb{Q}}$는 $\mathbb{R}$의 보통 위상의 기저임을 보여라.
2. 끝점이 정수인 열린구간만 모은 집합족 $\mathcal{B}_{\mathbb{Z}} = \{I \in \mathscr{P}(\mathbb{R}) : a < b \text{이고 } I = (a, b) \text{인 정수 } a, b \text{가 있다}\}$는 보통 위상의 기저가 아님을 보여라.
:::

:::solution
$\mathbb{R}$의 보통 위상 $\mathcal{T}$와 열린구간 전체의 집합족 $\mathcal{J}$는 [[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5)의 것이다. 그 (5)에 의해 $\mathcal{J}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}$이므로, [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 정의에 의해 $\mathcal{J}$는 위상 $\mathcal{T}$의 기저이다.

**(1)** 판정의 (1)을 쓴다.

$\mathcal{B}_{\mathbb{Q}} \subseteq \mathcal{T}$: $\mathcal{B}_{\mathbb{Q}}$의 원소는 열린구간이므로 $\mathcal{J}$의 원소이고, [[basis-for-a-topology|위상의 기저와 생성된 위상]]의 (2)에 의해 $\mathcal{J} \subseteq \mathcal{T}_{\mathcal{J}} = \mathcal{T}$이다.

둘째 조건: $U \in \mathcal{T}$이고 $x \in U$라 하자. 판정의 (2)를 $\mathcal{J}$에 쓰면 $x \in C$이고 $C \subseteq U$인 $C \in \mathcal{J}$가 있다. $C = (c, d)$($c < d$)라 하면 $c < x < d$이다. [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $c < a < x$인 유리수 $a$와 $x < b < d$인 유리수 $b$가 있다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (v)에 의해 $a < b$이므로 $(a, b) \in \mathcal{B}_{\mathbb{Q}}$이고, $a < x < b$이므로 $x \in (a, b)$이다. $y \in (a, b)$이면 $c < a < y < b < d$이므로 $y \in (c, d)$이다. 따라서 $x \in (a, b) \subseteq C \subseteq U$이다.

두 조건이 성립하므로 판정의 (1)에 의해 $\mathcal{B}_{\mathbb{Q}}$는 $\mathcal{T}$의 기저이다.

**(2)** $\mathcal{B}_{\mathbb{Z}}$가 $\mathcal{T}$의 기저라고 하자. $U = (0, 1/2)$는 $\mathcal{J}$의 원소이므로 위와 같이 $U \in \mathcal{T}$이고, $1/4 \in U$이다. 판정의 (2)에 의해 $1/4 \in (m, n) \subseteq U$인 정수 $m < n$이 있어야 한다.

$m < 1/4 < 1$이므로 $m < 1$이다. [[well-ordering-principle|정렬 원리]]의 (Z5)에 의해 $m < 0$, $m = 0$, $0 < m$ 가운데 하나인데, $0 < m$이면 [[prime-number|소수]]의 (Z1)에 의해 $1 \le m$이 되어 $m < 1$과 함께 (L1)에 어긋난다. 따라서 $m \le 0$이다. 또 $0 < 1/4 < n$이므로 $n$은 양의 정수이고 (Z1)에 의해 $1 \le n$이다. 그러면 $m \le 0 < 3/4 < 1 \le n$이므로 $3/4 \in (m, n)$인데, $1/2 < 3/4$이므로 $3/4 \notin U$이다. 이는 $(m, n) \subseteq U$에 어긋난다. 따라서 $\mathcal{B}_{\mathbb{Z}}$는 $\mathcal{T}$의 기저가 아니다.

(1)에서 쓴 것은 $x$의 양쪽에 원하는 만큼 가까운 끝점을 $\mathcal{B}_{\mathbb{Q}}$에서 찾을 수 있다는 것이고, (2)는 정수 끝점으로는 그럴 수 없다는 것이다.
:::

:::exercise[오른쪽 끝을 품은 반열린구간이 생성하는 위상]
$$
\begin{aligned}
&\mathcal{B}_u = \{I \in \mathscr{P}(\mathbb{R}) : a < b \text{이고}\\
&\quad I = (a, b] \text{인 실수 } a, b \text{가 있다}\}
\end{aligned}
$$
로 두고, $\mathcal{T}_u = \mathcal{T}_{\mathcal{B}_u}$라 한다.

1. $\mathcal{B}_u$는 $\mathbb{R}$ 위의 위상의 기저임을 보여라.
2. $\mathcal{T}_u$는 $\mathbb{R}$의 보통 위상보다 진짜로 더 섬세함을 보여라.
3. $\mathcal{T}_u$와 아래끝 위상 $\mathcal{T}_l$은 비교할 수 없음을 보여라.
:::

:::solution
위상의 기저, $\mathcal{T}_{\mathcal{B}}$, 덮기 조건과 교집합 조건은 [[basis-for-a-topology|위상의 기저와 생성된 위상]]의 것이고, 보통 위상과 $\mathcal{J}$는 [[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5)의 것이며, $\mathcal{B}_l$과 $\mathcal{T}_l$은 [[lower-limit-topology|아래끝 위상]]의 것이다. 구간의 기호는 [[interval|구간]]의 것이고, 실수의 순서는 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다.

**(1)** 덮기 조건: 실수 $x$에 대하여 $x - 1 < x$이므로 $(x - 1, x] \in \mathcal{B}_u$이고 $x \in (x - 1, x]$이다.

교집합 조건: $x \in (a_1, b_1] \cap (a_2, b_2]$라 하고 $a = \max\{a_1, a_2\}$라 하자. [[absolute-value|절댓값]]의 (10)에 의해 $a$는 $a_1$이거나 $a_2$이므로 $a < x$이고, $a_1 \le a$, $a_2 \le a$이다. 따라서 $(a, x] \in \mathcal{B}_u$이고 $x \in (a, x]$이다. $z \in (a, x]$이면 $i = 1, 2$에서 $a_i \le a < z$이고 $z \le x \le b_i$이므로 $z \in (a_i, b_i]$이다. 곧 $(a, x] \subseteq (a_1, b_1] \cap (a_2, b_2]$이다.

**(2)** 포함: [[comparing-bases|기저로 위상 비교하기]]의 (1)을 $\mathcal{B} = \mathcal{J}$, $\mathcal{B}' = \mathcal{B}_u$에 쓴다. $(c, d) \in \mathcal{J}$이고 $x \in (c, d)$이면 $c < x$이므로 $(c, x] \in \mathcal{B}_u$이고 $x \in (c, x]$이며, $z \in (c, x]$이면 $c < z \le x < d$이므로 $(c, x] \subseteq (c, d)$이다. 따라서 $\mathcal{T}_{\mathcal{J}} \subseteq \mathcal{T}_u$이다.

진짜로 더: 위상의 기저와 생성된 위상의 (2)에 의해 $(0, 1] \in \mathcal{B}_u \subseteq \mathcal{T}_u$이다. 한편 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (3)에 의해 $(0, 1]$은 보통 거리에서 열린집합이 아니고, 보통 위상의 (5)에 의해 보통 위상의 원소가 아니다. 따라서 두 위상은 같지 않다.

**(3)** $\mathcal{T}_l \not\subseteq \mathcal{T}_u$: $[0, 1) \in \mathcal{B}_l \subseteq \mathcal{T}_l$이다(위상의 기저와 생성된 위상의 (2)). $[0, 1) \in \mathcal{T}_u$라면 점 $0$에서 $0 \in (a, b] \subseteq [0, 1)$인 $(a, b] \in \mathcal{B}_u$가 있어야 한다. 그런데 $0 \in (a, b]$이면 $a < 0 \le b$이고, 순서의 성질 (8)에 의해 $a < a/2 < 0$이므로 $a/2 \in (a, b]$이며 $a/2 \notin [0, 1)$이다. 따라서 $[0, 1) \notin \mathcal{T}_u$이다.

$\mathcal{T}_u \not\subseteq \mathcal{T}_l$: $(0, 1] \in \mathcal{T}_u$이다. $(0, 1] \in \mathcal{T}_l$이라면 점 $1$에서 $1 \in [a, b) \subseteq (0, 1]$인 $[a, b) \in \mathcal{B}_l$이 있어야 한다. 그런데 $1 \in [a, b)$이면 $a \le 1 < b$이고, 순서의 성질 (8)에 의해 $1 < (1 + b)/2 < b$이므로 $(1 + b)/2 \in [a, b)$이며 $(1 + b)/2 \notin (0, 1]$이다. 따라서 $(0, 1] \notin \mathcal{T}_l$이다.

두 포함이 모두 성립하지 않으므로 $\mathcal{T}_u$와 $\mathcal{T}_l$은 비교할 수 없다. 둘 다 보통 위상보다 섬세하지만, 왼쪽 끝을 지키는 것과 오른쪽 끝을 지키는 것이 서로 다른 열린집합을 낸다.
:::
