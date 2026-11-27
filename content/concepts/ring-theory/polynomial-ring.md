---
title: 다항식환
title_en: Polynomial Ring
aliases: [다항식, 부정원, 계수, 상수 다항식, 영다항식, 나누어떨어짐, polynomial, indeterminate, coefficient, constant polynomial, zero polynomial, polynomial ring, divides]
kind: definition
field: ring-theory
msc: ["13"]
level: undergrad
summary: 단위원을 갖는 가환환 R 위의 다항식을 0 이상인 정수에서 R 로의 함수로서 유한 개의 번호 밖에서 0 인 것으로 정의하고, 계수별 합과 합성곱으로 R[X] 가 단위원을 갖는 가환환임을 보인다. 계수를 취하는 사상, 상수 다항식과 읽는 약속, 부정원 X 와 그 거듭제곱의 계수, 계수로 쓴 꼴과 그 유일성, 가환환의 나누어떨어짐, 부분환 위의 다항식환을 다룬다.
requires: [set, subset, function, cartesian-product, power-set, binary-operation, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, integers-modulo-n, group, group-homomorphism, subgroup, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, finite-sums-in-a-ring, rearranging-finite-sums-in-a-ring, finite-products-in-a-commutative-ring]
sources:
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings, 다항식·계수·합·곱의 정의 (p.209–210), Example 17.1, 17.2 (p.210–211), Theorem 17.3 (p.211); 17.5절 Exercises, 연습문제 22, 23 (p.221), 28 (p.222); 18.2절 Factorization in Integral Domains, 나누어떨어짐의 정의 (p.228); 17.3절 Irreducible Polynomials, Theorem 17.14 (p.216)"
    checked: original
    note: "출처는 다항식을 'expression of the form f(x) = Σ_{i=0}^n a_i x^i … where a_i ∈ R and a_n ≠ 0' 이라는 식으로 정의하고(p.209), 계수가 모두 같을 때 두 다항식이 같다고 하며, 합은 계수별로, 곱은 c_i = Σ_{k=0}^i a_k b_{i−k} 로 정한다(p.210). 이 항목은 다항식을 0 이상인 정수에서 R 로의 함수로서 어떤 번호 너머의 값이 모두 0 인 것으로 정의했다. 합과 곱의 계수의 식은 출처와 같다. Theorem 17.3(p.211, R[x] 는 단위원을 갖는 가환환)에서 출처는 덧셈군을 'easily verified' 로, 곱셈의 결합법칙을 삼중 합의 계산으로 보이고, 교환법칙과 분배법칙은 연습문제 22, 23(p.221)으로 돌린다. 이 항목의 (1)은 그 넷을 모두 증명하며, 결합법칙은 출처의 삼중 합 대신 환의 유한 합의 삼각형 이중 합과 첨자 옮기기로 보인다. 곱셈의 항등원이 상수 다항식 1 이라는 것은 이 항목이 증명한다. 출처의 부정원은 소문자 x 이고(p.209 'indeterminate x') 이 항목은 대문자 X 를 쓴다. X 를 계수가 하나만 1 인 다항식으로 정하고 (4)(5)에서 다항식이 계수와 X 의 거듭제곱의 합으로 쓰인다는 것을 증명한 것, 계수를 coef_n(f) 로 쓰는 것, 상수 다항식을 κ(c) 로 쓰고 (3)의 읽는 약속을 둔 것은 이 사이트의 선택이다. (3)의 'κ 는 단사인 환 준동형' 은 출처 연습문제 28(p.222, R[x] 는 R 과 동형인 부분환을 갖는다)과 같은 내용이다. (6)의 나누어떨어짐은 출처 18.2절(p.228)이 단위원을 갖는 가환환에서 'a divides b … if there exists c ∈ R such that b = ac' 로 정하는 것과 같다. (7)의 부분환 위의 다항식환은 출처가 명제로 두지 않고, 출처 Theorem 17.14(p.216)가 Z[x] 의 다항식이 Q[x] 에서 인수분해된다고 하는 것처럼 진술과 증명 안에서 말없이 쓴다. 예시 '정수 계수의 두 다항식의 곱'은 출처 Example 17.1(p.210)과 같은 종류의 계산이다(다항식은 다르다). 반례 '정역이 아닌 계수환에서는 곱이 0 일 수 있다'는 출처 Example 17.2(p.210–211)의 Z_12[x] 의 계산과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 가환환([[ring|환]]의 뜻)이라 하자. $0$, $1$, $-a$, $a - b$, 곱 $ab$, 정수배 $n \cdot a$는 [[ring|환]]의 표기이고, 합의 기호 $\sum_{k=m}^{n}$과 빈 합은 [[finite-sums-in-a-ring|환의 유한 합]]의 것, 거듭제곱 $a^k$와 빈 곱은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**다항식.** $0$ 이상인 정수 전체의 집합 $\{n \in \mathbb{Z} : 0 \le n\}$에서 $R$로의 [[function|함수]] $f$가 **$R$ 위의 다항식**(polynomial over $R$)인 것은 정확히 어떤 $0$ 이상인 정수 $N$이 있어 $n > N$인 모든 정수 $n$에서 $f$의 $n$에서의 값이 $0$일 때이다. $f$의 $n$에서의 값을 $f$의 **$n$차 계수**(coefficient of degree $n$)라 하고 $\operatorname{coef}_n(f)$로 쓴다. 계수를 $f(n)$으로 쓰지 않는다. $R$ 위의 다항식 전체의 집합을 $R[X]$로 쓰고 $R$ 위의 **다항식환**(polynomial ring)이라 한다. $R[X]$는 [[power-set|멱집합]] $\mathscr{P}(\{n \in \mathbb{Z} : 0 \le n\} \times R)$의 부분집합이다([[cartesian-product|곱집합]]). 함수의 같음에 의해, 두 다항식 $f$, $g$가 같은 것은 정확히 $0$ 이상인 모든 정수 $n$에서 $\operatorname{coef}_n(f) = \operatorname{coef}_n(g)$일 때이다. 모든 계수가 $0$인 다항식을 **영다항식**(zero polynomial)이라 한다.

