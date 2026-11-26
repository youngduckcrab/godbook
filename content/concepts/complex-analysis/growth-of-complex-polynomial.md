---
title: 복소 다항함수의 증가와 계수의 유일성
title_en: Growth of Complex Polynomials and Uniqueness of Coefficients
aliases: [복소 다항함수의 증가, 복소 다항함수의 차수, 최고차계수, 계수 비교, growth of polynomials, degree of a complex polynomial, leading coefficient, uniqueness of coefficients]
kind: theorem
field: complex-analysis
msc: ["30C10"]
level: undergrad
summary: 끝 계수 a_d 가 0 이 아니고 d ≥ 1 인 복소 다항함수는 |z| ≥ 1 에서 |p(z)| ≥ |z|^(d−1)(|a_d||z| − C) (C 는 나머지 계수의 절댓값의 합)를 만족하고, |z| 가 충분히 크면 |a_d||z|^d 의 절반 이상이며 어떤 수보다도 커진다. 그래서 복소 다항함수의 계수는 함수로 정해지고, 영함수가 아닌 복소 다항함수의 차수와 최고차계수가 정의되며, 상수함수인 것은 영함수이거나 차수가 0 일 때이다. 실계수 다항함수와 그 계수로 만든 복소 다항함수는 계수와 차수가 같다.
requires: [function, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, finite-sum-of-reals, linearity-and-order-of-finite-sums, series-indexed-from-zero, polynomial-function, coefficients-of-polynomial-function, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number, complex-finite-sum, complex-polynomial-function]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Lemma 11.5.4 와 그 증명, 그 뒤 문단 (p.170); 11.3절 Power series and analytic functions, 11.3.3소절 Properties of analytic functions (p.156), 11.3.5소절 Identity theorem for analytic functions, Lemma 11.3.8 (p.160); 11.7절 The Stone–Weierstrass theorem, 11.7.3소절 Exercises, Exercise 11.7.9 (p.190)"
    checked: original
    note: "출처 Lemma 11.5.4(p.170)는 상수가 아닌(nonconstant) 복소 다항식 p 에 대하여 모든 M > 0 에 R > 0 이 있어 |z| ≥ R 이면 |p(z)| ≥ M 이라는 것이다. 증명은 d ≥ 1, a_d ≠ 0 인 꼴로 쓰고 |p(z)| ≥ |z|^d(|a_d| − |a₀||z|^{−d} − ⋯ − |a_{d−1}||z|^{−1}) 으로 어림한 뒤, R 이 크면 괄호가 |a_d|/2 보다 크다고 하여 |p(z)| ≥ R^d|a_d|/2 를 얻는다. (1)은 같은 어림을 음의 지수 없이 |z|^{d−1} 로 묶어 쓰고, R 을 식으로 적으며, M 을 모든 실수로 둔다. (1)의 (ii)의 |a_d||z|^d/2 꼴은 출처의 마지막 어림과 같은 모양이다. 출처는 증명에서 'nonconstant' 를 d ≥ 1 이고 a_d ≠ 0 인 표현이 있다는 것으로 바꾸어 쓰는데, 둘이 같은 말이라는 것이 (3)의 (ii)이고 계수의 유일성 (2)를 거쳐야 한다. 출처는 Lemma 11.5.4 뒤(p.170)에서 'for very large |z| (far away from the origin) a polynomial of degree d really looks like a constant multiple of z^d' 라고 적는데, (1)의 (ii)가 그것을 부등식으로 적은 것이다. 출처 Lemma 11.3.8(p.160)은 수렴하는 멱급수의 합이 0 으로 수렴하는 0 이 아닌 점들에서 모두 0 이면 계수가 모두 0 이라는 것이고, 끝 번호 뒤의 계수가 0 인 멱급수로 보면 (2)의 (i)과 같은 결론이다. 출처 11.3.3소절(p.156)은 멱급수의 계수가 함수의 도함수로 정해진다고 적는다. 이 항목은 (2)를 멱급수와 연속, 미분 없이 (1)의 어림으로 증명한다. 출처 Exercise 11.7.9(p.190)는 단위원 위의 적분으로 z̄ 가 z 의 다항식들로 고르게 어림되지 않음을 보이게 하는데, 반례 '켤레를 취하는 함수' 는 그보다 약한 사실, 곧 켤레를 취하는 함수가 복소 다항함수가 아니라는 것을 (1)의 어림으로 보인다."
  - ref: lebl-basic-analysis
    loc: "3.3절 Extreme and intermediate value theorems, 3.3.2소절 Bolzano's intermediate value theorem, Proposition 3.3.10 의 증명 (p.134); 3.3.3소절 Exercises, Exercise 3.3.9 (p.137)"
    checked: original
    note: "Lebl I Proposition 3.3.10 의 증명(p.134)은 실수 계수의 최고차계수가 1 인 다항식에서 |b_{d−1}n^{d−1} + ⋯ + b₀| 을 각 항의 n^k 을 n^{d−1} 로 바꾸어 (|b_{d−1}| + ⋯ + |b₀|)n^{d−1} 이하로 어림한다. (1)의 (i)의 증명이 |z|^k ≤ |z|^{d−1} 로 같은 어림을 한다. Exercise 3.3.9(p.137)는 유계인 실수 다항식은 상수라는 것을 증명하게 하는데, (3)의 (ii)의 마지막 문장(차수가 1 이상이면 |p(z)| 가 어떤 수보다도 큰 점이 있다)과 확인 질문 '상수함수가 아닌 복소 다항함수 $p$에서 $|p|$가 위로 유계일 수 있는가?'는 같은 내용을 복소 다항함수에 대해 말한 것이다."
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings (p.209–210)"
    checked: original
    note: "Judson 17.1절(p.209–210)은 형식적인 다항식의 계수, 최고차계수(leading coefficient), 차수를 정의하고, 두 다항식이 같다는 것을 계수가 모두 같다는 것으로 정의하며, 영다항식의 차수를 −∞ 로 둔다. 이 사이트는 다항식을 함수로 다루므로 계수가 함수로 정해진다는 것은 (2)에서 증명하고, 영함수에는 차수를 정의하지 않는다(선형대수 2 의 실계수 다항함수와 같은 방침)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최솟값 증명 통독, 증가 어림의 R 에 경계값, 출처 메모 표본 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수와 $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱 $z^k$는 [[power-of-a-complex-number]], $0$부터의 합 $\sum_{k=0}^{d}$는 [[complex-finite-sum]]의 것이고, 복소 다항함수, 그 표현, 표현에서의 계수와 끝 번호, $0$부터 번호가 붙은 복소수의 열, 영함수, 실계수 다항함수의 계수로 만든 복소 다항함수는 [[complex-polynomial-function|복소 다항함수]]의 것이다. 실수의 순서, 절댓값, 거듭제곱, 두 수의 최대 $\max\{a, b\}$는 [[real-order-axioms]], [[absolute-value]], [[power-of-a-real-number]]의 것이고, 실수의 $0$부터의 합은 [[series-indexed-from-zero]]의 것이다. 실계수 다항함수와 그 $t^k$의 계수, 차수 $\deg f$, 최고차계수는 [[polynomial-function|다항함수]]와 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다.

