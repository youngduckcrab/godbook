---
title: 복소함수의 극한
title_en: Limit of a Complex Function
aliases: [복소함수, 복소함수의 수렴, 복소함수의 극한의 유일성, 실숫값 함수의 극한, 직선을 따라 다가가기, limit of a complex function, complex function]
kind: definition
field: complex-analysis
msc: ["30", "26B05"]
level: undergrad
summary: ℂ 의 부분집합 S 위의 복소함수 f 가 S 의 집적점 z₀ 에서 복소수 L 로 수렴한다는 것을 ε–δ 로 정의하고, 극한의 유일성과 기호 lim, 실숫값 함수의 극한, 제한과 국소성, 실수부·허수부와 |f − L| 로 하는 판정, 직선을 따라 다가가는 실변수 함수의 극한, 연속과의 관계를 증명한다.
requires: [set, subset, set-operations, open-sentence, quantifiers, negation-of-quantified-statements, function, function-composition, adding-or-removing-an-element, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, cluster-point, real-valued-function, limit-of-a-function, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, cluster-point-in-a-space, closure-in-a-metric-space, continuous-map, continuity-in-metric-spaces, complex-plane-as-metric-space, continuity-of-complex-operations]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Limits and Continuity 절의 첫째 정의(복소함수)와 둘째 정의(극한), 정의 뒤의 설명, Proposition restrictedlimit 와 그 앞 문단, Example exam_limitdoesnotexist, 연속의 두 정의, source/sec_limitsandcontinuity.ptx:5–23, 50–79, 140–158, 166–201, 293–336; Elementary Topology of the Plane 절의 집적점·고립점의 정의, source/sec_topologyintro.ptx:83–96; 연습문제 ex_limitunique, ex_limiteq0, 실수부·허수부로 극한을 판정하는 연습문제, 직선과 포물선으로 제한해 보는 연습문제, ex_continuitydefs (source/exercises-chap2.ptx:45–51, 59–66, 67–89, 90–106, 154–164)"
    checked: original
    note: "출처의 극한의 정의(sec_limitsandcontinuity.ptx:50–68)는 f : G → ℂ 와 G 의 집적점(accumulation point) z₀ 에 대해 '모든 ε > 0 에 δ > 0 이 있어 0 < |z − z₀| < δ 인 z ∈ G 에서 |f(z) − w₀| < ε' 이면 w₀ 을 극한이라 하고 lim 으로 쓴다. 이 항목은 'L 로 수렴한다'를 먼저 정의하고 유일성 (3)을 증명한 뒤 기호를 도입하며, 0 < |z − z₀| 대신 z ≠ z₀ 으로 쓴다(복소수의 절댓값의 (1)로 같은 조건이다). 출처의 집적점(sec_topologyintro.ptx:83–90)은 'z₀ 중심의 모든 열린 원판이 G 의 점 가운데 z₀ 과 다른 것을 포함한다'는 것이고, (1)의 (i)이 위상수학 입문의 집적점이 이것과 같다는 것이다. 출처는 정의 뒤(75–79줄)에서 z₀ 이 정의역에 없어도 되고 f(z₀) 은 보지 않는다고 적는다. 진술 첫머리의 'z₀ 은 S 에 속하지 않아도 된다'와 (6)이 이것을 적은 것이다. 출처는 극한의 유일성을 연습문제 ex_limitunique(exercises-chap2.ptx:45–51)로 두고(140–141줄이 그 연습문제를 가리킨다), (3)이 그 증명이다. (7)의 (i)은 출처의 Proposition restrictedlimit(147–158줄)이고, 출처는 그것을 정의에서 바로 나온다고만 적는다(143–144줄). (7)의 (iii)과 (10)의 (ii)는 출처가 Example exam_limitdoesnotexist(166–201줄)에서 실수축과 허수축으로 제한한 두 극한이 다르다는 것과 restrictedlimit 로 극한이 없음을 보이는 방법을 명제로 적은 것이다. (8)은 출처의 극한 판정 연습문제(exercises-chap2.ptx:90–106: f = u + iv 의 극한을 두 변수 실함수 u, v 의 극한으로 판정)와 같은 내용이고, 이 항목은 두 변수 실함수의 극한 대신 실숫값 함수의 극한(ι 로 옮긴 복소함수의 극한)으로 적는다. (9)는 출처의 연습문제 ex_limiteq0(exercises-chap2.ptx:59–66: lim f = 0 인 것은 정확히 lim |f| = 0 일 때)을 L 로 넓힌 것이다. 출처의 연속의 첫 정의(293–310줄: z₀ 이 고립점이거나 lim f = f(z₀))와 둘째 정의(318–333줄: ε–δ)는 연습문제 ex_continuitydefs(exercises-chap2.ptx:154–164)에서 같다고 보이게 한다. (11)은 이 두 정의가 위상수학 입문의 연속(위상공간 사이의 연속함수)과 같다는 것이고, 그 연습문제처럼 집적점인 경우와 고립점인 경우를 나눈다. 예시 '$(z^2 + 4)/(z - 2i)$ 의 $2i$ 에서의 극한'은 출처 sec_diffholom.ptx:65–86 의 Example exam_zcubedentire 가 (z³ − z₀³)/(z − z₀) 에서 z − z₀ 을 약분해 극한을 구하는 것과 같은 발상이다. 반례 '두 직선을 따라 극한이 다른 함수'는 출처 Example exam_limitdoesnotexist 와 같은 방법(두 직선으로 제한)이고, 출처의 극한 연습문제(exercises-chap2.ptx:67–89)도 x²y/(x⁴ + y²) 를 원점을 지나는 직선으로 제한해 본다. 반례의 함수 xy/|z|² 은 극형식으로 쓰면 각에만 기대는 함수이고, 출처 2장 연습문제(exercises-chap2.ptx:127–153)의 둘째 함수(z = r e^{iφ} ≠ 0 에서 sin φ, 0 에서 0)도 각에만 기대는 함수로 0 에서의 연속을 묻는 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(정의역 안으로 좁힌 진술, 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이며, 복소수의 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리 $d(z, w) = |z - w|$와 그 거리위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, $\mathbb{C}$의 부분집합에는 그 항목대로 $d$의 부분공간 거리와 그 거리위상을 준다. 집적점과 고립점은 [[cluster-point-in-a-space|위상공간의 집적점]]의 것이고, 이 항목에서 $\mathbb{C}$의 부분집합의 집적점은 늘 $(\mathbb{C}, d)$의 거리위상에서의 것이다. 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 연속과 "$a$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 함수 $\operatorname{Re} f$, $\operatorname{Im} f$, $|f|$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 것이다. 실수의 부분집합의 집적점은 [[cluster-point]]의 것이고, 실함수의 수렴과 기호 $\lim_{x \to c}$는 [[limit-of-a-function]]의 것이다. 함수의 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이다.

**복소함수.** $S$가 $\mathbb{C}$의 부분집합일 때, $S$에서 $\mathbb{C}$로의 함수 $f : S \to \mathbb{C}$를 $S$ 위의 **복소함수**(complex function)라 한다.

아래에서 $S$는 $\mathbb{C}$의 부분집합, $f : S \to \mathbb{C}$는 $S$ 위의 복소함수, $z_0$은 $S$의 집적점, $L$은 복소수이다. $z_0$은 $S$에 속하지 않아도 된다.

