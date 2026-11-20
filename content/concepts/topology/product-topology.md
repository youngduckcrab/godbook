---
title: 두 공간의 곱위상
title_en: Product Topology of Two Spaces
aliases: [곱위상, product topology, 곱공간, product space, 사영, projection, 곱집합의 집합 등식]
kind: definition
field: topology
msc: ["54B10"]
level: undergrad
summary: 두 위상공간의 곱집합에서 열린집합의 곱 U × V 전체가 위상의 기저임을 보이고 그것이 생성한 위상을 곱위상이라 한다. 먼저 곱집합의 교집합·합집합·차집합 등식을 증명하고, 곱위상의 열린집합 판정, 닫힌집합의 곱, 기저의 곱, 두 사영과 그 역상, 부분집합의 곱 위에서 부분공간 위상과 곱위상이 같다는 것, 이산·밀착위상과 공집합·한 점의 경우를 다룬다.
requires: [set, subset, set-operations, power-set, empty-set-is-subset, cartesian-product, function, injective-surjective-bijective, image-and-preimage, recursion-theorem, family-of-sets, topological-space, topology-examples, closed-set, basis-for-a-topology, basis-generates-by-unions, basis-of-a-given-topology, standard-topology-on-reals, subspace-topology, interval, real-number-arithmetic, real-order-axioms, order-properties-of-reals, open-and-closed-sets-of-reals]
sources:
  - ref: fuglede-basic-topology
    loc: "The product topology 절, 사영의 정의와 두 공간의 곱의 설명, content/topological-spaces.tex:502–521"
    checked: original
    note: "출처는 임의 개수의 곱 위에서 곱위상을 '모든 사영 π_i 를 연속으로 하는 가장 거친 위상'으로 정의하고(512–514) 그것이 부분기저 π_i⁻¹(U) 로 생성된다고 적는다(515). 이 항목은 두 공간만 다루고, 출처가 두 공간의 경우로 설명하는 집합족 ℬ = {U × V | U ∈ 𝒯_{X₁}, V ∈ 𝒯_{X₂}}(517–521)가 위상의 기저임을 (2)에서 증명한 뒤 그것이 생성한 위상을 곱위상으로 정의한다. 출처는 ℬ 가 곱위상의 기저라는 것을 증명 없이 적는다. 사영은 출처 509줄의 π_i 를 두 공간에 쓴 것이고, (6)의 π₁⁻¹(U) = U × X₂, π₂⁻¹(V) = X₁ × V, 두 역상의 교집합이 U × V 라는 것은 출처 517줄에 있다. 이 항목의 (6)은 이것을 모든 부분집합 A, B 로 진술한다. 출처의 기호 𝒯_{X₁} 대신 𝒯₁, 𝒯₂ 로 쓰고, 곱위상에는 𝒯₁ ⊗ 𝒯₂ 라는 기호를 둔다. (1)의 곱집합 등식 가운데 합집합 꼴은 출처가 튜브 보조정리의 증명(compactness.tex:93, W × Y = W × (V_{y_1} ∪ ⋯ ∪ V_{y_n}))에서 쓴다. (3)–(5), (7)–(9)의 증명은 이 항목이 쓴 것이다. 예시 '열린 반평면'의 집합 {(s, t) : s < t} 는 출처 set-theory.tex:183 의 관계 C = {(x, y) | x ≤ y} 와 닮은 대상이다. 확인 질문 'X₁ = {a, b} 에 이산위상, X₂ = {c, d} 에 밀착위상'의 두 위상은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₄ 와 𝒯₁ 과 같은 꼴이다."
  - ref: hammack-book-of-proof
    loc: "8.3절 Example 8.12, p.163 과 그 아래 등식 목록, p.165; 8장 연습문제 7, 16, 17, 18, 25, 29, 30, 31, p.171; 1.2절 연습문제 A.1 (e), A.2 (e), p.11; 1.5절 연습문제 5, 6, 9, 10, p.20"
    checked: original
    note: "(1)의 곱집합 등식과 가까운 것들이 출처에 있다. 반례 'U × V 꼴이 아닌 열린집합'의 두 직사각형의 합집합은 1.5절 연습문제 5, 6(p.20, 두 직사각형 X, Y 의 X ∪ Y 를 그려라)과 닮은 대상이다. Example 8.12 는 A × (B ∩ C) = (A × B) ∩ (A × C) 를 증명하고, p.165 의 목록은 A × (B ∪ C) = (A × B) ∪ (A × C) 를 함께 든다. 연습문제 16, 17 은 이 둘을, 연습문제 18 은 A × (B − C) = (A × B) − (A × C) 를, 연습문제 7 은 B ⊆ C 이면 A × B ⊆ A × C 를, 연습문제 29 는 A ≠ ∅ 일 때 A × B ⊆ A × C 인 것은 정확히 B ⊆ C 일 때임을, 연습문제 31 은 B ≠ ∅ 이고 A × B ⊆ B × C 이면 A ⊆ C 임을 묻고, 연습문제 30 은 (ℤ × ℕ) ∩ (ℕ × ℤ) = ℕ × ℕ 을 묻는다. 연습문제 25 는 (A × B) ∪ (C × D) ⊆ (A ∪ C) × (B ∪ D) 를 묻는데, 반례 'U × V 꼴이 아닌 열린집합'의 W 는 이 포함에서 등호가 성립하지 않는 경우이다. 1.5절 연습문제 10 은 (ℝ − ℤ) × ℕ = (ℝ × ℕ) − (ℤ × ℕ) 가 참인지 묻는데, 이것은 (1)의 (d)에서 B = X₂ 인 경우와 같은 꼴이다. (1)의 (a)는 Example 8.12 를 네 집합으로 넓힌 꼴이고, (c)의 공집합 조건은 연습문제 29, 31 과 같은 발상이다. 연습문제 A.1 (e), A.2 (e)는 ∅ × B 와 A × ∅ 을 원소로 적게 한다((1)의 (b)의 한 방향). 1.5절 연습문제 9 는 (ℝ × ℤ) ∩ (ℤ × ℝ) = ℤ × ℤ 가 참인지 묻는데, 확인 질문 '정수와 실수의 곱'의 집합 ℤ × ℝ 이 거기 나온다."
  - ref: lebl-basic-analysis
    loc: "7.2절 연습문제 7.2.18, p.273; 0.3절 Definition 0.3.10 아래의 예, p.14"
    checked: original
    note: "(5)의 끝 문장의 열린구간의 곱 I × J 는 출처 연습문제 7.2.18 의 'rectangle' R(x, δ) 를 n = 2 로 한 것과 같은 꼴의 집합이다. 출처의 연습문제는 그것들이 ℝⁿ 의 공과 같은 열린집합을 낸다는 것을 묻고, 이 항목은 곱위상의 기저라는 것만 진술한다. 확인 질문 'X₁ = {a, b} 에 이산위상, X₂ = {c, d} 에 밀착위상'의 곱집합 {a, b} × {c, d} 는 출처 Definition 0.3.10 아래의 예(p.14)의 곱집합과 같다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(Y 가 열린 경우, 한 점 공간, A = ∅)에서 거짓이던 일반 문장 4건과 좁은 화면의 식을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 위상의 조건 (i)–(iii)과 열린집합의 국소 판정은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이다. 위상의 기저와 $\mathcal{T}_{\mathcal{B}}$는 [[basis-for-a-topology]]의 것이고, 부분족은 [[basis-generates-by-unions]]의 것이며, "위상 $\mathcal{T}$의 기저"는 [[basis-of-a-given-topology]]의 것이다. 부분공간 위상 $\mathcal{T}|_Y$와 집합족 $\mathcal{A}|_Y$는 [[subspace-topology]]의 것이고, 이산위상과 밀착위상은 [[topology-examples]]의 것이다. 순서쌍과 곱집합은 [[cartesian-product]]의 것이고, 상과 역상은 [[image-and-preimage]]의 것이다. 이 강의는 $A \times A$를 $A^2$으로 쓰지 않는다.

