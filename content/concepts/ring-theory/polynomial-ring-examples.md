---
title: 다항식환의 예
title_en: Examples of Polynomial Rings
aliases: [법 n 의 정수 위의 다항식, polynomials over Z_n]
kind: proposition
field: ring-theory
msc: ["13"]
level: undergrad
summary: 정역이 아닌 계수환 위에서는 차수가 1 인 가역원이 있을 수 있고 일차식의 곱으로 쓰는 방법이 둘일 수 있다. 영이 아닌 다항식이 유한체의 모든 원소에서 값 0 을 가질 수 있다. 작은 환에서는 나누어떨어지지 않는 두 다항식이 큰 환에서는 나누어떨어질 수 있다.
requires: [even-and-odd, integers-modulo-n, ring, ring-examples, subring, integral-domain, field, real-number-arithmetic, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, factor-theorem-for-polynomials]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 3 (p.220), 7, 10, 11, 13, 24 (p.221); 16.7절 Exercises, 연습문제 27 (p.206); Hints and Answers 17.5.7, 17.5.10, 17.5.13 (p.330); 17.1절 Example 17.2 (p.210–211)"
    checked: original
    note: "(1)은 출처 연습문제 7(p.221, Z_4[x] 에서 차수가 1 보다 큰 가역원을 찾아라)과 같은 발상이다(이 항목은 Z_9 를 쓴다). (2)는 출처 연습문제 10(p.221, Z_10[x] 에서 x² + x + 8 의 서로 다른 두 인수분해)과 같은 발상이고, 그 힌트(p.330)는 x² + x + 8 = (x + 2)(x + 9) 를 든다. (2)의 서로 다른 네 근은 출처 연습문제 11(p.221, Z_6[x] 에서 차수 n 인 다항식이 n 개보다 많은 근을 가질 수 있는가)과 같은 발상이다. (3)은 출처 연습문제 24(p.221, Z_p 에서 x^p − x 는 p 개의 근을 갖는다)를 p = 2 에 쓴 것과 같은 다항식이다(Z_2 에서 X² + X = X² − X). (4)는 출처 연습문제 13(p.221, Z[x] 에서는 나눗셈 정리가 성립하지 않는다)과 같은 대상을 나누어떨어짐으로 본 것이고, 그 힌트(p.330)는 'The integers Z do not form a field' 이다. 영인자를 가진 계수환 위의 곱이 차수 공식을 깨뜨리는 것은 출처 Example 17.2(p.210–211)의 Z_12[x] 의 계산과 같은 발상이다. 확인 질문 '$\\mathbb{Z}_2[X]$에서 $X^3 + X$에 $\\mathbb{Z}_2$의 두 원소를 넣으면?' 도 연습문제 24 와 같은 발상이다(X³ + X 는 X(X + 1)² 이다). 그 다항식 x³ + x 는 출처 연습문제 3(d)(p.220)가 Z_2[x] 에서 나누는 다항식으로 쓰는 것과 같다. 예시 '법 9 에서 3 의 배수를 계수로 더한 가역원' 의 u² = 0 인 u 는 출처 연습문제 16.27(p.206)의 멱영원(어떤 양의 정수 n 에서 a^n = 0)이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
다항식환, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수는 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 환 $\mathbb{Z}$, $\mathbb{R}$, $\mathbb{Z}_n$($n \ge 2$)은 [[ring-examples|환의 예]]의 단위원을 갖는 가환환이다. 다음이 성립한다.

1. (차수가 $1$인 가역원) $\mathbb{Z}_9[X]$에서 $([1] + [3]X)([1] - [3]X) = [1]$이다. 따라서 $[1] + [3]X$는 차수가 $1$인 $\mathbb{Z}_9[X]$의 가역원이다.
2. (두 가지 인수분해) $\mathbb{Z}_{15}[X]$에서
   $$
   \begin{aligned}
   X^2 - [1] &= (X - [1])(X + [1]) \\
   &= (X - [4])(X + [4])
   \end{aligned}
   $$
   이고, $X - [1]$은 $X - [4]$와도 $X + [4]$와도 다른 다항식이다. $[1]$, $[4]$, $[11]$, $[14]$는 $X^2 - [1]$의 서로 다른 네 근이다.
