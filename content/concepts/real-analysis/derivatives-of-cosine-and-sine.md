---
title: 코사인과 사인의 도함수
title_en: Derivatives of Cosine and Sine
aliases: [코사인의 도함수, 사인의 도함수, 코사인과 사인의 어림, derivative of sine, derivative of cosine, Taylor estimates for sine and cosine]
kind: theorem
field: real-analysis
msc: ["26A09", "26A24"]
level: undergrad
summary: cos 와 sin 은 미분가능하고 cos′ = −sin, sin′ = cos 이며, 무한 번 미분가능하고 고계 도함수는 cos, −sin, −cos, sin 을 되풀이한다. |cos x − cos y| ≤ |x − y|, |sin x − sin y| ≤ |x − y| 이고, 테일러 정리로 1 − x²/2 ≤ cos x ≤ 1 − x²/2 + x⁴/24, 0 ≤ x 에서 x − x³/6 ≤ sin x ≤ x 이다. 특히 cos 1 ≥ 1/2, cos 2 ≤ −1/3 이고, 0 < x ≤ 2 이면 sin x > 0 이다.
requires: [mathematical-induction, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, continuous-function, derivative, differentiable-implies-continuous, derivative-rules, mean-value-theorem, division-theorem, series-indexed-from-zero, factorial-from-zero, power-series, radius-of-convergence, termwise-differentiation-of-power-series, algebra-of-power-series, higher-derivative, taylor-polynomial, taylor-theorem, complex-number, complex-field, power-of-a-complex-number, cosine-and-sine, power-series-of-cosine-and-sine]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (viii)(ix) (p.165)와 그 증명 (p.166); 11.4.4절 Exercises, Exercise 11.4.2 (p.168)
    checked: original
    note: "출처의 Proposition 11.4.2 (viii)(p.165)는 실수 x 에서 cos 의 도함수가 −sin(x), sin 의 도함수가 cos(x) 라는 것이고, 증명(p.166)은 'We leave the computation of the derivatives to the reader as exercises' 라고 적으며, Exercise 11.4.2(p.168)가 '멱급수를 써서' 이것을 보이라고 한다. 이 항목의 (1)은 그 연습문제와 같은 방법(항별 미분)이다. (3)의 0 ≤ x 에서 sin x ≤ x 는 출처 (ix)이고, 출처는 f(x) = x − sin(x) 의 도함수 1 − cos(x) ≥ 0 으로 f 가 증가함을 써서 보인다(p.166). 이 항목은 (3)을 평균값 정리로 얻은 |sin x − sin 0| ≤ |x − 0| 에서 얻는다. (2)의 고계 도함수의 식과 (4)의 테일러 어림은 뒤 항목에서 쓰도록 진술에 둔 것이다. 출처는 (x)의 증명(p.166)에서 cos 가 양의 근을 갖는다는 것을 평균값 정리의 부등식 2 ≥ cos(a) − cos(y) = sin(c)(y − a) 로 보인다."
  - ref: lebl-basic-analysis
    loc: 3.2.1절 Definition and basic properties, Example 3.2.6 (p.124); 3.4.3절 Lipschitz continuous functions, Example 3.4.9 (p.141); 4.1.3절 Exercises, Exercise 4.1.6–4.1.7 (p.160); 4.2.6절 Exercises, Exercise 4.2.3 (p.169); 4.3.2절 Taylor's theorem, Figure 4.8 앞뒤 (p.171–172)
    checked: original
    note: "Lebl I 의 Example 3.2.6(p.124)은 |sin(x)| ≤ |x|, |cos(x)| ≤ 1, |sin(x)| ≤ 1 을 'simple facts' 로 쓰고 합을 곱으로 바꾸는 항등식으로 |sin(x) − sin(c)| ≤ |x − c|, |cos(x) − cos(c)| ≤ |x − c| 를 얻으며, Example 3.4.9(p.141)는 이것으로 사인과 코사인이 K = 1 인 립시츠 연속이라고 적는다. 이 항목의 (3)은 같은 부등식이고, 이 항목은 평균값 정리로 증명한다. 그 방법은 Exercise 4.2.3(p.169)이 보이라고 하는 '도함수가 유계이면 립시츠 연속'과 같은 발상이다. Exercise 4.1.6(p.160)은 |x − sin(x)| ≤ x² 을 가정하고 sin 의 0 에서의 도함수를 구하라고 하며, Exercise 4.1.7 은 합을 곱으로 바꾸는 항등식으로 sin 의 도함수가 cos 임을 보이라고 한다. 확인 질문 '(4)의 (i)를 $n = 1$에 쓰면 $|\\sin x - x|$를 무엇으로 누를 수 있는가?'의 답 |sin x − x| ≤ |x|²/2 는 Exercise 4.1.6 이 가정하는 부등식보다 강하다. 4.3.2절(p.171–172)은 Figure 4.8 에서 사인의 0 에서의 홀수 차 테일러 다항식을 그리고 'The even-degree terms are all zero, as even derivatives of sine are again sines, which are zero at the origin' 라고 적는다. 이것은 (2)의 사인의 고계 도함수의 표, 예시 '네 번 미분하면 제자리', (4)의 (i)의 sin 쪽과 같은 내용이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 어림 (4)의 증명 통독, cos 1·cos 2·x/3 ≤ sin x 와 cos(1/2) 예의 값 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
