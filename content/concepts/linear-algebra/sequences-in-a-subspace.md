---
title: 부분공간 안의 열
title_en: Sequences in a Subspace
aliases: [부분공간의 기저, 부분공간에서의 일차결합, 부분공간에서의 일차독립, sequences in a subspace, basis of a subspace]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 부분공간 W 의 원소로 된 벡터의 열은 V 의 열이기도 하고 벡터공간 W 의 열이기도 하다. 이 열의 일차결합, 생성, 일차독립은 W 에서 계산하든 V 에서 계산하든 같고, W 의 기저인 것은 정확히 일차독립이고 생성이 W 일 때이다.
requires: [real-function-space, function, real-number-arithmetic, vector-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, dimension, mathematical-induction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "출처에 없음(검색한 범위). 관련: 1장 7절(Subspaces), p.30"
    checked: original
    note: "이 항목의 진술은 출처에 없다. 출처는 1장 7절(p.30)에서 부분공간이 V 에서 물려받은(inherited) 연산으로 벡터공간이 된다고 적고, 잘못될 수 있는 것은 연산의 결과가 부분공간에 속하지 않는 것뿐인데 부분공간의 정의가 이를 막는다고 적는다. 그 뒤 출처는 부분공간의 기저와 차원을 그대로 쓴다(2장 Theorem 5.5 등). 부분공간에서 계산한 일차결합과 일차독립이 V 에서와 같다는 진술은 책 전체에서 'inherited', 'restrict' 를 검색한 범위에서 찾지 못했다. (J1)–(J4)와 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $W$가 $V$의 [[subspace|부분공간]]이라 하자. $W$는 [[subspace|(P1)]]의 제한한 연산 $+_W$, $\cdot_W$에 관하여 벡터공간이다. $n \ge 0$은 정수이다.

**두 가지로 보는 열.** 모든 항이 $W$에 속하는 $V$의 [[finite-sum-of-vectors|벡터의 열]] $w : \{1, \dots, n\} \to V$는, 모든 값이 $W$에 속하므로 [[function|함수]]의 "공역은 선언하기 나름이다"에 의해 같은 함수 $w : \{1, \dots, n\} \to W$, 곧 벡터공간 $W$의 열이기도 하다. 거꾸로 벡터공간 $W$의 열은 $W \subseteq V$이므로 같은 방식으로 $V$의 열이고 모든 항이 $W$에 속한다. 이런 열 $w$와 실수의 열 $\alpha_1, \dots, \alpha_n$에 대하여, 벡터공간 $W$에서 계산한 합과 일차결합과 생성을 각각 $w_1 +_W \cdots +_W w_n$, $\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n$ ($i$번째 항이 $\alpha_i \cdot_W w_i$인 $W$의 열의 합), $\operatorname{span}_W(w_1, \dots, w_n)$으로 쓴다. 기호에 $W$를 붙이지 않은 것은 $V$에서 계산한 것이다.

$w_1, \dots, w_n$이 모든 항이 $W$에 속하는 $V$의 벡터의 열이면 다음이 성립한다.

- (J1) $w_1 +_W \cdots +_W w_n = w_1 + \cdots + w_n$이다. 또 모든 실수의 열 $\alpha_1, \dots, \alpha_n$에 대하여 $\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n = \alpha_1 w_1 + \cdots + \alpha_n w_n$이다.
- (J2) $\operatorname{span}_W(w_1, \dots, w_n) = \operatorname{span}(w_1, \dots, w_n)$이고, 이 집합은 $W$에 포함된다.
- (J3) 이 열이 벡터공간 $W$에서 [[linear-independence|일차독립]]인 것은 정확히 $V$에서 일차독립일 때이다.
- (J4) 이 열이 벡터공간 $W$의 [[basis|기저]]인 것은 정확히 이 열이 ($V$에서) 일차독립이고 $\operatorname{span}(w_1, \dots, w_n) = W$일 때이다.

따라서 벡터공간 $W$가 [[dimension|유한차원]]인 것은 정확히 모든 항이 $W$에 속하고 $\operatorname{span}(w_1, \dots, w_n) = W$인 $V$의 벡터의 열이 (어떤 길이 $n \ge 0$으로) 있을 때이고, $W$가 유한차원일 때 $\dim W = n$인 것은 정확히 모든 항이 $W$에 속하고 $V$에서 일차독립이며 $\operatorname{span}(w_1, \dots, w_n) = W$인 길이 $n$인 $V$의 벡터의 열이 있을 때이다.
:::

:::english
Let $V$ be a vector space and $W$ a subspace of $V$. Then $W$ is a vector space with respect to the restricted operations $+_W$ and $\cdot_W$ of (P1). Let $n \ge 0$ be an integer.

**One sequence, two views.** A sequence of vectors $w : \{1, \dots, n\} \to V$ of $V$ all of whose terms lie in $W$ is, since all its values lie in $W$, also the same function $w : \{1, \dots, n\} \to W$ by the remark on codomains in the entry on functions; that is, it is also a sequence of the vector space $W$. Conversely, a sequence of the vector space $W$ is in the same way a sequence of $V$, since $W \subseteq V$, and all its terms lie in $W$. For such a sequence $w$ and a sequence of real numbers $\alpha_1, \dots, \alpha_n$, the sum, the linear combination and the span computed in the vector space $W$ are written $w_1 +_W \cdots +_W w_n$, $\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n$ (the sum of the sequence of $W$ whose $i$-th term is $\alpha_i \cdot_W w_i$) and $\operatorname{span}_W(w_1, \dots, w_n)$. Symbols without $W$ refer to computations in $V$.

If $w_1, \dots, w_n$ is a sequence of vectors of $V$ all of whose terms lie in $W$, then the following hold.

- (J1) $w_1 +_W \cdots +_W w_n = w_1 + \cdots + w_n$. Moreover, for every sequence of real numbers $\alpha_1, \dots, \alpha_n$, $\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n = \alpha_1 w_1 + \cdots + \alpha_n w_n$.
- (J2) $\operatorname{span}_W(w_1, \dots, w_n) = \operatorname{span}(w_1, \dots, w_n)$, and this set is contained in $W$.
- (J3) The sequence is linearly independent in the vector space $W$ exactly when it is linearly independent in $V$.
- (J4) The sequence is a basis of the vector space $W$ exactly when it is linearly independent (in $V$) and $\operatorname{span}(w_1, \dots, w_n) = W$.

Consequently, the vector space $W$ is finite-dimensional exactly when there is a sequence of vectors of $V$ (of some length $n \ge 0$) all of whose terms lie in $W$ with $\operatorname{span}(w_1, \dots, w_n) = W$; and when $W$ is finite-dimensional, $\dim W = n$ exactly when there is a sequence of vectors of $V$ of length $n$, all of whose terms lie in $W$, that is linearly independent in $V$ and satisfies $\operatorname{span}(w_1, \dots, w_n) = W$.
:::

## 직관

부분공간 $W$를 벡터공간으로 볼 때 그 덧셈과 스칼라배는 $V$의 것을 그대로 쓴 것입니다([[subspace|(P1)]]). 그러니 $W$ 안에서 더하고 곱해 얻은 결과는 $V$에서 같은 계산을 한 결과와 같을 것입니다. 이 항목은 이 당연해 보이는 사실을 유한 합, 일차결합, 생성, 일차독립, 기저까지 확인합니다. 비유하자면, 큰 도시의 한 구역 안에서 잰 두 지점 사이의 거리는 도시 전체 지도에서 잰 거리와 같습니다. 비유와 다른 점은, 벡터공간에서는 계산 결과가 구역($W$) 밖으로 나가지 않는다는 것이 부분공간의 조건으로 보장된다는 것입니다.

이 확인이 필요한 까닭은 앞 항목들이 모두 "벡터공간 $V$"에 대해 진술되어 있기 때문입니다. "$W$의 기저", "$\dim W$"는 벡터공간 $W$에서의 말이므로, [[dimension|차원]]이나 [[independent-and-spanning-bounds|길이에 관한 정리]]를 $W$에 쓰고 그 결과를 $V$의 말로 옮기려면 (J1)–(J4) 같은 다리가 있어야 합니다.

## 증명

:::idea
(J1)은 열의 길이에 대한 귀납법으로, 합의 재귀 정의의 각 걸음에서 $+_W$가 $V$의 덧셈과 같은 값을 준다는 것을 쓴다. (J2), (J3)은 (J1)과 정의를 나란히 놓으면 나오고, (J4)는 벡터공간 $W$에서의 기저의 동치 조건에 (J2), (J3)을 넣는다.
:::

:::hint
$W$에서의 합의 재귀 정의에서, 처음 $n$개의 합이 $W$에 속해야 $+_W$에 넣을 수 있습니다. 귀납 가정이 그것까지 주는지 보세요.
:::

:::proof
(P1)에 의해, $u, v \in W$와 실수 $\alpha$에 대하여 $u +_W v = u + v$, $\alpha \cdot_W v = \alpha v$이고, $W$의 영벡터는 $0_W = 0_V$이다.

**(J1)** 먼저 합에 대하여, $n$에 대한 귀납법(시작점 $0$, [[mathematical-induction|수학적 귀납법]])으로 "모든 항이 $W$에 속하는 길이 $n$인 모든 $V$의 열 $u$에 대하여 $u_1 +_W \cdots +_W u_n = u_1 + \cdots + u_n$"을 보인다. $n = 0$이면 [[finite-sum-of-vectors|합의 정의]]에 의해 왼쪽은 $0_W$, 오른쪽은 $0_V$이고 둘은 같다. $n$에서 성립한다고 하고 $u$가 길이 $n + 1$인 그런 열이라 하자. $u$의 처음 $n$개도 모든 항이 $W$에 속하고, $W$의 열로 본 처음 $n$개와 $V$의 열로 본 처음 $n$개는 같은 함수이다. 귀납 가정에 의해 $s = u_1 +_W \cdots +_W u_n$은 $u_1 + \cdots + u_n$과 같고, $s \in W$이다($W$에서의 합은 $W$의 원소이다). 합의 재귀 정의를 $W$와 $V$에서 쓰면
$$u_1 +_W \cdots +_W u_{n+1} = s +_W u_{n+1} = s + u_{n+1} = (u_1 + \cdots + u_n) + u_{n+1} = u_1 + \cdots + u_{n+1}$$
이다. 귀납법의 원리에 의해 모든 $n \ge 0$에서 성립한다.

일차결합: $i$번째 항이 $\alpha_i \cdot_W w_i$인 $W$의 열과 $i$번째 항이 $\alpha_i w_i$인 $V$의 열은 모든 자리에서 값이 같으므로 같은 함수이고([[function|함수의 같음]]), 뒤의 열의 항은 [[subspace|(S3)]]에 의해 모두 $W$에 속한다. 방금 보인 것을 이 열에 쓰면 $\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n = \alpha_1 w_1 + \cdots + \alpha_n w_n$이다.

**(J2)** [[linear-combination-and-span|생성의 정의]]에 의해 $x \in \operatorname{span}_W(w)$인 것은 정확히 어떤 실수의 열 $\alpha$에 대하여 $x = \alpha_1 w_1 +_W \cdots +_W \alpha_n w_n$일 때이고, (J1)에 의해 이것은 정확히 $x = \alpha_1 w_1 + \cdots + \alpha_n w_n$일 때, 곧 $x \in \operatorname{span}(w)$일 때이다. 따라서 두 집합은 같다. $\operatorname{span}_W(w)$의 원소는 $W$에서의 합이므로 $W$의 원소이다.

**(J3)** [[linear-independence|일차독립의 정의]]에 의해, $w$가 $W$에서 일차독립인 것은 정확히 모든 실수의 열 $\alpha$에 대하여 "$\alpha_1 w_1 +_W \cdots +_W \alpha_n w_n = 0_W$이면 모든 $\alpha_k = 0$"일 때이다. (J1)과 $0_W = 0_V$에 의해 이 조건은 모든 $\alpha$에 대하여 "$\alpha_1 w_1 + \cdots + \alpha_n w_n = 0_V$이면 모든 $\alpha_k = 0$"과 같고, 이것은 $V$에서 일차독립이라는 것이다.

**(J4)** 벡터공간 $W$에서 [[basis-iff-independent-and-spanning|기저의 동치 조건]]을 쓰면, $w$가 $W$의 기저인 것은 정확히 $w$가 $W$에서 일차독립이고 $\operatorname{span}_W(w) = W$일 때이다. (J3)과 (J2)에 의해 이것은 정확히 $w$가 $V$에서 일차독립이고 $\operatorname{span}(w) = W$일 때이다.

**마지막 문단.** [[dimension|유한차원]]의 정의에 의해 벡터공간 $W$가 유한차원인 것은 정확히 $\operatorname{span}_W(w) = W$인 $W$의 열 $w$가 있을 때이다. 첫 문단("두 가지로 보는 열")에 의해 $W$의 열은 모든 항이 $W$에 속하는 $V$의 열과 같고, (J2)에 의해 $\operatorname{span}_W(w) = \operatorname{span}(w)$이다. 또 차원의 (2)에 의해 $\dim W = n$인 것은 정확히 $W$에 길이 $n$인 기저가 있을 때이고, (J4)에 의해 이것은 진술의 조건과 같다.
:::

## 예시와 반례

:::example[ℝ³의 한 평면]
$\mathbb{R}^3$에서 $W = \operatorname{span}((1, 1, 0), (0, 0, 1))$이라 하면 [[linear-combination-and-span|(N1)]]에 의해 $W$는 부분공간이고, (N2)에 의해 두 항은 $W$에 속합니다. $\alpha(1, 1, 0) + \beta(0, 0, 1) = (\alpha, \alpha, \beta)$가 $(0, 0, 0)$이면 $\alpha = \beta = 0$이므로 이 열은 $\mathbb{R}^3$에서 일차독립이고, 생성이 $W$인 것은 $W$의 정의 그대로입니다. 따라서 (J4)에 의해 이 열은 벡터공간 $W$의 기저이고, $W$는 유한차원이며 $\dim W = 2$입니다.
:::

:::counterexample[항이 W 밖에 있으면 W 의 열이 아니다]
$\mathbb{R}^2$에서 $W = \operatorname{span}((1, 1))$이라 합시다. 열 $(1, 0), (0, 1)$은 $\mathbb{R}^2$를 생성하므로 그 생성은 $W$를 포함하지만, $(1, 0)$이 $W$에 속하지 않으므로($\alpha(1, 1) = (\alpha, \alpha) = (1, 0)$이면 $\alpha = 1$이고 $\alpha = 0$이어서 (K4)의 $0 \ne 1$에 어긋납니다) 이 열은 $W$의 열이 아니고 $W$의 기저가 될 수 없습니다. (J4)는 모든 항이 $W$에 속하고 생성이 정확히 $W$인 열에 대한 것입니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 $W = \operatorname{span}((1, 2))$일 때 $(2, 4)$ 하나로 된 열은 벡터공간 $W$의 기저인가?]
그렇습니다. $(2, 4) = 2(1, 2) \in W$이고, $(2, 4) \ne (0, 0)$이므로 [[linear-independence|(I4)]]에 의해 일차독립입니다. 또 $\operatorname{span}((2, 4)) = \{\alpha(2, 4)\}$는 $W = \{\beta(1, 2)\}$와 같습니다($\alpha(2, 4) = (2\alpha)(1, 2)$이고 $\beta(1, 2) = (2^{-1}\beta)(2, 4)$). (J4)에 의해 기저이고 $\dim W = 1$입니다.
:::

:::check[모든 항이 $W$에 속하는 열 $w$가 $V$를 생성하면 $W = V$인가?]
그렇습니다. (J2)에 의해 $V = \operatorname{span}(w) \subseteq W$이고 $W \subseteq V$이므로 $W = V$입니다.
:::
