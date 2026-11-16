---
title: 일차독립과 일차종속
title_en: Linear Independence and Dependence
aliases: [일차독립, 일차종속, 선형독립, 선형종속, 자명한 일차결합, linearly independent, linearly dependent, linear independence, linear dependence, trivial linear combination]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터의 열이 일차독립인 것은 일차결합이 0_V 가 되는 계수의 열이 모든 계수가 0 인 것뿐일 때이다. 영벡터를 항으로 갖거나 같은 벡터가 두 자리에 있으면 일차종속이고, 일차독립인 열에서 항을 지워도 일차독립이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, 번호 없는 정의 셋(자명한 일차결합, 일차독립, 일차종속), p.8; 연습문제 2.2, p.11
    checked: original
    note: "출처는 모든 계수가 0 인 일차결합을 자명하다고 하고, 자명한 일차결합만이 0 과 같을 때 계(system)가 일차독립이라고 정의하며, 일차독립이 아니면 일차종속이라고 한다. 출처는 일차종속을 '0 을 자명하지 않은 일차결합으로 표현할 수 있다'는 말로 바꾸고 '자명하지 않다'를 절댓값의 합 Σ|α_k| ≠ 0 으로 쓴다. 이 사이트에는 절댓값이 없으므로 이 항목은 '0 이 아닌 계수 α_k 가 있다'로 쓴다. 이 항목은 벡터의 모임을 열로 다루고 길이 0 인 빈 열이 일차독립이라고 정한다. 출처의 연습문제 2.2 는 영벡터를 포함한 집합이 일차종속인지(a), 일차독립인 집합의 부분집합이 일차독립인지(d)를 참·거짓으로 묻는다. 이 항목의 (I1)과 (I3)은 같은 내용을 열의 꼴로 쓰고 증명한 것이고, (I2)와 (I4)와 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 [[finite-sum-of-vectors|벡터의 열]]이라 하자. 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 **자명하다**(trivial)는 것은 정확히 모든 $i$에서 $\alpha_i = 0$일 때이다. [[finite-sum-of-vectors|(C3)]]에 의해 자명한 계수의 열에 대한 일차결합은 언제나 $0_V$이다.

열 $v_1, \dots, v_n$이 **일차독립**(linearly independent)인 것은 정확히 다음이 성립할 때이다. 길이 $n$인 모든 실수의 열 $\alpha_1, \dots, \alpha_n$에 대하여
$$\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V \quad \text{이면 모든 } k \in \{1, \dots, n\} \text{에서 } \alpha_k = 0$$
이다. 곧 $0_V$를 일차결합으로 쓰는 방법이 자명한 계수의 열뿐일 때이다. 열이 일차독립이 아니면 **일차종속**(linearly dependent)이라 한다. 일차종속의 정의를 풀어 쓰면, 열 $v_1, \dots, v_n$이 일차종속인 것은 정확히 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$이고 $\alpha_k \ne 0$인 $k$가 있을 때이다. 빈 열($n = 0$)은 일차독립이다(조건의 결론 "모든 $k$에서 $\alpha_k = 0$"이 $k$가 없어서 공허하게 참이다).

다음이 성립한다. $v_1, \dots, v_n$은 $V$의 벡터의 열이다.

- (I1) 어떤 $k$에서 $v_k = 0_V$이면 열은 일차종속이다.
- (I2) 서로 다른 두 자리 $j \ne k$에서 $v_j = v_k$이면 열은 일차종속이다.
- (I3) $n \ge 0$이고 $v_1, \dots, v_{n+1}$이 길이 $n + 1$인 일차독립인 열이며 $k \in \{1, \dots, n+1\}$이면, $k$번째 항을 뺀 길이 $n$인 열($c_i = v_i$ ($i < k$), $c_i = v_{i+1}$ ($k \le i \le n$). [[finite-sum-of-vectors|(H6)]])도 일차독립이다.
- (I4) 길이 $1$인 열 $v_1$이 일차독립인 것은 정확히 $v_1 \ne 0_V$일 때이다.
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 0$. A sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n$ is **trivial** exactly when $\alpha_i = 0$ for every $i$. By (C3) of the entry on finite sums of vectors, the linear combination with a trivial sequence of coefficients is always $0_V$.

