---
title: 선형사상의 합성
title_en: Composition of Linear Maps
aliases: [선형사상의 합성, 합성의 선형성, composition of linear maps, composition is linear]
kind: proposition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 선형사상의 합성은 선형사상이고, 항등함수와의 합성은 원래 함수이며, 합성은 선형사상의 덧셈과 스칼라배에 대하여 분배법칙과 스칼라 법칙을 만족한다.
requires: [vector-space, vector-space-basic-properties, real-number-arithmetic, function, function-composition, inverse-function, linear-map, linear-map-examples, linear-maps-form-a-vector-space]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5.2절 Motivation, composition of linear transformations, p.20. 5.3절 Properties of matrix multiplication, p.22. 6.1절 Identity transformation and identity matrix, p.24"
    checked: original
    note: "출처는 p.20에서 선형사상 T_1 : F^n → F^m 과 T_2 : F^r → F^n 의 합성 T(x) = T_1(T_2(x))를 정하고 T 가 선형사상임을 쉽게 보일 수 있다며 연습문제로 돌린다. 이 항목의 (1)이 그 증명이다(일반 벡터공간 U, V, W 에서). 출처는 p.22에서 행렬 곱의 결합·분배·스칼라 법칙이 쉽게 증명된다고 하고 선형사상에 대해 대응하는 성질을 증명하면 선형사상의 성질은 거의 정의에서 나온다고만 적는다. 이 항목의 (3)이 분배법칙과 스칼라 법칙을 선형사상에 대해 증명한 것이다. 결합법칙은 composition-is-associative 항목에 있다. 출처는 p.24에서 항등사상에 대해 AI = A, IA = A 가 성립한다고 적고 앞에 'Clearly'를 붙인다. 이 항목의 (2)가 이에 해당하며, 이 사이트의 어느 항목의 진술에도 없으므로 진술에 넣고 증명했다. (2)는 선형성과 무관하게 모든 함수에서 성립한다. 출처는 합성을 T_1 ∘ T_2 로 정의한 뒤 T_1 T_2 로 쓰겠다고 하고, 이 사이트는 T_1 ∘ T_2 로 쓴다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 출처 메모의 틀린 서술, 출처와 같은 발상의 반례 표기, 예 하나에서 넘겨짚은 일반화, 건너뛴 증명 단계, 다른 항목의 예시에 기댄 인용을 보완했다."
added: 2026-11-16
---

:::statement
$U$, $V$, $W$가 [[vector-space|벡터공간]]이라 하자.

1. $T : U \to V$와 $S : V \to W$가 [[linear-map|선형사상]]이면 [[function-composition|합성]] $S \circ T : U \to W$는 선형사상이다.
2. (선형성과 무관한 사실) $A$, $B$가 집합이고 $f : A \to B$가 [[function|함수]]이면 $f \circ i_A = f$이고 $i_B \circ f = f$이다. 여기서 $i_A$, $i_B$는 [[inverse-function|항등함수]]이다. 특히 선형사상 $T : U \to V$에서 $T \circ i_U = T$이고 $i_V \circ T = T$이다.
3. $T, T_1, T_2 \in L(U, V)$, $S, S_1, S_2 \in L(V, W)$이고 $\alpha$가 실수이면 다음이 성립한다. 여기서 $L(U, V)$ 등의 덧셈과 스칼라배는 [[linear-maps-form-a-vector-space|선형사상의 공간]]에서 정한 것이고, (1)에 의해 합성은 $L(U, W)$의 원소이다.
   - $(S_1 + S_2) \circ T = S_1 \circ T + S_2 \circ T$.
   - $S \circ (T_1 + T_2) = S \circ T_1 + S \circ T_2$.
   - $(\alpha S) \circ T = \alpha(S \circ T) = S \circ (\alpha T)$.
:::

:::english
Let $U$, $V$, $W$ be vector spaces.

1. If $T : U \to V$ and $S : V \to W$ are linear maps, then the composition $S \circ T : U \to W$ is a linear map.
2. (A fact unrelated to linearity) If $A$, $B$ are sets and $f : A \to B$ is a function, then $f \circ i_A = f$ and $i_B \circ f = f$, where $i_A$, $i_B$ are the identity functions. In particular, for a linear map $T : U \to V$ we have $T \circ i_U = T$ and $i_V \circ T = T$.
3. If $T, T_1, T_2 \in L(U, V)$, $S, S_1, S_2 \in L(V, W)$ and $\alpha$ is a real number, then the following hold. Here the addition and scalar multiplication of $L(U, V)$ and so on are those defined in the entry on the space of linear maps, and by (1) the compositions are elements of $L(U, W)$.
   - $(S_1 + S_2) \circ T = S_1 \circ T + S_2 \circ T$.
   - $S \circ (T_1 + T_2) = S \circ T_1 + S \circ T_2$.
   - $(\alpha S) \circ T = \alpha(S \circ T) = S \circ (\alpha T)$.
