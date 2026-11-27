---
title: 근호로 풀리지 않는 5차 다항식
title_en: A Quintic Polynomial Not Solvable by Radicals
aliases: [5차 방정식의 근호 풀이 불가능, 근호로 풀리지 않는 다항식의 예, X⁵ − 6X³ − 27X − 3, insolvability of the quintic, quintic not solvable by radicals]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "유리수 계수의 다항식 X⁵ − 6X³ − 27X − 3 을 ι 로 옮긴 다항식은 ι(ℚ) 위에서 기약이고 실근이 정확히 셋이다. 그 근 다섯 개를 붙인 체의 ι(ℚ) 위의 자기동형군은 근의 치환으로 보아 다섯 원소의 대칭군 전체와 동형이고, 이 군은 가해군이 아니다. 따라서 이 다항식은 ι(ℚ) 위에서 근호로 풀리지 않는다."
requires: [function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, disjoint-union-count, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, square-root-exists, nth-root, interval, real-valued-function, continuous-function, derivative, intermediate-value-theorem, rolle-theorem, ring, field, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, formal-derivative, subfield, irreducible-polynomial, rational-numbers-field, eisenstein-criterion, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, splitting-field, separable-polynomial, group, group-homomorphism, group-isomorphism, subgroup, symmetric-group, order-of-symmetric-group, cycle-permutation, automorphism-group-of-extension, automorphisms-permute-roots, order-of-galois-group, solvable-group, symmetric-group-is-not-solvable, transposition-and-p-cycle-generate, complex-field, complex-conjugate, power-of-a-complex-number, roots-of-unity, polynomials-and-polynomial-functions, splitting-fields-in-complex-numbers, radical-extension, galois-groups-of-roots-of-unity-and-radicals, solvable-by-radicals-implies-solvable]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Insolvability of the Quintic: Lemma 23.31 (p.305), Figure 23.32 와 Example 23.33 (p.306–307); 23.5절 Exercises, 연습문제 4 (a), (b), 11, 12 (p.308)"
    checked: original
    note: "이 항목은 출처 Example 23.33(p.306–307)의 다항식 f(x) = x⁵ − 6x³ − 27x − 3 을 그대로 쓰고, 출처의 논증을 ℂ 의 부분체 ι(ℚ) 위에서 진술한다. 출처는 아이젠슈타인 판정법으로 기약이고 따라서 'must be separable' 이라 하고, f′(x) = 5x⁴ − 18x² − 27 의 실근이 x = ±√((6√6 + 9)/5) 뿐이므로 'f(x) can have at most one maximum and one minimum' 이라 적은 뒤 'f(x) changes sign between −3 and −2, between −2 and 0, and once again between 0 and 4 (Figure 23.32). Therefore, f(x) has exactly three distinct real roots' 라고 쓴다. 이 항목은 셋째 구간을 (3, 4) 로 잡고(f(3) = −3, f(4) = 529), '정확히 셋' 을 롤 정리로 보인다(실근이 넷이면 도함수의 실근이 셋). 출처는 'If α is one of the real roots of f(x), then [ℚ(α) : ℚ] = 5 by Exercise 21.5.28' 이라 하고 '[K : ℚ] = |G(K/ℚ)| and G(K/ℚ) ⊂ S₅, we know that G(K/ℚ) contains a cycle of length 5' 라고 쓴다. 이 항목은 위수 5 인 원소에서 길이 5 인 순환치환을 얻는 단계를 9단원의 transposition-and-p-cycle-generate (3) 으로 보인다. 켤레가 호환이라는 것은 출처가 'The automorphism of C that takes a + bi ↦ a − bi leaves the real roots fixed and interchanges the complex roots' 라고 쓰는 곳이고, 이 항목은 켤레를 분해체로 제한한 것이 ι(ℚ) 를 고정하는 자기동형이라는 것(splitting-fields-in-complex-numbers (4))으로 진술한다. 출처는 Lemma 23.31(p.305, 호환과 길이 p 인 순환치환을 포함하면 S_p)과 Theorem 10.11 로 S₅ 가 가해군이 아님을 쓰고, 이 항목은 9단원의 두 항목을 쓴다. 예시 '$X^5 - 4X + 2$에 같은 길을 쓰기' 는 출처 23.5절 연습문제 4 (a), (b)(p.308, x⁵ − 12x² + 2, x⁵ − 4x⁴ + 2x + 2 의 갈루아 군과 근호 풀이), 연습문제 11(근호로 풀리지 않는 7차 다항식을 만들어라), 12(소수 차수에서 갈루아 군이 S_p 인 다항식)와 같은 발상이다. 반례 '실근이 하나인 기약 5차 다항식 $X^5 - 2$' 는 출처 23.3절의 xⁿ − a 가 근호로 풀린다는 논의(p.303–304)와 같은 대상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(5차 예의 값과 도함수의 근을 다시 계산, 경계 경우 n = 1·b = 0). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 다항식환과 부정원 $X$는 [[polynomial-ring|다항식환]], 차수는 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값과 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]], 형식적 도함수 $f'$는 [[formal-derivative|형식적 도함수]]의 것이고, 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이다. 유리수체 $\mathbb{Q}$는 [[rational-numbers-field|유리수체]]의 것이고, 체 $\mathbb{C}$, 함수 $\iota$, 실수인 복소수는 [[complex-field|복소수체]]의 것이며, $\iota(\mathbb{Q})$, $g^{\iota}$, $F(R)$, $F(R)$로 제한한 켤레는 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 것이다. $\operatorname{Aut}(E/F)$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 대칭군 $S_R$, 호환, 길이 $5$인 순환치환은 [[symmetric-group|대칭군]]과 [[cycle-permutation|순환치환]]의 것이며, $\theta_R$은 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (iii)의 것이다. 가해군은 [[solvable-group|가해군]]의 것이고, "근호로 풀린다"는 [[radical-extension|근호 확대]]의 것이다. 열린구간은 [[interval|구간]]의 것이다.