**수렴.** $f$가 $z_0$에서 $L$로 **수렴한다**(converges to $L$ at $z_0$)는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $z \in S$이고 $z \ne z_0$이며 $|z - z_0| < \delta$인 모든 $z$에서 $|f(z) - L| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면 정확히
$$
\begin{aligned}
&\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow{} \\
&\quad \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land{} \\
&\quad \forall z \in S,\ ((z \ne z_0 \land{} \\
&\qquad |z - z_0| < \delta) \Rightarrow{} \\
&\qquad |f(z) - L| < \varepsilon)\bigr)\Bigr)
\end{aligned}
$$
가 참일 때이다. 여기서 $|z - z_0|$와 $|f(z) - L|$은 복소수의 절댓값이고 $\varepsilon$, $\delta$는 실수이다. $f$가 $z_0$에서 **수렴한다**는 것은 정확히 $f$가 $z_0$에서 어떤 복소수로 수렴할 때이고, **발산한다**는 것은 정확히 $f$가 $z_0$에서 수렴하지 않을 때이다. $z_0$이 $S$의 집적점이 아니면 이 말들을 쓰지 않는다.

**$z_0$ 가까이에서.** $S$의 원소 $z$에 관한 [[open-sentence|열린 문장]] $P(z)$가 **$z_0$ 가까이에서 성립한다**는 것은 정확히, 어떤 양의 실수 $\delta_0$이 있어 $z \in S$이고 $z \ne z_0$이며 $|z - z_0| < \delta_0$인 모든 $z$에서 $P(z)$가 참일 때이다. $z_0 \in S$일 때 $P(z_0)$이 참인지는 따지지 않는다. 이 말로 쓰면, $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 "$|f(z) - L| < \varepsilon$"이 $z_0$ 가까이에서 성립할 때이다.

다음이 성립한다.

1. (집적점을 공으로 보기) $T \subseteq \mathbb{C}$이고 $a$가 복소수라 하자.
   - (i) $a$가 $T$의 집적점인 것은 정확히, 모든 실수 $r > 0$에 대하여 $z \in T$이고 $z \ne a$이며 $|z - a| < r$인 $z$가 있을 때이다. 따라서 $a$가 $T$의 집적점이 아닌 것은 정확히, 어떤 실수 $r > 0$이 있어 $z \in T$이고 $|z - a| < r$이면 $z = a$일 때이다.
   - (ii) 어떤 실수 $r > 0$에 대하여 $B(a, r) \subseteq T$이면, $a$는 $T$의 집적점이고 $T - \{a\}$의 집적점이다. 특히 $(\mathbb{C}, d)$의 열린집합 $U$의 모든 점 $a$는 $U$의 집적점이고 $U - \{a\}$의 집적점이다.
   - (iii) (직선 위의 점) $J \subseteq \mathbb{R}$이고 실수 $c$가 [[cluster-point]]의 뜻으로 $J$의 집적점이며, $u$가 $0$이 아닌 복소수라 하자. 실수 $t$에 대하여 $\lambda(t) = a + (t - c) u$로 둔다(여기서 $(t - c) u$는 $\iota(t - c) u$이다). 그러면 $t \ne c$이면 $\lambda(t) \ne a$이고, 모든 실수 $t$에서 $|\lambda(t) - a| = |t - c|\,|u|$이다. 또 모든 $t \in J$에서 $\lambda(t) \in T$이면 $a$는 $T$의 집적점이다.
2. ($z_0$ 가까이에서 성립하는 조건) $P(z)$, $Q(z)$를 $S$의 원소 $z$에 관한 열린 문장이라 하자.
   - (i) $P(z)$와 $Q(z)$가 각각 $z_0$ 가까이에서 성립하면 "$P(z)$이고 $Q(z)$"도 $z_0$ 가까이에서 성립한다.
   - (ii) $P(z)$가 $z_0$ 가까이에서 성립하면 $z_0$은 집합 $\{z \in S : P(z)\}$의 집적점이다. 특히 $z \in S$, $z \ne z_0$이고 $P(z)$가 참인 $z$가 있다.
   - (iii) $z_0$과 다른 $S$의 모든 원소 $z$에서 $P(z)$가 참이면 $P(z)$는 $z_0$ 가까이에서 성립한다.
3. (유일성) $f$가 $z_0$에서 $L$로 수렴하고 복소수 $L'$으로도 수렴하면 $L = L'$이다.

**극한의 기호.** (3)에 의해 $f$가 $z_0$에서 수렴하면 수렴하는 복소수는 하나뿐이다. 그 수를 $f$의 $z_0$에서의 **극한**(limit)이라 하고
$$
\lim_{z \to z_0} f(z)
$$
로 쓴다. 복소수 $L$에 대하여 "$\lim_{z \to z_0} f(z) = L$"은 정확히 $f$가 $z_0$에서 $L$로 수렴한다는 뜻이다. $f$가 식으로 정한 함수이면 $\lim_{z \to z_0}$ 뒤에 그 식을 쓰기도 한다. 발산할 때는 이 기호를 쓰지 않는다. 기호에는 정의역이 보이지 않으므로 어느 집합 위의 함수인지는 문맥에서 밝힌다.

**실숫값 함수의 극한.** $g : S \to \mathbb{R}$가 $S$에서 $\mathbb{R}$로의 함수이고 $M$이 실수라 하자. $z$에서의 값이 $\iota(g(z))$인 복소함수를 $\iota \circ g : S \to \mathbb{C}$로 쓴다. $g$가 $z_0$에서 $M$으로 **수렴한다**는 것은 정확히 $\iota \circ g$가 $z_0$에서 $\iota(M)$으로 수렴할 때이다. 아래 (4)에 의해 그런 실수 $M$은 하나뿐이고, 그것을 $\lim_{z \to z_0} g(z)$로 쓴다. 따라서 $\iota\bigl(\lim_{z \to z_0} g(z)\bigr) = \lim_{z \to z_0} \iota(g(z))$이고, [[complex-field]]의 (3)의 약속대로 $\lim_{z \to z_0} g(z)$를 복소수 자리에 읽어도 값이 어긋나지 않는다.

4. (실숫값 함수) $g : S \to \mathbb{R}$이고 $M$이 실수라 하자.
   - (i) $g$가 $z_0$에서 $M$으로 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어 $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$인 모든 $z$에서 $|g(z) - M| < \varepsilon$일 때이다. 여기서 $|g(z) - M|$은 실수의 절댓값이다.
   - (ii) $g$가 $z_0$에서 $M$으로 수렴하고 실수 $M'$으로도 수렴하면 $M = M'$이다.
