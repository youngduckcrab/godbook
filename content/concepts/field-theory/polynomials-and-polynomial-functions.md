---
title: 다항식과 다항함수
title_en: Polynomials and Polynomial Functions
aliases: [다항식이 정하는 함수, 복소수체는 대수적으로 닫혀 있다, 대수적으로 닫힌 체, 켤레근, 실수 계수 다항식의 도함수, polynomial function, algebraically closed, complex numbers are algebraically closed, conjugate roots]
kind: theorem
field: field-theory
msc: ["12D05"]
level: undergrad
summary: 실수 계수와 복소수 계수의 다항식에 그 값으로 정한 함수를 대응시키는 사상이 다항식환에서 다항함수의 환으로 가는 환 동형사상이라는 것, 계수와 차수와 도함수가 맞는다는 것, 복소수체 위의 다항식이 일차식의 곱으로 분해된다는 것, 계수가 실수인 다항식의 근의 켤레도 근이라는 것, 환의 합·곱·거듭제곱·정수배·이항계수가 실수와 복소수 강의의 것과 같다는 것을 증명한다.
requires: [function, mathematical-induction, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, real-function-space, finite-sum-of-vectors, factorial, factorial-from-zero, group, power-in-a-group, ring, ring-examples, subring, ring-homomorphism, field, integral-domain, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, characteristic-of-a-ring, binomial-coefficient, binomial-theorem, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, formal-derivative, finite-sum-of-reals, series-indexed-from-zero, power-of-a-real-number, finite-product-of-reals, polynomial-function, product-of-polynomial-functions, coefficients-of-polynomial-function, interval, real-valued-function, continuous-function, derivative, derivative-rules, derivative-of-power, differentiable-implies-continuous, binomial-series, complex-field, complex-conjugate, complex-finite-sum, power-of-a-complex-number, complex-polynomial-function, growth-of-complex-polynomial, complex-factor-theorem, factorial-form-of-binomial-expansion]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17장 첫머리 (p.209); 17.1절 Polynomial Rings, Theorem 17.5 (p.212); 16.1절 Rings, Example 16.5 (p.191); 17.3절 Irreducible Polynomials, Example 17.11 (p.215); 21.1절 Extension Fields, Example 21.14 (p.264), 대수적으로 닫힌 체의 정의와 Theorem 21.25 (p.267), Theorem 21.28 (p.268); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 7 (p.223); 23.1절 Field Automorphisms, Example 23.3 (p.294); 23.3절 Applications, Example 23.33 (p.306)과 Theorem 23.34 (p.307); 2.1절 Mathematical Induction, Example 2.4 (p.18)"
    checked: original
    note: "이 항목은 출처의 한 명제에 대응하지 않고, 이 강의의 다항식을 실수·복소수 강의의 대상과 잇는 진술과 증명은 이 사이트가 썼다. 겹치는 곳: 출처 17장 첫머리(p.209)는 p(x) = x³ − 3x + 2, q(x) = 3x² − 6x + 5 를 함수로 더하고 곱하는 계산으로 다항식환을 소개하고, Theorem 17.5(p.212)는 α 에서의 대입이 환 준동형임을 보인다. 이 둘은 (1)의 (iii)과 (3)의 (iii)의 '함수의 합·곱과 다항식의 합·곱이 맞는다'와 같은 내용이다. Example 16.5(p.191)는 구간 위의 연속인 실함수 전체가 값마다의 합과 곱으로 가환환을 이룬다고 적는다((1)의 (ii)와 같은 종류의 함수의 환). (4)는 출처 21.1절의 정의(p.267, 'algebraically closed if every nonconstant polynomial in F[x] has a root in F')와 Theorem 21.25(p.267, 대수적으로 닫혀 있는 것은 일차식으로 분해되는 것과 같다), Theorem 21.28(p.268)과 Theorem 23.34(p.307, 복소수체는 대수적으로 닫혀 있다)를 합친 내용이다. 출처는 Theorem 23.34 를 갈루아 이론과 실로우 정리로 증명하고, 증명 뒤에 '홀수 차수의 다항식이 실근을 갖는다'와 '양수의 제곱근'에 해석학의 완비성이 쓰인다고 적는다. 이 항목은 복소수 강의의 대수학의 기본정리와 인수분해를 옮겨 증명한다. (6)은 출처 Example 23.3(p.294, 켤레를 취하는 것이 ℂ 의 자기동형이고 실수를 고정한다)과 Example 23.33(p.306, 나머지 두 근은 켤레이고 켤레가 실근을 고정하며 두 근을 맞바꾼다)이 쓰는 사실이다. 17.6절 연습문제 7(p.223)의 (b)는 판별식이 양수인 삼차방정식 y³ + py + q = 0 이 '실근 하나와 켤레인 두 허근'을 가짐을 보이라고 하며, (4)와 (6)을 함께 쓰는 것과 같은 대상이다. (2)는 Example 23.33(p.306)이 f(x) = x⁵ − 6x³ − 27x − 3 의 도함수를 f′(x) = 5x⁴ − 18x² − 27 로 놓고 실근을 구해 극대와 극소의 개수를 말하는 곳에서 쓰는 사실이다(형식적 도함수와 실함수의 도함수를 같은 것으로 쓴다). (7)은 출처 Example 2.4(p.18)가 실수 a, b 에 대한 이항정리를 계승 꼴 이항계수로 귀납법으로 증명하는 것과 같은 대상이다. 반례 'ℝ 위에서는 일차식의 곱으로 쓰이지 않을 수 있다'의 X² + 1 은 출처 Example 17.11(p.215, 'x² + 1 is irreducible over the real numbers')과 Example 21.14(p.264, ℝ[x]/⟨x² + 1⟩ 이 x² + 1 의 근을 갖는 ℝ 의 확대체이고 ℂ 와 동형)과 같은 대상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(경계 경우 영다항식·상수, 이항계수 일치의 k > n). 독립 검토 없음."
added: 2026-11-27
---

:::statement
다항식환 $R[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$와 최고차계수는 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값 $f(r)$, 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]], 형식적 도함수 $f'$는 [[formal-derivative|형식적 도함수]]의 것이다. 환의 합의 기호 $\sum$과 정수배 $q \cdot a$는 [[finite-sums-in-a-ring|환의 유한 합]], 열의 곱과 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]], 이항계수 $C(n, k)$는 [[binomial-coefficient|이항계수]]의 것이다. 환 $\mathbb{R}$는 [[ring-examples|환의 예]]의 (2)의 것이고, 체 $\mathbb{C}$, 함수 $\iota : \mathbb{R} \to \mathbb{C}$, 실수인 복소수와 실수를 복소수 자리에 쓰는 약속은 [[complex-field|복소수체]], 켤레 $\overline{z}$는 [[complex-conjugate|켤레복소수]]의 것이다. $\mathbb{R}^{\mathbb{R}}$과 그 덧셈은 [[real-function-space|실숫값 함수의 공간]], 다항함수, $t^k$, $\mathcal{P}_N$, 영함수 $o$, $0$부터 번호가 붙은 실수의 열과 그 표현 $a_0 t^0 + \cdots + a_N t^N$은 [[polynomial-function|다항함수]], 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]], $t^k$의 계수, 차수, 최고차계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다. 복소 다항함수와 그 계수, "$f$의 계수로 만든 복소 다항함수"는 [[complex-polynomial-function|복소 다항함수]], $z^k$의 계수, 차수, 최고차계수는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 것이다. 구간, 미분가능, 도함수는 [[derivative|미분계수와 도함수]], 연속은 [[continuous-function|연속함수]]의 것이다.

1. (실수 계수의 다항식과 다항함수) $f \in \mathbb{R}[X]$에 대하여 실수 $x$에서의 값이 $f(x)$인 함수 $\mathbb{R} \to \mathbb{R}$를 $\operatorname{ev}_{\mathbb{R}}(f)$로 쓴다. 다항함수 전체의 집합을 $\operatorname{Pol}_{\mathbb{R}}$로 쓴다.
   - (i) (계수로 쓴 꼴) $N$이 $0$ 이상인 정수이고 $0 \le k \le N$에서 정해진 실수 $a_k$에 대하여 $f = \sum_{k=0}^{N} a_k X^k$이면 $\operatorname{ev}_{\mathbb{R}}(f) = a_0 t^0 + a_1 t^1 + \cdots + a_N t^N$이다. 따라서 $\operatorname{ev}_{\mathbb{R}}(f)$는 다항함수이다. 특히 실수 $c$에 대하여 $\operatorname{ev}_{\mathbb{R}}(c) = c\,t^0$이고, $k \ge 0$이면 $\operatorname{ev}_{\mathbb{R}}(X^k) = t^k$이다. 실수 $c$가 $f$의 근인 것은 정확히 $\operatorname{ev}_{\mathbb{R}}(f)(c) = 0$일 때이다.
   - (ii) (다항함수의 환) $\operatorname{Pol}_{\mathbb{R}}$의 두 원소 $u$, $v$에 대하여 $u + v$와 $uv$는 $\operatorname{Pol}_{\mathbb{R}}$의 원소이고, 이 덧셈과 곱셈으로 $\operatorname{Pol}_{\mathbb{R}}$는 단위원을 갖는 가환환이다. 그 $0$은 영함수 $o$이고 단위원은 $t^0$이다.
   - (iii) (환 동형사상) 각 $f$에 $\operatorname{ev}_{\mathbb{R}}(f)$를 대응시키는 함수 $\operatorname{ev}_{\mathbb{R}} : \mathbb{R}[X] \to \operatorname{Pol}_{\mathbb{R}}$는 환 동형사상이고 $\operatorname{ev}_{\mathbb{R}}(1) = t^0$이다. 곧 $f, g \in \mathbb{R}[X]$에 대하여 $\operatorname{ev}_{\mathbb{R}}(f + g) = \operatorname{ev}_{\mathbb{R}}(f) + \operatorname{ev}_{\mathbb{R}}(g)$, $\operatorname{ev}_{\mathbb{R}}(fg) = \operatorname{ev}_{\mathbb{R}}(f)\operatorname{ev}_{\mathbb{R}}(g)$이고, 모든 다항함수 $u$에 대하여 $\operatorname{ev}_{\mathbb{R}}(f) = u$인 $f \in \mathbb{R}[X]$가 정확히 하나 있다.
   - (iv) (계수와 차수) $0$ 이상인 모든 정수 $k$에서 $\operatorname{ev}_{\mathbb{R}}(f)$의 $t^k$의 계수는 $\operatorname{coef}_k(f)$이다. $f = 0$인 것은 정확히 $\operatorname{ev}_{\mathbb{R}}(f) = o$일 때이고, $f \ne 0$이면 $\deg \operatorname{ev}_{\mathbb{R}}(f) = \deg f$이며 두 최고차계수가 같다.
