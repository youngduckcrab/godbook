---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 20 (p.221) — 문제 'X를 X + 1로 옮겨 아이젠슈타인 판정법 쓰기'의 2와 같은 발상(X 를 x + 1 로 옮긴 뒤 아이젠슈타인 판정법을 쓰는 원분다항식. 출처는 소수 p 의 Φ_p)"
  - ref: judson-abstract-algebra
    loc: "18.4절 Exercises, 연습문제 10 (p.235–236) — 문제 '유리수체의 부분체'와 같은 주제(진부분체가 없는 체. 출처는 이런 체를 prime field 라 부르고, 표수가 0 인 체의 prime subfield 가 ℚ 와 동형임을 보이게 한다)"
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 9 (p.221) — 문제 '법 2로 줄여 보는 사차 다항식의 기약성'의 풀이에 쓰는 사실(ℤ₂ 위의 기약 이차 다항식을 모두 찾기)과 같은 종류"
added: 2026-11-27
---

:::exercise[유리근 정리로 쪼개는 삼차 다항식]
$f = 2X^3 + X^2 + X - 1 \in \mathbb{Z}[X]$라 하자.

1. [[gauss-lemma|가우스 보조정리]]의 (3)으로 $f$의 유리수 근의 후보를 모두 적고, 실제 유리수 근을 구하라.
2. $f$를 $\mathbb{Q}[X]$에서 [[factorization-into-irreducible-polynomials|기약 다항식으로의 분해]]의 (2)의 꼴로 쓰고, 쓰인 인수가 모두 모닉 기약 다항식임을 보여라.
3. $f$는 $\mathbb{Q}$ 위에서 기약인가?
:::

:::solution
[[rational-numbers-field|유리수체]]의 (1), (4)에 의해 $\mathbb{Q}$는 체이고 $\mathbb{Z}[X] \subseteq \mathbb{Q}[X]$이며, $f$의 최고차계수는 $2$, 상수항은 $-1$이다([[degree-of-a-polynomial|다항식의 차수]]의 (1)).

