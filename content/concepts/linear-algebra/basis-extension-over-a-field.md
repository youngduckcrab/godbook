---
title: 기저로 늘리기와 줄이기
title_en: Extending and Reducing to a Basis
aliases: [기저의 확장 (체), 부분공간의 차원 (체), basis extension over a field, dimension of a subspace over a field]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 체 F 위의 유한차원 벡터공간에서 생성하는 열은 기저인 부분열을 갖고 일차독립인 열은 기저로 늘어나며, 길이가 차원과 같은 일차독립인 열과 생성하는 열은 기저라는 것, 길이 n + 1 인 일차독립인 열이 없으면 차원이 n 이하라는 것, 부분공간의 차원은 전체의 차원 이하이고 같으면 두 공간이 같다는 것을 보인다.
requires: [set, subset, function, recursion-theorem, finite-set, mathematical-induction, prime-number, well-ordering-principle, proof-by-contradiction, group, finite-product-in-a-group, ring, field, finite-integral-domain-is-a-field, integers-modulo-n, finite-sums-in-a-ring, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "20.3절 Linear Independence, Theorem 20.15 (p.256); 20.5절 Exercises, 연습문제 7, 11, 13, 15 (p.257–258)"
    checked: original
    note: "출처의 Theorem 20.15 는 차원이 n 인 벡터공간에서 (1) 길이 n 인 일차독립인 집합은 기저, (2) V 를 생성하는 길이 n 인 집합은 기저, (3) k < n 인 일차독립인 집합 {v_1, …, v_k} 에 v_{k+1}, …, v_n 을 더해 기저를 만들 수 있다는 것이고, 출처는 증명을 연습문제 11 로 둔다(p.256, p.257). 이 항목의 (3)이 Theorem 20.15 의 (1)(2)이고 (2)가 (3)이다. 이 항목의 (2)는 k = n 인 경우도 포함한다(더할 벡터가 없다). 출처의 연습문제 15 (d)(p.258)는 핵의 기저를 V 의 기저로 늘릴 수 있는 까닭을 묻는다('We can extend this basis to be a basis … Why?'). 이 항목의 (2)가 그 까닭이다. (1)(생성하는 열에서 기저로 줄이기)은 출처 Proposition 20.10(종속이면 한 벡터가 나머지의 일차결합)을 되풀이해 쓰면 나오는 내용이다. (5)(부분공간의 차원)의 '부분공간에 기저가 있으면 그 차원은 전체의 차원 이하' 부분은 Theorem 20.15 (3)(일차독립인 집합을 기저로 늘리기)에서 바로 나오고, 출처 연습문제 17 (c)(p.258)는 차원이 k 인 부분공간 U 를 기저로 늘려 W = U ⊕ V 인 V 를 만들게 하는데 이것도 같은 따름을 쓴다. 출처는 부분공간이 유한차원이라는 것을 따로 보이지 않고 연습문제 17 (c) 에서 '차원이 k 인 부분공간' 으로 가정한다. 연습문제 13 은 {0} 이 0차원 부분공간이라는 것이다. (4)(길이 n + 1 인 일차독립인 열이 없으면 차원이 n 이하)는 출처에 명제로 없다(검색어 'subspace of dimension', 'dimension of', 'extend', 'maximal' 로 책 전체를 찾고 20.5절 연습문제 1–18 을 처음부터 읽었다). (4)는 출처 Lemma 23.18(아르틴 보조정리, p.298–299)의 결론 '[E : F] ≤ |G|' 를 '길이 |G| + 1 인 열이 모두 종속' 에서 얻을 때 쓰는 꼴이다. 출처의 (3)의 증명은 연습으로 비어 있고, 이 항목의 (2)의 증명은 '생성에 들지 않는 벡터가 있다' 는 존재 명제를 차원과 길이의 차에 대한 귀납 안에서 쓴다. 예시 '$F^3$의 한 부분공간' 은 출처 연습문제 7 (a)(p.257)가 ℝ³ 의 {(x_1, x_2, x_3) : 3x_1 − 2x_2 + x_3 = 0} 의 기저와 차원을 묻는 것(부록 B 의 힌트 p.332 는 기저 {(1, 0, −3), (0, 1, 2)} 를 준다)과 같은 종류이고, 예시의 식 x_1 + x_2 + x_3 = 0 처럼 계수가 모두 1 인 식은 출처 8.2절 Example 8.19(p.100)의 짝수 검사 x_1 + x_2 + ⋯ + x_n = 0(그 예에서는 ℤ_2 위의 x_1 + x_2 + x_3 + x_4 = 0)에도 나온다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]이고 $V$가 $F$ 위의 [[vector-space-over-a-field|벡터공간]]이라 하자. 생성 $\operatorname{span}_F$, 생성한다, 일차독립, 덧붙인 열, 부분공간은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 것이고, 기저와 부분열은 [[basis-over-a-field|체 위의 기저와 좌표]]의 것이며, 유한차원과 $\dim_F$는 [[dimension-over-a-field|체 위의 차원]]의 것이다. 부분공간은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 (1)의 (ii)의 연산으로 벡터공간으로 보고, 그 유한차원과 차원은 이 벡터공간에 대해 말한다. 아래에서 $n$, $r$, $d$는 $0$ 이상인 정수이다.

1. (기저로 줄이기) $V$가 유한차원이고 $\dim_F V = d$이면, $V$를 생성하는 모든 열 $v_1, \dots, v_m$은 $V$의 기저인 부분열을 갖고, 그 부분열의 길이는 $d$이다.
2. (기저로 늘리기) $V$가 유한차원이고 $\dim_F V = d$이며 $u_1, \dots, u_r$이 일차독립인 열이면 $r \le d$이고, 처음 $r$개가 $u_1, \dots, u_r$인 길이 $d$인 $V$의 기저 $w_1, \dots, w_d$가 있다. ($r = d$이면 $u$ 자신이 기저이다.)
3. (길이가 차원과 같은 열) $V$가 유한차원이고 $\dim_F V = d$라 하자. 길이 $d$인 일차독립인 열은 $V$의 기저이다. 길이 $d$이고 $V$를 생성하는 열은 $V$의 기저이다.
4. (일차독립인 열의 길이의 상한) $V$의 길이 $n + 1$인 열이 모두 일차종속이면 $V$는 유한차원이고 $\dim_F V \le n$이다.
5. (부분공간의 차원) $V$가 유한차원이고 $W$가 $V$의 부분공간이면, $W$는 유한차원이고 $\dim_F W \le \dim_F V$이며, $\dim_F W = \dim_F V$이면 $W = V$이다. 또 $U$, $W$가 $V$의 부분공간이고 $U \subseteq W$이며 $W$가 유한차원이면($V$는 유한차원이 아니어도 된다), $U$는 유한차원이고 $\dim_F U \le \dim_F W$이며, $\dim_F U = \dim_F W$이면 $U = W$이다.
:::

:::english
Let $F$ be a field and $V$ a vector space over $F$. The span $\operatorname{span}_F$, "spans", linear independence, appended sequences and subspaces are those of the entry on span and linear independence over a field; bases and subsequences are those of the entry on bases and coordinates over a field; finite dimension and $\dim_F$ are those of the entry on dimension over a field. A subspace is regarded as a vector space with the operations of (1)(ii) of the entry on span and linear independence over a field, and its finite dimension and dimension refer to this vector space. Below, $n$, $r$, $d$ are integers $\ge 0$.

1. (Reducing to a basis) If $V$ is finite-dimensional with $\dim_F V = d$, then every sequence $v_1, \dots, v_m$ spanning $V$ has a subsequence that is a basis of $V$, and that subsequence has length $d$.
2. (Extending to a basis) If $V$ is finite-dimensional with $\dim_F V = d$ and $u_1, \dots, u_r$ is linearly independent, then $r \le d$, and there is a basis $w_1, \dots, w_d$ of $V$ of length $d$ whose first $r$ terms are $u_1, \dots, u_r$. (If $r = d$, $u$ itself is a basis.)
3. (Sequences whose length equals the dimension) Let $V$ be finite-dimensional with $\dim_F V = d$. A linearly independent sequence of length $d$ is a basis of $V$. A sequence of length $d$ that spans $V$ is a basis of $V$.
4. (An upper bound on lengths of independent sequences) If every sequence in $V$ of length $n + 1$ is linearly dependent, then $V$ is finite-dimensional and $\dim_F V \le n$.
5. (Dimensions of subspaces) If $V$ is finite-dimensional and $W$ is a subspace of $V$, then $W$ is finite-dimensional, $\dim_F W \le \dim_F V$, and if $\dim_F W = \dim_F V$ then $W = V$. Moreover, if $U$, $W$ are subspaces of $V$ with $U \subseteq W$ and $W$ is finite-dimensional ($V$ need not be finite-dimensional), then $U$ is finite-dimensional, $\dim_F U \le \dim_F W$, and if $\dim_F U = \dim_F W$ then $U = W$.
:::

## 직관

차원이 $d$인 공간에서 일차독립인 열은 많아야 $d$개짜리이고, 생성하는 열은 적어도 $d$개짜리입니다. 이 항목은 그 사이를 메웁니다. 생성하는 열은 덜어 내어 기저로 줄일 수 있고((1)), 일차독립인 열은 보태어 기저로 늘릴 수 있습니다((2)). 비유하자면 기저는 "모자라지도 넘치지도 않는" 재료 목록이고, 넘치는 목록에서는 덜고 모자라는 목록에는 보태어 그 목록에 이릅니다.

(4)는 일차독립인 열의 길이에 상한이 있으면 공간이 유한차원이라는 것입니다. 가장 긴 일차독립인 열을 잡으면 거기에 더 덧붙일 수 있는 벡터가 없으므로 그 열이 공간 전체를 생성합니다.

(5)는 부분공간이 전체보다 클 수 없다는 것이고, 차원이 같으면 포함 관계에서 같은 공간이라는 것입니다. 포함 관계가 없는 두 부분공간은 차원이 같아도 다를 수 있습니다(아래 반례).

## 증명

:::idea
(2)는 차원과 열의 길이의 차에 대한 귀납이다. 열이 공간을 생성하지 않으면 생성에 들지 않는 벡터를 덧붙여도 일차독립이고, 차가 하나 줄어든다. (4)는 일차독립인 열의 길이 가운데 가장 큰 것을 잡는다.
:::

:::hint
(2)에서 일차독립인 열이 $V$를 생성하면 그 열은 기저이고, 그 길이는 차원과 같다.
:::

:::hint
(5)에서는 $W$의 일차독립인 열이 $V$에서도 일차독립이라는 것과 (4)를 쓴다.
:::

:::proof
**쓰는 사실.** [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]을 "생성 항목", [[basis-over-a-field|체 위의 기저와 좌표]]를 "기저 항목", [[dimension-over-a-field|체 위의 차원]]을 "차원 항목"으로 줄여 부르고 그 번호로 인용한다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로 다룬다. 길이 $d$인 열의 처음 $d$개는 그 열 자신이다(모든 자리에서 항이 같다).

**1의 증명.** 기저 항목의 (6)에 의해 $v$의 부분열 가운데 $V$의 기저인 것이 있고, 차원 항목의 (4)에 의해 그 길이는 $d$이다.

**2의 증명.** 차원 항목의 (5)의 (i)에 의해 $r \le d$이다. $t = d - r$에 대한 귀납법으로 다음 명제 $Q_t$를 보인다.

> $Q_t$: $d - r = t$인 모든 정수 $r$과 길이 $r$인 모든 일차독립인 열 $u$에 대하여, 처음 $r$개가 $u$인 길이 $d$인 $V$의 기저가 있다.

먼저 다음을 본다. (가) 일차독립인 열 $u$가 $V$를 생성하면 $u$는 기저이고, 차원 항목의 (4)에 의해 그 길이는 $d$이다. 이때 $u$ 자신이 처음 $d$개가 $u$인 길이 $d$인 기저이다.

*기초 단계 $t = 0$.* $r = d$이다. $\operatorname{span}_F(u) \ne V$라고 가정하면 생성 항목의 (4)의 (ii)($W = V$)에 의해 덧붙인 열 $u_1, \dots, u_d, x$가 일차독립인 $x \in V$가 있고, 그 길이 $d + 1$은 차원 항목의 (5)의 (i)에 의해 $d$ 이하이어야 하는데 (L3)의 $d < d + 1$과 어긋난다((L1)). 따라서 $u$는 $V$를 생성하고 (가)에 의해 $Q_0$이 성립한다.

*귀납 단계.* $Q_t$가 참이라 하고 $d - r = t + 1$인 일차독립인 열 $u$를 잡자. $r = d - t - 1 < d$이다. $u$가 $V$를 생성하면 (가)에 의해 $r = d$가 되어 어긋나므로, $\operatorname{span}_F(u) \ne V$이다. 생성 항목의 (4)의 (ii)에 의해 덧붙인 열 $u_1, \dots, u_r, x$가 일차독립인 $x \in V$가 있다. 이 열의 길이 $r + 1$은 $d - (r + 1) = t$를 만족하므로 $Q_t$에 의해 처음 $r + 1$개가 $u_1, \dots, u_r, x$인 길이 $d$인 기저 $w$가 있다. $w$의 처음 $r$개는 $u_1, \dots, u_r, x$의 처음 $r$개, 곧 $u$이다. 따라서 $Q_{t+1}$이 성립한다.

귀납법의 원리에 의해 모든 $t \ge 0$에서 $Q_t$가 참이고, $t = d - r$로 두면 (2)가 된다.

**3의 증명.** $u$가 길이 $d$인 일차독립인 열이면 (2)에 의해 처음 $d$개가 $u$인 길이 $d$인 기저 $w$가 있다. 길이 $d$인 열 $w$의 처음 $d$개는 $w$ 자신이므로 $w = u$이고, $u$는 기저이다. $v$가 길이 $d$이고 $V$를 생성하면 (1)에 의해 길이 $d$인 부분열 $v \circ s$가 기저이고, $s : \{1, \dots, d\} \to \{1, \dots, d\}$이므로 기저 항목의 (5)의 (ii)에 의해 $v \circ s = v$이다. 따라서 $v$는 기저이다.

**4의 증명.** $L$을 "길이 $r$인 일차독립인 $V$의 열이 있다"를 만족하는 $0$ 이상인 정수 $r$ 전체의 집합이라 하자. 빈 열은 일차독립이므로 $0 \in L$이다. $r \in L$이면 $r \le n$이다. $r \ge n + 1$이라고 가정하면 길이 $r$인 일차독립인 열의 처음 $n + 1$개가 생성 항목의 (3)의 (v)에 의해 일차독립이 되어 가정과 어긋나기 때문이다((Z5)와 (Z1)에 의해 $r \le n$이거나 $r \ge n + 1$이다). 따라서 $L$은 공집합이 아니고 위로 유계인 정수의 집합이고, [[well-ordering-principle|정렬 원리]]의 (4)의 (나)에 의해 최대 원소 $r_0$을 갖는다. 길이 $r_0$인 일차독립인 열 $u$를 하나 잡는다.

$\operatorname{span}_F(u) \ne V$라고 가정하면 생성 항목의 (4)의 (ii)($W = V$)에 의해 길이 $r_0 + 1$인 일차독립인 열이 있어 $r_0 + 1 \in L$이고, 이것은 $r_0$이 최대 원소라는 것과 어긋난다((L3), (L1)). 따라서 $u$는 $V$를 생성하는 일차독립인 열, 곧 기저이다. 차원 항목의 (4)에 의해 $V$는 유한차원이고 $\dim_F V = r_0 \le n$이다.

**5의 증명.** $d = \dim_F V$라 하자. $W$의 원소로 된 열이 벡터공간 $W$에서 일차독립이면 생성 항목의 (5)에 의해 $V$에서 일차독립이고, 차원 항목의 (5)의 (i)에 의해 그 길이는 $d$ 이하이다. 따라서 벡터공간 $W$의 길이 $d + 1$인 열은 모두 일차종속이고, (4)를 벡터공간 $W$에 쓰면 $W$는 유한차원이고 $\dim_F W \le d$이다.

$\dim_F W = d$라 하자. 벡터공간 $W$의 길이 $d$인 기저 $b$를 잡으면, $b$는 생성 항목의 (5)에 의해 $V$에서 일차독립인 길이 $d$인 열이므로 (3)에 의해 $V$의 기저이다. 생성 항목의 (5)에 의해 벡터공간 $W$에서 계산한 $b$의 생성은 $\operatorname{span}_F(b)$와 같고, $b$가 $W$를 생성하므로 $W = \operatorname{span}_F(b) = V$이다.

둘째 문장: 생성 항목의 (1)의 (iv)에 의해 $U$는 벡터공간 $W$의 부분공간이다. $U$의 연산을 $W$에서 제한한 것과 $V$에서 제한한 것은 정의역이 같고 모든 원소에서 값이 같으므로 같은 함수이다. 따라서 첫 문장을 유한차원 벡터공간 $W$와 그 부분공간 $U$에 쓰면 된다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3^2$에서 기저로 늘리는 예]
$\mathbb{Z}_3^2$는 $2$차원이다([[dimension-over-a-field|체 위의 차원]]의 (6)). $u_1 = ([1], [2])$는 영벡터가 아니므로 길이 $1$인 일차독립인 열이다. $\operatorname{span}_F(u_1) = \{(t, [2]t) : t \in \mathbb{Z}_3\}$이고, $e_1 = ([1], [0])$이 여기에 들려면 $t = [1]$이고 $[2]t = [0]$이어야 하므로 들지 않는다. 따라서 [[span-and-independence-over-a-field|생성과 일차독립]]의 (4)의 (i)에 의해 $u_1, e_1$은 일차독립이고, 길이가 $2$이므로 (3)에 의해 $\mathbb{Z}_3^2$의 기저이다. 이것이 (2)의 증명이 만드는 기저의 한 예이다.
:::

