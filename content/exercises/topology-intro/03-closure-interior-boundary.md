---
written_by: Claude
status: reviewed
sources:
  - ref: fuglede-basic-topology
    loc: "연습문제 3.10 (content/exercises.tex:124–137) — 문제 '열린 조밀한 집합과 조밀한 집합의 교집합'의 1과 같은 대상(열린 조밀한 집합들의 교집합의 조밀함. 출처는 가산 개의 열린 조밀한 집합과 국소 콤팩트 하우스도르프 공간)"
added: 2026-11-26
---

:::exercise[네 점 위의 사슬 위상에서 한 집합 살펴보기]
$X = \{1, 2, 3, 4\}$에 위상 $\mathcal{T} = \{\emptyset, \{1, 2\}, \{1, 2, 3\}, X\}$를 주고 $A = \{2, 4\}$라 하자.

1. $\mathcal{T}$가 위상임을 확인하고 $(X, \mathcal{T})$의 닫힌집합을 모두 적어라.
2. $\operatorname{Int} A$, $\overline{A}$, $\partial A$를 구하라.
3. $A$의 집적점과 고립점을 모두 구하고, $\overline{A}$가 $A$와 집적점 전체의 합집합이라는 것과 맞는지 확인하라.
4. $A$는 $X$에서 조밀한가?
:::

:::solution
근방은 [[neighborhood|근방]], 내부와 폐포는 [[interior-and-closure|내부와 폐포]], 경계는 [[boundary|경계]], 집적점과 고립점은 [[cluster-point-in-a-space|위상공간의 집적점]], 조밀은 [[dense-subset|조밀한 부분집합]]의 정의대로 읽는다.

**(1)** $\{1, 2\} \subseteq \{1, 2, 3\} \subseteq X$이므로 [[topology-examples|위상의 예]]의 (9)에 의해 $\mathcal{T}$는 위상이다. [[closed-set|위상공간의 닫힌집합]]의 (5)에 의해 닫힌집합은 정확히 열린집합의 여집합이므로 $X$, $\{3, 4\}$, $\{4\}$, $\emptyset$의 넷이다.

**(2)** 내부. 열린집합 가운데 $A$에 포함되는 것은 $\emptyset$뿐이다($1 \notin A$이므로 $\{1, 2\}$, $\{1, 2, 3\}$, $X$는 $A$에 포함되지 않는다). 따라서 $\operatorname{Int} A = \bigcup \{\emptyset\} = \emptyset$이다([[family-of-sets|집합족]]의 (3)).

폐포. 닫힌집합 가운데 $A$를 포함하는 것은 $X$뿐이다($2 \notin \{3, 4\}$, $2 \notin \{4\}$, $2 \notin \emptyset$). 따라서 $\overline{A} = \bigcap \{X\} = X$이다.

경계. [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)에 의해 $\partial A = \overline{A} - \operatorname{Int} A = X - \emptyset = X$이다.

**(3)** 점마다 근방을 적는다. $1$과 $2$의 근방은 $\{1, 2\}$, $\{1, 2, 3\}$, $X$이고, $3$의 근방은 $\{1, 2, 3\}$, $X$이며, $4$의 근방은 $X$뿐이다.
- $x = 1$: 세 근방이 모두 $2$를 원소로 갖고 $2 \in A$, $2 \ne 1$이므로 $1$은 $A$의 집적점이다.
- $x = 2$: 근방 $\{1, 2\}$에서 $(\{1, 2\} \cap A) - \{2\} = \{2\} - \{2\} = \emptyset$이므로 $2$는 집적점이 아니다. $2 \in A$이므로 $2$는 $A$의 고립점이다.
- $x = 3$: $(\{1, 2, 3\} \cap A) - \{3\} = \{2\}$이고 $(X \cap A) - \{3\} = \{2, 4\}$이므로 $3$은 집적점이다.
- $x = 4$: 유일한 근방 $X$에서 $(X \cap A) - \{4\} = \{2\} \ne \emptyset$이므로 $4$는 집적점이다.

