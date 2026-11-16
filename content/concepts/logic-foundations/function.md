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
    note: "출처 Definition 12.1은 함수를 'f ⊆ A × B인 관계로서, A의 각 원소 a에 대하여 (a, b) 꼴의 순서쌍이 f에 정확히 하나 들어 있는 것'이라 정의하고, (a, b) ∈ f를 f(a) = b로 줄여 쓴다. 아래 진술은 '정확히 하나'를 존재와 유일의 두 조건으로 풀어 쓴 것이다. Definition 12.2는 A를 정의역, B를 공역, {f(a) : a ∈ A}를 치역이라 부른다. Definition 12.2 뒤의 본문(p.225)은 치역이 공역의 부분집합이며 공역이 함수의 본질적인 특징이 아니라 선택이나 문맥의 문제이고 공역은 치역을 포함하는 어떤 집합이든 될 수 있다고 말한다. Definition 12.3은 f = g를 집합으로서 같음으로 정의하고 'f(x) = g(x)가 정의역의 모든 x에서 성립하는 것과 동치'라고 하며, Definition 12.3 뒤의 본문(p.227)은 같은 함수가 서로 다른 공역을 가질 수 있다고 말한다. 출처는 이 동치를 간단히 설명할 뿐이므로 아래 '같음에 대한 설명' 블록의 증명은 이 사이트에서 직접 쓴 것이다. 출처 Definition 12.3은 정의역이 같은 두 함수에 대해 쓰여 있고, 같은 함수는 정의역이 같다는 말은 본문(p.227)에 있다. 아래 진술의 '공역은 선언하기 나름이다'(f : A → B이고 f의 모든 값이 B′에 속하면 f는 A에서 B′로의 함수이기도 하다)는 출처 p.225의 위 설명을 정확한 문장으로 쓰고 증명을 덧붙인 것으로, 이 사이트에서 덧붙였다. 정의역이 f에서 정해진다는 설명, 공집합이 정의역이거나 공역일 때의 설명, 직관의 학생과 담임 비유, 모든 예시와 반례는 출처에 없고 이 사이트에서 새로 만들었다. 다만 '공역이 달라도 같은 함수일 수 있다'는 예(ℤ에서 ℤ로, ℤ에서 ℝ로)는 출처 p.227의 예와 같은 발상이고, 식으로 주어진 함수를 순서쌍의 집합으로 적는 방식은 출처 pp.223–224의 서술을 따른 것이다. 출처의 12.1절 연습문제 9(p.228)에 나오는 집합 {(x², x)}는 아래 반례와 같은 발상이다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$, $B$가 [[set]]일 때, **$A$에서 $B$로의 관계**(relation from $A$ to $B$)는 [[cartesian-product]] $A \times B$의 [[subset]]이다. ($B = A$이면 [[relation]]에서 정의한 $A$ 위의 관계이다.)

**$A$에서 $B$로의 함수**(function) $f$는 $A$에서 $B$로의 관계 $f \subseteq A \times B$ 가운데, $A$의 모든 원소 $a$에 대하여 다음 두 조건이 모두 성립하는 것이다. 이를 $f : A \to B$로 쓴다.

1. (존재) $(a, b) \in f$인 $b \in B$가 적어도 하나 있다.
2. (유일) $b, b' \in B$이고 $(a, b) \in f$이고 $(a, b') \in f$이면 $b = b'$이다.

곧 $f \subseteq A \times B$가 함수인 것은 정확히 "$\forall a \in A$, $(a, b) \in f$인 $b \in B$가 정확히 하나 존재한다"일 때이다. $a \in A$, $b \in B$에 대하여 $(a, b) \in f$인 것을 $f(a) = b$로 쓴다. 따라서 $f(a) = b$는 정확히 $(a, b) \in f$일 때 성립하고, 모든 $a \in A$에 대하여 $f(a)$는 $B$의 원소 하나로 정해진다.