2. (도함수와 연속) $f \in \mathbb{R}[X]$이면 $\operatorname{ev}_{\mathbb{R}}(f) : \mathbb{R} \to \mathbb{R}$는 미분가능한 함수이고 그 도함수는 $\operatorname{ev}_{\mathbb{R}}(f')$이다. 곧 모든 실수 $c$에서 $\bigl(\operatorname{ev}_{\mathbb{R}}(f)\bigr)'(c) = f'(c)$이고, 오른쪽은 형식적 도함수 $f'$에 $c$를 대입한 값이다. 따라서 $\operatorname{ev}_{\mathbb{R}}(f)$는 연속함수이다. 또 $I$가 구간이면 제한 $\operatorname{ev}_{\mathbb{R}}(f)|_I : I \to \mathbb{R}$는 미분가능한 함수이고 모든 $c \in I$에서 그 미분계수는 $f'(c)$이며, 이 제한은 연속함수이다.
3. (복소수 계수의 다항식과 복소 다항함수) $f \in \mathbb{C}[X]$에 대하여 복소수 $z$에서의 값이 $f(z)$인 함수 $\mathbb{C} \to \mathbb{C}$를 $\operatorname{ev}_{\mathbb{C}}(f)$로 쓴다. 복소 다항함수 전체의 집합을 $\operatorname{Pol}_{\mathbb{C}}$로 쓰고, $u, v \in \operatorname{Pol}_{\mathbb{C}}$에 대하여 $u + v$와 $uv$는 복소수 $z$에서의 값이 각각 $u(z) + v(z)$, $u(z)v(z)$인 함수 $\mathbb{C} \to \mathbb{C}$이다.
   - (i) (계수로 쓴 꼴) $N$이 $0$ 이상인 정수이고 $0 \le k \le N$에서 정해진 복소수 $a_k$에 대하여 $f = \sum_{k=0}^{N} a_k X^k$이면 $\operatorname{ev}_{\mathbb{C}}(f)$는 계수가 $a_0, \dots, a_N$인 복소 다항함수이다. 곧 모든 복소수 $z$에서 $\operatorname{ev}_{\mathbb{C}}(f)(z) = \sum_{k=0}^{N} a_k z^k$이고, 오른쪽은 [[complex-finite-sum|복소수의 유한 합]]의 $0$부터의 합과 [[power-of-a-complex-number|복소수의 거듭제곱]]으로 쓴 것이다. 특히 복소수 $c$에 대하여 $\operatorname{ev}_{\mathbb{C}}(c)$는 값이 $c$인 상수함수이다.
   - (ii) (복소 다항함수의 환) $u, v \in \operatorname{Pol}_{\mathbb{C}}$이면 $u + v$와 $uv$는 $\operatorname{Pol}_{\mathbb{C}}$의 원소이고, 이 덧셈과 곱셈으로 $\operatorname{Pol}_{\mathbb{C}}$는 단위원을 갖는 가환환이다. 그 $0$은 영함수이고 단위원은 값이 $1$인 상수함수이다.
   - (iii) (환 동형사상) 각 $f$에 $\operatorname{ev}_{\mathbb{C}}(f)$를 대응시키는 함수 $\operatorname{ev}_{\mathbb{C}} : \mathbb{C}[X] \to \operatorname{Pol}_{\mathbb{C}}$는 환 동형사상이고 $1$을 값이 $1$인 상수함수로 보낸다.
   - (iv) (계수와 차수) $0$ 이상인 모든 정수 $k$에서 $\operatorname{ev}_{\mathbb{C}}(f)$의 $z^k$의 계수는 $\operatorname{coef}_k(f)$이다. $f = 0$인 것은 정확히 $\operatorname{ev}_{\mathbb{C}}(f)$가 영함수일 때이고, $f \ne 0$이면 $\deg \operatorname{ev}_{\mathbb{C}}(f) = \deg f$이며 두 최고차계수가 같다.
   - (v) (실수 계수) $\iota$는 $1$을 $1$로 보내는 환 준동형이므로 $g \in \mathbb{R}[X]$의 계수를 $\iota$로 옮긴 $g^{\iota} \in \mathbb{C}[X]$가 있다. $\operatorname{ev}_{\mathbb{C}}(g^{\iota})$는 $\operatorname{ev}_{\mathbb{R}}(g)$의 계수로 만든 복소 다항함수이다. 모든 실수 $x$에서 $g^{\iota}(\iota(x)) = \iota(g(x))$이다. 따라서 실수 $x$가 $g$의 근인 것은 정확히 $\iota(x)$가 $g^{\iota}$의 근일 때이고, $g^{\iota}$의 근 가운데 실수인 복소수는 정확히 $g$의 근 $x$를 옮긴 $\iota(x)$들이다.
4. (복소수체는 대수적으로 닫혀 있다) $f \in \mathbb{C}[X]$가 영다항식이 아니고 $d = \deg f$이며 $a$가 $f$의 최고차계수라 하자.
   - (i) (일차식 분해) $\mathbb{C}$의 원소의 길이 $d$인 열 $c_1, \dots, c_d$가 있어 $\mathbb{C}[X]$에서
     $$
     \begin{aligned}
     f &= a\,(X - c_1)(X - c_2) \\
     &\qquad \cdots (X - c_d)
     \end{aligned}
     $$
     이다. 오른쪽은 상수 다항식 $a$와, 다항식의 열 $X - c_1, \dots, X - c_d$의 곱의 곱이고, $d = 0$이면 그 곱은 빈 곱 $1$이다.
   - (ii) (근) $\mathbb{C}[X]$에서 $f = a\,(X - c_1) \cdots (X - c_d)$인 $\mathbb{C}$의 원소의 열 $c_1, \dots, c_d$에 대하여, 복소수 $z$가 $f$의 근인 것은 정확히 $z = c_j$인 $j \in \{1, \dots, d\}$가 있을 때이다. 따라서 $f$의 $\mathbb{C}$ 안의 근 전체의 집합은 $\{c_1, \dots, c_d\}$이고, $d \ge 1$이면 $f$는 $\mathbb{C}$ 안에 근을 갖는다.
   - (iii) (부분환 위의 다항식) $F$가 $1 \in F$인 $\mathbb{C}$의 [[subring|부분환]]이고 $f \in F[X]$가 영다항식이 아니면, [[polynomial-ring|다항식환]]의 (7)에 의해 $f \in \mathbb{C}[X]$이고 (i)과 (ii)가 성립하며, $d$와 $a$는 $f$를 $F[X]$의 원소로 본 차수와 최고차계수와 같다.
5. (실수와 복소수의 합, 곱, 거듭제곱, 정수배)
   - (i) (실수의 합) 환 $\mathbb{R}$에서, $1 \le m$이고 $m - 1 \le n$인 정수 $m$, $n$과 $m \le k \le n$에서 정해진 실수 $t_k$에 대하여 이 강의의 $\sum_{k=m}^{n} t_k$는 [[finite-sum-of-reals|실수의 유한 합]]의 $\sum_{k=m}^{n} t_k$(범위에서만 정해진 항의 합)와 같다. $-1$ 이상인 정수 $K$와 $0 \le k \le K$에서 정해진 실수 $c_k$에 대하여 이 강의의 $\sum_{k=0}^{K} c_k$는 [[series-indexed-from-zero|0부터 번호가 붙은 수열과 급수]]의 $\sum_{k=0}^{K} c_k$와 같다.
   - (ii) (실수의 곱, 거듭제곱, 정수배) 환 $\mathbb{R}$에서 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 곱과 같고, 실수 $a$와 $0$ 이상인 정수 $k$에 대하여 $a^k$는 [[power-of-a-real-number|실수의 거듭제곱]]의 $a^k$와 같다. 정수 $q$와 실수 $a$에 대하여 정수배 $q \cdot a$는 실수의 곱 $qa$이다.
   - (iii) (복소수의 합) 체 $\mathbb{C}$에서, $1 \le m$이고 $m - 1 \le n$인 정수 $m$, $n$과 $m \le k \le n$에서 정해진 복소수 $z_k$에 대하여 이 강의의 $\sum_{k=m}^{n} z_k$는 [[complex-finite-sum|복소수의 유한 합]]의 $\sum_{k=m}^{n} z_k$와 같다. $-1$ 이상인 정수 $K$와 $0 \le k \le K$에서 정해진 복소수 $w_k$에 대하여 이 강의의 $\sum_{k=0}^{K} w_k$는 그 항목의 $0$부터의 합 $\sum_{k=0}^{K} w_k$와 같다.
   - (iv) (복소수의 곱, 거듭제곱, 정수배) 체 $\mathbb{C}$에서 복소수의 열의 곱은 [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 곱과 같고, 복소수 $z$와 $0$ 이상인 정수 $k$에 대하여 $z^k$는 [[power-of-a-complex-number|복소수의 거듭제곱]]의 $z^k$와 같다. 정수 $q$와 복소수 $z$에 대하여 정수배 $q \cdot z$는 $\iota(q)\,z$이다.
   
   따라서 $\mathbb{R}$와 $\mathbb{C}$에서는 이 강의의 합의 기호, 열의 곱, 거듭제곱, 정수배를 실수와 복소수를 다룬 다른 강의의 것으로 읽어도 값이 같다.
6. (켤레) 켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$는 $1$을 $1$로 보내는 환 동형사상이다. $f \in \mathbb{C}[X]$에 대하여, 계수를 이 함수로 옮긴 다항식, 곧 $0$ 이상인 모든 정수 $n$에서 $\operatorname{coef}_n(\overline{f}) = \overline{\operatorname{coef}_n(f)}$인 $\mathbb{C}[X]$의 원소를 $\overline{f}$로 쓴다. $\overline{f}$는 다항식이고, 복소수 강의에서 함수 $f$에 대해 $z$에서의 값이 $\overline{f(z)}$인 함수를 $\overline{f}$로 쓰는 것과 다른 대상이다. 아래 (i)에 의해 다항식 $\overline{f}$에 $z$를 대입한 값은 $\overline{f(\overline{z})}$이다.
   - (i) 모든 복소수 $c$에서 $\overline{f(c)} = \overline{f}(\overline{c})$이다.
   - (ii) $f$의 계수가 모두 실수인 복소수이면 $\overline{f} = f$이고, 복소수 $c$가 $f$의 근이면 $\overline{c}$도 $f$의 근이다. $c$가 실수인 복소수가 아니면 $\overline{c} \ne c$이다.
   - (iii) $g \in \mathbb{R}[X]$이면 $g^{\iota}$의 계수는 모두 실수인 복소수이다. 따라서 (ii)가 $g^{\iota}$에 대하여 성립한다.
7. (이항계수) $n$이 $0$ 이상인 정수이다.
   - (i) $0$ 이상인 모든 정수 $k$에서 정수 $C(n, k)$는 실수로서 [[binomial-series|이항급수]]의 일반화한 이항계수 $\binom{n}{k}$($\alpha = n$)와 같다.
   - (ii) $0 \le k \le n$이면 [[factorial-from-zero|0부터의 계승]]에 대하여 $k! \cdot (n - k)! \cdot C(n, k) = n!$이고, 따라서 $C(n, k) = n! \cdot \bigl(k!\,(n - k)!\bigr)^{-1}$이다.
   - (iii) 복소수 $z$, $w$와 $0 \le k \le n$에 대하여 환 $\mathbb{C}$에서
     $$
     \begin{aligned}
     &C(n, k) \cdot (z^k w^{n-k}) \\
     &\quad = \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}
     \end{aligned}
     $$
     이다(오른쪽의 실수는 $\iota$로 옮겨 읽는다). 따라서 [[binomial-theorem|이항정리]]의 (1)을 환 $\mathbb{C}$에 쓴 등식의 오른쪽은, (5)에 의해 [[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]의 (2)의 마지막 식과 같은 복소수이다. 실수 $x$, $y$와 환 $\mathbb{R}$에서도 $C(n, k) \cdot (x^k y^{n-k}) = \frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}$이고, 이항정리의 (1)을 환 $\mathbb{R}$에 쓴 등식의 오른쪽은 그 항목의 (3)의 둘째 등식의 오른쪽과 같은 실수이다.
:::

:::english
The polynomial ring $R[X]$, the coefficients $\operatorname{coef}_n$, constant polynomials and the reading convention, and the indeterminate $X$ are those of the entry on polynomial rings; the degree $\deg$ and leading coefficient are those of the entry on the degree of a polynomial; the value $f(r)$, roots, and the polynomial $f^{\varphi}$ with transported coefficients are those of the entry on the evaluation homomorphism; the formal derivative $f'$ is that of the entry on formal derivatives. The summation sign $\sum$ and integer multiples $q \cdot a$ in a ring are those of the entry on finite sums in a ring, products of sequences and powers $a^k$ are those of the entry on finite products and powers in a commutative ring, and binomial coefficients $C(n, k)$ are those of the entry on binomial coefficients. The ring $\mathbb{R}$ is that of (2) of the entry on examples of rings; the field $\mathbb{C}$, the map $\iota : \mathbb{R} \to \mathbb{C}$, real complex numbers and the convention of writing real numbers in place of complex numbers are those of the entry on the complex field, and conjugates $\overline{z}$ are those of the entry on complex conjugates. $\mathbb{R}^{\mathbb{R}}$ and its addition are those of the entry on spaces of real-valued functions; polynomial functions, $t^k$, $\mathcal{P}_N$, the zero function $o$, real sequences indexed from $0$ and representations $a_0 t^0 + \cdots + a_N t^N$ are those of the entry on polynomial functions; products of functions are those of the entry on products of polynomial functions; the coefficient of $t^k$, the degree and the leading coefficient are those of the entry on coefficients of polynomial functions. Complex polynomial functions, their coefficients, and "the complex polynomial function made from the coefficients of $f$" are those of the entry on complex polynomial functions; the coefficient of $z^k$, the degree and the leading coefficient are those of the entry on growth of complex polynomials and uniqueness of coefficients. Intervals, differentiability and derivatives are those of the entry on derivatives, and continuity is that of the entry on continuous functions.

1. (Polynomials with real coefficients and polynomial functions) For $f \in \mathbb{R}[X]$, let $\operatorname{ev}_{\mathbb{R}}(f)$ be the function $\mathbb{R} \to \mathbb{R}$ whose value at a real number $x$ is $f(x)$. Let $\operatorname{Pol}_{\mathbb{R}}$ be the set of all polynomial functions.
   - (i) (Form in coefficients) If $N$ is an integer $\ge 0$ and $f = \sum_{k=0}^{N} a_k X^k$ for real numbers $a_k$ given for $0 \le k \le N$, then $\operatorname{ev}_{\mathbb{R}}(f) = a_0 t^0 + a_1 t^1 + \cdots + a_N t^N$. Hence $\operatorname{ev}_{\mathbb{R}}(f)$ is a polynomial function. In particular, for a real number $c$ we have $\operatorname{ev}_{\mathbb{R}}(c) = c\,t^0$, and $\operatorname{ev}_{\mathbb{R}}(X^k) = t^k$ for $k \ge 0$. A real number $c$ is a root of $f$ exactly when $\operatorname{ev}_{\mathbb{R}}(f)(c) = 0$.
   - (ii) (The ring of polynomial functions) For two elements $u$, $v$ of $\operatorname{Pol}_{\mathbb{R}}$, $u + v$ and $uv$ are elements of $\operatorname{Pol}_{\mathbb{R}}$, and with this addition and multiplication $\operatorname{Pol}_{\mathbb{R}}$ is a commutative ring with unity. Its $0$ is the zero function $o$ and its unity is $t^0$.
   - (iii) (Ring isomorphism) The map $\operatorname{ev}_{\mathbb{R}} : \mathbb{R}[X] \to \operatorname{Pol}_{\mathbb{R}}$ sending each $f$ to $\operatorname{ev}_{\mathbb{R}}(f)$ is a ring isomorphism, and $\operatorname{ev}_{\mathbb{R}}(1) = t^0$. That is, for $f, g \in \mathbb{R}[X]$ we have $\operatorname{ev}_{\mathbb{R}}(f + g) = \operatorname{ev}_{\mathbb{R}}(f) + \operatorname{ev}_{\mathbb{R}}(g)$ and $\operatorname{ev}_{\mathbb{R}}(fg) = \operatorname{ev}_{\mathbb{R}}(f)\operatorname{ev}_{\mathbb{R}}(g)$, and for every polynomial function $u$ there is exactly one $f \in \mathbb{R}[X]$ with $\operatorname{ev}_{\mathbb{R}}(f) = u$.
   - (iv) (Coefficients and degree) For every integer $k \ge 0$, the coefficient of $t^k$ in $\operatorname{ev}_{\mathbb{R}}(f)$ is $\operatorname{coef}_k(f)$. We have $f = 0$ exactly when $\operatorname{ev}_{\mathbb{R}}(f) = o$, and if $f \ne 0$ then $\deg \operatorname{ev}_{\mathbb{R}}(f) = \deg f$ and the two leading coefficients are equal.
2. (Derivative and continuity) If $f \in \mathbb{R}[X]$, then $\operatorname{ev}_{\mathbb{R}}(f) : \mathbb{R} \to \mathbb{R}$ is a differentiable function and its derivative is $\operatorname{ev}_{\mathbb{R}}(f')$. That is, $\bigl(\operatorname{ev}_{\mathbb{R}}(f)\bigr)'(c) = f'(c)$ for every real number $c$, where the right side is the value of the formal derivative $f'$ at $c$. Hence $\operatorname{ev}_{\mathbb{R}}(f)$ is a continuous function. Moreover, if $I$ is an interval, then the restriction $\operatorname{ev}_{\mathbb{R}}(f)|_I : I \to \mathbb{R}$ is a differentiable function whose derivative at every $c \in I$ is $f'(c)$, and this restriction is a continuous function.
3. (Polynomials with complex coefficients and complex polynomial functions) For $f \in \mathbb{C}[X]$, let $\operatorname{ev}_{\mathbb{C}}(f)$ be the function $\mathbb{C} \to \mathbb{C}$ whose value at a complex number $z$ is $f(z)$. Let $\operatorname{Pol}_{\mathbb{C}}$ be the set of all complex polynomial functions, and for $u, v \in \operatorname{Pol}_{\mathbb{C}}$ let $u + v$ and $uv$ be the functions $\mathbb{C} \to \mathbb{C}$ whose values at a complex number $z$ are $u(z) + v(z)$ and $u(z)v(z)$ respectively.
   - (i) (Form in coefficients) If $N$ is an integer $\ge 0$ and $f = \sum_{k=0}^{N} a_k X^k$ for complex numbers $a_k$ given for $0 \le k \le N$, then $\operatorname{ev}_{\mathbb{C}}(f)$ is the complex polynomial function with coefficients $a_0, \dots, a_N$. That is, $\operatorname{ev}_{\mathbb{C}}(f)(z) = \sum_{k=0}^{N} a_k z^k$ for every complex number $z$, where the right side is written with the sum from $0$ of the entry on finite sums of complex numbers and the powers of the entry on powers of complex numbers. In particular, for a complex number $c$, $\operatorname{ev}_{\mathbb{C}}(c)$ is the constant function with value $c$.
   - (ii) (The ring of complex polynomial functions) If $u, v \in \operatorname{Pol}_{\mathbb{C}}$, then $u + v$ and $uv$ are elements of $\operatorname{Pol}_{\mathbb{C}}$, and with this addition and multiplication $\operatorname{Pol}_{\mathbb{C}}$ is a commutative ring with unity. Its $0$ is the zero function and its unity is the constant function with value $1$.
   - (iii) (Ring isomorphism) The map $\operatorname{ev}_{\mathbb{C}} : \mathbb{C}[X] \to \operatorname{Pol}_{\mathbb{C}}$ sending each $f$ to $\operatorname{ev}_{\mathbb{C}}(f)$ is a ring isomorphism, and it sends $1$ to the constant function with value $1$.
   - (iv) (Coefficients and degree) For every integer $k \ge 0$, the coefficient of $z^k$ in $\operatorname{ev}_{\mathbb{C}}(f)$ is $\operatorname{coef}_k(f)$. We have $f = 0$ exactly when $\operatorname{ev}_{\mathbb{C}}(f)$ is the zero function, and if $f \ne 0$ then $\deg \operatorname{ev}_{\mathbb{C}}(f) = \deg f$ and the two leading coefficients are equal.
   - (v) (Real coefficients) Since $\iota$ is a ring homomorphism sending $1$ to $1$, for $g \in \mathbb{R}[X]$ there is the polynomial $g^{\iota} \in \mathbb{C}[X]$ obtained by transporting the coefficients of $g$ by $\iota$. $\operatorname{ev}_{\mathbb{C}}(g^{\iota})$ is the complex polynomial function made from the coefficients of $\operatorname{ev}_{\mathbb{R}}(g)$. For every real number $x$, $g^{\iota}(\iota(x)) = \iota(g(x))$. Hence a real number $x$ is a root of $g$ exactly when $\iota(x)$ is a root of $g^{\iota}$, and the roots of $g^{\iota}$ that are real complex numbers are exactly the numbers $\iota(x)$ for the roots $x$ of $g$.
4. (The complex field is algebraically closed) Let $f \in \mathbb{C}[X]$ be a nonzero polynomial, let $d = \deg f$, and let $a$ be the leading coefficient of $f$.
   - (i) (Factorization into linear factors) There is a sequence $c_1, \dots, c_d$ of elements of $\mathbb{C}$ of length $d$ such that in $\mathbb{C}[X]$
     $$
     \begin{aligned}
     f &= a\,(X - c_1)(X - c_2) \\
     &\qquad \cdots (X - c_d).
     \end{aligned}
     $$
     The right side is the product of the constant polynomial $a$ and the product of the sequence of polynomials $X - c_1, \dots, X - c_d$; if $d = 0$, the latter product is the empty product $1$.
   - (ii) (Roots) For any sequence $c_1, \dots, c_d$ of elements of $\mathbb{C}$ with $f = a\,(X - c_1) \cdots (X - c_d)$ in $\mathbb{C}[X]$, a complex number $z$ is a root of $f$ exactly when $z = c_j$ for some $j \in \{1, \dots, d\}$. Hence the set of all roots of $f$ in $\mathbb{C}$ is $\{c_1, \dots, c_d\}$, and if $d \ge 1$ then $f$ has a root in $\mathbb{C}$.
   - (iii) (Polynomials over a subring) If $F$ is a subring of $\mathbb{C}$ with $1 \in F$ and $f \in F[X]$ is nonzero, then $f \in \mathbb{C}[X]$ by (7) of the entry on polynomial rings, (i) and (ii) hold, and $d$ and $a$ equal the degree and leading coefficient of $f$ regarded as an element of $F[X]$.
5. (Sums, products, powers and integer multiples of real and complex numbers)
   - (i) (Real sums) In the ring $\mathbb{R}$, for integers $m$, $n$ with $1 \le m$ and $m - 1 \le n$ and real numbers $t_k$ given for $m \le k \le n$, the sum $\sum_{k=m}^{n} t_k$ of this course equals the sum $\sum_{k=m}^{n} t_k$ of the entry on finite sums of real numbers (the sum of terms given only on the range). For an integer $K \ge -1$ and real numbers $c_k$ given for $0 \le k \le K$, the sum $\sum_{k=0}^{K} c_k$ of this course equals the sum $\sum_{k=0}^{K} c_k$ of the entry on sequences and series indexed from zero.
   - (ii) (Real products, powers and integer multiples) In the ring $\mathbb{R}$, the product of a sequence of real numbers equals the product of the entry on finite products of real numbers, and for a real number $a$ and an integer $k \ge 0$, $a^k$ equals the power $a^k$ of the entry on powers of real numbers. For an integer $q$ and a real number $a$, the integer multiple $q \cdot a$ is the real product $qa$.
   - (iii) (Complex sums) In the field $\mathbb{C}$, for integers $m$, $n$ with $1 \le m$ and $m - 1 \le n$ and complex numbers $z_k$ given for $m \le k \le n$, the sum $\sum_{k=m}^{n} z_k$ of this course equals the sum $\sum_{k=m}^{n} z_k$ of the entry on finite sums of complex numbers. For an integer $K \ge -1$ and complex numbers $w_k$ given for $0 \le k \le K$, the sum $\sum_{k=0}^{K} w_k$ of this course equals the sum from $0$, $\sum_{k=0}^{K} w_k$, of that entry.
   - (iv) (Complex products, powers and integer multiples) In the field $\mathbb{C}$, the product of a sequence of complex numbers equals the product of the entry on the complex factor theorem and factorization, and for a complex number $z$ and an integer $k \ge 0$, $z^k$ equals the power $z^k$ of the entry on powers of complex numbers. For an integer $q$ and a complex number $z$, the integer multiple $q \cdot z$ is $\iota(q)\,z$.
   
   Hence in $\mathbb{R}$ and $\mathbb{C}$ the summation sign, products of sequences, powers and integer multiples of this course may be read as those of the other courses on real and complex numbers without changing their values.
6. (Conjugates) Complex conjugation $\mathbb{C} \to \mathbb{C}$ is a ring isomorphism sending $1$ to $1$. For $f \in \mathbb{C}[X]$, let $\overline{f}$ be the polynomial obtained by transporting the coefficients by this map, that is, the element of $\mathbb{C}[X]$ with $\operatorname{coef}_n(\overline{f}) = \overline{\operatorname{coef}_n(f)}$ for every integer $n \ge 0$. $\overline{f}$ is a polynomial, a different object from the function whose value at $z$ is $\overline{f(z)}$, which the course on complex numbers denotes by $\overline{f}$ for a function $f$. By (i) below, the value of the polynomial $\overline{f}$ at $z$ is $\overline{f(\overline{z})}$.
   - (i) $\overline{f(c)} = \overline{f}(\overline{c})$ for every complex number $c$.
   - (ii) If all coefficients of $f$ are real complex numbers, then $\overline{f} = f$, and if a complex number $c$ is a root of $f$, then so is $\overline{c}$. If $c$ is not a real complex number, then $\overline{c} \ne c$.
   - (iii) If $g \in \mathbb{R}[X]$, then all coefficients of $g^{\iota}$ are real complex numbers. Hence (ii) holds for $g^{\iota}$.
7. (Binomial coefficients) Let $n$ be an integer $\ge 0$.
   - (i) For every integer $k \ge 0$, the integer $C(n, k)$, as a real number, equals the generalized binomial coefficient $\binom{n}{k}$ (with $\alpha = n$) of the entry on the binomial series.
   - (ii) If $0 \le k \le n$, then for the factorials of the entry on factorials from zero, $k! \cdot (n - k)! \cdot C(n, k) = n!$, and hence $C(n, k) = n! \cdot \bigl(k!\,(n - k)!\bigr)^{-1}$.
   - (iii) For complex numbers $z$, $w$ and $0 \le k \le n$, in the ring $\mathbb{C}$
     $$
     \begin{aligned}
     &C(n, k) \cdot (z^k w^{n-k}) \\
     &\quad = \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}
     \end{aligned}
     $$
     (the real number on the right is read through $\iota$). Hence the right side of the identity obtained by applying (1) of the binomial theorem in the ring $\mathbb{C}$ is, by (5), the same complex number as the last expression in (2) of the entry on the factorial form of the binomial expansion. For real numbers $x$, $y$ and the ring $\mathbb{R}$ we likewise have $C(n, k) \cdot (x^k y^{n-k}) = \frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}$, and the right side of (1) of the binomial theorem applied in the ring $\mathbb{R}$ is the same real number as the right side of the second identity in (3) of that entry.
