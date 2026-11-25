---
title: 복소 멱급수
title_en: Complex Power Series
aliases: [복소수의 멱급수, 복소 거듭제곱급수, 절댓값 계수의 실멱급수, 모든 복소수에서 수렴하는 복소 멱급수, complex power series, power series in a complex variable]
kind: definition
field: complex-analysis
msc: ["30B10", "40A30"]
level: undergrad
summary: 복소수 중심 a 와 0부터 번호가 붙은 복소 계수의 순서쌍을 복소 멱급수라 하고, 복소수 z 에서의 항, 수렴과 합, 절대수렴을 정한다. 수렴 반지름은 계수의 절댓값을 계수로 하는 실멱급수의 수렴 반지름 그대로 정한다. 항의 절댓값, 중심에서의 합, 절대수렴과 수렴하는 점의 항, 실수 중심과 실수 계수인 경우 급수와 멱급수 강의의 멱급수와의 일치를 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, upper-bound-and-supremum, series-indexed-from-zero, alternating-series-test, harmonic-series-diverges, power-series, radius-of-convergence, power-series-examples, ring-basic-properties, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, convergence-of-complex-sequences, complex-series, absolute-convergence-of-complex-series]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153); 11.3.2소절 Convergence of power series (p.153–155), Proposition 11.3.1 (p.154); 11.3.4소절 Power series as analytic functions (p.159); 11.3.6소절 Exercise 11.3.11 (p.162)"
    checked: original
    note: "출처 11.3.1소절(p.153)은 c_n, z, a ∈ ℂ 에 대하여 Σ_{n=0}^∞ c_n(z − a)ⁿ 꼴의 급수를 (복소) power series 라 하고, 'We say the series converges if the series converges for some z ≠ a' 라고 적는다. 이 항목은 급수와 멱급수 강의처럼 멱급수를 중심과 계수의 순서쌍으로 정하고 'z 에서 수렴한다'만 쓴다. 출처의 '멱급수가 수렴한다'(a 가 아닌 어떤 점에서 수렴한다)는 뜻은 쓰지 않는다. 출처 11.3.2소절 첫머리(p.153)는 멱급수의 수렴 성질이 대개 급수 Σ|c_k||z − a|^k 에 관한 것이라 실수 변수의 멱급수에 대해 증명한 것을 그대로 쓸 수 있다고 적는다. 이 항목의 '절댓값 계수의 실멱급수'와 (1), (3), (4)가 그 말을 정리한 것이다. 출처는 수렴 반지름을 Proposition 11.3.1(p.154)의 증명에서 R = limsup ⁿ√|c_n| 의 역수로 두고 ρ = ∞ 를 허용한다. 이 항목은 수렴 반지름을 절댓값 계수의 실멱급수의 수렴 반지름(상한으로 정한 것)으로 정하고, ∞ 를 반지름으로 쓰지 않으며 '모든 복소수에서 수렴하는 복소 멱급수'라 한다. 출처는 11.3.1소절(p.153)에서 실수 구간 위의 멱급수도 말하고, 11.3.4소절 Corollary 11.3.7 앞 문장(p.159)에서 실수 x ∈ (a − ρ, a + ρ) 에서 수렴하는 급수는 B(a, ρ) 의 모든 복소수에서 수렴한다고 적는다. (5)의 실수 중심·실수 계수의 일치는 그 상황을 이 사이트의 ι 로 진술한 것이다. 확인 질문 '$|c_n| \\le 1$인 모든 복소 계수의 복소 멱급수(중심 $0$)는 $|z| < 1$에서 절대수렴하는가?'는 출처 11.3.6소절 Exercise 11.3.11(p.162)이 |c_n| ≤ 1 이면 단위 원판에서 |f(z)| ≤ 1/(1 − |z|) 를 보이게 하는 것과 같은 계산이다."
  - ref: lebl-basic-analysis
    loc: "2.6절 More on series, 2.6.5소절 Power series, Example 2.6.8 (p.106–107)"
    checked: original
    note: "반례 '절댓값 계수의 실멱급수가 발산하는 점에서 수렴하는 예'는 출처 Example 2.6.8(p.106–107)이 xⁿ/n 의 멱급수가 x = −1 에서 교대급수 판정법으로 수렴하지만 절대수렴하지 않는다고 보이는 것과 같은 발상이다(이 항목은 계수에 부호를 넣고 x = 1 에서 본다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 합과 반지름 재계산, 반례와 꼬리 문장 word-diff 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 절댓값은 [[modulus-of-complex-number]], 복소수의 거듭제곱($z^0 = 1$, 특히 $0^0 = 1$)은 [[power-of-a-complex-number]]의 것이다. 0부터 번호가 붙은 복소수열과 그 유계는 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (6)의 것이고, 0부터 번호가 붙은 복소수열의 급수의 수렴, 발산, 합 $\sum_{n=0}^{\infty}$는 [[complex-series|복소 급수]], 절대수렴은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 것이다. 실수 중심과 실수 계수의 멱급수, 그 $x$에서의 항과 수렴·발산·절대수렴·합, 0부터 번호가 붙은 실수열의 유계는 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름, 모든 실수에서 수렴하는 멱급수는 [[radius-of-convergence]]의 것이다. 이 항목에서는 [[power-series]]의 멱급수를 **실멱급수**라 부른다.