3. (모든 값이 $0$인 다항식) $\mathbb{Z}_2[X]$의 $X^2 + X$는 영다항식이 아니고 차수가 $2$이지만, $\mathbb{Z}_2$의 모든 원소 $r$에서 $(X^2 + X)(r) = [0]$이다. $\mathbb{Z}_2$는 체이다.
4. (작은 환과 큰 환의 나누어떨어짐) $\mathbb{Z}$는 $1$을 포함하는 $\mathbb{R}$의 부분환이고 $\mathbb{Z}[X] \subseteq \mathbb{R}[X]$이다. $\mathbb{R}[X]$에서는 $2X \mid X$이지만 $\mathbb{Z}[X]$에서는 $2X \nmid X$이다.
:::

:::english
The polynomial ring, the coefficients $\operatorname{coef}_n$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility are those of the polynomial ring; degree is that of the degree of a polynomial, and values and roots are those of the evaluation homomorphism. The rings $\mathbb{Z}$, $\mathbb{R}$ and $\mathbb{Z}_n$ ($n \ge 2$) are the commutative rings with unity of the examples of rings. The following hold.

1. (A unit of degree $1$) In $\mathbb{Z}_9[X]$, $([1] + [3]X)([1] - [3]X) = [1]$. Hence $[1] + [3]X$ is a unit of $\mathbb{Z}_9[X]$ of degree $1$.
2. (Two factorizations) In $\mathbb{Z}_{15}[X]$,
   $$
   \begin{aligned}
   X^2 - [1] &= (X - [1])(X + [1]) \\
   &= (X - [4])(X + [4]),
   \end{aligned}
   $$
   and $X - [1]$ is different from both $X - [4]$ and $X + [4]$. $[1]$, $[4]$, $[11]$, $[14]$ are four distinct roots of $X^2 - [1]$.
3. (A polynomial all of whose values are $0$) The polynomial $X^2 + X$ of $\mathbb{Z}_2[X]$ is not the zero polynomial and has degree $2$, but $(X^2 + X)(r) = [0]$ for every element $r$ of $\mathbb{Z}_2$. $\mathbb{Z}_2$ is a field.
4. (Divisibility in a small ring and a large ring) $\mathbb{Z}$ is a subring of $\mathbb{R}$ containing $1$, and $\mathbb{Z}[X] \subseteq \mathbb{R}[X]$. In $\mathbb{R}[X]$, $2X \mid X$, but in $\mathbb{Z}[X]$, $2X \nmid X$.
:::

## 직관

이 항목의 네 예는 앞 항목들의 정리에 붙은 가정이 왜 필요한지를 보여 줍니다. (1)은 [[degree-of-a-polynomial|다항식의 차수]]의 (7)("정역 위의 다항식환의 가역원은 상수")이, (2)는 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (4)("근은 차수 이하")가 정역이라는 가정 없이는 성립하지 않을 수 있다는 것입니다. $\mathbb{Z}_9$에서는 $[3]^2 = [0]$이어서 $[3]X$의 제곱이 사라지고, $\mathbb{Z}_{15}$에서는 $[3][5] = [0]$이어서 근이 차수보다 많아집니다.

