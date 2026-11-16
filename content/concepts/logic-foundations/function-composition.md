---
title: 함수의 합성
title_en: Composition of Functions
aliases: [합성함수, 합성, composition, composite function]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B와 g : B → C의 합성 g∘f는 먼저 f를, 다음에 g를 적용하여 x ∈ A를 g(f(x)) ∈ C로 보내는 함수 A → C이다."
requires: [set, subset, cartesian-product, function]
sources:
  - ref: hammack-book-of-proof
    loc: 12.4절 Composition, Definition 12.5, pp.235–236 (정의는 p.235, 순서에 주의하라는 설명과 예 12.8–12.10은 p.236)
    checked: original
    note: "출처 Definition 12.5는 f : A → B, g : B → C일 때 'f의 공역이 g의 정의역과 같다'는 조건 아래 g∘f(x) = g(f(x))로 정의하고 g∘f : A → C라 말한다. 출처 p.236은 f의 치역이 g의 정의역의 부분집합이기만 해도 합성이 의미가 있다고 덧붙인다. 아래 진술은 이 말을, 이 사이트의 function 항목에서 보인 '공역은 선언하기 나름이다'를 써서 'f의 모든 값이 g의 정의역에 속하면 f를 그 정의역을 공역으로 하는 함수로 선언하면 된다'고 정확히 풀어 쓴 것이다. g∘f를 순서쌍의 집합으로 적고 함수임을 확인하는 부분(remark), 합성이 정의되지 않는 경우의 설명, 모든 예시와 반례는 이 사이트에서 새로 만들었다. 합성이 정의되지 않는 경우의 발상은 출처 예 12.9(p.236)와, 합성의 순서가 결과를 바꾼다는 예(ℤ에서 ℤ로의 2n과 n+1)는 f∘g와 g∘f가 다르다는 예 12.10(p.236)과 같은 발상이다. 구체적인 집합과 식은 모두 새로 골랐고, 첫째 예시의 집합 크기와 대응은 출처 예 12.8과 다르게 잡았다."
status: source-checked
added: 2026-11-16
---

:::statement
$f : A \to B$와 $g : B \to C$가 [[function]]이라 하자. 곧 $f$를 $A$에서 $B$로의 함수로 선언했고 $g$의 정의역은 $B$이다. $f$와 $g$의 **합성**(composition) $g \circ f$는 다음 집합이다.
$$g \circ f = \{(x, g(f(x))) : x \in A\} \subseteq A \times C$$
이것은 함수 $g \circ f : A \to C$이다. 곧 $A$의 각 원소 $x$에 대하여 $(x, z) \in g \circ f$인 $z \in C$가 정확히 하나 있고, 그 $z$는 $g(f(x))$이다. 따라서 모든 $x \in A$에 대하여
$$(g \circ f)(x) = g(f(x))$$
이다. 이 식에서 먼저 $f$가 $x$에 적용되고, 그다음에 $g$가 $f(x)$에 적용된다. $g \circ f$를 "$g$ 합성 $f$"라고 읽고 $g$를 앞에 쓰지만 먼저 하는 것은 $f$이다.

**공역이 다를 때.** $f$가 $A$에서 어떤 집합으로의 함수이고 $g$의 정의역이 $B'$이며, 모든 $x \in A$에 대하여 $f(x) \in B'$이면, [[function]]의 진술에 의해 같은 집합 $f$는 $A$에서 $B'$로의 함수이기도 하다. 이때는 $f$를 $f : A \to B'$로 선언하여 위의 합성 $g \circ f$를 정한다. 위의 식에는 공역이 나오지 않으므로 이렇게 정한 $g \circ f$는 선언한 공역과 무관하게 같은 집합이다. 어떤 $x \in A$에 대하여 $f(x)$가 $g$의 정의역에 속하지 않으면 $g \circ f$는 정의하지 않는다.
:::

:::english
Let $f : A \to B$ and $g : B \to C$ be functions; that is, $f$ has been declared as a function from $A$ to $B$, and the domain of $g$ is $B$. The **composition** of $f$ with $g$, written $g \circ f$, is the set
$$g \circ f = \{(x, g(f(x))) : x \in A\} \subseteq A \times C.$$
It is a function $g \circ f : A \to C$. That is, for each element $x \in A$ there is exactly one $z \in C$ with $(x, z) \in g \circ f$, and this $z$ is $g(f(x))$. Hence for every $x \in A$,
$$(g \circ f)(x) = g(f(x)).$$
In this formula $f$ is applied to $x$ first and then $g$ is applied to $f(x)$. We read $g \circ f$ as "$g$ composed with $f$" and write $g$ first, but the function applied first is $f$.

