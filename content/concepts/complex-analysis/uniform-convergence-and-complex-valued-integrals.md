---
title: 복소수값 함수열의 고른 수렴과 적분
title_en: Uniform Convergence and Integrals of Complex-Valued Functions
aliases: [복소수값 함수항 급수, 복소 M 판정법, 복소수값 함수의 항별 적분, 복소수값 바이어슈트라스 M 판정법, complex Weierstrass M-test, series of complex-valued functions, termwise integration of complex-valued functions]
kind: theorem
field: complex-analysis
msc: ["30", "40A30"]
level: undergrad
summary: "집합 위의 복소수값 사상의 열의 부분합 사상과 함수항 급수의 점별·고른 수렴을 정한다. 고른 수렴은 실수부와 허수부의 고른 수렴과 같고, 연속인 사상의 고른 극한은 연속이다. 복소수값 바이어슈트라스 M 판정법과 꼬리의 어림, 고르게 수렴하는 함수열의 적분과 함수항 급수의 항별 적분을 1부터와 0부터 번호가 붙은 열에서 진술한다."
requires: [function, recursion-theorem, power-of-a-real-number, p-series, basic-limits, antiderivative-and-integral-of-power, power-of-a-complex-number, real-number-arithmetic, absolute-value, interval, pointwise-convergence, uniform-convergence, uniform-limit-of-continuous-maps, series-of-functions, finite-sums-of-functions, weierstrass-m-test, uniform-convergence-and-integral, sum-of-a-series, continuous-map, complex-number, complex-field, modulus-of-complex-number, complex-plane-as-metric-space, convergence-of-complex-sequences, complex-finite-sum, complex-series, absolute-convergence-of-complex-series, continuity-of-complex-operations, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.2절 Swapping limits, 11.2.1소절 Continuity, 복소수값 함수항 급수의 고른 수렴의 정의 (p.145)와 Theorem 11.2.4 (p.146); 11.2.2소절 Integration, Proposition 11.2.11 과 그 뒤 문단 (p.148–149), Corollary 11.2.12 (p.149)"
    checked: original
    note: "출처 11.2.1소절(p.145)은 복소수값 함수의 급수가 고르게 수렴한다는 것을 부분합의 열이 고르게 수렴한다는 것으로 정한다. 이 항목의 정의도 같고, 0부터 번호가 붙은 열은 series-of-functions 의 (6)의 꼴을 따랐다. 출처 Theorem 11.2.4(p.146)는 집합 X 위의 f_n : X → ℂ 와 양수 M_n 에 대한 M 판정법이고, 출처는 고르게 코시인 열로 증명한다. 이 항목의 (3)은 M_n 이 양수일 것을 요구하지 않고(0 이상이면 된다), 증명은 실수부와 허수부에 실숫값 M 판정법(weierstrass-m-test)을 쓰고 (1)로 묶는다. 꼬리의 어림은 출처의 진술에 없고 이 항목이 진술에 올렸다(뒤 항목이 인용한다). 출처 Proposition 11.2.11(p.148)은 [a, b] 위의 적분가능한 f_n : [a, b] → ℂ 가 f 로 고르게 수렴하면 f 가 적분가능하고 ∫f = lim ∫f_n 이라는 것이고, 출처는 그 뒤 문단(p.149)에서 '복소수값 함수의 적분은 실수부와 허수부의 적분이므로 1권 6장의 결과에서 바로 나온다'며 증명을 연습문제 11.2.7 로 남긴다. 이 항목의 (4)는 그 진술에 어림과 방향 있는 꼴을 더해 그 길로 증명한 것이다. (5)는 출처 Corollary 11.2.12(p.149)와 같은 내용이고 0부터 번호가 붙은 꼴과 방향 있는 꼴을 더했다."
  - ref: beck-first-course-complex-analysis
    loc: "Sequences and Series of Functions 절의 Proposition seriesintegral 과 그 뒤 문단, Proposition mtest 와 그 증명, Example ex_geomseriesasfunction, source/sec_sequseriesfunctions.ptx:207–330"
    checked: original
    note: "출처 Proposition seriesintegral(207–240)은 경로 위의 적분과 고른 극한의 교환이고, 증명은 '경로가 한 점뿐이 아니라고 가정해도 된다'(222–223)고 한 뒤 |f_n − f| < ε/length(γ) 로 잡는다. 이 사이트의 경로는 길이가 0 일 수 있으므로 길이로 나누지 않는다. 이 항목의 (4)의 어림 |∫g_n − ∫g| ≤ η(b − a) 는 나눗셈 없이 쓰는 꼴이다. 출처 Proposition mtest(263–298)는 G 위의 f_k 와 Σ M_k 에 대한 M 판정법이고, 증명은 점마다 비교 판정법으로 절대수렴시키고 꼬리 Σ_{k>n} M_k < ε 로 누른다. 이 항목의 (3)의 꼬리의 어림 |S(x) − F_m(x)| ≤ Σ_{n>m} M_n 은 그 증명의 부등식을 진술에 올린 것이다. 출처 Example ex_geomseriesasfunction(299–330)은 |z| ≤ r(0 < r < 1)에서 Σ_{k≥1} z^k 에 M_k = r^k 로 M 판정법을 쓴다. 예시 '등비급수를 닫힌 원판에서'는 같은 대상, 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(원 경로의 길이, 상수 경로, 길이로 나누지 않는 어림). 독립 검토 없음."
added: 2026-11-27
---

:::statement
사상, 사상의 열 $(f_n)$, 값의 수열 $(f_n(x))$, 식으로 정한 사상의 열, 점별 수렴, 제한의 열 $(f_n|_A)$와 "$A$ 위에서"는 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴과 고른 극한은 [[uniform-convergence|고른 수렴]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]] $d(z, w) = |z - w|$를 주고, $\mathbb{R}$에는 보통 거리를 준다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$는 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. 복소수열의 수렴과 $\lim_{n \to \infty}$, 0부터 번호가 붙은 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이고, 복소수의 유한 합 $\sum_{n=1}^{m}$, $0$부터의 합 $\sum_{n=0}^{m}$, 빈 합은 [[complex-finite-sum]]의 것이며, 복소 급수와 합 $\sum_{n=m}^{\infty}$, 절대수렴은 [[complex-series|복소 급수]]와 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 것이다. 실숫값 사상의 부분합 함수와 함수항 급수는 [[finite-sums-of-functions|함수의 유한 합]]과 [[series-of-functions|함수항 급수]]의 것이다. 복소수값 함수의 적분가능, 적분, 방향 있는 적분은 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 것이다. 사상 $g : X \to \mathbb{C}$의 $\operatorname{Re} g$, $\operatorname{Im} g : X \to \mathbb{R}$는 $x$에서의 값이 $\operatorname{Re} g(x)$, $\operatorname{Im} g(x)$인 사상이다([[recursion-theorem|재귀 정리]]의 (1)). 아래에서 $X$는 집합이다.

