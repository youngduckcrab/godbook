---
title: 법 n에 대한 나머지
title_en: Residues Modulo n
aliases: [나머지와 합동, remainder and congruence, residues modulo n]
kind: theorem
field: number-theory
msc: ["11A07"]
level: undergrad
summary: n이 자연수일 때 모든 정수는 0 이상 n − 1 이하인 정수 하나와 n을 법으로 합동이고 그 정수는 n으로 나눈 나머지이다. 따라서 모든 동치류는 [0], [1], …, [n − 1] 가운데 정확히 하나이다.
requires: [congruence-modulo-n, congruence-is-an-equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, division-theorem, divisibility, even-and-odd, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1절 Congruences Modulo n, 2.1.1절, Definition 2.1.11 (Complete Set of Residues)와 그 뒤의 예, p.24
    checked: original
    note: "Stein은 완전잉여계를 '크기가 n이고 n으로 줄인 값이 서로 다른 Z의 부분집합'으로 정의하고(p.24), 예로 {0, 1, …, n − 1}과 n = 5일 때의 {0, 1, −1, 2, −2}를 든다. 이 예가 완전잉여계라는 것은 증명 없이 적혀 있다. 정의가 원소의 개수(크기 n)에 기대므로 이 사이트는 따르지 않았다(이 사이트에는 유한집합의 세기가 없다). 이 항목은 개수를 말하지 않고, 모든 정수가 0 이상 n − 1 이하인 정수 하나와 합동이라는 (1)과 그것을 동치류로 옮긴 (3)을 진술한다. 이는 Stein의 예 {0, 1, …, n − 1}이 완전잉여계라는 말에 대응하는 내용이다. 증명은 나눗셈 정리의 존재와 유일성에서 이 사이트가 직접 썼고 출처에 없다. 이 항목은 완전잉여계라는 용어를 정의하지 않는다."
  - ref: hammack-book-of-proof
    loc: 5.2절 Congruence of Integers, p.131의 'In practical terms' 설명. 11.5절 The Integers Modulo n, Definition 11.6, p.219
    checked: original
    note: "p.131에서 출처는 합동을 'n으로 나눈 나머지가 같다'는 뜻이라고 설명하고, 나머지가 같으면 합동임을 a = kn + r, b = ℓn + r로 보인다. 그 역(합동이면 나머지가 같다)은 5장 연습문제 32(p.136)로 남긴다. 이 항목의 (2)는 두 방향을 모두 보인다. Definition 11.6(p.219)은 'n ∈ N일 때 동치관계 ≡ (mod n)의 동치류는 [0], [1], [2], …, [n − 1]이다'라고 정의 문장 안에서 적는다. 이 사실을 증명하는 문장은 그 앞뒤에서 찾지 못했다(p.218에서는 n = 5의 동치류 다섯 개를 늘어놓는다). 11.3절 Example 11.13(p.212)은 법 3의 경우를 보인 뒤 일반의 n은 'you can show that'으로 독자에게 맡긴다. 이 항목의 (3)이 같은 내용이고, 증명은 나눗셈 정리에서 이 사이트가 썼다. 예시와 반례는 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 2회 통과. 진술 틀과 인용 근거((Z1)–(Z5)), 출처 표기, 틀리게 읽히는 설명 문장을 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수라 하자. 정수 $x$, $y$에 대하여 "$x R y$는 정확히 $x \equiv y \pmod n$일 때이다"로 정한 $\mathbb{Z}$ 위의 [[congruence-is-an-equivalence-relation|동치관계]] $R$을 쓰고, 정수 $a$를 포함하는 [[equivalence-class|동치류]]를 $[a] = \{y \in \mathbb{Z} : y \equiv a \pmod n\}$으로 쓴다. 정수 $a$를 $n$으로 나눈 **나머지**는 [[division-theorem|나눗셈 정리]]에서 $a = qn + r$, $0 \le r < n$으로 정해지는 $r$이다. 그러면 다음이 성립한다.

1. 모든 정수 $a$에 대하여 $a \equiv r \pmod n$이고 $0 \le r \le n - 1$인 정수 $r$이 정확히 하나 존재한다. 이 $r$은 $a$를 $n$으로 나눈 나머지이다.
2. 정수 $a$, $b$에 대하여 $a \equiv b \pmod n$인 것은 정확히 $a$를 $n$으로 나눈 나머지와 $b$를 $n$으로 나눈 나머지가 같을 때이다.
3. (동치류) 모든 정수 $a$에 대하여 $[a] = [r]$이고 $0 \le r \le n - 1$인 정수 $r$이 정확히 하나 존재한다. 곧 모든 동치류 $[a]$는 $[0], [1], \dots, [n - 1]$ 가운데 하나와 같고, 이 나열에서 서로 다른 자리의 두 동치류는 같지 않다.
:::

:::english
Let $n$ be a natural number. For integers $x$ and $y$, let $R$ be the equivalence relation on $\mathbb{Z}$ defined by declaring that $x R y$ holds exactly when $x \equiv y \pmod n$, and for an integer $a$ write $[a] = \{y \in \mathbb{Z} : y \equiv a \pmod n\}$ for the equivalence class containing $a$. The **remainder** of an integer $a$ divided by $n$ is the integer $r$ determined by the division theorem through $a = qn + r$, $0 \le r < n$. Then the following hold.

1. For every integer $a$ there is exactly one integer $r$ with $a \equiv r \pmod n$ and $0 \le r \le n - 1$. This $r$ is the remainder of $a$ divided by $n$.
2. For integers $a$ and $b$, we have $a \equiv b \pmod n$ exactly when the remainder of $a$ divided by $n$ equals the remainder of $b$ divided by $n$.
3. (Equivalence classes) For every integer $a$ there is exactly one integer $r$ with $[a] = [r]$ and $0 \le r \le n - 1$. That is, every equivalence class $[a]$ equals one of $[0], [1], \dots, [n - 1]$, and two classes in different positions of this list are not equal.
:::

## 직관

요일은 이 정리의 좋은 비유입니다. 오늘이 월요일이면 $d$일 뒤의 요일은 $d$를 $7$로 나눈 나머지로 정해집니다. $100 = 14 \cdot 7 + 2$이므로 $100$일 뒤는 $2$일 뒤와 같은 요일입니다. 요일은 일곱 가지뿐이고, 어떤 날수도 그 일곱 가지 가운데 정확히 한 요일에 놓입니다. (1)이 말하는 것이 이것입니다. 모든 정수는 $0, 1, \dots, n - 1$ 가운데 정확히 하나와 합동이고, 그 하나는 나머지입니다. 비유가 맞지 않는 곳도 있습니다. 요일에서는 날수가 음수인 경우를 보통 따로 생각하지 않지만, 이 정리의 $a$는 음수여도 됩니다.

(2)는 합동의 정의("차가 $n$의 배수")와 "나머지가 같다"는 말이 같은 뜻임을 보여 줍니다. [[congruence-modulo-n|합동의 정의]] 항목은 이를 출처의 설명으로 소개만 했습니다. (3)은 (1)을 동치류의 말로 옮긴 것입니다. [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]의 예시는 $n = 4$일 때 $[0], [1], [2], [3]$이 서로 다름을 보였지만, 이 넷이 $\mathbb{Z}$ 전체를 덮는지는 나눗셈 정리가 필요하다며 미뤘습니다. (3)이 그 빈자리를 채웁니다. 모든 정수가 이 넷 가운데 하나에 들어갑니다.

## 증명

:::idea
나눗셈 정리의 존재가 (1)의 존재를, 유일성이 (1)의 유일성을 준다. 합동 $a \equiv r$은 $a = qn + r$을 쓴 것과 같기 때문이다. (2)는 (1)에서, (3)은 (1)과 동치류가 같을 조건에서 나온다.
:::

:::hint
$a \equiv r \pmod n$을 정의대로 풀어 쓰면 $a = qn + r$ 꼴이 됩니다. 나눗셈 정리의 조건 $0 \le r < n$과 비교하세요.
:::

:::hint
(2)의 한 방향은 두 수를 $a = q_a n + r$, $b = q_b n + r$로 쓰면 바로 나옵니다. 다른 방향은 (1)의 유일성을 쓰세요.
:::

:::proof
$n$이 자연수이므로 양의 정수이고, 나눗셈 정리를 $b = n$으로 쓸 수 있다. 증명에서 쓰는 정수의 부등식 성질은 (Z1)([[prime-number]]의 진술에서 받아들인 것)과 (Z6), (Z7), (L3)([[well-ordering-principle]]의 진술)이다.

**준비.** 정수 $r$에 대하여 $0 \le r \le n - 1$인 것은 정확히 $0 \le r < n$일 때이다. 실제로 $r \le n - 1$이면 (L3)에 의해 $n - 1 < n$이므로 (Z6)에 의해 $r < n$이다. 거꾸로 $r < n$이면 (Z1)에 의해 $r + 1 \le n$이고, 양변에서 $1$을 빼면 (Z7)에 의해 $r \le n - 1$이다.

**(1)** $a$를 정수라 하자. 나눗셈 정리에 의해 $a = q_0 n + r_0$, $0 \le r_0 < n$인 정수 $q_0$, $r_0$가 있고, $r_0$가 $a$를 $n$으로 나눈 나머지이다. 두 가지를 보인다.

첫째, $r_0$는 조건을 만족한다. $a - r_0 = q_0 n = n q_0$이고 $q_0$는 정수이므로 $n \mid (a - r_0)$이고 $a \equiv r_0 \pmod n$이다. 준비에 의해 $0 \le r_0 \le n - 1$이다.

둘째, 조건을 만족하는 정수 $r$은 $r_0$뿐이다. $a \equiv r \pmod n$이고 $0 \le r \le n - 1$이라 하자. $n \mid (a - r)$이므로 $a - r = nq$인 정수 $q$가 있고, 따라서 $a = qn + r$이다. 준비에 의해 $0 \le r < n$이므로 $(q, r)$은 나눗셈 정리의 조건을 만족하는 쌍이다. 나눗셈 정리의 유일성에 의해 $(q, r) = (q_0, r_0)$이고 특히 $r = r_0$이다.

따라서 조건을 만족하는 정수는 정확히 하나이고 그것은 나머지 $r_0$이다.

**(2)** $a = q_a n + r_a$, $0 \le r_a < n$이고 $b = q_b n + r_b$, $0 \le r_b < n$이라 하자. 곧 $r_a$, $r_b$는 $a$, $b$를 $n$으로 나눈 나머지이다.

($\Leftarrow$) $r_a = r_b$라 하고 이를 $r$이라 쓰면 $a - b = (q_a n + r) - (q_b n + r) = n(q_a - q_b)$이다. $q_a - q_b$는 정수이므로 $n \mid (a - b)$이고 $a \equiv b \pmod n$이다.

($\Rightarrow$) $a \equiv b \pmod n$이라 하자. (1)에 의해 $b \equiv r_b \pmod n$이고 $0 \le r_b \le n - 1$이다. $a \equiv b$이고 $b \equiv r_b$이므로 [[congruence-is-an-equivalence-relation|합동의 추이성]]에 의해 $a \equiv r_b \pmod n$이다. 따라서 $r_b$는 $a$에 대하여 (1)의 조건을 만족하는 정수이고, (1)의 유일성에 의해 $r_b$는 $a$의 나머지 $r_a$와 같다.

**(3)** $a$를 정수라 하고 $r$을 $a$의 나머지라 하자.

존재: (1)에 의해 $a \equiv r \pmod n$이고 $0 \le r \le n - 1$이다. $a R r$이므로 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]의 (2)에 의해 $[a] = [r]$이다.

