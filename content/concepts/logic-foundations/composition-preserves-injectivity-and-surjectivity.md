---
title: 합성은 단사와 전사를 보존한다
title_en: Composition Preserves Injectivity and Surjectivity
aliases: [단사함수의 합성, 전사함수의 합성, 전단사의 합성]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B와 g : B → C가 둘 다 단사이면 g∘f가 단사이고, 둘 다 전사이면 g∘f : A → C가 전사이며, 둘 다 전단사이면 g∘f가 전단사이다."
requires: [function, function-composition, injective-surjective-bijective]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 12.4절 Composition, Theorem 12.2, p.237
    checked: original
    note: "출처 Theorem 12.2의 진술은 (1)과 (2)와 같고 증명도 같은 방법이다(단사는 g(f(x)) = g(f(y))에서 시작, 전사는 c ∈ C에서 b, 다시 a를 차례로 고름). (3)은 출처에 없고 (1), (2)와 전단사의 정의에서 바로 나오는 것을 이 사이트에서 덧붙였다. 출처는 공역과 정의역이 맞는 경우(f : A → B, g : B → C)만 다룬다. 출처의 단사 증명은 '그렇지 않으면 g가 단사가 아니게 된다'고 줄여 쓰지만, 아래 증명은 단사의 동치 꼴(f(a) = f(a′)이면 a = a′)을 인용해 각 단계의 근거를 적었다. f를 다시 선언해 합성하는 경우에 (2)가 거짓이라는 반례, (1)의 역이 거짓이라는 반례, 모든 예시는 이 사이트에서 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 공역의 지위(선언에 따른 것)를 명확히 하고 출처에서 가져온 예를 교체, 링크 표시말 정리."
added: 2026-11-16
---

:::statement
$f : A \to B$와 $g : B \to C$가 [[function]]라 하자. 곧 $f$의 공역과 $g$의 정의역이 같은 $B$이다. 그러면 [[function-composition|합성]] $g \circ f : A \to C$에 대하여 다음이 성립한다.

1. $f$와 $g$가 모두 단사이면 $g \circ f$는 단사이다.
2. $f : A \to B$와 $g : B \to C$가 모두 전사이면 $g \circ f : A \to C$는 전사이다.
3. $f : A \to B$와 $g : B \to C$가 모두 전단사이면 $g \circ f : A \to C$는 전단사이다.
:::

:::english
Let $f : A \to B$ and $g : B \to C$ be functions; that is, the codomain of $f$ and the domain of $g$ are the same set $B$. Then for the composition $g \circ f : A \to C$ the following hold.

1. If $f$ and $g$ are both injective, then $g \circ f$ is injective.
2. If $f : A \to B$ and $g : B \to C$ are both surjective, then $g \circ f : A \to C$ is surjective.
3. If $f : A \to B$ and $g : B \to C$ are both bijective, then $g \circ f : A \to C$ is bijective.
:::

## 직관

조립 라인 비유([[function-composition]])로 보면, 첫째 공정이 서로 다른 부품을 서로 다른 중간 제품으로 보내고, 둘째 공정도 서로 다른 중간 제품을 서로 다른 최종 제품으로 보내면, 라인 전체도 서로 다른 부품을 서로 다른 최종 제품으로 보냅니다. 또 첫째 공정이 중간 제품을 빠짐없이 만들고 둘째 공정이 최종 제품을 빠짐없이 만들면, 라인 전체도 최종 제품을 빠짐없이 만듭니다. 비유가 놓치는 점은 "빠짐없이"가 선언한 공역에 대한 말이라는 것입니다. 이 정리는 첫째 공정의 공역이 둘째 공정의 정의역과 같은 경우에만 전사를 말하며, 아래 반례에서 이 조건이 빠지면 거짓이 되는 것을 봅니다.

증명은 (1)과 (2) 모두 정의를 순서대로 따라가는 것입니다. 단사는 $g$를 먼저 거꾸로 풀고 그다음 $f$를 거꾸로 풀며, 전사는 $c$에서 시작해 $g$로 $b$를 찾고 $f$로 $a$를 찾습니다.

## 증명