:::

## 직관

두 기계를 이어 붙인 기계도 덧셈과 스칼라배를 보존한다는 것이 (1)입니다. 환산기 두 개를 차례로 거칠 때, 먼저 합친 뒤 거치나 각각 거친 뒤 합치나 같습니다. 비유가 맞지 않는 곳은 기계의 순서입니다. $S \circ T$는 $T$를 먼저 적용하므로 두 환산기를 바꿔 이으면 일반적으로 다른 기계가 되고, 이 항목은 순서를 바꾼 같음을 주장하지 않습니다.

(2)는 아무것도 하지 않는 함수를 앞이나 뒤에 이어도 달라지지 않는다는 말이고, 선형사상이 아니어도 모든 함수에서 성립합니다. (3)은 합성이 덧셈과 스칼라배에 대해 분배법칙처럼 행동한다는 말입니다. 증명은 모두 값마다 계산하는 것인데, 등식마다 선형성이 필요한 쪽이 다릅니다. $(S_1 + S_2) \circ T$와 $(\alpha S) \circ T$의 등식은 정의만으로 성립하고, $S \circ (T_1 + T_2)$와 $S \circ (\alpha T)$의 등식은 $S$가 (T-합)과 (T-배)를 만족한다는 것을 씁니다. 안쪽 함수의 덧셈은 바깥 함수가 보존해야 밖으로 나오기 때문입니다.

## 증명

:::idea
모든 등식을 정의역의 원소에서의 값으로 풀어 비교한다. (1)은 (T-합), (T-배)를 두 번 쓴다. (3)에서는 둘째 등식과 셋째 등식의 오른쪽 부분만 $S$의 선형성을 쓴다.
:::

:::hint
(3)에서 $S \circ (T_1 + T_2)$의 $u$에서의 값은 $S((T_1 + T_2)u) = S(T_1 u + T_2 u)$입니다. 여기서 $S$의 (T-합)을 쓸 수 있습니다.
:::

:::proof
(T-합), (T-배)는 [[linear-map]]의 것이다. 정의역이 같은 두 함수는 모든 원소에서 값이 같을 때 정확히 같다([[function]]). 합성의 값은 $(g \circ f)(x) = g(f(x))$이다([[function-composition]]).

**(1)의 증명.** $u, u' \in U$이면 $T$의 (T-합), $S$의 (T-합)에 의해
$$(S \circ T)(u + u') = S(T(u + u')) = S(Tu + Tu') = S(Tu) + S(Tu') = (S \circ T)(u) + (S \circ T)(u')$$
이다. 실수 $\alpha$와 $u \in U$에 대하여 $T$의 (T-배), $S$의 (T-배)에 의해 $(S \circ T)(\alpha u) = S(T(\alpha u)) = S(\alpha Tu) = \alpha S(Tu) = \alpha (S \circ T)(u)$이다.

**(2)의 증명.** $f \circ i_A$와 $i_B \circ f$는 둘 다 정의역이 $A$인 함수이다. $x \in A$이면 $(f \circ i_A)(x) = f(i_A(x)) = f(x)$이고 $(i_B \circ f)(x) = i_B(f(x)) = f(x)$이다. 따라서 모든 $x$에서 값이 $f(x)$와 같으므로 $f \circ i_A = f$이고 $i_B \circ f = f$이다. 특수한 경우는 $A = U$, $B = V$, $f = T$이다.

**(3)의 증명.** 각 등식의 양변은 $U$에서 $W$로의 함수이므로 $u \in U$에서의 값이 같음을 보인다. 합성은 (1)에 의해 $L(U, W)$의 원소이다.

- $((S_1 + S_2) \circ T)(u) = (S_1 + S_2)(Tu) = S_1(Tu) + S_2(Tu) = (S_1 \circ T)(u) + (S_2 \circ T)(u) = (S_1 \circ T + S_2 \circ T)(u)$이다. 선형성은 쓰지 않고 합의 정의만 썼다.
- $(S \circ (T_1 + T_2))(u) = S((T_1 + T_2)u) = S(T_1 u + T_2 u) = S(T_1 u) + S(T_2 u) = (S \circ T_1 + S \circ T_2)(u)$이다. 셋째 등호가 $S$의 (T-합)이다.
- $((\alpha S) \circ T)(u) = (\alpha S)(Tu) = \alpha(S(Tu)) = \alpha((S \circ T)(u)) = (\alpha(S \circ T))(u)$이다. 선형성은 쓰지 않았다.
- $(S \circ (\alpha T))(u) = S((\alpha T)u) = S(\alpha(Tu)) = \alpha S(Tu) = (\alpha(S \circ T))(u)$이다. 셋째 등호가 $S$의 (T-배)이다.

마지막 두 줄에서 $(\alpha S) \circ T = \alpha(S \circ T)$이고 $S \circ (\alpha T) = \alpha(S \circ T)$이므로 세 식이 같다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ에서 ℝ로의 선형사상의 합성]
[[linear-maps-form-a-vector-space]]에서처럼 실수 $a$마다 값이 $ax$인 함수를 $m_a$라 합시다. 모든 실수 $x$에서 $(m_2 \circ m_3)(x) = 2(3x) = (2 \cdot 3)x = 6x$이므로 $m_2 \circ m_3 = m_6$입니다((K2), (K7)). (1)에 의해 이 합성은 선형사상이고, 이것이 $m_a$ 꼴이라는 것은 [[linear-map-examples]]의 (5)와 맞습니다.
:::

