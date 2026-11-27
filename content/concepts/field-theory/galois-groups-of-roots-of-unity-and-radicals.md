---
title: 거듭제곱근을 붙인 확대의 갈루아 군
title_en: Galois Groups of Extensions by Roots of Unity and by Radicals
aliases: [1 의 거듭제곱근을 붙인 체, 원분체의 갈루아 군, Xⁿ − b 의 갈루아 군, Galois group of x^n - a, cyclotomic extension]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "복소수체의 부분체 F 에 1 의 n제곱근 ω_n 을 붙인 체 F(ω_n) 은 F 위에서 Xⁿ − 1 의 분해체이고, F 를 고정하는 자기동형은 ω_n 을 그 거듭제곱으로 보내며 서로 교환된다. ω_n 이 F 에 있고 b 가 F 의 0 이 아닌 원소이며 γⁿ = b 이면 F(γ) 는 F 위에서 Xⁿ − b 의 분해체이고, F 를 고정하는 자기동형은 γ 를 γω_nᵃ 꼴로 보내며 서로 교환된다. 두 갈루아 군은 아벨군이다."
requires: [real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, nth-root, ring, field, integral-domain, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, irreducible-polynomial, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, finite-extension-is-algebraic, splitting-field, separable-polynomial, group, automorphism-group-of-extension, automorphisms-permute-roots, order-of-galois-group, complex-field, complex-conjugate, power-of-a-complex-number, roots-of-unity, nth-roots-of-complex-numbers, polynomials-and-polynomial-functions, splitting-fields-in-complex-numbers]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Example 23.27 (p.303), Lemma 23.28 과 그 증명 (p.304); 4.2절 Multiplicative Group of Complex Numbers, Theorem 4.25 (p.52); 21.2절 Splitting Fields, Example 21.30 (p.268); 23.5절 Exercises, 연습문제 4, 5 (p.308), 20 (p.309)"
    checked: original
    note: "출처 Lemma 23.28(p.304)은 '표수 0 인 체 F 와 a ∈ F 에 대하여 xⁿ − a 의 F 위의 분해체 E 의 G(E/F) 는 가해군이다' 라고 진술한다. 증명은 두 경우로 나눈다. F 가 1 의 n제곱근을 모두 포함하면 근 ζ 하나로 E = F(ζ) 이고 σ(ζ) = ωⁱζ, τ(ζ) = ωʲζ 에서 στ = τσ 를 보여 G(E/F) 가 아벨군이라 하고, 그렇지 않으면 K = F(ω) 가 xⁿ − 1 의 분해체이며 σ(ω) = ωⁱ 에서 G(F(ω)/F) 가 아벨군이라 하고 기본정리로 {id} ⊂ G(E/F(ω)) ⊂ G(E/F) 를 쓴다. 이 항목의 (1)과 (2)는 그 두 경우의 아벨군 부분을 진술로 올린 것이고, 두 경우를 합쳐 가해군을 얻는 단계는 이 항목이 하지 않는다. 출처의 증명은 근을 'ⁿ√a, ωⁿ√a, …, ω^{n−1}ⁿ√a' 로 적고 a = 0 인 경우를 따로 말하지 않는다. a = 0 이면 xⁿ 의 근은 0 하나이고 ωζ 꼴로 근을 늘어놓을 수 없으므로, 이 항목은 (2)를 b ≠ 0 으로 진술하고 b = 0 은 (3)의 (ii)에 따로 둔다. 근이 'σ(ζ) = ωⁱζ' 꼴이라는 것은 출처가 'Since G(E/F) permutes the roots' 로 쓰는 것이고, 이 항목은 자기동형이 근을 근으로 보낸다는 것(automorphisms-permute-roots (1)의 (ii))과 근의 집합의 꼴로 보인다. (1)의 μ_n 의 꼴은 출처 Theorem 4.25(p.52)이고, F(ω) 가 xⁿ − 1 의 분해체라는 것은 Example 23.27(p.303, ℚ 위에서)과 같다. 23.5절 연습문제 20(p.309)의 (b)는 소수 p 에 대하여 G(ℚ(ω)/ℚ) 가 위수 p − 1 인 아벨군임을 보이라고 하며, (1)의 (iii)을 F = ℚ, n = p 에 쓴 것과 같은 대상이다. 예시 '$\\iota(\\mathbb{Q})$ 위에서 $n = 4$일 때의 두 자기동형' 은 23.5절 연습문제 5 (a)(p.308, x⁴ − 1 의 분해체의 원시원)와 4 (g)(x⁸ − 1 의 갈루아 군)와 같은 대상이다. 반례 '$\\omega_3 \\notin \\iota(\\mathbb{Q})$일 때 $X^3 - 2$의 근 하나를 붙인 체' 는 출처 Example 21.30(p.268, ℚ(∛3) 은 x³ − 3 의 분해체가 아니다)과 같은 발상이고, 23.5절 연습문제 5 (d)(x³ − 2)와 같은 다항식이며, 출처 21.3절(p.274)도 ∛2 를 기약 x³ − 2 의 근으로 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(5차 예의 값과 도함수의 근을 다시 계산, 경계 경우 n = 1·b = 0). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 다항식환과 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]], 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다. 대수적은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 뜻이고, $F(\alpha)$는 [[simple-algebraic-extension|단순 대수적 확대]]의 것이다. 분해체는 [[splitting-field|분해체]]의 것이고, 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. 자기동형과 $\operatorname{Aut}(E/F)$, 그 곱(합성)은 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 아벨군은 [[group|군]]의 뜻이다. 체 $\mathbb{C}$는 [[complex-field|복소수체]]의 것이고, 1 의 $n$제곱근 전체 $\mu_n$과 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이며, $F(R)$은 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 것이다. [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (iv)에 의해 환 $\mathbb{C}$에서의 거듭제곱 $z^k$($k \ge 0$)는 [[power-of-a-complex-number|복소수의 거듭제곱]]의 $z^k$와 같다.

