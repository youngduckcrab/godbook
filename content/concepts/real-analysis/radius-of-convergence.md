---
title: 수렴 반지름
title_en: Radius of Convergence
aliases: [수렴반지름, 모든 실수에서 수렴하는 멱급수, 멱급수가 나타내는 함수, radius of convergence, power series converging on all of R]
kind: definition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 멱급수의 수렴 반지름 ρ 를 |c_n| rⁿ 이 유계인 0 이상의 r 의 집합 A 의 상한으로 정하고, A 가 위로 유계가 아니면 모든 실수에서 수렴하는 멱급수라 한다. 중심에서 거리가 ρ 보다 작으면 절대수렴하고 크면 발산함, 반지름 0 인 경우, 수렴·발산하는 점으로 반지름을 정하는 판정, 멱급수가 열린구간이나 ℝ 위에 나타내는 함수를 진술한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, upper-bound-and-supremum, least-upper-bound-property, supremum-and-arithmetic, interval, real-valued-function, power-of-a-real-number, geometric-sequence-limit, terms-of-convergent-series-tend-to-zero, series-indexed-from-zero, power-series, power-series-comparison-lemma]
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.5절 Power series, Proposition 2.6.10 과 그 증명 (p.107–108), Proposition 2.6.11 (p.108), 같은 절 Proposition 2.6.12 뒤 문단 (p.109), 6.2.4절 Convergence of power series, Proposition 6.2.11 의 증명과 Corollary 6.2.12 (p.240–241)
    checked: original
    note: "출처 Proposition 2.6.10(p.107)은 convergent 한 멱급수가 모든 x ∈ ℝ 에서 절대수렴하거나, 어떤 수 ρ 가 있어 (x_0 − ρ, x_0 + ρ) 에서 절대수렴하고 x < x_0 − ρ 또는 x > x_0 + ρ 에서 발산한다고 하고, 이 ρ 를 수렴 반지름이라 부르며, 모든 x 에서 수렴하면 ρ = ∞, divergent 이면 ρ = 0 으로 쓰고, 끝점에서는 이 명제가 아무것도 말하지 않는다고 적는다. 출처의 증명(p.107–108)은 R = limsup |a_n|^{1/n} 에 근 판정법을 쓰고 ρ = 1/R 로 둔다. Proposition 2.6.11(p.108)은 이것을 R 로 다시 진술한다. 이 사이트는 상극한을 유계인 수열에만 정의했고 ∞ 를 수로 쓰지 않으므로, 수렴 반지름을 집합 A = {r ≥ 0 : (|c_n| rⁿ) 이 유계} 의 상한으로 정의하고, A 가 위로 유계가 아니면 ρ = ∞ 대신 '모든 실수에서 수렴하는 멱급수'라 한다. 그래서 (2)–(4)는 근 판정법이 아니라 power-series-comparison-lemma 로 증명했다. (7)의 I 는 Proposition 6.2.11 의 증명과 Corollary 6.2.12(p.241)의 'ρ < ∞ 이면 I = (a − ρ, a + ρ), ρ = ∞ 이면 I = ℝ' 와 같은 것이고, 이 사이트는 ∞ 를 쓰지 않는다. 출처의 'convergent power series'(x ≠ x_0 인 점 하나에서 수렴)는 쓰지 않는다. 그런 멱급수는 (5)에 의해 정확히 ρ > 0 이거나 모든 실수에서 수렴하는 멱급수이다. 예시 '계수가 모두 1 인 멱급수'는 p.109 의 등비급수 문단(x ∈ (−1, 1) 에서 1/(1 − x) = Σ xⁿ, |x| > 1 에서 발산)과 같은 대상이다. 확인 질문 '중심 $0$인 멱급수가 $x = 3$에서 수렴하고 $x = -4$에서 발산하면 수렴 반지름에 대해 무엇을 말할 수 있는가?'는 Exercise 2.6.6 a)(p.110, x = 1 에서 수렴할 때 반지름에 대해 무엇을 말할 수 있는가)와 같은 발상이다. 확인 질문 '중심 $0$, 계수 $4^n$인 멱급수의 수렴 반지름은 얼마인가?'는 Exercise 2.6.5 a)(p.110)의 Σ 2ⁿ xⁿ 과 같은 꼴(계수가 kⁿ)이다."
  - ref: lebl-basic-analysis-2
    loc: 11.3.2절 Convergence of power series, Proposition 11.3.1 과 그 증명 (p.154–155), Example 11.3.2 (p.155)
    checked: original
    note: "출처 II 권 Proposition 11.3.1(p.154)은 복소 멱급수에 대해 ρ ∈ [0, ∞] 가 있어 (i) ρ = 0 이면 z ≠ a 인 모든 점에서 발산하고 (ii) ρ = ∞ 이면 모든 z 에서 절대수렴하며 (iii) 0 < ρ < ∞ 이면 B(a, ρ) 에서 절대수렴하고 |z − a| > ρ 에서 발산한다고 한다. 증명(p.154–155)은 I 권의 실수판에 기대어 R = limsup ⁿ√|c_n| 로 하고, |z − a| > ρ 에서는 '급수의 항이 0 으로 가지 않는다'고 덧붙인다. 이 항목의 (3)이 '항이 유계가 아니다'로 그것보다 조금 더 말한다. (5)는 (i)의 실수판과 그 역이다. 증명 뒤 문단(p.155)의 '수렴 반지름이 어떤 수 이상임을 보이려면 어떤 점에서 수렴함을 보이면 된다'는 (6)의 (iv)의 앞 문장과 같은 것이다. Example 11.3.2(p.155)는 Σ zⁿ 의 수렴 반지름이 1 이라고 한다 — 예시 '계수가 모두 1 인 멱급수'와 같은 대상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반지름의 sup 정의와 판정 (6)의 경계 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·발산·절대수렴과 합, 0부터 번호가 붙은 수열의 유계는 [[power-series]]의 것이다. 상계, 위로 유계, 상한 $\sup$은 [[upper-bound-and-supremum]], 구간과 열린구간 $(a, b)$, 닫힌구간 $[a, b]$는 [[interval]], 실함수와 값으로 정한 함수는 [[real-valued-function]]의 것이다. 거듭제곱은 [[power-of-a-real-number]], 절댓값은 [[absolute-value]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자. $0 \le r$인 실수 $r$마다 $n$에서의 값이 $|c_n|\, r^n$인 0부터 번호가 붙은 수열이 있다. 이 항목에서
