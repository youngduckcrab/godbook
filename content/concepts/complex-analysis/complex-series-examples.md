---
title: 복소 급수의 예
title_en: Examples of Complex Series
aliases: [복소 멱급수의 예, 복소 등비 멱급수, 계수가 1/n! 인 복소 멱급수, 수렴 반지름의 예, examples of complex power series, complex geometric power series]
kind: proposition
field: complex-analysis
msc: ["30B10", "40A05"]
level: undergrad
summary: 계수가 1/n! 인 복소 멱급수는 모든 복소수에서 절대수렴하고, 계수가 모두 1 인 것은 열린 단위 공에서 1/(1 − z) 로 수렴하고 그 밖에서 발산한다. 반지름이 1 인 zⁿ/n 의 멱급수는 z = 1 에서 발산하고 z = −1 에서 수렴하며, zⁿ/n² 의 멱급수는 닫힌 단위 공에서 절대수렴한다. nⁿzⁿ 의 멱급수는 반지름이 0 이고, 순허수 계수 i(1/2)ⁿ 의 멱급수는 반지름 2, 1/(1 − z) 를 중심 b 에서 전개한 멱급수는 반지름 |1 − b| 이다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, factorial-from-zero, basic-limits, harmonic-series-diverges, comparison-test, series-indexed-from-zero, power-series, radius-of-convergence, power-series-examples, exponential-power-series, ring-basic-properties, field, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, convergence-of-complex-sequences, complex-series, absolute-convergence-of-complex-series, complex-power-series, radius-of-convergence-of-complex-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153); 11.3.2소절 Convergence of power series, Example 11.3.2 와 Example 11.3.3 (p.155)"
    checked: original
    note: "출처 Example 11.3.2(p.155)는 Σ zⁿ 의 반지름이 1, Σ zⁿ/n! 의 반지름이 ∞, Σ nⁿzⁿ 의 반지름이 0 이라고 적는다. (1), (2), (5)가 같은 세 급수이고, 출처의 '반지름 ∞' 는 (1)의 '모든 복소수에서 수렴하는 복소 멱급수'이다. 출처는 이 셋을 'series we already know' 라고 들기만 하고 그 자리에서 반지름을 계산하지 않는다. 이 항목은 급수와 멱급수 강의의 power-series-examples 의 실수판을 복소 멱급수의 (5)로 옮겨 증명한다. (2)의 합 1/(1 − z) 는 출처 11.3.1소절(p.153)의 등식이다. 출처 Example 11.3.3(p.155)은 a ≠ 1 에서 c = 1/(1 − a) 로 두고 1/(1 − z) = Σ cⁿ⁺¹(z − a)ⁿ 이라 적고, limsup ⁿ√|cⁿ| = |c| 로 반지름이 |1 − a| 라고 계산한다. (7)이 같은 전개이고(중심의 글자를 b 로 썼다), 이 항목은 반지름을 비 공식으로 구하고 합은 복소 등비급수로 확인한다. 반례 '중심을 바꾸면 수렴 원판이 함수의 정의역을 다 덮지 않는 예'는 같은 예 끝의 문장(1/(1 − z) 의 정의역이 어느 점에서의 멱급수의 수렴 영역보다 크다)을 b = 1/2, b = −1 에서 본 것이다. 확인 질문 '(2)와 (7)을 비교할 때, (7)에서 $b = 0$이면 어떤 급수가 되는가?'는 그 예에 a = 0 을 넣은 것이다."
  - ref: lebl-basic-analysis
    loc: "2.6절 More on series, 2.6.5소절 Power series, Example 2.6.7, Example 2.6.8 (p.106–107), Example 2.6.9 (p.107); 2.5절 Series, 2.5.5소절 Comparison test and the p-series, Proposition 2.5.17 (p.94); 2.6.6소절 Exercises 2.6.5, 2.6.7, 2.6.9 (p.110–111)"
    checked: original
    note: "출처 Example 2.6.7(p.106)은 실수 xⁿ/n! 의 멱급수가 모든 실수에서 절대수렴함을 비 판정법으로 보이고, Example 2.6.8(p.106–107)은 xⁿ/n 의 멱급수가 (−1, 1) 에서 절대수렴하고 x = −1 에서 교대급수 판정법으로 수렴하지만 절대수렴하지 않으며 x = 1 에서 발산한다고 보이며, Example 2.6.9(p.107)는 nⁿxⁿ 의 멱급수가 0 에서만 수렴한다고 보인다. (1), (3), (5)는 같은 급수의 복소판이고, 실수 점에서의 결론은 출처의 결론을 복소 멱급수의 (5)로 옮긴 것이다. (4)에서 |z| ≤ 1 인 점의 절대수렴은 절댓값의 급수를 Σ 1/n² 과 비교하는 것이고, Σ 1/n² 의 수렴은 출처 Proposition 2.5.17(p.94, p-series, p = 2)이다. (6)의 계수 i(1/2)ⁿ 의 반지름 2 는 Exercise 2.6.5 a)(p.110)의 Σ 2ⁿxⁿ 와 같은 종류의 물음(공비의 역수가 반지름)이고, (7)처럼 유리함수를 등비급수로 전개해 반지름을 구하는 것은 Exercise 2.6.7(p.111)이 x/(4 − x²) 에 대해 묻는 것과 같은 계산이다. 비로 반지름을 구하는 것은 Exercise 2.6.9(p.111)가 증명하게 하는 공식이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합과 반지름 재계산, 반례와 꼬리 문장 word-diff 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소 멱급수, 그 $z$에서의 항, 수렴·발산·절대수렴과 합, 절댓값 계수의 실멱급수, 수렴 반지름 $\rho$, 모든 복소수에서 수렴하는 복소 멱급수, 실멱급수는 [[complex-power-series|복소 멱급수]]의 것이고, 복소 멱급수가 수렴하는 복소수 전체의 집합 $E$는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이다. 열린 공 $B(a, r)$와 닫힌 공 $C(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 것이다. 계승 $n!$($0! = 1$)은 [[factorial-from-zero]], 실수의 지수함수 $\exp$는 [[exponential-power-series]]의 것이다. 계수가 실수인 곳은 [[complex-field]]의 (3)의 약속대로 그 실수를 $\iota$로 옮긴 실수인 복소수로 읽는다. 다음이 성립한다.