**설정.** $f = X^5 - 6X^3 - 27X - 3$이라 하자. 유리수체의 (4)에 의해 $f \in \mathbb{Z}[X] \subseteq \mathbb{Q}[X] \subseteq \mathbb{R}[X]$이다. $F = \iota(\mathbb{Q})$이고, ℂ 안의 분해체의 (2)에 의해 $f^{\iota} \in F[X]$이며 $f^{\iota}$는 계수가 $1, -6, -27, -3$을 $\iota$로 옮긴 다항식 $X^5 - 6X^3 - 27X - 3$이다. $f^{\iota}$의 $\mathbb{C}$ 안의 근 전체의 집합을 $R$, $K = F(R)$, $G = \operatorname{Aut}(K/F)$라 하자.

1. (기약과 근의 개수) $f$는 $\mathbb{Q}$ 위에서 기약이고, $f^{\iota}$는 $F$ 위에서 기약인 모닉 다항식이며 차수가 $5$이다. $R$은 원소가 $5$개이다. $\alpha \in R$이면 $f^{\iota}$는 $\alpha$의 $F$ 위의 최소다항식이고 $[F(\alpha) : F] = 5$이다.
2. (실근 셋)
   - (i) 실수 $x$에 대하여 $f(x) = x^5 - 6x^3 - 27x - 3$이고, $f(-3) = -3$, $f(-2) = 67$, $f(0) = -3$, $f(3) = -3$, $f(4) = 529$이다.
   - (ii) $f' = 5X^4 - 18X^2 - 27$이고, $u = (9 + 6\sqrt{6})/5$로 두면 $f'(x) = 0$인 실수 $x$는 정확히 $\sqrt{u}$와 $-\sqrt{u}$의 두 개이다.
   - (iii) $f(x) = 0$인 실수 $x$는 정확히 세 개이고, 열린구간 $(-3, -2)$, $(-2, 0)$, $(3, 4)$에 하나씩 있다.
   - (iv) $R$의 원소 가운데 실수인 복소수는 정확히 세 개이고, 실수인 복소수가 아닌 것은 정확히 두 개이며 그 둘은 서로의 켤레이다.
