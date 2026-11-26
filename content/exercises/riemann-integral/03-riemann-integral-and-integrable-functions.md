---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "5.2.3절, Lemma 5.2.7 의 증명 (p.195) — 문제 '립시츠 연속인 함수의 상합과 하합의 차'의 2와 같은 발상(한 작은 구간의 두 점은 거리가 Δxᵢ 이하이므로 값의 차를 그것으로 누른다). 출처는 연속함수에서 고른 연속성으로 값의 차를 누른다"
added: 2026-11-26
---

:::exercise[√x 의 균등 분할에서의 다르부 합]
$f(x) = \sqrt{x}$로 정한 함수 $f : [0, 4] \to \mathbb{R}$를 생각한다.

1. $f$가 단조증가이고 리만 적분가능함을 보여라.
2. 모든 자연수 $n$에서 $U(P_n, f) - L(P_n, f) = \dfrac{8}{n}$임을 보이고, 이 차가 $\dfrac{1}{10}$보다 작게 되는 가장 작은 자연수 $n$을 구하라.
3. $L(P_4, f)$와 $U(P_4, f)$를 구하고, $\int_0^4 f$가 놓이는 범위를 말하라.
:::

:::solution
제곱근은 [[square-root-exists|제곱근의 존재]]의 것이고, 단조증가는 [[derivative-and-monotonicity|도함수와 증가·감소]]의 것이며, 균등 분할 $P_n$과 $h_n$은 [[uniform-partition|균등 분할]]의 것이다.

1. $0 \le x < y \le 4$이면 제곱근의 존재의 (2)에 의해 $\sqrt{x} < \sqrt{y}$이므로 $f(x) \le f(y)$이다. 따라서 $f$는 단조증가이고, [[monotone-implies-integrable|단조함수의 적분가능성]]의 정의에 의해 단조이며, 그 (4)에 의해 리만 적분가능하다.

2. $0 \cdot 0 = 0$이고 $0 \le 0$이므로 제곱근의 존재의 (1)의 유일성에 의해 $f(0) = 0$이고, 같은 까닭으로 $2 \cdot 2 = 4$에서 $f(4) = 2$이다. 단조함수의 적분가능성의 (3)에 의해
   $$
   \begin{aligned}
   &U(P_n, f) - L(P_n, f) \\
   &\quad = \frac{|f(4) - f(0)|\,(4 - 0)}{n} = \frac{8}{n}
   \end{aligned}
   $$
   이다. $0 < 10n$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (6)의 (iv)에 의해 $\frac{8}{n} < \frac{1}{10}$인 것은 정확히 $80 < n$일 때이다. 정수에서 $80 < n$이면 [[prime-number]]의 (Z1)에 의해 $81 \le n$이므로, 가장 작은 $n$은 $81$이다($n = 80$이면 차가 $\frac{1}{10}$이어서 작지 않다).

3. $P_4$는 $h_4 = 1$이고 점이 $0, 1, 2, 3, 4$이다(균등 분할의 (1)). 단조함수의 적분가능성의 (2)에 의해 단조증가인 $f$에서는 $m_i = f(x_{i-1})$, $M_i = f(x_i)$이다. 길이는 모두 $1$이고 $\sqrt{1} = 1$이므로
   $$
   \begin{aligned}
   L(P_4, f) &= 0 + 1 + \sqrt{2} + \sqrt{3} \\
   &= 1 + \sqrt{2} + \sqrt{3}, \\
   U(P_4, f) &= 1 + \sqrt{2} + \sqrt{3} + 2 \\
   &= 3 + \sqrt{2} + \sqrt{3}
   \end{aligned}
   $$
   이다. 차는 $2 = \frac{8}{4}$로 2와 맞는다. [[riemann-integral|리만 적분]]의 (1)에 의해
   $$
   \begin{aligned}
   1 + \sqrt{2} + \sqrt{3} &\le \int_0^4 \sqrt{x}\,dx \\
   &\le 3 + \sqrt{2} + \sqrt{3}
   \end{aligned}
   $$
   이다.
:::

:::exercise[립시츠 연속인 함수의 상합과 하합의 차]
$a < b$인 실수 $a$, $b$와 함수 $f : [a, b] \to \mathbb{R}$, 그리고 $f$의 립시츠 상수 $K$([[lipschitz-continuity|립시츠 연속]])를 생각한다.

