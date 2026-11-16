---
title: 법과 서로소인 수를 곱한 나머지의 재배열
title_en: Multiplying by a Number Coprime to the Modulus Rearranges the Remainders
aliases: [서로소인 수를 곱하면 나머지가 자리만 바뀐다, 법과 서로소인 수의 곱셈은 전단사, multiplication permutes the residues coprime to n]
kind: lemma
field: number-theory
msc: ["11A07"]
level: undergrad
summary: n ≥ 2이고 x가 n과 서로소이면, n과 서로소인 나머지 각각에 x를 곱해 n으로 나눈 나머지를 대응시키는 함수는 그 나머지들의 집합에서 자신으로의 전단사이다.
requires: [euler-phi-function, coprime-to-modulus, inverse-modulo-n, congruence-cancellation, congruence-modulo-n, congruence-is-an-equivalence-relation, congruence-arithmetic, residues-modulo-n, division-theorem, finite-set, function, function-composition, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, inverse-function, finite-product, rearranging-a-finite-product, greatest-common-divisor, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.1절 Lemma 2.1.12, p.24 (증명의 소거 단계). 2.1.2절 Theorem 2.1.20의 증명, p.27 (xP의 나머지가 P의 나머지와 같다는 문장과 곱의 합동식 ∏(xa) ≡ ∏a)
    checked: original
    note: "출처 p.27은 오일러 정리의 증명에서 'Lemma 2.1.12를 증명한 것과 같은 방법으로 xP의 원소를 n으로 나눈 나머지들이 P의 원소를 n으로 나눈 나머지들과 같다'고만 쓰고 증명하지 않는다. 출처의 Lemma 2.1.12(p.24)는 완전잉여계 R에 대한 진술이고 P에 대한 것이 아니며, 그 증명은 소거로 ax ≡ ax′이면 x ≡ x′임을 보인 뒤 'aR의 원소 개수가 n이므로' aR이 완전잉여계라고 끝낸다(세기에 기댄 단사에서 전사로의 단계). 이 항목은 P_n에 대한 진술을 스스로 세웠다. 단사는 출처처럼 소거 법칙을 쓰지만 전사는 세기를 쓰지 않고 x의 법 n 역원을 이용해 원소를 직접 찾는 것으로 보였다. 3의 곱의 합동식은 출처 p.27의 ∏_{a∈P}(xa) ≡ ∏_{a∈P} a와 같은 내용이고, 출처는 'the products are over the same numbers modulo n'이라고만 적는다. 나열 b와 재배열 정리로 보인 3의 증명, 전사의 증명, 값이 다시 P_n에 든다는 것(coprime-to-modulus의 4)은 출처에 없고 이 사이트가 썼다. 확인 질문의 P_12 = {1, 5, 7, 11}은 출처 p.26의 ϕ(12) 예와 같은 집합이다(x = 5를 곱하는 부분은 새것이다). n = 1은 나머지가 0이 되어 값이 P_1에 들지 않으므로 범위에서 뺐다(출처는 n = 1을 따로 언급하지 않는다). 예시와 반례의 수(n = 9, x = 4와 x = 3)는 출처의 예(Example 2.1.14의 2x ≡ 3 (mod 7))와 다르게 새로 골랐다."
status: source-checked
added: 2026-11-16
---

:::statement
$n \ge 2$인 자연수이고 $x$가 $\gcd(x, n) = 1$인 정수라 하자. $P_n$은 [[euler-phi-function]]의 집합 $\{a \in \mathbb{Z} : 1 \le a \le n \text{이고 } \gcd(a, n) = 1\}$이다. 각 $a \in P_n$에 대하여 $\mu_x(a)$를 $xa$를 $n$으로 나눈 나머지([[residues-modulo-n]])로 정한다. 그러면 다음이 성립한다.

1. 모든 $a \in P_n$에 대하여 $\mu_x(a) \in P_n$이고 $xa \equiv \mu_x(a) \pmod n$이다. 따라서 $\mu_x$는 $P_n$에서 $P_n$으로의 [[function|함수]] $\mu_x : P_n \to P_n$이다.
2. $\mu_x : P_n \to P_n$은 [[injective-surjective-bijective|전단사]]이다.
3. $k = \varphi(n)$(자연수이다)이고 $b : \{1, \dots, k\} \to P_n$이 전단사, 곧 $P_n$의 모든 원소를 한 번씩 늘어놓은 열 $b_1, \dots, b_k$라 하자. $c_i = \mu_x(b_i)$로 정하면 $c : \{1, \dots, k\} \to P_n$도 전단사이고, 모든 $i \in \{1, \dots, k\}$에 대하여 $x b_i \equiv c_i \pmod n$이다. 또 [[finite-product|유한 곱]]에 대하여
$$(x b_1)(x b_2) \cdots (x b_k) \equiv b_1 b_2 \cdots b_k \pmod n$$
이다.

$n = 1$은 이 항목에서 다루지 않는다. $n = 1$이면 $P_1 = \{1\}$이고 $x \cdot 1$을 $1$로 나눈 나머지가 $0$이어서 $0 \notin P_1$이므로 1이 성립하지 않는다.

증명에서 정수의 곱셈의 교환법칙과 결합법칙은 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $n \ge 2$ be a natural number and let $x$ be an integer with $\gcd(x, n) = 1$. Let $P_n$ be the set $\{a \in \mathbb{Z} : 1 \le a \le n \text{ and } \gcd(a, n) = 1\}$. For each $a \in P_n$, let $\mu_x(a)$ be the remainder of $xa$ upon division by $n$. Then the following hold.

1. For every $a \in P_n$ we have $\mu_x(a) \in P_n$ and $xa \equiv \mu_x(a) \pmod n$. Hence $\mu_x$ is a function $\mu_x : P_n \to P_n$.
2. The function $\mu_x : P_n \to P_n$ is a bijection.
3. Let $k = \varphi(n)$ (a natural number) and let $b : \{1, \dots, k\} \to P_n$ be a bijection, that is, a list $b_1, \dots, b_k$ that contains every element of $P_n$ exactly once. Put $c_i = \mu_x(b_i)$. Then $c : \{1, \dots, k\} \to P_n$ is also a bijection, $x b_i \equiv c_i \pmod n$ for every $i \in \{1, \dots, k\}$, and the finite products satisfy
$$(x b_1)(x b_2) \cdots (x b_k) \equiv b_1 b_2 \cdots b_k \pmod n.$$

The case $n = 1$ is not treated here. If $n = 1$, then $P_1 = \{1\}$ and the remainder of $x \cdot 1$ upon division by $1$ is $0$, which is not in $P_1$, so part 1 fails.
:::

## 직관

$P_n$의 원소를 번호표가 붙은 자리라고 하고, 자리마다 손님이 한 명씩 앉아 있다고 합시다. $x$를 곱한 뒤 나머지를 취하는 것은 각 손님을 어떤 자리로(제자리일 수도 있습니다) 옮기는 일입니다. 이 항목이 말하는 것은 어느 손님도 자리 밖으로 나가지 않고(1), 두 손님이 같은 자리로 가지 않으며 빈 자리도 남지 않는다(2)는 것입니다. 곧 자리가 서로 바뀔 뿐입니다. 이 비유가 맞아떨어지는 곳은 "곱하면 전체가 자리만 바꾼다"는 점이고, 어긋나는 곳은 어느 손님이 어느 자리로 가는지는 $x$마다 다르고 비유가 알려 주지 않는다는 점입니다.

$x$가 $n$과 서로소여야 한다는 조건이 없으면 일이 틀어집니다. 반례에서 보듯이 손님이 몰려 한 자리에 겹치거나 자리 밖으로 나갑니다. 단사는 [[congruence-cancellation|소거 법칙]]에서 나옵니다. 전사는 [[inverse-modulo-n|역원]]에서 나옵니다. $x$를 곱해서 $d$가 되는 자리를 찾으려면 $x$의 역원 $x'$를 $d$에 곱하면 되기 때문입니다. 원소의 개수를 세어 단사에서 전사를 끌어내는 방법도 있을 법하지만, 여기서는 세기에 기대지 않고 해당 자리를 직접 찾습니다.

3은 같은 말을 곱으로 옮긴 것입니다. $P_n$의 원소를 어떤 순서로 늘어놓은 열 $b_1, \dots, b_k$에 $x$를 곱해 나머지를 취하면 $P_n$의 원소를 또 한 번씩 늘어놓은 열이 되고, 순서만 다르므로 곱이 같습니다. 그래서 $x b_i$들의 곱이 $b_i$들의 곱과 합동입니다.

## 증명

:::idea
단사는 $xa \equiv xa'$에서 소거 법칙으로 $a \equiv a'$를 얻고, $P_n$의 두 원소가 합동이면 같다는 사실로 $a = a'$를 얻는다. 전사는 $x$의 역원 $x'$를 $d$에 곱해 나머지를 취한 수가 $d$로 간다. 3은 $\mu_x$와 $b$의 합성이 전단사임과 재배열 정리를 쓴다.
:::

:::hint
$\mu_x(a) = \mu_x(a')$이면 $xa$와 $xa'$는 어떤 관계인가요? 그 다음 소거 법칙을 어떤 수에 쓰나요?
:::

:::hint
$d \in P_n$이 주어졌을 때 $\mu_x(a) = d$인 $a$를 찾아야 합니다. $x x' \equiv 1$인 $x'$를 $d$에 곱한 $x'd$를 나머지로 바꿔 보세요.
:::

:::hint
3에서 $c_i$들은 $P_n$의 원소를 한 번씩 늘어놓은 또 하나의 열입니다. $b$와 $c$를 이어 $\{1, \dots, k\}$의 재배열 $\sigma$를 만들어 보세요.
:::

:::proof
**1.** $a \in P_n$이라 하자. $\gcd(a, n) = 1$이고 $\gcd(x, n) = 1$이므로 [[coprime-to-modulus]]의 2에 의해 $\gcd(xa, n) = 1$이다. [[division-theorem|나눗셈 정리]]에 의해 $xa$를 $n$으로 나눈 나머지 $r$이 하나로 정해지고, $n \ge 2$이므로 같은 항목의 4를 정수 $xa$에 쓰면 $xa \equiv r \pmod n$이고 $r \in \{1, \dots, n - 1\}$이며 $r \in P_n$이다. 곧 $\mu_x(a) = r \in P_n$이고 $xa \equiv \mu_x(a) \pmod n$이다. $P_n$의 각 원소 $a$에 $P_n$의 원소 $\mu_x(a)$가 하나씩 정해지므로 $\mu_x$는 $P_n$에서 $P_n$으로의 함수이다.

**2. 단사.** $a, a' \in P_n$이고 $\mu_x(a) = \mu_x(a')$라 하자. 1에 의해 $xa \equiv \mu_x(a)$이고 $xa' \equiv \mu_x(a') = \mu_x(a)$이다. 대칭성과 추이성에 의해 $xa \equiv xa' \pmod n$이다. 곱셈의 교환법칙([[well-ordering-principle]]의 진술에서 받아들임)에 의해 $ax \equiv a'x \pmod n$이고, $\gcd(x, n) = 1$이므로 [[congruence-cancellation|합동식의 소거 법칙]]에 의해 $a \equiv a' \pmod n$이다. $a, a' \in P_n$이므로 [[coprime-to-modulus]]의 5에 의해 $a = a'$이다.

