---
written_by: Claude
status: reviewed
sources: []
added: 2026-11-27
---

:::exercise[법 7의 정수에서 3의 거듭제곱들의 합]
1. $R$이 [[integral-domain|정역]]이고 $x \in R$, $x \ne 1$이며, $q$가 자연수이고 $x^q = 1$이라 하자. $\sum_{k=0}^{q-1} x^k = 0$임을 보여라.
2. $\mathbb{Z}_7$에서 $[3]^6 = [1]$임을 보이고, 1로 $\sum_{k=0}^{5} [3]^k = [0]$임을 보여라. 합을 직접 더해 확인하라.
3. $\mathbb{Z}_7$의 $x = [1]$, $q = 6$에서는 $x^q = 1$이지만 1의 결론이 성립하지 않음을 보여라.
:::

:::solution
1. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (11)의 (i)을 $a = x$, $b = 1$에 쓰면, 같은 항목의 (6)의 (v)에 의해 $1^j = 1$이므로 [[finite-sums-in-a-ring|환의 유한 합]]의 (3)과 함께
   $$
   \begin{aligned}
   (x - 1) \sum_{k=0}^{q-1} x^k &= x^q - 1^q \\
   &= 1 - 1 = 0
   \end{aligned}
   $$
   이다. $x \ne 1$이므로 $x - 1 \ne 0$이고, $R$이 정역이므로 $\sum_{k=0}^{q-1} x^k = 0$이다.

2. $7$은 소수이므로 $\mathbb{Z}_7$은 정역이다([[integral-domain|정역]]의 (3)의 (ii)). 유한 곱의 (10)의 (ii)에 의해 $[3]^2 = [9] = [2]$이고 $[2]^3 = [8] = [1]$이므로, 유한 곱의 (6)의 (iii)에 의해 $[3]^6 = ([3]^2)^3 = [1]$이다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[3] \ne [1]$이므로 1을 $x = [3]$, $q = 6$에 쓰면 $\sum_{k=0}^{5} [3]^k = [0]$이다. 직접 더해 보면, 유한 곱의 (6)의 (i)로 $[3]^k$는 $k = 0, \dots, 5$에서 차례로 $[1], [3], [9] = [2], [6], [18] = [4], [12] = [5]$이고, 그 합은 $[1 + 3 + 2 + 6 + 4 + 5] = [21] = [0]$이다.

