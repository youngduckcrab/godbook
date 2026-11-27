---
title: ℂ 안의 분해체
title_en: Splitting Fields inside the Complex Numbers
aliases: [복소수체 안의 분해체, 복소수체의 부분체, 유리수를 옮긴 체, 켤레의 제한, splitting field in C, subfield of the complex numbers]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "복소수체의 모든 부분체 F 는 유리수를 옮긴 체 ι(ℚ) 를 포함하고 표수가 0 이다. F 위의 차수가 1 이상인 다항식 f 의 ℂ 안의 근 전체를 R 이라 하면, F 와 R 을 포함하는 가장 작은 부분체 F(R) 은 F 위에서 f 의 분해체이고, F 를 고정하는 환 동형사상 F(R) → F(R) 은 정확히 [F(R) : F] 개이며, F 를 고정하는 환 준동형은 R 과 F(R) 을 보존한다. F 의 원소가 모두 실수인 복소수이면 켤레의 제한이 그런 동형사상의 하나이다."
requires: [function, injective-surjective-bijective, adding-or-removing-an-element, finite-set, number-of-elements-is-unique, divisibility, rational-and-irrational-numbers, real-number-arithmetic, square-root-exists, power-in-a-group, ring, subring, ring-homomorphism, field, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, irreducible-polynomial, rational-numbers-field, eisenstein-criterion, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, splitting-field, separable-polynomial, extension-of-isomorphism-to-splitting-fields, complex-number, complex-field, complex-conjugate, polynomials-and-polynomial-functions]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "18.1절 Fields of Fractions, Corollary 18.6 (p.228); 18.4절 Exercises, 연습문제 6, 10 (p.235–236); 21.2절 Splitting Fields, 분해체의 정의와 Example 21.29 (p.268); 21.1절 Extension Fields, Example 21.14 (p.264); 23.1절 Field Automorphisms, Example 23.3 (p.294); 23.3절 Applications, 첫 문단 (p.303), Example 23.27 (p.303), Example 23.33 (p.306)"
    checked: original
    note: "(1)은 출처 18.1절 Corollary 18.6(p.228, 'Let F be a field of characteristic zero. Then F contains a subfield isomorphic to Q')과 연습문제 6(p.235, 같은 문장을 증명하라는 문제)을 ℂ 의 부분체에 대해 진술한 것이다. 출처는 증명을 연습문제로 남긴다. 이 항목은 표수가 0 이라는 것을 가정하지 않고 ι 가 단사라는 것에서 얻고, 부분체 자체를 ι(ℚ) 로 적는다. 연습문제 10(p.235–236)은 소체(진부분체가 없는 체)를 정의하고 표수 0 인 체의 소체가 ℚ 와 동형임을 보이라고 한다. (1)의 (ii)의 'ι(ℚ) 는 ℂ 의 모든 부분체에 포함된다' 와 같은 대상이다. 23.3절 첫 문단(p.303)은 'Throughout this section we shall assume that all fields have characteristic zero' 라고 적는다. 이 항목의 (1)의 (i)이 ℂ 의 부분체에서 이 가정이 늘 성립함을 보인다. (3)은 출처 21.2절(p.268)의 분해체를 ℂ 안에서 근을 붙여 얻는 것이고, 출처가 ℚ 위의 다항식의 분해체를 ℚ(√2, i)(Example 21.29, p.268), ℚ(ω)(Example 23.27, p.303)처럼 복소수로 이루어진 체로 적는 것을 진술로 올린 것이다. (4)는 출처 Example 23.3(p.294, 켤레를 취하는 것이 ℂ 의 자기동형이고 실수를 고정한다)과 Example 23.33(p.306, 켤레가 실근을 고정하고 두 허근을 맞바꾸므로 갈루아 군이 호환을 포함한다)이 쓰는 사실이다. 예시 '$\\iota(\\mathbb{Q})$ 위에서 $X^3 - 1$의 분해체' 는 Example 23.27(p.303, xⁿ − 1 의 근은 1, ω, …, ω^{n−1} 이고 ℚ 위의 분해체는 ℚ(ω))의 n = 3 인 경우와 같은 대상이다. 확인 질문 '$\\iota(\\mathbb{R})$ 위에서 $X^2 + 1$의 $\\mathbb{C}$ 안의 분해체는 무엇이고, $\\iota(\\mathbb{R})$의 원소를 고정하는 환 동형사상은 몇 개인가?' 는 Example 21.14(p.264, ℝ[x]/⟨x² + 1⟩ 은 x² + 1 의 근을 갖는 ℝ 의 확대체이고 ℂ 와 동형)와 Example 23.3(p.294)과 같은 대상이다. 확인 질문 '$F = \\iota(\\mathbb{Q})$이고 $f = (X^2 + 1)(X^2 - 3)$이면 $F$의 원소를 고정하는 환 동형사상 $F(R) \\to F(R)$은 몇 개인가?' 의 분해체 ℚ(√3, i) 는 Example 21.29(p.268, (x² − 2)(x² + 4) 의 분해체 ℚ(√2, i))와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(반례 1 + √2 의 거듭제곱, 경계 경우 r = 0·일차 다항식). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원과 역원은 [[field|가역원과 체]]의 것이고, $0$, $1$, $-a$, $a - b$, 곱 $ab$, 정수배 $n \cdot a$는 [[ring|환]]의 표기이다. 부분체는 [[subfield|부분체]]의 뜻이고, 확대체, 유한 확대, 차수 $[E : F]$는 [[extension-field|확대체]]의 것이며, 환 준동형과 환 동형사상, 상 $\varphi(R)$는 [[ring-homomorphism|환 준동형]]의 것이고, 표수 $\operatorname{char} F$는 [[characteristic-of-a-ring|환의 표수]]의 것이다. 다항식환 $F[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값 $f(r)$, 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이고, 원소 하나를 붙인 체 $F(\alpha)$는 [[simple-algebraic-extension|단순 대수적 확대]], 여러 원소를 붙인 체 $F(\alpha_1, \dots, \alpha_n)$은 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 것이다. "분해된다", 일차식 분해, 분해체는 [[splitting-field|분해체]]의 것이고, 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. 유리수체 $\mathbb{Q}$는 [[rational-numbers-field|유리수체]]의 것이다. 체 $\mathbb{C}$, 함수 $\iota : \mathbb{R} \to \mathbb{C}$, 실수인 복소수와 실수를 복소수 자리에 쓰는 약속은 [[complex-field|복소수체]]의 것이고, 켤레 $\overline{z}$와 켤레를 취하는 함수는 [[complex-conjugate|켤레복소수]]의 것이다. $F$가 $\mathbb{C}$의 부분체이면 부분체의 (3)의 (iv)에 의해 $F[X] \subseteq \mathbb{C}[X]$이고, $f \in F[X]$의 $\mathbb{C}$ 안의 근은 $f$를 $\mathbb{C}[X]$의 원소로 보고 정한다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

