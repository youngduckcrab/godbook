---
title: 오일러 피 함수
title_en: Euler's Phi Function
aliases: [오일러 파이 함수, 오일러 φ 함수, Euler's totient function, Euler's phi function]
kind: definition
field: number-theory
msc: ["11A25"]
level: undergrad
summary: 자연수 n에 대해 1부터 n까지의 정수 가운데 n과 서로소인 것의 개수를 φ(n)이라 하고, φ(n) ≥ 1이며 소수 p에서는 φ(p) = p − 1이다.
requires: [division-theorem, finite-set, number-of-elements-is-unique, subset-of-finite-set, greatest-common-divisor, divisibility, prime-number, well-ordering-principle, even-and-odd]
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.2절 Euler's Theorem, Definition 2.1.18 (Euler's ϕ-function), p.26. 집합 P는 같은 절 Theorem 2.1.20의 증명, p.27
    checked: original
    note: "출처의 정의는 ϕ(n) = #{a ∈ N : a ≤ n and gcd(a, n) = 1}이고 이 항목의 φ(n)과 같은 수이다(출처의 N은 자연수 전체, 곧 a ≥ 1이다). 출처는 집합에 이름을 붙이지 않고, 오일러 정리의 증명(p.27)에서 같은 집합을 P로 쓴다. 이 항목은 n마다 달라지는 집합이므로 P_n으로 쓴다. 출처는 #(원소의 개수)가 정해진다는 것과 그 집합이 유한하다는 것을 말하지 않고 넘어간다. 이 항목은 finite-set, subset-of-finite-set, number-of-elements-is-unique로 그 둘을 보였다. φ(n) ≥ 1과 n ≥ 2이면 n ∉ P_n은 출처에 없고 이 사이트가 증명했다(거듭제곱의 지수가 자연수여야 하므로 φ(n) ≥ 1이 뒤에서 필요하다). 출처는 ϕ(1) = #{1} = 1이라고 근거 없이 적고, 이 항목은 P_1 = {1}을 증명한다. 출처는 소수 p에서 ϕ(p) = #{1, 2, ..., p − 1} = p − 1이라고 근거 없이 적고, 이 항목은 그것을 증명한다. 출처가 같은 자리에서 든 예 가운데 ϕ(2), ϕ(5), ϕ(12)와 SAGE 계산은 쓰지 않았고(ϕ(1)의 값은 진술 3에서 증명했다), 예시의 n = 10, 소수 7과 합성수 9는 새로 골랐다(소수 p에서 {1, ..., p − 1}이 된다는 발상은 출처 p.26과 같다). 출처에 있는 ϕ의 곱셈성과 ϕ(p^k)는 이 항목에서 다루지 않는다. '오일러 피 함수'라는 한국어 이름은 출처에 나오지 않는 이 사이트의 용어이고, 출처는 Euler's ϕ-function이라 쓴다. aliases의 totient라는 이름도 출처에 나오지 않는다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수일 때
$$P_n = \{a \in \mathbb{Z} : 1 \le a \le n \text{이고 } \gcd(a, n) = 1\}$$
로 정한다. $n \ne 0$이므로 모든 정수 $a$에 대하여 $a$와 $n$은 둘 다 $0$은 아니고, $\gcd(a, n)$은 [[greatest-common-divisor|최대공약수]]이다. 곧 정수 $a$가 $P_n$의 원소인 것은 정확히 $1 \le a \le n$이고 $a$와 $n$이 [[greatest-common-divisor|서로소]]일 때이다. "원소를 $m$개 갖는다"와 원소의 개수 $|P_n|$은 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수의 유일성]]의 뜻이다.

