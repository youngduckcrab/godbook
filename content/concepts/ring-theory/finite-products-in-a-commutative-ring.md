---
title: 가환환의 유한 곱과 거듭제곱
title_en: Finite Products and Powers in a Commutative Ring
aliases: [유한 곱, 빈 곱, 환의 거듭제곱, 지수법칙, 유한 등비합, finite product, empty product, power in a ring, laws of exponents, finite geometric sum]
kind: definition
field: ring-theory
msc: ["13"]
level: undergrad
summary: 단위원을 갖는 가환환의 원소의 길이 n ≥ 0 인 열의 곱을 재귀 정리로 정의하고(빈 곱은 1), 0 이상의 정수 지수의 거듭제곱을 모든 항이 같은 열의 곱으로 정한다. 끝항과 맨 앞 떼기, 이어 붙이기, 항별 곱, 지수법칙, 정역에서 곱이 0 일 조건, 가역원의 군의 곱과의 일치, 환 준동형, 정수와 법 m 의 정수에서의 값, 유한 등비합의 인수분해를 보인다.
requires: [set, function, finite-set, adding-or-removing-an-element, natural-numbers-are-infinite, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, finite-product, congruence-arithmetic, prime-power-divisors, group, finite-product-in-a-group, power-in-a-group, laws-of-exponents, integers-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, field, ring-homomorphism, finite-sums-in-a-ring]
sources:
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, 분해체의 정의 (p.268); 22.1절 Structure of a Finite Field, Theorem 22.7 의 증명 (p.280); 23.2절, Theorem 23.19 의 증명 (p.299); 2.4절 Exercises, 연습문제 9 (p.24); 16.7절 Exercises, 연습문제 27 (p.206); 3.1절 Figure 3.3 (p.29); 4.1절 Example 4.6 (p.47); 22.2절 Polynomial Codes (p.283); 17.5절 Exercises, 연습문제 20 (p.221)"
    checked: original
    note: "출처는 가환환의 원소 여러 개의 곱을 정의 없이 쓴다. 분해체의 정의(p.268)는 p(x) = (x − α_1)(x − α_2) ⋯ (x − α_n) 으로, Theorem 23.19 의 증명(p.299)은 곱 기호로 g(x) = ∏_{i=1}^n (x − α_i) 로 적는다. 환의 거듭제곱은 연습문제 16.27(p.206)의 '어떤 양의 정수 n 에서 a^n = 0' 처럼 정의 없이 쓴다. 이 항목의 재귀 정의와 (1)–(11)의 진술과 증명은 이 사이트가 썼고, 본보기는 군의 작용과 실로우 정리 강의의 finite-product-in-a-group 이다(가환환의 곱셈은 군이 아니므로 그 항목을 쓰지 못하고 따로 정의했다). 빈 곱을 1 로, 0⁰ = 1 로 정한 것은 이 사이트의 선택이다. (11)의 (ii)는 출처 Theorem 22.7 의 증명(p.280)이 'p^m − 1 divides p^n − 1. Consequently, x^{p^m−1} − 1 divides x^{p^n−1} − 1' 로 넘어가는 곳의 근거로 둔 것이고, (11)의 (i)을 a = 2, b = 1 에 쓴 정수의 등식은 출처 연습문제 2.4.9(p.24)의 1 + 2 + 2² + ⋯ + 2ⁿ = 2^{n+1} − 1 과 같은 내용이다. 곱의 재배열은 이 항목에서 진술하지 않는다. 예시 '법 9의 정수에서 거듭제곱'의 [2]^k 의 값은 출처 Example 4.6(p.47)이 U(9) 에서 2¹, …, 2⁶ 을 계산한 것과 같다. 반례 '정역이 아니면 0 이 아닌 원소의 거듭제곱이 0 일 수 있다'의 ℤ_8 에서의 계산은 출처 Figure 3.3(p.29)의 Z8 곱셈표에서 2·4 = 0 을 읽는 것과 같은 계산이다. 예시 '유한 등비합으로 본 인수분해' 의 b = 1 인 꼴은 출처 22.2절(p.283)의 'x^n − 1 = (x − 1)(x^{n−1} + ⋯ + x + 1)' 과 연습문제 17.5.20(p.221)의 원분다항식 Φ_n(x) = (x^n − 1)/(x − 1) = x^{n−1} + ⋯ + x + 1 과 같은 등식이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 가환환([[ring|환]]의 뜻)이라 하자. $0$, $1$, 곱 $ab$, 정수배 $n \cdot a$는 [[ring|환]]의 표기이고, 합의 기호 $\sum_{k=m}^{n}$은 [[finite-sums-in-a-ring|환의 유한 합]]의 것이다. $\mathbb{N}$은 양의 정수의 집합이다.

