---
title: 복소함수의 극한 법칙
title_en: Limit Laws for Complex Functions
aliases: [복소함수의 극한의 사칙연산, 복소함수의 극한과 합성, 분모가 0 에서 떨어진다, limit laws for complex functions]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소함수가 집적점에서 수렴하면 그 가까이에서 유계이고, 극한이 0 이 아니면 그 가까이에서 절댓값이 극한의 절댓값의 절반보다 크다. 두 복소함수의 합, 차, 상수배, 곱, 켤레, 절댓값, 거듭제곱, 분모가 0 이 아닌 점에서의 몫은 극한의 합, 차, 상수배, 곱, 켤레, 절댓값, 거듭제곱, 몫으로 수렴한다. 복소 다항함수의 극한은 함숫값이고, 극한을 연속함수 안으로 넣을 수 있으며, 한 점에서 연속이고 0 이 아닌 함수는 그 점의 가까이에서 0 이 아니다.
requires: [function, function-composition, mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number, complex-polynomial-function, open-ball, open-set-in-metric-space, subspace-and-continuity, complex-plane-as-metric-space, continuity-of-complex-operations, limit-of-complex-function]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Limits and Continuity 절의 Proposition limits 와 그 증명, 합성의 정의, Proposition funoflimit 와 그 증명, source/sec_limitsandcontinuity.ptx:204–285, 373–428; 연습문제 ex_2_1, ex_limits, funoflimit 의 증명을 하게 하는 연습문제 (source/exercises-chap2.ptx:13–44, 52–58, 175–181)"
    checked: original
    note: "출처 Proposition limits(sec_limitsandcontinuity.ptx:211–247)는 같은 정의역 G 위의 f, g 와 G 의 집적점 z₀, c ∈ ℂ 에 대해 두 극한이 있으면 lim(f + cg) = lim f + c lim g, lim fg = lim f · lim g, lim g ≠ 0 일 때 lim f/g = lim f / lim g 라고 진술한다. 출처는 첫째 등식만 c ≠ 0 으로 δ = min{δ₁, δ₂} 와 삼각부등식으로 증명하고(250–284줄) 나머지는 연습문제 ex_limits(exercises-chap2.ptx:52–58)로 남긴다. 이 항목의 (3)은 첫째 등식을 합, 차, 상수배로 나눈 것이고 증명 경로가 같다. (4)와 (7)이 나머지 두 등식의 증명이다. 출처는 몫의 정의역을 말하지 않는다. 이 항목은 (2)로 g 가 z₀ 가까이에서 0 이 아님을 먼저 보이고, 몫을 g 가 0 이 아닌 점의 집합 Z 위의 함수로 둔다. (1), (2), (5), (6), (9)는 출처의 이 명제에 들어 있지 않고 이 사이트가 진술에 더했다. (8)의 (ii)는 출처 Proposition funoflimit(393–428줄)이고 증명 경로(ε 에서 η, η 에서 δ)가 같다. 출처는 그 합성을 'g 의 상이 f 의 정의역에 들어 있을 때' 정의하고(373–391줄), 이 항목은 같은 조건에서 g 의 공역을 H 로 선언해 합성을 정한다. 출처는 funoflimit 의 증명도 연습문제(exercises-chap2.ptx:175–181)로 들지만 본문에 증명이 있다. 예시 '유리식의 극한'은 출처 연습문제 ex_2_1 의 첫째 물음(exercises-chap2.ptx:19–30, lim_{z→i} (iz³ − 1)/(z + i))과 같은 종류의 극한, 곧 분모의 극한이 0 이 아닌 유리식의 극한이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(정의역 안으로 좁힌 진술, 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱 $z^k$는 [[power-of-a-complex-number]]의 것이다. 복소함수, 집적점, 수렴, "$z_0$ 가까이에서 성립한다", 기호 $\lim_{z \to z_0}$, 실숫값 함수의 수렴은 [[limit-of-complex-function|복소함수의 극한]]의 것이다. 함수 $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k$, $|f|$와, $g$의 모든 값이 $0$이 아닐 때의 $1/g$, $f/g$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 진술에서 $Z$를 여기의 정의역으로 둔 것이다. 복소 다항함수는 [[complex-polynomial-function]]의 것이다. 연속과 "$a$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, $\mathbb{C}$의 부분집합에는 [[complex-plane-as-metric-space|복소평면의 거리]]의 부분공간 거리와 그 거리위상을 준다.

