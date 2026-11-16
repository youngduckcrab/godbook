---
title: 원소 하나를 더하거나 빼기
title_en: Adding or Removing One Element
aliases: [원소 추가, 원소 제거, 함수의 제한, restriction of a function, adding an element, removing an element]
kind: lemma
field: logic-foundations
msc: ["03"]
level: intro
summary: 원소를 n개 갖는 집합에 그 집합에 없는 원소 하나를 더하면 n + 1개, 원소를 n + 1개 갖는 집합에서 원소 하나를 빼면 n개를 갖는다. 함수의 제한도 함께 정의한다.
requires: [set, subset, set-operations, cartesian-product, function, injective-surjective-bijective, function-composition, composition-preserves-injectivity-and-surjectivity, finite-set]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 3.3절 The Addition and Subtraction Principles, Fact 3.2(p.74), Fact 3.3(p.76)
    checked: original
    note: "출처의 덧셈 원리(Fact 3.2)는 '유한집합이 서로소인 조각들의 합집합이면 크기는 조각들의 크기의 합'이라는 말이고, 출처는 3.3절 첫머리에서 이 원리들이 새로운 것이 아니라 오래전부터 직관적으로 써 온 것에 이름을 붙이는 것이라 쓰고, Fact 3.2를 증명하지 않는다. 뺄셈 원리(Fact 3.3)도 증명하지 않는다. 이 항목의 (a)와 (b)는 그 원리들의 특수한 경우(조각 하나가 원소 하나)에 해당하지만 출처의 진술이 아니고, 크기를 '원소를 n개 갖는다'(finite-set 항목의 전단사 정의)로 엄밀하게 바꾼 이 사이트의 정리이다. 증명은 모두 출처에 없고 이 사이트가 직접 썼다. 특히 (b)의 '마지막 자리와 빠지는 원소의 자리를 맞바꾸는' 구성과 함수의 제한(출처에는 이 이름의 정의가 없다)은 이 사이트의 것이다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
**함수의 제한.** $f : A \to B$가 [[function]]이고 $X \subseteq A$일 때, $f$의 $X$로의 **제한**(restriction)을
$$f|_X = \{(x, y) \in f : x \in X\}$$
로 정한다. 그러면 $f|_X$는 $X$에서 $B$로의 함수이고 모든 $x \in X$에 대하여 $f|_X(x) = f(x)$이다. 또 $f$가 단사이면 $f|_X$도 단사이다.

**원소 하나를 더하거나 빼기.** $A$가 [[set]]이고 $n \ge 0$이 정수일 때 다음이 성립한다. 여기서 "원소를 $n$개 갖는다"는 [[finite-set]]의 뜻이다.

- (a) $h : \{1, \dots, n\} \to A$가 전단사이고 $x \notin A$이면 $h^+ = h \cup \{(n+1, x)\}$는 $\{1, \dots, n+1\}$에서 $A \cup \{x\}$로의 전단사이고, $h^+(n+1) = x$이며 $i \in \{1, \dots, n\}$에서 $h^+(i) = h(i)$이다. 따라서 $A$가 원소를 $n$개 갖고 $x \notin A$이면 $A \cup \{x\}$는 원소를 $n + 1$개 갖는다.
- (b) $A$가 원소를 $n + 1$개 갖고 $a \in A$이면 $g(n+1) = a$인 전단사 $g : \{1, \dots, n+1\} \to A$가 있고, 이 $g$의 $\{1, \dots, n\}$으로의 제한 $g|_{\{1, \dots, n\}}$은 $\{1, \dots, n\}$에서 $A - \{a\}$로의 전단사이다. 따라서 $A - \{a\}$는 원소를 $n$개 갖는다.

증명에서는 [[finite-set]]의 (F1)–(F5)를 쓴다.
:::

