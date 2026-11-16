---
title: 4x − 1 꼴의 소수
title_en: Primes of the Form 4x − 1
aliases: [4로 나눈 나머지가 3인 소수, 4k+3 꼴의 소수, primes congruent to 3 mod 4]
kind: theorem
field: number-theory
msc: ["11A41"]
level: undergrad
summary: 소수 p₁, …, p_k가 어떻게 주어져도 이들 어느 것과도 다르고 4로 나눈 나머지가 3인 소수가 있다. 곧 4x − 1 꼴의 소수가 끝없이 있다.
requires: [prime-factorization-exists, finite-product, prime-number, congruence-modulo-n, congruence-arithmetic, residues-modulo-n, divisibility, even-and-odd, proof-by-contradiction, negation-of-quantified-statements, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.2.4절 Primes of the Form ax + b, Proposition 1.2.5, 진술 p.13, 증명과 Example 1.2.6 p.14
    checked: original
    note: "출처는 'There are infinitely many primes of the form 4x − 1'(x는 자연수)을 진술하고, 서로 다른 4x − 1 꼴 소수 p₁, …, p_n에 대해 N = 4p₁⋯p_n − 1을 두어 새 소수를 찾는다. 이 항목의 증명도 같은 N을 쓴다. 출처가 증명 없이 넘어간 곳을 이 사이트가 메웠다. 곧 (a) 'p_i ∤ N'(p_i가 4P와 N을 모두 나누면 1을 나눈다), (b) 소인수가 모두 4x + 1 꼴이면 N도 4x + 1 꼴이라는 것(congruence-arithmetic의 (6)), (c) N이 홀수이므로 소인수가 홀수라는 것, (d) 홀수 소수가 4x + 1 꼴이거나 4x − 1 꼴이라는 것(나눗셈 정리에서 온 residues-modulo-n의 (1)과 0 ≤ r ≤ 3인 정수의 열거), (e) N의 소인수분해의 존재(prime-factorization-exists)이다. 진술은 세 곳이 출처와 다르다. 첫째, '무한히 많다'는 무한집합을 쓰므로 infinitely-many-primes와 같이 '소수 p₁, …, p_k가 주어지면 이들과 다른 소수가 있다'로 썼다. 둘째, 출처는 p_i가 서로 다른 4x − 1 꼴 소수라고 가정하지만 증명은 그 가정을 쓰지 않으므로(p_i가 P를 나눈다는 것만 쓴다) 이 항목은 임의의 소수 p₁, …, p_k로 썼고, 같은 소수가 되풀이되어도 된다. 셋째, '4x − 1 꼴'(x ∈ ℕ)을 '4로 나눈 나머지가 3'으로 바꿔 썼다. 둘이 양의 정수에서 같다는 것은 이 항목의 참고에서 보인다. 출처는 4x + 1 꼴에는 이 증명이 통하지 않는다고 덧붙이는데(p.14), 반례 블록에서 3·7 = 21로 확인했다. 예시의 수는 새로 골랐다(출처 Example 1.2.6은 p₁ = 3, p₂ = 7에서 시작한다)."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$k$가 자연수이고 $p_1, p_2, \dots, p_k$가 소수라 하자. 그러면 $p_1, \dots, p_k$ 어느 것과도 다르고 $4$로 나눈 나머지가 $3$인 소수 $q$가 존재한다. 곧 $q$는 소수이고, [[residues-modulo-n]]의 (1)에서 정한 나머지가 $3$이며, 모든 $i \in \{1, \dots, k\}$에 대하여 $q \ne p_i$이다. 여기서 정수 $q$를 $4$로 나눈 나머지가 $3$인 것은 정확히 $q \equiv 3 \pmod 4$일 때이다([[residues-modulo-n]]의 (1): $0 \le r \le 3$이고 $q \equiv r \pmod 4$인 $r$이 정확히 하나이고 그것이 나머지이다).

이 사이트에서 "$4x - 1$ 꼴의 소수는 무한히 많다"는 이 진술을 뜻한다. 소수 전체나 이런 소수 전체의 집합이 무한집합이라는 것은 여기서 주장하지 않는다. $p_1, \dots, p_k$는 서로 달라도 같아도 되고, $4$로 나눈 나머지가 $3$이라는 조건도 필요 없다.
:::

:::english
Let $k$ be a natural number and let $p_1, p_2, \dots, p_k$ be primes. Then there exists a prime $q$ that is different from each of $p_1, \dots, p_k$ and whose remainder on division by $4$ is $3$. That is, $q$ is a prime, its remainder is $3$ in the sense of part (1) of the entry on residues, and $q \ne p_i$ for every $i \in \{1, \dots, k\}$. Here the remainder of an integer $q$ on division by $4$ is $3$ exactly when $q \equiv 3 \pmod 4$ (by part (1) of that entry, there is exactly one $r$ with $0 \le r \le 3$ and $q \equiv r \pmod 4$, and it is the remainder).

On this site, "there are infinitely many primes of the form $4x - 1$" means this statement. We do not claim here that the set of all primes, or the set of such primes, is an infinite set. The primes $p_1, \dots, p_k$ may be distinct or repeated, and they need not have remainder $3$ on division by $4$.
:::

## 직관

$4$로 나눈 나머지가 $3$인 수는 $3, 7, 11, 15, 19, \dots$입니다. 이 가운데 소수가 끝없이 나올지를 묻는 정리입니다. 소수가 무한히 많다는 유클리드의 방법을 흉내 냅니다. [[infinitely-many-primes|소수는 무한히 많다]]에서는 소수들을 곱하고 $1$을 더했지만, 여기서는 $4$를 곱하고 $1$을 뺍니다. 그 수 $N$은 $4$로 나눈 나머지가 $3$입니다.

핵심은 이런 $N$의 소인수가 모두 $4$로 나눈 나머지가 $1$일 수는 없다는 점입니다. 나머지가 $1$인 수끼리 곱하면 나머지가 $1$이기 때문입니다. 시계 비유로, $4$칸짜리 시계에서 $1$칸 위치에 놓인 수들을 곱하면 계속 $1$칸 위치에 남고, $N$은 $3$칸 위치에 있으니 어긋납니다. 그래서 $N$의 소인수 가운데 나머지가 $3$인 것이 있습니다. 같은 방법이 $4x + 1$ 꼴에는 통하지 않습니다. 나머지가 $3$인 소수끼리 곱하면 나머지가 $1$이 될 수 있기 때문입니다(아래 반례).

## 증명

:::idea
$P = p_1 \cdots p_k$로 두고 $N = 4P - 1$을 생각한다. $N$은 홀수이고 $4$로 나눈 나머지가 $3$이다. $N$의 소인수는 모두 홀수여서 $4$로 나눈 나머지가 $1$ 또는 $3$이고, 모두 $1$이면 곱 $N$의 나머지도 $1$이 되어 모순이다. 따라서 나머지가 $3$인 소인수 $q$가 있고, $q$가 어떤 $p_i$와 같으면 $q \mid 1$이 되어 모순이다.
:::

:::hint
$N = 4P - 1$이 $3$과 합동임을 $N - 3$을 $4$의 배수로 써서 보이세요. 또 $N$을 소수들의 곱으로 쓰면 인수들은 홀수입니다. 왜 그럴까요?
:::

:::hint
$4$로 나눈 나머지는 $0$, $1$, $2$, $3$ 가운데 하나입니다. 홀수는 $0$이나 $2$가 될 수 없습니다. 인수들의 나머지가 모두 $1$이라면 [[congruence-arithmetic|합동의 계산 법칙]]의 (6)에서 무엇이 나옵니까?
:::

:::hint
소인수 $q$가 어떤 $p_i$와 같다고 가정하면 $q$는 $P$도 나누고 $N$도 나눕니다. $4P - N$은 얼마입니까?
:::

:::proof
이 증명이 쓰는 성질은 [[prime-number]]의 (Z1), (Z3), [[well-ordering-principle]]의 (Z5)–(Z8), (L1), (L2), 같은 항목에서 증명 없이 쓰기로 한 정수의 계산 법칙과 구체적인 정수의 등식과 부등식, 그리고 정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)이다. 합동은 법 $4$에 대한 것이다.

