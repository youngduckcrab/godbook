---
title: 체 위의 선형사상과 핵
title_en: Linear Maps and Kernels over a Field
aliases: [F-선형사상, 체 위의 선형사상, 체 위의 동형사상, 좌표 동형사상, F-linear map, linear map over a field]
kind: theorem
field: linear-algebra
msc: ["15A03", "15A04"]
level: undergrad
summary: 체 F 위의 선형사상, 핵과 상, 동형사상을 정의하고, 핵과 상이 부분공간이라는 것, 단사인 것은 핵이 영공간일 때라는 것, 정의역의 차원이 공역의 차원보다 크면 핵에 영이 아닌 벡터가 있다는 것(미지수가 식보다 많은 동차 연립일차방정식의 해), 차원이 같은 두 공간 사이에서는 단사와 전사가 같다는 것, n차원 공간이 좌표 동형사상으로 Fⁿ 과 동형이라는 것을 보인다.
requires: [set, function, function-composition, inverse-function, bijective-iff-inverse-is-a-function, injective-surjective-bijective, recursion-theorem, finite-set, prime-number, well-ordering-principle, proof-by-contradiction, group, group-homomorphism, homomorphism-kernel-and-image, finite-product-in-a-group, ring, ring-basic-properties, field, finite-integral-domain-is-a-field, integers-modulo-n, finite-sums-in-a-ring, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, basis-extension-over-a-field, vector-space, linear-map]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "20.5절 Exercises, 연습문제 15 (Linear Transformations, p.258), 16 (p.258); 부록 B 의 20.5.15 힌트 (p.332); 20.3절 Proposition 20.11 앞의 문장 (p.255); 23.2절 Lemma 23.18 의 증명 (p.298–299)"
    checked: original
    note: "출처는 선형사상을 연습문제 15 에서 '선형변환(linear transformation)' 으로 정의하고(p.258) 핵 ker(T) 와 상 R(V) 가 부분공간이라는 것((a)(b)), T 가 단사인 것은 정확히 ker(T) = {0} 일 때라는 것((c)), 차원 정리((d)), dim V = dim W 이면 단사와 전사가 같다는 것((e))을 묻는다. 힌트(p.332)는 (a)와 (c)의 계산을 준다. 이 항목의 (2)는 (a)(b)(c), (6)은 (e)이고, (2)의 계산은 힌트의 계산과 같다. 차원 정리 (d)는 이 항목에 싣지 않았다. (6)은 차원 정리를 거치지 않고 기저의 상이 기저라는 것으로 증명한다. 연습문제 16 은 동형사상이 기저를 기저로 보낸다는 것과 'n차원 벡터공간은 Fⁿ 과 동형' 을 묻는다. 이 항목의 (4)와 (7)이다. 출처는 체 위의 선형사상을 연습문제 15 에서 '선형변환(linear transformation)' 으로, 동형사상을 연습문제 16 에서 'vector space isomorphism' 으로 부른다. 실수의 경우는 1.2절 Example 1.13(p.9)과 12.1절(p.141)에서 'linear maps or linear transformations', 'A linear transformation or linear map' 이라고 두 이름을 함께 쓴다. 이 항목은 선형대수 강의의 낱말 '선형사상' 을 쓴다. (5)는 출처 연습문제 15 (d)(차원 정리, 상의 차원이 m − k)를 쓰면 바로 나온다(핵의 차원이 dim V − dim Ran T ≥ dim V − dim W > 0). 이 항목은 차원 정리를 싣지 않고, (5)를 기저의 상이 일차독립이라는 것((3))과 차원 항목의 길이 비교로 증명한다. (8)의 첫 문장은 실수에서 출처 12.1절(p.141)의 'm × n 실행렬은 ℝⁿ 에서 ℝᵐ 으로의 선형변환을 나타낸다' 와 1.2절 Example 1.13 의 마지막 문장(p.9)과 같은 내용이다. 출처는 Proposition 20.11 앞에서 '미지수가 식보다 많은 동차 연립일차방정식은 자명하지 않은 해를 갖는다' 를 사실로 언급하고(p.255), Lemma 23.18(아르틴 보조정리)의 증명에서 'From linear algebra we know that this system has a nontrivial solution' 이라고 쓴다(p.298). (8)의 둘째 문장이 이 사실이다. 출처 22.2절 Example 22.15(p.283)는 ℤ_2ⁿ 을 ℤ_2 위의 벡터공간으로 보고 부호의 사상 ϕ : ℤ_2³ → ℤ_2⁶ 이 선형변환이라고 적은 뒤 그 핵을 계산한다. 예시 '$\\mathbb{Z}_5^3$에서 $\\mathbb{Z}_5^2$로의 사상의 핵' 은 유한체 위의 식으로 정한 선형사상의 핵을 계산한다는 점에서 이 예와 같은 종류이다. 그 예는 ker ϕ = {(000)} 이어서 ϕ : ℤ_2³ → ℤ_2⁶ 이 단사라고 적는데(p.283), 반례 '차원이 다른 두 공간 사이의 단사이고 전사가 아닌 선형사상의 예' 와 같이 차원이 작은 공간에서 큰 공간으로 가는 단사인 선형사상이다. 예시 '$\\mathbb{Z}_7^2$의 좌표 동형사상' 은 n차원 공간이 Fⁿ 과 동형이라는 연습문제 16(p.258)을 n = 2 에서 본 것이고, 출처 22.2절(p.282–284)이 차수가 n 보다 작은 다항식과 n-튜플을 대응시키고 'ℤ_2ⁿ and R_n are isomorphic as vector spaces' 라고 적는 것(p.284, 22.4절 연습문제 27 p.290)도 기저에 관한 좌표로 정한 동형사상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]이고 $V$, $W$가 $F$ 위의 [[vector-space-over-a-field|벡터공간]]이라 하자. 영벡터 $0_V$, $0_W$, 벡터의 열, 합의 기호 $\sum$은 [[vector-space-over-a-field|체 위의 벡터공간]]의 것이고, 부분공간, 생성 $\operatorname{span}_F$, 생성한다, 일차독립은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 것이며, 기저는 [[basis-over-a-field|체 위의 기저와 좌표]], 유한차원과 $\dim_F$는 [[dimension-over-a-field|체 위의 차원]]의 것이다. 단사, 전사, 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]], 역함수는 [[inverse-function|역관계와 역함수]]의 것이다.