코사인 $\cos$와 사인 $\sin$은 [[cosine-and-sine|코사인과 사인]]의 것이고, 계수 $c_n$, $s_n$은 [[power-series-of-cosine-and-sine|코사인과 사인의 멱급수]]의 것이다. 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]], 연속함수는 [[continuous-function]], 실함수의 상수배와 합은 [[real-valued-function]]의 것이다. $n$번 미분가능, 무한 번 미분가능, $k$계 도함수 $f^{(k)}$는 [[higher-derivative]], 테일러 다항식 $T_n^{x_0} f$는 [[taylor-polynomial]]의 것이다. 허수단위 $i$와 $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 복소수의 거듭제곱 $i^n$은 [[power-of-a-complex-number]], 실수의 거듭제곱은 [[power-of-a-real-number]], $0$ 이상인 정수의 계승은 [[factorial-from-zero]], 실수의 절댓값은 [[absolute-value]]의 것이다. $-\sin$은 실함수 $(-1)\sin$, 곧 $x$에서의 값이 $-\sin x$인 함수 $\mathbb{R} \to \mathbb{R}$이고, $-\cos$도 같다.

아래에서 $x$, $y$는 실수이다.

1. (도함수) $\cos$와 $\sin$은 미분가능한 함수이고 $\cos' = -\sin$, $\sin' = \cos$이다. 곧 모든 실수 $x$에서 $\cos'(x) = -\sin x$이고 $\sin'(x) = \cos x$이다. 따라서 $\cos$와 $\sin$은 연속함수이다.
2. (고계 도함수) $\cos$와 $\sin$은 무한 번 미분가능하고, $0$ 이상인 모든 정수 $n$과 모든 실수 $x$에서
   $$
   \begin{aligned}
   \cos^{(n)}(x) &= \operatorname{Re}(i^n) \cos x \\
   &\qquad - \operatorname{Im}(i^n) \sin x, \\
   \sin^{(n)}(x) &= \operatorname{Im}(i^n) \cos x \\
   &\qquad + \operatorname{Re}(i^n) \sin x
   \end{aligned}
   $$
   이다. 따라서 $n = 4k + r$, $0 \le r < 4$인 정수 $k$, $r$에 대하여 다음과 같다.

   | $r$ | $\cos^{(n)}$ | $\sin^{(n)}$ |
   |---|---|---|
   | $0$ | $\cos$ | $\sin$ |
   | $1$ | $-\sin$ | $\cos$ |
   | $2$ | $-\cos$ | $-\sin$ |
   | $3$ | $\sin$ | $-\cos$ |

   특히 $\cos^{(n)}(0) = \operatorname{Re}(i^n)$이고 $\sin^{(n)}(0) = \operatorname{Im}(i^n)$이며, 모든 실수 $t$에서 $|\cos^{(n)}(t)| \le 1$이고 $|\sin^{(n)}(t)| \le 1$이다.
