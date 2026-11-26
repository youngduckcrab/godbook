---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "3.2절, Example 3.2.6 (p.124) — 문제 '합을 곱으로 바꾸는 두 공식'과 같은 두 식(출처는 sin 과 cos 의 연속을 보일 때 sum-to-product 공식이라 부르며 증명 없이 쓴다)"
  - ref: lebl-basic-analysis-2
    loc: "11.4.4 소절, Exercise 11.4.11 a) (p.168) — 문제 '0 과 π 사이의 코사인'과 같은 발상(출처는 (−π/2, π/2) 에서 sin 과 tan 이 순증가여서 그 구간으로 제한한 역함수가 있다는 것을 보이게 한다. 이 문제는 [0, π] 위의 cos 이 순감소이고 [−1, 1] 로의 전단사라는 것을 보인다)"
added: 2026-11-26
---

:::exercise[$\pi/12$에서의 코사인과 사인]
1. $\cos(\pi/12) = \frac{\sqrt{2}}{4}(\sqrt{3} + 1)$이고 $\sin(\pi/12) = \frac{\sqrt{2}}{4}(\sqrt{3} - 1)$임을 보여라.
2. (1)의 두 값으로 $(\cos(\pi/12))^2 + (\sin(\pi/12))^2$을 직접 계산하여 $1$이 됨을 확인하라.
3. $\cos(5\pi/12) = \sin(\pi/12)$이고 $\sin(5\pi/12) = \cos(\pi/12)$임을 보여라.
:::

:::solution
아래에서 "덧셈정리"는 [[trigonometric-addition-formulas|삼각함수의 덧셈정리]], "값과 어림"은 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 번호이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다.

**(1)** 실수의 계산으로 $\pi/3 - \pi/4 = (4\pi - 3\pi)/12 = \pi/12$이다. 덧셈정리의 (2)를 $x = \pi/3$, $y = \pi/4$에 쓰고, 값과 어림의 (1)의 $\cos(\pi/4) = \sin(\pi/4) = \sqrt{2}/2$와 (2)의 $\cos(\pi/3) = 1/2$, $\sin(\pi/3) = \sqrt{3}/2$를 넣으면
$$
\begin{aligned}
\cos(\pi/12) &= \tfrac{1}{2} \cdot \tfrac{\sqrt{2}}{2} + \tfrac{\sqrt{3}}{2} \cdot \tfrac{\sqrt{2}}{2} \\
&= \tfrac{\sqrt{2}}{4}(\sqrt{3} + 1), \\
\sin(\pi/12) &= \tfrac{\sqrt{3}}{2} \cdot \tfrac{\sqrt{2}}{2} - \tfrac{1}{2} \cdot \tfrac{\sqrt{2}}{2} \\
&= \tfrac{\sqrt{2}}{4}(\sqrt{3} - 1)
\end{aligned}
$$
이다.

**(2)** [[square-root-exists|제곱근]]의 (1)에 의해 $\sqrt{2}\sqrt{2} = 2$이고 $\sqrt{3}\sqrt{3} = 3$이다. 따라서 $(\sqrt{2}/4)^2 = 2/16 = 1/8$이고
$$
\begin{aligned}
(\sqrt{3} + 1)^2 &= 3 + 2\sqrt{3} + 1 \\
&= 4 + 2\sqrt{3}, \\
(\sqrt{3} - 1)^2 &= 3 - 2\sqrt{3} + 1 \\
&= 4 - 2\sqrt{3}
\end{aligned}
$$
이므로, 두 값의 제곱의 합은 $\frac{1}{8}(4 + 2\sqrt{3}) + \frac{1}{8}(4 - 2\sqrt{3}) = \frac{8}{8} = 1$이다. 이것은 [[cosine-and-sine|코사인과 사인]]의 (4)와 맞는다.

**(3)** 실수의 계산으로 $\pi/2 - \pi/12 = (6\pi - \pi)/12 = 5\pi/12$이다. [[definition-of-pi|원주율]]의 (1)에 의해 $\cos(\pi/2) = 0$이고 (3)의 (ii)에 의해 $\sin(\pi/2) = 1$이다. 덧셈정리의 (2)를 $x = \pi/2$, $y = \pi/12$에 쓰면 (K9)와 (K4)에 의해
$$
\begin{aligned}
\cos(5\pi/12) &= 0 \cdot \cos(\pi/12) \\
&\qquad + 1 \cdot \sin(\pi/12) \\
&= \sin(\pi/12), \\
\sin(5\pi/12) &= 1 \cdot \cos(\pi/12) \\
&\qquad - 0 \cdot \sin(\pi/12) \\
&= \cos(\pi/12)
\end{aligned}
$$
이다.
:::

