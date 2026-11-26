---
title: 복소 멱급수의 수렴 반지름
title_en: Radius of Convergence of a Complex Power Series
aliases: [복소 멱급수의 수렴 원판, 수렴 원판, 복소 멱급수가 나타내는 함수, 복소수판 코시–아다마르 공식, radius of convergence of a complex power series, disc of convergence, function represented by a complex power series]
kind: theorem
field: complex-analysis
msc: ["30B10", "40A30"]
level: undergrad
summary: 복소 멱급수는 중심에서의 거리가 수렴 반지름보다 작은 모든 점에서 절대수렴하고, 큰 모든 점에서 항이 유계가 아니어서 발산한다. 모든 복소수에서 수렴하는 복소 멱급수는 모든 점에서 절대수렴하고, 반지름이 0 인 것은 중심이 아닌 모든 점에서 발산할 때이다. 한 점에서의 수렴·발산으로 반지름을 어림하고, 코시–아다마르 공식과 비 공식을 계수의 절댓값에 그대로 쓰며, 멱급수가 열린 공 위에 나타내는 함수를 정한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, upper-bound-and-supremum, nth-root, limit-superior-and-inferior, basic-limits, comparison-test, series-indexed-from-zero, power-series, radius-of-convergence, cauchy-hadamard-formula, ratio-formula-for-radius, power-series-examples, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, convergence-of-complex-sequences, complex-series, absolute-convergence-of-complex-series, complex-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153); 11.3.2소절 Convergence of power series, Proposition 11.3.1 과 그 증명 (p.154–155), 그 뒤 문단과 Example 11.3.2 (p.155); 11.8절 Fourier series, 11.8.7소절 Exercise 11.8.9 (p.206)"
    checked: original
    note: "출처 Proposition 11.3.1(p.154)은 ρ ∈ [0, ∞] 가 있어 (i) ρ = 0 이면 a 가 아닌 모든 z 에서 발산하고, (ii) ρ = ∞ 이면 모든 z 에서 절대수렴하며, (iii) 0 < ρ < ∞ 이면 B(a, ρ) 에서 절대수렴하고 |z − a| > ρ 에서 발산한다고 진술한다. (1)–(4)가 그것이다. 이 항목은 ρ = ∞ 대신 '모든 복소수에서 수렴하는 복소 멱급수'라 한다. 출처의 증명(p.154–155)은 R = limsup ⁿ√|c_n| 로 두고 실수판 Lebl I Proposition 2.6.10 에 넘기며, 바깥쪽에서는 항이 0 으로 가지 않는다고 적는다. 이 항목은 반지름을 상한으로 정한 절댓값 계수의 실멱급수의 것으로 두고 radius-of-convergence 의 번호를 |z − a| 에 쓴다. 코시–아다마르 공식은 (6)의 계산 도구로만 쓴다. 출처의 'Furthermore'(닫힌 공 C(a, r) 위의 고른 수렴)는 싣지 않는다. 출처 p.155 의 문단(z 에서 수렴하면 |w − a| < |z − a| 인 w 에서 절대수렴하고, z 에서 발산하면 |w − a| > |z − a| 인 w 에서 발산한다)이 (5)이다. 출처 11.3.1소절(p.153)은 B(a, ρ) 위의 모든 z 에서 멱급수가 f 로 수렴하는 상황을 말한다. (7)의 '나타내는 함수'는 급수와 멱급수 강의의 radius-of-convergence (7)을 복소수로 옮긴 이 사이트의 이름이다. 출처 p.155 의 그 문단은 반지름이 어떤 수 이상임을 보이려면 한 점에서의 수렴을 보이면 된다고 덧붙인다. 확인 질문 '복소 멱급수가 $z_1 = 3i$에서 수렴하고 $z_2 = 4$에서 발산한다면(중심 $0$), 수렴 반지름에 대해 무엇을 알 수 있는가?'와 예시 '한 점의 수렴과 발산으로 반지름을 정하는 예'는 그 말을 쓴 것이다. 반례 '원 위의 점에서는 정리가 수렴도 발산도 말하지 않는 예'의 계수가 모두 1 인 급수는 출처 11.3.1소절(p.153)의 Σ zⁿ(|z| < 1 일 때만 수렴한다)과 Example 11.3.2(p.155)의 반지름 1 인 급수와 같은 대상이고, 원 위에서 절대수렴하는 Σ zⁿ/n² 은 출처 11.8.7소절 Exercise 11.8.9(p.206)가 Σ|c_n| 이 수렴하면 닫힌 단위 원판의 경계에서 Σ c_n e^{inθ} 를 쓰게 하는 상황과 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: "2.6절 More on series, 2.6.5소절 Power series, Proposition 2.6.10 (p.107); 2.6.6소절 Exercise 2.6.6 (p.110)"
    checked: original
    note: "출처 Proposition 2.6.10(p.107)은 실수 멱급수의 수렴 반지름의 존재이고, Lebl II 의 Proposition 11.3.1 증명이 그것을 쓴다. 이 사이트에서는 그 역할을 radius-of-convergence 가 한다. 확인 질문 '복소 멱급수가 $z_1 = 3i$에서 수렴하고 $z_2 = 4$에서 발산한다면(중심 $0$), 수렴 반지름에 대해 무엇을 알 수 있는가?'는 출처 Exercise 2.6.6(p.110)이 x = 1 에서 수렴하는 멱급수의 수렴 반지름에 대해 무엇을 말할 수 있는지 묻는 것과 같은 물음이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합과 반지름 재계산, 반례와 꼬리 문장 word-diff 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소 멱급수, 그 $z$에서의 항, 수렴·발산·절대수렴과 합, 절댓값 계수의 실멱급수, 집합 $A$, 수렴 반지름 $\rho$, 모든 복소수에서 수렴하는 복소 멱급수, 실멱급수는 [[complex-power-series|복소 멱급수]]의 것이다. 실멱급수의 수렴 반지름과 모든 실수에서 수렴하는 멱급수, 실멱급수가 나타내는 함수는 [[radius-of-convergence]]의 것이다. 복소평면의 열린 공 $B(a, r)$와 닫힌 공 $C(a, r)$($0 < r$)는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 것이다. $n$제곱근은 [[nth-root]], 상극한은 [[limit-superior-and-inferior]]의 것이다.