:::

## 직관

이 강의의 다항식은 계수의 열입니다. 수를 넣어 값을 얻는 함수가 아닙니다. 선형대수 2 강의의 다항함수와 복소수 강의의 복소 다항함수는 함수입니다. 요리법과 그 요리법으로 만든 음식에 비유할 수 있습니다. 요리법(계수의 열)이 다르면 보통 음식(함숫값)도 다르지만, 재료가 몇 가지 없는 부엌에서는 다른 요리법이 같은 음식을 낼 수 있습니다. 실제로 $\mathbb{Z}_2$ 위에서는 $X^2 + X$와 영다항식이 다른 다항식이지만 두 원소에서 값이 모두 $[0]$입니다([[polynomial-ring-examples|다항식환의 예]]의 (3)). 이 항목은 $\mathbb{R}$와 $\mathbb{C}$에서는 그런 일이 없다는 것을 보입니다. 비유에서 "부엌"은 계수와 대입하는 수가 사는 환이고, "같은 음식"은 모든 점에서 값이 같은 것입니다.

그래서 다항식에 그 함수를 대응시키는 $\operatorname{ev}_{\mathbb{R}}$, $\operatorname{ev}_{\mathbb{C}}$는 합과 곱을 지키는 일대일 대응, 곧 환 동형사상입니다. 다항식과 다항함수를 같은 것이라 하지 않고 이 동형사상으로 옮겨 다룹니다. 계수와 차수가 같다는 것은 두 강의에서 이미 증명한 "계수의 유일성"에서 나옵니다. 다른 강의의 결과를 이 강의의 다항식으로 가져올 때는 이 동형사상을 거쳐 옵니다. 복소수 강의의 [[fundamental-theorem-of-algebra|대수학의 기본정리]]와 인수분해가 (4)가 되고, 해석학의 미분이 (2)가 되고, 켤레가 (6)이 됩니다.

