---
title: 동형사상과 기저
title_en: Isomorphisms and Bases
aliases: [동형사상은 기저를 기저로 보낸다, 좌표 동형, isomorphism maps a basis to a basis, coordinate isomorphism]
kind: theorem
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 단사인 선형사상은 일차독립인 열을, 전사인 선형사상은 생성하는 열을 보존하고, 동형사상은 기저를 기저로 보내며, 기저를 기저로 보내는 선형사상은 동형사상이고, 길이 n인 기저가 있는 벡터공간은 ℝⁿ과 동형이다.
requires: [vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, standard-basis, real-function-space, real-number-arithmetic, function, linear-map, linear-map-examples, kernel-and-range, injective-iff-trivial-kernel, isomorphism, inverse-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 6.3절 Isomorphism. Isomorphic spaces, Theorem 6.6과 뒤의 Remark, Theorem 6.7, 예 2, p.27–28"
    checked: original
    note: "출처 Theorem 6.6은 동형사상 A : V → W 가 V 의 기저 v_1, …, v_n 을 W 의 기저 Av_1, …, Av_n 으로 보낸다고 진술하고 증명은 독자에게 맡긴다(p.27). 이어서 Remark로 '기저' 대신 '일차독립', '생성', '일차종속'을 넣어도 되고, A⁻¹ 도 동형사상이므로 v 가 기저인 것은 Av 가 기저인 것과 같다고 적는다. 이 항목의 (1), (2), (3)이 이에 해당하고 증명은 이 사이트가 썼다. (1)과 (2)는 동형사상이 아니라 각각 단사, 전사만 가정한다. 출처 Theorem 6.7은 A : V → W 가 선형사상이고 v_1, …, v_n 과 w_1, …, w_n 이 V 와 W 의 기저이며 Av_k = w_k 이면 A 가 동형사상이라고 진술하고, 증명은 A⁻¹w_k = v_k 로 역사상을 정한다는 한 줄이다(선형사상이 기저 위의 값으로 정해진다는 것을 쓴다). 이 항목의 (4)가 같은 진술이다. 증명은 출처의 경로를 따르지 않고 핵이 영벡터뿐임(단사)과 생성(전사)을 직접 보인다. 출처 예 2(p.28)는 기저 v_1, …, v_n 이 있는 V 에 대해 Ae_k = v_k 로 정한 A : F^n → V 가 Theorem 6.7에 의해 동형사상이라고 적는다. 이 항목의 (5)는 같은 사상을 x_1v_1 + … + x_nv_n 이라는 식으로 정하고 선형, 단사, 전사를 직접 증명한다. 출처의 예 1, 3, 4(다항식 공간, 행렬 공간과의 동형)는 싣지 않았다. 이 항목은 동형인 공간의 차원이나 기저의 길이에 관해 아무것도 주장하지 않는다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 출처 메모의 틀린 서술, 출처와 같은 발상의 반례 표기, 예 하나에서 넘겨짚은 일반화, 건너뛴 증명 단계, 다른 항목의 예시에 기댄 인용을 보완했다."
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이며 $v_1, \dots, v_n$이 길이 $n \ge 0$인 $V$의 열이라 하자. $Tv_1, \dots, Tv_n$은 $W$의 열이다([[linear-map]]).

1. $T$가 [[injective-surjective-bijective|단사]]이고 $v_1, \dots, v_n$이 [[linear-independence|일차독립]]이면 $Tv_1, \dots, Tv_n$도 일차독립이다.
2. $T : V \to W$가 전사이고 $v_1, \dots, v_n$이 $V$를 [[linear-combination-and-span|생성]]하면 $Tv_1, \dots, Tv_n$은 $W$를 생성한다.
3. $T$가 [[isomorphism|동형사상]]이면, $v_1, \dots, v_n$이 $V$의 [[basis|기저]]인 것은 정확히 $Tv_1, \dots, Tv_n$이 $W$의 기저일 때이다.
4. $v_1, \dots, v_n$이 $V$의 기저이고 $Tv_1, \dots, Tv_n$이 $W$의 기저이면 $T$는 동형사상이다.
5. $n$이 자연수이고 $v_1, \dots, v_n$이 $V$의 기저라 하자. 각 $x = (x_1, \dots, x_n) \in \mathbb{R}^n$에서 값이 $x_1 v_1 + \cdots + x_n v_n$인 함수 $C : \mathbb{R}^n \to V$는 동형사상이고 $\mathbb{R}^n$의 [[standard-basis|표준기저]] $e_1, \dots, e_n$에 대하여 $Ce_k = v_k$이다. 따라서 $\mathbb{R}^n \cong V$이고, [[isomorphism|동형사상]]의 (4)에 의해 $V \cong \mathbb{R}^n$이다. 곧 길이 $n \ge 1$인 기저가 있는 벡터공간은 $\mathbb{R}^n$과 동형이다.
:::

:::english
Let $V$, $W$ be vector spaces, $T : V \to W$ a linear map, and $v_1, \dots, v_n$ a sequence of $V$ of length $n \ge 0$. $Tv_1, \dots, Tv_n$ is a sequence of $W$ (see the entry on linear maps).

1. If $T$ is injective and $v_1, \dots, v_n$ is linearly independent, then $Tv_1, \dots, Tv_n$ is also linearly independent.
2. If $T : V \to W$ is surjective and $v_1, \dots, v_n$ spans $V$, then $Tv_1, \dots, Tv_n$ spans $W$.
3. If $T$ is an isomorphism, then $v_1, \dots, v_n$ is a basis of $V$ exactly when $Tv_1, \dots, Tv_n$ is a basis of $W$.
4. If $v_1, \dots, v_n$ is a basis of $V$ and $Tv_1, \dots, Tv_n$ is a basis of $W$, then $T$ is an isomorphism.
5. Let $n$ be a natural number and $v_1, \dots, v_n$ a basis of $V$. The function $C : \mathbb{R}^n \to V$ whose value at each $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ is $x_1 v_1 + \cdots + x_n v_n$ is an isomorphism, and $Ce_k = v_k$ for the standard basis $e_1, \dots, e_n$ of $\mathbb{R}^n$. Hence $\mathbb{R}^n \cong V$, and by (4) of the entry on isomorphisms $V \cong \mathbb{R}^n$. That is, a vector space with a basis of length $n \ge 1$ is isomorphic to $\mathbb{R}^n$.
:::

## 직관

동형사상은 벡터공간의 구조를 그대로 옮기므로, 구조로만 정의된 성질도 그대로 옮겨져야 합니다. 일차독립은 "겹치는 것이 없다", 생성은 "모든 것을 만들 수 있다", 기저는 그 둘입니다. 이 항목은 그 옮김이 정확히 어떤 조건에서 일어나는지를 가립니다. 겹치지 않음은 단사가, 모든 것을 만듦은 전사가 지켜 줍니다. 지도의 비유로 말하면, 두 지점을 같은 곳에 겹쳐 그리는 지도(단사가 아닌 지도)는 서로 다른 길을 하나로 합치고, 일부 지역을 빼먹은 지도(전사가 아닌 지도)는 새 지도로 모든 곳을 갈 수 없습니다. 이 비유가 맞지 않는 곳은, 실제 지도에는 두 지점을 더한다는 뜻이 없지만 선형사상은 일차결합을 같은 계수의 일차결합으로 보내야 한다는 점입니다. 증명은 이 성질 (T5)에서 나옵니다.

(4)는 (3)의 역에 해당하지만 가정이 다릅니다. 동형사상인지 모르는 선형사상이 기저를 기저로 보내기만 해도 단사이고 전사입니다. 단사는 핵이 영벡터뿐이라는 것([[injective-iff-trivial-kernel]])으로, 전사는 $Tv$가 $W$를 생성한다는 것으로 보입니다. (5)는 기저가 $V$의 모든 벡터에 좌표라는 이름표 $\mathbb{R}^n$의 원소를 붙이는 일이라는 말입니다. 좌표 하나를 주면 벡터 하나가 정해지고(전사는 기저의 존재), 서로 다른 좌표가 서로 다른 벡터를 주는 것(단사는 기저의 유일성)이 정의 그대로입니다. 이 항목은 기저가 길이가 다른 두 개 있을 수 있는지에 관해서는 아무것도 말하지 않습니다.

## 증명

:::idea
(1)은 일차결합을 $0_W$로 보내는 계수가 $\operatorname{Ker} T = \{0_V\}$를 거쳐 원래 일차독립으로 돌아가고, (2)는 상이 생성의 상이라는 것을 쓴다. (3)은 (1), (2)와 역함수의 선형성, (4)는 핵과 생성으로 보이고, (5)는 (C1), (C2)와 기저의 두 조건 그대로이다.
:::

:::hint
(4)의 단사는 $\operatorname{Ker} T = \{0_V\}$를 보이면 됩니다. $x \in \operatorname{Ker} T$를 $V$의 기저의 일차결합으로 쓰고 $Tx = 0_W$를 $Tv$의 일차독립에 적용하세요.
:::

:::proof
(T1), (T5)는 [[linear-map]]의 것이고, $\operatorname{Ker} T$와 (2), (3)은 [[kernel-and-range]]의 것이다. (C1)–(C4)는 [[finite-sum-of-vectors]]의 것이다. 기저가 일차독립이고 생성하는 열이라는 것은 [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 있다.

**(1)의 증명.** 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$에서 $\alpha_1 Tv_1 + \cdots + \alpha_n Tv_n = 0_W$라 하자. (T5)에 의해 $T(\alpha_1 v_1 + \cdots + \alpha_n v_n) = 0_W$이므로 $\alpha_1 v_1 + \cdots + \alpha_n v_n \in \operatorname{Ker} T$이다. $T$가 단사이므로 [[injective-iff-trivial-kernel|(1)]]에 의해 $\operatorname{Ker} T = \{0_V\}$이고 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$이다. $v_1, \dots, v_n$이 일차독립이므로 모든 $k$에서 $\alpha_k = 0$이다. 따라서 $Tv_1, \dots, Tv_n$은 일차독립이다.

**(2)의 증명.** $T$가 전사이므로 [[kernel-and-range|(3)]]에 의해 $\operatorname{Ran} T = W$이다. $v_1, \dots, v_n$이 $V$를 생성하므로 (2)에 의해 $\operatorname{Ran} T = \operatorname{span}(Tv_1, \dots, Tv_n)$이다. 따라서 $\operatorname{span}(Tv_1, \dots, Tv_n) = W$이다.

**(3)의 증명.** ($\Rightarrow$) $v_1, \dots, v_n$이 기저이면 일차독립이고 $V$를 생성한다. $T$는 동형사상이므로 단사이고 전사이다. (1)과 (2)에 의해 $Tv_1, \dots, Tv_n$은 일차독립이고 $W$를 생성하므로 기저이다. ($\Leftarrow$) $Tv_1, \dots, Tv_n$이 $W$의 기저라 하자. [[isomorphism|동형사상]]의 (2)에 의해 $T^{-1} : W \to V$는 동형사상이다. 이미 보인 ($\Rightarrow$)를 $T^{-1}$와 기저 $Tv_1, \dots, Tv_n$에 쓰면 열 $T^{-1}(Tv_1), \dots, T^{-1}(Tv_n)$은 $V$의 기저이다. $T^{-1} \circ T = i_V$([[inverse-function]])이므로 각 $k$에서 $T^{-1}(Tv_k) = v_k$이고, 두 열은 모든 항이 같아 같은 열이다. 따라서 $v_1, \dots, v_n$은 $V$의 기저이다.

**(4)의 증명.** 전사: $w \in W$이면 $Tv_1, \dots, Tv_n$이 $W$를 생성하므로 $w = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$인 실수의 열이 있고, (T5)에 의해 $w = T(\alpha_1 v_1 + \cdots + \alpha_n v_n)$이다. 따라서 $w \in \operatorname{Ran} T$이고 $\operatorname{Ran} T = W$이므로 $T$는 전사이다. 단사: $x \in \operatorname{Ker} T$라 하자. $v_1, \dots, v_n$이 $V$를 생성하므로 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$인 열이 있고, (T5)에 의해 $0_W = Tx = \alpha_1 Tv_1 + \cdots + \alpha_n Tv_n$이다. $Tv_1, \dots, Tv_n$이 기저이므로 일차독립이고 모든 $k$에서 $\alpha_k = 0$이다. (C3)에 의해 $x = 0_V$이다. 또 (T1)에 의해 $0_V \in \operatorname{Ker} T$이므로 $\operatorname{Ker} T = \{0_V\}$이고, [[injective-iff-trivial-kernel|(1)]]에 의해 $T$는 단사이다. 따라서 $T$는 전단사인 선형사상, 곧 동형사상이다. $n = 0$이면 $x = 0_V$가 바로 나오고 논증이 그대로 성립한다.

**(5)의 증명.** 각 $x \in \mathbb{R}^n$에 $V$의 원소 $x_1 v_1 + \cdots + x_n v_n$이 하나 정해지므로 [[real-function-space|(G)]]에 의해 함수 $C$가 있다. 선형: $x, y \in \mathbb{R}^n$이면 $x + y = (x_1 + y_1, \dots, x_n + y_n)$이므로 (C1)에 의해 $C(x + y) = (x_1 + y_1) v_1 + \cdots + (x_n + y_n) v_n = Cx + Cy$이다. 실수 $\alpha$에 대하여 $\alpha x = (\alpha x_1, \dots, \alpha x_n)$이므로 (C2)에 의해 $C(\alpha x) = (\alpha x_1) v_1 + \cdots + (\alpha x_n) v_n = \alpha Cx$이다. 전사: $z \in V$이면 기저의 (존재)에 의해 $z = \alpha_1 v_1 + \cdots + \alpha_n v_n$인 실수의 열이 있다. 길이 $n$인 실수의 열은 $\{1, \dots, n\}$에서 $\mathbb{R}$로의 함수이므로 $\mathbb{R}^n$의 원소 $x = (\alpha_1, \dots, \alpha_n)$이고 $Cx = z$이다. 단사: $Cx = Cy$이면 $x_1 v_1 + \cdots + x_n v_n = y_1 v_1 + \cdots + y_n v_n$이므로 기저의 (유일성)에 의해 모든 $k$에서 $x_k = y_k$이고 $x = y$이다. 따라서 $C$는 전단사인 선형사상이다. 또 $e_k$의 $i$번째 값은 $i = k$이면 $1$, $i \ne k$이면 $0$이므로 (C4)와 (V5)에 의해 $Ce_k = 1v_k = v_k$이다. 마지막 문장은 $C$가 $\mathbb{R}^n$에서 $V$로의 동형사상이므로 $\mathbb{R}^n \cong V$이고, [[isomorphism|동형사상]]의 (4)에 의해 $V \cong \mathbb{R}^n$이라는 말이다. $\blacksquare$
:::

## 예시와 반례

:::example[대칭이 표준기저를 기저로 보낸다]
[[linear-map-examples]]의 (6)에 있는 $F$는 선형사상이고 $(F \circ F)(x_1, x_2) = F(x_1, -x_2) = (x_1, -(-x_2)) = (x_1, x_2)$이므로((K9)) $F \circ F = i_{\mathbb{R}^2}$입니다. [[isomorphism|동형사상]]의 (3)에서 $S = T = F$로 두면 $F$는 동형사상입니다. $\mathbb{R}^2$의 표준기저 $e_1 = (1, 0)$, $e_2 = (0, 1)$에 대하여 $Fe_1 = (1, -0) = (1, 0)$((K9)에 의해 $-0 = (-1)0 = 0$)이고 $Fe_2 = (0, -1)$입니다. (3)에 의해 열 $(1, 0), (0, -1)$은 $\mathbb{R}^2$의 기저입니다. 기저임을 정의에서 직접 확인하지 않고 얻은 결론입니다.
:::

:::example[좌표 동형]
$V = \mathbb{R}^2$이고 기저 $v_1 = e_1$, $v_2 = e_2$를 쓰면 (5)의 $C$는 $(x_1, x_2)$를 $x_1 e_1 + x_2 e_2$로 보내는 사상이고, [[standard-basis|표준기저]]의 (3)에 의해 이것은 $(x_1, x_2)$ 자신입니다. 곧 $C = i_{\mathbb{R}^2}$입니다.
:::

:::counterexample[단사가 아니면 일차독립이 보존되지 않을 수 있다]
$p_2 : \mathbb{R}^3 \to \mathbb{R}$(각 $x$에서 값이 $x_2$)에서 길이 $1$인 열 $e_1 = (1, 0, 0)$은 일차독립입니다. $e_1$의 첫째 값이 $1 \ne 0$이므로((K4)) $e_1 \ne 0_{\mathbb{R}^3}$이고 [[linear-independence|(I4)]]가 적용됩니다. 그런데 $p_2 e_1 = 0$이어서 $\mathbb{R}$의 길이 $1$인 열 $0$은 [[linear-independence|(I1)]]에 의해 일차종속입니다. $p_2 e_1 = 0 = p_2(0, 0, 0)$이고 $e_1 \ne (0, 0, 0)$이므로 $p_2$는 단사가 아니고 (1)의 가정이 깨집니다.
:::

## 확인 질문

:::check[$T : V \to W$가 동형사상이고 $V = \{0_V\}$이면 $W$는 어떤 벡터공간인가?]
$W = \{0_W\}$입니다. [[basis|(Q1)]]에 의해 빈 열은 $V$의 기저입니다. (3)에서 $n = 0$으로 두면 $T$를 합성한 빈 열이 $W$의 기저이고, (Q1)에 의해 $W = \{0_W\}$입니다.
:::

:::check[$o : \mathbb{R} \to \mathbb{R}$가 영사상일 때 열 $v_1 = 1$은 $\mathbb{R}$을 생성하는데 $ov_1$은 $\mathbb{R}$을 생성하는가?]
생성하지 않습니다. 실수 $r$은 계수 $r$인 일차결합 $r \cdot 1 = r$이므로((K4)) 열 $1$은 $\mathbb{R}$을 생성합니다. $ov_1 = 0$이고 열 $0$의 일차결합은 $\alpha 0 = 0$이어서([[vector-space-basic-properties|(B4)]]) $\operatorname{span}(0) = \{0\}$입니다. $1 \notin \{0\}$이므로((K4)) 이것은 $\mathbb{R}$이 아닙니다. $o$가 전사가 아니라서 (2)의 가정이 깨집니다.
:::
