---
title: 최대공약수
title_en: Greatest Common Divisor
aliases: [gcd, greatest common divisor, 공약수, 서로소, relatively prime, coprime]
kind: definition
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 둘 다 0은 아닌 두 정수의 공약수 가운데 가장 큰 것을 최대공약수라 하고, 최대공약수가 1인 두 정수를 서로소라 한다.
requires: [divisibility, well-ordering-principle, prime-number, even-and-odd, set]
sources:
  - ref: hammack-book-of-proof
    loc: 4.2절 Definitions, Definition 4.6, p.116
    checked: original
    note: "출처는 정수 a, b의 최대공약수를 a와 b를 모두 나누는 가장 큰 정수로 정의하고, gcd(0, 0)은 문제가 있으므로(모든 정수가 0을 나누므로) 둘 다 0은 아닐 때만 다루기로 약속한다(p.116). 아래 정의도 같다. 출처는 최대 원소가 존재하는 까닭을 말하지 않는다. 아래의 존재 논증(공약수의 집합이 공집합이 아니고 위로 유계이므로 정렬 원리의 (나)를 쓴다)은 이 사이트가 직접 쓴 것이다. 출처는 서로소라는 말을 정의하지 않는다(relatively prime이라는 말이 책에 나오지 않는다). 아래 \"서로소\" 정의는 널리 쓰이는 용어를 이 사이트가 덧붙인 것이다. gcd(−a, b) = gcd(a, b)와 a > 0이면 gcd(a, 0) = a는 출처의 예 gcd(32, −8) = 8, gcd(0, 6) = 6에 대응하는 일반적인 성질이고, gcd(a, b) = gcd(b, a)는 출처에 서술이 없다. 모두 아래에서 직접 증명한다. 예시는 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 1.1.2절, Definition 1.1.8 (Greatest Common Divisor), p.3 (성질 (ii), (iii)은 Lemma 1.1.9, pp.3–4)
    checked: original
    note: "Stein은 gcd(a, b)를 {d ∈ Z : d | a이고 d | b}의 최대 원소로 정의하고 gcd(0, 0) = 0으로 둔다(p.3). 이 항목은 gcd(0, 0)을 정의하지 않는 쪽을 택했다(Hammack의 약속과 같다). Stein은 a ≠ 0이면 d | a에서 d ≤ |a|이고 양의 정수 가운데 |a| 이하인 것은 |a|개뿐이라는 세기 논증으로 존재를 설명하는데(p.3), 이 항목은 이를 따르지 않고 정렬 원리로 증명한다. Stein은 \"임의의 a에 대해 gcd(0, a) = gcd(a, 0) = a\"라고 쓰는데(p.3), 이것은 a < 0이면 틀린다(자신의 정의로 gcd(0, −3) = 3이다). 아래는 a > 0일 때만 이 등식을 보인다. 성질 (ii), (iii)에 해당하는 gcd(a, b) = gcd(b, a) = gcd(±a, ±b)는 Stein의 Lemma 1.1.9(p.3)에 진술되어 있고, 그 증명은 gcd(a, b) = gcd(a, b − a)만 보이고 나머지는 \"비슷하게 증명된다\"며 생략한다(pp.3–4). 아래는 직접 증명한다. Stein에서 coprime은 Algorithm 2.2.3(p.29)에 처음 나오며 정의되지 않는다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 받아들이는 사실 (Z8)과 따름 사실 (L1)–(L3)을 진술에 명시, 거짓이던 예시 문장과 출처 쪽수 정정."
added: 2026-11-16
---

:::statement
$a$와 $b$가 정수일 때, 정수 $d$가 $a$와 $b$의 **공약수**(common divisor)인 것은 정확히 $d \mid a$이고 $d \mid b$일 때이다([[divisibility|나누어떨어짐]]). $a$와 $b$의 공약수 전체의 집합을 $D(a, b) = \{d \in \mathbb{Z} : d \mid a$이고 $d \mid b\}$로 쓴다.

**둘 다 $0$은 아닌** 정수 $a$, $b$(곧 $a \ne 0$ 또는 $b \ne 0$)에 대하여 $D(a, b)$는 최대 원소를 갖는다. 이는 아래 "최대공약수가 존재한다"에서 [[well-ordering-principle]]의 (나)로 증명한다. 이 최대 원소를 $a$와 $b$의 **최대공약수**(greatest common divisor)라 하고 $\gcd(a, b)$로 쓴다. 곧 정수 $g$가 $\gcd(a, b)$인 것은 정확히 다음 두 조건이 성립할 때이다.

