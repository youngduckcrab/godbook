---
title: 체 위의 벡터공간
title_en: Vector Space over a Field
aliases: [F-벡터공간, F 위의 벡터공간, 체 위의 선형공간, vector space over a field, F-vector space]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 체 F 위의 벡터공간을 덧셈에 관한 아벨군과 스칼라배의 네 조건으로 정의한다. 영과 부호의 기본 성질, 선형대수 강의의 벡터공간이 정확히 ℝ 위의 벡터공간이라는 것, Fⁿ 과 F 자신이 F 위의 벡터공간이라는 것, 일차결합의 합을 계산하는 규칙을 보인다.
requires: [set, cartesian-product, function, binary-operation, recursion-theorem, finite-set, group, group-basic-properties, number-groups, power-in-a-group, group-homomorphism, finite-product-in-a-group, ring, ring-examples, field, finite-integral-domain-is-a-field, integral-domain, finite-sums-in-a-ring, integers-modulo-n, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors]
sources:
  - ref: judson-abstract-algebra
    loc: "20.1절 Definitions and Examples, 벡터공간의 정의 (번호 없음, p.252), Example 20.1 (p.252), Proposition 20.5 (p.253); 20.5절 Exercises, 연습문제 6, 10 (p.257); 부록 B 의 20.5.10 힌트 (p.332)"
    checked: original
    note: "출처는 체 F 위의 벡터공간을 '스칼라배 α · v 또는 αv 가 정해진 아벨군'으로서 α(βv) = (αβ)v, (α + β)v = αv + βv, α(u + v) = αu + αv, 1v = v 를 만족하는 것으로 정의한다(p.252). 이 항목의 정의와 같고, 네 조건의 순서도 출처의 것을 따랐다. 출처는 스칼라배가 F × V 에서 V 로의 함수라는 것을 말로 적지 않는다('defined for all α ∈ F and all v ∈ V'). (1)의 (i)은 Proposition 20.5 의 (1)(2), (ii)의 첫 문장은 (3), (iii)의 '특히 (−1)v = −v' 는 (4)이고, (iii)의 (−α)v = −(αv) = α(−v) 는 Proposition 20.5 의 (5)로서 출처는 그 증명을 연습문제 10 으로 둔다(p.257, 힌트 p.332 는 0 = α0 = α(−v + v) 에서 −αv = α(−v) 를 얻는다). 이 항목은 (−α)v 와 α(−v) 를 두 함수 α ↦ αv, v ↦ αv 가 덧셈군의 준동형이라는 것으로 한꺼번에 얻는다. 출처의 (3) 증명은 'Multiplying both sides of αv = 0 by 1/α' 이고 이 항목의 (1)의 (ii)도 같은 계산이다. (1)의 (iv)는 스칼라배의 조건 (ii)(iii)과 Proposition 20.5 의 (5)를 합친 것이다. (1)의 (v), (2)(선형대수 강의의 벡터공간과 같다는 것), (4)의 합의 계산 규칙, (5)는 출처에 명제로 없다(검색어 'vector space', 'scalar', 'α(u − v)', '(α − β)' 로 책 전체를 찾고 20.5절 연습문제 1–18 을 처음부터 읽었다). (1)의 (v)의 특별한 경우 (q · 1)v = q · v 와 같은 계산 nr = n(1r) = (n1)r 은 환에 대하여 16.2절 Lemma 16.18 의 증명(p.195)에 있다. 다만 (4)의 (iii)(iv)와 같은 계산 u + v = (α_1 + β_1)v_1 + ⋯, αu = (αα_1)v_1 + ⋯ 은 Proposition 20.8 의 증명(p.254)에 있다. (3)의 Fⁿ 은 출처 연습문제 6(p.257)과 같은 대상이고 그 연습문제는 차원이 n 이라는 것까지 묻는다. ℝⁿ 이 ℝ 위의 벡터공간이라는 것은 Example 20.1(p.252)이다. 출처는 F 자신을 F 위의 벡터공간으로 보는 것을 따로 적지 않고, 20.5절 연습문제 18 (b)(p.258)는 쌍대공간 V* = Hom(V, F) 를 정의하며 F 를 공역인 벡터공간으로 쓰고, 21.1절에서 확대체 E 를 F 위의 벡터공간으로 본다(p.264). 예시 '$\\mathbb{Z}_3^2$에서의 계산' 은 출처의 ℝⁿ 예(Example 20.1)를 ℤ_3 으로 바꾼 것과 같은 종류의 계산이다. 예시 '$\\mathbb{Z}_3$ 위의 벡터공간에서 세 번 더하기' 의 계산 3 · v = (3 · [1])v = [0]v = 0_V 는 출처 Lemma 16.18 의 증명(p.195)의 nr = n(1r) = (n1)r = 0r = 0 과 같은 계산이고, 반례 '덧셈군 $\\mathbb{Z}_4$에 $\\mathbb{Z}_2$의 스칼라배를 줄 수 없는 예' 도 같은 계산을 쓴다. 반례 '덧셈군 $\\mathbb{Z}_4$에 $\\mathbb{Z}_2$의 스칼라배를 줄 수 없는 예' 의 발상('v + v = 0 인 군과 그렇지 않은 ℤ_4')은 출처 9.2절 Example 9.15(p.118)가 ℤ_2 × ℤ_2 의 항등원이 아닌 원소는 모두 (a, b) + (a, b) = (0, 0) 이어서 위수가 2 이고 ℤ_4 는 순환군이므로 둘이 동형이 아니라고 하는 것과 같고, 3.3절 Example 3.28(p.39)도 ℤ_4 와 ℤ_2 × ℤ_2 를 부분군으로 구별한다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]라 하자. $F$의 원소 $0$, $1$, 합 $\alpha + \beta$, 곱 $\alpha\beta$, 덧셈의 역원 $-\alpha$, $\alpha - \beta$, $0$이 아닌 원소의 역원 $\alpha^{-1}$, 정수배 $q \cdot \alpha$는 [[ring|환]]과 [[field|체]]의 표기이다.

