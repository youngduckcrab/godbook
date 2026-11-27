---
title: 최대 절댓값 원리
title_en: Maximum Modulus Principle
aliases: [최대 절댓값 정리, 최대 모듈러스 원리, 최소 절댓값 원리, maximum modulus principle, maximum modulus theorem, minimum modulus principle]
kind: theorem
field: complex-analysis
msc: ["30C80"]
level: undergrad
summary: "영역 위의 정칙함수 f 의 절댓값 |f| 가 한 점 a 의 둘레의 원판에서 |f(a)| 를 넘지 않으면 f 는 상수함수이다. 따라서 상수가 아닌 정칙함수의 절댓값은 영역의 어느 점에서도 최댓값을 갖지 않는다. 증명은 평균값 성질로 a 둘레의 원판에서 f 가 상수임을 보이고 일치 정리로 넓힌다. 영점이 없는 정칙함수에서는 최솟값에 대해서도 같다."
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, riemann-integral, linearity-of-the-integral, continuous-implies-integrable, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, complex-polynomial-function, open-ball, open-ball-is-open, open-set-in-metric-space, complex-plane-as-metric-space, subspace-and-continuity, composition-of-continuous-maps, continuity-of-complex-operations, addition-law-of-complex-exponential, polar-form, complex-derivative, complex-derivative-rules, derivative-of-complex-exponential, zero-derivative-on-a-region, path-in-the-complex-plane, properties-of-integral-of-complex-valued-function, cauchy-integral-formula, identity-theorem]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Classification of Zeros and the Identity Principle 절의 weak relative maximum 의 정의, Theorem maxmodthm, Corollary minmodthm 과 그 앞 문단, Theorem maxmodthm 의 증명, source/sec_classifzeros.ptx:195–216, 249–266, 283–327; 8장 연습문제 prob_minmodthm 과 평균 꼴의 다른 증명을 묻는 것, source/exercises-chap8.ptx:215–226, 291–309; 8장 연습문제 ex_8_3, source/exercises-chap8.ptx:258–270; Harmonic Functions 장의 Mean-Value and Maximum/Minimum Principle 절의 Theorem harmonicmaxmin 과 그 증명, Corollary cor_holomorphicweakmaxmin 과 그 증명, source/sec_harmonicmeanvalue.ptx:73–160"
    checked: original
    note: "출처 Theorem maxmodthm(sec_classifzeros.ptx:205–216)은 영역 G 에서 상수가 아닌 정칙함수의 |f| 가 G 에서 weak relative maximum(어떤 원판 D[w, r] ⊆ G 의 모든 z 에서 |f(z)| ≤ |f(w)|, 199–203)을 갖지 않는다고 진술한다. (1)은 같은 내용을 대우로 진술한 것이다. 출처의 증명(283–327)은 f(a) = 0 이면 일치 정리로 끝내고, 아니면 g = f/f(a) 의 Log 를 잡아 실수부가 0 이하인 정칙함수 h 가 a 에서 0 이 된다는 것과 연습문제 ex_realmax0 으로 원판에서 f 가 상수임을 보인 뒤 일치 정리를 쓴다. 이 항목은 Log 와 그 연습문제를 쓰지 않고, 코시 적분 공식의 평균값 성질의 실수부와 '연속이고 0 이상이며 적분이 0 이면 0' 으로 원판의 각 원 위에서 f 가 상수임을 보인 뒤 일치 정리를 쓴다(f(a) = 0 인 경우를 나누지 않는다). 출처 Corollary minmodthm(255–266)은 상수가 아닌 정칙함수의 |f| 가 f(a) = 0 이 아닌 한 a 에서 weak relative minimum 을 갖지 않는다고 진술하고 증명을 연습문제 prob_minmodthm(exercises-chap8.ptx:215–226)으로 돌린다. (3)은 이것을 영점이 없는 정칙함수에 대해 진술한 것이다. 8장 연습문제(291–309)는 코시 적분 공식으로 |f(z₀)|^k ≤ cM^k 를 얻어 원 위의 상계가 안쪽에서도 상계임을 보이는 다른 증명을 묻는다. 반례 '영점에서 절댓값이 최소인 $z$'는 출처의 minmodthm 이 '$f(a) = 0$이 아닌 한' 이라는 조건을 단 것과 같은 경우를 보인다. 출처 Theorem harmonicmaxmin 의 증명(sec_harmonicmeanvalue.ptx:81–135)은 조화함수의 평균값 성질에서, 원 위의 값이 한 구간에서 중심의 값보다 작으면 평균이 중심의 값보다 작아진다는 것으로 strong relative maximum 이 없음을 보이는데, 이 항목의 증명이 평균값 성질의 실수부로 원 위의 값을 묶는 것과 같은 발상이다. 출처 Corollary cor_holomorphicweakmaxmin(142–160)은 0 이 되지 않는 정칙함수의 |f| 가 strong relative maximum 과 minimum 을 갖지 않는다고 진술하고 ln|f| 가 조화함수라는 것으로 증명하는데, (3)과 같은 주제이다. 예시 '$B(0, 2)$ 위의 $z^2 + 4z$'는 8장 연습문제 ex_8_3(exercises-chap8.ptx:258–270: 닫힌 단위원판에서 |z² − 2| 의 최대와 최소)과 같은 종류의 대상(원판 위의 이차 다항함수의 절댓값)이다."
  - ref: lebl-basic-analysis-2
    loc: "11.5 Maximum principle and the fundamental theorem of algebra, Lemma 11.5.1 과 그 뒤 문단, Theorem 11.5.2 (p.169); 11.5 의 연습문제 Exercise 11.5.1, 11.5.2 (p.171)"
    checked: original
    note: "출처 Theorem 11.5.2(p.169)는 열린 연결집합 U 위의 해석함수 f 의 |f| 가 z₀ ∈ U 에서 relative maximum 을 가지면 f 가 상수라고 진술하고 증명을 Exercise 11.5.2(p.171)로 돌린다. 출처는 Lemma 11.5.1(다항식이나 멱급수 p 가 p(z₀) ≠ 0 이면 z₀ 둘레에 |p(w)| < |p(z₀)| 인 w 가 있다, 멱급수판은 Exercise 11.5.1)과 일치 정리로 최대 원리를 얻는다고 적고, 보조정리 뒤 문단에서 해석함수의 절댓값의 최솟값은 영점에서만 생긴다고 적는다. 이 항목의 (1)은 Theorem 11.5.2 와 같은 내용이고 증명은 평균값 성질로 한다. (3)은 그 문단의 최솟값에 관한 말을 영점이 없는 정칙함수에 대해 진술한 것이다. 출처는 같은 문단에서 해석함수가 0 이 아닌 점 근처에서 1/f 가 해석적이라는 것을 최대 원리에 쓰는데, (3)의 증명이 1/f 에 (1)을 쓰는 것과 같은 발상이다. 반례 '영점에서 절댓값이 최소인 $z$'는 출처 Lemma 11.5.1 이 p(z₀) ≠ 0 을 가정하는 것과 같은 경우를 보인다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(최대 절댓값 원리의 평균값 증명 통독, 일치 정리의 수열 없는 분리 논법). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 것이고, 정칙함수는 [[complex-derivative|복소 미분]]의 것이다.

