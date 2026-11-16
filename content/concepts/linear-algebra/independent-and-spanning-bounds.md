---
title: 일차독립인 열과 생성하는 열의 길이
title_en: Lengths of Linearly Independent and Spanning Sequences
aliases: [일차독립인 열의 길이, 생성하는 열의 길이, 길이가 차원인 열, ℝ^ℕ 은 무한차원, linearly independent sequence is at most dim V, spanning sequence is at least dim V]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 벡터공간 V 에서 일차독립인 열의 길이는 dim V 이하, V 를 생성하는 열의 길이는 dim V 이상이고, 길이가 dim V 인 열은 일차독립이거나 생성하기만 하면 기저이다. ℕ 에서 ℝ 로의 함수 전체 ℝ^ℕ 은 무한차원이다.
requires: [real-number-arithmetic, vector-space, real-function-space, function, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, spanning-list-contains-basis, independent-list-extension, standard-basis, exchange-lemma, dimension, proof-by-contradiction, well-ordering-principle]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 5절, Proposition 5.2, p.54와 Proposition 5.3, p.55; 연습문제 5.2, 5.3, p.56
    checked: original
    note: "출처의 Proposition 5.2 는 유한차원 공간 V 의 일차독립인 계가 dim V 개보다 많은 벡터를 가질 수 없다고 하고, Proposition 5.3 은 생성계가 적어도 dim V 개의 벡터를 가져야 한다고 한다. 출처는 둘 다 동형사상 A : V → ℝⁿ 으로 옮긴 뒤 ℝⁿ 에 관한 Proposition 3.2, 3.5(사다리꼴의 피벗을 센다)를 쓴다. 이 항목은 (1)을 교환 보조정리로, (2)를 생성하는 열에서 기저를 뽑는 정리와 기저의 길이로 증명한다. 출처의 연습문제 5.2(dim V = n 이면 길이 n 인 계가 일차독립인 것은 정확히 V 를 생성할 때)와 5.3(일차독립인 계가 기저인 것은 정확히 벡터의 수가 dim V 일 때)은 증명 없이 연습문제로 나온다. 이 항목의 (3), (4)가 그 내용이고 증명은 이 사이트가 썼다. 출처는 서문(p.iv)에서 이 책이 유한차원 공간만 다룬다고 적고, 무한차원 공간의 예를 들지 않는다(검색한 범위). (5)와 그 증명은 이 사이트가 덧붙였다. 예시와 반례는 새로 만들었다. 첫째 확인 질문(기저 u, v 에서 u, u + v 가 기저인가)은 출처의 연습문제 5.5(p.56, 기저 u, v, w 에서 u + v + w, v + w, w 가 기저임을 보이라)와 같은 꼴의 물음이고, 둘째 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $\dim V = d$라 하자. $m \ge 0$은 정수이다.

1. $w_1, \dots, w_m$이 $V$의 [[linear-independence|일차독립]]인 벡터의 열이면 $m \le d$이다.
2. $v_1, \dots, v_m$이 $V$를 [[linear-combination-and-span|생성]]하는 벡터의 열이면 $m \ge d$이다.
3. 길이 $d$인 $V$의 일차독립인 벡터의 열은 $V$의 [[basis|기저]]이다.
4. 길이 $d$이고 $V$를 생성하는 벡터의 열은 $V$의 기저이다.

또 다음이 성립한다.

5. $\mathbb{N}$에서 $\mathbb{R}$로의 함수 전체의 벡터공간 $\mathbb{R}^{\mathbb{N}}$([[real-function-space]]의 (1))은 무한차원이다. 증명에서 쓰는 벡터는 다음과 같다. 자연수 $k$마다, $x \in \mathbb{N}$에서의 값이 $x = k$이면 $1$, $x \ne k$이면 $0$인 함수 $\varepsilon_k \in \mathbb{R}^{\mathbb{N}}$이 [[real-function-space|(G)]]에 의해 있다. 모든 자연수 $N$에 대하여 열 $\varepsilon_1, \dots, \varepsilon_N$은 일차독립이다.
:::

:::english
Let $V$ be a finite-dimensional vector space with $\dim V = d$, and let $m \ge 0$ be an integer.

