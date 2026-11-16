---
title: 기저
title_en: Basis
aliases: [기저, 좌표, 기저에 관한 좌표, basis, bases, coordinates, coordinates with respect to a basis]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터의 열이 벡터공간 V 의 기저인 것은 V 의 모든 벡터가 이 열의 일차결합으로 계수의 열이 하나뿐인 방식으로 표현될 때이다. 이 계수의 열이 좌표이고, 빈 열이 기저인 것은 정확히 V = {0_V} 일 때이며, 합과 스칼라배의 좌표는 좌표의 항별 합과 스칼라배이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-combination-and-span]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Definition 2.1, p.6
    checked: original
    note: "출처는 Definition 2.1(p.6)에서 V 의 모든 벡터가 일차결합으로 '유일하게' 표현될 때 벡터의 계(system)를 기저라 하고 그 계수를 좌표(coordinates)라 부른다. 이 항목은 같은 정의를 벡터의 열에 대해 쓰고, 계수의 열이 하나뿐이라는 것을 '길이 n 인 실수의 열이 정확히 하나'로 풀어 쓴다. 출처는 길이 0 인 계를 기저로 정의하지 않는다. 이 항목은 빈 열을 허용하고 그것이 기저인 것은 정확히 V = {0_V} 일 때임을 (Q1)로 증명한다. 출처의 Remark 2.4(p.7)는 기저가 있으면 벡터가 좌표로 정해지므로 좌표를 열로 쌓아 F^n 의 원소처럼 다룰 수 있다고 하고, v = Σα_k v_k, w = Σβ_k v_k 이면 v + w 의 좌표는 좌표의 합이고 αv 의 좌표는 좌표에 α 를 곱한 것이라고 적는다(합의 계산은 증명하지 않는다). 이 항목의 (Q2)는 그 내용을 finite-sum-of-vectors 의 (C1), (C2)와 좌표의 유일성으로 증명한 것이다. 출처는 기저가 일차독립이고 생성하는 계라는 것과 그 역을 Proposition 2.7(p.9)에서 말하는데, 이 항목은 그것을 증명하거나 쓰지 않는다. (Q1)과 증명, 예시와 반례와 확인 질문은 이 사이트가 썼다. 출처가 기저의 첫 예로 드는 표준기저(Example 2.2, p.6)는 이 항목에서 다루지 않는다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 겹치는 번호, 뒤 정리가 인용할 계수 끼워 넣기와 차의 규칙, 재귀 정의의 문구, 직관의 틀린 일반화를 보완했다."
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 [[finite-sum-of-vectors|벡터의 열]]이라 하자. 이 열이 $V$의 **기저**(basis)인 것은 정확히 다음이 성립할 때이다. 모든 $x \in V$에 대하여
$$x = \alpha_1 v_1 + \cdots + \alpha_n v_n$$
인 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 하나 있고 하나뿐이다. 곧 다음 두 조건이 모두 성립한다.

- (존재) 모든 $x \in V$가 이 열의 [[linear-combination-and-span|일차결합]]이다. 곧 열이 $V$를 [[linear-combination-and-span|생성한다]].
- (유일성) 길이 $n$인 두 실수의 열 $\alpha_1, \dots, \alpha_n$과 $\beta_1, \dots, \beta_n$에 대하여 $\alpha_1 v_1 + \cdots + \alpha_n v_n = \beta_1 v_1 + \cdots + \beta_n v_n$이면 모든 $k$에서 $\alpha_k = \beta_k$이다.

열이 기저일 때 $x \in V$를 표현하는 유일한 계수의 열 $\alpha_1, \dots, \alpha_n$을 이 기저에 관한 $x$의 **좌표**(coordinates)라 한다. 열이 기저이므로 $x$마다 좌표가 있고 하나로 정해진다.

(Q1) 빈 열($n = 0$)이 $V$의 기저인 것은 정확히 $V = \{0_V\}$일 때이다. 특히 원소가 영벡터 하나뿐인 벡터공간 $V$에서 빈 열은 기저이다.

(Q2) 열 $v_1, \dots, v_n$이 $V$의 기저이고 $x$, $y \in V$의 좌표가 각각 $\alpha_1, \dots, \alpha_n$과 $\beta_1, \dots, \beta_n$이면, $x + y$의 좌표는 $\alpha_1 + \beta_1, \dots, \alpha_n + \beta_n$이고 실수 $\gamma$에 대하여 $\gamma x$의 좌표는 $\gamma\alpha_1, \dots, \gamma\alpha_n$이다.
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 0$. The sequence is a **basis** of $V$ exactly when the following holds: for every $x \in V$ there is exactly one sequence of real numbers $\alpha_1, \dots, \alpha_n$ of length $n$ such that
$$x = \alpha_1 v_1 + \cdots + \alpha_n v_n.$$
That is, both of the following hold.