아래에서 $S$는 $\mathbb{C}$의 부분집합, $z_0$은 $S$의 집적점, $f$, $g : S \to \mathbb{C}$는 복소함수, $c$는 복소수, $k$는 $0$ 이상인 정수이다. 각 번호는 거기 적은 함수의 수렴만 가정한다.

1. ($z_0$ 가까이에서 유계) $f$가 $z_0$에서 $L_1$로 수렴하면 "$|f(z)| < |L_1| + 1$"이 $z_0$ 가까이에서 성립한다.
2. (분모가 $0$에서 떨어진다) $g$가 $z_0$에서 $L_2$로 수렴하고 $L_2 \ne 0$이면 "$|L_2| / 2 < |g(z)|$"가 $z_0$ 가까이에서 성립하고, 특히 "$g(z) \ne 0$"이 $z_0$ 가까이에서 성립한다.

아래 (3), (4)에서는 $f$, $g$가 $z_0$에서 각각 $L_1$, $L_2$로 수렴한다고 하고, (5), (6)에서는 $f$가 $z_0$에서 $L_1$로 수렴한다고 한다.

3. (합, 차, 상수배) $f + g$, $f - g$, $cf$는 $z_0$에서 각각 $L_1 + L_2$, $L_1 - L_2$, $c L_1$로 수렴한다.
4. (곱) $fg$는 $z_0$에서 $L_1 L_2$로 수렴한다.
5. (켤레와 절댓값) $\overline{f}$는 $z_0$에서 $\overline{L_1}$로 수렴하고, 실숫값 함수 $|f|$는 $z_0$에서 $|L_1|$로 수렴한다.
6. (거듭제곱) $f^k$는 $z_0$에서 $L_1^k$로 수렴한다.
7. (몫) $g$가 $z_0$에서 $L_2$로 수렴하고 $L_2 \ne 0$이라 하며, $Z = \{z \in S : g(z) \ne 0\}$로 두자. 그러면 $z_0$은 $Z$의 집적점이고, $g|_Z$의 모든 값은 $0$이 아니며, $1/(g|_Z) : Z \to \mathbb{C}$는 $z_0$에서 $L_2^{-1}$로 수렴한다. 또 $f$가 $z_0$에서 $L_1$로 수렴하면 $f|_Z / g|_Z : Z \to \mathbb{C}$는 $z_0$에서 $L_1 / L_2$로 수렴한다. $S$의 모든 원소 $z$에서 $g(z) \ne 0$이면 $Z = S$이다.
8. (다항함수와 합성)
   - (i) $p$가 복소 다항함수이면 $p|_S$는 $z_0$에서 $p(z_0)$으로 수렴한다. 곧 $\lim_{z \to z_0} p(z) = p(z_0)$이다. $z_0$은 $S$에 속하지 않아도 된다.
   - (ii) (극한을 연속함수 안으로) $H \subseteq \mathbb{C}$이고 모든 $z \in S$에서 $g(z) \in H$이며 $h : H \to \mathbb{C}$가 복소함수라 하자. $g$를 $S$에서 $H$로의 함수로 보아 합성 $h \circ g : S \to \mathbb{C}$를 정한다. $g$가 $z_0$에서 $w_0$으로 수렴하고 $w_0 \in H$이며 $h$가 $w_0$에서 연속이면, $h \circ g$는 $z_0$에서 $h(w_0)$으로 수렴한다. 곧 $\lim_{z \to z_0} h(g(z)) = h\bigl(\lim_{z \to z_0} g(z)\bigr)$이다.