유일성: $s$, $t$가 $0 \le s, t \le n - 1$이고 $[a] = [s]$, $[a] = [t]$인 정수라 하자. 그러면 $[s] = [t]$이다. 동치류가 같을 조건의 (1)에 의해 $s R t$, 곧 $s \equiv t \pmod n$이다. 합동의 대칭성에 의해 $t \equiv s \pmod n$이고, 반사성에 의해 $t \equiv t \pmod n$이다. 따라서 정수 $t$에 대하여 $s$와 $t$가 모두 (1)의 조건을 만족하므로 (1)의 유일성에 의해 $s = t$이다.

마지막으로 나열 $[0], [1], \dots, [n - 1]$에서 $0 \le s, t \le n - 1$이고 $[s] = [t]$라 하자. $a = s$로 두면 $[a] = [s]$이고 $[a] = [t]$이므로 위의 유일성에 의해 $s = t$이다. 곧 서로 다른 자리의 두 동치류는 같지 않다. $\blacksquare$
:::

## 예시와 반례

:::example[짝수와 홀수]
$n = 2$이면 $0 \le r \le 1$이므로 $r$은 $0$ 또는 $1$입니다. 정수 $a$에 대하여 $a \equiv 0 \pmod 2$인 것은 $a - 0 = 2c$인 정수 $c$가 있을 때, 곧 $a$가 짝수일 때입니다. $a \equiv 1 \pmod 2$인 것은 $a - 1 = 2c$, 곧 $a = 2c + 1$일 때, 곧 $a$가 홀수일 때입니다. (1)은 모든 정수가 이 둘 가운데 정확히 하나라는 말이 됩니다. [[even-and-odd]]에서 증명 없이 받아들였던 사실 "모든 정수는 짝수이거나 홀수이고 둘 다는 아니다"가 $n = 2$일 때의 (1)입니다. 동치류로는 $[0]$이 짝수 전체이고 $[1]$이 홀수 전체입니다.
:::