5. (상수함수와 항등함수) $c$가 복소수이면 $S$ 위의 값이 $c$인 상수함수는 $z_0$에서 $c$로 수렴하고, $z$에서의 값이 $z$인 함수 $S \to \mathbb{C}$는 $z_0$에서 $z_0$으로 수렴한다. 곧 $\lim_{z \to z_0} c = c$이고 $\lim_{z \to z_0} z = z_0$이다. $k$가 실수이면 $S$ 위의 값이 $k$인 실숫값 상수함수는 $z_0$에서 $k$로 수렴한다.
6. ($z_0$ 가까이에서 같은 두 함수, $z_0$을 빼기)
   - (i) $h : S \to \mathbb{C}$가 복소함수이고 "$f(z) = h(z)$"가 $z_0$ 가까이에서 성립하면, $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 $h$가 $z_0$에서 $L$로 수렴할 때이다. 특히 $z_0$과 다른 $S$의 모든 원소 $z$에서 $f(z) = h(z)$이면 그렇다. 따라서 $z_0 \in S$일 때 $f(z_0)$의 값은 $f$가 $z_0$에서 $L$로 수렴하는지에 영향을 주지 않는다.
   - (ii) $z_0$은 $S - \{z_0\}$의 집적점이고, $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 제한 $f|_{S - \{z_0\}}$가 $z_0$에서 $L$로 수렴할 때이다.
7. (제한과 국소성)
   - (i) (제한) $A \subseteq S$이고 $z_0$이 $A$의 집적점이며 $f$가 $z_0$에서 $L$로 수렴하면, $f|_A$도 $z_0$에서 $L$로 수렴한다.
   - (ii) (국소성) $\delta_0$이 양의 실수이고 $A = \{z \in S : |z - z_0| < \delta_0\}$이면, $z_0$은 $A$의 집적점이고, $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 $f|_A$가 $z_0$에서 $L$로 수렴할 때이다.
   - (iii) (수렴하지 않음을 보이기) $A, B \subseteq S$이고 $z_0$이 $A$와 $B$의 집적점이며, $f|_A$가 $z_0$에서 복소수 $L_1$로, $f|_B$가 $z_0$에서 복소수 $L_2$로 수렴하고 $L_1 \ne L_2$이면, $f$는 $z_0$에서 발산한다.
8. (실수부와 허수부로 판정) $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 실숫값 함수 $\operatorname{Re} f$와 $\operatorname{Im} f$가 $z_0$에서 각각 $\operatorname{Re} L$과 $\operatorname{Im} L$로 수렴할 때이다.
9. ($|f - L|$로 판정) $f$가 $z_0$에서 $L$로 수렴하는 것은 정확히 $z$에서의 값이 $|f(z) - L|$인 실숫값 함수 $S \to \mathbb{R}$가 $z_0$에서 $0$으로 수렴할 때이다. 특히 $f$가 $z_0$에서 $0$으로 수렴하는 것은 정확히 $|f|$가 $z_0$에서 $0$으로 수렴할 때이다.
10. (직선을 따라 다가가기) $J \subseteq \mathbb{R}$이고 실수 $c$가 [[cluster-point]]의 뜻으로 $J$의 집적점이며, $u$가 $0$이 아닌 복소수이고, 모든 $t \in J$에서 $\lambda(t) = z_0 + (t - c) u \in S$라 하자. 실함수 $F_1, F_2 : J \to \mathbb{R}$를 $F_1(t) = \operatorname{Re} f(\lambda(t))$, $F_2(t) = \operatorname{Im} f(\lambda(t))$로 정한다.
    - (i) $f$가 $z_0$에서 $L$로 수렴하면, $F_1$과 $F_2$는 [[limit-of-a-function]]의 뜻으로 $c$에서 각각 $\operatorname{Re} L$과 $\operatorname{Im} L$로 수렴한다.
    - (ii) 따라서 두 쌍 $(J_1, c_1, u_1)$, $(J_2, c_2, u_2)$가 위 조건을 만족하고, 그로 정한 두 실함수 $F_1$이 각각 $c_1$, $c_2$에서 서로 다른 실수로 수렴하면 $f$는 $z_0$에서 발산한다. 두 $F_2$에 대해서도 같다.
11. (연속과의 관계) $a \in S$이고 $h : S \to \mathbb{C}$가 복소함수라 하자.
    - (i) $a$가 $S$의 집적점이면, $h$가 $a$에서 연속인 것은 정확히 $h$가 $a$에서 $h(a)$로 수렴할 때이다.
    - (ii) $a$가 $S$의 고립점이면 $h$는 $a$에서 연속이다.
    - (iii) 따라서 $h$가 $a$에서 연속인 것은 정확히 $a$가 $S$의 고립점이거나 $\lim_{z \to a} h(z) = h(a)$일 때이다. 또 $h$가 연속인 것은 정확히 $S$의 모든 점에서 $h$가 연속일 때이다.
    - (iv) $g : S \to \mathbb{R}$이고 $\mathbb{R}$에 보통 거리를 줄 때, $a$가 $S$의 집적점이면 $g$가 $a$에서 연속인 것은 정확히 $g$가 $a$에서 $g(a)$로 수렴할 때이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number. The metric $d(z, w) = |z - w|$ of $\mathbb{C}$, its metric topology, and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, and subsets of $\mathbb{C}$ carry the subspace metric of $d$ and its metric topology, as in that entry. Cluster points and isolated points are those of the entry on cluster points in a topological space; in this entry cluster points of subsets of $\mathbb{C}$ are always taken in the metric topology of $(\mathbb{C}, d)$. Open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Continuity and "continuous at $a$" are those of the entry on continuous maps between topological spaces, and the functions $\operatorname{Re} f$, $\operatorname{Im} f$, $|f|$ are those of the entry on the continuity of the complex operations. Cluster points of subsets of the reals are those of the entry on cluster points, and convergence of real-valued functions and the notation $\lim_{x \to c}$ are those of the entry on the limit of a function. The restriction $f|_A$ of a function is that of the entry on adding or removing an element.

**Complex functions.** If $S$ is a subset of $\mathbb{C}$, a function $f : S \to \mathbb{C}$ from $S$ to $\mathbb{C}$ is called a **complex function** on $S$.

Below, $S$ is a subset of $\mathbb{C}$, $f : S \to \mathbb{C}$ is a complex function on $S$, $z_0$ is a cluster point of $S$, and $L$ is a complex number. $z_0$ need not belong to $S$.

**Convergence.** $f$ **converges to $L$ at $z_0$** exactly when for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(z) - L| < \varepsilon$ for all $z$ with $z \in S$, $z \ne z_0$ and $|z - z_0| < \delta$. In quantifiers, this is exactly when
$$
\begin{aligned}
&\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow{} \\
&\quad \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land{} \\
&\quad \forall z \in S,\ ((z \ne z_0 \land{} \\
&\qquad |z - z_0| < \delta) \Rightarrow{} \\
&\qquad |f(z) - L| < \varepsilon)\bigr)\Bigr)
\end{aligned}
$$
is true. Here $|z - z_0|$ and $|f(z) - L|$ are moduli of complex numbers and $\varepsilon$, $\delta$ are real numbers. $f$ **converges** at $z_0$ exactly when $f$ converges at $z_0$ to some complex number, and **diverges** at $z_0$ exactly when $f$ does not converge at $z_0$. If $z_0$ is not a cluster point of $S$, these words are not used.

**Near $z_0$.** An open sentence $P(z)$ about elements $z$ of $S$ **holds near $z_0$** exactly when there is a positive real number $\delta_0$ such that $P(z)$ is true for all $z$ with $z \in S$, $z \ne z_0$ and $|z - z_0| < \delta_0$. When $z_0 \in S$, whether $P(z_0)$ is true is not considered. In these words, $f$ converges to $L$ at $z_0$ exactly when for every positive real number $\varepsilon$, "$|f(z) - L| < \varepsilon$" holds near $z_0$.

