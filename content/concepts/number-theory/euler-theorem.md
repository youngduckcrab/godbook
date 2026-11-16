---
title: 오일러 정리
title_en: Euler's Theorem
aliases: [오일러의 정리, 오일러 정리 (정수론), Euler's theorem, Euler-Fermat theorem]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: n이 자연수이고 x가 n과 서로소인 정수이면 x의 φ(n)제곱은 n을 법으로 1과 합동이다.
requires: [function, euler-phi-function, coprime-to-modulus, multiplication-permutes-reduced-residues, finite-product-of-products, congruence-cancellation, congruence-arithmetic, congruence-modulo-n, congruence-is-an-equivalence-relation, finite-set, finite-product, divisibility, greatest-common-divisor, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.2절 Euler's Theorem, Theorem 2.1.20, 진술 p.26, 증명 p.26–27 (군을 쓰지 않는 'elementary proof'는 p.27)
    checked: original
    note: "진술은 같다(출처는 gcd(x, n) = 1이면 x^ϕ(n) ≡ 1 (mod n)이라 적고, n이 자연수이고 x가 정수임은 문맥에서 읽힌다). 출처는 증명을 둘 준다. 하나는 (Z/nZ)*의 위수가 ϕ(n)이라는 것과 라그랑주 정리를 쓰는 군론적 증명이고 이 사이트는 따르지 않는다. 다른 하나(p.27)는 P = {a : 1 ≤ a ≤ n and gcd(a, n) = 1}에 대해 ∏_{a∈P}(xa) ≡ ∏_{a∈P} a를 'the products are over the same numbers modulo n'이라고만 쓰고 'cancel the a's'로 x^{#P} ≡ 1을 얻는다. 이 항목의 증명은 같은 발상이고 출처가 넘어간 곳을 메웠다. 곱이 나열의 순서에 상관없다는 것과 합동인 인수끼리의 곱의 합동은 multiplication-permutes-reduced-residues의 3(재배열 정리 포함)에서, ∏(xa) = x^{#P}·∏a는 finite-product-of-products의 2에서, 소거해도 되는 근거(곱 ∏a가 n과 서로소)는 coprime-to-modulus의 3에서, 소거는 congruence-cancellation에서 가져온다(출처는 소거의 근거를 쓰지 않는다). 출처는 #P = ϕ(n)이라고만 쓰고, 이 항목은 ϕ(n) ≥ 1이어서 거듭제곱이 뜻을 갖는다는 것을 euler-phi-function의 2로 밝힌다. 출처가 다루지 않는 n = 1은 따로 한 줄로 보인다. 원소의 위수는 이 항목에서 쓰지 않는다. 출처의 예(SAGE Example 2.1.21의 n = 20, Example 2.3.14의 7^91)는 쓰지 않았고 예시, 반례, 확인 질문의 수는 새로 골랐다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 출처 메모의 틀린 서술, 예 하나에서 넘겨짚은 일반화, 가정이 쓰이는 단계에 관한 설명, 인용 근거를 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $x$가 정수이며 $\gcd(x, n) = 1$이면
$$x^{\varphi(n)} \equiv 1 \pmod n$$
이다. 여기서 $\varphi(n)$은 [[euler-phi-function|오일러 피 함수]]이고, $\varphi(n) \ge 1$이므로 $\varphi(n)$은 자연수이다. 따라서 거듭제곱 $x^{\varphi(n)}$은 [[congruence-arithmetic|합동식의 계산에 관한 항목]]의 진술에서 정한 뜻(모든 자리가 $x$인 길이 $\varphi(n)$인 열의 [[finite-product|곱]])을 갖는다. $n \ne 0$이므로 $x$와 $n$은 둘 다 $0$은 아니고, $\gcd(x, n)$은 [[greatest-common-divisor|최대공약수]]이다.

증명에서 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $n$ be a natural number and let $x$ be an integer with $\gcd(x, n) = 1$. Then
$$x^{\varphi(n)} \equiv 1 \pmod n.$$
Here $\varphi(n)$ is Euler's phi function, and since $\varphi(n) \ge 1$ it is a natural number, so the power $x^{\varphi(n)}$ has the meaning fixed for powers (the product of the sequence of length $\varphi(n)$ in which every term is $x$). Since $n \ne 0$, the integers $x$ and $n$ are not both $0$, and $\gcd(x, n)$ is the greatest common divisor.
:::

## 직관

시계의 눈금이 $n$칸이라 하고, 법 $n$과 서로소인 눈금 $a$만 모아 둡니다. 각 눈금 $a$를 $xa$의 눈금으로 옮기는 동작(곱하기 $x$)을 생각합시다. $x$가 $n$과 서로소이면 이 동작은 모아 둔 눈금들을 서로 바꾸기만 합니다([[multiplication-permutes-reduced-residues]]). 모아 둔 눈금이 $\varphi(n)$개이므로, 각 눈금에 $x$를 곱한 수 $xa$를 모두 곱하면 처음 눈금을 모두 곱한 수와 합동이고, 그 왼쪽에는 $x$가 $\varphi(n)$번 묶여 나옵니다. 그 묶음을 양변에서 지우면 $x$의 $\varphi(n)$제곱이 $1$과 합동이라는 결론이 남습니다. 이 비유가 맞아떨어지는 곳은 "곱하면 순서만 바뀌어서 전체의 곱이 변하지 않는다"는 점이고, 맞지 않는 곳은 더 작은 지수로도 $1$이 될 수 있다는 점입니다. 예를 들어 $4^3 = 64$이고 $64 - 1 = 63 = 9 \cdot 7$이므로 $4^3 \equiv 1 \pmod 9$인데 $\varphi(9) = 6$입니다. 이 정리는 $\varphi(n)$제곱이 $1$과 합동이라고만 말할 뿐 가장 작은 지수는 말하지 않습니다.

$x$가 $n$과 서로소여야 한다는 조건은 [[multiplication-permutes-reduced-residues]]의 3을 쓰는 단계에서 쓰입니다. 마지막 소거에 필요한 것은 $P_n$의 원소들의 곱이 $n$과 서로소라는 것이고, 이는 $x$와 상관없이 [[coprime-to-modulus|법과 서로소인 수의 성질]]의 3에서 나옵니다. 지수 $\varphi(n)$ 자리에 $n - 1$을 넣은 것은 합성수 $9$에서 성립하지 않습니다. 반례에서 봅니다.

## 증명

:::idea
$n = 1$은 모든 정수가 합동이어서 자명하다. $n \ge 2$이면 $P_n$의 원소를 늘어놓은 열 $b_1, \dots, b_k$($k = \varphi(n)$)에 대해 $(x b_1) \cdots (x b_k) \equiv b_1 \cdots b_k$이다. 왼쪽을 $x^k (b_1 \cdots b_k)$로 묶고, $b_1 \cdots b_k$가 $n$과 서로소이므로 소거한다.
:::

:::hint
$n = 1$일 때 $x^{\varphi(1)}$은 무엇이고 $1$과 합동인가요? 합동의 정의에서 $1 \mid (x - 1)$을 보면 됩니다.
:::

:::hint
$n \ge 2$이면 [[multiplication-permutes-reduced-residues]]의 3을 쓰려면 $P_n$의 나열 $b$가 필요합니다. 그 나열은 어디서 얻나요? 그 다음 왼쪽의 $(x b_1) \cdots (x b_k)$를 [[finite-product-of-products]]의 2로 바꾸세요.
:::

:::proof
**$n = 1$일 때.** [[euler-phi-function]]의 3에 의해 $\varphi(1) = 1$이고, 거듭제곱의 뜻(모든 자리가 $x$인 길이 $1$인 열의 곱)과 [[finite-product]]의 정의에 의해 $x^1 = x$이다. $x - 1$은 정수이고 $x - 1 = 1 \cdot (x - 1)$이므로 $1 \mid (x - 1)$이며, [[congruence-modulo-n|합동]]의 정의에 의해 $x \equiv 1 \pmod 1$이다. 따라서 $x^{\varphi(1)} \equiv 1 \pmod 1$이다.

**$n \ge 2$일 때.** $k = \varphi(n)$이라 하자. [[euler-phi-function]]의 2에 의해 $k$는 자연수이고, 같은 항목의 1에 의해 $P_n$은 원소를 $k$개 가지므로 [[finite-set]]의 정의에 의해 전단사 $b : \{1, \dots, k\} \to P_n$이 있다. $P_n \subseteq \mathbb{Z}$이므로 [[function]]의 진술에 의해 이 $b$를 길이 $k$인 정수의 열 $b_1, \dots, b_k$로 볼 수 있고 $Q = b_1 b_2 \cdots b_k$라 하자. $Q$는 정수이다((P1), [[finite-product]]).

[[multiplication-permutes-reduced-residues]]의 3을 $x$와 이 $b$에 쓰면 ($n \ge 2$이고 $\gcd(x, n) = 1$이므로)
$$(x b_1)(x b_2) \cdots (x b_k) \equiv b_1 b_2 \cdots b_k = Q \pmod n$$
이다. [[finite-product-of-products]]의 2에 의해 왼쪽은 $x^k \cdot Q$와 같다. 따라서
$$x^k Q \equiv Q \pmod n$$
이다. 이제 $Q$가 $n$과 서로소임을 보인다. 각 $b_i$는 $P_n$의 원소이므로 $\gcd(b_i, n) = 1$이고, [[coprime-to-modulus]]의 3에 의해 $\gcd(Q, n) = 1$이다. $x^k$는 정수이므로((P1), 정수들의 곱이다) $Q = 1 \cdot Q$를 써서 $x^k Q \equiv 1 \cdot Q \pmod n$이고, $\gcd(Q, n) = 1$이므로 [[congruence-cancellation|합동식의 소거 법칙]]에 의해 $x^k \equiv 1 \pmod n$이다. $k = \varphi(n)$이므로 $x^{\varphi(n)} \equiv 1 \pmod n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 9, x = 4]
$\gcd(4, 9) = 1$이고 $\varphi(9) = 6$입니다([[euler-phi-function]]의 $P_9 = \{1, 2, 4, 5, 7, 8\}$). $4^6 = 4096$이고 $4096 - 1 = 4095 = 9 \cdot 455$이므로 $4^6 \equiv 1 \pmod 9$입니다. 증명의 과정으로는, $b = (1, 2, 4, 5, 7, 8)$에 $4$를 곱한 $4, 8, 16, 20, 28, 32$의 곱이 $4^6 \cdot (1 \cdot 2 \cdot 4 \cdot 5 \cdot 7 \cdot 8)$이고, 이 곱이 $b$의 곱 $2240$과 합동이어서($2240 = 3 \cdot 746 + 2$이고 $9$의 양의 약수는 $1, 3, 9$이므로 $2240$은 $9$와 서로소) $4^6 \equiv 1$이 나옵니다.
:::

:::example[n = 14, x = 3]
$14$의 양의 약수는 $1, 2, 7, 14$이고 $\gcd(3, 14) = 1$입니다($3$은 $2$, $7$, $14$로 나누어떨어지지 않습니다). $P_{14} = \{1, 3, 5, 9, 11, 13\}$이므로 $\varphi(14) = 6$이고, 정리에 의해 $3^6 \equiv 1 \pmod{14}$여야 합니다. 실제로 $3^6 = 729$이고 $729 - 1 = 728 = 14 \cdot 52$입니다. $P_{14}$의 원소에 $3$을 곱하면 $3, 9, 15, 27, 33, 39$이고 $14$로 나눈 나머지는 $3, 9, 1, 13, 5, 11$로 $P_{14}$의 원소를 한 번씩 모두 포함합니다.
:::

:::counterexample[x와 n이 서로소가 아니면 깨진다]
$n = 6$, $x = 2$이면 $\gcd(2, 6) \ge 2$입니다($2 \mid 2$, $2 \mid 6$). $P_6 = \{1, 5\}$이고($6$과 서로소가 아닌 수는 $2, 3, 4, 6$) $\varphi(6) = 2$인데, $2^2 = 4$이고 $4 - 1 = 3$은 $6$의 배수가 아니므로($3 = 6c$인 정수 $c$는 없습니다) $2^{\varphi(6)} \not\equiv 1 \pmod 6$입니다. 증명이 막히는 곳은 곱의 합동 $(x b_1) \cdots (x b_k) \equiv b_1 \cdots b_k$를 얻는 단계입니다. $P_6$의 나열 $b = (1, 5)$에 $x = 2$를 곱하면 $2 \cdot 1 = 2$, $2 \cdot 5 = 10 = 6 + 4$이고 $2$와 $4$는 $P_6$의 원소가 아니어서 [[multiplication-permutes-reduced-residues]]의 1이 깨집니다. 실제로 $(2 \cdot 1)(2 \cdot 5) = 20$이고 $b_1 b_2 = 5$이며 $20 - 5 = 15$는 $6$의 배수가 아니므로 $20 \not\equiv 5 \pmod 6$입니다.
:::

:::counterexample[지수 n − 1은 n = 9에서 통하지 않는다]
$n = 9$, $x = 2$이면 $\gcd(2, 9) = 1$입니다. $2^{\varphi(9)} = 2^6 = 64$이고 $64 - 1 = 63 = 9 \cdot 7$이어서 정리가 말하는 대로 $2^6 \equiv 1 \pmod 9$입니다. 그러나 $n - 1 = 8$을 지수로 쓰면 $2^8 = 256$이고 $256 - 1 = 255 = 9 \cdot 28 + 3$이므로 $2^8 \not\equiv 1 \pmod 9$입니다($255 = 9c$이면 $c = 28$일 때 $252$, $c = 29$일 때 $261$이어서 $255$는 $9$의 배수가 아닙니다). 이 정리의 지수는 $n - 1$이 아니라 $\varphi(n)$입니다.
:::

## 확인 질문

:::check[$n = 8$, $x = 3$에 오일러 정리를 적용해 보고 직접 계산해 확인하라.]
$P_8$은 $1, \dots, 8$ 가운데 $8$과 서로소인 수의 집합입니다. $8$의 양의 약수는 $1, 2, 4, 8$이고, 짝수는 $2$로 나누어떨어져 서로소가 아니며, $1, 3, 5, 7$은 $2$로 나누어떨어지지 않고 $8$보다 작으므로 $4$와 $8$로도 나누어떨어지지 않아 서로소입니다. 따라서 $P_8 = \{1, 3, 5, 7\}$이고 $\varphi(8) = 4$입니다. $\gcd(3, 8) = 1$이므로 $3^4 \equiv 1 \pmod 8$이어야 하고, 실제로 $3^4 = 81$, $81 - 1 = 80 = 8 \cdot 10$입니다.
:::

:::check[$n = 15$, $x = 2$에 오일러 정리를 적용하라. $\varphi(15)$를 먼저 구하라.]
$15$의 양의 약수는 $1, 3, 5, 15$이고, $1$부터 $15$ 가운데 $3$의 배수($3, 6, 9, 12, 15$)와 $5$의 배수($5, 10, 15$)는 $15$와 서로소가 아닙니다. 나머지 $1, 2, 4, 7, 8, 11, 13, 14$는 $3$, $5$, $15$로 나누어떨어지지 않으므로 서로소이고 $\varphi(15) = 8$입니다. $\gcd(2, 15) = 1$이므로 $2^8 \equiv 1 \pmod{15}$이고, 실제로 $2^8 = 256$, $256 - 1 = 255 = 15 \cdot 17$입니다.
:::
