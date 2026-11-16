---
title: 기저 위의 값으로 정해지는 선형사상
title_en: Linear Maps Are Determined by Their Values on a Basis
aliases: [기저 위의 값, 선형사상의 확장, 선형사상의 존재와 유일성, linear map defined on a basis, extension by linearity]
kind: theorem
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: V를 생성하는 열 위에서 값이 같은 두 선형사상은 같고, V의 기저의 각 항에 W의 벡터를 마음대로 짝지으면 그 값을 갖는 선형사상이 정확히 하나 있다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, basis, real-function-space, function, linear-map, linear-map-examples, real-number-arithmetic, standard-basis]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 3.3절 Linear transformations and generating sets, p.15
    checked: original
    note: "출처는 p.15에서 선형사상 T : V → W 가 생성하는 집합 위의 값으로(특히 기저 위의 값으로) 완전히 정해진다고 쓰고, v_1, …, v_n 이 생성하는 열이고 T, T_1 이 모든 k 에서 Tv_k = T_1 v_k 인 선형사상이면 T = T_1 이라고 진술한다. 증명은 자명하다며 독자에게 맡긴다. 이 항목의 (1)이 그 진술이고 증명은 이 사이트가 썼다. (2)의 존재(기저의 각 항에 W의 벡터를 마음대로 짝지은 선형사상이 있다)는 출처에 진술이 없다. 출처는 Theorem 6.7의 증명(p.27)에서 'as we know, a linear transformation is defined by its values on a basis'라고 쓰고 이를 존재로 쓰며, 그 뒤의 예 1, 2(p.27–28)와 2장 Proposition 3.3의 증명(p.49)에서도 Ae_k = v_k 로 정한 사상을 증명 없이 쓴다. 이 항목의 (2)와 그 증명(좌표로 값을 정한 사상이 선형이고 v_k 를 w_k 로 보냄)은 이 사이트가 썼다. 출처는 F^n 의 표준기저 위의 값으로 정해진다는 경우를 p.13–14에서 설명하는데(T(x)가 x_1 a_1 + … + x_n a_n 꼴이라는 설명), 이 항목은 일반 V 와 임의의 기저를 다룬다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 출처 메모의 틀린 서술, 출처와 같은 발상의 반례 표기, 예 하나에서 넘겨짚은 일반화, 건너뛴 증명 단계, 다른 항목의 예시에 기댄 인용을 보완했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이라 하자.

1. $v_1, \dots, v_n$이 길이 $n \ge 0$인 $V$의 열이고 $V$를 [[linear-combination-and-span|생성한다]]고 하자. $S, T : V \to W$가 [[linear-map|선형사상]]이고 모든 $k \in \{1, \dots, n\}$에서 $Sv_k = Tv_k$이면 $S = T$이다.
2. $v_1, \dots, v_n$이 $V$의 [[basis|기저]]이고 $w_1, \dots, w_n$이 $W$의 길이 $n$인 임의의 열이면, 모든 $k \in \{1, \dots, n\}$에서 $Tv_k = w_k$인 선형사상 $T : V \to W$가 정확히 하나 있다. 이 $T$는, $x \in V$의 이 기저에 관한 좌표가 $\alpha_1, \dots, \alpha_n$이면 $Tx = \alpha_1 w_1 + \cdots + \alpha_n w_n$이다.
:::

:::english
Let $V$, $W$ be vector spaces.

1. Let $v_1, \dots, v_n$ be a sequence of $V$ of length $n \ge 0$ that spans $V$. If $S, T : V \to W$ are linear maps and $Sv_k = Tv_k$ for every $k \in \{1, \dots, n\}$, then $S = T$.
2. If $v_1, \dots, v_n$ is a basis of $V$ and $w_1, \dots, w_n$ is an arbitrary sequence of $W$ of length $n$, then there is exactly one linear map $T : V \to W$ with $Tv_k = w_k$ for every $k \in \{1, \dots, n\}$. If the coordinates of $x \in V$ with respect to this basis are $\alpha_1, \dots, \alpha_n$, then this $T$ satisfies $Tx = \alpha_1 w_1 + \cdots + \alpha_n w_n$.
:::

## 직관

선형사상은 일차결합을 같은 계수의 일차결합으로 보내므로(T5), 벡터를 만드는 재료인 열 $v_1, \dots, v_n$에서의 값만 알면 나머지는 정해집니다. 요리법으로 비유하면, 기본 재료를 가공하는 방법만 정해지면 재료를 섞어 만든 음식의 가공 결과도 정해집니다. (1)이 이 말입니다. 생성하기만 하면 되고 재료가 겹쳐도 상관없습니다.

