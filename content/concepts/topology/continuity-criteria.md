---
title: 연속의 판정
title_en: Criteria for Continuity
aliases: [연속 판정, 닫힌집합으로 본 연속, 점별 연속, 기저로 본 연속, 폐포로 본 연속, criteria for continuity, continuity via closed sets, continuity via a basis]
kind: theorem
field: topology
msc: ["54C05"]
level: undergrad
summary: 위상공간 사이의 함수가 연속인 것은 닫힌집합의 역상이 늘 닫혀 있을 때, 모든 점에서 연속일 때, 공역 위상의 기저의 원소의 역상이 모두 열려 있을 때, 모든 부분집합의 폐포의 상이 상의 폐포에 들 때와 같다. 한 점에서의 연속을 근방과 기저의 말로도 바꿔 쓴다.
requires: [set, subset, set-operations, function, family-of-sets, preimage-and-set-operations, topological-space, closed-set, basis-of-a-given-topology, neighborhood, interior-and-closure, continuous-map, real-number-arithmetic, order-properties-of-reals, real-valued-function, interval, lower-limit-topology, topology-examples]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 Theorem continuous-props 의 (ii)(iii)과 그 증명, content/topological-spaces.tex:302–317; 곱의 연속에 관한 증명, content/topological-spaces.tex:531"
    checked: original
    note: "(1)과 (2)는 출처 continuous-props 의 (ii), (iii)과 같은 진술이다. 출처는 (ii)의 한 방향을 여집합으로 보이고 다른 방향은 'similar' 라고 적는다(314). (iii)의 앞 방향에서 출처는 V = f⁻¹(U) 로 두고 f(V) = U 라고 적는다(316). 이 항목은 f(f⁻¹(V)) ⊆ V (preimage-and-set-operations 의 (1)의 (vi))를 쓴다. (iii)의 뒤 방향에서 출처는 f⁻¹(U) 의 점 x 마다 V_x 를 잡아 f⁻¹(U) = ⋃_{x ∈ f⁻¹(U)} V_x 로 쓴다(316). 이 항목은 점마다 무엇을 잡지 않고 topological-space 의 (3)(열린집합의 국소 판정)으로 증명한다. (4)의 (i)은 출처가 곱으로 가는 함수의 연속을 보이며(531) 부분기저 원소의 역상이 열려 있으면 일반의 열린집합은 preimage-props 에서 따라 나온다고 적는 것과 같은 발상이다. (3)의 근방의 말과 (4)의 (ii), (5)는 출처의 continuous-props 에 없다. 확인 질문 '두 점 공간으로 가는 함수'의 공역 {a, b} 와 그 위상은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₂ 와 같다."
  - ref: lebl-basic-analysis
    loc: "7.5.3절, Lemma 7.5.7 (p.290), Theorem 7.5.8 과 Example 7.5.9 (p.291); 7.5.6절 연습문제 7.5.3 (p.294)"
    checked: original
    note: "출처 Lemma 7.5.7(p.290)은 거리공간에서 'f 가 c 에서 연속인 것은 f(c) 의 모든 열린 근방 U 에 대하여 f⁻¹(U) 가 c 의 열린 근방을 포함할 때'라고 적는다. (3)의 (iii)은 이것을 위상공간에서 쓴 꼴이다. 출처 Example 7.5.9(p.291)는 연속함수에서 닫힌집합 E 의 역상이 f⁻¹(E) = X − f⁻¹(Eᶜ) 로 닫혀 있다고 적는데, (1)의 앞 방향과 같은 계산이다. (5)의 앞 방향은 출처 연습문제 7.5.3 a(p.294, 거리공간에서 연속이면 f(Ā) ⊆ closure of f(A))를 위상공간에서 쓴 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합, 열린집합의 국소 판정은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 근방은 [[neighborhood]]의 것이다. 폐포 $\overline{A}$는 [[interior-and-closure]]의 것이고, "위상 $\mathcal{T}$의 기저"는 [[basis-of-a-given-topology]]의 것이다. 연속과 "$x$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$와 $(Y, \mathcal{T}_Y)$는 위상공간이고 $f : X \to Y$는 함수이다.