**열.** $n$이 $0$ 이상인 정수일 때, [[function|함수]] $a : \{1, \dots, n\} \to R$([[finite-set|유한집합]]의 $\{1, \dots, n\}$)를 $R$의 원소의 길이 $n$인 **열**이라 하고, $a(j)$를 $a_j$로 써서 $a_1, \dots, a_n$으로 나타낸다. 길이가 같은 두 열은 모든 자리에서 항이 같을 때 같은 열이다. 처음 $k$개($0 \le k \le n$, [[adding-or-removing-an-element|제한]]), 두 열을 이어 붙인 열, 맨 앞을 뗀 열 $a_2, \dots, a_n$은 [[finite-product-in-a-group|군의 유한 곱]]의 (2)–(4)에서와 같은 방식으로 정한다. 자리 $j$마다 $R$의 원소가 식으로 하나씩 정해지면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 그 원소들을 항으로 갖는 열이 있다.

**곱.** 길이 $n$인 열 $a_1, \dots, a_n$의 **곱**(product) $a_1 a_2 \cdots a_n$을 다음과 같이 정한다.

- $n = 0$이면 $a_1 \cdots a_n = 1$이고, 이것을 **빈 곱**(empty product)이라 한다.
- $n \ge 1$이면, 자연수 $k$와 $s \in R$마다 $k + 1 \le n$일 때 $s\,a_{k+1}$을, $k + 1 > n$일 때 $s$를 값으로 하는 함수 $q : \mathbb{N} \times R \to R$를 생각한다. 재귀 정리에 의해 $P(1) = a_1$이고 모든 자연수 $k$에서 $P(k + 1) = q(k, P(k))$인 함수 $P : \mathbb{N} \to R$가 정확히 하나 있고, $a_1 \cdots a_n = P(n)$으로 정한다.

항이 식인 열의 곱도 같은 꼴로 쓰고, 네 개 이상의 원소의 곱도 괄호 없이 이렇게 쓴다(아래 (1)에 의해 세 원소의 곱 $abc$와 맞는다). 곱 기호 $\Pi$는 쓰지 않는다.

**거듭제곱.** $a \in R$이고 $k$가 $0$ 이상인 정수이면, 모든 항이 $a$인 길이 $k$인 열의 곱을 $a$의 **$k$제곱**(the $k$th power) $a^k$라 한다. 특히 $a^0 = 1$이고, $a = 0$이어도 $0^0 = 1$이다.

다음이 성립한다. 아래에서 $m$, $n$, $j$, $k$는 $0$ 이상인 정수이고 $a$, $b$, $x$는 $R$의 원소이다.

1. (짧은 열) 빈 곱은 $1$이다. 길이 $1$, $2$, $3$인 열의 곱은 차례로 $a_1$, $a_1 a_2$, $a_1 a_2 a_3$이다.
2. (끝항 떼기) $a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\,a_{n+1}$이다. 오른쪽의 $a_1 \cdots a_n$은 처음 $n$개의 곱이다.
3. (이어 붙이기) 열 $a_1, \dots, a_m$과 $b_1, \dots, b_n$을 이어 붙인 열 $c_1, \dots, c_{m+n}$($c_j = a_j$ ($j \le m$), $c_{m+j} = b_j$)에 대하여 $(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}$이다.
4. (맨 앞 떼기) $n \ge 1$이면 $a_1 \cdots a_n = a_1 (a_2 \cdots a_n)$이다($n = 1$이면 $a_2 \cdots a_n$은 빈 곱 $1$이다).
5. (항별 곱) 길이가 같은 두 열 $a_1, \dots, a_n$과 $b_1, \dots, b_n$에 대하여, $j$번째 항이 $a_j b_j$인 열의 곱은 $(a_1 \cdots a_n)(b_1 \cdots b_n)$이다.
6. (지수법칙)
   - (i) $a^0 = 1$, $a^1 = a$이고 $a^{k+1} = a^k a = a\,a^k$이다.
   - (ii) $a^{j+k} = a^j a^k$이다.
   - (iii) $(a^j)^k = a^{jk}$이다.
   - (iv) $(ab)^k = a^k b^k$이다.
   - (v) $1^k = 1$이다. $k \ge 1$이면 $0^k = 0$이다.
