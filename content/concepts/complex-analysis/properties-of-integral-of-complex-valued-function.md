---
title: 복소수값 함수의 적분의 성질
title_en: Properties of the Integral of a Complex-Valued Function
aliases: [복소수값 함수의 적분의 선형성, 복소수값 함수의 적분의 절댓값, 적분의 삼각부등식, linearity of the complex integral, absolute value of a complex integral]
kind: theorem
field: complex-analysis
msc: ["30", "26A42"]
level: undergrad
summary: "복소수값 함수의 적분은 복소수배와 합에 대해 선형이고 켤레와 바뀐다. 적분가능한 g 의 절댓값 |g| 도 적분가능하고 |∫g| ≤ ∫|g| 이며, |g| ≤ B 이면 |∫g| ≤ B × 구간의 길이이다. 방향 있는 꼴도 함께 진술하고, 연속이고 0 이상인 실함수의 적분이 0 이면 그 함수가 0 이라는 것을 진술한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, bounded-function, continuous-function, supremum-of-function-values, partition-of-an-interval, darboux-sums, linearity-and-order-of-finite-sums, riemann-integral, oriented-integral, integrability-criterion, linearity-of-the-integral, monotonicity-of-the-integral, continuous-implies-integrable, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-triangle-inequality, continuity-of-complex-operations, integral-of-complex-valued-function, antiderivative-and-integral-of-power, additivity-of-the-integral]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Definition and Basic Properties 절의 Proposition intprop 의 (a)와 (d), 그 증명, source/sec_intdef.ptx:301–350, 356–361, 417–443; 같은 절의 Example firstintexample, source/sec_intdef.ptx:72–90; Theorems from Calculus 부록의 Theorem thm_realintegralproperties 와 Theorem thm_realintegralupperbound, source/app_calculus.ptx:91–120; Mean-Value and Maximum/Minimum Principle 절의 Theorem harmonicmaxmin 의 증명, source/sec_harmonicmeanvalue.ptx:81–126"
    checked: original
    note: "출처 Proposition intprop(sec_intdef.ptx:301–350)은 경로 위에서 연속인 f, g 와 복소수 c 에 대해 (a) ∫_γ (f + cg) = ∫_γ f + c∫_γ g 와 (d) |∫_γ f| ≤ max_{z∈γ} |f(z)| · length(γ) 를 진술한다. 이 항목의 (1)과 (3)은 그 둘을 경로 없이 실변수 복소수값 함수의 적분에 대해 진술한 것이다. 출처는 (a)가 정의와 실수판 Theorem thm_realintegralproperties(app_calculus.ptx:91–102, 실수 상수 c 와 연속함수)에서 '바로 나온다'고 적는다(356–361줄). c 가 실수가 아니면 cg 의 실수부에 g 의 허수부가 섞이는데, 출처는 이를 따로 적지 않는다. 이 항목은 (1)의 증명에서 실수부와 허수부를 나눠 계산한다. 출처의 (d)의 증명(417–443줄)은 φ = Arg ∫_γ f 로 ∫_γ f = |∫_γ f| e^{iφ} 라 쓰고 e^{−iφ} 를 곱해 실수부를 취한 뒤 실수판 Theorem thm_realintegralupperbound(app_calculus.ptx:104–120: 연속인 f, g 에 |∫fg| ≤ ∫|fg| ≤ max|f| ∫|g|)를 쓴다. 이 사이트에는 주편각이 없으므로 이 항목은 φ 대신 단위 복소수 θ = conj(∫g)/|∫g| 를 곱한다. 곱해서 실수부를 취한다는 줄기는 출처와 같다. (2)의 |g| 의 적분가능성은 출처가 연속함수만 다루어 필요로 하지 않는 것이고, 이 항목은 적분가능한 g 일반으로 진술해 진동으로 증명한다. (4)는 출처의 (d)를 상수 B 로 누르는 꼴로 쓴 것이다. (5)의 증명의 줄기, 곧 연속인 함수가 한 점에서 어떤 값보다 작으면 그 둘레의 구간에서도 작으므로 적분을 셋으로 나누어 가운데 구간에서 진짜 부등식을 얻는 논법은 출처 Mean-Value and Maximum/Minimum Principle 절의 Theorem harmonicmaxmin 의 증명(source/sec_harmonicmeanvalue.ptx:81–126)이 조화함수의 원 위의 평균에 대해 쓰는 것과 같다. 예시 '(1 + i)t 의 적분과 선형성'의 함수 (1 + i)t 는 출처 Example firstintexample(sec_intdef.ptx:72–90)이 0 에서 1 + i 로 가는 선분의 매개화로 쓰는 γ(t) = t + it 와 같은 함수이다. 출처는 그 예에서 복소수 2(1 − i) 를 적분 밖으로 꺼내는데(sec_intdef.ptx:86–89), 이것이 (1)의 복소수배의 쓰임이다."
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.3소절 Complex-valued functions (p.142); 11.1.4소절 연습문제 11.1.9 (p.143); 11.8절 Fourier series, 11.8.1소절 Trigonometric polynomials (p.193)"
    checked: original
    note: "출처 11.1.3소절(p.142)은 적분을 실수부와 허수부로 정의하고, 그 자리에서는 성질을 진술하지 않는다. (1)의 켤레의 등식은 출처 11.8.1소절(p.193)이 실숫값 함수의 푸리에 계수에 대해 c_m 의 켤레가 c_{−m} 이라는 것을 보이면서 '적분이 실수부와 허수부에서 따로 되므로 켤레가 적분 안으로 들어간다'고 적는 것과 같은 내용이다. 출처 연습문제 11.1.9(p.143)는 ∫_0^1 f = 0 이지만 모든 t 에서 f(t) ≠ 0 인 연속인 f : [0, 1] → ℂ 를 찾게 하여 복소수값 함수에는 적분의 평균값 정리가 없음을 보이게 한다. 이 항목의 (5)는 0 이상인 실함수에 대한 것이고 그 연습문제와 다른 주장이다. 반례 '0 이상이 아닌 2t − 1'은 그 연습문제와 같은 발상(적분이 0 인데 0 이 아닌 함수)을 실함수에서 보인 것이다."
  - ref: lebl-basic-analysis
    loc: "5.2절(5.2.5 소절) 연습문제 5.2.5 (p.197)"
    checked: original
    note: "(5)는 출처의 연습문제 5.2.5(p.197)와 같은 내용이다. 출처는 그것을 연습문제로 남기고, 이 항목은 연속인 점 둘레의 작은 구간에서 아래로 누르는 증명을 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예·확인 질문의 계산, 반례 제목). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 함수 $g, h : S \to \mathbb{C}$($S \subseteq \mathbb{R}$)와 복소수 $w$에 대한 $\operatorname{Re} g$, $\operatorname{Im} g$, $|g| : S \to \mathbb{R}$와 $g + h$, $g - h$, $wg$, $\overline{g} : S \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 머리말의 것이다. 복소수값 함수의 적분가능, 적분 $\int_a^b g$, "사이에서 적분가능"과 방향 있는 적분 $\int_\alpha^\beta g$는 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 것이고, 실함수의 적분과 방향 있는 적분은 [[riemann-integral]]과 [[oriented-integral]]의 것이다. $[a, b]$의 분할과 다르부 합 $L(P, f)$, $U(P, f)$는 [[partition-of-an-interval]]과 [[darboux-sums]]의 것이다. 실함수의 연속은 [[continuous-function]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고, $I$는 구간이며, $\alpha$, $\beta$는 $I$의 원소이다.

