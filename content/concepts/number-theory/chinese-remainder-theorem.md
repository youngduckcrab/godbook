---
title: 중국인의 나머지 정리
title_en: Chinese Remainder Theorem
aliases: [CRT, 중국 나머지 정리, 손자 정리, Chinese remainder theorem]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: m과 n이 서로소인 자연수이면 x ≡ a (mod m)과 x ≡ b (mod n)을 함께 만족하는 정수 x가 있고, 그런 x는 mn을 법으로 하나로 정해진다.
requires: [congruence-modulo-n, congruence-is-an-equivalence-relation, residues-modulo-n, bezout-identity, coprime-divisors-product-divides, greatest-common-divisor, divisibility, even-and-odd, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.2절 The Chinese Remainder Theorem, Theorem 2.2.2, p.29. Algorithm 2.2.3 (Chinese Remainder Theorem)와 그 증명, pp.29–30
    checked: original
    note: "출처의 진술(Theorem 2.2.2)은 a, b가 정수이고 n, m이 자연수이며 gcd(n, m) = 1이면 x ≡ a (mod m), x ≡ b (mod n)인 정수 x가 있고 x는 mn을 법으로 유일하다는 것이다. 이 항목의 (1), (2)가 그것이다. (3)은 Stein이 Question 2.2.1의 풀이(p.30)에서 'any x0 with x0 ≡ x (mod 15) is also a solution'처럼 증명 없이 쓰는 사실이고 이 항목이 증명했다. (4)는 이 사이트가 덧붙였다. 출처의 존재 증명은 a + tm ≡ b (mod n)의 t를 Proposition 2.1.13으로 구하는 것인데, Proposition 2.1.13의 증명은 완전잉여계의 원소 개수에 기대므로 이 사이트에는 쓸 수 없다. 이 항목의 존재 증명은 출처의 Algorithm 2.2.3(p.29)의 증명(p.30)과 같은 생각이다. 곧 cm + dn = 1(베주)로 x = a + (b − a)cm을 잡는다. 이 항목은 같은 수를 x = adn + bcm으로 적고 1 − cm = dn으로 둘이 같음을 쓴다. 출처의 유일성 증명은 m | z, n | z, gcd(n, m) = 1에서 'it follows that nm | z'라고만 하고 이유를 적지 않는다. 이 항목은 coprime-divisors-product-divides로 보인다. 출처가 'mn을 법으로 유일하다'를 쓰려면 mn이 자연수여야 하는데 이 점도 적혀 있지 않아 이 항목에서 보였다. 출처는 세 방정식의 예(Question 2.2.1)를 두 방정식씩 합쳐 풀며, 이 항목은 방정식이 둘인 경우만 다룬다. 예시의 수는 새로 골랐다. 직관의 '3으로 나누면 2가 남고 5로 나누면 3이 남는 수'는 Stein Question 2.2.1(p.29)의 앞 두 조건이고, Stein은 이 질문을 4세기 중국의 수학자가 물었다고 적는다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $\gcd(m, n) = 1$이라 하자. $m$, $n$은 자연수이므로 둘 다 $0$은 아니고 $\gcd(m, n)$이 정해진다([[greatest-common-divisor|최대공약수]]). $mn$도 자연수이다(증명에서 보인다). 정수 $a$, $b$에 대하여 다음이 성립한다.

1. (존재) $x \equiv a \pmod m$이고 $x \equiv b \pmod n$인 정수 $x$가 존재한다.
2. (유일성) $x$, $y$가 모두 이 두 합동식을 만족하는 정수이면 $x \equiv y \pmod{mn}$이다.
3. $x$가 두 합동식을 만족하고 $y$가 $y \equiv x \pmod{mn}$인 정수이면 $y$도 두 합동식을 만족한다.
4. 두 합동식을 모두 만족하는 정수 $x$ 가운데 $0 \le x \le mn - 1$인 것이 정확히 하나 존재한다.
:::

:::english
Let $m$ and $n$ be natural numbers with $\gcd(m, n) = 1$. Since $m$ and $n$ are natural numbers, they are not both $0$, so $\gcd(m, n)$ is defined. The number $mn$ is also a natural number (shown in the proof). For integers $a$ and $b$ the following hold.

1. (Existence) There exists an integer $x$ with $x \equiv a \pmod m$ and $x \equiv b \pmod n$.
2. (Uniqueness) If integers $x$ and $y$ both satisfy these two congruences, then $x \equiv y \pmod{mn}$.
3. If $x$ satisfies both congruences and $y$ is an integer with $y \equiv x \pmod{mn}$, then $y$ also satisfies both congruences.
4. Among the integers $x$ satisfying both congruences, there is exactly one with $0 \le x \le mn - 1$.
:::

## 직관

Stein은 이 정리의 첫머리에 "$3$으로 나누면 $2$가 남고 $5$로 나누면 $3$이 남는 수는?"로 시작하는 질문(Question 2.2.1)을 두고 4세기 중국의 수학자가 물었다고 적습니다. 이 항목은 그 꼴의 문제를 다룹니다. 서로 다른 두 시계가 있다고 하면, 하나는 $m$칸이고 다른 하나는 $n$칸이며 두 바늘이 동시에 돌아갑니다. 두 시계의 바늘이 정해진 눈금에 동시에 오는 때가 있는지를 묻는 셈입니다. 두 시계의 칸 수가 서로소이면 그런 때가 있고, 한 번 동시에 온 뒤에는 $mn$번째마다 다시 동시에 옵니다. 비유가 맞는 곳은 "$mn$마다 되풀이"라는 점이고, 두 칸 수가 $1$보다 큰 공약수를 가지면 되풀이 간격이 $mn$보다 짧아질 수 있고 해가 없을 수도 있습니다(아래 반례).

[[inverse-modulo-n|역원]]이 한 개의 합동식에서 $1$을 만드는 일이었다면, 이 정리는 서로소인 두 법의 합동식을 한 번에 만족하는 수를 베주 항등식으로 만드는 일입니다. 세 개 이상의 합동식을 다루는 방법은 이 항목에서 다루지 않습니다.

## 증명

:::idea
베주 항등식 $cm + dn = 1$로 $x = adn + bcm$을 잡으면 $x - a = m \cdot c(b - a)$, $x - b = n \cdot d(a - b)$이다. 유일성은 $x - y$를 $m$과 $n$이 모두 나누므로 서로소인 두 약수의 곱 $mn$도 나눈다는 것이다.
:::

:::hint
$m$, $n$은 서로소이므로 [[bezout-identity|베주 항등식]]에서 $cm + dn = 1$을 얻습니다. $x$를 $a$와 $b$를 $c$, $d$, $m$, $n$으로 섞어 만들어 보세요. $m$으로 나눈 자리에서는 $b$가, $n$으로 나눈 자리에서는 $a$가 사라져야 합니다.
:::

:::hint
유일성은 $x$, $y$ 둘이 모두 해일 때 $x - y$가 $m$의 배수이면서 $n$의 배수임을 보이고 [[coprime-divisors-product-divides|서로소인 두 약수의 곱은 약수이다]]를 쓰세요.
:::

:::proof
정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)과 정수의 계산 법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)을 쓴다.

