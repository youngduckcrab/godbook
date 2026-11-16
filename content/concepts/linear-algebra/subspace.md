---
title: 부분공간
title_en: Subspace
aliases: [벡터 부분공간, 부분 벡터공간, 선형 부분공간, vector subspace, linear subspace]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간 V의 부분집합 W가 부분공간인 것은 정확히 영벡터를 포함하고 덧셈과 스칼라배에 닫혀 있을 때이다. 이때 W는 V의 연산을 제한한 것으로 그 자체가 벡터공간이고, 판정 조건은 더 줄여 쓸 수 있으며, W 안의 부분공간은 V의 부분공간과 같다.
requires: [set, subset, function, cartesian-product, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 7절 Subspaces, 번호 없는 정의와 바로 뒤의 설명, 예 1, p.30
    checked: original
    note: "출처는 부분공간을 '덧셈과 스칼라배에 닫혀 있는 공집합이 아닌 부분집합'으로 정의하고(조건 1, 2), 두 조건을 'αu + βv가 속한다'는 하나의 조건으로 바꿀 수 있다고 적는다(증명은 쓰지 않는다). 이어서 부분공간이 물려받은 연산으로 벡터공간이라는 것을 보이는데, 영벡터와 덧셈 역원이 속한다는 것을 0 = 0v, −v = (−1)v로 보이고 나머지 공리는 연산을 물려받으므로 성립한다고 적는다. 이 항목은 영벡터를 포함한다는 (S1)을 정의에 넣었고, 출처의 '공집합이 아니다'와 같은 조건임을 (P2)에서 증명한다. 출처가 말하는 '두 조건을 하나로 바꾼다'는 (P3)이다(공집합이 아니라는 조건과 함께 쓴다). (P1)은 출처가 증명하지 않고 넘어가는 부분을 채운 것으로, 제한한 연산이 W × W에서 W로, ℝ × W에서 W로의 함수라는 것과 (V1)–(V8)을 하나씩 확인했다. (P4)는 출처 예 1(자명한 부분공간과 공집합은 부분공간이 아니라는 설명)에 해당하고 증명은 이 사이트가 썼다. 출처는 예 2–4(핵, 상, 일차생성)도 들지만 이 항목은 다루지 않는다. (S1)–(S4)와 (P1)–(P4)의 번호, '제한한 연산'이라는 말은 출처에 나오지 않는 이 사이트의 것이고, '선형 부분공간'이라는 별칭도 출처에 나오지 않는다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $W$가 $V$의 [[subset|부분집합]]이라 하자. 영벡터는 [[vector-space-basic-properties|(B1)]]에서 정한 $0_V$이다. 아래에서 $u$, $v$는 $W$의 임의의 원소이고 $\alpha$, $\beta$는 임의의 실수이다.

$W$가 $V$의 **부분공간**(subspace)인 것은 정확히 다음 (S1)–(S3)이 모두 성립할 때이다.

- (S1) $0_V \in W$이다.
- (S2) $u + v \in W$이다. (덧셈에 닫혀 있다.)
- (S3) $\alpha v \in W$이다. (스칼라배에 닫혀 있다.)

다음 네 가지가 성립한다.

- (P1) $W$가 부분공간이면 $W$는 $V$의 연산을 $W$로 제한한 것으로 그 자체가 벡터공간이다. 곧 (S2)에 의해 각 $(u, v) \in W \times W$에 $W$의 원소 $u + v$가 하나씩 정해지고 (S3)에 의해 각 $(\alpha, v) \in \mathbb{R} \times W$에 $W$의 원소 $\alpha v$가 하나씩 정해지므로, [[real-function-space|(G)]]에 의해 이 값을 갖는 함수 $+_W : W \times W \to W$와 $\cdot_W : \mathbb{R} \times W \to W$가 있다(함수는 값으로 정해지므로 하나뿐이다). 이 두 함수를 $V$의 연산을 **$W$로 제한한 연산**이라 하고, 이 연산에 관하여 $W$는 벡터공간이다. 이때 $W$의 영벡터는 $0_V$이고 $v \in W$의 덧셈 역원은 $V$에서의 $-v$이다.
- (P2) $W$가 (S2)와 (S3)을 만족한다고 하자. 이때 $W$가 부분공간인 것은 정확히 $W \ne \emptyset$일 때이다. 곧 (S1)을 "$W$는 공집합이 아니다"로 바꿔도 같은 정의이다.
- (P3) $W$가 부분공간인 것은 정확히 다음 두 조건이 모두 성립할 때이다. (S1′) $W \ne \emptyset$이다. (S4) 모든 $u$, $v \in W$와 모든 실수 $\alpha$, $\beta$에 대하여 $\alpha u + \beta v \in W$이다. ($u$와 $v$가 같은 원소여도 된다.)
- (P4) $\{0_V\}$와 $V$는 $V$의 부분공간이다. 공집합은 부분공간이 아니다.
- (P5) $W$가 $V$의 부분공간이고 $U \subseteq W$라 하자. 이때 $U$가 (P1)의 벡터공간 $W$의 부분공간인 것은 정확히 $U$가 $V$의 부분공간일 때이다.
:::

:::english
Let $V$ be a vector space and $W$ a subset of $V$. The zero vector is the $0_V$ fixed in (B1). Below, $u$ and $v$ are arbitrary elements of $W$, and $\alpha$ and $\beta$ are arbitrary real numbers.

$W$ is a **subspace** of $V$ exactly when the following (S1)–(S3) all hold.

- (S1) $0_V \in W$.
- (S2) $u + v \in W$. ($W$ is closed under addition.)
- (S3) $\alpha v \in W$. ($W$ is closed under scalar multiplication.)

The following four statements hold.

- (P1) If $W$ is a subspace, then $W$ is itself a vector space with the operations of $V$ restricted to $W$. That is, by (S2) each $(u, v) \in W \times W$ is assigned the element $u + v$ of $W$, and by (S3) each $(\alpha, v) \in \mathbb{R} \times W$ is assigned the element $\alpha v$ of $W$; so by (G) there are functions $+_W : W \times W \to W$ and $\cdot_W : \mathbb{R} \times W \to W$ with these values (a function is determined by its values, so each is unique). We call these two functions the operations of $V$ **restricted to $W$**, and with respect to them $W$ is a vector space. The zero vector of $W$ is $0_V$, and the additive inverse of $v \in W$ is its additive inverse $-v$ in $V$.
- (P2) Suppose $W$ satisfies (S2) and (S3). Then $W$ is a subspace exactly when $W \ne \emptyset$. That is, (S1) may be replaced by "$W$ is not empty" without changing the definition.
- (P3) $W$ is a subspace exactly when both of the following hold. (S1′) $W \ne \emptyset$. (S4) For all $u$, $v \in W$ and all real numbers $\alpha$, $\beta$, we have $\alpha u + \beta v \in W$. ($u$ and $v$ may be the same element.)
- (P4) $\{0_V\}$ and $V$ are subspaces of $V$. The empty set is not a subspace.
- (P5) Let $W$ be a subspace of $V$ and let $U \subseteq W$. Then $U$ is a subspace of the vector space $W$ of (P1) exactly when $U$ is a subspace of $V$.
:::

## 직관

벡터공간에서는 벡터끼리 더하고 실수를 곱할 수 있습니다. 부분공간은 이 두 연산을 아무리 되풀이해도 **밖으로 나가지 않는** 부분집합입니다. 울타리를 친 놀이터에서 정해진 규칙대로만 움직이면 울타리 밖으로 나갈 수 없을 때, 그 놀이터는 그 자체로 하나의 작은 놀이터로 쓸 수 있습니다. (P1)이 말하는 것이 이것입니다. 연산을 제한해도 여덟 법칙은 그대로 남고, 새로 확인할 것은 영벡터와 덧셈 역원이 울타리 안에 있는지뿐인데, 그것은 (S1)과 (S3)이 보장합니다.

비유가 어긋나는 곳이 있습니다. 놀이터는 어디에 쳐도 되지만 부분공간은 영벡터를 반드시 포함해야 합니다. 평면 $\mathbb{R}^2$를 그림으로 그리면 영벡터 $(0, 0)$이 원점입니다. 아래 예시의 $L$(곧 $\{(t, 2t) : t \in \mathbb{R}\}$)처럼 원점을 지나는 직선 모양의 집합은 부분공간이고, 반례의 $M$처럼 원점을 지나지 않는 것은 부분공간이 아닙니다. 이 그림은 이해를 돕는 비유일 뿐이고 증명에 쓰이지 않습니다. (S1)은 (S3)에서 따라 나오는 것처럼 보이기도 합니다. $\alpha = 0$으로 두면 $0v = 0_V$가 나오기 때문입니다. 다만 그러려면 $W$에 벡터가 적어도 하나 있어야 하므로, (S1)을 "공집합이 아니다"로 바꿔도 같다는 것이 (P2)입니다. 공집합은 (S2)와 (S3)을 공허하게 만족하지만 영벡터가 없어서 부분공간이 아닙니다.

(S4)는 두 조건 (S2), (S3)을 한 줄로 합친 것입니다. 한 줄로 쓰면 확인할 것이 줄지만 $\alpha u + \beta v$에 $\alpha$, $\beta$를 바꿔 넣어 보는 한 단계가 더 필요합니다. $\alpha = \beta = 1$이면 덧셈, $\beta = 0$이면 스칼라배가 됩니다.

## 판정 조건과 제한한 연산의 증명

:::proof
**(P2)의 증명.** $W$가 (S2)와 (S3)을 만족한다고 하자. $W$가 부분공간이면 (S1)에 의해 $0_V \in W$이므로 $W$는 공집합이 아니다. 거꾸로 $W \ne \emptyset$이라 하자. $w \in W$를 하나 잡는다. (S3)에서 $\alpha = 0$, $v = w$로 두면 $0w \in W$이고, [[vector-space-basic-properties|(B3)]]에 의해 $0w = 0_V$이므로 $0_V \in W$이다. 이것이 (S1)이므로 $W$는 부분공간이다.

**(P3)의 증명.** ($\Rightarrow$) $W$가 부분공간이라 하자. (S1)에 의해 $0_V \in W$이므로 $W \ne \emptyset$이다. $u$, $v \in W$이고 $\alpha$, $\beta$가 실수이면 (S3)에 의해 $\alpha u \in W$이고 $\beta v \in W$이며, (S2)를 이 두 원소에 적용하면 $\alpha u + \beta v \in W$이다. ($\Leftarrow$) $W \ne \emptyset$이고 (S4)가 성립한다고 하자. 먼저 (S3)을 보인다. $v \in W$이고 $\alpha$가 실수이면 (S4)에서 $u = v$, $\beta = 0$으로 두어 $\alpha v + 0v \in W$를 얻는다. [[vector-space-basic-properties|(B3)]]에 의해 $0v = 0_V$이고, $0_V$는 영벡터이므로 $\alpha v + 0_V = \alpha v$이다. 따라서 $\alpha v \in W$이다. 다음으로 (S2)를 보인다. $u$, $v \in W$이면 (S4)에서 $\alpha = \beta = 1$로 두어 $1u + 1v \in W$를 얻고, [[vector-space|(V5)]]에 의해 $1u = u$, $1v = v$이므로 $u + v \in W$이다. 이제 $W$는 (S2), (S3)을 만족하고 공집합이 아니므로 (P2)에 의해 부분공간이다.

**(P4)의 증명.** $\{0_V\}$: (S1)은 $0_V \in \{0_V\}$이다. (S2): $u$, $v \in \{0_V\}$이면 $u = v = 0_V$이고, $0_V$가 영벡터이므로 $0_V + 0_V = 0_V$이다(영벡터의 정의 "모든 $x$에서 $x + 0_V = x$"에서 $x = 0_V$). 따라서 $u + v = 0_V \in \{0_V\}$이다. (S3): $v \in \{0_V\}$이면 $v = 0_V$이고 [[vector-space-basic-properties|(B4)]]에 의해 $\alpha v = \alpha 0_V = 0_V \in \{0_V\}$이다. $V$: $0_V \in V$이고, $V$의 두 연산이 $V$의 원소를 값으로 가지므로([[vector-space|벡터공간의 정의]]에서 덧셈과 스칼라배는 $V \times V$, $\mathbb{R} \times V$에서 $V$로의 함수이다) (S2), (S3)이 성립한다. 공집합: $0_V \in \emptyset$은 거짓이므로 (S1)이 성립하지 않는다.

**(P5)의 증명.** $W$가 부분공간이므로 (P1)에 의해 $W$는 제한한 연산 $+_W$, $\cdot_W$에 관하여 벡터공간이고, 그 영벡터는 $0_V$이며 $+_W$, $\cdot_W$의 값은 $V$에서의 값과 같다. $U \subseteq W$라 하자. 벡터공간 $W$의 부분집합 $U$가 $W$의 부분공간인 것은 (S1)–(S3)을 $W$에서 쓴 다음 세 조건이 성립할 때이다. (i) $W$의 영벡터 $0_V$가 $U$의 원소이다. (ii) $u$, $v \in U$이면 $u +_W v \in U$이다. (iii) $v \in U$이고 $\alpha$가 실수이면 $\alpha \cdot_W v \in U$이다. $u +_W v = u + v$이고 $\alpha \cdot_W v = \alpha v$이므로 (i)–(iii)은 $V$에서의 (S1)–(S3)과 글자 그대로 같은 조건이다. 따라서 $U$가 $W$의 부분공간인 것은 정확히 $U$가 $V$의 부분공간일 때이다.

**(P1)의 증명.** $W$가 부분공간이라 하자. 함수 $+_W$, $\cdot_W$가 있다는 것과 값이 $V$에서의 값과 같다는 것은 진술에서 보였다. $W$의 원소는 $V$의 원소이고 $+_W$, $\cdot_W$의 값은 $V$에서의 합과 스칼라배이므로, $W$의 원소 $u$, $v$, $w$와 실수 $\alpha$, $\beta$에 대하여 각 법칙의 양변을 $W$의 연산으로 계산한 값은 $V$의 연산으로 계산한 값과 같다. 예를 들어 $(u +_W v) +_W w$는 $V$의 원소 $(u + v) + w$이고 $u +_W (v +_W w)$는 $u + (v + w)$이다. 그러므로 $V$에서 성립하는 법칙은 같은 식으로 $W$에서 성립한다.

- (V1) $u +_W v = u + v = v + u = v +_W u$이다. 가운데 등호는 $V$에서의 (V1)이다.
- (V2) $(u +_W v) +_W w = (u + v) + w = u + (v + w) = u +_W (v +_W w)$이다. 가운데 등호는 $V$에서의 (V2)이다.
- (V5) $1 \cdot_W v = 1v = v$이다. 가운데 등호는 $V$에서의 (V5)이다.
- (V6) $(\alpha\beta) \cdot_W v = (\alpha\beta)v = \alpha(\beta v) = \alpha \cdot_W (\beta \cdot_W v)$이다. 가운데 등호는 (V6)이다.
- (V7) $\alpha \cdot_W (u +_W v) = \alpha(u + v) = \alpha u + \alpha v = (\alpha \cdot_W u) +_W (\alpha \cdot_W v)$이다. 가운데 등호는 (V7)이다.
- (V8) $(\alpha + \beta) \cdot_W v = (\alpha + \beta)v = \alpha v + \beta v = (\alpha \cdot_W v) +_W (\beta \cdot_W v)$이다. 가운데 등호는 (V8)이다.
- (V3) (S1)에 의해 $0_V \in W$이다. $v \in W$이면 $v \in V$이고 $0_V$가 $V$의 영벡터이므로 $v +_W 0_V = v + 0_V = v$이다. 따라서 $0_V$는 $W$의 영벡터이고 $W$에 영벡터가 있다.
- (V4) $z$를 $W$의 영벡터라 하자. $0_V \in W$이므로 $z$의 성질에서 $0_V +_W z = 0_V$이고, $0_V$가 $V$의 영벡터이고 $z \in V$이므로 $z +_W 0_V = z$이다. $V$에서 (V1)에 의해 $0_V + z = z + 0_V$이므로 $z = 0_V$이다. 곧 $W$의 영벡터는 $0_V$뿐이다. $v \in W$라 하면 (S3)에 의해 $(-1)v \in W$이고 [[vector-space-basic-properties|(B5)]]에 의해 $(-1)v = -v$이므로 $-v \in W$이다. [[vector-space-basic-properties|(B2)]]에 의해 $v + (-v) = 0_V$이므로 $w = -v$는 $w \in W$이고 $v +_W w = 0_V = z$이다.

따라서 (V1)–(V8)이 모두 성립하므로 $W$는 제한한 연산에 관하여 벡터공간이다. (V3)과 (V4)에서 영벡터가 $0_V$임을, $v +_W (-v) = 0_V$이므로 [[vector-space-basic-properties|(B2)]]의 유일성에 의해 $W$에서 $v$의 덧셈 역원이 $V$에서의 $-v$임을 보았다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점에서 값이 0인 함수들]
$X$가 집합이고 $p \in X$라 하고, $W_p = \{f \in \mathbb{R}^X : f(p) = 0\}$이라 합시다. ([[real-function-space]]의 $\mathbb{R}^X$와 영함수 $o$를 씁니다.) (S1): $o(p) = 0$이므로 $o \in W_p$입니다. (S2): $f$, $g \in W_p$이면 $(f + g)(p) = f(p) + g(p) = 0 + 0 = 0$입니다((K4)). (S3): $f \in W_p$이고 $\alpha$가 실수이면 $(\alpha f)(p) = \alpha f(p) = \alpha 0 = 0$입니다((K9)). 따라서 $W_p$는 $\mathbb{R}^X$의 부분공간입니다. $X = \{1, 2, 3\}$이고 $p = 1$이면 $\mathbb{R}^3$의 원소 가운데 첫째 값이 $0$인 것, 곧 $(0, b, c)$ 꼴이 모인 부분공간입니다.
:::

