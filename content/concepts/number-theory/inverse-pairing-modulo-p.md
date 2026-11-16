---
title: 법 p에서 역원의 짝
title_en: Pairing Elements with Their Inverses Modulo p
aliases: [역원의 짝짓기, 법 p의 역원 짝, inverse pairing modulo a prime]
kind: lemma
field: number-theory
msc: ["11A07"]
level: undergrad
summary: p가 소수이면 1부터 p − 1까지의 각 정수에는 곱해서 법 p로 1이 되는 짝이 1부터 p − 1 사이에 하나뿐이고, 자기 자신이 짝인 것은 1과 p − 1뿐이며, 짝에 대해 닫힌 집합 위의 곱은 1과 합동이다.
requires: [inverse-modulo-n, coprime-to-modulus, euler-phi-function, euclids-lemma, product-over-a-finite-set, adding-or-removing-an-element, finite-set, subset-of-finite-set, strong-induction, congruence-arithmetic, congruence-modulo-n, congruence-is-an-equivalence-relation, divisibility, greatest-common-divisor, prime-number, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.3절 Wilson's Theorem, Proposition 2.1.22의 증명, p.28 (줄 1340–1347의 "has a unique solution a′ ∈ {1, 2, …, p − 1}"과 짝짓기 단락)
    checked: original
    note: "출처는 윌슨 정리의 증명 안에서 '각 a ∈ {1, …, p − 1}에 대해 ax ≡ 1 (mod p)는 {1, …, p − 1} 안에 유일한 해 a′을 갖는다'고 쓰고 유일성의 근거를 적지 않는다(같은 책의 Proposition 2.1.13이 그 내용이고, 그 증명은 완전잉여계의 원소 개수를 센다). a = a′이면 a² ≡ 1이고 p | (a − 1)(a + 1)이므로 a ∈ {1, p − 1}이라고 적고, p | (a − 1)(a + 1)에서 p | (a − 1) 또는 p | (a + 1)로 넘어가는 것은 근거 없이 쓴다(유클리드 보조정리의 내용). 이 항목은 (1)–(3)을 이 사이트의 도구로 증명했다. 존재는 inverse-modulo-n의 1과 coprime-to-modulus의 4로, 유일성은 inverse-modulo-n의 2와 coprime-to-modulus의 5로 보이므로 세기를 쓰지 않는다. (a′)′ = a는 출처에 쓰여 있지 않고 이 사이트가 유일성에서 끌어냈다. 출처는 'We can thus pair off the elements of {2, 3, …, p − 2}, each with their inverse. Thus 2·3·…·(p − 2) ≡ 1 (mod p)'로 짝지은 곱이 1과 합동이라는 것을 한 줄로 넘어간다. 이 항목의 (4)가 그 단계를 원소의 개수에 대한 강한 귀납법으로 증명한 것이고 출처에는 없다. 예시와 반례의 수(p = 11, 13, 법 8)는 출처의 예(p = 17, Example 2.1.23)와 다르게 새로 골랐다."
status: source-checked
added: 2026-11-16
---

:::statement
$p$가 소수라 하자. $1$과 $p$가 $p$의 서로 다른 양의 약수이므로 $p \ne 1$이고 (Z1)에 의해 $p \ge 2$이다. [[euler-phi-function]]의 4에 의해 $\{1, \dots, p - 1\} = P_p$이다. 그러면 다음이 성립한다.

1. 각 $a \in \{1, \dots, p - 1\}$에 대하여 $a a' \equiv 1 \pmod p$인 $a' \in \{1, \dots, p - 1\}$이 정확히 하나 있다. 이 $a'$을 $a^*$로 쓰고 $a$의 **짝**이라 부른다. 곧 $a^* \in \{1, \dots, p - 1\}$이고 $a a^* \equiv 1 \pmod p$이며, $c \in \{1, \dots, p - 1\}$이 $ac \equiv 1 \pmod p$이면 $c = a^*$이다.
2. $a \in \{1, \dots, p - 1\}$이면 $(a^*)^* = a$이다.
3. $a \in \{1, \dots, p - 1\}$에 대하여 $a^* = a$인 것은 정확히 $a = 1$ 또는 $a = p - 1$일 때이다.
4. $S$가 $\{1, \dots, p - 1\}$의 공집합이 아닌 부분집합이고 $1 \notin S$, $p - 1 \notin S$이며 모든 $a \in S$에 대하여 $a^* \in S$이면, $S$는 원소를 $k \ge 1$개 갖는 유한집합이고 [[product-over-a-finite-set|집합 위의 곱]]에 대해 $\prod_{s \in S} s \equiv 1 \pmod p$이다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을, 정수의 곱셈의 교환·결합법칙은 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙을 쓴다.
:::

:::english
Let $p$ be a prime number. Then $p \ge 2$, and by the description of $P_p$ for primes, $\{1, \dots, p - 1\} = P_p$. The following hold.

1. For each $a \in \{1, \dots, p - 1\}$ there is exactly one $a' \in \{1, \dots, p - 1\}$ with $a a' \equiv 1 \pmod p$. We write this $a'$ as $a^*$ and call it the **partner** of $a$. That is, $a^* \in \{1, \dots, p - 1\}$ and $a a^* \equiv 1 \pmod p$, and if $c \in \{1, \dots, p - 1\}$ satisfies $ac \equiv 1 \pmod p$, then $c = a^*$.
2. If $a \in \{1, \dots, p - 1\}$, then $(a^*)^* = a$.
3. For $a \in \{1, \dots, p - 1\}$, we have $a^* = a$ exactly when $a = 1$ or $a = p - 1$.
4. Let $S$ be a nonempty subset of $\{1, \dots, p - 1\}$ with $1 \notin S$ and $p - 1 \notin S$, such that $a^* \in S$ for every $a \in S$. Then $S$ is a finite set with $k \ge 1$ elements, and for the product over a finite set, $\prod_{s \in S} s \equiv 1 \pmod p$.
:::

## 직관

시계의 눈금이 소수 $p$칸이라고 합시다. $1$부터 $p - 1$까지 각 눈금 $a$마다, $a$칸씩 몇 번 움직이면 정확히 $1$칸 앞에 오는 횟수가 $1$부터 $p - 1$ 사이에 하나 있습니다. 이 횟수가 짝 $a^*$입니다. 1이 말하는 것은 그런 횟수가 존재하고 유일하다는 것입니다. 짝의 짝은 처음 수입니다(2). 짝이 자기 자신인 수는 $1$과 $p - 1$ 둘뿐입니다(3). $(p - 1)^2 = p(p - 2) + 1$이어서 $p - 1$은 자기 자신과 짝이 됩니다. 이 비유가 맞아떨어지는 곳은 "곱해서 $1$이 되는 횟수"라는 역할이고, 어긋나는 곳은 법이 소수가 아니면 짝이 없는 수가 있고 자기 자신이 짝인 수가 더 있을 수 있다는 점입니다(반례).

4는 이 짝들을 한꺼번에 곱한다는 말입니다. 어떤 집합이 짝에 대해 닫혀 있고 자기 자신이 짝인 수($1$, $p - 1$)가 없으면, 원소들이 서로 다른 둘씩 짝을 이루어 각 쌍의 곱이 $1$과 합동이므로 전체 곱도 $1$과 합동입니다. 증명은 쌍을 하나씩 떼어 내는 강한 귀납법입니다.

## 증명

:::idea
존재는 역원($a$가 $p$와 서로소)에서, 유일은 역원의 유일성과 나머지의 유일성에서 나온다. 3은 $a^2 \equiv 1$에서 $p \mid (a - 1)(a + 1)$이고 유클리드 보조정리를 쓴다. 4는 $S$의 원소 $a$와 그 짝 $a^*$를 떼어 내고 남은 집합에 귀납 가정을 쓴다.
:::

:::hint
1의 존재: $a \in \{1, \dots, p - 1\}$이면 $\gcd(a, p) = 1$이므로 역원이 있습니다. 그 역원을 $p$로 나눈 나머지를 보세요.
:::

:::hint
3: $a^* = a$이면 $a \cdot a \equiv 1$이고 $a^2 - 1 = (a - 1)(a + 1)$입니다. $p$가 소수라는 사실을 쓰세요.
:::

:::hint
4: 원소의 개수 $k$에 대한 강한 귀납법입니다. $S$에서 $a$와 $a^*$를 모두 빼면 같은 조건을 만족하는 더 작은 집합이 남는지 확인하세요.
:::

:::proof
$p \ge 2$이고 $\{1, \dots, p - 1\} = P_p$이다([[euler-phi-function]]의 4). $P_p$의 원소는 $p$와 서로소이다. 합동의 반사성, 대칭성, 추이성은 [[congruence-is-an-equivalence-relation|합동의 동치관계 성질]]에서 쓴다.

**1.** 존재. $a \in \{1, \dots, p - 1\}$이면 $a \in P_p$이므로 $\gcd(a, p) = 1$이고, [[inverse-modulo-n]]의 1에 의해 $ax \equiv 1 \pmod p$인 정수 $x$가 있다. $xa = ax$이므로 $xa \equiv 1$이고, 같은 항목의 1을 $x$에 쓰면 $\gcd(x, p) = 1$이다. $x$를 $p$로 나눈 나머지를 $r$이라 하면 [[coprime-to-modulus]]의 4에 의해 $x \equiv r \pmod p$이고 $r \in \{1, \dots, p - 1\}$이다. [[congruence-arithmetic|합동의 계산 법칙]]의 2에 의해 $ar \equiv ax$이고 $ax \equiv 1$이므로 $ar \equiv 1 \pmod p$이다. 이 $r$이 구하는 $a'$이다.

유일성. $c, c' \in \{1, \dots, p - 1\}$이고 $ac \equiv 1$, $ac' \equiv 1 \pmod p$라 하자. [[inverse-modulo-n]]의 2에 의해 $c \equiv c' \pmod p$이다. $c, c' \in P_p$이므로 [[coprime-to-modulus]]의 5에 의해 $c = c'$이다. 따라서 $a^*$는 하나로 정해지고, $ac \equiv 1$인 $c \in \{1, \dots, p - 1\}$은 $a^*$와 같다.

**2.** $a^* \in \{1, \dots, p - 1\}$이고 $a^* \cdot a = a a^* \equiv 1 \pmod p$이다. $a \in \{1, \dots, p - 1\}$이므로 $a$는 $a^*$에 대하여 1의 조건($a^* \cdot c \equiv 1$인 $c \in \{1, \dots, p - 1\}$)을 만족하고, 1의 유일성에 의해 $(a^*)^* = a$이다.

**3.** ($\Leftarrow$) $1 \cdot 1 = 1 \equiv 1$이고 $1 \in \{1, \dots, p - 1\}$이므로($p \ge 2$) 1의 유일성에 의해 $1^* = 1$이다. $(p - 1)(p - 1) = p(p - 2) + 1$이므로 $(p - 1)(p - 1) - 1 = p(p - 2)$이고 $p - 2$는 정수이므로 $(p - 1)(p - 1) \equiv 1 \pmod p$이다. $p - 1 \in \{1, \dots, p - 1\}$이므로 $(p - 1)^* = p - 1$이다.

($\Rightarrow$) $a^* = a$라 하자. $a \cdot a = a a^* \equiv 1 \pmod p$이므로 $p \mid (a^2 - 1)$이고, $a^2 - 1 = (a - 1)(a + 1)$이다. [[euclids-lemma]]의 1에 의해 $p \mid (a - 1)$ 또는 $p \mid (a + 1)$이다. $1 \le a \le p - 1$이다.

$p \mid (a - 1)$이면 $a - 1 = pc$인 정수 $c$가 있고 $0 \le a - 1 \le p - 2$이다((Z7)). (Z5)와 (Z1)에 의해 $c \le -1$, $c = 0$, $c \ge 1$ 가운데 하나이다. $c \ge 1$이면 (Z3)에 의해 $p \le pc = a - 1$이고, $p - 2 < p$이므로((L3)와 (Z6)) (Z6)에 의해 $p - 2 < a - 1$이다. 이는 $a - 1 \le p - 2$와 함께 성립할 수 없다((L1)). $c \le -1$이면 $-c \ge 1$이고 (Z3)에 의해 $p(-c) \ge p > 0$이므로 $pc = -(p(-c)) < 0$이고 $a - 1 < 0$이어서 $0 \le a - 1$과 (L1)에 어긋난다. 따라서 $c = 0$이고 $a - 1 = 0$, 곧 $a = 1$이다.

$p \mid (a + 1)$이면 $a + 1 = pc$인 정수 $c$가 있고 $2 \le a + 1 \le p$이다((Z7), $1 \le a \le p - 1$). $c \le 0$이면 (Z2)에 의해 $pc \le 0$이어서 $a + 1 \le 0 < 2$가 되어 (L1)에 어긋난다. 따라서 (Z5)와 (Z1)에 의해 $c \ge 1$이다. $c \ge 2$이면 (Z3)에 의해 $pc \ge 2p$이고 $p > 0$이므로 (Z7)로 $2p = p + p > p$이어서 $a + 1 > p$가 되어 $a + 1 \le p$와 (L1)에 어긋난다. 따라서 $c < 2$이고 (Z1)에 의해 $c \le 1$이며, $c \ge 1$이므로 (L2)에 의해 $c = 1$이다. $a + 1 = p$이고 $a = p - 1$이다.

**4.** $S$의 조건을 (조건)이라 부르고, 자연수 $m$에 대한 명제 $R_m$을 "(조건)을 만족하고 원소를 $m$개 갖는 모든 $S$에 대하여 $\prod_{s \in S} s \equiv 1 \pmod p$이다"로 정한다. 먼저 $S$가 유한집합임을 확인한다. $S \subseteq \{1, \dots, p - 1\}$이고 $\{1, \dots, p - 1\}$은 원소를 $p - 1$개 갖는다([[finite-set]]의 (F2), $p - 1 \ge 1$). [[subset-of-finite-set]]의 1에 의해 $S$는 유한집합이다. 원소를 $0$개 갖는 집합은 공집합뿐이고([[finite-set]]의 (F2)) $S$는 공집합이 아니므로 $k \ge 1$이다. [[strong-induction|강한 귀납법]]으로 모든 자연수 $m$에 대하여 $R_m$이 참임을 보인다.

기초 단계 $R_1$. 원소를 $1$개 갖는 $S$가 (조건)을 만족한다고 가정하자. $a \in S$를 하나 잡는다. [[adding-or-removing-an-element]]의 (b)($n = 0$)에 의해 $S - \{a\}$는 원소를 $0$개 가지므로 공집합이고([[finite-set]]의 (F2)), 따라서 $S = \{a\}$이다. $a^* \in S$이므로 $a^* = a$이고, 3에 의해 $a = 1$ 또는 $a = p - 1$이다. 이는 $1 \notin S$, $p - 1 \notin S$에 어긋난다. 그러므로 원소를 $1$개 갖는 (조건)을 만족하는 $S$는 없고 $R_1$은 (공허하게) 참이다.

귀납 단계. $k \ge 1$이고 $R_1, \dots, R_k$가 참이라 하자. 원소를 $k + 1$개 갖고 (조건)을 만족하는 $S$를 잡고 $a \in S$를 하나 고른다. $a \notin \{1, p - 1\}$이므로 3에 의해 $a^* \ne a$이고, $a^* \in S$이므로 $a^* \in S - \{a\}$이다. [[adding-or-removing-an-element]]의 (b)에 의해 $S_1 = S - \{a\}$는 원소를 $k$개 갖는다. $k + 1 \ge 2$이므로 [[product-over-a-finite-set]]의 3에 의해
$$\prod_{s \in S} s = \Bigl(\prod_{s \in S_1} s\Bigr) \cdot a$$
이다.

(i) $k = 1$이면 $S_1$은 원소를 $1$개 갖고 $a^* \in S_1$이다. (b)에 의해 $S_1 - \{a^*\}$는 원소를 $0$개 가지므로 공집합이고, $S_1 = \{a^*\}$이다. [[product-over-a-finite-set]]의 2에 의해 $\prod_{s \in S_1} s = a^*$이고, $\prod_{s \in S} s = a^* \cdot a$이다. $a^* a = a a^* \equiv 1 \pmod p$이다.

(ii) $k \ge 2$이면 $S_1$은 원소를 $k \ge 2$개 갖고 $a^* \in S_1$이므로, [[product-over-a-finite-set]]의 3에 의해 $T = S_1 - \{a^*\} = S - \{a, a^*\}$에 대하여 $\prod_{s \in S_1} s = (\prod_{s \in T} s) \cdot a^*$이다. $T$는 (b)에 의해 원소를 $k - 1$개 갖고($1 \le k - 1 \le k$), 공집합이 아니다. $T$가 (조건)을 만족함을 보인다. $T \subseteq S \subseteq \{1, \dots, p - 1\}$이고 $1, p - 1 \notin S$이므로 $1, p - 1 \notin T$이다. $t \in T$이면 $t \in S$이므로 $t^* \in S$이다. $t^* = a$이면 2에 의해 $t = (t^*)^* = a^*$이지만 $t \in T$는 $a^*$가 아니므로 모순이다. $t^* = a^*$이면 $t = (t^*)^* = (a^*)^* = a$이지만 $t \in T$는 $a$가 아니므로 모순이다. 따라서 $t^* \in S$이고 $t^* \ne a$, $t^* \ne a^*$이어서 $t^* \in T$이다. $R_{k-1}$이 참이므로 $\prod_{s \in T} s \equiv 1 \pmod p$이다. 그러므로 [[congruence-arithmetic|합동의 계산 법칙]]의 2를 두 번 써서
$$\prod_{s \in S} s = \Bigl(\Bigl(\prod_{s \in T} s\Bigr) \cdot a^*\Bigr) \cdot a \equiv (1 \cdot a^*) \cdot a = a a^* \equiv 1 \pmod p$$
이다. (집합 위의 곱은 정수이다.)

(i), (ii)에서 $R_{k+1}$이 참이다. 강한 귀납법에 의해 모든 자연수 $m$에 대하여 $R_m$이 참이고, 따라서 $k$개 원소를 갖는 모든 $S$에서 $\prod_{s \in S} s \equiv 1 \pmod p$이다. $\blacksquare$
:::

## 예시와 반례

:::example[p = 11]
$1$부터 $10$까지 각 수의 짝을 구합니다. $1 \cdot 1 = 1$, $2 \cdot 6 = 12 = 11 + 1$, $3 \cdot 4 = 12 = 11 + 1$, $5 \cdot 9 = 45 = 4 \cdot 11 + 1$, $7 \cdot 8 = 56 = 5 \cdot 11 + 1$, $10 \cdot 10 = 100 = 9 \cdot 11 + 1$이므로 $1^* = 1$, $2^* = 6$, $6^* = 2$, $3^* = 4$, $4^* = 3$, $5^* = 9$, $9^* = 5$, $7^* = 8$, $8^* = 7$, $10^* = 10$입니다. 자기 자신이 짝인 수는 $1$과 $10 = p - 1$뿐입니다. $S = \{2, 3, \dots, 9\}$는 4의 조건을 만족하고 $\prod_{s \in S} s \equiv (2 \cdot 6)(3 \cdot 4)(5 \cdot 9)(7 \cdot 8) \equiv 1 \pmod{11}$입니다(각 쌍의 곱이 $12$, $12$, $45$, $56$이고 $11$로 나눈 나머지가 모두 $1$).
:::

:::counterexample[법이 합성수이면 깨진다]
$n = 8$로 같은 일을 하면 3이 깨집니다. $3 \cdot 3 = 9 = 8 + 1$이므로 $3$은 자기 자신이 짝인데 $3 \ne 1$이고 $3 \ne 7$입니다. 또 $\gcd(2, 8) \ge 2$이므로([[inverse-modulo-n]]의 1) $2x \equiv 1 \pmod 8$인 $x$가 없어 $2$에는 짝이 없습니다. 증명이 막히는 곳은 $\gcd(a, n) = 1$을 얻는 첫 단계와, $a^2 - 1 = (a - 1)(a + 1)$에서 인수 하나가 $n$을 나눈다고 결론짓는 곳입니다.
:::

## 확인 질문

:::check[$p = 13$일 때 $5^*$를 구하고 $(5^*)^* = 5$임을 확인하라.]
$5 \cdot 8 = 40 = 3 \cdot 13 + 1$이므로 $5 \cdot 8 \equiv 1 \pmod{13}$이고 $8 \in \{1, \dots, 12\}$이므로 $5^* = 8$입니다. $8 \cdot 5 = 40 \equiv 1$이므로 $8^* = 5$이고, 곧 $(5^*)^* = 5$입니다.
:::

:::check[$p = 13$에서 $a^* = a$인 $a \in \{1, \dots, 12\}$는 무엇인가? 그 수들이 정말 자기 자신과 짝인지 계산하라.]
3에 의해 $a = 1$ 또는 $a = 12$입니다. $1 \cdot 1 = 1$이고 $12 \cdot 12 = 144 = 11 \cdot 13 + 1$이므로 둘 다 $a \cdot a \equiv 1 \pmod{13}$입니다.
:::
