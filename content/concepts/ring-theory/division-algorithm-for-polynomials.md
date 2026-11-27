---
title: 다항식의 나눗셈 정리
title_en: Division Algorithm for Polynomials
aliases: [나눗셈 알고리즘, 몫과 나머지, 다항식의 나눗셈, division algorithm, quotient and remainder, polynomial long division]
kind: theorem
field: ring-theory
msc: ["13", "12"]
level: undergrad
summary: 단위원을 갖는 가환환에서 최고차계수가 가역원인 다항식 g 로 모든 다항식 f 를 f = gq + r (r 은 0 이거나 g 보다 차수가 작다) 꼴로 나누는 몫과 나머지가 정확히 하나씩 있다. 체 위에서는 영이 아닌 모든 g 로 나눌 수 있다. 나누어떨어짐은 나머지가 0 인 것이고, 부분환이나 부분체 위의 다항식에서는 몫과 나머지와 나누어떨어짐이 큰 환에서와 같다.
requires: [prime-number, well-ordering-principle, even-and-odd, mathematical-induction, integers-modulo-n, ring, ring-examples, field, subring, polynomial-ring, degree-of-a-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.2절 The Division Algorithm, Theorem 17.6 (p.212–213), Example 17.7 (p.213); Corollary 17.8, 17.9 의 증명 (p.214); 17.5절 Exercises, 연습문제 3, 13 (p.220–221)과 연습문제 13 의 힌트 (p.330)"
    checked: original
    note: "출처 Theorem 17.6(p.212)은 체 F 위에서 영이 아닌 g 로 나누는 몫과 나머지의 존재와 유일성이다. 이 항목의 (2)가 그것이고, (1)은 단위원을 갖는 가환환에서 최고차계수가 가역원인 g 로 넓힌 꼴이다(증명은 같다). 출처의 존재 증명은 f 의 차수에 대한 귀납('proceed by induction on n')이지만 귀납하는 명제를 적지 않는다. 이 항목은 '어떤 번호 너머의 계수가 모두 0 인 f' 에 대한 귀납으로 명제를 밝혀 쓴다. 출처가 f 에서 빼는 다항식 (a_n/b_m)x^{n−m}g(x) 는 이 항목의 증명의 것과 같다. 유일성은 출처와 같이 g(q − q_1) = r_1 − r 의 차수를 비교하고, 출처가 영다항식의 차수 −∞ 로 넘어가는 곳은 (5)의 차수 공식(최고차계수가 가역원)으로 쓴다. (3)의 '나머지가 0 이면 나누어떨어진다' 는 출처 Corollary 17.8 의 증명(p.214)이 x − α 로 나눈 나머지 a 가 0 이므로 x − α 가 인수라고 하는 것과 같은 발상이고, (4)의 몫의 차수는 출처 Corollary 17.9 의 증명(p.214)이 x − α 로 나눈 몫에 대하여 'The degree of q(x) is n − 1' 로 쓰는 것을 일반의 g 로 한 것이다. (5)(6)의 부분환·부분체에서의 같음은 이 사이트가 덧붙였다(뒤의 단원이 쓴다). 반례 '최고차계수가 가역원이 아니면 나눌 수 없을 수 있다'는 출처 연습문제 13(p.221, Z[x] 에서는 나눗셈 정리가 성립하지 않는다)과 같은 내용이고, 그 힌트(p.330)는 'The integers Z do not form a field' 이다. 예시 '모닉 다항식으로 나누기'는 출처 Example 17.7(p.213)의 x³ − x² + 2x − 3 을 x − 2 로 나누는 긴 나눗셈과 같은 종류의 계산이다(다항식은 다르다). 확인 질문 '$\\mathbb{Z}_5[X]$에서 $X^3 + [2]$를 $[2]X + [1]$로 나누면?' 은 출처 연습문제 3(p.220, Z_7, Z_5, Z_2 위의 나눗셈)과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원을 갖는 가환환이라 하자. 다항식환 $R[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 최고차계수, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 가역원과 $R^{\times}$, 체는 [[field|가역원과 체]]의 것이다.

1. (나눗셈 정리) $g \in R[X]$가 영다항식이 아니고 $g$의 최고차계수가 $R$의 가역원이라 하자. 그러면 모든 $f \in R[X]$에 대하여
   $$
   \begin{aligned}
   &f = gq + r, \\
   &r = 0 \text{이거나 } \deg r < \deg g
   \end{aligned}
   $$
   인 $q, r \in R[X]$가 정확히 한 쌍 있다. $q$를 $f$를 $g$로 나눈 **몫**(quotient), $r$을 **나머지**(remainder)라 한다. 특히 $g$가 모닉이면 그렇다.
2. (체) $F$가 체이면 영이 아닌 모든 $g \in F[X]$와 모든 $f \in F[X]$에 대하여 (1)의 $q$, $r$이 정확히 한 쌍 있다.
3. (나누어떨어짐과 나머지) (1)의 가정 아래, $R[X]$에서 $g \mid f$인 것은 정확히 $f$를 $g$로 나눈 나머지가 $0$일 때이다.
4. (몫의 차수) (1)의 가정 아래 $f \ne 0$이고 $\deg f \ge \deg g$이면 몫 $q$는 $0$이 아니고 $\deg q = \deg f - \deg g$이며, $q$의 최고차계수는 $f$의 최고차계수와 $g$의 최고차계수의 역원의 곱이다. $f = 0$이거나 $\deg f < \deg g$이면 $q = 0$이고 $r = f$이다.
5. (부분환) $R_0$이 $1 \in R_0$인 $R$의 [[subring|부분환]]이고, $g \in R_0[X]$가 영다항식이 아니며 $g$의 최고차계수가 환 $R_0$의 가역원이라 하자. 그러면 $f \in R_0[X]$를 $R[X]$에서 $g$로 나눈 몫과 나머지는 $R_0[X]$에 속하고, $R_0[X]$에서 나눈 몫과 나머지와 같다. 따라서 $f \in R_0[X]$에 대하여 $R[X]$에서 $g \mid f$인 것은 정확히 $R_0[X]$에서 $g \mid f$일 때이다.
6. (부분체) $E$가 체이고 $K$가 $1 \in K$인 $E$의 부분환으로서 덧셈과 곱셈을 $K$로 제한한 연산으로 체라 하자. $f, g \in K[X]$이고 $g \ne 0$이면 $E[X]$에서 $g \mid f$인 것은 정확히 $K[X]$에서 $g \mid f$일 때이다.
:::

:::english
Let $R$ be a commutative ring with unity. The polynomial ring $R[X]$, the coefficients $\operatorname{coef}_n$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring; the degree $\deg$, the leading coefficient and monic polynomials are those of the degree of a polynomial; and units, $R^{\times}$ and fields are those of units and fields.

1. (Division algorithm) Let $g \in R[X]$ be a nonzero polynomial whose leading coefficient is a unit of $R$. Then for every $f \in R[X]$ there is exactly one pair $q, r \in R[X]$ with
   $$
   \begin{aligned}
   &f = gq + r, \\
   &r = 0 \text{ or } \deg r < \deg g.
   \end{aligned}
   $$
   $q$ is called the **quotient** and $r$ the **remainder** of $f$ divided by $g$. In particular this holds if $g$ is monic.
2. (Fields) If $F$ is a field, then for every nonzero $g \in F[X]$ and every $f \in F[X]$ there is exactly one pair $q$, $r$ as in (1).
3. (Divisibility and the remainder) Under the hypotheses of (1), $g \mid f$ in $R[X]$ if and only if the remainder of $f$ divided by $g$ is $0$.
4. (Degree of the quotient) Under the hypotheses of (1), if $f \ne 0$ and $\deg f \ge \deg g$, then the quotient $q$ is nonzero, $\deg q = \deg f - \deg g$, and the leading coefficient of $q$ is the product of the leading coefficient of $f$ and the inverse of the leading coefficient of $g$. If $f = 0$ or $\deg f < \deg g$, then $q = 0$ and $r = f$.
5. (Subrings) Let $R_0$ be a subring of $R$ with $1 \in R_0$, and let $g \in R_0[X]$ be nonzero with leading coefficient a unit of the ring $R_0$. Then the quotient and remainder of $f \in R_0[X]$ divided by $g$ in $R[X]$ lie in $R_0[X]$ and are equal to the quotient and remainder of the division in $R_0[X]$. Hence for $f \in R_0[X]$, $g \mid f$ in $R[X]$ if and only if $g \mid f$ in $R_0[X]$.
6. (Subfields) Let $E$ be a field and $K$ a subring of $E$ with $1 \in K$ that is a field under the addition and multiplication restricted to $K$. If $f, g \in K[X]$ and $g \ne 0$, then $g \mid f$ in $E[X]$ if and only if $g \mid f$ in $K[X]$.
:::

## 직관

정수를 양의 정수로 나누면 몫과 나머지가 남고, 나머지는 나누는 수보다 작습니다([[division-theorem|나눗셈 정리]]). 다항식에서는 "작다"를 "차수가 작다"로 바꿉니다. 손으로 하는 긴 나눗셈은 $f$의 최고차항을 지우도록 $g$에 알맞은 $cX^j$를 곱해 빼는 일을 되풀이하는데, 그러려면 $g$의 최고차계수로 나눌 수 있어야 합니다. 그래서 (1)은 $g$의 최고차계수가 가역원이라는 가정을 둡니다. 체에서는 $0$이 아닌 원소가 모두 가역원이므로 영이 아닌 모든 $g$로 나눌 수 있습니다((2)).

(5)와 (6)은 나눗셈이 계수를 새로 만들지 않는다는 것을 말합니다. 몫과 나머지는 $f$와 $g$의 계수, 그리고 $g$의 최고차계수의 역원만으로 계산되므로, 큰 환에서 나누어도 작은 환의 계수만 나옵니다. 그래서 $\mathbb{Z}[X]$의 다항식을 모닉 다항식으로 나누면 몫과 나머지가 정수 계수이고, 작은 체 위에서 나누어떨어지는지는 큰 체에서 보아도 같습니다.

## 증명

:::idea
존재는 $f$의 맨 위 계수를 $g$의 적당한 배수로 지워 "계수가 $0$인 번호"를 하나씩 늘리는 귀납법이다. 유일성은 $g(q - q_1) = r_1 - r$에서 왼쪽의 차수는 $\deg g$ 이상이고 오른쪽은 $0$이거나 차수가 $\deg g$보다 작다는 것이다.
:::

:::hint
"$k \ge n$이면 $\operatorname{coef}_k(f) = 0$인 모든 $f$는 나눌 수 있다"를 $n$에 대한 귀납법으로 보입니다. $n \ge \deg g$이면 $f - \operatorname{coef}_n(f)\, u^{-1} X^{n - \deg g} g$를 생각합니다($u$는 $g$의 최고차계수).
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점 $0$)이다. "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n)이다. $d = \deg g$로 쓰고 $u$를 $g$의 최고차계수, $u^{-1}$을 그 역원이라 한다.