**합과 곱.** $f, g \in R[X]$에 대하여 $f + g$와 $fg$는 $0$ 이상인 모든 정수 $n$에서
$$
\begin{aligned}
&\operatorname{coef}_n(f + g) = \operatorname{coef}_n(f) + \operatorname{coef}_n(g), \\
&\operatorname{coef}_n(fg) \\
&\quad = \sum_{k=0}^{n} \operatorname{coef}_k(f) \operatorname{coef}_{n-k}(g)
\end{aligned}
$$
인 다항식이다(아래 증명에서 이 둘이 $R[X]$의 원소임을 보인다).

다음이 성립한다. 아래에서 $f$, $g$, $h$는 $R[X]$의 원소이고 $n$, $j$, $k$는 $0$ 이상인 정수이다.

1. (가환환) $(R[X], +, \cdot)$는 단위원을 갖는 가환환이다. 그 $0$은 영다항식이고, $f$의 덧셈의 역원 $-f$는 모든 $n$에서 $\operatorname{coef}_n(-f) = -\operatorname{coef}_n(f)$인 다항식이며, 단위원은 아래 (3)의 상수 다항식 $\kappa(1)$이다. 이후 $R[X]$에는 [[ring|환]]의 표기를 쓰고, 유한 합과 유한 곱, 거듭제곱은 환 $R[X]$에서의 것이다.
2. (계수를 취하는 사상) $n$마다 $f$에 $\operatorname{coef}_n(f)$를 대응시키는 함수 $\operatorname{coef}_n : R[X] \to R$은 덧셈군 $(R[X], +)$에서 $(R, +)$로의 [[group-homomorphism|군 준동형]]이다. 따라서 $\operatorname{coef}_n(-f) = -\operatorname{coef}_n(f)$, $\operatorname{coef}_n(f - g) = \operatorname{coef}_n(f) - \operatorname{coef}_n(g)$이고, $m - 1 \le l$인 정수 $m$, $l$과 $m \le i \le l$에서 정해진 $g_i \in R[X]$에 대하여 $\operatorname{coef}_n\bigl(\sum_{i=m}^{l} g_i\bigr) = \sum_{i=m}^{l} \operatorname{coef}_n(g_i)$이다.
3. (상수 다항식과 읽는 약속) $c \in R$에 대하여 $\operatorname{coef}_0 = c$이고 $n \ge 1$이면 $\operatorname{coef}_n = 0$인 다항식을 $\kappa(c)$로 쓰고 **상수 다항식**(constant polynomial)이라 한다.
   - (i) 함수 $\kappa : R \to R[X]$는 단사인 [[ring-homomorphism|환 준동형]]이고 $\kappa(1)$은 $R[X]$의 단위원, $\kappa(0)$은 영다항식이다.
   - (ii) $f$가 상수 다항식인 것, 곧 어떤 $c \in R$에서 $f = \kappa(c)$인 것은 정확히 모든 $n \ge 1$에서 $\operatorname{coef}_n(f) = 0$일 때이고, 이때 $f = \kappa(\operatorname{coef}_0(f))$이다.
   - (iii) (상수배) $c \in R$이면 모든 $n$에서 $\operatorname{coef}_n(\kappa(c) f) = c \operatorname{coef}_n(f)$이다.
   - (iv) (읽는 약속) 이후 $R[X]$의 원소가 와야 할 자리에 $R$의 원소 $c$를 쓰면 그것은 $\kappa(c)$를 뜻한다. 예컨대 $c f$는 $\kappa(c) f$, $X - c$는 $X - \kappa(c)$, $f = c$는 $f = \kappa(c)$를 뜻하고, $R[X]$의 $0$과 $1$은 $\kappa(0)$, $\kappa(1)$이다. $R$의 원소끼리의 합, 차, 곱이 이런 자리에 오면 $R$에서 계산한 뒤 $\kappa$로 옮긴 것으로 읽어도 되고, 각 원소를 $\kappa$로 옮긴 뒤 $R[X]$에서 계산한 것으로 읽어도 된다. (i)에 의해 두 값은 같다. $R \subseteq R[X]$라고 쓰지 않고, $c$와 $\kappa(c)$를 같은 것이라 하지 않는다.
4. (부정원) $\operatorname{coef}_1 = 1$이고 $n \ne 1$이면 $\operatorname{coef}_n = 0$인 다항식을 $X$로 쓰고 **부정원**(indeterminate)이라 한다. $X^j$는 환 $R[X]$에서의 거듭제곱이다.
   - (i) $n \ge 1$이면 $\operatorname{coef}_n(X f) = \operatorname{coef}_{n-1}(f)$이고, $\operatorname{coef}_0(X f) = 0$이다.
   - (ii) $n \ge j$이면 $\operatorname{coef}_n(X^j f) = \operatorname{coef}_{n-j}(f)$이고, $n < j$이면 $\operatorname{coef}_n(X^j f) = 0$이다.
   - (iii) $\operatorname{coef}_j(X^j) = 1$이고 $n \ne j$이면 $\operatorname{coef}_n(X^j) = 0$이다. 특히 $X^0 = 1$, $X^1 = X$이다.
