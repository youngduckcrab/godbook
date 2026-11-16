---
title: 선형사상
title_en: Linear Map
aliases: [선형변환, 선형 사상, 선형 변환, 선형성, linear map, linear transformation, linear operator, linearity]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 벡터공간 사이의 함수 T가 선형사상인 것은 정확히 합과 스칼라배를 보존할 때이다. 이때 T는 영벡터와 부호, 유한 합과 일차결합을 보존하고, 두 조건은 하나로 합쳐 쓸 수 있다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, function, function-composition, mathematical-induction, real-number-arithmetic, real-function-space, standard-basis]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 3절 Linear Transformations, 번호 없는 정의와 바로 뒤의 동치 서술, p.12. 유한 합을 통과시키는 계산, p.14. 표기 Tv, p.16
    checked: original
    note: "출처는 규칙 T : X → Y 를 transformation 이라 부르고 선형인 것의 정의를 두 조건(합과 스칼라배)으로 쓴 뒤 두 조건이 αu + βv 에 대한 한 조건과 같다고 적는데(p.12) 그 동치를 증명하지 않는다. 이 항목의 (T3)이 그 동치의 증명이다. 출처는 p.14에서 선형사상이 유한 합을 합의 합으로, 계수를 곱한 항을 계수를 곱한 값으로 보낸다는 계산을 이유 없이 쓴다. 이 항목의 (T4), (T5)가 그 근거이고 열 v_1, …, v_n 이 비어 있는 경우까지 증명한다. 출처의 1장 3절에서는 정의 바로 뒤에 (T1), (T2)에 해당하는 진술(영벡터와 부호를 보존한다)을 따로 적지 않는다. 출처는 정의에서 두 벡터공간이 같은 체 위에 있다고 말하고 이 사이트는 스칼라가 실수뿐이다. 출처는 대부분 linear transformation 이라 쓰고, 1장에서는 Theorem 6.7(p.27)에서 linear map 이라고도 쓴다. 이 사이트는 '선형사상'이라 부른다. 출처는 p.16에서 T(v) 를 Tv 로 쓰고 Tv + u 는 T(v) + u 를 뜻한다고 약속한다. 이 항목도 같은 약속을 따르며 합과 스칼라배의 순서를 괄호 없이 읽는 법을 진술에 적었다. 두 조건의 이름 (T-합), (T-배)와 성질의 번호 (T1)–(T5), 벡터의 열의 상 Tv_1, …, Tv_n 을 합성 T ∘ v 로 정하는 것, 그리고 예시와 반례와 확인 질문은 이 사이트가 썼다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $T : V \to W$가 [[function|함수]]라 하자. $v \in V$에서의 값 $T(v)$를 $Tv$로도 쓴다. $T(u + v)$는 $u + v$에서의 값이고, $Tu + Tv$는 $(Tu) + (Tv)$, $\alpha Tv$는 $\alpha(Tv)$를 뜻한다. $V$, $W$의 영벡터를 각각 $0_V$, $0_W$로 쓴다.

$T$가 **선형사상**(linear map)인 것은 정확히 다음 두 조건이 모두 성립할 때이다.

- (T-합) 모든 $u, v \in V$에서 $T(u + v) = Tu + Tv$이다.
- (T-배) 모든 실수 $\alpha$와 모든 $v \in V$에서 $T(\alpha v) = \alpha Tv$이다.

각 등식에서 $u + v$와 $\alpha v$는 $V$의 덧셈과 스칼라배이고, 오른쪽의 덧셈과 스칼라배는 $W$의 것이다.

길이 $n \ge 0$인 $V$의 [[finite-sum-of-vectors|벡터의 열]] $v_1, \dots, v_n$은 함수 $v : \{1, \dots, n\} \to V$이므로 [[function-composition|합성]] $T \circ v : \{1, \dots, n\} \to W$가 있다. 이것은 $i$번째 항이 $Tv_i$인 $W$의 열이고 $Tv_1, \dots, Tv_n$으로 쓴다. $n = 0$이면 $W$의 빈 열이다. 이 열의 합을 $Tv_1 + \cdots + Tv_n$으로 쓰고, 실수의 열 $\alpha_1, \dots, \alpha_n$에 대하여 $i$번째 항이 $\alpha_i(Tv_i)$인 $W$의 열의 합을 $\alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$으로 쓴다.

다음이 성립한다. (T3)은 함수 $T : V \to W$에 대한 동치이고, 나머지는 $T$가 선형사상일 때의 성질이다. $u$, $v$는 $V$의 임의의 원소이다.