아래에서 $G$는 영역이고 $f : G \to \mathbb{C}$는 정칙함수이다.

1. (원판에서의 최대) $a \in G$이고 $\delta$가 양의 실수이며 $B(a, \delta) \subseteq G$이고, $B(a, \delta)$의 모든 $z$에서 $|f(z)| \le |f(a)|$라 하자. 그러면 $G$의 모든 $z$에서 $f(z) = f(a)$이다.
2. (**최대 절댓값 원리**) $a \in G$이고 $G$의 모든 $z$에서 $|f(z)| \le |f(a)|$이면, $G$의 모든 $z$에서 $f(z) = f(a)$이다. 따라서 $f$가 상수함수가 아니면, $G$의 어느 점 $a$에서도 $G$의 모든 $z$에서 $|f(z)| \le |f(a)|$가 성립하지 않는다.
3. (영점이 없는 함수의 최소) $G$의 모든 $z$에서 $f(z) \ne 0$이라 하자. $a \in G$이고 $\delta$가 양의 실수이며 $B(a, \delta) \subseteq G$이고, $B(a, \delta)$의 모든 $z$에서 $|f(a)| \le |f(z)|$이면, $G$의 모든 $z$에서 $f(z) = f(a)$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Regions are those of the entry on regions and functions with zero derivative, and holomorphic functions are those of the entry on the complex derivative.

