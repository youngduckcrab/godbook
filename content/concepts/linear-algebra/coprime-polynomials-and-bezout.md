---
title: 서로소인 다항식과 베주 항등식
title_en: Coprime Polynomials and Bézout's Identity
aliases: [다항식의 베주 항등식, 서로소인 다항식, relatively prime polynomials, Bezout's identity for polynomials]
kind: theorem
field: linear-algebra
msc: ["12E05"]
level: undergrad
summary: 체 위의 두 다항식이 서로소라는 것을 둘을 함께 나누는 모닉 다항식이 1 뿐이라는 것으로 정의하고, 그것이 af + bg = 1 인 a, b 가 있다는 것(베주 항등식)과 같음을 주 아이디얼 정역으로 증명한다. 서로소인 다항식들의 곱, 근이 아닌 점에서의 일차식, 서로 다른 일차식의 거듭제곱이 서로소라는 것과, 서로 다른 일차식들의 거듭제곱의 곱을 나누는 모닉 다항식이 다시 그 꼴이고 그 지수가 하나로 정해진다는 것을 함께 증명한다.
requires: [prime-number, well-ordering-principle, mathematical-induction, greatest-common-divisor, order-properties-of-reals, ring, integral-domain, field, ideal, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, divisibility-in-integral-domains, principal-ideal-domain]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.2절 The Division Algorithm, 다항식의 최대공약수와 relatively prime 의 정의, Proposition 17.10 과 그 증명 (pp.214–215); 17.5절 Exercises, 연습문제 4, 15 (pp.220–221); 22.1절 Structure of a Finite Field, Theorem 22.6 의 증명 (p.280); 18.4절 Exercises, 연습문제 12 (p.236); 2.4절 Exercises, 연습문제 26 (p.26); 17.3절 Irreducible Polynomials, Example 17.11 (p.215)"
    checked: original
    note: "출처는 체 F 위의 두 다항식의 최대공약수를 '두 다항식을 모두 나누고, 둘을 모두 나누는 다른 모든 다항식이 나누는 모닉 다항식'으로 정의하고 gcd(p(x), q(x)) 로 쓰며, gcd 가 1 일 때 relatively prime 이라 한다(p.214). 이 항목은 최대공약수를 정의하지 않고, 서로소를 '둘을 함께 나누는 모닉 다항식이 1 뿐'으로 직접 정의한다. 출처의 Proposition 17.10 은 최대공약수 d(x) 가 r(x)p(x) + s(x)q(x) 꼴이고 최대공약수는 하나뿐이라는 것이고, 그 증명은 {f(x)p(x) + g(x)q(x)} 에서 차수가 가장 작은 모닉 다항식을 잡아 나눗셈 정리로 p, q 를 나눈다는 것을 보인다. (1)의 (i)에서 (iii)으로 가는 방향은 그 결론을 최대공약수가 1 인 경우에 쓴 것과 같은 결론이다. 이 항목은 그 집합을 아이디얼의 합으로 보고 주 아이디얼 정역의 모닉 생성원(principal-ideal-domain 의 (4))으로 증명한다. 출처 18.4절 연습문제 12(b)(p.236)는 주 아이디얼 정역에서 gcd(a, b) = as + bt 인 s, t 가 있음을 보이라 하며, 이 증명과 같은 발상이다. (2)의 (ii)는 출처 Theorem 22.6 의 증명(p.280)이 f′(x) = −1 이 f(x) 와 relatively prime 이라고 쓰는 것과 같은 사실이다. (3)은 출처 2.4절 연습문제 26(p.26, 정수 a, b, c 에 대하여 gcd(a, c) = gcd(b, c) = 1 인 것은 정확히 gcd(ab, c) = 1 일 때)의 한 방향을 다항식에 대해 진술한 것과 같은 꼴이다. (4)의 (i)은 출처 연습문제 15(p.221, 기약 다항식 f(x) 가 p(x)q(x) 를 나누면 p(x) 나 q(x) 를 나눈다)와 닿아 있는 사실이다. 예시 'ℝ[X] 에서 X² + 1 과 X − 1 의 베주 항등식'에서 a, b 를 구하는 것은 출처 연습문제 4(p.220, 다항식의 쌍의 최대공약수 d(x) 와 a(x)p(x) + b(x)q(x) = d(x) 인 a, b 를 구하라)와 같은 종류의 계산이고, 확인 질문 'ℝ[X] 에서 (X − 3)² 와 (X − 3)(X + 1) 을 둘 다 나누는 모닉 다항식은 무엇인가?'도 같은 연습문제의 공약수 계산과 같은 종류이다. 반례 'X² + 1 을 인수로 갖는 다항식의 예'의 X² + 1 은 출처 17.3절 Example 17.11(p.215)이 실수 위에서 기약이라고 적는 다항식이다."
  - ref: hefferon-linear-algebra
    loc: "Polynomials of Maps and Matrices, th:CayHam, src/jc/jc4.tex:344–358 과 그 뒤 문단 src/jc/jc4.tex:488–505"
    checked: original
    note: "Hefferon 의 th:CayHam 은 특성다항식이 k(x − λ_1)^{p_1}⋯(x − λ_z)^{p_z} 로 인수분해되면 최소다항식이 (x − λ_1)^{q_1}⋯(x − λ_z)^{q_z}, 1 ≤ q_i ≤ p_i 로 인수분해된다고 진술하고, 그 증명(jc4.tex:488–505)은 최소다항식이 특성다항식을 나눈다는 것에서 이 꼴을 끌어낸다. 스칼라는 복소수이다(jc1.tex 의 5장 머리말). (6)의 (i)은 일차식들의 거듭제곱의 곱을 나누는 모닉 다항식 일반에 대하여 그 꼴과 지수의 범위 0 ≤ k_j ≤ m_j 를 진술한 것이고, 이 항목은 체 F 위에서 진술한다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(서로소 판정의 f = 0 경계, 블록 행렬식의 귀납 꼴, 유한 열 보조정리의 r = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$F$가 [[field|체]]라 하자. 다항식환 $F[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값 $f(c)$와 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 주 아이디얼 $fF[X]$와 두 아이디얼의 합은 [[ideal|아이디얼]]의 (6), (8)의 것이고, 다항식의 열의 곱, 빈 곱 $1$, 거듭제곱 $f^k$는 환 $F[X]$에서의 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]이다.

**서로소.** $f, g \in F[X]$가 **서로소**(coprime, relatively prime)인 것은 정확히 $f$와 $g$를 둘 다 나누는 모닉 다항식이 $1$뿐일 때이다. 곧 $d \mid f$이고 $d \mid g$인 모든 모닉 다항식 $d \in F[X]$에 대하여 $d = 1$일 때이다. ($1$은 모닉이고 모든 다항식을 나누므로, 둘을 함께 나누는 모닉 다항식은 언제나 있다.) 정수가 서로소라는 것은 [[greatest-common-divisor|최대공약수]]에서 정한 것이고, 이 정의는 다항식에 대한 것이다.

다음이 성립한다. 아래에서 $f$, $g$, $h$는 $F[X]$의 원소이다.

1. (베주 항등식) 다음 세 조건은 서로 동치이다.
   - (i) $f$와 $g$가 서로소이다.
   - (ii) $fF[X] + gF[X] = F[X]$이다.
   - (iii) $af + bg = 1$인 $a, b \in F[X]$가 있다.
2. (기본 성질)
   - (i) $f$와 $g$가 서로소인 것은 정확히 $g$와 $f$가 서로소일 때이다.
   - (ii) $c \in F$이고 $c \ne 0$이면 상수 다항식 $c$와 $f$는 서로소이다. 특히 $1$과 $f$는 서로소이다.
   - (iii) $f$와 영다항식이 서로소인 것은 정확히 $f$가 영이 아닌 상수 다항식일 때이다. 특히 영다항식과 영다항식은 서로소가 아니다.
   - (iv) (근이 아닌 점) $\mu \in F$이면, $f$와 $X - \mu$가 서로소인 것은 정확히 $f(\mu) \ne 0$일 때이다.
3. (곱) $k \ge 0$이 정수이고 $f_1, \dots, f_k$가 $F[X]$의 원소의 열이며 모든 $j$에서 $f_j$와 $h$가 서로소이면, 곱 $f_1 \cdots f_k$와 $h$는 서로소이다. 특히 $f$와 $h$가 서로소이면 $0$ 이상인 모든 정수 $k$에서 $f^k$와 $h$는 서로소이다.
4. (나누어떨어짐) $f$와 $g$가 서로소라 하자.
   - (i) $f \mid gh$이면 $f \mid h$이다.
   - (ii) $f \mid h$이고 $g \mid h$이면 $fg \mid h$이다.
5. (일차식의 거듭제곱) $\lambda, \mu \in F$이고 $\lambda \ne \mu$이면, $0$ 이상인 모든 정수 $a$, $b$에 대하여 $(X - \lambda)^a$와 $(X - \mu)^b$는 서로소이다.
6. (일차식들의 거듭제곱의 곱) $r \ge 0$이 정수이고 $\mu_1, \dots, \mu_r$이 서로 다른 $F$의 원소의 열(곧 $i \ne j$이면 $\mu_i \ne \mu_j$)이라 하자. $0$ 이상인 정수의 열 $k_1, \dots, k_r$에 대하여, $j$번째 항이 $(X - \mu_j)^{k_j}$인 다항식의 열의 곱을 $(X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$로 쓴다. $r = 0$이면 이것은 빈 곱 $1$이다.
   - (i) (모닉 약수) $c \in F$, $c \ne 0$이고 $m_1, \dots, m_r$이 $0$ 이상인 정수의 열이며 $h = c\,(X - \mu_1)^{m_1} \cdots (X - \mu_r)^{m_r}$이라 하자. 모닉 다항식 $g \in F[X]$가 $h$를 나누는 것은 정확히 모든 $j$에서 $0 \le k_j \le m_j$인 정수의 열 $k_1, \dots, k_r$이 있어 $g = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$일 때이다.
   - (ii) (지수는 하나로 정해진다) $0$ 이상인 정수의 열 $k_1, \dots, k_r$과 $k'_1, \dots, k'_r$에 대하여 $(X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r} = (X - \mu_1)^{k'_1} \cdots (X - \mu_r)^{k'_r}$이면 모든 $j$에서 $k_j = k'_j$이다.
   - (iii) (모닉과 근) $u = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$이면 $u$는 모닉 다항식이다. $x \in F$가 $u$의 근인 것은 정확히 $x = \mu_j$이고 $k_j \ge 1$인 $j \in \{1, \dots, r\}$가 있을 때이다.
:::

:::english
Let $F$ be a field. The polynomial ring $F[X]$, constant polynomials and the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring entry; degree, leading coefficient and monic are those of the degree entry; the value $f(c)$ and roots are those of the evaluation homomorphism entry. Principal ideals $fF[X]$ and sums of two ideals are those of items (6) and (8) of the ideal entry, and products of sequences of polynomials, the empty product $1$ and powers $f^k$ are taken in the ring $F[X]$.

**Coprime.** Polynomials $f, g \in F[X]$ are **coprime** (relatively prime) exactly when the only monic polynomial dividing both $f$ and $g$ is $1$; that is, when every monic $d \in F[X]$ with $d \mid f$ and $d \mid g$ satisfies $d = 1$. (Since $1$ is monic and divides every polynomial, a monic common divisor always exists.) Coprimality of integers is the notion defined with the greatest common divisor; this definition concerns polynomials.

The following hold, where $f$, $g$, $h$ are elements of $F[X]$.

1. (Bézout's identity) The following three conditions are equivalent.
   - (i) $f$ and $g$ are coprime.
   - (ii) $fF[X] + gF[X] = F[X]$.
   - (iii) There are $a, b \in F[X]$ with $af + bg = 1$.
2. (Basic properties)
   - (i) $f$ and $g$ are coprime exactly when $g$ and $f$ are coprime.
   - (ii) If $c \in F$ and $c \ne 0$, then the constant polynomial $c$ and $f$ are coprime. In particular $1$ and $f$ are coprime.
   - (iii) $f$ and the zero polynomial are coprime exactly when $f$ is a nonzero constant polynomial. In particular the zero polynomial is not coprime to itself.
   - (iv) (A point that is not a root) If $\mu \in F$, then $f$ and $X - \mu$ are coprime exactly when $f(\mu) \ne 0$.
3. (Products) If $k \ge 0$ is an integer, $f_1, \dots, f_k$ is a sequence of elements of $F[X]$, and $f_j$ and $h$ are coprime for every $j$, then the product $f_1 \cdots f_k$ and $h$ are coprime. In particular, if $f$ and $h$ are coprime then $f^k$ and $h$ are coprime for every integer $k \ge 0$.
4. (Divisibility) Suppose $f$ and $g$ are coprime.
   - (i) If $f \mid gh$, then $f \mid h$.
   - (ii) If $f \mid h$ and $g \mid h$, then $fg \mid h$.
5. (Powers of linear polynomials) If $\lambda, \mu \in F$ and $\lambda \ne \mu$, then $(X - \lambda)^a$ and $(X - \mu)^b$ are coprime for all integers $a, b \ge 0$.
6. (Products of powers of linear polynomials) Let $r \ge 0$ be an integer and let $\mu_1, \dots, \mu_r$ be a sequence of distinct elements of $F$ (that is, $\mu_i \ne \mu_j$ whenever $i \ne j$). For a sequence of integers $k_1, \dots, k_r \ge 0$, write $(X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$ for the product of the sequence of polynomials whose $j$th term is $(X - \mu_j)^{k_j}$. If $r = 0$ this is the empty product $1$.
   - (i) (Monic divisors) Let $c \in F$ with $c \ne 0$, let $m_1, \dots, m_r$ be a sequence of integers $\ge 0$, and let $h = c\,(X - \mu_1)^{m_1} \cdots (X - \mu_r)^{m_r}$. A monic polynomial $g \in F[X]$ divides $h$ exactly when there is a sequence of integers $k_1, \dots, k_r$ with $0 \le k_j \le m_j$ for every $j$ such that $g = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$.
   - (ii) (The exponents are determined) If $k_1, \dots, k_r$ and $k'_1, \dots, k'_r$ are sequences of integers $\ge 0$ with $(X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r} = (X - \mu_1)^{k'_1} \cdots (X - \mu_r)^{k'_r}$, then $k_j = k'_j$ for every $j$.
   - (iii) (Monic, and roots) If $u = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$, then $u$ is monic, and $x \in F$ is a root of $u$ exactly when there is $j \in \{1, \dots, r\}$ with $x = \mu_j$ and $k_j \ge 1$.
:::

## 직관

정수에서는 공약수가 $\pm 1$뿐인 두 수를 서로소라 하고, 그런 두 수 $a$, $b$에는 $ax + by = 1$인 정수 $x$, $y$가 있습니다([[bezout-identity|베주 항등식]]). 다항식에서는 가역원이 영이 아닌 상수 전체라서 "공약수가 상수뿐"이라고 말하는 대신, 상수배를 맞춘 모닉 공약수가 $1$뿐이라고 정의합니다. (1)은 정수의 베주 항등식이 다항식에서도 그대로 성립한다는 것입니다. 정수에서 최대공약수를 쓰던 자리를 여기서는 [[principal-ideal-domain|주 아이디얼 정역]]의 모닉 생성원이 맡습니다.

두 열쇠가 하나의 문을 함께 열 수 있는지에 비유할 수 있습니다. $af + bg = 1$은 $f$와 $g$를 섞어서 "단위" $1$을 만들 수 있다는 뜻이고, 그러면 $f$와 $g$에 공통으로 걸린 자물쇠(차수가 $1$ 이상인 모닉 공약수 $d$)는 있을 수 없습니다. $d$가 $f$와 $g$를 나누면 $1$도 나누어야 하는데, $1$을 나누는 모닉 다항식은 $1$뿐이기 때문입니다. 비유의 "섞기"는 다항식 계수 $a$, $b$를 곱해 더하는 것이고, "공통의 자물쇠"는 정의의 모닉 공약수입니다.

(6)은 $c\,(X - \mu_1)^{m_1} \cdots (X - \mu_r)^{m_r}$처럼 서로 다른 일차식들의 거듭제곱으로 끝까지 쪼개진 다항식의 모닉 약수는 각 일차식을 원래 지수 이하로 골라 곱한 것뿐이라는 것입니다. 이 꼴이 아닌 다항식에서는 그렇지 않을 수 있습니다. 아래 반례처럼 $\mathbb{R}[X]$에서 $X^2 + 1$은 근이 없어서 일차식들의 곱으로 쪼개지지 않습니다.

## 증명

:::idea
$af + bg$ 꼴의 다항식 전체는 아이디얼이고 모닉 생성원 $d$ 하나로 쓰인다. $d$는 $f$와 $g$를 함께 나누는 모닉 다항식이므로, 서로소이면 $d = 1$이다. (6)은 $r$에 대한 귀납으로, 마지막 일차식 $X - \mu_r$의 거듭제곱을 $g$에서 할 수 있는 만큼 떼어 내고 남은 것이 $X - \mu_r$와 서로소임을 쓴다.
:::

:::hint
$I = fF[X] + gF[X]$에 [[principal-ideal-domain|주 아이디얼 정역]]의 (4)를 쓰려면 $I \ne \{0\}$이어야 합니다. $f = g = 0$이면 $X$가 둘을 함께 나누는 모닉 다항식입니다.
:::

:::hint
(2)의 (iv)는 나머지 정리 $f = (X - \mu)q + f(\mu)$에서 $f(\mu) \ne 0$이면 양변에 $f(\mu)^{-1}$을 곱해 $1$을 만드는 것입니다. (6)의 (i)에서는 $(X - \mu_r)^e \mid g$인 $e \le m_r$ 가운데 가장 큰 것을 잡습니다.
:::

:::proof
환의 계산(분배법칙, 결합법칙, 교환법칙)은 [[ring|환]]의 공리로 하고 따로 적지 않는다. 정수의 순서는 [[prime-number|소수]] 항목의 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)로 인용한다. 먼저 쓸 사실을 적는다.

- (가) [[degree-of-a-polynomial|다항식의 차수]]의 (6), (7)과 [[field|가역원과 체]]의 (3)에 의해 $F[X]$는 [[integral-domain|정역]]이고, $F[X]$의 가역원은 정확히 영이 아닌 상수 다항식이다.
- (나) 모닉 다항식 $d$가 $F[X]$의 가역원이면 $d = 1$이다. (가)에 의해 $d$는 영이 아닌 상수 다항식 $c$이고, 차수의 (2)에 의해 $\deg d = 0$이므로 최고차계수는 $\operatorname{coef}_0(d) = c$이다. 모닉이므로 $c = 1$이다.
- (다) $X \ne 1$이고 $X$는 모닉이며 차수가 $1$이다(차수의 (2)). [[polynomial-ring|다항식환]]의 (4)의 (iii)에 의해 $\operatorname{coef}_1(X) = 1$이고 같은 항목의 (3)에 의해 $\operatorname{coef}_1(1) = 0$이며, 가역원과 체의 (1)에 의해 $1$은 가역원이고 $0$은 가역원이 아니므로 $1 \ne 0$이다. 같은 이유로 차수가 $1$ 이상인 다항식은 $1$이 아니다($\deg 1 = 0$).
- (라) 다항식환의 (6)에 의해, $d \mid f$이면 모든 $e$에서 $d \mid ef$이고, $d \mid f$이고 $d \mid g$이면 $d \mid f + g$이며, $d \mid 0$, $d \mid d$, $1 \mid d$이다.

**(1).** $I = fF[X] + gF[X]$라 하자. [[ideal|아이디얼]]의 (6)의 (i)에 의해 $fF[X]$와 $gF[X]$는 아이디얼이고, 아이디얼의 (8)의 (ii)에 의해 $I$는 이 둘을 포함하는 아이디얼이다. $f = f \cdot 1$, $g = g \cdot 1$이므로 $f, g \in I$이다.

(i)에서 (ii): $f$와 $g$가 서로소라 하자. $I = \{0\}$이라면 $f = g = 0$이고, (라)에 의해 $X \mid 0$이므로 모닉 다항식 $X$가 $f$와 $g$를 함께 나눈다. 서로소이므로 $X = 1$인데 이것은 (다)와 어긋난다. 따라서 $I \ne \{0\}$이다. [[principal-ideal-domain|주 아이디얼 정역]]의 (4)의 (i)에 의해 $I = dF[X]$인 모닉 다항식 $d$가 있고, $F[X]$의 원소 $e$가 $I$에 속하는 것은 정확히 $d \mid e$일 때이다. $f, g \in I$이므로 $d \mid f$, $d \mid g$이고, 서로소이므로 $d = 1$이다. 같은 (4)의 (i)에 의해 $I = F[X]$이다.

(ii)에서 (iii): $1 \in F[X] = I$이므로 $1 = fa + gb$인 $a, b \in F[X]$가 있다. 곧 $af + bg = 1$이다.

(iii)에서 (i): $af + bg = 1$이라 하고 $d$가 $d \mid f$, $d \mid g$인 모닉 다항식이라 하자. (라)에 의해 $d \mid af$, $d \mid bg$이고 $d \mid af + bg = 1$이다. [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (3)에 의해 $d$는 가역원이고, (나)에 의해 $d = 1$이다.

**(2).** (i)은 정의의 조건 "$d \mid f$이고 $d \mid g$"가 $f$와 $g$에 대해 대칭이므로 성립한다.

(ii) $c \ne 0$이므로 $c^{-1} \in F$가 있고, 읽는 약속에 의해 $c^{-1} \cdot c + 0 \cdot f = 1$이다. (1)의 (iii)에서 (i)에 의해 $c$와 $f$는 서로소이다.

(iii) $f$가 영이 아닌 상수 다항식이면 (ii)와 (i)에 의해 $f$와 $0$은 서로소이다. 거꾸로 $f$와 $0$이 서로소라 하자. $f = 0$이면 (1)의 증명에서처럼 $X$가 둘을 함께 나누므로 서로소가 아니다. $f \ne 0$이고 $\deg f \ge 1$이라 하자. $f$의 최고차계수를 $c$라 하면 주 아이디얼 정역의 (3)에 의해 $c^{-1} f$는 $f$와 연관원인 모닉 다항식이고, 정역의 나누어떨어짐과 기약원의 (2)에 의해 $c^{-1} f \mid f$이며, (라)에 의해 $c^{-1} f \mid 0$이다. 차수의 (5)에 의해 $\deg(c^{-1} f) = \deg f \ge 1$이므로 (다)에 의해 $c^{-1} f \ne 1$이고, 서로소가 아니다. 따라서 $f \ne 0$이고 $\deg f = 0$이며, 차수의 (2)에 의해 $f$는 영이 아닌 상수 다항식이다.

(iv) [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (1)에 의해 $f = (X - \mu)q + f(\mu)$인 $q \in F[X]$가 있다. $f(\mu) \ne 0$이라 하고 $c = f(\mu)$라 하면
$$
\begin{aligned}
&c^{-1} f + \bigl(-c^{-1} q\bigr)(X - \mu) \\
&= c^{-1}\bigl(f - (X - \mu)q\bigr) \\
&= c^{-1} c = 1
\end{aligned}
$$
이므로 (1)에 의해 $f$와 $X - \mu$는 서로소이다. 거꾸로 $f(\mu) = 0$이면 인수 정리의 (2)에 의해 $X - \mu \mid f$이고, (라)에 의해 $X - \mu \mid X - \mu$이다. 차수의 (2)에 의해 $X - \mu$는 차수가 $1$인 모닉 다항식이므로 (다)에 의해 $1$이 아니고, $f$와 $X - \mu$는 서로소가 아니다.

**(3).** $k$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)을 쓴다. $k = 0$이면 곱은 빈 곱 $1$이고, (2)의 (ii)와 (i)에 의해 $1$과 $h$는 서로소이다. $k$에서 성립한다고 하고 길이 $k + 1$인 열 $f_1, \dots, f_{k+1}$의 모든 항이 $h$와 서로소라 하자. $P = f_1 \cdots f_k$라 하면 귀납 가정에 의해 $P$와 $h$는 서로소이고, [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (2)에 의해 $f_1 \cdots f_{k+1} = P f_{k+1}$이다. (1)에 의해 $aP + bh = 1$, $a' f_{k+1} + b' h = 1$인 $a, b, a', b' \in F[X]$가 있다. 두 식을 곱하면
$$
\begin{aligned}
1 &= (aP + bh)(a' f_{k+1} + b' h) \\
&= (aa')(P f_{k+1}) \\
&\quad + (ab'P + ba' f_{k+1} + bb'h)\,h
\end{aligned}
$$
이므로 (1)에 의해 $P f_{k+1}$과 $h$는 서로소이다. 거듭제곱 $f^k$는 모든 항이 $f$인 길이 $k$인 열의 곱이므로 둘째 문장이 나온다.

**(4).** (i) (1)에 의해 $af + bg = 1$인 $a, b$가 있고 $h = afh + bgh$이다. (라)에 의해 $f \mid afh$이고, $f \mid gh$이므로 $f \mid bgh$이며, 따라서 $f \mid h$이다.

(ii) $h = fu$인 $u$가 있다. $g \mid fu$이고 (2)의 (i)에 의해 $g$와 $f$는 서로소이므로 (i)을 $g$, $f$, $u$에 쓰면 $g \mid u$이다. $u = gw$라 하면 $h = (fg)w$이므로 $fg \mid h$이다.

**(5).** [[evaluation-homomorphism|대입 준동형]]의 (1)에 의해 $(X - \lambda)(\mu) = \mu - \lambda \ne 0$이므로 (2)의 (iv)에 의해 $X - \lambda$와 $X - \mu$는 서로소이다. (3)의 둘째 문장에 의해 $(X - \lambda)^a$와 $X - \mu$는 서로소이고, (2)의 (i)에 의해 $X - \mu$와 $(X - \lambda)^a$가 서로소이다. 다시 (3)의 둘째 문장에 의해 $(X - \mu)^b$와 $(X - \lambda)^a$는 서로소이고, (2)의 (i)에 의해 $(X - \lambda)^a$와 $(X - \mu)^b$는 서로소이다.

**(6)의 (iii).** 차수의 (2)에 의해 $X - \mu_j$는 모닉이고, 차수의 (5)에 의해 두 모닉 다항식의 곱은 모닉이다. 가환환의 유한 곱의 (1), (2)와 길이에 대한 귀납법에 의해 모든 항이 모닉인 열의 곱은 모닉이다(빈 곱 $1$은 모닉이다). 따라서 각 $(X - \mu_j)^{k_j}$가 모닉이고 $u$도 모닉이다. $x \in F$이면 대입 준동형의 (1), (2)에 의해 $u(x)$는 $j$번째 항이 $(x - \mu_j)^{k_j}$인 $F$의 원소의 열의 곱이다. $F$는 정역이므로 가환환의 유한 곱의 (7)에 의해 $u(x) = 0$인 것은 정확히 어떤 $j$에서 $(x - \mu_j)^{k_j} = 0$일 때이다. $k_j = 0$이면 이 거듭제곱은 $1 \ne 0$이고, $k_j \ge 1$이면 같은 항목의 (6)의 (v)와 (7)에 의해 이 거듭제곱이 $0$인 것은 정확히 $x - \mu_j = 0$일 때이다. 따라서 $u(x) = 0$인 것은 정확히 $x = \mu_j$이고 $k_j \ge 1$인 $j$가 있을 때이다.

**(6)의 (i).** 거꾸로 방향부터 보인다. 모든 $j$에서 $0 \le k_j \le m_j$이고 $g = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$이라 하자. $w = c\,(X - \mu_1)^{m_1 - k_1} \cdots (X - \mu_r)^{m_r - k_r}$이라 하면, 가환환의 유한 곱의 (5)(항별 곱)와 (6)의 (ii)(지수법칙)에 의해 $gw = c\,(X - \mu_1)^{m_1} \cdots (X - \mu_r)^{m_r} = h$이므로 $g \mid h$이다.

앞 방향은 $r$에 대한 수학적 귀납법(시작점 $0$)으로 보인다. 다음 명제를 $Q(r)$이라 하자.

> $Q(r)$: 영이 아닌 모든 $c \in F$, 서로 다른 원소의 모든 열 $\mu_1, \dots, \mu_r$, $0$ 이상인 정수의 모든 열 $m_1, \dots, m_r$과 $h = c\,(X - \mu_1)^{m_1} \cdots (X - \mu_r)^{m_r}$을 나누는 모든 모닉 다항식 $g$에 대하여, 모든 $j$에서 $0 \le k_j \le m_j$이고 $g = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$인 정수의 열 $k_1, \dots, k_r$이 있다.

- 기초 단계 $Q(0)$: $h = c \cdot 1 = c$이다. $g \mid c$이므로 $c = gq$인 $q$가 있고, $1 = c^{-1}c = g(c^{-1}q)$이므로 $g \mid 1$이다. 정역의 나누어떨어짐과 기약원의 (3)에 의해 $g$는 가역원이고 (나)에 의해 $g = 1$이다. $1$은 빈 곱이므로 빈 열 $k$로 $Q(0)$이 성립한다.
- 귀납 단계: $r \ge 1$이고 $Q(r - 1)$이 참이라 하자. $c$, $\mu$, $m$, $h$, $g$를 $Q(r)$의 가정처럼 잡는다. $P = (X - \mu_1)^{m_1} \cdots (X - \mu_{r-1})^{m_{r-1}}$(처음 $r - 1$개의 곱)과 $h_0 = cP$라 하면 가환환의 유한 곱의 (2)에 의해 $h = h_0\,(X - \mu_r)^{m_r}$이다.

  $E$를 $0 \le e \le m_r$이고 $(X - \mu_r)^e \mid g$인 정수 $e$ 전체의 집합이라 하자. $(X - \mu_r)^0 = 1$이므로 $0 \in E$이고, $E$는 $m_r$ 이하인 정수로 이루어지므로 정렬 원리의 (나)에 의해 가장 큰 원소 $e$를 갖는다. $g = (X - \mu_r)^e g_1$인 $g_1$이 있다. $g$는 모닉이므로 영다항식이 아니고, 따라서 $g_1 \ne 0$이다. (6)의 (iii)에 의해 $(X - \mu_r)^e$는 모닉이고, 차수의 (5)에 의해 $g$의 최고차계수 $1$은 $g_1$의 최고차계수와 같으므로 $g_1$은 모닉이다.

  $h = gq$인 $q$가 있다. 지수법칙에 의해 $(X - \mu_r)^{m_r} = (X - \mu_r)^e (X - \mu_r)^{m_r - e}$이므로
  $$
  \begin{aligned}
  &(X - \mu_r)^e \bigl(h_0 (X - \mu_r)^{m_r - e}\bigr) \\
  &= (X - \mu_r)^e (g_1 q)
  \end{aligned}
  $$
  이다. $(X - \mu_r)^e$는 모닉이므로 영이 아니고, (가)와 [[integral-domain|영인자와 정역]]의 (1)(소거법칙)에 의해 $h_0 (X - \mu_r)^{m_r - e} = g_1 q$이다. 곧 $g_1 \mid h_0 (X - \mu_r)^{m_r - e}$이다.

  $g_1$과 $(X - \mu_r)^{m_r - e}$가 서로소임을 보인다. $e = m_r$이면 이 거듭제곱은 $1$이므로 (2)의 (ii), (i)에 의해 서로소이다. $e < m_r$이라 하자. $g_1(\mu_r) = 0$이라면 인수 정리의 (2)에 의해 $g_1 = (X - \mu_r)g_2$인 $g_2$가 있고 지수법칙에 의해 $g = (X - \mu_r)^{e+1} g_2$이다. (Z1)에 의해 $e + 1 \le m_r$이므로 $e + 1 \in E$인데, 이것은 $e$가 가장 큰 원소라는 것과 어긋난다. 따라서 $g_1(\mu_r) \ne 0$이고, (2)의 (iv)와 (i)에 의해 $X - \mu_r$와 $g_1$은 서로소이다. (3)의 둘째 문장과 (2)의 (i)에 의해 $g_1$과 $(X - \mu_r)^{m_r - e}$는 서로소이다.

  (4)의 (i)에 의해 $g_1 \mid h_0$이다. $\mu_1, \dots, \mu_{r-1}$은 서로 다른 원소의 열이고 $h_0 = c\,(X - \mu_1)^{m_1} \cdots (X - \mu_{r-1})^{m_{r-1}}$이며 $g_1$은 모닉이므로, $Q(r - 1)$에 의해 모든 $j \le r - 1$에서 $0 \le k_j \le m_j$이고 $g_1 = (X - \mu_1)^{k_1} \cdots (X - \mu_{r-1})^{k_{r-1}}$인 정수의 열이 있다. $k_r = e$로 두면 $0 \le k_r \le m_r$이고, 가환환의 유한 곱의 (2)에 의해 $g = (X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$이다. 곧 $Q(r)$이 참이다.

**(6)의 (ii).** $r$에 대한 수학적 귀납법(시작점 $0$)을 쓴다. $r = 0$이면 보일 것이 없다. $r \ge 1$이고 길이 $r - 1$에서 성립한다고 하자. 처음 $r - 1$개의 곱을 각각 $P = (X - \mu_1)^{k_1} \cdots (X - \mu_{r-1})^{k_{r-1}}$, $P' = (X - \mu_1)^{k'_1} \cdots (X - \mu_{r-1})^{k'_{r-1}}$이라 하면 가환환의 유한 곱의 (2)에 의해 $P\,(X - \mu_r)^{k_r} = P'\,(X - \mu_r)^{k'_r}$이다.

$k_r < k'_r$이라 하자. 지수법칙에 의해 $(X - \mu_r)^{k'_r} = (X - \mu_r)^{k_r}(X - \mu_r)^{k'_r - k_r}$이고, 모닉인 $(X - \mu_r)^{k_r}$를 소거하면 $P = P'\,(X - \mu_r)^{k'_r - k_r}$이다. 양변에 $\mu_r$를 대입한다(대입 준동형의 (2)). $j \le r - 1$이면 $\mu_j \ne \mu_r$이므로 (iii)에 의해 $\mu_r$는 $P$의 근이 아니고 $P(\mu_r) \ne 0$이다. (Z1)에 의해 $k'_r - k_r \ge 1$이므로 가환환의 유한 곱의 (6)의 (v)에 의해 오른쪽의 값은 $P'(\mu_r)\,(\mu_r - \mu_r)^{k'_r - k_r} = P'(\mu_r) \cdot 0 = 0$이다. 이것은 모순이다. 같은 방식으로 $k'_r < k_r$도 모순이므로 (Z5)에 의해 $k_r = k'_r$이다. 그러면 $(X - \mu_r)^{k_r}$를 소거해 $P = P'$이고, 귀납 가정에 의해 $j \le r - 1$에서 $k_j = k'_j$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ[X] 에서 X² + 1 과 X − 1 의 베주 항등식]
$\mathbb{R}$은 체입니다([[field|가역원과 체]]의 (4)). $f = X^2 + 1$이라 하면 대입 준동형의 (1)에 의해 $f(1) = 1 + 1 = 2 \ne 0$이므로 (2)의 (iv)에 의해 $f$와 $X - 1$은 서로소입니다. 증명의 식을 따라 $a$, $b$를 구할 수 있습니다. $X^2 + 1 = (X - 1)(X + 1) + 2$이므로
$$
\begin{aligned}
&\tfrac{1}{2}(X^2 + 1) \\
&\quad + \bigl(-\tfrac{1}{2}(X + 1)\bigr)(X - 1) = 1
\end{aligned}
$$
입니다. 전개해 확인하면 $-\tfrac{1}{2}(X + 1)(X - 1) = -\tfrac{1}{2}X^2 + \tfrac{1}{2}$이고, 여기에 $\tfrac{1}{2}X^2 + \tfrac{1}{2}$를 더하면 $1$입니다. 이런 $a$, $b$는 하나로 정해지지 않습니다. 예컨대 $a = \tfrac{1}{2} + (X - 1)$, $b = -\tfrac{1}{2}(X + 1) - (X^2 + 1)$로 바꿔도 더해진 두 항 $(X - 1)(X^2 + 1)$과 $-(X^2 + 1)(X - 1)$이 서로 지워집니다.
:::

:::example[(X − 1)²(X + 2) 를 나누는 모닉 다항식]
$\mathbb{R}[X]$에서 $h = (X - 1)^2 (X + 2)$는 $c = 1$, $\mu_1 = 1$, $\mu_2 = -2$, $m_1 = 2$, $m_2 = 1$인 (6)의 꼴입니다($X + 2 = X - (-2)$). (6)의 (i)에 의해 $h$를 나누는 모닉 다항식은 $0 \le k_1 \le 2$, $0 \le k_2 \le 1$인 $(X - 1)^{k_1}(X + 2)^{k_2}$뿐이고, (ii)에 의해 서로 다른 지수의 쌍은 서로 다른 다항식을 줍니다. 따라서 그런 모닉 다항식은 정확히 여섯 개
$$
\begin{aligned}
&1,\ X - 1,\ (X - 1)^2,\ X + 2, \\
&(X - 1)(X + 2),\ (X - 1)^2(X + 2)
\end{aligned}
$$
입니다. 예컨대 $X^2 - 1 = (X - 1)(X + 1)$은 $X + 1$이 이 목록의 일차식이 아니므로 $h$를 나누지 않습니다. 실제로 (iii)에 의해 $-1$은 $h$의 근이 아닌데, $-1$은 $X^2 - 1$의 근이므로 $X^2 - 1$이 $h$를 나눈다면 $h(-1) = 0$이어야 합니다.
:::

:::counterexample[X² + 1 을 인수로 갖는 다항식의 예]
$\mathbb{R}[X]$에서 $h = (X^2 + 1)(X - 1)$의 모닉 약수 $X^2 + 1$은 $(X - \mu_1)^{k_1} \cdots (X - \mu_r)^{k_r}$ 꼴이 아닙니다. 그런 꼴에서 모든 $k_j$가 $0$이면 그 곱은 $1$이고, 어떤 $k_j \ge 1$이면 (6)의 (iii)에 의해 실수 $\mu_j$가 근인데, $X^2 + 1$은 실수 근이 없기 때문입니다. 실수 $x$에서 대입한 값은 $x^2 + 1 = xx + 1 \cdot 1$이고([[finite-products-in-a-commutative-ring|가환환의 거듭제곱]]의 (6)의 (i)), 이것이 $0$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iv)에 의해 $1 = 0$이어야 합니다. 이 $h$는 서로 다른 일차식들의 거듭제곱의 곱의 상수배가 아니므로 (6)의 가정이 성립하지 않습니다.
:::

:::counterexample[같은 일차식을 두 자리에 쓴 곱의 예]
(6)의 (ii)에서 $\mu_1, \dots, \mu_r$이 서로 달라야 합니다. $r = 2$, $\mu_1 = \mu_2 = 1$로 두면 $(X - 1)^1 (X - 1)^0 = X - 1 = (X - 1)^0 (X - 1)^1$인데 지수의 열 $1, 0$과 $0, 1$은 다릅니다.
:::

## 확인 질문

:::check[ℝ[X] 에서 X² 와 X² + X 는 서로소인가?]
아닙니다. $X^2 = X \cdot X$이고 $X^2 + X = X(X + 1)$이므로 모닉 다항식 $X$가 둘을 함께 나누고, $X \ne 1$입니다. (1)에 의해 $aX^2 + b(X^2 + X) = 1$인 $a$, $b$도 없습니다. 실제로 그런 $a$, $b$가 있다면 양변에 $0$을 대입해 $0 = 1$을 얻습니다.
:::

:::check[ℝ[X] 에서 (X − 3)² 와 (X − 3)(X + 1) 을 둘 다 나누는 모닉 다항식은 무엇인가?]
(6)의 (i)에 의해 $(X - 3)^2$의 모닉 약수는 $1$, $X - 3$, $(X - 3)^2$이고, $(X - 3)(X + 1)$의 모닉 약수는 $1$, $X - 3$, $X + 1$, $(X - 3)(X + 1)$입니다. 두 목록에 함께 있는 것은 (6)의 (ii)에 의해 $1$과 $X - 3$뿐입니다. 그래서 두 다항식은 서로소가 아닙니다. (5)에 의해 $(X - 3)^2$와 $X + 1$은 서로소라는 것과 견주어 보십시오.
:::