:::english
**Restriction of a function.** Let $f : A \to B$ be a function and $X \subseteq A$. The **restriction** of $f$ to $X$ is
$$f|_X = \{(x, y) \in f : x \in X\}.$$
Then $f|_X$ is a function from $X$ to $B$, and $f|_X(x) = f(x)$ for every $x \in X$. Moreover, if $f$ is injective, then $f|_X$ is injective.

**Adding or removing one element.** Let $A$ be a set and $n \ge 0$ an integer. Here "has $n$ elements" is in the sense of finite sets. Then the following hold.

- (a) If $h : \{1, \dots, n\} \to A$ is a bijection and $x \notin A$, then $h^+ = h \cup \{(n+1, x)\}$ is a bijection from $\{1, \dots, n+1\}$ to $A \cup \{x\}$, with $h^+(n+1) = x$ and $h^+(i) = h(i)$ for $i \in \{1, \dots, n\}$. Hence if $A$ has $n$ elements and $x \notin A$, then $A \cup \{x\}$ has $n + 1$ elements.
- (b) If $A$ has $n + 1$ elements and $a \in A$, then there is a bijection $g : \{1, \dots, n+1\} \to A$ with $g(n+1) = a$, and the restriction $g|_{\{1, \dots, n\}}$ of this $g$ is a bijection from $\{1, \dots, n\}$ to $A - \{a\}$. Hence $A - \{a\}$ has $n$ elements.

In the proof we use (F1)–(F5) of the entry on finite sets.
:::

## 직관

번호표를 $1$번부터 $n$번까지 나눠 준 $n$명의 줄에 새 사람이 들어오면, 그 사람에게 $n + 1$번 번호표를 주면 됩니다. 이것이 (a)입니다. 반대로 $n + 1$명의 줄에서 한 사람이 빠질 때, 빠진 사람이 마지막 번호였다면 번호표를 그대로 두면 되지만, 중간 번호였다면 번호가 하나 비어 버립니다. 이때 마지막 번호표를 가진 사람이 빈 번호를 받으면 다시 $1$번부터 $n$번까지 빈틈이 없습니다. 이것이 (b)에서 "마지막 자리와 빠지는 원소의 자리를 맞바꾸는" 구성입니다.

수학에서는 줄의 순서가 아니라 전단사의 존재만 중요하다는 점에서 비유와 다릅니다. 이 항목은 뒤에서 [[pigeonhole-principle|비둘기집 원리]]의 증명에 쓰이는 도구이고, 함수의 제한은 그 증명에서 정의역을 하나 줄일 때 필요합니다.

## 증명

:::idea
(a)는 전단사에 순서쌍 $(n+1, x)$를 더한다. (b)는 빠지는 원소 $a$의 번호 $k$와 마지막 번호 $n+1$을 맞바꾼 전단사를 만들고, 마지막 번호를 떼어 낸다.
:::

:::hint
(a)에서 전단사 $h$에 순서쌍 하나를 더한 집합이 여전히 함수이고 단사이고 전사인지, 새 순서쌍이 기존 순서쌍과 부딪치는 경우를 하나씩 따져 보세요.
:::

:::hint
(b)에서 $h(k) = a$인 $k$가 $n + 1$이면 그냥 제한하면 됩니다. $k \ne n + 1$이면 $k$와 $n + 1$을 서로 바꾸는 함수 $\tau$를 먼저 만들고, $h \circ \tau$를 제한하세요.
:::