1. (선형성과 켤레) $g, h : [a, b] \to \mathbb{C}$가 적분가능하고 $w$가 복소수이면 $g + h$, $g - h$, $wg$, $\overline{g}$도 적분가능하고
   $$
   \begin{gathered}
   \int_a^b (g + h) = \int_a^b g + \int_a^b h, \\
   \int_a^b (g - h) = \int_a^b g - \int_a^b h, \\
   \int_a^b wg = w \int_a^b g, \quad \int_a^b \overline{g} = \overline{\int_a^b g}
   \end{gathered}
   $$
   이다. $g, h : I \to \mathbb{C}$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $g + h$, $g - h$, $wg$, $\overline{g}$도 $\alpha$와 $\beta$ 사이에서 적분가능하고, $\int_a^b$를 $\int_\alpha^\beta$로 바꾼 네 등식이 성립한다.
2. (절댓값 함수의 적분가능성) $g : [a, b] \to \mathbb{C}$가 적분가능하면 $|g| : [a, b] \to \mathbb{R}$도 적분가능하다. 더 자세히, $[a, b]$의 모든 분할 $P$에서
   $$
   \begin{aligned}
   &U(P, |g|) - L(P, |g|) \\
   &\quad \le U(P, \operatorname{Re} g) - L(P, \operatorname{Re} g) \\
   &\qquad + U(P, \operatorname{Im} g) - L(P, \operatorname{Im} g)
   \end{aligned}
   $$
   이다. $g : I \to \mathbb{C}$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $|g|$도 $\alpha$와 $\beta$ 사이에서 적분가능하다.
