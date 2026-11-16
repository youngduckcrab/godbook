---
title: 동형사상
title_en: Isomorphism
aliases: [동형, 동형인 벡터공간, 가역 선형사상, 선형사상의 역, isomorphism, isomorphic vector spaces, invertible linear map]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 전단사인 선형사상을 동형사상이라 하고 동형사상이 있는 두 벡터공간을 동형이라 한다. 동형사상의 역함수는 선형이고 동형사상이며, 동형사상은 서로 역인 선형사상 한 쌍이 있는 것과 같고, 동형은 반사적이고 대칭적이고 추이적이다.
requires: [vector-space, real-number-arithmetic, function, function-composition, injective-surjective-bijective, bijective-iff-inverse-is-a-function, inverse-function, composition-preserves-injectivity-and-surjectivity, linear-map, linear-map-examples, composition-of-linear-maps]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 6.2절 Invertible transformations, p.24–25 (Theorem 6.1과 그 Corollary). 6.3절 Isomorphism. Isomorphic spaces, p.27"
    checked: original
    note: "출처는 선형사상 A : V → W 의 왼쪽 역(BA = I 인 선형사상 B : W → V)과 오른쪽 역(AC = I 인 선형사상 C : W → V)을 정의하고(p.24–25) 왼쪽 역과 오른쪽 역이 모두 있을 때 가역이라 한다. 출처는 가역일 때 왼쪽 역과 오른쪽 역이 하나뿐이고 같다는 것을 Theorem 6.1로 진술하고(p.25) 그 Corollary로 가역인 것은 정확히 A⁻¹A = I_V 이고 AA⁻¹ = I_W 인 선형사상 A⁻¹ 이 하나 있을 때라고 적는다. 출처 p.27은 가역인 선형사상을 동형사상이라 부르고, 동형사상이 있는 두 벡터공간을 동형(V ≅ W)이라 한다. 이 항목은 동형사상을 전단사인 선형사상으로 정의한다. (3)은 출처의 Corollary와 같은 꼴(서로 역인 선형사상 하나)이 정의와 동치임을 보인다. 출처의 정의(왼쪽 역과 오른쪽 역이 각각 있다)가 이것과 같다는 것은 출처 Theorem 6.1의 '왼쪽 역 = 오른쪽 역'으로 얻어지고, 이 항목은 왼쪽 역과 오른쪽 역을 따로 다루지 않는다. 출처는 Theorem 6.1의 증명에서 B(AC) = BI = B 와 (BA)C = IC = C 를 쓴다. (1)은 함수에 대한 사실로 따로 진술했다. 출처가 동형이 지켜 주는 성질(p.27)과 가역성을 해의 존재·유일성으로 말하는 Theorem 6.8(p.28)은 이 항목에서 다루지 않는다. 출처의 A⁻¹ 표기를 이 사이트는 역함수 T⁻¹ 로 쓴다. (1)–(4)와 번호는 이 사이트가 덧붙였다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 출처 메모의 틀린 서술, 출처와 같은 발상의 반례 표기, 예 하나에서 넘겨짚은 일반화, 건너뛴 증명 단계, 다른 항목의 예시에 기댄 인용을 보완했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이라 하자. [[linear-map|선형사상]] $T : V \to W$가 **동형사상**(isomorphism)인 것은 정확히 함수 $T : V \to W$가 [[injective-surjective-bijective|전단사]]일 때이다. $V$와 $W$가 **동형**(isomorphic)인 것은 정확히 $V$에서 $W$로의 동형사상이 있을 때이고, 이를 $V \cong W$로 쓴다. 전단사 $T$의 [[inverse-function|역함수]]는 $T^{-1} : W \to V$로 쓴다.