1. (유리수를 옮긴 체)
   - (i) $F$가 $\mathbb{C}$의 부분체이면, 모든 정수 $n$에서 환 $F$에서의 정수배 $n \cdot 1$은 환 $\mathbb{C}$에서의 $n \cdot 1$과 같고 그 값은 $\iota(n)$이다. 따라서 $\iota(n) \in F$이다. 또 모든 유리수 $x$에서 $\iota(x) \in F$이다. 곧 $\iota(\mathbb{Q}) \subseteq F$이다. 또 $\operatorname{char} F = 0$이다.
   - (ii) $\iota(\mathbb{R})$와 $\iota(\mathbb{Q})$는 $\mathbb{C}$의 부분체이고 $\iota(\mathbb{Q}) \subseteq \iota(\mathbb{R})$이다. 따라서 $\iota(\mathbb{Q})$의 원소는 모두 실수인 복소수이다. $\iota$를 $\mathbb{Q}$로 제한하고 공역을 $\iota(\mathbb{Q})$로 둔 함수, 곧 유리수 $x$에서의 값이 $\iota(x)$인 함수를 $\iota_{\mathbb{Q}} : \mathbb{Q} \to \iota(\mathbb{Q})$로 쓰면, $\iota_{\mathbb{Q}}$는 환 동형사상이다. (i)에 의해 $\iota(\mathbb{Q})$는 $\mathbb{C}$의 모든 부분체에 포함된다.
2. (유리수 계수의 다항식을 옮기기) $g \in \mathbb{Q}[X]$라 하자. 유리수체의 (4)에 의해 $g \in \mathbb{R}[X]$이고, $\iota$는 $1$을 $1$로 보내는 환 준동형이므로 $g$의 계수를 $\iota$로 옮긴 $g^{\iota} \in \mathbb{C}[X]$가 있다.
   - (i) $g^{\iota} = g^{\iota_{\mathbb{Q}}}$이다. 곧 $g$를 $\mathbb{R}[X]$의 원소로 보고 $\iota$로 옮긴 다항식은 $g$를 $\iota_{\mathbb{Q}}$의 계수 사상으로 옮긴 $\iota(\mathbb{Q})[X]$의 원소를 $\mathbb{C}[X]$의 원소로 본 것과 같다. 따라서 $g^{\iota} \in \iota(\mathbb{Q})[X]$이고, $0$ 이상인 모든 정수 $n$에서 $\operatorname{coef}_n(g^{\iota}) = \iota(\operatorname{coef}_n(g))$는 실수인 복소수이다.
   - (ii) 각 $g$에 $g^{\iota}$를 대응시키는 함수 $\mathbb{Q}[X] \to \iota(\mathbb{Q})[X]$는 환 동형사상이다. $g \ne 0$인 것은 정확히 $g^{\iota} \ne 0$일 때이고, 이때 $\deg g^{\iota} = \deg g$이며 $g^{\iota}$의 최고차계수는 $g$의 최고차계수를 $\iota$로 옮긴 것이다. $g$가 모닉인 것은 정확히 $g^{\iota}$가 모닉일 때이다. $h \in \mathbb{Q}[X]$에 대하여 $\mathbb{Q}[X]$에서 $h \mid g$인 것은 정확히 $\iota(\mathbb{Q})[X]$에서 $h^{\iota} \mid g^{\iota}$일 때이다. $g$가 $\mathbb{Q}$ 위에서 기약인 것은 정확히 $g^{\iota}$가 $\iota(\mathbb{Q})$ 위에서 기약일 때이다.
   - (iii) 실수 $x$가 ($g$를 $\mathbb{R}[X]$의 원소로 보아) $g$의 근인 것은 정확히 $\iota(x)$가 $g^{\iota}$의 근일 때이다. $g^{\iota}$의 $\mathbb{C}$ 안의 근 가운데 실수인 복소수는 정확히 $g$의 실근 $x$를 옮긴 $\iota(x)$들이다.
3. ($\mathbb{C}$ 안의 분해체) $F$가 $\mathbb{C}$의 부분체이고, $f \in F[X]$가 영다항식이 아니며 $d = \deg f \ge 1$이고 $a$가 $f$의 최고차계수라 하자. $f$의 $\mathbb{C}$ 안의 근 전체의 집합을 $R$로 쓴다. 곧 $R = \{z \in \mathbb{C} : f(z) = 0\}$이다.
   - (i) (분해) $\mathbb{C}$의 원소의 길이 $d$인 열 $c_1, \dots, c_d$가 있어 $\mathbb{C}[X]$에서 $f = a(X - c_1) \cdots (X - c_d)$이다. 곧 $f$는 $\mathbb{C}$에서 분해된다. $f$의 $\mathbb{C}$에서의 모든 일차식 분해는 이 꼴이고, 그 어느 것에서도 $R = \{c_1, \dots, c_d\}$이다. $R$은 공집합이 아닌 유한집합이고 $|R| \le d$이다.
   - (ii) ($F(R)$) $\mathbb{C}$의 부분체 $L$로서, $F \subseteq L$이고 $R \subseteq L$이며, $F \subseteq K$이고 $R \subseteq K$인 $\mathbb{C}$의 모든 부분체 $K$에서 $L \subseteq K$인 것이 정확히 하나 있다. 이것을 $F(R)$로 쓰고 **$F$에 $f$의 근을 모두 붙인 체**라 한다. (i)의 모든 일차식 분해에서 $c_1, \dots, c_d$는 $F$ 위에서 대수적이고 $F(R) = F(c_1, \dots, c_d)$이다. $M$이 $F(R) \subseteq M$인 $\mathbb{C}$의 부분체이면, $F(R)$은 $M$의 부분체이고, $M$의 부분체 가운데 $F$와 $R$을 포함하는 가장 작은 것이며, $M$ 안에서 붙인 체 $F(c_1, \dots, c_d)$와 같다.
   - (iii) (분해체) $F(R)$은 $F$ 위에서 $f$의 분해체이고 $F$의 유한 확대이다. $F(R)$ 안의 $f$의 근 전체의 집합은 $R$이다.
   - (iv) (근이 서로 다르다) $f$의 $F$ 위의 모닉 기약 인수마다 $F(R)$에서 근이 서로 다르다. 특히 $f$가 $F$ 위에서 기약이면 $|R| = d$이다.
   - (v) ($F$를 고정하는 동형사상의 개수) $F$의 모든 원소를 고정하는 환 준동형 $F(R) \to F(R)$은 모두 전단사인 환 동형사상이고, 그런 것은 정확히 $[F(R) : F]$개이다.
   - (vi) (근과 $F(R)$의 보존) $M$이 $F(R) \subseteq M$인 $\mathbb{C}$의 부분체이고, $\tau : M \to \mathbb{C}$가 환 준동형이며 모든 $c \in F$에서 $\tau(c) = c$라 하자. 그러면 $\tau(R) = R$이고 $\tau(F(R)) = F(R)$이다. $z \in F(R)$에서의 값이 $\tau(z)$인 함수 $F(R) \to F(R)$은 $F$의 모든 원소를 고정하는 환 동형사상이고, $R$을 $R$ 위로 전단사로 보낸다.
   - (vii) (밑체를 키우기) $L$이 $F \subseteq L$인 $\mathbb{C}$의 부분체이면, $f \in L[X]$이고 $f$를 $L[X]$의 원소로 본 차수와 최고차계수는 $d$와 $a$이며, $f$의 $\mathbb{C}$ 안의 근 전체는 같은 $R$이다. (ii)를 $L$에 쓴 체 $L(R)$은 $L$ 위에서 $f$의 분해체이고 $F(R) \subseteq L(R)$이다. 또 $L \subseteq F(R)$이면 $L(R) = F(R)$이다.
