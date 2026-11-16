---
title: 부분공간의 교집합과 합
title_en: Intersection and Sum of Subspaces
aliases: [부분공간의 합, 부분공간의 교집합, sum of subspaces, intersection of subspaces]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간의 두 부분공간의 교집합은 부분공간이고, 합 U + W = {u + w}도 부분공간이며, 합은 두 부분공간을 모두 포함하는 부분공간 가운데 가장 작다.
requires: [set, subset, set-operations, vector-space, vector-space-basic-properties, subspace, real-number-arithmetic, real-function-space]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 7절 Subspaces, 연습문제 7.1, 7.2, p.31
    checked: original
    note: "출처는 이 두 사실을 증명 없이 연습문제로 낸다. 7.1은 두 부분공간의 교집합이 부분공간임을, 7.2는 합 X + Y를 'x ∈ X, y ∈ Y로 v = x + y로 쓸 수 있는 벡터 전체'로 정의하고 부분공간임을 보이라고 한다. 이 항목의 (1)과 (2)의 앞 부분이 그 두 문제이고 증명은 이 사이트가 썼다. 출처의 X, Y 대신 U, W를 쓴다. 합이 U와 W를 포함한다는 것과 (3)(합은 U와 W를 모두 포함하는 부분공간 가운데 가장 작다)은 출처에 없고 이 사이트가 덧붙였다. 출처는 임의 개수의 부분공간에 관한 것은 말하지 않고 이 항목도 다루지 않는다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $U$, $W$가 $V$의 [[subspace|부분공간]]이라 하자. $U$와 $W$의 **합**(sum)은 $U + W = \{u + w : u \in U,\ w \in W\}$로 정한다. 곧 $x \in V$가 $U + W$의 원소인 것은 정확히 $x = u + w$인 $u \in U$와 $w \in W$가 있을 때이다. 다음이 성립한다.

1. [[set-operations|교집합]] $U \cap W$는 $V$의 부분공간이다.
2. $U + W$는 $V$의 부분공간이고 $U \subseteq U + W$, $W \subseteq U + W$이다.
3. $X$가 $V$의 부분공간이고 $U \cup W \subseteq X$(곧 $U \subseteq X$이고 $W \subseteq X$)이면 $U + W \subseteq X$이다. 따라서 $U + W$는 $U$와 $W$를 모두 포함하는 부분공간 가운데 가장 작다. 곧 $U$와 $W$를 모두 포함하는 부분공간이고, $U$와 $W$를 모두 포함하는 모든 부분공간에 포함된다.
:::

:::english
Let $V$ be a vector space and let $U$ and $W$ be subspaces of $V$. The **sum** of $U$ and $W$ is $U + W = \{u + w : u \in U,\ w \in W\}$. That is, $x \in V$ is an element of $U + W$ exactly when $x = u + w$ for some $u \in U$ and $w \in W$. The following hold.

1. The intersection $U \cap W$ is a subspace of $V$.
2. $U + W$ is a subspace of $V$, and $U \subseteq U + W$ and $W \subseteq U + W$.
3. If $X$ is a subspace of $V$ with $U \cup W \subseteq X$ (that is, $U \subseteq X$ and $W \subseteq X$), then $U + W \subseteq X$. Hence $U + W$ is the smallest subspace containing both $U$ and $W$. That is, it is a subspace containing both $U$ and $W$, and it is contained in every subspace containing both $U$ and $W$.
:::

## 직관

교집합은 두 부분공간에 **모두** 들어 있는 벡터를 모은 것입니다. 교집합의 벡터끼리 더하거나 실수를 곱하면, 결과는 첫째 부분공간 안에 머물고 둘째 부분공간 안에도 머뭅니다. 두 울타리를 동시에 못 벗어나므로 교집합도 연산에 닫혀 있습니다.

합은 반대 방향입니다. 합집합 $U \cup W$는 일반적으로 부분공간이 아니라서 두 부분공간을 모두 담는 부분공간이 필요할 때 쓸 수 없습니다. 대신 $U$에서 벡터 하나, $W$에서 벡터 하나를 골라 **더해서** 얻는 벡터를 모두 모으면 부분공간이 됩니다. 물감 상자 두 개에서 한 방울씩 꺼내 섞어 만들 수 있는 색 전체와 비슷합니다. 섞은 색은 어느 상자에도 없을 수 있다는 점이 합집합과 다른 점입니다. 물감은 음의 양을 쓸 수 없지만 벡터에는 음수배도 있다는 점에서 비유는 어긋납니다.

