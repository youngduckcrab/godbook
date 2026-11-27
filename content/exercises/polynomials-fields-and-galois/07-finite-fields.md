---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "22.4절 Exercises, 연습문제 7 (p.289) — 문제 '법 3의 정수 위의 기약 이차 다항식과 X⁹ − X'와 같은 종류의 계산(ℤ₂[x] 의 x⁵ − 1, x⁹ − 1 등의 인수분해. 이 문제는 ℤ₃[X] 의 X⁹ − X 를 인수분해한다)"
  - ref: judson-abstract-algebra
    loc: "22.4절 Exercises, 연습문제 23 (p.290) — 문제 '유한체의 두 부분체의 교집합'과 같은 물음(GF(pⁿ) 의 부분체 E, F 의 원소가 p^r, p^s 개일 때 E ∩ F 의 원소의 개수)"
  - ref: judson-abstract-algebra
    loc: "22.4절 Exercises, 연습문제 6 (p.289) — 문제 '유리수체의 곱셈군'과 같은 물음(ℚ* 가 순환군인지 증명하거나 반증하기)"
added: 2026-11-27
---

:::exercise[법 3의 정수 위의 기약 이차 다항식과 $X^9 - X$]
1. $\mathbb{Z}_3$ 위의 모닉 이차 다항식 가운데 $\mathbb{Z}_3$ 위에서 기약인 것을 모두 구하여라.
2. 1에서 구한 다항식 $h$마다, $h$로 만든 [[kronecker-theorem|크로네커 정리]]의 체를 써서 $\mathbb{Z}_3[X]$에서 $h \mid X^9 - X$임을 보여라.
3. 1에서 구한 다항식을 $h_1$, $h_2$, $h_3$이라 할 때 $\mathbb{Z}_3[X]$에서 $X^9 - X = X(X - [1])(X - [2])\,h_1 h_2 h_3$임을 곱해서 확인하여라.
:::

