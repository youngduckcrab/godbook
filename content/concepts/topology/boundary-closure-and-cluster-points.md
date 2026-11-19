---
title: 경계·폐포·집적점의 관계
title_en: Boundary, Closure and Cluster Points
aliases: [경계와 폐포, 폐포와 집적점, closure is A together with its cluster points, boundary is closure minus interior]
kind: theorem
field: topology
msc: ["54A05"]
level: undergrad
summary: 부분집합 A 의 경계는 A 의 폐포에서 내부를 뺀 것이고 A 와 그 여집합의 폐포의 교집합이며 닫힌집합이다. 폐포는 A 와 경계의 합집합, 내부와 경계의 서로소인 합집합, A 와 그 집적점 전체의 합집합이다. 이로써 닫힌집합과 열린집합을 경계와 집적점으로 판정한다.
requires: [set, subset, set-operations, de-morgan-laws-sets, complement, family-of-sets, topological-space, topology-examples, closed-set, neighborhood, interior-and-closure, boundary, cluster-point-in-a-space, closure-by-neighborhoods, lower-limit-topology]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 Theorem relations-closure-boundary 와 그 증명, content/topological-spaces.tex:596–623"
    checked: original
    note: "출처 Theorem relations-closure-boundary 는 (i) ∂Y = X ∖ (Int Y ∪ Int(X ∖ Y)) = Y 의 폐포 ∩ (X ∖ Y) 의 폐포, (ii) Y 의 폐포 = Y ∪ ∂Y, (iii) Y 의 폐포 = Y ∪ Y′ 이다. 이 항목의 (1), (2), (5)의 앞 등식, (7)이 차례로 이것과 같다. 출처는 (i)의 둘째 등식을 식 int-versus-closure 에서 바로 얻고, 첫째 등식은 여집합을 취해 양쪽 포함으로 보이며(608–612), (ii)는 분배법칙으로(614–617), (iii)은 ∂Y ∖ Y = Y′ ∖ Y 를 보여(619–622) 얻는다. 이 항목은 (1)을 경계의 정의와 내부의 점 판정으로, (2)를 여집합 등식으로 보이는 것은 출처와 같고, (5)와 (7)은 근방 판정(closure-by-neighborhoods 의 (1))으로 직접 보인다. (3), (4), (5)의 둘째 등식, (6), (8)–(10)은 출처의 이 정리에는 없고, (3)은 아래 Lebl 의 경계의 정의와 같다. 예시 '세 점 위의 위상에서 맞춰 보기'의 위상은 topology-examples 의 (8)의 (i)의 것이고 출처 연습문제 1.2(content/exercises.tex:13, X = {a, b, c} 위의 위상을 모두 기술하라)의 답에 드는 위상이다. 예시 '밀착위상의 한 점 집합'은 출처 연습문제 2.3(exercises.tex:77–79, 기저 {(a, ∞)} 가 생성한 ℝ 위의 위상에서 {x₀} 의 limit point 전체와 폐포)과 같은 종류의 물음이다."
  - ref: lebl-basic-analysis
    loc: "7.2.3절 Closure and boundary, Definition 7.2.23 (p.270), Proposition 7.2.26 (p.271), Corollary 7.2.28 (p.271); 7.2.4절 연습문제 7.2.7 (p.272); 7.5.5절 연습문제 7.5.13 (p.295)"
    checked: original
    note: "출처 Definition 7.2.23(p.270)은 거리공간에서 경계를 폐포에서 내부를 뺀 집합으로 정의한다. 이 항목의 (3)은 그 정의가 이 사이트의 경계(근방으로 정의)와 같은 집합이라는 것이다. (2)는 출처 Corollary 7.2.28(p.271, ∂A = A 의 폐포 ∩ Aᶜ 의 폐포, 그림으로 대조했다)과 같은 진술이고, (4)의 '경계는 닫혀 있다'는 출처 Proposition 7.2.26(p.271)의 뒷부분과 같다. (6)은 출처 연습문제 7.2.7(p.272)의 a(E 가 닫힌 것은 정확히 ∂E ⊂ E 일 때)와 b(U 가 열린 것은 정확히 ∂U ∩ U = ∅ 일 때)와 같은 결론이다. (9)는 출처 연습문제 7.5.13(p.295, p 가 S 의 cluster point 인 것은 정확히 p 가 S ∖ {p} 의 폐포에 들 때, 그림으로 대조했다)을 위상공간에서 쓴 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 틀린 근거 1건, 부정확한 직관과 단원 글 문장, 블록 제목이 깨지는 화면 오류를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]], 닫힌집합은 [[closed-set]], 내부와 폐포는 [[interior-and-closure]], 경계는 [[boundary]], 집적점과 고립점은 [[cluster-point-in-a-space|위상공간의 집적점]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고 $A$는 $X$의 부분집합이다.