5. (계수로 쓴 꼴) $N$이 $0$ 이상인 정수이다.
   - (i) $0 \le k \le N$에서 $a_k \in R$이 정해져 있으면, 다항식 $u = \sum_{k=0}^{N} a_k X^k$는 $0 \le n \le N$에서 $\operatorname{coef}_n(u) = a_n$이고 $n > N$에서 $\operatorname{coef}_n(u) = 0$이다. 이 다항식을 $a_0 + a_1 X + \cdots + a_N X^N$으로도 쓴다.
   - (ii) $n > N$인 모든 $n$에서 $\operatorname{coef}_n(f) = 0$이면 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, X^k$이다.
   - (iii) (계수의 유일성) $0 \le k \le N$에서 정해진 $a_k$, $b_k \in R$에 대하여 $\sum_{k=0}^{N} a_k X^k = \sum_{k=0}^{N} b_k X^k$인 것은 정확히 모든 $k$에서 $a_k = b_k$일 때이다.
6. (나누어떨어짐) $A$가 단위원을 갖는 가환환이고 $a, b \in A$라 하자. $b = ac$인 $c \in A$가 있을 때, 그리고 그때에만 "$A$에서 $a$가 $b$를 **나눈다**(divides)"고 하고 $a \mid b$로 쓴다. 나누지 않으면 $a \nmid b$로 쓴다. 환 $\mathbb{Z}$([[ring-examples|환의 예]]의 (1))에서 이것은 [[divisibility|나누어떨어짐]]의 $a \mid b$와 같다. $a, b, d \in A$에 대하여 다음이 성립한다.
   - (i) $a \mid 0$, $a \mid a$, $1 \mid a$이다.
   - (ii) $a \mid b$이고 $b \mid d$이면 $a \mid d$이다.
   - (iii) $a \mid b$이면 모든 $e \in A$에서 $a \mid be$이다. $a \mid b$이고 $a \mid d$이면 $a \mid b + d$이고 $a \mid b - d$이다.
   
   이 정의를 $A = R[X]$에 쓴 것을 "$R[X]$에서 $g \mid f$"라고 쓴다.
7. (부분환 위의 다항식) $R_0$이 $1 \in R_0$인 $R$의 [[subring|부분환]]이라 하자. 그러면 $R_0$은 단위원 $1$을 갖는 가환환이고 다음이 성립한다.
   - (i) $R_0[X] \subseteq R[X]$이고, $R_0[X]$의 원소의 계수는 $R[X]$의 원소로 본 계수와 같다. 거꾸로 $f \in R[X]$의 모든 계수가 $R_0$에 속하면 $f \in R_0[X]$이다.
   - (ii) $R_0[X]$는 환 $R[X]$의 부분환이고 $1 \in R_0[X]$이다. $R_0[X]$의 원소의 합, 차, 곱, 덧셈의 역원과 거듭제곱은 $R_0[X]$에서 계산한 것과 $R[X]$에서 계산한 것이 같다. $c \in R_0$이면 $R_0[X]$의 상수 다항식 $\kappa(c)$와 $R[X]$의 $\kappa(c)$는 같은 다항식이고, 두 환의 부정원 $X$도 같은 다항식이다.
   - (iii) $f, g \in R_0[X]$이고 $R_0[X]$에서 $g \mid f$이면 $R[X]$에서 $g \mid f$이다.
:::

:::english
Let $R$ be a commutative ring with unity $1$ (in the sense of rings). The notations $0$, $1$, $-a$, $a - b$, the product $ab$ and the integer multiple $n \cdot a$ are those for rings; the summation sign $\sum_{k=m}^{n}$ and the empty sum are those of finite sums in a ring, and the power $a^k$ and the empty product are those of finite products and powers in a commutative ring.

**Polynomials.** A function $f$ from the set $\{n \in \mathbb{Z} : 0 \le n\}$ of all nonnegative integers to $R$ is a **polynomial over $R$** if and only if there is a nonnegative integer $N$ such that the value of $f$ at $n$ is $0$ for every integer $n > N$. The value of $f$ at $n$ is called the **coefficient of degree $n$** of $f$ and is written $\operatorname{coef}_n(f)$; we do not write it as $f(n)$. The set of all polynomials over $R$ is written $R[X]$ and called the **polynomial ring** over $R$. $R[X]$ is a subset of the power set $\mathscr{P}(\{n \in \mathbb{Z} : 0 \le n\} \times R)$. By equality of functions, two polynomials $f$, $g$ are equal if and only if $\operatorname{coef}_n(f) = \operatorname{coef}_n(g)$ for every nonnegative integer $n$. The polynomial all of whose coefficients are $0$ is called the **zero polynomial**.

**Sum and product.** For $f, g \in R[X]$, $f + g$ and $fg$ are the polynomials with
$$
\begin{aligned}
&\operatorname{coef}_n(f + g) = \operatorname{coef}_n(f) + \operatorname{coef}_n(g), \\
&\operatorname{coef}_n(fg) \\
&\quad = \sum_{k=0}^{n} \operatorname{coef}_k(f) \operatorname{coef}_{n-k}(g)
\end{aligned}
$$
for every nonnegative integer $n$ (the proof below shows that these are elements of $R[X]$).

The following hold. Below, $f$, $g$, $h$ are elements of $R[X]$ and $n$, $j$, $k$ are nonnegative integers.