1. (증가의 어림) 복소 다항함수 $p$가 표현 $p(z) = \sum_{k=0}^{d} a_k z^k$를 갖고 $d \ge 1$, $a_d \ne 0$이라 하자. 실수
   $$
   C = \sum_{k=0}^{d-1} |a_k|
   $$
   을 두자($0 \le C$).
   - (i) $|z| \ge 1$인 모든 복소수 $z$에서 $|p(z)| \ge |z|^{d-1}\bigl(|a_d|\,|z| - C\bigr)$이다.
   - (ii) $R_0 = \max\{1,\ 2C|a_d|^{-1}\}$로 두면, $|z| \ge R_0$인 모든 복소수 $z$에서 $|p(z)| \ge \frac{1}{2}|a_d|\,|z|^d$이다.
   - (iii) 모든 실수 $M$에 대하여 $R = \max\{1,\ (|M| + C)|a_d|^{-1}\}$로 두면, $|z| \ge R$인 모든 복소수 $z$에서 $|p(z)| \ge M$이다.
2. (계수의 유일성) $d$, $e$는 $0$ 이상인 정수이고 $a_0, \dots, a_d$와 $b_0, \dots, b_e$는 $0$부터 번호가 붙은 복소수의 열이다.
   - (i) 모든 복소수 $z$에서 $\sum_{k=0}^{d} a_k z^k = 0$이면 모든 $k$에서 $a_k = 0$이다.
   - (ii) $d \le e$이고 모든 복소수 $z$에서 $\sum_{k=0}^{d} a_k z^k = \sum_{k=0}^{e} b_k z^k$이면, $0 \le k \le d$에서 $a_k = b_k$이고 $d < k \le e$에서 $b_k = 0$이다.

   **계수.** $p$가 복소 다항함수이고 $k$가 $0$ 이상인 정수라 하자. $p$의 표현 $p(z) = \sum_{j=0}^{d} a_j z^j$를 하나 잡아, $k \le d$이면 $a_k$를, $k > d$이면 $0$을 $p$의 **$z^k$의 계수**(coefficient of $z^k$)라 한다. (ii)에 의해 이 수는 표현을 어떻게 잡든 같다. $z^0$의 계수를 **상수항**이라 한다.

   - (iii) 복소 다항함수 $p$의 상수항은 $p(0)$이다. 두 복소 다항함수가 같은 것은 정확히 $0$ 이상인 모든 $k$에서 $z^k$의 계수가 같을 때이고, 복소 다항함수가 영함수인 것은 정확히 모든 계수가 $0$일 때이다.