**정의.** $V$가 [[set|집합]]이고 $+$가 $V$ 위의 [[binary-operation|이항연산]]이며, [[cartesian-product|곱집합]] $F \times V$에서 $V$로의 [[function|함수]]가 하나 주어졌다고 하자. 이 함수의 $(\alpha, v)$에서의 값을 $\alpha v$로 쓰고, 이 함수를 **스칼라배**(scalar multiplication)라 한다. $V$가 (이 두 연산에 관한) **$F$ 위의 벡터공간**(vector space over $F$), 줄여서 **$F$-벡터공간**인 것은 정확히 다음이 모두 성립할 때이다.

- (덧셈) $(V, +)$가 [[group|아벨군]]이다.
- (**스칼라배의 조건**) 모든 $\alpha, \beta \in F$와 모든 $u, v \in V$에 대하여 다음 (i)–(iv)가 성립한다.
  - (i) $\alpha(\beta v) = (\alpha\beta)v$이다.
  - (ii) $(\alpha + \beta)v = \alpha v + \beta v$이다.
  - (iii) $\alpha(u + v) = \alpha u + \alpha v$이다.
  - (iv) $1v = v$이다.

**표기.** $V$의 원소를 **벡터**(vector), $F$의 원소를 **스칼라**(scalar)라 한다. 아벨군 $(V, +)$에는 [[number-groups|수로 이루어진 군]]의 덧셈 표기를 쓴다. 곧 그 항등원을 $0_V$로 쓰고 **영벡터**라 하며(문맥이 분명하면 $0$), $v$의 역원을 $-v$로 쓰고 **덧셈 역원**이라 하며, $u + (-v)$를 $u - v$로 쓴다. 정수 $q$에 대한 $q \cdot v$는 군 $(V, +)$에서의 [[power-in-a-group|군의 거듭제곱]]의 (4)의 $q$배이다. 스칼라배를 덧셈보다 먼저 계산한다. 곧 $\alpha u + \beta v$는 $(\alpha u) + (\beta v)$를 뜻하고, $\alpha v$의 덧셈 역원은 괄호를 쳐 $-(\alpha v)$로 쓴다. 조건 (i)–(iv)의 각 등식에서 스칼라끼리의 합과 곱은 $F$의 것이고 벡터끼리의 합은 $V$의 것이다.

**열과 합.** $V$의 원소의 열(**벡터의 열**)과 $F$의 원소의 열(**스칼라의 열**), 열의 합, 합의 기호 $\sum_{k=m}^{n}$은 덧셈군 $(V, +)$와 $(F, +)$에서의 [[finite-sums-in-a-ring|환의 유한 합]]의 것이다. $m - 1 \le n$인 정수 $m$, $n$과, $m \le k \le n$인 번호 $k$마다 정해진 스칼라 $\alpha_k$와 벡터 $v_k$에 대하여 $\sum_{k=m}^{n} \alpha_k v_k$는 항이 $\alpha_k v_k$인 합이다.

다음이 성립한다. (1), (4)에서 $V$는 $F$ 위의 벡터공간이고 $u$, $v$는 $V$의 원소, $\alpha$, $\beta$, $\gamma$는 $F$의 원소이다.

1. (기본 성질)
   - (i) $0v = 0_V$이고 $\alpha 0_V = 0_V$이다. (앞의 $0$은 $F$의 원소이다.)
   - (ii) $\alpha v = 0_V$이면 $\alpha = 0$이거나 $v = 0_V$이다. 또 $\alpha \ne 0$이고 $\alpha u = \alpha v$이면 $u = v$이다.
   - (iii) $(-\alpha)v = -(\alpha v) = \alpha(-v)$이다. 특히 $(-1)v = -v$이다.
   - (iv) $\alpha(u - v) = \alpha u - \alpha v$이고 $(\alpha - \beta)v = \alpha v - \beta v$이다.
   - (v) 정수 $q$에 대하여 $(q \cdot \alpha)v = q \cdot (\alpha v) = \alpha(q \cdot v)$이다. 특히 $(q \cdot 1)v = q \cdot v$이다.