1. If $w_1, \dots, w_m$ is a linearly independent sequence of vectors of $V$, then $m \le d$.
2. If $v_1, \dots, v_m$ is a sequence of vectors that spans $V$, then $m \ge d$.
3. A linearly independent sequence of vectors of $V$ of length $d$ is a basis of $V$.
4. A sequence of vectors of length $d$ that spans $V$ is a basis of $V$.

Moreover, the following holds.

5. The vector space $\mathbb{R}^{\mathbb{N}}$ of all functions from $\mathbb{N}$ to $\mathbb{R}$ is infinite-dimensional. The vectors used in the proof are as follows. For each natural number $k$, by (G) there is a function $\varepsilon_k \in \mathbb{R}^{\mathbb{N}}$ whose value at $x \in \mathbb{N}$ is $1$ if $x = k$ and $0$ if $x \ne k$. For every natural number $N$, the sequence $\varepsilon_1, \dots, \varepsilon_N$ is linearly independent.
:::

## 직관

차원이 $d$인 공간을 크기가 정해진 상자에 빗대 봅시다. 서로 겹치지 않는 물건(일차독립인 열)은 $d$개보다 많이 들어가지 않고(1), 상자를 빈틈없이 채우려면(생성하려면) 물건이 $d$개는 있어야 합니다(2). 개수가 꼭 $d$이면 "겹치지 않는다"와 "빈틈이 없다" 가운데 하나만 확인하면 다른 하나는 저절로 따라옵니다(3, 4). 비유와 다른 점은, 벡터의 열은 물건처럼 부피를 갖지 않고, "겹친다"는 한 항이 나머지의 일차결합이라는 뜻이라는 것입니다.

(3)과 (4)는 계산을 줄여 줍니다. 길이가 $\dim V$인 열이 기저인지 보려면 일차독립인지, 생성하는지 둘 중 하나만 따지면 됩니다. 길이가 $\dim V$가 아니면 (1)이나 (2)에 의해 기저일 수 없습니다.

(5)는 무한차원인 벡터공간이 실제로 있다는 것을 보입니다. $\mathbb{R}^{\mathbb{N}}$에는 얼마든지 긴 일차독립인 열이 있으므로, 어떤 수 $d$도 (1)의 한계가 될 수 없습니다.

## 증명

:::idea
(1)은 길이 $d$인 기저에 [[exchange-lemma|교환 보조정리]]를 쓴다. (2)는 생성하는 열에서 항을 지워 기저를 얻고, 기저의 길이가 $d$라는 것을 쓴다. (3)은 생성하지 않으면 한 항을 덧붙여 길이 $d + 1$인 일차독립인 열이 생긴다는 데서, (4)는 (2)에서 지운 항이 $0$개라는 데서 나온다.
:::

:::hint
(2)에서, 항을 $k$개 지워 얻는 열의 길이는 $m - k$입니다([[spanning-list-contains-basis|생성하는 열은 기저를 품는다]]의 진술). 이 열이 기저이면 길이가 무엇이어야 합니까?
:::

:::hint
(5)에서 $\alpha_1 \varepsilon_1 + \cdots + \alpha_N \varepsilon_N$은 함수입니다. 이 함수의 $k$에서의 값을 [[standard-basis|표준기저]]의 (1)로 계산해 보세요.
:::

