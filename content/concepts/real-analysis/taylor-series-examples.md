---
title: 테일러 급수의 예
title_en: Examples of Taylor Series
aliases: [테일러 전개의 예, 매클로린 급수의 예, 지수함수의 테일러 다항식, e 의 어림, Taylor series examples, Taylor expansion examples]
kind: proposition
field: real-analysis
msc: ["41A58", "40A30"]
level: undergrad
summary: "멱급수가 나타내는 함수의 테일러 다항식은 그 멱급수의 부분합이고 그 점에서의 함숫값으로 수렴한다. 지수함수의 테일러 다항식과 라그랑주 꼴의 나머지항으로 0 < e − (1 + 1 + 1/2! + ⋯ + 1/n!) < 3/(n + 1)! 을 얻고, ln(1 + x) 의 0 에서의 테일러 다항식은 로그의 급수의 부분합이며, 1/(1 − x) 의 테일러 다항식은 x ≤ −1 에서 수렴하지 않는다는 것을 진술한다."
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, mathematical-induction, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, squeeze-lemma, ratio-test-for-sequences, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, real-valued-function, derivative, derivative-rules, exponential-function, natural-logarithm, real-power, finite-sum-of-reals, finite-sums-of-functions, sum-of-a-series, series-indexed-from-zero, factorial-from-zero, power-series, radius-of-convergence, termwise-differentiation-of-power-series, logarithm-power-series, higher-derivative, derivatives-of-power-series, taylor-polynomial, taylor-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "4.3절 Taylor's theorem 의 4.3.2절 Taylor's theorem: Theorem 4.3.2 뒤 문단과 Figure 4.9, 테일러 급수의 정의와 그 뒤 문단 (p.173); 4.3.3절 Exercises 의 Exercise 4.3.1, Exercise 4.3.2 (p.174); 5.4절 The logarithm and the exponential 의 5.4.3절 Exercises 의 Exercise 5.4.3, Exercise 5.4.4 (p.212); 2.6절 More on series 의 2.6.5절 Power series: Example 2.6.7 (p.106), 기하급수 문단 (p.109)"
    checked: original
    note: "출처 p.173 은 테일러 다항식이 모든 곳에서 좋은 어림을 주지는 않는다며 x < 1 에서 x/(1 − x) 를 0 둘레로 전개한 그림 4.9 를 보이고, 다항식이 기하급수 Σ_{n=1}^∞ xⁿ 의 부분합이며 급수는 (−1, 1) 에서만 수렴한다고 적는다. 이 항목의 (4)는 같은 발상을 1/(1 − x) 로 적고, x ≤ −1 에서 테일러 다항식의 값의 수열이 수렴하지 않는다는 것을 증명한다. 2.6.5절(p.109)은 기하급수가 |x| > 1 에서 발산하지만 1/(1 − x) 는 x ≠ 1 에서 모두 정의된다고 적는다. 같은 쪽의 무한 번 미분가능한 f 의 테일러 급수의 정의와 'There is no guarantee that this series converges for any x ≠ x₀. Even where it does converge, there is no guarantee that it converges to the function f' 는 이 항목이 이름(테일러 급수)을 두지 않고 테일러 다항식의 값의 수열로 말한다. 수렴하지만 함수로 가지 않는 예(Exercise 5.4.11 의 e^{−1/x})는 이 강의가 싣지 않는다. (1)은 Basic Analysis II p.156 의 식 (11.1)(f^(ℓ)(a) = ℓ! c_ℓ, 멱급수의 고계 도함수 항목에 실었다)에서 바로 나오는 사실을 테일러 다항식의 말로 적은 것이다. (2)의 (i)은 Exercise 4.3.1(p.174, 지수함수의 0 에서의 n 차 테일러 다항식을 구하라)이고, (2)의 (v)는 Exercise 5.4.3(p.212, 테일러 정리로 나머지항을 살펴 e^x = Σ xⁿ/n! 을 보여라)과 같은 물음이다. (2)의 (v)에서 |x|ⁿ/n! 이 0 으로 가는 데 쓴 비 |x|/(n + 1) 은 Example 2.6.7(p.106)이 같은 급수에 비 판정법을 쓸 때의 비와 같다. (2)의 (iv)는 출처에 명제로 없다(검색어 'e < 3', '2.718', '(n+1)!' 로 책 전체를 찾았다). 이 항목이 (2)의 (iii)과 real-power 의 (8)의 e < 3 으로 계산한 것이다. (3)의 급수 자체는 Exercise 5.4.4(p.212)이고 이 사이트의 로그의 멱급수 항목에 있다. 이 항목은 그 계수가 ln(1 + x) 의 0 에서의 도함수로 정해지는 테일러 계수와 같다는 것을 멱급수의 고계 도함수로 보인다. 확인 질문 '(x − 1)⁴ 의 1 에서의 3차 테일러 다항식과 나머지항은 무엇인가?'는 Exercise 4.3.2(p.174)와 같은 발상(다항식의 테일러 다항식)이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(e 의 어림·로그 다항식·부분합의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, 집합 $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[power-series]]와 [[radius-of-convergence]]의 것이고, 무한 번 미분가능과 $k$계 도함수는 [[higher-derivative]], 테일러 다항식 $T_n^{x_0} f$는 [[taylor-polynomial]]의 것이다. 지수함수 $\exp$와 $e = \exp(1)$은 [[exponential-function|지수함수]]와 [[real-power|양수의 실수 거듭제곱]]의 것이고, 자연로그는 [[natural-logarithm]]의 것이다. 계승, $0$부터의 유한 합은 [[factorial-from-zero|0부터의 계승]]과 [[series-indexed-from-zero]]의 것이고, $1$부터의 유한 합 $\sum_{k=1}^{n}$은 [[finite-sum-of-reals]]의 것이다. 아래에서 $n$, $m$은 $0$ 이상인 정수이다.