$$
\begin{aligned}
A = \bigl\{ r \in \mathbb{R} :\ & 0 \le r \text{ 이고} \\
& (|c_n|\, r^n)_{n \ge 0} \text{ 이 유계} \bigr\}
\end{aligned}
$$
로 쓴다. 아래 (1)에 의해 $0 \in A$이므로 $A$는 공집합이 아니다.

**수렴 반지름.** $A$가 위로 유계이면 [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $\sup A$가 있고, [[upper-bound-and-supremum]]의 (1)에 의해 실수 하나로 정해진다. 이 수 $\rho = \sup A$를 멱급수의 **수렴 반지름**(radius of convergence)이라 한다. $A$가 위로 유계가 아니면 멱급수를 **모든 실수에서 수렴하는 멱급수**(power series converging at every real number)라 하고, 수렴 반지름을 정하지 않는다. 이 사이트는 이 경우에 $\infty$를 수렴 반지름으로 쓰지 않는다. $A$가 위로 유계이고 $|x - a| = \rho$인 점 $x$에서는 아래 (2), (3)이 수렴도 발산도 말하지 않는다.

다음이 성립한다. 아래에서 $x$, $x_1$은 실수이다.

1. ($A$의 모양)
   - (i) $0 \in A$이다.
   - (ii) $r \in A$이고 $u$가 $0 \le u \le r$인 실수이면 $u \in A$이다.
   - (iii) $A$가 위로 유계이면 $0 \le \rho$이고, $A$의 모든 원소는 $\rho$ 이하이며, $0 \le r < \rho$인 모든 실수 $r$은 $A$의 원소이다.
   - (iv) $A$가 위로 유계가 아니면 $0$ 이상인 모든 실수가 $A$의 원소이다.
2. (안쪽) $A$가 위로 유계이고 $|x - a| < \rho$이면 멱급수는 $x$에서 절대수렴하고, 따라서 수렴한다.
3. (바깥쪽) $A$가 위로 유계이고 $|x - a| > \rho$이면 $x$에서의 항은 유계가 아니고 멱급수는 $x$에서 발산한다.
4. (모든 실수에서 수렴하는 멱급수) $A$가 위로 유계가 아니면 멱급수는 모든 실수 $x$에서 절대수렴하고, 따라서 수렴한다. 거꾸로 멱급수가 모든 실수 $x$에서 수렴하면 $A$는 위로 유계가 아니다. 곧 멱급수가 모든 실수에서 수렴하는 멱급수인 것은 정확히 모든 실수 $x$에서 수렴할 때이다.
5. (반지름 $0$) $A$가 위로 유계이고 $\rho = 0$인 것은 정확히 $a$가 아닌 모든 실수 $x$에서 멱급수가 발산할 때이다. 이때 멱급수가 수렴하는 점은 $a$뿐이다. 따라서 멱급수가 $a$가 아닌 어떤 점에서 수렴하는 것은 정확히 $0 < \rho$이거나 모든 실수에서 수렴하는 멱급수일 때이다.
6. (반지름의 판정) $\rho'$을 $0$ 이상인 실수라 하자.
   - (i) $|x - a| < \rho'$인 모든 실수 $x$에서 멱급수가 수렴하고 $|x - a| > \rho'$인 모든 실수 $x$에서 발산하면, $A$는 위로 유계이고 $\rho = \rho'$이다.
   - (ii) $|x - a| < \rho'$인 모든 실수 $x$에서 멱급수가 수렴하면, 멱급수는 모든 실수에서 수렴하는 멱급수이거나, $A$가 위로 유계이고 $\rho' \le \rho$이다.
   - (iii) $|x - a| > \rho'$인 모든 실수 $x$에서 멱급수가 발산하면, $A$는 위로 유계이고 $\rho \le \rho'$이다.
   - (iv) (한 점) 멱급수가 $x_1$에서 수렴하면 $|x_1 - a| \in A$이고, 따라서 $A$가 위로 유계이면 $|x_1 - a| \le \rho$이다. 멱급수가 $x_1$에서 발산하면 $A$는 위로 유계이고 $\rho \le |x_1 - a|$이다.
7. (멱급수가 나타내는 함수)
   - (i) $A$가 위로 유계이고 $0 < \rho$이면 $I = \{x \in \mathbb{R} : |x - a| < \rho\}$로 둔다. $I$는 열린구간 $(a - \rho, a + \rho)$와 같은 집합이고 구간이다. 멱급수가 모든 실수에서 수렴하는 멱급수이면 $I = \mathbb{R}$로 둔다.
   - (ii) (i)의 두 경우에 $I$의 모든 원소 $x$에서 멱급수가 수렴하므로,
     $$
     f(x) = \sum_{n=0}^{\infty} c_n (x - a)^n
     $$
     으로 정한 실함수 $f : I \to \mathbb{R}$가 있다. 이 $f$를 멱급수가 $I$ 위에 **나타내는 함수**(the function represented by the power series)라 한다. $a \in I$이고 $f(a) = c_0$이다.
   - (iii) 멱급수가 수렴하는 실수 전체의 집합을 $C$라 하자. $A$가 위로 유계이고 $0 < \rho$이면 $I \subseteq C \subseteq [a - \rho, a + \rho]$이다. 모든 실수에서 수렴하는 멱급수이면 $C = I = \mathbb{R}$이다. $A$가 위로 유계이고 $\rho = 0$이면 $C = \{a\}$이다.
:::

:::english
Power series, the terms at $x$, convergence, divergence and absolute convergence at $x$ and the sum there, and boundedness of sequences indexed from zero are as in the entry on power series. Upper bounds, being bounded above and the supremum $\sup$ are as in the entry on upper bounds and suprema; intervals, the open interval $(a, b)$ and the closed interval $[a, b]$ are as in the entry on intervals; real-valued functions and functions defined by their values are as in the entry on real-valued functions. Powers and absolute values are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$. For every real $r \ge 0$ there is a sequence indexed from zero with values $|c_n|\, r^n$. In this entry we write
$$
\begin{aligned}
A = \bigl\{ r \in \mathbb{R} :\ & 0 \le r \text{ and} \\
& (|c_n|\, r^n)_{n \ge 0} \text{ is bounded} \bigr\}.
\end{aligned}
$$
By (1) below, $0 \in A$, so $A$ is nonempty.

**Radius of convergence.** If $A$ is bounded above, then $\sup A$ exists by the least-upper-bound property (U) and is a single real number. This number $\rho = \sup A$ is called the **radius of convergence** of the power series. If $A$ is not bounded above, the power series is called a **power series converging at every real number**, and no radius of convergence is defined. This site does not use $\infty$ as a radius of convergence in this case. If $A$ is bounded above and $|x - a| = \rho$, then (2) and (3) below say nothing about convergence or divergence at $x$.

The following hold. Below, $x$ and $x_1$ are real numbers.

1. (Shape of $A$)
   - (i) $0 \in A$.
   - (ii) If $r \in A$ and $u$ is a real number with $0 \le u \le r$, then $u \in A$.
   - (iii) If $A$ is bounded above, then $0 \le \rho$, every element of $A$ is at most $\rho$, and every real $r$ with $0 \le r < \rho$ belongs to $A$.
   - (iv) If $A$ is not bounded above, then every real number $\ge 0$ belongs to $A$.
2. (Inside) If $A$ is bounded above and $|x - a| < \rho$, then the power series converges absolutely at $x$, hence converges there.
3. (Outside) If $A$ is bounded above and $|x - a| > \rho$, then the terms at $x$ are unbounded and the power series diverges at $x$.
4. (Power series converging at every real number) If $A$ is not bounded above, then the power series converges absolutely, hence converges, at every real $x$. Conversely, if the power series converges at every real $x$, then $A$ is not bounded above. Thus the power series is a power series converging at every real number exactly when it converges at every real $x$.
5. (Radius $0$) $A$ is bounded above with $\rho = 0$ exactly when the power series diverges at every real $x \ne a$. In that case $a$ is the only point where it converges. Hence the power series converges at some point other than $a$ exactly when $0 < \rho$ or it is a power series converging at every real number.
6. (Determining the radius) Let $\rho'$ be a real number with $\rho' \ge 0$.
   - (i) If the power series converges at every real $x$ with $|x - a| < \rho'$ and diverges at every real $x$ with $|x - a| > \rho'$, then $A$ is bounded above and $\rho = \rho'$.
   - (ii) If the power series converges at every real $x$ with $|x - a| < \rho'$, then either it is a power series converging at every real number, or $A$ is bounded above and $\rho' \le \rho$.
   - (iii) If the power series diverges at every real $x$ with $|x - a| > \rho'$, then $A$ is bounded above and $\rho \le \rho'$.
   - (iv) (One point) If the power series converges at $x_1$, then $|x_1 - a| \in A$; hence if $A$ is bounded above, $|x_1 - a| \le \rho$. If the power series diverges at $x_1$, then $A$ is bounded above and $\rho \le |x_1 - a|$.
7. (The function represented by the power series)
   - (i) If $A$ is bounded above and $0 < \rho$, put $I = \{x \in \mathbb{R} : |x - a| < \rho\}$. Then $I$ is the same set as the open interval $(a - \rho, a + \rho)$ and is an interval. If the power series converges at every real number, put $I = \mathbb{R}$.
   - (ii) In both cases of (i) the power series converges at every element $x$ of $I$, so there is a real-valued function $f : I \to \mathbb{R}$ defined by
     $$
     f(x) = \sum_{n=0}^{\infty} c_n (x - a)^n.
     $$
     This $f$ is called the **function represented by the power series** on $I$. Moreover $a \in I$ and $f(a) = c_0$.
   - (iii) Let $C$ be the set of all real numbers at which the power series converges. If $A$ is bounded above and $0 < \rho$, then $I \subseteq C \subseteq [a - \rho, a + \rho]$. If the power series converges at every real number, then $C = I = \mathbb{R}$. If $A$ is bounded above and $\rho = 0$, then $C = \{a\}$.
:::

## 직관

[[power-series-comparison-lemma|멱급수의 비교 보조정리]]는 "중심에서 거리 $r$인 곳에서 항 $|c_n|\, r^n$이 유계이면 그보다 안쪽에서는 절대수렴한다"는 것이었습니다. 그래서 항이 유계인 거리 $r$을 모두 모은 집합 $A$를 생각합니다. $A$는 $0$을 원소로 갖고 빈틈이 없으므로((1)의 (ii)), 위로 유계이면 $0$부터 그 끝 $\rho = \sup A$까지 이어집니다. 그러면 중심에서 거리가 $\rho$보다 작은 점에서는 수렴하고, $\rho$보다 큰 점에서는 항이 유계가 아니어서 발산합니다. $0 < \rho$이면 수렴하는 곳과 발산하는 곳의 경계가 중심에서 거리 $\rho$인 두 점 $a - \rho$, $a + \rho$입니다.

비유하자면 불을 피운 모닥불 둘레의 따뜻한 원입니다. 모닥불(중심)에서 거리 $\rho$보다 가까우면 늘 따뜻하고(수렴), 그보다 멀면 늘 춥습니다(발산). 정의의 $A$가 "견딜 만한 거리"의 모임이고 $\rho$가 그 끝입니다. 비유가 맞지 않는 곳은 경계입니다. 모닥불의 경계에서는 온기가 차츰 바뀌지만, 이 정의는 거리가 정확히 $\rho$인 두 점에서 수렴하는지 발산하는지에 대해 아무것도 말하지 않습니다. 또 모닥불에서 아무리 멀어도 따뜻한 경우(모든 실수에서 수렴)와, 모닥불 자리 말고는 모두 추운 경우($\rho = 0$)도 있습니다.

(6)은 반지름을 구하는 데 쓰는 꼴입니다. 집합 $A$를 직접 다루지 않고, 어떤 수 $\rho'$ 안쪽에서 수렴하고 바깥쪽에서 발산함을 보이면 그 수가 반지름입니다. 한쪽만 보이면 반지름의 한쪽 어림만 얻습니다(아래 반례).

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. [[power-series]]의 (2)에 의해 실수 $x$와 $0$ 이상인 모든 $n$에서 $|c_n (x - a)^n| = |c_n|\,|x - a|^n$이다. 그래서 $x$에서의 항이 유계인 것은 정확히 0부터 번호가 붙은 수열 $(|c_n|\,|x - a|^n)_{n \ge 0}$이 유계일 때이고(두 수열의 $n$에서의 값의 절댓값이 같다), [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |x - a|$이므로 이것은 정확히 $|x - a| \in A$일 때이다. 아래에서 이것을 "항과 $A$"라 부른다.

**1의 증명.** (i) $r = 0$이면 [[power-of-a-real-number|실수의 거듭제곱]]의 정의와 (2)의 (iv)에 의해 $0^0 = 1$이고 자연수 $n$에서 $0^n = 0$이므로, $|c_n|\, 0^n$은 $n = 0$에서 $|c_0|$이고 자연수 $n$에서 $0$이다((K4), (K9)). 따라서 $0$ 이상인 모든 $n$에서 $|c_n|\, 0^n \le |c_0|$이고(절댓값의 (2)), $0 \in A$이다.

(ii) $r \in A$이면 $0$ 이상인 모든 $n$에서 $|c_n|\, r^n \le B$인 실수 $B$가 있다. $0 \le u \le r$이면 거듭제곱의 (6)의 (ii)에 의해 $u^n \le r^n$이고, $0 \le |c_n|$이므로 순서 성질 (4)의 (iii)에 의해 $|c_n|\, u^n \le |c_n|\, r^n \le B$이다. 거듭제곱의 (6)의 (i)과 순서 성질 (4)의 (iv)에 의해 $0 \le |c_n|\, u^n$이므로, [[power-series]]의 (1)에 의해 $(|c_n|\, u^n)_{n \ge 0}$은 유계이고 $u \in A$이다.

(iii) $\rho$는 $A$의 상계이므로 $A$의 모든 원소는 $\rho$ 이하이고, (i)에 의해 $0 \le \rho$이다. $0 \le r < \rho$이면 $\varepsilon = \rho - r$은 양수이고(순서 성질 (3)의 (i)), [[supremum-and-arithmetic|상한과 연산]]의 (6)에 의해 $\rho - \varepsilon < u$인 $u \in A$가 있다. $\rho - \varepsilon = r$이므로 $r < u$이고, (ii)에 의해 $r \in A$이다.

(iv) $0 \le r$이라 하자. $A$가 위로 유계가 아니므로 $r$은 $A$의 상계가 아니고, 순서 성질 (1)의 (iii)에 의해 $r < u$인 $u \in A$가 있다. (ii)에 의해 $r \in A$이다.

**2의 증명.** $s = (|x - a| + \rho)/2$로 두면 순서 성질 (8)에 의해 $|x - a| < s < \rho$이다. 절댓값의 (2)와 순서 성질 (1)의 (v)에 의해 $0 < s$이고, (1)의 (iii)에 의해 $s \in A$이므로 $0$ 이상인 모든 $n$에서 $|c_n|\, s^n \le M$인 실수 $M$이 있다. [[power-series-comparison-lemma|멱급수의 비교 보조정리]]의 (1)을 이 $s$, $M$에 쓰면 $|x - a| < s$이므로 멱급수는 $x$에서 절대수렴하고 수렴한다.

**3의 증명.** $|x - a| > \rho$이면 (1)의 (iii)에 의해 $|x - a| \notin A$이다(순서 성질 (1)의 (i)). 항과 $A$에 의해 $x$에서의 항은 유계가 아니고, [[power-series]]의 (5)에 의해 멱급수는 $x$에서 발산한다.

**4의 증명.** $A$가 위로 유계가 아니라 하자. 실수 $x$에 대하여 $s = |x - a| + 1$로 두면 순서 성질 (5)의 (ii)와 (2)의 (ii)에 의해 $|x - a| < s$이고, 절댓값의 (2)와 순서 성질 (1)의 (v)에 의해 $0 < s$이며, (1)의 (iv)에 의해 $s \in A$이다. 2의 증명과 같이 비교 보조정리의 (1)에 의해 멱급수는 $x$에서 절대수렴하고 수렴한다.

거꾸로 멱급수가 모든 실수에서 수렴한다고 하자. $A$가 위로 유계라면 $x = a + (\rho + 1)$에서 (K2), (K12)의 (v)에 의해 $x - a = \rho + 1$이고, $0 < \rho + 1$이므로 절댓값의 (1)에 의해 $|x - a| = \rho + 1 > \rho$이다. (3)에 의해 멱급수는 $x$에서 발산하므로 가정과 모순이다. 따라서 $A$는 위로 유계가 아니다.

**5의 증명.** $A$가 위로 유계이고 $\rho = 0$이라 하자. $x \ne a$이면 (K12)의 (v)와 절댓값의 (2)에 의해 $|x - a| > 0 = \rho$이므로 (3)에 의해 멱급수는 $x$에서 발산한다.

거꾸로 $a$가 아닌 모든 $x$에서 멱급수가 발산한다고 하자. $x = a + 1 \ne a$((K4)와 순서 성질 (5)의 (ii))에서 발산하므로 (4)에 의해 $A$는 위로 유계이다. $0 < \rho$라면 $x = a + \rho/2$에서 순서 성질 (8)에 의해 $|x - a| = \rho/2$는 $0 < \rho/2 < \rho$를 만족하므로 $x \ne a$이고, (2)에 의해 멱급수는 $x$에서 수렴하여 가정과 모순이다. 따라서 순서 성질 (1)의 (iii)에 의해 $\rho \le 0$이고, (1)의 (iii)의 $0 \le \rho$와 순서 성질 (1)의 (ii)에 의해 $\rho = 0$이다.

이때 [[power-series]]의 (3)에 의해 멱급수는 $a$에서 수렴하므로 수렴하는 점은 $a$뿐이다. 마지막 문장은 앞의 두 문장을 합친 것의 대우이다. 멱급수가 $a$가 아닌 점에서 수렴하면 "$A$가 위로 유계이고 $\rho = 0$"이 아니므로, $A$가 위로 유계가 아니거나 $A$가 위로 유계이고 $\rho \ne 0$이며 이때 $0 \le \rho$이므로 $0 < \rho$이다. 거꾸로 $0 < \rho$이면 $x = a + \rho/2$에서 (2)에 의해 수렴하고, 모든 실수에서 수렴하는 멱급수이면 (4)에 의해 $a + 1$에서 수렴한다.

**6의 증명.** (iii) $r \in A$라 하자. $\rho' < r$이라 가정하면 $u = (\rho' + r)/2$는 순서 성질 (8)에 의해 $\rho' < u < r$이고 $0 \le \rho'$이므로 $0 < u$이고 $0 < r$이다. $x = a + u$에서 $|x - a| = |u| = u$이다(절댓값의 (1)). $r \in A$이므로 $0$ 이상인 모든 $n$에서 $|c_n|\, r^n \le M$인 $M$이 있고, 비교 보조정리의 (1)을 $s = r$에 쓰면 $|x - a| = u < r$이므로 멱급수는 $x$에서 수렴한다. 그러나 $|x - a| = u > \rho'$이므로 가정에 의해 $x$에서 발산하여 모순이다. 따라서 순서 성질 (1)의 (iii)에 의해 $A$의 모든 원소는 $\rho'$ 이하이고, $\rho'$은 $A$의 상계이다. $A$는 위로 유계이고, 상한의 정의에 의해 $\rho \le \rho'$이다.

(ii) 멱급수가 모든 실수에서 수렴하는 멱급수가 아니면 $A$는 위로 유계이다. $\rho < \rho'$이라 가정하면 $u = (\rho + \rho')/2$는 순서 성질 (8)에 의해 $\rho < u < \rho'$이고, (1)의 (iii)에 의해 $0 \le \rho$이므로 $0 < u$이다. $x = a + u$에서 $|x - a| = u < \rho'$이므로 가정에 의해 멱급수는 $x$에서 수렴하지만, $|x - a| = u > \rho$이므로 (3)에 의해 $x$에서 발산하여 모순이다. 따라서 $\rho' \le \rho$이다.