**1의 존재.** $0$ 이상인 정수 $n$에 대하여 명제 $P_n$을 "$k \ge n$인 모든 $k$에서 $\operatorname{coef}_k(f) = 0$인 모든 $f \in R[X]$에 대하여 $f = gq + r$이고 $r = 0$이거나 $\deg r < d$인 $q$, $r$이 있다"로 둔다. 다항식의 정의에 의해 모든 $f$는 어떤 $N$ 너머에서 계수가 $0$이므로 $k \ge N + 1$이면 $\operatorname{coef}_k(f) = 0$이고, 따라서 모든 $P_n$을 보이면 존재가 증명된다.

$P_0$: 모든 계수가 $0$인 $f$는 영다항식이고 $f = g0 + 0$이다.

$P_n \Rightarrow P_{n+1}$: $k \ge n + 1$에서 계수가 $0$인 $f$를 잡자. $n < d$이면 $k \ge d$일 때 $k \ge n + 1$이므로((Z1), (Z6)) 계수가 $0$이고, 차수의 (1)에 의해 $f = 0$이거나 $\deg f \le d - 1 < d$이다. 이때 $q = 0$, $r = f$로 두면 된다. $n \ge d$라 하자. $a = \operatorname{coef}_n(f)$로 두고
$$
f_1 = f - (a u^{-1}) X^{n-d} g
$$
라 하자. 다항식환의 (3)의 (iii)과 (4)의 (ii)에 의해 $\operatorname{coef}_k((a u^{-1}) X^{n-d} g) = (a u^{-1}) \operatorname{coef}_{k-(n-d)}(g)$ ($k \ge n - d$)이다. $k > n$이면 $k - (n - d) > d$이므로 이 계수는 $0$이고, $k = n$이면 $(a u^{-1}) u = a$이다. 다항식환의 (2)에 의해 $k \ge n + 1$이면 $\operatorname{coef}_k(f_1) = 0 - 0 = 0$이고 $\operatorname{coef}_n(f_1) = a - a = 0$이다. 따라서 $f_1$은 $P_n$의 가정을 만족하고, $f_1 = g q_1 + r$이고 $r = 0$이거나 $\deg r < d$인 $q_1$, $r$이 있다. $q = q_1 + (a u^{-1}) X^{n-d}$로 두면 교환법칙과 분배법칙에 의해 $gq + r = g q_1 + r + (a u^{-1}) X^{n-d} g = f_1 + (a u^{-1}) X^{n-d} g = f$이다.

