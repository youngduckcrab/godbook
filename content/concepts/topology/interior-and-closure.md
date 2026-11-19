---
title: 내부와 폐포
title_en: Interior and Closure
aliases: [내부, interior, 폐포, closure, Int, 가장 큰 열린집합, 가장 작은 닫힌집합]
kind: definition
field: topology
msc: ["54A05"]
level: undergrad
summary: 위상공간의 부분집합 A 에 포함되는 열린집합 전체의 합집합을 A 의 내부, A 를 포함하는 닫힌집합 전체의 교집합을 A 의 폐포라 한다. 내부는 A 안의 가장 큰 열린집합이고 폐포는 A 를 포함하는 가장 작은 닫힌집합이며, 포함 관계를 지키고, 두 번 취해도 같고, 여집합으로 서로 바뀐다는 것을 증명한다.
requires: [set, subset, set-operations, power-set, empty-set-is-subset, family-of-sets, topological-space, topology-examples, closed-set, neighborhood, metric-space-examples, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, interval, rational-and-irrational-numbers, real-number-arithmetic, order-properties-of-reals, absolute-value]
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Definition (i)(ii)와 그 뒤 본문, content/topological-spaces.tex:538–558"
    checked: original
    note: "출처의 정의(541–542)는 Y 의 내부를 'Y 안의 열린 부분집합 전체의 합집합'(기호 Y 위에 동그라미, 또는 Int Y), 폐포를 'Y 를 포함하는 닫힌 부분집합 전체의 교집합'(기호 Y 위에 줄)으로 둔다. 이 항목은 두 집합족을 조건으로 정한 X 의 집합족으로 적고, 교집합을 X 의 집합족으로 본 것이라고 밝혔다. 내부의 기호는 Int A 만 쓴다. 출처는 정의 뒤 본문(547–551)에서 Int Y 는 열린집합들의 합집합이므로 열려 있고 폐포는 Proposition prop-closed 에 의해 닫혀 있으며 Int Y ⊂ Y ⊂ 폐포라고 적고, Y 가 열린 것은 정확히 Y = Int Y 일 때이고 닫힌 것은 정확히 Y 가 그 폐포와 같을 때라는 것이 정의에서 바로 나오며, Int Y 는 Y 에 포함되는 가장 큰 열린 부분집합이고 폐포는 Y 를 포함하는 가장 작은 닫힌 부분집합이라는 것도 정의에서 나온다고 적는다. 이것이 이 항목의 (1), (3), (2)이다. (6)은 출처의 식 int-versus-closure(554–557, Int Y = X ∖ (X ∖ Y)의 폐포, Y 의 폐포 = X ∖ Int(X ∖ Y))와 같은 내용이고, 출처는 그 근거로 'Y 에 포함되는 열린집합의 여집합은 Yᶜ 를 포함하는 닫힌집합이고, Y 를 포함하는 닫힌집합의 여집합은 Yᶜ 에 포함되는 열린집합'이라는 문장(553)과 '드 모르간 법칙으로 더 정확히 보일 수 있다'(558)를 적는다. 이 항목은 (2)를 두 번 써서 양쪽 포함으로 증명한다. 예시 '세 점 위의 위상에서 내부와 폐포'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 그 예시에서 한 점 집합의 폐포가 그 집합보다 커지는 것은 출처 연습문제 2.3 (b)(exercises.tex:77–79, 기저 {(a, ∞)} 가 생성한 ℝ 위의 위상에서 {x₀} 의 폐포)와 같은 종류의 물음이다. 예시 '닫힌구간의 내부와 폐포'는 출처의 예(593–595, Y = [0, 1) ∪ {2} 의 내부 (0, 1) 과 폐포 [0, 1] ∪ {2})와 같은 발상이다. 확인 질문 'ℚ 의 내부'는 출처의 예(625–627)가 ℚ 의 경계를 구할 때 쓰는 '모든 구간은 유리수와 무리수를 함께 품는다'와 같은 발상이다. 확인 질문 '두 점 위의 위상에서 내부와 폐포'의 위상은 출처의 예 two-point-topologies(18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.2.1절, Example 7.2.5 (p.265); 7.2.3절 Closure and boundary, Definition 7.2.18 (p.269), Proposition 7.2.19 (p.270), Definition 7.2.23 (p.270), Example 7.2.24 (p.270); 7.2.4절 연습문제 7.2.8, 7.2.14 (p.272)"
    checked: original
    note: "출처 Definition 7.2.18(p.269)은 거리공간에서 폐포를 이 항목과 같은 꼴, 곧 A 를 포함하는 닫힌집합 전체의 교집합으로 정의하고, Proposition 7.2.19(p.270)에서 폐포가 닫혀 있고 A 를 포함하며 A 가 닫혀 있으면 폐포가 A 와 같다는 것을 증명한다(그림으로 대조했다). 이 항목의 (1)의 '폐포는 닫혀 있다'와 (3)의 '닫혀 있으면 폐포가 A 와 같다'의 증명은 그 증명과 같은 길이다. 출처 Definition 7.2.23(p.270)은 내부를 공으로, 곧 B(x, δ) ⊂ A 인 δ > 0 이 있는 A 의 점 전체로 정의하여 이 항목의 정의와 꼴이 다르고, 열린집합들의 합집합과 같다는 것은 연습문제 7.2.14(p.272)로 둔다. 연습문제 7.2.8(p.272)의 a(A 가 열린 것은 정확히 내부가 A 와 같을 때)와 b(A 에 포함되는 열린 U 는 내부에 포함된다)는 이 항목의 (3)의 앞 문장과 (2)의 앞 문장과 같은 결론이다. 예시 '닫힌구간의 내부와 폐포'는 출처 Example 7.2.24(p.270, (0, 1] 의 폐포 [0, 1] 과 내부 (0, 1))와 같은 발상이고, 끝점 a 가 내부에 들지 않음을 a 왼쪽의 점으로 보이는 것은 출처 Example 7.2.5(p.265)가 '0 둘레의 모든 공이 음수를 품으므로 [0, 1) 은 열려 있지 않다'고 보이는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우(A = ∅, X = ∅, 밀착위상)에서 거짓이던 직관 문장 3건과 출처 메모의 주장 4건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간, 열린집합, 위상의 조건 (i)–(iii)은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 근방은 [[neighborhood]]의 것이다. 이산위상과 밀착위상은 [[topology-examples]]의 것이고, 집합족과 그 합집합·교집합, 조건으로 정한 부분집합은 [[family-of-sets]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$는 $X$의 부분집합이다.