7. (정역) $R$이 [[integral-domain|정역]]이면, 열 $a_1, \dots, a_n$의 곱이 $0$인 것은 정확히 어떤 $j \in \{1, \dots, n\}$에서 $a_j = 0$일 때이다. 특히 $a \ne 0$이면 모든 $k$에서 $a^k \ne 0$이다.
8. (가역원) [[field|가역원]] 전체의 군 $R^{\times}$에 대하여, 열 $a_1, \dots, a_n$의 모든 항이 $R^{\times}$에 속하면 그 곱도 $R^{\times}$에 속하고, 군 $R^{\times}$에서의 곱([[finite-product-in-a-group|군의 유한 곱]])과 같다. 특히 $a \in R^{\times}$이면 이 항목의 $a^k$는 군 $R^{\times}$에서의 거듭제곱([[power-in-a-group|군의 거듭제곱]])과 같다. 그래서 가역원 $a$와 음의 정수 $k$에 대해서도 $a^k$를 군 $R^{\times}$의 거듭제곱으로 쓰고, $(a^k)^{-1} = (a^{-1})^k = a^{-k}$이다.
9. (준동형) $R'$이 단위원 $1'$을 갖는 가환환이고 $\varphi : R \to R'$이 $\varphi(1) = 1'$인 [[ring-homomorphism|환 준동형]]이면 $\varphi(a_1 \cdots a_n) = \varphi(a_1) \cdots \varphi(a_n)$이고 $\varphi(a^k) = \varphi(a)^k$이다.
10. (정수와 법 $m$의 정수) 환 $\mathbb{Z}$, $\mathbb{Z}_m$은 [[ring-examples|환의 예]]의 것이다.
    - (i) 환 $\mathbb{Z}$에서 $n \ge 1$인 열의 곱은 [[finite-product|유한 곱]]의 정수의 곱과 같고, 정수 $a$의 $a^k$는 [[prime-power-divisors|소수의 거듭제곱인 약수]]에서 정한 정수의 거듭제곱 $a^k$와 같다.
    - (ii) $m \ge 2$이면 환 $\mathbb{Z}_m$에서 정수의 열 $a_1, \dots, a_n$과 정수 $a$에 대하여 $[a_1] \cdots [a_n] = [a_1 \cdots a_n]$이고 $[a]^k = [a^k]$이다. 오른쪽의 곱과 거듭제곱은 (i)의 정수의 것이다($n = 0$이면 정수의 빈 곱을 $1$로 읽는다).
11. (유한 등비합)
    - (i) $q$가 $0$ 이상인 정수이면
      $$
      \begin{aligned}
      &(a - b) \sum_{k=0}^{q-1} a^k b^{q-1-k} \\
      &\quad = a^q - b^q
      \end{aligned}
      $$
      이다. 특히 $b = 1$이면 $(x - 1) \sum_{k=0}^{q-1} x^k = x^q - 1$이다.
    - (ii) $d$, $e$가 $0$ 이상인 정수이고 $d \mid e$이면 $x^e - 1 = (x^d - 1)\,y$인 $y \in R$가 있다.
    - (iii) 따라서 정수 $c$와 $0$ 이상인 정수 $d$, $e$에 대하여 $d \mid e$이면 정수의 거듭제곱에서 $c^d - 1 \mid c^e - 1$이다.
:::

:::english
Let $R$ be a commutative ring with unity $1$ (in the sense of the entry on rings). The notations $0$, $1$, products $ab$ and integer multiples $n \cdot a$ are those of the entry on rings, and the summation notation $\sum_{k=m}^{n}$ is that of the entry on finite sums in a ring. $\mathbb{N}$ is the set of positive integers.

**Sequences.** For an integer $n \ge 0$, a function $a : \{1, \dots, n\} \to R$ is called a **sequence** of elements of $R$ of length $n$; we write $a(j)$ as $a_j$ and denote it by $a_1, \dots, a_n$. Two sequences of the same length are equal when their terms agree in every place. The first $k$ terms ($0 \le k \le n$, by restriction), the concatenation of two sequences, and the sequence $a_2, \dots, a_n$ obtained by removing the first term are defined in the same way as in (2)–(4) of the entry on finite products in a group. If an element of $R$ is given by an expression for each place $j$, then by (1) of the recursion theorem there is a sequence having these elements as its terms.

**Product.** The **product** $a_1 a_2 \cdots a_n$ of a sequence $a_1, \dots, a_n$ of length $n$ is defined as follows.

- If $n = 0$, then $a_1 \cdots a_n = 1$; this is called the **empty product**.
- If $n \ge 1$, consider the function $q : \mathbb{N} \times R \to R$ whose value at a natural number $k$ and $s \in R$ is $s\,a_{k+1}$ if $k + 1 \le n$ and $s$ if $k + 1 > n$. By the recursion theorem there is exactly one function $P : \mathbb{N} \to R$ with $P(1) = a_1$ and $P(k + 1) = q(k, P(k))$ for every natural number $k$, and we set $a_1 \cdots a_n = P(n)$.

