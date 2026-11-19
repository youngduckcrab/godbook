---
title: 군
title_en: Group
aliases: [아벨군, 가환군, 유한군, 무한군, 군의 위수, 항등원, 역원, abelian group, commutative group, finite group, infinite group, order of a group]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 집합 G와 G 위의 이항연산 ∗의 순서쌍 (G, ∗)가 결합법칙을 만족하고 항등원을 가지며 모든 원소가 역원을 가지면 군이다. 아벨군, 유한군과 군의 위수, 곱 표기의 약속을 정한다.
requires: [set, cartesian-product, binary-operation, recursion-theorem, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, natural-numbers-are-infinite, even-and-odd, well-ordering-principle]
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Definitions and Examples, 군의 정의와 아벨군(번호 없음) p.33–34, 곱 표기의 약속 p.34, 유한군과 군의 위수 p.36
    checked: original
    note: "출처는 군 (G, ◦)를 '집합 G 와 세 공리를 만족하는 연산'으로 정의하고, 셋째 공리에서 역원을 a⁻¹ 로 적는다. 항등원과 역원이 하나뿐이라는 것은 정의 뒤의 Proposition 3.17, 3.18(p.36)에서 보인다. 이 항목은 유일성을 이항연산 항목에서 먼저 보이고(그 항목의 (1), (2)), 정의 다음에 기호 e 와 a⁻¹ 를 들인다. 출처의 연산 기호 ◦ 는 이 사이트에서 합성이므로 ∗ 로 바꾸었다. 출처는 무한군에 |ℤ| = ∞ 라고도 쓰지만(p.36) 이 사이트는 |G| 를 유한군에만 쓴다. 세 원소의 곱을 괄호 없이 쓰는 약속과 네 개 이상은 괄호를 친다는 약속은 이 사이트의 것이다(출처는 Proposition 3.19 의 증명 등에서 네 원소의 곱을 괄호 없이 쓴다). '가환군'은 출처의 'commutative'(p.34)를 옮긴 것이다. (4)(공집합은 군이 아니다)와 (5)(원소가 하나인 군)는 출처에 명제로 없다(검색어 'empty', 'nonempty', 'one element', 'single element', 'trivial group'. 출처는 부분군 {e} 를 trivial subgroup 이라 부른다, p.38). 예시 (ℤ, +)는 출처 Example 3.8(p.34)과 같은 대상, 같은 결론이다. 이 항목은 그것을 이항연산 항목의 (4)로 증명한다. 반례 (ℤ, ·)에서 0 의 역원이 없다는 논법은 출처 Example 3.11(p.34)이 ℤ_n 의 곱셈에서 0 에 대해 하는 것과 같은 발상이다. 반례 (ℕ, +), (ℤ, −)는 출처에서 찾지 못했다(검색어 'natural numbers', 'not a group', 'subtract'). 확인 질문의 {1, −1} 은 출처가 p.150 에서 곱셈에 대한 군 {−1, 1} 을 준동형의 공역으로 쓰는 것과 같은 대상이다. 확인 질문의 ({0}, ·)는 출처에서 찾지 못했다(검색어 '{0}')."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[set]]이고 $\ast$가 $G$ 위의 [[binary-operation|이항연산]]이라 하자. 순서쌍 $(G, \ast)$가 **군**(group)인 것은 정확히 다음 세 조건이 모두 성립할 때이다. 결합법칙, 항등원, 역원은 [[binary-operation|이항연산]] 항목의 뜻이다.

1. (결합법칙) 모든 $a, b, c \in G$에 대하여 $(a \ast b) \ast c = a \ast (b \ast c)$이다.
2. (항등원) $\ast$의 항등원이 $G$에 있다. 곧 모든 $a \in G$에 대하여 $e \ast a = a$이고 $a \ast e = a$인 $e \in G$가 있다.
3. (역원) $G$의 모든 원소 $a$에 대하여 $a$의 역원이 $G$에 있다. 곧 $a \ast b = e$이고 $b \ast a = e$인 $b \in G$가 있다. 여기서 $e$는 (2)의 항등원이다.

**항등원과 역원의 기호.** [[binary-operation|이항연산]]의 (1)에 의해 (2)의 항등원은 하나뿐이다. 이것을 군 $(G, \ast)$의 **항등원**이라 하고 $e$로 쓴다. 여러 군을 함께 다룰 때는 $e_G$로 쓴다. (1)이 성립하므로 [[binary-operation|이항연산]]의 (2)에 의해 $G$의 각 원소 $a$의 역원은 하나뿐이다. 이것을 $a^{-1}$로 쓴다. 따라서 모든 $a \in G$에 대하여 $a \ast a^{-1} = e$이고 $a^{-1} \ast a = e$이다.

