---
title: 기약 다항식으로의 분해
title_en: Factorization into Irreducible Polynomials
aliases: [기약 인수분해, 모닉 기약 인수, factorization into irreducibles]
kind: theorem
field: ring-theory
msc: ["12E05", "13F20"]
level: undergrad
summary: 체 위의 차수가 1 이상인 다항식은 모닉 기약 인수를 갖고, 영이 아닌 모든 다항식은 최고차계수와 모닉 기약 다항식 몇 개(차수 이하의 개수)의 곱이다. 모닉 기약 인수가 모두 일차이면 그 다항식은 일차식들의 곱이다.
requires: [prime-number, well-ordering-principle, even-and-odd, mathematical-induction, integers-modulo-n, ring, field, finite-integral-domain-is-a-field, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "18.2절 Factorization in Integral Domains, Theorem 18.15 (p.230), Corollary 18.16 (p.231); 17.5절 Exercises, 연습문제 10, 21, 24 (p.221); 23.5절 Exercises, 연습문제 5 (p.308)"
    checked: original
    note: "출처는 이 분해를 Corollary 18.16(p.231, 'Let F be a field. Then F[x] is a ufd')으로 진술하고, 존재는 Theorem 18.15(p.230)의 증명이 주 아이디얼의 오름 사슬 ⟨a⟩ ⊂ ⟨a_1⟩ ⊂ ⟨a_2⟩ ⊂ ⋯ 를 이어 만들고 Lemma 18.14 로 멈추게 해서 얻는다. 이 항목은 그 길을 따르지 않고, (1)을 '차수가 1 이상인 약수의 차수 가운데 가장 작은 것' 으로(정렬 원리), (2)를 차수에 대한 귀납법으로 증명한다. 출처의 유일 인수분해 정역의 정의에 있는 분해의 유일성은 싣지 않는다. (2)의 꼴 c·h_1 ⋯ h_k(모닉 인수와 최고차계수)는 출처 연습문제 24(p.221)가 x^p − x = x(x − 1)(x − 2) ⋯ (x − (p − 1)) 로 일차식들의 곱을 쓰는 것과 같은 꼴이다. 반례 '최고차계수를 떼어 낼 수 없는 $\\mathbb{Z}[X]$의 $2X + 1$' 은 출처 연습문제 10(p.221, Z_10[x] 에서 x² + x + 8 의 서로 다른 두 분해)처럼 체가 아닌 계수환에서 분해가 달라지는 것을 보는 물음과 닿아 있다. 예시 '$\\mathbb{Z}_3$ 위의 $X^4 - [1]$' 의 다항식은 출처 23.5절 연습문제 5(a)(p.308)가 Q 위에서 분해체를 묻는 x⁴ − 1 과 같은 꼴이다(계수의 체가 다르다). 확인 질문은 (2)(3)을 구체적인 다항식에 적용한 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 가우스 보조정리 증명 통독, 아이젠슈타인의 n = 0 경계 확인). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]라 하자. 다항식환 $F[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이다. 다항식의 열 $h_1, \dots, h_k$의 곱 $h_1 \cdots h_k$와 빈 곱 $1$은 환 $F[X]$에서의 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]이다. 아래에서 $f \in F[X]$이다.

1. (모닉 기약 인수) $f \ne 0$이고 $\deg f \ge 1$이면 $h \mid f$인 모닉 기약 다항식 $h \in F[X]$가 있다.
2. (분해) $f \ne 0$이고 $c$가 $f$의 최고차계수라 하자. 그러면 $0 \le k \le \deg f$인 정수 $k$와 모닉 기약 다항식의 열 $h_1, \dots, h_k$가 있어
   $$
   f = c\, h_1 \cdots h_k
   $$
   이다. 이런 분해에서 각 $h_j$는 $f$를 나누고, $k \ge 1$인 것은 정확히 $\deg f \ge 1$일 때이다.
3. (일차식들의 곱) $f \ne 0$이고, $f$를 나누는 모닉 기약 다항식이 모두 차수가 $1$이라 하자. $c$가 $f$의 최고차계수이고 $n = \deg f$이면, $F$의 원소의 열 $a_1, \dots, a_n$이 있어
   $$
   f = c\,(X - a_1) \cdots (X - a_n)
   $$
   이다. 여기서 $X - a_1, \dots, X - a_n$은 다항식의 열이고, $n = 0$이면 그 곱은 빈 곱 $1$이다.
:::

:::english
Let $F$ be a field. The polynomial ring $F[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring; the degree $\deg$, leading coefficients and monic polynomials are those of the degree of a polynomial; and irreducibility is that of irreducible polynomials. The product $h_1 \cdots h_k$ of a sequence of polynomials and the empty product $1$ are finite products in the commutative ring $F[X]$. Below, $f \in F[X]$.

1. (A monic irreducible factor) If $f \ne 0$ and $\deg f \ge 1$, there is a monic irreducible polynomial $h \in F[X]$ with $h \mid f$.
2. (Factorization) Let $f \ne 0$ with leading coefficient $c$. Then there are an integer $k$ with $0 \le k \le \deg f$ and a sequence $h_1, \dots, h_k$ of monic irreducible polynomials such that
   $$
   f = c\, h_1 \cdots h_k.
   $$
   In any such factorization each $h_j$ divides $f$, and $k \ge 1$ if and only if $\deg f \ge 1$.
3. (Products of linear polynomials) Let $f \ne 0$ and suppose every monic irreducible polynomial dividing $f$ has degree $1$. If $c$ is the leading coefficient of $f$ and $n = \deg f$, there is a sequence $a_1, \dots, a_n$ of elements of $F$ with
   $$
   f = c\,(X - a_1) \cdots (X - a_n).
   $$
   Here $X - a_1, \dots, X - a_n$ is a sequence of polynomials, and if $n = 0$ the product is the empty product $1$.
:::

## 직관

$2$ 이상의 정수가 소수들의 곱으로 쪼개지듯이, 체 위의 차수가 $1$ 이상인 다항식은 최고차계수와 기약 다항식들의 곱으로 쪼개집니다. 쪼갤 수 있으면 차수가 더 작은 두 다항식으로 쪼개고, 차수는 $0$ 이상인 정수라서 이 일을 끝없이 할 수는 없습니다. 증명은 이것을 차수에 대한 귀납법으로 씁니다. 인수를 모두 모닉으로 맞추면 남는 상수는 최고차계수 $c$ 하나뿐입니다.

모닉 기약 인수의 개수 $k$는 차수를 넘지 않습니다. 인수 하나하나의 차수가 $1$ 이상이기 때문입니다. 인수가 모두 일차이면 개수가 차수와 같아지고, 이것이 (3)입니다. 이 단원은 분해가 순서를 빼면 한 가지라는 것(유일성)은 다루지 않습니다.

## 증명

:::idea
(1)은 $f$의 약수 가운데 차수가 $1$ 이상이면서 가장 작은 것이 기약이라는 데서 나온다. (2)는 그런 인수 하나를 떼어 내고 차수가 더 작은 몫에 귀납 가정을 쓴다.
:::

:::hint
"모닉 다항식의 열의 곱은 모닉이고, 항이 모두 차수 $1$ 이상이면 그 차수는 항의 개수 이상이다"를 먼저 귀납법으로 보여 두면 (2)와 (3)의 차수를 셀 수 있습니다.
:::

:::proof
**쓰는 사실.** "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "유한 곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (n)이다. 체는 정역이므로 $F[X]$는 정역이다(차수의 (6)). 정수의 순서는 [[prime-number|소수]]의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1)을 쓴다.

**보조 사실.** $k \ge 0$이고 $h_1, \dots, h_k$가 모닉 다항식의 열이면 $P = h_1 \cdots h_k$는 모닉이다. 항의 차수가 모두 $1$ 이상이면 $\deg P \ge k$이고, 모두 $1$이면 $\deg P = k$이다. $k$에 대한 [[mathematical-induction|수학적 귀납법]]: $k = 0$이면 $P = 1$은 차수 $0$인 모닉이다(차수의 (2)). $k$에서 성립하면 유한 곱의 (2)에 의해 $h_1 \cdots h_{k+1} = P h_{k+1}$이고, 차수의 (5)에 의해 이것은 모닉이며 차수가 $\deg P + \deg h_{k+1}$이다. 이 값은 앞의 경우 $k + 1$ 이상이고, 뒤의 경우 $k + 1$이다.

**1.** $A = \{\deg d : d \in F[X],\ d \ne 0,\ d \mid f,\ \deg d \ge 1\}$은 $\deg f$를 포함하는 $0$ 이상인 정수의 집합이므로, 정렬 원리의 (가)에 의해 최소 원소 $m$을 갖는다. $d \mid f$, $d \ne 0$, $\deg d = m$인 $d$를 잡는다. $d$가 기약이 아니면 기약의 (2)에 의해 $d = gh'$이고 $1 \le \deg g < \deg d$인 영이 아닌 $g$가 있다. $g \mid d$이고 $d \mid f$이므로 다항식환의 (6)의 (ii)에 의해 $g \mid f$이고, $\deg g \in A$, $\deg g < m$이 되어 $m$이 최소라는 것과 어긋난다. 따라서 $d$는 기약이다. $d$의 최고차계수를 $e$라 하면 기약의 (3)의 (iii)에 의해 $h = e^{-1}d$는 모닉 기약이고, $d = eh$이므로 $h \mid d$, 다시 $h \mid f$이다.

**2.** 존재: "$0$ 이상인 정수 $n$에 대하여, $f \ne 0$이고 $\deg f \le n$인 모든 $f$는 $k \le \deg f$인 그런 분해를 갖는다"를 $n$에 대한 귀납법으로 보인다. $n = 0$이면 $\deg f = 0$이므로 차수의 (2)에 의해 $f$는 상수 $c$이고, $f = c \cdot 1$은 $k = 0$인 분해이다(빈 곱, 유한 곱의 (1)). $n$에서 성립한다고 하고 $\deg f \le n + 1$이라 하자. $\deg f \le n$이면 귀납 가정이다. $\deg f = n + 1 \ge 1$이면 (1)에 의해 $f = hq$인 모닉 기약 $h$와 $q$가 있다. $f \ne 0$이므로 $q \ne 0$이고, 차수의 (5)에 의해 $\deg f = \deg h + \deg q$이며 $q$의 최고차계수는 $f$의 최고차계수 $c$이다. $\deg h \ge 1$이므로 $\deg q \le n$이고, 귀납 가정에 의해 $q = c\,h_1 \cdots h_k$, $k \le \deg q$인 모닉 기약 $h_1, \dots, h_k$가 있다. $h_{k+1} = h$로 두면 유한 곱의 (2)와 $F[X]$의 교환·결합법칙에 의해 $f = hq = c\,(h_1 \cdots h_k)h_{k+1} = c\,h_1 \cdots h_{k+1}$이고, $k + 1 \le \deg q + \deg h = \deg f$이다.

나머지 문장: 주어진 분해에서 유한 곱의 (3)과 (4)에 의해 $h_1 \cdots h_k = (h_1 \cdots h_{j-1})\,(h_j (h_{j+1} \cdots h_k))$이므로 $h_j \mid f$이다. $P = h_1 \cdots h_k$로 두면 보조 사실에 의해 $P$는 모닉이고 $\deg f = \deg(cP) = \deg P$이다(차수의 (5), $c \ne 0$은 가역원). $k \ge 1$이면 기약 다항식의 차수가 $1$ 이상이므로 $\deg f = \deg P \ge k \ge 1$이고, $k = 0$이면 $P = 1$이므로 $\deg f = 0$이다.

**3.** (2)의 분해 $f = c\,h_1 \cdots h_k$를 잡는다. 각 $h_j$는 $f$를 나누는 모닉 기약 다항식이므로 가정에 의해 차수가 $1$이고, 차수의 (1)에 의해 $h_j = \operatorname{coef}_0(h_j) + X = X - a_j$이다($a_j = -\operatorname{coef}_0(h_j)$). 보조 사실에 의해 $\deg f = \deg(h_1 \cdots h_k) = k$이므로 $k = n$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3$ 위의 $X^4 - [1]$]
$\mathbb{Z}_3$은 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $X^4 - [1] = (X^2 - [1])(X^2 + [1]) = (X - [1])(X + [1])(X^2 + [1])$입니다. $X - [1]$, $X + [1]$은 일차라서 기약이고(기약의 (3)), $X^2 + [1]$은 $[0], [1], [2]$에서 값이 $[1], [2], [2]$이므로 근이 없어 기약입니다(기약의 (5), 대입은 [[evaluation-homomorphism|대입 준동형]]의 (1)). 그래서 (2)의 $c = [1]$, $k = 3 \le 4$인 분해입니다. $X^2 + [1]$이 차수 $2$인 모닉 기약 인수이므로 (3)의 가정은 성립하지 않습니다.
:::