The following hold.

1. (Cluster points via balls) Let $T \subseteq \mathbb{C}$ and let $a$ be a complex number.
   - (i) $a$ is a cluster point of $T$ exactly when for every real $r > 0$ there is $z$ with $z \in T$, $z \ne a$ and $|z - a| < r$. Hence $a$ is not a cluster point of $T$ exactly when there is a real $r > 0$ such that $z \in T$ and $|z - a| < r$ imply $z = a$.
   - (ii) If $B(a, r) \subseteq T$ for some real $r > 0$, then $a$ is a cluster point of $T$ and of $T - \{a\}$. In particular every point $a$ of an open set $U$ of $(\mathbb{C}, d)$ is a cluster point of $U$ and of $U - \{a\}$.
   - (iii) (Points on a line) Let $J \subseteq \mathbb{R}$, let the real number $c$ be a cluster point of $J$ in the sense of the entry on cluster points, and let $u$ be a nonzero complex number. For a real number $t$ put $\lambda(t) = a + (t - c) u$ (here $(t - c) u$ is $\iota(t - c) u$). Then $\lambda(t) \ne a$ if $t \ne c$, and $|\lambda(t) - a| = |t - c|\,|u|$ for every real $t$. Moreover, if $\lambda(t) \in T$ for all $t \in J$, then $a$ is a cluster point of $T$.
2. (Conditions holding near $z_0$) Let $P(z)$, $Q(z)$ be open sentences about elements $z$ of $S$.
   - (i) If $P(z)$ and $Q(z)$ each hold near $z_0$, then "$P(z)$ and $Q(z)$" holds near $z_0$.
   - (ii) If $P(z)$ holds near $z_0$, then $z_0$ is a cluster point of the set $\{z \in S : P(z)\}$. In particular there is $z$ with $z \in S$, $z \ne z_0$ and $P(z)$ true.
   - (iii) If $P(z)$ is true for every element $z$ of $S$ other than $z_0$, then $P(z)$ holds near $z_0$.
3. (Uniqueness) If $f$ converges to $L$ at $z_0$ and also to a complex number $L'$, then $L = L'$.

**Notation for limits.** By (3), if $f$ converges at $z_0$, the complex number to which it converges is unique. This number is called the **limit** of $f$ at $z_0$ and is written
$$
\lim_{z \to z_0} f(z).
$$
For a complex number $L$, "$\lim_{z \to z_0} f(z) = L$" means exactly that $f$ converges to $L$ at $z_0$. If $f$ is defined by a formula, the formula is sometimes written after $\lim_{z \to z_0}$. The notation is not used when $f$ diverges. Since the domain does not appear in the notation, the set on which the function is defined is made clear from the context.

**Limits of real-valued functions.** Let $g : S \to \mathbb{R}$ be a function from $S$ to $\mathbb{R}$ and let $M$ be a real number. We write $\iota \circ g : S \to \mathbb{C}$ for the complex function whose value at $z$ is $\iota(g(z))$. $g$ **converges** to $M$ at $z_0$ exactly when $\iota \circ g$ converges to $\iota(M)$ at $z_0$. By (4) below such a real number $M$ is unique, and it is written $\lim_{z \to z_0} g(z)$. Hence $\iota\bigl(\lim_{z \to z_0} g(z)\bigr) = \lim_{z \to z_0} \iota(g(z))$, and reading $\lim_{z \to z_0} g(z)$ in the place of a complex number, by the convention (3) of the entry on the field of complex numbers, gives no conflict.

4. (Real-valued functions) Let $g : S \to \mathbb{R}$ and let $M$ be a real number.
   - (i) $g$ converges to $M$ at $z_0$ exactly when for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|g(z) - M| < \varepsilon$ for all $z$ with $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$. Here $|g(z) - M|$ is the absolute value of a real number.
   - (ii) If $g$ converges to $M$ at $z_0$ and also to a real number $M'$, then $M = M'$.
5. (Constant and identity functions) If $c$ is a complex number, the constant function on $S$ with value $c$ converges to $c$ at $z_0$, and the function $S \to \mathbb{C}$ whose value at $z$ is $z$ converges to $z_0$ at $z_0$. That is, $\lim_{z \to z_0} c = c$ and $\lim_{z \to z_0} z = z_0$. If $k$ is a real number, the real-valued constant function on $S$ with value $k$ converges to $k$ at $z_0$.
6. (Two functions equal near $z_0$; removing $z_0$)
   - (i) If $h : S \to \mathbb{C}$ is a complex function and "$f(z) = h(z)$" holds near $z_0$, then $f$ converges to $L$ at $z_0$ exactly when $h$ converges to $L$ at $z_0$. In particular this is so if $f(z) = h(z)$ for every element $z$ of $S$ other than $z_0$. Hence, when $z_0 \in S$, the value $f(z_0)$ does not affect whether $f$ converges to $L$ at $z_0$.
   - (ii) $z_0$ is a cluster point of $S - \{z_0\}$, and $f$ converges to $L$ at $z_0$ exactly when the restriction $f|_{S - \{z_0\}}$ converges to $L$ at $z_0$.
7. (Restriction and locality)
   - (i) (Restriction) If $A \subseteq S$, $z_0$ is a cluster point of $A$, and $f$ converges to $L$ at $z_0$, then $f|_A$ also converges to $L$ at $z_0$.
   - (ii) (Locality) If $\delta_0$ is a positive real number and $A = \{z \in S : |z - z_0| < \delta_0\}$, then $z_0$ is a cluster point of $A$, and $f$ converges to $L$ at $z_0$ exactly when $f|_A$ converges to $L$ at $z_0$.
   - (iii) (Showing divergence) If $A, B \subseteq S$, $z_0$ is a cluster point of $A$ and of $B$, $f|_A$ converges at $z_0$ to a complex number $L_1$ and $f|_B$ to a complex number $L_2$, and $L_1 \ne L_2$, then $f$ diverges at $z_0$.
8. (Real and imaginary parts) $f$ converges to $L$ at $z_0$ exactly when the real-valued functions $\operatorname{Re} f$ and $\operatorname{Im} f$ converge at $z_0$ to $\operatorname{Re} L$ and $\operatorname{Im} L$ respectively.
9. (The test by $|f - L|$) $f$ converges to $L$ at $z_0$ exactly when the real-valued function $S \to \mathbb{R}$ whose value at $z$ is $|f(z) - L|$ converges to $0$ at $z_0$. In particular, $f$ converges to $0$ at $z_0$ exactly when $|f|$ converges to $0$ at $z_0$.
10. (Approaching along a line) Let $J \subseteq \mathbb{R}$, let the real number $c$ be a cluster point of $J$ in the sense of the entry on cluster points, let $u$ be a nonzero complex number, and suppose $\lambda(t) = z_0 + (t - c) u \in S$ for all $t \in J$. Define real-valued functions $F_1, F_2 : J \to \mathbb{R}$ by $F_1(t) = \operatorname{Re} f(\lambda(t))$ and $F_2(t) = \operatorname{Im} f(\lambda(t))$.
    - (i) If $f$ converges to $L$ at $z_0$, then $F_1$ and $F_2$ converge at $c$, in the sense of the entry on the limit of a function, to $\operatorname{Re} L$ and $\operatorname{Im} L$ respectively.
    - (ii) Hence if two triples $(J_1, c_1, u_1)$, $(J_2, c_2, u_2)$ satisfy the conditions above and the two real-valued functions $F_1$ they define converge, at $c_1$ and $c_2$ respectively, to different real numbers, then $f$ diverges at $z_0$. The same holds for the two functions $F_2$.