**아벨군.** 군 $(G, \ast)$가 **아벨군**(abelian group) 또는 **가환군**(commutative group)인 것은 정확히 $\ast$가 교환법칙을 만족할 때, 곧 모든 $a, b \in G$에 대하여 $a \ast b = b \ast a$일 때이다.

**유한군과 군의 위수.** 군 $(G, \ast)$가 **유한군**(finite group)인 것은 정확히 $G$가 [[finite-set|유한집합]]일 때이고, 유한군이 아닌 군을 **무한군**(infinite group)이라 한다. 유한군 $G$의 원소의 개수 $|G|$([[number-of-elements-is-unique|원소의 개수]])를 $G$의 **위수**(order)라고도 한다. $|G|$는 유한군에만 쓴다.

**표기의 약속.** 연산이 문맥에서 분명하면 군 $(G, \ast)$를 "군 $G$"라 부른다. $a \ast b$를 $ab$로 줄여 쓰고 $a$와 $b$의 **곱**(product)이라 한다. $a, b, c \in G$이면 (1)에 의해 $(ab)c = a(bc)$이므로 이 원소를 괄호 없이 $abc$로 쓴다. 네 개 이상의 원소의 곱은 괄호를 쳐서 쓴다. 연산을 $+$로 쓰는 군의 표기는 그런 군을 다루는 항목에서 밝힌다.

다음이 성립한다.

4. (공집합) 군 $(G, \ast)$에서 $G$는 공집합이 아니다. 따라서 공집합 위의 어떤 이항연산 $\ast$에 대해서도 $(\emptyset, \ast)$는 군이 아니다.
5. (원소가 하나인 군) $x$가 대상이면 집합 $\{x\}$ 위의 이항연산은 $x \ast x = x$인 것 하나뿐이다. 이 연산으로 $(\{x\}, \ast)$는 아벨군이고, 항등원은 $x$, $x^{-1} = x$이며, $|\{x\}| = 1$이다.
:::

:::english
Let $G$ be a set and $\ast$ a binary operation on $G$. The ordered pair $(G, \ast)$ is a **group** exactly when all three of the following conditions hold. Associativity, identity elements and inverses are meant in the sense of the entry on binary operations.

1. (Associativity) $(a \ast b) \ast c = a \ast (b \ast c)$ for all $a, b, c \in G$.
2. (Identity) $\ast$ has an identity element in $G$; that is, there is $e \in G$ with $e \ast a = a$ and $a \ast e = a$ for all $a \in G$.
3. (Inverses) Every element $a$ of $G$ has an inverse in $G$; that is, there is $b \in G$ with $a \ast b = e$ and $b \ast a = e$, where $e$ is the identity element of (2).

**Notation for the identity and inverses.** By (1) of the entry on binary operations, the identity element in (2) is unique. It is called the **identity** of the group $(G, \ast)$ and written $e$; when several groups are involved we write $e_G$. Since (1) holds, by (2) of the entry on binary operations each element $a$ of $G$ has exactly one inverse, written $a^{-1}$. Hence $a \ast a^{-1} = e$ and $a^{-1} \ast a = e$ for every $a \in G$.

**Abelian groups.** A group $(G, \ast)$ is an **abelian group** or **commutative group** exactly when $\ast$ is commutative, that is, $a \ast b = b \ast a$ for all $a, b \in G$.

**Finite groups and the order of a group.** A group $(G, \ast)$ is a **finite group** exactly when $G$ is a finite set; a group that is not finite is an **infinite group**. The number of elements $|G|$ of a finite group $G$ is also called the **order** of $G$. We write $|G|$ only for finite groups.

**Conventions of notation.** When the operation is clear from the context, we call the group $(G, \ast)$ simply "the group $G$". We abbreviate $a \ast b$ to $ab$ and call it the **product** of $a$ and $b$. For $a, b, c \in G$ we have $(ab)c = a(bc)$ by (1), so this element is written $abc$ without parentheses. Products of four or more elements are written with parentheses. The notation for groups whose operation is written $+$ is explained in the entries dealing with such groups.

The following hold.

4. (The empty set) If $(G, \ast)$ is a group, then $G$ is not empty. Hence $(\emptyset, \ast)$ is not a group for any binary operation $\ast$ on the empty set.
5. (Groups with one element) If $x$ is an object, the only binary operation on the set $\{x\}$ is the one with $x \ast x = x$. With this operation $(\{x\}, \ast)$ is an abelian group, its identity is $x$, $x^{-1} = x$, and $|\{x\}| = 1$.
:::

## 직관