1. $\partial A = X - \bigl(\operatorname{Int} A \cup \operatorname{Int}(X - A)\bigr)$이다.
2. $\partial A = \overline{A} \cap \overline{X - A}$이다.
3. (폐포에서 내부를 뺀 것) $\partial A = \overline{A} - \operatorname{Int} A$이다.
4. (경계는 닫혀 있다) $\partial A$는 닫힌집합이다.
5. (폐포를 나누기) $\overline{A} = A \cup \partial A$이다. 또 $\overline{A} = \operatorname{Int} A \cup \partial A$이고 $\operatorname{Int} A \cap \partial A = \emptyset$이다.
6. (경계로 판정하기) $A$가 닫힌집합인 것은 정확히 $\partial A \subseteq A$일 때이다. $A$가 열린집합인 것은 정확히 $\partial A \cap A = \emptyset$일 때이다.
7. (폐포와 집적점) $\overline{A}$는 $A$와 "$A$의 집적점 전체의 집합"의 합집합이다. 곧 점 $x \in X$가 $\overline{A}$의 원소인 것은 정확히 $x \in A$이거나 $x$가 $A$의 집적점일 때이다.
8. (집적점으로 판정하기) $A$가 닫힌집합인 것은 정확히 $A$의 모든 집적점이 $A$에 속할 때이다.
9. (집적점과 폐포) 점 $x \in X$가 $A$의 집적점인 것은 정확히 $x \in \overline{A - \{x\}}$일 때이다.
10. (집적점과 고립점) $A$의 점은 $A$의 집적점이거나 $A$의 고립점이고, 둘 다인 점은 없다.
:::

:::english
Topological spaces and open sets, closed sets, interior and closure, boundaries, and cluster points and isolated points are as in the corresponding entries. Below, $(X, \mathcal{T})$ is a topological space and $A$ is a subset of $X$.

1. $\partial A = X - \bigl(\operatorname{Int} A \cup \operatorname{Int}(X - A)\bigr)$.
2. $\partial A = \overline{A} \cap \overline{X - A}$.
3. (Closure minus interior) $\partial A = \overline{A} - \operatorname{Int} A$.
4. (The boundary is closed) $\partial A$ is closed.
5. (Splitting the closure) $\overline{A} = A \cup \partial A$. Also $\overline{A} = \operatorname{Int} A \cup \partial A$ and $\operatorname{Int} A \cap \partial A = \emptyset$.
6. (Tests by the boundary) $A$ is closed exactly when $\partial A \subseteq A$. $A$ is open exactly when $\partial A \cap A = \emptyset$.
7. (Closure and cluster points) $\overline{A}$ is the union of $A$ and "the set of all cluster points of $A$". That is, a point $x \in X$ belongs to $\overline{A}$ exactly when $x \in A$ or $x$ is a cluster point of $A$.
8. (Test by cluster points) $A$ is closed exactly when every cluster point of $A$ belongs to $A$.
9. (Cluster points and closures) A point $x \in X$ is a cluster point of $A$ exactly when $x \in \overline{A - \{x\}}$.
10. (Cluster points and isolated points) Every point of $A$ is a cluster point of $A$ or an isolated point of $A$, and no point is both.
:::

## 직관

경계, 폐포, 내부, 집적점은 모두 "근방이 $A$와 어떻게 만나는가"로 읽을 수 있어서 서로 얽혀 있습니다. 점 $x$의 근방을 보면 세 경우가 있습니다. 어떤 근방이 $A$ 안에 들어가면 $x$는 내부에 있고, 어떤 근방이 $X - A$ 안에 들어가면 $x$는 폐포 밖에 있으며, 어느 쪽도 아니면 $x$는 경계에 있습니다. (1)과 (5)의 둘째 문장이 이 세 갈래를 말하고, (3)은 "폐포에서 내부를 빼면 경계가 남는다"로 읽힙니다. 이 (3)은 출처 가운데 하나가 경계의 정의로 쓰는 꼴이어서, 두 정의가 같은 집합을 준다는 것도 이것으로 확인됩니다.

