---
title: 다항식의 차수
title_en: Degree of a Polynomial
aliases: [차수, 최고차계수, 모닉 다항식, 상수항, degree, leading coefficient, monic polynomial, constant term]
kind: definition
field: ring-theory
msc: ["13"]
level: undergrad
summary: 영이 아닌 다항식의 차수를 0 이 아닌 계수의 가장 큰 번호로 정의하고 최고차계수, 모닉, 상수항을 정한다. 영다항식에는 차수를 정의하지 않는다. 합과 곱의 차수, 최고차계수가 가역원인 다항식과의 곱, 정역 위의 다항식환이 정역이라는 것과 그 가역원을 보인다.
requires: [prime-number, well-ordering-principle, integers-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, field, subring, finite-sums-in-a-ring, polynomial-ring]
sources:
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings, 계수·최고차계수·모닉·차수의 정의 (p.209–210), Proposition 17.4 (p.211–212); 17.2절 The Division Algorithm, Theorem 17.6 의 증명 (p.213); 17.5절 Exercises, 연습문제 6, 7 (p.221), 29 (p.222)"
    checked: original
    note: "출처는 a_n ≠ 0 인 가장 큰 n 을 차수로 하고 영다항식의 차수를 −∞ 로 정한다(p.210). 이 항목은 영다항식에 차수를 정의하지 않고 −∞ 를 쓰지 않는다. 그래서 '차수가 n 이하' 는 'f = 0 이거나 deg f ≤ n' 으로 쓴다((1)). 출처 Proposition 17.4(p.211)는 정역 R 에서 deg p + deg q = deg(pq) 와 R[x] 가 정역이라는 것을 진술하고, 증명은 영이 아닌 두 다항식의 최고차항 a_m b_n x^{m+n} 이 0 이 아니라는 것이다. 이 항목의 (6)이 그것이고, 진술에서 영다항식을 뺐다. (4)의 m + n 차 계수의 계산은 Proposition 17.4 의 증명이 'The leading term of p(x)q(x) is a_m b_n x^{m+n}' 으로 쓰는 것이고, 이 항목은 정역 가정 없이 진술한다. (5)의 '최고차계수가 가역원이면 정역이 아니어도 차수가 더해진다' 는 출처 Theorem 17.6 의 유일성 증명(p.213)이 체 위에서 deg(g(x)[q(x) − q_1(x)]) ≥ deg g(x) 로 쓰는 단계를 최고차계수가 가역원인 경우로 넓힌 것이다(나눗셈 정리에 쓴다). (3)의 합의 차수는 출처 연습문제 29(p.222, deg(p + q) ≤ max(deg p, deg q))와 같은 내용이고, 이 항목은 max 대신 'n 이하' 꼴과 차수가 다른 경우의 등호로 진술한다. (7)은 출처 연습문제 6(p.221, Z[x] 의 가역원을 모두 구하라)을 정역 일반으로 한 것이다. 출처 연습문제 7(p.221)은 Z_4[x] 에서 차수가 1 보다 큰 가역원을 찾게 한다 — 정역이 아니면 (7)이 틀릴 수 있다는 것과 같은 발상이다. 그 연습문제의 힌트(p.330)는 2x + 1 을 보라고 하고, 확인 질문 '$\\mathbb{Z}_4[X]$에서 $[2]X$와 $[2]X + [1]$의 곱의 차수는?' 의 [2]X + [1] 은 그 다항식과 같다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 가환환이라 하자. 다항식환 $R[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식 $\kappa(c)$와 읽는 약속, 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 가역원과 $R^{\times}$는 [[field|가역원과 체]]의 것이다.

**차수.** $f \in R[X]$가 영다항식이 아니면, $0$ 이상인 정수 $n$ 가운데 $\operatorname{coef}_n(f) \ne 0$인 것 전체의 집합은 공집합이 아니고 위로 유계이므로 최대 원소를 갖는다([[well-ordering-principle|정렬 원리]]의 (나)). 이 최대 원소를 $f$의 **차수**(degree)라 하고 $\deg f$로 쓴다. $\operatorname{coef}_{\deg f}(f)$를 $f$의 **최고차계수**(leading coefficient)라 하고, 최고차계수가 $1$인 다항식을 **모닉**(monic) 다항식이라 한다. 영다항식에는 차수와 최고차계수를 정의하지 않는다. 모든 $f \in R[X]$에 대하여 $\operatorname{coef}_0(f)$를 $f$의 **상수항**(constant term)이라 한다. "$f$가 $0$이거나 차수가 $n$ 이하"는 "$f = 0$이거나 $\deg f \le n$"을 뜻한다.