**복소 멱급수.** 복소수 $a$와 0부터 번호가 붙은 복소수열 $(c_n)_{n \ge 0}$의 순서쌍을 **중심**이 $a$이고 **계수**가 $(c_n)_{n \ge 0}$인 **복소 멱급수**(complex power series)라 한다. 복소수 $z$마다 $n$에서의 값이 $c_n (z - a)^n$인 0부터 번호가 붙은 복소수열이 있다. 이것을 $z$에서의 복소 멱급수의 **항**이라 하고 $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$으로 쓴다.

- 복소 멱급수가 **$z$에서 수렴한다**(발산한다)는 것은 정확히 $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$의 급수가 수렴할(발산할) 때이다. 수렴할 때 그 합 $\sum_{n=0}^{\infty} c_n (z - a)^n$을 **$z$에서의 복소 멱급수의 합**이라 한다. 발산하면 이 기호를 쓰지 않는다.
- 복소 멱급수가 **$z$에서 절대수렴한다**는 것은 정확히 $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$의 급수가 절대수렴할 때이다.

**절댓값 계수의 실멱급수.** 중심이 $0$이고 계수가 $\bigl(|c_n|\bigr)_{n \ge 0}$인 실멱급수를 이 복소 멱급수의 **절댓값 계수의 실멱급수**라 한다. 이 실멱급수에 대하여 [[radius-of-convergence|수렴 반지름]] 항목이 정한 집합을 $A$라 한다. 곧
$$
\begin{aligned}
A = \bigl\{ r \in \mathbb{R} :\ & 0 \le r \text{ 이고} \\
& (|c_n|\, r^n)_{n \ge 0} \text{ 이 유계} \bigr\}
\end{aligned}
$$
이다.

**수렴 반지름.** $A$가 위로 유계이면 절댓값 계수의 실멱급수의 수렴 반지름 $\rho = \sup A$를 복소 멱급수의 **수렴 반지름**이라 한다. $A$가 위로 유계가 아니면, 곧 절댓값 계수의 실멱급수가 모든 실수에서 수렴하는 멱급수이면, 복소 멱급수를 **모든 복소수에서 수렴하는 복소 멱급수**라 하고 수렴 반지름을 정하지 않는다. $\infty$를 수렴 반지름으로 쓰지 않는다.

다음이 성립한다. 아래에서 "복소 멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수이고, $z$는 복소수이다.

