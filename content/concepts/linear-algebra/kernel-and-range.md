---
title: 핵과 상
title_en: Kernel and Range
aliases: [핵, 상, 영공간, 치역, 선형사상의 핵, 선형사상의 상, kernel, null space, range, image of a linear map]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 선형사상 T의 핵은 T가 영벡터로 보내는 벡터 전체, 상은 T의 값 전체이다. 둘 다 부분공간이고, 생성하는 열의 상은 상을 생성하며, 전사는 상이 공역 전체인 것이고, 부분공간으로 제한한 T도 선형사상이다.
requires: [vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-map, linear-map-examples, function, image-and-preimage, injective-surjective-bijective, adding-or-removing-an-element, real-function-space, real-number-arithmetic, standard-basis]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 7절 Subspaces, 부분공간의 예 2, 3, p.31. 2장 7절 Fundamental subspaces of a matrix. Rank, 첫머리, p.59–60
    checked: original
    note: "출처는 p.31에서 선형사상 A : V → W 에 부분공간 두 개를 짝짓는다. 하나는 Av = 0 인 v ∈ V 전체인 null space 또는 kernel (Null A, Ker A)이고, 다른 하나는 어떤 v 에 대하여 w = Av 로 쓸 수 있는 w ∈ W 전체인 range Ran A 이다. 이 둘이 부분공간이라는 것은 확인하기 쉽다며 독자에게 맡긴다(p.31). 2장 p.59는 같은 정의를 Ker A = Null A := {v ∈ V : Av = 0}, Ran A = {w ∈ W : w = Av 인 v ∈ V 가 있다}로 다시 쓰고, p.60은 핵이 동차방정식 Ax = 0 의 해 집합이고 상이 Ax = b 가 해를 갖는 우변 b 전체라고 적는다. 이 항목의 (1)이 독자에게 맡긴 확인의 증명이다. 출처는 행렬 A 에 대해 Ran A 의 원소가 열의 일차결합이라서 Ran A 를 열공간(column space, Col A)이라고도 부른다고 적는데, 이 항목은 행렬을 다루지 않는다. 출처는 Ran 을 range 라 부르고, 이 사이트는 같은 집합을 '상'이라 부르며 function 항목의 치역, image-and-preimage 항목의 T(V)와 같은 집합이다. 출처는 선형사상을 A 로 쓰고 이 항목은 T 로 쓴다. 이 항목의 (2), (3), (4)와 번호는 이 사이트가 덧붙였다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이라 하자. $T$의 **핵**(kernel)과 **상**(range)을
$$\operatorname{Ker} T = \{v \in V : Tv = 0_W\}, \qquad \operatorname{Ran} T = \{Tv : v \in V\}$$
로 정한다. 곧 $\operatorname{Ker} T$는 $V$의 부분집합이고, $\operatorname{Ran} T$는 $W$의 부분집합으로 함수 $T$의 [[function|치역]]이며 [[image-and-preimage|상]]의 기호로는 $T(V)$이다. 따라서 $w \in \operatorname{Ran} T$인 것은 정확히 $Tv = w$인 $v \in V$가 있을 때이다.

다음이 성립한다.

1. $\operatorname{Ker} T$는 $V$의 [[subspace|부분공간]]이고, $\operatorname{Ran} T$는 $W$의 부분공간이다.
2. $v_1, \dots, v_n$이 길이 $n \ge 0$인 $V$의 열이면 $\{Tx : x \in \operatorname{span}(v_1, \dots, v_n)\} = \operatorname{span}(Tv_1, \dots, Tv_n)$이다. 오른쪽의 $\operatorname{span}$은 [[linear-map|선형사상]]에서 정한 $W$의 열 $Tv_1, \dots, Tv_n$의 [[linear-combination-and-span|생성]]이다. 특히 $v_1, \dots, v_n$이 $V$를 생성하면 $\operatorname{Ran} T = \operatorname{span}(Tv_1, \dots, Tv_n)$이다.
3. 함수 $T : V \to W$가 [[injective-surjective-bijective|전사]]인 것은 정확히 $\operatorname{Ran} T = W$일 때이다.
4. $U$가 $V$의 부분공간이면 $U$는 [[subspace|(P1)]]의 제한한 연산으로 벡터공간이고, $T$를 $U$로 [[adding-or-removing-an-element|제한]]한 함수 $T|_U : U \to W$는 이 벡터공간 $U$에서 $W$로의 선형사상이다.
:::

