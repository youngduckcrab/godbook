---
title: 유한 곱
title_en: Finite Product
aliases: [여러 수의 곱, 유한 개의 곱, finite product, 정수의 유한수열]
kind: definition
field: number-theory
msc: ["11"]
level: undergrad
summary: 정수 a₁, …, aₙ의 곱 a₁a₂⋯aₙ을 앞에서부터 하나씩 곱하는 재귀로 정의하고, 곱이 정수라는 것, 두 곱을 이어 붙일 수 있다는 것, 맨 앞 인수를 뗄 수 있다는 것, 각 인수가 곱을 나눈다는 것, 양의 정수들의 곱의 크기를 보인다.
requires: [function, mathematical-induction, even-and-odd, divisibility, prime-number, well-ordering-principle]
sources:
  - ref: hammack-book-of-proof
    loc: 10.4절 The Fundamental Theorem of Arithmetic, Theorem 10.1의 증명, p.192 (같은 표기가 10.1절 Proposition 10.1, p.186에도 나온다)
    checked: original
    note: "출처는 소수들의 곱 p₁·p₂·p₃⋯p_k를 정의 없이 쓴다(p.192). 읽은 위치에서 곱 표기의 뜻이나 괄호 치는 방식을 설명하지 않는다. 이 항목의 재귀적 정의와 아래 성질 (P1)–(P5)의 진술과 증명은 이 사이트가 썼다. 출처는 순서를 바꾼 두 분해를 같은 것으로 취급하지만(p.192, 'they may be in different orders') 이 항목은 곱의 순서 바꿈을 주장하지 않는다. 예시는 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 1.1.1절, Theorem 1.1.6 (Fundamental Theorem of Arithmetic), p.3
    checked: original
    note: "출처는 소수들의 곱과 p₁p₂⋯p_d, q₁q₂⋯q_m 꼴의 곱을 정의 없이 쓴다(p.3, p.10의 증명). 같은 쪽에서 출처는 소수가 인수 하나인 곱이고 1이 빈 곱이라고 적는데(p.3), 이 항목은 인수가 하나인 곱만 정의하고 빈 곱(n = 0)은 정의하지 않는다. 정의와 성질의 증명은 이 사이트가 썼다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수일 때, 길이 $n$인 **정수의 열**(finite sequence of integers, 유한수열이라고도 한다)이란 [[function|함수]] $a : \{1, 2, \dots, n\} \to \mathbb{Z}$이다. $a(i)$를 $a_i$로 쓰고 열을 $a_1, a_2, \dots, a_n$으로 나타낸다. 같은 정수가 여러 자리에 나와도 된다. 함수의 같음에 의해, 길이가 같은 두 열 $a$, $b$는 모든 자리 $i$에서 $a_i = b_i$일 때 같은 열이다. $1 \le k \le n$일 때 열 $a_1, \dots, a_n$의 **처음 $k$개**란 $a$를 $\{1, \dots, k\}$로 제한한 길이 $k$인 열 $a_1, \dots, a_k$이다.

길이 $n$인 정수의 열 $a_1, a_2, \dots, a_n$의 **곱**(finite product) $a_1 a_2 \cdots a_n$을 $n$에 대한 재귀로 다음과 같이 정의한다.

- $n = 1$이면 $a_1 a_2 \cdots a_n$은 $a_1$이다.
- $n \ge 1$이고 길이 $n + 1$인 열 $a_1, a_2, \dots, a_{n+1}$이 주어지면
$$a_1 a_2 \cdots a_{n+1} = (a_1 a_2 \cdots a_n) \cdot a_{n+1}$$
이다. 오른쪽의 $a_1 a_2 \cdots a_n$은 이 열의 처음 $n$개로 이루어진 길이 $n$인 열의 곱이고, $\cdot$은 두 정수의 곱셈이다.

모든 자연수 $n$과 길이 $n$인 정수의 열마다 이 규칙을 만족하는 정수 하나가 정해진다는 것은 [[mathematical-induction|수학적 귀납법]]의 원리와 함께 증명 없이 받아들인다. 따라서 같은 열의 곱은 같다. 인수가 없는 곱($n = 0$)은 정의하지 않는다.

다음 성질들이 성립한다. 증명은 아래 각 성질의 이름이 붙은 참고 블록에 있고, 앞의 성질만 쓰므로 순환하지 않는다.

