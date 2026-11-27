---
title: 복소 멱급수의 계수와 도함수
title_en: Coefficients and Derivatives of Complex Power Series
aliases: [복소 멱급수의 테일러 계수, 복소 멱급수의 계수의 유일성, 복소 멱급수는 무한 번 미분가능하다, 복소 멱급수의 인수 꼴, Taylor coefficients of a complex power series, uniqueness of power series coefficients, power series are infinitely differentiable]
kind: theorem
field: complex-analysis
msc: ["30B10"]
level: undergrad
summary: "수렴 반지름이 양수이거나 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 함수 f 는 무한 번 미분가능하고, ℓ 계 도함수는 계수가 (n + ℓ)!/n! · c_(n+ℓ) 인 같은 반지름의 복소 멱급수가 나타내는 함수이며 f^(ℓ)(a) = ℓ! c_ℓ 이다. 중심이 같은 두 복소 멱급수가 중심의 열린 원판에서 같은 값을 주면 계수가 같다. 0 이 아닌 계수가 있으면 f 는 (z − a)^m 과 중심에서 0 이 아닌 정칙함수의 곱이고, 중심이 영점의 집합의 집적점이면 계수가 모두 0 이다."
requires: [function, adding-or-removing-an-element, mathematical-induction, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, archimedean-property, factorial-from-zero, radius-of-convergence, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-finite-sum, open-ball, open-set-in-metric-space, complex-plane-as-metric-space, convergence-of-complex-sequences, complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-exponential-function, definition-of-pi, periodicity-of-trigonometric-functions, limit-of-complex-function, limit-laws-for-complex-functions, complex-derivative, complex-power-series-is-holomorphic, higher-complex-derivatives]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Power Series and Holomorphic Functions 절의 Corollary taylor 앞 문단, Corollary taylor 와 그 증명, 그 뒤 문단과 Corollary uniqueness, source/sec_powerseriesholom.ptx:174–184, 185–209, 211–227, 228–247; Classification of Zeros and the Identity Principle 절의 Theorem classificationzeros 의 증명과 Theorem uniquenessfunction, source/sec_classifzeros.ptx:63–121, 131–141; 8장 연습문제 가운데 영점의 중복도를 묻는 것(exp(z) − 1 등)과 ex_evenoddfunctions, source/exercises-chap8.ptx:463–492, 595–610"
    checked: original
    note: "출처 Corollary taylor(sec_powerseriesholom.ptx:185–196)는 반지름이 양수인 Σ c_k (z − z₀)ᵏ 이 나타내는 f 에서 c_k = f^{(k)}(z₀)/k! 라고 진술한다. 이 항목의 (4)가 그것이다. 그 앞 문단(174–184줄)은 Theorem powerderivative 를 f′, f″ 에 되풀이해 쓸 수 있다고 적는다. 출처의 증명(197–209줄)은 f(z₀) = c₀, f′(z₀) = c₁ 과 f″ 의 급수를 적은 뒤 'A quick induction game' 으로 f^{(k)}(z₀) = k! c_k 를 얻는다. 이 항목은 'ℓ 번 항별 미분한 복소 멱급수'를 정의하고 (1)–(3)을 ℓ 에 대한 귀납으로 증명한다. 출처 Corollary uniqueness(217–227줄)는 같은 중심의 두 멱급수가 중심이 z₀ 인 열린 원판에서 같은 함수로 수렴하면 계수가 같다고 진술하고, 그 앞 문단(211–216줄)에서 테일러 공식에서 곧바로 따른다('It follows immediately')고만 적는다. 이 항목의 (5)의 (ii)가 그것이고, 증명은 (5)의 (i)(원판의 모든 점에서 수렴하면 그 원판이 D 에 든다)과 고계 도함수의 제한으로 쓴다. (6)의 인수 꼴은 출처 Theorem classificationzeros 의 증명(sec_classifzeros.ptx:63–121)이 영점 a 에서의 멱급수 전개로 f(z) = (z − a)^m Σ_{k≥0} c_{k+m}(z − a)ᵏ 을 쓰고 g(a) = c_m ≠ 0 인 g 를 만드는 것(88–110줄)과 같은 것이고, (7)의 '중심 둘레에 다른 영점이 없다'는 같은 증명의 마지막 문단(113–116줄, g(a) ≠ 0 이므로 연속에 의해 D[a, r] 에 다른 영점이 없다)과 같은 논법이다. 출처는 그 정리를 정칙함수에 대해 진술한다. 이 항목은 같은 내용을 복소 멱급수가 나타내는 함수에 대해 진술하고, 고계 도함수와의 관계(6)의 마지막 문장을 덧붙인다. 확인 질문 '중심이 $0$이고 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 $f$가 모든 $z$에서 $f(iz) = f(z)$이면 어떤 계수가 $0$인가?'는 출처 8장 연습문제 ex_evenoddfunctions(exercises-chap8.ptx:595–610, 짝함수·홀함수의 0 중심 로랑 급수에는 짝수·홀수 거듭제곱만 있다)와 같은 발상(대칭에서 계수를 비교한다)이다. 반례 '중심이 다른 두 복소 멱급수가 같은 함수를 나타내는 예'는 출처 Example ex_expatpi(sec_powerseriesholom.ptx:228–247, exp 를 중심 π 에서 전개해 계수 e^π/k! 를 얻는다)처럼 같은 함수를 다른 중심에서 전개하는 것과 같은 발상이다. 확인 질문 '중심이 $0$이고 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 $f$가 모든 자연수 $k$에서 $f(i/k) = 0$이면 $f$는 어떤 함수인가?'는 출처 Theorem uniquenessfunction(sec_classifzeros.ptx:131–141, 수렴하는 서로 다른 점의 수열에서 0 이면 영함수)과 같은 발상이다. 반례 '영점이 무한히 많아도 중심이 집적점이 아닌 예'의 exp(z) − 1 과 그 영점 2πik 는 출처 8장 연습문제(exercises-chap8.ptx:463–492)가 영점 2kπi 의 중복도를 묻는 첫째 함수 exp(z) − 1 과 같은 대상이다."
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.3소절 Properties of analytic functions 의 항별 미분을 되풀이하는 문단과 식 (11.1) (p.156); 11.3.5소절 Identity theorem for analytic functions, Lemma 11.3.8 과 그 증명 (p.160)"
    checked: original
    note: "출처(p.156)는 실수 x 에서의 항별 미분을 되풀이해 f^{(ℓ)}(x) = Σ (n + ℓ)(n + ℓ − 1)⋯(n + 1) c_{n+ℓ}(x − a)ⁿ 과 f^{(ℓ)}(a) = ℓ! c_ℓ(식 (11.1))을 적고, 계수가 함수의 도함수로 정해진다고 덧붙인다. 이 항목의 (3), (4)는 같은 식을 복소 변수의 고계 복소 도함수로 진술하고, 내림 곱 대신 계승의 몫 (n + ℓ)!/n! 을 쓴다. 출처 Lemma 11.3.8(p.160)은 수렴하는 Σ a_k zᵏ 과 0 으로 수렴하는 0 이 아닌 복소수의 수열 z_n 에서 f(z_n) = 0 이면 모든 a_k 가 0 이라고 진술하고, 0 이 아닌 a_k 가 있으면 가장 작은 m 을 잡아 f(z) = z^m g(z), g(0) = a_m ≠ 0 으로 쓰고 g 의 연속으로 B(0, δ) 에서 g ≠ 0 임을 보여 귀류법으로 증명한다. 이 항목의 (6)은 그 증명 안의 인수 꼴을 진술로 올린 것이고(출처는 g 의 급수가 f 와 같은 집합에서 수렴한다고 괄호로만 적는다), (7)은 출처의 '수열'을 '중심이 영점의 집합의 집적점'으로 바꾼 진술이다. 수열을 쓰지 않으므로 수열을 고를 일이 없다. 증명은 출처의 것과 같은 길이다. 확인 질문 '중심이 $0$이고 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 $f$가 모든 자연수 $k$에서 $f(i/k) = 0$이면 $f$는 어떤 함수인가?'는 출처 Lemma 11.3.8 을 z_k = i/k 에 쓴 것과 같은 물음이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 항별 미분 증명과 오차 부등식 검토). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 0부터 번호가 붙은 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (6)의 것이고, $0$ 이상인 정수의 계승 $n!$은 [[factorial-from-zero]]의 것이다. 복소 멱급수, 그 $z$에서의 항, 수렴과 합, 집합 $A$, 수렴 반지름 $\rho$, 모든 복소수에서 수렴하는 복소 멱급수는 [[complex-power-series|복소 멱급수]]의 것이고, 집합 $D$와 복소 멱급수가 $D$ 위에 나타내는 함수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이며, 항별 미분한 복소 멱급수는 [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]의 것이다. 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. $\mathbb{C}$의 부분집합의 집적점은 [[limit-of-complex-function|복소함수의 극한]]의 것이다. 정칙함수와 연속은 [[complex-derivative|복소 미분]]의 것이고, $n$번 미분가능, 무한 번 미분가능, $k$계 도함수 $f^{(k)}$는 [[higher-complex-derivatives|고계 복소 도함수]]의 것이다.