:::english
Let $V$, $W$ be vector spaces and $T : V \to W$ a linear map. The **kernel** and the **range** of $T$ are
$$\operatorname{Ker} T = \{v \in V : Tv = 0_W\}, \qquad \operatorname{Ran} T = \{Tv : v \in V\}.$$
That is, $\operatorname{Ker} T$ is a subset of $V$, and $\operatorname{Ran} T$ is a subset of $W$; it is the range of the function $T$, and in the notation for images it is $T(V)$. Hence $w \in \operatorname{Ran} T$ exactly when there is a $v \in V$ with $Tv = w$.

The following hold.

1. $\operatorname{Ker} T$ is a subspace of $V$, and $\operatorname{Ran} T$ is a subspace of $W$.
2. If $v_1, \dots, v_n$ is a sequence of $V$ of length $n \ge 0$, then $\{Tx : x \in \operatorname{span}(v_1, \dots, v_n)\} = \operatorname{span}(Tv_1, \dots, Tv_n)$. The $\operatorname{span}$ on the right is the span of the sequence $Tv_1, \dots, Tv_n$ of $W$ defined in the entry on linear maps. In particular, if $v_1, \dots, v_n$ spans $V$, then $\operatorname{Ran} T = \operatorname{span}(Tv_1, \dots, Tv_n)$.
3. The function $T : V \to W$ is surjective exactly when $\operatorname{Ran} T = W$.
4. If $U$ is a subspace of $V$, then $U$ is a vector space with the restricted operations of (P1), and the restriction $T|_U : U \to W$ of $T$ to $U$ is a linear map from this vector space $U$ to $W$.
:::

## 직관

선형사상을 믹서에 비유하면, $V$의 벡터는 넣는 재료이고 $W$의 벡터는 나오는 주스입니다. 핵은 넣어도 아무 맛도 나지 않는, 곧 영벡터가 나오는 재료의 모임이고, 상은 이 믹서로 만들 수 있는 주스 전체입니다. 재료 두 가지를 함께 넣으면 두 주스를 합친 것이 나오므로 만들 수 있는 주스를 합친 것도 만들 수 있고, 이것이 상이 덧셈에 닫혀 있다는 말입니다. 비유가 어긋나는 곳은 스칼라배입니다. 실제 믹서는 재료를 두 배로 넣을 때 맛이 정확히 두 배라는 보장이 없지만, 선형사상은 (T-배)에 의해 그것이 보장됩니다.

(1)의 증명은 부분공간의 세 조건 (S1)–(S3)에 (T1), (T-합), (T-배)를 하나씩 맞춰 보는 일입니다. (2)는 (T5)가 양쪽 포함을 모두 줍니다. 한쪽에서는 $V$의 일차결합이 같은 계수의 $W$의 일차결합으로 가고, 다른 쪽에서는 $W$의 일차결합이 같은 계수의 $V$의 일차결합의 상이 됩니다. 이 때문에 $V$를 생성하는 열 몇 개에서의 값만 알면 상 전체의 모양을 알 수 있습니다. (3)은 정의를 풀어 쓴 것이고, (4)는 선형이라는 조건이 정의역을 줄여도 그대로 남는다는 말입니다.

## 성질의 증명

:::proof
증명에서 (S1)–(S3), (P1)은 [[subspace]]의 것이고 (T1)–(T5), (T-합), (T-배)는 [[linear-map]]의 것이다. 생성의 정의는 [[linear-combination-and-span]]에서 쓴다.

**(1)의 증명.** $\operatorname{Ker} T \subseteq V$이고 $\operatorname{Ran} T \subseteq W$이다. $\operatorname{Ker} T$의 (S1): (T1)에 의해 $T0_V = 0_W$이므로 $0_V \in \operatorname{Ker} T$이다. (S2): $u, v \in \operatorname{Ker} T$이면 (T-합)에 의해 $T(u + v) = Tu + Tv = 0_W + 0_W = 0_W$이다. $0_W$가 영벡터이므로 $0_W + 0_W = 0_W$이다. 따라서 $u + v \in \operatorname{Ker} T$이다. (S3): $v \in \operatorname{Ker} T$이고 $\alpha$가 실수이면 (T-배)와 [[vector-space-basic-properties|(B4)]]에 의해 $T(\alpha v) = \alpha Tv = \alpha 0_W = 0_W$이다. 따라서 $\alpha v \in \operatorname{Ker} T$이다.