2. (선형대수 강의의 벡터공간) $V$가 집합이고 $+ : V \times V \to V$와 $\cdot : \mathbb{R} \times V \to V$가 함수라 하자. $V$가 이 두 연산에 관하여 [[vector-space|벡터공간]]인 것, 곧 (V1)–(V8)을 만족하는 것은 정확히 $V$가 이 두 연산에 관하여 체 $\mathbb{R}$([[field|체]]의 (4)) 위의 벡터공간일 때이다. 이때 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B1)의 영벡터 $0_V$는 아벨군 $(V, +)$의 항등원이고, (B2)의 덧셈 역원 $-v$는 군 $(V, +)$에서 $v$의 역원이다. 따라서 선형대수 강의의 벡터공간은 정확히 $\mathbb{R}$ 위의 벡터공간이고, 두 쪽의 $0_V$, $-v$, $u - v$는 같은 것이다.
3. ($F^n$과 $F$) $n$이 자연수라 하자. $F^n$은 $\{1, \dots, n\}$([[finite-set|유한집합]]의 것)에서 $F$로의 함수 전체의 집합이다. 곧 $F^n$의 원소는 $F$의 원소의 길이 $n$인 열이다. $x \in F^n$이면 $x(k)$를 $x_k$로 써서 $x = (x_1, \dots, x_n)$으로 나타낸다. $x, y \in F^n$과 $\alpha \in F$에 대하여 $x + y$는 모든 $k$에서 값이 $x_k + y_k$인 함수, $\alpha x$는 모든 $k$에서 값이 $\alpha x_k$인 함수이다(이런 함수가 있다는 것은 [[recursion-theorem|재귀 정리]]의 (1)이고, 함수의 같음에 의해 하나뿐이다).
   - (i) 이 두 연산으로 $F^n$은 $F$ 위의 벡터공간이다. 영벡터는 모든 값이 $0$인 함수 $(0, \dots, 0)$이고, $x$의 덧셈 역원은 $(-x_1, \dots, -x_n)$이다. $x = y$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $x_k = y_k$일 때이다.
   - (ii) (성분) $k \in \{1, \dots, n\}$이고, $m - 1 \le l$인 정수 $m$, $l$과 $m \le j \le l$인 번호 $j$마다 $y_j \in F^n$이 정해져 있으면 $\bigl(\sum_{j=m}^{l} y_j\bigr)_k = \sum_{j=m}^{l} (y_j)_k$이다. 여기서 $(y_j)_k$는 $y_j$의 $k$번째 값이다. 또 $(\alpha x)_k = \alpha x_k$이다.
   - (iii) $F = \mathbb{R}$이면 $F^n$과 그 두 연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 $\mathbb{R}^n$과 그 두 연산과 같다. $n = 2$일 때 $(a, b) \in F^2$는 함수를 가리키고, 곱집합 $F \times F$의 순서쌍과 구별한다.
   - (iv) $F$ 자신은 $F$의 덧셈을 덧셈으로, $F$의 곱셈 $F \times F \to F$를 스칼라배로 하여 $F$ 위의 벡터공간이다. 그 영벡터는 $0$이다.
4. (일차결합의 계산) $m$, $n$은 $m - 1 \le n$인 정수이고, $m \le k \le n$인 번호 $k$마다 스칼라 $\alpha_k$, $\beta_k$와 벡터 $v_k$가 정해져 있다고 하자.
   - (i) $\gamma \sum_{k=m}^{n} v_k = \sum_{k=m}^{n} \gamma v_k$이다.
   - (ii) $\Bigl(\sum_{k=m}^{n} \alpha_k\Bigr) v = \sum_{k=m}^{n} \alpha_k v$이다. 왼쪽의 합은 $F$에서의 합이다.
   - (iii) $\sum_{k=m}^{n} \alpha_k v_k + \sum_{k=m}^{n} \beta_k v_k = \sum_{k=m}^{n} (\alpha_k + \beta_k) v_k$이고 $\sum_{k=m}^{n} \alpha_k v_k - \sum_{k=m}^{n} \beta_k v_k = \sum_{k=m}^{n} (\alpha_k - \beta_k) v_k$이다.
   - (iv) $\gamma \sum_{k=m}^{n} \alpha_k v_k = \sum_{k=m}^{n} (\gamma\alpha_k) v_k$이다.
   - (v) 모든 $k$에서 $\alpha_k = 0$이면 $\sum_{k=m}^{n} \alpha_k v_k = 0_V$이다. $m \le l \le n$인 번호 $l$이 있어 $l$과 다른 모든 번호 $k$에서 $\alpha_k = 0$이면 $\sum_{k=m}^{n} \alpha_k v_k = \alpha_l v_l$이다.
