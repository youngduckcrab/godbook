---
title: 선형사상의 공간
title_en: The Space of Linear Maps
aliases: [L(V, W), 선형사상 전체의 공간, 선형사상의 합, 선형사상의 스칼라배, space of linear maps, sum of linear maps, scalar multiple of a linear map]
kind: proposition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: V에서 W로의 선형사상 전체의 집합 L(V, W)에서 합과 스칼라배를 값마다 정하면 다시 선형사상이 되고, L(V, W)는 이 연산으로 벡터공간이며 영벡터는 영사상이다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, real-function-space, real-number-arithmetic, function, linear-map, linear-map-examples]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 4절 Linear transformations as a vector space, p.17–19
    checked: original
    note: "출처는 αT 와 T_1 + T_2 를 값마다 (αT)v = α(Tv), (T_1 + T_2)v = T_1 v + T_2 v 로 정한다(p.18). αT 가 선형임은 αu + βv 꼴의 한 조건으로 계산해 보이고 T_1 + T_2 의 선형성은 같은 논증을 되풀이하면 된다고 적는다. 이 항목은 (T-합), (T-배) 두 조건을 S + T 와 αT 에 대해 각각 확인한다. 출처는 V 에서 W 로의 선형사상 전체를 L(V, W) 로 쓰고 이 연산들이 벡터공간의 공리를 만족한다는 것은 쉽게 보일 수 있다고 적은 뒤, 첫째 분배법칙 α(T_1 + T_2) = αT_1 + αT_2 하나만 값마다 계산해 보인다(p.18). 이 항목은 (V1)–(V8) 전부를 하나씩 증명한다. 출처의 Remark(p.18)는 F^n 에서 F^m 으로의 선형사상의 연산이 행렬의 연산에 대응하고 행렬 전체가 벡터공간이므로 L(F^n, F^m) 도 벡터공간이라고 적는다. 이 항목은 그 경로를 쓰지 않고 일반 V, W 에서 직접 증명한다. 출처는 p.18–19에서 이 추상적인 증명을 기저가 없는 공간에도 쓸 수 있어서 보였다고 설명한다. 이 사이트의 벡터공간 정의의 (V4)는 모든 영벡터에 대하여 적혀 있으므로, 이 항목은 L(V, W)의 영벡터가 영사상 하나뿐임을 먼저 보인다. real-function-space 항목은 값이 실수인 함수의 공간만 다루므로 W 가 일반 벡터공간인 이 항목에서는 그 항목의 명제를 쓰지 않고 W 의 공리로 값마다 확인한다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 출처 메모의 틀린 서술, 출처와 같은 발상의 반례 표기, 예 하나에서 넘겨짚은 일반화, 건너뛴 증명 단계, 다른 항목의 예시에 기댄 인용을 보완했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이라 하고, $V$에서 $W$로의 [[linear-map|선형사상]] 전체의 집합을 $L(V, W)$로 쓴다. $S, T \in L(V, W)$와 실수 $\alpha$에 대하여, 각 $v \in V$에 $W$의 원소 $Sv + Tv$와 $\alpha(Tv)$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 다음 값을 갖는 $V$에서 $W$로의 함수 $S + T$와 $\alpha T$가 있다. 함수는 값으로 정해지므로 하나뿐이다.

$$(S + T)v = Sv + Tv, \qquad (\alpha T)v = \alpha(Tv) \qquad (v \in V)$$

1. $S + T$와 $\alpha T$는 선형사상이다. 곧 $S + T \in L(V, W)$이고 $\alpha T \in L(V, W)$이다.
2. 각 $(S, T) \in L(V, W) \times L(V, W)$에 $S + T$가, 각 $(\alpha, T) \in \mathbb{R} \times L(V, W)$에 $\alpha T$가 정해지므로 (G)에 의해 이 값을 갖는 두 함수가 있고, 이 두 함수를 덧셈과 스칼라배로 삼아 $L(V, W)$는 벡터공간이다. 영벡터는 [[linear-map-examples|영사상]] $o$(모든 $v \in V$에서 값이 $0_W$)이고, $T \in L(V, W)$의 덧셈 역원은 $(-1)T$, 곧 $v$에서의 값이 $-Tv$인 선형사상이다.
:::

:::english
Let $V$, $W$ be vector spaces, and write $L(V, W)$ for the set of all linear maps from $V$ to $W$. For $S, T \in L(V, W)$ and a real number $\alpha$, an element $Sv + Tv$ and an element $\alpha(Tv)$ of $W$ is assigned to each $v \in V$, so by (G) there are functions $S + T$ and $\alpha T$ from $V$ to $W$ with the following values. A function is determined by its values, so each is unique.