**선형사상.** [[function|함수]] $T : V \to W$가 ($F$ 위의) **선형사상**(linear map), 줄여서 **$F$-선형사상**인 것은 정확히 모든 $u, v \in V$와 모든 $\alpha \in F$에서
$$
\begin{aligned}
T(u + v) &= Tu + Tv, \\
T(\alpha v) &= \alpha\,Tv
\end{aligned}
$$
일 때이다. $Tv$는 $T(v)$를 뜻하고, 각 등식의 왼쪽 연산은 $V$의 것, 오른쪽 연산은 $W$의 것이다. 길이 $n$인 $V$의 열 $v_1, \dots, v_n$에 대하여 [[function-composition|합성]] $T \circ v$는 $k$번째 항이 $Tv_k$인 $W$의 열이고, $Tv_1, \dots, Tv_n$으로 쓴다. $T$의 **핵**(kernel)과 **상**(range)을
$$
\begin{aligned}
\operatorname{Ker} T &= \{v \in V : Tv = 0_W\}, \\
\operatorname{Ran} T &= \{Tv : v \in V\}
\end{aligned}
$$
로 정한다. 선형사상 $T : V \to W$가 **동형사상**(isomorphism)인 것은 정확히 $T : V \to W$가 전단사일 때이고, $V$에서 $W$로의 동형사상이 있을 때 $V$와 $W$는 ($F$ 위에서) **동형**(isomorphic)이라 하고 $V \cong W$로 쓴다.

다음이 성립한다. 아래에서 $T : V \to W$는 선형사상이고 $v_1, \dots, v_n$은 길이 $n \ge 0$인 $V$의 열이다.

