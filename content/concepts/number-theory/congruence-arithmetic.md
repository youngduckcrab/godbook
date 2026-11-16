---
title: 합동은 덧셈, 곱셈과 양립한다
title_en: Congruence Is Compatible with Addition and Multiplication
aliases: [합동식의 계산, 합동의 덧셈과 곱셈, congruence arithmetic, modular arithmetic]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: n을 법으로 합동인 두 쌍의 정수는 합, 차, 곱도 n을 법으로 합동이고, 여러 수의 곱과 거듭제곱에서도 마찬가지이며, 1과 합동인 수들의 곱은 1과 합동이다.
requires: [congruence-modulo-n, divisibility, finite-product, mathematical-induction, even-and-odd, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 5.2절 Congruence of Integers, 번호 없는 두 Proposition (a ≡ b이면 a² ≡ b², a ≡ b이면 ac ≡ bc), p.132. 5장 연습문제 21, 24, p.136. 11.5절 The Integers Modulo n, p.220
    checked: original
    note: "출처 5.2절이 합동의 덧셈·곱셈에 관해 증명하는 것은 a ≡ b (mod n)이면 a² ≡ b²(p.132)와 a ≡ b (mod n)이면 ac ≡ bc (mod n)(p.132)이다. 같은 절 p.133의 세 번째 Proposition(12a ≢ 12b (mod n)이면 n ∤ 12)은 대우 증명의 예이다. a ≡ b이고 c ≡ d이면 ac ≡ bd는 5장 연습문제 24(p.136)로 남겨 두었고, 이 항목의 (2)가 그 진술이다. 11.5절(p.220)은 동치류 [a] = [a′], [b] = [b′]이면 [ab] = [a′b′]임을 ab − a′b′ = n(a′ℓ + kb′ + nkℓ)로 보이고 덧셈은 11.5절 연습문제 8로 남긴다. 이 항목의 증명 (1), (2)는 같은 방식(합동의 정의를 풀어 직접 계산)이되 등식 ac − bd = a(c − d) + d(a − b)를 쓰는 이 사이트의 계산이다. 여러 개의 곱 (3), 차, 거듭제곱 a^k에 관한 진술은 출처에 없고 이 사이트가 finite-product의 정의와 귀납법으로 직접 증명했다(Hammack은 a², a³ 정도만 다루고, Stein도 일반의 a^k를 진술하지 않는다). 거듭제곱의 뜻(모든 자리가 a인 열의 곱)은 이 사이트가 이 항목에서 정했다. (6)(1과 합동인 수들의 곱은 1과 합동)도 이 사이트가 덧붙인 진술이다. 예시와 반례는 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 2.1절 Congruences Modulo n, Definition 2.1.4 (Integers Modulo n), p.22. 같은 절 p.23의 설명
    checked: original
    note: "Stein은 Z/nZ의 덧셈과 곱셈을 (a + nZ) + (b + nZ) = (a + b) + nZ, (a + nZ)·(b + nZ) = (ab) + nZ로 정의하고(p.22), 환을 아이디얼로 나눈 몫이어서 환의 구조가 따라온다고만 적는다(p.23). 이 정의가 대표의 선택과 무관하다는 것, 곧 합동식의 합·곱 계산이 가능하다는 것을 증명하는 문장은 이 쪽들에 없다(p.23에서 'arithmetic in Z/nZ is well defined'를 사실로 쓴다). 이 사이트는 환과 군의 언어를 쓰지 않고 합동 a ≡ b (mod n)의 언어로만 쓴다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수라 하자. 그러면 다음이 성립한다. 각 번호는 자기 가정을 따로 갖는다([[congruence-modulo-n|합동의 정의]]).

1. 정수 $a$, $b$, $c$, $d$가 $a \equiv b \pmod n$이고 $c \equiv d \pmod n$이면 $a + c \equiv b + d \pmod n$이다.
2. (1)과 같은 가정 아래 $ac \equiv bd \pmod n$이다.
3. (여러 개의 곱) $k$가 자연수이고 $a_1, \dots, a_k$와 $b_1, \dots, b_k$가 길이 $k$인 정수의 열이며 모든 $i \in \{1, \dots, k\}$에 대하여 $a_i \equiv b_i \pmod n$이면, [[finite-product|유한 곱]]에 대하여 $a_1 a_2 \cdots a_k \equiv b_1 b_2 \cdots b_k \pmod n$이다.
4. (1)과 같은 가정 아래 $a - c \equiv b - d \pmod n$이다.

정수 $a$와 자연수 $k$에 대하여 **거듭제곱** $a^k$(power)를 "모든 자리가 $a$인 길이 $k$인 열 $u_1, \dots, u_k$($u_i = a$)의 곱"으로 정한다. 유한 곱의 정의에 의해 $a^1 = a$이고 $a^2 = a \cdot a$이다. $a^0$은 정의하지 않고, 지수법칙은 여기서 주장하지 않는다.

5. 정수 $a$, $b$가 $a \equiv b \pmod n$이면 모든 자연수 $k$에 대하여 $a^k \equiv b^k \pmod n$이다.
6. $k$가 자연수이고 $u_1, \dots, u_k$가 정수이며 모든 $i \in \{1, \dots, k\}$에 대하여 $u_i \equiv 1 \pmod n$이면 $u_1 u_2 \cdots u_k \equiv 1 \pmod n$이다.
:::

:::english
Let $n$ be a natural number. Then the following hold, each with its own hypotheses.

1. If integers $a$, $b$, $c$, $d$ satisfy $a \equiv b \pmod n$ and $c \equiv d \pmod n$, then $a + c \equiv b + d \pmod n$.
2. Under the same hypotheses as in (1), $ac \equiv bd \pmod n$.
3. (Several factors) Let $k$ be a natural number and let $a_1, \dots, a_k$ and $b_1, \dots, b_k$ be sequences of integers of length $k$ such that $a_i \equiv b_i \pmod n$ for every $i \in \{1, \dots, k\}$. Then $a_1 a_2 \cdots a_k \equiv b_1 b_2 \cdots b_k \pmod n$, where these are finite products.
4. Under the same hypotheses as in (1), $a - c \equiv b - d \pmod n$.

For an integer $a$ and a natural number $k$, the **power** $a^k$ is defined as the product of the sequence $u_1, \dots, u_k$ of length $k$ all of whose terms are $a$ (that is, $u_i = a$). By the definition of the finite product, $a^1 = a$ and $a^2 = a \cdot a$. We do not define $a^0$, and we do not claim any laws of exponents here.

5. If integers $a$ and $b$ satisfy $a \equiv b \pmod n$, then $a^k \equiv b^k \pmod n$ for every natural number $k$.
6. Let $k$ be a natural number and let $u_1, \dots, u_k$ be integers with $u_i \equiv 1 \pmod n$ for every $i \in \{1, \dots, k\}$. Then $u_1 u_2 \cdots u_k \equiv 1 \pmod n$.
:::

## 직관

시계에서 15시와 3시는 같은 자리를 가리킵니다. 지금이 3시인지 15시인지 모르는 채로 8시간 뒤를 말하면, 어느 쪽에서 출발해도 시곗바늘은 같은 자리에 닿습니다. (1)은 이것을 말합니다. 합동인 수를 합동인 수로 바꿔 넣어도 합의 합동 여부는 바뀌지 않습니다. 곱셈도 같아서, 큰 수를 합동인 작은 수로 바꿔 놓고 계산해도 결과가 법 $n$에 대해 같은 자리에 놓입니다.

이 비유가 맞아떨어지는 곳은 "대표를 바꿔도 결과가 같다"는 점입니다. 곱셈은 시계로 바로 읽기 어려우므로 (2)는 비유가 아니라 계산으로 확인합니다. 합동은 나눗셈과는 양립하지 않습니다. 아래 반례가 그것을 보여 주고, $c$와 $n$이 서로소이면 $ac \equiv bc$에서 $c$를 지울 수 있다는 것은 [[congruence-cancellation|합동식의 소거 법칙]]에서 다룹니다.

## 증명

:::idea
합동의 정의를 풀어 $a - b = nx$, $c - d = ny$인 정수 $x$, $y$를 잡는다. 합은 두 식을 더하면 되고, 곱은 $ac - bd = a(c - d) + d(a - b)$로 갈라서 각 항에 $n$이 나옴을 본다. 여러 개의 곱 (3)과 $1$과 합동인 수들의 곱 (6)은 곱의 재귀적 정의를 따라 인수를 하나씩 붙이는 귀납법으로 보인다.
:::

:::hint
$a \equiv b \pmod n$과 $c \equiv d \pmod n$을 각각 정의대로 풀어 식 두 개를 쓰세요. (1)은 두 식을 더하면 됩니다.
:::

:::hint
(2)에서는 $ac - bd$를 $a(c - d)$와 $d(a - b)$의 합으로 쓸 수 있는지 전개해 보세요. 그러면 각 항에서 $n$이 나옵니다.
:::

:::hint
(3)은 $k$에 대한 귀납법입니다. 길이 $k + 1$인 열의 곱은 처음 $k$개의 곱에 마지막 인수를 곱한 것이고, 이 곱셈에 (2)를 쓰세요.
:::

:::proof
정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)과 정수의 덧셈과 곱셈의 교환·결합·분배법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)을 쓴다.

