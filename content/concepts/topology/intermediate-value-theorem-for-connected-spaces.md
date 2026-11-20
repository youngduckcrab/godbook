---
title: 연결공간에서의 사잇값 정리
title_en: Intermediate Value Theorem on Connected Spaces
aliases: [연결공간의 사잇값 정리, 위상공간의 사잇값 정리, intermediate value theorem for connected spaces]
kind: theorem
field: topology
msc: ["54D05"]
level: undergrad
summary: 연결공간 위의 연속 실함수가 두 값을 취하면 그 사이의 모든 값을 취한다. 연속 실함수의 상은 공집합, 한 점 집합, 구간 가운데 하나이고, 닫힌구간이 연결이라는 것에서 해석학 입문의 사잇값 정리를 다시 얻는다.
requires: [set, subset, function, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, prime-number, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, intermediate-value-theorem, standard-topology-on-reals, continuous-map, subspace-topology, subspace-and-continuity, metric-subspace-topology, continuity-agrees-with-analysis, connected-space, continuous-image-of-connected, connected-subsets-of-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Connectedness 절의 Corollary [Intermediate value theorem]과 증명 (content/connectedness.tex:92–97); 연습문제 2.14 Brouwer-interval-exercise (content/exercises.tex:92)"
    checked: original
    note: "(1)은 출처의 Corollary [Intermediate value theorem](92–97)과 같은 진술이다(출처의 x, y, r, z 를 a, b, c, x 로 썼다). 출처는 f(X) 가 연결이므로 연습문제 connected-implies-interval(2.4)에 의해 구간이라 하고 r ∈ [f(x), f(y)] ⊂ f(X) 로 끝낸다. 이 항목은 connected-subsets-of-reals 의 (1)(사이의 점을 모두 갖는다)로 끝낸다. 예시 '닫힌구간에서 자기 자신으로 가는 연속함수의 고정점'은 출처 연습문제 2.14(exercises.tex:92: f : [0, 1] → [0, 1] 이 연속이면 고정점이 있음을 보이라)와 같은 물음이다."
  - ref: lebl-basic-analysis
    loc: "7.5.6절 연습문제 7.5.6 (p.294); 3.3.2절 Lemma 3.3.7 (p.132), Theorem 3.3.8 (p.133), Corollary 3.3.13 (p.135); 3.3.3절 연습문제 3.3.10 (p.137)"
    checked: original
    note: "(1)은 연습문제 7.5.6(p.294: 연결인 거리공간 X 와 연속함수 f : X → ℝ 에서 f(x₀) < y < f(x₁) 이면 f(z) = y 인 z 가 있음을 보이라)을 위상공간으로 옮긴 것이다. (3)의 진술은 Theorem 3.3.8(p.133, Bolzano 의 사잇값 정리)과 같고, 해석학 입문의 intermediate-value-theorem 항목이 그것을 다룬다. (2)는 Corollary 3.3.13(p.135: f : [a, b] → ℝ 가 연속이면 f([a, b]) 는 닫히고 유계인 구간이거나 한 수이다)과 같은 방향의 진술을 연결공간 위의 함수에 대해 한 것이다. 예시 '고정점'은 연습문제 3.3.10(p.137)과 같은 물음이다. 확인 질문 '양수 값과 음수 값을 모두 취하면'은 Lemma 3.3.7(p.132: [a, b] 위의 연속함수가 f(a) < 0 < f(b) 이면 f(c) = 0 인 c ∈ (a, b) 가 있다)과 같은 결론을 연결공간에서 묻는다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 공집합·한 점인 경우를 빠뜨린 진술의 가정, 근거 없는 예시와 반례 제목을 고쳤다."
added: 2026-11-19
---

:::statement
연결공간은 [[connected-space|연결공간]]의 것이고, 위상의 뜻의 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. $\mathbb{R}$에는 보통 위상([[standard-topology-on-reals]]의 (5))을, $\mathbb{R}$의 부분집합에는 그 부분공간 위상을 준다. 구간과 그 기호는 [[interval]]의 것이다.

1. (사잇값 정리) $(X, \mathcal{T})$가 연결공간이고 $f : X \to \mathbb{R}$가 연속이라 하자. $a$, $b \in X$이고 실수 $c$가 $f(a) < c < f(b)$를 만족하면 $f(x) = c$인 $x \in X$가 있다.
2. (상의 모양) $(X, \mathcal{T})$가 연결공간이고 $f : X \to \mathbb{R}$가 연속이면 상 $f(X)$는 공집합이거나, 원소가 하나인 집합이거나, 구간이다.
3. (해석학 입문의 사잇값 정리) $a < b$인 실수 $a$, $b$와 해석학 입문의 뜻의 연속함수 $f : [a, b] \to \mathbb{R}$, 실수 $y$에 대하여 $f(a) < y < f(b)$이거나 $f(b) < y < f(a)$이면 $f(c) = y$인 $c \in (a, b)$가 있다. 이것은 해석학 입문의 [[intermediate-value-theorem]]의 (1)과 같은 진술이고, 여기서는 (1)과 닫힌구간의 연결로 증명한다.
:::

:::english
Connected spaces are as in the entry on connected spaces, and continuity in the topological sense is as in the entry on continuous maps between topological spaces. $\mathbb{R}$ carries the standard topology, and subsets of $\mathbb{R}$ carry its subspace topology. Intervals and their notation are as in the entry on intervals.

1. (Intermediate value theorem) Let $(X, \mathcal{T})$ be a connected space and $f : X \to \mathbb{R}$ continuous. If $a$, $b \in X$ and a real number $c$ satisfies $f(a) < c < f(b)$, then there is $x \in X$ with $f(x) = c$.
2. (Shape of the image) If $(X, \mathcal{T})$ is a connected space and $f : X \to \mathbb{R}$ is continuous, then the image $f(X)$ is empty, or a set with one element, or an interval.
3. (The intermediate value theorem of Introduction to Analysis) For real numbers $a < b$, a function $f : [a, b] \to \mathbb{R}$ continuous in the sense of Introduction to Analysis, and a real number $y$ with $f(a) < y < f(b)$ or $f(b) < y < f(a)$, there is $c \in (a, b)$ with $f(c) = y$. This is the same statement as item (1) of the intermediate value theorem of Introduction to Analysis; here it is proved from (1) and the connectedness of closed intervals.
:::

## 직관

연결공간은 두 조각으로 나뉘지 않고, 연속함수는 연결을 실수 쪽으로 옮깁니다. 그래서 상 $f(X)$는 실수의 연결 부분집합이고, [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (1)에 의해 두 값 사이의 점을 모두 갖습니다. 사잇값 정리는 이 두 사실을 이어 붙인 것입니다. 비유하자면 끊기지 않은 줄(연결공간)에 물감을 칠할 때 색이 연속으로 바뀌면, 빨강과 파랑 사이의 어떤 보라색도 줄 어딘가에 나타납니다. "끊기지 않은 줄"이 연결에, "색이 연속으로 바뀐다"가 $f$의 연속에 맞습니다.

해석학 입문은 같은 정리를 닫힌구간 위에서 상한으로 직접 증명했습니다. 여기서는 정의역이 구간일 필요가 없고 연결이기만 하면 되며, 증명의 무게는 "구간은 연결이다"로 옮겨 갑니다. (3)은 두 증명이 같은 진술에 이른다는 것을 확인합니다. 위상의 뜻의 연속과 해석학 입문의 연속이 같다는 것이 둘을 잇는 다리입니다.

## 증명

:::idea
상 $f(X)$는 연결이므로 사이의 점을 모두 갖고, $f(a)$와 $f(b)$가 그 안에 있으니 $c$도 그 안에 있다.
:::

:::hint
[[continuous-image-of-connected]]의 (1)과 [[connected-subsets-of-reals]]의 (1)을 차례로 쓰세요.
:::

:::hint
(3)에서는 $[a, b]$에 준 위상에서 $f$가 연속이라는 것을 [[continuity-agrees-with-analysis]]의 (3)과 [[metric-subspace-topology]]의 (2)로 확인한 뒤 (1)을 씁니다. $f(b) < y < f(a)$인 경우는 (1)의 $a$, $b$ 자리에 $b$, $a$를 넣습니다.
:::

:::proof
**(1).** [[continuous-image-of-connected]]의 (1)에 의해 $f(X)$는 $\mathbb{R}$의 연결 부분집합이고, [[connected-subsets-of-reals]]의 (1)에 의해 사이의 점을 모두 갖는다. $f(a)$, $f(b)$는 $f(X)$의 원소이고 $f(a) < c < f(b)$이므로 $c \in f(X)$이다. 상의 정의([[image-and-preimage]])에 의해 $f(x) = c$인 $x \in X$가 있다.

**(2).** 위와 같이 $f(X)$는 $\mathbb{R}$의 연결 부분집합이므로 [[connected-subsets-of-reals]]의 (2)에 의해 공집합이거나, 원소가 하나인 집합이거나, 구간이다.

**(3).** $I = [a, b]$로 둔다. [[interval]]의 (1)에 의해 $I$는 구간이고, [[connected-subsets-of-reals]]의 (2)에 의해 $I$는 $\mathbb{R}$의 연결 부분집합, 곧 부분공간 위상을 준 $I$는 연결공간이다. [[metric-subspace-topology]]의 (2)에 의해 이 위상은 보통 거리의 부분공간 거리 $d_I$의 거리위상과 같고, [[continuity-agrees-with-analysis]]의 (3)에 의해 해석학 입문의 뜻으로 연속인 $f : I \to \mathbb{R}$는 위상의 뜻으로 연속이다. [[interval]]의 (3)에 의해 $a$, $b \in I$이다.

- $f(a) < y < f(b)$이면 (1)을 $X = I$, 두 점 $a$, $b$, $c = y$에 쓴다.
- $f(b) < y < f(a)$이면 (1)을 $X = I$, 두 점 $b$, $a$(이 순서로), $c = y$에 쓴다.

어느 경우에도 $f(c) = y$인 $c \in I$가 있다. $c = a$라면 $f(a) = y$인데, 두 경우 모두 $f(a) < y$이거나 $y < f(a)$이므로 [[real-order-axioms]]의 (W1)에 어긋난다. 같은 방식으로 $c \ne b$이다. $a \le c \le b$이고 $c \ne a$, $c \ne b$이므로 $a < c < b$, 곧 $c \in (a, b)$이다.
:::

## 예시와 반례

:::example[닫힌구간에서 자기 자신으로 가는 연속함수의 고정점]
$I = [0, 1]$이고 $f : I \to I$가 연속이라 합시다($I$에는 부분공간 위상). 그러면 $f(x) = x$인 $x \in I$가 있습니다.

[[subspace-and-continuity]]의 (3)의 (i)에 의해 $f$를 $\mathbb{R}$로의 함수로 보아도 연속이고, [[metric-subspace-topology]]의 (2)에 의해 $I$의 위상은 부분공간 거리 $d_I$의 거리위상이므로 [[continuity-agrees-with-analysis]]의 (3)에 의해 해석학 입문의 뜻으로도 연속입니다. [[real-valued-function]]의 (3)의 항등함수 $i_I$는 [[continuous-function]]의 (4)에 의해 연속함수이므로, 차 $g = f - i_I$, 곧 $g(x) = f(x) - x$인 함수는 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 연속이고, 다시 [[continuity-agrees-with-analysis]]의 (3)에 의해 위상의 뜻으로 연속입니다.

$f(0) \in I$이므로 $g(0) = f(0) \ge 0$이고, $f(1) \le 1$이므로 $g(1) = f(1) - 1 \le 0$입니다. $g(0) = 0$이면 $x = 0$이, $g(1) = 0$이면 $x = 1$이 고정점입니다. 둘 다 아니면 $g(1) < 0 < g(0)$이고, $I$가 연결이므로 (1)을 두 점 $1$, $0$에 써서 $g(x) = 0$, 곧 $f(x) = x$인 $x \in I$를 얻습니다.
:::

:::counterexample[정의역이 연결이 아니면 사잇값을 건너뛸 수 있는 예]
$\mathbb{Z}$에 보통 위상의 부분공간 위상을 주고, 포함함수 $\iota : \mathbb{Z} \to \mathbb{R}$를 봅니다. [[subspace-and-continuity]]의 (1)의 (i)에 의해 $\iota$는 연속이고 $\iota(0) = 0 < 2^{-1} < 1 = \iota(1)$입니다([[order-properties-of-reals]]의 (8)). 그러나 $2^{-1}$은 정수가 아니므로($0 < n < 1$인 정수 $n$은 [[prime-number]]의 (Z1)과 [[order-properties-of-reals]]의 (10)에 의해 없습니다) $\iota(n) = 2^{-1}$인 $n$은 없습니다. 이 정의역 $\mathbb{Z}$는 [[connected-space]]의 (5)의 (v)에 의해 연결이 아닙니다. 연결이라는 가정을 빼면 결론이 성립하지 않을 수 있다는 예입니다.
:::

## 확인 질문

:::check[연결공간 $X$ 위의 연속함수 $f : X \to \mathbb{R}$가 양수 값과 음수 값을 모두 취하면 무엇을 말할 수 있는가?]
$f(x) = 0$인 $x$가 있습니다. $f(a) < 0 < f(b)$인 $a$, $b \in X$가 있으므로 (1)을 $c = 0$에 쓰면 됩니다. 같은 방식으로, 연결공간 위에서 한 번도 $0$이 되지 않는 연속 실함수는 모든 값이 양수이거나 모든 값이 음수입니다.
:::

:::check[(2)에서 $f(X)$가 원소가 하나인 집합이 되는 것은 언제인가?]
$X \ne \emptyset$이고 $f$가 상수일 때, 곧 $X$의 모든 점에서 같은 값을 취할 때입니다. $X = \emptyset$이면 $f(X) = \emptyset$이고, $f$가 서로 다른 두 값을 취하면 $f(X)$는 서로 다른 두 원소를 가지므로 원소가 하나인 집합이 아닙니다(그때 (2)에 의해 구간입니다).
:::