1. (기본 성질) $T$는 군 $(V, +)$에서 군 $(W, +)$로의 [[group-homomorphism|준동형]]이다. $T0_V = 0_W$이고, $T(-v) = -Tv$, $T(u - v) = Tu - Tv$이다. 스칼라의 열 $\alpha_1, \dots, \alpha_n$에 대하여 $T\bigl(\sum_{k=1}^{n} \alpha_k v_k\bigr) = \sum_{k=1}^{n} \alpha_k\,Tv_k$이다. 항등함수 $i_V$는 선형사상이고, $X$가 $F$ 위의 벡터공간이고 $S : W \to X$가 선형사상이면 합성 $S \circ T : V \to X$도 선형사상이다.
2. (핵과 상) $\operatorname{Ker} T$는 $V$의 부분공간이고 $\operatorname{Ran} T$는 $W$의 부분공간이다. $T$가 단사인 것은 정확히 $\operatorname{Ker} T = \{0_V\}$일 때이고, $T : V \to W$가 전사인 것은 정확히 $\operatorname{Ran} T = W$일 때이다. 또 $\{Tx : x \in \operatorname{span}_F(v_1, \dots, v_n)\} = \operatorname{span}_F(Tv_1, \dots, Tv_n)$이고, 특히 $v_1, \dots, v_n$이 $V$를 생성하면 $\operatorname{Ran} T = \operatorname{span}_F(Tv_1, \dots, Tv_n)$이다.
3. (일차독립인 열의 상) $T$가 단사이고 $v_1, \dots, v_n$이 일차독립이면 $Tv_1, \dots, Tv_n$도 일차독립이다.
4. (동형사상) $T$가 동형사상이면 역함수 $T^{-1} : W \to V$는 선형사상이고 동형사상이다. $T$가 동형사상이고 $v_1, \dots, v_n$이 $V$의 기저이면 $Tv_1, \dots, Tv_n$은 $W$의 기저이다. 따라서 $V \cong W$이고 $V$가 유한차원이면 $W$도 유한차원이고 $\dim_F W = \dim_F V$이다.
5. (핵에 영이 아닌 벡터가 있을 조건) $V$와 $W$가 유한차원이고 $\dim_F V > \dim_F W$이면 $\operatorname{Ker} T \ne \{0_V\}$이다. 곧 $Tv = 0_W$이고 $v \ne 0_V$인 $v \in V$가 있고, $T$는 단사가 아니다.
6. (차원이 같은 두 공간) $V$와 $W$가 유한차원이고 $\dim_F V = \dim_F W$이면, $T$가 단사인 것, $T : V \to W$가 전사인 것, $T$가 동형사상인 것은 서로 같다. 곧 셋 가운데 하나가 성립하면 나머지 둘도 성립한다.
7. (좌표 동형사상) $n$이 자연수이고 $b_1, \dots, b_n$이 $V$의 기저라 하자. 각 $x = (x_1, \dots, x_n) \in F^n$에서 값이 $\sum_{k=1}^{n} x_k b_k$인 함수 $C : F^n \to V$는 동형사상이고, $F^n$의 표준기저 $e_1, \dots, e_n$([[basis-over-a-field|체 위의 기저와 좌표]]의 (4))에 대하여 $Ce_k = b_k$이다. $C^{-1}(v)$는 $v$의 이 기저에 관한 좌표이다. 따라서 $V$가 $F$ 위에서 $n$차원이고 $n \ge 1$이면 $F^n \cong V$이고 $V \cong F^n$이다.
8. (식으로 정한 사상) $m$, $n$이 자연수이고, $k \in \{1, \dots, n\}$과 $j \in \{1, \dots, m\}$의 쌍마다 스칼라 $a_{k,j}$가 정해져 있다고 하자. 각 $x \in F^m$에서 $k$번째 값이 $\sum_{j=1}^{m} a_{k,j} x_j$인 $F^n$의 원소를 값으로 하는 함수 $A : F^m \to F^n$은 선형사상이다. $m > n$이면 $x \ne 0$이고 모든 $k \in \{1, \dots, n\}$에서 $\sum_{j=1}^{m} a_{k,j} x_j = 0$인 $x \in F^m$이 있다.
9. (실수의 경우) $V$, $W$가 [[vector-space|벡터공간]]이고 [[vector-space-over-a-field|체 위의 벡터공간]]의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본다고 하자. 함수 $T : V \to W$가 이 항목의 뜻에서 $\mathbb{R}$-선형사상인 것은 정확히 [[linear-map|선형사상]]의 뜻에서 선형사상일 때이다.
:::

:::english
Let $F$ be a field and $V$, $W$ vector spaces over $F$. The zero vectors $0_V$, $0_W$, sequences of vectors and the summation sign $\sum$ are those of the entry on vector spaces over a field; subspaces, the span $\operatorname{span}_F$, "spans" and linear independence are those of the entry on span and linear independence over a field; bases are those of the entry on bases and coordinates over a field, and finite dimension and $\dim_F$ those of the entry on dimension over a field. Injective, surjective and bijective are those of the entry on injections, surjections and bijections, and inverse functions those of the entry on inverse relations and inverse functions.