3. (갈루아 군)
   - (i) $G$는 유한군이고 $|G| = [K : F]$이며, $5$는 $|G|$를 나눈다.
   - (ii) $K$로 제한한 켤레는 $G$의 원소이고, $\theta_R$에 의한 그 상은 $R$의 실수가 아닌 두 원소를 맞바꾸는 호환이다.
   - (iii) $\theta_R : G \to S_R$은 전단사인 준동형이다. 따라서 $G \cong S_R$이고 $|G| = [K : F] = 120$이다.
4. (근호로 풀리지 않는다) $G$는 가해군이 아니다. 따라서 $f^{\iota}$는 $F = \iota(\mathbb{Q})$ 위에서 근호로 풀리지 않는다.
:::

:::english
Fields are meant as in "Units and Fields"; subfields, extension fields and the degree $[E : F]$ are as in the entries on subfields and extension fields. The polynomial ring and the indeterminate $X$ are as in "Polynomial Ring", degree as in "Degree of a Polynomial", values, roots and the polynomial $f^{\varphi}$ with transported coefficients as in "Evaluation Homomorphism", and the formal derivative $f'$ as in "Formal Derivative"; irreducible is meant as in "Irreducible Polynomial". The field of rational numbers $\mathbb{Q}$ is as in "The Field of Rational Numbers"; the field $\mathbb{C}$, the function $\iota$ and real complex numbers are as in "The Field of Complex Numbers"; $\iota(\mathbb{Q})$, $g^{\iota}$, $F(R)$ and the conjugation restricted to $F(R)$ are as in "Splitting Fields inside the Complex Numbers". $\operatorname{Aut}(E/F)$ is as in "The Automorphism Group of an Extension"; the symmetric group $S_R$, transpositions and cycles of length $5$ are as in the entries on symmetric groups and cycles; and $\theta_R$ is that of (1)(iii) of "Automorphisms Permute Roots". Solvable groups are as in "Solvable Group", and "solvable by radicals" is as in "Radical Extension". Open intervals are as in "Interval".

**Setting.** Let $f = X^5 - 6X^3 - 27X - 3$. By (4) of the entry on the field of rational numbers, $f \in \mathbb{Z}[X] \subseteq \mathbb{Q}[X] \subseteq \mathbb{R}[X]$. Let $F = \iota(\mathbb{Q})$; by (2) of "Splitting Fields inside the Complex Numbers", $f^{\iota} \in F[X]$, and $f^{\iota}$ is the polynomial $X^5 - 6X^3 - 27X - 3$ whose coefficients $1, -6, -27, -3$ are transported by $\iota$. Let $R$ be the set of all roots of $f^{\iota}$ in $\mathbb{C}$, $K = F(R)$ and $G = \operatorname{Aut}(K/F)$.

1. (Irreducibility and the number of roots) $f$ is irreducible over $\mathbb{Q}$, and $f^{\iota}$ is a monic polynomial of degree $5$ irreducible over $F$. $R$ has $5$ elements. If $\alpha \in R$, then $f^{\iota}$ is the minimal polynomial of $\alpha$ over $F$ and $[F(\alpha) : F] = 5$.
2. (Three real roots)
   - (i) For a real number $x$, $f(x) = x^5 - 6x^3 - 27x - 3$, and $f(-3) = -3$, $f(-2) = 67$, $f(0) = -3$, $f(3) = -3$, $f(4) = 529$.
   - (ii) $f' = 5X^4 - 18X^2 - 27$, and with $u = (9 + 6\sqrt{6})/5$, the real numbers $x$ with $f'(x) = 0$ are exactly the two numbers $\sqrt{u}$ and $-\sqrt{u}$.
   - (iii) There are exactly three real numbers $x$ with $f(x) = 0$, one in each of the open intervals $(-3, -2)$, $(-2, 0)$ and $(3, 4)$.
   - (iv) Exactly three elements of $R$ are real complex numbers, exactly two are not, and those two are conjugates of each other.
