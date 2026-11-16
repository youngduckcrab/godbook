---
title: 유한차원 공간이 동형일 조건
title_en: Finite-Dimensional Spaces Are Isomorphic Exactly When Their Dimensions Agree
aliases: [동형과 차원, 차원이 같으면 동형, 동형인 공간의 차원, isomorphic iff equal dimension, isomorphic spaces have equal dimension]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 벡터공간과 동형인 공간은 유한차원이고 차원이 같다. 두 유한차원 벡터공간이 동형인 것은 정확히 차원이 같을 때이다. 차원이 0 인 경우도 포함한다.
requires: [real-function-space, vector-space, finite-sum-of-vectors, basis, linear-map, injective-surjective-bijective, isomorphism, isomorphism-and-bases, linear-map-determined-by-basis, dimension, dimension-of-subspace, real-number-arithmetic]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "정리로는 출처에 없음(검색한 범위). 관련: 1장 6.3절, Theorem 6.6, 6.7, p.27; 2장 5절, p.54(Proposition 5.1 뒤의 설명); 5장 6절, Proposition 6.3 의 증명, p.147"
    checked: original
    note: "이 정리는 출처에 정리로 진술된 곳이 없다. 출처의 1장 Theorem 6.6(p.27)은 동형사상이 기저를 기저로 보낸다고 하고 증명을 연습문제로 남기며, Theorem 6.7(p.27)은 기저를 기저로 보내는 선형사상이 동형사상이라고 한다. 2장 5절(p.54)은 dim V = n 이면 기저 v₁, …, vₙ 을 표준기저로 보내는 동형사상 V → ℝⁿ 이 있다고 적는다. 5장 Proposition 6.3 의 증명(p.147)은 괄호 안에서 '동형인 공간은 차원이 같다'고 적고 지나간다. 이 항목은 이 사실들을 이 사이트의 isomorphism-and-bases (3), (4)와 linear-map-determined-by-basis (2)로 묶어 진술하고 증명한다. 차원이 0 인 경우도 같은 증명에 들어 있다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이라 하자.

1. $V$가 [[dimension|유한차원]]이고 $V \cong W$([[isomorphism|동형]])이면 $W$도 유한차원이고 $\dim W = \dim V$이다.
2. $V$와 $W$가 둘 다 유한차원이면, $V \cong W$인 것은 정확히 $\dim V = \dim W$일 때이다.
:::

:::english
Let $V$ and $W$ be vector spaces.

1. If $V$ is finite-dimensional and $V \cong W$, then $W$ is also finite-dimensional and $\dim W = \dim V$.
2. If $V$ and $W$ are both finite-dimensional, then $V \cong W$ exactly when $\dim V = \dim W$.
:::

## 직관

동형사상은 한 공간의 벡터를 다른 공간의 벡터로 빠짐없이, 겹치지 않게 옮기면서 덧셈과 스칼라배를 지키는 사상입니다. 같은 책을 다른 언어로 옮긴 번역본에 빗댈 수 있습니다. 문장(벡터)이 하나씩 짝지어지고, 문장을 잇는 방식(연산)도 그대로 옮겨집니다. 그러니 "내용을 다 담는 데 필요한 기본 문장의 수"(차원)는 원본과 번역본이 같아야 합니다. 비유와 다른 점은, 실제 번역은 문장을 정확히 하나씩 짝짓지 못하는 경우가 많지만 동형사상은 정확한 전단사라는 것입니다.

(2)는 그 거꾸로도 말합니다. 유한차원 공간에서는 차원 하나만 같으면 동형사상이 있습니다. 두 공간에서 같은 길이의 기저를 하나씩 잡고, 한 기저를 다른 기저로 차례로 보내는 선형사상을 만들면 그것이 동형사상입니다. 차원이 $0$이면 두 기저가 모두 빈 열이고, 이때 만들어지는 사상은 영벡터를 영벡터로 보내는 사상입니다.

## 증명

:::idea
동형사상은 기저를 기저로 보내므로 차원이 같다. 거꾸로 차원이 같으면 같은 길이의 기저를 잡아 [[linear-map-determined-by-basis|기저 위의 값]]으로 선형사상을 정하고, 기저를 기저로 보내므로 동형사상이다.
:::

:::hint
[[isomorphism-and-bases|동형사상과 기저]]의 (3)과 (4)가 각 방향에 하나씩 쓰입니다. (5)는 기저의 길이가 $1$ 이상일 때만 말하므로 여기서는 쓰지 않습니다.
:::

