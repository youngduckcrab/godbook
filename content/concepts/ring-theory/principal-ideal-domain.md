---
title: 주 아이디얼 정역
title_en: Principal Ideal Domain
aliases: [PID, principal ideal domain, 모닉 생성원]
kind: definition
field: ring-theory
msc: ["13F10"]
level: undergrad
summary: 모든 아이디얼이 주 아이디얼인 정역을 주 아이디얼 정역이라 한다. 정수의 환과 체 위의 다항식환이 그 예이고, 체 위의 다항식환의 영이 아닌 아이디얼은 모닉 다항식 하나로 생성된다. 주 아이디얼 정역에서 영이 아닌 원소의 주 아이디얼이 극대인 것은 그 원소가 기약원일 때이고, 기약원은 소원이며 유한 개의 곱을 나누면 그 가운데 하나를 나눈다.
requires: [well-ordering-principle, even-and-odd, mathematical-induction, ring, ring-basic-properties, ring-examples, integral-domain, field, ideal, maximal-and-prime-ideals, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, factor-theorem-for-polynomials, divisibility-in-integral-domains]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "18.2절 Factorization in Integral Domains, Principal Ideal Domains 의 정의, Theorem 18.12, Corollary 18.13 (p.229), Theorem 18.15 의 증명 (p.230), Example 18.17 (p.231); 18.3절 Reading Questions, 5 (p.235); 17.2절 The Division Algorithm, 근의 정의 (p.214); 17.3절 Irreducible Polynomials, Ideals in F[x] 의 Theorem 17.20, Example 17.21 (p.218); 16.3절 Ring Homomorphisms and Ideals, Theorem 16.25 (p.196); 21.1절 Extension Fields, Theorem 21.10 의 증명 (p.263)"
    checked: original
    note: "정의는 출처(p.229)의 'An integral domain in which every ideal is principal' 과 같다. (1)은 출처 Theorem 16.25(p.196, Z 의 모든 아이디얼은 주 아이디얼)에 해당하고, 이 항목은 아이디얼 항목의 (7)을 인용한다. (2)(4)는 출처 Theorem 17.20(p.218)이고 증명은 출처와 같이 차수가 가장 작은 영이 아닌 원소와 나눗셈 정리를 쓴다. 출처의 증명은 그 원소의 차수가 0 인 경우('If deg p(x) = 0, then p(x) is a nonzero constant and 1 must be in I')를 따로 다룬다. 이 항목은 최고차계수의 역원을 곱해 생성원을 모닉으로 맞추고, 모닉 생성원이 하나뿐이라는 것((4))을 (3)으로 증명한다. (4)의 모닉 생성원은 출처 Theorem 21.10 의 증명(p.263)이 대입 준동형의 핵을 주 아이디얼로 보고 그 생성원으로 최소다항식을 얻는 데 쓰는 것이고, 예시 '실수 $2$에서의 대입 준동형의 핵' 은 그 증명과 같은 발상이다. (5)는 출처 Theorem 18.12(p.229)이고 증명도 같다. (6)은 출처 Corollary 18.13(p.229)이고 증명도 같이 극대 아이디얼이 소 아이디얼이라는 것을 쓴다. (7)의 유한 곱판은 출처 Theorem 18.15 의 유일성 증명(p.230)이 'p_1 divides q_1 q_2 ⋯ q_s, by Corollary 18.13 it must divide some q_i' 로 쓰는 것을 진술로 올렸다. 반례 '$\\mathbb{Z}[X]$의 아이디얼 $2\\mathbb{Z}[X] + X\\mathbb{Z}[X]$' 는 출처 Example 18.17(p.231)이 {5f(x) + xg(x)} 로 Z[x] 가 주 아이디얼 정역이 아님을 보이는 것과 같은 발상이고(상수 5 를 2 로 바꿨다), 출처 Example 17.21(p.218)이 F[x, y] 에서 x 와 y 가 만드는 아이디얼을 드는 것, 18.3절 Reading Questions 5(p.235, 'Describe an example which is a ufd, but not a pid')와도 닿아 있다. 예시의 핵 {f : f(2) = 0} 은 출처 17.2절(p.214)이 근을 'p(x) is in the kernel of the evaluation homomorphism' 으로 말하는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(진술의 경계 경우 0·체·영 아이디얼 대입, 직관 문장 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
