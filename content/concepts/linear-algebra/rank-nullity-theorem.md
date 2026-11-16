---
title: 차원 정리
title_en: Rank–Nullity Theorem
aliases: [계수-퇴화차수 정리, rank-nullity theorem, dimension theorem]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 벡터공간 V에서 나가는 선형사상 T에 대하여 퇴화차수와 계수의 합은 dim V 이다. 핵의 기저를 V의 기저로 늘리고, 덧붙인 벡터들의 상이 상의 기저임을 보여 증명한다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, linear-map, kernel-and-range, sequences-in-a-subspace, dimension, extension-to-a-basis, rank-and-nullity, injective-surjective-bijective, well-ordering-principle, real-function-space, real-number-arithmetic, standard-basis, matrix, matrix-vector-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7.3절 The Rank Theorem. Dimensions of fundamental subspaces., Theorem 7.2 의 1, p.64–65"
    checked: original
    note: "출처의 Theorem 7.2 는 m × n 행렬 A(Fⁿ 에서 Fᵐ 로의 선형변환)에 대하여 1. dim Ker A + rank A = n, 2. dim Ker Aᵀ + rank A = m 이라고 한다(p.64). 이 항목은 1 에 해당하는 것을 유한차원 벡터공간 V 에서 아무 벡터공간 W 로 가는 선형사상에 대하여 진술한다. 2 는 이 항목에 없다. 출처의 증명은 앞 절(7.1절)의 기본 부분공간의 기저를 구하는 방법(행 소거)을 전제로 하고, 자유변수의 수(dim Ker A)와 기본변수, 곧 피벗의 수(rank A)를 더하면 열의 수 n 이라는 데서 끝난다(p.64). 이 항목은 행 소거와 피벗을 쓰지 않고, 핵의 기저를 V 의 기저로 늘린 뒤 덧붙인 벡터들의 상이 상의 기저임을 보여 증명한다. 이 증명은 출처에 없다. 출처는 Theorem 7.1(rank A = rank Aᵀ)에 'The Rank Theorem' 이라는 이름을 붙이고 Theorem 7.2 도 흔히 그렇게 부른다고 적는다(p.64). '차원 정리', 'rank–nullity' 라는 이름은 출처에 없다('nullity' 는 책 전체를 검색한 범위에서 나오지 않는다). 직관의 '사라지는 방향' 설명은 출처 p.66 의 해석(핵이 자명하지 않으면 변환이 dim Ker A 만큼의 차원을 '없애' dim Ran A = n − dim Ker A 가 된다)과 같은 발상이다. 첫째 확인 질문은 차원 정리로 한쪽 차원의 범위에서 다른 쪽 차원의 범위를 얻는다는 점에서 출처 p.65 의 적용(rank A ≥ 3 에서 dim Ker A ≤ 2 를 얻는다)과 같은 발상이다. 예시와 반례는 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $W$가 벡터공간이며 $T : V \to W$가 [[linear-map|선형사상]]이면
$$\operatorname{nullity} T + \operatorname{rank} T = \dim V$$
이다. ([[rank-and-nullity|계수와 퇴화차수]]: $\operatorname{nullity} T = \dim \operatorname{Ker} T$, $\operatorname{rank} T = \dim \operatorname{Ran} T$.)
:::

:::english
If $V$ is a finite-dimensional vector space, $W$ is a vector space, and $T : V \to W$ is a linear map, then
$$\operatorname{nullity} T + \operatorname{rank} T = \dim V.$$
(Here $\operatorname{nullity} T = \dim \operatorname{Ker} T$ and $\operatorname{rank} T = \dim \operatorname{Ran} T$.)
:::

## 직관

물체를 정면에서 눌러 납작하게 찍은 사진을 생각해 봅시다. 가로, 세로, 깊이의 세 방향 가운데 깊이 방향은 사진에서 사라지고, 가로와 세로의 두 방향이 사진에 남습니다. 사라진 방향의 수 $1$과 남은 방향의 수 $2$를 더하면 처음의 $3$입니다. 차원 정리에서 사라지는 방향은 핵, 남는 방향은 상이고, 그 수가 각각 퇴화차수와 계수입니다. 비유와 다른 점은, 정리가 말하는 "방향의 수"는 기저의 길이이고, 핵과 상은 각각 $V$와 $W$의 부분공간이라는 것입니다.

증명은 이 그림을 그대로 따릅니다. 먼저 핵의 기저를 잡고, 거기에 벡터를 덧붙여 $V$의 기저를 만듭니다. 핵의 벡터는 $T$가 영벡터로 보내므로, 상을 만드는 것은 덧붙인 벡터들의 상뿐입니다. 덧붙인 벡터들의 상이 일차독립이라는 것은, 그렇지 않다면 덧붙인 벡터들의 자명하지 않은 일차결합이 핵에 들어가 같은 벡터를 늘린 기저로 두 가지로 표현하게 된다는 데서 나옵니다.

