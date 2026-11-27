---
title: 정칙함수의 멱급수 전개
title_en: Power Series Expansion of Holomorphic Functions
aliases: [정칙함수는 멱급수로 전개된다, 테일러 전개, 중심 옮기기, holomorphic functions are analytic, Taylor expansion of holomorphic functions, power series expansion]
kind: theorem
field: complex-analysis
msc: ["30B10"]
level: undergrad
summary: "열린 원판 B(a, R) 를 포함하는 열린집합 위의 정칙함수 f 는, 원 경로를 따른 f(z)/(z − a)^(n+1) 의 적분을 2πi 로 나눈 계수로 만든 a 중심의 복소 멱급수와 B(a, R) 위에서 같다. 계수는 반지름에 따르지 않고 멱급수의 수렴 반지름은 R 이상이다. 정함수는 모든 복소수에서 수렴하는 멱급수로 나타나고, 열린집합 위의 함수가 정칙인 것은 점마다 멱급수로 나타나는 원판이 있는 것과 같으며, 복소 멱급수가 나타내는 함수는 원판 안의 다른 점을 중심으로도 전개된다."
requires: [order-properties-of-reals, bernoulli-inequality, series-indexed-from-zero, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, open-ball, open-ball-is-open, open-set-in-metric-space, complex-plane-as-metric-space, subspace-and-continuity, continuity-of-complex-operations, complex-series, absolute-convergence-of-complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-derivative, complex-power-series-is-holomorphic, taylor-coefficients-of-complex-power-series, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, integrals-over-circles, definition-of-pi, cauchy-integral-formula]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Taylor and Laurent Series 장의 Power Series and Holomorphic Functions 절, Theorem thm_holomorphicpower 와 그 증명, 거리와 Corollary cor_powerseriesboundary, Example ex_powerseriesboundary, 해석적 함수의 정의와 그 뒤의 Theorem, source/sec_powerseriesholom.ptx:252–375, 457–488"
    checked: original
    note: "출처 Theorem thm_holomorphicpower(sec_powerseriesholom.ptx:252–269)는 D[z₀, R] 에서 정칙인 f 가 z₀ 중심의 멱급수로 나타나고 수렴 반지름이 R 이상이며, 계수가 z₀ 를 안에 두는 단순 닫힌 경로를 따른 적분이라고 진술한다. 증명(270–318)은 점 z 마다 r = (|z| + R)/2 를 잡아 일반 코시 적분 공식과 기하급수의 고른 수렴으로 항별 적분하고, 마지막에 코시 정리(호모토피)로 원 C[z₀, r] 을 다른 경로로 바꾼다. 이 항목은 원 경로만 쓰고, 계수가 반지름 r 에 따르지 않는다는 것((1))을 호모토피 대신 2단원의 계수의 유일성으로 보인다. 반지름을 (|z − a| + R)/2 로 잡는 것은 출처와 같다. (4)는 출처의 해석적 함수의 정의(457–470)와 그 뒤의 Theorem(480–488, 영역에서 해석적 함수와 정칙함수가 같다)과 같은 내용이고, 이 항목은 '해석적'이라는 이름을 붙이지 않고 열린집합에서 진술한다. 출처는 경계까지의 거리로 수렴 반지름의 아래 한계를 적는데(330–355), 이 항목은 'B(a, R) ⊆ G 인 R' 꼴로만 진술한다. 예시 '$1/(z - 3)$의 $0$ 중심 전개'는 출처 Example ex_powerseriesboundary(356–375, 1/(z² + 1) 의 0 중심 전개와 반지름 1)와 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.4소절 Power series as analytic functions, Corollary 11.3.7 (p.159)"
    checked: original
    note: "출처 Corollary 11.3.7(realanal2.txt 8235–8237, p.159)은 B(a, ρ) 에서 f 로 수렴하는 a 중심의 멱급수가 있으면 b ∈ B(a, ρ) 에서 B(b, ρ − |b − a|) 위에서 f 로 수렴하는 b 중심의 멱급수가 있다고 진술하고, 이중급수의 순서 바꾸기(Theorem 11.3.5)로 증명한다. 이 항목의 (5)는 같은 결론이고, 이중급수 없이 나타내는 함수가 정칙이라는 것과 (2)로 보인다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시 부등식의 수열 없는 귀류, 계수 유일성의 번호). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱(음의 정수 지수는 $0$이 아닌 복소수에만)은 [[power-of-a-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, R)$와 닫힌 공 $C(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 정칙함수와 정함수는 [[complex-derivative|복소 미분]]의 것이다. 복소 멱급수, 그 수렴과 합, 집합 $A$, 수렴 반지름 $\rho$, 모든 복소수에서 수렴하는 복소 멱급수는 [[complex-power-series|복소 멱급수]]의 것이고, 집합 $D$와 복소 멱급수가 $D$ 위에 나타내는 함수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이다. 원 경로 $\gamma_{a,r}$와 그 상은 [[path-in-the-complex-plane|경로]]의 (3)의 것이고, "상 위에서 연속"과 경로 적분은 [[path-integral|경로 적분]]의 것이다. 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다.