$$(S + T)v = Sv + Tv, \qquad (\alpha T)v = \alpha(Tv) \qquad (v \in V)$$

1. $S + T$ and $\alpha T$ are linear maps. That is, $S + T \in L(V, W)$ and $\alpha T \in L(V, W)$.
2. Since $S + T$ is assigned to each $(S, T) \in L(V, W) \times L(V, W)$ and $\alpha T$ to each $(\alpha, T) \in \mathbb{R} \times L(V, W)$, there are by (G) two functions with these values, and with these two functions as addition and scalar multiplication, $L(V, W)$ is a vector space. Its zero vector is the zero map $o$ (the function whose value is $0_W$ at every $v \in V$), and the additive inverse of $T \in L(V, W)$ is $(-1)T$, that is, the linear map whose value at $v$ is $-Tv$.
:::

## 직관

함수를 값마다 더하고 값마다 스칼라배하는 일은 [[real-function-space|실숫값 함수의 공간]]에서 이미 했습니다. 두 심사위원이 같은 참가자에게 점수를 주는 것으로 비유하면, $S + T$는 참가자마다 두 점수를 합한 점수표이고 $\alpha T$는 한 심사위원의 점수에 $\alpha$를 곱한 점수표입니다. 비유가 어긋나는 곳은 점수가 실수가 아니라 $W$의 벡터라는 점입니다. 합의 연산도 $W$의 덧셈이어야 하므로, 여덟 법칙이 성립하는지는 $W$의 법칙을 값마다 가져다 써서 확인해야 합니다.

새로 확인할 일이 두 가지 있습니다. 하나는 (1)로, 두 선형사상을 값마다 더한 함수가 다시 선형사상인지입니다. 모든 함수가 선형사상은 아니므로 이것은 거저 얻어지지 않습니다. 증명에서 합의 (T-합)은 $W$의 덧셈의 교환과 결합을((H3)을 통해), 스칼라배가 들어간 계산은 (V7)과 (V6)을 씁니다. 다른 하나는 (2)로, 벡터공간의 여덟 법칙입니다. 대부분은 값마다 $W$의 같은 법칙으로 끝나지만 (V4)가 "모든 영벡터 $z$에 대하여" 꼴이라서 영벡터가 영사상 하나뿐임을 먼저 보여야 합니다. 그래서 증명에서 (V3) 다음에 영벡터의 유일성을 보이고 (V4)를 증명합니다.

## 증명

:::idea
함수의 같음은 값마다의 같음이므로, (1)과 (2)의 모든 등식을 $x \in V$에서의 값으로 풀어 $W$의 법칙을 쓴다. (V4)는 영벡터가 영사상뿐임을 보인 다음 $T$와 $(-1)T$를 더해 확인한다.
:::

:::hint
$S + T$의 (T-합)에서 $(Su + Sv) + (Tu + Tv)$를 $(Su + Tu) + (Sv + Tv)$로 바꾸는 일은 [[finite-sum-of-vectors|(H3)]]을 길이 $2$인 열에 쓰면 됩니다.
:::

:::hint
(V4)에서 $L(V, W)$의 영벡터 $Z$를 하나 잡고, 영벡터의 정의에서 $T = o$로 둔 식 $o + Z = o$를 값마다 읽어 보세요.
:::

:::proof
증명에서 (V1)–(V8)은 [[vector-space]]의 것이고 $W$에서 쓸 때는 $W$의 연산에 대한 것이다. (B1)–(B5)는 [[vector-space-basic-properties]]의 것이고 (K1)은 [[real-number-arithmetic]]의 것이다. 정의역이 $V$인 두 함수 $f, g : V \to W$는 모든 $x \in V$에서 $f(x) = g(x)$일 때 정확히 같다([[function]]). 아래에서 $R$, $S$, $T$는 $L(V, W)$의 원소, $\alpha$, $\beta$는 실수, $x$, $u$, $v$는 $V$의 원소이다.

