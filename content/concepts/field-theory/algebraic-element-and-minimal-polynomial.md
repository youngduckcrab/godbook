---
title: 대수적 원소와 최소다항식
title_en: Algebraic Elements and Minimal Polynomials
aliases: [대수적 원소, 초월적 원소, 대수적 확대, 최소다항식, 원소의 차수, algebraic element, transcendental element, algebraic extension, minimal polynomial, degree of an algebraic element]
kind: definition
field: field-theory
msc: ["12F05"]
level: undergrad
summary: 확대체 E 의 원소 α 가 F 위의 영이 아닌 다항식의 근일 때 F 위에서 대수적이라 한다. 그때 α 를 근으로 갖는 F 위의 다항식 전체는 하나의 모닉 다항식 m 이 만드는 주 아이디얼이고, 이 m 을 최소다항식이라 한다. m 은 기약이고, α 를 근으로 갖는 다항식은 정확히 m 의 배수이며, α 를 근으로 갖는 모닉 기약 다항식은 m 뿐이다. 서로 다른 두 모닉 기약 다항식은 공통 근을 갖지 않는다. 단사인 환 준동형 τ 로 옮기면 τ(α) 의 τ(F) 위의 최소다항식은 m 의 계수를 τ 로 옮긴 것이다.
requires: [integers-modulo-n, ring, ring-homomorphism, ideal, integral-domain, field, finite-integral-domain-is-a-field, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, divisibility-in-integral-domains, principal-ideal-domain, irreducible-polynomial, irreducible-polynomial-and-maximal-ideal, subfield, extension-field, kronecker-theorem]
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Algebraic Elements 의 정의 (p.262), Example 21.8 (p.263), Theorem 21.10 과 최소다항식·원소의 차수의 정의 (p.263), Corollary 21.26 의 증명 (p.268); 23.1절 Field Automorphisms, 켤레(conjugate)의 정의 (p.294); 23.2절 The Fundamental Theorem, Theorem 23.19 의 증명 (p.299); 21.5절 Exercises, 연습문제 1 (p.275), 28 (p.277); 22.4절 Exercises, 연습문제 7 (p.289)"
    checked: original
    note: "대수적·초월적·대수적 확대의 정의는 출처 p.262 의 'An element α in an extension field E over F is algebraic over F if f(α) = 0 for some nonzero polynomial f(x) ∈ F[x]. An element in E that is not algebraic over F is transcendental over F. An extension field E of a field F is an algebraic extension of F if every element in E is algebraic over F' 와 같다. (3)–(5)는 출처 Theorem 21.10(p.263, 'there is a unique irreducible monic polynomial p(x) ∈ F[x] of smallest degree such that p(α) = 0. If f(x) is another polynomial in F[x] such that f(α) = 0, then p(x) divides f(x)')과 그 뒤의 최소다항식과 'the degree of α over F' 의 정의(p.263)이다. 출처의 증명은 대입 준동형의 핵이 주 아이디얼이라는 데서 시작하고 'Any other polynomial of the same degree having α as a zero must have the form βp(x)' 라고 적는다. 이 항목은 핵을 만드는 모닉 다항식의 유일성을 주 아이디얼 정역의 (4)로 얻고, 기약성은 E 가 정역이라는 것과 최소 차수로 보인다. (5)의 '모닉 기약 다항식이 α 를 근으로 가지면 최소다항식이다' 는 출처 21.5절 연습문제 28(p.277)이 가정 'Let α be a root of an irreducible monic polynomial p(x) ∈ F[x], with deg p = n' 에서 [F(α) : F] = n 을 묻는 데 쓰이는 사실이다. (3)의 (iii)은 출처 Theorem 23.19 의 증명(p.299)이 'Since deg g(x) ≤ deg f(x) and f(x) is the minimal polynomial of α, f(x) = g(x)' 라고 쓰는 꼴이다. (6)의 'α ∈ F 이면 최소다항식은 X − α' 는 출처 Corollary 21.26 의 증명(p.268)이 'For α ∈ E, the minimal polynomial of α is x − α. Therefore, α ∈ F' 라고 쓰는 사실이다. (8)은 출처 23.1절(p.294)이 같은 최소다항식을 갖는 두 원소를 켤레(conjugate)라 부르는 것과 닿아 있다. 예시 '$\\mathbb{Z}_3$ 위의 $X^2 + X + [2]$로 만든 체에서 $1 + \\alpha$의 최소다항식' 은 출처 21.5절 연습문제 1(p.275, 주어진 수의 Q 위의 최소다항식을 구하라)과 같은 종류의 물음이고, 출처 Example 21.8(p.263)이 √(√2 + √3) 의 거듭제곱을 계산해 근이 되는 다항식을 찾는 것과 같은 발상이다. 반례 '근이지만 최소다항식이 아닌 모닉 다항식 $X^3 + [1]$' 의 인수분해 X³ + 1 = (X + 1)(X² + X + 1) 은 출처 22.4절 연습문제 7(p.289, Z_2[x] 에서 x⁵ − 1, x⁹ − 1 등을 인수분해하라)과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예 다섯의 계산 재계산, 체 준동형의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체와 확대체는 [[subfield|부분체]]와 [[extension-field|확대체]]의 뜻이다. 다항식환 $F[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값, 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이고, 아이디얼과 주 아이디얼 $mF[X]$는 [[ideal|아이디얼]]의 것이다.

