---
title: 위상공간 사이의 연속함수
title_en: Continuous Maps between Topological Spaces
aliases: [연속, 연속함수, 연속사상, x 에서 연속, 한 점에서 연속, continuous map, continuous function, continuity, continuous at a point]
kind: definition
field: topology
msc: ["54C05"]
level: undergrad
summary: 위상공간 사이의 함수 f 가 공역의 모든 열린집합의 역상이 정의역에서 열려 있을 때 연속이라 하고, 한 점에서의 연속도 열린집합으로 정의한다. 항등함수, 상수함수, 이산위상에서 나가는 함수, 밀착위상으로 들어가는 함수, 정의역이 공집합인 함수는 연속이고, 같은 집합의 두 위상 사이의 항등함수가 연속일 조건과 연속이 위상에 달려 있다는 것을 보인다.
requires: [set, subset, cartesian-product, function, image-and-preimage, inverse-function, preimage-and-set-operations, topological-space, topology-examples, comparing-topologies, real-valued-function, order-properties-of-reals, open-and-closed-sets-of-reals, standard-topology-on-reals, lower-limit-topology]
sources:
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 Definition continuity-def 와 그 뒤의 예 넷, content/topological-spaces.tex:282–301; 연습문제 1.3, content/exercises.tex:14"
    checked: original
    note: "정의는 출처 continuity-def(282–287)와 같다. 출처는 열린집합을 𝒯_X, 𝒯_Y 의 원소로 쓰고, 한 점에서의 연속에서 공역 쪽 열린집합을 U, 정의역 쪽을 V 로 쓴다. 이 항목은 글자를 바꾸어 공역 쪽을 V, 정의역 쪽을 U 로 쓴다. (1)–(4)는 출처의 예 넷(289–300: 항등사상, 상수사상, 이산위상에서 나가는 함수, trivial topology 로 들어가는 함수)과 같은 진술이고, 상수함수의 증명을 y 가 열린집합에 드는 경우와 들지 않는 경우로 나누는 것도 출처와 같다. 출처는 그 뒤 문단(301)에서 마지막 두 예가 연속이라는 개념이 다루는 공간의 위상에 크게 달려 있음을 보여 준다고 적는다. (6)은 그 문장을 진술로 올린 것이다. (5)는 출처 연습문제 1.3(같은 집합 위의 두 위상 사이에서 항등사상이 언제 연속인가)과 같은 물음에 답한 것이다. 예시 '세 점 공간에서 두 점 공간으로'의 정의역의 위상은 topology-examples 의 (8)의 (i)이고, 공역 {a, b} 의 위상 {∅, {a}, Y} 와 확인 질문 '함수 넷 가운데 연속인 것'의 위상은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₂ 와 같은 위상이다. 확인 질문 '보통 위상의 ℝ 에서 ℝ_l 로의 항등함수'는 출처 연습문제 1.3 의 물음을 보통 위상과 아래끝 위상에 적용한 것이고, 그 답에 쓰는 '아래끝 위상이 보통 위상보다 진짜로 더 섬세하다'는 출처 content/topological-spaces.tex:180–183 이 적는 것이다."
  - ref: lebl-basic-analysis
    loc: "3.2.3절, Example 3.2.10 (p.125); 6.3절 Remark 6.3.7 의 Heaviside 함수 (p.252); 7.5절 Definition 7.5.1 (p.288)"
    checked: original
    note: "출처는 7.5절 Definition 7.5.1(p.288)에서 거리공간 사이의 연속을 ε–δ 로 정의한다. 이 항목은 연속을 열린집합의 역상으로 정의한다. 반례 '실수의 계단 함수'의 함수는 출처 Remark 6.3.7(p.252)의 Heaviside 함수(x < 0 에서 0, x ≥ 0 에서 1)와 같은 함수이고, 이 함수가 보통 위상에서 연속이 아니라는 것은 출처 Example 3.2.10(p.125, x < 0 에서 −1, x ≥ 0 에서 1 인 함수가 0 에서 연속이 아니다)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 상수함수에서 거짓이던 일반 문장 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
