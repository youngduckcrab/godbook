---
title: 법과 서로소인 수의 성질
title_en: Properties of Numbers Coprime to the Modulus
aliases: [법과 서로소인 수, 서로소의 보존, coprime to the modulus]
kind: lemma
field: number-theory
msc: ["11A07"]
level: undergrad
summary: 합동인 두 정수는 한쪽이 법과 서로소이면 다른 쪽도 서로소이고, 법과 서로소인 수들의 곱도 법과 서로소이며, 법 n과 서로소인 정수를 n으로 나눈 나머지는 1 이상 n − 1 이하이고 n과 서로소이다(n ≥ 2). 0 이상 n − 1 이하인 두 정수가 합동이면 같다.
requires: [euler-phi-function, inverse-modulo-n, congruence-modulo-n, congruence-is-an-equivalence-relation, congruence-arithmetic, residues-modulo-n, division-theorem, greatest-common-divisor, divisibility, finite-product, mathematical-induction, well-ordering-principle, prime-number, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.2절 Euler's Theorem, Theorem 2.1.20의 증명(p.26–27)과 2.2.1절 Lemma 2.2.5의 증명(p.31)에서 말없이 쓰이는 사실
    checked: original
    note: "출처에는 이 꼴의 진술이 없다. 출처는 Lemma 2.2.5의 증명(p.31)에서 c ≡ a (mod m)이고 gcd(a, m) = 1이면 gcd(c, m) = 1이라는 것(이 항목의 1)을 말없이 쓴다(같은 자리의 gcd(c, nm) = 1이라는 결론은 이 항목이 다루지 않는다). 또 Theorem 2.1.20의 증명(p.27)에서 xa를 n으로 나눈 나머지가 다시 P에 든다는 것을 말하지 않고 쓴다. 이 항목은 그 사실들을 정리로 만들어 증명한 것이다. 서로소의 보존(1)–(3)은 inverse-modulo-n의 (1)(역원이 있는 것은 정확히 서로소일 때)을 양쪽 방향으로 써서 증명하므로 증명 경로는 이 사이트의 것이다. 출처는 나머지 r이 1 이상 n − 1 이하라는 것(4)을 따로 말하지 않는다. (5)의 앞 절반은 출처 p.24의 'R = {0, 1, 2, ..., n − 1} is a complete set of residues modulo n'과 같은 내용이고 출처는 근거를 적지 않는다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a$, $b$가 정수라 하자. $n \ne 0$이므로 정수 $c$마다 $c$와 $n$은 둘 다 $0$은 아니고, $\gcd(c, n)$은 [[greatest-common-divisor|최대공약수]]이다. 정수 $c$가 $n$과 **서로소**라는 것은 $\gcd(c, n) = 1$이라는 뜻이다. $P_n$은 [[euler-phi-function]]의 집합 $\{t \in \mathbb{Z} : 1 \le t \le n \text{이고 } \gcd(t, n) = 1\}$이다. 그러면 다음이 성립한다.

1. $a \equiv b \pmod n$이면, $\gcd(a, n) = 1$인 것은 정확히 $\gcd(b, n) = 1$일 때이다.
2. $\gcd(a, n) = 1$이고 $\gcd(b, n) = 1$이면 $\gcd(ab, n) = 1$이다.
3. $k$가 자연수이고 $a_1, \dots, a_k$가 길이 $k$인 정수의 열이며 모든 $i \in \{1, \dots, k\}$에 대하여 $\gcd(a_i, n) = 1$이면, [[finite-product|유한 곱]] $a_1 a_2 \cdots a_k$에 대하여 $\gcd(a_1 a_2 \cdots a_k, n) = 1$이다.
4. $n \ge 2$이고 $\gcd(a, n) = 1$이라 하자. $r$이 $a$를 $n$으로 나눈 나머지([[residues-modulo-n]])이면 $a \equiv r \pmod n$이고 $r \in \{1, \dots, n - 1\}$이며 $\gcd(r, n) = 1$이다. 따라서 $r \in P_n$이다.

5. (나머지의 유일성) $c$, $d$가 $0 \le c \le n - 1$, $0 \le d \le n - 1$인 정수이고 $c \equiv d \pmod n$이면 $c = d$이다. 특히 $n \ge 2$이고 $c, d \in P_n$이며 $c \equiv d \pmod n$이면 $c = d$이다.

4는 $n \ge 2$에서만 말한다. $n = 1$이면 모든 정수를 $1$로 나눈 나머지가 $0$이고 $0 \notin P_1 = \{1\}$이다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $n$ be a natural number and let $a$, $b$ be integers. Since $n \ne 0$, for every integer $c$ the integers $c$ and $n$ are not both $0$, and $\gcd(c, n)$ is the greatest common divisor. An integer $c$ is **coprime to $n$** if $\gcd(c, n) = 1$. Let $P_n$ be the set $\{t \in \mathbb{Z} : 1 \le t \le n \text{ and } \gcd(t, n) = 1\}$. Then the following hold.

1. If $a \equiv b \pmod n$, then $\gcd(a, n) = 1$ exactly when $\gcd(b, n) = 1$.
2. If $\gcd(a, n) = 1$ and $\gcd(b, n) = 1$, then $\gcd(ab, n) = 1$.
3. If $k$ is a natural number, $a_1, \dots, a_k$ is a sequence of integers of length $k$, and $\gcd(a_i, n) = 1$ for every $i \in \{1, \dots, k\}$, then the finite product satisfies $\gcd(a_1 a_2 \cdots a_k, n) = 1$.
4. Suppose $n \ge 2$ and $\gcd(a, n) = 1$. If $r$ is the remainder of $a$ upon division by $n$, then $a \equiv r \pmod n$, $r \in \{1, \dots, n - 1\}$, and $\gcd(r, n) = 1$. Hence $r \in P_n$.

5. (Uniqueness of remainders) If $c$ and $d$ are integers with $0 \le c \le n - 1$ and $0 \le d \le n - 1$ and $c \equiv d \pmod n$, then $c = d$. In particular, if $n \ge 2$, $c, d \in P_n$, and $c \equiv d \pmod n$, then $c = d$.

Part 4 is stated only for $n \ge 2$. If $n = 1$, the remainder of every integer upon division by $1$ is $0$, and $0 \notin P_1 = \{1\}$.
:::

## 직관

시계의 눈금이 $n$칸이라 하고, 정수 $a$는 "$a$칸 앞"이라는 눈금을 가리킨다고 합시다. 합동인 두 정수는 같은 눈금을 가리킵니다. $a$와 $n$이 서로소라는 것은 $a$칸씩 움직여 $1$칸 앞에 올 수 있다는 것이었고([[inverse-modulo-n]]), 이것은 눈금 하나가 정하는 성질이어서 같은 눈금을 가리키는 다른 이름 $b$에서도 똑같이 성립합니다. 이것이 1입니다. 두 수 $a$, $b$에서 각각 $1$칸 앞에 오는 방법이 있으면 둘을 이어 붙여 $ab$칸씩 움직여도 $1$칸 앞에 올 수 있다는 것이 2이고, 3은 이것을 여러 번 되풀이한 것입니다. 이 비유가 맞아떨어지는 곳은 "서로소는 눈금이 정하는 성질"이라는 점이고, 비유가 보여 주지 못하는 곳은 서로소가 아닌 수가 섞이면 곱도 서로소가 아니게 될 수 있다는 점입니다. 그 경우는 아래 반례에서 봅니다.

4는 나머지를 대표로 삼을 수 있다는 말입니다. 법과 서로소인 정수 $a$를 법 $n$의 나머지 $r$로 바꿔 놓아도 서로소라는 성질이 유지되고, 그 나머지는 $0$이 아니라 $1$ 이상 $n - 1$ 이하라는 것입니다. 이 사실이 있어야 법과 서로소인 수들의 곱을 나머지로 바꿔 놓고 이야기할 수 있습니다. 1과 2의 증명은 [[inverse-modulo-n|역원이 있는 것은 정확히 서로소일 때]]라는 정리를 양쪽 방향으로 쓰는 것이 전부이고, 3은 2를 되풀이하며, 4는 1에 나머지의 범위를 더한 것입니다. 5는 나머지가 하나로 정해진다는 말을 뒤 항목이 인용하기 쉽게 적어 둔 것입니다.

## 증명

:::idea
$\gcd(c, n) = 1$인 것은 $c$의 법 $n$ 역원이 있는 것과 같다. 1은 $bx \equiv ax \equiv 1$로 역원을 옮기고, 2는 역원의 곱 $xy$가 $ab$의 역원임을 보이며, 3은 2를 귀납으로 되풀이한다. 4는 $a \equiv r$에 1을 쓰고, $r = 0$이면 $n \mid a$가 되어 $\gcd(a, n) = n \ge 2$가 되는 것을 막는다.
:::

:::hint
$a \equiv b$이고 $ax \equiv 1$일 때 $b$에 어떤 정수를 곱하면 $1$과 합동이 되나요? [[congruence-arithmetic|합동의 계산 법칙]]에서 곱의 법칙을 쓰세요.
:::

:::hint
2는 $ax \equiv 1$, $by \equiv 1$에서 $ab$에 곱해서 $1$이 되는 수를 찾는 문제입니다. 3은 열의 길이에 대한 귀납입니다.
:::

:::hint
4에서 $r = 0$이면 $a = qn$입니다. $n$이 $a$와 $n$의 공약수라는 사실을 [[greatest-common-divisor|최대공약수]]의 정의에 쓰세요.
:::

:::proof
$n \ne 0$이므로 모든 정수 $c$에 대해 $\gcd(c, n)$이 정해지고, [[inverse-modulo-n]]의 1에 의해 $\gcd(c, n) = 1$인 것은 정확히 $cx \equiv 1 \pmod n$인 정수 $x$가 있을 때이다. 이 사실을 (★)라 부른다. 합동의 반사성, 대칭성, 추이성은 [[congruence-is-an-equivalence-relation|합동의 동치관계 성질]]에서 쓴다.

**1.** $a \equiv b \pmod n$이고 $\gcd(a, n) = 1$이라 하자. (★)에 의해 $ax \equiv 1 \pmod n$인 정수 $x$가 있다. 대칭성에 의해 $b \equiv a \pmod n$이고 반사성에 의해 $x \equiv x \pmod n$이므로 [[congruence-arithmetic|합동의 계산 법칙]]의 2에 의해 $bx \equiv ax \pmod n$이다. $bx \equiv ax$이고 $ax \equiv 1$이므로 추이성에 의해 $bx \equiv 1 \pmod n$이다. (★)에 의해 $\gcd(b, n) = 1$이다. 거꾸로 $\gcd(b, n) = 1$이면, $a \equiv b$에서 대칭성으로 $b \equiv a$이므로 방금의 논증에서 $a$와 $b$의 역할을 바꾸어 $\gcd(a, n) = 1$을 얻는다. 따라서 $\gcd(a, n) = 1$인 것은 정확히 $\gcd(b, n) = 1$일 때이다.

**2.** $\gcd(a, n) = 1$이고 $\gcd(b, n) = 1$이라 하자. (★)에 의해 $ax \equiv 1$, $by \equiv 1 \pmod n$인 정수 $x$, $y$가 있다. [[congruence-arithmetic|합동의 계산 법칙]]의 2에 의해 $(ax)(by) \equiv 1 \cdot 1 = 1 \pmod n$이다. 정수의 곱셈의 교환법칙과 결합법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)에 의해 $(ab)(xy) = (ax)(by)$이므로 $(ab)(xy) \equiv 1 \pmod n$이다. $xy$는 정수이므로(곱의 정수성, [[even-and-odd]]에서 받아들임) (★)에 의해 $\gcd(ab, n) = 1$이다.

