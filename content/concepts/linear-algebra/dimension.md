---
title: 유한차원과 차원
title_en: Finite-Dimensional Spaces and Dimension
aliases: [차원, 유한차원, 무한차원, 유한차원 벡터공간, dimension, finite-dimensional, infinite-dimensional, dim]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간이 유한차원인 것은 그 공간을 생성하는 벡터의 열이 있을 때이고, 이는 기저가 있는 것과 같다. 유한차원 공간의 기저의 길이를 차원 dim V 라 하며, dim V = 0 은 V = {0_V} 와 같고 dim ℝⁿ = n, dim ℝ = 1 이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-set, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, spanning-list-contains-basis, standard-basis, bases-have-equal-length, well-ordering-principle, prime-number]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 5절, Definition(차원)과 Proposition 5.1, p.54; 2장 3.1절, Proposition 3.4, p.49
    checked: original
    note: "출처는 벡터공간 V 의 차원 dim V 를 기저의 벡터 수로 정의하고, 영벡터만으로 된 공간은 dim V = 0 으로, (유한한) 기저가 없으면 dim V = ∞ 로 둔 뒤, dim V 가 유한하면 유한차원, 아니면 무한차원이라 부른다(p.54). 차원이 기저의 선택에 따르지 않는다는 것은 Proposition 3.3 이 준다고 적는다. Proposition 5.1(p.54)은 V 가 유한차원인 것은 정확히 유한한 생성계를 가질 때라고 하고, 1장의 Proposition 2.8(생성계는 기저를 포함한다)에서 곧바로 나온다고 적으며 증명 블록은 없다. 이 항목은 유한차원을 Proposition 5.1 의 조건(생성하는 벡터의 열이 있다)으로 정의하고, 기저가 있다는 것과 같음을 두 방향 모두 증명한다. 출처가 따로 정한 dim{0} = 0 은 이 사이트에서는 빈 열이 기저라는 basis 의 (Q1)에서 나온다. 이 사이트는 기호 ∞ 를 쓰지 않고 무한차원 공간에는 차원을 정의하지 않는다. 출처의 Proposition 3.4(p.49)는 Fⁿ 의 모든 기저가 정확히 n 개의 벡터를 갖는다고 하고, Proposition 3.3 에서 바로 나온다고 한 뒤 피벗을 세는 직접 증명을 준다. 이 항목의 (4)는 표준기저와 앞 정리로 증명한다. ℝ 자신이 1 차원이라는 (5)는 출처의 2장 5절에 없다(이 사이트가 덧붙였다). 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $V$가 **유한차원**(finite-dimensional)인 것은 정확히 어떤 정수 $n \ge 0$과 $V$를 [[linear-combination-and-span|생성]]하는 길이 $n$인 [[finite-sum-of-vectors|벡터의 열]] $v_1, \dots, v_n$이 있을 때이다. 유한차원이 아닌 벡터공간을 **무한차원**(infinite-dimensional)이라 한다.

다음이 성립한다.

1. $V$가 유한차원인 것은 정확히 $V$의 [[basis|기저]]가 있을 때이다.
2. $V$가 유한차원이면, $V$의 기저 가운데 길이가 $n$인 것이 있는 정수 $n \ge 0$이 꼭 하나 있다. 이 $n$을 $V$의 **차원**(dimension)이라 하고 $\dim V$로 쓴다. 곧 $\dim V = n$인 것은 정확히 $V$에 길이 $n$인 기저가 있을 때이고, 이때 $V$의 모든 기저의 길이가 $n$이다. 무한차원인 벡터공간의 차원은 정의하지 않는다. "$V$는 $n$차원이다"는 $V$가 유한차원이고 $\dim V = n$이라는 뜻이다.
3. $V = \{0_V\}$이면 $V$는 유한차원이고 $\dim V = 0$이다. 거꾸로 $V$가 유한차원이고 $\dim V = 0$이면 $V = \{0_V\}$이다.
4. 자연수 $n$에 대하여 $\mathbb{R}^n$은 유한차원이고 $\dim \mathbb{R}^n = n$이다.
5. 실수의 합을 덧셈으로, 실수의 곱을 스칼라배로 하는 벡터공간 $\mathbb{R}$([[real-function-space]]의 (2))는 유한차원이고 $\dim \mathbb{R} = 1$이다. 항이 실수 $1$ 하나인 길이 $1$인 열이 $\mathbb{R}$의 기저이다.
:::

:::english
Let $V$ be a vector space. $V$ is called **finite-dimensional** exactly when there are an integer $n \ge 0$ and a sequence of vectors $v_1, \dots, v_n$ of length $n$ that spans $V$. A vector space that is not finite-dimensional is called **infinite-dimensional**.

The following hold.

