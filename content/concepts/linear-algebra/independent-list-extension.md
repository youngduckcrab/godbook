---
title: 일차독립인 열에 벡터 덧붙이기
title_en: Appending a Vector to a Linearly Independent Sequence
aliases: [일차독립인 열의 확장, 벡터 덧붙이기, extending a linearly independent sequence, appending a vector]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 일차독립인 열 v 에 벡터 x 를 덧붙인 열이 일차독립인 것은 정확히 x 가 v 의 생성에 속하지 않을 때이다. 따라서 일차독립인 열이 V 를 생성하지 않으면 V 의 벡터를 덧붙여 일차독립인 더 긴 열을 얻는다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, proof-by-contrapositive, proof-by-contradiction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장, 연습문제 2.5, p.11
    checked: original
    note: "출처의 연습문제 2.5 는 일차독립이지만 생성하지 않는 계 v_1, …, v_r 에 대하여 v_{r+1} 을 하나 찾아 v_1, …, v_{r+1} 이 일차독립이게 할 수 있음을 보이라고 하고, 힌트로 일차결합으로 표현할 수 없는 벡터를 v_{r+1} 로 잡으라고 한다. 이 항목은 그 연습문제의 풀이를 (1)의 ⇐ 방향으로 증명하고, 출처에 없는 역방향(1)의 ⇒ 방향과 (2)의 서술을 더했다. 출처는 이 문제를 2장(pp.55–56, Proposition 5.4와 Theorem 5.5 근처)의 증명에서 인용한다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 [[linear-independence|일차독립]]인 벡터의 열, $x \in V$라 하자. 열 $v_1, \dots, v_n$에 $x$를 [[finite-sum-of-vectors|덧붙인 열]] $v_1, \dots, v_n, x$에 대하여 다음이 성립한다.

1. 덧붙인 열이 일차독립인 것은 정확히 $x \notin \operatorname{span}(v_1, \dots, v_n)$일 때이다. ($n = 0$이면 $\operatorname{span}$은 $\{0_V\}$이므로 이 조건은 $x \ne 0_V$이다.)
2. $v_1, \dots, v_n$이 $V$를 [[linear-combination-and-span|생성]]하지 않으면, 덧붙인 열이 일차독립이 되는 $x \in V$가 있다.
:::

:::english
Let $V$ be a vector space, let $v_1, \dots, v_n$ be a linearly independent sequence of vectors of length $n \ge 0$, and let $x \in V$. For the sequence $v_1, \dots, v_n, x$ obtained by appending $x$ to $v_1, \dots, v_n$, the following hold.

1. The appended sequence is linearly independent exactly when $x \notin \operatorname{span}(v_1, \dots, v_n)$. (If $n = 0$, then $\operatorname{span}$ is $\{0_V\}$, so this condition says $x \ne 0_V$.)
2. If $v_1, \dots, v_n$ does not span $V$, then there is an $x \in V$ such that the appended sequence is linearly independent.
:::

## 직관

일차독립인 막대들에 막대 $x$를 하나 더 얻었을 때, 새 막대가 쓸모없는(겹치는) 경우는 $x$가 이미 가진 막대들로 만들어지는 경우입니다. 그렇지 않으면 새 막대는 지금까지 만들 수 없던 방향을 열어 주므로 독립이 유지됩니다. 이 직관은 [[linear-dependence-criterion|일차종속의 판정]]과 같은 말이지만, 이 항목은 새로 덧붙이는 항 하나에 대해서만, 앞의 열이 독립이라는 가정 아래 말합니다.

(2)는 (1)의 간단한 결과입니다. 생성하지 않으면 생성에 속하지 않는 벡터가 있기 때문입니다. 이 사실을 되풀이하면 생성하지 않는 한 일차독립인 열을 계속 늘릴 수 있다는 방향의 논증이 가능하지만, 어디서 멈추는지는 이 항목이 말하지 않습니다.

## 증명

:::idea
$x$가 생성에 속하면 $-1$을 계수로 하는 $0_V$의 표현이 생긴다. 속하지 않으면 $x$의 계수는 $0$일 수밖에 없고 앞의 열의 일차독립이 나머지 계수를 $0$으로 만든다.
:::

:::hint
덧붙인 열의 일차결합에서 처음 $n$개 항의 합과 마지막 항을 따로 보세요. 합의 정의에서 이 분리는 바로 나옵니다.
:::

:::proof
덧붙인 열을 $w_1, \dots, w_{n+1}$이라 하자($w_i = v_i$ ($i \le n$), $w_{n+1} = x$). 길이 $n + 1$인 실수의 열 $\alpha$에 대하여 열 $\alpha_1 w_1, \dots, \alpha_{n+1} w_{n+1}$의 처음 $n$개는 $\alpha_1 v_1, \dots, \alpha_n v_n$이고 $(n+1)$번째 항은 $\alpha_{n+1} x$이다. 합의 정의에 의해
$$\alpha_1 w_1 + \cdots + \alpha_{n+1} w_{n+1} = (\alpha_1 v_1 + \cdots + \alpha_n v_n) + \alpha_{n+1} x \qquad (\ast)$$
이다.