1. (Commutative ring) $(R[X], +, \cdot)$ is a commutative ring with unity. Its $0$ is the zero polynomial, the additive inverse $-f$ of $f$ is the polynomial with $\operatorname{coef}_n(-f) = -\operatorname{coef}_n(f)$ for all $n$, and the unity is the constant polynomial $\kappa(1)$ of (3) below. From now on the notation for rings is used in $R[X]$, and finite sums, finite products and powers are those in the ring $R[X]$.
2. (Taking a coefficient) For each $n$, the function $\operatorname{coef}_n : R[X] \to R$ sending $f$ to $\operatorname{coef}_n(f)$ is a group homomorphism from the additive group $(R[X], +)$ to $(R, +)$. Hence $\operatorname{coef}_n(-f) = -\operatorname{coef}_n(f)$, $\operatorname{coef}_n(f - g) = \operatorname{coef}_n(f) - \operatorname{coef}_n(g)$, and for integers $m$, $l$ with $m - 1 \le l$ and elements $g_i \in R[X]$ given for $m \le i \le l$, $\operatorname{coef}_n\bigl(\sum_{i=m}^{l} g_i\bigr) = \sum_{i=m}^{l} \operatorname{coef}_n(g_i)$.
3. (Constant polynomials and a reading convention) For $c \in R$, the polynomial with $\operatorname{coef}_0 = c$ and $\operatorname{coef}_n = 0$ for $n \ge 1$ is written $\kappa(c)$ and called a **constant polynomial**.
   - (i) The function $\kappa : R \to R[X]$ is an injective ring homomorphism; $\kappa(1)$ is the unity of $R[X]$ and $\kappa(0)$ is the zero polynomial.
   - (ii) $f$ is a constant polynomial, that is, $f = \kappa(c)$ for some $c \in R$, if and only if $\operatorname{coef}_n(f) = 0$ for every $n \ge 1$; in that case $f = \kappa(\operatorname{coef}_0(f))$.
   - (iii) (Constant multiples) If $c \in R$, then $\operatorname{coef}_n(\kappa(c) f) = c \operatorname{coef}_n(f)$ for every $n$.
   - (iv) (Reading convention) From now on, when an element $c$ of $R$ is written where an element of $R[X]$ is expected, it means $\kappa(c)$. For example, $c f$ means $\kappa(c) f$, $X - c$ means $X - \kappa(c)$, $f = c$ means $f = \kappa(c)$, and the $0$ and $1$ of $R[X]$ are $\kappa(0)$ and $\kappa(1)$. When a sum, difference or product of elements of $R$ appears in such a place, it may be read as computed in $R$ and then carried over by $\kappa$, or as computed in $R[X]$ after carrying each element over by $\kappa$; by (i) the two values are equal. We do not write $R \subseteq R[X]$, and we do not say that $c$ and $\kappa(c)$ are the same.
4. (The indeterminate) The polynomial with $\operatorname{coef}_1 = 1$ and $\operatorname{coef}_n = 0$ for $n \ne 1$ is written $X$ and called the **indeterminate**. $X^j$ is the power in the ring $R[X]$.
   - (i) If $n \ge 1$, then $\operatorname{coef}_n(X f) = \operatorname{coef}_{n-1}(f)$, and $\operatorname{coef}_0(X f) = 0$.
   - (ii) If $n \ge j$, then $\operatorname{coef}_n(X^j f) = \operatorname{coef}_{n-j}(f)$, and if $n < j$, then $\operatorname{coef}_n(X^j f) = 0$.
   - (iii) $\operatorname{coef}_j(X^j) = 1$, and $\operatorname{coef}_n(X^j) = 0$ for $n \ne j$. In particular $X^0 = 1$ and $X^1 = X$.
5. (Writing a polynomial by its coefficients) Let $N$ be a nonnegative integer.
   - (i) If $a_k \in R$ is given for $0 \le k \le N$, then the polynomial $u = \sum_{k=0}^{N} a_k X^k$ has $\operatorname{coef}_n(u) = a_n$ for $0 \le n \le N$ and $\operatorname{coef}_n(u) = 0$ for $n > N$. This polynomial is also written $a_0 + a_1 X + \cdots + a_N X^N$.
   - (ii) If $\operatorname{coef}_n(f) = 0$ for all $n > N$, then $f = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, X^k$.
   - (iii) (Uniqueness of coefficients) For $a_k$, $b_k \in R$ given for $0 \le k \le N$, $\sum_{k=0}^{N} a_k X^k = \sum_{k=0}^{N} b_k X^k$ if and only if $a_k = b_k$ for every $k$.
6. (Divisibility) Let $A$ be a commutative ring with unity and $a, b \in A$. We say that "$a$ **divides** $b$ in $A$" and write $a \mid b$ if and only if there is $c \in A$ with $b = ac$; otherwise we write $a \nmid b$. In the ring $\mathbb{Z}$ (item (1) of the examples of rings) this is the same as $a \mid b$ of divisibility. For $a, b, d \in A$ the following hold.
   - (i) $a \mid 0$, $a \mid a$ and $1 \mid a$.
   - (ii) If $a \mid b$ and $b \mid d$, then $a \mid d$.
   - (iii) If $a \mid b$, then $a \mid be$ for every $e \in A$. If $a \mid b$ and $a \mid d$, then $a \mid b + d$ and $a \mid b - d$.
   
   This definition applied to $A = R[X]$ is written "$g \mid f$ in $R[X]$".
7. (Polynomials over a subring) Let $R_0$ be a subring of $R$ with $1 \in R_0$. Then $R_0$ is a commutative ring with unity $1$, and the following hold.
   - (i) $R_0[X] \subseteq R[X]$, and the coefficients of an element of $R_0[X]$ are the same as its coefficients as an element of $R[X]$. Conversely, if all coefficients of $f \in R[X]$ lie in $R_0$, then $f \in R_0[X]$.
   - (ii) $R_0[X]$ is a subring of the ring $R[X]$ and $1 \in R_0[X]$. Sums, differences, products, additive inverses and powers of elements of $R_0[X]$ are the same whether computed in $R_0[X]$ or in $R[X]$. For $c \in R_0$ the constant polynomial $\kappa(c)$ of $R_0[X]$ is the same polynomial as $\kappa(c)$ of $R[X]$, and the indeterminates $X$ of the two rings are the same polynomial.
   - (iii) If $f, g \in R_0[X]$ and $g \mid f$ in $R_0[X]$, then $g \mid f$ in $R[X]$.