**정의역, 공역, 치역.** $f : A \to B$라고 쓸 때 $A$를 $f$의 **정의역**(domain), 이 표기에서 밝힌 $B$를 $f$의 **공역**(codomain)이라 한다. $f$의 **치역**(range)은
$$\{f(a) : a \in A\} = \{b \in B : (a, b) \in f \text{인 } a \in A \text{가 있다}\}$$
이고, 항상 공역 $B$의 부분집합이다.

**공역은 선언하기 나름이다.** $f : A \to B$이고 $B'$가 치역을 포함하는 집합, 곧 모든 $a \in A$에 대하여 $f(a) \in B'$인 집합이면, 같은 집합 $f$는 $A$에서 $B'$로의 함수이기도 하다. 따라서 공역은 집합 $f$만으로 정해지지 않고 $f : A \to B$라고 쓸 때 어떤 $B$를 밝혔느냐에 달려 있다. 정의역 $A$는 집합 $f$에서 정해진다. $A$는 $f$에 속한 순서쌍의 첫째 성분 전체의 집합이기 때문이다.

**함수의 같음.** 두 함수 $f : A \to B$, $g : C \to D$가 **같다**($f = g$)는 것은 집합으로서 $f = g$라는 뜻이다. 이때 $A = C$이다. 정의역이 같은 두 함수 $f : A \to B$, $g : A \to D$에 대하여, $f = g$인 것은 정확히 모든 $x \in A$에 대하여 $f(x) = g(x)$일 때이다. 공역 $B$와 $D$는 같을 필요가 없다.
:::

:::english
Let $A$ and $B$ be sets. A **relation from $A$ to $B$** is a subset of the Cartesian product $A \times B$. (When $B = A$, this is a relation on $A$.)

A **function** $f$ **from $A$ to $B$** is a relation $f \subseteq A \times B$ from $A$ to $B$ such that for every element $a \in A$ both of the following hold. We write $f : A \to B$.

1. (Existence) There is at least one $b \in B$ with $(a, b) \in f$.
2. (Uniqueness) If $b, b' \in B$, $(a, b) \in f$ and $(a, b') \in f$, then $b = b'$.

That is, $f \subseteq A \times B$ is a function exactly when, for every $a \in A$, there is exactly one $b \in B$ with $(a, b) \in f$. For $a \in A$ and $b \in B$ we write $f(a) = b$ to mean $(a, b) \in f$. Hence $f(a) = b$ holds exactly when $(a, b) \in f$, and for every $a \in A$ the value $f(a)$ is a uniquely determined element of $B$.

**Domain, codomain, range.** When we write $f : A \to B$, the set $A$ is the **domain** of $f$ and the set $B$ named in this notation is its **codomain**. The **range** of $f$ is
$$\{f(a) : a \in A\} = \{b \in B : (a, b) \in f \text{ for some } a \in A\},$$
and it is always a subset of the codomain $B$.

**The codomain is a matter of declaration.** If $f : A \to B$ and $B'$ is a set containing the range, that is, $f(a) \in B'$ for every $a \in A$, then the same set $f$ is also a function from $A$ to $B'$. Hence the codomain is not determined by the set $f$ alone, but by which $B$ we name when we write $f : A \to B$. The domain $A$ is determined by the set $f$, because $A$ is the set of first coordinates of the ordered pairs in $f$.

**Equality of functions.** Two functions $f : A \to B$ and $g : C \to D$ are **equal**, written $f = g$, if $f = g$ as sets. In that case $A = C$. For two functions $f : A \to B$ and $g : A \to D$ with the same domain, $f = g$ exactly when $f(x) = g(x)$ for every $x \in A$. The codomains $B$ and $D$ need not be equal.
:::

## 직관

