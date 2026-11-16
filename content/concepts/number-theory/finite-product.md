---
title: 유한 곱
title_en: Finite Product
aliases: [여러 수의 곱, 유한 개의 곱, finite product]
kind: definition
field: number-theory
msc: ["11"]
level: undergrad
summary: 정수 a₁, …, aₙ의 곱 a₁a₂⋯aₙ을 앞에서부터 하나씩 곱하는 재귀로 정의하고, 곱이 정수라는 것과 두 곱을 이어 붙일 수 있다는 것을 보인다.
requires: [mathematical-induction, even-and-odd, well-ordering-principle]
sources:
  - ref: hammack-book-of-proof
    loc: 10.4절 The Fundamental Theorem of Arithmetic, Theorem 10.1의 증명, p.192 (같은 표기가 10.1절 Proposition 10.1, p.186에도 나온다)
    checked: original
    note: "출처는 소수들의 곱 p₁·p₂·p₃⋯p_k를 정의 없이 쓴다(p.192). 읽은 위치에서 곱 표기의 뜻이나 괄호 치는 방식을 설명하지 않는다. 이 항목의 재귀적 정의와 아래 성질 (P1), (P2)의 진술과 증명은 이 사이트가 썼다. 출처는 순서를 바꾼 두 분해를 같은 것으로 취급하지만(p.192, 'they may be in different orders') 이 항목은 곱의 순서 바꿈을 주장하지 않는다. 예시는 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 1.1.1절, Theorem 1.1.6 (Fundamental Theorem of Arithmetic), p.3
    checked: original
    note: "출처는 소수들의 곱과 p₁p₂⋯p_d, q₁q₂⋯q_m 꼴의 곱을 정의 없이 쓴다(p.3, p.10의 증명). 같은 쪽에서 출처는 소수가 인수 하나인 곱이고 1이 빈 곱이라고 적는데(p.3), 이 항목은 인수가 하나인 곱만 정의하고 빈 곱(n = 0)은 정의하지 않는다. 정의와 성질의 증명은 이 사이트가 썼다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수일 때, **정수의 열**(finite sequence of integers) $a_1, a_2, \dots, a_n$이란 $\{1, 2, \dots, n\}$의 각 원소 $i$마다 정수 $a_i$가 하나씩 정해져 있는 것이다. 같은 정수가 여러 자리에 나와도 된다.

정수의 열 $a_1, a_2, \dots, a_n$의 **곱**(finite product) $a_1 a_2 \cdots a_n$을 $n$에 대한 재귀로 다음과 같이 정의한다.

- $n = 1$이면 $a_1 a_2 \cdots a_n$은 $a_1$이다.
- $n \ge 1$이고 열 $a_1, a_2, \dots, a_{n+1}$이 주어지면
$$a_1 a_2 \cdots a_{n+1} = (a_1 a_2 \cdots a_n) \cdot a_{n+1}$$
이다. 오른쪽의 $a_1 a_2 \cdots a_n$은 같은 열의 처음 $n$개의 곱이고, $\cdot$은 두 정수의 곱셈이다.

이렇게 재귀로 정의하면 모든 자연수 $n$과 정수의 열에 대하여 곱이 하나씩 정해진다는 것은 [[mathematical-induction|수학적 귀납법]]의 원리와 함께 증명 없이 받아들인다. 곱은 각 자리의 수만으로 정해진다. 인수가 없는 곱($n = 0$)은 정의하지 않는다.

정수의 열에 대하여 다음 두 성질이 성립한다. 증명은 아래 "곱이 정수임의 증명"과 "이어 붙이기의 증명"에 있다.

- (P1) 곱 $a_1 a_2 \cdots a_n$은 정수이다.
- (P2) (이어 붙이기) $m$, $n$이 자연수이고 $a_1, \dots, a_m$과 $b_1, \dots, b_n$이 정수의 열일 때, 이 둘을 차례로 늘어놓은 $m + n$개의 열 $c_1, \dots, c_{m+n}$을 $c_i = a_i$ ($1 \le i \le m$), $c_{m+j} = b_j$ ($1 \le j \le n$)로 정한다. 그러면
$$(a_1 \cdots a_m) \cdot (b_1 \cdots b_n) = c_1 c_2 \cdots c_{m+n}$$
이다.

곱의 인수를 다른 순서로 바꾸어도 곱이 같다는 것(재배열)은 이 항목에서 주장하지 않는다.
:::

:::english
Let $n$ be a natural number. A **finite sequence of integers** $a_1, a_2, \dots, a_n$ is an assignment of an integer $a_i$ to each element $i$ of $\{1, 2, \dots, n\}$. The same integer may occur in several positions.