1. (멱급수의 테일러 다항식) $a$를 실수, $(c_k)_{k \ge 0}$을 0부터 번호가 붙은 수열이라 하고, 중심이 $a$이고 계수가 $(c_k)_{k \ge 0}$인 멱급수가 [[radius-of-convergence]]의 (7)의 (i)의 두 경우 가운데 하나라 하자. 그 멱급수가 $I$ 위에 나타내는 함수를 $f$라 하면, 모든 실수 $x$에서
   $$
   T_m^{a} f(x) = \sum_{k=0}^{m} c_k (x - a)^k
   $$
   이다. 곧 $f$의 $a$에서의 테일러 다항식은 멱급수의 부분합이다. 또 $x \in I$이면 $m$번째 항이 $T_m^{a} f(x)$인 수열은 $f(x)$로 수렴한다.
2. (지수함수)
   - (i) 모든 실수 $x$에서 $T_n^{0} \exp(x) = \sum_{k=0}^{n} \dfrac{x^k}{k!}$이다.
   - (ii) $x \ne 0$이면 $\min\{0, x\} < c < \max\{0, x\}$이고
     $$
     \begin{aligned}
     &\exp(x) - T_n^{0} \exp(x) \\
     &= \frac{\exp(c)}{(n + 1)!}\, x^{n+1}
     \end{aligned}
     $$
     인 실수 $c$가 있다. $x = 0$이면 왼쪽은 $0$이다.
   - (iii) $0 < x$이면
     $$
     \begin{aligned}
     0 &< \exp(x) - T_n^{0} \exp(x) \\
     &< \frac{\exp(x)\, x^{n+1}}{(n + 1)!}
     \end{aligned}
     $$
     이다.
   - (iv) ($e$의 어림)
     $$
     0 < e - \sum_{k=0}^{n} \frac{1}{k!} < \frac{3}{(n + 1)!}
     $$
     이다.
   - (v) 모든 실수 $x$에서
     $$
     \begin{aligned}
     &\bigl| \exp(x) - T_n^{0} \exp(x) \bigr| \\
     &\le \frac{\exp(|x|)\, |x|^{n+1}}{(n + 1)!}
     \end{aligned}
     $$
     이고, $n$번째 항이 $T_n^{0} \exp(x)$인 수열은 $\exp(x)$로 수렴한다.