비유하자면 $X$를 땅 $A$와 그 바깥으로 나누면, 내부는 땅 깊숙한 곳, 폐포 밖은 바깥 깊숙한 곳, 경계는 그 사이의 띠입니다. 폐포는 땅 깊숙한 곳과 띠를 합친 것이고, 깊숙한 곳과 띠는 겹치지 않습니다((5)). 땅 $A$ 자신은 띠의 일부를 가질 수도 있고 갖지 않을 수도 있어서, $A$와 띠는 겹칠 수 있습니다(아래 반례). 띠를 모두 가지면 $A$는 닫혀 있고, 띠를 하나도 갖지 않으면 열려 있습니다((6)).

집적점으로 보면, 폐포에 새로 더해지는 점, 곧 $\overline{A}$에는 있고 $A$에는 없는 점은 모두 집적점입니다. 그런 점의 근방이 만나는 $A$의 점은 그 점 자신일 수 없기 때문입니다. 그래서 폐포는 $A$에 집적점들을 더한 것이고((7)), $A$가 닫혀 있다는 것은 더할 것이 없다는 것입니다((8)).

## 증명

:::idea
(1)은 경계의 정의를 부정한 [[boundary]]의 (2)와 내부의 점 판정을 맞대고, (2)–(6)은 내부와 폐포의 여집합 등식으로 계산한다. (7)은 근방 판정 [[closure-by-neighborhoods]]의 (1)로 보인다.
:::

:::hint
(2): [[interior-and-closure]]의 (6)에 의해 $X - \operatorname{Int} A = \overline{X - A}$이고 $X - \operatorname{Int}(X - A) = \overline{A}$이다.
:::

:::hint
(7): $x \in \overline{A}$이고 $x \notin A$이면, $x$의 근방이 만나는 $A$의 점은 $x$가 아니다.
:::

:::proof
등식은 양쪽 포함으로 보인다. [[interior-and-closure|내부와 폐포]]의 성질을 "내부·폐포의 (n)"으로 부른다. 내부·폐포의 (1)에 의해 $\operatorname{Int} A$, $\overline{A}$, $\operatorname{Int}(X - A)$, $\overline{X - A}$는 모두 $X$의 부분집합이다.

**(1).** $x \in X$라 하자. [[boundary]]의 (2)에 의해 $x \notin \partial A$인 것은 정확히 $U \subseteq A$이거나 $U \subseteq X - A$인 $x$의 근방 $U$가 있을 때이다. 이것은 "$U \subseteq A$인 $x$의 근방이 있다" 또는 "$U \subseteq X - A$인 $x$의 근방이 있다"와 같다. 내부·폐포의 (7)을 $A$와 $X - A$에 쓰면 이것은 $x \in \operatorname{Int} A$ 또는 $x \in \operatorname{Int}(X - A)$, 곧 $x \in \operatorname{Int} A \cup \operatorname{Int}(X - A)$이다. $\partial A$의 원소는 $X$의 원소이므로, $x$가 $\partial A$의 원소인 것은 정확히 $x \in X$이고 $x \notin \operatorname{Int} A \cup \operatorname{Int}(X - A)$일 때이고, 이것이 (1)이다([[set-operations|차집합]]의 정의).

**(2).** [[de-morgan-laws-sets|드 모르간 법칙]]의 2를 전체집합 $X$에서 쓰면([[complement|여집합]] $C^c = X - C$)
$$
X - \bigl(\operatorname{Int} A \cup \operatorname{Int}(X - A)\bigr) = \bigl(X - \operatorname{Int} A\bigr) \cap \bigl(X - \operatorname{Int}(X - A)\bigr)
$$
이다. 내부·폐포의 (6)에 의해 $X - \operatorname{Int} A = \overline{X - A}$이고 $X - \operatorname{Int}(X - A) = \overline{A}$이다. (1)과 합치면 $\partial A = \overline{X - A} \cap \overline{A}$이다.

**(3).** $\overline{A} \subseteq X$이므로 $\overline{A} - \operatorname{Int} A = \overline{A} \cap (X - \operatorname{Int} A)$이다. $y$가 왼쪽의 원소이면 $y \in \overline{A} \subseteq X$이고 $y \notin \operatorname{Int} A$이므로 오른쪽의 원소이고, 거꾸로 오른쪽의 원소는 $\overline{A}$에 있고 $\operatorname{Int} A$에 없으므로 왼쪽의 원소이다. 내부·폐포의 (6)에 의해 $X - \operatorname{Int} A = \overline{X - A}$이므로 이것은 $\overline{A} \cap \overline{X - A}$이고, (2)에 의해 $\partial A$이다.

**(4).** 내부·폐포의 (1)에 의해 $\overline{A}$와 $\overline{X - A}$는 닫힌집합이다. [[family-of-sets]]의 (3)에 의해 $\overline{A} \cap \overline{X - A} = \bigcap \{\overline{A}, \overline{X - A}\}$이고, [[closed-set]]의 (2)에 의해 이것은 닫힌집합이다. (2)에 의해 $\partial A$는 닫힌집합이다.

