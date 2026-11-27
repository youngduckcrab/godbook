---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 5 (b) (p.220) — 문제 '법 5의 정수 위의 삼차 다항식의 중근'의 1과 같은 종류(ℤ₅ 위의 삼차 다항식의 근을 모두 구하기. 출처는 3x³ − 4x² − x + 4)"
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 24 (p.221) — 문제 '서로 다른 근으로 정해지는 일차식의 곱'과 같은 발상(근을 모두 찾아 다항식을 일차식의 곱으로 쓰기. 출처는 ℤ_p 위의 x^p − x)"
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 7 (p.221) — 문제 '법 4의 정수 위에서 몫과 나머지가 두 쌍인 나눗셈'과 같은 대상(ℤ₄[x] 의 상수가 아닌 가역원. 출처는 차수가 1보다 큰 것을 찾게 한다)"
added: 2026-11-27
---

:::exercise[법 5의 정수 위의 삼차 다항식의 중근]
$\mathbb{Z}_5[X]$의 $f = X^3 + [2]X + [2]$에 대하여 다음을 하라.

1. $f$의 $\mathbb{Z}_5$ 안의 근을 모두 구하라.
2. 형식적 도함수로 각 근이 중근인지 판정하라.
3. $f$를 $(X - [1])^2$로 나눈 몫과 나머지를 구하라.
4. $f'(c) = [0]$이지만 $c$가 $f$의 근이 아닌 $c \in \mathbb{Z}_5$를 찾고, [[multiple-roots-and-derivative|중근과 도함수]]의 (2)에서 $f(c) = 0$이라는 조건을 뺄 수 없음을 확인하라.
:::

:::solution
$\mathbb{Z}_5$는 단위원을 갖는 가환환이다([[ring-examples|환의 예]]의 (3)). $\mathbb{Z}_5$의 원소는 $[0], \dots, [4]$이다([[integers-modulo-n|법 n의 정수]]의 (1)).

