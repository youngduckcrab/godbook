---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "5.1.4절, Exercise 5.1.1 (p.188) — 문제 'x² − 2x 의 다르부 합'과 같은 종류의 계산(주어진 함수와 분할의 하합과 상합을 구하기). 출처의 함수와 분할은 x³ 과 {0, 0.1, 0.4, 1} 이다"
added: 2026-11-26
---

:::exercise[x² − 2x 의 다르부 합]
$f(x) = x^2 - 2x$로 정한 함수 $f : [0, 3] \to \mathbb{R}$와 $[0, 3]$의 분할 $P = \{0, 1, 2, 3\}$, $Q = \{0, \frac{1}{2}, 1, 2, 3\}$을 생각한다.

1. $f$가 유계임을 보이고 $L(P, f)$, $U(P, f)$, $L(Q, f)$, $U(Q, f)$를 구하라.
2. $Q = P \cup \{\frac{1}{2}\}$이다. [[refinement-and-darboux-sums|세분과 다르부 합]]의 (1)의 두 식으로 $L(Q, f) - L(P, f)$와 $U(P, f) - U(Q, f)$를 다시 구해 1과 맞는지 보아라.
:::

:::solution
아래에서 [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (7)의 (ii)"처럼 쓰고, 거듭제곱 $x^2 = xx$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이며, 절댓값은 [[absolute-value|절댓값]]의 것이다. 다르부 합과 $m_i$, $M_i$는 [[darboux-sums|다르부 하합과 상합]]의 것이다.

**값의 범위를 재는 도구.** 모든 실수 $x$에서 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K3), (K12)에 의해 $(x - 1)(x - 1) = x^2 - 2x + 1$이므로 $f(x) = (x - 1)^2 - 1$이다. 절댓값의 (5)에 의해 $(x - 1)^2 = |x - 1|\,|x - 1|$이다. 따라서 실수 $s$, $t$가 $0 \le s \le |x - 1| \le t$를 만족하면, 순서 성질 (7)의 (ii)에 의해 $ss \le (x - 1)^2 \le tt$이고 순서 성질 (2)의 (i)로 $1$을 빼면
$$
s^2 - 1 \le f(x) \le t^2 - 1
$$
이다. 이것을 "도구"라 부른다.

**작은 구간마다의 하한과 상한.** $x \le 1$이면 $|x - 1| = 1 - x$이고 $1 \le x$이면 $|x - 1| = x - 1$이다(절댓값의 (1), (3)). 각 닫힌구간의 $x$에 대해 순서 성질 (2), (3)으로 $|x - 1|$의 범위를 적고 도구를 쓰면 다음 표를 얻는다.

| 구간 | $\lvert x - 1 \rvert$의 범위 | $f(x)$의 범위 | 아래끝을 주는 점 | 위끝을 주는 점 |
|---|---|---|---|---|
| $[0, \frac{1}{2}]$ | $\frac{1}{2}$ 이상 $1$ 이하 | $-\frac{3}{4}$ 이상 $0$ 이하 | $x = \frac{1}{2}$ | $x = 0$ |
| $[\frac{1}{2}, 1]$ | $0$ 이상 $\frac{1}{2}$ 이하 | $-1$ 이상 $-\frac{3}{4}$ 이하 | $x = 1$ | $x = \frac{1}{2}$ |
| $[0, 1]$ | $0$ 이상 $1$ 이하 | $-1$ 이상 $0$ 이하 | $x = 1$ | $x = 0$ |
| $[1, 2]$ | $0$ 이상 $1$ 이하 | $-1$ 이상 $0$ 이하 | $x = 1$ | $x = 2$ |
| $[2, 3]$ | $1$ 이상 $2$ 이하 | $0$ 이상 $3$ 이하 | $x = 2$ | $x = 3$ |