**소수는 $2$ 이상이다.** $p$가 소수이면 자연수이므로 (Z1)에 의해 $p \ge 1$이다. [[prime-number]]의 진술에 의해 $1$은 소수가 아니므로 $p \ne 1$이고 $p > 1$이며, (Z1)에 의해 $p \ge 2$이다.

**$N$의 정의.** $P = p_1 p_2 \cdots p_k$로 쓴다([[finite-product]]). 모든 $p_i$는 $2$ 이상이므로 양의 정수이고, (P5)에 의해 $P$는 양의 정수이며 $p_1 \le P$이다. $p_1 \ge 2$이므로 (Z6)에 의해 $P \ge 2$이다. $N = 4P - 1$로 둔다. $N = 4P - 1 = 4(P - 1) + 3$이고 $P - 1 \ge 1$이므로 (Z3), (Z7)을 쓰면 $N \ge 4 + 3 = 7$이다. 특히 $N \ge 2$이다.

**$N$의 성질 두 가지.** (가) $N - 3 = 4P - 4 = 4(P - 1)$이고 $P - 1$은 정수이므로 $N \equiv 3 \pmod 4$이다. (나) $N = 2(2P - 1) + 1$이고 $2P - 1$은 정수이므로 $N$은 홀수이다. [[even-and-odd]]에서 받아들인 대로 $N$은 짝수가 아니다.

