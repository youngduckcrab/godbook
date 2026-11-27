---
title: 체 위의 생성과 일차독립
title_en: Span and Linear Independence over a Field
aliases: [체 위의 부분공간, 체 위의 일차결합, span_F, 일차종속 (체), subspace over a field, linear combination over a field]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 체 F 위의 벡터공간의 부분공간, 벡터의 열의 일차결합과 생성 span_F, 일차독립과 일차종속을 정의한다. 생성은 열의 항을 모두 포함하는 가장 작은 부분공간이고, 일차독립인 열의 계수는 하나뿐이며, 일차독립인 열에 벡터를 덧붙여도 일차독립인 것은 그 벡터가 생성에 들지 않을 때라는 것, 부분공간 안에서 계산해도 같다는 것, ℝ 위에서는 선형대수 강의의 것과 같다는 것을 보인다.
requires: [set, subset, function, adding-or-removing-an-element, recursion-theorem, finite-set, proof-by-contradiction, proof-by-contrapositive, even-and-odd, binary-operation, group, group-basic-properties, subgroup, subgroup-criteria, number-groups, power-in-a-group, group-homomorphism, cyclic-subgroup, finite-product-in-a-group, ring, ring-examples, field, finite-integral-domain-is-a-field, integers-modulo-n, finite-sums-in-a-ring, real-number-arithmetic, vector-space-over-a-field, vector-space, subspace, linear-combination-and-span, linear-independence]
sources:
  - ref: judson-abstract-algebra
    loc: "20.2절 Subspaces, 부분공간의 정의와 일차결합·생성의 정의 (번호 없음, p.253–254), Example 20.6, 20.7 (p.253–254), Proposition 20.8 (p.254); 20.3절 Linear Independence, 일차종속·일차독립의 정의 (번호 없음, p.254), Proposition 20.9 (p.254–255), Proposition 20.10 (p.255); 20.5절 Exercises, 연습문제 7, 8, 12, 13 (p.257); 부록 B 의 20.5.12 힌트 (p.332)"
    checked: original
    note: "출처는 부분공간을 '벡터의 덧셈과 스칼라배에 닫힌 부분집합' 으로 정의하고(p.253) 영벡터를 포함한다는 조건을 두지 않는다. 그 정의로는 공집합도 부분공간이 된다. 이 항목은 0_V ∈ W 를 조건 (i)에 넣고, 공집합이 아니면 (i)이 나온다는 것을 (1)의 (i)로 보인다. 출처는 일차결합, 생성, 일차독립을 벡터의 집합 S = {v_1, …, v_n} 에 대해 정의하고(p.254), 이 항목은 선형대수 강의처럼 벡터의 열(같은 벡터가 되풀이되어도 된다)에 대해 정의한다. 집합으로 정의하면 같은 벡터가 두 자리에 나오는 경우를 말할 수 없다((3)의 (ii)). 출처는 생성을 'spanning set' 이라 부르고 Proposition 20.8 에서는 'the span of S' 라고도 쓰며, 기호를 두지 않는다(책 끝의 기호 목록 p.338 에도 없다). 기호 span_F 는 이 사이트가 붙였다. (2)의 (i)은 Proposition 20.8 이고 출처의 증명과 같은 계산이다. (2)의 (ii)(iii)(iv)는 출처에 명제로 없다(검색어 'span', 'spanned', 'smallest subspace', 'contained in' 으로 책 전체를 찾고 20.5절 연습문제 1–18 을 처음부터 읽었다). (3)의 (i)은 연습문제 12 이고 그 힌트(p.332)와 같은 계산이다. (3)의 (iv)는 Proposition 20.9 이고 출처의 증명과 같다. (4)는 출처의 Proposition 20.10('일차종속인 것은 정확히 어떤 v_i 가 나머지의 일차결합일 때')과 같은 발상의 판정을 덧붙인 열의 꼴로 둔 것이다. Proposition 20.10 의 꼴 자체는 이 항목에서 진술하지 않는다. (1)의 (iii)의 {0_V} 는 연습문제 13 의 앞 절반이다. (5), (6)은 출처에 없다(출처는 실수 스칼라의 벡터공간을 따로 정의하지 않는다). 예시 '$\\mathbb{Z}_p$ 위에서 덧셈군의 부분군이 부분공간인 예' 의 대상은 출처 8.2절(p.98)의 군 부호(ℤ_2ⁿ 의 부분군인 부호)와 22.2절 Example 22.15(p.283)의 'ℤ_2ⁿ 을 ℤ_2 위의 벡터공간으로 본다' 는 말과 같은 종류이고, 그 예의 부분군 {([0], [0]), ([1], [1]), ([2], [2])} 은 출처 Example 3.28(p.39)의 ℤ_2 × ℤ_2 의 부분군 H_3 = {(0, 0), (1, 1)} 과 같은 모양이고, ℤ_3 × ℤ_3 의 부분군을 모두 찾으라는 3.5절 연습문제 34(p.42)가 찾는 부분군의 하나이다. 이 예시의 계산 αw = (q · [1])w = q · w 는 출처 Lemma 16.18 의 증명(p.195)이 환에서 nr = (n1)r 로 쓰는 것과 같은 계산이고, Example 22.15(p.283)는 군 준동형인 부호의 사상을 'In fact, if we regard ℤ_2ⁿ as a vector space over ℤ_2, ϕ is a linear transformation' 이라고 적어 ℤ_2 위에서 군의 구조가 선형 구조를 정한다는 같은 관찰을 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]이고 $V$가 [[vector-space-over-a-field|체 위의 벡터공간]]의 뜻에서 $F$ 위의 벡터공간이라 하자. 영벡터 $0_V$, 스칼라배, 벡터의 열과 스칼라의 열, 합의 기호 $\sum$은 그 항목의 것이다. 아래에서 $n$, $m$은 $0$ 이상인 정수이다.

