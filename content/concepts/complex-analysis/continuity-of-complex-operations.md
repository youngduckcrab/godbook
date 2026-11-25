---
title: 복소수 연산의 연속
title_en: Continuity of the Complex Operations
aliases: [복소수값 함수의 연속, 복소함수의 연속, 켤레와 절댓값의 연속, continuity of complex-valued functions]
kind: theorem
field: complex-analysis
msc: ["30", "54C05"]
level: undergrad
summary: 위상공간 위의 복소수값 함수가 연속인 것은 정확히 실수부와 허수부가 연속일 때이다. 실수부, 허수부, 켤레, 절댓값, ι, 항등함수와 상수함수는 연속이고, 연속인 복소수값 함수의 합, 차, 곱, 상수배, 켤레, 절댓값, 거듭제곱과, 분모가 0 이 아닌 곳에서의 역수와 몫도 연속이다. 덧셈과 곱셈 ℂ × ℂ → ℂ 는 연속이고, 거리공간 위에서는 ε–δ 로 읽으며 연속함수는 수열의 수렴을 보존한다.
requires: [function, function-composition, recursion-theorem, mathematical-induction, power-of-a-real-number, metric-space-examples, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, continuous-function, continuity-of-sum-and-product, basic-limits, ring, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, topological-space, continuous-map, composition-of-continuous-maps, product-topology, maps-into-a-product, max-metric-and-product-topology, subspace-topology, subspace-and-continuity, metric-subspace-topology, continuity-agrees-with-analysis, continuity-in-metric-spaces, metric-space, metric-space-is-hausdorff, sequence-in-a-space, continuity-preserves-convergence, limit-unique-in-hausdorff, complex-plane-as-metric-space, convergence-of-complex-sequences, limit-laws-for-complex-sequences]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.2소절 Complex numbers and limits (p.141); 11.4절 Complex exponential and trigonometric functions, 11.4.2소절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.165)"
    checked: original
    note: "출처 11.1.2소절(p.141)은 ℝ² 에서의 수렴이 성분별 수렴과 같고 실수의 대수 연산이 연속이므로 복소수의 대수 연산이 연속이라고 적고, 같은 방법으로 절댓값과 켤레가 연속함수라고 적는다. 증명은 수열(Proposition 11.1.3)로 한다. 이 사이트에는 수열로 하는 연속 판정이 한 방향만 있으므로((6)), 이 항목은 연속을 수열로 증명하지 않고 위상수학 입문의 '곱으로 가는 함수' 판정((1))과 실함수의 합·곱의 연속으로 증명한다. 출처는 Proposition 11.4.2 의 증명(p.165)에서 켤레가 연속함수라는 것을 쓴다. 정의역이 일반 위상공간인 꼴, 몫의 정의역을 분모가 0 이 아닌 점의 부분공간으로 둔 꼴은 이 사이트가 정한 것이다."
  - ref: lebl-basic-analysis
    loc: "7.5절 Continuous functions, 7.5.1소절 Continuity, Proposition 7.5.2 와 Example 7.5.3 (p.288), Example 7.5.4 (p.289)"
    checked: original
    note: "출처 Example 7.5.4(p.289)는 거리공간 X 위의 복소수값 함수 f 가 c 에서 연속인 것은 정확히 그 실수부와 허수부가 c 에서 연속일 때라고 적고, 그 까닭을 수열의 수렴(성분별 수렴)으로 든다. (1)과 같은 내용이고, 이 항목은 정의역을 위상공간으로 넓혀 곱위상으로 증명한다. 출처 Proposition 7.5.2(p.288)는 거리공간 사이의 함수가 c 에서 연속인 것은 정확히 c 로 수렴하는 모든 수열의 함숫값의 수열이 f(c) 로 수렴할 때라고 진술한다. 그 거꾸로 방향의 증명은 n 마다 점 x_n 을 고른다. (6)은 고르기가 들지 않는 한 방향만 싣는다. 출처 Example 7.5.3(p.288)은 두 변수의 다항식이 연속이라는 것을 보이는데, 예시 'z z + i z̄ 의 연속'은 (3)으로 같은 종류의 함수의 연속을 보이는 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(몫의 연속의 경로와 콤팩트 위 최솟값의 번호 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$는 [[complex-field]], 켤레복소수 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱 $z^k$는 [[power-of-a-complex-number]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]] $d(z, w) = |z - w|$와 그 거리위상을 주고, $\mathbb{R}$에는 보통 위상을 준다. 위상공간, 연속과 "$z_0$에서 연속"은 [[topological-space]], [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 곱위상은 [[product-topology|두 공간의 곱위상]], 부분공간 위상은 [[subspace-topology]]의 것이다. 복소수열의 수렴과 극한의 기호는 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이다.