**내부.** $\{U \in \mathcal{T} : U \subseteq A\}$는 $A$에 포함되는 열린집합 전체의 집합족이다. 그 합집합
$$
\operatorname{Int} A = \bigcup \{U \in \mathcal{T} : U \subseteq A\}
$$
를 $A$의 **내부**(interior)라 한다.

**폐포.** $\{F \in \mathscr{P}(X) : F \text{는 닫힌집합이고 } A \subseteq F\}$는 $A$를 포함하는 닫힌집합 전체의 집합족이다. $X$의 집합족으로 본 그 교집합
$$
\overline{A} = \bigcap \{F \in \mathscr{P}(X) : F \text{는 닫힌집합이고 } A \subseteq F\}
$$
를 $A$의 **폐포**(closure)라 한다.

$\operatorname{Int} A$와 $\overline{A}$는 $X$의 부분집합이다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서의 내부", "$\mathcal{T}$에서의 폐포"처럼 쓴다.

다음이 성립한다. 아래에서 $B$도 $X$의 부분집합이다.

1. $\operatorname{Int} A$는 열린집합이고 $\overline{A}$는 닫힌집합이다. $\operatorname{Int} A \subseteq A \subseteq \overline{A}$이다.
2. (가장 큰 열린집합, 가장 작은 닫힌집합) $U$가 열린집합이고 $U \subseteq A$이면 $U \subseteq \operatorname{Int} A$이다. $F$가 닫힌집합이고 $A \subseteq F$이면 $\overline{A} \subseteq F$이다.
3. $A$가 열린집합인 것은 정확히 $\operatorname{Int} A = A$일 때이다. $A$가 닫힌집합인 것은 정확히 $\overline{A} = A$일 때이다.
4. (포함 관계를 지킨다) $A \subseteq B$이면 $\operatorname{Int} A \subseteq \operatorname{Int} B$이고 $\overline{A} \subseteq \overline{B}$이다.
5. (두 번 취해도 같다) $\operatorname{Int}(\operatorname{Int} A) = \operatorname{Int} A$이고 $\overline{\overline{A}} = \overline{A}$이다.
6. (여집합) $X - \overline{A} = \operatorname{Int}(X - A)$이고 $X - \operatorname{Int} A = \overline{X - A}$이다. 따라서 $\operatorname{Int} A = X - \overline{X - A}$이고 $\overline{A} = X - \operatorname{Int}(X - A)$이다.
7. (점으로 읽기) 점 $x \in X$에 대하여, $x \in \operatorname{Int} A$인 것은 정확히 $U \subseteq A$인 $x$의 근방 $U$가 있을 때이다. $x \in \overline{A}$인 것은 정확히 $A$를 포함하는 모든 닫힌집합 $F$에 대하여 $x \in F$일 때이다.
8. (공집합과 전체) $\operatorname{Int} \emptyset = \overline{\emptyset} = \emptyset$이고 $\operatorname{Int} X = \overline{X} = X$이다.
9. (이산위상과 밀착위상) $\mathcal{T}$가 이산위상이면 $X$의 모든 부분집합 $A$에서 $\operatorname{Int} A = \overline{A} = A$이다. $\mathcal{T}$가 밀착위상이면, $A \ne X$일 때 $\operatorname{Int} A = \emptyset$이고 $A \ne \emptyset$일 때 $\overline{A} = X$이다.
:::