1. (닫힌집합) $f$가 연속인 것은 정확히 $Y$의 모든 닫힌집합 $F$에 대하여 $f^{-1}(F)$가 $X$에서 닫힌집합일 때이다.
2. (모든 점에서) $f$가 연속인 것은 정확히 $X$의 모든 점 $x$에서 $f$가 연속일 때이다.
3. (근방의 말로) $U \subseteq X$, $V \subseteq Y$이면 다음이 성립한다.
   - (i) $f(U) \subseteq V$인 것은 정확히 $U \subseteq f^{-1}(V)$일 때이다.
   
   $x \in X$일 때 다음 셋은 서로 같은 말이다.
   - (ii) $f$는 $x$에서 연속이다.
   - (iii) $f(x)$의 모든 근방 $V$에 대하여 $f(U) \subseteq V$인 $x$의 근방 $U$가 있다.
   - (iv) $f(x)$의 모든 근방 $V$에 대하여 역상 $f^{-1}(V)$는 $x$의 어떤 근방을 포함한다.
4. (기저) $\mathcal{C}$가 위상 $\mathcal{T}_Y$의 기저라 하자.
   - (i) $f$가 연속인 것은 정확히 모든 $C \in \mathcal{C}$에 대하여 $f^{-1}(C)$가 $X$에서 열린집합일 때이다.
   - (ii) $x \in X$일 때, $f$가 $x$에서 연속인 것은 정확히 $f(x) \in C$인 모든 $C \in \mathcal{C}$에 대하여 $f(U) \subseteq C$인 $x$의 근방 $U$가 있을 때이다.
5. (폐포) $f$가 연속인 것은 정확히 $X$의 모든 부분집합 $A$에 대하여 $f(\overline{A}) \subseteq \overline{f(A)}$일 때이다. 여기서 $\overline{A}$는 $X$에서의 폐포이고 $\overline{f(A)}$는 $Y$에서의 폐포이다.
:::

:::english
Topological spaces, open sets and the local criterion for open sets, closed sets, and neighborhoods are as in the earlier entries. The closure $\overline{A}$ and a "basis for the topology $\mathcal{T}$" are as before, and continuity and "continuity at $x$" are as in the entry on continuous maps between topological spaces. Throughout, $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a function.

1. (Closed sets) $f$ is continuous exactly when $f^{-1}(F)$ is closed in $X$ for every closed set $F$ of $Y$.
2. (At every point) $f$ is continuous exactly when $f$ is continuous at every point $x$ of $X$.
3. (In terms of neighborhoods) If $U \subseteq X$ and $V \subseteq Y$, then:
   - (i) $f(U) \subseteq V$ exactly when $U \subseteq f^{-1}(V)$.
   
   For $x \in X$, the following three statements are equivalent.
   - (ii) $f$ is continuous at $x$.
   - (iii) For every neighborhood $V$ of $f(x)$ there is a neighborhood $U$ of $x$ with $f(U) \subseteq V$.
   - (iv) For every neighborhood $V$ of $f(x)$, the preimage $f^{-1}(V)$ contains some neighborhood of $x$.
4. (Bases) Let $\mathcal{C}$ be a basis for the topology $\mathcal{T}_Y$.
   - (i) $f$ is continuous exactly when $f^{-1}(C)$ is open in $X$ for every $C \in \mathcal{C}$.
   - (ii) For $x \in X$, $f$ is continuous at $x$ exactly when, for every $C \in \mathcal{C}$ with $f(x) \in C$, there is a neighborhood $U$ of $x$ with $f(U) \subseteq C$.
5. (Closures) $f$ is continuous exactly when $f(\overline{A}) \subseteq \overline{f(A)}$ for every subset $A$ of $X$. Here $\overline{A}$ is the closure in $X$ and $\overline{f(A)}$ is the closure in $Y$.
:::

## 직관

연속의 정의는 열린집합의 역상이 열려 있다는 것이었습니다. 이 정리는 같은 말을 다른 재료로 바꿔 줍니다. 닫힌집합은 열린집합의 여집합이고 역상은 여집합과 맞물리므로, 열린집합 대신 닫힌집합을 써도 됩니다((1)). 공역의 열린집합 전체를 다 볼 필요도 없습니다. 열린집합은 기저 원소들의 합집합이고 역상은 합집합과 맞물리므로, 기저의 원소만 확인하면 됩니다((4)).

(2)는 "전체에서 연속"과 "점마다 연속"을 잇습니다. 연속은 한꺼번에 하는 말이고 $x$에서의 연속은 한 점을 둘러싼 말인데, 모든 점에서 성립하면 둘이 같습니다. 증명에서 뒤 방향은 "역상의 모든 점이 그 안에 든 열린집합을 가지면 역상이 열려 있다"는 [[topological-space|위상공간]]의 국소 판정을 씁니다. 점마다 열린집합을 하나씩 골라 모으는 일은 하지 않습니다.