**3.** 자연수 $k$에 대한 명제 $S_k$를 "길이 $k$인 정수의 모든 열 $a_1, \dots, a_k$에 대하여, 모든 $i$에서 $\gcd(a_i, n) = 1$이면 $\gcd(a_1 \cdots a_k, n) = 1$이다"로 정하고, [[mathematical-induction|귀납법]]으로 모든 자연수 $k$에서 $S_k$가 참임을 보인다.

기초 단계: $k = 1$이면 [[finite-product|유한 곱]]의 정의에 의해 $a_1 \cdots a_k = a_1$이므로 가정에서 $\gcd(a_1, n) = 1$이다.

귀납 단계: $S_k$가 참이라 하고, $a_1, \dots, a_{k+1}$이 모든 자리에서 $n$과 서로소인 길이 $k + 1$인 열이라 하자. 이 열의 처음 $k$개로 이루어진 길이 $k$인 열도 모든 자리에서 $n$과 서로소이므로 $S_k$에 의해 $\gcd(a_1 \cdots a_k, n) = 1$이다. 유한 곱의 정의에 의해 $a_1 \cdots a_{k+1} = (a_1 \cdots a_k) \cdot a_{k+1}$이고, $a_1 \cdots a_k$는 정수이다((P1)). $\gcd(a_{k+1}, n) = 1$이므로 2에 의해 $\gcd((a_1 \cdots a_k) a_{k+1}, n) = 1$이다. 곧 $S_{k+1}$이 참이다. 따라서 모든 자연수 $k$에서 $S_k$가 참이다.

