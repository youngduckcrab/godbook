---
title: 연결공간의 연속 상
title_en: Continuous Images of Connected Spaces
aliases: [연결집합의 연속 상, 연속함수는 연결을 보존한다, continuous image of a connected space, image of a connected set]
kind: theorem
field: topology
msc: ["54D05"]
level: undergrad
summary: 연결공간에서 나가는 연속함수의 상은 연결 부분집합이고, 연결 부분집합의 상도 연결 부분집합이다. 따라서 연결공간에서 이산공간으로 가는 연속함수는 상수이고, 거꾸로 두 점 이산공간으로 가는 연속함수가 모두 상수인 공간은 연결이다.
requires: [set, subset, set-operations, function, injective-surjective-bijective, image-and-preimage, preimage-and-set-operations, adding-or-removing-an-element, recursion-theorem, real-number-arithmetic, order-properties-of-reals, topological-space, topology-examples, continuous-map, subspace-topology, subspace-and-continuity, pasting-lemma, metric-subspace-topology, lower-limit-topology, connected-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Connectedness 절의 Theorem images-of-connected 와 증명 (content/connectedness.tex:79–85), 그 다음 Corollary(locally constant)와 증명 (86–91)"
    checked: original
    note: "(1)은 출처 Theorem images-of-connected(79–85)이다. 출처는 f(X) 의 부분공간 위상에서의 분리 U, V 의 역상이 X 의 분리라고 하여 증명하고, 이 항목은 connected-space 의 (2)로 Y 의 열린집합 U, V 를 잡아 그 역상으로 증명한다. (3)의 (i)은 출처의 Corollary(86–91)와 같은 꼴이다. 출처는 국소 상수(locally constant) 함수 f : X → Y (Y 는 집합)가 상수임을, Y 에 이산위상을 주면 f 가 연속이라는 것과 Theorem images-of-connected, 예 discrete-connectedness 로 보인다. 이 항목은 국소 상수라는 말을 쓰지 않고 이산공간으로 가는 연속함수에 대해 진술한다. 반례 '연속이 아니면 상이 연결이 아닐 수 있는 예'의 두 위상은 출처의 예 two-point-topologies(topological-spaces.tex:18–28)의 𝒯₁ 과 𝒯₄ 이다."
  - ref: lebl-basic-analysis
    loc: "7.5.6절 연습문제 7.5.1 (p.293), 7.5.5 (p.294)"
    checked: original
    note: "(1)은 연습문제 7.5.5(p.294: 거리공간 사이의 연속함수 f 에서 X 가 연결이면 f(X) 가 연결임을 보이라)와 같은 내용이다. 예시 '정수 값만 갖는 연속 실함수'는 연습문제 7.5.1 (a)(p.293: 연결인 거리공간에서 ℕ ⊆ ℝ 로 가는 연속함수는 상수)와 같은 발상이고, 확인 질문 '아래끝 위상에서 두 점 이산공간으로'는 연습문제 7.5.1 (b)(연결이 아닌 X 와 상수가 아닌 f 의 예를 찾으라)와 같은 물음이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 X = ∅ 과 한 점 집합에서 거짓이던 직관 문장, 단원 글과 확인 질문의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이며, 이산위상은 [[topology-examples]]의 것이다. 연결공간과 연결 부분집합, 분리는 [[connected-space|연결공간]]의 것이고, 부분집합에는 [[subspace-topology]]의 부분공간 위상을 준다. 상 $f(A)$는 [[image-and-preimage|상과 역상]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$와 $(Y, \mathcal{T}_Y)$는 위상공간이고 $f : X \to Y$는 연속함수이다. 함수 $g : X \to Z$가 **상수**(constant)라는 것은 $X$의 모든 점 $x$, $x'$에서 $g(x) = g(x')$라는 뜻이다($X = \emptyset$이면 따질 점이 없어 늘 성립한다).

1. (연속 상) $X$가 연결공간이면 상 $f(X)$는 $Y$의 연결 부분집합이다. $f$가 전사일 필요는 없다.
2. (연결 부분집합의 상) $A$가 $X$의 연결 부분집합이면 $f(A)$는 $Y$의 연결 부분집합이다.
3. (이산공간으로 가는 연속함수)
   - (i) $X$가 연결공간이고 $Y$에 이산위상 $\mathscr{P}(Y)$를 주면, 연속함수 $f : X \to Y$는 상수이다.
   - (ii) $D = \{0, 1\}$에 이산위상 $\mathscr{P}(D)$를 주자. $X$가 연결공간인 것은 정확히 $X$에서 $D$로의 연속함수가 모두 상수일 때이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, continuity is as in the entry on continuous maps between topological spaces, and the discrete topology is as in the entry on examples of topologies. Connected spaces, connected subsets and separations are as in the entry on connected spaces, and subsets are given the subspace topology of the entry on the subspace topology. The image $f(A)$ is as in the entry on images and preimages. Below, $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a continuous function. A function $g : X \to Z$ is **constant** when $g(x) = g(x')$ for all points $x$, $x'$ of $X$ (if $X = \emptyset$ there are no points to check and this always holds).

1. (Continuous images) If $X$ is a connected space, then the image $f(X)$ is a connected subset of $Y$. $f$ need not be surjective.
2. (Images of connected subsets) If $A$ is a connected subset of $X$, then $f(A)$ is a connected subset of $Y$.
3. (Continuous functions into discrete spaces)
   - (i) If $X$ is a connected space and $Y$ is given the discrete topology $\mathscr{P}(Y)$, then every continuous function $f : X \to Y$ is constant.
   - (ii) Give $D = \{0, 1\}$ the discrete topology $\mathscr{P}(D)$. $X$ is a connected space exactly when every continuous function from $X$ to $D$ is constant.
:::

## 직관

연속함수는 열린집합을 거꾸로 당겨 열린집합을 만듭니다. 그래서 상 $f(X)$를 두 쪽으로 나누는 열린집합이 있으면, 그것을 역상으로 당겨 $X$를 두 쪽으로 나눌 수 있습니다. $X$가 나뉘지 않으면 $f(X)$도 나뉘지 않는다는 것이 (1)입니다. 비유하자면 한 덩어리의 반죽을 늘이거나 접어도(연속) 찢지 않는 한 두 덩어리가 되지는 않습니다. "찢지 않는다"가 연속이라는 가정에, "두 덩어리"가 상의 분리에 맞습니다.

(1)의 상은 공역 $Y$ 전체가 아니라 부분집합 $f(X)$이므로 연결이라는 말은 $f(X)$의 부분공간 위상에 대한 것입니다. 그래서 전사를 가정할 필요가 없고, $Y$ 자신은 연결이 아니어도 됩니다. (3)은 (1)을 이산공간에 쓴 것입니다. 이산공간에서 연결인 부분집합은 점이 하나 이하인 것뿐이므로, 연결공간에서 이산공간으로 가는 연속함수가 취하는 값은 많아야 하나입니다. 거꾸로 공간에 분리가 있으면 한쪽에 $0$, 다른 쪽에 $1$을 주는 함수가 상수가 아닌 연속함수가 됩니다.

## 증명

:::idea
상 $f(X)$를 가르는 $Y$의 두 열린집합을 $f$로 거꾸로 당기면 $X$의 분리가 된다. 분리가 있는 공간에서는 두 쪽에 서로 다른 값을 주는 두 점 이산공간으로의 함수가 연속이다.
:::

:::hint
[[connected-space]]의 (2)를 $f(X)$에 쓰세요. 네 조건을 만족하는 $U$, $V$가 있으면 $f^{-1}(U)$와 $f^{-1}(V)$는 무엇을 만족합니까?
:::

:::hint
(3)의 (ii)에서 거꾸로 방향은 대우로 보입니다. 분리 $(U, V)$가 있으면 $U$ 위에서 $0$, $V$ 위에서 $1$인 함수를 [[pasting-lemma]]의 (1)로 만들고, $D$의 네 부분집합의 역상을 구해 보세요.
:::

:::proof
아래에서 "연결 (2)"처럼 쓴 것은 [[connected-space]]의 번호이고, "역상 (1)의 (iv)"처럼 쓴 것은 [[preimage-and-set-operations]]의 번호이다.

**(1).** $f(X)$가 $Y$의 연결 부분집합이 아니라고 하자. 연결 (2)에 의해 $Y$의 열린집합 $U$, $V$로서
$$
\begin{gathered}
f(X) \subseteq U \cup V, \qquad U \cap V \cap f(X) = \emptyset, \\
U \cap f(X) \ne \emptyset, \qquad V \cap f(X) \ne \emptyset
\end{gathered}
$$
인 것이 있다. $P = f^{-1}(U)$, $Q = f^{-1}(V)$로 두면 $f$가 연속이므로 $P$와 $Q$는 $X$의 열린집합이다. $(P, Q)$가 $X$의 분리임을 보인다.

- $P \cup Q = X$. 역상 (1)의 (iv)에 의해 $P \cup Q = f^{-1}(U \cup V)$이다. $x \in X$이면 $f(x) \in f(X) \subseteq U \cup V$이므로 $x \in f^{-1}(U \cup V)$이다. 곧 $X \subseteq P \cup Q$이고, $P$, $Q$는 $X$의 부분집합이므로 $P \cup Q = X$이다.
- $P \cap Q = \emptyset$. $x \in P \cap Q$이면 $f(x) \in U$, $f(x) \in V$이고 $f(x) \in f(X)$이므로 $f(x) \in U \cap V \cap f(X) = \emptyset$이 되어 모순이다.
- $P \ne \emptyset$. $U \cap f(X) \ne \emptyset$이므로 $y \in U$이고 $y \in f(X)$인 $y$가 있다. 상의 정의에 의해 $f(x) = y$인 $x \in X$가 있고, $f(x) \in U$이므로 $x \in P$이다. 같은 방식으로 $V \cap f(X) \ne \emptyset$에서 $Q \ne \emptyset$이다.

따라서 $(P, Q)$는 $X$의 분리이고, $X$가 연결공간이라는 가정에 어긋난다. 그러므로 $f(X)$는 $Y$의 연결 부분집합이다. 이 증명은 $f(X) \subseteq Y$만 쓰고 $f(X) = Y$를 쓰지 않는다.

**(2).** [[subspace-and-continuity]]의 (2)에 의해 제한 $f|_A : A \to Y$는 연속이다. 여기서 $A$에는 $\mathcal{T}_X$의 부분공간 위상을 준다. 가정에 의해 $(A, \mathcal{T}_X|_A)$는 연결공간이므로, (1)을 $f|_A$에 쓰면 $f|_A(A)$는 $Y$의 연결 부분집합이다. 그런데 $f|_A(A) = f(A)$이다. $y \in f|_A(A)$인 것은 $y = f|_A(a)$인 $a \in A$가 있다는 것이고, [[adding-or-removing-an-element|함수의 제한]]의 정의에 의해 $f|_A(a) = f(a)$이므로 이것은 $y = f(a)$인 $a \in A$가 있다는 것, 곧 $y \in f(A)$와 같다.

**(3).** (i) (1)에 의해 $f(X)$는 $(Y, \mathscr{P}(Y))$의 연결 부분집합이다. 연결 (5)의 (iii)에 의해 $f(X)$에는 서로 다른 두 점이 없다. $x$, $x' \in X$이면 $f(x)$와 $f(x')$는 둘 다 $f(X)$의 원소이므로 $f(x) = f(x')$이다. 따라서 $f$는 상수이다.

(ii) $X$가 연결공간이면 (i)을 $Y = D$에 써서 $X$에서 $D$로의 연속함수는 모두 상수이다.

거꾸로를 대우로 보인다. $X$가 연결공간이 아니라 하고 $(U, V)$를 $X$의 분리라 하자. $U$의 각 점에 $0$을 대응시키는 함수 $g : U \to D$와 $V$의 각 점에 $1$을 대응시키는 함수 $h : V \to D$는 [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)에 의해 함수이다. $U \cup V = X$이고 $U \cap V = \emptyset$이므로 [[pasting-lemma]]의 (1)에 의해 $F = g \cup h$는 $X$에서 $D$로의 함수이고 $F|_U = g$, $F|_V = h$이다. 곧 $u \in U$이면 $F(u) = 0$이고 $v \in V$이면 $F(v) = 1$이다.

$F$가 연속임을 보인다. [[real-number-arithmetic]]의 (K4)에 의해 $0 \ne 1$이고, $D$의 부분집합은 $\emptyset$, $\{0\}$, $\{1\}$, $D$의 넷이다. 역상 (7)에 의해 $F^{-1}(\emptyset) = \emptyset$이고 $F^{-1}(D) = X$이다. $F^{-1}(\{0\}) = U$임을 보인다. $u \in U$이면 $F(u) = 0$이므로 $u \in F^{-1}(\{0\})$이다. 거꾸로 $x \in F^{-1}(\{0\})$이고 $x \notin U$이면 $x \in X = U \cup V$이므로 $x \in V$이고 $F(x) = 1 \ne 0$이 되어 모순이다. 같은 방식으로 $U$와 $V$, $0$과 $1$의 자리를 바꾸면 $F^{-1}(\{1\}) = V$이다. $\emptyset$, $U$, $V$, $X$는 모두 $X$의 열린집합이므로 $D$의 모든 열린집합의 역상이 열린집합이고, $F$는 연속이다.

$F$는 상수가 아니다. $U \ne \emptyset$, $V \ne \emptyset$이므로 $u \in U$와 $v \in V$가 있고 $F(u) = 0 \ne 1 = F(v)$이다. 따라서 $X$에서 $D$로의 연속함수 가운데 상수가 아닌 것이 있다. 이것이 대우이므로 거꾸로 방향이 증명되었다.
:::

## 예시와 반례

:::example[정수 값만 갖는 연속 실함수]
$X$가 연결공간이고 $f : X \to \mathbb{R}$가 연속이며 모든 값이 정수라 합시다($\mathbb{R}$에는 보통 위상). [[subspace-and-continuity]]의 (3)의 (i)에 의해 공역을 $\mathbb{Z}$로 줄인 함수 $f_{\mathbb{Z}} : X \to \mathbb{Z}$도 연속입니다. [[metric-subspace-topology]]의 (4)의 (i)에 의해 $\mathbb{Z}$의 부분공간 위상은 이산위상 $\mathscr{P}(\mathbb{Z})$이므로, (3)의 (i)에 의해 $f_{\mathbb{Z}}$는 상수이고 $f$도 상수입니다. 연결공간 위에서는 정수 값만 갖는 연속함수가 한 정수에서 다른 정수로 넘어갈 수 없습니다.
:::

:::counterexample[연속이 아니면 상이 연결이 아닐 수 있는 예]
$a \ne b$이고 $X = \{a, b\}$라 합시다. 밀착위상을 준 $X$는 [[connected-space]]의 (5)의 (ii)에 의해 연결입니다. 항등함수 $i_X$를 $(X, \{\emptyset, X\})$에서 $(X, \mathscr{P}(X))$로의 함수로 보면 상은 $X$ 전체이고, [[connected-space]]의 (5)의 (iii)에 의해 이산위상을 준 $X$의 부분집합 $X$는 연결이 아닙니다. 이 함수는 연속이 아니어서 (1)을 쓸 수 없습니다. $\{a\}$는 공역에서 열려 있지만 그 역상 $\{a\}$는 정의역의 밀착위상에서 열려 있지 않습니다([[continuous-map]]의 (6)의 (i)).
:::

:::counterexample[상이 연결이어도 정의역은 연결이 아닐 수 있는 예]
(1)의 거꾸로, 곧 "$f(X)$가 연결이면 $X$가 연결"은 성립하지 않을 수 있습니다. $a \ne b$인 $X = \{a, b\}$에 이산위상을 주고, 모든 점을 $a$로 보내는 상수함수 $f : X \to X$를 봅니다. [[continuous-map]]의 (2)에 의해 $f$는 연속이고 상 $f(X) = \{a\}$는 [[connected-space]]의 (5)의 (i)에 의해 연결이지만, $X$는 [[connected-space]]의 (5)의 (iii)에 의해 연결이 아닙니다.
:::

## 확인 질문

:::check[아래끝 위상의 $\mathbb{R}_l$에서 $D = \{0, 1\}$(이산위상)로 가는 연속함수 가운데 상수가 아닌 것을 하나 들어라.]
$x < 0$이면 $F(x) = 0$, $0 \le x$이면 $F(x) = 1$인 함수 $F$입니다. [[lower-limit-topology]]의 (3)에 의해 $U = \{x : x < 0\}$와 $V = \{x : 0 \le x\}$는 $\mathbb{R}_l$에서 열린집합입니다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 실수 $x$마다 $x < 0$과 $0 \le x$ 가운데 정확히 하나가 성립하므로 둘은 서로소이고 합집합이 $\mathbb{R}$입니다. $-1 < 0$([[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii))과 $0 \le 0$에서 $-1 \in U$, $0 \in V$이므로 둘 다 공집합이 아니어서 $(U, V)$는 분리입니다. (3)의 (ii)의 증명에서 만든 함수가 바로 이 $F$이고, $F^{-1}(\{0\}) = U$, $F^{-1}(\{1\}) = V$가 열려 있으므로 연속이며, $F(-1) = 0 \ne 1 = F(0)$입니다. 그래서 (3)의 (ii)로도 $\mathbb{R}_l$이 연결이 아님을 다시 알 수 있습니다.
:::

:::check[$X$가 연결공간이고 $f : X \to Y$가 연속인 전사이면 $Y$는 연결공간인가?]
그렇습니다. (1)에 의해 $f(X)$는 $Y$의 연결 부분집합이고, 전사이므로 $f(X) = Y$입니다. [[connected-space]]의 (3)의 둘째 문장에 의해 $Y$가 자신의 연결 부분집합이라는 것은 $Y$가 연결공간이라는 것입니다. 전사가 아니면 $Y$는 연결이 아닐 수 있습니다. 한 점 공간 $X = \{p\}$에서 이산위상을 준 $\{0, 1\}$로 $p$를 $0$으로 보내는 함수는 [[continuous-map]]의 (2)에 의해 연속이지만, $0 \ne 1$이므로 [[connected-space]]의 (5)의 (iii)에 의해 $\{0, 1\}$은 연결이 아닙니다.
:::