한 학교의 학생들이 있고, 각 학생에게 담임 선생님이 정확히 한 분 있다고 합시다. "(학생, 담임)" 쌍을 전부 적은 명단이 곧 함수 $f$입니다. 명단에서 $f(\text{학생}) = \text{담임}$이라고 읽습니다. 두 학생이 같은 담임을 가질 수는 있지만, 담임이 없는 학생이나 담임이 둘인 학생은 있을 수 없습니다. 이 두 금지가 정의의 (존재)와 (유일)에 해당합니다.

학생이 정의역의 원소이고, 학교의 모든 선생님의 집합이 공역입니다. 실제로 담임을 맡은 선생님만 모은 것이 치역입니다. 담임을 맡지 않은 선생님이 있어도 되는 것처럼, 함수의 정의도 공역의 원소가 모두 값으로 쓰이기를 요구하지 않습니다. 모두 쓰이는 경우가 [[injective-surjective-bijective]]의 전사입니다. 비유가 어긋나는 곳은 두 가지입니다. 학교는 유한하고 고정되어 있지만 정의역과 공역은 무한집합일 수 있습니다. 또 선생님의 집합은 학교가 정해 주지만, 함수의 공역은 치역을 포함하기만 하면 바꿔 선언할 수 있습니다.

이 정의에서 함수는 "규칙"이 아니라 순서쌍의 집합입니다. 그래서 두 함수가 같은지는 집합으로 같은지, 곧 정의역이 같고 각 입력에서 같은 출력을 내는지로 판단합니다. $f(n) = n^2$처럼 식으로 주어진 함수도 $\{(n, n^2) : n \in \mathbb{Z}\}$라는 집합입니다. 집합 $f$는 공역을 담고 있지 않으므로, "공역"은 $f : A \to B$라고 적을 때 밝힌 집합을 가리키는 말입니다. 출처는 공역이 함수의 본질적인 특징이라기보다 선택과 문맥의 문제라고 말합니다. 전사나 합성처럼 공역을 쓰는 개념은 선언된 공역에 대한 것임을 뒤에서 분명히 합니다.

:::remark[공역을 바꿔도 같은 집합이 함수이다]
$f : A \to B$이고 모든 $a \in A$에 대하여 $f(a) \in B'$라 하자. $f \subseteq A \times B'$이고 $f$가 (존재), (유일)을 만족함을 보인다.

$(a, b) \in f$이면 $f \subseteq A \times B$이므로 $a \in A$, $b \in B$이고, $(a, b) \in f$는 $f(a) = b$를 뜻하므로 가정에 의해 $b = f(a) \in B'$이다. 따라서 $(a, b) \in A \times B'$이고, $f \subseteq A \times B'$이다.