(3)은 이 합이 "알맞게 작다"는 것을 말합니다. $U$와 $W$를 담는 부분공간이라면 그 안에서 더하기에 닫혀 있으므로 $u + w$도 들어 있어야 하고, 그래서 합보다 작을 수 없습니다.

## 증명

:::idea
각 집합이 (S1)–(S3)을 만족하는지 확인한다. 교집합은 두 부분공간의 조건을 동시에 쓰면 되고, 합은 $u + w$ 꼴의 두 원소를 더할 때 $U$ 쪽끼리, $W$ 쪽끼리 모아서 더하면 된다. (3)은 $X$가 덧셈에 닫혀 있다는 것만 쓴다.
:::

:::hint
(1)은 $x$, $y \in U \cap W$를 잡고 $x + y$가 $U$에도 $W$에도 속하는지 각각 보세요.
:::

:::hint
(2)에서 $(u + w) + (u' + w') = (u + u') + (w + w')$임을 (V1), (V2)만으로 보여야 합니다. 어느 두 항을 맞바꾸는지 먼저 정하세요.
:::

:::proof
$U$, $W$가 부분공간이므로 [[subspace]]의 (S1)–(S3)이 $U$와 $W$에 각각 성립한다. 아래에서 영벡터는 $0_V$이다.

**(1)의 증명.** (S1): $0_V \in U$이고 $0_V \in W$이므로 $0_V \in U \cap W$이다. (S2): $x$, $y \in U \cap W$라 하자. $x$, $y \in U$이고 $U$가 (S2)를 만족하므로 $x + y \in U$이고, 같은 방법으로 $x$, $y \in W$이므로 $x + y \in W$이다. 따라서 $x + y \in U \cap W$이다. (S3): $x \in U \cap W$이고 $\alpha$가 실수라 하자. $x \in U$이므로 (S3)에 의해 $\alpha x \in U$이고, $x \in W$이므로 $\alpha x \in W$이다. 따라서 $\alpha x \in U \cap W$이다. $U \cap W \subseteq V$이므로 $U \cap W$는 $V$의 부분공간이다.

**(2)의 증명.** 먼저 $U \subseteq U + W$이고 $W \subseteq U + W$임을 보인다. $u \in U$이면 $0_V \in W$((S1))이고 $0_V$가 영벡터이므로 $u = u + 0_V$이다. 이것은 $U + W$의 원소이다. $w \in W$이면 $0_V \in U$이고 [[vector-space|(V1)]]에 의해 $w = w + 0_V = 0_V + w$이므로 $w \in U + W$이다.

$U + W$의 원소는 $V$의 원소 $u + w$이므로 $U + W \subseteq V$이다. (S1): $0_V \in U$, $0_V \in W$이고 $0_V + 0_V = 0_V$이다(영벡터의 정의에서 $x = 0_V$). 따라서 $0_V \in U + W$이다. (S2): $x$, $y \in U + W$라 하고 $x = u + w$, $y = u' + w'$($u$, $u' \in U$, $w$, $w' \in W$)로 쓴다. 다음 계산에서 각 등호의 근거는 괄호에 적는다.

