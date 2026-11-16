---
title: 단사인 선형사상과 핵
title_en: Injective Linear Maps and the Kernel
aliases: [단사와 핵, 핵이 영벡터뿐일 조건, 일반해, injective linear map, trivial kernel, general solution of a linear equation]
kind: proposition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 선형사상 T가 단사인 것은 정확히 핵이 영벡터 하나뿐일 때이고, Tx₁ = b인 x₁이 있으면 방정식 Tx = b의 해 전체는 x₁에 핵의 원소를 더한 것 전체이다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, function, injective-surjective-bijective, linear-map, linear-map-examples, kernel-and-range, real-number-arithmetic, real-function-space]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 6절 Solution of a linear equation, Theorem 6.1 (General solution of a linear equation)와 그 뒤의 설명, p.57
    checked: original
    note: "(1)에 해당하는 진술(단사인 것은 정확히 핵이 {0}일 때)은 출처에 없다. 출처 텍스트 전체에서 injective, one-to-one 을 찾았을 때 1–2장에는 나오지 않았고(처음 나오는 곳은 3장 p.87의 순열), Ker A = {0} 꼴은 2장 p.66의 계수 정리 해설에서 처음 나오지만 단사와 잇는 정리로 진술한 곳은 찾지 못했다. 이 검색은 출처 준비 단계에서 한 것이다. (2)는 출처 Theorem 6.1이다. 출처는 Ax₁ = b 인 벡터 x₁ 과 동차방정식 Ax = 0 의 해 전체의 집합 H 에 대하여 {x₁ + x_h : x_h ∈ H} 가 Ax = b 의 해 전체의 집합이라고 진술하고 두 포함을 A(x₁ + x_h) = Ax₁ + Ax_h = b 와 A(x − x₁) = Ax − Ax₁ = 0 으로 보인다. 이 항목의 (2)는 같은 진술을 핵으로 쓰고 같은 두 계산을 (T-합)과 (T2)로 적는다. 출처는 이 정리 뒤에서 해의 유일성을 보려면 동차방정식 Ax = 0 의 해의 유일성만 보면 된다고 설명하는데, (1)이 그 설명을 단사와 핵의 말로 진술한 것이다. 출처의 정리는 유한차원이 아니어도 쓸 수 있다고 덧붙인다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이라 하자.

1. $T$가 [[injective-surjective-bijective|단사]]인 것은 정확히 $\operatorname{Ker} T = \{0_V\}$일 때이다. ([[kernel-and-range|핵]] $\operatorname{Ker} T$는 $\{v \in V : Tv = 0_W\}$이다.)
2. $b \in W$이고 $Tx_1 = b$인 $x_1 \in V$가 있으면 방정식 $Tx = b$의 해 전체의 집합은 $\{x_1 + h : h \in \operatorname{Ker} T\}$이다. 곧
$$\{x \in V : Tx = b\} = \{x_1 + h : h \in \operatorname{Ker} T\}$$
이다.
:::

:::english
Let $V$, $W$ be vector spaces and $T : V \to W$ a linear map.

1. $T$ is injective exactly when $\operatorname{Ker} T = \{0_V\}$. (The kernel $\operatorname{Ker} T$ is $\{v \in V : Tv = 0_W\}$.)
2. If $b \in W$ and there is an $x_1 \in V$ with $Tx_1 = b$, then the set of all solutions of the equation $Tx = b$ is $\{x_1 + h : h \in \operatorname{Ker} T\}$. That is,
$$\{x \in V : Tx = b\} = \{x_1 + h : h \in \operatorname{Ker} T\}.$$
:::

## 직관

