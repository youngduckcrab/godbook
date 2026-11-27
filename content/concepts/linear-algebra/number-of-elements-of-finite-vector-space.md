---
title: 유한체 위 벡터공간의 원소 개수
title_en: Number of Elements of a Vector Space over a Finite Field
aliases: [곱집합의 원소 개수, Fⁿ 의 원소 개수, number of elements of a finite vector space, cardinality of a product set]
kind: proposition
field: linear-algebra
msc: ["15A03", "05A05"]
level: undergrad
summary: 두 유한집합의 곱집합의 원소 개수는 두 개수의 곱이라는 것, 유한체 F 에 대하여 Fⁿ 의 원소 개수가 |F|ⁿ 이라는 것, F 위에서 n차원인 벡터공간의 원소 개수가 |F|ⁿ 이라는 것, 유한집합인 벡터공간은 유한차원이라는 것을 보인다.
requires: [set, cartesian-product, function, adding-or-removing-an-element, recursion-theorem, finite-set, number-of-elements-is-unique, disjoint-union-count, natural-numbers-are-infinite, mathematical-induction, prime-number, well-ordering-principle, prime-power-divisors, injective-surjective-bijective, group, finite-product-in-a-group, ring, field, finite-integral-domain-is-a-field, integers-modulo-n, real-number-arithmetic, finite-sums-in-a-ring, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, linear-maps-over-a-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Proposition 22.2 의 증명 (p.278)"
    checked: original
    note: "출처는 Proposition 22.2(유한체의 원소 개수가 소수의 거듭제곱) 의 증명에서 F 를 소체 K 위의 n차원 벡터공간으로 보고, 모든 원소가 a_1α_1 + ⋯ + a_nα_n (a_i ∈ K) 꼴로 하나뿐인 방법으로 쓰인다고 한 뒤 'Since there are p elements in K, there are pⁿ possible linear combinations' 라고만 적는다(p.278). 이 항목의 (3)이 이 셈이고, (1)(곱집합의 원소 개수)과 (2)는 그 셈의 근거로 이 사이트가 진술한 것이다. 출처는 F 가 K 위에서 유한차원이라는 것을 'Since F is a finite field, it must be a finite extension of K' 라고 적는다. 이 항목의 (4)가 그 근거이다. (1)은 출처에 명제로 없다(검색어 'Cartesian product', 'number of elements', 'elements in A × B', '|A × B|' 로 책 전체를 찾았다). 예시 '$\\mathbb{Z}_3^2$의 원소 아홉 개' 처럼 곱집합의 원소를 늘어놓는 것은 출처 1.2절 Example 1.5(p.6)의 A × B 의 원소 여섯 개, 1.4절 연습문제 2(p.14), 9.2절 Example 9.15(p.118)의 ℤ_2 × ℤ_2 의 원소 네 개와 같은 종류이다. 예시 '$1$차원 부분공간의 원소 개수' 의 한 벡터의 생성은 출처 20.4절 읽기 물음 2(p.256)가 한 원소 u 가 생성하는 부분공간을 묻는 것과 같은 종류이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
유한집합, 원소를 $n$개 갖는다, 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 뜻이고, 곱집합은 [[cartesian-product|곱집합]]의 것이다. 정수 $a$와 $0$ 이상인 정수 $k$에 대한 거듭제곱 $a^k$는 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다($a^0 = 1$). $F$는 [[field|체]]이고, $F^n$, 벡터공간, 유한차원, $\dim_F$는 [[vector-space-over-a-field|체 위의 벡터공간]]과 [[dimension-over-a-field|체 위의 차원]]의 것이다.

1. (곱집합의 원소 개수) $A$와 $B$가 유한집합이면 $A \times B$는 유한집합이고 $|A \times B| = |A| \cdot |B|$이다.
2. ($F^n$의 원소 개수) $F$가 유한집합이고 $n$이 자연수이면 $F^n$은 유한집합이고 $|F^n| = |F|^n$이다.
3. (유한차원 벡터공간의 원소 개수) $F$가 유한집합이고 $V$가 $F$ 위의 벡터공간으로서 $F$ 위에서 $n$차원($n \ge 0$)이면 $V$는 유한집합이고 $|V| = |F|^n$이다.
4. (유한집합인 벡터공간) $V$가 $F$ 위의 벡터공간이고 $V$가 유한집합이면 $V$는 $F$ 위에서 유한차원이다. 따라서 $F$가 유한집합이면, $F$ 위의 벡터공간 $V$가 유한집합인 것은 정확히 $V$가 $F$ 위에서 유한차원일 때이고, 그때 $|V| = |F|^{\dim_F V}$이다.
:::

:::english
Finite sets, "has $n$ elements" and the number of elements $|A|$ are in the sense of the entries on finite sets and on the number of elements, and Cartesian products are those of the entry on Cartesian products. For an integer $a$ and an integer $k \ge 0$, the power $a^k$ is the integer power of the entry on prime power divisors ($a^0 = 1$). $F$ is a field, and $F^n$, vector spaces, finite dimension and $\dim_F$ are those of the entries on vector spaces over a field and on dimension over a field.

1. (Number of elements of a Cartesian product) If $A$ and $B$ are finite sets, then $A \times B$ is a finite set and $|A \times B| = |A| \cdot |B|$.
2. (Number of elements of $F^n$) If $F$ is a finite set and $n$ is a natural number, then $F^n$ is a finite set and $|F^n| = |F|^n$.
3. (Number of elements of a finite-dimensional vector space) If $F$ is a finite set and $V$ is a vector space over $F$ that is $n$-dimensional over $F$ ($n \ge 0$), then $V$ is a finite set and $|V| = |F|^n$.
4. (Vector spaces that are finite sets) If $V$ is a vector space over $F$ and $V$ is a finite set, then $V$ is finite-dimensional over $F$. Hence, if $F$ is a finite set, a vector space $V$ over $F$ is a finite set exactly when $V$ is finite-dimensional over $F$, and then $|V| = |F|^{\dim_F V}$.
:::

## 직관

$F^n$의 원소는 $F$의 원소를 $n$개 늘어놓은 것이므로, 자리마다 $|F|$가지씩 고를 수 있어 모두 $|F|^n$개입니다. (1)과 (2)는 이 "자리마다 곱하는" 셈을 곱집합의 원소 개수로 증명한 것입니다. 첫째 자리로 나누면 $A \times B$는 $|A|$개의 덩어리 $\{a\} \times B$로 나뉘고, 덩어리마다 원소가 $|B|$개입니다.

(3)은 기저를 하나 정하면 벡터와 좌표의 열이 하나씩 짝지어지므로 벡터의 개수가 좌표의 열의 개수 $|F|^n$과 같다는 것입니다. (4)는 거꾸로 원소가 유한 개인 벡터공간은 그 원소 전체를 늘어놓은 열이 공간을 생성하므로 유한차원이라는 것입니다. 그래서 유한체 위의 벡터공간이 유한집합이면 그 원소 개수는 $|F|$의 거듭제곱입니다. 무한체 위에서는 (3)의 셈이 말해 주는 것이 없습니다(아래 반례).

## 증명

:::idea
(1)은 $|A|$에 대한 귀납으로, $A$에서 원소 하나를 떼어 $A \times B$를 서로소인 두 조각으로 나눈다. (2)는 $F^{n+1}$과 $F^n \times F$의 전단사로 $n$에 대한 귀납을 하고, (3)은 좌표 동형사상, (4)는 모든 원소를 늘어놓은 열이다.
:::

:::hint
(1)에서 $a \in A$이면 $A \times B$는 $(A - \{a\}) \times B$와 $\{a\} \times B$의 합집합이고, 두 집합은 첫째 성분이 달라 서로소이다.
:::

:::hint
(2)에서 $x \in F^{n+1}$을 처음 $n$개의 값과 마지막 값의 쌍으로 보낸다.
:::

:::proof
**쓰는 사실.** 정수의 계산과 순서는 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z5)–(Z7), [[prime-number]]의 (Z1)을 쓴다. 유한집합에 관한 것은 [[finite-set|유한집합]]의 (F1)–(F5), [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]], [[disjoint-union-count|서로소인 합집합의 원소 개수]]를 쓴다. 함수를 값으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓴다.