**When the codomains differ.** Suppose $f$ is a function from $A$ to some set, the domain of $g$ is $B'$, and $f(x) \in B'$ for every $x \in A$. By the statement for functions, the same set $f$ is also a function from $A$ to $B'$. In this case we declare $f : A \to B'$ and form the composition $g \circ f$ above. Since the formula does not involve the codomain, the set $g \circ f$ obtained this way does not depend on the declared codomain. If $f(x)$ fails to belong to the domain of $g$ for some $x \in A$, the composition $g \circ f$ is not defined.
:::

## 직관

두 공정이 이어진 조립 라인을 생각합시다. 부품 $x$가 첫째 공정 $f$를 거쳐 $f(x)$가 되고, 이것이 둘째 공정 $g$를 거쳐 $g(f(x))$가 됩니다. 라인 전체를 하나의 공정으로 보면 그것이 $g \circ f$입니다. 첫째 공정이 내놓는 것은 둘째 공정이 받을 수 있는 것이어야 하므로, $f$의 모든 값이 $g$의 정의역에 있어야 합니다. 이 조건을 가장 단순하게 보장하는 것이 $f$의 공역과 $g$의 정의역이 같은 경우입니다.

비유에서는 라인을 따라 읽는 순서가 왼쪽에서 오른쪽입니다. 기호 $g \circ f$는 오른쪽에서 왼쪽으로 읽어야 합니다. 이 점이 비유와 기호가 어긋나는 곳이므로 항상 $(g \circ f)(x) = g(f(x))$로 다시 풀어 확인합니다.

:::remark[$g \circ f$는 함수이다]
$g \circ f = \{(x, g(f(x))) : x \in A\}$가 $A$에서 $C$로의 함수임을 보인다.

$x \in A$이면 $f(x) \in B$이고 $g$의 정의역이 $B$이므로 $g(f(x))$가 $C$의 원소 하나로 정해진다. 따라서 $(x, g(f(x))) \in A \times C$이고 $g \circ f \subseteq A \times C$이다.

$x \in A$라 하자. (존재): $(x, g(f(x))) \in g \circ f$이고 $g(f(x)) \in C$이다. (유일): $z, z' \in C$이고 $(x, z) \in g \circ f$, $(x, z') \in g \circ f$라 하자. $(x, z) \in g \circ f$이므로 집합의 정의에 의해 어떤 $x_1 \in A$에 대하여 $(x, z) = (x_1, g(f(x_1)))$이다. [[cartesian-product]]의 진술에 의해 순서쌍이 같으면 성분이 차례로 같으므로 $x = x_1$이고 $z = g(f(x_1)) = g(f(x))$이다. 같은 방법으로 $(x, z') \in g \circ f$이면 어떤 $x_2 \in A$에 대하여 $(x, z') = (x_2, g(f(x_2)))$이고, 성분이 차례로 같으므로 $x = x_2$이고 $z' = g(f(x_2)) = g(f(x))$이다. 따라서 $z = z'$이다.

그러므로 $g \circ f$는 함수이고, $(x, g(f(x))) \in g \circ f$이므로 $(g \circ f)(x) = g(f(x))$이다.
:::

## 예시와 반례

:::example[유한집합 사이의 합성]
$A = \{1, 2, 3, 4\}$, $B = \{\text{가}, \text{나}, \text{다}\}$, $C = \{5, 6\}$이고
$$f = \{(1, \text{가}), (2, \text{다}), (3, \text{가}), (4, \text{나})\},\qquad g = \{(\text{가}, 6), (\text{나}, 5), (\text{다}, 6)\}$$
라 합시다. 가, 나, 다는 서로 다른 대상입니다. $f : A \to B$, $g : B \to C$이므로 $g \circ f$가 정의됩니다. $g(f(1)) = g(\text{가}) = 6$, $g(f(2)) = g(\text{다}) = 6$, $g(f(3)) = g(\text{가}) = 6$, $g(f(4)) = g(\text{나}) = 5$이므로
$$g \circ f = \{(1, 6), (2, 6), (3, 6), (4, 5)\}$$
입니다.
:::