:::example[ℝ²의 한 직선]
$L = \{x \in \mathbb{R}^2 : x_2 = 2x_1\}$이라 합시다. (S1): $2 \cdot 0 = 0$이므로((K9)) $(0, 0) \in L$입니다. (S2): $x$, $y \in L$이면 $x_2 + y_2 = 2x_1 + 2y_1 = 2(x_1 + y_1)$이고((K3)) $x + y$의 두 값이 $x_1 + y_1$, $x_2 + y_2$이므로 $x + y \in L$입니다. (S3): $x \in L$이고 $\alpha$가 실수이면 $\alpha x_2 = \alpha(2x_1) = (\alpha 2)x_1 = (2\alpha)x_1 = 2(\alpha x_1)$이므로((K2), (K1), (K2)) $\alpha x \in L$입니다. 따라서 $L$은 부분공간입니다.
:::

:::counterexample[영벡터가 없으면 부분공간이 아니다]
$M = \{x \in \mathbb{R}^2 : x_1 + x_2 = 1\}$이라 합시다. $\mathbb{R}^2$의 영벡터 $(0, 0)$에서 $0 + 0 = 0$이고 $0 \ne 1$이므로((K4)) $(0, 0) \notin M$이어서 (S1)이 성립하지 않습니다. 그래서 $M$은 부분공간이 아닙니다. (S4)로 보면 이렇습니다. $M$은 공집합이 아니고 $(1, 0) \in M$인데($1 + 0 = 1$), $\alpha = \beta = 0$으로 두면 $0(1, 0) + 0(1, 0)$의 두 값이 $0 \cdot 1 + 0 \cdot 1 = 0$, $0 \cdot 0 + 0 \cdot 0 = 0$이므로 이 벡터는 $(0, 0) \notin M$입니다.
:::