**1의 증명.** $B$를 고정하고, $n \ge 0$에 대한 귀납법으로 "원소를 $n$개 갖는 모든 집합 $A$에 대하여 $A \times B$는 유한집합이고 $|A \times B| = n \cdot |B|$"를 보인다.

$n = 0$이면 (F2)에 의해 $A = \emptyset$이고, 첫째 성분이 $\emptyset$의 원소인 순서쌍은 없으므로 $A \times B = \emptyset$이다. (F2)에 의해 이 집합은 원소를 $0 = 0 \cdot |B|$개 갖는다.

$n$에서 성립한다고 하고 $A$가 원소를 $n + 1$개 갖는다고 하자. 전단사 $\{1, \dots, n+1\} \to A$의 $1$에서의 값이 있으므로 $A \ne \emptyset$이고, $a \in A$를 하나 잡는다. 원소 하나를 더하거나 빼기의 (b)에 의해 $A - \{a\}$는 원소를 $n$개 가지므로, 귀납 가정에 의해 $(A - \{a\}) \times B$는 유한집합이고 원소를 $n \cdot |B|$개 갖는다. 각 $b \in B$에 $(a, b)$를 대응시키는 함수 $g : B \to \{a\} \times B$는 $(a, b) = (a, b')$이면 $b = b'$이므로 단사이고, $\{a\} \times B$의 원소는 모두 $(a, b)$ 꼴이므로 전사이다. (F4)에 의해 $\{a\} \times B$는 원소를 $|B|$개 갖는다. $(x, y) \in A \times B$이면 $x = a$이거나 $x \in A - \{a\}$이므로
$$
\begin{aligned}
A \times B &= \bigl((A - \{a\}) \times B\bigr) \\
&\quad \cup \bigl(\{a\} \times B\bigr)
\end{aligned}
$$
이고(오른쪽이 왼쪽에 포함되는 것은 $A - \{a\} \subseteq A$와 $a \in A$에서 나온다), 두 집합은 첫째 성분이 $a$와 같은지로 갈리므로 서로소이다. 서로소인 합집합의 원소 개수의 (1)에 의해 $A \times B$는 유한집합이고 $|A \times B| = n \cdot |B| + |B| = (n + 1) \cdot |B|$이다. 귀납법의 원리에 의해 모든 $n \ge 0$에서 성립하고, $n = |A|$로 두면 (1)이다.

**2의 증명.** $n \ge 1$에 대한 귀납법으로 보인다. $n = 1$이면 각 $x \in F^1$에 $x_1$을 대응시키는 함수 $F^1 \to F$는, $\{1\}$에서의 함수가 $1$에서의 값으로 정해지므로 단사이고, 각 $c \in F$에 대하여 $1$에서의 값이 $c$인 함수가 있으므로 전사이다. (F4)에 의해 $F^1$은 원소를 $|F|$개 갖고, $|F|^1 = |F|$이다([[prime-power-divisors|소수의 거듭제곱인 약수]]의 (1)의 (i)).

$n$에서 성립한다고 하자. 각 $x \in F^{n+1}$에 대하여 $x$를 $\{1, \dots, n\}$으로 제한한 $x' \in F^n$과 $x_{n+1}$의 쌍 $(x', x_{n+1})$을 대응시키는 함수 $\psi : F^{n+1} \to F^n \times F$를 생각한다. $\psi(x) = \psi(y)$이면 $k \le n$에서 $x_k = y_k$이고 $x_{n+1} = y_{n+1}$이므로, (F1)의 $\{1, \dots, n+1\} = \{1, \dots, n\} \cup \{n+1\}$에 의해 모든 자리에서 값이 같아 $x = y$이다. $(y, c) \in F^n \times F$가 주어지면 $k \le n$에서 값이 $y_k$이고 $n + 1$에서 값이 $c$인 $x \in F^{n+1}$이 있고(재귀 정리의 (1)) $\psi(x) = (y, c)$이다. 따라서 $\psi$는 전단사이다. 귀납 가정에 의해 $F^n$은 원소를 $|F|^n$개 가지므로, (1)과 (F4)에 의해 $F^{n+1}$은 유한집합이고
$$
\begin{aligned}
|F^{n+1}| &= |F^n \times F| \\
&= |F|^n \cdot |F| \\
&= |F|^{n+1}
\end{aligned}
$$
이다. 마지막 등호는 소수의 거듭제곱인 약수의 (1)의 (i)이다.

