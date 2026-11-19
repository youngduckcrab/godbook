---
title: ℤ_n의 생성원
title_en: Generators of ℤ_n
aliases: [법 n의 정수의 생성원, 정수의 덧셈군의 생성원, generators of Z_n, generators of the integers]
kind: theorem
field: group-theory
msc: ["20A05", "20K99"]
level: undergrad
summary: 자연수 n과 정수 r에 대하여 (ℤ_n, +)에서 n = gcd(r, n)·n′이면 [r]의 위수는 n′이고, [r]이 생성원인 것은 정확히 gcd(r, n) = 1, 곧 [r] ∈ U(n)일 때이다. 생성원 전체의 집합은 U(n)이고 원소는 φ(n)개이다. (ℤ, +)의 생성원은 1과 −1뿐이다.
requires: [set, subset, prime-number, well-ordering-principle, divisibility, greatest-common-divisor, integer-cancellation, euler-phi-function, equivalence-classes-equal-iff-related, congruence-modulo-n, finite-set, number-of-elements-is-unique, group, subgroup-examples, power-in-a-group, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, order-of-an-element, order-of-a-power, subgroups-of-cyclic-groups]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 4.1절 Subgroups of Cyclic Groups, Corollary 4.14 p.48, Example 4.15 p.48–49, ℤ 와 ℤ_n 이 순환군이라는 문단 p.47, 4장 연습문제 36 p.58
    checked: original
    note: "(2)와 (4)는 출처 Corollary 4.14(p.48)에 해당한다. 출처는 'ℤ_n 의 생성원은 1 ≤ r < n 이고 gcd(r, n) = 1 인 정수 r 이다'라고 진술하고, 정수 r 과 동치류 [r] 을 같은 글자로 쓴다. 출처는 증명을 두지 않고 4장 연습문제 36(p.58)으로 같은 문장을 증명하라고 한다. 이 항목은 모든 정수 r 에 대해 '[r] 이 생성원 ⇔ gcd(r, n) = 1'로 진술하고, 출처의 꼴은 n ≥ 2 일 때의 (4)로 적는다. n = 1 이면 1 ≤ r < 1 인 정수 r 이 없지만 ℤ₁ = {[0]} 의 원소 [0] 은 생성원이다. 이 항목은 이 경우를 (4)에서 따로 적는다. (1)의 위수 공식은 출처 Theorem 4.13(p.48)을 ℤ_n 에 쓴 것이고, 출처 Example 9.19(p.119)가 ℤ₁₂ 에서 같은 계산을 한다. (3)의 '생성원 전체의 집합은 U(n)'은 출처에 명제로 없다(검색어 'generators? (of|for) Z', 'generates Z' 의 건들은 p.47 의 문단, Corollary 4.14, Example 4.15, 4.4절 읽기 질문 3, 4장 연습문제 1(a), 36, 9장 Example, 11장 연습문제 10, 11). 출처 6장 연습문제 21(p.79)이 '위수 n 인 순환군의 생성원은 정확히 φ(n) 개'를 증명하라고 하고, 11.5절 연습문제 12(p.140)가 U(n) 과 ℤ_n 의 자기동형군의 동형을 다룬다. (5)의 앞 방향(1 과 −1 은 생성원)은 출처 p.47 의 문단이고, '이 둘뿐'은 출처에 적혀 있지 않다(p.47 의 문단을 읽었다. 검색어 'generators for Z' 1건). 예시 'ℤ₁₄ 의 생성원'은 출처 Example 4.15(p.48–49, ℤ₁₆ 에서 16 과 서로소인 원소가 모두 생성원)와 같은 발상이다. 반례 'ℤ₁ 에서는 [0] 이 생성원'의 ℤ₁ 은 출처 4장 연습문제 12(p.56, 생성원이 정확히 하나인 순환군을 찾아라)의 답이 될 수 있는 군이다. 확인 질문 'ℤ₁₅ 에서 [10] 의 위수'는 출처 4장 연습문제 2(a)(e)(f)(p.55, ℤ₁₂, ℤ₂₄₀, ℤ₄₇₁ 의 원소의 위수)와 같은 발상이다. 확인 질문 '[−1] 은 늘 생성원인가'는 출처 p.47 이 ℤ 에서 1 과 −1 이 생성원이라고 적는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$n$이 자연수라 하자. $\mathbb{Z}_n$, 동치류 $[r]$, 군 $(\mathbb{Z}_n, +)$는 [[integers-modulo-n|법 n의 정수]]와 [[number-groups|수로 이루어진 군]]의 것이고, $U(n)$은 [[group-of-units-modulo-n|법 n의 단원군]], $\varphi$는 [[euler-phi-function|오일러 피 함수]]의 것이다. 생성원은 [[cyclic-subgroup|순환 부분군]], 원소의 위수와 $\operatorname{ord}$는 [[order-of-an-element|원소의 위수]]의 뜻이다. $r$은 정수이다.