**4.** $n \ge 2$이고 $\gcd(a, n) = 1$이라 하자. [[division-theorem|나눗셈 정리]]에 의해 $a = qn + r$, $0 \le r < n$인 정수 $q$, $r$이 하나로 정해지고, 이 $r$이 나머지이다. [[residues-modulo-n]]의 1에 의해 $a \equiv r \pmod n$이다. 1에 의해 $\gcd(r, n) = 1$이다.

$r = 0$이라고 가정하자. 그러면 $a = qn$이므로 $n \mid a$이다. 또 $n = n \cdot 1$이므로 $n \mid n$이다. 따라서 $n$은 $a$와 $n$의 공약수이고, [[greatest-common-divisor]]의 정의의 조건 2에 의해 $n \le \gcd(a, n) = 1$이다. 그런데 $1 < 2 \le n$에서 (Z6)에 의해 $1 < n$이고, 이는 (L1)에 의해 $n \le 1$과 함께 성립할 수 없다. 따라서 $r \ne 0$이다. $0 \le r$이고 $r \ne 0$이므로 $0 < r$이고, (Z1)에 의해 $1 \le r$이다. 또 $r < n$이므로 (Z1)에 의해 $r + 1 \le n$이고 (Z7)에 의해 $r \le n - 1$이다. $n \ge 2$에서 $n - 1 \ge 1$이므로 $\{1, \dots, n - 1\}$이 정해지고 $r$은 그 원소이다. 마지막으로 $r < n$에서 $r \le n$이므로 $1 \le r \le n$이고 $\gcd(r, n) = 1$이어서 $r \in P_n$이다.

