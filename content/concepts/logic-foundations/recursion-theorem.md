---
title: 재귀 정리
title_en: Recursion Theorem
aliases: [재귀적 정의, 재귀로 정의한 수열, 귀납적 정의, 값으로 정한 함수, 순증가, recursion theorem, recursive definition, definition by recursion, strictly increasing]
kind: theorem
field: logic-foundations
msc: ["03"]
level: undergrad
summary: 집합 X 의 원소 a 와 함수 g 가 주어지면 x(1) = a 이고 모든 자연수 n 에서 x(n+1) = g(n, x(n)) 인 함수 x 가 정확히 하나 있다. 값으로 정한 함수, 두 함수를 함께 정하는 꼴, 재귀로 정하는 수열, 자연수 값을 갖는 순증가 함수를 함께 진술한다.
requires: [set, subset, set-operations, cartesian-product, function, proof-by-contradiction, mathematical-induction, finite-set, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, sequence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.3절 첫 문단과 Example 2.2.8 (p.66), Theorem 2.3.4 의 증명 (p.75), Lemma 3.3.7 의 증명 (p.132)
    checked: original
    note: "출처는 재귀 정의의 정당성을 진술하거나 증명하지 않는다. 진술과 증명은 이 사이트의 것이다. 출처는 2.2절 첫머리(p.61)에 '재귀로 정의된 수열은 건너뛰어도 된다'고 적고, 2.2.3절(p.66)에서 재귀로 정의된 수열을 '다음 항을 앞의 정해진 개수의 항에서 식으로 계산하는 수열'이라고 설명한다. 같은 쪽의 Example 2.2.8 은 x_1 = 2 와 x_{n+1} = x_n − (x_n² − 2)/(2x_n) 으로 수열을 정하면서, 0 으로 나누지 않는다는 것을 먼저 보여야 한다고 적고 '모든 n 에서 x_n 이 존재하고 x_n > 0'을 귀납법으로 보인다. Theorem 2.3.4 의 증명(p.75)은 'We define the subsequence inductively'라고 하며 첨자를 차례로 고르고, Lemma 3.3.7 의 증명(p.132)은 두 수열 a_n, b_n 을 함께 'inductively' 정의한다. 그 밖에 Theorem 1.4.2 의 증명(p.42)과 Theorem 2.3.8 의 다른 증명(p.78)도 수열을 'inductively' 정의한다. 'recurs'를 검색하면 2.2절의 세 곳(p.61 의 메모, p.66 의 절 제목과 설명)만 나온다. 이 항목은 바로 앞의 항 하나와 번호 n 에 기대는 꼴만 진술한다. 출처의 설명처럼 앞의 여러 항에 기대는 재귀는 진술하지 않는다. (1)(값으로 정한 함수)은 sequence 의 (1)을 정의역과 공역이 임의의 집합인 경우로 옮긴 것이고, (2)는 출처가 Lemma 3.3.7 에서 두 수열을 함께 정하는 것을 진술로 만든 것이다. 출처의 Definition 2.1.16(p.58)은 자연수의 수열 {n_i} 가 strictly increasing 인 것을 '모든 i 에서 n_i < n_{i+1}'로 쓴다. 이 항목의 (4)는 순증가를 'n < m 이면 f(n) < f(m)'으로 정의하고, 이웃한 두 값의 부등식에서 이것을 귀납법으로 얻는다. (4)의 x(k) ≥ k 는 출처가 Proposition 2.1.17 의 증명(p.58)에서 '귀납법으로 증명하기 어렵지 않다(do it!)'고만 하는 n_i ≥ i 와 같은 꼴이다. 예시와 반례의 수열은 출처에 없다(검색한 범위). 반례 '값이 정해지지 않는 규칙'은 Example 2.2.8 의 '0 으로 나누지 않음을 먼저 보여야 한다'와 같은 취지이다."
status: source-checked
added: 2026-11-17
---

:::statement
집합, 곱집합, 함수와 함수의 같음은 [[set]], [[cartesian-product]], [[function]]의 것이고, $\{1, \dots, k\}$는 [[finite-set]]의 것이다. $\mathbb{N}$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수의 집합이다.

**재귀 정리.** $X$를 집합, $a$를 $X$의 원소, $g : \mathbb{N} \times X \to X$를 함수라 하자. 그러면 함수 $x : \mathbb{N} \to X$로서
$$
x(1) = a \quad \text{이고} \quad \text{모든 자연수 } n \text{에서 } x(n+1) = g(n, x(n))
$$
인 것이 정확히 하나 있다. 이 함수 $x$를 "$x(1) = a$, $x(n+1) = g(n, x(n))$으로 **재귀적으로 정의한**(defined recursively) 함수"라 한다.

다음이 성립한다.

1. (값으로 정한 함수) $A$, $B$가 집합이고, $A$의 각 원소 $u$마다 $B$의 원소 $r(u)$가 하나씩 정해져 있으면, 집합 $\{(u, r(u)) : u \in A\}$는 $A$에서 $B$로의 함수이고 $u$에서의 값은 $r(u)$이다. 여기서 "정해져 있다"는 $r(u)$가 $u$에 대한 식이나 이미 정해진 대상으로 주어진다는 뜻이다. 각 $u$마다 어떤 조건을 만족하는 원소 가운데 하나를 고르는 것은 이 진술에 들어가지 않는다. 재귀 정리의 함수 $g$를 식으로 줄 때 이 (1)을 쓴다.
2. (두 함수를 함께 정하기) $Y$, $Z$가 집합이고 $b \in Y$, $c \in Z$이며 $p : \mathbb{N} \times (Y \times Z) \to Y$와 $q : \mathbb{N} \times (Y \times Z) \to Z$가 함수이면, 두 함수 $y : \mathbb{N} \to Y$, $z : \mathbb{N} \to Z$로서 $y(1) = b$, $z(1) = c$이고 모든 자연수 $n$에서
$$
y(n+1) = p\bigl(n, (y(n), z(n))\bigr), \qquad z(n+1) = q\bigl(n, (y(n), z(n))\bigr)
$$
인 것이 정확히 한 쌍 있다. 곧 이런 $y$, $z$가 있고, $y'$, $z'$도 이 조건을 만족하면 $y' = y$이고 $z' = z$이다.
3. (재귀로 정하는 수열) $X = \mathbb{R}$이면 재귀 정리의 $x$는 [[sequence]]의 뜻의 수열이다. $X$가 $\mathbb{R}$의 부분집합이면 $x$는 모든 항이 $X$에 속하는 수열이다. 재귀로 정하는 수열은 [[sequence]]의 (1)(값으로 정한 수열)로 정당화되지 않고 이 정리로 정당화된다. 이 정리를 쓰려면 $g$의 값이 모든 자연수 $n$과 $X$의 모든 원소 $t$에서 정해지고 $X$에 속한다는 것, 곧 $g$가 $\mathbb{N} \times X$에서 $X$로의 함수라는 것을 먼저 확인해야 한다.
4. (자연수 값을 갖는 순증가 함수) 함수 $f : \mathbb{N} \to \mathbb{N}$이 **순증가**(strictly increasing)인 것은 정확히 $n < m$인 모든 자연수 $n$, $m$에서 $f(n) < f(m)$일 때이다(부등호는 정수의 순서). $X = \mathbb{N}$이고 모든 자연수 $k$, $n$에서 $g(k, n) > n$이면, 재귀 정리의 $x : \mathbb{N} \to \mathbb{N}$은 순증가이고 모든 자연수 $k$에서 $x(k) \ge k$이다.
:::

:::english
Sets, Cartesian products, functions and equality of functions are those of the entries on sets, Cartesian products and functions, and $\{1, \dots, k\}$ is the one in the entry on finite sets. $\mathbb{N}$ is the set of positive integers (by the statement of the theorem on the set of natural numbers).

**Recursion theorem.** Let $X$ be a set, $a$ an element of $X$, and $g : \mathbb{N} \times X \to X$ a function. Then there is exactly one function $x : \mathbb{N} \to X$ such that
$$
x(1) = a \quad \text{and} \quad x(n+1) = g(n, x(n)) \text{ for every natural number } n.
$$
This function $x$ is called the function **defined recursively** by $x(1) = a$, $x(n+1) = g(n, x(n))$.

The following hold.

1. (Functions given by values) If $A$ and $B$ are sets and an element $r(u)$ of $B$ is specified for each element $u$ of $A$, then the set $\{(u, r(u)) : u \in A\}$ is a function from $A$ to $B$ whose value at $u$ is $r(u)$. Here "specified" means that $r(u)$ is given by a formula in $u$ or by objects already defined. Choosing, for each $u$, one of the elements satisfying some condition is not covered by this statement. We use this item (1) when the function $g$ of the recursion theorem is given by a formula.
2. (Defining two functions together) If $Y$ and $Z$ are sets, $b \in Y$, $c \in Z$, and $p : \mathbb{N} \times (Y \times Z) \to Y$ and $q : \mathbb{N} \times (Y \times Z) \to Z$ are functions, then there is exactly one pair of functions $y : \mathbb{N} \to Y$, $z : \mathbb{N} \to Z$ such that $y(1) = b$, $z(1) = c$, and for every natural number $n$
$$
y(n+1) = p\bigl(n, (y(n), z(n))\bigr), \qquad z(n+1) = q\bigl(n, (y(n), z(n))\bigr).
$$
That is, such $y$ and $z$ exist, and if $y'$ and $z'$ also satisfy these conditions, then $y' = y$ and $z' = z$.
3. (Recursively defined sequences) If $X = \mathbb{R}$, the function $x$ of the recursion theorem is a sequence in the sense of the entry on sequences. If $X$ is a subset of $\mathbb{R}$, then $x$ is a sequence all of whose terms belong to $X$. Recursively defined sequences are justified not by item (1) of the entry on sequences (sequences given by values) but by this theorem. To apply the theorem one must first check that the value of $g$ is specified at every natural number $n$ and every element $t$ of $X$ and belongs to $X$, that is, that $g$ is a function from $\mathbb{N} \times X$ to $X$.
4. (Strictly increasing functions with natural number values) A function $f : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** exactly when $f(n) < f(m)$ for all natural numbers $n$, $m$ with $n < m$ (the inequality is the order of the integers). If $X = \mathbb{N}$ and $g(k, n) > n$ for all natural numbers $k$, $n$, then the function $x : \mathbb{N} \to \mathbb{N}$ of the recursion theorem is strictly increasing and $x(k) \ge k$ for every natural number $k$.
:::

## 직관

요리법이 "첫째 날에는 반죽 $a$를 쓴다. $n$째 날의 반죽에 $n$째 날의 규칙 $g$를 적용해 다음 날의 반죽을 만든다"라고 적혀 있다고 해 봅시다. 첫째 날의 것($a$)과 다음 날로 넘어가는 규칙($g$)만 주어졌지만, 우리는 이것이 "모든 날의 반죽"을 하나로 정한다고 믿습니다. 재귀 정리는 이 믿음을 정리로 만든 것입니다. 첫째 날의 것이 $x(1) = a$에, 넘어가는 규칙이 $x(n+1) = g(n, x(n))$에 해당합니다.

비유가 맞지 않는 곳은, 요리는 하루씩 실제로 만들어 가지만 함수 $x$는 순서쌍의 집합으로서 한꺼번에 있어야 한다는 점입니다. [[mathematical-induction|수학적 귀납법]]은 이미 있는 대상에 관한 명제를 모든 $n$에 대해 증명하는 방법이고, 대상 자체를 만들어 주지는 않습니다. 그래서 증명은 먼저 유한한 조각, 곧 $\{1, \dots, k\}$에서만 정의된 "길이 $k$의 근사"를 귀납법으로 만들고, 서로 다른 길이의 근사가 겹치는 곳에서 값이 같음을 보인 뒤, 모든 근사를 합쳐 $x$를 얻습니다.

함수 $g$의 공역이 $X$라는 가정은 각 단계에서 다음 값이 다시 $X$에 들어가 그다음 단계에 $g$를 쓸 수 있게 하는 조건이고, 증명에서는 근사를 한 칸 늘리는 단계에서 쓰입니다. 이 조건이 깨지면 정리를 쓸 수 없습니다(아래 반례). (4)는 다음 값이 언제나 지금 값보다 큰 경우로, 값이 한 걸음마다 적어도 $1$씩 커지므로 $x(k) \ge k$가 됩니다.

## 증명

:::idea
길이 $k$의 근사 $h : \{1, \dots, k\} \to X$를 정의하고, (가) 두 근사는 겹치는 곳에서 값이 같고, (나) 모든 길이의 근사가 있음을 귀납법으로 보인다. 각 $n$에서의 값을 길이 $n$의 근사의 $n$에서의 값으로 정하면 $x$가 된다.
:::

:::hint
$h(1) = a$이고 $1 \le i$, $i + 1 \le k$인 모든 정수 $i$에서 $h(i+1) = g(i, h(i))$인 함수 $h : \{1, \dots, k\} \to X$를 생각한다. 길이 $k$의 근사가 있으면, 순서쌍 하나 $(k+1, g(k, h(k)))$를 더해 길이 $k + 1$의 근사를 만들 수 있다.
:::

:::hint
$x$를 "$h(n) = y$인 길이 $n$의 근사 $h$가 있는 순서쌍 $(n, y)$ 전체"로 정한다. 함수가 되려면 길이가 같은 두 근사가 같아야 한다.
:::

:::proof
(Z1)은 [[prime-number]]의, (Z5)–(Z8)과 (L1)–(L3)은 [[well-ordering-principle]]의 진술이다. 정수끼리의 합과 차는 정수이다([[even-and-odd]]). 증명 내내 다음 두 사실을 쓴다.

- (ㄱ) $1 \le i$인 정수 $i$는 자연수이다. (Z8)의 $0 < 1$과 (Z6)에 의해 $0 < i$이므로 양의 정수이기 때문이다. 거꾸로 자연수 $i$는 양의 정수이므로 (Z1)에 의해 $1 \le i$이다.
- (ㄴ) 자연수 $k$에 대하여 $\{1, \dots, k\}$의 원소는 $1 \le i \le k$인 정수 $i$이고, (ㄱ)에 의해 자연수이다. 거꾸로 $i \le k$인 자연수 $i$는 (ㄱ)에 의해 $1 \le i$이므로 $\{1, \dots, k\}$의 원소이다. $1 \le k$이므로 $1$과 $k$는 $\{1, \dots, k\}$의 원소이다.

**근사의 정의.** 자연수 $k$에 대하여 함수 $h : \{1, \dots, k\} \to X$가 **길이 $k$의 근사**라는 것은 $h(1) = a$이고, $1 \le i$이고 $i + 1 \le k$인 모든 정수 $i$에서 $h(i+1) = g(i, h(i))$일 때를 말한다. 이런 $i$에 대하여 (L3)에 의해 $i < i + 1$이므로 (Z6)에 의해 $i \le k$이고 $1 \le i + 1$이다. 따라서 $i$와 $i + 1$은 $\{1, \dots, k\}$의 원소이고 (ㄱ)에 의해 $i$는 자연수이므로, $h(i)$, $h(i+1)$, $g(i, h(i))$는 모두 뜻을 갖는다.

**1단계 (겹치는 곳에서 값이 같다).** $k \le k'$인 자연수 $k$, $k'$과 길이 $k$의 근사 $h$, 길이 $k'$의 근사 $h'$에 대하여, $\{1, \dots, k\}$의 모든 원소 $i$에서 $h(i) = h'(i)$임을 보인다. 자연수 $i$에 대한 명제 $S_i$를 "$i \le k$이면 $h(i) = h'(i)$"로 두고 [[mathematical-induction|수학적 귀납법]]을 쓴다. $i \le k$인 자연수 $i$는 (Z6)에 의해 $i \le k'$이기도 하므로 (ㄴ)에 의해 $\{1, \dots, k\}$와 $\{1, \dots, k'\}$의 원소이고, $h(i)$와 $h'(i)$는 뜻을 갖는다.

- 기초 단계: 근사의 정의에 의해 $h(1) = a = h'(1)$이므로 $S_1$이 참이다.
- 귀납 단계: 자연수 $i$에 대하여 $S_i$를 가정하고 $i + 1 \le k$라 하자. (L3)과 (Z6)에 의해 $i \le k$이므로 $S_i$에 의해 $h(i) = h'(i)$이다. (ㄱ)에 의해 $1 \le i$이고 $i + 1 \le k$이므로 $h$의 근사의 조건에 의해 $h(i+1) = g(i, h(i))$이다. 또 $i + 1 \le k \le k'$과 (Z6)에 의해 $i + 1 \le k'$이므로 $h'$의 근사의 조건에 의해 $h'(i+1) = g(i, h'(i))$이다. $h(i) = h'(i)$이므로 순서쌍 $(i, h(i))$와 $(i, h'(i))$는 같고([[cartesian-product]]), 함수 $g$의 값으로서 $g(i, h(i)) = g(i, h'(i))$이다. 따라서 $h(i+1) = h'(i+1)$이고 $S_{i+1}$이 참이다.

모든 자연수 $i$에서 $S_i$가 참이고, (ㄴ)에 의해 $\{1, \dots, k\}$의 원소 $i$는 $i \le k$인 자연수이므로 $h(i) = h'(i)$이다. 특히 $k = k'$이면 $h$와 $h'$은 정의역 $\{1, \dots, k\}$가 같고 모든 원소에서 값이 같으므로, [[function]]의 함수의 같음에 의해 $h = h'$이다. 곧 **길이가 같은 두 근사는 같다.**

**2단계 (모든 길이의 근사가 있다).** 자연수 $k$에 대한 명제 $T_k$를 "길이 $k$의 근사가 있다"로 두고 귀납법을 쓴다.

- 기초 단계: $1 \le i \le 1$인 정수 $i$는 (L2)에 의해 $i = 1$이고, $1 \le 1$이므로 $\{1, \dots, 1\} = \{1\}$이다. $h_1 = \{(1, a)\}$로 둔다. $a \in X$이므로 $h_1 \subseteq \{1\} \times X$이다. $\{1\}$의 원소는 $1$뿐이고 $(1, a) \in h_1$이며, $(1, b) \in h_1$이면 $(1, b) = (1, a)$이므로 순서쌍의 같음에 의해 $b = a$이다. 따라서 $h_1$은 $\{1\}$에서 $X$로의 함수이고 $h_1(1) = a$이다. 또 $1 \le i$이고 $i + 1 \le 1$인 정수 $i$는 없다. 그런 $i$가 있다면 (Z7)에 의해 $1 + 1 \le i + 1$, 곧 $2 \le i + 1$이고 (Z6)에 의해 $2 \le 1$인데, (L3)에 의해 $1 < 2$이므로 (L1)에 어긋난다. 따라서 근사의 둘째 조건은 확인할 것이 없고, $h_1$은 길이 $1$의 근사이다. $T_1$이 참이다.
- 귀납 단계: 자연수 $k$에 대하여 길이 $k$의 근사 $h$가 있다고 하자. (ㄴ)에 의해 $k \in \{1, \dots, k\}$이고 $k$는 자연수이므로 $(k, h(k)) \in \mathbb{N} \times X$이다. $c = g(k, h(k))$로 두면 $c \in X$이다. 이제
$$
h^+ = h \cup \{(k+1, c)\}
$$
로 둔다([[set-operations|합집합]]). [[finite-set]]의 (F1)에 의해 $\{1, \dots, k+1\} = \{1, \dots, k\} \cup \{k+1\}$이고 $k + 1 \notin \{1, \dots, k\}$이다.
  - ($h^+$는 관계이다) $h \subseteq \{1, \dots, k\} \times X$이고 $\{1, \dots, k\} \subseteq \{1, \dots, k+1\}$이므로 $h$의 원소는 $\{1, \dots, k+1\} \times X$에 속한다. $k + 1 \in \{1, \dots, k+1\}$이고 $c \in X$이므로 $(k+1, c)$도 그렇다. 따라서 $h^+ \subseteq \{1, \dots, k+1\} \times X$이다.
  - (존재) $j \in \{1, \dots, k+1\}$이면 $j \in \{1, \dots, k\}$이거나 $j = k + 1$이다. 앞의 경우 $(j, h(j)) \in h \subseteq h^+$이고, 뒤의 경우 $(k+1, c) \in h^+$이다.
  - (유일) $(j, b) \in h^+$이고 $(j, b') \in h^+$라 하자. $j \in \{1, \dots, k\}$이면 $j \ne k + 1$이므로 $(j, b) \ne (k+1, c)$이고 $(j, b) \in h$이다. 같은 이유로 $(j, b') \in h$이고, $h$가 함수이므로 $b = b'$이다. $j = k + 1$이면 $(k+1, b) \in h$일 수 없다. 그렇다면 [[cartesian-product|곱집합]]의 원소의 조건에 의해 $k + 1 \in \{1, \dots, k\}$이어서 (F1)에 어긋나기 때문이다. 따라서 $(k+1, b) = (k+1, c)$이고 $b = c$이다. 같은 이유로 $b' = c$이므로 $b = b'$이다.

  따라서 $h^+$는 $\{1, \dots, k+1\}$에서 $X$로의 함수이고, $j \in \{1, \dots, k\}$이면 $h^+(j) = h(j)$, 그리고 $h^+(k+1) = c$이다. 이제 $h^+$가 길이 $k + 1$의 근사임을 보인다. $1 \in \{1, \dots, k\}$이므로 $h^+(1) = h(1) = a$이다. $1 \le i$이고 $i + 1 \le k + 1$인 정수 $i$를 잡으면 (Z7)에 의해 $i \le k$이다.
  - $i < k$이면 (Z1)에 의해 $i + 1 \le k$이므로 $h$의 근사의 조건에 의해 $h(i+1) = g(i, h(i))$이고, $i$와 $i + 1$은 $\{1, \dots, k\}$의 원소이다(근사의 정의 바로 뒤의 문장). 따라서 $h^+(i+1) = h(i+1) = g(i, h(i)) = g(i, h^+(i))$이다.
  - $i = k$이면 $h^+(k+1) = c = g(k, h(k)) = g(k, h^+(k))$이다.

  $i \le k$는 $i < k$이거나 $i = k$라는 뜻이므로 두 경우 가운데 하나이다. 따라서 $h^+$는 길이 $k + 1$의 근사이고 $T_{k+1}$이 참이다.

모든 자연수 $k$에서 $T_k$가 참이다.

**3단계 (존재).** 집합
$$
x = \{(n, y) \in \mathbb{N} \times X : h(n) = y \text{인 길이 } n \text{의 근사 } h \text{가 있다}\}
$$
를 생각한다. $x \subseteq \mathbb{N} \times X$이므로 $x$는 $\mathbb{N}$에서 $X$로의 관계이다. 자연수 $n$을 잡는다. (존재) 2단계에 의해 길이 $n$의 근사 $h$가 있고, (ㄴ)에 의해 $n \in \{1, \dots, n\}$이므로 $(n, h(n)) \in x$이다. (유일) $(n, y) \in x$이고 $(n, y') \in x$이면 $h(n) = y$인 길이 $n$의 근사 $h$와 $h'(n) = y'$인 길이 $n$의 근사 $h'$이 있고, 1단계에 의해 $h = h'$이므로 $y = y'$이다. 따라서 $x$는 $\mathbb{N}$에서 $X$로의 함수이다. 또 다음이 성립한다.

- (ㄷ) 자연수 $k$, 길이 $k$의 근사 $h$, $\{1, \dots, k\}$의 원소 $i$에 대하여 $x(i) = h(i)$이다. (ㄴ)에 의해 $i$는 $i \le k$인 자연수이다. 2단계에 의해 길이 $i$의 근사 $h_i$가 있고, $x$의 정의에 의해 $(i, h_i(i)) \in x$이므로 $x(i) = h_i(i)$이다. $i \le k$이므로 1단계에 의해 $h_i(i) = h(i)$이다.

길이 $1$의 근사 $h$를 잡으면 (ㄷ)에 의해 $x(1) = h(1) = a$이다. 자연수 $n$에 대하여 길이 $n + 1$의 근사 $h$를 잡는다. (ㄴ)에 의해 $1 \le n$이고, $n + 1 \le n + 1$이므로 근사의 조건에 의해 $h(n+1) = g(n, h(n))$이다. $n$과 $n + 1$은 $\{1, \dots, n+1\}$의 원소이므로 (ㄷ)에 의해 $x(n) = h(n)$이고 $x(n+1) = h(n+1)$이다. 따라서 $x(n+1) = g(n, x(n))$이다.

**4단계 (유일성).** 함수 $x, x' : \mathbb{N} \to X$가 둘 다 $x(1) = a$, $x'(1) = a$이고 모든 자연수 $n$에서 $x(n+1) = g(n, x(n))$, $x'(n+1) = g(n, x'(n))$을 만족한다고 하자. 자연수 $n$에 대한 명제 "$x(n) = x'(n)$"을 귀납법으로 보인다. 기초 단계는 $x(1) = a = x'(1)$이다. $x(n) = x'(n)$이면 1단계와 같은 이유로 $g(n, x(n)) = g(n, x'(n))$이므로 $x(n+1) = x'(n+1)$이다. 두 함수는 정의역 $\mathbb{N}$이 같고 모든 자연수에서 값이 같으므로 함수의 같음에 의해 $x = x'$이다.

**1의 증명.** $f = \{(u, r(u)) : u \in A\}$라 하자. $f$의 원소는 첫째 성분이 $A$의 원소이고 둘째 성분이 $B$의 원소인 순서쌍이므로 $f \subseteq A \times B$이다. $u_0 \in A$를 잡는다. (존재) $(u_0, r(u_0)) \in f$이다. (유일) $(u_0, b) \in f$이면 $(u_0, b) = (u, r(u))$인 $u \in A$가 있고, 순서쌍의 같음에 의해 $u_0 = u$이고 $b = r(u) = r(u_0)$이다. 같은 이유로 $(u_0, b') \in f$이면 $b' = r(u_0)$이므로 $b = b'$이다. 따라서 $f$는 $A$에서 $B$로의 함수이고, $(u_0, r(u_0)) \in f$이므로 $f(u_0) = r(u_0)$이다.

**2의 증명.** 곱집합 $\mathbb{N} \times (Y \times Z)$의 원소 $(n, w)$마다 $\bigl(p(n, w), q(n, w)\bigr)$는 $Y \times Z$의 원소로 정해지므로, 이 항목의 (1)에 의해 $G(n, w) = \bigl(p(n, w), q(n, w)\bigr)$인 함수 $G : \mathbb{N} \times (Y \times Z) \to Y \times Z$가 있다. 재귀 정리를 $X = Y \times Z$, 처음 값 $(b, c)$, 함수 $G$에 써서 $w(1) = (b, c)$이고 모든 자연수 $n$에서 $w(n+1) = G(n, w(n))$인 함수 $w : \mathbb{N} \to Y \times Z$를 얻는다.

자연수 $n$마다 $w(n) \in Y \times Z$이므로 $w(n) = (s, t)$인 $s \in Y$, $t \in Z$가 있고, 순서쌍의 같음에 의해 $s$와 $t$는 $w(n)$으로 하나씩 정해진다. 이 $s$, $t$를 $y(n)$, $z(n)$으로 두면, 이 항목의 (1)에 의해 $y : \mathbb{N} \to Y$와 $z : \mathbb{N} \to Z$는 함수이고 모든 $n$에서 $w(n) = (y(n), z(n))$이다. $(y(1), z(1)) = w(1) = (b, c)$이므로 $y(1) = b$, $z(1) = c$이다. 자연수 $n$에 대하여
$$
(y(n+1), z(n+1)) = w(n+1) = G(n, w(n)) = \Bigl(p\bigl(n, (y(n), z(n))\bigr),\ q\bigl(n, (y(n), z(n))\bigr)\Bigr)
$$
이므로 순서쌍의 같음에 의해 두 등식이 성립한다.

$y'$, $z'$도 조건을 만족한다고 하자. 이 항목의 (1)에 의해 $w'(n) = (y'(n), z'(n))$인 함수 $w' : \mathbb{N} \to Y \times Z$가 있다. $w'(1) = (b, c)$이고, 모든 자연수 $n$에서
$$
w'(n+1) = \Bigl(p\bigl(n, w'(n)\bigr),\ q\bigl(n, w'(n)\bigr)\Bigr) = G(n, w'(n))
$$
이므로 재귀 정리의 유일성에 의해 $w' = w$이다. 따라서 모든 $n$에서 $(y'(n), z'(n)) = (y(n), z(n))$이고, 순서쌍의 같음에 의해 $y'(n) = y(n)$, $z'(n) = z(n)$이다. 함수의 같음에 의해 $y' = y$이고 $z' = z$이다.

**3의 증명.** $X = \mathbb{R}$이면 $x$는 $\mathbb{N}$에서 $\mathbb{R}$로의 함수이므로 [[sequence]]의 정의에 의해 수열이다. $X \subseteq \mathbb{R}$이면 모든 자연수 $n$에서 $x(n) \in X \subseteq \mathbb{R}$이므로, [[function]]의 "공역은 선언하기 나름이다"에 의해 같은 집합 $x$는 $\mathbb{N}$에서 $\mathbb{R}$로의 함수, 곧 수열이고 모든 항이 $X$에 속한다. 마지막 두 문장은 무엇이 이 정리로 정당화되는지와 정리의 가정을 다시 적은 것이다.

**4의 증명.** 이 증명의 부등호는 모두 정수의 순서이다. 먼저 모든 자연수 $n$에서 $x(n) < x(n+1)$이다. $x(n)$은 자연수이므로 가정에 의해 $x(n+1) = g(n, x(n)) > x(n)$이기 때문이다.

자연수 $n$을 하나 잡고, $m \ge n + 1$인 정수 $m$에 대한 명제 "$x(n) < x(m)$"을 시작점이 $n + 1$인 귀납법으로 보인다. $m \ge n + 1$인 정수 $m$은 $1 \le n < n + 1 \le m$이므로 (Z6)과 (ㄱ)에 의해 자연수이다. 기초 단계 $m = n + 1$은 위에서 보였다. $m \ge n + 1$이고 $x(n) < x(m)$이면, $x(m) < x(m+1)$과 (Z6)에 의해 $x(n) < x(m+1)$이다. 이제 $n < m$인 자연수 $n$, $m$을 잡으면 (Z1)에 의해 $n + 1 \le m$이므로 $x(n) < x(m)$이다. 따라서 $x$는 순증가이다.

$x(k) \ge k$는 $k$에 대한 귀납법으로 보인다. $x(1)$은 자연수이므로 (ㄱ)에 의해 $x(1) \ge 1$이다. $x(k) \ge k$이면 $k \le x(k) < x(k+1)$과 (Z6)에 의해 $k < x(k+1)$이고, (Z1)에 의해 $k + 1 \le x(k+1)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[번호를 더해 가는 수열]
$x_1 = 0$이고 모든 자연수 $n$에서 $x_{n+1} = x_n + n$인 수열을 생각합니다. $\mathbb{N} \times \mathbb{R}$의 원소 $(n, t)$마다 실수 $t + n$이 식으로 정해지므로, 이 항목의 (1)에 의해 $g(n, t) = t + n$인 함수 $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$가 있습니다. 재귀 정리와 (3)을 $X = \mathbb{R}$, 처음 값 $0$에 쓰면 이런 수열이 정확히 하나 있습니다.

처음 네 항은 $x_1 = 0$, $x_2 = g(1, 0) = 0 + 1 = 1$, $x_3 = g(2, 1) = 1 + 2 = 3$, $x_4 = g(3, 3) = 3 + 3 = 6$입니다. 다음 항을 정하는 규칙이 바로 앞의 항뿐 아니라 번호 $n$에도 기대므로, $g$가 $n$과 $t$의 두 자리를 받습니다.
:::

:::example[두 수열을 함께 정하기]
$y_1 = 1$, $z_1 = 0$이고 모든 자연수 $n$에서 $y_{n+1} = y_n + z_n$, $z_{n+1} = y_n$인 두 수열을 생각합니다. 이 항목의 (1)에 의해 $p(n, (s, t)) = s + t$, $q(n, (s, t)) = s$인 함수 $p, q : \mathbb{N} \times (\mathbb{R} \times \mathbb{R}) \to \mathbb{R}$가 있고, (2)를 $Y = Z = \mathbb{R}$, $b = 1$, $c = 0$에 쓰면 이런 두 수열이 정확히 한 쌍 있습니다. 처음 몇 항은 다음과 같습니다.

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $y_n$ | $1$ | $1$ | $2$ | $3$ | $5$ |
| $z_n$ | $0$ | $1$ | $1$ | $2$ | $3$ |

예를 들어 $y_4 = y_3 + z_3 = 2 + 1 = 3$, $z_4 = y_3 = 2$, $y_5 = y_4 + z_4 = 3 + 2 = 5$, $z_5 = y_4 = 3$입니다. 다음 항이 두 수열의 지금 항에 함께 기대므로 하나씩 따로 정할 수 없고, 쌍으로 묶어 한 번의 재귀로 정합니다.
:::

:::counterexample[값이 정해지지 않는 규칙]
"$x_1 = 2$이고 $x_{n+1} = (x_n - 1)^{-1}$"이라는 규칙을 생각합니다. $1 \cdot 1 = 1$이므로 [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)의 (iii)에 의해 $x_2 = (2 - 1)^{-1} = 1^{-1} = 1$이고, 그다음은 $(1 - 1)^{-1} = 0^{-1}$이어야 합니다. 그러나 (K9)에 의해 모든 실수 $t$에서 $0 \cdot t = 0$이고 (K4)에 의해 $0 \ne 1$이므로 $0 \cdot t = 1$인 실수 $t$는 없고, $0$의 역수는 없습니다. 따라서 이 규칙을 모두 만족하는 수열은 없습니다. 만약 그런 수열 $(x_n)$이 있다면 $x_3 = (x_2 - 1)^{-1}$이 뜻을 가져야 하는데 $x_2 = 1$이어서 $x_2 - 1 = 0$이기 때문입니다.

재귀 정리를 쓰지 못하는 까닭은 식 $(t - 1)^{-1}$이 $t = 1$에서 정해지지 않아, 이 식으로 $\mathbb{N} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수 $g$를 만들 수 없기 때문입니다. 재귀로 수열을 정할 때는 (3)의 마지막 문장대로 $g$가 $\mathbb{N} \times X$의 모든 원소에서 정해지고 값이 $X$에 들어가는 집합 $X$를 먼저 찾아야 합니다.
:::

## 확인 질문

:::check[모든 $n$과 $t$에서 $g(n, t) = t$로 두면 재귀 정리가 주는 함수는 무엇인가?]
모든 값이 $a$인 함수입니다. 이 항목의 (1)에 의해 모든 $n \in \mathbb{N}$에서 값이 $a$인 함수 $c : \mathbb{N} \to X$가 있고, $c(1) = a$이며 모든 $n$에서 $c(n+1) = a = c(n) = g(n, c(n))$입니다. 재귀 정리의 유일성에 의해 재귀 정리가 주는 함수는 이 $c$입니다. $X = \mathbb{R}$이면 상수 수열입니다.
:::

:::check[(4)의 가정 "$g(k, n) > n$"을 "$g(k, n) \ge n$"으로 약하게 하면 결론이 여전히 성립하는가?]
성립하지 않습니다. $X = \mathbb{N}$, $a = 1$이고 모든 $k$, $n$에서 $g(k, n) = n$으로 두면 $g(k, n) \ge n$입니다. 이때 $x(1) = 1$이고 $x(2) = g(1, x(1)) = x(1) = 1$입니다. $1 < 2$이지만 $x(1) = x(2)$이므로 순증가가 아니고, $x(2) = 1 < 2$이므로 $x(2) \ge 2$도 성립하지 않습니다.
:::
