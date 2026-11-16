---
title: 기저는 일차독립이고 생성하는 열이다
title_en: A Basis Is a Linearly Independent Spanning Sequence
aliases: [기저의 동치 조건, 기저의 특징, basis iff independent and spanning, characterization of a basis]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터의 열이 V 의 기저인 것은 정확히 그 열이 일차독립이고 V 를 생성할 때이다. 유일성은 일차독립에, 존재는 생성에 대응한다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Proposition 2.7, p.9–10
    checked: original
    note: "출처의 Proposition 2.7 은 벡터의 계가 기저인 것은 정확히 일차독립이고 생성하는(complete) 계일 때라고 한다. 출처는 기저가 일차독립이고 생성한다는 것을 '이미 안다'며 앞의 논증(0 의 표현이 유일하므로 자명한 일차결합뿐)으로 두고, 역방향에서 두 표현의 차를 합의 계산(Σ(α_k − α̃_k)v_k = Σα_kv_k − Σα̃_kv_k)으로 쓴다. 이 항목은 이 계산을 finite-sum-of-vectors 의 (C6)으로, 0 의 표현을 (C3)으로 인용해 증명한다. 증명의 구성은 출처와 같다. 많은 교재가 기저를 일차독립이고 생성하는 계로 정의한다는 것은 출처의 Remark(p.10)에 적혀 있다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 겹치는 번호, 뒤 정리가 인용할 계수 끼워 넣기와 차의 규칙, 재귀 정의의 문구, 직관의 틀린 일반화를 보완했다."
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 벡터의 열이라 하자. 이 열이 $V$의 [[basis|기저]]인 것은 정확히 이 열이 [[linear-independence|일차독립]]이고 $V$를 [[linear-combination-and-span|생성]]할 때이다.
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 0$. This sequence is a basis of $V$ exactly when it is linearly independent and spans $V$.
:::

## 직관

기저의 정의는 두 말을 하나로 합쳐 놓았습니다. "모든 벡터가 표현된다"(존재)와 "표현은 하나뿐이다"(유일성)입니다. 이 정리는 존재가 곧 생성이고, 유일성은 일차독립과 같다고 말합니다. 유일성이 일차독립과 같은 까닭은 두 표현의 차가 $0_V$의 표현이 되기 때문입니다. 같은 벡터의 서로 다른 두 표현이 있으면 차이로 자명하지 않은 $0_V$의 표현이 생기고, 거꾸로 자명하지 않은 $0_V$의 표현이 있으면 $0_V$ 자신이 자명한 표현과 그 표현의 두 가지로 쓰입니다.

그래서 기저를 "일차독립이고 생성하는 열"로 정의하는 교재도 있고, 이 사이트는 존재와 유일성으로 정의했습니다. 어느 쪽에서 출발해도 같은 대상이라는 것이 이 정리입니다.

## 증명

:::idea
($\Rightarrow$) $0_V$의 표현이 자명한 것 하나뿐임을 유일성에서 얻는다. ($\Leftarrow$) 같은 벡터의 두 표현의 차를 계산해 $0_V$의 표현으로 만들고 일차독립을 쓴다.
:::

:::hint
$0_V$는 계수가 모두 $0$인 일차결합으로 쓸 수 있습니다. 한 벡터의 두 표현이 같은 값이면 그 차가 어떤 벡터인지 [[finite-sum-of-vectors|(C6)]]으로 계산해 보세요.
:::

:::proof
($\Rightarrow$) 열이 기저라 하자. 기저의 (존재)가 $V$의 모든 벡터가 일차결합이라는 것이므로 열은 $V$를 생성한다. 일차독립임을 보인다. 길이 $n$인 실수의 열 $\alpha$가 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$를 만족한다고 하자. 모든 계수가 $0$인 열 $\zeta$에 대해서도 [[finite-sum-of-vectors|(C3)]]에 의해 $\zeta_1 v_1 + \cdots + \zeta_n v_n = 0_V$이다. 두 열 $\alpha$, $\zeta$가 같은 벡터 $0_V$를 표현하므로 기저의 (유일성)에 의해 모든 $k$에서 $\alpha_k = \zeta_k = 0$이다. 따라서 열은 일차독립이다.