3. (두 점의 차) $|\cos x - \cos y| \le |x - y|$이고 $|\sin x - \sin y| \le |x - y|$이다. 특히 $|\sin x| \le |x|$이고, $0 \le x$이면 $\sin x \le x$이다.
4. (테일러 다항식과 어림)
   - (i) $0$ 이상인 모든 정수 $n$과 모든 실수 $x$에서 $T_n^{0} \cos(x) = \sum_{k=0}^{n} c_k x^k$이고 $T_n^{0} \sin(x) = \sum_{k=0}^{n} s_k x^k$이며
     $$
     \begin{aligned}
     &\bigl| \cos x - T_n^{0} \cos(x) \bigr| \\
     &\qquad \le \frac{|x|^{n+1}}{(n + 1)!}, \\
     &\bigl| \sin x - T_n^{0} \sin(x) \bigr| \\
     &\qquad \le \frac{|x|^{n+1}}{(n + 1)!}
     \end{aligned}
     $$
     이다.
   - (ii) 모든 실수 $x$에서
     $$
     \begin{aligned}
     1 - \frac{x^2}{2} &\le \cos x \\
     &\le 1 - \frac{x^2}{2} + \frac{x^4}{24}
     \end{aligned}
     $$
     이다.
   - (iii) $0 \le x$이면
     $$
     x - \frac{x^3}{6} \le \sin x \le x
     $$
     이다.
   - (iv) $\cos 1 \ge 1/2$이고 $\cos 2 \le -1/3$이다. $0 < x \le 2$이면 $x/3 \le \sin x$이고, 따라서 $0 < \sin x$이다.
:::

:::english
The cosine $\cos$ and the sine $\sin$ are those of the entry on cosine and sine, and the coefficients $c_n$, $s_n$ are those of the entry on the power series of cosine and sine. Differentiability, the derivative at a point, differentiable functions and derivatives are those of the entry on the derivative; continuous functions are those of their entry; constant multiples and sums of real-valued functions are those of the entry on real-valued functions. Being $n$ times differentiable, being infinitely differentiable, and the $k$th derivative $f^{(k)}$ are those of the entry on higher-order derivatives, and the Taylor polynomial $T_n^{x_0} f$ is that of its entry. The imaginary unit $i$, $\operatorname{Re}$, and $\operatorname{Im}$ are those of the entry on complex numbers; powers $i^n$ are those of the entry on powers of complex numbers; powers of real numbers, factorials of nonnegative integers, and absolute values of real numbers are those of their entries. $-\sin$ denotes the real-valued function $(-1)\sin$, that is, the function $\mathbb{R} \to \mathbb{R}$ whose value at $x$ is $-\sin x$; likewise for $-\cos$.

Below, $x$ and $y$ are real numbers.

1. (Derivatives) $\cos$ and $\sin$ are differentiable functions with $\cos' = -\sin$ and $\sin' = \cos$; that is, $\cos'(x) = -\sin x$ and $\sin'(x) = \cos x$ for every real number $x$. Hence $\cos$ and $\sin$ are continuous functions.
2. (Higher derivatives) $\cos$ and $\sin$ are infinitely differentiable, and for every nonnegative integer $n$ and every real number $x$,
   $$
   \begin{aligned}
   \cos^{(n)}(x) &= \operatorname{Re}(i^n) \cos x \\
   &\qquad - \operatorname{Im}(i^n) \sin x, \\
   \sin^{(n)}(x) &= \operatorname{Im}(i^n) \cos x \\
   &\qquad + \operatorname{Re}(i^n) \sin x.
   \end{aligned}
   $$
   Hence, for integers $k$, $r$ with $n = 4k + r$ and $0 \le r < 4$:

   | $r$ | $\cos^{(n)}$ | $\sin^{(n)}$ |
   |---|---|---|
   | $0$ | $\cos$ | $\sin$ |
   | $1$ | $-\sin$ | $\cos$ |
   | $2$ | $-\cos$ | $-\sin$ |
   | $3$ | $\sin$ | $-\cos$ |

   In particular $\cos^{(n)}(0) = \operatorname{Re}(i^n)$ and $\sin^{(n)}(0) = \operatorname{Im}(i^n)$, and $|\cos^{(n)}(t)| \le 1$ and $|\sin^{(n)}(t)| \le 1$ for every real number $t$.
