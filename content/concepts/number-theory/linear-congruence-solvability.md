---
title: 일차 합동식이 풀릴 조건
title_en: Solvability of Linear Congruences
aliases: [일차 합동식, 일차합동방정식, linear congruence, ax ≡ b mod n 의 해]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: n이 자연수일 때 합동식 ax ≡ b (mod n)을 만족하는 정수 x가 있는 것은 정확히 gcd(a, n)이 b를 나눌 때이다.
requires: [congruence-modulo-n, bezout-identity, greatest-common-divisor, inverse-modulo-n, divisibility, even-and-odd, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.1절 Linear Equations Modulo n, Proposition 2.1.15 (Solvability), p.25. 앞의 예(2x ≡ 1 (mod 4)는 해가 없고 2x ≡ 2 (mod 4)는 x = 1, 3), p.24
    checked: original
    note: "진술은 같다(출처는 ax ≡ b (mod n)이 해를 가질 필요충분조건이 gcd(a, n) | b라고 적는다). 이 항목은 a, b가 정수이고 n이 자연수임을 밝히고, gcd(a, n)이 정의되는 까닭(n ≥ 1이어서 a와 n이 둘 다 0은 아니다)을 적었다. (⇒)의 증명은 출처와 같은 발상이다(g | n이고 g | a이면 g | b). (⇐)는 출처와 다르다. 출처는 ax ≡ b (mod n)을 (a/g)x ≡ b/g (mod n/g)로 바꾸고 'gcd(a/g, n/g) = 1이므로 Proposition 2.1.13이 풀이를 준다'고 한다. gcd(a/g, n/g) = 1은 출처에서 증명되지 않고, Proposition 2.1.13은 완전잉여계의 원소 개수(Lemma 2.1.12의 #aR = n)에 기댄다. 이 사이트에는 유한집합의 세기가 없으므로 따르지 않았고, 베주 항등식 g = ax₀ + ny₀에서 x = x₀(b/g)가 해임을 직접 보인다. 출처는 이 절에서 해의 개수를 진술하지 않고('more than one'이라고만 적는다), 이 항목도 해의 개수는 주장하지 않는다. 예시와 반례의 수는 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a$, $b$가 정수라 하자. $n \ne 0$이므로 $a$와 $n$은 둘 다 $0$은 아닌 정수이고 $\gcd(a, n)$이 정해진다([[greatest-common-divisor|최대공약수]]). 그러면 $ax \equiv b \pmod n$인 정수 $x$가 존재하는 것은 정확히 $\gcd(a, n) \mid b$일 때이다. 곧 다음 두 명제가 모두 성립한다.

1. $ax \equiv b \pmod n$인 정수 $x$가 존재하면 $\gcd(a, n) \mid b$이다.
2. $\gcd(a, n) \mid b$이면 $ax \equiv b \pmod n$인 정수 $x$가 존재한다.

해가 몇 개인지는 이 항목에서 주장하지 않는다.
:::

:::english
Let $n$ be a natural number and let $a$ and $b$ be integers. Since $n \ne 0$, the integers $a$ and $n$ are not both $0$, so $\gcd(a, n)$ is defined. Then there exists an integer $x$ with $ax \equiv b \pmod n$ exactly when $\gcd(a, n) \mid b$. That is, both of the following hold.

1. If there exists an integer $x$ with $ax \equiv b \pmod n$, then $\gcd(a, n) \mid b$.
2. If $\gcd(a, n) \mid b$, then there exists an integer $x$ with $ax \equiv b \pmod n$.

We do not claim anything here about how many solutions there are.
:::

## 직관

일차방정식 $ax = b$는 $a \ne 0$이면 $x = b/a$로 풀립니다. 정수만 쓰는 합동식에서는 사정이 다릅니다. $a$칸씩 움직이는 바늘이 $n$칸짜리 시계의 $b$번 눈금에 닿을 수 있는지를 묻는 것인데, $a$와 $n$이 공통 약수 $d$를 가지면 바늘이 닿는 눈금은 모두 $d$의 배수 눈금뿐입니다. 그러니 $b$도 $d$의 배수여야 합니다. 이 정리는 그 필요한 조건이 $\gcd(a, n)$ 하나로 충분하다고 말합니다. 비유가 맞는 곳은 "닿을 수 있는 눈금이 최대공약수의 배수"라는 점입니다.

[[inverse-modulo-n|역원]] 항목의 (1)은 $b = 1$인 경우입니다. $\gcd(a, n) \mid 1$이면 $\gcd(a, n) = 1$이기 때문입니다. 아래 예시에서 이를 확인합니다.

## 증명

:::idea
(1)은 $ax - b = nk$에서 $\gcd(a, n)$이 $a$와 $n$을 모두 나누므로 $b = ax - nk$도 나눈다는 것이다. (2)는 베주 항등식 $ax_0 + ny_0 = \gcd(a, n)$에 $b = \gcd(a, n) \cdot c$의 $c$를 곱해 $x = x_0 c$가 해임을 보인다.
:::

:::hint
(1)에서 $g = \gcd(a, n)$으로 두면 $a = ga_1$, $n = gn_1$입니다. $b$를 $ax$와 $nk$로 쓰고 $g$를 묶어 보세요.
:::

:::hint
(2)에서 [[bezout-identity|베주 항등식]]을 $a$와 $n$에 쓰고, $b = gc$의 $c$를 양변에 곱하세요. 어떤 $x$를 넣으면 $ax - b$가 $n$의 배수가 되나요?
:::

:::proof
정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)과 정수의 계산 법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)을 쓴다. $g = \gcd(a, n)$으로 쓴다. [[greatest-common-divisor|최대공약수]]의 정의에 의해 $g$는 $a$와 $n$의 공약수이므로 $a = ga_1$, $n = gn_1$인 정수 $a_1$, $n_1$이 있다.