아래 (1)–(3)에서 $a$는 복소수, $R$은 양의 실수, $G$는 $B(a, R) \subseteq G$인 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$는 정칙함수이다. $0 < r < R$인 실수 $r$과 $0$ 이상인 정수 $n$에 대하여, $z$에서의 값이 $f(z)/(z - a)^{n+1}$인 함수 $G - \{a\} \to \mathbb{C}$는 $\gamma_{a,r}$의 상 위에서 연속이고(아래 증명), 복소수
$$
c_n(r) = \frac{1}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{(z - a)^{n+1}}\,dz
$$
가 정해진다.

1. (계수는 반지름에 따르지 않는다) $0 < r_1 < R$이고 $0 < r_2 < R$이면 $0$ 이상인 모든 정수 $n$에서 $c_n(r_1) = c_n(r_2)$이다. 이 공통의 값을 $c_n$으로 쓴다.
2. (**멱급수 전개**) 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수는 $B(a, R)$의 모든 점 $z$에서 수렴하고
   $$
   f(z) = \sum_{n=0}^{\infty} c_n (z - a)^n
   $$
   이다. 따라서 이 복소 멱급수는 $A$가 위로 유계이고 $R \le \rho$이거나 모든 복소수에서 수렴하는 복소 멱급수이고, $B(a, R) \subseteq D$이며, 그것이 $D$ 위에 나타내는 함수는 $B(a, R)$의 모든 점에서 $f$와 같은 값을 갖는다.