**대입.** 아래에서 $E$는 체이고 $F$는 $E$의 부분체이다. 부분체의 (3)의 (iv)에 의해 $F[X] \subseteq E[X]$이다. $f \in F[X]$와 $\alpha \in E$에 대하여 $f(\alpha)$는 $f$를 $E[X]$의 원소로 보고 대입한 값이고, $f(\alpha) = 0$일 때 $\alpha$를 $f$의 ($E$ 안의) 근이라 한다.

1. (대수적, 초월적) $\alpha \in E$가 **$F$ 위에서 대수적**(algebraic over $F$)인 것은 정확히 $f(\alpha) = 0$인 영이 아닌 $f \in F[X]$가 있을 때이다. $F$ 위에서 대수적이 아닌 $E$의 원소를 **$F$ 위에서 초월적**(transcendental over $F$)이라 한다. $E$의 모든 원소가 $F$ 위에서 대수적일 때 $E$를 $F$의 **대수적 확대**(algebraic extension)라 한다. $F$의 모든 원소 $a$는 $F$ 위에서 대수적이다. $X - a$는 영이 아니고 $a$를 근으로 갖는다.
2. (대입 준동형과 그 핵) $\alpha \in E$라 하자. $f \in F[X]$에 $f(\alpha)$를 대응시키는 함수 $F[X] \to E$는 $1$을 $1$로 보내는 환 준동형이고, 상수 다항식 $c$를 $c$로, $X$를 $\alpha$로 보낸다. 그 핵
   $$
   I_{\alpha} = \{f \in F[X] : f(\alpha) = 0\}
   $$
   은 $F[X]$의 아이디얼이고 $1 \notin I_{\alpha}$이다. $\alpha$가 $F$ 위에서 대수적인 것은 정확히 $I_{\alpha} \ne \{0\}$일 때이다. ($I_{\alpha}$는 $F$와 $\alpha$에 따라 정해지는 이 항목 안의 이름이다.)
3. (최소다항식) $\alpha \in E$가 $F$ 위에서 대수적이라 하자. 그러면 $I_{\alpha} = mF[X]$인 모닉 다항식 $m \in F[X]$가 정확히 하나 있다. 이 $m$을 $\alpha$의 $F$ 위의 **최소다항식**(minimal polynomial)이라 하고, $\deg m$을 $\alpha$의 $F$ 위의 **차수**(degree)라 한다. 다음이 성립한다.
   - (i) $m(\alpha) = 0$이고 $\deg m \ge 1$이며, $m$은 $F$ 위에서 기약이다.
   - (ii) $f(\alpha) = 0$인 영이 아닌 모든 $f \in F[X]$에서 $\deg m \le \deg f$이다.
   - (iii) $m$은 $\alpha$를 근으로 갖는 $F$ 위의 모닉 다항식 가운데 차수가 가장 작은 것으로서 하나뿐이다. 곧 모닉 $g \in F[X]$가 $g(\alpha) = 0$이고 $\deg g = \deg m$이면 $g = m$이다.