1. (항의 절댓값) $0$ 이상인 모든 정수 $n$에서 $|c_n (z - a)^n| = |c_n|\,|z - a|^n$이다. 곧 $z$에서의 항의 절댓값은 절댓값 계수의 실멱급수의 실수 $|z - a|$에서의 항과 같다. $0$번째 항은 $c_0 (z - a)^0 = c_0$이다.
2. (중심) 복소 멱급수는 $z = a$에서 절대수렴하고 수렴하며, 그 합은 $c_0$이다.
3. (절대수렴과 수렴하는 점의 항)
   - (i) 복소 멱급수가 $z$에서 절대수렴하는 것은 정확히 절댓값 계수의 실멱급수가 $|z - a|$에서 수렴할 때이다. 이때 복소 멱급수는 $z$에서 수렴하고 $\bigl|\sum_{n=0}^{\infty} c_n (z - a)^n\bigr| \le \sum_{n=0}^{\infty} |c_n|\,|z - a|^n$이다.
   - (ii) 복소 멱급수가 $z$에서 수렴하면 $z$에서의 항 $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$은 $0$으로 수렴하고 유계이며, 따라서 $|z - a| \in A$이다. 거꾸로 말하면, $z$에서의 항이 유계가 아니면 복소 멱급수는 $z$에서 발산한다.
4. (항이 유계인 것과 $A$) $0$ 이상인 실수 $r$과 $|z - a| = r$인 복소수 $z$에 대하여, $z$에서의 항이 유계인 것은 정확히 $r \in A$일 때이다.
5. (실수 중심과 실수 계수) $a = \iota(a_0)$이고 $0$ 이상인 모든 정수 $n$에서 $c_n = \iota(e_n)$인 실수 $a_0$와 0부터 번호가 붙은 실수열 $(e_n)_{n \ge 0}$이 있다고 하자. 중심이 $a_0$이고 계수가 $(e_n)_{n \ge 0}$인 실멱급수를 "원래의 실멱급수"라 하면, 모든 실수 $x$에 대하여 다음이 성립한다.
   - (i) $\iota(x)$에서의 복소 멱급수의 항은 $n$에서 $\iota\bigl(e_n (x - a_0)^n\bigr)$이다.
   - (ii) 복소 멱급수가 $\iota(x)$에서 수렴하는 것은 정확히 원래의 실멱급수가 $x$에서 수렴할 때이고, 이때 $\sum_{n=0}^{\infty} c_n (\iota(x) - a)^n = \iota\bigl(\sum_{n=0}^{\infty} e_n (x - a_0)^n\bigr)$이다. 복소 멱급수가 $\iota(x)$에서 절대수렴하는 것은 정확히 원래의 실멱급수가 $x$에서 절대수렴할 때이다.
   - (iii) 복소 멱급수의 $A$는 원래의 실멱급수의 $A$와 같은 집합이다. 따라서 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수인 것은 정확히 원래의 실멱급수가 모든 실수에서 수렴하는 멱급수일 때이고, 그렇지 않으면 두 수렴 반지름은 같은 수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number, and powers of complex numbers ($z^0 = 1$, in particular $0^0 = 1$) are those of their entry. Complex sequences indexed from zero and their boundedness are those of item (6) of the entry on convergence of complex sequences; convergence, divergence, and sums $\sum_{n=0}^{\infty}$ of series of complex sequences indexed from zero are those of the entry on complex series, and absolute convergence is that of the entry on absolute convergence of complex series. Power series with real center and real coefficients, their terms at $x$, convergence, divergence, absolute convergence, and sums, and boundedness of real sequences indexed from zero are those of the entry on power series; the set $A$, the radius of convergence, and power series converging at every real number are those of the entry on the radius of convergence. In this entry a power series of the entry on power series is called a **real power series**.