:::exercise[합을 곱으로 바꾸는 두 공식]
모든 실수 $x$, $y$에서
$$
\begin{aligned}
\sin x - \sin y &= 2 \cos\bigl((x + y)/2\bigr) \\
&\qquad \cdot \sin\bigl((x - y)/2\bigr), \\
\cos x - \cos y &= -2 \sin\bigl((x + y)/2\bigr) \\
&\qquad \cdot \sin\bigl((x - y)/2\bigr)
\end{aligned}
$$
임을 보여라. 또 $x = y$이면 두 식의 양쪽이 모두 $0$임을 확인하라.
:::

:::solution
$a = (x + y)/2$, $b = (x - y)/2$로 두면 [[real-number-arithmetic|실수의 계산 법칙]]으로 $a + b = x$이고 $a - b = y$이다. [[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (1)과 (2)를 $a$, $b$에 쓰면
$$
\begin{aligned}
\sin x &= \sin a \cos b + \cos a \sin b, \\
\sin y &= \sin a \cos b - \cos a \sin b, \\
\cos x &= \cos a \cos b - \sin a \sin b, \\
\cos y &= \cos a \cos b + \sin a \sin b
\end{aligned}
$$
이다. 첫째 식에서 둘째 식을 빼면 $\sin x - \sin y = 2 \cos a \sin b$이고, 셋째 식에서 넷째 식을 빼면 $\cos x - \cos y = -2 \sin a \sin b$이다. 이것이 보일 두 식이다.

$x = y$이면 왼쪽은 둘 다 $0$이다. 오른쪽에서는 $b = 0$이고 [[cosine-and-sine|코사인과 사인]]의 (2)에 의해 $\sin b = 0$이므로 (K9)에 의해 둘 다 $0$이다.
:::

:::exercise[$\sin(nx)$의 절댓값의 어림]
1. 모든 자연수 $n$과 모든 실수 $x$에서 $|\sin(nx)| \le n\,|\sin x|$임을 보여라.
2. 코사인에서 같은 꼴의 부등식 $|\cos(nx)| \le n\,|\cos x|$는 $n = 2$, $x = \pi/2$에서 성립하지 않음을 보여라. (1)의 증명을 코사인에 그대로 옮기면 어디서 막히는지 말하라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "절댓값"은 [[absolute-value|절댓값]]의 번호이다.

**(1)** 자연수 $n$에 대한 명제 "모든 실수 $x$에서 $|\sin(nx)| \le n\,|\sin x|$"를 [[mathematical-induction|수학적 귀납법]]으로 보인다.

- $n = 1$: (K4)에 의해 $1 \cdot x = x$이고 $1 \cdot |\sin x| = |\sin x|$이므로 순서 성질의 (1)의 (iv)에 의해 성립한다.
- $n = k$에서 $n = k + 1$로: (K3), (K4)에 의해 $(k + 1)x = kx + x$이다. [[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (1)에 의해 $\sin(kx + x) = \sin(kx)\cos x + \cos(kx)\sin x$이므로, [[triangle-inequality|삼각부등식]]의 (1)과 절댓값의 (4)에 의해
  $$
  \begin{aligned}
  &|\sin((k + 1)x)| \\
  &\quad \le |\sin(kx)|\,|\cos x| \\
  &\qquad + |\cos(kx)|\,|\sin x|
  \end{aligned}
  $$
  이다. [[cosine-and-sine|코사인과 사인]]의 (4)에 의해 $|\cos x| \le 1$이고 $|\cos(kx)| \le 1$이며, 귀납 가정에 의해 $|\sin(kx)| \le k\,|\sin x|$이다. 절댓값의 (2)에 의해 나오는 절댓값은 모두 $0$ 이상이므로, 순서 성질의 (11)의 (i)에 의해 $|\sin(kx)|\,|\cos x| \le k\,|\sin x| \cdot 1$이고 $|\cos(kx)|\,|\sin x| \le 1 \cdot |\sin x|$이다. 순서 성질의 (2)의 (iii)으로 더하면 오른쪽은 $k\,|\sin x| + |\sin x| = (k + 1)|\sin x|$ 이하이고, 순서 성질의 (1)의 (v)에 의해 $|\sin((k + 1)x)| \le (k + 1)|\sin x|$이다.

**(2)** $2 \cdot (\pi/2) = \pi$이고 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\cos \pi = -1$, $\cos(\pi/2) = 0$이다. 절댓값의 (1)에 의해 $|\cos \pi| = |-1| = 1$이고 $2\,|\cos(\pi/2)| = 0$이다. 순서 성질의 (5)의 (ii)에 의해 $0 < 1$이므로 순서 성질의 (1)의 (i)에 의해 $1 \le 0$은 성립하지 않는다.

(1)의 귀납 단계를 코사인에 옮기면 덧셈정리의 (1)에 의해 $\cos((k + 1)x) = \cos(kx)\cos x - \sin(kx)\sin x$이고, 둘째 항의 절댓값 $|\sin(kx)|\,|\sin x|$를 $|\cos x|$로 누르는 근거가 없다. 실제로 $k = 1$, $x = \pi/2$에서는 [[definition-of-pi|원주율]]의 (1)과 (3)의 (ii)에 의해 $\cos x = 0$이고 $\sin(\pi/2) = 1$이므로 이 항은 $1$이어서, $|\cos x|$의 어떤 실수배로도 누를 수 없다.
:::

:::exercise[$\sin x = \sin y$가 되는 조건]
$2\pi\mathbb{Z}$와 $\pi\mathbb{Z}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 기호이다.

1. 실수 $x$, $y$에 대하여 $\sin x = \sin y$인 것은 정확히 $x - y \in 2\pi\mathbb{Z}$이거나 $x + y - \pi \in 2\pi\mathbb{Z}$일 때임을 보여라.
2. $\sin x = 1/2$인 실수 $x$는 정확히 어떤 정수 $k$에 대하여 $x = \pi/6 + 2\pi k$이거나 $x = 5\pi/6 + 2\pi k$인 수임을 보이고, 그 가운데 $0 \le x < 2\pi$인 것은 정확히 $\pi/6$과 $5\pi/6$임을 보여라.
3. "$\sin x = \sin y$이면 $x - y \in 2\pi\mathbb{Z}$"가 $x = \pi/6$, $y = 5\pi/6$에서 성립하지 않음을 보여라.
:::

:::solution
아래에서 "주기성"은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, (Z1)은 [[prime-number|소수]] 항목에서 받아들인 정수의 성질이다.

**(1)** $a = (x + y)/2$, $b = (x - y)/2$로 두면 문제 2에 의해 $\sin x - \sin y = 2 \cos a \sin b$이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (v)에 의해 $\sin x = \sin y$인 것은 정확히 $2 \cos a \sin b = 0$일 때이고, $2 \ne 0$(K7)이므로 (K10)과 (K9)에 의해 이것은 정확히 $\cos a = 0$이거나 $\sin b = 0$일 때이다.

주기성의 (5)에 의해 $\sin b = 0$인 것은 정확히 $b \in \pi\mathbb{Z}$일 때이다. 정수 $k$에 대하여 $b = \pi k$이면 양변에 $2$를 곱해 $x - y = 2b = 2\pi k$이고, 거꾸로 $x - y = 2\pi k$이면 양변에 $2^{-1}$을 곱해 $b = \pi k$이다. 따라서 $\sin b = 0$인 것은 정확히 $x - y \in 2\pi\mathbb{Z}$일 때이다. 같은 (5)에 의해 $\cos a = 0$인 것은 정확히 $a - \pi/2 \in \pi\mathbb{Z}$일 때이고, $2(a - \pi/2) = x + y - \pi$이므로 같은 계산으로 이것은 정확히 $x + y - \pi \in 2\pi\mathbb{Z}$일 때이다.

**(2)** [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\sin(\pi/6) = 1/2$이므로, $\sin x = 1/2$인 것은 정확히 $\sin x = \sin(\pi/6)$일 때이다. (1)을 $y = \pi/6$에 쓰면 이것은 정확히 어떤 정수 $k$에서 $x - \pi/6 = 2\pi k$이거나 $x + \pi/6 - \pi = 2\pi k$일 때이고, $\pi - \pi/6 = 5\pi/6$이므로 곧 $x = \pi/6 + 2\pi k$이거나 $x = 5\pi/6 + 2\pi k$일 때이다.

[[definition-of-pi|원주율]]의 (4)에 의해 $2 < \pi$이므로 $0 < \pi$이고, 순서 성질로 $0 < \pi/6 < 5\pi/6 < 2\pi$이다. $c$를 $\pi/6$이나 $5\pi/6$이라 하고 $x = c + 2\pi k$라 하자. 순서 성질의 (10)과 (1)의 (iii)에 의해 정수 $k$는 $k < 0$, $k = 0$, $0 < k$ 가운데 하나이다.

- $k = 0$이면 $x = c$이고 $0 \le c < 2\pi$이다.
- $0 < k$이면 (Z1)에 의해 $1 \le k$이고, $0 < 2\pi$이므로 순서 성질의 (4)의 (iii)에 의해 $2\pi \le 2\pi k$이다. 순서 성질의 (2)의 (iv)에 의해 $2\pi = 0 + 2\pi < c + 2\pi k = x$이므로 $x < 2\pi$가 아니다.
- $k < 0$이면 (Z1)에 의해 $k + 1 \le 0$, 곧 $k \le -1$이고, 같은 (4)의 (iii)에 의해 $2\pi k \le -2\pi$이다. $c < 2\pi$이므로 순서 성질의 (2)의 (iv)에 의해 $x = c + 2\pi k < 2\pi - 2\pi = 0$이므로 $0 \le x$가 아니다.

따라서 $0 \le x < 2\pi$이고 $\sin x = 1/2$인 $x$는 정확히 $\pi/6$과 $5\pi/6$이다.

**(3)** (2)에 의해 $\sin(\pi/6) = \sin(5\pi/6) = 1/2$이다. $\pi/6 - 5\pi/6 = -2\pi/3$이다. 어떤 정수 $k$에서 $-2\pi/3 = 2\pi k$라 하면, $\pi \ne 0$이므로 양변에 $(2\pi)^{-1}$을 곱해 $k = -1/3$이고, 순서 성질로 $-1 < k < 0$이다. (Z1)에 의해 $-1 < k$이면 $0 \le k$이므로 $k < 0$과 어긋난다. 따라서 $\pi/6 - 5\pi/6 \notin 2\pi\mathbb{Z}$이다. (1)이 말하는 대로 이 두 수에서 성립하는 것은 다른 쪽 조건 $\pi/6 + 5\pi/6 - \pi = 0 = 2\pi \cdot 0 \in 2\pi\mathbb{Z}$이다.
:::

:::exercise[0 과 π 사이의 코사인]
1. $0 < t < \pi$인 실수 $t$에서 $0 < \sin t$임을 보여라.
2. $0 \le x < y \le \pi$이면 $\cos y < \cos x$임을 보여라.
3. $\cos$를 닫힌구간 $[0, \pi]$로 제한하고 공역을 닫힌구간 $[-1, 1]$로 둔 함수 $[0, \pi] \to [-1, 1]$이 전단사임을 보여라.
:::

:::solution
아래에서 "원주율"은 [[definition-of-pi|원주율]], "주기성"은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]], "도함수"는 [[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 원주율의 (4)에 의해 $0 < \pi/2 < \pi$이다.

**(1)** 순서 성질의 (1)의 (iii)에 의해 $t \le \pi/2$이거나 $\pi/2 < t$이다. $0 < t \le \pi/2$이면 원주율의 (3)의 (i)에 의해 $0 < \sin t$이다. $\pi/2 < t < \pi$이면 $s = t - \pi/2$로 두어 순서 성질의 (2)의 (ii)에 의해 $0 < s < \pi/2$이다. 주기성의 (2)의 $\sin(s + \pi/2) = \cos s$에 의해 $\sin t = \cos s$이고, [[absolute-value|절댓값]]의 (1)에 의해 $|s| = s < \pi/2$이므로 원주율의 (2)의 (iii)에 의해 $0 < \cos s = \sin t$이다.

**(2)** [[interval|구간]]의 (1)에 의해 $[x, y]$는 구간이다. 도함수의 (1)에 의해 $\cos$는 미분가능한 함수이고 $\cos' = -\sin$이므로, [[derivative|미분계수와 도함수]]의 (2)에 의해 제한 $\cos|_{[x, y]}$는 미분가능한 함수이고 그 미분계수는 $-\sin$의 값이며, [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 연속함수이다. [[mean-value-theorem|평균값 정리]]에 의해 $\cos y - \cos x = -\sin(\xi)\,(y - x)$인 $\xi \in (x, y)$가 있다. $0 \le x < \xi < y \le \pi$이므로 $0 < \xi < \pi$이고, (1)에 의해 $0 < \sin \xi$이다. 순서 성질의 (3)의 (i)에 의해 $0 < y - x$이므로 순서 성질의 (4)의 (i)과 (K9)에 의해 $0 < \sin(\xi)(y - x)$이고, 순서 성질의 (3)의 (ii)에 의해 $\cos y - \cos x < 0$, 곧 순서 성질의 (3)의 (i)에 의해 $\cos y < \cos x$이다.

**(3)** [[cosine-and-sine|코사인과 사인]]의 (4)에 의해 모든 $x$에서 $-1 \le \cos x \le 1$이므로 값이 모두 $[-1, 1]$에 들고, 공역을 $[-1, 1]$로 둘 수 있다.

- 단사: $[0, \pi]$의 두 원소 $x \ne y$는 순서 성질의 (1)의 (iii), (ii)에 의해 $x < y$이거나 $y < x$이고, (2)에 의해 두 값은 다르다.
- 전사: $-1 \le a \le 1$이라 하자. 주기성의 (1)에 의해 $\cos \pi = -1$이고 코사인과 사인의 (2)에 의해 $\cos 0 = 1$이다. $0 < \pi$이고, 도함수의 (1)에 의해 $\cos$는 연속함수이므로 $[0, \pi]$에서 연속이다. $\cos \pi \le a \le \cos 0$이므로 [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (2)에 의해 $\cos x = a$인 $x \in [0, \pi]$가 있다.

따라서 [[injective-surjective-bijective|단사, 전사, 전단사]]의 정의에 의해 이 함수는 전단사이다.
:::

:::exercise[$a > \pi$일 때 순감소가 깨지는 두 점]
$a$를 $\pi < a$인 실수라 하고 $y = \min\{a, 2\pi\}$로 두자.

1. $0 \le \pi < y \le a$임을 보여라.
2. $\cos \pi < \cos y$임을 보여라. 따라서 $\cos$는 닫힌구간 $[0, a]$에서 순감소가 아니고, 문제 5의 (2)에서 $\pi$를 $\pi$보다 큰 수로 바꿀 수 없다.
3. $a = 4$이면 $y = 4$이고 $\cos \pi < \cos 4$임을 확인하라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "절댓값"은 [[absolute-value|절댓값]], "주기성"은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 번호이고, (Z1)은 [[prime-number|소수]] 항목에서 받아들인 정수의 성질이다.

**(1)** [[definition-of-pi|원주율]]의 (4)에 의해 $2 < \pi$이므로 $0 \le \pi$이고 $\pi < 2\pi$이다. 절댓값의 (10)에 의해 $y$는 $a$이거나 $2\pi$이고, $y \le a$이며 $y \le 2\pi$이다. $\pi < a$이고 $\pi < 2\pi$이므로 어느 경우든 $\pi < y$이다.

**(2)** $\cos y = -1$이라 하자. [[cosine-and-sine|코사인과 사인]]의 (6)에 의해 $\exp(iy) = -1$이고, 주기성의 (1)에 의해 $\exp(i\pi) = -1$이므로 주기성의 (3′)에 의해 $y - \pi = 2\pi k$인 정수 $k$가 있다. (1)과 $y \le 2\pi$에서 순서 성질의 (2)의 (ii)에 의해 $0 < y - \pi \le \pi < 2\pi$이므로 $0 < 2\pi k < 2\pi$이고, $0 < (2\pi)^{-1}$(순서 성질의 (6)의 (i))을 곱하면 순서 성질의 (4)의 (i)에 의해 $0 < k < 1$이다. (Z1)에 의해 $0 < k$이면 $1 \le k$이므로 $k < 1$과 어긋난다. 따라서 $\cos y \ne -1$이고, 코사인과 사인의 (4)의 $-1 \le \cos y$와 함께 $-1 < \cos y$이다. 주기성의 (1)에 의해 $\cos \pi = -1$이므로 $\cos \pi < \cos y$이다.

$\pi$와 $y$는 (1)에 의해 $[0, a]$의 원소이고 $\pi < y$인데 $\cos y < \cos \pi$가 아니므로(순서 성질의 (1)의 (i)), $\cos$는 $[0, a]$에서 순감소가 아니다.

**(3)** 원주율의 (4)에 의해 $4 < 2\pi$이므로 절댓값의 정의에서 $\min\{4, 2\pi\} = 4$이다. $\pi < 4$이므로 (2)를 $a = 4$에 쓰면 $\cos \pi < \cos 4$이다. (문제 5의 (2)와 함께 보면, $\cos$가 순감소인 닫힌구간 $[0, a]$의 오른쪽 끝 $a$는 $\pi$를 넘을 수 없다.)
:::
