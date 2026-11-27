---
title: 아이젠슈타인 판정법
title_en: Eisenstein's Criterion
aliases: [아이젠슈타인의 판정법, Eisenstein criterion, 원분다항식의 기약성]
kind: theorem
field: ring-theory
msc: ["12E05", "11R09"]
level: undergrad
summary: 소수 p 가 정수 계수 다항식의 최고차계수를 나누지 않고 나머지 계수를 모두 나누며 p² 이 상수항을 나누지 않으면 그 다항식은 ℚ 위에서 기약이다. 이것과 X 를 X + 1 로 옮기는 것으로 1 + X + ⋯ + X^(p−1) 의 기약성을 보이고, Xⁿ − p 가 ℚ 위에서 기약이라는 것에서 ℚ 위에 모든 차수의 기약 다항식이 있음을 얻는다.
requires: [prime-number, well-ordering-principle, divisibility, euclids-lemma, integer-cancellation, ring, ring-basic-properties, ring-homomorphism, integral-domain, ideal, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, binomial-coefficient, binomial-theorem, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial, rational-numbers-field, gauss-lemma]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.3절 Irreducible Polynomials, Theorem 17.17 (p.217), Example 17.18 (p.218); 17.5절 Exercises, 연습문제 8, 20 (p.221)과 연습문제 20 의 힌트 (p.330); 21.1절 Extension Fields, Example 21.21 (p.266); 23.5절 Exercises, 연습문제 20 (p.309); 23.3절 Applications, Example 23.33 (p.306)"
    checked: original
    note: "(1)은 출처 Theorem 17.17(p.217)이다. 출처는 f 의 차수를 적지 않는데, 이 항목은 deg f = n ≥ 1 을 진술에 둔다(n = 0 이면 상수라 기약이 아니다). 출처의 증명은 가우스 보조정리로 Z[x] 의 쪼갬만 보면 된다고 하고, 'Suppose that p ∤ b_0 and p | c_0' 로 한 경우를 쓴 뒤 'Let m be the smallest value of k such that p ∤ c_k' 로 a_m 을 보아 'Therefore, m = n' 으로 끝낸다. 출처의 Theorem 17.14 는 모닉인 다항식에 대한 것이므로, 이 항목은 모닉을 가정하지 않는 가우스 보조정리의 (2)를 쓴다. m 이 가장 작은 첨자라는 것은 정렬 원리이고, m ≤ s < n 이 n 과 어긋나는 것으로 끝낸다. (2)는 출처 연습문제 20(p.221, 원분다항식 Φ_p 의 Q 위의 기약성. 힌트 p.330 은 문제를 다시 적는다)이고, 23.5절 연습문제 20(p.309)은 이 기약성을 'We know that' 으로 쓰고 Φ_p 의 근을 붙인 체를 묻는다. 증명의 X 를 X + 1 로 바꾸는 방법과 이항계수를 소수 p 가 나눈다는 것은 이 강의의 앞 항목들로 쓴다. 출처의 기호 Φ_p 는 쓰지 않는다. (3)의 Xⁿ − p 꼴은 17.3절의 'an easy method of generating irreducible polynomials of any degree'(p.218)와 같은 내용이고, 출처 Example 21.21(p.266)이 x⁶ + 5 를 p = 5 로 판정하는 것과 같은 발상이다(부호가 다르다). 예시 '$p = 5$로 보는 $X^4 - 10X + 5$' 는 출처 Example 17.18(p.218, 16x⁵ − 9x⁴ + 3x² + 6x − 21 을 p = 3 으로), Example 23.33(p.306, x⁵ − 6x³ − 27x − 3)과 같은 종류의 판정이고, 반례와 확인 질문은 출처 연습문제 8(p.221, Q 위의 기약성 넷)과 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 가우스 보조정리 증명 통독, 아이젠슈타인의 n = 0 경계 확인). 독립 검토 없음."
added: 2026-11-27
---

:::statement
다항식환, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수는 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이다. $\mathbb{Z}[X] \subseteq \mathbb{Q}[X]$는 [[rational-numbers-field|유리수체]]의 (4)의 것이다. 정수 사이의 나누어떨어짐 $p \mid a$는 [[divisibility|나누어떨어짐]]의 것이고, 이항계수 $C(n, k)$는 [[binomial-coefficient|이항계수]]의 것이다. 아래에서 $p$는 [[prime-number|소수]]이다.

