---
title: 복소 멱급수의 항별 미분
title_en: Termwise Differentiation of Complex Power Series
aliases: [복소 멱급수는 정칙이다, 복소 멱급수의 미분, 복소 멱급수가 나타내는 함수의 연속, 항별 미분한 복소 멱급수, power series are holomorphic, termwise differentiation of complex power series, derivative of a complex power series]
kind: theorem
field: complex-analysis
msc: ["30B10"]
level: undergrad
summary: 수렴 반지름이 양수이거나 모든 복소수에서 수렴하는 복소 멱급수를 항별 미분한 복소 멱급수는 같은 수렴 반지름을 갖고, 원래의 복소 멱급수가 나타내는 함수는 정칙함수이며 그 도함수는 항별 미분한 복소 멱급수가 같은 집합 위에 나타내는 함수이다. 따라서 나타내는 함수는 연속이고, 모든 복소수에서 수렴하는 복소 멱급수가 나타내는 함수와 그 도함수는 정함수이다.
requires: [function, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, harmonic-series-diverges, sum-of-a-series, series-indexed-from-zero, factorial-from-zero, power-series, radius-of-convergence, termwise-differentiation-of-power-series, derivatives-of-power-series, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number, open-ball, open-set-in-metric-space, complex-plane-as-metric-space, convergence-of-complex-sequences, complex-series, absolute-convergence-of-complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-series-examples, limit-of-complex-function, complex-derivative, complex-derivative-rules]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Power Series and Holomorphic Functions 절의 Theorem thm_powerholomorphic 과 그 증명, 그 뒤 두 문단, Theorem powerderivative 와 그 증명, source/sec_powerseriesholom.ptx:10–29, 30–41, 42–92; Regions of Convergence 절의 Corollary powseriescontinuous 와 그 증명, source/sec_regionsconvergence.ptx:315–339; 2장 연습문제 polynomialsholomorphic, source/exercises-chap2.ptx:199–209; 7장 연습문제 ex_7_2 와 M 판정 연습문제, source/exercises-chap7.ptx:448–486, 585"
    checked: original
    note: "출처 Theorem thm_powerholomorphic(sec_powerseriesholom.ptx:10–29)은 수렴 반지름 R > 0 인 Σ c_k(z − z₀)ᵏ 이 D[z₀, R] 에서 정칙이라고 진술하고, Corollary powseriescontinuous(연속), Corollary powseriesintegral(닫힌 경로 위의 적분이 0)과 모레라 정리로 증명한다. 출처는 R 에 ∞ 를 허용하고, 그 뒤 문단(30–35줄)에서 반지름이 무한인 멱급수는 정함수를 나타낸다고 적는다. 이 항목은 ∞ 대신 '모든 복소수에서 수렴하는 복소 멱급수'라 하고 그 경우를 (4)로 따로 적는다. 출처 Theorem powerderivative(42–92줄)는 f′(z) = Σ_{k≥1} k c_k (z − z₀)^{k−1} 과 이 급수의 반지름도 R 이라는 것을 진술하고, 앞의 것은 도함수의 코시 적분 공식(cauchyformula2)과 항별 적분으로, 뒤의 것은 (z − z₀)f′(z) 의 계수가 f(z) 의 계수보다 크다는 비교로 증명한다(81–89줄). 이 항목의 (1)과 (2)가 그 내용이다. 이 항목의 증명은 출처의 두 길(모레라 정리, 코시 적분 공식)을 쓰지 않고, (1)은 절댓값 계수의 실멱급수에 급수와 멱급수 강의의 항별 미분을 써서, (2)는 차분몫과 항별 미분한 급수의 차를 부등식 |uⁿ − vⁿ − n v^{n−1}(u − v)| ≤ n(n − 1) r^{n−2}|u − v|² 와 두 번 항별 미분한 실멱급수의 수렴으로 직접 어림해 보인다. 출처 Corollary powseriescontinuous(sec_regionsconvergence.ptx:315–339)는 나타내는 함수가 D[z₀, R] 에서 연속임을 r = (|w − z₀| + R)/2 로 잡은 작은 원판 위의 고른 수렴으로 보인다. 이 항목은 (3)을 (2)와 미분가능하면 연속이라는 것에서 얻는다. 증명에서 r = (|z₀ − a| + ρ)/2 로 잡는 것은 출처의 그 r 과 같은 선택이다. 반례 '경계의 점에서 항별 미분한 급수가 발산하는 예'의 Σ zⁿ/n² 은 출처 7장 연습문제(source/exercises-chap7.ptx:585–, 바이어슈트라스 M 판정으로 닫힌 원판 D̄[0, 1] 위의 고른 수렴을 보이게 하는 첫째 급수)와 같은 대상이다. 예시 '계수가 유한 개만 $0$이 아닌 복소 멱급수'는 다항식의 도함수를 구하는 것이고, 출처 2장 연습문제 polynomialsholomorphic(exercises-chap2.ptx:199–209, 다항식으로 주어진 함수가 정함수임을 보이라)과 같은 대상이다. 확인 질문 '중심이 $0$이고 계수가 $c_n = i\\,(1/2)^n$인 복소 멱급수가 나타내는 함수 $f$에 대하여, $f'(0)$과 $f'$을 나타내는 복소 멱급수의 수렴 반지름은 무엇인가?'의 계수가 등비수열인 복소 멱급수는 출처 7장 연습문제 ex_7_2(exercises-chap7.ptx:448–486, 1/(1 + 4z), 1/(3 − z/2) 의 멱급수와 반지름)의 급수와 같은 꼴이다. 확인 질문 '모든 복소수에서 수렴하는 복소 멱급수가 나타내는 함수 $f$의 도함수 $f'$은 다시 미분가능한가?'의 답은 출처 30–35줄(반지름이 무한인 멱급수는 정함수)과 Theorem powerderivative 의 마지막 문장(도함수의 급수도 반지름이 같다)을 함께 쓴 것과 같다."
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions, 11.3.3소절 Properties of analytic functions, Proposition 11.3.4 와 그 증명, 그 뒤 문단 (p.156)"
    checked: original
    note: "출처 Proposition 11.3.4(p.156)는 B(a, ρ) 에서 수렴하는 Σ c_n (z − a)ⁿ 이 나타내는 함수가 연속이라고 진술하고, 부분합이 B(a, r) 위에서 고르게 수렴한다는 것과 수열의 꼬리로 증명한다. 이 항목의 (3)이 같은 결론이다. 그 뒤 문단(p.156)은 실수 x 에서 c_n = s_n + i t_n 으로 나눠 실수부·허수부에 실수 멱급수의 항별 미분을 써서 f′(x) = Σ (n + 1) c_{n+1} (x − a)ⁿ 을 얻는다. 곧 출처는 그 문단에서 중심과 변수가 실수인 경우의 항별 미분을 다룬다. 이 항목의 (2)는 같은 식을 복소 변수 z 의 복소 미분으로 진술한다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 항별 미분 증명과 오차 부등식 검토). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 0부터 번호가 붙은 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 (6)의 것이다. 복소 멱급수, 그 $z$에서의 항, 수렴·발산과 합, 절댓값 계수의 실멱급수, 집합 $A$, 수렴 반지름 $\rho$, 모든 복소수에서 수렴하는 복소 멱급수는 [[complex-power-series|복소 멱급수]]의 것이고, 집합 $D$와 복소 멱급수가 $D$ 위에 나타내는 함수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이다. 실멱급수를 항별 미분한 멱급수는 [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 것이다. 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이고, 복소 미분가능, 미분계수, 정칙함수, 도함수, 정함수, 연속은 [[complex-derivative|복소 미분]]의 것이다.