3. (정함수) $G = \mathbb{C}$이면 $0 < r_1$, $0 < r_2$인 모든 실수에서 $c_n(r_1) = c_n(r_2)$이고, 그 공통의 값 $c_n$으로 만든 중심이 $a$인 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이며 모든 복소수 $z$에서 그 합이 $f(z)$이다.
4. (정칙과 멱급수) $U$가 $(\mathbb{C}, d)$의 열린집합이고 $h : U \to \mathbb{C}$라 하자. $h$가 정칙함수인 것은 정확히, $U$의 모든 점 $b$에서 양의 실수 $s$와 중심이 $b$인 복소 멱급수가 있어 $B(b, s) \subseteq U$이고 그 복소 멱급수가 $B(b, s)$의 모든 점 $z$에서 수렴하며 합이 $h(z)$일 때이다.
5. (**중심 옮기기**) 중심이 $a$인 복소 멱급수가 $A$가 위로 유계이고 $0 < \rho$이거나 모든 복소수에서 수렴하는 복소 멱급수라 하고, 그것이 $D$ 위에 나타내는 함수를 $g$, $b \in D$라 하자.
   - (i) $A$가 위로 유계이고 $0 < \rho$이면 $s = \rho - |b - a|$는 양수이고, 중심이 $b$인 어떤 복소 멱급수가 $B(b, s)$의 모든 점 $z$에서 수렴하며 합이 $g(z)$이다. 그 계수는 (1)을 $g$, $G = D$, 중심 $b$, $R = s$로 쓴 $c_n$이다.
   - (ii) 모든 복소수에서 수렴하는 복소 멱급수이면, 중심이 $b$인 어떤 모든 복소수에서 수렴하는 복소 멱급수가 모든 복소수 $z$에서 합이 $g(z)$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number; powers (negative integer exponents only for nonzero complex numbers) are those of the entry on powers of a complex number. The metric and topology of $\mathbb{C}$, open balls $B(a, R)$ and closed balls $C(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Holomorphic and entire functions are those of the entry on the complex derivative. Complex power series, their convergence and sums, the set $A$, the radius of convergence $\rho$, and complex power series converging at every complex number are those of the entry on complex power series, and the set $D$ and the function a complex power series represents on $D$ are those of (7) of the entry on the radius of convergence of complex power series. Circle paths $\gamma_{a,r}$ and their images are those of (3) of the entry on paths, and "continuous on the image" and path integrals are those of the entry on path integrals. The number $\pi$ is that of the entry on pi.

In (1)–(3) below, $a$ is a complex number, $R$ a positive real number, $G$ an open set of $(\mathbb{C}, d)$ with $B(a, R) \subseteq G$, and $f : G \to \mathbb{C}$ a holomorphic function. For a real $r$ with $0 < r < R$ and an integer $n \ge 0$, the function $G - \{a\} \to \mathbb{C}$ whose value at $z$ is $f(z)/(z - a)^{n+1}$ is continuous on the image of $\gamma_{a,r}$ (proved below), and the complex number
$$
c_n(r) = \frac{1}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{(z - a)^{n+1}}\,dz
$$
is defined.

1. (The coefficients do not depend on the radius) If $0 < r_1 < R$ and $0 < r_2 < R$, then $c_n(r_1) = c_n(r_2)$ for every integer $n \ge 0$. This common value is written $c_n$.
2. (**Power series expansion**) The complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$ converges at every point $z$ of $B(a, R)$, and
   $$
   f(z) = \sum_{n=0}^{\infty} c_n (z - a)^n.
   $$
   Hence this complex power series either has $A$ bounded above with $R \le \rho$ or converges at every complex number, $B(a, R) \subseteq D$, and the function it represents on $D$ takes the same value as $f$ at every point of $B(a, R)$.
3. (Entire functions) If $G = \mathbb{C}$, then $c_n(r_1) = c_n(r_2)$ for all reals $0 < r_1$, $0 < r_2$, and the complex power series with center $a$ made from the common values $c_n$ converges at every complex number, with sum $f(z)$ at every complex number $z$.
4. (Holomorphy and power series) Let $U$ be an open set of $(\mathbb{C}, d)$ and $h : U \to \mathbb{C}$. Then $h$ is a holomorphic function exactly when, at every point $b$ of $U$, there are a positive real $s$ and a complex power series with center $b$ such that $B(b, s) \subseteq U$ and the power series converges at every point $z$ of $B(b, s)$ with sum $h(z)$.
5. (**Change of center**) Let a complex power series with center $a$ either have $A$ bounded above with $0 < \rho$ or converge at every complex number, let $g$ be the function it represents on $D$, and let $b \in D$.
   - (i) If $A$ is bounded above and $0 < \rho$, then $s = \rho - |b - a|$ is positive, and some complex power series with center $b$ converges at every point $z$ of $B(b, s)$ with sum $g(z)$. Its coefficients are the $c_n$ of (1) applied to $g$, $G = D$, center $b$, and $R = s$.
   - (ii) If it converges at every complex number, then some complex power series with center $b$ that converges at every complex number has sum $g(z)$ at every complex number $z$.
:::

## 직관

코시 적분 공식은 원판 안의 값 $f(w)$를 원 위의 $\frac{f(z)}{z - w}$의 적분으로 나타냅니다. $\frac{1}{z - w}$는 $w$에 대한 등비급수 $\sum (w - a)^n (z - a)^{-n-1}$로 펼쳐지므로, 적분과 합의 순서를 바꾸면 $f(w)$가 $(w - a)^n$의 급수가 됩니다. 순서를 바꿀 수 있는 것은 원 위에서 항의 크기가 수렴하는 등비급수로 눌리기 때문입니다.

한 원으로 얻은 급수는 그 원의 안쪽에서만 쓸 수 있으므로, $B(a, R)$의 점마다 그 점을 안에 두는 원을 잡습니다. 그런데 원을 바꾸면 계수의 식도 바뀝니다. 두 원에서 얻은 급수가 작은 원판에서 같은 함수이므로 계수가 같다는 것이 (1)이고, 이것은 2단원의 계수의 유일성에서 나옵니다. 그래서 하나의 멱급수가 $B(a, R)$ 전체에서 $f$와 같습니다.

비유하면, 정칙함수는 어느 점에서 보아도 그 둘레의 원판에서 하나의 다항식처럼 무한히 이어지는 식으로 쓰이는 함수입니다. 비유가 맞지 않는 곳은 식이 유한 합이 아니라 급수이고, 원판의 크기는 함수가 정칙인 곳에 따라 정해진다는 것입니다.

## 증명

:::idea
고정한 $r$에서 코시 적분 공식의 $\frac{1}{z - w}$를 원 위의 등비급수로 펼치고 M 판정법과 함께 항별 적분해 $B(a, r)$ 위에서 $f$가 계수 $c_n(r)$의 멱급수와 같음을 보인다(아래 (가)). 두 반지름의 멱급수가 작은 원판에서 같으므로 계수의 유일성으로 $c_n(r)$이 $r$에 따르지 않는다. 나머지는 이것을 점마다 쓰는 것이다.
:::

:::hint
$|w - a| < r$이고 $z$가 원 위에 있으면 $\bigl|f(z)(w - a)^n (z - a)^{-n-1}\bigr| \le M r^{-1}\kappa^n$이고 $\kappa = |w - a|/r < 1$입니다.
:::

:::hint
(2)에서 $z \in B(a, R)$이면 $r = (|z - a| + R)/2$로 둡니다.
:::

:::proof
"멱급수 (n)"은 [[complex-power-series|복소 멱급수]], "반지름 (n)"은 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]], "계수 (n)"은 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]], "항별 미분 (n)"은 [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]], "미분 (n)"은 [[complex-derivative|복소 미분]], "적분 (n)"은 [[path-integral|경로 적분]], "ML (n)"은 [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]], "원 (n)"은 [[integrals-over-circles|원 경로 위의 적분]]의 번호이다. 거리 (3)에 의해 $z \in B(a, r)$인 것은 정확히 $|z - a| < r$일 때이다([[complex-plane-as-metric-space|복소평면의 거리]]). 미분 (3)에 의해 $f$는 연속이다.

