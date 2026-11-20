---
title: 로그와 지수로 구하는 적분
title_en: Integrals Computed with the Logarithm and the Exponential
aliases: [1/x 의 적분, 조화 합과 로그, 오일러–마스케로니 상수, integral of 1/x, harmonic sums and the logarithm, Euler–Mascheroni constant]
kind: proposition
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "끝점이 같은 부호인 x⁻¹ 의 적분은 로그의 차이고, exp 의 적분은 exp 의 끝점 값의 차이며, r ≠ −1 이고 끝점이 양수이면 x 의 r 제곱의 적분은 (β^(r+1) − α^(r+1))/(r + 1) 이다. 또 양수인 연속미분가능한 g 에 대하여 g′/g 의 적분은 ln g 의 끝점 값의 차이다. 자연수 n 에 대하여 ln n 은 k = 2 부터 n 까지의 k⁻¹ 의 합 이상이고 k = 1 부터 n − 1 까지의 합 이하이며, k = 1 부터 n 까지의 k⁻¹ 의 합에서 ln n 을 뺀 수열은 단조감소하고 0 과 1 사이의 수(오일러–마스케로니 상수)로 수렴한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, series-and-partial-sums, archimedean-property, monotone-convergence-theorem, upper-bound-and-supremum, harmonic-series-diverges, power-of-a-real-number, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, telescoping-sum, interval, real-valued-function, bounded-function, continuous-function, continuity-of-sum-and-product, derivative, derivative-rules, chain-rule, riemann-integral, oriented-integral, continuously-differentiable, antiderivative-and-integral-of-power, change-of-variables, natural-logarithm, laws-of-logarithm, exponential-function, real-power, square-root-exists]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.1 소절 The logarithm) Figure 5.6 (p.209); 5.4절(5.4.2 소절 The exponential) Proposition 5.4.2 (ii) (p.209); 5.3절(5.3.2 소절 Second form of the theorem) 자연로그 문단 (p.203); 5.4절(5.4.3 소절 Exercises) 연습문제 5.4.6 (p.212)
    checked: original
    note: "출처 5.4.1 소절의 Figure 5.6(p.209)은 1/x 아래 1 부터 4 까지의 넓이가 ln(4) 임을 그림으로 보이고, 5.3.2 소절의 문단(p.203)은 자연로그를 ln 1 = 0 인 1/x 의 원시함수로 정한다. (1)의 양수 쪽은 이것을 끝점이 아무 양수인 꼴로 적은 것이다. 출처 Example 5.3.7(5.3.3 소절, p.204)은 g(x) = ln|x| 에 대해 g′(x) = 1/x 라고 계산한 뒤, ln|x|/x 가 0 에서 정의되지 않고 유계가 아니어서 [−1, 1] 에서 리만 적분가능하지 않으며 g 가 [−1, 1] 에서 연속도 아니라고 적는다. (1)의 음수 쪽은 ln|x| 를 쓰지 않고 구간 {x : x < 0} 위의 ln(−x) 로 적는다. 반례 '끝점이 0 의 양쪽에 있는 예'는 이 Example 5.3.7 과 같은 발상이다. (2)와 (3)은 출처 Proposition 5.4.2 (ii)(5.4.2 소절, p.209; E′ = E)와 연습문제 5.4.1(5.4.3 소절, p.211; x^y 와 bˣ 의 도함수를 구하라)의 도함수를 원시함수로 읽은 것이다. 출처 5.5절 Proposition 5.5.2 의 증명(소절 앞, p.215)은 p > 1 에서 ∫_1^b x^{−p} dx = (b^{−p+1} − 1)/(−p + 1) 을 기본정리로 계산하는데, 이것은 (3)에서 r = −p, α = 1 인 경우와 같은 식이다. 예시의 r = −2 인 적분 ∫_1^2 x⁻² dx 의 함수 x⁻² 는 출처 Example 5.5.14(5.5.1 소절, p.223; ∫_k^∞ x⁻² dx = 1/k)의 함수와 같다. (4)는 출처의 치환 정리 Theorem 5.3.5(5.3.3 소절, p.204)를 바깥 함수 1/t 에 쓴 것이다. (5)는 출처 연습문제 5.4.6 a)(5.4.3 소절, p.212, PDF 그림으로 대조; n ≥ 2 에서 Σ_{k=2}^{n} 1/k ≤ ln(n) ≤ Σ_{k=1}^{n−1} 1/k 를 보이라)와 같은 진술에 n = 1 과 진짜 부등식을 더한 것이다. 출처는 증명을 연습문제로 둔다. 이 항목은 적분 대신 자연로그의 어림을 x = (k + 1)/k 에 쓰고 망원 합으로 더한다. 출처 5.5.1 소절 Proposition 5.5.13(적분 판정법)의 증명의 식 (5.3)(p.222)은 단조감소인 f 에 대해 ∫_ℓ^m f ≤ Σ_{n=ℓ}^{m−1} f(n) ≤ f(ℓ) + ∫_ℓ^{m−1} f 를 적고, 이것을 f(x) = 1/x 에 쓰면 (5)와 같은 꼴의 부등식이 된다(같은 발상: 합과 적분을 작은 구간마다 견주기). (6)은 출처 연습문제 5.4.6 b)(p.212; 극한 γ := lim (Σ_{k=1}^{n} 1/k − ln n) 이 있음을 보이라)와 같은 진술이다. 출처는 이 극한을 γ 라 쓰고 오일러–마스케로니 상수라 부르며, 유리수인지 알려져 있지 않다고, 근삿값은 0.5772 라고 적는다. 이 항목은 이 강의에서 γ 가 세 점의 이름이므로 극한에 글자를 붙이지 않고, 극한이 1 − ln 2 이상 3/2 − ln 2 이하라는 것까지만 증명한다. 예시 '로그로 다시 보는 조화급수의 발산'의 결론은 출처 Example 2.5.11(2.5.3 소절, p.90; 조화급수는 발산한다)과 같고, 로그(적분)와 견주어 보이는 것은 위의 적분 판정법을 1/x 에 쓰는 것과 같은 발상이다. 확인 질문 1 의 ∫_1^4 x⁻¹ dx = ln 4 는 Figure 5.6 의 넓이와 같다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 조화급수 예시의 틀린 근거 1건, 겹치는 글자 1건, 메모의 소절 번호 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