:::

## 직관

다항식 $3 + 2X - X^3$을 정하는 것은 계수 $3, 2, 0, -1, 0, 0, \dots$입니다. 그래서 이 항목은 다항식을 "계수를 차례로 늘어놓은 것", 곧 $0, 1, 2, \dots$번째 자리에 $R$의 원소를 하나씩 놓되 어느 자리부터는 모두 $0$인 것으로 정의합니다. 장부의 칸에 비유하면, 칸마다 수가 하나씩 적혀 있고 어느 칸부터는 모두 비어 있는 장부가 다항식이고, $X$는 둘째 칸(번호 $1$)에만 $1$이 적힌 장부입니다. 덧셈은 칸끼리 더하는 것이고, 곱셈은 손으로 다항식을 곱할 때 $X^n$의 계수를 모으는 식 $\sum_{k} a_k b_{n-k}$를 그대로 정의로 삼은 것입니다.

이렇게 정의한 다항식은 함수 "$x$에 값을 넣어 얻는 것"이 아닙니다. 계수가 다르면 넣어 얻는 값이 모두 같아도 다른 다항식입니다. 예컨대 $\mathbb{Z}_3$ 위에서 $X^3$과 $X$는 계수가 다르므로 다른 다항식이지만, $\mathbb{Z}_3$의 세 원소에 넣으면 같은 값이 나옵니다($[0]^3 = [0]$, $[1]^3 = [1]$, $[2]^3 = [8] = [2]$). 선형대수 2 강의의 [[polynomial-function|다항함수]]는 실수에서 실수로의 함수이고, 이 항목의 다항식과는 다른 대상입니다.

상수 다항식 $\kappa(c)$는 첫 칸에만 $c$가 적힌 장부입니다. $\kappa$가 단사인 환 준동형이므로 $\kappa(c)$를 그냥 $c$로 써도 계산이 어긋나지 않고, (3)의 읽는 약속은 이것을 허락합니다. 그래도 $c$ 자체는 $R$의 원소이고 $\kappa(c)$는 함수이므로 두 대상은 다릅니다. 복소수 강의에서 실수 $x$를 복소수 $\iota(x)$로 읽은 것과 같은 방식입니다.

## 증명

:::idea
합과 곱이 다시 다항식이라는 것은 "어느 번호 너머의 계수가 모두 $0$"이라는 조건을 두 번호의 합으로 확인한다. 환의 공리는 계수마다 확인하며, 곱의 결합법칙은 삼각형 이중 합의 순서 바꾸기, 교환법칙은 합의 뒤집기로 보인다. $X^j$의 계수는 $X$를 곱하면 계수가 한 칸씩 밀린다는 것을 귀납으로 되풀이해 얻는다.
:::

:::hint
$n > N_1 + N_2$이고 $0 \le k \le n$이면 $k > N_1$이거나 $n - k > N_2$입니다.
:::

:::hint
$((fg)h)$의 $n$차 계수는 $0 \le j \le l \le n$인 쌍마다 정해진 $a_j b_{l-j} c_{n-l}$을 먼저 $j$로, 다음에 $l$로 더한 것입니다. 더하는 순서를 바꾼 뒤 $l = j + k$로 첨자를 옮깁니다.
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 정수인 꼴)이다. "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n), "재배열의 (n)"은 [[rearranging-finite-sums-in-a-ring|유한 합의 재배열과 이중 합]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "기본 성질의 (n)"은 [[ring-basic-properties|환의 기본 성질]]의 (n)이다. 아래에서 $a_k = \operatorname{coef}_k(f)$, $b_k = \operatorname{coef}_k(g)$, $c_k = \operatorname{coef}_k(h)$로 쓴다.

**합과 곱이 다항식이다.** $n$마다 $a_n + b_n$과 $\sum_{k=0}^{n} a_k b_{n-k}$는 식으로 정해진 $R$의 원소이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이 값들을 갖는 함수 $\{n \in \mathbb{Z} : 0 \le n\} \to R$가 있다. 이 함수는 곱집합의 부분집합이다. $n > N_1$이면 $a_n = 0$이고 $n > N_2$이면 $b_n = 0$인 $0$ 이상인 정수 $N_1$, $N_2$를 잡자. $N_2 \ge 0$이므로 $N_1 \le N_1 + N_2$이고 마찬가지로 $N_2 \le N_1 + N_2$이다((Z7)). $n > N_1 + N_2$이면 $n > N_1$이고 $n > N_2$이므로((Z6)) $a_n + b_n = 0 + 0 = 0$이다. 또 $0 \le k \le n$이면, $k \le N_1$일 때 $n - k \ge n - N_1 > N_2$이므로 $b_{n-k} = 0$이고, $k > N_1$일 때 $a_k = 0$이다((Z5)–(Z7)). 어느 경우든 기본 성질의 (1)에 의해 $a_k b_{n-k} = 0$이므로 합의 (3)과 (6)의 (iv)에 의해 $\sum_{k=0}^{n} a_k b_{n-k} = 0$이다. 따라서 $f + g$와 $fg$는 $R[X]$의 원소이다. 같은 방법으로 $n$에서의 값이 $-a_n$인 함수 $-f$도 $N_1$ 너머에서 $0$이므로 $R[X]$의 원소이다.

