---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "3장 연습문제 ex_princval, source/exercises-chap3.ptx:669–711, 4장 연습문제 ex_funearlyint, source/exercises-chap4.ptx:472–527 — 문제 '정사각형의 네 변을 따른 $1/z$의 적분'과 같은 발상(출처는 Log(−1 + i) 같은 주값을 구하게 하고, 4 에서 4i 로 가는 선분 위의 (z + 1)/z 같은 적분을 주 로그로 계산하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "8장 연습문제 ex_8_3, source/exercises-chap8.ptx:258–270 — 문제 '닫힌 원판 위의 $|f|$의 최댓값과 원'의 (3)과 같은 발상(출처는 닫힌 단위원판 위에서 |z² − 2| 의 최댓값과 최솟값을 구하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "Logarithms and Complex Exponentials 절의 주값 a^b 의 정의, source/sec_logexp.ptx:235–246 — 문제 '주 로그로 정한 제곱근'과 같은 대상(출처는 a ≠ 0 에서 a^b 의 주값을 exp(b Log(a)) 로 정의한다. 이 문제의 s(z) 는 Ω 위에서 b = 1/2 인 경우이다)"
added: 2026-11-27
---

:::exercise[정사각형의 네 변을 따른 $1/z$의 적분]
$z$에서의 값이 $1/z$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$를 생각하고, 닫힌 경로열
$$
\begin{aligned}
\Pi = (&\sigma_{1-i,\,1+i},\ \sigma_{1+i,\,-1+i}, \\
&\sigma_{-1+i,\,-1-i},\ \sigma_{-1-i,\,1-i})
\end{aligned}
$$
을 둔다.

1. 첫째, 둘째, 넷째 선분의 상이 $\Omega$의 부분집합이고, 그 셋을 따른 $1/z$의 적분이 모두 $\tfrac{\pi}{2} i$임을 보여라.
2. $H = \{z \in \mathbb{C} : -z \in \Omega\}$로 두면 $H$는 열린집합이고, $z$에서의 값이 $\operatorname{Log}(-z)$인 함수 $L : H \to \mathbb{C}$는 $H$ 위의 $1/z$의 복소 원시함수임을 보여라. 이것으로 셋째 선분을 따른 적분을 구하고, $\int_\Pi \frac{dz}{z} = 2\pi i$임을 보여라.
:::

:::solution
"로그 (n)"은 [[principal-logarithm|주 로그]], "원시 (n)"은 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 번호이다. 실수는 [[complex-field|복소수체]]의 (3)의 약속대로 복소수 자리에 쓴다. [[square-root-exists|제곱근]]의 (1)에 의해 $\sqrt{2}\sqrt{2} = 2$이고, [[exponential-function]]의 (1)에 의해 $\exp(\ln\sqrt{2}) = \sqrt{2}$이다.

**네 꼭짓점의 주 로그.** [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (1)에 의해 $\exp(i\pi/4) = \tfrac{\sqrt{2}}{2}(1 + i)$이다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)에 의해 $\exp(3\pi i/4) = \exp(i(\pi/4 + \pi/2)) = i\exp(i\pi/4) = \tfrac{\sqrt{2}}{2}(-1 + i)$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)와 [[complex-conjugate|켤레복소수]]의 (1)에 의해 $\exp(-i\pi/4) = \tfrac{\sqrt{2}}{2}(1 - i)$이고 $\exp(-3\pi i/4) = \tfrac{\sqrt{2}}{2}(-1 - i)$이다. 덧셈 법칙의 (4)에 의해 $\exp(\ln\sqrt{2} + i\theta) = \sqrt{2}\exp(i\theta)$이므로
$$
\begin{aligned}
\exp(\ln\sqrt{2} + i\pi/4) &= 1 + i, \\
\exp(\ln\sqrt{2} - i\pi/4) &= 1 - i, \\
\exp(\ln\sqrt{2} + 3\pi i/4) &= -1 + i, \\
\exp(\ln\sqrt{2} - 3\pi i/4) &= -1 - i
\end{aligned}
$$
이다. 네 수는 허수부가 $0$이 아니므로 로그 (1)의 (i)에 의해 $\Omega$에 들고, $\pm\pi/4$, $\pm 3\pi/4$는 $-\pi$와 $\pi$ 사이에 있으므로([[definition-of-pi|원주율]]의 (4)의 $0 < \pi$) 로그 (4)에 의해
$$
\begin{aligned}
\operatorname{Log}(1 \pm i) &= \ln\sqrt{2} \pm \tfrac{\pi}{4} i, \\
\operatorname{Log}(-1 \pm i) &= \ln\sqrt{2} \pm \tfrac{3\pi}{4} i
\end{aligned}
$$
이다(복부호 같은 순서).