:::english
Topological spaces, open sets and the conditions (i)–(iii) for a topology are as in the entry on topological spaces; closed sets are as in the entry on closed sets in a topological space; and neighborhoods are as in the entry on neighborhoods. The discrete and indiscrete topologies are as in the entry on examples of topologies, and families of sets with their unions and intersections, and subsets defined by a condition, are as in the entry on families of sets. Below, $(X, \mathcal{T})$ is a topological space and $A$ is a subset of $X$.

**Interior.** $\{U \in \mathcal{T} : U \subseteq A\}$ is the family of all open sets contained in $A$. Its union
$$
\operatorname{Int} A = \bigcup \{U \in \mathcal{T} : U \subseteq A\}
$$
is called the **interior** of $A$.

**Closure.** $\{F \in \mathscr{P}(X) : F \text{ is closed and } A \subseteq F\}$ is the family of all closed sets containing $A$. Its intersection, regarded as a family of subsets of $X$,
$$
\overline{A} = \bigcap \{F \in \mathscr{P}(X) : F \text{ is closed and } A \subseteq F\}
$$
is called the **closure** of $A$.

$\operatorname{Int} A$ and $\overline{A}$ are subsets of $X$. When the topology must be named we say "the interior in $(X, \mathcal{T})$", "the closure in $\mathcal{T}$", and so on.

The following hold. Below, $B$ is also a subset of $X$.

