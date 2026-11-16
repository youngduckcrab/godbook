---
title: 기저의 길이는 모두 같다
title_en: All Bases Have the Same Length
aliases: [기저의 원소 개수, 기저의 크기, invariance of basis length, any two bases have the same number of vectors]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간 V 의 두 기저 v₁, …, vₙ 과 w₁, …, wₘ 의 길이는 같다(m = n). 교환 보조정리를 두 방향으로 쓴다.
requires: [vector-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, exchange-lemma, standard-basis, well-ordering-principle]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 3.1절, Proposition 3.3, p.49; 서문, p.iv–v
    checked: original
    note: "출처의 Proposition 3.3 은 벡터공간의 두 기저가 같은 수의 벡터를 갖는다고 한다. 출처의 증명은 n ≤ m 이라 두고, 첫 기저를 표준기저의 상으로 하는 동형사상 A : Fⁿ → V 로 둘째 기저를 Fⁿ 으로 옮긴 뒤 Proposition 3.2(Fⁿ 의 일차독립인 계는 벡터가 n 개 이하이며, 사다리꼴의 피벗을 세어 증명한다)로 m ≤ n 을 얻는다. 이 항목은 피벗과 동형사상을 쓰지 않고 교환 보조정리를 두 방향으로 써서 증명한다. 서문(p.iv–v)에서 저자는 이 사실을 2장에서 피벗을 세어 증명한다고 적는다. 출처의 증명은 V = {0}(기저의 벡터가 0 개)인 경우를 따로 말하지 않는다. 이 항목은 길이 0 인 빈 열도 기저로 다루며 그 경우도 같은 증명에 들어 있다. 예시와 반례와 확인 질문은 새로 만들었다. 두 기저가 서로 다른 예는 출처의 연습문제 5.1 c(p.56, 벡터공간은 기저를 둘 이상 가질 수 없다: 참·거짓)의 답이 되는 예이다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $n \ge 0$, $m \ge 0$이 정수라 하자. 길이 $n$인 벡터의 열 $v_1, \dots, v_n$과 길이 $m$인 벡터의 열 $w_1, \dots, w_m$이 둘 다 $V$의 [[basis|기저]]이면 $m = n$이다.
:::

:::english
Let $V$ be a vector space and let $n \ge 0$ and $m \ge 0$ be integers. If a sequence of vectors $v_1, \dots, v_n$ of length $n$ and a sequence of vectors $w_1, \dots, w_m$ of length $m$ are both bases of $V$, then $m = n$.
:::

## 직관

같은 지역의 지도를 두 사람이 서로 다른 좌표축으로 그렸다고 합시다. 축의 방향과 눈금은 달라도, 한 지점을 나타내는 데 필요한 수의 개수(평면 지도라면 둘)는 같습니다. 기저는 좌표축, 좌표는 지점을 나타내는 수의 열에 해당하고, 이 정리는 "필요한 수의 개수"가 기저를 어떻게 고르든 같다고 말합니다. 비유와 다른 점은, 기저는 기저의 정의만 만족하면 되고 축이 직각이거나 눈금이 같을 필요가 없다는 것입니다.

증명은 [[exchange-lemma|교환 보조정리]]를 두 번 쓰는 것뿐입니다. 한 기저는 일차독립이고, 그 항은 모두 다른 기저의 생성(곧 $V$ 전체)에 속하므로 길이가 다른 기저의 길이 이하입니다. 두 기저의 역할을 바꾸어 한 번 더 쓰면 반대 부등식이 나옵니다.

이 정리 덕분에 "기저의 길이"를 기저를 고르지 않고 $V$만으로 말할 수 있고, 다음 항목의 차원이 이것으로 정의됩니다.

## 증명

:::idea
[[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열]]이므로, 한 기저의 항은 모두 다른 기저의 생성에 속한다. 교환 보조정리를 양쪽으로 쓰면 $m \le n$이고 $n \le m$이다.
:::

:::hint
교환 보조정리의 $b$ 자리에 $v$를, $w$ 자리에 $w$를 넣으려면 무엇을 확인해야 합니까? 그다음 두 열의 자리를 바꿉니다.
:::