$a \in A$라 하자. (존재): $(a, f(a)) \in f$이고 가정에 의해 $f(a) \in B'$이므로 $(a, b) \in f$인 $b \in B'$가 있다. (유일): $b, b' \in B'$이고 $(a, b) \in f$, $(a, b') \in f$라 하자. $f \subseteq A \times B$이므로 $b, b' \in B$이고, $f : A \to B$의 (유일) 조건에 의해 $b = b'$이다. 따라서 $f$는 $A$에서 $B'$로의 함수이다.

정의역이 $f$에서 정해진다는 것도 확인한다. $a \in A$이면 (존재)에 의해 $(a, b) \in f$인 $b$가 있고, 거꾸로 $(x, y) \in f$이면 $f \subseteq A \times B$이므로 $x \in A$이다. 따라서 $A$는 $\{x : (x, y) \in f \text{인 } y \text{가 있다}\}$와 같다.
:::

:::remark[같음에 대한 설명]
위 진술의 같음에 관한 두 주장을 확인한다.

$f : A \to B$, $g : C \to D$이고 집합으로서 $f = g$라 하자. 위의 "공역을 바꿔도 같은 집합이 함수이다"에서 보았듯이 $A$는 $f$의 순서쌍의 첫째 성분 전체의 집합이고 $C$는 $g$의 순서쌍의 첫째 성분 전체의 집합이다. $f = g$이므로 두 집합이 같고 $A = C$이다.

이제 $f : A \to B$, $g : A \to D$라 하자. 먼저 $f = g$이고 $x \in A$라 하자. $(x, f(x)) \in f = g$이고 $g \subseteq A \times D$이므로 $f(x) \in D$이고, 표기의 약속에 의해 $g(x) = f(x)$이다. 거꾸로 모든 $x \in A$에서 $f(x) = g(x)$라 하자. $(x, y) \in f$이면 $f \subseteq A \times B$이므로 $x \in A$이고 $y = f(x)$이다. 가정에 의해 $f(x) = g(x)$이므로 $y = g(x)$이고, 따라서 $(x, y) \in g$이다. $(x, y) \in g$이면 $g \subseteq A \times D$이므로 $x \in A$이고 $y = g(x)$이다. 가정에 의해 $g(x) = f(x)$이므로 $y = f(x)$이고, 따라서 $(x, y) \in f$이다. 두 방향이 모두 성립하므로 집합으로서 $f = g$이다.
:::

## 예시와 반례

서로 다른 대상을 가리키는 이름으로 가, 나, 다를 씁니다.

:::example[순서쌍의 집합으로 적은 함수]
$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}, \text{다}\}$이고 $f = \{(1, \text{가}), (2, \text{나}), (3, \text{가})\}$라 합시다. $f \subseteq A \times B$이고, $1, 2, 3$ 각각이 첫째 성분으로 정확히 한 번씩 나오므로 $f : A \to B$는 함수입니다. $f(1) = \text{가}$, $f(2) = \text{나}$, $f(3) = \text{가}$이고 치역은 $\{\text{가}, \text{나}\}$입니다. 다는 공역에는 있지만 치역에는 없습니다.
:::

:::example[식으로 주어진 함수]
정수 $n$에 대하여 $f(n) = n^2 + 1$이라 하면 $f = \{(n, n^2 + 1) : n \in \mathbb{Z}\}$는 $\mathbb{Z} \times \mathbb{Z}$의 부분집합입니다. 정수 $a$를 하나 잡으면, (존재): $(a, a^2 + 1) \in f$이고 $a^2 + 1$은 정수입니다. (유일): $(a, b) \in f$이면 어떤 정수 $n$에 대하여 $(a, b) = (n, n^2 + 1)$이므로 순서쌍이 같을 조건에 의해 $n = a$이고 $b = n^2 + 1 = a^2 + 1$입니다. 따라서 $f : \mathbb{Z} \to \mathbb{Z}$는 함수이고 $f(2) = 5$, $f(-2) = 5$입니다. 모든 값이 실수이므로 같은 집합 $f$는 공역을 $\mathbb{R}$로 잡은 함수 $g : \mathbb{Z} \to \mathbb{R}$, $g(n) = n^2 + 1$이기도 합니다. 정의역이 $\mathbb{Z}$로 같고 모든 정수 $n$에서 $f(n) = g(n)$이므로 $f = g$입니다. 공역은 다르지만 같은 함수입니다.
:::

:::example[공집합이 정의역이거나 공역인 경우]
$A = \emptyset$이면 $(a, b) \in A \times B$이려면 $a \in \emptyset$이어야 하는데 그런 $a$가 없으므로 $A \times B = \emptyset$입니다. 따라서 $f \subseteq A \times B$는 $f = \emptyset$뿐입니다. 이때 (존재)와 (유일)은 $A$의 원소에 관한 조건이라 공허하게 참이므로 $\emptyset$은 함수 $\emptyset \to B$입니다. 어떤 집합 $B$에 대해서도 $\emptyset$에서 $B$로의 함수는 정확히 하나 있습니다.