$a$를 복소수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 복소수열이라 하고, "복소 멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수라 하자.

**항별 미분한 복소 멱급수.** $0$ 이상인 정수 $n$마다 복소수 $(n + 1)\,c_{n+1}$, 곧 $\iota(n + 1)\,c_{n+1}$이 정해지므로, $n$에서의 값이 $(n + 1)\,c_{n+1}$인 0부터 번호가 붙은 복소수열이 있다. 중심이 $a$이고 계수가 이 수열인 복소 멱급수를 복소 멱급수를 **항별 미분한 복소 멱급수**(termwise differentiated complex power series)라 한다. 복소수 $z$에서 그 항은 $\bigl((n + 1)\,c_{n+1} (z - a)^n\bigr)_{n \ge 0}$이다. 이 항목에서 항별 미분한 복소 멱급수의 집합 $A$와 수렴 반지름을 $\tilde{A}$, $\tilde{\rho}$로 쓴다.

다음이 성립한다.

1. (반지름이 같다)
   - (i) 항별 미분한 복소 멱급수의 절댓값 계수의 실멱급수는, 복소 멱급수의 절댓값 계수의 실멱급수를 [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 뜻으로 항별 미분한 멱급수이다. 곧 둘 다 중심이 $0$이고 $n$번째 계수가 $(n + 1)\,|c_{n+1}|$인 실멱급수이다.
   - (ii) $\tilde{A} \subseteq A$이다.
   - (iii) $A$가 위로 유계인 것은 정확히 $\tilde{A}$가 위로 유계일 때이고, 이때 $\tilde{\rho} = \rho$이다. 따라서 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수인 것은 정확히 항별 미분한 복소 멱급수가 그럴 때이고, [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 집합 $D$는 두 복소 멱급수에서 같은 집합이다.
2. (항별 미분) [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 두 경우, 곧 $A$가 위로 유계이고 $0 < \rho$이거나 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수일 때, 복소 멱급수가 $D$ 위에 나타내는 함수를 $f$, 항별 미분한 복소 멱급수가 (1)에 의해 같은 $D$ 위에 나타내는 함수를 $g$라 하자. 그러면 $D$는 열린집합이고, $f : D \to \mathbb{C}$는 정칙함수이며 $f' = g$이다. 곧 $D$의 모든 원소 $z$에서
   $$
   f'(z) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (z - a)^n
   $$
   이다. 따라서 $f'$도 중심이 $a$인 복소 멱급수가 같은 $D$ 위에 나타내는 함수이고, $f'(a) = c_1$이다. ($A$가 위로 유계이고 $\rho = 0$이면 $D$를 정하지 않으므로 이 번호는 아무것도 말하지 않는다.)
3. (나타내는 함수의 연속) (2)의 가정 아래 $f : D \to \mathbb{C}$는 연속이다. 곧 $f$는 $D$의 모든 점에서 연속이다.
4. (모든 복소수에서 수렴하는 경우) 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수이면, 그것이 $\mathbb{C}$ 위에 나타내는 함수 $f$는 정함수이고, 항별 미분한 복소 멱급수도 모든 복소수에서 수렴하는 복소 멱급수이며, $f'$도 정함수이다.
:::

:::english
Complex numbers and $\operatorname{Re}$, $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number, and powers are those of the entry on powers of a complex number. Complex sequences indexed from zero are those of (6) of the entry on convergence of complex sequences. Complex power series, their terms at $z$, convergence, divergence and sum, the real power series of absolute coefficients, the set $A$, the radius of convergence $\rho$, and complex power series converging at every complex number are those of the entry on complex power series; the set $D$ and the function represented on $D$ by a complex power series are those of (7) of the entry on the radius of convergence of a complex power series. The termwise differentiated power series of a real power series is that of the entry on termwise differentiation of power series. Open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$; complex differentiability, derivatives at a point, holomorphic functions, derivatives, entire functions, and continuity are those of the entry on the complex derivative.

Let $a$ be a complex number and $(c_n)_{n \ge 0}$ a complex sequence indexed from zero, and let "the complex power series" be the complex power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**Termwise differentiated complex power series.** For each integer $n \ge 0$ the complex number $(n + 1)\,c_{n+1}$, that is, $\iota(n + 1)\,c_{n+1}$, is determined, so there is a complex sequence indexed from zero whose value at $n$ is $(n + 1)\,c_{n+1}$. The complex power series with center $a$ and these coefficients is called the **termwise differentiated complex power series** of the complex power series. At a complex number $z$ its terms are $\bigl((n + 1)\,c_{n+1} (z - a)^n\bigr)_{n \ge 0}$. In this entry the set $A$ and the radius of convergence of the termwise differentiated complex power series are written $\tilde{A}$, $\tilde{\rho}$.

The following hold.

1. (The radii are equal)
   - (i) The real power series of absolute coefficients of the termwise differentiated complex power series is the termwise differentiated power series, in the sense of the entry on termwise differentiation of power series, of the real power series of absolute coefficients of the complex power series. That is, both are the real power series with center $0$ whose $n$th coefficient is $(n + 1)\,|c_{n+1}|$.
   - (ii) $\tilde{A} \subseteq A$.
   - (iii) $A$ is bounded above exactly when $\tilde{A}$ is bounded above, and then $\tilde{\rho} = \rho$. Hence the complex power series converges at every complex number exactly when the termwise differentiated complex power series does, and the set $D$ of (7)(i) of the entry on the radius of convergence of a complex power series is the same set for the two complex power series.
2. (Termwise differentiation) In the two cases of (7)(i) of the entry on the radius of convergence of a complex power series, that is, when $A$ is bounded above and $0 < \rho$ or the complex power series converges at every complex number, let $f$ be the function represented on $D$ by the complex power series and $g$ the function represented on the same $D$, by (1), by the termwise differentiated complex power series. Then $D$ is an open set, $f : D \to \mathbb{C}$ is a holomorphic function, and $f' = g$. That is, for every element $z$ of $D$
   $$
   f'(z) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (z - a)^n.
   $$
   Hence $f'$ is also the function represented on the same $D$ by a complex power series with center $a$, and $f'(a) = c_1$. (If $A$ is bounded above and $\rho = 0$, no $D$ is defined, so this item says nothing.)
3. (Continuity of the represented function) Under the assumptions of (2), $f : D \to \mathbb{C}$ is continuous; that is, $f$ is continuous at every point of $D$.
4. (The case of convergence at every complex number) If the complex power series converges at every complex number, then the function $f$ it represents on $\mathbb{C}$ is an entire function, the termwise differentiated complex power series also converges at every complex number, and $f'$ is also an entire function.
:::

## 직관

다항함수는 항마다 미분해 더하면 도함수가 됩니다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)가 그것입니다. 복소 멱급수는 항이 끝없이 이어지는 "무한한 다항식"이므로, 항마다 미분한 급수 $\sum (n + 1)\,c_{n+1}(z - a)^n$이 도함수가 되리라고 짐작할 수 있습니다. 이 항목은 그 짐작이 수렴 반지름 안쪽에서, 모든 복소수에서 수렴하는 복소 멱급수이면 복소평면 전체에서 맞는다는 것을 말합니다. 다만 극한(미분)과 무한 합의 순서를 바꾸는 일이므로 따로 증명해야 합니다.

증명의 중심은 한 항씩의 오차입니다. $u = z - a$, $v = z_0 - a$로 두면 $n$번째 항의 차분몫이 $n v^{n-1}$에서 얼마나 벗어나는지가
$$
\begin{aligned}
&\bigl|u^n - v^n - n v^{n-1}(u - v)\bigr| \\
&\le n(n - 1)\, r^{n-2}\, |u - v|^2
\end{aligned}
$$
로 어림됩니다($|u|, |v| \le r$, $n \ge 2$). 오른쪽의 계수 $n(n - 1)$은 두 번 항별 미분할 때 붙는 수이고, 두 번 항별 미분한 실멱급수도 반지름이 같으므로 $r$이 반지름보다 작으면(모든 복소수에서 수렴하면 아무 $r$이나) 오차의 합이 $|z - z_0|^2$에 상수를 곱한 것 이하가 됩니다. 이것을 $|z - z_0|$로 나누면 차분몫이 항별 미분한 급수의 값으로 다가갑니다.

비유하면 복소 멱급수는 무한히 많은 톱니바퀴가 맞물린 장치이고, 반지름 안쪽에서는 큰 번호의 톱니가 아주 작아서 장치 전체가 한 톱니바퀴처럼 매끄럽게 돕니다. 비유에서 "톱니가 작다"는 것이 증명에서는 $r$이 반지름보다 작아 $\sum n(n - 1)|c_n| r^{n-2}$이 수렴한다는 것입니다. 비유가 맞지 않는 곳은 반지름의 경계입니다. 경계의 점에서는 원래 급수가 수렴해도 항별 미분한 급수가 발산할 수 있고(아래 반례), 이 항목은 경계의 점에 대해 아무것도 말하지 않습니다.

## 증명

:::idea
반지름보다 작은 $r$을 잡아 $|z - a|, |z_0 - a| < r$인 곳에서, 차분몫과 항별 미분한 급수의 차를 항마다의 부등식과 두 번 항별 미분한 실멱급수의 수렴으로 $|z - z_0|$에 상수를 곱한 것 이하로 누른다.
:::

:::hint
$E_n = u^n - v^n - n v^{n-1} w$($w = u - v$)로 두면 $E_{n+1} = u E_n + n v^{n-1} w^2$입니다. 이것으로 $n$에 대한 귀납을 합니다.
:::

:::hint
(1)은 계수의 절댓값 $|(n + 1)\,c_{n+1}| = (n + 1)\,|c_{n+1}|$을 계산해, 실멱급수의 항별 미분 정리에 넘기면 됩니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이다. "복소 멱급수 (n)"은 [[complex-power-series|복소 멱급수]], "복소 반지름 (n)"은 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]], "실수 반지름 (n)"은 [[radius-of-convergence]], "복소 급수 (n)"은 [[complex-series|복소 급수]], "절대수렴 (n)"은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]], "복소 거듭제곱 (n)"은 [[power-of-a-complex-number]], "실수 거듭제곱 (n)"은 [[power-of-a-real-number]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "계승 (n)"은 [[factorial-from-zero]], "복소 미분 (n)"은 [[complex-derivative|복소 미분]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 체 $\mathbb{C}$의 계산은 [[complex-field]]의 (1)의 체의 법칙이고, 실수가 곱해진 꼴은 같은 항목의 (2), (3)으로 읽는다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 정해진 꼴이다.

**1의 증명.** (i) 항별 미분한 복소 멱급수의 $n$번째 계수의 절댓값은 복소 절댓값 (3), (5)와 [[absolute-value]]의 정의($0 < n + 1$, (Z1))에 의해
$$
\begin{aligned}
\bigl|\iota(n + 1)\,c_{n+1}\bigr| &= |n + 1|\,|c_{n+1}| \\
&= (n + 1)\,|c_{n+1}|
\end{aligned}
$$
이다. 복소 멱급수의 절댓값 계수의 실멱급수는 중심이 $0$이고 계수가 $(|c_n|)_{n \ge 0}$인 실멱급수이고, 그것을 [[termwise-differentiation-of-power-series|항별 미분]]한 멱급수의 $n$번째 계수는 그 항목의 정의에 의해 $(n + 1)\,|c_{n+1}|$이다. 두 실멱급수는 중심이 같고 계수가 모든 $n$에서 같으므로 같은 실멱급수이다.

(ii), (iii) 복소 멱급수 (정의)에 의해 $A$는 절댓값 계수의 실멱급수의 집합 $A$이고, (i)에 의해 $\tilde{A}$는 그것을 항별 미분한 실멱급수의 집합 $\tilde{A}$이다. 따라서 [[termwise-differentiation-of-power-series|항별 미분]]의 (1)의 (i), (ii)를 절댓값 계수의 실멱급수에 쓰면 $\tilde{A} \subseteq A$이고, $A$가 위로 유계인 것은 정확히 $\tilde{A}$가 위로 유계일 때이며 이때 $\tilde{\rho} = \rho$이다. 복소 멱급수 (정의)에 의해 "모든 복소수에서 수렴하는 복소 멱급수"는 $A$가 위로 유계가 아니라는 뜻이므로 둘째 문장이 나온다. 복소 반지름 (7)의 (i)에 의해 집합 $D$는 $A$가 위로 유계인지와 $\rho$만으로 정해지므로 두 복소 멱급수에서 같다.

**2의 증명.** 먼저 $D$가 열린집합임을 본다. $D = \mathbb{C}$이면 [[open-set-in-metric-space]]의 (1)에 의해 열린집합이다. $D = B(a, \rho)$이면, $z \in D$에서 $s = \rho - |z - a|$로 두면 [[complex-plane-as-metric-space|복소평면의 거리]]의 (1)의 $d(a, z) = |z - a|$와 [[open-ball]]의 (3)에 의해 $0 < s$이고 $B(z, s) \subseteq B(a, \rho)$이므로, 열린집합의 정의에 의해 $D$는 열린집합이다.

$z_0 \in D$를 잡고, $f$가 $z_0$에서 복소 미분가능하고 $f'(z_0) = g(z_0)$임을 보인다. $v = z_0 - a$로 두고 실수 $r$을 다음과 같이 정한다. $A$가 위로 유계이고 $0 < \rho$이면 $r = (|v| + \rho)/2$, 모든 복소수에서 수렴하는 복소 멱급수이면 $r = |v| + 1$이다. 앞의 경우 $z_0 \in B(a, \rho)$이므로 $|v| < \rho$이고 $|v| < r < \rho$이다(순서 성질). 어느 경우든 $0 \le |v| < r$이고(복소 절댓값 (1)) 따라서 $0 < r$이다. $\delta_0 = r - |v|$로 두면 $0 < \delta_0$이다.

(가) **두 번 항별 미분한 실멱급수.** $0$ 이상인 정수 $n$마다 실수 $s_n = (n + 2)(n + 1)\,|c_{n+2}|\, r^n$을 둔다. 0부터 번호가 붙은 수열 $(s_n)_{n \ge 0}$의 급수는 수렴한다. 이유는 다음과 같다. 절댓값 계수의 실멱급수를 $P$라 하면 [[derivatives-of-power-series|멱급수의 고계 도함수]]의 (2)를 $P$와 $\ell = 2$에 쓸 수 있다. $P$의 집합 $A$는 복소 멱급수의 $A$이므로, $A$가 위로 유계이고 $0 < \rho$이면 $P$를 $2$번 항별 미분한 멱급수의 $A_2$도 위로 유계이고 $\rho_2 = \rho$이며, 모든 복소수에서 수렴하는 경우에는 $A$가 위로 유계가 아니므로 $A_2$도 위로 유계가 아니다. 앞의 경우 $|r - 0| = r < \rho_2$이므로 실수 반지름 (2)에 의해, 뒤의 경우 실수 반지름 (4)에 의해, $2$번 항별 미분한 멱급수는 $x = r$에서 수렴한다. 그 $r$에서의 항은 같은 항목의 정의에 의해 $\bigl((n + 2)!\,(n!)^{-1}\,|c_{n+2}|\, r^n\bigr)_{n \ge 0}$이고, 계승 (1)을 두 번 쓰면 $(n + 2)! = n!\,(n + 1)(n + 2)$이므로 계승 (3)의 $n! \ne 0$과 (K…)에 의해 $(n + 2)!\,(n!)^{-1} = (n + 2)(n + 1)$이다. 곧 그 항은 $s_n$이다. 이 급수의 합을 $T = \sum_{n=0}^{\infty} s_n$이라 한다. 모든 $s_n$이 $0$ 이상이므로(실수 거듭제곱 (6)의 (i), 순서 성질) [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 $0 \le T$이다.

또 $n \ge 2$에서 정해진 실수 항 $t_n = n(n - 1)\,|c_n|\, r^{n-2}$의 급수는 수렴하고 그 합은 $T$이다. [[complex-series|복소 급수]]의 진술(실수 항의 급수의 합의 기호)과 [[sum-of-a-series]]의 정의에 의해 그 급수는 $j$번째 항이 $t_{j+1} = (j + 1)j\,|c_{j+1}|\, r^{j-1}$인 실수열의 급수이고, [[series-indexed-from-zero]]의 정의에 의해 $(s_n)_{n \ge 0}$의 급수는 $j$번째 항이 $s_{j-1} = (j + 1)j\,|c_{j+1}|\, r^{j-1}$인 실수열(한 칸 옮긴 수열)의 급수이다. 두 실수열은 같으므로 두 급수는 같은 급수이다.

(나) **한 항의 오차.** 복소수 $u$, $v$와 $w = u - v$에 대하여, 자연수 $n$마다 $E_n = u^n - v^n - n v^{n-1} w$로 둔다($n - 1 \ge 0$이다). 다음을 보인다.

- $E_1 = 0$이다. $|u| \le r$이고 $|v| \le r$이면, $2$ 이상인 모든 정수 $n$에서
  $$
  |E_n| \le n(n - 1)\, r^{n-2}\, |w|^2
  $$
  이다.

$E_1 = u - v - 1 \cdot v^0 w = w - w = 0$이다(복소 거듭제곱 (1)). 체의 계산으로, $1$ 이상인 모든 정수 $n$에서
$$
\begin{aligned}
E_{n+1} &= u\,u^n - v\,v^n \\
&\qquad - (n + 1)\, v^n w \\
&= u\bigl(E_n + v^n \\
&\qquad + n v^{n-1} w\bigr) \\
&\qquad - v\,v^n \\
&\qquad - (n + 1)\, v^n w \\
&= u E_n + (u - v)\, v^n \\
&\qquad + n\,u\, v^{n-1} w \\
&\qquad - (n + 1)\, v^n w \\
&= u E_n + n\,(u - v)\, v^{n-1} w \\
&= u E_n + n\, v^{n-1} w^2
\end{aligned}
$$
이다. $(u - v)\, v^n$이 나오는 줄에서 그다음 줄로는 $(u - v)\, v^n = v^n w$이고 $n\,u\,v^{n-1} w - n\, v^n w = n\,(u - v)\, v^{n-1} w$이며 $v^n = v\, v^{n-1}$(복소 거듭제곱 (1))인 것을 썼다. 특히 $n = 1$이면 $E_1 = 0$이므로 $E_2 = 1 \cdot v^0 w^2 = w^2$이고, $|E_2| = |w|^2 = 2 \cdot 1 \cdot r^0 |w|^2$이다(복소 절댓값 (3), 복소 거듭제곱 (4), 실수 거듭제곱 (1)). 이것이 $n = 2$에서의 부등식이다. $n \ge 2$에서 부등식이 성립한다고 하자. 위의 식, [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2), 복소 절댓값 (3)과 복소 거듭제곱 (4)에 의해
$$
|E_{n+1}| \le |u|\,|E_n| + n\,|v|^{n-1}\,|w|^2
$$
이다. $0 \le |u| \le r$, $0 \le |E_n|$이고 귀납 가정에 의해 $|u|\,|E_n| \le r \cdot n(n - 1)\, r^{n-2}|w|^2 = n(n - 1)\, r^{n-1}|w|^2$이며(순서 성질, 실수 거듭제곱 (2)의 (i)), $0 \le |v| \le r$이므로 실수 거듭제곱 (6)의 (ii)에 의해 $|v|^{n-1} \le r^{n-1}$이다. 따라서
$$
\begin{aligned}
|E_{n+1}| &\le \bigl(n(n - 1) + n\bigr)\, r^{n-1}|w|^2 \\
&= n^2\, r^{n-1}|w|^2 \\
&\le (n + 1)n\, r^{n-1}|w|^2
\end{aligned}
$$
이다. 마지막 부등식은 $n^2 \le n^2 + n$이고 $0 \le r^{n-1}|w|^2$인 것에서 나온다(순서 성질). 이것이 $n + 1$에서의 부등식이다.

(다) **차분몫의 어림.** $z \in D$이고 $z \ne z_0$이며 $|z - z_0| < \delta_0$이라 하자. $u = z - a$, $w = z - z_0 = u - v$로 두면 $w \ne 0$이고, [[complex-triangle-inequality|삼각부등식]]의 (5)에 의해 $|u| \le |z - z_0| + |z_0 - a| < \delta_0 + |v| = r$이다. 또 $|v| < r$이다.

$z, z_0 \in D$이므로 복소 반지름 (7)의 (ii)에 의해 $f(z) = \sum_{n=0}^{\infty} c_n u^n$, $f(z_0) = \sum_{n=0}^{\infty} c_n v^n$이고, (1)에 의해 $g(z_0) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} v^n$이다. 복소 급수 (5)에 의해 $c_n u^n - c_n v^n$의 급수와 $(n + 1)\,c_{n+1} v^n w$의 급수($n \ge 0$)는 수렴하고 그 합은 각각 $f(z) - f(z_0)$, $g(z_0)\,w$이다.

- 첫째 급수: $0$번째 항은 $c_0 u^0 - c_0 v^0 = c_0 - c_0 = 0$이므로, 복소 급수 (4)를 $m = 0$, $K = 0$에 쓰면 $n \ge 1$에서 정해진 항 $c_n(u^n - v^n)$의 급수도 수렴하고 $f(z) - f(z_0) = \sum_{n=1}^{\infty} c_n(u^n - v^n)$이다.
- 둘째 급수: [[complex-series|복소 급수]]의 정의에 의해 $n \ge 0$에서 정해진 항 $(n + 1)\,c_{n+1} v^n w$의 급수는 $j$번째 항이 $j\,c_j v^{j-1} w$인 복소수열의 급수이고, $n \ge 1$에서 정해진 항 $n\,c_n v^{n-1} w$의 급수도 같은 복소수열의 급수이다. 따라서 $g(z_0)\,w = \sum_{n=1}^{\infty} n\,c_n v^{n-1} w$이다.

$n \ge 1$에서 $e_n = c_n(u^n - v^n) - n\,c_n v^{n-1} w = c_n E_n$으로 두면, 복소 급수 (5)에 의해 $e_n$의 급수($n \ge 1$)는 수렴하고
$$
f(z) - f(z_0) - g(z_0)\,w = \sum_{n=1}^{\infty} e_n
$$
이다. (나)에 의해 $e_1 = c_1 E_1 = 0$이므로, 복소 급수 (4)를 $m = 1$, $K = 1$에 쓰면 $\sum_{n=1}^{\infty} e_n = e_1 + \sum_{n=2}^{\infty} e_n = \sum_{n=2}^{\infty} e_n$이다.

$n \ge 2$에서 (나)와 복소 절댓값 (3), (4), 복소 거듭제곱 (2), (4)에 의해
$$
\begin{aligned}
\bigl|e_n\, (w^2)^{-1}\bigr| &= |c_n|\,|E_n|\,\bigl(|w|^2\bigr)^{-1} \\
&\le n(n - 1)\,|c_n|\, r^{n-2} = t_n
\end{aligned}
$$
이다. (가)에 의해 $t_n$의 급수($n \ge 2$)는 수렴하고 합이 $T$이므로, 절대수렴 (3)을 $m = 2$에 쓰면 $e_n (w^2)^{-1}$의 급수($n \ge 2$)는 수렴하고 $\bigl|\sum_{n=2}^{\infty} e_n (w^2)^{-1}\bigr| \le T$이다. 복소 급수 (5)에 의해 $\sum_{n=2}^{\infty} e_n = w^2 \sum_{n=2}^{\infty} e_n (w^2)^{-1}$이므로
$$
\bigl|f(z) - f(z_0) - g(z_0)\,w\bigr| \le |w|^2\, T
$$
이다. 양변에 $|w|^{-1}$을 곱하면(복소 절댓값 (3), (4)) $f$의 $z_0$에서의 차분몫 $q_{z_0}(z) = (f(z) - f(z_0))\,w^{-1}$에 대하여
$$
\bigl|q_{z_0}(z) - g(z_0)\bigr| \le T\,|z - z_0|
$$
이다.

(라) **수렴.** 양의 실수 $\varepsilon$을 잡고 $\delta = \min\{\delta_0,\ \varepsilon\,(T + 1)^{-1}\}$으로 두면 $0 < \delta$이다($0 \le T$). $z \in D - \{z_0\}$이고 $|z - z_0| < \delta$이면 (다)에 의해, 그리고 $0 < |z - z_0|$이므로
$$
\begin{aligned}
\bigl|q_{z_0}(z) - g(z_0)\bigr| &\le T\,|z - z_0| \\
&< (T + 1)\,|z - z_0| \\
&< (T + 1)\,\delta \le \varepsilon
\end{aligned}
$$
이다(순서 성질). [[limit-of-complex-function|복소함수의 극한]]의 수렴의 정의에 의해 $q_{z_0}$은 $z_0$에서 $g(z_0)$으로 수렴하고, 복소 미분의 정의에 의해 $f$는 $z_0$에서 복소 미분가능하며 $f'(z_0) = g(z_0)$이다. $z_0 \in D$는 임의였으므로 $f$는 정칙함수이고, 함수의 같음([[function]])에 의해 $f' = g$이다. 마지막으로 복소 반지름 (7)의 (ii)를 항별 미분한 복소 멱급수에 쓰면 $f'(a) = g(a)$는 그 $0$번째 계수 $\iota(1)\,c_1 = c_1$이다.

**3의 증명.** (2)에 의해 $f$는 정칙함수이므로 복소 미분 (3)에 의해 연속함수이다.

**4의 증명.** 모든 복소수에서 수렴하는 복소 멱급수이면 복소 반지름 (7)의 (i)에 의해 $D = \mathbb{C}$이고, (2)에 의해 $f : \mathbb{C} \to \mathbb{C}$는 정칙함수, 곧 정함수이다. (1)의 (iii)에 의해 항별 미분한 복소 멱급수도 모든 복소수에서 수렴하는 복소 멱급수이고, (2)에 의해 $f'$은 그것이 $\mathbb{C}$ 위에 나타내는 함수이다. (2)를 항별 미분한 복소 멱급수에 쓰면 $f'$은 정칙함수, 곧 정함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 유한 개만 $0$이 아닌 복소 멱급수]
중심이 $1$이고 $c_0 = 2$, $c_1 = 0$, $c_2 = i$, $c_3 = -1$, $n \ge 4$에서 $c_n = 0$인 복소 멱급수를 봅시다. $r \ge 0$이면 $(|c_n| r^n)_{n \ge 0}$의 값은 $2$, $0$, $r^2$, $r^3$과 $0$뿐이어서 모두 $2 + r^2 + r^3$ 이하이므로 유계이고, 모든 복소수에서 수렴하는 복소 멱급수입니다. [[complex-series|복소 급수]]의 (4)를 $K = 3$에 쓰면 꼬리의 항이 모두 $0$이므로 그것이 나타내는 함수는
$$
f(z) = 2 + i(z - 1)^2 - (z - 1)^3
$$
입니다. 항별 미분한 복소 멱급수의 계수 $(n + 1)\,c_{n+1}$은 $n = 0, 1, 2$에서 $1 \cdot c_1 = 0$, $2c_2 = 2i$, $3c_3 = -3$이고 $n \ge 3$에서 $0$이므로, (2)에 의해
$$
f'(z) = 2i(z - 1) - 3(z - 1)^2
$$
입니다. 같은 것을 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)과 연쇄법칙 (5)로 구해도($z$에서의 값이 $z - 1$인 함수의 미분계수는 [[complex-derivative|복소 미분]]의 (5)에 의해 $1$이고, 합과 상수배는 법칙의 (1)) $(z - 1)^k$의 미분계수가 $k(z - 1)^{k-1}$이 되어 같은 식이 나옵니다. 예컨대 $f'(1 + i) = 2i \cdot i - 3i^2 = -2 + 3 = 1$이고, (2)의 $f'(1) = c_1 = 0$도 식과 맞습니다.
:::