The **product** (finite product) $a_1 a_2 \cdots a_n$ of a sequence of integers $a_1, a_2, \dots, a_n$ is defined recursively on $n$ as follows.

- If $n = 1$, then $a_1 a_2 \cdots a_n$ is $a_1$.
- If $n \ge 1$ and a sequence $a_1, a_2, \dots, a_{n+1}$ is given, then
$$a_1 a_2 \cdots a_{n+1} = (a_1 a_2 \cdots a_n) \cdot a_{n+1}.$$
Here $a_1 a_2 \cdots a_n$ on the right is the product of the first $n$ terms of the same sequence, and $\cdot$ is the multiplication of two integers.

That a recursive definition of this kind determines exactly one product for every natural number $n$ and every sequence of integers is accepted without proof, together with the principle of mathematical induction. The product is determined by the integers in the positions alone. The product with no factors ($n = 0$) is not defined.

For sequences of integers the following two properties hold. They are proved below.

- (P1) The product $a_1 a_2 \cdots a_n$ is an integer.
- (P2) (Concatenation) Let $m$ and $n$ be natural numbers and let $a_1, \dots, a_m$ and $b_1, \dots, b_n$ be sequences of integers. Define the sequence $c_1, \dots, c_{m+n}$ of $m + n$ terms, obtained by listing the two sequences one after the other, by $c_i = a_i$ ($1 \le i \le m$) and $c_{m+j} = b_j$ ($1 \le j \le n$). Then
$$(a_1 \cdots a_m) \cdot (b_1 \cdots b_n) = c_1 c_2 \cdots c_{m+n}.$$

That a product is unchanged when its factors are put in a different order (rearrangement) is not claimed in this entry.
:::

## 직관

계산기에 수를 차례로 넣으면서 곱셈 버튼을 누르는 상황을 생각해 봅시다. 처음에 $a_1$을 넣고, 다음 수 $a_2$를 곱한 결과에 $a_3$을 곱하고, 또 그 결과에 $a_4$를 곱합니다. 이 정의가 정확히 이 동작입니다. $a_1 a_2 \cdots a_n$은 "지금까지의 결과"에 다음 수를 하나씩 곱해 나간 마지막 결과이고, 괄호로 쓰면 $(\cdots((a_1 a_2) a_3) \cdots) a_n$입니다.

점 세 개로 쓴 곱은 교재에서 정의 없이 쓰이지만, 정수의 곱셈은 두 수 사이의 연산이라서 세 수 이상의 곱에는 정의가 필요합니다. 이 항목이 그 정의를 맡습니다. (P2)는 계산기를 두 번 돌려서 얻은 두 결과를 곱한 것이, 처음 줄에 이어 다음 줄의 수까지 한 번에 입력한 결과와 같다는 말입니다. 두 결과를 이어 붙이는 일은 [[prime-factorization-exists]]의 증명에서 두 수의 소수 곱을 합쳐 $n$의 소수 곱을 만들 때 쓰입니다.

:::remark[곱이 정수임의 증명]
수학적 귀납법([[mathematical-induction]])으로 증명한다. 자연수 $n$에 대한 명제 $S_n$을 "정수의 모든 열 $a_1, \dots, a_n$에 대하여 $a_1 \cdots a_n$은 정수이다"로 둔다.

기초 단계. $n = 1$이면 정의에 의해 $a_1 \cdots a_n = a_1$이고, $a_1$은 정수이다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $k$에 대하여 $S_k$가 참이라 하고, 정수의 열 $a_1, \dots, a_{k+1}$을 하나 잡는다. 정의에 의해 $a_1 \cdots a_{k+1} = (a_1 \cdots a_k) \cdot a_{k+1}$이다. $S_k$를 처음 $k$개의 열에 적용하면 $a_1 \cdots a_k$는 정수이고 $a_{k+1}$도 정수이다. 정수끼리 곱한 결과는 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $(a_1 \cdots a_k) \cdot a_{k+1}$은 정수이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다.
:::

:::remark[이어 붙이기의 증명]
자연수 $m$과 정수의 열 $a_1, \dots, a_m$을 고정하고 $A = a_1 \cdots a_m$이라 쓴다. 곱은 각 자리의 수만으로 정해지므로, 어떤 열의 처음 $k$개의 곱은 그 $k$개의 수로 이루어진 열의 곱과 같다. 정수의 곱셈의 결합법칙은 [[well-ordering-principle]]의 진술에서 증명 없이 받아들인 기본 계산 규칙으로 쓴다.

$n$에 대한 귀납법으로 증명한다. $S_n$을 "정수의 모든 열 $b_1, \dots, b_n$에 대하여, 위처럼 만든 $c_1, \dots, c_{m+n}$이 $A \cdot (b_1 \cdots b_n) = c_1 \cdots c_{m+n}$을 만족한다"로 둔다.