아래에서 $F$는 $\mathbb{C}$의 부분체이고, $n$은 자연수이며, $\omega = \omega_n$이다.

1. (1 의 $n$제곱근을 붙인 체)
   - (i) $X^n - 1 \in F[X]$의 $\mathbb{C}$ 안의 근 전체의 집합은 $\mu_n = \{\omega^k : 0 \le k \le n - 1\}$이고, 원소가 $n$개이다. $\omega$는 $F$ 위에서 대수적이고, $F(\omega)$는 $F$ 위에서 $X^n - 1$의 분해체이다. 곧 $F(\omega) = F(\mu_n)$이다. $X^n - 1$의 $F$ 위의 모닉 기약 인수마다 $F(\omega)$에서 근이 서로 다르고, $\operatorname{Aut}(F(\omega)/F)$는 유한군이며 $|\operatorname{Aut}(F(\omega)/F)| = [F(\omega) : F]$이다.
   - (ii) $\sigma \in \operatorname{Aut}(F(\omega)/F)$이면 $\sigma(\omega) = \omega^a$인 정수 $a$($0 \le a \le n - 1$)가 있고, $0$ 이상인 모든 정수 $k$에서 $\sigma(\omega^k) = \omega^{ak}$이다. $\sigma, \tau \in \operatorname{Aut}(F(\omega)/F)$가 $\sigma(\omega) = \tau(\omega)$를 만족하면 $\sigma = \tau$이다.
   - (iii) $\operatorname{Aut}(F(\omega)/F)$는 아벨군이다.