3. (적분의 절댓값) $g : [a, b] \to \mathbb{C}$가 적분가능하면
   $$
   \left| \int_a^b g \right| \le \int_a^b |g|
   $$
   이다. $g : I \to \mathbb{C}$가 $\alpha$와 $\beta$ 사이에서 적분가능하면, $\alpha$와 $\beta$의 순서와 상관없이 $\left|\int_\alpha^\beta g\right| \le \left|\int_\alpha^\beta |g|\right|$이고, $\alpha \le \beta$이면 $\left|\int_\alpha^\beta g\right| \le \int_\alpha^\beta |g|$이다.
4. (상수로 누르기) $g : [a, b] \to \mathbb{C}$가 적분가능하고 실수 $B$가 $[a, b]$의 모든 $t$에서 $|g(t)| \le B$를 만족하면 $\left|\int_a^b g\right| \le B(b - a)$이다. $g : I \to \mathbb{C}$가 $\alpha$와 $\beta$ 사이에서 적분가능하고 실수 $B$가 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $|g(t)| \le B$를 만족하면 $\left|\int_\alpha^\beta g\right| \le B\,|\beta - \alpha|$이다.
5. (연속이고 $0$ 이상이며 적분이 $0$인 실함수) $u : [a, b] \to \mathbb{R}$가 연속함수이고 $[a, b]$의 모든 $t$에서 $0 \le u(t)$라 하자. $[a, b]$의 어떤 $t_0$에서 $0 < u(t_0)$이면 $0 < \int_a^b u$이다. 따라서 $\int_a^b u = 0$이면 $[a, b]$의 모든 $t$에서 $u(t) = 0$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention of writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the conjugate $\overline{z}$ and the modulus $|z|$ are those of their entries. For functions $g, h : S \to \mathbb{C}$ ($S \subseteq \mathbb{R}$) and a complex number $w$, the functions $\operatorname{Re} g$, $\operatorname{Im} g$, $|g| : S \to \mathbb{R}$ and $g + h$, $g - h$, $wg$, $\overline{g} : S \to \mathbb{C}$ are those of the opening paragraph of the entry on continuity of the complex operations. Integrability of complex-valued functions, the integral $\int_a^b g$, "integrable between", and the oriented integral $\int_\alpha^\beta g$ are those of the entry on the integral of a complex-valued function, and integrals and oriented integrals of real-valued functions are those of the entries on the Riemann integral and the oriented integral. Partitions of $[a, b]$ and Darboux sums $L(P, f)$, $U(P, f)$ are those of their entries. Continuity of real-valued functions is that of the entry on continuous functions. Below, $a$, $b$ are real numbers with $a < b$, $I$ is an interval, and $\alpha$, $\beta$ are elements of $I$.

1. (Linearity and conjugation) If $g, h : [a, b] \to \mathbb{C}$ are integrable and $w$ is a complex number, then $g + h$, $g - h$, $wg$, $\overline{g}$ are integrable and
   $$
   \begin{gathered}
   \int_a^b (g + h) = \int_a^b g + \int_a^b h, \\
   \int_a^b (g - h) = \int_a^b g - \int_a^b h, \\
   \int_a^b wg = w \int_a^b g, \quad \int_a^b \overline{g} = \overline{\int_a^b g}.
   \end{gathered}
   $$
   If $g, h : I \to \mathbb{C}$ are integrable between $\alpha$ and $\beta$, then $g + h$, $g - h$, $wg$, $\overline{g}$ are integrable between $\alpha$ and $\beta$, and the four equalities hold with $\int_a^b$ replaced by $\int_\alpha^\beta$.
2. (Integrability of the absolute value) If $g : [a, b] \to \mathbb{C}$ is integrable, then $|g| : [a, b] \to \mathbb{R}$ is integrable. More precisely, for every partition $P$ of $[a, b]$,
   $$
   \begin{aligned}
   &U(P, |g|) - L(P, |g|) \\
   &\quad \le U(P, \operatorname{Re} g) - L(P, \operatorname{Re} g) \\
   &\qquad + U(P, \operatorname{Im} g) - L(P, \operatorname{Im} g).
   \end{aligned}
   $$
   If $g : I \to \mathbb{C}$ is integrable between $\alpha$ and $\beta$, then so is $|g|$.