The sequence $v_1, \dots, v_n$ is **linearly independent** exactly when the following holds: for every sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n$,
$$\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V \quad \text{implies} \quad \alpha_k = 0 \text{ for every } k \in \{1, \dots, n\}.$$
That is, the only way of writing $0_V$ as a linear combination is with the trivial sequence of coefficients. A sequence that is not linearly independent is called **linearly dependent**. Unwinding the definition, the sequence $v_1, \dots, v_n$ is linearly dependent exactly when there is a sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n$ with $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$ and $\alpha_k \ne 0$ for some $k$. The empty sequence ($n = 0$) is linearly independent (the conclusion "$\alpha_k = 0$ for every $k$" is vacuously true because there is no $k$).

The following hold, where $v_1, \dots, v_n$ is a sequence of vectors of $V$.

- (I1) If $v_k = 0_V$ for some $k$, then the sequence is linearly dependent.
- (I2) If $v_j = v_k$ for two different positions $j \ne k$, then the sequence is linearly dependent.
- (I3) Let $n \ge 0$, let $v_1, \dots, v_{n+1}$ be a linearly independent sequence of length $n + 1$, and let $k \in \{1, \dots, n+1\}$. Then the sequence of length $n$ with the $k$-th term removed ($c_i = v_i$ for $i < k$ and $c_i = v_{i+1}$ for $k \le i \le n$; see (H6)) is also linearly independent.
- (I4) A sequence $v_1$ of length $1$ is linearly independent exactly when $v_1 \ne 0_V$.
:::

## 직관

벡터를 막대로 보고 계수를 "그 막대를 얼마나 쓰는가"로 보면, $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$는 막대들을 써서 제자리로 돌아오는 방법입니다. 모든 계수를 $0$으로 두면 아무것도 쓰지 않았으니 언제나 제자리로 돌아옵니다([[finite-sum-of-vectors|(C3)]]). 일차독립은 **그 방법밖에 없다**는 것이고, 일차종속은 막대 가운데 적어도 하나를 실제로 써서(계수가 $0$이 아니게) 제자리로 돌아오는 방법이 있다는 것입니다.

이 직관은 몇 가지 쉬운 경우로 확인됩니다. 영벡터는 쓰더라도 위치가 바뀌지 않으므로 계수를 마음대로 줄 수 있고(I1), 같은 벡터를 두 자리에 넣고 한쪽은 더하고 한쪽은 빼면 서로 지워집니다(I2). 일차독립인 열에서 막대를 하나 빼면 방법이 더 늘어날 이유가 없습니다(I3). 일차종속이면 한 벡터를 나머지의 일차결합으로 쓸 수 있다는 정리는 이 항목에서 다루지 않고 뒤에서 다룹니다.

주의할 점은 일차독립이 열의 성질이라는 것입니다. 항이 같은 벡터를 한 번 쓴 열과 두 번 쓴 열은 다른 열이고, (I2)에 의해 두 번 쓴 열은 일차종속입니다. 일차종속의 정의에서 "0이 아닌 계수가 있다"는 출처가 절댓값의 합 $\sum|\alpha_k| \ne 0$으로 쓰는 조건과 같은 뜻이고, 이 사이트에는 절댓값이 없으므로 이렇게 풀어 씁니다.

## 성질의 증명