**(1)의 증명.** $S + T$의 (T-합): $u, v \in V$이면 $S$와 $T$가 선형이므로
$$(S + T)(u + v) = S(u + v) + T(u + v) = (Su + Sv) + (Tu + Tv) = (Su + Tu) + (Sv + Tv) = (S + T)u + (S + T)v$$
이다. 차례로 $S + T$의 정의, $S$와 $T$의 (T-합), (H3), $S + T$의 정의에 의한다. (H3)은 길이 $2$인 열 $Su, Sv$와 $Tu, Tv$에 쓴 것이고 [[finite-sum-of-vectors|(H0)]]에 의해 길이 $2$인 열의 합은 덧셈이다. $S + T$의 (T-배): $v \in V$이고 $\alpha$가 실수이면
$$(S + T)(\alpha v) = S(\alpha v) + T(\alpha v) = \alpha Sv + \alpha Tv = \alpha(Sv + Tv) = \alpha((S + T)v)$$
이다. 차례로 $S + T$의 정의, $S$와 $T$의 (T-배), $W$에서의 (V7)의 양변을 바꾼 것, $S + T$의 정의에 의한다.

$\alpha T$의 (T-합): $u, v \in V$이면 $(\alpha T)(u + v) = \alpha(T(u + v)) = \alpha(Tu + Tv) = \alpha Tu + \alpha Tv = (\alpha T)u + (\alpha T)v$이다. 차례로 $\alpha T$의 정의, $T$의 (T-합), $W$에서의 (V7), $\alpha T$의 정의에 의한다. $\alpha T$의 (T-배): 실수 $\beta$와 $v \in V$에 대하여
$$(\alpha T)(\beta v) = \alpha(T(\beta v)) = \alpha(\beta Tv) = (\alpha\beta)Tv = (\beta\alpha)Tv = \beta(\alpha Tv) = \beta((\alpha T)v)$$
이다. 차례로 $\alpha T$의 정의, $T$의 (T-배), $W$에서의 (V6), (K1), $W$에서의 (V6), $\alpha T$의 정의에 의한다.

**(2)의 증명.** 먼저 두 연산이 함수라는 것은 (1)과 (G)에서 나온다. 이제 (V1)–(V8)을 하나씩 보인다. 각 등식에서 양변은 $V$에서 $W$로의 함수이므로 모든 $x \in V$에서 값이 같음을 보이면 된다.

- (V1) $(S + T)x = Sx + Tx = Tx + Sx = (T + S)x$이다. 가운데 등호는 $W$에서의 (V1)이다. 따라서 $S + T = T + S$이다.
- (V2) $((R + S) + T)x = (R + S)x + Tx = (Rx + Sx) + Tx = Rx + (Sx + Tx) = Rx + (S + T)x = (R + (S + T))x$이다. 세 번째 등호는 $W$에서의 (V2)이다. 따라서 $(R + S) + T = R + (S + T)$이다.
- (V3) $o$는 [[linear-map-examples|선형사상의 예]]의 (1)에 의해 선형사상이므로 $L(V, W)$의 원소이다. 모든 $T \in L(V, W)$와 $x \in V$에서 $(T + o)x = Tx + ox = Tx + 0_W = Tx$이다($0_W$가 영벡터이므로). 따라서 $T + o = T$이고 $o$는 $L(V, W)$의 영벡터이다.
- 영벡터의 유일성. $Z$가 $L(V, W)$의 영벡터라 하자. 곧 모든 $T \in L(V, W)$에서 $T + Z = T$이다. $T = o$로 두면 $o + Z = o$이다. 한편 모든 $x \in V$에서 $(o + Z)x = ox + Zx = 0_W + Zx = Zx$이다. 마지막 등호는 [[finite-sum-of-vectors|(H0)]]의 $0_W + y = y$에 의한다. 따라서 $o + Z = Z$이고, $Z = o + Z = o$이다. 곧 $L(V, W)$의 영벡터는 $o$뿐이다.
- (V4) $Z$가 $L(V, W)$의 영벡터라 하면 위에서 $Z = o$이다. $T \in L(V, W)$이면 (1)에 의해 $(-1)T \in L(V, W)$이다. 모든 $x \in V$에서 $(T + (-1)T)x = Tx + (-1)Tx = Tx + (-Tx) = 0_W = ox$이다. 차례로 정의, [[vector-space-basic-properties|(B5)]], (B2)에 의한다. 따라서 $T + (-1)T = o = Z$이다. 곧 $T + w = Z$인 $w$로 $(-1)T$가 있다.
- (V5) $(1T)x = 1(Tx) = Tx$이다. 둘째 등호는 $W$에서의 (V5)이다. 따라서 $1T = T$이다.
- (V6) $((\alpha\beta)T)x = (\alpha\beta)(Tx) = \alpha(\beta(Tx)) = \alpha((\beta T)x) = (\alpha(\beta T))x$이다. 둘째 등호는 $W$에서의 (V6)이다. 따라서 $(\alpha\beta)T = \alpha(\beta T)$이다.
- (V7) $(\alpha(S + T))x = \alpha((S + T)x) = \alpha(Sx + Tx) = \alpha Sx + \alpha Tx = (\alpha S)x + (\alpha T)x = (\alpha S + \alpha T)x$이다. 셋째 등호는 $W$에서의 (V7)이다. 따라서 $\alpha(S + T) = \alpha S + \alpha T$이다.
- (V8) $((\alpha + \beta)T)x = (\alpha + \beta)(Tx) = \alpha Tx + \beta Tx = (\alpha T)x + (\beta T)x = (\alpha T + \beta T)x$이다. 둘째 등호는 $W$에서의 (V8)이다. 따라서 $(\alpha + \beta)T = \alpha T + \beta T$이다.

