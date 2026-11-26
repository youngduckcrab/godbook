---
title: 삼각함수의 값과 π 의 어림
title_en: Special Values of Trigonometric Functions and Bounds for π
aliases: [특수각의 삼각함수 값, π 의 어림, 3 < π < 3.2, sin x / x 의 극한, special values of sine and cosine, bounds for pi]
kind: proposition
field: real-analysis
msc: ["26A09", "33B10"]
level: undergrad
summary: cos(π/4) = sin(π/4) = √2/2, cos(π/3) = sin(π/6) = 1/2, sin(π/3) = cos(π/6) = √3/2 이다. 테일러 정리의 6차·8차 어림으로 cos(3/2) > 0 > cos(8/5) 를 보여 3 < π < 16/5 를 얻는다. x 가 0 으로 갈 때 sin x / x 는 1 로 수렴한다.
requires: [real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, square-root-exists, interval, real-valued-function, cluster-point, limit-of-a-function, derivative, factorial-from-zero, series-indexed-from-zero, taylor-polynomial, taylor-theorem, complex-number, complex-field, cosine-and-sine, trigonometric-addition-formulas, power-series-of-cosine-and-sine, derivatives-of-cosine-and-sine, definition-of-pi, periodicity-of-trigonometric-functions, addition-law-of-complex-exponential]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "4.2절 Multiplicative Group of Complex Numbers, Example 4.19 (p.51), Example 4.21 (p.51), Example 4.23 (p.52), Example 4.26 (p.53); 4.5절 Exercises, 연습문제 4(f), 16 (p.56); 12.1절 Matrix Groups, Example 12.5 (p.144); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 3 (p.222); 21.3절 Geometric Constructions, Trisecting an Angle (p.274); 부록 B, 4.5.16, 4.5.17 의 답 (p.321)"
    checked: original
    note: "Judson 은 4.2절(p.51)에서 극형식의 각을 도(°)로 적고 0° ≤ θ < 360° 를 요구하며 '라디안이면 0 ≤ θ < 2π' 라고 덧붙인다. Example 4.19(p.51)는 2 cis 60° 의 실수부와 허수부를 2 cos 60° = 1, 2 sin 60° = √3 으로 적는데, cos 60° 와 sin 60° 의 값을 바로 적는다. 이 사이트는 도를 정의하지 않으므로 이 항목은 π/3 으로만 쓴다. 예시 'exp(iπ/3) 과 exp(iπ/6)'의 exp(iπ/3) = 1/2 + (√3/2)i 는 그 예의 cis 60° 와 같은 수(2 를 곱하기 전)이고, exp(iπ/6) 은 연습문제 16 (a)의 2 cis(π/6) 과 같은 각이다. (1)의 exp(iπ/4) = (√2/2)(1 + i) 는 Example 4.23(p.52)의 1 + i = √2 cis(π/4) 와, Example 4.26(p.53)의 원시 8제곱근 √2/2 + (√2/2)i 와 같은 수이다. Example 4.21(p.51)은 3 cis(π/3)·2 cis(π/6) = 6 cis(π/2) = 6i 를 계산한다. 부록 B(p.321)는 연습문제 16(a)의 답을 √3 + i 로, 17(c)의 2 + 2i 를 2√2 cis(π/4) 로 적는데, 각각 (2)의 π/6 에서의 값과 (1)의 π/4 에서의 값을 쓴 것이다. 연습문제 4(f)(p.56)의 행렬 (√3/2, 1/2; −1/2, √3/2) 와 Example 12.5(p.144)의 직교행렬 (1/2, −√3/2; √3/2, 1/2) 의 성분도 (2)의 값이다. 21.3절 'Trisecting an Angle'(p.274)은 cos 60° = 1/2 를 쓰고 α = cos 20° 가 4α³ − 3α = 1/2 를 만족한다고 적는데, 반례 '3배각 방정식만으로는 cos(π/3) 이 정해지지 않는 예'가 다루는 3배각 방정식과 같은 발상이다. 확인 질문 '$\\cos(2\\pi / 3)$은 무엇인가?'의 답 −1/2 는 17.6절 연습문제 3(p.222)이 1 의 세제곱근이라고 증명하게 하는 ω = (−1 + i√3)/2 의 실수부이다."
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.166); 11.4.4절 Exercises, Exercise 11.4.8 (p.168)
    checked: original
    note: "출처는 π 를 정의하는 증명(p.166)에서 [0, y) 위에서 cos > 0 인 y 에 대해 y ≤ 2/sin(a) + a 를 얻는다. (3)은 코사인과 사인의 도함수 항목의 고계 도함수와 테일러 정리로 얻는다. (4)의 sin x / x 는 출처 Exercise 11.4.8(p.168)의 sinc(z) = sin(z)/z, sinc(0) = 1 과 같은 함수를 실수에서 본 것이다."
  - ref: lebl-basic-analysis
    loc: 4.1.3절 Exercises, Exercise 4.1.6 (p.160); 5.5절 Improper integrals, Example 5.5.12 (p.220)
    checked: original
    note: "Lebl I 의 Exercise 4.1.6(p.160)은 |x − sin(x)| ≤ x² 을 가정하고 sin 의 0 에서의 도함수를 구하라고 한다. (4)는 sin′(0) = 1 을 차분몫의 극한으로 읽은 것이고, 같은 대상이다. Example 5.5.12(p.220)는 sinc(x) = sin(x)/x (x ≠ 0), sinc(0) = 1 을 정의하고 'It is not difficult to show that the sinc function is continuous at zero' 라고 적는데, 이것이 (4)와 같은 내용이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(π 의 어림 cos(3/2), cos(8/5) 의 분수와 3배각 인수분해를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