**Linear maps.** A function $T : V \to W$ is a **linear map** (over $F$), or an **$F$-linear map** for short, exactly when for all $u, v \in V$ and all $\alpha \in F$
$$
\begin{aligned}
T(u + v) &= Tu + Tv, \\
T(\alpha v) &= \alpha\,Tv.
\end{aligned}
$$
$Tv$ means $T(v)$, and in each equation the operations on the left are those of $V$ and those on the right are those of $W$. For a sequence $v_1, \dots, v_n$ of length $n$ in $V$, the composition $T \circ v$ is the sequence in $W$ whose $k$-th term is $Tv_k$, written $Tv_1, \dots, Tv_n$. The **kernel** and the **range** of $T$ are defined by
$$
\begin{aligned}
\operatorname{Ker} T &= \{v \in V : Tv = 0_W\}, \\
\operatorname{Ran} T &= \{Tv : v \in V\}.
\end{aligned}
$$
A linear map $T : V \to W$ is an **isomorphism** exactly when $T : V \to W$ is bijective; when there is an isomorphism from $V$ to $W$, $V$ and $W$ are called **isomorphic** (over $F$), written $V \cong W$.

The following hold, where $T : V \to W$ is a linear map and $v_1, \dots, v_n$ is a sequence in $V$ of length $n \ge 0$.

1. (Basic properties) $T$ is a homomorphism from the group $(V, +)$ to the group $(W, +)$. $T0_V = 0_W$, $T(-v) = -Tv$ and $T(u - v) = Tu - Tv$. For a sequence of scalars $\alpha_1, \dots, \alpha_n$, $T\bigl(\sum_{k=1}^{n} \alpha_k v_k\bigr) = \sum_{k=1}^{n} \alpha_k\,Tv_k$. The identity function $i_V$ is a linear map, and if $X$ is a vector space over $F$ and $S : W \to X$ is a linear map, then the composition $S \circ T : V \to X$ is a linear map.
2. (Kernel and range) $\operatorname{Ker} T$ is a subspace of $V$ and $\operatorname{Ran} T$ is a subspace of $W$. $T$ is injective exactly when $\operatorname{Ker} T = \{0_V\}$, and $T : V \to W$ is surjective exactly when $\operatorname{Ran} T = W$. Moreover $\{Tx : x \in \operatorname{span}_F(v_1, \dots, v_n)\} = \operatorname{span}_F(Tv_1, \dots, Tv_n)$; in particular, if $v_1, \dots, v_n$ spans $V$, then $\operatorname{Ran} T = \operatorname{span}_F(Tv_1, \dots, Tv_n)$.
3. (Images of independent sequences) If $T$ is injective and $v_1, \dots, v_n$ is linearly independent, then $Tv_1, \dots, Tv_n$ is linearly independent.
4. (Isomorphisms) If $T$ is an isomorphism, then the inverse function $T^{-1} : W \to V$ is a linear map and an isomorphism. If $T$ is an isomorphism and $v_1, \dots, v_n$ is a basis of $V$, then $Tv_1, \dots, Tv_n$ is a basis of $W$. Hence if $V \cong W$ and $V$ is finite-dimensional, then $W$ is finite-dimensional and $\dim_F W = \dim_F V$.
5. (When the kernel contains a nonzero vector) If $V$ and $W$ are finite-dimensional and $\dim_F V > \dim_F W$, then $\operatorname{Ker} T \ne \{0_V\}$; that is, there is $v \in V$ with $Tv = 0_W$ and $v \ne 0_V$, and $T$ is not injective.
6. (Two spaces of the same dimension) If $V$ and $W$ are finite-dimensional and $\dim_F V = \dim_F W$, then "$T$ is injective", "$T : V \to W$ is surjective" and "$T$ is an isomorphism" are equivalent; that is, if one of the three holds, so do the other two.
7. (The coordinate isomorphism) Let $n$ be a natural number and $b_1, \dots, b_n$ a basis of $V$. The function $C : F^n \to V$ whose value at each $x = (x_1, \dots, x_n) \in F^n$ is $\sum_{k=1}^{n} x_k b_k$ is an isomorphism, and $Ce_k = b_k$ for the standard basis $e_1, \dots, e_n$ of $F^n$ ((4) of the entry on bases and coordinates over a field). $C^{-1}(v)$ is the sequence of coordinates of $v$ with respect to this basis. Hence if $V$ is $n$-dimensional over $F$ with $n \ge 1$, then $F^n \cong V$ and $V \cong F^n$.
8. (Maps given by formulas) Let $m$, $n$ be natural numbers, and let a scalar $a_{k,j}$ be given for each pair of $k \in \{1, \dots, n\}$ and $j \in \{1, \dots, m\}$. The function $A : F^m \to F^n$ whose value at each $x \in F^m$ is the element of $F^n$ with $k$-th value $\sum_{j=1}^{m} a_{k,j} x_j$ is a linear map. If $m > n$, there is $x \in F^m$ with $x \ne 0$ and $\sum_{j=1}^{m} a_{k,j} x_j = 0$ for every $k \in \{1, \dots, n\}$.
9. (The real case) Let $V$, $W$ be vector spaces in the sense of the linear algebra course, regarded as vector spaces over $\mathbb{R}$ by (2) of the entry on vector spaces over a field. A function $T : V \to W$ is an $\mathbb{R}$-linear map in the sense of this entry exactly when it is a linear map in the sense of the entry on linear maps.
:::