$a$를 복소수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 복소수열이라 하고, "복소 멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수라 하자.

**$\ell$번 항별 미분한 복소 멱급수.** $0$ 이상인 정수 $\ell$과 $n$마다 복소수
$$
d^{\ell}_n = \frac{(n + \ell)!}{n!}\, c_{n+\ell}
$$
가 정해진다. 여기서 $\dfrac{(n + \ell)!}{n!}$은 실수 $(n + \ell)!\,(n!)^{-1}$이고, 위첨자 $\ell$은 거듭제곱이 아니라 이름이다. 중심이 $a$이고 계수가 $(d^{\ell}_n)_{n \ge 0}$인 복소 멱급수를 복소 멱급수를 **$\ell$번 항별 미분한 복소 멱급수**라 한다. 그 집합 $A$와 수렴 반지름을 $A_\ell$, $\rho_\ell$로 쓴다.

다음이 성립한다. 아래에서 $\ell$은 $0$ 이상인 정수이다. (3), (4), (6), (7)에서는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 두 경우, 곧 $A$가 위로 유계이고 $0 < \rho$이거나 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수인 경우를 다루고, 복소 멱급수가 $D$ 위에 나타내는 함수를 $f : D \to \mathbb{C}$라 한다.

1. (차례로 항별 미분하기) $0$번 항별 미분한 복소 멱급수는 복소 멱급수 자신이다. $\ell + 1$번 항별 미분한 복소 멱급수는 $\ell$번 항별 미분한 복소 멱급수를 항별 미분한 복소 멱급수이다. 특히 $1$번 항별 미분한 복소 멱급수는 복소 멱급수를 항별 미분한 복소 멱급수이다.
2. (반지름이 같다) $A$가 위로 유계인 것은 정확히 $A_\ell$이 위로 유계일 때이고, 이때 $\rho_\ell = \rho$이다. 따라서 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수인 것은 정확히 $\ell$번 항별 미분한 복소 멱급수가 그럴 때이고, 집합 $D$는 두 복소 멱급수에서 같은 집합이다.
3. (무한 번 미분가능) $f$는 무한 번 미분가능하고, $f^{(\ell)}$은 $\ell$번 항별 미분한 복소 멱급수가 (2)에 의해 같은 $D$ 위에 나타내는 함수이다. 곧 $D$의 모든 원소 $z$에서
   $$
   \begin{aligned}
   &f^{(\ell)}(z) \\
   &= \sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, c_{n+\ell}\, (z - a)^n
   \end{aligned}
   $$
   이다.