**부분공간.** $V$의 [[subset|부분집합]] $W$가 $V$의 **부분공간**(subspace)인 것은 정확히 다음 (i)–(iii)이 모두 성립할 때이다.

- (i) $0_V \in W$이다.
- (ii) 모든 $u, v \in W$에 대하여 $u + v \in W$이다.
- (iii) 모든 $\alpha \in F$와 모든 $v \in W$에 대하여 $\alpha v \in W$이다.

**일차결합과 생성.** $v_1, \dots, v_n$이 길이 $n$인 벡터의 열이라 하자. 벡터 $x \in V$가 이 열의 ($F$ 위의) **일차결합**(linear combination)인 것은 정확히 길이 $n$인 스칼라의 열 $\alpha_1, \dots, \alpha_n$이 있어
$$
x = \sum_{k=1}^{n} \alpha_k v_k
$$
일 때이고, 이 $\alpha_1, \dots, \alpha_n$을 이 표현의 **계수**(coefficients)라 한다. 이 열의 **생성**(span)은 일차결합 전체의 집합
$$
\begin{aligned}
&\operatorname{span}_F(v_1, \dots, v_n) \\
&\quad = \Bigl\{\sum_{k=1}^{n} \alpha_k v_k : \alpha_1, \dots, \alpha_n \text{은} \\
&\qquad\quad \text{길이 } n \text{인 스칼라의 열}\Bigr\}
\end{aligned}
$$
이다. $n = 0$이면 스칼라의 빈 열 하나뿐이고 그 합은 빈 합 $0_V$이므로 생성은 $\{0_V\}$이다. $V$의 부분집합 $U$에 대하여 열이 $U$를 **생성한다**(spans)는 것은 정확히 $\operatorname{span}_F(v_1, \dots, v_n) = U$일 때이다.

**덧붙인 열.** 열 $v_1, \dots, v_n$과 $x \in V$에 대하여, 처음 $n$개가 $v_1, \dots, v_n$이고 $(n+1)$번째 항이 $x$인 길이 $n + 1$인 열을 $v_1, \dots, v_n, x$로 쓰고 $v$에 $x$를 **덧붙인 열**이라 한다. 이것은 [[finite-product-in-a-group|군의 유한 곱]]의 (3)에서 $v$와 길이 $1$인 열 $x$를 이어 붙인 열이다.

**일차독립.** 열 $v_1, \dots, v_n$이 ($F$ 위에서) **일차독립**(linearly independent)인 것은 정확히 길이 $n$인 모든 스칼라의 열 $\alpha_1, \dots, \alpha_n$에 대하여
$$
\begin{aligned}
&\sum_{k=1}^{n} \alpha_k v_k = 0_V \text{이면} \\
&\quad \text{모든 } k \in \{1, \dots, n\} \text{에서 } \alpha_k = 0
\end{aligned}
$$
일 때이다. 일차독립이 아닌 열을 **일차종속**(linearly dependent)이라 한다. 곧 열이 일차종속인 것은 정확히 $\sum_{k=1}^{n} \alpha_k v_k = 0_V$이고 $\alpha_k \ne 0$인 $k$가 있는 스칼라의 열 $\alpha$가 있을 때이다. 빈 열은 일차독립이다(결론의 "모든 $k$"에 해당하는 $k$가 없다).

다음이 성립한다. $v_1, \dots, v_n$과 $w_1, \dots, w_m$은 벡터의 열이다.

1. (부분공간)
   - (i) $W \subseteq V$가 부분공간인 것은 정확히 $W \ne \emptyset$이고 (ii), (iii)이 성립할 때이다.
   - (ii) $W$가 부분공간이면 $W$는 군 $(V, +)$의 [[subgroup|부분군]]이고, 덧셈을 $W$로 제한한 연산과, 스칼라배를 $F \times W$로 [[adding-or-removing-an-element|제한]]한 함수(값이 모두 $W$에 속하므로 $F \times W$에서 $W$로의 함수로 선언한 것)로 $F$ 위의 벡터공간이다. 이 벡터공간의 영벡터는 $0_V$이고 $w$의 덧셈 역원은 $V$에서의 $-w$이다. 부분공간을 벡터공간으로 볼 때는 언제나 이 연산으로 본다. 항이 모두 $W$에 속하는 벡터의 열의 합과 일차결합 $\sum_{k=1}^{n} \alpha_k w_k$는 $W$에 속하고, 벡터공간 $W$에서 계산한 것과 $V$에서 계산한 것이 같다.
   - (iii) $\{0_V\}$와 $V$는 $V$의 부분공간이다.
   - (iv) $W$가 부분공간이고 $U \subseteq W$이면, $U$가 벡터공간 $W$의 부분공간인 것은 정확히 $U$가 $V$의 부분공간일 때이다.
2. (생성)
   - (i) $\operatorname{span}_F(v_1, \dots, v_n)$은 $V$의 부분공간이고, 모든 $k \in \{1, \dots, n\}$에서 $v_k \in \operatorname{span}_F(v_1, \dots, v_n)$이다.
   - (ii) $W$가 $V$의 부분공간이고 모든 $k$에서 $v_k \in W$이면 $\operatorname{span}_F(v_1, \dots, v_n) \subseteq W$이다. 곧 생성은 열의 항을 모두 포함하는 부분공간 가운데 가장 작다.
   - (iii) $\operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(w_1, \dots, w_m)$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $v_k \in \operatorname{span}_F(w_1, \dots, w_m)$일 때이다.
   - (iv) $x \in V$이면 $\operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(v_1, \dots, v_n, x)$이다. 두 집합이 같은 것은 정확히 $x \in \operatorname{span}_F(v_1, \dots, v_n)$일 때이다.