(5)는 연속함수가 "닿아 있음"을 지킨다는 것입니다. $x$가 $A$의 폐포에 든다는 것은 $x$가 $A$에 닿아 있다는 뜻으로 읽을 수 있고, 연속함수는 그 $x$를 $f(A)$에 닿아 있는 점으로 보냅니다. 연속이 아니면 이 포함이 깨지는 부분집합이 있습니다.

## 증명

:::idea
(1)은 여집합, (4)의 (i)은 합집합에 대한 역상의 성질로 정의에 옮겨 갑니다. (2)는 국소 판정으로, (5)는 (1)과 폐포의 "가장 작은 닫힌집합" 성질로 보입니다.
:::

:::hint
(3)의 (i)이 여러 곳에서 쓰입니다. $f(U) \subseteq V$에서 $U \subseteq f^{-1}(V)$로 가려면 $U \subseteq f^{-1}(f(U))$를, 거꾸로 가려면 $f(f^{-1}(V)) \subseteq V$를 쓰세요.
:::

:::hint
(5)의 뒤 방향에서는 닫힌집합 $F$를 잡고 $A = f^{-1}(F)$로 두어 $\overline{A} = A$를 보이세요.
:::

:::proof
역상과 상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 것이고, 이 증명에서는 "역상의 (n)"이라 부른다. 근방의 정의에 의해 "$x$의 근방"은 "$x$를 원소로 갖는 열린집합"과 같은 말이다.

**(3).** (i) $f(U) \subseteq V$이면 역상의 (1)의 (iii)과 (7)에 의해 $U \subseteq f^{-1}(f(U)) \subseteq f^{-1}(V)$이다. 거꾸로 $U \subseteq f^{-1}(V)$이면 역상의 (7)의 상의 포함과 (1)의 (vi)에 의해 $f(U) \subseteq f(f^{-1}(V)) \subseteq V$이다.

(ii)와 (iii). 근방은 그 점을 원소로 갖는 열린집합이므로, (iii)은 [[continuous-map|위상공간 사이의 연속함수]]의 "$x$에서 연속"의 정의를 근방이라는 말로 다시 쓴 것이다.

(iii)과 (iv). (i)에 의해 $x$의 근방 $U$에 대하여 $f(U) \subseteq V$인 것은 정확히 $U \subseteq f^{-1}(V)$일 때이다. 따라서 "$f(U) \subseteq V$인 $x$의 근방 $U$가 있다"와 "$f^{-1}(V)$가 $x$의 어떤 근방을 포함한다"는 같은 말이다.

**(1).** 역상의 (3)에 의해 $Y$의 모든 부분집합 $W$에서 $f^{-1}(Y - W) = X - f^{-1}(W)$이다. 이것을 (가)라 부른다.

$f$가 연속이고 $F$가 $Y$의 닫힌집합이라 하자. 닫힌집합의 정의에 의해 $Y - F$는 열린집합이고, $f$가 연속이므로 $f^{-1}(Y - F)$는 열린집합이다. (가)에 의해 이것은 $X - f^{-1}(F)$이고, $f^{-1}(F) \subseteq X$이므로 닫힌집합의 정의에 의해 $f^{-1}(F)$는 닫힌집합이다.

거꾸로 닫힌집합의 역상이 늘 닫혀 있다고 하고 $V$가 $Y$의 열린집합이라 하자. [[closed-set]]의 (5)에 의해 $Y - V$는 닫힌집합이므로 $f^{-1}(Y - V) = X - f^{-1}(V)$는 닫힌집합이다. $f^{-1}(V) \subseteq X$이므로 [[closed-set]]의 (5)에 의해 $f^{-1}(V)$는 열린집합이다. 따라서 $f$는 연속이다.

**(2).** $f$가 연속이고 $x \in X$라 하자. $V$가 $f(x)$를 원소로 갖는 열린집합이면 $U = f^{-1}(V)$는 열린집합이고 $f(x) \in V$이므로 $x \in U$이며, 역상의 (1)의 (vi)에 의해 $f(U) \subseteq V$이다. 따라서 $f$는 $x$에서 연속이다.