**3의 증명.** $n = 0$이면 [[dimension-over-a-field|체 위의 차원]]의 (6)에 의해 $V = \{0_V\}$이고, $1$에 $0_V$를 대응시키는 함수가 $\{1\}$에서 $V$로의 전단사이므로 $V$는 원소를 $1 = |F|^0$개 갖는다. $n \ge 1$이면 $V$의 길이 $n$인 기저가 있고, [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 (7)의 좌표 동형사상 $C : F^n \to V$는 전단사이다. (2)와 (F4)에 의해 $V$는 유한집합이고 $|V| = |F^n| = |F|^n$이다.

**4의 증명.** $V$가 원소를 $m$개 갖는다고 하고 전단사 $h : \{1, \dots, m\} \to V$를 잡는다. $0_V \in V$이므로 $V \ne \emptyset$이고, (F2)에 의해 $m \ne 0$, 곧 $m \ge 1$이다. $h$는 길이 $m$인 벡터의 열 $h_1, \dots, h_m$이다. $v \in V$이면 $h$가 전사이므로 $h_l = v$인 $l$이 있다. $l$번째 자리가 $1$이고 나머지 자리가 $0$인 스칼라의 열 $\delta$에 대하여 [[vector-space-over-a-field|체 위의 벡터공간]]의 (4)의 (v)와 스칼라배의 조건 (iv)에 의해 $\sum_{k=1}^{m} \delta_k h_k = 1h_l = v$이다. 따라서 $h$는 $V$를 생성하고, $V$는 유한차원이다. 둘째 문장: $F$가 유한집합일 때, 유한차원이면 (3)에 의해 $V$는 유한집합이고 $|V| = |F|^{\dim_F V}$이며, 유한집합이면 첫 문장에 의해 유한차원이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3^2$의 원소 아홉 개]
$\mathbb{Z}_3$은 원소가 $3$개인 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) (2)에 의해 $|\mathbb{Z}_3^2| = 3^2 = 9$이다. 실제로 원소는
$$
\begin{aligned}
&([0], [0]),\ ([0], [1]),\ ([0], [2]),\\
&([1], [0]),\ ([1], [1]),\ ([1], [2]),\\
&([2], [0]),\ ([2], [1]),\ ([2], [2])
\end{aligned}
$$
이고, 첫째 값으로 나누면 세 줄에 세 개씩이다. (1)의 증명이 나누는 조각과 같은 모양이다.
:::