1. (판정법) $f \in \mathbb{Z}[X]$가 영다항식이 아니고 $n = \deg f \ge 1$이며 $a_k = \operatorname{coef}_k(f)$라 하자. $p \nmid a_n$이고, $0 \le k \le n - 1$인 모든 $k$에서 $p \mid a_k$이며, $p^2 \nmid a_0$이면 $f$는 $\mathbb{Q}$ 위에서 기약이다.
2. ($1 + X + \cdots + X^{p-1}$) $g = \sum_{k=0}^{p-1} X^k \in \mathbb{Z}[X]$라 하자. [[evaluation-homomorphism|대입 준동형]]의 (9)의 $\tau_1$을 $\mathbb{Q}[X]$에서 쓰면
   $$
   g(X + 1) = \sum_{j=0}^{p-1} C(p, j + 1)\, X^j
   $$
   이고, $g$는 $\mathbb{Q}$ 위에서 기약이다.
3. ($X^n - p$) $n \ge 1$인 정수 $n$에 대하여 $X^n - p$는 $\mathbb{Q}$ 위에서 기약이다. 따라서 모든 자연수 $n$에 대하여 차수가 $n$인 $\mathbb{Q}$ 위의 기약 다항식이 있다.
:::

:::english
Polynomial rings, coefficients $\operatorname{coef}_n$, constant polynomials with the reading convention and the indeterminate $X$ are those of the polynomial ring; the degree $\deg$ and leading coefficients are those of the degree of a polynomial; and irreducibility is that of irreducible polynomials. The inclusion $\mathbb{Z}[X] \subseteq \mathbb{Q}[X]$ is that of item (4) of the field of rational numbers. Divisibility $p \mid a$ between integers is that of divisibility, and the binomial coefficients $C(n, k)$ are those of binomial coefficients. Below, $p$ is a prime.

1. (Criterion) Let $f \in \mathbb{Z}[X]$ be nonzero with $n = \deg f \ge 1$ and $a_k = \operatorname{coef}_k(f)$. If $p \nmid a_n$, $p \mid a_k$ for every $k$ with $0 \le k \le n - 1$, and $p^2 \nmid a_0$, then $f$ is irreducible over $\mathbb{Q}$.
2. ($1 + X + \cdots + X^{p-1}$) Let $g = \sum_{k=0}^{p-1} X^k \in \mathbb{Z}[X]$. With $\tau_1$ of item (9) of the evaluation homomorphism taken in $\mathbb{Q}[X]$,
   $$
   g(X + 1) = \sum_{j=0}^{p-1} C(p, j + 1)\, X^j,
   $$
   and $g$ is irreducible over $\mathbb{Q}$.
3. ($X^n - p$) For an integer $n \ge 1$, $X^n - p$ is irreducible over $\mathbb{Q}$. Hence for every natural number $n$ there is an irreducible polynomial of degree $n$ over $\mathbb{Q}$.
:::

## 직관

정수 계수로 $f = GH$라 쪼개졌다고 해 봅시다. 법 $p$로 줄이면 $f$는 최고차항 말고 모두 사라져 $X^n$의 상수배가 됩니다. 그래서 두 인수도 법 $p$로 줄이면 각각 $X$의 거듭제곱의 상수배일 것이라고 짐작할 수 있고, 그렇다면 $G$와 $H$의 상수항을 모두 $p$가 나누어 $p^2 \mid a_0$이 됩니다. 증명은 이 짐작을 쓰지 않고 계수로 따라갑니다. $p$가 나누지 않는 $H$의 계수 가운데 첨자가 가장 작은 것을 잡으면, $f$의 같은 첨자의 계수를 $p$가 나누지 않게 되어 가정과 어긋납니다.

이 판정법은 충분조건입니다. 조건이 맞지 않아도 기약일 수 있습니다(아래 확인 질문). 조건이 맞지 않는 다항식도 $X$를 $X + c$로 옮긴 뒤에 조건이 맞을 수 있고, 옮겨도 기약성은 바뀌지 않으므로([[irreducible-polynomial|기약 다항식]]의 (8)) 그 경우에도 기약임을 알 수 있습니다. (2)가 그 예입니다.

## 증명

:::idea
가우스 보조정리로 정수 계수 쪼갬 $f = GH$만 보면 된다. 두 상수항 가운데 정확히 하나를 $p$가 나누고, $p$가 나누지 않는 그쪽 인수의 계수 가운데 첨자가 가장 작은 것 $c_m$을 잡으면 $a_m$을 $p$가 나누지 않는데 $m < n$이다.
:::

:::hint
$a_m = b_0 c_m + \sum_{k=1}^{m} b_k c_{m-k}$에서 오른쪽의 합은 $p$의 배수입니다.
:::

:::hint
(2)는 $(X - 1)g = X^p - 1$에 $\tau_1$을 쓰고 이항정리로 $(X + 1)^p$를 펼칩니다.
:::