3. (Absolute value of the integral) If $g : [a, b] \to \mathbb{C}$ is integrable, then
   $$
   \left| \int_a^b g \right| \le \int_a^b |g|.
   $$
   If $g : I \to \mathbb{C}$ is integrable between $\alpha$ and $\beta$, then regardless of the order of $\alpha$ and $\beta$, $\left|\int_\alpha^\beta g\right| \le \left|\int_\alpha^\beta |g|\right|$, and if $\alpha \le \beta$, then $\left|\int_\alpha^\beta g\right| \le \int_\alpha^\beta |g|$.
4. (Bounding by a constant) If $g : [a, b] \to \mathbb{C}$ is integrable and a real number $B$ satisfies $|g(t)| \le B$ for all $t \in [a, b]$, then $\left|\int_a^b g\right| \le B(b - a)$. If $g : I \to \mathbb{C}$ is integrable between $\alpha$ and $\beta$ and a real number $B$ satisfies $|g(t)| \le B$ for all $t$ between $\alpha$ and $\beta$, then $\left|\int_\alpha^\beta g\right| \le B\,|\beta - \alpha|$.
5. (Continuous nonnegative real functions with integral $0$) Let $u : [a, b] \to \mathbb{R}$ be a continuous function with $0 \le u(t)$ for all $t \in [a, b]$. If $0 < u(t_0)$ for some $t_0 \in [a, b]$, then $0 < \int_a^b u$. Hence if $\int_a^b u = 0$, then $u(t) = 0$ for all $t \in [a, b]$.
:::

## 직관

적분은 실수부와 허수부를 따로 쌓은 것이므로, 더하기와 실수배는 두 좌표에서 따로 지켜집니다. 복소수배는 다릅니다. $i$를 곱하면 동서 좌표와 남북 좌표가 부호와 함께 자리를 바꾸므로([[complex-number]]의 (4)의 $\operatorname{Re}(zi) = -\operatorname{Im} z$, $\operatorname{Im}(zi) = \operatorname{Re} z$), $\int ig = i\int g$를 보려면 두 좌표를 함께 따져야 합니다((1)).

$g(t)$를 시각 $t$에서 평면 위를 움직이는 점의 속도로 보면, $\int g$는 처음 자리에서 끝 자리로 가는 변위이고 $\int |g|$는 움직인 거리입니다. $|\int g| \le \int |g|$는 "움직인 거리보다 처음과 끝 사이가 더 멀 수는 없다"는 부등식입니다. 실수라면 부호만 보면 되지만 복소수에는 부호가 없습니다. 그래서 $\int g \ne 0$이면 적분값 $\int g$가 가리키는 방향을 실수의 양의 방향으로 돌리는 단위 복소수 $\theta$를 곱하고, 돌린 뒤의 실수부를 실함수의 부등식으로 누릅니다((3)의 증명). 돌린 뒤에도 $|\theta g(t)| = |g(t)|$이므로 오른쪽은 바뀌지 않습니다.

(5)는 실함수에 관한 사실입니다. 연속인 $u$가 한 점 $t_0$에서 양수이면 그 둘레의 작은 구간에서도 $u(t_0)$의 절반보다 크고, 나머지 구간에서는 $u$가 $0$ 이상이므로 적분이 양수가 됩니다. 이 논법에서 연속은 작은 구간을 얻는 데, $0$ 이상이라는 가정은 나머지 구간의 적분이 음수가 아니라는 데 쓰입니다. $0$ 이상이라는 가정이 빠지면 결론이 성립하지 않을 수 있습니다(아래 반례).

## 증명

:::idea
(1)은 실수부와 허수부를 나눠 실함수의 선형성을 쓴다. (2)는 작은 구간마다 $|g|$의 진동을 실수부와 허수부의 진동의 합으로 누른다. (3)은 단위 복소수 $\theta$를 곱해 적분을 $0$ 이상인 실수로 만든 뒤 실수부의 부등식을 쓴다. (5)는 연속인 점 둘레의 작은 닫힌구간에서 $u$를 아래로 누른다.
:::

