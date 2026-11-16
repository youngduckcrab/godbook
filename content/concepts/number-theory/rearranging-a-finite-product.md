---
title: 유한 곱의 재배열
title_en: Rearranging a Finite Product
aliases: [곱의 순서 바꾸기, 곱의 재배열, 인수의 순서, rearrangement of a product, permuting factors]
kind: theorem
field: number-theory
msc: ["11"]
level: undergrad
summary: 정수열의 곱은 항의 순서를 {1, …, n}의 전단사로 바꾸어도 변하지 않는다. 보조로 k번째 인수를 맨 뒤로 보내는 꼴을 먼저 증명한다.
requires: [function, injective-surjective-bijective, function-composition, composition-preserves-injectivity-and-surjectivity, mathematical-induction, even-and-odd, prime-number, well-ordering-principle, finite-product, finite-set]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1절, Theorem 2.1.20(Euler's Theorem)의 증명 p.27, Proposition 2.1.22(Wilson's Theorem)의 증명 p.28
    checked: original
    note: "출처는 오일러 정리의 증명(p.27)에서 'xP의 원소들의 법 n 환원은 P의 원소들의 환원과 같으므로 곱 ∏(xa)와 ∏a가 합동이다(the products are over the same numbers modulo n)'고 쓰고, 윌슨 정리의 증명(p.28)에서 원소를 역원끼리 짝지어 곱을 정리한다. 두 곳 모두 곱의 순서를 바꿔도 곱이 같다는 것을 말없이 쓰며 증명하지 않는다. 이 항목의 진술과 증명(k번째 인수를 맨 뒤로 보내는 보조 사실과 n에 대한 귀납법)은 출처에 없고 이 사이트가 썼다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a_1, \dots, a_n$이 정수의 열일 때, 전단사 $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$에 대하여 열 $a_{\sigma(1)}, a_{\sigma(2)}, \dots, a_{\sigma(n)}$을 $a$와 $\sigma$의 [[function-composition|합성]] $a \circ \sigma$로 정한 길이 $n$인 열이라 한다. [[finite-product|유한 곱]]에 대해 다음이 성립한다.

1. (보조: $k$번째 인수를 맨 뒤로) $n \ge 1$이고 $b_1, \dots, b_{n+1}$이 길이 $n + 1$인 정수의 열이며 $k \in \{1, \dots, n+1\}$이라 하자. 길이 $n$인 열 $c_1, \dots, c_n$을 $c_i = b_i$ ($i < k$), $c_i = b_{i+1}$ ($k \le i \le n$)로 정하면
$$b_1 b_2 \cdots b_{n+1} = (c_1 c_2 \cdots c_n) \cdot b_k$$
이다.
2. (재배열) $\sigma$가 $\{1, \dots, n\}$에서 $\{1, \dots, n\}$으로의 전단사이면
$$a_{\sigma(1)} a_{\sigma(2)} \cdots a_{\sigma(n)} = a_1 a_2 \cdots a_n$$
이다.

정수의 곱셈의 교환법칙과 결합법칙은 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수와 부등식에 관한 성질은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용한다. 증명에서는 [[finite-set]]의 (F1)을 쓴다.
:::

:::english
Let $n$ be a natural number and $a_1, \dots, a_n$ a sequence of integers. For a bijection $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$, the sequence $a_{\sigma(1)}, a_{\sigma(2)}, \dots, a_{\sigma(n)}$ means the sequence of length $n$ given by the composition $a \circ \sigma$. For finite products the following hold.