:::proof
**쓰는 사실.** "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "유한 합의 (n)", "유한 곱의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]], [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (n)이다. $\mathbb{Z}[X]$와 $\mathbb{Q}[X]$는 정역이다(차수의 (6), [[rational-numbers-field|유리수체]]의 (1)). [[ideal|아이디얼]]의 (7)에 의해 $p\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이다. 정수의 순서는 [[prime-number|소수]]의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1)을 쓴다.

**$p^2 \nmid \pm p$.** $p^2 t = \pm p$인 정수 $t$가 있으면 $p \ne 0$이므로 [[integer-cancellation|정수의 소거법칙]]의 (2)에 의해 $pt = \pm 1$이고, $p$가 $1$을 나누게 된다. 소수의 진술에 의해 $1$의 양의 약수는 $1$뿐인데 $p \ge 2$이므로 어긋난다.

**1.** $f$가 $\mathbb{Q}$ 위에서 기약이 아니라 하자. [[gauss-lemma|가우스 보조정리]]의 (2)에 의해 $f = GH$이고 $r = \deg G \ge 1$, $s = \deg H \ge 1$인 $G, H \in \mathbb{Z}[X]$가 있다. $b_k = \operatorname{coef}_k(G)$, $c_k = \operatorname{coef}_k(H)$라 하자. 차수의 (6)에 의해 $r + s = n$이므로 $s < n$이고, $a_n = b_r c_s$이다. 곱의 정의에서 $a_0 = b_0 c_0$이다(유한 합의 (1)).