9. (한 점에서 연속이고 $0$이 아닌 함수) $a \in S$이고 $q : S \to \mathbb{C}$가 $a$에서 연속이며 $q(a) \ne 0$이라 하자. 그러면 어떤 실수 $r > 0$이 있어 $z \in S$이고 $|z - a| < r$인 모든 $z$에서 $|q(a)| / 2 < |q(z)|$이고, 따라서 $q(z) \ne 0$이다. 또 실수 $\rho > 0$에 대하여 $B(a, \rho) \subseteq S$이면 이 $r$을 $r \le \rho$가 되게 잡을 수 있고, 그러면 $B(a, r) \subseteq S$이며 $B(a, r)$의 모든 점 $z$에서 $q(z) \ne 0$이다. 여기서 $a$는 $S$의 집적점이 아니어도 된다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the conjugate $\overline{z}$, the modulus $|z|$, and powers $z^k$ are those of the entries on complex conjugates, the modulus of a complex number, and powers of a complex number. Complex functions, cluster points, convergence, "holds near $z_0$", the notation $\lim_{z \to z_0}$, and convergence of real-valued functions are those of the entry on the limit of a complex function. The functions $f + g$, $f - g$, $fg$, $cf$, $\overline{f}$, $f^k$, $|f|$, and, when no value of $g$ is $0$, $1/g$ and $f/g$, are those of the statement of the entry on the continuity of the complex operations, with $Z$ there taken to be the domain here. Complex polynomial functions are those of the entry on complex polynomial functions. Continuity and "continuous at $a$" are those of the entry on continuous maps between topological spaces, and subsets of $\mathbb{C}$ carry the subspace metric of the metric of the complex plane and its metric topology.

Below, $S$ is a subset of $\mathbb{C}$, $z_0$ is a cluster point of $S$, $f$, $g : S \to \mathbb{C}$ are complex functions, $c$ is a complex number, and $k$ is an integer at least $0$. Each item assumes only the convergence of the functions mentioned there.

1. (Bounded near $z_0$) If $f$ converges to $L_1$ at $z_0$, then "$|f(z)| < |L_1| + 1$" holds near $z_0$.
2. (Denominators stay away from $0$) If $g$ converges to $L_2$ at $z_0$ and $L_2 \ne 0$, then "$|L_2| / 2 < |g(z)|$" holds near $z_0$; in particular "$g(z) \ne 0$" holds near $z_0$.

In (3) and (4) below, $f$ and $g$ converge at $z_0$ to $L_1$ and $L_2$ respectively; in (5) and (6), $f$ converges to $L_1$ at $z_0$.

3. (Sum, difference, constant multiple) $f + g$, $f - g$, $cf$ converge at $z_0$ to $L_1 + L_2$, $L_1 - L_2$, $c L_1$ respectively.
4. (Product) $fg$ converges to $L_1 L_2$ at $z_0$.
5. (Conjugate and modulus) $\overline{f}$ converges to $\overline{L_1}$ at $z_0$, and the real-valued function $|f|$ converges to $|L_1|$ at $z_0$.
6. (Powers) $f^k$ converges to $L_1^k$ at $z_0$.
7. (Quotients) Suppose $g$ converges to $L_2$ at $z_0$ with $L_2 \ne 0$, and put $Z = \{z \in S : g(z) \ne 0\}$. Then $z_0$ is a cluster point of $Z$, no value of $g|_Z$ is $0$, and $1/(g|_Z) : Z \to \mathbb{C}$ converges to $L_2^{-1}$ at $z_0$. If moreover $f$ converges to $L_1$ at $z_0$, then $f|_Z / g|_Z : Z \to \mathbb{C}$ converges to $L_1 / L_2$ at $z_0$. If $g(z) \ne 0$ for every element $z$ of $S$, then $Z = S$.
8. (Polynomials and composition)
   - (i) If $p$ is a complex polynomial function, then $p|_S$ converges to $p(z_0)$ at $z_0$. That is, $\lim_{z \to z_0} p(z) = p(z_0)$. $z_0$ need not belong to $S$.
   - (ii) (Taking a limit inside a continuous function) Let $H \subseteq \mathbb{C}$, suppose $g(z) \in H$ for all $z \in S$, and let $h : H \to \mathbb{C}$ be a complex function. Regarding $g$ as a function from $S$ to $H$, define the composite $h \circ g : S \to \mathbb{C}$. If $g$ converges to $w_0$ at $z_0$, $w_0 \in H$, and $h$ is continuous at $w_0$, then $h \circ g$ converges to $h(w_0)$ at $z_0$. That is, $\lim_{z \to z_0} h(g(z)) = h\bigl(\lim_{z \to z_0} g(z)\bigr)$.
