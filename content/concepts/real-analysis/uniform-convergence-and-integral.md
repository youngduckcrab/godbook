---
title: 고른 수렴과 적분
title_en: Uniform Convergence and the Integral
aliases: [고른 극한의 적분, 적분과 극한의 교환, integral of the uniform limit, interchange of limit and integral]
kind: theorem
field: real-analysis
msc: ["26A42", "40A30"]
level: undergrad
summary: 닫힌구간 위의 리만 적분가능한 함수들이 f 로 고르게 수렴하면 f 는 유계이고 리만 적분가능하며, 적분의 수열은 f 의 적분으로 수렴한다. 적분의 차를 고른 오차로 누르는 어림과 방향 있는 적분의 꼴을 함께 다룬다. 점별 수렴만으로는 적분의 극한이 극한의 적분과 다를 수 있고, 극한이 적분가능하지 않을 수도 있다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, archimedean-property, interval, tail-of-a-sequence, sequence, limit-of-sequence, basic-limits, limit-of-sum-and-product, real-valued-function, bounded-function, continuous-function, continuity-of-sum-and-product, lower-and-upper-integrals, riemann-integral, linearity-of-the-integral, oriented-integral, additivity-of-the-integral, changing-finitely-many-values, finitely-many-discontinuities, power-of-a-real-number, antiderivative-and-integral-of-power, pointwise-convergence, uniform-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.2절 Integral of the limit: Example 6.2.3 (p.236), Theorem 6.2.4 와 증명 (p.237), Example 6.2.6, 6.2.7 (p.238); 6.2.5절 연습문제 6.2.3 (p.243), 6.2.12 (p.244)"
    checked: original
    note: "(1)과 (2)는 출처 Theorem 6.2.4(p.237: 리만 적분가능한 f_n : [a, b] → ℝ 가 f 로 고르게 수렴하면 f 는 리만 적분가능하고 ∫f = lim ∫f_n)와 같은 진술이다(그림 p.237 로 대조). 출처의 증명은 역삼각부등식으로 f 가 유계임을 보인 뒤, 상적분과 하적분의 차를 f − f_n + f_n 으로 쪼개 Proposition 5.2.5 와 5.1.8 로 ε 이하로 누르고, 끝으로 Proposition 5.1.10 으로 |∫f − ∫f_n| ≤ ε/2 를 얻는다. 이 항목의 (2)의 증명은 f 를 f_N − η 와 f_N + η 사이에 끼워 하적분과 상적분의 비교(lower-and-upper-integrals 의 (7))만 쓴다. (3)의 어림은 출처 증명의 마지막 계산과 같은 부등식을 진술로 올린 것이다. (4)의 방향 있는 꼴은 출처 Theorem 6.2.10 의 증명(p.240)이 '[c, x] 에서도 고르게 수렴한다'며 쓰는 것을 진술로 둔 것이다. 반례 '적분의 극한이 다른 경우: 높이 n, 폭 1/n 의 계단'는 출처 Example 6.2.3(p.236: 0 < x < 1/n 에서 n − n²x 인 꺾인 함수, 적분 1/2, 점별 극한 0)과 같은 발상이고, 이 항목은 높이 n, 폭 1/n 인 계단 모양으로 바꾸어 적분 1 을 미적분의 기본정리 없이 계산한다. 출처 연습문제 6.2.12 a)(p.244: 0 으로 점별 수렴하지만 적분이 한없이 커지는 열)는 같은 주제의 물음이다. 반례 '극한이 적분가능하지 않은 경우'의 함수는 출처 Example 6.2.7(p.238: x < 1/n 에서 0, 그 밖에서 1/x)과 같은 함수이다. 출처 Example 6.2.6(p.238, 디리클레 함수)은 유리수를 기약분수로 늘어놓아야 하므로 싣지 않았다. 확인 'f : [0, 1] → ℝ 가 리만 적분가능하면, n 번째 항이 ∫_0^1 f(x)/n dx 인 수열은 어디로 수렴하는가?'은 출처 연습문제 6.2.3(p.243)과 같은 물음이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