1. (**계수가 $1/n!$인 복소 멱급수**) 중심이 $0$이고 $0$ 이상인 모든 정수 $n$에서 $c_n = (n!)^{-1}$인 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이다. 곧 모든 복소수 $z$에서 $(z^n / n!)_{n \ge 0}$의 급수는 절대수렴하고
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} \Bigl| \frac{z^n}{n!} \Bigr| &= \exp(|z|), \\
   \Bigl| \sum_{n=0}^{\infty} \frac{z^n}{n!} \Bigr| &\le \exp(|z|)
   \end{aligned}
   $$
   이다.
2. (**계수가 모두 $1$인 복소 멱급수**) 중심이 $0$이고 계수가 모두 $1$인 복소 멱급수는 수렴 반지름이 $1$이다. $|z| < 1$이면 절대수렴하고 $\sum_{n=0}^{\infty} z^n = 1/(1 - z)$이며, $|z| \ge 1$이면 발산한다. 따라서 $E = B(0, 1)$이다.
3. ($z^n/n$의 복소 멱급수) 중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = n^{-1}$인 복소 멱급수는 수렴 반지름이 $1$이다. $z = 1$에서 발산하고, $z = -1$에서 수렴하지만 절대수렴하지 않는다. $|z| = 1$인 어느 점에서도 절대수렴하지 않는다.
4. ($z^n/n^2$의 복소 멱급수) 중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (n^2)^{-1}$인 복소 멱급수는 수렴 반지름이 $1$이고, $|z| \le 1$인 모든 $z$에서 절대수렴한다. 따라서 $E = C(0, 1)$이다.
5. ($n^n z^n$의 복소 멱급수) 중심이 $0$이고 $0$ 이상인 모든 정수 $n$에서 $c_n = n^n$($c_0 = 0^0 = 1$)인 복소 멱급수는 수렴 반지름이 $0$이고 $E = \{0\}$이다.
6. (순허수 계수) 중심이 $0$이고 $0$ 이상인 모든 정수 $n$에서 $c_n = i\,(1/2)^n$인 복소 멱급수는 수렴 반지름이 $2$이다. $|z| < 2$이면 절대수렴하고
   $$
   \sum_{n=0}^{\infty} i \Bigl(\frac{1}{2}\Bigr)^n z^n = \frac{2i}{2 - z}
   $$
   이며, $|z| \ge 2$이면 발산한다.