3. (일차독립)
   - (i) 어떤 $k$에서 $v_k = 0_V$이면 열은 일차종속이다.
   - (ii) 서로 다른 두 자리 $j \ne k$에서 $v_j = v_k$이면 열은 일차종속이다.
   - (iii) 길이 $1$인 열 $v_1$이 일차독립인 것은 정확히 $v_1 \ne 0_V$일 때이다.
   - (iv) (계수는 하나뿐이다) 열이 일차독립이고 길이 $n$인 스칼라의 열 $\alpha$, $\beta$에 대하여 $\sum_{k=1}^{n} \alpha_k v_k = \sum_{k=1}^{n} \beta_k v_k$이면 모든 $k$에서 $\alpha_k = \beta_k$이다. 따라서 일차독립인 열의 생성에 드는 벡터마다, 그 벡터를 나타내는 길이 $n$인 스칼라의 열은 하나뿐이다.
   - (v) (처음 몇 개) 열이 일차독립이고 $0 \le r \le n$이면 처음 $r$개 $v_1, \dots, v_r$도 일차독립이다.
4. (덧붙인 열)
   - (i) 열 $v_1, \dots, v_n$이 일차독립이고 $x \in V$이면, 덧붙인 열 $v_1, \dots, v_n, x$가 일차독립인 것은 정확히 $x \notin \operatorname{span}_F(v_1, \dots, v_n)$일 때이다. ($n = 0$이면 이 조건은 $x \ne 0_V$이다.)
   - (ii) $W$가 $V$의 부분공간이고, 열 $v_1, \dots, v_n$이 일차독립이며 모든 항이 $W$에 속하고, $\operatorname{span}_F(v_1, \dots, v_n) \ne W$이면, 덧붙인 열 $v_1, \dots, v_n, x$가 일차독립인 $x \in W$가 있다.
5. (부분공간 안의 열) $W$가 $V$의 부분공간이고 열 $w_1, \dots, w_m$의 모든 항이 $W$에 속한다고 하자. 이 열은 (함수의 공역을 $W$로 선언하여) 벡터공간 $W$의 열이기도 하다. 벡터공간 $W$에서 계산한 생성은 $\operatorname{span}_F(w_1, \dots, w_m)$과 같고, 이 열이 벡터공간 $W$에서 일차독립인 것은 정확히 $V$에서 일차독립일 때이다.
6. (실수의 경우) $V$가 [[vector-space|벡터공간]]이고 [[vector-space-over-a-field|체 위의 벡터공간]]의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본다고 하자. $V$의 부분집합이 이 항목의 뜻에서 부분공간인 것은 정확히 [[subspace|부분공간]]의 (S1)–(S3)을 만족할 때이다. 실수의 열을 계수로 하는 $\operatorname{span}_{\mathbb{R}}(v_1, \dots, v_n)$은 [[linear-combination-and-span|일차결합과 생성]]의 $\operatorname{span}(v_1, \dots, v_n)$과 같고, 열이 이 항목의 뜻에서 $\mathbb{R}$ 위에서 일차독립인 것은 정확히 [[linear-independence|일차독립]]의 뜻에서 일차독립일 때이다.
:::

:::english
Let $F$ be a field and $V$ a vector space over $F$ in the sense of the entry on vector spaces over a field. The zero vector $0_V$, scalar multiplication, sequences of vectors and of scalars, and the summation sign $\sum$ are those of that entry. Below, $n$ and $m$ are integers $\ge 0$.

**Subspaces.** A subset $W$ of $V$ is a **subspace** of $V$ exactly when all of the following (i)–(iii) hold.

- (i) $0_V \in W$.
- (ii) $u + v \in W$ for all $u, v \in W$.
- (iii) $\alpha v \in W$ for all $\alpha \in F$ and all $v \in W$.

**Linear combinations and span.** Let $v_1, \dots, v_n$ be a sequence of vectors of length $n$. A vector $x \in V$ is a **linear combination** (over $F$) of this sequence exactly when there is a sequence of scalars $\alpha_1, \dots, \alpha_n$ of length $n$ with
$$
x = \sum_{k=1}^{n} \alpha_k v_k,
$$
and $\alpha_1, \dots, \alpha_n$ are called the **coefficients** of this representation. The **span** of the sequence is the set of all its linear combinations,
$$
\begin{aligned}
&\operatorname{span}_F(v_1, \dots, v_n) \\
&\quad = \Bigl\{\sum_{k=1}^{n} \alpha_k v_k : \alpha_1, \dots, \alpha_n \text{ a sequence} \\
&\qquad\quad \text{of scalars of length } n\Bigr\}.
\end{aligned}
$$
If $n = 0$, the only sequence of scalars is the empty one, whose sum is the empty sum $0_V$, so the span is $\{0_V\}$. For a subset $U$ of $V$, the sequence **spans** $U$ exactly when $\operatorname{span}_F(v_1, \dots, v_n) = U$.

**Appended sequences.** For a sequence $v_1, \dots, v_n$ and $x \in V$, the sequence of length $n + 1$ whose first $n$ terms are $v_1, \dots, v_n$ and whose $(n+1)$-th term is $x$ is written $v_1, \dots, v_n, x$ and called the sequence obtained by **appending** $x$ to $v$. It is the concatenation, as in (3) of the entry on finite products in a group, of $v$ and the sequence of length $1$ consisting of $x$.