**Complex power series.** The ordered pair of a complex number $a$ and a complex sequence $(c_n)_{n \ge 0}$ indexed from zero is called the **complex power series** with **center** $a$ and **coefficients** $(c_n)_{n \ge 0}$. For each complex number $z$ there is the complex sequence indexed from zero whose value at $n$ is $c_n (z - a)^n$. It is called the sequence of **terms** of the complex power series at $z$ and is written $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$.

- The complex power series **converges** (**diverges**) **at $z$** exactly when the series of $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$ converges (diverges). When it converges, its sum $\sum_{n=0}^{\infty} c_n (z - a)^n$ is called the **sum of the complex power series at $z$**. If it diverges, this notation is not used.
- The complex power series **converges absolutely at $z$** exactly when the series of $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$ converges absolutely.

**The real power series of absolute coefficients.** The real power series with center $0$ and coefficients $\bigl(|c_n|\bigr)_{n \ge 0}$ is called the **real power series of absolute coefficients** of this complex power series. The set defined for this real power series in the entry on the radius of convergence is denoted $A$; that is,
$$
\begin{aligned}
A = \bigl\{ r \in \mathbb{R} :\ & 0 \le r \text{ and} \\
& (|c_n|\, r^n)_{n \ge 0} \text{ is bounded} \bigr\}.
\end{aligned}
$$

**Radius of convergence.** If $A$ is bounded above, the radius of convergence $\rho = \sup A$ of the real power series of absolute coefficients is called the **radius of convergence** of the complex power series. If $A$ is not bounded above, that is, if the real power series of absolute coefficients is a power series converging at every real number, the complex power series is called a **complex power series converging at every complex number**, and no radius of convergence is defined. $\infty$ is not used as a radius of convergence.

The following hold. Below, "the complex power series" is the complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$, and $z$ is a complex number.

1. (Moduli of the terms) $|c_n (z - a)^n| = |c_n|\,|z - a|^n$ for every integer $n \ge 0$. That is, the moduli of the terms at $z$ are the terms of the real power series of absolute coefficients at the real number $|z - a|$. The $0$th term is $c_0 (z - a)^0 = c_0$.
2. (Center) The complex power series converges absolutely and converges at $z = a$, and its sum there is $c_0$.
3. (Absolute convergence and terms at points of convergence)
   - (i) The complex power series converges absolutely at $z$ exactly when the real power series of absolute coefficients converges at $|z - a|$. In that case the complex power series converges at $z$ and $\bigl|\sum_{n=0}^{\infty} c_n (z - a)^n\bigr| \le \sum_{n=0}^{\infty} |c_n|\,|z - a|^n$.
   - (ii) If the complex power series converges at $z$, then the terms $\bigl(c_n (z - a)^n\bigr)_{n \ge 0}$ at $z$ converge to $0$ and are bounded, and hence $|z - a| \in A$. Put the other way, if the terms at $z$ are not bounded, the complex power series diverges at $z$.
4. (Bounded terms and $A$) For a real number $r \ge 0$ and a complex number $z$ with $|z - a| = r$, the terms at $z$ are bounded exactly when $r \in A$.
5. (Real center and real coefficients) Suppose there are a real number $a_0$ and a real sequence $(e_n)_{n \ge 0}$ indexed from zero such that $a = \iota(a_0)$ and $c_n = \iota(e_n)$ for every integer $n \ge 0$. Call the real power series with center $a_0$ and coefficients $(e_n)_{n \ge 0}$ "the original real power series". Then for every real number $x$:
   - (i) The term at $n$ of the complex power series at $\iota(x)$ is $\iota\bigl(e_n (x - a_0)^n\bigr)$.
   - (ii) The complex power series converges at $\iota(x)$ exactly when the original real power series converges at $x$, and then $\sum_{n=0}^{\infty} c_n (\iota(x) - a)^n = \iota\bigl(\sum_{n=0}^{\infty} e_n (x - a_0)^n\bigr)$. The complex power series converges absolutely at $\iota(x)$ exactly when the original real power series converges absolutely at $x$.
   - (iii) The set $A$ of the complex power series is the same set as the set $A$ of the original real power series. Hence the complex power series is a complex power series converging at every complex number exactly when the original real power series is a power series converging at every real number; otherwise the two radii of convergence are the same number.