:::example[$1$차원 부분공간의 원소 개수]
$\mathbb{Z}_5^2$에서 $W = \operatorname{span}_F(([1], [2]))$는 영벡터가 아닌 벡터 하나로 생성된다. 그 벡터 하나의 열은 일차독립이므로([[span-and-independence-over-a-field|생성과 일차독립]]의 (3)의 (iii)) 부분공간 $W$의 길이 $1$인 기저이고(같은 항목의 (5)), $W$는 $1$차원이다([[dimension-over-a-field|체 위의 차원]]의 (4)). (3)에 의해 $|W| = 5^1 = 5$이고, 원소는 $([0], [0]), ([1], [2]), ([2], [4]), ([3], [1]), ([4], [3])$이다. $|\mathbb{Z}_5^2| = 25$이므로 [[disjoint-union-count|서로소인 합집합의 원소 개수]]의 (2)에 의해 $W$에 들지 않는 벡터는 $25 - 5 = 20$개이다.
:::

:::counterexample[유한차원이지만 유한집합이 아닌 벡터공간의 예]
$\mathbb{R}$을 $\mathbb{R}$ 위의 벡터공간으로 보면 [[dimension-over-a-field|체 위의 차원]]의 (6)에 의해 $1$차원이다. 그러나 [[real-number-arithmetic|(K7)]]에 의해 정수는 실수이므로 $\mathbb{N} \subseteq \mathbb{R}$이고, [[natural-numbers-are-infinite|자연수의 집합은 무한집합]]의 (2)에 의해 $\mathbb{R}$은 유한집합이 아니다. (3)과 (4)의 둘째 문장은 $F$가 유한집합이라는 가정 아래의 말이고, (4)의 첫 문장의 역은 $F$가 무한집합이면 깨질 수 있다.
:::

## 확인 질문

:::check[원소가 $125$개인 $\mathbb{Z}_5$ 위의 벡터공간의 차원은 무엇인가?]
$3$이다. (4)에 의해 이 공간은 유한차원이고 $\dim = n$이면 $5^n = 125 = 5^3$이다. [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (2)에 의해 소수 $5$에 대하여 $5^n = 5^3$이면 $n = 3$이다.
:::

:::check[$\mathbb{Z}_3$ 위의 벡터공간이 원소를 $6$개 가질 수 있는가?]
없다. (4)에 의해 그런 공간은 유한차원이고 원소의 개수는 $3^n$이다. $3^0 = 1$, $3^1 = 3$이고, $n \ge 2$이면 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (2)에 의해 $3^n \ge 3^2 = 9$이다(같으면 $n = 2$, 아니면 $2 < n$에서 $3^2 < 3^n$). 어느 경우에도 $3^n \ne 6$이다.
:::