이 강의의 합의 기호, 곱, 거듭제곱, 이항계수는 환에서 새로 정의한 것이라 실수와 복소수를 다룬 다른 강의(해석학 입문, 리만 적분, 선형대수 2, 급수와 멱급수, 복소수)의 같은 이름의 것과 정의가 다릅니다. (5)와 (7)은 둘이 같은 수를 준다는 것을 보여, 실수나 복소수에서 계산할 때 어느 쪽으로 읽어도 되게 합니다.

## 증명

:::idea
(5)와 (7)은 양쪽이 같은 점화식(빈 합, 끝항 떼기, 거듭제곱의 점화식, 파스칼 규칙과 흡수 등식)을 만족한다는 것을 보이는 귀납법이다. (1)과 (3)은 대입이 환 준동형이라는 것으로 합과 곱을 지키고, 계수의 유일성으로 단사임을 보이며, 함수 쪽의 환의 법칙은 전사인 사상으로 다항식환의 법칙을 옮겨 얻는다. (2)는 계수로 쓴 꼴의 끝항에 대한 귀납법, (4)는 복소 인수분해를 동형사상으로 옮긴 것, (6)은 대입과 계수 사상의 맞물림이다.
:::

:::hint
$\operatorname{ev}_{\mathbb{R}}(f) = o$이면 $f$를 계수로 쓴 꼴 $\sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$에 (1)의 (i)을 쓰고, 다항함수의 계수의 유일성을 쓴다.
:::

:::hint
$(k + 1) \cdot C(n, k + 1) = (n - k) \cdot C(n, k)$를 흡수 등식과 대칭으로 보이면, 일반화한 이항계수의 점화식과 같은 점화식이 된다.
:::