1. (위수) $d = \gcd(r, n)$이고 $n = d \cdot n'$이면, $(\mathbb{Z}_n, +)$에서 $\operatorname{ord}([r]) = n'$이다.
2. (생성원) $[r]$이 $(\mathbb{Z}_n, +)$의 생성원인 것은 정확히 $\gcd(r, n) = 1$일 때이고, 이것은 정확히 $[r] \in U(n)$일 때이다.
3. (생성원 전체) $(\mathbb{Z}_n, +)$의 생성원 전체의 집합은 $U(n)$이다. 따라서 그것은 유한집합이고 원소가 $\varphi(n)$개이다.
4. (대표로 쓰기) $n \ge 2$이면 $(\mathbb{Z}_n, +)$의 생성원은 정확히 $1 \le r \le n - 1$이고 $\gcd(r, n) = 1$인 정수 $r$에 대한 $[r]$이고, 그런 $r$이 다르면 $[r]$도 다르다. $n = 1$이면 $\mathbb{Z}_1 = \{[0]\}$이고 $[0]$이 생성원이다.
5. (정수의 덧셈군) 정수 $a$가 $(\mathbb{Z}, +)$의 생성원인 것은 정확히 $a = 1$이거나 $a = -1$일 때이다.
:::

:::english
Let $n$ be a natural number. $\mathbb{Z}_n$, the classes $[r]$ and the group $(\mathbb{Z}_n, +)$ are those of the entries on integers modulo $n$ and on groups of numbers; $U(n)$ is the group of units modulo $n$ and $\varphi$ is Euler's phi function. Generators are meant in the sense of the entry on cyclic subgroups, and the order of an element and $\operatorname{ord}$ in the sense of the entry on the order of an element. $r$ is an integer.

1. (Order) If $d = \gcd(r, n)$ and $n = d \cdot n'$, then $\operatorname{ord}([r]) = n'$ in $(\mathbb{Z}_n, +)$.
2. (Generators) $[r]$ is a generator of $(\mathbb{Z}_n, +)$ exactly when $\gcd(r, n) = 1$, and this happens exactly when $[r] \in U(n)$.
3. (All generators) The set of all generators of $(\mathbb{Z}_n, +)$ is $U(n)$. Hence it is a finite set with $\varphi(n)$ elements.
4. (In terms of representatives) If $n \ge 2$, the generators of $(\mathbb{Z}_n, +)$ are exactly the classes $[r]$ of the integers $r$ with $1 \le r \le n - 1$ and $\gcd(r, n) = 1$, and different such $r$ give different classes. If $n = 1$, then $\mathbb{Z}_1 = \{[0]\}$ and $[0]$ is a generator.
5. (The additive group of integers) An integer $a$ is a generator of $(\mathbb{Z}, +)$ exactly when $a = 1$ or $a = -1$.
:::

## 직관

$(\mathbb{Z}_n, +)$에서 $[r]$을 거듭 더하는 것은 둘레가 $n$칸인 시계에서 바늘을 $r$칸씩 옮기는 것입니다. 바늘이 모든 칸을 밟으려면 $r$과 $n$이 $1$보다 큰 공약수를 갖지 않아야 합니다. 공약수 $d \ge 2$가 있으면 바늘은 $d$의 배수인 칸만 밟고 돌아오기 때문입니다. 이것은 [[order-of-a-power|거듭제곱의 위수]]를 생성원 $[1]$에 쓴 것입니다. $[r] = r \cdot [1]$이고 $[1]$의 위수가 $n$이기 때문입니다.