1. $\operatorname{Int} A$ is open and $\overline{A}$ is closed. $\operatorname{Int} A \subseteq A \subseteq \overline{A}$.
2. (Largest open set, smallest closed set) If $U$ is open and $U \subseteq A$, then $U \subseteq \operatorname{Int} A$. If $F$ is closed and $A \subseteq F$, then $\overline{A} \subseteq F$.
3. $A$ is open exactly when $\operatorname{Int} A = A$. $A$ is closed exactly when $\overline{A} = A$.
4. (Preserving inclusion) If $A \subseteq B$, then $\operatorname{Int} A \subseteq \operatorname{Int} B$ and $\overline{A} \subseteq \overline{B}$.
5. (Idempotence) $\operatorname{Int}(\operatorname{Int} A) = \operatorname{Int} A$ and $\overline{\overline{A}} = \overline{A}$.
6. (Complements) $X - \overline{A} = \operatorname{Int}(X - A)$ and $X - \operatorname{Int} A = \overline{X - A}$. Consequently $\operatorname{Int} A = X - \overline{X - A}$ and $\overline{A} = X - \operatorname{Int}(X - A)$.
7. (Pointwise reading) For a point $x \in X$, we have $x \in \operatorname{Int} A$ exactly when there is a neighborhood $U$ of $x$ with $U \subseteq A$. We have $x \in \overline{A}$ exactly when $x \in F$ for every closed set $F$ containing $A$.
8. (Empty set and whole space) $\operatorname{Int} \emptyset = \overline{\emptyset} = \emptyset$ and $\operatorname{Int} X = \overline{X} = X$.
9. (Discrete and indiscrete topologies) If $\mathcal{T}$ is the discrete topology, then $\operatorname{Int} A = \overline{A} = A$ for every subset $A$ of $X$. If $\mathcal{T}$ is the indiscrete topology, then $\operatorname{Int} A = \emptyset$ when $A \ne X$, and $\overline{A} = X$ when $A \ne \emptyset$.
:::

## 직관

$A$가 열린집합이 아닐 때, $A$ 안에 든 열린집합을 모두 모아 합치면 $A$ 안에서 가장 큰 열린집합이 됩니다. 이것이 내부입니다. 거꾸로 $A$를 감싸는 닫힌집합을 모두 모아 겹치면 $A$를 감싸는 가장 작은 닫힌집합이 되고, 이것이 폐포입니다. 내부는 $A$를 안쪽에서, 폐포는 바깥쪽에서 열린집합과 닫힌집합으로 어림한 것이고, $\operatorname{Int} A \subseteq A \subseteq \overline{A}$의 두 포함이 모두 등호이면 $A$는 열려 있으면서 닫혀 있습니다((3)).

비유하자면 내부는 "땅 $A$ 안에 지을 수 있는 건물(열린집합)들을 모두 지었을 때 건물이 덮는 부분"이고, 폐포는 "땅 $A$를 둘러칠 수 있는 울타리(닫힌집합) 안쪽들의 공통 부분"입니다. 건물이 땅 밖으로 나가면 안 된다는 것이 $U \subseteq A$, 울타리가 땅을 다 감싸야 한다는 것이 $A \subseteq F$에 맞습니다. 다만 건물과 울타리가 어떤 모양일 수 있는지는 위상이 정하므로, 같은 땅이라도 위상이 바뀌면 내부와 폐포가 바뀔 수 있습니다((9)).

여집합을 취하면 열린집합과 닫힌집합이 맞바뀌고 "포함된다"와 "포함한다"도 맞바뀝니다. 그래서 $A$의 폐포 바깥은 $X - A$의 내부가 됩니다((6)). 폐포에 관한 사실은 이 등식으로 내부에 관한 사실로 옮겨 쓸 수 있습니다.

## 성질의 증명

