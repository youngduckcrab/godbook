---
title: 합동식의 소거 법칙
title_en: Cancellation Law for Congruences
aliases: [합동의 소거 법칙, 합동식에서 약분, cancellation law modulo n]
kind: proposition
field: number-theory
msc: ["11A07"]
level: undergrad
summary: c와 n이 서로소이면 ac ≡ bc (mod n)에서 양변의 c를 지워 a ≡ b (mod n)을 얻는다.
requires: [congruence-modulo-n, coprime-divides-product, greatest-common-divisor, divisibility, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.1절 Linear Equations Modulo n, Proposition 2.1.10 (Cancellation), p.23
    checked: original
    note: "진술은 같다(출처는 gcd(c, n) = 1이고 ac ≡ bc (mod n)이면 a ≡ b (mod n)이라 적는다). 이 항목은 a, b, c가 정수이고 n이 자연수임을 밝혀 적었다. 출처의 증명은 n | ac − bc = (a − b)c를 쓰고 'Since gcd(n, c) = 1, it follows from Theorem 1.1.6 that n | a − b'(Theorem 1.1.6은 산술의 기본 정리)라고 한 줄로 넘어간다. 산술의 기본 정리에서 n | a − b가 어떻게 나오는지는 출처에 적혀 있지 않다. 이 항목은 소인수분해에 기대지 않고 서로소인 수에 관한 coprime-divides-product(베주 항등식에서 증명됨)를 쓴다. 증명 경로가 출처와 다르다. 반례와 예시, 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $a$, $b$, $c$가 정수라 하자. $ac \equiv bc \pmod n$이고 $\gcd(c, n) = 1$이면 $a \equiv b \pmod n$이다. 여기서 $n \ne 0$이므로 $c$와 $n$은 둘 다 $0$은 아닌 정수이고, $\gcd(c, n)$은 [[greatest-common-divisor|최대공약수]]이다.
:::

:::english
Let $n$ be a natural number and let $a$, $b$, $c$ be integers. If $ac \equiv bc \pmod n$ and $\gcd(c, n) = 1$, then $a \equiv b \pmod n$. Here $n \ne 0$, so $c$ and $n$ are not both $0$, and $\gcd(c, n)$ is the greatest common divisor.
:::

## 직관

등식에서는 $5x = 5y$이면 $x = y$입니다. 양변에서 $5$를 지울 수 있기 때문입니다. 합동에서는 같은 일이 늘 되지는 않습니다. 눈금이 $12$칸인 시계에서 바늘을 한 번에 $4$칸씩 움직인다고 합시다. $0$번 움직인 자리와 $3$번 움직인 자리는 같습니다. $3 \cdot 4 = 12$가 정확히 한 바퀴이기 때문입니다. 횟수는 다른데 자리는 같으므로, 자리가 같다는 정보에서 횟수가 같다고 되돌릴 수 없습니다. 한 번에 $5$칸씩 움직이면 사정이 다릅니다. $5$와 $12$는 공통인 양의 약수가 $1$뿐이어서, 같은 자리에 오려면 횟수의 차가 $12$의 배수여야 합니다. 이 비유가 맞아떨어지는 곳은 "서로소이면 횟수를 되돌릴 수 있다"는 점이고, 증명은 비유가 아니라 아래의 계산입니다.

정수의 곱셈에서는 $c \ne 0$이면 지울 수 있다는 것이 [[integer-cancellation]]이었습니다. 합동에서는 $c \ne 0$이라는 조건으로는 부족하고 $c$와 $n$이 서로소여야 합니다. 이 조건이 [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]에서 본 "나눗셈은 합동과 양립하지 않는다"는 반례를 피하는 조건입니다.

## 증명

:::idea
$ac - bc = (a - b)c$가 $n$의 배수이다. $c$와 $n$이 서로소이므로, 곱 $c(a - b)$를 나누는 $n$은 서로소가 아닌 인수 $c$ 쪽이 아니라 $a - b$를 나눈다.
:::

:::hint
$ac \equiv bc$를 정의대로 풀면 $n \mid (ac - bc)$입니다. 이 수를 $c$와 $a - b$의 곱으로 쓸 수 있나요?
:::

:::hint
[[coprime-divides-product|곱의 한 인수와 서로소인 약수는 다른 인수를 나눈다]]의 $a$, $b$, $c$ 자리에 각각 무엇을 넣어야 하는지 정하세요. 최대공약수는 두 수의 순서를 바꿔도 같습니다.
:::

:::proof
$ac \equiv bc \pmod n$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 $n \mid (ac - bc)$이고, [[divisibility|나누어떨어짐]]의 정의에 의해 $ac - bc = nk$인 정수 $k$가 있다. 정수의 덧셈과 곱셈의 분배·교환법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)에 의해 $ac - bc = (a - b)c = c(a - b)$이므로
$$c(a - b) = nk$$
이다. $a - b$는 정수이다(정수의 차는 정수라는 기본 성질, [[even-and-odd]]에서 증명 없이 받아들임). 따라서 $n \mid c(a - b)$이다.

[[coprime-divides-product]]의 진술은 "정수 $A$, $B$, $C$에서 $A$, $B$가 둘 다 $0$은 아니고 $\gcd(A, B) = 1$이며 $A \mid BC$이면 $A \mid C$이다"이다. 여기에 $A = n$, $B = c$, $C = a - b$를 넣는다. 조건을 확인한다.

