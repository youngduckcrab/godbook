---
title: 복소 인수 정리와 인수분해
title_en: Complex Factor Theorem and Factorization
aliases: [복소수의 유한 곱, 복소 다항함수의 인수분해, 근과 계수의 관계, 비에트 공식, complex factor theorem, factorization into linear factors, Vieta's formulas, finite product of complex numbers]
kind: theorem
field: complex-analysis
msc: ["12D10", "30C10"]
level: undergrad
summary: 복소수의 유한 곱을 재귀로 정의한다(빈 곱은 1). 차수 d ≥ 1 인 복소 다항함수 p 와 복소수 c 에 대하여 p(z) = (z − c)q(z) + p(c) 인 차수 d − 1 의 q 가 있고, p(c) = 0 인 것은 정확히 z − c 가 인수일 때이다. 대수학의 기본정리로 p(z) = a(z − c₁)⋯(z − c_d) 인 복소수의 열이 있고, p 의 근은 정확히 그 항들이며, c₁ + ⋯ + c_d 와 c₁⋯c_d 는 계수로 정해진다.
requires: [function, finite-set, mathematical-induction, prime-number, well-ordering-principle, natural-numbers-are-infinite, recursion-theorem, real-number-arithmetic, finite-sum-of-vectors, finite-product-of-reals, ring, ring-basic-properties, field, integral-domain, complex-number, complex-field, power-of-a-complex-number, complex-finite-sum, complex-polynomial-function, growth-of-complex-polynomial, fundamental-theorem-of-algebra]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, 11.5.1소절 Exercises, Exercise 11.5.4 (p.171)"
    checked: original
    note: "출처 Exercise 11.5.4(p.171)는 차수 n > 0 인 다항식이 많아야 n 개의 근을 갖는다는 것을 증명하게 하고, 근 z₀ 을 원점으로 옮긴 뒤 귀납법을 쓰라고 힌트를 준다. (2)의 나머지가 p(c) 인 나눗셈은 같은 발상(한 점으로 옮긴 표현)으로 증명한다. 이 항목은 근의 개수를 따로 진술하지 않고, (5)로 근이 인수분해의 열의 항이라는 것을 진술한다."
  - ref: judson-abstract-algebra
    loc: "17.2절 The Division Algorithm, 긴 나눗셈의 예 (p.213), Corollary 17.8, Corollary 17.9 (p.214); 17.5절 Exercises, 연습문제 3, 17 (p.220–221); 21.1절 Extension Fields, Theorem 21.25 (p.267)"
    checked: original
    note: "Judson Corollary 17.8(p.214)은 체 F 위의 형식적인 다항식에 대하여 α 가 p(x) 의 근인 것은 정확히 x − α 가 인수일 때라는 것이고, 다항식의 나눗셈 정리로 증명한다. (3)은 같은 진술을 복소 다항함수에 대해 한 것이고, 나눗셈 정리 대신 (2)를 한 점으로 옮긴 표현과 호너 꼴로 증명한다. (2)의 나머지가 p(c) 라는 것은 출처 연습문제 17(p.221)이 p(a) 가 x − a 로 나눈 나머지임을 보이게 하는 것과 같은 내용이고, 출처 p.213 의 x³ − x² + 2x − 3 = (x − 2)(x² + x + 4) + 5 는 그 한 예이고, 연습문제 3 (a)(p.220)도 Z₇ 위에서 x − 2 로 나누는 같은 종류의 계산을 시킨다. Corollary 17.9(p.214)의 증명은 근 α 로 p(x) = (x − α)q(x) 라 쓰고 q 의 차수가 n − 1 이라는 것으로 귀납한다. Theorem 21.25(p.267)는 체가 대수적으로 닫혀 있는 것이 정확히 상수가 아닌 모든 다항식이 일차식들로 인수분해될 때라는 것이고, 그 증명은 근을 하나 찾아 인수를 떼어 내는 것을 '차수가 유한하므로 끝난다' 고 되풀이한다. (4)는 그 한 방향을 복소 다항함수에 대해 진술한 것이고, 이 항목은 되풀이를 '모든 p 에 그런 열이 있다' 는 명제의 차수에 대한 귀납으로 쓴다. (6)의 근과 계수의 관계는 출처의 텍스트 전체에서 'Viete', 'Vieta', 'sum of the roots', 'product of the roots', 'sum of the zeros' 를 찾으면 Viete 가 암호의 역사(p.85)에 한 번 나오는 것 말고는 나오지 않는다(Lebl II, Lebl I, Treil 에서도 같은 검색어로 0건). 다만 아래 Treil 의 연습문제가 특성다항식에 대해 같은 계산을 시킨다."
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.5 Multiplicities of eigenvalues (p.102–103), 연습문제 1.10, 1.11 (p.105)"
    checked: original
    note: "Treil 4장 1.5(p.102–103)는 근 λ 가 있으면 p(z) = (z − λ)q(z) 로 나눌 수 있다고 상기시키고, 차수 n 인 다항식이 중복도를 세어 정확히 n 개의 복소수 근을 가져 p(z) = a_n(z − λ₁)(z − λ₂)⋯(z − λ_n) 으로 쓸 수 있다고 적는다(증명 없이). (3)과 (4)가 그 두 문장이고, 이 항목은 중복도를 정의하지 않고 근을 늘어놓은 열로 말한다. 연습문제 1.10, 1.11(p.105)은 det(A − λI) = (λ₁ − λ)⋯(λ_n − λ) 의 상수항과 λ^{n−1} 의 계수를 비교하게 하는데, (6)의 (i)은 (z − c₁)⋯(z − c_n) 의 같은 두 계수를 계산한 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(달랑베르 증명 통독 — r 의 세 조건이 r^k|b_k| ≤ |b_0| 와 rC' < |b_k| 를 주는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 거듭제곱은 [[power-of-a-complex-number]], 복소수의 유한 합 $\sum_{k=1}^{n}$은 [[complex-finite-sum]]의 것이고, 복소 다항함수와 그 표현, 영함수는 [[complex-polynomial-function|복소 다항함수]], 계수, 상수항, 차수 $\deg$, 최고차계수는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]], 근은 [[fundamental-theorem-of-algebra|대수학의 기본정리]]의 것이다. 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이다. $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 것이다.

**복소수의 열과 유한 곱.** $n$을 $0$ 이상인 정수라 하자. 함수 $c : \{1, \dots, n\} \to \mathbb{C}$를 길이 $n$인 **복소수의 열**이라 하고, $c(k)$를 $c_k$로 써서 열을 $c_1, \dots, c_n$으로 나타낸다($n = 0$이면 빈 열이다). 같은 복소수가 여러 자리에 나와도 된다. "처음 $m$개"와 "덧붙인 열"은 [[finite-sum-of-vectors|벡터의 유한 합]]에서 실수의 열에 대해 정한 것과 같은 뜻으로 쓴다. 열 $c_1, \dots, c_n$의 **곱**(product) $c_1 \cdots c_n$을 다음과 같이 정한다.

- $n = 0$이면 $c_1 \cdots c_n = 1$이고, 이것을 **빈 곱**이라 한다.
- $n \ge 1$이면, 자연수 $k$와 복소수 $s$마다 $k + 1 \le n$일 때 $s\,c_{k+1}$, $k + 1 > n$일 때 $s$를 값으로 하는 함수 $g : \mathbb{N} \times \mathbb{C} \to \mathbb{C}$를 생각한다([[recursion-theorem|재귀 정리]]의 (1)). 재귀 정리에 의해 $P(1) = c_1$이고 모든 자연수 $k$에서 $P(k + 1) = g(k, P(k))$인 함수 $P : \mathbb{N} \to \mathbb{C}$가 정확히 하나 있고, $c_1 \cdots c_n = P(n)$으로 정한다.

곱은 $c_1 c_2 \cdots c_n$으로도 쓰고, 항이 식인 열의 곱도 같은 꼴로 쓴다. 예컨대 복소수 $z$와 열 $c_1, \dots, c_n$에 대하여 $(z - c_1) \cdots (z - c_n)$은 $k$번째 항이 $z - c_k$인 열의 곱이다. 곱 기호 $\Pi$는 쓰지 않는다.

다음이 성립한다. 아래에서 $n$은 $0$ 이상인 정수이다.

1. (곱의 성질) $c_1, \dots, c_{n+1}$과 $w_1, \dots, w_n$은 복소수의 열, $c$는 복소수, $x_1, \dots, x_n$은 실수의 열이다.
   - (i) (끝항 떼기) $c_1 \cdots c_{n+1} = (c_1 \cdots c_n)\,c_{n+1}$이다. 오른쪽의 $c_1 \cdots c_n$은 처음 $n$개의 곱이다. 특히 길이 $1$인 열 $c_1$의 곱은 $c_1$이다.
   - (ii) (곱이 $0$인 경우) $c_1 \cdots c_n = 0$인 것은 정확히 어떤 $k \in \{1, \dots, n\}$에서 $c_k = 0$일 때이다.
   - (iii) (항별 곱) $k$번째 항이 $w_k c_k$인 열의 곱은 $(w_1 \cdots w_n)(c_1 \cdots c_n)$이다.
   - (iv) (모든 항이 같은 열) 길이 $n$인 열의 모든 항이 $c$이면 그 곱은 $c^n$이다.
   - (v) (실수의 곱과의 일치) $\iota(x_1) \cdots \iota(x_n) = \iota(x_1 \cdots x_n)$이다. 오른쪽은 실수의 유한 곱이다.
2. (나머지가 $p(c)$인 나눗셈) $p$가 영함수가 아니고 $\deg p = d \ge 1$인 복소 다항함수이고 $c$가 복소수이면, 영함수가 아니고 차수가 $d - 1$이며 최고차계수가 $p$의 최고차계수와 같은 복소 다항함수 $q$가 있어, 모든 복소수 $z$에서
   $$
   p(z) = (z - c)\,q(z) + p(c)
   $$
   이다.
3. (**인수 정리**) (2)의 $p$와 $c$에 대하여, $p(c) = 0$인 것은 정확히 모든 복소수 $z$에서 $p(z) = (z - c)\,q(z)$인 복소 다항함수 $q$가 있을 때이다. 이때 (2)의 $q$가 그런 $q$이다.
4. (인수분해) $p$가 영함수가 아니고 $\deg p = d \ge 1$이며 최고차계수가 $a$인 복소 다항함수이면, 길이 $d$인 복소수의 열 $c_1, \dots, c_d$가 있어 모든 복소수 $z$에서
   $$
   p(z) = a\,(z - c_1) \cdots (z - c_d)
   $$
   이다.
5. (근) (4)의 열에 대하여, 복소수 $z$가 $p$의 근인 것은 정확히 어떤 $k \in \{1, \dots, d\}$에서 $z = c_k$일 때이다.
6. (근과 계수의 관계) $n \ge 1$이고 $c_1, \dots, c_n$이 복소수의 열이라 하자.
   - (i) $z$에서의 값이 $(z - c_1) \cdots (z - c_n)$인 함수는 끝 번호가 $n$이고 $z^n$의 계수가 $1$, $z^{n-1}$의 계수가 $-\sum_{k=1}^{n} c_k$, $z^0$의 계수가 $(-1)^n c_1 \cdots c_n$인 표현을 갖는 복소 다항함수이다. ($n = 1$이면 뒤의 두 계수는 같은 $z^0$의 계수 $-c_1$이다.)
   - (ii) (비에트 공식) (4)에서 $p$의 $z^k$의 계수를 $a_k$라 하면($a_d = a$)
     $$
     \begin{aligned}
     \sum_{k=1}^{d} c_k &= -a_{d-1}\,a_d^{-1}, \\
     c_1 \cdots c_d &= (-1)^d a_0\,a_d^{-1}
     \end{aligned}
     $$
     이다.
:::

:::english
Complex numbers are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; powers of complex numbers and finite sums $\sum_{k=1}^{n}$ of complex numbers are those of their entries; complex polynomial functions, their representations, and the zero function are those of the entry on complex polynomial functions; coefficients, constant terms, the degree $\deg$, and leading coefficients are those of the entry on growth of complex polynomials and uniqueness of coefficients; and roots are those of the entry on the fundamental theorem of algebra. Products of finite sequences of real numbers are those of the entry on finite products of reals, and $\{1, \dots, n\}$ is that of the entry on finite sets.

**Finite sequences of complex numbers and finite products.** Let $n$ be an integer $\ge 0$. A function $c : \{1, \dots, n\} \to \mathbb{C}$ is called a **finite sequence of complex numbers** of length $n$; we write $c(k)$ as $c_k$ and the sequence as $c_1, \dots, c_n$ (for $n = 0$ it is the empty sequence). The same complex number may appear in several places. "The first $m$ terms" and "the appended sequence" are used in the same sense as for sequences of real numbers in the entry on finite sums of vectors. The **product** $c_1 \cdots c_n$ of the sequence $c_1, \dots, c_n$ is defined as follows.

- If $n = 0$, then $c_1 \cdots c_n = 1$; this is called the **empty product**.
- If $n \ge 1$, consider the function $g : \mathbb{N} \times \mathbb{C} \to \mathbb{C}$ whose value at a natural number $k$ and a complex number $s$ is $s\,c_{k+1}$ if $k + 1 \le n$ and $s$ if $k + 1 > n$ (item (1) of the recursion theorem). By the recursion theorem there is exactly one function $P : \mathbb{N} \to \mathbb{C}$ with $P(1) = c_1$ and $P(k + 1) = g(k, P(k))$ for every natural number $k$; define $c_1 \cdots c_n = P(n)$.

The product is also written $c_1 c_2 \cdots c_n$, and products of sequences whose terms are expressions are written in the same way. For example, for a complex number $z$ and a sequence $c_1, \dots, c_n$, $(z - c_1) \cdots (z - c_n)$ is the product of the sequence whose $k$th term is $z - c_k$. The product symbol $\Pi$ is not used.

The following hold. Below, $n$ is an integer $\ge 0$.

1. (Properties of products) Let $c_1, \dots, c_{n+1}$ and $w_1, \dots, w_n$ be sequences of complex numbers, $c$ a complex number, and $x_1, \dots, x_n$ a sequence of real numbers.
   - (i) (Splitting off the last term) $c_1 \cdots c_{n+1} = (c_1 \cdots c_n)\,c_{n+1}$, where $c_1 \cdots c_n$ on the right is the product of the first $n$ terms. In particular, the product of a sequence $c_1$ of length $1$ is $c_1$.
   - (ii) (When the product is $0$) $c_1 \cdots c_n = 0$ exactly when $c_k = 0$ for some $k \in \{1, \dots, n\}$.
   - (iii) (Termwise products) The product of the sequence whose $k$th term is $w_k c_k$ equals $(w_1 \cdots w_n)(c_1 \cdots c_n)$.
   - (iv) (Constant sequences) If every term of a sequence of length $n$ is $c$, its product is $c^n$.
   - (v) (Agreement with products of reals) $\iota(x_1) \cdots \iota(x_n) = \iota(x_1 \cdots x_n)$, where the right side is a finite product of real numbers.
2. (Division with remainder $p(c)$) If $p$ is a complex polynomial function other than the zero function with $\deg p = d \ge 1$ and $c$ is a complex number, then there is a complex polynomial function $q$, not the zero function, of degree $d - 1$ and with the same leading coefficient as $p$, such that for every complex number $z$
   $$
   p(z) = (z - c)\,q(z) + p(c).
   $$
3. (**Factor theorem**) For $p$ and $c$ as in (2), $p(c) = 0$ exactly when there is a complex polynomial function $q$ with $p(z) = (z - c)\,q(z)$ for every complex number $z$. In that case the $q$ of (2) is such a $q$.
4. (Factorization) If $p$ is a complex polynomial function other than the zero function with $\deg p = d \ge 1$ and leading coefficient $a$, then there is a sequence of complex numbers $c_1, \dots, c_d$ of length $d$ such that for every complex number $z$
   $$
   p(z) = a\,(z - c_1) \cdots (z - c_d).
   $$
5. (Roots) For the sequence of (4), a complex number $z$ is a root of $p$ exactly when $z = c_k$ for some $k \in \{1, \dots, d\}$.
6. (Relations between roots and coefficients) Let $n \ge 1$ and let $c_1, \dots, c_n$ be a sequence of complex numbers.
   - (i) The function whose value at $z$ is $(z - c_1) \cdots (z - c_n)$ is a complex polynomial function having a representation with last index $n$ in which the coefficient of $z^n$ is $1$, that of $z^{n-1}$ is $-\sum_{k=1}^{n} c_k$, and that of $z^0$ is $(-1)^n c_1 \cdots c_n$. (If $n = 1$, the last two are the same coefficient of $z^0$, namely $-c_1$.)
   - (ii) (Vieta's formulas) In (4), if $a_k$ denotes the coefficient of $z^k$ of $p$ (so $a_d = a$), then
     $$
     \begin{aligned}
     \sum_{k=1}^{d} c_k &= -a_{d-1}\,a_d^{-1}, \\
     c_1 \cdots c_d &= (-1)^d a_0\,a_d^{-1}.
     \end{aligned}
     $$
:::

## 직관

[[fundamental-theorem-of-algebra|대수학의 기본정리]]는 근이 하나 있다는 것만 말합니다. 근 $c$를 하나 찾으면 인수 정리 (3)으로 $p(z) = (z - c)\,q(z)$라 쓸 수 있고, $q$는 차수가 하나 낮은 복소 다항함수입니다. $q$의 차수가 $1$ 이상이면 다시 근이 있으므로 같은 일을 되풀이하고, 차수가 $0$이 되면 멈춥니다. 양파 껍질을 한 겹씩 벗기는 것처럼 일차식을 하나씩 떼어 내면 $p$는 최고차계수와 일차식 $d$개의 곱이 됩니다((4)). 비유에서 껍질의 수가 차수 $d$이고, 벗기는 손길이 매번 기본정리입니다. 양파와 달리 같은 껍질(같은 근)이 여러 번 나올 수 있어서, 근을 늘어놓은 열에는 같은 수가 되풀이될 수 있습니다.

곱 $a(z - c_1) \cdots (z - c_d)$를 펼치면 $z^{d-1}$의 계수는 $-a$와 근의 합의 곱이고 상수항은 $a$와 $(-1)^d$과 근의 곱의 곱입니다((6)). 계수는 함수로 정해지므로(계수의 유일성), 근의 합과 곱은 근을 구하지 않고도 계수에서 읽힙니다. 이차식 $\alpha z^2 + \beta z + \gamma$($\alpha \ne 0$)에서는 근의 합이 $-\beta/\alpha$, 곱이 $\gamma/\alpha$라는 익숙한 관계입니다.

복소수의 곱도 이 항목에서 정의합니다. 실수의 곱과 같은 재귀로 정의하고 빈 곱을 $1$로 두며, 실수를 옮긴 복소수의 곱은 실수의 곱을 옮긴 것과 같아서((1)의 (v)) 두 정의가 어긋나지 않습니다.

## 증명

:::idea
나눗셈 (2)는 $p$를 $c$ 둘레로 옮긴 표현에 호너 꼴을 쓰는 것이고, 인수분해 (4)는 "차수가 $d$인 모든 복소 다항함수에 그런 열이 있다"를 $d$에 대한 귀납법으로 보인다. 근과 계수의 관계는 일차식을 하나씩 곱할 때 계수가 어떻게 바뀌는지를 귀납으로 따라간다.
:::

:::hint
$p(z) = p\bigl(c + (z - c)\bigr)$이고, $h$에서의 값이 $p(c + h)$인 함수는 상수항이 $p(c)$인 복소 다항함수이다.
:::

:::hint
열 $c_1, \dots, c_{n+1}$의 곱 $(z - c_1) \cdots (z - c_{n+1})$은 $(z - c_{n+1})$과 처음 $n$개의 곱의 곱이다.
:::

:::proof
"다항함수의 ($n$)"은 [[complex-polynomial-function]], "증가의 ($n$)"은 [[growth-of-complex-polynomial]], "합의 ($n$)"은 [[complex-finite-sum]], "복소수체의 ($n$)"은 [[complex-field]], "복소 거듭제곱의 ($n$)"은 [[power-of-a-complex-number]], "실수의 곱의 ($n$)"은 [[finite-product-of-reals]]의 번호이다. $\mathbb{C}$는 체(복소수체의 (1))이므로 [[ring|환]]의 계산 법칙(결합, 교환, 분배)을 쓰고, [[field|체]]의 (3)에 의해 정역이므로 [[integral-domain|정역]]의 정의에 의해 두 복소수의 곱이 $0$이면 어느 하나가 $0$이다. 귀납법은 [[mathematical-induction]], 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

**정의에 대하여.** $g$는 각 $(k, s)$에서 값이 하나 정해지므로(두 경우 가운데 정확히 하나가 성립한다는 것은 (Z5)) 재귀 정리의 (1)에 의해 함수 $\mathbb{N} \times \mathbb{C} \to \mathbb{C}$이고, 재귀 정리를 쓸 수 있다.

**1의 증명.** (i) $n = 0$이면 길이 $1$인 열의 $P$는 $P(1) = c_1$이므로 곱은 $c_1 = 1 \cdot c_1$이고, 이것은 빈 곱과 $c_1$의 곱이다. $n \ge 1$이라 하고, 길이 $n + 1$인 열의 함수를 $P$, 처음 $n$개의 열의 함수를 $P'$라 하자. $1 \le k \le n$에서 $P(k) = P'(k)$를 $k$에 대한 귀납법으로 보인다. $k = 1$이면 둘 다 $c_1$이다. $k + 1 \le n$이고 $P(k) = P'(k)$이면 두 열의 $g$의 정의에 의해 $P(k + 1) = P(k)\,c_{k+1} = P'(k)\,c_{k+1} = P'(k + 1)$이다. 따라서 $c_1 \cdots c_{n+1} = P(n + 1) = P(n)\,c_{n+1} = P'(n)\,c_{n+1} = (c_1 \cdots c_n)\,c_{n+1}$이다.

(ii) $n$에 대한 귀납법. $n = 0$이면 곱은 $1 \ne 0$이고(복소수체의 (1)) $\{1, \dots, 0\}$은 공집합이므로 양쪽 모두 거짓이다. $n$에서 성립하면, (i)에 의해 길이 $n + 1$인 열의 곱은 $(c_1 \cdots c_n)\,c_{n+1}$이고, 이것이 $0$인 것은 정확히 $c_1 \cdots c_n = 0$이거나 $c_{n+1} = 0$일 때이며(정역, 그리고 거꾸로는 [[ring-basic-properties|환의 기본 성질]]의 (1)의 $0$과의 곱이 $0$), 귀납 가정에 의해 정확히 어떤 $k \le n + 1$에서 $c_k = 0$일 때이다.

(iii) $n$에 대한 귀납법. $n = 0$이면 양쪽이 $1 = 1 \cdot 1$이다. $n$에서 성립하면 (i)과 귀납 가정, 교환·결합법칙에 의해 $\bigl[(w_1 c_1) \cdots (w_n c_n)\bigr](w_{n+1} c_{n+1}) = (W C)(w_{n+1} c_{n+1}) = (W w_{n+1})(C c_{n+1})$이다. 여기서 $W$, $C$는 처음 $n$개의 곱이고, (i)에 의해 마지막 식은 두 곱의 곱이다.

(iv) $n = 0$이면 빈 곱 $1$과 $c^0 = 1$이 같다. $n$에서 성립하면 (i)과 복소 거듭제곱의 (1)에 의해 곱은 $c^n c = c^{n+1}$이다.

(v) $n = 0$이면 빈 곱이 양쪽 모두 $1$이고 복소수체의 (2)의 (i)에 의해 $\iota(1) = 1$이다. $n$에서 성립하면 (i), 귀납 가정, 복소수체의 (2), 실수의 곱의 (1)에 의해 $\bigl(\iota(x_1) \cdots \iota(x_n)\bigr)\iota(x_{n+1}) = \iota(x_1 \cdots x_n)\,\iota(x_{n+1}) = \iota\bigl((x_1 \cdots x_n)\,x_{n+1}\bigr) = \iota(x_1 \cdots x_{n+1})$이다.

**2의 증명.** 증가의 (3)의 (i)에 의해 $p$는 끝 번호가 $d$이고 끝 계수 $a_d$가 최고차계수인 표현을 갖는다. 다항함수의 (4)에 의해 열 $b_0, \dots, b_d$가 있어 모든 $h$에서 $p(c + h) = \sum_{k=0}^{d} b_k h^k$이고 $b_0 = p(c)$, $b_d = a_d$이다. $d \ge 1$이므로 다항함수의 (2)에 의해, 계수가 $b_1, \dots, b_d$(끝 번호 $d - 1$, 끝 계수 $b_d = a_d$)인 복소 다항함수 $Q$에 대해 모든 $h$에서 $p(c + h) = b_0 + h\,Q(h)$이다. 다항함수의 (4)를 $Q$와 점 $-c$에 쓰면, $z$에서의 값이 $Q(-c + z)$인 함수 $q$는 끝 번호가 $d - 1$이고 끝 계수가 $a_d$인 표현을 갖는 복소 다항함수이다. $a_d \ne 0$이므로 증가의 (2)의 (iii)과 (3)의 (i)에 의해 $q$는 영함수가 아니고 $\deg q = d - 1$, 최고차계수는 $a_d$이다. 이제 복소수 $z$에 $h = z - c$를 넣으면 $c + h = z$, $-c + z = h$이므로
$$
\begin{aligned}
p(z) &= b_0 + (z - c)\,Q(z - c) \\
&= p(c) + (z - c)\,q(z)
\end{aligned}
$$
이다.

**3의 증명.** $p(c) = 0$이면 (2)의 $q$에 대해 모든 $z$에서 $p(z) = (z - c)\,q(z) + 0$이다. 거꾸로 모든 $z$에서 $p(z) = (z - c)\,q(z)$이면 $z = c$를 넣어 $p(c) = 0 \cdot q(c) = 0$이다.

**4의 증명.** $d \ge 1$에 대한 귀납법(시작점 $1$)으로 다음 명제를 보인다: "영함수가 아니고 차수가 $d$인 모든 복소 다항함수 $p$에 대하여, $a$를 $p$의 최고차계수라 하면 모든 $z$에서 $p(z) = a\,(z - c_1) \cdots (z - c_d)$인 길이 $d$인 복소수의 열이 있다." 명제는 $p$마다 열이 있다는 것이고, 각 단계에서 쓰는 것은 근이 있다는 진술(대수학의 기본정리)과 귀납 가정의 존재 진술 하나씩이다.

$d$가 무엇이든, 차수가 $d \ge 1$인 $p$에 대하여 [[fundamental-theorem-of-algebra|대수학의 기본정리]]의 (1)에 의해 근 $c$가 있고, (3)과 (2)에 의해 모든 $z$에서 $p(z) = (z - c)\,q(z)$이며 $q$는 영함수가 아니고 차수가 $d - 1$, 최고차계수가 $a$이다.

$d = 1$이면 $q$의 차수는 $0$이므로 증가의 (3)의 (ii)와 (i), 다항함수의 (1)의 (i)에 의해 $q$는 값이 $a$인 상수함수이다. 길이 $1$인 열 $c_1 = c$를 잡으면 (1)의 (i)에 의해 $(z - c_1)$의 곱은 $z - c$이므로 $p(z) = (z - c)\,a = a\,(z - c_1)$이다.

$d \ge 2$이고 $d - 1$에서 명제가 성립하면, 귀납 가정을 $q$에 써서 모든 $z$에서 $q(z) = a\,(z - c_1) \cdots (z - c_{d-1})$인 열 $c_1, \dots, c_{d-1}$을 얻는다. 이 열에 $c_d = c$를 덧붙인 열을 잡으면, $k$번째 항이 $z - c_k$인 길이 $d$인 열의 처음 $d - 1$개는 같은 꼴의 길이 $d - 1$인 열이므로 (1)의 (i)에 의해
$$
\begin{aligned}
p(z) &= (z - c)\,q(z) \\
&= a\,(z - c_1) \cdots (z - c_d)
\end{aligned}
$$
이다. 둘째 등식은 $q(z)$에 귀납 가정의 식을 넣고, 교환·결합법칙으로 $z - c$를 처음 $d - 1$개의 곱 뒤로 옮긴 뒤 (1)의 (i)을 쓴 것이다.

**5의 증명.** $a \ne 0$이므로 정역의 성질에 의해 $p(z) = 0$인 것은 정확히 $(z - c_1) \cdots (z - c_d) = 0$일 때이고, (1)의 (ii)에 의해 정확히 어떤 $k$에서 $z - c_k = 0$, 곧 $z = c_k$일 때이다.

**6의 증명.** (i) $n \ge 1$에 대한 귀납법(시작점 $1$)으로, 길이 $n$인 모든 열에 대하여 "끝 번호가 $n$이고 $z^n$의 계수가 $1$, $z^{n-1}$의 계수가 $-\sum_{k=1}^{n} c_k$, $z^0$의 계수가 $(-c_1) \cdots (-c_n)$인 표현"이 있음을 보인다. $n = 1$이면 (1)의 (i)에 의해 값은 $z - c_1 = (-c_1) + 1 \cdot z$이므로 계수가 $-c_1, 1$인 표현이고, 합의 (2)에 의해 $\sum_{k=1}^{1} c_k = c_1$, (1)의 (i)에 의해 길이 $1$인 열 $-c_1$의 곱은 $-c_1$이다.

$n \ge 1$에서 성립한다고 하고 길이 $n + 1$인 열을 보자. 처음 $n$개의 곱의 함수를 $M$이라 하고 귀납 가정의 표현의 계수를 $e_0, \dots, e_n$이라 하면 $e_n = 1$, $e_{n-1} = -\sum_{k=1}^{n} c_k$, $e_0 = (-c_1) \cdots (-c_n)$이다. (1)의 (i)과 교환법칙에 의해 $(z - c_1) \cdots (z - c_{n+1}) = (z - c_{n+1})\,M(z)$이므로, 다항함수의 (3)의 (ii)를 $c = c_{n+1}$에 쓰면 이 함수는 끝 번호가 $n + 1$이고 계수가
$$
\begin{aligned}
b_0 &= -c_{n+1} e_0, \\
b_k &= e_{k-1} - c_{n+1} e_k, \\
b_{n+1} &= e_n = 1
\end{aligned}
$$
(가운데 줄은 $1 \le k \le n$)인 표현을 갖는다. $k = n$이면 $b_n = -\sum_{k=1}^{n} c_k - c_{n+1} = -\sum_{k=1}^{n+1} c_k$이다(합의 (2)의 끝항 떼기). 또 $b_0 = (-c_1) \cdots (-c_n)\,(-c_{n+1})$이고, (1)의 (i)에 의해 이것은 길이 $n + 1$인 열 $-c_1, \dots, -c_{n+1}$의 곱이다.

끝으로 $-c_k = (-1)\,c_k$이므로 (1)의 (iii), (iv)에 의해 $(-c_1) \cdots (-c_n) = (-1)^n\,c_1 \cdots c_n$이다.

(ii) (i)의 함수를 $M$, 그 표현의 계수를 $e_0, \dots, e_d$라 하자. (4)와 다항함수의 (1)의 (iii)에 의해 $p$는 계수가 $a\,e_0, \dots, a\,e_d$인 표현을 갖고, 증가의 (2)의 계수의 정의에 의해 $a_k = a\,e_k$이다. 따라서 $a_{d-1} = -a\sum_{k=1}^{d} c_k$이고 $a_0 = a\,(-1)^d c_1 \cdots c_d$이다($d = 1$이면 둘은 같은 식이다). $a = a_d \ne 0$이므로 양변에 $a_d^{-1}$을 곱하고, 복소 거듭제곱의 (3)의 (i)에 의해 $(-1)^d (-1)^d = \bigl((-1)(-1)\bigr)^d = 1^d = 1$이므로 둘째 식에는 $(-1)^d$도 곱하면 결론이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[$zz - 2z + 2$의 인수분해]
$p(z) = zz - 2z + 2$는 계수가 $2, -2, 1$이고 차수가 $2$, 최고차계수가 $1$입니다. $p(1 + i) = 0$이므로 (3)으로 일차식 $z - (1 + i)$를 떼어 낼 수 있고, (2)의 나눗셈을 계산하면 $q(z) = z - (1 - i)$입니다. 실제로
$$
\begin{aligned}
&\bigl(z - (1 + i)\bigr)\bigl(z - (1 - i)\bigr) \\
&\quad = zz - 2z + (1 + i)(1 - i) \\
&\quad = zz - 2z + 2
\end{aligned}
$$
입니다. 열 $c_1 = 1 + i$, $c_2 = 1 - i$에서 (6)의 (ii)를 확인하면 $c_1 + c_2 = 2 = -(-2) \cdot 1^{-1}$이고 $c_1 c_2 = 2 = (-1)^2 \cdot 2 \cdot 1^{-1}$입니다. (5)에 의해 $p$의 근은 $1 + i$와 $1 - i$뿐입니다.
:::

:::example[근이 겹치는 경우]
$p(z) = zz - 2z + 1$이면 $p(z) = (z - 1)(z - 1)$이므로 (4)의 열은 $c_1 = c_2 = 1$로 잡을 수 있습니다. 열에는 같은 수가 되풀이될 수 있고, (5)에 의해 근은 $1$ 하나입니다. (6)의 (ii)로는 $c_1 + c_2 = 2$, $c_1 c_2 = 1$입니다.
:::

:::counterexample[인수분해의 열은 하나로 정해지지 않는다]
첫째 예시에서 $c_1 = 1 - i$, $c_2 = 1 + i$로 순서를 바꾼 열도 (4)를 만족합니다. 그래서 (4)는 그런 열이 있다는 것만 말하고, 열 자체가 하나라고 말하지 않습니다. 근의 합과 곱은 (6)의 (ii)에 의해 어느 열을 잡아도 계수로 정해지는 같은 값입니다.
:::

## 확인 질문

:::check[$p(z) = 2zz + 2$를 (4)의 꼴로 쓰면?]
최고차계수는 $2$이고 근은 $i$와 $-i$입니다($2(-1) + 2 = 0$). 모든 $z$에서 $p(z) = 2(z - i)(z + i)$이고, (6)의 (ii)로 확인하면 근의 합 $0 = -0 \cdot 2^{-1}$, 근의 곱 $i(-i) = 1 = (-1)^2 \cdot 2 \cdot 2^{-1}$입니다.
:::

:::check[$p(z) = z^3$의 근은 무엇인가?]
$p(z) = 1 \cdot (z - 0)(z - 0)(z - 0)$이므로(모든 항이 $z$인 열의 곱은 (1)의 (iv)에 의해 $z^3$) (5)에 의해 근은 $0$ 하나입니다. 열의 길이는 $3$이지만 서로 다른 근은 하나입니다.
:::
