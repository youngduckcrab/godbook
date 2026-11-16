---
title: 계수와 퇴화차수
title_en: Rank and Nullity
aliases: [계수, 퇴화차수, 선형사상의 계수, 랭크, rank, nullity, rank of a linear map]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 공간에서 나가는 선형사상 T의 상과 핵은 유한차원이고, 상의 차원을 계수 rank T, 핵의 차원을 퇴화차수 nullity T 라 한다. 둘 다 정의역의 차원 이하이고, T가 단사인 것은 퇴화차수가 0일 때, 공역이 유한차원일 때 T가 전사인 것은 계수가 공역의 차원과 같을 때이다.
requires: [vector-space, subspace, function, injective-surjective-bijective, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, linear-map, linear-map-examples, kernel-and-range, injective-iff-trivial-kernel, dimension, independent-and-spanning-bounds, sequences-in-a-subspace, dimension-of-subspace, real-function-space, real-number-arithmetic, matrix, matrix-vector-product, well-ordering-principle]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7절 Fundamental subspaces of a matrix. Rank., 첫머리와 Definition(계수), p.59–60"
    checked: original
    note: "출처는 선형변환(행렬) A 의 계수를 상의 차원으로, 곧 rank A := dim Ran A 로 정의한다(p.60). 그 앞(p.59)에서 핵을 Ker A = Null A := {v ∈ V : Av = 0} 로, 상을 Ran A 로 다시 적는다. 'nullity'라는 낱말은 출처에 나오지 않는다(책 전체를 검색한 범위). 출처는 핵의 차원을 언제나 dim Ker A 로 쓴다(예: p.64 의 Theorem 7.2). 이 항목은 그 수를 퇴화차수(nullity)라 부르고 기호 nullity T 로 쓴다. 이 항목은 정의역 V 가 유한차원이라는 가정을 진술에 두고, 핵과 상이 유한차원이어서 두 차원이 정해진다는 것(1)을 증명한다. (1)–(5)의 증명은 이 사이트의 것이다. (2)의 rank T ≤ dim V 는 출처 연습문제 7.5(p.68, A : X → Y 이고 V 가 X 의 부분공간이면 dim AV ≤ dim V)의 V = X 인 경우이고, (3)은 연습문제 7.4(p.67–68)의 Remark(V ⊂ W 이면 dim V ≤ dim W)와 같은 논증이며, 출처는 둘 다 연습문제로 둔다. 출처의 참·거짓 연습문제 7.1 g(p.67)는 n × n 행렬의 계수가 n 이하인지 묻는데, 이것은 (2), (3)의 행렬판에 해당한다. 출처는 선형사상을 A 로 쓰고 이 항목은 T 로 쓴다. 첫째 확인 질문(계수가 0 이면 영사상)은 출처 연습문제 7.1 b(p.67, m × n 영행렬만이 계수 0 인 m × n 행렬인가)와 같은 발상이다. 예시와 반례와 둘째 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$, $W$가 [[vector-space|벡터공간]]이고 $V$가 [[dimension|유한차원]]이며 $T : V \to W$가 [[linear-map|선형사상]]이라 하자. $W$는 유한차원이 아니어도 된다. [[kernel-and-range|핵과 상]]의 (1)에 의해 $\operatorname{Ker} T$는 $V$의 [[subspace|부분공간]]이고 $\operatorname{Ran} T$는 $W$의 부분공간이다. [[dimension-of-subspace|부분공간의 차원]]에서처럼 이 둘을 [[subspace|(P1)]]의 제한한 연산으로 벡터공간으로 보고, 그 유한차원과 차원은 이 벡터공간에 대해 말한다.

1. $\operatorname{Ker} T$와 $\operatorname{Ran} T$는 유한차원이다.