1. (곱집합의 집합 등식) $A$, $B$, $C$, $D$가 집합이면 다음이 성립한다.
   - (a) $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$이다.
   - (b) $A \times B = \emptyset$인 것은 정확히 $A = \emptyset$이거나 $B = \emptyset$일 때이다.
   - (c) $A \subseteq C$이고 $B \subseteq D$이면 $A \times B \subseteq C \times D$이다. 거꾸로 $A \times B \subseteq C \times D$이고 $A \times B \ne \emptyset$이면 $A \subseteq C$이고 $B \subseteq D$이다. $A \times B = \emptyset$이면 뒤의 결론은 성립하지 않을 수 있다. 예컨대 $A = \{1\}$, $B = C = D = \emptyset$이면 $A \times B \subseteq C \times D$이지만 $A \subseteq C$가 아니다.
   - (d) $X_1$, $X_2$가 집합이고 $A \subseteq X_1$, $B \subseteq X_2$이면 $(X_1 \times X_2) - (A \times B) = \bigl((X_1 - A) \times X_2\bigr) \cup \bigl(X_1 \times (X_2 - B)\bigr)$이다.
   - (e) $(A \cup C) \times B = (A \times B) \cup (C \times B)$이고 $A \times (B \cup D) = (A \times B) \cup (A \times D)$이다.

아래에서 $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$는 위상공간이다.

**곱위상.** $\mathcal{T}_1 \times \mathcal{T}_2$의 원소 $(U, V)$마다 집합 $U \times V$가 정해지므로, 식으로 정한 집합족
$$
\mathcal{B} = \{U \times V : (U, V) \in \mathcal{T}_1 \times \mathcal{T}_2\}
$$
를 생각한다. (1)의 (c)에 의해 $U \times V \subseteq X_1 \times X_2$이므로 $\mathcal{B}$는 $X_1 \times X_2$의 집합족이고, 집합 $W$가 $\mathcal{B}$의 원소인 것은 정확히 $W = U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있을 때이다. 아래 (2)에 의해 $\mathcal{B}$는 위상의 기저이고, 그것이 생성한 위상 $\mathcal{T}_{\mathcal{B}}$를 $\mathcal{T}_1$과 $\mathcal{T}_2$의 **곱위상**(product topology)이라 하며 $\mathcal{T}_1 \otimes \mathcal{T}_2$로 쓴다. $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$를 "곱위상을 준 $X_1 \times X_2$"라 한다. $\mathcal{T}_1 \times \mathcal{T}_2$는 순서쌍 $(U, V)$ 전체의 곱집합이고 $X_1 \times X_2$ 위의 위상이 아니므로, 곱위상을 이 기호로 쓰지 않는다. 두 위상공간의 곱집합을 위상을 밝히지 않고 위상공간이라 하면 곱위상을 준 것이다.

**사영.** $X_1 \times X_2$의 원소 $(x, y)$마다 첫째 성분 $x \in X_1$과 둘째 성분 $y \in X_2$가 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)에 의해
$$
\pi_1 = \{((x, y), x) : (x, y) \in X_1 \times X_2\}
$$
과
$$
\pi_2 = \{((x, y), y) : (x, y) \in X_1 \times X_2\}
$$
는 함수 $\pi_1 : X_1 \times X_2 \to X_1$, $\pi_2 : X_1 \times X_2 \to X_2$이고 $\pi_1(x, y) = x$, $\pi_2(x, y) = y$이다($\pi_1((x, y))$를 $\pi_1(x, y)$로 줄여 쓴다). $\pi_1$, $\pi_2$를 **사영**(projection)이라 한다.

다음이 성립한다.

2. (기저) $\mathcal{B}$는 $X_1 \times X_2$ 위의 위상의 기저이고 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이다.
3. (열린집합의 판정) $W \subseteq X_1 \times X_2$에 대하여 다음 셋은 서로 같은 말이다.
   - (a) $W \in \mathcal{T}_1 \otimes \mathcal{T}_2$이다.
   - (b) $W$의 모든 점 $(x, y)$에 대하여 $x \in U$, $y \in V$, $U \times V \subseteq W$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다.
   - (c) $W = \bigcup \mathcal{D}$인 부분족 $\mathcal{D} \subseteq \mathcal{B}$가 있다.