- (P1) 곱 $a_1 a_2 \cdots a_n$은 정수이다.
- (P2) (이어 붙이기) $m$, $n$이 자연수이고 $a_1, \dots, a_m$과 $b_1, \dots, b_n$이 정수의 열일 때, 이 둘을 차례로 늘어놓은 길이 $m + n$인 열 $c_1, \dots, c_{m+n}$을 $c_i = a_i$ ($1 \le i \le m$), $c_{m+j} = b_j$ ($1 \le j \le n$)로 정한다. 그러면
$$(a_1 \cdots a_m) \cdot (b_1 \cdots b_n) = c_1 c_2 \cdots c_{m+n}$$
이다.
- (P3) (맨 앞 인수 떼어 내기) $n \ge 2$이고 $a_1, \dots, a_n$이 정수의 열이라 하자. $b_j = a_{j+1}$ ($j = 1, \dots, n - 1$)로 정한 길이 $n - 1$인 열 $b_1, \dots, b_{n-1}$의 곱을 $a_2 a_3 \cdots a_n$으로 쓴다. 그러면
$$a_1 a_2 \cdots a_n = a_1 \cdot (a_2 a_3 \cdots a_n)$$
이다.
- (P4) (각 인수는 곱을 나눈다) 길이 $n$인 정수의 열 $a_1, \dots, a_n$과 $i \in \{1, \dots, n\}$에 대하여 $a_i \mid a_1 a_2 \cdots a_n$이다.
- (P5) (양의 정수들의 곱) $a_1, \dots, a_n$이 모두 양의 정수이면 곱 $a_1 \cdots a_n$은 양의 정수이고 모든 $i$에 대하여 $a_i \le a_1 \cdots a_n$이다. 특히 $n \ge 2$이고 모든 $a_i \ge 2$이면 모든 $i$에 대하여 $a_i < a_1 \cdots a_n$이다.

곱의 인수를 다른 순서로 바꾸어도 곱이 같다는 것(재배열)은 이 항목에서 주장하지 않는다.
:::

:::english
Let $n$ be a natural number. A **finite sequence of integers** of length $n$ is a function $a : \{1, 2, \dots, n\} \to \mathbb{Z}$. We write $a_i$ for $a(i)$ and denote the sequence by $a_1, a_2, \dots, a_n$. The same integer may occur in several positions. By equality of functions, two sequences $a$ and $b$ of the same length are the same sequence exactly when $a_i = b_i$ for every position $i$. For $1 \le k \le n$, the **first $k$ terms** of a sequence $a_1, \dots, a_n$ form the sequence $a_1, \dots, a_k$ of length $k$, namely the restriction of $a$ to $\{1, \dots, k\}$.

The **product** (finite product) $a_1 a_2 \cdots a_n$ of a sequence of integers $a_1, a_2, \dots, a_n$ of length $n$ is defined recursively on $n$ as follows.

- If $n = 1$, then $a_1 a_2 \cdots a_n$ is $a_1$.
- If $n \ge 1$ and a sequence $a_1, a_2, \dots, a_{n+1}$ of length $n + 1$ is given, then
$$a_1 a_2 \cdots a_{n+1} = (a_1 a_2 \cdots a_n) \cdot a_{n+1}.$$
Here $a_1 a_2 \cdots a_n$ on the right is the product of the sequence of length $n$ formed by the first $n$ terms of this sequence, and $\cdot$ is the multiplication of two integers.

That for every natural number $n$ and every sequence of integers of length $n$ there is exactly one integer satisfying this rule is accepted without proof, together with the principle of mathematical induction. Hence equal sequences have equal products. The product with no factors ($n = 0$) is not defined.

The following properties hold. They are proved below, each in the block named after it, and each proof uses only earlier properties, so there is no circularity.