5. (실수의 경우의 일차결합) $V$가 [[vector-space|벡터공간]]이면, (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본 $V$에서 길이 $n \ge 0$인 실수의 열 $\alpha_1, \dots, \alpha_n$과 벡터의 열 $v_1, \dots, v_n$에 대하여 $\sum_{k=1}^{n} \alpha_k v_k$는 [[finite-sum-of-vectors|벡터의 유한 합]]의 $\alpha_1 v_1 + \cdots + \alpha_n v_n$과 같다.
:::

:::english
Let $F$ be a field. The elements $0$, $1$, sums $\alpha + \beta$, products $\alpha\beta$, additive inverses $-\alpha$, differences $\alpha - \beta$, inverses $\alpha^{-1}$ of nonzero elements, and integer multiples $q \cdot \alpha$ in $F$ are written as in the entries on rings and fields.

**Definition.** Let $V$ be a set, $+$ a binary operation on $V$, and suppose a function from the Cartesian product $F \times V$ to $V$ is given. Its value at $(\alpha, v)$ is written $\alpha v$, and this function is called **scalar multiplication**. $V$ is a **vector space over $F$** (with respect to these two operations), or an **$F$-vector space** for short, exactly when all of the following hold.

- (Addition) $(V, +)$ is an abelian group.
- (**Conditions on scalar multiplication**) For all $\alpha, \beta \in F$ and all $u, v \in V$ the following (i)–(iv) hold.
  - (i) $\alpha(\beta v) = (\alpha\beta)v$.
  - (ii) $(\alpha + \beta)v = \alpha v + \beta v$.
  - (iii) $\alpha(u + v) = \alpha u + \alpha v$.
  - (iv) $1v = v$.

**Notation.** Elements of $V$ are called **vectors** and elements of $F$ **scalars**. The abelian group $(V, +)$ is written additively as in the entry on groups of numbers: its identity is written $0_V$ and called the **zero vector** ($0$ when the context is clear), the inverse of $v$ is written $-v$ and called the **additive inverse**, and $u + (-v)$ is written $u - v$. For an integer $q$, $q \cdot v$ is the $q$-th multiple of $v$ in the group $(V, +)$ as in (4) of the entry on powers in a group. Scalar multiplication is performed before addition: $\alpha u + \beta v$ means $(\alpha u) + (\beta v)$, and the additive inverse of $\alpha v$ is written with parentheses as $-(\alpha v)$. In each equation of (i)–(iv), sums and products of scalars are taken in $F$ and sums of vectors in $V$.

**Sequences and sums.** Sequences of elements of $V$ (**sequences of vectors**) and of $F$ (**sequences of scalars**), sums of sequences, and the summation sign $\sum_{k=m}^{n}$ are those of the entry on finite sums in a ring, applied to the additive groups $(V, +)$ and $(F, +)$. For integers $m$, $n$ with $m - 1 \le n$ and a scalar $\alpha_k$ and a vector $v_k$ given for each index $k$ with $m \le k \le n$, $\sum_{k=m}^{n} \alpha_k v_k$ is the sum with terms $\alpha_k v_k$.

The following hold. In (1) and (4), $V$ is a vector space over $F$, $u$, $v$ are elements of $V$, and $\alpha$, $\beta$, $\gamma$ are elements of $F$.

1. (Basic properties)
   - (i) $0v = 0_V$ and $\alpha 0_V = 0_V$. (The first $0$ is an element of $F$.)
   - (ii) If $\alpha v = 0_V$, then $\alpha = 0$ or $v = 0_V$. Moreover, if $\alpha \ne 0$ and $\alpha u = \alpha v$, then $u = v$.
   - (iii) $(-\alpha)v = -(\alpha v) = \alpha(-v)$. In particular $(-1)v = -v$.
   - (iv) $\alpha(u - v) = \alpha u - \alpha v$ and $(\alpha - \beta)v = \alpha v - \beta v$.
   - (v) For an integer $q$, $(q \cdot \alpha)v = q \cdot (\alpha v) = \alpha(q \cdot v)$. In particular $(q \cdot 1)v = q \cdot v$.
2. (Vector spaces of the linear algebra course) Let $V$ be a set and $+ : V \times V \to V$ and $\cdot : \mathbb{R} \times V \to V$ functions. $V$ is a vector space with respect to these two operations, that is, satisfies (V1)–(V8), exactly when $V$ is a vector space over the field $\mathbb{R}$ ((4) of the entry on fields) with respect to these two operations. In that case the zero vector $0_V$ of (B1) in the entry on basic properties of vector spaces is the identity of the abelian group $(V, +)$, and the additive inverse $-v$ of (B2) is the inverse of $v$ in the group $(V, +)$. Hence the vector spaces of the linear algebra course are exactly the vector spaces over $\mathbb{R}$, and $0_V$, $-v$, $u - v$ mean the same on both sides.
3. ($F^n$ and $F$) Let $n$ be a natural number. $F^n$ is the set of all functions from $\{1, \dots, n\}$ (of the entry on finite sets) to $F$; thus the elements of $F^n$ are the sequences of length $n$ of elements of $F$. For $x \in F^n$ we write $x(k)$ as $x_k$ and $x = (x_1, \dots, x_n)$. For $x, y \in F^n$ and $\alpha \in F$, $x + y$ is the function with value $x_k + y_k$ at every $k$, and $\alpha x$ is the function with value $\alpha x_k$ at every $k$ (such functions exist by (1) of the recursion theorem and are unique by equality of functions).
   - (i) With these two operations $F^n$ is a vector space over $F$. The zero vector is the function $(0, \dots, 0)$ all of whose values are $0$, and the additive inverse of $x$ is $(-x_1, \dots, -x_n)$. $x = y$ exactly when $x_k = y_k$ for every $k \in \{1, \dots, n\}$.
   - (ii) (Components) If $k \in \{1, \dots, n\}$, $m$, $l$ are integers with $m - 1 \le l$, and $y_j \in F^n$ is given for each index $j$ with $m \le j \le l$, then $\bigl(\sum_{j=m}^{l} y_j\bigr)_k = \sum_{j=m}^{l} (y_j)_k$, where $(y_j)_k$ is the $k$-th value of $y_j$. Also $(\alpha x)_k = \alpha x_k$.
   - (iii) If $F = \mathbb{R}$, then $F^n$ with its two operations is $\mathbb{R}^n$ with its two operations from the entry on spaces of real-valued functions. When $n = 2$, $(a, b) \in F^2$ denotes a function, distinguished from an ordered pair of the Cartesian product $F \times F$.
   - (iv) $F$ itself is a vector space over $F$, with the addition of $F$ as addition and the multiplication $F \times F \to F$ of $F$ as scalar multiplication. Its zero vector is $0$.
4. (Computing with linear combinations) Let $m$, $n$ be integers with $m - 1 \le n$, and let scalars $\alpha_k$, $\beta_k$ and a vector $v_k$ be given for each index $k$ with $m \le k \le n$.
   - (i) $\gamma \sum_{k=m}^{n} v_k = \sum_{k=m}^{n} \gamma v_k$.
   - (ii) $\Bigl(\sum_{k=m}^{n} \alpha_k\Bigr) v = \sum_{k=m}^{n} \alpha_k v$, where the sum on the left is taken in $F$.
   - (iii) $\sum_{k=m}^{n} \alpha_k v_k + \sum_{k=m}^{n} \beta_k v_k = \sum_{k=m}^{n} (\alpha_k + \beta_k) v_k$ and $\sum_{k=m}^{n} \alpha_k v_k - \sum_{k=m}^{n} \beta_k v_k = \sum_{k=m}^{n} (\alpha_k - \beta_k) v_k$.
   - (iv) $\gamma \sum_{k=m}^{n} \alpha_k v_k = \sum_{k=m}^{n} (\gamma\alpha_k) v_k$.
   - (v) If $\alpha_k = 0$ for every $k$, then $\sum_{k=m}^{n} \alpha_k v_k = 0_V$. If there is an index $l$ with $m \le l \le n$ such that $\alpha_k = 0$ for every index $k$ other than $l$, then $\sum_{k=m}^{n} \alpha_k v_k = \alpha_l v_l$.
5. (Linear combinations in the real case) If $V$ is a vector space in the sense of the linear algebra course, then in $V$ regarded as a vector space over $\mathbb{R}$ by (2), for a sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n \ge 0$ and a sequence of vectors $v_1, \dots, v_n$, the sum $\sum_{k=1}^{n} \alpha_k v_k$ equals $\alpha_1 v_1 + \cdots + \alpha_n v_n$ of the entry on finite sums of vectors.
:::

## 직관

선형대수 강의의 벡터공간에서 스칼라는 실수였습니다. 그 강의에서 벡터공간을 정의하고 생성, 일차독립, 기저, 차원을 다룬 증명을 돌아보면 실수에 대해 쓴 것은 더하기, 빼기, 곱하기, $0$이 아닌 수로 나누기와 그 계산 법칙뿐이고, 크기를 비교하는 일은 없었습니다. 이 계산 법칙을 모두 갖춘 것이 [[field|체]]이므로, 실수 대신 아무 체 $F$의 원소를 스칼라로 써도 같은 정의가 섭니다. 비유하자면 벡터를 늘이고 줄이는 배율표를 실수의 표에서 다른 체의 표로 바꾸는 것입니다. 비유가 맞는 곳은 조건 (i)–(iv)가 배율표의 곱셈·덧셈과 벡터의 덧셈이 어떻게 어울리는지만 말한다는 점입니다.

정의는 선형대수 강의의 (V1)–(V8) 여덟 조건 가운데 넷을 "$(V, +)$가 아벨군"이라는 한 조건으로 묶었습니다. (2)는 두 정의가 같은 것을 정한다는 것을 보여 줍니다. 그래서 선형대수 강의의 벡터공간은 모두 $\mathbb{R}$ 위의 벡터공간이고, 거꾸로도 그렇습니다.

체가 바뀌면 익숙하지 않은 일도 생깁니다. $\mathbb{Z}_3$ 위의 벡터공간에서는 어떤 벡터든 세 번 더하면 영벡터가 됩니다((1)의 (v), 아래 예시). 실수 위에서는 $0_V$가 아닌 벡터를 몇 번 더해도 $0_V$가 되지 않으므로, 실수에서 얻은 직관을 그대로 옮기지 않도록 조심해야 합니다.

## 증명

:::idea
스칼라 하나를 고정하면 $v$를 $\alpha v$로 보내는 함수가, 벡터 하나를 고정하면 $\alpha$를 $\alpha v$로 보내는 함수가 덧셈군의 준동형이 된다. 부호, 정수배, 합에 관한 규칙은 모두 군 준동형의 성질과 환의 유한 합의 성질에서 나온다.
:::

:::hint
(1)의 (i)에서는 $0 + 0 = 0$에 조건 (ii)를 쓰고, 군에서 $a + a = a$이면 $a$가 항등원이라는 것을 쓴다.
:::

:::hint
(2)에서 걸리는 곳은 (V3), (V4)의 "영벡터"가 덧셈의 항등원과 같은 것인지이다. 덧셈이 교환법칙을 만족하면 $v + z = v$만으로 $z$가 항등원이 된다.
:::

:::proof
**쓰는 사실.** 체는 단위원을 갖는 가환환이고 $0$이 아닌 원소가 모두 가역원이다([[field|체]]의 정의). 그래서 $F$의 덧셈은 아벨군을 이루고, 곱셈은 결합법칙과 교환법칙을 만족하며, 양쪽 분배법칙이 성립하고, $1$은 곱셈의 항등원이다([[ring|환]]의 정의). 군의 성질은 [[group-basic-properties|군의 기본 성질]]을, 준동형은 [[group-homomorphism|군 준동형]]을 덧셈 표기((6))로 읽어 쓴다. 합의 성질은 [[finite-sums-in-a-ring|환의 유한 합]]의 번호로 인용한다.

**두 준동형.** $V$가 $F$ 위의 벡터공간이라 하자. $v \in V$를 고정하면 각 $\alpha \in F$에 $V$의 원소 $\alpha v$가 하나씩 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 값이 $\alpha v$인 함수 $\varphi_v : F \to V$가 있다. 조건 (ii)는 $\varphi_v(\alpha + \beta) = \varphi_v(\alpha) + \varphi_v(\beta)$이므로 $\varphi_v$는 군 $(F, +)$에서 군 $(V, +)$로의 준동형이다. 같은 방식으로 $\alpha \in F$를 고정하면 값이 $\alpha v$인 함수 $\psi_\alpha : V \to V$가 있고, 조건 (iii)에 의해 $\psi_\alpha$는 $(V, +)$에서 $(V, +)$로의 준동형이다.

**1의 증명.** (i) $F$에서 $0 + 0 = 0$이므로 조건 (ii)에 의해 $0v = (0 + 0)v = 0v + 0v$이다. 군 $(V, +)$에서 $a + a = a$이면 $a$는 항등원이므로(군의 기본 성질의 (9)) $0v = 0_V$이다. $0_V + 0_V = 0_V$이므로 조건 (iii)에 의해 $\alpha 0_V = \alpha(0_V + 0_V) = \alpha 0_V + \alpha 0_V$이고, 같은 이유로 $\alpha 0_V = 0_V$이다.

(ii) $\alpha v = 0_V$이고 $\alpha \ne 0$이라 하자. $\alpha$는 가역원이므로 $\alpha^{-1}\alpha = 1$인 $\alpha^{-1} \in F$가 있다. 조건 (iv), (i)과 (1)의 (i)에 의해
$$
\begin{aligned}
v &= 1v \\
&= (\alpha^{-1}\alpha)v \\
&= \alpha^{-1}(\alpha v) \\
&= \alpha^{-1} 0_V \\
&= 0_V
\end{aligned}
$$
이다. 따라서 $\alpha = 0$이거나 $v = 0_V$이다. 둘째 문장: $\alpha \ne 0$이고 $\alpha u = \alpha v$이면 같은 계산으로 $u = 1u = \alpha^{-1}(\alpha u) = \alpha^{-1}(\alpha v) = 1v = v$이다.

(iii) 준동형은 역원을 역원으로 보내므로(군 준동형의 (2)를 (6)으로 읽은 것) $\varphi_v(-\alpha) = -\varphi_v(\alpha)$, 곧 $(-\alpha)v = -(\alpha v)$이고, $\psi_\alpha(-v) = -\psi_\alpha(v)$, 곧 $\alpha(-v) = -(\alpha v)$이다. $\alpha = 1$로 두면 조건 (iv)에 의해 $(-1)v = -(1v) = -v$이다.

(iv) 뺄셈의 뜻과 조건 (iii), (1)의 (iii)에 의해 $\alpha(u - v) = \alpha(u + (-v)) = \alpha u + \alpha(-v) = \alpha u + (-(\alpha v)) = \alpha u - \alpha v$이다. 조건 (ii)와 (1)의 (iii)에 의해 $(\alpha - \beta)v = (\alpha + (-\beta))v = \alpha v + (-\beta)v = \alpha v + (-(\beta v)) = \alpha v - \beta v$이다.

(v) 준동형은 정수배를 정수배로 보내므로(군 준동형의 (3)을 (6)으로 읽은 것) $\varphi_v(q \cdot \alpha) = q \cdot \varphi_v(\alpha)$, 곧 $(q \cdot \alpha)v = q \cdot (\alpha v)$이고, $\psi_\alpha(q \cdot v) = q \cdot \psi_\alpha(v)$, 곧 $\alpha(q \cdot v) = q \cdot (\alpha v)$이다. $\alpha = 1$로 두면 조건 (iv)에 의해 $(q \cdot 1)v = q \cdot (1v) = q \cdot v$이다.

**2의 증명.** [[ring-examples|환의 예]]의 (2)에 의해 환 $\mathbb{R}$의 덧셈과 곱셈은 실수의 덧셈과 곱셈이고 그 단위원은 실수 $1$이며, [[field|체]]의 (4)에 의해 $\mathbb{R}$은 체이다.

먼저 $V$가 (V1)–(V8)을 만족한다고 하자. (V3)의 $z$는 모든 $v$에서 $v + z = v$이고, (V1)에 의해 $z + v = v$이므로 $z$는 $+$의 항등원이다([[binary-operation|이항연산]]의 항등원의 정의). (V4)를 이 $z$에 쓰면 각 $v$에 $v + w = z$인 $w$가 있고, (V1)에 의해 $w + v = z$이므로 $w$는 $v$의 역원이다. (V2)는 결합법칙이다. 따라서 [[group|군]]의 정의에 의해 $(V, +)$는 군이고, (V1)에 의해 아벨군이다. 스칼라배의 조건 (i)은 (V6)을 좌우로 바꾸어 읽은 것이고, (ii)는 (V8), (iii)은 (V7), (iv)는 (V5)이다. 따라서 $V$는 $\mathbb{R}$ 위의 벡터공간이다.

거꾸로 $V$가 $\mathbb{R}$ 위의 벡터공간이고 군 $(V, +)$의 항등원이 $e$라 하자. (V1)은 아벨군의 교환법칙, (V2)는 결합법칙이다. (V3): $e$는 모든 $v$에서 $v + e = v$를 만족한다. (V4): $z$가 모든 $v$에서 $v + z = v$인 벡터이면 교환법칙에 의해 $z + v = v$이기도 하므로 $z$는 $+$의 항등원이고, [[binary-operation|이항연산]]의 (1)에 의해 $z = e$이다. 따라서 각 $v$에 대하여 군 $(V, +)$에서의 역원 $w$가 $v + w = e = z$를 만족한다. (V5)–(V8)은 차례로 조건 (iv), (i), (iii), (ii)이다.

어느 쪽이든 $V$는 두 정의를 모두 만족한다. 이때 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B1)에 의해 "모든 $v$에서 $v + z = v$"인 $z$는 하나뿐이고 $e$가 그런 원소이므로 $0_V = e$이다. (B2)에 의해 $v + w = 0_V$인 $w$는 하나뿐이고 군 $(V, +)$에서 $v$의 역원이 그런 원소이므로, (B2)의 $-v$는 군에서의 역원이다. 따라서 $u - v = u + (-v)$도 두 쪽에서 같다.