3. (로그) $I_0 = \{x \in \mathbb{R} : |x| < 1\}$로 두고 $h(x) = \ln(1 + x)$로 정한 함수 $h : I_0 \to \mathbb{R}$를 생각한다. $h$는 무한 번 미분가능하고, $h(0) = 0$이며 자연수 $k$에서 $h^{(k)}(0) = (-1)^{k+1} (k - 1)!$이다. 모든 실수 $x$에서
   $$
   T_n^{0} h(x) = \sum_{k=1}^{n} \frac{(-1)^{k+1} x^k}{k}
   $$
   이고($n = 0$이면 빈 합 $0$), $x \in I_0$이면 $n$번째 항이 $T_n^{0} h(x)$인 수열은 $\ln(1 + x)$로 수렴한다. 곧 $h$의 $0$에서의 테일러 다항식의 계수는 [[logarithm-power-series|로그의 멱급수]]의 (3)의 계수와 같다.
4. (정의역의 일부에서만 수렴하는 예) $J = \{x \in \mathbb{R} : x < 1\}$로 두고 $g(x) = (1 - x)^{-1}$로 정한 함수 $g : J \to \mathbb{R}$를 생각한다. $g$는 무한 번 미분가능하고, $0$ 이상인 정수 $k$와 $x \in J$에서 $g^{(k)}(x) = k!\,\bigl((1 - x)^{k+1}\bigr)^{-1}$이다. 모든 실수 $x$에서 $T_n^{0} g(x) = \sum_{k=0}^{n} x^k$이다. $|x| < 1$이면 $n$번째 항이 $T_n^{0} g(x)$인 수열은 $g(x)$로 수렴하고, $x \le -1$이면 $x \in J$인데도 이 수열은 수렴하지 않는다.
:::

:::english
Power series, the set $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ and the function represented on $I$ are those of the entries on power series and the radius of convergence; being infinitely differentiable and the $k$th derivative are those of the entry on higher-order derivatives; the Taylor polynomial $T_n^{x_0} f$ is that of the entry on Taylor polynomials. The exponential function $\exp$ and $e = \exp(1)$ are those of the entries on the exponential function and real powers; the natural logarithm is that of its entry. Factorials and finite sums from zero are those of the entries on factorials from zero and sums indexed from zero; finite sums $\sum_{k=1}^{n}$ from one are those of the entry on finite sums of reals. Below, $n$ and $m$ are integers $\ge 0$.

1. (Taylor polynomials of power series) Let $a$ be a real number, $(c_k)_{k \ge 0}$ a sequence indexed from zero, and suppose the power series with center $a$ and coefficients $(c_k)_{k \ge 0}$ is in one of the two cases of item (7)(i) of the entry on the radius of convergence. If $f$ is the function it represents on $I$, then for every real $x$
   $$
   T_m^{a} f(x) = \sum_{k=0}^{m} c_k (x - a)^k .
   $$
   That is, the Taylor polynomials of $f$ at $a$ are the partial sums of the power series. Moreover, if $x \in I$, the sequence whose $m$th term is $T_m^{a} f(x)$ converges to $f(x)$.
