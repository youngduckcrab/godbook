---
title: 차원이 같은 공간 사이의 선형사상
title_en: Linear Maps Between Spaces of Equal Dimension
aliases: [단사이면 전사, 전사이면 단사, 차원이 같으면 단사와 전사가 같다, injective iff surjective, injective iff surjective for equal dimension]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 차원이 같은 두 유한차원 벡터공간 사이의 선형사상은 단사인 것, 전사인 것, 동형사상인 것이 모두 같은 조건이다. 특히 유한차원 공간에서 자기 자신으로 가는 선형사상은 단사이면 전사이고 전사이면 단사이다.
requires: [vector-space, function, injective-surjective-bijective, linear-combination-and-span, linear-map, kernel-and-range, injective-iff-trivial-kernel, isomorphism, dimension, independent-and-spanning-bounds, rank-and-nullity, rank-nullity-theorem, standard-basis, real-function-space, real-number-arithmetic, matrix, matrix-vector-product, well-ordering-principle, prime-number, even-and-odd, proof-by-contradiction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "정리로는 출처에 없음(검색한 범위). 관련: 2장 3.2절, Proposition 3.8 과 그 증명, p.50–51; 2장 7절 연습문제 7.1 h, p.67; 2장 7.3절, Theorem 7.3 뒤의 해설, p.66"
    checked: original
    note: "이 정리는 출처에 이 꼴로 진술된 곳이 없다(책 전체에서 'same dimension', 'dim V = dim W', 'injective', 'surjective', 'one-to-one', 'onto' 를 검색한 범위). 출처의 Proposition 3.8(p.50)은 정사각(n × n) 행렬이 왼쪽 가역이거나 오른쪽 가역이면 가역이라고 하고, 이것이 정사각행렬에만 적용된다고 덧붙인다. 그 증명(p.50–51)은 왼쪽 역이 있으면 Ax = 0 의 해가 x = 0 하나뿐이어서 사다리꼴의 모든 열에 피벗이 있고, 정사각이면 모든 행에도 피벗이 있어 가역이라는 식으로 피벗을 센다. 2장 p.66 의 해설은 Theorem 7.2 의 1 을, 변환 A : Fⁿ → Fᵐ 의 핵이 {0} 이면 정의역과 상의 차원이 같다는 뜻으로 풀이한다. 이 항목은 일반 유한차원 공간 사이의 선형사상에 대하여 진술하고, 차원 정리와 이 사이트의 계수와 퇴화차수 (4), (5)로 증명한다. 5장 Proposition 6.3 의 증명(p.147)은 dim X = dim Y 이므로 (왼쪽 가역인) 등거리 사상이 가역이라고 하면서 괄호 안에 '왼쪽 가역인 정사각행렬은 가역이다'라고 적는다. 출처의 참·거짓 연습문제 7.1 h(p.67)는 계수가 n 인 n × n 행렬이 가역인지 묻는데, 이것은 이 정리의 행렬판과 가깝다. 예시는 단사를 확인하면 Ax = b 의 해가 모든 b 에 있다는 결론을 얻는다는 점에서 출처 Proposition 3.8 의 증명(정사각행렬에서 해의 유일성으로부터 해의 존재를 얻는다)과 같은 발상이다. 첫째 반례의 두 사상은 출처 1장 6절 p.26 의 예 3, 4(열 (1, 1)ᵀ 는 왼쪽 가역이지만 오른쪽 가역이 아니고, 행 (1, 1) 은 오른쪽 가역이지만 왼쪽 가역이 아니다)와 같은 발상이다(정사각이 아닌 행렬). ℝ^ℕ 의 자리 옮김 사상의 반례와 확인 질문은 새로 만들었다(출처에 자리 옮김 사상은 없다. 'shift' 는 평행이동의 뜻으로만 나온다)."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 출처의 연습문제와 같은 발상임을 메모에 밝히고, 틀린 일반화와 인용 누락을 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $\dim V = \dim W$이며 $T : V \to W$가 [[linear-map|선형사상]]이라 하자. 다음 세 조건은 서로 같다. 곧 셋 가운데 어느 하나가 성립하면 나머지 둘도 성립한다.

- (가) $T$는 [[injective-surjective-bijective|단사]]이다.
- (나) $T : V \to W$는 전사이다.
- (다) $T$는 [[isomorphism|동형사상]]이다.

특히 $V$가 유한차원이면, 선형사상 $T : V \to V$가 단사인 것은 정확히 $T : V \to V$가 전사일 때이다.
:::

:::english
Let $V$ and $W$ be finite-dimensional vector spaces with $\dim V = \dim W$, and let $T : V \to W$ be a linear map. The following three conditions are equivalent; that is, if any one of them holds, then so do the other two.

- (a) $T$ is injective.
- (b) $T : V \to W$ is surjective.
- (c) $T$ is an isomorphism.

In particular, if $V$ is finite-dimensional, then a linear map $T : V \to V$ is injective exactly when $T : V \to V$ is surjective.
:::

## 직관

사람이 $n$명이고 의자가 $n$개일 때, 두 사람이 한 의자에 앉지 않게 모두 앉히면 빈 의자가 남지 않는다는 것을 우리는 경험으로 압니다. 사람과 의자의 수가 같으면 "겹치지 않음"과 "빠짐없음"이 같은 조건이 되는 것입니다. 이 정리에서 사람의 수와 의자의 수에 해당하는 것은 $\dim V$와 $\dim W$이고, 겹치지 않음은 단사, 빠짐없음은 전사입니다. 비유와 다른 점은, 같아야 하는 것이 원소의 개수가 아니라 차원이고, 증명에 선형성이 쓰인다는 것입니다.

증명은 [[rank-nullity-theorem|차원 정리]]로 셉니다. 단사이면 퇴화차수가 $0$이므로 계수가 $\dim V$이고, $\dim V = \dim W$이므로 계수가 공역의 차원과 같아 전사입니다. 거꾸로 전사이면 계수가 $\dim W = \dim V$이므로 퇴화차수가 $0$입니다. 가정 $\dim V = \dim W$는 이 두 단계에서 계수와 공역의 차원 $\dim W$를 잇는 데 쓰입니다. $V$가 유한차원이라는 가정은 계수와 퇴화차수를 정하고 차원 정리를 쓰는 데, $W$가 유한차원이라는 가정은 전사를 "계수가 $\dim W$"로 바꾸는 데 쓰입니다.

## 증명

:::idea
[[rank-nullity-theorem|차원 정리]] $\operatorname{nullity} T + \operatorname{rank} T = \dim V$에서 $\dim V = \dim W$이므로, 퇴화차수가 $0$인 것과 계수가 $\dim W$인 것이 같다. 이 두 조건이 각각 단사, 전사이다.
:::

:::hint
[[rank-and-nullity|계수와 퇴화차수]]의 (4)와 (5)가 단사와 전사를 수로 바꿔 줍니다.
:::

:::proof
$n = \dim V = \dim W$라 하자. $V$가 유한차원이므로 [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{nullity} T + \operatorname{rank} T = n$이다. 정수의 계산과 (Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 것이다.

**(가)이면 (나)** $T$가 단사이면 [[rank-and-nullity|계수와 퇴화차수]]의 (4)에 의해 $\operatorname{nullity} T = 0$이므로 $\operatorname{rank} T = 0 + \operatorname{rank} T = n = \dim W$이다. $W$는 유한차원이므로 계수와 퇴화차수의 (5)에 의해 $T : V \to W$는 전사이다.

**(나)이면 (가)** $T : V \to W$가 전사이면 $W$가 유한차원이므로 계수와 퇴화차수의 (5)에 의해 $\operatorname{rank} T = \dim W = n$이다. 그러면 $\operatorname{nullity} T + n = n$이고, 양변에서 $n$을 빼면 (Z7) $\operatorname{nullity} T = 0$이다. 계수와 퇴화차수의 (4)에 의해 $T$는 단사이다.

**(다)와의 관계** [[isomorphism|동형사상]]의 정의에 의해 $T$가 동형사상인 것은 정확히 $T : V \to W$가 [[injective-surjective-bijective|전단사]]일 때, 곧 단사이고 전사일 때이다. $T$가 동형사상이면 $T$는 단사이고 전사이므로 (가)와 (나)가 성립한다. (가)가 성립하면 위에서 (나)도 성립하므로 $T$는 단사이고 전사, 곧 동형사상이다. (나)가 성립하면 위에서 (가)도 성립하므로 $T$는 단사이고 전사, 곧 동형사상이다. 따라서 세 조건 가운데 어느 하나가 성립하면 나머지 둘도 성립한다.

**마지막 문장** $V$가 유한차원이고 $T : V \to V$이면 $W = V$로 두어 $V$, $W$가 유한차원이고 $\dim V = \dim W$이므로, (가)와 (나)가 같다는 것이 곧 그 문장이다.
:::

## 예시와 반례

:::example[단사를 확인하면 해가 있다는 것이 따라온다]
[[matrix|행렬]] $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$와 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상 $T_A : \mathbb{R}^2 \to \mathbb{R}^2$를 봅니다. 같은 항목의 (1)(행 규칙)과 [[real-number-arithmetic|(K4), (K9)]]로 계산하면 $x = (x_1, x_2)$에 대하여 $Ax = (x_1 + x_2, x_2)$입니다. $Ax = (0, 0)$이면 $x_2 = 0$이고 $x_1 = x_1 + 0 = x_1 + x_2 = 0$입니다((K4)). $(0, 0)$은 (T1)에 의해 핵에 속하므로 $\operatorname{Ker} T_A = \{(0, 0)\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T_A$는 단사입니다.

[[dimension|차원]]의 (4)에 의해 정의역과 공역의 차원이 모두 $2$이므로, 이 정리에 의해 $T_A$는 전사이고 동형사상입니다. 곧 방정식 $Ax = b$는 $b$를 정하기 전에 이미 모든 $b \in \mathbb{R}^2$에 대하여 해를 가진다는 것을 압니다. 실제로 $b = (b_1, b_2)$이면 $y = (b_1 - b_2, b_2)$가 $Ay = ((b_1 - b_2) + b_2, b_2) = (b_1, b_2)$를 만족합니다. $(b_1 - b_2) + b_2 = b_1 + ((-b_2) + b_2) = b_1 + 0 = b_1$은 (K2), (K1), (K8)의 (ii), (K4)에 의합니다.
:::

:::counterexample[차원이 다른 두 예]
차원이 다르면 단사와 전사가 서로를 따라오지 않는 예가 있습니다. 아래 두 사상에서 그렇습니다. [[dimension|차원]]의 (4), (5)에 의해 $\dim \mathbb{R}^3 = 3$, $\dim \mathbb{R}^2 = 2$, $\dim \mathbb{R} = 1$입니다.

$P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$에 대하여 $T_P : \mathbb{R}^3 \to \mathbb{R}^2$는 행 규칙에 의해 $(x_1, x_2, x_3)$을 $(x_1, x_2)$로 보냅니다. $b = (b_1, b_2)$는 $(b_1, b_2, 0)$의 값이므로 $T_P$는 전사입니다. 그러나 행렬과 벡터의 곱의 (3)에 의해 $Pe_3$은 $P$의 셋째 열 $(0, 0)$이고 [[linear-map|(T1)]]에 의해 $T_P$의 영벡터에서의 값도 $(0, 0)$인데, $e_3 \ne (0, 0, 0)$([[standard-basis|표준기저]])이므로 $T_P$는 단사가 아닙니다.

실수 $a$마다 $(2a, a) \in \mathbb{R}^2$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 이 값을 갖는 함수 $J : \mathbb{R} \to \mathbb{R}^2$가 있습니다. $J$는 $J(a + b) = (2(a + b), a + b) = (2a + 2b, a + b) = (2a, a) + (2b, b)$이고((K3)) $J(\gamma a) = (2(\gamma a), \gamma a) = (\gamma(2a), \gamma a) = \gamma(2a, a)$이므로((K1), (K2)) 선형사상입니다. $(2a, a) = (2b, b)$이면 둘째 값에서 $a = b$이므로 $J$는 단사입니다. 그러나 $(1, 0) = (2a, a)$라면 둘째 값에서 $a = 0$이고 첫째 값에서 $1 = 2a = 2 \cdot 0 = 0$((K9))이어서 (K4)의 $0 \ne 1$에 어긋나므로, $(1, 0)$은 $J$의 값이 아니고 $J : \mathbb{R} \to \mathbb{R}^2$는 전사가 아닙니다.
:::

:::counterexample[ℝ^ℕ의 자리 옮김: 단사이지만 전사가 아니다]
마지막 문장에서 $V$가 유한차원이라는 가정을 뺄 수 없습니다. [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (5)에 의해 무한차원인 $V = \mathbb{R}^{\mathbb{N}}$에서 이를 봅니다.

**사상 정하기.** 자연수는 양의 정수이므로 [[prime-number|(Z1)]]에 의해 $1$ 이상입니다. 자연수 $k \ne 1$이면 $k \ge 1$이고 $k \ne 1$이므로 [[well-ordering-principle|정렬 원리]]의 진술에서 정한 $\ge$의 뜻에 의해 $k > 1$이고, (Z1)에 의해 $k \ge 2$, (Z7)에 의해 $k - 1 \ge 1$입니다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $k - 1$은 정수이므로 $k - 1 \in \mathbb{N}$입니다. 그러므로 $f \in \mathbb{R}^{\mathbb{N}}$마다 각 $k \in \mathbb{N}$에 실수($k = 1$이면 $0$, $k \ne 1$이면 $f(k - 1)$)가 하나씩 정해지고, [[real-function-space|(G)]]에 의해 이 값을 갖는 $Sf \in \mathbb{R}^{\mathbb{N}}$이 있습니다. 다시 (G)에 의해 $f$에서의 값이 $Sf$인 함수 $S : \mathbb{R}^{\mathbb{N}} \to \mathbb{R}^{\mathbb{N}}$이 있습니다. 값을 한 칸씩 뒤로 미는 사상입니다.

**선형.** $\mathbb{R}^{\mathbb{N}}$의 덧셈과 스칼라배는 값마다의 계산이고([[real-function-space|함수의 공간]]의 진술), [[function|함수]]의 같음에 의해 정의역의 모든 점에서 값이 같은 두 함수는 같습니다. $f, g \in \mathbb{R}^{\mathbb{N}}$와 실수 $\alpha$에 대하여, $k = 1$에서는 $(S(f + g))(1) = 0 = 0 + 0 = (Sf + Sg)(1)$이고 $(S(\alpha f))(1) = 0 = \alpha \cdot 0 = (\alpha Sf)(1)$입니다((K4), (K9)). $k \ne 1$에서는 $(S(f + g))(k) = (f + g)(k - 1) = f(k - 1) + g(k - 1) = (Sf)(k) + (Sg)(k) = (Sf + Sg)(k)$이고 $(S(\alpha f))(k) = (\alpha f)(k - 1) = \alpha f(k - 1) = \alpha (Sf)(k) = (\alpha Sf)(k)$입니다. 따라서 $S(f + g) = Sf + Sg$, $S(\alpha f) = \alpha Sf$이고 $S$는 선형사상입니다.

**단사.** $Sf = Sg$라 하자. 자연수 $k$에 대하여 (Z8)과 (Z7)에 의해 $k = k + 0 < k + 1$이고 $k \ge 1$이므로 (Z6)에 의해 $1 < k + 1$이고, 같은 기본 성질에 의해 $k + 1$은 정수이므로 자연수이며, (Z5)에 의해 $k + 1 \ne 1$입니다. $(k + 1) - 1 = k$이므로 $S$의 정의에 의해 $f(k) = (Sf)(k + 1) = (Sg)(k + 1) = g(k)$이고, 함수의 같음에 의해 $f = g$입니다. $S$는 단사입니다.

**전사가 아님.** 일차독립인 열과 생성하는 열의 길이의 (5)의 $\varepsilon_1$은 $1$에서의 값이 $1$입니다. 모든 $f$에서 $(Sf)(1) = 0$이고 (K4)에 의해 $0 \ne 1$이므로 $Sf \ne \varepsilon_1$입니다. 따라서 $S : \mathbb{R}^{\mathbb{N}} \to \mathbb{R}^{\mathbb{N}}$은 전사가 아닙니다.
:::

## 확인 질문

:::check[선형사상 $T : \mathbb{R}^3 \to \mathbb{R}^3$이 $Te_1 = e_2$, $Te_2 = e_3$, $Te_3 = e_1$을 만족하면 $T$는 동형사상인가?]
그렇습니다. $e_1 = Te_3$, $e_2 = Te_1$, $e_3 = Te_2$는 모두 $\operatorname{Ran} T$에 속하고, [[kernel-and-range|핵과 상]]의 (1)에 의해 $\operatorname{Ran} T$는 부분공간이므로 [[linear-combination-and-span|(N3)]]에 의해 $\operatorname{span}(e_1, e_2, e_3) \subseteq \operatorname{Ran} T$입니다. [[standard-basis|표준기저]]의 (2)에 의해 $e_1, e_2, e_3$은 $\mathbb{R}^3$을 생성하므로 $\operatorname{Ran} T = \mathbb{R}^3$이고, 핵과 상의 (3)에 의해 $T$는 전사입니다. [[dimension|차원]]의 (4)에 의해 정의역과 공역의 차원이 같으므로 이 정리에 의해 $T$는 동형사상입니다.
:::

:::check[$\dim V = \dim W = 2$이고 선형사상 $T : V \to W$의 상이 $1$차원이면 $T$는 단사인가?]
아닙니다. $\operatorname{rank} T = 1 \ne 2 = \dim W$이므로 [[rank-and-nullity|계수와 퇴화차수]]의 (5)에 의해 $T : V \to W$는 전사가 아닙니다. $T$가 단사라면 이 정리에 의해 전사여야 하므로, [[proof-by-contradiction|귀류법]]에 의해 $T$는 단사가 아닙니다.
:::