2. ($\omega \in F$일 때 $X^n - b$) $\omega \in F$이고, $b \in F$, $b \ne 0$이며, $\gamma$가 $\gamma^n = b$인 복소수라 하자.
   - (i) $X^n - b \in F[X]$의 $\mathbb{C}$ 안의 근 전체의 집합은 $\{\gamma \omega^k : 0 \le k \le n - 1\}$이고, 원소가 $n$개이다. $\gamma$는 $F$ 위에서 대수적이고, $F(\gamma)$는 $F$ 위에서 $X^n - b$의 분해체이다. $X^n - b$의 $F$ 위의 모닉 기약 인수마다 $F(\gamma)$에서 근이 서로 다르고, $\operatorname{Aut}(F(\gamma)/F)$는 유한군이며 $|\operatorname{Aut}(F(\gamma)/F)| = [F(\gamma) : F]$이다.
   - (ii) $\sigma \in \operatorname{Aut}(F(\gamma)/F)$이면 $\sigma(\omega) = \omega$이고, $\sigma(\gamma) = \gamma\omega^a$인 정수 $a$($0 \le a \le n - 1$)가 있다. $\sigma, \tau \in \operatorname{Aut}(F(\gamma)/F)$가 $\sigma(\gamma) = \tau(\gamma)$를 만족하면 $\sigma = \tau$이다.
   - (iii) $\operatorname{Aut}(F(\gamma)/F)$는 아벨군이다.
3. (자명한 경우)
   - (i) $n = 1$이면 $\omega = 1$이고 $F(\omega) = F$이며 $\operatorname{Aut}(F(\omega)/F) = \{i_F\}$이다.
   - (ii) $X^n - 0 = X^n$의 $\mathbb{C}$ 안의 근 전체의 집합은 $\{0\}$이고, $F$ 자신이 $F$ 위에서 $X^n$의 분해체이며 $\operatorname{Aut}(F/F) = \{i_F\}$이다. 또 복소수 $\gamma$가 $\gamma^n = 0$이면 $\gamma = 0$이고 $F(\gamma) = F$이다.
   - (iii) (2)의 설정에서 $\gamma \in F$이면 $F(\gamma) = F$이고 $\operatorname{Aut}(F(\gamma)/F) = \{i_F\}$이다.
:::

:::english
Fields are meant as in "Units and Fields"; subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. The polynomial ring and the indeterminate $X$ are as in "Polynomial Ring"; values and roots are as in "Evaluation Homomorphism", and powers $a^k$ as in "Finite Products and Powers in a Commutative Ring". Algebraic is meant as in "Algebraic Elements and Minimal Polynomials", and $F(\alpha)$ is as in "Simple Algebraic Extension". Splitting fields are as in "Splitting Field", and monic irreducible factors and "has distinct roots" are as in "Polynomials with Distinct Roots". Automorphisms, $\operatorname{Aut}(E/F)$ and its product (composition) are as in "The Automorphism Group of an Extension", and abelian groups are meant as in "Group". The field $\mathbb{C}$ is as in "The Field of Complex Numbers", the set $\mu_n$ of $n$th roots of unity and $\omega_n$ are as in "Roots of Unity", and $F(R)$ is that of (3) in "Splitting Fields inside the Complex Numbers". By (5)(iv) of "Polynomials and Polynomial Functions", the power $z^k$ ($k \ge 0$) in the ring $\mathbb{C}$ equals the power $z^k$ of "Powers of a Complex Number".

Below, $F$ is a subfield of $\mathbb{C}$, $n$ is a natural number, and $\omega = \omega_n$.