다음이 성립한다. 아래에서 $f$, $g$는 $R[X]$의 원소이고 $n$, $m$, $k$는 $0$ 이상인 정수이다.

1. (차수의 판정) $f \ne 0$일 때 $\deg f = n$인 것은 정확히 $\operatorname{coef}_n(f) \ne 0$이고 $k > n$인 모든 $k$에서 $\operatorname{coef}_k(f) = 0$일 때이다. 또 "$f = 0$이거나 $\deg f \le n$"인 것은 정확히 $k > n$인 모든 $k$에서 $\operatorname{coef}_k(f) = 0$일 때이고, 이때 $f = \sum_{k=0}^{n} \operatorname{coef}_k(f)\, X^k$이다.
2. (작은 차수) $f \ne 0$일 때 $\deg f = 0$인 것은 정확히 $f$가 $0$이 아닌 $c \in R$의 상수 다항식 $c$일 때이다. 따라서 "$f = 0$이거나 $\deg f = 0$"인 것은 정확히 $f$가 상수 다항식일 때이다. $X^k$는 차수가 $k$인 모닉 다항식이다. $c \in R$이면 $X - c$와 $X + c$는 차수가 $1$인 모닉 다항식이다.
3. (합) $f$, $g$가 각각 $0$이거나 차수가 $n$ 이하이면 $f + g$, $f - g$, $-f$도 그렇다. $f \ne 0$이면 $-f \ne 0$이고 $\deg(-f) = \deg f$이다. $f \ne 0$, $g \ne 0$이고 $\deg f \ne \deg g$이면 $f + g \ne 0$이고 $\deg(f + g)$는 $\deg f$, $\deg g$ 가운데 큰 쪽이며, $f + g$의 최고차계수는 차수가 큰 쪽의 최고차계수이다.
4. (곱의 계수) $f \ne 0$, $g \ne 0$이고 $m = \deg f$, $n = \deg g$라 하자. 그러면 $k > m + n$인 모든 $k$에서 $\operatorname{coef}_k(fg) = 0$이고, $\operatorname{coef}_{m+n}(fg)$는 $f$의 최고차계수와 $g$의 최고차계수의 곱이다. 따라서 $fg = 0$이거나 $\deg(fg) \le m + n$이고, 두 최고차계수의 곱이 $0$이 아니면 $fg \ne 0$, $\deg(fg) = m + n$이며 $fg$의 최고차계수는 두 최고차계수의 곱이다. 또 $f$, $g$가 각각 $0$이거나 차수가 $m$ 이하, $n$ 이하이면 $fg$는 $0$이거나 차수가 $m + n$ 이하이다.
5. (최고차계수가 가역원) $f \ne 0$이고 $f$의 최고차계수 $u$가 $R$의 가역원이면, 영다항식이 아닌 모든 $g$에서 $fg \ne 0$, $\deg(fg) = \deg f + \deg g$이고 $fg$의 최고차계수는 $u$와 $g$의 최고차계수의 곱이다. 특히 모닉 다항식 $f$와 영이 아닌 $g$에 대하여 그렇고, 두 모닉 다항식의 곱은 모닉이다. $c \in R^{\times}$이고 $g \ne 0$이면 $\deg(cg) = \deg g$이다.
6. (정역) $R$이 [[integral-domain|정역]]이면, 영다항식이 아닌 $f$, $g$에서 $fg \ne 0$, $\deg(fg) = \deg f + \deg g$이고 $fg$의 최고차계수는 두 최고차계수의 곱이다. 따라서 $R[X]$는 정역이다.
7. (가역원) $c \in R^{\times}$이면 상수 다항식 $c$는 $R[X]$의 가역원이다. $R$이 정역이면 $R[X]$의 가역원은 정확히 $c \in R^{\times}$인 상수 다항식 $c$들이다. 특히 $F$가 [[field|체]]이면 $F[X]$의 가역원은 정확히 영이 아닌 상수 다항식들이다.
8. (부분환) $R_0$이 $1 \in R_0$인 $R$의 [[subring|부분환]]이고 $f \in R_0[X]$이면, $f$가 영다항식인지, $f$의 차수, 최고차계수, 상수항, 모닉인지는 $f$를 $R_0[X]$의 원소로 보든 $R[X]$의 원소로 보든 같다.
:::