거꾸로 $f$가 $X$의 모든 점에서 연속이라 하고 $V \in \mathcal{T}_Y$, $W = f^{-1}(V)$라 하자. $y \in W$이면 $f(y) \in V$이고, $f$가 $y$에서 연속이므로 $y \in U$이고 $f(U) \subseteq V$인 열린집합 $U$가 있다. (3)의 (i)에 의해 $U \subseteq W$이다. 곧 $W$의 모든 점 $y$에 대하여 $y \in U$이고 $U \subseteq W$인 열린집합 $U$가 있다. [[topological-space]]의 (3)에서 (b)가 (a)를 주므로 $W$는 열린집합이다. 같은 (3)의 (c)에 의해 $W = \bigcup \{U \in \mathcal{T}_X : U \subseteq W\}$로도 쓸 수 있다. 따라서 $f$는 연속이다.

**(4).** [[basis-of-a-given-topology]]의 (2)에 의해 $\mathcal{C} \subseteq \mathcal{T}_Y$이고, $f(x) \in V$인 $V \in \mathcal{T}_Y$마다 $f(x) \in C$이고 $C \subseteq V$인 $C \in \mathcal{C}$가 있다.

(i) $f$가 연속이면 $\mathcal{C}$의 원소는 열린집합이므로 그 역상은 열린집합이다. 거꾸로 모든 $C \in \mathcal{C}$에서 $f^{-1}(C)$가 열린집합이라 하고 $V \in \mathcal{T}_Y$라 하자. $\mathcal{D} = \{C \in \mathcal{C} : C \subseteq V\}$로 두면 [[basis-of-a-given-topology]]의 (3)에서 (a)가 (b)를 주므로 $V = \bigcup \mathcal{D}$이다. $\mathcal{D}$는 $Y$의 집합족이므로 역상의 (2)에 의해 $f^{-1}(V) = \bigcup \{f^{-1}(C) : C \in \mathcal{D}\}$이다. 오른쪽 집합족의 원소는 어떤 $C \in \mathcal{D} \subseteq \mathcal{C}$에 대한 $f^{-1}(C)$이므로 열린집합이고, 위상의 조건 (ii)에 의해 그 합집합 $f^{-1}(V)$는 열린집합이다. 따라서 $f$는 연속이다.

(ii) $f$가 $x$에서 연속이고 $f(x) \in C \in \mathcal{C}$이면, $C$는 열린집합이므로 $C$는 $f(x)$의 근방이고 (3)의 (iii)에 의해 $f(U) \subseteq C$인 $x$의 근방 $U$가 있다. 거꾸로 (ii)의 조건이 성립하고 $V$가 $f(x)$의 근방이라 하자. 첫 문단에 의해 $f(x) \in C \subseteq V$인 $C \in \mathcal{C}$가 있고, 조건에 의해 $f(U) \subseteq C$인 $x$의 근방 $U$가 있으며 $f(U) \subseteq V$이다. (3)에 의해 $f$는 $x$에서 연속이다.

**(5).** $f$가 연속이고 $A \subseteq X$라 하자. [[interior-and-closure]]의 (1)에 의해 $\overline{f(A)}$는 $Y$의 닫힌집합이고 $f(A) \subseteq \overline{f(A)}$이다. (1)에 의해 $F = f^{-1}\bigl(\overline{f(A)}\bigr)$는 $X$의 닫힌집합이고, (3)의 (i)에 의해 $A \subseteq F$이다. [[interior-and-closure]]의 (2)에 의해 $\overline{A} \subseteq F$이고, (3)의 (i)에 의해 $f(\overline{A}) \subseteq \overline{f(A)}$이다.

거꾸로 모든 $A \subseteq X$에서 $f(\overline{A}) \subseteq \overline{f(A)}$라 하고 $F$가 $Y$의 닫힌집합이라 하자. $A = f^{-1}(F)$로 두면 역상의 (1)의 (vi)에 의해 $f(A) \subseteq F$이다. [[interior-and-closure]]의 (4)와 (3)에 의해 $\overline{f(A)} \subseteq \overline{F} = F$이다. 가정에 의해 $f(\overline{A}) \subseteq F$이고, (3)의 (i)에 의해 $\overline{A} \subseteq f^{-1}(F) = A$이다. [[interior-and-closure]]의 (1)에 의해 $A \subseteq \overline{A}$이므로 $\overline{A} = A$이고, 같은 항목의 (3)에 의해 $A = f^{-1}(F)$는 닫힌집합이다. (1)에 의해 $f$는 연속이다.
:::

## 예시와 반례