Below, $G$ is a region and $f : G \to \mathbb{C}$ is a holomorphic function.

1. (Maximum on a disk) Let $a \in G$, let $\delta$ be a positive real number with $B(a, \delta) \subseteq G$, and suppose $|f(z)| \le |f(a)|$ for every $z$ in $B(a, \delta)$. Then $f(z) = f(a)$ for every $z$ in $G$.
2. (**Maximum modulus principle**) If $a \in G$ and $|f(z)| \le |f(a)|$ for every $z$ in $G$, then $f(z) = f(a)$ for every $z$ in $G$. Hence, if $f$ is not a constant function, there is no point $a$ of $G$ such that $|f(z)| \le |f(a)|$ holds for every $z$ in $G$.
3. (Minimum of a function without zeros) Suppose $f(z) \ne 0$ for every $z$ in $G$. If $a \in G$, $\delta$ is a positive real number with $B(a, \delta) \subseteq G$, and $|f(a)| \le |f(z)|$ for every $z$ in $B(a, \delta)$, then $f(z) = f(a)$ for every $z$ in $G$.
:::

## 직관

평균값 성질에 의해 중심에서의 값 $f(a)$는 원 위의 값들의 평균입니다. 원 위의 값의 절댓값이 모두 $|f(a)|$ 이하인데 그 평균이 $f(a)$가 되려면, 함수가 연속이므로 원 위의 값이 모두 $f(a)$와 같아야 합니다. 원 위에서 한 곳이라도 $f(a)$에서 벗어나면 평균이 $f(a)$보다 "안쪽"으로 끌려 들어가기 때문입니다. 그래서 $a$ 둘레의 원판에서 $f$는 상수이고, 일치 정리로 영역 전체에서 상수입니다.

비유하면 원탁에 둘러앉은 사람들의 키가 모두 가운데 사람의 키 이하인데 평균이 가운데 사람의 키와 같다면, 모두 그 키라는 것입니다. 비유가 맞는 곳은 "평균"이 평균값 성질에, "모두 이하"가 원판에서의 가정에 해당한다는 점입니다. 비유가 맞지 않는 곳은 키가 실수인 데 비해 함숫값은 복소수라는 점입니다. 그래서 증명에서는 $f(a)$의 켤레를 곱한 실수부의 평균을 봅니다.

$f(a) = 0$이어도 같은 논법이 됩니다. 이때 가정은 원판에서 $f = 0$이라는 것입니다. 최소에 대한 (3)은 $1/f$에 (1)을 쓴 것이고, 영점이 없다는 가정이 필요합니다. 영점에서는 $|f|$가 $0$으로 최소가 될 수 있습니다(아래 반례).

## 증명

:::idea
$c = f(a)$로 두고 반지름 $r < \delta$인 원 위에서 $u(t) = |c|^2 - \operatorname{Re}(h(t)\overline{c})$를 본다. 가정에 의해 $u \ge 0$이고, $\overline{c} f$의 평균값 성질에 의해 $\int_0^{2\pi} u = 0$이므로 $u = 0$이다. 그러면 $|h(t) - c|^2 \le 0$이어서 원 위에서 $f = c$이고, 원판에서 $f = c$이므로 일치 정리를 쓴다.
:::