:::idea
단사는 $g(f(a)) = g(f(a'))$에서 $g$의 단사로 $f(a) = f(a')$를, 다시 $f$의 단사로 $a = a'$를 얻는다. 전사는 $c \in C$에서 $g$의 전사로 $b$를, $f$의 전사로 $a$를 차례로 얻는다.
:::

:::hint
단사의 동치 꼴 "$f(a) = f(a')$이면 $a = a'$"로 보일 것을 적어 보자. $g \circ f$의 값이 같다고 가정하면 무엇을 얻는가?
:::

:::hint
전사는 $C$의 원소 $c$를 하나 잡고 시작한다. 거꾸로 올라가며 $g$에서 $B$의 원소를, 다시 $f$에서 $A$의 원소를 찾는다.
:::

:::proof
**(1)** $f$와 $g$가 단사라 하자. [[injective-surjective-bijective|단사의 정의]]에 의해 $g \circ f$가 단사인 것은 모든 $a, a' \in A$에 대하여 $(g \circ f)(a) = (g \circ f)(a')$이면 $a = a'$인 것과 같으므로 이를 보인다. $a, a' \in A$이고 $(g \circ f)(a) = (g \circ f)(a')$라 하자. [[function-composition]]의 진술에 의해 $g(f(a)) = g(f(a'))$이다. $f(a), f(a') \in B$이고 $g$가 단사이므로, 단사의 동치 꼴에 의해 $f(a) = f(a')$이다. $f$가 단사이므로 같은 동치 꼴에 의해 $a = a'$이다. 따라서 $g \circ f$는 단사이다.

**(2)** $f : A \to B$와 $g : B \to C$가 전사라 하자. $g \circ f : A \to C$가 전사임을 보이려면 모든 $c \in C$에 대하여 $(g \circ f)(a) = c$인 $a \in A$가 있음을 보이면 된다. $c \in C$라 하자. $g : B \to C$가 전사이므로 $g(b) = c$인 $b \in B$가 있다. $f : A \to B$가 전사이므로 $f(a) = b$인 $a \in A$가 있다. 그러면 $(g \circ f)(a) = g(f(a)) = g(b) = c$이다. 따라서 $g \circ f : A \to C$는 전사이다.

**(3)** $f : A \to B$와 $g : B \to C$가 전단사라 하자. 전단사의 정의에 의해 $f$, $g$는 단사이고 $f : A \to B$, $g : B \to C$는 전사이다. (1)에 의해 $g \circ f$가 단사이고 (2)에 의해 $g \circ f : A \to C$가 전사이므로, 전단사의 정의에 의해 $g \circ f : A \to C$는 전단사이다. $\blacksquare$
:::

:::remark[단사 부분은 공역을 다시 선언해도 성립한다]
단사는 공역에 관계없이 집합으로 정해지는 성질이다. $f$의 모든 값이 $g$의 정의역에 속하여 $g \circ f$가 정의되기만 하면, (1)의 증명에서 $f(a), f(a')$가 $g$의 정의역에 속한다는 사실만 쓰였으므로 (1)은 그대로 성립한다. 전사는 선언한 공역에 대한 성질이어서, (2)는 아래 반례처럼 이 경우에 성립하지 않을 수 있다.
:::

## 예시와 반례

:::example[$\mathbb{Z}$ 위의 두 전단사]
$f, g : \mathbb{Z} \to \mathbb{Z}$를 $f(n) = n + 1$, $g(n) = n - 2$라 합시다. 둘 다 전단사입니다. 단사는 $n + 1 = n' + 1$이면 $n = n'$, $n - 2 = n' - 2$이면 $n = n'$이기 때문이고, 전사는 $b \in \mathbb{Z}$에 대하여 $f(b - 1) = b$, $g(b + 2) = b$이기 때문입니다. 정리에 의해 $g \circ f$도 전단사이고, 실제로 $(g \circ f)(n) = g(n + 1) = n - 1$이며 $c \in \mathbb{Z}$에 대하여 $(g \circ f)(c + 1) = c$입니다.
:::

:::example[단사이지만 전사가 아닌 $f$]
$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}, \text{다}, \text{라}\}$, $C = \{5, 6, 7, 8\}$이고
$$f = \{(1, \text{가}), (2, \text{나}), (3, \text{다})\},\qquad g = \{(\text{가}, 5), (\text{나}, 6), (\text{다}, 7), (\text{라}, 8)\}$$
라 합시다. 가, 나, 다, 라는 서로 다른 대상입니다. $f$는 단사이고 라가 값으로 나오지 않으므로 전사가 아니며, $g$는 전단사입니다. $g \circ f = \{(1, 5), (2, 6), (3, 7)\}$는 값이 서로 다르므로 단사입니다. 8이 값이 아니므로 $g \circ f : A \to C$는 전사가 아닙니다. 정리는 이 경우를 금하지 않습니다. $f$가 전사가 아니므로 (2)의 가정이 성립하지 않습니다.
:::