:::proof
정수의 순서는 [[well-ordering-principle|(Z5)–(Z7)]]과 (L1)–(L3)으로 다룬다. [[dimension|차원]]의 (2)에 의해 $V$에는 길이 $d$인 기저 $b_1, \dots, b_d$가 있고, $V$의 모든 기저의 길이는 $d$이다. [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 $b$는 일차독립이고 $V$를 생성한다.

**(1)** 모든 $j \in \{1, \dots, m\}$에서 $w_j \in V = \operatorname{span}(b_1, \dots, b_d)$이다. [[exchange-lemma|교환 보조정리]]를 $p = d$, 일차독립인 열 $b$와 일차독립인 열 $w$에 쓰면 $m \le d$이다.

**(2)** $v$가 $V$를 생성하므로 [[spanning-list-contains-basis|생성하는 열은 기저를 품는다]]에 의해 정수 $k$ ($0 \le k \le m$)와 $v$에서 항을 $k$개 지워 얻는 열 $u$가 있어 $u$가 $V$의 기저이다. 그 항목의 진술에 의해 $u$의 길이는 $m - k$이고, $V$의 모든 기저의 길이가 $d$이므로 $m - k = d$이다. $0 \le k$의 양변에 $m - k$를 더하면 (Z7)에 의해 $m - k \le m$, 곧 $d \le m$이다.

**(3)** $w_1, \dots, w_d$가 일차독립이라 하자. $w$가 $V$를 생성하지 않는다고 가정하면 [[independent-list-extension|일차독립인 열에 덧붙이기]]의 (2)에 의해 덧붙인 열 $w_1, \dots, w_d, x$가 일차독립인 $x \in V$가 있다. 이 열의 길이는 $d + 1$이므로 (1)에 의해 $d + 1 \le d$이다. 그러나 (L3)에 의해 $d < d + 1$이고, (L1)에 의해 이 둘은 함께 성립하지 않는다. 이 모순에서([[proof-by-contradiction|귀류법]]) $w$는 $V$를 생성한다. $w$는 일차독립이고 생성하므로 기저의 동치 조건에 의해 기저이다.

**(4)** $v_1, \dots, v_d$가 $V$를 생성한다고 하자. (2)의 증명을 $m = d$로 따르면, 정수 $k$ ($0 \le k \le d$)와 $v$에서 항을 $k$개 지워 얻는 기저 $u$가 있고 $d - k = d$이다. 양변에서 $d$를 빼고 $k$를 더하면 (Z7)에 의해 $k = 0$이다. 항을 $0$개 지워 얻는 열은 정의에 의해 $v$ 자신이므로 $u = v$이고, $v$는 $V$의 기저이다.

**(5)** 먼저 $N$이 자연수일 때 $\varepsilon_1, \dots, \varepsilon_N$이 일차독립임을 보인다. ($i \in \{1, \dots, N\}$마다 $\varepsilon_i$가 하나씩 정해지므로 (G)에 의해 이 열이 있다.) $\alpha_1, \dots, \alpha_N$이 실수의 열이고 $f = \alpha_1 \varepsilon_1 + \cdots + \alpha_N \varepsilon_N$이 $\mathbb{R}^{\mathbb{N}}$의 영벡터, 곧 모든 값이 $0$인 함수 $o$라 하자. $k \in \{1, \dots, N\}$을 잡는다. $f$는 $i$번째 항이 $\alpha_i \varepsilon_i$인 열의 합이므로 [[standard-basis|표준기저]]의 (1)($X = \mathbb{N}$)과 스칼라배의 정의 $(\alpha g)(x) = \alpha g(x)$([[real-function-space]])에 의해
$$f(k) = (\alpha_1 \varepsilon_1)(k) + \cdots + (\alpha_N \varepsilon_N)(k)$$
이고, 오른쪽은 $i$번째 항이 $a_i = \alpha_i \varepsilon_i(k)$인 실수의 열의 합이다. $i \ne k$이면 $\varepsilon_i(k) = 0$이므로 [[real-number-arithmetic|(K9)]]에 의해 $a_i = 0$이고, $a_k = \alpha_k \cdot 1 = \alpha_k$이다((K4)). 실수 $0$은 벡터공간 $\mathbb{R}$의 영벡터이므로([[finite-sum-of-vectors]]의 "실수의 합") [[finite-sum-of-vectors|(H7)]]($N = (N - 1) + 1$)에 의해 $f(k) = a_k = \alpha_k$이다. 한편 $f = o$이므로 [[function|함수의 같음]]에 의해 $f(k) = o(k) = 0$이다. 따라서 $\alpha_k = 0$이고, $k$가 임의이므로 열은 일차독립이다.

이제 $\mathbb{R}^{\mathbb{N}}$이 유한차원이라고 가정하고 $\dim \mathbb{R}^{\mathbb{N}} = d'$이라 하자. $d' \ge 0$이고 (Z7)에 의해 $d' + 1 \ge 1$이므로 $d' + 1$은 자연수이고, 앞 문단에 의해 길이 $d' + 1$인 일차독립인 열 $\varepsilon_1, \dots, \varepsilon_{d'+1}$이 있다. (1)을 $\mathbb{R}^{\mathbb{N}}$에 쓰면 $d' + 1 \le d'$인데, (L3)과 (L1)에 의해 이것은 거짓이다. 따라서 귀류법에 의해 $\mathbb{R}^{\mathbb{N}}$은 유한차원이 아니다. 곧 무한차원이다.
:::