:::example[아래끝 위상에서 평행이동과 부호 바꾸기]
$\mathbb{R}_l$은 [[lower-limit-topology]]의 아래끝 위상을 준 $\mathbb{R}$이고, 같은 항목의 (1)에 의해 $\mathcal{B}_l = \{[a, b) : a < b\}$는 위상의 기저이며 아래끝 위상을 생성하므로 아래끝 위상의 기저입니다. $s(x) = x + 1$, $t(x) = -x$로 정한 $s, t : \mathbb{R} \to \mathbb{R}$([[real-valued-function]]의 (1))를 $\mathbb{R}_l$에서 $\mathbb{R}_l$로의 함수로 봅니다.

- $s$는 연속입니다. $a < b$이면 [[order-properties-of-reals]]의 (2)의 (ii)에 의해 $a \le x + 1 < b$인 것은 정확히 $a - 1 \le x < b - 1$일 때이고 $a - 1 < b - 1$이므로, $s^{-1}([a, b)) = [a - 1, b - 1) \in \mathcal{B}_l$입니다. (4)의 (i)에 의해 $s$는 연속입니다.
- $t$는 연속이 아닙니다. $[0, 1)$은 $\mathbb{R}_l$의 열린집합이고, [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $0 \le -x < 1$인 것은 정확히 $-1 < x \le 0$일 때이므로 $W = t^{-1}([0, 1)) = (-1, 0]$입니다. $W$가 $\mathbb{R}_l$에서 열려 있다면 $0 \in W$이므로 [[basis-of-a-given-topology]]의 (2)에 의해 $0 \in [c, e) \subseteq W$인 $[c, e) \in \mathcal{B}_l$이 있습니다. $c \le 0 < e$이고 [[order-properties-of-reals]]의 (8)에 의해 $0 < e/2 < e$이므로 $e/2 \in [c, e) \subseteq W$인데, $0 < e/2$이므로 $e/2 \notin (-1, 0]$이어서 어긋납니다. 따라서 $W$는 열려 있지 않고 $t$는 연속이 아닙니다.
:::

:::counterexample[폐포의 상이 상의 폐포를 벗어나는 경우]
$X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{1\}, \{1, 2\}, X\}$([[topology-examples]]의 (8)의 (i))를, $a \ne b$인 $Y = \{a, b\}$에 위상 $\{\emptyset, \{a\}, Y\}$를 주고, $g(1) = a$, $g(2) = b$, $g(3) = a$라 합시다. $X$의 닫힌집합은 열린집합의 여집합 $X$, $\{2, 3\}$, $\{3\}$, $\emptyset$이고, $Y$의 닫힌집합은 $Y$, $\{b\}$, $\emptyset$입니다.

$A = \{2\}$이면 $A$를 포함하는 닫힌집합은 $X$와 $\{2, 3\}$이므로 $\overline{A} = \{2, 3\}$이고 $g(\overline{A}) = \{a, b\} = Y$입니다. 한편 $g(A) = \{b\}$는 닫힌집합이므로 [[interior-and-closure]]의 (3)에 의해 $\overline{g(A)} = \{b\}$입니다. $g(\overline{A}) \not\subseteq \overline{g(A)}$이므로 (5)에 의해 $g$는 연속이 아닙니다. (1)로 보아도, 닫힌집합 $\{b\}$의 역상 $\{2\}$는 위 네 닫힌집합 가운데 없습니다.
:::

## 확인 질문

:::check[$a \ne b$인 $Y = \{a, b\}$에 위상 $\{\emptyset, \{a\}, Y\}$를 줄 때, 위상공간 $X$에서 $Y$로의 함수 $f$가 연속인 것은 언제인가?]
$Y$의 닫힌집합은 $Y$, $\{b\}$, $\emptyset$이고, $f^{-1}(Y) = X$와 $f^{-1}(\emptyset) = \emptyset$은 늘 닫힌집합입니다([[closed-set]]의 (1)). 따라서 (1)에 의해 $f$가 연속인 것은 정확히 $f^{-1}(\{b\})$가 $X$에서 닫힌집합일 때입니다.
:::

:::check[$m(x) = 2x$로 정한 $m : \mathbb{R}_l \to \mathbb{R}_l$은 연속인가?]
그렇습니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < 2$이고 (6)의 (i)에 의해 $0 < 2^{-1}$입니다. $a < b$이면 (6)의 (iv)를 $c = 2^{-1}$로 써서 $a \le 2x$인 것은 정확히 $a/2 \le x$일 때이고, $2x < b$인 것은 정확히 $x < b/2$일 때이며, $a/2 < b/2$입니다. 곧 $m^{-1}([a, b)) = [a/2, b/2)$는 아래끝 위상의 기저 원소이므로 (4)의 (i)에 의해 $m$은 연속입니다.
:::
