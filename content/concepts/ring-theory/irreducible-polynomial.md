---
title: 기약 다항식
title_en: Irreducible Polynomial
aliases: [기약, 기약이 아닌 다항식, irreducible polynomial, irreducible over a field]
kind: definition
field: ring-theory
msc: ["12E05"]
level: undergrad
summary: 체 F 위의 다항식이 차수가 1 이상이고 차수가 더 작은 두 다항식의 곱으로 쓸 수 없을 때 F 위에서 기약이라 한다. 이것은 F[X] 의 기약원과 같다. 일차 다항식은 기약이고, 차수가 2 나 3 이면 기약인 것은 근이 없을 때이다. 체의 동형사상의 계수 사상과 X 를 X + c 로 옮기는 것은 기약성을 보존하고, 큰 체 위에서 기약이면 부분체 위에서도 기약이다.
requires: [prime-number, well-ordering-principle, integers-modulo-n, ring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, divisibility-in-integral-domains, principal-ideal-domain, subfield]
sources:
  - ref: judson-abstract-algebra
    loc: "17.3절 Irreducible Polynomials, 기약 다항식의 정의와 Example 17.11, 17.12 (p.215); 17.5절 Exercises, 연습문제 9, 16 (p.221); 18.2절 Factorization in Integral Domains 첫머리 (p.228); 23.5절 Exercises, 연습문제 2 (p.308)"
    checked: original
    note: "정의는 출처(p.215)의 'A nonconstant polynomial f(x) ∈ F[x] is irreducible over a field F if f(x) cannot be expressed as a product of two polynomials g(x) and h(x) in F[x], where the degrees of g(x) and h(x) are both smaller than the degree of f(x)' 와 같다. 이 항목은 '상수가 아니다' 를 '영다항식이 아니고 차수가 1 이상' 으로 쓴다(이 사이트는 영다항식에 차수를 두지 않는다). (1)의 '정역 F[X] 의 기약원과 같다' 는 출처 18.2절 첫머리(p.228)가 체 위의 기약 다항식이 정수의 소수와 비슷한 구실을 한다고 적고 정역의 기약원을 정의하는 것과 이어진다. (5)의 '차수 2·3 이면 근이 없을 때 기약' 은 출처 Example 17.12(p.215)가 Z_3 위의 x³ + x² + 2 에 대하여 'By the division algorithm there would have to be a factor of the form x − a' 라고 쓰고 세 값을 계산하는 논법을 진술로 올린 것이다. 이 항목은 차수의 합 3 = 1 + 2 로 일차 인수가 생긴다는 것과 일차식의 근으로 증명한다. (7)의 계수 사상은 출처 연습문제 16(p.221, R ≅ S 이면 R[x] ≅ S[x])의 동형을 쓴다. 예시 '$\\mathbb{Z}_5$ 위의 $X^3 + [2]X + [1]$' 은 출처 Example 17.12 와 같은 발상(모든 원소를 넣어 근이 없음을 보인다)이고, 반례 '근이 없어도 기약이 아닌 $\\mathbb{Z}_3$ 위의 사차 다항식' 의 X⁴ + [2]X² + [1] 은 출처 23.5절 연습문제 2(b)(p.308)가 Q 위에서 분리성을 묻는 x⁴ + 2x² + 1 과 같은 꼴이다(계수의 체가 다르다). 같은 연습문제 2(c)는 Z_3 위의 x⁴ + x² + 1 의 분리성을 묻는다(Z_3 에서 (x² + [2])² 이다). 이 반례와 확인 질문 '$\\mathbb{Z}_5[X]$에서 $X^2 + [1]$과 $X^2 + [2]$는 기약인가?' 는 출처 연습문제 9(p.221, Z_2[x] 의 차수 2, 3 인 기약 다항식을 모두 찾아라)와 같은 종류의 물음이다. 그 확인 질문의 X² + [1] 은 출처 Example 17.11(p.215)이 R 위에서 기약이라고 하는 x² + 1 과 같은 꼴이다(Z_5 위에서는 기약이 아니다)."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(진술의 경계 경우 0·체·영 아이디얼 대입, 직관 문장 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]라 하자. 다항식환 $F[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값 $f(c)$와 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약원과 연관원은 [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 것이다.

$f \in F[X]$가 **$F$ 위에서 기약**(irreducible over $F$)인 것, 곧 $f$가 $F$ 위의 **기약 다항식**(irreducible polynomial)인 것은 정확히 $f$가 영다항식이 아니고 $\deg f \ge 1$이며, $f = gh$이고 $\deg g < \deg f$, $\deg h < \deg f$인 영이 아닌 $g, h \in F[X]$가 없을 때이다. "$F[X]$에서 기약"이라고도 쓴다.

다음이 성립한다. 아래에서 $f, g \in F[X]$이다.

1. (기약원과 같다) $F[X]$는 정역이고 그 가역원은 정확히 영이 아닌 상수 다항식이다. $f$가 $F$ 위에서 기약인 것은 정확히 $f$가 정역 $F[X]$의 기약원일 때이다.
2. (차수로 본 판정) $f \ne 0$이고 $\deg f \ge 1$이라 하자. $f$가 $F$ 위에서 기약이 아닌 것은 정확히 $f = gh$이고 $\deg g \ge 1$, $\deg h \ge 1$인 영이 아닌 $g, h \in F[X]$가 있을 때이다. 이때 $\deg g + \deg h = \deg f$이고 $\deg g < \deg f$, $\deg h < \deg f$이다.
3. (상수, 일차식, 상수배)
   - (i) 영다항식과 상수 다항식은 기약이 아니다.
   - (ii) 차수가 $1$인 다항식은 기약이다.
   - (iii) $f$가 기약이고 $c \in F$, $c \ne 0$이면 $cf$는 기약이다. 특히 $c$가 기약 다항식 $f$의 최고차계수이면 $c^{-1} f$는 모닉 기약 다항식이고, [[principal-ideal-domain|주 아이디얼 정역]]의 (3)에 의해 $f$와 연관원인 모닉 다항식은 이것뿐이다.
   - (iv) $h$와 $m$이 모닉 기약 다항식이고 $h \mid m$이면 $h = m$이다.
4. (근이 있으면 기약이 아니다) $\deg f \ge 2$이고 $f$가 $F$ 안에 근 $c$를 가지면, $f = (X - c)q$이고 $\deg q = \deg f - 1 \ge 1$인 $q \in F[X]$가 있으며, $f$는 $F$ 위에서 기약이 아니다.
5. (차수 $2$와 $3$) $\deg f = 2$이거나 $\deg f = 3$이면, $f$가 $F$ 위에서 기약인 것은 정확히 $f$가 $F$ 안에 근을 갖지 않을 때이다.
6. (차수를 보존하는 동형사상) $K$와 $K'$이 체이고 $\theta : K[X] \to K'[X]$가 [[ring-homomorphism|환 동형사상]]으로서 영이 아닌 모든 $f \in K[X]$에서 $\theta(f) \ne 0$이고 $\deg \theta(f) = \deg f$라 하자. 그러면 $\theta^{-1}$도 이 성질을 갖고, $f, g \in K[X]$에 대하여 $K[X]$에서 $g \mid f$인 것은 정확히 $K'[X]$에서 $\theta(g) \mid \theta(f)$일 때이며, $f$가 $K$ 위에서 기약인 것은 정확히 $\theta(f)$가 $K'$ 위에서 기약일 때이다.
7. (체의 동형사상) $K$와 $K'$이 체이고 $\sigma : K \to K'$이 환 동형사상이라 하자. 그러면 $\sigma(1) = 1$이고, $f$에 $f^{\sigma}$를 대응시키는 $\sigma$의 계수 사상([[evaluation-homomorphism|대입 준동형]]의 (3))은 환 동형사상 $K[X] \to K'[X]$이며 그 역함수는 $\sigma^{-1}$의 계수 사상이다. $f, g \in K[X]$에 대하여 다음이 성립한다.
   - (i) $f \ne 0$인 것은 정확히 $f^{\sigma} \ne 0$일 때이고, 이때 $\deg f^{\sigma} = \deg f$이며 $f^{\sigma}$의 최고차계수는 $f$의 최고차계수의 $\sigma$에 의한 값이다. $f$가 모닉인 것은 정확히 $f^{\sigma}$가 모닉일 때이다.
   - (ii) $K[X]$에서 $g \mid f$인 것은 정확히 $K'[X]$에서 $g^{\sigma} \mid f^{\sigma}$일 때이다.
   - (iii) $f$가 $K$ 위에서 기약인 것은 정확히 $f^{\sigma}$가 $K'$ 위에서 기약일 때이다.
8. ($X$를 $X + c$로 옮기기) $c \in F$이고 $\tau_c(f) = f(X + c)$가 대입 준동형의 (9)의 것이면, $f$가 $F$ 위에서 기약인 것은 정확히 $\tau_c(f)$가 $F$ 위에서 기약일 때이다.
9. (부분체) $K$가 $E$의 [[subfield|부분체]]이고 $f \in K[X]$라 하자. $f$가 $E$ 위에서 기약이면 $f$는 $K$ 위에서 기약이다.
:::

:::english
Let $F$ be a field. The polynomial ring $F[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring; the degree $\deg$, leading coefficients and monic polynomials are those of the degree of a polynomial; and values $f(c)$ and roots are those of the evaluation homomorphism. Irreducible elements and associates are those of divisibility in integral domains.

A polynomial $f \in F[X]$ is **irreducible over $F$**, that is, $f$ is an **irreducible polynomial** over $F$, if and only if $f$ is nonzero, $\deg f \ge 1$, and there are no nonzero $g, h \in F[X]$ with $f = gh$, $\deg g < \deg f$ and $\deg h < \deg f$. We also say "irreducible in $F[X]$".

The following hold. Below, $f, g \in F[X]$.

1. (Same as irreducible elements) $F[X]$ is an integral domain whose units are exactly the nonzero constant polynomials. A polynomial $f$ is irreducible over $F$ if and only if $f$ is an irreducible element of the integral domain $F[X]$.
2. (Criterion by degrees) Let $f \ne 0$ with $\deg f \ge 1$. Then $f$ is not irreducible over $F$ if and only if $f = gh$ for some nonzero $g, h \in F[X]$ with $\deg g \ge 1$ and $\deg h \ge 1$. In that case $\deg g + \deg h = \deg f$, $\deg g < \deg f$ and $\deg h < \deg f$.
3. (Constants, linear polynomials, constant multiples)
   - (i) The zero polynomial and constant polynomials are not irreducible.
   - (ii) Every polynomial of degree $1$ is irreducible.
   - (iii) If $f$ is irreducible and $c \in F$, $c \ne 0$, then $cf$ is irreducible. In particular, if $c$ is the leading coefficient of an irreducible polynomial $f$, then $c^{-1} f$ is a monic irreducible polynomial, and by item (3) of principal ideal domains it is the only monic polynomial associate to $f$.
   - (iv) If $h$ and $m$ are monic irreducible polynomials and $h \mid m$, then $h = m$.
4. (A root prevents irreducibility) If $\deg f \ge 2$ and $f$ has a root $c$ in $F$, then $f = (X - c)q$ for some $q \in F[X]$ with $\deg q = \deg f - 1 \ge 1$, and $f$ is not irreducible over $F$.
5. (Degrees $2$ and $3$) If $\deg f = 2$ or $\deg f = 3$, then $f$ is irreducible over $F$ if and only if $f$ has no root in $F$.
6. (Degree-preserving isomorphisms) Let $K$ and $K'$ be fields and let $\theta : K[X] \to K'[X]$ be a ring isomorphism such that $\theta(f) \ne 0$ and $\deg \theta(f) = \deg f$ for every nonzero $f \in K[X]$. Then $\theta^{-1}$ has the same property; for $f, g \in K[X]$, $g \mid f$ in $K[X]$ if and only if $\theta(g) \mid \theta(f)$ in $K'[X]$; and $f$ is irreducible over $K$ if and only if $\theta(f)$ is irreducible over $K'$.
7. (Isomorphisms of fields) Let $K$ and $K'$ be fields and $\sigma : K \to K'$ a ring isomorphism. Then $\sigma(1) = 1$, and the coefficient map of $\sigma$, which sends $f$ to $f^{\sigma}$ (item (3) of the evaluation homomorphism), is a ring isomorphism $K[X] \to K'[X]$ whose inverse is the coefficient map of $\sigma^{-1}$. For $f, g \in K[X]$ the following hold.
   - (i) $f \ne 0$ if and only if $f^{\sigma} \ne 0$; in that case $\deg f^{\sigma} = \deg f$ and the leading coefficient of $f^{\sigma}$ is the image under $\sigma$ of the leading coefficient of $f$. Moreover $f$ is monic if and only if $f^{\sigma}$ is monic.
   - (ii) $g \mid f$ in $K[X]$ if and only if $g^{\sigma} \mid f^{\sigma}$ in $K'[X]$.
   - (iii) $f$ is irreducible over $K$ if and only if $f^{\sigma}$ is irreducible over $K'$.
8. (Replacing $X$ by $X + c$) If $c \in F$ and $\tau_c(f) = f(X + c)$ is as in item (9) of the evaluation homomorphism, then $f$ is irreducible over $F$ if and only if $\tau_c(f)$ is irreducible over $F$.
9. (Subfields) Let $K$ be a subfield of $E$ and $f \in K[X]$. If $f$ is irreducible over $E$, then $f$ is irreducible over $K$.
:::

## 직관

$1$보다 큰 정수를 더 작은 양의 정수 두 개의 곱으로 쪼갤 수 없으면 소수이듯이, 차수가 $1$ 이상인 다항식을 차수가 더 작은 두 다항식의 곱으로 쪼갤 수 없으면 기약입니다. 다만 상수배는 쪼개기로 치지 않습니다. $f = c \cdot (c^{-1} f)$처럼 $0$이 아닌 상수를 떼어 내는 것은 언제나 가능한데, 이때 한쪽의 차수가 $f$의 차수와 같으므로 정의의 "둘 다 차수가 더 작다"에 걸리지 않습니다. 영이 아닌 상수 다항식은 가역원이므로, 이것이 (1)에서 기약 다항식이 정역 $F[X]$의 기약원과 같은 까닭입니다.

기약인지는 어느 체 위에서 보느냐에 달려 있습니다. $X^2 + [1]$은 $\mathbb{Z}_3$ 위에서 기약이고 $\mathbb{Z}_5$ 위에서는 기약이 아닙니다(아래 반례와 확인 질문). (9)는 한 체와 그 부분체 사이에서, 큰 체에서 쪼갤 수 없으면 작은 체에서도 쪼갤 수 없다는 한 방향을 말합니다. 작은 체에서 쪼갠 식은 큰 체에서도 그대로 쪼갠 식이기 때문입니다.

차수가 $2$나 $3$이면 쪼갠 두 인수 가운데 하나는 반드시 일차식이고, 일차식은 근을 하나 가지므로 "근이 없다"가 곧 "쪼갤 수 없다"입니다((5)). 차수가 $4$인 다항식에서는 이 판정이 통하지 않을 수 있습니다. 근이 없는 이차식 두 개의 곱은 근이 없지만 쪼개진 것입니다(아래 반례).

## 증명

:::idea
모든 판정은 차수의 덧셈 $\deg(gh) = \deg g + \deg h$에서 나온다. 가역원이 정확히 차수 $0$인 다항식이므로 "가역원이 아닌 인수"는 "차수가 $1$ 이상인 인수"와 같고, 차수를 보존하는 동형사상은 쪼갠 식을 쪼갠 식으로 옮긴다.
:::

:::hint
(5)에서 차수의 합이 $2$나 $3$인데 두 인수의 차수가 모두 $2$ 이상이면 합은 $4$ 이상입니다.
:::

:::hint
(7)은 계수 사상이 (6)의 $\theta$의 조건을 만족한다는 것을 대입 준동형의 (3)으로 보이면 됩니다.
:::

:::proof
**쓰는 사실.** "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "나누어떨어짐의 (n)"은 [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (n)이다. 체는 정역이므로([[field|가역원과 체]]의 (3)) 차수의 (6)에 의해 체 위의 다항식환은 정역이고, 영이 아닌 $g$, $h$에서 $gh \ne 0$, $\deg(gh) = \deg g + \deg h$이다. 차수의 (7)에 의해 그 가역원은 정확히 영이 아닌 상수 다항식이고, 차수의 (2)에 의해 영이 아닌 다항식이 상수인 것은 정확히 차수가 $0$일 때이다. 정수의 순서는 [[prime-number|소수]]의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1)을 쓴다.

**2.** $f = gh$이고 $g, h$가 영이 아니며 $\deg g \ge 1$, $\deg h \ge 1$이라 하자. $\deg f = \deg g + \deg h$이므로 $\deg g = \deg f - \deg h \le \deg f - 1 < \deg f$이고, 같은 계산으로 $\deg h = \deg f - \deg g < \deg f$이다. 따라서 $f$는 기약이 아니다. 거꾸로 $f$가 기약이 아니라 하자. $f \ne 0$이고 $\deg f \ge 1$이므로 정의에 의해 $f = gh$이고 $\deg g < \deg f$, $\deg h < \deg f$인 영이 아닌 $g, h$가 있다. $\deg h = \deg f - \deg g > 0$이므로 (Z1)에 의해 $\deg h \ge 1$이고, $\deg g = \deg f - \deg h > 0$이므로 $\deg g \ge 1$이다.

**1.** 앞의 두 문장은 쓰는 사실이다. $f$가 기약이라 하자. $f \ne 0$이고, $\deg f \ge 1$이므로 상수가 아니어서 가역원이 아니다. $f = gh$라 하면 $f \ne 0$이므로 $g, h \ne 0$이다. $g$도 $h$도 가역원이 아니면 둘 다 차수가 $0$이 아니어서 $\deg g \ge 1$, $\deg h \ge 1$이고, (2)에 의해 $f$가 기약이 아니게 되어 어긋난다. 따라서 $g$나 $h$가 가역원이고, $f$는 기약원이다. 거꾸로 $f$가 기약원이라 하자. $f \ne 0$이고 $f$는 가역원이 아니므로 $f$는 상수가 아니어서 $\deg f \ge 1$이다. $f = gh$이고 $\deg g < \deg f$, $\deg h < \deg f$인 영이 아닌 $g, h$가 있다면, 기약원이므로 $g$나 $h$가 가역원, 곧 차수 $0$이다. $\deg g = 0$이면 $\deg h = \deg f$가 되어 $\deg h < \deg f$와 어긋나고((L1)), $\deg h = 0$이어도 같은 식으로 어긋난다. 따라서 그런 $g, h$는 없고 $f$는 기약이다.

**3.** (i) 정의는 $f \ne 0$과 $\deg f \ge 1$을 요구하고, 영이 아닌 상수 다항식의 차수는 $0$이다. (ii) $\deg f = 1$인데 기약이 아니면 (2)에 의해 $1 = \deg g + \deg h \ge 1 + 1 = 2$가 되어 어긋난다. (iii) 상수 다항식 $c$는 가역원이므로 $cf$는 $f$와 연관원이고, 나누어떨어짐의 (4)와 (1)에 의해 $cf$는 기약원, 곧 기약이다. $c$가 $f$의 최고차계수이면 $c \ne 0$이므로 $c^{-1} f$는 기약이고, 주 아이디얼 정역의 (3)에 의해 모닉이며 $f$와 연관원인 모닉 다항식은 이것뿐이다. (iv) $h$는 기약이므로 $h \ne 0$이고 $\deg h \ge 1$이어서 가역원이 아니다. $m$은 (1)에 의해 기약원이고 $h \mid m$이므로 나누어떨어짐의 (5)에 의해 $h$는 $m$과 연관원이다. 주 아이디얼 정역의 (3)을 $f = m$, $c = 1$에 쓰면 $m$과 연관원인 모닉 다항식은 $m$뿐이므로 $h = m$이다.

**4.** [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (1)과 (2)에 의해 $f = (X - c)q + f(c) = (X - c)q$인 $q$가 있고, 같은 항목의 (3)에 의해 $\deg q = \deg f - 1 \ge 1$이다. 차수의 (2)에 의해 $\deg(X - c) = 1$이므로, (2)에 의해 $f$는 기약이 아니다.

**5.** $f$가 기약이면 (4)의 대우에 의해 근이 없다. 거꾸로 $f$가 기약이 아니라 하자. (2)에 의해 $f = gh$이고 $\deg g, \deg h \ge 1$이며 $\deg g + \deg h = \deg f \le 3$이다. 둘 다 $2$ 이상이면 합이 $4$ 이상이 되므로, $\deg g = 1$이거나 $\deg h = 1$이다. $f = gh = hg$이므로 필요하면 $g$와 $h$의 이름을 바꿔 $\deg g = 1$이라 하자. 차수의 (1)에 의해 $g = a_0 + a_1 X$이고 $a_1 \ne 0$이다. $r = -a_1^{-1}a_0$으로 두면 대입의 (1)에 의해 $g(r) = a_0 + a_1(-a_1^{-1}a_0) = a_0 - a_0 = 0$이고, 대입의 (2)에 의해 $f(r) = g(r)h(r) = 0$이다. 곧 $f$는 근을 갖는다. 대우를 취하면 근이 없으면 기약이다.

**6.** [[ring-homomorphism|환 준동형]]의 (6)의 (iii)에 의해 $\theta^{-1} : K'[X] \to K[X]$는 환 동형사상이다. $G \ne 0$이면 $\theta^{-1}(G) \ne 0$이다. $\theta^{-1}(G) = 0$이면 $G = \theta(0) = 0$이기 때문이다(환 준동형의 (1)). 또 $\deg \theta^{-1}(G) = \deg \theta(\theta^{-1}(G)) = \deg G$이다. 나누어떨어짐: $f = gh$이면 $\theta(f) = \theta(g)\theta(h)$이므로 $\theta(g) \mid \theta(f)$이고, 거꾸로 $\theta(f) = \theta(g)H$이면 $f = g\,\theta^{-1}(H)$이다. 기약성: $f$가 $K$ 위에서 기약이라 하자. $f \ne 0$이므로 $\theta(f) \ne 0$이고 $\deg \theta(f) = \deg f \ge 1$이다. $\theta(f) = GH$이고 $\deg G, \deg H < \deg \theta(f)$인 영이 아닌 $G, H$가 있다면, $f = \theta^{-1}(G)\theta^{-1}(H)$이고 두 인수는 영이 아니며 차수가 각각 $\deg G$, $\deg H$로서 $\deg f$보다 작다. 이것은 $f$가 기약이라는 것과 어긋나므로 $\theta(f)$는 기약이다. $\theta^{-1}$도 같은 성질을 가지므로, 방금 보인 것을 $\theta^{-1}$과 $\theta(f)$에 쓰면 $\theta(f)$가 기약일 때 $f = \theta^{-1}(\theta(f))$가 기약이다.

**7.** $\sigma$는 전사이므로 환 준동형의 (5)에 의해 $\sigma(1) = 1$이다. $\sigma^{-1}$은 환 동형사상이고(환 준동형의 (6)의 (iii)) 같은 이유로 $\sigma^{-1}(1) = 1$이다. 대입의 (3)의 (ii)에 의해 계수 사상은 환 동형사상이고 역함수는 $\sigma^{-1}$의 계수 사상이다. (i) $\sigma$는 단사이므로 대입의 (3)의 (i)에 의해 $f \ne 0$이면 $f^{\sigma} \ne 0$이고 차수와 최고차계수는 말한 대로이다. 거꾸로 $f = 0$이면 $f^{\sigma} = 0$이다(환 준동형의 (1)). $f$가 모닉이면 최고차계수가 $\sigma(1) = 1$이다. $f^{\sigma}$가 모닉이면 $f$의 최고차계수 $a$가 $\sigma(a) = 1 = \sigma(1)$을 만족하고, $\sigma$가 단사이므로 $a = 1$이다. (ii)와 (iii) (i)에 의해 계수 사상은 (6)의 $\theta$의 조건을 만족하므로 (6)에서 나온다.

**8.** 대입의 (9)의 (i)과 (ii)에 의해 $\tau_c : F[X] \to F[X]$는 환 동형사상이고, 영이 아닌 $f$에서 $\tau_c(f) \ne 0$, $\deg \tau_c(f) = \deg f$이다. (6)을 $K = K' = F$, $\theta = \tau_c$에 쓴다.

**9.** [[subfield|부분체]]의 (3)의 (iv)에 의해 $K[X] \subseteq E[X]$이고 $K[X]$에서의 곱은 $E[X]$에서의 곱과 같으며, 차수의 (8)에 의해 $K[X]$의 원소가 영다항식인지와 그 차수는 $E[X]$에서 보아도 같다. $f$가 $K$ 위에서 기약이 아니라 하자. $f = 0$이거나 $\deg f = 0$이면 $E$ 위에서도 그렇다. 그렇지 않으면 $f = gh$이고 $\deg g, \deg h < \deg f$인 영이 아닌 $g, h \in K[X]$가 있고, 같은 등식과 차수가 $E[X]$에서도 성립하므로 $f$는 $E$ 위에서 기약이 아니다. 대우를 취하면 된다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_5$ 위의 $X^3 + [2]X + [1]$]
$\mathbb{Z}_5$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $f = X^3 + [2]X + [1]$의 차수는 $3$입니다. 다섯 원소를 넣으면
$$
\begin{aligned}
f([0]) &= [1], \quad f([1]) = [4], \\
f([2]) &= [13] = [3], \\
f([3]) &= [34] = [4], \\
f([4]) &= [73] = [3]
\end{aligned}
$$
이므로 근이 없고, (5)에 의해 $f$는 $\mathbb{Z}_5$ 위에서 기약입니다. (8)에 의해 $X$를 $X + [1]$로 바꾼 $f(X + [1]) = X^3 + [3]X^2 + [5]X + [4] = X^3 + [3]X^2 + [4]$도 기약입니다.
:::

:::counterexample[근이 없어도 기약이 아닌 $\mathbb{Z}_3$ 위의 사차 다항식]
$\mathbb{Z}_3$ 위에서 $g = X^2 + [1]$은 $g([0]) = [1]$, $g([1]) = [2]$, $g([2]) = [5] = [2]$이므로 근이 없고 (5)에 의해 기약입니다. $f = g^2 = X^4 + [2]X^2 + [1]$은 차수가 $4$이고, 모든 $r \in \mathbb{Z}_3$에서 $f(r) = g(r)^2$(대입 준동형의 (2))는 $0$이 아닌 원소의 제곱이므로 $\mathbb{Z}_3$이 정역이라는 것에 의해 $0$이 아닙니다. 곧 $f$는 근이 없습니다. 그러나 $f = gg$이고 $\deg g = 2 \ge 1$이므로 (2)에 의해 $f$는 기약이 아닙니다. (5)의 판정은 차수가 $4$인 이 다항식에서 통하지 않습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5[X]$에서 $X^2 + [1]$과 $X^2 + [2]$는 기약인가?]
$X^2 + [1]$에 $[2]$를 넣으면 $[5] = [0]$이므로 근이 있고, (4)에 의해 기약이 아닙니다. 실제로 $(X - [2])(X - [3]) = X^2 - [5]X + [6] = X^2 + [1]$입니다. $X^2 + [2]$에 $[0], [1], [2], [3], [4]$를 넣으면 $[2], [3], [6] = [1], [11] = [1], [18] = [3]$이므로 근이 없고, (5)에 의해 기약입니다.
:::

:::check[체 $F$ 위의 기약 다항식 $f$의 차수가 $2$ 이상이면 $f$는 $F$ 안에 근을 가질 수 있는가?]
가질 수 없습니다. 근 $c$가 있으면 (4)에 의해 $f = (X - c)q$, $\deg q \ge 1$로 쪼개져 기약이 아닙니다. 차수가 $1$인 기약 다항식 $aX + b$($a \ne 0$)는 근 $-a^{-1}b$를 가지므로, 이 물음의 "차수가 $2$ 이상"은 빼면 안 됩니다.
:::