예컨대 $f(\frac{1}{2}) = \frac{1}{4} - 1 = -\frac{3}{4}$, $f(1) = -1$, $f(2) = 0$, $f(3) = 3$, $f(0) = 0$이다. 각 줄에서 아래끝은 그 구간의 한 점에서의 값이므로 상 $f([c, d])$의 원소이면서 하계, 곧 최솟값이고, [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 하한이다. 위끝도 같은 까닭으로 상한이다.

1. $[0, 3]$의 모든 $x$에서 $0 \le |x - 1| \le 2$이므로 도구에 의해 $-1 \le f(x) \le 3$이고, 절댓값의 (7)에 의해 $|f(x)| \le 3$이다. 따라서 $f$는 유계이다.

   $P$의 점은 $0, 1, 2, 3$이고 길이는 모두 $1$이다. 표에서 $m_1 = -1$, $m_2 = -1$, $m_3 = 0$이고 $M_1 = 0$, $M_2 = 0$, $M_3 = 3$이므로([[finite-sum-of-reals|실수의 유한 합]]의 (2), (3)으로 끝항을 차례로 더한다)
   $$
   \begin{gathered}
   L(P, f) = -1 - 1 + 0 = -2, \\
   U(P, f) = 0 + 0 + 3 = 3
   \end{gathered}
   $$
   이다.

   $Q$의 점은 $0, \frac{1}{2}, 1, 2, 3$이고 길이는 $\frac{1}{2}, \frac{1}{2}, 1, 1$이다. 표에서 하한은 $-\frac{3}{4}, -1, -1, 0$이고 상한은 $0, -\frac{3}{4}, 0, 3$이므로
   $$
   \begin{aligned}
   L(Q, f) &= -\tfrac{3}{8} - \tfrac{1}{2} - 1 + 0 \\
   &= -\tfrac{15}{8}, \\
   U(Q, f) &= 0 - \tfrac{3}{8} + 0 + 3 \\
   &= \tfrac{21}{8}
   \end{aligned}
   $$
   이다.

2. $y = \frac{1}{2}$은 $P$의 첫째 작은 구간 $[0, 1]$ 안에 있으므로 세분과 다르부 합의 (1)에서 $k = 1$, $x_0 = 0$, $x_1 = 1$이다. 표에서 $m_1 = -1$, $m' = -\frac{3}{4}$, $m'' = -1$, $M_1 = 0$, $M' = 0$, $M'' = -\frac{3}{4}$이므로
   $$
   \begin{aligned}
   &L(Q, f) - L(P, f) \\
   &\quad = \left(-\tfrac{3}{4} + 1\right)\tfrac{1}{2} + (-1 + 1)\tfrac{1}{2} \\
   &\quad = \tfrac{1}{8}, \\
   &U(P, f) - U(Q, f) \\
   &\quad = (0 - 0)\tfrac{1}{2} + \left(0 + \tfrac{3}{4}\right)\tfrac{1}{2} \\
   &\quad = \tfrac{3}{8}
   \end{aligned}
   $$
   이다. 1에서 $-\frac{15}{8} - (-2) = \frac{1}{8}$이고 $3 - \frac{21}{8} = \frac{3}{8}$이므로 맞는다. 하합은 늘고 상합은 줄었다.
:::

:::exercise[세분의 작은 구간의 길이]
$a < b$인 실수 $a$, $b$와 양수 $\delta$, $[a, b]$의 분할 $P$가 있고, $P$의 모든 작은 구간의 길이가 $\delta$보다 작다고 하자. $P$의 모든 세분 $Q$에서도 $Q$의 모든 작은 구간의 길이가 $\delta$보다 작음을 보여라.
:::

:::solution
분할, 점, 작은 구간, 길이는 [[partition-of-an-interval|구간의 분할]]의 것이고, 세분과 그 번호는 [[refinement-of-a-partition|분할의 세분]]의 것이다. 그 (1)에 의해 $P$의 모든 세분 $Q$에서 $Q - P$는 유한집합이므로, $0$ 이상인 모든 정수 $d$에 대한 다음 명제 $S(d)$를 보이면 된다.

> $S(d)$: $Q - P$가 원소를 $d$개 갖는 $P$의 모든 세분 $Q$에서, $Q$의 모든 작은 구간의 길이가 $\delta$보다 작다.

$d$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다.

(기초 단계) $Q - P$가 원소를 $0$개 가지면 $Q - P = \emptyset$이고, 분할의 세분의 (1)에 의해 $Q = P$이다. 가정에 의해 $S(0)$이 성립한다.

(귀납 단계) $S(d)$를 가정하고, $Q - P$가 원소를 $d + 1$개 갖는 $P$의 세분 $Q$를 잡는다. $d + 1 \ge 1$이므로 $Q - P \ne \emptyset$이고 그 (1)에 의해 $Q \ne P$이다. 원소 $y \in Q - P$를 하나 잡으면, 그 (4)의 (i), (iii)에 의해 $Q' = Q - \{y\}$는 $P$의 세분이고 $Q' - P$는 원소를 $d$개 가진다. $S(d)$에 의해 $Q'$의 모든 작은 구간의 길이는 $\delta$보다 작다.

$Q'$의 점을 $z_0, \dots, z_r$이라 하자. 그 (4)의 (ii)에 의해 $y \in [a, b] - Q'$이고 $Q = Q' \cup \{y\}$이다. 그 (3)의 (i)에 의해 $z_{k-1} < y < z_k$인 정수 $k$($1 \le k \le r$)가 있고, (3)의 (ii)에 의해 $Q$의 점 $w_0, \dots, w_{r+1}$은 $0 \le i \le k - 1$이면 $w_i = z_i$, $w_k = y$, $k + 1 \le i \le r + 1$이면 $w_i = z_{i-1}$이다. $Q$의 $i$번째 작은 구간의 길이 $w_i - w_{i-1}$을 $i$의 범위로 나누어 본다($1 \le i \le r + 1$).

- $1 \le i \le k - 1$이면 $w_i - w_{i-1} = z_i - z_{i-1}$로 $Q'$의 $i$번째 작은 구간의 길이이므로 $\delta$보다 작다.
- $i = k$이면 길이는 $y - z_{k-1}$이다. $0 < z_k - y$이므로([[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (i)) 같은 항목의 (2)의 (ii)에 의해 $y - z_{k-1} < (y - z_{k-1}) + (z_k - y) = z_k - z_{k-1}$이고, 이것은 $Q'$의 $k$번째 작은 구간의 길이이므로 $\delta$보다 작다. 그 (1)의 (v)에 의해 $y - z_{k-1} < \delta$이다.
- $i = k + 1$이면 길이는 $z_k - y$이고, 같은 방법으로 $0 < y - z_{k-1}$에서 $z_k - y < z_k - z_{k-1} < \delta$이다.
- $k + 2 \le i \le r + 1$이면 $w_i - w_{i-1} = z_{i-1} - z_{i-2}$로 $Q'$의 $(i - 1)$번째 작은 구간의 길이이므로 $\delta$보다 작다.

네 경우가 $1 \le i \le r + 1$을 모두 덮으므로 $S(d + 1)$이 성립한다.

기초 단계와 귀납 단계에 의해 $0$ 이상인 모든 $d$에서 $S(d)$가 성립하고, 따라서 $P$의 모든 세분에서 작은 구간의 길이가 $\delta$보다 작다.

예컨대 $[0, 1]$의 균등 분할 $P_4$([[uniform-partition|균등 분할]])는 작은 구간의 길이가 모두 $\frac{1}{4} < \frac{1}{3}$이므로, $P_4 \cup \{\frac{1}{10}\}$의 작은 구간의 길이 $\frac{1}{10}, \frac{3}{20}, \frac{1}{4}, \frac{1}{4}, \frac{1}{4}$도 모두 $\frac{1}{3}$보다 작다.
:::

:::exercise[상수를 더한 함수의 다르부 합과 하적분]
$a < b$인 실수 $a$, $b$와 유계인 $f : [a, b] \to \mathbb{R}$, 실수 $c$에 대하여 $g(x) = f(x) + c$로 정한 함수 $g : [a, b] \to \mathbb{R}$를 생각한다.

1. $g$는 유계이고, $[a, b]$의 모든 분할 $P$에서 $L(P, g) = L(P, f) + c(b - a)$, $U(P, g) = U(P, f) + c(b - a)$임을 보여라.
2. $\underline{\int_a^b} g = \underline{\int_a^b} f + c(b - a)$이고 $\overline{\int_a^b} g = \overline{\int_a^b} f + c(b - a)$임을 보여라.
:::

:::solution
다르부 합과 $m_i$, $M_i$는 [[darboux-sums|다르부 하합과 상합]]의 것이고, 하적분과 상적분은 [[lower-and-upper-integrals|하적분과 상적분]]의 것이며, 집합 $c + A = \{c + a : a \in A\}$와 그 상한·하한의 성질은 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 것이다.

1. $f$가 유계이므로 모든 $x$에서 $|f(x)| \le B$인 실수 $B$가 있다([[bounded-function|유계함수]]의 정의). [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|g(x)| \le |f(x)| + |c| \le B + |c|$이므로 $g$는 유계이다.

   $P$의 점을 $x_0, \dots, x_n$이라 하고 $1 \le i \le n$인 $i$를 잡아 $D = [x_{i-1}, x_i]$로 둔다. 실수 $y$가 $g(D)$의 원소인 것은 정확히 $y = f(x) + c = c + f(x)$인 $x \in D$가 있을 때이고([[real-number-arithmetic|실수의 계산 법칙]]의 (K1)), 이는 정확히 $y \in c + f(D)$일 때이다. 곧 $g(D) = c + f(D)$이다. 다르부 하합과 상합의 진술 첫머리에 의해 $f(D)$는 공집합이 아니고 유계이므로, 상한과 덧셈·곱셈의 (1)에 의해
   $$
   \begin{aligned}
   m_i(g) &= \inf (c + f(D)) \\
   &= c + m_i(f), \\
   M_i(g) &= c + M_i(f)
   \end{aligned}
   $$
   이다. (K1), (K3)에 의해 $m_i(g)\,\Delta x_i = m_i(f)\,\Delta x_i + c\,\Delta x_i$이므로, [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (1)과 (8), 그리고 [[partition-of-an-interval|구간의 분할]]의 (7)에 의해
   $$
   \begin{aligned}
   L(P, g) &= \sum_{i=1}^{n} m_i(f)\,\Delta x_i \\
   &\quad + c \sum_{i=1}^{n} \Delta x_i \\
   &= L(P, f) + c(b - a)
   \end{aligned}
   $$
   이다. $U(P, g)$도 $M_i$로 같은 계산을 하면 $U(P, f) + c(b - a)$이다.

2. $k = c(b - a)$로 두자. 1에 의해 실수 $t$가 집합 $\{L(P, g) : P\text{는 } [a, b]\text{의 분할}\}$의 원소인 것은 정확히 $t = k + L(P, f)$인 분할 $P$가 있을 때이므로, 이 집합은 $k + \{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}$이다. 하적분과 상적분의 (1)에 의해 뒤의 집합은 공집합이 아니고 유계이므로, 상한과 덧셈·곱셈의 (1)에 의해
   $$
   \underline{\int_a^b} g = k + \underline{\int_a^b} f
   $$
   이다. 상합의 집합과 하한으로 같은 계산을 하면 $\overline{\int_a^b} g = k + \overline{\int_a^b} f$이다.

검산으로 $f$가 값이 $p$인 상수함수이면 $g$는 값이 $p + c$인 상수함수이고, 하적분과 상적분의 (6)에 의해 $\underline{\int_a^b} g = (p + c)(b - a) = p(b - a) + c(b - a)$이다.
:::

:::exercise[유리수에서만 x 인 함수의 하적분과 상적분]
$[0, 1]$의 원소 $x$가 유리수이면 $h(x) = x$, 무리수이면 $h(x) = 0$으로 정한 함수 $h : [0, 1] \to \mathbb{R}$를 생각한다.

1. $h$가 유계이고, 점이 $x_0, \dots, x_n$인 $[0, 1]$의 모든 분할 $P$에서 모든 $i$에 대해 $m_i = 0$, $M_i = x_i$임을 보여라.
2. 모든 분할 $P$에서 $L(P, h) = 0$이고 $\underline{\int_0^1} h = 0$임을 보여라.
3. 모든 분할 $P$에서 $U(P, h) = \dfrac{1}{2} + \dfrac{1}{2}\sum_{i=1}^{n} (\Delta x_i)^2$임을 보여라.
4. $\overline{\int_0^1} h = \dfrac{1}{2}$임을 보여라.
:::

:::solution
아래에서 [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (1)의 (iii)"처럼, [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 번호를 "선형성 (1)"처럼 쓴다. [[dirichlet-function|디리클레 함수의 하적분과 상적분]]의 진술 첫머리대로 각 실수는 유리수이거나 무리수이고 둘 다는 아니므로, [[real-valued-function|실함수]]의 (1)에 의해 $h$가 정해진다. 분할의 성질은 [[partition-of-an-interval|구간의 분할]]의 번호로 쓴다.

1. $[0, 1]$의 $x$에서, $x$가 유리수이면 $0 \le h(x) = x \le 1$이고 무리수이면 $h(x) = 0$이다. 따라서 모든 $x$에서 $0 \le h(x) \le 1$이고 [[absolute-value|절댓값]]의 (7)에 의해 $|h(x)| \le 1$이므로 $h$는 유계이다.

   $1 \le i \le n$인 $i$를 잡고 $D = [x_{i-1}, x_i]$로 둔다. 구간의 분할의 (2)에 의해 $x_{i-1} < x_i$이고, (1)에 의해 $0 \le x_{i-1}$이다.

   ($m_i = 0$) 위에서 본 대로 $0$은 $h(D)$의 하계이다. 디리클레 함수의 하적분과 상적분의 (1)에 의해 $x_{i-1} < z < x_i$인 무리수 $z$가 있고, $z \in D \subseteq [0, 1]$이므로 $h(z) = 0 \in h(D)$이다. 따라서 $0$은 $h(D)$의 최솟값이고, [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 $m_i = 0$이다.

   ($M_i = x_i$) $x \in D$이면, $x$가 유리수일 때 $h(x) = x \le x_i$이고, 무리수일 때 $h(x) = 0 \le x_{i-1} \le x_i$이다. 따라서 $x_i$는 $h(D)$의 상계이다. 실수 $c$가 $c < x_i$이면 $e = \max\{c, x_{i-1}\}$은 $c$이거나 $x_{i-1}$이므로([[absolute-value|절댓값]]의 (10)) $e < x_i$이다. [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $e < q < x_i$인 유리수 $q$가 있다. $x_{i-1} \le e < q$이므로 $q \in D$이고 $h(q) = q > e \ge c$이다. 곧 $c$는 $h(D)$의 상계가 아니다. 따라서 $h(D)$의 모든 상계 $b'$는 순서 성질 (1)의 (iii)에 의해 $x_i \le b'$이고, $x_i$는 상한이다. 곧 $M_i = x_i$이다.

2. 1에 의해 $L(P, h) = \sum_{i=1}^{n} 0 \cdot \Delta x_i = 0$이다(선형성 (2)). 하합의 집합은 $\{0\}$이므로 상계와 상한의 (2)에 의해 $\underline{\int_0^1} h = 0$이다.

3. $1 \le i \le n$에서 (K1)–(K3), (K12)로 전개하면
   $$
   \begin{aligned}
   x_i\,\Delta x_i &= x_i(x_i - x_{i-1}) \\
   &= \frac{x_i^2 - x_{i-1}^2}{2} \\
   &\quad + \frac{(x_i - x_{i-1})^2}{2}
   \end{aligned}
   $$
   이다(오른쪽은 $\frac{1}{2}(x_i^2 - x_{i-1}^2 + x_i^2 - 2x_i x_{i-1} + x_{i-1}^2) = x_i^2 - x_i x_{i-1}$). $0 \le i \le n$에서 $c_i = x_i^2/2$로 두면 [[telescoping-sum|망원 합]]의 (1)과 구간의 분할의 (1)($x_0 = 0$, $x_n = 1$)에 의해
   $$
   \sum_{i=1}^{n} \frac{x_i^2 - x_{i-1}^2}{2} = c_n - c_0 = \frac{1}{2}
   $$
   이다. 1과 선형성 (1), (8)에 의해
   $$
   \begin{aligned}
   U(P, h) &= \sum_{i=1}^{n} x_i\,\Delta x_i \\
   &= \frac{1}{2} + \frac{1}{2}\sum_{i=1}^{n} (\Delta x_i)^2
   \end{aligned}
   $$
   이다.

4. 순서 성질 (5)의 (iii)에 의해 모든 항 $(\Delta x_i)^2$은 $0$ 이상이므로, 선형성 (6)과 3에 의해 모든 분할에서 $\frac{1}{2} \le U(P, h)$이다. 곧 $\frac{1}{2}$은 상합의 집합의 하계이고, 하한의 정의에 의해 $\frac{1}{2} \le \overline{\int_0^1} h$이다.

   거꾸로 자연수 $n$에 대하여 $[0, 1]$의 균등 분할 $P_n$([[uniform-partition|균등 분할]]의 (1))은 모든 길이가 $\frac{1}{n}$이므로, 선형성 (2)에 의해 $\sum_{i=1}^{n} (\frac{1}{n})^2 = n \cdot \frac{1}{n^2} = \frac{1}{n}$이고 3에 의해 $U(P_n, h) = \frac{1}{2} + \frac{1}{2n}$이다. 양수 $\varepsilon$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $\frac{1}{n} < \varepsilon$인 자연수 $n$이 있고, 순서 성질 (8)에 의해 $\frac{1}{2n} < \frac{1}{n}$이다. [[lower-and-upper-integrals|하적분과 상적분]]의 (2)에 의해
   $$
   \begin{aligned}
   \overline{\int_0^1} h &\le U(P_n, h) = \frac{1}{2} + \frac{1}{2n} \\
   &< \frac{1}{2} + \varepsilon
   \end{aligned}
   $$
   이므로 $\overline{\int_0^1} h - \frac{1}{2} < \varepsilon$이다. 모든 양수 $\varepsilon$에서 이렇게 되므로 순서 성질 (9)에 의해 $\overline{\int_0^1} h - \frac{1}{2} \le 0$이고, 앞의 부등식과 순서 성질 (1)의 (ii)에 의해 $\overline{\int_0^1} h = \frac{1}{2}$이다.

검산으로 $P_2 = \{0, \frac{1}{2}, 1\}$이면 $U(P_2, h) = \frac{1}{2} \cdot \frac{1}{2} + 1 \cdot \frac{1}{2} = \frac{3}{4} = \frac{1}{2} + \frac{1}{4}$이다.
:::

:::exercise[하적분에 닿는 분할과 상적분에 닿지 않는 상합]
문제 4의 함수 $h$를 생각한다.

1. $[0, 1]$의 모든 분할 $P$에서 $L(P, h) = \underline{\int_0^1} h$이지만, $U(P, h) = \overline{\int_0^1} h$인 분할 $P$는 없음을 보여라.
2. 분할 $\{0, 1\}$은 모든 양수 $\varepsilon$에서 $\underline{\int_0^1} h - \varepsilon < L(\{0, 1\}, h)$를 만족하지만, $U(\{0, 1\}, h) - \overline{\int_0^1} h = \frac{1}{2}$임을 보여라. 그래서 $\varepsilon = \frac{1}{10}$에 대한 [[lower-and-upper-integrals|하적분과 상적분]]의 (4)의 두 부등식을 이 분할 하나로는 맞출 수 없다. 두 부등식을 함께 만족하는 분할을 하나 찾아라.
:::

:::solution
문제 4의 결과를 번호로 쓴다.

1. 문제 4의 2에 의해 모든 분할에서 $L(P, h) = 0 = \underline{\int_0^1} h$이다. 점이 $x_0, \dots, x_n$인 분할 $P$를 잡으면 [[partition-of-an-interval|구간의 분할]]의 (1), (2)에 의해 $n \ge 1$이고 $0 < \Delta x_1$이며, [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (i)에 의해 $0 < (\Delta x_1)^2$이다. 다른 항은 모두 $0$ 이상이므로 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (6)의 둘째 문장($k = 1$)에 의해 $0 < \sum_{i=1}^{n} (\Delta x_i)^2$이다. 문제 4의 3과 4에 의해
   $$
   \begin{aligned}
   U(P, h) &= \frac{1}{2} + \frac{1}{2}\sum_{i=1}^{n} (\Delta x_i)^2 \\
   &> \frac{1}{2} = \overline{\int_0^1} h
   \end{aligned}
   $$
   이므로 $U(P, h) \ne \overline{\int_0^1} h$이다. 곧 하적분은 모든 하합과 같지만, 상적분은 상합의 집합의 하한일 뿐 어느 상합과도 같지 않다.

2. $L(\{0, 1\}, h) = 0 = \underline{\int_0^1} h$이고 모든 양수 $\varepsilon$에서 $0 - \varepsilon < 0$이다. 한편 $\{0, 1\}$은 $n = 1$, $\Delta x_1 = 1$이므로 문제 4의 3에 의해 $U(\{0, 1\}, h) = \frac{1}{2} + \frac{1}{2} = 1$이고, 4에 의해 $U(\{0, 1\}, h) - \overline{\int_0^1} h = \frac{1}{2}$이다. $\frac{1}{2} < \frac{1}{10}$이 아니므로 $\varepsilon = \frac{1}{10}$에서 둘째 부등식 $U(R, h) < \overline{\int_0^1} h + \varepsilon$은 $R = \{0, 1\}$로 맞지 않는다.

   하적분과 상적분의 (4)대로 둘째 부등식을 맞추는 분할을 따로 잡아 합친다. 문제 4의 4의 계산에 의해 균등 분할 $P_6$은 $U(P_6, h) = \frac{1}{2} + \frac{1}{12}$이고, $10 < 12$이므로 순서 성질 (6)의 (ii)에 의해 $\frac{1}{12} < \frac{1}{10}$이다. [[uniform-partition|균등 분할]]의 (1)에 의해 $0$과 $1$은 $P_6$의 점이므로 $\{0, 1\} \cup P_6 = P_6$이다. $R = P_6$에서 $L(R, h) = 0 > -\frac{1}{10}$이고 $U(R, h) = \frac{1}{2} + \frac{1}{12} < \frac{1}{2} + \frac{1}{10}$이므로 두 부등식이 함께 성립한다.
:::
