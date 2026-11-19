---
title: 법 n의 단원군
title_en: Group of Units Modulo n
aliases: [U(n), 단원군, 기약잉여류군, 곱셈 역원, group of units, multiplicative group modulo n]
kind: theorem
field: group-theory
msc: ["20K01", "11A07"]
level: undergrad
summary: 법 n과 서로소인 정수의 동치류 전체 U(n)은 ℤ_n의 곱셈으로 아벨군이고, ℤ_n의 원소가 곱셈 역원을 갖는 것은 정확히 U(n)에 속할 때이며, |U(n)| = φ(n)이다. 소수 p에 대해 U(p)는 ℤ_p에서 [0]을 뺀 것이다.
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, equivalence-classes-equal-iff-related, congruence-modulo-n, residues-modulo-n, greatest-common-divisor, inverse-modulo-n, euler-phi-function, coprime-to-modulus, prime-number, binary-operation, group, group-basic-properties, integers-modulo-n, recursion-theorem, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Example 3.11 의 끝(U(n) 의 정의, Figure 3.12 U(8) 의 곱셈표), p.35. 근거가 되는 Proposition 3.4 (6), p.30. |U(n)| = φ(n) 은 6.3절 Theorem 6.17, p.77
    checked: original
    note: "출처는 '명제 3.4 에 의해 n 과 서로소인 0 이 아닌 k 는 ℤ_n 에서 역원을 갖는다. 그런 0 이 아닌 원소 전체를 U(n) 으로 쓰면 U(n) 은 군이다'라고만 적는다(p.35). 닫힘(서로소인 두 수의 곱이 서로소)과 역원이 U(n) 에 있다는 것은 그 자리에 적혀 있지 않고, 책 전체에서도 찾지 못했다(검색어 'closed under multiplication' 2건은 아이디얼과 ℚ(√2) 문맥, 'product of two … relatively prime', 'U(n) is closed' 0건). 이 항목은 그것을 정수론 입문의 coprime-to-modulus (1), (2)와 inverse-modulo-n (1)로 증명한다. 출처의 '0 이 아닌 원소'라는 조건을 이 항목은 쓰지 않는다. n ≥ 2 이면 gcd(0, n) = n ≠ 1 이라 같은 집합이고, n = 1 이면 이 항목의 정의로 U(1) = {[0]} 이다. 출처의 6.3절(p.77)은 φ(1) = 1 로 정하고 Theorem 6.17 '|U(n)| = φ(n)'을 '명제 3.4 에서 안다'고만 적는다. 이 항목의 (5)는 P_n 에서 U(n) 으로의 전단사로 증명한다. 출처의 φ(n) 은 n > 1 에서 1 ≤ m < n 인 m 을 세고, 이 사이트의 euler-phi-function 은 1 ≤ a ≤ n 인 a 를 센다. 두 정의는 n ≥ 2 에서 같은 수를 센다(euler-phi-function 의 (3)). (6)(U(p) = ℤ_p − {[0]})은 출처 Example 16.17(p.194)이 'ℤ_p 는 체이다'라고 할 때 명제 3.4 로 쓰는 사실과 같은 내용이다. 예시의 U(10) 은 출처 연습문제 9.5(p.122, 'U(5) 와 U(10) 은 동형')에 이름만 나오고 곱셈표는 출처에 없다. 출처의 표는 U(8)(Figure 3.12) 이고 연습문제 3.6(p.41) 이 U(12) 의 표를 묻는다. 확인 질문의 U(9) 는 출처 Example 4.6(p.47)이 원소를 늘어놓는 것과 같은 대상이다. U(7) 의 역원 계산은 출처에서 찾지 못했다(검색어 'U(7)', 'inverse of 3' 0건, '3 · 5' 는 Example 3.1 의 법 8 계산뿐)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$n$이 자연수라 하자. $\mathbb{Z}_n$, 동치류 $[a]$, $\mathbb{Z}_n$의 곱셈 $[a][b] = [ab]$는 [[integers-modulo-n|법 n의 정수]]의 것이고, $\gcd$와 서로소는 [[greatest-common-divisor|최대공약수]]의 것이다.