(1)에 의해 두 차원이 정해지므로 다음과 같이 정의한다. $T$의 **계수**(rank)는 $\operatorname{rank} T = \dim \operatorname{Ran} T$이고, $T$의 **퇴화차수**(nullity)는 $\operatorname{nullity} T = \dim \operatorname{Ker} T$이다. 둘 다 $0$ 이상의 정수이다. 곧 정수 $r \ge 0$에 대하여 $\operatorname{rank} T = r$인 것은 정확히 벡터공간 $\operatorname{Ran} T$에 길이 $r$인 [[basis|기저]]가 있을 때이고, $\operatorname{nullity} T = r$인 것은 정확히 벡터공간 $\operatorname{Ker} T$에 길이 $r$인 기저가 있을 때이다.

2. $\operatorname{nullity} T \le \dim V$이고 $\operatorname{rank} T \le \dim V$이다.
3. $W$가 유한차원이면 $\operatorname{rank} T \le \dim W$이다.
4. $T$가 [[injective-surjective-bijective|단사]]인 것은 정확히 $\operatorname{nullity} T = 0$일 때이다.
5. $W$가 유한차원이면, $T : V \to W$가 전사인 것은 정확히 $\operatorname{rank} T = \dim W$일 때이다.
:::

:::english
Let $V$ and $W$ be vector spaces with $V$ finite-dimensional, and let $T : V \to W$ be a linear map. The space $W$ need not be finite-dimensional. By property (1) of kernel and range, $\operatorname{Ker} T$ is a subspace of $V$ and $\operatorname{Ran} T$ is a subspace of $W$. As in the entry on the dimension of a subspace, we regard each of them as a vector space under the restricted operations of (P1), and finite-dimensionality and dimension refer to this vector space.

1. $\operatorname{Ker} T$ and $\operatorname{Ran} T$ are finite-dimensional.

Since (1) makes both dimensions defined, we define the following. The **rank** of $T$ is $\operatorname{rank} T = \dim \operatorname{Ran} T$, and the **nullity** of $T$ is $\operatorname{nullity} T = \dim \operatorname{Ker} T$. Both are integers at least $0$. That is, for an integer $r \ge 0$, $\operatorname{rank} T = r$ exactly when the vector space $\operatorname{Ran} T$ has a basis of length $r$, and $\operatorname{nullity} T = r$ exactly when the vector space $\operatorname{Ker} T$ has a basis of length $r$.

2. $\operatorname{nullity} T \le \dim V$ and $\operatorname{rank} T \le \dim V$.
3. If $W$ is finite-dimensional, then $\operatorname{rank} T \le \dim W$.
4. $T$ is injective exactly when $\operatorname{nullity} T = 0$.
5. If $W$ is finite-dimensional, then $T : V \to W$ is surjective exactly when $\operatorname{rank} T = \dim W$.
:::

## 직관

물체에 바로 위에서 빛을 비추면 바닥에 그림자가 생깁니다. 물체의 각 점이 그림자의 한 점으로 옮겨지는데, 위아래 방향의 차이는 그림자에서 사라집니다. 선형사상에서 이 "사라지는 방향"에 해당하는 것이 핵이고, 그림자가 놓이는 곳에 해당하는 것이 상입니다. 계수는 상의 차원, 퇴화차수는 핵의 차원이므로, 이 그림자에서는 계수가 $2$(바닥), 퇴화차수가 $1$(위아래)입니다. 비유와 다른 점은, 선형사상의 상은 물체 하나의 그림자가 아니라 정의역 전체가 옮겨진 부분공간이라는 것입니다.

계수와 퇴화차수를 정하려면 상과 핵이 유한차원이어야 합니다. 정의역 $V$가 유한차원이라는 가정이 여기서 쓰입니다. 핵은 $V$의 부분공간이라서 유한차원이고, 상은 $V$의 기저의 상으로 생성되므로 공역 $W$가 아무리 커도 유한차원입니다. 또 핵은 $V$ 안에 있고 상은 길이 $\dim V$인 열로 생성되므로, 계수와 퇴화차수 모두 $\dim V$를 넘지 않습니다.

