---
title: 경로의 길이와 적분의 어림
title_en: Length of a Path and the ML Inequality
aliases: [경로의 길이, ML 부등식, 경로 적분의 어림, 고른 수렴과 경로 적분, 항별 경로 적분, length of a path, ML inequality, ML estimate, termwise path integration]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: "C¹ 경로 γ 의 길이 ℓ(γ) 를 |γ′| 의 적분으로 정하고 경로열의 길이를 합으로 정한다. 선분과 원 경로의 길이, 뒤집은 경로의 길이, 끝점 사이의 거리는 길이 이하라는 것을 보이고, 상 위에서 |f| ≤ M 이면 경로 적분의 절댓값은 M ℓ(γ) 이하라는 ML 부등식, 상 위에서 고르게 수렴하는 함수열의 경로 적분의 수렴과 어림, 함수항 급수의 항별 경로 적분과 M 판정법과 함께 쓰는 꼴을 진술한다."
requires: [real-number-arithmetic, linearity-and-order-of-finite-sums, order-properties-of-reals, absolute-value, interval, riemann-integral, linearity-of-the-integral, monotonicity-of-the-integral, continuous-implies-integrable, continuity-agrees-with-analysis, uniform-convergence, compact-subsets-of-complex-plane, complex-number, complex-field, modulus-of-complex-number, complex-finite-sum, convergence-of-complex-sequences, complex-series, continuity-of-complex-operations, addition-law-of-complex-exponential, definition-of-pi, derivative-of-complex-valued-function, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, fundamental-theorem-for-complex-valued-functions, uniform-convergence-and-complex-valued-integrals, path-in-the-complex-plane, path-integral, subspace-and-continuity]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Definition and Basic Properties 절의 길이의 정의와 두 예(example_circlelength 포함), Proposition intprop 의 (d)와 그 증명, 그 뒤의 예, source/sec_intdef.ptx:238–280, 343–344, 417–467; Sequences and Series of Functions 절의 Proposition seriesintegral 과 그 증명, 그 뒤 문단, source/sec_sequseriesfunctions.ptx:207–250"
    checked: original
    note: "출처는 매끄러운 경로의 길이를 length(γ) := ∫_a^b |γ′(t)| dt 로 정하고 조각마다 매끄러운 경로에서는 조각의 길이의 합으로 정한다(238–252). 이 항목의 정의도 같고, 기호는 다르부 하합 L(P, f) 와 겹치지 않게 ℓ(γ) 로 쓴다. 출처의 두 예, 0 에서 1 + i 로의 선분의 길이 √2(253–266)와 단위원의 길이 2π(example_circlelength, 267–280)는 이 항목의 (1)의 선분과 원 경로의 길이와 같은 계산이다. 출처 Proposition intprop (d)(343–344)는 |∫_γ f| ≤ max_{z∈γ} |f(z)| · length(γ) 이고, 증명(417–443)은 Arg 로 적분값을 돌린다. 이 항목의 (2)는 최댓값 대신 'M 이 상 위에서 |f| 를 누르면' 꼴로 진술하고, 그런 M 이 있다는 것을 따로 둔다. 증명은 properties-of-integral-of-complex-valued-function 의 (3)을 쓴다. 출처의 예(444–467)는 중심이 w 인 원 위의 1/(z − w) 에서 이 부등식이 등호라고 적는다. 출처 Proposition seriesintegral(207–240)은 고르게 수렴하는 연속함수열의 경로 적분이 수렴한다는 것이고, 증명은 '경로가 한 점뿐이 아니라고 가정해도 된다'(222–223)고 한 뒤 ε/length(γ) 를 쓴다. 이 사이트의 경로는 길이가 0 일 수 있으므로(상수 경로) 길이로 나누지 않는다. (3)의 어림 |∫_γ f_n − ∫_γ f| ≤ η ℓ(γ) 와 수렴의 증명은 나눗셈 없이 한다(수렴은 도함수의 절댓값의 상계 B 에 1 을 더한 수로 나눈다). 출처의 그 뒤 문단(242–250)은 고르게 수렴하는 함수항 급수의 항별 경로 적분을 적고, 이 항목의 (4)는 같은 내용에 M 판정법과 함께 쓰는 꼴을 더했다. 확인 질문 '$\\ell(\\sigma_{1,4+4i})$는?'은 출처 exercises-chap4.ptx:4–105 의 연습문제들(여러 경로와 선분의 길이를 구하라)과 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: "11.4절 Complex exponential and trigonometric functions, 11.4.3소절 The unit circle and polar coordinates (p.167)"
    checked: original
    note: "출처 11.4.3소절(p.167)은 γ : [a, b] → ℂ 로 매개화한 곡선의 길이(arclength)를 ∫_a^b |γ′(t)| dt 로 적고, e^{it}(t ∈ [0, 2π))의 도함수 ie^{it} 의 절댓값이 1 이므로 원의 둘레가 2π 라고 계산한다. 이 항목의 정의와 (1)의 원 경로의 길이는 같은 식과 같은 계산이다. 출처는 그것을 곡선의 길이로 말하고, 이 항목은 경로라는 함수의 길이로만 말한다."
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.1 의 2. (k.txt 159–160줄, p.4)"
    checked: original
    note: "출처 Proposition 2.1 의 2.(p.4)는 선분 위의 적분에 |∫_{a,b} f| ≤ max_{z∈S}|f(z)| · |b − a| 를, 직사각형의 둘레에 max |f| · p(R)(둘레의 길이)을 적는다. 이 항목의 (2)를 선분 경로와 경로열에 쓴 것과 같은 내용이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(원 경로의 길이, 상수 경로, 길이로 나누지 않는 어림). 독립 검토 없음."