:::example[$F^3$의 한 부분공간]
$F$가 체이고 $W = \{x \in F^3 : x_1 + x_2 + x_3 = 0\}$이라 하자. $0 + 0 + 0 = 0$이고, $x, y \in W$, $\alpha \in F$이면 $F$의 덧셈의 결합·교환법칙과 분배법칙에 의해 $(x_1 + y_1) + (x_2 + y_2) + (x_3 + y_3) = (x_1 + x_2 + x_3) + (y_1 + y_2 + y_3) = 0$이고 $\alpha x_1 + \alpha x_2 + \alpha x_3 = \alpha(x_1 + x_2 + x_3) = \alpha 0 = 0$이므로 $W$는 부분공간이다. $x \in W$이면 $x_3 = -x_1 - x_2$이므로
$$
\begin{aligned}
x &= (x_1,\ x_2,\ -x_1 - x_2) \\
&= x_1 (1, -1, 0) \\
&\quad + (x_1 + x_2)(0, 1, -1)
\end{aligned}
$$
이다(성분마다 $x_1 + 0 = x_1$, $-x_1 + (x_1 + x_2) = x_2$, $0 - (x_1 + x_2) = -x_1 - x_2$). $c_1 = (1, -1, 0)$, $c_2 = (0, 1, -1)$은 $1 + (-1) + 0 = 0$, $0 + 1 + (-1) = 0$이므로 $W$에 속하고, 위 식에 의해 $W$를 생성한다. $\alpha c_1 + \beta c_2 = (\alpha, \beta - \alpha, -\beta)$가 영벡터이면 $\alpha = 0$이고 $\beta = 0$이므로 일차독립이다. 따라서 $\dim_F W = 2 \le 3 = \dim_F F^3$이고, $e_1 \notin W$($1 + 0 + 0 = 1 \ne 0$)이므로 $W \ne F^3$이다. (5)와 맞는다.
:::