(4)와 (5)는 단사와 전사를 수 하나로 바꿔 줍니다. 단사는 [[injective-iff-trivial-kernel|핵이 영벡터뿐인 것]]과 같고, 전사는 [[kernel-and-range|상이 공역 전체인 것]]과 같은데, 이 조건들을 각각 "퇴화차수가 $0$", "계수가 $\dim W$"(전사 쪽은 $W$가 유한차원일 때)로 셀 수 있습니다.

이 항목의 계수(rank)는 일차결합의 계수(coefficients)와 다른 말입니다. 한자로는 階數와 係數로 다릅니다. 헷갈리지 않도록 이 단원에서는 일차결합의 계수를 "일차결합의 계수", "좌표" 또는 "실수의 열"로 풀어 씁니다.

## 성질의 증명

:::proof
$d = \dim V$라 하자. [[dimension|차원]]의 (2)에 의해 $d$는 $0$ 이상의 정수이고 길이 $d$인 $V$의 기저 $v_1, \dots, v_d$가 있다.

**(1)과 (2)** $\operatorname{Ker} T$는 $V$의 부분공간이고 $V$는 유한차원이므로 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $\operatorname{Ker} T$는 유한차원이고, (2)에 의해 $\dim \operatorname{Ker} T \le d$이다.

$\operatorname{Ran} T$를 본다. 기저의 정의의 (존재) 조건에 의해 $v$는 $V$를 생성한다. [[linear-map|선형사상]]의 진술에 의해 $Tv_1, \dots, Tv_d$는 길이 $d$인 $W$의 벡터의 열이고, [[kernel-and-range|핵과 상]]의 (2)에 의해 $\operatorname{Ran} T = \operatorname{span}(Tv_1, \dots, Tv_d)$이다. 부분공간의 차원의 (4)는 공간이 유한차원이 아니어도 성립하므로 벡터공간 $W$와 벡터의 열 $Tv$에 쓸 수 있고, 부분공간 $\operatorname{span}(Tv_1, \dots, Tv_d)$는 유한차원이며 그 차원은 $d$ 이하이다. $\operatorname{Ran} T$는 이 부분공간과 같은 집합이고 (P1)의 제한한 연산은 부분집합의 원소에서의 값으로 정해지므로, 둘은 같은 벡터공간이다. 따라서 $\operatorname{Ran} T$는 유한차원이고 $\dim \operatorname{Ran} T \le d$이다.

**정의 다음의 문장** 차원의 (2)에 의해 $\dim \operatorname{Ran} T = r$인 것은 정확히 벡터공간 $\operatorname{Ran} T$에 길이 $r$인 기저가 있을 때이고, 핵도 같다. 차원의 (2)는 차원이 $0$ 이상의 정수임도 말한다.

**(3)** $W$가 유한차원이면 $\operatorname{Ran} T$는 $W$의 부분공간이므로 부분공간의 차원의 (2)에 의해 $\operatorname{rank} T \le \dim W$이다.