따라서 $L(V, W)$는 벡터공간이고 영벡터는 $o$이다. $(-1)T$는 $T + w = o$인 $w$이므로 덧셈 역원이고, 그 값은 (B5)에 의해 $((-1)T)x = (-1)(Tx) = -Tx$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ에서 ℝ로의 선형사상의 공간]
[[linear-map-examples]]의 (5)에 의해 $L(\mathbb{R}, \mathbb{R})$의 원소는 실수 $a$마다 모든 실수 $x$에서 값이 $ax$인 함수를 $m_a$라 하면, $L(\mathbb{R}, \mathbb{R})$의 원소는 정확히 $m_a$ 꼴의 함수입니다. $m_2 + m_3$의 값은 $(m_2 + m_3)x = 2x + 3x = (2 + 3)x = 5x$이므로((K12)의 (i), (K7)) $m_2 + m_3 = m_5$입니다. $4m_2$의 값은 $(4m_2)x = 4(2x) = (4 \cdot 2)x = 8x$이므로((K2), (K7)) $4m_2 = m_8$입니다. 이처럼 $L(\mathbb{R}, \mathbb{R})$의 합과 스칼라배는 $a$를 실수로 보았을 때의 합과 곱을 따릅니다.
:::

:::counterexample[한쪽이 선형사상이 아니면 합이 선형사상이 아닐 수 있다]
[[linear-map-examples]]의 (2)에 의해 항등함수 $S : \mathbb{R} \to \mathbb{R}$($Sx = x$)는 선형사상입니다. $T$는 모든 $x$에서 $Tx = x \cdot x$인 함수입니다. $T(1 + 1) = T(2) = 2 \cdot 2 = 4$이고 $T(1) + T(1) = 1 + 1 = 2$이므로((K4), (K7)) (T-합)이 깨져 $T$는 선형사상이 아닙니다. 진술의 $S + T$와 같은 방식으로, 각 $x$에서 값이 $Sx + Tx = x + x \cdot x$인 함수를 $S + T$라 합시다. 이 함수에서 $(S + T)(1 + 1) = (S + T)(2) = 2 + 2 \cdot 2 = 6$이고 $(S + T)(1) + (S + T)(1) = (1 + 1 \cdot 1) + (1 + 1 \cdot 1) = 2 + 2 = 4$입니다. $6 \ne 4$이므로 $S + T$는 선형사상이 아닙니다. (1)에서 두 사상이 모두 선형이라는 가정을 뺄 수 없습니다.
:::

## 확인 질문

:::check[$S, T \in L(V, W)$이고 $v \in V$에서 $Sv = a$, $Tv = b$이면 $(2S + (-1)T)v$는 무엇인가?]
$2a + (-b)$입니다. 정의에 의해 $(2S + (-1)T)v = (2S)v + ((-1)T)v = 2(Sv) + (-1)(Tv) = 2a + (-1)b$이고, [[vector-space-basic-properties|(B5)]]에 의해 $(-1)b = -b$입니다.
:::

:::check[$V = \{0_V\}$이면 $L(V, W)$는 무엇인가?]
$L(V, W) = \{o\}$입니다. $T \in L(V, W)$이면 $V$의 원소는 $0_V$뿐이고 (T1)에 의해 $T0_V = 0_W$이므로 $T$와 $o$는 정의역이 같고 모든 원소에서 값이 같습니다. 따라서 $T = o$입니다. 거꾸로 $o$는 선형사상입니다. 원소가 하나뿐인 벡터공간이 됩니다.
:::