4. (열린집합의 곱과 닫힌집합의 곱) $U \in \mathcal{T}_1$이고 $V \in \mathcal{T}_2$이면 $U \times V$는 곱위상에서 열려 있다. 특히 $U \times X_2$와 $X_1 \times V$는 열려 있다. $F$가 $X_1$의 닫힌집합이고 $G$가 $X_2$의 닫힌집합이면 $F \times G$는 곱위상에서 닫혀 있다.
5. (기저의 곱) $\mathcal{B}_1$이 위상 $\mathcal{T}_1$의 기저이고 $\mathcal{B}_2$가 위상 $\mathcal{T}_2$의 기저이면 $\{B_1 \times B_2 : (B_1, B_2) \in \mathcal{B}_1 \times \mathcal{B}_2\}$는 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이다. 예컨대 $d$가 $\mathbb{R}$의 보통 거리이고 $\mathcal{J}$가 열린구간 전체의 집합족([[standard-topology-on-reals]]의 (5))이면, 열린구간의 곱 전체 $\{I \times J : (I, J) \in \mathcal{J} \times \mathcal{J}\}$는 $\mathbb{R}$의 보통 위상 둘의 곱위상 $\mathcal{T}_d \otimes \mathcal{T}_d$의 기저이다.
6. (사영의 역상과 상) $A \subseteq X_1$, $B \subseteq X_2$라 하자.
   - (a) $\pi_1^{-1}(A) = A \times X_2$, $\pi_2^{-1}(B) = X_1 \times B$이고 $\pi_1^{-1}(A) \cap \pi_2^{-1}(B) = A \times B$이다.
   - (b) $B \ne \emptyset$이면 $\pi_1(A \times B) = A$이고, $A \ne \emptyset$이면 $\pi_2(A \times B) = B$이다. $B = \emptyset$이면 $\pi_1(A \times B) = \emptyset$이고, $A = \emptyset$이면 $\pi_2(A \times B) = \emptyset$이다.
   - (c) $X_2 \ne \emptyset$이면 $\pi_1(X_1 \times X_2) = X_1$, 곧 $\pi_1 : X_1 \times X_2 \to X_1$은 전사이다. $X_1 \ne \emptyset$이면 $\pi_2 : X_1 \times X_2 \to X_2$는 전사이다.
7. (부분공간 위상과 곱위상) $A \subseteq X_1$이고 $B \subseteq X_2$이면 $A \times B$ 위에서 $(\mathcal{T}_1 \otimes \mathcal{T}_2)|_{A \times B} = (\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B)$이다. 곧 곱위상을 준 $X_1 \times X_2$의 부분공간 위상을 $A \times B$에 주는 것과, 부분공간 위상을 준 $A$와 $B$의 곱위상을 주는 것은 같다.
8. (이산위상과 밀착위상) $\mathscr{P}(X_1) \otimes \mathscr{P}(X_2) = \mathscr{P}(X_1 \times X_2)$이고 $\{\emptyset, X_1\} \otimes \{\emptyset, X_2\} = \{\emptyset, X_1 \times X_2\}$이다. 곧 이산위상끼리의 곱위상은 이산위상이고 밀착위상끼리의 곱위상은 밀착위상이다.
9. (공집합과 한 점)
   - (i) $X_1 = \emptyset$이거나 $X_2 = \emptyset$이면 $X_1 \times X_2 = \emptyset$이고 $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{\emptyset\}$이다.
   - (ii) $X_1 = \{p\}$이면 $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{\{p\} \times V : V \in \mathcal{T}_2\}$이다. $X_2 = \{q\}$이면 $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{U \times \{q\} : U \in \mathcal{T}_1\}$이다.
:::

:::english
Topological spaces, open sets, the conditions (i)–(iii) for a topology and the local test for open sets are as in the entry on topological spaces, and closed sets are as in the entry on closed sets. Bases for a topology and $\mathcal{T}_{\mathcal{B}}$, subfamilies, and "a basis for the topology $\mathcal{T}$" are as in the entries on bases. The subspace topology $\mathcal{T}|_Y$ and the family $\mathcal{A}|_Y$ are as in the entry on the subspace topology, and the discrete and indiscrete topologies are as in the entry on examples of topologies. Ordered pairs and Cartesian products are as in the entry on Cartesian products, and images and preimages are as in the entry on images and preimages. This course does not write $A \times A$ as $A^2$.

1. (Set identities for Cartesian products) If $A$, $B$, $C$, $D$ are sets, the following hold.
   - (a) $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$.
   - (b) $A \times B = \emptyset$ exactly when $A = \emptyset$ or $B = \emptyset$.
   - (c) If $A \subseteq C$ and $B \subseteq D$, then $A \times B \subseteq C \times D$. Conversely, if $A \times B \subseteq C \times D$ and $A \times B \ne \emptyset$, then $A \subseteq C$ and $B \subseteq D$. If $A \times B = \emptyset$, the latter conclusion may fail. For example, if $A = \{1\}$ and $B = C = D = \emptyset$, then $A \times B \subseteq C \times D$ but $A$ is not a subset of $C$.
   - (d) If $X_1$, $X_2$ are sets and $A \subseteq X_1$, $B \subseteq X_2$, then $(X_1 \times X_2) - (A \times B) = \bigl((X_1 - A) \times X_2\bigr) \cup \bigl(X_1 \times (X_2 - B)\bigr)$.
   - (e) $(A \cup C) \times B = (A \times B) \cup (C \times B)$ and $A \times (B \cup D) = (A \times B) \cup (A \times D)$.

Throughout the rest, $(X_1, \mathcal{T}_1)$ and $(X_2, \mathcal{T}_2)$ are topological spaces.

**The product topology.** Each element $(U, V)$ of $\mathcal{T}_1 \times \mathcal{T}_2$ determines the set $U \times V$, so we consider the family given by an expression
$$
\mathcal{B} = \{U \times V : (U, V) \in \mathcal{T}_1 \times \mathcal{T}_2\}.
$$
By (1)(c), $U \times V \subseteq X_1 \times X_2$, so $\mathcal{B}$ is a family of subsets of $X_1 \times X_2$, and a set $W$ is a member of $\mathcal{B}$ exactly when there are $U \in \mathcal{T}_1$ and $V \in \mathcal{T}_2$ with $W = U \times V$. By (2) below, $\mathcal{B}$ is a basis for a topology; the topology $\mathcal{T}_{\mathcal{B}}$ it generates is called the **product topology** of $\mathcal{T}_1$ and $\mathcal{T}_2$ and is written $\mathcal{T}_1 \otimes \mathcal{T}_2$. We call $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$ "$X_1 \times X_2$ with the product topology". Since $\mathcal{T}_1 \times \mathcal{T}_2$ is the Cartesian product consisting of all ordered pairs $(U, V)$ and is not a topology on $X_1 \times X_2$, we do not use that symbol for the product topology. When the Cartesian product of two topological spaces is called a topological space without naming a topology, it is given the product topology.

**Projections.** Each element $(x, y)$ of $X_1 \times X_2$ determines its first component $x \in X_1$ and its second component $y \in X_2$, so by part (1) (functions given by values) of the recursion theorem,
$$
\pi_1 = \{((x, y), x) : (x, y) \in X_1 \times X_2\}
$$
and
$$
\pi_2 = \{((x, y), y) : (x, y) \in X_1 \times X_2\}
$$
are functions $\pi_1 : X_1 \times X_2 \to X_1$ and $\pi_2 : X_1 \times X_2 \to X_2$ with $\pi_1(x, y) = x$ and $\pi_2(x, y) = y$ (we abbreviate $\pi_1((x, y))$ to $\pi_1(x, y)$). The maps $\pi_1$, $\pi_2$ are called the **projections**.