**(1)** $ax \equiv b \pmod n$인 정수 $x$가 있다고 하자. 합동의 정의에 의해 $ax - b = nk$인 정수 $k$가 있다. 그러면
$$b = ax - nk = ga_1 x - gn_1 k = g(a_1 x - n_1 k)$$
이고 $a_1 x - n_1 k$는 정수이므로 $g \mid b$이다.

**(2)** $g \mid b$라 하자. 그러면 $b = gc$인 정수 $c$가 있다. $a$, $n$은 둘 다 $0$은 아니므로 [[bezout-identity|베주 항등식]]에 의해 $ax_0 + ny_0 = g$인 정수 $x_0$, $y_0$가 있다. $x = x_0 c$로 두면 $x$는 정수이고
$$ax - b = a x_0 c - gc = c(ax_0 - g) = c(-ny_0) = n(-cy_0)$$
이다. 셋째 등호는 $ax_0 - g = -ny_0$이기 때문이다. $-cy_0$는 정수이므로 $n \mid (ax - b)$이고 $ax \equiv b \pmod n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$14x \equiv 6 \pmod{20}$]
$14$의 양의 약수는 $1, 2, 7, 14$이고 $20$의 양의 약수는 $1, 2, 4, 5, 10, 20$이므로 공통 양의 약수는 $1, 2$이고 $\gcd(14, 20) = 2$입니다. $2 \mid 6$이므로 정리에 의해 해가 있습니다. 증명의 수를 구합니다. $20 = 1 \cdot 14 + 6$, $14 = 2 \cdot 6 + 2$이므로 $2 = 14 - 2 \cdot 6 = 14 - 2(20 - 14) = 3 \cdot 14 - 2 \cdot 20$이고 $x_0 = 3$, $y_0 = -2$입니다($42 - 40 = 2$). $6 = 2 \cdot 3$이므로 $c = 3$이고 $x = x_0 c = 9$입니다. 실제로 $14 \cdot 9 = 126$이고 $126 - 6 = 120 = 20 \cdot 6$입니다.

해는 하나가 아닐 수 있습니다. $x = 19$도 해입니다. $14 \cdot 19 = 266$이고 $266 - 6 = 260 = 20 \cdot 13$입니다. 그런데 $19 - 9 = 10$이고 $10 = 20c$이면 $c = 0.5$이므로 $20 \nmid 10$이어서 $9 \not\equiv 19 \pmod{20}$입니다. [[inverse-modulo-n|역원]]의 해가 법 $n$에 대해 하나뿐이었던 것과 다릅니다.
:::