정역은 [[integral-domain|영인자와 정역]]의 뜻이고, 아이디얼과 주 아이디얼 $aR$은 [[ideal|아이디얼]]의 것이며, 가역원과 $R^{\times}$, 체는 [[field|가역원과 체]]의 것이다. 나누어떨어짐 $a \mid b$는 [[polynomial-ring|다항식환]]의 (6)의 것이고, 연관원, 기약원, 소원은 [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 것이다. 다항식환 $F[X]$, 상수 다항식과 읽는 약속은 다항식환의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이다.

정역 $D$가 **주 아이디얼 정역**(principal ideal domain)인 것은 정확히 $D$의 모든 아이디얼이 주 아이디얼일 때, 곧 $D$의 모든 아이디얼 $I$에 대하여 $I = aD$인 $a \in D$가 있을 때이다.

다음이 성립한다. (2)–(4)에서 $F$는 체이다.

1. (정수) 환 $\mathbb{Z}$([[ring-examples|환의 예]]의 (1))는 주 아이디얼 정역이다.
2. (체 위의 다항식환) $F[X]$는 주 아이디얼 정역이다.
3. (모닉 연관원) $f \in F[X]$가 영다항식이 아니고 $c$가 $f$의 최고차계수이면, $c^{-1} f$는 $f$와 연관원인 모닉 다항식이고, $f$와 연관원인 모닉 다항식은 $c^{-1} f$뿐이다. 또 $fF[X] = (c^{-1} f) F[X]$이다.
4. (모닉 생성원) $I$가 $F[X]$의 아이디얼이라 하자.
   - (i) $I \ne \{0\}$이면 $I = gF[X]$인 모닉 다항식 $g$가 정확히 하나 있다. 이 $g$는 $I$에 속하고, $I$의 영이 아닌 모든 원소 $f$에서 $\deg g \le \deg f$이며, $f \in F[X]$에 대하여 $f \in I$인 것은 정확히 $g \mid f$일 때이다. 또 $I = F[X]$인 것은 정확히 $g = 1$일 때이다.
   - (ii) $I = \{0\}$이면 $I = 0F[X]$이고, $I = gF[X]$인 $g \in F[X]$는 영다항식뿐이다.
5. (극대 아이디얼과 기약원) $D$가 주 아이디얼 정역이고 $a \in D$, $a \ne 0$이라 하자. $aD$가 $D$의 [[maximal-and-prime-ideals|극대 아이디얼]]인 것은 정확히 $a$가 $D$의 기약원일 때이다.
6. (기약원은 소원) 주 아이디얼 정역의 기약원은 소원이다. 따라서 주 아이디얼 정역에서 원소가 기약원인 것은 정확히 소원일 때이다.
7. (유한 곱을 나누는 소원) $D$가 정역이고 $a$가 $D$의 소원이라 하자. $k \ge 1$인 정수 $k$와 $D$의 원소의 열 $b_1, \dots, b_k$에 대하여 $a \mid b_1 \cdots b_k$이면 $a \mid b_j$인 $j \in \{1, \dots, k\}$가 있다. 여기서 $b_1 \cdots b_k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]이다. 특히 $D$가 주 아이디얼 정역이고 $a$가 기약원이면 그렇다.
:::

:::english
Integral domains are as in zero divisors and integral domains; ideals and principal ideals $aR$ are those of ideals; units, $R^{\times}$ and fields are those of units and fields. Divisibility $a \mid b$ is that of item (6) of the polynomial ring, and associates, irreducible elements and prime elements are those of divisibility in integral domains. The polynomial ring $F[X]$ and constant polynomials with the reading convention are those of the polynomial ring, and the degree $\deg$, leading coefficients and monic polynomials are those of the degree of a polynomial.

An integral domain $D$ is a **principal ideal domain** if and only if every ideal of $D$ is principal, that is, for every ideal $I$ of $D$ there is $a \in D$ with $I = aD$.