:::proof
집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이다. 두 집합은 원소가 같을 때 같으므로([[set]]) 등식은 양쪽 포함으로 보인다. 이 증명에서
$$
\mathcal{O} = \{U \in \mathcal{T} : U \subseteq A\}, \qquad \mathcal{C} = \{F \in \mathscr{P}(X) : F \text{는 닫힌집합이고 } A \subseteq F\}
$$
라 쓴다. $\mathcal{T} \subseteq \mathscr{P}(X)$이므로 집합족의 (8)을 $\mathcal{B} = \mathcal{T}$, $U = A$로 쓰면 $\mathcal{O}$는 $X$의 집합족이다. $\mathcal{C}$는 조건으로 정한 $\mathscr{P}(X)$의 부분집합이므로([[family-of-sets]]의 조건으로 정한 부분집합) $X$의 집합족이다. $\operatorname{Int} A = \bigcup \mathcal{O}$, $\overline{A} = \bigcap \mathcal{C}$이고, 둘 다 집합족의 합집합·교집합의 정의에 의해 $X$의 부분집합이다. 닫힌집합은 정의에 의해 $X$의 부분집합이므로, $F$가 $\mathcal{C}$의 원소인 것은 정확히 $F$가 닫힌집합이고 $A \subseteq F$일 때이다.

**(1).** $\mathcal{O}$의 원소는 $\mathcal{T}$의 원소이므로 $\mathcal{O} \subseteq \mathcal{T}$이고, 조건 (ii)에 의해 $\operatorname{Int} A = \bigcup \mathcal{O} \in \mathcal{T}$이다. $\mathcal{C}$의 원소는 모두 닫힌집합이므로 $\mathcal{C}$는 닫힌집합들의 집합족이고, [[closed-set]]의 (2)에 의해 $\overline{A} = \bigcap \mathcal{C}$는 닫힌집합이다. 집합족의 (8)의 (i)에 의해 $\bigcup \mathcal{O} \subseteq A$이다. 모든 $F \in \mathcal{C}$에 대하여 $A \subseteq F$이므로 집합족의 (2)의 (ii)에 의해 $A \subseteq \bigcap \mathcal{C}$이다.

**(2).** $U$가 열린집합이고 $U \subseteq A$이면 $U \in \mathcal{O}$이므로 집합족의 (1)에 의해 $U \subseteq \bigcup \mathcal{O} = \operatorname{Int} A$이다. $F$가 닫힌집합이고 $A \subseteq F$이면 $F \subseteq X$이므로 $F \in \mathscr{P}(X)$이고([[power-set]]) $F \in \mathcal{C}$이다. 집합족의 (1)에 의해 $\overline{A} = \bigcap \mathcal{C} \subseteq F$이다.

**(3).** $A$가 열린집합이면 $A \subseteq A$이므로 (2)에 의해 $A \subseteq \operatorname{Int} A$이고, (1)에 의해 $\operatorname{Int} A \subseteq A$이므로 $\operatorname{Int} A = A$이다. 거꾸로 $\operatorname{Int} A = A$이면 (1)에 의해 $\operatorname{Int} A$가 열린집합이므로 $A$는 열린집합이다. 닫힌집합도 같은 꼴이다. $A$가 닫힌집합이면 $A \subseteq A$이므로 (2)에 의해 $\overline{A} \subseteq A$이고, (1)에 의해 $A \subseteq \overline{A}$이므로 $\overline{A} = A$이다. 거꾸로 $\overline{A} = A$이면 (1)에 의해 $\overline{A}$가 닫힌집합이므로 $A$는 닫힌집합이다.

**(4).** $A \subseteq B$라 하자. (1)에 의해 $\operatorname{Int} A$는 열린집합이고 $\operatorname{Int} A \subseteq A \subseteq B$이므로, (2)를 $B$에 쓰면 $\operatorname{Int} A \subseteq \operatorname{Int} B$이다. (1)에 의해 $\overline{B}$는 닫힌집합이고 $A \subseteq B \subseteq \overline{B}$이므로, (2)를 $A$에 쓰면 $\overline{A} \subseteq \overline{B}$이다.

**(5).** (1)에 의해 $\operatorname{Int} A$는 열린집합이므로 (3)을 $\operatorname{Int} A$에 쓰면 $\operatorname{Int}(\operatorname{Int} A) = \operatorname{Int} A$이다. (1)에 의해 $\overline{A}$는 닫힌집합이므로 (3)을 $\overline{A}$에 쓰면 $\overline{\overline{A}} = \overline{A}$이다.