:::hint
(2)에서는 작은 구간 $D$의 두 점 $x$, $y$에서 $\bigl||g(x)| - |g(y)|\bigr| \le |\operatorname{Re} g(x) - \operatorname{Re} g(y)| + |\operatorname{Im} g(x) - \operatorname{Im} g(y)|$를 보이고 [[supremum-of-function-values|진동]]의 판정을 씁니다.
:::

:::hint
(3)에서 $\int_a^b g \ne 0$이면 $\theta = \overline{\int_a^b g} \,/\, \bigl|\int_a^b g\bigr|$로 둡니다. 그러면 $\theta \int_a^b g = \bigl|\int_a^b g\bigr|$입니다.
:::

:::proof
"복소수 (n)", "복소수체 (n)", "켤레 (n)", "절댓값 (n)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]]의 번호이고, "적분 정의 (n)"은 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 번호이다. "선형성 (n)", "단조성 (n)"은 [[linearity-of-the-integral]], [[monotonicity-of-the-integral]]의 번호이고, "적분 (n)", "방향 (n)"은 [[riemann-integral]], [[oriented-integral]]의 번호이다. 복소수 $p + qi$($p$, $q$ 실수)의 실수부가 $p$, 허수부가 $q$라는 것은 복소수체 (4)이다.

**1의 증명.** 복소수 (2)와 복소수체 (1)에 의해 $\operatorname{Re}(g \pm h) = \operatorname{Re} g \pm \operatorname{Re} h$이고 허수부도 같다. 선형성 (4)에 의해 이 실함수들은 적분가능하고 적분은 $\int \operatorname{Re} g \pm \int \operatorname{Re} h$, $\int \operatorname{Im} g \pm \int \operatorname{Im} h$이며, 이것은 복소수 (2)에 의해 $\int g \pm \int h$의 실수부와 허수부이다.

복소수배: $p = \operatorname{Re} w$, $q = \operatorname{Im} w$로 두면 복소수 (2)에 의해
$$
\begin{aligned}
\operatorname{Re}(wg) &= p \operatorname{Re} g - q \operatorname{Im} g, \\
\operatorname{Im}(wg) &= p \operatorname{Im} g + q \operatorname{Re} g
\end{aligned}
$$
이다. 선형성 (4)에 의해 두 실함수는 적분가능하고, $R = \int_a^b \operatorname{Re} g$, $J = \int_a^b \operatorname{Im} g$로 쓰면 적분은 $pR - qJ$와 $pJ + qR$이다. 적분 정의 (1)에 의해 $\int_a^b g$의 실수부는 $R$, 허수부는 $J$이므로 복소수 (2)에 의해 이것은 $w\int_a^b g$의 실수부와 허수부이다. 켤레: 켤레 (1)에 의해 $\operatorname{Re}\overline{g} = \operatorname{Re} g$, $\operatorname{Im}\overline{g} = (-1)\operatorname{Im} g$이고, 선형성 (4)에 의해 둘은 적분가능하며 적분은 $R$, $-J$이다. 켤레 (1)에 의해 $\overline{R + Ji} = R - Ji$이므로 $\int_a^b \overline{g} = \overline{\int_a^b g}$이다.

방향 있는 꼴은 같은 계산에서 선형성 (4)를 선형성 (6)으로 바꾼 것이다(켤레에서는 $k = -1$, 복소수배에서는 $k = p$, $k = q$와 합·차).

**2의 증명.** 적분 정의의 정의에 의해 $\operatorname{Re} g$, $\operatorname{Im} g$는 적분가능하므로 적분 (6)에 의해 유계이다. 모든 $t$에서 $|\operatorname{Re} g(t)| \le B_1$, $|\operatorname{Im} g(t)| \le B_2$라 하면 절댓값 (6)에 의해 $|g(t)| \le |\operatorname{Re} g(t)| + |\operatorname{Im} g(t)| \le B_1 + B_2$이고, $0 \le |g(t)|$(절댓값 (1))이므로 $\bigl||g(t)|\bigr| = |g(t)|$이며 $|g|$는 유계이다([[bounded-function]]의 정의).