1. (함수에 대한 사실. 선형성과 무관) $V$, $W$를 집합으로만 보고 $T : V \to W$와 $S : W \to V$가 [[function|함수]]일 때, $S \circ T = i_V$이고 $T \circ S = i_W$이면 $T$와 $S$는 모두 전단사이고 $S = T^{-1}$, $T = S^{-1}$이다.
2. $T : V \to W$가 동형사상이면 역함수 $T^{-1} : W \to V$는 선형사상이고 동형사상이다.
3. 선형사상 $T : V \to W$가 동형사상인 것은 정확히 $S \circ T = i_V$이고 $T \circ S = i_W$인 선형사상 $S : W \to V$가 있을 때이다. 이때 $S = T^{-1}$이다.
4. 항등함수 $i_V$는 동형사상이다. $X$가 벡터공간이고 $T : V \to W$와 $S : W \to X$가 동형사상이면 $S \circ T$도 동형사상이다. 따라서 모든 벡터공간 $V$에서 $V \cong V$이고, $V \cong W$이면 $W \cong V$이며, $V \cong W$이고 $W \cong X$이면 $V \cong X$이다.
:::

:::english
Let $V$, $W$ be vector spaces. A linear map $T : V \to W$ is an **isomorphism** exactly when the function $T : V \to W$ is bijective. $V$ and $W$ are **isomorphic** exactly when there is an isomorphism from $V$ to $W$, and we write this $V \cong W$. The inverse function of a bijection $T$ is written $T^{-1} : W \to V$.

1. (A fact about functions, unrelated to linearity) Regarding $V$ and $W$ only as sets, if $T : V \to W$ and $S : W \to V$ are functions with $S \circ T = i_V$ and $T \circ S = i_W$, then $T$ and $S$ are both bijective, and $S = T^{-1}$, $T = S^{-1}$.
2. If $T : V \to W$ is an isomorphism, then the inverse function $T^{-1} : W \to V$ is a linear map and an isomorphism.
3. A linear map $T : V \to W$ is an isomorphism exactly when there is a linear map $S : W \to V$ with $S \circ T = i_V$ and $T \circ S = i_W$. In that case $S = T^{-1}$.
4. The identity function $i_V$ is an isomorphism. If $X$ is a vector space and $T : V \to W$ and $S : W \to X$ are isomorphisms, then $S \circ T$ is an isomorphism. Hence $V \cong V$ for every vector space $V$, $V \cong W$ implies $W \cong V$, and $V \cong W$ and $W \cong X$ imply $V \cong X$.
:::

## 직관

동형사상은 벡터공간의 구조, 곧 덧셈과 스칼라배를 그대로 둔 채로 이름표만 바꾸는 일대일 대응입니다. 같은 문서를 한국어판과 영어판으로 번역할 때, 문장마다 정확히 대응하고 번역한 뒤 합치나 합친 뒤 번역하나 같다고 상상하면 됩니다. 비유가 맞지 않는 곳은, 번역은 뜻을 잃을 수 있지만 동형사상에서는 되돌리는 사상(역함수)이 있어 아무것도 잃지 않는다는 점입니다.

항목의 중심은 (2)입니다. 선형사상이 전단사이면 거꾸로 가는 함수가 저절로 생기는데, 그 함수가 선형이라는 것은 따로 확인해야 합니다. 증명에서는 $T$가 단사라는 것을 써서 "$T$를 씌운 값이 같으면 원래 벡터가 같다"로 (T-합)과 (T-배)를 거꾸로 확인합니다. (3)은 동형사상을 "서로 역인 선형사상 한 쌍"으로도 말할 수 있다는 것이고, 이 꼴을 쓰면 전단사를 따로 검증할 필요 없이 두 합성이 항등함수인지만 보면 됩니다. (1)은 그 핵심으로, 선형성과 무관하게 합성이 항등함수인 두 함수는 서로 역이라는 사실입니다. (4)는 동형이 같음처럼 행동한다는 말입니다. 이 항목은 동형인 두 공간의 크기나 차원에 관해서는 아무것도 말하지 않습니다.