:::hint
$|w - c|^2 = |w|^2 + |c|^2 - 2\operatorname{Re}(w\overline{c})$와 $\operatorname{Re}(w\overline{c}) \le |w|\,|c|$를 쓰세요. $|w| \le |c|$이면 두 번째 식에서 $\operatorname{Re}(w\overline{c}) \le |c|^2$입니다.
:::

:::hint
$B(a, \delta)$의 점 $z \ne a$는 $r = |z - a|$와 $z - a$의 편각 $\theta$로 $a + r\exp(i\theta)$라 쓸 수 있습니다.
:::

:::proof
"순서 (n)"은 [[order-properties-of-reals]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "삼각부등식 (n)"은 [[complex-triangle-inequality|복소수의 삼각부등식]], "연산 (n)"은 [[continuity-of-complex-operations|복소수 연산의 연속]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]]의 번호이다.

**1의 증명.** $c = f(a)$로 둔다.

**단계 A (원 위에서 $f = c$).** $r$을 $0 < r < \delta$인 실수라 하자. $|z - a| \le r$이면 순서 (1)의 (v)에 의해 $|z - a| < \delta$이므로 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 닫힌 공 $C(a, r)$는 $B(a, \delta) \subseteq G$에 포함된다. 법칙 (1)에 의해 $F = \overline{c} f : G \to \mathbb{C}$는 정칙함수이다. $t \in [0, 2\pi]$에서 $h(t) = f(a + r\exp(it))$로 두면 $F(a + r\exp(it)) = \overline{c}\,h(t)$이다. [[cauchy-integral-formula|코시 적분 공식]]의 (3)의 (i)을 $F$에 쓰면, $t$에서의 값이 $q(t) = \operatorname{Re}(\overline{c}\,h(t))$인 실함수에 대하여 $\operatorname{Re} F(a) = \frac{1}{2\pi}\int_0^{2\pi} q$이다. 복소 절댓값 (2)에 의해 $F(a) = \overline{c}\,c = \iota(|c|^2)$이므로 [[complex-field]]의 (2)의 (ii)에 의해 $\operatorname{Re} F(a) = |c|^2$이고,
$$
\int_0^{2\pi} q = 2\pi |c|^2
$$
이다. 체의 곱셈은 가환이므로 $q(t) = \operatorname{Re}(h(t)\,\overline{c})$이다.

$t \in [0, 2\pi]$에서 $z_t = a + r\exp(it)$로 두면 복소 절댓값 (3), (5)와 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)에 의해 $|z_t - a| = r\,|\exp(it)| = r < \delta$이므로, 가정에 의해 $|h(t)| = |f(z_t)| \le |c|$이다. 삼각부등식 (1)과 [[absolute-value]]의 (6)에 의해 $q(t) \le |q(t)| \le |h(t)|\,|c|$이고, $0 \le |c|$이므로 순서 (4)의 (iii)에 의해 $|h(t)|\,|c| \le |c|\,|c| = |c|^2$이다. 따라서 $u(t) = |c|^2 - q(t)$로 정한 $u : [0, 2\pi] \to \mathbb{R}$는 모든 $t$에서 $0 \le u(t)$이다(순서 (3)의 (i)).