(i) (iii)에 의해 $A$는 위로 유계이고 $\rho \le \rho'$이다. 그러면 $A$가 위로 유계가 아니라는 경우는 없으므로 (ii)에 의해 $\rho' \le \rho$이고, 순서 성질 (1)의 (ii)에 의해 $\rho = \rho'$이다.

(iv) 멱급수가 $x_1$에서 수렴하면 [[power-series]]의 (5)에 의해 $x_1$에서의 항이 유계이고, 항과 $A$에 의해 $|x_1 - a| \in A$이다. $A$가 위로 유계이면 (1)의 (iii)에 의해 $|x_1 - a| \le \rho$이다. 멱급수가 $x_1$에서 발산하면 (4)에 의해 $A$는 위로 유계이다. $|x_1 - a| < \rho$라면 (2)에 의해 $x_1$에서 수렴하여 모순이므로, 순서 성질 (1)의 (iii)에 의해 $\rho \le |x_1 - a|$이다.

**7의 증명.** (i) 절댓값의 (8)을 $\varepsilon = \rho$에 쓰면, 실수 $x$에 대하여 $|x - a| < \rho$인 것은 정확히 $a - \rho < x < a + \rho$일 때이다. $0 < \rho$이므로 순서 성질 (3)의 (iii)과 (2)의 (ii)에 의해 $a - \rho < a < a + \rho$이고, 따라서 열린구간 $(a - \rho, a + \rho)$가 정해지며 $I$는 이 집합과 같다. [[interval|구간]]의 (1)에 의해 $I$는 구간이다. $I = \mathbb{R}$이면 같은 항목의 (2)에 의해 구간이다.