:::counterexample[공집합은 (S2), (S3)만으로는 걸러지지 않는다]
공집합은 "$u$, $v \in \emptyset$이면 …"이라는 조건이 공허하게 참이므로 (S2), (S3), 그리고 (S4)를 만족합니다. 영벡터가 없다는 것, 곧 (S1)이 성립하지 않는다는 것만이 공집합을 부분공간에서 제외합니다. (P3)에서 "공집합이 아니다"라는 조건을 빼면 안 되는 까닭입니다.
:::

## 확인 질문

:::check[$W$가 $V$의 부분공간이고 $u$, $v \in W$이면 $u - v \in W$인가?]
그렇습니다. $u - v$는 $u + (-v)$이고, [[vector-space-basic-properties|(B5)]]에 의해 $-v = (-1)v$입니다. (S3)에서 $(-1)v \in W$이므로 (S2)를 $u$와 $(-1)v$에 적용하면 $u + (-v) \in W$입니다.
:::

:::check[$\mathbb{R}^2$의 부분집합 $A = \{x \in \mathbb{R}^2 : x_1 x_2 = 0\}$은 부분공간인가?]
아닙니다. $(1, 0) \in A$이고($1 \cdot 0 = 0$) $(0, 1) \in A$이지만($0 \cdot 1 = 0$, (K9)), 합 $(1, 0) + (0, 1) = (1, 1)$에서 $1 \cdot 1 = 1 \ne 0$이므로((K4)) $(1, 1) \notin A$입니다. (S2)가 성립하지 않습니다.
:::
