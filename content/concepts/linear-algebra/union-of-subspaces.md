---
title: 부분공간의 합집합
title_en: Union of Subspaces
aliases: [부분공간의 합집합은 부분공간인가, union of subspaces]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간의 두 부분공간 U, W의 합집합이 부분공간인 것은 정확히 한쪽이 다른 쪽에 포함될 때이다.
requires: [set, subset, set-operations, proof-by-contradiction, de-morgan-laws-logic, vector-space, vector-space-basic-properties, subspace, real-function-space, real-number-arithmetic]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 7절 Subspaces, 연습문제 7.3, 7.4, p.31
    checked: original
    note: "출처는 이 사실을 증명 없이 연습문제로 낸다. 7.3은 부분공간 X와 v ∉ X, x ∈ X에서 x + v ∉ X임을 보이라는 문제이고, 7.4는 7.3을 써서 X ∪ Y가 부분공간일 필요충분조건이 X ⊂ Y 또는 Y ⊂ X임을 보이라는 문제이다(출처의 ⊂는 이 사이트의 ⊆와 같은 뜻으로 읽었다). 이 항목은 7.4를 진술로 하고, 증명 안의 '보조 주장'이 7.3이다. 증명은 이 사이트가 썼고 7.3을 쓰는 방식은 출처의 안내를 따랐다. 출처의 X, Y 대신 U, W를 쓴다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 부분공간의 부분공간에 관한 사실을 진술에 더하고, 틀린 일반화와 출처 메모를 보완했다."
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $U$, $W$가 $V$의 [[subspace|부분공간]]이라 하자. [[set-operations|합집합]] $U \cup W$가 $V$의 부분공간인 것은 정확히 $U \subseteq W$이거나 $W \subseteq U$일 때이다.
:::

:::english
Let $V$ be a vector space and let $U$ and $W$ be subspaces of $V$. The union $U \cup W$ is a subspace of $V$ exactly when $U \subseteq W$ or $W \subseteq U$.
:::

## 직관

한쪽이 다른 쪽에 들어 있으면 합집합은 큰 쪽과 같으니 부분공간이라는 것은 당연합니다. 어려운 쪽은 반대입니다. 두 부분공간이 서로 상대방에 들어 있지 않으면, 한쪽에만 있는 벡터 $u$와 다른 쪽에만 있는 벡터 $w$가 하나씩 있습니다. 합집합이 부분공간이라면 $u + w$도 합집합에 있어야 하는데, 이것이 $U$에 있으면 $w$가 $U$에 있게 되고 $W$에 있으면 $u$가 $W$에 있게 되어 모순입니다.

평면에서 원점을 지나는 두 직선을 생각하면 그림이 그려집니다. 영벡터 $(0, 0)$을 원점이라 부르면, 원점을 지나는 서로 다른 두 직선에서 원점이 아닌 벡터를 하나씩 골라 더하면 두 직선 어디에도 없는 점이 나옵니다. 이 항목은 이것이 평면만의 일이 아니라고 말합니다. 한쪽에만 있는 벡터를 하나씩 고를 수 있으면(곧 어느 쪽도 다른 쪽에 들어 있지 않으면) 어느 벡터공간에서나 같은 일이 생깁니다.

## 증명

:::idea
($\Leftarrow$)는 합집합이 큰 쪽과 같다는 것이다. ($\Rightarrow$)는 귀류법으로 쓴다. 어느 쪽도 상대에 포함되지 않는다고 가정하면 한쪽에만 속한 벡터 $u$, $w$를 잡을 수 있고, $u + w$가 합집합에 속한다는 것과 모순됨을 보인다.
:::

:::hint
어느 쪽도 상대를 포함하지 않는다고 가정하고 $U$에는 있고 $W$에는 없는 $u$와 $W$에는 있고 $U$에는 없는 $w$를 잡으세요. $u + w$는 어디에 있을 수 있을까요.
:::

:::hint
$u + w \in U$라 하면 $w = (u + w) + (-u)$로 쓸 수 있습니다. 이 식이 성립하는지 [[vector-space|(V1)]], (V2)와 [[vector-space-basic-properties|(B2)]]로 확인하세요.
:::

:::proof
**($\Leftarrow$)** $U \subseteq W$라 하자. $x \in U \cup W$이면 $x \in U$이거나 $x \in W$인데, $x \in U$이면 $U \subseteq W$에 의해 $x \in W$이다. 어느 경우든 $x \in W$이므로 $U \cup W \subseteq W$이다. 거꾸로 $W \subseteq U \cup W$는 합집합의 정의에서 나오므로 $U \cup W = W$이다. $W$는 부분공간이므로 $U \cup W$도 부분공간이다. $W \subseteq U$인 경우는 $U$와 $W$의 역할을 바꾸면 같은 논증이 $U \cup W = U$를 준다.

**($\Rightarrow$)** $U \cup W$가 부분공간이라 하고, 결론의 부정을 가정하여 모순을 보인다([[proof-by-contradiction|귀류법]]). "$U \subseteq W$이거나 $W \subseteq U$"의 부정은 [[de-morgan-laws-logic|드 모르간 법칙]]에 의해 "$U \nsubseteq W$이고 $W \nsubseteq U$"이다.