따라서 $A$의 집적점은 $1$, $3$, $4$이고 고립점은 $2$뿐이다. $4$는 $A$의 원소이면서 집적점이다. $A$와 집적점 전체의 합집합은 $\{2, 4\} \cup \{1, 3, 4\} = X$이고, 이것은 (2)의 $\overline{A}$와 같다. [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (7)과 맞는다.

**(4)** (2)에서 $\overline{A} = X$이므로 조밀하다. [[closure-by-neighborhoods|근방으로 본 폐포]]의 (4)로 보아도 같다. 공집합이 아닌 열린집합 $\{1, 2\}$, $\{1, 2, 3\}$, $X$가 모두 $2 \in A$를 원소로 갖는다.
:::

:::exercise[경계의 경계]
$(X, \mathcal{T})$가 위상공간이고 $A \subseteq X$라 하자.

1. $\partial(\partial A) \subseteq \partial A$임을 보여라.
2. $A$가 닫힌집합이면 $\operatorname{Int}(\partial A) = \emptyset$이고 $\partial(\partial A) = \partial A$임을 보여라. $A$가 열린집합일 때도 $\partial(\partial A) = \partial A$임을 보여라.
3. $\mathbb{R}$(보통 위상)에서 $\partial(\partial \mathbb{Q})$와 $\partial \mathbb{Q}$를 구해, (1)의 포함이 등호가 아닐 수 있음을 보여라.
:::

:::solution
내부와 폐포는 [[interior-and-closure|내부와 폐포]], 경계는 [[boundary|경계]]의 것이고, 둘의 관계는 [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]](아래에서 "관계")의 번호로 인용한다.

**(1)** 관계의 (4)에 의해 $\partial A$는 닫힌집합이므로 내부와 폐포의 (3)에 의해 $\overline{\partial A} = \partial A$이다. 관계의 (3)을 집합 $\partial A$에 쓰면
$$
\partial(\partial A) = \overline{\partial A} - \operatorname{Int}(\partial A) \subseteq \overline{\partial A} = \partial A
$$
이다.

**(2)** $A$가 닫힌집합이라 하자. 관계의 (6)에 의해 $\partial A \subseteq A$이다. 내부와 폐포의 (1)에 의해 $\operatorname{Int}(\partial A)$는 열린집합이고 $\operatorname{Int}(\partial A) \subseteq \partial A \subseteq A$이므로, 같은 항목의 (2)에 의해 $\operatorname{Int}(\partial A) \subseteq \operatorname{Int} A$이다. 그러면 $\operatorname{Int}(\partial A) \subseteq \operatorname{Int} A \cap \partial A$이고, 관계의 (5)에 의해 오른쪽은 $\emptyset$이다. 따라서 $\operatorname{Int}(\partial A) = \emptyset$이고, (1)의 식에서
$$
\partial(\partial A) = \overline{\partial A} - \emptyset = \partial A
$$
이다.

$A$가 열린집합이면 [[closed-set|위상공간의 닫힌집합]]의 (5)에 의해 $X - A$는 닫힌집합이고, 경계의 (1)에 의해 $\partial A = \partial(X - A)$이다. 앞 단락을 $X - A$에 쓰면 $\partial(\partial A) = \partial(\partial(X - A)) = \partial(X - A) = \partial A$이다.

**(3)** [[dense-subsets-of-the-reals|실수의 조밀한 부분집합]]의 (3)에 의해 $\partial \mathbb{Q} = \mathbb{R}$이고, 경계의 (3)에 의해 $\partial \mathbb{R} = \emptyset$이다. 따라서 $\partial(\partial \mathbb{Q}) = \emptyset$이고 $\partial \mathbb{Q} = \mathbb{R}$이므로 두 집합은 다르다. (2)에 맞게, 같은 항목의 (3)에서 $\operatorname{Int} \mathbb{Q} = \emptyset \ne \mathbb{Q}$이고 $\overline{\mathbb{Q}} = \mathbb{R} \ne \mathbb{Q}$이므로 $\mathbb{Q}$는 열린집합도 닫힌집합도 아니다(내부와 폐포의 (3)).
:::

:::exercise[열린집합과 그 폐포의 내부]
$(X, \mathcal{T})$가 위상공간이라 하자.

1. $U$가 열린집합이면 $U \subseteq \operatorname{Int} \overline{U}$이고, $F$가 닫힌집합이면 $\overline{\operatorname{Int} F} \subseteq F$임을 보여라.
2. $\mathbb{R}$(보통 거리의 거리위상)에서 $U = (0, 1) \cup (1, 2)$에 대하여 $\operatorname{Int} \overline{U}$를 구하고, (1)의 첫 포함이 등호가 아닐 수 있음을 보여라.
3. 같은 $\mathbb{R}$에서 $F = \{0\}$에 대하여 $\overline{\operatorname{Int} F}$를 구하고, (1)의 둘째 포함도 등호가 아닐 수 있음을 보여라.
:::

:::solution
내부와 폐포는 [[interior-and-closure|내부와 폐포]]의 번호로 인용한다.