아래에서 $(Z, \mathcal{T}_Z)$는 위상공간이고 $f, g : Z \to \mathbb{C}$는 함수, $c$는 복소수, $k$는 $0$ 이상인 정수이다. 다음 함수들을 [[recursion-theorem|재귀 정리]]의 (1)에 의해 값으로 정한다: $\operatorname{Re} f, \operatorname{Im} f, |f| : Z \to \mathbb{R}$는 $z$에서의 값이 $\operatorname{Re} f(z)$, $\operatorname{Im} f(z)$, $|f(z)|$인 함수이고, $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k : Z \to \mathbb{C}$는 $z$에서의 값이 $f(z) + g(z)$, $f(z) - g(z)$, $f(z) g(z)$, $c f(z)$, $\overline{f(z)}$, $f(z)^k$인 함수이다. $g$의 모든 값이 $0$이 아니면 $1/g$, $f/g : Z \to \mathbb{C}$는 $z$에서의 값이 $g(z)^{-1}$, $f(z)/g(z)$인 함수이다.

1. (실수부와 허수부로 판정) $z_0 \in Z$이면, $f$가 $z_0$에서 연속인 것은 정확히 $\operatorname{Re} f$와 $\operatorname{Im} f$가 둘 다 $z_0$에서 연속일 때이다. 따라서 $f$가 연속인 것은 정확히 $\operatorname{Re} f$와 $\operatorname{Im} f$가 둘 다 연속일 때이다.
2. (기본 함수) 다음 함수는 연속이다: $z$에서의 값이 $\operatorname{Re} z$, $\operatorname{Im} z$, $|z|$인 함수 $\mathbb{C} \to \mathbb{R}$; 켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$; 항등함수 $i_{\mathbb{C}} : \mathbb{C} \to \mathbb{C}$; $\iota : \mathbb{R} \to \mathbb{C}$; 모든 값이 $c$인 상수함수 $Z \to \mathbb{C}$.
3. (합, 차, 곱, 상수배, 켤레, 절댓값, 거듭제곱) $f$와 $g$가 연속이면 $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k : Z \to \mathbb{C}$와 $|f| : Z \to \mathbb{R}$는 연속이다.
4. (역수와 몫) $f$와 $g$가 연속이라 하자.
   - (i) $g$의 모든 값이 $0$이 아니면 $1/g$와 $f/g$는 연속이다.
   - (ii) 일반적으로 $Z' = \{z \in Z : g(z) \ne 0\}$에 부분공간 위상 $\mathcal{T}_Z|_{Z'}$를 주면, 제한 $f|_{Z'}$, $g|_{Z'}$은 연속이고 $g|_{Z'}$의 모든 값이 $0$이 아니므로 (i)에 의해 $1/(g|_{Z'})$와 $f|_{Z'}/g|_{Z'} : Z' \to \mathbb{C}$는 연속이다.