added: 2026-11-27
---

:::statement
C¹ 경로, 상, 시작점과 끝점, 선분 경로 $\sigma_{z,w}$, 원 경로 $\gamma_{a,r}$, 뒤집은 경로 $\gamma^-$, 경로열과 그 상은 [[path-in-the-complex-plane|경로]]의 것이고, "상 위에서 연속"과 경로 적분 $\int_\gamma f$, 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이다. 실변수 복소수값 함수의 도함수는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], 복소수값 함수의 적분은 [[integral-of-complex-valued-function|복소수값 함수의 적분]], 실함수의 적분은 [[riemann-integral]]의 것이다. 복소수의 절댓값은 [[modulus-of-complex-number]], 복소수의 유한 합은 [[complex-finite-sum]], 복소수열의 수렴은 [[convergence-of-complex-sequences|복소수열의 수렴]], 복소 급수와 그 합은 [[complex-series|복소 급수]]의 것이다. 복소수값 사상의 열의 고른 수렴, "$A$ 위에서", 함수항 급수와 합 사상은 [[uniform-convergence|고른 수렴]]과 [[uniform-convergence-and-complex-valued-integrals|복소수값 함수열의 고른 수렴과 적분]]의 것이다($\mathbb{C}$에는 복소평면의 거리). 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다.

**경로의 길이.** C¹ 경로 $\gamma : [a, b] \to \mathbb{C}$의 **길이**(length)를
$$
\ell(\gamma) = \int_a^b |\gamma'(t)|\,dt
$$
로 정한다. 오른쪽은 $t$에서의 값이 $|\gamma'(t)|$인 연속함수 $[a, b] \to \mathbb{R}$의 적분이다(아래 증명). 경로열 $\Gamma = (\gamma_1, \dots, \gamma_k)$의 길이는 $\ell(\Gamma) = \sum_{j=1}^{k} \ell(\gamma_j)$이다. 글자 $\ell$은 다르부 하합 $L(P, f)$의 $L$과 다르다. 이것은 경로라는 함수에 정한 수이고, 상인 점의 집합에 정한 수가 아니다.

다음이 성립한다. 아래에서 $\gamma : [a, b] \to \mathbb{C}$는 C¹ 경로, $K$는 그 상이고, $K \subseteq S \subseteq \mathbb{C}$이다.