3. (차수) $p$가 영함수가 아닌 복소 다항함수이면, $z^k$의 계수가 $0$이 아닌 $0$ 이상인 정수 $k$ 전체의 집합은 공집합이 아니고 위로 유계이므로 [[well-ordering-principle|최대 원소]]를 갖는다. 그 최대 원소를 $p$의 **차수**(degree)라 하고 $\deg p$로 쓰며, $z^{\deg p}$의 계수를 $p$의 **최고차계수**(leading coefficient)라 한다. 최고차계수는 $0$이 아니다. 영함수의 차수는 정의하지 않는다. (기호 $\deg$는 실계수 다항함수의 차수와 같은 기호이지만, 정의역이 $\mathbb{C}$인 함수에 쓰면 이 뜻이다. 두 뜻이 맞는다는 것이 (4)이다.)
   - (i) 영함수가 아닌 복소 다항함수 $p$는 끝 번호가 $\deg p$이고 끝 계수가 최고차계수인 표현을 갖는다. $p$가 끝 번호가 $d$인 표현을 가지면 $p$는 영함수이거나 $\deg p \le d$이고, 그 표현의 끝 계수 $a_d$가 $0$이 아니면 $\deg p = d$이다.
   - (ii) 복소 다항함수 $p$가 상수함수인 것은 정확히 $p$가 영함수이거나 $\deg p = 0$일 때이다. $\deg p = 0$인 것은 정확히 $p$가 값이 $0$이 아닌 상수함수일 때이다. $p$가 영함수가 아니고 $\deg p \ge 1$이면, 모든 실수 $M$에 대하여 $|p(z)| \ge M$인 복소수 $z$가 있다.
4. (실계수 다항함수와의 일치) $f$가 실계수 다항함수이고 $P$가 $f$의 계수로 만든 복소 다항함수이면, $0$ 이상인 모든 정수 $k$에서 $P$의 $z^k$의 계수는 $f$의 $t^k$의 계수를 $\iota$로 옮긴 것이다. $P$가 영함수인 것은 정확히 $f = o$일 때이고, $f \ne o$이면 $\deg P = \deg f$이며 $P$의 최고차계수는 $f$의 최고차계수를 $\iota$로 옮긴 것이다.
5. (일차식을 곱한 차수) $q$가 영함수가 아닌 복소 다항함수이고 $c$가 복소수이면, $z$에서의 값이 $(z - c)\,q(z)$인 복소 다항함수는 영함수가 아니고, 그 차수는 $\deg q + 1$이며 최고차계수는 $q$의 최고차계수와 같다.
:::

:::english
Complex numbers and $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; moduli $|z|$, powers $z^k$, and sums from zero $\sum_{k=0}^{d}$ are those of their entries; and complex polynomial functions, their representations, coefficients and last indices of representations, finite sequences of complex numbers indexed from zero, the zero function, and the complex polynomial function made from the coefficients of a real polynomial function are those of the entry on complex polynomial functions. The order, absolute value, and powers of real numbers and the maximum $\max\{a, b\}$ of two numbers are those of their entries, and sums from zero of real numbers are those of the entry on series indexed from zero. Real polynomial functions, their coefficients of $t^k$, degree $\deg f$, and leading coefficient are those of the entries on polynomial functions and on coefficients and degree of polynomial functions.

1. (Growth estimate) Let $p$ be a complex polynomial function with a representation $p(z) = \sum_{k=0}^{d} a_k z^k$ where $d \ge 1$ and $a_d \ne 0$. Put
   $$
   C = \sum_{k=0}^{d-1} |a_k|
   $$
   (so $0 \le C$).
   - (i) For every complex number $z$ with $|z| \ge 1$, $|p(z)| \ge |z|^{d-1}\bigl(|a_d|\,|z| - C\bigr)$.
   - (ii) If $R_0 = \max\{1,\ 2C|a_d|^{-1}\}$, then $|p(z)| \ge \frac{1}{2}|a_d|\,|z|^d$ for every complex number $z$ with $|z| \ge R_0$.
   - (iii) For every real number $M$, if $R = \max\{1,\ (|M| + C)|a_d|^{-1}\}$, then $|p(z)| \ge M$ for every complex number $z$ with $|z| \ge R$.
