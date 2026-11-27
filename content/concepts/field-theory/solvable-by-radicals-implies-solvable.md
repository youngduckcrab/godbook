---
title: 근호로 풀리면 갈루아 군이 가해군
title_en: Solvable by Radicals Implies a Solvable Galois Group
aliases: [근호로 풀리는 다항식의 갈루아 군, 갈루아의 판정의 한 방향, solvable by radicals implies solvable Galois group]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "복소수체의 부분체 F 위의 차수가 1 이상인 다항식 f 가 근호로 풀리면, f 의 근을 모두 붙인 체 E 에 대하여 f 의 F 위의 갈루아 군 Aut(E/F) 는 가해군이다. 근호 탑을 감싸는 분해체 M 의 자기동형군이 가해군이고, M 에서 E 로의 제한이 전사인 준동형이기 때문이다. f 의 어느 분해체로 잡아도 마찬가지이고, 갈루아 군이 가해군이 아니면 f 는 근호로 풀리지 않는다."
requires: [function, integral-domain, injective-surjective-bijective, finite-set, number-of-elements-is-unique, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, nth-root, ring, field, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, rational-numbers-field, eisenstein-criterion, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, splitting-field, separable-polynomial, group, group-homomorphism, group-isomorphism, symmetric-group, cycle-permutation, automorphism-group-of-extension, automorphisms-permute-roots, order-of-galois-group, fundamental-theorem-of-galois-theory, solvable-group, solvable-subgroups-and-images, transposition-and-p-cycle-generate, complex-field, complex-conjugate, power-of-a-complex-number, roots-of-unity, nth-roots-of-complex-numbers, polynomials-and-polynomial-functions, splitting-fields-in-complex-numbers, radical-extension, galois-groups-of-roots-of-unity-and-radicals, galois-radical-tower]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Theorem 23.30 과 그 증명 (p.305); 23.5절 Exercises, 연습문제 4, 5 (p.308), 7 (p.308)"
    checked: original
    note: "(1)은 출처 Theorem 23.30(p.305, 'Let f(x) be in F[x], where char F = 0. If f(x) is solvable by radicals, then the Galois group of f(x) over F is solvable')을 ℂ 의 부분체에 대해 진술한 것이다. 출처의 증명은 근호 확대 E 를 Lemma 23.29 로 'we can assume that E is a splitting field f(x) and F_i is normal over F_{i−1}' 라고 바꾸고, 기본정리로 G(E/F) 의 부분정규열을 만들어 G(E/F) 가 가해군이라고 결론짓는다. 이 항목은 근호 탑을 감싸는 분해체 M 의 자기동형군이 가해군이라는 것(galois-radical-tower)과, M 의 자기동형을 f 의 분해체 E 로 제한하는 사상이 전사인 준동형이라는 것(기본정리의 (4))을 따로 쓰고, 가해군의 전사 준동형의 상이 가해군이라는 것으로 Aut(E/F) 의 가해성을 얻는다. 출처는 정리 뒤에서 'The converse of Theorem 23.30 is also true. For a proof, see any of the references at the end of this chapter' 라고 적는다. 이 항목은 역을 진술하지 않는다. (2)는 출처 23.1절의 '갈루아 군' 정의가 분해체에 기대는 것을 automorphism-group-of-extension 의 (6)으로 메운 것이다. 예시 '$\\iota(\\mathbb{Q})$ 위의 $X^3 - 2$' 와 반례 '근호로 풀리지만 갈루아 군이 아벨군이 아닌 $X^3 - 2$' 의 다항식은 출처 23.5절 연습문제 5 (d)(p.308, x³ − 2 의 분해체의 원시원)와 같고, 연습문제 4 (c)(x³ − 5 의 갈루아 군과 근호 풀이)와 7(기약 삼차 다항식의 갈루아 군은 S₃ 이나 ℤ₃)과 같은 발상이다. 반례의 [F(γ) : F] = 3 은 출처 21.3절(p.274)의 [ℚ(∛2) : ℚ] = 3 과 같은 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(5차 예의 값과 도함수의 근을 다시 계산, 경계 경우 n = 1·b = 0). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체와 분해체는 [[subfield|부분체]]와 [[splitting-field|분해체]]의 것이다. $\operatorname{Aut}(E/F)$와 "$E$를 분해체로 하는 $f$의 $F$ 위의 갈루아 군"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 가해군은 [[solvable-group|가해군]]의 것이다. 체 $\mathbb{C}$는 [[complex-field|복소수체]]의 것이고, $f$의 $\mathbb{C}$ 안의 근 전체의 집합 $R$과 $F(R)$은 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 것이며, 근호 탑과 "근호로 풀린다"는 [[radical-extension|근호 확대]]의 것이다.