The following hold. In (2)–(4), $F$ is a field.

1. (Integers) The ring $\mathbb{Z}$ (item (1) of the examples of rings) is a principal ideal domain.
2. (Polynomials over a field) $F[X]$ is a principal ideal domain.
3. (Monic associate) If $f \in F[X]$ is nonzero with leading coefficient $c$, then $c^{-1} f$ is a monic polynomial associate to $f$, and it is the only monic polynomial associate to $f$. Moreover $fF[X] = (c^{-1} f) F[X]$.
4. (Monic generator) Let $I$ be an ideal of $F[X]$.
   - (i) If $I \ne \{0\}$, there is exactly one monic polynomial $g$ with $I = gF[X]$. This $g$ lies in $I$, satisfies $\deg g \le \deg f$ for every nonzero $f \in I$, and for $f \in F[X]$ we have $f \in I$ if and only if $g \mid f$. Moreover $I = F[X]$ if and only if $g = 1$.
   - (ii) If $I = \{0\}$, then $I = 0F[X]$, and the zero polynomial is the only $g \in F[X]$ with $I = gF[X]$.
5. (Maximal ideals and irreducible elements) Let $D$ be a principal ideal domain and $a \in D$ with $a \ne 0$. Then $aD$ is a maximal ideal of $D$ if and only if $a$ is an irreducible element of $D$.
6. (Irreducibles are prime) In a principal ideal domain every irreducible element is prime. Hence in a principal ideal domain an element is irreducible if and only if it is prime.
7. (A prime dividing a finite product) Let $D$ be an integral domain and $a$ a prime element of $D$. For an integer $k \ge 1$ and a sequence $b_1, \dots, b_k$ of elements of $D$, if $a \mid b_1 \cdots b_k$ then $a \mid b_j$ for some $j \in \{1, \dots, k\}$. Here $b_1 \cdots b_k$ is the finite product in a commutative ring. In particular this holds if $D$ is a principal ideal domain and $a$ is irreducible.
:::

## 직관

정수에서 아이디얼은 모두 $n\mathbb{Z}$ 꼴이어서, 아이디얼 하나를 수 하나로 대신할 수 있습니다. 이런 일이 일어나는 정역이 **주 아이디얼 정역**입니다. 정수와 체 위의 다항식환이 그런 까닭은 같습니다. 둘 다 나눗셈 정리가 있어서, 아이디얼에서 "가장 작은" 영이 아닌 원소를 잡으면 다른 원소를 그것으로 나눈 나머지가 아이디얼에 남으면서 더 작아질 수 없기 때문입니다. 정수에서는 절댓값이, 다항식에서는 차수가 "작다"를 잽니다.

생성원은 하나로 정해지지 않을 수 있습니다. $f$가 아이디얼을 만들면 $0$이 아닌 상수 $c$에 대한 $cf$도 같은 아이디얼을 만들고((3)), 예컨대 $\mathbb{R}[X]$에서 $X$와 $2X$는 다른 다항식이지만 같은 아이디얼을 만듭니다. 그래서 다항식환에서는 최고차계수를 $1$로 맞춘 모닉 생성원을 대표로 삼고, 그러면 하나로 정해집니다((4)). 영 아이디얼은 모닉 다항식으로 만들 수 없고 영다항식이 유일한 생성원입니다.

(5)와 (6)은 정수에서 "$p\mathbb{Z}$가 극대 아이디얼인 것은 $p$가 소수일 때"와 유클리드 보조정리를 주 아이디얼 정역 전체로 넓힌 것입니다. "더 작게 쪼갤 수 없다"(기약원)는 "더 큰 진아이디얼이 없다"(극대)로 옮겨지고, 극대 아이디얼은 소 아이디얼이므로 기약원은 곱을 나누면 인수 하나를 나눕니다.

## 증명

:::idea
(4)는 $I$의 영이 아닌 원소의 차수 가운데 가장 작은 것을 잡아 그 원소를 모닉으로 맞추고, 나눗셈 정리의 나머지가 $I$에 남는다는 것으로 $I$ 전체가 그 배수임을 보인다. (5)는 $a$의 약수 $c$와 아이디얼의 포함 $aD \subseteq cD$가 같은 것이라는 데서 나온다.
:::