1. (The field obtained by adjoining the $n$th roots of unity)
   - (i) The set of all roots in $\mathbb{C}$ of $X^n - 1 \in F[X]$ is $\mu_n = \{\omega^k : 0 \le k \le n - 1\}$, and it has $n$ elements. $\omega$ is algebraic over $F$, and $F(\omega)$ is a splitting field of $X^n - 1$ over $F$; that is, $F(\omega) = F(\mu_n)$. Every monic irreducible factor of $X^n - 1$ over $F$ has distinct roots in $F(\omega)$, and $\operatorname{Aut}(F(\omega)/F)$ is a finite group with $|\operatorname{Aut}(F(\omega)/F)| = [F(\omega) : F]$.
   - (ii) If $\sigma \in \operatorname{Aut}(F(\omega)/F)$, then there is an integer $a$ ($0 \le a \le n - 1$) with $\sigma(\omega) = \omega^a$, and $\sigma(\omega^k) = \omega^{ak}$ for every integer $k \ge 0$. If $\sigma, \tau \in \operatorname{Aut}(F(\omega)/F)$ satisfy $\sigma(\omega) = \tau(\omega)$, then $\sigma = \tau$.
   - (iii) $\operatorname{Aut}(F(\omega)/F)$ is an abelian group.
2. ($X^n - b$ when $\omega \in F$) Suppose $\omega \in F$, $b \in F$, $b \ne 0$, and let $\gamma$ be a complex number with $\gamma^n = b$.
   - (i) The set of all roots in $\mathbb{C}$ of $X^n - b \in F[X]$ is $\{\gamma \omega^k : 0 \le k \le n - 1\}$, and it has $n$ elements. $\gamma$ is algebraic over $F$, and $F(\gamma)$ is a splitting field of $X^n - b$ over $F$. Every monic irreducible factor of $X^n - b$ over $F$ has distinct roots in $F(\gamma)$, and $\operatorname{Aut}(F(\gamma)/F)$ is a finite group with $|\operatorname{Aut}(F(\gamma)/F)| = [F(\gamma) : F]$.
   - (ii) If $\sigma \in \operatorname{Aut}(F(\gamma)/F)$, then $\sigma(\omega) = \omega$ and there is an integer $a$ ($0 \le a \le n - 1$) with $\sigma(\gamma) = \gamma\omega^a$. If $\sigma, \tau \in \operatorname{Aut}(F(\gamma)/F)$ satisfy $\sigma(\gamma) = \tau(\gamma)$, then $\sigma = \tau$.
   - (iii) $\operatorname{Aut}(F(\gamma)/F)$ is an abelian group.
3. (Trivial cases)
   - (i) If $n = 1$, then $\omega = 1$, $F(\omega) = F$ and $\operatorname{Aut}(F(\omega)/F) = \{i_F\}$.
   - (ii) The set of all roots in $\mathbb{C}$ of $X^n - 0 = X^n$ is $\{0\}$, $F$ itself is a splitting field of $X^n$ over $F$, and $\operatorname{Aut}(F/F) = \{i_F\}$. Moreover, if a complex number $\gamma$ satisfies $\gamma^n = 0$, then $\gamma = 0$ and $F(\gamma) = F$.
   - (iii) In the setting of (2), if $\gamma \in F$, then $F(\gamma) = F$ and $\operatorname{Aut}(F(\gamma)/F) = \{i_F\}$.
:::

## 직관

$\omega$는 $n$번 곱하면 $1$이 되는 복소수 가운데 하나이고, $1$의 $n$제곱근은 모두 $\omega$의 거듭제곱입니다. 그래서 $F$에 $\omega$ 하나만 붙이면 $X^n - 1$의 근이 모두 들어옵니다. $F$를 고정하는 자기동형은 근을 근으로 보내므로 $\omega$를 어떤 $\omega^a$로 보내고, 그러면 $\omega^k$는 $\omega^{ak}$로 갑니다. 곧 자기동형마다 "지수에 $a$를 곱한다"는 규칙이 하나씩 붙고, 두 자기동형을 잇달아 쓰면 지수에 $a$와 $c$를 차례로 곱하는 것이 됩니다. 정수의 곱은 순서에 상관없으므로 자기동형들도 서로 교환됩니다.