아래에서 "복소 멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수이고, $z$, $z_1$은 복소수이다.

1. (안쪽) $A$가 위로 유계이고 $|z - a| < \rho$이면 복소 멱급수는 $z$에서 절대수렴하고, 따라서 수렴한다.
2. (바깥쪽) $A$가 위로 유계이고 $|z - a| > \rho$이면 $z$에서의 항은 유계가 아니고 복소 멱급수는 $z$에서 발산한다.
3. (모든 복소수에서 수렴하는 복소 멱급수) $A$가 위로 유계가 아니면 복소 멱급수는 모든 복소수 $z$에서 절대수렴하고, 따라서 수렴한다. 거꾸로 복소 멱급수가 모든 복소수 $z$에서 수렴하면 $A$는 위로 유계가 아니다.
4. (반지름 $0$) $A$가 위로 유계이고 $\rho = 0$인 것은 정확히 $a$가 아닌 모든 복소수 $z$에서 복소 멱급수가 발산할 때이다. 이때 복소 멱급수가 수렴하는 점은 $a$뿐이다.
5. (한 점에서의 판정)
   - (i) 복소 멱급수가 $z_1$에서 수렴하면 $|z_1 - a| \in A$이고, $A$가 위로 유계이면 $|z_1 - a| \le \rho$이다. 또 $|z - a| < |z_1 - a|$인 모든 $z$에서 복소 멱급수는 절대수렴한다.
   - (ii) 복소 멱급수가 $z_1$에서 발산하면 $A$는 위로 유계이고 $\rho \le |z_1 - a|$이다. 또 $|z - a| > |z_1 - a|$인 모든 $z$에서 $z$에서의 항은 유계가 아니고 복소 멱급수는 발산한다.
6. (반지름의 계산) 절댓값 계수의 실멱급수에 [[cauchy-hadamard-formula|코시–아다마르 공식]]과 [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]을 쓰면 다음이 나온다.
   - (i) $n$번째 항이 $\sqrt[n]{|c_n|}$인 실수열이 유계이고 그 상극한이 $L$이면, $L = 0$일 때 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이고, $0 < L$일 때 $A$는 위로 유계이고 $\rho = L^{-1}$이다. 그 실수열이 유계가 아니면 $A$는 위로 유계이고 $\rho = 0$이다.
   - (ii) 자연수 $N$이 있어 $N$ 이상인 모든 정수 $n$에서 $c_n \ne 0$이라 하고, $j$번째 항이 $q_j = |c_{j+N}|\,|c_{j+N-1}|^{-1}$인 실수열을 $(q_j)$라 하자. $(q_j)$가 $0$으로 수렴하면 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이다. $(q_j)$가 양수 $L$로 수렴하면 $A$는 위로 유계이고 $\rho = L^{-1}$이다. 모든 실수 $B$에 대하여 자연수 $J$가 있어 $J$ 이상인 모든 자연수 $j$에서 $B \le q_j$이면 $A$는 위로 유계이고 $\rho = 0$이다.