:::

## 직관

복소 멱급수는 계수가 복소수이고 변수 자리에 복소수를 넣는 멱급수입니다. $z$를 하나 정하면 항 $c_n (z - a)^n$은 복소수이므로, 그 급수가 수렴하는지는 [[complex-series|복소 급수]]의 문제입니다. 급수와 멱급수 강의의 멱급수처럼 멱급수를 중심과 계수의 순서쌍으로 두고, 수렴은 늘 "어느 점에서" 수렴하는지로 말합니다.

수렴 반지름을 새로 정의하지 않는 것이 이 항목의 요점입니다. (1)에 의해 $z$에서의 항의 절댓값은 $|c_n|\,|z - a|^n$으로, $z$ 자체가 아니라 중심에서의 거리 $|z - a|$에만 따릅니다. 그래서 계수를 절댓값으로 바꾼 실멱급수를 $0$ 이상인 실수 $|z - a|$에서 보면 복소 멱급수의 절대수렴을 판정할 수 있고, 수렴 반지름도 그 실멱급수의 것을 그대로 씁니다. 실수 $|z - a|$를 반지름으로 하는 원 위의 모든 점에서 항의 절댓값이 같다는 것이 원판 꼴의 수렴 영역을 낳습니다.

실수 중심과 실수 계수의 복소 멱급수를 실수인 복소수에서 보면 급수와 멱급수 강의의 멱급수가 그대로 나옵니다((5)). 이때 절댓값 계수의 실멱급수와 원래의 실멱급수는 계수의 부호가 다를 수 있지만 집합 $A$는 계수의 절댓값만으로 정해지므로 같습니다. 그래서 "실수 위의 수렴 반지름"과 "복소평면 위의 수렴 반지름"이 같은 수입니다.

## 성질의 증명

:::proof
"복소 거듭제곱 (n)", "복소 절댓값 (n)", "복소수체 (n)", "복소 급수 (n)", "절대수렴 (n)", "수렴 (n)"은 [[power-of-a-complex-number]], [[modulus-of-complex-number]], [[complex-field]], [[complex-series]], [[absolute-convergence-of-complex-series]], [[convergence-of-complex-sequences]]의 번호이고, "실멱급수 (n)"은 [[power-series]], "반지름 (n)"은 [[radius-of-convergence]]의 번호이다. 항의 수열이 있다는 것은 수렴 (6)에 의한다. 실멱급수의 $A$는 [[radius-of-convergence]]의 정의 그대로이고, 수렴 반지름이 실수 하나로 정해지는 것은 그 항목과 [[upper-bound-and-supremum]]의 (1)에 의한다.

**1의 증명.** 복소 절댓값 (3)과 복소 거듭제곱 (4)에 의해 $|c_n (z - a)^n| = |c_n|\,|(z - a)^n| = |c_n|\,|z - a|^n$이다. 복소 절댓값 (1)에 의해 $0 \le |z - a|$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $\bigl||z - a|\bigr| = |z - a|$이고, 절댓값 계수의 실멱급수의 $|z - a|$에서의 항은 $|c_n|\,(|z - a| - 0)^n = |c_n|\,|z - a|^n$이다. $0$번째 항은 복소 거듭제곱의 정의의 $w^0 = 1$과 [[complex-field|복소수체]] (1)의 단위원에 의해 $c_0$이다.