코사인과 사인은 [[cosine-and-sine|코사인과 사인]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이고, 제곱근 $\sqrt{a}$는 [[square-root-exists]], 수렴은 [[limit-of-a-function]]의 것이다. 복소수와 $i$는 [[complex-number]], 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이다.

1. ($\pi / 4$에서의 값) $\cos(\pi / 4) = \sin(\pi / 4) = \sqrt{2}/2$이고, 따라서 $\exp(i\pi / 4) = (\sqrt{2}/2)(1 + i)$이다.
2. ($\pi / 3$과 $\pi / 6$에서의 값)
   $$
   \begin{aligned}
   \cos(\pi / 3) &= 1/2, \\
   \sin(\pi / 3) &= \sqrt{3}/2, \\
   \cos(\pi / 6) &= \sqrt{3}/2, \\
   \sin(\pi / 6) &= 1/2
   \end{aligned}
   $$
   이다.
3. ($\pi$의 어림) $\cos(3/2) \ge 359/5120 > 0$이고 $\cos(8/5) \le -3589253/123046875 < 0$이다. 따라서 $3/2 < \pi / 2 < 8/5$이고 $3 < \pi < 16/5$이다.
4. ($\sin x / x$의 극한) $x \ne 0$에서의 값이 $\sin x \cdot x^{-1}$인 함수 $\mathbb{R} - \{0\} \to \mathbb{R}$는 $0$에서 $1$로 수렴한다.
:::

:::english
Cosine and sine are those of the entry on cosine and sine, and $\pi$ is that of the entry on the number π; square roots $\sqrt{a}$ and convergence are those of their entries. Complex numbers and $i$, and the convention for writing real numbers where complex numbers are required, are those of the entries on complex numbers and the field of complex numbers.

1. (Values at $\pi / 4$) $\cos(\pi / 4) = \sin(\pi / 4) = \sqrt{2}/2$, and hence $\exp(i\pi / 4) = (\sqrt{2}/2)(1 + i)$.
2. (Values at $\pi / 3$ and $\pi / 6$)
   $$
   \begin{aligned}
   \cos(\pi / 3) &= 1/2, \\
   \sin(\pi / 3) &= \sqrt{3}/2, \\
   \cos(\pi / 6) &= \sqrt{3}/2, \\
   \sin(\pi / 6) &= 1/2.
   \end{aligned}
   $$
3. (Bounds for $\pi$) $\cos(3/2) \ge 359/5120 > 0$ and $\cos(8/5) \le -3589253/123046875 < 0$. Hence $3/2 < \pi / 2 < 8/5$ and $3 < \pi < 16/5$.
4. (The limit of $\sin x / x$) The function $\mathbb{R} - \{0\} \to \mathbb{R}$ whose value at $x \ne 0$ is $\sin x \cdot x^{-1}$ converges to $1$ at $0$.
:::

## 직관

$\pi / 4$, $\pi / 3$, $\pi / 6$에서의 값은 앞 항목들의 공식에 아는 값을 넣어 얻습니다. $\pi / 4$를 두 배 하면 $\pi / 2$이고 거기서 코사인은 $0$이므로 배각 공식이 $\cos(\pi / 4)$의 제곱을 알려 줍니다. $\pi / 3$을 세 배 하면 $\pi$이고 거기서 코사인은 $-1$이므로 3배각 공식이 $\cos(\pi / 3)$에 대한 삼차방정식을 줍니다. 방정식이 답을 여럿 가질 때는 코사인이 $(0, \pi / 2)$에서 양수라는 것으로 하나를 고릅니다.

$\pi$의 어림은 코사인의 부호를 수치로 확인하는 일입니다. 줄자로 재는 것에 비유하면, $\pi / 2$는 코사인이 $0$이 되는 눈금이고, $3/2$ 눈금에서 아직 양수, $8/5$ 눈금에서 이미 음수임을 보이면 그 눈금은 둘 사이에 있습니다. 비유와 다른 점은 "재는" 도구가 줄자가 아니라 테일러 정리의 부등식이라는 것입니다. 어림의 오차는 $x^6/720$, $x^8/40320$ 정도라서 $3/2$와 $8/5$처럼 $\pi / 2$에 가까운 점에서도 부호가 확정됩니다.

(4)는 $\sin$의 $0$에서의 미분계수가 $\cos 0 = 1$이라는 것을 차분몫으로 다시 읽은 것입니다. $x = 0$에서는 $\sin x / x$가 정의되지 않으므로 함수의 정의역에서 $0$을 뺍니다.

## 증명

:::idea
(1)은 배각 공식과 $\cos(\pi / 2) = 0$, (2)는 3배각 공식과 $\cos \pi = -1$, 그리고 $(0, \pi / 2]$에서의 부호로 근을 고른다. (3)은 테일러 정리를 $n = 5$와 $n = 7$에 써서 나머지항의 부호를 읽는다.
:::

:::hint
$4c^3 - 3c + 1 = (c + 1)(2c - 1)^2$입니다. 전개해서 확인해 보세요.
:::

:::hint
$\cos^{(6)} = -\cos$이고 $\cos^{(8)} = \cos$입니다([[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]]의 (2)의 표).
:::

:::proof
"원주율의 (2)"처럼 쓴 것은 [[definition-of-pi]], "주기성의 (1)"은 [[periodicity-of-trigonometric-functions]], "덧셈정리의 (3)"은 [[trigonometric-addition-formulas]], "코사인과 사인의 (4)"는 [[cosine-and-sine]], "도함수의 (2)"는 [[derivatives-of-cosine-and-sine]], "멱급수의 (1)"은 [[power-series-of-cosine-and-sine]], "순서 성질의 (7)"은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 원주율의 (4)에 의해 $0 < \pi$이므로 $\pi / 6$, $\pi / 4$, $\pi / 3$은 모두 $0$보다 크고 $\pi / 2$보다 작다(순서 성질의 (4), (6)).

**1의 증명.** $c = \cos(\pi / 4)$로 두자. $\pi / 2 = 2 \cdot (\pi / 4)$이므로 덧셈정리의 (3)과 원주율의 (1)에 의해 $0 = \cos(\pi / 2) = 2c^2 - 1$이고 $c^2 = 1/2$이다. 원주율의 (2)의 (ii)에 의해 $0 < c$이다. 한편 [[square-root-exists]]의 (1)에 의해 $\sqrt{2}\sqrt{2} = 2$이고 $0 < \sqrt{2}$이므로 $(\sqrt{2}/2)^2 = 2/4 = 1/2$이고 $0 < \sqrt{2}/2$이다. 순서 성질의 (7)의 (iv)에 의해 $c = \sqrt{2}/2$이다. $\pi / 4 = \pi / 2 - \pi / 4$이므로 덧셈정리의 (2)와 원주율의 (1), (3)의 (ii)에 의해 $\cos(\pi / 4) = \cos(\pi / 2)\cos(\pi / 4) + \sin(\pi / 2)\sin(\pi / 4) = \sin(\pi / 4)$이다. 코사인과 사인의 (1)에 의해 $\exp(i\pi / 4) = \sqrt{2}/2 + (\sqrt{2}/2)\, i$이다.

**2의 증명.** $c = \cos(\pi / 3)$으로 두자. $\pi = 3 \cdot (\pi / 3)$이므로 덧셈정리의 (4)와 주기성의 (1)에 의해 $-1 = 4c^3 - 3c$, 곧 $4c^3 - 3c + 1 = 0$이다. (K…)의 계산으로 $(c + 1)(2c - 1)^2 = (c + 1)(4c^2 - 4c + 1) = 4c^3 - 3c + 1$이므로 $(c + 1)(2c - 1)^2 = 0$이다. 원주율의 (2)의 (ii)에 의해 $0 < c$이므로 $0 < c + 1$이고 $c + 1 \ne 0$이다. (K10)에 의해 $(2c - 1)^2 = 0$이고, 다시 (K10)에 의해 $2c - 1 = 0$, 곧 $c = 1/2$이다. $s = \sin(\pi / 3)$이면 코사인과 사인의 (4)에 의해 $s^2 = 1 - 1/4 = 3/4$이고, 원주율의 (3)의 (i)에 의해 $0 < s$이다. 1의 증명과 같이 $(\sqrt{3}/2)^2 = 3/4$이고 $0 < \sqrt{3}/2$이므로 $s = \sqrt{3}/2$이다. $\pi / 6 = \pi / 2 - \pi / 3$이므로 덧셈정리의 (2)에 의해
$$
\begin{aligned}
\cos(\pi / 6) &= 0 \cdot \tfrac{1}{2} + 1 \cdot \tfrac{\sqrt{3}}{2} = \tfrac{\sqrt{3}}{2}, \\
\sin(\pi / 6) &= 1 \cdot \tfrac{1}{2} - 0 \cdot \tfrac{\sqrt{3}}{2} = \tfrac{1}{2}
\end{aligned}
$$
이다.

**3의 증명.** [[interval]]의 (2)에 의해 $\mathbb{R}$은 구간이고, 도함수의 (2)에 의해 $\cos$는 무한 번 미분가능하다. 멱급수의 (1)에 의해 $c_0 = 1$, $c_2 = -1/2$, $c_4 = 1/24$, $c_6 = -1/720$이고 홀수 번째 $c_k$는 $0$이므로, 도함수의 (4)의 (i)과 [[series-indexed-from-zero]]의 (1), (2)에 의해 모든 실수 $x$에서
$$
\begin{aligned}
T_5^0 \cos(x) &= 1 - \frac{x^2}{2} + \frac{x^4}{24}, \\
T_7^0 \cos(x) &= T_5^0 \cos(x) - \frac{x^6}{720}
\end{aligned}
$$
이다. [[factorial-from-zero]]의 (1)에 의해 $6! = 720$, $8! = 40320$이다.

$x = 3/2$라 하자. [[taylor-theorem|테일러 정리]]의 (3)을 $n = 5$, $x_0 = 0$에 쓰면 $\cos x = T_5^0 \cos(x) + \cos^{(6)}(\xi)\, x^6 / 720$인 실수 $\xi$가 있다. 도함수의 (2)의 표($6 = 4 \cdot 1 + 2$)에 의해 $\cos^{(6)}(\xi) = -\cos \xi$이고, 코사인과 사인의 (4)에 의해 $\cos \xi \le 1$, [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 < x^6$이므로 순서 성질의 (4)의 (iii)과 (3)의 (iii)에 의해 $\cos x \ge T_5^0 \cos(x) - x^6 / 720$이다. $x^2 = 9/4$, $x^4 = 81/16$, $x^6 = 729/64$이므로
$$
\begin{aligned}
&1 - \frac{9}{8} + \frac{81}{384} - \frac{729}{46080} \\
&\quad = \frac{46080 - 51840 + 9720 - 729}{46080} \\
&\quad = \frac{3231}{46080} = \frac{359}{5120}
\end{aligned}
$$
이고, 이것은 양수이다. 따라서 $0 < \cos(3/2)$이다. $\pi / 2 \le 3/2$라 하면 $3/2 \le 2$이므로 원주율의 (1)과 (2)의 (ii)에 의해 $\cos(3/2) \le 0$이어서 어긋난다. 그러므로 순서 성질의 (1)의 (iii)에 의해 $3/2 < \pi / 2$이다.

$x = 8/5$라 하자. 테일러 정리의 (3)을 $n = 7$에 쓰면 $\cos x = T_7^0 \cos(x) + \cos^{(8)}(\eta)\, x^8 / 40320$인 실수 $\eta$가 있고, 표($8 = 4 \cdot 2 + 0$)에 의해 $\cos^{(8)}(\eta) = \cos \eta \le 1$이며 $0 < x^8$이므로 $\cos x \le T_7^0 \cos(x) + x^8 / 40320$이다. $x^2 = 64/25$, $x^4 = 4096/625$, $x^6 = 262144/15625$, $x^8 = 16777216/390625$이므로 네 항은 $x^2/2 = 32/25$, $x^4/24 = 512/1875$, $x^6/720 = 16384/703125$, $x^8/40320 = 131072/123046875$이고, 분모를 $123046875$로 맞추면
$$
\begin{aligned}
&\bigl(123046875 - 157500000 \\
&\qquad + 33600000 - 2867200 \\
&\qquad + 131072\bigr) / 123046875 \\
&\quad = -3589253/123046875
\end{aligned}
$$
이다. 이것은 음수이므로 $\cos(8/5) < 0$이다. $8/5 \le \pi / 2$라 하면 $8/5 < \pi / 2$일 때 원주율의 (2)의 (ii)에 의해 $0 < \cos(8/5)$이고, $8/5 = \pi / 2$일 때 $\cos(8/5) = 0$이어서 어느 쪽이든 어긋난다. 그러므로 $\pi / 2 < 8/5$이다. 각 변에 $2$를 곱하면 순서 성질의 (4)의 (i)에 의해 $3 < \pi < 16/5$이다.

**4의 증명.** 도함수의 (1)에 의해 $\sin$은 $0$에서 미분가능하고 $\sin'(0) = \cos 0 = 1$이다(코사인과 사인의 (2)). [[derivative]]의 정의에 의해 이것은 $\sin$의 $0$에서의 차분몫 $q_0$, 곧 $x \in \mathbb{R} - \{0\}$에서 $q_0(x) = (\sin x - \sin 0)(x - 0)^{-1}$인 함수가 $0$에서 $1$로 수렴한다는 것이다. 코사인과 사인의 (2)와 (K…)의 계산으로 $q_0(x) = \sin x \cdot x^{-1}$이므로 [[real-valued-function]]의 (2)에 의해 $q_0$은 진술의 함수와 같다. $\blacksquare$
:::

## 예시와 반례

:::example[exp(iπ/3) 과 exp(iπ/6)]
(2)와 [[cosine-and-sine|코사인과 사인]]의 (1)에 의해 $\exp(i\pi / 3) = 1/2 + (\sqrt{3}/2)\, i$이고 $\exp(i\pi / 6) = \sqrt{3}/2 + (1/2)\, i$입니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)에 의해 $\exp(i(\pi / 3 + \pi / 2)) = i\exp(i\pi / 3)$이므로 $\exp(5\pi i / 6) = -\sqrt{3}/2 + (1/2)\, i$이고, $\cos(5\pi / 6) = -\sqrt{3}/2$, $\sin(5\pi / 6) = 1/2$입니다.
:::

:::example[π/4 를 두 번 더하기]
$\exp(i\pi / 4)^2 = \bigl((\sqrt{2}/2)(1 + i)\bigr)^2 = (1/2)(1 + 2i + i^2) = i$입니다. 이것은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)의 $\exp(i\pi / 2) = i$와 맞습니다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1)에 의해 $\exp(i\pi / 4)^2 = \exp(i\pi / 2)$이기 때문입니다.
:::