**1의 증명.** *덧셈.* 덧셈은 $R[X] \times R[X]$에서 $R[X]$로의 함수이므로 [[binary-operation|이항연산]]이다. 계수마다 $(R, +)$가 아벨군이라는 것을 쓰면 $\operatorname{coef}_n((f + g) + h) = (a_n + b_n) + c_n = a_n + (b_n + c_n) = \operatorname{coef}_n(f + (g + h))$이고, 같은 방법으로 $f + g = g + f$, $f + 0 = f$($0$은 영다항식), $f + (-f) = 0$이다. 따라서 $(R[X], +)$는 [[group|아벨군]]이고 그 항등원은 영다항식, $f$의 역원은 $-f$이다.

*곱셈의 교환법칙.* 재배열의 (3)을 $m = 0$에 쓰면 $\sum_{k=0}^{n} a_k b_{n-k} = \sum_{k=0}^{n} a_{n-k} b_{n-(n-k)} = \sum_{k=0}^{n} a_{n-k} b_k$이다. $R$의 곱셈의 교환법칙과 합의 (3)에 의해 이것은 $\sum_{k=0}^{n} b_k a_{n-k} = \operatorname{coef}_n(gf)$이다.

*곱셈의 결합법칙.* $\operatorname{coef}_n((fg)h) = \sum_{l=0}^{n} \operatorname{coef}_l(fg)\, c_{n-l}$이고, 합의 (9)에 의해 $\operatorname{coef}_l(fg)\, c_{n-l} = \sum_{j=0}^{l} (a_j b_{l-j}) c_{n-l}$이다. $0 \le j \le l \le n$인 쌍마다 $t_{j,l} = a_j b_{l-j} c_{n-l}$로 두면, 합의 (3)과 재배열의 (5)의 (i)에 의해
$$
\begin{aligned}
\operatorname{coef}_n((fg)h) &= \sum_{l=0}^{n} \sum_{j=0}^{l} t_{j,l} \\
&= \sum_{j=0}^{n} \sum_{l=j}^{n} t_{j,l}
\end{aligned}
$$
이다. 안쪽 합에 합의 (5)를 $t = -j$로 쓰면 $\sum_{l=j}^{n} t_{j,l} = \sum_{k=0}^{n-j} t_{j,k+j} = \sum_{k=0}^{n-j} a_j b_k c_{n-j-k}$이고, $R$의 결합법칙과 합의 (9)에 의해 이것은 $a_j \sum_{k=0}^{n-j} b_k c_{(n-j)-k} = a_j \operatorname{coef}_{n-j}(gh)$이다. 따라서 합의 (3)에 의해 $\operatorname{coef}_n((fg)h) = \sum_{j=0}^{n} a_j \operatorname{coef}_{n-j}(gh) = \operatorname{coef}_n(f(gh))$이다.

*분배법칙.* 분배법칙과 합의 (6)의 (i)에 의해 $\operatorname{coef}_n(f(g + h)) = \sum_{k=0}^{n} (a_k b_{n-k} + a_k c_{n-k}) = \operatorname{coef}_n(fg) + \operatorname{coef}_n(fh)$이므로 $f(g + h) = fg + fh$이다. 곱셈의 교환법칙에 의해 $(g + h)f = gf + hf$도 성립한다.

*단위원.* $e = \kappa(1)$로 두자. $0 \le k \le n$이고 $k \ne 0$이면 $\operatorname{coef}_k(e) = 0$이므로 기본 성질의 (1)에 의해 $\operatorname{coef}_k(e)\, b_{n-k} = 0$이다. 합의 (6)의 (v)를 $l = 0$에 쓰면 $\operatorname{coef}_n(eg) = \operatorname{coef}_0(e)\, b_n = 1 b_n = b_n$이다. 따라서 $eg = g$이고 교환법칙에 의해 $ge = g$이다. $\operatorname{coef}_0(e) = 1 \ne 0$이므로 $e$는 영다항식이 아니다. [[ring|환]]의 정의에 의해 $R[X]$는 단위원 $e$를 갖는 가환환이다.

**2의 증명.** 합의 정의 $\operatorname{coef}_n(f + g) = \operatorname{coef}_n(f) + \operatorname{coef}_n(g)$가 군 준동형의 조건이다. [[group-homomorphism|군 준동형]]의 (6)에 의해 $\operatorname{coef}_n(-f) = -\operatorname{coef}_n(f)$이고, $f - g = f + (-g)$이므로 $\operatorname{coef}_n(f - g) = \operatorname{coef}_n(f) - \operatorname{coef}_n(g)$이다. 유한 합은 합의 (7)이다.

**3의 증명.** $\kappa(c)$는 $N = 0$ 너머에서 $0$이므로 다항식이다. (i) 합의 정의에 의해 $\kappa(a + b) = \kappa(a) + \kappa(b)$이다. $\operatorname{coef}_n(\kappa(a)\kappa(b)) = \sum_{k=0}^{n} \operatorname{coef}_k(\kappa(a)) \operatorname{coef}_{n-k}(\kappa(b))$에서 $k \ne 0$인 항은 $0$이므로 합의 (6)의 (v)에 의해 이것은 $a \operatorname{coef}_n(\kappa(b))$이고, $n = 0$이면 $ab$, $n \ge 1$이면 $a0 = 0$이다. 따라서 $\kappa(a)\kappa(b) = \kappa(ab)$이고 $\kappa$는 환 준동형이다. $\kappa(a) = \kappa(b)$이면 $a = \operatorname{coef}_0(\kappa(a)) = \operatorname{coef}_0(\kappa(b)) = b$이므로 단사이다. $\kappa(1)$이 단위원이라는 것은 (1)의 증명에서 보였고, $\kappa(0)$은 모든 계수가 $0$이다. (ii) $f = \kappa(c)$이면 정의에 의해 $n \ge 1$에서 계수가 $0$이다. 거꾸로 $n \ge 1$에서 $\operatorname{coef}_n(f) = 0$이면 $f$와 $\kappa(\operatorname{coef}_0(f))$는 모든 계수가 같으므로 같다. (iii) $\kappa(1)$ 대신 $\kappa(c)$로 (1)의 단위원의 계산을 하면 $\operatorname{coef}_n(\kappa(c) f) = c\, a_n$이다. (iv)의 마지막 주장은 (i)과 [[ring-homomorphism|환 준동형]]의 (1)($\kappa(-a) = -\kappa(a)$, $\kappa(a - b) = \kappa(a) - \kappa(b)$)이다.