1. (Auxiliary: moving the $k$-th factor to the end) Let $n \ge 1$, let $b_1, \dots, b_{n+1}$ be a sequence of integers of length $n + 1$, and let $k \in \{1, \dots, n+1\}$. Define the sequence $c_1, \dots, c_n$ of length $n$ by $c_i = b_i$ for $i < k$ and $c_i = b_{i+1}$ for $k \le i \le n$. Then
$$b_1 b_2 \cdots b_{n+1} = (c_1 c_2 \cdots c_n) \cdot b_k.$$
2. (Rearrangement) If $\sigma$ is a bijection from $\{1, \dots, n\}$ to $\{1, \dots, n\}$, then
$$a_{\sigma(1)} a_{\sigma(2)} \cdots a_{\sigma(n)} = a_1 a_2 \cdots a_n.$$

The commutative and associative laws of integer multiplication are the computational laws accepted in the entry on the well-ordering principle. For integers and inequalities we cite (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle. In the proof we use (F1) of the entry on finite sets.
:::

## 직관

계산기에 곱할 수를 넣는 순서를 바꿔도 마지막 결과는 같다는 것은 우리의 경험입니다. 유한 곱의 정의는 "앞에서부터 하나씩 곱하는" 순서에 묶여 있으므로, 순서를 바꿔도 같다는 것은 정의에서 바로 나오지 않고 증명이 필요합니다.

증명의 아이디어는 맨 뒤 칸 하나를 기준으로 삼는 것입니다. 마지막에 곱해지는 수를 바꾸는 방법을 먼저 알아 두면(1), 순서를 바꾼 열에서 원래 열의 마지막 항 $a_n$이 있는 자리를 찾아 그것을 맨 뒤로 보내고, 나머지는 길이가 하나 줄어든 같은 문제로 돌립니다(2). 주의할 점은 열에는 같은 값이 여러 자리에 나올 수 있다는 점입니다. 열은 자리마다 수를 정하는 함수이므로 값이 같아도 자리는 다르게 셉니다.

## 증명

:::idea
1은 $k$번째 인수의 앞과 뒤를 이어 붙여 둔 곱에 [[finite-product|유한 곱의 성질]](이어 붙이기)을 쓰고 교환법칙으로 정리한다. 2는 $n$에 대한 귀납법. $\sigma(k) = n+1$인 자리 $k$를 1로 맨 뒤로 보내고 나머지 $n$개의 열은 $\{1, \dots, n\}$의 전단사 $\tau$로 재배열된 열임을 보인다.
:::

:::hint
1에서는 $k = 1$, $k = n + 1$, $2 \le k \le n$의 세 경우로 나누세요. 마지막 경우 $b$는 $b_1, \dots, b_{k-1}$, $b_k$, $b_{k+1}, \dots, b_{n+1}$의 세 토막입니다.
:::

:::hint
2의 귀납 단계에서 $\sigma(k) = n + 1$인 $k$를 잡고, $\tau(i) = \sigma(i)$ ($i < k$), $\tau(i) = \sigma(i + 1)$ ($k \le i \le n$)로 둔 $\tau$가 $\{1, \dots, n\}$의 전단사임을 먼저 확인하세요.
:::

:::proof
**1의 증명.** 정수의 곱셈의 교환법칙과 결합법칙을 쓴다. 세 경우로 나눈다.

*$k = n + 1$.* $i < n + 1$이면 $i \le n$이므로 $i \in \{1, \dots, n\}$에 대하여 $c_i = b_i$이다(조건 $i < k$). 따라서 $c_1, \dots, c_n$은 $b$의 처음 $n$개로 이루어진 열이고, 유한 곱의 정의의 둘째 줄에 의해 $b_1 \cdots b_{n+1} = (c_1 \cdots c_n) \cdot b_{n+1} = (c_1 \cdots c_n) \cdot b_k$이다.

*$k = 1$.* 모든 $i \in \{1, \dots, n\}$에서 $i \ge 1 = k$이므로 $c_i = b_{i+1}$이다. $n + 1 \ge 2$이므로 [[finite-product]]의 (P3)에 의해 $b_1 \cdots b_{n+1} = b_1 \cdot (b_2 \cdots b_{n+1})$이고, $b_2 \cdots b_{n+1}$은 $b_j' = b_{j+1}$인 열 $b_1', \dots, b_n'$의 곱이며 이 열은 $c$와 같은 열이다. 따라서 $b_1 \cdots b_{n+1} = b_k \cdot (c_1 \cdots c_n)$이고 (P1)에 의해 $c_1 \cdots c_n$은 정수이므로 교환법칙에 의해 $(c_1 \cdots c_n) \cdot b_k$와 같다.

*$2 \le k \le n$.* $L = b_1 \cdots b_{k-1}$($k - 1 \ge 1$이므로 길이 $k - 1$인 열의 곱)이고 $R$을 $d_j = b_{k+j}$ ($1 \le j \le n + 1 - k$)로 정한 길이 $n + 1 - k \ge 1$인 열 $d$의 곱이라 하고 $b_{k+1} \cdots b_{n+1}$로 쓰자. 둘 다 [[finite-product]]의 (P1)에 의해 정수이다. 열 $b_1, \dots, b_k$와 열 $b_{k+1}, \dots, b_{n+1}$을 차례로 이어 붙인 열은 $b$와 같은 열이므로, (P2)에 의해 $b_1 \cdots b_{n+1} = (b_1 \cdots b_k) \cdot R$이다. $k \ge 2$이므로 정의의 둘째 줄에 의해 $b_1 \cdots b_k = L \cdot b_k$이다. 따라서 $b_1 \cdots b_{n+1} = (L \cdot b_k) \cdot R = (L \cdot R) \cdot b_k$이다. 한편 열 $b_1, \dots, b_{k-1}$과 열 $b_{k+1}, \dots, b_{n+1}$을 이어 붙인 길이 $(k - 1) + (n + 1 - k) = n$인 열의 $i$번째 항은 $i \le k - 1$이면 $b_i$, $k \le i \le n$이면 $b_{i+1}$이므로 $c$와 같은 열이다. (P2)에 의해 $L \cdot R = c_1 \cdots c_n$이고 $b_1 \cdots b_{n+1} = (c_1 \cdots c_n) \cdot b_k$이다.

**2의 증명.** 자연수 $n$에 대한 명제 $S_n$을 "길이 $n$인 정수의 모든 열 $a_1, \dots, a_n$과 $\{1, \dots, n\}$의 모든 전단사 $\sigma$에 대하여 $a_{\sigma(1)} \cdots a_{\sigma(n)} = a_1 \cdots a_n$이다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 증명한다.

*기초 단계.* $n = 1$이면 $\sigma(1) \in \{1\}$이므로 $1 \le \sigma(1) \le 1$이고 (L2)에 의해 $\sigma(1) = 1$이다. 길이 $1$인 열의 곱은 그 항이므로 $a_{\sigma(1)} = a_1$이다.

*귀납 단계.* $S_n$이 참이라 하고 길이 $n + 1$인 열 $a_1, \dots, a_{n+1}$과 $\{1, \dots, n+1\}$의 전단사 $\sigma$를 잡는다. $b_i = a_{\sigma(i)}$로 두면 증명할 것은 $b_1 \cdots b_{n+1} = a_1 \cdots a_{n+1}$이다. $\sigma$가 전사이므로 $\sigma(k) = n + 1$인 $k \in \{1, \dots, n+1\}$가 있고, $\sigma$가 단사이므로 이런 $k$는 하나뿐이다.

*$\tau$를 만든다.* $r : \{1, \dots, n\} \to \{1, \dots, n+1\}$을 $i < k$이면 $r(i) = i$, $i \ge k$이면 $r(i) = i + 1$로 정한다. (Z5)에 의해 각 $i$는 $i < k$, $i = k$, $i > k$ 가운데 정확히 하나이므로 $i < k$이거나 $i \ge k$이고 둘은 함께 성립하지 않아 $r$는 함수이다. 값은 $\{1, \dots, n+1\}$에 있다. $i < k$이면 $1 \le i < k \le n + 1$이어서 $i \in \{1, \dots, n+1\}$이다. $i \ge k$이면 $1 \le i < i + 1$((L3))에서 (Z6)에 의해 $1 \le i + 1$이고, $i \le n$의 양변에 $1$을 더하면 (Z7)에 의해 $i + 1 \le n + 1$이므로 $i + 1 \in \{1, \dots, n+1\}$이다. 또 모든 $i$에서 $r(i) \ne k$이다. $i < k$이면 $r(i) = i < k$이고 (Z5)에 의해 $i \ne k$이다. $i \ge k$이면 $r(i) = i + 1 \ge k + 1 > k$이다((L3), (Z6)). $r$는 단사이다. $r(i) = r(i')$라 하자. 둘 다 $< k$이면 $i = i'$이다. 둘 다 $\ge k$이면 $i + 1 = i' + 1$이고 (Z7)에 의해 $i = i'$이다. $i < k \le i'$이면 $r(i) = i < k < i' + 1 = r(i')$이므로 $r(i) \ne r(i')$이어서 이 경우는 일어나지 않고, $i' < k \le i$이면 $r(i') = i' < k < i + 1 = r(i)$이므로 $r(i) \ne r(i')$이어서 이 경우도 일어나지 않는다. 모든 $i \in \{1, \dots, n\}$에 대하여 $r(i) \ne k$이고 $\sigma$가 단사이므로 $\sigma(r(i)) \ne \sigma(k) = n + 1$이다. 따라서 [[finite-set]]의 (F1)에 의해 $\tau = \sigma \circ r$의 값은 $\{1, \dots, n\}$에 있고, $\tau$는 $\{1, \dots, n\}$에서 $\{1, \dots, n\}$으로의 함수이며 $\tau(i) = \sigma(i)$ ($i < k$), $\tau(i) = \sigma(i+1)$ ($k \le i \le n$)이다. $\tau$는 단사이다. [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번에 의해 $r$와 $\sigma$의 합성은 단사이다. $\tau$는 전사이다. $j \in \{1, \dots, n\}$이라 하자. $j \in \{1, \dots, n+1\}$이므로 $\sigma(l) = j$인 $l \in \{1, \dots, n+1\}$이 있다. $l \ne k$이다. $l = k$이면 $j = \sigma(k) = n + 1$인데 (F1)에 의해 $n + 1 \notin \{1, \dots, n\}$이기 때문이다. $l < k$이면 $l < k \le n + 1$에서 (Z1)과 (Z7)에 의해 $l \le n$이므로 $l \in \{1, \dots, n\}$이고 $\tau(l) = \sigma(l) = j$이다. $l > k$이면 (Z1)에 의해 $k + 1 \le l$이고 (Z7)에 의해 $k \le l - 1$이다. 또 $l \le n + 1$에서 $l - 1 \le n$이고 $1 \le k \le l - 1$이므로 $l - 1 \in \{1, \dots, n\}$이며 $l - 1 \ge k$이므로 $\tau(l - 1) = \sigma(l) = j$이다. 따라서 $\tau$는 $\{1, \dots, n\}$의 전단사이다.

*재배열.* 길이 $n$인 열 $c_i = b_i$ ($i < k$), $c_i = b_{i+1}$ ($k \le i \le n$)를 1에 쓰면 $b_1 \cdots b_{n+1} = (c_1 \cdots c_n) \cdot b_k$이다. $b_k = a_{\sigma(k)} = a_{n+1}$이다. $i < k$이면 $c_i = a_{\sigma(i)} = a_{\tau(i)}$이고, $k \le i \le n$이면 $c_i = a_{\sigma(i+1)} = a_{\tau(i)}$이다. 곧 $c_i = a_{\tau(i)}$이다. $a$의 처음 $n$개로 이루어진 열에 $\tau$를 적용한 열이 $c$이므로 $S_n$에 의해 $c_1 \cdots c_n = a_1 \cdots a_n$이다. 따라서 $b_1 \cdots b_{n+1} = (a_1 \cdots a_n) \cdot a_{n+1}$이고, 정의의 둘째 줄에 의해 이것은 $a_1 \cdots a_{n+1}$이다. 따라서 $S_{n+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 수의 곱의 순서 바꾸기]
$a = (2, -3, 5)$이고 $\sigma(1) = 3$, $\sigma(2) = 2$, $\sigma(3) = 1$로 $1$과 $3$을 바꾸면 $\sigma$는 $\{1, 2, 3\}$의 전단사입니다. $a \circ \sigma = (5, -3, 2)$이고 곱은 $(5 \cdot (-3)) \cdot 2 = (-15) \cdot 2 = -30$입니다. 원래 열의 곱은 $(2 \cdot (-3)) \cdot 5 = (-6) \cdot 5 = -30$으로 같습니다.
:::

:::example[1의 구성: 가운데 인수 보내기]
$b = (2, -3, 5, 4)$이고 $k = 2$이면 $c_1 = b_1 = 2$, $c_2 = b_3 = 5$, $c_3 = b_4 = 4$이어서 $c = (2, 5, 4)$입니다. $(c_1 c_2) c_3 = (2 \cdot 5) \cdot 4 = 40$이고 $b_k = -3$이므로 $(c_1 c_2 c_3) \cdot b_k = 40 \cdot (-3) = -120$입니다. 정의대로 $b_1 b_2 b_3 b_4$는 $(2 \cdot (-3)) \cdot 5 = -30$, $(-30) \cdot 4 = -120$으로 같습니다.
:::

:::counterexample[전단사가 아니면 깨진다]
$a = (2, 3, 5)$이고 $\rho(1) = 1$, $\rho(2) = 1$, $\rho(3) = 3$으로 정한 $\rho : \{1, 2, 3\} \to \{1, 2, 3\}$은 함수이지만 $\rho(1) = \rho(2)$이므로 전단사가 아닙니다. $a \circ \rho = (2, 2, 5)$의 곱은 $(2 \cdot 2) \cdot 5 = 20$이고 $a$의 곱은 $(2 \cdot 3) \cdot 5 = 30$이어서 다릅니다. 항을 한 번씩만 모두 쓰는 순서 바꿈이라는 전단사 조건이 필요합니다.
:::

## 확인 질문

:::check[$a = (2, 2, 5)$이고 $\sigma(1) = 2$, $\sigma(2) = 1$, $\sigma(3) = 3$이다. $a \circ \sigma$를 구하고, $\sigma$가 항등함수가 아닌데도 곱이 같은 까닭을 말하라.]
$a_{\sigma(1)} = a_2 = 2$, $a_{\sigma(2)} = a_1 = 2$, $a_{\sigma(3)} = a_3 = 5$이므로 $a \circ \sigma = (2, 2, 5)$로 $a$와 같은 열입니다. 곱은 $(2 \cdot 2) \cdot 5 = 20$으로 같고, 이 경우는 열 자체가 같기 때문입니다. 재배열 정리는 열이 달라지는 경우에도 곱이 같다고 말합니다.
:::

:::check[$n = 2$, $\sigma(1) = 3$, $\sigma(2) = 1$, $\sigma(3) = 2$로 $\sigma$는 $\{1, 2, 3\}$의 전단사이다. 증명의 $k$와 $\tau(1)$, $\tau(2)$를 구하라.]
$n + 1 = 3$이므로 $\sigma(k) = 3$인 $k$는 $k = 1$입니다. $\tau(i) = \sigma(i + 1)$ ($1 \le i \le 2$)이므로 $\tau(1) = \sigma(2) = 1$, $\tau(2) = \sigma(3) = 2$로 $\tau$는 항등함수입니다.
:::