- (Existence) Every $x \in V$ is a linear combination of this sequence. That is, the sequence spans $V$.
- (Uniqueness) For two sequences of real numbers $\alpha_1, \dots, \alpha_n$ and $\beta_1, \dots, \beta_n$ of length $n$, if $\alpha_1 v_1 + \cdots + \alpha_n v_n = \beta_1 v_1 + \cdots + \beta_n v_n$, then $\alpha_k = \beta_k$ for every $k$.

When the sequence is a basis, the unique sequence of coefficients $\alpha_1, \dots, \alpha_n$ representing $x \in V$ is called the **coordinates** of $x$ with respect to this basis. Since the sequence is a basis, each $x$ has coordinates and they are uniquely determined.

(Q1) The empty sequence ($n = 0$) is a basis of $V$ exactly when $V = \{0_V\}$. In particular, in a vector space $V$ whose only element is the zero vector, the empty sequence is a basis.

(Q2) Let $v_1, \dots, v_n$ be a basis of $V$, and let $x, y \in V$ have coordinates $\alpha_1, \dots, \alpha_n$ and $\beta_1, \dots, \beta_n$ respectively. Then the coordinates of $x + y$ are $\alpha_1 + \beta_1, \dots, \alpha_n + \beta_n$, and for every real number $\gamma$ the coordinates of $\gamma x$ are $\gamma\alpha_1, \dots, \gamma\alpha_n$.
:::

## 직관

도시에서 모든 장소에 주소가 하나씩 있다면, 주소는 장소를 정확히 가리킵니다. 기저는 벡터공간의 "주소 체계"입니다. 벡터 $v_1, \dots, v_n$이 기준점이고, 벡터 $x$의 주소가 계수의 열 $\alpha_1, \dots, \alpha_n$(좌표)입니다. 존재는 모든 장소에 주소가 적어도 하나 있다는 것이고, 유일성은 한 장소에 주소가 둘 이상 있지 않다는 것입니다. 한쪽만 성립하는 열은 기저가 아닙니다. 아래 반례에서 두 경우를 하나씩 봅니다.

이 비유가 맞는 곳은 좌표가 벡터를 완전히 정한다는 점입니다. $x$의 좌표를 알면 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$으로 $x$를 되찾고, 거꾸로 $x$에서 좌표가 하나로 나옵니다. 틀리는 곳은 주소가 장소의 이름이 아니라 열 $v_1, \dots, v_n$을 골라야 의미가 있다는 점입니다. 같은 벡터의 좌표는 기저를 바꾸면 달라질 수 있습니다. 예를 들어 $(1, 1) = 1(1, 0) + 1(0, 1)$이지만, 아래 예시의 기저 $(1, 0), (1, 1)$에 관한 $(1, 1)$의 좌표는 $(0, 1)$입니다.

존재는 [[linear-combination-and-span|생성]]의 조건입니다. 유일성은 같은 벡터를 표현하는 계수의 열이 둘이면 같다는 것입니다. 기저인 것이 정확히 "일차독립이고 $V$를 생성한다"와 같다는 사실은 [[basis-iff-independent-and-spanning|기저의 동치 조건]]에서 증명합니다.

(Q1)은 빈 열이 예외 없이 쓰인다는 것을 확인합니다. 영벡터만 있는 공간에서는 아무 벡터도 쓰지 않고 영벡터를 만들 수 있고(빈 합이 $0_V$), 그 방법이 하나뿐이므로 빈 열이 기저입니다.

## 성질의 증명

:::remark[(Q1)의 증명]
길이 $0$인 실수의 열은 빈 열 하나뿐이고, 빈 열 $v$와 이 실수의 열에 대한 일차결합은 [[finite-sum-of-vectors|정의]]에 의해 $0_V$이다. ($\Rightarrow$) 빈 열이 $V$의 기저라 하자. $x \in V$를 잡는다. (존재)에 의해 $x$는 일차결합이고, 가능한 일차결합은 $0_V$뿐이므로 $x = 0_V$이다. 따라서 $V \subseteq \{0_V\}$이고, $0_V \in V$이므로 $V = \{0_V\}$이다. ($\Leftarrow$) $V = \{0_V\}$라 하자. 유일한 벡터 $x = 0_V$는 빈 실수의 열에 대한 일차결합 $0_V$이므로 (존재)가 성립한다. 길이 $0$인 실수의 열은 하나뿐이므로 두 열 $\alpha$, $\beta$는 같은 열이고 모든 $k$에서 $\alpha_k = \beta_k$가 공허하게 참이다. 따라서 (유일성)도 성립하고 빈 열은 기저이다.
:::