1. (길이) $0 \le \ell(\gamma)$이고 $|\gamma(b) - \gamma(a)| \le \ell(\gamma)$이다. $\ell(\gamma^-) = \ell(\gamma)$이다. 복소수 $z$, $w$에 대하여 $\ell(\sigma_{z,w}) = |w - z|$이고, 복소수 $a_0$과 양의 실수 $r$에 대하여 $\ell(\gamma_{a_0,r}) = 2\pi r$이다. 상수 경로의 길이는 $0$이다.
2. (**ML 부등식**) $f : S \to \mathbb{C}$가 $K$ 위에서 연속이라 하자.
   - (i) 실수 $M$이 $[a, b]$의 모든 $t$에서 $|f(\gamma(t))| \le M$을 만족하면
     $$
     \left| \int_\gamma f \right| \le M\,\ell(\gamma)
     $$
     이다. 경로열 $\Gamma$의 상의 모든 점 $z$에서 $|f(z)| \le M$이고 $f$가 각 경로의 상 위에서 연속이면 $\bigl|\int_\Gamma f\bigr| \le M\,\ell(\Gamma)$이다.
   - (ii) 그런 $M$은 있다. 곧 $K$의 모든 $z$에서 $|f(z)| \le M$인 실수 $M$이 있다.
3. (고른 수렴과 경로 적분) $(f_n)$이 $S$에서 $\mathbb{C}$로의 사상의 열이고 모든 $f_n$이 $K$ 위에서 연속이며, $f : S \to \mathbb{C}$에 대하여 $(f_n)$이 $K$ 위에서 $f|_K$로 고르게 수렴한다고 하자. 그러면 $f$는 $K$ 위에서 연속이고, $n$번째 항이 $\int_\gamma f_n$인 복소수열은 $\int_\gamma f$로 수렴한다. 또 $0 \le \eta$인 실수 $\eta$와 자연수 $n$이 $K$의 모든 $z$에서 $|f_n(z) - f(z)| \le \eta$를 만족하면
   $$
   \left| \int_\gamma f_n - \int_\gamma f \right| \le \eta\,\ell(\gamma)
   $$
   이다.
4. (항별 경로 적분) $(f_n)$이 $S$에서 $\mathbb{C}$로의 사상의 열이고 모든 $f_n$이 $K$ 위에서 연속이라 하자.
   - (i) $(f_n)$의 함수항 급수가 $K$ 위에서 $T : K \to \mathbb{C}$로 고르게 수렴하면, $T$는 연속이고, $n$번째 항이 $\int_\gamma f_n$인 복소수열의 급수는 수렴하며 $\sum_{n=1}^{\infty} \int_\gamma f_n = \int_\gamma T$이다. 0부터 번호가 붙은 열 $(f_n)_{n \ge 0}$에서도 같고, 그때 $\sum_{n=0}^{\infty} \int_\gamma f_n = \int_\gamma T$이다.
   - (ii) (M 판정법과 함께) 실수열 $(M_n)$의 급수가 수렴하고 모든 자연수 $n$과 $K$의 모든 $z$에서 $|f_n(z)| \le M_n$이면, $K$의 모든 $z$에서 $(f_n(z))$의 급수가 절대수렴하고, $z$에서의 값이 $\sum_{n=1}^{\infty} f_n(z)$인 함수 $T : K \to \mathbb{C}$는 연속이며
     $$
     \sum_{n=1}^{\infty} \int_\gamma f_n = \int_\gamma T
     $$
     이다. 0부터 번호가 붙은 열 $(f_n)_{n \ge 0}$과 $(M_n)_{n \ge 0}$에서도 같다($T(z) = \sum_{n=0}^{\infty} f_n(z)$, $\sum_{n=0}^{\infty} \int_\gamma f_n = \int_\gamma T$).
:::

