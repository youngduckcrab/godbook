---
title: 베주 항등식
title_en: Bézout's Identity
aliases: [Bezout's identity, Bézout's identity, 베주의 항등식, 확장 유클리드 표현, extended Euclidean representation]
kind: theorem
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 둘 다 0은 아닌 정수 a, b에 대하여 ax + by가 a와 b의 최대공약수와 같아지는 정수 x, y가 존재한다.
requires: [greatest-common-divisor, euclidean-algorithm, division-theorem, well-ordering-principle, divisibility, prime-number, even-and-odd]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 7.3절 Existence Proofs; Existence and Uniqueness Proofs, Proposition 7.1, p.152 (바로 이어지는 번호 없는 Proposition은 p.153)
    checked: original
    note: "출처의 Proposition 7.1은 a, b가 자연수일 때 gcd(a, b) = ak + bℓ인 정수 k, ℓ이 있다는 것이다(p.152). 이 항목은 둘 다 0은 아닌 정수 a, b로 넓혀 진술한다. 증명은 출처의 방식(집합 {ax + by}의 가장 작은 양의 원소 d를 잡고, 나눗셈 정리로 d가 a와 b를 나눔을 보인 뒤, gcd의 배수이면서 공약수이므로 d = gcd임을 보인다)을 따른다. 출처는 이 집합에 양의 원소가 있음을 a, b가 자연수인 경우에 괄호로 설명하고(y = 0이면 ax가 a의 모든 배수), 정렬 원리라는 말 없이 \"smallest positive element\"를 쓴다. 아래는 a, b의 부호에 따라 실제 양의 원소를 제시하고 well-ordering-principle의 (가)를 쓴다. 출처는 \"d는 gcd(a, b)의 배수이다. 그러므로 d ≥ gcd(a, b)\"를 근거 없이 쓰는데, 아래는 prime-number 진술의 \"양의 약수 d는 n 이하\"를 쓴다. \"베주\"라는 이름은 이 출처에 나오지 않는다(널리 쓰이는 이름이다). 예시와 반례는 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 2.3.1절, Proposition 2.3.1 (Extended Euclidean Representation), p.32
    checked: original
    note: "Stein의 Proposition 2.3.1은 a, b ∈ Z이고 g = gcd(a, b)이면 ax + by = g인 x, y ∈ Z가 있다고 한다(p.32). Stein은 gcd(0, 0) = 0으로 두므로 a = b = 0인 경우도 포함하는데, 이 사이트는 그 경우를 정의하지 않으므로 둘 다 0은 아닌 경우만 진술한다. Stein의 증명은 gcd(a/g, b/g) = 1이라는 사실(증명 없음)과 합동식 (a/g)x ≡ 1 (mod b/g)의 풀이 가능성(Proposition 2.1.15)에 기대는데, 이 항목은 그 경로를 따르지 않는다. 이 이름(\"베주\")은 Stein에도 나오지 않는다. 같은 쪽 Remark 2.3.2는 gcd의 배수가 ax + by 꼴이라는 것이며 아래 증명에는 쓰지 않았다. 확인 질문 2는 Remark 2.3.2의 발상이다."
status: source-checked
added: 2026-11-16
---

:::statement
$a$, $b$가 둘 다 $0$은 아닌 정수일 때, 
$$ax + by = \gcd(a, b)$$
를 만족하는 정수 $x$, $y$가 존재한다. 여기서 $\gcd(a, b)$는 [[greatest-common-divisor|최대공약수]]이다.
:::

:::english
Let $a$ and $b$ be integers that are not both $0$. Then there exist integers $x$ and $y$ such that
$$ax + by = \gcd(a, b).$$

Here $\gcd(a, b)$ is the greatest common divisor.
:::

## 직관

$ax + by$는 $a$와 $b$를 정수배해서 더하거나 뺀 수입니다. 길이 $a$와 $b$인 두 막대로, 막대를 앞으로 또는 뒤로 이어 붙이기만 해서 만들 수 있는 길이가 $ax + by$ 꼴입니다. 이렇게 만들 수 있는 양의 길이 가운데 가장 짧은 것이 두 막대의 공약수이면서 가장 큰 공약수라는 것이 이 정리입니다.

왜 그럴 법한지는 나눗셈에서 보입니다. 만들 수 있는 가장 짧은 양의 길이 $d$로 $a$를 나누면 나머지도 만들 수 있는 길이인데, 나머지는 $d$보다 짧으므로 $0$이어야 합니다. 그래서 $d$는 $a$를 나누고 $b$도 나눕니다. 반대로 $a$와 $b$의 어떤 공약수도 $ax + by$를 나누므로 $d$를 나눕니다. 그러면 $d$는 가장 큰 공약수가 됩니다.

