---
title: 분해체
title_en: Splitting Field
aliases: [분해된다, 일차식 분해, 일차식들의 곱으로 분해, 분해체의 존재, splitting field, splits, splitting of a polynomial]
kind: definition
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "영이 아닌 다항식 f 가 체 E 에서 최고차계수와 일차식 X − c 들의 곱으로 쓰일 때 f 가 E 에서 분해된다고 하고, K 를 포함하고 f 의 근을 모두 담는 E 의 부분체가 E 뿐일 때 E 를 K 위에서 f 의 분해체라 한다. 분해되는 다항식의 근은 정확히 그 c 들이고, 분해는 약수와 곱, 계수를 옮기기에 대해 유지되며, 분해체는 근을 모두 붙인 체 K(c_1, …, c_n) 이다. 차수가 1 이상인 다항식에는 단사인 환 준동형 ι 로 옮긴 꼴의 분해체가 있다."
requires: [set, function, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, finite-set, number-of-elements-is-unique, adding-or-removing-an-element, subset-of-finite-set, mathematical-induction, prime-number, real-number-arithmetic, square-root-exists, integers-modulo-n, ring, ring-examples, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, divisibility-in-integral-domains, principal-ideal-domain, subfield, irreducible-polynomial, factorization-into-irreducible-polynomials, rational-numbers-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, field-extension-examples]
sources:
  - ref: judson-abstract-algebra
    loc: "21.2절 Splitting Fields, 분해체와 'splits in E' 의 정의, Theorem 21.31 (p.268); 21.1절 Extension Fields, Theorem 21.25 와 그 증명 (p.267); 21.5절 Exercises, 연습문제 11, 16, 17, 18 (p.276), 23 (p.277); 23.5절 Exercises, 연습문제 17 (p.309)"
    checked: original
    note: "출처 p.268 은 F 위의 상수가 아닌 p(x) 에 대하여 E = F(α_1, …, α_n) 이고 p(x) = (x − α_1)(x − α_2) ⋯ (x − α_n) 인 원소가 있을 때 E 를 p(x) 의 분해체라 하고, 'p(x) ∈ F[x] splits in E if it is the product of linear factors in E[x]' 라고 쓴다. 출처의 분해체 정의의 식에는 최고차계수가 없다. 이 항목은 '분해된다' 를 영이 아닌 모든 다항식에 최고차계수 a 를 넣은 꼴로 정의하고((1)에서 a 가 최고차계수임을 보인다), 분해체는 'K 를 포함하고 근을 모두 담는 부분체가 E 뿐' 으로 정의한 뒤 (6)의 (ii)에서 출처의 E = F(α_1, …, α_n) 과 같음을 보인다. '일차식 분해' 는 출처 p.268 의 'the product of linear factors in E[x]' 를 가리키는 이름이다. (10)은 출처 Theorem 21.31(p.268)이다. 출처의 증명은 deg p 에 대한 귀납으로 'We can assume that p(x) is irreducible; otherwise, by our induction hypothesis, we are done' 라고 적고, Theorem 21.5 의 체 K 와 귀납 가정의 분해체 E 를 'E ⊃ K' 로 놓는다. 이 항목은 기약이라고 가정하지 않고 f 를 나누는 모닉 기약 다항식으로 크로네커의 체를 만들며, 체를 같은 것으로 보지 않고 단사인 환 준동형 ι 로 진술한다. 귀납으로는 f^ι 가 분해되는 체만 만들고, 그 안에서 근을 붙인 체가 분해체라는 것은 (9)로 따로 보인다. (4)의 증명이 근으로 일차식을 하나씩 떼어 내는 것은 출처 Theorem 21.25(p.267)의 증명('Continue this process with q_1(x)')과 같은 방법이고, (1)의 (ii)의 '차수가 1 이상이면 근이 있다' 는 그 증명의 거꾸로 방향('Let ax − b be such a factor. Then p(b/a) = 0')과 같은 관찰이다. (2)는 출처 연습문제 18(p.276, 기약 다항식이 모두 일차이면 대수적으로 닫혀 있다)과 같은 방향의 사실을 다항식 하나에 대해 진술한 것이고, 출처 연습문제 16, 17(p.276)도 '분해된다' 를 쓰는 문제이다. 출처 연습문제 11(p.276)의 [E : F] ≤ n! 은 이 항목이 진술하지 않는다. 예시 '$\\mathbb{R}$ 안에서 구한 $X^2 - 2X - 2$의 분해체' 는 이차 다항식의 분해체가 판별식의 제곱근을 붙인 체라는 출처 23.5절 연습문제 17(p.309)과 같은 발상이고(여기서 판별식은 12, ℚ(√12) = ℚ(√3)), 차수가 2 인 확대가 분해체라는 출처 21.5절 연습문제 23(p.277)과도 겹친다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(반례 다항식의 인수분해, 상수 다항식 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원과 역원은 [[field|가역원과 체]]의 것이고, 부분체, 확대체, 유한 확대는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 다항식환 $E[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값 $f(r)$, 근, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이다. 다항식의 열의 곱과 빈 곱 $1$은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]이고, $E$의 원소의 열 $c_1, \dots, c_k$에 대하여 $(X - c_1) \cdots (X - c_k)$는 다항식의 열 $X - c_1, \dots, X - c_k$의 곱이다. $K$가 $E$의 부분체이면 부분체의 (3)의 (iv)에 의해 $K[X] \subseteq E[X]$이고, $f \in K[X]$의 $E$ 안의 근은 $f$를 $E[X]$의 원소로 보고 정한다. 대수적은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 뜻이고, 원소를 붙인 체 $K(\alpha_1, \dots, \alpha_n)$은 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**분해된다.** $E$가 체이고 $f \in E[X]$가 영다항식이 아니라 하자. $f$가 **$E$에서 분해된다**(splits in $E$)는 것은 정확히 $0$ 이상인 정수 $k$, $a \in E$, $E$의 원소의 열 $c_1, \dots, c_k$가 있어 $E[X]$에서