The following hold.

2. (Basis) $\mathcal{B}$ is a basis for a topology on $X_1 \times X_2$ and a basis for the topology $\mathcal{T}_1 \otimes \mathcal{T}_2$.
3. (Test for open sets) For $W \subseteq X_1 \times X_2$ the following three statements are equivalent.
   - (a) $W \in \mathcal{T}_1 \otimes \mathcal{T}_2$.
   - (b) For every point $(x, y)$ of $W$ there are $U \in \mathcal{T}_1$ and $V \in \mathcal{T}_2$ with $x \in U$, $y \in V$ and $U \times V \subseteq W$.
   - (c) There is a subfamily $\mathcal{D} \subseteq \mathcal{B}$ with $W = \bigcup \mathcal{D}$.
4. (Products of open sets and of closed sets) If $U \in \mathcal{T}_1$ and $V \in \mathcal{T}_2$, then $U \times V$ is open in the product topology. In particular $U \times X_2$ and $X_1 \times V$ are open. If $F$ is a closed set of $X_1$ and $G$ is a closed set of $X_2$, then $F \times G$ is closed in the product topology.
5. (Products of bases) If $\mathcal{B}_1$ is a basis for the topology $\mathcal{T}_1$ and $\mathcal{B}_2$ is a basis for the topology $\mathcal{T}_2$, then $\{B_1 \times B_2 : (B_1, B_2) \in \mathcal{B}_1 \times \mathcal{B}_2\}$ is a basis for the topology $\mathcal{T}_1 \otimes \mathcal{T}_2$. For example, if $d$ is the standard metric on $\mathbb{R}$ and $\mathcal{J}$ is the family of all open intervals, then the family $\{I \times J : (I, J) \in \mathcal{J} \times \mathcal{J}\}$ of all products of open intervals is a basis for the product topology $\mathcal{T}_d \otimes \mathcal{T}_d$ of two copies of the standard topology on $\mathbb{R}$.
6. (Preimages and images under the projections) Let $A \subseteq X_1$ and $B \subseteq X_2$.
   - (a) $\pi_1^{-1}(A) = A \times X_2$, $\pi_2^{-1}(B) = X_1 \times B$, and $\pi_1^{-1}(A) \cap \pi_2^{-1}(B) = A \times B$.
   - (b) If $B \ne \emptyset$, then $\pi_1(A \times B) = A$, and if $A \ne \emptyset$, then $\pi_2(A \times B) = B$. If $B = \emptyset$, then $\pi_1(A \times B) = \emptyset$, and if $A = \emptyset$, then $\pi_2(A \times B) = \emptyset$.
   - (c) If $X_2 \ne \emptyset$, then $\pi_1(X_1 \times X_2) = X_1$, that is, $\pi_1 : X_1 \times X_2 \to X_1$ is surjective. If $X_1 \ne \emptyset$, then $\pi_2 : X_1 \times X_2 \to X_2$ is surjective.
7. (Subspace topology and product topology) If $A \subseteq X_1$ and $B \subseteq X_2$, then on $A \times B$ we have $(\mathcal{T}_1 \otimes \mathcal{T}_2)|_{A \times B} = (\mathcal{T}_1|_A) \otimes (\mathcal{T}_2|_B)$. That is, giving $A \times B$ the subspace topology of $X_1 \times X_2$ with the product topology is the same as giving it the product topology of $A$ and $B$ with their subspace topologies.
8. (Discrete and indiscrete topologies) $\mathscr{P}(X_1) \otimes \mathscr{P}(X_2) = \mathscr{P}(X_1 \times X_2)$ and $\{\emptyset, X_1\} \otimes \{\emptyset, X_2\} = \{\emptyset, X_1 \times X_2\}$. That is, the product of discrete topologies is discrete and the product of indiscrete topologies is indiscrete.
9. (The empty set and one point)
   - (i) If $X_1 = \emptyset$ or $X_2 = \emptyset$, then $X_1 \times X_2 = \emptyset$ and $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{\emptyset\}$.
   - (ii) If $X_1 = \{p\}$, then $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{\{p\} \times V : V \in \mathcal{T}_2\}$. If $X_2 = \{q\}$, then $\mathcal{T}_1 \otimes \mathcal{T}_2 = \{U \times \{q\} : U \in \mathcal{T}_1\}$.
:::

## 직관

평면 위의 점 $(x, y)$를 두 수직선의 점 $x$와 $y$를 짝지은 것으로 보면, 점 $(x, y)$ 둘레의 "작은 창"으로 자연스러운 것 하나는 가로 방향의 열린집합 $U \ni x$와 세로 방향의 열린집합 $V \ni y$로 만든 직사각형 $U \times V$입니다. 곱위상은 이런 창 전체를 위상의 기저로 삼은 위상입니다. 비유의 "가로 방향"과 "세로 방향"은 두 공간 $X_1$, $X_2$이고, "창"은 $\mathcal{B}$의 원소 $U \times V$이며, "그 점 둘레에 창 하나가 $W$ 안에 통째로 들어간다"가 (3)의 (b)입니다.

창들의 모임 $\mathcal{B}$ 자체는 위상이 아닐 수 있습니다. 예컨대 $\mathbb{R} \times \mathbb{R}$에서 두 창을 합친 L자 모양은 직사각형이 아니지만 곱위상에서 열려 있어야 합니다(아래 반례). 반면 두 창의 교집합은 다시 창입니다((1)의 (a)). 그래서 $\mathcal{B}$는 위상의 기저의 교집합 조건을 쉽게 만족하고, 곱위상은 창들의 합집합 전체가 됩니다.

곱집합의 등식에서 공집합은 따로 조심해야 합니다. 한쪽이 비어 있으면 곱 전체가 비어 버립니다((1)의 (b)). 그래서 $B = \emptyset$이면 $A \times B \subseteq C \times D$는 $A$, $C$, $D$와 상관없이 참이 되어 $A \subseteq C$가 따라 나오지 않을 수 있고, 사영의 상 $\pi_1(A \times B)$도 $A$와 상관없이 $\emptyset$이 됩니다. (1)의 (c)와 (6)의 (b), (c)가 공집합이 아니라는 가정을 다는 까닭입니다.

## 성질의 증명

:::proof
집합족의 성질 (1)–(10)은 [[family-of-sets]]의 것이다. [[cartesian-product]]에 의해 대상 $u$가 $A \times B$의 원소인 것은 정확히 $u = (a, b)$인 $a \in A$, $b \in B$가 있을 때이고, 대상 $x$, $y$에 대하여 $(x, y) \in A \times B$인 것은 정확히 $x \in A$이고 $y \in B$일 때이다. 두 순서쌍이 같은 것은 성분이 각각 같을 때이다.