## 성질의 증명

:::proof
(T-합), (T-배)는 [[linear-map]]의 것이다. 단사의 동치 꼴("$f(a) = f(a')$이면 $a = a'$")은 [[injective-surjective-bijective|단사의 정의 항목]]에 있고, 전단사의 역함수가 있다는 것은 [[bijective-iff-inverse-is-a-function|전단사와 역관계의 항목]]에, $T^{-1} \circ T = i_V$와 $T \circ T^{-1} = i_W$는 [[inverse-function|역함수 항목]]에 있다.

**(1)의 증명.** $T$가 단사임: $x, x' \in V$에서 $Tx = Tx'$이면 $x = i_V(x) = S(T(x)) = S(T(x')) = i_V(x') = x'$이다. $T$가 전사임: $w \in W$이면 $T(S(w)) = i_W(w) = w$이므로 $w$는 $S(w) \in V$의 값이다. 따라서 $T$는 전단사이다. $S$가 단사임: $w, w' \in W$에서 $Sw = Sw'$이면 $w = i_W(w) = T(S(w)) = T(S(w')) = i_W(w') = w'$이다. $S$가 전사임: $x \in V$이면 $S(T(x)) = i_V(x) = x$이므로 $x$는 $T(x) \in W$에서의 $S$의 값이다. 따라서 $S$도 전단사이다. 이제 $T$의 역함수 $T^{-1}$가 있고, 모든 $w \in W$에서 $T(S(w)) = w$이므로 $(S(w), w) \in T$이다. 역관계의 정의에 의해 $(w, S(w)) \in T^{-1}$이고, $T^{-1}$는 $W$에서 $V$로의 함수이므로 $T^{-1}(w) = S(w)$이다. 두 함수는 정의역이 $W$로 같고 모든 $w$에서 값이 같으므로 $S = T^{-1}$이다. 또 $S$가 전단사이므로 역함수 $S^{-1}$가 있고, 모든 $x \in V$에서 $S(T(x)) = x$이므로 $(T(x), x) \in S$이다. 역관계의 정의에 의해 $(x, T(x)) \in S^{-1}$이고, $S^{-1}$는 $V$에서 $W$로의 함수이므로 $S^{-1}(x) = T(x)$이다. 곧 $T = S^{-1}$이다.

**(2)의 증명.** $T$가 전단사이므로 역함수 $T^{-1}$가 있고 $T^{-1} \circ T = i_V$, $T \circ T^{-1} = i_W$이다. (1)에서 $S = T^{-1}$로 두면 $T^{-1}$도 전단사이다. 선형임을 보이자. $w, w' \in W$이면 (T-합)에 의해 $T(T^{-1}w + T^{-1}w') = T(T^{-1}w) + T(T^{-1}w') = w + w'$이고 $T(T^{-1}(w + w')) = w + w'$이다. $T$는 단사이므로 $T^{-1}w + T^{-1}w' = T^{-1}(w + w')$이다. 실수 $\alpha$에 대하여 (T-배)에 의해 $T(\alpha T^{-1}w) = \alpha T(T^{-1}w) = \alpha w$이고 $T(T^{-1}(\alpha w)) = \alpha w$이므로 $T$의 단사성에 의해 $\alpha T^{-1}w = T^{-1}(\alpha w)$이다. 따라서 $T^{-1}$는 전단사인 선형사상, 곧 동형사상이다.

**(3)의 증명.** ($\Rightarrow$) $T$가 동형사상이면 (2)에 의해 $S = T^{-1}$는 선형사상이고 $S \circ T = T^{-1} \circ T = i_V$, $T \circ S = T \circ T^{-1} = i_W$이다. ($\Leftarrow$) $S$가 이런 선형사상이면 (1)에 의해 $T$는 전단사이고 $S = T^{-1}$이다. $T$가 선형사상이므로 $T$는 동형사상이다.

**(4)의 증명.** $i_V$는 [[linear-map-examples|선형사상]]이고 $i_V \circ i_V = i_V$이므로([[composition-of-linear-maps|합성]]의 (2)에서 $f = i_V$) (1)에서 $T = S = i_V$로 두면 전단사이다. 따라서 동형사상이다. $T$, $S$가 동형사상이면 [[composition-of-linear-maps|합성]]의 (1)에 의해 $S \circ T$는 선형사상이고, [[composition-preserves-injectivity-and-surjectivity|합성의 전단사]]에 의해 $S \circ T$는 전단사이다. 따라서 동형사상이다. $V \cong V$는 $i_V$에서, $V \cong W$이면 동형사상 $T : V \to W$에 대해 (2)의 $T^{-1} : W \to V$가 동형사상이므로 $W \cong V$이다. $V \cong W$, $W \cong X$이면 두 동형사상의 합성이 $V$에서 $X$로의 동형사상이므로 $V \cong X$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ²의 대칭은 동형사상이다]
[[linear-map-examples]]의 (6)에 있는 $F$는 선형사상이고 $(F \circ F)(x_1, x_2) = F(x_1, -x_2) = (x_1, -(-x_2)) = (x_1, x_2)$이므로((K9)) $F \circ F = i_{\mathbb{R}^2}$입니다. (3)에서 $S = T = F$로 두면 $F$는 동형사상이고 $F^{-1} = F$입니다. 따라서 $\mathbb{R}^2 \cong \mathbb{R}^2$이고 $F$가 그 한 가지 증거입니다. 항등함수 $i_{\mathbb{R}^2}$도 동형사상이므로 같은 두 공간 사이에 동형사상이 여러 개 있을 수 있습니다.
:::

:::counterexample[선형사상이어도 동형사상이 아닐 수 있다]
$p_2 : \mathbb{R}^3 \to \mathbb{R}$이 각 $x$에서 값이 $x_2$인 선형사상이라 하면, $(1, 0, 0)$과 $(0, 0, 0)$은 첫째 값이 $1 \ne 0$이므로 서로 다른 벡터인데((K4)) 둘 다 $p_2$의 값이 $0$입니다. 단사가 아니므로 $p_2$는 동형사상이 아닙니다. 이 반례는 $p_2$ 하나가 동형사상이 아니라는 것만 보이며, $\mathbb{R}^3$과 $\mathbb{R}$이 동형이 아니라는 것은 이 항목에서 주장하지 않습니다.
:::

## 확인 질문

:::check[$T : V \to W$가 동형사상이고 $Tu = w$, $Tu' = w'$일 때 $T^{-1}(w + w')$는 무엇인가?]
$u + u'$입니다. (T-합)에 의해 $T(u + u') = Tu + Tu' = w + w'$이므로 $T^{-1}$를 적용하면 $u + u' = T^{-1}(T(u + u')) = T^{-1}(w + w')$입니다.
:::

:::check[실수 $a$마다 모든 $x$에서 값이 $ax$인 함수를 $m_a$라 할 때, $m_2 : \mathbb{R} \to \mathbb{R}$는 동형사상인가?]
그렇습니다. $2 \ne 0$이므로((K7)) 역수 $2^{-1}$이 있고 $2^{-1} \cdot 2 = 2 \cdot 2^{-1} = 1$입니다((K1), (K8)). 모든 $x$에서 $(m_{2^{-1}} \circ m_2)(x) = 2^{-1}(2x) = (2^{-1} \cdot 2)x = 1 \cdot x = x$이고 ((K2), (K1), (K4)) 같은 방식으로 $(m_2 \circ m_{2^{-1}})(x) = (2 \cdot 2^{-1})x = x$입니다. $m_2$와 $m_{2^{-1}}$는 [[linear-map-examples]]의 (5)에 의해 선형사상이므로 (3)에 의해 $m_2$는 동형사상입니다.
:::