1. 가우스 보조정리의 (3)에 의해 기약분수 꼴 $r/s$($s \ge 1$)인 유리수 근은 $r \mid -1$, $s \mid 2$를 만족한다. $r \mid -1$이면 $-1 = rc$인 정수 $c$가 있어 $1 = r(-c)$이므로 $r \mid 1$이고, [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (3)과 (9)의 (ii)에 의해 $r$은 $1$이거나 $-1$이다. $2$의 양의 약수 $s$는 $1 \le s \le 2$이므로([[prime-number|소수]]의 진술) $s$는 $1$이거나 $2$이다. 따라서 후보는 $1$, $-1$, $\tfrac{1}{2}$, $-\tfrac{1}{2}$이다. [[evaluation-homomorphism|대입 준동형]]의 (1)로 값을 구하면
   $$
   \begin{aligned}
   f(1) &= 2 + 1 + 1 - 1 = 3, \\
   f(-1) &= -2 + 1 - 1 - 1 = -3, \\
   f(\tfrac{1}{2}) &= \tfrac{1}{4} + \tfrac{1}{4} + \tfrac{1}{2} - 1 = 0, \\
   f(-\tfrac{1}{2}) &= -\tfrac{1}{4} + \tfrac{1}{4} - \tfrac{1}{2} - 1 = -\tfrac{3}{2}
   \end{aligned}
   $$
   이므로 유리수 근은 $\tfrac{1}{2}$뿐이다.

2. 계수를 구하면
   $$
   \begin{aligned}
   &(X - \tfrac{1}{2})(2X^2 + 2X + 2) \\
   &\quad = 2X^3 + 2X^2 + 2X \\
   &\qquad - X^2 - X - 1 \\
   &\quad = f
   \end{aligned}
   $$
   이고, $2X^2 + 2X + 2 = 2(X^2 + X + 1)$이므로
   $$
   f = 2\,(X - \tfrac{1}{2})(X^2 + X + 1)
   $$
   이다. $X - \tfrac{1}{2}$은 차수가 $1$인 모닉이므로 [[irreducible-polynomial|기약 다항식]]의 (3)의 (ii)에 의해 기약이다. $h = X^2 + X + 1$은 정수 계수의 모닉이므로 가우스 보조정리의 (3)에 의해 유리수 근은 $1$을 나누는 정수, 곧 1에서처럼 $1$이나 $-1$이어야 하는데, $h(1) = 3$, $h(-1) = 1$이므로 유리수 근이 없다. 차수가 $2$이므로 기약 다항식의 (5)에 의해 $h$는 $\mathbb{Q}$ 위에서 기약이다. 따라서 위의 식은 기약 다항식으로의 분해의 (2)에서 $c = 2$, $k = 2$, $h_1 = X - \tfrac{1}{2}$, $h_2 = X^2 + X + 1$인 꼴이다.

3. 기약이 아니다. $f = (2X - 1)(X^2 + X + 1)$이고 두 인수의 차수는 $1$과 $2$로 모두 $1$ 이상이므로 기약 다항식의 (2)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이 아니다. 이 분해는 정수 계수의 두 인수로 이루어져 있고, 가우스 보조정리의 (2)와 맞는다.
:::

:::exercise[X를 X + 1로 옮겨 아이젠슈타인 판정법 쓰기]
1. $X^4 + 1$이 $\mathbb{Q}$ 위에서 기약임을 $\tau_1(X^4 + 1) = (X + 1)^4 + 1$로 보여라.
2. 같은 방법으로 $X^6 + X^3 + 1$이 $\mathbb{Q}$ 위에서 기약임을 보여라.
:::

:::solution
$\tau_1$은 [[evaluation-homomorphism|대입 준동형]]의 (9)의 환 동형사상 $\mathbb{Q}[X] \to \mathbb{Q}[X]$이고, 상수를 그대로 두고 $X$를 $X + 1$로 보낸다. [[binomial-coefficient|이항계수]]의 파스칼 규칙으로 줄을 이어 가면 $C(3, k)$는 $1, 3, 3, 1$, $C(4, k)$는 $1, 4, 6, 4, 1$, $C(6, k)$는 $1, 6, 15, 20, 15, 6, 1$이다($k = 0, 1, \dots$). 환 $\mathbb{Q}[X]$에서 정수배 $n \cdot g$는 [[ring-basic-properties|환의 기본 성질]]의 (6)에 의해 $(n \cdot 1)g$이고, [[polynomial-ring|다항식환]]의 (3)의 $\kappa$와 [[ring-homomorphism|환 준동형]]의 (1), [[rational-numbers-field|유리수체]]의 (5)에 의해 $n \cdot 1 = n \cdot \kappa(1) = \kappa(n \cdot 1) = \kappa(n)$, 곧 상수 다항식 $n$이다.

1. [[binomial-theorem|이항정리]]의 (1)을 $\mathbb{Q}[X]$에서 $a = X$, $b = 1$에 쓰면
   $$
   \begin{aligned}
   &\tau_1(X^4 + 1) = (X + 1)^4 + 1 \\
   &\quad = X^4 + 4X^3 + 6X^2 \\
   &\qquad + 4X + 2
   \end{aligned}
   $$
   이다. 계수가 모두 정수이므로 이 다항식은 $\mathbb{Z}[X]$의 원소이다(다항식환의 (7)의 (i)). [[eisenstein-criterion|아이젠슈타인 판정법]]의 (1)을 $p = 2$에 쓴다. 최고차계수 $1$을 $2$가 나누지 않고, 나머지 계수 $4$, $6$, $4$, $2$는 모두 $2$의 배수이며, $2 = 4 \cdot 0 + 2$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $4 \nmid 2$이다. 따라서 $\tau_1(X^4 + 1)$은 $\mathbb{Q}$ 위에서 기약이고, [[irreducible-polynomial|기약 다항식]]의 (8)에 의해 $X^4 + 1$도 기약이다.

2. 같은 방법으로
   $$
   \begin{aligned}
   &(X + 1)^6 + (X + 1)^3 + 1 \\
   &\quad = X^6 + 6X^5 + 15X^4 \\
   &\qquad + 20X^3 + 15X^2 + 6X \\
   &\qquad + 1 + X^3 + 3X^2 \\
   &\qquad + 3X + 1 + 1 \\
   &\quad = X^6 + 6X^5 + 15X^4 \\
   &\qquad + 21X^3 + 18X^2 + 9X + 3
   \end{aligned}
   $$
   이다. $p = 3$이면 최고차계수 $1$을 $3$이 나누지 않고, $6, 15, 21, 18, 9, 3$은 모두 $3$의 배수이며($3 \cdot 2$, $3 \cdot 5$, $3 \cdot 7$, $3 \cdot 6$, $3 \cdot 3$, $3 \cdot 1$), $3 = 9 \cdot 0 + 3$이므로 $9 \nmid 3$이다. 아이젠슈타인 판정법의 (1)과 기약 다항식의 (8)에 의해 $X^6 + X^3 + 1$은 $\mathbb{Q}$ 위에서 기약이다.
:::

:::exercise[유리수체의 부분체]
1. $K$가 [[rational-numbers-field|유리수체]] $\mathbb{Q}$의 부분체이면 $K = \mathbb{Q}$임을 보여라.
2. 체 $\mathbb{R}$의 모든 부분체는 $\mathbb{Q}$를 포함함을 보여라.
:::

:::solution
1. [[subfield|부분체]]의 정의에 의해 $K$는 $1 \in K$인 $\mathbb{Q}$의 부분환이고, [[subring|부분환]]의 (1)에 의해 덧셈군 $(\mathbb{Q}, +)$의 부분군이다. [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 모든 정수 $n$에서 $n \cdot 1 \in K$이고, 유리수체의 (5)에 의해 $n \cdot 1 = n$이다. 곧 $\mathbb{Z} \subseteq K$이다.

   $x \in \mathbb{Q}$라 하자. [[rational-and-irrational-numbers|유리수와 무리수]]의 정의에 의해 $x = a/b$인 정수 $a$, $b$($b \ne 0$)가 있고, 유리수체의 진술에 의해 $a/b = ab^{-1}$이다. $b \in K$이고 $b \ne 0$이므로 부분체의 (1)에 의해 체 $\mathbb{Q}$에서의 역원 $b^{-1}$이 $K$에 속한다. 유리수체의 (1)에 의해 $\mathbb{Q}$는 $\mathbb{R}$의 부분체이므로 부분체의 (3)의 (i)에 의해 이 역원은 실수의 역수 $b^{-1}$과 같다. $a \in K$이고 $K$는 곱셈에 닫혀 있으므로 $x = ab^{-1} \in K$이다. 따라서 $\mathbb{Q} \subseteq K \subseteq \mathbb{Q}$이고 $K = \mathbb{Q}$이다.

2. $L$이 $\mathbb{R}$의 부분체라 하자. 부분체의 (5)의 (ii)에 의해 $L \cap \mathbb{Q}$는 $\mathbb{R}$의 부분체이고, $L \cap \mathbb{Q} \subseteq \mathbb{Q}$이므로 부분체의 (5)의 (i)(체 $\mathbb{Q}$에 쓴 것)에 의해 체 $\mathbb{Q}$의 부분체이다. 1에 의해 $L \cap \mathbb{Q} = \mathbb{Q}$이므로 $\mathbb{Q} \subseteq L$이다.
:::

:::exercise[서로 다른 두 모닉 기약 다항식이 만드는 아이디얼]
1. $F$가 [[field|체]]이고 $f$, $g$가 $F$ 위의 서로 다른 모닉 기약 다항식이면 $fF[X] + gF[X] = F[X]$임을 보여라.
2. $\mathbb{Z}_3[X]$의 $f = X^2 + [1]$과 $g = X^2 + [2]X + [2]$에 대하여 $af + bg = [1]$인 $a, b \in \mathbb{Z}_3[X]$를 구하라.
:::

:::solution
1. $f \mid g$라 하면, $f$와 $g$가 모닉 기약 다항식이므로 [[irreducible-polynomial|기약 다항식]]의 (3)의 (iv)에 의해 $f = g$가 되어 가정과 어긋난다. 따라서 $f \nmid g$이고, [[irreducible-polynomial-and-maximal-ideal|기약 다항식과 극대 아이디얼]]의 (6)에 의해 $af + bg = 1$인 $a, b \in F[X]$가 있다. $F[X]$는 가환환이므로 $af = fa \in fF[X]$, $bg = gb \in gF[X]$이고, [[ideal|아이디얼]]의 (8)의 (ii)에 의해 $1 \in fF[X] + gF[X]$이며 이 합은 아이디얼이다. 아이디얼의 (4)에 의해 $fF[X] + gF[X] = F[X]$이다.

2. $3$은 소수이므로 $\mathbb{Z}_3$은 체이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). $[0], [1], [2]$를 넣으면 $f$의 값은 $[1], [2], [5] = [2]$이고 $g$의 값은 $[2], [5] = [2], [10] = [1]$이므로([[evaluation-homomorphism|대입 준동형]]의 (1)) 둘 다 근이 없고, 차수가 $2$이므로 기약 다항식의 (5)에 의해 기약이다. 두 다항식은 모닉이고 $X$의 계수가 달라 서로 다르다.

   나눗셈을 차례로 한다. $g - f = [2]X + [1]$이다. 계수를 구하면 $([2]X + [1])(X + [1]) = [2]X^2 + [3]X + [1] = [2]X^2 + [1]$이므로 $f + ([2]X + [1])(X + [1]) = [3]X^2 + [2] = [2]$이다. 여기에 $[2]X + [1] = g - f$를 넣으면
   $$
   \begin{aligned}
   [2] &= f + (g - f)(X + [1]) \\
   &= -Xf + (X + [1])g
   \end{aligned}
   $$
   이다. $[2][2] = [4] = [1]$이므로 양쪽에 $[2]$를 곱하고 $-[2] = [1]$을 쓰면 $[1] = Xf + ([2]X + [2])g$이다. 곧 $a = X$, $b = [2]X + [2]$로 둘 수 있다. 검산: $X(X^2 + [1]) = X^3 + X$이고 $([2]X + [2])(X^2 + [2]X + [2]) = [2]X^3 + [6]X^2 + [8]X + [4]$이므로 둘을 더하면
   $$
   \begin{aligned}
   &[3]X^3 + [6]X^2 + [9]X + [4] \\
   &\quad = [1]
   \end{aligned}
   $$
   이다($[3] = [6] = [9] = [0]$, $[4] = [1]$).
:::

:::exercise[법 2로 줄여 보는 사차 다항식의 기약성]
$f = X^4 + 2X^3 + 3X + 5 \in \mathbb{Z}[X]$라 하자.

1. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (1)을 어떤 소수 $p$로도 $f$에 바로 쓸 수 없음을 확인하라.
2. $f$를 법 $2$로 줄인 다항식 $f^{\rho}$가 $\mathbb{Z}_2$ 위에서 기약임을 보여라.
3. $f$가 $\mathbb{Q}$ 위에서 기약임을 보여라.
:::

:::solution
1. $f$의 계수는 차례로 $5, 3, 0, 2, 1$이고, (1)의 조건에는 $p \mid 5$와 $p \mid 3$이 모두 들어 있다. 소수 $p$가 $3$을 나누면 $p$는 $3$의 양의 약수이므로 $1 \le p \le 3$이고([[prime-number|소수]]의 진술) $p \ne 1$이므로 $p$는 $2$이거나 $3$이다. 그런데 $5 = 2 \cdot 2 + 1$, $5 = 3 \cdot 1 + 2$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $2 \nmid 5$이고 $3 \nmid 5$이다. 따라서 (1)의 조건을 만족하는 소수는 없다.

2. [[evaluation-homomorphism|대입 준동형]]의 (10)에 의해 $f^{\rho}$의 계수는 $f$의 계수의 법 $2$의 동치류이므로 $f^{\rho} = X^4 + [0]X^3 + [1]X + [1] = X^4 + X + [1]$이다. $2$는 소수이므로 $\mathbb{Z}_2$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)), $f^{\rho}$는 차수가 $4$인 모닉이다. $f^{\rho}([0]) = [1]$, $f^{\rho}([1]) = [3] = [1]$이므로 $f^{\rho}$는 $\mathbb{Z}_2$ 안에 근이 없다.

   $f^{\rho}$가 기약이 아니라 하자. [[irreducible-polynomial|기약 다항식]]의 (2)에 의해 $f^{\rho} = gh$이고 $\deg g \ge 1$, $\deg h \ge 1$, $\deg g + \deg h = 4$인 $g$, $h$가 있다. $g$가 근 $c \in \mathbb{Z}_2$를 가지면 대입 준동형의 (2)에 의해 $f^{\rho}(c) = g(c)h(c) = 0$이 되어 어긋나므로 $g$는 근이 없고, $h$도 같다. 차수가 $1$인 다항식 $uX + v$($u \ne [0]$)에 $-u^{-1}v$를 넣으면 대입 준동형의 (1)에 의해 $u(-u^{-1}v) + v = -v + v = [0]$이므로 근이 있다. 그래서 $g$, $h$의 차수는 $1$이 아니고, 따라서 둘 다 $2$이다. $\mathbb{Z}_2$의 $0$이 아닌 원소는 $[1]$뿐이므로 $g$, $h$는 모닉이다. 차수가 $2$인 모닉 다항식은 $X^2 + uX + v$($u, v \in \mathbb{Z}_2$)의 넷이고, $[0]$과 $[1]$에서의 값은
   $$
   \begin{aligned}
   X^2 &: [0], [1], \\
   X^2 + [1] &: [1], [0], \\
   X^2 + X &: [0], [0], \\
   X^2 + X + [1] &: [1], [1]
   \end{aligned}
   $$
   이므로 근이 없는 것은 $X^2 + X + [1]$뿐이다. 그래서 $g = h = X^2 + X + [1]$이고
   $$
   \begin{aligned}
   gh &= X^4 + [2]X^3 + [3]X^2 \\
   &\quad + [2]X + [1] \\
   &= X^4 + X^2 + [1]
   \end{aligned}
   $$
   이다. 그런데 $gh$의 $1$차 계수는 $[0]$이고 $f^{\rho}$의 $1$차 계수는 $[1]$이므로 $gh \ne f^{\rho}$이다. 이것은 모순이므로 $f^{\rho}$는 $\mathbb{Z}_2$ 위에서 기약이다.