[[euclidean-algorithm]]을 거꾸로 따라가면 구체적인 $x$, $y$를 계산할 수 있습니다(예시 참조).

## 증명

:::idea
집합 $\{ax + by\}$의 가장 작은 양의 원소 $d$를 [[well-ordering-principle]]로 잡는다. [[division-theorem|나눗셈 정리]]로 $d$가 $a$와 $b$를 나눔을 보이고, $\gcd(a, b)$가 $d$를 나누므로 $d$가 $\gcd(a, b)$ 이상임을 보인 뒤, $d$가 공약수이므로 $d = \gcd(a, b)$이다.
:::

:::hint
$A = \{ax + by : x, y \in \mathbb{Z}\}$에서 양의 원소들의 집합이 공집합이 아님을 먼저 보이세요. $a \ne 0$이면 $a$의 부호에 따라 $x = 1$ 또는 $x = -1$, $y = 0$이 양의 원소를 줍니다.
:::

:::hint
가장 작은 양의 원소 $d = ak + b\ell$로 $a$를 나눈 나머지 $r = a - qd$도 $A$의 원소입니다. $0 \le r < d$이면 $r$이 양일 수 있는지 따져 보세요.
:::

:::proof
$A = \{ax + by : x, y \in \mathbb{Z}\}$로 두고, $P = \{m \in A : m > 0\}$으로 둔다. $A$의 원소는 정수 $a$, $b$, $x$, $y$의 곱과 합이므로 정수이다([[even-and-odd]]에서 받아들인 사실).

**$P$는 공집합이 아니다.** $a$, $b$가 둘 다 $0$은 아니므로 $a \ne 0$이거나 $b \ne 0$이다. $a \ne 0$이면 (Z5)에 의해 $a > 0$ 또는 $a < 0$이다. $a > 0$이면 $x = 1$, $y = 0$에서 $ax + by = a > 0$이므로 $a \in P$이다. $a < 0$이면 $x = -1$, $y = 0$에서 $ax + by = -a$이고, $a < 0$의 양변에 $-a$를 더하면 (Z7)에 의해 $0 < -a$이므로 $-a \in P$이다. $a = 0$이면 $b \ne 0$이다. $b > 0$이면 $x = 0$, $y = 1$에서 $b \in P$이고, $b < 0$이면 (Z7)에 의해 $0 < -b$이므로 $x = 0$, $y = -1$에서 $-b \in P$이다.

$P$의 원소는 모두 양의 정수이므로 (Z1)에 의해 $1$ 이상이어서, $P$는 $1$을 아래 경계로 갖는 공집합이 아닌 정수의 집합이다. [[well-ordering-principle]]의 (가)에 의해 $P$는 최소 원소 $d$를 갖는다. $d \in A$이므로 $d = ak + b\ell$인 정수 $k$, $\ell$이 있고, $d > 0$이다.

**$d$는 $a$와 $b$의 공약수이다.** $d$는 양의 정수이므로 [[division-theorem]]에 의해 $a = qd + r$, $0 \le r < d$인 정수 $q$, $r$이 있다. $r = a - qd = a - q(ak + b\ell) = a(1 - qk) + b(-q\ell)$이고 $1 - qk$, $-q\ell$이 정수이므로 $r \in A$이다. $r > 0$이라 하면 $r \in P$이고 $d$가 $P$의 최소 원소이므로 $d \le r$이다. 그러나 $r < d$이므로 이 둘은 [[well-ordering-principle]]의 (L1)에 의해 함께 성립할 수 없다. 따라서 $r > 0$이 아니고, $0 \le r$이므로 (Z5)에 의해 $r = 0$이다. 곧 $a = qd$이고 $d \mid a$이다. 같은 방식으로 $b = q'd + r'$, $0 \le r' < d$인 정수 $q'$, $r'$을 잡으면 $r' = b - q'd = b - q'(ak + b\ell) = a(-q'k) + b(1 - q'\ell)$이므로 $r' \in A$이다. $r' > 0$이면 $d \le r'$이고 $r' < d$이므로 (L1)에 어긋난다. 따라서 $r' = 0$이고 $b = q'd$, 곧 $d \mid b$이다. 그러므로 $d$는 $a$와 $b$의 공약수이다.