5. (덧셈과 곱셈) $\mathbb{C} \times \mathbb{C}$에 곱위상을 주면, $(z, w)$에서의 값이 $z + w$인 함수와 $zw$인 함수 $\mathbb{C} \times \mathbb{C} \to \mathbb{C}$는 연속이다.
6. (거리공간 위의 함수) $(X, d_X)$가 거리공간이고 $X$에 거리위상을 주며 $h : X \to \mathbb{C}$가 함수이고 $p \in X$라 하자.
   - (i) $h$가 $p$에서 연속인 것은 정확히, 모든 실수 $\varepsilon > 0$에 대하여 실수 $\delta > 0$이 있어 $d_X(p, x) < \delta$인 모든 $x \in X$에서 $|h(x) - h(p)| < \varepsilon$일 때이다. $X$가 $\mathbb{C}$의 부분집합이면 $d_X(p, x) = |x - p|$이다.
   - (ii) (수열) $h$가 $p$에서 연속이고 $X$의 수열 $(x_n)$이 $p$로 수렴하면, $n$번째 항이 $h(x_n)$인 복소수열은 $h(p)$로 수렴한다. 곧 $\lim_{n \to \infty} h(x_n) = h\bigl(\lim_{n \to \infty} x_n\bigr)$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$ and the function $\iota$ are those of the entry on the field of complex numbers; the conjugate $\overline{z}$, the modulus $|z|$, and powers $z^k$ are those of the entries on complex conjugates, the modulus of a complex number, and powers of a complex number. $\mathbb{C}$ carries the metric of the complex plane $d(z, w) = |z - w|$ and its metric topology, and $\mathbb{R}$ carries the standard topology. Topological spaces, continuity, and "continuous at $z_0$" are those of the entries on topological spaces and continuous maps between topological spaces; the product topology is that of the entry on the product topology of two spaces, and the subspace topology is that of the entry on the subspace topology. Convergence of complex sequences and the limit notation are those of the entry on convergence of complex sequences.

Below, $(Z, \mathcal{T}_Z)$ is a topological space, $f, g : Z \to \mathbb{C}$ are functions, $c$ is a complex number, and $k$ is an integer at least $0$. The following functions are defined by their values, by item (1) of the recursion theorem: $\operatorname{Re} f, \operatorname{Im} f, |f| : Z \to \mathbb{R}$ are the functions whose values at $z$ are $\operatorname{Re} f(z)$, $\operatorname{Im} f(z)$, $|f(z)|$, and $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k : Z \to \mathbb{C}$ are the functions whose values at $z$ are $f(z) + g(z)$, $f(z) - g(z)$, $f(z) g(z)$, $c f(z)$, $\overline{f(z)}$, $f(z)^k$. If no value of $g$ is $0$, then $1/g$, $f/g : Z \to \mathbb{C}$ are the functions whose values at $z$ are $g(z)^{-1}$, $f(z)/g(z)$.

1. (Real and imaginary parts) If $z_0 \in Z$, then $f$ is continuous at $z_0$ exactly when $\operatorname{Re} f$ and $\operatorname{Im} f$ are both continuous at $z_0$. Hence $f$ is continuous exactly when $\operatorname{Re} f$ and $\operatorname{Im} f$ are both continuous.
2. (Basic functions) The following functions are continuous: the functions $\mathbb{C} \to \mathbb{R}$ whose values at $z$ are $\operatorname{Re} z$, $\operatorname{Im} z$, $|z|$; the conjugation function $\mathbb{C} \to \mathbb{C}$; the identity function $i_{\mathbb{C}} : \mathbb{C} \to \mathbb{C}$; $\iota : \mathbb{R} \to \mathbb{C}$; the constant function $Z \to \mathbb{C}$ all of whose values are $c$.
3. (Sum, difference, product, constant multiple, conjugate, modulus, powers) If $f$ and $g$ are continuous, then $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k : Z \to \mathbb{C}$ and $|f| : Z \to \mathbb{R}$ are continuous.
4. (Reciprocals and quotients) Let $f$ and $g$ be continuous.
   - (i) If no value of $g$ is $0$, then $1/g$ and $f/g$ are continuous.
   - (ii) In general, if $Z' = \{z \in Z : g(z) \ne 0\}$ is given the subspace topology $\mathcal{T}_Z|_{Z'}$, then the restrictions $f|_{Z'}$, $g|_{Z'}$ are continuous, and since no value of $g|_{Z'}$ is $0$, by (i) the functions $1/(g|_{Z'})$ and $f|_{Z'}/g|_{Z'} : Z' \to \mathbb{C}$ are continuous.
5. (Addition and multiplication) If $\mathbb{C} \times \mathbb{C}$ is given the product topology, then the functions $\mathbb{C} \times \mathbb{C} \to \mathbb{C}$ whose values at $(z, w)$ are $z + w$ and $zw$ are continuous.
6. (Functions on a metric space) Let $(X, d_X)$ be a metric space with its metric topology, $h : X \to \mathbb{C}$ a function, and $p \in X$.
   - (i) $h$ is continuous at $p$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $|h(x) - h(p)| < \varepsilon$ for all $x \in X$ with $d_X(p, x) < \delta$. If $X$ is a subset of $\mathbb{C}$, then $d_X(p, x) = |x - p|$.
   - (ii) (Sequences) If $h$ is continuous at $p$ and a sequence $(x_n)$ in $X$ converges to $p$, then the complex sequence whose $n$th term is $h(x_n)$ converges to $h(p)$. That is, $\lim_{n \to \infty} h(x_n) = h\bigl(\lim_{n \to \infty} x_n\bigr)$.