위상과 위상공간, 열린집합은 [[topological-space]]의 것이고, 이산위상과 밀착위상은 [[topology-examples]]의 것이며, "섬세하다"는 [[comparing-topologies]]의 것이다. 상과 역상은 [[image-and-preimage|상과 역상]]의 것이고 항등함수 $i_X$는 [[inverse-function|역관계와 역함수]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$와 $(Y, \mathcal{T}_Y)$는 위상공간이고 $f : X \to Y$는 [[function|함수]]이다. 여기서 $Y$는 $f : X \to Y$라고 쓸 때 밝힌 공역이다. 위상을 밝혀야 할 때는 $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$로 쓴다.

**연속.** $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$가 **연속**(continuous)인 것은 정확히 $(Y, \mathcal{T}_Y)$의 모든 열린집합 $V$에 대하여 역상 $f^{-1}(V)$가 $(X, \mathcal{T}_X)$에서 열린집합일 때, 곧 모든 $V \in \mathcal{T}_Y$에서 $f^{-1}(V) \in \mathcal{T}_X$일 때이다. 연속인 함수를 **연속함수**(continuous function)라 한다. 여기서 $f^{-1}(V)$는 역상이므로 $f$에 역함수가 없어도 이 정의는 뜻이 있다.

**한 점에서 연속.** $x \in X$라 하자. $f$가 **$x$에서 연속**(continuous at $x$)인 것은 정확히, $f(x) \in V$인 $(Y, \mathcal{T}_Y)$의 모든 열린집합 $V$에 대하여 $x \in U$이고 $f(U) \subseteq V$인 $(X, \mathcal{T}_X)$의 열린집합 $U$가 있을 때이다.

다음이 성립한다.

1. (항등함수) $(X, \mathcal{T})$가 위상공간이면 항등함수 $i_X : (X, \mathcal{T}) \to (X, \mathcal{T})$는 연속이다. 모든 $V \subseteq X$에서 $i_X^{-1}(V) = V$이다.
2. (상수함수) $y_0 \in Y$이고 모든 $x \in X$에서 $f(x) = y_0$이면 $f$는 연속이다. 열린집합 $V$에 대하여 $y_0 \in V$이면 $f^{-1}(V) = X$이고, $y_0 \notin V$이면 $f^{-1}(V) = \emptyset$이다.
3. (이산위상에서 나가는 함수) $\mathcal{T}_X$가 $X$ 위의 이산위상 $\mathscr{P}(X)$이면 모든 함수 $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$는 연속이다.
4. (밀착위상으로 들어가는 함수) $\mathcal{T}_Y$가 $Y$ 위의 밀착위상 $\{\emptyset, Y\}$이면 모든 함수 $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$는 연속이다.
5. (같은 집합의 두 위상 사이의 항등함수) $\mathcal{T}_1$, $\mathcal{T}_2$가 집합 $X$ 위의 위상이면, $i_X : (X, \mathcal{T}_1) \to (X, \mathcal{T}_2)$가 연속인 것은 정확히 $\mathcal{T}_2 \subseteq \mathcal{T}_1$일 때, 곧 $\mathcal{T}_1$이 $\mathcal{T}_2$보다 섬세할 때이다.
6. (연속은 위상에 달려 있다) $f$가 연속인지는 일반적으로 집합 $f$만으로 정해지지 않는다. 같은 집합 $f$라도 정의역의 위상이나, 선언한 공역과 그 위상을 바꾸면 연속인지가 달라질 수 있다. 예컨대 $a \ne b$이고 $X = \{a, b\}$이면 다음이 성립한다.
   - (i) $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$는 연속이고, 같은 집합 $i_X$를 $(X, \{\emptyset, X\})$에서 $(X, \mathscr{P}(X))$로의 함수로 보면 연속이 아니다.
   - (ii) $c$가 $a$, $b$와 다른 대상이고 $Z = \{a, b, c\}$이면 $\{\emptyset, \{a\}, Z\}$는 $Z$ 위의 위상이다. 같은 집합 $i_X = \{(a, a), (b, b)\}$는 $(X, \{\emptyset, X\})$에서 $(X, \{\emptyset, X\})$로의 함수로 보면 연속이고, $(X, \{\emptyset, X\})$에서 $(Z, \{\emptyset, \{a\}, Z\})$로의 함수로 보면 연속이 아니다.
7. (정의역이 공집합인 함수) $X = \emptyset$이면 $X$에서 $Y$로의 함수는 공집합 $\emptyset$ 하나뿐이고, 이 함수는 연속이다.
:::

:::english
Topologies, topological spaces and open sets are as in the earlier entries, as are the discrete and indiscrete topologies and the word "finer". Images, preimages and the identity function $i_X$ are as before. Throughout, $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a function, where $Y$ is the codomain declared in writing $f : X \to Y$. When the topologies must be shown, we write $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$.

**Continuity.** The map $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$ is **continuous** exactly when, for every open set $V$ of $(Y, \mathcal{T}_Y)$, the preimage $f^{-1}(V)$ is an open set of $(X, \mathcal{T}_X)$, that is, when $f^{-1}(V) \in \mathcal{T}_X$ for every $V \in \mathcal{T}_Y$. A map that is continuous is called a **continuous function**. Here $f^{-1}(V)$ is a preimage, so the definition makes sense even when $f$ has no inverse function.

**Continuity at a point.** Let $x \in X$. The map $f$ is **continuous at $x$** exactly when, for every open set $V$ of $(Y, \mathcal{T}_Y)$ with $f(x) \in V$, there is an open set $U$ of $(X, \mathcal{T}_X)$ with $x \in U$ and $f(U) \subseteq V$.

The following hold.

1. (Identity) If $(X, \mathcal{T})$ is a topological space, the identity $i_X : (X, \mathcal{T}) \to (X, \mathcal{T})$ is continuous. For every $V \subseteq X$, $i_X^{-1}(V) = V$.
2. (Constant maps) If $y_0 \in Y$ and $f(x) = y_0$ for every $x \in X$, then $f$ is continuous. For an open set $V$, $f^{-1}(V) = X$ if $y_0 \in V$ and $f^{-1}(V) = \emptyset$ if $y_0 \notin V$.
3. (Maps out of a discrete space) If $\mathcal{T}_X$ is the discrete topology $\mathscr{P}(X)$ on $X$, every function $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$ is continuous.
4. (Maps into an indiscrete space) If $\mathcal{T}_Y$ is the indiscrete topology $\{\emptyset, Y\}$ on $Y$, every function $f : (X, \mathcal{T}_X) \to (Y, \mathcal{T}_Y)$ is continuous.
5. (The identity between two topologies on one set) If $\mathcal{T}_1$ and $\mathcal{T}_2$ are topologies on a set $X$, then $i_X : (X, \mathcal{T}_1) \to (X, \mathcal{T}_2)$ is continuous exactly when $\mathcal{T}_2 \subseteq \mathcal{T}_1$, that is, when $\mathcal{T}_1$ is finer than $\mathcal{T}_2$.
6. (Continuity depends on the topologies) In general, whether $f$ is continuous is not determined by the set $f$ alone. For the same set $f$, changing the topology of the domain, or the declared codomain and its topology, may change whether it is continuous. For example, if $a \ne b$ and $X = \{a, b\}$:
   - (i) $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$ is continuous, and the same set $i_X$ regarded as a function from $(X, \{\emptyset, X\})$ to $(X, \mathscr{P}(X))$ is not continuous.
   - (ii) If $c$ is an object different from $a$ and $b$ and $Z = \{a, b, c\}$, then $\{\emptyset, \{a\}, Z\}$ is a topology on $Z$. The same set $i_X = \{(a, a), (b, b)\}$ is continuous as a function from $(X, \{\emptyset, X\})$ to $(X, \{\emptyset, X\})$ and is not continuous as a function from $(X, \{\emptyset, X\})$ to $(Z, \{\emptyset, \{a\}, Z\})$.
7. (Maps with empty domain) If $X = \emptyset$, the only function from $X$ to $Y$ is the empty set $\emptyset$, and this function is continuous.
:::

## 직관

연속을 "가까운 점을 가까운 점으로 보낸다"로 그리면, 위상공간에는 거리가 없으므로 "가깝다"를 열린집합으로 말해야 합니다. 한 점에서의 연속이 그 말입니다. $f(x)$를 담은 열린집합 $V$를 아무것이나 주면, $x$를 담은 열린집합 $U$를 찾아 $U$ 전체가 $V$ 안으로 가게 할 수 있다는 것입니다. 과녁($V$)을 상대가 정하고, 우리는 $x$를 포함하면서 거기서 쏜 화살이 모두 과녁 안에 떨어지는 사대($U$)를 찾는 놀이에 빗댈 수 있습니다. "$f(x)$를 담은 모든 $V$"가 상대가 고르는 과녁이고, "$x \in U$, $f(U) \subseteq V$인 $U$가 있다"가 우리가 찾는 사대입니다.

연속의 정의는 이것을 점마다 따지지 않고 한꺼번에 말합니다. 공역의 열린집합을 하나 잡아 거기에 떨어지는 점 전체, 곧 역상을 보면 그것이 열린집합이라는 것입니다. 역상은 [[preimage-and-set-operations|역상과 집합의 연산]]에서 본 대로 합집합과 교집합을 그대로 보존합니다. 상 $f(U)$는 교집합을 보존하지 않을 수 있습니다. 연속은 "열린집합의 상이 열려 있다"가 아닙니다. 아래 예시 '세 점 공간에서 두 점 공간으로'의 $g$는 네 열린집합의 상 $\emptyset$, $\{a\}$, $\{a, b\}$, $\{a, b\}$가 모두 열려 있는데도 연속이 아닙니다. 거꾸로 보통 위상의 $\mathbb{R}$에서 $\mathbb{R}$로 가는 상수함수는 연속이지만((2)), 공집합이 아닌 열린집합의 상은 한 점 집합이어서 열려 있지 않습니다.

해석학 입문의 [[continuous-function|연속함수]]는 실수의 부분집합 위의 실함수에 대해 $\varepsilon$–$\delta$로 정의한 것이었습니다. 이 항목의 정의는 위상공간 사이의 함수에 대한 것이고, 이 항목에서는 이 정의만 씁니다.

(3)과 (4)는 극단의 경우입니다. 정의역의 열린집합이 많을수록 역상이 열려 있기 쉽고, 공역의 열린집합이 적을수록 따질 역상이 적습니다. (5)는 이것을 같은 집합의 두 위상 사이에서 정확히 말한 것입니다.

## 성질의 증명

:::proof
역상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 것이다. 특히 그 (7)에 의해 어떤 함수 $h : P \to Q$에서도 $h^{-1}(Q) = P$이고 $h^{-1}(\emptyset) = \emptyset$이다.

**(1).** $V \subseteq X$라 하자. $x \in X$이면 $i_X(x) = x$이므로, [[image-and-preimage|상과 역상]]의 2에 의해 $x \in i_X^{-1}(V)$인 것은 정확히 $x \in V$일 때이다. $i_X^{-1}(V)$와 $V$는 모두 $X$의 부분집합이므로 $i_X^{-1}(V) = V$이다. 따라서 $V \in \mathcal{T}$이면 $i_X^{-1}(V) \in \mathcal{T}$이고 $i_X$는 연속이다.

**(2).** $V \in \mathcal{T}_Y$라 하자. $y_0 \in V$이면 모든 $x \in X$에서 $f(x) = y_0 \in V$이므로 $X \subseteq f^{-1}(V)$이고, $f^{-1}(V) \subseteq X$이므로 $f^{-1}(V) = X$이다. $y_0 \notin V$이면 $f(x) \in V$인 $x \in X$가 없으므로 $f^{-1}(V) = \emptyset$이다. 어느 경우든 위상의 조건 (i)에 의해 $f^{-1}(V) \in \mathcal{T}_X$이다.

**(3).** $V \in \mathcal{T}_Y$이면 $f^{-1}(V) \subseteq X$이므로 $f^{-1}(V) \in \mathscr{P}(X) = \mathcal{T}_X$이다([[topology-examples]]의 (1)).

**(4).** $V \in \mathcal{T}_Y = \{\emptyset, Y\}$이면 $V = \emptyset$이거나 $V = Y$이다. $f^{-1}(\emptyset) = \emptyset$이고 $f^{-1}(Y) = X$이며, 위상의 조건 (i)에 의해 둘 다 $\mathcal{T}_X$의 원소이다.

**(5).** (1)에 의해 모든 $V \subseteq X$에서 $i_X^{-1}(V) = V$이다. 따라서 $i_X : (X, \mathcal{T}_1) \to (X, \mathcal{T}_2)$가 연속인 것은 정확히 모든 $V \in \mathcal{T}_2$에서 $V \in \mathcal{T}_1$일 때, 곧 $\mathcal{T}_2 \subseteq \mathcal{T}_1$일 때이다. [[comparing-topologies]]의 정의에 의해 이것은 정확히 $\mathcal{T}_1$이 $\mathcal{T}_2$보다 섬세할 때이다.

**(6).** (i) [[topology-examples]]의 (3)에 의해 $\{a\} \in \mathscr{P}(X)$이고 $\{a\} \notin \{\emptyset, X\}$이다. 따라서 $\mathscr{P}(X) \subseteq \{\emptyset, X\}$는 거짓이고, $\{\emptyset, X\} \subseteq \mathscr{P}(X)$는 참이다($\emptyset$과 $X$는 $X$의 부분집합이다). (5)를 $\mathcal{T}_1 = \mathscr{P}(X)$, $\mathcal{T}_2 = \{\emptyset, X\}$로 쓰면 첫째 함수는 연속이고, $\mathcal{T}_1 = \{\emptyset, X\}$, $\mathcal{T}_2 = \mathscr{P}(X)$로 쓰면 둘째 함수는 연속이 아니다.

(ii) $\{a\} \subseteq Z \subseteq Z$이므로 [[topology-examples]]의 (9)에 의해 $\{\emptyset, \{a\}, Z, Z\} = \{\emptyset, \{a\}, Z\}$는 $Z$ 위의 위상이다. $i_X$의 모든 값은 $X \subseteq Z$에 속하므로 [[function]]의 진술에 의해 $i_X$는 $X$에서 $Z$로의 함수이기도 하다. $(X, \{\emptyset, X\})$에서 $(X, \{\emptyset, X\})$로의 함수로 보면 (1)에 의해 연속이다. $(Z, \{\emptyset, \{a\}, Z\})$로의 함수로 보면, $\{a\}$는 공역의 열린집합이고 $i_X(a) = a \in \{a\}$, $i_X(b) = b \notin \{a\}$이므로 $i_X^{-1}(\{a\}) = \{a\}$이다. $a \ne b$이므로 $\{a\} \ne \emptyset$이고 $b \notin \{a\}$이므로 $\{a\} \ne X$이다. 곧 $\{a\} \notin \{\emptyset, X\}$이고 이 함수는 연속이 아니다.

**(7).** 함수 $f : \emptyset \to Y$는 $\emptyset \times Y$의 부분집합이고, $\emptyset \times Y$는 첫째 성분이 $\emptyset$의 원소인 순서쌍 전체이므로 원소가 없다. 따라서 $f = \emptyset$이다. 거꾸로 $\emptyset \subseteq \emptyset \times Y$는 [[function]]의 두 조건을 만족한다. 두 조건은 $\emptyset$의 모든 원소 $a$에 대한 것이고 그런 $a$가 없기 때문이다. 이 함수에서 모든 $V \in \mathcal{T}_Y$의 역상은 $\emptyset$의 부분집합이므로 $\emptyset$이고, [[topological-space]]의 공집합 단락에 의해 $\emptyset$ 위의 위상은 $\{\emptyset\}$이므로 $\emptyset \in \mathcal{T}_X$이다. 따라서 이 함수는 연속이다.
:::

## 예시와 반례

:::example[세 점 공간에서 두 점 공간으로]
$X = \{1, 2, 3\}$에 위상 $\mathcal{T}_X = \{\emptyset, \{1\}, \{1, 2\}, X\}$([[topology-examples]]의 (8)의 (i))를 주고, $a \ne b$인 $Y = \{a, b\}$에 위상 $\mathcal{T}_Y = \{\emptyset, \{a\}, Y\}$([[topology-examples]]의 (7))를 줍니다. $Y$의 열린집합의 역상은 $\emptyset$과 $Y$에서 언제나 $\emptyset$과 $X$이므로, 연속인지는 $\{a\}$의 역상만 보면 정해집니다.

- $f(1) = a$, $f(2) = a$, $f(3) = b$이면 $f^{-1}(\{a\}) = \{1, 2\} \in \mathcal{T}_X$이므로 $f$는 연속입니다.
- $g(1) = a$, $g(2) = b$, $g(3) = a$이면 $g^{-1}(\{a\}) = \{1, 3\}$이고, 이것은 $\mathcal{T}_X$의 네 원소 가운데 어느 것도 아니므로 $g$는 연속이 아닙니다.

$g$를 한 점씩 보면, $1$에서는 연속입니다. $g(1) = a$를 담은 열린집합은 $\{a\}$와 $Y$이고, $\{a\}$에는 $U = \{1\}$이 $g(\{1\}) = \{a\}$로, $Y$에는 $U = X$가 맞습니다. $2$에서도 연속입니다. $g(2) = b$를 담은 열린집합은 $Y$뿐이고 $U = X$가 맞습니다. $3$에서는 연속이 아닙니다. $3$을 담은 열린집합은 $X$뿐이고 $g(X) = \{a, b\}$는 $V = \{a\}$에 들지 않습니다.
:::

:::counterexample[실수의 계단 함수]
$h : \mathbb{R} \to \mathbb{R}$를 $x < 0$이면 $h(x) = 0$, $0 \le x$이면 $h(x) = 1$로 정합니다([[real-valued-function]]의 (1). [[order-properties-of-reals]]의 (1)의 (iii)에 의해 모든 실수는 두 경우 가운데 정확히 하나에 듭니다). 공역 $\mathbb{R}$에는 보통 위상을 줍니다.

정의역에도 보통 위상을 주면 $h$는 연속이 아닙니다. $V = \{y \in \mathbb{R} : 0 < y\}$는 [[open-and-closed-sets-of-reals]]의 (1)에 의해 열린집합이고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상의 열린집합입니다. [[order-properties-of-reals]]의 (5)의 (ii)에 의해 $0 < 1$이므로 $1 \in V$이고, 같은 항목의 (1)의 (i)에 의해 $0 < 0$은 거짓이므로 $0 \notin V$입니다. 따라서 $h(x) \in V$인 것은 정확히 $h(x) = 1$일 때, 곧 $0 \le x$일 때이고 $h^{-1}(V) = \{x \in \mathbb{R} : 0 \le x\}$입니다. 이것은 [[open-and-closed-sets-of-reals]]의 (4)에 의해 열린집합이 아닙니다.

정의역에 아래끝 위상을 주면, 곧 $h : \mathbb{R}_l \to \mathbb{R}$로 보면 $h$는 연속입니다. 공역의 열린집합 $V$가 $0$과 $1$을 각각 원소로 갖는지에 따라 $h^{-1}(V)$는 $\emptyset$, $\{x : x < 0\}$, $\{x : 0 \le x\}$, $\mathbb{R}$ 가운데 하나이고, 넷 모두 [[lower-limit-topology]]의 (3)과 위상의 조건 (i)에 의해 $\mathbb{R}_l$의 열린집합입니다. 같은 집합 $h$가 정의역의 위상에 따라 연속이기도 하고 아니기도 한 것입니다.
:::

## 확인 질문

:::check[$a \ne b$이고 $X = \{a, b\}$에 위상 $\{\emptyset, \{a\}, X\}$를 줄 때, $X$에서 $X$로의 함수 넷 가운데 연속인 것은 무엇인가?]
$\{a\}$의 역상이 $\emptyset$, $\{a\}$, $X$ 가운데 하나이면 연속입니다. 항등함수는 역상이 $\{a\}$, 두 상수함수는 역상이 $X$와 $\emptyset$이므로 연속입니다. $a$와 $b$를 맞바꾸는 함수는 $\{a\}$의 역상이 $\{b\}$이고 $\{b\}$는 이 위상의 원소가 아니므로 연속이 아닙니다.
:::

:::check[항등함수 $i_{\mathbb{R}}$를 보통 위상의 $\mathbb{R}$에서 $\mathbb{R}_l$로의 함수로 보면 연속인가?]
아닙니다. (5)에 의해 연속인 것은 정확히 아래끝 위상이 보통 위상에 포함될 때인데, [[lower-limit-topology]]의 (2)에 의해 아래끝 위상은 보통 위상보다 진짜로 더 섬세하므로 포함되지 않습니다. 구체적으로 $[0, 1)$은 그 (4)에 의해 $\mathbb{R}_l$에서 열려 있지만, 그 역상 $[0, 1)$은 보통 위상에서 열려 있지 않습니다.
:::
