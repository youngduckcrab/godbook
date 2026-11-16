---
title: 선형사상의 예
title_en: Examples of Linear Maps
aliases: [영사상, 항등사상, 스칼라배 사상, 점에서의 값, 좌표 함수, 대칭, zero map, identity map, evaluation map, reflection]
kind: proposition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 영사상, 항등함수, 스칼라배 사상, 한 점에서의 값을 취하는 사상, ℝ²에서 둘째 값의 부호를 바꾸는 사상이 선형사상임을 보이고, ℝ에서 ℝ로의 선형사상은 정확히 어떤 실수를 곱하는 사상임을 증명한다.
requires: [vector-space, vector-space-basic-properties, real-number-arithmetic, real-function-space, linear-map, function, inverse-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 3.1절 Examples, p.12–13. 6.1절 Identity transformation, p.24
    checked: original
    note: "출처 3.1절의 예는 다항식의 미분, 평면의 회전, 첫째 좌표축에 대한 대칭, ℝ에서 ℝ로의 선형사상이다. 미분과 회전은 이 사이트에 다항식과 삼각함수가 아직 없어서 싣지 않았다. 이 항목의 (6)은 출처의 대칭과 같은 사상이다. 출처는 열벡터를 세로로 쓴 공식 T(x₁, x₂) = (x₁, −x₂) 를 적고 이 공식에서 선형임을 확인하기 쉽다고 하는데, 이 항목은 확인을 직접 썼고 ℝ² 의 원소를 (x₁, x₂) 로 쓴다. 이 항목의 (5)의 (⇒)는 출처 p.13이 ℝ 에서 ℝ 로의 선형사상은 T(x) = ax (a = T(1)) 꼴이라고 쓰고 T(x) = T(x × 1) = xT(1) = xa = ax 로 보이는 것과 같은 계산이고, 이 계산에서 x × 1 은 실수의 곱이고 xT(1) 은 ℝ 을 벡터공간으로 본 스칼라배라는 점을 증명에 밝혔다. 역(ax 꼴이면 선형사상이다)은 출처 p.13이 진술하지 않아 이 항목이 (⇐)로 증명한다. 출처 p.24는 항등사상 I_V x = x 를 선형사상 가운데 특별한 것으로 소개하고 선형성을 따로 보이지 않는다. 출처 1장 3.1절과 6.1절의 예에는 영사상, 스칼라배 사상, 한 점에서의 값을 취하는 사상이 나오지 않는다. (1), (3), (4)는 이 사이트가 골랐고 증명은 이 사이트가 썼다. 반례 'x에 1을 더하는 사상'은 출처 1장 8절 p.32의 평행이동(0을 보존하지 않아 선형이 아니다)과 같은 발상이다. 나머지 반례와 예시와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이라 하자. 아래에서 말하는 함수는 모두 각 원소에 값이 하나씩 정해져 있으므로 [[real-function-space|(G)]]에 의해 있다. 실수 전체의 집합 $\mathbb{R}$은 실수의 합을 덧셈으로, 실수의 곱을 스칼라배로 하는 벡터공간이다([[real-function-space|(2)]]).

1. (영사상) 모든 $v \in V$에서 값이 $0_W$인 함수 $o : V \to W$는 [[linear-map|선형사상]]이다. 이 함수를 **영사상**(zero map)이라 한다.
2. (항등함수) $V$ 위의 [[inverse-function|항등함수]] $i_V : V \to V$는 선형사상이다.
3. (스칼라배 사상) $\gamma$가 실수이면 모든 $v \in V$에서 값이 $\gamma v$인 함수 $V \to V$는 선형사상이다.
4. (한 점에서의 값) $X$가 집합이고 $x_0 \in X$이면 각 $f \in \mathbb{R}^X$에서 값이 $f(x_0)$인 함수 $\mathbb{R}^X \to \mathbb{R}$은 선형사상이다. 특히 $n$이 자연수이고 $i \in \{1, \dots, n\}$이면 각 $x = (x_1, \dots, x_n) \in \mathbb{R}^n$에서 값이 $x_i$인 함수 $\mathbb{R}^n \to \mathbb{R}$은 선형사상이다.
5. 함수 $T : \mathbb{R} \to \mathbb{R}$가 선형사상인 것은 정확히 어떤 실수 $a$가 있어 모든 실수 $x$에서 $Tx = ax$일 때이다. 이때 $a = T1$이다. (오른쪽의 $ax$는 실수의 곱이다.)
6. 각 $(x_1, x_2) \in \mathbb{R}^2$에서 값이 $(x_1, -x_2)$인 함수 $F : \mathbb{R}^2 \to \mathbb{R}^2$는 선형사상이다.
:::

:::english
Let $V$, $W$ be vector spaces. Each function mentioned below exists by (G), because a value is assigned to every element. The set $\mathbb{R}$ of real numbers is a vector space with the sum of real numbers as addition and the product of real numbers as scalar multiplication (by (2) of the entry on spaces of real-valued functions).

1. (Zero map) The function $o : V \to W$ whose value is $0_W$ at every $v \in V$ is a linear map. It is called the **zero map**.
2. (Identity function) The identity function $i_V : V \to V$ on $V$ is a linear map.
3. (Scalar multiplication map) If $\gamma$ is a real number, the function $V \to V$ whose value at every $v \in V$ is $\gamma v$ is a linear map.
4. (Value at a point) If $X$ is a set and $x_0 \in X$, the function $\mathbb{R}^X \to \mathbb{R}$ whose value at each $f \in \mathbb{R}^X$ is $f(x_0)$ is a linear map. In particular, if $n$ is a natural number and $i \in \{1, \dots, n\}$, the function $\mathbb{R}^n \to \mathbb{R}$ whose value at each $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ is $x_i$ is a linear map.
5. A function $T : \mathbb{R} \to \mathbb{R}$ is a linear map exactly when there is a real number $a$ such that $Tx = ax$ for every real number $x$. In that case $a = T1$. (The $ax$ on the right is the product of real numbers.)
6. The function $F : \mathbb{R}^2 \to \mathbb{R}^2$ whose value at each $(x_1, x_2) \in \mathbb{R}^2$ is $(x_1, -x_2)$ is a linear map.
:::

## 직관

여섯 가지 예는 각각 일상의 기계에 대응됩니다. 영사상은 무엇을 넣어도 빈손으로 내놓는 지우개, 항등함수는 원본을 그대로 내놓는 복사기, 스칼라배 사상은 배율이 $\gamma$인 확대·축소 복사기입니다. 한 점에서의 값은 표에서 정해진 한 칸만 읽는 일이고, (6)은 둘째 칸의 부호만 바꾸는 거울입니다. 복사기 비유가 맞지 않는 곳은 배율입니다. 실제 복사기의 배율은 양수이지만 (3)의 $\gamma$는 $0$이나 음수여도 됩니다.

(5)는 한 줄짜리 공간 $\mathbb{R}$에서는 선형사상이 "일정한 비율로 곱하기"뿐이라는 말입니다. $x$를 $ax + 1$로 보내는 것처럼 상수를 더하면 비율 관계가 깨집니다. 아래 두 반례는 선형사상처럼 보이지만 각각 (T1)과 (T-합)이 깨지는 함수입니다. 증명은 모두 정의의 두 조건을 값마다 확인하는 것이고, (5)의 (⇒)만 $x = x \cdot 1$이라는 한 가지 관찰에 기댑니다. 이 식에서 $x \cdot 1$은 실수의 곱이면서 동시에 벡터 $1$의 $x$배, 곧 스칼라배라는 두 역할을 합니다.

## 증명

:::idea
각 사상이 (T-합)과 (T-배)를 만족하는지 값마다 계산한다. (5)의 (⇒)는 $x$를 벡터 $1$의 $x$배로 읽어 (T-배)를 한 번 쓰고, (6)은 $\mathbb{R}^2$의 연산이 값마다라는 것과 실수의 부호 규칙을 쓴다.
:::

:::hint
(3)에서 $\gamma(\alpha v)$를 $\alpha(\gamma v)$로 바꾸려면 [[vector-space|(V6)]]을 두 번 쓰고 그 사이에 실수의 곱셈의 교환법칙을 써야 합니다.
:::

:::hint
(5)의 (⇒)에서 임의의 실수 $x$를 벡터 $1$의 스칼라배 $x \cdot 1$로 쓰면 (T-배)를 적용할 수 있습니다.
:::

:::proof
증명에서 인용하는 (V1)–(V8)은 [[vector-space]]의 것, (B1)–(B12)는 [[vector-space-basic-properties]]의 것이다. (K1)–(K12)는 [[real-number-arithmetic]]의 것이고, (T-합), (T-배)는 [[linear-map]]의 것이다.

**(1)의 증명.** $u, v \in V$이면 $o(u + v) = 0_W$이고 $ou + ov = 0_W + 0_W$이다. $0_W$는 영벡터이므로 모든 $x \in W$에서 $x + 0_W = x$이고, $x = 0_W$로 두면 $0_W + 0_W = 0_W$이다. 따라서 $o(u + v) = ou + ov$이다. 실수 $\alpha$와 $v \in V$에 대하여 $o(\alpha v) = 0_W$이고 [[vector-space-basic-properties|(B4)]]에 의해 $\alpha ov = \alpha 0_W = 0_W$이다. 따라서 $o(\alpha v) = \alpha ov$이다.

**(2)의 증명.** $u, v \in V$이면 $i_V(u + v) = u + v = i_V u + i_V v$이다. 실수 $\alpha$와 $v \in V$에 대하여 $i_V(\alpha v) = \alpha v = \alpha i_V v$이다.

**(3)의 증명.** 주어진 함수를 $S$라 하자. $u, v \in V$이면 [[vector-space|(V7)]]에 의해 $S(u + v) = \gamma(u + v) = \gamma u + \gamma v = Su + Sv$이다. 실수 $\alpha$와 $v \in V$에 대하여 (V6)에 의해 $S(\alpha v) = \gamma(\alpha v) = (\gamma\alpha)v$이고, (K1)에 의해 $\gamma\alpha = \alpha\gamma$이며, 다시 (V6)에 의해 $(\alpha\gamma)v = \alpha(\gamma v) = \alpha Sv$이다. 따라서 $S(\alpha v) = \alpha Sv$이다.

**(4)의 증명.** 주어진 함수를 $E$라 하자. $f, g \in \mathbb{R}^X$이면 [[real-function-space]]에서 정한 $\mathbb{R}^X$의 덧셈에 의해 $(f + g)(x_0) = f(x_0) + g(x_0)$이고, $\mathbb{R}$의 덧셈은 실수의 합이므로 $E(f + g) = Ef + Eg$이다. 실수 $\alpha$에 대하여 $\mathbb{R}^X$의 스칼라배에 의해 $(\alpha f)(x_0) = \alpha f(x_0)$이고, $\mathbb{R}$의 스칼라배는 실수의 곱이므로 $E(\alpha f) = \alpha Ef$이다. 특수한 경우는 $X = \{1, \dots, n\}$, $x_0 = i$이다. $\mathbb{R}^n$은 $\mathbb{R}^{\{1, \dots, n\}}$이고 $x = (x_1, \dots, x_n)$의 $i$번째 값이 $x_i = x(i)$이기 때문이다.

**(5)의 증명.** ($\Rightarrow$) $T$가 선형사상이라 하고 $a = T1$이라 하자. $x$가 실수이면 (K4)에 의해 $x = x \cdot 1$인데, 벡터공간 $\mathbb{R}$에서 이 곱은 벡터 $1$의 $x$배, 곧 스칼라배이다. (T-배)에 의해 $Tx = T(x \cdot 1) = x \cdot T1 = xa$이고 (K1)에 의해 $xa = ax$이다. 따라서 모든 $x$에서 $Tx = ax$이다. ($\Leftarrow$) 실수 $a$가 있어 모든 $x$에서 $Tx = ax$라 하자. $\mathbb{R}$의 덧셈과 스칼라배는 실수의 합과 곱이다. $u, v$가 실수이면 (K3)에 의해 $T(u + v) = a(u + v) = au + av = Tu + Tv$이다. 실수 $\alpha$와 $v$에 대하여 (K2), (K1), (K2)에 의해 $T(\alpha v) = a(\alpha v) = (a\alpha)v = (\alpha a)v = \alpha(av) = \alpha Tv$이다. 따라서 $T$는 선형사상이다. 마지막으로 $Tx = ax$에서 $x = 1$로 두면 (K4)에 의해 $T1 = a \cdot 1 = a$이다.

**(6)의 증명.** [[real-function-space|값마다 계산하는 연산]]에 의해 $u = (u_1, u_2)$, $v = (v_1, v_2)$이면 $u + v = (u_1 + v_1, u_2 + v_2)$이고 실수 $\alpha$에 대하여 $\alpha u = (\alpha u_1, \alpha u_2)$이다. 따라서
$$F(u + v) = (u_1 + v_1, -(u_2 + v_2)) = (u_1 + v_1, (-u_2) + (-v_2)) = (u_1, -u_2) + (v_1, -v_2) = Fu + Fv$$
이다. 차례로 $F$의 정의, (K12)의 (iv), $\mathbb{R}^2$의 덧셈에 의한다. 또
$$F(\alpha u) = (\alpha u_1, -(\alpha u_2)) = (\alpha u_1, \alpha(-u_2)) = \alpha(u_1, -u_2) = \alpha Fu$$
이다. 차례로 $F$의 정의, (K12)의 (ii), $\mathbb{R}^2$의 스칼라배에 의한다. $\blacksquare$
:::

## 예시와 반례

:::example[함수의 공간에서 한 점의 값 읽기]
$X = \mathbb{R}$이라 하고, $f$, $g \in \mathbb{R}^X$를 모든 실수 $t$에서 $f(t) = t \cdot t$, $g(t) = t + 1$인 함수라 합시다. $E$는 각 $h \in \mathbb{R}^X$에서 값이 $h(2)$인 사상입니다. (4)에 의해 $E$는 선형사상이므로 $E(f + 3g) = Ef + 3Eg$입니다. 오른쪽은 $f(2) + 3g(2) = 2 \cdot 2 + 3 \cdot (2 + 1) = 4 + 9 = 13$입니다. 왼쪽을 정의에서 바로 계산해도 $(f + 3g)(2) = f(2) + (3g)(2) = 4 + 3 \cdot 3 = 13$으로 같습니다. 정수 사이의 계산은 (K7)에 의합니다.
:::

:::example[ℝ²의 대칭]
(6)의 $F$에서 $F(3, 5) = (3, -5)$입니다. $2(3, 5) = (2 \cdot 3, 2 \cdot 5) = (6, 10)$이므로 $F(2(3, 5)) = F(6, 10) = (6, -10)$입니다. 한편 $2F(3, 5) = 2(3, -5) = (2 \cdot 3, 2 \cdot (-5)) = (6, -(2 \cdot 5)) = (6, -10)$이어서((K12)의 (ii)) (T-배)가 이 벡터에서 성립합니다.
:::

:::counterexample[x에 1을 더하는 사상은 선형사상이 아니다]
$T : \mathbb{R} \to \mathbb{R}$가 모든 실수 $x$에서 $Tx = x + 1$인 함수라 합시다. $\mathbb{R}$의 영벡터는 실수 $0$입니다((K8)의 (i)). $T0 = 0 + 1 = 1$이고 $1 \ne 0$이므로((K4)) $T0_{\mathbb{R}} \ne 0_{\mathbb{R}}$입니다. [[linear-map|선형사상의 성질]] (T1)에 의해 선형사상은 영벡터를 영벡터로 보내므로 $T$는 선형사상이 아닙니다.
:::

:::counterexample[두 값을 곱하는 사상은 선형사상이 아니다]
$S : \mathbb{R}^2 \to \mathbb{R}$가 각 $(x_1, x_2)$에서 값이 $x_1 x_2$인 함수라 합시다. $(1, 0) + (0, 1) = (1 + 0, 0 + 1) = (1, 1)$이고((K4), (K1)) $S(1, 1) = 1 \cdot 1 = 1$입니다. 한편 $S(1, 0) + S(0, 1) = 1 \cdot 0 + 0 \cdot 1 = 0 + 0 = 0$입니다((K9), (K4)). $1 \ne 0$이므로 (T-합)이 깨져서 $S$는 선형사상이 아닙니다. $S(0, 0) = 0 \cdot 0 = 0$이므로 (T1)만으로는 이 함수가 선형사상이 아님을 알 수 없습니다.
:::

## 확인 질문

:::check[(4)의 $p_2 : \mathbb{R}^3 \to \mathbb{R}$ (각 $x$에서 값이 $x_2$)에 대하여 $p_2(2(1, 5, 3) + 1(0, 1, 1))$을 구하여라.]
$p_2$는 선형사상이므로 (T3)에서 $p_2(2(1, 5, 3) + 1(0, 1, 1)) = 2p_2(1, 5, 3) + 1p_2(0, 1, 1) = 2 \cdot 5 + 1 \cdot 1 = 11$입니다. 벡터를 먼저 계산해도 $2(1, 5, 3) = (2, 10, 6)$이고 $(2, 10, 6) + (0, 1, 1) = (2, 11, 7)$이므로 $p_2$의 값은 $11$입니다.
:::

:::check[$T : \mathbb{R} \to \mathbb{R}$가 선형사상이고 $T(3) = 12$이면 $T(-2)$는 무엇인가?]
(5)에 의해 $Tx = ax$이고 $a = T1$인 실수 $a$가 있습니다. $T(3) = a \cdot 3 = 12 = 4 \cdot 3$이고 $3 \ne 0$이므로 (K1), (K11)에 의해 $a = 4$입니다. 따라서 $T(-2) = 4 \cdot (-2) = -(4 \cdot 2) = -8$입니다((K12)의 (ii)).
:::