- (T1) $T0_V = 0_W$이다.
- (T2) $T(-v) = -Tv$이고 $T(u - v) = Tu - Tv$이다.
- (T3) 함수 $T : V \to W$가 선형사상인 것은 정확히 모든 $u, v \in V$와 모든 실수 $\alpha$, $\beta$에서 $T(\alpha u + \beta v) = \alpha Tu + \beta Tv$일 때이다.
- (T4) 길이 $n \ge 0$인 $V$의 열 $v_1, \dots, v_n$에 대하여 $T(v_1 + \cdots + v_n) = Tv_1 + \cdots + Tv_n$이다.
- (T5) 길이 $n \ge 0$인 실수의 열 $\alpha_1, \dots, \alpha_n$과 길이 $n$인 $V$의 열 $v_1, \dots, v_n$에 대하여 $T(\alpha_1 v_1 + \cdots + \alpha_n v_n) = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이다.
:::

:::english
Let $V$, $W$ be vector spaces and $T : V \to W$ a function. We also write $Tv$ for the value $T(v)$ at $v \in V$. $T(u + v)$ is the value at $u + v$, $Tu + Tv$ means $(Tu) + (Tv)$, and $\alpha Tv$ means $\alpha(Tv)$. We write $0_V$ and $0_W$ for the zero vectors of $V$ and $W$.

$T$ is a **linear map** exactly when both of the following conditions hold.

- (T-sum) $T(u + v) = Tu + Tv$ for all $u, v \in V$.
- (T-scalar) $T(\alpha v) = \alpha Tv$ for every real number $\alpha$ and every $v \in V$.

In each equation, $u + v$ and $\alpha v$ are the addition and scalar multiplication of $V$, and the addition and scalar multiplication on the right-hand side are those of $W$.

A sequence of vectors $v_1, \dots, v_n$ of $V$ of length $n \ge 0$ is a function $v : \{1, \dots, n\} \to V$, so there is the composition $T \circ v : \{1, \dots, n\} \to W$. It is the sequence of $W$ whose $i$-th term is $Tv_i$, and we write it $Tv_1, \dots, Tv_n$. If $n = 0$ it is the empty sequence of $W$. We write $Tv_1 + \cdots + Tv_n$ for the sum of this sequence, and for a sequence of real numbers $\alpha_1, \dots, \alpha_n$ we write $\alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$ for the sum of the sequence of $W$ whose $i$-th term is $\alpha_i(Tv_i)$.

The following hold. (T3) is an equivalence for a function $T : V \to W$, and the others are properties of $T$ when $T$ is a linear map. $u$, $v$ are arbitrary elements of $V$.

- (T1) $T0_V = 0_W$.
- (T2) $T(-v) = -Tv$ and $T(u - v) = Tu - Tv$.
- (T3) A function $T : V \to W$ is a linear map exactly when $T(\alpha u + \beta v) = \alpha Tu + \beta Tv$ for all $u, v \in V$ and all real numbers $\alpha$, $\beta$.
- (T4) For every sequence $v_1, \dots, v_n$ of $V$ of length $n \ge 0$, $T(v_1 + \cdots + v_n) = Tv_1 + \cdots + Tv_n$.
- (T5) For every sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n \ge 0$ and every sequence $v_1, \dots, v_n$ of $V$ of length $n$, $T(\alpha_1 v_1 + \cdots + \alpha_n v_n) = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$.
:::

## 직관

선형사상은 벡터공간의 두 연산, 곧 덧셈과 스칼라배를 그대로 보존하는 함수입니다. 단위 환산이 비유가 됩니다. 길이 두 개를 먼저 더한 다음 킬로미터를 미터로 바꾸어도, 각각 바꾼 다음 더해도 결과가 같습니다. 길이를 3배 한 다음 바꾸는 것과 바꾼 다음 3배 하는 것도 같습니다. (T-합)과 (T-배)는 이 두 사실을 벡터공간 사이의 함수로 일반화한 것입니다. 비유가 맞지 않는 곳도 있습니다. 환산에 정해진 수수료가 붙으면 합을 보존하지 못하는데, 이 사정은 입력이 $0$일 때 출력도 $0$이어야 한다는 (T1)에 나타납니다. 단위 환산에는 이런 수수료가 없다고 보는 것이 비유가 성립하는 조건입니다.

정의의 두 조건은 서로 다른 일을 합니다. (T1)은 $T0_V = T(0 \cdot 0_V) = 0 \cdot T0_V$로 (T-배)에서 나오고, (T-합)은 쓰지 않습니다. (T4)는 (T-합)을 합의 길이에 대한 귀납으로 넓힌 것이고, 길이 $0$인 시작은 (T1)이 맡습니다. (T5)는 (T4)를 항 $\alpha_i v_i$의 열에 쓰고 각 항에 (T-배)를 쓴 것입니다. 이 성질들 때문에 선형사상은 일차결합을 같은 계수의 일차결합으로 보냅니다. (T3)은 두 조건을 한 줄로 쓰는 방법이고, 두 조건을 따로 확인하는 것보다 줄이 짧아지는 대신 $\alpha$, $\beta$에 값을 넣어 보는 단계가 필요합니다.