3. $f$의 최고차계수 $1$을 $2$가 나누지 않고 $\deg f = 4 \ge 1$이므로, 2와 [[gauss-lemma|가우스 보조정리]]의 (4)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이다.
:::

:::exercise[최고차계수를 나누는 소수로 줄인 다항식]
$f = 3X^2 + 4X + 1 \in \mathbb{Z}[X]$라 하자.

1. $f$는 $\mathbb{Q}$ 위에서 기약이 아님을 보여라.
2. $f$를 법 $3$으로 줄인 다항식은 $\mathbb{Z}_3$ 위에서 기약임을 보여라.
3. 1과 2가 [[gauss-lemma|가우스 보조정리]]의 (4)와 어긋나지 않는 까닭을 말하라.
:::

:::solution
1. 계수를 구하면 $(3X + 1)(X + 1) = 3X^2 + 4X + 1 = f$이고, 두 인수의 차수는 모두 $1$이다. [[irreducible-polynomial|기약 다항식]]의 (2)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이 아니다.

2. [[evaluation-homomorphism|대입 준동형]]의 (10)에 의해 법 $3$으로 줄인 다항식은 $[3]X^2 + [4]X + [1] = X + [1]$이고, $X$의 계수 $[1] \ne [0]$이므로 차수가 $1$이다([[degree-of-a-polynomial|다항식의 차수]]의 (1)). $\mathbb{Z}_3$은 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) 기약 다항식의 (3)의 (ii)에 의해 이 다항식은 기약이다.

3. 가우스 보조정리의 (4)는 $p$가 $f$의 최고차계수를 나누지 않는다는 가정을 둔다. 여기서는 $p = 3$이 최고차계수 $3$을 나누므로 그 가정이 성립하지 않는다. 줄이면 최고차항이 사라져 차수가 $2$에서 $1$로 줄고, 차수가 $1$인 다항식은 늘 기약이므로 줄인 다항식의 기약성이 원래 다항식에 대해 말해 주는 것이 없다.
:::