- (P1) The product $a_1 a_2 \cdots a_n$ is an integer.
- (P2) (Concatenation) Let $m$ and $n$ be natural numbers and let $a_1, \dots, a_m$ and $b_1, \dots, b_n$ be sequences of integers. Define the sequence $c_1, \dots, c_{m+n}$ of length $m + n$, obtained by listing the two sequences one after the other, by $c_i = a_i$ ($1 \le i \le m$) and $c_{m+j} = b_j$ ($1 \le j \le n$). Then
$$(a_1 \cdots a_m) \cdot (b_1 \cdots b_n) = c_1 c_2 \cdots c_{m+n}.$$
- (P3) (Splitting off the first factor) Let $n \ge 2$ and let $a_1, \dots, a_n$ be a sequence of integers. Define the sequence $b_1, \dots, b_{n-1}$ of length $n - 1$ by $b_j = a_{j+1}$ ($j = 1, \dots, n - 1$), and write $a_2 a_3 \cdots a_n$ for its product. Then
$$a_1 a_2 \cdots a_n = a_1 \cdot (a_2 a_3 \cdots a_n).$$
- (P4) (Each factor divides the product) For a sequence of integers $a_1, \dots, a_n$ of length $n$ and $i \in \{1, \dots, n\}$, we have $a_i \mid a_1 a_2 \cdots a_n$.
- (P5) (Products of positive integers) If $a_1, \dots, a_n$ are all positive integers, then the product $a_1 \cdots a_n$ is a positive integer and $a_i \le a_1 \cdots a_n$ for every $i$. In particular, if $n \ge 2$ and $a_i \ge 2$ for every $i$, then $a_i < a_1 \cdots a_n$ for every $i$.

That a product is unchanged when its factors are put in a different order (rearrangement) is not claimed in this entry.
:::

## 직관

계산기에 수를 차례로 넣으면서 곱셈 버튼을 누르는 상황을 생각해 봅시다. 처음에 $a_1$을 넣고, 다음 수 $a_2$를 곱한 결과에 $a_3$을 곱하고, 또 그 결과에 $a_4$를 곱합니다. 이 정의가 정확히 이 동작입니다. $a_1 a_2 \cdots a_n$은 "지금까지의 결과"에 다음 수를 하나씩 곱해 나간 마지막 결과이고, 괄호로 쓰면 $(\cdots((a_1 a_2) a_3) \cdots) a_n$입니다.

점 세 개로 쓴 곱은 이 강의가 근거로 삼는 두 교재에서 정의 없이 쓰이지만, 정수의 곱셈은 두 수 사이의 연산이라서 세 수 이상의 곱에는 정의가 필요합니다. 이 항목이 그 정의를 맡습니다. 열을 함수로 정의했으므로 "같은 수들을 같은 자리에 늘어놓은 열은 같은 열"이어서 곱도 같습니다. (P2)는 계산기를 두 번 돌려서 얻은 두 결과를 곱한 것이, 처음 줄에 이어 다음 줄의 수까지 한 번에 입력한 결과와 같다는 말이고, (P3)은 그 특수한 경우로 맨 앞의 수를 따로 떼어 놓는 것입니다.

앞 강의의 [[prime-factorization-exists]]는 $p_1 \cdot p_2 \cdots p_\ell$ 꼴의 곱을 정의 없이 썼습니다. 그 항목의 진술과 증명에 나오는 곱은 이 항목의 정의로 읽습니다. 소수 하나는 길이 $1$인 열의 곱이고, 그 증명 끝에서 $d = p_1 \cdots p_s$와 $c = q_1 \cdots q_t$를 이어 붙여 $n = dc = p_1 \cdots p_s \cdot q_1 \cdots q_t$를 얻는 단계가 (P2)입니다.

:::remark[(P1) 곱이 정수이다]
[[mathematical-induction|수학적 귀납법]]으로 증명한다. 자연수 $n$에 대한 명제 $S_n$을 "길이 $n$인 정수의 모든 열 $a_1, \dots, a_n$에 대하여 $a_1 \cdots a_n$은 정수이다"로 둔다.

기초 단계. $n = 1$이면 정의에 의해 $a_1 \cdots a_n = a_1$이고, $a_1$은 정수이다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $k$에 대하여 $S_k$가 참이라 하고, 길이 $k + 1$인 정수의 열 $a_1, \dots, a_{k+1}$을 하나 잡는다. 정의에 의해 $a_1 \cdots a_{k+1} = (a_1 \cdots a_k) \cdot a_{k+1}$이다. $S_k$를 처음 $k$개의 열에 적용하면 $a_1 \cdots a_k$는 정수이고 $a_{k+1}$도 정수이다. 정수끼리 곱한 결과는 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $(a_1 \cdots a_k) \cdot a_{k+1}$은 정수이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다.
:::

