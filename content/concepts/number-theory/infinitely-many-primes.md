---
title: 소수는 무한히 많다
title_en: There Are Infinitely Many Primes
aliases: [infinitude of primes, 유클리드의 소수 정리, 소수의 무한성]
kind: theorem
field: number-theory
msc: ["11A41"]
level: undergrad
summary: 자연수 n과 소수 p₁, …, pₙ이 주어지면 이들 어느 것과도 다른 소수가 존재한다.
requires: [prime-factorization-exists, finite-product, prime-number, divisibility, proof-by-contradiction, negation-of-quantified-statements, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.2.1절 There Are Infinitely Many Primes, Theorem 1.2.1 (Euclid), p.11 (Proposition 1.1.20은 1.1.3절, p.7. 서문 p.ix)
    checked: original
    note: "출처의 진술은 'There are infinitely many primes'이다(p.11). 이 사이트는 무한집합을 엄밀히 다루지 않았으므로 이 항목은 출처의 증명이 실제로 보이는 내용, 곧 '소수 n개가 주어지면 그것들과 다른 소수가 있다'를 진술로 삼았다. 출처의 증명은 서로 다른 소수 p₁, …, pₙ에 대해 N = p₁p₂⋯pₙ + 1로 두고 Proposition 1.1.20으로 N = q₁q₂⋯q_m을 얻은 뒤, q₁ = pᵢ이면 pᵢ | N이고 pᵢ | N − 1이어서 pᵢ | 1이라는 모순을 이끌어 p_{n+1} = q₁이 새 소수라고 한다(p.11). 이 항목의 증명은 같은 발상이다. 곱 p₁⋯pₙ이 2 이상임과 pᵢ | p₁⋯pₙ을 유한 곱의 성질 (P5), (P4)로 보이고, 'x가 d의 배수이고 y가 d의 배수이면 x − y도 d의 배수'를 그 자리에서 보이며, 소수 pᵢ가 서로 다르다는 가정은 쓰지 않는다. 출처는 p.11에서 2·3·5·7·11·13 + 1 = 30031 = 59·509를 예로 든다. 이 항목의 반례는 같은 예이다. 다른 예(3·5·7 + 1 = 106 등)는 새로 만들었다."
  - ref: hammack-book-of-proof
    loc: 6.1절 Proving Statements with Contradiction, 번호 없는 Proposition 'There are infinitely many prime numbers', p.140
    checked: original
    note: "출처는 귀류법으로 증명한다. 소수가 유한개라 하고 모두 p₁, p₂, …, p_n으로 나열한 뒤 a = (p₁p₂p₃⋯p_n) + 1의 소인수 p_k를 잡고, 양변을 p_k로 나누어 1/p_k가 정수라는 모순을 얻는다(p.140). 이 항목은 소수 전체를 나열하는 대신 주어진 소수들과 다른 소수를 만들어 내고, 1/p_k가 정수가 아니라는 사실을 쓰지 않는다. 대신 p_k | 1이면 prime-number 진술의 '양의 약수 d는 d ≤ n'에서 p_k ≤ 1이라는 모순을 얻는다. 출처가 'a는 1보다 큰 자연수이므로 소인수가 적어도 하나 있다'를 근거 없이 쓰는 곳은 이 항목에서 prime-factorization-exists로 메운다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $p_1, p_2, \dots, p_n$이 소수이면, $p_1, \dots, p_n$ 어느 것과도 다른 소수 $q$가 존재한다. 곧 모든 $i \in \{1, \dots, n\}$에 대하여 $q \ne p_i$이다.

이 진술이 "소수는 무한히 많다"는 말의 정확한 내용이다. 이 사이트는 무한집합을 엄밀히 다루지 않았으므로, "소수 전체의 집합이 무한집합이다"는 여기서 주장하지 않는다.
:::

:::english
Let $n$ be a natural number and let $p_1, p_2, \dots, p_n$ be primes. Then there is a prime $q$ different from each of $p_1, \dots, p_n$; that is, $q \ne p_i$ for every $i \in \{1, \dots, n\}$.

This statement is the precise content of "there are infinitely many primes". Infinite sets have not been treated rigorously on this site, so the claim that the set of all primes is an infinite set is not made here.
:::

## 직관

소수를 몇 개 가지고 있어도 그것으로 모든 소수가 끝나지 않는다는 말입니다. 가진 소수를 모두 곱한 수 $P$에 $1$을 더한 수 $N = P + 1$을 만들면, 가진 소수는 어느 것도 $N$을 나누지 못합니다. $P$를 나누는 수가 $N = P + 1$도 나누면 둘의 차이 $1$도 나누게 되기 때문입니다. 그런데 $2$ 이상의 수는 소수들의 곱으로 쓰이므로 $N$을 나누는 소수가 있고, 그 소수는 가진 소수들과 다릅니다. 비유하면, 가진 열쇠 꾸러미의 어느 열쇠로도 열리지 않는 자물쇠가 있다면 꾸러미에 없는 열쇠가 필요한 것과 같습니다. 이 비유에서 열쇠는 소수, 자물쇠는 $N$이고, "열린다"는 "나누어떨어진다"에 해당합니다.

흔한 오해는 "$N$ 자신이 새 소수이다"입니다. 아래 반례에서 보듯이 $N$은 소수가 아닐 수 있고, 증명이 주는 것은 $N$을 나누는 소수 하나입니다.

## 증명

:::idea
$N = p_1 \cdots p_n + 1$로 두면 $N \ge 2$이므로 $N$을 나누는 소수 $q$가 있다. $q = p_i$라 하면 $q$가 $p_1 \cdots p_n$과 $N$을 모두 나누어 $q \mid 1$이 되고, 이는 $q \ge 2$에 어긋난다.
:::

:::hint
주어진 소수들을 모두 곱한 뒤 $1$을 더한 수 $N$을 보세요. $N$은 $2$ 이상의 정수이므로 [[prime-factorization-exists|소수들의 곱]]으로 쓰입니다.
:::

:::hint
$N$을 나누는 소수 $q$가 어떤 $p_i$와 같다고 가정해 모순을 찾으세요. $q$는 $p_1 \cdots p_n$도 나누고 $N$도 나눕니다. 이 둘의 차는 얼마입니까?
:::

:::proof
이 증명이 쓰는 성질은 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 (Z5)–(Z8), (L1), 같은 항목에서 증명 없이 쓰기로 한 정수의 계산 법칙과 구체적인 정수의 등식과 부등식, 그리고 정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)이다.