**부분합 사상.** $(f_n)$을 $X$에서 $\mathbb{C}$로의 사상의 열이라 하자. $0$ 이상인 정수 $m$에 대하여 재귀 정리의 (1)로 모든 $x \in X$에서
$$
F_m(x) = \sum_{n=1}^{m} f_n(x)
$$
인 사상 $F_m : X \to \mathbb{C}$를 정하고, $(f_n)$의 **$m$번째 부분합 사상**이라 한다($F_0$은 값이 $0$인 사상). $m$번째 항이 $F_m$인 사상의 열 $(F_m)$을 **부분합 사상의 열**이라 한다. $0$ 이상인 정수 전체의 집합에서 "$X$에서 $\mathbb{C}$로의 사상 전체의 집합"으로의 함수를 **0부터 번호가 붙은 사상의 열**이라 하고 $(f_n)_{n \ge 0}$으로 쓴다. $-1$ 이상인 정수 $m$에서 $G_m(x) = \sum_{n=0}^{m} f_n(x)$로 정한 $G_m : X \to \mathbb{C}$를 **0부터의 $m$번째 부분합 사상**이라 하고, $j$번째 항이 $G_{j-1}$인 사상의 열을 $(f_n)_{n \ge 0}$의 부분합 사상의 열이라 한다.