**보조 주장.** $X$가 $V$의 부분공간이고 $x \in X$, $v \in V$, $v \notin X$이면 $x + v \notin X$이다. 이를 보이기 위해 $x + v \in X$라 하자. [[subspace]]의 (S3)에 의해 $(-1)x \in X$이고 [[vector-space-basic-properties|(B5)]]에 의해 $(-1)x = -x$이다. (S2)를 $x + v$와 $-x$에 적용하면 $(x + v) + (-x) \in X$이다. 그런데
$$
(x + v) + (-x) = (v + x) + (-x) = v + (x + (-x)) = v + 0_V = v
$$
이다. 차례로 (V1), (V2), [[vector-space-basic-properties|(B2)]]의 $x + (-x) = 0_V$, 영벡터의 성질이다. 따라서 $v \in X$이고 이것은 $v \notin X$에 모순이다. 그러므로 $x + v \notin X$이다.

$U \nsubseteq W$이므로 $u \in U$이고 $u \notin W$인 $u$가 있고, $W \nsubseteq U$이므로 $w \in W$이고 $w \notin U$인 $w$가 있다. $u$, $w \in U \cup W$이고 $U \cup W$가 (S2)를 만족하므로 $u + w \in U \cup W$이다. 보조 주장을 두 번 쓴다. $X = U$, $x = u$, $v = w$에 쓰면($u \in U$, $w \notin U$) $u + w \notin U$이다. $X = W$, $x = w$, $v = u$에 쓰면($w \in W$, $u \notin W$) $w + u \notin W$이고, (V1)에 의해 $u + w = w + u$이므로 $u + w \notin W$이다. 따라서 $u + w$는 $U$에도 $W$에도 속하지 않으므로 $u + w \notin U \cup W$이다. 이것은 $u + w \in U \cup W$에 모순이다. 그러므로 $U \subseteq W$이거나 $W \subseteq U$이다. $\blacksquare$
:::

## 예시와 반례

:::example[한쪽이 다른 쪽에 들어 있는 경우]
$V$의 부분공간 $W$와 $U = \{0_V\}$를 잡으면 [[subspace]]의 (P4)에 의해 둘 다 부분공간입니다. $0_V \in W$이므로 $U \subseteq W$이고 $U \cup W = W$입니다. 정리의 ($\Leftarrow$)가 말하는 대로 부분공간입니다. $W = V$인 경우도 모든 부분공간 $U$가 $U \subseteq V$이므로 $U \cup V = V$입니다.
:::

:::counterexample[ℝ²의 두 좌표축]
$U = \{x \in \mathbb{R}^2 : x_1 = 0\}$, $W = \{x \in \mathbb{R}^2 : x_2 = 0\}$이라 합시다. 둘 다 부분공간입니다. (S1)–(S3)을 값마다 확인하면 되기 때문입니다. $U$의 경우, 영벡터의 첫째 값은 $0$이고, 첫째 값이 $0$인 두 벡터의 합과 스칼라배의 첫째 값도 $0$입니다((K4), (K9)). $W$도 둘째 값에 대해 같습니다. $(0, 1) \in U$인데 둘째 값이 $1 \ne 0$이므로 $(0, 1) \notin W$이고, $(1, 0) \in W$인데 첫째 값이 $1 \ne 0$이므로 $(1, 0) \notin U$입니다((K4)). 따라서 $U \nsubseteq W$이고 $W \nsubseteq U$입니다. 합 $(0, 1) + (1, 0) = (0 + 1, 1 + 0) = (1, 1)$((K1), (K4))의 첫째 값도 둘째 값도 $1 \ne 0$이므로 $(1, 1) \notin U \cup W$입니다. $(0, 1)$과 $(1, 0)$은 $U \cup W$의 원소이므로 $U \cup W$는 덧셈에 닫혀 있지 않아 부분공간이 아닙니다. 증명의 ($\Rightarrow$)에서 $u + w \notin U \cup W$를 이끌어 낸 계산이 $u = (0, 1)$, $w = (1, 0)$일 때 실제로 일어난 것입니다.
:::

## 확인 질문

:::check[증명의 ($\Rightarrow$)에서 $u + w \notin W$를 보일 때 보조 주장을 $X = W$, $x = w$, $v = u$로 쓴다. 왜 $x = u$, $v = w$로 쓰면 안 되는가?]
보조 주장은 $x \in X$이고 $v \notin X$일 때만 쓸 수 있습니다. $X = W$이면 $u \notin W$이고 $w \in W$이므로 $x$ 자리에 $w$가, $v$ 자리에 $u$가 와야 합니다. 그러면 $w + u \notin W$를 얻고 (V1)로 $u + w \notin W$가 됩니다.
:::

:::check[$U$, $W$가 $V$의 부분공간이고 $U \cup W = V$이면 $U = V$이거나 $W = V$인가?]
그렇습니다. $U \cup W = V$는 [[subspace]]의 (P4)에 의해 $V$의 부분공간이므로 정리에 의해 $U \subseteq W$이거나 $W \subseteq U$입니다. $U \subseteq W$이면 $V = U \cup W = W$이고, $W \subseteq U$이면 $V = U$입니다.
:::