**소수는 $2$ 이상이다.** $p$가 소수이면 $p$는 자연수이므로 (Z1)에 의해 $p \ge 1$이다. $1$은 소수가 아니라고 [[prime-number]]의 진술에 적혀 있으므로 $p \ne 1$이고, 따라서 $p > 1$이며 (Z1)에 의해 $p \ge 1 + 1 = 2$이다.

**$N$의 정의.** $P = p_1 p_2 \cdots p_n$으로 쓴다([[finite-product]]). 모든 $p_i$는 $2$ 이상이므로 양의 정수이고, [[finite-product]]의 (P5)에 의해 $P$는 양의 정수이며 $p_1 \le P$이다. $p_1 \ge 2$이므로 (Z6)에 의해 $P \ge 2$이다. $N = P + 1$로 두면 (Z7)에 의해 $N \ge 2 + 1 = 3$이고, 특히 $N \ge 2$이다.

**$N$을 나누는 소수.** [[prime-factorization-exists]]에 의해 $N$은 소수들의 곱이다. 곧 소수 $q_1, \dots, q_\ell$($\ell \ge 1$)이 있어 $N = q_1 q_2 \cdots q_\ell$이다. [[finite-product]]의 (P4)에 의해 $q_1 \mid N$이다. $q = q_1$로 둔다. $q$는 소수이다.

**$q$는 어느 $p_i$와도 다르다.** [[proof-by-contradiction|귀류법]]으로 증명한다. 결론 "모든 $i$에 대하여 $q \ne p_i$"의 부정은 [[negation-of-quantified-statements]]에 의해 "$q = p_i$인 $i$가 있다"이다. 그런 $i$가 있다고 가정한다. [[finite-product]]의 (P4)에 의해 $p_i \mid P$이므로 $q \mid P$이다. 또 $q \mid N$이다. [[divisibility|나누어떨어짐]]의 정의에 의해 $N = qs$, $P = qt$인 정수 $s$, $t$가 있다. 그러면
$$1 = N - P = qs - qt = q(s - t)$$
이다. 첫째 등호는 $N = P + 1$이고 마지막 등호는 분배법칙이다. $s - t$는 정수이므로 $q \mid 1$이다. $q$는 양의 정수이므로 $q$는 자연수 $1$의 양의 약수이고, [[prime-number]]의 진술("자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$")에 의해 $q \le 1$이다. 그런데 $q \ge 2$이므로 $2 \le q \le 1$이고 (Z6)에 의해 $2 \le 1$이다. 한편 (Z8)에 의해 $0 < 1$이므로 (Z7)에 의해 $1 < 2$이다. $1 < 2$와 $2 \le 1$은 (L1)에 의해 동시에 성립할 수 없으므로 모순이다. 이 모순으로 가정이 틀렸고, 모든 $i$에 대하여 $q \ne p_i$이다. $\blacksquare$
:::