$p \mid a_0 = b_0c_0$이므로 [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $p \mid b_0$이거나 $p \mid c_0$이다. 둘 다이면 $b_0 = pb'$, $c_0 = pc'$이고 $a_0 = p^2 b'c'$이 되어 $p^2 \nmid a_0$과 어긋난다. $f = GH = HG$이므로 필요하면 $G$와 $H$의 이름을 바꿔(그러면 $r$과 $s$, $b_k$와 $c_k$의 이름도 바뀐다) $p \mid c_0$, $p \nmid b_0$이라 하자. $p \nmid a_n = b_r c_s$이므로 $p \nmid c_s$이다($p \mid c_s$이면 $p \mid b_r c_s$). 따라서 $M = \{k \in \mathbb{Z} : 0 \le k \le s,\ p \nmid c_k\}$는 $s$를 포함하고, 정렬 원리의 (가)에 의해 최소 원소 $m$을 갖는다. $p \mid c_0$이므로 $m \ge 1$이고, $m \le s < n$이다.

곱의 정의와 유한 합의 (2)에 의해
$$
a_m = b_0 c_m + \sum_{k=1}^{m} b_k c_{m-k}
$$
이다. $1 \le k \le m$이면 $0 \le m - k < m$이고 $m - k \le s$이므로 $m - k \notin M$, 곧 $p \mid c_{m-k}$이고 $p \mid b_k c_{m-k}$이다. 유한 합의 (8)에 의해 오른쪽의 합 $S$는 $p\mathbb{Z}$에 속한다. $m < n$이므로 가정에 의해 $p \mid a_m$이고, 따라서 $p \mid a_m - S = b_0 c_m$이다. 유클리드 보조정리의 (1)에 의해 $p \mid b_0$이거나 $p \mid c_m$인데, $p \nmid b_0$이고 $m \in M$이므로 둘 다 아니다. 이 모순으로 $f$는 $\mathbb{Q}$ 위에서 기약이다.

**2.** $\tau = \tau_1 : \mathbb{Q}[X] \to \mathbb{Q}[X]$로 쓴다. 대입 준동형의 (9)에 의해 $\tau$는 상수를 그대로 두고 $X$를 $X + 1$로 보내는 환 동형사상이다. 유한 곱의 (11)의 (i)을 $x = X$에 쓰면 $(X - 1)g = X^p - 1$이다. $\tau$를 쓰면 $\tau(X - 1) = (X + 1) - 1 = X$이고, $\tau(1) = 1$이므로 유한 곱의 (9)에 의해 $\tau(X^p) = (X + 1)^p$이다. 따라서
$$
X\,\tau(g) = (X + 1)^p - 1
$$
이다. [[binomial-theorem|이항정리]]의 (1)을 $a = X$, $b = 1$에 쓰면 $(X + 1)^p = \sum_{k=0}^{p} C(p, k) \cdot X^k$이다. [[ring-basic-properties|환의 기본 성질]]의 (6)에 의해 $C(p, k) \cdot X^k = (C(p, k) \cdot 1)X^k$이고, 상수 다항식으로 가는 환 준동형 $\kappa$는 정수배를 보존하므로([[ring-homomorphism|환 준동형]]의 (1)) 유리수체의 (5)에 의해 $C(p, k) \cdot 1$은 상수 다항식 $C(p, k)$이다. [[binomial-coefficient|이항계수]]의 (2)에 의해 $C(p, 0) = 1$이므로, 유한 합의 (2)로 $k = 0$인 항을 떼면
$$
\begin{aligned}
(X + 1)^p - 1 &= \sum_{k=1}^{p} C(p, k) X^k \\
&= X \sum_{j=0}^{p-1} C(p, j + 1) X^j
\end{aligned}
$$
이다. 둘째 등식은 유한 합의 (5)로 첨자를 $j = k - 1$로 옮기고, $X^{j+1} = X X^j$(유한 곱의 (6)의 (i))와 유한 합의 (9)의 분배를 쓴 것이다. 오른쪽의 합을 $w$라 하면 $X\tau(g) = Xw$이고 $X \ne 0$이므로 [[integral-domain|영인자와 정역]]의 (1)에 의해 $\tau(g) = w$이다. 이것이 진술의 등식이다.

다항식환의 (5)의 (i)에 의해 $\operatorname{coef}_j(w) = C(p, j + 1)$ ($0 \le j \le p - 1$)이고 $j \ge p$이면 $0$이다. 그래서 $w \in \mathbb{Z}[X]$이다. 이항계수의 (2)에 의해 $\operatorname{coef}_{p-1}(w) = C(p, p) = 1$이고 $\operatorname{coef}_0(w) = C(p, 1) = p$이므로 $\deg w = p - 1 \ge 1$이고, $p \nmid 1$, $p^2 \nmid p$이다. $0 \le j \le p - 2$이면 $0 < j + 1 < p$이므로 이항계수의 (5)에 의해 $p \mid C(p, j + 1)$이다. (1)에 의해 $w$는 $\mathbb{Q}$ 위에서 기약이고, 기약의 (8)에 의해 $g$도 기약이다.

**3.** $f = X^n - p$의 계수는 $\operatorname{coef}_n(f) = 1$, $1 \le k \le n - 1$이면 $\operatorname{coef}_k(f) = 0$, $\operatorname{coef}_0(f) = -p$이다(다항식환의 (4)의 (iii)과 (2)). $p \nmid 1$이고 $p \mid 0$, $p \mid -p$, $p^2 \nmid -p$이므로 (1)에 의해 $f$는 $\mathbb{Q}$ 위에서 기약이다. $2$는 소수이므로 $X^n - 2$가 차수 $n$인 기약 다항식이다(차수의 (2), (3)).
:::

## 예시와 반례

:::example[$p = 5$로 보는 $X^4 - 10X + 5$]
최고차계수 $1$을 $5$가 나누지 않고, $X$, $X^2$, $X^3$의 계수 $-10$, $0$, $0$과 상수항 $5$는 모두 $5$의 배수이며, $25$는 상수항 $5$를 나누지 않습니다. (1)에 의해 $X^4 - 10X + 5$는 $\mathbb{Q}$ 위에서 기약입니다. 차수가 $4$이므로 근이 없는지만으로는 이 결론을 얻을 수 없습니다.
:::

:::counterexample[$p^2$이 상수항을 나누는 $X^2 - 4$]
$p = 2$이면 최고차계수 $1$을 $2$가 나누지 않고 $2 \mid 0$, $2 \mid -4$이지만 $4 \mid -4$입니다. 실제로 $X^2 - 4 = (X - 2)(X + 2)$이므로 $\mathbb{Q}$ 위에서 기약이 아닙니다. 조건 $p^2 \nmid a_0$이 빠지면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$X^2 + 2X - 1$은 $\mathbb{Q}$ 위에서 기약인가? $X$를 $X + 1$로 옮겨 판정하라.]
$f(X + 1) = (X + 1)^2 + 2(X + 1) - 1 = X^2 + 4X + 2$이고, $p = 2$로 (1)의 조건이 맞습니다($2 \nmid 1$, $2 \mid 4$, $2 \mid 2$, $4 \nmid 2$). 그래서 $f(X + 1)$은 기약이고, 기약 다항식의 (8)에 의해 $f$도 기약입니다. $f$ 자신에는 상수항 $-1$을 나누는 소수가 없어 (1)을 바로 쓸 수 없습니다.
:::

:::check[$X^2 + X + 2$에 (1)을 쓸 수 있는가? 기약인가?]
$X$의 계수 $1$을 나누는 소수가 없으므로 (1)을 쓸 수 없습니다. 그래도 [[gauss-lemma|가우스 보조정리]]의 (3)에 의해 유리수 근의 후보는 $\pm 1$, $\pm 2$이고, 값이 $4$, $2$, $8$, $4$로 $0$이 아니므로 근이 없고, 차수가 $2$이므로 기약 다항식의 (5)에 의해 $\mathbb{Q}$ 위에서 기약입니다. (1)은 충분조건일 뿐입니다.
:::