**(1)** 내부와 폐포의 (1)에 의해 $U \subseteq \overline{U}$이다. $U$가 열린집합이므로 (2)의 앞 문장에 의해 $U \subseteq \operatorname{Int} \overline{U}$이다. 또 (1)에 의해 $\operatorname{Int} F \subseteq F$이고, $F$가 닫힌집합이므로 (2)의 뒤 문장에 의해 $\overline{\operatorname{Int} F} \subseteq F$이다.

**(2)** [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (1)과 [[topology-examples|위상의 예]]의 (4)에 의해 $(0, 1)$과 $(1, 2)$는 열린집합이고, [[topological-space|위상공간]]의 (1)에 의해 $U$도 열린집합이다. [[closure-of-union-and-intersection|합집합·교집합의 폐포와 내부]]의 (1)과 [[closure-in-a-metric-space|거리공간의 폐포·내부·경계·집적점]]의 (6)에 의해
$$
\overline{U} = \overline{(0, 1)} \cup \overline{(1, 2)} = [0, 1] \cup [1, 2]
$$
이다. 이것은 $[0, 2]$와 같다. $x \in [0, 2]$이면 $x \le 1$일 때 $x \in [0, 1]$이고 $1 < x$일 때 $x \in [1, 2]$이며([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)), 거꾸로 두 구간의 원소는 $0$ 이상 $2$ 이하이다. 다시 거리공간의 폐포의 (6)에 의해 $\operatorname{Int} \overline{U} = \operatorname{Int}[0, 2] = (0, 2)$이다.

$0 < 1 < 2$이므로 $1 \in (0, 2) = \operatorname{Int} \overline{U}$이지만, $1$은 $(0, 1)$에도 $(1, 2)$에도 들지 않으므로 $1 \notin U$이다. 따라서 $U \subseteq \operatorname{Int} \overline{U}$는 등호가 아니다. 폐포를 취하면 구멍 $1$이 메워지고, 그 뒤에 내부를 취해도 $1$은 다시 빠지지 않는다.

**(3)** $\operatorname{Int}\{0\} = \emptyset$임을 보인다. 거리공간의 폐포의 (2)에 의해 $0 \in \operatorname{Int}\{0\}$이려면 $B(0, r) \subseteq \{0\}$인 $r > 0$이 있어야 한다. 그런데 $r > 0$이면 순서의 성질 (8)에 의해 $0 < r/2 < r$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|r/2 - 0| = r/2 < r$, 곧 $r/2 \in B(0, r)$이고, $r/2 \ne 0$이다. 따라서 $0 \notin \operatorname{Int}\{0\}$이고, 내부와 폐포의 (1)에 의해 $\operatorname{Int}\{0\} \subseteq \{0\}$이므로 $\operatorname{Int}\{0\} = \emptyset$이다. 내부와 폐포의 (8)에 의해 $\overline{\operatorname{Int} F} = \overline{\emptyset} = \emptyset$이다. 한편 실수의 열린집합과 닫힌집합의 예의 (2)에 의해 $F = \{0\}$은 닫힌집합이고 $\emptyset \ne F$이므로, 둘째 포함도 등호가 아니다.
:::

:::exercise[열린 조밀한 집합과 조밀한 집합의 교집합]
$(X, \mathcal{T})$가 위상공간이라 하자.

1. $U$와 $V$가 $X$에서 조밀하고 $U$가 열린집합이면 $U \cap V$도 $X$에서 조밀함을 보여라.
2. $\mathbb{R}$(보통 위상)에서 $\mathbb{R} - \{0\}$이 열린집합이고 조밀함을 보이고, (1)로 $0$이 아닌 유리수 전체의 집합 $\mathbb{Q} - \{0\}$이 $\mathbb{R}$에서 조밀함을 보여라.
:::

:::solution
조밀은 [[dense-subset|조밀한 부분집합]]의 것이고, 판정은 [[closure-by-neighborhoods|근방으로 본 폐포]]의 (4)의 앞 문장을 쓴다. 곧 $A$가 조밀한 것은 정확히 공집합이 아닌 모든 열린집합이 $A$와 만날 때이다.

**(1)** $W$가 공집합이 아닌 열린집합이라 하자. $U$가 조밀하므로 판정에 의해 $W \cap U \ne \emptyset$이다. [[topological-space|위상공간]]의 조건 (iii)에 의해 $W \cap U$는 열린집합이고 공집합이 아니므로, $V$가 조밀하다는 것과 판정에 의해 $(W \cap U) \cap V \ne \emptyset$이다. 이것은 $W \cap (U \cap V)$와 같은 집합이다. 따라서 공집합이 아닌 모든 열린집합이 $U \cap V$와 만나고, 판정에 의해 $U \cap V$는 조밀하다.

$U$가 열려 있다는 가정은 둘째 단계에서만 쓰였다. $W \cap U$가 열린집합이어야 $V$의 조밀함을 그 집합에 쓸 수 있다.

**(2)** 열린집합. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)에 의해 $\{0\}$은 보통 거리에서 닫힌집합이고, [[closed-set|위상공간의 닫힌집합]]의 (6)과 [[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5)에 의해 보통 위상에서 닫힌집합이다. 닫힌집합의 정의에 의해 $\mathbb{R} - \{0\}$은 열린집합이다.

조밀. [[rationals-are-dense|유리수의 조밀성]]의 (1)에 의해 정수 $0$은 유리수이므로, 무리수 전체의 집합 $\mathbb{R} - \mathbb{Q}$는 $\mathbb{R} - \{0\}$에 포함된다. [[dense-subsets-of-the-reals|실수의 조밀한 부분집합]]의 (2)에 의해 $\overline{\mathbb{R} - \mathbb{Q}} = \mathbb{R}$이고, [[interior-and-closure|내부와 폐포]]의 (4)에 의해 $\mathbb{R} = \overline{\mathbb{R} - \mathbb{Q}} \subseteq \overline{\mathbb{R} - \{0\}} \subseteq \mathbb{R}$이므로 $\mathbb{R} - \{0\}$은 조밀하다.

결론. 실수의 조밀한 부분집합의 (2)에 의해 $\mathbb{Q}$도 조밀하다. (1)을 $U = \mathbb{R} - \{0\}$, $V = \mathbb{Q}$에 쓰면 $(\mathbb{R} - \{0\}) \cap \mathbb{Q} = \mathbb{Q} - \{0\}$은 조밀하다.
:::

:::exercise[아래끝 위상에서 0 의 오른쪽과 왼쪽]
식으로 정한 두 집합 $S^{+} = \{1/n : n \in \mathbb{N}\}$과 $S^{-} = \{-1/n : n \in \mathbb{N}\}$을 생각한다.

1. $\mathbb{R}$(보통 위상)에서 $0 \in \overline{S^{+}}$이고 $0 \in \overline{S^{-}}$임을 보여라.
2. $\mathbb{R}_l$에서 $0 \in \overline{S^{+}}$이고 $0 \notin \overline{S^{-}}$임을 보여라. $\mathbb{R}_l$에서 $0$은 $S^{+}$의 집적점인가?
:::

:::solution
폐포는 [[interior-and-closure|내부와 폐포]]의 것이고, 실수의 계산과 순서는 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다. 자연수 $n$에 대하여 같은 항목의 (10)에 의해 $0 < 1/n$이고, (3)의 (ii)에 의해 $-1/n < 0$이다.

**(1)** $\mathbb{R}$의 보통 위상은 보통 거리의 거리위상이다([[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5)). [[closure-in-a-metric-space|거리공간의 폐포·내부·경계·집적점]]의 (1)을 쓴다. $r > 0$이라 하자. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/n < r$인 자연수 $n$이 있다. [[absolute-value|절댓값]]의 (1)과 (3)에 의해 $|1/n - 0| = 1/n < r$이고 $|-1/n - 0| = 1/n < r$이므로, $1/n \in B(0, r) \cap S^{+}$이고 $-1/n \in B(0, r) \cap S^{-}$이다. 모든 $r > 0$에서 두 교집합이 공집합이 아니므로 $0 \in \overline{S^{+}}$이고 $0 \in \overline{S^{-}}$이다.

**(2)** [[lower-limit-topology|아래끝 위상]]의 (1)에 의해 $\mathcal{B}_l$은 위상의 기저이고 $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$이므로, [[basis-of-a-given-topology|주어진 위상의 기저 판정]]의 정의에 의해 $\mathcal{B}_l$은 위상 $\mathcal{T}_l$의 기저이다. 따라서 [[closure-by-neighborhoods|근방으로 본 폐포]]의 (2)로 판정할 수 있다. 곧 $0 \in \overline{S}$인 것은 정확히 $0$을 원소로 갖는 $\mathcal{B}_l$의 모든 원소가 $S$와 만날 때이다.

$S^{+}$: $0 \in [a, b)$이면 $a \le 0 < b$이다. 아르키메데스 성질의 (3)에 의해 $1/n < b$인 자연수 $n$이 있고, $a \le 0 < 1/n < b$이므로 $1/n \in [a, b) \cap S^{+}$이다. 따라서 $0 \in \overline{S^{+}}$이다.

$S^{-}$: $0 < 1$이므로 $[0, 1) \in \mathcal{B}_l$이고 $0 \in [0, 1)$이다. $[0, 1)$의 원소는 모두 $0$ 이상이고 $S^{-}$의 원소는 모두 $0$보다 작으므로(순서의 성질 (1)의 (i)) $[0, 1) \cap S^{-} = \emptyset$이다. 따라서 $0 \notin \overline{S^{-}}$이다.

집적점: $0 < 1/n$이므로 $0 \notin S^{+}$이다. [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (7)에 의해 $\overline{S^{+}}$의 점은 $S^{+}$에 들거나 $S^{+}$의 집적점이므로, $\mathbb{R}_l$에서 $0$은 $S^{+}$의 집적점이다.

$\mathbb{R}_l$의 기저 원소 $[a, b)$는 왼쪽 끝을 품고 오른쪽으로만 뻗으므로, $0$의 근방은 $0$의 오른쪽에 있는 점들만 반드시 품는다. 그래서 오른쪽에서 다가오는 $S^{+}$에는 $0$이 붙고 왼쪽에서 다가오는 $S^{-}$에는 붙지 않는다.
:::

:::exercise[합집합과 교집합의 경계]
$(X, \mathcal{T})$가 위상공간이고 $A$, $B \subseteq X$라 하자.

1. $\partial(A \cup B) \subseteq \partial A \cup \partial B$임을 보여라.
2. $\partial(A \cap B) \subseteq \partial A \cup \partial B$임을 보여라.
3. $\mathbb{R}$(보통 위상)에서 $A = \mathbb{Q}$, $B = \mathbb{R} - \mathbb{Q}$이면 (1)과 (2)의 포함이 모두 등호가 아님을 보여라.
:::

:::solution
폐포는 [[interior-and-closure|내부와 폐포]], 경계는 [[boundary|경계]]의 것이고, [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (2)에 의해 모든 $S \subseteq X$에서 $\partial S = \overline{S} \cap \overline{X - S}$이다.

**(1)** $x \in \partial(A \cup B)$라 하자. 그러면 $x \in \overline{A \cup B}$이고 $x \in \overline{X - (A \cup B)}$이다. [[closure-of-union-and-intersection|합집합·교집합의 폐포와 내부]]의 (1)에 의해 $\overline{A \cup B} = \overline{A} \cup \overline{B}$이므로 $x \in \overline{A}$이거나 $x \in \overline{B}$이다. 또 $X - (A \cup B) \subseteq X - A$이고 $X - (A \cup B) \subseteq X - B$이므로 내부와 폐포의 (4)에 의해 $x \in \overline{X - A}$이고 $x \in \overline{X - B}$이다.
- $x \in \overline{A}$이면 $x \in \overline{A} \cap \overline{X - A} = \partial A$이다.
- $x \in \overline{B}$이면 $x \in \overline{B} \cap \overline{X - B} = \partial B$이다.

어느 쪽이든 $x \in \partial A \cup \partial B$이다.

**(2)** 경계의 (1)에 의해 $\partial(A \cap B) = \partial\bigl(X - (A \cap B)\bigr)$이다. [[de-morgan-laws-sets|드 모르간 법칙]]의 (1)을 전체집합 $X$에서 쓰면 $X - (A \cap B) = (X - A) \cup (X - B)$이므로, (1)을 $X - A$와 $X - B$에 쓰고 다시 경계의 (1)을 쓰면
$$
\begin{aligned}
\partial(A \cap B) &= \partial\bigl((X - A) \cup (X - B)\bigr)\\
&\subseteq \partial(X - A) \cup \partial(X - B)\\
&= \partial A \cup \partial B
\end{aligned}
$$
이다.

**(3)** 모든 실수는 유리수이거나 유리수가 아니므로 $A \cup B = \mathbb{R}$이고, $A \cap B = \emptyset$이다. 경계의 (3)에 의해 $\partial(A \cup B) = \partial \mathbb{R} = \emptyset$이고 $\partial(A \cap B) = \partial \emptyset = \emptyset$이다. 한편 [[dense-subsets-of-the-reals|실수의 조밀한 부분집합]]의 (3)에 의해 $\partial A = \partial B = \mathbb{R}$이므로 $\partial A \cup \partial B = \mathbb{R}$이다. $\mathbb{R} \ne \emptyset$이므로 두 포함 모두 등호가 아니다.
:::