**함수항 급수.** $f : X \to \mathbb{C}$를 사상이라 하자. $(f_n)$의 **함수항 급수가 $f$로 점별 수렴한다**(**고르게 수렴한다**)는 것은 정확히 부분합 사상의 열이 $f$로 점별 수렴할(고르게 수렴할) 때이다. $(f_n)_{n \ge 0}$에 대해서도 그 부분합 사상의 열로 같이 정한다. $A \subseteq X$일 때 "$A$ 위에서 $h : A \to \mathbb{C}$로 점별(고르게) 수렴한다"는 제한의 열 $(f_n|_A)$의 함수항 급수가 $h$로 점별(고르게) 수렴한다는 뜻이다. 점별 수렴할 때 $x$에서의 값이 $\sum_{n=1}^{\infty} f_n(x)$(0부터 번호가 붙은 열이면 $\sum_{n=0}^{\infty} f_n(x)$)인 사상을 **합 사상**이라 한다. 함수항 급수를 나타내는 기호는 두지 않는다.

다음이 성립한다. 아래에서 $(g_n)$은 $X$에서 $\mathbb{C}$로의 사상의 열이고 $g : X \to \mathbb{C}$는 사상이다.

1. (실수부와 허수부) $(g_n)$이 $g$로 고르게 수렴하는 것은 정확히 $(\operatorname{Re} g_n)$이 $\operatorname{Re} g$로, $(\operatorname{Im} g_n)$이 $\operatorname{Im} g$로 고르게 수렴할 때이다. 점별 수렴도 같다. $(f_n)$의 부분합 사상 $F_m$에 대하여 $\operatorname{Re} F_m$은 실숫값 사상의 열 $(\operatorname{Re} f_n)$의 $m$번째 부분합 함수이고 허수부도 같다. 따라서 $(f_n)$의 함수항 급수가 $f$로 고르게(점별) 수렴하는 것은 정확히 $(\operatorname{Re} f_n)$의 함수항 급수가 $\operatorname{Re} f$로, $(\operatorname{Im} f_n)$의 함수항 급수가 $\operatorname{Im} f$로 고르게(점별) 수렴할 때이다. 0부터 번호가 붙은 열에서도 같다.
2. (연속) $X$가 위상공간이고 모든 $g_n$이 연속이며 $(g_n)$이 $g$로 고르게 수렴하면 $g$는 연속이다.
3. (**복소 M 판정법**) $(f_n)$이 $X$에서 $\mathbb{C}$로의 사상의 열이고 $(M_n)$이 실수열이며, 모든 자연수 $n$과 $X$의 모든 점 $x$에서 $|f_n(x)| \le M_n$이고 $(M_n)$의 급수가 수렴한다고 하자. 그러면 다음이 성립한다.
   - (i) 모든 $x \in X$에서 $(f_n(x))$의 급수는 절대수렴하고 $\bigl|\sum_{n=1}^{\infty} f_n(x)\bigr| \le \sum_{n=1}^{\infty} M_n$이다.
   - (ii) $(f_n)$의 함수항 급수는 합 사상 $S$로 고르게 수렴한다.
   - (iii) (꼬리의 어림) $0$ 이상인 모든 정수 $m$과 모든 $x \in X$에서 $|S(x) - F_m(x)| \le \sum_{n=m+1}^{\infty} M_n$이다.
   - (iv) (0부터 번호가 붙은 열) $(f_n)_{n \ge 0}$과 0부터 번호가 붙은 실수열 $(M_n)_{n \ge 0}$에 대하여 $0$ 이상인 모든 $n$과 모든 $x$에서 $|f_n(x)| \le M_n$이고 $(M_n)_{n \ge 0}$의 급수가 수렴하면, 모든 $x$에서 $(f_n(x))_{n \ge 0}$의 급수가 절대수렴하고, 함수항 급수는 합 사상 $S$로 고르게 수렴하며, $-1$ 이상인 모든 정수 $m$과 모든 $x$에서 $|S(x) - G_m(x)| \le \sum_{n=m+1}^{\infty} M_n$이다. $m = -1$이면 이것은 $|S(x)| \le \sum_{n=0}^{\infty} M_n$이다.