:::counterexample[포함 관계가 없는 같은 차원의 두 부분공간의 예]
$\mathbb{Z}_3^2$의 부분공간 $U = \operatorname{span}_F(e_1)$과 $W = \operatorname{span}_F(e_2)$는 둘 다 $1$차원이다($e_1$, $e_2$가 각각 일차독립인 길이 $1$인 열로 생성한다). 그러나 $e_1 \in U$이고 $e_1 \notin W$($W = \{([0], t) : t \in \mathbb{Z}_3\}$)이므로 $U \ne W$이다. (5)의 "차원이 같으면 같다"는 $U \subseteq W$라는 가정 아래의 말이다.
:::

## 확인 질문

:::check[$\dim_F V = 4$인 $V$의 부분공간 $W$에 길이 $4$인 일차독립인 열이 있으면 $W$는 무엇인가?]
$W = V$이다. 그 열은 벡터공간 $W$에서도 일차독립이므로([[span-and-independence-over-a-field|생성과 일차독립]]의 (5)) [[dimension-over-a-field|체 위의 차원]]의 (5)의 (i)에 의해 $\dim_F W \ge 4$이고, (5)에 의해 $\dim_F W \le 4$이다. 따라서 $\dim_F W = 4 = \dim_F V$이고 (5)에 의해 $W = V$이다.
:::

:::check[$F$ 자신을 $F$ 위의 벡터공간으로 볼 때 부분공간은 무엇이 있는가?]
$\{0\}$과 $F$뿐이다. [[dimension-over-a-field|체 위의 차원]]의 (6)에 의해 $\dim_F F = 1$이므로 (5)에 의해 부분공간 $W$는 유한차원이고 $\dim_F W$는 $0$ 또는 $1$이다. $0$이면 체 위의 차원의 (6)에 의해 $W = \{0\}$이고, $1$이면 (5)에 의해 $W = F$이다. 두 집합은 모두 부분공간이다([[span-and-independence-over-a-field|생성과 일차독립]]의 (1)의 (iii)).
:::
