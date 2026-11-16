---
title: 상과 역상
title_en: Image and Preimage
aliases: [상, 역상, 원상, 이미지, image, preimage, inverse image]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B에서 X ⊆ A의 상 f(X)는 X의 원소들의 값을 모은 집합이고, Y ⊆ B의 역상 f⁻¹(Y)는 값이 Y에 속하는 A의 원소를 모은 집합이다."
requires: [set, subset, function, inverse-function]
sources:
  - ref: hammack-book-of-proof
    loc: 12.6절 Image and Preimage, Definition 12.9, p.242 (예 12.13과 12.14는 p.242, 정리 12.4는 p.243)
    checked: original
    note: "출처 Definition 12.9는 f : A → B에서 X ⊆ A의 상을 f(X) = {f(x) : x ∈ X} ⊆ B, Y ⊆ B의 역상을 f⁻¹(Y) = {x ∈ A : f(x) ∈ Y} ⊆ A로 정의한다. 출처는 도입 문단(p.242)에서 'f⁻¹(Y)는 f가 가역이 아니어도 뜻이 있다'고 말하고 p.242에서 f⁻¹(4)는 역함수가 없으므로 의미가 없다고 주의를 준다. 이 점을 아래 진술과 직관에 반영했다. 출처 p.242–243은 f(s, t, u, z) 등을 계산하는 예 12.13과 f(x) = x²에서 f⁻¹(f(X)) ≠ X임을 보이는 예 12.14를 싣고, 정리 12.4(상과 역상에 관한 여섯 개의 식, 증명은 연습문제로 남김)의 3번이 'X ⊆ f⁻¹(f(X))', 6번이 'f(f⁻¹(Y)) ⊆ Y'이다. 이 항목은 정리 12.4를 싣지 않는다. 다만 이 두 포함이 성립한다는 설명과 증명(remark)과 등호가 깨지는 반례는 이 사이트에서 직접 쓴 것이고 출처의 연습문제 12.6절 5번(p.243)은 3번과 같은 포함을 증명하라는 문제이다. 예시는 새로 만들었다. f⁻¹(Y)와 역함수의 f⁻¹을 구별하는 설명은 출처 p.242를 따르되 문장은 새로 썼다. 예시에서 ℤ 위의 제곱 함수와 X = {1, 2}는 출처 예 12.14의 f(x) = x²과 같은 발상이고 집합과 값은 새로 골랐다."
status: source-checked
added: 2026-11-16
---

:::statement
$f : A \to B$가 [[function]]이라 하자.

1. $X \subseteq A$이면 $X$의 **상**(image) $f(X)$는 $f(X) = \{f(x) : x \in X\}$이다. 이것은 $B$의 부분집합이다. 곧 $b \in B$에 대하여 $b \in f(X)$인 것은 정확히 $f(x) = b$인 $x \in X$가 있을 때이다.
2. $Y \subseteq B$이면 $Y$의 **역상**(preimage) $f^{-1}(Y)$는 $f^{-1}(Y) = \{x \in A : f(x) \in Y\}$이다. 이것은 $A$의 부분집합이다. 곧 $a \in A$에 대하여 $a \in f^{-1}(Y)$인 것은 정확히 $f(a) \in Y$일 때이다.

여기서 $X$와 $Y$는 원소가 아니라 부분집합이다. 역상의 표기 $f^{-1}(Y)$는 $f$가 전단사가 아니어도, 곧 [[inverse-function]]이 없어도 정의된다. $f^{-1}(Y)$는 부분집합 $Y$에 대한 표기이고, 역함수가 있을 때 원소 $y$에 대한 $f^{-1}(y)$나 역관계 $f^{-1}$ 자체와는 다른 뜻이다.
:::

:::english
Let $f : A \to B$ be a function.

