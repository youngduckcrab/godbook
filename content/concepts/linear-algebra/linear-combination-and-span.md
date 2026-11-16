---
title: 일차결합과 생성
title_en: Linear Combination and Span
aliases: [일차결합, 선형결합, 일차생성, 생성, 스팬, 계수, 생성하는 열, linear combination, span, linear span, generating system, spanning system, coefficients]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터의 열의 일차결합은 계수의 열을 곱해 더한 벡터이고, 일차결합 전체의 집합이 생성(span)이다. 생성은 부분공간이며 열의 항을 모두 포함하는 가장 작은 부분공간이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, 일차결합(첫 문단)과 Definition 2.5(generating system), pp.6–7; 1장 7절, 예 4(linear span), p.31
    checked: original
    note: "출처는 일차결합을 합의 꼴 α₁v₁ + … + α_pv_p 로 정의하고(p.6), Definition 2.5(p.7)에서 모든 벡터가 일차결합으로 표현될 때 벡터의 계(system)를 generating(spanning, complete) system이라 부른다. 1장 7절(p.31)은 벡터의 계의 일차생성(linear span) L{v₁, …, v_r}을 일차결합으로 표현되는 벡터 전체의 모임으로 정의하고, 그것이 부분공간임을 독자에게 맡긴다. 이 항목은 벡터의 모임을 열로 다루고(출처는 계와 집합을 섞어 쓴다), 길이 0 인 빈 열을 허용하며 그 생성이 {0_V} 라고 정한다. 일차결합과 생성의 정의, 성질 (L1)–(L4)와 증명은 이 사이트가 썼다. 읽은 곳(1장 2절, 7절)에서 생성이 열의 항을 모두 포함하는 가장 작은 부분공간이라는 진술은 찾지 못했다. '생성한다'는 말을 출처는 계가 V의 generating system이라고 쓴다. 출처가 span 을 L{⋯} 와 span{⋯} 로 쓰는 것을 이 항목은 span(⋯) 으로 쓴다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 [[finite-sum-of-vectors|벡터의 열]]이라 하자. 벡터 $x \in V$가 이 열의 **일차결합**(linear combination)인 것은 정확히 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어
$$x = \alpha_1 v_1 + \cdots + \alpha_n v_n$$
일 때이다(오른쪽은 [[finite-sum-of-vectors]]에서 정한, $i$번째 항이 $\alpha_i v_i$인 열의 합이다). 이때 $\alpha_1, \dots, \alpha_n$을 이 표현의 **계수**(coefficients)라 한다. 같은 벡터가 서로 다른 계수의 열로 표현될 수도 있다. 열 $v_1, \dots, v_n$의 **생성**(span)이란 이 열의 일차결합 전체의 집합
$$\operatorname{span}(v_1, \dots, v_n) = \{\alpha_1 v_1 + \cdots + \alpha_n v_n : \alpha_1, \dots, \alpha_n \text{은 길이 } n \text{인 실수의 열}\}$$
이다. 곧 $x \in \operatorname{span}(v_1, \dots, v_n)$인 것은 정확히 $x$가 이 열의 일차결합일 때이다. $n = 0$이면 길이 $0$인 실수의 열은 빈 열 하나뿐이고 그 합은 $0_V$이므로 $\operatorname{span}$은 $\{0_V\}$이다.

$U$가 $V$의 부분집합일 때, 열 $v_1, \dots, v_n$이 $U$를 **생성한다**(spans)는 것은 정확히 $\operatorname{span}(v_1, \dots, v_n) = U$일 때이다. 특히 열이 $V$를 생성하는 것은 정확히 $V$의 모든 벡터가 이 열의 일차결합일 때이다.

다음이 성립한다. $v_1, \dots, v_n$은 $V$의 벡터의 열이다.