:::proof
**함수의 제한.** $f|_X \subseteq f \subseteq A \times B$이고 $f|_X$의 모든 순서쌍의 첫째 성분이 $X$의 원소이므로 $f|_X \subseteq X \times B$이다. $x \in X$라 하자. $X \subseteq A$이므로 $(x, b) \in f$인 $b \in B$가 있고, $x \in X$이므로 $(x, b) \in f|_X$이다(존재). $(x, b), (x, b') \in f|_X$이면 둘 다 $f$에 속하므로 $f$의 유일 조건에 의해 $b = b'$이다(유일). 따라서 $f|_X$는 $X$에서 $B$로의 함수이다. $x \in X$에 대하여 $f|_X(x) = b$인 것은 $(x, b) \in f|_X$, 곧 $(x, b) \in f$일 때이므로 $f|_X(x) = f(x)$이다. $f$가 단사이고 $x, x' \in X$에 대하여 $f|_X(x) = f|_X(x')$이면 $f(x) = f(x')$이므로 [[injective-surjective-bijective|단사의 동치 꼴]]에 의해 $x = x'$이다. 따라서 $f|_X$는 단사이다.

**(a)의 증명.** $h : \{1, \dots, n\} \to A$가 전단사라 하고 $h^+ = h \cup \{(n+1, x)\}$로 둔다. [[finite-set]]의 (F1)에 의해 $\{1, \dots, n+1\} = \{1, \dots, n\} \cup \{n+1\}$이고 $n+1 \notin \{1, \dots, n\}$이다. $h \subseteq \{1, \dots, n\} \times A$이므로 $h$의 순서쌍은 모두 $\{1, \dots, n+1\} \times (A \cup \{x\})$에 속하고, $(n+1, x)$도 속한다. 따라서 $h^+ \subseteq \{1, \dots, n+1\} \times (A \cup \{x\})$이다.

*함수이다.* 존재: $i \in \{1, \dots, n+1\}$이 $\{1, \dots, n\}$에 속하면 $(i, h(i)) \in h \subseteq h^+$이고 $h(i) \in A \cup \{x\}$이다. $i = n + 1$이면 $(n+1, x) \in h^+$이다. 유일: $(i, b), (i, b') \in h^+$라 하자. 둘 다 $h$에 속하면 $h$가 함수이므로 $b = b'$이다. 둘 다 $(n+1, x)$이면 $b = b' = x$이다. 하나는 $h$에 속하고 다른 하나는 $(n+1, x)$라면 $h$에 속하는 쪽의 첫째 성분 $i$가 $\{1, \dots, n\}$에 속하고 다른 쪽에서 $i = n + 1$이어서 $n + 1 \in \{1, \dots, n\}$이 되는데, 이는 (F1)에 어긋난다. 따라서 $h^+$는 $\{1, \dots, n+1\}$에서 $A \cup \{x\}$로의 함수이고, $i \in \{1, \dots, n\}$이면 $h^+(i) = h(i)$, $h^+(n+1) = x$이다.

*단사이다.* $h^+(i) = h^+(i')$라 하자. (F1)에 의해 $i$와 $i'$는 각각 $\{1, \dots, n\}$에 속하거나 $n+1$이므로 다음 네 경우가 있다. $i, i' \in \{1, \dots, n\}$이면 $h(i) = h(i')$이고 $h$가 단사이므로 $i = i'$이다. $i = i' = n+1$이면 같다. $i \in \{1, \dots, n\}$이고 $i' = n+1$이면 $h(i) = h^+(i) = h^+(i') = x$인데 $h(i) \in A$이고 $x \notin A$이므로 불가능하다. $i = n+1$이고 $i' \in \{1, \dots, n\}$이면 $x = h^+(i) = h^+(i') = h(i')$인데 $h(i') \in A$이고 $x \notin A$이므로 불가능하다. 따라서 $i = i'$이다.

*전사이다.* $b \in A \cup \{x\}$라 하자. $b \in A$이면 $h$가 전사이므로 $h(i) = b$인 $i \in \{1, \dots, n\}$이 있고 $h^+(i) = b$이다. $b = x$이면 $h^+(n+1) = b$이다.

따라서 $h^+$는 $\{1, \dots, n+1\}$에서 $A \cup \{x\}$로의 전단사이고, $A \cup \{x\}$는 원소를 $n + 1$개 갖는다.

**(b)의 증명.** $h : \{1, \dots, n+1\} \to A$가 전단사이고 $a \in A$라 하자. $h$가 전사이므로 $h(k) = a$인 $k \in \{1, \dots, n+1\}$가 있다.