:::solution
1. [[degree-of-a-polynomial|다항식의 차수]]의 (1)에 의해 모닉 이차 다항식은 정확히 $X^2 + [b]X + [c]$($b, c \in \{0, 1, 2\}$)의 아홉 개이다. [[evaluation-homomorphism|대입 준동형]]의 (1)과 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (10)의 (ii)에 의해 정수 $k$에서 그 값은 $[k^2 + bk + c]$이다. $k = 0, 1, 2$에서의 값을 차례로 적으면 다음과 같다.

   | 다항식 | $[0]$ | $[1]$ | $[2]$ |
   |---|---|---|---|
   | $X^2$ | $[0]$ | $[1]$ | $[1]$ |
   | $X^2 + [1]$ | $[1]$ | $[2]$ | $[2]$ |
   | $X^2 + [2]$ | $[2]$ | $[0]$ | $[0]$ |
   | $X^2 + [1]X$ | $[0]$ | $[2]$ | $[0]$ |
   | $X^2 + [1]X + [1]$ | $[1]$ | $[0]$ | $[1]$ |
   | $X^2 + [1]X + [2]$ | $[2]$ | $[1]$ | $[2]$ |
   | $X^2 + [2]X$ | $[0]$ | $[0]$ | $[2]$ |
   | $X^2 + [2]X + [1]$ | $[1]$ | $[1]$ | $[0]$ |
   | $X^2 + [2]X + [2]$ | $[2]$ | $[2]$ | $[1]$ |

   [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 차수가 $2$인 다항식은 근이 없을 때 정확히 기약이므로, 기약인 것은 $h_1 = X^2 + [1]$, $h_2 = X^2 + [1]X + [2]$, $h_3 = X^2 + [2]X + [2]$의 셋이다.

2. $h$가 그 셋 가운데 하나이고 $L$, $\iota$, $\alpha$가 $h$로 만든 크로네커 정리의 설정의 것이라 하자. 그 (1)의 (i)과 (4)에 의해 $L$은 원소가 $3^2 = 9$개인 체이다. [[order-of-a-finite-field|유한체의 원소 개수]]의 (6)에 의해 $L$의 모든 원소 $a$에서 $a^9 = a$이고, 특히 $\alpha^9 = \alpha$이다. $g = X^9 - X \in \mathbb{Z}_3[X]$라 하면 $\iota([1]) = 1$이므로 대입 준동형의 (3)에 의해 $g^{\iota} = X^9 - X$이고 $g^{\iota}(\alpha) = \alpha^9 - \alpha = 0$이다. 크로네커 정리의 (1)의 (iv)에 의해 $\mathbb{Z}_3[X]$에서 $h \mid g$이다.

3. [[polynomial-ring|다항식환]]의 (1)에 의해 $\mathbb{Z}_3[X]$는 단위원을 갖는 가환환이고, 계수는 $\mathbb{Z}_3$에서 계산한다($[3] = [0]$, $[4] = [1]$, $[6] = [0]$). 차례로 곱하면
   $$
   \begin{aligned}
   h_2 h_3 &= X^4 + [3]X^3 + [6]X^2 \\
   &\qquad + [6]X + [4] \\
   &= X^4 + [1], \\
   h_1 h_2 h_3 &= (X^2 + [1])(X^4 + [1]) \\
   &= X^6 + X^4 + X^2 + [1]
   \end{aligned}
   $$
   이고, $[2] = -[1]$이므로 $X(X - [1])(X - [2]) = X^3 - [3]X^2 + [2]X = X^3 - X$이다. 따라서
   $$
   \begin{aligned}
   &(X^3 - X) \\
   &\qquad \cdot (X^6 + X^4 + X^2 + [1]) \\
   &\quad = X^9 + X^7 + X^5 + X^3 \\
   &\qquad - X^7 - X^5 - X^3 - X \\
   &\quad = X^9 - X
   \end{aligned}
   $$
   이다.
:::

:::exercise[유한체에서 세제곱하는 함수가 전단사일 조건]
$F$가 유한체이고 $q = |F|$이며, $t : F \to F$를 모든 $a \in F$에서 $t(a) = a^3$인 함수라 하자. $t$가 전단사인 것은 정확히 $3 \nmid q - 1$일 때임을 보여라.
:::

:::solution
[[order-of-a-finite-field|유한체의 원소 개수]]의 (6)에 의해 $F^{\times} = F - \{0\}$은 원소가 $q - 1$개인 군이고, 체에서 $0 \ne 1$이므로 $q \ge 2$, $q - 1 \ge 1$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (8)에 의해 $F^{\times}$의 원소의 거듭제곱은 군 $F^{\times}$에서 계산한 것과 같다.

*$3 \nmid q - 1$이면 전단사이다.* $a, b \in F$이고 $a^3 = b^3$이라 하자. $b = 0$이면 $a^3 = 0$이고, 체는 정역이므로([[field|가역원과 체]]의 (3)) 유한 곱의 (7)에 의해 $a = 0 = b$이다. $b \ne 0$이면 같은 (7)에 의해 $b^3 \ne 0$이므로 $a \ne 0$이다. $x = ab^{-1} \in F^{\times}$로 두면 유한 곱의 (6)의 (iv)에 의해 $x^3 b^3 = (xb)^3 = a^3 = b^3$이고 [[integral-domain|정역]]의 (1)의 소거법칙으로 $x^3 = 1$이다. 군 $F^{\times}$는 유한군이므로 [[order-of-an-element|원소의 위수]]의 (6)에 의해 $x$의 위수 $d$는 유한하고, 그 (2)에 의해 $x^3 = 1$에서 $d \mid 3$이다. $d$는 자연수이고 $3$은 [[prime-number|소수]]이므로 $d = 1$이거나 $d = 3$이다. 또 유한체의 원소 개수의 (6)의 $x^{q-1} = 1$과 위수의 (2)에 의해 $d \mid q - 1$이므로 $d = 3$이면 $3 \mid q - 1$이 되어 가정에 어긋난다. 따라서 $d = 1$이고 위수의 (1)에 의해 $x = 1$, 곧 $a = b$이다. 이렇게 $t$는 단사이다. 그러면 $t$를 함수 $F \to t(F)$로 본 것은 전단사이므로 $|t(F)| = |F|$이고([[number-of-elements-is-unique|원소의 개수]]), $t(F) \subseteq F$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $t(F) = F$이다. 곧 $t$는 전사이고 전단사이다.

*$3 \mid q - 1$이면 전단사가 아니다.* $q - 1 = 3m$인 정수 $m$을 잡으면 $3m = q - 1 \ge 1$이므로 $m \ge 1$이고 $m < 3m = q - 1$이다. [[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4)에 의해 $F^{\times} = \langle g \rangle$이고 $\operatorname{ord}(g) = q - 1$인 $g$가 있다. $y = g^m$으로 두자. $y = 1$이면 위수의 (2)에 의해 $q - 1 \mid m$이고, $m \ge 1$이므로 $m \ge q - 1$이 되어 $m < q - 1$에 어긋난다. 따라서 $y \ne 1$이다. 한편 [[laws-of-exponents|지수법칙]]의 (2)에 의해 $y^3 = g^{3m} = g^{q-1} = 1$이다. 곧 $t(y) = 1 = t(1)$이고 $y \ne 1$이므로 $t$는 단사가 아니고, 따라서 전단사가 아니다.
:::

:::exercise[유한체의 두 부분체의 교집합]
$E$가 유한체이고, $p$, $n$이 [[subfields-of-a-finite-field|유한체의 부분체]]의 설정의 것이라 하자($p = \operatorname{char} E$, $n = [E : \mathbb{P}_E]$, $|E| = p^n$). 그 항목처럼 자연수 $m$마다 $E_m = \{a \in E : a^{p^m} = a\}$로 쓴다. $k$, $l$이 $n$의 양의 약수이고 $d = \gcd(k, l)$이면, $E_k \cap E_l = E_d$이고 $E_k \cap E_l$은 원소가 $p^d$개인 $E$의 부분체임을 보여라.
:::

:::solution
*$d$는 $n$의 양의 약수이다.* $k, l \ge 1$이므로 [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $d \ge 1$이고, 최대공약수의 정의에 의해 $d \mid k$이다. $k \mid n$이므로 [[divisibility-is-transitive|나누어떨어짐의 추이성]]에 의해 $d \mid n$이다.

*교집합은 어떤 $E_m$이다.* 유한체의 부분체의 (2)에 의해 $E_k$와 $E_l$은 $E$의 부분체이고, [[subfield|부분체]]의 (5)의 (ii)에 의해 $E_k \cap E_l$도 $E$의 부분체이다. 유한체의 부분체의 (4)에 의해 $E_k \cap E_l = E_m$인 $n$의 양의 약수 $m$이 있다.

*$E_m \subseteq E_d$.* $E_m \subseteq E_k$이므로 유한체의 부분체의 (3)에 의해 $m \mid k$이고, 같은 이유로 $m \mid l$이다. [[common-divisor-divides-gcd|공약수는 최대공약수를 나눈다]]의 (1)에 의해 $m \mid d$이고, 다시 (3)에 의해 $E_m \subseteq E_d$이다.

*$E_d \subseteq E_m$.* $d \mid k$, $d \mid l$이므로 (3)에 의해 $E_d \subseteq E_k$, $E_d \subseteq E_l$이고, 따라서 $E_d \subseteq E_k \cap E_l = E_m$이다.

두 포함에서 $E_k \cap E_l = E_m = E_d$이다. $d$는 $n$의 양의 약수이므로 유한체의 부분체의 (2)에 의해 $E_d$는 원소가 $p^d$개인 $E$의 부분체이다.
:::

:::exercise[유한체에서 $-1$이 제곱수일 조건]
$F$가 유한체이고 $q = |F|$라 하자. $x^2 = -1$인 $x \in F$가 있는 것은 정확히 $q$가 짝수이거나 $4 \mid q - 1$일 때임을 보여라.
:::

:::solution
[[order-of-a-finite-field|유한체의 원소 개수]]의 (1), (3)에 의해 $p = \operatorname{char} F$는 소수이고 $q = p^n$인 자연수 $n$이 있다.

*$q$가 짝수일 때.* $2 \mid p^n$이고 $p^n$은 모든 자리가 $p$인 길이 $n$인 열의 곱이므로([[prime-power-divisors|소수의 거듭제곱인 약수]]의 정의) [[euclids-lemma|유클리드 보조정리]]의 (2)에 의해 $2 \mid p$이다. $p$는 소수이고 $2 > 1$이므로 소수의 정의에 의해 $2 = p$이다. [[characteristic-of-a-ring|환의 표수]]의 (1)에 의해 $2 \cdot 1 = 0$이므로 $-1 = 1$이고, $x = 1$에서 $x^2 = 1 = -1$이다. 따라서 이때는 그런 $x$가 있다.

*$q$가 홀수일 때의 준비.* $p = 2$이면 $n \ge 1$이므로 $2 \mid 2^n = q$가 되어 $q$가 홀수라는 것에 어긋난다. 따라서 $p \ne 2$이다. 소수 $2$의 양의 약수는 $1$과 $2$뿐이고 $p \ge 2$, $p \ne 2$이므로 $p \nmid 2$이며, 표수의 (1)에 의해 $2 \cdot 1 \ne 0$, 곧 $1 \ne -1$이다. $q$가 홀수이므로 $q - 1 = 2s$인 정수 $s$가 있고([[even-and-odd|짝수와 홀수]]), $q \ge 2$이므로 $s \ge 1$이고 $s < 2s$이다. [[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4)에 의해 $F^{\times} = \langle g \rangle$이고 $\operatorname{ord}(g) = 2s$인 $g$가 있다.

*$g^s = -1$.* $y = g^s$라 하자. [[order-of-an-element|원소의 위수]]의 (2)에 의해 $g^s = 1$이면 $2s \mid s$인데 $1 \le s < 2s$이므로 그럴 수 없고, 따라서 $y \ne 1$이다. [[laws-of-exponents|지수법칙]]의 (2)에 의해 $y^2 = g^{2s} = 1$이다. $F$ 안의 $X^2 - 1$의 근 전체를 $R$이라 하면 [[factor-theorem-for-polynomials|인수 정리]]의 (4)에 의해 $R$은 원소가 $2$개 이하이고, $1^2 - 1 = 0$, $(-1)^2 - 1 = 0$이므로 서로 다른 $1$과 $-1$이 $R$에 속하며, 따라서 [[subset-of-finite-set|유한집합의 부분집합]]의 (1), (2)에 의해 $R = \{1, -1\}$이다. $y \in R$이고 $y \ne 1$이므로 $y = -1$이다. (군 $F^{\times}$의 거듭제곱은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (8)에 의해 $F$에서의 거듭제곱과 같다.)

*$4 \mid q - 1$이면 있다.* $q - 1 = 4u$이면 $2s = 4u$에서 $s = 2u$이고, $x = g^u$에서 지수법칙의 (2)에 의해 $x^2 = g^{2u} = g^s = -1$이다.

*있으면 $4 \mid q - 1$이다.* $x^2 = -1$이면 $0^2 = 0 \ne -1$이므로 $x \ne 0$이고, $x \in F^{\times} = \langle g \rangle$이므로 [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $x = g^k$인 정수 $k$가 있다. 지수법칙의 (2)에 의해 $g^{2k} = x^2 = -1 = g^s$이고, 위수의 (8), (2)에 의해 $2s \mid 2k - s$이다. 곧 $2k - s = 2sj$인 정수 $j$가 있고 $s = 2(k - sj)$이다. 따라서 $q - 1 = 2s = 4(k - sj)$이고 $4 \mid q - 1$이다.

두 경우를 합치면 $x^2 = -1$인 $x$가 있는 것은 정확히 $q$가 짝수이거나 $4 \mid q - 1$일 때이다.
:::

:::exercise[유리수체의 곱셈군]
[[rational-numbers-field|유리수체]] $\mathbb{Q}$의 가역원의 군 $\mathbb{Q}^{\times}$가 순환군이 아님을 보여라. 따라서 [[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (3)에서 $G$가 유한집합이라는 가정을 빼면 결론이 성립하지 않을 수 있다.
:::

:::solution
$\mathbb{Q}$는 체이므로([[rational-numbers-field|유리수체]]의 (1)) [[field|가역원과 체]]의 정의에 의해 $\mathbb{Q}^{\times}$는 $0$이 아닌 유리수 전체이고, 그 (1)에 의해 곱셈으로 군이며 항등원은 $1$이다. $\mathbb{Q}^{\times} = \langle a \rangle$인 $a \in \mathbb{Q}^{\times}$가 있다고 하자.

*$a$의 위수는 유한하다.* $-1 \in \mathbb{Q}^{\times}$이므로 [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $-1 = a^k$인 정수 $k$가 있다. $1 + 1 = 2 \ne 0$이므로 $-1 \ne 1 = a^0$이고 $k \ne 0$이다. [[laws-of-exponents|지수법칙]]의 (2)에 의해 $a^{2k} = (a^k)^2 = (-1)(-1) = 1$이다. $2k > 0$이면 $N = 2k$로, $2k < 0$이면 지수법칙의 (3)에 의해 $a^{-2k} = (a^{2k})^{-1} = 1$이므로 $N = -2k$로 두면, $N$은 자연수이고 $a^N = 1$이다. 따라서 [[order-of-an-element|원소의 위수]]의 정의에 의해 $a$의 위수는 유한하다.

*어긋남.* [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle a \rangle = \mathbb{Q}^{\times}$는 유한집합이다. 그런데 자연수는 $0$이 아닌 유리수이므로 $\mathbb{N} \subseteq \mathbb{Q}^{\times}$이고, [[natural-numbers-are-infinite|자연수의 집합은 무한집합이다]]의 (2)에 의해 $\mathbb{Q}^{\times}$는 무한집합이다. 어긋나므로 $\mathbb{Q}^{\times}$는 순환군이 아니다.

*가정의 역할.* 군 $\mathbb{Q}^{\times}$는 체 $\mathbb{Q}$의 곱셈군 자신이므로 자기 자신의 부분군이지만 유한집합이 아니고, 위에서 본 것처럼 순환군도 아니다.
:::