**4의 증명.** $X$는 $N = 1$ 너머에서 $0$이므로 다항식이다. (i) $\operatorname{coef}_n(Xf) = \sum_{k=0}^{n} \operatorname{coef}_k(X)\, a_{n-k}$이다. $n \ge 1$이면 $0 \le k \le n$에서 $\operatorname{coef}_k(X) \ne 0$일 수 있는 것은 $k = 1$뿐이므로 합의 (6)의 (v)에 의해 이 합은 $1 a_{n-1} = a_{n-1}$이다. $n = 0$이면 합의 (1)에 의해 이 합은 $\operatorname{coef}_0(X)\, a_0 = 0 a_0 = 0$이다.

(ii) $j$에 대한 귀납법(시작점 $0$). $j = 0$이면 곱의 (6)의 (i)에 의해 $X^0 = 1$이므로 $\operatorname{coef}_n(X^0 f) = a_n = a_{n-0}$이고, $n \ge 0$이므로 "$n < 0$"인 경우는 없다. $j$에서 성립한다고 하자. 곱의 (6)의 (i)과 결합법칙에 의해 $X^{j+1} f = X (X^j f)$이다. $n = 0$이면 (i)에 의해 $\operatorname{coef}_0(X(X^j f)) = 0$이고, $0 < j + 1$이므로 이것이 주장이다. $n \ge 1$이면 (i)과 귀납 가정에 의해 $\operatorname{coef}_n(X(X^j f)) = \operatorname{coef}_{n-1}(X^j f)$이고, 이것은 $n - 1 \ge j$, 곧 $n \ge j + 1$이면 $a_{(n-1)-j} = a_{n-(j+1)}$이고, $n - 1 < j$, 곧 $n < j + 1$이면 $0$이다((Z1), (Z7)).

(iii) (ii)를 $f = 1$에 쓰면, $n \ge j$일 때 $\operatorname{coef}_n(X^j) = \operatorname{coef}_{n-j}(1)$이고 이것은 $n - j = 0$일 때 $1$, $n - j \ge 1$일 때 $0$이다. $n < j$이면 $0$이다. $X^0 = 1$은 곱의 (6)의 (i)이고, $X^1$은 $X$와 모든 계수가 같으므로 $X$이다.

**5의 증명.** (i) (2)에 의해 $\operatorname{coef}_n(u) = \sum_{k=0}^{N} \operatorname{coef}_n(a_k X^k)$이고, (3)의 (iii)과 (4)의 (iii)에 의해 $\operatorname{coef}_n(a_k X^k) = a_k \operatorname{coef}_n(X^k)$는 $k = n$이면 $a_n$, $k \ne n$이면 $a_k 0 = 0$이다. $0 \le n \le N$이면 합의 (6)의 (v)를 $l = n$에 써서 $\operatorname{coef}_n(u) = a_n$이다. $n > N$이면 $0 \le k \le N$인 모든 $k$에서 $k \ne n$이므로 합의 (3)과 (6)의 (iv)에 의해 $\operatorname{coef}_n(u) = 0$이다. (ii) (i)을 $a_k = \operatorname{coef}_k(f)$에 쓰면 $u$와 $f$는 $n \le N$에서 계수가 같고, $n > N$에서 둘 다 계수가 $0$이므로 $u = f$이다. (iii) 두 합이 같으면 (i)에 의해 $0 \le n \le N$에서 $a_n = \operatorname{coef}_n(\text{왼쪽}) = \operatorname{coef}_n(\text{오른쪽}) = b_n$이다. 거꾸로 모든 $k$에서 $a_k = b_k$이면 합의 (3)에 의해 두 합은 같다.