**(6).** 먼저 $X - \overline{A} = \operatorname{Int}(X - A)$를 보인다. $W = X - \overline{A}$라 하자.

$W \subseteq \operatorname{Int}(X - A)$: (1)에 의해 $\overline{A}$는 닫힌집합이므로 닫힌집합의 정의에 의해 $W$는 열린집합이다. $y \in W$이면 $y \in X$이고 $y \notin \overline{A}$이며, (1)에 의해 $A \subseteq \overline{A}$이므로 $y \notin A$이다. 곧 $y \in X - A$이고 $W \subseteq X - A$이다([[set-operations|차집합]]의 정의). (2)를 $X - A$에 쓰면 $W \subseteq \operatorname{Int}(X - A)$이다.

$\operatorname{Int}(X - A) \subseteq W$: $V = \operatorname{Int}(X - A)$라 하자. (1)에 의해 $V$는 열린집합이므로 [[closed-set]]의 (5)에 의해 $E = X - V$는 닫힌집합이다. $a \in A$이면 $a \notin X - A$이고, (1)에 의해 $V \subseteq X - A$이므로 $a \notin V$이다. $a \in X$이므로 $a \in E$이고, 곧 $A \subseteq E$이다. (2)에 의해 $\overline{A} \subseteq E$이다. 이제 $y \in V$이면 $y \notin E$이므로 $y \notin \overline{A}$이고, $V \subseteq X$이므로 $y \in X$이다. 따라서 $y \in W$이다.

다음으로 방금 보인 등식을 $X - A$에 쓰면 $X - \overline{X - A} = \operatorname{Int}\bigl(X - (X - A)\bigr)$이고, [[closed-set]]의 (5)에 의해 $X - (X - A) = A$이므로 $\operatorname{Int} A = X - \overline{X - A}$이다. 양변을 $X$에서 빼고 $\overline{X - A} \subseteq X$에 [[closed-set]]의 (5)를 쓰면 $X - \operatorname{Int} A = X - \bigl(X - \overline{X - A}\bigr) = \overline{X - A}$이다. 마지막으로 첫 등식 $X - \overline{A} = \operatorname{Int}(X - A)$의 양변을 $X$에서 빼고 $\overline{A} \subseteq X$에 [[closed-set]]의 (5)를 쓰면 $X - \operatorname{Int}(X - A) = X - (X - \overline{A}) = \overline{A}$이다.

**(7).** 집합족의 합집합의 정의에 의해 $x \in \bigcup \mathcal{O}$인 것은 정확히 $x \in U$인 $U \in \mathcal{O}$, 곧 $x \in U$이고 $U \subseteq A$인 열린집합 $U$가 있을 때이다. 근방의 정의에 의해 "$x \in U$인 열린집합 $U$"는 "$x$의 근방 $U$"와 같은 말이다. 또 집합족의 교집합의 정의에 의해, $X$의 점 $x$가 $\bigcap \mathcal{C}$의 원소인 것은 정확히 모든 $F \in \mathcal{C}$에 대하여 $x \in F$, 곧 $A$를 포함하는 모든 닫힌집합 $F$에 대하여 $x \in F$일 때이다.

**(8).** 조건 (i)에 의해 $\emptyset$과 $X$는 열린집합이고, [[closed-set]]의 (1)에 의해 닫힌집합이다. (3)을 $\emptyset$과 $X$에 쓰면 네 등식이 나온다.

**(9).** $\mathcal{T}$가 이산위상이면 [[closed-set]]의 (7)에 의해 $X$의 모든 부분집합은 열린집합이면서 닫힌집합이므로, (3)에 의해 $\operatorname{Int} A = A$이고 $\overline{A} = A$이다.

