---
title: 페르마의 소정리
title_en: Fermat's Little Theorem
aliases: [페르마의 작은 정리, 페르마 소정리, Fermat's little theorem]
kind: corollary
field: number-theory
msc: ["11A07"]
level: undergrad
summary: p가 소수이고 a가 p로 나누어떨어지지 않는 정수이면 a의 p − 1제곱은 p를 법으로 1과 합동이고, 모든 정수 a에 대해 a의 p제곱은 p를 법으로 a와 합동이다.
requires: [euler-theorem, euler-phi-function, finite-product, congruence-arithmetic, congruence-modulo-n, congruence-is-an-equivalence-relation, greatest-common-divisor, divisibility, divisibility-is-transitive, prime-number, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.2절 Euler's Theorem, p.25 (Fermat's Little Theorem이라는 이름), 2.4절 Primality Testing, Theorem 2.4.1 (Pseudoprimality)의 증명 첫 문장, p.36
    checked: original
    note: "출처는 번호 붙은 진술로 페르마의 소정리를 두지 않는다. p.25는 n이 소수일 때 이 사실을 'Fermat's Little Theorem'이라 부르고 일반의 n에서는 'Euler's Theorem'이라 부른다고만 쓴다. Theorem 2.4.1은 'p > 1이 소수인 것은 a ≢ 0 (mod p)인 모든 a에 대해 a^(p−1) ≡ 1 (mod p)일 때이다'라는 쌍조건 진술이고, 소수 쪽 증명은 'the statement follows from Theorem 2.1.20'이라는 한 줄이다. 이 항목의 (1)은 그 소수 쪽 방향이며 a ≢ 0 (mod p) 대신 같은 뜻인 'p가 a를 나누지 않는다'로 적었다. 오일러 정리에서 ϕ(p) = p − 1과 gcd(a, p) = 1을 얻는 단계를 이 항목이 직접 쓴다. 출처의 쌍조건 진술 가운데 합성수 쪽(역)은 이 항목에서 주장하지 않는다. (2) a^p ≡ a (mod p)는 출처에 이 꼴의 진술이 없고 이 사이트가 (1)과 a^p = a^(p−1)·a(유한 곱의 정의)에서 끌어냈다. 예시, 반례, 확인 질문의 수는 새로 골랐다(출처 Example 2.4.2의 p = 323은 쓰지 않았다)."
status: source-checked
added: 2026-11-16
---

:::statement
$p$가 소수라 하자. $p \ge 2$이므로 $p - 1$은 자연수이고, 거듭제곱 $a^{p-1}$, $a^p$는 [[congruence-arithmetic|합동식의 계산에 관한 항목]]의 진술에서 정한 뜻(모든 자리가 $a$인 길이 $p - 1$, $p$인 열의 [[finite-product|곱]])을 갖는다. 정수 $a$에 대하여 다음이 성립한다.

1. $p \nmid a$이면 $a^{p-1} \equiv 1 \pmod p$이다.
2. $a^p \equiv a \pmod p$이다. ($p \mid a$인 경우도 포함한다.)

이 항목은 1의 역(어떤 $p > 1$이 이 성질을 가지면 소수인가)을 주장하지 않는다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)을 인용하고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $p$ be a prime number. Since $p \ge 2$, the integer $p - 1$ is a natural number, and the powers $a^{p-1}$ and $a^p$ have the meaning fixed for powers (the product of the sequence of length $p - 1$, respectively $p$, in which every term is $a$). For every integer $a$ the following hold.

1. If $p \nmid a$, then $a^{p-1} \equiv 1 \pmod p$.
2. $a^p \equiv a \pmod p$. (This includes the case $p \mid a$.)

This entry does not claim the converse of 1 (whether an integer $p > 1$ with this property must be prime).
:::

## 직관