:::example[식으로 주어진 합성과 순서]
$f, g : \mathbb{Z} \to \mathbb{Z}$를 $f(n) = 2n$, $g(n) = n + 1$이라 합시다. 정의역과 공역이 모두 $\mathbb{Z}$이므로 $g \circ f$와 $f \circ g$가 둘 다 정의됩니다. $(g \circ f)(n) = g(2n) = 2n + 1$이고 $(f \circ g)(n) = f(n + 1) = 2(n + 1) = 2n + 2$입니다. 예를 들어 $n = 0$에서 $(g \circ f)(0) = 1$이고 $(f \circ g)(0) = 2$입니다.
:::

:::example[공역을 다시 선언하여 합성하기]
$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n^2 + 1$이고 $g : \mathbb{N} \to \mathbb{N}$, $g(m) = 2m$이라 합시다. $f$의 공역 $\mathbb{Z}$는 $g$의 정의역 $\mathbb{N}$과 다릅니다. 그러나 정수 $n$에 대하여 $n^2 \ge 0$이므로(정수의 제곱은 $0$ 이상이라는 사실을 씁니다) $n^2 + 1 \ge 1$이고, $f(n)$은 $\mathbb{N}$의 원소입니다. 따라서 같은 집합 $f$는 $\mathbb{Z}$에서 $\mathbb{N}$으로의 함수이기도 하고, $f$를 그렇게 선언하면 $g \circ f : \mathbb{Z} \to \mathbb{N}$이 정의되어 $(g \circ f)(n) = g(n^2 + 1) = 2(n^2 + 1)$입니다.
:::

:::example[합성이 정의되지 않는 경우]
$f : \{1, 2\} \to \{\text{가}, \text{나}\}$, $f = \{(1, \text{가}), (2, \text{나})\}$이고 $g$의 정의역이 $\{\text{라}, \text{마}\}$라 합시다. 가, 나, 라, 마는 서로 다른 대상입니다. $f(1) = \text{가}$는 $g$의 정의역에 속하지 않으므로 $g(f(1))$이 의미를 갖지 못하고, $g \circ f$는 정의되지 않습니다. 이 점은 $g$가 어떤 함수이든 마찬가지입니다.
:::

:::counterexample[합성의 순서를 바꿔도 같다는 착각]
위 $\mathbb{Z}$의 예에서 $(g \circ f)(0) = 1 \ne 2 = (f \circ g)(0)$이므로 $g \circ f \ne f \circ g$입니다. 두 함수의 정의역이 같고 한 점 $0$에서 값이 다르기 때문에, [[function]]의 같음의 정의에 의해 다른 함수입니다. 두 합성이 모두 정의되어도 일반적으로 순서를 바꾸면 결과가 달라집니다.
:::

:::counterexample[두 합성이 모두 정의되어도 정의역부터 다른 경우]
$A = \{1, 2\}$, $B = \{\text{가}, \text{나}, \text{다}\}$이고 $f : A \to B$, $f = \{(1, \text{가}), (2, \text{나})\}$, $g : B \to A$, $g = \{(\text{가}, 1), (\text{나}, 2), (\text{다}, 2)\}$라 합시다. $g \circ f : A \to A$는 $\{(1, 1), (2, 2)\}$이고, $f \circ g : B \to B$는 $\{(\text{가}, \text{가}), (\text{나}, \text{나}), (\text{다}, \text{나})\}$입니다. 다에서는 $g(\text{다}) = 2$, $f(2) = \text{나}$라서 $(f \circ g)(\text{다}) = \text{나}$입니다. 두 합성은 정의역이 $A$와 $B$로 달라서 같은 함수일 수 없습니다.
:::

## 확인 질문

:::check[$f : \{1, 2\} \to \{\text{가}, \text{나}\}$, $f = \{(1, \text{나}), (2, \text{가})\}$이고 $g : \{\text{가}, \text{나}\} \to \{5, 6, 7\}$, $g = \{(\text{가}, 7), (\text{나}, 5)\}$일 때 $g \circ f$를 순서쌍의 집합으로 적어라.]
$g(f(1)) = g(\text{나}) = 5$, $g(f(2)) = g(\text{가}) = 7$이므로 $g \circ f = \{(1, 5), (2, 7)\}$입니다. 이 함수는 $\{1, 2\}$에서 $\{5, 6, 7\}$로의 함수입니다.
:::

:::check[$f, g : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n^2$, $g(n) = n - 1$일 때 $(g \circ f)(3)$과 $(f \circ g)(3)$을 구하라.]
$(g \circ f)(3) = g(f(3)) = g(9) = 8$이고 $(f \circ g)(3) = f(g(3)) = f(2) = 4$입니다.
:::