1. $f$가 유계임을 보여라.
2. 점이 $x_0, \dots, x_n$인 $[a, b]$의 모든 분할 $P$에서 $U(P, f) - L(P, f) \le K \sum_{i=1}^{n} (\Delta x_i)^2$임을 보여라.
3. 모든 자연수 $n$에서 $U(P_n, f) - L(P_n, f) \le \dfrac{K(b - a)^2}{n}$임을 보이고, 이것으로 $f$가 리만 적분가능함을 보여라. ([[continuous-implies-integrable|연속함수의 적분가능성]]은 쓰지 않는다.)
4. $[-1, 1]$ 위의 $f(x) = |x|$와 $K = 1$, $n = 2$에서 3의 부등식의 두 쪽을 계산하라.
:::

:::solution
아래에서 [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (4)의 (iii)"처럼, [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 번호를 "선형성 (1)"처럼 쓴다. 절댓값은 [[absolute-value|절댓값]]의 것이다. 립시츠 상수의 정의에 의해 $0 \le K$이고 $[a, b]$의 모든 $x$, $w$에서 $|f(x) - f(w)| \le K|x - w|$이다.

1. $x \in [a, b]$이면 $0 \le x - a \le b - a$이므로 $|x - a| = x - a \le b - a$이고(절댓값의 (1)), 순서 성질 (4)의 (iii)에 의해 $K|x - a| \le K(b - a)$이다. [[triangle-inequality|삼각부등식]]의 (1)에 의해
   $$
   \begin{aligned}
   |f(x)| &= \bigl|(f(x) - f(a)) + f(a)\bigr| \\
   &\le |f(x) - f(a)| + |f(a)| \\
   &\le K|x - a| + |f(a)| \\
   &\le K(b - a) + |f(a)|
   \end{aligned}
   $$
   이므로 $f$는 유계이다.

2. $1 \le i \le n$인 $i$를 잡고 $D = [x_{i-1}, x_i]$로 둔다. $x, w \in D$이면 $x_{i-1} \le x \le x_i$, $x_{i-1} \le w \le x_i$이므로 순서 성질 (2)의 (iii)과 (3)의 (iii)에 의해 $-\Delta x_i \le x - w \le \Delta x_i$이고, 절댓값의 (7)에 의해 $|x - w| \le \Delta x_i$이다. 따라서
   $$
   \begin{aligned}
   |f(x) - f(w)| &\le K|x - w| \\
   &\le K\,\Delta x_i
   \end{aligned}
   $$
   이다. 1에 의해 $f$는 유계이므로 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 아래의 둘째 항목에 의해 $D$ 위에서 유계이고, 그 (4)의 (iii)에서 (i)로 가면($r = K\Delta x_i$) $M_i - m_i \le K\,\Delta x_i$이다($M_i = \sup f(D)$, $m_i = \inf f(D)$). $0 < \Delta x_i$이므로 순서 성질 (4)의 (iii)에 의해 $(M_i - m_i)\Delta x_i \le K (\Delta x_i)^2$이다. [[darboux-sums|다르부 하합과 상합]]의 (3)과 선형성 (3), (1), (8)에 의해
   $$
   \begin{aligned}
   &U(P, f) - L(P, f) \\
   &\quad = \sum_{i=1}^{n} (M_i - m_i)\Delta x_i \\
   &\quad \le K \sum_{i=1}^{n} (\Delta x_i)^2
   \end{aligned}
   $$
   이다.

3. [[uniform-partition|균등 분할]]의 (1)에 의해 $P_n$의 모든 길이는 $h_n = \frac{b - a}{n}$이므로, 선형성 (2)에 의해 $\sum_{i=1}^{n} h_n^2 = n h_n^2 = \frac{(b - a)^2}{n}$이다. 2에 의해 $U(P_n, f) - L(P_n, f) \le \frac{K(b - a)^2}{n}$이다.

   양수 $\varepsilon$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (2)를 $x = \varepsilon$, $y = K(b - a)^2$에 써서 $K(b - a)^2 < n\varepsilon$인 자연수 $n$을 얻는다. 순서 성질 (6)의 (iv)에 의해 $\frac{K(b - a)^2}{n} < \varepsilon$이고, 순서 성질 (1)의 (v)에 의해 $U(P_n, f) - L(P_n, f) < \varepsilon$이다. [[integrability-criterion|리만 적분가능성의 판정]]의 (6)의 첫째 문장에 의해 $f$는 리만 적분가능하다.

4. [[triangle-inequality|삼각부등식]]의 (2)에 의해 $\bigl||x| - |w|\bigr| \le |x - w|$이므로 $K = 1$은 $|x|$의 립시츠 상수이다. $P_2 = \{-1, 0, 1\}$이다. $[-1, 0]$의 $x$에서 $|x| = -x$는 $0$ 이상 $1$ 이하이고 $x = 0$에서 $0$, $x = -1$에서 $1$이므로 이 작은 구간의 하한과 상한은 $0$과 $1$이다(최솟값과 최댓값, [[upper-bound-and-supremum|상계와 상한]]의 (2)). $[0, 1]$에서도 같은 까닭으로 $0$과 $1$이다. 따라서 $U(P_2, f) - L(P_2, f) = (1 - 0) \cdot 1 + (1 - 0) \cdot 1 = 2$이고, 오른쪽은 $\frac{1 \cdot 2^2}{2} = 2$이다. 이 경우 3의 부등식은 등식이다.
:::

:::exercise[x³ 의 적분]
$0 \le a < b$인 실수 $a$, $b$에 대하여 $f(x) = x^3$으로 정한 함수 $f : [a, b] \to \mathbb{R}$를 생각한다.

1. $0 \le s \le t$인 실수 $s$, $t$에 대하여 $t^4 - s^4 = (t - s)(t^3 + t^2 s + t s^2 + s^3)$이고 $4s^3 \le t^3 + t^2 s + t s^2 + s^3 \le 4t^3$임을 보여라.
2. $f$가 리만 적분가능하고 $\displaystyle\int_a^b x^3\,dx = \frac{b^4 - a^4}{4}$임을 보여라. 각 작은 구간에서 $\frac{1}{4}(x_i^4 - x_{i-1}^4)$이 하합의 조각과 상합의 조각 사이에 있음을 보이는 방법으로 한다.
3. $\int_1^2 x^3\,dx$를 구하고, 분할 $\{1, \frac{3}{2}, 2\}$의 하합과 상합 사이에 있는지 확인하라.
:::

:::solution
거듭제곱은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고, 그 정의와 (1)에 의해 $x^3 = x^2 x$, $x^4 = x^3 x$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (4)의 (iii)"처럼 쓴다.

1. [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K3), (K12)와 지수법칙(거듭제곱의 (2)의 (i))으로 전개하면
   $$
   \begin{aligned}
   &(t - s)(t^3 + t^2 s + t s^2 + s^3) \\
   &\quad = (t^4 + t^3 s + t^2 s^2 + t s^3) \\
   &\qquad - (t^3 s + t^2 s^2 + t s^3 + s^4) \\
   &\quad = t^4 - s^4
   \end{aligned}
   $$
   이다. 다음으로 네 항 $sss$, $tss$, $tts$, $ttt$를 비교한다. $s \le t$이고 $ss$, $ts$, $tt$는 순서 성질 (4)의 (iv)에 의해 $0$ 이상이므로, 순서 성질 (4)의 (iii)에 의해 $s(ss) \le t(ss)$, $(ts)s \le (ts)t$, $(tt)s \le (tt)t$이다. 곧 $s^3 \le t s^2 \le t^2 s \le t^3$이고(K1, K2), 순서 성질 (1)의 (v)에 의해 네 항은 모두 $s^3$ 이상 $t^3$ 이하이다. 순서 성질 (2)의 (iii)을 세 번 쓰면 $4s^3 \le t^3 + t^2 s + t s^2 + s^3 \le 4t^3$이다.

2. $0 \le x < y$이면 거듭제곱의 (6)의 (ii)에 의해 $x^3 < y^3$이므로 $f$는 단조증가이고, [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 리만 적분가능하다. 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할 $P$를 잡으면, 그 (2)에 의해 $m_i = x_{i-1}^3$, $M_i = x_i^3$이다.

   $0 \le i \le n$에서 $c_i = \frac{1}{4}x_i^4$으로 둔다. $1 \le i \le n$이면 $s = x_{i-1}$, $t = x_i$는 $0 \le a \le s < t$를 만족하고($a \le x_{i-1}$은 [[partition-of-an-interval|구간의 분할]]의 (1)), $\Delta x_i = t - s > 0$이다. 1에 의해
   $$
   \begin{aligned}
   &c_i - c_{i-1} \\
   &\quad = \frac{\Delta x_i}{4}\,(t^3 + t^2 s + t s^2 + s^3)
   \end{aligned}
   $$
   이고, 1의 부등식에 $\frac{\Delta x_i}{4} > 0$을 곱하면(순서 성질 (4)의 (iii)) $m_i\,\Delta x_i = s^3\Delta x_i \le c_i - c_{i-1} \le t^3 \Delta x_i = M_i\,\Delta x_i$이다. [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (3)과 (8), [[telescoping-sum|망원 합]]의 (1)에 의해
   $$
   \begin{aligned}
   L(P, f) &\le \sum_{i=1}^{n} (c_i - c_{i-1}) \\
   &= c_n - c_0 = \frac{b^4 - a^4}{4} \\
   &\le U(P, f)
   \end{aligned}
   $$
   이다($x_0 = a$, $x_n = b$). 이것이 모든 분할에서 성립하므로 [[riemann-integral|리만 적분]]의 (3)에 의해 $\int_a^b x^3\,dx = \frac{b^4 - a^4}{4}$이다.

3. $0 \le 1$이므로 2에 의해 $\int_1^2 x^3\,dx = \frac{16 - 1}{4} = \frac{15}{4}$이다. 분할 $\{1, \frac{3}{2}, 2\}$에서 $(\frac{3}{2})^3 = \frac{27}{8}$이므로 하합은 $1 \cdot \frac{1}{2} + \frac{27}{8} \cdot \frac{1}{2} = \frac{35}{16}$, 상합은 $\frac{27}{8} \cdot \frac{1}{2} + 8 \cdot \frac{1}{2} = \frac{91}{16}$이다. $\frac{15}{4} = \frac{60}{16}$이고 $35 < 60 < 91$이므로 사이에 있다.
:::

:::exercise[양의 하계를 갖는 함수의 역수]
$a < b$인 실수 $a$, $b$와 리만 적분가능한 $f : [a, b] \to \mathbb{R}$, 그리고 $[a, b]$의 모든 $x$에서 $m \le f(x)$인 양수 $m$이 있다고 하자.

1. $1/f$([[real-valued-function|실함수]]의 (5))의 정의역이 $[a, b]$ 전체이고 $1/f$가 유계임을 보여라.
2. $[a, b]$의 모든 분할 $P$에서 $U(P, 1/f) - L(P, 1/f) \le \dfrac{U(P, f) - L(P, f)}{m^2}$임을 보여라.
3. $1/f$가 리만 적분가능함을 보여라.
:::

:::solution
아래에서 [[order-properties-of-reals|실수의 순서의 성질]]의 번호를 "순서 성질 (6)의 (ii)"처럼 쓰고, 절댓값은 [[absolute-value|절댓값]]의 것이며, 진동의 성질은 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 것이다. 다르부 합은 [[darboux-sums|다르부 하합과 상합]]의 것이다.

1. 모든 $x$에서 $0 < m \le f(x)$이므로 순서 성질 (1)의 (v)에 의해 $0 < f(x)$이고 $f(x) \ne 0$이다. 따라서 실함수의 (5)의 $Z = \{x \in [a, b] : f(x) \ne 0\}$는 $[a, b]$이다. $m = f(x)$이면 $f(x)^{-1} = m^{-1}$이고, $m < f(x)$이면 순서 성질 (6)의 (ii)에 의해 $0 < f(x)^{-1} < m^{-1}$이다. 어느 쪽이든 $0 < f(x)^{-1} \le m^{-1}$이므로 $|f(x)^{-1}| \le m^{-1}$이고 $1/f$는 유계이다.

2. $P$의 점을 $x_0, \dots, x_n$이라 하고 $1 \le i \le n$인 $i$를 잡아 $D = [x_{i-1}, x_i]$로 둔다. $f$의 $D$ 위의 진동을 $r_i = M_i(f) - m_i(f)$라 하자. $x, y \in D$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K3), (K12)에 의해
   $$
   \begin{aligned}
   \frac{1}{f(x)} - \frac{1}{f(y)} &= \bigl(f(y) - f(x)\bigr) \\
   &\quad \cdot \bigl(f(x) f(y)\bigr)^{-1}
   \end{aligned}
   $$
   이다. 진동의 (4)의 "특히"에 의해 $|f(y) - f(x)| \le r_i$이다. 순서 성질 (11)의 (i)에 의해 $mm \le f(x)f(y)$이고, 1과 같은 방법으로 $0 < (f(x)f(y))^{-1} \le (mm)^{-1}$이다. 절댓값의 (4)와 (1), 그리고 순서 성질 (11)의 (i)에 의해
   $$
   \begin{aligned}
   &\left|\frac{1}{f(x)} - \frac{1}{f(y)}\right| \\
   &\quad = |f(y) - f(x)| \\
   &\qquad \cdot \bigl(f(x)f(y)\bigr)^{-1} \\
   &\quad \le r_i\,(mm)^{-1}
   \end{aligned}
   $$
   이다. 1에 의해 $1/f$는 $D$ 위에서 유계이므로 진동의 (4)의 (iii)에서 (i)로 가면 $M_i(1/f) - m_i(1/f) \le r_i\,m^{-2}$이다($m^2 = mm$). 양변에 $\Delta x_i > 0$을 곱하고(순서 성질 (4)의 (iii)) 다르부 합의 (3)과 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (3), (1), (8)을 쓰면
   $$
   \begin{aligned}
   &U(P, 1/f) - L(P, 1/f) \\
   &\quad \le m^{-2} \sum_{i=1}^{n} r_i\,\Delta x_i \\
   &\quad = \frac{U(P, f) - L(P, f)}{m^2}
   \end{aligned}
   $$
   이다.

3. 양수 $\varepsilon$을 잡는다. $0 < m^2\varepsilon$이므로 [[integrability-criterion|리만 적분가능성의 판정]]의 (1)에 의해 $U(P, f) - L(P, f) < m^2\varepsilon$인 분할 $P$가 있다. 2와 순서 성질 (6)의 (iv)에 의해 $U(P, 1/f) - L(P, 1/f) < \varepsilon$이다. 1에 의해 $1/f$는 유계이므로 같은 판정의 (1)에 의해 $1/f$는 리만 적분가능하다.

예컨대 $[1, 2]$ 위의 $f(x) = x$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 적분가능하고 $m = 1$로 가정을 만족하므로, $x$에서의 값이 $x^{-1}$인 함수는 $[1, 2]$에서 적분가능하다.
:::

:::exercise[디리클레 함수의 다르부 합 사이에 끼인 수]
$a < b$인 실수 $a$, $b$와 $[a, b]$ 위의 디리클레 함수 $D$([[dirichlet-function|디리클레 함수의 하적분과 상적분]])를 생각한다.

1. 실수 $I$가 $[a, b]$의 모든 분할 $P$에서 $L(P, D) \le I \le U(P, D)$를 만족하는 것은 정확히 $0 \le I \le b - a$일 때임을 보여라.
2. 1을 써서, [[riemann-integral|리만 적분]]의 (3)에서 "$f$가 적분가능하다"는 가정을 빼면 "모든 분할의 하합과 상합 사이에 있는 수"가 하나로 정해지지 않을 수 있음을 보여라. 또 적분가능한 $f$에서는 그런 수가 정확히 하나임을 보여라.
:::

:::solution
1. 디리클레 함수의 하적분과 상적분의 (3)에 의해 모든 분할에서 $L(P, D) = 0$이고 $U(P, D) = b - a$이다. 따라서 "모든 분할 $P$에서 $L(P, D) \le I \le U(P, D)$"는 "$0 \le I \le b - a$"와 같은 말이다. ([[partition-of-an-interval|구간의 분할]]의 (4)에 의해 분할 $\{a, b\}$가 있으므로, 앞의 조건이 아무 분할에도 해당하지 않아 저절로 참이 되는 일은 없다.)

2. $a < b$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (8)에 의해 $0 < \frac{b - a}{2} < b - a$이다. 1에 의해 $0$, $\frac{b - a}{2}$, $b - a$는 모두 하합과 상합 사이에 있는 수이고 서로 다르다. 리만 적분의 (5)에 의해 $D$는 적분가능하지 않으므로 그 (3)의 가정을 만족하지 않고, 실제로 그 결론처럼 "그런 수는 적분 하나뿐"이 되지 않는다.

   $f : [a, b] \to \mathbb{R}$가 적분가능하면, 리만 적분의 (1)에 의해 $\int_a^b f$가 그런 수이고, 그 (3)에 의해 그런 수 $I$는 모두 $\int_a^b f$와 같다. 따라서 그런 수는 정확히 하나이다.
:::