시계의 눈금이 $p$칸이고 $p$가 소수라고 합시다. $0$이 아닌 눈금($1$부터 $p - 1$까지)은 모두 $p$와 서로소이므로 [[euler-theorem|오일러 정리]]가 곧바로 적용되고, $\varphi(p) = p - 1$이어서 지수가 $p - 1$이 됩니다. 이것이 1입니다. 2는 같은 말에 $a$를 한 번 더 곱한 것이고, $p \mid a$인 눈금 $0$에서도 양변이 모두 $0$이어서 성립합니다. 이 비유가 맞아떨어지는 곳은 "소수이면 $0$ 말고는 전부 서로소"라는 점이고, 어긋나는 곳은 합성수에서는 서로소가 아닌 눈금이 $0$ 말고도 많아서 지수 $n - 1$로는 통하지 않는다는 점입니다.

$p \mid a$이면 1은 틀립니다. $a^{p-1}$이 $p$의 배수가 되기 때문입니다(반례). 2는 이 경우까지 한꺼번에 덮도록 $a$를 한 번 더 곱한 꼴입니다. 이 항목은 1을 [[euler-theorem|오일러 정리]]의 한 경우로 보이고, 2를 그 결과에서 끌어냅니다.

## 증명

:::idea
$p$가 소수이므로 $p \nmid a$이면 $\gcd(a, p) = 1$이고 $\varphi(p) = p - 1$이어서 오일러 정리가 1을 준다. 2는 $a^p = a^{p-1} \cdot a$와 1에서 나오고, $p \mid a$이면 양변이 모두 $p$의 배수이다.
:::

:::hint
$\gcd(a, p)$는 $p$의 양의 약수입니다. $p$가 소수이면 어떤 수들이 가능하고, $p \nmid a$이면 어느 쪽인가요?
:::

:::hint
$a^p$는 모든 자리가 $a$인 길이 $p$인 열의 곱입니다. 곱의 정의를 열의 처음 $p - 1$개와 마지막 자리로 나누어 읽으세요.
:::

:::proof
$1$과 $p$는 $p$의 양의 약수이고 소수의 양의 약수는 정확히 두 개이므로 $1 \ne p$이다. $p$는 양의 정수이므로 (Z1)에 의해 $1 \le p$이고 $1 \ne p$이므로 $1 < p$이며, (Z1)에 의해 $2 \le p$이다. 따라서 (Z7)에 의해 $p - 1 \ge 1$이고 $p - 1$은 자연수이다.

**1.** $p \nmid a$라 하자. $g = \gcd(a, p)$라 하자($p \ne 0$이므로 정해진다). [[greatest-common-divisor]]의 성질 (i)에 의해 $g \ge 1$이고 (Z8), (Z6)에 의해 $g > 0$이다. $g$는 $a$와 $p$의 공약수이므로 $g \mid p$이고, 곧 $g$는 $p$의 양의 약수이다. $p$가 소수이므로 $g = 1$이거나 $g = p$이다. $g = p$이면 $g \mid a$에서 $p \mid a$가 되어 가정에 어긋난다. 따라서 $g = 1$, 곧 $\gcd(a, p) = 1$이다. [[euler-theorem|오일러 정리]]에 의해 $a^{\varphi(p)} \equiv 1 \pmod p$이고, [[euler-phi-function]]의 4에 의해 $\varphi(p) = p - 1$이므로 $a^{p-1} \equiv 1 \pmod p$이다.

**2.** 먼저 $a^p = a^{p-1} \cdot a$임을 보인다. $a^p$는 모든 자리가 $a$인 길이 $p$인 열 $u_1, \dots, u_p$의 곱이다. $p - 1 \ge 1$이므로 [[finite-product]]의 정의에 의해 이 곱은 처음 $p - 1$개로 이루어진 열의 곱에 $u_p$를 곱한 것, $(u_1 \cdots u_{p-1}) \cdot u_p$이다. 처음 $p - 1$개로 이루어진 열은 모든 자리가 $a$인 길이 $p - 1$인 열이므로 그 곱은 $a^{p-1}$이고, $u_p = a$이다. 따라서 $a^p = a^{p-1} \cdot a$이다.