**(1).** (a) $(x, y) \in (A \times B) \cap (C \times D)$인 것은 정확히 $x \in A$, $y \in B$, $x \in C$, $y \in D$일 때이고, 이것은 정확히 $x \in A \cap C$이고 $y \in B \cap D$일 때, 곧 $(x, y) \in (A \cap C) \times (B \cap D)$일 때이다. 두 집합의 원소는 모두 순서쌍이므로 두 집합은 같다.

(b) $A = \emptyset$이면 $a \in A$인 $a$가 없으므로 $A \times B$의 원소가 없고 $A \times B = \emptyset$이다. $B = \emptyset$이어도 같다. 거꾸로 $A \ne \emptyset$이고 $B \ne \emptyset$이면 $a \in A$와 $b \in B$가 있고 $(a, b) \in A \times B$이므로 $A \times B \ne \emptyset$이다.

(c) $A \subseteq C$, $B \subseteq D$이고 $u \in A \times B$이면 $u = (a, b)$인 $a \in A$, $b \in B$가 있고 $a \in C$, $b \in D$이므로 $u \in C \times D$이다. 거꾸로 $A \times B \subseteq C \times D$이고 $A \times B \ne \emptyset$이라 하자. (b)에 의해 $A \ne \emptyset$, $B \ne \emptyset$이다. $b_0 \in B$를 하나 잡는다. $a \in A$이면 $(a, b_0) \in A \times B \subseteq C \times D$이므로 $a \in C$이다. 따라서 $A \subseteq C$이다. 같은 방식으로 $a_0 \in A$를 하나 잡으면, $b \in B$에서 $(a_0, b) \in C \times D$이므로 $b \in D$이고 $B \subseteq D$이다. 진술의 예에서는 (b)에 의해 $A \times B = \emptyset$이고 [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이므로 $\emptyset \subseteq C \times D$이지만, $1 \in A$이고 $1 \notin C = \emptyset$이다.

(d) $u \in (X_1 \times X_2) - (A \times B)$라 하자. $u = (x, y)$인 $x \in X_1$, $y \in X_2$가 있고 $(x, y) \notin A \times B$이므로 $x \notin A$이거나 $y \notin B$이다. $x \notin A$이면 $x \in X_1 - A$이므로 $u \in (X_1 - A) \times X_2$이고, $y \notin B$이면 $u \in X_1 \times (X_2 - B)$이다. 거꾸로 $u \in (X_1 - A) \times X_2$이면 $u = (x, y)$, $x \in X_1$, $x \notin A$, $y \in X_2$이므로 $u \in X_1 \times X_2$이고 $u \notin A \times B$이다. $u \in X_1 \times (X_2 - B)$이면 같은 방식으로 $u = (x, y)$, $x \in X_1$, $y \in X_2$, $y \notin B$이므로 $u \in X_1 \times X_2$이고 $u \notin A \times B$이다.

(e) $(x, y) \in (A \cup C) \times B$인 것은 정확히 "$x \in A$ 또는 $x \in C$"이고 $y \in B$일 때이고, 이것은 정확히 "$x \in A$이고 $y \in B$" 또는 "$x \in C$이고 $y \in B$"일 때, 곧 $(x, y) \in (A \times B) \cup (C \times B)$일 때이다. 마찬가지로 $(x, y) \in A \times (B \cup D)$인 것은 정확히 $x \in A$이고 "$y \in B$ 또는 $y \in D$"일 때이고, 이것은 정확히 $(x, y) \in A \times B$이거나 $(x, y) \in A \times D$일 때이다. 양쪽 집합의 원소는 모두 순서쌍이므로 등식이 성립한다.

**(2).** 덮기 조건: $(x, y) \in X_1 \times X_2$이면 위상의 조건 (i)에 의해 $X_1 \in \mathcal{T}_1$, $X_2 \in \mathcal{T}_2$이므로 $X_1 \times X_2 \in \mathcal{B}$이고 $(x, y) \in X_1 \times X_2$이다. 교집합 조건: $W_1, W_2 \in \mathcal{B}$라 하면 $W_1 = U_1 \times V_1$, $W_2 = U_2 \times V_2$인 $U_1, U_2 \in \mathcal{T}_1$, $V_1, V_2 \in \mathcal{T}_2$가 있다. (1)의 (a)에 의해 $W_1 \cap W_2 = (U_1 \cap U_2) \times (V_1 \cap V_2)$이고, 위상의 조건 (iii)에 의해 $U_1 \cap U_2 \in \mathcal{T}_1$, $V_1 \cap V_2 \in \mathcal{T}_2$이므로 $W_1 \cap W_2 \in \mathcal{B}$이다. $(x, y) \in W_1 \cap W_2$이면 $W_3 = W_1 \cap W_2$가 조건을 만족한다. 따라서 $\mathcal{B}$는 위상의 기저이고, [[basis-for-a-topology]]의 (1)에 의해 $\mathcal{T}_{\mathcal{B}} = \mathcal{T}_1 \otimes \mathcal{T}_2$는 위상이다. $\mathcal{B}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{B}} = \mathcal{T}_1 \otimes \mathcal{T}_2$이므로, [[basis-of-a-given-topology]]의 정의에 의해 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이다.

**(3).** (a)와 (b): [[basis-for-a-topology]]의 $\mathcal{T}_{\mathcal{B}}$의 정의에 의해 $W \in \mathcal{T}_{\mathcal{B}}$인 것은 정확히 $W$의 모든 점 $w$에 대하여 $w \in B$이고 $B \subseteq W$인 $B \in \mathcal{B}$가 있을 때이다. $B \in \mathcal{B}$인 것은 $B = U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있을 때이고, $w = (x, y)$에 대하여 $w \in U \times V$인 것은 정확히 $x \in U$이고 $y \in V$일 때이다. 따라서 (a)와 (b)는 같은 말이다. (a)와 (c): [[basis-generates-by-unions]]의 (1)이다.

