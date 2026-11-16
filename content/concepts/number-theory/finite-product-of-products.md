---
title: 항끼리 곱한 열의 곱
title_en: Product of a Termwise Product of Sequences
aliases: [곱의 곱, 공통 인수를 묶은 곱, finite product of products]
kind: lemma
field: number-theory
msc: ["11"]
level: undergrad
summary: 두 정수열의 항끼리 곱한 열의 곱은 두 열의 곱의 곱과 같다. 특히 모든 항에 같은 정수 x를 곱한 열의 곱은 x의 거듭제곱과 원래 열의 곱의 곱이다.
requires: [function, mathematical-induction, even-and-odd, well-ordering-principle, finite-product, congruence-arithmetic]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1절, Theorem 2.1.20(Euler's Theorem)의 증명, p.27
    checked: original
    note: "출처는 오일러 정리의 증명(p.27)에서 곱 ∏(xa)가 곱 ∏a와 합동이라는 것에서 a들을 소거해 x^{#P} ≡ 1을 얻는다고 쓴다. 곱 ∏(xa)를 x^{#P}와 ∏a의 곱으로 나누는 단계는 출처에 쓰여 있지 않고, 이 증명에서 ∏ 기호는 정의 없이 쓰인다. 이 항목의 진술과 귀납법 증명은 출처에 없고 이 사이트가 썼다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a_1, \dots, a_n$과 $b_1, \dots, b_n$이 길이 $n$인 정수의 열이라 하자. 각 자리에서 $c_i = a_i b_i$로 정한 길이 $n$인 열 $c_1, \dots, c_n$($c_i$는 정수의 곱이므로 정수이다)에 대하여, [[finite-product|유한 곱]]에 대해 다음이 성립한다.

1. $(a_1 b_1)(a_2 b_2) \cdots (a_n b_n) = (a_1 a_2 \cdots a_n)(b_1 b_2 \cdots b_n)$이다. 왼쪽은 열 $c_1, \dots, c_n$의 곱이다.
2. 정수 $x$에 대하여 $(x b_1)(x b_2) \cdots (x b_n) = x^n \cdot (b_1 b_2 \cdots b_n)$이다. 여기서 $x^n$은 [[congruence-arithmetic|합동식의 계산에 관한 항목]]의 진술에서 정한 거듭제곱이다(모든 자리가 $x$인 길이 $n$인 열의 곱).

정수의 곱셈의 교환법칙과 결합법칙은 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수의 곱은 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $n$ be a natural number and let $a_1, \dots, a_n$ and $b_1, \dots, b_n$ be sequences of integers of length $n$. Define the sequence $c_1, \dots, c_n$ of length $n$ by $c_i = a_i b_i$ in each position (each $c_i$ is an integer, being a product of integers). Then the following hold for finite products.

1. $(a_1 b_1)(a_2 b_2) \cdots (a_n b_n) = (a_1 a_2 \cdots a_n)(b_1 b_2 \cdots b_n)$. The left side is the product of the sequence $c_1, \dots, c_n$.
2. For an integer $x$, $(x b_1)(x b_2) \cdots (x b_n) = x^n \cdot (b_1 b_2 \cdots b_n)$. Here $x^n$ is the power defined in the statement of the entry on congruence arithmetic (the product of the sequence of length $n$ all of whose terms are $x$).

The commutative and associative laws of integer multiplication are the computational laws accepted in the entry on the well-ordering principle, and the fact that a product of integers is an integer is the fact accepted in the entry on even and odd integers.
:::

## 직관

계산기에 곱할 수를 하나씩 넣는다고 합시다. 항마다 $a_i$와 $b_i$를 먼저 곱해서 넣는 것과, $a$들만 끝까지 곱한 결과와 $b$들만 끝까지 곱한 결과를 마지막에 곱하는 것은 같은 값을 줍니다. 교환법칙과 결합법칙으로 한 단계씩 확인할 수 있고, 그것을 모든 길이에서 이어 주는 것이 귀납법입니다.

2는 1의 특수한 경우입니다. 열 $a$를 "모든 자리가 $x$"인 열로 잡으면 $a$들의 곱이 거듭제곱 $x^n$이 됩니다. 오일러의 정리 증명처럼 공통 인수를 곱 밖으로 빼낼 때 이 꼴이 쓰입니다.

## 증명

:::idea
길이 $n$에 대한 귀납법. 길이를 하나 늘릴 때 정의에 의해 마지막 항만 새로 곱해지고, 교환법칙과 결합법칙으로 정리한다.
:::

:::hint
길이 $k + 1$인 열의 곱은 처음 $k$개의 곱에 마지막 항을 곱한 것입니다. 처음 $k$개의 열 $c$는 처음 $k$개의 열 $a$와 $b$의 항끼리의 곱입니다.
:::

:::proof
**1의 증명.** 자연수 $n$에 대한 명제 $S_n$을 "길이 $n$인 정수의 모든 열 $a$, $b$에 대하여 $c_i = a_i b_i$로 정한 열의 곱이 $(a_1 \cdots a_n)(b_1 \cdots b_n)$과 같다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 증명한다.

*기초 단계.* $n = 1$이면 길이 $1$인 열의 곱은 그 항 자신이므로 $c_1 = a_1 b_1 = (a_1)(b_1)$이고, $a_1$은 열 $a_1$의 곱, $b_1$은 열 $b_1$의 곱이다. 따라서 $S_1$이 참이다.

*귀납 단계.* 자연수 $k$에 대하여 $S_k$가 참이라 하고 길이 $k + 1$인 열 $a$, $b$를 잡는다. $c_i = a_i b_i$($1 \le i \le k+1$)라 하자. $c$의 처음 $k$개로 이루어진 열은 모든 자리 $i \le k$에서 값이 $a_i b_i$이므로, $a$의 처음 $k$개와 $b$의 처음 $k$개로 만든 같은 방식의 열과 같은 열이다. 따라서 $S_k$에 의해 $c_1 \cdots c_k = P Q$이다. 여기서 $P = a_1 \cdots a_k$, $Q = b_1 \cdots b_k$이다. 유한 곱의 정의의 둘째 줄에 의해 $c_1 \cdots c_{k+1} = (c_1 \cdots c_k) \cdot c_{k+1} = (PQ)(a_{k+1} b_{k+1})$이고, $a_1 \cdots a_{k+1} = P a_{k+1}$, $b_1 \cdots b_{k+1} = Q b_{k+1}$이다. $P$, $Q$, $a_{k+1}$, $b_{k+1}$이 정수이므로 교환법칙과 결합법칙에 의해 $(PQ)(a_{k+1} b_{k+1}) = (P a_{k+1})(Q b_{k+1})$이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다.

**2의 증명.** 모든 자리가 $x$인 길이 $n$인 열을 $u_1, \dots, u_n$이라 하면 $u_i = x$이고 $u_1 \cdots u_n = x^n$이다. $a_i = u_i$로 잡으면 $c_i = u_i b_i = x b_i$이므로 1에 의해 $(x b_1) \cdots (x b_n) = (u_1 \cdots u_n)(b_1 \cdots b_n) = x^n (b_1 \cdots b_n)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 항의 경우]
$a = (2, -1, 3)$, $b = (4, 5, -2)$이면 $c = (8, -5, -6)$이고 $c$의 곱은 $(8 \cdot (-5)) \cdot (-6) = (-40)(-6) = 240$입니다. $a$의 곱은 $(2 \cdot (-1)) \cdot 3 = -6$, $b$의 곱은 $(4 \cdot 5) \cdot (-2) = -40$이고 $(-6)(-40) = 240$으로 같습니다.