:::counterexample[경계의 점에서 항별 미분한 급수가 발산하는 예]
중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (n^2)^{-1}$인 복소 멱급수를 봅시다. [[complex-series-examples|복소 급수의 예]]의 (4)에 의해 수렴 반지름은 $1$이고, $|z| \le 1$인 모든 $z$에서, 특히 경계의 점 $z = 1$에서도 절대수렴합니다.

항별 미분한 복소 멱급수의 계수는 $(n + 1)\,c_{n+1} = (n + 1)\bigl((n + 1)^2\bigr)^{-1} = (n + 1)^{-1}$이고, (1)에 의해 그 수렴 반지름도 $1$입니다. 그러나 $z = 1$에서 그 항은 $n$에서 $(n + 1)^{-1} \cdot 1^n = (n + 1)^{-1}$이고([[power-of-a-complex-number]]의 (3)의 (i)), 그것을 1부터 다시 번호 붙인 수열은 $j$번째 항이 $j^{-1}$인 수열이므로, [[harmonic-series-diverges|조화급수는 발산한다]]의 (2)와 [[complex-series|복소 급수]]의 (3)에 의해 항별 미분한 복소 멱급수는 $z = 1$에서 발산합니다. 원래 복소 멱급수는 $1$에서 수렴하지만, (2)가 말하는 것은 $D = B(0, 1)$ 위의 $f$뿐이고 $D$에 들지 않는 $1$에서는 미분에 대해 아무것도 말하지 않습니다.
:::