**5.** $c$를 정수로 보고 [[residues-modulo-n]]의 1을 쓰면 $c \equiv r \pmod n$이고 $0 \le r \le n - 1$인 정수 $r$이 정확히 하나 있다. $r = c$가 이 조건을 만족한다. 합동의 반사성에 의해 $c \equiv c$이고 $0 \le c \le n - 1$이기 때문이다. $r = d$도 만족한다. 가정에서 $c \equiv d$이고 $0 \le d \le n - 1$이기 때문이다. 정확히 하나뿐이므로 $c = d$이다. 특히 $n \ge 2$이고 $c, d \in P_n$이면, [[euler-phi-function]]의 3에 의해 $1 \le c \le n - 1$이고 $1 \le d \le n - 1$이며, $0 < 1$((Z8))과 (Z6)에 의해 $0 < c$, $0 < d$이므로 $0 \le c, d \le n - 1$이다. 앞의 경우를 쓰면 $c = d$이다. $\blacksquare$
:::

## 예시와 반례

:::example[법 14]
$14$의 양의 약수는 $1, 2, 7, 14$입니다. $\gcd(c, 14)$는 이 가운데 $c$도 나누는 가장 큰 수이므로, $2$, $7$, $14$가 모두 $c$를 나누지 않으면 $\gcd(c, 14) = 1$입니다. $9 = 2 \cdot 4 + 1 = 7 \cdot 1 + 2$이고 $14 > 9$이므로 $\gcd(9, 14) = 1$입니다. $9 \equiv 23 \pmod{14}$이고($23 - 9 = 14$) 1에 의해 $\gcd(23, 14) = 1$이어야 합니다. 실제로 $23 = 2 \cdot 11 + 1 = 7 \cdot 3 + 2 = 14 \cdot 1 + 9$이므로 $2$, $7$, $14$ 중 어느 것도 $23$을 나누지 않아 $\gcd(23, 14) = 1$입니다. 또 $\gcd(5, 14) = 1$이므로 2에 의해 $\gcd(9 \cdot 5, 14) = \gcd(45, 14) = 1$이고, 직접 보아도 $45 = 2 \cdot 22 + 1 = 7 \cdot 6 + 3 = 14 \cdot 3 + 3$이므로 $2$, $7$, $14$ 중 어느 것도 $45$를 나누지 않습니다.
:::

