---
title: 유한집합과 원소의 개수
title_en: Finite Sets and the Number of Elements
aliases: [유한집합, 무한집합, 원소를 n개 갖는다, finite set, infinite set, has n elements]
kind: definition
field: logic-foundations
msc: ["03E10"]
level: intro
summary: "집합 A가 원소를 n개 갖는다는 것은 {1, …, n}에서 A로의 전단사가 있다는 것이고, 어떤 n에 대해 그렇다면 A를 유한집합, 아니면 무한집합이라 한다."
requires: [set, subset, cartesian-product, function, injective-surjective-bijective, inverse-function, bijective-iff-inverse-is-a-function, function-composition, composition-preserves-injectivity-and-surjectivity, even-and-odd, prime-number, well-ordering-principle]
sources:
  - ref: hammack-book-of-proof
    loc: 1.1절 Introduction to Sets, p.3(유한집합과 무한집합), p.4(유한집합 X의 크기 |X|는 원소의 개수). 14.1절 Definition 14.1, p.269와 p.270
    checked: original
    note: "출처는 1.1절(p.3)에서 '원소가 무한히 많은 집합을 무한집합이라 하고, 그렇지 않으면 유한집합이라 한다'고 쓰고, p.4에서 '유한집합 X의 크기는 X가 가진 원소의 개수이고 |X|로 쓴다'고 쓴다. 출처는 '무한히 많다'나 '원소의 개수'를 따로 정의하지 않는다. 이 항목의 정의(원소를 n개 갖는다 = {1, …, n}에서 A로의 전단사가 존재한다)는 출처의 것이 아니고 이 사이트가 출처의 말을 엄밀하게 대신하려고 정한 것이다. 출처는 14.1절에서 '유한집합에 대해서는 원소를 세어 같은 수가 나오면 |A| = |B|라 해 왔다'고 쓰고(p.269) Definition 14.1이 유한집합과 무한집합에 모두 적용된다고 강조한다(p.270). 이 항목은 '원소를 n개 갖는다'를 {1, …, n}과 크기가 같다는 뜻으로 정해 그 말과 이어진다. {1, …, n}의 정의, 기본 사실 (F1)–(F5)와 그 증명은 출처에 없고 이 사이트가 직접 썼다. 줄임 표기 |A| = n은 하나로 정해진다는 증명(별도 항목) 전에는 쓰지 않는다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
정수 $n \ge 0$에 대하여 $\{1, \dots, n\} = \{i \in \mathbb{Z} : 1 \le i \le n\}$으로 정한다. 이 집합은 $n = 0$이면 공집합이다(아래 (F1)).

$A$가 [[set]]이고 $n \ge 0$이 정수일 때, $A$가 **원소를 $n$개 갖는다**($A$ has $n$ elements)는 것은 정확히 $\{1, \dots, n\}$에서 $A$로의 [[injective-surjective-bijective|전단사]] $h : \{1, \dots, n\} \to A$(공역은 $A$)가 존재할 때이다. $A$가 **유한집합**(finite set)인 것은 정확히 어떤 정수 $n \ge 0$에 대하여 $A$가 원소를 $n$개 가질 때이고, 유한집합이 아닌 집합을 **무한집합**(infinite set)이라 한다.

"$A$가 원소를 $n$개 갖는다"를 줄여 $|A| = n$이라 쓰기로 약속한다. 그러나 이 $n$이 $A$에서 하나로 정해진다는 것은 이 항목에서 증명하지 않으며, 증명하기 전에는 이 줄임 표기를 쓰지 않고 항상 "원소를 $n$개 갖는다"라고 쓴다.

**기본 사실.** $A$, $B$는 집합이고 $n \ge 0$은 정수이다.

- (F1) $\{1, \dots, 0\} = \emptyset$이다. 또 $\{1, \dots, n+1\} = \{1, \dots, n\} \cup \{n+1\}$이고 $n + 1 \notin \{1, \dots, n\}$이다.
- (F2) $\{1, \dots, n\}$은 원소를 $n$개 갖는다. 특히 $\emptyset$은 원소를 $0$개 갖는다. 거꾸로 원소를 $0$개 갖는 집합은 $\emptyset$뿐이다.
- (F3) $f : A \to B$가 전단사이면 [[inverse-function|역관계]] $f^{-1}$은 $B$에서 $A$로의 전단사이다.
- (F4) $A$가 원소를 $n$개 갖고 $f : A \to B$가 전단사이면 $B$도 원소를 $n$개 갖는다.
- (F5) $A$와 $B$가 둘 다 원소를 $n$개 가지면 $A$에서 $B$로의 전단사가 존재한다.

이 사실들을 증명할 때 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 합이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
For an integer $n \ge 0$ we put $\{1, \dots, n\} = \{i \in \mathbb{Z} : 1 \le i \le n\}$. This set is empty when $n = 0$ (see (F1) below).

Let $A$ be a set and $n \ge 0$ an integer. $A$ **has $n$ elements** exactly when there exists a bijection $h : \{1, \dots, n\} \to A$ (with codomain $A$). $A$ is a **finite set** exactly when, for some integer $n \ge 0$, $A$ has $n$ elements. A set that is not finite is called an **infinite set**.