7. ($1/(1 - z)$를 중심 $b$에서 전개한 복소 멱급수) $b$를 $b \ne 1$인 복소수라 하고 $v = (1 - b)^{-1}$로 두자. 중심이 $b$이고 $0$ 이상인 모든 정수 $n$에서 $c_n = v^{n+1}$인 복소 멱급수는 수렴 반지름이 $|1 - b|$이다. $|z - b| < |1 - b|$이면 $z \ne 1$이고
   $$
   \sum_{n=0}^{\infty} v^{n+1} (z - b)^n = \frac{1}{1 - z}
   $$
   이며, $|z - b| \ge |1 - b|$이면 발산한다. 따라서 $E = B(b, |1 - b|)$이다.
:::

:::english
Complex power series, their terms at $z$, convergence, divergence, absolute convergence, and sums, the real power series of absolute coefficients, the radius of convergence $\rho$, complex power series converging at every complex number, and real power series are those of the entry on complex power series; the set $E$ of all complex numbers at which a complex power series converges is that of item (7) of the entry on the radius of convergence of complex power series. Open balls $B(a, r)$ and closed balls $C(a, r)$ are those of item (3) of the entry on the metric of the complex plane. Factorials $n!$ ($0! = 1$) are those of the entry on factorials from zero, and the real exponential function $\exp$ is that of the entry on the power series of the exponential function. Where a coefficient is real, it is read, by the convention of item (3) of the entry on the field of complex numbers, as the real complex number obtained by applying $\iota$. The following hold.

1. (**The complex power series with coefficients $1/n!$**) The complex power series with center $0$ and $c_n = (n!)^{-1}$ for every integer $n \ge 0$ is a complex power series converging at every complex number. That is, for every complex number $z$ the series of $(z^n / n!)_{n \ge 0}$ converges absolutely, and
   $$
   \begin{aligned}
   \sum_{n=0}^{\infty} \Bigl| \frac{z^n}{n!} \Bigr| &= \exp(|z|), \\
   \Bigl| \sum_{n=0}^{\infty} \frac{z^n}{n!} \Bigr| &\le \exp(|z|).
   \end{aligned}
   $$
2. (**The complex power series with all coefficients $1$**) The complex power series with center $0$ and all coefficients $1$ has radius of convergence $1$. If $|z| < 1$ it converges absolutely and $\sum_{n=0}^{\infty} z^n = 1/(1 - z)$; if $|z| \ge 1$ it diverges. Hence $E = B(0, 1)$.
3. (The complex power series of $z^n/n$) The complex power series with center $0$, $c_0 = 0$, and $c_n = n^{-1}$ for natural numbers $n$ has radius of convergence $1$. It diverges at $z = 1$, and converges but does not converge absolutely at $z = -1$. It does not converge absolutely at any point with $|z| = 1$.
4. (The complex power series of $z^n/n^2$) The complex power series with center $0$, $c_0 = 0$, and $c_n = (n^2)^{-1}$ for natural numbers $n$ has radius of convergence $1$ and converges absolutely at every $z$ with $|z| \le 1$. Hence $E = C(0, 1)$.
5. (The complex power series of $n^n z^n$) The complex power series with center $0$ and $c_n = n^n$ for every integer $n \ge 0$ ($c_0 = 0^0 = 1$) has radius of convergence $0$, and $E = \{0\}$.
6. (Purely imaginary coefficients) The complex power series with center $0$ and $c_n = i\,(1/2)^n$ for every integer $n \ge 0$ has radius of convergence $2$. If $|z| < 2$ it converges absolutely and
   $$
   \sum_{n=0}^{\infty} i \Bigl(\frac{1}{2}\Bigr)^n z^n = \frac{2i}{2 - z},
   $$
   and if $|z| \ge 2$ it diverges.