(1), (2), (4)에서는 $a \equiv b \pmod n$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 $n \mid (a - b)$이고, [[divisibility|나누어떨어짐]]의 정의에 의해 $a - b = nx$인 정수 $x$가 있다. 같은 이유로 $c - d = ny$인 정수 $y$가 있다. (3), (5), (6)은 이 $x$, $y$를 쓰지 않는다.

**(1)** 두 식을 더하면
$$(a + c) - (b + d) = (a - b) + (c - d) = nx + ny = n(x + y)$$
이다. $x + y$는 정수이므로 $n \mid ((a + c) - (b + d))$이고 $a + c \equiv b + d \pmod n$이다.

**(2)** 분배법칙으로 전개하면 $a(c - d) + d(a - b) = ac - ad + da - db$이다. 곱셈의 교환법칙에 의해 $ad = da$이므로 이는 $ac - db = ac - bd$이다. 따라서
$$ac - bd = a(c - d) + d(a - b) = a \cdot ny + d \cdot nx = n(ay + dx)$$
이다. $ay + dx$는 정수이므로 $n \mid (ac - bd)$이고 $ac \equiv bd \pmod n$이다.

**(3)** 자연수 $k$에 대한 명제 $S_k$를 "길이 $k$인 정수의 열 $a_1, \dots, a_k$와 $b_1, \dots, b_k$가 모든 $i$에서 $a_i \equiv b_i \pmod n$이면 $a_1 \cdots a_k \equiv b_1 \cdots b_k \pmod n$이다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 모든 $k$에 대하여 $S_k$가 참임을 보인다.