Products of sequences whose terms are expressions are written in the same way, and products of four or more elements are also written this way without parentheses (by (1) below this agrees with the triple product $abc$). The product sign $\Pi$ is not used.

**Powers.** If $a \in R$ and $k$ is an integer $\ge 0$, the product of the sequence of length $k$ all of whose terms are $a$ is called the **$k$th power** $a^k$ of $a$. In particular $a^0 = 1$, and $0^0 = 1$ even for $a = 0$.

The following hold, where $m$, $n$, $j$, $k$ are integers $\ge 0$ and $a$, $b$, $x$ are elements of $R$.

1. (Short sequences) The empty product is $1$. The products of sequences of length $1$, $2$, $3$ are $a_1$, $a_1 a_2$, $a_1 a_2 a_3$ respectively.
2. (Splitting off the last term) $a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\,a_{n+1}$, where $a_1 \cdots a_n$ on the right is the product of the first $n$ terms.
3. (Concatenation) For the concatenation $c_1, \dots, c_{m+n}$ of sequences $a_1, \dots, a_m$ and $b_1, \dots, b_n$ ($c_j = a_j$ for $j \le m$, $c_{m+j} = b_j$), $(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}$.
4. (Splitting off the first term) If $n \ge 1$, then $a_1 \cdots a_n = a_1 (a_2 \cdots a_n)$ (for $n = 1$, $a_2 \cdots a_n$ is the empty product $1$).
5. (Termwise products) For two sequences $a_1, \dots, a_n$ and $b_1, \dots, b_n$ of the same length, the product of the sequence whose $j$th term is $a_j b_j$ is $(a_1 \cdots a_n)(b_1 \cdots b_n)$.
6. (Laws of exponents)
   - (i) $a^0 = 1$, $a^1 = a$, and $a^{k+1} = a^k a = a\,a^k$.
   - (ii) $a^{j+k} = a^j a^k$.
   - (iii) $(a^j)^k = a^{jk}$.
   - (iv) $(ab)^k = a^k b^k$.
   - (v) $1^k = 1$. If $k \ge 1$, then $0^k = 0$.
7. (Integral domains) If $R$ is an integral domain, then the product of a sequence $a_1, \dots, a_n$ is $0$ exactly when $a_j = 0$ for some $j \in \{1, \dots, n\}$. In particular, if $a \ne 0$ then $a^k \ne 0$ for every $k$.
8. (Units) For the group $R^{\times}$ of units, if every term of a sequence $a_1, \dots, a_n$ lies in $R^{\times}$, then so does its product, and it equals the product in the group $R^{\times}$ (finite product in a group). In particular, if $a \in R^{\times}$, then $a^k$ of this entry equals the power in the group $R^{\times}$ (power in a group). Accordingly, for a unit $a$ and a negative integer $k$ we also write $a^k$ for the power in the group $R^{\times}$, and $(a^k)^{-1} = (a^{-1})^k = a^{-k}$.
9. (Homomorphisms) If $R'$ is a commutative ring with unity $1'$ and $\varphi : R \to R'$ is a ring homomorphism with $\varphi(1) = 1'$, then $\varphi(a_1 \cdots a_n) = \varphi(a_1) \cdots \varphi(a_n)$ and $\varphi(a^k) = \varphi(a)^k$.
10. (Integers and integers modulo $m$) The rings $\mathbb{Z}$, $\mathbb{Z}_m$ are those of the entry on examples of rings.
    - (i) In the ring $\mathbb{Z}$, the product of a sequence with $n \ge 1$ equals the integer product of the entry on finite products, and for an integer $a$, $a^k$ equals the integer power $a^k$ defined in the entry on prime power divisors.
    - (ii) If $m \ge 2$, then in the ring $\mathbb{Z}_m$, for a sequence of integers $a_1, \dots, a_n$ and an integer $a$, $[a_1] \cdots [a_n] = [a_1 \cdots a_n]$ and $[a]^k = [a^k]$, where the products and powers on the right are the integer ones of (i) (for $n = 0$ the empty product of integers is read as $1$).
