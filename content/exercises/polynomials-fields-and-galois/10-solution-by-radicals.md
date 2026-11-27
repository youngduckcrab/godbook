---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "23.5절 Exercises, 연습문제 10 (p.308) — 문제 '밑체를 키우기와 곱'의 1과 같은 내용(F ⊂ E 이고 f(x) 가 F 위에서 근호로 풀리면 E 위에서도 근호로 풀린다)"
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Lemma 23.28 의 증명 (p.304) — 문제 '1 의 세제곱근을 붙인 체 위의 X³ − 2'와 같은 발상(F 가 1 의 n제곱근을 포함하면 xⁿ − a 의 갈루아 군의 원소는 근 ζ 를 ωⁱζ 로 보내는 것으로 정해진다)"
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Example 23.33 (p.306) — 문제 '근호로 풀리는 기약이 아닌 5차 다항식'과 같은 주제(실근이 셋이고 실수가 아닌 근이 둘인 5차 다항식. 출처의 예는 기약이고 갈루아 군이 S₅ 이며, 이 문제는 기약이 아니어서 그렇게 되지 않는 예를 든다); 23.5절 Exercises, 연습문제 4 (p.308) — 같은 종류의 물음(유리수 계수 다항식의 갈루아 군과 근호로 풀리는지)"
added: 2026-11-27
---

:::exercise[켤레근으로 인수분해한 사차 다항식]
$f = X^4 - 2X^3 + 6X^2 - 2X + 5 \in \mathbb{Q}[X]$, $F = \iota(\mathbb{Q})$이고, $f^{\iota} \in F[X]$는 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (2)의 것이라 하자.