**(1)** [[path-in-the-complex-plane|경로]]의 (2)에 의해 첫째, 둘째, 넷째 선분의 $t$에서의 값은 차례로 $1 + (-1 + 2t)i$, $(1 - 2t) + i$, $(-1 + 2t) - i$이다. 첫째의 실수부는 $1 > 0$이고 둘째와 넷째의 허수부는 $\pm 1 \ne 0$이므로, 로그 (1)의 (i)에 의해 세 상은 $\Omega$의 부분집합이다. 로그 (2)에 의해 $\operatorname{Log}$는 $\Omega$ 위의 $1/z$의 복소 원시함수이고 $1/z$는 $\Omega$ 위에서 연속이므로([[complex-derivative|복소 미분]]의 (3)), 원시 (2)의 (i)과 (1)에 의해 세 적분은
$$
\begin{aligned}
&\operatorname{Log}(1 + i) - \operatorname{Log}(1 - i) = \tfrac{\pi}{2} i, \\
&\operatorname{Log}(-1 + i) - \operatorname{Log}(1 + i) = \tfrac{\pi}{2} i, \\
&\operatorname{Log}(1 - i) - \operatorname{Log}(-1 - i) = \tfrac{\pi}{2} i
\end{aligned}
$$
이다.

**(2)** *$H$는 열린집합.* $z \in H$라 하자. 로그 (1)의 (ii)에 의해 $\Omega$는 열린집합이므로 $B(-z, \rho) \subseteq \Omega$인 $\rho > 0$이 있다. $v \in B(z, \rho)$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $|-v - (-z)| = |v - z| < \rho$이므로 $-v \in \Omega$, 곧 $v \in H$이다. 따라서 $B(z, \rho) \subseteq H$이고 $H$는 열린집합이다.

*원시함수.* $n(z) = -z$로 정한 $n : H \to \mathbb{C}$는 복소 미분의 (5)에 의해 정칙함수이고 미분계수가 $-1$이며, 값이 $\Omega$에 든다. [[complex-derivative-rules|복소 미분의 법칙]]의 (5)(연쇄법칙)와 로그 (2)에 의해 $L = \operatorname{Log} \circ n$은 정칙함수이고
$$
L'(z) = \frac{1}{-z} \cdot (-1) = \frac{1}{z}
$$
이다. $z \in H$이면 $-z \ne 0$이므로 $z \ne 0$이고, $1/z$의 함수를 $H$로 제한한 것이 연속이다.

*셋째 선분.* $\sigma_{-1+i,-1-i}(t) = -1 + (1 - 2t)i$이고 $-\sigma_{-1+i,-1-i}(t)$의 실수부는 $1 > 0$이므로 상은 $H$의 부분집합이다. 원시 (2)의 (i)에 의해 적분은
$$
\begin{aligned}
&L(-1 - i) - L(-1 + i) \\
&\quad = \operatorname{Log}(1 + i) - \operatorname{Log}(1 - i) \\
&\quad = \tfrac{\pi}{2} i
\end{aligned}
$$
이다. $\Pi$는 네 선분의 끝점과 시작점이 차례로 맞고 시작점과 끝점이 $1 - i$인 닫힌 경로열이고, 그 상은 $0$을 원소로 갖지 않으므로, [[path-integral|경로 적분]]의 경로열의 정의에 의해 $\int_\Pi \frac{dz}{z} = 4 \cdot \tfrac{\pi}{2} i = 2\pi i$이다.

$2\pi i \ne 0$이므로 원시 (3)의 마지막 문장에 의해 $1/z$는 $\mathbb{C} - \{0\}$ 위에서 복소 원시함수를 갖지 않는다. 여기서는 네 변을 두 원시함수 $\operatorname{Log}$와 $L$로 나누어 계산했다.
:::