4. (적분과 고른 극한) $a < b$이고 모든 $g_n : [a, b] \to \mathbb{C}$가 적분가능하며 $(g_n)$이 $g : [a, b] \to \mathbb{C}$로 고르게 수렴한다고 하자. 그러면 $g$는 적분가능하고 $n$번째 항이 $\int_a^b g_n$인 복소수열은 $\int_a^b g$로 수렴한다. 또 $0 \le \eta$인 실수 $\eta$와 자연수 $n$이 $[a, b]$의 모든 $t$에서 $|g_n(t) - g(t)| \le \eta$를 만족하면 $\bigl|\int_a^b g_n - \int_a^b g\bigr| \le \eta\,(b - a)$이다. 방향 있는 꼴: $I$가 구간이고 $g_n, g : I \to \mathbb{C}$이며 $(g_n)$이 $g$로 고르게 수렴하고 $\alpha$, $\beta \in I$에서 모든 $g_n$이 $\alpha$와 $\beta$ 사이에서 적분가능하면, $g$도 그렇고 $\int_\alpha^\beta g_n$의 열은 $\int_\alpha^\beta g$로 수렴한다.
5. (항별 적분) $a < b$이고 모든 $f_n : [a, b] \to \mathbb{C}$가 적분가능하며 $(f_n)$의 함수항 급수가 $S : [a, b] \to \mathbb{C}$로 고르게 수렴하면, $S$는 적분가능하고 $n$번째 항이 $\int_a^b f_n$인 복소수열의 급수는 수렴하며
   $$
   \sum_{n=1}^{\infty} \int_a^b f_n = \int_a^b S
   $$
   이다. 0부터 번호가 붙은 열 $(f_n)_{n \ge 0}$이면 $\sum_{n=0}^{\infty} \int_a^b f_n = \int_a^b S$이다. 구간 $I$ 위의 사상과 $I$의 두 점 $\alpha$, $\beta$ 사이의 방향 있는 적분에서도 같다.
:::

:::english
Maps, sequences of maps $(f_n)$, value sequences $(f_n(x))$, sequences of maps defined by formulas, pointwise convergence, restricted sequences $(f_n|_A)$, and "on $A$" are those of the entry on sequences of maps and pointwise convergence, and uniform convergence and uniform limits are those of the entry on uniform convergence. $\mathbb{C}$ carries the metric of the complex plane $d(z, w) = |z - w|$, and $\mathbb{R}$ the usual metric. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$, the operations of the field $\mathbb{C}$, the function $\iota$, and the modulus are those of their entries. Convergence of complex sequences, $\lim_{n \to \infty}$, and complex sequences indexed from $0$ are those of the entry on convergence of complex sequences; finite sums of complex numbers $\sum_{n=1}^{m}$, sums from $0$ $\sum_{n=0}^{m}$, and empty sums are those of the entry on finite sums of complex numbers; complex series, their sums $\sum_{n=m}^{\infty}$, and absolute convergence are those of the entries on complex series and their absolute convergence. Partial sum functions and series of functions for real-valued maps are those of the entries on finite sums of functions and series of functions. Integrability, the integral, and the oriented integral of complex-valued functions are those of the entry on the integral of a complex-valued function. For a map $g : X \to \mathbb{C}$, $\operatorname{Re} g$, $\operatorname{Im} g : X \to \mathbb{R}$ are the maps with values $\operatorname{Re} g(x)$, $\operatorname{Im} g(x)$ at $x$ (item (1) of the recursion theorem). Below, $X$ is a set.

**Partial sum maps.** Let $(f_n)$ be a sequence of maps from $X$ to $\mathbb{C}$. For an integer $m \ge 0$, item (1) of the recursion theorem defines the map $F_m : X \to \mathbb{C}$ with
$$
F_m(x) = \sum_{n=1}^{m} f_n(x)
$$
for all $x \in X$, called the **$m$th partial sum map** of $(f_n)$ ($F_0$ is the zero map). The sequence of maps $(F_m)$ with $m$th term $F_m$ is the **sequence of partial sum maps**. A function from the set of integers at least $0$ to the set of maps from $X$ to $\mathbb{C}$ is a **sequence of maps indexed from $0$**, written $(f_n)_{n \ge 0}$. For an integer $m \ge -1$, the map $G_m : X \to \mathbb{C}$ with $G_m(x) = \sum_{n=0}^{m} f_n(x)$ is the **$m$th partial sum map from $0$**, and the sequence of maps whose $j$th term is $G_{j-1}$ is the sequence of partial sum maps of $(f_n)_{n \ge 0}$.