## 직관

선형사상은 벡터공간의 두 연산, 덧셈과 스칼라배를 그대로 옮기는 함수입니다. 덧셈만 보면 덧셈군 사이의 준동형이므로, 핵이 영벡터 하나뿐인 것이 단사와 같다는 것은 군에서 이미 아는 사실을 다시 읽은 것입니다((2)).

(5)는 큰 공간을 작은 공간으로 선형으로 보내면 어떤 영이 아닌 벡터가 반드시 영벡터로 간다는 것입니다. 비유하자면 $3$차원의 물건을 $2$차원의 그림자로 비추면 그림자에서 사라지는 방향이 있다는 것입니다. (8)은 이것을 식으로 쓴 것으로, 미지수가 $m$개이고 식이 $n$개인 동차 연립일차방정식은 $m > n$이면 영이 아닌 해를 갖습니다. 계수가 어느 체의 원소이든 성립합니다.

(7)은 기저를 하나 정하면 $V$의 벡터를 좌표의 열로, 곧 $F^n$의 원소로 바꿔 생각해도 된다는 것입니다. 이 동형사상은 기저에 따라 달라질 수 있습니다.

## 증명

:::idea
선형사상이 덧셈군의 준동형이라는 것에서 핵·상·단사의 성질을 얻는다. (5)와 (6)은 기저의 상의 길이를 차원과 비교하는 것이고, (8)은 식으로 정한 사상에 (5)를 쓴 것이다.
:::

:::hint
(5)에서 $T$가 단사라고 가정하면 $V$의 기저의 상은 $W$의 일차독립인 열이 된다. 그 길이를 $\dim_F W$와 비교한다.
:::

:::hint
(6)에서 $T$가 전사이면 기저의 상은 $W$를 생성하는 길이 $\dim_F W$인 열이다.
:::

:::proof
**쓰는 사실.** [[vector-space-over-a-field|체 위의 벡터공간]]을 "벡터공간 항목", [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]을 "생성 항목", [[basis-over-a-field|체 위의 기저와 좌표]]를 "기저 항목", [[dimension-over-a-field|체 위의 차원]]을 "차원 항목", [[basis-extension-over-a-field|기저로 늘리기와 줄이기]]를 "늘리기 항목"으로 줄여 부르고 그 번호로 인용한다. 합의 성질은 [[finite-sums-in-a-ring|환의 유한 합]]의 번호로, 군 준동형의 성질은 [[group-homomorphism|군 준동형]]과 [[homomorphism-kernel-and-image|준동형의 핵과 상]]을 덧셈 표기로 읽어 인용한다. 함수와 열은 값으로 정하고([[recursion-theorem|재귀 정리]]의 (1)), 정의역이 같은 두 함수는 모든 점에서 값이 같을 때 같다([[function|함수]]).

**1의 증명.** 첫 조건은 덧셈 표기의 준동형의 조건이다(군 준동형의 (6)). 군 준동형의 (1), (2)에 의해 $T0_V = 0_W$이고 $T(-v) = -Tv$이며, $T(u - v) = T(u + (-v)) = Tu + T(-v) = Tu - Tv$이다. 환의 유한 합의 (7)과 (3), 둘째 조건에 의해 $T\bigl(\sum_{k} \alpha_k v_k\bigr) = \sum_{k} T(\alpha_k v_k) = \sum_{k} \alpha_k Tv_k$이다. $i_V$는 두 조건의 양쪽이 같으므로 선형사상이다. 합성은 $(S \circ T)(u + v) = S(Tu + Tv) = S(Tu) + S(Tv)$이고 $(S \circ T)(\alpha v) = S(\alpha Tv) = \alpha S(Tv)$이므로 선형사상이다.