(ii) $A$가 위로 유계이고 $0 < \rho$이면 $I$의 원소 $x$는 $|x - a| < \rho$이므로 (2)에 의해, 모든 실수에서 수렴하는 멱급수이면 (4)에 의해 멱급수는 $x$에서 수렴한다. 그 합 $\sum_{n=0}^{\infty} c_n (x - a)^n$은 [[series-indexed-from-zero]]에서 정해진 실수 하나이므로, [[real-valued-function|실함수]]의 (1)에 의해 $f : I \to \mathbb{R}$가 있다. $|a - a| = |0| = 0 < \rho$이므로 $a \in I$이고, [[power-series]]의 (3)에 의해 $f(a) = c_0$이다.

(iii) $A$가 위로 유계이고 $0 < \rho$이면 (ii)에 의해 $I \subseteq C$이다. $x \in C$이면 (6)의 (iv)에 의해 $|x - a| \le \rho$이고, 절댓값의 (8)에 의해 $a - \rho \le x \le a + \rho$, 곧 $x \in [a - \rho, a + \rho]$이다. 모든 실수에서 수렴하는 멱급수이면 (4)에 의해 $C = \mathbb{R}$이다. $A$가 위로 유계이고 $\rho = 0$이면 (5)에 의해 $C = \{a\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 모두 1 인 멱급수]
중심 $a = 0$이고 모든 $n$에서 $c_n = 1$인 멱급수의 $A$는 $\{r \in \mathbb{R} : 0 \le r \le 1\}$이고 수렴 반지름은 $1$입니다.