군은 "되돌릴 수 있는 계산"의 모임입니다. 정수에 $3$을 더하는 일은 $-3$을 더하면 되돌릴 수 있고, 아무것도 하지 않는 일($0$을 더하기)도 계산의 하나로 셉니다. 비유의 부분이 공리에 맞습니다. "아무것도 하지 않는 계산"이 항등원 (2)이고, "모든 계산을 되돌릴 수 있다"는 것이 역원 (3)이며, "계산을 차례로 이어 붙일 때 어느 둘을 먼저 묶어도 같다"는 것이 결합법칙 (1)입니다. 비유가 맞지 않는 곳도 있습니다. 군의 원소는 계산이 아니어도 되고, 정의에는 원소가 무엇인지가 전혀 나오지 않습니다.

세 공리 가운데 하나라도 빠지면 군이 아닙니다. 아래 반례에서 자연수의 덧셈은 (2)가, 정수의 곱셈은 (3)이, 정수의 뺄셈은 (1)과 (2)가 깨집니다. 교환법칙은 공리가 아닙니다. 모든 $a$, $b$에서 $ab = ba$인 군을 따로 아벨군이라 부릅니다.

군을 집합만이 아니라 순서쌍 $(G, \ast)$로 정의하면 같은 집합 위의 서로 다른 연산을 구별해 말할 수 있습니다. $\mathbb{Z}$는 덧셈으로는 군이지만 곱셈으로는 군이 아닙니다(아래 예시와 반례).

:::remark[(4)와 (5)의 증명]
(4) (2)에 의해 $G$에 원소 $e$가 있으므로 $G \ne \emptyset$이다. 공집합에는 원소가 없으므로 공집합 위의 어떤 이항연산으로도 (2)가 성립하지 않는다.

(5) [[cartesian-product|곱집합]]의 뜻에 의해 $(u, v) \in \{x\} \times \{x\}$인 것은 정확히 $u = x$이고 $v = x$일 때이므로 $\{x\} \times \{x\} = \{(x, x)\}$이다. $\ast$가 $\{x\}$ 위의 이항연산이면 $x \ast x \in \{x\}$이므로 $x \ast x = x$이다. 따라서 $\{x\}$ 위의 두 이항연산은 유일한 순서쌍 $(x, x)$에서 값이 같고, [[binary-operation|이항연산]]의 같음에 의해 같은 연산이다. 그런 연산이 있다는 것은 [[recursion-theorem|재귀 정리]]의 (1)에서 나온다. $\{x\} \times \{x\}$의 원소 $(x, x)$에 이미 정해진 대상 $x$를 대응시키면 $\{((x, x), x)\}$가 $\{x\} \times \{x\}$에서 $\{x\}$로의 함수가 된다.

이 연산에서 $a, b, c \in \{x\}$는 모두 $x$이므로 $(a \ast b) \ast c = x \ast x = x$이고 $a \ast (b \ast c) = x$이다. 따라서 (1)이 성립한다. $x \ast x = x$이므로 $x$는 항등원이고 (2)가 성립한다. 같은 등식 $x \ast x = x$는 항등원 $x$에 대하여 $x$가 $x$의 역원이라는 뜻이므로 (3)이 성립하고 $x^{-1} = x$이다. $a \ast b = x = b \ast a$이므로 아벨군이다. 끝으로 [[finite-set|유한집합]]의 (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고 $x \notin \emptyset$이므로, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\emptyset \cup \{x\} = \{x\}$는 원소를 $1$개 갖는다. [[number-of-elements-is-unique|원소의 개수]]의 표기로 $|\{x\}| = 1$이다.
:::

## 예시와 반례

:::example[정수의 덧셈은 아벨군을 이룬다]
$(\mathbb{Z}, +)$는 아벨군입니다. [[binary-operation|이항연산]]의 (4)에 의해 덧셈은 $\mathbb{Z}$ 위의 이항연산이고, 결합법칙과 교환법칙을 만족하며, $0$이 항등원이고, 모든 정수 $a$에서 $-a$가 $a$의 역원입니다. 따라서 세 공리가 모두 성립하고 교환법칙도 성립합니다. 항등원과 역원은 하나뿐이므로 이 군의 항등원은 $0$이고, $a$의 역원은 $-a$입니다. 이 군에서는 기호 $e$, $a^{-1}$ 대신 $0$, $-a$를 씁니다. 또 $\mathbb{N} \subseteq \mathbb{Z}$이므로 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\mathbb{Z}$는 무한집합이고, $(\mathbb{Z}, +)$는 무한군입니다. 무한군이므로 $|\mathbb{Z}|$라고 쓰지 않습니다.
:::

:::counterexample[자연수의 덧셈: 항등원이 없다]
$\mathbb{N}$은 양의 정수의 집합입니다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). $a, b \in \mathbb{N}$이면 $0 < b$의 양변에 $a$를 더해 $a < a + b$이고((Z7)), $0 < a$와 함께 $0 < a + b$입니다((Z6)). $a + b$는 정수이므로([[even-and-odd]]에서 받아들인 사실) $a + b \in \mathbb{N}$입니다. 따라서 $\mathbb{N}$은 정수의 덧셈에 대해 닫혀 있고, [[binary-operation|이항연산]]의 (3)에 의해 덧셈을 $\mathbb{N}$으로 제한한 연산은 $\mathbb{N}$ 위의 결합적인 이항연산입니다.