**$N$의 소인수분해.** [[prime-factorization-exists]]에 의해 소수 $q_1, \dots, q_m$($m \ge 1$)이 있어 $N = q_1 q_2 \cdots q_m$이다. [[finite-product]]의 (P4)에 의해 각 $q_j$는 $N$을 나눈다. 각 $q_j$는 홀수이다. $q_j$가 짝수라 하면 $q_j = 2s$인 정수 $s$가 있고, $q_j \mid N$이므로 $N = q_j t = 2(st)$인 정수 $t$가 있어 $N$이 짝수가 된다. 이는 (나)와 모순이다.

**각 $q_j$는 $4$로 나눈 나머지가 $1$ 또는 $3$이다.** 각 $q_j$에 대하여 [[residues-modulo-n]]의 (1)에 의해 $q_j \equiv r \pmod 4$이고 $0 \le r \le 3$인 정수 $r$이 있다. 이 $r$은 $0, 1, 2, 3$ 가운데 하나이다. 실제로 $0 \le r$이므로 $r = 0$이거나 $r > 0$이고, $r > 0$이면 (Z1)에 의해 $r \ge 1$이다. $r \ge 1$이면 $r = 1$이거나 $r > 1$이고, $r > 1$이면 (Z1)에 의해 $r \ge 2$이다. $r \ge 2$이면 $r = 2$이거나 $r > 2$이고, $r > 2$이면 (Z1)에 의해 $r \ge 3$이다. $r \le 3$이므로 $r \ge 3$이면 (L2)에 의해 $r = 3$이다. $r = 0$이면 $q_j - 0 = 4s$인 정수 $s$가 있어 $q_j = 2(2s)$가 짝수이고, $r = 2$이면 $q_j - 2 = 4s$인 정수 $s$가 있어 $q_j = 2(2s + 1)$이 짝수이다. $q_j$는 홀수이므로 모두 모순이다. 따라서 $r = 1$ 또는 $r = 3$이다.