2. (The exponential function)
   - (i) For every real $x$, $T_n^{0} \exp(x) = \sum_{k=0}^{n} \dfrac{x^k}{k!}$.
   - (ii) If $x \ne 0$, there is a real $c$ with $\min\{0, x\} < c < \max\{0, x\}$ and
     $$
     \begin{aligned}
     &\exp(x) - T_n^{0} \exp(x) \\
     &= \frac{\exp(c)}{(n + 1)!}\, x^{n+1} .
     \end{aligned}
     $$
     If $x = 0$, the left side is $0$.
   - (iii) If $0 < x$, then
     $$
     \begin{aligned}
     0 &< \exp(x) - T_n^{0} \exp(x) \\
     &< \frac{\exp(x)\, x^{n+1}}{(n + 1)!} .
     \end{aligned}
     $$
   - (iv) (Bounds for $e$)
     $$
     0 < e - \sum_{k=0}^{n} \frac{1}{k!} < \frac{3}{(n + 1)!} .
     $$
   - (v) For every real $x$,
     $$
     \begin{aligned}
     &\bigl| \exp(x) - T_n^{0} \exp(x) \bigr| \\
     &\le \frac{\exp(|x|)\, |x|^{n+1}}{(n + 1)!} ,
     \end{aligned}
     $$
     and the sequence whose $n$th term is $T_n^{0} \exp(x)$ converges to $\exp(x)$.
3. (The logarithm) Let $I_0 = \{x \in \mathbb{R} : |x| < 1\}$ and consider $h : I_0 \to \mathbb{R}$ defined by $h(x) = \ln(1 + x)$. $h$ is infinitely differentiable, $h(0) = 0$, and $h^{(k)}(0) = (-1)^{k+1} (k - 1)!$ for every natural number $k$. For every real $x$
   $$
   T_n^{0} h(x) = \sum_{k=1}^{n} \frac{(-1)^{k+1} x^k}{k}
   $$
   (the empty sum $0$ if $n = 0$), and if $x \in I_0$ the sequence whose $n$th term is $T_n^{0} h(x)$ converges to $\ln(1 + x)$. That is, the coefficients of the Taylor polynomials of $h$ at $0$ are those of item (3) of the entry on the power series of the logarithm.
4. (An example converging on only part of the domain) Let $J = \{x \in \mathbb{R} : x < 1\}$ and consider $g : J \to \mathbb{R}$ defined by $g(x) = (1 - x)^{-1}$. $g$ is infinitely differentiable, and $g^{(k)}(x) = k!\,\bigl((1 - x)^{k+1}\bigr)^{-1}$ for every integer $k \ge 0$ and $x \in J$. For every real $x$, $T_n^{0} g(x) = \sum_{k=0}^{n} x^k$. If $|x| < 1$, the sequence whose $n$th term is $T_n^{0} g(x)$ converges to $g(x)$; if $x \le -1$, this sequence does not converge even though $x \in J$.
:::

## 직관

함수가 무한 번 미분가능하면 차수를 한없이 올린 테일러 다항식들을 만들 수 있고, 이것을 급수로 보면 흔히 테일러 급수라고 부르는 것이 됩니다. 이 항목은 그런 급수에 따로 이름을 두지 않고, "$n$번째 항이 $T_n^{x_0} f(x)$인 수열이 $f(x)$로 가는가"를 예마다 봅니다.

멱급수로 주어진 함수는 그 답이 늘 "수렴 구간 안에서는 그렇다"입니다((1)). 테일러 다항식이 바로 멱급수의 부분합이기 때문입니다. 지수함수는 [[taylor-theorem|테일러 정리]]의 나머지항을 직접 어림해서도 같은 결론을 얻고((2)의 (v)), 그 어림이 $e$의 값을 위아래로 누릅니다((2)의 (iv)). 반대로 (4)의 $g$는 $x \le -1$에서 값이 있는데도 테일러 다항식의 값이 수렴하지 않습니다. $x = -1$에서는 $1$과 $0$을 오가고, $x < -1$에서는 부호를 바꾸며 절댓값이 커집니다. 이 예에서 테일러 다항식은 $0$에서 정의되지 않는 점 $1$까지의 거리 $1$보다 먼 왼쪽의 점을 붙잡지 못합니다.

비유하자면 테일러 다항식은 출발점에서 본 망원경의 시야입니다. 시야가 넓어지는 만큼(차수가 오르는 만큼) 먼 곳도 보이지만, 시야가 닿는 반지름에는 한계가 있을 수 있습니다. 비유가 맞지 않는 곳은, 망원경의 한계는 눈앞의 장애물이 정하지만 (4)의 한계는 함수가 정의된 범위로 정해지지 않는다는 것입니다. $g$는 $x \le -1$에서도 정의되어 있습니다. 한계가 일반적으로 무엇으로 정해지는지는 이 항목이 말하지 않습니다.

