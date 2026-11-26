---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "5.3.4 소절, Exercise 5.3.1, 5.3.2 (p.205) — 문제 '끝이 움직이는 적분의 도함수'와 같은 종류(끝이 x 의 식인 적분을 미분하기. 출처는 e^{s²} 의 −x 부터 x 까지의 적분과 sin(s²) 의 0 부터 x² 까지의 적분)"
  - ref: lebl-basic-analysis
    loc: "5.3.4 소절, Exercise 5.3.7 (p.205) — 문제 '길이가 $1$인 구간 위의 적분이 일정한 연속함수'의 1과 같은 발상(길이가 일정한 구간 위의 적분을 x 의 함수로 보고 미분하기. 출처는 [x − ε, x + ε] 위의 적분을 2ε 로 나눈 함수)"
  - ref: lebl-basic-analysis
    loc: "5.3.4 소절, Exercise 5.3.10 (p.206) — 문제 '구간의 가운데에 대한 대칭과 적분'과 비슷한 발상(함수의 대칭을 치환으로 적분에 옮기기. 출처는 원점에 대한 홀함수와 짝함수의 [−a, a] 위의 적분)"
  - ref: lebl-basic-analysis
    loc: "5.5절 Proposition 5.5.2 (p.214) — 문제 '0을 품은 구간에서 기본정리를 잘못 쓴 계산'의 2와 같은 대상(0 가까이에서 1/x² 의 적분이 한없이 커진다. 출처는 0 부터 1 까지의 1/x^p 의 이상적분이 p ≥ 1 이면 발산한다고 진술한다)"
added: 2026-11-26
---

:::exercise[$\int_{-2}^{1} |x|\,dx$]
$s(x) = |x|$로 정한 $s : \mathbb{R} \to \mathbb{R}$에 대하여 $\int_{-2}^{1} s$를 구하라.
:::

:::solution
$\mathbb{R}$은 [[interval|구간]]의 (2)에 의해 구간이다. $s$는 항등함수 $i_{\mathbb{R}}$의 절댓값 $|i_{\mathbb{R}}|$이므로([[real-valued-function|실함수와 그 연산]]의 (2), (4)) [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이다. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $s$는 $\mathbb{R}$의 어느 두 점 사이에서도 적분가능하고, 특히 $[-2, 1]$에서 적분가능하다([[oriented-integral|방향 있는 적분]]의 "사이에서 적분가능"의 정의). 방향 있는 적분의 (2)를 $a = -2$, $b = 1$과 세 점 $-2$, $0$, $1$에 쓰면
$$
\int_{-2}^{1} s = \int_{-2}^{0} s + \int_{0}^{1} s
$$
이다.

$p_1$을 $\mathbb{R}$ 위의 항등함수, 곧 $p_1(t) = t$라 하고 $w = (-1)p_1$로 둔다. $t$가 $-2$와 $0$ 사이에 있으면 $-2 \le t \le 0$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $s(t) = -t = w(t)$이고([[real-number-arithmetic|실수의 계산 법칙]]의 (K9)), $t$가 $0$과 $1$ 사이에 있으면 $0 \le t$이므로 $s(t) = t = p_1(t)$이다. 방향 있는 적분의 (5)에 의해 $\int_{-2}^0 s = \int_{-2}^0 w$이고 $\int_0^1 s = \int_0^1 p_1$이다.

[[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)을 $n = 1$로 쓰면
$$
\begin{aligned}
\int_{-2}^{0} t\,dt &= \bigl(0^2 - (-2)^2\bigr)\,2^{-1} = -2, \\
\int_{0}^{1} t\,dt &= \bigl(1^2 - 0^2\bigr)\,2^{-1} = 2^{-1}
\end{aligned}
$$
이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1), (K12)의 (iii)). [[linearity-of-the-integral|적분의 선형성]]의 (6)을 $k = -1$로 쓰면 $\int_{-2}^0 w = (-1)(-2) = 2$이다. 따라서
$$
\int_{-2}^{1} |x|\,dx = 2 + \tfrac{1}{2} = \tfrac{5}{2}
$$
이다.
:::

:::exercise[끝이 움직이는 적분의 도함수]
$f(t) = (t^2 + 1)^{-1}$로 정한 $f : \mathbb{R} \to \mathbb{R}$를 생각하고, 실수 $x$마다
$$
G(x) = \int_0^{x^2} f, \qquad H(x) = \int_x^{2x} f
$$
로 둔다.