- (L1) $\operatorname{span}(v_1, \dots, v_n)$은 $V$의 [[subspace|부분공간]]이다.
- (L2) $1 \le k \le n$인 모든 $k$에서 $v_k \in \operatorname{span}(v_1, \dots, v_n)$이다.
- (L3) $W$가 $V$의 부분공간이고 모든 $k$에서 $v_k \in W$이면 $\operatorname{span}(v_1, \dots, v_n) \subseteq W$이다. 따라서 $\operatorname{span}(v_1, \dots, v_n)$은 모든 항 $v_1, \dots, v_n$을 포함하는 부분공간 가운데 가장 작다. 곧 모든 항을 포함하는 부분공간이고(L1, L2), 모든 항을 포함하는 모든 부분공간에 포함된다.
- (L4) $n = 1$이면 $\operatorname{span}(v_1) = \{\alpha v_1 : \alpha \text{는 실수}\}$이다.
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 0$. A vector $x \in V$ is a **linear combination** of this sequence exactly when there is a sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n$ such that
$$x = \alpha_1 v_1 + \cdots + \alpha_n v_n$$
(the right-hand side is the sum, defined in the entry on finite sums of vectors, of the sequence whose $i$-th term is $\alpha_i v_i$). The $\alpha_1, \dots, \alpha_n$ are called the **coefficients** of this representation. The same vector may be represented by different sequences of coefficients. The **span** of the sequence $v_1, \dots, v_n$ is the set of all its linear combinations,
$$\operatorname{span}(v_1, \dots, v_n) = \{\alpha_1 v_1 + \cdots + \alpha_n v_n : \alpha_1, \dots, \alpha_n \text{ is a sequence of real numbers of length } n\}.$$
That is, $x \in \operatorname{span}(v_1, \dots, v_n)$ exactly when $x$ is a linear combination of this sequence. If $n = 0$, the only sequence of real numbers of length $0$ is the empty sequence, whose sum is $0_V$, so the span is $\{0_V\}$.

If $U$ is a subset of $V$, the sequence $v_1, \dots, v_n$ **spans** $U$ exactly when $\operatorname{span}(v_1, \dots, v_n) = U$. In particular, the sequence spans $V$ exactly when every vector of $V$ is a linear combination of this sequence.

The following hold, where $v_1, \dots, v_n$ is a sequence of vectors of $V$.

- (L1) $\operatorname{span}(v_1, \dots, v_n)$ is a subspace of $V$.
- (L2) For every $k$ with $1 \le k \le n$, we have $v_k \in \operatorname{span}(v_1, \dots, v_n)$.
- (L3) If $W$ is a subspace of $V$ and $v_k \in W$ for every $k$, then $\operatorname{span}(v_1, \dots, v_n) \subseteq W$. Hence $\operatorname{span}(v_1, \dots, v_n)$ is the smallest of the subspaces containing all the terms $v_1, \dots, v_n$: it is a subspace containing all the terms (L1, L2), and it is contained in every subspace containing all the terms.
- (L4) If $n = 1$, then $\operatorname{span}(v_1) = \{\alpha v_1 : \alpha \text{ is a real number}\}$.
:::

## 직관

벡터 $v_1, \dots, v_n$을 손잡이가 달린 $n$개의 막대로 생각해 봅시다. 막대 $v_i$에 손잡이 $\alpha_i$가 있어 어떤 실수로든 맞출 수 있고(음수도, $0$도), 맞춘 결과 $\alpha_i v_i$를 모두 더한 것이 일차결합입니다. 생성은 손잡이를 가능한 모든 값으로 맞추었을 때 얻는 벡터 전체입니다. 이 비유가 맞는 곳은 "$0$으로 맞추면 그 막대는 쓰지 않은 것이다"라는 점입니다. 틀리는 곳은 서로 다른 손잡이 값이 같은 결과를 줄 수 있다는 점으로, 아래 예시에서 이런 경우를 봅니다.

(L1)은 그렇게 얻은 벡터들의 모임이 닫혀 있다는 것입니다. 두 일차결합을 더해도, 실수를 곱해도, 계수만 바뀐 일차결합이 됩니다. (L2)와 (L3)는 생성이 "필요한 만큼만 있는" 부분공간이라는 말입니다. 항 $v_k$는 $k$번째 손잡이만 $1$로 두면 얻고, 항을 모두 담은 부분공간은 덧셈과 스칼라배에 닫혀 있으므로 일차결합도 모두 담습니다. 그래서 생성은 [[subspace-intersection-and-sum|부분공간의 합]]이 두 부분공간을 담는 가장 작은 부분공간이었던 것과 같은 방식으로 "가장 작은" 부분공간입니다.