$$
f = a\,(X - c_1)(X - c_2) \cdots (X - c_k)
$$
일 때이다. 오른쪽은 상수 다항식 $a$와 곱 $(X - c_1) \cdots (X - c_k)$의 곱이고, $k = 0$이면 그 곱은 빈 곱 $1$이다. 이 식을 $f$의 $E$에서의 **일차식 분해**라 한다. $K$가 $E$의 부분체이고 $f \in K[X]$이면 "$f$가 $E$에서 분해된다"는 $f$를 $E[X]$의 원소로 보고 말한다.

**분해체.** $K$가 체 $E$의 부분체이고, $f \in K[X]$가 영다항식이 아니며 $\deg f \ge 1$이라 하자. $E$가 **$K$ 위에서 $f$의 분해체**(splitting field of $f$ over $K$)인 것은 정확히 다음 둘이 모두 성립할 때이다: $f$가 $E$에서 분해된다, $K$를 포함하고 $E$ 안의 $f$의 근을 모두 원소로 갖는 $E$의 부분체는 $E$뿐이다.

다음이 성립한다.

1. (일차식 분해의 꼴) $f \in E[X]$가 영다항식이 아니고 $f = a(X - c_1) \cdots (X - c_k)$가 $f$의 $E$에서의 일차식 분해라 하자.
   - (i) $(X - c_1) \cdots (X - c_k)$는 차수가 $k$인 모닉 다항식이다. 따라서 $k = \deg f$이고, $a$는 $f$의 최고차계수이며 $a \ne 0$이다.
   - (ii) 모든 $r \in E$에서 $f(r) = a(r - c_1) \cdots (r - c_k)$이다. 따라서 $r \in E$가 $f$의 근인 것은 정확히 $r = c_j$인 $j \in \{1, \dots, k\}$가 있을 때이고, $E$ 안의 $f$의 근 전체의 집합은 $\{c_1, \dots, c_k\}$이다. 특히 $\deg f \ge 1$이면 $f$는 $E$ 안에 근을 갖는다.
2. (기약 인수로 본 판정) $f \in E[X]$가 영다항식이 아니라 하자. $f$가 $E$에서 분해되는 것은 정확히 $E[X]$에서 $f$를 나누는 $E$ 위의 모닉 기약 다항식이 모두 차수가 $1$일 때이다. 또 $f = a(X - c_1) \cdots (X - c_k)$가 $f$의 일차식 분해이고 $h$가 $E[X]$에서 $f$를 나누는 $E$ 위의 모닉 기약 다항식이면 $h = X - c_j$인 $j$가 있다. 거꾸로 방향은 [[factorization-into-irreducible-polynomials|기약 다항식으로의 분해]]의 (3)을 체 $E$에 쓴 것이다.
3. (약수와 곱) $f, g \in E[X]$라 하자.
   - (i) $f$가 영다항식이 아니고 $E$에서 분해되며 $E[X]$에서 $g \mid f$이면, $g$는 영다항식이 아니고 $E$에서 분해되며, $E$ 안의 $g$의 근은 모두 $f$의 근이다.
   - (ii) $f$와 $g$가 영다항식이 아니고 둘 다 $E$에서 분해되면 $fg$도 $E$에서 분해된다.
4. (근이 차수만큼 있으면 분해된다) $f \in E[X]$가 영다항식이 아니고 $E$ 안의 $f$의 근 전체의 집합이 원소를 $\deg f$개 가지면 $f$는 $E$에서 분해된다.
5. (계수를 옮기기) $E'$이 체이고 $\tau : E \to E'$이 $\tau(1) = 1$인 환 준동형이며, $f = a(X - c_1) \cdots (X - c_k)$가 영이 아닌 $f \in E[X]$의 $E$에서의 일차식 분해라 하자. 그러면 $E'[X]$에서
   $$
   \begin{aligned}
   f^{\tau} &= \tau(a)\,(X - \tau(c_1)) \\
   &\qquad \cdots (X - \tau(c_k))
   \end{aligned}
   $$
   이고, 이것은 $f^{\tau}$의 $E'$에서의 일차식 분해이다. 따라서 $f^{\tau}$는 $E'$에서 분해되고, $E'$ 안의 $f^{\tau}$의 근 전체의 집합은 $\{\tau(c_1), \dots, \tau(c_k)\}$이다. 특히 $E$가 체 $E'$의 부분체이면 $E'[X]$에서도 $f = a(X - c_1) \cdots (X - c_k)$이고, $E'$ 안의 $f$의 근 전체는 $E$ 안의 $f$의 근 전체와 같다.
6. (분해체와 근을 붙인 체) $K$가 체 $E$의 부분체이고, $f \in K[X]$가 영다항식이 아니며 $n = \deg f \ge 1$이라 하자.
   - (i) $E$ 안의 $f$의 근은 모두 $K$ 위에서 대수적이다.
   - (ii) $f$가 $E$에서 분해되고 $f = a(X - c_1) \cdots (X - c_n)$이 그 일차식 분해라 하자. 그러면 $E$가 $K$ 위에서 $f$의 분해체인 것은 정확히 $E = K(c_1, \dots, c_n)$일 때이다.
   - (iii) $E$가 $K$ 위에서 $f$의 분해체이면 $E$는 $K$의 유한 확대이다.