**(4).** $U \times V \in \mathcal{B}$이므로 [[basis-for-a-topology]]의 (2)에 의해 $U \times V \in \mathcal{T}_1 \otimes \mathcal{T}_2$이다. 위상의 조건 (i)에 의해 $X_2 \in \mathcal{T}_2$, $X_1 \in \mathcal{T}_1$이므로 $U \times X_2$와 $X_1 \times V$도 그렇다. $F$, $G$가 닫힌집합이면 $X_1 - F \in \mathcal{T}_1$이고 $X_2 - G \in \mathcal{T}_2$이다. (1)의 (d)에 의해 $(X_1 \times X_2) - (F \times G)$는 $(X_1 - F) \times X_2$와 $X_1 \times (X_2 - G)$의 합집합이고, 앞에서 본 것처럼 이 두 집합은 곱위상에서 열려 있으므로 [[topological-space]]의 (1)에 의해 합집합도 열려 있다. $F \times G \subseteq X_1 \times X_2$이므로((1)의 (c)) [[closed-set]]의 정의에 의해 $F \times G$는 곱위상에서 닫혀 있다.

**(5).** $\mathcal{B}' = \{B_1 \times B_2 : (B_1, B_2) \in \mathcal{B}_1 \times \mathcal{B}_2\}$라 하자. 이것은 식으로 정한 $X_1 \times X_2$의 집합족이다. [[basis-of-a-given-topology]]의 (2)에 의해 $\mathcal{B}_1 \subseteq \mathcal{T}_1$, $\mathcal{B}_2 \subseteq \mathcal{T}_2$이고, $i = 1, 2$ 각각에 대하여 모든 $U \in \mathcal{T}_i$와 모든 $x \in U$에 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}_i$가 있다. [[basis-of-a-given-topology]]의 (1)(판정)을 위상공간 $(X_1 \times X_2, \mathcal{T}_1 \otimes \mathcal{T}_2)$와 $\mathcal{B}'$에 쓴다.
첫째 조건: $B_1 \times B_2 \in \mathcal{B}'$이면 $B_1 \in \mathcal{T}_1$, $B_2 \in \mathcal{T}_2$이므로 (4)에 의해 $B_1 \times B_2 \in \mathcal{T}_1 \otimes \mathcal{T}_2$이다.
둘째 조건: $W \in \mathcal{T}_1 \otimes \mathcal{T}_2$이고 $(x, y) \in W$라 하자. (3)의 (b)에 의해 $x \in U$, $y \in V$, $U \times V \subseteq W$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. 위의 사실에 의해 $x \in B_1$, $B_1 \subseteq U$인 $B_1 \in \mathcal{B}_1$과 $y \in B_2$, $B_2 \subseteq V$인 $B_2 \in \mathcal{B}_2$가 있다. $(x, y) \in B_1 \times B_2$이고, (1)의 (c)에 의해 $B_1 \times B_2 \subseteq U \times V \subseteq W$이다.
따라서 $\mathcal{B}'$은 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이다. 끝 문장: [[standard-topology-on-reals]]의 (5)에 의해 $\mathcal{J}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$이므로, [[basis-of-a-given-topology]]의 정의에 의해 위상 $\mathcal{T}_d$의 기저이다. $\mathcal{B}_1 = \mathcal{B}_2 = \mathcal{J}$로 두면 된다.

**(6).** 사영이 함수라는 것: $X_1 \times X_2$의 원소 $u$는 $u = (x, y)$인 $x \in X_1$, $y \in X_2$가 있는 순서쌍이고, 순서쌍의 같음에 의해 이런 $x$와 $y$는 $u$에 대하여 하나씩으로 정해진다. 따라서 첫째 성분 $x$는 $u$에 대한 식으로 정해진 $X_1$의 원소이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\pi_1$은 $X_1 \times X_2$에서 $X_1$로의 함수이며 $\pi_1(x, y) = x$이다. $\pi_2$도 같은 이유로 함수이고 $\pi_2(x, y) = y$이다.

(a) [[image-and-preimage]]의 (2)에 의해 $u \in X_1 \times X_2$가 $\pi_1^{-1}(A)$에 속하는 것은 정확히 $\pi_1(u) \in A$일 때이다. $u = (x, y)$이면 $\pi_1(u) = x$이므로 이것은 정확히 $x \in A$일 때이고, $y \in X_2$이므로 정확히 $u \in A \times X_2$일 때이다. $A \times X_2 \subseteq X_1 \times X_2$이므로((1)의 (c)) $\pi_1^{-1}(A) = A \times X_2$이다. 같은 방식으로 $u = (x, y)$가 $\pi_2^{-1}(B)$에 속하는 것은 정확히 $y \in B$일 때, 곧 $u \in X_1 \times B$일 때이므로 $\pi_2^{-1}(B) = X_1 \times B$이다. (1)의 (a)에 의해 $(A \times X_2) \cap (X_1 \times B) = (A \cap X_1) \times (X_2 \cap B) = A \times B$이다($A \subseteq X_1$, $B \subseteq X_2$).

(b) [[image-and-preimage]]의 (1)에 의해 $x \in X_1$이 $\pi_1(A \times B)$에 속하는 것은 정확히 $\pi_1(u) = x$인 $u \in A \times B$가 있을 때이다. 그런 $u = (a, b)$가 있으면 $x = \pi_1(u) = a \in A$이므로 $\pi_1(A \times B) \subseteq A$이다. $B \ne \emptyset$이라 하고 $b_0 \in B$를 하나 잡는다. $x \in A$이면 $(x, b_0) \in A \times B$이고 $\pi_1(x, b_0) = x$이므로 $x \in \pi_1(A \times B)$이다. 따라서 $\pi_1(A \times B) = A$이다. $A \ne \emptyset$이면 $a_0 \in A$를 하나 잡아 같은 방식으로 $\pi_2(A \times B) \subseteq B$와 $B \subseteq \pi_2(A \times B)$($y \in B$이면 $\pi_2(a_0, y) = y$)를 얻는다. $B = \emptyset$이거나 $A = \emptyset$이면 (1)의 (b)에 의해 $A \times B = \emptyset$이고, $u \in A \times B$가 없으므로 상은 $\emptyset$이다.

(c) (b)에서 $A = X_1$, $B = X_2$로 둔다. $X_2 \ne \emptyset$이면 $\pi_1(X_1 \times X_2) = X_1$이므로, [[image-and-preimage]]의 (1)에 의해 모든 $x \in X_1$에 대하여 $\pi_1(u) = x$인 $u \in X_1 \times X_2$가 있다. [[injective-surjective-bijective|전사]]의 정의에 의해 $\pi_1 : X_1 \times X_2 \to X_1$은 전사이다. $X_1 \ne \emptyset$이면 같은 방식으로 $\pi_2 : X_1 \times X_2 \to X_2$는 전사이다.