**1의 유일성.** $f = gq + r = g q_1 + r_1$이고 $r$, $r_1$이 각각 $0$이거나 차수가 $d$보다 작다고 하자. 그러면 $g(q - q_1) = r_1 - r$이다. $d \ge 1$이면 $r$, $r_1$은 각각 $0$이거나 차수가 $d - 1$ 이하이므로 차수의 (3)에 의해 $r_1 - r$도 $0$이거나 차수가 $d - 1$ 이하이다. $d = 0$이면 $r = r_1 = 0$이다(차수가 $0$보다 작은 다항식은 없다). 어느 경우든 $r_1 - r$은 $0$이거나 차수가 $d$보다 작다. $q - q_1 \ne 0$이면 차수의 (5)에 의해 $g(q - q_1) \ne 0$이고 $\deg(g(q - q_1)) = d + \deg(q - q_1) \ge d$이므로, $r_1 - r$이 $0$이 아니면서 차수가 $d$ 이상이 되어 모순이다((L1)). 따라서 $q = q_1$이고, $r_1 - r = g0 = 0$이므로 $r = r_1$이다. 모닉이면 $u = 1$은 가역원이다([[field|가역원과 체]]의 (1)).

**2의 증명.** 체 $F$에서 $0$이 아닌 원소는 모두 가역원이므로(체의 정의) 영이 아닌 $g$의 최고차계수는 가역원이다.

