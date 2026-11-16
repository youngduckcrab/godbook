---
title: 함수
title_en: Function
aliases: [사상, 대응, 정의역, 공역, 치역, function, mapping, domain, codomain, range]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "A에서 B로의 함수는 곱집합 A × B의 부분집합 f로서, A의 각 원소 a마다 (a, b)가 f에 속하는 b ∈ B가 정확히 하나 있는 것이다."
requires: [set, subset, cartesian-product, relation, quantifiers]
sources:
  - ref: hammack-book-of-proof
    loc: 12.1절 Functions, Definition 12.1(p.224), Definition 12.2(p.225), Definition 12.3(p.227). "A에서 B로의 관계"는 11.6절 Definition 11.7(p.221)
    checked: original
    note: "출처 Definition 12.1은 함수를 'f ⊆ A × B인 관계로서, A의 각 원소 a에 대하여 (a, b) 꼴의 순서쌍이 f에 정확히 하나 들어 있는 것'이라 정의하고, (a, b) ∈ f를 f(a) = b로 줄여 쓴다. 아래 진술은 '정확히 하나'를 존재와 유일의 두 조건으로 풀어 쓴 것이다. Definition 12.2는 A를 정의역, B를 공역, {f(a) : a ∈ A}를 치역이라 부르고, 치역은 공역의 부분집합이며 공역은 함수의 본질적인 특징이 아니라 선택이나 문맥의 문제라고 말한다(p.225). Definition 12.3은 f = g를 집합으로서 같음으로 정의하고 'f(x) = g(x)가 정의역의 모든 x에서 성립하는 것과 동치'라고 하며, 같은 함수가 서로 다른 공역을 가질 수 있다고 말한다(p.227). 출처는 이 동치를 간단히 설명할 뿐이므로 아래 '같음에 대한 설명' 블록의 증명은 이 사이트에서 직접 쓴 것이다. 출처 Definition 12.3은 정의역이 같은 두 함수에 대해 쓰여 있고, 같은 함수는 정의역이 같다는 말은 본문(p.227)에 있다. 정의역으로부터 A가 f에서 정해진다는 설명, 공집합이 정의역이거나 공역일 때의 설명, 예시의 학생과 담임 비유, 모든 예시와 반례는 출처에 없고 이 사이트에서 새로 만들었다. 다만 '공역이 달라도 같은 함수일 수 있다'는 예(ℤ에서 ℤ로, ℤ에서 ℝ로)는 출처 p.227의 예와 같은 발상이고, 'n²이 순서쌍으로는 {(n, n²)}'이라 쓰는 방식은 출처 p.223–224의 서술을 따른 것이다. 출처의 12.1절 연습문제 9(p.228)에 나오는 집합 {(x², x)}는 아래 반례와 같은 발상이다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$, $B$가 [[set]]일 때, **$A$에서 $B$로의 관계**(relation from $A$ to $B$)는 [[cartesian-product]] $A \times B$의 [[subset]]이다. ($B = A$이면 [[relation]]에서 정의한 $A$ 위의 관계이다.)

**$A$에서 $B$로의 함수**(function) $f$는 $A$에서 $B$로의 관계 $f \subseteq A \times B$ 가운데, $A$의 모든 원소 $a$에 대하여 다음 두 조건이 모두 성립하는 것이다. 이를 $f : A \to B$로 쓴다.

1. (존재) $(a, b) \in f$인 $b \in B$가 적어도 하나 있다.
2. (유일) $b, b' \in B$이고 $(a, b) \in f$이고 $(a, b') \in f$이면 $b = b'$이다.

곧 $f \subseteq A \times B$가 함수인 것은 정확히 "$\forall a \in A$, $(a, b) \in f$인 $b \in B$가 정확히 하나 존재한다"일 때이다. $a \in A$, $b \in B$에 대하여 $(a, b) \in f$인 것을 $f(a) = b$로 쓴다. 따라서 $f(a) = b$는 정확히 $(a, b) \in f$일 때 성립하고, 모든 $a \in A$에 대하여 $f(a)$는 $B$의 원소 하나로 정해진다.