**3의 증명.** (i) $x, y, z \in F^n$과 $k \in \{1, \dots, n\}$에 대하여, $F$의 덧셈의 결합법칙에 의해 $((x + y) + z)_k = (x_k + y_k) + z_k = x_k + (y_k + z_k) = (x + (y + z))_k$이다. 모든 $k$에서 값이 같으므로 [[function|함수]]의 같음에 의해 $(x + y) + z = x + (y + z)$이다. 같은 방식으로 $F$의 덧셈의 교환법칙에서 $x + y = y + x$이다. 모든 값이 $0$인 함수 $o$(재귀 정리의 (1))는 $(x + o)_k = x_k + 0 = x_k$이므로 $x + o = x$이고, 교환법칙에 의해 $o + x = x$이다. 값이 $-x_k$인 함수 $x'$은 $(x + x')_k = x_k + (-x_k) = 0 = o_k$이므로 $x + x' = o$이고 $x' + x = o$이다. 따라서 $(F^n, +)$는 아벨군이고, 항등원은 $o = (0, \dots, 0)$, $x$의 역원은 $x' = (-x_1, \dots, -x_n)$이다. 스칼라배의 조건은 $k$번째 값에서 $F$의 계산 법칙으로 확인한다. (i) $(\alpha(\beta x))_k = \alpha(\beta x_k) = (\alpha\beta)x_k = ((\alpha\beta)x)_k$는 곱셈의 결합법칙, (ii) $((\alpha + \beta)x)_k = (\alpha + \beta)x_k = \alpha x_k + \beta x_k = (\alpha x + \beta x)_k$는 오른쪽 분배법칙, (iii) $(\alpha(x + y))_k = \alpha(x_k + y_k) = \alpha x_k + \alpha y_k = (\alpha x + \alpha y)_k$는 왼쪽 분배법칙, (iv) $(1x)_k = 1x_k = x_k$는 $1$이 곱셈의 항등원이라는 것이다. 각 등식의 양쪽은 모든 $k$에서 값이 같은 함수이므로 같다. 마지막 문장은 함수의 같음이다.