**설정.** $F$가 $\mathbb{C}$의 부분체이고, $f \in F[X]$가 영다항식이 아니며 $\deg f \ge 1$이고, $R$이 $f$의 $\mathbb{C}$ 안의 근 전체의 집합이며 $E = F(R)$이라 하자. ℂ 안의 분해체의 (3)의 (iii)에 의해 $E$는 $F$ 위에서 $f$의 분해체이고, $\operatorname{Aut}(E/F)$는 $E$를 분해체로 하는 $f$의 $F$ 위의 갈루아 군이다.

1. (근호로 풀리면 가해군) $f$가 $F$ 위에서 근호로 풀린다고 하자. $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$이 $R \subseteq F_r$인 $F$의 근호 탑이고, $M$이 이 탑으로 [[galois-radical-tower|근호 탑을 감싸는 분해체]]의 설정에서 만든 체라 하자.
   - (i) $E \subseteq M$이다. $\sigma \in \operatorname{Aut}(M/F)$이면 $\sigma(E) = E$이고, $\sigma$를 $E$로 제한해 함수 $E \to E$로 선언한 $\sigma|_E$는 $\operatorname{Aut}(E/F)$의 원소이다.
   - (ii) 각 $\sigma \in \operatorname{Aut}(M/F)$에 $\sigma|_E$를 대응시키는 함수 $\operatorname{Aut}(M/F) \to \operatorname{Aut}(E/F)$는 전사인 군 준동형이다.
   - (iii) $\operatorname{Aut}(E/F)$는 가해군이다.