(T1)은 선형사상의 필요조건이지만 충분하지 않습니다. $T0_V = 0_W$인데도 선형사상이 아닌 함수가 아래 반례에 있습니다.

## 성질의 증명

:::proof
증명에서 인용하는 (V1)–(V8)은 [[vector-space]]의 것, (B1)–(B12)는 [[vector-space-basic-properties]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors]]의 것이다. $T : V \to W$는 함수이고, (T1), (T2), (T4), (T5)에서는 선형사상이라 한다.

**(T1)의 증명.** $v = 0_V$일 때 [[vector-space-basic-properties|(B3)]]에 의해 실수 $0$에 대하여 $0 \cdot 0_V = 0_V$이다. (T-배)에서 $\alpha = 0$, $v = 0_V$로 두면 $T0_V = T(0 \cdot 0_V) = 0 \cdot T0_V$이다. $W$에서 (B3)에 의해 $0 \cdot T0_V = 0_W$이므로 $T0_V = 0_W$이다.

**(T2)의 증명.** [[vector-space-basic-properties|(B5)]]에 의해 $-v = (-1)v$이다. (T-배)에서 $\alpha = -1$로 두면 $T(-v) = T((-1)v) = (-1)Tv$이고, $W$에서 (B5)에 의해 $(-1)Tv = -Tv$이다. 따라서 $T(-v) = -Tv$이다. 뺄셈의 정의와 (T-합), 방금 보인 것에 의해 $T(u - v) = T(u + (-v)) = Tu + T(-v) = Tu + (-Tv) = Tu - Tv$이다.

**(T3)의 증명.** 함수 $T : V \to W$를 생각한다.

($\Rightarrow$) $T$가 선형사상이라 하고 $u, v \in V$, 실수 $\alpha$, $\beta$를 잡는다. (T-합)을 두 벡터 $\alpha u$와 $\beta v$에 쓰고, 이어서 (T-배)를 두 번 쓰면 $T(\alpha u + \beta v) = T(\alpha u) + T(\beta v) = \alpha Tu + \beta Tv$이다.

($\Leftarrow$) 모든 $u, v$와 $\alpha, \beta$에서 $T(\alpha u + \beta v) = \alpha Tu + \beta Tv$라 하자. (T-합): $u, v \in V$이고 $\alpha = \beta = 1$이면 $T(1u + 1v) = 1Tu + 1Tv$이다. [[vector-space|(V5)]]에 의해 $1u = u$, $1v = v$이고 $W$에서 $1Tu = Tu$, $1Tv = Tv$이므로 $T(u + v) = Tu + Tv$이다. (T-배): 실수 $\alpha$와 $v \in V$에 대하여, 가정에서 $u = v$, $\beta = 0$으로 두면 $T(\alpha v + 0v) = \alpha Tv + 0Tv$이다. (B3)에 의해 $0v = 0_V$이고 $0_V$가 영벡터이므로 $\alpha v + 0v = \alpha v + 0_V = \alpha v$이다. $W$에서도 (B3)에 의해 $0Tv = 0_W$이므로 $\alpha Tv + 0Tv = \alpha Tv + 0_W = \alpha Tv$이다. 따라서 $T(\alpha v) = \alpha Tv$이다. 두 조건이 모두 성립하므로 $T$는 선형사상이다.

**(T4)의 증명.** $n$에 대한 [[mathematical-induction|귀납법]]으로 보인다. $S_n$을 "길이 $n$인 $V$의 모든 열 $v_1, \dots, v_n$에서 $T(v_1 + \cdots + v_n) = Tv_1 + \cdots + Tv_n$이다"로 둔다. $n = 0$이면 빈 열의 합은 $0_V$이므로 왼쪽은 $T0_V$이고, $T \circ v$는 $W$의 빈 열이어서 오른쪽은 $0_W$이다. (T1)에 의해 $T0_V = 0_W$이므로 $S_0$이 참이다. $S_n$이 참이라 하고 길이 $n + 1$인 열 $v_1, \dots, v_{n+1}$을 잡는다. 합의 정의에 의해 $v_1 + \cdots + v_{n+1} = (v_1 + \cdots + v_n) + v_{n+1}$이므로 (T-합)에 의해
$$T(v_1 + \cdots + v_{n+1}) = T(v_1 + \cdots + v_n) + Tv_{n+1}$$
이다. $S_n$을 $v$의 처음 $n$개로 이루어진 열에 쓰면 $T(v_1 + \cdots + v_n) = Tv_1 + \cdots + Tv_n$이다. 여기서 이 열에 $T$를 합성한 열은 열 $Tv_1, \dots, Tv_{n+1}$의 처음 $n$개와 같다(두 열의 $i$번째 항이 모두 $Tv_i$이다). 따라서 오른쪽은 $(Tv_1 + \cdots + Tv_n) + Tv_{n+1}$이고, 이것은 합의 정의에 의해 $Tv_1 + \cdots + Tv_{n+1}$이다. 곧 $S_{n+1}$이 참이고, 시작점이 $0$인 귀납법의 원리에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.