리만 적분가능, 적분 $\int_a^b f$, "$[a, b]$에서 적분가능"은 [[riemann-integral]]의 것이고, 하적분과 상적분은 [[lower-and-upper-integrals]]의 것이며, 방향 있는 적분 $\int_\alpha^\beta f$, "$\alpha$와 $\beta$ 사이에 있다", "$\alpha$와 $\beta$ 사이에서 적분가능"은 [[oriented-integral]]의 것이다. 함수의 유계는 [[bounded-function]]의 것이고, 실함수의 차 $f - g$와 상수함수는 [[real-valued-function]]의 것이다. 사상의 열과 점별 수렴은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이다($\mathbb{R}$에는 보통 거리를 준다). (1)–(3)에서 $a$, $b$는 $a < b$인 실수이고, $(f_n)$은 $[a, b]$에서 $\mathbb{R}$로의 사상의 열로서 모든 $f_n$이 리만 적분가능하며, $f : [a, b] \to \mathbb{R}$이고 $(f_n)$이 $f$로 고르게 수렴한다.

1. (극한은 유계이다) $f$는 유계이다.
2. (적분과 극한의 교환) $f$는 리만 적분가능하고, $n$번째 항이 $\int_a^b f_n$인 실수열은 $\int_a^b f$로 수렴한다. 곧
   $$
   \int_a^b f = \lim_{n \to \infty} \int_a^b f_n
   $$
   이다.
3. (적분의 어림) $0 \le \eta$인 실수 $\eta$와 자연수 $n$이 $[a, b]$의 모든 $x$에서 $|f_n(x) - f(x)| \le \eta$를 만족하면 $\left|\int_a^b f_n - \int_a^b f\right| \le \eta\,(b - a)$이다.
4. (방향 있는 꼴) $I$가 구간이고 $(g_n)$이 $I$에서 $\mathbb{R}$로의 사상의 열이며 $g : I \to \mathbb{R}$이고 $(g_n)$이 $g$로 고르게 수렴한다고 하자. $\alpha$, $\beta$가 $I$의 원소이고 모든 $g_n$이 $\alpha$와 $\beta$ 사이에서 적분가능하면, $g$도 $\alpha$와 $\beta$ 사이에서 적분가능하고 $n$번째 항이 $\int_\alpha^\beta g_n$인 실수열은 $\int_\alpha^\beta g$로 수렴한다. 또 $0 \le \eta$인 실수 $\eta$와 자연수 $n$이 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $|g_n(t) - g(t)| \le \eta$를 만족하면 $\left|\int_\alpha^\beta g_n - \int_\alpha^\beta g\right| \le \eta\,|\beta - \alpha|$이다.
:::

:::english
Riemann integrability, the integral $\int_a^b f$ and "integrable on $[a, b]$" are those of the Riemann integral, lower and upper integrals are as defined earlier, and the oriented integral $\int_\alpha^\beta f$, "lies between $\alpha$ and $\beta$" and "integrable between $\alpha$ and $\beta$" are those of the oriented integral. Boundedness of functions, the difference $f - g$ of real functions and constant functions are as defined earlier. Sequences of maps and pointwise convergence are those of sequences of maps and pointwise convergence, and uniform convergence is that of uniform convergence ($\mathbb{R}$ carries the standard metric). In (1)–(3), $a$, $b$ are real numbers with $a < b$, $(f_n)$ is a sequence of maps from $[a, b]$ to $\mathbb{R}$ all of which are Riemann integrable, $f : [a, b] \to \mathbb{R}$, and $(f_n)$ converges uniformly to $f$.

1. (The limit is bounded) $f$ is bounded.
2. (Interchanging integral and limit) $f$ is Riemann integrable, and the real sequence whose $n$th term is $\int_a^b f_n$ converges to $\int_a^b f$. That is,
   $$
   \int_a^b f = \lim_{n \to \infty} \int_a^b f_n .
   $$
3. (Estimate of the integral) If a real number $\eta$ with $0 \le \eta$ and a natural number $n$ satisfy $|f_n(x) - f(x)| \le \eta$ for all $x$ in $[a, b]$, then $\left|\int_a^b f_n - \int_a^b f\right| \le \eta\,(b - a)$.
4. (Oriented form) Let $I$ be an interval, $(g_n)$ a sequence of maps from $I$ to $\mathbb{R}$, and $g : I \to \mathbb{R}$, and suppose $(g_n)$ converges uniformly to $g$. If $\alpha$, $\beta$ are elements of $I$ and every $g_n$ is integrable between $\alpha$ and $\beta$, then $g$ is integrable between $\alpha$ and $\beta$ and the real sequence whose $n$th term is $\int_\alpha^\beta g_n$ converges to $\int_\alpha^\beta g$. Moreover, if a real number $\eta$ with $0 \le \eta$ and a natural number $n$ satisfy $|g_n(t) - g(t)| \le \eta$ for all $t$ between $\alpha$ and $\beta$, then $\left|\int_\alpha^\beta g_n - \int_\alpha^\beta g\right| \le \eta\,|\beta - \alpha|$.
:::

