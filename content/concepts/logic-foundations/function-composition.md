---
title: 함수의 합성
title_en: Composition of Functions
aliases: [합성함수, 합성, composition, composite function]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B와 g : B → C의 합성 g∘f는 먼저 f를, 다음에 g를 적용하여 x ∈ A를 g(f(x)) ∈ C로 보내는 함수 A → C이다."
requires: [set, cartesian-product, function]
sources:
  - ref: hammack-book-of-proof
    loc: 12.4절 Composition, Definition 12.5, pp.235–236 (정의는 p.235, 순서에 주의하라는 설명과 예 12.8–12.10은 p.236)
    checked: original
    note: "출처 Definition 12.5는 f : A → B, g : B → C일 때 'f의 공역이 g의 정의역과 같다'는 조건 아래 g∘f(x) = g(f(x))로 정의하고 g∘f : A → C라 말한다. 출처 p.236은 f의 치역이 g의 정의역의 부분집합이기만 해도 합성이 의미가 있다고 덧붙이지만 이 항목은 출처가 강조하는 공역이 같은 경우만 다룬다. g∘f를 순서쌍의 집합으로 적어 함수임을 확인하는 부분, 합성이 정의되지 않는 경우의 설명, 모든 예시와 반례는 이 사이트에서 새로 만들었다. 첫째 예시(원소가 3개, 2개, 3개인 집합 사이의 함수 두 개의 합성)는 출처 예 12.8(p.236)과 같은 종류의 예이고, 합성이 정의되지 않는 경우는 예 12.9, 합성의 순서가 결과를 바꾼다는 예(ℤ에서 ℤ로의 2x와 x+1)는 f∘g와 g∘f가 다르다는 예 12.10과 같은 발상이다. 구체적인 집합과 식은 모두 새로 골랐다."
status: source-checked
added: 2026-11-16
---

:::statement
$f : A \to B$와 $g : B \to C$가 [[function]]이고, $f$의 공역과 $g$의 정의역이 같은 집합 $B$라 하자. $f$와 $g$의 **합성**(composition) $g \circ f$는 다음 집합이다.
$$g \circ f = \{(x, g(f(x))) : x \in A\} \subseteq A \times C$$
이것은 함수 $g \circ f : A \to C$이다. 곧 $A$의 각 원소 $x$에 대하여 $(x, z) \in g \circ f$인 $z \in C$가 정확히 하나 있고, 그 $z$는 $g(f(x))$이다. 따라서 모든 $x \in A$에 대하여
$$(g \circ f)(x) = g(f(x))$$
이다. 이 식에서 먼저 $f$가 $x$에 적용되고, 그다음에 $g$가 $f(x)$에 적용된다. $g \circ f$를 "$g$ 동그라미 $f$"라고 읽고 $g$를 앞에 쓰지만 먼저 하는 것은 $f$이다.

$f$의 공역이 $g$의 정의역과 같지 않으면 $g \circ f$는 정의하지 않는다.
:::

:::english
Let $f : A \to B$ and $g : B \to C$ be functions, so that the codomain of $f$ and the domain of $g$ are the same set $B$. The **composition** of $f$ with $g$, written $g \circ f$, is the set
$$g \circ f = \{(x, g(f(x))) : x \in A\} \subseteq A \times C.$$
It is a function $g \circ f : A \to C$. That is, for each element $x \in A$ there is exactly one $z \in C$ with $(x, z) \in g \circ f$, and this $z$ is $g(f(x))$. Hence for every $x \in A$,
$$(g \circ f)(x) = g(f(x)).$$
In this formula $f$ is applied to $x$ first and then $g$ is applied to $f(x)$. We read $g \circ f$ as "$g$ circle $f$" and write $g$ first, but the function applied first is $f$.

If the codomain of $f$ is not the same set as the domain of $g$, the composition $g \circ f$ is not defined.
:::

## 직관

두 공정이 이어진 조립 라인을 생각합시다. 부품 $x$가 첫째 공정 $f$를 거쳐 $f(x)$가 되고, 이것이 둘째 공정 $g$를 거쳐 $g(f(x))$가 됩니다. 라인 전체를 하나의 공정으로 보면 그것이 $g \circ f$입니다. 첫째 공정이 내놓는 것은 둘째 공정이 받을 수 있는 것이어야 하므로 $f$의 공역이 $g$의 정의역이어야 합니다.

비유에서는 라인을 따라 읽는 순서가 왼쪽에서 오른쪽입니다. 기호 $g \circ f$는 오른쪽에서 왼쪽으로 읽어야 합니다. 이 점이 비유와 기호가 어긋나는 곳이므로 항상 $(g \circ f)(x) = g(f(x))$로 다시 풀어 확인합니다.

