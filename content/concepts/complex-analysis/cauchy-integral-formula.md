---
title: 코시 적분 공식
title_en: Cauchy Integral Formula
aliases: [코시의 적분 공식, 원 위의 코시 적분 공식, 정칙함수의 평균값 성질, 평균값 성질, Cauchy's integral formula, mean value property]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: "열린집합 G 가 닫힌 원판 C(a, r) 를 포함하고 f 가 G 위의 정칙함수이면, 원판의 안쪽의 모든 점 w 에서 f(w) 는 원 경로를 따른 f(z)/(z − w) 의 적분을 2πi 로 나눈 것이다. 증명은 w 에서만 정칙이 아닐 수 있는 연속함수 (f(z) − f(w))/(z − w) 에 별 모양 집합의 코시 정리를 쓰고 원 위의 1/(z − w) 의 적분을 쓴다. 중심에서의 값은 원 위의 값의 평균이라는 평균값 성질도 진술한다."
requires: [real-number-arithmetic, order-properties-of-reals, complex-number, complex-field, modulus-of-complex-number, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, subspace-and-continuity, distance-to-a-set, complex-plane-as-metric-space, compact-subsets-of-complex-plane, continuity-of-complex-operations, limit-of-complex-function, complex-derivative, complex-derivative-rules, addition-law-of-complex-exponential, definition-of-pi, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, path-in-the-complex-plane, path-integral, integrals-over-circles, star-shaped-open-set, cauchy-theorem-for-star-shaped-sets]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Cauchy's Integral Formula 절의 Theorem cauchyformulacircle, Corollary meanvalue 와 그 증명, Example exam_cif, Theorem cauchyformula 와 그 앞뒤 문단, 원판 위의 계산 예, source/sec_CIF.ptx:20–166, 200–272, 344–370; Cauchy's Theorem 절의 Example exam_partialfr, source/sec_cauchythm.ptx:345–374; 4장 연습문제 가운데 경로 위에서 같은 두 정칙함수를 묻는 것과 볼록 영역에서 코시 적분 공식을 보이는 것, source/exercises-chap4.ptx:741–751, 876–925"
    checked: original
    note: "출처 Theorem cauchyformulacircle(sec_CIF.ptx:20–32)은 f 가 닫힌 원판 D̄[w, R] 를 포함하는 열린집합에서 정칙일 때 원판의 중심 w 에서만 f(w) = (1/2πi)∫_{C[w,R]} f(z)/(z − w) dz 를 진술한다. 증명(71–141)은 C[w, r] 과 C[w, R] 이 G − {w} 에서 호모토피라는 것과 코시 정리로 반지름을 줄인 뒤, ML 부등식과 r = δ/2 로 차를 누른다. 원판의 다른 점에 대한 공식은 Theorem cauchyformula(257–272)로 진술하고, 그 증명은 조르당 곡선 정리와 '안쪽'의 개념을 받아들여(200–255) 호모토피로 한다. 이 항목의 (2)는 원판 안의 모든 w 에서 공식을 진술하고, 호모토피와 조르당 곡선 정리를 쓰지 않는다. 대신 w 에서만 정칙이 아닐 수 있는 연속함수 g(z) = (f(z) − f(w))/(z − w), g(w) = f′(w) 에 예외점이 있는 구르사 정리와 별 모양 집합의 코시 정리를 쓰고, 원 위의 1/(z − w) 의 적분 2πi 를 쓴다. (1)의 '조금 더 큰 원판'은 출처가 '닫힌 원판을 포함하는 열린집합'으로만 가정하는 것을 반지름의 식으로 바꾼 것이고, 점과 집합 사이의 거리의 최솟값으로 정한다. 출처 Corollary meanvalue(48–70)는 이 항목의 (3)의 공식과 실수부·허수부의 꼴 (i)과 같은 진술이고, 출처는 그것을 공식에 매개화를 넣어 얻는다(125–139). 이 항목의 증명도 같다. 예시 '원의 중심이 아닌 점 $1 + i$'는 출처의 예(sec_CIF.ptx:344–370, C[0, 3] 위의 exp(z)/(z² − 2z) 를 부분분수로 나눠 각 항에 공식을 쓰는 것)와 같은 쓰임이다. 반례 '원판 안에 정칙이 아닌 점이 있는 $1/z$'의 부분분수 계산은 출처 Example exam_partialfr(sec_cauchythm.ptx:345–374, 단위원 위의 1/(z² − 2z))와 같은 발상이다. 출처의 4장 연습문제(exercises-chap4.ptx:876–925)는 볼록 영역에서 매개변수에 대한 미분으로 코시 적분 공식을 다르게 증명하게 한다. 확인 질문 '정함수 $f$가 원 $|z - a| = r$ 위에서 모두 $0$이면 원판 안에서는 어떤가?'는 출처 4장 연습문제(exercises-chap4.ptx:741–751: 경로 위에서 같은 두 정칙함수는 그 안쪽에서 같다)를 g = 0 과 원에 쓴 것과 같은 물음이다."
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.4 (p.6), Proposition 2.5 와 그 증명 (p.6–7), 2.1절 Comments (p.8)"
    checked: original
    note: "출처 Proposition 2.5(k.txt 317–323줄, p.6)는 정함수 f 와 직사각형 R 의 안쪽의 점 a 에서 f(a) = (1/ρ)∫_R f(z)/(z − a) 를 진술하고(ρ 는 ∫_R 1/(z − a)), 증명(328–332줄, p.6)은 f(z)/(z − a) 를 f(a)/(z − a) 와 (f(z) − f(a))/(z − a) 로 나누고 뒤의 적분이 Proposition 2.4 의 2(한 점 근처에서 유계인 함수)에 의해 0 이라는 것을 쓴다. 이 항목의 (2)의 증명은 같은 길을 직사각형 대신 원 경로와 별 모양 열린집합 B(a, R) 에서 간다. 출처는 2.1절 Comments(k.txt 413–415줄, p.8)에서 ρ = 2πi 는 잘 알려진 값이지만 정리 1.1 의 증명에는 필요하지 않다고 적는다. 이 항목은 그 값을 integrals-over-circles 의 (3)으로 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시 정리·CIF 의 증명 경로, 예의 값, 반지름의 식). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, R)$와 닫힌 공 $C(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 정칙함수, 정함수, 미분계수 $f'(w)$는 [[complex-derivative|복소 미분]]의 것이다. 원 경로 $\gamma_{a,r}(t) = a + r\exp(it)$($0 \le t \le 2\pi$)와 그 상은 [[path-in-the-complex-plane|경로]]의 (3)의 것이고, "상 위에서 연속"과 경로 적분은 [[path-integral|경로 적분]]의 것이며, 복소수값 함수의 적분은 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 것이다. 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다.

아래에서 $a$는 복소수, $r$은 양의 실수, $G$는 $C(a, r) \subseteq G$인 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$는 정칙함수이고, $K = \{z \in \mathbb{C} : |z - a| = r\}$는 $\gamma_{a,r}$의 상이다.

1. (조금 더 큰 원판) $r < R$이고 $B(a, R) \subseteq G$인 실수 $R$이 있다.
2. (**코시 적분 공식**) $|w - a| < r$인 모든 복소수 $w$에서, $w \notin K$이고 $z$에서의 값이 $f(z)/(z - w)$인 함수 $G - \{w\} \to \mathbb{C}$는 $K$ 위에서 연속이며
   $$
   f(w) = \frac{1}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{z - w}\,dz
   $$
   이다.
3. (**평균값 성질**) $t$에서의 값이 $h(t) = f(a + r\exp(it))$인 함수 $h : [0, 2\pi] \to \mathbb{C}$는 적분가능하고
   $$
   f(a) = \frac{1}{2\pi} \int_0^{2\pi} h(t)\,dt
   $$
   이다. 또 다음이 성립한다.
   - (i) $\operatorname{Re} f(a)$는 $t$에서의 값이 $\operatorname{Re} h(t)$인 실함수의 $[0, 2\pi]$ 위의 적분을 $2\pi$로 나눈 것이고, $\operatorname{Im} f(a)$도 허수부로 같다.
   - (ii) $|f(a)|$는 $t$에서의 값이 $|h(t)|$인 실함수의 $[0, 2\pi]$ 위의 적분을 $2\pi$로 나눈 것 이하이다. 특히 실수 $M$이 $K$의 모든 $z$에서 $|f(z)| \le M$을 만족하면 $|f(a)| \le M$이다.
4. (원판과 정함수) $R$이 $r < R$인 실수이고 $f : B(a, R) \to \mathbb{C}$가 정칙함수이면 $C(a, r) \subseteq B(a, R)$이므로 $G = B(a, R)$로 (2)와 (3)이 성립한다. $f$가 정함수이면 모든 양의 실수 $r$에서 $G = \mathbb{C}$로 (2)와 (3)이 성립한다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$, open balls $B(a, R)$ and closed balls $C(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Holomorphic functions, entire functions, and derivatives $f'(w)$ are those of the entry on the complex derivative. The circle path $\gamma_{a,r}(t) = a + r\exp(it)$ ($0 \le t \le 2\pi$) and its image are those of (3) of the entry on paths, "continuous on the image" and path integrals are those of the entry on path integrals, and integrals of complex-valued functions are those of the entry on integrals of complex-valued functions. The number $\pi$ is that of the entry on pi.

Below, $a$ is a complex number, $r$ a positive real number, $G$ an open set of $(\mathbb{C}, d)$ with $C(a, r) \subseteq G$, $f : G \to \mathbb{C}$ a holomorphic function, and $K = \{z \in \mathbb{C} : |z - a| = r\}$ the image of $\gamma_{a,r}$.

1. (A slightly larger disk) There is a real number $R$ with $r < R$ and $B(a, R) \subseteq G$.
2. (**Cauchy integral formula**) For every complex number $w$ with $|w - a| < r$, $w \notin K$, the function $G - \{w\} \to \mathbb{C}$ whose value at $z$ is $f(z)/(z - w)$ is continuous on $K$, and
   $$
   f(w) = \frac{1}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{z - w}\,dz.
   $$
3. (**Mean value property**) The function $h : [0, 2\pi] \to \mathbb{C}$ whose value at $t$ is $h(t) = f(a + r\exp(it))$ is integrable, and
   $$
   f(a) = \frac{1}{2\pi} \int_0^{2\pi} h(t)\,dt.
   $$
   Moreover, the following hold.
   - (i) $\operatorname{Re} f(a)$ is the integral over $[0, 2\pi]$ of the real function whose value at $t$ is $\operatorname{Re} h(t)$, divided by $2\pi$, and likewise for $\operatorname{Im} f(a)$ with imaginary parts.
   - (ii) $|f(a)|$ is at most the integral over $[0, 2\pi]$ of the real function whose value at $t$ is $|h(t)|$, divided by $2\pi$. In particular, if a real number $M$ satisfies $|f(z)| \le M$ for all $z$ in $K$, then $|f(a)| \le M$.
4. (Disks and entire functions) If $R$ is a real number with $r < R$ and $f : B(a, R) \to \mathbb{C}$ is a holomorphic function, then $C(a, r) \subseteq B(a, R)$, so (2) and (3) hold with $G = B(a, R)$. If $f$ is an entire function, then (2) and (3) hold with $G = \mathbb{C}$ for every positive real $r$.
:::

## 직관

코시 적분 공식은 원 위의 값만으로 원 안쪽의 모든 값이 정해진다는 것입니다. 실함수에서는 구간의 두 끝값을 알아도 안쪽의 값은 마음대로일 수 있으므로, 정칙이라는 조건이 그만큼 강하다는 것을 보여 줍니다.

증명의 생각은 이렇습니다. $f(z)/(z - w)$를 $f(w)/(z - w)$와 $(f(z) - f(w))/(z - w)$로 나눕니다. 앞의 것은 원 위에서 적분하면 $f(w) \cdot 2\pi i$입니다. 뒤의 것은 $z = w$에서 $f'(w)$로 채우면 연속이고 $w$ 밖에서는 정칙이므로, 원판 위에서 한 점 예외의 코시 정리에 의해 원 위의 적분이 $0$입니다. 원판 $B(a, R)$를 쓰는 까닭은 원 경로의 상이 정칙인 곳 안에 들고 그 집합이 별 모양이어야 하기 때문이고, (1)이 그런 원판을 줍니다.

중심 $w = a$에서는 $dz = i r\exp(it)\,dt$와 $z - a = r\exp(it)$가 약분되어, 중심의 값이 원 위의 값의 평균이 됩니다((3)). 비유하면 원 둘레에 고르게 앉은 사람들의 키의 평균이 가운데 사람의 키라는 것과 같은 모양입니다. 비유가 맞는 곳은 "고르게"가 $t$에 대한 적분을 $2\pi$로 나누는 것이라는 점이고, 맞지 않는 곳은 값이 복소수라는 점입니다.

## 증명

:::idea
(1)은 $\mathbb{C} - G$까지의 거리의 최솟값만큼 반지름을 늘린다. (2)는 $g(z) = (f(z) - f(w))/(z - w)$, $g(w) = f'(w)$가 $B(a, R)$에서 연속이고 $w$ 밖에서 정칙이므로 원 위의 적분이 $0$이라는 것과 $\int_{\gamma_{a,r}} \frac{dz}{z - w} = 2\pi i$를 쓴다. (3)은 (2)에 $w = a$를 넣고 원 경로의 매개화를 쓴다.
:::

:::hint
$g$가 $w$에서 연속이라는 것은 [[complex-derivative|복소 미분]]의 (2)의 (ii), 곧 카라테오도리 꼴의 $\varphi$입니다.
:::

:::hint
(1)에서 $z \notin G$이고 $|z - a| > r$이면 $c = a + r(z - a)/|z - a|$는 $C(a, r)$의 점이고 $|z - c| = |z - a| - r$입니다.
:::

:::proof
"미분 (n)"은 [[complex-derivative|복소 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "적분 (n)"은 [[path-integral|경로 적분]], "코시 (n)"은 [[cauchy-theorem-for-star-shaped-sets|별 모양 집합의 원시함수와 코시 정리]], "거리 (n)"은 [[complex-plane-as-metric-space|복소평면의 거리]]의 번호이다. 거리 (3)에 의해 $z \in B(a, R)$인 것은 정확히 $|z - a| < R$일 때이고 $z \in C(a, r)$인 것은 정확히 $|z - a| \le r$일 때이다. 미분 (3)에 의해 $f$는 연속이다.

**1의 증명.** $G = \mathbb{C}$이면 $R = r + 1$로 둔다. $G \ne \mathbb{C}$라 하고 $F = \mathbb{C} - G$로 두자. $F$는 공집합이 아니고, $\mathbb{C} - F = G$가 열린집합이므로 [[open-set-in-metric-space]]의 정의에 의해 닫힌집합이다. [[distance-to-a-set|점과 집합 사이의 거리]]의 (3)에 의해 $z$를 $\operatorname{dist}(z, F)$로 보내는 함수 $\mathbb{C} \to \mathbb{R}$는 연속이고, [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 $C(a, r)$로의 제한도 연속이다. [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (2)에 의해 $C(a, r)$는 콤팩트이고 $a$를 원소로 가지므로 공집합이 아니며, 그 (4)의 (i)에 의해 모든 $c \in C(a, r)$에서 $\operatorname{dist}(c', F) \le \operatorname{dist}(c, F)$인 $c' \in C(a, r)$가 있다. $m = \operatorname{dist}(c', F)$로 두면, $c' \in G$이라 $c' \notin F$이므로 [[distance-to-a-set|점과 집합 사이의 거리]]의 (5)에 의해 $0 < m$이다. $R = r + m$으로 둔다. 어느 경우든 $r < R$이다.

$G \ne \mathbb{C}$일 때 $B(a, R) \subseteq G$를 보인다. $|z - a| < R$이고 $z \notin G$, 곧 $z \in F$라 하자. $|z - a| \le r$이면 $z \in C(a, r) \subseteq G$이어서 어긋난다. $|z - a| > r$이면 $\rho = |z - a|$는 양수이고 $c = a + r\rho^{-1}(z - a)$로 두면 [[modulus-of-complex-number]]의 (3), (5)에 의해 $|c - a| = r$이므로 $c \in C(a, r)$이다. 또 $z - c = (1 - r\rho^{-1})(z - a)$이고 $0 < 1 - r\rho^{-1}$이므로 $|z - c| = (1 - r\rho^{-1})\rho = \rho - r < R - r = m$이다. 그런데 $z \in F$이므로 [[distance-to-a-set|점과 집합 사이의 거리]]의 (1)에 의해 $\operatorname{dist}(c, F) \le |c - z| < m \le \operatorname{dist}(c, F)$가 되어 어긋난다. 따라서 $B(a, R) \subseteq G$이다. $G = \mathbb{C}$이면 이것은 바로 성립한다.

**2의 증명.** (1)의 $R$을 잡고 $B = B(a, R)$로 둔다. $|w - a| < r < R$이므로 $w \in B$이고, $|w - a| \ne r$이므로 $w \notin K$이다. $K$의 점 $z$는 $|z - a| = r < R$이므로 $K \subseteq B$이다.

함수 $g : B \to \mathbb{C}$를 $z \ne w$이면 $g(z) = (f(z) - f(w))/(z - w)$, $g(w) = f'(w)$로 정한다. 미분 (4)의 (i)에 의해 $f|_B$는 정칙함수이고 $(f|_B)'(w) = f'(w)$이므로, 미분 (2)의 (ii)에 의해 $g$는 $w$에서 연속이다. $B - \{w\}$는 [[open-ball-is-open|열린 공은 열린집합]]의 (1), [[open-set-in-metric-space]]의 (5)와 [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (3)에 의해 열린집합이다. $B - \{w\}$ 위에서 $z - w$의 함수는 미분 (5)에 의해 정칙이고 값이 $0$이 아니므로 법칙 (3)의 (iii)에 의해 그 역수도 정칙이며, $f(z) - f(w)$의 함수는 미분 (4)의 (i), (5)와 법칙 (1)에 의해 정칙이다. 법칙 (2)에 의해 그 곱인 $g|_{B - \{w\}}$는 정칙함수이므로, 미분 (4)의 (i)에 의해 $g$는 $B - \{w\}$에서 정칙이고 미분 (3)에 의해 그 점들에서 연속이다. [[limit-of-complex-function|복소함수의 극한]]의 (11)의 (iii)에 의해 $g$는 연속이다.

[[star-shaped-open-set|별 모양 열린집합]]의 (1)에 의해 $B$는 $a$에 대해 별 모양이고, $g$는 코시 (2)의 (나)를 예외점 $w$로 만족한다. $\gamma_{a,r}$는 [[path-in-the-complex-plane|경로]]의 (3)에 의해 닫힌 C¹ 경로이고 상 $K$가 $B$의 부분집합이므로, 코시 (3)에 의해 $\int_{\gamma_{a,r}} g = 0$이다.

$z$에서의 값이 $f(z)/(z - w)$인 함수 $k_1$과 $1/(z - w)$인 함수 $k_2 : G - \{w\} \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3), (4)의 (i)에 의해 연속이므로 $K$ 위에서 연속이다. $K$의 점 $z$에서는 $z \ne w$이므로 $g(z) = k_1(z) - f(w) k_2(z)$이고, 적분 (1)에 의해
$$
\begin{aligned}
0 &= \int_{\gamma_{a,r}} g \\
&= \int_{\gamma_{a,r}} k_1 - f(w) \int_{\gamma_{a,r}} k_2
\end{aligned}
$$
이다. [[integrals-over-circles|원 경로 위의 적분]]의 (3)에 의해 $\int_{\gamma_{a,r}} k_2 = 2\pi i$이므로 $\int_{\gamma_{a,r}} k_1 = 2\pi i\, f(w)$이다. [[definition-of-pi|원주율]]의 (1)에 의해 $0 < \pi$이므로 $2\pi i \ne 0$이고, 양변에 $(2\pi i)^{-1}$을 곱하면 공식을 얻는다.

**3의 증명.** (2)를 $w = a$로 쓴다. 적분 (8)에 의해
$$
\begin{aligned}
&\int_{\gamma_{a,r}} \frac{f(z)}{z - a}\,dz \\
&\quad = \int_0^{2\pi} \frac{f(a + r\exp(it))}{r\exp(it)} \\
&\qquad\qquad \cdot i r\exp(it)\,dt
\end{aligned}
$$
이고, 오른쪽의 피적분함수는 [[path-integral|경로 적분]]의 정의 문단에 의해 적분가능하다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp(it) \ne 0$이므로 그 피적분함수의 $t$에서의 값은 $i\, f(a + r\exp(it))$이다. (3)의 $h$는 $-i$와 그 함수의 곱이므로 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)에 의해 적분가능하고, 같은 (1)에 의해 오른쪽은 $i \int_0^{2\pi} h$이다. (2)에 의해 $2\pi i\, f(a) = i\int_0^{2\pi} h$이므로 $f(a) = (2\pi)^{-1} \int_0^{2\pi} h$이다.

(i) [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (1)에 의해 $\operatorname{Re}\int_0^{2\pi} h = \int_0^{2\pi} \operatorname{Re} h$이고, [[complex-field]]의 (2)의 (ii)에 의해 $\operatorname{Re} f(a) = (2\pi)^{-1}\operatorname{Re}\int_0^{2\pi} h$이다. 허수부도 같다.

(ii) [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (3)과 [[modulus-of-complex-number]]의 (3), (5)에 의해 $|f(a)| = (2\pi)^{-1}\bigl|\int_0^{2\pi} h\bigr| \le (2\pi)^{-1}\int_0^{2\pi} |h|$이다. $K$의 모든 $z$에서 $|f(z)| \le M$이면 [[path-in-the-complex-plane|경로]]의 (3)에 의해 $a + r\exp(it) \in K$이므로 모든 $t$에서 $|h(t)| \le M$이고, [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (4)에 의해 $\bigl|\int_0^{2\pi} h\bigr| \le 2\pi M$이므로 $|f(a)| \le M$이다.

**4의 증명.** [[open-ball]]의 (2)에 의해 $0 < r < R$이면 $C(a, r) \subseteq B(a, R)$이고, [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B(a, R)$는 열린집합이다. $\mathbb{C}$는 [[open-set-in-metric-space]]의 (1)에 의해 열린집합이고 $C(a, r) \subseteq \mathbb{C}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[원의 중심이 아닌 점 $1 + i$]
$f(z) = z^2$는 정함수이고 $|1 + i| = \sqrt{2} < 3$이므로 (4)와 (2)에 의해
$$
\begin{aligned}
\int_{\gamma_{0,3}} \frac{z^2}{z - (1 + i)}\,dz &= 2\pi i\,(1 + i)^2 \\
&= 2\pi i \cdot 2i = -4\pi
\end{aligned}
$$
입니다. 원의 중심이 아닌 점에서 공식을 쓴 예입니다.
:::

:::example[중심에서의 평균]
$f(z) = z^2 + z$는 정함수이므로 (3)을 $a = 1$, $r = 1$로 쓰면 $\frac{1}{2\pi}\int_0^{2\pi} f(1 + \exp(it))\,dt = f(1) = 2$입니다. (3)의 (i)에 의해 실수부 $\operatorname{Re} f(1 + \exp(it))$의 평균도 $\operatorname{Re} 2 = 2$이고, 허수부의 평균은 $0$입니다.
:::

:::counterexample[원판 안에 정칙이 아닌 점이 있는 $1/z$]
$G = \mathbb{C} - \{0\}$ 위의 정칙함수 $f(z) = 1/z$와 $a = 0$, $r = 1$, $w = 1/2$를 봅시다. $C(0, 1) \not\subseteq G$이므로 (2)의 가정이 깨집니다. 실제로 단위원 위에서
$$
\frac{f(z)}{z - \frac12} = \frac{1}{z(z - \frac12)} = \frac{2}{z - \frac12} - \frac{2}{z}
$$
이고, [[path-integral|경로 적분]]의 (1)과 [[integrals-over-circles|원 경로 위의 적분]]의 (1), (3)에 의해 오른쪽의 적분은 $2 \cdot 2\pi i - 2 \cdot 2\pi i = 0$입니다. 공식의 오른쪽은 $0$이지만 $f(1/2) = 2$입니다. 곧 원판 안에 정칙이 아닌 점이 있으면 공식이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\int_{\gamma_{0,1}} \frac{z^2}{z - i}\,dz$를 (2)로 계산할 수 있는가?]
없습니다. $|i - 0| = 1 = r$이므로 $w = i$는 원 경로의 상 위에 있고, (2)는 $|w - a| < r$인 $w$만 다룹니다. $\gamma_{0,1}(\pi/2) = \exp(i\pi/2) = i$([[definition-of-pi|원주율]]의 (3)의 (ii))에서 피적분함수가 정해지지 않으므로 이 경로 적분 자체가 정해지지 않습니다.
:::

:::check[정함수 $f$가 원 $|z - a| = r$ 위에서 모두 $0$이면 원판 안에서는 어떤가?]
원판 안에서도 모두 $0$입니다. $|w - a| < r$이면 (2)의 피적분함수가 원 경로의 상 위에서 $0$이므로 [[path-integral|경로 적분]]의 (1)에 의해 적분이 $0$이고, $f(w) = 0$입니다. 중심에서는 (3)의 (ii)를 $M = 0$으로 써도 됩니다.
:::