$f : A \to B$에서 $A$를 $f$의 **정의역**(domain), $B$를 **공역**(codomain)이라 하고,
$$\{f(a) : a \in A\} = \{b \in B : (a, b) \in f \text{인 } a \in A \text{가 있다}\}$$
를 $f$의 **치역**(range)이라 한다. 치역은 항상 공역 $B$의 부분집합이다.

**함수의 같음.** 두 함수 $f : A \to B$, $g : C \to D$가 **같다**($f = g$)는 것은 집합으로서 $f = g$라는 뜻이다. 이때 $A = C$이다. 정의역이 같은 두 함수 $f : A \to B$, $g : A \to D$에 대하여
$$f = g \iff \text{모든 } x \in A \text{에 대하여 } f(x) = g(x)$$
이다. 공역 $B$와 $D$는 같을 필요가 없다.
:::

:::english
Let $A$ and $B$ be sets. A **relation from $A$ to $B$** is a subset of the Cartesian product $A \times B$. (When $B = A$, this is a relation on $A$.)

A **function** $f$ **from $A$ to $B$** is a relation $f \subseteq A \times B$ from $A$ to $B$ such that for every element $a \in A$ both of the following hold. We write $f : A \to B$.

1. (Existence) There is at least one $b \in B$ with $(a, b) \in f$.
2. (Uniqueness) If $b, b' \in B$, $(a, b) \in f$ and $(a, b') \in f$, then $b = b'$.

That is, $f \subseteq A \times B$ is a function exactly when, for every $a \in A$, there is exactly one $b \in B$ with $(a, b) \in f$. For $a \in A$ and $b \in B$ we write $f(a) = b$ to mean $(a, b) \in f$. Hence $f(a) = b$ holds exactly when $(a, b) \in f$, and for every $a \in A$ the value $f(a)$ is a uniquely determined element of $B$.

For $f : A \to B$, the set $A$ is the **domain** of $f$ and the set $B$ is its **codomain**. The **range** of $f$ is
$$\{f(a) : a \in A\} = \{b \in B : (a, b) \in f \text{ for some } a \in A\}.$$
The range is always a subset of the codomain $B$.

**Equality of functions.** Two functions $f : A \to B$ and $g : C \to D$ are **equal**, written $f = g$, if $f = g$ as sets. In that case $A = C$. For two functions $f : A \to B$ and $g : A \to D$ with the same domain,
$$f = g \iff f(x) = g(x) \text{ for every } x \in A.$$
The codomains $B$ and $D$ need not be equal.
:::

## 직관

학생들이 한 반에 모여 있고, 각 학생에게 담임 선생님이 정확히 한 분 있다고 합시다. "(학생, 담임)" 쌍을 전부 적은 명단이 곧 함수 $f$입니다. 명단에서 $f(\text{학생}) = \text{담임}$이라고 읽습니다. 두 학생이 같은 담임을 가질 수는 있지만, 담임이 없는 학생이나 담임이 둘인 학생은 있을 수 없습니다. 이 두 금지가 정의의 (존재)와 (유일)에 해당합니다.

학생이 정의역의 원소이고, 학교의 모든 선생님의 집합이 공역입니다. 실제로 담임을 맡은 선생님만 모은 것이 치역입니다. 이 비유가 맞지 않는 곳도 있습니다. 비유에서는 어떤 선생님도 담임을 맡지 않을 수 있지만, 함수의 정의는 공역의 원소가 모두 값으로 쓰여야 한다고 요구하지 않습니다. 모두 쓰이는 경우는 [[injective-surjective-bijective]]의 전사입니다.