(2)는 반대 방향입니다. 기저의 각 항에 가공 결과를 아무렇게나 정해 주어도 모순 없이 하나의 선형사상이 나옵니다. 비유가 어긋나는 곳은 재료가 겹칠 때입니다. 겹치는 재료에는 가공 결과를 마음대로 정할 수 없습니다. 기저는 모든 벡터가 계수의 열 하나로만 표현되는 열이라서, 이 표현을 따라 값을 정해도 두 가지로 읽힐 위험이 없습니다. 아래 반례가 생성하지만 기저가 아닌 열에서 이 일이 어긋나는 경우를 보입니다. 증명에서 좌표의 유일성이 쓰이는 곳은 값을 함수로 정하는 단계와, 기저의 $k$번째 항의 좌표가 "$k$번째만 $1$"이라는 것을 아는 단계입니다.

## 증명

:::idea
(1)은 $x$를 생성하는 열의 일차결합으로 쓰고 (T5)로 양쪽을 계산한다. (2)의 존재는 $x$의 좌표를 이용해 $Tx$를 정의하고, 좌표의 덧셈과 스칼라배에 관한 (Q2)와 (C1), (C2)로 선형성을, 좌표의 유일성으로 $Tv_k = w_k$를 보인다. 유일성은 (1)이다.
:::

:::hint
(2)에서 $v_k$의 좌표를 구하려면 $k$번째만 $1$이고 나머지가 $0$인 실수의 열을 생각하고 (C4)를 쓰세요.
:::

:::proof
(V5)는 [[vector-space]]의 것, (C1)–(C4)와 "같은 열의 합은 같다"는 [[finite-sum-of-vectors]]의 것, (Q2)는 [[basis]]의 것이다. (T5)는 [[linear-map]]의 것이다.

**(1)의 증명.** $x \in V$라 하자. $v_1, \dots, v_n$이 $V$를 생성하므로 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이다. (T5)에 의해 $Sx = \alpha_1 Sv_1 + \cdots + \alpha_n Sv_n$이고 $Tx = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이다. 모든 $k$에서 $Sv_k = Tv_k$이므로 $i$번째 항이 $\alpha_i(Sv_i)$인 열과 $i$번째 항이 $\alpha_i(Tv_i)$인 열은 모든 항이 같아서 같은 열이고, 같은 열의 합은 같으므로 $Sx = Tx$이다. $S$와 $T$는 정의역이 $V$로 같고 모든 $x \in V$에서 값이 같으므로 $S = T$이다. $n = 0$이면 $x = 0_V$이고 양변이 (T1)에 의해 $0_W$이며 이 논증이 그대로 성립한다.

**(2)의 유일성.** 기저는 $V$를 생성한다([[basis|기저]]의 (존재)). 모든 $k$에서 $Tv_k = w_k = T'v_k$인 선형사상 $T$, $T'$가 있으면 (1)에 의해 $T = T'$이다.

**(2)의 존재.** 각 $x \in V$는 기저에 관한 좌표 $\alpha_1(x), \dots, \alpha_n(x)$가 하나로 정해져 있다. 각 $x$에 $W$의 원소 $\alpha_1(x) w_1 + \cdots + \alpha_n(x) w_n$이 하나 정해지므로 [[real-function-space|(G)]]에 의해 이 값을 갖는 함수 $T : V \to W$가 있다. 이 $T$가 선형사상이고 $Tv_k = w_k$임을 보인다.

*(T-합).* $x, y \in V$의 좌표를 각각 $\alpha_i$, $\beta_i$로 쓴다. (Q2)에 의해 $x + y$의 좌표는 $\alpha_i + \beta_i$이다. 따라서 (C1)을 $W$의 열 $w_1, \dots, w_n$에 쓰면
$$T(x + y) = (\alpha_1 + \beta_1) w_1 + \cdots + (\alpha_n + \beta_n) w_n = (\alpha_1 w_1 + \cdots + \alpha_n w_n) + (\beta_1 w_1 + \cdots + \beta_n w_n) = Tx + Ty$$
이다.

*(T-배).* 실수 $\gamma$에 대하여 (Q2)에 의해 $\gamma x$의 좌표는 $\gamma\alpha_i$이므로 (C2)에 의해 $T(\gamma x) = (\gamma\alpha_1) w_1 + \cdots + (\gamma\alpha_n) w_n = \gamma(\alpha_1 w_1 + \cdots + \alpha_n w_n) = \gamma Tx$이다.