3. (The Galois group)
   - (i) $G$ is a finite group with $|G| = [K : F]$, and $5$ divides $|G|$.
   - (ii) The conjugation restricted to $K$ is an element of $G$, and its image under $\theta_R$ is the transposition interchanging the two non-real elements of $R$.
   - (iii) $\theta_R : G \to S_R$ is a bijective homomorphism. Hence $G \cong S_R$ and $|G| = [K : F] = 120$.
4. (Not solvable by radicals) $G$ is not a solvable group. Hence $f^{\iota}$ is not solvable by radicals over $F = \iota(\mathbb{Q})$.
:::

## 직관

어떤 다항식이 근호로 풀리지 않음을 보이려면 [[solvable-by-radicals-implies-solvable|근호로 풀리면 갈루아 군이 가해군]]의 대우를 씁니다. 갈루아 군이 가해군이 아님을 보이면 됩니다. 갈루아 군은 근 다섯 개의 치환으로 보면 $S_R$의 부분군이고, 다섯 원소의 대칭군 전체는 가해군이 아닙니다. 그래서 갈루아 군이 $S_R$ 전체라는 것을 보이면 끝납니다. 소수 $5$개의 원소 위에서는 호환 하나와 길이 $5$인 순환치환 하나만 있어도 대칭군 전체가 생성되므로 이 둘을 찾습니다.

길이 $5$인 순환치환은 차수에서 나옵니다. $f$가 기약이므로 근 하나를 붙인 체의 차수가 $5$이고, 이것이 분해체의 차수, 곧 갈루아 군의 위수를 나눕니다. 위수가 $5$로 나누어지는 $S_R$의 부분군에는 길이 $5$인 순환치환이 있습니다. 호환은 켤레에서 나옵니다. 실근이 정확히 셋이면 실수가 아닌 근은 정확히 둘이고 서로 켤레이므로, 켤레는 실근 셋을 그대로 두고 그 둘만 맞바꿉니다.

실근이 정확히 셋이라는 것은 그래프의 모양에서 옵니다. 부호가 세 번 바뀌므로 적어도 셋이고, 넷이면 롤 정리로 도함수가 실근을 셋 가져야 하는데 도함수의 실근은 둘뿐입니다. 이 셋이라는 개수가 핵심입니다. 실근이 하나뿐인 기약 5차 다항식에서는 켤레가 두 쌍을 맞바꾸어 호환이 되지 않고, 아래 반례의 $X^5 - 2$처럼 근호로 풀리는 것도 있습니다.

## 증명

:::idea
아이젠슈타인 판정법으로 기약, 사잇값 정리와 롤 정리로 실근이 정확히 셋임을 보인다. 차수 $5$가 갈루아 군의 위수를 나누어 길이 $5$인 순환치환이, 켤레에서 호환이 나오고, 둘이 $S_R$ 전체를 생성하므로 갈루아 군은 가해군이 아니다.
:::

:::hint
실근이 넷이라고 해 봅시다. 이웃한 두 실근 사이마다 롤 정리를 쓰면 도함수의 실근이 몇 개 생깁니까?
:::

:::hint
$\theta_R$은 단사이므로 그 상의 원소의 개수는 $|G|$입니다. 상이 호환과 길이 $5$인 순환치환을 포함하면 무엇이 됩니까?
:::