**2의 증명.** 준동형의 핵과 상의 (1), (4)에 의해 $\operatorname{Ker} T$와 $\operatorname{Ran} T$는 각각 군 $(V, +)$, $(W, +)$의 부분군이므로 공집합이 아니고 덧셈에 닫혀 있다. $v \in \operatorname{Ker} T$이면 $T(\alpha v) = \alpha Tv = \alpha 0_W = 0_W$(벡터공간 항목의 (1)의 (i))이므로 $\alpha v \in \operatorname{Ker} T$이고, $w = Tv \in \operatorname{Ran} T$이면 $\alpha w = T(\alpha v) \in \operatorname{Ran} T$이다. 생성 항목의 (1)의 (i)에 의해 둘 다 부분공간이다. 단사의 판정은 준동형의 핵과 상의 (3), 전사의 판정은 같은 항목의 (4)이다. 마지막 문장: $x = \sum_{k} \alpha_k v_k$이면 (1)에 의해 $Tx = \sum_{k} \alpha_k Tv_k \in \operatorname{span}_F(Tv_1, \dots, Tv_n)$이고, 거꾸로 $\sum_{k} \alpha_k Tv_k = T\bigl(\sum_{k} \alpha_k v_k\bigr)$이므로 두 집합은 같다. $v$가 $V$를 생성하면 왼쪽 집합은 $\{Tx : x \in V\} = \operatorname{Ran} T$이다.

**3의 증명.** $\sum_{k} \alpha_k Tv_k = 0_W$이면 (1)에 의해 $T\bigl(\sum_{k} \alpha_k v_k\bigr) = 0_W = T0_V$이고, $T$가 단사이므로 $\sum_{k} \alpha_k v_k = 0_V$이다. $v$가 일차독립이므로 모든 $\alpha_k = 0$이다.

**4의 증명.** $T : V \to W$가 전단사이므로 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역함수 $T^{-1} : W \to V$가 있고, [[inverse-function|역관계와 역함수]]에 의해 $T \circ T^{-1} = i_W$, $T^{-1} \circ T = i_V$이다. $u, w \in W$, $\alpha \in F$에 대하여 (1)에 의해
$$
\begin{aligned}
&T\bigl(T^{-1}u + T^{-1}w\bigr) \\
&= T(T^{-1}u) + T(T^{-1}w) \\
&= u + w \\
&= T\bigl(T^{-1}(u + w)\bigr)
\end{aligned}
$$
이고, $T$가 단사이므로 $T^{-1}u + T^{-1}w = T^{-1}(u + w)$이다. 같은 방식으로 $T(\alpha T^{-1}w) = \alpha w = T(T^{-1}(\alpha w))$에서 $\alpha T^{-1}w = T^{-1}(\alpha w)$이다. 따라서 $T^{-1}$은 선형사상이다. $T^{-1}$의 역관계는 $T$이고 $T$는 함수이므로 전단사일 조건에 의해 $T^{-1} : W \to V$는 전단사, 곧 동형사상이다. 둘째 문장: $v$가 기저이면 (3)에 의해 $Tv$는 일차독립이고, (2)에 의해 $\operatorname{Ran} T = \operatorname{span}_F(Tv_1, \dots, Tv_n)$이며 $T$가 전사이므로 이것이 $W$이다. 따라서 $Tv$는 $W$의 기저이다. 셋째 문장: $V$가 유한차원이면 차원 항목의 (4)에 의해 길이 $\dim_F V$인 기저가 있고, 그 상은 같은 길이의 $W$의 기저이므로 $W$는 유한차원이고 $\dim_F W = \dim_F V$이다.

**5의 증명.** $d = \dim_F V$, $d' = \dim_F W$라 하고 길이 $d$인 $V$의 기저 $b$를 잡는다. $\operatorname{Ker} T = \{0_V\}$라고 가정하면 (2)에 의해 $T$는 단사이고, (3)에 의해 $Tb_1, \dots, Tb_d$는 길이 $d$인 $W$의 일차독립인 열이다. 차원 항목의 (5)의 (i)에 의해 $d \le d'$인데 이것은 $d > d'$와 어긋난다((L1)). 따라서 $\operatorname{Ker} T \ne \{0_V\}$이다. $0_V \in \operatorname{Ker} T$이므로 $\operatorname{Ker} T$에는 $0_V$와 다른 원소 $v$가 있다. $Tv = 0_W = T0_V$이고 $v \ne 0_V$이므로 $T$는 단사가 아니다.