:::proof
**쓰는 사실.** 아래에서 "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]], "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]], "다항식환의 (n)"은 [[polynomial-ring|다항식환]], "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]], "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]], "형식적 도함수의 (n)"은 [[formal-derivative|형식적 도함수]], "준동형의 (n)"은 [[ring-homomorphism|환 준동형]], "계수의 (n)"은 [[binomial-coefficient|이항계수]]의 진술의 번호이다. 실수의 계산 법칙 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 정수 $j$가 $j \le l$이거나 $l < j$ 가운데 정확히 하나라는 것과 $0 < j$인 정수는 $1 \le j$라는 것은 [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)이다. 환 $\mathbb{R}$의 덧셈과 곱셈은 실수의 덧셈과 곱셈이고 $0$, $1$, $-a$는 실수의 것이다([[ring-examples|환의 예]]의 (2)). [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$는 체이므로 단위원을 갖는 가환환이고 [[field|가역원과 체]]의 (3)에 의해 [[integral-domain|정역]]이며, 그 $0$, $1$, 덧셈, 곱셈은 복소수의 것이다. 함수가 같은 것은 정확히 정의역의 모든 점에서 값이 같을 때이다([[function|함수]]의 같음). [[real-function-space|실숫값 함수의 공간]]의 함수의 합, [[product-of-polynomial-functions|다항함수의 곱]]의 함수의 곱, [[real-valued-function|실함수]]의 (4)의 합과 상수배와 곱은 모두 점마다의 합, 상수배, 곱이므로, 같은 두 함수에 대하여 같은 함수이다.

**(가) 옮기기.** $A$가 단위원 $1$을 갖는 가환환이고, $P$가 집합이며 $\oplus$, $\otimes$가 $P$ 위의 두 이항연산이고, 전사인 함수 $\theta : A \to P$가 모든 $a, b \in A$에서 $\theta(a + b) = \theta(a) \oplus \theta(b)$, $\theta(ab) = \theta(a) \otimes \theta(b)$를 만족하며 $\theta(1) \ne \theta(0)$이라 하자. 그러면 $(P, \oplus, \otimes)$는 단위원 $\theta(1)$을 갖는 가환환이고 그 $0$은 $\theta(0)$이며, $\theta$는 환 준동형이다. 증명: $u, v, w \in P$이면 $\theta$가 전사이므로 $\theta(a) = u$, $\theta(b) = v$, $\theta(c) = w$인 $a, b, c \in A$가 있다. 그러면 $(u \oplus v) \oplus w = \theta((a + b) + c) = \theta(a + (b + c)) = u \oplus (v \oplus w)$이고, 같은 계산으로 $u \oplus v = \theta(a + b) = \theta(b + a) = v \oplus u$, $(u \otimes v) \otimes w = \theta((ab)c) = \theta(a(bc)) = u \otimes (v \otimes w)$, $u \otimes v = \theta(ab) = \theta(ba) = v \otimes u$, $u \otimes (v \oplus w) = \theta(a(b + c)) = \theta(ab + ac) = (u \otimes v) \oplus (u \otimes w)$, $(u \oplus v) \otimes w = \theta((a + b)c) = \theta(ac + bc) = (u \otimes w) \oplus (v \otimes w)$이다. 각 계산의 가운데 등식은 환 $A$의 법칙이다. 또 $u \oplus \theta(0) = \theta(a + 0) = u$이고 $\theta(0) \oplus u = u$이며, $\theta(-a) \in P$에 대하여 $u \oplus \theta(-a) = \theta(0) = \theta(-a) \oplus u$이므로 $(P, \oplus)$는 항등원이 $\theta(0)$인 아벨군이다([[group|군]]의 정의). $\theta(1) \otimes u = \theta(1a) = u = u \otimes \theta(1)$이고 $\theta(1) \ne \theta(0)$이므로 $\theta(1)$은 단위원이다([[ring|환]]의 정의). 처음 가정이 곧 $\theta$가 환 준동형이라는 것이다.

**(5)의 증명.** (i) $m \ge 1$, $m - 1 \le n$이고 $m \le k \le n$에서 실수 $t_k$가 정해져 있다고 하자. 자연수 $i$마다 $m \le i \le n$이면 $t_i$, 그렇지 않으면 $0$인 수열을 $(s_i)$라 하자. [[finite-sum-of-reals|실수의 유한 합]]의 "범위에서만 정해진 항의 합"과 그 항목의 (4)에 의해, $m - 1 \le l \le n$인 모든 정수 $l$에서 그 항목의 $\sum_{k=m}^{l} t_k$는 $\sum_{k=m}^{l} s_k$와 같다($m \le k \le l$에서 $s_k = t_k$이다). $0 \le j \le n - m + 1$인 정수 $j$에 대한 귀납법으로, $l = m - 1 + j$에서 이 강의의 $\sum_{k=m}^{l} t_k$가 $\sum_{k=m}^{l} s_k$와 같음을 보인다. $j = 0$이면 $l = m - 1$이고, 합의 (1)과 실수의 유한 합의 (2)에 의해 둘 다 $0$이다. $j$에서 성립하고 $j + 1 \le n - m + 1$이면 $l + 1 \le n$이고, 합의 (2)에 의해 이 강의의 합은 $\sum_{k=m}^{l+1} t_k = \sum_{k=m}^{l} t_k + t_{l+1}$이며, 실수의 유한 합의 (3)에 의해 $\sum_{k=m}^{l+1} s_k = \sum_{k=m}^{l} s_k + s_{l+1}$이다. $m \le l + 1 \le n$이므로 $s_{l+1} = t_{l+1}$이고, 귀납 가정에 의해 두 값이 같다. $j = n - m + 1$이 첫째 주장이다.

$K \ge -1$이고 $0 \le k \le K$에서 실수 $c_k$가 정해져 있으면, 합의 (5)를 $t = 1$로 쓰면 이 강의의 합에서 $\sum_{k=0}^{K} c_k = \sum_{k=1}^{K+1} c_{k-1}$이다. 오른쪽은 시작 번호가 $1$이고 $0 \le K + 1$이므로 첫째 주장에 의해 실수의 유한 합의 $\sum_{k=1}^{K+1} c_{k-1}$과 같고, 이것은 [[series-indexed-from-zero|0부터 번호가 붙은 수열과 급수]]의 "범위에서만 정해진 항의 합"의 정의에 의해 그 항목의 $\sum_{k=0}^{K} c_k$이다.

(ii) 길이 $n$에 대한 귀납법으로, 환 $\mathbb{R}$에서의 열 $a_1, \dots, a_n$의 곱(곱의 정의)이 [[finite-product-of-reals|실수의 유한 곱]]의 곱과 같음을 보인다. $n = 0$이면 곱의 (1)에 의해 환 $\mathbb{R}$의 단위원 $1$, 곧 실수 $1$이고, 실수의 유한 곱의 정의에 의해 빈 곱도 $1$이다. 길이 $n$인 모든 열에서 성립하면, 길이 $n + 1$인 열에 대하여 곱의 (2)에 의해 $a_1 \cdots a_{n+1} = (a_1 \cdots a_n)a_{n+1}$이고 실수의 유한 곱의 (1)에 의해 실수의 곱도 (처음 $n$개의 곱)$\cdot a_{n+1}$이다. 두 곳의 "처음 $n$개"는 모두 이 열의 정의역을 $\{1, \dots, n\}$으로 줄인 같은 함수이므로 귀납 가정에 의해 두 곱이 같다. 거듭제곱 $a^k$는 곱의 정의에 의해 모든 항이 $a$인 길이 $k$인 열의 곱이고, 방금 보인 것에 의해 이것은 실수의 유한 곱의 같은 열의 곱이며, 실수의 유한 곱의 (4)에 의해 [[power-of-a-real-number|실수의 거듭제곱]] $a^k$이다.

정수배 $q \cdot a$는 덧셈군 $(\mathbb{R}, +)$에서의 $a$의 $q$배이다([[ring|환]]의 정수배, [[power-in-a-group|군의 거듭제곱]]의 (4)). 그 (4)에 의해 $0 \cdot a = 0$이고 (K9)에 의해 $0a = 0$이다. 자연수 $q$에 대한 귀납법으로 $q \cdot a = qa$를 보인다. $1 \cdot a = a$이고 (K1), (K4)에 의해 $1a = a$이다. $q \cdot a = qa$이면 군의 거듭제곱의 (4)에 의해 $(q + 1) \cdot a = q \cdot a + a = qa + 1a$이고, (K12)의 (i)에 의해 이것은 $(q + 1)a$이다. 음의 정수 $-q$($q$는 자연수)에서는 군의 거듭제곱의 (4)에 의해 $(-q) \cdot a = q \cdot (-a) = q(-a)$이고, (K12)의 (ii)와 (K9)에 의해 $q(-a) = -(qa) = (-q)a$이다. 정수의 음수 $-q$는 (K7)에 의해 실수의 $-q$이다. (Z5)와 (Z1)에 의해 모든 정수는 $0$이거나 자연수이거나 자연수의 음수이므로 모든 정수 $q$에서 성립한다.

(iii) [[complex-finite-sum|복소수의 유한 합]]의 합은 시작 번호가 $1$ 이상이고 항이 범위에서만 정해진 것이다. (i)과 같은 귀납법을 쓴다. $l = m - 1$이면 합의 (1)과 그 항목의 (2)에 의해 둘 다 $0$이고, $m - 1 \le l$, $l + 1 \le n$이면 합의 (2)와 그 항목의 (2)에 의해 두 합이 모두 $\sum_{k=m}^{l} z_k + z_{l+1}$이다. 여기서 $l < n$일 때의 $\sum_{k=m}^{l} z_k$는 항을 $m \le k \le l$로 줄인 합이고, 그 항목의 (1)의 둘째 문장에 의해 그 범위의 항의 값만으로 정해진다. $0$부터의 합은 그 항목의 정의에 의해 $\sum_{k=0}^{K} w_k = \sum_{j=1}^{K+1} w_{j-1}$이고, 이 강의에서도 합의 (5)에 의해 같은 식이 성립하므로 첫째 주장에 의해 같다.

(iv) 열의 곱은 (ii)와 같은 귀납법이다. $n = 0$이면 둘 다 $1$이고([[complex-factor-theorem|복소 인수 정리와 인수분해]]의 빈 곱), 끝항 떼기는 곱의 (2)와 그 항목의 (1)의 (i)이다. 거듭제곱은 $0$ 이상인 정수 $k$에서의 값이 이 강의의 $z^k$인 함수 $p$를 두면, 곱의 (6)의 (i)에 의해 $p(0) = 1$이고 $p(k + 1) = p(k)z$이므로 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)에 의해 모든 $k$에서 $p(k)$는 그 항목의 $z^k$이다. 정수배는 덧셈군 $(\mathbb{C}, +)$에서의 정수배이므로 복소수의 유한 합의 (10)에 의해 $q \cdot z = \iota(q)z$이다.

**(7)의 증명.** (i) 먼저 $0$ 이상인 모든 정수 $k$에서 정수의 등식
$$
\begin{aligned}
&(k + 1) \cdot C(n, k + 1) \\
&\quad = (n - k) \cdot C(n, k)
\end{aligned}
$$
를 보인다. $n \ge 1$이면 계수의 (4)를 $k + 1$에 쓰면 왼쪽은 $n \cdot C(n - 1, k)$이다. 계수의 (3)에 의해 $C(n, k) = C(n, n - k)$이고, 계수의 (4)를 $n - k$에 쓰면 $(n - k) \cdot C(n, n - k) = n \cdot C(n - 1, n - k - 1)$이며, 계수의 (3)을 $n - 1 \ge 0$에 쓰면 $C(n - 1, n - k - 1) = C(n - 1, (n - 1) - (n - k - 1)) = C(n - 1, k)$이다. 따라서 오른쪽도 $n \cdot C(n - 1, k)$이다. $n = 0$이면 $k + 1 > 0$이므로 계수의 (2)에 의해 $C(0, k + 1) = 0$이고 왼쪽은 $0$이다. 오른쪽은 $k = 0$이면 $0 \cdot C(0, 0) = 0$이고, $k \ge 1$이면 계수의 (2)에 의해 $C(0, k) = 0$이므로 $0$이다.