이 정의에서 함수는 "규칙"이 아니라 순서쌍의 집합입니다. 그래서 두 함수가 같은지는 집합으로 같은지, 곧 각 입력에서 같은 출력을 내는지로 판단합니다. $f(n) = n^2$처럼 식으로 주어진 함수도 $\{(n, n^2) : n \in \mathbb{Z}\}$라는 집합입니다. 출처는 공역이 함수의 본질적인 특징이라기보다 선택과 문맥의 문제라고 말하며, 이 정의에서는 공역을 달리해도 순서쌍이 같으면 같은 함수로 봅니다.

:::remark[같음에 대한 설명]
위 진술의 같음에 관한 두 주장을 확인합니다. $f : A \to B$라 하자.

먼저 $A$는 $f$에서 정해진다. 모든 $a \in A$에 대하여 $(a, b) \in f$인 $b$가 있고, 거꾸로 $(x, y) \in f$이면 $f \subseteq A \times B$이므로 $x \in A$이다. 따라서 $A$는 $f$의 순서쌍의 첫째 성분 전체의 집합 $\{x : (x, y) \in f \text{인 } y \text{가 있다}\}$와 같다. 집합으로서 $f = g$이면 두 쪽의 첫째 성분 전체의 집합이 같으므로 $A = C$이다.

이제 $f : A \to B$, $g : A \to D$라 하자. $f = g$이고 $x \in A$이면, $(x, f(x)) \in f = g$이므로 $g$의 (유일) 조건에 의해 $g(x) = f(x)$이다. 거꾸로 모든 $x \in A$에서 $f(x) = g(x)$라 하자. $(x, y) \in f$이면 $x \in A$이고 $y = f(x)$ (유일)이므로 $y = g(x)$이고, 따라서 $(x, y) \in g$이다. 같은 방법으로 $(x, y) \in g$이면 $(x, y) \in f$이다. 그러므로 $f = g$이다.
:::

## 예시와 반례

:::example[순서쌍의 집합으로 적은 함수]
$A = \{1, 2, 3\}$, $B = \{x, y, z\}$이고 $f = \{(1, x), (2, y), (3, x)\}$라 합시다. $f \subseteq A \times B$이고, $1, 2, 3$ 각각이 첫째 성분으로 정확히 한 번씩 나오므로 $f : A \to B$는 함수입니다. $f(1) = x$, $f(2) = y$, $f(3) = x$이고 치역은 $\{x, y\}$입니다. $z$는 공역에는 있지만 치역에는 없습니다.
:::

:::example[식으로 주어진 함수]
정수 $n$에 대하여 $f(n) = n^2 + 1$이라 하면 $f = \{(n, n^2 + 1) : n \in \mathbb{Z}\}$는 $\mathbb{Z} \times \mathbb{Z}$의 부분집합입니다. 모든 정수 $a$에 대하여 $(a, b) \in f$이려면 $b = a^2 + 1$이어야 하므로 $b$가 존재하고 유일합니다. 따라서 $f : \mathbb{Z} \to \mathbb{Z}$는 함수이고 $f(2) = 5$, $f(-2) = 5$입니다. 같은 집합 $f$를 $\mathbb{Z} \times \mathbb{R}$의 부분집합으로도 볼 수 있어서, 공역을 $\mathbb{R}$로 잡은 함수 $g : \mathbb{Z} \to \mathbb{R}$, $g(n) = n^2 + 1$도 만들 수 있습니다. 두 함수는 순서쌍의 집합으로 같으므로 $f = g$입니다. 공역은 다르지만 모든 정수 $n$에서 $f(n) = g(n)$이기 때문입니다.
:::

:::example[공집합이 정의역이거나 공역인 경우]
$A = \emptyset$이면 $A \times B = \emptyset$이므로 $f \subseteq A \times B$는 $f = \emptyset$뿐입니다. 이때 (존재)와 (유일)은 $A$의 원소에 관한 조건이라 공허하게 참이므로 $\emptyset$은 함수 $\emptyset \to B$입니다. 따라서 어떤 집합 $B$에 대해서도 $\emptyset$에서 $B$로의 함수는 정확히 하나 있습니다.

