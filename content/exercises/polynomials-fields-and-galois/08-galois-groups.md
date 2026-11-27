---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "21.5절 Exercises, 연습문제 1 (p.275) — 문제 '갈루아 군의 궤도로 구한 최소다항식'과 같은 종류의 물음(√3 + ∛5 등 수의 ℚ 위의 최소다항식 구하기)"
  - ref: judson-abstract-algebra
    loc: "23.5절 Exercises, 연습문제 7 (p.308) — 문제 '기약 삼차 다항식의 갈루아 군'과 같은 내용(기약 삼차 다항식의 갈루아 군은 S₃ 이나 ℤ₃ 와 동형이다)"
  - ref: judson-abstract-algebra
    loc: "23.2절 The Fundamental Theorem, Example 23.25 (p.301) — 문제 '네제곱하여 2가 되는 실수를 붙인 체'와 같은 대상(x⁴ − 2 의 분해체 ℚ(⁴√2, i) 와 그 부분체 ℚ(⁴√2)); 23.5절 Exercises, 연습문제 1 (b) (p.308) — 같은 발상(G(ℚ(⁴√5)/ℚ) 를 구하고 정규 확대가 아님을 보기)"
added: 2026-11-27
---

:::exercise[갈루아 군의 궤도로 구한 최소다항식]
$E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$, $G$, $\sigma$, $\tau$, $\sqrt{10}$은 [[galois-group-examples|갈루아 군의 예]]의 설정의 것이라 하고, $\beta = \sqrt{2} + \sqrt{10}$이라 하자. $\beta$의 $\mathbb{Q}$ 위의 최소다항식을 $m$, $E$ 안의 $m$의 근 전체를 $R_m$이라 한다.

1. $G$의 네 원소가 $\beta$를 보내는 값을 구하고, 궤도 $G \cdot \beta$가 원소를 네 개 가짐을 보여라.
2. $R_m = G \cdot \beta$이고 $\deg m = 4$임을 보여라.
3. $m = X^4 - 24X^2 + 64$임을 보여라.
:::

:::solution
$E$는 $\mathbb{Q}$의 유한 확대이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)에 의해 $\beta$는 $\mathbb{Q}$ 위에서 대수적이고 $m$이 정해진다.

1. $\beta = 0 + 1 \cdot \sqrt{2} + 0 \cdot \sqrt{5} + 1 \cdot \sqrt{10}$이므로 갈루아 군의 예의 (1)의 식에 의해 $\sigma(\beta) = -\sqrt{2} - \sqrt{10}$, $\tau(\beta) = \sqrt{2} - \sqrt{10}$이다. [[automorphism-group-of-extension|확대의 자기동형군]]의 (1)의 (i)에 의해 $\sigma\tau$는 합성이므로, 같은 식을 $\tau(\beta) = 0 + 1 \cdot \sqrt{2} + 0 \cdot \sqrt{5} + (-1)\sqrt{10}$에 쓰면 $(\sigma\tau)(\beta) = \sigma(\tau(\beta)) = -\sqrt{2} + \sqrt{10}$이다. $i_E(\beta) = \beta$이다. [[field-extension-examples|체의 확대의 예]]의 (2)에 의해 $1, \sqrt{2}, \sqrt{5}, \sqrt{10}$은 $E$의 $\mathbb{Q}$ 위의 기저이므로 [[basis-over-a-field|체 위의 기저와 좌표]]의 (1)에 의해 좌표는 하나뿐이다. 네 값의 $(\sqrt{2}, \sqrt{10})$의 좌표는 $(1, 1)$, $(-1, -1)$, $(1, -1)$, $(-1, 1)$로 서로 다르므로 네 값은 서로 다르다. 확대의 자기동형군의 (5)의 (i)의 작용에서 궤도는 $G \cdot \beta = \{g(\beta) : g \in G\}$이고([[orbit-of-an-action|궤도]]), 갈루아 군의 예의 (1)에 의해 $G = \{i_E, \sigma, \tau, \sigma\tau\}$이므로 $G \cdot \beta$는 원소가 네 개이다.

