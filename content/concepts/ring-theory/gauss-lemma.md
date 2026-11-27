---
title: 가우스 보조정리
title_en: Gauss's Lemma
aliases: [유리근 정리, 정수 계수 다항식의 분해, Gauss lemma, rational root theorem]
kind: theorem
field: ring-theory
msc: ["12E05", "13F20"]
level: undergrad
summary: 정수 계수의 다항식이 유리수 계수의 두 다항식의 곱이면, 영이 아닌 유리수 u 로 두 인수를 u 배와 u⁻¹ 배 해서 정수 계수의 곱으로 바꿀 수 있다. 그래서 정수 계수의 다항식이 ℚ 위에서 기약이 아닌 것은 차수가 1 이상인 정수 계수의 두 다항식으로 쪼개질 때이다. 유리근 정리와 법 p 로 줄여 기약성을 판정하는 법이 따라 나온다.
requires: [prime-number, well-ordering-principle, divisibility, greatest-common-divisor, bezout-identity, integral-domain, prime-factorization-exists, finite-product, integers-modulo-n, ring, ring-homomorphism, field, finite-integral-domain-is-a-field, finite-sums-in-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, irreducible-polynomial, rational-numbers-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.3절 Irreducible Polynomials, Example 17.11 (p.215), 21.1절 Extension Fields 첫머리 (p.260), Lemma 17.13, Theorem 17.14 (p.216), Corollary 17.15, Example 17.16 (p.217); 17.5절 Exercises, 연습문제 5, 8, 18 (p.220–221)"
    checked: original
    note: "출처 Theorem 17.14(p.216)는 모닉인 p(x) ∈ Z[x] 가 차수가 더 작은 두 다항식 α(x), β(x) ∈ Q[x] 의 곱이면 같은 차수의 모닉 정수 계수 다항식의 곱이라는 것이고, 증명은 Lemma 17.13(여러 정수의 최대공약수로 계수를 서로소로 만든 꼴)과 'If d = 1, then c a_m b_n = 1 since p(x) is a monic polynomial' 의 경우 나누기, d ≠ 1 이면 p | d 인 소수로 Z_p[x] 에서 곱이 0 이 되는 모순이다. 이 항목의 (1)은 모닉을 가정하지 않는 꼴이고, 여러 정수의 최대공약수 대신 'df 가 정수 계수 두 인수의 곱인 가장 작은 자연수 d' 를 정렬 원리로 잡는다. 법 p 로 줄여 Z_p[X] 가 정역이라는 것을 쓰는 단계는 출처 증명과 같은 발상이다. (2)는 출처 Theorem 17.17 의 증명(p.217)이 'By Gauss's Lemma, we need only show that f(x) does not factor into polynomials of lower degree in Z[x]' 라고 모닉이 아닌 f 에 쓰는 것을 진술로 올렸다. (3)은 출처 연습문제 18(p.221, The Rational Root Theorem)이고, 모닉인 경우는 출처 Corollary 17.15(p.217)이다. 이 항목은 (3)을 출처 Corollary 17.15 의 증명처럼 일차 인수와 (1)로 증명한다. 예시 '유리근 정리로 보는 $X^2 - 2$와 $X^3 - 3X - 1$' 의 X² − 2 는 출처 Example 17.11(p.215)이 'cannot be factored any further over the rational numbers' 라고 하고 21.1절 첫머리(p.260)가 Q[x] 에서 기약이라고 적는 다항식이고, 유리수 근의 후보 ±1, ±2 를 넣는 방법은 출처 Example 17.16(p.217)이 Corollary 17.15 로 일차 인수를 지우는 것과 같은 발상이다. 확인 질문 '$X^3 - X + 1$은 $\\mathbb{Q}$ 위에서 기약인가?' 는 출처 연습문제 8(p.221, Q 위의 기약성 넷)과 같은 종류의 물음이고, 법 3 으로 줄인 X³ + [2]X + [1] 의 근을 찾는 계산은 출처 연습문제 5(p.220, 근을 모두 찾아라)와 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 가우스 보조정리 증명 통독, 아이젠슈타인의 n = 0 경계 확인). 독립 검토 없음."
added: 2026-11-27
---

:::statement
다항식환, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이다. [[rational-numbers-field|유리수체]]의 (4)에 의해 $\mathbb{Z}[X] \subseteq \mathbb{Q}[X]$이고, 정수 계수의 다항식은 $\mathbb{Q}[X]$의 원소로도 본다. 소수 $p$에 대하여 $\rho : \mathbb{Z} \to \mathbb{Z}_p$는 [[evaluation-homomorphism|대입 준동형]]의 (10)의 환 준동형이고, $f^{\rho}$는 $f$를 법 $p$로 줄인 다항식이다.

1. (가우스 보조정리) $f \in \mathbb{Z}[X]$이고 $g, h \in \mathbb{Q}[X]$가 영다항식이 아니며 $f = gh$라 하자. 그러면 $ug \in \mathbb{Z}[X]$이고 $u^{-1}h \in \mathbb{Z}[X]$인 $0$이 아닌 유리수 $u$가 있다. 따라서 $g_1 = ug$, $h_1 = u^{-1}h$로 두면 $f = g_1 h_1$이고 $\deg g_1 = \deg g$, $\deg h_1 = \deg h$이다.
2. ($\mathbb{Q}$ 위의 기약성) $f \in \mathbb{Z}[X]$가 영다항식이 아니고 $\deg f \ge 1$이라 하자. $f$가 $\mathbb{Q}$ 위에서 기약이 아닌 것은 정확히 $f = g_1 h_1$이고 $\deg g_1 \ge 1$, $\deg h_1 \ge 1$인 영이 아닌 $g_1, h_1 \in \mathbb{Z}[X]$가 있을 때이다.
3. (유리근 정리) $f \in \mathbb{Z}[X]$가 영다항식이 아니고, $a$를 $f$의 최고차계수, $a_0 = \operatorname{coef}_0(f)$라 하자. $r/s$가 $s \ge 1$, $\gcd(r, s) = 1$인 기약분수 꼴의 유리수이고 $f$의 근이면 $r \mid a_0$이고 $s \mid a$이다. 특히 $f$가 모닉이면 $f$의 유리수 근은 정수이고 $a_0$을 나눈다.
4. (법 $p$로 줄이기) $p$가 소수이고 $f \in \mathbb{Z}[X]$가 영다항식이 아니며 $\deg f \ge 1$이고 $p$가 $f$의 최고차계수를 나누지 않는다고 하자. $f^{\rho}$가 $\mathbb{Z}_p$ 위에서 기약이면 $f$는 $\mathbb{Q}$ 위에서 기약이다.
:::

:::english
Polynomial rings, coefficients $\operatorname{coef}_n$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility are those of the polynomial ring; the degree $\deg$, leading coefficients and monic polynomials are those of the degree of a polynomial; and irreducibility is that of irreducible polynomials. By item (4) of the field of rational numbers, $\mathbb{Z}[X] \subseteq \mathbb{Q}[X]$, and polynomials with integer coefficients are also regarded as elements of $\mathbb{Q}[X]$. For a prime $p$, $\rho : \mathbb{Z} \to \mathbb{Z}_p$ is the ring homomorphism of item (10) of the evaluation homomorphism, and $f^{\rho}$ is the reduction of $f$ modulo $p$.

1. (Gauss's lemma) Let $f \in \mathbb{Z}[X]$ and let $g, h \in \mathbb{Q}[X]$ be nonzero with $f = gh$. Then there is a nonzero rational number $u$ with $ug \in \mathbb{Z}[X]$ and $u^{-1}h \in \mathbb{Z}[X]$. Hence with $g_1 = ug$ and $h_1 = u^{-1}h$ we have $f = g_1 h_1$, $\deg g_1 = \deg g$ and $\deg h_1 = \deg h$.
2. (Irreducibility over $\mathbb{Q}$) Let $f \in \mathbb{Z}[X]$ be nonzero with $\deg f \ge 1$. Then $f$ is not irreducible over $\mathbb{Q}$ if and only if $f = g_1 h_1$ for some nonzero $g_1, h_1 \in \mathbb{Z}[X]$ with $\deg g_1 \ge 1$ and $\deg h_1 \ge 1$.
3. (Rational root theorem) Let $f \in \mathbb{Z}[X]$ be nonzero, let $a$ be its leading coefficient and $a_0 = \operatorname{coef}_0(f)$. If a rational number $r/s$ in lowest terms, $s \ge 1$ and $\gcd(r, s) = 1$, is a root of $f$, then $r \mid a_0$ and $s \mid a$. In particular, if $f$ is monic, every rational root of $f$ is an integer dividing $a_0$.
4. (Reduction modulo $p$) Let $p$ be a prime and let $f \in \mathbb{Z}[X]$ be nonzero with $\deg f \ge 1$ such that $p$ does not divide the leading coefficient of $f$. If $f^{\rho}$ is irreducible over $\mathbb{Z}_p$, then $f$ is irreducible over $\mathbb{Q}$.
:::

## 직관

유리수 계수로 쪼갠 식 $f = gh$에서 $g$의 계수에 분모가 있으면, $g$에 그 분모를 곱하고 $h$를 그만큼 나누어 계수를 옮길 수 있습니다. 가우스 보조정리는 이렇게 상수를 두 인수 사이에서 주고받으면 둘 다 정수 계수로 만들 수 있다는 것입니다. 증명의 열쇠는 "어떤 소수 $p$가 곱의 모든 계수를 나누면 두 인수 가운데 하나의 모든 계수를 나눈다"는 것이고, 이것은 법 $p$로 줄인 다항식환 $\mathbb{Z}_p[X]$가 정역이라는 것과 같은 말입니다.

그래서 정수 계수의 다항식이 $\mathbb{Q}$ 위에서 기약인지는 정수 계수로만 따져도 됩니다((2)). 일차 인수 $sX - r$을 따지면 유리근 정리((3))가 되어, 유리수 근의 후보가 유한 개로 줄어듭니다. 법 $p$로 줄여서 쪼개지지 않으면 원래 다항식도 쪼개지지 않는다는 (4)는 같은 생각의 다른 쓰임입니다. 최고차계수를 $p$가 나누지 않아야 줄여도 차수가 바뀌지 않습니다.

## 증명

:::idea
$df$가 정수 계수 두 인수(각각 $g$, $h$의 유리수배)의 곱이 되는 자연수 $d$ 가운데 가장 작은 것을 잡는다. $d \ge 2$이면 $d$의 소인수 $p$로 법 $p$를 취해 한 인수의 계수가 모두 $p$의 배수임을 보이고, 그 인수를 $p$로 나누어 더 작은 $d$를 얻는다.
:::

:::hint
처음의 $d$는 [[rational-numbers-field|유리수체]]의 (3)의 공분모 둘의 곱으로 잡습니다.
:::

:::hint
(3)은 $f = (sX - r)\,q$로 쓰고 (1)을 쓴 뒤, $us$와 $ur$이 정수이고 $\gcd(r, s) = 1$이면 $u$가 정수라는 것을 베주 항등식으로 봅니다.
:::

:::proof
**쓰는 사실.** "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "유리수체의 (n)"은 [[rational-numbers-field|유리수체]]의 (n)이다. $\mathbb{Q}$는 체이고(유리수체의 (1)), [[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)에 의해 $\mathbb{Z}_p$도 체이다. 체는 정역이므로([[field|가역원과 체]]의 (3)) 차수의 (6)에 의해 $\mathbb{Z}[X]$, $\mathbb{Q}[X]$, $\mathbb{Z}_p[X]$는 정역이다. 유리수체의 (4)에 의해 $\mathbb{Z}[X]$의 원소끼리의 합, 곱, 차수, 최고차계수는 $\mathbb{Q}[X]$에서 보아도 같다. [[ring-homomorphism|환 준동형]]의 (7)의 (i)에 의해 $\rho$의 핵은 $p\mathbb{Z}$이므로, 정수 $a$에 대하여 $\rho(a) = [0]$인 것은 정확히 $p \mid a$일 때이다. 정수의 순서는 [[prime-number|소수]]의 (Z1)–(Z3)과 [[well-ordering-principle|정렬 원리]]의 (L1)을 쓴다.

**1.** 유리수체의 (3)에 의해 $ag, bh \in \mathbb{Z}[X]$인 자연수 $a$, $b$가 있다. 자연수의 집합
$$
\begin{aligned}
D = \{\, &d \in \mathbb{N} : \\
&u, v \in \mathbb{Q} - \{0\}, \\
&ug, vh \in \mathbb{Z}[X], \\
&df = (ug)(vh) \\
&\text{인 } u, v \text{가 있다} \,\}
\end{aligned}
$$
는 $(ag)(bh) = (ab)(gh) = (ab)f$이므로 $ab$를 포함한다. 정렬 원리의 (2)에 의해 최소 원소 $d$가 있다. $u$, $v$를 그 조건의 유리수라 하고 $G = ug$, $H = vh$라 하자.

$d \ge 2$라 하자. [[prime-factorization-exists|소인수분해의 존재]]에 의해 $d = p_1 \cdots p_{\ell}$인 소수들이 있고, [[finite-product|유한 곱]]의 (P4)에 의해 $p = p_1$은 $d$를 나눈다. $d = pd'$이라 하면 $d' > 0$이다($d' \le 0$이면 (Z2)에 의해 $d \le 0$). 대입의 (3)에 의해 계수 사상 $\mathbb{Z}[X] \to \mathbb{Z}_p[X]$는 상수 다항식 $c$를 상수 다항식 $\rho(c)$로 보내는 환 준동형이므로
$$
\begin{aligned}
G^{\rho}H^{\rho} &= (GH)^{\rho} = (df)^{\rho} \\
&= \rho(d) f^{\rho} = [0] f^{\rho} = 0
\end{aligned}
$$
이다($p \mid d$). $\mathbb{Z}_p[X]$는 정역이므로 $G^{\rho} = 0$이거나 $H^{\rho} = 0$이다. $G^{\rho} = 0$이면 $u' = p^{-1}u$, $v' = v$로, 그렇지 않고 $H^{\rho} = 0$이면 $u' = u$, $v' = p^{-1}v$로 둔다. 대입의 (10)에 의해 $G^{\rho} = 0$이면 $p$는 $G$의 모든 계수를 나누므로 $p^{-1}G = u'g$의 계수 $p^{-1}\operatorname{coef}_k(G)$는 모두 정수이고(다항식환의 (3)의 (iii)), 다항식환의 (7)의 (i)에 의해 $u'g \in \mathbb{Z}[X]$이다. $H^{\rho} = 0$인 경우 같은 이유로 $v'h \in \mathbb{Z}[X]$이다. 어느 경우든 $u'g, v'h \in \mathbb{Z}[X]$이고, $u'$, $v'$은 $0$이 아닌 유리수이며, $p\,(u'g)(v'h) = GH = df = p\,d'f$이다. $\mathbb{Q}[X]$는 정역이고 $p \ne 0$이므로 [[integral-domain|영인자와 정역]]의 (1)에 의해 $(u'g)(v'h) = d'f$이다. 그래서 $d' \in D$인데 $d = pd' \ge 2d' > d'$이므로((Z3)) $d$가 최소라는 것과 어긋난다((L1)).

따라서 $d = 1$이고 $f = (ug)(vh) = (uv)\,gh = (uv)f$이다. $g, h \ne 0$이므로 $f = gh \ne 0$이고, $(uv - 1)f = 0$에서 상수 다항식 $uv - 1$은 $0$이다. 다항식환의 (3)의 (i)에 의해 $uv = 1$, 곧 $v = u^{-1}$이다. $u \ne 0$은 $\mathbb{Q}$의 가역원이므로 차수의 (5)에 의해 $\deg(ug) = \deg g$, $\deg(u^{-1}h) = \deg h$이다.

**2.** $f = g_1 h_1$이고 $g_1, h_1 \in \mathbb{Z}[X]$의 차수가 $1$ 이상이면, 같은 등식과 차수가 $\mathbb{Q}[X]$에서도 성립하므로 [[irreducible-polynomial|기약 다항식]]의 (2)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이 아니다. 거꾸로 $f$가 $\mathbb{Q}$ 위에서 기약이 아니면 같은 항목의 (2)에 의해 $f = gh$이고 $\deg g, \deg h \ge 1$인 $g, h \in \mathbb{Q}[X]$가 있고, (1)의 $g_1$, $h_1$이 원하는 것이다.

**3.** $x = r/s$라 하자. [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (2)에 의해 $\mathbb{Q}[X]$에서 $f = (X - x)q$인 $q$가 있다. $X - x = s^{-1}(sX - r)$이므로 $f = (sX - r)(s^{-1}q)$이고, $f \ne 0$이므로 두 인수는 영이 아니다. (1)에 의해 $u(sX - r) \in \mathbb{Z}[X]$이고 $h_1 = u^{-1}s^{-1}q \in \mathbb{Z}[X]$인 $0$이 아닌 유리수 $u$가 있다. $u(sX - r) = (us)X - ur$의 계수이므로 $us$와 $ur$은 정수이다. [[bezout-identity|베주 항등식]]에 의해 $ry + sz = \gcd(r, s) = 1$인 정수 $y$, $z$가 있으므로 $u = (ur)y + (us)z$는 정수이다. $g_1 = (us)X - ur$로 두면 $f = g_1 h_1$은 $\mathbb{Z}[X]$에서의 등식이다. 차수의 (6)에 의해 $f$의 최고차계수는 $g_1$의 최고차계수 $us$와 $h_1$의 최고차계수 $w$의 곱이므로 $a = s(uw)$이고 $s \mid a$이다. 곱의 정의에서 $\operatorname{coef}_0(g_1h_1) = \operatorname{coef}_0(g_1)\operatorname{coef}_0(h_1)$([[finite-sums-in-a-ring|환의 유한 합]]의 (1))이므로 $a_0 = (-ur)\operatorname{coef}_0(h_1) = r(-u\operatorname{coef}_0(h_1))$이고 $r \mid a_0$이다. $f$가 모닉이면 $s \mid 1$이고, $s$는 $1$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $s \le 1$, 곧 $s = 1$이다. 그래서 $x = r$은 정수이고 $r \mid a_0$이다.

**4.** 대우를 보인다. $f$가 $\mathbb{Q}$ 위에서 기약이 아니면 (2)에 의해 $f = g_1 h_1$이고 $\deg g_1, \deg h_1 \ge 1$인 $g_1, h_1 \in \mathbb{Z}[X]$가 있다. 차수의 (6)에 의해 $f$의 최고차계수는 두 최고차계수 $b$, $c$의 곱이다. $p \mid b$이거나 $p \mid c$이면 $p \mid bc$가 되므로 $p \nmid b$, $p \nmid c$이고, $\rho(b) \ne [0]$, $\rho(c) \ne [0]$이다. 대입의 (3)의 (i)에 의해 $\deg g_1^{\rho} = \deg g_1 \ge 1$, $\deg h_1^{\rho} = \deg h_1 \ge 1$이고, 같은 이유로 $\deg f^{\rho} = \deg f \ge 1$이다. $f^{\rho} = g_1^{\rho} h_1^{\rho}$이므로 기약 다항식의 (2)에 의해 $f^{\rho}$는 $\mathbb{Z}_p$ 위에서 기약이 아니다.
:::

## 예시와 반례

:::example[유리근 정리로 보는 $X^2 - 2$와 $X^3 - 3X - 1$]
$X^2 - 2$는 모닉이므로 (3)에 의해 유리수 근은 $-2$를 나누는 정수, 곧 $\pm 1$, $\pm 2$ 가운데 하나여야 합니다. 그 값은 $(\pm 1)^2 - 2 = -1$, $(\pm 2)^2 - 2 = 2$로 $0$이 아니므로 유리수 근이 없고, 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $\mathbb{Q}$ 위에서 기약입니다. 같은 방법으로 $X^3 - 3X - 1$의 유리수 근의 후보는 $\pm 1$이고, 값은 $1 - 3 - 1 = -3$, $-1 + 3 - 1 = 1$이므로 근이 없어 $\mathbb{Q}$ 위에서 기약입니다.
:::

:::counterexample[$\mathbb{Z}[X]$에서 상수와 일차식의 곱인 $2X + 2$]
$2X + 2$는 차수가 $1$이므로 $\mathbb{Q}$ 위에서 기약입니다. 그런데 $\mathbb{Z}[X]$에서는 $2X + 2 = 2(X + 1)$이고, $2$와 $X + 1$은 둘 다 $\mathbb{Z}[X]$의 가역원이 아닙니다(차수의 (7)에 의해 가역원은 상수 $\pm 1$뿐). 곧 $2X + 2$는 정역 $\mathbb{Z}[X]$의 기약원이 아닙니다. (2)가 "$\deg g_1 \ge 1$, $\deg h_1 \ge 1$"인 쪼갬만 세는 까닭이 여기에 있습니다. 상수 인수를 떼어 내는 쪼갬은 $\mathbb{Q}$ 위의 기약성과 상관이 없습니다.
:::

## 확인 질문

:::check[$X^3 - X + 1$은 $\mathbb{Q}$ 위에서 기약인가?]
기약입니다. 모닉이므로 (3)에 의해 유리수 근의 후보는 $\pm 1$인데, 값이 $1$, $1$이므로 근이 없고 차수가 $3$이므로 기약 다항식의 (5)에 의해 기약입니다. (4)로도 볼 수 있습니다. 법 $3$으로 줄이면 $X^3 + [2]X + [1]$이고, $[0]$, $[1]$, $[2]$에서 값이 $[1]$, $[4] = [1]$, $[13] = [1]$이라 근이 없으므로 $\mathbb{Z}_3$ 위에서 기약입니다. 최고차계수 $1$을 $3$이 나누지 않으므로 (4)에 의해 $\mathbb{Q}$ 위에서 기약입니다.
:::

:::check[$2X^2 - 3X + 1$의 유리수 근의 후보와 실제 근은?]
(3)에 의해 $r \mid 1$, $s \mid 2$이므로 후보는 $\pm 1$, $\pm \frac{1}{2}$입니다. 넣어 보면 $1$에서 $2 - 3 + 1 = 0$, $\frac{1}{2}$에서 $\frac{1}{2} - \frac{3}{2} + 1 = 0$이고, $-1$과 $-\frac{1}{2}$에서는 $6$과 $3$입니다. 실제로 $2X^2 - 3X + 1 = (2X - 1)(X - 1)$입니다.
:::