**Linear independence.** The sequence $v_1, \dots, v_n$ is **linearly independent** (over $F$) exactly when, for every sequence of scalars $\alpha_1, \dots, \alpha_n$ of length $n$,
$$
\begin{aligned}
&\sum_{k=1}^{n} \alpha_k v_k = 0_V \text{ implies} \\
&\quad \alpha_k = 0 \text{ for every } k \in \{1, \dots, n\}.
\end{aligned}
$$
A sequence that is not linearly independent is called **linearly dependent**; that is, a sequence is linearly dependent exactly when there is a sequence of scalars $\alpha$ with $\sum_{k=1}^{n} \alpha_k v_k = 0_V$ and $\alpha_k \ne 0$ for some $k$. The empty sequence is linearly independent (there is no $k$ to which "every $k$" in the conclusion applies).

The following hold, where $v_1, \dots, v_n$ and $w_1, \dots, w_m$ are sequences of vectors.

1. (Subspaces)
   - (i) $W \subseteq V$ is a subspace exactly when $W \ne \emptyset$ and (ii), (iii) hold.
   - (ii) If $W$ is a subspace, then $W$ is a subgroup of the group $(V, +)$, and $W$ is a vector space over $F$ with the restriction of the addition to $W$ and the restriction of the scalar multiplication to $F \times W$ (declared as a function from $F \times W$ to $W$, since all its values lie in $W$). The zero vector of this vector space is $0_V$, and the additive inverse of $w$ is $-w$ computed in $V$. Whenever a subspace is regarded as a vector space, it is with these operations. Sums and linear combinations $\sum_{k=1}^{n} \alpha_k w_k$ of sequences of vectors all of whose terms lie in $W$ belong to $W$, and the value computed in the vector space $W$ equals the value computed in $V$.
   - (iii) $\{0_V\}$ and $V$ are subspaces of $V$.
   - (iv) If $W$ is a subspace and $U \subseteq W$, then $U$ is a subspace of the vector space $W$ exactly when $U$ is a subspace of $V$.
2. (Span)
   - (i) $\operatorname{span}_F(v_1, \dots, v_n)$ is a subspace of $V$, and $v_k \in \operatorname{span}_F(v_1, \dots, v_n)$ for every $k \in \{1, \dots, n\}$.
   - (ii) If $W$ is a subspace of $V$ and $v_k \in W$ for every $k$, then $\operatorname{span}_F(v_1, \dots, v_n) \subseteq W$. That is, the span is the smallest subspace containing all the terms of the sequence.
   - (iii) $\operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(w_1, \dots, w_m)$ exactly when $v_k \in \operatorname{span}_F(w_1, \dots, w_m)$ for every $k \in \{1, \dots, n\}$.
   - (iv) If $x \in V$, then $\operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(v_1, \dots, v_n, x)$. The two sets are equal exactly when $x \in \operatorname{span}_F(v_1, \dots, v_n)$.
3. (Linear independence)
   - (i) If $v_k = 0_V$ for some $k$, the sequence is linearly dependent.
   - (ii) If $v_j = v_k$ at two different positions $j \ne k$, the sequence is linearly dependent.
   - (iii) A sequence $v_1$ of length $1$ is linearly independent exactly when $v_1 \ne 0_V$.
   - (iv) (Coefficients are unique) If the sequence is linearly independent and $\alpha$, $\beta$ are sequences of scalars of length $n$ with $\sum_{k=1}^{n} \alpha_k v_k = \sum_{k=1}^{n} \beta_k v_k$, then $\alpha_k = \beta_k$ for every $k$. Hence for each vector in the span of a linearly independent sequence, the sequence of scalars of length $n$ representing it is unique.
   - (v) (Initial segments) If the sequence is linearly independent and $0 \le r \le n$, then its first $r$ terms $v_1, \dots, v_r$ are also linearly independent.
4. (Appended sequences)
   - (i) If $v_1, \dots, v_n$ is linearly independent and $x \in V$, then the appended sequence $v_1, \dots, v_n, x$ is linearly independent exactly when $x \notin \operatorname{span}_F(v_1, \dots, v_n)$. (If $n = 0$, this condition is $x \ne 0_V$.)
   - (ii) If $W$ is a subspace of $V$, the sequence $v_1, \dots, v_n$ is linearly independent with all its terms in $W$, and $\operatorname{span}_F(v_1, \dots, v_n) \ne W$, then there is $x \in W$ such that the appended sequence $v_1, \dots, v_n, x$ is linearly independent.
5. (Sequences in a subspace) Let $W$ be a subspace of $V$ and suppose all terms of the sequence $w_1, \dots, w_m$ lie in $W$. This sequence is also a sequence of the vector space $W$ (declaring the codomain of the function to be $W$). The span computed in the vector space $W$ equals $\operatorname{span}_F(w_1, \dots, w_m)$, and the sequence is linearly independent in the vector space $W$ exactly when it is linearly independent in $V$.
6. (The real case) Let $V$ be a vector space in the sense of the linear algebra course, regarded as a vector space over $\mathbb{R}$ by (2) of the entry on vector spaces over a field. A subset of $V$ is a subspace in the sense of this entry exactly when it satisfies (S1)–(S3) of the entry on subspaces. For a sequence of real coefficients, $\operatorname{span}_{\mathbb{R}}(v_1, \dots, v_n)$ equals $\operatorname{span}(v_1, \dots, v_n)$ of the entry on linear combinations and span, and a sequence is linearly independent over $\mathbb{R}$ in the sense of this entry exactly when it is linearly independent in the sense of the entry on linear independence.
:::

## 직관

선형대수 강의에서 만든 말을 체 $F$ 위로 그대로 옮겼습니다. 바뀐 것은 계수가 $F$의 원소라는 것뿐이고, 정의의 모양은 같습니다. 비유하자면 몇 가지 재료를 정해 두고 각 재료를 $F$의 원소만큼씩 섞어 만들 수 있는 것 전체가 생성이고, 어느 재료도 다른 재료를 섞어 만들 수 없을 때가 일차독립입니다. 비유가 맞는 곳은 "섞는 양"이 계수의 열이고 "다 섞은 것"이 합 $\sum_{k} \alpha_k v_k$라는 점입니다.