2. (Uniqueness of coefficients) Let $d$, $e$ be integers $\ge 0$ and let $a_0, \dots, a_d$ and $b_0, \dots, b_e$ be finite sequences of complex numbers indexed from zero.
   - (i) If $\sum_{k=0}^{d} a_k z^k = 0$ for every complex number $z$, then $a_k = 0$ for all $k$.
   - (ii) If $d \le e$ and $\sum_{k=0}^{d} a_k z^k = \sum_{k=0}^{e} b_k z^k$ for every complex number $z$, then $a_k = b_k$ for $0 \le k \le d$ and $b_k = 0$ for $d < k \le e$.

   **Coefficients.** Let $p$ be a complex polynomial function and $k$ an integer $\ge 0$. Choose a representation $p(z) = \sum_{j=0}^{d} a_j z^j$ of $p$; the **coefficient of $z^k$** of $p$ is $a_k$ if $k \le d$ and $0$ if $k > d$. By (ii), this number does not depend on the choice of representation. The coefficient of $z^0$ is called the **constant term**.

   - (iii) The constant term of a complex polynomial function $p$ is $p(0)$. Two complex polynomial functions are equal exactly when their coefficients of $z^k$ agree for every $k \ge 0$, and a complex polynomial function is the zero function exactly when all its coefficients are $0$.
3. (Degree) If $p$ is a complex polynomial function other than the zero function, then the set of integers $k \ge 0$ for which the coefficient of $z^k$ is nonzero is nonempty and bounded above, so it has a greatest element. That greatest element is called the **degree** of $p$, written $\deg p$, and the coefficient of $z^{\deg p}$ is called the **leading coefficient** of $p$. The leading coefficient is nonzero. The degree of the zero function is not defined. (The symbol $\deg$ is the same as for the degree of real polynomial functions, but applied to a function with domain $\mathbb{C}$ it has this meaning; item (4) shows that the two meanings agree.)
   - (i) A complex polynomial function $p$ other than the zero function has a representation with last index $\deg p$ whose last coefficient is the leading coefficient. If $p$ has a representation with last index $d$, then $p$ is the zero function or $\deg p \le d$; and if the last coefficient $a_d$ of that representation is nonzero, then $\deg p = d$.
   - (ii) A complex polynomial function $p$ is a constant function exactly when $p$ is the zero function or $\deg p = 0$. Moreover $\deg p = 0$ exactly when $p$ is a constant function with nonzero value. If $p$ is not the zero function and $\deg p \ge 1$, then for every real number $M$ there is a complex number $z$ with $|p(z)| \ge M$.
4. (Agreement with real polynomial functions) If $f$ is a real polynomial function and $P$ is the complex polynomial function made from the coefficients of $f$, then for every integer $k \ge 0$ the coefficient of $z^k$ of $P$ is the image under $\iota$ of the coefficient of $t^k$ of $f$. $P$ is the zero function exactly when $f = o$; and if $f \ne o$, then $\deg P = \deg f$ and the leading coefficient of $P$ is the image under $\iota$ of the leading coefficient of $f$.
5. (Degree after multiplying by a linear factor) If $q$ is a complex polynomial function other than the zero function and $c$ is a complex number, then the complex polynomial function whose value at $z$ is $(z - c)\,q(z)$ is not the zero function, its degree is $\deg q + 1$, and its leading coefficient equals the leading coefficient of $q$.
:::

## 직관

먼 산맥을 바라보면 작은 봉우리는 가려지고 가장 높은 봉우리만 눈에 들어옵니다. 복소 다항함수도 표현의 끝 계수 $a_d$가 $0$이 아니고 $d \ge 1$이면, $|z|$가 클 때 가장 높은 거듭제곱의 항 $a_d z^d$가 나머지를 압도합니다. 나머지 항 $a_k z^k$($k \le d - 1$)는 $|z| \ge 1$이면 절댓값이 $|a_k|\,|z|^{d-1}$을 넘지 않으므로 다 모아도 $C|z|^{d-1}$ 이하이고, 맨 위의 항은 $|a_d|\,|z|^d = |a_d|\,|z| \cdot |z|^{d-1}$이어서 $|z| \ge 1$이고 $|z|$가 $C|a_d|^{-1}$보다 크면 나머지를 모은 것보다 큽니다((1)의 (i)). 비유에서 "멀리서"가 (1)의 (iii)의 $|z| \ge R$이고, "가장 높은 봉우리"가 끝 계수 $a_d$가 $0$이 아닌 항입니다. 그래서 (1)은 $a_d \ne 0$이고 $d \ge 1$인 표현에서만 말합니다. $d = 0$이면 $p$는 상수라 커지지 않습니다.

이 어림에서 계수의 유일성 (2)가 나옵니다. 모든 점에서 $0$인 표현에 $0$이 아닌 계수가 있다면, 그런 계수 가운데 번호가 가장 큰 것을 끝 계수로 하는 표현으로 줄일 수 있습니다. 그 번호가 $1$ 이상이면 (1)에 의해 어딘가에서 값의 절댓값이 $1$ 이상이어서 모순이고, $0$이면 그 계수가 $p(0) = 0$이어서 모순입니다. 계수가 함수로 정해지므로 영함수가 아닌 복소 다항함수의 차수와 최고차계수를 정할 수 있습니다((3)).

(4)는 선형대수 2 의 실계수 다항함수의 차수와 이 항목의 차수가 같은 수라는 것이어서, 기호 $\deg$를 두 곳에 써도 어긋나지 않습니다.