한편 $\gcd(r, n) = 1$은 $[r]$이 곱셈의 역원을 갖는다는 조건, 곧 $[r] \in U(n)$과 같습니다([[group-of-units-modulo-n|법 n의 단원군]]의 (1)). 그래서 덧셈의 생성원과 곱셈의 단원이 같은 원소들이 되고, 생성원의 개수는 $\varphi(n)$입니다. 덧셈과 곱셈이라는 다른 두 연산에서 나온 조건이 같아지는 것은 둘 다 $\gcd(r, n) = 1$로 판정되기 때문입니다.

## 증명

:::idea
(1)은 [[order-of-a-power|거듭제곱의 위수]]의 (3)을 $a = [1]$, $k = r$에 쓴 것이다. (2)는 같은 항목의 (6)과 $\langle [1] \rangle = \mathbb{Z}_n$에서 나온다. (5)는 $\langle a \rangle = a\mathbb{Z}$와 $\mathbb{Z} = 1\mathbb{Z}$를 비교한다.
:::

:::hint
$[r]$은 $(\mathbb{Z}_n, +)$에서 $[1]$의 $r$배이다.
:::

:::hint
(5): $a\mathbb{Z} = \mathbb{Z}$이면 $1 \in a\mathbb{Z}$이다.
:::

:::proof
아래에서 "거듭제곱의 위수의 ($i$)"는 [[order-of-a-power|거듭제곱의 위수]]의 ($i$)이다. (Z1), (Z2)는 [[prime-number|소수]]의 진술에서, (Z5), (Z7), (L1), (L2)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들이거나 증명한 것이다.