**$d = \gcd(a, b)$이다.** $g = \gcd(a, b)$로 둔다. [[greatest-common-divisor]]의 정의에 의해 $g$는 $a$와 $b$의 공약수이므로 $a = gs$, $b = gt$인 정수 $s$, $t$가 있다. 그러면 $d = ak + b\ell = gsk + gt\ell = g(sk + t\ell)$이고 $sk + t\ell$이 정수이므로 $g \mid d$이다. 성질 (i)에 의해 $g \ge 1$이고, (Z8) $0 < 1$과 (Z6)에 의해 $g > 0$이므로 $g$는 양의 정수이다. $d$는 자연수이고 $g$는 $d$의 양의 약수이므로, [[prime-number]]의 진술에 적힌 "자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$을 만족한다"에 의해 $g \le d$이다(그 진술의 $n$ 자리에 $d$를, $d$ 자리에 $g$를 넣는다). 한편 $d$는 위에서 보았듯 $a$와 $b$의 공약수이므로 [[greatest-common-divisor]]의 정의의 둘째 조건에 의해 $d \le g$이다. $g \le d$와 $d \le g$에서 [[well-ordering-principle]]의 (L2)에 의해 $d = g$이다.

따라서 $ak + b\ell = d = \gcd(a, b)$이고 $x = k$, $y = \ell$이 구하는 정수이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\gcd(35, 91) = 7$]
[[euclidean-algorithm]]의 줄들을 거꾸로 따라갑니다. $91 = 2 \cdot 35 + 21$, $35 = 1 \cdot 21 + 14$, $21 = 1 \cdot 14 + 7$입니다. 끝에서부터 $7 = 21 - 14$이고, $14 = 35 - 21$을 넣으면 $7 = 21 - (35 - 21) = 2 \cdot 21 - 35$입니다. $21 = 91 - 2 \cdot 35$를 넣으면 $7 = 2(91 - 2 \cdot 35) - 35 = 2 \cdot 91 - 5 \cdot 35$입니다. 곧 $x = -5$, $y = 2$이고 $35 \cdot (-5) + 91 \cdot 2 = -175 + 182 = 7$입니다. 이 경우 $A$의 가장 작은 양의 원소가 $7$입니다.
:::

:::example[음수와 $0$이 섞인 경우]
$a = -12$, $b = 18$이면 $\gcd(-12, 18) = 6$이고 $(-12) \cdot 1 + 18 \cdot 1 = 6$입니다. $a = 0$, $b = -5$이면 $\gcd(0, -5) = 5$이고 $0 \cdot x + (-5) \cdot (-1) = 5$이므로 $x$는 아무 정수이고 $y = -1$입니다.
:::

:::counterexample
**$x$, $y$는 유일하지 않다.** $ax + by = g$이면 $a(x + b) + b(y - a) = ax + ab + by - ab = ax + by = g$이므로 $(x + b, y - a)$도 답입니다. 이 항목은 해 전체를 기술하지는 않습니다. $a = 6$, $b = 4$에서 $\gcd(6, 4) = 2$이고 $6 \cdot 1 + 4 \cdot (-1) = 2$입니다. 그러나 $6 \cdot (-1) + 4 \cdot 2 = 2$이고 $6 \cdot 3 + 4 \cdot (-4) = 18 - 16 = 2$이기도 합니다. $(1, -1)$, $(-1, 2)$, $(3, -4)$가 모두 답입니다.

**$\gcd$보다 작은 양수는 만들 수 없다.** $a = 6$, $b = 4$에서 $ax + by = 6x + 4y = 2(3x + 2y)$는 항상 짝수이므로 $1$이 될 수 없습니다. $\gcd(6, 4) = 2$보다 작은 양의 정수 $1$을 $6x + 4y$로 만들 수는 없습니다.
:::

## 확인 질문

:::check[$a = 14$, $b = 10$에 대해 $14x + 10y = \gcd(14, 10)$인 정수 $x$, $y$를 하나 구하라.]
$\gcd(14, 10) = 2$입니다($14 = 1 \cdot 10 + 4$, $10 = 2 \cdot 4 + 2$, $4 = 2 \cdot 2 + 0$). 거꾸로 $2 = 10 - 2 \cdot 4 = 10 - 2(14 - 10) = 3 \cdot 10 - 2 \cdot 14$이므로 $x = -2$, $y = 3$이고 $14 \cdot (-2) + 10 \cdot 3 = -28 + 30 = 2$입니다.
:::

:::check[$\gcd(15, 25) = 5$임을 이용해 $15x + 25y = 40$인 정수 $x$, $y$를 하나 구하라.]
$15 \cdot 2 + 25 \cdot (-1) = 30 - 25 = 5$이므로 양변에 $8$을 곱하면 $15 \cdot 16 + 25 \cdot (-8) = 240 - 200 = 40$입니다. 곧 $x = 16$, $y = -8$입니다. 베주 항등식으로 얻은 $\gcd$의 표현을 정수배한 것입니다.
:::