**나머지가 $3$인 소인수가 있다.** [[proof-by-contradiction|귀류법]]으로 증명한다. 결론 "어떤 $j$에 대하여 $q_j \equiv 3 \pmod 4$이다"의 부정은 [[negation-of-quantified-statements]]에 의해 "모든 $j$에 대하여 $q_j \not\equiv 3 \pmod 4$이다"이다. 그렇다고 가정하자. 앞 단계에서 각 $q_j$의 $r$은 $1$ 또는 $3$이다. $r = 3$이면 $q_j \equiv 3$이므로 가정에 어긋나고, 따라서 모든 $j$에서 $r = 1$, 곧 $q_j \equiv 1 \pmod 4$이다. [[congruence-arithmetic|합동의 계산 법칙]]의 (6)에 의해 $N = q_1 \cdots q_m \equiv 1 \pmod 4$이다. 한편 (가)에서 $N \equiv 3 \pmod 4$이다. 그러면 정수 $N$에 대하여 $r = 1$과 $r = 3$이 모두 "$N \equiv r \pmod 4$이고 $0 \le r \le 3$"을 만족한다. [[residues-modulo-n]]의 (1)의 유일성에 의해 $1 = 3$이다. 그러나 $1 \ne 3$이다. 이 모순으로 가정이 틀렸고, $q_j \equiv 3 \pmod 4$인 $j$가 있다. 그 $q_j$를 $q$로 둔다. $q$는 소수이고 $q \equiv 3 \pmod 4$이다. [[residues-modulo-n]]의 (1)에 의해 $0 \le 3 \le 3$이므로 $q$를 $4$로 나눈 나머지는 $3$이다.

**$q$는 어느 $p_i$와도 다르다.** [[proof-by-contradiction|귀류법]]으로 증명한다. 어떤 $i$에 대하여 $q = p_i$라 가정한다. (P4)에 의해 $p_i \mid P$이므로 $q \mid P$이고 $P = qu$인 정수 $u$가 있다. 또 $q \mid N$이므로 $N = qv$인 정수 $v$가 있다. 그러면
$$1 = 4P - N = 4qu - qv = q(4u - v)$$
이다. $4u - v$는 정수이므로 $q \mid 1$이다. $q$는 $1$의 양의 약수이므로 [[prime-number]]의 진술("자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$")에 의해 $q \le 1$이다. 그런데 $q \ge 2$이므로 (Z6)에 의해 $2 \le 1$이다. 한편 (Z8)에 의해 $0 < 1$이므로 (Z7)에 의해 $1 < 2$이다. $1 < 2$와 $2 \le 1$은 (L1)에 의해 동시에 성립할 수 없으므로 모순이다. 따라서 모든 $i$에 대하여 $q \ne p_i$이다. $\blacksquare$
:::

:::remark[$4x - 1$ 꼴과 나머지 $3$의 관계]
출처의 "$4x - 1$ 꼴"은 자연수 $x$에 대한 $4x - 1$입니다. 양의 정수 $a$에 대하여 $a$가 어떤 자연수 $x$로 $a = 4x - 1$이라고 쓰이는 것은 정확히 $a \equiv 3 \pmod 4$일 때입니다.

($\Rightarrow$) $a = 4x - 1$이면 $a - 3 = 4x - 4 = 4(x - 1)$이고 $x - 1$은 정수이므로 $a \equiv 3 \pmod 4$입니다.

($\Leftarrow$) $a > 0$이고 $a \equiv 3 \pmod 4$이면 $a - 3 = 4m$인 정수 $m$이 있고 $a = 4(m + 1) - 1$입니다. $x = m + 1$로 두면 $x$는 정수입니다. $x \le 0$이라 하면 $m \le -1$이고 (Z3)에 의해 $4m \le -4$이며 $a = 4m + 3 \le -1$이어서 $a > 0$에 어긋납니다. (Z5)와 (Z1)에 의해 정수 $x$는 $x \le 0$이거나 $x \ge 1$이므로 $x \ge 1$이고 $x$는 자연수입니다.
:::

## 예시와 반례

:::example[소수 11, 19]
$p_1 = 11$, $p_2 = 19$이면 $P = 11 \cdot 19 = 209$이고 $N = 4 \cdot 209 - 1 = 835$입니다. $N - 3 = 832 = 4 \cdot 208$이므로 $N \equiv 3 \pmod 4$입니다. $835 = 5 \cdot 167$입니다($5 \cdot 167 = 835$). $5$는 소수이고 $5 - 1 = 4$이므로 $5 \equiv 1 \pmod 4$입니다. $167$은 소수이고(이 사이트의 도구로 확인하지 않고 알려 주는 사실입니다) $167 - 3 = 164 = 4 \cdot 41$이므로 $167 \equiv 3 \pmod 4$입니다. 이 경우 $q = 167$이고 $11$, $19$ 어느 것과도 다릅니다. $N$의 소인수 가운데 나머지가 $1$인 $5$가 섞여 있어도 나머지가 $3$인 소인수 $167$이 있습니다.
:::