7. (복소 멱급수가 나타내는 함수)
   - (i) $A$가 위로 유계이고 $0 < \rho$이면 $D = B(a, \rho)$로 두고, 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수이면 $D = \mathbb{C}$로 둔다. $A$가 위로 유계이고 $\rho = 0$이면 $D$를 정하지 않는다.
   - (ii) (i)의 두 경우에 $D$의 모든 원소 $z$에서 복소 멱급수가 수렴하므로,
     $$
     f(z) = \sum_{n=0}^{\infty} c_n (z - a)^n
     $$
     으로 정한 함수 $f : D \to \mathbb{C}$가 있다. 이 $f$를 복소 멱급수가 $D$ 위에 **나타내는 함수**라 한다. $a \in D$이고 $f(a) = c_0$이다.
   - (iii) 복소 멱급수가 수렴하는 복소수 전체의 집합을 $E$라 하자. $A$가 위로 유계이고 $0 < \rho$이면 $B(a, \rho) \subseteq E \subseteq C(a, \rho)$이다. 모든 복소수에서 수렴하는 복소 멱급수이면 $E = \mathbb{C}$이다. $A$가 위로 유계이고 $\rho = 0$이면 $E = \{a\}$이다.
   - (iv) (i)의 두 경우에, 실수 $a_0$와 0부터 번호가 붙은 실수열 $(e_n)_{n \ge 0}$이 있어 $a = \iota(a_0)$, $c_n = \iota(e_n)$이면, 원래의 실멱급수([[complex-power-series|복소 멱급수]]의 (5))가 나타내는 함수를 $g : I \to \mathbb{R}$([[radius-of-convergence]]의 (7))라 할 때, $x \in I$인 것은 정확히 $\iota(x) \in D$일 때이고, $I$의 모든 원소 $x$에서 $f(\iota(x)) = \iota(g(x))$이다.
:::

:::english
Complex power series, their terms at $z$, convergence, divergence, absolute convergence, and sums, the real power series of absolute coefficients, the set $A$, the radius of convergence $\rho$, complex power series converging at every complex number, and real power series are those of the entry on complex power series. The radius of convergence of a real power series, power series converging at every real number, and the function represented by a real power series are those of the entry on the radius of convergence. Open balls $B(a, r)$ and closed balls $C(a, r)$ ($0 < r$) of the complex plane are those of item (3) of the entry on the metric of the complex plane. $n$th roots are those of the entry on $n$th roots, and the limit superior is that of the entry on limit superior and inferior.

Below, "the complex power series" is the complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$, and $z$, $z_1$ are complex numbers.

1. (Inside) If $A$ is bounded above and $|z - a| < \rho$, then the complex power series converges absolutely at $z$, and hence converges.
2. (Outside) If $A$ is bounded above and $|z - a| > \rho$, then the terms at $z$ are not bounded and the complex power series diverges at $z$.
3. (Complex power series converging at every complex number) If $A$ is not bounded above, then the complex power series converges absolutely, and hence converges, at every complex number $z$. Conversely, if the complex power series converges at every complex number $z$, then $A$ is not bounded above.
4. (Radius $0$) $A$ is bounded above with $\rho = 0$ exactly when the complex power series diverges at every complex number $z$ other than $a$. In that case $a$ is the only point at which the complex power series converges.
5. (Tests at one point)
   - (i) If the complex power series converges at $z_1$, then $|z_1 - a| \in A$, and if $A$ is bounded above, $|z_1 - a| \le \rho$. Moreover the complex power series converges absolutely at every $z$ with $|z - a| < |z_1 - a|$.
   - (ii) If the complex power series diverges at $z_1$, then $A$ is bounded above and $\rho \le |z_1 - a|$. Moreover, at every $z$ with $|z - a| > |z_1 - a|$ the terms at $z$ are not bounded and the complex power series diverges.