$p \nmid a$인 경우: 1에 의해 $a^{p-1} \equiv 1 \pmod p$이고 $a \equiv a \pmod p$이므로 [[congruence-arithmetic|합동의 계산 법칙]]의 2에 의해 $a^{p-1} \cdot a \equiv 1 \cdot a = a \pmod p$이다. 곧 $a^p \equiv a \pmod p$이다.

$p \mid a$인 경우: $a^p$는 모든 자리가 $a$인 열의 곱이므로 (P4)에 의해 첫째 인수 $a$가 $a^p$를 나눈다([[finite-product]]). $p \mid a$이고 $a \mid a^p$이므로 [[divisibility-is-transitive|나누어떨어짐의 추이성]]에 의해 $p \mid a^p$이다. 그러므로 $a^p = pu$, $a = pv$인 정수 $u$, $v$가 있고 $a^p - a = p(u - v)$이다. $u - v$는 정수이므로 $p \mid (a^p - a)$이고 $a^p \equiv a \pmod p$이다. $\blacksquare$
:::

## 예시와 반례

:::example[p = 7]
$p = 7$, $a = -2$이면 $7 \nmid -2$입니다. $(-2)^6 = 64$이고 $64 - 1 = 63 = 7 \cdot 9$이므로 $(-2)^{6} \equiv 1 \pmod 7$입니다. 또 $a = 3$이면 $3^7 = 2187$이고 $3^7 = 3^6 \cdot 3 = 729 \cdot 3$이며 $729 - 1 = 728 = 7 \cdot 104$이므로 $3^6 \equiv 1$이고, 따라서 $3^7 \equiv 3 \pmod 7$입니다($2187 - 3 = 2184 = 7 \cdot 312$).
:::

:::example[p | a인 경우, p = 5]
$p = 5$, $a = 10$이면 $5 \mid 10$입니다. $10^5 = 100000$이고 $100000 - 10 = 99990 = 5 \cdot 19998$이므로 $10^5 \equiv 10 \pmod 5$입니다. 양변이 모두 $0$과 합동입니다.
:::

:::counterexample[p | a이면 1은 틀린다]
$p = 5$, $a = 5$이면 $a^{p-1} = 5^4 = 625$이고 $625 - 1 = 624$는 $5$의 배수가 아닙니다($5 \cdot 124 = 620$, $5 \cdot 125 = 625$). 그래서 1에는 $p \nmid a$가 필요합니다. 증명이 막히는 곳은 $\gcd(a, p) = 1$을 얻는 단계입니다. $p \mid a$이면 $p$가 $a$와 $p$의 공약수이므로 $\gcd(a, p) \ge p \ge 2$이어서 $1$이 아닙니다.
:::

:::counterexample[p가 소수가 아니면 2가 깨진다]
$n = 4$, $a = 2$이면 $a^n = 2^4 = 16$이고 $16 - 2 = 14$는 $4$의 배수가 아니므로($4 \cdot 3 = 12$, $4 \cdot 4 = 16$) $2^4 \not\equiv 2 \pmod 4$입니다. 2는 소수 $p$에 대한 진술이고 법이 합성수이면 같은 꼴이 늘 성립하지는 않습니다.
:::

## 확인 질문

:::check[$p = 3$일 때 $a = 0, 1, 2$ 각각에 대해 $a^3 \equiv a \pmod 3$임을 확인하라.]
$0^3 = 0$이므로 $0 \equiv 0$입니다. $1^3 = 1$이므로 $1 \equiv 1$입니다. $2^3 = 8$이고 $8 - 2 = 6 = 3 \cdot 2$이므로 $2^3 \equiv 2 \pmod 3$입니다.
:::

:::check[$p = 7$, $a = 5$에서 $a^{p-1} \equiv 1 \pmod p$임을 직접 계산으로 확인하고, 이것이 어느 경우에 해당하는지 말하라.]
$7 \nmid 5$이므로 1의 경우입니다. $5^6 = 15625$이고 $15625 - 1 = 15624 = 7 \cdot 2232$이므로 $5^6 \equiv 1 \pmod 7$입니다.
:::
