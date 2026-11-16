---
title: 함수의 합성은 결합법칙을 만족한다
title_en: Composition of Functions Is Associative
aliases: [합성의 결합법칙, associativity of composition]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B, g : B → C, h : C → D이면 (h∘g)∘f = h∘(g∘f)이다."
requires: [function, function-composition]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 12.4절 Composition, Theorem 12.1, p.237
    checked: original
    note: "출처 Theorem 12.1의 진술은 (h∘g)∘f = h∘(g∘f)이고, 두 쪽이 모두 A에서 D로의 함수라는 부분은 출처에서는 증명 안에 있다. 증명은 출처와 같은 방법이다. 두 쪽이 A에서 D로의 함수임을 합성의 정의에서 확인하고, 모든 x ∈ A에서 값이 같음을 보인다. 아래 증명은 함수의 같음의 정의가 요구하는 것(정의역이 같고 모든 원소에서 값이 같다)이 무엇인지를 명시하고 각 등호의 근거를 더 자세히 적었다. 예시와 반례는 이 사이트에서 새로 만들었다. 첫째 예시의 f, g는 function-composition 항목의 첫째 예시와 같은 것이고, 이는 출처 예 12.8과 집합 크기와 대응을 다르게 잡았다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 공역의 지위(선언에 따른 것)를 명확히 하고 출처에서 가져온 예를 교체, 링크 표시말 정리."
added: 2026-11-16
---

:::statement
$f : A \to B$, $g : B \to C$, $h : C \to D$가 [[function]]이면 두 [[function-composition|합성]] $(h \circ g) \circ f$와 $h \circ (g \circ f)$는 모두 $A$에서 $D$로의 함수이고
$$(h \circ g) \circ f = h \circ (g \circ f)$$
이다.
:::

:::english
Let $f : A \to B$, $g : B \to C$ and $h : C \to D$ be functions. Then the compositions $(h \circ g) \circ f$ and $h \circ (g \circ f)$ are both functions from $A$ to $D$, and
$$(h \circ g) \circ f = h \circ (g \circ f).$$
:::

## 직관

세 공정 $f$, $g$, $h$를 이 순서로 거치는 조립 라인이 있다고 합시다. 앞의 두 공정을 묶어 하나로 보든 뒤의 두 공정을 묶어 하나로 보든, 부품이 거치는 일은 똑같으므로 결과도 같습니다. 이 비유가 맞는 것은 "묶는 방식"만 바꾸고 공정의 순서는 바꾸지 않았기 때문입니다. 공정의 순서를 바꾸면 결과가 달라질 수 있습니다([[function-composition|함수의 합성]]의 반례).

결합법칙 덕분에 세 함수의 합성을 괄호 없이 $h \circ g \circ f$로 써도 뜻이 분명합니다. 증명이 해야 할 일은 두 합성이 같은 함수라는 것입니다. 함수의 같음은 정의역이 같고 모든 원소에서 값이 같다는 것이므로, 한 원소 $x$를 잡아 두 쪽의 값을 계산해 비교하면 됩니다.

## 증명

:::idea
두 합성이 모두 $A$에서 $D$로의 함수임을 확인하고, $A$의 임의의 원소 $x$에서 두 합성의 값이 모두 $h(g(f(x)))$임을 합성의 정의로 보인다.
:::

:::hint
함수의 같음의 정의가 요구하는 것은 무엇인가? 정의역이 같다는 것과 또 하나를 적어 보자.
:::

:::hint
$(h \circ g) \circ f$의 $x$에서의 값은 합성의 정의 $(u \circ f)(x) = u(f(x))$ (여기서 $u$는 $B$에서 출발하는 함수)를 바깥에서부터 적용해서 풀어 쓴다.
:::

:::proof
$f$, $g$, $h$를 진술과 같다고 하자.

**두 합성이 $A$에서 $D$로의 함수이다.** $g : B \to C$와 $h : C \to D$에서 $g$의 공역과 $h$의 정의역이 $C$로 같으므로 $h \circ g : B \to D$이다. $f : A \to B$와 $h \circ g : B \to D$에서 $f$의 공역과 $h \circ g$의 정의역이 $B$로 같으므로 $(h \circ g) \circ f : A \to D$이다. 또 $f : A \to B$와 $g : B \to C$에서 $g \circ f : A \to C$이고, $g \circ f$와 $h : C \to D$에서 공역과 정의역이 $C$로 같으므로 $h \circ (g \circ f) : A \to D$이다.

**같음을 보이는 방법.** 두 함수 $(h \circ g) \circ f$와 $h \circ (g \circ f)$는 정의역이 모두 $A$이다. [[function]]의 진술에 따라 정의역이 같은 두 함수는 모든 $x \in A$에서 값이 같을 때 정확히 같은 함수이다. 그러므로 모든 $x \in A$에 대하여
$$\bigl((h \circ g) \circ f\bigr)(x) = \bigl(h \circ (g \circ f)\bigr)(x)$$
임을 보이면 된다. 공역은 같음의 조건이 아니다.