:::example[대칭을 두 번 거치면 항등함수이다]
[[linear-map-examples]]의 (6)에서 $F(x_1, x_2) = (x_1, -x_2)$입니다. $(F \circ F)(x_1, x_2) = F(x_1, -x_2) = (x_1, -(-x_2)) = (x_1, x_2)$이므로((K9)) $F \circ F = i_{\mathbb{R}^2}$입니다. $F$가 선형사상이므로 (1)에 의해 $F \circ F$도 선형사상이고, 이것은 항등함수가 선형사상이라는 사실과 맞습니다.
:::

:::counterexample[S가 선형이 아니면 S∘(T₁ + T₂)의 분배가 깨질 수 있다]
$S : \mathbb{R} \to \mathbb{R}$가 모든 $x$에서 $Sx = x \cdot x$인 함수라 하면 $S(1 + 1) = S(2) = 2 \cdot 2 = 4$이고 $S(1) + S(1) = 1 \cdot 1 + 1 \cdot 1 = 2$이므로((K4), (K7)) (T-합)이 깨져 $S$는 선형사상이 아닙니다. $T_1 = T_2 = i_{\mathbb{R}}$라 하고, $S \circ T_1 + S \circ T_2$는 진술의 합과 같은 방식으로 각 $x$에서 값이 $S(T_1 x) + S(T_2 x)$인 함수라 합시다. $(T_1 + T_2)(1) = 1 + 1 = 2$이므로 $(S \circ (T_1 + T_2))(1) = S(2) = 4$이고, $(S \circ T_1 + S \circ T_2)(1) = S(1) + S(1) = 2$입니다. $4 \ne 2$이므로 두 함수는 같지 않습니다. (3)의 둘째 등식에서 $S$의 (T-합)이 필요합니다.
:::

## 확인 질문

:::check[$T \in L(U, V)$이고 $S \in L(V, W)$이면 $(S \circ T)(0_U)$는 무엇인가?]
$0_W$입니다. (1)에 의해 $S \circ T$는 선형사상이므로 (T1)에 의해 $(S \circ T)(0_U) = 0_W$입니다. 직접 계산해도 $T0_U = 0_V$이고 $S0_V = 0_W$입니다.
:::

:::check[실수 $a$마다 모든 $x$에서 값이 $ax$인 함수를 $m_a$라 할 때, $(m_2 + m_3) \circ m_4$는 어떤 $m_a$인가?]
$m_{20}$입니다. 모든 실수 $x$에서 $((m_2 + m_3) \circ m_4)(x) = (m_2 + m_3)(4x) = 2(4x) + 3(4x) = 8x + 12x = (8 + 12)x = 20x$입니다. 차례로 (3)의 첫째 등식의 값 계산, (K2), (K7), (K12)의 (i)에 의합니다.
:::
