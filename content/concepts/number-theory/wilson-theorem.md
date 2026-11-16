---
title: 윌슨 정리
title_en: Wilson's Theorem
aliases: [윌슨의 정리, Wilson's theorem]
kind: theorem
field: number-theory
msc: ["11A41"]
level: undergrad
summary: 소수 p에 대해 (p − 1)!은 p를 법으로 −1과 합동이고, 2 이상의 합성수 n에 대해서는 (n − 1)!이 n을 법으로 −1과 합동이 아니다.
requires: [factorial, inverse-pairing-modulo-p, product-over-a-finite-set, divisibility, divisibility-is-transitive, congruence-arithmetic, congruence-modulo-n, congruence-is-an-equivalence-relation, finite-set, prime-number, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.3절 Wilson's Theorem, Proposition 2.1.22, 진술 p.27, 증명 p.28, 예 p.27–28
    checked: original
    note: "출처의 진술은 'p > 1인 정수 p가 소수인 것은 정확히 (p − 1)! ≡ −1 (mod p)일 때이다'이다. 이 항목은 같은 내용을 두 방향으로 나누어, (1) 소수 p이면 (p − 1)! ≡ −1, (2) 2 이상의 합성수 n이면 (n − 1)! ≢ −1로 적었다(prime-number의 진술에 맞춰 '소수가 아닌 n ≥ 2'를 합성수로 읽는다). 출처의 증명은 p = 2를 'clear'라고 하고, p > 2에서 짝지은 곱 2·3···(p − 2) ≡ 1을 한 줄로 넘어간다. 이 항목은 p = 2, 3을 직접 계산하고, p ≥ 4에서 집합 {2, …, p − 2} 위의 곱이 1과 합동인 것을 inverse-pairing-modulo-p의 4(원소의 개수에 대한 강한 귀납법, 출처에 없음)로 보인다. 출처의 둘째 방향은 합성수 p ≥ 4의 소인수 ℓ을 쓰지만 이 항목은 소수일 필요 없이 1과 n 사이의 양의 약수 d를 쓴다(prime-number의 진술이 주는 약수). 출처는 ℓ < p이므로 ℓ | (p − 1)!이라고만 쓰고, 이 항목은 factorial의 2로 보인다. 출처의 역사 서술 'from the 1770s, ... first proved by Lagrange'는 쓰지 않았다. p = 5, 7과 n = 4, 6, 8, 9의 (n − 1)!은 출처 SAGE Example 2.1.24의 표(p.28)에 나머지로 나온다. 이 항목은 그 값을 직접 계산하고 짝과 약수 d를 덧붙였다. p = 11은 새로 골랐다(출처의 예는 p = 3, 17, 15와 Example 2.1.23의 p = 17 짝짓기이다)."
status: source-checked
added: 2026-11-16
---

:::statement
1. $p$가 소수이면 $(p - 1)! \equiv -1 \pmod p$이다. 여기서 $p - 1$은 자연수이고 $(p - 1)!$은 [[factorial|계승]]이다.
2. $n \ge 2$인 자연수 $n$이 소수가 아니면 $(n - 1)! \not\equiv -1 \pmod n$이다.

따라서 $n \ge 2$인 자연수 $n$이 소수인 것은 정확히 $(n - 1)! \equiv -1 \pmod n$일 때이다. $n = 1$은 소수도 합성수도 아니고 이 항목에서 다루지 않는다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 곱과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
1. If $p$ is a prime number, then $(p - 1)! \equiv -1 \pmod p$. Here $p - 1$ is a natural number and $(p - 1)!$ is the factorial.
2. If $n \ge 2$ is a natural number that is not prime, then $(n - 1)! \not\equiv -1 \pmod n$.

Hence for a natural number $n \ge 2$, $n$ is prime exactly when $(n - 1)! \equiv -1 \pmod n$. The number $n = 1$ is neither prime nor composite and is not treated here.
:::

## 직관

$(p - 1)!$은 $1$부터 $p - 1$까지를 모두 곱한 수입니다. 소수 $p$를 법으로 하면 이 수들은 [[inverse-pairing-modulo-p|짝]]끼리 곱해서 $1$이 되는 쌍으로 묶입니다. 자기 자신이 짝인 수는 $1$과 $p - 1$뿐이어서, 이 둘을 빼고 나머지를 쌍으로 묶으면 곱이 $1$이고 남는 것은 $1 \cdot (p - 1)$, 곧 $p - 1 \equiv -1$입니다. 이 비유가 맞아떨어지는 곳은 "쌍을 이루면 곱이 $1$"이라는 점이고, 어긋나는 곳은 짝이 서로 다른 두 수일 때만 쌍이 된다는 점입니다. 그래서 자기 자신이 짝인 $1$과 $p - 1$은 따로 다룹니다.

둘째 방향은 짝짓기가 필요 없습니다. $n$이 합성수이면 $1 < d < n$인 약수 $d$가 있고, $d$는 $(n - 1)!$의 인수이므로 $(n - 1)!$을 나눕니다. $(n - 1)! + 1$도 $n$의 배수라면 $d$가 $1$을 나누게 되어 모순입니다.

윌슨 정리가 실용적인 소수 판정법이라는 말은 하지 않습니다. 큰 수에서 $(n - 1)!$을 계산하는 방법은 다루지 않습니다.

## 증명

:::idea
소수 $p \ge 5$이면 $1$과 $p - 1$ 사이의 수 $\{2, \dots, p - 2\}$가 짝에 대해 닫혀 있고 자기 자신이 짝인 수가 없으므로 그 곱은 $1$과 합동이다. 그러면 $(p - 1)! = (p - 2)! \cdot (p - 1) \equiv p - 1 \equiv -1$이다. 합성수는 $1 < d < n$인 약수 $d$가 $(n - 1)!$과 $(n - 1)! + 1$을 둘 다 나누게 되어 모순이다.
:::

:::hint
$p = 2$, $p = 3$에서는 $\{2, \dots, p - 2\}$가 비어 있습니다. 이 두 경우는 $(p - 1)!$을 직접 계산하세요.
:::

:::hint
$p \ge 4$이면 $\{1, \dots, p - 2\}$에서 원소 $1$을 떼어 낸 집합이 $\{2, \dots, p - 2\}$입니다. [[product-over-a-finite-set]]의 3과 [[inverse-pairing-modulo-p]]의 4를 쓰세요.
:::

:::hint
2에서 $d$는 $n$의 약수이고 $1 \le d \le n - 1$입니다. [[factorial]]의 2를 쓰세요.
:::

:::proof
**1.** $p$가 소수이다. $p \ge 2$이다($1$과 $p$가 $p$의 서로 다른 양의 약수이므로 $p \ne 1$이고, (Z1)에 의해 $p \ge 2$). 합동의 정의와 [[congruence-is-an-equivalence-relation|동치관계 성질]]을 쓴다. $x \equiv -1 \pmod p$인 것은 $p \mid (x - (-1)) = x + 1$일 때이다.

$p = 2$이면 $(p - 1)! = 1! = 1$([[factorial]]의 1)이고 $1 + 1 = 2 = 2 \cdot 1$이므로 $1 \equiv -1 \pmod 2$이다.

$p = 3$이면 $(p - 1)! = 2! = 1! \cdot 2 = 2$([[factorial]]의 1)이고 $2 + 1 = 3 = 3 \cdot 1$이므로 $2 \equiv -1 \pmod 3$이다.

$p \ne 2$, $p \ne 3$이라 하자. $p \ge 2$이고 $p \ne 2$이므로 $p > 2$이고 (Z1)에 의해 $p \ge 3$, $p \ne 3$이므로 $p > 3$이고 (Z1)에 의해 $p \ge 4$이다. 그러면 (Z7)에 의해 $p - 2 \ge 2$이다.

$S_0 = \{s \in \mathbb{Z} : 2 \le s \le p - 2\}$라 하자. [[inverse-pairing-modulo-p]]의 4를 $S_0$에 쓸 수 있음을 보인다.

- $S_0 \subseteq \{1, \dots, p - 1\}$이다. $2 \le s$에서 $1 \le s$($1 < 2$, (Z6))이고, $s \le p - 2$와 (L3)의 $p - 2 < p - 1$에서 $s \le p - 1$이다.
- $S_0 \ne \emptyset$이다. $2 \in S_0$이다($2 \le 2$이고 $2 \le p - 2$).
- $1 \notin S_0$이다. $1 < 2 \le s$이면 (Z6)에 의해 $1 < s$이므로 $s \ne 1$이다. $p - 1 \notin S_0$이다. $p - 2 < p - 1$이므로 (L1)에 의해 $p - 1 \le p - 2$는 성립하지 않는다.
- $a \in S_0$이면 $a^* \in S_0$이다. $a^* \in \{1, \dots, p - 1\}$이다. $a^* = 1$이면 [[inverse-pairing-modulo-p]]의 3에 의해 $1^* = 1$이므로 2에 의해 $a = (a^*)^* = 1^* = 1$이고 $a \ge 2$에 어긋난다. $a^* = p - 1$이면 $(p - 1)^* = p - 1$이고 $a = (a^*)^* = p - 1$이지만 $a \le p - 2 < p - 1$이어서 (L1)에 어긋난다. 따라서 $a^* \ne 1$이고 $1 \le a^*$이므로 $1 < a^*$이고 (Z1)에 의해 $2 \le a^*$이다. 또 $a^* \ne p - 1$이고 $a^* \le p - 1$이므로 $a^* < p - 1$이고 (Z1)과 (Z7)에 의해 $a^* \le p - 2$이다. 곧 $a^* \in S_0$이다.

따라서 [[inverse-pairing-modulo-p]]의 4에 의해 $\prod_{s \in S_0} s \equiv 1 \pmod p$이다.

이제 곱을 쪼갠다. $p - 2 \ge 2$이므로 $p - 2$는 자연수이고, [[factorial]]의 1에 의해 $(p - 1)! = (p - 2)! \cdot (p - 1)$이다. [[factorial]]의 3에 의해 $(p - 2)! = \prod_{s \in \{1, \dots, p - 2\}} s$이고, $\{1, \dots, p - 2\}$는 원소를 $p - 2 \ge 2$개 가지며($\{1, \dots, n\}$의 원소 개수는 [[finite-set]]의 (F2)) $1$이 그 원소이다. [[product-over-a-finite-set]]의 3에 의해
$$\prod_{s \in \{1, \dots, p - 2\}} s = \Bigl(\prod_{s \in \{1, \dots, p - 2\} - \{1\}} s\Bigr) \cdot 1$$
이다. $\{1, \dots, p - 2\} - \{1\} = S_0$이다. 실제로 $s$가 이 집합의 원소이면 $1 \le s \le p - 2$이고 $s \ne 1$이므로 $1 < s$, (Z1)에 의해 $2 \le s$이다. 거꾸로 $s \in S_0$이면 $1 \le s \le p - 2$(앞에서 $1 < s$)이고 $s \ne 1$이다. 따라서 $(p - 2)! = (\prod_{s \in S_0} s) \cdot 1 \equiv 1 \cdot 1 = 1 \pmod p$이다([[congruence-arithmetic|합동의 계산 법칙]]의 2). 그러므로
$$(p - 1)! = (p - 2)! \cdot (p - 1) \equiv 1 \cdot (p - 1) = p - 1 \pmod p$$
이다. $(p - 1) - (-1) = p = p \cdot 1$이므로 $p - 1 \equiv -1 \pmod p$이고, 추이성에 의해 $(p - 1)! \equiv -1 \pmod p$이다.

**2.** $n \ge 2$인 자연수가 소수가 아니라 하자. [[prime-number]]의 진술에 의해 $1$과 $n$ 이외의 양의 약수 $d$가 있다. $d$는 $n$의 양의 약수이므로 $1 \le d \le n$이고, $d \ne 1$, $d \ne n$이므로 $1 < d < n$이다. (Z1)에 의해 $d \ge 2$이고 $d + 1 \le n$이어서 (Z7)에 의해 $d \le n - 1$이다. 따라서 $1 \le d \le n - 1$이고, $n - 1 \ge 1$은 자연수이다.

$(n - 1)! \equiv -1 \pmod n$이라고 가정하자. 그러면 $n \mid ((n - 1)! + 1)$이다. $d \mid n$이므로 [[divisibility-is-transitive|추이성]]에 의해 $d \mid ((n - 1)! + 1)$이다. 또 $1 \le d \le n - 1$이므로 [[factorial]]의 2에 의해 $d \mid (n - 1)!$이다. $(n - 1)! = du$, $(n - 1)! + 1 = dv$인 정수 $u$, $v$가 있고, 두 식을 빼면 $1 = d(v - u)$이다. $v - u$는 정수이므로 $d \mid 1$이다. $d$는 자연수 $1$의 양의 약수이므로 [[prime-number]]의 진술에 의해 $d \le 1$이고, 이는 $2 \le d$와 (L1)에 의해 함께 성립할 수 없다. 따라서 $(n - 1)! \not\equiv -1 \pmod n$이다.

마지막 문장(소수인 것은 정확히 합동일 때)은 1과 2에서 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[p = 11]
$(p - 1)! = 10! = 3628800$이고 $10! + 1 = 3628801 = 11 \cdot 329891$이므로 $10! \equiv -1 \pmod{11}$입니다. 증명의 과정으로는, [[inverse-pairing-modulo-p]]의 예에서 $S_0 = \{2, \dots, 9\}$가 $(2, 6)$, $(3, 4)$, $(5, 9)$, $(7, 8)$ 네 쌍으로 묶이고 각 쌍의 곱이 $12$, $12$, $45$, $56$으로 $11$로 나눈 나머지가 모두 $1$이라서 $\prod_{s \in S_0} s \equiv 1$입니다. 그래서 $10! = 1 \cdot (\prod_{s \in S_0} s) \cdot 10 \equiv 10 \equiv -1$입니다.
:::

:::example[p = 7]
$p = 7$이면 $S_0 = \{2, 3, 4, 5\}$이고 $2 \cdot 4 = 8 = 7 + 1$, $3 \cdot 5 = 15 = 2 \cdot 7 + 1$이므로 $2^* = 4$, $3^* = 5$입니다. $6! = 720$이고 $720 + 1 = 721 = 7 \cdot 103$이므로 $6! \equiv -1 \pmod 7$입니다.
:::

:::counterexample[합성수 n = 4, 6, 9]
2에 의해 합성수에서는 $(n - 1)! \equiv -1$이 아닙니다. $n = 4$이면 $3! = 6$이고 $6 + 1 = 7$은 $4$의 배수가 아니므로($4 \cdot 1 = 4$, $4 \cdot 2 = 8$) $3! \not\equiv -1 \pmod 4$입니다. 증명의 약수는 $d = 2$이고 $2 \mid 3!$이며 $2 \mid 4$입니다. $n = 6$이면 $5! = 120$이고 $120 + 1 = 121 = 6 \cdot 20 + 1$이므로 $6 \nmid 121$입니다. $n = 9$이면 $8! = 40320$이고 $40320 + 1 = 40321 = 3 \cdot 13440 + 1$이므로 $3 \nmid 40321$이어서 $9 \nmid 40321$입니다($9 \mid 40321$이면 $3 \mid 9$이므로 $3 \mid 40321$이 되어야 합니다).
:::

## 확인 질문

:::check[$p = 5$에서 $4! \equiv -1 \pmod 5$임을 직접 계산하고, $S_0 = \{2, 3\}$의 짝짓기를 말하라.]
$4! = 24$이고 $24 + 1 = 25 = 5 \cdot 5$이므로 $4! \equiv -1 \pmod 5$입니다. $2 \cdot 3 = 6 = 5 + 1$이므로 $2^* = 3$, $3^* = 2$이고 $S_0 = \{2, 3\}$은 한 쌍으로 묶여 $\prod_{s \in S_0} s = 6 \equiv 1$입니다.
:::

:::check[$n = 8$일 때 $(n - 1)! \equiv -1 \pmod n$이 아님을 2의 증명대로 보여라.]
$8$은 소수가 아니고 $d = 2$는 $8$의 양의 약수이며 $1 < 2 < 8$입니다. $7! = 5040$이고 $2 \mid 5040$이며, $2 \mid 8$이므로 $8 \mid 5041$이면 $2 \mid 5041$이어야 합니다. 그런데 $5041 = 2 \cdot 2520 + 1$이므로 $2 \nmid 5041$이고($2$로 나눈 나머지가 $1$), 따라서 $8 \nmid 5041$, 곧 $7! \not\equiv -1 \pmod 8$입니다.
:::