3. 유한 곱의 (6)의 (v)에 의해 $[1]^6 = [1]$이고 $[1]^k = [1]$이다. 유한 합의 (3)과 (6)의 (iv), [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $\sum_{k=0}^{5} [1]^k = 6 \cdot [1] = [6]$이고, 법 n의 정수의 (1)에 의해 $[6] \ne [0]$이다. 1의 증명에서 $x - 1 \ne 0$을 쓴 단계가 여기서 깨진다.
:::

:::exercise[이항계수의 두 가지 합]
$n$이 $0$ 이상인 정수일 때 환 $\mathbb{Z}$에서 다음을 보여라.

1. $\sum_{k=0}^{n} C(n, k) = 2^n$이다.
2. $n \ge 1$이면 $\sum_{k=0}^{n} (-1)^k\, C(n, k) = 0$이다.
3. $n = 0$이면 2의 합은 $1$임을 확인하라.
:::

:::solution
환 $\mathbb{Z}$([[ring-examples|환의 예]]의 (1))에서 거듭제곱은 정수의 거듭제곱이고([[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (10)의 (i)), 정수배 $q \cdot x$는 정수의 곱 $qx$이며([[power-in-a-group|군의 거듭제곱]]의 (6)), 합은 정수의 합이다.

1. [[binomial-theorem|이항정리]]의 (1)을 $a = b = 1$에 쓰면 유한 곱의 (6)의 (v)에 의해 $1^k 1^{n-k} = 1$이므로
   $$
   2^n = (1 + 1)^n = \sum_{k=0}^{n} C(n, k)
   $$
   이다. 여기서 항을 바꾸어 쓴 것은 [[finite-sums-in-a-ring|환의 유한 합]]의 (3)이다.

2. 이항정리의 (1)을 $a = -1$, $b = 1$에 쓰면 $k$번째 항은 $C(n, k)\bigl((-1)^k 1^{n-k}\bigr) = (-1)^k C(n, k)$이고, 왼쪽은 $(-1 + 1)^n = 0^n$이다. $n \ge 1$이므로 유한 곱의 (6)의 (v)에 의해 $0^n = 0$이다. 따라서 합은 $0$이다.

3. $n = 0$이면 합에는 $k = 0$인 항 하나뿐이고 유한 합의 (1)에 의해 그 값은 $(-1)^0 C(0, 0) = 1 \cdot 1 = 1$이다. 이것은 2의 증명에서 $0^0 = 1$(유한 곱의 거듭제곱의 정의)인 것과 맞는다. 그래서 2에는 $n \ge 1$이라는 조건이 필요하다.
:::

:::exercise[파스칼의 삼각형의 비스듬한 합]
$r$이 $0$ 이상인 정수이고 $n$이 $r - 1 \le n$인 정수라 하자.

1. 환 $\mathbb{Z}$에서
   $$
   \sum_{k=r}^{n} C(k, r) = C(n + 1, r + 1)
   $$
   임을 보여라.
2. 1을 $r = 1$에 써서, $0$ 이상인 정수 $n$에 대하여 $2 \sum_{k=1}^{n} k = n(n + 1)$임을 보여라.
:::

:::solution
1. $r \le k \le n + 1$인 정수 $k$마다 $a_k = C(k, r + 1)$로 둔다($k \ge r \ge 0$이므로 정해진다). $r \le k \le n$이면 [[binomial-coefficient|이항계수]]의 파스칼 규칙을 $0$ 이상인 정수 $k$와 정수 $r + 1$에 써서
   $$
   \begin{aligned}
   &C(k + 1, r + 1) \\
   &\quad = C(k, r) + C(k, r + 1)
   \end{aligned}
   $$
   이므로 $C(k, r) = a_{k+1} - a_k$이다. [[finite-sums-in-a-ring|환의 유한 합]]의 (3)과 (6)의 (vi)(망원 합)에 의해
   $$
   \begin{aligned}
   &\sum_{k=r}^{n} C(k, r) \\
   &\quad = \sum_{k=r}^{n} (a_{k+1} - a_k) \\
   &\quad = a_{n+1} - a_r \\
   &\quad = C(n + 1, r + 1) \\
   &\qquad - C(r, r + 1)
   \end{aligned}
   $$
   이다. 이항계수의 (2)에 의해 $r + 1 > r$이므로 $C(r, r + 1) = 0$이고, 따라서 등식이 성립한다. $n = r - 1$이면 왼쪽은 빈 합 $0$이고 오른쪽은 $C(r, r + 1) = 0$이어서 이 경우도 위 계산에 들어 있다.

2. $r = 1$이면 $r - 1 = 0 \le n$이다. 이항계수의 (2)에 의해 $0$ 이상인 정수 $k$에서 $C(k, 1) = k$이므로 유한 합의 (3)과 1에 의해 $\sum_{k=1}^{n} k = C(n + 1, 2)$이다. $n + 1 \ge 1$이므로 이항계수의 (4)(흡수 등식)를 $n + 1$과 $k = 2$에 쓰면
   $$
   \begin{aligned}
   2\, C(n + 1, 2) &= (n + 1)\, C(n, 1) \\
   &= (n + 1)\, n
   \end{aligned}
   $$
   이다. 따라서 $2 \sum_{k=1}^{n} k = n(n + 1)$이다. 예컨대 $n = 4$이면 $2 \cdot (1 + 2 + 3 + 4) = 20 = 4 \cdot 5$이다.
:::

:::exercise[정역의 표수와 원소의 정수배]
1. $R$이 [[integral-domain|정역]]이고 $p$가 소수이며, $p \cdot a = 0$인 $a \in R$, $a \ne 0$이 있다고 하자. $\operatorname{char} R = p$임을 보여라.
2. $R$이 정역이고 $a$, $b$가 $R$의 $0$이 아닌 원소이면, 모든 정수 $n$에 대하여 $n \cdot a = 0$인 것은 정확히 $n \cdot b = 0$일 때임을 보여라.
3. $\mathbb{Z}_6$에서 $2 \cdot [3] = [0]$이지만 $2 \cdot [1] \ne [0]$임을 보이고, 2와 어긋나지 않는 까닭을 말하라.
:::

:::solution
1. [[characteristic-of-a-ring|환의 표수]]의 (3)에 의해 정역 $R$의 $0$이 아닌 원소 $a$에 대하여 $p \cdot a = 0$인 것은 정확히 $\operatorname{char} R \mid p$일 때이다. 따라서 $\operatorname{char} R \mid p$이다. 같은 (3)에 의해 $\operatorname{char} R$는 $0$이거나 소수이다. $\operatorname{char} R = 0$이면 $0 \mid p$이고, 표수 항목의 진술에 적힌 대로 이것은 $p = 0$일 때뿐인데 $p$는 소수라서 $0$이 아니므로 어긋난다. 그래서 $\operatorname{char} R$는 소수이고 $p$의 양의 약수이다. [[prime-number|소수]]의 정의에 의해 $p$의 양의 약수는 $1$과 $p$뿐이고, $1$은 소수가 아니므로 $\operatorname{char} R = p$이다.

2. 표수의 (3)에 의해 $n \cdot a = 0$인 것은 정확히 $\operatorname{char} R \mid n$일 때이고, 같은 (3)을 $b$에 쓰면 이것은 정확히 $n \cdot b = 0$일 때이다.

3. $\mathbb{Z}_6$은 [[ring-examples|환의 예]]의 (3)의 단위원을 갖는 가환환이다. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $2 \cdot [3] = [6]$, $2 \cdot [1] = [2]$이고, [[integers-modulo-n|법 n의 정수]]의 (1)의 원소 목록에서 $[6] = [0]$이며 $[2] \ne [0]$이다. $[3]$과 $[1]$은 $0$이 아니므로 2의 결론은 $\mathbb{Z}_6$에서 성립하지 않는다. [[integral-domain|정역]]의 (3)의 (i)에 의해 $\mathbb{Z}_6$은 정역이 아니므로 2와 어긋나지 않는다.
:::

:::exercise[이항계수에 번호를 곱한 합]
$n$이 자연수일 때 환 $\mathbb{Z}$에서
$$
\sum_{k=0}^{n} k\, C(n, k) = n\, 2^{n-1}
$$
임을 보여라. 문제 2를 써도 된다.
:::

:::solution
환 $\mathbb{Z}$에서 정수배와 거듭제곱, 합은 정수의 것이다(문제 2의 풀이 첫 문장). [[finite-sums-in-a-ring|환의 유한 합]]의 (2)의 둘째 등식으로 첫 항을 떼면, 첫 항은 $0 \cdot C(n, 0) = 0$이므로
$$
\sum_{k=0}^{n} k\, C(n, k) = \sum_{k=1}^{n} k\, C(n, k)
$$
이다. $1 \le k \le n$이면 $n \ge 1$이므로 [[binomial-coefficient|이항계수]]의 (4)에 의해 $k\, C(n, k) = n\, C(n - 1, k - 1)$이다. 유한 합의 (3)과 (6)의 (iii)에 의해
$$
\begin{aligned}
&\sum_{k=1}^{n} k\, C(n, k) \\
&\quad = n \sum_{k=1}^{n} C(n - 1, k - 1)
\end{aligned}
$$
이다. 유한 합의 (5)를 $t = -1$에 쓰면 $\sum_{k=1}^{n} C(n - 1, k - 1) = \sum_{k=0}^{n-1} C(n - 1, k)$이고, $n - 1 \ge 0$이므로 문제 2의 1에 의해 이 합은 $2^{n-1}$이다. 따라서 원래 합은 $n\, 2^{n-1}$이다. 예컨대 $n = 3$이면 $0 + 3 + 6 + 3 = 12 = 3 \cdot 4$이다.
:::

:::exercise[표수가 소수인 환에서 합의 거듭제곱]
$R$이 단위원을 갖는 가환환이고 $\operatorname{char} R = p$이며 $p$가 소수라 하자.

1. $0$ 이상인 모든 정수 $n$과 $R$의 원소의 열 $a_1, \dots, a_n$에 대하여
   $$
   \Bigl(\sum_{k=1}^{n} a_k\Bigr)^p = \sum_{k=1}^{n} a_k^p
   $$
   임을 보여라.
2. 1을 써서, $\mathbb{Z}_p$의 모든 원소 $x$에서 $x^p = x$임을 보여라. 또 모든 정수 $a$에 대하여 $\mathbb{Z}_p$에서 $[a^p] = [a]$임을 보여라. 여기서 $a^p$는 정수의 거듭제곱이다.
:::

:::solution
1. $n$에 대한 수학적 귀납법([[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴)으로 보인다. 명제는 "길이 $n$인 모든 열에 대하여 등식이 성립한다"이다.

   *기초 단계.* $n = 0$이면 [[finite-sums-in-a-ring|환의 유한 합]]의 (1)에 의해 양쪽의 합은 빈 합 $0$이다. $p \ge 1$이므로 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (v)에 의해 $0^p = 0$이다. 따라서 양쪽이 모두 $0$이다.

   *귀납 단계.* 길이 $n$인 열에서 등식이 성립한다고 하고 $a_1, \dots, a_{n+1}$이 열이라 하자. $s = \sum_{k=1}^{n} a_k$로 두면 유한 합의 (2)에 의해 $\sum_{k=1}^{n+1} a_k = s + a_{n+1}$이다. [[binomial-theorem|이항정리]]의 (2)에 의해 $(s + a_{n+1})^p = s^p + a_{n+1}^p$이고, 귀납 가정을 처음 $n$개의 항에 쓰면 $s^p = \sum_{k=1}^{n} a_k^p$이다. 다시 유한 합의 (2)를 항이 $a_k^p$인 열에 쓰면
   $$
   \begin{aligned}
   \Bigl(\sum_{k=1}^{n+1} a_k\Bigr)^p &= \sum_{k=1}^{n} a_k^p + a_{n+1}^p \\
   &= \sum_{k=1}^{n+1} a_k^p
   \end{aligned}
   $$
   이다.

2. [[characteristic-of-a-ring|환의 표수]]의 (4)에 의해 $\operatorname{char} \mathbb{Z}_p = p$이므로 1을 $R = \mathbb{Z}_p$에 쓸 수 있다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_p$의 원소는 $0 \le r \le p - 1$인 정수 $r$로 $[r]$이다. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $r \cdot [1] = [r]$이고, 유한 합의 (6)의 (iv)에 의해 $r \cdot [1] = \sum_{k=1}^{r} [1]$이다. 1과 유한 곱의 (6)의 (v)($[1]^p = [1]$), 유한 합의 (3)에 의해
   $$
   \begin{aligned}
   [r]^p &= \Bigl(\sum_{k=1}^{r} [1]\Bigr)^p = \sum_{k=1}^{r} [1]^p \\
   &= \sum_{k=1}^{r} [1] = [r]
   \end{aligned}
   $$
   이다. $r = 0$이면 합은 빈 합 $[0]$이고 계산은 그대로 맞는다. 따라서 모든 $x \in \mathbb{Z}_p$에서 $x^p = x$이다.

   정수 $a$에 대하여 유한 곱의 (10)의 (ii)에 의해 $[a]^p = [a^p]$이고, 방금 보인 것을 $x = [a]$에 쓰면 $[a]^p = [a]$이다. 따라서 $[a^p] = [a]$이다.
:::

:::exercise[법 6의 정수에서 세제곱의 합]
1. $\mathbb{Z}_6$의 모든 원소 $x$, $y$에 대하여 $(x + y)^3 = x^3 + y^3$임을 보여라.
2. $\operatorname{char} \mathbb{Z}_6$는 소수가 아님을 확인하고, $(x + y)^2 = x^2 + y^2$이 성립하지 않는 $x$, $y \in \mathbb{Z}_6$을 들어라.
3. 1과 2를 [[binomial-theorem|이항정리]]의 (2)와 견주어, "단위원을 갖는 가환환 $R$과 소수 $p$에 대하여 $R$의 모든 원소 $a$, $b$에서 $(a + b)^p = a^p + b^p$이면 $\operatorname{char} R = p$이다"가 $R = \mathbb{Z}_6$, $p = 3$에서 성립하지 않음을 말하라.
:::

:::solution
1. [[integers-modulo-n|법 n의 정수]]의 정의에 의해 $x = [a]$, $y = [b]$인 정수 $a$, $b$가 있다. 같은 항목의 (2)와 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (10)의 (ii)에 의해 $(x + y)^3 = [a + b]^3 = [(a + b)^3]$이고 $x^3 + y^3 = [a^3] + [b^3] = [a^3 + b^3]$이다.

   환 $\mathbb{Z}$에서 [[binomial-theorem|이항정리]]의 (1)을 $n = 3$에 쓴다. [[binomial-coefficient|이항계수]]의 (2)에 의해 $C(3, 0) = C(3, 3) = 1$, $C(3, 1) = 3$이고, (3)에 의해 $C(3, 2) = C(3, 1) = 3$이다. 정수배는 정수의 곱이므로([[power-in-a-group|군의 거듭제곱]]의 (6))
   $$
   \begin{aligned}
   (a + b)^3 &= b^3 + 3ab^2 \\
   &\quad + 3a^2b + a^3 \\
   &= a^3 + b^3 + 3ab(a + b)
   \end{aligned}
   $$
   이다. 이제 $ab(a + b)$가 짝수임을 보인다. [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $a$와 $b$는 각각 짝수이거나 홀수이다. $a = 2s$이면 $ab(a + b) = 2\bigl(sb(a + b)\bigr)$이고, $b = 2t$이면 $ab(a + b) = 2\bigl(at(a + b)\bigr)$이다. $a = 2s + 1$, $b = 2t + 1$이면 $a + b = 2(s + t + 1)$이므로 $ab(a + b) = 2\bigl(ab(s + t + 1)\bigr)$이다. 어느 경우에도 정수 $m$으로 $ab(a + b) = 2m$이고, $3ab(a + b) = 6m$이다.

   [[characteristic-of-a-ring|환의 표수]]의 (4)에 의해 $\operatorname{char} \mathbb{Z}_6 = 6$이고, (1)에 의해 $6 \cdot [m] = [0]$이다. 군의 거듭제곱의 (7)에 의해 $[6m] = 6 \cdot [m] = [0]$이므로
   $$
   \begin{aligned}
   (x + y)^3 &= [a^3 + b^3] + [6m] \\
   &= [a^3 + b^3] = x^3 + y^3
   \end{aligned}
   $$
   이다.

2. 표수의 (4)에 의해 $\operatorname{char} \mathbb{Z}_6 = 6$이고, $6 = 2 \cdot 3$이므로 $2$는 $1$과 $6$이 아닌 $6$의 양의 약수이다. 그래서 $6$은 [[prime-number|소수]]가 아니다. $x = y = [1]$이면 $(x + y)^2 = [2]^2 = [4]$이고 $x^2 + y^2 = [1] + [1] = [2]$이며, 법 n의 정수의 (1)에 의해 $[4] \ne [2]$이다.

3. 1에 의해 $R = \mathbb{Z}_6$의 모든 원소 $a$, $b$에서 $(a + b)^3 = a^3 + b^3$이지만, 2에 의해 $\operatorname{char} \mathbb{Z}_6 = 6 \ne 3$이다. 따라서 따옴표 안의 문장은 $R = \mathbb{Z}_6$, $p = 3$에서 성립하지 않는다. 이항정리의 (2)는 표수가 소수 $p$인 환에서 등식이 성립한다는 한 방향만 말한다.
:::