7. (Expanding $1/(1 - z)$ about $b$) Let $b$ be a complex number with $b \ne 1$, and let $v = (1 - b)^{-1}$. The complex power series with center $b$ and $c_n = v^{n+1}$ for every integer $n \ge 0$ has radius of convergence $|1 - b|$. If $|z - b| < |1 - b|$, then $z \ne 1$ and
   $$
   \sum_{n=0}^{\infty} v^{n+1} (z - b)^n = \frac{1}{1 - z},
   $$
   and if $|z - b| \ge |1 - b|$ it diverges. Hence $E = B(b, |1 - b|)$.
:::

## 직관

예들은 두 가지 일을 보여 줍니다. 하나는 수렴 반지름이 $0$인 경우, $1$이나 $2$ 같은 양수인 경우, 모든 복소수에서 수렴하는 경우가 실제로 모두 있다는 것이고, 다른 하나는 반지름과 같은 거리에 있는 원 위의 점에서는 무엇이든 일어날 수 있다는 것입니다. (2)는 원 위의 모든 점에서 발산하고, (4)는 원 위의 모든 점에서 절대수렴하며, (3)은 원 위에 발산하는 점($z = 1$)과 수렴하는 점($z = -1$)이 함께 있습니다.

실수 계수의 예 (1)–(5)는 급수와 멱급수 강의의 [[power-series-examples|멱급수의 예]]와 같은 계수이고, [[complex-power-series|복소 멱급수]]의 (5)에 의해 반지름도 같습니다. 달라지는 것은 수렴하는 점들의 모양입니다. 실수 위에서는 구간이었던 것이 복소평면에서는 원판이 되고, 실수판에서 끝점 두 개였던 경계가 원 전체가 됩니다. (3)의 원 위의 점 가운데 $1$과 $-1$이 아닌 점에서 수렴하는지는 이 항목이 말하지 않습니다.

(6)과 (7)은 계수가 실수가 아닌 예입니다. (6)의 계수는 모두 순허수이지만 절댓값이 $(1/2)^n$이라 반지름은 계수 $(1/2)^n$의 멱급수와 같은 $2$입니다. (7)은 같은 함수 $1/(1 - z)$를 중심 $b$에서 전개하면 반지름이 $b$에서 $1$까지의 거리 $|1 - b|$가 된다는 것을 보여 줍니다. $b = 0$이면 (2)와 같은 급수입니다.

## 증명

:::idea
실수 계수의 예는 [[power-series-examples|멱급수의 예]]의 실수판과 [[complex-power-series|복소 멱급수]]의 (5)로 반지름을 옮기고, 원 위의 점은 항의 절댓값으로 따진다. (6), (7)은 항을 등비급수의 항으로 다시 쓰고 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)을 쓴다.
:::

:::hint
(7)에서는 $v^{n+1} (z - b)^n = v \bigl(v (z - b)\bigr)^n$으로 다시 쓰고, $|v (z - b)| < 1$인 것이 정확히 $|z - b| < |1 - b|$일 때라는 것을 봅니다.
:::