**Series of functions.** Let $f : X \to \mathbb{C}$ be a map. The **series of functions** of $(f_n)$ **converges pointwise (uniformly) to $f$** exactly when its sequence of partial sum maps converges pointwise (uniformly) to $f$. For $(f_n)_{n \ge 0}$ the same is defined through its sequence of partial sum maps. For $A \subseteq X$, "converges pointwise (uniformly) on $A$ to $h : A \to \mathbb{C}$" means that the series of functions of the restricted sequence $(f_n|_A)$ converges pointwise (uniformly) to $h$. When it converges pointwise, the map whose value at $x$ is $\sum_{n=1}^{\infty} f_n(x)$ ($\sum_{n=0}^{\infty} f_n(x)$ for a sequence indexed from $0$) is the **sum map**. No symbol is used for the series of functions itself.

The following hold. Below, $(g_n)$ is a sequence of maps from $X$ to $\mathbb{C}$ and $g : X \to \mathbb{C}$ is a map.

1. (Real and imaginary parts) $(g_n)$ converges uniformly to $g$ exactly when $(\operatorname{Re} g_n)$ converges uniformly to $\operatorname{Re} g$ and $(\operatorname{Im} g_n)$ to $\operatorname{Im} g$. The same holds for pointwise convergence. For the partial sum maps $F_m$ of $(f_n)$, $\operatorname{Re} F_m$ is the $m$th partial sum function of the real-valued sequence $(\operatorname{Re} f_n)$, and likewise for imaginary parts. Hence the series of functions of $(f_n)$ converges uniformly (pointwise) to $f$ exactly when the series of functions of $(\operatorname{Re} f_n)$ converges uniformly (pointwise) to $\operatorname{Re} f$ and that of $(\operatorname{Im} f_n)$ to $\operatorname{Im} f$. The same holds for sequences indexed from $0$.
2. (Continuity) If $X$ is a topological space, every $g_n$ is continuous, and $(g_n)$ converges uniformly to $g$, then $g$ is continuous.
3. (**Complex M-test**) Let $(f_n)$ be a sequence of maps from $X$ to $\mathbb{C}$ and $(M_n)$ a real sequence with $|f_n(x)| \le M_n$ for every natural number $n$ and every $x \in X$, and suppose the series of $(M_n)$ converges. Then:
   - (i) For every $x \in X$ the series of $(f_n(x))$ converges absolutely and $\bigl|\sum_{n=1}^{\infty} f_n(x)\bigr| \le \sum_{n=1}^{\infty} M_n$.
   - (ii) The series of functions of $(f_n)$ converges uniformly to the sum map $S$.
   - (iii) (Tail estimate) For every integer $m \ge 0$ and every $x \in X$, $|S(x) - F_m(x)| \le \sum_{n=m+1}^{\infty} M_n$.
   - (iv) (Sequences indexed from $0$) For $(f_n)_{n \ge 0}$ and a real sequence $(M_n)_{n \ge 0}$ indexed from $0$ with $|f_n(x)| \le M_n$ for all $n \ge 0$ and all $x$ and with $(M_n)_{n \ge 0}$ summable, for every $x$ the series of $(f_n(x))_{n \ge 0}$ converges absolutely, the series of functions converges uniformly to the sum map $S$, and for every integer $m \ge -1$ and every $x$, $|S(x) - G_m(x)| \le \sum_{n=m+1}^{\infty} M_n$. For $m = -1$ this says $|S(x)| \le \sum_{n=0}^{\infty} M_n$.