:::

## 직관

복소수값 함수는 실수값 함수 두 개, 곧 실수부와 허수부를 한꺼번에 적은 것입니다. 지도 위의 점을 동서 좌표와 남북 좌표로 나누어 보듯, 값이 조금씩 움직이는지는 두 좌표가 각각 조금씩 움직이는지로 볼 수 있습니다((1)). 그래서 복소수의 덧셈과 곱셈의 연속은 실수의 덧셈과 곱셈의 연속으로 돌아갑니다. 곱의 실수부는 $\operatorname{Re} f \operatorname{Re} g - \operatorname{Im} f \operatorname{Im} g$처럼 실수부와 허수부의 곱과 차로 적히기 때문입니다.

역수에는 분모가 $0$이 아니라는 조건이 붙습니다. 증명에서 이 조건은 실수 $(\operatorname{Re} g)^2 + (\operatorname{Im} g)^2$의 역수를 취하는 단계에서 쓰입니다. 분모가 $0$이 되는 점이 있으면, 그런 점을 빼고 남은 점들의 부분공간 위에서 몫이 연속입니다((4)의 (ii)). 예컨대 $g(z) = z$이면 $Z' = \mathbb{C} - \{0\}$입니다.

수열로 보면, 연속인 함수에 수렴하는 점들을 넣은 값은 극한에서의 값으로 수렴합니다((6)의 (ii)). 이 항목은 그 거꾸로, 곧 "이런 성질을 가지면 연속"이라는 방향은 싣지 않습니다. 보통의 증명은 번호마다 수열의 항을 하나씩 고르는데, 이 강의는 위상수학 입문처럼 그런 고르기를 쓰지 않기 때문입니다. 연속을 보일 때는 (1)–(5)를 씁니다.

## 증명

:::idea
$\mathbb{C}$의 위상은 $\mathbb{R} \times \mathbb{R}$의 곱위상이고 $\operatorname{Re}$, $\operatorname{Im}$은 두 사영이므로, 곱으로 가는 함수의 연속 판정이 (1)을 준다. 나머지는 실수부와 허수부를 실함수의 합·곱으로 적고 위상수학 입문의 실함수의 합·곱의 연속을 쓴다. 역수는 해석학 입문의 역수의 연속을 합성으로 가져온다.
:::

:::hint
(1)은 [[maps-into-a-product]]의 (2)를 $X_1 = X_2 = \mathbb{R}$에 쓰는 것입니다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (2)가 $\mathbb{C}$의 위상과 $\operatorname{Re} = \pi_1$을 줍니다.
:::

:::hint
(4)에서 실수 $N(z) = (\operatorname{Re} g(z))^2 + (\operatorname{Im} g(z))^2$의 역수를 취하는 함수가 연속이라는 것은, $N$의 공역을 $\mathbb{R} - \{0\}$으로 줄인 함수와 그 위의 역수 함수의 합성으로 봅니다.
:::

:::proof
"복소평면 (n)"은 [[complex-plane-as-metric-space|복소평면의 거리]]의 번호, "곱 함수 (n)"은 [[maps-into-a-product]]의 번호, "연속 (n)"은 [[continuous-map|위상공간 사이의 연속함수]]의 번호, "합성 (n)"은 [[composition-of-continuous-maps|연속함수의 합성]]의 번호, "실함수 합곱"은 [[max-metric-and-product-topology|최대 거리와 곱위상]]의 (3)(위상공간 $Z$ 위의 연속 실함수의 합과 곱은 연속)이다. "복소수 (n)", "복소수체 (n)", "켤레 (n)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다.