1. If $X \subseteq A$, the **image** of $X$ is $f(X) = \{f(x) : x \in X\}$. It is a subset of $B$. That is, for $b \in B$, we have $b \in f(X)$ exactly when $f(x) = b$ for some $x \in X$.
2. If $Y \subseteq B$, the **preimage** of $Y$ is $f^{-1}(Y) = \{x \in A : f(x) \in Y\}$. It is a subset of $A$. That is, for $a \in A$, we have $a \in f^{-1}(Y)$ exactly when $f(a) \in Y$.

Here $X$ and $Y$ are subsets, not elements. The notation $f^{-1}(Y)$ for the preimage is defined even when $f$ is not bijective, that is, even when $f$ has no inverse function. The expression $f^{-1}(Y)$ for a subset $Y$ is different from $f^{-1}(y)$ for an element $y$ when an inverse function exists, and from the inverse relation $f^{-1}$ itself.
:::

## 직관

학생과 담임 명단([[function]]의 비유)에서 학생들의 모임 $X$를 정하고 그 학생들의 담임 선생님을 전부 모으면 상입니다. 반대로 선생님들의 모임 $Y$를 정하고 그 선생님들이 담임을 맡은 학생을 전부 모으면 역상입니다. 역상은 선생님 한 명 한 명에게 학생이 정확히 한 명씩 있어야 한다고 요구하지 않습니다. 선생님이 학생을 맡지 않았으면 그 선생님의 몫은 빈 모임이고, 여럿을 맡았으면 여럿이 들어옵니다. 그래서 역함수가 없어도 역상은 만들 수 있습니다.

$f(X)$와 $f(a)$는 괄호 안이 부분집합이냐 원소냐로 구별됩니다. $f^{-1}(Y)$와 역함수의 $f^{-1}(y)$도 같은 방식으로 구별합니다. $f^{-1}(\{y\})$는 집합이고 $f^{-1}(y)$는 원소이므로 한 원소 집합의 역상조차 역함수의 값과 다릅니다.

$f^{-1}(f(X))$와 $X$, $f(f^{-1}(Y))$와 $Y$는 같아 보이지만 일반적으로 같지 않습니다. 성립하는 것은 아래 remark의 포함 관계뿐입니다.

:::remark[성립하는 포함 두 가지]
$f : A \to B$, $X \subseteq A$, $Y \subseteq B$라 하자.

$X \subseteq f^{-1}(f(X))$이다. $x \in X$라 하자. $f(x) \in f(X)$이므로 역상의 정의에 의해 $x \in f^{-1}(f(X))$이다.

$f(f^{-1}(Y)) \subseteq Y$이다. $b \in f(f^{-1}(Y))$라 하자. 상의 정의에 의해 $f(a) = b$인 $a \in f^{-1}(Y)$가 있고, 역상의 정의에 의해 $f(a) \in Y$이다. 따라서 $b \in Y$이다.

두 포함에서 등호는 일반적으로 성립하지 않는다. 아래 반례에서 계산한다.
:::

## 예시와 반례

:::example[작은 유한집합에서의 상과 역상]
$A = \{1, 2, 3, 4, 5, 6\}$, $B = \{\text{가}, \text{나}, \text{다}, \text{라}, \text{마}\}$이고
$$f = \{(1, \text{가}), (2, \text{나}), (3, \text{가}), (4, \text{다}), (5, \text{가}), (6, \text{라})\}$$
라 합시다. 가, 나, 다, 라, 마는 서로 다른 대상입니다.

- $f(\{1, 2, 3\}) = \{f(1), f(2), f(3)\} = \{\text{가}, \text{나}\}$
- $f(\{1, 3, 5\}) = \{\text{가}\}$
- $f(\emptyset) = \emptyset$
- $f(A) = \{\text{가}, \text{나}, \text{다}, \text{라}\}$. 마는 $f(A)$에 들어 있지 않습니다.
- $f^{-1}(\{\text{가}\}) = \{1, 3, 5\}$
- $f^{-1}(\{\text{나}, \text{라}\}) = \{2, 6\}$
- $f^{-1}(\{\text{마}\}) = \emptyset$
- $f^{-1}(\{\text{가}, \text{다}, \text{마}\}) = \{1, 3, 4, 5\}$
- $f^{-1}(B) = A$