:::english
Let $R$ be a commutative ring with unity $1$. The polynomial ring $R[X]$, the coefficients $\operatorname{coef}_n$, the constant polynomials $\kappa(c)$ with the reading convention, and the indeterminate $X$ are those of the polynomial ring, and units and $R^{\times}$ are those of units and fields.

**Degree.** If $f \in R[X]$ is not the zero polynomial, the set of nonnegative integers $n$ with $\operatorname{coef}_n(f) \ne 0$ is nonempty and bounded above, so it has a greatest element (part (b) of the well-ordering principle). This greatest element is called the **degree** of $f$ and written $\deg f$. $\operatorname{coef}_{\deg f}(f)$ is called the **leading coefficient** of $f$, and a polynomial with leading coefficient $1$ is called **monic**. The degree and the leading coefficient are not defined for the zero polynomial. For every $f \in R[X]$, $\operatorname{coef}_0(f)$ is called the **constant term** of $f$. "$f$ is $0$ or has degree at most $n$" means "$f = 0$ or $\deg f \le n$".

The following hold. Below, $f$, $g$ are elements of $R[X]$ and $n$, $m$, $k$ are nonnegative integers.

1. (Determining the degree) For $f \ne 0$, $\deg f = n$ if and only if $\operatorname{coef}_n(f) \ne 0$ and $\operatorname{coef}_k(f) = 0$ for all $k > n$. Also, "$f = 0$ or $\deg f \le n$" holds if and only if $\operatorname{coef}_k(f) = 0$ for all $k > n$, and in that case $f = \sum_{k=0}^{n} \operatorname{coef}_k(f)\, X^k$.
2. (Small degrees) For $f \ne 0$, $\deg f = 0$ if and only if $f$ is the constant polynomial $c$ of some nonzero $c \in R$. Hence "$f = 0$ or $\deg f = 0$" holds if and only if $f$ is a constant polynomial. $X^k$ is a monic polynomial of degree $k$. If $c \in R$, then $X - c$ and $X + c$ are monic polynomials of degree $1$.
3. (Sums) If $f$ and $g$ are each $0$ or of degree at most $n$, then so are $f + g$, $f - g$ and $-f$. If $f \ne 0$, then $-f \ne 0$ and $\deg(-f) = \deg f$. If $f \ne 0$, $g \ne 0$ and $\deg f \ne \deg g$, then $f + g \ne 0$, $\deg(f + g)$ is the larger of $\deg f$ and $\deg g$, and the leading coefficient of $f + g$ is that of the one with larger degree.
4. (Coefficients of a product) Let $f \ne 0$, $g \ne 0$, $m = \deg f$ and $n = \deg g$. Then $\operatorname{coef}_k(fg) = 0$ for all $k > m + n$, and $\operatorname{coef}_{m+n}(fg)$ is the product of the leading coefficients of $f$ and $g$. Hence $fg = 0$ or $\deg(fg) \le m + n$; and if the product of the two leading coefficients is not $0$, then $fg \ne 0$, $\deg(fg) = m + n$, and the leading coefficient of $fg$ is the product of the two leading coefficients. Also, if $f$ and $g$ are each $0$ or of degree at most $m$ and at most $n$ respectively, then $fg$ is $0$ or of degree at most $m + n$.
5. (Unit leading coefficient) If $f \ne 0$ and the leading coefficient $u$ of $f$ is a unit of $R$, then for every nonzero $g$, $fg \ne 0$, $\deg(fg) = \deg f + \deg g$, and the leading coefficient of $fg$ is the product of $u$ and the leading coefficient of $g$. In particular this holds for a monic $f$ and a nonzero $g$, and the product of two monic polynomials is monic. If $c \in R^{\times}$ and $g \ne 0$, then $\deg(cg) = \deg g$.
6. (Integral domains) If $R$ is an integral domain, then for nonzero $f$ and $g$, $fg \ne 0$, $\deg(fg) = \deg f + \deg g$, and the leading coefficient of $fg$ is the product of the two leading coefficients. Hence $R[X]$ is an integral domain.
7. (Units) If $c \in R^{\times}$, then the constant polynomial $c$ is a unit of $R[X]$. If $R$ is an integral domain, then the units of $R[X]$ are exactly the constant polynomials $c$ with $c \in R^{\times}$. In particular, if $F$ is a field, the units of $F[X]$ are exactly the nonzero constant polynomials.
8. (Subrings) If $R_0$ is a subring of $R$ with $1 \in R_0$ and $f \in R_0[X]$, then whether $f$ is the zero polynomial, the degree, the leading coefficient, the constant term of $f$, and whether $f$ is monic are the same whether $f$ is regarded as an element of $R_0[X]$ or of $R[X]$.
:::