$\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이고, 지수함수 $\exp$는 [[exponential-function]]의 것이며, 양수의 실수 거듭제곱 $x^r$은 [[real-power]]의 것이다. 방향 있는 적분과 적분 변수를 쓴 $\int_\alpha^\beta (x\text{에 대한 식})\,dx$는 [[oriented-integral]]과 [[riemann-integral]]의 것이고, 원시함수는 [[antiderivative-and-integral-of-power]]의 것이며, 연속미분가능은 [[continuously-differentiable]]의 것이다. 유한 합 $\sum_{k=m}^{n}$과 빈 합은 [[finite-sum-of-reals]]의 것이고, 수열과 단조감소는 [[sequence]]의 것이고 기호 $\lim_{n \to \infty}$는 [[monotone-convergence-theorem]]의 것이다. $\{x \in \mathbb{R} : x < 0\}$은 [[interval]]의 (2)에 의해 구간이다.

1. ($x^{-1}$의 적분) $\alpha$, $\beta$가 $\mathbb{R}_{>0}$의 원소이면
   $$
   \begin{aligned}
   \int_\alpha^\beta x^{-1}\,dx &= \ln \beta - \ln \alpha \\
   &= \ln(\beta\alpha^{-1})
   \end{aligned}
   $$
   이다. $\alpha$, $\beta$가 $\{x \in \mathbb{R} : x < 0\}$의 원소이면, $G(x) = \ln(-x)$로 정한 함수 $G : \{x \in \mathbb{R} : x < 0\} \to \mathbb{R}$는 그 구간 위의 $x^{-1}$의 원시함수이고
   $$
   \begin{aligned}
   \int_\alpha^\beta x^{-1}\,dx &= \ln(-\beta) - \ln(-\alpha) \\
   &= \ln(\beta\alpha^{-1})
   \end{aligned}
   $$
   이다. 두 꼴 모두 $\alpha$와 $\beta$의 순서와 같음은 아무래도 좋다.
2. ($\exp$의 적분) $\exp$는 $\mathbb{R}$ 위의 $\exp$ 자신의 원시함수이고, 모든 실수 $\alpha$, $\beta$에서
   $$
   \begin{aligned}
   \int_\alpha^\beta \exp(x)\,dx &= \exp(\beta) \\
   &\quad - \exp(\alpha)
   \end{aligned}
   $$
   이다.
3. (실수 거듭제곱의 적분) $r$가 $r \ne -1$인 실수이면, $x$에서의 값이 $x^{r+1}(r + 1)^{-1}$인 함수 $\mathbb{R}_{>0} \to \mathbb{R}$는 $x$에서의 값이 $x^r$인 함수 $\mathbb{R}_{>0} \to \mathbb{R}$의 원시함수이고, $\mathbb{R}_{>0}$의 모든 원소 $\alpha$, $\beta$에서
   $$
   \begin{aligned}
   \int_\alpha^\beta x^r\,dx &= \bigl(\beta^{r+1} - \alpha^{r+1}\bigr) \\
   &\quad \cdot (r + 1)^{-1}
   \end{aligned}
   $$
   이다. $r$가 $0$ 이상인 정수이면 이 값은 [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)의 값과 같다. $r = -1$인 경우는 (1)이 맡는다.