6. (Computing the radius) Applying the Cauchy–Hadamard formula and the ratio formula for the radius to the real power series of absolute coefficients gives the following.
   - (i) If the real sequence whose $n$th term is $\sqrt[n]{|c_n|}$ is bounded and its limit superior is $L$, then for $L = 0$ the complex power series is a complex power series converging at every complex number, and for $0 < L$, $A$ is bounded above and $\rho = L^{-1}$. If that real sequence is not bounded, then $A$ is bounded above and $\rho = 0$.
   - (ii) Suppose there is a natural number $N$ with $c_n \ne 0$ for every integer $n \ge N$, and let $(q_j)$ be the real sequence whose $j$th term is $q_j = |c_{j+N}|\,|c_{j+N-1}|^{-1}$. If $(q_j)$ converges to $0$, the complex power series is a complex power series converging at every complex number. If $(q_j)$ converges to a positive number $L$, then $A$ is bounded above and $\rho = L^{-1}$. If for every real number $B$ there is a natural number $J$ with $B \le q_j$ for every natural number $j \ge J$, then $A$ is bounded above and $\rho = 0$.
7. (The function represented by a complex power series)
   - (i) If $A$ is bounded above and $0 < \rho$, let $D = B(a, \rho)$; if the complex power series converges at every complex number, let $D = \mathbb{C}$. If $A$ is bounded above and $\rho = 0$, $D$ is not defined.
   - (ii) In the two cases of (i), the complex power series converges at every element $z$ of $D$, so there is a function $f : D \to \mathbb{C}$ defined by
     $$
     f(z) = \sum_{n=0}^{\infty} c_n (z - a)^n.
     $$
     This $f$ is called the **function represented** by the complex power series on $D$. Moreover $a \in D$ and $f(a) = c_0$.
   - (iii) Let $E$ be the set of all complex numbers at which the complex power series converges. If $A$ is bounded above and $0 < \rho$, then $B(a, \rho) \subseteq E \subseteq C(a, \rho)$. If the complex power series converges at every complex number, then $E = \mathbb{C}$. If $A$ is bounded above and $\rho = 0$, then $E = \{a\}$.
   - (iv) In the two cases of (i), if there are a real number $a_0$ and a real sequence $(e_n)_{n \ge 0}$ indexed from zero with $a = \iota(a_0)$ and $c_n = \iota(e_n)$, and $g : I \to \mathbb{R}$ is the function represented by the original real power series (item (5) of the entry on complex power series; item (7) of the entry on the radius of convergence), then $x \in I$ exactly when $\iota(x) \in D$, and $f(\iota(x)) = \iota(g(x))$ for every element $x$ of $I$.
:::

## 직관

[[complex-power-series|복소 멱급수]]의 (1)에 의해 $z$에서의 항의 절댓값은 중심에서의 거리 $|z - a|$에만 따릅니다. 그래서 급수와 멱급수 강의의 [[radius-of-convergence|수렴 반지름]]이 실수 $x$에 대해 말한 것, 곧 $|x - a| < \rho$이면 절대수렴하고 $|x - a| > \rho$이면 항이 유계가 아니라는 것을 $x$ 대신 $0$ 이상인 실수 $|z - a|$에 쓰면 그대로 복소수판이 됩니다. 실수판에서 열린구간 $(a - \rho, a + \rho)$였던 수렴 영역이 복소평면에서는 열린 공 $B(a, \rho)$, 곧 원판이 됩니다.

정원의 스프링클러에 견줄 수 있습니다. 물이 닿는지는 스프링클러에서 떨어진 거리로만 정해지고 방향은 상관없으므로 물이 닿는 곳은 원판입니다. 비유가 맞는 곳은 "거리만으로 정해진다"가 (1)의 항의 절댓값에 해당한다는 것이고, 어긋나는 곳은 경계의 원 위입니다. 원 위의 점에서는 항의 절댓값이 같아도 방향(계수와 $(z - a)^n$이 가리키는 방향)에 따라 수렴하기도 하고 발산하기도 할 수 있고, 이 정리는 원 위에 대해 아무것도 말하지 않습니다.

(5)는 한 점의 정보만으로 반지름을 어림하는 방법입니다. 한 점에서 수렴하면 그보다 중심에 가까운 모든 점에서 절대수렴하므로 반지름은 그 거리 이상이고, 한 점에서 발산하면 반지름은 그 거리 이하입니다. (6)은 반지름이 계수의 절댓값만으로 정해지므로 급수와 멱급수 강의의 두 공식을 $|c_n|$에 그대로 쓸 수 있다는 것입니다.