## 증명

:::idea
나머지 항들을 맨 위의 항에 견주어 한꺼번에 어림하고, 그 어림을 "모든 점에서 $0$인 표현"에 써서 끝 계수가 $0$이 될 수밖에 없음을 보인다.
:::

:::hint
$|z| \ge 1$이고 $0 \le k \le d - 1$이면 $|z|^k \le |z|^{d-1}$이다. 이것과 [[complex-triangle-inequality|복소수의 삼각부등식]]으로 $|p(z)|$를 아래에서 누른다.
:::

:::hint
(2)의 (i)은 $0$이 아닌 계수의 번호 가운데 가장 큰 것을 잡아 그것으로 표현을 줄인 뒤, 그 번호가 $1$ 이상인 경우와 $0$인 경우로 나눈다.
:::

:::proof
"다항함수의 ($n$)"은 [[complex-polynomial-function|복소 다항함수]]의 번호이고, "합의 ($n$)"은 [[complex-finite-sum]]의 번호이다(그 (8)에 의해 (1), (4)–(7)은 $0$부터의 합에도 쓴다). "순서의 ($n$)", "절댓값의 ($n$)", "실수의 거듭제곱의 ($n$)", "복소 거듭제곱의 ($n$)", "복소 절댓값의 ($n$)", "삼각부등식의 ($n$)"은 [[order-properties-of-reals]], [[absolute-value]], [[power-of-a-real-number]], [[power-of-a-complex-number]], [[modulus-of-complex-number]], [[complex-triangle-inequality]]의 번호이다. 실수의 $0$부터의 합 $\sum_{k=0}^{K} x_k$는 [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 $\sum_{j=1}^{K+1} x_{j-1}$이므로, [[linearity-and-order-of-finite-sums]]의 (8)에 의해 그 (1)과 (3)을 쓸 수 있다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)로 다룬다.

**1의 증명.** 복소 절댓값의 (1)에 의해 항 $|a_k|$가 모두 $0$ 이상이므로 선형성·순서의 (6)에 의해 $0 \le C$이다.

(i) $|z| \ge 1$이라 하고 $S = \sum_{k=0}^{d-1} a_k z^k$로 두자. 다항함수의 (2)에 의해 $p(z) = S + a_d z^d$, 곧 $a_d z^d = p(z) - S$이므로 삼각부등식의 (2)의 둘째 부등식에 의해 $|a_d z^d| \le |p(z)| + |S|$이다. 순서의 (2)의 (ii)로 $|S|$를 옮기면
$$
|p(z)| \ge |a_d z^d| - |S|
$$
이다. 복소 절댓값의 (3)과 복소 거듭제곱의 (4)에 의해 $|a_d z^d| = |a_d|\,|z|^d$이다.

이제 $|S|$를 어림한다. 합의 (7)에 의해 $|S| \le \sum_{k=0}^{d-1} |a_k z^k| = \sum_{k=0}^{d-1} |a_k|\,|z|^k$이다. $0 \le k \le d - 1$이면 $n = d - 1 - k \ge 0$이고, $0 \le 1 \le |z|$이므로 실수의 거듭제곱의 (6)의 (ii)와 (2)의 (iv)에 의해 $1 = 1^n \le |z|^n$이다. 실수의 거듭제곱의 (6)의 (i)에 의해 $0 \le |z|^k$이므로 순서의 (4)의 (iii)과 실수의 거듭제곱의 (2)의 (i)에 의해 $|z|^k = |z|^k \cdot 1 \le |z|^k |z|^n = |z|^{d-1}$이고, 같은 (4)의 (iii)에 의해 $|a_k|\,|z|^k \le |a_k|\,|z|^{d-1}$이다. 항별 비교(선형성·순서의 (3))와 상수배(같은 (1))에 의해
$$
|S| \le \sum_{k=0}^{d-1} |a_k|\,|z|^{d-1} = |z|^{d-1} C
$$
이다. 실수의 거듭제곱의 (1)에 의해 $|z|^d = |z|^{d-1}|z|$이므로, 두 부등식과 순서의 (3)의 (iii), (2)의 (iii)에 의해
$$
\begin{aligned}
|p(z)| &\ge |a_d|\,|z|^{d-1}|z| - |z|^{d-1} C \\
&= |z|^{d-1}\bigl(|a_d|\,|z| - C\bigr)
\end{aligned}
$$
이다.