4. (중심에서의 도함수) $f^{(\ell)}(a) = \ell!\, c_\ell$이다. 따라서
   $$
   c_\ell = \frac{f^{(\ell)}(a)}{\ell!}
   $$
   이다. 곧 계수는 $f$의 $a$에서의 도함수로 정해진다.
5. (원판에서의 수렴과 계수의 유일성) $r$을 양의 실수라 하자.
   - (i) 복소 멱급수가 $B(a, r)$의 모든 점에서 수렴하면, 복소 멱급수는 $A$가 위로 유계이고 $r \le \rho$이거나 모든 복소수에서 수렴하는 복소 멱급수이다. 어느 경우든 $B(a, r) \subseteq D$이다.
   - (ii) (계수의 유일성) $(b_n)_{n \ge 0}$을 0부터 번호가 붙은 복소수열이라 하자. 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수와 $(b_n)_{n \ge 0}$인 복소 멱급수가 $B(a, r)$의 모든 점 $z$에서 수렴하고 합이 같으면, $0$ 이상인 모든 $n$에서 $c_n = b_n$이다. 특히 복소 멱급수가 $B(a, r)$의 모든 점에서 수렴하고 합이 $0$이면 모든 계수가 $0$이다. 두 복소 멱급수의 수렴 반지름은 달라도 된다.
6. (인수 꼴) $c_n \ne 0$인 $0$ 이상의 정수 $n$이 있다고 하자. 그런 $n$ 가운데 가장 작은 것 $m$이 있다. 계수가 $(c_{n+m})_{n \ge 0}$이고 중심이 $a$인 복소 멱급수는 $D$의 모든 점에서 수렴하고, 그 합을 $g(z) = \sum_{n=0}^{\infty} c_{n+m} (z - a)^n$으로 정한 함수 $g : D \to \mathbb{C}$는 정칙함수이고 연속이며, $D$의 모든 $z$에서
   $$
   f(z) = (z - a)^m\, g(z)
   $$
   이고 $g(a) = c_m \ne 0$이다. 또 $0 \le k < m$인 정수 $k$에서 $f^{(k)}(a) = 0$이고 $f^{(m)}(a) = m!\, c_m \ne 0$이다.
7. (중심이 영점의 집적점이면) $Z = \{z \in D : f(z) = 0\}$이라 하자. $a$가 $Z$의 집적점이면 $0$ 이상인 모든 $n$에서 $c_n = 0$이고, $f$는 모든 값이 $0$인 함수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number, and powers are those of the entry on powers of a complex number. Complex sequences indexed from zero are those of (6) of the entry on convergence of complex sequences, and the factorial $n!$ of an integer at least $0$ is that of the entry on factorials from zero. Complex power series, their terms at $z$, convergence and sum, the set $A$, the radius of convergence $\rho$, and complex power series converging at every complex number are those of the entry on complex power series; the set $D$ and the function represented on $D$ by a complex power series are those of (7) of the entry on the radius of convergence of a complex power series; the termwise differentiated complex power series is that of the entry on termwise differentiation of complex power series. The open ball $B(a, r)$ is that of (3) of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Cluster points of subsets of $\mathbb{C}$ are those of the entry on the limit of a complex function. Holomorphic functions and continuity are those of the entry on the complex derivative, and $n$ times differentiable, infinitely differentiable, and the $k$th derivative $f^{(k)}$ are those of the entry on higher complex derivatives.

Let $a$ be a complex number and $(c_n)_{n \ge 0}$ a complex sequence indexed from zero, and let "the complex power series" be the complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**The $\ell$ times termwise differentiated complex power series.** For integers $\ell$, $n$ at least $0$ the complex number
$$
d^{\ell}_n = \frac{(n + \ell)!}{n!}\, c_{n+\ell}
$$
is determined. Here $\dfrac{(n + \ell)!}{n!}$ is the real number $(n + \ell)!\,(n!)^{-1}$, and the superscript $\ell$ is a label, not an exponent. The complex power series with center $a$ and coefficients $(d^{\ell}_n)_{n \ge 0}$ is called the **$\ell$ times termwise differentiated complex power series** of the complex power series. Its set $A$ and radius of convergence are written $A_\ell$, $\rho_\ell$.

The following hold. Below, $\ell$ is an integer at least $0$. In (3), (4), (6), (7) we treat the two cases of (7)(i) of the entry on the radius of convergence of a complex power series, that is, the case where $A$ is bounded above and $0 < \rho$ or the complex power series converges at every complex number, and we let $f : D \to \mathbb{C}$ be the function represented on $D$ by the complex power series.