계수가 어느 체에 속하는지는 결과를 바꿉니다. 같은 모양의 두 벡터 $(1, 2)$와 $(2, 1)$은 $\mathbb{R}$ 위에서는 일차독립이지만, $\mathbb{Z}_3$에서는 $[2]([1], [2]) = ([2], [1])$이어서 일차종속입니다(아래 예시). 그래서 이 단원은 언제나 "$F$ 위에서"를 붙여 말하고 기호에도 $\operatorname{span}_F$처럼 체를 적습니다.

(4)는 이 단원의 뒤 항목들이 거듭 쓰는 판정입니다. 일차독립인 열에 벡터 하나를 덧붙일 때, 그 벡터가 이미 만들 수 있는 것이면 덧붙인 열은 종속이 되고, 만들 수 없는 것이면 여전히 독립입니다.

## 증명

:::idea
부분공간은 덧셈군의 부분군이면서 스칼라배에 닫힌 것이므로, 군과 환의 유한 합에서 증명한 것을 그대로 쓴다. 생성에 관한 것은 계수끼리 더하고 곱하는 [[vector-space-over-a-field|체 위의 벡터공간]]의 (4)로 계산하고, 일차독립에 관한 것은 영벡터를 나타내는 계수를 직접 만든다.
:::

:::hint
(3)의 (ii)에서는 $j$번째 자리에 $1$, $k$번째 자리에 $-1$, 나머지에 $0$을 둔 계수를 생각한다.
:::

:::hint
(4)의 (i)에서 덧붙인 열이 종속이라고 하고 그 계수의 마지막 자리가 $0$인지 아닌지로 나눈다.
:::

:::proof
**쓰는 사실.** [[vector-space-over-a-field|체 위의 벡터공간]]을 "벡터공간 항목"으로 줄여 부르고 그 번호로 인용한다. 합의 성질은 [[finite-sums-in-a-ring|환의 유한 합]]의 번호로 인용한다. 스칼라의 열을 자리마다 식으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓴다([[finite-product-in-a-group|군의 유한 곱]]의 진술 첫머리). 길이가 같은 두 열은 모든 자리에서 항이 같을 때 같다. $k \in \{1, \dots, n\}$에 대하여 $\delta^{(k)}$를 $k$번째 자리가 $1$이고 나머지 자리가 $0$인 길이 $n$인 스칼라의 열이라 하면, 벡터공간 항목의 (4)의 (v)와 조건 (iv)에 의해
$$
\sum_{j=1}^{n} \delta^{(k)}_j v_j = 1 v_k = v_k
$$
이다. 이것을 (가)라 한다.

**1의 증명.** (i) 부분공간이면 (i)에 의해 $0_V \in W$이므로 $W \ne \emptyset$이다. 거꾸로 $W \ne \emptyset$이고 (ii), (iii)이 성립하면 $v \in W$를 잡을 때 (iii)과 벡터공간 항목의 (1)의 (i)에 의해 $0_V = 0v \in W$이다.

(ii) 벡터공간 항목의 (1)의 (iii)에 의해 $-w = (-1)w$이므로 (iii)에 의해 $W$는 덧셈 역원에 대해 닫혀 있다. (i), (ii)와 함께 [[subgroup-criteria|부분군 판정법]]의 (3)에 의해 $W$는 군 $(V, +)$의 부분군이고, [[subgroup|부분군]]의 (7)에 의해 덧셈을 $W$로 제한한 연산으로 아벨군이며, 그 항등원은 $0_V$, $w$의 역원은 $-w$이다(부분군의 (1), (2)). 스칼라배를 $F \times W$로 [[adding-or-removing-an-element|제한]]한 함수는 $F \times W$에서 $V$로의 함수이고 $(\alpha, w)$에서의 값이 $\alpha w$이다. (iii)에 의해 그 값이 모두 $W$에 속하므로 [[function|함수]]의 약속에 의해 같은 집합을 $F \times W$에서 $W$로의 함수로 선언할 수 있다. 두 연산은 $W$의 원소에서 $V$의 연산과 같은 값을 가지므로, 스칼라배의 조건 (i)–(iv)는 $V$에서 성립하는 것이 그대로 $W$에서 성립한다. 따라서 $W$는 $F$ 위의 벡터공간이다. 마지막 문장: 모든 항 $w_k$가 $W$에 속하면 (iii)에 의해 $\alpha_k w_k \in W$이고, 스칼라배의 값은 두 쪽에서 같으므로 항 $\alpha_k w_k$로 된 열은 두 쪽에서 같은 열이다. 환의 유한 합의 (8)에 의해 이 열의 합은 $W$에 속하고 군 $W$에서 같은 항으로 만든 합과 같다.

(iii) $0_V + 0_V = 0_V$이고 벡터공간 항목의 (1)의 (i)에 의해 $\alpha 0_V = 0_V$이므로 $\{0_V\}$는 (i)–(iii)을 만족한다. $V$는 덧셈과 스칼라배의 값이 $V$에 속하므로 (i)–(iii)을 만족한다.

(iv) (ii)에 의해 벡터공간 $W$의 영벡터는 $0_V$이고, $W$의 원소끼리의 합과 스칼라배는 $V$에서의 것과 같다. 따라서 $U$에 대한 조건 (i)–(iii)은 벡터공간 $W$에서 읽든 $V$에서 읽든 같은 조건이다.