1. $V$ is finite-dimensional exactly when $V$ has a basis.
2. If $V$ is finite-dimensional, there is exactly one integer $n \ge 0$ such that some basis of $V$ has length $n$. This $n$ is called the **dimension** of $V$ and is written $\dim V$. That is, $\dim V = n$ exactly when $V$ has a basis of length $n$, and in that case every basis of $V$ has length $n$. The dimension of an infinite-dimensional vector space is not defined. "$V$ is $n$-dimensional" means that $V$ is finite-dimensional and $\dim V = n$.
3. If $V = \{0_V\}$, then $V$ is finite-dimensional and $\dim V = 0$. Conversely, if $V$ is finite-dimensional and $\dim V = 0$, then $V = \{0_V\}$.
4. For a natural number $n$, $\mathbb{R}^n$ is finite-dimensional and $\dim \mathbb{R}^n = n$.
5. The vector space $\mathbb{R}$, with the sum of real numbers as addition and the product of real numbers as scalar multiplication, is finite-dimensional and $\dim \mathbb{R} = 1$. The sequence of length $1$ whose only term is the real number $1$ is a basis of $\mathbb{R}$.
:::

## 직관

방 안의 한 점을 정하려면 바닥의 가로, 세로와 높이, 이렇게 수 세 개가 필요합니다. 차원은 "공간의 한 점을 정하는 데 필요한 수의 개수"입니다. 수학적 정의에서 "한 점을 정하는 수"는 기저에 관한 [[basis|좌표]]이고, 좌표는 기저의 길이만큼의 실수입니다. 비유와 다른 점은, 방의 경우 축을 어떻게 잡든 셋이라는 것이 경험으로 그럴듯할 뿐이지만, 벡터공간에서는 기저를 어떻게 고르든 길이가 같다는 것을 [[bases-have-equal-length|앞 정리]]로 증명해야 한다는 것입니다. 이 정리가 있어야 $\dim V$가 하나의 수로 정해집니다.

유한차원의 정의는 기저가 아니라 "생성하는 열이 있다"로 했습니다. 생성하는 열은 쉽게 찾을 수 있고(일차독립인지 따지지 않아도 됩니다), [[spanning-list-contains-basis|생성하는 열에서 기저를 뽑을 수 있으므로]] 두 정의가 같다는 것이 (1)입니다. 영벡터 하나뿐인 공간은 빈 열이 기저이므로 따로 약속하지 않아도 차원이 $0$입니다.

이 항목에는 무한차원인 벡터공간의 예가 없습니다. 무한차원이라는 것은 "어떤 길이의 열도 공간을 생성하지 못한다"는 주장이어서, 한 공간이 무한차원임을 보이려면 따로 논증이 필요합니다.

## 성질의 증명

:::proof
**(1)** $V$가 유한차원이면 정의에 의해 $V$를 생성하는 벡터의 열 $v_1, \dots, v_n$이 있고, [[spanning-list-contains-basis|생성하는 열은 기저를 품는다]]에 의해 $v$에서 항을 몇 개 지워 얻는 열 가운데 $V$의 기저가 있다. 거꾸로 $V$의 기저 $b_1, \dots, b_n$이 있으면 기저의 정의의 (존재) 조건에 의해 이 열은 $V$를 생성하므로 $V$는 유한차원이다.

**(2)** $V$가 유한차원이면 (1)에 의해 기저 $b$가 있고, $b$는 어떤 정수 $n \ge 0$에 대한 길이 $n$인 열이므로 그런 $n$이 적어도 하나 있다. $n$과 $n'$이 둘 다 그런 정수라 하면, 길이 $n$인 기저와 길이 $n'$인 기저가 있으므로 [[bases-have-equal-length|기저의 길이는 모두 같다]]에 의해 $n = n'$이다(두 기저가 같은 열이어도 된다). 따라서 그런 $n$은 꼭 하나이다. $\dim V = n$이고 $c$가 길이 $n'$인 $V$의 기저이면, 같은 정리를 길이 $n$인 기저와 $c$에 쓰면 $n' = n$이므로 모든 기저의 길이가 $n$이다.

**(3)** $V = \{0_V\}$이면 [[basis|(Q1)]]에 의해 빈 열이 $V$의 기저이다. (1)에 의해 $V$는 유한차원이고, 빈 열의 길이가 $0$이므로 (2)에 의해 $\dim V = 0$이다. 거꾸로 $V$가 유한차원이고 $\dim V = 0$이면 (2)에 의해 길이 $0$인 $V$의 기저가 있다. 길이 $0$인 열은 빈 열 하나뿐이므로([[finite-sum-of-vectors]]의 진술) 빈 열이 $V$의 기저이고, (Q1)에 의해 $V = \{0_V\}$이다.

**(4)** $n$이 자연수이면 [[standard-basis|표준기저]]의 (2)에 의해 길이 $n$인 열 $e_1, \dots, e_n$이 $\mathbb{R}^n$의 기저이다. (1)에 의해 $\mathbb{R}^n$은 유한차원이고 (2)에 의해 $\dim \mathbb{R}^n = n$이다.

