---
title: 법 n에 대한 역원
title_en: Inverse Modulo n
aliases: [모듈러 역원, 합동식의 역원, modular inverse, multiplicative inverse modulo n, unit modulo n]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: 정수 a의 법 n 역원(ax ≡ 1 (mod n)인 x)이 있는 것은 정확히 gcd(a, n) = 1일 때이고, 역원은 법 n에 대해 하나뿐이다.
requires: [congruence-modulo-n, congruence-is-an-equivalence-relation, congruence-arithmetic, bezout-identity, greatest-common-divisor, euclidean-algorithm, divisibility, prime-number, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.1절 Linear Equations Modulo n, p.24의 역원 설명과 Proposition 2.1.13 (Units), p.24. Proposition 2.1.15 (Solvability) 증명의 첫 문단, p.25. 2.3.1절 How to Solve ax ≡ 1 (mod n), Algorithm 2.3.8 (Inverse Modulo n), p.33–34, Example 2.3.9, p.34
    checked: original
    note: "Stein은 p.24에서 aa′ ≡ 1 (mod n)인 a′을 Z/nZ에서 a의 곱셈 역원이라 부른다. Proposition 2.1.13(p.24)은 gcd(a, n) = 1이면 ax ≡ b (mod n)의 해가 있고 법 n에 대해 유일하다고 일반의 b로 진술하며, 증명은 완전잉여계 R에 대해 aR도 완전잉여계라는 Lemma 2.1.12(증명이 원소의 개수 #aR = n에 기댄다)에서 나온다. 이 사이트에는 유한집합의 세기가 없으므로 따르지 않았고, 이 항목은 b = 1인 경우만 진술하며 존재는 베주 항등식으로, 유일성은 합동의 계산으로 직접 증명한다. 역 방향(역원이 있으면 gcd(a, n) = 1)을 Stein은 따로 진술하지 않는다. Proposition 2.1.15(p.25) 증명의 첫 문단의 논증(g | n, g | a이면 g | b)에 b = 1을 넣으면 g | 1이 나오며, 이 항목의 증명도 같은 발상이다. Algorithm 2.3.8(p.33)은 Algorithm 2.3.7로 ax + ny = 1인 x, y를 구하고 이 식을 n으로 줄이면 ax ≡ 1이라고 한다(증명은 p.34 첫머리). 이 항목의 (1)의 존재 증명이 그 생각이다. 이 사이트에는 Algorithm 2.3.7(확장 유클리드 호제법)에 해당하는 항목이 없으므로, 역원을 구하는 방법은 정리가 아니라 예시의 계산으로만 보였다. '역원'이라는 한국어 이름은 출처에 나오지 않는 이 사이트의 용어이고, 출처는 inverse라고 쓴다. 출처 Example 2.3.9(p.34)는 호제법의 각 나머지를 차례로 61과 17의 결합으로 적어 내려가고, 이 항목의 예시는 줄을 거꾸로 따라간다. 1을 두 수의 결합으로 쓰는 발상은 같다. 수(23, 100)와 반례의 수는 새로 골랐다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a$가 정수라 하자. $n \ne 0$이므로 $a$와 $n$은 둘 다 $0$은 아닌 정수이고 $\gcd(a, n)$이 정해진다([[greatest-common-divisor|최대공약수]]). $ax \equiv 1 \pmod n$인 정수 $x$를 법 $n$에 대한 $a$의 **역원**(inverse of $a$ modulo $n$)이라 한다. 곧 정수 $x$가 $a$의 법 $n$ 역원인 것은 정확히 $ax \equiv 1 \pmod n$일 때이다. 그러면 다음이 성립한다.

1. $ax \equiv 1 \pmod n$인 정수 $x$가 존재하는 것은 정확히 $\gcd(a, n) = 1$일 때이다. 곧 $a$의 법 $n$ 역원이 있는 것은 정확히 $a$와 $n$이 [[greatest-common-divisor|서로소]]일 때이다.
2. $x$와 $x'$가 모두 $a$의 법 $n$ 역원이면, 곧 $ax \equiv 1 \pmod n$이고 $ax' \equiv 1 \pmod n$이면, $x \equiv x' \pmod n$이다.
:::

:::english
Let $n$ be a natural number and let $a$ be an integer. Since $n \ne 0$, the integers $a$ and $n$ are not both $0$, so $\gcd(a, n)$ is defined. An integer $x$ with $ax \equiv 1 \pmod n$ is called an **inverse of $a$ modulo $n$**. That is, an integer $x$ is an inverse of $a$ modulo $n$ exactly when $ax \equiv 1 \pmod n$. Then the following hold.

1. There exists an integer $x$ with $ax \equiv 1 \pmod n$ exactly when $\gcd(a, n) = 1$. That is, $a$ has an inverse modulo $n$ exactly when $a$ and $n$ are relatively prime.
2. If $x$ and $x'$ are both inverses of $a$ modulo $n$, that is, $ax \equiv 1 \pmod n$ and $ax' \equiv 1 \pmod n$, then $x \equiv x' \pmod n$.
:::

## 직관

실수에서 $a$의 역수는 $a \cdot x = 1$인 $x$입니다. 합동에서는 "$ax$가 $1$과 합동"이면 역수 구실을 합니다. 일차방정식 $5x = 3$을 $x = 3/5$로 푸는 것이 역수로 나누는 일이듯이, $ax \equiv b \pmod n$을 풀 때 역원이 있으면 양변에 곱해서 $x$를 얻을 수 있습니다. 이 비유가 맞는 곳은 "곱해서 $1$이 되는 수"라는 역할이고, 맞지 않는 곳은 합동에서는 역원이 모든 $a$에 있지 않다는 점입니다. 시계 비유로는, $a$칸씩 몇 번 움직여서 정확히 $1$칸 앞에 올 수 있는지를 묻는 것입니다. $a$와 $n$이 $1$보다 큰 공약수 $d$를 가지면 $a$칸씩 움직인 자리가 모두 $d$의 배수 눈금에 놓여서 $1$칸 앞에 올 수 없습니다.

역원이 있으면 [[congruence-cancellation|소거 법칙]]이 가리키는 일이 한 번에 됩니다. $ac \equiv bc$의 양변에 $c$의 역원을 곱하면 $a \equiv b$를 얻습니다. 이 항목의 증명은 소거 법칙이 아니라 [[bezout-identity|베주 항등식]]과 합동의 계산을 씁니다.

## 증명

:::idea
(1)의 $\Leftarrow$는 베주 항등식 $ax + ny = 1$에서 $ax - 1 = n(-y)$를 읽는다. $\Rightarrow$는 $ax - 1 = nk$에서 $1 = ax - nk$이므로 $\gcd(a, n)$이 $1$을 나눔을 보인다. (2)는 $x$에서 $1$을 끼워 넣어 $x \equiv x \cdot 1 \equiv x(ax') \equiv (xa)x' \equiv x'$로 계산한다.
:::

:::hint
$\gcd(a, n) = 1$이면 [[bezout-identity|베주 항등식]]에서 어떤 식을 얻나요? 그 식을 $ax - 1$ 꼴로 바꿔 보세요.
:::

:::hint
$ax \equiv 1$이면 $ax - 1 = nk$입니다. $1$을 $a$, $n$과 정수의 곱의 차로 쓰고, $\gcd(a, n)$이 $a$와 $n$을 모두 나눈다는 점을 쓰세요.
:::

:::hint
(2)는 $x$에서 시작해 한 걸음마다 합동의 계산 하나만 쓰세요. $1$을 $ax'$로 바꾸는 단계와 $xa$를 $1$로 바꾸는 단계가 있습니다.
:::

:::proof
정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)과 정수의 덧셈과 곱셈의 교환·결합·분배법칙, $1 \cdot m = m$ 등의 계산([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)을 쓴다.

**(1) $\Leftarrow$.** $\gcd(a, n) = 1$이라 하자. $a$, $n$은 둘 다 $0$은 아니므로 [[bezout-identity|베주 항등식]]에 의해 $ax + ny = \gcd(a, n) = 1$인 정수 $x$, $y$가 있다. 그러면 $ax - 1 = -ny = n(-y)$이고 $-y$는 정수이므로 $n \mid (ax - 1)$이다. 합동의 정의에 의해 $ax \equiv 1 \pmod n$이다. 곧 이 $x$가 역원이다.

**(1) $\Rightarrow$.** $ax \equiv 1 \pmod n$인 정수 $x$가 있다고 하자. 합동의 정의에 의해 $ax - 1 = nk$인 정수 $k$가 있다. $g = \gcd(a, n)$이라 하면 [[greatest-common-divisor|최대공약수]]의 정의에 의해 $g$는 $a$와 $n$의 공약수이므로 $a = ga_1$, $n = gn_1$인 정수 $a_1$, $n_1$이 있고, 성질 (i)에 의해 $g \ge 1$이다. $1 = ax - nk$이므로
$$1 = ga_1 x - gn_1 k = g(a_1 x - n_1 k)$$
이고 $a_1 x - n_1 k$는 정수이다. 따라서 $g \mid 1$이다. $g \ge 1$이므로 $g$는 $1$의 양의 약수이고 [[prime-number]]의 진술("자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$")에 의해 $g \le 1$이다. $g \ge 1$이고 $g \le 1$이므로 [[well-ordering-principle]]의 (L2)에 의해 $g = 1$이다.

**(2)** $ax \equiv 1 \pmod n$이고 $ax' \equiv 1 \pmod n$이라 하자. 합동에 관한 다음 사실을 쓴다. [[congruence-is-an-equivalence-relation|합동은 동치관계]]이므로 반사적, 대칭적, 추이적이다. 또 [[congruence-arithmetic|합동의 계산 법칙]]의 (2)에 의해 $p \equiv q$이고 $s \equiv t$이면 $ps \equiv qt \pmod n$이다. 다음 단계를 차례로 밟는다.

1. $x \equiv x \cdot 1 \pmod n$이다. $x \cdot 1$은 정수 $x$ 자신이므로 합동의 반사성에 의한다.
2. $x \cdot 1 \equiv x \cdot (ax') \pmod n$이다. $ax' \equiv 1$이므로 대칭성에 의해 $1 \equiv ax'$이고, $x \equiv x$(반사성)이므로 [[congruence-arithmetic|합동의 계산 법칙]]의 (2)에서 $(p, q, s, t) = (x, x, 1, ax')$로 둔다.
3. $x \cdot (ax') = (xa) \cdot x'$이다. 곱셈의 결합법칙에 의한다.
4. $(xa) \cdot x' \equiv 1 \cdot x' \pmod n$이다. 교환법칙에 의해 $xa = ax \equiv 1$이고 $x' \equiv x'$(반사성)이므로 [[congruence-arithmetic|합동의 계산 법칙]]의 (2)에서 $(p, q, s, t) = (xa, 1, x', x')$로 둔다.
5. $1 \cdot x' = x'$이다.

1, 2단계에서 $x \equiv x \cdot (ax')$이고(추이성), 3단계에서 이 수는 $(xa)x'$이며, 4단계와 추이성에 의해 $x \equiv (xa)x' \equiv 1 \cdot x' = x'$이다. 곧 $x \equiv x' \pmod n$이다. $\blacksquare$
:::

:::remark[(2)의 역]
역원에 합동인 수는 또 역원입니다. $x$가 $a$의 법 $n$ 역원이고 $x' \equiv x \pmod n$이면 [[congruence-arithmetic|합동의 계산 법칙]]의 (2)를 $p = q = a$, $s = x'$, $t = x$에 적용해($a \equiv a$는 반사성) $ax' \equiv ax \pmod n$이고, $ax \equiv 1$이므로 추이성에 의해 $ax' \equiv 1 \pmod n$입니다. 따라서 (2)와 합치면, 역원이 있을 때 $a$의 법 $n$ 역원 전체는 정확히 하나의 동치류를 이룹니다. 곧 $x_0$가 역원이면 역원 전체의 집합은 [[congruence-is-an-equivalence-relation|합동 관계]]의 동치류 $[x_0] = \{y \in \mathbb{Z} : y \equiv x_0 \pmod n\}$입니다.
:::

## 예시와 반례

:::example[$23x \equiv 1 \pmod{100}$의 역원 구하기]
먼저 [[euclidean-algorithm|유클리드 호제법]]의 나눗셈을 적습니다. $100 = 4 \cdot 23 + 8$, $23 = 2 \cdot 8 + 7$, $8 = 1 \cdot 7 + 1$, $7 = 7 \cdot 1 + 0$입니다. 각 줄은 $92 + 8 = 100$, $16 + 7 = 23$, $7 + 1 = 8$, $7 + 0 = 7$로 맞습니다. 호제법의 입력이 $(100, 23)$이고 나머지가 $0$이 되기 직전의 나머지가 $1$이므로 $\gcd(100, 23) = 1$이고, [[greatest-common-divisor]]의 성질 (ii)에 의해 $\gcd(23, 100) = 1$입니다. (1)에 의해 역원이 있습니다.

역원을 구하려면 줄을 거꾸로 따라가며 $1$을 $23$과 $100$으로 나타냅니다. 셋째 줄에서 $1 = 8 - 1 \cdot 7$입니다. 둘째 줄에서 $7 = 23 - 2 \cdot 8$이므로 $1 = 8 - (23 - 2 \cdot 8) = 3 \cdot 8 - 23$입니다. 첫째 줄에서 $8 = 100 - 4 \cdot 23$이므로
$$1 = 3(100 - 4 \cdot 23) - 23 = 3 \cdot 100 - 13 \cdot 23$$
입니다. 확인하면 $3 \cdot 100 = 300$, $13 \cdot 23 = 299$이고 $300 - 299 = 1$입니다. 곧 $23 \cdot (-13) + 100 \cdot 3 = 1$이고 $23 \cdot (-13) - 1 = -300 = 100 \cdot (-3)$이므로 $x = -13$이 역원입니다. $0$ 이상 $99$ 이하의 대표로는 $-13 + 100 = 87$이고, $23 \cdot 87 = 2001 = 20 \cdot 100 + 1$입니다. 이것은 호제법을 거꾸로 따라가는 계산을 보인 것이고, 이 계산이 항상 통한다는 정리를 주장하는 것은 아닙니다. 위 $x$가 실제로 역원이라는 것은 $2001 - 1 = 2000 = 100 \cdot 20$으로 직접 확인됩니다.
:::

:::example[$n = 1$인 경우]
$n = 1$이면 모든 정수 $x$에 대하여 $ax - 1 = 1 \cdot (ax - 1)$이므로 $ax \equiv 1 \pmod 1$입니다. 곧 모든 정수가 역원입니다. $\gcd(a, 1) = 1$도 모든 정수 $a$에 대하여 성립합니다. $1$은 모든 정수 $a$를 나누고($a = 1 \cdot a$), $1$도 $1$을 나누므로 $1$은 $a$와 $1$의 공약수이며, $1$의 양의 약수는 $1$뿐이어서([[prime-number]]) 공약수 가운데 $1$보다 큰 것이 없고 $0$ 이하인 공약수는 $1$보다 작습니다. $a = 0$이어도 $0 = 1 \cdot 0$이므로 같습니다. 따라서 (1)의 두 조건이 모두 참이고, (2)도 모든 정수가 서로 합동이므로 성립합니다.
:::

:::example[법 2의 역원]
$n = 2$, $a = 3$이면 $2$의 양의 약수 $1, 2$ 가운데 $3$을 나누는 것은 $1$뿐이므로 $\gcd(3, 2) = 1$이고 $3 \cdot 1 = 3$, $3 - 1 = 2 = 2 \cdot 1$이므로 $x = 1$이 역원입니다. $x = 5$도 역원입니다. $3 \cdot 5 - 1 = 14 = 2 \cdot 7$입니다. 그리고 $5 - 1 = 4$는 $2$의 배수이므로 (2)가 말하는 대로 $5 \equiv 1 \pmod 2$입니다.
:::

:::counterexample[서로소가 아니면 역원이 없다]
$a = 6$, $n = 15$이면 $6$의 양의 약수는 $1, 2, 3, 6$이고 $15$의 양의 약수는 $1, 3, 5, 15$이므로 공통 양의 약수는 $1, 3$이고 $\gcd(6, 15) = 3 \ne 1$입니다. $6x \equiv 1 \pmod{15}$인 정수 $x$가 있다고 하면 $6x - 1 = 15k$인 정수 $k$가 있고 $1 = 6x - 15k = 3(2x - 5k)$이어서 $3 \mid 1$입니다. 그런데 $1$의 양의 약수 $d$는 $d \le 1$이어야 하는데 $3 > 1$이므로 모순입니다. 따라서 역원이 없습니다.
:::

:::counterexample[역원은 같은 수가 아니라 합동인 수이다]
(2)는 $x = x'$이 아니라 $x \equiv x' \pmod n$을 말합니다. 위의 $23$과 $100$에서 $x = -13$과 $x' = 87$은 모두 역원이지만 서로 다른 수입니다. 차는 $87 - (-13) = 100 = 100 \cdot 1$이어서 합동입니다. $x'' = 187$도 역원입니다. $23 \cdot 187 = 4301$이고 $4301 - 1 = 4300 = 100 \cdot 43$입니다.
:::

## 확인 질문

:::check[법 $12$에서 $7$의 역원을 하나 구하고 확인하라. 호제법의 줄을 거꾸로 따라가라.]
$12 = 1 \cdot 7 + 5$, $7 = 1 \cdot 5 + 2$, $5 = 2 \cdot 2 + 1$, $2 = 2 \cdot 1 + 0$이므로 $\gcd(7, 12) = 1$입니다. 거꾸로 $1 = 5 - 2 \cdot 2$이고 $2 = 7 - 5$이므로 $1 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7$이고, $5 = 12 - 7$이므로 $1 = 3(12 - 7) - 2 \cdot 7 = 3 \cdot 12 - 5 \cdot 7$입니다. 따라서 $7 \cdot (-5) - 1 = -36 = 12 \cdot (-3)$이고 $x = -5$가 역원입니다. $-5 + 12 = 7$이므로 $x = 7$도 역원이고, 실제로 $7 \cdot 7 = 49 = 4 \cdot 12 + 1$입니다.
:::

:::check[$4x \equiv 1 \pmod{10}$인 정수 $x$가 있는가?]
없습니다. $4x - 1 = 10k$인 정수 $k$가 있다고 하면 $4x - 10k = 1$인데 왼쪽은 $2(2x - 5k)$이므로 짝수이고 $1$은 홀수입니다. [[even-and-odd]]에서 받아들인 대로 어떤 정수도 짝수이면서 홀수일 수 없으므로 모순입니다. 이는 $\gcd(4, 10) = 2 \ne 1$이어서 (1)에 의해 역원이 없다는 것과 같은 결론입니다.
:::
