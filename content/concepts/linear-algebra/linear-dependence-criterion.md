---
title: 일차종속의 판정
title_en: Criterion for Linear Dependence
aliases: [일차종속 판정, 일차종속인 것과 나머지의 일차결합, criterion for linear dependence, dependent iff one vector is a combination of the others]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 길이 n ≥ 1 인 벡터의 열이 일차종속인 것은 정확히 어떤 항이 그 항을 지운 열의 일차결합일 때이다. 따라서 일차독립인 것은 어느 항도 나머지 항들의 일차결합이 아닐 때이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, negation-of-quantified-statements, contrapositive-law]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Proposition 2.6, p.9
    checked: original
    note: "출처의 Proposition 2.6 은 벡터의 계가 일차종속인 것은 정확히 어떤 벡터 v_k 가 나머지 벡터들의 일차결합으로 표현될 때(식 (2.1))라고 한다. 출처는 계의 길이 p 에 조건을 달지 않는다. p = 1 이면 오른쪽의 합이 항이 없는 합인데 출처는 이 경우를 따로 적지 않는다. 출처의 증명은 0 이 아닌 계수 α_k 로 나누고 나머지 항을 우변으로 옮기며 합의 계산을 설명 없이 쓴다. 이 항목은 열의 길이 n ≥ 1 에서 '항을 지운 열'(길이 n − 1, n = 1 이면 빈 열)을 쓰고, n = 1 이면 빈 열의 일차결합이 0_V 뿐이라는 것으로 (I4)와 맞는다. 합의 계산은 (C5), (C2)로 한다. 진술의 마지막 문장(일차독립일 조건)과 예시와 반례와 확인 질문은 이 사이트가 썼다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 1$인 벡터의 열이라 하자. $k \in \{1, \dots, n\}$에 대하여 $c^{(k)}$를 $k$번째 항을 [[finite-sum-of-vectors|지운 열]](길이 $n - 1$. $n = 1$이면 빈 열)이라 한다. 다음이 성립한다.

1. 열 $v_1, \dots, v_n$이 [[linear-independence|일차종속]]인 것은 정확히 어떤 $k \in \{1, \dots, n\}$에 대하여 $v_k$가 열 $c^{(k)}$의 [[linear-combination-and-span|일차결합]]일 때이다. 곧 $v_k \in \operatorname{span}(c^{(k)})$이다. ($n = 1$이면 빈 열의 일차결합은 $0_V$뿐이므로 이 조건은 $v_1 = 0_V$이다.)
2. 따라서 열이 일차독립인 것은 정확히 모든 $k$에 대하여 $v_k$가 $c^{(k)}$의 일차결합이 아닐 때이다.
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 1$. For $k \in \{1, \dots, n\}$, let $c^{(k)}$ be the sequence with the $k$-th term deleted (of length $n - 1$; the empty sequence if $n = 1$). The following hold.

1. The sequence $v_1, \dots, v_n$ is linearly dependent exactly when there is some $k \in \{1, \dots, n\}$ such that $v_k$ is a linear combination of the sequence $c^{(k)}$, that is, $v_k \in \operatorname{span}(c^{(k)})$. (If $n = 1$, the only linear combination of the empty sequence is $0_V$, so this condition says $v_1 = 0_V$.)
2. Hence the sequence is linearly independent exactly when, for every $k$, $v_k$ is not a linear combination of $c^{(k)}$.
:::

## 직관

일차종속은 "계수를 하나라도 $0$이 아니게 쓰고 $0_V$로 돌아오는 방법이 있다"였습니다. 그 계수가 $0$이 아닌 막대 $v_k$를 한쪽으로 옮기면 $v_k$는 나머지 막대로 만들 수 있는 벡터가 됩니다. 반대로 어떤 막대가 나머지로 만들어지면 그 막대에 계수 $-1$을 주어 $0_V$로 돌아오는 방법을 얻습니다. 곧 일차종속은 "겹치는 막대가 있다"는 것입니다.

