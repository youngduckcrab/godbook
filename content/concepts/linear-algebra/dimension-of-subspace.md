---
title: 부분공간의 차원
title_en: Dimension of a Subspace
aliases: [부분공간의 차원, 생성의 차원, dimension of a subspace, subspace of a finite-dimensional space, dimension of a span]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 벡터공간 V 의 부분공간 W 는 유한차원이고 dim W ≤ dim V 이며, 같으면 W = V 이다. 또 길이 n 인 열의 생성은 차원이 n 이하이고, n 인 것은 정확히 그 열이 일차독립일 때이다. 유한차원 부분공간 W 에 포함되는 부분공간 U 도 유한차원이고 dim U ≤ dim W 이며, 같으면 U = W 이다.
requires: [real-function-space, vector-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis-iff-independent-and-spanning, independent-list-extension, dimension, independent-and-spanning-bounds, sequences-in-a-subspace, standard-basis, well-ordering-principle, proof-by-contradiction, prime-number, real-number-arithmetic]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 5.2절, Theorem 5.5와 그 Remark, p.55–56
    checked: original
    note: "출처의 Theorem 5.5 는 (출처는 부분공간을 V, 전체 공간을 W 로 쓴다) dim W < ∞ 이면 부분공간 V 가 유한차원이고 dim V ≤ dim W 이며, dim V = dim W 이면 V = W 라고 한다. 출처의 증명은 V = {0} 이면 자명하다고 하고, 0 이 아닌 벡터에서 시작해 V 를 생성하지 않으면 생성에 없는 V 의 벡터를 덧붙이는 일을 '귀납으로' 계속하여 일차독립인 벡터를 늘려 가며, 생성에 없는 벡터를 덧붙인 열이 일차독립이라는 문장(1장 연습문제 2.5)에서 끝나며, 과정이 끝나는 까닭과 차원의 부등식, 등호의 경우는 적지 않는다(p.56). 이 항목은 W 안의 일차독립인 열의 길이 가운데 최댓값을 정렬 원리의 따름으로 잡아 증명하고, dim W ≤ dim V 와 같을 때 W = V 를 그 증명 안에서 보인다. 출처의 Remark 는 W 의 기저의 어느 벡터도 부분공간에 속하지 않는 예를 쉽게 만들 수 있다고 적지만 예를 들지 않는다. 아래 첫 예시는 그런 경우를 이 사이트가 만든 것이다. (4)와 (5)는 출처에 없다(이 사이트가 덧붙였다). 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회, 부분공간의 차원 (5)는 따로 1회). 경우 나눔의 근거, 선행 항목, 단원 글의 일반화, 출처 메모를 보완했다. 나머지 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $V$의 [[subspace|부분공간]]은 [[subspace|(P1)]]의 제한한 연산으로 벡터공간으로 보고, 그 [[dimension|유한차원]]과 차원은 이 벡터공간에 대해 말한다.

$V$가 유한차원이고 $W$가 $V$의 부분공간이라 하자.

1. $W$는 유한차원이다.
2. $\dim W \le \dim V$이다.
3. $\dim W = \dim V$이면 $W = V$이다.

또 다음이 성립한다. 여기서는 $V$가 유한차원이 아니어도 된다.

4. $v_1, \dots, v_n$이 길이 $n \ge 0$인 $V$의 벡터의 열이면, 부분공간 $\operatorname{span}(v_1, \dots, v_n)$은 유한차원이고 그 차원은 $n$ 이하이다. 그 차원이 $n$인 것은 정확히 $v_1, \dots, v_n$이 [[linear-independence|일차독립]]일 때이다.
5. $U$, $W$가 $V$의 부분공간이고 $U \subseteq W$이며 $W$가 유한차원이면, $U$도 유한차원이고 $\dim U \le \dim W$이며, $\dim U = \dim W$이면 $U = W$이다. 여기서 $\dim U$, $\dim W$는 각각 $V$의 연산을 (P1)로 $U$, $W$에 제한한 벡터공간으로서의 차원이다.
:::

:::english
Let $V$ be a vector space. A subspace of $V$ is regarded as a vector space with the restricted operations of (P1), and its finite-dimensionality and dimension refer to this vector space.

Let $V$ be finite-dimensional and let $W$ be a subspace of $V$.

1. $W$ is finite-dimensional.
2. $\dim W \le \dim V$.
3. If $\dim W = \dim V$, then $W = V$.

Moreover, the following holds; here $V$ need not be finite-dimensional.