**(7).** (1)의 (c)에 의해 $A \times B \subseteq X_1 \times X_2$이므로 좌변은 [[subspace-topology]]의 (1)에 의해 $A \times B$ 위의 위상이다. 같은 항목의 (1)에 의해 $\mathcal{S}_1 = \mathcal{T}_1|_A$와 $\mathcal{S}_2 = \mathcal{T}_2|_B$에 대하여 $(A, \mathcal{S}_1)$과 $(B, \mathcal{S}_2)$는 위상공간이므로, 우변은 이 두 공간의 곱위상, 곧 식으로 정한 집합족 $\mathcal{B}_{A, B} = \{U' \times V' : (U', V') \in \mathcal{S}_1 \times \mathcal{S}_2\}$가 생성한 위상 $\mathcal{T}_{\mathcal{B}_{A, B}}$이다. 한편 (2)에 의해 $\mathcal{B}$는 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이므로, [[subspace-topology]]의 (5)에 의해 $\mathcal{B}|_{A \times B}$는 위상 $(\mathcal{T}_1 \otimes \mathcal{T}_2)|_{A \times B}$의 기저이고, 곧 $\mathcal{T}_{\mathcal{B}|_{A \times B}} = (\mathcal{T}_1 \otimes \mathcal{T}_2)|_{A \times B}$이다. 따라서 두 집합족 $\mathcal{B}|_{A \times B}$와 $\mathcal{B}_{A, B}$가 같음을 보이면 된다.
$C \in \mathcal{B}|_{A \times B}$이면 $C = W \cap (A \times B)$인 $W \in \mathcal{B}$가 있고, $W = U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. (1)의 (a)에 의해 $C = (U \cap A) \times (V \cap B)$이고, $U \cap A \in \mathcal{T}_1|_A$, $V \cap B \in \mathcal{T}_2|_B$이므로 $C \in \mathcal{B}_{A, B}$이다. 거꾸로 $C \in \mathcal{B}_{A, B}$이면 $C = U' \times V'$인 $U' \in \mathcal{T}_1|_A$, $V' \in \mathcal{T}_2|_B$가 있고, $U' = U \cap A$, $V' = V \cap B$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. (1)의 (a)에 의해 $C = (U \times V) \cap (A \times B)$이고 $U \times V \in \mathcal{B}$이므로 $C \in \mathcal{B}|_{A \times B}$이다.

**(8).** 이산위상: $\mathcal{T}_1 \otimes \mathcal{T}_2$는 $X_1 \times X_2$ 위의 위상이므로 $\mathscr{P}(X_1 \times X_2)$에 포함된다. 거꾸로 $W \subseteq X_1 \times X_2$이고 $(x, y) \in W$이면 $\{x\} \in \mathscr{P}(X_1)$, $\{y\} \in \mathscr{P}(X_2)$이고 $x \in \{x\}$, $y \in \{y\}$이다. $\{x\} \times \{y\}$의 원소는 $(s, t)$, $s = x$, $t = y$인 것뿐이므로 $\{x\} \times \{y\} = \{(x, y)\} \subseteq W$이다. (3)의 (b)에 의해 $W \in \mathscr{P}(X_1) \otimes \mathscr{P}(X_2)$이다.
밀착위상: $\mathcal{T}_1 = \{\emptyset, X_1\}$, $\mathcal{T}_2 = \{\emptyset, X_2\}$라 하자. 위상의 조건 (i)에 의해 $\emptyset$과 $X_1 \times X_2$는 곱위상의 원소이다. 거꾸로 $W$가 곱위상의 원소이고 $W \ne \emptyset$이라 하자. $(x, y) \in W$를 하나 잡으면 (3)의 (b)에 의해 $x \in U$, $y \in V$, $U \times V \subseteq W$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있다. $U$와 $V$는 공집합이 아니므로 $U = X_1$, $V = X_2$이고, $X_1 \times X_2 \subseteq W \subseteq X_1 \times X_2$이므로 $W = X_1 \times X_2$이다.

**(9).** (i) (1)의 (b)에 의해 $X_1 \times X_2 = \emptyset$이다. [[topological-space]]의 공집합 단락에 의해 $\emptyset$ 위의 위상은 $\{\emptyset\}$ 하나뿐이고, (2)에 의해 곱위상은 $\emptyset$ 위의 위상이므로 $\{\emptyset\}$이다.