4. (근이 되는 다항식) $\alpha$가 $F$ 위에서 대수적이고 $m$이 그 최소다항식이면, $f \in F[X]$에 대하여 다음 세 조건은 서로 동치이다: $f(\alpha) = 0$이다, $F[X]$에서 $m \mid f$이다, $E[X]$에서 $m \mid f$이다.
5. (모닉 기약 다항식) $h \in F[X]$가 $F$ 위의 모닉 기약 다항식이고 $\alpha \in E$가 $h$의 근이면, $\alpha$는 $F$ 위에서 대수적이고 $h$는 $\alpha$의 $F$ 위의 최소다항식이다.
6. (차수 $1$) $\alpha \in E$에 대하여 다음 세 조건은 서로 동치이다: $\alpha \in F$이다, $\alpha$가 $F$ 위에서 대수적이고 그 최소다항식이 $X - \alpha$이다, $\alpha$가 $F$ 위에서 대수적이고 그 $F$ 위의 차수가 $1$이다.
7. (사이의 체) $K$가 $E$의 부분체이고 $F \subseteq K$라 하자([[extension-field|확대체]]의 (1)의 (ii)에 의해 $F$는 $K$의 부분체이다). $\alpha \in E$가 $F$ 위에서 대수적이고 $m$이 그 $F$ 위의 최소다항식이면, $\alpha$는 $K$ 위에서도 대수적이고, $\alpha$의 $K$ 위의 최소다항식 $m_K$는 $K[X]$에서 $m$을 나누며 $\deg m_K \le \deg m$이다.
8. (공통 근) $h$와 $g$가 $F$ 위의 모닉 기약 다항식이고 $h \ne g$이면, $h(c) = 0$이고 $g(c) = 0$인 $c \in E$는 없다.
9. (크로네커의 체) $K$가 체이고 $h \in K[X]$가 기약이며, $L$, $\iota$, $\alpha$가 [[kronecker-theorem|크로네커 정리]]의 설정의 것이라 하자. $c$가 $h$의 최고차계수이고 $u = c^{-1}h$라 하면, $u^{\iota}$는 $\iota(K)[X]$의 원소이고, $\alpha$는 $\iota(K)$ 위에서 대수적이며 그 최소다항식은 $u^{\iota}$이다. 특히 $\alpha$의 $\iota(K)$ 위의 차수는 $\deg h$이고, $h$가 모닉이면 최소다항식은 $h^{\iota}$이다.
10. (단사인 준동형으로 옮기기) $E'$이 체이고 $\tau : E \to E'$이 단사인 환 준동형이라 하자. [[extension-field|확대체]]의 (5)의 (i)에 의해 $\tau(F)$는 $E'$의 부분체이다. $\alpha \in E$가 $F$ 위에서 대수적이고 $m$이 그 $F$ 위의 최소다항식이면, $m$을 $E[X]$의 원소로 보고 계수를 $\tau$로 옮긴 $m^{\tau} \in E'[X]$는 $\tau(F)[X]$의 원소이고, $\tau(\alpha)$는 $\tau(F)$ 위에서 대수적이며 그 최소다항식은 $m^{\tau}$이다. 특히 $\tau(\alpha)$의 $\tau(F)$ 위의 차수는 $\alpha$의 $F$ 위의 차수와 같다.
:::

:::english
Fields are as in units and fields; subfields and extension fields are as in the entries on subfields and extension fields. The polynomial ring $F[X]$, constant polynomials and the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of polynomial rings; degree $\deg$, leading coefficients and monic polynomials are those of degrees of polynomials; values, roots and polynomials $f^{\varphi}$ with transported coefficients are those of evaluation homomorphisms. Irreducible is meant as for irreducible polynomials; ideals and principal ideals $mF[X]$ are those of ideals.

**Evaluation.** Below, $E$ is a field and $F$ is a subfield of $E$. By item (3)(iv) of subfields, $F[X] \subseteq E[X]$. For $f \in F[X]$ and $\alpha \in E$, $f(\alpha)$ is the value obtained by regarding $f$ as an element of $E[X]$, and $\alpha$ is called a root of $f$ (in $E$) when $f(\alpha) = 0$.

1. (Algebraic, transcendental) $\alpha \in E$ is **algebraic over $F$** if and only if there is a nonzero $f \in F[X]$ with $f(\alpha) = 0$. An element of $E$ that is not algebraic over $F$ is called **transcendental over $F$**. When every element of $E$ is algebraic over $F$, $E$ is called an **algebraic extension** of $F$. Every element $a$ of $F$ is algebraic over $F$: $X - a$ is nonzero and has $a$ as a root.
2. (The evaluation homomorphism and its kernel) Let $\alpha \in E$. The function $F[X] \to E$ sending $f \in F[X]$ to $f(\alpha)$ is a ring homomorphism sending $1$ to $1$; it sends a constant polynomial $c$ to $c$ and $X$ to $\alpha$. Its kernel
   $$
   I_{\alpha} = \{f \in F[X] : f(\alpha) = 0\}
   $$
   is an ideal of $F[X]$ and $1 \notin I_{\alpha}$. $\alpha$ is algebraic over $F$ if and only if $I_{\alpha} \ne \{0\}$. ($I_{\alpha}$ is a name local to this entry, determined by $F$ and $\alpha$.)