:::remark[(P2) 이어 붙이기]
자연수 $m$과 길이 $m$인 정수의 열 $a_1, \dots, a_m$을 고정하고 $A = a_1 \cdots a_m$이라 쓴다. (P1)에 의해 $A$는 정수이다. 정수의 곱셈의 결합법칙은 [[well-ordering-principle]]의 진술에서 증명 없이 받아들인 계산 법칙으로 쓴다.

$n$에 대한 귀납법으로 증명한다. $S_n$을 "길이 $n$인 정수의 모든 열 $b_1, \dots, b_n$에 대하여, 위처럼 만든 $c_1, \dots, c_{m+n}$이 $A \cdot (b_1 \cdots b_n) = c_1 \cdots c_{m+n}$을 만족한다"로 둔다.

기초 단계. $n = 1$이면 $c_i = a_i$ ($1 \le i \le m$)이고 $c_{m+1} = b_1$이다. $m \ge 1$이므로 정의의 둘째 줄에 의해 $c_1 \cdots c_{m+1} = (c_1 \cdots c_m) \cdot c_{m+1}$이다. $c$의 처음 $m$개는 모든 자리에서 $a_1, \dots, a_m$과 값이 같으므로 같은 열이고, 따라서 $c_1 \cdots c_m = A$이다. 또 정의의 첫째 줄에 의해 $n = 1$인 곱 $b_1 \cdots b_n$은 $b_1$ 자신이므로 $A \cdot (b_1 \cdots b_n) = A \cdot b_1 = A \cdot c_{m+1}$이고, 이것이 $c_1 \cdots c_{m+1}$과 같다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $k$에 대하여 $S_k$가 참이라 하고, 길이 $k + 1$인 정수의 열 $b_1, \dots, b_{k+1}$을 잡아 $c_1, \dots, c_{m+k+1}$을 만든다. 정의의 둘째 줄에 의해 $b_1 \cdots b_{k+1} = (b_1 \cdots b_k) \cdot b_{k+1}$이므로
$$A \cdot (b_1 \cdots b_{k+1}) = A \cdot \bigl((b_1 \cdots b_k) \cdot b_{k+1}\bigr) = \bigl(A \cdot (b_1 \cdots b_k)\bigr) \cdot b_{k+1}$$
이다. (P1)에 의해 $A$와 $b_1 \cdots b_k$는 정수이므로 둘째 등호는 정수의 곱셈의 결합법칙이다. $b$의 처음 $k$개 $b_1, \dots, b_k$로 만든 열은 $c$의 처음 $m + k$개와 모든 자리에서 값이 같아 같은 열이므로, $S_k$에 의해 $A \cdot (b_1 \cdots b_k) = c_1 \cdots c_{m+k}$이다. 또 $c_{m+k+1} = b_{k+1}$이다. 따라서
$$A \cdot (b_1 \cdots b_{k+1}) = (c_1 \cdots c_{m+k}) \cdot c_{m+k+1} = c_1 \cdots c_{m+k+1}$$
이다. 마지막 등호는 $m + k \ge 1$이므로 정의의 둘째 줄이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다.
:::

:::remark[(P3) 맨 앞 인수 떼어 내기]
(P2)에서 $m = 1$, 첫째 열을 길이 $1$인 열 $a_1$으로 두고, 둘째 열을 $b_1, \dots, b_{n-1}$($b_j = a_{j+1}$)로 둔다. $n - 1 \ge 1$이므로 (P2)를 쓸 수 있다. 이어 붙인 열 $c_1, \dots, c_n$은 $c_1 = a_1$이고 $2 \le i \le n$이면 $c_i = c_{1 + (i-1)} = b_{i-1} = a_i$이다. 곧 모든 자리 $i \in \{1, \dots, n\}$에서 $c_i = a_i$이므로 $c$는 열 $a_1, \dots, a_n$과 같은 열이다. 길이 $1$인 열 $a_1$의 곱은 정의에 의해 $a_1$이므로 (P2)는 $a_1 \cdot (b_1 \cdots b_{n-1}) = c_1 \cdots c_n = a_1 \cdots a_n$을 준다. 이것이 (P3)이다.
:::