:::counterexample[최고차계수를 떼어 낼 수 없는 $\mathbb{Z}[X]$의 $2X + 1$]
체가 아닌 $\mathbb{Z}$ 위에서는 (2)의 꼴이 없을 수 있습니다. $2X + 1 = 2h$인 $h \in \mathbb{Z}[X]$가 있다면 상수항을 비교해 $1 = 2\operatorname{coef}_0(h)$(다항식환의 (3)의 (iii))이 되는데, $1$은 짝수가 아닙니다. 증명에서 최고차계수의 역원 $e^{-1}$을 곱하는 단계가 체라는 가정을 씁니다.
:::

## 확인 질문

:::check[$\mathbb{R}[X]$에서 $2X^3 - 2X$를 (3)의 꼴로 쓰면?]
$2X^3 - 2X = 2X(X - 1)(X + 1) = 2\,(X - 0)(X - 1)(X - (-1))$입니다. 최고차계수 $c = 2$, $n = 3$, $a_1 = 0$, $a_2 = 1$, $a_3 = -1$입니다.
:::

:::check[$\mathbb{Z}_7$ 위의 $[3]X^2 + [3]$의 (2)의 분해에서 $k$는?]
$[3]X^2 + [3] = [3](X^2 + [1])$입니다. $X^2 + [1]$에 $[0], \dots, [6]$을 넣으면 $[1], [2], [5], [3], [3], [5], [2]$이므로 근이 없고, 차수가 $2$이므로 기약입니다(기약의 (5)). 그래서 $k = 1$, $h_1 = X^2 + [1]$입니다.
:::