**2. 전사.** $d \in P_n$이라 하자. $\gcd(x, n) = 1$이므로 [[inverse-modulo-n]]의 1에 의해 $xx' \equiv 1 \pmod n$인 정수 $x'$가 있다. $x'x = xx'$이므로 $x'x \equiv 1$이고, 같은 항목의 1을 $x'$에 쓰면 $\gcd(x', n) = 1$이다. $\gcd(d, n) = 1$이므로 [[coprime-to-modulus]]의 2에 의해 $\gcd(x'd, n) = 1$이고, 같은 항목의 4를 정수 $x'd$에 쓰면 $x'd$를 $n$으로 나눈 나머지 $a$는 $a \in P_n$이고 $x'd \equiv a \pmod n$이다. 대칭성에 의해 $a \equiv x'd$이고, 반사성에 의해 $x \equiv x$이므로 [[congruence-arithmetic|합동의 계산 법칙]]의 2에 의해 $xa \equiv x(x'd) \pmod n$이다. 결합법칙에 의해 $x(x'd) = (xx')d$이고, $xx' \equiv 1$, $d \equiv d$에서 같은 계산 법칙에 의해 $(xx')d \equiv 1 \cdot d = d$이다. 추이성에 의해 $xa \equiv d \pmod n$이다. 한편 1에 의해 $xa \equiv \mu_x(a)$이므로 대칭성과 추이성으로 $\mu_x(a) \equiv d$이다. $\mu_x(a) \in P_n$이고 $d \in P_n$이므로 [[coprime-to-modulus]]의 5에 의해 $\mu_x(a) = d$이다. 따라서 $\mu_x$는 전사이고, 단사와 합쳐 전단사이다.

**3.** $\varphi(n)$은 [[euler-phi-function]]의 2에 의해 자연수이므로 $k$가 자연수이고, 같은 항목의 1에 의해 $P_n$은 원소를 $k$개 가지므로 [[finite-set]]의 정의에 의해 전단사 $b : \{1, \dots, k\} \to P_n$이 있다. $c_i = \mu_x(b_i)$는 합성 $c = \mu_x \circ b$이다. $b$와 $\mu_x$가 모두 전단사이므로 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3에 의해 $c : \{1, \dots, k\} \to P_n$은 전단사이다. 각 $b_i \in P_n$에 1을 쓰면 $x b_i \equiv \mu_x(b_i) = c_i \pmod n$이다.

곱의 합동을 보이자. $b$와 $c$는 $P_n \subseteq \mathbb{Z}$로의 함수이므로 [[function]]의 진술에 의해 $\{1, \dots, k\}$에서 $\mathbb{Z}$로의 함수, 곧 길이 $k$인 정수의 열이다. $x b_1, \dots, x b_k$도 길이 $k$인 정수의 열이고 모든 자리에서 $x b_i \equiv c_i$이므로, [[congruence-arithmetic|합동의 계산 법칙]]의 3에 의해
$$(x b_1) \cdots (x b_k) \equiv c_1 \cdots c_k \pmod n$$
이다. 이제 $c_1 \cdots c_k = b_1 \cdots b_k$임을 보인다. [[finite-set]]의 (F3)에 의해 $b^{-1} : P_n \to \{1, \dots, k\}$은 전단사이고, 합성에 관한 정리의 3에 의해 $\sigma = b^{-1} \circ c : \{1, \dots, k\} \to \{1, \dots, k\}$는 전단사이다. [[inverse-function]]에서 $b \circ b^{-1} = i_{P_n}$이므로 각 $i$에 대하여 $b_{\sigma(i)} = b(b^{-1}(c_i)) = c_i$이다. 따라서 열 $b \circ \sigma$와 열 $c$는 모든 자리의 값이 같아 같은 열이고, [[finite-product]]에서 같은 열의 곱은 같으므로 [[rearranging-a-finite-product|재배열 정리]]의 2에 의해
$$c_1 \cdots c_k = b_{\sigma(1)} \cdots b_{\sigma(k)} = b_1 \cdots b_k$$
이다. 두 합동식을 합치면 $(x b_1) \cdots (x b_k) \equiv b_1 \cdots b_k \pmod n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 9, x = 4]
$P_9 = \{1, 2, 4, 5, 7, 8\}$입니다($9$의 양의 약수는 $1, 3, 9$이고, $1, \dots, 8$ 가운데 $3$의 배수는 $3, 6$뿐이고 $9$의 배수는 없습니다). $\gcd(4, 9) = 1$이고 열 $b = (1, 2, 4, 5, 7, 8)$, $k = 6$으로 둡니다. $x b_i = 4, 8, 16, 20, 28, 32$이고 $9$로 나눈 나머지는 $4, 8, 7, 2, 1, 5$입니다($16 = 1 \cdot 9 + 7$, $20 = 2 \cdot 9 + 2$, $28 = 3 \cdot 9 + 1$, $32 = 3 \cdot 9 + 5$). 이 여섯 수 $c = (4, 8, 7, 2, 1, 5)$는 $P_9$의 원소를 한 번씩 늘어놓은 것이어서 $\mu_4$는 전단사입니다. 곱을 계산하면 $c_1 \cdots c_6 = 4 \cdot 8 \cdot 7 \cdot 2 \cdot 1 \cdot 5 = 2240$이고 $b_1 \cdots b_6 = 1 \cdot 2 \cdot 4 \cdot 5 \cdot 7 \cdot 8 = 2240$으로 같습니다. 또 $x b_i$의 곱 $4 \cdot 8 \cdot 16 \cdot 20 \cdot 28 \cdot 32$은 각 인수를 나머지로 바꾼 $c_1 \cdots c_6 = 2240$과 합동입니다.
:::

:::counterexample[x가 n과 서로소가 아니면 깨진다]
$n = 9$, $x = 3$이면 $\gcd(3, 9) = 3 \ne 1$입니다($3 \mid 3$, $3 \mid 9$). $a = 1, 2, 4, 5, 7, 8$에 대해 $xa = 3, 6, 12, 15, 21, 24$이고 $9$로 나눈 나머지는 $3, 6, 3, 6, 3, 6$입니다. 나머지가 $3$과 $6$ 둘뿐이어서 서로 다른 $a$가 같은 값으로 가고(단사가 깨짐), $\gcd(3, 9) = 3$, $\gcd(6, 9) \ge 3$이어서 $3$과 $6$은 $P_9$에 속하지 않습니다(값이 $P_9$에 들지 않음). 증명이 막히는 곳은 소거 법칙입니다. $\gcd(3, 9) \ne 1$이므로 $3 \cdot 1 \equiv 3 \cdot 4 \pmod 9$에서 $1 \equiv 4$를 얻을 수 없습니다.
:::

:::counterexample[n = 1은 범위 밖이다]
$n = 1$, $x = 1$이면 $P_1 = \{1\}$이고 $x \cdot 1 = 1 = 1 \cdot 1 + 0$이므로 나머지는 $0$입니다. $0 \notin P_1$이므로 $\mu_x$는 $P_1$에서 $P_1$으로의 함수가 아닙니다. 그래서 이 항목은 $n \ge 2$에서만 말합니다.
:::

## 확인 질문

:::check[$n = 12$, $x = 5$일 때 $P_{12}$의 각 원소에 대해 $\mu_5$의 값을 구하고 전단사임을 확인하라.]
$12$의 양의 약수는 $1, 2, 3, 4, 6, 12$입니다. $a = 2, 3, 4, 6, 8, 9, 10, 12$는 $2$ 또는 $3$의 배수이고 $2$, $3$은 $12$를 나누므로 $12$와 서로소가 아닙니다. $5$, $7$, $11$은 $2, 3, 4, 6$으로 나누어떨어지지 않고($5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1 = 6 \cdot 0 + 5$, $7 = 2 \cdot 3 + 1 = 3 \cdot 2 + 1 = 4 \cdot 1 + 3 = 6 \cdot 1 + 1$, $11 = 2 \cdot 5 + 1 = 3 \cdot 3 + 2 = 4 \cdot 2 + 3 = 6 \cdot 1 + 5$) $12$보다 작아 $12$로도 나누어떨어지지 않으므로 공통인 양의 약수가 $1$뿐입니다. 따라서 $P_{12} = \{1, 5, 7, 11\}$입니다. $5 \cdot 1 = 5$, $5 \cdot 5 = 25 = 2 \cdot 12 + 1$, $5 \cdot 7 = 35 = 2 \cdot 12 + 11$, $5 \cdot 11 = 55 = 4 \cdot 12 + 7$이므로 $\mu_5(1) = 5$, $\mu_5(5) = 1$, $\mu_5(7) = 11$, $\mu_5(11) = 7$입니다. 값 $5, 1, 11, 7$은 $P_{12}$의 원소를 한 번씩 모두 포함하므로 전단사입니다.
:::

:::check[$n = 10$, $x = 7$일 때 $\mu_7(a) = 9$인 $a \in P_{10}$를 전사의 증명처럼 역원으로 찾아라.]
$7 \cdot 3 = 21 = 2 \cdot 10 + 1$이므로 $x' = 3$은 $7$의 법 $10$ 역원입니다. $x'd = 3 \cdot 9 = 27 = 2 \cdot 10 + 7$이므로 $a = 7$입니다. 실제로 $\gcd(7, 10) = 1$이고($7 \nmid 10$이고 $7$의 양의 약수는 $1, 7$) $1 \le 7 \le 10$이어서 $7 \in P_{10}$이며, $\mu_7(7)$은 $7 \cdot 7 = 49 = 4 \cdot 10 + 9$의 나머지인 $9$입니다.
:::