**(4)** [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$가 단사인 것은 정확히 $\operatorname{Ker} T = \{0_V\}$일 때이다. (P1)에 의해 벡터공간 $\operatorname{Ker} T$의 영벡터는 $0_V$이다. 차원의 (3)을 벡터공간 $\operatorname{Ker} T$에 쓰면, $\operatorname{Ker} T = \{0_V\}$이면 $\dim \operatorname{Ker} T = 0$이고, 거꾸로 ($\operatorname{Ker} T$는 이 항목의 (1)에 의해 유한차원이므로) $\dim \operatorname{Ker} T = 0$이면 $\operatorname{Ker} T = \{0_V\}$이다. 따라서 $T$가 단사인 것은 정확히 $\operatorname{nullity} T = 0$일 때이다.

**(5)** $W$가 유한차원이라 하자. 핵과 상의 (3)에 의해 $T : V \to W$가 전사인 것은 정확히 $\operatorname{Ran} T = W$일 때이다.

$\operatorname{Ran} T = W$라 하자. $m = \dim W$라 하면 차원의 (2)에 의해 길이 $m$인 $W$의 기저 $w_1, \dots, w_m$이 있다. 이 벡터의 열의 모든 항은 $W = \operatorname{Ran} T$에 속하고, $w$는 기저이므로 [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 $W$에서 일차독립이며 $\operatorname{span}(w_1, \dots, w_m) = W = \operatorname{Ran} T$이다. [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)를 벡터공간 $W$와 그 부분공간 $\operatorname{Ran} T$에 쓰면 $w$는 벡터공간 $\operatorname{Ran} T$의 기저이다. 차원의 (2)에 의해 $\operatorname{rank} T = m = \dim W$이다.

거꾸로 $\operatorname{rank} T = \dim W$이면 $\operatorname{Ran} T$는 유한차원 벡터공간 $W$의 부분공간이고 차원이 같으므로 부분공간의 차원의 (3)에 의해 $\operatorname{Ran} T = W$이고, $T : V \to W$는 전사이다.
:::

## 예시와 반례

:::example[ℝ³에서 ℝ²로 가는 행렬의 사상]
[[matrix|행렬]]
$$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$
에 대하여 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상 $T_A : \mathbb{R}^3 \to \mathbb{R}^2$를 봅니다. 같은 항목의 (1)(행 규칙)과 [[real-number-arithmetic|(K4), (K9)]]로 계산하면, $x = (x_1, x_2, x_3)$에 대하여 $Ax = (x_1 + x_2, x_2 + x_3)$입니다.

**계수.** $b = (b_1, b_2) \in \mathbb{R}^2$에 대하여 $y = (b_1, 0, b_2)$로 두면 $Ay = (b_1 + 0, 0 + b_2) = (b_1, b_2) = b$이므로((K1), (K4)) $T_A$는 전사입니다. [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^2$는 유한차원이고 $\dim \mathbb{R}^2 = 2$이므로, 이 항목의 (5)에 의해 $\operatorname{rank} T_A = 2$입니다.

**퇴화차수.** $Ax = (0, 0)$이면 $x_1 + x_2 = 0$이고 $x_2 + x_3 = 0$입니다. (K1)로 $x_2 + x_1 = 0$, $x_2 + x_3 = 0$이므로 (K8)의 (ii)(덧셈 역원의 유일성)에 의해 $x_1 = -x_2$, $x_3 = -x_2$입니다. $c = (-1, 1, -1)$이라 하면 (K1), (K4), (K9)에 의해 $x_2 c = (-x_2, x_2, -x_2) = x$입니다. 거꾸로 실수 $t$에 대하여 $tc = (-t, t, -t)$이고 $A(tc)$는 $((-t) + t, t + (-t)) = (0, 0)$입니다((K1)과 (K8)의 (ii)). 따라서 $\operatorname{Ker} T_A = \{tc : t \text{는 실수}\}$이고, [[linear-combination-and-span|(N4)]]에 의해 이것은 $\operatorname{span}(c)$입니다. $c$의 둘째 값이 $1 \ne 0$이므로 $c \ne (0, 0, 0)$이고, [[linear-independence|(I4)]]에 의해 길이 $1$인 벡터의 열 $c$는 일차독립입니다. [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\operatorname{nullity} T_A = 1$입니다.
:::

:::example[공역이 무한차원이어도 계수가 정해진다]
[[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (5)에 의해 $\mathbb{R}^{\mathbb{N}}$은 무한차원이고, 거기서 쓰는 $\varepsilon_1 \in \mathbb{R}^{\mathbb{N}}$은 $1$에서의 값이 $1$이고 다른 자연수에서의 값이 $0$인 함수입니다. 실수 $a$마다 $a\varepsilon_1$이 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 이 값을 갖는 함수 $T : \mathbb{R} \to \mathbb{R}^{\mathbb{N}}$이 있습니다. [[vector-space|벡터공간]]의 (V8)과 (V6)에 의해 $T(a + b) = (a + b)\varepsilon_1 = a\varepsilon_1 + b\varepsilon_1$이고 $T(\gamma a) = (\gamma a)\varepsilon_1 = \gamma(a\varepsilon_1)$이므로 $T$는 선형사상입니다.

$\operatorname{Ran} T = \{a\varepsilon_1 : a \text{는 실수}\}$는 (N4)에 의해 $\operatorname{span}(\varepsilon_1)$입니다. $\varepsilon_1$의 $1$에서의 값이 $1 \ne 0$이므로 $\varepsilon_1$은 영벡터(모든 값이 $0$인 함수, [[real-function-space|함수의 공간]]의 (1))가 아니고, (I4)와 부분공간의 차원의 (4)에 의해 $\operatorname{rank} T = 1$입니다. 또 $a\varepsilon_1$이 영벡터이면 $1$에서의 값을 비교해 $a \cdot 1 = 0$, 곧 (K4)에 의해 $a = 0$입니다. $\operatorname{Ker} T$는 부분공간이므로 [[subspace|(S1)]]에 의해 $0$을 원소로 가지고, 그러므로 $\operatorname{Ker} T = \{0\}$이며 [[dimension|차원]]의 (3)에 의해 $\operatorname{nullity} T = 0$입니다. 공역 $\mathbb{R}^{\mathbb{N}}$의 차원은 정의되지 않지만 $T$의 계수와 퇴화차수는 정해집니다.
:::

:::counterexample[정의역이 무한차원이면 핵이 무한차원일 수 있다]
[[linear-map-examples|선형사상의 예]]의 (1)에 있는 영사상 $o : \mathbb{R}^{\mathbb{N}} \to \mathbb{R}$을 봅니다. 모든 $f$에서 $of = 0$이므로 $\operatorname{Ker} o = \mathbb{R}^{\mathbb{N}}$입니다. 벡터공간 $\operatorname{Ker} o$가 유한차원이라면 [[sequences-in-a-subspace|부분공간 안의 열]]의 마지막 문단에 의해 $\operatorname{span}(w_1, \dots, w_n) = \operatorname{Ker} o = \mathbb{R}^{\mathbb{N}}$인 $\mathbb{R}^{\mathbb{N}}$의 벡터의 열 $w$가 있고, 그러면 [[dimension|유한차원]]의 정의에 의해 $\mathbb{R}^{\mathbb{N}}$이 유한차원이 되어 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (5)에 어긋납니다. 따라서 $\operatorname{Ker} o$는 무한차원이고, 이 $o$에는 퇴화차수를 정할 수 없습니다. 이 항목이 $V$가 유한차원이라는 가정을 두는 까닭입니다.
:::

## 확인 질문

:::check[$V$가 유한차원이고 $T : V \to W$가 선형사상이며 $\operatorname{rank} T = 0$이면 $T$는 어떤 사상인가?]
영사상입니다. 이 항목의 (1)에 의해 $\operatorname{Ran} T$는 유한차원이므로, [[dimension|차원]]의 (3)을 벡터공간 $\operatorname{Ran} T$(영벡터는 [[subspace|(P1)]]에 의해 $0_W$)에 쓰면 $\operatorname{Ran} T = \{0_W\}$입니다. 따라서 모든 $v \in V$에서 $Tv \in \operatorname{Ran} T$이므로 $Tv = 0_W$이고, $T$는 [[linear-map-examples|선형사상의 예]] (1)의 영사상 $o : V \to W$와 정의역이 같고 모든 점에서 값이 같으므로 [[function|함수]]의 같음에 의해 $T = o$입니다.
:::

:::check[선형사상 $T : \mathbb{R}^2 \to \mathbb{R}^3$은 전사일 수 있는가?]
없습니다. 이 항목의 (2)와 [[dimension|차원]]의 (4)에 의해 $\operatorname{rank} T \le \dim \mathbb{R}^2 = 2$이고, $2 < 3$이므로 [[well-ordering-principle|(Z6)]]에 의해 $\operatorname{rank} T < 3$, 곧 (Z5)에 의해 $\operatorname{rank} T \ne 3 = \dim \mathbb{R}^3$입니다. 이 항목의 (5)에 의해 $T : \mathbb{R}^2 \to \mathbb{R}^3$은 전사가 아닙니다.
:::