**6의 증명.** $d = \dim_F V = \dim_F W$이고 $b$가 길이 $d$인 $V$의 기저라 하자. $T$가 단사이면 (3)에 의해 $Tb$는 길이 $d$인 $W$의 일차독립인 열이고, 늘리기 항목의 (3)에 의해 $W$의 기저이다. (2)에 의해 $\operatorname{Ran} T = \operatorname{span}_F(Tb_1, \dots, Tb_d) = W$이므로 $T$는 전사이다. 거꾸로 $T$가 전사이면 (2)에 의해 $Tb$는 $W$를 생성하는 길이 $d$인 열이고, 늘리기 항목의 (3)에 의해 $W$의 기저, 특히 일차독립이다. $v \in \operatorname{Ker} T$이고 $v = \sum_{k} \alpha_k b_k$이면 (1)에 의해 $\sum_{k} \alpha_k Tb_k = Tv = 0_W$이므로 모든 $\alpha_k = 0$이고, 벡터공간 항목의 (4)의 (v)에 의해 $v = 0_V$이다. (2)에 의해 $T$는 단사이다. 단사이고 전사이면 전단사, 곧 동형사상이고, 동형사상이면 단사이고 전사이다.

**7의 증명.** $x, y \in F^n$과 $\gamma \in F$에 대하여 벡터공간 항목의 (3)의 정의와 (4)의 (iii), (iv)에 의해
$$
\begin{aligned}
C(x + y) &= \sum_{k=1}^{n} (x_k + y_k) b_k \\
&= Cx + Cy, \\
C(\gamma x) &= \sum_{k=1}^{n} (\gamma x_k) b_k \\
&= \gamma\,Cx
\end{aligned}
$$
이므로 $C$는 선형사상이다. 기저 항목의 (1)에 의해 각 $v \in V$에 대하여 $\sum_{k} x_k b_k = v$인 스칼라의 열 $x$, 곧 $Cx = v$인 $x \in F^n$이 하나 있고 하나뿐이다. 있다는 것은 $C : F^n \to V$가 전사라는 것이고, 하나뿐이라는 것은 $C$가 단사라는 것이다. 따라서 $C$는 동형사상이고 $C^{-1}(v)$는 $v$의 좌표이다. $(e_k)_j$는 $j = k$에서 $1$, 그 밖에서 $0$이므로 벡터공간 항목의 (4)의 (v)에 의해 $Ce_k = 1b_k = b_k$이다. $V$가 $n$차원이고 $n \ge 1$이면 길이 $n$인 기저가 있으므로 $F^n \cong V$이고, (4)에 의해 $C^{-1}$이 동형사상이므로 $V \cong F^n$이다.

**8의 증명.** 각 $x \in F^m$과 $k$에 스칼라 $\sum_{j} a_{k,j} x_j$가 정해지므로 재귀 정리의 (1)에 의해 그 값을 갖는 $F^n$의 원소 $Ax$가 있고, 다시 재귀 정리의 (1)에 의해 함수 $A$가 있다. $x, y \in F^m$, $\gamma \in F$, $k \in \{1, \dots, n\}$에 대하여, 분배법칙과 환의 유한 합의 (6)의 (i), (3)에 의해
$$
\begin{aligned}
(A(x + y))_k &= \sum_{j=1}^{m} a_{k,j}(x_j + y_j) \\
&= \sum_{j=1}^{m} a_{k,j} x_j \\
&\quad + \sum_{j=1}^{m} a_{k,j} y_j \\
&= (Ax)_k + (Ay)_k
\end{aligned}
$$
이고, $F$의 곱셈의 결합·교환법칙과 환의 유한 합의 (9), (3)에 의해
$$
\begin{aligned}
(A(\gamma x))_k &= \sum_{j=1}^{m} a_{k,j}(\gamma x_j) \\
&= \sum_{j=1}^{m} \gamma(a_{k,j} x_j) \\
&= \gamma \sum_{j=1}^{m} a_{k,j} x_j \\
&= (\gamma\,Ax)_k
\end{aligned}
$$
이다. 모든 $k$에서 값이 같으므로 $A(x + y) = Ax + Ay$이고 $A(\gamma x) = \gamma\,Ax$이다(벡터공간 항목의 (3)의 (i)). $m > n$이면 차원 항목의 (6)에 의해 $\dim_F F^m = m > n = \dim_F F^n$이므로 (5)에 의해 $Ax = 0$이고 $x \ne 0$인 $x \in F^m$이 있다. $Ax$가 영벡터 $(0, \dots, 0)$라는 것은 모든 $k$에서 $\sum_{j} a_{k,j} x_j = 0$이라는 것이다.