We agree to abbreviate "$A$ has $n$ elements" as $|A| = n$. However, this entry does not prove that this $n$ is determined by $A$, and until that is proved we do not use the abbreviation and always write "has $n$ elements".

**Basic facts.** Here $A$ and $B$ are sets and $n \ge 0$ is an integer.

- (F1) $\{1, \dots, 0\} = \emptyset$. Also $\{1, \dots, n+1\} = \{1, \dots, n\} \cup \{n+1\}$ and $n + 1 \notin \{1, \dots, n\}$.
- (F2) $\{1, \dots, n\}$ has $n$ elements. In particular $\emptyset$ has $0$ elements. Conversely, the only set with $0$ elements is $\emptyset$.
- (F3) If $f : A \to B$ is a bijection, then the inverse relation $f^{-1}$ is a bijection from $B$ to $A$.
- (F4) If $A$ has $n$ elements and $f : A \to B$ is a bijection, then $B$ also has $n$ elements.
- (F5) If $A$ and $B$ both have $n$ elements, then there exists a bijection from $A$ to $B$.

To prove these facts we cite (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle for integers and inequalities, and we use the accepted fact that the sum of integers is an integer.
:::

## 직관

물건을 센다는 것은 "하나, 둘, 셋, …" 하고 번호를 붙여 가는 일입니다. 번호 $1, 2, \dots, n$ 각각에 물건 하나가 대응하고(함수), 같은 물건에 번호가 두 번 붙지 않고(단사), 번호가 붙지 않은 물건이 없을 때(전사) "원소가 $n$개"라고 합니다. 이 정의는 그 일을 전단사 $h : \{1, \dots, n\} \to A$로 옮긴 것입니다. $h(i)$는 $i$번째로 센 물건입니다.

비유가 어긋나는 곳이 있습니다. 실제로 셀 때는 어떤 순서로 세어도 같은 수가 나온다고 믿지만, 이 정의는 그것을 말해 주지 않습니다. 같은 집합이 원소를 $n$개 갖고 동시에 $n'$개($n \ne n'$)도 가질 수는 없는지, 곧 $n$이 하나로 정해지는지는 따로 증명해야 합니다. 그것은 [[number-of-elements-is-unique|원소의 개수가 하나로 정해진다는 정리]]에서 합니다. 또 "원소를 $n$개 갖는다"는 [[equal-cardinality|크기가 같다]]의 말로는 $\{1, \dots, n\}$과 $A$의 크기가 같다는 뜻입니다.

이 정의는 [[set]]과 [[countably-infinite-set]] 항목의 "원소가 유한 개인 집합"이라는 비형식적인 말을 엄밀하게 대신합니다. 그 항목들의 글은 고치지 않았습니다.

:::remark[기본 사실의 증명]
(F1) $i$가 정수이고 $1 \le i \le 0$이면 (Z6)에 의해 $1 \le 0$이다. 그런데 (Z8)에 의해 $0 < 1$이므로, $0 < 1$과 $1 \le 0$이 함께 성립하여 (L1)에 어긋난다. 따라서 $\{1, \dots, 0\}$에는 원소가 없다.

이제 $n \ge 0$이라 하자. $n + 1$은 정수이다. $i \in \{1, \dots, n+1\}$이라 하자. $i = n+1$이면 $i \in \{n+1\}$이다. $i = n + 1$이 아니면 $i \le n + 1$에서 $i < n + 1$이고 (Z1)에 의해 $i + 1 \le n + 1$이다. 양변에서 $1$을 빼면 (Z7)에 의해 $i \le n$이므로 $1 \le i \le n$이고 $i \in \{1, \dots, n\}$이다. 거꾸로 $i \in \{1, \dots, n\}$이면 $i \le n$이고 (L3)에 의해 $n < n + 1$이므로 (Z6)에 의해 $i < n + 1$이어서 $i \le n+1$이고, $1 \le i$이므로 $i \in \{1, \dots, n+1\}$이다. $n + 1 \in \{1, \dots, n+1\}$임은 $0 \le n$의 양변에 $1$을 더하면 (Z7)에 의해 $1 \le n + 1$이고 $n + 1 \le n + 1$이기 때문이다. 이로써 $\{1, \dots, n+1\} = \{1, \dots, n\} \cup \{n+1\}$이다. 마지막으로 $n + 1 \le n$이라 하면, (L3)의 $n < n + 1$과 함께 성립하여 (L1)에 어긋난다. 따라서 $n + 1 \notin \{1, \dots, n\}$이다.