:::counterexample[3배각 방정식만으로는 cos(π/3) 이 정해지지 않는 예]
2의 증명에서 $c = \cos(\pi / 3)$은 $4c^3 - 3c + 1 = 0$을 만족하지만 이 방정식의 근은 $1/2$만이 아닙니다. $c = -1$도 근입니다($-4 + 3 + 1 = 0$). 실제로 $x = \pi$에서도 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)에 의해 $\cos(3\pi) = \cos(\pi + 2\pi) = -1$이고 $\cos \pi = -1$이어서, $\cos(3x) = -1$인 $x$의 코사인이 $-1$일 수 있습니다. 그래서 $\pi / 3$이 $(0, \pi / 2)$에 있다는 것, 곧 $0 < \cos(\pi / 3)$이 근을 고르는 데 필요합니다.
:::

## 확인 질문

:::check[$\cos 3$은 양수인가 음수인가?]
(3)에 의해 $3 < \pi < 16/5$이므로 $x = 3 - \pi$는 $-1/5 < x < 0$이고 $|x| < \pi / 2$입니다. [[definition-of-pi|원주율]]의 (2)의 (iii)에 의해 $0 < \cos x$이고, [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)의 $\cos(x + \pi) = -\cos x$에 의해 $\cos 3 < 0$입니다.
:::

:::check[$\cos(2\pi / 3)$은 무엇인가?]
$2\pi / 3 = 2 \cdot (\pi / 3)$이므로 [[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (3)과 이 항목의 (2)에 의해 $\cos(2\pi / 3) = 2 \cdot (1/2)^2 - 1 = -1/2$입니다.
:::