*$Tv_k = w_k$.* $k \in \{1, \dots, n\}$이라 하고 길이 $n$인 실수의 열 $\varepsilon_1, \dots, \varepsilon_n$을 $\varepsilon_k = 1$, $i \ne k$에서 $\varepsilon_i = 0$으로 정한다((G)). (C4)에 의해 $\varepsilon_1 v_1 + \cdots + \varepsilon_n v_n = \varepsilon_k v_k = 1v_k = v_k$이다. (V5)에 의한 마지막 등호이다. 기저의 (유일성)에 의해 $v_k$의 좌표는 $\varepsilon_1, \dots, \varepsilon_n$이다. 따라서 $W$에서 (C4)와 (V5)에 의해 $Tv_k = \varepsilon_1 w_1 + \cdots + \varepsilon_n w_n = \varepsilon_k w_k = 1w_k = w_k$이다.

마지막으로 $Tx = \alpha_1 w_1 + \cdots + \alpha_n w_n$이라는 식은 $T$의 정의이다. $n = 0$이면 $V$의 기저가 빈 열이므로 모든 $x$의 좌표가 빈 열이고 $T$는 모든 $x$에서 값이 빈 합 $0_W$인 함수이며, 위의 논증이 그대로 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ²의 표준기저 위에서 값을 정하기]
$e_1 = (1, 0)$, $e_2 = (0, 1)$은 $\mathbb{R}^2$의 [[standard-basis|표준기저]]이고 $x = (x_1, x_2)$의 좌표는 $x_1, x_2$입니다. $W = \mathbb{R}$이고 $w_1 = 3$, $w_2 = -2$라 하면 (2)에 의해 $Te_1 = 3$, $Te_2 = -2$인 선형사상 $T : \mathbb{R}^2 \to \mathbb{R}$가 정확히 하나 있고, $T(x_1, x_2) = x_1 \cdot 3 + x_2 \cdot (-2)$입니다. 예를 들어 $T(4, 5) = 12 + (-10) = 2$입니다((K12)의 (ii), (K7)). [[linear-map]]의 예시에서 이 값을 가정하고 계산했던 선형사상이 실제로 있다는 것이 (2)입니다.
:::

:::example[빈 열이 기저인 경우]
$V = \{0_V\}$이면 빈 열이 기저입니다((Q1)). $W$의 빈 열 하나가 짝지어지고, (2)에 의해 선형사상 $T : V \to W$가 정확히 하나 있는데 그것은 $T0_V = 0_W$인 영사상입니다. $V$의 원소는 $0_V$뿐이고 (T1)에 의해 $T0_V = 0_W$이므로 $V$에서 $W$로의 선형사상은 이것뿐입니다.
:::

:::counterexample[생성하지만 기저가 아닌 열에는 값을 마음대로 줄 수 없다]
$V = W = \mathbb{R}$이라 하고 길이 $2$인 열 $v_1 = 1$, $v_2 = 1$을 생각합시다. 실수 $r$은 계수 $r$, $0$으로 $r \cdot 1 + 0 \cdot 1 = r \cdot 1 = r$이므로((C4)와 (K4)) 이 열은 $\mathbb{R}$을 생성합니다. 그러나 계수의 열 $1, 0$과 $0, 1$은 서로 다른데 (C4)와 (K4)에 의해 $1 \cdot 1 + 0 \cdot 1 = 1 = 0 \cdot 1 + 1 \cdot 1$이므로 [[basis|기저]]의 (유일성)이 깨져 기저가 아닙니다. $w_1 = 0$, $w_2 = 1$로 두면 $Tv_1 = w_1$이고 $Tv_2 = w_2$인 선형사상 $T$는 없습니다. $v_1 = v_2 = 1$이므로 그런 $T$가 있다면 $T(1) = w_1 = 0$이고 $T(1) = w_2 = 1$이어서 $0 = 1$이 되어 (K4)에 어긋납니다. (1)은 생성하는 열에서도 성립하지만 (2)의 존재는 기저라는 조건이 필요합니다.
:::

## 확인 질문

:::check[(2)의 $T : \mathbb{R}^2 \to \mathbb{R}$에서 $Te_1 = 1$, $Te_2 = 1$이면 $T(3, 4)$는 무엇인가?]
$T(3, 4) = 3Te_1 + 4Te_2 = 3 \cdot 1 + 4 \cdot 1 = 7$입니다. $(3, 4)$의 좌표가 $3$, $4$이기 때문입니다.
:::

:::check[$S, T : \mathbb{R}^2 \to \mathbb{R}$가 선형사상이고 $Se_1 = Te_1$이며 $S(1, 1) = T(1, 1)$이면 $S = T$인가?]
그렇습니다. $e_2 = (1, 1) - e_1$이므로 (값마다 계산하면 $(1 - 1, 1 - 0) = (0, 1)$) (T2)에 의해 $Se_2 = S(1, 1) - Se_1 = T(1, 1) - Te_1 = Te_2$입니다. 이제 $Se_1 = Te_1$, $Se_2 = Te_2$이고 $e_1, e_2$가 $\mathbb{R}^2$를 생성하므로 (1)에 의해 $S = T$입니다.
:::