- $0 \le r \le 1$이면 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)와 (2)의 (iv)에 의해 $r^n \le 1^n = 1$이므로 $(r^n)_{n \ge 0}$은 유계이고 $r \in A$입니다.
- $r > 1$이면 [[geometric-sequence-limit|등비수열의 극한]]의 (3)에 의해 수열 $(r^n)_{n \ge 1}$은 유계가 아니고, [[power-series]]의 (1)에 의해 $(r^n)_{n \ge 0}$도 유계가 아니어서 $r \notin A$입니다.

그래서 $1$은 $A$의 원소이자 상계이므로 $A$의 최댓값이고, [[upper-bound-and-supremum]]의 (2)에 의해 $\rho = \sup A = 1$입니다. (7)의 $I$는 $(-1, 1)$이고, [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 나타내는 함수는 $f(x) = (1 - x)^{-1}$입니다. 두 끝점에서는 항이 $1^n = 1$과 $(-1)^n$이고, 한 칸 옮긴 수열이 공비의 절댓값이 $1$이고 첫째 항이 $1$인 등비급수의 수열이므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 발산합니다. 그래서 이 멱급수는 (7)의 (iii)의 $C$가 $I$와 같습니다. 이 예에서 반지름 $\rho = 1$은 $A$의 원소입니다.
:::

:::example[계수가 모두 0 인 멱급수]
모든 $n$에서 $c_n = 0$이면 $0$ 이상인 모든 $r$에서 $|c_n|\, r^n = 0$이므로((K9)) $A$는 $0$ 이상인 실수 전체이고, 위로 유계가 아닙니다. 그래서 중심이 무엇이든 이 멱급수는 모든 실수에서 수렴하는 멱급수이고, (7)의 $I$는 $\mathbb{R}$입니다. 실수 $x$에서의 항은 모두 $0$이므로, 한 칸 옮긴 수열은 첫째 항이 $0$인 등비급수의 수열($j$번째 항이 $0 \cdot 0^{j-1} = 0$)과 같고 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 합은 $0$입니다. 그래서 나타내는 함수는 [[real-valued-function|실함수]]의 (3)의 뜻으로 값이 $0$인 상수함수입니다.
:::

:::counterexample[안쪽의 수렴만으로는 반지름이 정해지지 않을 수 있다]
위의 두 멱급수(중심 $0$, 계수가 모두 $1$인 것과 모두 $0$인 것)는 둘 다 $|x| < 1$인 모든 $x$에서 수렴합니다. 그러나 앞의 것은 수렴 반지름이 $1$이고, 뒤의 것은 모든 실수에서 수렴하는 멱급수입니다. 그래서 (6)의 (ii)처럼 "$|x - a| < \rho'$에서 수렴한다"는 것만으로는 $\rho' \le \rho$이거나 모든 실수에서 수렴한다는 것만 알 수 있고, $\rho = \rho'$을 얻으려면 (6)의 (i)처럼 바깥쪽의 발산도 보여야 합니다.
:::

## 확인 질문

:::check[중심 $0$, 계수 $4^n$인 멱급수의 수렴 반지름은 얼마인가?]
$1/4$입니다. 실수의 거듭제곱의 (6)의 (i)과 절댓값의 (1)에 의해 $|4^n| = 4^n$이고, 그 (2)의 (iii)에 의해 $|c_n|\, r^n = (4r)^n$입니다. $0 \le r \le 1/4$이면 $0 \le 4r \le 1$이므로 $(4r)^n \le 1$이어서 $r \in A$이고, $r > 1/4$이면 $4r > 1$이므로 등비수열의 극한의 (3)에 의해 $\bigl((4r)^n\bigr)_{n \ge 1}$이 유계가 아니어서 $r \notin A$입니다. 그래서 $A = \{r : 0 \le r \le 1/4\}$이고 $\rho = 1/4$, $I = (-1/4, 1/4)$입니다.
:::

:::check[중심 $0$인 멱급수가 $x = 3$에서 수렴하고 $x = -4$에서 발산하면 수렴 반지름에 대해 무엇을 말할 수 있는가?]
$A$는 위로 유계이고 $3 \le \rho \le 4$입니다. $x = -4$에서 발산하므로 (6)의 (iv)에 의해 $A$는 위로 유계이고 $\rho \le |-4| = 4$입니다. $x = 3$에서 수렴하므로 같은 (iv)에 의해 $|3| = 3 \le \rho$입니다. 두 점에 대한 정보에서 (6)이 주는 것은 이 어림입니다.
:::