선형사상이 두 벡터를 같은 곳으로 보낸다면, 그 차는 $0_W$로 가는 벡터입니다. 그러므로 핵에 영벡터 말고 다른 벡터가 없다면 겹치는 일이 없고, 거꾸로 핵에 영벡터가 아닌 벡터가 있으면 그 벡터와 영벡터가 같은 곳으로 갑니다. 단사인지 확인하려면 모든 벡터 쌍을 비교하는 대신 $0_W$ 하나로 가는 벡터만 살피면 된다는 말입니다. 이것은 (T2), 곧 $T(u - v) = Tu - Tv$가 있기 때문에 가능합니다. 선형이 아닌 함수에서는 성립하지 않습니다. 아래 반례에서 보입니다.

(2)는 방정식 $Tx = b$의 해를 하나 찾으면 나머지 해는 핵의 원소를 더해서 얻는다는 말입니다. 산에서 한 지점의 높이를 알면, 높이가 변하지 않는 방향으로 이동해도 같은 높이라는 비유와 비슷합니다. 비유가 어긋나는 곳은 핵이 한 점이 아니라 부분공간이라는 것, 그리고 이동이 덧셈이라는 것입니다. 증명의 한 방향은 $T(x_1 + h) = Tx_1 + Th$이고, 다른 방향은 해 $x$에서 $x_1$을 빼면 핵에 들어간다는 것입니다.

## 증명

:::idea
(1)은 $T(u - v) = Tu - Tv$로 "$Tu = Tv$"를 "$u - v \in \operatorname{Ker} T$"로 바꿔 읽는다. (2)는 두 포함을 각각 (T-합)과 (T2)로 보인다.
:::

:::hint
(1)의 ($\Leftarrow$)에서 $Tu = Tv$인 $u$, $v$를 잡고 $T(u - v)$를 계산해 보세요.
:::

:::proof
(T-합), (T1), (T2)는 [[linear-map]]의 것이고 (B2), (B12)는 [[vector-space-basic-properties]]의 것이다. 단사의 정의와 그 동치 꼴("$f(a) = f(a')$이면 $a = a'$")은 [[injective-surjective-bijective|단사의 정의 항목]]에 있다.

**(1)의 증명.** ($\Rightarrow$) $T$가 단사라 하자. (T1)에 의해 $T0_V = 0_W$이므로 $0_V \in \operatorname{Ker} T$이다. $v \in \operatorname{Ker} T$이면 $Tv = 0_W = T0_V$이므로 단사의 동치 꼴에 의해 $v = 0_V$이다. 따라서 $\operatorname{Ker} T = \{0_V\}$이다.

($\Leftarrow$) $\operatorname{Ker} T = \{0_V\}$라 하고 $u, v \in V$에서 $Tu = Tv$라 하자. (T2)에 의해 $T(u - v) = Tu - Tv = Tv + (-Tv) = 0_W$이다. 마지막 등호는 (B2)이다. 따라서 $u - v \in \operatorname{Ker} T = \{0_V\}$이고 $u - v = 0_V$이다. (B12)에 의해 $u = v$이다. 단사의 동치 꼴에 의해 $T$는 단사이다.

**(2)의 증명.** ($\supseteq$) $h \in \operatorname{Ker} T$라 하자. (T-합)에 의해 $T(x_1 + h) = Tx_1 + Th = b + 0_W = b$이다. $0_W$가 영벡터이기 때문이다. 따라서 $x_1 + h$는 $Tx = b$의 해이다.