:::example[나머지로 바꾸기]
$n = 14$, $a = 45$이면 $45 = 3 \cdot 14 + 3$이므로 나머지는 $r = 3$입니다. 4에 의해 $3 \in P_{14}$이어야 하고, $1 \le 3 \le 13$이며 $2$, $7$, $14$가 $3$을 나누지 않으므로 $\gcd(3, 14) = 1$이어서 실제로 그렇습니다. 곱이 큰 수라도 나머지는 $1$ 이상 $13$ 이하의 수 하나로 줄어듭니다.
:::

:::counterexample[서로소가 아닌 두 수의 곱]
2의 가정에서 "둘 다 서로소"를 "한쪽만 서로소"로 바꾸면 결론이 성립하지 않습니다. 예를 들어 $n = 6$, $a = 5$, $b = 3$이면 $\gcd(5, 6) = 1$이지만 $\gcd(3, 6) \ge 3$입니다. 곱은 $ab = 15$이고 $\gcd(15, 6) \ge 3$이어서 $1$이 아닙니다($3 \mid 15$, $3 \mid 6$).
:::

:::counterexample[n = 1에서는 나머지가 P_n에 들어가지 않는다]
4는 $n \ge 2$가 필요합니다. $n = 1$이면 모든 정수 $a$에 대하여 $\gcd(a, 1)$은 $1$의 양의 약수이므로 $1$이고, $a$를 $1$로 나눈 나머지는 $0$($a = a \cdot 1 + 0$, $0 \le 0 < 1$)입니다. $0 \notin P_1 = \{1\}$이므로 나머지가 $P_1$에 들지 않습니다. 증명에서 막히는 곳은 $r = 0$에서 $n \le \gcd(a, n)$으로 모순을 얻는 단계입니다. $n = 1$이면 $1 \le 1$이어서 모순이 아닙니다.
:::

## 확인 질문

:::check[$n = 20$일 때 $\gcd(7, 20) = 1$과 $\gcd(13, 20) = 1$을 확인하고, $7 \cdot 13 = 91$을 $20$으로 나눈 나머지가 $P_{20}$에 속함을 보여라.]
$7$의 양의 약수는 $1, 7$이고 $7 \nmid 20$($20 = 7 \cdot 2 + 6$)이므로 $\gcd(7, 20) = 1$입니다. $13$의 양의 약수는 $1, 13$이고 $13 \nmid 20$($20 = 13 \cdot 1 + 7$)이므로 $\gcd(13, 20) = 1$입니다. 2에 의해 $\gcd(91, 20) = 1$이고, $91 = 4 \cdot 20 + 11$이므로 나머지는 $r = 11$입니다. 4에 의해 $r \in P_{20}$이어야 하며, 실제로 $1 \le 11 \le 19$이고 $11$의 양의 약수 $1, 11$ 가운데 $20$을 나누는 것은 $1$뿐이므로 $\gcd(11, 20) = 1$입니다.
:::

:::check[$a \equiv b \pmod{12}$이고 $a = 17$일 때, $b = 5$와 $b = 29$가 모두 $12$와 서로소인지 1을 써서 말하라.]
$17 - 5 = 12 = 12 \cdot 1$, $17 - 29 = -12 = 12 \cdot (-1)$이므로 $17 \equiv 5$이고 $17 \equiv 29 \pmod{12}$입니다. $17$의 양의 약수는 $1, 17$이고 $17 \nmid 12$이므로 $\gcd(17, 12) = 1$입니다. 1에 의해 $\gcd(5, 12) = 1$이고 $\gcd(29, 12) = 1$입니다.
:::