**$mn$은 자연수이다.** $m$, $n$은 자연수이므로 (Z1)([[prime-number]]의 진술)에 의해 $m \ge 1$, $n \ge 1$이다. $n > 0$이고 $1 \le m$이므로 (Z3)에 의해 $1 \cdot n \le mn$이고, $1 \le n$이므로 (Z6)([[well-ordering-principle]]의 진술)에 의해 $1 \le mn$이다. $mn$은 정수이므로 자연수이다. 따라서 "$\pmod{mn}$"이 뜻을 갖는다.

**(1)** $m$, $n$은 둘 다 $0$은 아니고 $\gcd(m, n) = 1$이므로 [[bezout-identity|베주 항등식]]에 의해 $cm + dn = 1$인 정수 $c$, $d$가 있다. $x = adn + bcm$으로 둔다. $x$는 정수이다. $dn = 1 - cm$이고 $cm = 1 - dn$이므로
$$x - a = adn + bcm - a(cm + dn) = bcm - acm = m \cdot c(b - a),$$
$$x - b = adn + bcm - b(cm + dn) = adn - bdn = n \cdot d(a - b)$$
이다. 첫째 줄에서 $a = a \cdot 1 = a(cm + dn)$을 썼고 둘째 줄에서 $b = b(cm + dn)$을 썼다. $c(b - a)$, $d(a - b)$는 정수이므로 $m \mid (x - a)$, $n \mid (x - b)$이다. 곧 $x \equiv a \pmod m$이고 $x \equiv b \pmod n$이다.