(3)은 정역이어도 유한하면 다항식이 그 값들로 정해지지 않을 수 있다는 것입니다. 인수 정리 항목의 (6)이 무한 정역을 가정하는 까닭입니다. (4)는 [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (5)에서 "나누는 다항식의 최고차계수가 작은 환의 가역원"이라는 가정이 필요하다는 것입니다. $2$는 $\mathbb{R}$에서는 가역원이지만 $\mathbb{Z}$에서는 아닙니다.

## 증명

:::idea
모두 계수를 직접 계산한다. 동치류의 계산은 [[integers-modulo-n|법 n의 정수]]의 (2)를 쓴다.
:::

:::proof
**쓰는 사실.** "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n)이다. 두 다항식의 곱의 계수는 다항식환의 곱의 정의로, 그 합은 [[finite-sums-in-a-ring|환의 유한 합]]의 (1)(짧은 합)으로 계산한다. $\mathbb{Z}_n$에서 $[a] + [b] = [a + b]$, $[a][b] = [ab]$이고 $[-a]$는 $[a]$의 덧셈의 역원이다([[integers-modulo-n|법 n의 정수]]의 (2), (4)). $0 \le r < s \le n - 1$이면 $[r] \ne [s]$이다(같은 항목의 (1)).

**1의 증명.** $f = [1] + [3]X$, $g = [1] - [3]X = [1] + [6]X$의 계수는 차례로 $[1], [3], [0], \dots$와 $[1], [6], [0], \dots$이다. 곱의 $0$차 계수는 $[1][1] = [1]$, $1$차 계수는 $[1][6] + [3][1] = [9] = [0]$, $2$차 계수는 $[1][0] + [3][6] + [0][1] = [18] = [0]$이다. $k \ge 3$이면 $k > 1 + 1$이므로 [[degree-of-a-polynomial|다항식의 차수]]의 (4)에 의해 $k$차 계수는 $0$이다. 따라서 $fg = [1]$이고, 곱셈의 교환법칙에 의해 $gf = [1]$이므로 $f$는 가역원이다([[field|가역원과 체]]의 정의). $[3] \ne [0]$이고 $k \ge 2$에서 계수가 $0$이므로 $\deg f = 1$이다(차수의 (1)).

**2의 증명.** $(X - [a])(X + [a])$의 계수는 $0$차가 $[-a][a] = [-a^2]$, $1$차가 $[-a][1] + [1][a] = [0]$, $2$차가 $[1]$이고 그 위는 $0$이므로(차수의 (4)) $X^2 - [a^2]$이다(다항식환의 (5)). $a = 1$이면 $X^2 - [1]$이고, $a = 4$이면 $[16] = [1]$이므로 $X^2 - [1]$이다. $X - [1]$의 상수항은 $[-1] = [14]$이고 $X - [4]$, $X + [4]$의 상수항은 $[-4] = [11]$, $[4]$이다. $[14]$, $[11]$, $[4]$는 서로 다르므로 세 다항식은 서로 다르다. [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (2)에 의해 $X - [1]$, $X + [1] = X - [14]$, $X - [4]$, $X + [4] = X - [11]$이 각각 $X^2 - [1]$을 나누므로 $[1]$, $[14]$, $[4]$, $[11]$은 근이다. 이 넷은 $0$과 $14$ 사이의 서로 다른 정수의 동치류이므로 서로 다르다.

**3의 증명.** $X^2 + X$의 계수는 $[0], [1], [1], [0], \dots$이므로 영다항식이 아니고 차수가 $2$이다(차수의 (1)). [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_2 = \{[0], [1]\}$이고, [[evaluation-homomorphism|대입 준동형]]의 (1)에 의해 $(X^2 + X)([0]) = [0] + [0] = [0]$, $(X^2 + X)([1]) = [1] + [1] = [2] = [0]$이다. $2$는 소수이므로 $\mathbb{Z}_2$는 정역이고([[integral-domain|정역]]의 (3)), $[1]$이 $0$이 아닌 유일한 원소이고 $[1][1] = [1]$이므로 체이다(체의 정의).

**4의 증명.** [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고 $1 \in \mathbb{Z}$이므로, 다항식환의 (7)에 의해 $\mathbb{Z}[X] \subseteq \mathbb{R}[X]$이다. $\mathbb{R}$에서 $2 \cdot \tfrac{1}{2} = 1$이므로([[real-number-arithmetic|실수의 계산 법칙]]) 상수배의 계산(다항식환의 (3)의 (iii))에 의해 $\mathbb{R}[X]$에서 $(2X)\tfrac{1}{2} = X$이고, $2X \mid X$이다. $\mathbb{Z}[X]$에서 $X = (2X)q$인 $q$가 있다면, 다항식환의 (3)의 (iii)과 (4)의 (i)에 의해 $1 = \operatorname{coef}_1(X) = 2\operatorname{coef}_0(q)$인 정수 $\operatorname{coef}_0(q)$가 있어야 하는데, [[even-and-odd|짝수와 홀수]]에 의해 $1$은 짝수가 아니므로 그런 정수는 없다. 따라서 $\mathbb{Z}[X]$에서 $2X \nmid X$이다.
:::

## 예시와 반례

:::example[법 9 에서 3 의 배수를 계수로 더한 가역원]
(1)과 같은 계산이 차수가 더 높아도 됩니다. $\mathbb{Z}_9[X]$에서 $u = [3]X + [3]X^2$이라 하면 $u^2$의 계수는 모두 $[3][3] = [9] = [0]$의 합이므로 $u^2 = 0$이고, $([1] + u)([1] - u) = [1] - u^2 = [1]$입니다. 그래서 $[1] + [3]X + [3]X^2$은 차수가 $2$인 가역원입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_2[X]$에서 $X^3 + X$에 $\mathbb{Z}_2$의 두 원소를 넣으면?]
$[0]$을 넣으면 $[0]$, $[1]$을 넣으면 $[1] + [1] = [0]$입니다. $X^3 + X$는 차수가 $3$인 영이 아닌 다항식이지만 (3)의 $X^2 + X$처럼 모든 값이 $[0]$입니다. 실제로 $\mathbb{Z}_2[X]$에서 $X^3 + X = X(X + [1])^2$입니다($(X + [1])^2 = X^2 + [2]X + [1] = X^2 + [1]$).
:::