**6의 증명.** 환 $\mathbb{Z}$의 곱은 정수의 곱이므로([[ring-examples|환의 예]]의 (1)) 정의는 [[divisibility|나누어떨어짐]]의 것과 같다. (i) $0 = a0$(기본 성질의 (1)), $a = a1$, $a = 1a$이다. (ii) $b = ac$, $d = bc'$이면 결합법칙에 의해 $d = a(cc')$이다. (iii) $b = ac$이면 $be = a(ce)$이다. $b = ac$, $d = ac'$이면 분배법칙과 기본 성질의 (4)에 의해 $b + d = a(c + c')$, $b - d = a(c - c')$이다.

**7의 증명.** [[subring|부분환]]의 (5)의 (i)과 (3)의 (ii)에 의해 $R_0$은 단위원 $1$을 갖는 가환환이고, 부분환의 (1)에 의해 $R_0$의 $0$은 $R$의 $0$이며 $R_0$의 원소의 합, 차, 곱, 덧셈의 역원은 $R$에서의 것과 같다. 또 부분환의 (1)에 의해 $R_0$은 $(R, +)$의 [[subgroup|부분군]]이다.

(i) $f \in R_0[X]$이면 $f$는 함수 $\{n \in \mathbb{Z} : 0 \le n\} \to R_0$이고 모든 값이 $R$에 속하므로, [[function|함수]]의 진술(공역은 선언하기 나름이다)에 의해 같은 집합 $f$가 $R$로의 함수이고, 같은 $N$ 너머에서 값이 $0$이다. $\{n \in \mathbb{Z} : 0 \le n\} \times R_0 \subseteq \{n \in \mathbb{Z} : 0 \le n\} \times R$이므로 $f \in R[X]$이고, 계수는 같은 집합 $f$의 값이므로 같다. 거꾸로 $f \in R[X]$의 모든 값이 $R_0$에 속하면 같은 이유로 $f$는 $R_0$으로의 함수이고 $R_0[X]$의 원소이다.

(ii) $f, g \in R_0[X]$라 하자. $R_0[X]$에서의 $f + g$의 $n$차 계수 $a_n + b_n$은 $R_0$에서 계산한 것이고 $R$에서 계산한 것과 같다. $R_0[X]$에서의 $fg$의 $n$차 계수 $\sum_{k=0}^{n} a_k b_{n-k}$는 $R_0$에서의 곱과 유한 합으로 계산한 것이고, 곱은 $R$에서와 같으며 합은 합의 (8)($H = R_0$)에 의해 $R$에서의 합과 같다. 따라서 $R_0[X]$에서의 합과 곱은 $R[X]$에서의 합과 곱과 모든 계수가 같으므로 같은 다항식이고, 특히 $R_0[X]$는 $R[X]$의 덧셈과 곱셈에 대해 닫혀 있다. 덧셈과 곱셈을 $R_0[X]$로 제한한 연산은 $R_0[X]$의 연산이고, (1)을 $R_0$에 쓰면 $R_0[X]$는 그 연산으로 환이다. 따라서 [[subring|부분환]]의 정의에 의해 $R_0[X]$는 $R[X]$의 부분환이다. $c \in R_0$일 때 두 환의 $\kappa(c)$는 계수가 같고, 두 부정원 $X$도 계수가 같으므로 같다. 특히 $1 = \kappa(1) \in R_0[X]$이다. 덧셈의 역원과 차가 같다는 것은 부분환의 (1)이다. 거듭제곱이 같다는 것은, 포함 함수 $R_0[X] \to R[X]$가 $1$을 $1$로 보내는 환 준동형이므로([[ring-homomorphism|환 준동형]]의 (7)의 (ii)) 곱의 (9)에서 나온다.

(iii) $R_0[X]$에서 $f = gq$인 $q \in R_0[X]$가 있으면 (ii)에 의해 이 곱은 $R[X]$에서의 곱과 같으므로 $R[X]$에서 $f = gq$이다.
:::

## 예시와 반례

:::example[정수 계수의 두 다항식의 곱]
$\mathbb{Z}[X]$에서 $f = 1 + X$, $g = 1 - X + X^2$이라 하면 $\operatorname{coef}_n(fg) = \sum_{k=0}^{n} \operatorname{coef}_k(f)\operatorname{coef}_{n-k}(g)$에서 $f$의 계수는 $1, 1, 0, \dots$, $g$의 계수는 $1, -1, 1, 0, \dots$입니다. $n = 0$: $1 \cdot 1 = 1$. $n = 1$: $1 \cdot (-1) + 1 \cdot 1 = 0$. $n = 2$: $1 \cdot 1 + 1 \cdot (-1) + 0 \cdot 1 = 0$. $n = 3$: $1 \cdot 0 + 1 \cdot 1 + 0 + 0 = 1$. $n \ge 4$이면 $n > 1 + 2$이므로 $0$입니다(증명의 첫 문단). 따라서 (5)에 의해 $fg = 1 + X^3$입니다.
:::

:::counterexample[정역이 아닌 계수환에서는 곱이 0 일 수 있다]
$\mathbb{Z}_6[X]$에서 $f = [2] + [2]X$, $g = [3]X$라 하면 $\operatorname{coef}_0(fg) = [2][0] = [0]$, $\operatorname{coef}_1(fg) = [2][3] + [2][0] = [6] = [0]$, $\operatorname{coef}_2(fg) = [2] \cdot [0] + [2][3] + [0][0] = [0]$이고, 셋째 이후의 계수도 $[0]$입니다. 영다항식이 아닌 두 다항식의 곱이 영다항식입니다. $\mathbb{Z}_6$ 자체에 $[2][3] = [0]$인 영인자가 있기 때문입니다.
:::

## 확인 질문

:::check[$R$ 위의 다항식 $f$에 대하여 $X^2 f$의 $0$차와 $1$차 계수는 무엇인가?]
(4)의 (ii)를 $j = 2$에 쓰면 $n = 0, 1$은 $n < 2$이므로 둘 다 $0$입니다. $n \ge 2$이면 $\operatorname{coef}_n(X^2 f) = \operatorname{coef}_{n-2}(f)$이므로, $X^2$을 곱하면 계수가 두 칸씩 밀리고 앞의 두 칸이 $0$이 됩니다.
:::

:::check[$\mathbb{Z}[X]$에서 $X$가 $X^2 + X$를 나누는가? $2$가 $2X^2 + 6$을 나누는가?]
$X^2 + X = X(X + 1)$이므로 (6)에 의해 $X \mid X^2 + X$입니다. 또 (3)의 (iii)에 의해 $2(X^2 + 3)$의 계수는 $X^2 + 3$의 계수에 $2$를 곱한 $6, 0, 2, 0, \dots$이므로 $2(X^2 + 3) = 2X^2 + 6$이고, $2 \mid 2X^2 + 6$입니다. 여기서 $2$는 읽는 약속에 따라 상수 다항식 $\kappa(2)$입니다.
:::