**2의 증명.** (i) 길이 $n$인 열 $o$의 모든 자리가 $0$이면 벡터공간 항목의 (4)의 (v)에 의해 $\sum_{k} o_k v_k = 0_V$이므로 $0_V$는 생성에 속한다. $x = \sum_{k=1}^{n} \alpha_k v_k$, $y = \sum_{k=1}^{n} \beta_k v_k$이고 $\gamma \in F$이면 벡터공간 항목의 (4)의 (iii), (iv)에 의해
$$
\begin{aligned}
x + y &= \sum_{k=1}^{n} (\alpha_k + \beta_k) v_k, \\
\gamma x &= \sum_{k=1}^{n} (\gamma\alpha_k) v_k
\end{aligned}
$$
이고, 오른쪽은 자리마다 정한 스칼라의 열 $\alpha_k + \beta_k$와 $\gamma\alpha_k$를 계수로 하는 일차결합이다. 따라서 생성은 부분공간이다. 각 $v_k$는 (가)에 의해 계수 $\delta^{(k)}$의 일차결합이다.

(ii) $x = \sum_{k=1}^{n} \alpha_k v_k$라 하자. 모든 $v_k$가 $W$에 속하므로 (1)의 (ii)의 마지막 문장에 의해 $x \in W$이다.

(iii) 생성이 포함되면 (i)에 의해 $v_k \in \operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(w_1, \dots, w_m)$이다. 거꾸로 모든 $v_k$가 $\operatorname{span}_F(w_1, \dots, w_m)$에 속하면, 이 집합은 (i)에 의해 부분공간이므로 (ii)에 의해 $\operatorname{span}_F(v_1, \dots, v_n) \subseteq \operatorname{span}_F(w_1, \dots, w_m)$이다.

(iv) 덧붙인 열을 $u_1, \dots, u_{n+1}$이라 하면 $k \le n$에서 $u_k = v_k$이고 $u_{n+1} = x$이다. (i)에 의해 각 $v_k = u_k$는 $\operatorname{span}_F(u_1, \dots, u_{n+1})$에 속하므로 (iii)에 의해 첫 포함이 성립한다. $x \in \operatorname{span}_F(v_1, \dots, v_n)$이면 덧붙인 열의 모든 항 $v_1, \dots, v_n, x$가 $\operatorname{span}_F(v_1, \dots, v_n)$에 속하므로((i)과 가정) (iii)에 의해 반대쪽 포함도 성립하고 두 집합은 같다. 거꾸로 두 집합이 같으면 (i)에 의해 $x = u_{n+1} \in \operatorname{span}_F(u_1, \dots, u_{n+1}) = \operatorname{span}_F(v_1, \dots, v_n)$이다.

**3의 증명.** (i) $v_k = 0_V$이면 (가)에 의해 $\sum_{j} \delta^{(k)}_j v_j = v_k = 0_V$이고 $\delta^{(k)}_k = 1 \ne 0$이다(단위원을 갖는 환에서 $1 \ne 0$). 따라서 열은 일차종속이다.

(ii) $j \ne k$이고 $v_j = v_k$라 하자. 자리 $i$마다 $\delta^{(j)}_i - \delta^{(k)}_i$로 정한 스칼라의 열을 $\gamma$라 하면, 벡터공간 항목의 (4)의 (iii)과 (가)에 의해
$$
\begin{aligned}
\sum_{i=1}^{n} \gamma_i v_i &= \sum_{i=1}^{n} \delta^{(j)}_i v_i - \sum_{i=1}^{n} \delta^{(k)}_i v_i \\
&= v_j - v_k \\
&= 0_V
\end{aligned}
$$
이고, $j \ne k$이므로 $\gamma_j = 1 - 0 = 1 \ne 0$이다. 따라서 열은 일차종속이다.

(iii) $v_1 = 0_V$이면 (i)에 의해 일차종속이다. $v_1 \ne 0_V$이고 $\sum_{k=1}^{1} \alpha_k v_k = 0_V$이면 환의 유한 합의 (1)에 의해 이 합은 $\alpha_1 v_1$이므로, 벡터공간 항목의 (1)의 (ii)에 의해 $\alpha_1 = 0$이다. 따라서 일차독립이다.

(iv) 두 합이 같으면 군에서 같은 원소의 차는 $0_V$이므로 벡터공간 항목의 (4)의 (iii)에 의해 $\sum_{k=1}^{n} (\alpha_k - \beta_k) v_k = 0_V$이다. 일차독립의 정의에 의해 모든 $k$에서 $\alpha_k - \beta_k = 0$이고, 군 $(F, +)$에서 $\alpha_k = (\alpha_k - \beta_k) + \beta_k = \beta_k$이다. 둘째 문장: 생성에 드는 벡터를 나타내는 열이 둘이면 방금 보인 것에 의해 모든 자리에서 같으므로 같은 열이다.

(v) $\sum_{k=1}^{r} \beta_k v_k = 0_V$라 하자. 자리 $k \le r$에서 $\alpha_k = \beta_k$, $r < k \le n$에서 $\alpha_k = 0$으로 정한 길이 $n$인 스칼라의 열 $\alpha$에 대하여, 환의 유한 합의 (4)와 (3), 벡터공간 항목의 (4)의 (v)에 의해
$$
\begin{aligned}
\sum_{k=1}^{n} \alpha_k v_k &= \sum_{k=1}^{r} \beta_k v_k + \sum_{k=r+1}^{n} \alpha_k v_k \\
&= 0_V + 0_V \\
&= 0_V
\end{aligned}
$$
이다. $v$가 일차독립이므로 모든 $\alpha_k$가 $0$이고, 특히 $k \le r$에서 $\beta_k = \alpha_k = 0$이다.