9. (A function continuous and nonzero at a point) Let $a \in S$, and let $q : S \to \mathbb{C}$ be continuous at $a$ with $q(a) \ne 0$. Then there is a real $r > 0$ such that $|q(a)| / 2 < |q(z)|$, and hence $q(z) \ne 0$, for all $z$ with $z \in S$ and $|z - a| < r$. Moreover, if $B(a, \rho) \subseteq S$ for a real $\rho > 0$, this $r$ can be taken with $r \le \rho$; then $B(a, r) \subseteq S$ and $q(z) \ne 0$ at every point $z$ of $B(a, r)$. Here $a$ need not be a cluster point of $S$.
:::

## 직관

해석학 입문의 [[limit-laws-for-functions|함수의 극한 법칙]]과 같은 말을 복소함수에 대해 합니다. 극한이 있는 두 함수를 더하거나 곱하면, 극한을 먼저 구해 더하거나 곱한 것과 같습니다. 증명도 실함수와 같은 줄을 따릅니다. 실수의 절댓값 자리에 복소수의 절댓값을 쓰고, 삼각부등식 $|w + v| \le |w| + |v|$와 곱의 절댓값 $|wv| = |w|\,|v|$만 쓰기 때문입니다. 복소수에는 순서가 없지만 증명에 나오는 부등식은 모두 절댓값, 곧 실수 사이의 부등식입니다.

곱의 증명에는 $g$가 $z_0$ 가까이에서 유계라는 것 (1)이 쓰이고, 몫의 증명에는 분모가 $z_0$ 가까이에서 $0$에서 떨어져 있다는 것 (2)가 쓰입니다. (2)는 극한 $L_2$가 $0$이 아닐 때만 말합니다. $L_2 = 0$이면 $g(z) \ne 0$이 $z_0$ 가까이에서 성립할 수도 있고($g(z) = z$, $z_0 = 0$) 성립하지 않을 수도 있습니다(모든 값이 $0$인 함수). 몫 $f/g$는 분모가 $0$인 점에서 뜻이 없으므로, (7)은 몫을 $g$가 $0$이 아닌 점의 집합 $Z$ 위의 함수로 두고, $z_0$이 $Z$의 집적점이라는 것을 (2)로 보입니다.

(8)의 (i)은 다항함수의 극한을 값을 넣어 구할 수 있다는 것입니다. 다항함수가 연속이라는 것을 복소수 강의에서 보였으므로, 극한과 연속의 관계([[limit-of-complex-function|복소함수의 극한]]의 (11))에서 바로 나옵니다. (9)는 극한이 아니라 연속에 관한 사실이지만 (2)와 같은 부등식을 씁니다. 다음 항목들에서 미분가능한 함수의 역수를 다룰 때 분모가 $0$이 아닌 열린 공을 얻는 데 씁니다.

## 증명

:::idea
실함수의 극한 법칙의 증명을 복소수의 절댓값으로 옮긴다. 합은 $\varepsilon / 2$와 삼각부등식, 곱은 $fg - L_1 L_2 = (f - L_1) g + L_1 (g - L_2)$와 (1), 역수는 $1/g - 1/L_2 = (L_2 - g)/(g L_2)$와 (2)로 어림한다.
:::

:::hint
(2)는 수렴의 정의를 $\varepsilon = |L_2| / 2$로 쓰고, $|L_2| \le |L_2 - g(z)| + |g(z)|$에서 $|g(z)|$를 아래로 누릅니다.
:::

:::hint
(6)은 $k$에 대한 귀납법입니다. $f^0$은 값이 $1$인 상수함수이고 $f^{k+1} = f^k f$입니다.
:::