($\Leftarrow$) 열이 일차독립이고 $V$를 생성한다고 하자. 열이 $V$를 생성하므로 모든 벡터가 일차결합이다. 이것이 (존재)이다. (유일성)을 보인다. 길이 $n$인 두 실수의 열 $\alpha$, $\beta$가 $\alpha_1 v_1 + \cdots + \alpha_n v_n = \beta_1 v_1 + \cdots + \beta_n v_n$을 만족한다고 하자. 이 값을 $x$라 하면 [[vector-space-basic-properties|(B2)]]에 의해 $x - x = x + (-x) = 0_V$이다. 왼쪽의 두 표현을 쓰고 (C6)을 적용하면 $0_V = x - x = (\alpha_1 - \beta_1) v_1 + \cdots + (\alpha_n - \beta_n) v_n$이다. 열이 일차독립이므로 모든 $k$에서 $\alpha_k - \beta_k = 0$이고, [[real-number-arithmetic|(K12)]]의 (v)에 의해 $\alpha_k = \beta_k$이다. 따라서 (유일성)이 성립하고 열은 기저이다.
:::

## 예시와 반례

:::example[ℝ²의 (1, 0), (1, 1)]
$\mathbb{R}^2$의 열 $(1, 0), (1, 1)$은 [[basis]]의 예시에서 존재와 유일성을 직접 확인한 기저입니다. 이 정리의 두 조건으로도 확인됩니다. 일차독립: $\alpha(1, 0) + \beta(1, 1) = (\alpha + \beta, \beta) = (0, 0)$이면 $\beta = 0$이고 그러면 $\alpha + 0 = 0$에서 $\alpha = 0$입니다. 생성: 임의의 $(a, b)$는 $(a - b)(1, 0) + b(1, 1)$로 쓰입니다.
:::

:::counterexample[한 조건만 성립하는 열]
$\mathbb{R}^2$의 길이 $1$인 열 $(1, 0)$은 $(1, 0) \ne (0, 0)$이므로 일차독립([[linear-independence|(I4)]])이지만, $(0, 1)$을 일차결합으로 쓰지 못하므로 $\mathbb{R}^2$를 생성하지 않습니다. 따라서 기저가 아닙니다.

길이 $3$인 열 $(1, 0), (0, 1), (1, 1)$은 $\mathbb{R}^2$를 생성하지만($(a, b) = a(1, 0) + b(0, 1) + 0(1, 1)$) 일차종속입니다. 계수의 열 $(1, 1, -1)$에 대하여 $1(1, 0) + 1(0, 1) + (-1)(1, 1) = (1, 1) + (-1, -1) = (0, 0)$이고 계수 $1$이 $0$이 아니기 때문입니다. 따라서 기저가 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(2, 0), (0, 3)$이 일차독립임을 보이고, 이 정리를 쓰려면 무엇이 더 필요한지 말하라.]
$\alpha(2, 0) + \beta(0, 3) = (2\alpha, 3\beta) = (0, 0)$이면 $2\alpha = 0$, $3\beta = 0$이고 $2 \ne 0$, $3 \ne 0$이므로 (K10)에 의해 $\alpha = \beta = 0$입니다. 일차독립입니다. 기저임을 결론하려면 $\mathbb{R}^2$를 생성한다는 것이 더 필요합니다. 예를 들어 $(a, b) = (2^{-1}a)(2, 0) + (3^{-1}b)(0, 3)$이고 $2(2^{-1}a) = a$, $3(3^{-1}b) = b$이므로 생성합니다.
:::

:::check[기저 $v_1, \dots, v_n$에서 $0_V$의 좌표는 무엇인가?]
모두 $0$입니다. 모든 계수가 $0$이면 [[finite-sum-of-vectors|(C3)]]에 의해 일차결합이 $0_V$이므로 이것이 $0_V$를 표현하는 계수의 열이고, 기저에서 표현은 하나뿐이므로 $0_V$의 좌표는 이 열입니다.
:::