$P$의 점을 $x_0, \dots, x_n$이라 하고 $1 \le j \le n$인 $j$를 하나 정해 $D = [x_{j-1}, x_j]$로 둔다. $D$는 공집합이 아니고 세 실함수 $|g|$, $\operatorname{Re} g$, $\operatorname{Im} g$는 유계이므로 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 단락에 의해 $D$ 위에서 유계이다. $r_1 = \sup \operatorname{Re} g(D) - \inf \operatorname{Re} g(D)$, $r_2 = \sup \operatorname{Im} g(D) - \inf \operatorname{Im} g(D)$로 두자. $D$의 원소 $x$, $y$에 대하여 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (4), 절댓값 (6), 복소수체 (1)에 의해
$$
\begin{aligned}
&\bigl|\,|g(x)| - |g(y)|\,\bigr| \le |g(x) - g(y)| \\
&\quad \le |\operatorname{Re} g(x) - \operatorname{Re} g(y)| \\
&\qquad + |\operatorname{Im} g(x) - \operatorname{Im} g(y)|
\end{aligned}
$$
이고, 같은 항목의 (4)의 마지막 문장에 의해 오른쪽은 $r_1 + r_2$ 이하이다. 따라서 $D$의 모든 $x$, $y$에서 $\bigl||g|(x) - |g|(y)\bigr| \le r_1 + r_2$이고, 같은 항목의 (4)의 (iii)에서 (i)로 가면 $\sup |g|(D) - \inf |g|(D) \le r_1 + r_2$이다. [[darboux-sums]]의 정의로 쓰면
$$
\begin{aligned}
&M_j(|g|) - m_j(|g|) \\
&\quad \le M_j(\operatorname{Re} g) - m_j(\operatorname{Re} g) \\
&\qquad + M_j(\operatorname{Im} g) - m_j(\operatorname{Im} g)
\end{aligned}
$$
이다. [[partition-of-an-interval]]의 (2)에 의해 $0 < \Delta x_j$이므로 [[order-properties-of-reals|순서 성질]]의 (4)의 (iii)에 의해 양쪽에 $\Delta x_j$를 곱해도 부등식이 유지된다. 이것이 $1 \le j \le n$인 모든 $j$에서 성립하므로 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (3), (1), (8)로 더하고 [[darboux-sums]]의 (3)을 세 함수에 쓰면 진술의 부등식이 나온다.

이제 양수 $\varepsilon$이 주어지면 [[integrability-criterion|리만 적분가능성의 판정]]의 (3)에 의해 $U(P, \operatorname{Re} g) - L(P, \operatorname{Re} g) < \varepsilon/2$와 $U(P, \operatorname{Im} g) - L(P, \operatorname{Im} g) < \varepsilon/2$가 함께 성립하는 분할 $P$가 있고, 앞의 부등식에 의해 $U(P, |g|) - L(P, |g|) < \varepsilon$이다. 같은 항목의 (1)에 의해 $|g|$는 적분가능하다.

방향 있는 꼴: $\alpha < \beta$이면 적분 정의 (4)의 (i)에 의해 $g$는 $[\alpha, \beta]$에서 적분가능하고, 제한 $g|_{[\alpha, \beta]}$에 앞의 결과를 쓰면 $|g|_{[\alpha, \beta]}| = |g|\,|_{[\alpha, \beta]}$(값이 같다)는 적분가능하므로 $|g|$는 $\alpha$와 $\beta$ 사이에서 적분가능하다. $\beta < \alpha$이면 $[\beta, \alpha]$에서 같고, $\alpha = \beta$이면 [[oriented-integral]]의 정의에 의해 적분가능하다.

**3의 증명.** $c = \int_a^b g$로 두자. (2)에 의해 $|g|$는 적분가능하고, 모든 $t$에서 $0 \le |g(t)|$이므로 단조성 (4)에 의해 $0 \le \int_a^b |g|$이다. $c = 0$이면 절댓값 (1)에 의해 $|c| = 0$이므로 결론이 성립한다.

$c \ne 0$이라 하자. 절댓값 (1)에 의해 $0 < |c|$이고, $\theta = \iota(|c|^{-1})\,\overline{c}$로 두면 절댓값 (3), (5), (2)에 의해 $|\theta| = |c|^{-1}|c| = 1$이다. 절댓값 (2)에 의해 $\overline{c}\,c = \iota(|c|^2)$이므로 복소수체 (2)에 의해
$$
\theta c = \iota(|c|^{-1})\,\iota(|c|^2) = \iota(|c|)
$$
이다. (1)에 의해 $\theta g$는 적분가능하고 $\int_a^b \theta g = \theta c = \iota(|c|)$이며, 적분 정의 (1)과 복소수체 (2)의 (ii)에 의해
$$
|c| = \operatorname{Re} \int_a^b \theta g = \int_a^b \operatorname{Re}(\theta g)
$$
이다. 모든 $t$에서 [[absolute-value]]의 (6)과 절댓값 (6), (3)에 의해 $\operatorname{Re}(\theta g(t)) \le |\operatorname{Re}(\theta g(t))| \le |\theta g(t)| = |\theta|\,|g(t)| = |g(t)|$이다. $\operatorname{Re}(\theta g)$와 $|g|$는 적분가능하므로 단조성 (3)에 의해 $|c| \le \int_a^b |g|$이다.