*1단계: $g(n+1) = a$인 전단사 $g : \{1, \dots, n+1\} \to A$를 만든다.* $k = n+1$이면 $g = h$로 둔다. $k \ne n+1$이면 $\tau : \{1, \dots, n+1\} \to \{1, \dots, n+1\}$을 $\tau(k) = n+1$, $\tau(n+1) = k$, 그 밖의 $i$에서는 $\tau(i) = i$로 정한다. $\{1, \dots, n+1\}$의 각 원소는 $k$이거나 $n+1$이거나 둘 다 아니고 $k \ne n+1$이므로 이 세 경우 가운데 정확히 하나에 속하며, 어느 경우든 값이 $\{1, \dots, n+1\}$의 원소이므로 $\tau$는 함수이다. 모든 $i$에서 $\tau(\tau(i)) = i$이다: $i = k$이면 $\tau(\tau(k)) = \tau(n+1) = k$, $i = n+1$이면 $\tau(\tau(n+1)) = \tau(k) = n+1$, 그 밖이면 $\tau(\tau(i)) = \tau(i) = i$. 따라서 $\tau(i) = \tau(i')$이면 $i = \tau(\tau(i)) = \tau(\tau(i')) = i'$이어서 $\tau$는 단사이고, $b \in \{1, \dots, n+1\}$이면 $\tau(b) \in \{1, \dots, n+1\}$이고 $\tau(\tau(b)) = b$이므로 $\tau$는 전사이다. $g = h \circ \tau$로 두면 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 $g$는 전단사이고 $g(n+1) = h(\tau(n+1)) = h(k) = a$이다.

*2단계: $g$를 $\{1, \dots, n\}$으로 제한한다.* (F1)에 의해 $\{1, \dots, n\} \subseteq \{1, \dots, n+1\}$이다. $i \in \{1, \dots, n\}$이면 $i \ne n+1$(F1의 $n + 1 \notin \{1, \dots, n\}$)이고 $g$가 단사이므로 $g(i) \ne g(n+1) = a$이다. 곧 $g(i) \in A - \{a\}$이다. 위의 제한에 대한 결과에 의해 $g|_{\{1, \dots, n\}}$은 $\{1, \dots, n\}$에서 $A$로의 함수이고 단사이며, 모든 값이 $A - \{a\}$에 속하므로 [[function]]의 진술에 의해 같은 집합이 $\{1, \dots, n\}$에서 $A - \{a\}$로의 함수이기도 하다. 전사임을 보이자. $b \in A - \{a\}$이면 $b \in A$이므로 $g(i) = b$인 $i \in \{1, \dots, n+1\}$이 있다. $i = n+1$이면 $b = g(n+1) = a$인데 $b \ne a$이므로 불가능하다. 따라서 (F1)에 의해 $i \in \{1, \dots, n\}$이고 $g|_{\{1, \dots, n\}}(i) = g(i) = b$이다. 따라서 $g|_{\{1, \dots, n\}} : \{1, \dots, n\} \to A - \{a\}$는 전단사이고 $A - \{a\}$는 원소를 $n$개 갖는다. $\blacksquare$
:::

## 예시와 반례

:::example[(a): 새 원소 더하기]
$A = \{\text{가}, \text{나}\}$는 $h = \{(1, \text{나}), (2, \text{가})\}$로 원소를 $2$개 갖습니다. $x = \text{다}$는 $A$의 원소가 아닙니다. 증명의 $h^+ = \{(1, \text{나}), (2, \text{가}), (3, \text{다})\}$는 $\{1, 2, 3\}$에서 $A \cup \{\text{다}\} = \{\text{가}, \text{나}, \text{다}\}$로의 전단사이므로 이 집합은 원소를 $3$개 갖습니다.
:::