$g \circ f$가 정말 함수인지는 확인이 필요합니다. 집합 $\{(x, g(f(x))) : x \in A\}$에서 $f(x) \in B$이고 $g$의 정의역이 $B$라 $g(f(x))$가 정해지며 $C$의 원소입니다. 그러므로 이 집합은 $A \times C$의 부분집합입니다. $(x, z)$가 이 집합에 속하면 정의에 의해 $z = g(f(x))$이므로 $x$에 대응하는 $z$는 하나뿐이고, 모든 $x \in A$에 대해 그런 쌍 $(x, g(f(x)))$가 있습니다.

## 예시와 반례

:::example[유한집합 사이의 합성]
$A = \{1, 2, 3\}$, $B = \{p, q\}$, $C = \{x, y, z\}$이고
$$f = \{(1, p), (2, q), (3, p)\},\qquad g = \{(p, z), (q, x)\}$$
라 합시다. $f : A \to B$, $g : B \to C$이므로 $g \circ f$가 정의됩니다. $g(f(1)) = g(p) = z$, $g(f(2)) = g(q) = x$, $g(f(3)) = g(p) = z$이므로
$$g \circ f = \{(1, z), (2, x), (3, z)\}$$
입니다.
:::

:::example[식으로 주어진 합성과 순서]
$f, g : \mathbb{Z} \to \mathbb{Z}$를 $f(n) = 2n$, $g(n) = n + 1$이라 합시다. 정의역과 공역이 모두 $\mathbb{Z}$이므로 $g \circ f$와 $f \circ g$가 둘 다 정의됩니다. $(g \circ f)(n) = g(2n) = 2n + 1$이고 $(f \circ g)(n) = f(n + 1) = 2(n + 1) = 2n + 2$입니다. 예를 들어 $n = 0$에서 $(g \circ f)(0) = 1$이고 $(f \circ g)(0) = 2$입니다.
:::

:::example[합성이 정의되지 않는 경우]
$f : \{1, 2\} \to \{p, q\}$이고 $g : \{r, s\} \to \{0, 1\}$이면, $f$의 공역 $\{p, q\}$가 $g$의 정의역 $\{r, s\}$와 다른 집합이므로 이 항목의 정의에서 $g \circ f$는 정의되지 않습니다. 이 경우 $g(f(1))$ 자체가 의미를 갖지 못합니다. $f(1)$이 $p$ 또는 $q$인데 $g$의 정의역에는 $p$도 $q$도 없기 때문입니다.
:::

:::counterexample[합성의 순서를 바꿔도 같다는 착각]
위 $\mathbb{Z}$의 예에서 $(g \circ f)(0) = 1 \ne 2 = (f \circ g)(0)$이므로 $g \circ f \ne f \circ g$입니다. 두 함수의 정의역이 같고 한 점 $0$에서 값이 다르기 때문에, [[function]]의 같음의 정의에 의해 다른 함수입니다. 두 합성이 모두 정의되어도 일반적으로 순서를 바꾸면 결과가 달라집니다.
:::

:::counterexample[두 합성이 모두 정의되어도 정의역부터 다른 경우]
$A = \{1, 2\}$, $B = \{p, q, r\}$이고 $f : A \to B$, $f = \{(1, p), (2, q)\}$, $g : B \to A$, $g = \{(p, 1), (q, 2), (r, 2)\}$라 합시다. $g \circ f : A \to A$는 $\{(1, 1), (2, 2)\}$이고, $f \circ g : B \to B$는 $\{(p, p), (q, q), (r, q)\}$입니다. 두 합성은 정의역이 $A$와 $B$로 달라서 같은 함수일 수 없습니다. $f \circ g$를 계산하면 $g(r) = 2$, $f(2) = q$라서 $(f \circ g)(r) = q$입니다.
:::

## 확인 질문

:::check[$f : \{1, 2\} \to \{a, b\}$, $f = \{(1, b), (2, a)\}$이고 $g : \{a, b\} \to \{5, 6, 7\}$, $g = \{(a, 7), (b, 5)\}$일 때 $g \circ f$를 순서쌍의 집합으로 적어라.]
$g(f(1)) = g(b) = 5$, $g(f(2)) = g(a) = 7$이므로 $g \circ f = \{(1, 5), (2, 7)\}$입니다. 이 함수는 $\{1, 2\}$에서 $\{5, 6, 7\}$로의 함수입니다.
:::

:::check[$f, g : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n^2$, $g(n) = n - 1$일 때 $(g \circ f)(3)$과 $(f \circ g)(3)$을 구하라.]
$(g \circ f)(3) = g(f(3)) = g(9) = 8$이고 $(f \circ g)(3) = f(g(3)) = f(2) = 4$입니다.
:::