4. ($g'/g$의 적분) $a < b$이고 $g : [a, b] \to \mathbb{R}$가 연속미분가능하며 $[a, b]$의 모든 $x$에서 $0 < g(x)$이면
   $$
   \begin{aligned}
   &\int_a^b g'(x)\,g(x)^{-1}\,dx \\
   &\quad = \ln g(b) - \ln g(a)
   \end{aligned}
   $$
   이다.
5. (조화 합과 로그) 모든 자연수 $n$에서
   $$
   \sum_{k=2}^{n} k^{-1} \le \ln n \le \sum_{k=1}^{n-1} k^{-1}
   $$
   이다. $n = 1$이면 세 수가 모두 $0$이고(왼쪽과 오른쪽은 빈 합), $n \ge 2$이면 두 부등호가 모두 $<$로 성립한다. 또 모든 자연수 $k$에서 $(k + 1)^{-1} < \ln(k + 1) - \ln k < k^{-1}$이다.
6. (오일러–마스케로니 상수) 자연수 $n$마다
   $$
   d_n = \sum_{k=1}^{n} k^{-1} - \ln n
   $$
   로 정한 수열 $(d_n)$은 단조감소이고(모든 $n$에서 $d_{n+1} < d_n$), 모든 자연수 $n$에서 $1 - \ln 2 < d_n \le 1$이다. 따라서 $(d_n)$은 수렴하고, 그 극한은
   $$
   \begin{aligned}
   1 - \ln 2 &\le \lim_{n \to \infty} d_n \\
   &\le \tfrac{3}{2} - \ln 2
   \end{aligned}
   $$
   를 만족한다. 특히 $0 < \lim_{n \to \infty} d_n < 1$이다. 이 극한을 **오일러–마스케로니 상수**(Euler–Mascheroni constant)라 한다.
:::

:::english
The set $\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm, the exponential function $\exp$ is that of the entry on the exponential function, and real powers $x^r$ of positive numbers are those of the entry on real powers. Oriented integrals and the notation $\int_\alpha^\beta (\text{expression in } x)\,dx$ with a variable of integration are those of the entries on the oriented integral and the Riemann integral; antiderivatives are those of the entry on antiderivatives; continuous differentiability is that of the entry on continuously differentiable functions. Finite sums $\sum_{k=m}^{n}$ and empty sums are those of the entry on finite sums of reals; sequences and monotone decreasing are those of the entry on sequences, and the symbol $\lim_{n \to \infty}$ is that of the entry on the monotone convergence theorem. The set $\{x \in \mathbb{R} : x < 0\}$ is an interval by (2) of the entry on intervals.

1. (Integral of $x^{-1}$) If $\alpha$ and $\beta$ are elements of $\mathbb{R}_{>0}$, then
   $$
   \begin{aligned}
   \int_\alpha^\beta x^{-1}\,dx &= \ln \beta - \ln \alpha \\
   &= \ln(\beta\alpha^{-1}).
   \end{aligned}
   $$
   If $\alpha$ and $\beta$ are elements of $\{x \in \mathbb{R} : x < 0\}$, then the function $G : \{x \in \mathbb{R} : x < 0\} \to \mathbb{R}$ defined by $G(x) = \ln(-x)$ is an antiderivative of $x^{-1}$ on that interval, and
   $$
   \begin{aligned}
   \int_\alpha^\beta x^{-1}\,dx &= \ln(-\beta) - \ln(-\alpha) \\
   &= \ln(\beta\alpha^{-1}).
   \end{aligned}
   $$
   In both forms, the order of $\alpha$ and $\beta$, and whether they are equal, does not matter.
2. (Integral of $\exp$) $\exp$ is an antiderivative of itself on $\mathbb{R}$, and for all real numbers $\alpha$, $\beta$
   $$
   \begin{aligned}
   \int_\alpha^\beta \exp(x)\,dx &= \exp(\beta) \\
   &\quad - \exp(\alpha).
   \end{aligned}
   $$
3. (Integral of real powers) If $r$ is a real number with $r \ne -1$, then the function $\mathbb{R}_{>0} \to \mathbb{R}$ with value $x^{r+1}(r + 1)^{-1}$ at $x$ is an antiderivative of the function $\mathbb{R}_{>0} \to \mathbb{R}$ with value $x^r$ at $x$, and for all elements $\alpha$, $\beta$ of $\mathbb{R}_{>0}$
   $$
   \begin{aligned}
   \int_\alpha^\beta x^r\,dx &= \bigl(\beta^{r+1} - \alpha^{r+1}\bigr) \\
   &\quad \cdot (r + 1)^{-1}.
   \end{aligned}
   $$
   If $r$ is a nonnegative integer, this value equals the value in (3) of the entry on antiderivatives and integrals of powers. The case $r = -1$ is covered by (1).
4. (Integral of $g'/g$) If $a < b$ and $g : [a, b] \to \mathbb{R}$ is continuously differentiable with $0 < g(x)$ for all $x \in [a, b]$, then
   $$
   \begin{aligned}
   &\int_a^b g'(x)\,g(x)^{-1}\,dx \\
   &\quad = \ln g(b) - \ln g(a).
   \end{aligned}
   $$
5. (Harmonic sums and the logarithm) For every natural number $n$,
   $$
   \sum_{k=2}^{n} k^{-1} \le \ln n \le \sum_{k=1}^{n-1} k^{-1}.
   $$
   If $n = 1$, all three numbers are $0$ (the left and right sides are empty sums), and if $n \ge 2$, both inequalities hold with $<$. Moreover, $(k + 1)^{-1} < \ln(k + 1) - \ln k < k^{-1}$ for every natural number $k$.
6. (Euler–Mascheroni constant) The sequence $(d_n)$ defined for natural numbers $n$ by
   $$
   d_n = \sum_{k=1}^{n} k^{-1} - \ln n
   $$
   is monotone decreasing ($d_{n+1} < d_n$ for all $n$), and $1 - \ln 2 < d_n \le 1$ for every natural number $n$. Hence $(d_n)$ converges, and its limit satisfies
   $$
   \begin{aligned}
   1 - \ln 2 &\le \lim_{n \to \infty} d_n \\
   &\le \tfrac{3}{2} - \ln 2.
   \end{aligned}
   $$
   In particular, $0 < \lim_{n \to \infty} d_n < 1$. This limit is called the **Euler–Mascheroni constant**.
:::

## 직관

[[natural-logarithm|자연로그]]는 $t^{-1}$을 $1$부터 적분한 것이므로, 양수 끝점 사이의 $x^{-1}$의 적분은 로그의 차입니다. (1)의 $\ln(\beta\alpha^{-1})$은 이 적분이 두 끝점의 비만으로 정해진다는 것을 보여 줍니다. $\int_1^2$와 $\int_3^6$은 같은 값 $\ln 2$입니다. 음수 쪽에서는 $x^{-1}$이 음수이므로 $\alpha < \beta$일 때 적분이 음수가 되는데, $\ln(-x)$의 도함수가 $x^{-1}$이라는 것이 이것을 맞춰 줍니다. 두 끝점이 $0$의 양쪽에 있으면 $x^{-1}$이 $0$에서 정해지지 않고 $0$ 근처에서 유계도 아니어서 적분이 정해지지 않습니다(아래 반례).

(2)와 (3)은 [[exponential-function|지수함수]]와 [[real-power|양수의 실수 거듭제곱]]의 도함수를 거꾸로 읽은 것입니다. $\exp$는 미분해도 자기 자신이므로 자기 자신의 원시함수이고, $x^{r+1}$을 미분하면 $(r + 1)x^r$이므로 $r + 1$로 나누면 $x^r$의 원시함수가 됩니다. $r = -1$이면 $r + 1 = 0$이어서 이렇게 나눌 수 없고, 그 자리를 (1)의 로그가 채웁니다. (3)의 끝점을 양수로 두는 것은 $x^r$이 양수 $x$에서만 정의되어 있기 때문입니다($r$가 $0$ 이상인 정수일 때는 [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)이 모든 실수 끝점에서 같은 식을 줍니다).

(4)는 치환적분에서 바깥 함수가 $t^{-1}$인 경우입니다. $g$가 늘 양수이면 $\ln g$의 도함수가 연쇄 법칙에 의해 $g'/g$이므로, 그 적분은 $\ln g$의 끝점 값의 차입니다. $g$가 상수이면 $g' = 0$이고 양쪽이 모두 $0$입니다.

(5)는 넓이로 읽으면 계단 두 개 사이에 곡선 $t^{-1}$ 아래의 넓이를 끼운 것입니다. $[k, k + 1]$ 위에서 $t^{-1}$은 $(k + 1)^{-1}$과 $k^{-1}$ 사이에 있으므로, 그 위의 넓이 $\ln(k + 1) - \ln k$도 그 사이에 있습니다. 이것을 $k = 1$부터 $n - 1$까지 더하면 가운데가 망원 합으로 $\ln n$이 됩니다. 이 항목의 증명은 넓이 대신 자연로그의 어림 $1 - x^{-1} < \ln x < x - 1$을 $x = (k + 1)k^{-1}$에 써서 같은 부등식을 얻습니다.

(6)의 $d_n$은 계단의 넓이 $\sum_{k=1}^{n} k^{-1}$과 곡선 아래의 넓이 $\ln n$의 차입니다. $n$이 $1$ 늘 때마다 계단 하나가 더해지고 곡선 아래의 넓이도 늘지만, 더해지는 계단 $(n + 1)^{-1}$이 늘어나는 넓이 $\ln(n + 1) - \ln n$보다 작아서 $d_n$은 줄어듭니다. 줄어들되 $1 - \ln 2$ 아래로는 내려가지 않으므로 수렴합니다. 이 항목은 극한이 $0$과 $1$ 사이에 있다는 것까지만 증명합니다. 출처는 그 근삿값을 $0.5772$로 적습니다.

## 증명

:::idea
(1)–(3)은 원시함수를 찾아 원시함수의 적분 공식을 쓰고, (4)는 치환적분을 쓴다. (5)는 자연로그의 어림을 $x = (k + 1)k^{-1}$에 써서 $(k + 1)^{-1} < \ln(k + 1) - \ln k < k^{-1}$을 얻고 망원 합으로 더한다. (6)은 이 부등식으로 $(d_n)$이 줄어들고 아래로 유계임을 보인다.
:::

:::hint
$1 - \bigl((k + 1)k^{-1}\bigr)^{-1}$과 $(k + 1)k^{-1} - 1$을 정리해 보세요. 그리고 $\ln n = \sum_{k=1}^{n-1} \bigl(\ln(k + 1) - \ln k\bigr)$입니다.
:::

:::hint
(6)의 아래쪽 어림에는 $c_n = \sum_{k=1}^{n} k^{-1} - \ln(n + 1)$로 둔 수열을 쓰세요. 이 수열은 단조증가이고 $c_n < d_n$입니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고 (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "자연로그 (6)"은 [[natural-logarithm]]의 번호, "로그 성질 (2)"는 [[laws-of-logarithm]]의 번호, "합 (3)"은 [[finite-sum-of-reals]]의 번호, "부등식 (7)"은 [[linearity-and-order-of-finite-sums]]의 번호이다. 자연수는 양의 실수이다(순서 성질 (10)).

**1의 증명.** $\alpha$, $\beta \in \mathbb{R}_{>0}$이면 적분 변수의 약속에 의해 $\int_\alpha^\beta x^{-1}\,dx = \int_\alpha^\beta t^{-1}\,dt$이고, 자연로그 (5)에 의해 이것은 $\ln \beta - \ln \alpha$이며, 로그 성질 (2)에 의해 $\ln(\beta\alpha^{-1})$이다.

$N = \{x \in \mathbb{R} : x < 0\}$이라 하자. $x \in N$이면 순서 성질 (1)의 (i)에 의해 $x \ne 0$이고, 순서 성질 (3)의 (ii)에 의해 $0 < -x$이다. $s(x) = x^{-1}$로 정한 $s : N \to \mathbb{R}$는 $N$ 위의 항등함수 $i_N$에 대한 $1/i_N$과 같으므로([[real-valued-function]]의 (5), (3), (2)), [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이다. $v(x) = -x$로 정한 $v : N \to \mathbb{R}$는 [[derivative]]의 (1)에 의해(그 항목의 $m$ 자리에 $-1$, $k$ 자리에 $0$; (K9)의 $(-1)x = -x$) 미분가능한 함수이고 모든 점에서 미분계수가 $-1$이며, 값은 모두 $\mathbb{R}_{>0}$에 속한다. 자연로그 (2)에 의해 $\ln$은 미분가능한 함수이므로, [[chain-rule|연쇄 법칙]]의 (3), (2)를 $I_1 = N$, $I_2 = \mathbb{R}_{>0}$에 쓰면 $G = \ln \circ v$는 미분가능한 함수이고, 모든 $x \in N$에서
$$
G'(x) = \ln'(-x)\,(-1) = (-x)^{-1}(-1)
$$
이다. (K9)와 (K12)의 (iii), (vi)에 의해 $(-1)(-1) = 1$이므로 $(-1)^{-1} = -1$이고 $(-x)^{-1} = \bigl((-1)x\bigr)^{-1} = (-1)x^{-1}$이며, 따라서 $(-x)^{-1}(-1) = x^{-1}$이다. 곧 $G' = s$이고 $G$는 $s$의 원시함수이다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (2)를 구간 $N$과 연속함수 $s$에 쓰면 $\int_\alpha^\beta x^{-1}\,dx = G(\beta) - G(\alpha) = \ln(-\beta) - \ln(-\alpha)$이다. $-\alpha$, $-\beta \in \mathbb{R}_{>0}$이므로 로그 성질 (2)에 의해 이것은 $\ln\bigl((-\beta)(-\alpha)^{-1}\bigr)$이고, 앞의 계산과 같은 방법으로 $(-\beta)(-\alpha)^{-1} = \beta\alpha^{-1}$이다. 자연로그 (5)와 원시함수 항목의 (2)는 끝점의 순서와 같음을 묻지 않는다.

**2의 증명.** [[exponential-function|지수함수]]의 (3)에 의해 $\exp$는 미분가능한 함수이고 $\exp' = \exp$이므로, 원시함수의 정의에 의해 $\exp$는 $\exp$의 원시함수이다. 같은 번호에 의해 $\exp$는 연속미분가능하므로 [[continuously-differentiable]]의 (1)에 의해 연속함수이다. 원시함수 항목의 (2)를 구간 $\mathbb{R}$([[interval]]의 (2))과 연속함수 $\exp$에 쓰면 $\int_\alpha^\beta \exp(x)\,dx = \exp(\beta) - \exp(\alpha)$이다.

**3의 증명.** $r + 1 = 0$이면 (K8)의 (ii)에 의해 $r = -1$이므로, $r \ne -1$에서 $r + 1 \ne 0$이다. $v_r(x) = x^r$, $v_{r+1}(x) = x^{r+1}$로 정한 함수 $\mathbb{R}_{>0} \to \mathbb{R}$에 [[real-power|양수의 실수 거듭제곱]]의 (7)의 (ii)를 쓰면, $v_{r+1}$은 미분가능한 함수이고 모든 $x$에서 $v_{r+1}'(x) = (r + 1)x^{(r+1)-1} = (r + 1)x^r$이며, $v_r$은 연속미분가능하므로 [[continuously-differentiable]]의 (1)에 의해 연속함수이다. $V = (r + 1)^{-1}v_{r+1}$로 두면 [[derivative-rules|미분의 규칙]]의 (6)에 의해 $V$는 미분가능한 함수이고 $V'(x) = (r + 1)^{-1}(r + 1)x^r = x^r$이다((K2), (K8)의 (iii), (K4)). 곧 $V$는 $v_r$의 원시함수이고, $V(x) = x^{r+1}(r + 1)^{-1}$이다((K1)). 원시함수 항목의 (2)를 구간 $\mathbb{R}_{>0}$과 연속함수 $v_r$에 쓰면 $\int_\alpha^\beta x^r\,dx = V(\beta) - V(\alpha) = \bigl(\beta^{r+1} - \alpha^{r+1}\bigr)(r + 1)^{-1}$이다((K12)의 (i) 꼴의 분배).

$r$가 $0$ 이상인 정수 $n$이면 실수 거듭제곱 항목의 (1)에 의해 $\beta^{n+1}$, $\alpha^{n+1}$, $x^n$은 [[power-of-a-real-number]]의 거듭제곱과 같은 수이고, 따라서 이 값은 원시함수 항목의 (3)의 $\bigl(\beta^{n+1} - \alpha^{n+1}\bigr)(n + 1)^{-1}$과 같다.

**4의 증명.** 자연로그의 정의의 함수 $t^{-1}$, 곧 $w(t) = t^{-1}$로 정한 $w : \mathbb{R}_{>0} \to \mathbb{R}$는 연속함수이고(그 항목의 $r$; 여기서는 (3)의 지수 $r$와 구별하려고 $w$로 쓴다), $\mathbb{R}_{>0}$은 구간이다. 가정에 의해 $[a, b]$의 모든 $x$에서 $g(x) \in \mathbb{R}_{>0}$이므로, [[change-of-variables|치환적분]]의 (2)를 $I = \mathbb{R}_{>0}$, $f = w$에 쓰면 $x$에서의 값이 $w(g(x))\,g'(x)$인 함수는 리만 적분가능하고
$$
\int_a^b w(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} w
$$
이다. (K1)에 의해 $w(g(x))\,g'(x) = g'(x)\,g(x)^{-1}$이고, 오른쪽은 자연로그 (5)에 의해 $\ln g(b) - \ln g(a)$이다.

**5의 증명.** 먼저 마지막 문장을 보인다. $k$를 자연수라 하고 $x = (k + 1)k^{-1}$로 두자. $0 < k < k + 1$이므로 순서 성질 (6)의 (i)과 (W4)에 의해 $0 < x$이고, $x = 1$이면 양변에 $k$를 곱해 $k + 1 = k$가 되어 순서 성질 (1)의 (i)과 맞지 않으므로 $x \ne 1$이다. (K…)로 계산하면 $x^{-1} = k(k + 1)^{-1}$이므로
$$
\begin{aligned}
1 - x^{-1} &= \bigl((k + 1) - k\bigr)(k + 1)^{-1} \\
&= (k + 1)^{-1}, \\
x - 1 &= \bigl((k + 1) - k\bigr)k^{-1} = k^{-1}
\end{aligned}
$$
이다. 로그 성질 (2)에 의해 $\ln x = \ln(k + 1) - \ln k$이다. 자연로그 (6)의 $x \ne 1$인 경우에 의해
$$
(k + 1)^{-1} < \ln(k + 1) - \ln k < k^{-1}
$$
이다. 이것을 (가)라 부른다.

$n$을 자연수라 하자. $i$번째 항이 $\ln i$인 수열에 [[telescoping-sum|망원 합]]의 (3)을 $m = 1$과 끝 번호 $n - 1$에 쓰면($1 \le 1$, $0 \le n - 1$) 자연로그 (1)에 의해
$$
\begin{aligned}
&\sum_{k=1}^{n-1} \bigl(\ln(k + 1) - \ln k\bigr) \\
&\quad = \ln n - \ln 1 = \ln n
\end{aligned}
$$
이다. (가)의 오른쪽 부등식과 부등식 (3)에 의해 $\ln n \le \sum_{k=1}^{n-1} k^{-1}$이다. (가)의 왼쪽 부등식과 부등식 (3)에 의해 $\sum_{k=1}^{n-1} (k + 1)^{-1} \le \ln n$이고, [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (2)를 $m = 1$, 끝 번호 $n - 1$, $r = 1$에 쓰면($1 \le 1 + 1$, 그리고 $j$번째 항이 $j^{-1}$인 수열의 $j = k + 1$번째 항이 $(k + 1)^{-1}$이다) $\sum_{k=1}^{n-1}(k + 1)^{-1} = \sum_{j=2}^{n} j^{-1}$이다. 합의 첨자의 이름을 바꾸어 $\sum_{k=2}^{n} k^{-1} \le \ln n$이다.

$n = 1$이면 $\sum_{k=2}^{1}$과 $\sum_{k=1}^{0}$은 합 (2)에 의해 빈 합 $0$이고, 자연로그 (1)에 의해 $\ln 1 = 0$이다. $n \ge 2$이면 $k = 1$이 $1 \le k \le n - 1$을 만족하고 (가)는 이 $k$에서 진짜 부등식이므로, 부등식 (3) 대신 부등식 (7)을 쓰면 두 부등식이 모두 $<$로 성립한다.

**6의 증명.** 자연수 $n$에서 $\ln n$과 $\ln(n + 1)$은 정해지므로, [[sequence]]의 (1)에 의해 $(d_n)$과, $c_n = \sum_{k=1}^{n} k^{-1} - \ln(n + 1)$로 정한 $(c_n)$은 수열이다.

줄어든다는 것: 합 (3)에 의해 $\sum_{k=1}^{n+1} k^{-1} = \sum_{k=1}^{n} k^{-1} + (n + 1)^{-1}$이므로
$$
\begin{aligned}
&d_{n+1} - d_n \\
&\quad = (n + 1)^{-1} - \bigl(\ln(n + 1) - \ln n\bigr)
\end{aligned}
$$
이고, (가)를 $k = n$에 쓰면 이것은 음수이다. 순서 성질 (3)의 (i)에 의해 $d_{n+1} < d_n$이고, 따라서 $(d_n)$은 단조감소이다.

아래쪽 어림: 같은 방법으로 $c_{n+1} - c_n = (n + 1)^{-1} - \bigl(\ln(n + 2) - \ln(n + 1)\bigr)$이고, (가)를 $k = n + 1$에 쓰면 이것은 양수이다. 따라서 $(c_n)$은 단조증가이고 [[sequence]]의 (4)에 의해 모든 $n$에서 $c_1 \le c_n$이다. 합 (2)에 의해 $c_1 = 1^{-1} - \ln 2 = 1 - \ln 2$이다. 또 $d_n - c_n = \ln(n + 1) - \ln n$이고 자연로그 (3)에 의해 $0 < \ln(n + 1) - \ln n$이므로 $c_n < d_n$이다. 따라서 모든 $n$에서 $1 - \ln 2 \le c_n < d_n$이다.

위쪽 어림: 합 (2)와 자연로그 (1)에 의해 $d_1 = 1^{-1} - \ln 1 = 1$이고 [[sequence]]의 (4)에 의해 $d_n \le d_1 = 1$이다.

수렴과 극한의 범위: $1 - \ln 2$는 $(d_n)$의 하계이므로 $(d_n)$은 아래로 유계이고, [[monotone-convergence-theorem|단조수렴 정리]]의 (2)에 의해 $(d_n)$은 값의 집합 $E = \{d_n : n \in \mathbb{N}\}$의 하한 $\inf E$로 수렴한다. [[sequence]]의 (2)에 의해 $1 - \ln 2$는 $E$의 하계이므로, [[upper-bound-and-supremum]]의 하한의 정의에 의해 $1 - \ln 2 \le \inf E = \lim_{n \to \infty} d_n$이다. 단조수렴 정리의 (2)의 "특히"에 의해 $\lim_{n \to \infty} d_n \le d_2$이고, 합 (3), (2)에 의해 $d_2 = 1 + 2^{-1} - \ln 2 = \tfrac{3}{2} - \ln 2$이다.

마지막으로 자연로그 (6)의 $2^{-1} < \ln 2 < 1$에 의해 $0 < 1 - \ln 2$이고 $\tfrac{3}{2} - \ln 2 < \tfrac{3}{2} - 2^{-1} = 1$이다(순서 성질 (3)의 (i), (iii)과 (2)의 (ii)). 순서 성질 (1)의 (v)에 의해 $0 < \lim_{n \to \infty} d_n < 1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[음수 끝점: $\int_{-2}^{-1} x^{-1}\,dx$]
$\alpha = -2$, $\beta = -1$은 $\{x : x < 0\}$의 원소이므로 (1)에 의해
$$
\int_{-2}^{-1} x^{-1}\,dx = \ln 1 - \ln 2 = -\ln 2
$$
입니다. $\ln(\beta\alpha^{-1}) = \ln(2^{-1}) = -\ln 2$([[laws-of-logarithm|로그의 성질]]의 (2))로 계산해도 같습니다. $[-2, -1]$에서 $x^{-1}$은 음수이고 끝점이 왼쪽에서 오른쪽으로 가므로 값이 음수인 것이 맞습니다. 양수 쪽의 $\int_1^2 x^{-1}\,dx = \ln 2$와 부호만 다릅니다.
:::

:::example[$g'/g$의 적분: $\int_0^1 2x\,(x^2 + 1)^{-1}\,dx$]
$g(x) = x^2 + 1$로 정한 $g : [0, 1] \to \mathbb{R}$는 [[continuously-differentiable]]의 (4), (3)에 의해 연속미분가능하고 $g'(x) = 2x$입니다. [[order-properties-of-reals|순서 성질]]의 (5)의 (iii)에 의해 $0 \le x^2$이므로 $0 < 1 \le g(x)$입니다. (4)에 의해
$$
\begin{aligned}
\int_0^1 2x\,(x^2 + 1)^{-1}\,dx &= \ln 2 - \ln 1 \\
&= \ln 2
\end{aligned}
$$
입니다.
:::

:::example[지수 $r = \tfrac{1}{2}$와 $r = -2$: $\int_1^4 \sqrt{x}\,dx$와 $\int_1^2 x^{-2}\,dx$]
[[real-power|양수의 실수 거듭제곱]]의 (3)에 의해 $x^{1/2} = \sqrt{x}$이고 $4^{3/2} = (4^{1/2})^3 = (\sqrt{4})^3 = 2^3 = 8$입니다($\sqrt{4} = 2$는 $2 \cdot 2 = 4$와 [[square-root-exists]]의 (1)의 유일성). $1^y = 1$(같은 항목의 (4)의 (iv))이므로 (3)에 의해
$$
\begin{aligned}
\int_1^4 \sqrt{x}\,dx &= \bigl(8 - 1\bigr)\bigl(\tfrac{3}{2}\bigr)^{-1} \\
&= \tfrac{14}{3}
\end{aligned}
$$
입니다. $r = -2$이면 $r + 1 = -1$이고, 같은 항목의 (2)에 의해 $2^{-1}$은 역수 $\tfrac{1}{2}$이므로
$$
\begin{aligned}
\int_1^2 x^{-2}\,dx &= \bigl(2^{-1} - 1^{-1}\bigr)(-1)^{-1} \\
&= \bigl(\tfrac{1}{2} - 1\bigr)(-1) = \tfrac{1}{2}
\end{aligned}
$$
입니다. $r = 0$이면 $x^0 = 1$, $x^1 = x$(같은 항목의 (1))이므로 (3)은 $\int_\alpha^\beta 1\,dx = \beta - \alpha$가 되어 [[oriented-integral]]의 (4)와 맞습니다.
:::

:::example[로그로 다시 보는 조화급수의 발산]
$n$번째 항이 $n^{-1}$인 수열의 부분합을 $s_n$이라 하면 [[finite-sum-of-reals|실수의 유한 합]]의 (1)에 의해 $s_n = \sum_{k=1}^{n} k^{-1}$입니다. (5)를 $n + 1$에 쓰면 $\ln(n + 1) \le s_n$입니다. 실수 $B$가 주어지면 [[laws-of-logarithm|로그의 성질]]의 (5)에 의해 $K < x$인 모든 양수 $x$에서 $B < \ln x$인 양의 실수 $K$가 있고, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $K < n$인 자연수 $n$이 있습니다. 그러면 $K < n < n + 1$이므로 $B < \ln(n + 1) \le s_n$입니다. 곧 부분합 수열은 위로 유계가 아니고, 이것은 [[harmonic-series-diverges|조화급수의 발산]]의 (3)과 같은 결론입니다. 위쪽으로는, [[splitting-and-shifting-finite-sums|유한 합의 쪼개기]]의 (1)로 $s_n = 1 + \sum_{k=2}^{n} k^{-1}$이고 (5)의 왼쪽 부등식에 의해 $s_n \le 1 + \ln n$입니다. 곧 모든 자연수 $n$에서 $\ln(n + 1) \le s_n \le 1 + \ln n$입니다.
:::

:::counterexample[끝점이 $0$의 양쪽에 있는 예: $\int_{-1}^{1} x^{-1}\,dx$]
$\ln(\beta\alpha^{-1})$에 $\alpha = -1$, $\beta = 1$을 그대로 넣으면 $\ln(-1)$이 되어 뜻이 없고, "$\ln|x|$의 차"로 계산해 $0$이라고 하는 것도 근거가 없습니다. 실제로 $\int_{-1}^{1} x^{-1}\,dx$는 정해지지 않습니다. $f : [-1, 1] \to \mathbb{R}$가 $t \ne 0$인 모든 $t$에서 $f(t) = t^{-1}$인 함수라 하고($f(0)$은 아무 값), 실수 $B$가 모든 $t$에서 $|f(t)| \le B$를 만족한다고 합시다. [[absolute-value|절댓값]]의 (2), (6)에 의해 $0 \le |B|$이고 $B \le |B|$입니다. $t_0 = (|B| + 1)^{-1}$로 두면 $1 \le |B| + 1$이므로 [[order-properties-of-reals|순서 성질]]의 (6)의 (i), (ii)에 의해 $0 < t_0 \le 1$이고($|B| = 0$이면 $t_0 = 1$), $f(t_0) = |B| + 1 > B$이므로 $|f(t_0)| > B$가 되어 맞지 않습니다. 따라서 $f$는 [[bounded-function|유계]]가 아니고, [[riemann-integral]]의 정의에 의해 $[-1, 1]$에서 적분가능하지 않습니다. (1)의 두 꼴은 끝점이 같은 부호일 때만의 것입니다.
:::

## 확인 질문

:::check[$\int_1^4 x^{-1}\,dx$와 $\int_2^8 x^{-1}\,dx$ 가운데 어느 것이 큰가?]
같습니다. (1)에 의해 둘 다 $\ln(4 \cdot 1^{-1}) = \ln(8 \cdot 2^{-1}) = \ln 4$입니다. 끝점의 비가 같으면 적분이 같습니다.
:::

:::check[$\int_{-1}^{1} \exp(x)\,dx$는 얼마이고, $\exp(1)$보다 큰가 작은가?]
(2)에 의해 $\exp(1) - \exp(-1)$입니다. [[exponential-function|지수함수]]의 (1)에 의해 $0 < \exp(-1)$이므로 이 값은 $\exp(1)$보다 작습니다. 끝점이 $0$의 양쪽에 있어도 $\exp$는 $\mathbb{R}$ 전체에서 정의된 연속함수이므로 위의 반례와 달리 적분이 정해집니다.
:::

:::check[$d_3 = 1 + \tfrac{1}{2} + \tfrac{1}{3} - \ln 3$은 $d_2$보다 큰가 작은가? $d_3$은 어떤 범위에 있는가?]
(6)에 의해 $(d_n)$은 줄어드므로 $d_3 < d_2$입니다. 또 $1 - \ln 2 < d_3 \le 1$입니다. 직접 보면 $d_3 - d_2 = \tfrac{1}{3} - (\ln 3 - \ln 2)$이고, (5)의 마지막 문장을 $k = 2$에 쓰면 $\tfrac{1}{3} < \ln 3 - \ln 2$이므로 음수입니다.
:::