:::remark[(I1)–(I4)의 증명]
(I1) $v_k = 0_V$라 하고 $\alpha_k = 1$, $i \ne k$이면 $\alpha_i = 0$인 실수의 열을 잡는다. [[finite-sum-of-vectors|(C4)]]에 의해 $\alpha_1 v_1 + \cdots + \alpha_n v_n = \alpha_k v_k = 1 v_k = v_k = 0_V$이다(셋째 등호는 [[vector-space|(V5)]]). $\alpha_k = 1 \ne 0$([[real-number-arithmetic|(K4)]])이므로 일차종속이다.

(I2) 두 자리를 $j < k$가 되도록 이름 붙인다(서로 다른 두 자리 가운데 작은 쪽을 $j$, 큰 쪽을 $k$라 하면 된다). $n \ge 2$이다. $\alpha_j = 1$, $\alpha_k = -1$, 나머지 $i$에서 $\alpha_i = 0$인 실수의 열을 잡고 $w_i = \alpha_i v_i$라 하자. $i \ne j, k$이면 [[vector-space-basic-properties|(B3)]]에 의해 $w_i = 0_V$이고, $w_j = 1 v_j = v_j$, $w_k = (-1) v_k = -v_k$([[vector-space-basic-properties|(B5)]])이다. [[finite-sum-of-vectors|(H6)]]을 열 $w_1, \dots, w_n$과 자리 $k$에 쓰면 $w_1 + \cdots + w_n = (c_1 + \cdots + c_{n-1}) + w_k$이다. 여기서 $c_i = w_i$ ($i < k$), $c_i = w_{i+1}$ ($k \le i \le n - 1$)이다. $c_j = w_j$($j < k$)이다. $i \ne j$이면 $c_i$는 $w_m$ ($m = i < k$ 또는 $m = i + 1 > k$)이고 $m \ne j$, $m \ne k$이므로 $c_i = 0_V$이다. 따라서 (H7)에 의해 $c_1 + \cdots + c_{n-1} = c_j = v_j$이다. 그러므로 $w_1 + \cdots + w_n = v_j + (-v_k) = v_j + (-v_j) = 0_V$이다(둘째 등호는 $v_j = v_k$, 셋째 등호는 [[vector-space-basic-properties|(B2)]]). $\alpha_j = 1 \ne 0$이므로 일차종속이다.

(I3) $v_1, \dots, v_{n+1}$이 일차독립이라 하고 $c$를 $k$번째 항을 뺀 열이라 하자. 길이 $n$인 실수의 열 $\gamma_1, \dots, \gamma_n$이 $\gamma_1 c_1 + \cdots + \gamma_n c_n = 0_V$를 만족한다고 하자. 길이 $n + 1$인 실수의 열 $\alpha$를 $\alpha_i = \gamma_i$ ($i < k$), $\alpha_k = 0$, $\alpha_i = \gamma_{i-1}$ ($k < i \le n + 1$)로 정하고 $w_i = \alpha_i v_i$라 하자. $w$에서 $k$번째 항을 뺀 열을 $c'$라 하면, $i < k$에서 $c'_i = w_i = \gamma_i v_i = \gamma_i c_i$이고 $k \le i \le n$에서 $c'_i = w_{i+1} = \alpha_{i+1} v_{i+1} = \gamma_i v_{i+1} = \gamma_i c_i$이다. 따라서 $c'$는 $i$번째 항이 $\gamma_i c_i$인 열이고, (H6)에 의해
$$\alpha_1 v_1 + \cdots + \alpha_{n+1} v_{n+1} = (\gamma_1 c_1 + \cdots + \gamma_n c_n) + w_k = 0_V + 0 v_k = 0_V + 0_V = 0_V$$
이다(셋째 등호는 (B3), 마지막은 영벡터의 정의). $v$가 일차독립이므로 모든 $i$에서 $\alpha_i = 0$이다. $\gamma_i$는 $\alpha_i$($i < k$) 또는 $\alpha_{i+1}$ ($k \le i \le n$)이므로 모든 $\gamma_i = 0$이다. 따라서 $c$는 일차독립이다. ($n = 0$이면 $c$는 빈 열이고 위 논증에서 $\gamma$가 없어 일차독립이다.)