3. (Differences at two points) $|\cos x - \cos y| \le |x - y|$ and $|\sin x - \sin y| \le |x - y|$. In particular $|\sin x| \le |x|$, and if $0 \le x$ then $\sin x \le x$.
4. (Taylor polynomials and estimates)
   - (i) For every nonnegative integer $n$ and every real number $x$, $T_n^{0} \cos(x) = \sum_{k=0}^{n} c_k x^k$ and $T_n^{0} \sin(x) = \sum_{k=0}^{n} s_k x^k$, and
     $$
     \begin{aligned}
     &\bigl| \cos x - T_n^{0} \cos(x) \bigr| \\
     &\qquad \le \frac{|x|^{n+1}}{(n + 1)!}, \\
     &\bigl| \sin x - T_n^{0} \sin(x) \bigr| \\
     &\qquad \le \frac{|x|^{n+1}}{(n + 1)!}.
     \end{aligned}
     $$
   - (ii) For every real number $x$,
     $$
     \begin{aligned}
     1 - \frac{x^2}{2} &\le \cos x \\
     &\le 1 - \frac{x^2}{2} + \frac{x^4}{24}.
     \end{aligned}
     $$
   - (iii) If $0 \le x$, then
     $$
     x - \frac{x^3}{6} \le \sin x \le x.
     $$
   - (iv) $\cos 1 \ge 1/2$ and $\cos 2 \le -1/3$. If $0 < x \le 2$, then $x/3 \le \sin x$, and hence $0 < \sin x$.
:::

## 직관

코사인과 사인은 모든 실수에서 수렴하는 멱급수가 나타내는 함수이므로, 멱급수를 항마다 미분해도 됩니다. 계수를 보면 미분이 두 급수를 맞바꾼다는 것을 알 수 있습니다. 사인의 급수 $x - x^3/6 + x^5/120 - \cdots$를 항마다 미분하면 $1 - x^2/2 + x^4/24 - \cdots$, 곧 코사인의 급수이고, 코사인의 급수를 미분하면 $-x + x^3/6 - \cdots$, 곧 사인의 급수에 $-1$을 곱한 것입니다. 계수로는 $(n + 1)c_{n+1} = -s_n$, $(n + 1)s_{n+1} = c_n$입니다.

복소수로 보면 더 짧습니다. $\cos x + i \sin x = \exp(ix)$이고 미분은 대략 "$i$를 한 번 곱하는 일"에 해당합니다. $i$를 곱하면 실수부 자리에 허수부에 $-1$을 곱한 것이 오고 허수부 자리에 실수부가 옵니다. 그것이 $\cos' = -\sin$, $\sin' = \cos$이고, $i$를 네 번 곱하면 제자리이므로 고계 도함수가 네 번마다 되풀이됩니다((2)의 표). 다만 이 강의는 복소수값 함수의 미분을 쓰지 않으므로(그것은 뒤의 강의 "복소해석"에서 정의합니다), 이 문단은 (2)의 식이 $\operatorname{Re}(i^n)$과 $\operatorname{Im}(i^n)$으로 적히는 까닭을 말할 뿐 증명은 아닙니다. 증명은 실수의 미분으로 합니다.

(4)의 (ii)–(iv)는 테일러 정리에서 나머지항의 부호를 읽은 것입니다. $\cos x = 1 - \cos(\xi) x^2 / 2$인 $\xi$가 있고 $\cos \xi \le 1$이므로 $\cos x \ge 1 - x^2/2$입니다. 이런 어림 세 개가 $\cos 1$이 양수, $\cos 2$가 음수, $(0, 2]$에서 $\sin$이 양수라는 것을 수치로 확정해 줍니다. $x = 0$에서는 (ii)와 (iii)의 부등식이 모두 등호입니다.

## 증명

:::idea
(1)은 멱급수의 항별 미분이고, (2)는 (1)과 $n$에 대한 귀납이다. (3)은 평균값 정리와 $|\sin|, |\cos| \le 1$, (4)는 테일러 정리를 $0$에서 쓰고 (2)로 도함수의 값을 넣은 것이다.
:::

:::hint
$(n + 1) c_{n+1} = (n + 1)\operatorname{Re}(i^{n+1})\bigl((n + 1)!\bigr)^{-1} = \operatorname{Re}(i^{n+1})\,(n!)^{-1}$이고, [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)의 마지막 문장에 의해 $\operatorname{Re}(i^{n+1}) = -\operatorname{Im}(i^n)$입니다.
:::