4. (Integrals and uniform limits) Let $a < b$, let every $g_n : [a, b] \to \mathbb{C}$ be integrable, and let $(g_n)$ converge uniformly to $g : [a, b] \to \mathbb{C}$. Then $g$ is integrable and the complex sequence with $n$th term $\int_a^b g_n$ converges to $\int_a^b g$. Also, if a real number $\eta \ge 0$ and a natural number $n$ satisfy $|g_n(t) - g(t)| \le \eta$ for all $t \in [a, b]$, then $\bigl|\int_a^b g_n - \int_a^b g\bigr| \le \eta\,(b - a)$. Oriented form: if $I$ is an interval, $g_n, g : I \to \mathbb{C}$, $(g_n)$ converges uniformly to $g$, and every $g_n$ is integrable between $\alpha$, $\beta \in I$, then so is $g$, and the sequence of $\int_\alpha^\beta g_n$ converges to $\int_\alpha^\beta g$.
5. (Termwise integration) If $a < b$, every $f_n : [a, b] \to \mathbb{C}$ is integrable, and the series of functions of $(f_n)$ converges uniformly to $S : [a, b] \to \mathbb{C}$, then $S$ is integrable, the series of the complex sequence with $n$th term $\int_a^b f_n$ converges, and
   $$
   \sum_{n=1}^{\infty} \int_a^b f_n = \int_a^b S.
   $$
   For a sequence $(f_n)_{n \ge 0}$ indexed from $0$, $\sum_{n=0}^{\infty} \int_a^b f_n = \int_a^b S$. The same holds for maps on an interval $I$ and oriented integrals between two points $\alpha$, $\beta$ of $I$.
:::

## 직관

복소수값 사상의 열이 고르게 수렴한다는 것은 모든 점에서 한꺼번에 평면 위의 거리가 작아진다는 것입니다. 평면 위의 거리가 작으면 동서 거리와 남북 거리가 둘 다 작고, 거꾸로 두 거리가 둘 다 작으면 평면 위의 거리도 작으므로, 고른 수렴은 실수부와 허수부의 고른 수렴과 같습니다((1)). 그래서 실숫값 함수열에서 증명한 M 판정법과 적분의 교환을 실수부와 허수부에 따로 쓰면 복소수값의 것이 됩니다.

M 판정법의 꼬리의 어림 $|S(x) - F_m(x)| \le \sum_{n > m} M_n$은 점 $x$와 상관없는 수로 남은 부분을 누릅니다. 적분의 어림 $|\int g_n - \int g| \le \eta(b - a)$도 나눗셈이 없는 꼴로 적어, 구간의 길이에 기대지 않고 쓸 수 있게 했습니다.

## 증명

:::idea
(1)은 $|\operatorname{Re} w| \le |w| \le |\operatorname{Re} w| + |\operatorname{Im} w|$이다. (3)은 실수부와 허수부에 실숫값 M 판정법을 쓰고 (1)로 묶은 뒤, 꼬리는 복소 급수의 비교 판정법으로 누른다. (4)와 (5)는 실수부와 허수부에 실숫값의 적분과 고른 수렴의 정리를 쓴다.
:::

:::hint
(5)에서 $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$이므로 부분합 사상의 적분의 열이 곧 적분의 급수의 부분합 수열입니다.
:::

:::proof
"절댓값 (n)", "복소수체 (n)", "유한 합 (n)", "급수 (n)", "절대수렴 (n)", "수열 (n)"은 [[modulus-of-complex-number]], [[complex-field]], [[complex-finite-sum]], [[complex-series]], [[absolute-convergence-of-complex-series]], [[convergence-of-complex-sequences]]의 번호이고, "고른 (n)"은 [[uniform-convergence]], "적분 정의 (n)", "적분 성질 (n)"은 [[integral-of-complex-valued-function]], [[properties-of-integral-of-complex-valued-function]]의 번호이다.