- $n$은 자연수이므로 $0$이 아니고, 따라서 $n$과 $c$는 둘 다 $0$은 아니다.
- 가정 $\gcd(c, n) = 1$과 [[greatest-common-divisor|최대공약수]]의 성질 (ii) $\gcd(c, n) = \gcd(n, c)$에 의해 $\gcd(n, c) = 1$이다.
- 위에서 $n \mid c(a - b)$, 곧 $A \mid BC$를 얻었다.

따라서 $A \mid C$, 곧 $n \mid (a - b)$이다. 합동의 정의에 의해 $a \equiv b \pmod n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\gcd(5, 12) = 1$]
$5$의 양의 약수는 $1, 5$이고 $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$이므로 공통 양의 약수는 $1$뿐이고 $\gcd(5, 12) = 1$입니다. $5 \cdot 17 = 85$, $5 \cdot 5 = 25$이고 $85 - 25 = 60 = 12 \cdot 5$이므로 $5 \cdot 17 \equiv 5 \cdot 5 \pmod{12}$입니다. 소거 법칙에 의해 $17 \equiv 5 \pmod{12}$여야 하고, 실제로 $17 - 5 = 12$입니다.
:::

:::example[$c$가 음수인 경우]
$c = -7$, $n = 10$이면 $\gcd(-7, 10) = \gcd(7, 10) = 1$입니다([[greatest-common-divisor]]의 성질 (iii)). $a = 4$, $b = -6$에서 $ac = -28$, $bc = 42$이고 $-28 - 42 = -70 = 10 \cdot (-7)$이므로 $ac \equiv bc \pmod{10}$입니다. 소거하면 $4 \equiv -6 \pmod{10}$이고, 실제로 $4 - (-6) = 10$입니다.
:::

:::example[$n = 1$인 경우]
$n = 1$이면 모든 정수 쌍이 합동이므로 결론이 늘 참입니다. 조건 $\gcd(c, 1) = 1$은 $c = 0$일 때도 성립합니다($\gcd(0, 1) = 1$, [[greatest-common-divisor]]의 성질 (iv)와 (ii)). $c = 0$이고 $n \ge 2$이면 $\gcd(0, n) = n \ne 1$이어서 조건이 성립하지 않습니다.
:::

:::counterexample[서로소가 아니면 깨진다]
$n = 12$, $c = 4$, $a = 3$, $b = 0$이면 $ac = 12$, $bc = 0$이고 $12 - 0 = 12 = 12 \cdot 1$이므로 $3 \cdot 4 \equiv 0 \cdot 4 \pmod{12}$입니다. 그러나 $3 - 0 = 3$이고 $3 = 12m$인 정수 $m$이 없으므로($m \le 0$이면 $12m \le 0 < 3$, $m \ge 1$이면 $12m \ge 12 > 3$) $3 \not\equiv 0 \pmod{12}$입니다. $4$의 양의 약수는 $1, 2, 4$이고 $12$와 공통인 것은 $1, 2, 4$이므로 $\gcd(4, 12) = 4 \ne 1$입니다.

증명이 막히는 곳은 마지막 단계입니다. $12 \mid 4 \cdot 3$이지만 $\gcd(12, 4) = 4$이므로 [[coprime-divides-product]]의 가정이 성립하지 않고, 실제로 $12 \nmid 3$입니다.
:::

:::counterexample[소거되지 않는 또 하나의 경우]
$n = 9$, $c = 6$, $a = 2$, $b = 5$이면 $ac = 12$, $bc = 30$이고 $12 - 30 = -18 = 9 \cdot (-2)$이므로 $ac \equiv bc \pmod 9$입니다. 그러나 $2 - 5 = -3$이고 $9 \nmid -3$이므로($-3 = 9m$이면 $m = -1/3$이어서 정수가 아닙니다) $2 \not\equiv 5 \pmod 9$입니다. $\gcd(6, 9) = 3$입니다. $6$의 양의 약수 $1, 2, 3, 6$과 $9$의 양의 약수 $1, 3, 9$의 공통 양의 약수는 $1, 3$이기 때문입니다.
:::

## 확인 질문

:::check[$7 \cdot 10 \equiv 7 \cdot (-5) \pmod{15}$임을 확인하고, 소거 법칙으로 $10 \equiv -5 \pmod{15}$를 얻을 수 있는 이유를 말하라.]
$7 \cdot 10 = 70$, $7 \cdot (-5) = -35$이고 $70 - (-35) = 105 = 15 \cdot 7$이므로 $7 \cdot 10 \equiv 7 \cdot (-5) \pmod{15}$입니다. $7$의 양의 약수는 $1, 7$이고 $7 \nmid 15$($15 = 7 \cdot 2 + 1$)이므로 $15$와의 공통 양의 약수는 $1$뿐이고 $\gcd(7, 15) = 1$입니다. 따라서 소거할 수 있고, 실제로 $10 - (-5) = 15 = 15 \cdot 1$입니다.
:::

:::check[$a \equiv b \pmod n$이면 $c$와 $n$이 서로소가 아니어도 $ac \equiv bc \pmod n$인가?]
네. $a - b = nk$인 정수 $k$가 있으면 $ac - bc = (a - b)c = n(kc)$이고 $kc$는 정수이므로 $n \mid (ac - bc)$입니다. 이 방향은 서로소 조건 없이 성립하고, 소거 법칙은 그 역을 서로소일 때 되찾는 것입니다.
:::