11. (Finite geometric sums)
    - (i) If $q$ is an integer $\ge 0$, then
      $$
      \begin{aligned}
      &(a - b) \sum_{k=0}^{q-1} a^k b^{q-1-k} \\
      &\quad = a^q - b^q.
      \end{aligned}
      $$
      In particular, for $b = 1$, $(x - 1) \sum_{k=0}^{q-1} x^k = x^q - 1$.
    - (ii) If $d$, $e$ are integers $\ge 0$ with $d \mid e$, then there is $y \in R$ with $x^e - 1 = (x^d - 1)\,y$.
    - (iii) Consequently, for an integer $c$ and integers $d$, $e \ge 0$ with $d \mid e$, we have $c^d - 1 \mid c^e - 1$ for integer powers.
:::

## 직관

환의 곱셈은 두 원소의 곱만 정해 주므로, 여러 원소의 곱은 군의 유한 곱처럼 "왼쪽부터 하나씩 곱해 나간다"로 정합니다. 다만 환의 곱셈에서는 $0$ 같은 원소가 역원을 갖지 않으므로 곱셈이 군을 이루지 않고, 그래서 군의 유한 곱 항목을 그대로 쓰지 못해 같은 방법으로 새로 정의합니다. 단위원 $1$이 있어야 빈 곱을 정할 수 있으므로 단위원을 갖는 가환환에서만 다룹니다.

빈 곱을 $1$로 정하는 것은 빈 합을 $0$으로 정하는 것과 같은 이유입니다. 길이가 $0$인 곳에서도 (2)와 (3)이 그대로 성립하고, 거듭제곱에서는 $a^0 = 1$이 되어 (6)의 지수법칙이 지수 $0$에서도 예외 없이 맞습니다. $0^0 = 1$도 같은 약속에서 나옵니다. 이 약속 덕분에 $\sum_{k=0}^{n} a_k x^k$ 꼴의 합에서 $k = 0$인 항을 $a_0 x^0 = a_0$으로 읽을 수 있습니다.

(11)의 (i)은 $a^q - b^q$를 $a - b$로 나눈 몫을 적은 것입니다. 왼쪽을 펼치면 이웃한 항들이 서로 지워지고 양 끝의 두 항만 남습니다. (ii)는 이 몫을 $a = x^d$, $b = 1$에 쓴 것이고, (iii)은 그 정수판입니다.

## 증명

:::idea
(2)–(4)는 군의 유한 곱의 증명과 같은 귀납법으로, 군의 성질 가운데 결합법칙과 항등원만 쓴다. (5)–(9)는 끝 번호에 대한 귀납법이고, (11)은 유한 합의 망원 합이다.
:::

:::hint
(5)의 귀납 단계에서는 네 원소의 곱 $(PQ)(ab)$를 $(Pa)(Qb)$로 바꾸어야 하고, 여기서 곱셈의 교환법칙이 쓰인다.
:::

:::hint
(11)의 (i)에서 $t_k = a^k b^{q-k}$ ($0 \le k \le q$)로 두면 왼쪽을 펼친 각 항이 $t_{k+1} - t_k$가 된다.
:::

:::proof
**쓰는 사실.** 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 정수인 꼴)이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓰고, 정수끼리의 계산은 그 진술에서 받아들인 계산 법칙, 정수끼리의 합·차·곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. 환의 계산은 [[ring|환]]의 곱셈의 결합법칙과 분배법칙, 곱셈의 교환법칙, $1$이 곱셈의 항등원이라는 것을 쓴다. "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n)이다.

**정의에 대하여.** 각 $(k, s)$에서 $k + 1 \le n$과 $k + 1 > n$ 가운데 정확히 하나가 성립하므로((Z5)) $q$의 값은 하나로 정해지고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $q$는 함수 $\mathbb{N} \times R \to R$이다.

**2의 증명.** $n = 0$이면 길이 $1$인 열의 곱은 $P(1) = a_1$이고 $1 \cdot a_1 = a_1$이다. $n \ge 1$이라 하고 길이 $n + 1$인 열의 함수를 $P$, 그 처음 $n$개의 열의 함수를 $P'$라 하자. $k + 1 \le n$이면 두 열의 $q$의 값은 둘 다 $s\,a_{k+1}$이다. $1 \le k \le n$에서 $P(k) = P'(k)$임을 $k$에 대한 귀납법으로 보인다. $k = 1$이면 둘 다 $a_1$이고, $k + 1 \le n$이고 $P(k) = P'(k)$이면 $P(k + 1) = P(k)\,a_{k+1} = P'(k)\,a_{k+1} = P'(k + 1)$이다. 따라서 $P(n) = P'(n)$이고, $n + 1 \le n + 1$이므로 $a_1 \cdots a_{n+1} = P(n + 1) = P(n)\,a_{n+1} = (a_1 \cdots a_n)\,a_{n+1}$이다.