**3의 증명.** 나머지가 $0$이면 $f = gq$이다. 거꾸로 $f = gq'$이면 $f = gq' + 0$이고 $0$은 (1)의 조건을 만족하므로, 유일성에 의해 나머지는 $0$이다.

**4의 증명.** $f = 0$이거나 $\deg f < d$이면 $f = g0 + f$이고 유일성에 의해 $q = 0$, $r = f$이다. $f \ne 0$이고 $\deg f = n \ge d$라 하자. $q = 0$이면 $f = r$이 되어 $\deg f < d$와 어긋나므로 $q \ne 0$이다. 차수의 (5)에 의해 $gq \ne 0$이고 $\deg(gq) = d + \deg q$이며 최고차계수는 $u$와 $q$의 최고차계수 $b$의 곱이다. $r = 0$이거나 $\deg r < d \le d + \deg q$이므로 차수의 (3)에 의해 $f = gq + r$은 $\deg f = d + \deg q$이고 최고차계수가 $ub$이다($r = 0$이면 $f = gq$). 따라서 $\deg q = n - d$이고, $f$의 최고차계수 $a$는 $a = ub$이므로 $b = u^{-1} a$이다.

**5의 증명.** [[subring|부분환]]의 (5)의 (i)과 다항식환의 (7)에 의해 $R_0$은 단위원 $1$을 갖는 가환환이다. $g$의 최고차계수 $u$는 $R_0$에서 $uv = 1$인 $v \in R_0$을 가지며, 이 곱은 $R$에서의 곱과 같으므로 $u$는 $R$의 가역원이기도 하다. 차수의 (8)에 의해 $g$의 차수와 최고차계수는 $R_0[X]$에서와 $R[X]$에서 같다. (1)을 $R_0$에 쓰면 $f = g q_0 + r_0$이고 $r_0 = 0$이거나 $\deg r_0 < d$인 $q_0, r_0 \in R_0[X]$가 있다. 다항식환의 (7)의 (ii)와 차수의 (8)에 의해 이 등식과 차수의 조건은 $R[X]$에서도 성립하므로, $R[X]$에서의 유일성에 의해 $q_0$, $r_0$은 $R[X]$에서 나눈 몫과 나머지이다. 마지막 문장: $R[X]$에서 $g \mid f$이면 (3)에 의해 $R[X]$에서의 나머지 $r_0$이 $0$이고, (3)을 $R_0$에 쓰면 $R_0[X]$에서 $g \mid f$이다. 거꾸로는 다항식환의 (7)의 (iii)이다.