:::remark[(P4) 각 인수는 곱을 나눈다]
[[mathematical-induction|수학적 귀납법]]으로 증명한다. $S_n$을 "길이 $n$인 정수의 모든 열 $a_1, \dots, a_n$과 모든 $i \in \{1, \dots, n\}$에 대하여 $a_i \mid a_1 \cdots a_n$이다"로 둔다.

기초 단계. $n = 1$이면 $i = 1$이고 곱은 정의에 의해 $a_1$이며 $a_1 = a_1 \cdot 1$이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $a_1 \mid a_1$이다.

귀납 단계. $S_k$가 참이라 하고 길이 $k + 1$인 열 $a_1, \dots, a_{k+1}$과 $i \in \{1, \dots, k + 1\}$을 잡는다. $P = a_1 \cdots a_k$로 두면 정의에 의해 $a_1 \cdots a_{k+1} = P \cdot a_{k+1}$이고 (P1)에 의해 $P$는 정수이다. $i = k + 1$이면 곱셈의 교환법칙에 의해 $P \cdot a_{k+1} = a_{k+1} \cdot P$이고 $P$가 정수이므로 $a_{k+1} \mid a_1 \cdots a_{k+1}$이다. $i \le k$이면 $S_k$에 의해 $a_i \mid P$이므로 $P = a_i t$인 정수 $t$가 있고, $P \cdot a_{k+1} = a_i (t a_{k+1})$이다. 정수의 곱은 정수이므로([[even-and-odd]]에서 받아들임) $t a_{k+1}$은 정수이고 $a_i \mid a_1 \cdots a_{k+1}$이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 $n$에 대하여 $S_n$이 참이다.
:::

:::remark[(P5) 양의 정수들의 곱]
계산 법칙과 순서에 관한 받아들인 성질 (Z1), (Z3), (Z6), (Z7)([[prime-number]]와 [[well-ordering-principle]]의 진술)을 쓴다. 먼저 첫째 주장 "모두 양의 정수이면 곱은 양의 정수이고 각 $a_i \le$ 곱"을 귀납법으로 증명한다. $S_n$을 "길이 $n$인 모든 양의 정수 열에 대하여 곱은 양수이고 모든 $i$에서 $a_i \le a_1 \cdots a_n$이다"로 둔다.

기초 단계. $n = 1$이면 곱은 $a_1 > 0$이고 $a_1 \le a_1$이다.

귀납 단계. $S_k$가 참이라 하고 양의 정수의 열 $a_1, \dots, a_{k+1}$을 잡는다. $P = a_1 \cdots a_k$로 두면 $S_k$에 의해 $P > 0$이고 모든 $i \le k$에서 $a_i \le P$이다. (P1)에 의해 $P$는 정수이므로 (Z1)에 의해 $P \ge 1$이다. $a_{k+1} > 0$이므로 (Z3)에 의해 $1 \cdot a_{k+1} \le P \cdot a_{k+1}$, 곧 $a_{k+1} \le P \cdot a_{k+1}$이다. $0 < a_{k+1}$이므로 (Z6)에 의해 $0 < P \cdot a_{k+1} = a_1 \cdots a_{k+1}$이고, 같은 부등식이 $i = k + 1$의 경우이다. 또 $a_{k+1} \ge 1$이고 $P > 0$이므로 (Z3)에 의해 $P \cdot 1 \le P \cdot a_{k+1}$, 곧 $P \le a_1 \cdots a_{k+1}$이다. $i \le k$이면 $a_i \le P \le a_1 \cdots a_{k+1}$이므로 (Z6)에 의해 $a_i \le a_1 \cdots a_{k+1}$이다. 따라서 $S_{k+1}$이 참이다.

둘째 주장. $n \ge 2$이고 모든 $a_i \ge 2$라 하자. $a_i \ge 2 > 0$이므로 모든 $a_i$는 양의 정수이다. $P = a_1 \cdots a_{n-1}$로 두면 $n - 1 \ge 1$이므로 첫째 주장을 처음 $n - 1$개의 열에 적용해 $P > 0$이고 모든 $i \le n - 1$에서 $a_i \le P$이다. 특히 $2 \le a_1 \le P$이다. 곱은 $a_1 \cdots a_n = P \cdot a_n$이다.
- $i = n$: $2 \le P$이고 $a_n > 0$이므로 (Z3)에 의해 $2 a_n \le P a_n$이다. $2 a_n = a_n + a_n$이고 $a_n > 0$이므로 (Z7)에 의해 $a_n + a_n > a_n + 0 = a_n$이다. (Z6)에 의해 $a_n < P a_n = a_1 \cdots a_n$이다.
- $i \le n - 1$: $2 \le a_n$이고 $P > 0$이므로 (Z3)에 의해 $2P \le P a_n$이다. $2P = P + P > P + 0 = P$이므로 (Z7)과 (Z6)에 의해 $P < P a_n$이다. $a_i \le P$이므로 (Z6)에 의해 $a_i < P a_n = a_1 \cdots a_n$이다.
:::