**(2)** $x$, $y$가 모두 $x \equiv a$, $y \equiv a \pmod m$이고 $x \equiv b$, $y \equiv b \pmod n$이라 하자. [[congruence-is-an-equivalence-relation|합동의 대칭성과 추이성]]에 의해 $x \equiv a$이고 $a \equiv y$이므로 $x \equiv y \pmod m$이다. 같은 이유로 $x \equiv y \pmod n$이다. 곧 $m \mid (x - y)$이고 $n \mid (x - y)$이다. $m$, $n$은 둘 다 $0$은 아니고 $\gcd(m, n) = 1$이므로 [[coprime-divisors-product-divides|서로소인 두 약수의 곱은 약수이다]]에 의해 $mn \mid (x - y)$이다. $mn$은 자연수이므로 $x \equiv y \pmod{mn}$이다.

**(3)** $x \equiv a \pmod m$, $x \equiv b \pmod n$이고 $y \equiv x \pmod{mn}$이라 하자. $mn \mid (y - x)$이므로 $y - x = mnt$인 정수 $t$가 있다. $y - x = m(nt)$이고 $nt$는 정수이므로 $y \equiv x \pmod m$이다. 같은 방법으로 $y - x = n(mt)$이므로 $y \equiv x \pmod n$이다. 추이성에 의해 $y \equiv x \equiv a \pmod m$에서 $y \equiv a \pmod m$이고, $y \equiv x \equiv b \pmod n$에서 $y \equiv b \pmod n$이다.

**(4)** (1)에 의해 두 합동식의 해 $x_0$가 있다. [[residues-modulo-n]]의 (1)을 법 $mn$으로 쓰면 $x_0 \equiv r \pmod{mn}$이고 $0 \le r \le mn - 1$인 정수 $r$이 있다. 합동의 대칭성에 의해 $r \equiv x_0 \pmod{mn}$이므로 (3)에 의해 $r$도 두 합동식의 해이다. 곧 $0 \le x \le mn - 1$인 해가 존재한다. 유일성: $r$, $r'$이 모두 $0$ 이상 $mn - 1$ 이하인 해이면 (2)에 의해 $r \equiv r' \pmod{mn}$이다. 대칭성에 의해 $r' \equiv r$이고 반사성에 의해 $r' \equiv r'$이므로, 정수 $r'$에 대하여 $r$과 $r'$이 모두 [[residues-modulo-n]]의 (1)의 조건(법 $mn$)을 만족한다. (1)의 유일성에 의해 $r = r'$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$x \equiv 3 \pmod 4$, $x \equiv 5 \pmod 9$]
$m = 4$, $n = 9$이면 $4$의 양의 약수는 $1, 2, 4$이고 $9$의 양의 약수는 $1, 3, 9$이므로 $\gcd(4, 9) = 1$입니다. $9 = 2 \cdot 4 + 1$이므로 $1 = 9 - 2 \cdot 4$이고 $c = -2$, $d = 1$입니다($cm + dn = -8 + 9 = 1$). $a = 3$, $b = 5$이므로 $x = adn + bcm = 3 \cdot 1 \cdot 9 + 5 \cdot (-2) \cdot 4 = 27 - 40 = -13$입니다. 확인하면 $-13 - 3 = -16 = 4 \cdot (-4)$이고 $-13 - 5 = -18 = 9 \cdot (-2)$입니다. $mn = 36$이고 $-13 + 36 = 23$이므로 $0$ 이상 $35$ 이하인 해는 $23$입니다. 실제로 $23 - 3 = 20 = 4 \cdot 5$이고 $23 - 5 = 18 = 9 \cdot 2$입니다. (3)에 의해 $23 + 36 = 59$도 해입니다. $59 - 3 = 56 = 4 \cdot 14$, $59 - 5 = 54 = 9 \cdot 6$입니다.
:::