(ii) $a_d \ne 0$이므로 복소 절댓값의 (1)에 의해 $0 < |a_d|$이고, 순서의 (6)의 (i)에 의해 $0 < |a_d|^{-1}$이다. $|z| \ge R_0$이면 절댓값의 (10)에 의해 $|z| \ge 1$이고 $|z| \ge 2C|a_d|^{-1}$이다. 뒤의 부등식의 양변에 $|a_d| > 0$을 곱하면(순서의 (4)의 (iii)) $|a_d|\,|z| \ge 2C$, 곧 순서의 (3)의 (i)에 의해 $0 \le |a_d|\,|z| - 2C$이다. 순서의 (8)에 의해 $0 < \frac{1}{2}$이므로 순서의 (4)의 (iii)에 의해
$$
\begin{aligned}
&\bigl(|a_d|\,|z| - C\bigr) - \tfrac{1}{2}|a_d|\,|z| \\
&\quad = \tfrac{1}{2}\bigl(|a_d|\,|z| - 2C\bigr) \ge 0
\end{aligned}
$$
이고, 순서의 (3)의 (i)에 의해 $|a_d|\,|z| - C \ge \frac{1}{2}|a_d|\,|z|$이다. 실수의 거듭제곱의 (6)의 (i)에 의해 $0 \le |z|^{d-1}$이므로 (i)과 순서의 (4)의 (iii), (1)의 (v)에 의해
$$
|p(z)| \ge |z|^{d-1} \cdot \tfrac{1}{2}|a_d|\,|z| = \tfrac{1}{2}|a_d|\,|z|^d
$$
이다.

(iii) $|z| \ge R$이면 절댓값의 (10)에 의해 $|z| \ge 1$이고 $|z| \ge (|M| + C)|a_d|^{-1}$이다. 뒤의 부등식에 $|a_d| > 0$을 곱하면 $|a_d|\,|z| \ge |M| + C$, 곧 $|a_d|\,|z| - C \ge |M|$이다(순서의 (2)의 (ii)). (i)의 증명에서 $n = d - 1$로 둔 것과 같이 $|z|^{d-1} \ge 1$이다. 절댓값의 (2)에 의해 $0 \le |M|$이므로, (i)과 순서의 (4)의 (iii)을 두 번 쓰고 절댓값의 (6)을 쓰면
$$
\begin{aligned}
|p(z)| &\ge |z|^{d-1}\bigl(|a_d|\,|z| - C\bigr) \\
&\ge |z|^{d-1}|M| \\
&\ge 1 \cdot |M| = |M| \ge M
\end{aligned}
$$
이다(순서의 (1)의 (v)로 잇는다).

**2의 증명.** (i) $0$이 아닌 $a_k$가 있다고 하자. 정수의 집합 $A = \{k \in \mathbb{Z} : 0 \le k \le d,\ a_k \ne 0\}$은 공집합이 아니고 $d$로 위로 유계이므로 [[well-ordering-principle|정렬 원리]]의 (4)에 의해 최대 원소 $d'$를 갖는다. $d' < k \le d$이면 $k \notin A$이므로($k \in A$이면 $k \le d'$이 되어 (L1)에 어긋난다) $a_k = 0$이다. 따라서 열 $a_0, \dots, a_d$는 열 $a_0, \dots, a_{d'}$에 $0$을 덧붙인 열이고, 다항함수의 (1)의 (ii)에 의해 모든 $z$에서 $\sum_{k=0}^{d'} a_k z^k = \sum_{k=0}^{d} a_k z^k = 0$이다. 이 표현의 끝 계수 $a_{d'}$는 $0$이 아니다.

$d' \ge 1$이면 (1)의 (iii)을 이 표현과 $M = 1$에 써서 $R \ge 1$을 얻는다. $z = \iota(R)$이면 복소 절댓값의 (5)와 절댓값의 (1)에 의해 $|z| = |R| = R$이므로 $|p(z)| \ge 1$인데, $p(z) = 0$이고 $|0| = 0 < 1$이므로 [[order-properties-of-reals|순서]]의 (1)의 (i)에 어긋난다. $d' = 0$이면 다항함수의 (1)의 (i)에 의해 $a_0 = \sum_{k=0}^{0} a_k 0^k = 0$인데 $a_{d'} = a_0 \ne 0$이므로 어긋난다. 어느 경우든 모순이므로 모든 $a_k$는 $0$이다.

(ii) 다항함수의 (1)의 (ii)로 $a$를 $e$까지 늘린 열을 $a'_0, \dots, a'_e$라 하면($k \le d$에서 $a'_k = a_k$, $d < k \le e$에서 $a'_k = 0$) 모든 $z$에서 $\sum_{k=0}^{e} a'_k z^k = \sum_{k=0}^{e} b_k z^k$이다. 다항함수의 (1)의 (iii)의 차에 의해 모든 $z$에서 $\sum_{k=0}^{e} (b_k - a'_k) z^k = 0$이므로 (i)에 의해 모든 $k$에서 $b_k = a'_k$이다. 이것이 결론이다.

계수가 표현에 상관없음: 두 표현의 끝 번호가 $d \le e$이면 (ii)에 의해 $k \le d$에서 두 계수가 같고, $d < k \le e$에서는 앞의 정의로는 $0$, 뒤의 정의로는 $b_k = 0$이며, $k > e$에서는 둘 다 $0$이다.