1. (Differentiating termwise in turn) The $0$ times termwise differentiated complex power series is the complex power series itself. The $\ell + 1$ times termwise differentiated complex power series is the termwise differentiated complex power series of the $\ell$ times termwise differentiated complex power series. In particular, the $1$ time termwise differentiated complex power series is the termwise differentiated complex power series of the complex power series.
2. (The radii are equal) $A$ is bounded above exactly when $A_\ell$ is bounded above, and then $\rho_\ell = \rho$. Hence the complex power series converges at every complex number exactly when the $\ell$ times termwise differentiated complex power series does, and the set $D$ is the same set for the two complex power series.
3. (Infinitely differentiable) $f$ is infinitely differentiable, and $f^{(\ell)}$ is the function represented, on the same $D$ by (2), by the $\ell$ times termwise differentiated complex power series. That is, for every element $z$ of $D$
   $$
   \begin{aligned}
   &f^{(\ell)}(z) \\
   &= \sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, c_{n+\ell}\, (z - a)^n.
   \end{aligned}
   $$
4. (Derivatives at the center) $f^{(\ell)}(a) = \ell!\, c_\ell$. Hence
   $$
   c_\ell = \frac{f^{(\ell)}(a)}{\ell!}.
   $$
   That is, the coefficients are determined by the derivatives of $f$ at $a$.
5. (Convergence on a disc and uniqueness of the coefficients) Let $r$ be a positive real number.
   - (i) If the complex power series converges at every point of $B(a, r)$, then either $A$ is bounded above and $r \le \rho$, or the complex power series converges at every complex number. In either case $B(a, r) \subseteq D$.
   - (ii) (Uniqueness of the coefficients) Let $(b_n)_{n \ge 0}$ be a complex sequence indexed from zero. If the complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$ and the one with coefficients $(b_n)_{n \ge 0}$ converge at every point $z$ of $B(a, r)$ and have the same sums, then $c_n = b_n$ for every $n \ge 0$. In particular, if the complex power series converges at every point of $B(a, r)$ with sum $0$, then all its coefficients are $0$. The two complex power series may have different radii of convergence.
6. (Factored form) Suppose there is an integer $n \ge 0$ with $c_n \ne 0$. Among such $n$ there is a least one, $m$. The complex power series with coefficients $(c_{n+m})_{n \ge 0}$ and center $a$ converges at every point of $D$, the function $g : D \to \mathbb{C}$ defined by its sum $g(z) = \sum_{n=0}^{\infty} c_{n+m} (z - a)^n$ is a holomorphic function and is continuous, and for every $z$ in $D$
   $$
   f(z) = (z - a)^m\, g(z),
   $$
   with $g(a) = c_m \ne 0$. Moreover $f^{(k)}(a) = 0$ for integers $k$ with $0 \le k < m$, and $f^{(m)}(a) = m!\, c_m \ne 0$.
7. (If the center is a cluster point of zeros) Let $Z = \{z \in D : f(z) = 0\}$. If $a$ is a cluster point of $Z$, then $c_n = 0$ for every $n \ge 0$, and $f$ is the function all of whose values are $0$.
:::

## 직관