:::proof
**(1).** $f \in \mathbb{Z}[X]$의 계수는 $a_5 = 1$, $a_4 = 0$, $a_3 = -6$, $a_2 = 0$, $a_1 = -27$, $a_0 = -3$이다. 소수 $3$은 $a_5$를 나누지 않고 $a_0, \dots, a_4$를 모두 나누며, $9$는 $a_0 = -3$을 나누지 않는다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (1)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이다. [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (2)의 (ii)에 의해 $f^{\iota}$는 $F$ 위에서 기약이고 차수가 $5$인 모닉 다항식이다. ℂ 안의 분해체의 (3)의 (iv)에 의해 $|R| = 5$이다. $\alpha \in R$이면 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $f^{\iota}$는 $\alpha$의 $F$ 위의 최소다항식이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[F(\alpha) : F] = 5$이다.

**(2)의 (i).** [[evaluation-homomorphism|대입 준동형]]의 (1)과 [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (ii)에 의해 실수 $x$에서 $f(x) = x^5 - 6x^3 - 27x - 3$이고, 거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. 실수의 계산으로
$$
\begin{aligned}
f(-3) &= -243 + 162 + 81 - 3 \\
&= -3, \\
f(-2) &= -32 + 48 + 54 - 3 \\
&= 67, \\
f(0) &= -3, \\
f(3) &= 243 - 162 - 81 - 3 \\
&= -3, \\
f(4) &= 1024 - 384 - 108 - 3 \\
&= 529
\end{aligned}
$$
이다.

**(2)의 (ii).** [[formal-derivative|형식적 도함수]]의 (1)에 의해 $f' = 5X^4 - 18X^2 - 27$이다. $u = (9 + 6\sqrt{6})/5$, $v = (9 - 6\sqrt{6})/5$로 두면 [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sqrt{6}\sqrt{6} = 6$이므로 $u + v = 18/5$, $uv = (81 - 216)/25 = -27/5$이고, 실수 $x$에서
$$
\begin{aligned}
&5(x^2 - u)(x^2 - v) \\
&\quad = 5x^4 - 5(u + v)x^2 + 5uv \\
&\quad = 5x^4 - 18x^2 - 27 = f'(x)
\end{aligned}
$$
이다. 제곱근의 존재의 (2)에 의해 $\sqrt{36}\sqrt{6} = \sqrt{216}$이고 $\sqrt{81} < \sqrt{216}$이므로 $9 < 6\sqrt{6}$, 곧 $v < 0$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le x^2$이므로 $x^2 - v > 0$이고, 따라서 $f'(x) = 0$인 것은 정확히 $x^2 = u$일 때이다. $0 < u$이다. $x \ge 0$이고 $x^2 = u$이면 제곱근의 존재의 (1)의 유일성에 의해 $x = \sqrt{u}$이고, $x < 0$이고 $x^2 = u$이면 $(-x)^2 = u$에서 $-x = \sqrt{u}$이다. 거꾸로 $\pm\sqrt{u}$의 제곱은 $u$이다. $0 < \sqrt{u}$이므로 $\sqrt{u} \ne -\sqrt{u}$이다.

**(2)의 (iii).** 다항식과 다항함수의 (2)에 의해 $x$에서의 값이 $f(x)$인 함수 $h : \mathbb{R} \to \mathbb{R}$는 연속이고, 모든 구간 $I$에서 $h|_I$는 연속이며 미분가능하고 $c \in I$에서의 미분계수가 $f'(c)$이다. (i)에 의해 $f(-3) < 0 < f(-2)$, $f(0) < 0 < f(-2)$, $f(3) < 0 < f(4)$이므로 [[intermediate-value-theorem|사잇값 정리]]의 (1)과 (3)에 의해 $f(r_1) = f(r_2) = f(r_3) = 0$이고 $-3 < r_1 < -2 < r_2 < 0 < 3 < r_3 < 4$인 실수 $r_1$, $r_2$, $r_3$이 있다. 이 셋은 서로 다르다.

이 셋과 다른 실근 $t$가 있다고 하자. [[real-order-axioms|실수의 순서 공리]]의 삼분법에 의해 $t < r_1$, $r_1 < t < r_2$, $r_2 < t < r_3$, $r_3 < t$ 가운데 하나가 성립하고, 어느 경우든 $f$의 실근 $y_1 < y_2 < y_3 < y_4$가 있다(네 수 $t, r_1, r_2, r_3$을 크기순으로 적은 것). $j = 1, 2, 3$마다 $h|_{[y_j, y_{j+1}]}$은 연속이고 열린구간 $(y_j, y_{j+1})$에서 미분가능하며 양 끝값이 $0$이므로, [[rolle-theorem|롤의 정리]]에 의해 $y_j < c_j < y_{j+1}$이고 $f'(c_j) = 0$인 실수 $c_j$가 있다. $c_1 < y_2 < c_2 < y_3 < c_3$이므로 $c_1$, $c_2$, $c_3$은 서로 다른 세 실수이고 모두 $f'$의 실근이어서 (ii)에 어긋난다. 따라서 $f$의 실근은 정확히 $r_1$, $r_2$, $r_3$이다.

**(2)의 (iv).** ℂ 안의 분해체의 (2)의 (iii)에 의해 $R$의 원소 가운데 실수인 복소수는 정확히 $\iota(r_1)$, $\iota(r_2)$, $\iota(r_3)$이고, [[complex-field|복소수체]]의 (2)에 의해 $\iota$는 단사이므로 서로 다른 세 원소이다. 이 셋의 집합을 $R_0$라 하면 $R_0 \subseteq R$이고 [[disjoint-union-count|서로소인 합집합의 원소 개수]]의 (2)에 의해 $R - R_0$은 원소가 $5 - 3 = 2$개이다. ℂ 안의 분해체의 (4)의 (iii)에 의해 그 두 원소는 서로의 켤레이다.

**(3)의 (i).** ℂ 안의 분해체의 (3)의 (iii), (iv)와 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)에 의해 $G$는 유한군이고 $|G| = [K : F]$이다. $\alpha \in R$이면 $F \subseteq F(\alpha) \subseteq K$이므로 [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $[F(\alpha) : F] = 5$는 $[K : F]$를 나눈다.

**(3)의 (ii).** $F$의 원소는 실수인 복소수이므로(ℂ 안의 분해체의 (1)의 (ii)) 그 (4)의 (i)에 의해 $K$로 제한한 켤레 $c$는 $F$의 원소를 고정하는 환 동형사상 $K \to K$이고, [[automorphism-group-of-extension|확대의 자기동형군]]의 정의에 의해 $c \in G$이다. $R - R_0 = \{z, w\}$라 하면 ℂ 안의 분해체의 (4)의 (iii)에 의해 $c$는 $R_0$의 원소를 고정하고 $z$와 $w$를 맞바꾼다. [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (iii)에 의해 $\theta_R(c) = c|_R$이고, 이것은 $R$의 각 원소에서 [[cycle-permutation|순환치환]]의 정의의 $(z\ w)$와 같은 값을 가지므로 호환 $(z\ w)$이다.

**(3)의 (iii).** $K$는 $F$ 위에서 $f^{\iota}$의 분해체이므로 자기동형과 근의 치환의 (2)의 (i)에 의해 $\theta_R$은 단사인 준동형이고, $H = \theta_R(G)$는 $S_R$의 부분군이며 [[group-isomorphism|군의 동형]]의 (4)와 (3)의 (iii)에 의해 $|H| = |G|$이다. $R$은 원소가 소수 $5$개이므로 [[transposition-and-p-cycle-generate|호환과 길이 p인 순환치환]]의 (3)에 의해 $H$에는 길이 $5$인 순환치환이 있고, (ii)에 의해 $H$는 호환을 포함한다. 그 (2)에 의해 $H = S_R$이다. 따라서 $\theta_R : G \to S_R$은 전사이기도 하고 군의 동형사상이다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (3)에 의해 $|S_R| = 5! = 120$이므로 $|G| = 120$이고 (i)에 의해 $[K : F] = 120$이다.

**(4).** $R$은 원소가 $5$개인 유한집합이고 $\theta_R : G \to S_R$은 전사인 준동형이므로 [[symmetric-group-is-not-solvable|대칭군은 가해군이 아니다]]의 (4)에 의해 $G$는 가해군이 아니다. $K = F(R)$이므로 근호로 풀리면 갈루아 군이 가해군의 (3)을 $F$와 $f^{\iota}$에 쓰면 $f^{\iota}$는 $F$ 위에서 근호로 풀리지 않는다.
:::

## 예시와 반례

:::example[$X^5 - 4X + 2$에 같은 길을 쓰기]
$k = X^5 - 4X + 2$라 합시다. 계수 $1, 0, 0, 0, -4, 2$에서 소수 $2$는 최고차계수 $1$을 나누지 않고 나머지를 모두 나누며 $4 \nmid 2$이므로 아이젠슈타인 판정법의 (1)에 의해 $k$는 $\mathbb{Q}$ 위에서 기약입니다. $k(-2) = -32 + 8 + 2 = -22$, $k(0) = 2$, $k(1) = -1$, $k(2) = 32 - 8 + 2 = 26$이므로 사잇값 정리로 $(-2, 0)$, $(0, 1)$, $(1, 2)$에 실근이 하나씩 있습니다. $k' = 5X^4 - 4$이고 $k'(x) = 0$인 것은 정확히 $x^4 = 4/5$, 곧 $x^2 = \sqrt{4/5}$($x^2 \ge 0$이고 제곱근의 유일성)일 때이므로 실근은 $\pm\sqrt{\sqrt{4/5}}$의 두 개입니다. (2)의 (iii)의 증명과 같이 롤 정리로 $k$의 실근은 정확히 셋이고, (3), (4)의 증명을 그대로 옮기면 $k^{\iota}$의 갈루아 군은 $S_R$과 동형이며 $k^{\iota}$는 $\iota(\mathbb{Q})$ 위에서 근호로 풀리지 않습니다. 이 증명이 다항식에서 쓰는 것은 "기약, 차수가 소수 $5$, 실근이 정확히 셋"뿐입니다.
:::

:::counterexample[실근이 하나인 기약 5차 다항식 $X^5 - 2$]
$k = X^5 - 2$는 아이젠슈타인 판정법의 (3)에 의해 $\mathbb{Q}$ 위에서 기약이고 차수가 $5$입니다. 그러나 실수 $x$가 $x^5 = 2$이면 $x \le 0$일 때 $x^4 = (xx)(xx) \ge 0$이고 $x^5 = x^4 x \le 0$이어서(실수의 순서의 성질의 (5)의 (iii), (4)의 (iv)) 어긋나므로 $0 < x$이고, [[nth-root|n제곱근]]의 (1)에 의해 $x = \sqrt[5]{2}$입니다. 곧 실근은 하나뿐이고 (2)에 해당하는 것이 성립하지 않습니다. 실제로 $\omega = \omega_5$, $\gamma = \iota(\sqrt[5]{2})$이면 $F \subseteq F(\omega) \subseteq F(\omega)(\gamma)$는 근호 탑이고($\omega^5 = 1$, $\gamma^5 = 2$, [[roots-of-unity|1 의 n제곱근]]의 (2)와 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)), [[galois-groups-of-roots-of-unity-and-radicals|거듭제곱근을 붙인 확대의 갈루아 군]]의 (2)의 (i)을 밑체 $F(\omega)$에 쓰면 $k^{\iota}$의 근 $\gamma\omega^j$($0 \le j \le 4$)가 모두 꼭대기에 있으므로 $k^{\iota}$는 근호로 풀립니다. 기약이고 차수가 $5$인 다항식도 근호로 풀릴 수 있습니다.
:::

## 확인 질문

:::check[$G$의 원소 가운데 $R$의 실수인 원소 셋을 모두 고정하는 것은 몇 개인가?]
두 개입니다. (3)의 (iii)에 의해 $\theta_R$은 $G$에서 $S_R$로의 전단사이므로 $R_0$의 세 원소를 고정하는 $R$의 치환의 개수를 세면 됩니다. 그런 치환은 나머지 두 원소 $z$, $w$의 집합을 그 자신으로 보내므로 둘을 고정하거나 맞바꿉니다. 곧 항등치환과 호환 $(z\ w)$이고, $G$에서는 $i_K$와 $K$로 제한한 켤레입니다.
:::

:::check[실수인 근이 하나인 기약 5차 다항식이면 분해체로 제한한 켤레는 근 위에서 무엇인가?]
실수인 근은 고정하고, 실수가 아닌 네 근 $z$마다 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (4)의 (iii)에 의해 $z$를 그와 다른 근 $\overline{z}$로 보냅니다. 곧 네 원소를 움직이므로, 받침이 두 원소인 호환이 아닙니다([[cycle-permutation|순환치환]]의 (2)). 이 경우 (3)의 (ii)의 단계는 켤레로 얻어지지 않습니다.
:::