## 직관

적분은 함숫값을 구간의 길이로 "평균 내어 더한" 수입니다. 모든 점에서 $f_n$이 $f$와 $\eta$ 이내로 가까우면, 넓이도 기껏해야 높이 $\eta$, 폭 $b - a$인 띠만큼만 다를 수 있습니다. (3)이 이 말이고, 고른 수렴이면 이 $\eta$를 얼마든지 작게 할 수 있으므로 적분이 따라 수렴합니다.

비유하자면 같은 모래밭에 쌓은 모래 둔덕들입니다. 어느 둔덕부터 모든 곳에서 높이가 목표 모양과 $\eta$ 이내로 같다면, 쌓인 모래의 양도 기껏해야 "높이 $\eta$인 얇은 판" 하나만큼 다릅니다. "모든 곳에서"가 고른 수렴의 "모든 $x$에서"에 맞습니다. 점별로만 가까워지면, 둔덕의 대부분은 평평해져도 아주 좁은 곳에 높이 솟은 기둥이 남아 모래의 양이 줄지 않을 수 있습니다. 반례 "적분의 극한이 다른 경우"가 그 모습입니다.

극한 $f$가 적분가능하다는 것도 같은 띠로 봅니다. $f$는 적분가능한 두 함수 $f_N - \eta$와 $f_N + \eta$ 사이에 끼어 있으므로, 하적분과 상적분이 둘 다 폭 $2\eta(b - a)$인 범위 안에 있습니다.

## 증명

:::idea
고른 수렴으로 $f_N - \eta \le f \le f_N + \eta$가 되는 $N$을 잡는다. 양 끝의 함수는 적분가능하고 적분이 $\int f_N \mp \eta(b - a)$이므로, $f$의 하적분과 상적분은 길이 $2\eta(b - a)$인 범위에 갇힌다.
:::

:::hint
유계는 $\varepsilon = 1$에서 $f_N$과 $f$를 비교하면 나옵니다. $f_N$은 적분가능하므로 유계입니다.
:::

:::hint
하적분과 상적분의 차가 모든 양수 이하이면 $0$입니다. 적분의 수렴은 $f_n - f$에 함숫값의 범위로 누르는 부등식을 쓰세요.
:::

:::proof
아래에서 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). 실수의 부등식은 [[order-properties-of-reals]]의 번호로, 절댓값은 [[absolute-value|절댓값]]과 [[triangle-inequality]]의 번호로 인용한다. [[uniform-convergence|고른 수렴]]을 줄여 "고른 수렴의 항목"이라 쓰고, 그 (8)에 의해 $(f_n)$이 $f$로 고르게 수렴한다는 것은 모든 양의 실수 $\varepsilon$마다 자연수 $N$이 있어 $n \ge N$과 모든 $x$에서 $|f_n(x) - f(x)| < \varepsilon$이라는 뜻이다.

**(1).** $\varepsilon = 1$에 대한 번호 $N$을 잡는다. $f_N$은 리만 적분가능하므로 [[riemann-integral]]의 (6)에 의해 유계이고, [[bounded-function]]의 정의에 의해 실수 $B$가 있어 모든 $x \in [a, b]$에서 $|f_N(x)| \le B$이다. 그러면 [[triangle-inequality]]의 (1)에 의해
$$
\begin{aligned}
|f(x)| &\le |f(x) - f_N(x)| + |f_N(x)| \\
&\le 1 + B
\end{aligned}
$$
이다(첫 항은 [[absolute-value]]의 (3)에 의해 $|f_N(x) - f(x)| < 1$이다). 따라서 $f$는 유계이다.

**(3).** $f$가 적분가능하다는 것은 (2)의 앞부분에서 따로 보이므로, 여기서는 $f$가 적분가능하다고 놓고 어림을 보인다. [[linearity-of-the-integral]]의 (4)에 의해 $f_n - f$는 적분가능하고 $\int_a^b (f_n - f) = \int_a^b f_n - \int_a^b f$이다. 가정에 의해 모든 $x$에서 $|(f_n - f)(x)| \le \eta$이므로 [[riemann-integral]]의 (2)의 (iii)에 의해 $\left|\int_a^b (f_n - f)\right| \le \eta\,(b - a)$이다.