기초 단계 $k = 1$: [[finite-product|유한 곱]]의 정의에 의해 길이 $1$인 열의 곱은 그 열의 유일한 항이다. 따라서 두 열의 곱은 각각 $a_1$과 $b_1$이다. 가정이 $a_1 \equiv b_1 \pmod n$이므로 $S_1$이 참이다.

귀납 단계: 자연수 $k$에 대하여 $S_k$가 참이라고 가정한다. 길이 $k + 1$인 두 열 $a_1, \dots, a_{k+1}$과 $b_1, \dots, b_{k+1}$이 모든 $i \in \{1, \dots, k + 1\}$에서 $a_i \equiv b_i \pmod n$을 만족한다고 하자. 두 열의 처음 $k$개로 이루어진 길이 $k$인 열은 모든 $i \in \{1, \dots, k\}$에서 $a_i \equiv b_i \pmod n$을 만족하므로 귀납 가정 $S_k$에 의해 $A = a_1 \cdots a_k$와 $B = b_1 \cdots b_k$는 $A \equiv B \pmod n$이다. 유한 곱의 정의에 의해
$$a_1 \cdots a_{k+1} = A \cdot a_{k+1}, \qquad b_1 \cdots b_{k+1} = B \cdot b_{k+1}$$
이다. $A$, $B$는 정수이다([[finite-product]]의 (P1)). $A \equiv B \pmod n$이고 $a_{k+1} \equiv b_{k+1} \pmod n$이므로 (2)를 $(a, b, c, d) = (A, B, a_{k+1}, b_{k+1})$에 적용하면 $A \cdot a_{k+1} \equiv B \cdot b_{k+1} \pmod n$이다. 곧 $S_{k+1}$이 참이다. 따라서 모든 자연수 $k$에 대하여 $S_k$가 참이다.