4. (켤레) $F$가 $\mathbb{C}$의 부분체이고 $F$의 원소가 모두 실수인 복소수라 하자((1)의 (ii)에 의해 $\iota(\mathbb{Q})$와 $\iota(\mathbb{R})$가 그런 부분체이다). $f$, $d$, $R$이 (3)의 것이라 하자.
   - (i) 켤레를 취하는 함수는 $F$의 모든 원소를 고정한다. 따라서 (3)의 (vi)에 의해 $z \in R$이면 $\overline{z} \in R$이고, $z \in F(R)$이면 $\overline{z} \in F(R)$이다. $z \in F(R)$에서의 값이 $\overline{z}$인 함수 $F(R) \to F(R)$은 $F$의 모든 원소를 고정하는 환 동형사상이고, $R$을 $R$ 위로 전단사로 보낸다. 이 함수를 **$F(R)$로 제한한 켤레**라 한다.
   - (ii) $z \in R$에 대하여 $\overline{z} = z$인 것은 정확히 $z$가 실수인 복소수일 때이다. $F(R)$로 제한한 켤레가 항등함수인 것은 정확히 $R$의 원소가 모두 실수인 복소수일 때이다.
   - (iii) (실수가 아닌 근) $z \in R$이 실수인 복소수가 아니면, $\overline{z}$는 $R$의 원소이고 실수인 복소수가 아니며 $\overline{z} \ne z$이고, $F(R)$로 제한한 켤레는 $z$를 $\overline{z}$로, $\overline{z}$를 $z$로 보낸다. 따라서 $R$의 원소 가운데 실수인 복소수가 아닌 것이 정확히 두 개 $z$, $w$이면 $w = \overline{z}$이고, $F(R)$로 제한한 켤레는 $R$의 실수인 원소를 모두 고정하고 $z$와 $w$를 맞바꾼다.
:::