:::proof
"극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]]의 번호, "순서 성질 (n)"은 [[order-properties-of-reals]], "복소수체 (n)"은 [[complex-field]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "삼각부등식 (n)"은 [[complex-triangle-inequality|복소수의 삼각부등식]], "연산의 연속 (n)"은 [[continuity-of-complex-operations|복소수 연산의 연속]]의 번호이다. 양의 실수 $\varepsilon$에 대하여 순서 성질 (8)에 의해 $0 < \varepsilon / 2$이고 $\varepsilon / 2 + \varepsilon / 2 = \varepsilon$이다([[real-number-arithmetic]]의 (K1)–(K8)). 극한 (2)의 (i)에 의해 $z_0$ 가까이에서 성립하는 유한 개의 조건은 함께 $z_0$ 가까이에서 성립하므로, 아래에서는 그렇게 묶은 조건이 성립하는 $z$에서 계산한다.

**1의 증명.** 수렴의 정의를 $\varepsilon = 1$로 쓰면 "$|f(z) - L_1| < 1$"이 $z_0$ 가까이에서 성립한다. 그런 $z$에서 삼각부등식 (2)에 의해 $|f(z)| = |(f(z) - L_1) + L_1| \le |f(z) - L_1| + |L_1| < 1 + |L_1|$이다(순서 성질 (2)의 (ii)와 (1)의 (v)).

**2의 증명.** $L_2 \ne 0$이므로 복소 절댓값 (1)에 의해 $0 < |L_2|$이고, 순서 성질 (8)에 의해 $0 < |L_2| / 2$이다. 수렴의 정의를 $\varepsilon = |L_2| / 2$로 쓰면 "$|g(z) - L_2| < |L_2| / 2$"가 $z_0$ 가까이에서 성립한다. 그런 $z$에서 삼각부등식 (5)와 복소 절댓값 (2)의 $|L_2 - g(z)| = |g(z) - L_2|$에 의해
$$
\begin{aligned}
|L_2| = |L_2 - 0| &\le |L_2 - g(z)| \\
&\quad + |g(z) - 0| \\
&< |L_2| / 2 + |g(z)|
\end{aligned}
$$
이고, 양변에서 $|L_2| / 2$를 빼면 순서 성질 (2)의 (ii)에 의해 $|L_2| / 2 < |g(z)|$이다. 그러면 $0 < |g(z)|$이므로(순서 성질 (1)의 (v)) 복소 절댓값 (1)에 의해 $g(z) \ne 0$이다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. "$|f(z) - L_1| < \varepsilon / 2$"와 "$|g(z) - L_2| < \varepsilon / 2$"가 $z_0$ 가까이에서 함께 성립하고, 그런 $z$에서 삼각부등식 (2)에 의해
$$
\begin{aligned}
&|(f + g)(z) - (L_1 + L_2)| \\
&\quad = |(f(z) - L_1) + (g(z) - L_2)| \\
&\quad < \varepsilon / 2 + \varepsilon / 2 = \varepsilon
\end{aligned}
$$
이다(순서 성질 (2)의 (iv)). 차는 $(f - g)(z) - (L_1 - L_2) = (f(z) - L_1) - (g(z) - L_2)$에 삼각부등식 (2)의 둘째 문장 $|w - v| \le |w| + |v|$를 쓴다. 상수배는 $c = 0$이면 $cf$가 값이 $0$인 상수함수이므로 극한 (5)에 의해 $0 = c L_1$로 수렴한다. $c \ne 0$이면 $|c| > 0$이므로 $\varepsilon |c|^{-1}$은 양수이고(순서 성질 (6)의 (i)과 [[real-order-axioms]]의 (W4)), "$|f(z) - L_1| < \varepsilon |c|^{-1}$"이 성립하는 $z$에서 복소 절댓값 (3)과 순서 성질 (4)의 (i)에 의해 $|c f(z) - c L_1| = |c|\,|f(z) - L_1| < \varepsilon$이다.

**4의 증명.** (1)을 $g$에 쓰면 "$|g(z)| < B$"가 $z_0$ 가까이에서 성립한다. 여기서 $B = |L_2| + 1$이고, 복소 절댓값 (1)과 순서 성질 (5)의 (ii), (2)의 (iv)에 의해 $B > 0$이다. 같은 이유로 $A = |L_1| + 1$은 양수이고 $|L_1| < A$이다. 양의 실수 $\varepsilon$을 잡으면 $\varepsilon (2B)^{-1}$과 $\varepsilon (2A)^{-1}$은 양수이므로(순서 성질 (6)의 (i)과 [[real-order-axioms]]의 (W4)), "$|g(z)| < B$", "$|f(z) - L_1| < \varepsilon (2B)^{-1}$", "$|g(z) - L_2| < \varepsilon (2A)^{-1}$"이 $z_0$ 가까이에서 함께 성립한다. 그런 $z$에서 두 곱을 어림한다.