:::example[법 6]
$a = -17$이면 $-17 = (-3) \cdot 6 + 1$이고 $0 \le 1 < 6$이므로 나머지는 $1$입니다. 실제로 $-17 - 1 = -18 = 6 \cdot (-3)$이므로 $-17 \equiv 1 \pmod 6$이고 $[-17] = [1]$입니다. $a = 100$이면 $100 = 16 \cdot 6 + 4$이므로 나머지는 $4$이고 $100 - 4 = 96 = 6 \cdot 16$이므로 $[100] = [4]$입니다. $-17$과 $100$은 나머지가 $1$과 $4$로 다르므로 (2)에 의해 $-17 \not\equiv 100 \pmod 6$입니다. 실제로 $-17 - 100 = -117$이고 $-117 = 6c$인 정수 $c$는 없습니다. [[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)에 의해 $c \le -20$이거나 $c \ge -19$이고, [[prime-number]]의 (Z3)에 의해 각각 $6c \le -120 < -117$, $6c \ge -114 > -117$이기 때문입니다.
:::

:::example[같은 나머지]
법 $9$에서 $38 = 4 \cdot 9 + 2$이고 $11 = 1 \cdot 9 + 2$이므로 두 수의 나머지는 모두 $2$입니다. (2)에 의해 $38 \equiv 11 \pmod 9$이고, 실제로 $38 - 11 = 27 = 9 \cdot 3$입니다. 한편 $13 = 1 \cdot 9 + 4$이므로 $13$의 나머지는 $4$이고 $2$와 다릅니다. 따라서 $38 \not\equiv 13 \pmod 9$입니다. 실제로 $38 - 13 = 25$이고 $25 = 9c$인 정수 $c$는 없습니다. (Z5)와 (Z1)에 의해 $c \le 2$이거나 $c \ge 3$이고, (Z3)에 의해 각각 $9c \le 18 < 25$, $9c \ge 27 > 25$이기 때문입니다.
:::

:::example[$n = 1$]
$n = 1$이면 $0 \le r \le 0$이므로 $r = 0$뿐입니다. 모든 정수 $a$에 대하여 $a = a \cdot 1 + 0$이므로 나머지는 $0$이고 $a - 0 = 1 \cdot a$이므로 $a \equiv 0 \pmod 1$입니다. (3)에 의해 모든 동치류가 $[0]$과 같고 동치류는 하나뿐입니다. 모든 수가 서로 합동이라는 [[congruence-modulo-n|합동의 정의]]의 예와 같은 내용입니다.
:::

:::counterexample[범위가 정확해야 한다]
"$0 \le r \le n - 1$"을 느슨하게 하면 $r$이 하나로 정해지지 않습니다. $n = 5$, $a = 13$에서 $13 - 3 = 10$, $13 - (-2) = 15$, $13 - 8 = 5$는 모두 $5$의 배수이므로 $13 \equiv 3 \equiv -2 \equiv 8 \pmod 5$입니다. $0$ 이상 $4$ 이하인 것은 $3$뿐입니다.

범위를 $0 \le r \le n$으로 한 칸 넓혀도 깨집니다. $n = 4$에서 $4 - 0 = 4 = 4 \cdot 1$이므로 $4 \equiv 0 \pmod 4$이고 $[4] = [0]$입니다. 나열 $[0], [1], \dots, [n]$에는 같은 동치류가 두 번 나옵니다.
:::

## 확인 질문

:::check[법 $8$에서 $-30$과 합동이고 $0$ 이상 $7$ 이하인 정수는 무엇인가?]
$-30 = (-4) \cdot 8 + 2$이고 $0 \le 2 < 8$이므로 나머지는 $2$입니다. (1)에 의해 구하는 정수는 $2$이고, 실제로 $-30 - 2 = -32 = 8 \cdot (-4)$입니다.
:::

:::check[법 $7$에서 $200$과 $-5$는 합동인가? 나머지를 구해 판정하고, 정의로도 확인하라.]
$200 = 28 \cdot 7 + 4$이므로 $200$의 나머지는 $4$이고, $-5 = (-1) \cdot 7 + 2$이므로 $-5$의 나머지는 $2$입니다. 나머지가 다르므로 (2)에 의해 합동이 아닙니다. 정의로 확인하면 $200 - (-5) = 205$이고 $205 = 7c$인 정수 $c$는 없습니다. (Z5)와 (Z1)에 의해 $c \le 29$이거나 $c \ge 30$이고, (Z3)에 의해 각각 $7c \le 203 < 205$, $7c \ge 210 > 205$이기 때문입니다. 따라서 $7 \nmid 205$입니다.
:::