**3의 증명.** (i) 절대수렴의 정의에 의해 복소 멱급수가 $z$에서 절대수렴하는 것은 정확히 $n$에서의 값이 $|c_n (z - a)^n|$인 0부터 번호가 붙은 실수열의 급수가 수렴할 때이다. (1)에 의해 이 실수열은 절댓값 계수의 실멱급수의 $|z - a|$에서의 항이다. 그 항은 $0$ 이상이므로 절댓값 (1)에 의해 자기 자신의 절댓값과 같고, 따라서 이 급수가 수렴하는 것은 실멱급수가 $|z - a|$에서 수렴하는 것과도, 절대수렴하는 것과도 같다. 뒤 문장은 절대수렴 (2)이다.

(ii) 복소 급수 (7)에 의해 $z$에서의 항은 $0$으로 수렴하고, 수렴 (6)의 (iii)에 의해 유계이다. 곧 $0$ 이상인 모든 정수 $n$에서 $|c_n (z - a)^n| \le B$인 실수 $B$가 있고, (1)에 의해 이것은 $|c_n|\,|z - a|^n \le B$이다. 실멱급수 (1)의 정의에 의해 $(|c_n|\,|z - a|^n)_{n \ge 0}$은 유계이고, $0 \le |z - a|$이므로 $|z - a| \in A$이다. 마지막 문장은 앞 문장의 대우이다.

**4의 증명.** (1)에 의해 모든 $n$에서 $|c_n (z - a)^n| = |c_n|\, r^n$이다. 수렴 (6)의 (iii)에 의해 $z$에서의 항이 유계인 것은 정확히 어떤 $B$가 있어 모든 $n$에서 $|c_n (z - a)^n| \le B$일 때이고, 실멱급수의 유계의 정의와 절댓값 (1)($0 \le |c_n|\, r^n$)에 의해 이것은 $(|c_n|\, r^n)_{n \ge 0}$이 유계일 때, 곧 $r \in A$일 때이다.

**2의 증명.** $z = a$이면 [[complex-field|복소수체]] (1)에 의해 $z - a = 0$이고 $|z - a| = 0$이다. 실멱급수 (3)에 의해 절댓값 계수의 실멱급수는 $0$에서 절대수렴하므로, (3)의 (i)에 의해 복소 멱급수는 $a$에서 절대수렴하고 수렴한다. $n \ge 1$이면 복소 거듭제곱 (3)의 (i)에 의해 $0^n = 0$이고 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $c_n 0^n = 0$이며, $0$번째 항은 (1)에 의해 $c_0$이다. 복소 급수 (4)를 $m = 0$, $K = 0$에 쓰면 $\sum_{n=0}^{\infty} c_n (a - a)^n = c_0 + \sum_{n=1}^{\infty} c_n 0^n$이고, 뒤의 합은 모든 항이 $0$인 급수의 합이므로 복소 급수 (3)에 의해 $0$이다.

**5의 증명.** (i) 복소수체 (2)에 의해 $\iota(x) - a = \iota(x) - \iota(a_0) = \iota(x - a_0)$이고, 복소 거듭제곱 (5)에 의해 $\iota(x - a_0)^n = \iota\bigl((x - a_0)^n\bigr)$이며, 복소수체 (2)에 의해 $\iota(e_n)\,\iota\bigl((x - a_0)^n\bigr) = \iota\bigl(e_n (x - a_0)^n\bigr)$이다.

(ii) (i)에 의해 $\iota(x)$에서의 항은 실수 $e_n (x - a_0)^n$을 $\iota$로 옮긴 것이고, 이 실수들은 원래의 실멱급수의 $x$에서의 항이다. 복소 급수 (3)을 $m = 0$에 쓰면 앞 문장이 나온다. 절대수렴은 절대수렴 (1)을 $m = 0$에 쓰면 원래의 실멱급수의 $x$에서의 항의 절댓값의 급수가 수렴하는 것이고, 이것이 실멱급수의 정의의 절대수렴이다.