"열이 $V$를 생성한다"는 $V$의 모든 벡터에 대해 계수가 적어도 하나는 있다는 말입니다. 그 계수가 하나뿐이라는 조건은 이 항목에 없고, 뒤에서 [[basis|기저]]를 정의할 때 붙습니다.

## 성질의 증명

:::remark[(L1)–(L4)의 증명]
$S = \operatorname{span}(v_1, \dots, v_n)$이라 쓴다. 길이 $n$인 실수의 열이 필요할 때는 각 자리의 값을 정해 [[real-function-space|(G)]]로 만든다.

(L1) [[subspace|(S1)]]. 모든 $i$에서 $\alpha_i = 0$인 열을 잡으면 [[finite-sum-of-vectors|(C3)]]에 의해 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$이다. 따라서 $0_V \in S$이다. (S2). $x$, $y \in S$라 하고 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$, $y = \beta_1 v_1 + \cdots + \beta_n v_n$이라 하자. $i$번째 값이 $\alpha_i + \beta_i$인 실수의 열을 잡으면 (C1)에 의해 $x + y = (\alpha_1 + \beta_1) v_1 + \cdots + (\alpha_n + \beta_n) v_n$이므로 $x + y \in S$이다. (S3). $x \in S$이고 $\gamma$가 실수이면, $i$번째 값이 $\gamma\alpha_i$인 실수의 열을 잡으면 (C2)에 의해 $\gamma x = (\gamma\alpha_1) v_1 + \cdots + (\gamma\alpha_n) v_n$이므로 $\gamma x \in S$이다. 따라서 $S$는 $V$의 부분공간이다. 여기서 $S \subseteq V$는 정의에서 나온다.

(L2) $1 \le k \le n$이라 하고 $\alpha_k = 1$, $i \ne k$이면 $\alpha_i = 0$인 실수의 열을 잡는다. (C4)에 의해 $\alpha_1 v_1 + \cdots + \alpha_n v_n = \alpha_k v_k = 1 v_k$이고, [[vector-space|(V5)]]에 의해 $1 v_k = v_k$이다. 따라서 $v_k \in S$이다.

(L3) $W$가 부분공간이고 모든 $v_k \in W$라 하자. $x \in S$를 잡아 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이라 하자. 각 $i$에서 $v_i \in W$이므로 (S3)에 의해 $\alpha_i v_i \in W$이다. 따라서 열 $\alpha_1 v_1, \dots, \alpha_n v_n$의 모든 항이 $W$에 속하고, [[finite-sum-of-vectors|(H1)]]에 의해 그 합 $x$는 $W$에 속한다. 따라서 $S \subseteq W$이다. 가장 작다는 말은 (L1), (L2)에서 $S$가 모든 항을 포함하는 부분공간이고, 방금 보인 것에서 모든 항을 포함하는 모든 부분공간에 포함된다는 뜻이다.

(L4) $n = 1$이면 길이 $1$인 실수의 열은 값 $\alpha_1$ 하나로 정해지고 어느 실수 $\alpha$로도 만들 수 있다. 길이 $1$인 열 $\alpha_1 v_1$의 합은 [[finite-sum-of-vectors|(H0)]]에 의해 $\alpha_1 v_1$이다. 따라서 $S$는 $\alpha v_1$ ($\alpha$는 실수) 꼴 벡터 전체이다.
:::

## 예시와 반례

:::example[ℝ²를 생성하는 두 벡터]
$\mathbb{R}^2$([[real-function-space]]의 성분별 연산)에서 $v_1 = (1, 0)$, $v_2 = (0, 1)$이라 하자. 임의의 $(a, b) \in \mathbb{R}^2$에 대하여 $a v_1 = (a \cdot 1, a \cdot 0) = (a, 0)$, $b v_2 = (b \cdot 0, b \cdot 1) = (0, b)$이고((K4), [[real-number-arithmetic|(K9)]]) 길이 $2$인 열의 합은 $V$의 덧셈이므로([[finite-sum-of-vectors|(H0)]]) $a v_1 + b v_2 = (a + 0, 0 + b) = (a, b)$입니다. 따라서 모든 벡터가 이 열의 일차결합이고, 이 열은 $\mathbb{R}^2$를 생성합니다.
:::