:::english
Fields, units and inverses are as in "Units and Fields", and $0$, $1$, $-a$, $a - b$, the product $ab$ and integer multiples $n \cdot a$ are the notation of "Ring". Subfields are meant as in "Subfield"; extension fields, finite extensions and the degree $[E : F]$ are as in "Extension Field"; ring homomorphisms, ring isomorphisms and images $\varphi(R)$ are as in "Ring Homomorphism"; and the characteristic $\operatorname{char} F$ is as in "Characteristic of a Ring". The polynomial ring $F[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility are as in "Polynomial Ring"; degree $\deg$, leading coefficient and monic are as in "Degree of a Polynomial"; the value $f(r)$, roots and the polynomial $f^{\varphi}$ with transported coefficients are as in "Evaluation Homomorphism". Irreducible is meant as in "Irreducible Polynomial"; the field $F(\alpha)$ obtained by adjoining one element is as in "Simple Algebraic Extension", and the field $F(\alpha_1, \dots, \alpha_n)$ obtained by adjoining several elements is that of (1) in "Finite Extensions Are Algebraic". "Splits", splitting into linear factors and splitting fields are as in "Splitting Field", and monic irreducible factors and "has distinct roots" are as in "Polynomials with Distinct Roots". The field of rational numbers $\mathbb{Q}$ is as in "The Field of Rational Numbers". The field $\mathbb{C}$, the function $\iota : \mathbb{R} \to \mathbb{C}$, real complex numbers and the convention of writing real numbers in places of complex numbers are as in "The Field of Complex Numbers", and the conjugate $\overline{z}$ and the conjugation function are as in "Complex Conjugate". If $F$ is a subfield of $\mathbb{C}$, then $F[X] \subseteq \mathbb{C}[X]$ by (3)(iv) of the subfield entry, and the roots in $\mathbb{C}$ of $f \in F[X]$ are taken with $f$ regarded as an element of $\mathbb{C}[X]$. Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

1. (The field of transported rational numbers)
   - (i) If $F$ is a subfield of $\mathbb{C}$, then for every integer $n$ the integer multiple $n \cdot 1$ in the ring $F$ equals $n \cdot 1$ in the ring $\mathbb{C}$, and its value is $\iota(n)$. Hence $\iota(n) \in F$. Moreover $\iota(x) \in F$ for every rational number $x$; that is, $\iota(\mathbb{Q}) \subseteq F$. Moreover $\operatorname{char} F = 0$.
   - (ii) $\iota(\mathbb{R})$ and $\iota(\mathbb{Q})$ are subfields of $\mathbb{C}$, and $\iota(\mathbb{Q}) \subseteq \iota(\mathbb{R})$. Hence every element of $\iota(\mathbb{Q})$ is a real complex number. Write $\iota_{\mathbb{Q}} : \mathbb{Q} \to \iota(\mathbb{Q})$ for the restriction of $\iota$ to $\mathbb{Q}$ with codomain $\iota(\mathbb{Q})$, that is, the function whose value at a rational number $x$ is $\iota(x)$; then $\iota_{\mathbb{Q}}$ is a ring isomorphism. By (i), $\iota(\mathbb{Q})$ is contained in every subfield of $\mathbb{C}$.
2. (Transporting polynomials with rational coefficients) Let $g \in \mathbb{Q}[X]$. By (4) of the entry on the field of rational numbers, $g \in \mathbb{R}[X]$, and since $\iota$ is a ring homomorphism sending $1$ to $1$, there is the polynomial $g^{\iota} \in \mathbb{C}[X]$ obtained by transporting the coefficients of $g$ by $\iota$.
   - (i) $g^{\iota} = g^{\iota_{\mathbb{Q}}}$. That is, the polynomial obtained by regarding $g$ as an element of $\mathbb{R}[X]$ and transporting by $\iota$ is the element of $\iota(\mathbb{Q})[X]$ obtained from $g$ by the coefficient map of $\iota_{\mathbb{Q}}$, regarded as an element of $\mathbb{C}[X]$. Hence $g^{\iota} \in \iota(\mathbb{Q})[X]$, and for every integer $n \ge 0$ the coefficient $\operatorname{coef}_n(g^{\iota}) = \iota(\operatorname{coef}_n(g))$ is a real complex number.
   - (ii) The function $\mathbb{Q}[X] \to \iota(\mathbb{Q})[X]$ sending each $g$ to $g^{\iota}$ is a ring isomorphism. We have $g \ne 0$ exactly when $g^{\iota} \ne 0$, and then $\deg g^{\iota} = \deg g$ and the leading coefficient of $g^{\iota}$ is the image under $\iota$ of the leading coefficient of $g$. $g$ is monic exactly when $g^{\iota}$ is monic. For $h \in \mathbb{Q}[X]$, $h \mid g$ in $\mathbb{Q}[X]$ exactly when $h^{\iota} \mid g^{\iota}$ in $\iota(\mathbb{Q})[X]$. $g$ is irreducible over $\mathbb{Q}$ exactly when $g^{\iota}$ is irreducible over $\iota(\mathbb{Q})$.
   - (iii) A real number $x$ is a root of $g$ (with $g$ regarded as an element of $\mathbb{R}[X]$) exactly when $\iota(x)$ is a root of $g^{\iota}$. The roots of $g^{\iota}$ in $\mathbb{C}$ that are real complex numbers are exactly the numbers $\iota(x)$ for the real roots $x$ of $g$.
3. (Splitting fields inside $\mathbb{C}$) Let $F$ be a subfield of $\mathbb{C}$, let $f \in F[X]$ be nonzero with $d = \deg f \ge 1$, and let $a$ be the leading coefficient of $f$. Write $R$ for the set of all roots of $f$ in $\mathbb{C}$; that is, $R = \{z \in \mathbb{C} : f(z) = 0\}$.
   - (i) (Splitting) There is a sequence $c_1, \dots, c_d$ of length $d$ of elements of $\mathbb{C}$ with $f = a(X - c_1) \cdots (X - c_d)$ in $\mathbb{C}[X]$; that is, $f$ splits in $\mathbb{C}$. Every splitting of $f$ into linear factors in $\mathbb{C}$ has this form, and for each of them $R = \{c_1, \dots, c_d\}$. $R$ is a nonempty finite set and $|R| \le d$.
   - (ii) ($F(R)$) There is exactly one subfield $L$ of $\mathbb{C}$ such that $F \subseteq L$, $R \subseteq L$, and $L \subseteq K$ for every subfield $K$ of $\mathbb{C}$ with $F \subseteq K$ and $R \subseteq K$. We write it $F(R)$ and call it **the field obtained by adjoining all roots of $f$ to $F$**. For every splitting into linear factors in (i), the elements $c_1, \dots, c_d$ are algebraic over $F$ and $F(R) = F(c_1, \dots, c_d)$. If $M$ is a subfield of $\mathbb{C}$ with $F(R) \subseteq M$, then $F(R)$ is a subfield of $M$, it is the smallest subfield of $M$ containing $F$ and $R$, and it equals the field $F(c_1, \dots, c_d)$ adjoined inside $M$.
   - (iii) (Splitting field) $F(R)$ is a splitting field of $f$ over $F$ and a finite extension of $F$. The set of all roots of $f$ in $F(R)$ is $R$.
   - (iv) (Distinct roots) Every monic irreducible factor of $f$ over $F$ has distinct roots in $F(R)$. In particular, if $f$ is irreducible over $F$, then $|R| = d$.
   - (v) (Number of isomorphisms fixing $F$) Every ring homomorphism $F(R) \to F(R)$ fixing all elements of $F$ is a bijective ring isomorphism, and there are exactly $[F(R) : F]$ of them.
   - (vi) (Preservation of the roots and of $F(R)$) Let $M$ be a subfield of $\mathbb{C}$ with $F(R) \subseteq M$, and let $\tau : M \to \mathbb{C}$ be a ring homomorphism with $\tau(c) = c$ for all $c \in F$. Then $\tau(R) = R$ and $\tau(F(R)) = F(R)$. The function $F(R) \to F(R)$ whose value at $z \in F(R)$ is $\tau(z)$ is a ring isomorphism fixing all elements of $F$, and it maps $R$ bijectively onto $R$.
   - (vii) (Enlarging the base field) If $L$ is a subfield of $\mathbb{C}$ with $F \subseteq L$, then $f \in L[X]$, the degree and leading coefficient of $f$ as an element of $L[X]$ are $d$ and $a$, and the set of all roots of $f$ in $\mathbb{C}$ is the same $R$. The field $L(R)$ obtained by applying (ii) to $L$ is a splitting field of $f$ over $L$, and $F(R) \subseteq L(R)$. Moreover, if $L \subseteq F(R)$, then $L(R) = F(R)$.
4. (Conjugation) Let $F$ be a subfield of $\mathbb{C}$ all of whose elements are real complex numbers (by (1)(ii), $\iota(\mathbb{Q})$ and $\iota(\mathbb{R})$ are such subfields), and let $f$, $d$, $R$ be as in (3).
   - (i) The conjugation function fixes every element of $F$. Hence, by (3)(vi), $\overline{z} \in R$ if $z \in R$, and $\overline{z} \in F(R)$ if $z \in F(R)$. The function $F(R) \to F(R)$ whose value at $z \in F(R)$ is $\overline{z}$ is a ring isomorphism fixing all elements of $F$, and it maps $R$ bijectively onto $R$. We call this function **the conjugation restricted to $F(R)$**.
   - (ii) For $z \in R$, $\overline{z} = z$ exactly when $z$ is a real complex number. The conjugation restricted to $F(R)$ is the identity function exactly when all elements of $R$ are real complex numbers.
   - (iii) (Non-real roots) If $z \in R$ is not a real complex number, then $\overline{z}$ is an element of $R$ that is not a real complex number, $\overline{z} \ne z$, and the conjugation restricted to $F(R)$ sends $z$ to $\overline{z}$ and $\overline{z}$ to $z$. Hence, if exactly two elements $z$, $w$ of $R$ are not real complex numbers, then $w = \overline{z}$, and the conjugation restricted to $F(R)$ fixes every real element of $R$ and interchanges $z$ and $w$.
:::

## 직관

[[splitting-field|분해체]]를 만드는 일반적인 방법은 크로네커 정리를 되풀이해 근을 가진 체를 새로 짓는 것입니다. 그런데 계수가 복소수인 영이 아닌 다항식은 이미 $\mathbb{C}$ 안에서 최고차계수와 일차식들의 곱으로 분해됩니다([[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (4)). 그래서 $\mathbb{C}$의 부분체 $F$ 위의 차수가 $1$ 이상인 다항식이면 새 체를 지을 필요가 없습니다. $\mathbb{C}$ 안에 이미 있는 근을 $F$에 붙이기만 하면 분해체가 됩니다((3)의 (iii)). 근이 모두 들어 있는 큰 창고($\mathbb{C}$)에서, $F$의 물건과 $f$의 근만 모아 셈이 닫히는 가장 작은 칸을 막는 것과 같습니다. 비유의 "칸"은 $\mathbb{C}$의 부분체이고, "가장 작은"은 (3)의 (ii)의 조건 "$F$와 $R$을 포함하는 모든 부분체에 들어 있다"입니다.

$\mathbb{C}$의 부분체는 모두 $1$을 포함하고 빼기와 나누기에 닫혀 있으므로, $1$에서 시작해 모든 정수와 유리수(를 $\iota$로 옮긴 것)를 포함합니다((1)). 그래서 표수는 $0$이고, [[separable-polynomial|근이 서로 다른 다항식]]의 표수 $0$ 판에 의해 기약 인수의 근은 서로 다릅니다((3)의 (iv)). 이 덕분에 $F$를 고정하는 동형사상 $F(R) \to F(R)$의 개수가 차수 $[F(R) : F]$와 같습니다((3)의 (v)). 근의 개수와 차수는 다를 수 있습니다. 아래 예시에서 근은 셋이고 차수는 $2$입니다.

$F$를 고정하는 환 준동형은 $f$의 계수를 바꾸지 않으므로 근을 근으로 보냅니다. 그래서 $F(R)$을 포함하는 더 큰 부분체에서 정의된 준동형도 $F(R)$을 $F(R)$로 보냅니다((3)의 (vi)). $F$의 원소가 모두 실수인 복소수이면 켤레가 그런 준동형이므로, 켤레를 $F(R)$로 제한한 것이 $F(R)$의 동형사상이 됩니다((4)). 실수인 근은 그대로 두고 실수가 아닌 근은 그 켤레와 맞바꿉니다.

## 증명

:::idea
(1)은 부분체가 $1$을 포함하고 정수배와 몫에 닫혀 있다는 것과 $\iota$가 단사라는 것에서 나온다. (3)은 $\mathbb{C}$에서의 일차식 분해를 분해체의 (9)에 넣고, 표수 $0$을 근이 서로 다른 다항식의 (5)에, 그 결과를 분해체로의 동형 연장의 (5)와 (3)에 넣는다. (3)의 (vi)은 $\tau$가 근을 근으로 보낸다는 것과 붙인 체의 상의 꼴로 $\tau(F(R)) \subseteq F(R)$을 얻은 뒤 (v)를 쓴다.
:::

:::hint
$\operatorname{char} F = c$이면 환의 표수의 (1)에 의해 $c \cdot 1 = 0$입니다. 이 정수배를 $\mathbb{C}$에서 계산하면 $\iota(c)$입니다.
:::

:::hint
$\tau(F(R)) = F(R)$을 보이려면 먼저 $\tau(F(R)) \subseteq F(R)$을 보이고, $F(R) \to F(R)$로 본 $\tau$가 $F$를 고정하는 환 준동형이라는 것을 (v)에 넣습니다.
:::

:::proof
**쓰는 사실.** [[subfield|부분체]]의 (3)의 (iii)에 의해 $\mathbb{C}$의 부분체 $K$의 원소의 합, 곱, 역원은 $K$에서 계산한 것과 $\mathbb{C}$에서 계산한 것이 같고, 포함 함수 $K \to \mathbb{C}$는 $1$을 $1$로 보내는 단사인 환 준동형이다. 부분체의 (5)의 (i)에 의해, $K$와 $L$이 $\mathbb{C}$의 부분체이고 $L \subseteq K$이면 $L$은 체 $K$의 부분체이고, 거꾸로 체 $K$의 부분체는 $\mathbb{C}$의 부분체이다. [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 $f \in K[X]$에 $K$의 원소를 대입한 값은 $f$를 $\mathbb{C}[X]$의 원소로 보고 대입한 값과 같다. 다항식은 계수의 열이므로([[polynomial-ring|다항식환]]의 정의) 두 다항식은 모든 계수가 같을 때 같다.

**(1)의 (i).** [[subring|부분환]]의 (1)에 의해 $F$는 덧셈군 $(\mathbb{C}, +)$의 부분군이고 $1 \in F$이다. 정수배는 덧셈군에서의 거듭제곱이므로([[ring|환]]의 표기) [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 모든 정수 $n$에서 $n \cdot 1 \in F$이고, 환 $F$에서 계산한 $n \cdot 1$은 환 $\mathbb{C}$에서 계산한 것과 같다. [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (iv)에 의해 $\mathbb{C}$에서 $n \cdot 1 = \iota(n) \cdot 1 = \iota(n)$이다. 따라서 $\iota(n) \in F$이다.

$x$가 유리수이면 [[rational-and-irrational-numbers|유리수와 무리수]]의 정의에 의해 $x = a/b$인 정수 $a$, $b$($b \ne 0$)가 있다. [[complex-field|복소수체]]의 (2)의 (i)에 의해 $\iota(b) \ne 0$이고 $\iota(x) = \iota(a)/\iota(b) = \iota(a)\,\iota(b)^{-1}$이다. 방금 보인 것에 의해 $\iota(a), \iota(b) \in F$이고, 부분체의 (1)에 의해 $\iota(b)^{-1} \in F$이며 곱도 $F$에 속한다. 따라서 $\iota(x) \in F$이다.

$c = \operatorname{char} F$라 하자. 이것은 $0$ 이상인 정수이다. [[divisibility|나누어떨어짐]]의 정의에 의해 $c = c \cdot 1$이므로 $c \mid c$이고, [[characteristic-of-a-ring|환의 표수]]의 (1)에 의해 환 $F$에서 $c \cdot 1 = 0$이다. 첫 문단에 의해 이 값은 $\iota(c)$이므로 $\iota(c) = 0 = \iota(0)$이다. 복소수체의 (2)에 의해 $\iota$는 단사이므로 $c = 0$이다.

**(1)의 (ii).** 복소수체의 (2)의 (iii)에 의해 $\iota(\mathbb{R})$는 $\mathbb{C}$의 부분환이고 제한한 연산으로 체이므로, 부분체의 (2)에 의해 $\mathbb{C}$의 부분체이다. [[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{Q}$는 체 $\mathbb{R}$의 부분체이고 그 연산은 실수의 연산을 제한한 것이다. [[ring-homomorphism|환 준동형]]의 (3)의 (ii)에 의해 제한 $\iota|_{\mathbb{Q}} : \mathbb{Q} \to \mathbb{C}$는 환 준동형이고, $\iota(1) = 1$이며 $\iota$가 단사이므로 단사이다. [[extension-field|확대체]]의 (3)의 (iii)에 의해 그 상 $\iota(\mathbb{Q})$는 $\mathbb{C}$의 부분체이고, 공역을 $\iota(\mathbb{Q})$로 둔 $\iota_{\mathbb{Q}}$는 환 동형사상이다. $\mathbb{Q} \subseteq \mathbb{R}$이므로 $\iota(\mathbb{Q}) \subseteq \iota(\mathbb{R})$이고, 복소수체의 (3)에 의해 $\iota(\mathbb{R})$의 원소는 실수인 복소수이다. 마지막 문장은 (i)이다.

**(2)의 (i).** $j : \mathbb{Q} \to \mathbb{R}$와 $k : \iota(\mathbb{Q}) \to \mathbb{C}$를 포함 함수라 하자. 쓰는 사실에 의해 둘 다 $1$을 $1$로 보내는 환 준동형이다. 대입 준동형의 (8)에 의해 $g^{j} = g$이고, $g^{\iota_{\mathbb{Q}}} \in \iota(\mathbb{Q})[X]$에 대하여 $(g^{\iota_{\mathbb{Q}}})^{k} = g^{\iota_{\mathbb{Q}}}$이다. 유리수 $x$에서 $\iota(j(x)) = \iota(x) = k(\iota_{\mathbb{Q}}(x))$이므로 두 합성 $\iota \circ j$와 $k \circ \iota_{\mathbb{Q}}$는 같은 함수 $\mathbb{Q} \to \mathbb{C}$이다. 대입 준동형의 (4)에 의해
$$
\begin{aligned}
g^{\iota} &= (g^{j})^{\iota} = g^{\iota \circ j} \\
&= g^{k \circ \iota_{\mathbb{Q}}} = (g^{\iota_{\mathbb{Q}}})^{k} \\
&= g^{\iota_{\mathbb{Q}}}
\end{aligned}
$$
이다. 따라서 $g^{\iota} \in \iota(\mathbb{Q})[X]$이고, 계수 사상의 정의에 의해 $\operatorname{coef}_n(g^{\iota}) = \iota(\operatorname{coef}_n(g))$이며, 이것은 $\iota(\mathbb{Q})$의 원소이므로 (1)의 (ii)에 의해 실수인 복소수이다.

**(2)의 (ii).** (1)의 (ii)에 의해 $\iota_{\mathbb{Q}} : \mathbb{Q} \to \iota(\mathbb{Q})$는 체 사이의 환 동형사상이다. [[irreducible-polynomial|기약 다항식]]의 (7)에 의해 그 계수 사상은 환 동형사상 $\mathbb{Q}[X] \to \iota(\mathbb{Q})[X]$이고, 그 (i), (ii), (iii)이 영다항식, 차수, 최고차계수, 모닉, 나누어떨어짐, 기약에 대한 주장이다. (i)에 의해 이 계수 사상은 $g$를 $g^{\iota}$로 보내고, 최고차계수의 상 $\iota_{\mathbb{Q}}(\cdot)$는 $\iota(\cdot)$이다.

**(2)의 (iii).** $g \in \mathbb{R}[X]$이므로 다항식과 다항함수의 (3)의 (v)를 $g$에 쓴 것이다.

**(3)의 (i).** 다항식과 다항함수의 (4)의 (iii)에 의해 $f \in \mathbb{C}[X]$이고, 그 (4)의 (i)과 (ii)가 성립하며, $d$와 $a$는 $f$를 $F[X]$의 원소로 본 차수와 최고차계수이다. 그 (i)이 첫 문장이다. $f = a'(X - c_1') \cdots (X - c_k')$가 $f$의 $\mathbb{C}$에서의 일차식 분해이면, [[splitting-field|분해체]]의 (1)의 (i)에 의해 $k = d$이고 $a' = a$이므로 이것은 첫 문장의 꼴이다. 그 꼴의 열에 대하여 다항식과 다항함수의 (4)의 (ii)에 의해 $R = \{c_1, \dots, c_d\}$이고, $d \ge 1$이므로 $R \ne \emptyset$이다. [[separable-polynomial|근이 서로 다른 다항식]]의 (1)을 체 $\mathbb{C}$와 $f$에 쓰면 $R$은 유한집합이고 $|R| \le d$이다.

**(3)의 (ii).** (i)의 일차식 분해를 하나 잡자. 분해체의 (6)의 (i)을 체 $\mathbb{C}$와 부분체 $F$에 쓰면 $c_1, \dots, c_d$는 $F$ 위에서 대수적이다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)를 체 $\mathbb{C}$에 쓰면 $L_0 = F(c_1, \dots, c_d)$는 $F$와 모든 $c_j$를 포함하는 $\mathbb{C}$의 부분체이고, $F$와 모든 $c_j$를 포함하는 $\mathbb{C}$의 모든 부분체에 포함된다. $R = \{c_1, \dots, c_d\}$이므로 "모든 $c_j$를 포함한다"는 "$R$을 포함한다"와 같다. 따라서 $L_0$은 진술의 조건을 만족한다. $L$과 $L'$이 둘 다 조건을 만족하면 $L \subseteq L'$이고 $L' \subseteq L$이므로 $L = L'$이다. 따라서 그런 $L$은 정확히 하나이고, 어느 일차식 분해에서도 $F(R) = F(c_1, \dots, c_d)$이다.

$M$이 $F(R) \subseteq M$인 $\mathbb{C}$의 부분체라 하자. 쓰는 사실에 의해 $F(R)$은 $M$의 부분체이다. $K$가 $F$와 $R$을 포함하는 $M$의 부분체이면 $K$는 $\mathbb{C}$의 부분체이므로 $F(R) \subseteq K$이다. 따라서 $F(R)$은 $F$와 모든 $c_j$를 포함하고 그런 $M$의 모든 부분체에 포함되는 $M$의 부분체이고, 유한 확대와 대수적 확대의 (1)의 (ii)를 체 $M$에 쓴 유일성에 의해 $M$ 안에서 붙인 $F(c_1, \dots, c_d)$와 같다.

**(3)의 (iii).** 분해체의 (9)를 $M = \mathbb{C}$, $K = F$와 (i)의 일차식 분해에 쓰면 $F(c_1, \dots, c_d)$, 곧 (ii)에 의해 $F(R)$은 $F$ 위에서 $f$의 분해체이고, $F(R)$ 안의 $f$의 근 전체는 $\mathbb{C}$ 안의 $f$의 근 전체 $R$과 같다. 분해체의 (6)의 (iii)에 의해 $F(R)$은 $F$의 유한 확대이다.

**(3)의 (iv).** (1)의 (i)에 의해 $\operatorname{char} F = 0$이다. (iii)에 의해 $f$는 $F(R)$에서 분해되므로 $F(R)$, $F$, $f$는 근이 서로 다른 다항식의 (3)의 설정을 만족하고, 그 (5)에 의해 $f$의 $F$ 위의 모닉 기약 인수마다 $F(R)$에서 근이 서로 다르다. $f$가 $F$ 위에서 기약이면 같은 (5)의 첫 문장을 $h = f$에 쓰면 $f$는 $F(R)$에서 근이 서로 다르다. 곧 $F(R)$ 안의 $f$의 근 전체의 집합은 원소를 $d$개 갖고, (iii)에 의해 그 집합은 $R$이다.

**(3)의 (v).** (iii)에 의해 $F(R)$은 $F$ 위에서 $f$의 분해체이고, (iv)에 의해 $f$의 $F$ 위의 모닉 기약 인수마다 $F(R)$에서 근이 서로 다르다. [[extension-of-isomorphism-to-splitting-fields|분해체로의 동형 연장]]의 (5)를 $K = F$, $E = F(R)$에 쓴 것이다.

**(3)의 (vi).** $1 \in F$이므로 $\tau(1) = 1$이다. (i)의 일차식 분해를 하나 잡자.

먼저 $\tau(R) \subseteq R$을 보인다. $f \in F[X] \subseteq M[X]$이고, 계수 사상의 정의에 의해 $f^{\tau} \in \mathbb{C}[X]$는 모든 $n$에서 $\operatorname{coef}_n(f^{\tau}) = \tau(\operatorname{coef}_n(f)) = \operatorname{coef}_n(f)$이다(계수가 $F$에 속한다). 따라서 $\mathbb{C}[X]$에서 $f^{\tau} = f$이다. $c \in R$이면 $R \subseteq F(R) \subseteq M$이므로 $c \in M$이고, 쓰는 사실에 의해 $M[X]$에서 계산한 $f(c)$는 $0$이다. 대입 준동형의 (5)에 의해 $0 = \tau(f(c)) = f^{\tau}(\tau(c)) = f(\tau(c))$이므로 $\tau(c) \in R$이다.

다음으로 $\tau(F(R)) \subseteq F(R)$을 보인다. 확대체의 (3)의 (ii)에 의해 $\tau$는 단사이다. (ii)에 의해 $F(R)$은 $M$ 안에서 붙인 $F(c_1, \dots, c_d)$이므로, 유한 확대와 대수적 확대의 (2)를 $E = M$, $E' = \mathbb{C}$에 쓰면 $\tau(F(R)) = \tau(F)(\tau(c_1), \dots, \tau(c_d))$이다. $\tau$가 $F$의 원소를 고정하므로 $\tau(F) = F$이다. 앞 문단에 의해 모든 $\tau(c_j)$는 $R \subseteq F(R)$에 속하므로, 유한 확대와 대수적 확대의 (1)의 (ii)에 의해 $F(\tau(c_1), \dots, \tau(c_d)) \subseteq F(R)$이다.

따라서 $z \in F(R)$에서의 값이 $\tau(z)$인 함수 $\tau' : F(R) \to F(R)$이 있고, 환 준동형의 (3)의 (ii), (iii)에 의해 이것은 환 준동형이며 $F$의 원소를 고정한다. (v)에 의해 $\tau'$은 전단사인 환 동형사상이고, $\tau(F(R)) = \tau'(F(R)) = F(R)$이다. 분해체로의 동형 연장의 (3)을 $K = K' = F$, $\sigma = i_F$, $E = E' = F(R)$에 쓰자. 대입 준동형의 (4)에 의해 $f^{i_F} = f$이고, (iii)에 의해 $E'$은 $F$ 위에서 $f$의 분해체이므로 그 설정이 성립한다. $\tau'$은 $F$ 위에서 $i_F$와 같으므로 $F(R)$ 안의 $f$의 근 전체 $R$을 $R$ 위로 전단사로 보낸다. 따라서 $\tau(R) = R$이다.

**(3)의 (vii).** 확대체의 (1)의 (ii)에 의해 $F$는 체 $L$의 부분체이고, 부분체의 (3)의 (iv)에 의해 $f \in L[X]$이며 그 계수는 $F[X]$의 원소로 본 것과 같다. [[degree-of-a-polynomial|다항식의 차수]]의 (8)에 의해 차수와 최고차계수도 같다. $L[X] \subseteq \mathbb{C}[X]$에서도 계수가 같으므로 $f$를 $\mathbb{C}[X]$의 원소로 본 것은 같은 다항식이고, $\mathbb{C}$ 안의 근 전체는 $R$이다. 따라서 (ii)와 (iii)을 $L$에 쓸 수 있고, $L(R)$은 $L$ 위에서 $f$의 분해체이다. $L(R)$은 $F \subseteq L \subseteq L(R)$이고 $R \subseteq L(R)$이므로 (ii)의 조건에 의해 $F(R) \subseteq L(R)$이다. $L \subseteq F(R)$이면 $F(R)$은 $L$과 $R$을 포함하는 $\mathbb{C}$의 부분체이므로 (ii)를 $L$에 쓴 조건에 의해 $L(R) \subseteq F(R)$이고, $L(R) = F(R)$이다.

**(4)의 (i).** [[complex-conjugate|켤레복소수]]의 (6)에 의해 켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$는 환 동형사상이고 실수인 복소수를 그대로 둔다. $F$의 원소는 실수인 복소수이므로 이 함수는 $F$의 모든 원소를 고정한다. (3)의 (vi)을 $M = \mathbb{C}$와 이 함수에 쓰면 나머지 주장이 나온다.

**(4)의 (ii).** 첫 문장은 켤레복소수의 (4)이다. $R$의 원소가 모두 실수인 복소수라 하자. $S = \{z \in F(R) : \overline{z} = z\}$로 두면, 켤레복소수의 (2)와 (4)에 의해 $1 \in S$이고, $z, w \in S$이면 $\overline{z - w} = z - w$, $\overline{zw} = zw$이며, $z \ne 0$이면 $\overline{z^{-1}} = z^{-1}$이다. $F(R)$은 부분체이므로 이 원소들은 $F(R)$에 속하고, 부분체의 (1)에 의해 $S$는 $\mathbb{C}$의 부분체이다. $F$의 원소와 $R$의 원소는 실수인 복소수이므로 $F \subseteq S$, $R \subseteq S$이고, (3)의 (ii)에 의해 $F(R) \subseteq S$이다. 따라서 $F(R)$로 제한한 켤레는 항등함수이다. 거꾸로 그 제한이 항등함수이면 $R$의 모든 원소 $z$에서 $\overline{z} = z$이고, 첫 문장에 의해 $z$는 실수인 복소수이다.

**(4)의 (iii).** $z \in R$이 실수인 복소수가 아니라 하자. (i)에 의해 $\overline{z} \in R$이고, (ii)의 첫 문장에 의해 $\overline{z} \ne z$이다. [[complex-conjugate|켤레복소수]]의 (1)에 의해 $\overline{\overline{z}} = z$이므로, $\overline{z}$가 실수인 복소수라면 켤레복소수의 (4)에 의해 $z = \overline{\overline{z}} = \overline{z}$가 되어 어긋난다. 따라서 $\overline{z}$는 실수인 복소수가 아니다. 제한한 켤레의 값은 켤레이므로 $z$를 $\overline{z}$로, $\overline{z}$를 $\overline{\overline{z}} = z$로 보낸다. 실수가 아닌 원소가 정확히 $z$, $w$이면, $\overline{z}$는 $R$의 실수가 아닌 원소이고 $z$와 다르므로 $\overline{z} = w$이다. $R$의 실수인 원소는 (ii)의 첫 문장에 의해 고정되고, $z$와 $w = \overline{z}$는 방금 본 대로 맞바뀐다.
:::

## 예시와 반례

:::example[$\iota(\mathbb{Q})$ 위에서 $X^3 - 1$의 분해체]
$F = \iota(\mathbb{Q})$이고 $f = X^3 - 1 \in F[X]$라 합시다. 실수를 복소수 자리에 쓰는 약속으로 $\zeta = -\tfrac{1}{2} + \tfrac{\sqrt{3}}{2} i$로 두면, [[complex-conjugate|켤레복소수]]의 (1), (3), (5)에 의해 $\overline{\zeta} = -\tfrac{1}{2} - \tfrac{\sqrt{3}}{2} i$, $\zeta + \overline{\zeta} = -1$, $\zeta \overline{\zeta} = \tfrac{1}{4} + \tfrac{3}{4} = 1$입니다. 그래서 $\mathbb{C}[X]$에서
$$
\begin{aligned}
&(X - \zeta)(X - \overline{\zeta}) \\
&\quad = X^2 + X + 1, \\
&(X - 1)(X^2 + X + 1) \\
&\quad = X^3 - 1
\end{aligned}
$$
이고, $X^3 - 1 = (X - 1)(X - \zeta)(X - \overline{\zeta})$는 $f$의 일차식 분해입니다. (3)의 (i)에 의해 $R = \{1, \zeta, \overline{\zeta}\}$입니다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sqrt{3} > 0$이므로 $\operatorname{Im} \zeta \ne 0$이고, $\zeta$와 $\overline{\zeta}$는 실수인 복소수가 아니며 서로 다릅니다. 근은 세 개입니다.

$X^2 + X + 1 \in F[X]$의 $\mathbb{C}$ 안의 근은 $\zeta$와 $\overline{\zeta}$뿐이고(위의 일차식 분해와 (3)의 (i)) (1)의 (ii)에 의해 $F$의 원소는 실수인 복소수이므로, 이 다항식은 $F$ 안에 근이 없고 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $F$ 위에서 기약입니다. 모닉이므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (5)에 의해 $\zeta$는 $F$ 위에서 대수적이고 이 다항식이 그 최소다항식이며, [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[F(\zeta) : F] = 2$입니다. $\overline{\zeta} = -1 - \zeta$이고 $1 \in F$이므로 $F(\zeta)$는 $F$와 $R$을 포함하고, 이 항목의 (3)의 (ii)에 의해 $F(R) \subseteq F(\zeta)$입니다. 거꾸로 $F(R)$은 $F$와 $\zeta$를 포함하므로 단순 대수적 확대의 (1)에 의해 $F(\zeta) \subseteq F(R)$입니다. 따라서 $F(R) = F(\zeta)$이고 $[F(R) : F] = 2$입니다.

(3)의 (v)에 의해 $F$를 고정하는 환 동형사상 $F(R) \to F(R)$은 정확히 두 개입니다. 항등함수와, (4)의 $F(R)$로 제한한 켤레입니다. 후자는 $R$에 실수가 아닌 원소가 있으므로 (4)의 (ii)에 의해 항등함수가 아니고, $1$을 고정하며 $\zeta$와 $\overline{\zeta}$를 맞바꿉니다.
:::

:::counterexample[원소가 모두 실수는 아닌 $F = \iota(\mathbb{Q})(\zeta)$ 위의 $X - \zeta$]
위 예시의 $\zeta$로 $F = \iota(\mathbb{Q})(\zeta)$라 하고 $f = X - \zeta \in F[X]$라 합시다. $f$는 차수가 $1$이고 $R = \{\zeta\}$이며, $\zeta \in F$이므로 (3)의 (ii)에 의해 $F(R) = F$입니다. 켤레는 $\zeta$를 $\overline{\zeta}$로 보내는데, $\overline{\zeta} \ne \zeta$이므로 $\overline{\zeta} \notin R$입니다. 곧 켤레는 근을 근으로 보내지 않습니다. $\overline{\zeta} = -1 - \zeta$는 $F(R)$에는 속하므로, 켤레가 $F(R)$의 원소를 $F(R)$의 원소로 보내는 것만으로는 근이 보존되지 않습니다. 여기서 깨진 가정은 (4)의 "$F$의 원소가 모두 실수인 복소수"이고, 그래서 켤레는 $F$의 원소 $\zeta$를 고정하지 않아 (3)의 (vi)의 가정도 성립하지 않습니다.
:::

## 확인 질문

:::check[$\iota(\mathbb{R})$ 위에서 $X^2 + 1$의 $\mathbb{C}$ 안의 분해체는 무엇이고, $\iota(\mathbb{R})$의 원소를 고정하는 환 동형사상은 몇 개인가?]
$\mathbb{C}[X]$에서 $(X - i)(X + i) = X^2 - ii = X^2 + 1$이므로([[complex-field|복소수체]]의 (5)) $R = \{i, -i\}$이고, $-i \in \iota(\mathbb{R})(i)$이므로 $F(R) = \iota(\mathbb{R})(i)$입니다. 복소수체의 (4)에 의해 모든 복소수는 $z = \operatorname{Re} z + (\operatorname{Im} z) i$이고 $\operatorname{Re} z$, $\operatorname{Im} z$를 옮긴 것은 $\iota(\mathbb{R})$에 속하므로 $F(R) = \mathbb{C}$입니다. $\pm i$는 실수인 복소수가 아니므로 $X^2 + 1$은 $\iota(\mathbb{R})$ 위에서 기약이고(기약 다항식의 (5)) $[\mathbb{C} : \iota(\mathbb{R})] = 2$입니다. (3)의 (v)에 의해 동형사상은 두 개이고, (4)에 의해 항등함수와 켤레를 취하는 함수입니다.
:::

:::check[$F = \iota(\mathbb{Q})$이고 $f = (X^2 + 1)(X^2 - 3)$이면 $F$의 원소를 고정하는 환 동형사상 $F(R) \to F(R)$은 몇 개인가?]
$s = \iota(\sqrt{3})$이면 $s^2 = 3$이므로 $\mathbb{C}[X]$에서 $f = (X - i)(X + i)(X - s)(X + s)$이고, (3)의 (i)에 의해 $R = \{i, -i, s, -s\}$입니다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)에 의해 $X^2 - 3$은 $\mathbb{Q}$ 위에서 기약이고, (2)의 (ii)에 의해 $(X^2 - 3)^{\iota} = X^2 - 3$은 $F$ 위의 모닉 기약 다항식이므로 $s$의 최소다항식이며 $[F(s) : F] = 2$입니다(최소다항식의 (5), 단순 대수적 확대의 (3)의 (iii)). $\iota(\mathbb{R})$는 $F$와 $s$를 포함하는 부분체이므로 $F(s) \subseteq \iota(\mathbb{R})$이고, $\pm i$는 실수인 복소수가 아니므로 $X^2 + 1$은 $F(s)$ 안에 근이 없어 $F(s)$ 위에서 기약이며 $[F(s)(i) : F(s)] = 2$입니다. $F(s)(i) = F(s, i)$는 $F$와 $R$을 포함하고 $F(R)$에 포함되므로([[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)) $F(R) = F(s, i)$입니다. [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $[F(R) : F] = 4$이고, (3)의 (v)에 의해 답은 $4$개입니다. $f$가 기약이 아니어도 개수는 차수와 같습니다.
:::