기초 단계. $n = 1$이면 $c_i = a_i$ ($1 \le i \le m$)이고 $c_{m+1} = b_1$이다. $m \ge 1$이므로 정의의 둘째 줄에 의해 $c_1 \cdots c_{m+1} = (c_1 \cdots c_m) \cdot c_{m+1}$이다. 처음 $m$개의 $c_i$는 $a_1, \dots, a_m$이므로 $c_1 \cdots c_m = A$이다. 또 정의의 첫째 줄에 의해 $n = 1$인 곱 $b_1 \cdots b_n$은 $b_1$ 자신이므로 $A \cdot (b_1 \cdots b_n) = A \cdot b_1 = A \cdot c_{m+1}$이고, 이것이 $c_1 \cdots c_{m+1}$과 같다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $k$에 대하여 $S_k$가 참이라 하고, 정수의 열 $b_1, \dots, b_{k+1}$을 잡아 $c_1, \dots, c_{m+k+1}$을 만든다. 정의의 둘째 줄에 의해 $b_1 \cdots b_{k+1} = (b_1 \cdots b_k) \cdot b_{k+1}$이므로
$$A \cdot (b_1 \cdots b_{k+1}) = A \cdot \bigl((b_1 \cdots b_k) \cdot b_{k+1}\bigr) = \bigl(A \cdot (b_1 \cdots b_k)\bigr) \cdot b_{k+1}$$
이다. 둘째 등호는 결합법칙이다. 열 $b_1, \dots, b_k$로 만든 열은 $c_1, \dots, c_{m+k}$이므로, $S_k$에 의해 $A \cdot (b_1 \cdots b_k) = c_1 \cdots c_{m+k}$이다. 또 $c_{m+k+1} = b_{k+1}$이다. 따라서
$$A \cdot (b_1 \cdots b_{k+1}) = (c_1 \cdots c_{m+k}) \cdot c_{m+k+1} = c_1 \cdots c_{m+k+1}$$
이다. 마지막 등호는 $m + k \ge 1$이므로 정의의 둘째 줄이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다.
:::

## 예시와 반례

:::example[정의대로 계산하기]
열 $2, -3, 5, 4$의 곱은 정의에 따라 앞에서부터 계산합니다. $a_1 a_2 = a_1 \cdot a_2 = 2 \cdot (-3) = -6$, $a_1 a_2 a_3 = (-6) \cdot 5 = -30$, $a_1 a_2 a_3 a_4 = (-30) \cdot 4 = -120$입니다.

(P2)를 $m = 2$, $n = 2$, $a_1, a_2 = 2, -3$, $b_1, b_2 = 5, 4$에 적용하면 $(2 \cdot (-3)) \cdot (5 \cdot 4) = (-6) \cdot 20 = -120$입니다. 이것은 이어 붙인 열 $2, -3, 5, 4$의 곱 $-120$과 같습니다.

인수가 하나인 곱도 곱입니다. 열 $7$ 하나의 곱은 $7$이고, 열 $3, 0, 8$의 곱은 $(3 \cdot 0) \cdot 8 = 0 \cdot 8 = 0$입니다.
:::

:::counterexample[같은 수가 여러 번 나오는 열]
곱은 열의 각 자리를 모두 곱합니다. 열 $2, 2, 3$의 곱은 $(2 \cdot 2) \cdot 3 = 12$이고, 서로 다른 수만 모은 $2, 3$의 곱 $2 \cdot 3 = 6$이 아닙니다. 열은 자리마다 수를 정하는 것이어서 같은 수가 두 번 나오면 두 번 곱해집니다.
:::

## 확인 질문

:::check[열 $5, -2, 3, -1$의 곱 $a_1 a_2 a_3 a_4$를 정의대로 앞에서부터 계산하라.]
$a_1 a_2 = 5 \cdot (-2) = -10$, $a_1 a_2 a_3 = (-10) \cdot 3 = -30$, $a_1 a_2 a_3 a_4 = (-30) \cdot (-1) = 30$입니다.
:::

:::check[열 $3, -2$와 열 $-1, 4, 2$에 (P2)를 적용해 양쪽을 따로 계산하고 같음을 확인하라.]
왼쪽은 $(3 \cdot (-2)) \cdot ((-1 \cdot 4) \cdot 2) = (-6) \cdot ((-4) \cdot 2) = (-6) \cdot (-8) = 48$입니다. 오른쪽은 이어 붙인 열 $3, -2, -1, 4, 2$의 곱으로, $3 \cdot (-2) = -6$, $(-6) \cdot (-1) = 6$, $6 \cdot 4 = 24$, $24 \cdot 2 = 48$입니다. 둘 다 $48$입니다.
:::
