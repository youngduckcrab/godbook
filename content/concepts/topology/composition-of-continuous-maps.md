---
title: 연속함수의 합성 (위상공간)
title_en: Composition of Continuous Maps
aliases: [연속사상의 합성, 합성의 연속, composition of continuous maps]
kind: proposition
field: topology
msc: ["54C05"]
level: undergrad
summary: 위상공간 사이의 연속함수 둘의 합성은 연속이고, 앞의 함수가 한 점에서 연속이고 뒤의 함수가 그 상에서 연속이면 합성도 그 점에서 연속이다.
requires: [set, subset, function, function-composition, preimage-and-set-operations, topological-space, neighborhood, continuous-map, continuity-criteria, comparing-topologies, real-valued-function, order-properties-of-reals, open-ball, open-and-closed-sets-of-reals, standard-topology-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 Theorem continuous-props 의 (i)과 그 증명, content/topological-spaces.tex:306, 312"
    checked: original
    note: "(1)은 출처 continuous-props 의 (i)과 같고, 증명도 출처(312)처럼 (g ∘ f)⁻¹(W) = f⁻¹(g⁻¹(W)) 를 쓴다. (2)는 출처의 continuous-props 에 없다. 확인 질문 '항등함수 둘의 합성과 위상의 비교'는 출처 연습문제 1.3(content/exercises.tex:14, 같은 집합의 두 위상 사이의 항등사상이 언제 연속인가)의 답을 두 번 쓴 것이다."
  - ref: lebl-basic-analysis
    loc: "3.2.2절, Proposition 3.2.7 (p.125); 3.2.3절, Example 3.2.10 (p.125)"
    checked: original
    note: "(2)는 출처 Proposition 3.2.7(p.125, 실수의 부분집합 위의 g 가 c 에서, f 가 g(c) 에서 연속이면 f ∘ g 가 c 에서 연속)과 같은 꼴을 위상공간에서 쓴 것이다. 출처는 그것을 수열로 증명한다. 두 반례의 계단 함수 h 가 0 에서 연속이 아니라는 것은 출처 Example 3.2.10(p.125)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 연속과 "$x$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 합성은 [[function-composition|함수의 합성]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$, $(Z, \mathcal{T}_Z)$는 위상공간이고, $f : X \to Y$와 $g : Y \to Z$는 함수이다. 곧 $f$의 선언한 공역과 $g$의 정의역은 같은 위상공간 $(Y, \mathcal{T}_Y)$이다.

1. (연속함수의 합성) $f$와 $g$가 연속이면 $g \circ f : X \to Z$는 연속이다.
2. (한 점에서) $x \in X$이고 $f$가 $x$에서 연속이며 $g$가 $f(x)$에서 연속이면, $g \circ f$는 $x$에서 연속이다.
:::

:::english
Topological spaces and open sets, neighborhoods, continuity and "continuity at $x$" are as in the earlier entries, and so is composition. Throughout, $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$ and $(Z, \mathcal{T}_Z)$ are topological spaces, and $f : X \to Y$ and $g : Y \to Z$ are functions; that is, the declared codomain of $f$ and the domain of $g$ are the same topological space $(Y, \mathcal{T}_Y)$.

1. (Composition of continuous maps) If $f$ and $g$ are continuous, then $g \circ f : X \to Z$ is continuous.
2. (At a point) If $x \in X$, $f$ is continuous at $x$ and $g$ is continuous at $f(x)$, then $g \circ f$ is continuous at $x$.
:::

## 직관

$Z$의 열린집합 $W$를 하나 잡고 $g \circ f$로 거꾸로 따라가면, 먼저 $g$로 거꾸로 가서 $Y$의 열린집합 $g^{-1}(W)$에 닿고, 다시 $f$로 거꾸로 가서 $X$의 열린집합에 닿습니다. 두 단계가 각각 열린집합을 열린집합으로 돌려보내므로 합성도 그렇습니다. 한 점에서도 같습니다. $g(f(x))$ 둘레의 과녁 $W$를 받으면 $g$의 연속이 $f(x)$ 둘레의 과녁 $V$를 주고, $f$의 연속이 $x$ 둘레의 사대 $U$를 줍니다.

이 진술은 $f$의 공역과 $g$의 정의역이 위상까지 같을 때의 것입니다. $f$의 값이 모두 어떤 부분집합에 든다고 공역을 다시 선언하면 공역의 위상이 무엇인지부터 정해야 하므로, 그런 경우는 이 항목에서 다루지 않습니다.

해석학 입문의 [[composition-of-continuous-functions|연속함수의 합성]]은 실수의 부분집합 위의 실함수에 대한 같은 꼴의 진술이었습니다. 이 항목은 위상공간 사이의 함수에 대한 것입니다.

## 증명

:::idea
(1)은 역상의 합성 공식 $(g \circ f)^{-1}(W) = f^{-1}(g^{-1}(W))$ 하나로 끝나고, (2)는 상의 합성 공식 $(g \circ f)(U) = g(f(U))$와 상의 포함을 씁니다.
:::

:::hint
(2)에서는 과녁을 뒤에서부터 정합니다. $W$에서 $V$를, $V$에서 $U$를 얻으세요.
:::

:::proof
역상과 상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 것이다. [[function-composition|함수의 합성]]의 진술에 의해 $g \circ f : X \to Z$는 함수이고 $(g \circ f)(x) = g(f(x))$이다.

**(1).** $W \in \mathcal{T}_Z$라 하자. $g$가 연속이므로 $g^{-1}(W) \in \mathcal{T}_Y$이고, $f$가 연속이므로 $f^{-1}(g^{-1}(W)) \in \mathcal{T}_X$이다. 역상의 (4)의 첫째 등식에 의해 이것은 $(g \circ f)^{-1}(W)$이다. 따라서 $g \circ f$는 연속이다.

**(2).** $W$가 $(g \circ f)(x) = g(f(x))$를 원소로 갖는 $Z$의 열린집합이라 하자. $g$가 $f(x)$에서 연속이므로 $f(x) \in V$이고 $g(V) \subseteq W$인 $Y$의 열린집합 $V$가 있다. $f$가 $x$에서 연속이므로 $x \in U$이고 $f(U) \subseteq V$인 $X$의 열린집합 $U$가 있다. 역상의 (4)의 둘째 등식과 (7)의 상의 포함에 의해 $(g \circ f)(U) = g(f(U)) \subseteq g(V) \subseteq W$이다. 따라서 $g \circ f$는 $x$에서 연속이다.
:::

## 예시와 반례

:::counterexample[합성이 연속이어도 앞의 함수는 연속이 아닐 수 있다]
(1)의 거꾸로는 성립하지 않습니다. $\mathbb{R}$에 보통 위상을 주고, $h : \mathbb{R} \to \mathbb{R}$를 $x < 0$이면 $h(x) = 0$, $0 \le x$이면 $h(x) = 1$로 정합니다([[real-valued-function]]의 (1). [[order-properties-of-reals]]의 (1)의 (iii)에 의해 두 경우 가운데 정확히 하나가 성립합니다). $V = \{y \in \mathbb{R} : 0 < y\}$는 [[open-and-closed-sets-of-reals]]의 (1)과 [[standard-topology-on-reals]]의 (5)에 의해 열린집합이고, $0 < 1$이고 $0 < 0$은 거짓이므로([[order-properties-of-reals]]의 (5)의 (ii)와 (1)의 (i)) $h^{-1}(V) = \{x \in \mathbb{R} : 0 \le x\}$입니다. 이것은 [[open-and-closed-sets-of-reals]]의 (4)에 의해 열린집합이 아니므로 $h$는 연속이 아닙니다.

$k : \mathbb{R} \to \mathbb{R}$가 값이 늘 $5$인 상수함수이면 $k \circ h$도 값이 늘 $5$인 상수함수이므로 [[continuous-map]]의 (2)에 의해 연속입니다. 앞의 함수 $h$가 연속이 아닌데도 합성은 연속입니다.
:::

:::counterexample[뒤의 함수가 그 점에서 연속이 아니어도 합성은 연속일 수 있다]
(2)의 가정 가운데 "$g$가 $f(x)$에서 연속"도 합성이 연속이기 위해 꼭 필요한 것은 아닙니다. 위의 $h$는 $0$에서 연속이 아닙니다. $V$는 $h(0) = 1$을 원소로 갖는 열린집합인데, $0$을 원소로 갖는 열린집합 $U$는 [[neighborhood]]의 (4)의 (b)에 의해 어떤 $r > 0$에 대하여 $B(0, r)$를 포함하고, [[open-ball]]의 (5)와 [[order-properties-of-reals]]의 (8)과 (3)의 (iii)에 의해 $-r < -r/2 < 0 < r$이어서 $-r/2 \in B(0, r) \subseteq U$이며 $h(-r/2) = 0 \notin V$이기 때문입니다. 한편 $c : \mathbb{R} \to \mathbb{R}$가 값이 늘 $0$인 상수함수이면 $h \circ c$는 값이 늘 $h(0) = 1$인 상수함수이므로 모든 점에서 연속입니다([[continuous-map]]의 (2)와 [[continuity-criteria]]의 (2)).
:::

## 확인 질문

:::check[같은 집합 $X$ 위의 위상 $\mathcal{T}_1$, $\mathcal{T}_2$, $\mathcal{T}_3$에서 $i_X : (X, \mathcal{T}_1) \to (X, \mathcal{T}_2)$와 $i_X : (X, \mathcal{T}_2) \to (X, \mathcal{T}_3)$가 연속이면 $\mathcal{T}_1$과 $\mathcal{T}_3$ 사이에 어떤 관계가 있는가?]
(1)에 의해 합성 $i_X \circ i_X : (X, \mathcal{T}_1) \to (X, \mathcal{T}_3)$는 연속이고, 모든 $x$에서 값이 $x$이므로 이것은 $i_X$입니다. [[continuous-map]]의 (5)에 의해 $\mathcal{T}_3 \subseteq \mathcal{T}_1$, 곧 $\mathcal{T}_1$은 $\mathcal{T}_3$보다 섬세합니다. 이것은 [[comparing-topologies]]의 (1)의 추이성과 같은 결론입니다.
:::

:::check[$f : X \to Y$가 $x$에서 연속이고 $g : Y \to Z$가 연속이면 $g \circ f$는 $x$에서 연속인가?]
그렇습니다. [[continuity-criteria]]의 (2)에 의해 연속인 $g$는 모든 점에서, 특히 $f(x)$에서 연속이므로 (2)에 의해 $g \circ f$는 $x$에서 연속입니다.
:::