4. If $v_1, \dots, v_n$ is a sequence of vectors of $V$ of length $n \ge 0$, then the subspace $\operatorname{span}(v_1, \dots, v_n)$ is finite-dimensional and its dimension is at most $n$. Its dimension equals $n$ exactly when $v_1, \dots, v_n$ is linearly independent.
5. If $U$ and $W$ are subspaces of $V$ with $U \subseteq W$ and $W$ is finite-dimensional, then $U$ is finite-dimensional and $\dim U \le \dim W$, and if $\dim U = \dim W$, then $U = W$. Here $\dim U$ and $\dim W$ are the dimensions of $U$ and $W$ as vector spaces with the operations of $V$ restricted to them by (P1).
:::

## 직관

큰 상자 안에 작은 상자를 넣으면 작은 상자가 더 클 수 없고, 크기가 같다면 둘은 꽉 맞습니다. (1)–(3)은 이 말을 차원으로 옮긴 것입니다. 상자는 부분공간, 크기는 차원, "꽉 맞는다"는 $W = V$에 해당합니다. 비유와 다른 점은, 상자의 크기는 재면 되지만 $W$의 차원은 $W$에 기저가 있어야 비로소 정해진다는 것입니다.

그래서 증명의 핵심은 $W$에 기저가 있다는 것입니다. $V$의 기저는 이 일을 해 주지 않습니다. 아래 첫 예시처럼 $V$의 기저의 어느 항도 $W$에 속하지 않을 수 있기 때문입니다. 증명은 $W$ 안에서 될 수 있는 대로 긴 일차독립인 열을 잡습니다. 길이는 $\dim V$를 넘지 못하므로([[independent-and-spanning-bounds|길이의 한계]]) 가장 긴 것이 있고, 가장 긴 열은 $W$를 생성할 수밖에 없습니다. 생성에 없는 벡터가 있으면 덧붙여 더 긴 열을 만들 수 있기 때문입니다.

(4)는 생성이라는 부분공간에 대해 같은 것을 말합니다. 길이 $n$인 열이 생성하는 공간은 $n$차원을 넘지 않고, 정확히 $n$차원인 것은 열에 군더더기가 없을 때입니다.

## 증명

:::idea
$W$의 원소로 된 일차독립인 열의 길이의 집합 $L$은 $0$을 원소로 갖고 $\dim V$로 위로 유계이므로 최대 원소 $r$를 갖는다. 길이 $r$인 그런 열은 $W$를 생성하므로 [[sequences-in-a-subspace|(J4)]]에 의해 $W$의 기저이다.
:::

:::hint
$L$이 [[well-ordering-principle|정렬 원리]]의 4번(최대 원소)이 요구하는 두 조건을 만족하는지 확인하세요. 정수의 집합이어야 한다는 것도 잊지 마세요.
:::

:::hint
가장 긴 열 $w$가 $W$를 생성하지 않는다면 $x \in W - \operatorname{span}(w)$를 [[independent-list-extension|덧붙이기]]의 (1)에 쓰세요.
:::

:::proof
정수의 순서는 [[well-ordering-principle|(Z5)–(Z7)]], (L1)–(L3)으로 다룬다. $d = \dim V$라 하자.

**(1), (2)** 정수의 집합
$$L = \{r \in \mathbb{Z} : r \ge 0 \text{이고, 모든 항이 } W \text{에 속하는 길이 } r \text{인 } V \text{의 일차독립인 벡터의 열이 있다}\}$$
을 생각한다.

- $L \ne \emptyset$: 빈 열은 일차독립이고([[linear-independence|일차독립의 정의]]) 모든 항이 $W$에 속한다(항이 없다). 따라서 $0 \in L$이다.
- $L$은 위로 유계: $r \in L$이면 길이 $r$인 일차독립인 $V$의 열이 있으므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 $r \le d$이다.

$L$은 공집합이 아니고 위로 유계인 정수의 집합이므로 [[well-ordering-principle|정렬 원리]]의 4(나)에 의해 최대 원소 $r$를 갖는다. $r \in L$이므로 모든 항이 $W$에 속하는 길이 $r$인 일차독립인 열 $w_1, \dots, w_r$이 있다.