- $0 \le |f(z) - L_1|$, $0 \le |g(z)|$이고 두 수가 각각 $\varepsilon (2B)^{-1}$, $B$보다 작으므로 순서 성질 (11)의 (i)에 의해 $|f(z) - L_1|\,|g(z)| \le \varepsilon (2B)^{-1} B = \varepsilon / 2$이다.
- $0 \le |L_1| < A$이고 $0 \le |g(z) - L_2| < \varepsilon (2A)^{-1}$이므로 순서 성질 (11)의 (ii)에 의해 $|L_1|\,|g(z) - L_2| < A\, \varepsilon (2A)^{-1} = \varepsilon / 2$이다.

체의 계산으로 $f(z) g(z) - L_1 L_2 = (f(z) - L_1) g(z) + L_1 (g(z) - L_2)$이므로, 삼각부등식 (2)와 복소 절댓값 (3), 순서 성질 (2)의 (iv)와 (1)의 (v)에 의해
$$
\begin{aligned}
&|f(z) g(z) - L_1 L_2| \\
&\quad \le |f(z) - L_1|\,|g(z)| \\
&\qquad + |L_1|\,|g(z) - L_2| \\
&\quad < \varepsilon / 2 + \varepsilon / 2 = \varepsilon
\end{aligned}
$$
이다.

**5의 증명.** [[complex-conjugate|켤레]]의 (2)에 의해 $\overline{f(z)} - \overline{L_1} = \overline{f(z) - L_1}$이고 복소 절댓값 (2)에 의해 그 절댓값은 $|f(z) - L_1|$이다. 따라서 수렴의 정의의 같은 $\delta$가 $\overline{f}$에도 통한다. 절댓값은 삼각부등식 (4)에 의해 $\bigl|\,|f(z)| - |L_1|\,\bigr| \le |f(z) - L_1|$이므로, "$|f(z) - L_1| < \varepsilon$"이 성립하는 $z$에서 $\bigl|\,|f(z)| - |L_1|\,\bigr| < \varepsilon$이고 극한 (4)의 (i)에 의해 $|f|$는 $|L_1|$로 수렴한다.

**6의 증명.** $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 정의에 의해 모든 $z$에서 $f(z)^0 = 1$이므로 $f^0$은 값이 $1$인 상수함수이고, 극한 (5)에 의해 $1 = L_1^0$으로 수렴한다. $f^k$가 $L_1^k$로 수렴한다고 하자. 거듭제곱의 정의에 의해 모든 $z$에서 $f(z)^{k+1} = f(z)^k f(z)$이므로 $f^{k+1} = f^k f$이고, (4)에 의해 $f^{k+1}$은 $L_1^k L_1 = L_1^{k+1}$로 수렴한다.

**7의 증명.** (2)에 의해 "$g(z) \ne 0$"이 $z_0$ 가까이에서 성립하므로 극한 (2)의 (ii)에 의해 $z_0$은 $\{z \in S : g(z) \ne 0\} = Z$의 집적점이다. $Z$의 정의와 [[adding-or-removing-an-element|제한]]의 진술에 의해 $g|_Z$의 모든 값은 $0$이 아니므로 연산의 연속의 진술에서처럼 $1/(g|_Z)$와 $f|_Z / g|_Z$가 정해진다.