11. (Relation to continuity) Let $a \in S$ and let $h : S \to \mathbb{C}$ be a complex function.
    - (i) If $a$ is a cluster point of $S$, then $h$ is continuous at $a$ exactly when $h$ converges to $h(a)$ at $a$.
    - (ii) If $a$ is an isolated point of $S$, then $h$ is continuous at $a$.
    - (iii) Hence $h$ is continuous at $a$ exactly when $a$ is an isolated point of $S$ or $\lim_{z \to a} h(z) = h(a)$. Also, $h$ is continuous exactly when $h$ is continuous at every point of $S$.
    - (iv) If $g : S \to \mathbb{R}$ and $\mathbb{R}$ carries the standard metric, and $a$ is a cluster point of $S$, then $g$ is continuous at $a$ exactly when $g$ converges to $g(a)$ at $a$.
:::

## 직관

해석학 입문의 [[limit-of-a-function|함수의 극한]]은 "$x$가 $c$에 충분히 가까우면 $f(x)$가 $L$에 가깝다"였습니다. 복소함수의 극한도 같은 말을 복소평면에서 합니다. 다만 "가깝다"를 재는 것이 실수의 절댓값이 아니라 복소수의 절댓값, 곧 평면의 거리입니다. 그래서 $|z - z_0| < \delta$인 점은 수직선 위의 구간이 아니라 $z_0$을 중심으로 하는 열린 원판을 채웁니다. 허용 오차 $\varepsilon$을 먼저 듣고 반지름 $\delta$를 정한다는 한정 기호의 순서는 실함수와 같습니다.

과녁에 비유하면 $L$은 과녁의 중심이고 $\varepsilon$은 "중심에서 이만큼 안에 맞혀라"는 요구입니다. 실함수의 사수는 $c$의 왼쪽과 오른쪽에서만 쏘지만, 복소함수의 사수는 $z_0$ 둘레의 원판 어디서든 쏩니다. 정의는 그 원판의 모든 점, 곧 모든 방향에서 다가오는 점을 함께 요구합니다. 그래서 극한이 있으면 직선 하나를 따라 다가가도 같은 값이 나오고((10)의 (i)), 두 직선에서 서로 다른 값이 나오면 극한이 없습니다((10)의 (ii)). 거꾸로 한 직선을 따라 값이 나왔다고 해서 극한이 있다고 할 수는 없습니다. 아래 반례에서 실수축을 따라가면 값이 $0$으로 일정하지만 극한은 없습니다.

$z_0$이 집적점이어야 하는 까닭은 유일성 (3)에 있습니다. 증명은 $z_0$에 가까운 $S$의 점 $z$를 하나 잡아 $L$과 $L'$이 모두 $f(z)$에 가깝다는 것으로 둘이 같음을 보이는데, 그런 $z$가 있다는 것이 집적점의 뜻입니다. 정의역의 점 $a$가 집적점이 아니면(고립점이면) 극한은 말하지 않고, 그런 점에서 함수는 늘 연속입니다((11)의 (ii)). 그래서 위상수학 입문의 연속은 "고립점이거나, 극한이 함숫값과 같다"는 말과 같습니다((11)의 (iii)).

실숫값 함수의 극한은 새로 정의하지 않고 $\iota$로 옮긴 복소함수의 극한으로 정했습니다. 실수의 절댓값과 복소수의 절댓값이 $\iota$로 맞기 때문에((4)의 (i)) 이것은 실수의 절댓값으로 쓴 ε–δ와 같고, 실수부나 절댓값처럼 값이 실수인 함수의 극한을 같은 기호로 다룰 수 있습니다.

