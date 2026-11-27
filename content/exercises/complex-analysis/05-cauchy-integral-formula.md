---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제 ex_funints, source/exercises-chap4.ptx:808–862, 5장 연습문제 ex_5_1, source/exercises-chap5.ptx:102–201 — 문제 '원 안의 두 점과 평균값 성질로 계산하는 적분'의 (1)과 같은 발상(출처는 원 위의 exp(z)/(z(z − 3)) 같은 적분을 부분분수와 코시 적분 공식으로 계산하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제 ex_4_5, source/exercises-chap4.ptx:703–721, 연습문제 ex_poissonkernel, source/exercises-chap4.ptx:722–740 — 문제 '원 안의 두 점과 평균값 성질로 계산하는 적분'의 (2)와 같은 발상(출처는 [0, 2π] 위의 실수 적분을 z = e^{iφ} 로 원 위의 복소 적분으로 바꾸어 계산하게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "8장 연습문제, source/exercises-chap8.ptx:291–309 — 문제 '원 위의 상계로 원판 안의 값 누르기'와 같은 발상(출처는 코시 적분 공식으로 |f(z₀)^k| ≤ cM^k 를 얻어 |f(z₀)| ≤ M 을 결론짓게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "8장 연습문제 ex_evenoddfunctions, source/exercises-chap8.ptx:595–610 — 문제 '홀함수의 짝수 차 도함수'와 같은 발상(출처는 짝함수·홀함수의 0 에서의 급수에 짝수 차·홀수 차 항만 있음을 보이게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "5장 연습문제 ex_diffbutnottwicediff, source/exercises-chap5.ptx:228–244 — 문제 '실수축 위의 $x|x|$와 정칙함수'와 같은 발상(출처는 미분가능하지만 도함수가 연속이 아닌 실함수 x² sin(1/x) 로 정칙함수가 무한 번 미분가능하다는 따름 정리와 대비하게 한다)"
added: 2026-11-27
---

:::exercise[세로 반직선을 뺀 평면]
$R = \{yi : y \in \mathbb{R},\ 1 \le y\}$, $A = \mathbb{C} - R$로 둔다. 곧 $A$는 허수축의 $i$ 위쪽 부분($i$ 포함)을 뺀 평면이다.

1. $A$가 $(\mathbb{C}, d)$의 열린집합임을 보여라.
2. $\eta < 1$인 모든 실수 $\eta$에 대하여 $A$가 $\eta i$에 대해 별 모양임을 보여라.
3. $A$가 $p \in A$에 대해 별 모양인 것은 정확히 $p$가 (2)의 꼴, 곧 어떤 실수 $\eta < 1$에서 $p = \eta i$일 때임을 보여라.
:::

:::solution
"별 모양"은 [[star-shaped-open-set|별 모양 열린집합]]의 것이다. [[complex-field|복소수체]]의 (4)에 의해 복소수 $z$가 $R$의 원소인 것은 정확히 $\operatorname{Re} z = 0$이고 $1 \le \operatorname{Im} z$일 때이다. 따라서 $z \in A$인 것은 정확히 $\operatorname{Re} z \ne 0$이거나 $\operatorname{Im} z < 1$일 때이다([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)).

**(1)** $z \in A$라 하자. [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $v \in B(z, \rho)$인 것은 $|v - z| < \rho$이다.

- $\operatorname{Re} z \ne 0$이면 $\rho = |\operatorname{Re} z| > 0$으로 둔다. $v \in B(z, \rho)$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (6)과 복소수체의 (1)에 의해 $|\operatorname{Re} v - \operatorname{Re} z| \le |v - z| < \rho$이다. $\operatorname{Re} v = 0$이라면 왼쪽이 $|\operatorname{Re} z| = \rho$가 되어 어긋나므로 $\operatorname{Re} v \ne 0$이고 $v \in A$이다.
- $\operatorname{Re} z = 0$이면 $\operatorname{Im} z < 1$이므로 $\rho = 1 - \operatorname{Im} z > 0$으로 둔다. $v \in B(z, \rho)$이면 같은 이유로 $|\operatorname{Im} v - \operatorname{Im} z| < \rho$이고, [[absolute-value]]의 (8)에 의해 $\operatorname{Im} v < \operatorname{Im} z + \rho = 1$이므로 $v \in A$이다.

어느 경우든 $B(z, \rho) \subseteq A$이므로 [[open-set-in-metric-space]]의 정의에 의해 $A$는 열린집합이다.

**(2)** $p = \eta i$로 두면 $\operatorname{Im} p = \eta < 1$이므로 $p \in A$이다. $z \in A$, $0 \le t \le 1$이고 $v = p + t(z - p)$라 하자. 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re} v = t\operatorname{Re} z$이고 $\operatorname{Im} v = (1 - t)\eta + t\operatorname{Im} z$이다.

- $t = 0$이면 $v = p \in A$이다.
- $0 < t$이고 $\operatorname{Re} z \ne 0$이면 $\operatorname{Re} v = t\operatorname{Re} z \ne 0$이므로 $v \in A$이다.
- $\operatorname{Re} z = 0$이면 $z \in A$에서 $\operatorname{Im} z < 1$이다. $t < 1$이면 $0 < 1 - t$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (4)의 (i)에 의해 $(1 - t)\eta < 1 - t$이고, (4)의 (iii)에 의해 $t\operatorname{Im} z \le t$이므로 (2)의 (iv)에 의해 $\operatorname{Im} v < (1 - t) + t = 1$이다. $t = 1$이면 $\operatorname{Im} v = \operatorname{Im} z < 1$이다. 어느 쪽이든 $v \in A$이다.

따라서 모든 $z \in A$에서 $\sigma_{p,z}$의 상은 $A$의 부분집합이고, (1)과 별 모양의 정의에 의해 $A$는 $\eta i$에 대해 별 모양인 열린집합이다.

**(3)** $p \in A$가 (2)의 꼴이면 (2)에 의해 $A$는 $p$에 대해 별 모양이다. 거꾸로 $p \in A$가 그 꼴이 아니라 하자. $\operatorname{Re} p = 0$이면 $p = (\operatorname{Im} p) i$이고 $p \in A$에서 $\operatorname{Im} p < 1$이어서 (2)의 꼴이 되므로, $\operatorname{Re} p \ne 0$이다. $z = -\operatorname{Re} p + (2 - \operatorname{Im} p) i$로 두면 $\operatorname{Re} z \ne 0$이므로 $z \in A$이다. 그런데 [[complex-field|복소수체]]의 (4)에 의해 $p + z = 2i$이므로
$$
\begin{aligned}
\sigma_{p,z}(\tfrac12) &= p + \tfrac12(z - p) \\
&= \tfrac12(p + z) = i
\end{aligned}
$$
이고 $i = 1 \cdot i \in R$이다. 곧 $\sigma_{p,z}$의 상은 $A$의 부분집합이 아니므로 $A$는 $p$에 대해 별 모양이 아니다. 예를 들어 $p = 1$이면 $z = -1 + 2i$이다.
:::

:::exercise[원 안의 두 점과 평균값 성질로 계산하는 적분]
1. $\displaystyle\int_{\gamma_{0,2}} \frac{\exp(z)}{z^2 - 1}\,dz$를 구하라.
2. [[cauchy-integral-formula|코시 적분 공식]]의 (3)을 $f = \exp$, $a = 0$, $r = 1$에 써서 실수의 적분
   $$
   \begin{aligned}
   &\int_0^{2\pi} \exp(\cos t)\cos(\sin t)\,dt, \\
   &\int_0^{2\pi} \exp(\cos t)\sin(\sin t)\,dt
   \end{aligned}
   $$
   의 값을 구하라.
:::

:::solution
"공식 (n)"은 [[cauchy-integral-formula|코시 적분 공식]]의 번호이다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이므로, 공식 (4)에 의해 모든 양의 실수 $r$에서 $G = \mathbb{C}$로 공식 (2)와 (3)을 쓸 수 있다.

**(1)** $z \ne \pm 1$이면 체의 계산([[complex-field|복소수체]]의 (1))으로
$$
\frac{1}{z - 1} - \frac{1}{z + 1} = \frac{2}{z^2 - 1}
$$
이다. 원 경로 $\gamma_{0,2}$의 상의 점은 $|z| = 2$이므로 $\pm 1$이 아니다([[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|\pm 1| = 1$). 상의 점에서 피적분함수는 $\tfrac12\bigl(\exp(z)/(z - 1) - \exp(z)/(z + 1)\bigr)$와 같으므로 [[path-integral|경로 적분]]의 (1)(선형성과 상 위의 값)에 의해 적분은 두 적분의 차의 $\tfrac12$배이다. $|\pm 1 - 0| = 1 < 2$이므로 공식 (2)를 $w = 1$과 $w = -1$에 쓰면 두 적분은 $2\pi i\exp(1)$과 $2\pi i\exp(-1)$이고, 답은
$$
\pi i\bigl(\exp(1) - \exp(-1)\bigr)
$$
이다. 두 점이 모두 원의 안쪽에 있으므로 두 항이 모두 남는다.

**(2)** 공식 (3)의 $h$는 $h(t) = \exp(\exp(it))$이다. $u = \exp(it)$로 두면 [[cosine-and-sine|코사인과 사인]]의 정의에 의해 $\operatorname{Re} u = \cos t$, $\operatorname{Im} u = \sin t$이고, 같은 항목의 (5)에 의해
$$
\begin{aligned}
\operatorname{Re} h(t) &= \exp(\cos t)\cos(\sin t), \\
\operatorname{Im} h(t) &= \exp(\cos t)\sin(\sin t)
\end{aligned}
$$
이다(오른쪽의 $\exp$는 실수의 지수함수). [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $f(0) = \exp(0) = 1$이므로 $\operatorname{Re} f(0) = 1$, $\operatorname{Im} f(0) = 0$이다. 공식 (3)의 (i)에 의해
$$
\begin{aligned}
&\int_0^{2\pi} \exp(\cos t)\cos(\sin t)\,dt \\
&\quad = 2\pi \cdot 1 = 2\pi, \\
&\int_0^{2\pi} \exp(\cos t)\sin(\sin t)\,dt \\
&\quad = 2\pi \cdot 0 = 0
\end{aligned}
$$
이다. 두 실수 적분은 원 위의 평균값으로 바로 나온다.
:::

:::exercise[두 점에서만 정칙이 아닌 연속함수]
$G$가 $(\mathbb{C}, d)$의 열린집합이고 $p$, $q$가 $G$의 서로 다른 두 점이며 $f : G \to \mathbb{C}$가 연속이고 $G - \{p, q\}$에서 정칙이라 하자. $f$가 정칙함수임을 보여라.
:::

:::solution
"미분 (n)"은 [[complex-derivative|복소 미분]], "모레라 (n)"은 [[morera-theorem|모레라 정리]]의 번호이다. [[open-set-in-metric-space]]의 (5)에 의해 한 점 집합은 닫힌집합이므로 그 여집합은 열린집합이고, [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (3)에 의해 $G' = G - \{q\} = G \cap (\mathbb{C} - \{q\})$와 $G' - \{p\} = G - \{p, q\}$는 열린집합이다.

$h = f|_{G'}$로 두면 [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 $h$는 연속이다. $z \in G - \{p, q\}$이면 $f$는 $z$에서 미분가능하고, 미분 (4)의 (i)을 $U = G'$에 쓰면 $h$도 $z$에서 미분가능하다. 곧 $h$는 $G' - \{p\}$에서 정칙이고, $p \in G'$이다($p \ne q$). 모레라 (3)을 열린집합 $G'$, 함수 $h$, 점 $p$에 쓰면 $h$는 정칙함수이다. 다시 미분 (4)의 (i)에 의해 $f$는 $G'$의 모든 점, 곧 $G - \{q\}$의 모든 점에서 미분가능하다.

이제 $f$는 연속이고 $G - \{q\}$에서 정칙이므로, 모레라 (3)을 $G$, $f$, 점 $q$에 쓰면 $f$는 정칙함수이다.
:::

:::exercise[홀함수의 짝수 차 도함수]
$R$를 양의 실수, $f : B(0, R) \to \mathbb{C}$를 정칙함수라 하고, 모든 $z \in B(0, R)$에서 $f(-z) = -f(z)$라 하자. $0$ 이상인 모든 짝수 $n$에서 $f^{(n)}(0) = 0$임을 보여라.
:::

:::solution
"전개 (n)"은 [[holomorphic-functions-have-power-series|정칙함수의 멱급수 전개]], "고계 (n)"은 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 번호이다. 전개 (2)를 $G = B(0, R)$, $a = 0$에 쓰고 그 계수를 $(c_n)_{n \ge 0}$이라 하면, $B(0, R)$의 모든 $w$에서 $c_n w^n$의 급수가 수렴하고 합이 $f(w)$이다.

$z \in B(0, R)$라 하자. [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $|-z| = |z| < R$이므로 $-z \in B(0, R)$이다. $-z = (-1)z$이므로 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)에 의해 $(-z)^n = (-1)^n z^n$이다. 따라서 $b_n = (-1)^n c_n$으로 둔 $b_n z^n$의 급수는 수렴하고 합이 $f(-z) = -f(z)$이다. 한편 [[complex-series|복소 급수]]의 (5)에 의해 $(-c_n) z^n$의 급수도 수렴하고 합이 $-f(z)$이다.

두 복소 멱급수(중심 $0$, 계수 $(b_n)$과 $(-c_n)$)가 $B(0, R)$의 모든 점에서 수렴하고 합이 같으므로, [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (5)의 (ii)에 의해 모든 $n$에서 $(-1)^n c_n = -c_n$이다. $n$이 짝수이면 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)와 복소수의 거듭제곱의 (5)에 의해 $(-1)^n = 1$이므로 $c_n = -c_n$, 곧 $2c_n = 0$이고 $c_n = 0$이다. 고계 (2)에 의해 $f^{(n)}(0) = n!\,c_n = 0$이다.
:::

:::exercise[원 위의 상계로 원판 안의 값 누르기]
$a$를 복소수, $r$을 양의 실수, $G$를 $C(a, r) \subseteq G$인 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$를 정칙함수라 하고, 실수 $M$이 $|z - a| = r$인 모든 $z$에서 $|f(z)| \le M$을 만족한다고 하자.

1. $|w - a| < r$인 모든 $w$에서 $|f(w)| \le \dfrac{M r}{r - |w - a|}$임을 보여라.
2. 자연수 $k$마다 $z$에서의 값이 $f(z)^k$인 함수에 (1)을 써서, $|w - a| < r$인 모든 $w$에서 $|f(w)| \le M$임을 보여라.
:::

:::solution
$K = \{z : |z - a| = r\}$는 $\gamma_{a,r}$의 상이다([[path-in-the-complex-plane|경로]]의 (3)). $a + r \in K$이므로 $0 \le |f(a + r)| \le M$이고 $0 \le M$이다([[modulus-of-complex-number|복소수의 절댓값]]의 (1), (5)).

**(1)** $\rho = r - |w - a|$로 두면 $0 < \rho$이다. $z \in K$이면 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (4)와 [[absolute-value]]의 (6)에 의해
$$
\begin{aligned}
|z - w| &= |(z - a) - (w - a)| \\
&\ge |z - a| - |w - a| = \rho
\end{aligned}
$$
이다. 따라서 $z \ne w$이고, 절댓값의 (3), (4)와 [[order-properties-of-reals|실수의 순서의 성질]]의 (6)의 (ii)(같으면 역수도 같다), (4)의 (iii)에 의해 $\bigl|f(z)/(z - w)\bigr| = |f(z)|\,|z - w|^{-1} \le M\rho^{-1}$이다. [[cauchy-integral-formula|코시 적분 공식]]의 (2)에 의해 $f(w) = (2\pi i)^{-1}\int_{\gamma_{a,r}} f(z)/(z - w)\,dz$이고, [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (2)의 (i)과 (1)의 $\ell(\gamma_{a,r}) = 2\pi r$에 의해 적분의 절댓값은 $M\rho^{-1} \cdot 2\pi r$ 이하이다. [[definition-of-pi|원주율]]의 (4)에 의해 $0 < \pi$이고 절댓값의 (3), (5)에 의해 $|2\pi i| = 2\pi$이므로 $|f(w)| \le M r \rho^{-1}$이다.

**(2)** $w$를 고정하고 $C = r\rho^{-1}$로 둔다. 자연수 $k$에 대하여 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)과 (5)(연쇄법칙)에 의해 $z$에서의 값이 $f(z)^k$인 함수 $G \to \mathbb{C}$는 정칙함수이다. $z \in K$이면 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|f(z)^k| = |f(z)|^k \le M^k$이다. (1)을 이 함수와 $M^k$에 쓰면 모든 자연수 $k$에서
$$
x^k \le M^k C, \qquad x = |f(w)|
$$
이다.

$M < x$라 가정하자. $M = 0$이면 $k = 1$에서 $x \le 0$이고 $0 \le x$이므로 $x = 0 = M$이 되어 어긋난다. $0 < M$이면 $q = x M^{-1}$로 두고 양변에 $(M^k)^{-1} = (M^{-1})^k$을 곱하면([[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii), (3), 순서의 성질의 (6)의 (iv)) 모든 $k$에서 $q^k \le C$이다. $M < x$이므로 $1 < q$이고 $0 < q - 1$이다. [[archimedean-property|아르키메데스 성질]]의 (2)에 의해 $C < k(q - 1)$인 자연수 $k$가 있고, [[bernoulli-inequality|베르누이 부등식]]에 의해 $q^k = (1 + (q - 1))^k \ge 1 + k(q - 1) > C$이다. 이것은 $q^k \le C$와 어긋난다. 따라서 $x \le M$이다.
:::

:::exercise[원점에서 $|z|^k$의 크기로 눌린 정칙함수]
$R$를 양의 실수, $f : B(0, R) \to \mathbb{C}$를 정칙함수, $k$를 자연수, $M$을 $0 \le M$인 실수라 하고, 모든 $z \in B(0, R)$에서 $|f(z)| \le M\,|z|^k$라 하자.

1. $0 \le n < k$인 모든 정수 $n$에서 $f^{(n)}(0) = 0$임을 보여라.
2. $|f^{(k)}(0)| \le k!\,M$임을 보여라.
3. $R = 1$, $f(z) = z^k$, $M = 1$이면 (2)에서 등호가 성립함을 보여라.
:::

:::solution
"고계 (n)"은 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 번호, "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]], "실수 거듭제곱 (n)"은 [[power-of-a-real-number|실수의 거듭제곱]]의 번호이다. 고계 (1)에 의해 $f$는 무한 번 미분가능하다.

**어림.** $0 < r < R$이고 $|z| = r$이면 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)에 의해 $|z|^k = r^k$이므로 $|f(z)| \le M r^k$이다. 고계 (3)을 $G = B(0, R)$, $a = 0$에 쓰면 $0$ 이상인 모든 $n$에서 $|f^{(n)}(0)| \le n!\,M r^k / r^n$이다.

**(2)** $n = k$이면 $r^k/r^k = 1$이므로 $|f^{(k)}(0)| \le k!\,M$이다.

**(1)** $0 \le n < k$이면 $m = k - n$은 자연수이고 실수 거듭제곱 (2)의 (i)에 의해 $r^k = r^n r^m$이므로, $x = |f^{(n)}(0)|$와 $C = n!\,M$에 대하여 $0 < r < R$인 모든 $r$에서 $x \le C r^m$이다. $0 \le C$이다([[factorial-from-zero]]의 (3)과 순서 (4)의 (iv)). $0 < x$라 가정하고, $s = \min\{\tfrac12, \tfrac{R}{2}\}$, $r = \min\{s,\ x(2C + 2)^{-1}\}$로 두자. [[absolute-value]]의 (10)과 순서 (8)에 의해 $0 < r < 1$이고 $r < R$이며 $r \le x(2C + 2)^{-1}$이다. 실수 거듭제곱 (6)의 (iv)에 의해 $0 < r < 1$이면 $n$번째 항이 $r^n$인 수열은 단조감소이므로 $r^m \le r^1 = r$이다. 순서 (4)의 (iii)에 의해 $C r^m \le C r \le C x (2C + 2)^{-1}$이고, $C < 2C + 2$이므로 마지막 수는 $x$보다 작다(순서 (6)의 (iv)). 곧 $x \le C r^m < x$가 되어 어긋난다. 따라서 $x \le 0$이고 $0 \le x$이므로 $x = 0$, 곧 $f^{(n)}(0) = 0$이다.

**(3)** [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)에 의해 $z^k$는 정칙함수이고, $|z^k| = |z|^k$이므로 가정이 $M = 1$로 성립한다. 중심이 $0$이고 계수가 $n = k$에서 $1$, 그 밖에서 $0$인 복소 멱급수는 모든 $z$에서 합이 $z^k$이다(합이 $z^k$ 한 항뿐이다, [[complex-series|복소 급수]]의 (4)와 (3)). 고계 (2)의 전개도 $B(0, 1)$에서 합이 $z^k$이므로, [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (5)의 (ii)에 의해 두 계수열은 같고, 고계 (2)에 의해 $f^{(k)}(0)/k! = 1$, 곧 $|f^{(k)}(0)| = k! \cdot 1$이다.
:::

:::exercise[실수축 위의 $x|x|$와 정칙함수]
실함수 $h : \mathbb{R} \to \mathbb{R}$를 $h(x) = x|x|$로 정한다.

1. $h$가 미분가능한 함수이고 모든 실수 $x$에서 $h'(x) = 2|x|$이며, $h'$은 $0$에서 미분가능하지 않음을 보여라.
2. $\iota(\mathbb{R}) \subseteq G$인 $(\mathbb{C}, d)$의 열린집합 $G$와 정칙함수 $f : G \to \mathbb{C}$로서 모든 실수 $x$에서 $f(\iota(x)) = \iota(h(x))$인 것은 없음을 보여라.
:::

:::solution
**(1)** $s(x) = |x|$, $i_{\mathbb{R}}(x) = x$라 하면 $h = i_{\mathbb{R}}\, s$이다. [[derivative]]의 (1)에 의해 $i_{\mathbb{R}}$는 모든 점에서 미분가능하고 미분계수가 $1$이며, 같은 항목의 (3)을 $I = \mathbb{R}$, $r = 1$에 쓰면 $c > 0$이면 $s'(c) = 1$, $c < 0$이면 $s'(c) = -1$이다. [[derivative-rules|미분의 선형성과 곱의 법칙]]의 (4)(곱의 법칙)에 의해 $c > 0$이면 $h'(c) = c \cdot 1 + 1 \cdot c = 2c$, $c < 0$이면 $h'(c) = c \cdot (-1) + 1 \cdot (-c) = -2c$이고, [[absolute-value]]의 (1)에 의해 둘 다 $2|c|$이다.

$c = 0$에서는 차분몫이 $x \ne 0$에서 $(x|x| - 0)/x = |x|$이다. $\varepsilon > 0$이면 $\delta = \varepsilon$에서 $0 < |x| < \delta$인 $x$마다 $\bigl||x| - 0\bigr| = |x| < \varepsilon$이므로, [[limit-of-a-function|함수의 극한]]의 수렴의 정의에 의해 차분몫은 $0$에서 $0$으로 수렴한다. 곧 $h'(0) = 0 = 2|0|$이다. 따라서 $h$는 미분가능한 함수이고 $h' = 2s$이다.

$h'$이 $0$에서 미분가능하다면 미분의 선형성과 곱의 법칙의 (1)(상수배)에 의해 $s = \tfrac12 h'$도 $0$에서 미분가능해야 하는데, [[derivative]]의 (3)에 의해 $s$는 $0$에서 미분가능하지 않다. 따라서 $h'$은 $0$에서 미분가능하지 않다.

**(2)** 그런 $G$와 $f$가 있다고 하자. [[complex-derivative|복소 미분]]의 (6)을 $I = \mathbb{R}$, $f$, $h$에 쓰면 모든 실수 $c$에서 $f'(\iota(c)) = \iota(h'(c))$이다. [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 $f'$은 정칙함수이고, 복소 미분의 (6)을 다시 $I = \mathbb{R}$, $f'$, $h'$에 쓰면 $h'$은 $0$에서 미분가능해야 한다. 이것은 (1)과 어긋난다. 실함수 $h$는 모든 점에서 미분가능하지만, 실수축 위에서 $h$와 같은 값을 갖는 정칙함수는 없다.
:::