**6의 증명.** $K$는 $E$의 부분환이고 $1 \in K$이다. $g \ne 0$의 최고차계수는 $K$의 $0$이 아닌 원소이고(차수의 (8)과 [[subring|부분환]]의 (1)에 의해 $K$의 $0$은 $E$의 $0$), $K$가 체이므로 $K$의 가역원이다. (5)에서 나온다.
:::

## 예시와 반례

:::example[모닉 다항식으로 나누기]
$\mathbb{Z}[X]$에서 $f = X^3 + 2X^2 - 1$을 모닉 $g = X^2 + 1$로 나눕니다. 증명의 단계대로 $f$의 $3$차 계수를 지우면 $f - X g = 2X^2 - X - 1$이고, 다시 $2$차 계수를 지우면 $(2X^2 - X - 1) - 2g = -X - 3$입니다. 그래서 $f = g(X + 2) + (-X - 3)$이고, 나머지 $-X - 3$은 차수가 $1 < 2$입니다. 검산: $(X^2 + 1)(X + 2) = X^3 + 2X^2 + X + 2$에 $-X - 3$을 더하면 $X^3 + 2X^2 - 1$입니다. (5)에 의해 이것은 $\mathbb{R}[X]$에서 나눈 몫과 나머지이기도 합니다(정수는 실수의 부분환, [[subring|부분환]]의 (4)).
:::

:::counterexample[최고차계수가 가역원이 아니면 나눌 수 없을 수 있다]
$\mathbb{Z}[X]$에서 $f = X$를 $g = 2X$로 나누는 몫과 나머지는 없습니다. $X = 2X q + r$이고 $r = 0$이거나 $\deg r < 1$이면 $r$은 상수 다항식이므로(차수의 (2)) $\operatorname{coef}_1(r) = 0$이고, $1$차 계수를 비교하면 $1 = 2\operatorname{coef}_0(q)$입니다(다항식환의 (3)의 (iii)과 (4)의 (ii)). [[even-and-odd|짝수와 홀수]]에 의해 $1$은 짝수가 아니므로 이런 정수는 없습니다. $g$의 최고차계수 $2$가 $\mathbb{Z}$의 가역원이 아니라는 것이 (1)의 가정을 깨뜨립니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5[X]$에서 $X^3 + [2]$를 $[2]X + [1]$로 나누면?]
$[2]$의 역원은 $[3]$입니다($[2][3] = [6] = [1]$). 몫의 최고차계수는 (4)에 의해 $[1][3] = [3]$이고, 차수는 $3 - 1 = 2$입니다. 단계대로 계산하면 몫은 $[3]X^2 + [1]X + [2]$, 나머지는 $[0]$입니다. 검산: $([2]X + [1])([3]X^2 + [1]X + [2]) = [6]X^3 + ([2] + [3])X^2 + ([4] + [1])X + [2] = X^3 + [2]$. 그래서 $\mathbb{Z}_5[X]$에서 $[2]X + [1]$은 $X^3 + [2]$를 나눕니다((3)).
:::

:::check[(1)에서 $g$가 영이 아닌 상수 다항식 $u$이고 $u$가 가역원이면 몫과 나머지는 무엇인가?]
$\deg g = 0$이므로 나머지는 $0$이어야 하고(차수가 $0$보다 작은 다항식은 없다), $f = u(u^{-1} f) + 0$이므로 몫은 $u^{-1} f$입니다. 곧 가역원인 상수는 모든 다항식을 나눕니다.
:::