**(2).** 먼저 $f$가 적분가능함을 보인다. (1)에 의해 $f$는 유계이므로 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$가 있다. 양의 실수 $\eta$를 잡고, 고른 수렴으로 번호 $N$을 얻어 모든 $x$에서 $|f_N(x) - f(x)| < \eta$, 곧 [[absolute-value]]의 (8)에 의해 $f_N(x) - \eta < f(x) < f_N(x) + \eta$이게 한다. [[riemann-integral]]의 (5)에 의해 값이 $\eta$, $-\eta$인 상수함수는 적분가능하고 적분이 $\eta(b - a)$, $-\eta(b - a)$이므로, [[linearity-of-the-integral]]의 (4)에 의해 $u = f_N + (-\eta)$와 $v = f_N + \eta$는 적분가능하고
$$
\begin{gathered}
\int_a^b u = \int_a^b f_N - \eta(b - a), \\
\int_a^b v = \int_a^b f_N + \eta(b - a)
\end{gathered}
$$
이다. 적분가능한 함수는 유계이고 하적분과 상적분이 모두 적분과 같다([[riemann-integral]]의 정의와 (6)). 모든 $x$에서 $u(x) \le f(x) \le v(x)$이므로 [[lower-and-upper-integrals]]의 (7)과 (2)에 의해
$$
\begin{aligned}
\int_a^b u &\le \underline{\int_a^b} f \\
&\le \overline{\int_a^b} f \le \int_a^b v
\end{aligned}
$$
이다(가운데 부등식은 분할 $\{a, b\}$에 (2)를 쓴 것이다). 따라서 $t = \overline{\int_a^b} f - \underline{\int_a^b} f$에 대하여 $0 \le t \le \int_a^b v - \int_a^b u = 2\eta(b - a)$이다.

양의 실수 $\varepsilon$을 잡고 $\eta = \varepsilon\,(2(b - a))^{-1}$로 두면 $0 < b - a$이므로 [[order-properties-of-reals]]의 (6)의 (i)과 (4)의 (iv)에 의해 $\eta$는 양수이고 $2\eta(b - a) = \varepsilon$이다. 그래서 모든 양수 $\varepsilon$에서 $t \le \varepsilon$이고, 같은 항목의 (9)에 의해 $t = 0$이다. 곧 하적분과 상적분이 같으므로 $f$는 리만 적분가능하다.

다음으로 적분의 수렴을 보인다. 각 $n$에서 $\int_a^b f_n$은 실수 하나로 정해지므로 [[sequence]]의 (1)에 의해 $n$번째 항이 $\int_a^b f_n$인 실수열이 있다. 양의 실수 $\varepsilon$을 잡고 $\eta = \varepsilon\,(2(b - a))^{-1}$로 두면 위에서처럼 $\eta > 0$이고 $\eta(b - a) = \varepsilon \cdot 2^{-1}$이다. 고른 수렴으로 번호 $N$을 얻으면 $n \ge N$과 모든 $x$에서 $|f_n(x) - f(x)| < \eta$이므로, (3)에 의해 $\left|\int_a^b f_n - \int_a^b f\right| \le \varepsilon \cdot 2^{-1} < \varepsilon$이다([[order-properties-of-reals]]의 (8)). [[limit-of-sequence]]의 정의에 의해 이 실수열은 $\int_a^b f$로 수렴한다.

**(4).** 세 경우로 나눈다.