:::proof
$v_1, \dots, v_n$과 $w_1, \dots, w_m$이 $V$의 기저라 하자. [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 두 열은 모두 [[linear-independence|일차독립]]이고 $V$를 [[linear-combination-and-span|생성]]한다. 곧 $\operatorname{span}(v_1, \dots, v_n) = V$이고 $\operatorname{span}(w_1, \dots, w_m) = V$이다.

($m \le n$) 모든 $j \in \{1, \dots, m\}$에서 $w_j \in V = \operatorname{span}(v_1, \dots, v_n)$이다. [[exchange-lemma|교환 보조정리]]를 $p = n$, 일차독립인 열 $b = v$와 길이 $m$인 일차독립인 열 $w$에 쓰면 $m \le n$이다.

($n \le m$) 모든 $i \in \{1, \dots, n\}$에서 $v_i \in V = \operatorname{span}(w_1, \dots, w_m)$이다. 교환 보조정리를 $p = m$, 일차독립인 열 $b = w$와 길이 $n$인 일차독립인 열 $v$에 쓰면 $n \le m$이다.

$m \le n$이고 $n \le m$이므로 [[well-ordering-principle|(L2)]]에 의해 $m = n$이다.
:::

## 예시와 반례

:::example[ℝ²의 두 기저]
$\mathbb{R}^2$의 열 $(1, 1), (1, 2)$는 기저입니다. $\alpha(1, 1) + \beta(1, 2) = (\alpha + \beta, \alpha + 2\beta)$이므로, 이것이 $(a, b)$와 같다는 것은 $\alpha + \beta = a$이고 $\alpha + 2\beta = b$라는 것입니다. 둘째 식에서 첫째 식을 빼면 $\beta = b - a$이고, 그러면 $\alpha = a - \beta = 2a - b$입니다. 거꾸로 이 값을 넣으면 $\alpha + \beta = (2a - b) + (b - a) = a$, $\alpha + 2\beta = (2a - b) + (2b - 2a) = b$입니다. 따라서 모든 $(a, b)$에 계수의 열이 하나 있고 하나뿐입니다. 열 $(1, 0), (0, 1)$도 [[standard-basis|표준기저]]이므로 기저입니다. 두 기저는 항이 모두 다르지만, 정리가 말하는 대로 길이는 $2$로 같습니다.
:::

:::example[영벡터 하나뿐인 공간]
$V = \{0_V\}$이면 [[basis|(Q1)]]에 의해 빈 열이 $V$의 기저이므로, 정리에 의해 $V$의 모든 기저의 길이는 $0$입니다. 길이 $0$인 열은 빈 열 하나뿐이므로([[finite-sum-of-vectors]]) $V$의 기저는 빈 열뿐입니다. 예컨대 길이 $1$인 열 $0_V$는 [[linear-independence|(I1)]]에 의해 일차종속이어서 기저가 아니며, 정리와 맞습니다.
:::

:::counterexample[생성하기만 하는 열, 일차독립이기만 한 열]
기저의 두 조건 가운데 하나만 있으면 길이가 같지 않을 수 있습니다. $\mathbb{R}^2$에서 $(1, 0), (0, 1)$과 $(1, 0), (0, 1), (1, 1)$은 둘 다 $\mathbb{R}^2$를 생성하지만(모든 $(a, b)$가 $a(1, 0) + b(0, 1)$이고 $a(1, 0) + b(0, 1) + 0(1, 1)$입니다) 길이가 $2$와 $3$입니다(뒤의 열은 $(1, 1) = 1(1, 0) + 1(0, 1)$이어서 일차종속입니다). 또 $(1, 0)$ 하나로 된 열과 $(1, 0), (0, 1)$은 둘 다 일차독립이지만 길이가 $1$과 $2$입니다(앞의 열은 $(0, 1)$을 생성하지 못합니다).
:::

## 확인 질문

:::check[$V$의 기저 $v_1, v_2, v_3$이 있다. 열 $v_1, v_2, v_3, v_1 + v_2$는 $V$의 기저인가?]
아닙니다. 길이가 $4$인데, 정리에 의해 $V$의 모든 기저의 길이는 $3$이고 $4 \ne 3$입니다. (직접 보면 $1v_1 + 1v_2 + 0v_3 + (-1)(v_1 + v_2) = 0_V$이므로 일차종속입니다.)
:::

:::check[$V$에 빈 열이 아닌 기저가 있다. 빈 열은 $V$의 기저일 수 있는가?]
없습니다. 빈 열이 기저라면 정리에 의해 다른 기저의 길이도 $0$이어야 하고, 길이 $0$인 열은 빈 열뿐이므로 처음 기저가 빈 열이 아니라는 데 어긋납니다.
:::