$A \ne \emptyset$이고 $B = \emptyset$이면 $A \times B = \emptyset$이므로 $f = \emptyset$뿐인데, $a \in A$를 하나 잡으면 $(a, b) \in f$인 $b$가 없어서 (존재)가 깨집니다. 따라서 공집합이 아닌 집합에서 공집합으로의 함수는 없습니다.
:::

:::counterexample[존재가 깨지는 경우와 유일이 깨지는 경우]
$A = \{1, 2, 3\}$, $B = \{x, y\}$일 때, $R = \{(1, x), (2, y)\}$는 $A$에서 $B$로의 관계이지만 함수가 아닙니다. $3 \in A$에 대하여 $(3, b) \in R$인 $b$가 없어서 (존재)가 깨지기 때문입니다. $S = \{(1, x), (1, y), (2, x), (3, y)\}$도 함수가 아닙니다. $1 \in A$에 대하여 $(1, x), (1, y) \in S$이고 $x \ne y$라서 (유일)이 깨집니다.
:::

:::counterexample[값이 공역 밖으로 나가는 식]
$g(n) = n/2$라는 식은 $\mathbb{Z} \to \mathbb{Z}$의 함수를 정하지 못합니다. $n = 1$이면 $n/2 = 1/2$인데 $1/2$은 정수가 아니라서 $(1, 1/2) \notin \mathbb{Z} \times \mathbb{Z}$이고, 따라서 $\{(n, n/2) : n \in \mathbb{Z}\} \not\subseteq \mathbb{Z} \times \mathbb{Z}$이기 때문입니다. 같은 식이 $\mathbb{Z} \to \mathbb{R}$의 함수는 됩니다. 정의역과 공역을 함께 밝혀야 함수가 정해집니다.
:::

:::counterexample[순서쌍의 둘째 성분을 입력으로 쓰면]
$T = \{(n^2, n) : n \in \mathbb{Z}\}$는 $\mathbb{Z} \to \mathbb{Z}$의 함수가 아닙니다. $(1, 1) \in T$이고 $(1, -1) \in T$인데 $1 \ne -1$이라 (유일)이 깨지고, 또 $2$를 첫째 성분으로 하는 순서쌍이 $T$에 없어서 (존재)도 깨집니다. 제곱을 거꾸로 거슬러 올라가는 대응은 함수가 아닙니다. 이 설명에서 쓴 것은 정수의 제곱이 $1$이 되는 정수가 $1$, $-1$이라는 것과, 정수 $m$이 $m^2 = 2$이려면 $|m| \le 1$이면 $m^2 \le 1$이고 $|m| \ge 2$이면 $m^2 \ge 4$이므로 그런 정수 $m$이 없다는 것입니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$, $B = \{1, 2, 3\}$일 때 $f = \{(1, 2), (2, 2), (3, 1)\}$은 $A$에서 $B$로의 함수인가? 그렇다면 $f(2)$와 치역을 구하라.]
$1, 2, 3$ 각각이 첫째 성분으로 정확히 한 번씩 나오고 둘째 성분은 모두 $B$의 원소이므로 함수입니다. $f(2) = 2$이고 치역은 $\{f(1), f(2), f(3)\} = \{2, 2, 1\} = \{1, 2\}$입니다.
:::

:::check[$\{1, 2, 3\}$에서 $\{a, b\}$로의 관계 $\{(1, a), (2, b)\}$와 $\{(1, a), (2, b), (3, a), (3, b)\}$는 각각 함수인가?]
둘 다 함수가 아닙니다. 첫째 관계에서는 $3$을 첫째 성분으로 하는 순서쌍이 없어 (존재)가 깨집니다. 둘째 관계에서는 $(3, a)$와 $(3, b)$가 모두 있고 $a \ne b$라서 (유일)이 깨집니다.
:::