$\operatorname{Ran} T$의 (S1): (T1)에 의해 $0_W = T0_V$이고 $0_V \in V$이므로 $0_W \in \operatorname{Ran} T$이다. (S2): $x, y \in \operatorname{Ran} T$이면 $x = Tu$, $y = Tv$인 $u, v \in V$가 있고, (T-합)에 의해 $x + y = Tu + Tv = T(u + v)$이다. $u + v \in V$이므로 $x + y \in \operatorname{Ran} T$이다. (S3): $x = Tu \in \operatorname{Ran} T$이고 $\alpha$가 실수이면 (T-배)에 의해 $\alpha x = \alpha Tu = T(\alpha u)$이고 $\alpha u \in V$이므로 $\alpha x \in \operatorname{Ran} T$이다.

**(2)의 증명.** ($\subseteq$) $x \in \operatorname{span}(v_1, \dots, v_n)$이면 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이다. (T5)에 의해 $Tx = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이고, 이것은 열 $Tv_1, \dots, Tv_n$의 일차결합이므로 $Tx \in \operatorname{span}(Tv_1, \dots, Tv_n)$이다. ($\supseteq$) $y \in \operatorname{span}(Tv_1, \dots, Tv_n)$이면 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어 $y = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이다. $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이라 하면 $x \in \operatorname{span}(v_1, \dots, v_n)$이고 (T5)에 의해 $Tx = y$이다. 따라서 $y$는 왼쪽 집합에 속한다. 두 포함에 의해 두 집합은 같다. $n = 0$이어도 이 논증이 그대로 성립한다. (T5)가 $n = 0$에서도 성립하고, 두 생성이 각각 $\{0_V\}$, $\{0_W\}$이며 $T0_V = 0_W$이기 때문이다. 특히 $v_1, \dots, v_n$이 $V$를 생성하면 $\operatorname{span}(v_1, \dots, v_n) = V$이므로 왼쪽 집합은 $\{Tx : x \in V\} = \operatorname{Ran} T$이다.

**(3)의 증명.** 정의에 의해 $T : V \to W$가 전사인 것은 모든 $w \in W$에서 $Tv = w$인 $v \in V$가 있을 때이다. $\operatorname{Ran} T \subseteq W$는 언제나 성립하므로 $\operatorname{Ran} T = W$인 것은 정확히 $W \subseteq \operatorname{Ran} T$일 때이고, 이것은 모든 $w \in W$가 $\operatorname{Ran} T$에 속한다는 것, 곧 모든 $w \in W$에서 $Tv = w$인 $v \in V$가 있다는 것이다. 따라서 두 조건은 같다.

**(4)의 증명.** $U$가 부분공간이므로 (P1)에 의해 $U$는 제한한 연산 $+_U$, $\cdot_U$로 벡터공간이고 $u, v \in U$, 실수 $\alpha$에서 $u +_U v = u + v$, $\alpha \cdot_U v = \alpha v$이다. 제한의 정의에 의해 $T|_U$는 $U$에서 $W$로의 함수이고 모든 $u \in U$에서 $T|_U(u) = Tu$이다. (T-합): $u, v \in U$이면 $T|_U(u +_U v) = T(u + v) = Tu + Tv = T|_U(u) + T|_U(v)$이다. (T-배): 실수 $\alpha$와 $v \in U$에 대하여 $T|_U(\alpha \cdot_U v) = T(\alpha v) = \alpha Tv = \alpha T|_U(v)$이다. 따라서 $T|_U$는 선형사상이다. $\blacksquare$
:::

## 예시와 반례

:::example[영사상의 핵과 상]
$o : V \to W$가 [[linear-map-examples|영사상]]이라 합시다. 모든 $v \in V$에서 $ov = 0_W$이므로 $\operatorname{Ker} o = V$입니다. 상은 $\{ov : v \in V\}$이고 $V$에는 적어도 영벡터 $0_V$가 있으므로 $\operatorname{Ran} o = \{0_W\}$입니다. 이 둘은 각각 $V$와 $W$의 부분공간입니다((P4)).
:::