(ii) $X_1 = \{p\}$라 하자. $\mathcal{R} = \{\{p\} \times V : V \in \mathcal{T}_2\}$로 둔다. 위상의 조건 (i)에 의해 $\{p\} = X_1 \in \mathcal{T}_1$이므로, $V \in \mathcal{T}_2$이면 (4)에 의해 $\{p\} \times V$는 곱위상의 원소이다. 곧 $\mathcal{R} \subseteq \mathcal{T}_1 \otimes \mathcal{T}_2$이다. 거꾸로 $W \in \mathcal{T}_1 \otimes \mathcal{T}_2$라 하고 $V = \pi_2(W)$로 둔다. $W = \{p\} \times V$임을 보인다. $u \in W$이면 $u = (x, y)$인 $x \in X_1 = \{p\}$, $y \in X_2$가 있으므로 $x = p$이고 $y = \pi_2(u) \in \pi_2(W) = V$이다. 거꾸로 $y \in V$이면 [[image-and-preimage]]의 (1)에 의해 $\pi_2(u) = y$인 $u \in W$가 있고, $u = (x, y')$인 $x \in \{p\}$, $y' \in X_2$에 대하여 $x = p$, $y' = \pi_2(u) = y$이므로 $(p, y) = u \in W$이다. 이제 $V \in \mathcal{T}_2$임을 [[topological-space]]의 (3)의 (b)로 보인다. $y \in V$이면 방금 본 것처럼 $(p, y) \in W$이고, (3)의 (b)에 의해 $p \in U$, $y \in V'$, $U \times V' \subseteq W$인 $U \in \mathcal{T}_1$, $V' \in \mathcal{T}_2$가 있다. $y' \in V'$이면 $(p, y') \in U \times V' \subseteq W$이므로 $y' = \pi_2(p, y') \in V$이다. 곧 $y \in V'$이고 $V' \subseteq V$이므로 $V$는 열려 있다. 따라서 $W \in \mathcal{R}$이다.
$X_2 = \{q\}$이면 두 성분의 자리를 바꾸어 같은 일을 한다. $\{q\} = X_2 \in \mathcal{T}_2$이므로 $U \in \mathcal{T}_1$이면 (4)에 의해 $U \times \{q\}$는 곱위상의 원소이다. 거꾸로 $W \in \mathcal{T}_1 \otimes \mathcal{T}_2$이고 $U = \pi_1(W)$이면, $u = (x, y) \in W$에서 $y = q$이고 $x = \pi_1(u) \in U$이며, $x \in U$이면 $\pi_1(u) = x$인 $u = (x', y') \in W$에서 $x' = x$, $y' = q$이므로 $(x, q) \in W$이다. 따라서 $W = U \times \{q\}$이다. $x \in U$이면 $(x, q) \in W$이므로 (3)의 (b)에 의해 $x \in U'$, $q \in V$, $U' \times V \subseteq W$인 $U' \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있고, $x' \in U'$이면 $(x', q) \in U' \times V \subseteq W$이므로 $x' = \pi_1(x', q) \in U$이다. [[topological-space]]의 (3)의 (b)에 의해 $U \in \mathcal{T}_1$이다.
:::

## 예시와 반례

:::example[열린 반평면]
$d$를 $\mathbb{R}$의 보통 거리라 하고 $\mathbb{R} \times \mathbb{R}$에 곱위상 $\mathcal{T}_d \otimes \mathcal{T}_d$를 줍니다. $W = \{(s, t) \in \mathbb{R} \times \mathbb{R} : s < t\}$가 열려 있음을 (3)의 (b)로 보입니다. $(x, y) \in W$, 곧 $x < y$라 하고 $m = \tfrac{x + y}{2}$로 두면 [[order-properties-of-reals]]의 (8)에 의해 $x < m < y$입니다. [[real-number-arithmetic|실수의 계산 법칙]]에 의해 $x - (x - 1) = 1$이고 $(y + 1) - y = 1$이며 $0 < 1$이므로, [[order-properties-of-reals]]의 (3)의 (i)에 의해 $x - 1 < x$이고 $y < y + 1$입니다. (W2)([[real-order-axioms]])에 의해 $x - 1 < m$이고 $m < y + 1$이므로 열린구간 $I = (x - 1, m)$과 $J = (m, y + 1)$이 정해지고([[interval]]의 기호), $x \in I$, $y \in J$입니다.

[[open-and-closed-sets-of-reals]]의 (1)과 [[topology-examples]]의 (4)에 의해 $I$와 $J$는 $\mathcal{T}_d$의 원소입니다. $(s, t) \in I \times J$이면 $s < m$이고 $m < t$이므로 (W2)([[real-order-axioms]])에 의해 $s < t$, 곧 $(s, t) \in W$입니다. 따라서 $I \times J \subseteq W$이고 $W$는 곱위상에서 열려 있습니다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $(\mathbb{R} \times \mathbb{R}) - W = \{(s, t) \in \mathbb{R} \times \mathbb{R} : t \le s\}$이고, [[closed-set]]의 (5)에 의해 이 집합은 닫혀 있습니다.
:::

:::counterexample[U × V 꼴이 아닌 열린집합]
같은 곱위상에서 열린구간 $I_1 = (0, 2)$, $J_1 = (0, 1)$, $I_2 = (0, 1)$, $J_2 = (0, 2)$를 잡고 $W = (I_1 \times J_1) \cup (I_2 \times J_2)$라 합시다. (4)와 [[topological-space]]의 (1)에 의해 $W$는 곱위상에서 열려 있습니다. 그러나 $W = A \times B$인 집합 $A, B \subseteq \mathbb{R}$은 없습니다.

그런 $A$, $B$가 있다고 해 봅시다. [[order-properties-of-reals]]의 (8)을 $0 < 1$과 $1 < 2$에 쓰면 $0 < \tfrac{1}{2} < 1$이고 $1 < \tfrac{3}{2} < 2$입니다. 또 $0 < 1 < \tfrac{3}{2}$이므로 (W2)([[real-order-axioms]])에 의해 $0 < \tfrac{3}{2}$입니다. 따라서 $(\tfrac{3}{2}, \tfrac{1}{2}) \in I_1 \times J_1 \subseteq W = A \times B$이므로 $\tfrac{3}{2} \in A$이고, $(\tfrac{1}{2}, \tfrac{3}{2}) \in I_2 \times J_2 \subseteq W$이므로 $\tfrac{3}{2} \in B$입니다. 그러면 $(\tfrac{3}{2}, \tfrac{3}{2}) \in A \times B = W$이어야 합니다. 하지만 $1 < \tfrac{3}{2}$이므로 [[order-properties-of-reals]]의 (1)의 (i)에 의해 $\tfrac{3}{2} < 1$이 아니어서 $\tfrac{3}{2} \notin J_1$이고 $\tfrac{3}{2} \notin I_2$여서 $(\tfrac{3}{2}, \tfrac{3}{2})$는 $I_1 \times J_1$에도 $I_2 \times J_2$에도 속하지 않습니다. 모순입니다. 따라서 $W$는 $\mathcal{B}$의 원소가 아니고, 이 경우 $\mathcal{B}$는 곱위상 전체가 아닙니다.
:::

## 확인 질문

:::check[$a \ne b$, $c \ne d$이고 $X_1 = \{a, b\}$에 이산위상, $X_2 = \{c, d\}$에 밀착위상을 주면 곱위상은 무엇인가?]
$\mathcal{T}_1 = \{\emptyset, \{a\}, \{b\}, X_1\}$, $\mathcal{T}_2 = \{\emptyset, X_2\}$입니다. $\mathcal{B}$의 원소 $U \times V$는 $V = \emptyset$이거나 $U = \emptyset$이면 (1)의 (b)에 의해 $\emptyset$이므로, $\mathcal{B} = \{\emptyset, \{a\} \times X_2, \{b\} \times X_2, X_1 \times X_2\}$입니다. (3)의 (c)에 의해 곱위상은 이것들의 부분족의 합집합 전체이고, (1)의 (e)에 의해 $(\{a\} \times X_2) \cup (\{b\} \times X_2) = X_1 \times X_2$이므로 어떤 합집합도 이 네 집합 가운데 하나입니다. 따라서 곱위상은 $\{\emptyset, \{a\} \times X_2, \{b\} \times X_2, X_1 \times X_2\}$이고, $\{(a, c)\}$는 열려 있지 않으므로 이산위상이 아니며, $\{a\} \times X_2$가 열려 있으므로 밀착위상도 아닙니다.
:::

:::check[$\mathbb{R}$의 보통 위상 둘의 곱위상에서 $\mathbb{Z} \times \mathbb{R}$은 닫혀 있는가?]
닫혀 있습니다. [[open-and-closed-sets-of-reals]]의 (5)와 [[closed-set]]의 (6)에 의해 $\mathbb{Z}$는 보통 위상에서 닫혀 있고, [[closed-set]]의 (1)에 의해 $\mathbb{R}$도 닫혀 있습니다. (4)에 의해 닫힌집합의 곱 $\mathbb{Z} \times \mathbb{R}$은 곱위상에서 닫혀 있습니다.
:::