1. $f^{\iota}(i) = 0$임을 보이고, [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (6)으로 $-i$도 $f^{\iota}$의 근임을 보여라.
2. $\mathbb{Q}[X]$에서 $f = (X^2 + 1)(X^2 - 2X + 5)$임을 확인하고, $f^{\iota}$의 $\mathbb{C}$ 안의 근 전체 $R$을 구하여라.
3. $F(R) = F(i)$이고 $[F(R) : F] = 2$임을 보이고, $F$의 원소를 모두 고정하는 환 동형사상 $F(R) \to F(R)$을 모두 구하여라.
:::

:::solution
ℂ 안의 분해체의 (2)의 (i)에 의해 $f^{\iota}$의 계수는 $f$의 계수를 $\iota$로 옮긴 것이고, [[complex-field|복소수체]]의 (3)의 약속대로 $f^{\iota} = X^4 - 2X^3 + 6X^2 - 2X + 5$로 쓴다. 다항식과 다항함수의 (5)의 (iv)에 의해 환 $\mathbb{C}$의 거듭제곱은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 것과 같다.

1. [[evaluation-homomorphism|대입 준동형]]의 (1)과 복소수의 거듭제곱의 (6)의 $i^2 = -1$, $i^3 = -i$, $i^4 = 1$에 의해
   $$
   \begin{aligned}
   f^{\iota}(i) &= 1 - 2(-i) + 6(-1) \\
   &\qquad - 2i + 5 \\
   &= (1 - 6 + 5) + (2 - 2)i \\
   &= 0
   \end{aligned}
   $$
   이다. [[rational-numbers-field|유리수체]]의 (4)에 의해 $f \in \mathbb{R}[X]$이므로 다항식과 다항함수의 (6)의 (iii)에 의해 $f^{\iota}$의 계수는 모두 실수인 복소수이고, 그 (6)의 (ii)에 의해 근 $i$의 켤레 $\overline{i}$도 근이다. [[complex-conjugate|켤레복소수]]의 (1)에 의해 $\overline{i} = \overline{0 + 1i} = 0 - 1i = -i$이다.

2. *인수분해.* $\mathbb{Q}[X]$에서 $(X^2 + 1)(X^2 - 2X + 5) = X^4 - 2X^3 + 5X^2 + X^2 - 2X + 5 = f$이다. 대입 준동형의 (3)에 의해 계수 사상은 $1$을 $1$로 보내는 환 준동형이므로 $\mathbb{C}[X]$에서 $f^{\iota} = (X^2 + 1)(X^2 - 2X + 5)$이다.

   *근.* 대입 준동형의 (2)와 $\mathbb{C}$가 정역이라는 것에서 $z$가 $f^{\iota}$의 근인 것은 정확히 $z^2 + 1 = 0$이거나 $z^2 - 2z + 5 = 0$일 때이다. 복소수체의 (5)에 의해 $z^2 = -1$인 것은 정확히 $z = \pm i$일 때이다. 또 $z^2 - 2z + 5 = (z - 1)^2 + 4$이므로 $z^2 - 2z + 5 = 0$인 것은 정확히 $\bigl((z - 1)/2\bigr)^2 = -1$일 때, 곧 $(z - 1)/2 = \pm i$일 때, 곧 $z = 1 \pm 2i$일 때이다. 따라서 $R = \{i, -i, 1 + 2i, 1 - 2i\}$이다.

3. *$F(R) = F(i)$.* $i$는 $X^2 + 1 \in F[X]$의 근이므로 $F$ 위에서 대수적이다. $F(i)$는 $F$와 $i$를 포함하는 부분체이므로 $-i$, $1 + 2i$, $1 - 2i$도 포함한다. ℂ 안의 분해체의 (3)의 (ii)에 의해 $F(R) \subseteq F(i)$이다. 거꾸로 $F(R)$은 $F$와 $i$를 포함하므로 [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F(i) \subseteq F(R)$이다. 따라서 $F(R) = F(i)$이다.

   *차수.* ℂ 안의 분해체의 (1)의 (ii)에 의해 $F$의 원소는 실수인 복소수이고, 복소수체의 (4)에 의해 $\operatorname{Im}(\pm i) = \pm 1 \ne 0$이므로 $\pm i$는 실수인 복소수가 아니다. 곧 $X^2 + 1$은 $F$ 안에 근이 없고 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $F$ 위에서 기약이다. 모닉이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $i$의 최소다항식이고, 단순 대수적 확대의 (3)의 (iii)에 의해 $[F(R) : F] = [F(i) : F] = 2$이다.

   *동형사상.* ℂ 안의 분해체의 (3)의 (v)에 의해 그런 환 동형사상은 정확히 $2$개이다. 항등함수가 그 하나이다. $F$의 원소가 모두 실수인 복소수이므로 그 (4)의 (i)에 의해 $F(R)$로 제한한 켤레도 그 하나이고, $i$를 $-i \ne i$로 보내므로 항등함수와 다르다. 따라서 그런 동형사상은 항등함수와 $F(R)$로 제한한 켤레이다.
:::

:::exercise[지수를 나누어 쓰는 근호 탑]
$F$가 $\mathbb{C}$의 부분체이고, $\beta \in \mathbb{C}$, $m$과 $n$은 자연수이며 $\beta^{mn} \in F$라 하자. 근호 탑은 [[radical-extension|근호 확대]]의 것이다.

1. 근호가 $\beta^n$, $\beta$이고 지수가 $m$, $n$인 $F$의 길이 $2$인 근호 탑이 있고, 그 꼭대기가 $F(\beta)$임을 보여라.
2. $F = \iota(\mathbb{Q})$, $\beta = \iota(\sqrt[6]{2})$([[nth-root|n제곱근]]의 실수 $\sqrt[6]{2}$), $m = 2$, $n = 3$이라 하자. 1의 탑을 $F_0$, $F_1$, $F_2$라 할 때 $[F_1 : F_0] = 2$, $[F_2 : F_1] = 3$임을 보여라.
:::

:::solution
1. *탑.* $\beta_1 = \beta^n$, $\beta_2 = \beta$라 하자. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)에 의해 $\beta_1^m = \beta^{nm} = \beta^{mn} \in F$이므로 $\beta_1$은 $F[X]$의 영이 아닌 다항식 $X^m - \beta_1^m$의 근이고 $F$ 위에서 대수적이다. $F_0 = F$, $F_1 = F(\beta_1)$이라 하면 $\beta_2^n = \beta^n = \beta_1 \in F_1$이므로 같은 이유로 $\beta_2$는 $F_1$ 위에서 대수적이고, $F_2 = F_1(\beta_2)$가 정해진다. 근호 탑의 정의에 의해 $F_0, F_1, F_2$, $\beta_1, \beta_2$, $m, n$은 $F$의 길이 $2$인 근호 탑이다.

   *꼭대기.* 근호 확대의 (1)의 (iii)에 의해 $F_2 = F(\beta^n, \beta)$이다. $\beta$는 $X^{mn} - \beta^{mn} \in F[X]$의 근이므로 $F$ 위에서 대수적이고, $F(\beta)$는 $F$와 $\beta$, 따라서 $\beta^n$을 포함하는 부분체이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $F(\beta^n, \beta) \subseteq F(\beta)$이다. 거꾸로 $F(\beta^n, \beta)$는 $F$와 $\beta$를 포함하므로 [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F(\beta) \subseteq F(\beta^n, \beta)$이다. 따라서 꼭대기는 $F_2 = F(\beta)$이다.

2. *값.* $r = \sqrt[6]{2}$라 하면 n제곱근의 (1)에 의해 $0 \le r$이고 $r^6 = 2$이며, 복소수의 거듭제곱의 (5)에 의해 $\beta^6 = \iota(r^6) = 2 \in F$이다. $r^3$은 $0$ 이상이고 $(r^3)(r^3) = r^6 = 2$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $r^3 = \sqrt{2}$이고, $\beta_1 = \beta^3 = \iota(\sqrt{2})$이다.

   *$[F_1 : F_0] = 2$.* [[field-extension-examples|체의 확대의 예]]의 (1)을 소수 $2$에 쓰면 $X^2 - 2$는 $\mathbb{Q}$ 위에서 기약이고, [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (2)의 (ii)에 의해 $(X^2 - 2)^{\iota} = X^2 - 2$는 $F$ 위에서 기약인 모닉 다항식이다. $\beta_1^2 = 2$이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 이것은 $\beta_1$의 최소다항식이고, 단순 대수적 확대의 (3)의 (iii)에 의해 $[F_1 : F_0] = 2$이다.

   *$[F_2 : F_1] = 3$.* [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)을 $p = 2$, $n = 6$에 쓰면 $X^6 - 2$는 $\mathbb{Q}$ 위에서 기약이고, 같은 이유로 $X^6 - 2$는 $\beta$의 $F$ 위의 최소다항식이므로 1에 의해 $[F_2 : F_0] = [F(\beta) : F] = 6$이다. [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $6 = [F_2 : F_1] \cdot 2$이고, [[integer-cancellation|정수의 소거법칙]]의 (2)로 $[F_2 : F_1] = 3$이다.
:::

:::exercise[밑체를 키우기와 곱]
$F$와 $L$이 $\mathbb{C}$의 부분체이고 $F \subseteq L$이라 하자. $f, g \in F[X]$는 영다항식이 아니고 차수가 $1$ 이상이다. 근호 탑과 "근호로 풀린다"는 [[radical-extension|근호 확대]]의 것이다.

1. $f$가 $F$ 위에서 근호로 풀리면 $f$는 $L$ 위에서도 근호로 풀림을 보여라($f$를 $L[X]$의 원소로 본다).
2. $f$와 $g$가 $F$ 위에서 근호로 풀리면 $fg$도 $F$ 위에서 근호로 풀림을 보여라.
:::

:::solution
[[subfield|부분체]]의 (5)의 (i)에 의해 $F$는 체 $L$의 부분체이고, 그 (3)의 (iv)에 의해 $F[X] \subseteq L[X]$이다. $f$의 $\mathbb{C}$ 안의 근은 $f$를 $\mathbb{C}[X]$의 원소로 보고 정하므로, $f$를 $F[X]$의 원소로 보든 $L[X]$의 원소로 보든 같은 집합 $R_f$이다.

1. *새 탑.* $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$이 $R_f \subseteq F_r$인 $F$의 근호 탑이라 하자. 근호 확대의 (1)의 (iii)에 의해 모든 $\beta_k$는 $F$ 위에서 대수적이고, [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (7)에 의해 $L$ 위에서도 대수적이다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (i)에 의해 $L_0 = L$이고 $1 \le k \le r$에서 $L_k = L_{k-1}(\beta_k)$인 $\mathbb{C}$의 부분체의 열 $L_0, \dots, L_r$이 있다.

   *$F_k \subseteq L_k$.* $k$에 대한 귀납으로 보인다. $F_0 = F \subseteq L = L_0$이다. $F_{k-1} \subseteq L_{k-1}$이면 $L_k$는 $L_{k-1} \supseteq F_{k-1}$와 $\beta_k$를 포함하는 부분체이므로 [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F_k = F_{k-1}(\beta_k) \subseteq L_k$이다.

   *근호 탑.* $1 \le k \le r$이면 $\beta_k^{n_k} \in F_{k-1} \subseteq L_{k-1}$이므로 $L_0, \dots, L_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$은 $L$의 근호 탑이고, 그 꼭대기는 $R_f \subseteq F_r \subseteq L_r$을 만족한다. 따라서 $f$는 $L$ 위에서 근호로 풀린다.

2. *곱의 근.* $F$는 체이므로 [[degree-of-a-polynomial|다항식의 차수]]의 (6)에 의해 $fg \ne 0$이고 $\deg(fg) \ge 1$이다. [[evaluation-homomorphism|대입 준동형]]의 (2)와 $\mathbb{C}$가 정역이라는 것에서 $fg$의 $\mathbb{C}$ 안의 근 전체는 $R_f \cup R_g$이다.

   *두 탑을 잇기.* $f$가 근호로 풀리므로 $R_f \subseteq E_1$인 $F$의 근호 확대 $E_1$이 있다(근호 확대의 (3)의 (i)). $F \subseteq E_1$이므로(근호 확대의 (1)의 (ii)) 1을 $L = E_1$에 쓰면 $g$는 $E_1$ 위에서 근호로 풀리고, $R_g \subseteq E_2$인 $E_1$의 근호 확대 $E_2$가 있다. 근호 확대의 (2)의 (iv)에 의해 $E_2$는 $F$의 근호 확대이고, 근호 확대의 (1)의 (ii)를 $E_1$의 탑에 쓰면 $E_1 \subseteq E_2$이다. 따라서 $R_f \cup R_g \subseteq E_2$이고, 근호 확대의 (3)의 (i)에 의해 $fg$는 $F$ 위에서 근호로 풀린다.
:::

:::exercise[1 의 세제곱근을 붙인 체 위의 $X^3 - 2$]
$\omega = \omega_3$은 [[roots-of-unity|1 의 n제곱근]]의 것이고, $F = \iota(\mathbb{Q})(\omega)$, $\gamma = \iota(\sqrt[3]{2})$([[nth-root|n제곱근]]의 실수 $\sqrt[3]{2}$), $L = F(\gamma)$라 하자.

1. $\omega$는 $\iota(\mathbb{Q})$ 위에서 대수적이고 $[F : \iota(\mathbb{Q})]$는 $1$이거나 $2$임을 보여라.
2. $[L : F] = 3$임을 보여라.
3. $\operatorname{Aut}(L/F)$가 원소가 세 개인 순환군이고, $a = 0, 1, 2$마다 $\sigma_a(\gamma) = \gamma\omega^a$인 원소 $\sigma_a$가 정확히 하나씩 있으며 $\operatorname{Aut}(L/F) = \{\sigma_0, \sigma_1, \sigma_2\}$임을 보여라.
:::

:::solution
[[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (1)에 의해 $\iota(\mathbb{Q})$는 $\mathbb{C}$의 모든 부분체에 포함된다. [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (iv)에 의해 환 $\mathbb{C}$의 거듭제곱은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 것과 같다.

1. 1 의 n제곱근의 (2)에 의해 $\operatorname{ord}(\omega) = 3$이므로 $\omega^3 = 1$이고, [[order-of-an-element|원소의 위수]]의 (1)에 의해 $\omega \ne 1$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (11)의 (i)에 의해 $(\omega - 1)(\omega^2 + \omega + 1) = \omega^3 - 1 = 0$이고, $\omega - 1 \ne 0$이므로 $\omega^2 + \omega + 1 = 0$이다. 곧 $\omega$는 $\iota(\mathbb{Q})[X]$의 영이 아닌 다항식 $X^2 + X + 1$의 근이므로 대수적이고, [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (3)의 (ii)에 의해 그 차수는 $2$ 이하이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)과 [[extension-field|확대체]]의 (2)의 (i)에 의해 $[F : \iota(\mathbb{Q})]$는 $1$이거나 $2$이다.

2. *$\gamma$의 차수.* n제곱근의 (1)에 의해 $(\sqrt[3]{2})^3 = 2$이고, 복소수의 거듭제곱의 (5)에 의해 $\gamma^3 = 2$이다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)을 $p = 2$, $n = 3$에 쓰면 $X^3 - 2$는 $\mathbb{Q}$ 위에서 기약이고, ℂ 안의 분해체의 (2)의 (ii)에 의해 $(X^3 - 2)^{\iota} = X^3 - 2$는 $\iota(\mathbb{Q})$ 위에서 기약인 모닉 다항식이다. 최소다항식의 (5)에 의해 이것은 $\gamma$의 $\iota(\mathbb{Q})$ 위의 최소다항식이고, $[\iota(\mathbb{Q})(\gamma) : \iota(\mathbb{Q})] = 3$이다.

   *$[L : F] \le 3$.* $\gamma$는 $F[X]$의 다항식 $X^3 - 2$의 근이므로 $F$ 위에서 대수적이고, 최소다항식의 (3)의 (ii)와 단순 대수적 확대의 (3)의 (iii)에 의해 $1 \le [L : F] \le 3$이다.

   *$3 \mid [L : F]$.* [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $L$은 $\iota(\mathbb{Q})$의 유한 확대이고 $[L : \iota(\mathbb{Q})] = [L : F] \cdot e$이다. 여기서 $e = [F : \iota(\mathbb{Q})]$는 1에 의해 $1$이거나 $2$이다. $L$은 $\iota(\mathbb{Q})$와 $\gamma$를 포함하므로 단순 대수적 확대의 (1)에 의해 $\iota(\mathbb{Q})(\gamma) \subseteq L$이고, 차수의 곱셈 공식의 (3)의 (i)에 의해 $3$은 $[L : \iota(\mathbb{Q})]$를 나눈다. $e = 1$이면 곧 $3 \mid [L : F]$이고, $e = 2$이면 $3 \mid 2 \cdot [L : F]$이며 $3 \nmid 2$이므로 [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $3 \mid [L : F]$이다.

   *결론.* $[L : F] = 3k$인 정수 $k$가 있고 $[L : F] \ge 1$이므로 $k \ge 1$, 곧 $[L : F] \ge 3$이다. 따라서 $[L : F] = 3$이다.

3. *위수.* $\omega \in F$, $2 \in F$, $2 \ne 0$, $\gamma^3 = 2$이므로 [[galois-groups-of-roots-of-unity-and-radicals|거듭제곱근을 붙인 확대의 갈루아 군]]의 (2)를 $n = 3$, $b = 2$에 쓸 수 있다. 그 (2)의 (i)과 2에 의해 $\operatorname{Aut}(L/F)$는 원소가 $[L : F] = 3$개인 유한군이다. $3$은 소수이므로 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)에 의해 순환군이다.

   *$\sigma_a$.* 그 (2)의 (ii)에 의해 각 $\sigma \in \operatorname{Aut}(L/F)$에 $\sigma(\gamma) = \gamma\omega^a$인 $a \in \{0, 1, 2\}$가 있다. 이 $a$는 하나뿐이다. $\gamma\omega^a = \gamma\omega^{a'}$이고 $a, a' \in \{0, 1, 2\}$이면 $\gamma \ne 0$이므로 $\omega^a = \omega^{a'}$이고, 위수의 (3)에 의해 $3 \mid a - a'$인데 $-2 \le a - a' \le 2$이므로 $a = a'$이다. 이렇게 $\sigma$에 $a$를 대응시키는 함수 $\operatorname{Aut}(L/F) \to \{0, 1, 2\}$를 얻는다. 같은 (2)의 (ii)에 의해 $\sigma(\gamma) = \tau(\gamma)$이면 $\sigma = \tau$이므로 이 함수는 단사이고, 두 집합은 원소가 $3$개씩이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)를 상에 쓰면 전사이다. 따라서 $a = 0, 1, 2$마다 $\sigma_a(\gamma) = \gamma\omega^a$인 $\sigma_a$가 정확히 하나씩 있고 $\operatorname{Aut}(L/F) = \{\sigma_0, \sigma_1, \sigma_2\}$이다.
:::

:::exercise[근호로 풀리는 기약이 아닌 5차 다항식]
$f = X^5 - X^3 - 2X \in \mathbb{Q}[X]$, $F = \iota(\mathbb{Q})$라 하고, $f^{\iota}$, $f^{\iota}$의 $\mathbb{C}$ 안의 근 전체 $R$, $K = F(R)$은 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 것이며 $G = \operatorname{Aut}(K/F)$라 하자.

1. $\mathbb{Q}[X]$에서 $f = X(X^2 - 2)(X^2 + 1)$임을 확인하고, $R$이 원소를 다섯 개 가지며 그 가운데 실수인 복소수가 정확히 셋, 실수인 복소수가 아닌 것이 정확히 둘임을 보여라.
2. $f^{\iota}$가 $F$ 위에서 근호로 풀림을 보여라.
3. $|G| = 4$임을 보여라. 따라서 $G$는 $S_R$와 동형이 아니다. [[quintic-not-solvable-by-radicals|근호로 풀리지 않는 5차 다항식]]의 길에서 이 다항식에 쓸 수 없는 것은 무엇인가?
:::

:::solution
$s = \iota(\sqrt{2})$라 하자. [[square-root-exists|제곱근의 존재]]의 (1)과 [[complex-field|복소수체]]의 (2)에 의해 $ss = \iota(2) = 2$이다.

1. *인수분해.* $\mathbb{Q}[X]$에서 $(X^2 - 2)(X^2 + 1) = X^4 - X^2 - 2$이고 $X(X^4 - X^2 - 2) = f$이다. [[evaluation-homomorphism|대입 준동형]]의 (3)에 의해 $\mathbb{C}[X]$에서 $f^{\iota} = X(X^2 - 2)(X^2 + 1)$이다.

   *근.* 대입 준동형의 (2)와 $\mathbb{C}$가 정역이라는 것에서 $z$가 근인 것은 정확히 $z = 0$이거나 $z^2 = 2$이거나 $z^2 = -1$일 때이다. $z^2 = 2 = ss$이면 $(z - s)(z + s) = 0$이므로 $z = \pm s$이고, 거꾸로 $(\pm s)^2 = 2$이다. 복소수체의 (5)에 의해 $z^2 = -1$인 것은 정확히 $z = \pm i$일 때이다. 따라서 $R = \{0, s, -s, i, -i\}$이다.

   *실수인 것.* 복소수체의 (2)의 (ii)에 의해 $0 = \iota(0)$, $s$, $-s = \iota(-\sqrt{2})$의 허수부는 $0$이고, 복소수체의 (4)에 의해 $\pm i$의 허수부는 $\pm 1 \ne 0$이다. 제곱근의 존재의 (1)에 의해 $0 < \sqrt{2}$이므로 $-\sqrt{2} < 0 < \sqrt{2}$이고, $\iota$가 단사이므로 $-s$, $0$, $s$는 서로 다르다. $i \ne -i$이다($i = -i$이면 $2i = 0$). 실수인 복소수와 그렇지 않은 복소수는 다르므로 $R$은 원소가 다섯 개이고, 실수인 복소수는 $0$, $s$, $-s$의 셋, 그렇지 않은 것은 $i$, $-i$의 둘이다.

2. $F_0 = F$, $\beta_1 = s$, $n_1 = 2$, $F_1 = F(s)$, $\beta_2 = i$, $n_2 = 2$, $F_2 = F_1(i)$라 하자. $s^2 = 2 \in F_0$이고 $i^2 = -1 \in F_1$이므로 이것은 $F$의 근호 탑이다([[radical-extension|근호 확대]]의 정의). $0 \in F_2$, $\pm s \in F_1 \subseteq F_2$, $\pm i \in F_2$이므로 $R \subseteq F_2$이고, $f^{\iota}$는 $F$ 위에서 근호로 풀린다.

3. *$K = F_2$.* 근호 확대의 (1)의 (iii)에 의해 $F_2 = F(s, i)$이다. $F_2$는 $F$와 $R$을 포함하므로 ℂ 안의 분해체의 (3)의 (ii)에 의해 $K \subseteq F_2$이다. $K$는 $F$와 $s, i \in R$을 포함하므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $F_2 = F(s, i) \subseteq K$이다. 따라서 $K = F_2$이다.

   *$[F_1 : F] = 2$.* [[field-extension-examples|체의 확대의 예]]의 (1)을 소수 $2$에 쓰면 $X^2 - 2$는 $\mathbb{Q}$ 위에서 기약이고, ℂ 안의 분해체의 (2)의 (ii)에 의해 $X^2 - 2$는 $F$ 위에서 기약인 모닉 다항식이다. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)와 [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[F_1 : F] = 2$이다.

   *$[F_2 : F_1] = 2$.* ℂ 안의 분해체의 (1)의 (ii)에 의해 $\iota(\mathbb{R})$는 $F$를 포함하는 $\mathbb{C}$의 부분체이고 $s \in \iota(\mathbb{R})$이므로, 단순 대수적 확대의 (1)에 의해 $F_1 \subseteq \iota(\mathbb{R})$이다. $\pm i$는 실수인 복소수가 아니므로 $X^2 + 1 \in F_1[X]$는 $F_1$ 안에 근이 없고, [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $F_1$ 위에서 기약이다. 같은 이유로 $[F_2 : F_1] = 2$이다.

   *위수.* [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $[K : F] = 2 \cdot 2 = 4$이다. ℂ 안의 분해체의 (3)의 (iii), (iv)에 의해 $K$는 $F$ 위에서 $f^{\iota}$의 분해체이고 모닉 기약 인수마다 근이 서로 다르므로, [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)에 의해 $|G| = [K : F] = 4$이다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (3)에 의해 $|S_R| = 5! = 120 \ne 4$이므로 [[group-isomorphism|군의 동형]]의 (3)의 (iii)에 의해 $G$와 $S_R$는 동형이 아니다.

   *쓸 수 없는 것.* $f = X \cdot (X^4 - X^2 - 2)$이고 두 인수의 차수가 $1$ 이상이므로 기약 다항식의 (2)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이 아니다. 근호로 풀리지 않는 5차 다항식의 증명은 기약이라는 것에서 근 하나를 붙인 체의 차수가 $5$이고 $5$가 $|G|$를 나눈다는 것을 얻는데, 여기서는 $5 \nmid 4$이다. 실근이 셋이고 실수가 아닌 근이 둘이라는 것만으로는 $G$가 $S_R$ 전체와 동형이 되지 않는다.
:::