정의역 $V$가 유한차원이라는 가정은 계수와 퇴화차수가 정해지는 데와 핵의 기저를 $V$의 기저로 늘리는 데서 쓰입니다. 공역 $W$에는 아무 가정이 없습니다.

## 증명

:::idea
$\operatorname{Ker} T$의 기저 $u_1, \dots, u_k$를 $V$의 기저 $u_1, \dots, u_k, x_1, \dots, x_s$로 늘리면 $Tx_1, \dots, Tx_s$가 $\operatorname{Ran} T$의 기저이다. 따라서 $\operatorname{rank} T = s$이고 $k + s = \dim V$이다.
:::

:::hint
[[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (2)를 핵의 기저에 쓰세요. 그 전에 핵의 기저가 $V$에서 일차독립인지 확인해야 합니다.
:::

:::hint
일차독립을 보일 때 $\beta_1 Tx_1 + \cdots + \beta_s Tx_s = 0_W$이면 $\beta_1 x_1 + \cdots + \beta_s x_s$가 핵에 속합니다. 이 벡터를 늘린 기저의 일차결합으로 두 가지 방법으로 적어 보세요.
:::

:::proof
$d = \dim V$, $k = \operatorname{nullity} T$라 하자. [[rank-and-nullity|계수와 퇴화차수]]의 정의 다음의 문장에 의해 벡터공간 $\operatorname{Ker} T$에 길이 $k$인 기저 $u_1, \dots, u_k$가 있다. [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)를 $V$의 부분공간 $\operatorname{Ker} T$에 쓰면, $u$는 모든 항이 $\operatorname{Ker} T$에 속하는 $V$의 벡터의 열이고, $V$에서 [[linear-independence|일차독립]]이며, $\operatorname{span}(u_1, \dots, u_k) = \operatorname{Ker} T$이다.

$V$는 유한차원이고 $u$는 $V$에서 일차독립이므로, [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (2)에 의해 $k \le d$이고 길이 $s = d - k$인 $V$의 벡터의 열 $x_1, \dots, x_s$가 있어 $u$와 $x$를 이어 붙인 길이 $d$인 벡터의 열 $b = u_1, \dots, u_k, x_1, \dots, x_s$가 $V$의 [[basis|기저]]이다. 곧 $b_i = u_i$ ($1 \le i \le k$), $b_{k+j} = x_j$ ($1 \le j \le s$)이다.

[[linear-map|선형사상]]의 진술에 의해 $Tx_1, \dots, Tx_s$는 길이 $s$인 $W$의 벡터의 열이고, [[kernel-and-range|핵과 상]]의 정의에 의해 모든 항이 $\operatorname{Ran} T$에 속한다. 이 벡터의 열이 벡터공간 $\operatorname{Ran} T$의 기저임을 보인다.

**생성.** [[kernel-and-range|핵과 상]]의 (1)에 의해 $\operatorname{Ran} T$는 $W$의 부분공간이고 $Tx$의 모든 항이 $\operatorname{Ran} T$에 속하므로, [[linear-combination-and-span|(N3)]]에 의해 $\operatorname{span}(Tx_1, \dots, Tx_s) \subseteq \operatorname{Ran} T$이다. 거꾸로 $y \in \operatorname{Ran} T$라 하자. 핵과 상의 정의에 의해 $Tv = y$인 $v \in V$가 있다. $b$는 $V$의 기저이므로 기저의 정의의 (존재) 조건에 의해 $v = \gamma_1 b_1 + \cdots + \gamma_d b_d$인 길이 $d$인 실수의 열 $\gamma$가 있다. $\alpha_i = \gamma_i$ ($1 \le i \le k$), $\beta_j = \gamma_{k+j}$ ($1 \le j \le s$)로 두면 일차독립인 열을 기저로 늘리기의 (1)(그 "거꾸로" 문장)에 의해
$$v = p + q, \qquad p = \alpha_1 u_1 + \cdots + \alpha_k u_k, \quad q = \beta_1 x_1 + \cdots + \beta_s x_s$$
이다. $p \in \operatorname{span}(u) = \operatorname{Ker} T$이므로 $Tp = 0_W$이다. (T-합)에 의해 $y = Tv = Tp + Tq = 0_W + Tq$이고, [[finite-sum-of-vectors|(H0)]]에 의해 $0_W + Tq = Tq$이다. (T5)에 의해 $Tq = \beta_1 Tx_1 + \cdots + \beta_s Tx_s$이므로 $y \in \operatorname{span}(Tx_1, \dots, Tx_s)$이다. 따라서 $\operatorname{span}(Tx_1, \dots, Tx_s) = \operatorname{Ran} T$이다.

**일차독립.** 길이 $s$인 실수의 열 $\beta$에 대하여 $\beta_1 Tx_1 + \cdots + \beta_s Tx_s = 0_W$라 하자. $q = \beta_1 x_1 + \cdots + \beta_s x_s$라 하면 (T5)에 의해 $Tq = 0_W$이므로 $q \in \operatorname{Ker} T = \operatorname{span}(u)$이고, $q = \alpha_1 u_1 + \cdots + \alpha_k u_k$인 길이 $k$인 실수의 열 $\alpha$가 있다. 모든 항이 $0$인 길이 $s$인 실수의 열과 길이 $k$인 실수의 열이 있다([[finite-sum-of-vectors|벡터의 유한 합]]의 진술에서 값으로 열을 정하는 문장). 길이 $d$인 실수의 열 $\gamma$를 $\alpha$ 뒤에 모든 항이 $0$인 길이 $s$인 실수의 열을 이어 붙인 것, 곧 $\gamma_i = \alpha_i$ ($1 \le i \le k$), $\gamma_{k+j} = 0$ ($1 \le j \le s$)으로 정하고, $\delta$를 모든 항이 $0$인 길이 $k$인 실수의 열 뒤에 $\beta$를 이어 붙인 것, 곧 $\delta_i = 0$ ($1 \le i \le k$), $\delta_{k+j} = \beta_j$ ($1 \le j \le s$)로 정한다. 일차독립인 열을 기저로 늘리기의 (1)과 (C3)에 의해
$$\gamma_1 b_1 + \cdots + \gamma_d b_d = q + 0_V = q, \qquad \delta_1 b_1 + \cdots + \delta_d b_d = 0_V + q = q$$
이다. 첫 식의 $q + 0_V = q$는 [[vector-space|영벡터]]의 정의와 [[vector-space-basic-properties|(B1)]]에 의하고, 둘째 식의 $0_V + q = q$는 (H0)에 의한다. 두 일차결합이 같고 $b$가 기저이므로, 기저의 정의의 (유일성) 조건에 의해 모든 $i \in \{1, \dots, d\}$에서 $\gamma_i = \delta_i$이다. 특히 모든 $j \in \{1, \dots, s\}$에서 $\beta_j = \delta_{k+j} = \gamma_{k+j} = 0$이다. 따라서 $Tx_1, \dots, Tx_s$는 $W$에서 일차독립이다.

**결론.** $Tx$는 모든 항이 $\operatorname{Ran} T$에 속하고 $W$에서 일차독립이며 $\operatorname{span}(Tx) = \operatorname{Ran} T$이므로, (J4)를 $W$의 부분공간 $\operatorname{Ran} T$에 쓰면 $Tx$는 벡터공간 $\operatorname{Ran} T$의 기저이다. 계수와 퇴화차수의 정의 다음의 문장에 의해 $\operatorname{rank} T = s = d - k$이고, [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 정수의 계산에 의해 $\operatorname{nullity} T + \operatorname{rank} T = k + (d - k) = d = \dim V$이다.

**끝의 경우.** $k = 0$이면 $u$는 빈 벡터의 열이다. 이때 $\operatorname{span}(u) = \{0_V\} = \operatorname{Ker} T$이고, 위의 $p$와 $\alpha$에 관한 일차결합은 빈 열의 합 $0_V$이며, $b = x$가 $V$의 기저이다. $k = d$이면 $s = 0$이고 $x$와 $Tx$는 빈 벡터의 열이다. 이때 위 논증은 $\operatorname{Ran} T = \operatorname{span}(Tx) = \{0_W\}$를 보이고, 빈 열은 일차독립이며, 일차독립을 보이는 부분의 "모든 $j$에서 $\beta_j = 0$"은 $j$가 없어서 공허하게 참이다. 두 경우 모두 위 논증이 그대로 성립한다($d = 0$이면 두 경우가 함께 일어난다).
:::

## 예시와 반례

:::example[증명을 따라가 보기]
[[matrix|행렬]]
$$A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
에 대하여 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상 $T_A : \mathbb{R}^3 \to \mathbb{R}^3$을 봅니다. 같은 항목의 (1)(행 규칙)과 [[real-number-arithmetic|(K4), (K9)]]로 계산하면 $x = (x_1, x_2, x_3)$에 대하여 $Ax = (x_2, x_3, 0)$입니다.

$Ax = (0, 0, 0)$인 것은 정확히 $x_2 = x_3 = 0$일 때이므로 $\operatorname{Ker} T_A$는 실수 $t$에 대하여 $(t, 0, 0) = te_1$ 꼴인 벡터 전체, 곧 [[linear-combination-and-span|(N4)]]에 의해 $\operatorname{span}(e_1)$입니다([[standard-basis|표준기저]]의 $e_1$. $t = 1$로 두면 $e_1$ 자신도 핵에 속합니다). $e_1 \ne 0$이므로 길이 $1$인 벡터의 열 $e_1$은 [[linear-independence|(I4)]]에 의해 일차독립이고, $\operatorname{span}(e_1)$을 생성하므로 [[sequences-in-a-subspace|(J4)]]에 의해 벡터공간 $\operatorname{Ker} T_A$의 기저입니다. 따라서 $\operatorname{nullity} T_A = 1$입니다.

증명처럼 이 기저를 $\mathbb{R}^3$의 기저 $e_1, e_2, e_3$(표준기저의 (2))으로 늘리면, 덧붙인 벡터의 상은 행렬과 벡터의 곱의 (3)에 의해 $Ae_2 = (1, 0, 0) = e_1$, $Ae_3 = (0, 1, 0) = e_2$이고, 증명에 따르면 벡터의 열 $e_1, e_2$가 벡터공간 $\operatorname{Ran} T_A$의 기저입니다. 직접 확인해 봅니다. $e_1$, $e_2$는 $\operatorname{Ran} T_A$에 속하므로 (N3)에 의해 $\operatorname{span}(e_1, e_2) \subseteq \operatorname{Ran} T_A$이고, 거꾸로 모든 $x$에서 $Ax = (x_2, x_3, 0) = x_2 e_1 + x_3 e_2$이므로 $\operatorname{Ran} T_A \subseteq \operatorname{span}(e_1, e_2)$입니다. 또 $\alpha e_1 + \beta e_2 = (\alpha, \beta, 0)$이 영벡터이면 $\alpha = \beta = 0$이므로 $e_1, e_2$는 일차독립입니다. (J4)에 의해 $e_1, e_2$는 벡터공간 $\operatorname{Ran} T_A$의 기저이고 $\operatorname{rank} T_A = 2$입니다. $1 + 2 = 3 = \dim \mathbb{R}^3$입니다.
:::

:::counterexample[더해서 나오는 것은 공역의 차원이 아니다]
흔한 착각은 퇴화차수와 계수를 더하면 공역의 차원이 된다는 것입니다. 행렬
$$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$$
에 대하여 $T_B : \mathbb{R}^2 \to \mathbb{R}^3$을 봅니다. 행 규칙으로 계산하면 $x = (x_1, x_2)$에 대하여 $Bx = (x_1, x_2, x_1 + x_2)$입니다. $Bx = (0, 0, 0)$이면 처음 두 값에서 $x_1 = x_2 = 0$이고, $(0, 0)$은 [[linear-map|(T1)]]에 의해 핵에 속하므로 $\operatorname{Ker} T_B = \{(0, 0)\}$이며, 차원의 (3)에 의해 $\operatorname{nullity} T_B = 0$입니다. [[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^2 = 2$이므로 차원 정리에 의해 $\operatorname{rank} T_B = 2 - 0 = 2$입니다. 두 수의 합은 $0 + 2 = 2 = \dim \mathbb{R}^2$이고, $\dim \mathbb{R}^3 = 3$(차원의 (4))과 다릅니다. 차원 정리가 세는 것은 정의역의 차원입니다.
:::

## 확인 질문

:::check[선형사상 $T : \mathbb{R}^5 \to \mathbb{R}^3$은 단사일 수 있는가?]
없습니다. [[rank-and-nullity|계수와 퇴화차수]]의 (3)과 [[dimension|차원]]의 (4)에 의해 $\operatorname{rank} T \le 3$이고, 차원 정리에 의해 $\operatorname{nullity} T + \operatorname{rank} T = 5$입니다. [[well-ordering-principle|(Z7)]]에 의해 $5 = \operatorname{nullity} T + \operatorname{rank} T \le \operatorname{nullity} T + 3$이고, 양변에서 $3$을 빼면 $2 \le \operatorname{nullity} T$입니다. $0 < 2$이므로 (Z6)에 의해 $0 < \operatorname{nullity} T$이고 (Z5)에 의해 $\operatorname{nullity} T \ne 0$입니다. 계수와 퇴화차수의 (4)에 의해 $T$는 단사가 아닙니다.
:::

:::check[$V$가 유한차원이고 선형사상 $T : V \to W$의 계수가 $\dim V$와 같으면 $T$는 단사인가?]
그렇습니다. 차원 정리에 의해 $\operatorname{nullity} T + \dim V = \dim V$이고, [[well-ordering-principle|(Z7)]]에 의해 양변에서 $\dim V$를 빼면 $\operatorname{nullity} T = 0$입니다. [[rank-and-nullity|계수와 퇴화차수]]의 (4)에 의해 $T$는 [[injective-surjective-bijective|단사]]입니다.
:::