양의 실수 $\varepsilon$을 잡는다. $0 < |L_2|$이므로 $\eta = \varepsilon |L_2|^2 / 2$는 양수이다. (2)와 수렴의 정의에 의해 "$|L_2| / 2 < |g(z)|$"와 "$|g(z) - L_2| < \eta$"가 $z_0$ 가까이에서 함께 성립한다. 이런 조건이 $S$의 원소 $z$에서 성립하면 $Z \subseteq S$인 $Z$의 원소 $z$에서도 성립한다. 그런 $z \in Z$에서 체의 계산으로 $g(z)^{-1} - L_2^{-1} = (L_2 - g(z))\, g(z)^{-1} L_2^{-1}$이고, 복소 절댓값 (3), (4)에 의해
$$
\begin{aligned}
&|g(z)^{-1} - L_2^{-1}| \\
&\quad = |g(z) - L_2|\, \bigl(|g(z)|\,|L_2|\bigr)^{-1}
\end{aligned}
$$
이다. $|L_2| / 2 < |g(z)|$이므로 순서 성질 (4)의 (i)에 의해 $|L_2|^2 / 2 < |g(z)|\,|L_2|$이고, 순서 성질 (6)의 (ii)에 의해 $\bigl(|g(z)|\,|L_2|\bigr)^{-1} < 2 |L_2|^{-2}$이다. 따라서 순서 성질 (11)의 (ii)에 의해 $|g(z)^{-1} - L_2^{-1}| < \eta \cdot 2 |L_2|^{-2} = \varepsilon$이다. 곧 $1/(g|_Z)$는 $z_0$에서 $L_2^{-1}$로 수렴한다. 몫은 모든 $z \in Z$에서 $f(z) / g(z) = f(z)\, g(z)^{-1}$이고, 극한 (7)의 (i)에 의해 $f|_Z$는 $L_1$로 수렴하므로, (4)를 $Z$ 위의 두 함수 $f|_Z$와 $1/(g|_Z)$에 쓰면 $L_1 L_2^{-1} = L_1 / L_2$로 수렴한다. 마지막 문장은 $Z$의 정의에서 나온다.

**8의 증명.** (i) [[complex-polynomial-function]]의 (5)에 의해 $p : \mathbb{C} \to \mathbb{C}$는 연속이다. $\mathbb{C}$는 $(\mathbb{C}, d)$의 열린집합이므로([[open-set-in-metric-space]]의 (1)) 극한 (1)의 (ii)에 의해 $z_0$은 $\mathbb{C}$의 집적점이고, 극한 (11)의 (i)에 의해 $p$는 $z_0$에서 $p(z_0)$으로 수렴한다. $z_0$은 $S$의 집적점이므로 극한 (7)의 (i)에 의해 $p|_S$도 $p(z_0)$으로 수렴한다.

(ii) $H$에는 부분공간 거리 $d_H$와 그 거리위상을 주고, [[subspace-and-continuity|부분공간과 연속]]의 (3)과 [[function-composition|함수의 합성]]의 진술에 따라 $g$를 $S$에서 $H$로의 함수로 본다. 양의 실수 $\varepsilon$을 잡는다. $h$가 $w_0$에서 연속이므로 연산의 연속 (6)의 (i)을 거리공간 $X = H$에 쓰면, $w \in H$이고 $|w - w_0| < \eta$인 모든 $w$에서 $|h(w) - h(w_0)| < \varepsilon$인 양수 $\eta$가 있다. $g$가 $w_0$으로 수렴하므로 $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$이면 $|g(z) - w_0| < \eta$인 양수 $\delta$가 있다. 그런 $z$에서 $g(z) \in H$이므로 $|h(g(z)) - h(w_0)| < \varepsilon$이다.