## 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 함수의 같음은 [[real-valued-function]]의 (2)로 값마다 보인다. 두 유한 합의 항이 범위 안에서 모두 같으면 두 합이 같다는 것은 [[finite-sum-of-reals]]의 (4)이고 $0$부터의 합에는 정의로 옮겨 쓴다.

**1의 증명.** [[derivatives-of-power-series|멱급수의 고계 도함수]]의 (3)에 의해 $f$는 무한 번 미분가능하고, [[radius-of-convergence]]의 (7)의 (ii)에 의해 $a \in I$이므로 $T_m^{a} f$가 정해진다. 같은 항목의 (5)에 의해 모든 실수 $x$에서 $\sum_{k=0}^{m} c_k (x - a)^k = \sum_{k=0}^{m} f^{(k)}(a)(k!)^{-1}(x - a)^k$이고, 오른쪽은 [[taylor-polynomial]]의 정의에 의해 $T_m^{a} f(x)$이다. 수렴은 같은 (5)의 둘째 문장이다.

**2의 증명.** [[higher-derivative]]의 (9)와 [[exponential-function|지수함수]]의 (3)에 의해 $\exp$는 무한 번 미분가능하고 모든 $k$에서 $\exp^{(k)} = \exp$이며, 같은 항목의 (1)에 의해 $\exp^{(k)}(0) = 1$이다.

(i): [[taylor-polynomial]]의 정의에서 계수가 $1 \cdot (k!)^{-1}$이고 $x - 0 = x$이다.

(ii): $\exp$는 구간 $\mathbb{R}$ 위에서 $n + 1$번 미분가능하므로 [[taylor-theorem|테일러 정리]]의 (3)을 $x_0 = 0$에 쓰면 진술의 $c$가 있고 $\exp^{(n+1)}(c) = \exp(c)$이다. $x = 0$이면 [[taylor-polynomial]]의 (1)에 의해 $T_n^{0}\exp(0) = \exp(0)$이다.

(iii): $0 < x$이면 (ii)의 $c$는 $0 < c < x$이다. [[exponential-function|지수함수]]의 (1), (2)에 의해 $0 < \exp(c) < \exp(x)$이다. [[power-of-a-real-number]]의 (6)의 (i)에 의해 $0 < x^{n+1}$이고, [[factorial-from-zero]]의 (3)과 순서 성질 (6)의 (i)에 의해 $0 < \bigl((n + 1)!\bigr)^{-1}$이다. 순서 성질 (4)의 (i)을 두 번 쓰면 $0 < \exp(c)\, x^{n+1}\bigl((n + 1)!\bigr)^{-1} < \exp(x)\, x^{n+1}\bigl((n + 1)!\bigr)^{-1}$이다.

(iv): (iii)을 $x = 1$에 쓴다. (i)에 의해 $T_n^{0}\exp(1) = \sum_{k=0}^{n} (k!)^{-1}$이고($1^k = 1$, [[power-of-a-real-number]]의 (2)의 (iv)), [[real-power]]의 정의에 의해 $\exp(1) = e$이며 같은 항목의 (8)에 의해 $e < 3$이다. 따라서 $0 < e - \sum_{k=0}^{n} (k!)^{-1} < e\bigl((n + 1)!\bigr)^{-1} < 3\bigl((n + 1)!\bigr)^{-1}$이다.