**1의 증명.** $x \in X$와 자연수 $n$에서 $w = g_n(x) - g(x)$로 두면 복소수체 (1)에 의해 $\operatorname{Re} w = \operatorname{Re} g_n(x) - \operatorname{Re} g(x)$이고 허수부도 같으며, 절댓값 (6)에 의해 $|\operatorname{Re} w| \le |w|$, $|\operatorname{Im} w| \le |w|$, $|w| \le |\operatorname{Re} w| + |\operatorname{Im} w|$이다. $(g_n)$이 $g$로 고르게 수렴하면 양수 $\varepsilon$마다 고른 수렴의 정의의 $N$이 있어 $n \ge N$과 모든 $x$에서 $|\operatorname{Re} w| \le |w| < \varepsilon$이므로, 고른 (8)에 의해 $(\operatorname{Re} g_n)$은 $\operatorname{Re} g$로 고르게 수렴하고 허수부도 같다. 거꾸로 두 열이 고르게 수렴하면 $\varepsilon/2$에 대한 두 번호 가운데 큰 쪽 $N$([[absolute-value]]의 두 수의 최대)에서 $n \ge N$과 모든 $x$에서 $|w| < \varepsilon/2 + \varepsilon/2 = \varepsilon$이므로 $(g_n)$은 $g$로 고르게 수렴한다. 점별 수렴은 각 $x$에서 같은 논법을 복소수열에 쓴 것이고, 수열 (3)이다.

$F_m(x)$의 실수부는 유한 합 (1)에 의해 $\sum_{n=1}^{m} \operatorname{Re} f_n(x)$이므로 $\operatorname{Re} F_m$은 $(\operatorname{Re} f_n)$의 $m$번째 부분합 함수이고([[finite-sums-of-functions]]의 정의) 허수부도 같다. 남은 문장은 앞 문단을 부분합 사상의 열에 쓴 것이다. 0부터의 경우는 유한 합 (8)로 같다.

**2의 증명.** 복소평면의 거리공간 $\mathbb{C}$에 [[uniform-limit-of-continuous-maps|연속인 사상의 고른 극한]]의 (2)를 쓴다.