이제 $k$에 대한 귀납법으로 실수로서 $C(n, k) = \binom{n}{k}$를 보인다. (K7)에 의해 정수는 실수이고 정수끼리의 곱은 실수의 곱과 같다. $k = 0$이면 계수의 (2)에 의해 $C(n, 0) = 1$이고 [[binomial-series|이항급수]]의 정의에 의해 $\binom{n}{0} = 1$이다. $C(n, k) = \binom{n}{k}$이면, $k + 1$은 자연수이므로 $0$이 아니고, 위의 등식의 양변에 $(k + 1)^{-1}$을 곱하면 (K1), (K2), (K8)에 의해 $C(n, k + 1) = C(n, k) \cdot (n - k)(k + 1)^{-1} = \binom{n}{k} \cdot \frac{n - k}{k + 1} = \binom{n}{k+1}$이다.

(ii) $0 \le k \le n$이라 하자. [[factorial-from-zero|0부터의 계승]]의 정의에 의해 $1$ 이상인 정수의 계승은 [[factorial|계승]]의 것이고 $0! = 1$이다. $k = 0$이면 계수의 (2)에 의해 $C(n, 0) = 1$이므로 $0! \cdot n! \cdot 1 = n!$이다. $k = n$이면 $C(n, n) = 1$이므로 $n! \cdot 0! \cdot 1 = n!$이다. 그 밖의 경우는 $1 \le k \le n - 1$이고 따라서 $n \ge 2$이므로, 계수의 (6)에 의해 $k! \cdot (n - k)! \cdot C(n, k) = n!$이다. 여기서 $k$, $n - k$, $n$은 $1$ 이상이므로 계승은 두 항목에서 같은 수이다. 0부터의 계승의 (3)에 의해 $k!$, $(n - k)!$은 $0$이 아니고 (K12)의 (vi)에 의해 $k!\,(n - k)! \ne 0$이므로, 양변에 $\bigl(k!\,(n - k)!\bigr)^{-1}$을 곱하면 둘째 등식이 나온다.

(iii) 환 $\mathbb{C}$에서 (5)의 (iv)에 의해 $C(n, k) \cdot (z^k w^{n-k}) = \iota(C(n, k))\,z^k w^{n-k}$이고, 위의 (ii)에 의해 이것은 $\iota\bigl(n! \cdot (k!\,(n - k)!)^{-1}\bigr) z^k w^{n-k}$이고, 마지막 식은 복소수체의 (3)의 약속대로 읽은 $\frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}$이다. 이항정리의 (1)을 환 $\mathbb{C}$에 쓴 등식의 오른쪽은 이 항들의 이 강의의 합 $\sum_{k=0}^{n}$이고, 거듭제곱은 (5)의 (iv)에 의해 복소수의 거듭제곱이며, 합은 (5)의 (iii)에 의해 복소수의 $0$부터의 합이므로 [[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]의 (2)의 마지막 식과 같다. 환 $\mathbb{R}$에서는 (5)의 (ii)에 의해 $C(n, k) \cdot (x^k y^{n-k}) = C(n, k)\,x^k y^{n-k}$이고 위의 (ii)에 의해 이것은 $\frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}$이며, 거듭제곱과 $0$부터의 합은 (5)의 (ii)와 (i)에 의해 실수의 것이다.

**(1)의 증명.** (i) 실수 $x$에서 대입의 (1)에 의해 $f(x) = \sum_{k=0}^{N} a_k x^k$이다(합과 거듭제곱은 환 $\mathbb{R}$에서). 합의 (5)를 $t = 1$로 쓰면 이것은 $\sum_{j=1}^{N+1} a_{j-1} x^{j-1}$이고, 합의 (1)에 의해 $j$번째 항이 $a_{j-1} x^{j-1}$인 길이 $N + 1$인 열의 합이며, 합의 (10)에 의해 이것은 [[finite-sum-of-vectors|벡터의 유한 합]]의 실수의 열의 합이다. (5)의 (ii)에 의해 $x^{j-1}$은 실수의 거듭제곱이다. [[polynomial-function|다항함수]]의 (3)에 의해 이 합은 $(a_0 t^0 + \cdots + a_N t^N)(x)$이다. 모든 실수 $x$에서 값이 같으므로 $\operatorname{ev}_{\mathbb{R}}(f) = a_0 t^0 + \cdots + a_N t^N \in \mathcal{P}_N$이고, 다항함수의 정의에 의해 $\operatorname{ev}_{\mathbb{R}}(f)$는 다항함수이다. 대입의 (1)에 의해 상수 다항식 $c$는 $c(x) = c = (c\,t^0)(x)$이고, $X^k(x) = x^k$는 (5)의 (ii)에 의해 실수의 거듭제곱이므로 $t^k(x)$이다. 마지막 문장은 $\operatorname{ev}_{\mathbb{R}}(f)(c) = f(c)$에서 나온다.

(ii)와 (iii) 먼저 $f, g \in \mathbb{R}[X]$에 대하여, 모든 실수 $x$에서 대입의 (2)에 의해 $(f + g)(x) = f(x) + g(x)$, $(fg)(x) = f(x)g(x)$이므로 $\operatorname{ev}_{\mathbb{R}}(f + g) = \operatorname{ev}_{\mathbb{R}}(f) + \operatorname{ev}_{\mathbb{R}}(g)$, $\operatorname{ev}_{\mathbb{R}}(fg) = \operatorname{ev}_{\mathbb{R}}(f)\operatorname{ev}_{\mathbb{R}}(g)$이다(오른쪽은 함수의 합과 곱). 또 영다항식 $0$과 $1$은 상수 다항식이므로 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(0) = 0\,t^0 = o$이고 $\operatorname{ev}_{\mathbb{R}}(1) = 1\,t^0 = t^0$이다. 다음으로 $u \in \operatorname{Pol}_{\mathbb{R}}$이면 $u \in \mathcal{P}_N$인 $N$이 있고, 다항함수의 진술에 의해 $u = a_0 t^0 + \cdots + a_N t^N$인 $0$부터 번호가 붙은 실수의 열이 있다. $f = \sum_{k=0}^{N} a_k X^k$로 두면 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(f) = u$이다. 곧 $\operatorname{ev}_{\mathbb{R}} : \mathbb{R}[X] \to \operatorname{Pol}_{\mathbb{R}}$는 전사이다.

$u, v \in \operatorname{Pol}_{\mathbb{R}}$이면 $\operatorname{ev}_{\mathbb{R}}(f) = u$, $\operatorname{ev}_{\mathbb{R}}(g) = v$인 $f$, $g$가 있고, $u + v = \operatorname{ev}_{\mathbb{R}}(f + g)$와 $uv = \operatorname{ev}_{\mathbb{R}}(fg)$는 (i)에 의해 다항함수이다. 따라서 함수의 합과 곱을 $\operatorname{Pol}_{\mathbb{R}}$로 제한한 것은 $\operatorname{Pol}_{\mathbb{R}}$ 위의 두 이항연산이다. $t^0(0) = 1 \ne 0 = o(0)$((K4))이므로 $\operatorname{ev}_{\mathbb{R}}(1) = t^0 \ne o = \operatorname{ev}_{\mathbb{R}}(0)$이다. (가)를 $A = \mathbb{R}[X]$(다항식환의 (1)에 의해 단위원을 갖는 가환환), $P = \operatorname{Pol}_{\mathbb{R}}$, $\theta = \operatorname{ev}_{\mathbb{R}}$에 쓰면 $\operatorname{Pol}_{\mathbb{R}}$는 단위원 $t^0$을 갖는 가환환이고 그 $0$은 $o$이며, $\operatorname{ev}_{\mathbb{R}}$는 전사인 환 준동형이다. 이것이 (ii)이다.

단사를 보인다. $\operatorname{ev}_{\mathbb{R}}(f) = o$라 하자. $f$는 다항식이므로 $n > N$에서 $\operatorname{coef}_n(f) = 0$인 $N \ge 0$이 있고, 다항식환의 (5)의 (ii)에 의해 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$이다. (i)에 의해 $o = \operatorname{coef}_0(f)\,t^0 + \cdots + \operatorname{coef}_N(f)\,t^N$이고, 벡터의 유한 합의 (C3)에 의해 $o = 0\,t^0 + \cdots + 0\,t^N$이다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (i)에 의해 $0 \le k \le N$에서 $\operatorname{coef}_k(f) = 0$이고, $k > N$에서도 $0$이므로 $f = 0$이다. 따라서 $\operatorname{Ker} \operatorname{ev}_{\mathbb{R}} = \{0\}$이고 준동형의 (2)에 의해 단사이다. 전단사인 환 준동형이므로 환 동형사상이다. 전단사이므로 다항함수 $u$마다 $\operatorname{ev}_{\mathbb{R}}(f) = u$인 $f$가 정확히 하나 있다.

(iv) 위와 같이 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$로 쓰면 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(f) = \operatorname{coef}_0(f)\,t^0 + \cdots + \operatorname{coef}_N(f)\,t^N \in \mathcal{P}_N$이다. 다항함수의 계수와 차수의 (2)의 (iii)에 의해 $k \le N$이면 $t^k$의 계수는 $\operatorname{coef}_k(f)$이고, $k > N$이면 $t^k$의 계수는 $0 = \operatorname{coef}_k(f)$이다. $\operatorname{ev}_{\mathbb{R}}(0) = o$와 단사에 의해 $f = 0$인 것은 정확히 $\operatorname{ev}_{\mathbb{R}}(f) = o$일 때이다. $f \ne 0$이면 $\operatorname{ev}_{\mathbb{R}}(f) \ne o$이고, 계수가 $0$이 아닌 번호의 집합 $\{k : \operatorname{coef}_k(f) \ne 0\}$과 $\{k : \operatorname{ev}_{\mathbb{R}}(f)\text{의 } t^k\text{의 계수} \ne 0\}$은 같은 집합이므로 두 최대 원소가 같다. 곧 $\deg f = \deg \operatorname{ev}_{\mathbb{R}}(f)$이고(차수의 정의와 다항함수의 계수와 차수의 (4)), 최고차계수는 그 번호의 계수이므로 같다.