주의할 점은 "어떤 $k$"입니다. 일차종속인 열에서 모든 항이 나머지의 일차결합이어야 하는 것은 아닙니다. 아래 반례에서 한 항은 나머지의 일차결합이 아니지만 열은 일차종속입니다. 증명은 $\alpha_k$로 나누어야 하므로 계수가 $0$이 아닌 자리를 $k$로 잡습니다. 반례의 $v_1$은 $0_V$를 만드는 어떤 계수의 열에서도 계수가 $0$이어서 이렇게 고를 수 없는 자리입니다.

## 증명

:::idea
($\Rightarrow$) $0_V$가 되는 계수의 열에서 $0$이 아닌 계수를 가진 자리 $k$를 잡고, [[finite-sum-of-vectors|(C5)]]로 그 항을 나머지와 떼어 놓아 $\alpha_k$로 나눈다. ($\Leftarrow$) $v_k$를 나머지의 일차결합으로 쓰고 $v_k$의 계수로 $-1$을 끼워 넣는다.
:::

:::hint
(C5)의 둘째 주장은 임의의 계수의 열 $\alpha$에서 $k$번째 자리를 떼어 낸 계수의 열 $\gamma$로 $\alpha_1 v_1 + \cdots + \alpha_n v_n = (\gamma_1 c_1 + \cdots) + \alpha_k v_k$를 줍니다. 이 값이 $0_V$이면 $\alpha_k v_k$는 앞 묶음의 덧셈 역원입니다.
:::

:::proof
$n$을 $(n - 1) + 1$로 보고 [[finite-sum-of-vectors|(C5)]]를 쓴다. 아래에서 $c = c^{(k)}$로 쓴다.

($\Rightarrow$) 열이 일차종속이라 하자. 정의에 의해 길이 $n$인 실수의 열 $\alpha$가 있어 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$이고 $\alpha_k \ne 0$인 $k$가 있다. 이 $k$를 잡고 $\gamma$를 $\alpha$에서 $k$번째 항을 지운 길이 $n - 1$인 열이라 하자. (C5)의 둘째 주장에 의해 $0_V = (\gamma_1 c_1 + \cdots + \gamma_{n-1} c_{n-1}) + \alpha_k v_k$이다. $u = \gamma_1 c_1 + \cdots + \gamma_{n-1} c_{n-1}$이라 쓰면 $u + \alpha_k v_k = 0_V$이므로 [[vector-space-basic-properties|(B2)]]의 유일성에 의해 $\alpha_k v_k = -u$이고, [[vector-space-basic-properties|(B5)]]에 의해 $-u = (-1)u$이다. [[finite-sum-of-vectors|(C2)]]에 의해 $(-1)u = ((-1)\gamma_1) c_1 + \cdots + ((-1)\gamma_{n-1}) c_{n-1}$이다. $\alpha_k \ne 0$이므로 역수 $\alpha_k^{-1}$이 있다([[real-number-arithmetic|(K6)]]). 양변에 $\alpha_k^{-1}$를 곱하면, 왼쪽은 [[vector-space|(V6)]]과 (V5), [[real-number-arithmetic|(K1)]], (K6)에 의해 $\alpha_k^{-1}(\alpha_k v_k) = (\alpha_k^{-1}\alpha_k) v_k = 1 v_k = v_k$이고, 오른쪽은 (C2)에 의해 $\alpha_k^{-1}\bigl((-1)\gamma_1\bigr) c_1 + \cdots + \alpha_k^{-1}\bigl((-1)\gamma_{n-1}\bigr) c_{n-1}$이다. 따라서 $v_k = \beta_1 c_1 + \cdots + \beta_{n-1} c_{n-1}$ ($\beta_i = \alpha_k^{-1}\bigl((-1)\gamma_i\bigr)$)이므로 $v_k$는 $c$의 일차결합이다. ($n = 1$이면 $c$, $\gamma$, $\beta$가 빈 열이고 같은 계산이 $v_1 = 0_V$를 준다.)