**(4)** (1)에서와 같이 $a - b = nx$, $c - d = ny$이므로
$$(a - c) - (b - d) = (a - b) - (c - d) = nx - ny = n(x - y)$$
이다. $x - y$는 정수이므로 $a - c \equiv b - d \pmod n$이다.

**(5)** $a \equiv b \pmod n$이라 하고 $k$를 자연수라 하자. 모든 $i \in \{1, \dots, k\}$에 대하여 $u_i = a$, $v_i = b$로 둔 길이 $k$인 두 열 $u_1, \dots, u_k$와 $v_1, \dots, v_k$를 생각한다. 모든 $i$에서 $u_i \equiv v_i \pmod n$이므로 (3)에 의해 이 두 열의 곱이 합동이다. 정의에 의해 이 곱은 각각 $a^k$와 $b^k$이므로 $a^k \equiv b^k \pmod n$이다.

**(6)** 자연수 $k$에 대한 명제 $T_k$를 "길이 $k$인 정수의 열 $u_1, \dots, u_k$가 모든 $i$에서 $u_i \equiv 1 \pmod n$이면 $u_1 \cdots u_k \equiv 1 \pmod n$이다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 모든 $k$에 대하여 $T_k$가 참임을 보인다.

기초 단계 $k = 1$: 길이 $1$인 열의 곱은 $u_1$이고 가정이 $u_1 \equiv 1 \pmod n$이므로 $T_1$이 참이다.

귀납 단계: 자연수 $k$에 대하여 $T_k$가 참이라고 가정하고, 길이 $k + 1$인 열 $u_1, \dots, u_{k+1}$이 모든 $i$에서 $u_i \equiv 1 \pmod n$을 만족한다고 하자. 처음 $k$개의 열에 귀납 가정을 쓰면 $U = u_1 \cdots u_k$는 $U \equiv 1 \pmod n$이다. 유한 곱의 정의에 의해 $u_1 \cdots u_{k+1} = U \cdot u_{k+1}$이다. $U \equiv 1$이고 $u_{k+1} \equiv 1 \pmod n$이므로 (2)를 $(a, b, c, d) = (U, 1, u_{k+1}, 1)$에 적용하면 $U \cdot u_{k+1} \equiv 1 \cdot 1 = 1 \pmod n$이다. 곧 $T_{k+1}$이 참이다. 따라서 모든 자연수 $k$에 대하여 $T_k$가 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[합, 차, 곱]
$17 \equiv 3 \pmod 7$입니다. $17 - 3 = 14 = 7 \cdot 2$이기 때문입니다. 또 $20 \equiv -1 \pmod 7$입니다. $20 - (-1) = 21 = 7 \cdot 3$이기 때문입니다. 정리의 결과를 하나씩 확인합니다.

- 합: $17 + 20 = 37$, $3 + (-1) = 2$이고 $37 - 2 = 35 = 7 \cdot 5$이므로 $37 \equiv 2 \pmod 7$입니다.
- 차: $17 - 20 = -3$, $3 - (-1) = 4$이고 $-3 - 4 = -7 = 7 \cdot (-1)$이므로 $-3 \equiv 4 \pmod 7$입니다.
- 곱: $17 \cdot 20 = 340$, $3 \cdot (-1) = -3$이고 $340 - (-3) = 343 = 7 \cdot 49$이므로 $340 \equiv -3 \pmod 7$입니다.

증명의 수를 대입하면 $x = 2$, $y = 3$이고 $ac - bd = a(c - d) + d(a - b) = 17 \cdot 21 + (-1) \cdot 14 = 357 - 14 = 343$입니다. 이 값은 $n(ay + dx) = 7(17 \cdot 3 + (-1) \cdot 2) = 7 \cdot 49 = 343$과 같습니다.
:::

:::example[세 수의 곱과 거듭제곱]
$8 \equiv 1$, $11 \equiv 4$, $14 \equiv 7 \pmod 7$입니다. 차가 각각 $7$, $7$, $7$이기 때문입니다. (3)에 의해 $8 \cdot 11 \cdot 14 \equiv 1 \cdot 4 \cdot 7 \pmod 7$이어야 합니다. 실제로 $8 \cdot 11 \cdot 14 = 88 \cdot 14 = 1232$이고 $1 \cdot 4 \cdot 7 = 28$이며 $1232 - 28 = 1204 = 7 \cdot 172$입니다.