## 직관

차수는 다항식을 계수의 열로 보았을 때 $0$이 아닌 마지막 칸의 번호입니다. $3 + 2X - X^3$의 차수는 $3$이고 최고차계수는 $-1$, 상수항은 $3$입니다. 영다항식에는 $0$이 아닌 칸이 없으므로 "마지막 칸"이 없고, 그래서 차수를 정하지 않습니다. 이 때문에 여러 진술이 "$f = 0$이거나 $\deg f \le n$" 꼴로 적힙니다.

두 다항식을 곱하면 가장 높은 칸끼리 곱한 것이 $X^{m+n}$의 계수로 남고, 그보다 높은 칸은 생기지 않습니다((4)). 그런데 두 최고차계수의 곱이 $0$이면 그 맨 위 칸이 사라져 차수가 줄어들거나 곱이 영다항식이 됩니다. 계수환에 곱이 $0$인 $0$이 아닌 두 원소가 있으면 이런 일이 생길 수 있습니다. $\mathbb{Z}_6$에서 $[2][3] = [0]$이므로 $([2]X + [1])([3]X + [1]) = [5]X + [1]$의 차수는 $1 + 1 = 2$가 아니라 $1$입니다. 최고차계수가 가역원이면(특히 모닉이면) 이런 일이 생기지 않고((5)), 정역에서는 언제나 생기지 않습니다((6)).

## 증명

:::idea
차수의 성질은 모두 "$k > n$이면 $\operatorname{coef}_k = 0$"이라는 조건을 계수의 식에 넣어 확인한다. 곱에서는 $\operatorname{coef}_{m+n}(fg)$의 합에서 $k = m$인 항만 남는다.
:::

:::hint
$\operatorname{coef}_{m+n}(fg) = \sum_{k=0}^{m+n} \operatorname{coef}_k(f)\operatorname{coef}_{m+n-k}(g)$에서 $k < m$이면 $m + n - k > n$입니다.
:::

:::hint
가역원 $u$와 $b \ne 0$에 대하여 $ub = 0$이면 양변에 $u^{-1}$을 곱해 봅니다.
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓴다. "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n)이다.

**정의에 대하여.** $f \ne 0$이면 $\operatorname{coef}_n(f) \ne 0$인 $n$이 있으므로 그 집합은 공집합이 아니다. 다항식의 정의에 의해 $n > N$이면 계수가 $0$인 $N$이 있으므로 그 집합의 모든 원소는 $N$ 이하이다((Z5)). 따라서 정렬 원리의 (나)에 의해 최대 원소가 있고, 정렬 원리의 (1)에 의해 하나뿐이다.

**1의 증명.** 집합 $\{k : \operatorname{coef}_k(f) \ne 0\}$의 최대 원소가 $n$이라는 것은 정확히 $n$이 그 집합에 속하고 그보다 큰 원소가 없다는 것, 곧 $\operatorname{coef}_n(f) \ne 0$이고 $k > n$이면 $\operatorname{coef}_k(f) = 0$이라는 것이다((Z5), (L1)). 둘째 주장: $f = 0$이면 모든 계수가 $0$이다. $\deg f \le n$이고 $k > n$이면 $k > \deg f$((Z6))이므로 앞의 판정에 의해 $\operatorname{coef}_k(f) = 0$이다. 거꾸로 $k > n$에서 계수가 모두 $0$이고 $f \ne 0$이면 $\deg f$는 계수가 $0$이 아닌 번호이므로 $\deg f > n$일 수 없고((Z5)) $\deg f \le n$이다. 마지막 등식은 다항식환의 (5)의 (ii)이다.