:::example[$b = 1$인 경우]
$b = 1$이면 정리는 "$ax \equiv 1 \pmod n$인 $x$가 있는 것은 정확히 $\gcd(a, n) \mid 1$일 때"입니다. $g = \gcd(a, n)$은 $1$ 이상이고 $g \mid 1$이면 $1$의 양의 약수이므로 [[prime-number]]의 진술에 의해 $g \le 1$이어서 $g = 1$입니다. 거꾸로 $g = 1$이면 $1 \mid 1$입니다. 따라서 $\gcd(a, n) \mid 1$은 $\gcd(a, n) = 1$과 같고, [[inverse-modulo-n]]의 (1)이 나옵니다.
:::

:::example[$a = 0$과 $n = 1$]
$a = 0$이면 $\gcd(0, n) = n$([[greatest-common-divisor]]의 성질 (iv))이므로 $0 \cdot x \equiv b \pmod n$이 풀리는 것은 정확히 $n \mid b$일 때입니다. 실제로 $0 \cdot x - b = -b$이므로 이는 $n \mid (-b)$이고, $-b = nk$이면 $b = n(-k)$이고 $b = nk$이면 $-b = n(-k)$이므로 $n \mid b$와 같습니다. $n = 1$이면 $1$이 모든 정수 $a$를 나누고 $1$의 양의 약수는 $1$뿐이어서([[prime-number]]) $\gcd(a, 1) = 1$이고, $1 \mid b$이므로 늘 풀립니다. 모든 정수가 서로 합동이므로 맞습니다.
:::

:::counterexample[$\gcd(a, n)$이 $b$를 나누지 않으면 해가 없다]
$6x \equiv 4 \pmod 9$를 봅니다. $6$의 양의 약수는 $1, 2, 3, 6$이고 $9$의 양의 약수는 $1, 3, 9$이므로 공통 양의 약수는 $1, 3$이고 $\gcd(6, 9) = 3$입니다. $3 \mid 4$이면 $4 = 3c$인 정수 $c$가 있는데, [[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)에 의해 $c \le 1$이거나 $c \ge 2$이고, (Z3)에 의해 $c \le 1$이면 $3c \le 3 < 4$, $c \ge 2$이면 $3c \ge 6 > 4$이어서 불가능합니다. 따라서 $3 \nmid 4$이고 정리의 (1)에 의해 $6x \equiv 4 \pmod 9$인 정수 $x$는 없습니다.

직접 확인하면 $6x - 4 = 9k$이면 $4 = 6x - 9k = 3(2x - 3k)$이어서 $3 \mid 4$가 되므로 같은 모순입니다.
:::

## 확인 질문

:::check[$15x \equiv 10 \pmod{25}$인 정수 $x$가 있는가? 있다면 하나 구하라.]
$15$의 양의 약수는 $1, 3, 5, 15$이고 $25$의 양의 약수는 $1, 5, 25$이므로 공통 양의 약수는 $1, 5$이고 $\gcd(15, 25) = 5$입니다. $10 = 5 \cdot 2$이므로 $5 \mid 10$이고 정리에 의해 해가 있습니다. 베주 항등식 $15 \cdot 2 + 25 \cdot (-1) = 5$에서 $c = 2$이므로 $x = 2 \cdot 2 = 4$입니다. 실제로 $15 \cdot 4 = 60$이고 $60 - 10 = 50 = 25 \cdot 2$입니다.
:::

:::check[$10x \equiv 3 \pmod{15}$인 정수 $x$가 있는가?]
없습니다. $10$의 양의 약수는 $1, 2, 5, 10$이고 $15$의 양의 약수는 $1, 3, 5, 15$이므로 공통 양의 약수는 $1, 5$이고 $\gcd(10, 15) = 5$입니다. $5 \mid 3$이면 $3 = 5c$인 정수 $c$가 있는데, (Z5)와 (Z1)에 의해 $c \le 0$이거나 $c \ge 1$이고 (Z2), (Z3)에 의해 $c \le 0$이면 $5c \le 0 < 3$, $c \ge 1$이면 $5c \ge 5 > 3$이므로 불가능합니다. 따라서 정리의 (1)에 의해 해가 없습니다.
:::