2. (분해체를 바꾸어도) $f$가 $F$ 위에서 근호로 풀리고, $F$가 체 $E'$의 부분체이며 $E'$이 $F$ 위에서 $f$의 분해체이면, $\operatorname{Aut}(E'/F)$는 가해군이다.
3. (대우) $\operatorname{Aut}(E/F)$가 가해군이 아니면 $f$는 $F$ 위에서 근호로 풀리지 않는다.
:::

:::english
Fields are meant as in "Units and Fields", and subfields and splitting fields as in the entries on subfields and splitting fields. $\operatorname{Aut}(E/F)$ and "the Galois group of $f$ over $F$ with $E$ as splitting field" are as in "The Automorphism Group of an Extension", and solvable groups are as in "Solvable Group". The field $\mathbb{C}$ is as in "The Field of Complex Numbers"; the set $R$ of all roots of $f$ in $\mathbb{C}$ and $F(R)$ are those of (3) in "Splitting Fields inside the Complex Numbers"; radical towers and "solvable by radicals" are as in "Radical Extension".

**Setting.** Let $F$ be a subfield of $\mathbb{C}$, let $f \in F[X]$ be nonzero with $\deg f \ge 1$, let $R$ be the set of all roots of $f$ in $\mathbb{C}$, and let $E = F(R)$. By (3)(iii) of "Splitting Fields inside the Complex Numbers", $E$ is a splitting field of $f$ over $F$, and $\operatorname{Aut}(E/F)$ is the Galois group of $f$ over $F$ with $E$ as splitting field.

1. (Solvable by radicals implies solvable) Suppose $f$ is solvable by radicals over $F$. Let $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$ be a radical tower of $F$ with $R \subseteq F_r$, and let $M$ be the field built from this tower in the setting of "A Splitting Field Containing a Radical Tower".
   - (i) $E \subseteq M$. If $\sigma \in \operatorname{Aut}(M/F)$, then $\sigma(E) = E$, and the restriction $\sigma|_E$ of $\sigma$ to $E$, declared as a function $E \to E$, is an element of $\operatorname{Aut}(E/F)$.
   - (ii) The function $\operatorname{Aut}(M/F) \to \operatorname{Aut}(E/F)$ sending each $\sigma$ to $\sigma|_E$ is a surjective group homomorphism.
   - (iii) $\operatorname{Aut}(E/F)$ is a solvable group.
2. (Changing the splitting field) If $f$ is solvable by radicals over $F$, $F$ is a subfield of a field $E'$, and $E'$ is a splitting field of $f$ over $F$, then $\operatorname{Aut}(E'/F)$ is a solvable group.
3. (Contrapositive) If $\operatorname{Aut}(E/F)$ is not a solvable group, then $f$ is not solvable by radicals over $F$.
:::

## 직관

근호로 푸는 일은 체를 근호 하나씩 키우는 사다리이고, 갈루아 군의 쪽에서는 이것이 군을 아벨군인 층으로 쪼개는 일에 대응합니다. 그런데 사다리의 꼭대기 자신에서는 자기동형이 모자랄 수 있으므로, [[galois-radical-tower|근호 탑을 감싸는 분해체]]가 꼭대기를 포함하는 분해체 $M$을 만들고 그 자기동형군이 가해군임을 보였습니다. 이 항목은 남은 한 걸음입니다. $f$의 근을 모두 붙인 체 $E$는 $M$ 안에 있고 그 자체로 분해체이므로, $M$의 자기동형은 $E$를 $E$로 보내고 그 제한이 $E$의 자기동형을 모두 줍니다. 큰 군 $\operatorname{Aut}(M/F)$를 작은 군 $\operatorname{Aut}(E/F)$로 전사로 옮기면 가해열도 함께 옮겨 갑니다.

비유하면 큰 건물 $M$의 층 구조가 그 안의 방 $E$에도 그대로 비칩니다. 비유의 "층 구조"는 가해열이고, "비친다"는 것이 [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (2)입니다.

이 정리는 한 방향입니다. 실제로 쓰이는 것은 대우 (3)입니다. 갈루아 군이 가해군이 아니면 근호로 풀리지 않습니다. 갈루아 군이 가해군이면 근호로 풀린다는 역도 참이지만 이 항목은 그것을 진술하지 않습니다.

## 증명

:::idea
근호 탑을 감싸는 분해체 $M$의 자기동형군은 가해군이다. $E$는 $M$ 안의 분해체이므로 기본정리의 (4)에 의해 $M$에서 $E$로의 제한은 전사인 준동형이고, 가해군의 전사 준동형의 상은 가해군이다.
:::

:::hint
$E = F(R)$이 $M$에 들어 있다는 것은 $R \subseteq F_r \subseteq M$과 $F(R)$의 최소성에서 나옵니다.
:::

:::proof
**(1)의 (i).** 근호로 풀린다는 것의 정의에 의해 $R \subseteq F_r$인 근호 탑이 있다. 근호 탑을 감싸는 분해체의 (1)의 (iv)에 의해 $F_r \subseteq M$이고, [[radical-extension|근호 확대]]의 (1)의 (ii)에 의해 $F \subseteq M$이다. $M$은 $F$와 $R$을 포함하는 $\mathbb{C}$의 부분체이므로 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 (ii)에 의해 $E = F(R) \subseteq M$이다. 근호 탑을 감싸는 분해체의 (1)의 (iii)에 의해 $M$은 $F$ 위에서 $g$의 분해체이고 $g$의 모닉 기약 인수마다 근이 서로 다르므로, [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 설정이 $F$, $M$, $g$에 대해 성립하고 $E$는 그 중간체이다. $E$는 $F$ 위에서 $f$의 분해체이므로 기본정리의 (4)의 (iii)에 의해 그 (4)의 (i), 곧 모든 $\sigma \in \operatorname{Aut}(M/F)$에서 $\sigma(E) = E$가 성립하고, 그 (4)의 (iv)에 의해 $\sigma|_E \in \operatorname{Aut}(E/F)$이다.

**(1)의 (ii).** 기본정리의 (4)의 (iv)에 의해 이 함수 $r_E$는 전사인 군 준동형이다.

**(1)의 (iii).** 근호 탑을 감싸는 분해체의 (3)에 의해 $\operatorname{Aut}(M/F)$는 가해군이다. (ii)와 [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (2)에 의해 $\operatorname{Aut}(E/F)$는 가해군이다.

**(2).** $E$와 $E'$은 둘 다 $F$ 위에서 $f$의 분해체이므로 [[automorphism-group-of-extension|확대의 자기동형군]]의 (6)에 의해 $\operatorname{Aut}(E/F) \cong \operatorname{Aut}(E'/F)$이다. (1)의 (iii)과 가해군의 부분군과 준동형상의 (3)에 의해 $\operatorname{Aut}(E'/F)$는 가해군이다.

**(3).** $f$가 $F$ 위에서 근호로 풀리면 (1)의 (iii)에 의해 $\operatorname{Aut}(E/F)$는 가해군이다. 이 조건문의 대우이다.
:::

## 예시와 반례

:::example[$\iota(\mathbb{Q})$ 위의 $X^3 - 2$]
$F = \iota(\mathbb{Q})$, $f = X^3 - 2$라 합시다. $\omega = \omega_3$과 $\gamma = \iota(\sqrt[3]{2})$($\gamma^3 = 2$, [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5))로 $F_0 = F$, $F_1 = F(\omega)$, $F_2 = F_1(\gamma)$, 근호 $\omega$, $\gamma$, 지수 $3$, $3$은 $\omega^3 = 1 \in F$, $\gamma^3 = 2 \in F_1$이므로 근호 탑입니다. [[galois-groups-of-roots-of-unity-and-radicals|거듭제곱근을 붙인 확대의 갈루아 군]]의 (2)의 (i)을 밑체 $F_1$에 쓰면 $f$의 $\mathbb{C}$ 안의 근은 $\gamma\omega^k$($0 \le k \le 2$)이고 모두 $F_2$에 있습니다. 따라서 $f$는 $F$ 위에서 근호로 풀리고, (1)의 (iii)에 의해 $f$의 갈루아 군 $\operatorname{Aut}(F(R)/F)$는 가해군입니다.
:::

:::counterexample[근호로 풀리지만 갈루아 군이 아벨군이 아닌 $X^3 - 2$]
위 예시의 $f$, $E = F(R)$, $G = \operatorname{Aut}(E/F)$에서 $G$는 아벨군이 아닙니다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)과 ℂ 안의 분해체의 (2)의 (ii)에 의해 $f$는 $F$ 위에서 기약이므로, ℂ 안의 분해체의 (3)의 (iv)에 의해 $|R| = 3$입니다. 실수 $x$가 $x^3 = 2$이면 $x \le 0$일 때 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (4)의 (iv)에 의해 $x^3 \le 0$이어서 어긋나므로 $0 < x$이고 [[nth-root|n제곱근]]의 (1)에 의해 $x = \sqrt[3]{2}$입니다. ℂ 안의 분해체의 (2)의 (iii)에 의해 $R$의 실수인 원소는 $\gamma$ 하나이고, 그 (4)의 (iii)에 의해 $E$로 제한한 켤레 $c \in G$는 $R$ 위에서 호환입니다. 또 $\gamma$의 최소다항식은 $f$이므로 $[F(\gamma) : F] = 3$이고 [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $3$이 $[E : F] = |G|$([[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1))를 나눕니다. [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (2)의 (i)의 단사 준동형 $\theta_R : G \to S_R$의 상은 원소가 $|G|$개이므로, [[transposition-and-p-cycle-generate|호환과 길이 p인 순환치환]]의 (3)을 $p = 3$에 쓰면 길이 $3$인 순환치환 $\rho = (a\ b\ d)$와 호환 $\theta_R(c)$를 포함합니다. 그 (2)에 의해 상은 $S_R$ 전체이고, $\tau = (a\ b)$로 두면 $\tau\rho(a) = \tau(b) = a$, $\rho\tau(a) = \rho(b) = d$이므로 $\tau\rho \ne \rho\tau$입니다. [[group-isomorphism|군의 동형]]의 (4)와 (3)의 (i)에 의해 $G$는 아벨군이 아닙니다. 근호로 풀리는 다항식의 갈루아 군은 가해군이지만, 아벨군일 필요는 없습니다.
:::

## 확인 질문

:::check[$f = aX + b$($a, b \in F$, $a \ne 0$)이면 $f$의 갈루아 군 $\operatorname{Aut}(F(R)/F)$는 무엇이고, 이 항목의 결론과 맞는가?]
근은 $-a^{-1}b \in F$ 하나이므로 $F(R) = F$이고 $\operatorname{Aut}(F/F) = \{i_F\}$입니다. 원소가 하나인 군은 가해군이고([[solvable-group|가해군]]의 (2)), [[radical-extension|근호 확대]]의 (3)의 (ii)에 의해 $f$는 근호로 풀리므로 (1)의 (iii)과 맞습니다.
:::

:::check[$c \in F$, $c \ne 0$이면 $cf$가 $F$ 위에서 근호로 풀리는 것과 $f$가 그런 것은 같은가?]
같습니다. 대입 준동형의 (2)에 의해 복소수 $z$에서 $(cf)(z) = c\,f(z)$이고, $c \ne 0$이며 체 $\mathbb{C}$는 정역이므로 $(cf)(z) = 0$인 것은 정확히 $f(z) = 0$일 때입니다. 곧 두 다항식의 $\mathbb{C}$ 안의 근 전체는 같은 $R$이고, "근호로 풀린다"의 정의는 $R$만 보므로 두 조건은 같습니다. 근을 붙인 체 $F(R)$과 갈루아 군도 같습니다.
:::