$A \ne \emptyset$이고 $B = \emptyset$이면 $b \in \emptyset$인 $b$가 없으므로 $A \times B = \emptyset$이고 $f = \emptyset$뿐인데, $a \in A$를 하나 잡으면 $(a, b) \in f$인 $b$가 없어서 (존재)가 깨집니다. 따라서 공집합이 아닌 집합에서 공집합으로의 함수는 없습니다.
:::

:::counterexample[존재가 깨지는 경우와 유일이 깨지는 경우]
$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}\}$일 때, $R = \{(1, \text{가}), (2, \text{나})\}$는 $A$에서 $B$로의 관계이지만 함수가 아닙니다. $3 \in A$에 대하여 $(3, b) \in R$인 $b$가 없어서 (존재)가 깨지기 때문입니다. $S = \{(1, \text{가}), (1, \text{나}), (2, \text{가}), (3, \text{나})\}$도 함수가 아닙니다. $1 \in A$에 대하여 $(1, \text{가}), (1, \text{나}) \in S$이고 가 $\ne$ 나라서 (유일)이 깨집니다.
:::

:::counterexample[값이 공역 밖으로 나가는 식]
$g(n) = n/2$라는 식은 $\mathbb{Z} \to \mathbb{Z}$의 함수를 정하지 못합니다. $n = 1$이면 $n/2 = 1/2$인데 $1/2$은 정수가 아니라서 $(1, 1/2) \notin \mathbb{Z} \times \mathbb{Z}$이고, 따라서 $\{(n, n/2) : n \in \mathbb{Z}\} \not\subseteq \mathbb{Z} \times \mathbb{Z}$이기 때문입니다. 같은 식이 $\mathbb{Z} \to \mathbb{R}$의 함수는 됩니다. 식만으로는 함수가 정해지지 않습니다. 정의역을 밝히고, 모든 값이 들어 있는 집합을 공역으로 잡아야 합니다.
:::

:::counterexample[순서쌍의 둘째 성분을 입력으로 쓰면]
$T = \{(n^2, n) : n \in \mathbb{Z}\}$는 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수가 아닙니다. $(1, 1) \in T$이고 $(1, -1) \in T$인데 $1 \ne -1$이라 (유일)이 깨집니다. 이 설명에서는 $1^2 = 1$과 $(-1)^2 = 1$만 썼습니다. 또 $2$를 첫째 성분으로 하는 순서쌍이 $T$에 없어서 (존재)도 깨집니다. $m^2 = 2$인 정수 $m$은 없기 때문입니다. $|m| \le 1$이면 $m^2 \le 1$이고 $|m| \ge 2$이면 $m^2 \ge 4$입니다. 제곱을 거꾸로 거슬러 올라가는 대응은 $\mathbb{Z}$에서 $\mathbb{Z}$로는 함수가 아닙니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$, $B = \{1, 2, 3\}$일 때 $f = \{(1, 2), (2, 2), (3, 1)\}$은 $A$에서 $B$로의 함수인가? 그렇다면 $f(2)$와 치역을 구하라.]
$1, 2, 3$ 각각이 첫째 성분으로 정확히 한 번씩 나오고 둘째 성분은 모두 $B$의 원소이므로 함수입니다. $f(2) = 2$이고 치역은 $\{f(1), f(2), f(3)\} = \{2, 2, 1\} = \{1, 2\}$입니다.
:::

:::check[$\{1, 2, 3\}$에서 $\{\text{가}, \text{나}\}$로의 관계 $\{(1, \text{가}), (2, \text{나})\}$와 $\{(1, \text{가}), (2, \text{나}), (3, \text{가}), (3, \text{나})\}$는 각각 함수인가?]
둘 다 함수가 아닙니다. 첫째 관계에서는 $3$을 첫째 성분으로 하는 순서쌍이 없어 (존재)가 깨집니다. 둘째 관계에서는 $(3, \text{가})$와 $(3, \text{나})$가 모두 있고 가 $\ne$ 나라서 (유일)이 깨집니다.
:::