1. [[evaluation-homomorphism|대입 준동형]]의 (1)에 의해 $r \in \mathbb{Z}_5$이면 $f(r) = r^3 + [2]r + [2]$이고, 정수 $k$에서 $[k]^3 = [k^3]$이다([[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (10)의 (ii)). 정수 $r^3 + 2r + 2$는 $r = 0, 1, 2, 3, 4$에서 $2, 5, 14, 35, 74$이고, 다섯 원소를 넣으면
   $$
   \begin{aligned}
   f([0]) &= [2], \\
   f([1]) &= [5] = [0], \\
   f([2]) &= [14] = [4], \\
   f([3]) &= [35] = [0], \\
   f([4]) &= [74] = [4]
   \end{aligned}
   $$
   이므로 근은 $[1]$과 $[3]$이다.

2. [[formal-derivative|형식적 도함수]]의 (1)에 의해 $f' = (3 \cdot [1])X^2 + (1 \cdot [2]) = [3]X^2 + [2]$이다([[power-in-a-group|군의 거듭제곱]]의 (7)). 따라서 $f'([1]) = [3 + 2] = [5] = [0]$이고 $f'([3]) = [27 + 2] = [29] = [4] \ne [0]$이다. [[multiple-roots-and-derivative|중근과 도함수]]의 (2)에 의해 $f([1]) = [0]$, $f'([1]) = [0]$이므로 $[1]$은 중근이고, (1)에 의해 $f'([3]) \ne [0]$이므로 $[3]$은 중근이 아니다.

3. $X - [1]$은 모닉이므로([[degree-of-a-polynomial|다항식의 차수]]의 (2)) 같은 항목의 (5)에 의해 $g = (X - [1])^2$은 차수가 $2$인 모닉 다항식이다. 계수를 구하면 $g = X^2 - [2]X + [1] = X^2 + [3]X + [1]$이다. $q = X + [2]$로 두고 [[polynomial-ring|다항식환]]의 곱의 정의로 계수를 구하면
   $$
   \begin{aligned}
   gq &= X^3 + ([2] + [3])X^2 \\
   &\quad + ([6] + [1])X + [2] \\
   &= X^3 + [2]X + [2] = f
   \end{aligned}
   $$
   이다. 따라서 $f = gq + 0$이고, [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (1)에 의해 몫은 $X + [2]$, 나머지는 $0$이다. $[2] = -[3]$이므로 $f = (X - [1])^2 (X - [3])$이다.

4. 2의 $f' = [3]X^2 + [2]$에 다섯 원소를 넣으면 $[2]$, $[5] = [0]$, $[14] = [4]$, $[29] = [4]$, $[50] = [0]$이다. 그래서 $f'(c) = [0]$인 것은 $c = [1]$과 $c = [4]$이고, 1에 의해 $f([4]) = [4] \ne [0]$이다. 곧 $c = [4]$에서 $f'(c) = [0]$이지만 $c$는 근이 아니고, 중근과 도함수의 (1)에 의해 중근도 아니다. 따라서 (2)의 두 조건 가운데 $f'(c) = 0$만으로는 중근이라 할 수 없다.
:::

:::exercise[계수의 합과 상수항]
$R$이 단위원을 갖는 가환환이고 $f \in R[X]$이며, $N$이 $0$ 이상인 정수이고 $n > N$인 모든 $n$에서 $\operatorname{coef}_n(f) = 0$이라 하자.

1. $f(0) = \operatorname{coef}_0(f)$이고 $f(1) = \sum_{k=0}^{N} \operatorname{coef}_k(f)$임을 보여라.
2. $R[X]$에서 $X \mid f$인 것은 정확히 $\operatorname{coef}_0(f) = 0$일 때이고, $X - 1 \mid f$인 것은 정확히 $\sum_{k=0}^{N} \operatorname{coef}_k(f) = 0$일 때임을 보여라.
3. $\mathbb{Z}[X]$에서 $X - 1$이 $g = X^5 - 3X^2 + 2$를 나눔을 보이고 몫을 구하라. 또 $X^2 - 1$은 $g$를 나누지 않음을 보여라.
:::

:::solution
1. [[evaluation-homomorphism|대입 준동형]]의 정의에 의해 $f(r) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, r^k$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 정의와 (6)의 (v)에 의해 $0^0 = 1$이고 $k \ge 1$이면 $0^k = 0$이므로, $k \ge 1$인 항은 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $\operatorname{coef}_k(f)\, 0 = 0$이다. [[finite-sums-in-a-ring|환의 유한 합]]의 (6)의 (v)를 $l = 0$에 쓰면 $f(0) = \operatorname{coef}_0(f) \cdot 1 = \operatorname{coef}_0(f)$이다. 또 유한 곱의 (6)의 (v)에 의해 $1^k = 1$이므로 유한 합의 (3)에 의해 $f(1) = \sum_{k=0}^{N} \operatorname{coef}_k(f)$이다.

2. [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (2)에 의해 $X - 0 \mid f$인 것은 정확히 $f(0) = 0$일 때이고, $X - 1 \mid f$인 것은 정확히 $f(1) = 0$일 때이다. [[polynomial-ring|다항식환]]의 (3)의 (i)과 읽는 약속에 의해 $X - 0 = X - \kappa(0) = X$이다. 1을 쓰면 결론이 나온다.

3. $g$의 계수는 차례로 $2, 0, -3, 0, 0, 1$이고 그 합은 $0$이므로 2에 의해 $X - 1 \mid g$이다. 인수 정리의 (1)에 의해 $g = (X - 1)q$인 $q$는 하나뿐이고, $q = X^4 + X^3 + X^2 - 2X - 2$로 두고 계수를 구하면
   $$
   \begin{aligned}
   &(X - 1)q \\
   &\quad = X^5 + X^4 + X^3 - 2X^2 \\
   &\qquad - 2X - X^4 - X^3 \\
   &\qquad - X^2 + 2X + 2 \\
   &\quad = X^5 - 3X^2 + 2
   \end{aligned}
   $$
   이므로 이것이 몫이다. 다음으로 $g(-1) = -1 - 3 + 2 = -2 \ne 0$이므로 인수 정리의 (2)에 의해 $X - (-1) = X + 1$은 $g$를 나누지 않는다. $X^2 - 1 \mid g$라 하면, $X^2 - 1 = (X + 1)(X - 1)$이므로 $X + 1 \mid X^2 - 1$이고 다항식환의 (6)의 (ii)에 의해 $X + 1 \mid g$가 되어 어긋난다. 따라서 $X^2 - 1$은 $g$를 나누지 않는다.
:::

:::exercise[X의 거듭제곱에서 1을 뺀 다항식끼리의 나눔]
$R$이 단위원을 갖는 가환환이라 하자.

1. $d$가 자연수이고 $e$가 $0$ 이상인 정수일 때, $R[X]$에서 $X^d - 1 \mid X^e - 1$인 것은 정확히 정수의 나누어떨어짐으로 $d \mid e$일 때임을 보여라.
2. $\mathbb{Z}[X]$에서 $X^d - 1$($d$는 자연수)이 $X^6 - 1$을 나누는 $d$를 모두 구하라.
:::

:::solution
1. *$d \mid e$이면.* [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (11)의 (ii)를 환 $R[X]$의 원소 $x = X$에 쓰면 $X^e - 1 = (X^d - 1)y$인 $y \in R[X]$가 있으므로 $X^d - 1 \mid X^e - 1$이다.

   *$X^d - 1 \mid X^e - 1$이면.* [[division-theorem|나눗셈 정리]]에 의해 $e = qd + r$, $0 \le r < d$인 정수 $q$, $r$이 있다. $q < 0$이면 [[prime-number|소수]]의 (Z1)에 의해 $q \le -1$이고 (Z3)에 의해 $qd \le -d$이다. [[well-ordering-principle|정렬 원리]]의 (Z7), (Z6)과 $r < d$에 의해 $e = qd + r \le -d + r < -d + d = 0$이 되어 $e \ge 0$과 어긋난다(같은 항목의 (L1)). 그래서 (Z5)에 의해 $q \ge 0$이다. 유한 곱의 (6)의 (ii), (iii)에 의해 $X^e = X^{qd} X^r$이므로
   $$
   \begin{aligned}
   X^e - 1 &= X^r (X^{qd} - 1) \\
   &\quad + (X^r - 1)
   \end{aligned}
   $$
   이다. $d \mid qd$이므로 앞 문단에 의해 $X^d - 1 \mid X^{qd} - 1$이고, [[polynomial-ring|다항식환]]의 (6)의 (iii)에 의해 $X^d - 1 \mid X^r(X^{qd} - 1)$이며, 같은 (6)의 (iii)을 가정과 함께 쓰면 $X^d - 1 \mid X^r - 1$이다. 곧 $X^r - 1 = (X^d - 1)h$인 $h \in R[X]$가 있다.

   $r \ge 1$이라 하자. [[degree-of-a-polynomial|다항식의 차수]]의 (2)에 의해 $X^r$은 차수가 $r$인 모닉이고 상수 다항식 $-1$은 $1 \ne 0$이므로 영이 아니고 차수가 $0$이므로, 같은 항목의 (3)에 의해 $X^r - 1 \ne 0$이고 차수가 $r$이다. 같은 이유로 $X^d - 1$은 차수가 $d$인 모닉이다. $X^r - 1 \ne 0$이므로 $h \ne 0$이고(다항식환의 (1)과 [[ring-basic-properties|환의 기본 성질]]의 (1)), 차수의 (5)에 의해 $r = \deg(X^r - 1) = d + \deg h \ge d$이다. 이것은 $r < d$와 어긋난다. 따라서 $r = 0$이고 $e = qd$이므로 $d \mid e$이다.

2. 1에 의해 그런 $d$는 정확히 $6$의 양의 약수이다. 소수 항목의 진술에 의해 $6$의 양의 약수 $d$는 $1 \le d \le 6$이고, $1, \dots, 6$ 가운데 $6$을 나누는 것은 $1, 2, 3, 6$이다($6 = 4 \cdot 1 + 2$, $6 = 5 \cdot 1 + 1$이고 나눗셈 정리의 나머지의 유일성에 의해 $4$와 $5$는 $6$을 나누지 않는다). 따라서 $d = 1, 2, 3, 6$이다.
:::

:::exercise[X를 X + c로 옮긴 다항식의 낮은 차수 계수]
$R$이 단위원을 갖는 가환환이고 $c \in R$이며, $\tau_c(f) = f(X + c)$는 [[evaluation-homomorphism|대입 준동형]]의 (9)의 것이라 하자. $f \in R[X]$에 대하여 다음을 보여라.

1. $\bigl(\tau_c(f)\bigr)' = \tau_c(f')$이다.
2. $\operatorname{coef}_0(\tau_c(f)) = f(c)$이고 $\operatorname{coef}_1(\tau_c(f)) = f'(c)$이다.
3. $c$가 $f$의 중근인 것은 정확히 $\tau_c(f)$의 $0$차 계수와 $1$차 계수가 모두 $0$일 때이다.
4. 문제 1의 $f = X^3 + [2]X + [2] \in \mathbb{Z}_5[X]$와 $c = [1]$에 대하여 $\tau_c(f)$를 구해 3과 맞는지 확인하라.
:::

:::solution
1. $f \in R[X]$에 $D(f) = (\tau_c(f))' - \tau_c(f')$를 대응시키는 함수 $D : R[X] \to R[X]$를 생각한다. 대입 준동형의 (9)의 (i)에 의해 $\tau_c$는 환 준동형이고, [[formal-derivative|형식적 도함수]]의 (2)에 의해 $f$에 $f'$를 대응시키는 함수는 덧셈군의 준동형이므로, 덧셈군 $(R[X], +)$가 아벨군이라는 것과 함께
   $$
   \begin{aligned}
   D(f + g) &= (\tau_c f)' + (\tau_c g)' \\
   &\quad - \tau_c(f') - \tau_c(g') \\
   &= D(f) + D(g)
   \end{aligned}
   $$
   이다. 곧 $D$는 덧셈군의 준동형이다. $a \in R$이면 $\tau_c$는 상수 다항식을 그대로 두므로 $\tau_c(af) = a\,\tau_c(f)$이고, 형식적 도함수의 (2)에 의해 $(ag)' = a g'$이므로 $D(af) = a D(f)$이다.

   $k \ge 0$인 정수 $k$에 대하여 $D(X^k) = 0$임을 보인다. $k = 0$이면 $X^0 = 1$은 상수 다항식이므로 $\tau_c(1) = 1$이고, 형식적 도함수의 (1)에 의해 $1' = 0$, $\tau_c(0) = 0$이므로 $D(1) = 0$이다. $k \ge 1$이라 하자. $\tau_c(1) = 1$이므로 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (9)에 의해 $\tau_c(X^k) = \tau_c(X)^k = (X + c)^k$이다. $X + c = X - (-c)$이므로 형식적 도함수의 (4)를 $-c$에 쓰면 $\bigl((X + c)^k\bigr)' = k \cdot (X + c)^{k-1}$이다. 한편 같은 (2)에 의해 $(X^k)' = k \cdot X^{k-1}$이고 [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\tau_c(k \cdot X^{k-1}) = k \cdot \tau_c(X^{k-1}) = k \cdot (X + c)^{k-1}$이다. 따라서 $D(X^k) = 0$이다.

   이제 $n > N$에서 $\operatorname{coef}_n(f) = 0$인 $N$을 잡으면 [[polynomial-ring|다항식환]]의 (5)의 (ii)에 의해 $f = \sum_{k=0}^{N} \operatorname{coef}_k(f) X^k$이다. [[finite-sums-in-a-ring|환의 유한 합]]의 (7)과 위의 두 사실, 유한 합의 (6)의 (iv)에 의해
   $$
   \begin{aligned}
   D(f) &= \sum_{k=0}^{N} \operatorname{coef}_k(f)\, D(X^k) \\
   &= 0
   \end{aligned}
   $$
   이다. 곧 $(\tau_c(f))' = \tau_c(f')$이다.

2. $g = \tau_c(f)$로 두자. 문제 2의 1에 의해 $\operatorname{coef}_0(g) = g(0)$이고, 대입 준동형의 (9)의 (iii)에 의해 $g(0) = f(0 + c) = f(c)$이다.

   [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (1)을 $0$에 쓰면 $g = Xh + g(0)$인 $h \in R[X]$가 있다(문제 2의 2의 풀이처럼 $X - 0 = X$). 다항식환의 (2), (4)의 (i), (3)의 정의에 의해 $\operatorname{coef}_1(g) = \operatorname{coef}_0(h) + 0$이고, 문제 2의 1에 의해 $\operatorname{coef}_0(h) = h(0)$이다. 한편 형식적 도함수의 (2), (3)과 (1)(상수의 도함수는 $0$)에 의해 $g' = X'h + Xh' = h + Xh'$이고, 대입 준동형의 (2), (1)에 의해 $g'(0) = h(0) + 0 \cdot h'(0) = h(0)$이다. 따라서 $\operatorname{coef}_1(g) = g'(0)$이다. 1에 의해 $g' = \tau_c(f')$이므로 다시 (9)의 (iii)에 의해 $g'(0) = f'(0 + c) = f'(c)$이다.

3. [[multiple-roots-and-derivative|중근과 도함수]]의 (2)에 의해 $c$가 $f$의 중근인 것은 정확히 $f(c) = 0$이고 $f'(c) = 0$일 때이고, 2에 의해 이것은 정확히 $\tau_c(f)$의 $0$차와 $1$차 계수가 $0$일 때이다.

4. 대입 준동형의 (9)에 의해 $\tau_{[1]}(f) = (X + [1])^3 + [2](X + [1]) + [2]$이다. [[binomial-theorem|이항정리]]의 (1)과 $C(3, k) = 1, 3, 3, 1$([[binomial-coefficient|이항계수]]의 (2), (3))에 의해 $(X + [1])^3 = X^3 + [3]X^2 + [3]X + [1]$이므로
   $$
   \begin{aligned}
   \tau_{[1]}(f) &= X^3 + [3]X^2 \\
   &\quad + [5]X + [5] \\
   &= X^3 + [3]X^2
   \end{aligned}
   $$
   이다. $0$차와 $1$차 계수가 $[0]$이므로 3에 의해 $[1]$은 중근이고, 이것은 문제 1의 2와 맞는다.
:::

:::exercise[서로 다른 근으로 정해지는 일차식의 곱]
1. $R$이 [[integral-domain|정역]]이고 $n$이 $0$ 이상인 정수이며, $f \in R[X]$가 영다항식이 아니고 $\deg f = n$, $a$가 $f$의 최고차계수라 하자. $R$의 서로 다른 원소의 열 $c_1, \dots, c_n$의 항이 모두 $f$의 근이면
   $$
   \begin{aligned}
   f &= a\,(X - c_1)(X - c_2) \\
   &\qquad \cdots (X - c_n)
   \end{aligned}
   $$
   임을 보여라. 오른쪽은 다항식의 열 $X - c_1, \dots, X - c_n$의 곱이고, $n = 0$이면 빈 곱 $1$이다.
2. $\mathbb{Z}_7[X]$에서 $X^3 - [1] = (X - [1])(X - [2])(X - [4])$임을 1로 보이고, $X^3 - [1]$의 $\mathbb{Z}_7$ 안의 근은 이 셋뿐임을 보여라.
:::

:::solution
1. [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로, 명제 "차수가 $n$인 영이 아닌 모든 $f$와, 항이 모두 $f$의 근인 서로 다른 원소의 모든 열 $c_1, \dots, c_n$에 대하여 등식이 성립한다"를 보인다.

   *기초 단계.* $n = 0$이면 [[degree-of-a-polynomial|다항식의 차수]]의 (2)에 의해 $f$는 $0$이 아닌 상수 다항식 $b$이고, 그 최고차계수는 $\operatorname{coef}_0(f) = b$이므로 $b = a$이다. 오른쪽은 $a \cdot 1 = a$이므로 등식이 성립한다.

   *귀납 단계.* $n$에서 성립한다고 하고, $\deg f = n + 1$이고 $c_1, \dots, c_{n+1}$이 서로 다른 근이라 하자. $f(c_{n+1}) = 0$이므로 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (1)에 의해 $f = (X - c_{n+1})q$인 $q$가 있고, $n + 1 \ge 1$이므로 같은 항목의 (3)에 의해 $q \ne 0$, $\deg q = n$이며 $q$의 최고차계수는 $a$이다. $1 \le j \le n$이면 [[evaluation-homomorphism|대입 준동형]]의 (2), (1)에 의해
   $$
   0 = f(c_j) = (c_j - c_{n+1})\, q(c_j)
   $$
   이다. $c_j \ne c_{n+1}$이므로 $c_j - c_{n+1} \ne 0$이고, $R$이 정역이므로 $q(c_j) = 0$이다. 처음 $n$개의 항 $c_1, \dots, c_n$은 서로 다른 원소의 열이므로 귀납 가정에 의해 $q = a(X - c_1) \cdots (X - c_n)$이다. 환 $R[X]$의 곱셈은 교환법칙과 결합법칙을 만족하므로([[polynomial-ring|다항식환]]의 (1)) [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (2)에 의해
   $$
   \begin{aligned}
   f &= (X - c_{n+1}) \\
   &\quad \cdot a(X - c_1) \cdots (X - c_n) \\
   &= a(X - c_1) \cdots (X - c_{n+1})
   \end{aligned}
   $$
   이다.

2. $7$은 소수이므로 $\mathbb{Z}_7$은 정역이다([[integral-domain|정역]]의 (3)의 (ii)). 차수의 (2), (3)에 의해 $f = X^3 - [1]$은 차수가 $3$인 모닉이다. 대입 준동형의 (1)과 유한 곱의 (10)의 (ii)에 의해 $f([1]) = [1] - [1] = [0]$, $f([2]) = [8 - 1] = [7] = [0]$, $f([4]) = [64 - 1] = [63] = [0]$이고, $[1]$, $[2]$, $[4]$는 서로 다르다([[integers-modulo-n|법 n의 정수]]의 (1)). 1을 $a = [1]$에 쓰면 $f = (X - [1])(X - [2])(X - [4])$이다. 검산: 오른쪽을 펼치면 $X^3 - [7]X^2 + [14]X - [8] = X^3 - [1]$이다.

   인수 정리의 (4)에 의해 $f$의 근 전체의 집합 $Z$는 원소가 $3$개 이하인 유한집합이다. $\{[1], [2], [4]\} \subseteq Z$이고 이 집합은 원소가 $3$개이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Z = \{[1], [2], [4]\}$이다.
:::

:::exercise[법 4의 정수 위에서 몫과 나머지가 두 쌍인 나눗셈]
$\mathbb{Z}_4[X]$에서 $g = [2]X + [1]$, $f = [1]$이라 하자.

1. $g$의 최고차계수 $[2]$는 $\mathbb{Z}_4$의 가역원이 아님을 보여라.
2. $f = gq + r$이고 $r = 0$이거나 $\deg r < \deg g$인 $q, r \in \mathbb{Z}_4[X]$의 쌍을 서로 다른 두 가지 들어라.
3. 2를 [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (1)과 견주어 보라.
:::

:::solution
$\mathbb{Z}_4$는 단위원 $[1]$을 갖는 가환환이다([[ring-examples|환의 예]]의 (3)).

1. $\mathbb{Z}_4$의 원소는 $[0], [1], [2], [3]$이고([[integers-modulo-n|법 n의 정수]]의 (1)) $[2]$를 곱하면 $[0], [2], [4] = [0], [6] = [2]$이다. 어느 것도 $[1]$이 아니므로 $[2][b] = [1]$인 $b$가 없고, [[field|가역원과 체]]의 정의에 의해 $[2]$는 가역원이 아니다.

2. [[degree-of-a-polynomial|다항식의 차수]]의 (1)에 의해 $\operatorname{coef}_1(g) = [2] \ne [0]$이고 그보다 높은 계수는 $0$이므로 $\deg g = 1$이다.

   *첫째 쌍.* $q = 0$, $r = [1]$이면 $gq + r = [1] = f$이고, $r$은 $0$이 아닌 상수 다항식이므로 차수의 (2)에 의해 $\deg r = 0 < 1$이다.

   *둘째 쌍.* $q = g$, $r = 0$이라 하자. [[polynomial-ring|다항식환]]의 곱의 정의로 $gg$의 계수를 구하면 $\operatorname{coef}_0(gg) = [1][1] = [1]$, $\operatorname{coef}_1(gg) = [1][2] + [2][1] = [4] = [0]$, $\operatorname{coef}_2(gg) = [1] \cdot [0] + [2][2] + [0] \cdot [1] = [0]$이고, 차수의 (4)에 의해 $k > 2$이면 $\operatorname{coef}_k(gg) = [0]$이다. 따라서 다항식환의 (5)의 (ii)에 의해 $gg = [1]$이고 $gq + r = [1] = f$이다.

   $g \ne 0$이므로 두 쌍의 몫 $0$과 $g$는 다르다.

3. 나눗셈 정리의 (1)은 나누는 다항식의 최고차계수가 가역원이면 몫과 나머지가 정확히 한 쌍이라고 말한다. 여기서는 1에 의해 그 가정이 성립하지 않고, 2에 의해 쌍이 하나로 정해지지 않는다. 둘째 쌍은 $g$가 $\mathbb{Z}_4[X]$의 가역원이고 $g^{-1} = g$라는 것을 보여 준다.
:::