(v): $x = 0$이면 양쪽이 $0$이다. $x \ne 0$이면 (ii)의 $c$는 $0 < x$이면 $0 < c < x$, $x < 0$이면 $x < c < 0$이므로 [[absolute-value]]의 (1), (6)에 의해 $c \le |c| < |x|$이고, 지수함수의 (2)에 의해 $\exp(c) < \exp(|x|)$이다. [[absolute-value]]의 (1), (4)와 [[power-of-a-real-number]]의 (4)에 의해 $|\exp(x) - T_n^{0}\exp(x)| = \exp(c)\,|x|^{n+1}\bigl((n + 1)!\bigr)^{-1} \le \exp(|x|)\,|x|^{n+1}\bigl((n + 1)!\bigr)^{-1}$이다.

수렴: $x = 0$이면 모든 항이 $\exp(0)$이다([[basic-limits]]의 (1)). $x \ne 0$이면 $u_n = |x|^n (n!)^{-1}$로 둔 수열은 모든 항이 $0$이 아니고, [[factorial-from-zero]]의 (4)의 둘째 식, [[power-of-a-real-number]]의 정의와 (3), (K…)에 의해 $u_{n+1} u_n^{-1} = |x|\,(n + 1)^{-1}$이다. $n$번째 항이 $(n + 1)^{-1}$인 수열은 [[basic-limits]]의 (2)의 수열의 $1$-꼬리이므로 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (5)에 의해 $|x|(n + 1)^{-1}$도 $0$으로 수렴한다. $0 < 1$이므로 [[ratio-test-for-sequences|수열의 비 판정법]]의 (1)에 의해 $(u_n)$은 $0$으로 수렴하고, 그 $1$-꼬리 $(u_{n+1})$도 $0$으로 수렴하며(꼬리의 (1)), $b_n = \exp(|x|)\,u_{n+1}$도 $0$으로 수렴한다(곱의 극한의 (5)). 위의 부등식과 [[absolute-value]]의 (8)에 의해 $\exp(x) - b_n \le T_n^{0}\exp(x) \le \exp(x) + b_n$이고, 양 끝의 수열은 곱의 극한의 (5)에 의해 $\exp(x)$로 수렴하므로 [[squeeze-lemma|조임 정리]]의 (1)에 의해 $n$번째 항이 $T_n^{0}\exp(x)$인 수열은 $\exp(x)$로 수렴한다.

**3의 증명.** [[logarithm-power-series|로그의 멱급수]]의 (3)에 의해 중심이 $0$이고 $c_0 = 0$, 자연수 $k$에서 $c_k = (-1)^{k+1} k^{-1}$인 멱급수는 수렴 반지름이 $1$이고, 그것이 $I = I_0$ 위에 나타내는 함수가 $h$이다([[radius-of-convergence]]의 (7)의 (i)). [[derivatives-of-power-series|멱급수의 고계 도함수]]의 (3), (4)에 의해 $h$는 무한 번 미분가능하고 $h^{(k)}(0) = k!\, c_k$이다. $k = 0$이면 $h(0) = c_0 = 0$이고, 자연수 $k$에서는 [[factorial-from-zero]]의 (1)에 의해 $k! = (k - 1)!\, k$이므로 $h^{(k)}(0) = (k - 1)!\, k \cdot (-1)^{k+1} k^{-1} = (-1)^{k+1}(k - 1)!$이다. (1)에 의해 $T_n^{0} h(x) = \sum_{k=0}^{n} c_k x^k$이고, [[series-indexed-from-zero]]의 (3)에 의해 이것은 $c_0 + \sum_{k=1}^{n} c_k x^k = \sum_{k=1}^{n} (-1)^{k+1} x^k k^{-1}$이다($n = 0$이면 같은 항목의 (1)에 의해 $c_0 = 0$). 수렴은 (1)의 둘째 문장이다.