- $\alpha < \beta$이면 [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이다. [[oriented-integral]]의 정의에 의해 각 $g_n$은 $[\alpha, \beta]$에서 적분가능하고, [[riemann-integral]]의 (4)에 의해 제한 $g_n|_{[\alpha, \beta]}$가 리만 적분가능하며 $\int_\alpha^\beta g_n = \int_\alpha^\beta g_n|_{[\alpha, \beta]}$이다. 고른 수렴의 항목의 (6)에 의해 $(g_n|_{[\alpha, \beta]})$는 $g|_{[\alpha, \beta]}$로 고르게 수렴하므로, (2)를 $[\alpha, \beta]$에 쓰면 $g|_{[\alpha, \beta]}$는 리만 적분가능하고(곧 $g$는 $\alpha$와 $\beta$ 사이에서 적분가능하고) $\int_\alpha^\beta g_n$은 $\int_\alpha^\beta g$로 수렴한다.
- $\beta < \alpha$이면 앞 경우를 $[\beta, \alpha]$에 써서 $g$는 $[\beta, \alpha]$에서 적분가능하고 $\int_\beta^\alpha g_n$은 $\int_\beta^\alpha g$로 수렴한다. 방향 있는 적분의 정의에 의해 $\int_\alpha^\beta g_n = -\int_\beta^\alpha g_n$이므로, [[limit-of-sum-and-product]]의 (5)를 $c = -1$에 써서 $\int_\alpha^\beta g_n$은 $-\int_\beta^\alpha g = \int_\alpha^\beta g$로 수렴한다.
- $\alpha = \beta$이면 정의에 의해 $g$는 $\alpha$와 $\beta$ 사이에서 적분가능하고, 모든 $n$에서 $\int_\alpha^\beta g_n = 0 = \int_\alpha^\beta g$이므로 [[basic-limits]]의 (1)에 의해 수렴한다.

어림: [[linearity-of-the-integral]]의 (6)에 의해 $g_n - g$는 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta (g_n - g) = \int_\alpha^\beta g_n - \int_\alpha^\beta g$이다. [[oriented-integral]]의 (3)을 $k = 0$으로 쓰면 $\left|\int_\alpha^\beta (g_n - g)\right| \le \eta\,|\beta - \alpha|$이다.
:::

## 예시와 반례

:::counterexample[적분의 극한이 다른 경우: 높이 n, 폭 1/n 의 계단]
$[0, 1]$ 위에서 $0 < x < n^{-1}$이면 $g_n(x) = n$, 그 밖의 $x$에서 $g_n(x) = 0$으로 정한 열을 생각합시다([[order-properties-of-reals]]의 (1)의 (iii)에 의해 각 $x$는 두 경우 가운데 정확히 하나에 듭니다). 이 열은 값이 $0$인 상수함수로 점별 수렴하지만, 모든 $n$에서 $\int_0^1 g_n = 1$입니다.

적분부터 봅니다. $n = 1$이면 $g_1$은 $0 < x < 1$에서 $1$이고 $x = 0$, $x = 1$에서 $0$이므로, 값이 $1$인 상수함수와 유한집합 $\{0, 1\}$ 밖에서 같습니다. [[riemann-integral]]의 (5)와 [[changing-finitely-many-values]]의 (1)에 의해 $\int_0^1 g_1 = 1$입니다. $n \ge 2$이면 $0 < n^{-1} < 1$입니다([[order-properties-of-reals]]의 (10)과 (6)의 (ii)). $[0, n^{-1}]$에서 $g_n$은 값이 $n$인 상수함수와 $\{0, n^{-1}\}$ 밖에서 같으므로 [[changing-finitely-many-values]]의 (4)에 의해 $[0, n^{-1}]$에서 적분가능하고 적분이 $n \cdot n^{-1} = 1$이며, $[n^{-1}, 1]$에서는 모든 점에서 $g_n = 0$이므로 [[riemann-integral]]의 (4), (5)에 의해 적분이 $0$입니다. [[additivity-of-the-integral]]의 (1)과 (5)에 의해 $\int_0^1 g_n = 1 + 0 = 1$입니다.

점별 극한을 봅니다. $g_n(0) = 0$입니다. $0 < x \le 1$이면 [[archimedean-property]]의 (3)에 의해 자연수 $N$이 있어 $m \ge N$이면 $m^{-1} < x$이므로 $g_m(x) = 0$이고, [[limit-of-sequence]]의 정의에 의해 $(g_n(x))$는 $0$으로 수렴합니다. [[pointwise-convergence|사상의 열과 점별 수렴]]의 (8)에 의해 $(g_n)$은 상수함수 $0$으로 점별 수렴하고, 그 적분은 $0$이어서 $\lim \int_0^1 g_n = 1$과 다릅니다. (2)에 의해 이 열은 고르게 수렴하지 않습니다.
:::

:::counterexample[극한이 적분가능하지 않은 경우]
$[0, 1]$ 위에서 $x < n^{-1}$이면 $k_n(x) = 0$, $n^{-1} \le x$이면 $k_n(x) = x^{-1}$로 정한 열을 생각합시다. 각 $k_n$은 적분가능하지만, 점별 극한은 유계가 아니어서 적분가능하지 않습니다.

$k_n$은 유계입니다. $n^{-1} \le x$이면 $0 < x$이고 [[order-properties-of-reals]]의 (6)의 (i), (ii)에 의해 $0 < x^{-1} \le n$이므로 모든 $x$에서 $0 \le k_n(x) \le n$입니다(등호인 경우는 $x = n^{-1}$에서 $x^{-1} = n$입니다). $k_n$은 $n^{-1}$이 아닌 모든 점에서 연속입니다. $x < n^{-1}$이면 $\delta_0 = n^{-1} - x$로 두었을 때 $|y - x| < \delta_0$인 $[0, 1]$의 점 $y$는 $y < n^{-1}$이어서 $k_n(y) = 0$이므로, 그 집합 위에서 $k_n$은 상수함수이고 [[continuous-function]]의 (4)와 (6)에 의해 $k_n$은 $x$에서 연속입니다. $n^{-1} < x$이면 $\delta_0 = x - n^{-1}$로 두었을 때 그 집합 위에서 $k_n(y) = y^{-1}$이고, [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (2)에 의해 $y$를 $y^{-1}$로 보내는 함수는 $x$에서 연속이므로 [[continuous-function]]의 (6)에 의해 $k_n$은 $x$에서 연속입니다. [[finitely-many-discontinuities]]의 (3)에 의해 $k_n$은 적분가능합니다.

점별 극한은 $k(0) = 0$, $0 < x$이면 $k(x) = x^{-1}$인 함수 $k$입니다. $x > 0$이면 [[archimedean-property]]의 (3)에 의해 어떤 번호부터 $m^{-1} < x$이므로 $k_m(x) = x^{-1}$이고, $x = 0$이면 모든 $k_m(0) = 0$입니다. 그런데 $k$는 유계가 아닙니다. 실수 $B$가 $B \le 0$이면 $k(1) = 1 > B$이고, $0 < B$이면 $x = (B + 1)^{-1}$은 $0 < x < 1$이고 $k(x) = B + 1 > B$입니다. 곧 모든 $x$에서 $|k(x)| \le B$인 $B$는 없습니다. [[riemann-integral]]의 (6)에 의해 $k$는 적분가능하지 않습니다. (1)과 (2)에 의해 이 열도 고르게 수렴하지 않습니다.
:::

## 확인 질문

:::check[f : [0, 1] → ℝ 가 리만 적분가능하면, n 번째 항이 ∫_0^1 f(x)/n dx 인 수열은 어디로 수렴하는가?]
$0$으로 수렴합니다. $f$는 유계이므로([[riemann-integral]]의 (6)) 모든 $x$에서 $|f(x)| \le B$인 실수 $B$가 있고, $|f(x) n^{-1} - 0| \le B n^{-1}$입니다. [[basic-limits]]의 (2)와 [[limit-of-sum-and-product]]의 (5)에 의해 $B n^{-1}$은 $0$으로 수렴하므로, [[uniform-convergence|고른 수렴]]의 (4)에 의해 $n$번째 사상이 $x$를 $f(x) n^{-1}$로 보내는 열은 상수함수 $0$으로 고르게 수렴합니다. 각 사상은 [[linearity-of-the-integral]]의 (4)에 의해 적분가능하므로 (2)에 의해 적분은 $\int_0^1 0\,dx = 0$으로 수렴합니다.
:::

:::check[닫힌구간 [0, 1] 위의 xⁿ 은 고르게 수렴하지 않는다. 그래도 적분의 수열은 극한의 적분으로 수렴하는가?]
이 경우에는 수렴합니다. [[antiderivative-and-integral-of-power]]의 (3)에 의해 $\int_0^1 x^n\,dx = (1^{n+1} - 0^{n+1})(n + 1)^{-1} = (n + 1)^{-1}$이고, 이것은 $n$번째 항이 $n^{-1}$인 수열의 $1$-꼬리이므로 [[basic-limits]]의 (2)와 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴합니다. 점별 극한 $h$([[uniform-convergence|고른 수렴]]의 (9)의 (i))는 $1$에서만 $0$이 아닌 함수이므로 [[changing-finitely-many-values]]의 (2)에 의해 $\int_0^1 h = 0$입니다. 고른 수렴은 적분과 극한을 바꾸기에 충분한 조건이고, 필요한 조건은 아닙니다.
:::