$\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이고 $A \ne X$라 하자. $U \in \mathcal{O}$이면 $U = \emptyset$이거나 $U = X$이다. $U = X$라면 $X \subseteq A$이고 $A \subseteq X$이므로 $A = X$가 되어 가정에 어긋난다. 따라서 $\mathcal{O}$의 원소는 모두 $\emptyset$이고 모든 $U \in \mathcal{O}$에서 $U \subseteq \emptyset$이므로, 집합족의 (2)의 (i)에 의해 $\bigcup \mathcal{O} \subseteq \emptyset$이다. [[empty-set-is-subset|공집합은 모든 집합의 부분집합]]이므로 $\operatorname{Int} A = \emptyset$이다.

이제 $A \ne \emptyset$이라 하고 $A$의 원소 $a$를 하나 잡는다. $a \in X$이고 $a \notin X - A$이므로 $X - A \ne X$이다. 앞 문단을 $X - A$에 쓰면 $\operatorname{Int}(X - A) = \emptyset$이고, (6)에 의해 $\overline{A} = X - \operatorname{Int}(X - A) = X - \emptyset = X$이다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 내부와 폐포]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 줍니다. [[closed-set]]의 (5)에 의해 닫힌집합은 정확히 열린집합의 여집합이므로 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$의 넷입니다.

- $A = \{2\}$: 열린집합 가운데 $\{2\}$에 포함되는 것은 $\emptyset$뿐이므로 $\operatorname{Int} A = \emptyset$입니다. 닫힌집합 가운데 $\{2\}$를 포함하는 것은 $\{2, 3\}$과 $X$이므로 $\overline{A} = \{2, 3\} \cap X = \{2, 3\}$입니다. $\emptyset \subseteq \{2\} \subseteq \{2, 3\}$의 두 포함이 모두 등호가 아닙니다.
- $A = \{1\}$: $\{1\}$은 열린집합이므로 (3)에 의해 $\operatorname{Int} A = \{1\}$입니다. 닫힌집합 가운데 $1$을 원소로 갖는 것은 $X$뿐이므로 $\overline{A} = X$입니다. 원소가 하나뿐인 집합의 폐포가 전체일 수 있습니다.
- $A = \{1, 3\}$: 열린집합 가운데 $\{1, 3\}$에 포함되는 것은 $\emptyset$과 $\{1\}$이므로 $\operatorname{Int} A = \{1\}$이고, $\{1, 3\}$을 포함하는 닫힌집합은 $X$뿐이므로 $\overline{A} = X$입니다.

(6)을 맞춰 볼 수 있습니다. $A = \{2\}$일 때 $X - \overline{A} = \{1\}$이고, $X - A = \{1, 3\}$의 내부도 $\{1\}$입니다.
:::

:::example[닫힌구간의 내부와 폐포]
$\mathbb{R}$에 보통 거리 $d$([[metric-space-examples]]의 (1))의 거리위상 $\mathcal{T}_d$를 주고, $a < b$인 실수 $a$, $b$에 대하여 $A = [a, b]$라 합시다. $\overline{A} = [a, b]$이고 $\operatorname{Int} A = (a, b)$입니다.