:::hint
(4)의 유일성은 같은 아이디얼을 만드는 두 원소가 연관원이라는 것과 (3)을 씁니다.
:::

:::hint
(7)은 $k$에 대한 귀납법이고, 곱의 끝항을 떼어 소원의 정의를 한 번 씁니다.
:::

:::proof
**쓰는 사실.** "나누어떨어짐의 (n)"은 [[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n)이다. 정수의 순서는 [[well-ordering-principle|정렬 원리]]의 (L1)을 쓴다. 체는 정역이고([[field|가역원과 체]]의 (3)), 차수의 (6)에 의해 $F[X]$는 정역이며, 차수의 (7)에 의해 $F[X]$의 가역원은 정확히 영이 아닌 상수 다항식이다.

**1.** [[integral-domain|영인자와 정역]]의 (2)에 의해 $\mathbb{Z}$는 정역이고, [[ideal|아이디얼]]의 (7)에 의해 환 $\mathbb{Z}$의 모든 아이디얼은 주 아이디얼이다.

**3.** $f \ne 0$이므로 $c \ne 0$이고, 체의 정의에 의해 $c \in F^{\times}$이다. 상수 다항식 $c^{-1}$은 $F[X]$의 가역원이므로 $c^{-1} f$는 $f$와 연관원이다. 다항식환의 (3)의 (iii)에 의해 $\operatorname{coef}_n(c^{-1} f) = c^{-1}\operatorname{coef}_n(f)$이므로, 차수의 (5)에 의해 $\deg(c^{-1} f) = \deg f$이고 최고차계수는 $c^{-1} c = 1$이다. 곧 $c^{-1} f$는 모닉이다. $g$가 $f$와 연관원인 모닉 다항식이면 $g = uf$인 가역원 $u$, 곧 $0$이 아닌 $d \in F$의 상수 다항식 $u = d$가 있다. 같은 계산으로 $g$의 최고차계수는 $dc$이므로 $dc = 1$이고, 가역원과 체의 (5)에 의해 $d = c^{-1}$이다. 따라서 $g = c^{-1} f$이다. 마지막 문장은 나누어떨어짐의 (2)이다.

**2와 4.** (4)의 (ii): $0F[X] = \{0 \cdot h : h \in F[X]\} = \{0\}$이다([[ring-basic-properties|환의 기본 성질]]의 (1)). $gF[X] = \{0\}$이면 $g = g \cdot 1 \in \{0\}$이다.

(4)의 (i): $I \ne \{0\}$이라 하자. $A = \{\deg f : f \in I,\ f \ne 0\}$은 $0$ 이상인 정수의 집합으로서 공집합이 아니므로, 정렬 원리의 (가)에 의해 최소 원소 $n$을 갖는다. $\deg h = n$인 영이 아닌 $h \in I$를 잡고 $c$를 $h$의 최고차계수라 하면, (3)에 의해 $g = c^{-1} h$는 차수가 $n$인 모닉 다항식이고, $I$가 아이디얼이므로 $g \in I$이다. 아이디얼의 (6)의 (ii)에 의해 $gF[X] \subseteq I$이다. 거꾸로 $f \in I$라 하자. [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (2)에 의해 $f = gq + r$이고 $r = 0$이거나 $\deg r < n$인 $q, r \in F[X]$가 있다. $gq \in I$이고 $I$는 덧셈군의 부분군이므로 $r = f - gq \in I$이다. $r \ne 0$이면 $\deg r \in A$이고 $\deg r < n$이 되어 $n$이 최소 원소라는 것과 어긋난다((L1)). 따라서 $r = 0$이고 $f = gq \in gF[X]$이다. 그래서 $I = gF[X]$이다.

이 $g$는 $I$에 속하고, $I$의 영이 아닌 $f$에서 $\deg f \in A$이므로 $\deg g = n \le \deg f$이다. 나누어떨어짐의 (1)에 의해 $f \in gF[X]$인 것은 정확히 $g \mid f$일 때이다. 유일성: $g'$도 모닉이고 $I = g'F[X]$이면 $gF[X] = g'F[X]$이므로 나누어떨어짐의 (2)에 의해 $g'$은 $g$와 연관원이다. $g$의 최고차계수는 $1$이므로 (3)을 $f = g$, $c = 1$에 쓰면 $g$와 연관원인 모닉 다항식은 $1^{-1} g = g$뿐이고, $g' = g$이다. 끝으로 $g = 1$이면 $1F[X] = F[X]$이다. $I = F[X]$이면 $1 \in I$이므로 $g \mid 1$이고, 나누어떨어짐의 (3)에 의해 $g$는 가역원, 곧 영이 아닌 상수 다항식이다. 차수의 (2)에 의해 그 최고차계수는 그 상수 자신이고 모닉이므로 $g = 1$이다.

(2): $F[X]$는 정역이고, (4)의 (i)과 (ii)에 의해 $F[X]$의 모든 아이디얼은 주 아이디얼이다.

**5.** $aD$가 극대 아이디얼이라 하자. 극대 아이디얼은 진아이디얼이므로 $aD \ne D$이고, 나누어떨어짐의 (3)에 의해 $a \notin D^{\times}$이다. $c \mid a$라 하면 나누어떨어짐의 (1)에 의해 $aD \subseteq cD$이고, $cD$는 아이디얼이므로 극대성에 의해 $cD = aD$이거나 $cD = D$이다. 앞의 경우 나누어떨어짐의 (2)에 의해 $c$는 $a$와 연관원이고, 뒤의 경우 나누어떨어짐의 (3)에 의해 $c$는 가역원이다. $a \ne 0$이므로 나누어떨어짐의 (5)에 의해 $a$는 기약원이다.

거꾸로 $a$가 기약원이라 하자. $a \notin D^{\times}$이므로 나누어떨어짐의 (3)에 의해 $aD$는 진아이디얼이다. $J$가 $aD \subseteq J$인 아이디얼이라 하자. 주 아이디얼 정역이므로 $J = cD$인 $c$가 있고, $aD \subseteq cD$이므로 나누어떨어짐의 (1)에 의해 $c \mid a$이다. 나누어떨어짐의 (5)에 의해 $c$는 가역원이거나 $a$와 연관원이고, 나누어떨어짐의 (3)과 (2)에 의해 각각 $J = D$, $J = aD$이다. 따라서 $aD$는 극대 아이디얼이다.

**6.** $a$가 주 아이디얼 정역 $D$의 기약원이면 $a \ne 0$이고 (5)에 의해 $aD$는 극대 아이디얼이다. [[maximal-and-prime-ideals|극대 아이디얼과 소 아이디얼]]의 (4)에 의해 $aD$는 소 아이디얼이고, 나누어떨어짐의 (7)에 의해 $a$는 소원이다. 거꾸로 소원이 기약원인 것은 나누어떨어짐의 (6)이다.

**7.** $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $k = 1$이면 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (1)에 의해 $b_1 \cdots b_k = b_1$이므로 $j = 1$이다. $k$에서 성립한다고 하고 $a \mid b_1 \cdots b_{k+1}$이라 하자. 같은 항목의 (2)에 의해 $b_1 \cdots b_{k+1} = (b_1 \cdots b_k)\, b_{k+1}$이므로, 소원의 정의에 의해 $a \mid b_1 \cdots b_k$이거나 $a \mid b_{k+1}$이다. 앞의 경우 귀납 가정에 의해 $a \mid b_j$인 $j \le k$가 있고, 뒤의 경우 $j = k + 1$이다. 마지막 문장은 (6)에서 나온다.
:::

## 예시와 반례

:::example[실수 $2$에서의 대입 준동형의 핵]
$I = \{f \in \mathbb{R}[X] : f(2) = 0\}$은 [[evaluation-homomorphism|대입 준동형]]의 (2)의 환 준동형 $\mathbb{R}[X] \to \mathbb{R}$의 핵이므로 아이디얼입니다(아이디얼의 (5)). [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (2)에 의해 $f \in I$인 것은 정확히 $X - 2 \mid f$일 때이고, $X - 2$는 모닉이며(차수의 (2)) 대입 준동형의 (1)에 의해 $(X - 2)(2) = 0$이므로 $I$에 속합니다. 따라서 $I = (X - 2)\mathbb{R}[X]$이고, (4)에 의해 $X - 2$가 $I$의 모닉 생성원입니다. $\mathbb{R}$은 체입니다([[field|가역원과 체]]의 (4)).

두 다항식으로 만든 아이디얼도 모닉 생성원 하나로 바뀝니다. $J = (X^2 - 1)\mathbb{R}[X] + (X^2 + X - 2)\mathbb{R}[X]$(아이디얼의 (8)의 (ii)의 합)는 두 원소의 차 $(X^2 + X - 2) - (X^2 - 1) = X - 1$을 포함합니다. 그래서 아이디얼의 (6)의 (ii)에 의해 $(X - 1)\mathbb{R}[X] \subseteq J$입니다. 거꾸로 $X^2 - 1 = (X - 1)(X + 1)$, $X^2 + X - 2 = (X - 1)(X + 2)$이므로 $J$의 원소 $(X^2 - 1)a + (X^2 + X - 2)b$는 $(X - 1)\bigl((X + 1)a + (X + 2)b\bigr)$이고, $X - 1$의 배수입니다. 따라서 $J = (X - 1)\mathbb{R}[X]$이고, $X - 1$이 $J$의 모닉 생성원입니다.
:::

:::counterexample[$\mathbb{Z}[X]$의 아이디얼 $2\mathbb{Z}[X] + X\mathbb{Z}[X]$]
$\mathbb{Z}[X]$는 정역이지만(차수의 (6)) 주 아이디얼 정역이 아닙니다. $I = 2\mathbb{Z}[X] + X\mathbb{Z}[X]$가 어떤 $g$로 $I = g\mathbb{Z}[X]$라 하면, $2 \in I$이므로 $2 = gq$인 $q$가 있고, $2 \ne 0$이므로 차수의 (6)에 의해 $\deg g + \deg q = 0$, 곧 $g$는 영이 아닌 상수 $c$입니다. $X \in I$이므로 $X = ch$인 $h$가 있고, $1$차 계수를 비교하면 $1 = c\operatorname{coef}_1(h)$(다항식환의 (3)의 (iii))이므로 $c \in \{1, -1\}$입니다(나누어떨어짐의 (9)의 (ii)). 그러면 $c \cdot c = 1$이 $I$에 속하므로 $1 = 2f + Xh'$인 $f, h' \in \mathbb{Z}[X]$가 있습니다. $0$차 계수를 비교하면 다항식환의 (2), (3)의 (iii), (4)의 (i)에 의해 $1 = 2\operatorname{coef}_0(f) + 0$이 되는데, [[even-and-odd|짝수와 홀수]]에 의해 $1$은 짝수가 아니므로 어긋납니다.
:::

## 확인 질문

:::check[$\mathbb{R}[X]$의 아이디얼 $(X^2 - 3X + 2)\mathbb{R}[X]$는 극대 아이디얼인가?]
아닙니다. $X^2 - 3X + 2 = (X - 1)(X - 2)$이고 두 인수는 차수가 $1$이어서 가역원(영이 아닌 상수)이 아니므로, $X^2 - 3X + 2$는 기약원이 아닙니다. (5)에 의해 극대 아이디얼이 아닙니다. 실제로 이 아이디얼은 $(X - 1)\mathbb{R}[X]$에 들어 있고, $X - 1$은 이 아이디얼에 속하지 않습니다($X - 1$의 차수 $1$이 (4)의 모닉 생성원의 차수 $2$보다 작습니다).
:::

:::check[체 $F$ 자신은 주 아이디얼 정역인가?]
그렇습니다. 체는 정역이고, [[maximal-and-prime-ideals|극대 아이디얼과 소 아이디얼]]의 (5)에 의해 $F$의 아이디얼은 $\{0\}$과 $F$뿐이며, 이것은 각각 $0F$와 $1F$입니다.
:::