(F2) 항등함수 $i = \{(x, x) : x \in \{1, \dots, n\}\}$는 $\{1, \dots, n\}$에서 자신으로의 함수이다([[inverse-function|역함수 항목]]에서 정의한 $i_A$). $i(a) = i(a')$이면 $a = a'$이므로 단사이고, 모든 $b \in \{1, \dots, n\}$에 대하여 $i(b) = b$이므로 전사이다. 따라서 $\{1, \dots, n\}$은 원소를 $n$개 갖는다. $n = 0$이면 (F1)에 의해 $\{1, \dots, 0\} = \emptyset$이므로 $\emptyset$은 원소를 $0$개 갖는다. 거꾸로 $A$가 원소를 $0$개 가져 전단사 $h : \{1, \dots, 0\} \to A$가 있다고 하자. $b \in A$이면 $h$가 전사이므로 $h(i) = b$인 $i \in \{1, \dots, 0\} = \emptyset$이 있어야 하는데 그런 $i$는 없다. 따라서 $A$의 원소는 없고 $A = \emptyset$이다.

(F3) [[bijective-iff-inverse-is-a-function|전단사와 역함수에 관한 정리]]에 의해, $f : A \to B$가 전단사이므로 $f^{-1} = \{(y, x) : (x, y) \in f\}$는 $B$에서 $A$로의 함수이다. 이 함수를 $g : B \to A$라 하자. $g$의 역관계 $g^{-1} = \{(x, y) : (y, x) \in g\}$에서, $(y, x) \in g = f^{-1}$은 정확히 $(x, y) \in f$일 때이므로 $g^{-1} = f$이다. $f$는 $A$에서 $B$로의 함수이므로 $g^{-1}$이 $A$에서 $B$로의 함수이고, 같은 진술에 의해 $g : B \to A$는 전단사이다.

(F4) $h : \{1, \dots, n\} \to A$와 $f : A \to B$가 전단사이면 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 $f \circ h : \{1, \dots, n\} \to B$가 전단사이다.

(F5) $h_A : \{1, \dots, n\} \to A$, $h_B : \{1, \dots, n\} \to B$가 전단사라 하자. (F3)에 의해 $h_A^{-1} : A \to \{1, \dots, n\}$이 전단사이고, 합성 $h_B \circ h_A^{-1} : A \to B$는 같은 항목의 3번에 의해 전단사이다.
:::

## 예시와 반례

:::example[세 개의 과일]
$A = \{\text{사과}, \text{배}, \text{귤}\}$라 하고 $h = \{(1, \text{배}), (2, \text{귤}), (3, \text{사과})\}$로 정합니다. $1, 2, 3$ 각각이 첫째 성분으로 한 번씩 나오고 둘째 성분이 모두 $A$의 원소이므로 $h : \{1, 2, 3\} \to A$는 함수입니다($\{1, \dots, 3\} = \{1, 2, 3\}$). 값 배, 귤, 사과가 서로 다르므로 단사이고, $A$의 원소 셋이 모두 값이므로 전사입니다. 따라서 $A$는 원소를 $3$개 갖는 유한집합입니다. $\{(1, \text{사과}), (2, \text{배}), (3, \text{귤})\}$도 전단사이므로 전단사는 하나가 아닙니다. 정의가 요구하는 것은 전단사의 존재입니다.
:::

:::example[3의 배수 다섯 개]
$B = \{3, 6, 9, 12, 15\}$에 대하여 $h = \{(1, 3), (2, 6), (3, 9), (4, 12), (5, 15)\}$는 $\{1, \dots, 5\}$에서 $B$로의 함수이고, 값이 모두 다르며 $B$의 원소가 모두 값으로 나오므로 전단사입니다. $B$는 원소를 $5$개 갖습니다. 한 줄로 쓰면 $h(i) = 3i$입니다.
:::

:::counterexample[함수가 있다고 원소가 그 수만큼인 것은 아니다]
$A = \{\text{가}\}$라 하고 $\{1, 2, 3\}$에서 $A$로의 함수를 찾아봅니다. 함수는 $c = \{(1, \text{가}), (2, \text{가}), (3, \text{가})\}$ 하나뿐입니다. $c(1) = c(2)$이고 $1 \ne 2$이므로 $c$는 단사가 아니어서 전단사가 아닙니다. 따라서 $A$는 원소를 $3$개 갖지 않습니다. $\{(1, \text{가})\}$는 $\{1\}$에서 $A$로의 전단사이므로 $A$는 원소를 $1$개 갖습니다. "$\{1, \dots, n\}$에서 $A$로의 함수가 있다"만으로는 $A$가 원소를 $n$개 갖는다고 할 수 없고, 전단사여야 합니다.
:::

## 확인 질문

:::check[$B = \{x \in \mathbb{Z} : 3 \le x \le 7\}$는 원소를 몇 개 갖는가? 정의에 맞게 전단사를 써서 보여라.]
$h(i) = i + 2$로 정한 $h : \{1, \dots, 5\} \to B$를 봅니다. $h(1) = 3$, $h(2) = 4$, $h(3) = 5$, $h(4) = 6$, $h(5) = 7$이므로 값이 모두 $B$의 원소이고 서로 다르며, $B = \{3, 4, 5, 6, 7\}$의 원소가 모두 값으로 나옵니다. 따라서 $h$는 전단사이고 $B$는 원소를 $5$개 갖습니다.
:::

:::check[원소를 $0$개 갖는 집합은 몇 개 있는가?]
정확히 하나, 공집합뿐입니다. (F2)에 의해 원소를 $0$개 갖는 집합은 $\emptyset$뿐이고, $\emptyset$은 원소를 $0$개 갖기 때문입니다.
:::