**1의 증명.** 빈 곱은 정의에 의해 $1$이고 길이 $1$인 열의 곱은 $P(1) = a_1$이다. (2)에 의해 길이 $2$이면 $a_1 a_2$, 길이 $3$이면 $(a_1 a_2) a_3$이고, 이것은 환의 표기의 $a_1 a_2 a_3$이다.

**3의 증명.** 첫째 열을 고정하고 $n$에 대한 귀납법(시작점 $0$)을 쓴다. $n = 0$이면 이어 붙인 열은 $a$ 자신이고 왼쪽은 $(a_1 \cdots a_m) \cdot 1 = a_1 \cdots a_m$이다. $n$에서 성립하고 $b$가 길이 $n + 1$인 열이면, 이어 붙인 열 $c$의 처음 $m + n$개는 $a$와 $b$의 처음 $n$개를 이어 붙인 열이고 $c_{m+n+1} = b_{n+1}$이다. (2), 귀납 가정, 결합법칙, 다시 (2)에 의해 $c_1 \cdots c_{m+n+1} = \bigl((a_1 \cdots a_m)(b_1 \cdots b_n)\bigr) b_{n+1} = (a_1 \cdots a_m)\bigl((b_1 \cdots b_n) b_{n+1}\bigr) = (a_1 \cdots a_m)(b_1 \cdots b_{n+1})$이다.

**4의 증명.** 길이 $1$인 열 $a_1$과 맨 앞을 뗀 열 $a_2, \dots, a_n$을 이어 붙인 열은 모든 자리에서 $a$와 항이 같으므로 $a$이다. (3)과 (1)에 의해 $a_1 (a_2 \cdots a_n) = a_1 \cdots a_n$이다.

**5의 증명.** $n$에 대한 귀납법(시작점 $0$). $n = 0$이면 양쪽이 $1$과 $1 \cdot 1 = 1$이다. $n$에서 성립한다고 하고 $P = a_1 \cdots a_n$, $Q = b_1 \cdots b_n$이라 하자. 항별 곱의 열의 처음 $n$개는 처음 $n$개끼리의 항별 곱의 열이므로, (2)와 귀납 가정에 의해 그 곱은 $(PQ)(a_{n+1} b_{n+1})$이다. 결합법칙과 교환법칙에 의해 $(PQ)(a_{n+1} b_{n+1}) = P(Q(a_{n+1} b_{n+1})) = P((Q a_{n+1}) b_{n+1}) = P((a_{n+1} Q) b_{n+1}) = (P a_{n+1})(Q b_{n+1})$이고, (2)에 의해 이것은 $(a_1 \cdots a_{n+1})(b_1 \cdots b_{n+1})$이다.

**6의 증명.** (i) $a^0 = 1$은 정의이고 $a^1 = a$는 (1)이다. 모든 항이 $a$인 길이 $k + 1$인 열의 처음 $k$개도 모든 항이 $a$이므로 (2)에 의해 $a^{k+1} = a^k a$이고, 교환법칙에 의해 $a\,a^k$와 같다. (ii) 모든 항이 $a$인 길이 $j$, $k$인 두 열을 이어 붙이면 모든 항이 $a$인 길이 $j + k$인 열이므로 (3)에 의해 성립한다. (iii) $k$에 대한 귀납법. $k = 0$이면 $(a^j)^0 = 1 = a^0 = a^{j \cdot 0}$이다. $k$에서 성립하면 (i), 귀납 가정, (ii)에 의해 $(a^j)^{k+1} = (a^j)^k a^j = a^{jk} a^j = a^{jk + j} = a^{j(k+1)}$이다. (iv) 모든 항이 $a$인 열과 모든 항이 $b$인 길이 $k$인 열의 항별 곱의 열은 모든 항이 $ab$이므로 (5)에 의해 성립한다. (v) $1^0 = 1$이고 $1^{k+1} = 1^k \cdot 1 = 1$이므로 귀납법에 의해 $1^k = 1$이다. $0^1 = 0$이고 $0^{k+1} = 0^k \cdot 0 = 0$([[ring-basic-properties|환의 기본 성질]]의 (1))이므로 $k \ge 1$에서 $0^k = 0$이다.

**7의 증명.** $n$에 대한 귀납법(시작점 $0$). $n = 0$이면 곱은 $1 \ne 0$이고 항이 없으므로 두 조건이 모두 거짓이다. $n$에서 성립한다고 하자. (2)에 의해 길이 $n + 1$인 열의 곱은 $P\,a_{n+1}$이다($P$는 처음 $n$개의 곱). [[integral-domain|정역]]의 정의에 의해 $P\,a_{n+1} = 0$이면 $P = 0$이거나 $a_{n+1} = 0$이고, 환의 기본 성질의 (1)에 의해 그 역도 성립한다. 귀납 가정에 의해 $P = 0$인 것은 정확히 어떤 $j \le n$에서 $a_j = 0$일 때이므로 결론이 나온다. 모든 항이 $a \ne 0$인 열에 쓰면 $a^k \ne 0$이다.