**정해짐.** $0 < r < R$이고 $K_r = \{z : |z - a| = r\}$을 $\gamma_{a,r}$의 상이라 하자([[path-in-the-complex-plane|경로]]의 (3)). [[open-ball]]의 (2)에 의해 $K_r \subseteq C(a, r) \subseteq B(a, R) \subseteq G$이고, $K_r$의 점은 $a$가 아니다. $z$에서의 값이 $(z - a)^{n+1}$인 함수 $G - \{a\} \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 연속이고 [[power-of-a-complex-number]]의 (2)에 의해 값이 $0$이 아니며, $f$의 제한은 [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 연속이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (4)의 (i)에 의해 몫은 연속이다. 따라서 $c_n(r)$이 정해진다. [[power-of-a-complex-number]]의 (3)의 (ii)에 의해 $z \ne a$에서 $1/(z - a)^{n+1} = (z - a)^{-n-1}$이다.

**(가) 고정한 반지름.** $0 < r < R$이고 $|w - a| < r$이면 중심이 $a$이고 계수가 $(c_n(r))_{n \ge 0}$인 복소 멱급수는 $w$에서 수렴하고 그 합은 $f(w)$이다.

증명: $C(a, r) \subseteq G$이므로 [[cauchy-integral-formula|코시 적분 공식]]의 (2)에 의해, $z$에서의 값이 $f(z)/(z - w)$인 함수 $k : G - \{w\} \to \mathbb{C}$에 대하여 $2\pi i\, f(w) = \int_{\gamma_{a,r}} k$이다. $n \ge 0$마다 $z$에서의 값이 $f_n(z) = (w - a)^n f(z)(z - a)^{-n-1}$인 함수 $f_n : G - \{a\} \to \mathbb{C}$는 위에서처럼 $K_r$ 위에서 연속이다. ML (2)의 (ii)에 의해 $K_r$의 모든 $z$에서 $|f(z)| \le M$인 실수 $M$이 있다. $\kappa = |w - a|\,r^{-1}$로 두면 원 (2)의 (i)에 의해 $0 \le \kappa < 1$이고, $K_r$의 모든 $z$에서 $(w - a)^n (z - a)^{-n-1}$의 급수는 절대수렴하고 합이 $\frac{1}{z - w}$이며 $\bigl|(w - a)^n (z - a)^{-n-1}\bigr| = r^{-1}\kappa^n$이고, $r^{-1}\kappa^n$의 급수는 수렴한다. 따라서 [[modulus-of-complex-number]]의 (3)과 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $|f_n(z)| \le M r^{-1}\kappa^n$이고, [[series-indexed-from-zero]]의 (9)에 의해 $M_n = M r^{-1}\kappa^n$의 급수는 수렴한다. ML (4)의 (ii)(0부터 번호가 붙은 꼴)에 의해, $z \in K_r$에서의 값이 $T(z) = \sum_{n=0}^{\infty} f_n(z)$인 함수 $T$는 연속이고 $\sum_{n=0}^{\infty} \int_{\gamma_{a,r}} f_n = \int_{\gamma_{a,r}} T$이다. [[complex-series|복소 급수]]의 (5)에 의해 $K_r$에서 $T(z) = f(z)\sum_{n=0}^{\infty} (w - a)^n (z - a)^{-n-1} = f(z)/(z - w) = k(z)$이므로 적분 (1)에 의해 $\int_{\gamma_{a,r}} T = \int_{\gamma_{a,r}} k = 2\pi i\, f(w)$이다. 한편 적분 (1)에 의해 $\int_{\gamma_{a,r}} f_n = (w - a)^n \cdot 2\pi i\, c_n(r)$이다. 따라서 $2\pi i\, c_n(r)(w - a)^n$의 급수는 수렴하고 합이 $2\pi i\, f(w)$이며, [[complex-series|복소 급수]]의 (5)로 $(2\pi i)^{-1}$을 곱하면($\pi > 0$이므로 $2\pi i \ne 0$, [[definition-of-pi|원주율]]의 (1)) $c_n(r)(w - a)^n$의 급수는 수렴하고 합이 $f(w)$이다.

**1의 증명.** $r_1 = r_2$이면 할 것이 없다. $r_1 < r_2$라 하자. (가)에 의해 계수가 $(c_n(r_1))$인 복소 멱급수는 $B(a, r_1)$의 모든 점에서 수렴하고 합이 $f$의 값이다. [[open-ball]]의 (2)에 의해 $B(a, r_1) \subseteq B(a, r_2)$이므로, (가)에 의해 계수가 $(c_n(r_2))$인 복소 멱급수도 $B(a, r_1)$의 모든 점에서 수렴하고 합이 $f$의 값이다. 계수 (5)의 (ii)를 $r = r_1$로 쓰면 모든 $n$에서 $c_n(r_1) = c_n(r_2)$이다. $r_2 < r_1$이면 두 반지름을 바꾸어 같은 논법을 쓴다.

**2의 증명.** $z \in B(a, R)$이면 $r = (|z - a| + R)/2$로 둔다. $0 \le |z - a| < R$이므로 [[order-properties-of-reals]]의 (8)에 의해 $|z - a| < r < R$이고 $0 < r$이다. (가)와 (1)에 의해 계수가 $(c_n)$인 복소 멱급수는 $z$에서 수렴하고 합이 $f(z)$이다. 계수 (5)의 (i)을 반지름 $R$로 쓰면 이 복소 멱급수는 $A$가 위로 유계이고 $R \le \rho$이거나 모든 복소수에서 수렴하는 복소 멱급수이고 $B(a, R) \subseteq D$이다. 반지름 (7)의 (ii)의 정의에 의해 나타내는 함수의 $z \in B(a, R)$에서의 값은 이 합, 곧 $f(z)$이다.

**3의 증명.** $0 < r_1$, $0 < r_2$이면 $R = \max\{r_1, r_2\} + 1$로 둘 때 $B(a, R) \subseteq \mathbb{C}$이고 $r_1, r_2 < R$이므로 (1)에 의해 $c_n(r_1) = c_n(r_2)$이다. 복소수 $z$마다 $R = |z - a| + 1$로 두면 $z \in B(a, R)$이므로 (2)에 의해 복소 멱급수는 $z$에서 수렴하고 합이 $f(z)$이다. 복소 멱급수가 모든 복소수에서 수렴하므로 반지름 (3)에 의해 $A$는 위로 유계가 아니다.

**4의 증명.** $h$가 정칙함수이고 $b \in U$이면, $U$가 열린집합이므로 $B(b, s) \subseteq U$인 $s > 0$이 있고 (2)를 $G = U$, $a = b$, $R = s$로 쓴다. 거꾸로 조건이 성립하고 $b \in U$라 하자. 계수 (5)의 (i)에 의해 그 복소 멱급수는 (2)의 두 경우 가운데 하나이고 $B(b, s) \subseteq D$이다. 그것이 $D$ 위에 나타내는 함수를 $g$라 하면 항별 미분 (2)에 의해 $D$는 열린집합이고 $g$는 정칙함수이다. [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B(b, s)$는 열린집합이고, 미분 (4)의 (i)에 의해 $g|_{B(b, s)}$는 정칙함수이다. 가정에 의해 $h|_{B(b, s)} = g|_{B(b, s)}$이므로 미분 (4)의 (i)을 $h$와 $B(b, s)$에 쓰면 $h$는 $b$에서 복소 미분가능하다. $b$는 아무 점이었으므로 $h$는 정칙함수이다.

**5의 증명.** 항별 미분 (2)에 의해 $D$는 열린집합이고 $g$는 정칙함수이다. (i) $b \in D = B(a, \rho)$이므로 $|b - a| < \rho$이고 $s = \rho - |b - a| > 0$이며, [[open-ball]]의 (3)에 의해 $B(b, s) \subseteq B(a, \rho)$이다. (2)를 $g$, $G = D$, 중심 $b$, $R = s$로 쓴다. (ii) $D = \mathbb{C}$이고 $g$는 정함수이므로 (3)을 $g$와 중심 $b$로 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[$1/(z - 3)$의 $0$ 중심 전개]
$f(z) = 1/(z - 3)$은 $G = \mathbb{C} - \{3\}$에서 정칙이고 $B(0, 3) \subseteq G$입니다. (2)에 의해 $f$는 $B(0, 3)$에서 $0$ 중심의 복소 멱급수와 같고 그 수렴 반지름은 $3$ 이상입니다. 그 계수는 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)로 직접 구할 수 있습니다. $|z| < 3$이면 $|z/3| < 1$이므로
$$
\begin{aligned}
\frac{1}{z - 3} &= -\frac{1}{3}\cdot\frac{1}{1 - z/3} \\
&= \sum_{n=0}^{\infty} \Bigl(-\frac{1}{3^{n+1}}\Bigr) z^n
\end{aligned}
$$
이고, [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (5)의 (ii)에 의해 $c_n = -3^{-n-1}$입니다. 그러면 계수의 정의에서
$$
\int_{\gamma_{0,1}} \frac{dz}{(z - 3)\,z^{n+1}} = -\frac{2\pi i}{3^{n+1}}
$$
도 얻습니다.
:::

## 확인 질문

:::check[$1/(z - 3)$을 $0$ 중심으로 전개한 멱급수는 $z = 4$에서 수렴하는가?]
아닙니다. $z = 4$에서 항의 절댓값은 $4^n/3^{n+1} = \frac{1}{3}\bigl(1 + \frac{1}{3}\bigr)^n$이고, [[bernoulli-inequality|베르누이 부등식]]에 의해 이것은 $\frac{1}{3}\bigl(1 + \frac{n}{3}\bigr)$ 이상이므로 유계가 아닙니다. [[complex-power-series|복소 멱급수]]의 (3)의 (ii)에 의해 발산합니다. (2)는 수렴 반지름이 $3$ 이상이라는 것만 말합니다.
:::

:::check[$B(0, 1)$ 위의 정칙함수에서 $c_5$를 $r = 1/2$과 $r = 3/4$로 계산하면 어떻게 되는가?]
같은 값입니다. (1)에 의해 $0 < r < 1$인 모든 $r$에서 $c_5(r)$은 같습니다.
:::