**2의 증명.** (1)에 의해 $f \ne 0$이고 $\deg f = 0$인 것은 정확히 $\operatorname{coef}_0(f) \ne 0$이고 $k \ge 1$에서 $\operatorname{coef}_k(f) = 0$인 것((Z1))이고, 다항식환의 (3)의 (ii)에 의해 이것은 $f = \kappa(c)$, $c = \operatorname{coef}_0(f) \ne 0$이라는 것이다. 둘째 문장은 이것과 "$\kappa(0)$은 영다항식"(다항식환의 (3)의 (i))에서 나온다. $X^k$의 계수는 다항식환의 (4)의 (iii)이므로 (1)에 의해 $\deg X^k = k$이고 최고차계수는 $1$이다. $X - c$는 $\operatorname{coef}_1 = 1 - 0 = 1$, $\operatorname{coef}_0 = 0 - c = -c$이고 $k \ge 2$에서 $\operatorname{coef}_k = 0$이므로(다항식환의 (2)) 차수가 $1$인 모닉 다항식이고, $X + c$도 같다.

**3의 증명.** 다항식환의 (2)에 의해 $k > n$이면 $\operatorname{coef}_k(f \pm g) = 0 \pm 0 = 0$이고 $\operatorname{coef}_k(-f) = -0 = 0$이므로 (1)에 의해 첫 주장이 나온다. $\operatorname{coef}_k(-f) = -\operatorname{coef}_k(f)$이고 $R$에서 $-a = 0$인 것은 정확히 $a = 0$일 때이므로 $-f$와 $f$는 계수가 $0$이 아닌 번호가 같고, 따라서 $-f \ne 0$이고 차수가 같다. $\deg f < \deg g = n$이라 하자. $k > n$이면 $k > \deg f$이므로 $\operatorname{coef}_k(f + g) = 0 + 0 = 0$이고, $\operatorname{coef}_n(f + g) = 0 + \operatorname{coef}_n(g) \ne 0$이다. (1)에 의해 $f + g \ne 0$, $\deg(f + g) = n$이고 최고차계수는 $\operatorname{coef}_n(g)$이다. $\deg g < \deg f$인 경우도 $f$와 $g$를 바꾸어 같다.

**4의 증명.** $a_k = \operatorname{coef}_k(f)$, $b_k = \operatorname{coef}_k(g)$로 쓴다. $k > m$이면 $a_k = 0$, $k > n$이면 $b_k = 0$이다((1)). $l > m + n$이고 $0 \le k \le l$이면 $k > m$이거나 $l - k > n$이므로 $a_k b_{l-k} = 0$이고([[ring-basic-properties|환의 기본 성질]]의 (1)), 합의 (3)과 (6)의 (iv)에 의해 $\operatorname{coef}_l(fg) = 0$이다. $l = m + n$이면 $0 \le k \le m + n$이고 $k \ne m$인 항은 $k > m$이거나, $k < m$이어서 $m + n - k > n$이므로 $0$이다. 합의 (6)의 (v)를 $k = m$에 쓰면 $\operatorname{coef}_{m+n}(fg) = a_m b_n$이다. 나머지 주장은 (1)에서 나온다. 마지막 문장: $f = 0$이거나 $g = 0$이면 $fg = 0$이고([[ring-basic-properties|환의 기본 성질]]의 (1)을 환 $R[X]$에), 아니면 $\deg f + \deg g \le m + n$((Z7))이므로 앞 문장에서 나온다.

**5의 증명.** $g$의 최고차계수를 $b \ne 0$이라 하자. $ub = 0$이면 $b = 1b = (u^{-1}u)b = u^{-1}(ub) = u^{-1}0 = 0$이 되어 모순이므로 $ub \ne 0$이다. (4)에 의해 결론이 나온다. 모닉이면 $u = 1 \in R^{\times}$([[field|가역원과 체]]의 (1))이고, 두 모닉의 곱의 최고차계수는 $1 \cdot 1 = 1$이다. $c \in R^{\times}$이면 상수 다항식 $c$는 (2)에 의해 차수 $0$이고 최고차계수가 $c$이므로 $\deg(cg) = 0 + \deg g$이다.