## 예시와 반례

:::example[소수 3, 5, 7]
$n = 3$, $p_1 = 3$, $p_2 = 5$, $p_3 = 7$이면 $P = 3 \cdot 5 \cdot 7 = 105$이고 $N = 106 = 2 \cdot 53$입니다. $N$을 나누는 소수로 $q = 2$를 얻고 $2$는 $3$, $5$, $7$ 어느 것과도 다릅니다. $53$도 소수이고 역시 다릅니다.

$n = 2$, $p_1 = 3$, $p_2 = 5$이면 $N = 16 = 2^4$이고 $N$을 나누는 소수 $2$가 새 소수입니다. 같은 소수가 여러 번 나와도 됩니다. $n = 3$, $p_1 = p_2 = p_3 = 3$이면 $P = 27$이고 $N = 28 = 2 \cdot 2 \cdot 7$이어서 $q = 2$입니다.
:::

:::counterexample[N 자신이 소수라고 하기]
"$N = p_1 \cdots p_n + 1$은 항상 소수이다"는 틀립니다. 앞의 $3 \cdot 5 \cdot 7 + 1 = 106 = 2 \cdot 53$이 그 예이고, 더 눈에 띄는 예는 앞에서부터 여섯 소수를 곱한 경우입니다. $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 30030$이고 $30030 + 1 = 30031 = 59 \cdot 509$입니다. 검산하면 $59 \cdot 509 = 59 \cdot 500 + 59 \cdot 9 = 29500 + 531 = 30031$입니다. $30031$은 소수가 아니지만 소수 $59$로 나누어떨어지고, $59$는 $2, 3, 5, 7, 11, 13$ 어느 것과도 다릅니다. 증명이 주는 것은 $N$을 나누는 소수이지 $N$ 자신이 아닙니다.
:::

## 역사와 맥락

Stein은 서문에서 기원전 300년경 유클리드가 소수가 무한히 많다는 것을 증명했을 때 정수론의 체계적인 연구가 시작되었다고 적는다(p.ix). 같은 책은 이 정리(Theorem 1.2.1)에 "(Euclid)"라는 표시를 붙인다(p.11). Hammack은 이 명제의 증명을 "적어도 유클리드까지 거슬러 올라가는 또 하나의 오래된 예"라고 소개한다(p.140).

## 확인 질문

:::check[소수 $2$와 $7$이 주어졌을 때 증명의 $N$을 구하고, $N$을 나누는 소수 $q$로 어떤 수를 얻는가?]
$P = 2 \cdot 7 = 14$이고 $N = 15 = 3 \cdot 5$입니다. $N$의 소수 곱 $3 \cdot 5$에서 $q_1 = 3$이므로 $q = 3$입니다. $3$은 $2$, $7$ 어느 것과도 다릅니다. 증명의 모순 논증을 점검하면, $3 \mid 15$이고 $3 \nmid 14$($14 = 3 \cdot 4 + 2$)이므로 $3$이 $P$를 나누지 않아 $3 = p_i$일 수 없습니다.
:::

:::check[$3$과 $5$만 소수라고 가정하고 $N = 16$을 만들면, $3$과 $5$ 가운데 $16$을 나누는 것이 있는가? 증명의 어느 부분과 이어지는가?]
$16 = 3 \cdot 5 + 1$이어서 $3 \nmid 16$이고($3$의 배수는 $15$, $18$) $5 \nmid 16$($5$의 배수는 $15$, $20$)입니다. 증명에서 $N$을 나누는 소수가 $p_i$라면 $p_i \mid 1$이 되어 불가능하다고 한 부분의 구체적인 경우입니다. 실제로 $16$을 나누는 소수는 $2$뿐이고 $2$는 $3$, $5$와 다릅니다.
:::