**4의 증명.** (i) 덧붙인 열을 $u_1, \dots, u_{n+1}$이라 하자. 길이 $n + 1$인 스칼라의 열 $\gamma$에 대하여, 환의 유한 합의 (2)와 (3)에 의해(덧붙인 열의 처음 $n$개는 $v$이다)
$$
\sum_{k=1}^{n+1} \gamma_k u_k = \sum_{k=1}^{n} \gamma_k v_k + \gamma_{n+1} x
$$
이다. 이것을 (나)라 한다.

$x \in \operatorname{span}_F(v_1, \dots, v_n)$이면 $x = \sum_{k=1}^{n} \alpha_k v_k$인 스칼라의 열 $\alpha$가 있다. $k \le n$에서 $\gamma_k = \alpha_k$, $\gamma_{n+1} = -1$로 정하면 (나)와 벡터공간 항목의 (1)의 (iii)에 의해 $\sum_{k} \gamma_k u_k = x + (-1)x = x - x = 0_V$이고, $\gamma_{n+1} = -1 \ne 0$이다($-1 = 0$이면 [[group-basic-properties|군의 기본 성질]]의 (5), (4)에 의해 $1 = -(-1) = -0 = 0$이 된다). 따라서 덧붙인 열은 일차종속이다. 이것은 "덧붙인 열이 일차독립이면 $x \notin \operatorname{span}_F(v_1, \dots, v_n)$"의 [[proof-by-contrapositive|대우]]이다.

거꾸로 $x \notin \operatorname{span}_F(v_1, \dots, v_n)$이고 $\sum_{k} \gamma_k u_k = 0_V$라 하자. $\gamma_{n+1} \ne 0$이라고 가정하자. (나)에서 $\gamma_{n+1} x = -\sum_{k=1}^{n} \gamma_k v_k$이고, $c = \gamma_{n+1}^{-1}$로 두면 스칼라배의 조건 (iv), (i)과 벡터공간 항목의 (1)의 (iii), (4)의 (iv)에 의해
$$
\begin{aligned}
x &= (c\gamma_{n+1})x \\
&= c(\gamma_{n+1} x) \\
&= c\Bigl(-\sum_{k=1}^{n} \gamma_k v_k\Bigr) \\
&= (-c)\sum_{k=1}^{n} \gamma_k v_k \\
&= \sum_{k=1}^{n} ((-c)\gamma_k) v_k
\end{aligned}
$$
이므로 $x$가 생성에 속하게 되어 가정과 어긋난다([[proof-by-contradiction|귀류법]]). 따라서 $\gamma_{n+1} = 0$이고, (나)와 벡터공간 항목의 (1)의 (i)에 의해 $\sum_{k=1}^{n} \gamma_k v_k = 0_V$이다. $v$가 일차독립이므로 $k \le n$에서 $\gamma_k = 0$이다. 모든 자리가 $0$이므로 덧붙인 열은 일차독립이다. $n = 0$이면 생성은 $\{0_V\}$이므로 조건은 $x \ne 0_V$이다.

(ii) (2)의 (ii)에 의해 $\operatorname{span}_F(v_1, \dots, v_n) \subseteq W$이고 두 집합이 같지 않으므로, $W$의 원소 $x$로서 생성에 속하지 않는 것이 있다. (i)에 의해 덧붙인 열은 일차독립이다.

**5의 증명.** (1)의 (ii)에 의해 스칼라의 열 $\alpha$마다 벡터공간 $W$에서 계산한 $\sum_{k} \alpha_k w_k$는 $V$에서 계산한 것과 같다. 따라서 두 생성은 같은 원소들의 집합이다. 또 벡터공간 $W$의 영벡터는 $0_V$이므로, 일차독립의 조건 "$\sum_{k} \alpha_k w_k = 0_V$이면 모든 $\alpha_k = 0$"은 두 쪽에서 같은 조건이다.

**6의 증명.** 벡터공간 항목의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본 $V$의 영벡터, 덧셈, 스칼라배는 [[vector-space|벡터공간]]의 것과 같다. 따라서 이 항목의 부분공간의 조건 (i)–(iii)은 [[subspace|부분공간]]의 (S1)–(S3)과 글자 그대로 같은 조건이다. 벡터공간 항목의 (5)에 의해 길이 $n$인 실수의 열 $\alpha$마다 $\sum_{k=1}^{n} \alpha_k v_k = \alpha_1 v_1 + \cdots + \alpha_n v_n$이다. 따라서 [[linear-combination-and-span|일차결합과 생성]]의 $\operatorname{span}(v_1, \dots, v_n)$과 이 항목의 $\operatorname{span}_{\mathbb{R}}(v_1, \dots, v_n)$은 같은 원소들의 집합이고, [[linear-independence|일차독립]]의 조건과 이 항목의 일차독립의 조건은 같은 조건이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3^2$의 두 열]
$F = \mathbb{Z}_3$([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3))이고 $V = \mathbb{Z}_3^2$([[vector-space-over-a-field|체 위의 벡터공간]]의 (3))이라 하자. $v_1 = ([1], [1])$, $v_2 = ([1], [2])$로 두면, 스칼라 $\alpha$, $\beta$에 대하여
$$
\alpha v_1 + \beta v_2 = (\alpha + \beta,\ \alpha + [2]\beta)
$$
이다. 이것이 영벡터이면 둘째 성분에서 첫째 성분을 빼서 $[1]\beta = [0]$, 곧 $\beta = [0]$이고 첫째 성분에서 $\alpha = [0]$이다. 따라서 $v_1, v_2$는 일차독립이다. 또 $(a, b) \in \mathbb{Z}_3^2$이면 $\beta = b - a$, $\alpha = a - \beta$로 둘 때 $\alpha + \beta = a$이고 $\alpha + [2]\beta = a + \beta = b$이므로 $\alpha v_1 + \beta v_2 = (a, b)$이다. 따라서 이 열은 $\mathbb{Z}_3^2$를 생성한다. 예를 들어 $(a, b) = ([0], [1])$이면 $\beta = [1]$, $\alpha = [2]$이고 $[2]v_1 + [1]v_2 = ([2], [2]) + ([1], [2]) = ([3], [4]) = ([0], [1])$이다.
:::