**4의 증명.** [[interval]]의 (2)에 의해 $J$는 구간이고, $x \in J$이면 순서 성질 (3)의 (i)에 의해 $0 < 1 - x$이다. $0$ 이상인 정수 $k$마다 $v_k(x) = (1 - x)^{k+1}$, $w_k = 1/v_k$로 정한 $J$ 위의 함수를 생각한다. [[power-of-a-real-number]]의 (6)의 (i)에 의해 $v_k$는 $J$ 위에서 양수이므로 $w_k$의 정의역은 $J$이다([[real-valued-function]]의 (5)). [[power-of-a-real-number]]의 (2)의 (iii), (5)와 (K…)에 의해 $(1 - x)^{k+1} = (-1)^{k+1}(x - 1)^{k+1}$이므로, [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (iv), (iii)($a = 1$, 계수 $(-1)^{k+1}$)에 의해 $v_k$는 미분가능한 함수이고 $v_k'(x) = (k + 1)(-1)^{k+1}(x - 1)^k = -(k + 1)(1 - x)^k$이다. [[derivative-rules|미분법]]의 (6)에 의해 $w_k$는 미분가능한 함수이고, 거듭제곱의 (2)의 (i), (ii), (3)에 의해
$$
\begin{aligned}
&w_k'(x) \\
&= (k + 1)(1 - x)^k \bigl((1 - x)^{2k+2}\bigr)^{-1} \\
&= (k + 1)\, w_{k+1}(x)
\end{aligned}
$$
이다. 이제 $k$에 대한 명제 "$g$는 $k$번 미분가능하고 $g^{(k)} = k!\, w_k$"를 귀납으로 보인다. $k = 0$이면 $g = w_0 = 0!\, w_0$이다([[higher-derivative]]의 (1)). $k$에서 참이면 미분법의 (6)에 의해 $k!\, w_k$는 미분가능한 함수이고 도함수는 $k!\,(k + 1)\, w_{k+1} = (k + 1)!\, w_{k+1}$이므로([[factorial-from-zero]]의 (1)), [[higher-derivative]]의 (2), (1)에 의해 $k + 1$에서도 참이다. 따라서 $g$는 무한 번 미분가능하고, $g^{(k)}(0) = k! \cdot (1^{k+1})^{-1} = k!$이므로 [[taylor-polynomial]]의 정의에 의해 $T_n^{0} g(x) = \sum_{k=0}^{n} k!\,(k!)^{-1} x^k = \sum_{k=0}^{n} x^k$이다.

$x$를 실수로 고정하고 $(y_j)$를 $j$번째 항이 $x^{j-1}$인 수열이라 하면, [[series-indexed-from-zero]]의 정의에 의해 $(y_j)$의 $j$번째 부분합은 $\sum_{k=0}^{j-1} x^k$이고, $n$번째 항이 $T_n^{0} g(x)$인 수열은 부분합 수열의 $1$-꼬리이다. $|x| < 1$이면 같은 항목의 (13)의 (ii)에 의해 $(y_j)$의 급수는 수렴하고 합은 $(1 - x)^{-1} = g(x)$이므로, [[series-and-partial-sums]]의 정의와 [[tail-of-a-sequence]]의 (1)에 의해 진술의 수열은 $g(x)$로 수렴한다. $x \le -1$이면 $1 \le |x|$이므로 [[power-of-a-real-number]]의 (4), (6)의 (ii)에 의해 모든 $j$에서 $|y_j| = |x|^{j-1} \ge 1$이고, $(y_j)$는 $0$으로 수렴하지 않는다. [[terms-of-convergent-series-tend-to-zero|급수의 항의 극한]]의 (2)에 의해 $(y_j)$의 급수는 발산하고, 곧 부분합 수열이 수렴하지 않으므로 그 $1$-꼬리인 진술의 수열도 수렴하지 않는다(꼬리의 (2)). $\blacksquare$
:::

## 예시와 반례

:::example[n = 5 에서의 e 의 어림]
(2)의 (iv)를 $n = 5$에 씁니다. $\sum_{k=0}^{5} (k!)^{-1} = 1 + 1 + 2^{-1} + 6^{-1} + 24^{-1} + 120^{-1} = 326 \cdot 120^{-1} = 163 \cdot 60^{-1}$이고 $3 \cdot (6!)^{-1} = 3 \cdot 720^{-1} = 240^{-1}$이므로
$$
\frac{163}{60} < e < \frac{163}{60} + \frac{1}{240} = \frac{653}{240}
$$
입니다. $163/60 = 2.7166\cdots$이고 $653/240 = 2.7208\cdots$이므로 $e$의 소수 둘째 자리까지는 $2.71$ 또는 $2.72$입니다. 한 자리를 더 정하려면 $n$을 올립니다. $n = 0$이면 (iv)는 $0 < e - 1 < 3$으로, [[real-power]]의 (8)보다 약한 어림입니다.
:::

:::example[ln(1 + x) 의 3차 테일러 다항식]
(3)에 의해 $T_3^{0} h(x) = x - 2^{-1}x^2 + 3^{-1}x^3$입니다. $x = 2^{-1}$이면 $2^{-1} - 8^{-1} + 24^{-1} = 24^{-1}(12 - 3 + 1) = 5 \cdot 12^{-1}$입니다. [[logarithm-power-series|로그의 멱급수]]의 (1)의 (i)을 $N = 3$에 쓰면 $\ln(3 \cdot 2^{-1})$과 이 값의 차는 $(2^{-1})^4 \cdot 4^{-1} = 64^{-1}$ 이하입니다. 그 항목의 $R_3$은 (3)에 의해 $h(x) - T_3^{0} h(x)$와 같습니다.
:::

:::counterexample[1/(1 − x) 의 x = −2]
(4)의 $g$에서 $g(-2) = 3^{-1}$입니다. 그러나 $T_n^{0} g(-2) = \sum_{k=0}^{n} (-2)^k$는 $n = 0, 1, 2, 3, 4$에서 $1, -1, 3, -5, 11$로 부호를 바꾸며 절댓값이 커지고, (4)에 의해 이 수열은 수렴하지 않습니다. 함수가 $-2$에서 정의되고 무한 번 미분가능해도, $0$에서의 테일러 다항식은 $-2$에서의 값을 주지 않습니다. $g$는 $1$에서 정의되지 않고, $|x| < 1$인 곳에서만 수렴합니다.
:::

## 확인 질문

:::check[$h(x) = (x - 1)^4$으로 정한 $h : \mathbb{R} \to \mathbb{R}$의 $1$에서의 $3$차 테일러 다항식과 나머지항은 무엇인가?]
$T_3^{1} h$는 값이 $0$인 상수함수이고 나머지항은 $h(x)$ 자신입니다. [[higher-derivative]]의 (8)의 (iii)($a = 1$, $m = 4$, $c_4 = 1$, 나머지 계수 $0$)에 의해 $k = 0, 1, 2, 3$에서 $h^{(k)}(1) = k!\, c_k = 0$이므로 [[taylor-polynomial]]의 정의에 의해 $T_3^{1} h(x) = 0$입니다. $h^{(4)}$는 값이 $4! = 24$인 상수함수이므로 [[taylor-theorem|테일러 정리]]의 (3)의 나머지항은 어느 $c$에서든 $24 \cdot (4!)^{-1}(x - 1)^4 = (x - 1)^4$으로 맞습니다. $x = 1$이면 둘 다 $0$입니다.
:::

:::check[$x < 0$일 때 $\exp(x) - T_n^{0}\exp(x)$의 부호는 $n$에 따라 어떻게 되는가?]
$n$이 짝수이면 음수, 홀수이면 양수입니다. (2)의 (ii)에 의해 이 차는 $\exp(c)\, x^{n+1}\bigl((n + 1)!\bigr)^{-1}$이고 $\exp(c) > 0$, $(n + 1)! > 0$입니다. $x^{n+1} = (-1)^{n+1}|x|^{n+1}$이므로([[power-of-a-real-number]]의 (2)의 (iii)) $n + 1$이 홀수, 곧 $n$이 짝수이면 음수이고 $n$이 홀수이면 양수입니다(같은 항목의 (5)). 그래서 (2)의 (iii)은 $0 < x$로 한정되어 있습니다. 예컨대 $n = 0$, $x = -1$이면 $\exp(-1) - 1 < 0$입니다.
:::