(iii) 상수항: 표현 하나에서 $z^0$의 계수는 $a_0$이고 다항함수의 (1)의 (i)에 의해 $a_0 = p(0)$이다. 두 복소 다항함수가 같으면 같은 함수의 표현이므로 계수의 정의에 의해 계수가 같다. 거꾸로 모든 계수가 같으면, 다항함수의 (1)의 (ii)로 두 표현을 끝 번호가 같게 늘린 뒤 그 끝 번호 이하의 계수가 같으므로 [[complex-finite-sum]]의 (1)(그 (8)의 꼴)에 의해 모든 점에서 값이 같고, 함수의 같음에 의해 두 함수가 같다. 영함수는 다항함수의 (1)의 (i)에 의해 계수가 $0$ 하나인 표현을 가지므로 모든 계수가 $0$이고, 거꾸로 모든 계수가 $0$이면 방금 보인 것에 의해 영함수와 같다.

**3의 증명.** $p$가 영함수가 아니면 (2)의 (iii)에 의해 $0$이 아닌 계수가 있어 집합이 공집합이 아니다. $p$의 표현 하나의 끝 번호를 $d$라 하면 $k > d$에서 계수가 $0$이므로 집합의 원소는 모두 $d$ 이하이고((Z5)), 정렬 원리의 (4)에 의해 최대 원소가 있다. 최고차계수가 $0$이 아닌 것은 최대 원소가 집합의 원소이기 때문이다.

(i) 끝 번호가 $d$인 표현을 잡으면 위에서 본 것처럼 $\deg p \le d$이다. $\deg p < k \le d$에서 $a_k$는 계수이고 최대 원소보다 큰 번호이므로 $0$이다. 따라서 열 $a_0, \dots, a_d$는 $a_0, \dots, a_{\deg p}$에 $0$을 덧붙인 열이고, 다항함수의 (1)의 (ii)에 의해 끝 번호가 $\deg p$인 열도 $p$의 표현이다. 그 끝 계수는 $z^{\deg p}$의 계수, 곧 최고차계수이다. $a_d \ne 0$이면 $d$가 집합의 원소이므로 $d \le \deg p$이고, (L2)에 의해 $\deg p = d$이다.

(ii) 영함수는 상수함수이다. $\deg p = 0$이면 (i)에 의해 끝 번호가 $0$인 표현을 가지므로 다항함수의 (1)의 (i)에 의해 $p$는 모든 값이 최고차계수인 상수함수이고, 최고차계수는 $0$이 아니다. 거꾸로 $p$가 값이 $c \ne 0$인 상수함수이면 다항함수의 (1)의 (i)에 의해 계수가 $c$ 하나인 표현을 가지므로 $z^0$의 계수만 $0$이 아니고 $\deg p = 0$이다.

$\deg p = d \ge 1$이라 하자. (i)에 의해 끝 번호가 $d$이고 끝 계수가 $0$이 아닌 표현이 있으므로, 실수 $M$이 주어지면 (1)의 (iii)의 $R$에 대하여 $z = \iota(R)$은 (2)의 증명과 같이 $|z| = R$이어서 $|p(z)| \ge M$이다. 특히 $M = |p(0)| + 1$로 두면 $|p(z)| \ge |p(0)| + 1 > |p(0)|$이므로(순서의 (2)의 (ii)와 $0 < 1$) $p(z) \ne p(0)$이고, $p$는 상수함수가 아니다. 이상을 모으면 $p$가 상수함수인 것은 정확히 영함수이거나 $\deg p = 0$일 때이다(영함수가 아니면 [[well-ordering-principle]]의 (Z5)와 (Z1)에 의해 $\deg p = 0$이거나 $\deg p \ge 1$이다).

**4의 증명.** $f$의 표현 $f = r_0 t^0 + \cdots + r_n t^n$을 잡으면 $P$는 계수가 $\iota(r_0), \dots, \iota(r_n)$인 복소 다항함수이다([[complex-polynomial-function|복소 다항함수]]의 (7)의 (iii)). $k \le n$이면 $P$의 $z^k$의 계수는 $\iota(r_k)$이고, [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)에 의해 $r_k$는 $f$의 $t^k$의 계수이다. $k > n$이면 두 계수는 $0$이고 [[complex-field|복소수체]]의 (2)의 (i)에 의해 $\iota(0) = 0$이다. 복소수체의 (2)에 의해 $\iota$는 단사이고 $\iota(0) = 0$이므로, 실수 $x$에 대하여 $\iota(x) = 0$인 것은 정확히 $x = 0$일 때이다. 따라서 $P$의 $z^k$의 계수가 $0$이 아닌 $k$의 집합과 $f$의 $t^k$의 계수가 $0$이 아닌 $k$의 집합은 같다. (2)의 (iii)과 같은 항목의 (2)의 (iii)에 의해 $P$가 영함수인 것은 정확히 이 집합이 공집합일 때, 곧 $f = o$일 때이다. $f \ne o$이면 (3)과 같은 항목의 (4)에 의해 두 차수는 같은 집합의 최대 원소이므로 같고, 최고차계수는 그 번호의 계수이므로 $\iota$로 맞는다.