:::hint
(4)의 (ii)의 왼쪽 부등식은 [[taylor-theorem|테일러 정리]]의 (3)을 $n = 1$에, 오른쪽은 $n = 3$에 씁니다. 나머지항의 도함수는 (2)의 표에서 각각 $-\cos$와 $\cos$입니다.
:::

:::proof
"멱급수의 (1)"처럼 쓴 것은 [[power-series-of-cosine-and-sine]], "코사인과 사인의 (4)"는 [[cosine-and-sine]], "거듭제곱의 (6)"은 [[power-of-a-complex-number]], "고계 도함수의 (2)"는 [[higher-derivative]], "테일러 정리의 (3)"은 [[taylor-theorem]], "순서 성질의 (4)"는 [[order-properties-of-reals]], "절댓값의 (3)"은 [[absolute-value]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 아래에서 $a_n = \operatorname{Re}(i^n)$, $b_n = \operatorname{Im}(i^n)$으로 둔다. 거듭제곱의 (6)의 마지막 문장에 의해 $0$ 이상인 모든 정수 $n$에서
$$
a_{n+1} = -b_n, \qquad b_{n+1} = a_n
$$
이다(가). 멱급수의 정의에 의해 $c_n = a_n (n!)^{-1}$, $s_n = b_n (n!)^{-1}$이다.

**1의 증명.** 멱급수의 (2)에 의해 중심이 $0$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수는 모든 실수에서 수렴하는 멱급수이고, [[radius-of-convergence]]의 (7)의 $I = \mathbb{R}$ 위에 나타내는 함수가 $\cos$이다. $0$ 이상인 정수 $n$에서 [[factorial-from-zero]]의 (4)의 $(n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}$과 (가)에 의해
$$
\begin{aligned}
&(n + 1)\, c_{n+1} \\
&\quad = a_{n+1}\, (n + 1)\bigl((n + 1)!\bigr)^{-1} \\
&\quad = -b_n\, (n!)^{-1} = -s_n
\end{aligned}
$$
이다((K1), (K2), (K9)). 따라서 이 멱급수를 항별 미분한 멱급수는 중심이 $0$이고 계수가 $(-s_n)_{n \ge 0}$인 멱급수이다. [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 (2)에 의해 $\cos$는 미분가능한 함수이고, 모든 실수 $x$에서 $\cos'(x)$는 이 멱급수의 $x$에서의 합이다. (K9)에 의해 $-s_n = (-1)s_n$이므로 이것은 $s$의 멱급수의 상수배의 멱급수이고, [[algebra-of-power-series|멱급수의 연산]]의 (1)과 멱급수의 (2)에 의해 그 합은 $(-1)\sum_{n=0}^{\infty} s_n x^n = -\sin x$이다. 같은 방법으로 (가)의 $a_n = b_{n+1}$에 의해 $(n + 1)\, s_{n+1} = b_{n+1}(n!)^{-1} = a_n (n!)^{-1} = c_n$이므로, $s$의 멱급수를 항별 미분한 멱급수는 $c$의 멱급수이고, 같은 (2)에 의해 $\sin$은 미분가능한 함수이며 $\sin'(x) = \sum_{n=0}^{\infty} c_n x^n = \cos x$이다. 두 함수가 연속함수라는 것은 [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)이다.

**2의 증명.** $0$ 이상인 정수 $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 다음 $P(n)$을 보인다: $\cos$와 $\sin$은 $n$번 미분가능하고, 모든 실수 $x$에서 $\cos^{(n)}(x) = a_n \cos x - b_n \sin x$이고 $\sin^{(n)}(x) = b_n \cos x + a_n \sin x$이다.

$n = 0$: 고계 도함수의 정의에 의해 모든 함수는 $0$번 미분가능하고, 고계 도함수의 (1)에 의해 $\cos^{(0)} = \cos$, $\sin^{(0)} = \sin$이다. 거듭제곱의 (6)에 의해 $i^0 = 1$이므로 $a_0 = 1$, $b_0 = 0$이고, (K4)와 (K9)에 의해 $1 \cdot \cos x - 0 \cdot \sin x = \cos x$, $0 \cdot \cos x + 1 \cdot \sin x = \sin x$이다.

$P(n)$이 성립한다고 하자. [[real-valued-function|실함수]]의 (4)의 상수배와 합으로 $g = a_n \cos + (-b_n)\sin$을 정하면 귀납 가정과 실함수의 (2)에 의해 $\cos^{(n)} = g$이다. (1)과 [[derivative-rules|미분법]]의 (6)에 의해 $g$는 미분가능한 함수이고, 모든 실수 $x$에서
$$
\begin{aligned}
g'(x) &= a_n(-\sin x) + (-b_n)\cos x \\
&= -b_n \cos x - a_n \sin x \\
&= a_{n+1} \cos x - b_{n+1} \sin x
\end{aligned}
$$
이다. 마지막 줄은 (가)이다. 고계 도함수의 (2)에 의해 $\cos$는 $n + 1$번 미분가능하고, 그 (1)에 의해 $\cos^{(n+1)} = (\cos^{(n)})' = g'$이다. 마찬가지로 $h = b_n \cos + a_n \sin$이면 $\sin^{(n)} = h$이고 $h$는 미분가능한 함수이며
$$
\begin{aligned}
h'(x) &= b_n(-\sin x) + a_n \cos x \\
&= a_n \cos x - b_n \sin x \\
&= b_{n+1} \cos x + a_{n+1} \sin x
\end{aligned}
$$
이므로 $\sin$은 $n + 1$번 미분가능하고 $\sin^{(n+1)} = h'$이다. 따라서 $P(n + 1)$이 성립한다.

모든 $n$에서 $P(n)$이 성립하므로 두 함수는 무한 번 미분가능하다. 표는 거듭제곱의 (6)의 표에서 $r$에 따른 $(a_n, b_n)$이 $(1, 0)$, $(0, 1)$, $(-1, 0)$, $(0, -1)$이라는 것을 넣은 것이다(정수 $k$, $r$은 [[division-theorem|나눗셈 정리]]로 잡는다). 예컨대 $r = 1$이면 $\cos^{(n)}(x) = 0 \cdot \cos x - 1 \cdot \sin x = -\sin x$이다. $x = 0$에서는 코사인과 사인의 (2)에 의해 $\cos^{(n)}(0) = a_n \cdot 1 - b_n \cdot 0 = a_n$, $\sin^{(n)}(0) = b_n$이다. 끝으로 표에 의해 $\cos^{(n)}(t)$와 $\sin^{(n)}(t)$는 $\cos t$, $-\cos t$, $\sin t$, $-\sin t$ 가운데 하나이므로, 절댓값의 (3)과 코사인과 사인의 (4)에 의해 절댓값이 $1$ 이하이다.

**3의 증명.** 코사인 쪽을 보인다. $x = y$이면 양쪽이 $0$이다. 절댓값의 (3)에 의해 두 쪽은 $x$와 $y$를 맞바꾸어도 같으므로 $x < y$라 해도 된다. [[interval]]의 (1)에 의해 $[x, y]$는 구간이고 $\mathbb{R}$의 부분집합이다. (1)에 의해 $\cos$는 $[x, y]$의 모든 점에서 미분가능하므로 [[derivative]]의 (2)에 의해 제한 $\cos|_{[x, y]}$는 미분가능한 함수이고 모든 $t \in [x, y]$에서 $(\cos|_{[x, y]})'(t) = \cos'(t) = -\sin t$이다. 그래서 미분가능하면 연속의 (2)에 의해 $\cos|_{[x, y]}$는 연속함수이고 열린구간 $(x, y)$에서 미분가능하다. [[mean-value-theorem|평균값 정리]]에 의해 $\cos y - \cos x = -\sin(\xi)\,(y - x)$인 $\xi \in (x, y)$가 있다. 절댓값의 (4), (3)과 코사인과 사인의 (4)에 의해
$$
\begin{aligned}
|\cos x - \cos y| &= |\sin \xi|\,|y - x| \\
&\le 1 \cdot |x - y|
\end{aligned}
$$
이다(순서 성질의 (4)의 (iii), 절댓값의 (2)). 사인 쪽은 도함수가 $\cos$이므로 같은 논증에서 $-\sin \xi$ 대신 $\cos \xi$가 나온다. 사인 쪽을 $y = 0$에 쓰면 코사인과 사인의 (2)에 의해 $|\sin x| \le |x|$이고, $0 \le x$이면 절댓값의 (6)과 (1)에 의해 $\sin x \le |\sin x| \le |x| = x$이다.

**4의 증명.** [[interval]]의 (2)에 의해 $\mathbb{R}$은 구간이고, (2)에 의해 $\cos$와 $\sin$은 모든 $0$ 이상인 정수 $n$에서 $n + 1$번 미분가능하다. 실수 $x$에서 뺄셈의 정의와 (K4), (K8)의 (ii)에서 나오는 $-0 = 0$에 의해 $x - 0 = x$이다.

(i) [[taylor-polynomial|테일러 다항식]]의 정의와 (2)의 $\cos^{(k)}(0) = a_k$에 의해 $T_n^0 \cos(x) = \sum_{k=0}^{n} a_k (k!)^{-1} x^k = \sum_{k=0}^{n} c_k x^k$이고, 사인 쪽도 같다. (2)에 의해 모든 실수 $t$에서 $|\cos^{(n+1)}(t)| \le 1$이므로 테일러 정리의 (4)를 (3)의 가정, $x_0 = 0$, $K = 1$에 쓰면 부등식이 나온다. 사인 쪽도 같다.

(ii) $x = 0$이면 코사인과 사인의 (2)에 의해 세 값이 모두 $1$이다. $x \ne 0$이라 하자. [[factorial-from-zero]]의 (1)에 의해 $2! = 2$, $3! = 6$, $4! = 24$이고, 멱급수의 (1)에 의해 $c_0 = 1$, $c_1 = 0$, $c_2 = -1/2$, $c_3 = 0$이다. 따라서 [[series-indexed-from-zero]]의 (1), (2)와 (i)에 의해 $T_1^0 \cos(x) = c_0 + c_1 x = 1$이고 $T_3^0 \cos(x) = 1 - x^2/2$이다. 테일러 정리의 (3)을 $n = 1$에 쓰면 $\cos x = 1 + \cos^{(2)}(\xi)\, x^2 / 2$인 실수 $\xi$가 있고, (2)의 표($2 = 4 \cdot 0 + 2$)에 의해 $\cos^{(2)}(\xi) = -\cos \xi$이다. 코사인과 사인의 (4)에 의해 $\cos \xi \le 1$이고 순서 성질의 (5)의 (iii)에 의해 $0 \le x^2 / 2$이므로, 순서 성질의 (4)의 (iii)에 의해 $\cos(\xi)\, x^2 / 2 \le x^2 / 2$이고, 순서 성질의 (3)의 (iii)과 (2)의 (i)에 의해 $\cos x = 1 - \cos(\xi)\, x^2 / 2 \ge 1 - x^2 / 2$이다. 테일러 정리의 (3)을 $n = 3$에 쓰면 $\cos x = 1 - x^2/2 + \cos^{(4)}(\eta)\, x^4 / 24$인 실수 $\eta$가 있고, 표($4 = 4 \cdot 1 + 0$)에 의해 $\cos^{(4)}(\eta) = \cos \eta \le 1$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)에 의해 $x^4 = (x^2)^2$이므로 순서 성질의 (5)의 (iii)에 의해 $0 \le x^4 / 24$이고, 같은 방법으로 $\cos x \le 1 - x^2/2 + x^4/24$이다.

(iii) $x = 0$이면 코사인과 사인의 (2)에 의해 세 값이 모두 $0$이다. $0 < x$라 하자. 오른쪽 부등식은 (3)이다. 멱급수의 (1)에 의해 $s_0 = 0$, $s_1 = 1$, $s_2 = 0$이므로 $T_2^0 \sin(x) = x$이다. 테일러 정리의 (3)을 $n = 2$에 쓰면 $\sin x = x + \sin^{(3)}(\xi)\, x^3 / 6$인 실수 $\xi$가 있고, 표($3 = 4 \cdot 0 + 3$)에 의해 $\sin^{(3)}(\xi) = -\cos \xi$이다. 실수의 거듭제곱의 (6)의 (i)에 의해 $0 < x^3$이고 $\cos \xi \le 1$이므로, (ii)와 같은 방법으로 $\sin x = x - \cos(\xi)\, x^3 / 6 \ge x - x^3 / 6$이다.

(iv) (ii)를 $x = 1$에 쓰면 $\cos 1 \ge 1 - 1/2 = 1/2$이다. $x = 2$에 쓰면 $2^2 = 4$, $2^4 = 16$이므로 $\cos 2 \le 1 - 4/2 + 16/24 = 1 - 2 + 2/3 = -1/3$이다. $0 < x \le 2$이면 순서 성질의 (7)의 (ii)에 의해 $x^2 \le 4$이므로 $x^2/6 \le 2/3$이고 $1/3 \le 1 - x^2/6$이다. (iii)과 순서 성질의 (4)의 (iii)에 의해
$$
\begin{aligned}
\sin x &\ge x - \frac{x^3}{6} = x\Bigl(1 - \frac{x^2}{6}\Bigr) \\
&\ge x \cdot \frac{1}{3}
\end{aligned}
$$
이고, $0 < x$이므로 순서 성질의 (4)의 (i)에 의해 $0 < x/3$이다. $\blacksquare$
:::

## 예시와 반례

:::example[x = 1/2 에서 코사인의 어림]
(4)의 (ii)를 $x = 1/2$에 쓰면 $1 - 1/8 \le \cos(1/2) \le 1 - 1/8 + 1/384$, 곧 $7/8 \le \cos(1/2) \le 337/384$입니다. (4)의 (i)를 $n = 3$에 쓰면 $T_3^0 \cos(1/2) = 7/8$이므로 $|\cos(1/2) - 7/8| \le (1/2)^4 / 24 = 1/384$, 곧 $\cos(1/2)$가 $7/8$의 양쪽 $1/384$ 안에 있다는 것만 나옵니다. (ii)는 그 가운데 $7/8$ 이상인 쪽에 있다는 것까지 말해 줍니다.
:::

:::example[네 번 미분하면 제자리]
(2)의 표에서 $n = 4$이면 $r = 0$이므로 $\cos^{(4)} = \cos$, $\sin^{(4)} = \sin$입니다. 하나씩 따라가면 $\cos' = -\sin$, $\cos'' = -\cos$, $\cos''' = \sin$, $\cos^{(4)} = \cos$입니다. 또 $n = 7 = 4 \cdot 1 + 3$이면 $\sin^{(7)} = -\cos$이므로 $\sin^{(7)}(0) = -1$이고, 이것은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)의 표의 $\operatorname{Im}(i^7) = -1$과 같습니다.
:::