($\Leftarrow$) 어떤 $k$에서 $v_k = \beta_1 c_1 + \cdots + \beta_{n-1} c_{n-1}$이라 하자. $\beta$의 $k$번째 자리에 $-1$을 끼워 넣은 길이 $n$인 실수의 열을 $\alpha$라 하자. (C5)에 의해 $\alpha_1 v_1 + \cdots + \alpha_n v_n = (\beta_1 c_1 + \cdots + \beta_{n-1} c_{n-1}) + (-1) v_k = v_k + (-1)v_k$이고, (B5)에 의해 $(-1)v_k = -v_k$이므로 (B2)에 의해 이것은 $0_V$이다. $\alpha_k = -1$이다. $-1 = 0$이라면 $1 = 1 + 0 = 1 + (-1) = 0$이 되어 (K4)의 $0 \ne 1$에 어긋나므로 $\alpha_k \ne 0$이다. 따라서 열은 일차종속이다.

2는 1의 두 방향 조건문 각각의 대우([[contrapositive-law]])를 쓰면, 열이 일차종속이 아닌 것은 정확히 "어떤 $k$에 대하여 $v_k \in \operatorname{span}(c^{(k)})$"가 거짓일 때이다. [[negation-of-quantified-statements|한정 기호의 부정]]에 의해 그 부정은 "모든 $k$에 대하여 $v_k \notin \operatorname{span}(c^{(k)})$"이고, 일차종속이 아닌 것이 일차독립이다.
:::

## 예시와 반례

:::example[ℝ²의 (1, 2), (2, 4)]
$v_1 = (1, 2)$, $v_2 = (2, 4)$일 때 $v_2 = 2 v_1$이므로($2(1, 2) = (2, 4)$) $v_2$는 $c^{(2)} = (v_1)$의 일차결합이고, 열은 일차종속입니다. 증명의 ($\Leftarrow$)을 따라 $v_2$의 계수 $-1$을 넣으면 계수의 열 $(2, -1)$이고 $2(1, 2) + (-1)(2, 4) = (2, 4) + (-2, -4) = (0, 0)$입니다.
:::

:::counterexample["어떤 $k$"를 "모든 $k$"로 바꿀 수 없다]
$\mathbb{R}^2$의 열 $v_1 = (1, 0)$, $v_2 = (0, 1)$, $v_3 = (0, 2)$는 $v_3 = 2 v_2$이므로 일차종속입니다. 그러나 $v_1$은 $c^{(1)} = (0, 1), (0, 2)$의 일차결합이 아닙니다. $\alpha(0, 1) + \beta(0, 2) = (0, \alpha + 2\beta)$의 첫째 값은 $0$인데 $v_1$의 첫째 값은 $1 \ne 0$이기 때문입니다. 따라서 일차종속인 열의 모든 항이 나머지의 일차결합인 것은 아닙니다.
:::

## 확인 질문

:::check[계수의 열 $(2, -4, 2)$가 $\mathbb{R}^2$의 열 $(1, 1), (1, 2), (1, 3)$에서 $0_V$를 준다. 셋째 항을 나머지의 일차결합으로 써라.]
확인하면 $2(1, 1) + (-4)(1, 2) + 2(1, 3) = (2, 2) + (-4, -8) + (2, 6) = (-2, -6) + (2, 6) = (0, 0)$입니다. 증명의 ($\Rightarrow$)을 따라 $k = 3$, $\alpha_3 = 2 \ne 0$으로 잡으면 $\beta_i = 2^{-1}\bigl((-1)\gamma_i\bigr)$이고 $\gamma = (2, -4)$이므로 $\beta = (-1, 2)$입니다. 실제로 $(-1)(1, 1) + 2(1, 2) = (-1, -1) + (2, 4) = (1, 3)$입니다.
:::

:::check[길이 $1$인 열 $v_1 = (0, 0)$에 이 판정을 적용하면 무엇을 말하는가?]
$n = 1$이면 $c^{(1)}$은 빈 열이고 그 일차결합은 $0_V$뿐입니다. 따라서 열이 일차종속인 것은 $v_1 = (0, 0)$일 때이고, 이 열은 일차종속입니다. 이것은 [[linear-independence|(I4)]]와 같은 결론입니다.
:::