**(5)** 항이 실수 $1$인 길이 $1$인 열을 $\iota$라 하자. 벡터공간 $\mathbb{R}$에서 실수 $\alpha$와 벡터 $1$의 스칼라배는 실수의 곱 $\alpha \cdot 1$이고, [[finite-sum-of-vectors|(H0)]]에 의해 길이 $1$인 열의 합은 그 항이므로, 계수 $\alpha$에 대한 $\iota$의 일차결합은 $\alpha \cdot 1$이며 [[real-number-arithmetic|(K4)]]에 의해 $\alpha$와 같다. 따라서 모든 실수 $a$는 계수 $a$에 대한 일차결합이다. 또 길이 $1$인 두 계수의 열 $\alpha$, $\beta$에 대하여 두 일차결합이 같으면 $\alpha = \alpha \cdot 1 = \beta \cdot 1 = \beta$이다. 곧 모든 $a \in \mathbb{R}$에 대하여 $a$를 나타내는 계수의 열이 하나 있고 하나뿐이므로, 기저의 정의에 의해 $\iota$는 $\mathbb{R}$의 기저이다. (1)과 (2)에 의해 $\mathbb{R}$은 유한차원이고 $\dim \mathbb{R} = 1$이다.
:::

## 예시와 반례

:::example[함수가 하나뿐인 공간]
$X = \emptyset$이면 $\mathbb{R}^X$의 원소는 빈 함수 $o$ 하나뿐이고([[real-function-space]]), 그 항목의 (1)에 의해 이 함수가 영벡터입니다. 영벡터는 하나뿐이므로([[vector-space-basic-properties|(B1)]]) $V = \mathbb{R}^{\emptyset}$에서 $0_V = o$이고 $V = \{0_V\}$입니다. 따라서 (3)에 의해 $\mathbb{R}^{\emptyset}$은 유한차원이며 $\dim \mathbb{R}^{\emptyset} = 0$입니다.
:::

:::example[ℝ과 ℝ¹]
$\mathbb{R}^1$은 $\{1\}$에서 $\mathbb{R}$로의 함수의 공간이고, $\mathbb{R}$은 실수 자체를 벡터로 보는 공간입니다. 이 강의는 둘을 구별해 씁니다. (4)에 의해 $\dim \mathbb{R}^1 = 1$이고 (5)에 의해 $\dim \mathbb{R} = 1$이어서 둘 다 $1$차원입니다. $\mathbb{R}^1$의 기저로는 $1$에서의 값이 $1$인 함수 $e_1$ 하나로 된 열이 있습니다.
:::

:::counterexample[길이가 차원과 같아도 기저가 아닐 수 있다]
$\dim \mathbb{R}^2 = 2$이지만 길이 $2$인 열 $(1, 2), (2, 4)$는 $\mathbb{R}^2$의 기저가 아닙니다. $2(1, 2) + (-1)(2, 4) = (2 - 2, 4 - 4) = (0, 0)$이고 계수 $2$가 $0$이 아니므로 [[linear-independence|일차종속]]이며, [[basis-iff-independent-and-spanning|기저는 일차독립]]이어야 하기 때문입니다. (2)는 기저의 길이가 차원이라고 할 뿐, 길이가 차원인 열이 기저라고 하지 않습니다.
:::

:::counterexample[차원은 원소의 개수가 아니다]
$V = \{0_V\}$는 [[finite-set|원소를 1개 갖는]] 집합입니다(함수 $\{(1, 0_V)\}$가 $\{1\}$에서 $V$로의 전단사입니다). 그러나 (3)에 의해 $\dim V = 0$입니다. 차원은 기저의 길이이고, 공간의 원소를 세는 수가 아닙니다.
:::

## 확인 질문

:::check[$V$가 유한차원이고 $0_V$가 아닌 벡터 $x \in V$가 있다. $\dim V \ge 1$인가?]
그렇습니다. $x \ne 0_V$이므로 $V \ne \{0_V\}$이고, (3)의 뒷부분에 의해 $\dim V = 0$일 수 없습니다. $\dim V$는 $0$ 이상의 정수이므로 [[well-ordering-principle|(Z5)]]와 [[prime-number|(Z1)]]에 의해 $\dim V \le 0$이거나 $\dim V \ge 1$인데, $\dim V \le 0$이면 $0 \le \dim V$와 함께 (L2)에 의해 $\dim V = 0$이 되므로 $\dim V \ge 1$입니다.
:::

:::check[실수 $c$에 대하여, 항이 $c$ 하나인 길이 $1$인 열이 벡터공간 $\mathbb{R}$의 기저인 것은 언제인가?]
정확히 $c \ne 0$일 때입니다. $c = 0$이면 이 열은 영벡터를 항으로 가지므로 [[linear-independence|(I1)]]에 의해 일차종속이고, 기저는 일차독립이어야 하므로 기저가 아닙니다. $c \ne 0$이면 모든 실수 $a$에 대하여 $a = (ac^{-1})c$이므로($c^{-1}c = 1$과 (K2), (K4)) 계수의 열이 있고, $\alpha c = \beta c$이면 [[real-number-arithmetic|(K1)]]과 (K11)에 의해 $\alpha = \beta$이므로 하나뿐입니다.
:::