**8의 증명.** [[field|체]]의 (1)에 의해 $R^{\times}$는 곱셈을 제한한 연산으로 군이고 항등원은 $1$이다. 모든 항이 $R^{\times}$에 속하는 열에 대하여, 이 항목의 곱을 $P_n$, 군 $R^{\times}$에서의 곱을 $G_n$(처음 $n$개의 곱)이라 하고 $n$에 대한 귀납법으로 $P_n = G_n$을 보인다. $n = 0$이면 둘 다 $1$이다. $P_n = G_n \in R^{\times}$이면, 이 항목의 (2)와 [[finite-product-in-a-group|군의 유한 곱]]의 (2)에 의해 $P_{n+1} = P_n a_{n+1}$이고 $G_{n+1}$은 군에서 $G_n$과 $a_{n+1}$을 곱한 것, 곧 같은 원소 $P_n a_{n+1}$이다. 거듭제곱은 모든 항이 $a$인 열에 이것과 군의 유한 곱의 (6)을 쓴 것이다. 체의 (1)에 의해 군 $R^{\times}$에서 $a$의 역원은 $a^{-1}$이므로 마지막 등식은 [[laws-of-exponents|지수법칙]]의 (3)이다.

**9의 증명.** $n$에 대한 귀납법. $n = 0$이면 $\varphi(1) = 1'$은 $R'$의 빈 곱이다. $n$에서 성립하면, $j$번째 항이 $\varphi(a_j)$인 길이 $n + 1$인 열의 처음 $n$개는 처음 $n$개에서 같은 방법으로 만든 열이므로, (2), [[ring-homomorphism|환 준동형]]의 정의, 귀납 가정, $R'$에서의 (2)에 의해 $\varphi(a_1 \cdots a_{n+1}) = \varphi(a_1 \cdots a_n)\varphi(a_{n+1}) = \varphi(a_1) \cdots \varphi(a_{n+1})$이다. 거듭제곱은 모든 항이 $a$인 열에 쓴 것이다.

**10의 증명.** (i) [[ring-examples|환의 예]]의 (1)에 의해 환 $\mathbb{Z}$의 곱은 정수의 곱이다. [[finite-product|유한 곱]]의 정의는 길이 $1$인 열의 곱이 $a_1$이고 길이 $n + 1$인 열의 곱이 처음 $n$개의 곱과 $a_{n+1}$의 곱이라는 것이고, 이 항목의 곱도 (1), (2)에 의해 같은 식을 만족한다. 따라서 $n \ge 1$에 대한 귀납법으로 두 곱이 같다. [[prime-power-divisors|소수의 거듭제곱인 약수]]의 진술에서 $k \ge 1$이면 $a^k$는 [[congruence-arithmetic|합동의 계산]]의 거듭제곱, 곧 모든 자리가 $a$인 열의 유한 곱이고, $a^0 = 1$이다. 따라서 두 거듭제곱은 $k = 0$에서 둘 다 $1$이고 $k \ge 1$에서 앞 문장에 의해 같다. (ii) $m \ge 2$이면 환의 예의 (3)에 의해 $\mathbb{Z}_m$은 단위원 $[1]$을 갖는 가환환이다. 각 정수 $n$에 $[n]$을 대응시키는 함수는 환 준동형의 (7)의 (i)에 의해 환 준동형이고 $1$을 $[1]$로 보낸다. (9)와 (i)에 의해 결론이 나온다.

**11의 증명.** (i) $q = 0$이면 왼쪽은 빈 합에 $a - b$를 곱한 것이므로 합의 (9)와 (6)의 (iv)에 의해 $0$이고, 오른쪽은 $1 - 1 = 0$이다. $q \ge 1$이라 하고 $0 \le k \le q$에서 $t_k = a^k b^{q-k}$로 둔다. $0 \le k \le q - 1$이면 (6)의 (i), (ii)와 교환법칙, 결합법칙에 의해 $a \cdot a^k b^{q-1-k} = a^{k+1} b^{q-(k+1)} = t_{k+1}$이고 $b \cdot a^k b^{q-1-k} = a^k b^{q-k} = t_k$이다. 따라서 [[ring-basic-properties|환의 기본 성질]]의 (4)(뺄셈의 분배)에 의해 $(a - b)(a^k b^{q-1-k}) = t_{k+1} - t_k$이다. 합의 (9), (3), (6)의 (vi)에 의해
$$
\begin{aligned}
&(a - b) \sum_{k=0}^{q-1} a^k b^{q-1-k} \\
&\quad = \sum_{k=0}^{q-1} (t_{k+1} - t_k) \\
&\quad = t_q - t_0 = a^q - b^q
\end{aligned}
$$
이다. 마지막에 $b^0 = 1$, $a^0 = 1$((6)의 (i))을 썼다. $b = 1$이면 (6)의 (v)에 의해 $1^{q-1-k} = 1$, $1^q = 1$이다.