1. $g$는 $a$와 $b$의 공약수이다.
2. $a$와 $b$의 모든 공약수 $d$에 대하여 $d \le g$이다.

$a = b = 0$이면 모든 정수가 공약수여서 최대 원소가 없으므로 $\gcd(0, 0)$은 정의하지 않는다.

둘 다 $0$은 아닌 정수 $a$, $b$에 대하여 다음이 성립한다. 증명은 아래 "기본 성질의 증명"에 있다.

- (i) $\gcd(a, b) \ge 1$이다.
- (ii) $\gcd(a, b) = \gcd(b, a)$이다.
- (iii) $\gcd(a, b) = \gcd(-a, b) = \gcd(a, -b)$이다. 곧 $a$의 약수와 $-a$의 약수가 같으므로 부호는 최대공약수에 영향을 주지 않는다.
- (iv) $a > 0$이면 $\gcd(a, 0) = \gcd(0, a) = a$이다.

$a$와 $b$가 **서로소**(relatively prime, coprime)인 것은 정확히 $\gcd(a, b) = 1$일 때이다. 이때도 $a$, $b$는 둘 다 $0$은 아닌 정수이다.
:::

:::english
For integers $a$ and $b$, an integer $d$ is a **common divisor** of $a$ and $b$ exactly when $d \mid a$ and $d \mid b$. Write $D(a, b) = \{d \in \mathbb{Z} : d \mid a \text{ and } d \mid b\}$ for the set of all common divisors of $a$ and $b$.

For integers $a$ and $b$ that are **not both $0$** (that is, $a \ne 0$ or $b \ne 0$), the set $D(a, b)$ has a greatest element. This is proved below, using part (b) of the well-ordering principle. This greatest element is called the **greatest common divisor** of $a$ and $b$ and is written $\gcd(a, b)$. That is, an integer $g$ is $\gcd(a, b)$ exactly when both of the following hold.

1. $g$ is a common divisor of $a$ and $b$.
2. $d \le g$ for every common divisor $d$ of $a$ and $b$.

If $a = b = 0$, then every integer is a common divisor, so there is no greatest element, and $\gcd(0, 0)$ is left undefined.

For integers $a$ and $b$ that are not both $0$, the following hold. They are proved below.

- (i) $\gcd(a, b) \ge 1$.
- (ii) $\gcd(a, b) = \gcd(b, a)$.
- (iii) $\gcd(a, b) = \gcd(-a, b) = \gcd(a, -b)$. That is, $a$ and $-a$ have the same divisors, so signs do not affect the greatest common divisor.
- (iv) If $a > 0$, then $\gcd(a, 0) = \gcd(0, a) = a$.

Integers $a$ and $b$ are **relatively prime** (or **coprime**) exactly when $\gcd(a, b) = 1$. Here again $a$ and $b$ are integers that are not both $0$.
:::

## 직관

길이가 $a$와 $b$인 두 끈을 같은 길이의 토막으로 남김없이 자른다고 합시다. 토막 길이로 가능한 값이 공약수이고, 그중 가장 긴 토막이 최대공약수입니다. $42$ cm와 $56$ cm 끈은 $14$ cm 토막으로 각각 $3$개와 $4$개로 잘리고, $14$ cm보다 긴 토막으로는 둘 다 자를 수 없습니다. 이 비유는 양수에서만 맞습니다. 정수에서는 음수 약수와 $0$이 끼어들기 때문에, 이 항목은 약수를 [[divisibility|나누어떨어짐]]으로 정의하고 "가장 큰 것"을 정수의 순서로 정합니다.

"가장 큰 것이 있는가"는 확인이 필요합니다. 모든 정수가 $0$을 나누므로 $0$과 $0$의 공약수는 정수 전체이고, 이 집합에는 가장 큰 정수가 없습니다. 그래서 $\gcd(0, 0)$은 정의하지 않습니다. 둘 중 하나라도 $0$이 아니면 공약수는 그 수의 크기를 넘지 못하므로 최대 원소가 있고, 그 증명은 아래 "최대공약수가 존재한다"에 있습니다.