**(5).** (2)에 의해 $\partial A \subseteq \overline{A}$이고, 내부·폐포의 (1)에 의해 $A \subseteq \overline{A}$이므로 $A \cup \partial A \subseteq \overline{A}$이다. 거꾸로 $x \in \overline{A}$라 하자. $x \in A$이면 $x \in A \cup \partial A$이다. $x \notin A$이면 $x \in X$이므로 $x \in X - A$이고, 내부·폐포의 (1)에 의해 $X - A \subseteq \overline{X - A}$이므로 $x \in \overline{A} \cap \overline{X - A}$이다. (2)에 의해 $x \in \partial A$이다. 따라서 $\overline{A} = A \cup \partial A$이다.

내부·폐포의 (1)에 의해 $\operatorname{Int} A \subseteq A \subseteq \overline{A}$이고 $\partial A \subseteq \overline{A}$이므로 $\operatorname{Int} A \cup \partial A \subseteq \overline{A}$이다. 거꾸로 $x \in \overline{A}$이고 $x \notin \operatorname{Int} A$이면 (3)에 의해 $x \in \partial A$이다. 따라서 $\overline{A} = \operatorname{Int} A \cup \partial A$이다. (3)에 의해 $\partial A$의 원소는 $\operatorname{Int} A$에 없으므로 $\operatorname{Int} A \cap \partial A = \emptyset$이다.

**(6).** 내부·폐포의 (3)에 의해 $A$가 닫힌집합인 것은 정확히 $\overline{A} = A$일 때이고, (5)에 의해 이것은 $A \cup \partial A = A$이다. $A \cup \partial A = A$이면 $\partial A \subseteq A \cup \partial A = A$이고, 거꾸로 $\partial A \subseteq A$이면 $A \cup \partial A \subseteq A \subseteq A \cup \partial A$이므로 $A \cup \partial A = A$이다.

$A$가 열린집합이면 내부·폐포의 (3)에 의해 $\operatorname{Int} A = A$이고, (5)에 의해 $\partial A \cap A = \partial A \cap \operatorname{Int} A = \emptyset$이다. 거꾸로 $\partial A \cap A = \emptyset$이라 하고 $x \in A$라 하자. 내부·폐포의 (1)에 의해 $x \in \overline{A}$이므로 (5)에 의해 $x \in \operatorname{Int} A$이거나 $x \in \partial A$이다. $x \in A$이고 $\partial A \cap A = \emptyset$이므로 $x \notin \partial A$이고, 따라서 $x \in \operatorname{Int} A$이다. 곧 $A \subseteq \operatorname{Int} A$이고, 내부·폐포의 (1)과 합치면 $\operatorname{Int} A = A$이다. 내부·폐포의 (3)에 의해 $A$는 열린집합이다.

**(7).** $x \in X$라 하자. $x$가 $A$의 집적점이면, $x$의 모든 근방 $U$에서 $(U \cap A) - \{x\} \ne \emptyset$이므로 $U \cap A \ne \emptyset$이고, [[closure-by-neighborhoods]]의 (1)에 의해 $x \in \overline{A}$이다. $x \in A$이면 내부·폐포의 (1)에 의해 $x \in \overline{A}$이다. 거꾸로 $x \in \overline{A}$이고 $x \notin A$라 하자. $U$가 $x$의 근방이면 [[closure-by-neighborhoods]]의 (1)에 의해 $y \in U \cap A$인 $y$가 있고, $y \in A$이고 $x \notin A$이므로 $y \ne x$이다. 곧 $(U \cap A) - \{x\} \ne \emptyset$이고, $x$는 $A$의 집적점이다. 따라서 $x \in \overline{A}$인 것은 정확히 $x \in A$이거나 $x$가 $A$의 집적점일 때이다.

**(8).** 내부·폐포의 (3)에 의해 $A$가 닫힌집합인 것은 정확히 $\overline{A} \subseteq A$일 때이다(내부·폐포의 (1)에 의해 $A \subseteq \overline{A}$는 늘 성립한다). (7)에 의해 $\overline{A} \subseteq A$인 것은 정확히 "$x \in A$이거나 $x$가 $A$의 집적점이면 $x \in A$"가 모든 $x \in X$에서 성립할 때이고, 이것은 $A$의 모든 집적점이 $A$에 속한다는 것과 같다.