:::proof
**(1)** $T : V \to W$가 동형사상이라 하자. $d = \dim V$라 하면 [[dimension|차원]]의 (2)에 의해 길이 $d$인 $V$의 기저 $b_1, \dots, b_d$가 있다. [[linear-map|선형사상]]의 진술에 의해 $Tb_1, \dots, Tb_d$는 길이 $d$인 $W$의 열이고, [[isomorphism-and-bases|동형사상과 기저]]의 (3)에 의해 $W$의 기저이다. 차원의 (1)에 의해 $W$는 유한차원이고, (2)에 의해 $\dim W = d$이다.

**(2)** $V \cong W$이면 (1)에 의해 $\dim W = \dim V$이다. 거꾸로 $\dim V = \dim W = d$라 하자. 차원의 (2)에 의해 길이 $d$인 $V$의 기저 $v_1, \dots, v_d$와 길이 $d$인 $W$의 기저 $w_1, \dots, w_d$가 있다. [[linear-map-determined-by-basis|기저 위의 값으로 정해지는 선형사상]]의 (2)에 의해 모든 $k \in \{1, \dots, d\}$에서 $Tv_k = w_k$인 선형사상 $T : V \to W$가 있다. 그러면 열 $Tv_1, \dots, Tv_d$와 $w_1, \dots, w_d$는 길이가 같고 모든 자리에서 항이 같으므로 같은 열이고([[finite-sum-of-vectors]]의 진술), 따라서 $W$의 기저이다. $v$가 $V$의 기저이고 $Tv$가 $W$의 기저이므로 동형사상과 기저의 (4)에 의해 $T$는 동형사상이고, $V \cong W$이다.

$d = 0$인 경우도 이 논증에 들어 있다. 이때 $v$와 $w$는 빈 열이고, 기저 위의 값으로 정해지는 선형사상의 (2)와 동형사상과 기저의 (4)는 길이 $0$인 열을 허용하므로, 조건 "모든 $k$에서 $Tv_k = w_k$"가 공허하게 참인 선형사상 $T$가 있고 $Tv$는 빈 열, 곧 $W$의 기저이다.
:::

## 예시와 반례

:::example[ℝ과 ℝ¹]
[[dimension|차원]]의 (4), (5)에 의해 $\dim \mathbb{R}^1 = 1 = \dim \mathbb{R}$이므로 (2)에 의해 $\mathbb{R} \cong \mathbb{R}^1$입니다. 증명대로 만들면, $\mathbb{R}$의 기저(항이 $1$인 열)와 $\mathbb{R}^1$의 기저(항이 $e_1$인 열)에 대하여 $1$을 $e_1$로 보내는 선형사상이 동형사상이고, 이 사상은 실수 $a = a \cdot 1$을 $ae_1$, 곧 $1$에서의 값이 $a$인 함수로 보냅니다.
:::

:::counterexample[단사인 선형사상이 있어도 동형은 아니다]
$\mathbb{R}$에서 $\mathbb{R}^2$로 가는 함수 $T$를 실수 $a$에서의 값이 $(a, 0)$이 되게 정합시다. $T(a + b) = (a + b, 0) = (a, 0) + (b, 0)$이고 $T(\gamma a) = (\gamma a, 0) = \gamma(a, 0)$이므로 [[linear-map|선형사상]]이고, $(a, 0) = (b, 0)$이면 $a = b$이므로 [[injective-surjective-bijective|단사]]입니다. 그러나 $\dim \mathbb{R} = 1 \ne 2 = \dim \mathbb{R}^2$이므로 (2)에 의해 $\mathbb{R}$과 $\mathbb{R}^2$는 동형이 아닙니다. 곧 이 $T$를 포함해 어떤 선형사상도 동형사상이 아닙니다.
:::

## 확인 질문

:::check[$\dim V = 3$인 벡터공간 $V$는 $\mathbb{R}^3$과 동형인가?]
그렇습니다. [[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이므로 (2)에 의해 $V \cong \mathbb{R}^3$입니다.
:::

:::check[$W$가 $\mathbb{R}^3$의 부분공간이고 $W \cong \mathbb{R}^3$이면 $W = \mathbb{R}^3$인가?]
그렇습니다. $\mathbb{R}^3 \cong W$이므로([[isomorphism|동형]]의 (4)) (1)에 의해 $\dim W = \dim \mathbb{R}^3 = 3$이고, [[dimension-of-subspace|부분공간의 차원]]의 (3)에 의해 $W = \mathbb{R}^3$입니다.
:::