(ii) $d \mid e$이므로 $e = dc$인 정수 $c$가 있다([[divisibility|나누어떨어짐]]). $d = 0$이면 $e = 0$이고 $x^0 - 1 = 0 = (x^0 - 1) \cdot 0$이다. $d \ge 1$이면 $c \ge 0$이다. $c < 0$이면 $-c$는 양의 정수이고 [[prime-number]]의 (Z1), (Z3)에 의해 $d(-c) \ge 1 \cdot (-c) \ge 1$이므로 $e = -(d(-c)) \le -1 < 0$이 되어 $e \ge 0$과 어긋나기 때문이다((Z5)–(Z7)). (6)의 (iii)에 의해 $x^e = (x^d)^c$이고, (i)을 $a = x^d$, $b = 1$, $q = c$에 쓰면 $x^e - 1 = (x^d)^c - 1^c = (x^d - 1)\,y$이다. 여기서 $y = \sum_{k=0}^{c-1} (x^d)^k \cdot 1^{c-1-k}$이다.

(iii) (ii)를 환 $\mathbb{Z}$와 $x = c$에 쓰면 $c^e - 1 = (c^d - 1)\,y$인 정수 $y$가 있다. (10)의 (i)에 의해 이 거듭제곱은 정수의 거듭제곱이므로 나누어떨어짐의 정의에 의해 $c^d - 1 \mid c^e - 1$이다.
:::

## 예시와 반례

:::example[법 9의 정수에서 거듭제곱]
$\mathbb{Z}_9$에서 $[2]^k$를 (6)의 (i)로 차례로 구하면 $[1]$, $[2]$, $[4]$, $[8]$, $[16] = [7]$, $[14] = [5]$, $[10] = [1]$입니다($k = 0, \dots, 6$). (10)의 (ii)에 의해 이것은 정수 $2^6 = 64$를 9로 나눈 나머지가 $1$이라는 것과 같습니다($64 = 9 \cdot 7 + 1$). (6)의 (ii), (iii)에 의해 $[2]^{12} = ([2]^6)^2 = [1]^2 = [1]$입니다.
:::

:::counterexample[정역이 아니면 0 이 아닌 원소의 거듭제곱이 0 일 수 있다]
$\mathbb{Z}_8$은 정역이 아니고([[integral-domain|정역]]의 (3)), $[2] \ne [0]$이지만 $[2]^3 = [8] = [0]$입니다((10)의 (ii)). 그래서 (7)의 "곱이 $0$이면 어떤 항이 $0$"은 정역이라는 가정 없이는 성립하지 않을 수 있습니다.
:::

:::example[유한 등비합으로 본 인수분해]
환 $\mathbb{Z}$에서 (11)의 (i)을 $a = 3$, $b = 1$, $q = 4$에 쓰면 $(3 - 1)(1 + 3 + 9 + 27) = 2 \cdot 40 = 80 = 81 - 1$입니다. (11)의 (iii)을 $c = 3$, $d = 2$, $e = 4$에 쓰면 $3^2 - 1 = 8$이 $3^4 - 1 = 80$을 나눕니다($80 = 8 \cdot 10$).
:::

## 확인 질문

:::check[가환환 $R$의 두 원소 $a$, $b$에 대하여 $a^2 - b^2$를 (11)의 (i)로 인수분해하면?]
$q = 2$이면 합은 $a^0 b^1 + a^1 b^0 = b + a$이므로 $a^2 - b^2 = (a - b)(a + b)$입니다. 교환법칙이 쓰였습니다.
:::

:::check[$R$이 정역이고 $a \ne 0$이면 $a^0$은 무엇인가? $a = 0$이면?]
둘 다 $1$입니다. $a^0$은 빈 곱이므로 $a$와 상관없이 $1$이고, 그래서 $0^0 = 1$입니다. (7)의 "$a^k \ne 0$"은 $k = 0$에서도 맞습니다.
:::