$u$는 연속이다. [[path-in-the-complex-plane|경로]]의 (3)에 의해 $\gamma_{a,r}(t) = a + r\exp(it)$는 C¹ 경로이고 같은 항목의 (1)에 의해 연속이며, 그 값은 위에 의해 $G$에 있다. [[subspace-and-continuity]]의 (3)의 (i)에 의해 $\gamma_{a,r}$을 $[0, 2\pi]$에서 $G$로의 함수로 본 것도 연속이고, [[complex-derivative|복소 미분]]의 (3)에 의해 $f$는 연속이므로, [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $h = f \circ \gamma_{a,r}$은 연속이다. 연산 (2)와 (3)에 의해 $t$에서의 값이 $\iota(|c|^2) - \overline{c}\,h(t)$인 함수 $U : [0, 2\pi] \to \mathbb{C}$는 연속이고, 연산 (1)에 의해 $\operatorname{Re} U$와 $q = \operatorname{Re}(\overline{c}\,h)$는 연속이다. [[complex-field]]의 (1)과 (2)의 (ii)에 의해 $\operatorname{Re} U(t) = |c|^2 - q(t) = u(t)$이므로 $u$는 연속이다.

[[continuous-implies-integrable]]의 (1)에 의해 $q$는 적분가능하고, [[riemann-integral]]의 (5)에 의해 값이 $|c|^2$인 상수함수의 적분은 $2\pi|c|^2$이다. [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해
$$
\int_0^{2\pi} u = 2\pi|c|^2 - \int_0^{2\pi} q = 0
$$
이다. [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (5)에 의해 모든 $t \in [0, 2\pi]$에서 $u(t) = 0$, 곧 $q(t) = |c|^2$이다.

이제 삼각부등식 (1)에 의해
$$
\begin{aligned}
|h(t) - c|^2 &= |h(t)|^2 + |c|^2 - 2q(t) \\
&\le |c|^2 + |c|^2 - 2|c|^2 = 0
\end{aligned}
$$
이다. 여기서 $|h(t)|^2 \le |c|^2$은 $0 \le |h(t)| \le |c|$와 순서 (7)의 (ii)이다. 복소 절댓값 (1)에 의해 $0 \le |h(t) - c|$이므로 순서 (4)의 (iv)와 (1)의 (ii)에 의해 $|h(t) - c|^2 = 0$이고, 순서 (5)의 (i)에 의해 $|h(t) - c| = 0$, 복소 절댓값 (1)에 의해 $h(t) = c$이다. 곧 $0 < r < \delta$인 모든 실수 $r$과 모든 $t \in [0, 2\pi]$에서 $f(a + r\exp(it)) = c$이다.

**단계 B (원판에서 $f = c$).** $z \in B(a, \delta)$라 하자. $z = a$이면 $f(z) = c$이다. $z \ne a$이면 $w = z - a \ne 0$이고, [[polar-form|극형식]]의 (1)에 의해 $0 \le \theta < 2\pi$인 $w$의 편각 $\theta$가 있어 $w = |w|\exp(i\theta)$이다. $r = |w|$로 두면 복소 절댓값 (1)에 의해 $0 < r$이고 $r < \delta$이며 $\theta \in [0, 2\pi]$이므로, 단계 A에 의해 $f(z) = f(a + r\exp(i\theta)) = c$이다.

**단계 C (일치 정리).** [[complex-derivative|복소 미분]]의 (5)와 법칙 (1)에 의해 $z$에서의 값이 $f(z) - c$인 함수 $g : G \to \mathbb{C}$는 정칙함수이고, 단계 B에 의해 $B(a, \delta)$에서 $g = 0$이다. $B(a, \delta)$는 [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 열린집합이고 $a$를 원소로 가지므로 공집합이 아니다. [[identity-theorem|일치 정리]]의 (3)에 의해 $G$에서 $g = 0$, 곧 $G$의 모든 $z$에서 $f(z) = c = f(a)$이다.

**2의 증명.** $G$는 열린집합이므로 $B(a, \delta) \subseteq G$인 실수 $\delta > 0$이 있고, 가정에 의해 $B(a, \delta)$의 모든 $z$에서 $|f(z)| \le |f(a)|$이다. (1)에 의해 $G$에서 $f(z) = f(a)$이다. 따라서 $|f(z)| \le |f(a)|$가 $G$의 모든 $z$에서 성립하는 점 $a$가 있으면 $f$는 상수함수이고, 마지막 문장은 그 대우이다.

**3의 증명.** 법칙 (3)의 (iii)에 의해 $1/f : G \to \mathbb{C}$는 정칙함수이다. $B(a, \delta)$의 모든 $z$에서 $0 < |f(a)| \le |f(z)|$이므로(복소 절댓값 (1)), 복소 절댓값 (4)와 순서 (6)의 (ii)(두 수가 같으면 역수도 같다)에 의해 $|1/f(z)| = |f(z)|^{-1} \le |f(a)|^{-1} = |1/f(a)|$이다. (1)을 $1/f$에 쓰면 $G$의 모든 $z$에서 $f(z)^{-1} = f(a)^{-1}$이고, 양변의 역수를 취하면 $f(z) = f(a)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$B(0, 2)$ 위의 $z^2 + 4z$]
$f(z) = z^2 + 4z$로 정한 $f : B(0, 2) \to \mathbb{C}$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)과 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 정칙함수이고, $B(0, 2)$는 영역입니다([[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)). $f(0) = 0$이고 $f(1) = 5$이므로 $f$는 상수함수가 아니고, (2)에 의해 $|f|$는 $B(0, 2)$의 어느 점에서도 최댓값을 갖지 않습니다.

한 점에서 직접 확인해 봅시다. $z = 1$에서 $|f(1)| = 5$인데, $0 < s < 1$인 실수 $s$에서 $1 + s \in B(0, 2)$이고 $f(1 + s) = (1 + s)^2 + 4(1 + s) = 5 + 6s + s^2$은 $5$보다 큰 실수이므로 $|f(1 + s)| > 5$입니다. $z = 1$ 둘레의 원판에서 $|f(z)| \le |f(1)|$이 성립하지 않는다는 것이 (1)과 맞습니다.
:::

:::counterexample[떨어진 두 원판 위에서 한쪽에서만 상수인 정칙함수]
$G = B(0, 1) \cup B(3, 1)$은 겹치지 않는 두 원판의 합집합입니다([[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)에 의해 두 원판에 함께 드는 $z$가 있다면 $3 \le |z| + |3 - z| < 2$). $f$를 $B(0, 1)$에서 값이 $1$이고 $B(3, 1)$에서 $f(z) = z - 3$인 함수로 두면, 두 제한이 정칙함수이므로 [[complex-derivative|복소 미분]]의 (5)와 (4)의 (ii)에 의해 $f$는 정칙함수입니다. $B(0, 1)$의 모든 $z$에서 $|f(z)| = 1 = |f(0)|$이어서 (1)의 원판에 대한 가정을 $a = 0$, $\delta = 1$로 만족하지만, $f(3) = 0 \ne f(0)$입니다. $G$가 영역이 아니어서 (1)의 가정을 만족하지 않습니다.
:::

:::counterexample[영점에서 절댓값이 최소인 $z$]
$B(0, 1)$ 위에서 $f(z) = z$는 정칙함수이고, 모든 $z \in B(0, 1)$에서 $|f(0)| = 0 \le |f(z)|$입니다. 그러나 $f(1/2) = 1/2 \ne 0 = f(0)$이어서 $f$는 상수가 아닙니다. $f(0) = 0$이어서 $f$가 영점을 갖고, (3)의 가정 "모든 $z$에서 $f(z) \ne 0$"을 만족하지 않습니다.
:::

## 확인 질문

:::check[정함수 $f$가 모든 $z$에서 $|f(z)| \le |f(2i)|$이면 $f(0)$은?]
$\mathbb{C}$는 영역이므로([[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)) (2)에 의해 모든 $z$에서 $f(z) = f(2i)$이고, $f(0) = f(2i)$입니다.
:::

:::check[$B(0, 1)$ 위에서 $|\exp(z)|$가 최솟값을 갖는 점이 있는가?]
없습니다. 그런 점 $a$가 있다고 합시다. $\exp$는 정함수이고 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $0$인 값이 없으므로, $B(0, 1)$로 제한한 함수와 $B(a, \delta) \subseteq B(0, 1)$인 $\delta > 0$에 (3)을 쓰면 $B(0, 1)$에서 $\exp(z) = \exp(a)$입니다. 그러면 $B(0, 1)$에서 상수인 함수의 미분계수는 $0$이어야 하는데([[complex-derivative|복소 미분]]의 (5)와 (4)의 (i)), [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp'(0) = 1$입니다.
:::