[[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)에 의해 $[a, b]$는 $(\mathbb{R}, d)$에서 닫힌집합이고, [[closed-set]]의 (6)에 의해 $(\mathbb{R}, \mathcal{T}_d)$에서도 닫힌집합이므로 (3)에 의해 $\overline{A} = [a, b]$입니다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (1)과 [[topology-examples]]의 (4)에 의해 열린구간 $(a, b)$는 열린집합이고, [[interval]]의 정의에 의해 $(a, b) \subseteq [a, b]$이므로 (2)에 의해 $(a, b) \subseteq \operatorname{Int} A$입니다.

거꾸로 $a \notin \operatorname{Int} A$임을 봅니다. $a \in \operatorname{Int} A$라면 (7)에 의해 $U \subseteq A$인 $a$의 근방 $U$가 있고, [[neighborhood]]의 (4)의 (b)에 의해 $B(a, r) \subseteq U$인 $r > 0$이 있습니다. $y = a - r/2$라 하면 [[order-properties-of-reals]]의 (8)에 의해 $0 < r/2 < r$이고, [[real-number-arithmetic]]의 계산으로 $a - y = r/2$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $y < a$이며, [[absolute-value]]의 (1)에 의해 $d(a, y) = |a - y| = r/2 < r$입니다. 곧 $y \in B(a, r) \subseteq U \subseteq A$인데 $y < a$이므로 $y \notin [a, b]$이고, 이것은 모순입니다. $b$도 따져 봅니다. $b \in \operatorname{Int} A$라면 같은 근거로 $B(b, s) \subseteq A$인 $s > 0$이 있습니다. $z = b + s/2$라 하면 [[order-properties-of-reals]]의 (8)에 의해 $0 < s/2 < s$이고 $z - b = s/2$이므로 그 (3)의 (i)에 의해 $b < z$이고, [[absolute-value]]의 (3)과 (1)에 의해 $d(b, z) = |b - z| = |-(s/2)| = s/2 < s$이므로 $z \in B(b, s) \subseteq A$인데 $b < z$이므로 $z \notin [a, b]$입니다. 따라서 $b \notin \operatorname{Int} A$입니다. (1)에 의해 $\operatorname{Int} A \subseteq [a, b]$이고 $a$와 $b$가 빠지므로, $\operatorname{Int} A$의 원소 $x$는 $a \le x \le b$, $x \ne a$, $x \ne b$를 만족하여 $a < x < b$입니다. 따라서 $\operatorname{Int} A = (a, b)$입니다.
:::

:::counterexample[폐포가 포함되어도 집합은 포함되지 않을 수 있다]
(4)를 거꾸로 읽을 수는 없습니다. $X = \{a, b\}$ ($a \ne b$)에 밀착위상을 주면 (9)에 의해 $\overline{\{a\}} = X$이고 $\overline{\{b\}} = X$이므로 $\overline{\{a\}} \subseteq \overline{\{b\}}$입니다. 그러나 $a \notin \{b\}$이므로 $\{a\} \subseteq \{b\}$는 성립하지 않습니다.
:::

## 확인 질문

:::check[$X = \{a, b\}$ ($a \ne b$)에 위상 $\{\emptyset, \{a\}, X\}$를 주면 $\operatorname{Int} \{b\}$, $\overline{\{a\}}$, $\overline{\{b\}}$는 각각 무엇인가?]
$\{b\}$에 포함되는 열린집합은 $\emptyset$뿐이므로($\{a\} \not\subseteq \{b\}$) $\operatorname{Int}\{b\} = \emptyset$입니다. 닫힌집합은 열린집합의 여집합 $X$, $\{b\}$, $\emptyset$입니다. $a$를 원소로 갖는 닫힌집합은 $X$뿐이므로 $\overline{\{a\}} = X$이고, $\{b\}$는 닫힌집합이므로 (3)에 의해 $\overline{\{b\}} = \{b\}$입니다.
:::

:::check[$\mathbb{R}$에 보통 거리의 거리위상을 줄 때 유리수 전체의 집합 $\mathbb{Q}$의 내부는 무엇인가?]
$\operatorname{Int} \mathbb{Q} = \emptyset$입니다. $x \in \operatorname{Int} \mathbb{Q}$라면 (7)과 [[neighborhood]]의 (4)의 (b)에 의해 $B(x, r) \subseteq \mathbb{Q}$인 $r > 0$이 있습니다. [[open-ball]]의 (5)에 의해 $x - r < x + r$이고 $B(x, r)$는 열린구간 $(x - r, x + r)$이므로, [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (6)의 (i)에 의해 그 안에 무리수 $z$가 있습니다. $z \in \mathbb{Q}$이면서 무리수일 수는 없으므로([[rational-and-irrational-numbers]]) 모순입니다.
:::