$f$는 단사도 전사도 아니므로 역함수가 없지만 역상은 이렇게 정의됩니다. $f^{-1}(\text{가})$는 뜻이 없습니다.
:::

:::example[$\mathbb{Z}$ 위의 제곱]
$s : \mathbb{Z} \to \mathbb{Z}$, $s(n) = n^2$이라 합시다. $s(\{-2, 0, 3\}) = \{4, 0, 9\} = \{0, 4, 9\}$입니다. $s^{-1}(\{0, 1, 4\})$를 구하면, $n^2 = 0$이면 $n = 0$, $n^2 = 1$이면 $n = 1$ 또는 $n = -1$, $n^2 = 4$이면 $n = 2$ 또는 $n = -2$이고, $|n| \ge 3$이면 $n^2 \ge 9$이므로 이 밖의 정수는 없습니다. 따라서 $s^{-1}(\{0, 1, 4\}) = \{-2, -1, 0, 1, 2\}$입니다. 또 정수의 제곱은 $0$ 이상이므로(이 사실을 씁니다) $s^{-1}(\{-1\}) = \emptyset$입니다.
:::

:::counterexample[$f^{-1}(f(X)) \ne X$인 경우]
위의 $s$에서 $X = \{1, 2\}$라 하면 $s(X) = \{1, 4\}$이고 $s^{-1}(\{1, 4\}) = \{-2, -1, 1, 2\}$입니다. $-1 \in s^{-1}(s(X))$이지만 $-1 \notin X$이므로 $X \subsetneq s^{-1}(s(X))$이고 둘은 같지 않습니다. 위의 유한집합 예에서도 $X = \{1\}$이면 $f(X) = \{\text{가}\}$, $f^{-1}(f(X)) = \{1, 3, 5\} \ne X$입니다.
:::

:::counterexample[$f(f^{-1}(Y)) \ne Y$인 경우]
위의 유한집합 예에서 $Y = \{\text{가}, \text{마}\}$라 하면 $f^{-1}(Y) = \{1, 3, 5\}$이고 $f(\{1, 3, 5\}) = \{\text{가}\}$입니다. 마 $\in Y$이지만 마 $\notin f(f^{-1}(Y))$이므로 $f(f^{-1}(Y)) \subsetneq Y$이고 둘은 같지 않습니다. $\mathbb{Z}$ 위의 $s$에서도 $Y = \{1, 2, 4\}$이면 $s^{-1}(Y) = \{-2, -1, 1, 2\}$이고 $s(\{-2, -1, 1, 2\}) = \{1, 4\} \ne Y$입니다. 제곱이 2인 정수가 없기 때문입니다.
:::

## 확인 질문

:::check[$g : \{1, 2, 3, 4\} \to \{5, 6, 7\}$, $g = \{(1, 5), (2, 5), (3, 6), (4, 6)\}$일 때 $g(\{1, 3\})$, $g^{-1}(\{6, 7\})$, $g^{-1}(\{7\})$을 구하라.]
$g(\{1, 3\}) = \{g(1), g(3)\} = \{5, 6\}$입니다. $g^{-1}(\{6, 7\}) = \{x : g(x) \in \{6, 7\}\} = \{3, 4\}$입니다. $g^{-1}(\{7\})$은 값이 7인 원소가 없으므로 $\emptyset$입니다.
:::

:::check[$h : \mathbb{Z} \to \mathbb{Z}$, $h(n) = n + 2$에서 $h(\{0, 1\})$과 $h^{-1}(\{0, 1\})$을 구하라.]
$h(\{0, 1\}) = \{2, 3\}$입니다. $h(n) \in \{0, 1\}$인 것은 $n + 2 = 0$ 또는 $n + 2 = 1$, 곧 $n = -2$ 또는 $n = -1$일 때이므로 $h^{-1}(\{0, 1\}) = \{-2, -1\}$입니다.
:::