서로소는 $1$ 말고는 공통의 약수가 없다는 뜻입니다. 두 수가 둘 다 소수일 필요는 없습니다. 예를 들어 $9$와 $28$은 어느 쪽도 소수가 아니지만 서로소입니다.

:::remark[최대공약수가 존재한다]
먼저 다음을 보인다. (★) $n$이 자연수이고 $d$가 정수이며 $d \mid n$이면 $d \le n$이다. $d \le 0$이면 $n > 0$이므로 (Z6)에 의해 $d < n$이다. $d > 0$이면 $d$는 $n$의 양의 약수이고, [[prime-number]]의 진술에 적힌 "자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$을 만족한다"에 의해 $d \le n$이다.

$a$, $b$가 둘 다 $0$은 아니라 하자. $a \ne 0$이면 $c = a$, 아니면 $c = b$로 두면 $c \ne 0$이다. (Z5)에 의해 $c > 0$ 또는 $c < 0$이다. $c > 0$이면 $n = c$로 두고, $c < 0$이면 양변에 $-c$를 더해 (Z7)에 의해 $0 < -c$이므로 $n = -c$로 둔다. 어느 쪽이든 $n$은 자연수이다. $D(a, b)$의 원소 $d$는 $d \mid c$이다. $c = de$인 정수 $e$가 있고, $n = c$이면 $d \mid n$이며, $n = -c$이면 $n = d(-e)$이고 $-e$가 정수이므로 $d \mid n$이다. (★)에 의해 $d \le n$이다. 곧 $D(a, b)$는 위로 유계이다($n$이 위 경계).

또 $a = 1 \cdot a$이고 $b = 1 \cdot b$이므로 $1 \mid a$, $1 \mid b$이고 $1 \in D(a, b)$이다. 따라서 $D(a, b)$는 공집합이 아닌 정수의 집합이고 위로 유계이므로, [[well-ordering-principle]]의 (나)에 의해 최대 원소를 갖는다. 그 최대 원소는 같은 정리의 유일성에 의해 하나뿐이다.
:::

:::remark[기본 성질의 증명]
$a$, $b$는 둘 다 $0$은 아닌 정수이다.

(i) $1 \in D(a, b)$이고 $\gcd(a, b)$는 $D(a, b)$의 최대 원소이므로 $1 \le \gcd(a, b)$이다.

(ii) 정수 $d$에 대해 "$d \mid a$이고 $d \mid b$"는 "$d \mid b$이고 $d \mid a$"와 같은 조건이다. 따라서 $D(a, b) = D(b, a)$이다. 같은 집합의 최대 원소는 하나뿐이므로($\gcd$의 정의와 [[well-ordering-principle]]의 유일성) $\gcd(a, b) = \gcd(b, a)$이다.

(iii) 정수 $d$에 대해 $d \mid a$이면 $a = dc$인 정수 $c$가 있고 $-a = d(-c)$이며 $-c$가 정수이므로 $d \mid -a$이다. 반대로 $d \mid -a$이면 $-a = dc$인 정수 $c$가 있고 $a = d(-c)$이므로 $d \mid a$이다. 따라서 $d \mid a$와 $d \mid -a$는 같은 조건이어서 $D(a, b) = D(-a, b)$이다. ($-a = 0$이면 $a = -(-a) = 0$이므로 $-a$, $b$도 둘 다 $0$은 아니다.) 같은 방식으로, 정수 $d$에 대해 $d \mid b$이면 $b = dc$이므로 $-b = d(-c)$이고, $d \mid -b$이면 $-b = dc$이므로 $b = d(-c)$이다. 따라서 $d \mid b$와 $d \mid -b$는 같은 조건이어서 $D(a, b) = D(a, -b)$이다. ($-b = 0$이면 $b = 0$이므로 $a$, $-b$도 둘 다 $0$은 아니다.) 같은 집합의 최대 원소는 같으므로 (iii)이 성립한다.

(iv) $a > 0$이라 하자. 모든 정수 $d$에 대해 $0 = d \cdot 0$이므로 $d \mid 0$이다. 따라서 $D(a, 0) = \{d \in \mathbb{Z} : d \mid a\}$이다. $a = a \cdot 1$이므로 $a \in D(a, 0)$이다. $a$는 자연수이므로 (★)에 의해 $D(a, 0)$의 모든 원소 $d$는 $d \le a$이다. 따라서 $a$가 $D(a, 0)$의 최대 원소이고 $\gcd(a, 0) = a$이다. (ii)에 의해 $\gcd(0, a) = a$이다.