(ii) $k$를 고정하면 각 $x \in F^n$에 $x_k$가 정해지므로 재귀 정리의 (1)에 의해 값이 $x_k$인 함수 $\pi_k : F^n \to F$가 있다. 덧셈의 정의에 의해 $\pi_k(x + y) = x_k + y_k = \pi_k(x) + \pi_k(y)$이므로 $\pi_k$는 군 $(F^n, +)$에서 군 $(F, +)$로의 준동형이다. 환의 유한 합의 (7)에 의해 $\pi_k\bigl(\sum_{j=m}^{l} y_j\bigr) = \sum_{j=m}^{l} \pi_k(y_j)$이고, 이것이 주장이다. $(\alpha x)_k = \alpha x_k$는 스칼라배의 정의이다.

(iii) [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]에서 $\mathbb{R}^n$은 $\{1, \dots, n\}$에서 $\mathbb{R}$로의 함수 전체의 집합이므로 $F^n$과 같은 집합이다. 그 항목의 덧셈과 스칼라배는 값마다 실수의 합과 곱으로 정한 것이고, 위에서 본 것처럼 체 $\mathbb{R}$의 덧셈과 곱셈은 실수의 덧셈과 곱셈이다. 따라서 $x + y$와 $\alpha x$는 두 쪽에서 모든 자리의 값이 같은 함수이고, 함수의 같음에 의해 같다. 두 연산은 모든 원소의 쌍에서 값이 같으므로 같은 함수이다.