그러나 이 연산은 항등원을 갖지 않습니다. $e \in \mathbb{N}$이 항등원이라면 $e + 1 = 1$이고, 양변에서 $1$을 빼면 $e = 0$입니다((Z7)). 그런데 $e \in \mathbb{N}$이므로 $0 < e$, 곧 $0 < 0$이 되어, $0 = 0$과 $0 < 0$ 가운데 하나만 성립한다는 삼분법 (Z5)에 어긋납니다. 따라서 (2)가 깨지고 $(\mathbb{N}, +)$는 군이 아닙니다. 여기서 (Z5)–(Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질입니다.
:::

:::counterexample[정수의 곱셈: 0의 역원이 없다]
[[binary-operation|이항연산]]의 (4)에 의해 곱셈은 $\mathbb{Z}$ 위의 결합적인 이항연산이고 $1$이 그 항등원입니다. 그 항목의 (1)에 의해 항등원은 $1$ 하나뿐이므로, $0$의 역원은 $0 \cdot b = 1$이고 $b \cdot 0 = 1$인 정수 $b$여야 합니다. 그런데 모든 정수 $b$에서 $0 \cdot b = 0$이고 $0 \ne 1$입니다([[well-ordering-principle|정렬 원리]]의 (L3)). 따라서 $0$은 역원을 갖지 않고 (3)이 깨져서, $(\mathbb{Z}, \cdot)$는 군이 아닙니다. 같은 집합 $\mathbb{Z}$가 덧셈으로는 군이었습니다.
:::

:::counterexample[정수의 뺄셈: 결합법칙과 항등원이 없다]
[[binary-operation|이항연산]]의 (4)에 의해 뺄셈은 $\mathbb{Z}$ 위의 이항연산입니다. $(0 - 0) - 1 = -1$이고 $0 - (0 - 1) = 0 - (-1) = 1$이며 $-1 \ne 1$이므로 (1)이 깨집니다. 항등원도 없습니다. $e$가 항등원이라면 $a - e = a$가 $a = 0$에서도 성립해야 하므로 $-e = 0$, 곧 $e = 0$입니다. 그러면 $e - a = a$가 $a = 1$에서 $0 - 1 = 1$이 되는데 $0 - 1 = -1 \ne 1$입니다. 따라서 $(\mathbb{Z}, -)$는 군이 아닙니다.
:::

## 확인 질문

:::check[$\{1, -1\}$은 정수의 곱셈으로 군을 이루는가?]
이룹니다. $1 \cdot 1 = 1$, $1 \cdot (-1) = -1$, $(-1) \cdot 1 = -1$, $(-1) \cdot (-1) = 1$이므로 $\{1, -1\}$은 곱셈에 대해 닫혀 있습니다. [[binary-operation|이항연산]]의 (3)과 (4)에 의해 곱셈을 $\{1, -1\}$로 제한한 연산은 결합적이고 가환이며, $1 \in \{1, -1\}$이 그 항등원입니다. $1$의 역원은 $1$이고, $(-1) \cdot (-1) = 1$이므로 $-1$의 역원은 $-1$입니다. 따라서 아벨군입니다. $\{1\}$은 원소를 $1$개 갖고((5)) $-1 \notin \{1\}$이므로, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\{1, -1\}$은 원소를 $2$개 갖는 유한군입니다.
:::

:::check[$\{0\}$은 정수의 곱셈으로 군을 이루는가? 이룬다면 항등원은 무엇인가?]
이룹니다. $0 \cdot 0 = 0$이므로 $\{0\}$은 곱셈에 대해 닫혀 있고, 곱셈을 $\{0\}$으로 제한한 연산은 (5)의 연산($0 \ast 0 = 0$)입니다. (5)에 의해 이것은 군이고 항등원은 $0$입니다. 이 군의 항등원은 $1$이 아닙니다. $1$은 $\{0\}$의 원소가 아니기 때문입니다. 덧셈을 $\{0\}$으로 제한한 연산도 $0 + 0 = 0$이므로 같은 연산입니다.
:::