$$\begin{aligned}
x + y &= (u + w) + (u' + w') \\
&= u + (w + (u' + w')) \quad \text{(V2)} \\
&= u + ((w + u') + w') \quad \text{(V2)} \\
&= u + ((u' + w) + w') \quad \text{(V1)} \\
&= u + (u' + (w + w')) \quad \text{(V2)} \\
&= (u + u') + (w + w') \quad \text{(V2)}
\end{aligned}$$

$U$가 (S2)를 만족하므로 $u + u' \in U$이고 $W$가 (S2)를 만족하므로 $w + w' \in W$이다. 따라서 $x + y$는 $U$의 원소와 $W$의 원소의 합이므로 $x + y \in U + W$이다. (S3): $x = u + w \in U + W$이고 $\alpha$가 실수라 하자. [[vector-space|(V7)]]에 의해 $\alpha x = \alpha u + \alpha w$이고 (S3)에 의해 $\alpha u \in U$, $\alpha w \in W$이므로 $\alpha x \in U + W$이다. 따라서 $U + W$는 $V$의 부분공간이다.

**(3)의 증명.** $X$가 $V$의 부분공간이고 $U \subseteq X$, $W \subseteq X$라 하자. $x \in U + W$이면 $x = u + w$인 $u \in U$, $w \in W$가 있고, $u \in U \subseteq X$, $w \in W \subseteq X$이다. $X$가 (S2)를 만족하므로 $u + w \in X$, 곧 $x \in X$이다. 따라서 $U + W \subseteq X$이다. $U \cup W \subseteq X$는 "$U$의 모든 원소와 $W$의 모든 원소가 $X$의 원소"이므로 $U \subseteq X$이고 $W \subseteq X$인 것과 같다. (2)에 의해 $U + W$ 자신이 $U$와 $W$를 모두 포함하는 부분공간이고, 방금 보인 것에 의해 그런 부분공간은 모두 $U + W$를 포함한다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³의 두 부분공간]
$U = \{x \in \mathbb{R}^3 : x_1 = 0\}$, $W = \{x \in \mathbb{R}^3 : x_2 = 0\}$이라 합시다. 둘이 부분공간임은 [[subspace]]의 (S1)–(S3)을 [[real-function-space|성분별 연산]]의 값마다 확인하면 됩니다. $U$의 경우, $(0, 0, 0)$의 첫째 값은 $0$이고, $x$, $y \in U$이면 $x + y$의 첫째 값은 $0 + 0 = 0$이며, $\alpha x$의 첫째 값은 $\alpha 0 = 0$입니다((K4), (K9)). $W$도 둘째 값에 대해 같습니다.

교집합: $x \in U \cap W$인 것은 $x_1 = 0$이고 $x_2 = 0$일 때이므로 $U \cap W = \{(0, 0, c) : c \in \mathbb{R}\}$이고, (1)에 의해 부분공간입니다. 합: $x = (a, b, c) \in \mathbb{R}^3$이면 $(0, b, c) \in U$이고 $(a, 0, 0) \in W$이며 $(0, b, c) + (a, 0, 0) = (0 + a, b + 0, c + 0) = (a, b, c)$입니다((K1), (K4)). 따라서 $U + W = \mathbb{R}^3$입니다. 가장 큰 공간이 나왔으므로 (3)의 "가장 작다"는 $X = \mathbb{R}^3$일 때 $U + W \subseteq X$라는 말입니다.
:::

:::counterexample[합을 합집합으로 바꾸면 안 된다]
위 예의 $U$, $W$에서 $(0, 1, 0) \in U$이고 $(1, 0, 0) \in W$이므로 $(0, 1, 0) + (1, 0, 0) = (1, 1, 0) \in U + W$입니다. 그러나 $(1, 1, 0)$의 첫째 값은 $1 \ne 0$이므로 $U$에 없고, 둘째 값이 $1 \ne 0$이므로 $W$에도 없어서 $(1, 1, 0) \notin U \cup W$입니다((K4)). 따라서 $U + W$와 $U \cup W$는 다른 집합이고, $U \cup W$는 덧셈에 닫혀 있지 않습니다.
:::

## 확인 질문

:::check[$U$, $W$가 $V$의 부분공간이고 $U \subseteq W$이면 $U + W = W$인가?]
그렇습니다. $U \cup W = W$이므로 $X = W$에 (3)을 적용하면 $U + W \subseteq W$이고, (2)에 의해 $W \subseteq U + W$입니다. 두 포함이 모두 성립하므로 $U + W = W$입니다.
:::

:::check[부분공간 $U$, $W$에 대하여 $U \cap W \subseteq U + W$인가?]
그렇습니다. $U \cap W$의 원소는 $U$의 원소이므로 $U \cap W \subseteq U$이고, (2)에 의해 $U \subseteq U + W$입니다. 따라서 $U \cap W \subseteq U + W$입니다.
:::