7. (밑체에서 분해될 때) $K$, $f$가 (6)의 것이고 $E$가 $K$ 위에서 $f$의 분해체라 하자. 다음 세 조건은 서로 동치이다: $E = K$이다, $E$ 안의 $f$의 근이 모두 $K$에 속한다, $f$를 $K[X]$의 원소로 보아 $f$가 $K$에서 분해된다. 따라서 $E \ne K$이면 $E$ 안의 $f$의 근 가운데 $K$에 속하지 않는 것이 있다. 또 $K$ 자신이 $K$ 위에서 $f$의 분해체인 것은 정확히 $f$가 $K$에서 분해될 때이다.
8. (사이의 체) $K$, $f$가 (6)의 것이고 $E$가 $K$ 위에서 $f$의 분해체라 하자. $L$이 $E$의 부분체이고 $K \subseteq L$이면, $K$는 $L$의 부분체이고 $f \in L[X]$이며, $E$는 $L$ 위에서 $f$의 분해체이다.
9. (큰 체 안의 분해체) $M$이 체이고 $K$가 $M$의 부분체이며, $f \in K[X]$가 영다항식이 아니고 $n = \deg f \ge 1$이며, $f = a(X - c_1) \cdots (X - c_n)$이 $f$의 $M$에서의 일차식 분해라 하자. 그러면 $M$의 부분체 $L = K(c_1, \dots, c_n)$은 $K$를 포함하고, $L[X]$에서 $f = a(X - c_1) \cdots (X - c_n)$이며, $L$은 $K$ 위에서 $f$의 분해체이다. 또 $L$ 안의 $f$의 근 전체는 $M$ 안의 $f$의 근 전체와 같다.
10. (존재) $K$가 체이고 $f \in K[X]$가 영다항식이 아니며 $\deg f \ge 1$이라 하자. 그러면 체 $E$와 $\iota(1) = 1$인 단사인 환 준동형 $\iota : K \to E$가 있어, $\iota(K)$는 $E$의 부분체이고 $f^{\iota} \in \iota(K)[X]$, $\deg f^{\iota} = \deg f$이며, $E$는 $\iota(K)$ 위에서 $f^{\iota}$의 분해체이다.
:::