:::example[ℝ³의 둘째 값 읽기]
[[linear-map-examples]]의 (4)에서 $p_2 : \mathbb{R}^3 \to \mathbb{R}$은 각 $x$에서 값이 $x_2$인 선형사상입니다. $x \in \operatorname{Ker} p_2$인 것은 정확히 $x_2 = 0$일 때이므로 $\operatorname{Ker} p_2$는 $(a, 0, c)$ 꼴의 벡터 전체이고, (1)에 의해 $\mathbb{R}^3$의 부분공간입니다. 상은 $\mathbb{R}$ 전체입니다. 실수 $r$에 대하여 벡터 $(0, r, 0)$의 둘째 값이 $r$이므로 $r = p_2(0, r, 0) \in \operatorname{Ran} p_2$이기 때문입니다. (3)에 의해 $p_2 : \mathbb{R}^3 \to \mathbb{R}$은 전사입니다.
:::

:::example[생성하는 열의 상으로 상 구하기]
위의 $p_2$에서 [[standard-basis|표준기저]]의 (3)에 의해 $\mathbb{R}^3$의 모든 벡터는 $e_1, e_2, e_3$의 일차결합이므로 이 열은 $\mathbb{R}^3$을 생성합니다. (2)에 의해 $\operatorname{Ran} p_2 = \operatorname{span}(p_2 e_1, p_2 e_2, p_2 e_3)$이고, $e_1 = (1, 0, 0)$, $e_2 = (0, 1, 0)$, $e_3 = (0, 0, 1)$의 둘째 값이 $0$, $1$, $0$이므로 이 열은 $\mathbb{R}$의 벡터의 열 $0, 1, 0$입니다. 실수 $r$은 계수 $0, r, 0$으로 $r = 0 \cdot 0 + r \cdot 1 + 0 \cdot 0$이고 ((C4)의 $k = 2$) 따라서 $\operatorname{span}(0, 1, 0) = \mathbb{R}$입니다.
:::

:::counterexample[선형이 아니면 핵이 부분공간이 아닐 수 있다]
$T : \mathbb{R} \to \mathbb{R}$이 모든 $x$에서 $Tx = x + 1$인 함수라 하고, 선형사상의 핵과 같은 식으로 $K = \{x \in \mathbb{R} : Tx = 0\}$이라 합시다. $T0 = 0 + 1 = 1 \ne 0$이므로((K4)) $0 \notin K$이고, $\mathbb{R}$의 영벡터는 실수 $0$이므로 $K$는 (S1)을 만족하지 못해 부분공간이 아닙니다. 이 반례는 (1)에서 $T$가 선형사상이라는 가정을 뺄 수 없음을 보여 줍니다. 선형사상이면 (S1)은 (T1)이 보장합니다.
:::

## 확인 질문

:::check[$T : V \to W$가 선형사상이고 $Tv = w$일 때, $\operatorname{Ker} T$의 모든 원소 $k$에 대하여 $T(v + k) = w$임을 보여라.]
(T-합)에 의해 $T(v + k) = Tv + Tk$이고, $k \in \operatorname{Ker} T$이므로 $Tk = 0_W$입니다. 따라서 $T(v + k) = w + 0_W = w$입니다. $0_W$가 영벡터이기 때문입니다.
:::

:::check[$T : V \to W$가 선형사상이고 $v_1, v_2$가 $V$를 생성하는 열이며 $Tv_1 = Tv_2 = 0_W$이면 $\operatorname{Ran} T$는 무엇인가?]
$\{0_W\}$입니다. (2)에 의해 $\operatorname{Ran} T = \operatorname{span}(0_W, 0_W)$이고, 이 열의 일차결합은 $\alpha 0_W + \beta 0_W$입니다. [[vector-space-basic-properties|(B4)]]에 의해 $\alpha 0_W = 0_W$, $\beta 0_W = 0_W$이므로 이 합은 $0_W + 0_W = 0_W$입니다. 곧 $T$는 모든 벡터를 $0_W$로 보냅니다.
:::
