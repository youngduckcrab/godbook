---
title: 유클리드 보조정리
title_en: Euclid's Lemma
aliases: [Euclid's lemma, 유클리드의 보조정리]
kind: theorem
field: number-theory
msc: ["11A41"]
level: undergrad
summary: 소수 p가 두 정수의 곱 ab를 나누면 p는 a 또는 b를 나눈다. 여러 정수의 곱에 대해서도 p는 인수 가운데 적어도 하나를 나눈다.
requires: [prime-number, greatest-common-divisor, bezout-identity, divisibility, finite-product, mathematical-induction, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.1.2절 The Greatest Common Divisor, Theorem 1.1.19 (Euclid), p.7 (역사 서술은 서문 p.ix)
    checked: original
    note: "출처의 진술은 p가 소수이고 a, b가 자연수일 때 p | ab이면 p | a 또는 p | b이다(p.7). 이 항목은 a, b를 임의의 정수로 넓혔다. 출처의 증명(p.7)은 p ∤ a이면 p의 약수가 1과 p뿐이므로 gcd(p, a) = 1이라 하고, 'By Lemma 1.1.17, gcd(pb, ab) = b'(Lemma 1.1.17은 gcd(an, bn) = gcd(a, b)·|n|)를 쓴다. 이어서 'Since p | pb and, by hypothesis, p | ab, it follows (using Lemma 1.1.17) that p | gcd(pb, ab) = b gcd(p, a) = b · 1 = b'라고 쓴다. 출처가 둘째 단계에도 인용하는 것은 Lemma 1.1.17이다. 'p | pb, p | ab이므로 p | gcd(pb, ab)'라는 내용은 바로 앞의 Lemma 1.1.18(n | a, n | b이면 n | gcd(a, b))에 해당하지만 출처는 1.1.18을 인용하지 않는다. 이 항목은 그 보조정리를 쓰지 않고 베주 항등식으로 증명한다(아래 Hammack과 같은 경로). 출처는 이 정리를 'Euclid'라는 표시로, 증명 속에서(p.10) 'Euclid's theorem'이라고 부를 뿐 '유클리드 보조정리'라는 이름은 쓰지 않는다. 이 이름은 널리 쓰이는 이름이라 붙였다. 여러 인수 판 (2)는 출처에 진술이 없다. (2)에 해당하는 단계가 산술의 기본 정리의 증명(p.10)에서 'By induction, we see that p₁ = qᵢ for some i'로 넘어간다. 예시와 확인 질문은 새로 만들었다."
  - ref: hammack-book-of-proof
    loc: 10.1절 Proof by Induction, Proposition 10.1, p.186 (7장 연습문제 30, p.156)
    checked: original
    note: "출처의 Proposition 10.1은 n ≥ 2개의 정수 a₁, …, aₙ과 소수 p에 대해 p | (a₁·a₂⋯aₙ)이면 어떤 aᵢ에 대해 p | aᵢ라고 진술한다(p.186). 증명은 n에 대한 귀납법이고 기초 단계 n = 2에서 베주(7.3절 Proposition 7.1, p.152)를 쓴다. 이 항목의 증명은 같은 경로이다. 이 사이트가 메운 곳은 둘이다. 첫째, 출처는 p ∤ a₁이면 'p가 소수이므로' gcd(p, a₁) = 1이라고만 쓴다. 이 항목은 gcd(p, a)가 p의 양의 약수라는 데서 1이 되는 까닭을 적었다. 둘째, 출처가 베주로 인용하는 Proposition 7.1은 a, b가 자연수일 때의 진술인데 기초 단계의 a₁은 임의의 정수이다. 이 사이트의 베주 항등식은 둘 다 0은 아닌 정수에 대해 증명되어 있어 이 틈이 없다. 7장 연습문제 30(p.156)은 a, b, p가 정수이고 p가 소수일 때 두 인수 판을 증명하라는 문제이고, 책 뒤의 7장 풀이에는 30번의 풀이가 없다. 이 항목의 (2)는 n = 1도 포함한다(자명). 예시와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$p$가 소수일 때 다음 두 명제가 성립한다.

1. 모든 정수 $a$, $b$에 대하여, $p \mid ab$이면 $p \mid a$ 또는 $p \mid b$이다.
2. 모든 자연수 $n$과 정수 $a_1, a_2, \dots, a_n$에 대하여, $p \mid a_1 a_2 \cdots a_n$이면 어떤 $i \in \{1, 2, \dots, n\}$에 대하여 $p \mid a_i$이다. 여기서 $a_1 a_2 \cdots a_n$은 [[finite-product|유한 곱]]이다.
:::

:::english
Let $p$ be a prime. Then the following two statements hold.

1. For all integers $a$ and $b$, if $p \mid ab$, then $p \mid a$ or $p \mid b$.
2. For every natural number $n$ and all integers $a_1, a_2, \dots, a_n$, if $p \mid a_1 a_2 \cdots a_n$, then $p \mid a_i$ for some $i \in \{1, 2, \dots, n\}$. Here $a_1 a_2 \cdots a_n$ is the finite product.
:::

## 직관

소수는 더 쪼갤 수 없는 알갱이 같은 수입니다. 곱 $ab$가 $p$의 배수인데 $p$가 어느 쪽 인수에도 들어 있지 않다면, $p$를 쪼개 두 인수에 나누어 넣었다는 뜻일 텐데 소수는 그렇게 쪼개지지 않습니다. 합성수에서는 실제로 그런 일이 일어납니다. $10 = 2 \cdot 5$는 $4 \cdot 15 = 60$을 나누지만, $2$는 $4$ 쪽에 있고 $5$는 $15$ 쪽에 있어서 $10$은 $4$도 $15$도 나누지 않습니다. 이 비유는 소인수분해가 한 가지뿐이라는 직관에 기대는데, 그 유일성은 오히려 이 정리로 증명합니다. 그래서 증명은 아래처럼 최대공약수와 베주 항등식으로 합니다.

(1)의 증명은 두 단계입니다. $p \nmid a$이면 $\gcd(p, a)$는 $p$의 양의 약수이므로 $1$ 또는 $p$인데 $p$일 수는 없어서 $1$입니다. 그러면 [[bezout-identity|베주 항등식]]으로 $px + ay = 1$을 얻고, 양변에 $b$를 곱하면 $b$가 $p$의 배수가 되는 것을 볼 수 있습니다. (2)는 (1)을 되풀이해 쓰면 됩니다.

## 증명

:::idea
(1) $p \nmid a$이면 $\gcd(p, a) = 1$이므로 베주 항등식으로 $1 = px + ay$를 얻고 양변에 $b$를 곱한다. (2) 인수 개수 $n$에 대한 귀납법으로, 마지막 인수를 떼어 내고 (1)을 쓴다.
:::

:::hint
$p \mid a$이면 할 일이 없습니다. $p \nmid a$라 하고 $p \mid b$를 보이세요. 먼저 $\gcd(p, a)$가 얼마인지 따져 보세요. [[prime-number|소수]]의 양의 약수는 몇 개입니까?
:::

:::hint
$\gcd(p, a) = 1$을 얻었으면 [[bezout-identity|베주 항등식]]을 쓰고 양변에 $b$를 곱한 뒤, 가정 $p \mid ab$를 쓰세요.
:::

:::hint
(2)에서 $a_1 a_2 \cdots a_{n+1}$은 [[finite-product|유한 곱]]의 정의에 의해 $(a_1 \cdots a_n) \cdot a_{n+1}$입니다. 이것을 (1)의 $ab$로 보세요.
:::

:::proof
**(1)의 증명.** $a$, $b$는 정수이고 $p \mid ab$라 하자. $p \mid a$이면 결론이 성립하므로 $p \nmid a$라 하고 $p \mid b$를 보인다.

먼저 $\gcd(p, a) = 1$임을 보인다. $p$는 자연수이므로 $p \ne 0$이고, 따라서 $p$와 $a$는 둘 다 $0$은 아니어서 $g = \gcd(p, a)$가 [[greatest-common-divisor|최대공약수]]의 정의에 의해 정해진다. 정의의 첫째 조건에 의해 $g \mid p$이고 $g \mid a$이다. 같은 항목의 성질 (i)에 의해 $g \ge 1$이므로 $g$는 $p$의 양의 약수이다. $p$는 소수이므로 [[prime-number]]의 진술에 의해 $p$의 양의 약수는 $1$과 $p$뿐이고, 따라서 $g = 1$ 또는 $g = p$이다. $g = p$라 하면 $p = g \mid a$이므로 $p \mid a$이고, 이는 $p \nmid a$에 어긋난다. 그러므로 $g = 1$, 곧 $\gcd(p, a) = 1$이다.

[[bezout-identity|베주 항등식]]을 $p$와 $a$에 적용하면 $px + ay = \gcd(p, a) = 1$인 정수 $x$, $y$가 있다. 양변에 $b$를 곱하면 정수의 덧셈·곱셈의 기본 계산 규칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)에 의해
$$b = pbx + aby$$
이다. 가정 $p \mid ab$에서 $ab = pk$인 정수 $k$가 있으므로 $aby = (ab)y = pky$이다. 따라서
$$b = pbx + pky = p(bx + ky)$$
이다. $b$, $x$, $k$, $y$가 정수이므로 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $bx + ky$는 정수이다. 그러므로 $p \mid b$이다. 따라서 $p \mid a$ 또는 $p \mid b$이다.

**(2)의 증명.** $p$를 고정하고, 자연수 $n$에 대한 명제 $S_n$을 "정수의 모든 열 $a_1, \dots, a_n$에 대하여, $p \mid a_1 \cdots a_n$이면 어떤 $i \in \{1, \dots, n\}$에 대하여 $p \mid a_i$이다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 증명한다.

기초 단계. $n = 1$이면 [[finite-product]]의 정의에 의해 $a_1 \cdots a_n = a_1$이므로 $p \mid a_1$이고 $i = 1$로 두면 된다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $k$에 대하여 $S_k$가 참이라 하고, 정수의 열 $a_1, \dots, a_{k+1}$에 대하여 $p \mid a_1 \cdots a_{k+1}$이라 하자. [[finite-product]]의 정의의 둘째 줄에 의해 $a_1 \cdots a_{k+1} = (a_1 \cdots a_k) \cdot a_{k+1}$이다. 같은 항목의 성질 (P1)에 의해 $a_1 \cdots a_k$는 정수이므로 (1)을 $a = a_1 \cdots a_k$, $b = a_{k+1}$에 적용할 수 있고, $p \mid a_1 \cdots a_k$ 또는 $p \mid a_{k+1}$을 얻는다. $p \mid a_{k+1}$이면 $i = k + 1$이다. $p \mid a_1 \cdots a_k$이면 귀납 가정 $S_k$에 의해 어떤 $i \in \{1, \dots, k\}$에 대하여 $p \mid a_i$이다. 어느 경우에도 어떤 $i \in \{1, \dots, k+1\}$에 대하여 $p \mid a_i$이므로 $S_{k+1}$이 참이다. 귀납법의 원리에 의해 모든 자연수 $n$에 대하여 $S_n$이 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[소수 5와 곱 420]
$p = 5$, $a = 12$, $b = 35$라 하면 $ab = 420 = 5 \cdot 84$이므로 $5 \mid ab$입니다. 정수 $k$가 $k \le 2$이면 $5k \le 10 < 12$이고 $k \ge 3$이면 $5k \ge 15 > 12$이므로(양수를 곱해도 부등호가 유지됨) $12 = 5k$인 정수 $k$는 없어 $5 \nmid 12$이고, 정리에 의해 $5 \mid 35$여야 합니다. 실제로 $35 = 5 \cdot 7$입니다.

증명의 과정을 따라가 봅니다. $5$의 양의 약수는 $1$, $5$뿐이고 $5 \nmid 12$이므로 $\gcd(5, 12)$는 $5$일 수 없어 $\gcd(5, 12) = 1$입니다. $5 \cdot (-7) + 12 \cdot 3 = -35 + 36 = 1$이므로 $x = -7$, $y = 3$입니다. 양변에 $35$를 곱하면 $35 = 5 \cdot (-245) + 12 \cdot 35 \cdot 3$이고, $12 \cdot 35 = 5 \cdot 84$이므로 $12 \cdot 35 \cdot 3 = 5 \cdot 252$입니다. 따라서 $35 = 5(-245 + 252) = 5 \cdot 7$입니다.
:::

:::example[여러 인수]
$p = 7$이고 열 $4, 15, -21, 10$을 봅니다. 곱은 $(4 \cdot 15) \cdot (-21) = 60 \cdot (-21) = -1260$, $(-1260) \cdot 10 = -12600$이고 $-12600 = 7 \cdot (-1800)$이므로 $7$이 곱을 나눕니다. 정리의 (2)에 의해 $7$이 네 인수 중 하나를 나눕니다. 실제로 $-21 = 7 \cdot (-3)$이고, 나머지 세 인수는 $7$로 나누어떨어지지 않습니다. $7$의 음이 아닌 배수는 작은 것부터 $0, 7, 14, 21, \dots$이고 음의 배수는 $0$보다 작으므로, 양수 $4$, $10$, $15$는 $7$의 배수가 아닙니다.
:::

:::counterexample[소수가 아니면 깨진다]
$p = 6$은 소수가 아닙니다($6$의 양의 약수는 $1$, $2$, $3$, $6$). $a = 4$, $b = 9$이면 $ab = 36 = 6 \cdot 6$이므로 $6 \mid ab$입니다. 그러나 $4 = 6k$인 정수 $k$가 없고($6 \cdot 0 = 0$, $6 \cdot 1 = 6$), $9 = 6k$인 정수 $k$도 없어($6 \cdot 1 = 6$, $6 \cdot 2 = 12$) $6 \nmid 4$이고 $6 \nmid 9$입니다.

증명이 어디서 막히는지 보면, $\gcd(6, 4)$는 $6$의 양의 약수 $1, 2, 3, 6$과 $4$의 양의 약수 $1, 2, 4$의 공통 약수 $1, 2$ 중 큰 $2$입니다. 이 값은 $1$도 $6$도 아니므로, $6 \nmid 4$인데도 $\gcd(6, 4) = 1$을 얻지 못합니다. 증명의 "$\gcd(p, a)$는 $1$ 또는 $p$이다"가 모든 정수 $a$에 대해 맞는 것은 $p$의 양의 약수가 $1$과 $p$뿐일 때이고, $6$에는 $2$, $3$도 양의 약수입니다.
:::

## 역사와 맥락

Stein은 서문에서, 기원전 300년경 유클리드가 소수가 무한히 많다는 것을 증명했고 모든 양의 정수가 소수의 곱으로 유일하게 인수분해된다는 산술의 기본 정리도 영리하게(cleverly) 이끌어냈다고 적는다(p.ix). 또 이 책의 Theorem 1.1.19에 "(Euclid)"라는 표시를 붙이고, 이 책의 산술의 기본 정리 증명에 이 정리가 필요하다고 적는다(p.7).

## 확인 질문

:::check[정수 $n$에 대하여 $5 \mid n^2$이면 $5 \mid n$인가? 유클리드 보조정리로 답하라.]
$n^2 = n \cdot n$이고 $5$는 소수이므로 (1)을 $a = b = n$에 적용합니다. $5 \mid n \cdot n$이면 $5 \mid n$ 또는 $5 \mid n$이고, 어느 쪽이든 $5 \mid n$입니다. 예를 들어 $n = 10$이면 $n^2 = 100 = 5 \cdot 20$이고 $5 \mid 10$입니다. 소수가 아닌 수로는 이 결론이 틀립니다. $4 \mid 2^2$이지만 $4 \nmid 2$입니다.
:::

:::check[$7$이 정수 $a$, $b$, $c$의 곱 $abc$를 나누고 $7 \nmid a$, $7 \nmid b$이다. 어떤 결론을 얻는가?]
$abc$는 열 $a, b, c$의 [[finite-product|유한 곱]] $(a \cdot b) \cdot c$입니다. $7$은 소수이므로 (2)에 의해 $7$은 $a$, $b$, $c$ 중 하나를 나눕니다. $a$도 $b$도 나누지 않으므로 $7 \mid c$입니다.
:::