방향 있는 꼴: $\alpha < \beta$이면 적분 정의 (4)의 (i)과 앞의 결과를 $g|_{[\alpha, \beta]}$에 쓰면 $|\int_\alpha^\beta g| \le \int_\alpha^\beta |g|$이고, 오른쪽은 위에서처럼 $0$ 이상이므로 [[absolute-value]]의 정의에 의해 $\int_\alpha^\beta |g| = |\int_\alpha^\beta |g||$이다. $\alpha = \beta$이면 양쪽이 $0$이다. $\beta < \alpha$이면 적분 정의 (4)의 (i)과 절댓값 (2)의 $|-z| = |z|$에 의해 $|\int_\alpha^\beta g| = |\int_\beta^\alpha g| \le \int_\beta^\alpha |g|$이고, [[oriented-integral]]의 정의에 의해 $\int_\alpha^\beta |g| = -\int_\beta^\alpha |g|$이며 $\int_\beta^\alpha |g| \ge 0$이므로 [[absolute-value]]의 정의에 의해 $\int_\beta^\alpha |g| = |\int_\alpha^\beta |g||$이다.

**4의 증명.** (3)과 (2)에 의해 $|\int_a^b g| \le \int_a^b |g|$이고, 모든 $t$에서 $|g|(t) \le B$이므로 적분 (2)의 (ii)에 의해 $\int_a^b |g| \le B(b - a)$이다. 방향 있는 꼴: (2)에 의해 $|g|$는 $\alpha$와 $\beta$ 사이에서 적분가능하다. $\alpha$는 $\alpha$와 $\beta$ 사이에 있으므로 $0 \le |g(\alpha)| \le B$이다. 방향 (3)을 $|g|$, $k = 0$, $\varepsilon = B$에 쓰면 $\alpha$와 $\beta$ 사이의 모든 $t$에서 $\bigl||g(t)|\bigr| = |g(t)| \le B$이므로 $|\int_\alpha^\beta |g|| \le B|\beta - \alpha|$이고, (3)과 합치면 결론이 나온다.

**5의 증명.** $\eta = u(t_0)/2$로 두면 $0 < \eta < u(t_0)$이다. [[continuous-function]]의 (7)에 의해 양수 $\delta$가 있어 $t \in [a, b]$이고 $|t - t_0| < \delta$인 모든 $t$에서 $\eta < u(t)$이다. [[absolute-value]]의 두 수의 최대와 최소로 $c = \max\{a, t_0 - \delta/2\}$, $d = \min\{b, t_0 + \delta/2\}$로 두자. $a \le t_0$, $t_0 - \delta/2 < t_0$, $t_0 \le b$, $t_0 < t_0 + \delta/2$이므로 [[absolute-value]]의 (10)에 의해 $a \le c \le t_0 \le d \le b$이다.

$c < d$이다. $c = d$라면 $c = t_0 = d$이다. [[absolute-value]]의 (10)에 의해 $c$는 $a$이거나 $t_0 - \delta/2$인데, $c = t_0$이고 $t_0 - \delta/2 < t_0$이므로 $c = a$이고, 같은 까닭으로 $d = b$이다. 그러면 $a = t_0 = b$가 되어 $a < b$와 어긋난다.