:::english
C¹ paths, images, initial and terminal points, segment paths $\sigma_{z,w}$, circle paths $\gamma_{a,r}$, reversed paths $\gamma^-$, chains of paths and their images are those of the entry on paths; "continuous on the image", the path integral $\int_\gamma f$, and path integrals along chains are those of the entry on path integrals. Derivatives of complex-valued functions of a real variable, integrals of complex-valued functions, and integrals of real-valued functions are those of their entries. The modulus, finite sums of complex numbers, convergence of complex sequences, complex series and their sums are those of their entries. Uniform convergence of sequences of complex-valued maps, "on $A$", series of functions and sum maps are those of the entries on uniform convergence and on uniform convergence and integrals of complex-valued functions ($\mathbb{C}$ carries the metric of the complex plane). The number $\pi$ is that of its entry.

**Length of a path.** The **length** of a C¹ path $\gamma : [a, b] \to \mathbb{C}$ is
$$
\ell(\gamma) = \int_a^b |\gamma'(t)|\,dt.
$$
The right side is the integral of the continuous function $[a, b] \to \mathbb{R}$ with value $|\gamma'(t)|$ at $t$ (proved below). The length of a chain $\Gamma = (\gamma_1, \dots, \gamma_k)$ is $\ell(\Gamma) = \sum_{j=1}^{k} \ell(\gamma_j)$. The letter $\ell$ is different from the $L$ of the lower Darboux sum $L(P, f)$. It is a number assigned to the path as a function, not to its image as a set of points.

The following hold. Below, $\gamma : [a, b] \to \mathbb{C}$ is a C¹ path with image $K$, and $K \subseteq S \subseteq \mathbb{C}$.

1. (Length) $0 \le \ell(\gamma)$ and $|\gamma(b) - \gamma(a)| \le \ell(\gamma)$. $\ell(\gamma^-) = \ell(\gamma)$. For complex numbers $z$, $w$, $\ell(\sigma_{z,w}) = |w - z|$, and for a complex number $a_0$ and a positive real number $r$, $\ell(\gamma_{a_0,r}) = 2\pi r$. A constant path has length $0$.
2. (**ML inequality**) Let $f : S \to \mathbb{C}$ be continuous on $K$.
   - (i) If a real number $M$ satisfies $|f(\gamma(t))| \le M$ for all $t \in [a, b]$, then
     $$
     \left| \int_\gamma f \right| \le M\,\ell(\gamma).
     $$
     If $|f(z)| \le M$ at every point $z$ of the image of a chain $\Gamma$ and $f$ is continuous on the image of each path, then $\bigl|\int_\Gamma f\bigr| \le M\,\ell(\Gamma)$.
   - (ii) Such an $M$ exists; that is, there is a real number $M$ with $|f(z)| \le M$ for all $z \in K$.
3. (Uniform convergence and path integrals) Let $(f_n)$ be a sequence of maps from $S$ to $\mathbb{C}$, each continuous on $K$, and for $f : S \to \mathbb{C}$ let $(f_n)$ converge uniformly on $K$ to $f|_K$. Then $f$ is continuous on $K$, and the complex sequence with $n$th term $\int_\gamma f_n$ converges to $\int_\gamma f$. Also, if a real number $\eta \ge 0$ and a natural number $n$ satisfy $|f_n(z) - f(z)| \le \eta$ for all $z \in K$, then
   $$
   \left| \int_\gamma f_n - \int_\gamma f \right| \le \eta\,\ell(\gamma).
   $$
4. (Termwise path integration) Let $(f_n)$ be a sequence of maps from $S$ to $\mathbb{C}$, each continuous on $K$.
   - (i) If the series of functions of $(f_n)$ converges uniformly on $K$ to $T : K \to \mathbb{C}$, then $T$ is continuous, the series of the complex sequence with $n$th term $\int_\gamma f_n$ converges, and $\sum_{n=1}^{\infty} \int_\gamma f_n = \int_\gamma T$. The same holds for a sequence $(f_n)_{n \ge 0}$ indexed from $0$, with $\sum_{n=0}^{\infty} \int_\gamma f_n = \int_\gamma T$.
   - (ii) (With the M-test) If the series of a real sequence $(M_n)$ converges and $|f_n(z)| \le M_n$ for every natural number $n$ and every $z \in K$, then for every $z \in K$ the series of $(f_n(z))$ converges absolutely, the function $T : K \to \mathbb{C}$ with value $\sum_{n=1}^{\infty} f_n(z)$ at $z$ is continuous, and
     $$
     \sum_{n=1}^{\infty} \int_\gamma f_n = \int_\gamma T.
     $$
     The same holds for $(f_n)_{n \ge 0}$ and $(M_n)_{n \ge 0}$ indexed from $0$ ($T(z) = \sum_{n=0}^{\infty} f_n(z)$, $\sum_{n=0}^{\infty} \int_\gamma f_n = \int_\gamma T$).