:::example[계수가 하나로 정해지지 않는 경우]
$\mathbb{R}^2$에서 $v_1 = (1, 2)$, $v_2 = (2, 4)$라 합시다. $\alpha v_1 + \beta v_2 = (\alpha + 2\beta,\ 2\alpha + 4\beta)$입니다(성분을 (K1), (K4)로 정리했습니다). 또 $2\alpha + 4\beta = 2(\alpha + 2\beta)$이므로((K3), (K2), (K7)) 이 벡터는 $L = \{x \in \mathbb{R}^2 : x_2 = 2x_1\}$의 원소입니다. 거꾸로 $(t, 2t) \in L$이면 $t v_1 + 0 v_2 = (t, 2t) + (0, 0) = (t, 2t)$입니다([[vector-space-basic-properties|(B3)]]). 따라서 $\operatorname{span}(v_1, v_2) = L$이고, 이것은 [[subspace]]의 예시에서 부분공간임을 확인한 집합입니다.

같은 벡터가 다른 계수로 표현됩니다. $(2, 4) = 2 v_1 + 0 v_2$이고 $(2, 4) = 0 v_1 + 1 v_2$입니다. 두 경우 모두 합을 계산하면 $(2, 4) + (0, 0)$, $(0, 0) + (2, 4)$로 $(2, 4)$입니다.
:::

:::counterexample[벡터 두 개가 ℝ³를 생성하지 못하는 경우]
$\mathbb{R}^3$에서 $v_1 = (1, 0, 0)$, $v_2 = (0, 1, 0)$이라 하면 $\alpha v_1 + \beta v_2 = (\alpha, 0, 0) + (0, \beta, 0) = (\alpha, \beta, 0)$이므로 일차결합의 셋째 값은 언제나 $0$입니다. $(0, 0, 1)$의 셋째 값은 $1 \ne 0$이므로 $(0, 0, 1) \notin \operatorname{span}(v_1, v_2)$입니다. 따라서 이 열은 $\mathbb{R}^3$를 생성하지 않습니다. (이 예는 이 두 벡터에 대한 것이고, 벡터 두 개가 $\mathbb{R}^3$를 생성할 수 없다는 일반적인 주장은 아닙니다.)
:::

:::counterexample[생성은 열의 항들의 모임이 아니다]
$\mathbb{R}^2$에서 길이 $1$인 열 $v_1 = (1, 0)$의 생성은 (L4)에 의해 $\{(\alpha, 0) : \alpha \text{는 실수}\}$입니다. $(2, 0) = 2 v_1$은 이 생성에 속하지만 열의 항 $(1, 0)$과 다릅니다. 반대로 $(1, 1)$은 둘째 값이 $0$이 아니므로 생성에 속하지 않습니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 $(3, 6)$과 $(1, 1)$은 각각 $\operatorname{span}((1, 2), (2, 4))$에 속하는가?]
$(3, 6)$은 속합니다. $3(1, 2) + 0(2, 4) = (3, 6) + (0, 0) = (3, 6)$입니다. $(1, 1)$은 속하지 않습니다. 예시에서 보았듯 이 생성의 원소는 둘째 값이 첫째 값의 $2$배인데, $(1, 1)$은 $1 \ne 2 \cdot 1$이기 때문입니다.
:::

:::check[$\mathbb{R}^2$의 길이 $1$인 열 $(0, 0)$의 생성은 무엇인가?]
$\{(0, 0)\}$입니다. (L4)에 의해 생성은 $\alpha(0, 0)$ ($\alpha$는 실수) 꼴 벡터 전체이고, [[vector-space-basic-properties|(B4)]]에 의해 $\alpha 0_V = 0_V$이기 때문입니다.
:::