(iv) $(F, +)$는 환의 정의에 의해 아벨군이다. 스칼라배의 조건 (i)은 곱셈의 결합법칙, (ii)는 오른쪽 분배법칙, (iii)은 왼쪽 분배법칙, (iv)는 $1$이 곱셈의 항등원이라는 것이다. 영벡터는 덧셈군 $(F, +)$의 항등원 $0$이다.

**4의 증명.** (i) 준동형 $\psi_\gamma$와 환의 유한 합의 (7)에 의해 $\gamma \sum_{k=m}^{n} v_k = \psi_\gamma\bigl(\sum_{k=m}^{n} v_k\bigr) = \sum_{k=m}^{n} \psi_\gamma(v_k) = \sum_{k=m}^{n} \gamma v_k$이다.

(ii) 준동형 $\varphi_v$와 환의 유한 합의 (7)을 군 $(F, +)$에서 군 $(V, +)$로의 준동형에 쓰면 $\bigl(\sum_{k=m}^{n} \alpha_k\bigr) v = \varphi_v\bigl(\sum_{k=m}^{n} \alpha_k\bigr) = \sum_{k=m}^{n} \alpha_k v$이다.

(iii) 조건 (ii)에 의해 모든 $k$에서 $\alpha_k v_k + \beta_k v_k = (\alpha_k + \beta_k) v_k$이다. 환의 유한 합의 (6)의 (i)과 (3)에 의해
$$
\begin{aligned}
&\sum_{k=m}^{n} \alpha_k v_k + \sum_{k=m}^{n} \beta_k v_k \\
&= \sum_{k=m}^{n} (\alpha_k v_k + \beta_k v_k) \\
&= \sum_{k=m}^{n} (\alpha_k + \beta_k) v_k
\end{aligned}
$$
이다. 차는 (1)의 (iv)에 의해 모든 $k$에서 $\alpha_k v_k - \beta_k v_k = (\alpha_k - \beta_k) v_k$이므로, 환의 유한 합의 (6)의 (ii)와 (3)에서 같은 방식으로 나온다.

(iv) (i)과 조건 (i), 환의 유한 합의 (3)에 의해 $\gamma \sum_{k=m}^{n} \alpha_k v_k = \sum_{k=m}^{n} \gamma(\alpha_k v_k) = \sum_{k=m}^{n} (\gamma\alpha_k) v_k$이다.

(v) $\alpha_k = 0$이면 (1)의 (i)에 의해 $\alpha_k v_k = 0_V$이다. 모든 $k$에서 그러면 환의 유한 합의 (6)의 (iv)에 의해 합은 $0_V$이다. 둘째 문장은 $l$과 다른 번호에서 항 $\alpha_k v_k$가 $0_V$이므로 환의 유한 합의 (6)의 (v)이다.