(1) ($\Rightarrow$) 대우를 보인다. $x \in \operatorname{span}(v_1, \dots, v_n)$이라 하고 $x = \beta_1 v_1 + \cdots + \beta_n v_n$으로 쓴다. $\alpha_i = \beta_i$ ($i \le n$), $\alpha_{n+1} = -1$로 두면 $(\ast)$에 의해 합은 $x + (-1)x$이고, [[vector-space-basic-properties|(B5)]]와 (B2)에 의해 $(-1)x = -x$, $x + (-x) = 0_V$이다. $\alpha_{n+1} = -1 \ne 0$이므로($-1 = 0$이라면 $1 = 1 + 0 = 1 + (-1) = 0$이 되어 [[real-number-arithmetic|(K4)]]에 어긋난다) 덧붙인 열은 일차종속이다.

($\Leftarrow$) $x \notin \operatorname{span}(v_1, \dots, v_n)$이라 하고, 길이 $n + 1$인 실수의 열 $\alpha$가 $\alpha_1 w_1 + \cdots + \alpha_{n+1} w_{n+1} = 0_V$를 만족한다고 하자. $u = \alpha_1 v_1 + \cdots + \alpha_n v_n$이라 쓰면 $(\ast)$에 의해 $u + \alpha_{n+1} x = 0_V$이다. $\alpha_{n+1} \ne 0$이라 가정하면, (B2)의 유일성에 의해 $\alpha_{n+1} x = -u = (-1)u$이고, $\alpha_{n+1}$의 역수([[real-number-arithmetic|(K1)]], (K6))를 곱하면 [[vector-space|(V6)]], (V5)에 의해 $x = \alpha_{n+1}^{-1}\bigl((-1)u\bigr)$이다. [[finite-sum-of-vectors|(C2)]]에 의해 이것은 $\alpha_{n+1}^{-1}\bigl((-1)\alpha_1\bigr) v_1 + \cdots + \alpha_{n+1}^{-1}\bigl((-1)\alpha_n\bigr) v_n$이므로 $x \in \operatorname{span}(v_1, \dots, v_n)$이 되어 가정에 어긋난다. 따라서 $\alpha_{n+1} = 0$이다. 그러면 $\alpha_{n+1} x = 0 x = 0_V$([[vector-space-basic-properties|(B3)]])이므로 $u + 0_V = u = 0_V$이다. $v_1, \dots, v_n$이 일차독립이므로 $\alpha_1 = \cdots = \alpha_n = 0$이다. 따라서 모든 계수가 $0$이고 덧붙인 열은 일차독립이다. ($n = 0$이면 $u = 0_V$이고 같은 논증이 성립한다.)

(2) $v_1, \dots, v_n$이 $V$를 생성하지 않으면 $\operatorname{span}(v_1, \dots, v_n) \ne V$이다. 생성은 $V$의 부분집합이므로($\operatorname{span} \subseteq V$) $x \in V$이고 $x \notin \operatorname{span}(v_1, \dots, v_n)$인 $x$가 있다. (1)에 의해 덧붙인 열이 일차독립이다.
:::

## 예시와 반례

:::example[ℝ²의 (1, 0)에 덧붙이기]
$v_1 = (1, 0)$은 일차독립이고 $\operatorname{span}(v_1) = \{(\alpha, 0) : \alpha \text{는 실수}\}$입니다. $x = (0, 1)$은 둘째 값이 $0$이 아니므로 속하지 않고, 덧붙인 열 $(1, 0), (0, 1)$은 일차독립입니다. $x = (3, 0) = 3 v_1$은 속하고, 덧붙인 열은 일차종속입니다. 계수의 열 $(3, -1)$이 $3(1, 0) + (-1)(3, 0) = (3, 0) + (-3, 0) = (0, 0)$을 주기 때문입니다.
:::

:::counterexample[열의 항과 다르다는 것만으로는 부족하다]
$x = (3, 0)$은 열 $v_1 = (1, 0)$의 항이 아니고 $(3, 0) \ne (1, 0)$이지만, 덧붙인 열 $(1, 0), (3, 0)$은 일차종속입니다. 덧붙인 벡터가 앞의 항과 다르다는 것은 독립을 보장하지 않고, 필요한 조건은 $x$가 앞의 열의 생성에 속하지 않는 것입니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(1, 2)$에 $(2, 4)$와 $(2, 3)$을 각각 덧붙이면 일차독립인가?]
$\operatorname{span}((1, 2)) = \{(t, 2t) : t \text{는 실수}\}$입니다. $(2, 4) = 2(1, 2)$는 속하므로 덧붙인 열은 일차종속입니다. $(2, 3)$은 $3 \ne 2 \cdot 2$이므로 속하지 않고 덧붙인 열 $(1, 2), (2, 3)$은 일차독립입니다.
:::

:::check[빈 열에 $x = (0, 0)$을 덧붙이면 일차독립인가?]
빈 열은 일차독립이고 $\operatorname{span}$은 $\{0_V\}$입니다. $(0, 0) \in \{0_V\}$이므로 (1)에 의해 덧붙인 열 $(0, 0)$은 일차종속입니다. 이것은 [[linear-independence|(I4)]]와 같은 결론입니다.
:::