(iii) 복소 절댓값 (5)에 의해 $|c_n| = |\iota(e_n)| = |e_n|$이므로, 0 이상인 실수 $r$마다 $(|c_n|\, r^n)_{n \ge 0}$과 $(|e_n|\, r^n)_{n \ge 0}$은 같은 수열이다. 따라서 두 $A$는 같은 집합이다. 뒤 문장은 [[radius-of-convergence|수렴 반지름]] 항목과 이 항목의 정의가 모두 $A$만으로 정해지기 때문이다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 i 의 거듭제곱인 복소 멱급수의 A]
중심이 $0$이고 $c_n = i^n$인 복소 멱급수를 봅니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|c_n| = |i|^n = 1$이므로, 절댓값 계수의 실멱급수는 계수가 모두 $1$인 실멱급수이고 [[power-series-examples|멱급수의 예]]의 (1)에 의해 그 수렴 반지름은 $1$입니다. 따라서 이 복소 멱급수의 수렴 반지름도 $1$입니다. 계수 $1, i, -1, -i, \dots$는 서로 다르지만 절댓값이 모두 같아서, 수렴 반지름은 계수가 모두 $1$인 복소 멱급수와 같습니다. 실제로 $c_n z^n = (iz)^n$이므로 $z$에서의 이 복소 멱급수는 공비가 $iz$인 등비급수이고, [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)에 의해 $|z| = |iz| < 1$이면 합이 $1/(1 - iz)$입니다.
:::

:::counterexample[절댓값 계수의 실멱급수가 발산하는 점에서 수렴하는 예]
중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (-1)^n n^{-1}$(실수인 복소수)인 복소 멱급수를 $z = 1$에서 봅니다. (5)의 (ii)에 의해 이것은 원래의 실멱급수를 $x = 1$에서 보는 것과 같고, 그 항은 $0$번째 항 $0$과 $(-1)^n n^{-1}$입니다. [[alternating-series-test|교대급수 판정법]]의 (4)와 [[series-indexed-from-zero]]의 (8)에 의해 그 급수는 수렴하므로 복소 멱급수는 $z = 1$에서 수렴합니다. 그런데 절댓값 계수의 실멱급수의 $|z - 0| = 1$에서의 항은 $0$과 $n^{-1}$이고, [[harmonic-series-diverges|조화급수는 발산한다]]의 (2)와 [[series-indexed-from-zero]]의 (8)에 의해 그 급수는 발산합니다. (3)의 (i)이 말하는 것은 절대수렴뿐이므로, 절댓값 계수의 실멱급수가 $|z - a|$에서 발산해도 복소 멱급수가 $z$에서 수렴할 수 있습니다.
:::

## 확인 질문

:::check[중심이 $0$이고 $c_0 = 5i$, $n \ge 1$에서 $c_n = 0$인 복소 멱급수는 어디에서 수렴하고 합은 무엇인가?]
모든 복소수 $z$에서 절대수렴하고 합은 $5i$입니다. $z$에서의 $0$번째 항은 (1)에 의해 $c_0 = 5i$이고 $n \ge 1$인 항은 모두 $0$이므로, [[complex-series|복소 급수]]의 (4)를 $K = 0$에 쓰고 (3)으로 꼬리의 합이 $0$이라는 것을 쓰면 됩니다. 절댓값 계수의 실멱급수는 [[power-series-examples|멱급수의 예]]의 (7)에 의해 모든 실수에서 수렴하는 멱급수이므로, 이 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수입니다.
:::

:::check[$|c_n| \le 1$인 모든 복소 계수의 복소 멱급수(중심 $0$)는 $|z| < 1$에서 절대수렴하는가?]
그렇습니다. (1)에 의해 항의 절댓값은 $|c_n|\,|z|^n \le |z|^n$이고, $|z| < 1$이면 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)에 의해 $|z|^n$의 급수는 수렴하므로, 그 항목의 (3)에 의해 절대수렴합니다. 이때 합의 절댓값은 $\sum_{n=0}^{\infty} |z|^n = 1/(1 - |z|)$ 이하입니다.
:::