3. (Minimal polynomial) Let $\alpha \in E$ be algebraic over $F$. Then there is exactly one monic polynomial $m \in F[X]$ with $I_{\alpha} = mF[X]$. This $m$ is called the **minimal polynomial** of $\alpha$ over $F$, and $\deg m$ is called the **degree** of $\alpha$ over $F$. The following hold.
   - (i) $m(\alpha) = 0$, $\deg m \ge 1$, and $m$ is irreducible over $F$.
   - (ii) $\deg m \le \deg f$ for every nonzero $f \in F[X]$ with $f(\alpha) = 0$.
   - (iii) $m$ is the unique monic polynomial over $F$ of smallest degree having $\alpha$ as a root; that is, if a monic $g \in F[X]$ satisfies $g(\alpha) = 0$ and $\deg g = \deg m$, then $g = m$.
4. (Polynomials with root $\alpha$) If $\alpha$ is algebraic over $F$ with minimal polynomial $m$, then for $f \in F[X]$ the following three conditions are equivalent: $f(\alpha) = 0$; $m \mid f$ in $F[X]$; $m \mid f$ in $E[X]$.
5. (Monic irreducible polynomials) If $h \in F[X]$ is a monic irreducible polynomial over $F$ and $\alpha \in E$ is a root of $h$, then $\alpha$ is algebraic over $F$ and $h$ is the minimal polynomial of $\alpha$ over $F$.
6. (Degree $1$) For $\alpha \in E$ the following three conditions are equivalent: $\alpha \in F$; $\alpha$ is algebraic over $F$ with minimal polynomial $X - \alpha$; $\alpha$ is algebraic over $F$ of degree $1$ over $F$.
7. (Fields in between) Let $K$ be a subfield of $E$ with $F \subseteq K$ (by item (1)(ii) of extension fields, $F$ is a subfield of $K$). If $\alpha \in E$ is algebraic over $F$ with minimal polynomial $m$ over $F$, then $\alpha$ is also algebraic over $K$, and the minimal polynomial $m_K$ of $\alpha$ over $K$ divides $m$ in $K[X]$, with $\deg m_K \le \deg m$.
8. (Common roots) If $h$ and $g$ are monic irreducible polynomials over $F$ with $h \ne g$, then there is no $c \in E$ with $h(c) = 0$ and $g(c) = 0$.
9. (Kronecker's field) Let $K$ be a field, $h \in K[X]$ irreducible, and $L$, $\iota$, $\alpha$ as in the setting of Kronecker's theorem. If $c$ is the leading coefficient of $h$ and $u = c^{-1}h$, then $u^{\iota}$ is an element of $\iota(K)[X]$, $\alpha$ is algebraic over $\iota(K)$, and its minimal polynomial is $u^{\iota}$. In particular the degree of $\alpha$ over $\iota(K)$ is $\deg h$, and if $h$ is monic, the minimal polynomial is $h^{\iota}$.
10. (Transport by an injective homomorphism) Let $E'$ be a field and $\tau : E \to E'$ an injective ring homomorphism. By item (5)(i) of extension fields, $\tau(F)$ is a subfield of $E'$. If $\alpha \in E$ is algebraic over $F$ with minimal polynomial $m$ over $F$, then the polynomial $m^{\tau} \in E'[X]$, obtained by regarding $m$ as an element of $E[X]$ and transporting its coefficients by $\tau$, is an element of $\tau(F)[X]$; $\tau(\alpha)$ is algebraic over $\tau(F)$, and its minimal polynomial is $m^{\tau}$. In particular the degree of $\tau(\alpha)$ over $\tau(F)$ equals the degree of $\alpha$ over $F$.
:::

## 직관

확대체 $E$의 원소 $\alpha$가 $F$ 위에서 대수적이라는 것은, 계수가 $F$의 원소인 영이 아닌 다항식 가운데 $\alpha$를 근으로 갖는 것이 있다는 뜻입니다. 그런 다항식은 많지만, 그 가운데 나머지를 모두 나누는 모닉 다항식이 꼭 하나 있습니다. 정수에서 "$n$으로 나누어떨어지는 수 전체"가 $n\mathbb{Z}$인 것처럼, "$\alpha$를 근으로 갖는 다항식 전체" $I_{\alpha}$는 하나의 다항식 $m$의 배수 전체이고((3)), 모닉으로 맞추면 그 $m$이 하나로 정해집니다. 이 비유에서 $n$이 최소다항식 $m$에, "나누어떨어진다"가 "$\alpha$가 근이다"에 해당합니다((4)).

최소다항식은 기약입니다. $m = uv$로 쪼개지면 $u(\alpha)v(\alpha) = 0$이고, 체 $E$에는 영인자가 없어 $u$나 $v$가 $\alpha$를 근으로 가지는데, 그것은 $m$보다 차수가 작습니다. 거꾸로 $\alpha$를 근으로 갖는 모닉 기약 다항식은 $m$의 배수이면서 더 쪼개지지 않으므로 $m$ 자신입니다((5)). 그래서 서로 다른 두 모닉 기약 다항식은 어떤 확대체에서도 공통 근을 가질 수 없습니다((8)).

크로네커 정리로 만든 체에서 $\alpha = X + hK[X]$의 최소다항식은 $h$를 모닉으로 맞춰 계수를 옮긴 것입니다((9)). $h$를 근이 있는 곳으로 옮기는 그 정리의 구성이, $\alpha$의 입장에서는 최소다항식이 $h$에서 오는 원소를 만든 것이 됩니다.

## 증명

:::idea
대입 준동형의 핵 $I_{\alpha}$는 주 아이디얼 정역 $F[X]$의 아이디얼이므로 모닉 생성원 $m$을 갖는다. 기약성은 $E$가 정역이라는 것과 $m$의 차수가 가장 작다는 것에서 나오고, (5)와 (8)은 "모닉 기약 다항식이 다른 모닉 기약 다항식을 나누면 둘은 같다"에서 나온다.
:::

:::hint
(3)의 (i)에서 $\deg m \ge 1$은 $1 \notin I_{\alpha}$에서 나옵니다. 모닉인 상수 다항식은 $1$뿐입니다.
:::

:::hint
(9)에서는 [[kronecker-theorem|크로네커 정리]]의 (1)의 (iv)로 $u^{\iota}(\alpha) = 0$을 얻고, $u^{\iota}$가 $\iota(K)$ 위에서 기약이라는 것은 $\iota : K \to \iota(K)$가 환 동형사상이라는 데서 얻습니다.
:::

:::proof
**쓰는 사실.** "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "주 아이디얼 정역의 (n)"은 [[principal-ideal-domain|주 아이디얼 정역]]의 (n)이다. [[field|가역원과 체]]의 (3)에 의해 $E$는 정역이고, 주 아이디얼 정역의 (2)에 의해 $F[X]$는 주 아이디얼 정역이다. [[polynomial-ring|다항식환]]의 (7)의 (i), (ii)에 의해 $F[X]$의 원소의 계수, 합, 곱, 상수 다항식, 부정원은 $E[X]$의 원소로 보아도 같고, 차수의 (8)에 의해 차수, 최고차계수, 모닉인지도 같다.

**1.** $X - a$는 차수의 (2)에 의해 차수 $1$인 모닉 다항식이므로 영이 아니고, 대입의 (1)에 의해 $(X - a)(a) = a - a = 0$이다.

**2.** 대입의 (2)에 의해 $r = \alpha$에서의 대입 준동형 $E[X] \to E$는 $1$을 $1$로 보내는 환 준동형이다. $F[X]$는 $E[X]$의 부분환이므로 [[ring-homomorphism|환 준동형]]의 (3)의 (ii)에 의해 그 제한 $F[X] \to E$도 환 준동형이고, 이것이 $f$에 $f(\alpha)$를 대응시키는 함수이다. $F[X]$의 $1$은 $E[X]$의 $1$이므로 $1$을 $1$로 보낸다. 대입의 (1)에 의해 상수 다항식 $c$의 값은 $c$이고 $X$의 값은 $\alpha$이다. [[ideal|아이디얼]]의 (5)에 의해 핵 $I_{\alpha}$는 아이디얼이다. $1(\alpha) = 1 \ne 0$이므로 $1 \notin I_{\alpha}$이다. $\alpha$가 대수적인 것은 정의에 의해 $I_{\alpha}$에 영이 아닌 원소가 있을 때이고, $0 \in I_{\alpha}$이므로 그것은 $I_{\alpha} \ne \{0\}$일 때이다.

**3.** (2)에 의해 $I_{\alpha} \ne \{0\}$이므로 주 아이디얼 정역의 (4)의 (i)에 의해 $I_{\alpha} = mF[X]$인 모닉 $m$이 정확히 하나 있고, $m \in I_{\alpha}$이며 $I_{\alpha}$의 영이 아닌 모든 원소 $f$에서 $\deg m \le \deg f$이다. 이것이 (ii)이다.

(i) $m \in I_{\alpha}$이므로 $m(\alpha) = 0$이다. $1 \notin I_{\alpha}$이므로 $I_{\alpha} \ne F[X]$이고, 주 아이디얼 정역의 (4)의 (i)에 의해 $m \ne 1$이다. $\deg m = 0$이면 차수의 (2)에 의해 $m$은 상수 다항식이고 최고차계수가 $1$이므로 $m = 1$이 되어 어긋난다. 따라서 $\deg m \ge 1$이다. $m$이 기약이 아니라 하면 기약의 (2)에 의해 $m = uv$이고 $1 \le \deg u < \deg m$, $1 \le \deg v < \deg m$인 영이 아닌 $u$, $v$가 있다. (2)의 환 준동형에 의해 $u(\alpha)v(\alpha) = m(\alpha) = 0$이고, $E$는 정역이므로 $u(\alpha) = 0$이거나 $v(\alpha) = 0$이다. 어느 쪽이든 $\alpha$를 근으로 갖는 영이 아닌 다항식의 차수가 $\deg m$보다 작아 (ii)와 어긋난다. 따라서 $m$은 기약이다.

(iii) $g$가 모닉이고 $g(\alpha) = 0$, $\deg g = \deg m$이라 하자. $g \in I_{\alpha} = mF[X]$이므로 $g = mq$인 $q$가 있고, $g \ne 0$이므로 $q \ne 0$이며, 차수의 (5)에 의해 $\deg g = \deg m + \deg q$이므로 $\deg q = 0$이다. 차수의 (5)에 의해 $g$의 최고차계수 $1$은 $m$의 최고차계수 $1$과 $q$의 최고차계수의 곱이므로 $q$의 최고차계수는 $1$이고, 차수의 (2)에 의해 $q = 1$이다. 따라서 $g = m$이다.

**4.** $f(\alpha) = 0$인 것은 정확히 $f \in I_{\alpha} = mF[X]$일 때이고, [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (1)에 의해 정확히 $F[X]$에서 $m \mid f$일 때이다. $m \ne 0$이므로 [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (6)에 의해 그것은 정확히 $E[X]$에서 $m \mid f$일 때이다.

**5.** 기약의 정의에 의해 $h \ne 0$이므로 $\alpha$는 대수적이다. $m$을 최소다항식이라 하면 (4)에 의해 $F[X]$에서 $m \mid h$이다. (3)의 (i)에 의해 $m$은 모닉 기약 다항식이므로 기약의 (3)의 (iv)에 의해 $m = h$이다.

**6.** $\alpha \in F$이면 (1)에 의해 $\alpha$는 대수적이고 $X - \alpha \in F[X]$는 $\alpha$를 근으로 갖는 모닉 다항식이며, 기약의 (3)의 (ii)에 의해 기약이다. (5)에 의해 최소다항식은 $X - \alpha$이다. 최소다항식이 $X - \alpha$이면 차수의 (2)에 의해 그 차수는 $1$이다. 마지막으로 $\alpha$의 차수가 $1$이면 최소다항식 $m$은 차수 $1$인 모닉 다항식이므로 차수의 (1)에 의해 $m = X + b$인 $b \in F$가 있다. $0 = m(\alpha) = \alpha + b$이므로 $\alpha = -b \in F$이다.

**7.** $m \in F[X] \subseteq K[X]$이고([[subfield|부분체]]의 (3)의 (iv)를 체 $K$와 부분체 $F$에 쓴 것) $m \ne 0$, $m(\alpha) = 0$이다. $K[X]$의 원소로 본 $m$을 $E[X]$에 넣어 대입한 값도 같은 $m(\alpha)$이므로 $\alpha$는 $K$ 위에서 대수적이다. (4)를 $K$ 위에서 쓰면 $K[X]$에서 $m_K \mid m$이고, (3)의 (ii)를 $K$ 위에서 쓰면 $\deg m_K \le \deg m$이다.

**8.** $h(c) = 0$이고 $g(c) = 0$인 $c \in E$가 있다고 하자. (5)에 의해 $h$와 $g$는 둘 다 $c$의 $F$ 위의 최소다항식이고, (3)에 의해 최소다항식은 하나뿐이므로 $h = g$가 되어 가정과 어긋난다.

**9.** 크로네커 정리의 (1)의 (ii)에 의해 $\iota$는 $\iota(1) = 1$인 단사인 환 준동형이고 $\iota(K)$는 $L$의 부분체이다. [[extension-field|확대체]]의 (3)의 (iii)에 의해 $\iota$를 함수 $\sigma : K \to \iota(K)$로 선언한 것은 환 동형사상이다. 기약의 (3)의 (iii)에 의해 $u = c^{-1}h$는 $K$ 위의 모닉 기약 다항식이고, 기약의 (7)에 의해 $u^{\sigma} \in \iota(K)[X]$는 $\iota(K)$ 위의 모닉 기약 다항식이다. 모든 $n$에서 $\operatorname{coef}_n(u^{\sigma}) = \sigma(\operatorname{coef}_n(u)) = \iota(\operatorname{coef}_n(u)) = \operatorname{coef}_n(u^{\iota})$이므로, 다항식환의 (7)의 (i)에 의해 $L[X]$의 원소로 본 $u^{\sigma}$는 $u^{\iota}$와 같다. 따라서 $u^{\iota}$는 $\iota(K)[X]$의 원소이고 $\iota(K)$ 위의 모닉 기약 다항식이다. $u = c^{-1}h = h\,c^{-1}$이므로 $K[X]$에서 $h \mid u$이다. 크로네커 정리의 (1)의 (iv)에 의해 $u^{\iota}(\alpha) = 0$이고, (5)를 체 $L$, 부분체 $\iota(K)$, 다항식 $u^{\iota}$에 쓰면 $\alpha$는 $\iota(K)$ 위에서 대수적이고 최소다항식은 $u^{\iota}$이다. [[evaluation-homomorphism|대입 준동형]]의 (3)의 (i)에 의해 $\deg u^{\iota} = \deg u$이고, 차수의 (5)에 의해 $\deg u = \deg h$이다. $h$가 모닉이면 $c = 1$이고 $u = h$이다.

**10.** [[extension-field|확대체]]의 (3)의 (ii)에 의해 $\tau(1) = 1$이므로 계수 사상 $m^{\tau}$가 정해진다. 모든 $n$에서 $\operatorname{coef}_n(m^{\tau}) = \tau(\operatorname{coef}_n(m))$이고 $\operatorname{coef}_n(m) \in F$이므로 계수는 모두 $\tau(F)$에 속하고, 다항식환의 (7)의 (i)에 의해 $m^{\tau} \in \tau(F)[X]$이다. $\tau$를 $F$로 제한한 함수는 환 준동형이고([[ring-homomorphism|환 준동형]]의 (3)의 (ii)) 단사이므로, 확대체의 (3)의 (iii)에 의해 그 공역을 $\tau(F)$로 선언한 함수 $\sigma : F \to \tau(F)$는 환 동형사상이다. 모든 $n$에서 $\operatorname{coef}_n(m^{\sigma}) = \sigma(\operatorname{coef}_n(m)) = \operatorname{coef}_n(m^{\tau})$이므로 다항식환의 (7)의 (i)에 의해 $E'[X]$의 원소로 본 $m^{\sigma}$는 $m^{\tau}$와 같다. (3)의 (i)에 의해 $m$은 $F$ 위의 모닉 기약 다항식이고, 기약의 (7)의 (i), (iii)에 의해 $m^{\sigma} = m^{\tau}$는 $\tau(F)$ 위의 모닉 기약 다항식이다. [[evaluation-homomorphism|대입 준동형]]의 (5)를 $E[X]$의 원소 $m$과 $\tau$에 쓰면 $m^{\tau}(\tau(\alpha)) = \tau(m(\alpha)) = \tau(0) = 0$이다. (5)를 체 $E'$, 부분체 $\tau(F)$, 다항식 $m^{\tau}$에 쓰면 $\tau(\alpha)$는 $\tau(F)$ 위에서 대수적이고 최소다항식은 $m^{\tau}$이다. 대입 준동형의 (3)의 (i)에 의해 $\deg m^{\tau} = \deg m$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3$ 위의 $X^2 + X + [2]$로 만든 체에서 $1 + \alpha$의 최소다항식]
$\mathbb{Z}_3$은 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $h = X^2 + X + [2]$는 $\mathbb{Z}_3$ 위에서 기약입니다($[0], [1], [2]$를 넣으면 $[2], [1], [2]$이고, [[irreducible-polynomial|기약 다항식]]의 (5)). $L$, $\iota$, $\alpha$를 [[kronecker-theorem|크로네커 정리]]의 설정의 것이라 하고, $L$의 원소 $\iota([a])$를 줄여 $a$로 씁니다($a = 0, 1, 2$). (9)에 의해 $\alpha$의 최소다항식은 $X^2 + X + 2$이고, $\alpha^2 = -\alpha - 2 = 2\alpha + 1$입니다($-1 = 2$, $-2 = 1$).

$\beta = 1 + \alpha$로 두면
$$
\begin{aligned}
\beta^2 &= 1 + 2\alpha + \alpha^2 \\
&= 1 + 2\alpha + 2\alpha + 1 = 2 + \alpha
\end{aligned}
$$
이고, $\beta^2 + 2\beta + 2 = (2 + \alpha) + (2 + 2\alpha) + 2 = 6 + 3\alpha = 0$입니다. 그래서 $\beta$는 $\iota(\mathbb{Z}_3)$ 위의 모닉 다항식 $q = X^2 + 2X + 2$의 근이고 대수적입니다. 크로네커 정리의 (2)의 (ii)에 의해 $\beta = \iota([1]) + \iota([1])\alpha$의 $\alpha$의 계수는 $[1] \ne [0]$이므로 $\beta \notin \iota(\mathbb{Z}_3)$이고, (6)에 의해 $\beta$의 최소다항식 $m$은 차수가 $1$이 아닙니다. (4)에 의해 $m \mid q$이고 (3)의 (ii)에 의해 $\deg m \le 2$이므로 $\deg m = 2$이며, (3)의 (iii)에 의해 $m = q = X^2 + 2X + 2$입니다. $\alpha$와 $\beta$는 같은 체의 원소이지만 최소다항식이 다릅니다.
:::

:::counterexample[근이지만 최소다항식이 아닌 모닉 다항식 $X^3 + [1]$]
$\mathbb{Z}_2$ 위의 $X^2 + X + [1]$로 만든 체에서 $\alpha^2 = \alpha + 1$이므로 $\alpha^3 = \alpha^2 + \alpha = 2\alpha + 1 = 1$이고, $\alpha$는 모닉 다항식 $X^3 + 1$(계수를 $\iota$로 옮긴 것)의 근입니다. 그러나 $\alpha$의 최소다항식은 (9)에 의해 $X^2 + X + 1$이고, $X^3 + 1 = (X + 1)(X^2 + X + 1)$입니다. $X^3 + 1$은 차수가 $3$이고 $1$을 근으로 가지므로($1 + 1 = 0$) 기약 다항식의 (4)에 의해 기약이 아니고, (5)의 가정을 만족하지 않습니다. 근이 되는 모닉 다항식은 최소다항식의 배수일 뿐이고((4)), 기약이어야 최소다항식입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5$의 원소 $[3]$의 $\mathbb{Z}_5$ 위의 최소다항식은 무엇인가?]
$X - [3] = X + [2]$입니다. $\mathbb{Z}_5$는 체이고(유한 정역은 체의 (3)) 자기 자신의 부분체이므로($E = F = \mathbb{Z}_5$) (6)에 의해 최소다항식은 $X - [3]$이고, $-[3] = [2]$입니다.
:::

:::check[$\mathbb{Z}_3$을 부분체로 갖는 체에서 $X^2 + [1]$과 $X^2 + X + [2]$가 공통 근을 가질 수 있는가?]
가질 수 없습니다. $X^2 + [1]$에 $[0], [1], [2]$를 넣으면 $[1], [2], [5] = [2]$이고, $X^2 + X + [2]$에 넣으면 $[2], [4] = [1], [8] = [2]$이므로 둘 다 $\mathbb{Z}_3$ 안에 근이 없습니다. 둘 다 차수가 $2$이므로 기약 다항식의 (5)에 의해 기약입니다. 둘은 서로 다른 모닉 기약 다항식이므로 (8)에 의해 $\mathbb{Z}_3$을 부분체로 갖는 어떤 체에서도 공통 근이 없습니다.
:::