**3의 증명.** (i). 절대수렴 (3)(비교 판정법)을 $t_n = f_n(x)$, $w_n = M_n$에 쓴다. (ii). 절댓값 (6)에 의해 $|\operatorname{Re} f_n(x)| \le |f_n(x)| \le M_n$이고 허수부도 같으므로, [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (2)에 의해 $(\operatorname{Re} f_n)$과 $(\operatorname{Im} f_n)$의 함수항 급수는 각각의 합 함수로 고르게 수렴한다. 각 $x$에서 급수 (2)에 의해 그 합 함수의 값은 $\operatorname{Re} S(x)$, $\operatorname{Im} S(x)$이므로 (1)에 의해 $(f_n)$의 함수항 급수는 $S$로 고르게 수렴한다.

(iii). 급수 (4)에 의해 $n \ge m + 1$에서 정해진 항 $f_n(x)$의 급수가 수렴하고 $S(x) - F_m(x) = \sum_{n=m+1}^{\infty} f_n(x)$이다(유한 합 (1)과 급수 (1)로 $F_m(x)$는 가운데 합이다). 같은 꼬리에서 절대수렴 (3)을 $w_n = M_n$에 쓰면([[sum-of-a-series]]의 (2)에 의해 $M_n$의 꼬리의 급수는 수렴한다) $|\sum_{n=m+1}^{\infty} f_n(x)| \le \sum_{n=m+1}^{\infty} M_n$이다.

(iv). 같은 논법을 [[weierstrass-m-test|바이어슈트라스 M 판정법]]의 (5)와 [[series-of-functions|함수항 급수]]의 (6), 유한 합 (8), 급수 (4)의 0부터의 꼴에 쓴다. $m = -1$이면 $G_{-1}$은 값이 $0$인 사상이다.

**4의 증명.** (1)에 의해 $(\operatorname{Re} g_n)$은 $\operatorname{Re} g$로 고르게 수렴하고, 적분 정의의 정의에 의해 모든 $\operatorname{Re} g_n$은 적분가능하다. [[uniform-convergence-and-integral|고른 수렴과 적분]]의 (2)에 의해 $\operatorname{Re} g$는 적분가능하고 $\int_a^b \operatorname{Re} g_n \to \int_a^b \operatorname{Re} g$이며, 허수부도 같다. 따라서 $g$는 적분가능하고, 적분 정의 (1)과 수열 (3)에 의해 $\int_a^b g_n \to \int_a^b g$이다. 어림: 적분 성질 (1)에 의해 $g_n - g$는 적분가능하고 $\int_a^b g_n - \int_a^b g = \int_a^b (g_n - g)$이며, 적분 성질 (4)에 의해 그 절댓값은 $\eta(b - a)$ 이하이다. 방향 있는 꼴은 같은 항목의 (4)를 실수부와 허수부에 쓰고 적분 정의 (1)로 묶는다.

**5의 증명.** 모든 $m$에서 $F_m$은 적분가능하고 $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$이다. 실수부로 보면 [[finite-sums-of-functions|함수의 유한 합]]의 (5)의 (i)을 $(\operatorname{Re} f_n)$에 쓰고 적분 정의 (1)로 $\operatorname{Re}\int_a^b F_m = \sum_{n=1}^{m} \operatorname{Re}\int_a^b f_n$이며 허수부도 같으므로 유한 합 (1)이 이것을 준다. $(F_m)$이 $S$로 고르게 수렴하므로 (4)에 의해 $S$는 적분가능하고 $\int_a^b F_m \to \int_a^b S$이다. 이 열은 $n$번째 항이 $\int_a^b f_n$인 복소수열의 부분합 수열이므로 급수의 정의에 의해 그 급수는 수렴하고 합은 $\int_a^b S$이다. 0부터의 꼴은 유한 합 (8)과 $G_m$으로, 방향 있는 꼴은 [[finite-sums-of-functions]]의 (5)의 (ii)와 (4)의 방향 있는 꼴로 같다. $\blacksquare$
:::

## 예시와 반례

:::example[등비급수를 닫힌 원판에서]
$0 < r < 1$인 실수 $r$과 $X = \{z \in \mathbb{C} : |z| \le r\}$에서 자연수 $n$마다 $f_n(z) = z^n$으로 둡시다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|f_n(z)| = |z|^n \le r^n$이고, [[sum-of-a-series|급수의 합]]의 (6)의 (iii)에 의해 $(r^n)$의 급수는 수렴하며 $0$ 이상인 정수 $m$에서 $\sum_{n=m+1}^{\infty} r^n = r^{m+1}/(1 - r)$입니다. (3)에 의해 $(f_n)$의 함수항 급수는 $X$ 위에서 합 사상 $S$로 고르게 수렴하고, 모든 $z \in X$에서
$$
\Bigl| S(z) - \sum_{n=1}^{m} z^n \Bigr| \le \frac{r^{m+1}}{1 - r}
$$
입니다. [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)과 [[complex-series|복소 급수]]의 (4)에 의해 $S(z) = 1/(1 - z) - 1 = z/(1 - z)$입니다.
:::

:::counterexample[닫힌구간 [0, 1] 위의 tⁿ i 의 적분은 수렴하지만 고르게 수렴하지 않는 예]
$g_n(t) = t^n i$로 정한 $g_n : [0, 1] \to \mathbb{C}$를 봅시다. 허수부의 열 $(t^n)$은 [[uniform-convergence|고른 수렴]]의 (9)의 (ii)에 의해 어떤 사상 $[0, 1] \to \mathbb{R}$로도 고르게 수렴하지 않으므로, (1)에 의해 $(g_n)$도 어떤 사상으로도 고르게 수렴하지 않습니다. 그런데 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 정의와 [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)에 의해 $\int_0^1 g_n = (n + 1)^{-1} i$이고, [[basic-limits]]의 (2)에 의해 이 복소수열은 $0$으로 수렴합니다([[convergence-of-complex-sequences|복소수열의 수렴]]의 (3)). (4)는 고른 수렴에서 적분의 수렴을 주는 충분조건이고, 그 역은 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$X = \{z \in \mathbb{C} : |z| \le 1\}$ 위의 $f_n(z) = z^n / n^2$($n \ge 1$)의 함수항 급수는 고르게 수렴하는가?]
그렇습니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|f_n(z)| = |z|^n / n^2 \le 1/n^2$이고 [[p-series]]의 (1)과 (4)에 의해 $(1/n^2)$의 급수는 수렴하므로 (3)에 의해 고르게 수렴하고, 꼬리의 어림은 $|S(z) - F_m(z)| \le \sum_{n=m+1}^{\infty} 1/n^2$입니다.
:::