## 성질의 증명

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]], "절댓값 (n)"은 [[absolute-value]], "복소수체 (n)"은 [[complex-field]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "거리 (n)"은 [[complex-plane-as-metric-space|복소평면의 거리]]의 번호이다. 거리 (3)에 의해 복소수 $a$와 실수 $r > 0$에 대하여 $z \in B(a, r)$인 것은 정확히 $|z - a| < r$일 때이다. 먼저 두 사실을 본다.

- (ㄱ) 양의 실수 $\varepsilon$에 대하여 순서 성질 (8)에 의해 $0 < \varepsilon / 2 < \varepsilon$이고, $\varepsilon / 2 + \varepsilon / 2 = \varepsilon$이다([[real-number-arithmetic]]의 (K1)–(K8)).
- (ㄴ) 양의 실수 $p$, $q$에 대하여 $\min\{p, q\}$는 절댓값 (10)에 의해 $p$이거나 $q$이므로 양수이고, $p$ 이하이며 $q$ 이하이다. 실수 $t$가 $t < \min\{p, q\}$이면 순서 성질 (1)의 (v)에 의해 $t < p$이고 $t < q$이다.
- (ㄷ) 복소수 $w$와 실수 $x$에 대하여 $w \ne 0$인 것은 정확히 $0 < |w|$일 때이다(복소 절댓값 (1)). $|\iota(x)| = |x|$이고(복소 절댓값 (5)), 복소수 $w$, $v$에 대하여 $|wv| = |w|\,|v|$이다(복소 절댓값 (3)).

**1의 증명.** (i) [[closure-in-a-metric-space|거리공간의 폐포·내부·경계·집적점]]의 (4)를 거리공간 $(\mathbb{C}, d)$에 쓰면, $a$가 $T$의 집적점인 것은 정확히 모든 실수 $r > 0$에 대하여 $(B(a, r) \cap T) - \{a\}$에 원소가 있을 때이고, 그 원소 $z$는 $z \in T$, $z \ne a$, $|z - a| < r$을 만족한다. 둘째 문장은 첫째 문장을 [[negation-of-quantified-statements]]의 1, 2로 부정한 것이다. "그런 $z$가 없다"는 것은 "$z \in T$이고 $|z - a| < r$이면 $z = a$"와 같다.

(ii) 실수 $\rho > 0$을 잡고 $s = \min\{r, \rho\}$로 둔다. (ㄴ)에 의해 $s$는 양수이고, 순서 성질 (8)에 의해 $0 < s / 2 < s$이다. $z = a + \iota(s / 2)$로 두면 (ㄷ)과 절댓값 (1)에 의해 $|z - a| = |\iota(s / 2)| = s / 2$이다. $s / 2 < s \le r$이므로 $z \in B(a, r) \subseteq T$이고, $s / 2 < s \le \rho$이므로 $|z - a| < \rho$이다. $s / 2 \ne 0$이므로 복소수체 (2)의 (i)에 의해 $\iota(s / 2) \ne 0$이고, 따라서 $z \ne a$이며 $z \in T - \{a\}$이다. $\rho$는 임의였으므로 (i)에 의해 $a$는 $T$의 집적점이고 $T - \{a\}$의 집적점이다. $U$가 열린집합이고 $a \in U$이면 [[open-set-in-metric-space]]의 정의에 의해 $B(a, r) \subseteq U$인 실수 $r > 0$이 있으므로 앞 문장을 쓴다.

(iii) $t \ne c$이면 $t - c \ne 0$이므로 복소수체 (2)의 (i)에 의해 $\iota(t - c) \ne 0$이다. (ㄷ)에 의해 $|\lambda(t) - a| = |\iota(t - c) u| = |t - c|\,|u|$이다. $t \ne c$이면 $|t - c|$와 $|u|$는 양수이므로([[absolute-value]]의 (2)와 (ㄷ)) [[real-order-axioms]]의 (W4)에 의해 곱이 양수이고, (ㄷ)에 의해 $\lambda(t) \ne a$이다. 마지막 문장을 보인다. 실수 $r > 0$을 잡는다. (ㄷ)에 의해 $|u| > 0$이므로 순서 성질 (6)의 (i)과 (W4)에 의해 $\rho = r |u|^{-1}$은 양수이다. $c$가 $J$의 집적점이므로 $t \in J$, $t \ne c$, $|t - c| < \rho$인 $t$가 있다. $z = \lambda(t)$로 두면 $z \in T$이고 $z \ne a$이며, 순서 성질 (4)의 (i)에 의해 $|z - a| = |t - c|\,|u| < \rho |u| = r$이다. (i)에 의해 $a$는 $T$의 집적점이다.

**2의 증명.** (i) 가정에 의해 $z \in S$, $z \ne z_0$, $|z - z_0| < \delta_1$이면 $P(z)$가 참인 양수 $\delta_1$과, 같은 꼴로 $Q(z)$에 대한 양수 $\delta_2$가 있다. $\delta_0 = \min\{\delta_1, \delta_2\}$로 두면 (ㄴ)에 의해 $\delta_0$은 양수이고, $z \in S$, $z \ne z_0$, $|z - z_0| < \delta_0$이면 $|z - z_0| < \delta_1$이고 $|z - z_0| < \delta_2$이므로 $P(z)$와 $Q(z)$가 모두 참이다.

(ii) $z \in S$, $z \ne z_0$, $|z - z_0| < \delta_0$이면 $P(z)$가 참인 양수 $\delta_0$이 있다. $E = \{z \in S : P(z)\}$로 두고 실수 $r > 0$을 잡는다. $r' = \min\{r, \delta_0\}$은 (ㄴ)에 의해 양수이므로, $z_0$이 $S$의 집적점이라는 것과 (1)의 (i)에 의해 $z \in S$, $z \ne z_0$, $|z - z_0| < r'$인 $z$가 있다. (ㄴ)에 의해 $|z - z_0| < \delta_0$이므로 $P(z)$가 참이어서 $z \in E$이고, $|z - z_0| < r$이다. (1)의 (i)에 의해 $z_0$은 $E$의 집적점이다. 둘째 문장은 이것을 $r = 1$로 쓴 것이다.

(iii) $\delta_0 = 1$로 두면 된다. 순서 성질 (5)의 (ii)에 의해 $1$은 양수이다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. (ㄱ)에 의해 $\varepsilon / 2$는 양수이므로, 정의에 의해 "$|f(z) - L| < \varepsilon / 2$"와 "$|f(z) - L'| < \varepsilon / 2$"는 각각 $z_0$ 가까이에서 성립한다. (2)의 (i), (ii)에 의해 두 부등식이 모두 성립하는 $z \in S$가 있다. 복소 절댓값 (2)에 의해 $|L - f(z)| = |f(z) - L|$이므로 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (5)에 의해
$$
\begin{aligned}
|L - L'| &\le |L - f(z)| + |f(z) - L'| \\
&< \varepsilon / 2 + \varepsilon / 2 = \varepsilon
\end{aligned}
$$
이다(순서 성질 (2)의 (iv)와 (ㄱ)). 따라서 모든 양의 실수 $\varepsilon$에서 $|L - L'| \le \varepsilon$이고, 순서 성질 (9)와 복소 절댓값 (1)의 $0 \le |L - L'|$에 의해 $|L - L'| = 0$이다. 복소 절댓값 (1)에 의해 $L - L' = 0$, 곧 $L = L'$이다.

기호 문단은 이 결과에 기댄다. 실숫값 함수의 극한의 문단은 아래 (4)의 (ii)에 기댄다.

**4의 증명.** (i) $z \in S$에서 복소수체 (2)의 (i)에 의해 $\iota(g(z)) - \iota(M) = \iota(g(z) - M)$이고, (ㄷ)에 의해 $|\iota(g(z)) - \iota(M)| = |g(z) - M|$이다. 따라서 "$\iota \circ g$가 $z_0$에서 $\iota(M)$으로 수렴한다"의 정의와 (i)의 조건은 모든 $\varepsilon$, $\delta$, $z$에서 같은 부등식을 요구한다.

(ii) 정의에 의해 $\iota \circ g$는 $z_0$에서 $\iota(M)$과 $\iota(M')$으로 수렴하므로 (3)에 의해 $\iota(M) = \iota(M')$이고, 복소수체 (2)에 의해 $\iota$는 단사이므로 $M = M'$이다.

**5의 증명.** 값이 $c$인 상수함수 $v$에 대하여, 양의 실수 $\varepsilon$에 $\delta = 1$을 대응시키면 모든 $z \in S$에서 $|v(z) - c| = |0| = 0 < \varepsilon$이다(복소 절댓값 (1)). $z$에서의 값이 $z$인 함수에 대해서는 $\delta = \varepsilon$으로 두면 $|z - z_0| < \varepsilon$인 $z$에서 그 값과 $z_0$의 차의 절댓값이 $|z - z_0| < \varepsilon$이다. 실숫값 상수함수 $k$에 대해서는 $\iota \circ k$가 값이 $\iota(k)$인 상수함수이므로 첫 문장과 정의를 쓴다.

**6의 증명.** (i) "$f(z) = h(z)$"가 $z_0$ 가까이에서 성립하게 하는 양수를 $\delta_0$이라 하자. $f$가 $L$로 수렴하면, 양의 실수 $\varepsilon$에 대하여 "$|f(z) - L| < \varepsilon$"이 $z_0$ 가까이에서 성립하므로 (2)의 (i)에 의해 "$f(z) = h(z)$이고 $|f(z) - L| < \varepsilon$"이 $z_0$ 가까이에서 성립하고, 그런 $z$에서 $|h(z) - L| = |f(z) - L| < \varepsilon$이다. 따라서 $h$도 $L$로 수렴한다. "$h(z) = f(z)$"도 같은 $\delta_0$으로 $z_0$ 가까이에서 성립하므로, 같은 논법을 $f$와 $h$를 바꾸어 쓰면 거꾸로도 성립한다. 둘째 문장은 (2)의 (iii)에 의해 첫째 문장의 경우이고, 셋째 문장은 $f$와 $z_0$에서의 값만 다른 함수가 둘째 문장의 가정을 만족한다는 것이다.

(ii) 실수 $r > 0$에 대하여 (1)의 (i)이 주는 $z$는 $z \in S$, $z \ne z_0$이므로 $z \in S - \{z_0\}$이고, (1)의 (i)에 의해 $z_0$은 $S - \{z_0\}$의 집적점이다. $f|_{S - \{z_0\}}$가 $L$로 수렴한다는 정의는 "$z \in S - \{z_0\}$이고 $z \ne z_0$이며 $|z - z_0| < \delta$인 모든 $z$에서 $|f|_{S - \{z_0\}}(z) - L| < \varepsilon$"을 쓴다. 복소수 $z$에 대하여 "$z \in S - \{z_0\}$이고 $z \ne z_0$"은 정확히 "$z \in S$이고 $z \ne z_0$"일 때 참이고, 그런 $z$에서 [[adding-or-removing-an-element|제한]]의 진술에 의해 $f|_{S - \{z_0\}}(z) = f(z)$이다. 따라서 두 정의의 조건은 같다.

**7의 증명.** (i) 양의 실수 $\varepsilon$에 대하여 $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$이면 $|f(z) - L| < \varepsilon$인 양수 $\delta$가 있다. $z \in A$, $z \ne z_0$, $|z - z_0| < \delta$이면 $A \subseteq S$이므로 $z \in S$이고, 제한의 진술에 의해 $|f|_A(z) - L| = |f(z) - L| < \varepsilon$이다.

(ii) "$z \in A$"는 $z_0$ 가까이에서 성립한다($\delta_0$으로). (2)의 (ii)에 의해 $z_0$은 $\{z \in S : z \in A\} = A$의 집적점이다. $f$가 $L$로 수렴하면 (i)에 의해 $f|_A$도 그렇다. 거꾸로 $f|_A$가 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여 $z \in A$, $z \ne z_0$, $|z - z_0| < \delta'$이면 $|f|_A(z) - L| < \varepsilon$인 양수 $\delta'$이 있다. $\delta = \min\{\delta', \delta_0\}$으로 두면 (ㄴ)에 의해 $\delta$는 양수이고, $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$이면 $|z - z_0| < \delta_0$이므로 $z \in A$이고, $|z - z_0| < \delta'$이므로 $|f(z) - L| = |f|_A(z) - L| < \varepsilon$이다.

(iii) $f$가 $z_0$에서 어떤 복소수 $L$로 수렴한다고 하자. (i)에 의해 $f|_A$와 $f|_B$는 $z_0$에서 $L$로 수렴하고, (3)을 $f|_A$와 $f|_B$에 쓰면 $L_1 = L$이고 $L_2 = L$이므로 $L_1 = L_2$이다. 이것은 가정에 어긋나므로 $f$는 $z_0$에서 수렴하지 않는다.

**8의 증명.** 복소수체 (1)에 의해 $\operatorname{Re}(f(z) - L) = \operatorname{Re} f(z) - \operatorname{Re} L$이고 $\operatorname{Im}(f(z) - L) = \operatorname{Im} f(z) - \operatorname{Im} L$이다. $f$가 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여 "$|f(z) - L| < \varepsilon$"이 $z_0$ 가까이에서 성립하고, 복소 절댓값 (6)에 의해 그런 $z$에서
$$
\begin{aligned}
|\operatorname{Re} f(z) - \operatorname{Re} L| &= |\operatorname{Re}(f(z) - L)| \\
&\le |f(z) - L| < \varepsilon
\end{aligned}
$$
이며 허수부도 같다(순서 성질 (1)의 (v)). (4)의 (i)에 의해 $\operatorname{Re} f$와 $\operatorname{Im} f$는 $\operatorname{Re} L$과 $\operatorname{Im} L$로 수렴한다. 거꾸로 두 실숫값 함수가 그렇게 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여 (ㄱ)과 (4)의 (i)에 의해 "$|\operatorname{Re} f(z) - \operatorname{Re} L| < \varepsilon / 2$"와 "$|\operatorname{Im} f(z) - \operatorname{Im} L| < \varepsilon / 2$"가 각각 $z_0$ 가까이에서 성립하고, (2)의 (i)에 의해 함께 성립한다. 그런 $z$에서 복소 절댓값 (6)과 순서 성질 (2)의 (iv), (1)의 (v)에 의해
$$
\begin{aligned}
|f(z) - L| &\le |\operatorname{Re}(f(z) - L)| \\
&\quad + |\operatorname{Im}(f(z) - L)| \\
&< \varepsilon / 2 + \varepsilon / 2 = \varepsilon
\end{aligned}
$$
이다.

**9의 증명.** 복소 절댓값 (1)에 의해 $0 \le |f(z) - L|$이므로 절댓값 (1)에 의해 실수 $\bigl|\,|f(z) - L| - 0\,\bigr|$은 $|f(z) - L|$이다. 따라서 (4)의 (i)에 의해 "$z$에서의 값이 $|f(z) - L|$인 함수가 $0$으로 수렴한다"의 조건과 "$f$가 $L$로 수렴한다"의 정의는 모든 $\varepsilon$, $\delta$, $z$에서 같은 부등식을 요구한다. 둘째 문장은 $L = 0$인 경우이다.

**10의 증명.** (i) 양의 실수 $\varepsilon$에 대하여 $z \in S$, $z \ne z_0$, $|z - z_0| < \delta$이면 $|f(z) - L| < \varepsilon$인 양수 $\delta$가 있다. (ㄷ)에 의해 $|u| > 0$이므로 $\rho = \delta |u|^{-1}$은 양수이다(순서 성질 (6)의 (i)과 (W4)). $t \in J$, $t \ne c$, $|t - c| < \rho$라 하자. 가정에 의해 $\lambda(t) \in S$이고, (1)의 (iii)에 의해 $\lambda(t) \ne z_0$이며 $|\lambda(t) - z_0| = |t - c|\,|u| < \rho |u| = \delta$이다(순서 성질 (4)의 (i)). 따라서 $|f(\lambda(t)) - L| < \varepsilon$이고, 8의 증명에서와 같이 복소 절댓값 (6)에 의해 $|F_1(t) - \operatorname{Re} L| \le |f(\lambda(t)) - L| < \varepsilon$, $|F_2(t) - \operatorname{Im} L| < \varepsilon$이다. $c$는 $J$의 집적점이므로 [[limit-of-a-function]]의 정의에 의해 $F_1$, $F_2$는 $c$에서 각각 $\operatorname{Re} L$, $\operatorname{Im} L$로 수렴한다.

(ii) $f$가 $z_0$에서 어떤 복소수 $L$로 수렴한다면, (i)에 의해 두 함수 $F_1$은 각각 $c_1$, $c_2$에서 $\operatorname{Re} L$로 수렴하고, [[limit-of-a-function]]의 (3)에 의해 두 극한은 모두 $\operatorname{Re} L$이어서 같다. 이것은 가정에 어긋난다. $F_2$도 같다.

**11의 증명.** [[complex-plane-as-metric-space|복소평면의 거리]]의 약속대로 $S$에는 부분공간 거리 $d_S$와 그 거리위상을 주고, $d_S(a, z) = |z - a|$이다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)을 거리공간 $X = S$에 쓰면, $h$가 $a$에서 연속인 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어 $z \in S$, $|z - a| < \delta$인 모든 $z$에서 $|h(z) - h(a)| < \varepsilon$일 때이다. 이것을 (가)라 한다.

(i) (가)가 성립하면, 같은 $\delta$로 $z \in S$, $z \ne a$, $|z - a| < \delta$인 $z$에서도 $|h(z) - h(a)| < \varepsilon$이므로 $h$는 $a$에서 $h(a)$로 수렴한다. 거꾸로 $h$가 $h(a)$로 수렴하면, $\varepsilon$에 대해 수렴의 정의가 주는 $\delta$를 잡는다. $z \in S$, $|z - a| < \delta$일 때 $z \ne a$이면 정의에 의해 $|h(z) - h(a)| < \varepsilon$이고, $z = a$이면 $|h(a) - h(a)| = 0 < \varepsilon$이다. 따라서 (가)가 성립한다.

(ii) $a$는 $S$의 집적점이 아니므로 (1)의 (i)에 의해 $z \in S$, $|z - a| < r$이면 $z = a$인 실수 $r > 0$이 있다. 양의 실수 $\varepsilon$에 $\delta = r$을 대응시키면 $z \in S$, $|z - a| < r$인 $z$는 $a$이고 $|h(a) - h(a)| = 0 < \varepsilon$이므로 (가)가 성립한다.

(iii) [[cluster-point-in-a-space|위상공간의 집적점]]의 정의에 의해 $a \in S$는 $S$의 집적점이거나 고립점이다. 집적점이면 (i), 고립점이면 (ii)를 쓴다. 고립점이면서 집적점일 수는 없으므로 첫 문장의 "고립점이거나 극한이 $h(a)$"는 두 경우를 정확히 나눈다. 둘째 문장은 [[continuity-in-metric-spaces|거리공간 사이의 연속]]의 (1)의 (a)와 (c)가 같다는 것과 그 (2)에 의해, $h$가 연속인 것은 정확히 모든 점에서 (가)가 성립할 때이기 때문이다.

(iv) 거리공간 사이의 연속의 (1)의 (a)와 (c)가 같다는 것을 $X = S$, $Y = \mathbb{R}$(보통 거리, [[metric-space-examples]]의 $|x - y|$)에 쓰면, $g$가 $a$에서 연속인 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어 $z \in S$, $|z - a| < \delta$인 모든 $z$에서 $|g(z) - g(a)| < \varepsilon$일 때이다. (4)의 (i)을 쓰고 (i)과 같이 $z = a$인 경우를 따로 보면 된다. $\blacksquare$
:::

## 예시와 반례

:::example[$(z^2 + 4)/(z - 2i)$ 의 $2i$ 에서의 극한]
$S = \mathbb{C} - \{2i\}$ 위에서 $f(z) = (z^2 + 4)/(z - 2i)$로 정한 복소함수 $f$를 생각합니다. $2i \notin S$이지만 $2i$는 $S$의 집적점입니다. 실수 $r > 0$에 대하여 $z = 2i + \iota(r / 2)$는 $z \ne 2i$이므로 $z \in S$이고, $|z - 2i| = r / 2 < r$이기 때문입니다((1)의 (i), [[order-properties-of-reals]]의 (8)).

$z \in S$이면 $(z + 2i)(z - 2i) = z^2 - (2i)^2 = z^2 - 4i^2 = z^2 + 4$이고([[complex-field|복소수체]]의 (1)의 체의 계산과 (5)의 $ii = -1$), $z - 2i \ne 0$이므로 $f(z) = z + 2i$입니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon$으로 두면, $z \in S$, $|z - 2i| < \delta$인 $z$에서
$$
\begin{aligned}
|f(z) - 4i| &= |z + 2i - 4i| \\
&= |z - 2i| < \varepsilon
\end{aligned}
$$
입니다. 따라서 $\lim_{z \to 2i} f(z) = 4i$입니다. $f$는 $2i$에서 정의되지 않았지만 극한은 있습니다.
:::

:::counterexample[두 직선을 따라 극한이 다른 함수]
$S = \mathbb{C} - \{0\}$ 위에서
$$
f(z) = \iota\Bigl(\frac{(\operatorname{Re} z)(\operatorname{Im} z)}{|z|^2}\Bigr)
$$
로 정한 복소함수 $f$를 생각합니다. $z \ne 0$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 $|z|^2 \ne 0$이므로 $f$는 $S$ 위에서 정해집니다. $f$가 $0$에서 발산함을 (10)의 (ii)로 보입니다.

$J = (0, 1)$, $c = 0$으로 둡니다. [[cluster-point]]의 (5)에 의해 $0$은 $(0, 1)$의 집적점입니다. 첫째 쌍은 $u_1 = 1$입니다. $t \in J$이면 $\lambda_1(t) = \iota(t)$는 (1)의 (iii)에 의해 $0$이 아니므로 $S$에 속하고, $\operatorname{Re} \iota(t) = t$, $\operatorname{Im} \iota(t) = 0$이므로([[complex-field|복소수체]]의 (2)의 (ii)) $F_1(t) = \operatorname{Re} f(\iota(t)) = 0$입니다. 둘째 쌍은 $u_2 = 1 + i$입니다. $\lambda_2(t) = \iota(t)(1 + i) = (t, t)$는 $0$이 아니므로 $S$에 속하고, $|\lambda_2(t)|^2 = t^2 + t^2 = 2t^2$이므로 $F_1(t) = t \cdot t / (2t^2) = 1/2$입니다. 두 $F_1$은 $J$ 위의 상수함수이므로 [[limit-of-a-function]]의 (4)에 의해 각각 $0$과 $1/2$로 수렴하고, $0 \ne 1/2$이므로 (10)의 (ii)에 의해 $f$는 $0$에서 발산합니다.

실수축을 따라가면 값이 늘 $0$이지만, 그것만으로는 극한이 $0$이라고 할 수 없습니다. 극한은 원판의 모든 점을 함께 요구하기 때문입니다.
:::

## 확인 질문

:::check[$S = \{z \in \mathbb{C} : |z| > 1\}$일 때 $1$은 $S$의 집적점인가?]
그렇습니다. $1 \notin S$이지만 (1)의 (i)로 보입니다. 실수 $r > 0$에 대하여 $z = 1 + \iota(r / 2)$로 두면 $z = \iota(1 + r / 2)$이고([[complex-field|복소수체]]의 (2)), [[modulus-of-complex-number|복소수의 절댓값]]의 (5)와 [[absolute-value]]의 (1)에 의해 $|z| = 1 + r / 2 > 1$이므로 $z \in S$입니다. 또 $|z - 1| = r / 2 < r$이고 $z \ne 1$입니다([[order-properties-of-reals]]의 (8)).
:::

:::check[$z$에서의 값이 $|z|$인 실숫값 함수 $g : \mathbb{C} \to \mathbb{R}$는 복소수 $z_0$에서 어떤 수로 수렴하는가?]
$|z_0|$로 수렴합니다. $\mathbb{C}$는 열린집합이므로([[open-set-in-metric-space]]의 (1)) (1)의 (ii)에 의해 $z_0$은 $\mathbb{C}$의 집적점입니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon$으로 두면, $|z - z_0| < \delta$인 $z$에서 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (4)에 의해 $\bigl|\,|z| - |z_0|\,\bigr| \le |z - z_0| < \varepsilon$이고, (4)의 (i)에 의해 $\lim_{z \to z_0} |z| = |z_0|$입니다.
:::