**9의 증명.** 벡터공간 항목의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본 $V$, $W$의 덧셈과 스칼라배는 선형대수 강의의 것과 같다. 따라서 이 항목의 두 조건은 [[linear-map|선형사상]]의 (T-합), (T-배)와 글자 그대로 같은 조건이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_5^3$에서 $\mathbb{Z}_5^2$로의 사상의 핵]
$F = \mathbb{Z}_5$([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3))이고 $A : \mathbb{Z}_5^3 \to \mathbb{Z}_5^2$를 (8)의 꼴로
$$
\begin{aligned}
Ax = (&x_1 + x_2 + x_3, \\
&x_1 + [2]x_2 + [3]x_3)
\end{aligned}
$$
라 하자. 미지수가 $3$개, 식이 $2$개이므로 (8)에 의해 영이 아닌 해가 있다. 둘째 식에서 첫째 식을 빼면 $x_2 + [2]x_3 = [0]$, 곧 $x_2 = [3]x_3$이고, 첫째 식에서 $x_1 = -x_2 - x_3 = -[4]x_3 = x_3$이다. $x_3 = [1]$로 두면 $x = ([1], [3], [1])$이고, 실제로 $[1] + [3] + [1] = [5] = [0]$, $[1] + [6] + [3] = [10] = [0]$이다.
:::

:::example[$\mathbb{Z}_7^2$의 좌표 동형사상]
$F = \mathbb{Z}_7$이고 $b_1 = ([1], [1])$, $b_2 = ([1], [6])$이라 하자. $C(x) = x_1 b_1 + x_2 b_2 = (x_1 + x_2,\ x_1 + [6]x_2) = (x_1 + x_2,\ x_1 - x_2)$이다. $\mathbb{Z}_7$에서 $[2][4] = [8] = [1]$이므로 $[2]^{-1} = [4]$이고, $(a, c) \in \mathbb{Z}_7^2$에 대하여 $x_1 = [4](a + c)$, $x_2 = [4](a - c)$로 두면 $x_1 + x_2 = [8]a = a$, $x_1 - x_2 = [8]c = c$이다. 거꾸로 $C(x) = (a, c)$이면 두 성분을 더하고 빼서 $[2]x_1 = a + c$, $[2]x_2 = a - c$이므로 $x$는 이것 하나뿐이다. 따라서 $C$는 전단사이고, [[basis-over-a-field|체 위의 기저와 좌표]]의 (1)에 의해 $b_1, b_2$는 기저이며 $(a, c)$의 좌표는 $[4](a + c)$, $[4](a - c)$이다. 예컨대 $([3], [0])$의 좌표는 $[12] = [5]$, $[5]$이고 $[5]b_1 + [5]b_2 = ([10], [35]) = ([3], [0])$이다.
:::

:::counterexample[차원이 다른 두 공간 사이의 단사이고 전사가 아닌 선형사상의 예]
$T : F \to F^2$를 $T\alpha = (\alpha, 0)$으로 정하면 $T$는 선형사상이고, $T\alpha = (0, 0)$이면 $\alpha = 0$이므로 단사이다. 그러나 $(0, 1)$은 $T$의 값이 아니므로 $T : F \to F^2$는 전사가 아니다. $\dim_F F = 1 \ne 2 = \dim_F F^2$이므로 (6)의 가정이 깨져 있다. 거꾸로 (5)는 차원이 큰 쪽에서 작은 쪽으로 가는 사상에 대한 것이고, 이 $T$처럼 작은 쪽에서 큰 쪽으로 가는 사상은 핵이 $\{0\}$일 수 있다.
:::

## 확인 질문

:::check[선형사상 $T : V \to W$와 $V$의 열 $v$에 대하여 $Tv_1, \dots, Tv_n$이 일차독립이면 $v_1, \dots, v_n$은 일차독립인가?]
그렇다. $\sum_{k} \alpha_k v_k = 0_V$이면 (1)에 의해 $\sum_{k} \alpha_k Tv_k = T0_V = 0_W$이고, $Tv$가 일차독립이므로 모든 $\alpha_k = 0$이다. $T$가 단사가 아니어도 된다.
:::

:::check[$\mathbb{Z}_3^2$에서 $\mathbb{Z}_3^3$로의 선형사상은 전사일 수 있는가?]
없다. $\mathbb{Z}_3^2$의 표준기저 $e_1, e_2$에 대하여 (2)에 의해 $\operatorname{Ran} T = \operatorname{span}_F(Te_1, Te_2)$이고, $T$가 전사이면 길이 $2$인 열 $Te_1, Te_2$가 $3$차원인 $\mathbb{Z}_3^3$를 생성하게 되는데, 이것은 [[dimension-over-a-field|체 위의 차원]]의 (5)의 (ii)와 어긋난다.
:::