:::english
Fields, units and inverses are as in "Units and Fields"; subfields, extension fields and finite extensions are as in the entries on subfields and extension fields. The polynomial ring $E[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are as in "Polynomial Ring"; degree, leading coefficient and monic are as in "Degree of a Polynomial"; the value $f(r)$, roots and the polynomial $f^{\varphi}$ with transported coefficients are as in "Evaluation Homomorphism". Irreducible is meant as in "Irreducible Polynomial". Products of finite sequences of polynomials and the empty product $1$ are finite products in a commutative ring, and for a sequence $c_1, \dots, c_k$ of elements of $E$, $(X - c_1) \cdots (X - c_k)$ is the product of the sequence of polynomials $X - c_1, \dots, X - c_k$. If $K$ is a subfield of $E$, then $K[X] \subseteq E[X]$ by (3)(iv) of the subfield entry, and the roots in $E$ of $f \in K[X]$ are taken with $f$ regarded as an element of $E[X]$. Algebraic is meant as in "Algebraic Elements and Minimal Polynomials", and $K(\alpha_1, \dots, \alpha_n)$ is the field of (1) in "Finite Extensions Are Algebraic". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Splitting.** Let $E$ be a field and let $f \in E[X]$ be nonzero. We say that $f$ **splits in $E$** exactly when there are an integer $k \ge 0$, an element $a \in E$ and a sequence $c_1, \dots, c_k$ of elements of $E$ such that in $E[X]$
$$
f = a\,(X - c_1)(X - c_2) \cdots (X - c_k).
$$
The right-hand side is the product of the constant polynomial $a$ and the product $(X - c_1) \cdots (X - c_k)$, which is the empty product $1$ when $k = 0$. This expression is called a **factorization of $f$ into linear factors** in $E$. If $K$ is a subfield of $E$ and $f \in K[X]$, then "$f$ splits in $E$" refers to $f$ regarded as an element of $E[X]$.

**Splitting field.** Let $K$ be a subfield of a field $E$, and let $f \in K[X]$ be nonzero with $\deg f \ge 1$. Then $E$ is a **splitting field of $f$ over $K$** exactly when both of the following hold: $f$ splits in $E$, and the only subfield of $E$ that contains $K$ and every root of $f$ in $E$ is $E$ itself.

The following hold.

1. (Shape of a factorization into linear factors) Let $f \in E[X]$ be nonzero and let $f = a(X - c_1) \cdots (X - c_k)$ be a factorization of $f$ into linear factors in $E$.
   - (i) $(X - c_1) \cdots (X - c_k)$ is a monic polynomial of degree $k$. Hence $k = \deg f$, and $a$ is the leading coefficient of $f$, with $a \ne 0$.
   - (ii) For every $r \in E$, $f(r) = a(r - c_1) \cdots (r - c_k)$. Hence $r \in E$ is a root of $f$ exactly when $r = c_j$ for some $j \in \{1, \dots, k\}$, and the set of all roots of $f$ in $E$ is $\{c_1, \dots, c_k\}$. In particular, if $\deg f \ge 1$, then $f$ has a root in $E$.
2. (Criterion by irreducible factors) Let $f \in E[X]$ be nonzero. Then $f$ splits in $E$ exactly when every monic irreducible polynomial over $E$ dividing $f$ in $E[X]$ has degree $1$. Moreover, if $f = a(X - c_1) \cdots (X - c_k)$ is a factorization of $f$ into linear factors and $h$ is a monic irreducible polynomial over $E$ dividing $f$ in $E[X]$, then $h = X - c_j$ for some $j$. The converse direction is (3) of "Factorization into Irreducible Polynomials" applied to the field $E$.
3. (Divisors and products) Let $f, g \in E[X]$.
   - (i) If $f$ is nonzero and splits in $E$ and $g \mid f$ in $E[X]$, then $g$ is nonzero and splits in $E$, and every root of $g$ in $E$ is a root of $f$.
   - (ii) If $f$ and $g$ are nonzero and both split in $E$, then $fg$ splits in $E$.
4. (Enough roots implies splitting) If $f \in E[X]$ is nonzero and the set of all roots of $f$ in $E$ has $\deg f$ elements, then $f$ splits in $E$.
5. (Transporting coefficients) Let $E'$ be a field, let $\tau : E \to E'$ be a ring homomorphism with $\tau(1) = 1$, and let $f = a(X - c_1) \cdots (X - c_k)$ be a factorization into linear factors in $E$ of a nonzero $f \in E[X]$. Then in $E'[X]$
   $$
   \begin{aligned}
   f^{\tau} &= \tau(a)\,(X - \tau(c_1)) \\
   &\qquad \cdots (X - \tau(c_k)),
   \end{aligned}
   $$
   and this is a factorization of $f^{\tau}$ into linear factors in $E'$. Hence $f^{\tau}$ splits in $E'$, and the set of all roots of $f^{\tau}$ in $E'$ is $\{\tau(c_1), \dots, \tau(c_k)\}$. In particular, if $E$ is a subfield of a field $E'$, then also $f = a(X - c_1) \cdots (X - c_k)$ in $E'[X]$, and the roots of $f$ in $E'$ are exactly the roots of $f$ in $E$.
6. (Splitting fields and adjoining the roots) Let $K$ be a subfield of a field $E$, and let $f \in K[X]$ be nonzero with $n = \deg f \ge 1$.
   - (i) Every root of $f$ in $E$ is algebraic over $K$.
   - (ii) Suppose $f$ splits in $E$ and $f = a(X - c_1) \cdots (X - c_n)$ is a factorization into linear factors. Then $E$ is a splitting field of $f$ over $K$ exactly when $E = K(c_1, \dots, c_n)$.
   - (iii) If $E$ is a splitting field of $f$ over $K$, then $E$ is a finite extension of $K$.
7. (Splitting over the base field) Let $K$ and $f$ be as in (6) and let $E$ be a splitting field of $f$ over $K$. The following three conditions are equivalent: $E = K$; every root of $f$ in $E$ lies in $K$; $f$, regarded as an element of $K[X]$, splits in $K$. Hence if $E \ne K$, some root of $f$ in $E$ does not lie in $K$. Moreover, $K$ itself is a splitting field of $f$ over $K$ exactly when $f$ splits in $K$.
8. (Intermediate fields) Let $K$ and $f$ be as in (6) and let $E$ be a splitting field of $f$ over $K$. If $L$ is a subfield of $E$ with $K \subseteq L$, then $K$ is a subfield of $L$, $f \in L[X]$, and $E$ is a splitting field of $f$ over $L$.
9. (A splitting field inside a larger field) Let $M$ be a field and $K$ a subfield of $M$, let $f \in K[X]$ be nonzero with $n = \deg f \ge 1$, and let $f = a(X - c_1) \cdots (X - c_n)$ be a factorization of $f$ into linear factors in $M$. Then the subfield $L = K(c_1, \dots, c_n)$ of $M$ contains $K$, we have $f = a(X - c_1) \cdots (X - c_n)$ in $L[X]$, and $L$ is a splitting field of $f$ over $K$. Moreover, the roots of $f$ in $L$ are exactly the roots of $f$ in $M$.
10. (Existence) Let $K$ be a field and let $f \in K[X]$ be nonzero with $\deg f \ge 1$. Then there are a field $E$ and an injective ring homomorphism $\iota : K \to E$ with $\iota(1) = 1$ such that $\iota(K)$ is a subfield of $E$, $f^{\iota} \in \iota(K)[X]$, $\deg f^{\iota} = \deg f$, and $E$ is a splitting field of $f^{\iota}$ over $\iota(K)$.
:::

## 직관

다항식 $f$가 체 $E$에서 분해된다는 것은 $f$를 최고차계수와 일차식 $X - c$들의 곱으로 쓸 수 있다는 것입니다. 이때 $f$의 근은 정확히 그 $c$들이고((1)), 같은 $c$가 여러 번 나올 수 있으므로 근의 개수는 차수보다 적을 수 있습니다. 거꾸로 근이 차수만큼 있으면 근으로 일차식을 하나씩 떼어 내어 분해할 수 있습니다((4)).

분해체는 $K$에 $f$의 근을 붙여 얻는 체입니다. 그래서 "$K$를 포함하고 근을 모두 담는 부분체가 자기 자신뿐인 체"로 정의하고, 일차식 분해가 $f = a(X - c_1) \cdots (X - c_n)$이면 이것이 $E = K(c_1, \dots, c_n)$과 같다는 것을 (6)에서 확인합니다. $f$가 분해되는 더 큰 체 $M$이 있으면 그 안에서 근을 붙여 분해체를 얻습니다((9)).

분해체가 있다는 것((10))은 [[kronecker-theorem|크로네커 정리]]를 되풀이해 얻습니다. 크로네커 정리는 차수가 $1$ 이상인 다항식의 근을 하나 가진 체를 만들어 주고, 그 근으로 일차식 하나를 떼어 내면 남은 몫의 차수가 하나 줄어듭니다. 이 강의는 한 체를 다른 체 안에 넣을 때 두 체를 같은 것으로 보지 않으므로, 분해체는 $K$ 자신 위가 아니라 단사인 환 준동형 $\iota$로 옮긴 $\iota(K)$ 위에서, 계수를 옮긴 $f^{\iota}$의 분해체로 얻습니다.

## 증명

:::idea
(1)은 일차식들의 곱의 차수와 대입한 값의 계산이다. (2)는 $f$를 나누는 모닉 기약 다항식이 $E[X]$의 소원이어서 일차식 하나를 나눈다는 데서, (4)는 근으로 일차식을 떼어 내는 귀납에서 나온다. (10)은 크로네커 정리로 근 하나를 만들어 차수를 줄이는 귀납으로 $f^{\iota}$가 분해되는 체를 만들고, 그 안에서 근을 붙인 체를 (9)로 잡는다.
:::

:::hint
(2)에서 $h$는 주 아이디얼 정역 $E[X]$의 기약원이므로 소원이고, 곱 $a(X - c_1) \cdots (X - c_k)$의 인수 하나를 나눕니다.
:::

:::hint
(10)에서 $f$를 나누는 모닉 기약 다항식으로 크로네커의 체 $L$을 만들면 $f^{\iota_1}$의 근 $\alpha$가 생깁니다. $f^{\iota_1} = (X - \alpha)q$의 $q$에 귀납 가정을 씁니다.
:::

:::proof
**쓰는 사실.** "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "인수의 (n)"은 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "붙인 체의 (n)"은 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (n)이다. 체는 정역이고([[field|가역원과 체]]의 (3)), 차수의 (6)에 의해 체 $E$ 위의 $E[X]$도 정역이다.

**1.** (i) $k$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 $(X - c_1) \cdots (X - c_k)$가 차수 $k$인 모닉임을 보인다. $k = 0$이면 이 곱은 빈 곱 $1$이고, 다항식환의 (4)의 (iii)에 의해 $1 = X^0$이므로 차수의 (2)에 의해 차수 $0$인 모닉이다. $k \ge 1$이고 처음 $k - 1$개의 곱 $Q$가 차수 $k - 1$인 모닉이라 하자. 곱의 (2)에 의해 $(X - c_1) \cdots (X - c_k) = Q\,(X - c_k)$이고, 차수의 (2)에 의해 $X - c_k$는 차수 $1$인 모닉이므로, 차수의 (5)에 의해 이 곱은 차수 $(k - 1) + 1 = k$인 모닉이다. 이제 $P = (X - c_1) \cdots (X - c_k)$라 하자. $a = 0$이면 $f = 0 \cdot P = 0$이 되어 가정에 어긋나므로 $a \ne 0$이다. 다항식환의 (3)의 (iii)에 의해 $\operatorname{coef}_k(aP) = a \cdot 1 = a \ne 0$이고 $n > k$이면 $\operatorname{coef}_n(aP) = a \cdot 0 = 0$이므로, 차수의 (1)에 의해 $\deg f = k$이고 $f$의 최고차계수는 $a$이다.

(ii) 대입의 (2)에 의해 $r$에서의 대입은 환 준동형이고 유한 곱을 각 항의 값의 곱으로 보내며, 대입의 (1)에 의해 상수 다항식 $a$의 값은 $a$, $X - c_j$의 값은 $r - c_j$이다. 따라서 $f(r) = a\bigl((r - c_1) \cdots (r - c_k)\bigr)$이다. (i)에 의해 $a \ne 0$이고 $E$는 정역이므로 $f(r) = 0$인 것은 정확히 $(r - c_1) \cdots (r - c_k) = 0$일 때이고, 곱의 (7)에 의해 그것은 정확히 어떤 $j$에서 $r - c_j = 0$, 곧 $r = c_j$일 때이다. $\deg f \ge 1$이면 (i)에 의해 $k \ge 1$이고 $c_1$이 근이다.

**2.** $f = a(X - c_1) \cdots (X - c_k)$가 $f$의 일차식 분해이고 $h$가 $E[X]$에서 $f$를 나누는 $E$ 위의 모닉 기약 다항식이라 하자. [[principal-ideal-domain|주 아이디얼 정역]]의 (2)에 의해 $E[X]$는 주 아이디얼 정역이고, 기약의 (1)에 의해 $h$는 $E[X]$의 기약원이며, 주 아이디얼 정역의 (6)에 의해 소원이다. 길이 $k + 1$인 다항식의 열을 $b_1 = a$, $1 \le j \le k$에서 $b_{j+1} = X - c_j$로 잡으면 곱의 (4)에 의해 $b_1 \cdots b_{k+1} = f$이고, 주 아이디얼 정역의 (7)에 의해 $h \mid b_i$인 $i$가 있다. (1)의 (i)에 의해 $a \ne 0$이므로 차수의 (7)에 의해 상수 다항식 $a$는 $E[X]$의 가역원이고, [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (3)에 의해 $a \mid 1$이다. 그래서 $h \mid a$이면 다항식환의 (6)의 (ii)에 의해 $h \mid 1$이고, 정역의 나누어떨어짐과 기약원의 (3)에 의해 $h$가 가역원이 되어 기약원이라는 것에 어긋난다. 따라서 $h \mid X - c_j$인 $j$가 있다. 차수의 (2)와 기약의 (3)의 (ii)에 의해 $X - c_j$는 모닉 기약 다항식이므로 기약의 (3)의 (iv)에 의해 $h = X - c_j$이고, $\deg h = 1$이다. 이로써 "$f$가 분해되면 $f$를 나누는 모닉 기약 다항식은 모두 차수가 $1$"이라는 것과 둘째 문장이 나온다. 거꾸로 $f$를 나누는 $E$ 위의 모닉 기약 다항식이 모두 차수가 $1$이면, [[factorization-into-irreducible-polynomials|기약 다항식으로의 분해]]의 (3)을 체 $E$에 쓴 식 $f = c\,(X - a_1) \cdots (X - a_n)$이 $f$의 $E$에서의 일차식 분해이다.

**3.** (i) $f = gq$인 $q \in E[X]$가 있다. $g = 0$이면 $f = 0$이 되어 어긋나므로 $g \ne 0$이다. $h$가 $g$를 나누는 $E$ 위의 모닉 기약 다항식이면 다항식환의 (6)의 (ii)에 의해 $h \mid f$이고, (2)에 의해 $\deg h = 1$이다. 따라서 (2)에 의해 $g$는 $E$에서 분해된다. $r \in E$가 $g$의 근이면 대입의 (2)에 의해 $f(r) = g(r)q(r) = 0$이다.

(ii) $f = a(X - c_1) \cdots (X - c_k)$, $g = b(X - d_1) \cdots (X - d_l)$이면 $E[X]$의 가환성과 결합법칙에 의해
$$
\begin{aligned}
fg &= (ab)\,\bigl((X - c_1) \cdots (X - c_k)\bigr) \\
&\qquad \cdot \bigl((X - d_1) \cdots (X - d_l)\bigr)
\end{aligned}
$$
이고, 곱의 (3)에 의해 뒤의 두 곱의 곱은 두 열을 이어 붙인 열 $e_1, \dots, e_{k+l}$에 대한 $(X - e_1) \cdots (X - e_{k+l})$이다. 차수의 (6)에 의해 $fg \ne 0$이므로 이것이 $fg$의 일차식 분해이다.

**4.** $0$ 이상인 정수 $n$마다 "차수가 $n$이고 $E$ 안의 근 전체의 집합이 원소를 $n$개 갖는 영이 아닌 모든 $f \in E[X]$는 $E$에서 분해된다"를 수학적 귀납법(시작점 $0$)으로 보인다. $n = 0$이면 차수의 (2)에 의해 $f$는 영이 아닌 $a \in E$의 상수 다항식이고, $f = a \cdot 1$이 $k = 0$인 일차식 분해이다. $n \ge 1$이고 $n - 1$에서 성립한다고 하자. $R$을 $E$ 안의 $f$의 근 전체의 집합이라 하면 $R$이 원소를 $n$개 가지므로 전단사 $\{1, \dots, n\} \to R$이 있고, 그 $1$에서의 값 $c$는 $R$의 원소이다. 인수의 (1), (2), (3)에 의해 $f = (X - c)q$이고 $q \ne 0$, $\deg q = n - 1$인 $q \in E[X]$가 있다. $R_q$를 $E$ 안의 $q$의 근 전체의 집합이라 하자. $r \in R$이고 $r \ne c$이면 $0 = f(r) = (r - c)q(r)$이고 $r - c \ne 0$이므로 $q(r) = 0$이다. 곧 $R - \{c\} \subseteq R_q$이다. [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $R - \{c\}$는 원소를 $n - 1$개 갖고, 인수의 (4)에 의해 $R_q$는 유한집합이며 $|R_q| \le n - 1$이다. [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $n - 1 = |R - \{c\}| \le |R_q|$이므로 $|R_q| = n - 1$이다. 귀납 가정에 의해 $q = b(X - d_1) \cdots (X - d_{n-1})$인 $b \in E$와 $E$의 원소의 열 $d_1, \dots, d_{n-1}$이 있다. 길이 $n$인 열을 $e_1 = c$, $1 \le j \le n - 1$에서 $e_{j+1} = d_j$로 잡으면, $E[X]$의 가환성과 곱의 (4)에 의해 $f = (X - c)\,b\,(X - d_1) \cdots (X - d_{n-1}) = b\,(X - e_1) \cdots (X - e_n)$이다.

**5.** 확대체의 (3)의 (ii)에 의해 $\tau$는 단사이다. 대입의 (3)에 의해 $\tau$의 계수 사상은 $1$을 $1$로 보내는 환 준동형 $E[X] \to E'[X]$이고, 상수 다항식 $c$를 상수 다항식 $\tau(c)$로, $X$를 $X$로 보낸다. 따라서 $(X - c_j)^{\tau} = X - \tau(c_j)$이고, 곱의 (9)에 의해 $\bigl((X - c_1) \cdots (X - c_k)\bigr)^{\tau} = (X - \tau(c_1)) \cdots (X - \tau(c_k))$이며, $f^{\tau} = \tau(a)(X - \tau(c_1)) \cdots (X - \tau(c_k))$이다. 대입의 (3)의 (i)에 의해 $f^{\tau} \ne 0$이므로 이것은 $f^{\tau}$의 $E'$에서의 일차식 분해이고, (1)의 (ii)에 의해 근 전체는 $\{\tau(c_1), \dots, \tau(c_k)\}$이다. $E$가 $E'$의 부분체이면 부분체의 (3)의 (iii)에 의해 포함 함수 $\iota : E \to E'$은 $1$을 $1$로 보내는 환 준동형이고, 대입의 (8)에 의해 $f^{\iota} = f$이며 모든 $c \in E$에서 $\iota(c) = c$이다. 그래서 앞의 결과는 $E'[X]$에서 $f = a(X - c_1) \cdots (X - c_k)$이고 $E'$ 안의 $f$의 근 전체가 $\{c_1, \dots, c_k\}$라는 것이며, (1)의 (ii)에 의해 이것은 $E$ 안의 $f$의 근 전체이다.

**6.** (i) $f \ne 0$이고 $c \in E$가 $f$의 근이면 최소의 (1)에 의해 $c$는 $K$ 위에서 대수적이다.

(ii) (1)의 (ii)에 의해 $E$ 안의 $f$의 근 전체는 $\{c_1, \dots, c_n\}$이다. (i)에 의해 모든 $c_j$는 $K$ 위에서 대수적이므로 붙인 체의 (1)의 (i)에 의해 $K(c_1, \dots, c_n)$이 정해지고, 붙인 체의 (1)의 (ii)에 의해 그것은 $K$를 포함하고 모든 $c_j$를 원소로 갖는 $E$의 부분체이며 그런 부분체에 모두 포함된다. $E$가 분해체이면 $K(c_1, \dots, c_n)$은 $K$를 포함하고 $f$의 근을 모두 갖는 $E$의 부분체이므로 $E$와 같다. 거꾸로 $E = K(c_1, \dots, c_n)$이라 하자. $L$이 $K$를 포함하고 $f$의 근을 모두 갖는 $E$의 부분체이면 모든 $c_j$가 $L$에 속하므로 $E = K(c_1, \dots, c_n) \subseteq L$이고, 따라서 $L = E$이다. $f$는 $E$에서 분해되므로 $E$는 분해체이다.

(iii) 분해체 $E$에서 $f$는 분해되고, (1)의 (i)에 의해 그 일차식 분해는 길이 $n$인 열 $c_1, \dots, c_n$으로 쓰인다. (ii)에 의해 $E = K(c_1, \dots, c_n)$이고, 붙인 체의 (4)에 의해 이것은 $K$의 유한 확대이다.

**7.** $E = K$이면 $E$ 안의 근은 모두 $K$의 원소이다. $E$ 안의 $f$의 근이 모두 $K$에 속하면, $K$는 $K$를 포함하고 $f$의 근을 모두 갖는 $E$의 부분체이므로 분해체의 정의에 의해 $K = E$이다. 또 이때 $f = a(X - c_1) \cdots (X - c_n)$을 $E$에서의 일차식 분해라 하면, (1)의 (i)과 차수의 (8)에 의해 $a$는 $f \in K[X]$의 최고차계수이므로 $a \in K$이고, (1)의 (ii)에 의해 모든 $c_j$는 근이므로 $K$에 속한다. $K[X]$에서 계산한 $P = a(X - c_1) \cdots (X - c_n)$에 (5)의 마지막 문장을 $K$와 $E$에 쓰면 $E[X]$에서 $P = a(X - c_1) \cdots (X - c_n) = f$이므로, $f = P$이고 $f$는 $K$에서 분해된다. 거꾸로 $f$가 $K$에서 $f = b(X - d_1) \cdots (X - d_n)$으로 분해되면 (5)의 마지막 문장에 의해 $E$ 안의 $f$의 근 전체는 $\{d_1, \dots, d_n\} \subseteq K$이다. 이로써 세 조건이 서로 동치이다. $E \ne K$이면 둘째 조건이 거짓이므로 $K$에 속하지 않는 근이 있다. 마지막 문장: $K$가 $K$ 위에서 $f$의 분해체이면 정의에 의해 $f$는 $K$에서 분해된다. 거꾸로 $f$가 $K$에서 분해되면, 부분체의 (4)에 의해 $K$는 $K$의 부분체이고 $K$를 포함하는 $K$의 부분체는 $K$뿐이므로 $K$는 $K$ 위에서 $f$의 분해체이다.

**8.** 부분체의 (5)의 (i)에 의해 $K$는 $L$의 부분체이고, 부분체의 (3)의 (iv)에 의해 $f \in K[X] \subseteq L[X]$이며, 차수의 (8)에 의해 $f$는 $L[X]$에서도 영이 아니고 차수가 같다. $f$는 $E$에서 분해된다. $L'$이 $L$을 포함하고 $f$의 근을 모두 갖는 $E$의 부분체이면 $L'$은 $K$를 포함하므로 $L' = E$이다.

**9.** 최소의 (1)에 의해 각 $c_j$는 $K$ 위에서 대수적이므로 $L = K(c_1, \dots, c_n)$이 정해지고, 붙인 체의 (1)의 (ii)에 의해 $L$은 $K$를 포함하고 모든 $c_j$를 원소로 갖는 $M$의 부분체이다. 부분체의 (5)의 (i)에 의해 $K$는 $L$의 부분체이다. (1)의 (i)과 차수의 (8)에 의해 $a$는 $f \in K[X]$의 최고차계수이므로 $a \in K \subseteq L$이다. $L[X]$에서 계산한 $P = a(X - c_1) \cdots (X - c_n)$에 (5)의 마지막 문장을 $L$과 $M$에 쓰면 $M[X]$에서 $P = a(X - c_1) \cdots (X - c_n) = f$이므로 $f = P$이고, 이것이 $f$의 $L$에서의 일차식 분해이다. (1)의 (ii)에 의해 $L$ 안의 $f$의 근 전체와 $M$ 안의 $f$의 근 전체는 둘 다 $\{c_1, \dots, c_n\}$이다. $L'$이 $K$를 포함하고 $f$의 근을 모두 갖는 $L$의 부분체이면, 부분체의 (5)의 (i)에 의해 $L'$은 $M$의 부분체이고 모든 $c_j$를 원소로 가지므로 붙인 체의 (1)의 (ii)에 의해 $L \subseteq L'$이다. 따라서 $L' = L$이고, $L$은 $K$ 위에서 $f$의 분해체이다.

**10.** 먼저 $n \ge 1$인 정수 $n$마다 다음 명제 $T_n$을 수학적 귀납법으로 보인다. $T_n$은 "모든 체 $K$와, 영이 아니고 차수가 $n$인 모든 $f \in K[X]$에 대하여, 체 $M$과 $\iota(1) = 1$인 단사인 환 준동형 $\iota : K \to M$이 있어 $f^{\iota}$가 $M$에서 분해된다"이다.

$n = 1$: $a$를 $f$의 최고차계수, $b = \operatorname{coef}_0(f)$라 하면 차수의 (1)에 의해 $f = b + aX$이고, $a \ne 0$이므로 $f = a\bigl(X - (-a^{-1}b)\bigr)$이다(오른쪽은 $aX + aa^{-1}b$이다). $M = K$, $\iota = i_K$로 두면 [[ring-homomorphism|환 준동형]]의 (6)의 (ii)에 의해 $\iota$는 단사인 환 준동형이고 대입의 (4)에 의해 $f^{i_K} = f$이므로, 이 식이 $f^{\iota}$의 일차식 분해이다.

$n \ge 2$이고 $T_{n-1}$이 성립한다고 하자. [[kronecker-theorem|크로네커 정리]]의 (3)의 (i)에 의해 $K[X]$에서 $f$를 나누는 모닉 기약 다항식 $h$가 있고, 크로네커 정리의 설정과 (1)의 (i), (ii), (3)의 (ii)에 의해 체 $L = K[X]/hK[X]$와 $\iota_1(1) = 1$인 단사인 환 준동형 $\iota_1 : K \to L$과 $f^{\iota_1}(\alpha) = 0$인 $\alpha \in L$이 있다. 대입의 (3)의 (i)에 의해 $\deg f^{\iota_1} = n$이고, 인수의 (1), (2), (3)에 의해 $L[X]$에서 $f^{\iota_1} = (X - \alpha)q$이고 $q \ne 0$, $\deg q = n - 1 \ge 1$인 $q$가 있다. $T_{n-1}$을 체 $L$과 $q$에 쓰면 체 $M$과 $\iota_2(1) = 1$인 단사인 환 준동형 $\iota_2 : L \to M$이 있어 $q^{\iota_2}$가 $M$에서 분해되고, (1)의 (i)에 의해 $q^{\iota_2} = b(X - d_1) \cdots (X - d_{n-1})$인 $b \in M$과 열 $d_1, \dots, d_{n-1}$이 있다. $\iota = \iota_2 \circ \iota_1$은 환 준동형의 (6)의 (i)과 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번에 의해 단사인 환 준동형이고 $\iota(1) = 1$이다. 대입의 (4)와 (3)에 의해
$$
\begin{aligned}
f^{\iota} &= (f^{\iota_1})^{\iota_2} = (X - \alpha)^{\iota_2}\,q^{\iota_2} \\
&= (X - \iota_2(\alpha))\,q^{\iota_2}
\end{aligned}
$$
이다. 길이 $n$인 열을 $e_1 = \iota_2(\alpha)$, $1 \le j \le n - 1$에서 $e_{j+1} = d_j$로 잡으면, $M[X]$의 가환성과 곱의 (4)에 의해 $f^{\iota} = b(X - e_1) \cdots (X - e_n)$이고 $f^{\iota}$는 $M$에서 분해된다.

이제 $f$가 진술의 다항식이면 $T_{\deg f}$에 의해 체 $M$과 $\iota : K \to M$이 있어 $f^{\iota}$가 $M$에서 분해된다. 확대체의 (3)의 (iii)에 의해 $\iota(K)$는 $M$의 부분체이고, $f^{\iota}$의 계수 $\iota(\operatorname{coef}_k(f))$는 $\iota(K)$에 속하므로 다항식환의 (7)의 (i)에 의해 $f^{\iota} \in \iota(K)[X]$이며, 대입의 (3)의 (i)에 의해 $\deg f^{\iota} = \deg f$이다. (1)의 (i)에 의해 $f^{\iota}$의 $M$에서의 일차식 분해는 길이 $\deg f$인 열 $e_1, \dots, e_{\deg f}$로 쓰인다. (9)를 $M$, $\iota(K)$, $f^{\iota}$에 쓰면 $E = \iota(K)(e_1, \dots, e_{\deg f})$는 $\iota(K)$를 포함하는 $M$의 부분체이고 $\iota(K)$ 위에서 $f^{\iota}$의 분해체이다. $\iota$의 값은 $\iota(K) \subseteq E$에 속하므로, 환 준동형의 (3)의 (iii)에 의해 $\iota$를 함수 $\iota : K \to E$로 선언한 것은 환 준동형이고 단사이며 $\iota(1) = 1$이다. 이 $\iota$로 옮긴 $f^{\iota}$는 계수가 앞의 것과 같으므로, 다항식환의 (7)의 (i)에 의해 $E[X]$의 원소로서 같은 다항식이다.
:::

## 예시와 반례

:::example[$\mathbb{R}$ 안에서 구한 $X^2 - 2X - 2$의 분해체]
[[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{Q}$는 $\mathbb{R}$의 부분체이고, [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $s s = 3$이고 $0 < s$인 실수 $s = \sqrt{3}$이 있습니다. $f = X^2 - 2X - 2 \in \mathbb{Q}[X]$라 하면, $\mathbb{R}[X]$에서
$$
\begin{aligned}
&(X - (1 + s))(X - (1 - s)) \\
&\quad = X^2 - 2X + (1 - s^2) \\
&\quad = X^2 - 2X - 2
\end{aligned}
$$
이므로 $f$는 $\mathbb{R}$에서 분해되고, (1)의 (ii)에 의해 $\mathbb{R}$ 안의 근은 $1 + s$와 $1 - s$입니다. (9)에 의해 $L = \mathbb{Q}(1 + s, 1 - s)$는 $\mathbb{Q}$ 위에서 $f$의 분해체입니다.

$L = \mathbb{Q}(s)$입니다. $L$은 $\mathbb{Q}$와 $1 + s$를 포함하는 부분체이므로 $s = (1 + s) - 1 \in L$이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $\mathbb{Q}(s) \subseteq L$입니다. 거꾸로 $1 + s$, $1 - s$는 $\mathbb{Q}(s)$의 원소이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $L \subseteq \mathbb{Q}(s)$입니다. [[field-extension-examples|체의 확대의 예]]의 (1)($3$은 소수)에 의해 $[\mathbb{Q}(s) : \mathbb{Q}] = 2$이므로, 이 분해체의 $\mathbb{Q}$ 위의 차수는 $2$입니다.
:::

:::counterexample[$X^2 - 2X - 2$가 분해되지만 그 분해체가 아닌 $\mathbb{R}$]
위 예시의 $f$는 $\mathbb{R}$에서 $f = (X - (1 + s))(X - (1 - s))$로 분해되지만, $\mathbb{R}$은 $\mathbb{Q}$ 위에서 $f$의 분해체가 아닙니다. 분해체라면 (6)의 (ii)에 의해 $\mathbb{R} = \mathbb{Q}(1 + s, 1 - s) = \mathbb{Q}(\sqrt{3})$이어야 합니다. 그런데 체의 확대의 예의 (4)에 의해 $c^3 = 2$인 실수 $c$가 있고 그 $\mathbb{Q}$ 위의 차수는 $3$입니다. $c \in \mathbb{Q}(\sqrt{3})$이면 [[tower-law|차수의 곱셈 공식]]의 (5)에 의해 $3$이 $[\mathbb{Q}(\sqrt{3}) : \mathbb{Q}] = 2$를 나누어야 하므로 $c \notin \mathbb{Q}(\sqrt{3})$이고, $\mathbb{R} \ne \mathbb{Q}(\sqrt{3})$입니다. $f$가 분해되는 체는 $\mathbb{Q}$와 근으로 만들 수 없는 원소를 더 가질 수 있고, 분해체는 $\mathbb{Q}$에 근만 붙인 것입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_7$을 부분체로 갖는 체 $E$가 $\mathbb{Z}_7$ 위에서 $X^2 + [3]$의 분해체이면 $E$는 무엇인가?]
$E = \mathbb{Z}_7$입니다. $\mathbb{Z}_7$은 체이고([[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)), $\mathbb{Z}_7[X]$에서 $(X - [2])(X - [5]) = X^2 - [7]X + [10] = X^2 + [3]$이므로 $X^2 + [3]$은 $\mathbb{Z}_7$에서 분해됩니다. (7)에 의해 분해체 $E$는 $\mathbb{Z}_7$과 같습니다.
:::

:::check[$\mathbb{Q}[X]$의 $X^3 - X^2$은 $\mathbb{Q}$에서 분해되는가? $\mathbb{Q}$ 안의 근은 몇 개인가?]
분해됩니다. $X^3 - X^2 = 1 \cdot (X - 0)(X - 0)(X - 1)$이 $k = 3$인 일차식 분해입니다. (1)의 (ii)에 의해 $\mathbb{Q}$ 안의 근 전체는 $\{0, 0, 1\} = \{0, 1\}$이므로 근은 $2$개이고, 차수 $3$보다 적습니다. 그래서 (4)의 거꾸로, 곧 "분해되면 근이 차수만큼 있다"는 이 다항식에서 성립하지 않습니다.
:::