**(T5)의 증명.** 각 $i$에 벡터 $\alpha_i v_i$가 하나씩 정해지므로 $i$번째 항이 $u_i = \alpha_i v_i$인 $V$의 열 $u_1, \dots, u_n$이 있고, 그 합이 $\alpha_1 v_1 + \cdots + \alpha_n v_n$이다. (T4)를 열 $u$에 쓰면 $T(\alpha_1 v_1 + \cdots + \alpha_n v_n) = Tu_1 + \cdots + Tu_n$이다. (T-배)에 의해 각 $i$에서 $Tu_i = T(\alpha_i v_i) = \alpha_i(Tv_i)$이므로, 열 $T \circ u$는 $i$번째 항이 $\alpha_i(Tv_i)$인 열과 같다. 같은 열의 합은 같으므로 $Tu_1 + \cdots + Tu_n = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이다. $n = 0$이면 두 열이 모두 빈 열이므로 양변이 $0_W$이고, 이것은 (T4)의 $n = 0$인 경우와 같다. $\blacksquare$
:::

## 예시와 반례

:::example[일차결합의 값 계산하기]
$T : \mathbb{R}^2 \to \mathbb{R}$가 선형사상이고 $T(1, 0) = 3$, $T(0, 1) = -2$라 합시다. ($\mathbb{R}$은 [[real-function-space|(2)]]의 벡터공간이므로 스칼라배는 실수의 곱입니다.) $\mathbb{R}^2$의 표준기저를 $e_1 = (1, 0)$, $e_2 = (0, 1)$이라 하면 [[standard-basis|표준기저]]의 (3)에 의해 $(4, 5)$는 길이 $2$인 열 $4e_1$, $5e_2$의 합이고, 이것은 (H0)에 의해 덧셈 $4e_1 + 5e_2$입니다. (T3)에서 $\alpha = 4$, $\beta = 5$로 두면 $T(4, 5) = 4Te_1 + 5Te_2 = 4 \cdot 3 + 5 \cdot (-2)$입니다. $5 \cdot (-2) = -(5 \cdot 2) = -10$이고 ((K12)의 (ii)), $4 \cdot 3 = 12$이므로 $T(4, 5) = 12 + (-10) = 2$입니다. 이 계산은 $T$가 두 벡터 $e_1$, $e_2$에서의 값만 알면 $(4, 5)$에서의 값이 정해진다는 것을 보여 줍니다.
:::

:::counterexample[T0 = 0이어도 선형사상이 아닐 수 있다]
$V = W = \mathbb{R}$이고 $T$가 모든 실수 $x$에서 값이 $x \cdot x$인 함수라 합시다. $T0 = 0 \cdot 0 = 0$이므로((K9)) (T1)의 결론은 성립합니다. 그런데 (T-합)에서 $u = v = 1$로 두면, $\mathbb{R}$에서 벡터의 합은 실수의 합이므로 $T(1 + 1) = T(2) = 2 \cdot 2 = 4$이고 $Tu + Tv = 1 \cdot 1 + 1 \cdot 1 = 1 + 1 = 2$입니다((K4), (K7)). $4 \ne 2$이므로 (T-합)이 깨지고 $T$는 선형사상이 아닙니다. 영벡터를 영벡터로 보낸다는 것만으로는 선형사상이 되지 않습니다.
:::

## 확인 질문

:::check[$T : V \to W$가 선형사상이고 $Tu = a$, $Tv = b$일 때 $T(2u + (-3)v)$를 $a$, $b$로 나타내어라.]
(T3)에서 $\alpha = 2$, $\beta = -3$으로 두면 $T(2u + (-3)v) = 2Tu + (-3)Tv = 2a + (-3)b$입니다.
:::

:::check[$T : V \to W$가 선형사상이고 $V$의 세 벡터 $v_1$, $v_2$, $v_3$에서 $Tv_1 = Tv_2 = Tv_3 = 0_W$이면 $T(v_1 + v_2 + v_3)$은 무엇인가?]
$0_W$입니다. (T4)에 의해 $T(v_1 + v_2 + v_3) = Tv_1 + Tv_2 + Tv_3$이고, 이 열의 항이 모두 $0_W$이므로 합은 (H5)에 의해 $0_W$입니다.
:::