$\omega$가 이미 $F$에 있으면 $X^n - b$($b \ne 0$)의 근은 근 하나 $\gamma$에 $\omega$의 거듭제곱을 곱한 것들이므로, 다시 $\gamma$ 하나만 붙이면 됩니다. 이번에는 자기동형이 $\gamma$를 $\gamma\omega^a$로 보내므로 지수에 $a$를 더하는 규칙이 붙고, 덧셈도 순서에 상관없으므로 갈루아 군은 아벨군입니다. 시계 바늘에 비유하면, 첫째는 바늘이 가리키는 눈금에 수를 곱하는 것이고 둘째는 눈금을 몇 칸 돌리는 것입니다. 비유의 "눈금"은 지수 $k$이고 "몇 칸"은 $a$입니다.

$\omega \in F$라는 가정은 $\sigma(\omega) = \omega$를 주어 덧셈 규칙이 성립하게 하고, 또 $F(\gamma)$가 다른 근 $\gamma\omega^k$를 모두 포함하게 합니다. 아래 반례처럼 $\omega$가 $F$에 없으면 $F(\gamma)$는 분해체가 아닐 수 있습니다. $b \ne 0$이라는 가정은 근이 $n$개라는 것에 쓰입니다. $b = 0$이면 근은 $0$ 하나이고 이 경우는 (3)에 따로 두었습니다.

## 증명

:::idea
근의 집합의 꼴로 붙인 체가 분해체임을 보이고, 자기동형이 근을 근으로 보낸다는 것으로 $\sigma(\omega) = \omega^a$, $\sigma(\gamma) = \gamma\omega^a$를 얻는다. 두 합성 $\sigma\tau$와 $\tau\sigma$가 생성원 하나에서 같은 값을 가지므로 같다.
:::

:::hint
$\sigma\tau(\omega)$와 $\tau\sigma(\omega)$를 각각 계산해 보세요. 환 준동형은 거듭제곱을 보존합니다.
:::