**6의 증명.** 정역에서 $a \ne 0$, $b \ne 0$이면 $ab \ne 0$이다([[integral-domain|정역]]의 정의). 두 최고차계수에 이것을 쓰고 (4)를 쓴다. 따라서 $R[X]$에는 영인자가 없고, [[polynomial-ring|다항식환]]의 (1)에 의해 $R[X]$는 단위원을 갖는 가환환이므로 정역이다.

**7의 증명.** $c\,c^{-1} = 1$이고 $\kappa$는 환 준동형이므로(다항식환의 (3)의 (i)) $\kappa(c)\kappa(c^{-1}) = \kappa(1) = 1$이다. 이제 $R$이 정역이고 $fg = 1$이라 하자. $1 \ne 0$이므로 $f \ne 0$, $g \ne 0$이고, (6)과 (2)에 의해 $\deg f + \deg g = \deg 1 = 0$이다. 두 차수는 $0$ 이상이므로 둘 다 $0$이고((Z5)–(Z7)), (2)에 의해 $f = \kappa(c)$, $g = \kappa(d)$이다. 다항식환의 (3)의 (i)에 의해 $\kappa(cd) = \kappa(1)$이고 $\kappa$가 단사이므로 $cd = 1$이다. 가환이므로 $dc = 1$이고 $c \in R^{\times}$이다. 체는 정역이고([[field|가역원과 체]]의 (3)) 체의 가역원은 $0$이 아닌 원소 전체이다(체의 정의와 그 항목의 (1)).

**8의 증명.** 다항식환의 (7)의 (i)에 의해 계수가 같고, [[subring|부분환]]의 (1)에 의해 $R_0$의 $0$, $1$은 $R$의 $0$, $1$이다. 차수, 최고차계수, 상수항, 영다항식인지, 모닉인지는 계수와 $0$, $1$만으로 정해진다.
:::

## 예시와 반례

:::example[차수와 최고차계수의 계산]
$\mathbb{Z}[X]$의 $f = 4 - X + 2X^3$은 (1)에 의해 차수가 $3$, 최고차계수가 $2$, 상수항이 $4$이고 모닉이 아닙니다. $g = X^2 + 5$와 곱하면 (6)에 의해 $\deg(fg) = 3 + 2 = 5$이고 최고차계수는 $2 \cdot 1 = 2$입니다. 실제로 계수를 차례로 구하면 $fg = 20 - 5X + 4X^2 + 9X^3 + 2X^5$입니다. 예컨대 $\operatorname{coef}_4(fg) = \sum_{k=0}^{4} \operatorname{coef}_k(f)\operatorname{coef}_{4-k}(g) = 4 \cdot 0 + (-1) \cdot 0 + 0 \cdot 1 + 2 \cdot 0 + 0 \cdot 5 = 0$입니다.
:::

:::counterexample[합의 차수는 줄어들 수 있다]
$\mathbb{Z}[X]$에서 $f = X^2 + X$, $g = -X^2 + 1$은 둘 다 차수가 $2$이지만 $f + g = X + 1$의 차수는 $1$입니다. (3)이 등호를 보장하는 것은 두 차수가 다를 때뿐이고, 차수가 같으면 최고차계수끼리 지워질 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_4[X]$에서 $[2]X$와 $[2]X + [1]$의 곱의 차수는?]
곱은 $[4]X^2 + [2]X = [2]X$이므로 차수는 $1$입니다. 두 최고차계수의 곱 $[2][2] = [0]$이 $0$이므로 (4)의 등호 조건이 성립하지 않고, $\mathbb{Z}_4$는 정역이 아니므로 (6)도 쓸 수 없습니다.
:::

:::check[실수의 환 $\mathbb{R}$ 위에서 $\mathbb{R}[X]$의 가역원은 무엇인가?]
$\mathbb{R}$은 체이므로([[field|가역원과 체]]의 (4)) (7)에 의해 $\mathbb{R}[X]$의 가역원은 정확히 영이 아닌 상수 다항식입니다. 예컨대 $X$는 가역원이 아닙니다. 차수가 $1$이기 때문입니다.
:::