**1의 증명.** 복소평면 (2)에 의해 $\mathbb{C}$의 위상 $\mathcal{T}_d$는 $\mathbb{R} \times \mathbb{R}$의 보통 위상, 곧 $\mathbb{R}$의 보통 위상 둘의 곱위상이고, $z$에서의 값이 $\operatorname{Re} z$, $\operatorname{Im} z$인 함수는 사영 $\pi_1$, $\pi_2$이다. 따라서 [[function-composition|합성]]의 값에 의해 $\pi_1 \circ f = \operatorname{Re} f$, $\pi_2 \circ f = \operatorname{Im} f$이다. 곱 함수 (2)를 $X_1 = X_2 = \mathbb{R}$에 쓰면 (1)의 두 문장이 나온다.

**2의 증명.** 곱 함수 (1)의 (i)에 의해 사영 $\pi_1 = \operatorname{Re}$, $\pi_2 = \operatorname{Im}$은 연속이다. 복소평면 (1)에 의해 $|z| = d(z, 0)$이므로, [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (3)을 $p = 0$에 쓰면 $z$에서의 값이 $|z|$인 함수는 연속이다($\mathbb{R}$의 보통 거리의 거리위상은 보통 위상이다). 항등함수와 상수함수는 연속 (1), (2)이다. 상수함수 가운데 모든 값이 실수 $-1$인 함수 $Z \to \mathbb{R}$도 연속 (2)에 의해 연속이고, (K12)에 의해 실수 $a$에서 $(-1)a = -a$이므로 실함수 합곱에 의해 연속 실함수 $u$에 대하여 $z$에서의 값이 $-u(z)$인 함수도 연속이다. 이것을 (가)라 부른다.

켤레를 취하는 함수를 $\kappa$라 하면 켤레 (1)에 의해 $\operatorname{Re} \kappa(z) = \operatorname{Re} z$이고 $\operatorname{Im} \kappa(z) = -\operatorname{Im} z$이다. 앞 문단과 (가)에 의해 두 실함수는 연속이므로 (1)에 의해 $\kappa$는 연속이다. $\iota$는 복소수체 (2)의 (ii)에 의해 $\operatorname{Re} \iota(x) = x$, $\operatorname{Im} \iota(x) = 0$이므로 $\operatorname{Re} \iota = i_{\mathbb{R}}$이고 $\operatorname{Im} \iota$는 모든 값이 $0$인 상수함수이다. 둘 다 연속 (1), (2)에 의해 연속이므로 (1)을 $Z = \mathbb{R}$에 쓰면 $\iota$는 연속이다.

**3의 증명.** $f$, $g$가 연속이면 (1)에 의해 $\operatorname{Re} f$, $\operatorname{Im} f$, $\operatorname{Re} g$, $\operatorname{Im} g$는 연속인 실함수이다.

합: 복소수 (2)에 의해 $\operatorname{Re}(f + g) = \operatorname{Re} f + \operatorname{Re} g$이고 허수부도 같으므로, 실함수 합곱에 의해 두 실함수는 연속이고 (1)에 의해 $f + g$는 연속이다. 차: 복소수체 (1)에 의해 $\operatorname{Re}(f - g)(z) = \operatorname{Re} f(z) + (-\operatorname{Re} g(z))$이고 허수부도 같으므로 (가)와 실함수 합곱에 의해 연속이다. 곱: 복소수 (2)에 의해
$$
\begin{aligned}
\operatorname{Re}(fg)(z) &= \operatorname{Re} f(z) \operatorname{Re} g(z) \\
&\qquad - \operatorname{Im} f(z) \operatorname{Im} g(z), \\
\operatorname{Im}(fg)(z) &= \operatorname{Re} f(z) \operatorname{Im} g(z) \\
&\qquad + \operatorname{Im} f(z) \operatorname{Re} g(z)
\end{aligned}
$$
이고, 실함수 합곱과 (가)에 의해 두 실함수는 연속이므로 $fg$는 연속이다. 상수배: (2)에 의해 모든 값이 $c$인 상수함수는 연속이므로 곱에 의해 $cf$는 연속이다. 켤레와 절댓값: $\overline{f} = \kappa \circ f$이고 $|f|$는 (2)의 절댓값 함수와 $f$의 합성이므로 합성 (1)에 의해 연속이다. 거듭제곱: $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 정의에 의해 $f^0$은 모든 값이 $1$인 상수함수이므로 (2)에 의해 연속이다. $f^k$가 연속이면 $f(z)^{k+1} = f(z)^k f(z)$이므로 $f^{k+1} = f^k f$이고 곱에 의해 연속이다.

**4의 증명.** (i). $N(z) = \operatorname{Re} g(z) \operatorname{Re} g(z) + \operatorname{Im} g(z) \operatorname{Im} g(z)$로 정한 함수 $N : Z \to \mathbb{R}$는 실함수 합곱에 의해 연속이다. 모든 $z$에서 $g(z) \ne 0$이므로 복소수체 (1)에 의해 $N(z) \ne 0$이고
$$
\begin{aligned}
\operatorname{Re}(g(z)^{-1}) &= \operatorname{Re} g(z) \cdot N(z)^{-1}, \\
\operatorname{Im}(g(z)^{-1}) &= -\operatorname{Im} g(z) \cdot N(z)^{-1}
\end{aligned}
$$
이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $a^2 = aa$). $S = \{x \in \mathbb{R} : x \ne 0\}$에 보통 위상의 부분공간 위상을 주자. $N$의 모든 값이 $S$에 들므로 [[subspace-and-continuity]]의 (3)의 (i)에 의해 공역을 $S$로 줄인 $N_S : Z \to S$는 연속이다. 한편 [[real-valued-function|실함수]]의 (3)의 항등함수 $i_S$는 [[continuous-function|연속함수]]의 (4)에 의해 연속함수이고 $S$의 모든 점에서 값이 $0$이 아니므로, [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $x$에서의 값이 $x^{-1}$인 실함수 $\rho = 1/i_S : S \to \mathbb{R}$는 연속함수이다. [[metric-subspace-topology]]의 (2)에 의해 $S$의 보통 거리의 부분공간 거리의 거리위상은 보통 위상의 부분공간 위상이므로, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $\rho : S \to \mathbb{R}$는 위상의 뜻으로 연속이다. 합성 (1)에 의해 $\rho \circ N_S : Z \to \mathbb{R}$는 연속이고 $z$에서의 값은 $N(z)^{-1}$이다. 따라서 실함수 합곱과 (가)에 의해 위 두 실함수는 연속이고, (1)에 의해 $1/g$는 연속이다. $f/g$는 $z$에서의 값이 $f(z) g(z)^{-1}$이므로 $f$와 $1/g$의 곱이고, (3)에 의해 연속이다.

(ii). [[subspace-and-continuity]]의 (2)에 의해 연속함수의 제한 $f|_{Z'}$, $g|_{Z'} : (Z', \mathcal{T}_Z|_{Z'}) \to \mathbb{C}$는 연속이고, $Z'$의 정의에 의해 $g|_{Z'}$의 모든 값은 $0$이 아니다. (i)을 위상공간 $(Z', \mathcal{T}_Z|_{Z'})$에 쓴다.