$[c, d]$의 모든 $t$에서 $t_0 - \delta/2 \le c \le t \le d \le t_0 + \delta/2$이므로 $|t - t_0| \le \delta/2 < \delta$이고 $\eta < u(t)$이다. [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 $u$는 적분가능하고, [[additivity-of-the-integral|적분의 덧셈성]]의 (2)에 의해 $[c, d]$에서 적분가능하므로 적분 (2)의 (ii)를 $u|_{[c, d]}$에 쓰면 $\eta(d - c) \le \int_c^d u$이다. $u$는 $[a, b]$에서 적분가능하므로, 방향 (2)를 세 점 $a$, $c$, $b$에 쓰고 다시 세 점 $c$, $d$, $b$에 쓰면($\int_a^b u = \int_a^c u + \int_c^b u$, $\int_c^b u = \int_c^d u + \int_d^b u$)
$$
\int_a^b u = \int_a^c u + \int_c^d u + \int_d^b u
$$
이다. $a \le c$이고 $d \le b$이므로 단조성 (6)의 (i)을 값이 $0$인 상수함수와 $u$에 쓰면 방향 (4)에 의해 $0 \le \int_a^c u$이고 $0 \le \int_d^b u$이다. 따라서 $0 < \eta(d - c) \le \int_a^b u$이다. 마지막 문장은 이것의 대우이다. $\blacksquare$
:::

## 예시와 반례

:::example[(1 + i)t 의 적분과 선형성]
$\int_0^1 t\,dt = 1/2$이므로([[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)) [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (2)에 의해 $\int_0^1 \iota(t)\,dt = 1/2$이고, (1)에 의해
$$
\begin{aligned}
\int_0^1 (1 + i)t\,dt &= (1 + i) \cdot \frac{1}{2} \\
&= \frac{1}{2} + \frac{1}{2} i
\end{aligned}
$$
입니다. 정의로 확인하면 실수부와 허수부가 둘 다 $t$이므로 둘 다 $1/2$입니다. 켤레를 취한 함수 $(1 - i)t$의 적분은 (1)에 의해 $\overline{\tfrac{1}{2} + \tfrac{1}{2} i} = \tfrac{1}{2} - \tfrac{1}{2} i$입니다.
:::

:::example[t + (1 − t)i 의 적분을 상수로 누르기]
$t$에서의 값이 $t + (1 - t)i$인 함수 $g : [0, 1] \to \mathbb{C}$는 실수부 $t$와 허수부 $1 - t$가 적분가능하므로 적분가능하고, $\int_0^1 g = \tfrac{1}{2} + \tfrac{1}{2} i$입니다. $[0, 1]$의 $t$에서 $|g(t)|^2 = t^2 + (1 - t)^2 = 1 - 2t(1 - t) \le 1$이므로($0 \le t$, $0 \le 1 - t$) $|g(t)| \le 1$이고, (4)에 의해 $|\int_0^1 g| \le 1$입니다. 실제 값은 $|\tfrac{1}{2} + \tfrac{1}{2} i| = \sqrt{1/2}$로 $1$보다 작습니다.
:::

:::counterexample[0 이상이 아닌 2t − 1]
$u(t) = 2t - 1$로 정한 $u : [0, 1] \to \mathbb{R}$는 연속함수이고 $\int_0^1 u = 2 \cdot \tfrac{1}{2} - 1 = 0$입니다([[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)). 그러나 $u(1) = 1 \ne 0$입니다. $u(0) = -1 < 0$이므로 (5)의 가정 "모든 $t$에서 $0 \le u(t)$"가 빠졌고, 그 가정 없이는 (5)의 결론이 성립하지 않을 수 있습니다. 같은 함수를 $\iota$로 옮긴 $\iota \circ u$에서는 $|\int_0^1 \iota \circ u| = 0$이고 $\int_0^1 |u| = 1/2$이어서 (3)의 부등식이 등식이 아닙니다($\int_0^1 |2t - 1|\,dt$는 $[0, 1/2]$과 $[1/2, 1]$로 나누어 각각 $1/4$입니다).
:::

## 확인 질문

:::check[연속함수 $u : [0, 2] \to \mathbb{R}$가 모든 $t$에서 $0 \le u(t)$이고 $\int_0^2 u = 0$이면 $u(1)$은?]
(5)에 의해 $[0, 2]$의 모든 $t$에서 $u(t) = 0$이므로 $u(1) = 0$입니다.
:::

:::check[적분가능한 $g : [1, 4] \to \mathbb{C}$가 모든 $t$에서 $|g(t)| \le 2$를 만족하면 $\left|\int_4^1 g\right|$는 어느 범위에 있는가?]
$4$와 $1$ 사이에 있는 모든 $t$는 $[1, 4]$의 원소이므로 (4)의 방향 있는 꼴에 의해 $\left|\int_4^1 g\right| \le 2\,|1 - 4| = 6$입니다. 곧 $0 \le \left|\int_4^1 g\right| \le 6$입니다.
:::