**(9).** $x \in X$라 하고 $B = A - \{x\}$라 하자. $B \subseteq X$이고 $x \notin B$이다. [[cluster-point-in-a-space|위상공간의 집적점]]의 (4)에 의해 $x$가 $A$의 집적점인 것은 정확히 $x$가 $B$의 집적점일 때이다. (7)을 $B$에 쓰면 $x \in \overline{B}$인 것은 정확히 $x \in B$이거나 $x$가 $B$의 집적점일 때이고, $x \notin B$이므로 정확히 $x$가 $B$의 집적점일 때이다. 두 문장을 합치면 (9)이다.

**(10).** $x \in A$라 하자. $x$가 $A$의 집적점이 아니면 [[cluster-point-in-a-space|위상공간의 집적점]] 항목의 고립점의 정의에 의해 $x$는 $A$의 고립점이다. 같은 정의에 의해 고립점은 집적점이 아니므로 둘 다인 점은 없다.
:::

## 예시와 반례

:::example[세 점 위의 위상에서 맞춰 보기]
$X = \{1, 2, 3\}$에 [[topology-examples]]의 (8)의 (i)의 위상 $\{\emptyset, \{1\}, \{1, 2\}, X\}$를 주고 $A = \{2\}$라 합시다. [[closed-set]]의 (5)에 의해 닫힌집합은 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$이므로 $\overline{A} = \{2, 3\} \cap X = \{2, 3\}$이고, $A$에 포함되는 열린집합은 $\emptyset$뿐이므로 $\operatorname{Int} A = \emptyset$입니다. (3)에 의해 $\partial A = \{2, 3\} - \emptyset = \{2, 3\}$이고, (4)대로 $\{2, 3\}$은 닫힌집합입니다.

집적점을 근방으로 따지면 $1$의 근방 $\{1\}$은 $A$와 만나지 않고, $2$의 근방 $\{1, 2\}$에서 $(\{1, 2\} \cap A) - \{2\} = \emptyset$이며, $3$의 근방은 $X$뿐이고 $(X \cap A) - \{3\} = \{2\}$입니다. 따라서 $A$의 집적점은 $3$ 하나이고, (7)대로 $A \cup \{3\} = \{2, 3\} = \overline{A}$입니다. (10)대로 $A$의 점 $2$는 집적점이 아니므로 고립점입니다.
:::

:::example[밀착위상의 한 점 집합]
$X$에 서로 다른 두 점이 있고 밀착위상을 주었다고 합시다. $p \in X$, $A = \{p\}$이면 [[interior-and-closure]]의 (9)에 의해 $\overline{A} = X$이고 $\operatorname{Int} A = \emptyset$이므로, (3)에 의해 $\partial A = X$입니다. [[cluster-point-in-a-space|위상공간의 집적점]]의 (7)에 의해 $A$의 집적점은 정확히 $p$가 아닌 점들이고, (7)대로 $\{p\}$와 그것들을 합치면 $X$입니다. $A$의 점 $p$는 고립점이면서 경계에 듭니다.
:::

:::counterexample[A 와 경계는 겹칠 수 있다]
(5)의 둘째 문장에서 $\operatorname{Int} A$와 $\partial A$는 서로소이지만, 첫 문장의 $A$와 $\partial A$는 서로소가 아닐 수 있습니다. 첫 예시에서 $A = \{2\}$이고 $\partial A = \{2, 3\}$이므로 $A \cap \partial A = \{2\}$입니다. (6)에 의해 이것은 $A$가 열린집합이 아니라는 것과 같습니다.
:::

## 확인 질문

:::check[$A$가 열린집합이면서 닫힌집합이면 $\partial A$는 무엇인가?]
$\emptyset$입니다. (6)에 의해 $A$가 닫혀 있으므로 $\partial A \subseteq A$이고, $A$가 열려 있으므로 $\partial A \cap A = \emptyset$입니다. 따라서 $\partial A = \partial A \cap A = \emptyset$입니다. 예컨대 [[lower-limit-topology]]의 (4)에 의해 $\mathbb{R}_l$에서 $[0, 1)$은 열려 있으면서 닫혀 있으므로 그 경계는 공집합입니다.
:::

:::check[$A$의 고립점은 늘 $\partial A$에 드는가?]
그렇지 않을 수 있습니다. 이산위상에서는 [[cluster-point-in-a-space|위상공간의 집적점]]의 (6)에 의해 $A$의 모든 점이 고립점이지만 [[boundary]]의 (4)에 의해 $\partial A = \emptyset$입니다. 한편 위 둘째 예시의 $p$처럼 고립점이 경계에 들 수도 있습니다.
:::