:::counterexample[공역을 다시 선언하면 전사의 합성이 전사가 아닐 수 있다]
$A = \{1, 2\}$, $f = \{(1, \text{가}), (2, \text{나})\}$를 $\{\text{가}, \text{나}\}$로의 함수로 보면 전사입니다. $g = \{(\text{가}, 5), (\text{나}, 5), (\text{다}, 6)\}$를 $\{\text{가}, \text{나}, \text{다}\}$에서 $C = \{5, 6\}$으로의 함수로 보면 5, 6이 모두 값이므로 전사입니다. $f$의 값 가, 나는 $g$의 정의역에 속하므로 $g \circ f$는 [[function-composition]]의 "f의 공역이 g의 정의역과 다를 때"에 따라 정의되고 $g \circ f = \{(1, 5), (2, 5)\}$입니다. 그런데 6은 어떤 $(g \circ f)(a)$와도 같지 않으므로 $g \circ f : A \to C$는 전사가 아닙니다. 이 반례에서 $f$의 공역 $\{\text{가}, \text{나}\}$는 $g$의 정의역 $\{\text{가}, \text{나}, \text{다}\}$와 다릅니다. (2)가 공역과 정의역이 같은 경우로 진술된 이유입니다.
:::

:::counterexample[역은 성립하지 않는다]
$A = \{1, 2\}$, $B = \{\text{가}, \text{나}, \text{다}\}$, $C = \{5, 6\}$이고 $f = \{(1, \text{가}), (2, \text{나})\}$, $g = \{(\text{가}, 5), (\text{나}, 6), (\text{다}, 5)\}$라 합시다. $g \circ f = \{(1, 5), (2, 6)\}$은 단사이고 $g \circ f : A \to C$는 전사입니다. 그러나 $g$는 가 $\ne$ 다인데 $g(\text{가}) = g(\text{다}) = 5$이므로 단사가 아니고, $f : A \to B$는 다가 값이 아니므로 전사가 아닙니다. "$g \circ f$가 단사이면 $g$도 단사이다", "$g \circ f : A \to C$가 전사이면 $f : A \to B$도 전사이다"는 틀립니다.
:::

## 확인 질문

:::check[$f, g : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n + 4$, $g(n) = 3n$은 둘 다 단사이다. $g \circ f$의 식을 구하고 단사인지 전사인지 판단하라.]
$(g \circ f)(n) = g(n + 4) = 3n + 12$입니다. 정리 (1)에 의해 단사입니다. 전사는 아닙니다. $3n + 12 = 1$인 정수 $n$이 있다고 하면 $3(n + 4) = 1$인데, $n + 4 \le 0$이면 $3(n + 4) \le 0 < 1$이고 $n + 4 \ge 1$이면 $3(n + 4) \ge 3 > 1$이라 모순입니다. 정리 (2)는 $g$가 전사가 아니므로 쓸 수 없습니다.
:::

:::check[(2)를 증명할 때 $f$가 전사라는 가정은 어느 단계에서 쓰이는가?]
$g$로 얻은 $b \in B$에 대하여 $f(a) = b$인 $a \in A$를 찾는 단계입니다. 이 단계가 없으면 $c$에 대응하는 $b$는 있어도 $A$의 원소로 거슬러 올라갈 수 없습니다.
:::