1. (서로소인 동치류) 정수 $a$, $a'$이 $[a] = [a']$이면 $\gcd(a, n) = 1$인 것은 정확히 $\gcd(a', n) = 1$일 때이다. 따라서
$$U(n) = \{[a] : a \in \mathbb{Z},\ \gcd(a, n) = 1\}$$
로 정하면, 모든 정수 $a$에 대하여 $[a] \in U(n)$인 것은 정확히 $\gcd(a, n) = 1$일 때이다.
2. (군) $U(n)$은 $\mathbb{Z}_n$의 곱셈에 대해 닫혀 있고, 곱셈을 $U(n)$으로 제한한 연산으로 $U(n)$은 아벨군이다. 이 군을 **법 $n$의 단원군**(group of units modulo $n$)이라 한다. 항등원은 $[1]$이다. $[a] \in U(n)$이고 $b$가 법 $n$에 대한 $a$의 [[inverse-modulo-n|역원]], 곧 $ab \equiv 1 \pmod n$인 정수이면 $[b] \in U(n)$이고, 이 군에서 $[a]$의 역원은 $[b]$이다.
3. (곱셈 역원을 갖는 원소) $P \in \mathbb{Z}_n$에 대하여 $PQ = [1]$이고 $QP = [1]$인 $Q \in \mathbb{Z}_n$이 있는 것은 정확히 $P \in U(n)$일 때이다.
4. ($n = 1$) $U(1) = \mathbb{Z}_1 = \{[0]\}$이다.
5. (원소의 개수) $U(n)$은 유한군이고 $|U(n)| = \varphi(n)$이다. 여기서 $\varphi$는 [[euler-phi-function|오일러 피 함수]]이다.
6. (소수) $p$가 소수이면 $U(p) = \mathbb{Z}_p - \{[0]\}$이다.
:::

:::english
Let $n$ be a natural number. $\mathbb{Z}_n$, the classes $[a]$ and the multiplication $[a][b] = [ab]$ of $\mathbb{Z}_n$ are as in the entry on the integers modulo $n$, and $\gcd$ and coprimality are as in the entry on the greatest common divisor.

1. (Coprime classes) If integers $a$, $a'$ satisfy $[a] = [a']$, then $\gcd(a, n) = 1$ exactly when $\gcd(a', n) = 1$. Hence if we put
$$U(n) = \{[a] : a \in \mathbb{Z},\ \gcd(a, n) = 1\},$$
then for every integer $a$ we have $[a] \in U(n)$ exactly when $\gcd(a, n) = 1$.
2. (Group) $U(n)$ is closed under the multiplication of $\mathbb{Z}_n$, and with the restriction of multiplication to $U(n)$, $U(n)$ is an abelian group. It is called the **group of units modulo $n$**. Its identity is $[1]$. If $[a] \in U(n)$ and $b$ is an inverse of $a$ modulo $n$, that is, an integer with $ab \equiv 1 \pmod n$, then $[b] \in U(n)$ and the inverse of $[a]$ in this group is $[b]$.
3. (Elements with a multiplicative inverse) For $P \in \mathbb{Z}_n$, there is $Q \in \mathbb{Z}_n$ with $PQ = [1]$ and $QP = [1]$ exactly when $P \in U(n)$.
4. ($n = 1$) $U(1) = \mathbb{Z}_1 = \{[0]\}$.
5. (Number of elements) $U(n)$ is a finite group and $|U(n)| = \varphi(n)$, where $\varphi$ is Euler's phi function.
6. (Primes) If $p$ is a prime, then $U(p) = \mathbb{Z}_p - \{[0]\}$.
:::

## 직관

$n \ge 2$이면 $\mathbb{Z}_n$은 곱셈으로 군이 되지 못합니다([[number-groups|수로 이루어진 군]]의 (5)). $[0]$은 물론이고, 예컨대 $\mathbb{Z}_4$의 $[2]$도 곱해서 $[1]$을 만들 짝이 없습니다. 그렇다면 짝이 있는 원소만 모으면 군이 될까요? 정수론 입문에서 배운 대로, $a$의 법 $n$ 역원이 있는 것은 정확히 $a$가 $n$과 서로소일 때입니다([[inverse-modulo-n|법 n에 대한 역원]]의 (1)). 그래서 서로소인 원소만 모은 것이 $U(n)$이고, (3)은 이 모음이 "곱셈 역원을 갖는 원소 전체"와 정확히 같다는 것입니다.

모은 것이 군이 되려면 두 가지를 더 확인해야 합니다. 두 원소의 곱이 다시 모음 안에 있는지(닫힘), 그리고 역원도 모음 안에 있는지입니다. 첫째는 서로소인 두 수의 곱이 서로소라는 것이고, 둘째는 역원의 역원이 원래 원소라는 것입니다. "$[a]$가 $U(n)$에 속하는지"를 대표 $a$로 판단해도 되는 것은 (1) 덕분입니다.

$|U(n)| = \varphi(n)$은 정수론 입문의 $P_n$, 곧 $1$ 이상 $n$ 이하이고 $n$과 서로소인 정수들이 $U(n)$의 원소의 이름표 노릇을 한다는 것입니다. 각 원소가 이름표를 정확히 하나씩 갖습니다.

## 증명

:::idea
$U(n)$은 $\mathbb{Z}_n$의 부분집합이므로 [[binary-operation|이항연산]]의 (3)으로 닫힘, 항등원, 역원을 확인한다. 각 단계는 정수론 입문의 합동과 서로소에 관한 진술로 옮겨진다. 개수는 $t \in P_n$에 $[t]$를 대응시키는 전단사로 센다.
:::

:::hint
(2)의 역원: $ab \equiv 1 \pmod n$이면 $ba \equiv 1 \pmod n$이므로 $a$는 $b$의 법 $n$ 역원이다.
:::

:::hint
(5): $n = 1$과 $n \ge 2$를 나눈다. $n \ge 2$이면 [[coprime-to-modulus|법과 서로소인 수의 성질]]의 (4), (5)가 전사와 단사를 준다.
:::

:::proof
아래에서 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 정수 $a$, $b$에 대하여 $[a] = [b]$인 것은 정확히 $a \equiv b \pmod n$일 때이다. 이것을 "(가)"라 부른다.

**(1)** $[a] = [a']$이면 (가)에 의해 $a \equiv a' \pmod n$이고, [[coprime-to-modulus|법과 서로소인 수의 성질]]의 (1)에 의해 $\gcd(a, n) = 1$인 것은 정확히 $\gcd(a', n) = 1$일 때이다. 정수 $a$에 대하여 $\gcd(a, n) = 1$이면 정의에 의해 $[a] \in U(n)$이다. 거꾸로 $[a] \in U(n)$이면 정의에 의해 $[a] = [a']$이고 $\gcd(a', n) = 1$인 정수 $a'$이 있고, 방금 보인 것에 의해 $\gcd(a, n) = 1$이다.

**(2)** 닫힘: $[a], [b] \in U(n)$이면 (1)에 의해 $\gcd(a, n) = 1$, $\gcd(b, n) = 1$이고, [[coprime-to-modulus|법과 서로소인 수의 성질]]의 (2)에 의해 $\gcd(ab, n) = 1$이다. 따라서 $[a][b] = [ab] \in U(n)$이다. $U(n)$의 원소는 모두 어떤 $[a]$이므로 $U(n)$은 곱셈에 대해 닫혀 있고, [[binary-operation|이항연산]]의 (3)에 의해 곱셈을 $U(n)$으로 제한한 연산은 $U(n)$ 위의 이항연산이다. [[integers-modulo-n|법 n의 정수]]의 (3)에 의해 $\mathbb{Z}_n$의 곱셈은 결합적이고 가환이므로 (3)의 (i)에 의해 제한한 연산도 그렇다.

항등원: [[euler-phi-function|오일러 피 함수]]의 (2)에 의해 $1 \in P_n$이므로 $\gcd(1, n) = 1$이고 $[1] \in U(n)$이다. [[integers-modulo-n|법 n의 정수]]의 (4)에 의해 $[1]$은 $\mathbb{Z}_n$의 곱셈의 항등원이므로, [[binary-operation|이항연산]]의 (3)의 (ii)에 의해 제한한 연산의 항등원이다.

역원: $[a] \in U(n)$이고 $ab \equiv 1 \pmod n$이라 하자. 정수의 곱셈은 가환이므로 $ba \equiv 1 \pmod n$이고, 이는 $a$가 $b$의 법 $n$ 역원이라는 뜻이다. [[inverse-modulo-n|법 n에 대한 역원]]의 (1)을 $b$에 쓰면 $\gcd(b, n) = 1$이고, (1)에 의해 $[b] \in U(n)$이다. (가)에 의해 $[a][b] = [ab] = [1]$이고 $[b][a] = [ba] = [1]$이므로 $[b]$는 $\mathbb{Z}_n$의 곱셈에 대한 $[a]$의 역원이고, (3)의 (iii)에 의해 제한한 연산에 대한 역원이다. $[a] \in U(n)$이면 (1)에 의해 $\gcd(a, n) = 1$이고 [[inverse-modulo-n|법 n에 대한 역원]]의 (1)에 의해 그런 $b$가 있다. 따라서 $U(n)$의 모든 원소가 역원을 갖고, [[group|군]]의 세 조건과 교환법칙이 성립한다. 군의 역원은 하나뿐이므로 $[a]$의 역원은 $[b]$이다.

**(3)** $P = [a]$인 정수 $a$가 있다. $P \in U(n)$이면 (2)에 의해 $Q = [b]$가 조건을 만족한다. 거꾸로 $PQ = [1]$인 $Q = [b]$가 있다고 하자. $[ab] = [a][b] = [1]$이므로 (가)에 의해 $ab \equiv 1 \pmod n$이고, [[inverse-modulo-n|법 n에 대한 역원]]의 (1)에 의해 $\gcd(a, n) = 1$, 곧 (1)에 의해 $P = [a] \in U(n)$이다.

**(4)** [[integers-modulo-n|법 n의 정수]]의 (5)에 의해 $\mathbb{Z}_1 = \{[0]\}$이다. [[greatest-common-divisor|최대공약수]]의 (iv)에 의해 $\gcd(0, 1) = 1$이므로 $[0] \in U(1)$이고, $U(1) \subseteq \mathbb{Z}_1$이므로 $U(1) = \{[0]\} = \mathbb{Z}_1$이다.

**(5)** $n = 1$이면 (4)와 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $U(1)$은 원소를 $1$개 갖고, [[euler-phi-function|오일러 피 함수]]의 (3)에 의해 $\varphi(1) = 1$이다.

$n \ge 2$라 하자. $t \in P_n$이면 $\gcd(t, n) = 1$이므로 (1)에 의해 $[t] \in U(n)$이다. 각 $t \in P_n$에 $[t]$를 대응시키면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $h : P_n \to U(n)$이 정해진다. 단사: $t, t' \in P_n$이고 $[t] = [t']$이면 (가)에 의해 $t \equiv t' \pmod n$이고, [[coprime-to-modulus|법과 서로소인 수의 성질]]의 (5)에 의해 $t = t'$이다. 전사: $[a] \in U(n)$이면 (1)에 의해 $\gcd(a, n) = 1$이고, 같은 항목의 (4)에 의해 $a$를 $n$으로 나눈 나머지 $r$은 $a \equiv r \pmod n$이고 $r \in P_n$이다. (가)에 의해 $h(r) = [r] = [a]$이다. 따라서 $h$는 [[injective-surjective-bijective|전단사]]이다. [[euler-phi-function|오일러 피 함수]]의 (1)에 의해 $P_n$은 원소를 $\varphi(n)$개 가지므로, [[finite-set|유한집합]]의 (F4)에 의해 $U(n)$도 원소를 $\varphi(n)$개 갖는다. 곧 $U(n)$은 유한군이고 $|U(n)| = \varphi(n)$이다([[number-of-elements-is-unique|원소의 개수]]).

**(6)** $p$가 소수라 하자. 양의 약수가 $1$과 $p$ 두 개이므로 $p \ne 1$이고, $p$는 양의 정수이므로 $p \ge 2$이다((Z1)과 (Z5)). $[0] \notin U(p)$: [[greatest-common-divisor|최대공약수]]의 (iv)에 의해 $\gcd(0, p) = p \ne 1$이므로 (1)에 의해 $[0] \notin U(p)$이다. 따라서 $U(p) \subseteq \mathbb{Z}_p - \{[0]\}$이다. 거꾸로 $P \in \mathbb{Z}_p - \{[0]\}$이면 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $P = [r]$이고 $0 \le r \le p - 1$인 정수 $r$가 있다. $P \ne [0]$이므로 $r \ne 0$이고, 따라서 $1 \le r \le p - 1$이다((Z5), (Z1)). [[euler-phi-function|오일러 피 함수]]의 (4)에 의해 $P_p = \{1, \dots, p - 1\}$이므로 $r \in P_p$, 곧 $\gcd(r, p) = 1$이고 (1)에 의해 $P = [r] \in U(p)$이다. 여기서 (Z1)은 [[prime-number|소수]]의 진술에서, (Z5)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질이다.
:::

## 예시와 반례

:::example[U(10)의 곱셈표]
$n = 10$이면 $1$ 이상 $10$ 이하에서 $10$과 서로소인 정수는 $1, 3, 7, 9$입니다($2, 4, 6, 8, 10$은 $2$를, $5$는 $5$를 $10$과 공약수로 갖습니다). 따라서 (5)의 증명에 의해 $U(10) = \{[1], [3], [7], [9]\}$이고 $|U(10)| = \varphi(10) = 4$입니다. 곱을 계산해 $[0], \dots, [9]$ 가운데 하나로 바꾸면 다음 표가 나옵니다.

| $\cdot$ | $[1]$ | $[3]$ | $[7]$ | $[9]$ |
|---|---|---|---|---|
| $[1]$ | $[1]$ | $[3]$ | $[7]$ | $[9]$ |
| $[3]$ | $[3]$ | $[9]$ | $[1]$ | $[7]$ |
| $[7]$ | $[7]$ | $[1]$ | $[9]$ | $[3]$ |
| $[9]$ | $[9]$ | $[7]$ | $[3]$ | $[1]$ |

예컨대 $[3][7] = [21] = [1]$이므로 $[3]$과 $[7]$은 서로의 역원이고, $[9][9] = [81] = [1]$이므로 $[9]$의 역원은 $[9]$입니다. 각 행과 열에 네 원소가 한 번씩 나오는 것은 [[group-basic-properties|군의 기본 성질]]의 연산표에 관한 참고와 맞습니다.
:::

:::counterexample[U(10)은 덧셈에 대해 닫혀 있지 않다]
$U(10)$은 $\mathbb{Z}_{10}$의 덧셈에 대해서는 닫혀 있지 않습니다. $[1] + [1] = [2]$인데 $\gcd(2, 10) = 2 \ne 1$이므로 (1)에 의해 $[2] \notin U(10)$입니다. 그래서 $U(10)$을 군이라 할 때의 연산은 곱셈입니다. ($n = 1$이면 $U(1) = \mathbb{Z}_1$이라 덧셈에 대해서도 닫혀 있습니다.)
:::

## 확인 질문

:::check[$U(9)$의 원소를 모두 적고, $[2]$의 역원을 구하라.]
$1$ 이상 $9$ 이하에서 $9$와 서로소인 정수는 $1, 2, 4, 5, 7, 8$이므로($3, 6, 9$는 $3$을 공약수로 갖습니다) $U(9) = \{[1], [2], [4], [5], [7], [8]\}$입니다. $2 \cdot 5 = 10 \equiv 1 \pmod 9$이므로 $[2]$의 역원은 $[5]$입니다.
:::

:::check[$U(7)$에서 $[3]$의 역원은? $U(7)$은 몇 개의 원소를 갖는가?]
$3 \cdot 5 = 15 = 7 \cdot 2 + 1$이므로 $[3][5] = [1]$이고 $[3]$의 역원은 $[5]$입니다. $7$은 소수이므로 (6)에 의해 $U(7) = \mathbb{Z}_7 - \{[0]\}$이고, (5)와 [[euler-phi-function|오일러 피 함수]]의 (4)에 의해 $|U(7)| = \varphi(7) = 6$입니다.
:::