**값의 계산.** $x \in A$라 하자. [[function-composition]]의 진술 $(u \circ v)(t) = u(v(t))$를 쓰면, $(h \circ g) \circ f$에서 $u = h \circ g$, $v = f$, $t = x$이므로
$$\bigl((h \circ g) \circ f\bigr)(x) = (h \circ g)\bigl(f(x)\bigr)$$
이다. 이제 $f(x) \in B$이고 $u = h$, $v = g$, $t = f(x)$로 같은 식을 다시 쓰면
$$(h \circ g)\bigl(f(x)\bigr) = h\bigl(g(f(x))\bigr)$$
이다. 따라서 $\bigl((h \circ g) \circ f\bigr)(x) = h(g(f(x)))$이다.

한편 $h \circ (g \circ f)$에서 $u = h$, $v = g \circ f$, $t = x$이므로
$$\bigl(h \circ (g \circ f)\bigr)(x) = h\bigl((g \circ f)(x)\bigr)$$
이다. 같은 식에서 $u = g$, $v = f$, $t = x$로 쓰면 $(g \circ f)(x) = g(f(x))$이므로
$$h\bigl((g \circ f)(x)\bigr) = h\bigl(g(f(x))\bigr)$$
이다. 따라서 $\bigl(h \circ (g \circ f)\bigr)(x) = h(g(f(x)))$이다.

두 값이 모두 $h(g(f(x)))$이므로 모든 $x \in A$에서 두 합성의 값이 같다. 그러므로 $(h \circ g) \circ f = h \circ (g \circ f)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[유한집합 사이의 세 함수]
$A = \{1, 2, 3, 4\}$, $B = \{\text{가}, \text{나}, \text{다}\}$, $C = \{5, 6\}$, $D = \{0, 1, 2\}$이고
$$f = \{(1, \text{가}), (2, \text{다}), (3, \text{가}), (4, \text{나})\},\quad g = \{(\text{가}, 6), (\text{나}, 5), (\text{다}, 6)\},\quad h = \{(5, 2), (6, 0)\}$$
라 합시다. 가, 나, 다는 서로 다른 대상입니다. $h \circ g$를 계산하면 $(h \circ g)(\text{가}) = h(6) = 0$, $(h \circ g)(\text{나}) = h(5) = 2$, $(h \circ g)(\text{다}) = h(6) = 0$이므로 $h \circ g = \{(\text{가}, 0), (\text{나}, 2), (\text{다}, 0)\}$이고,
$$(h \circ g) \circ f = \{(1, 0), (2, 0), (3, 0), (4, 2)\}$$
입니다. 한편 $g \circ f = \{(1, 6), (2, 6), (3, 6), (4, 5)\}$이므로 $(h \circ (g \circ f))(1) = h(6) = 0$, $(h \circ (g \circ f))(2) = h(6) = 0$, $(h \circ (g \circ f))(3) = h(6) = 0$, $(h \circ (g \circ f))(4) = h(5) = 2$이고 $h \circ (g \circ f) = \{(1, 0), (2, 0), (3, 0), (4, 2)\}$입니다. 두 결과가 같습니다.
:::

:::example[$\mathbb{Z}$ 위의 식]
$f(n) = 2n$, $g(n) = n + 1$, $h(n) = n^2$으로 정한 $f, g, h : \mathbb{Z} \to \mathbb{Z}$에서 $\bigl((h \circ g) \circ f\bigr)(n) = (h \circ g)(2n) = h(2n + 1) = (2n + 1)^2$이고 $\bigl(h \circ (g \circ f)\bigr)(n) = h\bigl((g \circ f)(n)\bigr) = h(2n + 1) = (2n + 1)^2$입니다.
:::

:::counterexample[합성은 교환법칙을 만족하지 않는다]
결합법칙이 허락하는 것은 괄호를 옮기는 것뿐입니다. 위의 $\mathbb{Z}$ 위의 $f$, $g$에서 $(g \circ f)(0) = 1$이고 $(f \circ g)(0) = 2$이므로 $g \circ f \ne f \circ g$입니다. $h \circ g \circ f$는 하나의 함수로 정해지지만 $g \circ h \circ f$ 같은 다른 순서의 합성은 일반적으로 다른 함수입니다. 위 $\mathbb{Z}$ 예에서 $(h \circ g \circ f)(1) = (2 \cdot 1 + 1)^2 = 9$이고 $(g \circ h \circ f)(1) = g(h(f(1))) = g(4) = 5$입니다.
:::

## 확인 질문

:::check[$f, g, h : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n + 1$, $g(n) = 3n$, $h(n) = n - 2$일 때 $\bigl((h \circ g) \circ f\bigr)(4)$와 $\bigl(h \circ (g \circ f)\bigr)(4)$를 따로 계산하라.]
$(h \circ g)(5) = h(g(5)) = h(15) = 13$이므로 $\bigl((h \circ g) \circ f\bigr)(4) = (h \circ g)(f(4)) = (h \circ g)(5) = 13$입니다. $(g \circ f)(4) = g(5) = 15$이므로 $\bigl(h \circ (g \circ f)\bigr)(4) = h(15) = 13$입니다. 두 값이 같습니다.
:::

:::check[이 정리의 증명에서 "정의역이 같다"는 것은 왜 확인해야 하는가?]
[[function]]에서 정의역이 같은 두 함수에 대해서만 "모든 원소에서 값이 같으면 같은 함수"라고 말하기 때문입니다. 두 합성이 모두 $A$에서 $D$로의 함수임을 먼저 확인했으므로 이 조건이 충족됩니다.
:::
