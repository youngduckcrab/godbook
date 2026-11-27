---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, Example 21.29 (p.268) — 문제 '(X² − 2)(X² − 10)의 분해체'와 같은 발상(이차 다항식 두 개의 곱의 분해체를 두 제곱근을 붙인 체로 찾기. 출처의 다항식은 x⁴ + 2x² − 8 이다); 21.5절 Exercises, 연습문제 3 (a) (p.276) — 같은 종류의 물음(x⁴ − 10x² + 21 의 ℚ 위의 분해체)"
  - ref: judson-abstract-algebra
    loc: "21.5절 Exercises, 연습문제 23 (p.277) — 문제 '차수가 2인 확대를 분해체로 보기'와 같은 내용(차수가 2 인 유한 확대는 어떤 다항식의 분해체이다)"
  - ref: judson-abstract-algebra
    loc: "21.5절 Exercises, 연습문제 3 (c) (p.276) — 문제 '법 3의 정수 위의 X³ − X + [1]'과 같은 종류의 물음(ℤ₃ 위의 삼차 다항식 x³ + 2x + 2 의 분해체); 22.4절 Exercises, 연습문제 4, 5 (p.289) — 같은 발상(ℤ₂ 위의 x³ + x² + 1 의 근 하나를 붙인 체에서 그 다항식이 분해된다는 것, 원소가 27개인 체를 만들기)"
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, Example 21.30 (p.268) — 문제 '세제곱하여 2가 되는 실수를 붙인 체'와 같은 발상(x³ − 3 의 근 하나를 붙인 실수의 체는 그 다항식의 분해체가 아니다)"
added: 2026-11-27
---

:::exercise[$(X^2 - 2)(X^2 - 10)$의 분해체]
$f = (X^2 - 2)(X^2 - 10) \in \mathbb{Q}[X]$라 하자. $\mathbb{Q}$, 제곱근 $\sqrt{a}$, $\mathbb{R}$의 부분체 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$는 [[field-extension-examples|체의 확대의 예]]의 것이다.

1. $\mathbb{R}[X]$에서 $f$의 일차식 분해를 쓰고, $\mathbb{R}$ 안의 $f$의 근이 서로 다른 네 개임을 보여라.
2. $\mathbb{Q}(\sqrt{2}, \sqrt{5})$가 $\mathbb{Q}$ 위에서 $f$의 분해체이고, 그 $\mathbb{Q}$ 위의 차수가 $4$임을 보여라.
:::