$10 \equiv 1 \pmod 3$이므로 (5)에 의해 $10^3 \equiv 1^3 = 1 \pmod 3$입니다. 실제로 $10^3 - 1 = 999 = 3 \cdot 333$입니다.

$5$, $9$, $13$은 모두 $5 - 1 = 4$, $9 - 1 = 8$, $13 - 1 = 12$이므로 모두 $1$과 $4$를 법으로 합동입니다. (6)에 의해 $5 \cdot 9 \cdot 13 \equiv 1 \pmod 4$여야 하고, 실제로 $5 \cdot 9 = 45$, $45 \cdot 13 = 585$이며 $585 - 1 = 584 = 4 \cdot 146$입니다.
:::

:::example[홀수끼리의 곱]
$n = 2$로 두면 홀수 $a$에 대하여 $a = 2m + 1$인 정수 $m$이 있으므로 $a - 1 = 2m$이고 $a \equiv 1 \pmod 2$입니다. 홀수 $a$, $c$를 잡으면 $a \equiv 1$, $c \equiv 1 \pmod 2$이므로 (2)에 의해 $ac \equiv 1 \cdot 1 = 1 \pmod 2$입니다. 곧 $ac - 1 = 2t$인 정수 $t$가 있고 $ac = 2t + 1$이므로 $ac$는 홀수입니다. 홀수끼리의 곱이 홀수라는 사실이 합동의 계산 한 줄로 나옵니다.
:::

:::counterexample[나눗셈은 양립하지 않는다]
$10 \equiv 4 \pmod 6$입니다. $10 - 4 = 6 = 6 \cdot 1$이기 때문입니다. 양변을 $2$로 나누면 $5$와 $2$인데, $5 - 2 = 3$이고 $3 = 6c$인 정수 $c$는 없습니다. [[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)에 의해 정수 $c$는 $c \le 0$이거나 $c \ge 1$이고, $c \le 0$이면 (Z2)에 의해 $6c \le 0 < 3$, $c \ge 1$이면 (Z3)에 의해 $6c \ge 6 > 3$입니다. 따라서 $5 \not\equiv 2 \pmod 6$입니다. $2 \cdot 5 \equiv 2 \cdot 2 \pmod 6$에서 $2$를 지울 수 없습니다. 어떤 조건에서 지울 수 있는지는 뒤의 항목에서 다룹니다.
:::

:::counterexample[지수에는 쓸 수 없다]
(5)는 거듭제곱의 밑을 합동인 수로 바꿔도 된다는 말이지 지수를 바꿔도 된다는 말이 아닙니다. $5 \equiv 1 \pmod 4$입니다. $5 - 1 = 4$이기 때문입니다. 그러나 $2^5 = 32$이고 $2^1 = 2$이며 $32 - 2 = 30$입니다. $30 = 4c$이면 $c = 7.5$이므로 $4 \nmid 30$이고 $2^5 \not\equiv 2^1 \pmod 4$입니다.
:::

## 확인 질문

:::check[$13 \equiv -2 \pmod 5$임을 보이고, (5)를 써서 $13^3 \equiv -8 \pmod 5$임을 설명한 뒤 실제 차 $13^3 - (-8)$이 $5$의 배수임을 확인하라.]
$13 - (-2) = 15 = 5 \cdot 3$이므로 $13 \equiv -2 \pmod 5$입니다. (5)를 $k = 3$으로 쓰면 $13^3 \equiv (-2)^3 = -8 \pmod 5$입니다. 실제로 $13^2 = 169$, $13^3 = 169 \cdot 13 = 2197$이고 $2197 - (-8) = 2205 = 5 \cdot 441$입니다.
:::

:::check[정수 $a$, $b$와 자연수 $n$에 대하여 $a^2 \equiv b^2 \pmod n$이면 $a \equiv b \pmod n$인가? $n = 5$, $a = 2$, $b = 3$으로 확인하라.]
아닙니다. $a^2 = 2 \cdot 2 = 4$, $b^2 = 3 \cdot 3 = 9$이고 $4 - 9 = -5 = 5 \cdot (-1)$이므로 $a^2 \equiv b^2 \pmod 5$입니다. 그러나 $2 - 3 = -1$이고 $-1 = 5c$인 정수 $c$는 없으므로 $2 \not\equiv 3 \pmod 5$입니다. (5)의 역은 성립하지 않습니다.
:::