**5의 증명.** $\mathbb{C} \times \mathbb{C}$에 곱위상을 주면 곱 함수 (1)의 (i)에 의해 사영 $\pi_1, \pi_2 : \mathbb{C} \times \mathbb{C} \to \mathbb{C}$는 연속이다. $(z, w)$에서의 값이 $z + w$, $zw$인 함수는 (3)의 기호로 $\pi_1 + \pi_2$와 $\pi_1 \pi_2$이므로 (3)을 $Z = \mathbb{C} \times \mathbb{C}$에 쓰면 연속이다.

**6의 증명.** (i). [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (1)의 (a)와 (c)를 $Y = \mathbb{C}$에 쓰고, 복소평면 (1)에 의해 $d(h(p), h(x)) = |h(x) - h(p)|$이다. $X \subseteq \mathbb{C}$이면 부분공간 거리는 $d$와 같은 값을 가지므로([[metric-space-examples]]의 (3)) $d_X(p, x) = |p - x| = |x - p|$이다.

(ii). [[continuity-preserves-convergence|연속함수는 수열의 수렴을 보존한다]]의 (1)에 의해 $(h(x_n))$은 $h(p)$로 수렴한다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이라는 정리]]의 (1)에 의해 $X$의 거리위상은 하우스도르프이므로 [[limit-unique-in-hausdorff]]의 (2)에 의해 $\lim_{n \to \infty} x_n = p$로 쓸 수 있고, [[convergence-of-complex-sequences|복소수열의 수렴]]의 (2)에 의해 $\lim_{n \to \infty} h(x_n) = h(p)$이다.
:::

## 예시와 반례