## 확인 질문

:::check[중심이 $0$이고 계수가 $c_n = i\,(1/2)^n$인 복소 멱급수가 나타내는 함수 $f$에 대하여, $f'(0)$과 $f'$을 나타내는 복소 멱급수의 수렴 반지름은 무엇인가?]
$f'(0) = i/2$이고 수렴 반지름은 $2$입니다. [[complex-series-examples|복소 급수의 예]]의 (6)에 의해 이 복소 멱급수의 수렴 반지름은 $2$이므로 $D = B(0, 2)$이고 (2)를 쓸 수 있습니다. (2)에 의해 $f'(0) = c_1 = i \cdot (1/2) = i/2$이고, $f'$은 항별 미분한 복소 멱급수가 나타내는 함수이며 (1)의 (iii)에 의해 그 수렴 반지름은 원래와 같은 $2$입니다.
:::

:::check[모든 복소수에서 수렴하는 복소 멱급수가 나타내는 함수 $f$의 도함수 $f'$은 다시 미분가능한가?]
그렇습니다. (4)에 의해 항별 미분한 복소 멱급수도 모든 복소수에서 수렴하는 복소 멱급수이고 $f'$은 그것이 나타내는 함수입니다. 그 복소 멱급수에 (2)를 다시 쓰면 $f'$은 정함수이고, $f'$의 도함수 $(f')'$은 항별 미분한 복소 멱급수를 다시 항별 미분한 복소 멱급수가 $\mathbb{C}$ 위에 나타내는 함수입니다.
:::