1. $P_n \subseteq \{1, \dots, n\}$이고 $P_n$은 유한집합이며 $0 \le |P_n| \le n$이다. 이 정수 $|P_n|$을 $\varphi(n)$으로 쓰고, 자연수 $n$에 정수 $\varphi(n)$을 하나씩 정하는 이 규칙을 **오일러 피 함수**(Euler's phi function)라 한다. 곧 $\varphi(n) = |P_n|$이고, $P_n$이 원소를 $\varphi(n)$개 갖는다.
2. $1 \in P_n$이고 $\varphi(n) \ge 1$이다. 따라서 $\varphi(n)$은 자연수이다.
3. $n = 1$이면 $P_1 = \{1\}$이고 $\varphi(1) = 1$이다. $n \ge 2$이면 $n \notin P_n$이고, 따라서 $P_n \subseteq \{1, \dots, n - 1\}$이다.
4. $p$가 소수이면 $P_p = \{1, \dots, p - 1\}$이고 $\varphi(p) = p - 1$이다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
For a natural number $n$, let
$$P_n = \{a \in \mathbb{Z} : 1 \le a \le n \text{ and } \gcd(a, n) = 1\}.$$
Since $n \ne 0$, for every integer $a$ the integers $a$ and $n$ are not both $0$, and $\gcd(a, n)$ is the greatest common divisor. That is, an integer $a$ belongs to $P_n$ exactly when $1 \le a \le n$ and $a$ and $n$ are relatively prime. The phrase "has $m$ elements" and the number of elements $|P_n|$ have the meanings fixed for finite sets.

1. $P_n \subseteq \{1, \dots, n\}$, the set $P_n$ is finite, and $0 \le |P_n| \le n$. We write this integer $|P_n|$ as $\varphi(n)$, and the rule that assigns the integer $\varphi(n)$ to each natural number $n$ is called **Euler's phi function**. That is, $\varphi(n) = |P_n|$, and $P_n$ has $\varphi(n)$ elements.
2. $1 \in P_n$ and $\varphi(n) \ge 1$. Hence $\varphi(n)$ is a natural number.
3. If $n = 1$, then $P_1 = \{1\}$ and $\varphi(1) = 1$. If $n \ge 2$, then $n \notin P_n$, and therefore $P_n \subseteq \{1, \dots, n - 1\}$.
4. If $p$ is a prime number, then $P_p = \{1, \dots, p - 1\}$ and $\varphi(p) = p - 1$.
:::

## 직관

$1$부터 $n$까지 번호표를 늘어놓고, $n$과 $1$보다 큰 공통의 약수를 갖는 번호를 체로 걸러 낸다고 생각해 봅시다. 체에 남는 번호의 집합이 $P_n$이고, 남은 번호가 몇 개인지가 $\varphi(n)$입니다. 이 비유가 맞아떨어지는 곳은 "거르는 규칙은 $\gcd(a, n) = 1$ 하나뿐이고 남은 것을 센 것이 $\varphi(n)$"이라는 점입니다. 어긋나는 곳은, 체는 번호를 하나씩 대 보게 할 뿐이어서 $\varphi(n)$의 값을 미리 알려 주는 공식이 정의에는 없다는 점입니다. 이 항목이 증명하는 것은 $n = 1$이거나 $n$이 소수일 때의 값과, $\varphi(n)$이 늘 $1$ 이상이라는 것뿐입니다.

범위를 $1$부터 $n$까지로 잡은 것은 $n = 1$에서만 의미가 있습니다. $n \ge 2$이면 $\gcd(n, n)$이 $1$이 아니고 $\gcd(0, n) = n$([[greatest-common-divisor]]의 성질 (iv))도 $1$이 아니어서, $n$과 $0$은 어느 쪽으로 잡아도 들어오지 않습니다. $n = 1$이면 $1$이 들어와 $P_1 = \{1\}$입니다.

$\varphi(n) \ge 1$이라는 말은 사소해 보이지만 뒤에서 필요합니다. 거듭제곱 $x^k$는 $k$가 자연수일 때만 뜻이 정해져 있으므로, $x^{\varphi(n)}$을 쓰려면 $\varphi(n)$이 자연수여야 합니다.

## 기본 사실의 증명

:::proof
**1.** 정수 $a$가 $P_n$의 원소이면 정의에 의해 $1 \le a \le n$이므로 $a \in \{1, \dots, n\}$이다. 따라서 $P_n \subseteq \{1, \dots, n\}$이다. [[finite-set]]의 (F2)에 의해 $\{1, \dots, n\}$은 원소를 $n$개 갖는다. 그러므로 [[subset-of-finite-set]]의 1에 의해 $P_n$은 유한집합이고 $|P_n| \le n$이다. 원소의 개수 $|P_n|$은 [[number-of-elements-is-unique]]의 1에 의해 하나의 정수로 정해지고, [[finite-set]]의 정의에서 "원소를 $m$개 갖는다"의 $m$은 $0$ 이상이므로 $0 \le |P_n|$이다.

**2.** $g = \gcd(1, n)$이라 하자($1$과 $n$은 둘 다 $0$은 아니다). [[greatest-common-divisor]]의 성질 (i)에 의해 $g \ge 1$이고 (Z8), (Z6)에 의해 $g > 0$이다. $g$는 $1$과 $n$의 공약수이므로 $g \mid 1$이다. 곧 $g$는 자연수 $1$의 양의 약수이고, [[prime-number]]의 진술에 의해 자연수의 양의 약수는 그 수 이하이므로 $g \le 1$이다. $g \ge 1$과 $g \le 1$에서 (L2)에 의해 $g = 1$이다. 또 $n$은 양의 정수이므로 (Z1)에 의해 $1 \le n$이고, $1 \le 1$이므로 $1 \in P_n$이다.

$m = \varphi(n) = |P_n|$이라 하자. $m = 0$이면 $P_n$이 원소를 $0$개 가지므로 [[finite-set]]의 (F2)에 의해 $P_n = \emptyset$이고, $1 \in P_n$에 어긋난다. 따라서 $m \ne 0$이고 $m \ge 0$이므로(≤의 뜻에 의해) $0 < m$이며, (Z1)에 의해 $m \ge 1$이다.

**3.** $n = 1$이라 하자. $a \in P_1$이면 $1 \le a \le 1$이므로 (L2)에 의해 $a = 1$이다. 따라서 $P_1 \subseteq \{1\}$이고, 2에 의해 $1 \in P_1$이므로 $P_1 = \{1\} = \{1, \dots, 1\}$이다. [[finite-set]]의 (F2)에 의해 이 집합은 원소를 $1$개 가지므로 [[number-of-elements-is-unique]]의 1에 의해 $\varphi(1) = 1$이다.

$n \ge 2$라 하자. $n \in P_n$이라 가정하면 $\gcd(n, n) = 1$이다. 그런데 $n = n \cdot 1$이므로 $n \mid n$이고 $n$은 $n$과 $n$의 공약수이다. [[greatest-common-divisor]]의 정의의 조건 2에 의해 $n \le \gcd(n, n) = 1$이다. 한편 $1 < 2$이고 $2 \le n$이므로 (Z6)에 의해 $1 < n$이고, 이는 (L1)에 의해 $n \le 1$과 함께 성립할 수 없다. 따라서 $n \notin P_n$이다.

이제 $a \in P_n$이라 하자. $a \le n$이고 $a \ne n$이므로 $a < n$이고, (Z1)에 의해 $a + 1 \le n$이며 (Z7)에 의해 $a \le n - 1$이다. 또 $1 \le a$이다. $n - 1$은 정수이고 $n \ge 2$에서 (Z7)에 의해 $n - 1 \ge 1$이므로 $\{1, \dots, n - 1\}$이 정해지고, $a$는 그 원소이다. 따라서 $P_n \subseteq \{1, \dots, n - 1\}$이다.

**4.** $p$가 소수라 하자. $1$과 $p$는 $p$의 양의 약수이고 소수의 양의 약수는 정확히 두 개이므로 $1 \ne p$이다. $p$는 양의 정수이므로 (Z1)에 의해 $1 \le p$이고, $1 \ne p$이므로 $1 < p$이다. (Z1)에 의해 $2 \le p$이다. 3에 의해 $P_p \subseteq \{1, \dots, p - 1\}$이다.

거꾸로 $a \in \{1, \dots, p - 1\}$이라 하고 $g = \gcd(a, p)$라 하자. $g \ge 1$이고 (Z8), (Z6)에 의해 $g > 0$이며, $g$는 $a$와 $p$의 공약수이므로 $g \mid p$이다. 곧 $g$는 $p$의 양의 약수이고, $p$가 소수이므로 $g = 1$이거나 $g = p$이다. $g = p$라고 가정하자. $g \mid a$이므로 $p \mid a$이고, $a = pc$인 정수 $c$가 있다. $0 < 1$((Z8))과 $1 \le a$에서 (Z6)에 의해 $0 < a$이다. $c \le 0$이면 $p > 0$이므로 (Z2)에 의해 $pc \le 0$, 곧 $a \le 0$이고 (L1)에 어긋난다. 따라서 (Z5)와 (Z1)에 의해 $c \ge 1$이고, $p > 0$이므로 (Z3)에 의해 $p \cdot 1 \le pc$, 곧 $p \le a$이다. 그러나 $a \le p - 1$이고 (L3)에 의해 $p - 1 < p$이므로 (Z6)에 의해 $a < p$이며, 이는 (L1)에 의해 $p \le a$와 함께 성립할 수 없다. 그러므로 $g \ne p$이고 $g = 1$이다. 또 $a < p$에서 $a \le p$이므로 $1 \le a \le p$이고 $\gcd(a, p) = 1$이어서 $a \in P_p$이다. 이로써 $\{1, \dots, p - 1\} \subseteq P_p$이고 $P_p = \{1, \dots, p - 1\}$이다.

$p - 1$은 $p \ge 2$에서 (Z7)에 의해 $1$ 이상인 정수이다. [[finite-set]]의 (F2)에 의해 $\{1, \dots, p - 1\}$은 원소를 $p - 1$개 가지므로 [[number-of-elements-is-unique]]의 1에 의해 $\varphi(p) = |P_p| = p - 1$이다.
:::

## 예시와 반례

:::example[n = 10]
$a = 1, 2, \dots, 10$에 대하여 $\gcd(a, 10)$을 따져 봅니다. $10$의 양의 약수는 $1, 2, 5, 10$이고 $\gcd(a, 10)$은 이 가운데 $a$도 나누는 가장 큰 수입니다. $a = 2, 4, 6, 8, 10$은 $2 \mid a$이고 $2 \mid 10$이므로 $\gcd(a, 10) \ge 2$입니다. $a = 5$는 $5 \mid 5$, $5 \mid 10$이므로 $\gcd(5, 10) \ge 5$입니다. 남은 $a = 1, 3, 7, 9$는 $a$의 양의 약수가 각각 $\{1\}$, $\{1, 3\}$, $\{1, 7\}$, $\{1, 3, 9\}$이고 $3$, $7$, $9$는 $10$을 나누지 않으므로($10 = 3 \cdot 3 + 1 = 7 \cdot 1 + 3 = 9 \cdot 1 + 1$이고 나머지가 $0$이 아니면 나누어떨어지지 않는다는 것은 [[division-theorem|나눗셈 정리]]의 유일성에 의한다) 공통인 양의 약수가 $1$뿐이어서 $\gcd(a, 10) = 1$입니다. 따라서 $P_{10} = \{1, 3, 7, 9\}$입니다. $h(1) = 1$, $h(2) = 3$, $h(3) = 7$, $h(4) = 9$로 정한 $h : \{1, 2, 3, 4\} \to P_{10}$이 전단사이므로 $P_{10}$은 원소를 $4$개 갖고 $\varphi(10) = 4$입니다.
:::

:::example[소수 p = 7]
4의 증명을 $p = 7$에 적용해 봅니다. 예를 들어 $a = 6$이면 $\gcd(6, 7)$은 $7$의 양의 약수이므로 $1$ 또는 $7$입니다. $7 \mid 6$이면 $6 = 7c$인 정수 $c$가 있는데, $c \le 0$이면 $7c \le 0 < 6$이고 $c \ge 1$이면 $7c \ge 7 > 6$이어서 그런 $c$는 없습니다. 따라서 $\gcd(6, 7) = 1$입니다. $a = 1, \dots, 6$ 모두 같은 논증이 통해서 $P_7 = \{1, 2, 3, 4, 5, 6\}$이고 $\varphi(7) = 6$입니다.
:::

:::counterexample[n = 1에서는 n이 P_n에 들어간다]
3의 "$P_n \subseteq \{1, \dots, n - 1\}$"은 $n \ge 2$라는 조건이 필요합니다. $n = 1$이면 $P_1 = \{1\}$인데 $\{1, \dots, 0\} = \emptyset$이므로 $P_1 \subseteq \{1, \dots, 0\}$이 아닙니다. $\gcd(1, 1) = 1$이어서 $n = 1$ 자신이 $P_1$에 들어가기 때문입니다.
:::

:::counterexample[합성수 9에서는 φ(9) ≠ 8]
4의 식 $\varphi(p) = p - 1$을 합성수에 그대로 쓸 수는 없습니다. 예를 들어 $n = 9$이면 $3 \mid 3$, $3 \mid 9$이므로 $\gcd(3, 9) \ge 3$이고, $3 \mid 6$, $3 \mid 9$이므로 $\gcd(6, 9) \ge 3$이며, $\gcd(9, 9) \ge 9$입니다. 나머지 $1, 2, 4, 5, 7, 8$은 $9$와 공통인 양의 약수가 $1$뿐입니다. $9$의 양의 약수는 $1, 3, 9$이고, $3$과 $9$는 이 여섯 수를 나누지 않기 때문입니다([[division-theorem|나눗셈 정리]]의 유일성에 의해, $1, 2, 4, 5, 7, 8$은 $3 \cdot 0 + 1$, $3 \cdot 0 + 2$, $3 \cdot 1 + 1$, $3 \cdot 1 + 2$, $3 \cdot 2 + 1$, $3 \cdot 2 + 2$이므로 $3$의 배수가 아니고, $9$의 배수는 $1$ 이상 $8$ 이하일 수 없습니다). 따라서 $P_9 = \{1, 2, 4, 5, 7, 8\}$이고 $\varphi(9) = 6 \ne 8$입니다.
:::

## 확인 질문

:::check[$\varphi(14)$를 구하라.]
$14$의 양의 약수는 $1, 2, 7, 14$이고 $\gcd(a, 14)$는 그 가운데 $a$도 나누는 가장 큰 수입니다. $a = 2, 4, \dots, 14$는 $2 \mid a$이고 $2 \mid 14$이므로 서로소가 아니고, $a = 7$은 $7 \mid 7$, $7 \mid 14$이므로 서로소가 아닙니다. 남은 $a = 1, 3, 5, 9, 11, 13$은 $2$로 나누어떨어지지 않고, $7$과 $14$의 배수도 아니므로 $14$와 공통인 양의 약수가 $1$뿐입니다. 따라서 $P_{14} = \{1, 3, 5, 9, 11, 13\}$이고 $\varphi(14) = 6$입니다.
:::

:::check[$\varphi(n) = n$인 자연수 $n$을 모두 구하라.]
$n = 1$뿐입니다. $\varphi(1) = 1$이므로 $n = 1$은 해입니다. $n \ge 2$이면 3에 의해 $P_n \subseteq \{1, \dots, n - 1\}$이고, $\{1, \dots, n - 1\}$은 원소를 $n - 1$개 가지므로 [[subset-of-finite-set]]의 1에 의해 $\varphi(n) = |P_n| \le n - 1 < n$입니다. 따라서 $\varphi(n) = n$일 수 없습니다.
:::