:::example[(b): 마지막 자리와 맞바꾸기]
$A = \{2, 4, 6, 8\}$은 $h(i) = 2i$로 정한 $h = \{(1, 2), (2, 4), (3, 6), (4, 8)\}$으로 원소를 $4 = 3 + 1$개 갖습니다. $a = 4$를 빼 봅니다. $h(2) = 4$이므로 $k = 2$이고 $n + 1 = 4$이므로 $k \ne n+1$입니다. $\tau$는 $2$와 $4$를 서로 바꾸고 $1, 3$은 그대로 둡니다. $g = h \circ \tau$는 $g(1) = h(1) = 2$, $g(2) = h(4) = 8$, $g(3) = h(3) = 6$, $g(4) = h(2) = 4$입니다. $g$를 $\{1, 2, 3\}$으로 제한하면 $\{(1, 2), (2, 8), (3, 6)\}$이고, 값이 서로 다르며 $A - \{4\} = \{2, 6, 8\}$의 원소가 모두 나오므로 전단사입니다. 이 집합은 원소를 $3$개 갖습니다.
:::

:::counterexample[가정을 빼면 깨진다]
(a)에서 $x \notin A$라는 가정을 빼면 깨집니다. $A = \{1\}$은 원소를 $1$개 갖고 $x = 1 \in A$로 두면 $A \cup \{x\} = \{1\}$입니다. 이 집합이 원소를 $1 + 1 = 2$개 갖는다고 하면 $\{1, 2\}$에서 $\{1\}$로의 전단사가 있어야 하는데, $\{1, 2\}$에서 $\{1\}$로의 함수는 $\{(1, 1), (2, 1)\}$ 하나뿐이고 $1 \ne 2$인데 값이 같아서 단사가 아닙니다.

(b)에서 $a \in A$라는 가정을 빼면 깨집니다. $A = \{1, 2\}$는 원소를 $2 = 1 + 1$개 갖고 $a = 3 \notin A$로 두면 $A - \{3\} = \{1, 2\}$입니다. 이 집합이 원소를 $1$개 갖는다면 $\{1\}$에서 $\{1, 2\}$로의 전단사가 있어야 하는데, 이 함수는 $\{(1, 1)\}$과 $\{(1, 2)\}$뿐이고 각각 값으로 $2$, $1$이 나오지 않아 전사가 아닙니다.
:::

## 확인 질문

:::check[$A = \{2, 5\}$와 $h = \{(1, 5), (2, 2)\}$는 $\{1, 2\}$에서 $A$로의 전단사이다. $x = 7$로 두고 증명의 $h^+$를 쓰고 $h^+(1)$, $h^+(3)$을 구하라.]
$7 \notin A$이므로 (a)를 쓸 수 있고 $h^+ = \{(1, 5), (2, 2), (3, 7)\}$입니다. $h^+(1) = h(1) = 5$이고 $h^+(3) = 7$입니다. $h^+$는 $\{1, 2, 3\}$에서 $A \cup \{7\} = \{2, 5, 7\}$으로의 전단사입니다.
:::

:::check[$A = \{\text{가}, \text{나}, \text{다}\}$이고 $h = \{(1, \text{가}), (2, \text{나}), (3, \text{다})\}$이다. $a = \text{가}$로 두고 (b)의 구성으로 $\{1, 2\}$에서 $A - \{\text{가}\}$로의 전단사를 구하라.]
$h(1) = \text{가}$이므로 $k = 1$이고 $n + 1 = 3$입니다. $\tau$는 $1$과 $3$을 바꾸고 $2$는 그대로 둡니다. $g = h \circ \tau$는 $g(1) = h(3) = \text{다}$, $g(2) = h(2) = \text{나}$, $g(3) = h(1) = \text{가}$입니다. $\{1, 2\}$로 제한하면 $\{(1, \text{다}), (2, \text{나})\}$이고, 이것이 $\{\text{나}, \text{다}\} = A - \{\text{가}\}$로의 전단사입니다.
:::