## 예시와 반례

:::example[정의대로 계산하기]
열 $2, -3, 5, 4$의 곱은 정의에 따라 앞에서부터 계산합니다. $a_1 a_2 = a_1 \cdot a_2 = 2 \cdot (-3) = -6$, $a_1 a_2 a_3 = (-6) \cdot 5 = -30$, $a_1 a_2 a_3 a_4 = (-30) \cdot 4 = -120$입니다.

(P2)를 $m = 2$, $n = 2$, 열 $2, -3$과 열 $5, 4$에 적용하면 $(2 \cdot (-3)) \cdot (5 \cdot 4) = (-6) \cdot 20 = -120$입니다. 이것은 이어 붙인 열 $2, -3, 5, 4$의 곱 $-120$과 같습니다. (P4)에 의해 $-3 \mid -120$이고 실제로 $-120 = (-3) \cdot 40$입니다.

인수가 하나인 곱도 곱입니다. 열 $7$ 하나의 곱은 $7$이고, 열 $3, 0, 8$의 곱은 $(3 \cdot 0) \cdot 8 = 0 \cdot 8 = 0$입니다. 열 $2, 3, 2$는 모두 $2$ 이상이고 $n = 3 \ge 2$이므로 (P5)에 의해 곱 $(2 \cdot 3) \cdot 2 = 12$는 $2$, $3$, $2$ 각각보다 큽니다.
:::

:::counterexample[흔한 착각]
곱은 열의 각 자리를 모두 곱합니다. 열 $2, 2, 3$의 곱은 $(2 \cdot 2) \cdot 3 = 12$이고, 서로 다른 수만 모은 $2, 3$의 곱 $2 \cdot 3 = 6$이 아닙니다. 열은 자리마다 수를 정하는 함수여서 같은 수가 두 번 나오면 두 번 곱해집니다.

(P5)의 "양의 정수" 가정을 빼면 깨집니다. 열 $2, -3$의 곱은 $2 \cdot (-3) = -6$이어서 양수가 아니고 $2$보다 작습니다. 또 "모든 $a_i \ge 2$" 가정에서 $n \ge 2$를 빼면 곱이 인수보다 커지지 않습니다. $n = 1$이면 곱은 $a_1$ 자신이어서 $a_1 < a_1$이 아닙니다.
:::

## 확인 질문

:::check[열 $4, -5, 6$에서 (P3)을 써서 $a_1 \cdot (a_2 a_3)$과 $a_1 a_2 a_3$이 같음을 계산으로 확인하라. (P3)의 $b_1$, $b_2$는 무엇인가?]
(P3)의 $b_j = a_{j+1}$이므로 $b_1 = a_2 = -5$, $b_2 = a_3 = 6$입니다. $a_2 a_3$은 열 $-5, 6$의 곱이고 $(-5) \cdot 6 = -30$입니다. 따라서 $a_1 \cdot (a_2 a_3) = 4 \cdot (-30) = -120$입니다. 정의대로 $a_1 a_2 = 4 \cdot (-5) = -20$, $a_1 a_2 a_3 = (-20) \cdot 6 = -120$이어서 둘이 같습니다.
:::

:::check[열 $6, 7, 5$의 곱을 구하고, (P4)에 따라 곱을 각 인수와 어떤 정수의 곱으로 써서 각 인수가 곱을 나눔을 확인하라.]
곱은 $6 \cdot 7 = 42$, $42 \cdot 5 = 210$입니다. $210 = 6 \cdot 35 = 7 \cdot 30 = 5 \cdot 42$이므로 세 인수 $6$, $7$, $5$가 모두 $210$을 나눕니다.
:::