:::exercise[도함수의 영점의 중복도]
$G$를 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$를 정칙함수, $a$를 $f$의 영점이라 하고 [[zeros-of-holomorphic-functions|정칙함수의 영점]]의 (나)가 성립한다고 하자. $m$을 $a$의 중복도라 한다.

1. $m \ge 2$이면 $a$는 $f'$의 영점이고, $f'$에서도 (나)가 성립하며, 그 중복도가 $m - 1$임을 보여라.
2. $m = 1$이면 $f'(a) \ne 0$임을 보여라.
:::

:::solution
"영점 (n)"은 [[zeros-of-holomorphic-functions|정칙함수의 영점]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]]의 번호이다. [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 $f'$은 정칙함수이고 $f$는 무한 번 미분가능하다. 고계 (4)를 $n = m$에 쓰면 $f'$은 $m$번 미분가능하고 $0 \le k \le m$인 모든 $k$에서 $(f')^{(k)} = f^{(k+1)}$이다.

영점 (3)의 (ii)에 의해 $0 \le k < m$에서 $f^{(k)}(a) = 0$이고 $f^{(m)}(a) \ne 0$이다.

**(1)** $m \ge 2$이면 $1 < m$이므로 고계 (1)에 의해 $f'(a) = f^{(1)}(a) = 0$이고, $a$는 $f'$의 영점이다. 위에 의해 $0 \le k < m - 1$에서 $(f')^{(k)}(a) = f^{(k+1)}(a) = 0$이고 $(f')^{(m-1)}(a) = f^{(m)}(a) \ne 0$이다. 그러므로 $0$ 이상인 모든 $k$에서 $(f')^{(k)}(a) = 0$인 것은 아니어서, 영점 (3)의 (i)을 $f'$에 쓰면 $f'$의 영점 $a$에서 (가)가 성립하지 않는다. 영점 (1)에 의해 (나)가 성립하고, 영점 (3)의 (ii)에 의해 그 중복도는 $(f')^{(k)}(a) \ne 0$인 가장 작은 $k$, 곧 $m - 1$이다.

**(2)** $m = 1$이면 위의 $f^{(m)}(a) \ne 0$이 $f^{(1)}(a) = f'(a) \ne 0$이다(고계 (1)).
:::

:::exercise[$1/n$에서 정해진 값을 갖는 정칙함수]
$B(0, 1)$ 위의 정칙함수를 생각한다.

1. $2$ 이상인 모든 자연수 $n$에서 $f(1/n) = (-1)^n / n$인 정칙함수 $f : B(0, 1) \to \mathbb{C}$는 없음을 보여라.
2. $2$ 이상인 모든 자연수 $n$에서 $f(1/n) = 1/(n + 1)$인 정칙함수 $f : B(0, 1) \to \mathbb{C}$는 정확히 하나 있고, 그것은 $z$에서의 값이 $z/(1 + z)$인 함수임을 보여라.
:::

:::solution
"일치 (n)"은 [[identity-theorem|일치 정리]]의 번호이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)에 의해 $B(0, 1)$은 영역이다. $n \ge 2$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|1/n| = 1/n < 1$이므로 $1/n \in B(0, 1)$이다.

**보조: 집적점.** $T$가 $B(0, 1)$의 부분집합이고 $2$ 이상인 모든 짝수 $n$에서 $1/n \in T$이면 $0$은 $T$의 집적점이다. 실수 $r > 0$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/k < r$인 자연수 $k$가 있다. $n = 2k$로 두면 $1/n = \tfrac12 \cdot \tfrac1k$이고 $0 < 1/n < 1/k < r$이므로, $1/n \in T$, $1/n \ne 0$, $|1/n - 0| < r$이다. [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (i)에 의해 $0$은 $T$의 집적점이다.

**(1)** 그런 $f$가 있다고 하자. $g(z) = z$인 $g : B(0, 1) \to \mathbb{C}$는 [[complex-derivative|복소 미분]]의 (5)에 의해 정칙함수이다. $n$이 $2$ 이상인 짝수이면 $(-1)^n = 1$이므로([[power-of-a-real-number|실수의 거듭제곱]]의 (5)) $f(1/n) = 1/n = g(1/n)$이다. 따라서 $E = \{z : f(z) = g(z)\}$는 보조의 조건을 만족하고 $0 \in B(0, 1)$은 $E$의 집적점이다. 일치 (2)에 의해 모든 $z$에서 $f(z) = z$이고, $f(1/3) = 1/3$이다. 그런데 가정에 의해 $f(1/3) = (-1)^3/3 = -1/3$이고 $1/3 \ne -1/3$이므로 어긋난다.

**(2)** *있다.* $z \in B(0, 1)$이면 $1 + z \ne 0$이다($1 + z = 0$이면 $z = -1$이고 $|z| = 1$이다). 복소 미분의 (5)와 [[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (iii)에 의해 $h(z) = z/(1 + z)$인 $h : B(0, 1) \to \mathbb{C}$는 정칙함수이고, $n \ge 2$이면 $h(1/n) = \frac{1/n}{1 + 1/n} = \frac{1}{n + 1}$이다.

*하나뿐이다.* $f$가 조건을 만족하면 $E = \{z : f(z) = h(z)\}$는 $2$ 이상인 모든 $n$에서 $1/n$을 원소로 가지므로 보조에 의해 $0$은 $E$의 집적점이고, 일치 (2)에 의해 $f = h$이다.
:::

:::exercise[두 방향으로 주기적인 정함수]
정함수 $f$가 모든 복소수 $z$에서 $f(z + 1) = f(z)$이고 $f(z + i) = f(z)$라 하자.

1. 모든 정수 $m$, $n$과 복소수 $z$에서 $f(z + m + ni) = f(z)$임을 보여라.
2. $f$가 상수함수임을 보여라.
3. $z$에서의 값이 $\exp(2\pi i z)$인 정함수는 $f(z + 1) = f(z)$만 만족하고 상수함수가 아님을 보여라.
:::

:::solution
**(1)** 자연수 $k$에 대하여 $P(k)$를 "모든 $z$에서 $f(z + k) = f(z)$"라 하자. $P(1)$은 가정이다. $P(k)$가 참이면 $f(z + (k + 1)) = f((z + k) + 1) = f(z + k) = f(z)$이므로 $P(k + 1)$도 참이다. [[mathematical-induction|수학적 귀납법]]에 의해 모든 자연수 $k$에서 $P(k)$가 참이다. $P(k)$를 $z - k$에 쓰면 $f(z) = f(z - k)$이다. $m = 0$이면 할 것이 없으므로, 모든 정수 $m$에서 $f(z + m) = f(z)$이다. $i$에 대해서도 같은 논법으로 모든 정수 $n$에서 $f(z + ni) = f(z)$이다. 따라서 $f(z + m + ni) = f((z + m) + ni) = f(z + m) = f(z)$이다.

**(2)** $K = \{\zeta : |\zeta| \le 2\}$는 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (2)에 의해 콤팩트이고 $0$을 원소로 가진다. $f$는 [[complex-derivative|복소 미분]]의 (3)에 의해 연속이므로, 같은 항목의 (4)의 (ii)에 의해 $K$의 모든 $\zeta$에서 $|f(\zeta)| \le |f(c)|$인 $c \in K$가 있다.

복소수 $z$를 잡고 $x = \operatorname{Re} z$, $y = \operatorname{Im} z$로 두자. [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $m - 1 \le x < m$, $n - 1 \le y < n$인 정수 $m$, $n$이 있다. $w = z - (m - 1) - (n - 1)i$로 두면 [[complex-field|복소수체]]의 (4)에 의해 $\operatorname{Re} w = x - (m - 1)$, $\operatorname{Im} w = y - (n - 1)$이고 둘 다 $0$ 이상 $1$ 미만이다([[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (i), (2)의 (ii)). [[modulus-of-complex-number|복소수의 절댓값]]의 (6)에 의해 $|w| \le |\operatorname{Re} w| + |\operatorname{Im} w| < 2$이므로 $w \in K$이다. (1)에 의해 $f(z) = f(w + (m - 1) + (n - 1)i) = f(w)$이므로 $|f(z)| = |f(w)| \le |f(c)|$이다.

따라서 모든 $z$에서 $|f(z)| \le |f(c)|$이고, [[liouville-theorem|리우빌 정리]]의 (1)에 의해 $f$는 상수함수이다.

**(3)** $E(z) = \exp(2\pi i z)$로 두면 [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (3)에 의해 $E$는 정함수이다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)의 $\exp(w + 2\pi i) = \exp(w)$를 $w = 2\pi i z$에 쓰면 $E(z + 1) = E(z)$이다. 한편 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $E(0) = 1$이고, 주기성의 (1)에 의해 $E(1/2) = \exp(i\pi) = -1$이므로 $E$는 상수함수가 아니다. (2)에 의해 $E$는 $E(z + i) = E(z)$를 만족할 수 없다.
:::

:::exercise[닫힌 원판 위의 $|f|$의 최댓값과 원]
$a$를 복소수, $r$을 양의 실수, $G$를 $C(a, r) \subseteq G$인 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$를 정칙함수라 하자.

1. $|z_1 - a| = r$이고 $C(a, r)$의 모든 $z$에서 $|f(z)| \le |f(z_1)|$인 $z_1$이 있음을 보여라.
2. $|w - a| < r$인 $w$가 $C(a, r)$의 모든 $z$에서 $|f(z)| \le |f(w)|$를 만족하면, $C(a, r)$의 모든 $z$에서 $f(z) = f(w)$임을 보여라.
3. $f(z) = z^2 + 2z$, $a = 0$, $r = 1$일 때 $C(0, 1)$ 위의 $|f|$의 최댓값이 $3$이고 $z = 1$에서 이 값을 가지며, $|w| < 1$인 점에서는 이 값을 갖지 않음을 보여라.
:::

:::solution
"최대 (n)"은 [[maximum-modulus-principle|최대 절댓값 원리]]의 번호이다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $z \in C(a, r)$인 것은 정확히 $|z - a| \le r$일 때이다.

**준비.** [[cauchy-integral-formula|코시 적분 공식]]의 (1)에 의해 $r < R$이고 $B(a, R) \subseteq G$인 $R$이 있다. [[open-ball]]의 (2)에 의해 $C(a, r) \subseteq B(a, R)$이다. $B(a, R)$는 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)에 의해 영역이고, $f_0 = f|_{B(a, R)}$는 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 정칙함수이다.

*안쪽 점에서의 최대.* $|c - a| < r$인 $c$가 $C(a, r)$의 모든 $z$에서 $|f(z)| \le |f(c)|$를 만족하면 $B(a, R)$의 모든 $z$에서 $f(z) = f(c)$임을 보인다. $\delta = r - |c - a|$로 두면 $0 < \delta$이고, [[open-ball]]의 (3)과 (1)에 의해 $B(c, \delta) \subseteq B(a, r) \subseteq C(a, r)$이다. 그러므로 $B(c, \delta) \subseteq B(a, R)$이고 그 위에서 $|f_0(z)| \le |f_0(c)|$이다. 최대 (1)을 영역 $B(a, R)$와 $f_0$에 쓰면 된다.

**(1)** $C(a, r)$는 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (2)에 의해 콤팩트이고 $a$를 원소로 가지며, $f$는 복소 미분의 (3)에 의해 연속이다. 같은 항목의 (4)의 (ii)에 의해 $C(a, r)$의 모든 $z$에서 $|f(z)| \le |f(c)|$인 $c \in C(a, r)$가 있다. $|c - a| = r$이면 $z_1 = c$로 둔다. $|c - a| < r$이면 준비에 의해 $B(a, R)$에서 $f = f(c)$이고, $z_1 = a + r$로 두면 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z_1 - a| = r$이며 $z_1 \in C(a, r) \subseteq B(a, R)$이므로 $f(z_1) = f(c)$이다. 어느 경우든 $z_1$이 조건을 만족한다.

**(2)** 준비를 $c = w$에 쓰면 $B(a, R) \supseteq C(a, r)$에서 $f = f(w)$이다.

**(3)** $f$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)에 의해 정함수이므로 $G = \mathbb{C}$로 둔다. $|z| \le 1$이면 체의 계산으로 $f(z) = z(z + 2)$이고, 절댓값의 (3)과 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2), [[order-properties-of-reals|실수의 순서의 성질]]의 (11)의 (i)에 의해
$$
\begin{aligned}
|f(z)| &= |z|\,|z + 2| \\
&\le 1 \cdot (|z| + 2) \le 3
\end{aligned}
$$
이다. $f(1) = 3$이므로 최댓값은 $3$이고 $z_1 = 1$에서 갖는다. $|w| < 1$인 $w$에서 $|f(w)| = 3$이면 $C(0, 1)$의 모든 $z$에서 $|f(z)| \le 3 = |f(w)|$이므로 (2)에 의해 $f(0) = f(w) = f(1)$이어야 하는데, $f(0) = 0 \ne 3 = f(1)$이다. 따라서 그런 $w$는 없다.
:::

:::exercise[주 로그로 정한 제곱근]
$z \in \Omega$에서의 값이 $s(z) = \exp\bigl(\tfrac12 \operatorname{Log} z\bigr)$인 함수 $s : \Omega \to \mathbb{C}$를 생각한다.

1. $s$가 정칙함수이고, 모든 $z \in \Omega$에서 $s(z)^2 = z$이며 $s'(z) = s(z)/(2z)$임을 보여라.
2. 모든 $z \in \Omega$에서 $0 < \operatorname{Re} s(z)$임을 보여라.
3. $z \in \Omega$이고 복소수 $w$가 $w^2 = z$, $0 < \operatorname{Re} w$를 만족하면 $w = s(z)$임을 보여라. 이것으로 $0 < x$인 실수 $x$에서 $s(\iota(x)) = \iota(\sqrt{x})$임을 보이고, $s(i)$를 구하라.
:::

:::solution
"로그 (n)"은 [[principal-logarithm|주 로그]]의 번호이다.

**(1)** 로그 (2)에 의해 $\operatorname{Log}$는 정칙함수이고 $\operatorname{Log}'(z) = 1/z$이다. [[complex-derivative-rules|복소 미분의 법칙]]의 (1)(상수배)에 의해 $z$에서의 값이 $\tfrac12\operatorname{Log} z$인 함수는 정칙이고 미분계수가 $1/(2z)$이다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp' = \exp$이므로, 법칙 (5)(연쇄법칙)에 의해 $s$는 정칙함수이고 $s'(z) = \exp(\tfrac12\operatorname{Log} z) \cdot \tfrac{1}{2z} = s(z)/(2z)$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (3)을 $n = 2$에 쓰고 로그 (3)을 쓰면 $s(z)^2 = \exp(2 \cdot \tfrac12\operatorname{Log} z) = \exp(\operatorname{Log} z) = z$이다.

**(2)** $x = \operatorname{Re}\operatorname{Log} z$, $y = \operatorname{Im}\operatorname{Log} z$로 두면 로그 (3)에 의해 $-\pi < y < \pi$이다. [[complex-field|복소수체]]의 (2)의 (ii)에 의해 $\tfrac12\operatorname{Log} z$의 실수부는 $x/2$, 허수부는 $y/2$이고, [[cosine-and-sine|코사인과 사인]]의 (5)에 의해 $\operatorname{Re} s(z) = \exp(x/2)\cos(y/2)$이다. [[absolute-value]]의 (7)에 의해 $|y/2| < \pi/2$이므로 [[definition-of-pi|원주율]]의 (2)의 (iii)에 의해 $0 < \cos(y/2)$이고, [[exponential-function]]의 (1)에 의해 $0 < \exp(x/2)$이다. 곱은 양수이다([[order-properties-of-reals|실수의 순서의 성질]]의 (4)의 (i)).

**(3)** (1)에 의해 $w^2 = z = s(z)^2$이므로 체의 계산으로 $(w - s(z))(w + s(z)) = w^2 - s(z)^2 = 0$이다. (2)와 가정에 의해 $\operatorname{Re}(w + s(z)) = \operatorname{Re} w + \operatorname{Re} s(z) > 0$이므로 $w + s(z) \ne 0$이고, 체에서 $w - s(z) = 0$이다.

$0 < x$이면 로그 (1)의 (i)에 의해 $\iota(x) \in \Omega$이다. [[square-root-exists|제곱근]]의 (1)에 의해 $\sqrt{x}\sqrt{x} = x$이고 $0 \le \sqrt{x}$이며, $\sqrt{x} = 0$이면 $x = 0$이 되므로 $0 < \sqrt{x}$이다. 복소수체의 (2)에 의해 $\iota(\sqrt{x})^2 = \iota(x)$이고 $\operatorname{Re}\iota(\sqrt{x}) = \sqrt{x} > 0$이므로, 앞 문단에 의해 $s(\iota(x)) = \iota(\sqrt{x})$이다.

$i$는 허수부가 $1$이므로 $\Omega$에 든다. 제곱근의 (1)의 $\sqrt{2}\sqrt{2} = 2$와 복소수체의 (5)에 의해 $w = \tfrac{\sqrt{2}}{2}(1 + i)$이면 $w^2 = \tfrac{2}{4}(1 + i)^2 = \tfrac12 \cdot 2i = i$이고 $\operatorname{Re} w = \tfrac{\sqrt{2}}{2} > 0$이다. 앞 문단에 의해 $s(i) = \tfrac{\sqrt{2}}{2}(1 + i)$이다.
:::

:::exercise[원판의 경계로 모여드는 영점]
$z \in B(0, 1)$에서의 값이
$$
f(z) = \exp\Bigl(\frac{2\pi i}{1 - z}\Bigr) - 1
$$
인 함수 $f : B(0, 1) \to \mathbb{C}$를 생각한다.

1. $f$가 정칙함수이고 $f(1/3) = -2$임을 보여라.
2. 모든 자연수 $k$에서 $z_k = 1 - 1/k$는 $B(0, 1)$의 원소이고 $f(z_k) = 0$임을 보여라.
3. $f$의 영점의 집합 $Z$에 대하여 $1$은 $Z$의 집적점이지만, $B(0, 1)$의 어느 점도 $Z$의 집적점이 아님을 보여라. [[identity-theorem|일치 정리]]의 (1)이 "$G$의 어떤 점"이 집적점이라는 가정을 둔다는 것과 맞춰 보라.
:::

:::solution
**(1)** $z \in B(0, 1)$이면 $z \ne 1$이다($|1| = 1$). [[complex-derivative|복소 미분]]의 (5)에 의해 $1 - z$의 함수는 정칙이고 값이 $0$이 아니므로 [[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (iii)에 의해 $u(z) = 1/(1 - z)$인 $u : B(0, 1) \to \mathbb{C}$는 정칙함수이다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (3)에 의해 $w$에서의 값이 $\exp(2\pi i w)$인 함수는 정함수이므로, 법칙 (5)(연쇄법칙)와 (1)(차)에 의해 $f$는 정칙함수이다.

$u(1/3) = 3/2$이므로 $f(1/3) = \exp(3\pi i) - 1$이다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)와 (1)에 의해 $\exp(3\pi i) = \exp(i(\pi + 2\pi)) = \exp(i\pi) = -1$이므로 $f(1/3) = -2$이다.

**(2)** $0 \le 1 - 1/k < 1$이므로 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z_k| < 1$이고 $z_k \in B(0, 1)$이다. $1 - z_k = 1/k$이므로 $u(z_k) = k$이고 $f(z_k) = \exp(i \cdot 2\pi k) - 1$이다. $2\pi k \in 2\pi\mathbb{Z}$이므로 주기성의 (3)에 의해 $\exp(i \cdot 2\pi k) = 1$이고 $f(z_k) = 0$이다.

**(3)** 실수 $r > 0$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/k < r$인 자연수 $k$가 있고, $z_k \in Z$, $z_k \ne 1$, $|z_k - 1| = 1/k < r$이다. [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (i)에 의해 $1$은 $Z$의 집적점이다.

한편 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)에 의해 $B(0, 1)$은 영역이고, (1)에 의해 $f(1/3) \ne 0$이다. 일치 정리의 (4)에 의해 $B(0, 1)$의 어느 점도 $Z$의 집적점이 아니다. $1$은 $B(0, 1)$의 원소가 아니므로 일치 정리의 (1)의 가정을 만족하지 않고, 실제로 $f$는 영함수가 아니다. 영점이 무한히 많고 그 집적점이 있어도, 그 점이 정의역 밖에 있으면 일치 정리의 결론이 성립하지 않을 수 있다.
:::