:::proof
"복소 멱급수 (n)", "복소 반지름 (n)", "절대수렴 (n)", "복소 급수 (n)", "실수판 예 (n)", "복소 절댓값 (n)", "복소 거듭제곱 (n)", "복소평면의 거리 (n)"은 [[complex-power-series]], [[radius-of-convergence-of-complex-power-series]], [[absolute-convergence-of-complex-series]], [[complex-series]], [[power-series-examples]], [[modulus-of-complex-number]], [[power-of-a-complex-number]], [[complex-plane-as-metric-space]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (n)"은 [[order-properties-of-reals]], "절댓값 (n)"은 [[absolute-value]], "실수 거듭제곱 (n)"은 [[power-of-a-real-number]]의 번호이다. (1)–(5)의 복소 멱급수는 실수 중심 $0$과 실수 계수의 복소 멱급수이므로, 복소 멱급수 (5)의 "원래의 실멱급수"는 실수판 예의 같은 번호의 실멱급수($a = 0$)이고, 복소 멱급수 (5)의 (iii)에 의해 둘의 $A$와 수렴 반지름(또는 모든 점에서 수렴한다는 것)이 같다. 복소평면의 거리 (3)에 의해 $B(0, r) = \{z : |z| < r\}$, $C(0, r) = \{z : |z| \le r\}$이다.

**1의 증명.** 실수판 예 (2)에 의해 원래의 실멱급수는 모든 실수에서 수렴하는 멱급수이므로, 복소 멱급수 (5)의 (iii)에 의해 이 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이고, 복소 반지름 (3)에 의해 모든 $z$에서 절대수렴한다. [[factorial-from-zero|0부터의 계승]]의 (3)에 의해 $0 < (n!)^{-1}$이므로 복소 절댓값 (5)와 절댓값 (1)에 의해 $|c_n| = (n!)^{-1}$이고, 절댓값 계수의 실멱급수는 [[exponential-power-series|지수함수의 멱급수]]의 멱급수와 같다. 복소 멱급수 (1)에 의해 $|z^n / n!| = |z|^n / n!$이므로 그 항목의 (1)을 $x = |z|$에 쓰면 첫째 등식이 나오고, 복소 멱급수 (3)의 (i)이 둘째 부등식이다.

**2의 증명.** 실수판 예 (1)의 (i)에 의해 반지름은 $1$이다. 합과 발산은 절대수렴 (6)의 (i), (ii)이다($1 z^n = z^n$). $E$는 $|z| < 1$인 점 전체이므로 $B(0, 1)$이다.

**3의 증명.** 실수판 예 (3)에 의해 반지름은 $1$이고, 원래의 실멱급수는 $x = 1$에서 발산하고 $x = -1$에서 수렴하지만 절대수렴하지 않는다. 복소 멱급수 (5)의 (ii)에 의해 복소 멱급수는 $\iota(1) = 1$에서 발산하고, $\iota(-1) = -1$에서 수렴하지만 절대수렴하지 않는다. $|z| = 1$이면 복소 멱급수 (1)과 실수 거듭제곱 (2)의 (iv)에 의해 $n \ge 1$에서 $|c_n z^n| = n^{-1} \cdot 1^n = n^{-1}$이고 $|c_0 z^0| = 0$이다. [[harmonic-series-diverges|조화급수는 발산한다]]의 (2)와 [[series-indexed-from-zero]]의 (8)에 의해 이 절댓값들의 급수는 발산하므로 $z$에서 절대수렴하지 않는다.

**4의 증명.** 실수판 예 (4)에 의해 반지름은 $1$이다. $|z| \le 1$이라 하자. 복소 멱급수 (1)에 의해 $n \ge 1$에서 $|c_n z^n| = (n^2)^{-1} |z|^n$이고, $0 \le |z| \le 1$이므로 실수 거듭제곱 (6)의 (ii)와 (2)의 (iv)에 의해 $|z|^n \le 1$이며, $0 < (n^2)^{-1}$이므로 순서 성질 (4)의 (iii)에 의해 $|c_n z^n| \le (n^2)^{-1}$이다. $n = 0$이면 $|c_0 z^0| = 0$이다. $w_0 = 0$, $n \ge 1$에서 $w_n = (n^2)^{-1}$로 둔 실수 항의 급수는 [[comparison-test|비교 판정법]]의 (6)과 [[series-indexed-from-zero]]의 (8)에 의해 수렴하므로, 절대수렴 (3)을 $m = 0$에 쓰면 $z$에서 절대수렴한다. 따라서 $C(0, 1) \subseteq E$이고, 복소 반지름 (7)의 (iii)에 의해 $E \subseteq C(0, 1)$이므로 $E = C(0, 1)$이다.

**5의 증명.** 실수판 예 (5)에 의해 원래의 실멱급수의 $A$는 위로 유계이고 반지름이 $0$이다. 복소 멱급수 (5)의 (iii)에 의해 이 복소 멱급수도 그렇고, 복소 반지름 (4)에 의해 수렴하는 점은 $0$뿐이다.

**6의 증명.** 복소 절댓값 (3), (5)(그 (5)의 $|i| = 1$을 포함)와 실수 거듭제곱 (6)의 (i)에 의해 $|c_n| = (1/2)^n$이고 모든 $n$에서 $c_n \ne 0$이다. 복소 반지름 (6)의 (ii)를 $N = 1$에 쓰면 실수 거듭제곱 (1)과 (K2), (K4), (K8)에 의해 $q_j = (1/2)^{j+1} \bigl((1/2)^j\bigr)^{-1} = 1/2$인 상수 수열이고, [[basic-limits]]의 (1)에 의해 $1/2$로 수렴하므로 반지름은 $(1/2)^{-1} = 2$이다.

복소 거듭제곱 (5)와 (3)의 (i)에 의해 $i\,(1/2)^n z^n = i\,(z/2)^n$이다. 복소 절댓값 (3), (5)에 의해 $|z/2| = |z|/2$이고, 순서 성질 (6)의 (iv)에 의해 $|z|/2 < 1$인 것은 정확히 $|z| < 2$일 때이다. $|z| < 2$이면 절대수렴 (6)의 (i)을 $a = i$와 공비 $z/2$에 쓰면 합은 $i\,(1 - z/2)^{-1}$이고, [[field|가역원과 체]]의 계산으로 $1 - z/2 = (2 - z)/2$이므로 $i\,(1 - z/2)^{-1} = 2i/(2 - z)$이다($|z| < 2$이면 $z \ne 2$이다). $|z| \ge 2$이면 $|z/2| \ge 1$이고 $i \ne 0$이므로 절대수렴 (6)의 (ii)에 의해 발산한다.

**7의 증명.** $b \ne 1$이므로 [[complex-field|복소수체]] (1)에 의해 $1 - b \ne 0$이고 $v$가 정해지며, $v \ne 0$이다. 복소 절댓값 (4)에 의해 $|v| = |1 - b|^{-1}$이고, 복소 거듭제곱 (4)에 의해 $|c_n| = |v|^{n+1}$이며 모든 $n$에서 $c_n \ne 0$이다. 복소 반지름 (6)의 (ii)를 $N = 1$에 쓰면 $q_j = |v|^{j+2} \bigl(|v|^{j+1}\bigr)^{-1} = |v|$인 상수 수열이므로 [[basic-limits]]의 (1)에 의해 $|v|$로 수렴하고, 반지름은 $|v|^{-1} = |1 - b|$이다.

복소 거듭제곱 (1)과 (3)의 (i)에 의해 $v^{n+1} (z - b)^n = v\,v^n (z - b)^n = v \bigl(v (z - b)\bigr)^n$이다. 복소 절댓값 (3)에 의해 $|v (z - b)| = |z - b|\,|1 - b|^{-1}$이고, 순서 성질 (6)의 (iv)에 의해 이것이 $1$보다 작은 것은 정확히 $|z - b| < |1 - b|$일 때이다. 이때 $z = 1$이라면 $|1 - b| < |1 - b|$가 되어 순서 성질 (1)의 (i)에 어긋나므로 $z \ne 1$이다. 절대수렴 (6)의 (i)을 $a = v$와 공비 $v (z - b)$에 쓰면 합은
$$
\begin{aligned}
&v \bigl(1 - v(z - b)\bigr)^{-1} \\
&\qquad = \bigl(v^{-1} - (z - b)\bigr)^{-1} \\
&\qquad = \bigl((1 - b) - (z - b)\bigr)^{-1} \\
&\qquad = (1 - z)^{-1}
\end{aligned}
$$
이다. 첫 등호는 체에서 $v \ne 0$, $1 - v(z - b) \ne 0$일 때 $v\,w^{-1} = (v^{-1} w)^{-1}$이고 $v^{-1}(1 - v(z - b)) = v^{-1} - (z - b)$인 계산([[field|가역원과 체]], [[ring-basic-properties|환의 기본 성질]]의 (4))이고, 둘째 등호는 $v^{-1} = 1 - b$이다. $|z - b| \ge |1 - b|$이면 $|v(z - b)| \ge 1$이고 $v \ne 0$이므로 절대수렴 (6)의 (ii)에 의해 발산한다. 따라서 $E$는 $|z - b| < |1 - b|$인 점 전체, 곧 복소평면의 거리 (3)에 의해 $B(b, |1 - b|)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[(6)에서 실수인 점의 합]
(6)의 복소 멱급수를 실수인 점 $z = x$($|x| < 2$)에서 보면 합은 $2i/(2 - x)$이고, $2 - x$는 $0$이 아닌 실수이므로 이 합은 순허수입니다. 예컨대 $x = 1$이면 $2i$, $x = -2/3$이면 $2i / (8/3) = (3/4) i$입니다. 직접 보면 $x = 1$에서 항은 $i, i/2, i/4, \dots$이고 허수부의 급수는 첫째 항이 $1$이고 공비가 $1/2$인 등비급수라 합이 $2$입니다. 이 예처럼 중심이 $0$이고 계수의 실수부가 모두 $0$이면, 실수인 점 $x$에서의 항 $c_n x^n$의 실수부도 모두 $0$이므로 [[complex-series|복소 급수]]의 (2)에 의해 수렴할 때의 합의 실수부는 $0$입니다. 실수인 점에서의 합이 실수인 복소수라는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (iv)는 실수 계수를 가정합니다.
:::

:::counterexample[중심을 바꾸면 수렴 원판이 함수의 정의역을 다 덮지 않는 예]
$1$이 아닌 복소수 $z$에서의 값이 $1/(1 - z)$인 함수는 $1$이 아닌 모든 복소수에서 값이 정해지지만, (7)에 의해 중심 $b$에서의 멱급수는 원판 $B(b, |1 - b|)$ 안에서만 그 값을 나타냅니다. $b = 1/2$이면 반지름은 $1/2$이고, $z = -1$에서는 $1/(1 - z) = 1/2$이 정해지지만 $|-1 - 1/2| = 3/2 \ge 1/2$이라 멱급수는 발산합니다. $b = -1$이면 반지름은 $2$이고 같은 점 $z = -1$은 중심이므로 멱급수의 합은 $c_0 = v = 1/2$입니다. 한 함수를 나타내는 멱급수라도 중심에 따라 수렴하는 영역이 다를 수 있습니다.
:::

## 확인 질문

:::check[(2)와 (7)을 비교할 때, (7)에서 $b = 0$이면 어떤 급수가 되는가?]
(2)의 급수와 같습니다. $b = 0$이면 $v = (1 - 0)^{-1} = 1$이고 $c_n = 1^{n+1} = 1$이며, 반지름은 $|1 - 0| = 1$입니다. 합의 식 $1/(1 - z)$도 (2)와 같습니다.
:::

:::check[(1)의 복소 멱급수의 $z = i$에서의 합의 절댓값은 얼마 이하인가?]
$\exp(1)$, 곧 수 $e$ 이하입니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|i| = 1$이므로 (1)의 부등식에서 $\exp(|i|) = \exp(1)$입니다. 항의 절댓값의 급수의 합은 정확히 $\exp(1)$입니다.
:::