**(1)** [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $r \cdot [1] = [r \cdot 1] = [r]$이고, [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = n$이다. 거듭제곱의 위수의 (3)을 $a = [1]$, $k = r$에 쓰면 $\operatorname{ord}([r]) = n'$이다.

**(2)** [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $\langle [1] \rangle = \mathbb{Z}_n$이다. 순환 부분군의 (6)에 의해 $[r]$이 생성원인 것은 정확히 $\langle [r] \rangle = \mathbb{Z}_n = \langle [1] \rangle$일 때이고, $[r] = r \cdot [1]$이므로 거듭제곱의 위수의 (6)에 의해 이것은 정확히 $\gcd(r, n) = 1$일 때이다. 단원군의 (1)에 의해 이것은 정확히 $[r] \in U(n)$일 때이다.

**(3)** $\mathbb{Z}_n$의 원소는 모두 어떤 정수 $r$에 대한 $[r]$이므로, (2)에 의해 $\mathbb{Z}_n$의 원소가 생성원인 것은 정확히 그 원소가 $U(n)$에 속할 때이다. 곧 생성원 전체의 집합은 $U(n)$이고, 단원군의 (5)에 의해 유한집합이며 원소가 $\varphi(n)$개이다.

**(4)** $n \ge 2$라 하자. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_n$의 원소는 정확히 $0 \le r \le n - 1$인 정수 $r$에 대한 $[r]$이고, 그런 $r$이 다르면 $[r]$도 다르다. $r = 0$이면 [[greatest-common-divisor|최대공약수]]의 (iv)에 의해 $\gcd(0, n) = n \ne 1$이므로 (2)에 의해 $[0]$은 생성원이 아니다. 따라서 생성원은 정확히 $1 \le r \le n - 1$이고 $\gcd(r, n) = 1$인 $r$의 $[r]$이다((Z1)). $n = 1$이면 법 n의 정수의 (5)에 의해 $\mathbb{Z}_1 = \{[0]\}$이고 $[0] = [1]$이며, (2)에서 $\gcd(0, 1) = 1$(최대공약수의 (iv))이므로 $[0]$은 생성원이다.

**(5)** 순환 부분군의 (5)에 의해 $\langle a \rangle = a\mathbb{Z}$이고 $\mathbb{Z} = 1\mathbb{Z}$이다([[subgroup-examples|부분군의 예와 교집합]]의 (1)). 순환 부분군의 (6)에 의해 $a$가 생성원인 것은 정확히 $a\mathbb{Z} = \mathbb{Z}$일 때이다. $a\mathbb{Z} \subseteq \mathbb{Z}$는 늘 성립하므로, [[subgroups-of-cyclic-groups|순환군의 부분군]]의 (3)에 의해 이것은 정확히 $1\mathbb{Z} \subseteq a\mathbb{Z}$, 곧 $a \mid 1$일 때이다.

$a = 1$이면 $1 = 1 \cdot 1$, $a = -1$이면 $1 = (-1)(-1)$이므로 $a \mid 1$이다. 거꾸로 $a \mid 1$이라 하자. [[divisibility|나누어떨어짐]]의 정의에 의해 $1 = ac$인 정수 $c$가 있다. (Z5)에 의해 $a > 0$, $a = 0$, $a < 0$ 가운데 하나이다. $a = 0$이면 $1 = 0$이 되어 (L3)에 어긋난다. $a > 0$이면 $a$는 자연수 $1$의 양의 약수이므로 $a \le 1$이고, (Z1)에 의해 $1 \le a$이므로 (L2)에 의해 $a = 1$이다. $a < 0$이면 (Z7)에 의해 $-a > 0$이고 $1 = (-a)(-c)$이므로 같은 방법으로 $-a = 1$, 곧 $a = -1$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_{14}$의 생성원]
$1 \le r \le 13$인 정수 $r$ 가운데 $14 = 2 \cdot 7$과 $1$보다 큰 공약수를 갖지 않는 것은 $1, 3, 5, 9, 11, 13$입니다. $14$의 양의 약수는 $1, 2, 7, 14$이고([[prime-number|소수]]의 진술에 의해 $14$ 이하이므로 $1$부터 $14$까지 나눠 보면 이것뿐입니다), 짝수인 $r$은 $2$를, $r = 7$은 $7$을 $14$와 공약수로 갖습니다. 따라서 (4)에 의해 $(\mathbb{Z}_{14}, +)$의 생성원은 $[1], [3], [5], [9], [11], [13]$의 여섯 개이고, (3)에 의해 $\varphi(14) = 6$입니다. 생성원이 아닌 $[6]$은 $\gcd(6, 14) = 2$이고 $14 = 2 \cdot 7$이므로 (1)에 의해 위수가 $7$입니다.
:::

:::counterexample[$\mathbb{Z}_1$에서는 $[0]$이 생성원이다]
"$[0]$은 생성원이 아니다"는 $n \ge 2$일 때의 이야기입니다. $n = 1$이면 $\mathbb{Z}_1 = \{[0]\}$이고 $\langle [0] \rangle = \{[0]\} = \mathbb{Z}_1$이므로 $[0]$이 생성원입니다. "$1 \le r \le n - 1$인 $r$"로만 생성원을 찾으면 $n = 1$에서는 그런 $r$이 없어 생성원이 하나도 없다는 틀린 답이 나옵니다. (2)의 꼴 "$\gcd(r, n) = 1$"은 $\gcd(0, 1) = 1$이어서 이 경우도 맞게 판정합니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}_{15}, +)$에서 $[10]$의 위수는 무엇인가?]
$3$입니다. $5$는 $10 = 5 \cdot 2$와 $15 = 5 \cdot 3$의 공약수이고, 공약수 $c$는 $15 - 10 = 5$를 나누므로 $c \le 5$입니다. 곧 $\gcd(10, 15) = 5$이고 $15 = 5 \cdot 3$이므로 (1)에 의해 $\operatorname{ord}([10]) = 3$입니다. 실제로 $[10]$, $[20] = [5]$, $[30] = [0]$입니다.
:::

:::check[모든 자연수 $n$에 대하여 $[-1]$은 $(\mathbb{Z}_n, +)$의 생성원인가?]
그렇습니다. $-1$과 $n$의 공약수 $c$는 $c \mid -1$이므로 $c \mid 1$이고, $c \le 0$이거나 $1$의 양의 약수, 곧 $c \le 1$입니다. $1$은 공약수이므로 $\gcd(-1, n) = 1$이고, (2)에 의해 $[-1]$은 생성원입니다. $[-1]$은 $[1]$의 덧셈 역원이고, [[cyclic-subgroup|순환 부분군]]의 (4)의 $\langle a^{-1} \rangle = \langle a \rangle$로도 알 수 있습니다.
:::