:::proof
**쓰는 사실.** 거듭제곱은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이고, 그 (6)의 (ii), (iii)에 의해 $0$ 이상인 정수 $j$, $k$에서 $z^{j+k} = z^j z^k$, $(z^j)^k = z^{jk}$이며, 그 (9)에 의해 $1$을 $1$로 보내는 환 준동형은 거듭제곱을 보존한다. 체의 자기동형은 환 동형사상이므로 [[automorphism-group-of-extension|확대의 자기동형군]]의 (2)에 의해 $1$을 $1$로 보낸다. 체 $E$의 부분체 $K$ 위의 다항식에 $E$의 원소를 대입한 값은 [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 $\mathbb{C}$에서 계산해도 같다.

**(1)의 (i).** 대입 준동형의 (1)에 의해 복소수 $z$에서 $(X^n - 1)(z) = z^n - 1$이므로, $\mathbb{C}$ 안의 근 전체는 $\{z \in \mathbb{C} : z^n = 1\} = \mu_n$이다. [[roots-of-unity|1 의 n제곱근]]의 (1)과 (2)에 의해 $\mu_n = \{\exp(2\pi i k/n) : 0 \le k \le n - 1\} = \{\omega^k : 0 \le k \le n - 1\}$이고 원소가 $n$개이다. $X^n - 1$은 영다항식이 아니고 차수가 $n \ge 1$이므로([[degree-of-a-polynomial|다항식의 차수]]의 (2), (3)) [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)을 쓸 수 있다. $\omega \in \mu_n$이므로 $\omega$는 $F$ 위에서 대수적이고([[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (1)), [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F(\omega)$는 $F$와 $\omega$를 포함하는 가장 작은 부분체이다. $F(\omega)$는 곱에 닫혀 있으므로 모든 $\omega^k$를 포함하고, 따라서 $F$와 $\mu_n$을 포함한다. ℂ 안의 분해체의 (3)의 (ii)에 의해 $F(\mu_n) \subseteq F(\omega)$이다. 거꾸로 $F(\mu_n)$은 $F$와 $\omega$를 포함하므로 $F(\omega) \subseteq F(\mu_n)$이다. 따라서 $F(\omega) = F(\mu_n)$이고, ℂ 안의 분해체의 (3)의 (iii), (iv)에 의해 $F(\omega)$는 $F$ 위에서 $X^n - 1$의 분해체이며 모닉 기약 인수마다 근이 서로 다르다. [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)에 의해 $\operatorname{Aut}(F(\omega)/F)$는 유한군이고 위수가 $[F(\omega) : F]$이다.

**(1)의 (ii).** [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)를 $E = F(\omega)$, $f = X^n - 1$에 쓰면 $\sigma$는 $F(\omega)$ 안의 $f$의 근 전체를 그 자신으로 보낸다. ℂ 안의 분해체의 (3)의 (iii)에 의해 그 집합은 $\mu_n$이므로 $\sigma(\omega) \in \mu_n$이고, (i)에 의해 $\sigma(\omega) = \omega^a$인 정수 $a$($0 \le a \le n - 1$)가 있다. 쓰는 사실에 의해 $\sigma(\omega^k) = \sigma(\omega)^k = (\omega^a)^k = \omega^{ak}$이다. $\sigma(\omega) = \tau(\omega)$이면 $\sigma$와 $\tau$는 $F$의 원소와 $\omega$에서 같은 값을 가지므로, 확대의 자기동형군의 (4)의 (iii)을 $E = E' = F(\omega)$와 열 $\omega$에 쓰면 $F(\omega)$의 모든 원소에서 같은 값을 갖고 $\sigma = \tau$이다.

**(1)의 (iii).** $\sigma, \tau \in \operatorname{Aut}(F(\omega)/F)$이고 (ii)로 $\sigma(\omega) = \omega^a$, $\tau(\omega) = \omega^c$라 하자. 확대의 자기동형군의 (1)에 의해 곱은 합성이고 $\sigma\tau$, $\tau\sigma$도 $\operatorname{Aut}(F(\omega)/F)$의 원소이다. (ii)에 의해
$$
\begin{aligned}
\sigma\tau(\omega) &= \sigma(\omega^c) = \omega^{ac}, \\
\tau\sigma(\omega) &= \tau(\omega^a) = \omega^{ca}
\end{aligned}
$$
이고 $ac = ca$이므로 두 값이 같다. (ii)의 마지막 문장에 의해 $\sigma\tau = \tau\sigma$이다.

**(2)의 (i).** 대입 준동형의 (1)에 의해 $\mathbb{C}$ 안의 근 전체는 $\{z \in \mathbb{C} : z^n = b\}$이다. $b \ne 0$이고 $\gamma^n = b$이므로 [[nth-roots-of-complex-numbers|복소수의 n제곱근]]의 (5)와 (1)에 의해 이 집합은 $\{\gamma u : u \in \mu_n\}$이고 원소가 $n$개이며, (1)의 (i)에 의해 $\{\gamma\omega^k : 0 \le k \le n - 1\}$이다. 이 집합을 $R$이라 하자. $X^n - b$는 차수가 $n \ge 1$이므로 ℂ 안의 분해체의 (3)을 쓸 수 있다. $\gamma = \gamma\omega^0 \in R$이므로 $\gamma$는 $F$ 위에서 대수적이고, $F(\gamma)$는 $F$, $\gamma$, $\omega$를 포함하며 곱에 닫혀 있으므로 $R$을 포함한다. (1)의 (i)과 같은 논법으로 $F(\gamma) = F(R)$이고, ℂ 안의 분해체의 (3)의 (iii), (iv)와 분해체의 갈루아 군의 위수의 (1)에 의해 나머지가 성립한다.

**(2)의 (ii).** $\omega \in F$이므로 $\sigma(\omega) = \omega$이다. 자기동형과 근의 치환의 (1)의 (ii)와 ℂ 안의 분해체의 (3)의 (iii)에 의해 $\sigma(\gamma) \in R$이므로 $\sigma(\gamma) = \gamma\omega^a$인 $a$가 있다. 마지막 문장은 (1)의 (ii)와 같이 확대의 자기동형군의 (4)의 (iii)을 열 $\gamma$에 쓴 것이다.

**(2)의 (iii).** $\sigma(\gamma) = \gamma\omega^a$, $\tau(\gamma) = \gamma\omega^c$라 하자. $\sigma$와 $\tau$는 $\omega$를 고정하고 곱과 거듭제곱을 보존하므로
$$
\begin{aligned}
\sigma\tau(\gamma) &= \sigma(\gamma)\,\sigma(\omega)^c = \gamma\omega^a\omega^c, \\
\tau\sigma(\gamma) &= \tau(\gamma)\,\tau(\omega)^a = \gamma\omega^c\omega^a
\end{aligned}
$$
이다. 쓰는 사실에 의해 $\omega^a\omega^c = \omega^{a+c} = \omega^c\omega^a$이므로 두 값이 같고, (ii)의 마지막 문장에 의해 $\sigma\tau = \tau\sigma$이다.

**(3).** (i) 1 의 n제곱근의 (5)에 의해 $\mu_1 = \{1\}$이고 $\omega_1 \in \mu_1$이므로 $\omega = 1 \in F$이다. 단순 대수적 확대의 (4)에 의해 $F(\omega) = F$이고, 확대의 자기동형군의 (1)의 (ii)에 의해 $\operatorname{Aut}(F/F) = \{i_F\}$이다. (ii) [[field|가역원과 체]]의 (3)에 의해 체 $\mathbb{C}$는 [[integral-domain|정역]]이므로, $\gamma^n = 0$이면 가환환의 유한 곱의 (7)에 의해 $\gamma = 0$이다. 거꾸로 $0^n = 0$(같은 (6)의 (v))이므로 $X^n$의 $\mathbb{C}$ 안의 근 전체는 $\{0\}$이다. $\{0\} \subseteq F$이므로 ℂ 안의 분해체의 (3)의 (ii)에 의해 $F(\{0\}) = F$이고, 그 (3)의 (iii)에 의해 $F$는 $F$ 위에서 $X^n$의 분해체이다. $0 \in F$이므로 단순 대수적 확대의 (4)에 의해 $F(0) = F$이다. (iii) 단순 대수적 확대의 (4)와 확대의 자기동형군의 (1)의 (ii)이다.
:::

## 예시와 반례

:::example[$\iota(\mathbb{Q})$ 위에서 $n = 4$일 때의 두 자기동형]
$F = \iota(\mathbb{Q})$, $n = 4$라 합시다. [[roots-of-unity|1 의 n제곱근]]의 (5)에 의해 $\mu_4 = \{1, i, -1, -i\}$이고, 그 (2)에 의해 $\operatorname{ord}(\omega_4) = 4$인데 $1^2 = (-1)^2 = 1$이므로 $\omega_4$는 $1$도 $-1$도 아닙니다. 곧 $\omega_4 = i$이거나 $\omega_4 = -i$이고, 어느 쪽이든 $F(\omega_4) = F(i)$입니다. $X^2 + 1$의 $\mathbb{C}$ 안의 근은 $\pm i$이고 실수인 복소수가 아니며, [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (1)의 (ii)에 의해 $F$의 원소는 실수인 복소수이므로 $X^2 + 1$은 $F$ 안에 근이 없습니다. [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $F$ 위에서 기약이고, 모닉이므로 $i$의 최소다항식이며(최소다항식의 (5)) 단순 대수적 확대의 (3)의 (iii)에 의해 $[F(i) : F] = 2$입니다. 따라서 (1)의 (i)에 의해 자기동형은 두 개입니다. 항등함수는 $a = 1$이고, ℂ 안의 분해체의 (4)의 $F(i)$로 제한한 켤레는 $\omega_4$를 $\overline{\omega_4} = \omega_4^3$으로 보내므로 $a = 3$입니다($i^3 = -i$, $(-i)^3 = i$). 두 자기동형은 서로 교환되고, 지수의 규칙으로는 $3 \cdot 3 = 9$이고 $\omega_4^9 = \omega_4$이므로 켤레를 두 번 쓰면 항등함수가 됩니다.
:::

:::counterexample[$\omega_3 \notin \iota(\mathbb{Q})$일 때 $X^3 - 2$의 근 하나를 붙인 체]
$F = \iota(\mathbb{Q})$, $n = 3$, $b = 2$, $\gamma = \iota(\sqrt[3]{2})$라 합시다([[nth-root|n제곱근]]의 실수 $\sqrt[3]{2}$). [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)에 의해 $\gamma^3 = 2$입니다. 1 의 n제곱근의 (2)에 의해 $\operatorname{ord}(\omega_3) = 3$이므로 $\omega_3 \ne 1$입니다. $\omega_3$이 실수인 복소수라면 실수 $x$로 $\omega_3 = \iota(x)$이고, 복소수의 거듭제곱의 (5)에 의해 $\iota(x^3) = \omega_3^3 = 1 = \iota(1)$이므로 $x^3 = 1$입니다. $x \ge 0$이면 n제곱근의 (1)과 (2)에 의해 $x = \sqrt[3]{1} = 1$이 되어 $\omega_3 = 1$에 어긋나고, $x < 0$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (i)에 의해 $0 < xx$이고 그 (4)의 (iv)에 의해 $x^3 = (xx)x < 0$인데, 그 (5)의 (ii)에 의해 $0 < 1$이므로 $x^3 = 1$에 어긋납니다([[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $x^3 = (xx)x$). 따라서 $\omega_3$은 실수인 복소수가 아니고 $F$에 없으며, 근 $\gamma\omega_3$도 실수인 복소수가 아닙니다($\gamma\omega_3 = \iota(y)$이면 $\omega_3 = \iota(y / \sqrt[3]{2})$). 그런데 $F(\gamma)$는 $F$와 $\gamma$를 포함하는 부분체 $\iota(\mathbb{R})$에 포함되므로 $\gamma\omega_3 \notin F(\gamma)$이고, $F(\gamma)$는 $F$ 위에서 $X^3 - 2$의 분해체가 아닙니다. (2)의 가정 $\omega \in F$가 빠지면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$F = \iota(\mathbb{Q})(i)$ 위에서 $X^4 + 4$의 분해체와 $F$ 위의 자기동형군은 무엇인가?]
$\omega_4 \in \{i, -i\} \subseteq F$이고, $\gamma = 1 + i$이면 $\gamma^2 = 2i$, $\gamma^4 = (2i)^2 = -4$이므로 $\gamma^4 = -4 \ne 0$입니다. (2)의 (i)에 의해 근은 $\gamma\omega_4^k$($0 \le k \le 3$), 곧 $\pm 1 \pm i$이고 분해체는 $F(\gamma)$입니다. $\gamma \in F$이므로 (3)의 (iii)에 의해 분해체는 $F$ 자신이고 자기동형군은 $\{i_F\}$입니다.
:::

:::check[$\omega \in F$이고 $b = 0$이면 $X^n - b$의 $F$ 위의 분해체와 자기동형군은 무엇인가?]
(3)의 (ii)에 의해 근은 $0$ 하나이고, $F$ 자신이 분해체이며 자기동형군은 $\{i_F\}$입니다. (2)는 $b \ne 0$을 가정하므로 이 경우에 쓰지 않습니다. $b = 0$이면 근이 $n$개가 아니어서 "근 하나에 $\omega$의 거듭제곱을 곱한다"는 꼴이 맞지 않습니다($n \ge 2$일 때).
:::