2의 경우로 $x = 3$, $b = (1, 4, 5)$이면 $(3 \cdot 1)(3 \cdot 4)(3 \cdot 5)$는 $((3)(12))(15) = 36 \cdot 15 = 540$이고, $3^3 \cdot (1 \cdot 4 \cdot 5) = 27 \cdot 20 = 540$입니다.
:::

:::counterexample[지수를 잘못 세는 경우]
2의 $x^n$에서 $n$은 열의 길이입니다. 길이가 $3$인 열에서 $x$를 곱하면 $x^3$이 나오고 $x^2$이나 $x$가 아닙니다. 위 예에서 $3^3 = 27$이 아니라 $3^2 = 9$를 곱했다면 $9 \cdot 20 = 180 \ne 540$입니다.
:::

## 확인 질문

:::check[$a = (1, 2)$, $b = (3, 4)$이다. $c_i = a_i b_i$ 열의 곱과 $a$의 곱, $b$의 곱의 곱을 각각 구해 같은지 확인하라.]
$c = (3, 8)$이고 곱은 $3 \cdot 8 = 24$입니다. $a$의 곱은 $1 \cdot 2 = 2$, $b$의 곱은 $3 \cdot 4 = 12$이고 $2 \cdot 12 = 24$로 같습니다.
:::

:::check[$x = -2$이고 $b = (1, 3, 5, 7)$이다. 2를 써서 $(x b_1)(x b_2)(x b_3)(x b_4)$를 계산하라.]
$x^4 = (-2)(-2)(-2)(-2)$는 $(-2)(-2) = 4$, $4 \cdot (-2) = -8$, $(-8)(-2) = 16$이어서 $16$입니다. $b$의 곱은 $((1 \cdot 3) \cdot 5) \cdot 7 = 105$이므로 구하는 곱은 $16 \cdot 105 = 1680$입니다.
:::