:::remark[(Q2)의 증명]
$x$의 좌표가 $\alpha$, $y$의 좌표가 $\beta$이면 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이고 $y = \beta_1 v_1 + \cdots + \beta_n v_n$이다. [[finite-sum-of-vectors|(C1)]]에 의해 $x + y = (\alpha_1 + \beta_1) v_1 + \cdots + (\alpha_n + \beta_n) v_n$이므로, $i$번째 값이 $\alpha_i + \beta_i$인 실수의 열이 $x + y$를 표현한다. 기저에서 $x + y$의 표현은 하나뿐이므로 이 열이 $x + y$의 좌표이다. 같은 방식으로 (C2)에 의해 $\gamma x = (\gamma\alpha_1) v_1 + \cdots + (\gamma\alpha_n) v_n$이므로 $\gamma x$의 좌표는 $\gamma\alpha_1, \dots, \gamma\alpha_n$이다.
:::

## 예시와 반례

:::example[ℝ²의 한 기저와 좌표]
$\mathbb{R}^2$([[real-function-space]]의 성분별 연산)에서 열 $v_1 = (1, 0)$, $v_2 = (1, 1)$이 기저임을 계산으로 확인합니다. 계수의 열 $(\alpha, \beta)$에 대하여 $\alpha v_1 + \beta v_2 = (\alpha, 0) + (\beta, \beta) = (\alpha + \beta, \beta)$입니다([[finite-sum-of-vectors|(H0)]], (K4), [[real-number-arithmetic|(K9)]]).

(존재) $x = (a, b)$가 주어지면 $\alpha = a - b$, $\beta = b$로 두어 $(\alpha + \beta, \beta) = ((a - b) + b, b) = (a, b)$입니다. 첫째 값은 $(a + (-b)) + b = a + ((-b) + b) = a + 0 = a$이기 때문입니다((K2), (K1), (K5), (K4)).

(유일성) $\alpha v_1 + \beta v_2 = (a, b)$이면 성분별 같음에서 $\beta = b$이고 $\alpha + \beta = a$입니다. 둘째 식의 양변에 $-\beta$를 더하면 $\alpha = \alpha + (\beta + (-\beta)) = (\alpha + \beta) + (-\beta) = a + (-b) = a - b$입니다. 따라서 $(a, b)$를 표현하는 계수의 열은 모두 $(a - b, b)$이므로 같은 벡터의 두 표현은 계수의 열이 같고, $(a, b)$의 좌표는 $(a - b,\ b)$로 하나뿐입니다.

예를 들어 $(5, -2)$의 좌표는 $(7, -2)$이고 실제로 $7(1, 0) + (-2)(1, 1) = (7, 0) + (-2, -2) = (5, -2)$입니다.
:::

:::example[영벡터만 있는 공간의 빈 기저]
$X = \emptyset$이면 [[real-function-space]]의 $\mathbb{R}^X$는 빈 함수 하나만을 원소로 갖는 벡터공간입니다. 그 원소가 영벡터이므로 (Q1)에 의해 빈 열이 이 공간의 기저입니다.
:::

:::counterexample[존재 또는 유일성이 깨지는 열]
$\mathbb{R}^2$의 길이 $1$인 열 $v_1 = (1, 0)$은 $\alpha v_1 = (\alpha, 0)$ 꼴만 표현하므로, $(0, 1)$의 둘째 값 $1$이 $0$과 다르다는 이유로 $(0, 1)$을 표현하지 못합니다. (존재)가 깨지므로 기저가 아닙니다.

반대로 길이 $3$인 열 $v_1 = (1, 0)$, $v_2 = (0, 1)$, $v_3 = (1, 1)$에서는 $(1, 1)$이 두 가지 이상으로 표현됩니다. $1 v_1 + 1 v_2 + 0 v_3 = ((1, 0) + (0, 1)) + (0, 0) = (1, 1)$이고 $0 v_1 + 0 v_2 + 1 v_3 = ((0, 0) + (0, 0)) + (1, 1) = (1, 1)$입니다. 계수의 열 $(1, 1, 0)$과 $(0, 0, 1)$은 다르므로 (유일성)이 깨지고 기저가 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(1, 1), (1, -1)$이 기저라고 할 때 $(3, 1)$의 좌표는 무엇인가? (이 열이 기저인지는 묻지 않는다.)]
$\alpha(1, 1) + \beta(1, -1) = (\alpha + \beta, \alpha - \beta) = (3, 1)$에서 $\alpha + \beta = 3$, $\alpha - \beta = 1$입니다. 두 식을 더하면 $2\alpha = 4$이고 $2 \ne 0$이므로 $\alpha = 2$, 그러면 $\beta = 1$입니다. 좌표는 $(2, 1)$이고 확인하면 $2(1, 1) + 1(1, -1) = (2, 2) + (1, -1) = (3, 1)$입니다.
:::

:::check[$\mathbb{R}^2$에서 빈 열은 기저인가?]
아닙니다. (Q1)에 의해 빈 열이 기저일 필요충분조건은 $\mathbb{R}^2 = \{(0, 0)\}$인데, $(1, 0) \ne (0, 0)$이므로 $\mathbb{R}^2$의 원소가 영벡터 하나뿐이 아닙니다. 구체적으로 빈 열의 일차결합은 $(0, 0)$뿐이어서 $(1, 0)$을 표현하지 못합니다.
:::