$\operatorname{span}(w) = W$임을 보인다. $W$는 부분공간이고 $w$의 모든 항이 $W$에 속하므로 [[linear-combination-and-span|(N3)]]에 의해 $\operatorname{span}(w) \subseteq W$이다. 거꾸로 $W \subseteq \operatorname{span}(w)$가 아니라고 가정하면 $x \in W$이고 $x \notin \operatorname{span}(w)$인 $x$가 있다. [[independent-list-extension|일차독립인 열에 덧붙이기]]의 (1)에 의해 덧붙인 열 $w_1, \dots, w_r, x$는 일차독립이고, 모든 항이 $W$에 속하며 길이가 $r + 1$이다. 따라서 $r + 1 \in L$이고, $r$이 최대 원소이므로 $r + 1 \le r$이다. 그러나 (L3)에 의해 $r < r + 1$이므로 (L1)에 어긋난다. 이 모순에서([[proof-by-contradiction|귀류법]]) $W \subseteq \operatorname{span}(w)$이고, 따라서 $\operatorname{span}(w) = W$이다.

$w$는 모든 항이 $W$에 속하고 $V$에서 일차독립이며 $\operatorname{span}(w) = W$이므로 [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 벡터공간 $W$의 기저이다. 차원의 (1)에 의해 $W$는 유한차원이고, (2)에 의해 $\dim W = r \le d$이다.

**(3)** $\dim W = d$라 하자. 위에서 얻은 $W$의 기저 $w$의 길이 $r$에 대하여 [[dimension|차원]]의 (2)에 의해 $\dim W = r$이므로 $r = d$이다. 그러면 $w$는 길이 $d$인 $V$의 일차독립인 열이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $V$의 기저이고, 특히 $V$를 생성한다. 따라서 $V = \operatorname{span}(w) = W$이다.

**(4)** $U = \operatorname{span}(v_1, \dots, v_n)$이라 하자. (N1)에 의해 $U$는 $V$의 부분공간이고, (N2)에 의해 $v$의 모든 항이 $U$에 속한다. $\operatorname{span}(v) = U$이므로 (J4) 다음의 문단에 의해 벡터공간 $U$는 유한차원이다. (J2)에 의해 $v$는 벡터공간 $U$를 생성하는 $U$의 열이므로, 일차독립인 열과 생성하는 열의 길이의 (2)를 벡터공간 $U$에 쓰면 $n \ge \dim U$이다.

$v$가 일차독립이면 $v$는 모든 항이 $U$에 속하고 일차독립이며 $\operatorname{span}(v) = U$이므로 (J4)에 의해 $U$의 기저이고, 차원의 (2)에 의해 $\dim U = n$이다. 거꾸로 $\dim U = n$이면 $v$는 벡터공간 $U$를 생성하는 길이 $n = \dim U$인 열이므로 일차독립인 열과 생성하는 열의 길이의 (4)에 의해 $U$의 기저이다. 그러면 [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 $v$는 $U$에서 일차독립이고, (J3)에 의해 $V$에서 일차독립이다.

**(5)** $d' = \dim W$라 하자. (1)–(3)의 증명과 같은 논증을, 일차독립인 열의 길이의 한계를 $V$ 대신 벡터공간 $W$에서 써서 되풀이한다. 정수의 집합
$$L' = \{r \in \mathbb{Z} : r \ge 0 \text{이고, 모든 항이 } U \text{에 속하는 길이 } r \text{인 } V \text{의 일차독립인 벡터의 열이 있다}\}$$
을 생각한다.

- $L' \ne \emptyset$: 빈 열은 일차독립이고 모든 항이 $U$에 속하므로 $0 \in L'$이다.
- $L'$은 위로 유계: $r \in L'$이고 $u$가 그런 열이면, $U \subseteq W$이므로 $u$의 모든 항이 $W$에 속한다. [[sequences-in-a-subspace|부분공간 안의 열]](부분공간 $W$에 대하여)의 첫 문단에 의해 $u$는 벡터공간 $W$의 열이고, (J3)에 의해 $W$에서 일차독립이다. 일차독립인 열과 생성하는 열의 길이의 (1)을 유한차원 벡터공간 $W$에 쓰면 $r \le d'$이다.

정렬 원리의 4(나)에 의해 $L'$은 최대 원소 $r$를 갖고, 모든 항이 $U$에 속하는 길이 $r$인 $V$의 일차독립인 열 $u_1, \dots, u_r$이 있다. $U$는 부분공간이고 $u$의 항이 모두 $U$에 속하므로 (N3)에 의해 $\operatorname{span}(u) \subseteq U$이다. $U \subseteq \operatorname{span}(u)$가 아니라고 가정하면 $x \in U$이고 $x \notin \operatorname{span}(u)$인 $x$가 있고, 일차독립인 열에 덧붙이기의 (1)에 의해 $u_1, \dots, u_r, x$는 모든 항이 $U$에 속하는 길이 $r + 1$인 일차독립인 열이므로 $r + 1 \in L'$, 곧 $r + 1 \le r$이다. 이는 (L3)과 (L1)에 어긋나므로 귀류법에 의해 $\operatorname{span}(u) = U$이다. 부분공간 $U$에 대한 (J4)에 의해 $u$는 벡터공간 $U$의 기저이고, 차원의 (1), (2)에 의해 $U$는 유한차원이며 $\dim U = r \le d'$이다.

$\dim U = d'$이라 하자. 차원의 (2)에 의해 $r = \dim U = d'$이다. 위에서 본 것처럼 $u$는 벡터공간 $W$의 열이고 $W$에서 일차독립이며 길이가 $d' = \dim W$이므로, 일차독립인 열과 생성하는 열의 길이의 (3)을 $W$에 쓰면 $u$는 벡터공간 $W$의 기저이다. 부분공간 $W$에 대한 (J4)에 의해 $\operatorname{span}(u) = W$이다. 따라서 $W = \operatorname{span}(u) = U$이다.
:::

## 예시와 반례

:::example[V 의 기저가 W 에 하나도 없는 경우]
$\mathbb{R}^2$에서 $W = \operatorname{span}((1, 1))$이라 합시다. [[standard-basis|표준기저]] $(1, 0), (0, 1)$의 어느 항도 $W$에 속하지 않습니다. $\alpha(1, 1) = (\alpha, \alpha)$가 $(1, 0)$이면 $\alpha = 1$이고 $\alpha = 0$이어야 하고, $(0, 1)$이면 $\alpha = 0$이고 $\alpha = 1$이어야 하는데, 어느 쪽도 [[real-number-arithmetic|(K4)]]의 $0 \ne 1$에 어긋납니다. 그래도 (4)에 의해 $W$는 유한차원이고, $(1, 1) \ne (0, 0)$인 길이 $1$인 열은 [[linear-independence|(I4)]]에 의해 일차독립이므로 $\dim W = 1 \le 2$입니다.
:::

:::counterexample[포함 관계가 없으면 (3)은 말할 수 없다]
$\mathbb{R}^2$의 두 부분공간 $\operatorname{span}((1, 0))$과 $\operatorname{span}((0, 1))$은 (4)에 의해 둘 다 $1$차원이지만 같지 않습니다. $\alpha(0, 1) = (0, \alpha)$가 $(1, 0)$이면 첫째 값에서 $0 = 1$이 되므로 $(1, 0)$은 뒤의 것에 속하지 않습니다. (3)은 한쪽이 다른 쪽의 부분공간일 때의 이야기입니다. 여기서는 둘 다 $\mathbb{R}^2$의 부분공간이지만 서로의 부분공간이 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}^3$에서 $U = \operatorname{span}((1, 0, 0), (0, 1, 0), (1, 1, 0))$의 차원은 무엇인가?]
$2$입니다. $1(1, 0, 0) + 1(0, 1, 0) + (-1)(1, 1, 0) = (0, 0, 0)$이므로 열이 일차종속이고, (4)에 의해 $\dim U \le 3$이며 $\dim U \ne 3$이므로 [[well-ordering-principle|(Z5)]]와 [[prime-number|(Z1)]]에 의해 $\dim U \le 2$입니다. 한편 $(1, 0, 0), (0, 1, 0)$은 (N2)에 의해 $U$의 원소이고, $\alpha(1, 0, 0) + \beta(0, 1, 0) = (\alpha, \beta, 0)$이 $(0, 0, 0)$이면 $\alpha = \beta = 0$이므로 일차독립이며, (J3)에 의해 $U$에서도 일차독립입니다. 그러므로 길이의 한계 (1)을 $U$에 쓰면 $2 \le \dim U$입니다. 따라서 [[well-ordering-principle|(L2)]]에 의해 $\dim U = 2$입니다.
:::

:::check[$V$가 유한차원이고 $\dim V = 0$이면 $V$의 부분공간은 무엇인가?]
$\{0_V\}$ 하나뿐입니다. 부분공간 $W$에 대하여 (2)에 의해 $0 \le \dim W \le 0$이므로 (L2)에 의해 $\dim W = 0 = \dim V$이고, (3)에 의해 $W = V$입니다. [[dimension|차원]]의 (3)에 의해 $V = \{0_V\}$입니다.
:::
