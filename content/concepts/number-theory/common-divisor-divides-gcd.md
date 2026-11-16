---
title: 공약수는 최대공약수를 나눈다
title_en: Common Divisors Divide the Greatest Common Divisor
aliases: [common divisor divides gcd, 공약수는 gcd의 약수이다, 최대공약수의 약수 성질]
kind: corollary
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 둘 다 0은 아닌 정수 a, b와 정수 c에 대하여, c가 a와 b를 모두 나누는 것은 정확히 c가 a와 b의 최대공약수를 나눌 때이다.
requires: [bezout-identity, greatest-common-divisor, divisibility, divisibility-is-transitive, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.1.2절, Lemma 1.1.18, pp.6–7 (진술 p.6, 증명 p.7)
    checked: original
    note: "Stein의 Lemma 1.1.18은 n | a이고 n | b이면 n | gcd(a, b)라는 한쪽 방향이다(a, b, n은 정수). 증명은 Lemma 1.1.17(gcd(an, bn) = gcd(a, b)·|n|)에서 gcd(a, b) = gcd(nc₁, nc₂) = n·gcd(c₁, c₂)를 얻는다. 그런데 Lemma 1.1.17의 증명은 \"간단히 하기 위해 a, b가 둘 다 양수라고 하자\"로 일반적인 경우를 생략한다(p.6). 이 항목은 그 경로를 따르지 않고 베주 항등식으로 증명한다. 이 항목은 반대 방향(c | gcd(a, b)이면 c | a이고 c | b)을 함께 진술한다. 반대 방향은 출처에 진술이 없고 아래에서 직접 보인다. \"corollary\"로 분류하는 것은 이 사이트의 판단이다."
  - ref: hammack-book-of-proof
    loc: 7.3절, 번호 없는 Proposition (정수 m이 d = gcd(a, b)의 배수인 것은 정확히 m = ax + by인 정수 x, y가 있을 때)과 그 증명의 첫 문단, p.153
    checked: original
    note: "출처의 Proposition은 a, b가 자연수일 때 {ax + by}가 gcd(a, b)의 배수 전체라는 것이다. 증명은 베주 항등식(출처 Proposition 7.1)에서 gcd = ak + bℓ을 쓰고 gcd가 a와 b를 나눈다는 데서 나온다. 이 항목의 (⇒) 방향의 계산 \"gcd = ax + by가 c의 배수\"는 같은 발상이다. 출처의 진술은 약수 관계가 아닌 {ax + by}의 특징이므로 이 항목의 진술과 같지는 않다."
status: source-checked
added: 2026-11-16
---

:::statement
$a$, $b$가 둘 다 $0$은 아닌 정수이고 $c$가 정수일 때, $c \mid a$이고 $c \mid b$인 것은 정확히 $c \mid \gcd(a, b)$일 때이다. 곧 다음 두 명제가 모두 성립한다.

1. $c \mid a$이고 $c \mid b$이면 $c \mid \gcd(a, b)$이다.
2. $c \mid \gcd(a, b)$이면 $c \mid a$이고 $c \mid b$이다.

따라서 $a$와 $b$의 공약수는 정확히 $\gcd(a, b)$의 약수이다.
:::

:::english
Let $a$ and $b$ be integers that are not both $0$, and let $c$ be an integer. Then $c \mid a$ and $c \mid b$ exactly when $c \mid \gcd(a, b)$. That is, both of the following hold.

1. If $c \mid a$ and $c \mid b$, then $c \mid \gcd(a, b)$.
2. If $c \mid \gcd(a, b)$, then $c \mid a$ and $c \mid b$.

Hence the common divisors of $a$ and $b$ are exactly the divisors of $\gcd(a, b)$.
:::

## 직관

최대공약수는 공약수 가운데 "가장 큰" 것이라고 정의했습니다. 이 정리는 더 많은 것을 말합니다. 가장 클 뿐 아니라 다른 모든 공약수가 그 약수라는 것입니다. 예를 들어 $24$와 $36$의 공약수는 $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$이고 $\gcd(24, 36) = 12$인데, 이 공약수들이 정확히 $12$의 약수입니다.

벽돌 비유로 말하면, 두 길이를 모두 남김없이 재는 자들은 가장 긴 공통의 자 $g$를 정수 개 이어 붙인 것으로 잴 수 있는 자들뿐입니다. 한 자 $c$가 $g$를 재면 $g$로 재는 $a$, $b$도 잽니다(추이성). 거꾸로 $c$가 $a$와 $b$를 재면 [[bezout-identity|베주 항등식]]의 $g = ax + by$를 통해 $g$도 잽니다.

## 증명

:::idea
(1)은 $\gcd(a, b) = ax + by$에서 $c$가 두 항을 나누므로 합을 나눈다는 것이다. (2)는 $c \mid \gcd(a, b)$이고 $\gcd(a, b)$가 $a$와 $b$를 나누므로 나누어떨어짐의 추이성에서 나온다.
:::

:::hint
(1)에서는 [[bezout-identity|베주 항등식]]으로 $\gcd(a, b)$를 $a$와 $b$의 정수배의 합으로 쓰세요.
:::

:::hint
(2)에서는 $\gcd(a, b)$ 자신이 $a$의 약수이고 $b$의 약수라는 것과 [[divisibility-is-transitive|나누어떨어짐의 추이성]]을 쓰세요.
:::

:::proof
$g = \gcd(a, b)$로 둔다.

**(1)** $c \mid a$이고 $c \mid b$라 하자. [[divisibility|나누어떨어짐]]의 정의에 의해 $a = cm$, $b = cn$인 정수 $m$, $n$이 있다. [[bezout-identity|베주 항등식]]에 의해 $g = ax + by$인 정수 $x$, $y$가 있다. 그러면 $g = (cm)x + (cn)y = c(mx + ny)$이다. $m$, $n$, $x$, $y$가 정수이므로 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $mx + ny$는 정수이다. 따라서 $c \mid g$이다.

**(2)** $c \mid g$라 하자. [[greatest-common-divisor]]의 정의의 첫째 조건에 의해 $g$는 $a$와 $b$의 공약수이므로 $g \mid a$이고 $g \mid b$이다. $c \mid g$이고 $g \mid a$이므로 [[divisibility-is-transitive]]에 의해 $c \mid a$이다. $c \mid g$이고 $g \mid b$이므로 같은 항목에 의해 $c \mid b$이다. $\blacksquare$
:::

## 예시와 반례

:::example
$a = 24$, $b = 36$, $g = 12$일 때, $c = 4$는 $24 = 4 \cdot 6$과 $36 = 4 \cdot 9$에서 공약수이고 $12 = 4 \cdot 3$이므로 $4 \mid 12$입니다. 증명의 문자로는 $m = 6$, $n = 9$이고, $12 = 24 \cdot (-1) + 36 \cdot 1$이므로 $x = -1$, $y = 1$이며 $12 = 4(6 \cdot (-1) + 9 \cdot 1) = 4 \cdot 3$입니다.

음수 $c$도 됩니다. $c = -6$은 $24 = (-6)(-4)$, $36 = (-6)(-6)$이므로 공약수이고 $12 = (-6)(-2)$이므로 $-6 \mid 12$입니다.
:::

:::counterexample
$\gcd$ 이하라는 것만으로는 공약수가 되지 않습니다. $a = 12$, $b = 18$이면 $\gcd(12, 18) = 6$입니다. $c = 5$는 $5 \le 6$이지만 $12 = 5k$인 정수 $k$가 없어($5 \cdot 2 = 10$, $5 \cdot 3 = 15$) $5 \nmid 12$이고, $5 \nmid 6$이기도 합니다. 정의는 공약수가 $\gcd$ 이하라는 것만 말하지만, 이 정리는 공약수가 $\gcd$의 약수라는 더 강한 사실을 줍니다.
:::

## 확인 질문

:::check[$a = 48$, $b = -72$일 때 $\gcd(48, -72) = 24$이다. $c = 8$이 $a$와 $b$의 공약수인지 이 정리로 판단하라.]
$24 = 8 \cdot 3$이므로 $8 \mid 24 = \gcd(48, -72)$입니다. 정리의 (2)에 의해 $8 \mid 48$이고 $8 \mid -72$입니다. 직접 확인하면 $48 = 8 \cdot 6$, $-72 = 8 \cdot (-9)$입니다.
:::

:::check[$a = 60$, $b = 84$의 공약수 $c = 6$에 대해 증명의 $m$, $n$을 구하고, $\gcd(60, 84) = 12$를 $6$의 배수로 쓰라.]
$60 = 6 \cdot 10$, $84 = 6 \cdot 14$이므로 $m = 10$, $n = 14$입니다. $12 = 60 \cdot 3 + 84 \cdot (-2) = 180 - 168$이므로 $x = 3$, $y = -2$이고 $12 = 6(10 \cdot 3 + 14 \cdot (-2)) = 6(30 - 28) = 6 \cdot 2$입니다.
:::