:::solution
[[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{Q}$는 $\mathbb{R}$의 부분체이고, 그 (4)에 의해 $f$를 $\mathbb{R}[X]$의 원소로 볼 수 있다. $s = \sqrt{2}$, $t = \sqrt{10}$이라 하자. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $ss = 2$, $tt = 10$이고, $0 < 2$, $0 < 10$이므로 $0 < s$, $0 < t$이다.

1. *일차식 분해.* $\mathbb{R}[X]$는 단위원을 갖는 가환환이므로([[polynomial-ring|다항식환]]의 (1)) $(X - s)(X - (-s)) = X^2 - ss = X^2 - 2$이고, 같은 계산으로 $(X - t)(X - (-t)) = X^2 - 10$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (3)으로 두 곱을 이어 붙이면
   $$
   \begin{aligned}
   f &= 1 \cdot (X - s)(X - (-s)) \\
   &\qquad (X - t)(X - (-t))
   \end{aligned}
   $$
   이고, 이것은 $f$의 $\mathbb{R}$에서의 일차식 분해이다([[splitting-field|분해체]]의 정의, $a = 1$, $k = 4$). 분해체의 (1)의 (i)에 의해 $\deg f = 4$이고, 그 (1)의 (ii)에 의해 $\mathbb{R}$ 안의 $f$의 근 전체는 $\{s, -s, t, -t\}$이다.

   *서로 다르다.* $0 < s$, $0 < t$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (ii)에 의해 $-s < 0$, $-t < 0$이고, 양수인 $s$, $t$는 음수인 $-s$, $-t$와 다르다. 제곱근의 존재의 (2)에 의해 $2 < 10$에서 $s < t$이므로 $s \ne t$이고, 따라서 $-s \ne -t$이다. 곧 네 근은 서로 다르다.

2. *분해체.* 분해체의 (9)를 $M = \mathbb{R}$, $K = \mathbb{Q}$, 1의 일차식 분해에 쓰면 $L = \mathbb{Q}(s, -s, t, -t)$는 $\mathbb{Q}$ 위에서 $f$의 분해체이다. $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$라 하고 $L = E$임을 보인다. 제곱근의 존재의 (2)에 의해 $t = \sqrt{2 \cdot 5} = \sqrt{2}\sqrt{5}$이다.

   $E$는 $\mathbb{R}$의 부분체이고 $\mathbb{Q} \subseteq E$, $\sqrt{2}, \sqrt{5} \in E$이므로 $s$, $-s$, $t = \sqrt{2}\sqrt{5}$, $-t$가 모두 $E$에 속한다. 분해체의 (6)의 (i)에 의해 이 네 수는 $\mathbb{Q}$ 위에서 대수적이므로, [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $L \subseteq E$이다. 거꾸로 $L$은 $\mathbb{Q}$, $s$, $t$를 포함하는 부분체이고 $s \ne 0$이므로 $\sqrt{5} = t\,s^{-1} \in L$이다($ts^{-1} = \sqrt{2}\sqrt{5}\,(\sqrt{2})^{-1}$). 체의 확대의 예의 (1), (2)에 의해 $\sqrt{2}$와 $\sqrt{5}$는 $\mathbb{Q}$ 위에서 대수적이므로, 같은 (1)의 (ii)에 의해 $E \subseteq L$이다. 따라서 $E = L$이고, $E$는 $\mathbb{Q}$ 위에서 $f$의 분해체이다.

   *차수.* 체의 확대의 예의 (2)에 의해 $[E : \mathbb{Q}] = 4$이다.
:::

:::exercise[차수가 2인 확대를 분해체로 보기]
$K$가 체 $E$의 부분체이고 $E$가 $K$의 유한 확대이며 $[E : K] = 2$라 하자.

1. $\alpha \notin K$인 $\alpha \in E$가 있음을 보여라.
2. $\alpha \in E$이고 $\alpha \notin K$이면, $\alpha$의 $K$ 위의 최소다항식 $m$에 대하여 $E$는 $K$ 위에서 $m$의 분해체임을 보여라.
:::

:::solution
1. $E$의 모든 원소가 $K$에 속하면 $E = K$이고, [[extension-field|확대체]]의 (2)의 (ii)에 의해 $[E : K] = 1$이 되어 $[E : K] = 2$에 어긋난다. 따라서 $\alpha \notin K$인 $\alpha \in E$가 있다.

2. *$E = K(\alpha)$.* [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)에 의해 $\alpha$는 $K$ 위에서 대수적이다. $2$는 [[prime-number|소수]]이고 $\alpha \notin K$이므로 [[tower-law|차수의 곱셈 공식]]의 (6)에 의해 $E = K(\alpha)$이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $\deg m = [K(\alpha) : K] = 2$이다.

   *$m$의 분해.* [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (3)의 (i)에 의해 $m(\alpha) = 0$이다. $m$을 $E[X]$의 원소로 보면([[subfield|부분체]]의 (3)의 (iv)) [[factor-theorem-for-polynomials|인수 정리]]의 (1)에 의해 $m = (X - \alpha)q + m(\alpha) = (X - \alpha)q$인 $q \in E[X]$가 있고, 그 (3)에 의해 $q \ne 0$, $\deg q = 1$이며 $q$의 최고차계수는 $m$의 최고차계수 $1$이다. [[degree-of-a-polynomial|다항식의 차수]]의 (1)에 의해 $q = \operatorname{coef}_0(q) + X$이고, $\beta = -\operatorname{coef}_0(q) \in E$로 두면 $q = X - \beta$이다. 따라서 $E[X]$에서 $m = 1 \cdot (X - \alpha)(X - \beta)$이고, 이것은 $m$의 $E$에서의 일차식 분해이다. 곧 $m$은 $E$에서 분해된다.

   *분해체.* [[splitting-field|분해체]]의 (6)의 (ii)에 의해 $E = K(\alpha, \beta)$임을 보이면 된다($\beta$는 그 (6)의 (i)에 의해 $K$ 위에서 대수적이다). $K(\alpha, \beta) \subseteq E$이다. 유한 확대와 대수적 확대의 (1)의 (i)에 의해 $K(\alpha, \beta) = K(\alpha)(\beta)$는 $K(\alpha)$를 포함하므로 $E = K(\alpha) \subseteq K(\alpha, \beta)$이다. 따라서 $E = K(\alpha, \beta)$이고 $E$는 $K$ 위에서 $m$의 분해체이다.
:::

:::exercise[밑체에서 분해되는 인수를 곱한 다항식의 분해체]
$K$가 체 $E$의 부분체이고, $f \in K[X]$가 영다항식이 아니며 $\deg f \ge 1$이고, $E$가 $K$ 위에서 $f$의 분해체라 하자. $g \in K[X]$가 영다항식이 아니고, $g$를 $K[X]$의 원소로 보아 $K$에서 분해되면, $E$는 $K$ 위에서 $fg$의 분해체임을 보여라.
:::

:::solution
*차수.* $K$는 체이므로 정역이고([[field|가역원과 체]]의 (3)), [[degree-of-a-polynomial|다항식의 차수]]의 (6)에 의해 $fg \ne 0$이고 $\deg(fg) = \deg f + \deg g \ge 1$이다.

*$fg$는 $E$에서 분해된다.* [[splitting-field|분해체]]의 정의에 의해 $f$는 $E$에서 분해된다. $g$는 $K$에서 분해되므로, 분해체의 (5)의 마지막 문장을 $K$와 그것을 부분체로 갖는 $E$에 쓰면 $g$는 $E[X]$에서도 같은 일차식 분해를 갖는다. 곧 $g$는 $E$에서 분해된다. 분해체의 (3)의 (ii)에 의해 $fg$는 $E$에서 분해된다.

*근을 모두 포함하는 부분체.* $L$이 $E$의 부분체이고 $K \subseteq L$이며 $E$ 안의 $fg$의 근을 모두 원소로 갖는다고 하자. $r \in E$가 $f$의 근이면 [[evaluation-homomorphism|대입 준동형]]의 (2)에 의해 $(fg)(r) = f(r)g(r) = 0 \cdot g(r) = 0$이므로 $r$은 $fg$의 근이고 $r \in L$이다. 곧 $L$은 $K$를 포함하고 $E$ 안의 $f$의 근을 모두 갖는 $E$의 부분체이므로, $E$가 $K$ 위에서 $f$의 분해체라는 것에서 $L = E$이다. 따라서 $E$는 $K$ 위에서 $fg$의 분해체이다.
:::

:::exercise[법 3의 정수 위의 $X^3 - X + [1]$]
$h = X^3 + [2]X + [1] \in \mathbb{Z}_3[X]$라 하자($-[1] = [2]$이므로 $h$는 $X^3 - X + [1]$이다). [[kronecker-theorem|크로네커 정리]]의 설정을 $h$에 쓴 것을 $L$, $\iota$, $\alpha$라 하고 $K = \iota(\mathbb{Z}_3)$로 쓴다. $L$의 단위원을 $1$로 쓴다.

1. $h$가 $\mathbb{Z}_3$ 위에서 기약임을 보여라.
2. $L[X]$에서 $h^{\iota} = (X - \alpha)(X - (\alpha + 1))(X - (\alpha - 1))$임을 보이고, $L$이 $K$ 위에서 $h^{\iota}$의 분해체이며 $h^{\iota}$가 $L$에서 근이 서로 다름을 보여라. $L$의 원소는 몇 개인가?
3. $K$의 원소를 모두 고정하는 환 준동형 $L \to L$은 정확히 세 개임을 보이고, 각각이 $\alpha$를 어디로 보내는지 밝혀라.
:::

:::solution
1. [[evaluation-homomorphism|대입 준동형]]의 (1)과 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (10)의 (ii)에 의해 정수 $k$에서 $h([k]) = [k^3 + 2k + 1]$이고, $k = 0, 1, 2$에서 $k^3 + 2k + 1$은 $1$, $4$, $13$이므로 $h([0]) = h([1]) = h([2]) = [1] \ne [0]$이다. 곧 $h$는 $\mathbb{Z}_3$ 안에 근이 없고 $\deg h = 3$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $\mathbb{Z}_3$ 위에서 기약이다.

2. *표수.* 크로네커 정리의 (1)의 (i), (ii)에 의해 $L$은 체이고 $\iota$는 $\iota([1]) = 1$인 단사인 환 준동형이다. [[characteristic-of-a-ring|환의 표수]]의 (5)의 (ii)와 (4)에 의해 $\operatorname{char} L = \operatorname{char} \mathbb{Z}_3 = 3$이다. 또 [[polynomial-ring|다항식환]]의 (3)에 의해 상수 다항식을 만드는 $\kappa : L \to L[X]$는 $1$을 $1$로 보내는 단사인 환 준동형이므로 같은 (5)의 (ii)에 의해 $\operatorname{char} L[X] = 3$이다. 표수의 (1)에 의해 $L$에서 $3 \cdot 1 = 0$이므로 $2 \cdot 1 = -1$이다.

   *$h^{\iota}$.* $\iota([2]) = \iota([1]) + \iota([1]) = 2 \cdot 1 = -1$이므로, 대입 준동형의 (3)에 의해 $h^{\iota} = X^3 - X + 1$이다. 크로네커 정리의 (1)의 (iv)에 의해 $h^{\iota}(\alpha) = 0$, 곧 $\alpha^3 - \alpha + 1 = 0$이고 $\alpha - \alpha^3 = 1$이다.

   *곱의 계산.* $L[X]$에서 $(X - (\alpha + 1))(X - (\alpha - 1)) = (X - \alpha)^2 - 1$이므로
   $$
   \begin{aligned}
   &(X - \alpha)(X - (\alpha + 1)) \\
   &\qquad \cdot (X - (\alpha - 1)) \\
   &\quad = (X - \alpha)^3 - (X - \alpha)
   \end{aligned}
   $$
   이다. [[binomial-theorem|이항정리]]의 (2)를 표수가 $3$인 가환환 $L[X]$에 쓰면 $(X - \alpha)^3 = X^3 - \alpha^3$이므로, 오른쪽은 $X^3 - X + (\alpha - \alpha^3) = X^3 - X + 1 = h^{\iota}$이다.

   *근이 서로 다르다.* $(\alpha + 1) - \alpha = 1$, $\alpha - (\alpha - 1) = 1$, $(\alpha + 1) - (\alpha - 1) = 2 \cdot 1 = -1$이고 이 셋은 $0$이 아니므로 세 원소 $\alpha$, $\alpha + 1$, $\alpha - 1$은 서로 다르다. 위의 식은 $h^{\iota}$의 $L$에서의 일차식 분해이므로 [[splitting-field|분해체]]의 (1)의 (ii)에 의해 $L$ 안의 $h^{\iota}$의 근 전체는 이 세 원소의 집합이고 원소가 $3$개이다. 대입 준동형의 (3)의 (i)에 의해 $\deg h^{\iota} = 3$이다. [[extension-field|확대체]]의 (3)의 (iii)에 의해 $\iota$를 $\mathbb{Z}_3 \to K$로 선언한 것은 환 동형사상이므로 기약 다항식의 (7)의 (iii)에 의해 $h^{\iota}$는 $K$ 위에서 기약이다. 따라서 [[separable-polynomial|근이 서로 다른 다항식]]의 정의에 의해 $h^{\iota}$는 $L$에서 근이 서로 다르다.

   *분해체.* [[simple-algebraic-extension|단순 대수적 확대]]의 (7)에 의해 $L = K(\alpha)$이다. 분해체의 (6)의 (i)에 의해 세 근은 $K$ 위에서 대수적이고, [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (i)에 의해 $K(\alpha, \alpha + 1, \alpha - 1)$은 $K(\alpha)$를 포함하는 $L$의 부분체이므로 $L$과 같다. 분해체의 (6)의 (ii)에 의해 $L$은 $K$ 위에서 $h^{\iota}$의 분해체이다.

   *원소의 개수.* 크로네커 정리의 (4)에 의해 $|L| = 3^3 = 27$이다.

3. *개수.* $u$가 $h^{\iota}$의 $K$ 위의 모닉 기약 인수이면, $h^{\iota}$도 모닉 기약이므로 기약 다항식의 (3)의 (iv)에 의해 $u = h^{\iota}$이고, 2에 의해 $u$는 $L$에서 근이 서로 다르다. [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (5)에 의해 $K$의 원소를 모두 고정하는 환 준동형 $L \to L$은 정확히 $[L : K]$개이고, 크로네커 정리의 (2)의 (iii)에 의해 $[L : K] = 3$이다.

   *$\alpha$의 상.* [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (9)에 의해 $h$가 모닉이므로 $\alpha$의 $K$ 위의 최소다항식은 $h^{\iota}$이다. $\beta$가 $\alpha$, $\alpha + 1$, $\alpha - 1$ 가운데 하나이면 $\beta$는 $h^{\iota}$의 근이므로, [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (5)를 $E = E' = L$에 쓰면 $K$의 원소를 모두 고정하고 $\alpha$를 $\beta$로 보내는 환 준동형 $\rho_\beta : L = K(\alpha) \to L$이 정확히 하나 있다. 세 $\beta$가 서로 다르므로 $\rho_\alpha$, $\rho_{\alpha+1}$, $\rho_{\alpha-1}$은 $\alpha$에서의 값이 달라 서로 다르다. 그런 준동형은 모두 세 개이므로 이 셋이 전부이다. $\rho_\alpha$는 항등함수이고, 나머지 둘은 $\alpha$를 각각 $\alpha + 1$, $\alpha - 1$로 보낸다.
:::

:::exercise[세제곱하여 2가 되는 실수를 붙인 체]
$c$가 $c^3 = 2$이고 $1 < c < 2$인 실수라 하자([[field-extension-examples|체의 확대의 예]]의 (4)에 의해 그런 $c$가 있다). $f = X^3 - 2 \in \mathbb{Q}[X]$이고, $\mathbb{Q}(c)$는 $\mathbb{R}$의 부분체이다.

1. $x^3 = 2$인 실수 $x$는 $c$뿐임을 보여라.
2. $f$가 $\mathbb{Q}(c)$에서 분해되지 않음을 보이고, 따라서 $\mathbb{Q}(c)$는 $\mathbb{Q}$ 위에서 $f$의 분해체가 아님을 보여라.

체의 확대의 예의 (4)에 의해 $[\mathbb{Q}(c) : \mathbb{Q}] = 3 = \deg f$이다. 문제 2에서 차수가 $2$인 기약 다항식은 근 하나를 붙인 체에서 분해되었지만, 차수가 $3$이면 그렇지 않을 수 있다.
:::

:::solution
1. 실수의 계산으로 $x^3 - c^3 = (x - c)(xx + cx + cc)$이고
   $$
   \begin{aligned}
   &xx + cx + cc \\
   &\quad = \Bigl(x + \frac{c}{2}\Bigr)\Bigl(x + \frac{c}{2}\Bigr) \\
   &\qquad + \frac{3}{4}cc
   \end{aligned}
   $$
   이다([[real-number-arithmetic|실수의 계산 법칙]]). [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 첫째 항은 $0$ 이상이고, $0 < c$이므로 그 (5)의 (i)과 (4)의 (iv)에 의해 $0 < \frac{3}{4}cc$이며, (2)의 (iv)에 의해 합은 양수이다. 곧 $xx + cx + cc \ne 0$이다. $x^3 = 2 = c^3$이면 $(x - c)(xx + cx + cc) = 0$이므로 실수의 계산 법칙의 (K10)에 의해 $x - c = 0$, 곧 $x = c$이다.

2. *근이 서로 다르다.* 체의 확대의 예의 (4)에 의해 $f$는 $c$의 $\mathbb{Q}$ 위의 최소다항식이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (3)의 (i)에 의해 $\mathbb{Q}$ 위에서 기약이다. [[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{Q}$는 $1$을 포함하는 $\mathbb{R}$의 부분환이므로 [[characteristic-of-a-ring|환의 표수]]의 (5)의 (iii)과 (4)에 의해 $\operatorname{char} \mathbb{Q} = \operatorname{char} \mathbb{R} = 0$이다.

   *귀류.* $f$가 $\mathbb{Q}(c)$에서 분해된다고 하자. [[separable-polynomial|근이 서로 다른 다항식]]의 (5)에 의해 기약인 $f$는 $\mathbb{Q}(c)$에서 근이 서로 다르므로, $\mathbb{Q}(c)$ 안의 $f$의 근 전체는 원소를 $\deg f = 3$개 갖는다. [[splitting-field|분해체]]의 (5)의 마지막 문장을 $\mathbb{Q}(c)$와 그것을 부분체로 갖는 $\mathbb{R}$에 쓰면 $\mathbb{R}$ 안의 $f$의 근 전체도 같은 집합이므로 원소가 $3$개이다. 그런데 [[evaluation-homomorphism|대입 준동형]]의 (1)에 의해 실수 $x$가 $f$의 근인 것은 정확히 $x^3 = 2$일 때이고, 1에 의해 그런 실수는 $c$ 하나뿐이다. 원소가 $3$개인 집합이 원소가 $1$개인 집합 $\{c\}$와 같을 수 없으므로([[number-of-elements-is-unique|원소의 개수]]) 어긋난다. 따라서 $f$는 $\mathbb{Q}(c)$에서 분해되지 않는다.

   *분해체가 아니다.* 분해체의 정의는 $f$가 그 체에서 분해되는 것을 요구하므로 $\mathbb{Q}(c)$는 $\mathbb{Q}$ 위에서 $f$의 분해체가 아니다.
:::