**5의 증명.** $m = \deg q$로 두면 (3)의 (i)에 의해 $q$는 끝 번호가 $m$이고 끝 계수 $e_m$이 $0$이 아닌 표현을 갖는다. 다항함수의 (3)의 (ii)에 의해 $(z - c)\,q(z)$는 끝 번호가 $m + 1$이고 끝 계수가 $e_m$인 표현을 갖는다. $e_m \ne 0$이므로 (2)의 (iii)에 의해 이 함수는 영함수가 아니고, (3)의 (i)에 의해 차수는 $m + 1$, 최고차계수는 $e_m$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$2z^2 + 3iz + 4$의 어림]
계수가 $4, 3i, 2$인 복소 다항함수 $p(z) = 2z^2 + 3iz + 4$에서 $d = 2$, $a_2 = 2$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (3), (5)에 의해 $|3i| = 3$이므로 $C = |4| + |3i| = 7$입니다. (1)의 (i)은 $|z| \ge 1$에서 $|p(z)| \ge |z|\,(2|z| - 7)$이라는 것입니다. $z = 5$에서 $p(5) = 54 + 15i$이고 $|p(5)| = \sqrt{2916 + 225} = \sqrt{3141}$이며, $\sqrt{3141} > 56$이므로 오른쪽 $5 \cdot 3 = 15$보다 큽니다.

(1)의 (ii)의 $R_0$은 $\max\{1, 2 \cdot 7 \cdot 2^{-1}\} = 7$이므로 $|z| \ge 7$이면 $|p(z)| \ge |z|^2$입니다. $z = 7i$에서 $p(7i) = 2(-49) + 3i \cdot 7i + 4 = -98 - 21 + 4 = -115$이고 $|-115| = 115 \ge 49$입니다. (1)의 (iii)을 $M = 100$에 쓰면 $R = \max\{1, (100 + 7) \cdot 2^{-1}\} = 53.5$입니다.
:::

:::counterexample[켤레를 취하는 함수]
$|\overline{z}| = |z|$이므로 켤레를 취하는 함수는 $|z|$가 커지면 함께 커지지만, 복소 다항함수가 아닙니다. 복소 다항함수 $p$가 모든 $z$에서 $p(z) = \overline{z}$라 하고, [[complex-polynomial-function|복소 다항함수]]의 (1)의 (iii)으로 $q(z) = p(z) - z$인 복소 다항함수 $q$를 만듭시다. 실수 $x$에서 [[complex-conjugate|켤레복소수]]의 (4)에 의해 $q(\iota(x)) = \iota(x) - \iota(x) = 0$입니다.

$q$가 영함수가 아니고 $\deg q \ge 1$이면 (3)의 (i)과 (1)의 (iii)을 $M = 1$에 써서 얻은 $R$에 대해 $|\iota(R)| = R$이므로 $|q(\iota(R))| \ge 1$이어야 하는데, 방금 본 것처럼 $q(\iota(R)) = 0$입니다. 따라서 (3)의 (ii)에 의해 $q$는 상수함수이고, 그 값은 $q(\iota(0)) = 0$입니다. 그러면 모든 $z$에서 $p(z) = z$이므로 $\overline{i} = p(i) = i$인데, $\overline{i} = -i$이고 $-i \ne i$이므로(허수부가 $-1$과 $1$) 모순입니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $(z - 1)(z + 1) - z^2$인 복소 다항함수의 차수와 최고차계수는 무엇인가?]
[[complex-polynomial-function|복소 다항함수]]의 (3)의 (ii)를 $q(z) = 1 + 1z$와 $c = 1$에 쓰면 $(z - 1)(z + 1)$의 계수는 $-1, 0, 1$입니다. $z^2$의 계수는 $0, 0, 1$이므로 같은 항목의 (1)의 (iii)의 차에 의해 계수는 $-1, 0, 0$입니다. (3)에 의해 차수는 $0$이고 최고차계수는 $-1$입니다. 곧 이 함수는 값이 $-1$인 상수함수입니다.
:::

:::check[상수함수가 아닌 복소 다항함수 $p$에서 $|p|$가 위로 유계일 수 있는가?]
없습니다. $p$가 상수함수가 아니므로 (3)의 (ii)에 의해 $p$는 영함수가 아니고 $\deg p \ne 0$, 곧 $\deg p \ge 1$입니다. 같은 (ii)에 의해 모든 실수 $M$에 $|p(z)| \ge M$인 $z$가 있으므로, $M$을 상계보다 $1$ 큰 수로 두면 상계를 넘는 값이 나옵니다.
:::