**(2)의 증명.** [[interval|구간]]의 (2)에 의해 $\mathbb{R}$는 구간이므로 $\mathbb{R}$ 위의 실함수에 [[derivative|미분계수와 도함수]]를 쓸 수 있다. 다항식 $f$는 어떤 $N$에 대하여 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$로 쓰이므로(다항식환의 (5)의 (ii)), $N$에 대한 귀납법으로 다음을 보이면 된다: $0 \le k \le N$에서 정해진 모든 실수 $a_k$에 대하여 $f_N = \sum_{k=0}^{N} a_k X^k$이면 $\operatorname{ev}_{\mathbb{R}}(f_N)$은 미분가능한 함수이고 그 도함수는 $\operatorname{ev}_{\mathbb{R}}(f_N')$이다.

$N = 0$이면 합의 (1)과 다항식환의 (4)의 (iii)에 의해 $f_0 = a_0 X^0 = a_0$이고, (1)의 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(f_0) = a_0 t^0$은 값이 $a_0$인 상수함수이다. 미분계수와 도함수의 (1)에 의해 이것은 미분가능한 함수이고 도함수는 모든 값이 $0$인 함수 $o$이다. 형식적 도함수의 (1)에 의해 $f_0' = 0$이고 $\operatorname{ev}_{\mathbb{R}}(0) = o$이다.

$N$에서 성립한다고 하고 $f_{N+1} = \sum_{k=0}^{N+1} a_k X^k$라 하자. 합의 (2)에 의해 $f_{N+1} = f_N + a_{N+1} X^{N+1}$이다($f_N$은 항을 $0 \le k \le N$으로 줄인 합). (1)의 (iii)과 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(a_{N+1} X^{N+1}) = (a_{N+1} t^0)\,t^{N+1}$이고, 다항함수의 곱의 (1)의 $(\alpha f)g = \alpha(fg)$와 $t^0 t^{N+1} = t^{N+1}$에 의해 이것은 $a_{N+1} t^{N+1}$이다. 따라서 $\operatorname{ev}_{\mathbb{R}}(f_{N+1}) = \operatorname{ev}_{\mathbb{R}}(f_N) + a_{N+1} t^{N+1}$이다. [[derivative-of-power|거듭제곱의 미분]]의 $p_{N+1}$은 $x$에서의 값이 $x^{N+1}$인 함수이므로 $t^{N+1}$과 같은 함수이고, 그 (1)에 의해 미분가능한 함수이며 $N + 1 \ge 1$이므로 도함수는 $(N + 1)\,p_N = (N + 1)\,t^N$이다. 귀납 가정과 [[derivative-rules|미분법의 규칙]]의 (6)에 의해 $\operatorname{ev}_{\mathbb{R}}(f_{N+1})$은 미분가능한 함수이고, $a_{N+1}\bigl((N + 1)\,t^N\bigr) = \bigl(a_{N+1}(N + 1)\bigr)\,t^N$((K2))이므로 도함수는
$$
\begin{aligned}
&\operatorname{ev}_{\mathbb{R}}(f_N') \\
&\quad + \bigl(a_{N+1}(N + 1)\bigr)\,t^N
\end{aligned}
$$
이다. 한편 형식적 도함수의 (2)에 의해 $f_{N+1}' = f_N' + a_{N+1}\bigl((N + 1) \cdot X^N\bigr)$이다. [[characteristic-of-a-ring|환의 표수]]의 (1)에 의해 $(N + 1) \cdot X^N = ((N + 1) \cdot 1)\,X^N$이고, 준동형의 (1)을 다항식환의 (3)의 $\kappa$에 쓰면 $\mathbb{R}[X]$의 $(N + 1) \cdot 1$은 상수 다항식 $(N + 1) \cdot 1_{\mathbb{R}}$이며, (5)의 (ii)에 의해 이것은 실수 $N + 1$이다. 따라서 읽는 약속(다항식환의 (3)의 (iv))에 의해 $a_{N+1}\bigl((N + 1) \cdot X^N\bigr) = \bigl(a_{N+1}(N + 1)\bigr) X^N$이고, 위와 같이 $\operatorname{ev}_{\mathbb{R}}$으로 옮기면 $\bigl(a_{N+1}(N + 1)\bigr)\,t^N$이다. (1)의 (iii)에 의해 $\operatorname{ev}_{\mathbb{R}}(f_{N+1}') = \operatorname{ev}_{\mathbb{R}}(f_N') + \bigl(a_{N+1}(N + 1)\bigr)\,t^N$이므로 도함수와 같다. 이것으로 귀납이 끝난다.

$\operatorname{ev}_{\mathbb{R}}(f_N')$의 $c$에서의 값은 $f'(c)$이므로 $\bigl(\operatorname{ev}_{\mathbb{R}}(f)\bigr)'(c) = f'(c)$이다. [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 $\operatorname{ev}_{\mathbb{R}}(f)$는 [[continuous-function|연속함수]]이다. $I$가 구간이면 $I \subseteq \mathbb{R}$이므로 미분계수와 도함수의 (2)에 의해 제한은 미분가능한 함수이고 $c \in I$에서의 미분계수는 $f'(c)$이며, 다시 미분가능하면 연속의 (2)에 의해 연속함수이다.

**(3)의 증명.** (i) 복소수 $z$에서 대입의 (1)에 의해 $f(z) = \sum_{k=0}^{N} a_k z^k$이고(합과 거듭제곱은 환 $\mathbb{C}$에서), (5)의 (iii)과 (iv)에 의해 이것은 복소수의 $0$부터의 합과 복소수의 거듭제곱으로 쓴 $\sum_{k=0}^{N} a_k z^k$이다. [[complex-polynomial-function|복소 다항함수]]의 정의에 의해 $\operatorname{ev}_{\mathbb{C}}(f)$는 계수가 $a_0, \dots, a_N$인 복소 다항함수이다. 대입의 (1)에 의해 상수 다항식 $c$는 모든 $z$에서 $c(z) = c$이다.

(ii)와 (iii) 대입의 (2)에 의해 모든 $z$에서 $(f + g)(z) = f(z) + g(z)$, $(fg)(z) = f(z)g(z)$이므로 $\operatorname{ev}_{\mathbb{C}}(f + g) = \operatorname{ev}_{\mathbb{C}}(f) + \operatorname{ev}_{\mathbb{C}}(g)$, $\operatorname{ev}_{\mathbb{C}}(fg) = \operatorname{ev}_{\mathbb{C}}(f)\operatorname{ev}_{\mathbb{C}}(g)$이다. (i)에 의해 $\operatorname{ev}_{\mathbb{C}}(0)$은 영함수이고 $\operatorname{ev}_{\mathbb{C}}(1)$은 값이 $1$인 상수함수이며, $1 \ne 0$이므로 둘은 다르다. 복소 다항함수 $u$가 모든 $z$에서 $u(z) = \sum_{k=0}^{d} a_k z^k$이면 $f = \sum_{k=0}^{d} a_k X^k$에 대하여 (i)에 의해 $\operatorname{ev}_{\mathbb{C}}(f) = u$이므로 $\operatorname{ev}_{\mathbb{C}}$는 $\operatorname{Pol}_{\mathbb{C}}$ 위로의 전사이다. 따라서 $u, v \in \operatorname{Pol}_{\mathbb{C}}$이면 $\operatorname{ev}_{\mathbb{C}}(f) = u$, $\operatorname{ev}_{\mathbb{C}}(g) = v$인 $f$, $g$가 있고 $u + v = \operatorname{ev}_{\mathbb{C}}(f + g)$, $uv = \operatorname{ev}_{\mathbb{C}}(fg)$는 (i)에 의해 복소 다항함수이다. (가)를 $A = \mathbb{C}[X]$, $P = \operatorname{Pol}_{\mathbb{C}}$, $\theta = \operatorname{ev}_{\mathbb{C}}$에 쓰면 (ii)가 나오고 $\operatorname{ev}_{\mathbb{C}}$는 전사인 환 준동형이다. 단사는 다음과 같다. $\operatorname{ev}_{\mathbb{C}}(f)$가 영함수이면 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$에 (i)을 써서 모든 $z$에서 $\sum_{k=0}^{N} \operatorname{coef}_k(f) z^k = 0$이고, [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (2)의 (i)에 의해 모든 $\operatorname{coef}_k(f)$가 $0$이므로 $f = 0$이다.

(iv) (i)에 의해 $\operatorname{ev}_{\mathbb{C}}(f)$는 끝 번호가 $N$이고 계수가 $\operatorname{coef}_0(f), \dots, \operatorname{coef}_N(f)$인 표현을 가지므로, 복소 다항함수의 증가와 계수의 유일성의 (2)의 계수의 정의에 의해 $z^k$의 계수는 $k \le N$이면 $\operatorname{coef}_k(f)$, $k > N$이면 $0 = \operatorname{coef}_k(f)$이다. $\operatorname{ev}_{\mathbb{C}}(0)$이 영함수이고 $\operatorname{ev}_{\mathbb{C}}$가 단사이므로 $f = 0$인 것은 정확히 $\operatorname{ev}_{\mathbb{C}}(f)$가 영함수일 때이다. $f \ne 0$이면 계수가 $0$이 아닌 번호의 집합이 $f$와 $\operatorname{ev}_{\mathbb{C}}(f)$에서 같으므로, 차수의 정의와 복소 다항함수의 증가와 계수의 유일성의 (3)에 의해 두 차수는 그 집합의 최대 원소로 같고, 최고차계수는 그 번호의 계수로 같다.

(v) [[complex-field|복소수체]]의 (2)에 의해 $\iota$는 환 준동형이고 $\iota(1) = 1$이다. $g = \sum_{k=0}^{N} a_k X^k$($a_k$는 실수)로 쓰면 대입의 (3)에 의해 $g^{\iota} = \sum_{k=0}^{N} \iota(a_k) X^k$이고, (i)에 의해 $\operatorname{ev}_{\mathbb{C}}(g^{\iota})$는 계수가 $\iota(a_0), \dots, \iota(a_N)$인 복소 다항함수이다. (1)의 (i)에 의해 $\operatorname{ev}_{\mathbb{R}}(g) = a_0 t^0 + \cdots + a_N t^N$이고, 복소 다항함수의 (7)의 (ii)와 (iii)에 의해 그 계수로 만든 복소 다항함수는 계수가 $\iota(a_0), \dots, \iota(a_N)$인 복소 다항함수이다. 따라서 둘은 같다. 대입의 (5)를 $\varphi = \iota$에 쓰면 $\iota(g(x)) = g^{\iota}(\iota(x))$이다. $\iota$는 단사이고 $\iota(0) = 0$이므로 $g(x) = 0$인 것은 정확히 $g^{\iota}(\iota(x)) = 0$일 때이다. 복소수체의 (2)의 (ii)에 의해 $\iota(x)$는 실수인 복소수이고, 거꾸로 실수인 복소수 $z$는 그 (iii)에 의해 $z = \iota(\operatorname{Re} z)$이므로, $z$가 $g^{\iota}$의 근이면 $\operatorname{Re} z$는 $g$의 근이다.

**(4)의 증명.** (ii)를 먼저 보인다. $\mathbb{C}[X]$에서 $f = a\,(X - c_1) \cdots (X - c_d)$이면, 복소수 $z$에서 대입의 (2)와 (1)에 의해 $f(z) = a\,\bigl((z - c_1) \cdots (z - c_d)\bigr)$이다(오른쪽의 곱은 환 $\mathbb{C}$에서). $a$는 최고차계수이므로 $0$이 아니다(차수의 정의). $\mathbb{C}$는 정역이므로 곱의 (7)에 의해 $f(z) = 0$인 것은 정확히 $(z - c_1) \cdots (z - c_d) = 0$일 때이고, 다시 곱의 (7)에 의해 정확히 어떤 $j$에서 $z - c_j = 0$, 곧 $z = c_j$일 때이다. $d \ge 1$이면 $c_1$이 근이다.

(i) $d = 0$이면 차수의 (2)에 의해 $f$는 $0$이 아닌 복소수의 상수 다항식이고, 그 수는 $\operatorname{coef}_0(f) = a$이다. 곱의 (1)에 의해 빈 곱은 $1$이므로 $f = a = a \cdot 1$이다. $d \ge 1$이면 (3)의 (iv)에 의해 $u = \operatorname{ev}_{\mathbb{C}}(f)$는 영함수가 아니고 차수가 $d$이며 최고차계수가 $a$인 복소 다항함수이다. [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 (4)에 의해 길이 $d$인 복소수의 열 $c_1, \dots, c_d$가 있어 모든 복소수 $z$에서 $u(z) = a\,(z - c_1) \cdots (z - c_d)$이다(그 항목의 곱). $h = a\,(X - c_1) \cdots (X - c_d) \in \mathbb{C}[X]$로 두면, 위 (ii)의 첫 계산에 의해 $h(z) = a\,\bigl((z - c_1) \cdots (z - c_d)\bigr)$이고 (5)의 (iv)에 의해 이 곱은 복소 인수 정리와 인수분해의 곱과 같다. 따라서 $\operatorname{ev}_{\mathbb{C}}(h) = u = \operatorname{ev}_{\mathbb{C}}(f)$이고, (3)의 (iii)의 단사에 의해 $f = h$이다.

(iii) 다항식환의 (7)의 (i)에 의해 $F[X] \subseteq \mathbb{C}[X]$이고, 차수의 (8)에 의해 $f$가 영다항식인지, 차수, 최고차계수는 $F[X]$에서 보든 $\mathbb{C}[X]$에서 보든 같다. 그러므로 $f$를 $\mathbb{C}[X]$의 원소로 보고 (i), (ii)를 쓴다.

**(6)의 증명.** [[complex-conjugate|켤레복소수]]의 (6)에 의해 켤레를 취하는 함수는 환 동형사상이고, 그 (4)에 의해 실수인 복소수 $1$을 그대로 두므로 $\overline{1} = 1$이다. 따라서 대입의 계수 사상이 정해지고 $\overline{f}$는 그 계수 사상의 값이다. (i)은 대입의 (5)이다. (ii) 켤레복소수의 (4)에 의해 실수인 복소수 $b$는 $\overline{b} = b$이므로 모든 $n$에서 $\operatorname{coef}_n(\overline{f}) = \operatorname{coef}_n(f)$이고, 다항식환의 정의에 의해 $\overline{f} = f$이다. $f(c) = 0$이면 (i)과 준동형의 (1)에 의해 $f(\overline{c}) = \overline{f}(\overline{c}) = \overline{f(c)} = \overline{0} = 0$이다. $c$가 실수인 복소수가 아니면 켤레복소수의 (4)에 의해 $\overline{c} \ne c$이다. (iii) 대입의 (3)에 의해 $\operatorname{coef}_n(g^{\iota}) = \iota(\operatorname{coef}_n(g))$이고, 복소수체의 (2)의 (ii)에 의해 그 허수부는 $0$이므로 실수인 복소수이다.
:::

## 예시와 반례

:::example[$X^4 + 4$의 일차식 분해]
$f = X^4 + 4 \in \mathbb{C}[X]$는 차수가 $4$이고 최고차계수가 $1$입니다. $\mathbb{C}[X]$에서 두 일차식의 곱은 분배법칙과 읽는 약속에 의해 $(X - b)(X - b') = X^2 - (b + b')X + bb'$입니다. $b = 1 + i$, $b' = 1 - i$이면 $b + b' = 2$, $bb' = 1 - i^2 = 2$이고, $b = -1 + i$, $b' = -1 - i$이면 $b + b' = -2$, $bb' = 1 - i^2 = 2$입니다. 그리고
$$
\begin{aligned}
&(X^2 - 2X + 2)(X^2 + 2X + 2) \\
&\quad = (X^2 + 2)^2 - (2X)^2 \\
&\quad = X^4 + 4
\end{aligned}
$$
이므로
$$
\begin{aligned}
&X^4 + 4 \\
&\quad = (X - (1 + i))(X - (1 - i)) \\
&\qquad \cdot (X - (-1 + i)) \\
&\qquad \cdot (X - (-1 - i))
\end{aligned}
$$
입니다. (4)의 (ii)에 의해 $f$의 $\mathbb{C}$ 안의 근은 정확히 $1 \pm i$, $-1 \pm i$의 네 수입니다. $f$의 계수는 모두 실수인 복소수이고, 근은 $1 + i$와 $1 - i$, $-1 + i$와 $-1 - i$가 서로 켤레인 쌍입니다. (6)의 (ii)가 말하는 대로입니다.
:::

:::example[형식적 도함수로 구한 실함수의 도함수]
$f = 2X^3 - 6X + 1 \in \mathbb{R}[X]$이면 형식적 도함수의 (1)에 의해 $f' = 6X^2 - 6$입니다. (2)에 의해 $x$에서의 값이 $2x^3 - 6x + 1$인 함수 $\operatorname{ev}_{\mathbb{R}}(f)$는 미분가능하고, 모든 실수 $c$에서 그 미분계수는 $f'(c) = 6c^2 - 6$입니다. 예컨대 $c = 1$과 $c = -1$에서 미분계수가 $0$이고, $c = 2$에서 $18$입니다. 극한을 계산하지 않고 계수만으로 실함수의 도함수를 얻었습니다.
:::

:::counterexample[계수가 실수가 아니면 켤레가 근이 아닐 수 있다]
$f = X - i \in \mathbb{C}[X]$의 계수 $-i$는 실수인 복소수가 아닙니다. $f(i) = 0$이므로 $i$는 $f$의 근이지만, $\overline{i} = -i$에서 $f(-i) = -2i \ne 0$이므로 $-i$는 근이 아닙니다. (6)의 (ii)의 "계수가 모두 실수인 복소수"라는 가정이 빠지면 결론이 성립하지 않을 수 있습니다. (6)의 (i)에 맞게 쓰면 $\overline{f} = X + i$이고, $\overline{f}(-i) = 0 = \overline{f(i)}$입니다.
:::

:::counterexample[실수 위에서는 일차식의 곱으로 쓰이지 않을 수 있다]
$g = X^2 + 1 \in \mathbb{R}[X]$를 봅시다. 모든 실수 $x$에서 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (ii)에 의해 $0 \le xx$, $0 < 1$이고, 그 (2)의 (iv)에 의해 $0 < xx + 1 = g(x)$입니다. 따라서 $g$는 실근을 갖지 않습니다. 만약 $\mathbb{R}[X]$에서 $g = a\,(X - c_1)(X - c_2)$인 실수 $a$, $c_1$, $c_2$가 있다면 대입하여 $g(c_1) = a(c_1 - c_1)(c_1 - c_2) = 0$이 되어 모순입니다. 그래서 (4)를 $\mathbb{R}$로 바꾼 문장은 이 $g$에서 성립하지 않습니다. 한편 $\mathbb{C}[X]$에서는 $g^{\iota} = X^2 + 1 = (X - i)(X + i)$이고, 근 $i$, $-i$는 실수인 복소수가 아니며 서로 켤레입니다.
:::

## 확인 질문

:::check[실수 $x$에서의 값이 $(x + 1)^2 - x^2 - 2x$인 함수 $h$는 어떤 다항함수이고 차수는 얼마인가?]
$k = (X + 1)^2 - X^2 - 2X \in \mathbb{R}[X]$로 두면 대입이 환 준동형이고 (5)의 (ii)에 의해 거듭제곱이 실수의 거듭제곱이므로 모든 실수 $x$에서 $k(x) = (x + 1)^2 - x^2 - 2x$, 곧 $h = \operatorname{ev}_{\mathbb{R}}(k)$입니다. $\mathbb{R}[X]$에서 $(X + 1)^2 = X^2 + 2X + 1$이므로 $k = 1$이고, (1)의 (i)에 의해 $h = \operatorname{ev}_{\mathbb{R}}(1) = t^0$입니다. 곧 $h$는 값이 $1$인 상수함수이고, (1)의 (iv)에 의해 차수는 상수 다항식 $1$의 차수인 $0$입니다.
:::

:::check[$C(5, 2)$를 일반화한 이항계수의 점화식으로 다시 구하면 얼마인가?]
(7)의 (i)에 의해 $C(5, 2) = \binom{5}{2}$입니다. 점화식으로 $\binom{5}{0} = 1$, $\binom{5}{1} = 1 \cdot \frac{5}{1} = 5$, $\binom{5}{2} = 5 \cdot \frac{4}{2} = 10$입니다. 파스칼 규칙으로도 $C(5, 2) = C(4, 1) + C(4, 2) = 4 + 6 = 10$이고, (7)의 (ii)의 꼴로도 $5! \cdot (2! \cdot 3!)^{-1} = 120 \cdot 12^{-1} = 10$입니다.
:::

:::check[$g = X^3 - X \in \mathbb{R}[X]$일 때 $g^{\iota}$의 $\mathbb{C}$ 안의 근은 무엇인가?]
$\mathbb{R}[X]$에서 $g = X(X - 1)(X + 1)$입니다. 계수 사상은 $1$을 $1$로 보내는 환 준동형이고 상수 다항식 $c$를 $\iota(c)$로, $X$를 $X$로 보내므로(대입 준동형의 (3)), $\mathbb{C}[X]$에서 $g^{\iota} = X(X - 1)(X + 1)$, 곧 $1 \cdot (X - 0)(X - 1)(X - (-1))$입니다. $g^{\iota}$는 차수가 $3$이고 최고차계수가 $1$이므로 (4)의 (ii)에 의해 $\mathbb{C}$ 안의 근은 정확히 $0$, $1$, $-1$(실수 $0$, $1$, $-1$을 $\iota$로 옮긴 것)입니다. 모두 실수인 복소수이고, (3)의 (v)대로 $g$의 실근 $0$, $1$, $-1$을 옮긴 것과 같습니다.
:::