:::counterexample[x = −1 에서 (4)의 (iii)의 오른쪽 부등식이 성립하지 않는 예]
(4)의 (iii)은 $0 \le x$를 가정합니다. $x = -1$이면 $\sin(-1) \le -1$은 거짓입니다. (iv)에 의해 $1/2 \le \cos 1$이므로 [[order-properties-of-reals|실수의 순서 성질]]의 (7)의 (ii)에 의해 $1/4 \le (\cos 1)^2$이고, [[cosine-and-sine|코사인과 사인]]의 (4)에 의해 $(\sin 1)^2 = 1 - (\cos 1)^2 \le 3/4 < 1$입니다. 그래서 $\sin 1 \ne 1$이고, 같은 (4)의 $\sin 1 \le 1$과 함께 $\sin 1 < 1$입니다. 같은 항목의 (3)에 의해 $\sin(-1) = -\sin 1 > -1$입니다. 음수 $x$에서는 오히려 (iii)을 $-x$에 쓰고 같은 (3)을 쓰면 $\sin x = -\sin(-x) \ge -(-x) = x$입니다.
:::

## 확인 질문

:::check[$\sin^{(10)}$과 $\cos^{(10)}(0)$은 무엇인가?]
$10 = 4 \cdot 2 + 2$이므로 (2)의 표에서 $\sin^{(10)} = -\sin$이고 $\cos^{(10)} = -\cos$입니다. 따라서 $\cos^{(10)}(0) = -\cos 0 = -1$이고, 이것은 $\operatorname{Re}(i^{10}) = -1$과 같습니다.
:::

:::check[(4)의 (i)를 $n = 1$에 쓰면 $|\sin x - x|$를 무엇으로 누를 수 있는가?]
$T_1^0 \sin(x) = s_0 + s_1 x = x$이므로 $|\sin x - x| \le |x|^2 / 2$입니다. $n = 2$에 쓰면 $s_2 = 0$이어서 $T_2^0 \sin(x)$도 $x$이고, $|\sin x - x| \le |x|^3 / 6$으로 더 좁힐 수 있습니다.
:::