(I4) ($\Rightarrow$) 대우를 보인다. $v_1 = 0_V$이면 (I1)에 의해 일차종속이다. ($\Leftarrow$) $v_1 \ne 0_V$라 하고 $\alpha_1 v_1 = 0_V$인 실수 $\alpha_1$을 잡는다(길이 $1$인 열의 합은 [[finite-sum-of-vectors|(H0)]]에 의해 $\alpha_1 v_1$이다). (B6)에 의해 $\alpha_1 = 0$이거나 $v_1 = 0_V$이고, $v_1 \ne 0_V$이므로 $\alpha_1 = 0$이다. 따라서 $v_1$은 일차독립이다.
:::

## 예시와 반례

:::example[ℝ²에서 일차독립인 열과 일차종속인 열]
$\mathbb{R}^2$에서 $v_1 = (1, 0)$, $v_2 = (0, 1)$이면 $\alpha v_1 + \beta v_2 = (\alpha, 0) + (0, \beta) = (\alpha, \beta)$이므로 이 합이 $(0, 0)$이면 두 값이 같다는 [[real-function-space|성분별 같음]]에 의해 $\alpha = 0$이고 $\beta = 0$입니다. 따라서 이 열은 일차독립입니다.

$v_1 = (1, 2)$, $v_2 = (2, 4)$이면 $2 v_1 + (-1) v_2 = (2, 4) + (-2, -4) = (0, 0)$이고 계수 $2$가 $0$이 아니므로 일차종속입니다.
:::

:::example[빈 열과 길이 1인 열]
빈 열은 일차독립입니다. 길이 $0$인 실수의 열은 빈 열 하나뿐이고 모든 $k$에서 $\alpha_k = 0$이라는 결론이 공허하게 참이기 때문입니다. $\mathbb{R}^2$의 길이 $1$인 열 $(0, 3)$은 $(0, 3) \ne (0, 0)$이므로 (I4)에 의해 일차독립이고, 열 $(0, 0)$은 (I1)에 의해 일차종속입니다.
:::

:::counterexample[영벡터도 되풀이도 없는데 일차종속인 열]
$\mathbb{R}^3$의 열 $v_1 = (1, 0, 0)$, $v_2 = (0, 1, 0)$, $v_3 = (1, 1, 0)$에는 영벡터가 없고 같은 벡터가 두 자리에 있지도 않습니다. 그래도 $\alpha = (1, 1, -1)$이면 $1 v_1 + 1 v_2 + (-1) v_3 = ((1, 0, 0) + (0, 1, 0)) + (-1, -1, 0) = (1, 1, 0) + (-1, -1, 0) = (0, 0, 0)$이고 $\alpha_1 = 1 \ne 0$이므로 일차종속입니다. 따라서 (I1)과 (I2)의 조건이 없어도 일차종속일 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(1, 2), (0, 0), (3, 5)$는 일차독립인가? 그 이유를 계수를 들어 보여라.]
일차종속입니다. 둘째 항이 영벡터이므로 (I1)을 따라 계수 $(0, 1, 0)$을 잡으면 $0(1, 2) + 1(0, 0) + 0(3, 5) = (0, 0) + (0, 0) + (0, 0) = (0, 0)$이고 계수 $1$이 $0$이 아닙니다.
:::

:::check[$\mathbb{R}^2$의 열 $(2, 1), (0, 3)$은 일차독립인가?]
일차독립입니다. $\alpha(2, 1) + \beta(0, 3) = (2\alpha, \alpha + 3\beta)$이고 이것이 $(0, 0)$이라 하면 $2\alpha = 0$입니다. $2 \ne 0$이므로 (K10)에 의해 $\alpha = 0$이고, 그러면 둘째 값에서 $3\beta = 0$이고 $3 \ne 0$이므로 $\beta = 0$입니다.
:::