:::counterexample[서로소가 아니면 해가 없을 수 있다]
$x \equiv 1 \pmod 4$, $x \equiv 2 \pmod 6$을 봅니다. $4$의 양의 약수 $1, 2, 4$와 $6$의 양의 약수 $1, 2, 3, 6$의 공통 양의 약수는 $1, 2$이므로 $\gcd(4, 6) = 2$입니다. 해 $x$가 있다고 하면 $x - 1 = 4s$, $x - 2 = 6t$인 정수 $s$, $t$가 있어 $x = 2(2s) + 1$은 홀수이고 $x = 2(3t + 1)$은 짝수입니다. 어떤 정수도 짝수이면서 홀수일 수 없으므로([[even-and-odd]]에서 받아들인 사실) 모순입니다. 따라서 해가 없습니다.
:::

:::counterexample[서로소가 아니면 유일성이 깨진다]
$x \equiv 1 \pmod 4$, $x \equiv 3 \pmod 6$에는 $x = 9$가 해입니다($9 - 1 = 8 = 4 \cdot 2$, $9 - 3 = 6 = 6 \cdot 1$). $x = 21$도 해입니다($21 - 1 = 20 = 4 \cdot 5$, $21 - 3 = 18 = 6 \cdot 3$). 그런데 $mn = 24$이고 $21 - 9 = 12$에서 $12 = 24c$이면 $c = 0.5$이므로 정수 $c$가 없어 $24 \nmid 12$이고 $9 \not\equiv 21 \pmod{24}$입니다. 이 경우 (2)가 성립하지 않습니다. $\gcd(4, 6) = 2 \ne 1$이기 때문입니다.
:::

## 확인 질문

:::check[$x \equiv 2 \pmod 5$이고 $x \equiv 4 \pmod 7$인 정수 $x$를 하나 구하라.]
$\gcd(5, 7) = 1$입니다. $7 = 1 \cdot 5 + 2$, $5 = 2 \cdot 2 + 1$이므로 $1 = 5 - 2 \cdot 2 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7$이고 $m = 5$, $n = 7$에서 $c = 3$, $d = -2$입니다($15 - 14 = 1$). $a = 2$, $b = 4$이므로 $x = adn + bcm = 2 \cdot (-2) \cdot 7 + 4 \cdot 3 \cdot 5 = -28 + 60 = 32$입니다. 확인하면 $32 - 2 = 30 = 5 \cdot 6$이고 $32 - 4 = 28 = 7 \cdot 4$입니다.
:::

:::check[위의 $x = 32$가 해이면 $y = 67$도 해인가?]
$mn = 35$이고 $67 - 32 = 35 = 35 \cdot 1$이므로 $67 \equiv 32 \pmod{35}$입니다. (3)에 의해 $67$도 해입니다. 실제로 $67 - 2 = 65 = 5 \cdot 13$이고 $67 - 4 = 63 = 7 \cdot 9$입니다.
:::