:::example[소수 7 하나]
$k = 1$, $p_1 = 7$이면 $P = 7$이고 $N = 27 = 3 \cdot 3 \cdot 3$입니다. $27 - 3 = 24 = 4 \cdot 6$이므로 $N \equiv 3 \pmod 4$이고, 소인수는 $3, 3, 3$이며 $3 \equiv 3 \pmod 4$이므로 $q = 3$입니다. $3 \ne 7$입니다. $N$ 자신은 소수가 아니어도 됩니다.
:::

:::example[$4$로 나눈 나머지가 $3$이 아닌 소수에서 시작]
$k = 1$, $p_1 = 2$이면 $P = 2$이고 $N = 7$입니다. $7 - 3 = 4 = 4 \cdot 1$이므로 $7 \equiv 3 \pmod 4$이고 $q = 7 \ne 2$입니다. 정리는 $p_i$가 나머지 $3$이라는 조건을 요구하지 않습니다.
:::

:::counterexample[$4x + 1$ 꼴에는 같은 방법이 통하지 않는다]
증명은 "나머지가 $1$인 수들의 곱은 나머지가 $1$"이라는 사실로 $N \equiv 3$과 어긋나게 했습니다. $4P + 1$로 바꾸면 $N \equiv 1$이어서 어긋나는 일이 없습니다. 게다가 나머지가 $3$인 소수끼리의 곱이 나머지 $1$일 수 있습니다. $3 \equiv 3$, $7 \equiv 3 \pmod 4$이지만 $3 \cdot 7 = 21$이고 $21 - 1 = 20 = 4 \cdot 5$이므로 $21 \equiv 1 \pmod 4$입니다. 그래서 $N \equiv 1$인 수의 소인수가 모두 나머지 $3$일 수 있고, "나머지가 $1$인 소인수가 있다"는 결론을 이끌어낼 수 없습니다.
:::

:::counterexample[$N$이 소수라고 하기]
"$N = 4P - 1$은 소수이다"는 틀립니다. 위의 $N = 835 = 5 \cdot 167$과 $N = 27 = 3 \cdot 3 \cdot 3$이 그 예입니다. 증명이 주는 것은 $N$의 소인수 가운데 나머지가 $3$인 것이지 $N$ 자신이 아닙니다.
:::

## 확인 질문

:::check[$p_1 = 3$, $p_2 = 5$, $p_3 = 7$일 때 $N$을 구하고 $N \equiv 3 \pmod 4$임을 보여라. $N$이 소수라는 것을 알려 줄 때 정리가 주는 $q$는 무엇인가?]
$P = 3 \cdot 5 \cdot 7 = 105$이고 $N = 4 \cdot 105 - 1 = 419$입니다. $419 - 3 = 416 = 4 \cdot 104$이므로 $419 \equiv 3 \pmod 4$입니다. $419$가 소수라는 것은 이 사이트의 도구로 확인하지 않고 알려 주는 사실입니다. 이를 받아들이면 $N$의 소인수분해는 소수 하나($q_1 = 419$)이고 $419 \equiv 3 \pmod 4$이므로 $q = 419$입니다. $3$, $5$, $7$ 어느 것과도 다릅니다.
:::

:::check[$5$, $13$, $17$은 모두 $4$로 나눈 나머지가 $1$이다. 이 셋의 곱이 $4$로 나눈 나머지가 $1$임을 합동의 계산으로 설명하고 확인하라.]
$5 - 1 = 4$, $13 - 1 = 12$, $17 - 1 = 16$은 모두 $4$의 배수이므로 $5 \equiv 13 \equiv 17 \equiv 1 \pmod 4$입니다. [[congruence-arithmetic|합동의 계산 법칙]]의 (6)에 의해 $5 \cdot 13 \cdot 17 \equiv 1 \pmod 4$입니다. 실제로 $5 \cdot 13 = 65$, $65 \cdot 17 = 1105$이고 $1105 - 1 = 1104 = 4 \cdot 276$입니다.
:::