**9의 증명.** $S$에 부분공간 거리를 주면 연산의 연속 (6)의 (i)에 의해, $q$가 $a$에서 연속이라는 것을 $\varepsilon = |q(a)| / 2$에 쓸 수 있다. 2의 증명에서와 같이 $0 < |q(a)| / 2$이고, $z \in S$, $|z - a| < r$인 모든 $z$에서 $|q(z) - q(a)| < |q(a)| / 2$인 실수 $r > 0$이 있다. 그런 $z$에서 2의 증명의 계산을 $L_2$를 $q(a)$로, $g(z)$를 $q(z)$로 바꾸어 하면 $|q(a)| / 2 < |q(z)|$이고 $q(z) \ne 0$이다. $B(a, \rho) \subseteq S$이면 $r$ 대신 $r' = \min\{r, \rho\}$를 잡는다([[absolute-value]]의 (10)에 의해 양수이고 $r' \le r$, $r' \le \rho$이다). $z \in B(a, r')$이면 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $|z - a| < r' \le \rho$이므로 $z \in B(a, \rho) \subseteq S$이고, $|z - a| < r$이므로(순서 성질 (1)의 (v)) $q(z) \ne 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[유리식의 극한]
$\lim_{z \to 1 + i} (z^2 + 1)/(z - 2)$를 구합니다. $S = \mathbb{C}$ 위의 복소 다항함수 $f(z) = z^2 + 1$과 $g(z) = z - 2$를 생각합니다. $\mathbb{C}$는 열린집합이므로([[open-set-in-metric-space]]의 (1)) [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (ii)에 의해 $1 + i$는 $\mathbb{C}$의 집적점이고, (8)의 (i)에 의해 $f$는 $(1 + i)^2 + 1$로, $g$는 $(1 + i) - 2 = -1 + i$로 수렴합니다. $(1 + i)^2 = 1 + 2i + i^2 = 2i$이므로 $f$의 극한은 $1 + 2i$이고, $g$의 극한 $-1 + i$는 $0$이 아닙니다. $Z = \{z \in \mathbb{C} : z - 2 \ne 0\} = \mathbb{C} - \{2\}$이고, (7)에 의해 $f|_Z / g|_Z$는 $1 + i$에서
$$
\begin{aligned}
\frac{1 + 2i}{-1 + i} &= \frac{(1 + 2i)(-1 - i)}{(-1 + i)(-1 - i)} \\
&= \frac{1 - 3i}{2}
\end{aligned}
$$
로 수렴합니다. 분자는 $(1 + 2i)(-1 - i) = -1 - i - 2i - 2i^2 = 1 - 3i$이고, 분모는 [[complex-conjugate|켤레]]의 (5)에 의해 $(-1)^2 + 1^2 = 2$입니다.
:::

:::counterexample[분모의 극한이 $0$인 몫이 발산하는 예]
$S = \mathbb{C} - \{0\}$ 위의 $h(z) = 1/z$는 $0$에서 발산합니다. $0$은 $S$의 집적점입니다(실수 $r > 0$에 대하여 $\iota(r/2)$가 $S$의 점이고 $0$과의 거리가 $r/2 < r$). $h$가 $0$에서 어떤 복소수 $L$로 수렴한다면 (1)에 의해 "$|1/z| < B$"가 $0$ 가까이에서 성립합니다. 여기서 $B = |L| + 1 > 0$입니다. 그 조건을 주는 양수를 $\delta_0$이라 하고 $s = \min\{\delta_0, B^{-1}\} / 2$로 두면, $z = \iota(s)$는 $S$의 점이고 $|z - 0| = s < \delta_0$인데 $|1/z| = s^{-1} \ge 2B > B$입니다($s \le B^{-1}/2$에서 [[order-properties-of-reals]]의 (6)의 (ii)). 이것은 모순이므로 $h$는 발산합니다. 분모 $z$는 $0$으로 수렴하므로 (7)의 가정 $L_2 \ne 0$이 성립하지 않는 경우입니다.
:::

## 확인 질문

:::check[$\lim_{z \to i} \overline{z} / (z + 1)$은 무엇인가?]
$(-1 - i)/2$입니다. 분자는 (5)와 [[limit-of-complex-function|복소함수의 극한]]의 (5)에 의해 $\overline{i} = -i$로, 분모 $z + 1$은 (8)의 (i)에 의해 $i + 1 \ne 0$으로 수렴합니다. (7)에 의해 $\mathbb{C} - \{-1\}$ 위의 몫은 $-i/(1 + i) = -i(1 - i)/2 = (-i + i^2)/2 = (-1 - i)/2$로 수렴합니다.
:::

:::check[$g$가 $z_0$에서 $0$으로 수렴하면 "$g(z) \ne 0$"이 $z_0$ 가까이에서 성립하는가?]
그럴 수도 있고 아닐 수도 있습니다. $S = \mathbb{C}$, $z_0 = 0$일 때 $g(z) = z$는 $0$으로 수렴하고 $z \ne 0$이면 $g(z) \ne 0$이므로 성립합니다. 모든 값이 $0$인 상수함수도 $0$으로 수렴하지만, 모든 점에서 값이 $0$이므로 성립하지 않습니다. 그래서 (2)는 극한이 $0$이 아닐 때만 말합니다.
:::