:::

## 직관

경로의 길이는 매 순간의 빠르기 $|\gamma'(t)|$를 쌓은 것, 곧 점이 움직인 거리입니다. 같은 곳을 두 번 돌면 두 배가 되고, 멈춰 있으면 $0$입니다. 그래서 길이는 상인 점의 집합이 아니라 경로라는 함수에 붙은 수입니다.

ML 부등식은 "쌓이는 양은 많아야 (가장 큰 값) × (움직인 거리)"라는 것입니다. 적분값의 방향을 돌려 실수로 만든 뒤 실함수의 부등식을 쓰는 것은 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (3)이 이미 해 두었으므로, 여기서는 $|f(\gamma(t))\gamma'(t)| \le M|\gamma'(t)|$를 쌓기만 하면 됩니다. 길이가 $0$이면 경로 적분도 $0$이고 부등식이 그대로 맞으므로, 이 항목은 길이로 나누는 어림을 쓰지 않습니다.

## 증명

:::idea
길이의 성질은 실함수의 적분과 복소수값 함수의 미적분의 기본정리이다. ML 부등식은 적분의 절댓값의 부등식과 실함수의 단조성이다. (3)과 (4)는 $t$에서의 값이 $f_n(\gamma(t))\gamma'(t)$인 함수열에 [[uniform-convergence-and-complex-valued-integrals|복소수값 함수열의 고른 수렴과 적분]]을 쓴다.
:::

:::hint
(3)에서 $|\gamma'(t)| \le B$이면 $|f_n(\gamma(t))\gamma'(t) - f(\gamma(t))\gamma'(t)| \le B\,|f_n(\gamma(t)) - f(\gamma(t))|$입니다. 고른 수렴을 보일 때는 $B + 1$로 나눕니다.
:::

:::proof
"경로 (n)", "경로 적분 (n)", "적분 정의 (n)", "적분 성질 (n)", "기본정리 (n)", "고른 적분 (n)"은 [[path-in-the-complex-plane]], [[path-integral]], [[integral-of-complex-valued-function]], [[properties-of-integral-of-complex-valued-function]], [[fundamental-theorem-for-complex-valued-functions]], [[uniform-convergence-and-complex-valued-integrals]]의 번호이다.

