---
title: 크로네커 정리
title_en: Kronecker's Theorem
aliases: [크로네커의 정리, 체론의 기본정리, 근을 갖는 확대체의 존재, Kronecker's theorem, fundamental theorem of field theory]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "체 K 위의 기약 다항식 h 에 대하여 몫환 L = K[X]/hK[X] 는 체이고, 상수의 잉여류로 K 를 L 안에 옮기는 단사 ι 가 있으며, X 의 잉여류 α 는 계수를 ι 로 옮긴 h 의 근이다. L 의 원소는 차수가 deg h 보다 작은 다항식의 잉여류로 하나씩 쓰이고, d = deg h 일 때 1, α, …, α^(d−1) 이 ι(K) 위의 기저여서 [L : ι(K)] = d 이다. 따라서 차수가 1 이상인 모든 다항식은 어떤 체로 옮기면 근을 갖는다."
requires: [inverse-function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, well-ordering-principle, integers-modulo-n, ring, ring-homomorphism, field, finite-integral-domain-is-a-field, ideal, quotient-ring, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, divisibility-in-integral-domains, irreducible-polynomial, irreducible-polynomial-and-maximal-ideal, subfield, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, number-of-elements-of-finite-vector-space, extension-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Example 21.2 (p.261), Theorem 21.5 (p.261–262), Example 21.6 (p.262), Theorem 21.13 (p.263–264); 21.5절 Exercises, 연습문제 5, 15 (p.276), 24, 28 (p.277); 22.4절 Exercises, 연습문제 4, 5 (p.289); 17.3절 Irreducible Polynomials, Example 17.12 (p.215)"
    checked: original
    note: "출처 Theorem 21.5(p.261)는 'Let F be a field and let p(x) be a nonconstant polynomial in F[x]. Then there exists an extension field E of F and an element α ∈ E such that p(α) = 0' 이고, 출처는 앞 문단에서 이것을 '체론의 기본정리(Fundamental Theorem of Field Theory)라고도 부른다'고 적는다. 출처의 증명은 'Clearly, we can assume that p(x) is an irreducible polynomial' 로 시작하고, ψ(a) = a + ⟨p(x)⟩ 가 단사임을 보인 뒤 'we can identify F with the subfield {a + ⟨p(x)⟩ : a ∈ F} of E and view E as an extension field of F' (p.262)라고 F 와 그 상을 같은 것으로 본다. 이 항목은 같은 체와 같은 단사 ι 를 쓰되 두 체를 같은 것으로 보지 않고, 결론을 'ι 로 옮긴 h^ι 의 근' 으로 진술한다. 기약 인수가 있다는 것은 (3)의 (i)에서 정렬 원리로 증명한다. 출처는 p(α) = 0 을 계수마다 잉여류를 더하는 계산으로 보이고, 이 항목은 대입 준동형의 (7)(상수와 X 의 상으로 정해진다)로 f^ι(α) = f + I 를 한꺼번에 얻는다. (2)의 '하나뿐인 나머지 꼴' 과 기저 1, α, …, α^{d−1} 은 출처 Theorem 21.13(p.263–264)이 단순 확대 F(α) 에 대하여 증명하는 것과 같은 내용을 몫환 L 에서 나눗셈 정리로 직접 보인 것이고, [L : ι(K)] = d 는 출처 21.5절 연습문제 28(p.277, [F(α) : F] = n)과 같은 결론이다. 출처 Example 21.2(p.261)도 Z_2[x]/⟨x² + x + 1⟩ 의 원소를 나눗셈 정리의 나머지로 센다. 예시 '$\\mathbb{Z}_2$ 위의 $X^2 + X + [1]$로 만든 체' 는 출처 Example 21.2 와 같은 체이고, 역원 α⁻¹ = 1 + α 는 출처의 곱셈표(Figure 21.4)에 있다. 반례 '$\\mathbb{Z}_2$ 위의 $X^2 + [1]$로 만든 몫환' 은 기약이 아닌 다항식으로 만든 몫환을 보이는 것으로, 출처 21.5절 연습문제 24(p.277, Z_6[x] 의 다항식이 근을 갖는 환을 만들 수 있는가)와 연습문제 15(p.276, Z[x]/⟨x³ − 2⟩ 는 체인가)가 기약성이나 체의 가정을 묻는 것과 닿아 있다. 확인 질문 '$\\mathbb{Z}_3$ 위의 $X^3 + [2]X + [1]$로 만든 체의 원소는 몇 개인가?' 는 출처 22.4절 연습문제 5(p.289, 원소 27개인 체를 만들어라)와 같은 발상이고, 출처 21.5절 연습문제 5(p.276, Z_2[x]/⟨x³ + x + 1⟩ 은 원소 8개인 체)와 22.4절 연습문제 4(p.289)도 같은 종류의 물음이다. 확인 질문 '$\\mathbb{Z}_5$ 위의 $X^2 + [2]$로 만든 체에서 $\\alpha$의 역원은 무엇인가?' 는 출처 Example 21.2 의 곱셈표(Figure 21.4, p.261)에서 역원을 읽는 것과 같은 종류의 계산이다. 앞의 확인 질문에서 근이 없음을 값으로 확인해 기약성을 얻는 것은 출처 Example 17.12(p.215)가 Z_3 위의 삼차 다항식 x³ + x² + 2 에 쓰는 것과 같은 발상이다. 출처 Example 21.6(p.262)은 x⁵ + x⁴ + 1 의 두 기약 인수 가운데 어느 것으로도 근을 갖는 확대체를 만들 수 있다고 적는데, 이것은 (3)의 (ii)가 기약 인수를 하나도 고르지 않고 '나누는 모닉 기약 다항식 h 마다' 성립한다는 것과 같은 관찰이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예 다섯의 계산 재계산, 체 준동형의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]와 가역원, 역원 $a^{-1}$은 [[field|가역원과 체]]의 것이다. 다항식환 $K[X]$, 계수, 상수 다항식 $\kappa(c)$와 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값 $f(r)$, 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이고, 주 아이디얼 $hK[X]$, 몫환과 표준 준동형은 [[ideal|아이디얼]]과 [[quotient-ring|몫환]]의 것이다. 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이고, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 거듭제곱 $\alpha^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**설정.** $K$가 체이고 $h \in K[X]$가 $K$ 위에서 기약이며 $d = \deg h$라 하자. $I = hK[X]$, $L = K[X]/I$로 두고, $\pi : K[X] \to L$을 $\pi(f) = f + I$인 표준 준동형이라 하자. 함수 $\iota : K \to L$을 모든 $c \in K$에서 $\iota(c) = \pi(\kappa(c)) = c + I$로 정하고, $\alpha = \pi(X) = X + I$로 둔다.

1. (체와 근)
   - (i) $d \ge 1$이고, $L$은 체이다.
   - (ii) $\iota$는 단사인 환 준동형이고 $\iota(1) = 1$이다. 따라서 [[extension-field|확대체]]의 (3)의 (iii)에 의해 $\iota(K)$는 $L$의 부분체이고, $L$은 $\iota(K)$의 확대체이다.
   - (iii) 모든 $f \in K[X]$에서 $f^{\iota}(\alpha) = \pi(f) = f + I$이다.
   - (iv) $f \in K[X]$에 대하여 $f^{\iota}(\alpha) = 0$인 것은 정확히 $K[X]$에서 $h \mid f$일 때이다. 특히 $\alpha$는 $h^{\iota}$의 근이다.
2. (원소의 꼴과 기저)
   - (i) $L$의 모든 원소 $y$에 대하여, $y = \pi(r)$이고 $r = 0$이거나 $\deg r < d$인 $r \in K[X]$가 정확히 하나 있다. 이 $r$은 $y = \pi(f)$인 어떤 $f$를 $h$로 나눈 나머지이다.
   - (ii) $L = \{g^{\iota}(\alpha) : g \in K[X]\}$이고, $L$의 모든 원소는 $a_0, \dots, a_{d-1} \in K$에 대하여
     $$
     \sum_{k=0}^{d-1} \iota(a_k)\,\alpha^k
     $$
     의 꼴로 쓰이며, 이 $a_0, \dots, a_{d-1}$은 정확히 하나로 정해진다.
   - (iii) $k \in \{1, \dots, d\}$마다 $b_k = \alpha^{k-1}$로 둔 길이 $d$인 열 $b_1, \dots, b_d$, 곧 $1, \alpha, \dots, \alpha^{d-1}$은 $\iota(K)$ 위의 벡터공간 $L$의 기저이다. 따라서 $L$은 $\iota(K)$의 유한 확대이고 $[L : \iota(K)] = d$이다.
   - (iv) $\iota(K)$를 포함하고 $\alpha$를 원소로 갖는 $L$의 부분체는 $L$뿐이다.
3. (차수가 $1$ 이상인 다항식) $f \in K[X]$가 영다항식이 아니고 $\deg f \ge 1$이라 하자.
   - (i) $K[X]$에서 $f$를 나누는 모닉 기약 다항식이 있다. 또 $K[X]$에서 $f$를 나누는 기약 다항식 $g$는 모두 $1 \le \deg g \le \deg f$를 만족한다.
   - (ii) $h$가 $K[X]$에서 $f$를 나누면, 위 설정의 $L$, $\iota$, $\alpha$에 대하여 $f^{\iota}(\alpha) = 0$이고 $[L : \iota(K)] = \deg h \le \deg f$이다.
   - (iii) 따라서 체 $L$과 $\iota(1) = 1$인 단사인 환 준동형 $\iota : K \to L$과 $f^{\iota}$의 근 $\alpha \in L$이 있다. 여기서 $L$은 $\iota(K)$의 유한 확대이고 $[L : \iota(K)] \le \deg f$이다.
4. (유한체) $K$가 [[finite-set|유한집합]]이면 $L$은 유한집합이고 $|L| = |K|^{d}$이다. 여기서 오른쪽은 [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 정수의 거듭제곱이다.
:::

:::english
Fields, units and inverses $a^{-1}$ are those of units and fields. The polynomial ring $K[X]$, coefficients, constant polynomials $\kappa(c)$ and the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of polynomial rings; degree $\deg$, leading coefficients and monic polynomials are those of degrees of polynomials; values $f(r)$, roots and polynomials $f^{\varphi}$ with transported coefficients are those of evaluation homomorphisms. Irreducible is meant as for irreducible polynomials; principal ideals $hK[X]$, quotient rings and canonical homomorphisms are those of ideals and quotient rings. Subfields, extension fields, finite extensions and degrees $[E : F]$ are those of subfields and extension fields, and an extension field is regarded as a vector space with the operations of item (1)(i) of extension fields. Powers $\alpha^k$ are those of finite products in a commutative ring.

**Setting.** Let $K$ be a field, $h \in K[X]$ irreducible over $K$, and $d = \deg h$. Put $I = hK[X]$ and $L = K[X]/I$, and let $\pi : K[X] \to L$ be the canonical homomorphism $\pi(f) = f + I$. Define $\iota : K \to L$ by $\iota(c) = \pi(\kappa(c)) = c + I$ for every $c \in K$, and put $\alpha = \pi(X) = X + I$.

1. (A field and a root)
   - (i) $d \ge 1$, and $L$ is a field.
   - (ii) $\iota$ is an injective ring homomorphism with $\iota(1) = 1$. Hence, by item (3)(iii) of extension fields, $\iota(K)$ is a subfield of $L$ and $L$ is an extension field of $\iota(K)$.
   - (iii) For every $f \in K[X]$, $f^{\iota}(\alpha) = \pi(f) = f + I$.
   - (iv) For $f \in K[X]$, $f^{\iota}(\alpha) = 0$ if and only if $h \mid f$ in $K[X]$. In particular $\alpha$ is a root of $h^{\iota}$.
2. (Form of the elements and a basis)
   - (i) For every element $y$ of $L$ there is exactly one $r \in K[X]$ with $y = \pi(r)$ and $r = 0$ or $\deg r < d$. This $r$ is the remainder of the division by $h$ of any $f$ with $y = \pi(f)$.
   - (ii) $L = \{g^{\iota}(\alpha) : g \in K[X]\}$, and every element of $L$ can be written in the form
     $$
     \sum_{k=0}^{d-1} \iota(a_k)\,\alpha^k
     $$
     with $a_0, \dots, a_{d-1} \in K$, these $a_0, \dots, a_{d-1}$ being uniquely determined.
   - (iii) The list $b_1, \dots, b_d$ of length $d$ with $b_k = \alpha^{k-1}$ for $k \in \{1, \dots, d\}$, that is, $1, \alpha, \dots, \alpha^{d-1}$, is a basis of the vector space $L$ over $\iota(K)$. Hence $L$ is a finite extension of $\iota(K)$ and $[L : \iota(K)] = d$.
   - (iv) The only subfield of $L$ that contains $\iota(K)$ and has $\alpha$ as an element is $L$.
3. (Polynomials of degree at least $1$) Let $f \in K[X]$ be nonzero with $\deg f \ge 1$.
   - (i) There is a monic irreducible polynomial dividing $f$ in $K[X]$. Moreover, every irreducible polynomial $g$ dividing $f$ in $K[X]$ satisfies $1 \le \deg g \le \deg f$.
   - (ii) If $h$ divides $f$ in $K[X]$, then for $L$, $\iota$, $\alpha$ of the setting, $f^{\iota}(\alpha) = 0$ and $[L : \iota(K)] = \deg h \le \deg f$.
   - (iii) Hence there are a field $L$, an injective ring homomorphism $\iota : K \to L$ with $\iota(1) = 1$, and a root $\alpha \in L$ of $f^{\iota}$. Here $L$ is a finite extension of $\iota(K)$ and $[L : \iota(K)] \le \deg f$.
4. (Finite fields) If $K$ is a finite set, then $L$ is a finite set and $|L| = |K|^{d}$, where the right-hand side is the integer power of the number of elements of vector spaces over a finite field.
:::

## 직관

체 $K$ 안에 근이 없는 다항식 $h$가 있으면, 근이 있는 곳을 새로 만듭니다. 몫환 $K[X]/hK[X]$에서는 $h$의 배수를 $0$으로 보므로, 부정원 $X$의 잉여류 $\alpha$에 대해 "$h(\alpha) = 0$"이 저절로 성립합니다. $h$가 기약이면 이 몫환은 체이고((1)), 상수의 잉여류들 $\iota(K)$가 $K$와 같은 연산을 하는 부분체로 들어 있습니다. 시계의 눈금을 $12$에서 다시 $0$으로 읽듯, $h$를 $0$으로 읽는 셈에서 $X$가 근의 구실을 합니다.

이 강의는 $K$와 $\iota(K)$를 같은 것으로 보지 않습니다. 그래서 "$\alpha$는 $h$의 근"이라고 쓰지 않고, $h$의 계수를 $\iota$로 옮긴 $h^{\iota} \in L[X]$의 근이라고 씁니다. $\iota$가 단사인 환 준동형이므로 $h^{\iota}$는 $h$와 차수가 같고, 계수끼리의 계산도 $\iota$를 거쳐 그대로 옮겨집니다.

$L$의 원소를 적는 데는 $h$로 나눈 나머지만 있으면 됩니다((2)). 나머지는 차수가 $d$보다 작으므로 $L$의 원소는 $1, \alpha, \dots, \alpha^{d-1}$의 $\iota(K)$ 계수 일차결합으로 하나씩 쓰이고, 차수 $[L : \iota(K)]$는 $d$입니다. $d = 1$이면 이 열은 $1$ 하나이고 $L = \iota(K)$입니다. 이때 $h^{\iota}$의 근 $\alpha$는 이미 $\iota(K)$에 있습니다.

## 증명

:::idea
$h$가 기약이므로 $L$은 체이다. $\pi$와 "$f$에 $f^{\iota}(\alpha)$를 대응시키는 사상"은 상수와 $X$에서 값이 같은 두 환 준동형이므로 같고, 그래서 $h^{\iota}(\alpha) = \pi(h) = 0$이다. 원소의 꼴과 기저는 나눗셈 정리의 나머지에서 나온다.
:::

:::hint
$f^{\iota}(\alpha) = \pi(f)$를 보이려면 [[evaluation-homomorphism|대입 준동형]]의 (6)과 (7)을 씁니다.
:::

:::hint
(3)의 (i)에서는 $f$를 나누는 영이 아닌 다항식 가운데 차수가 $1$ 이상인 것의 차수를 모은 자연수의 집합에 정렬 원리를 씁니다.
:::

:::proof
**쓰는 사실.** "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "몫환의 (n)"은 [[quotient-ring|몫환]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n)이다. $K$는 정역이므로([[field|가역원과 체]]의 (3)) 차수의 (6)에 의해 영이 아닌 $q \in K[X]$에 대하여 $hq \ne 0$이고 $\deg(hq) = d + \deg q \ge d$이다. 따라서 다음이 성립한다. **(가)** $I$의 영이 아닌 원소는 차수가 $d$ 이상이다. 몫환의 (3)과 [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (1)에 의해, $f \in K[X]$에 대하여 $\pi(f) = 0$인 것은 정확히 $f \in I$일 때, 곧 $h \mid f$일 때이다. 이것을 **(나)**라 하자.

**1.** (i) 기약의 정의에 의해 $h \ne 0$이고 $d \ge 1$이다. [[irreducible-polynomial-and-maximal-ideal|기약 다항식과 극대 아이디얼]]의 (3)에 의해 $L$은 체이다.

(ii) [[polynomial-ring|다항식환]]의 (3)의 (i)에 의해 $\kappa$는 환 준동형이고 몫환의 (5)에 의해 $\pi$도 그렇다. [[ring-homomorphism|환 준동형]]의 (6)의 (i)에 의해 $\iota = \pi \circ \kappa$는 환 준동형이다. 상수 다항식 $1$은 차수가 $0 < d$이고 영이 아니므로 (가)에 의해 $1 \notin I$이고, (나)에 의해 $\iota(1) = \pi(1) \ne 0$이다. 확대체의 (3)의 (i), (ii)에 의해 $\iota$는 단사이고 $\iota(1) = 1$이다. 나머지는 확대체의 (3)의 (iii)이다.

(iii) $\iota$는 $1$을 $1$로 보내는 환 준동형이므로, 대입의 (6)을 $\varphi = \iota$, $s = \alpha$에 쓰면 $f$에 $f^{\iota}(\alpha)$를 대응시키는 함수 $\theta : K[X] \to L$은 $1$을 $1$로 보내는 환 준동형이고, 상수 다항식 $c$를 $\iota(c)$로, $X$를 $\alpha$로 보낸다. 한편 $\pi$는 $1$을 $1 + I$로 보내는 환 준동형이고, $1 \notin I$이므로 [[ideal|아이디얼]]의 (4)에 의해 $I$는 진아이디얼이며, 몫환의 (4)의 (ii)에 의해 $1 + I$는 $L$의 단위원이다. 또 $\pi(\kappa(c)) = \iota(c)$이고 $\pi(X) = \alpha$이다. 대입의 (7)에 의해 $\theta = \pi$이다.

(iv) (iii)과 (나)에 의해 $f^{\iota}(\alpha) = 0$인 것은 정확히 $h \mid f$일 때이다. $h \mid h$이므로([[polynomial-ring|다항식환]]의 (6)의 (i)) $h^{\iota}(\alpha) = 0$이다.

**2.** (i) 존재: 몫환의 (5)에 의해 $\pi$는 전사이므로 $y = \pi(f)$인 $f$가 있다. (i)에서 $h \ne 0$이므로 [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (2)에 의해 $f = hq + r$이고 $r = 0$이거나 $\deg r < d$인 $q$, $r$이 있다. $f - r = hq$이므로 $h \mid f - r$이고 (나)에 의해 $\pi(f - r) = 0$, 곧 $\pi(r) = \pi(f) = y$이다. 하나뿐임: $\pi(r) = \pi(r')$이고 $r$, $r'$이 각각 $0$이거나 차수가 $d$보다 작으면, 차수의 (3)에 의해 $r - r'$도 $0$이거나 차수가 $d - 1$ 이하이고, (나)에 의해 $r - r' \in I$이므로 (가)에 의해 $r - r' = 0$이다. 이 논법은 $y = \pi(f)$인 어느 $f$에서 출발해도 같은 $r$을 주므로 마지막 문장도 성립한다.

(ii) (iii)과 $\pi$가 전사라는 것에서 $L = \{\pi(g) : g \in K[X]\} = \{g^{\iota}(\alpha) : g \in K[X]\}$이다. $y \in L$이면 (i)의 $r$에 대하여 차수의 (1)에 의해 $r = \sum_{k=0}^{d-1} a_k X^k$($a_k = \operatorname{coef}_k(r)$)이고, 대입의 (6)의 마지막 식과 (1)의 (iii)에 의해
$$
y = r^{\iota}(\alpha) = \sum_{k=0}^{d-1} \iota(a_k)\,\alpha^k
$$
이다. 거꾸로 $a_0, \dots, a_{d-1} \in K$에 대하여 $g = \sum_{k=0}^{d-1} a_k X^k$로 두면 다항식환의 (5)의 (i)에 의해 $g$는 $0$이거나 차수가 $d - 1$ 이하이고 $\operatorname{coef}_k(g) = a_k$이며, 같은 계산으로 $\sum_{k=0}^{d-1} \iota(a_k)\alpha^k = g^{\iota}(\alpha) = \pi(g)$이다. 그래서 두 열 $a$, $a'$이 같은 원소를 주면 $\pi(g) = \pi(g')$이고, (i)의 하나뿐임에 의해 $g = g'$이며, 다항식환의 (5)의 (iii)에 의해 모든 $k$에서 $a_k = a'_k$이다.

(iii) [[finite-sums-in-a-ring|환의 유한 합]]의 (5)로 첨자를 하나 옮기면 $\sum_{k=0}^{d-1} \iota(a_k)\alpha^k = \sum_{k=1}^{d} \iota(a_{k-1})\, b_k$이다. 생성: (ii)에 의해 $L$의 모든 원소는 $\iota(K)$의 원소를 계수로 하는 $b_1, \dots, b_d$의 일차결합이다. 일차독립: $\iota(K)$의 원소의 열 $\beta_1, \dots, \beta_d$에 대하여 $\sum_{k=1}^{d} \beta_k b_k = 0$이라 하자. $\iota : K \to \iota(K)$는 전단사이므로 [[inverse-function|역함수]] $\rho$가 있고, $a_{k-1} = \rho(\beta_k)$로 두면 $\beta_k = \iota(a_{k-1})$이다. (ii)의 계산을 $g = 0$에 쓰면 $\sum_{k=0}^{d-1} \iota(0)\alpha^k = \pi(0) = 0$이므로, (ii)의 하나뿐임에 의해 모든 $k$에서 $a_{k-1} = 0$이고 $\beta_k = \iota(0) = 0$이다. 따라서 $b$는 기저이고, [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 $L$은 $\iota(K)$ 위에서 $d$차원이다.

(iv) $M$이 $L$의 부분체이고 $\iota(K) \subseteq M$, $\alpha \in M$이라 하자. [[subfield|부분체]]의 (3)의 (iii)에 의해 $M$의 원소의 거듭제곱, 곱, 유한 합은 $M$에서 계산하든 $L$에서 계산하든 같으므로, $a_k \in K$이면 $\alpha^k$, $\iota(a_k)\alpha^k$, $\sum_{k=0}^{d-1} \iota(a_k)\alpha^k$는 $M$에 속한다. (ii)에 의해 $L \subseteq M$이고 $M = L$이다. 거꾸로 부분체의 (4)에 의해 $L$ 자신은 $\iota(K)$와 $\alpha$를 포함하는 $L$의 부분체이다.

**3.** (i) $D$를 자연수 $n$ 가운데, $\deg g = n$이고 $K[X]$에서 $g \mid f$인 영이 아닌 $g \in K[X]$가 있는 것 전체의 집합이라 하자. $f \mid f$이고 $\deg f \ge 1$이므로 $\deg f \in D$이다. [[well-ordering-principle|정렬 원리]]의 (2)에 의해 $D$에는 최소 원소 $n_0$이 있고, $\deg g_0 = n_0$이며 $g_0 \mid f$인 영이 아닌 $g_0$이 있다. $g_0$이 기약이 아니라 하면 [[irreducible-polynomial|기약 다항식]]의 (2)에 의해 $g_0 = uv$이고 $1 \le \deg u < n_0$인 영이 아닌 $u$, $v$가 있다. $u \mid g_0$이고 $g_0 \mid f$이므로 다항식환의 (6)의 (ii)에 의해 $u \mid f$이고, $\deg u \in D$가 되어 $n_0$의 최소성과 어긋난다. 따라서 $g_0$은 기약이다. $c$가 $g_0$의 최고차계수이면 기약 다항식의 (3)의 (iii)에 의해 $c^{-1}g_0$은 모닉 기약 다항식이고, $g_0 = c\,(c^{-1}g_0)$이므로 $c^{-1}g_0 \mid g_0$이고 $c^{-1}g_0 \mid f$이다. 이제 $g$가 $f$를 나누는 기약 다항식이면, 기약의 정의에 의해 $\deg g \ge 1$이고, $f = gq$인 $q$는 $f \ne 0$이므로 영이 아니며, 차수의 (6)에 의해 $\deg f = \deg g + \deg q \ge \deg g$이다.

(ii) (1)의 (iv)에 의해 $f^{\iota}(\alpha) = 0$이고, (2)의 (iii)과 (i)의 부등식에 의해 $[L : \iota(K)] = \deg h \le \deg f$이다. $h$가 모닉일 필요는 없다.

(iii) (i)의 모닉 기약 다항식을 $h$로 두고 (ii)와 (1)의 (ii)를 쓰면 된다.

**4.** (2)의 (iii)에 의해 $L$은 $\iota(K)$ 위에서 $d$차원이다. $\iota : K \to \iota(K)$는 전단사이고 $K$는 유한집합이므로 [[finite-set|유한집합]]의 (F4)에 의해 $\iota(K)$도 유한집합이고 $|\iota(K)| = |K|$이다([[number-of-elements-is-unique|원소의 개수]]). [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (3)에 의해 $L$은 유한집합이고 $|L| = |\iota(K)|^d = |K|^d$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_2$ 위의 $X^2 + X + [1]$로 만든 체]
$\mathbb{Z}_2$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $h = X^2 + X + [1]$에 $[0]$, $[1]$을 넣으면 $[1]$, $[3] = [1]$이므로 근이 없습니다. 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. 위 설정의 $L$은 체이고, (2)에 의해 그 원소는 $\iota(a) + \iota(b)\alpha$($a, b \in \mathbb{Z}_2$)로 하나씩 쓰이므로 네 원소 $0$, $1$, $\alpha$, $1 + \alpha$뿐입니다((4)로도 $|L| = 2^2 = 4$). 여기서 $0$, $1$은 $L$의 $0 = \iota([0])$, $1 = \iota([1])$입니다.

(1)의 (iv)에 의해 $\alpha^2 + \alpha + 1 = h^{\iota}(\alpha) = 0$입니다. $L$에서 $1 + 1 = \iota([2]) = 0$이므로 $-1 = 1$이고, $\alpha^2 = -\alpha - 1 = \alpha + 1$입니다. 그러면 $\alpha + \alpha = (1 + 1)\alpha = 0$이므로 $\alpha(1 + \alpha) = \alpha + \alpha^2 = \alpha + \alpha + 1 = 1$이고, $\alpha$의 역원은 $1 + \alpha$입니다. $[L : \iota(\mathbb{Z}_2)] = 2$이고, $L$에서 근을 갖는 $h^{\iota}$와 달리 $h$ 자신은 $\mathbb{Z}_2$ 안에 근이 없습니다.
:::

:::counterexample[$\mathbb{Z}_2$ 위의 $X^2 + [1]$로 만든 몫환]
$\mathbb{Z}_2[X]$에서 $(X + [1])^2 = X^2 + [2]X + [1] = X^2 + [1]$이므로 $X^2 + [1]$은 차수가 $1$인 두 인수의 곱이고 기약이 아닙니다. $J = (X^2 + [1])\mathbb{Z}_2[X]$에 대한 몫환에서 $\beta = (X + [1]) + J$로 두면 $\beta^2 = (X^2 + [1]) + J = 0 + J$입니다. 그런데 $X + [1]$은 차수가 $1$이어서 차수가 $2$ 이상인 $J$의 영이 아닌 원소가 될 수 없으므로 $\beta \ne 0 + J$입니다. $0$이 아닌 원소의 제곱이 $0$이므로 이 몫환은 정역이 아니고, 체도 아닙니다([[field|가역원과 체]]의 (3)). 이 정리의 증명에서 $h$의 기약성은 (1)의 (i)에서 $d \ge 1$과 $L$이 체라는 것을 얻는 데 쓰입니다. 기약이 아닌 $f$에 대해서는 (3)처럼 $f$를 나누는 기약 다항식으로 체를 만듭니다. 여기서는 $X + [1]$이 그것이고, 그 근 $[1]$은 이미 $\mathbb{Z}_2$에 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_3$ 위의 $X^3 + [2]X + [1]$로 만든 체의 원소는 몇 개인가?]
$27$개입니다. $X^3 + [2]X + [1]$에 $[0], [1], [2]$를 넣으면 $[1]$, $[4] = [1]$, $[13] = [1]$이므로 $\mathbb{Z}_3$ 안에 근이 없고, 차수가 $3$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 기약입니다. (1)에 의해 몫환은 체이고, (4)에 의해 원소는 $3^3 = 27$개입니다.
:::

:::check[$\mathbb{Z}_5$ 위의 $X^2 + [2]$로 만든 체에서 $\alpha$의 역원은 무엇인가?]
$\iota([2])\alpha$입니다. $\mathbb{Z}_5$의 원소의 제곱은 $[0], [1], [4], [4], [1]$이고 $-[2] = [3]$은 그 가운데 없으므로 $X^2 + [2]$는 근이 없고 기약입니다. (1)의 (iv)에 의해 $\alpha^2 = -\iota([2]) = \iota([3])$이므로 $\alpha \cdot \iota([2])\alpha = \iota([2])\iota([3]) = \iota([6]) = \iota([1]) = 1$입니다.
:::