$a = b = 0$의 경우: $D(0, 0)$은 정수 전체이다. 어떤 정수 $g$에 대해서도 (L3)에 의해 $g < g + 1$이고 $g + 1 \in D(0, 0)$이다. $g$가 최대 원소라면 $g + 1 \le g$여야 하는데, 이것은 $g < g + 1$과 함께 성립할 수 없다((L1)). 따라서 $D(0, 0)$에는 최대 원소가 없다.
:::

## 예시와 반례

:::example[공약수를 모두 적어 최대공약수 찾기]
$\gcd(42, 56)$: $42$의 양의 약수는 $1, 2, 3, 6, 7, 14, 21, 42$이고 $56$의 양의 약수는 $1, 2, 4, 7, 8, 14, 28, 56$입니다. 공통인 양의 약수는 $1, 2, 7, 14$이고 공약수 전체는 $\pm 1, \pm 2, \pm 7, \pm 14$입니다. 가장 큰 것이 $14$이므로 $\gcd(42, 56) = 14$입니다.

$\gcd(-12, 18)$: $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$이고 $18$의 양의 약수는 $1, 2, 3, 6, 9, 18$입니다. $-12$의 약수는 $12$의 약수와 같으므로 공약수는 $\pm 1, \pm 2, \pm 3, \pm 6$이고 $\gcd(-12, 18) = 6$입니다. 성질 (iii)에 의해 $\gcd(12, 18)$과 같습니다.

:::

:::example[서로소]
$9$의 양의 약수는 $1, 3, 9$이고 $28$의 양의 약수는 $1, 2, 4, 7, 14, 28$입니다. 공통인 양의 약수는 $1$뿐이므로 $\gcd(9, 28) = 1$이고 $9$와 $28$은 서로소입니다. 둘 다 소수가 아닙니다. $\gcd(6, 15)$는 $6$의 약수 $1, 2, 3, 6$과 $15$의 약수 $1, 3, 5, 15$의 공통 약수 $1, 3$ 중 큰 $3$이므로 $6$과 $15$는 서로소가 아닙니다.
:::

:::counterexample
- "$\gcd(0, a) = a$"는 $a < 0$이면 틀립니다. $a = -3$이면 $\gcd(0, -3) = 3$인데 $-3 \ne 3$입니다. $-3 \in D(0, -3)$이지만 $3 \in D(0, -3)$이고 $-3 < 3$이므로 $-3$은 최대 원소가 아닙니다. 그래서 성질 (iv)는 $a > 0$을 가정합니다.
- $\gcd(0, 0)$은 값이 없습니다. $0$과 $0$의 공약수는 정수 전체이고, 어떤 정수 $g$도 $g + 1$이 더 큰 공약수여서 가장 큰 것이 없습니다.
:::

## 확인 질문

:::check[$\gcd(-8, -12)$를 구하라. 공약수를 모두 쓰고 최대 원소를 고르라.]
$8$의 양의 약수는 $1, 2, 4, 8$이고 $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$입니다. $-8$, $-12$의 약수는 각각 $8$, $12$의 약수와 같으므로 공약수는 $\pm 1, \pm 2, \pm 4$이고, 가장 큰 것은 $4$이므로 $\gcd(-8, -12) = 4$입니다. 성질 (iii)을 두 번 쓴 $\gcd(8, 12) = 4$와 같습니다.
:::

:::check[$\gcd(21, 0)$을 구하고, $12$와 $35$가 서로소인지 판단하라.]
$21 > 0$이므로 성질 (iv)에 의해 $\gcd(21, 0) = 21$입니다. 직접 확인하면 $0$은 모든 정수로 나누어떨어지므로 공약수는 $21$의 약수 $\pm 1, \pm 3, \pm 7, \pm 21$이고 최대 원소는 $21$입니다. $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$이고 $35$의 양의 약수는 $1, 5, 7, 35$로 공통인 것은 $1$뿐입니다. $\gcd(12, 35) = 1$이므로 서로소입니다.
:::