[[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]은 복소 멱급수가 나타내는 함수의 도함수가 다시 같은 반지름의 복소 멱급수가 나타내는 함수라는 것이었습니다. 그러면 그 도함수에 같은 정리를 또 쓸 수 있고, 몇 번이든 되풀이할 수 있습니다. 한 번 미분할 때마다 계수가 한 칸 당겨지며 곱이 붙고, $\ell$번 당기면 붙은 곱이 $(n + \ell)!/n!$이 됩니다. 중심 $a$에서는 $(z - a)^n$이 $n \ge 1$에서 $0$이 되어 상수항만 남으므로 $f^{(\ell)}(a) = \ell!\,c_\ell$입니다. 실멱급수의 [[derivatives-of-power-series|멱급수의 고계 도함수]]와 같은 계산입니다.

거꾸로 읽으면, 함수가 중심 둘레의 작은 원판에서 정해지면 계수가 모두 정해진다는 것이 (5)입니다. 원판이 아무리 작아도 그 안의 값만으로 중심에서의 도함수가 모두 정해지기 때문입니다. 비유하면 계수의 수열은 함수의 설계도이고 중심에서의 도함수는 그 설계도를 읽는 방법입니다. 비유가 맞지 않는 곳은, 설계도가 중심마다 따로 있다는 점입니다. 같은 함수라도 중심이 다르면 계수가 다를 수 있습니다(아래 반례).

(6)과 (7)은 영점에 관한 것입니다. 처음 $m$개의 계수가 $0$이고 $c_m \ne 0$이면 $f$는 $(z - a)^m$을 인수로 갖고, 남은 인수 $g$는 중심에서 $0$이 아닙니다. $g$가 연속이므로 중심 가까이에서도 $0$이 아니고, 그러면 중심 바로 둘레에는 $a$ 말고 $f$의 영점이 없습니다. 그래서 영점들이 중심으로 모여들면 계수가 모두 $0$일 수밖에 없습니다. 영점이 무한히 많다는 것만으로는 이 결론이 나오지 않습니다. 무한히 많은 영점이 중심에 모여드는지가 문제입니다.

## 증명

:::idea
(1)–(4)는 항별 미분의 정리를 $\ell$에 대한 귀납으로 되풀이한 것이다. (5)는 작은 원판으로 제한해도 고계 도함수가 그대로라는 것과 (4)를 합치고, (6)은 꼬리의 급수를 $(z - a)^{-m}$으로 나누며, (7)은 (6)의 $g$의 연속으로 중심 가까이의 중심이 아닌 점에서 $f \ne 0$임을 보인다.
:::

:::hint
$(n + 1)\, d^{\ell}_{n+1} = d^{\ell+1}_n$을 [[factorial-from-zero]]의 (4)로 확인합니다.
:::

:::hint
(5)의 (i)은 $0 \le s < r$인 실수 $s$마다 점 $a + s$에서의 수렴으로 $s \le \rho$를 얻고, 그것으로 $r \le \rho$를 얻습니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이다. "복소 멱급수 (n)"은 [[complex-power-series|복소 멱급수]], "복소 반지름 (n)"은 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]], "항별 미분 (n)"은 [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "복소 급수 (n)"은 [[complex-series|복소 급수]], "복소 거듭제곱 (n)"은 [[power-of-a-complex-number]], "계승 (n)"은 [[factorial-from-zero]], "복소 미분 (n)"은 [[complex-derivative|복소 미분]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 체 $\mathbb{C}$의 계산은 [[complex-field]]의 (1)의 체의 법칙이고, 실수가 곱해진 꼴은 같은 항목의 (2), (3)으로 읽는다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다. 두 복소 멱급수가 같은 것은 중심이 같고 $0$ 이상인 모든 정수 $n$에서 계수가 같을 때이다.

**1의 증명.** 계승 (3)에 의해 $n! \ne 0$이므로 (K8)과 (K4)에 의해 $(n + 0)!\,(n!)^{-1} = 1$이고 $d^{0}_n = \iota(1)\,c_n = c_n$이다. 따라서 $0$번 항별 미분한 복소 멱급수는 복소 멱급수 자신이다. $\ell$번 항별 미분한 복소 멱급수를 항별 미분한 복소 멱급수의 $n$번째 계수는 항별 미분의 정의에 의해 $(n + 1)\, d^{\ell}_{n+1}$이다. 계승 (4)의 셋째 식($n$에 $n$)과 (K1), (K2)에 의해 실수의 계산
$$
\begin{aligned}
&(n + 1)\,\bigl((n + 1)!\bigr)^{-1} (n + 1 + \ell)! \\
&= (n!)^{-1}\,(n + \ell + 1)!
\end{aligned}
$$
이 성립하므로, [[complex-field]]의 (2)에 의해 $(n + 1)\, d^{\ell}_{n+1} = \iota(n + 1)\,\iota\bigl((n + 1 + \ell)!\,((n + 1)!)^{-1}\bigr)\, c_{n+1+\ell} = d^{\ell+1}_n$이다. 따라서 그것은 $\ell + 1$번 항별 미분한 복소 멱급수이다. $\ell = 0$이면 이것은 복소 멱급수 자신을 항별 미분한 복소 멱급수이다.

**2의 증명.** $\ell$에 대한 귀납으로 보인다. $\ell = 0$이면 (1)에 의해 두 복소 멱급수가 같으므로 $A_0 = A$이다. $\ell$에서 성립한다고 하자. (1)에 의해 $\ell + 1$번 항별 미분한 복소 멱급수는 $\ell$번 항별 미분한 복소 멱급수를 항별 미분한 복소 멱급수이므로, 항별 미분 (1)의 (iii)을 $\ell$번 항별 미분한 복소 멱급수에 쓰면 $A_\ell$이 위로 유계인 것은 정확히 $A_{\ell+1}$이 위로 유계일 때이고 이때 $\rho_{\ell+1} = \rho_\ell$이다. 귀납 가정과 합치면 $A$가 위로 유계인 것은 정확히 $A_{\ell+1}$이 위로 유계일 때이고 이때 $\rho_{\ell+1} = \rho$이다. 복소 멱급수 (정의)에 의해 모든 복소수에서 수렴한다는 것은 집합 $A$가 위로 유계가 아니라는 것이고, 복소 반지름 (7)의 (i)에 의해 집합 $D$는 $A$가 위로 유계인지와 $\rho$만으로 정해지므로 둘째 문장이 나온다.

**3의 증명.** (2)에 의해 모든 $\ell$에서 $\ell$번 항별 미분한 복소 멱급수도 복소 반지름 (7)의 (i)의 두 경우 가운데 같은 경우에 들고 집합 $D$가 같으므로, 그것이 $D$ 위에 나타내는 함수 $f_\ell : D \to \mathbb{C}$가 있다. (1)에 의해 $f_0 = f$이다. $\ell$에 대한 명제 "$f$는 $\ell$번 미분가능하고 $f^{(\ell)} = f_\ell$"을 귀납으로 보인다. $\ell = 0$이면 고계 (1)에 의해 $f^{(0)} = f = f_0$이다. $\ell$에서 참이라 하자. 항별 미분 (2)를 $\ell$번 항별 미분한 복소 멱급수에 쓰면 $f_\ell$은 정칙함수이고, 그 도함수는 그것을 항별 미분한 복소 멱급수가 $D$ 위에 나타내는 함수, 곧 (1)에 의해 $f_{\ell+1}$이다. 귀납 가정에 의해 $f^{(\ell)} = f_\ell$은 정칙함수이므로 고계 (2)에 의해 $f$는 $\ell + 1$번 미분가능하고, 고계 (1)에 의해 $f^{(\ell+1)} = (f^{(\ell)})' = f_\ell' = f_{\ell+1}$이다. 모든 $\ell$에서 $f$가 $\ell$번 미분가능하므로 $f$는 무한 번 미분가능하다. 진술의 식은 $f_\ell$의 정의와 복소 반지름 (7)의 (ii)이다.

**4의 증명.** 복소 반지름 (7)의 (ii)에 의해 $a \in D$이고 $f_\ell(a)$는 $\ell$번 항별 미분한 복소 멱급수의 $0$번째 계수 $d^{\ell}_0$이다. (3)과 $0! = 1$(계승 (1))에 의해 $f^{(\ell)}(a) = f_\ell(a) = d^{\ell}_0 = \ell!\,(0!)^{-1} c_\ell = \ell!\, c_\ell$이다. 계승 (3)에 의해 $\ell! \ne 0$이므로 [[complex-field]]의 (2)의 (i)에 의해 $\iota(\ell!) \ne 0$이고, 양변에 $\iota(\ell!)^{-1}$을 곱하면 $c_\ell = f^{(\ell)}(a)/\ell!$이다.

**5의 증명.** (i) $A$가 위로 유계라 하자. $0 \le s < r$인 실수 $s$를 잡고 $z = a + \iota(s)$로 두면 [[modulus-of-complex-number]]의 (5)와 [[absolute-value]]의 정의에 의해 $|z - a| = |s| = s < r$이므로 $z \in B(a, r)$이고, 가정에 의해 복소 멱급수는 $z$에서 수렴한다. 복소 반지름 (5)의 (i)에 의해 $s = |z - a| \le \rho$이다. [[radius-of-convergence]]의 (1)의 (iii)에 의해 $0 \le \rho$이다. 만약 $\rho < r$이면 $s = (\rho + r)/2$는 $0 \le \rho < s < r$을 만족하므로(순서 성질) 앞의 결론에 의해 $s \le \rho$이어야 하는데, 이것은 $\rho < s$와 어긋난다. 따라서 $r \le \rho$이고 $0 < r$이므로 $0 < \rho$이다. 이 경우 $D = B(a, \rho)$이고 [[open-ball]]의 (2)에 의해 $B(a, r) \subseteq B(a, \rho) = D$이다. $A$가 위로 유계가 아니면 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이고 $D = \mathbb{C}$이므로 $B(a, r) \subseteq D$이다.

(ii) 두 복소 멱급수에 (i)을 쓰면 둘 다 복소 반지름 (7)의 (i)의 두 경우 가운데 하나에 들고, 각각의 $D$를 $D_1$, $D_2$, 나타내는 함수를 $f_1 : D_1 \to \mathbb{C}$, $f_2 : D_2 \to \mathbb{C}$라 하면 $U = B(a, r)$는 $D_1$과 $D_2$의 부분집합이다. $U$는 열린집합이다($z \in U$이면 $s = r - |z - a|$에 대하여 [[open-ball]]의 (3)에 의해 $0 < s$이고 $B(z, s) \subseteq U$이다). 가정에 의해 모든 $z \in U$에서 $f_1(z) = f_2(z)$이므로 $f_1|_U = f_2|_U$이다([[function]]의 같음). (3)에 의해 $f_1$과 $f_2$는 무한 번 미분가능하고, 고계 (5)의 (i)에 의해 모든 $\ell$에서 $(f_1|_U)^{(\ell)} = f_1^{(\ell)}|_U$, $(f_2|_U)^{(\ell)} = f_2^{(\ell)}|_U$이다. $a \in U$이므로
$$
\begin{aligned}
f_1^{(\ell)}(a) &= (f_1|_U)^{(\ell)}(a) \\
&= (f_2|_U)^{(\ell)}(a) = f_2^{(\ell)}(a)
\end{aligned}
$$
이고, (4)에 의해 $\ell!\,c_\ell = \ell!\,b_\ell$이다. $\iota(\ell!) \ne 0$이므로 $c_\ell = b_\ell$이다. 둘째 문장은 모든 $b_n$이 $0$인 경우이다. 모든 항이 $0$인 급수의 합은 $0$이므로([[complex-series|복소 급수]]의 (3)) 이 복소 멱급수는 모든 점에서 수렴하고 합이 $0$이다.

**6의 증명.** $m$이 있는 것: $c_n \ne 0$인 $0$ 이상의 정수 전체의 집합은 공집합이 아니고 $0$으로 아래로 유계인 정수의 집합이므로 [[well-ordering-principle]]의 (3)에 의해 최소 원소 $m$을 가진다. $m$의 정의에 의해 $0 \le n < m$이면 $c_n = 0$이다.

$e_n = c_{n+m}$으로 두고, 중심이 $a$이고 계수가 $(e_n)_{n \ge 0}$인 복소 멱급수를 "$m$칸 당긴 복소 멱급수"라 하자. $z \in D$를 잡는다.

- $z = a$이면 복소 멱급수 (2)에 의해 당긴 복소 멱급수는 $a$에서 수렴하고 합은 $e_0 = c_m$이다. 또 $f(a) = c_0$이다. $m = 0$이면 $(a - a)^0 g(a) = 1 \cdot c_0 = f(a)$이고, $m \ge 1$이면 $c_0 = 0$이고 복소 거듭제곱 (3)의 (i)에 의해 $(a - a)^m = 0^m = 0$이므로 $(a - a)^m g(a) = 0 = f(a)$이다.
- $z \ne a$이면 $w = z - a \ne 0$으로 둔다. 복소 반지름 (7)의 (ii)에 의해 $(c_n w^n)_{n \ge 0}$의 급수는 수렴하고 합이 $f(z)$이다. 복소 급수 (4)를 $K = m - 1$에 쓰면 $n \ge m$에서 정해진 항 $c_n w^n$의 급수도 수렴하고 $f(z) = \sum_{n=0}^{m-1} c_n w^n + \sum_{n=m}^{\infty} c_n w^n$이다. 앞의 합은 항이 모두 $0$이므로 [[complex-finite-sum|복소수의 유한 합]]의 (4)와 (8)에 의해 $0$이다($m = 0$이면 빈 합). 복소 급수 (5)에 의해 $n \ge m$에서 정해진 항 $c_n w^n (w^m)^{-1}$의 급수도 수렴하고 합은 $f(z)\,(w^m)^{-1}$이다. 복소 거듭제곱 (2), (3)의 (ii)에 의해 $n \ge m$에서 $w^n (w^m)^{-1} = w^{n-m}$이므로 그 항은 $c_n w^{n-m}$이다. [[complex-series|복소 급수]]의 정의에 의해 이 급수는 $j$번째 항이 $c_{j+m-1} w^{j-1}$인 복소수열의 급수이고, 당긴 복소 멱급수의 $z$에서의 항 $(e_n w^n)_{n \ge 0}$을 한 칸 옮긴 수열도 $j$번째 항이 $e_{j-1} w^{j-1} = c_{j-1+m} w^{j-1}$인 같은 복소수열이다. 따라서 당긴 복소 멱급수는 $z$에서 수렴하고 그 합 $g(z)$는 $f(z)\,(w^m)^{-1}$이다. 곧 $f(z) = w^m g(z) = (z - a)^m g(z)$이다.

이제 $g$가 정칙함수임을 보인다. 당긴 복소 멱급수의 집합 $A$와 수렴 반지름을 $A'$, $\rho'$이라 하자. $D = \mathbb{C}$이면 당긴 복소 멱급수는 모든 복소수에서 수렴하므로 복소 반지름 (3)의 뒷 문장에 의해 $A'$은 위로 유계가 아니고, 당긴 복소 멱급수가 $\mathbb{C}$ 위에 나타내는 함수가 $g$이다. $D = B(a, \rho)$이면 당긴 복소 멱급수가 $B(a, \rho)$의 모든 점에서 수렴하므로 (5)의 (i)을 당긴 복소 멱급수와 $r = \rho$에 쓰면 당긴 복소 멱급수는 복소 반지름 (7)의 (i)의 두 경우 가운데 하나에 들고 $B(a, \rho)$는 그 $D'$의 부분집합이다. 어느 경우든 $g$는 당긴 복소 멱급수가 $D'$ 위에 나타내는 함수 $\tilde{g}$의 $D$로의 제한이다. 항별 미분 (2)에 의해 $\tilde{g}$는 정칙함수이고, $D$는 열린집합이므로(항별 미분 (2)) 복소 미분 (4)의 (i)에 의해 $g = \tilde{g}|_D$는 정칙함수이며, 복소 미분 (3)에 의해 연속이다. $g(a) = c_m \ne 0$은 위에서 보였다.

마지막 문장: (4)에 의해 $f^{(k)}(a) = k!\, c_k$이고, $0 \le k < m$이면 $c_k = 0$이므로 $f^{(k)}(a) = 0$이며, $f^{(m)}(a) = m!\, c_m$이다. 계승 (3)과 [[complex-field]]의 (1)(곱셈군 $\mathbb{C}^{\times}$)에 의해 $\iota(m!)\,c_m \ne 0$이다.

**7의 증명.** $0$이 아닌 계수가 있다고 가정하고 모순을 이끈다. (6)의 $m$과 $g$를 잡는다. $g : D \to \mathbb{C}$는 $a$에서 연속이고 $g(a) \ne 0$이므로, [[limit-laws-for-complex-functions|복소함수의 극한 법칙]]의 (9)를 $S = D$, $q = g$에 쓰면 실수 $r > 0$이 있어 $z \in D$이고 $|z - a| < r$인 모든 $z$에서 $g(z) \ne 0$이다. 이런 $z$가 $z \ne a$이면 $z - a \ne 0$이므로 복소 거듭제곱 (2)에 의해 $(z - a)^m \ne 0$이고, [[complex-field]]의 (1)(곱셈군 $\mathbb{C}^{\times}$에서 곱은 다시 $\mathbb{C}^{\times}$의 원소)에 의해 $f(z) = (z - a)^m g(z) \ne 0$이다. 곧 $z \in Z$이고 $|z - a| < r$이면 $z = a$이다. [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (i)에 의해 $a$는 $Z$의 집적점이 아니고, 이것은 가정과 어긋난다. 따라서 모든 계수가 $0$이다. 그러면 모든 $z \in D$에서 $z$에서의 항이 모두 $0$이므로 복소 급수 (3)에 의해 $f(z) = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[처음 두 계수가 $0$인 복소 멱급수]
중심이 $i$이고 $c_0 = c_1 = 0$, $n \ge 2$에서 $c_n = 2^{-n}$인 복소 멱급수를 봅시다. $z = i + 2$에서의 항은 $n \ge 2$에서 $2^{-n} \cdot 2^n = 1$이어서 $0$으로 수렴하지 않으므로 [[complex-series|복소 급수]]의 (7)에 의해 이 점에서 발산하고, [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (5)의 (ii)에 의해 $A$는 위로 유계이고 $\rho \le |2| = 2$입니다. 한편 $r = 2$이면 $(|c_n| 2^n)_{n \ge 0}$의 값은 $0$과 $1$뿐이어서 유계이므로 $2 \in A$이고, [[radius-of-convergence]]의 (1)의 (iii)에 의해 $2 \le \rho$입니다. 따라서 $\rho = 2$이고 $D = B(i, 2)$입니다.

가장 작은 $n$으로 $c_n \ne 0$인 것은 $m = 2$이므로 (6)에 의해 $f(z) = (z - i)^2 g(z)$이고, $g$는 계수가 $c_{n+2} = 2^{-(n+2)}$인 복소 멱급수가 나타내는 정칙함수이며 $g(i) = 1/4$입니다. (4)와 (6)에 의해 $f(i) = 0$, $f'(i) = 0$이고, $k \ge 2$에서 $f^{(k)}(i) = k!\, 2^{-k}$입니다. 예컨대 $f''(i) = 2/4 = 1/2$, $f^{(3)}(i) = 6/8 = 3/4$, $f^{(5)}(i) = 120/32 = 15/4$입니다. (3)에 의해 $f''$은 계수가 $d^{2}_n = (n + 2)(n + 1)\, 2^{-(n+2)}$인 복소 멱급수가 $B(i, 2)$ 위에 나타내는 함수이고, 그 $0$번째 계수 $d^2_0 = 2 \cdot 1 \cdot 2^{-2} = 1/2$이 $f''(i)$와 맞습니다.
:::

:::counterexample[중심이 다른 두 복소 멱급수가 같은 함수를 나타내는 예]
중심이 $0$이고 $c_1 = 1$, 그 밖의 계수가 $0$인 복소 멱급수와, 중심이 $1$이고 $b_0 = 1$, $b_1 = 1$, 그 밖의 계수가 $0$인 복소 멱급수를 봅시다. 둘 다 계수가 유한 개만 $0$이 아니므로 $r \ge 0$마다 절댓값 계수의 항이 $1 + r$ 이하여서 유계이고, 모든 복소수에서 수렴하는 복소 멱급수입니다. [[complex-series|복소 급수]]의 (4)로 꼬리를 떼면 앞의 것이 나타내는 함수의 $z$에서의 값은 $z$이고, 뒤의 것은 $1 + (z - 1) = z$입니다. 이 함수를 $f$라 하면 두 복소 멱급수는 $\mathbb{C}$ 위에 같은 함수 $f$를 나타내지만 $0$번째 계수가 $0$과 $1$로 다릅니다. (5)의 (ii)는 중심이 같은 두 복소 멱급수에 대한 것입니다. (4)를 $\ell = 0$에 쓰면 $c_0 = f(0) = 0$이고 $b_0 = f(1) = 1$이어서, 두 계수는 $f$의 서로 다른 점에서의 값입니다.
:::

:::counterexample[영점이 무한히 많아도 중심이 집적점이 아닌 예]
중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (n!)^{-1}$인 복소 멱급수를 봅시다. [[complex-exponential-function|복소 지수함수]]의 (5)와 [[complex-series|복소 급수]]의 (4)($K = 0$, $0$번째 항은 $c_0 z^0 = 0$)에 의해 이것은 모든 점 $z$에서 수렴하고 합은 $0 + (\exp(z) - 1) = \exp(z) - 1$이므로, 모든 복소수에서 수렴하는 복소 멱급수이고([[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (3)) 나타내는 함수는 $f(z) = \exp(z) - 1$입니다.

정수 $k$마다 $z_k = \iota(2\pi k)\, i$로 두면 [[periodicity-of-trigonometric-functions|삼각함수의 주기]]의 (3)에 의해 $\exp(z_k) = 1$이므로 $f(z_k) = 0$입니다. [[definition-of-pi|원주율]]의 (1)에 의해 $0 < \pi / 2$, 곧 $0 < \pi$이므로 서로 다른 정수 $k$는 서로 다른 $z_k$를 주고, $f$의 영점은 무한히 많습니다. 그런데 $c_1 = 1 \ne 0$이므로 (7)에 의해 $0$은 영점의 집합의 집적점이 아닙니다. 곧 (7)의 가정은 "영점이 무한히 많다"로 바꿀 수 없습니다.
:::

## 확인 질문

:::check[중심이 $0$이고 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 $f$가 모든 자연수 $k$에서 $f(i/k) = 0$이면 $f$는 어떤 함수인가?]
모든 값이 $0$인 함수입니다. $Z = \{z \in \mathbb{C} : f(z) = 0\}$의 집적점이 $0$임을 보이면 (7)을 쓸 수 있습니다. 실수 $r > 0$을 잡으면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/k < r$인 자연수 $k$가 있고, $z = i/k$는 $Z$의 원소이며 $z \ne 0$이고 $|z - 0| = |i|\,(1/k) = 1/k < r$입니다([[modulus-of-complex-number]]의 (5)). [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (i)에 의해 $0$은 $Z$의 집적점이고, (7)에 의해 모든 계수가 $0$이며 $f$는 모든 값이 $0$인 함수입니다.
:::

:::check[중심이 $0$이고 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 $f$가 모든 $z$에서 $f(iz) = f(z)$이면 어떤 계수가 $0$인가?]
$4$의 배수가 아닌 $n$의 계수 $c_n$이 모두 $0$입니다. [[power-of-a-complex-number]]의 (3)의 (i)에 의해 $(iz)^n = i^n z^n$이므로, $f(iz) = \sum_{n=0}^{\infty} c_n (iz)^n = \sum_{n=0}^{\infty} (i^n c_n) z^n$이고, 계수가 $(i^n c_n)_{n \ge 0}$인 중심 $0$의 복소 멱급수는 모든 $z$에서 수렴하며 합이 $f(iz) = f(z)$입니다. (5)의 (ii)를 아무 $r > 0$에 쓰면 모든 $n$에서 $i^n c_n = c_n$, 곧 $(i^n - 1)c_n = 0$입니다. [[power-of-a-complex-number]]의 (6)의 표에 의해 $n$을 $4$로 나눈 나머지가 $1$, $2$, $3$이면 $i^n$은 $i$, $-1$, $-i$이므로 $i^n - 1 \ne 0$이고, 양변에 $(i^n - 1)^{-1}$을 곱하면 $c_n = 0$입니다. 나머지가 $0$이면 $i^n = 1$이어서 조건이 아무것도 말하지 않습니다.
:::