($\subseteq$) $x \in V$이고 $Tx = b$라 하자. $h = x - x_1$이라 하면 (T2)에 의해 $Th = Tx - Tx_1 = b - b = b + (-b) = 0_W$이다((B2)). 따라서 $h \in \operatorname{Ker} T$이다. 또
$$x_1 + h = x_1 + (x + (-x_1)) = x_1 + ((-x_1) + x) = (x_1 + (-x_1)) + x = 0_V + x = x$$
이다. 차례로 뺄셈의 정의, (V1), (V2), (B2), [[finite-sum-of-vectors|(H0)]]의 $0_V + x = x$에 의한다. 따라서 $x = x_1 + h$인 $h \in \operatorname{Ker} T$가 있고 $x$는 오른쪽 집합에 속한다. 두 포함에 의해 두 집합은 같다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ²의 대칭은 단사이다]
[[linear-map-examples]]의 (6)에 있는 $F$(각 $(x_1, x_2)$에서 값이 $(x_1, -x_2)$)의 핵을 구합시다. $F(x_1, x_2) = (0, 0)$이면 두 값을 비교해 $x_1 = 0$이고 $-x_2 = 0$입니다. $x_2 + (-x_2) = 0$이고 $-x_2 = 0$이므로 $x_2 = x_2 + 0 = 0$입니다((K4)). 따라서 $\operatorname{Ker} F = \{(0, 0)\}$이고 (1)에 의해 $F$는 단사입니다. 두 벡터를 직접 비교하지 않고 얻은 결론입니다.
:::

:::example[해집합이 핵을 평행하게 옮긴 것이다]
$p_2 : \mathbb{R}^3 \to \mathbb{R}$이 각 $x$에서 값이 $x_2$인 선형사상이라 하고 방정식 $p_2 x = 3$을 풉니다. $x_1 = (0, 3, 0)$이 하나의 해이고, $\operatorname{Ker} p_2$는 실수 $a$, $c$에 대하여 $(a, 0, c)$ 꼴인 벡터 전체입니다. (2)에 의해 해 전체는 $(0, 3, 0) + (a, 0, c) = (a, 3, c)$ 꼴인 벡터 전체, 곧 둘째 값이 $3$인 벡터 전체입니다. 이 해집합은 해가 하나가 아닙니다. $\operatorname{Ker} p_2$에 $(1, 0, 0) \ne 0_{\mathbb{R}^3}$이 있으므로 (1)에 의해 $p_2$는 단사가 아닙니다.
:::

:::counterexample[선형이 아니면 핵이 {0}이어도 단사가 아닐 수 있다]
$T : \mathbb{R} \to \mathbb{R}$가 모든 $x$에서 $Tx = x \cdot x$인 함수라 하고, 핵과 같은 식으로 $K = \{x : Tx = 0\}$이라 합시다. $x \cdot x = 0$이면 (K10)에 의해 $x = 0$이므로 $K = \{0\}$입니다($T(0) = 0$). 그러나 $T(1) = 1 \cdot 1 = 1$이고 $T(-1) = (-1)(-1) = 1 \cdot 1 = 1$입니다((K12)의 (iii)). $-1 = 1$이면 $0 = 1 + (-1) = 1 + 1 = 2$가 되어 $2 \ne 0$((K7))에 어긋나므로 $-1 \ne 1$입니다. 서로 다른 두 수가 같은 값으로 가므로 $T$는 단사가 아닙니다. (1)에서 $T$가 선형사상이라는 가정을 뺄 수 없습니다. 증명에서 $Tu = Tv$를 $T(u - v) = 0$으로 바꾸는 단계가 (T2)를 쓰기 때문입니다.
:::

## 확인 질문

:::check[$T : V \to W$가 선형사상이고 서로 다른 $u, v \in V$에서 $Tu = Tv$이면 $\operatorname{Ker} T$에는 영벡터가 아닌 원소가 있는가?]
있습니다. (T2)에 의해 $T(u - v) = Tu - Tv = 0_W$이므로 $u - v \in \operatorname{Ker} T$이고, $u \ne v$이므로 (B12)에 의해 $u - v \ne 0_V$입니다.
:::

:::check[$V = \{0_V\}$이면 모든 선형사상 $T : V \to W$는 단사인가?]
그렇습니다. (T1)에 의해 $0_V \in \operatorname{Ker} T$이고 $\operatorname{Ker} T \subseteq V = \{0_V\}$이므로 $\operatorname{Ker} T = \{0_V\}$입니다. (1)에 의해 $T$는 단사입니다.
:::