**5의 증명.** [[finite-sum-of-vectors|벡터의 유한 합]]에서 $\alpha_1 v_1 + \cdots + \alpha_n v_n$은 $k$번째 항이 $\alpha_k v_k$인 벡터의 열의 그 항목의 합이다. (2)에 의해 $V$를 $\mathbb{R}$ 위의 벡터공간으로 볼 때 스칼라배는 같은 함수이고 $(V, +)$는 아벨군이다. 환의 유한 합의 (10)에 의해 벡터의 유한 합은 군 $(V, +)$에서의 환의 유한 합과 같고, 같은 항목의 (1)에 의해 그 합은 $\sum_{k=1}^{n} \alpha_k v_k$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3^2$에서의 계산]
$3$은 소수이므로 $\mathbb{Z}_3$은 체이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). (3)에 의해 $\mathbb{Z}_3^2$는 $\mathbb{Z}_3$ 위의 벡터공간이다. $x = ([1], [2])$, $y = ([2], [2])$로 두면 [[integers-modulo-n|법 n의 정수]]의 계산으로
$$
\begin{aligned}
x + y &= ([3], [4]) \\
&= ([0], [1]), \\
[2]x &= ([2], [4]) \\
&= ([2], [1])
\end{aligned}
$$
이다. $x$의 덧셈 역원은 (3)의 (i)에 의해 $(-[1], -[2]) = ([2], [1])$이고, 이것은 $[2]x$와 같다. $\mathbb{Z}_3$에서 $-[1] = [2]$이므로 이것은 (1)의 (iii)의 $(-1)x = -x$와 맞는다.
:::

:::example[$\mathbb{Z}_3$ 위의 벡터공간에서 세 번 더하기]
$V$가 $\mathbb{Z}_3$ 위의 벡터공간이고 $v \in V$라 하자. 덧셈군 $(\mathbb{Z}_3, +)$에서 $3 \cdot [1] = [1] + [1] + [1] = [3] = [0]$이다. (1)의 (v)와 (i)에 의해
$$
3 \cdot v = (3 \cdot [1])v = [0]v = 0_V
$$
이다. [[power-in-a-group|군의 거듭제곱]]의 (4)에 의해 $3 \cdot v = (2 \cdot v) + v = (v + v) + v$이므로, $\mathbb{Z}_3$ 위의 벡터공간에서는 어떤 벡터든 세 번 더하면 $0_V$이다. 앞의 예시의 $x = ([1], [2])$에서 $x + x + x = ([3], [6]) = ([0], [0])$이다.
:::

:::counterexample[덧셈군 $\mathbb{Z}_4$에 $\mathbb{Z}_2$의 스칼라배를 줄 수 없는 예]
$(\mathbb{Z}_4, +)$는 아벨군이다. 어떤 함수 $\mathbb{Z}_2 \times \mathbb{Z}_4 \to \mathbb{Z}_4$를 스칼라배로 삼아도 $\mathbb{Z}_4$는 $\mathbb{Z}_2$ 위의 벡터공간이 되지 않는다. 그런 스칼라배가 있다고 하자. $\mathbb{Z}_2$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)), $\mathbb{Z}_2$에서 $2 \cdot [1] = [1] + [1] = [2] = [0]$이므로 (1)의 (v)와 (i)에 의해 모든 $v \in \mathbb{Z}_4$에서 $2 \cdot v = [0]v = 0_V$이다. 그런데 $\mathbb{Z}_4$의 원소 $[1]$에 대하여 $2 \cdot [1] = [1] + [1] = [2]$이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_4$에서 $[2] \ne [0]$이다. 이것은 모순이다. 덧셈군이 아벨군이라는 것만으로는 주어진 체 위의 벡터공간이 되지 않을 수 있다.
:::

:::counterexample[넷째 조건만 깨지는 스칼라배의 예]
$F$를 체로 보고((3)의 (iv)의 덧셈), 모든 $\alpha, v \in F$에서 값이 $0$인 함수 $F \times F \to F$를 스칼라배로 삼아 $\alpha \ast v = 0$이라 쓰자. $(F, +)$는 아벨군이고, 조건 (i)–(iii)은 양쪽이 모두 $0$이므로 성립한다. 예컨대 (ii)는 $(\alpha + \beta) \ast v = 0 = 0 + 0 = \alpha \ast v + \beta \ast v$이다. 그러나 $1 \ast 1 = 0 \ne 1$이므로(단위원을 갖는 환에서 $1 \ne 0$) 조건 (iv)가 깨지고, 이 스칼라배로 $F$는 $F$ 위의 벡터공간이 아니다. 조건 (iv)는 앞의 세 조건에서 나오지 않는다.
:::

## 확인 질문

:::check[$F$ 위의 벡터공간의 벡터 $v$와 서로 다른 스칼라 $\alpha$, $\beta$에 대하여 $\alpha v = \beta v$이면 $v$는 무엇인가?]
$v = 0_V$이다. (1)의 (iv)에 의해 $(\alpha - \beta)v = \alpha v - \beta v$이고, 두 벡터가 같으므로 이것은 $0_V$이다. $\alpha - \beta = 0$이면 군 $(F, +)$에서 $\alpha = (\alpha - \beta) + \beta = 0 + \beta = \beta$가 되므로, $\alpha \ne \beta$에서 $\alpha - \beta \ne 0$이고, (1)의 (ii)에 의해 $v = 0_V$이다.
:::

:::check[$F$ 자신을 $F$ 위의 벡터공간으로 볼 때 (1)의 (ii)의 첫 문장은 체의 어떤 성질을 말하는가?]
(3)의 (iv)에 의해 스칼라배는 $F$의 곱셈이고 영벡터는 $0$이다. 따라서 첫 문장은 "$\alpha v = 0$이면 $\alpha = 0$이거나 $v = 0$", 곧 $F$에 영인자가 없다는 것이다. 이것은 체가 [[integral-domain|정역]]이라는 [[field|체]]의 (3)과 같은 내용이다.
:::