2. *$G \cdot \beta \subseteq R_m$.* [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)를 $m$에 쓰면 모든 $g \in G$에서 $g(R_m) = R_m$이고, [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (3)의 (i)에 의해 $\beta \in R_m$이므로 $G \cdot \beta \subseteq R_m$이다.

   *$\deg m = 4$.* 자기동형과 근의 치환의 (1)의 (i)과 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $4 = |G \cdot \beta| \le |R_m| \le \deg m$이다. 한편 [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $\deg m = [\mathbb{Q}(\beta) : \mathbb{Q}]$이고, $\mathbb{Q}(\beta) \subseteq E$이므로 [[extension-field|확대체]]의 (2)의 (iii)에 의해 이것은 $[E : \mathbb{Q}] = 4$ 이하이다. 따라서 $\deg m = 4$이다.

   *$R_m = G \cdot \beta$.* 위에서 $4 \le |R_m| \le 4$이므로 $|R_m| = 4 = |G \cdot \beta|$이고, 유한집합의 부분집합의 (2)에 의해 $G \cdot \beta = R_m$이다.

3. $\sqrt{10} = \sqrt{2}\sqrt{5}$이므로 $\sqrt{2}\sqrt{10} = 2\sqrt{5}$이고, $\beta^2 = 2 + 2\sqrt{2}\sqrt{10} + 10 = 12 + 4\sqrt{5}$, $\beta^4 = (12 + 4\sqrt{5})^2 = 144 + 96\sqrt{5} + 80 = 224 + 96\sqrt{5}$이다. $p = X^4 - 24X^2 + 64$라 하면 [[evaluation-homomorphism|대입 준동형]]의 (1)에 의해
   $$
   \begin{aligned}
   p(\beta) &= 224 + 96\sqrt{5} \\
   &\qquad - 24(12 + 4\sqrt{5}) \\
   &\qquad + 64 \\
   &= 0
   \end{aligned}
   $$
   이다. $p$는 모닉이고 $p(\beta) = 0$이며 $\deg p = 4 = \deg m$이므로 대수적 원소와 최소다항식의 (3)의 (iii)에 의해 $p = m$이다. 2에 의해 $p$의 $E$ 안의 근은 정확히 $\pm\sqrt{2} \pm \sqrt{10}$의 네 개이다.
:::

:::exercise[자기동형 하나의 고정체의 차수]
$E$가 체이고 $\sigma \in \operatorname{Aut}(E)$의 위수가 유한하며 $n = \operatorname{ord}(\sigma)$라 하자.

1. $E^{\langle \sigma \rangle} = E^{\{\sigma\}}$임을 보여라.
2. $E$는 $E^{\{\sigma\}}$의 유한 확대이고 $[E : E^{\{\sigma\}}] \le n$임을 보여라.
3. $E$, $F$, $f$, $G$가 [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 설정의 것이고 $\sigma \in G$이면 $[E : E^{\{\sigma\}}] = \operatorname{ord}(\sigma)$임을 보여라.
:::

:::solution
[[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle \sigma \rangle = \{\sigma^k : k \in \mathbb{Z}\}$는 $\operatorname{Aut}(E)$의 부분군이고 $\sigma \in \langle \sigma \rangle$이다. [[automorphism-group-of-extension|확대의 자기동형군]]의 (1)의 (i)에 의해 $\operatorname{Aut}(E)$의 곱은 합성이다.

1. *$E^{\langle \sigma \rangle} \subseteq E^{\{\sigma\}}$.* $\{\sigma\} \subseteq \langle \sigma \rangle$이므로 [[fixed-field|고정체]]의 (3)에 의해 그렇다.

   *$E^{\{\sigma\}} \subseteq E^{\langle \sigma \rangle}$.* $\sigma(a) = a$라 하자. $0$ 이상인 정수 $k$에 대한 귀납으로 $\sigma^k(a) = a$를 보인다. $\sigma^0 = i_E$이므로 $k = 0$이면 그렇다. $\sigma^k(a) = a$이면 [[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 $\sigma^{k+1} = \sigma^k \sigma$이므로 $\sigma^{k+1}(a) = \sigma^k(\sigma(a)) = \sigma^k(a) = a$이다. 또 $a = \sigma^{-1}(\sigma(a)) = \sigma^{-1}(a)$이므로 같은 귀납을 $\sigma^{-1}$에 쓰면 $0$ 이상인 모든 정수 $k$에서 $(\sigma^{-1})^k(a) = a$이고, 거듭제곱의 (1)에 의해 $\sigma^{-k} = (\sigma^{-1})^k$이다. 따라서 모든 정수 $k$에서 $\sigma^k(a) = a$이고 $a \in E^{\langle \sigma \rangle}$이다.

2. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle \sigma \rangle$는 원소가 $n$개인 유한군이다. [[artin-lemma|아르틴 보조정리]]의 (2)를 $H = \langle \sigma \rangle$에 쓰면 $E$는 $E^{\langle \sigma \rangle}$의 유한 확대이고 $[E : E^{\langle \sigma \rangle}] \le n$이다. 1에 의해 $E^{\langle \sigma \rangle} = E^{\{\sigma\}}$이다.

3. 기본정리의 (3)에 의해 $G$는 유한군이므로 [[order-of-an-element|원소의 위수]]의 (6)에 의해 $\sigma$의 위수는 유한하다. 군 $G$에서 만든 $\langle \sigma \rangle$은 $G$의 부분군이고([[cyclic-subgroup|순환 부분군]]의 (1)), [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 $\operatorname{Aut}(E)$에서 만든 것과 같은 집합이다. 기본정리의 (3)을 $H = \langle \sigma \rangle$에 쓰면 $[E : E^{\langle \sigma \rangle}] = |\langle \sigma \rangle|$이고, 순환 부분군의 크기의 (1)에 의해 오른쪽은 $\operatorname{ord}(\sigma)$이다. 1에 의해 $[E : E^{\{\sigma\}}] = \operatorname{ord}(\sigma)$이다.
:::

:::exercise[갈루아 군이 아벨군일 때의 중간체]
$E$, $F$, $f$, $G$가 [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 설정의 것이고 $G$가 아벨군이라 하자. $K$가 중간체이면, 모든 $\sigma \in G$에서 $\sigma(K) = K$이고, $\operatorname{Aut}(K/F)$는 원소가 $[K : F]$개인 아벨군임을 보여라.
:::

:::solution
기본정리의 (1)에 의해 $\operatorname{Aut}(E/K)$는 $G$의 부분군이다. $G$가 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $\operatorname{Aut}(E/K)$는 $G$의 정규부분군이고, 기본정리의 (4)에서 (ii)가 (i)을 주므로 모든 $\sigma \in G$에서 $\sigma(K) = K$이다.

기본정리의 (4)의 (iv)에 의해 $r_K : G \to \operatorname{Aut}(K/F)$는 전사인 군 준동형이고 $|\operatorname{Aut}(K/F)| = [K : F]$이다. $x, y \in \operatorname{Aut}(K/F)$이면 $r_K$가 전사이므로 $x = r_K(g)$, $y = r_K(h)$인 $g, h \in G$가 있고, $gh = hg$이므로 $xy = r_K(gh) = r_K(hg) = yx$이다. 따라서 $\operatorname{Aut}(K/F)$는 아벨군이다.
:::

:::exercise[기약 삼차 다항식의 갈루아 군]
$F$가 체 $E$의 부분체이고, $f \in F[X]$가 $F$ 위에서 기약이며 $\deg f = 3$이고, $E$가 $F$ 위에서 $f$의 분해체이며, $f$의 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다고 하자. $G = \operatorname{Aut}(E/F)$, $R$은 $E$ 안의 $f$의 근 전체의 집합이다.

1. $|R| = 3$이고 $|G|$는 $3$이거나 $6$임을 보여라.
2. $|G| = 6$이면 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 $\theta_R : G \to S_R$가 전단사이고 $G \cong S_R$임을 보여라.
3. $|G| = 3$이면 $G$는 순환군임을 보여라.
:::

:::solution
1. *$|R| = 3$.* $c$가 $f$의 최고차계수이고 $u = c^{-1}f$라 하자. [[irreducible-polynomial|기약 다항식]]의 (3)의 (iii)에 의해 $u$는 모닉 기약 다항식이고, $f = u \cdot c$이므로 $F[X]$에서 $u \mid f$이다([[polynomial-ring|다항식환]]의 (6)). 곧 $u$는 $f$의 $F$ 위의 모닉 기약 인수이고, 가정에 의해 $E$에서 근이 서로 다르다. [[degree-of-a-polynomial|다항식의 차수]]의 (5)에 의해 $\deg u = \deg f = 3$이므로 $E$ 안의 $u$의 근 전체는 원소가 $3$개이다([[separable-polynomial|근이 서로 다른 다항식]]의 정의). [[evaluation-homomorphism|대입 준동형]]의 (1), (2)에 의해 $r \in E$에서 $f(r) = c\,u(r)$이고, $c \ne 0$이며 $E$는 정역이므로 $f(r) = 0$인 것은 정확히 $u(r) = 0$일 때이다. 따라서 $R$은 $u$의 근 전체와 같고 $|R| = 3$이다.

   *$3 \mid |G|$.* $R \ne \emptyset$이므로 $\alpha \in R$을 잡자. $\alpha$는 모닉 기약 다항식 $u$의 근이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $u$는 $\alpha$의 최소다항식이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[F(\alpha) : F] = 3$이다. [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)에 의해 $E$는 $F$의 유한 확대이고 $|G| = [E : F]$이다. $F \subseteq F(\alpha) \subseteq E$이므로 [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $3$은 $[E : F] = |G|$를 나눈다.

   *$|G| \mid 6$.* 자기동형과 근의 치환의 (2)의 (iii)에 의해 $|G|$는 $3! = 6$을 나눈다.

   *결론.* $|G| = 3t$인 정수 $t$를 잡으면 $|G| \ge 1$이므로 $t \ge 1$이다. $6 = 3t \cdot w$인 정수 $w$가 있고 [[integer-cancellation|정수의 소거법칙]]의 (2)로 $2 = tw$이므로 $t$는 소수 $2$의 양의 약수, 곧 $1$이거나 $2$이다([[prime-number|소수]]). 따라서 $|G|$는 $3$이거나 $6$이다.

2. 자기동형과 근의 치환의 (2)의 (i)에 의해 $\theta_R$은 단사인 준동형이므로, $\theta_R$을 $G \to \theta_R(G)$로 선언한 것은 전단사이고 $|\theta_R(G)| = |G| = 6$이다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (3)에 의해 $|S_R| = 3! = 6$이고 $\theta_R(G) \subseteq S_R$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $\theta_R(G) = S_R$이다. 곧 $\theta_R$은 전사이기도 하므로 전단사인 준동형, 곧 동형사상이고 $G \cong S_R$이다.

3. $|G| = 3$은 소수이므로 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)에 의해 $G$는 순환군이다.
:::

:::exercise[네제곱하여 2가 되는 실수를 붙인 체]
$c = \sqrt{\sqrt{2}}$([[square-root-exists|제곱근의 존재]]의 제곱근)이고 $f = X^4 - 2 \in \mathbb{Q}[X]$라 하자.

1. $0 < c$이고 $c^4 = 2$이며, $c$는 $\mathbb{Q}$ 위에서 대수적이고 그 최소다항식은 $f$임을 보여라. 따라서 $\mathbb{R}$의 부분체 $E = \mathbb{Q}(c)$에서 $[E : \mathbb{Q}] = 4$이다.
2. $\operatorname{Aut}(E/\mathbb{Q})$는 $i_E$와, $c$를 $-c$로 보내는 원소 $\rho$의 두 원소로 이루어짐을 보여라.
3. $E^{\operatorname{Aut}(E/\mathbb{Q})} = \mathbb{Q}(\sqrt{2})$이고 이것이 $\mathbb{Q}$와 다름을 보여라. 따라서 $E$는 영이 아니고 차수가 $1$ 이상인 어떤 $g \in \mathbb{Q}[X]$에 대해서도 $\mathbb{Q}$ 위에서 $g$의 분해체가 아님을 보여라.
:::

:::solution
1. 제곱근의 존재의 (1)에 의해 $0 < 2$에서 $0 < \sqrt{2}$이고, 다시 $0 < c$이며 $cc = \sqrt{2}$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (6)에 의해 $c^4 = (cc)(cc) = \sqrt{2}\sqrt{2} = 2$이다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)을 $p = 2$, $n = 4$에 쓰면 $f$는 $\mathbb{Q}$ 위에서 기약이고, $f$는 모닉이며 $f(c) = c^4 - 2 = 0$이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $c$는 $\mathbb{Q}$ 위에서 대수적이고 그 최소다항식은 $f$이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[E : \mathbb{Q}] = 4$이다.

2. *실수인 근.* 실수 $x$가 $x^4 = 2$이면 $(xx)(xx) = 2$이고 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le xx$이므로 제곱근의 존재의 (1)의 유일성에 의해 $xx = \sqrt{2} = cc$이다. 따라서 $(x - c)(x + c) = xx - cc = 0$이고 [[real-number-arithmetic|실수의 계산 법칙]]의 (K10)에 의해 $x = c$이거나 $x = -c$이다. 거꾸로 유한 곱의 (6)의 (iv)에 의해 $(-c)^4 = (-1)^4 c^4 = 2$이다.

   *원소는 많아야 둘이다.* $\sigma \in \operatorname{Aut}(E/\mathbb{Q})$라 하자. [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)에 의해 $\sigma(c)$는 $E$ 안의 $f$의 근이고, [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 $E \subseteq \mathbb{R}$ 안의 근은 실수인 근이므로 $\sigma(c)$는 $c$이거나 $-c$이다. [[automorphism-group-of-extension|확대의 자기동형군]]의 (4)의 (iii)을 $n = 1$, $\alpha_1 = c$에 쓰면 $E$의 $\mathbb{Q}$를 고정하는 두 자기동형은 $c$에서의 값이 같으면 같다. 따라서 $\sigma(c) = c$이면 $\sigma = i_E$이고, $c$를 $-c$로 보내는 원소는 있다면 하나뿐이다.

   *$\rho$가 있다.* $-c \in E$는 $c$의 최소다항식 $f$의 근이므로, [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (5)를 $K = \mathbb{Q}$, $E' = E$에 쓰면 $\mathbb{Q}$의 원소를 모두 고정하고 $c$를 $-c$로 보내는 환 준동형 $\rho : E \to E$가 있다. $E$는 $\mathbb{Q}$의 유한 확대이므로 확대의 자기동형군의 (3)에 의해 $\rho \in \operatorname{Aut}(E/\mathbb{Q})$이다. $0 < c$이므로 $-c < 0 < c$이고 $\rho(c) \ne c$, 곧 $\rho \ne i_E$이다. 따라서 $\operatorname{Aut}(E/\mathbb{Q}) = \{i_E, \rho\}$이고 원소가 두 개이다.

3. *고정체.* 단순 대수적 확대의 (3)의 (ii)에 의해 $E$의 모든 원소는 유리수 $x_0, x_1, x_2, x_3$으로 $a = x_0 + x_1 c + x_2 c^2 + x_3 c^3$으로 하나뿐인 꼴로 쓰인다. $\rho$는 유리수를 고정하는 환 준동형이므로 $\rho(a) = x_0 - x_1 c + x_2 c^2 - x_3 c^3$이다(유한 곱의 (9), $(-c)^2 = c^2$, $(-c)^3 = -c^3$). $i_E$는 모든 원소를 고정하므로 $a \in E^{\operatorname{Aut}(E/\mathbb{Q})}$인 것은 정확히 $\rho(a) = a$일 때이고, 계수의 유일성에 의해 정확히 $-x_1 = x_1$, $-x_3 = x_3$, 곧 $x_1 = x_3 = 0$일 때이다. $c^2 = \sqrt{2}$이므로
   $$
   \begin{aligned}
   &E^{\operatorname{Aut}(E/\mathbb{Q})} \\
   &\quad = \{x + y\sqrt{2} : x, y \in \mathbb{Q}\}
   \end{aligned}
   $$
   이고, [[field-extension-examples|체의 확대의 예]]의 (1)을 소수 $a = 2$에 쓰면 오른쪽은 $\mathbb{Q}(\sqrt{2})$이다. 같은 (1)에 의해 $\sqrt{2} \notin \mathbb{Q}$이므로 이것은 $\mathbb{Q}$와 다르다.

   *분해체가 아니다.* $E$가 $\mathbb{Q}$ 위에서 그런 $g$의 분해체라 하자. [[rational-numbers-field|유리수체]]의 (1)과 [[characteristic-of-a-ring|환의 표수]]의 (5)의 (iii), (4)에 의해 $\operatorname{char} \mathbb{Q} = 0$이므로, [[separable-polynomial|근이 서로 다른 다항식]]의 (5)에 의해 $g$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다. 그러면 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (3)에 의해 $E^{\operatorname{Aut}(E/\mathbb{Q})} = \mathbb{Q}$이어야 하므로 위와 어긋난다. (같은 항목의 (1)에 의해 $|\operatorname{Aut}(E/\mathbb{Q})| = 4$이어야 한다는 것과도 어긋난다.)
:::