1. $f$가 연속함수이고, $G$와 $H$가 실수 전체에서 정해지는 함수임을 보여라.
2. $G$가 미분가능한 함수이고 모든 실수 $x$에서 $G'(x) = 2x\,(x^4 + 1)^{-1}$임을 보여라.
3. $H$가 미분가능한 함수임을 보이고 $H'(x)$와 $H'(0)$을 구하라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $u(t) = t^2 + 1$로 정한 $u : \mathbb{R} \to \mathbb{R}$는 $p_2$와 값이 $1$인 상수함수의 합이므로 [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (1), [[continuous-function|연속함수]]의 (4), [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이다. 모든 실수 $t$에서 순서 성질 (5)의 (iii)과 (ii), (2)의 (iv)에 의해 $0 < 1 \le t^2 + 1$이므로 $u(t) \ne 0$이고, 연속함수의 합·곱·몫의 (3)에 의해 $f = 1/u$는 $\mathbb{R}$ 위의 연속함수이다. $\mathbb{R}$은 [[interval|구간]]의 (2)에 의해 구간이므로, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $f$는 $\mathbb{R}$의 어느 두 점 사이에서도 적분가능하다. 따라서 $G(x)$와 $H(x)$는 실수 하나로 정해지고, [[real-valued-function|실함수와 그 연산]]의 (1)에 의해 $G, H : \mathbb{R} \to \mathbb{R}$가 있다.

밑점을 $0$으로 하여 $F(x) = \int_0^x f$로 정한 $F : \mathbb{R} \to \mathbb{R}$를 생각한다. 미적분의 기본정리 (둘째 꼴)의 (4)에 의해 $F$는 미분가능한 함수이고 $F' = f$이다.

**(2)** 모든 실수 $x$에서 $G(x) = F(x^2) = (F \circ p_2)(x)$이므로 실함수와 그 연산의 (2)에 의해 $G = F \circ p_2$이다. [[derivative-of-power|거듭제곱 함수의 미분]]의 (1)에 의해 $p_2$는 미분가능하고 $p_2'(x) = 2x$이다. [[chain-rule|연쇄 법칙]]의 (2)를 $I_1 = I_2 = \mathbb{R}$로 쓰면 $G$는 미분가능한 함수이고
$$
\begin{aligned}
G'(x) &= F'(x^2)\,2x = f(x^2)\,2x \\
&= 2x\,\bigl((x^2)^2 + 1\bigr)^{-1}
\end{aligned}
$$
이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii)에 의해 $(x^2)^2 = x^4$이므로 $G'(x) = 2x\,(x^4 + 1)^{-1}$이다([[real-number-arithmetic|실수의 계산 법칙]]의 (K1)).

**(3)** 미적분의 기본정리 (둘째 꼴)의 (1)에 의해 모든 실수 $x$에서 $F(2x) - F(x) = \int_x^{2x} f = H(x)$이다. $m(x) = 2x$로 정한 $m : \mathbb{R} \to \mathbb{R}$는 [[derivative|미분계수와 도함수]]의 (1)에 의해 미분가능하고 $m'(x) = 2$이므로, 연쇄 법칙의 (2)에 의해 $F \circ m$은 미분가능하고 $(F \circ m)'(x) = f(2x) \cdot 2$이다. $H = F \circ m - F$이므로 [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $H$는 미분가능한 함수이고
$$
\begin{aligned}
H'(x) &= 2 f(2x) - f(x) \\
&= 2\,(4x^2 + 1)^{-1} - (x^2 + 1)^{-1}
\end{aligned}
$$
이다. 여기서 실수의 거듭제곱의 (2)의 (iii)에 의해 $(2x)^2 = 2^2 x^2 = 4x^2$이다. $x = 0$을 넣으면 $H'(0) = 2 \cdot 1^{-1} - 1^{-1} = 1$이다.
:::

:::exercise[길이가 $1$인 구간 위의 적분이 일정한 연속함수]
$f : \mathbb{R} \to \mathbb{R}$를 연속함수라 하고, 실수 $x$마다 $H(x) = \int_x^{x + 1} f$로 둔다.

1. $H$가 미분가능한 함수이고 모든 실수 $x$에서 $H'(x) = f(x + 1) - f(x)$임을 보여라.
2. $H$가 상수함수인 것은 정확히 모든 실수 $x$에서 $f(x + 1) = f(x)$일 때임을 보여라.
3. $f(x) = x$이면 $H(x)$는 무엇인가? 2의 결론과 맞추어 보라.
:::

:::solution
**(1)** $\mathbb{R}$은 [[interval|구간]]의 (2)에 의해 구간이므로, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $f$는 $\mathbb{R}$의 어느 두 점 사이에서도 적분가능하고, 밑점을 $0$으로 한 $F(x) = \int_0^x f$는 미분가능한 함수이며 $F' = f$이다. 같은 정리의 (1)에 의해 모든 실수 $x$에서 $H(x) = \int_x^{x+1} f = F(x + 1) - F(x)$이다.

$m(x) = x + 1$로 정한 $m : \mathbb{R} \to \mathbb{R}$는 [[derivative|미분계수와 도함수]]의 (1)에 의해 미분가능하고 $m'(x) = 1$이다. [[chain-rule|연쇄 법칙]]의 (2)에 의해 $F \circ m$은 미분가능하고 $(F \circ m)'(x) = F'(x + 1) \cdot 1 = f(x + 1)$이다([[real-number-arithmetic|실수의 계산 법칙]]의 (K4)). $H = F \circ m - F$이므로([[real-valued-function|실함수와 그 연산]]의 (2)) [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $H$는 미분가능한 함수이고 $H'(x) = f(x + 1) - f(x)$이다.

**(2)** $H$가 값이 $k$인 상수함수라 하자. 미분계수와 도함수의 (1)에 의해 모든 실수 $x$에서 $H'(x) = 0$이므로, 1에 의해 $f(x + 1) - f(x) = 0$이고, 실수의 계산 법칙의 (K12)의 (v)에 의해 $f(x + 1) = f(x)$이다.

거꾸로 모든 실수 $x$에서 $f(x + 1) = f(x)$라 하자. (K12)의 (v)에 의해 $f(x + 1) - f(x) = 0$이므로 1에 의해 모든 $x$에서 $H'(x) = 0$이다. $H$는 구간 $\mathbb{R}$ 위의 미분가능한 함수이므로 [[derivative-and-monotonicity|도함수와 증가·감소]]의 (1)에 의해 상수함수이다.

**(3)** [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)을 $n = 1$로 쓰면
$$
\begin{aligned}
H(x) &= \bigl((x + 1)^2 - x^2\bigr)\,2^{-1} \\
&= (2x + 1)\,2^{-1} = x + 2^{-1}
\end{aligned}
$$
이다((K1)–(K4), (K12)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)). $H(0) = 2^{-1} \ne 1 + 2^{-1} = H(1)$이므로 $H$는 상수함수가 아니고, 실제로 $f(x + 1) - f(x) = 1 \ne 0$이어서 2와 맞는다. 1의 식 $H'(x) = 1$도 [[derivative|미분계수와 도함수]]의 (1)로 $x + 2^{-1}$을 미분한 값과 같다.
:::

:::exercise[구간의 가운데에 대한 대칭과 적분]
$a < b$인 실수 $a$, $b$와 연속함수 $f : [a, b] \to \mathbb{R}$를 생각한다.

1. $x$에서의 값이 $f(a + b - x)$인 함수 $[a, b] \to \mathbb{R}$가 적분가능하고
   $$
   \int_a^b f(a + b - x)\,dx = \int_a^b f
   $$
   임을 보여라.
2. 여기에 더해 $[a, b]$의 모든 $x$에서 $f(a + b - x) = f(x)$이면
   $$
   \int_a^b x\,f(x)\,dx = 2^{-1}(a + b) \int_a^b f
   $$
   임을 보여라.
3. $\int_0^1 x^2(1 - x)^2\,dx$를 구하고, 2를 써서 $\int_0^1 x^3(1 - x)^2\,dx$를 구하라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $x \in [a, b]$이면 $a \le x \le b$이고, 순서 성질 (3)의 (iii)과 (2)의 (i)로 양변에 $a + b$를 더하면 $a \le a + b - x \le b$이므로 $a + b - x \in [a, b]$이다. $\rho(x) = (-1)x + (a + b)$로 정한 $\rho : [a, b] \to \mathbb{R}$는 [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K1), (K9)에 의해 $\rho(x) = a + b - x$이다. 값이 $[a, b]$에 들므로 [[composition-of-continuous-functions|연속함수의 합성]]의 (3), (2)에 의해 $\varphi = f \circ \rho$, 곧 $\varphi(x) = f(a + b - x)$는 연속함수이고, [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 적분가능하다.

[[change-of-variables|치환적분]]의 (3)을 $I = [a, b]$([[interval|구간]]의 (1)), $m = -1$, $k = a + b$로 쓴다. $ma + k = b$이고 $mb + k = a$이므로
$$
\int_a^b (-1)\,f(a + b - x)\,dx = \int_b^a f
$$
이다. [[oriented-integral|방향 있는 적분]]의 정의에 의해 $b > a$이므로 오른쪽은 $-\int_a^b f$이다. 왼쪽은 [[linearity-of-the-integral|적분의 선형성]]의 (4)를 $k = -1$로 쓰면 $-\int_a^b \varphi$이다. 따라서 $-\int_a^b \varphi = -\int_a^b f$이고, 양쪽에 $-1$을 곱하면((K9)) $\int_a^b \varphi = \int_a^b f$이다.

**(2)** $g(x) = x\,f(x)$로 정한 $g : [a, b] \to \mathbb{R}$는 항등함수와 $f$의 곱이므로 연속함수이다(연속함수의 (4), 연속함수의 합·곱·몫의 (3)). 1을 $g$에 쓰면 $\int_a^b g = \int_a^b g(a + b - x)\,dx$이다. 가정에 의해 $[a, b]$의 모든 $x$에서
$$
\begin{aligned}
&g(a + b - x) \\
&\quad = (a + b - x)\,f(a + b - x) \\
&\quad = (a + b)\,f(x) - x\,f(x)
\end{aligned}
$$
이므로((K1), (K3), (K12)), 오른쪽의 함수는 $(a + b)f - g$이다([[real-valued-function|실함수와 그 연산]]의 (2), (4)). 적분의 선형성의 (4)에 의해
$$
\int_a^b g = (a + b)\int_a^b f - \int_a^b g
$$
이고, 양변에 $\int_a^b g$를 더해 $2\int_a^b g = (a + b)\int_a^b f$, 곧 $\int_a^b g = 2^{-1}(a + b)\int_a^b f$이다((K8)의 (iii)).

**(3)** $h(x) = x^2(1 - x)^2$으로 정한 $h : [0, 1] \to \mathbb{R}$는 [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (1)과 연속함수의 합·곱·몫의 (3), 연속함수의 합성의 (3)에 의해 연속함수이다. 실수의 계산 법칙과 [[power-of-a-real-number|실수의 거듭제곱]]의 (1), (2)의 (i)로 전개하면 $h(x) = x^2 - 2x^3 + x^4$이므로, [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)과 적분의 선형성의 (4)에 의해
$$
\begin{aligned}
\int_0^1 h &= \frac13 - 2 \cdot \frac14 + \frac15 \\
&= \frac{20 - 30 + 12}{60} = \frac{1}{30}
\end{aligned}
$$
이다. $a = 0$, $b = 1$이면 $a + b - x = 1 - x$이고, $h(1 - x) = (1 - x)^2\bigl(1 - (1 - x)\bigr)^2 = (1 - x)^2 x^2 = h(x)$이다((K1)). 실수의 거듭제곱의 (1)에 의해 $x\,h(x) = x^3(1 - x)^2$이므로, 2에 의해
$$
\begin{aligned}
&\int_0^1 x^3(1 - x)^2\,dx \\
&\quad = 2^{-1} \cdot 1 \cdot \frac{1}{30} = \frac{1}{60}
\end{aligned}
$$
이다. 전개한 식 $x^3 - 2x^4 + x^5$로 직접 계산해도 $\frac14 - \frac25 + \frac16 = \frac{15 - 24 + 10}{60} = \frac{1}{60}$이다.
:::

:::exercise[적분으로 정한 함수의 적분]
$a < b$인 실수 $a$, $b$와 연속함수 $f : [a, b] \to \mathbb{R}$에 대하여 $F(x) = \int_a^x f$로 정한 $F : [a, b] \to \mathbb{R}$를 생각한다.

1. $F$가 리만 적분가능하고
   $$
   \int_a^b F = \int_a^b (b - x)\,f(x)\,dx
   $$
   임을 보여라.
2. $a = 0$, $b = 1$, $f(x) = x$일 때 양변을 따로 계산해 맞추어 보라.
:::

:::solution
**(1)** $[a, b]$는 [[interval|구간]]의 (1)에 의해 구간이다. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)를 $I = [a, b]$, 밑점 $p = a$로 쓰면 $F$는 미분가능하고 $F' = f$이며 $F$는 연속미분가능하다. 같은 정리의 (6)에 의해 $F(a) = 0$이다. $G(x) = x - b$로 정한 $G : [a, b] \to \mathbb{R}$는 [[continuously-differentiable|연속미분가능한 함수]]의 (4)를 $m = 1$, $k = -b$로 쓰면 연속미분가능하고 $G'$은 값이 $1$인 상수함수이며, $G(b) = 0$이다.

[[integration-by-parts|부분적분]]의 (1)에 의해 $FG'$과 $F'G$는 리만 적분가능하고
$$
\begin{aligned}
\int_a^b F G' &= F(b)\,G(b) - F(a)\,G(a) \\
&\quad - \int_a^b F' G
\end{aligned}
$$
이다. 모든 $x$에서 $F(x)\,G'(x) = F(x) \cdot 1 = F(x)$이므로 $FG' = F$이고([[real-valued-function|실함수와 그 연산]]의 (2), [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)), 따라서 $F$는 적분가능하다. $G(b) = 0$, $F(a) = 0$이므로 오른쪽의 앞 두 항은 (K9)에 의해 $0$이다. $F'(x)\,G(x) = f(x)\,(x - b)$이고 $(-1)\bigl(f(x)(x - b)\bigr) = (b - x)\,f(x)$이므로((K1), (K3), (K9)), [[linearity-of-the-integral|적분의 선형성]]의 (4)를 $k = -1$로 쓰면
$$
\begin{aligned}
\int_a^b F &= -\int_a^b f(x)\,(x - b)\,dx \\
&= \int_a^b (b - x)\,f(x)\,dx
\end{aligned}
$$
이다.

**(2)** [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)을 $n = 1$로 쓰면 $F(x) = \int_0^x t\,dt = x^2 \cdot 2^{-1}$이고, 같은 (3)을 $n = 2$로 쓰고 적분의 선형성의 (4)를 쓰면 $\int_0^1 F = 2^{-1} \cdot 3^{-1} = 6^{-1}$이다. 오른쪽은 $(1 - x)\,x = x - x^2$이므로 같은 방법으로 $\int_0^1 (x - x^2)\,dx = 2^{-1} - 3^{-1} = 6^{-1}$이다. 두 값이 같다.
:::

:::exercise[0을 품은 구간에서 기본정리를 잘못 쓴 계산]
$P = \{x \in \mathbb{R} : 0 < x\}$로 두고, $G(x) = -x^{-1}$로 정한 $G : P \to \mathbb{R}$를 생각한다.

1. $G$가 $x$에서의 값이 $(x^2)^{-1}$인 함수 $P \to \mathbb{R}$의 원시함수임을 보여라.
2. 연속함수 $F : [-1, 1] \to \mathbb{R}$가 있어, $0 < x < 1$인 모든 $x$에서 $F$가 $x$에서 미분가능하고 $F'(x) = (x^2)^{-1}$이라고 하자. 이것이 모순임을 보여라.
3. $\phi : [-1, 1] \to \mathbb{R}$를 $\phi(0) = 0$이고 $x \ne 0$이면 $\phi(x) = (x^2)^{-1}$로 정하면 $\phi$는 적분가능하지 않음을 보여라.

$x < 0$에서도 같은 식 $-x^{-1}$을 쓰면 $x = 1$에서의 값 $-1$과 $x = -1$에서의 값 $1$의 차는 $(-1) - 1 = -2$이지만, 2와 3에 의해 미적분의 기본정리로 이 수를 $[-1, 1]$ 위의 적분이라고 할 근거는 없다. 이 수가 음수라는 것도 값이 모두 $0$ 이상인 함수의 적분으로는 맞지 않는다([[monotonicity-of-the-integral|적분의 단조성]]의 (4)).
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $P$는 [[interval|구간]]의 (2)에 의해 구간이고, $P$의 모든 원소에서 항등함수 $i_P$의 값은 $0$이 아니다. [[derivative|미분계수와 도함수]]의 (1)에 의해 $i_P$는 미분가능하고 미분계수가 모두 $1$이므로, [[derivative-rules|미분의 선형성과 곱·몫의 법칙]]의 (6)에 의해 $1/i_P$는 미분가능한 함수이고 $(1/i_P)'(x) = -1 \cdot (x^2)^{-1}$이다. $G = (-1)(1/i_P)$이므로([[real-valued-function|실함수와 그 연산]]의 (2), [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)) 같은 (6)에 의해 $G$는 미분가능한 함수이고 $G'(x) = (-1)\bigl(-(x^2)^{-1}\bigr) = (x^2)^{-1}$이다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 정의에 의해 $G$는 원시함수이다.

**(2)** $F|_{[0, 1]}$은 [[continuous-function|연속함수]]의 (5)에 의해 연속함수이므로, [[continuous-on-closed-interval-is-bounded|닫힌구간 위의 연속함수는 유계이다]]의 (1)에 의해 $[0, 1]$의 모든 $x$에서 $|F(x)| \le M$인 실수 $M$이 있고, [[absolute-value|절댓값]]의 (2)에 의해 $0 \le M$이다.

$0 < c < 1$인 실수 $c$를 하나 정하고 $J = [c, 1]$로 둔다. $r(x) = (x^2)^{-1}$로 정한 $r : J \to \mathbb{R}$는 [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (1), 연속함수의 (5), [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이고, [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 적분가능하다.

- $F|_J$는 연속함수이고, $c < x < 1$인 $x$에서 미분계수와 도함수의 (2)에 의해 $x$에서 미분가능하며 $(F|_J)'(x) = F'(x) = r(x)$이다. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 (1)에 의해 $\int_c^1 r = F(1) - F(c)$이다.
- $J \subseteq P$이므로 미분계수와 도함수의 (2)에 의해 $G|_J$는 미분가능한 함수이고 $(G|_J)'(x) = r(x)$이며, [[differentiable-implies-continuous|미분가능하면 연속이다]]의 (2)에 의해 연속함수이다. 같은 (1)에 의해 $\int_c^1 r = G(1) - G(c) = -1 + c^{-1}$이다.

따라서 $c^{-1} = F(1) - F(c) + 1$이다. 절댓값의 (6)에 의해 $F(1) \le |F(1)|$이고 $-|F(c)| \le F(c)$이므로 순서 성질 (3)의 (iii)에 의해 $-F(c) \le |F(c)|$이며, 순서 성질 (2)의 (iii)에 의해 $c^{-1} \le |F(1)| + |F(c)| + 1 \le 2M + 1$이다.

이제 $c = (2M + 2)^{-1}$로 둔다. $0 \le M$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le 2M$이고, 순서 성질 (10)과 (2)의 (i)에 의해 $1 < 2 \le 2M + 2$이며, 순서 성질 (6)의 (i), (ii)에 의해 $0 < c < 1$이다. (K8)의 (iii)에 의해 $c^{-1} = 2M + 2$인데, 위에 의해 $2M + 2 \le 2M + 1$이 되어 순서 성질 (2)의 (ii)로 $2 \le 1$이 된다. 이것은 순서 성질 (1)의 (i)과 $1 < 2$에 어긋난다. 따라서 그런 $F$는 없다.

**(3)** $\phi$가 유계라고 하자. 모든 $x \in [-1, 1]$에서 $|\phi(x)| \le B$인 실수 $B$가 있고, $|\phi(0)| = 0$이므로 $0 \le B$이다. $x_0 = (B + 1)^{-1}$로 두면 $1 \le B + 1$이므로 순서 성질 (6)의 (i), (ii)에 의해 $0 < x_0 \le 1$이고($B = 0$이면 $x_0 = 1$), (K12)의 (vi)과 (K8)의 (iii)에 의해 $(x_0^2)^{-1} = (B + 1)(B + 1)$이다. $0 \le 1 \le B + 1$이므로 순서 성질 (4)의 (iii)에 의해 $(B + 1)(B + 1) \ge (B + 1) \cdot 1 = B + 1 > B$이다. 곧 $|\phi(x_0)| = \phi(x_0) > B$이고([[absolute-value|절댓값]]의 (1)), 이것은 $B$의 성질에 어긋난다. 따라서 $\phi$는 유계가 아니고, [[riemann-integral|리만 적분]]의 (6)에 의해 적분가능하지 않다.
:::