## 증명

:::idea
$z$마다 $x = |z - a|$로 두면 [[complex-power-series|복소 멱급수]]의 (1), (3), (4)가 복소 멱급수의 $z$에서의 절대수렴과 항의 유계를 절댓값 계수의 실멱급수의 $x$에서의 것으로 바꾼다. 그 실멱급수에 [[radius-of-convergence|수렴 반지름]]의 번호를 쓴다.
:::

:::hint
(3)의 거꾸로는 $0$ 이상인 실수 $r$마다 $z = a + r$을 보면 $|z - a| = r$이므로, 그 점에서의 수렴이 $r \in A$를 준다는 것을 씁니다.
:::

:::hint
(4)의 거꾸로에서 $0 < \rho$이면 $z = a + \rho/2$가 (1)에 의해 수렴하는 점이 됩니다.
:::

:::proof
"복소 멱급수 (n)"은 [[complex-power-series]], "반지름 (n)"은 [[radius-of-convergence]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "복소평면의 거리 (n)"은 [[complex-plane-as-metric-space]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (n)"은 [[order-properties-of-reals]], "절댓값 (n)"은 [[absolute-value]]의 번호이다. 아래에서 반지름의 번호는 모두 절댓값 계수의 실멱급수(중심 $0$, 계수 $(|c_n|)_{n \ge 0}$)에 쓰고, 그 실멱급수의 $A$와 수렴 반지름은 정의에 의해 복소 멱급수의 것이다.

**준비.** 복소 절댓값 (1)에 의해 $x = |z - a|$는 $0$ 이상인 실수이고, 절댓값 (1)에 의해 $|x - 0| = x$이다. $0$ 이상인 실수 $r$에 대하여 $w = a + r$(곧 $a + \iota(r)$)이면 $w - a = \iota(r)$이므로 복소 절댓값 (5)에 의해 $|w - a| = |r| = r$이다.

**1의 증명.** $|x - 0| = x < \rho$이므로 반지름 (2)에 의해 실멱급수는 $x$에서 절대수렴하고 수렴한다. 복소 멱급수 (3)의 (i)에 의해 복소 멱급수는 $z$에서 절대수렴하고 수렴한다.

**2의 증명.** $|x - 0| = x > \rho$이므로 반지름 (3)에 의해 실멱급수의 $x$에서의 항 $(|c_n|\,x^n)_{n \ge 0}$은 유계가 아니다. 곧 $x \notin A$이고, 복소 멱급수 (4)에 의해 $z$에서의 항은 유계가 아니다. 복소 멱급수 (3)의 (ii)에 의해 복소 멱급수는 $z$에서 발산한다.

**3의 증명.** $A$가 위로 유계가 아니면 반지름 (4)에 의해 실멱급수는 모든 실수에서, 특히 $x$에서 수렴하므로 복소 멱급수 (3)의 (i)에 의해 복소 멱급수는 $z$에서 절대수렴하고 수렴한다. 거꾸로 복소 멱급수가 모든 복소수에서 수렴한다고 하자. $0$ 이상인 실수 $r$마다 준비의 $w = a + r$에서 수렴하므로 복소 멱급수 (3)의 (ii)에 의해 $r = |w - a| \in A$이다. $A$에 상계 $M$이 있다면 $r = |M| + 1$은 $0$ 이상이고(절댓값 (2), 순서 성질 (5)의 (ii)) $A$의 원소이므로 $|M| + 1 \le M \le |M|$(절댓값 (6))이 되어 $1 \le 0$이고, 순서 성질 (5)의 (ii)에 어긋난다. 따라서 $A$는 위로 유계가 아니다.

**5의 증명.** (i) 복소 멱급수 (3)의 (ii)에 의해 $|z_1 - a| \in A$이고, $A$가 위로 유계이면 상한의 정의에 의해 $|z_1 - a| \le \rho$이다. $|z - a| < |z_1 - a|$라 하자. 그러면 $0 \le |z - a| < |z_1 - a|$이므로 $|z_1 - a|$는 양수이다. $A$가 위로 유계가 아니면 (3)에 의해 결론이 나온다. $A$가 위로 유계이면 $|z - a| < |z_1 - a| \le \rho$이므로 (1)에 의해 결론이 나온다.

(ii) $A$가 위로 유계가 아니면 (3)에 의해 복소 멱급수는 $z_1$에서 수렴하므로 가정에 어긋난다. 따라서 $A$는 위로 유계이다. $|z_1 - a| < \rho$이면 (1)에 의해 $z_1$에서 수렴하므로 가정에 어긋나고, 순서 성질 (1)의 (iii)에 의해 $\rho \le |z_1 - a|$이다. $|z - a| > |z_1 - a|$이면 순서 성질 (1)의 (v)에 의해 $|z - a| > \rho$이므로 (2)에 의해 결론이 나온다.

**4의 증명.** $A$가 위로 유계이고 $\rho = 0$이라 하자. $z \ne a$이면 [[complex-field|복소수체]] (1)에 의해 $z - a \ne 0$이고 복소 절댓값 (1)에 의해 $|z - a| > 0 = \rho$이므로 (2)에 의해 발산한다. 거꾸로 $a$가 아닌 모든 $z$에서 발산한다고 하자. 준비의 $w = a + 1$은 $|w - a| = 1 > 0$이라 $a$가 아니므로 발산하고, (5)의 (ii)에 의해 $A$는 위로 유계이다. 반지름 (1)의 (iii)에 의해 $0 \le \rho$이다. $0 < \rho$라면 순서 성질 (8)에 의해 $0 < \rho/2 < \rho$이고, 준비의 $w = a + \rho/2$는 $|w - a| = \rho/2 < \rho$이므로 (1)에 의해 수렴하는데 $w \ne a$이므로 가정에 어긋난다. 따라서 $\rho = 0$이다. 이때 복소 멱급수 (2)에 의해 $a$에서는 수렴하므로 수렴하는 점은 $a$뿐이다.

**6의 증명.** (i) 절댓값 계수의 실멱급수의 계수 $|c_n|$은 $0$ 이상이므로 절댓값 (1)에 의해 $\bigl||c_n|\bigr| = |c_n|$이고, [[cauchy-hadamard-formula|코시–아다마르 공식]]의 진술의 수열 $\bigl(\sqrt[n]{||c_n||}\bigr)$은 $n$번째 항이 $\sqrt[n]{|c_n|}$인 실수열과 같다. 그 항목의 (1)과 (2)가 결론이다. 모든 실수에서 수렴하는 멱급수인 것은 정의에 의해 모든 복소수에서 수렴하는 복소 멱급수인 것이다.

(ii) 복소 절댓값 (1)에 의해 $c_n \ne 0$인 것은 정확히 $|c_n| \ne 0$일 때이고, 위와 같이 $\bigl||c_n|\bigr| = |c_n|$이므로 [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]의 가정과 수열 $(q_j)$는 진술의 것과 같다. 그 항목의 (1)–(3)이 결론이다.

**7의 증명.** (i)–(ii) $D = B(a, \rho)$이면 복소평면의 거리 (3)에 의해 $D$의 원소 $z$는 $|z - a| < \rho$이므로 (1)에 의해 수렴하고, $D = \mathbb{C}$이면 (3)에 의해 수렴한다. 따라서 [[complex-series|복소 급수]]의 합의 기호로 $z$마다 복소수 $f(z)$ 하나가 정해지고, 이것이 함수 $f : D \to \mathbb{C}$를 정한다. $|a - a| = 0 < \rho$이므로 $a \in D$이고, 복소 멱급수 (2)에 의해 $f(a) = c_0$이다.

(iii) $0 < \rho$인 경우: (1)에 의해 $B(a, \rho) \subseteq E$이다. $z \in E$이면 (2)의 대우에 의해 $|z - a| > \rho$가 아니므로 순서 성질 (1)의 (iii)에 의해 $|z - a| \le \rho$이고, 복소평면의 거리 (3)에 의해 $z \in C(a, \rho)$이다. 모든 복소수에서 수렴하는 경우는 (3)이고, $\rho = 0$인 경우는 (4)이다.

(iv) 복소 멱급수 (5)의 (iii)에 의해 두 멱급수의 $A$는 같으므로, 둘 다 위로 유계가 아니거나 둘 다 위로 유계이고 반지름이 같다. 반지름 (7)의 (i)에 의해 $I$는 $\{x \in \mathbb{R} : |x - a_0| < \rho\}$이거나 $\mathbb{R}$이다. [[complex-field|복소수체]] (2)와 복소 절댓값 (5)에 의해 $|\iota(x) - a| = |\iota(x - a_0)| = |x - a_0|$이므로, 앞의 경우 $x \in I$인 것은 정확히 $\iota(x) \in B(a, \rho) = D$일 때이고, 뒤의 경우 둘 다 늘 참이다. $x \in I$이면 복소 멱급수 (5)의 (ii)에 의해 $f(\iota(x)) = \sum_{n=0}^{\infty} c_n (\iota(x) - a)^n = \iota\bigl(\sum_{n=0}^{\infty} e_n (x - a_0)^n\bigr) = \iota(g(x))$이다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점의 수렴과 발산으로 반지름을 정하는 예]
중심이 $0$이고 계수가 $c_n = (1 + i)^n$인 복소 멱급수를 봅니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)에 의해 $c_n z^n = \bigl((1 + i)z\bigr)^n$이므로, $z$에서 이것은 공비가 $(1 + i)z$인 등비급수입니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (3)에 의해 $|(1 + i)z| = \sqrt{2}\,|z|$이고, [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)에 의해 $\sqrt{2}\,|z| < 1$이면 수렴하고 $\sqrt{2}\,|z| \ge 1$이면 발산합니다. $z_1 = 1/2$에서는 $\sqrt{2}/2 < 1$이라 수렴하므로 (5)의 (i)에 의해 $1/2 \le \rho$이고, $z_1 = 1$에서는 발산하므로 (5)의 (ii)에 의해 $\rho \le 1$입니다. 한 점씩 보면 반지름이 $1/2$과 $1$ 사이에 있다는 것만 나옵니다. (6)의 (ii)를 $N = 1$에 쓰면 $q_j = |c_{j+1}|\,|c_j|^{-1} = (\sqrt{2})^{j+1} \bigl((\sqrt{2})^{j}\bigr)^{-1} = \sqrt{2}$인 상수 수열이므로 [[basic-limits]]의 (1)에 의해 $\sqrt{2}$로 수렴하고, $\rho = (\sqrt{2})^{-1}$입니다. 실제로 $1/2 < (\sqrt{2})^{-1} < 1$입니다.
:::