:::example[같은 모양의 열이 체에 따라 종속일 수 있는 예]
$\mathbb{Z}_3^2$에서 $u_1 = ([1], [2])$, $u_2 = ([2], [1])$로 두면
$$
\begin{aligned}
[2]u_1 + [2]u_2 &= ([2], [4]) + ([4], [2]) \\
&= ([6], [6]) \\
&= ([0], [0])
\end{aligned}
$$
이고 계수 $[2]$는 $[0]$이 아니므로 $u_1, u_2$는 $\mathbb{Z}_3$ 위에서 일차종속이다. 같은 모양의 $\mathbb{R}^2$의 열 $(1, 2), (2, 1)$은 $\mathbb{R}$ 위에서 일차독립이다. 실수 $\alpha$, $\beta$에 대하여 $\alpha(1, 2) + \beta(2, 1) = (\alpha + 2\beta, 2\alpha + \beta)$가 영벡터이면, 둘째 성분에서 첫째 성분의 $2$배를 빼서 $-3\beta = 0$, 곧 $\beta = 0$이고, 그러면 $\alpha = 0$이다.
:::

:::example[$\mathbb{Z}_p$ 위에서 덧셈군의 부분군이 부분공간인 예]
$p$가 소수이면 $\mathbb{Z}_p$는 체이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). $V$가 $\mathbb{Z}_p$ 위의 벡터공간이고 $W$가 군 $(V, +)$의 부분군이라 하자. 그러면 $W$는 부분공간이다. [[subgroup|부분군]]의 (1)에 의해 $0_V \in W$이고 부분군은 덧셈에 닫혀 있다. 스칼라 $\alpha \in \mathbb{Z}_p$는 [[cyclic-subgroup|순환 부분군]]의 (5)의 $\langle [1] \rangle = \mathbb{Z}_p$에 의해 어떤 정수 $q$로 $\alpha = q \cdot [1]$이다. $w \in W$이면 [[vector-space-over-a-field|체 위의 벡터공간]]의 (1)의 (v)에 의해 $\alpha w = (q \cdot [1])w = q \cdot w$이고, 순환 부분군의 (2), (5)에 의해 $q \cdot w \in \langle w \rangle \subseteq W$이다. 따라서 (iii)도 성립한다. 예컨대 $\mathbb{Z}_3^2$의 부분집합 $\{([0], [0]), ([1], [1]), ([2], [2])\}$는 덧셈에 닫혀 있고($([1], [1]) + ([1], [1]) = ([2], [2])$, $([1], [1]) + ([2], [2]) = ([0], [0])$, $([2], [2]) + ([2], [2]) = ([1], [1])$) 영벡터를 포함하며 $([1], [1])$과 $([2], [2])$가 서로의 덧셈 역원이므로 [[subgroup-criteria|부분군 판정법]]의 (3)에 의해 부분군이고, 따라서 $\mathbb{Z}_3$ 위의 부분공간이다.
:::

:::counterexample[덧셈에 닫혀 있지만 부분공간이 아닌 예]
$\mathbb{R}$을 [[vector-space-over-a-field|체 위의 벡터공간]]의 (3)의 (iv)에 의해 $\mathbb{R}$ 위의 벡터공간으로 보고, $W = \mathbb{Z}$라 하자. $0 \in \mathbb{Z}$이고 정수끼리의 합은 정수이므로([[even-and-odd|짝수와 홀수]]에서 받아들인 사실) (i), (ii)는 성립한다. 그러나 스칼라 $2^{-1}$과 $1 \in \mathbb{Z}$에 대하여 $2^{-1} \cdot 1 = 2^{-1}$은 정수가 아니다. 정수 $k$가 $k = 2^{-1}$이면 [[real-number-arithmetic|(K7)]]에 의해 $2k = 2 \cdot 2^{-1} = 1$이 되어 $1$이 짝수인데, $1 = 2 \cdot 0 + 1$은 홀수이고 짝수이면서 홀수인 정수는 없다(짝수와 홀수에서 받아들인 사실). 따라서 (iii)이 깨지고 $\mathbb{Z}$는 부분공간이 아니다. 앞의 예시와 달리 $\mathbb{R}$ 위에서는 덧셈군의 부분군이 부분공간이 아닐 수 있다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5$를 $\mathbb{Z}_5$ 위의 벡터공간으로 볼 때 길이 $2$인 열 $[2], [3]$은 일차독립인가?]
아니다. 계수 $[3], [3]$에 대하여 $[3][2] + [3][3] = [6] + [9] = [15] = [0]$이고 $[3] \ne [0]$이므로 일차종속이다. 스칼라배는 $\mathbb{Z}_5$의 곱셈이다([[vector-space-over-a-field|체 위의 벡터공간]]의 (3)의 (iv)).
:::

:::check[벡터의 열 $v_1, v_2$에 대하여 $\operatorname{span}_F(v_1, v_2)$와 $\operatorname{span}_F(v_1, v_2, v_1 + v_2)$는 같은가?]
같다. 계수 $1, 1$에 의해 $v_1 + v_2$는 $v_1, v_2$의 일차결합이므로 $v_1 + v_2 \in \operatorname{span}_F(v_1, v_2)$이고, (2)의 (iv)에 의해 두 생성은 같다. 열 $v_1, v_2, v_1 + v_2$ 자신은 언제나 일차종속이다. 계수 $1, 1, -1$로 $v_1 + v_2 - (v_1 + v_2) = 0_V$이고 $-1 \ne 0$이다.
:::