**정의의 적분.** 경로 (1)에 의해 $\gamma'$은 연속이고 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)에 의해 $|\gamma'|$은 연속이며, [[continuity-agrees-with-analysis]]의 (3)과 [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 적분가능하다.

**1의 증명.** 모든 $t$에서 $0 \le |\gamma'(t)|$이므로 [[monotonicity-of-the-integral|적분의 단조성]]의 (4)에 의해 $0 \le \ell(\gamma)$이다. 기본정리 (1)에 의해 $\gamma(b) - \gamma(a) = \int_a^b \gamma'$이고, 적분 성질 (3)에 의해 $|\int_a^b \gamma'| \le \int_a^b |\gamma'| = \ell(\gamma)$이다. 뒤집은 경로: 경로 (4)에 의해 $|(\gamma^-)'(t)| = |\gamma'(a + b - t)|$이고, [[integral-of-complex-valued-function]]의 (2)와 기본정리 (3)의 일차 치환을 $\iota \circ |\gamma'|$에 $m = -1$, $k = a + b$로 쓰면 $\int_a^b |\gamma'(a + b - t)|\,dt = -\int_b^a |\gamma'| = \ell(\gamma)$이다. 선분: 경로 (2)에 의해 $|\sigma_{z,w}'(t)| = |w - z|$로 일정하므로 [[riemann-integral]]의 (5)에 의해 $\ell(\sigma_{z,w}) = |w - z|(1 - 0)$이다. 원: 경로 (3)에 의해 $|\gamma_{a_0,r}'(t)| = r$이므로 같은 번호에 의해 $\ell(\gamma_{a_0,r}) = r(2\pi - 0) = 2\pi r$이다. 상수 경로: [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (9)에 의해 $\gamma' = 0$이므로 피적분함수가 $0$이다.

**2의 증명.** (i). $G(t) = f(\gamma(t))\gamma'(t)$는 경로 적분의 정의에서 본 대로 연속이고 적분가능하며, 적분 성질 (2), (3)에 의해 $|\int_\gamma f| = |\int_a^b G| \le \int_a^b |G|$이다. [[modulus-of-complex-number|복소수의 절댓값]]의 (3)과 [[order-properties-of-reals|순서 성질]]의 (4)의 (iii)에 의해 모든 $t$에서 $|G(t)| = |f(\gamma(t))|\,|\gamma'(t)| \le M\,|\gamma'(t)|$이다. 두 실함수는 적분가능하므로 [[monotonicity-of-the-integral|적분의 단조성]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_a^b |G| \le M \int_a^b |\gamma'| = M\,\ell(\gamma)$이다. 경로열: 경로 적분의 정의, [[complex-finite-sum]]의 (7)과 각 경로의 부등식, [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (3), (1), (8)로 $|\int_\Gamma f| \le \sum_j |\int_{\gamma_j} f| \le \sum_j M\ell(\gamma_j) = M\ell(\Gamma)$이다.

(ii). 경로 (1)에 의해 $K$는 공집합이 아닌 콤팩트 부분집합이다. [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (4)의 (ii)를 $A = K$, $F = f|_K$에 쓰면 모든 $z \in K$에서 $|f(z)| \le |f(c)|$인 $c \in K$가 있으므로 $M = |f(c)|$로 둔다.

**3의 증명.** $f|_K$는 [[uniform-convergence-and-complex-valued-integrals|고른 적분]] (2)에 의해 연속이다(각 $f_n|_K$는 연속이고 $K$에는 부분공간 위상). 경로 (1)의 $B$를 잡고 $G_n(t) = f_n(\gamma(t))\gamma'(t)$, $G(t) = f(\gamma(t))\gamma'(t)$로 두면 모든 $t$에서
$$
\begin{aligned}
&|G_n(t) - G(t)| \\
&\quad \le B\,|f_n(\gamma(t)) - f(\gamma(t))|
\end{aligned}
$$
이다(복소수의 분배법칙, 절댓값 (3), [[order-properties-of-reals|순서 성질]]의 (4)의 (iii)). 양수 $\varepsilon$이 주어지면 $\varepsilon(B + 1)^{-1}$은 양수이고($0 \le B$), [[uniform-convergence]]의 정의에 의해 자연수 $N$이 있어 $n \ge N$과 $K$의 모든 $z$에서 $|f_n(z) - f(z)| < \varepsilon(B + 1)^{-1}$이다. 그러면 $|G_n(t) - G(t)| \le B\varepsilon(B + 1)^{-1} < \varepsilon$이므로 $(G_n)$은 $G$로 고르게 수렴한다. 고른 적분 (4)에 의해 $\int_a^b G_n \to \int_a^b G$, 곧 $\int_\gamma f_n \to \int_\gamma f$이다. 어림: 경로 적분 (1)에 의해 $\int_\gamma f_n - \int_\gamma f = \int_\gamma (f_n - f)$이고, $K$ 위에서 $|f_n - f| \le \eta$이므로 (2)의 (i)에 의해 그 절댓값은 $\eta\,\ell(\gamma)$ 이하이다.

**4의 증명.** (i). $T$의 연속은 고른 적분 (2)를 부분합 사상의 제한의 열에 쓴 것이다. 부분합 사상 $F_m$의 $K$ 위의 제한은 $K$ 위에서 연속이고(경로 적분 (1)의 합), $\int_\gamma F_m = \sum_{n=1}^{m} \int_\gamma f_n$이다(경로 적분 (1)과 $m$에 대한 귀납). (3)을 사상의 열 $(F_m)$과 $K$ 위의 극한 $T$에 쓰면(경로 적분은 상 위의 값만 쓰므로 $T$를 $S$로 넓히지 않고 $S = K$로 읽는다, 경로 적분 (1)) $\int_\gamma F_m \to \int_\gamma T$이고, 이것은 급수의 부분합 수열의 수렴이다([[complex-series|복소 급수]]의 정의). 0부터의 꼴은 0부터의 부분합 사상으로 같다.

(ii). [[uniform-convergence-and-complex-valued-integrals|고른 적분]]의 (3)을 집합 $K$ 위의 사상의 열 $(f_n|_K)$에 쓰면 점마다 절대수렴하고 함수항 급수가 $T$로 고르게 수렴한다. (i)을 쓴다. 0부터의 꼴은 같은 항목의 (3)의 (iv)로 같다. $\blacksquare$
:::

## 예시와 반례

:::example[반지름 2 인 원 위의 z² 를 ML 로 누르기]
중심 $0$, 반지름 $2$인 원 경로 $\gamma_{0,2}$의 상의 점 $z$에서 $|z| = 2$이므로 $|z^2| = 4$이고, $\ell(\gamma_{0,2}) = 4\pi$입니다. (2)에 의해 $\bigl|\int_{\gamma_{0,2}} z^2\,dz\bigr| \le 16\pi$입니다. 실제 값은 [[path-integral|경로 적분]]의 (8)과 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1)로 피적분함수가 $(2\exp(it))^2 \cdot 2i\exp(it) = 8i\exp(3it)$이므로, [[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]의 (4)의 (ii)($m = 3$)에 의해 $8i \int_0^{2\pi} \exp(3it)\,dt = 0$이어서, 이 부등식은 등호가 아닙니다.
:::

:::example[끝점 사이의 거리와 길이]
$\gamma(t) = \exp(it)$($0 \le t \le \pi$)의 길이는 $\int_0^\pi 1\,dt = \pi$이고 끝점 사이의 거리는 $|{-1} - 1| = 2$이므로 (1)의 $|\gamma(b) - \gamma(a)| \le \ell(\gamma)$는 $2 \le \pi$입니다. 선분 $\sigma_{1,-1}$에서는 두 값이 모두 $2$로 같습니다.
:::

:::counterexample[같은 상, 다른 길이]
$t$에서의 값이 $\exp(2it)$인 경로 $[0, 2\pi] \to \mathbb{C}$를 봅시다. 모든 값의 절댓값이 $1$이고, $0 \le t \le \pi$에서 $2t$가 $[0, 2\pi]$를 지나므로 상은 원 경로 $\gamma_{0,1}$의 상, 곧 단위원과 같습니다([[path-in-the-complex-plane|경로]]의 (3)). 그런데 도함수의 값 $2i\exp(2it)$의 절댓값이 $2$이므로 길이는 $\int_0^{2\pi} 2\,dt = 4\pi$로 $\ell(\gamma_{0,1}) = 2\pi$와 다릅니다. 길이는 상만으로 정해지지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\ell(\sigma_{1,4+4i})$는?]
(1)에 의해 $|(4 + 4i) - 1| = |3 + 4i| = 5$입니다.
:::

:::check[$f$가 $\sigma_{0,2}$의 상 위에서 연속이고 그 위에서 $|f(z)| \le 3$이면 $\bigl|\int_{\sigma_{0,2}} f\bigr|$는 어느 범위에 있는가?]
(2)에 의해 $0 \le \bigl|\int_{\sigma_{0,2}} f\bigr| \le 3 \cdot 2 = 6$입니다.
:::