## 예시와 반례

:::example[하나만 확인하면 되는 경우]
$\mathbb{R}^2$에서 열 $(2, 1), (1, 1)$을 봅시다. $\alpha(2, 1) + \beta(1, 1) = (2\alpha + \beta, \alpha + \beta)$가 $(0, 0)$이면 두 값을 빼서 $\alpha = 0$, 그러면 $\beta = 0$이므로 일차독립입니다. [[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^2 = 2$이고 이 열의 길이가 $2$이므로, (3)에 의해 생성하는지 따로 확인하지 않아도 기저입니다.
:::

:::example[짧은 열은 생성하지 못한다]
$\dim \mathbb{R}^3 = 3$이므로 (2)에 의해 길이 $2$인 열, 예컨대 $(1, 2, 3), (0, 1, 1)$은 $\mathbb{R}^3$을 생성하지 못합니다. 어떤 벡터가 빠지는지 계산하지 않고도 알 수 있습니다.
:::

:::counterexample[길이가 dim V 가 아니면 (3)은 깨진다]
$\mathbb{R}^2$에서 $(1, 0)$ 하나로 된 열은 $(1, 0) \ne (0, 0)$이므로 [[linear-independence|(I4)]]에 의해 일차독립이지만 기저가 아닙니다. $(0, 1)$이 $\alpha(1, 0) = (\alpha, 0)$ 꼴이 아니기 때문입니다(둘째 값에서 $1 = 0$이 되어 (K4)에 어긋납니다). 길이가 $1$이고 $\dim \mathbb{R}^2 = 2$와 다르므로 (3)의 가정이 깨진 경우입니다.
:::

:::counterexample[길이가 맞아도 조건이 하나는 있어야 한다]
$\mathbb{R}^2$의 열 $(1, 2), (2, 4)$는 길이가 $2 = \dim \mathbb{R}^2$이지만 $2(1, 2) + (-1)(2, 4) = (0, 0)$이므로 일차종속이고, (4)에 의해 생성하지도 않습니다(생성한다면 기저이고 일차독립이어야 합니다). 길이만으로는 기저인지 정해지지 않습니다.
:::

## 확인 질문

:::check[$u$, $v$가 $V$의 기저이다. 열 $u$, $u + v$도 $V$의 기저인가?]
그렇습니다. $\alpha u + \beta(u + v) = 0_V$라 하면(길이 $2$인 일차결합은 [[finite-sum-of-vectors|(H0)]]에 의해 두 벡터의 합입니다) (V7), (V2), (V8)에 의해 $(\alpha + \beta)u + \beta v = 0_V$이고, $u$, $v$가 일차독립이므로 $\alpha + \beta = 0$, $\beta = 0$, 따라서 $\alpha = 0$입니다. 곧 $u$, $u + v$는 일차독립입니다. $V$에 길이 $2$인 기저 $u$, $v$가 있으므로 [[dimension|차원]]의 (2)에 의해 $\dim V = 2$이고, (3)에 의해 기저입니다. 생성하는지는 따로 보이지 않아도 됩니다.
:::

:::check[$\mathbb{R}^{\mathbb{N}}$에서 $\varepsilon_3$은 $\operatorname{span}(\varepsilon_1, \varepsilon_2)$에 속하는가?]
속하지 않습니다. 증명의 계산과 같이 $\alpha \varepsilon_1 + \beta \varepsilon_2$의 $3$에서의 값은 $\alpha \cdot 0 + \beta \cdot 0 = 0$인데 $\varepsilon_3(3) = 1$이고 $0 \ne 1$이기 때문입니다.
:::