:::counterexample[원 위의 점에서는 정리가 수렴도 발산도 말하지 않는 예]
계수가 모두 $1$이고 중심이 $0$인 복소 멱급수는 수렴 반지름이 $1$이고([[power-series-examples|멱급수의 예]]의 (1)과 [[complex-power-series|복소 멱급수]]의 (5)의 (iii)), $|z| = 1$인 모든 점에서 항의 절댓값이 $1$이라 발산합니다. 중심이 $0$이고 $c_0 = 0$, $n \ge 1$에서 $c_n = (n^2)^{-1}$인 복소 멱급수도 같은 방법으로 반지름이 $1$이지만([[power-series-examples|멱급수의 예]]의 (4)), $|z| = 1$이면 항의 절댓값이 $(n^2)^{-1}$이고 그 급수가 [[comparison-test|비교 판정법]]의 (6)과 [[series-indexed-from-zero]]의 (8)($0$번째 항은 $0$)에 의해 수렴하므로 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 정의에 의해 절대수렴합니다. 반지름이 같아도 원 위의 점에서의 수렴은 다를 수 있으므로, (1)과 (2)는 $|z - a| = \rho$인 점을 말하지 않습니다.
:::

## 확인 질문

:::check[복소 멱급수가 $z_1 = 3i$에서 수렴하고 $z_2 = 4$에서 발산한다면(중심 $0$), 수렴 반지름에 대해 무엇을 알 수 있는가?]
$A$가 위로 유계이고 $3 \le \rho \le 4$입니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|3i| = 3$, $|4| = 4$이고, (5)의 (i)에 의해 $3 \le \rho$, (5)의 (ii)에 의해 $A$는 위로 유계이고 $\rho \le 4$입니다. 또 $|z| < 3$인 모든 점에서 절대수렴하고 $|z| > 4$인 모든 점에서 발산합니다.
:::

:::check[복소 멱급수의 계수 $c_n$을 모두 켤레 $\overline{c_n}$으로 바꾸면 수렴 반지름은 어떻게 되는가?]
바뀌지 않습니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $|\overline{c_n}| = |c_n|$이므로 절댓값 계수의 실멱급수가 같고, $A$도 같습니다. 모든 복소수에서 수렴하는지도 같습니다.
:::