:::example[z z + i z̄ 의 연속]
$z$에서의 값이 $zz + i\overline{z}$인 함수 $F : \mathbb{C} \to \mathbb{C}$를 봅시다. (2)에 의해 항등함수 $i_{\mathbb{C}}$와 모든 값이 $i$인 상수함수와 켤레를 취하는 함수는 연속입니다. (3)의 기호로 $F = i_{\mathbb{C}} i_{\mathbb{C}} + i\,\overline{i_{\mathbb{C}}}$이므로 (3)의 곱, 상수배, 켤레, 합에 의해 $F$는 연속입니다. 또 (3)에 의해 $|F| : \mathbb{C} \to \mathbb{R}$도 연속입니다.
:::

:::example[분모가 0 이 되지 않는 몫 (1 + z z̄)⁻¹]
$g(z) = 1 + z\overline{z}$로 두면 (3)에 의해 $g$는 연속입니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $z\overline{z} = \iota(|z|^2)$이므로 [[complex-field|복소수체]]의 (2)에 의해 $g(z) = \iota(1) + \iota(|z|^2) = \iota(1 + |z|^2)$입니다. [[order-properties-of-reals|순서 성질]]의 (4)의 (iv)에 의해 $0 \le |z|\,|z| = |z|^2$이고 (5)의 (ii)에 의해 $0 < 1$이므로 (2)의 (iv)에 의해 $0 < 1 + |z|^2$이고, 복소수체의 (2)의 (i)에 의해 $g(z) \ne 0$입니다. (4)의 (i)에 의해 $1/g : \mathbb{C} \to \mathbb{C}$는 $\mathbb{C}$ 전체에서 연속입니다. 반면 $g(z) = z$이면 $z = 0$에서 분모가 $0$이므로 (4)의 (ii)에 따라 $Z' = \mathbb{C} - \{0\}$ 위에서만 $1/g$를 말합니다.
:::

:::counterexample[0 에서만 값이 다른 함수가 연속이 아닌 예]
$h(0) = 0$이고 $z \ne 0$이면 $h(z) = 1$인 함수 $h : \mathbb{C} \to \mathbb{C}$를 봅시다. $x_n = \iota(n^{-1})$은 [[limit-laws-for-complex-sequences|복소수열의 극한 법칙]]의 (6)의 (i)과 [[basic-limits]]의 (2)에 의해 $\iota(0) = 0$으로 수렴하고, $n^{-1} \ne 0$이므로 [[complex-field|복소수체]]의 (2)의 (i)에 의해 $x_n \ne 0$이라 $h(x_n) = 1$입니다. 함숫값의 수열은 상수 수열이라 $1$로 수렴하고 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (2)에 의해 $h(0) = 0$으로는 수렴하지 않습니다. (6)의 (ii)의 대우에 의해 $h$는 $0$에서 연속이 아닙니다. $\operatorname{Im} h$는 모든 값이 $0$인 상수함수라 연속이므로, (1)에 의해 $\operatorname{Re} h$가 $0$에서 연속이 아닙니다. 다만 $h$를 $\mathbb{C} - \{0\}$으로 제한하면 상수함수가 되어 연속입니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $|z|\,z$인 함수 $\mathbb{C} \to \mathbb{C}$는 연속인가?]
그렇습니다. [[complex-field|복소수체]]의 (3)의 약속대로 $|z|\,z$는 $\iota(|z|)\,z$입니다. (2)에 의해 절댓값 함수 $\mathbb{C} \to \mathbb{R}$와 $\iota : \mathbb{R} \to \mathbb{C}$는 연속이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $z$에서의 값이 $\iota(|z|)$인 함수 $\mathbb{C} \to \mathbb{C}$는 연속이고, 이것과 항등함수의 곱은 (3)에 의해 연속입니다.
:::

:::check[$\mathbb{C} - \{0\}$에서 $z$에서의 값이 $\overline{z} / z$인 함수는 연속인가?]
그렇습니다. 항등함수 $g = i_{\mathbb{C}}$와 켤레를 취하는 함수 $f$는 (2)에 의해 연속이고, $Z' = \{z \in \mathbb{C} : z \ne 0\} = \mathbb{C} - \{0\}$이므로 (4)의 (ii)에 의해 $f|_{Z'} / g|_{Z'}$, 곧 이 함수는 연속입니다.
:::
