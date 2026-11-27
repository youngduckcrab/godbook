---
title: 정칙함수의 고계 도함수와 코시 부등식
title_en: Derivatives of Holomorphic Functions and Cauchy's Estimates
aliases: [정칙함수는 무한 번 미분가능하다, 고계 도함수의 코시 적분 공식, 코시 부등식, 코시 어림, Cauchy's estimate, Cauchy's inequality, Cauchy integral formula for derivatives]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: "열린집합 위의 정칙함수의 도함수는 다시 정칙함수이고, 따라서 정칙함수는 무한 번 미분가능하다. 원판 B(a, R) 가 정의역에 들면 a 에서의 n 계 도함수는 원 경로를 따른 f(z)/(z − a)^(n+1) 의 적분의 n!/(2πi) 배이고, 멱급수 전개의 계수는 f^(n)(a)/n! 이다. 원 위에서 |f| ≤ M 이면 |f^(n)(a)| ≤ n!M/rⁿ 이고(코시 부등식), 원판 전체에서 |f| ≤ M 이면 반지름 r 을 R 로 바꾼 부등식이 성립한다."
requires: [mathematical-induction, factorial-from-zero, exponential-function, order-properties-of-reals, power-of-a-real-number, nth-root, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, open-ball, open-set-in-metric-space, complex-plane-as-metric-space, open-ball-is-open, complex-derivative, complex-derivative-rules, derivative-of-complex-exponential, addition-law-of-complex-exponential, higher-complex-derivatives, complex-power-series-is-holomorphic, taylor-coefficients-of-complex-power-series, radius-of-convergence-of-complex-power-series, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, integrals-over-circles, definition-of-pi, holomorphic-functions-have-power-series]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Consequences of Cauchy's Theorem 장의 Variations of a Theme 절, Theorem cauchyformula2, Corollary infdiff, source/sec_variationstheme.ptx:13–101, 218–227; Power Series and Holomorphic Functions 절의 Corollary taylor, Corollary cauchyformula3, Corollary cauchyestimate 와 그 증명, source/sec_powerseriesholom.ptx:185–227, 390–446; 같은 절의 Example ex_exptaylor, source/sec_powerseriesholom.ptx:93–127; 5장 연습문제 ex_5_1 과 도함수의 상한을 묻는 것, source/exercises-chap5.ptx:102–201, 378–388; 8장 연습문제 ex_9_3, source/exercises-chap8.ptx:693–715"
    checked: original
    note: "출처 Theorem cauchyformula2(sec_variationstheme.ptx:13–31)는 f′(w), f″(w) 의 적분 공식을 진술하고, 증명(32–101)은 차분몫을 코시 적분 공식으로 쓰고 Δw 를 0 으로 보낸다. 출처 Corollary infdiff(218–227)는 영역에서 미분가능한 f 가 무한 번 미분가능하다는 것과 편도함수의 연속을 진술한다. 이 항목의 (1)은 무한 번 미분가능하다는 부분을 열린집합에서 진술하고, 증명은 차분몫 대신 멱급수 전개와 멱급수가 나타내는 함수의 항별 미분으로 한다. 편도함수에 관한 부분은 싣지 않는다. 출처 Corollary cauchyformula3(sec_powerseriesholom.ptx:390–404)은 원판 안의 아무 점 w 에서 단순 닫힌 경로에 대한 f^(k)(w) 의 공식이고, 이 항목의 (2)는 원의 중심 a 에서만 진술한다. 출처 Corollary taylor(185–209)의 c_k = f^(k)(z₀)/k! 은 (2)의 둘째 문장과 같은 내용이다. 출처 Corollary cauchyestimate(413–424)는 D[w, R] 에서 |f| ≤ M 이면 |f^(k)(w)| ≤ k!M/R^k 라고 진술하고, 증명(425–446)은 r < R 에서 k!M/r^k 를 얻은 뒤 r 을 R 에 얼마든지 가깝게 잡을 수 있다고 적는다. 이 항목의 (3)은 그 증명의 중간 부등식을 원 위의 가정으로 진술한 것이고, (4)는 출처의 진술이며 'r 을 R 에 가깝게'를 n제곱근으로 r 하나를 식으로 잡는 귀류로 바꾼다. 예시 '$\\exp(3z)/z^4$의 원 위의 적분'은 출처의 예(sec_variationstheme.ptx:120–129, ∫_{C[0,1]} sin z/z² dz, 187–196, cos z/z³)와 같은 쓰임이고, 5장 연습문제 ex_5_1(exercises-chap5.ptx:102–201)의 C[0, 3] 위의 exp z/z³ 의 적분 πi 와 8장 파일의 연습문제 ex_9_3(exercises-chap8.ptx:693–715)의 C[−2, 2] 위의 exp(z)/(z + 1)^{34} 의 적분과도 같은 쓰임이다. 예시 '$\\exp$의 계수와 계승의 어림'의 계수 1/n! 은 출처 Example ex_exptaylor(sec_powerseriesholom.ptx:93–127)가 exp 의 0 중심 멱급수를 Σ z^k/k! 로 보이는 것과 같은 대상이다. |z| = 3 에서 |f(z)| ≤ 6 인 정함수의 |f′(0)| 을 묻는 확인 질문은 출처 5장 연습문제(exercises-chap5.ptx:378–388: D[0, 1] 에서 D[0, 1] 로 가는 정칙함수는 |f′(z)| ≤ 1/(1 − |z|)² 를 만족한다)와 같은 발상(원 위의 상계로 도함수를 누르기)이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시 부등식의 수열 없는 귀류, 계수 유일성의 번호). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, R)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 정칙함수와 도함수는 [[complex-derivative|복소 미분]]의 것이고, $n$번 미분가능, 무한 번 미분가능, $n$계 도함수 $f^{(n)}$은 [[higher-complex-derivatives|고계 복소 도함수]]의 것이며, $0$ 이상인 정수의 계승 $n!$은 [[factorial-from-zero]]의 것이다. 원 경로 $\gamma_{a,r}$와 경로 적분은 [[path-in-the-complex-plane|경로]]의 (3)과 [[path-integral|경로 적분]]의 것이고, 계수 $c_n$은 [[holomorphic-functions-have-power-series|정칙함수의 멱급수 전개]]의 (1)의 것이다. 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이고 $f : G \to \mathbb{C}$는 정칙함수이다.

1. (**무한 번 미분가능**) $f$의 도함수 $f'$은 정칙함수이다. 따라서 $f$는 무한 번 미분가능하고, $0$ 이상인 모든 정수 $n$에서 $f^{(n)}$은 정칙함수이며 연속이다.
2. (고계 도함수의 적분 공식) $a$가 복소수, $R$이 양의 실수이고 $B(a, R) \subseteq G$라 하자. $0 < r < R$인 모든 실수 $r$과 $0$ 이상인 모든 정수 $n$에서
   $$
   f^{(n)}(a) = \frac{n!}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{(z - a)^{n+1}}\,dz
   $$
   이다. 따라서 정칙함수의 멱급수 전개의 계수는 $c_n = f^{(n)}(a)/n!$이고, $B(a, R)$의 모든 $z$에서
   $$
   f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}\,(z - a)^n
   $$
   이다.
3. (**코시 부등식**) (2)의 가정에서 $0 < r < R$이고 실수 $M$이 $|z - a| = r$인 모든 복소수 $z$에서 $|f(z)| \le M$을 만족하면, $0$ 이상인 모든 정수 $n$에서
   $$
   |f^{(n)}(a)| \le \frac{n!\,M}{r^n}
   $$
   이다.
4. (원판 위에서 유계) (2)의 가정에서 실수 $M$이 $B(a, R)$의 모든 $z$에서 $|f(z)| \le M$을 만족하면, $0$ 이상인 모든 정수 $n$에서 $|f^{(n)}(a)| \le n!\,M / R^n$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number; powers are those of the entry on powers of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, R)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Holomorphic functions and derivatives are those of the entry on the complex derivative; being $n$ times differentiable, being infinitely differentiable, and the $n$th derivative $f^{(n)}$ are those of the entry on higher complex derivatives, and the factorial $n!$ of an integer $n \ge 0$ is that of the entry on factorials from zero. Circle paths $\gamma_{a,r}$ and path integrals are those of (3) of the entry on paths and of the entry on path integrals, and the coefficients $c_n$ are those of (1) of the entry on power series expansions of holomorphic functions. The number $\pi$ is that of the entry on pi.

Below, $G$ is an open set of $(\mathbb{C}, d)$ and $f : G \to \mathbb{C}$ is a holomorphic function.

1. (**Infinitely differentiable**) The derivative $f'$ of $f$ is a holomorphic function. Hence $f$ is infinitely differentiable, and for every integer $n \ge 0$, $f^{(n)}$ is a holomorphic function and is continuous.
2. (Integral formula for higher derivatives) Let $a$ be a complex number, $R$ a positive real number, and $B(a, R) \subseteq G$. For every real $r$ with $0 < r < R$ and every integer $n \ge 0$,
   $$
   f^{(n)}(a) = \frac{n!}{2\pi i} \int_{\gamma_{a,r}} \frac{f(z)}{(z - a)^{n+1}}\,dz.
   $$
   Hence the coefficients of the power series expansion of a holomorphic function are $c_n = f^{(n)}(a)/n!$, and for every $z$ in $B(a, R)$,
   $$
   f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}\,(z - a)^n.
   $$
3. (**Cauchy's estimate**) Under the hypothesis of (2), if $0 < r < R$ and a real number $M$ satisfies $|f(z)| \le M$ for every complex number $z$ with $|z - a| = r$, then for every integer $n \ge 0$,
   $$
   |f^{(n)}(a)| \le \frac{n!\,M}{r^n}.
   $$
4. (Bounded on the disk) Under the hypothesis of (2), if a real number $M$ satisfies $|f(z)| \le M$ for every $z$ in $B(a, R)$, then $|f^{(n)}(a)| \le n!\,M / R^n$ for every integer $n \ge 0$.
:::

## 직관

실함수에서는 한 번 미분가능해도 도함수가 다시 미분가능하지 않을 수 있습니다. 정칙함수에서는 그런 일이 없습니다. 정칙함수는 원판마다 멱급수와 같고, 멱급수는 항별로 몇 번이든 미분할 수 있기 때문입니다((1)). 멱급수의 계수는 중심에서의 도함수로 정해지고 동시에 원 위의 적분이므로, 두 식을 맞추면 고계 도함수의 적분 공식이 나옵니다((2)).

코시 부등식은 그 적분을 ML 부등식으로 누른 것입니다. 원 위에서 $|f|$가 작으면 중심에서의 도함수도 작고, 반지름이 클수록 $r^n$으로 나누므로 더 작아집니다. 비유하면 큰 원 위에서 높이가 늘 $M$ 이하인 땅은 가운데에서 가파를 수 없다는 것입니다. 비유가 맞는 곳은 반지름이 클수록 기울기의 상한이 작아진다는 점이고, 맞지 않는 곳은 높이가 실수가 아니라 복소수의 절댓값이라는 점입니다.

(4)는 원판 $B(a, R)$ 전체에서 $|f| \le M$일 때 (3)을 $R$보다 작은 모든 $r$에 쓰고, 그 결과에서 $r$을 $R$로 바꿀 수 있다는 것입니다. 수열이나 극한 대신, 그렇지 않다면 부등식을 깨는 $r$ 하나를 $n$제곱근으로 직접 잡습니다.

## 증명

:::idea
점 $a$마다 원판에서 $f$를 멱급수가 나타내는 함수 $g$와 같게 두고, $g$의 도함수가 다시 멱급수가 나타내는 함수라 정칙이라는 것을 쓴다. 귀납으로 무한 번 미분가능하다. 계수가 $g^{(n)}(a)/n!$이라는 것과 계수의 적분 식을 맞추면 (2), ML 부등식으로 (3), 귀류와 $n$제곱근으로 (4)를 얻는다.
:::

:::hint
$B = B(a, R)$에서 $f|_B = g|_B$이면 두 함수의 도함수도 같습니다. [[complex-derivative|복소 미분]]의 (4)의 (i)을 $f$, $g$, $f'$에 차례로 쓰세요.
:::

:::hint
(4)에서 $n \ge 1$이고 $|f^{(n)}(a)|\,R^n > n!\,M$이라 하면 $q = n!\,M / |f^{(n)}(a)| < R^n$입니다. $r$을 $\sqrt[n]{q}$와 $R$의 평균으로 잡아 보세요.
:::

:::proof
"미분 (n)"은 [[complex-derivative|복소 미분]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "전개 (n)"은 [[holomorphic-functions-have-power-series|정칙함수의 멱급수 전개]], "항별 미분 (n)"은 [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]], "계수 (n)"은 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 번호이다.

**준비.** $a \in G$, $R > 0$, $B = B(a, R) \subseteq G$라 하자. 전개 (2)에 의해 계수가 $(c_n)_{n \ge 0}$인 중심 $a$의 복소 멱급수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 두 경우 가운데 하나이고, $B \subseteq D$이며, 그것이 $D$ 위에 나타내는 함수 $g$는 $B$에서 $f$와 같다. 곧 $f|_B = g|_B$이다. 항별 미분 (2)에 의해 $D$는 열린집합이고 $g$는 정칙함수이며 $g'$은 항별 미분한 복소 멱급수가 같은 $D$ 위에 나타내는 함수이다. 항별 미분 (1)의 (iii)에 의해 그 복소 멱급수도 같은 두 경우 가운데 하나이므로, 항별 미분 (2)를 그것에 다시 쓰면 $g'$도 정칙함수이다.

**1의 증명.** $a \in G$를 잡는다. $G$가 열린집합이므로 $B(a, R) \subseteq G$인 $R > 0$이 있고, 위 준비를 쓴다. $B$는 [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 열린집합이므로 미분 (4)의 (i)에 의해 $f|_B$와 $g|_B$는 정칙함수이고 $(f|_B)' = f'|_B$, $(g|_B)' = g'|_B$이다. $f|_B = g|_B$이므로 $f'|_B = g'|_B$이다. $g'$이 정칙함수이므로 미분 (4)의 (i)에 의해 $g'|_B$는 정칙함수이고, 따라서 $f'|_B$는 정칙함수이다. 미분 (4)의 (i)을 $f'$과 $B$에 쓰면 $f'$은 $a$에서 복소 미분가능하다. $a$는 아무 점이었으므로 $f'$은 정칙함수이다.

$0$ 이상인 정수 $n$에 대하여 $P(n)$을 "모든 열린집합 $G$와 모든 정칙함수 $f : G \to \mathbb{C}$에서 $f$는 $n$번 미분가능하다"라 하자. 고계 미분의 정의에 의해 $P(0)$은 참이다. $P(n)$이 참이고 $f$가 정칙함수이면, 위에 의해 $f'$은 정칙함수이므로 $P(n)$에 의해 $f'$은 $n$번 미분가능하고, 고계 (4)에 의해 $f$는 $n + 1$번 미분가능하다. [[mathematical-induction|수학적 귀납법]]에 의해 모든 $n$에서 $P(n)$이 참이고, $f$는 무한 번 미분가능하다. $f$가 $n + 1$번 미분가능하므로 고계 (1)에 의해 $f^{(n)}$은 정칙함수이고, 미분 (3)에 의해 연속이다.

**2의 증명.** 준비의 $B$와 $g$를 쓴다. (1)에 의해 $f$는 무한 번 미분가능하고, 계수 (3)에 의해 $g$도 그렇다. 고계 (5)의 (i)에 의해 $(f|_B)^{(n)} = f^{(n)}|_B$이고 $(g|_B)^{(n)} = g^{(n)}|_B$인데, $f|_B = g|_B$이므로 $f^{(n)}(a) = g^{(n)}(a)$이다. 계수 (4)에 의해 $g^{(n)}(a) = n!\,c_n$이다. 전개 (1)에 의해 $c_n = c_n(r) = (2\pi i)^{-1}\int_{\gamma_{a,r}} f(z)/(z - a)^{n+1}\,dz$이므로 공식을 얻는다. [[factorial-from-zero]]의 (3)에 의해 $n! \ne 0$이므로 $c_n = f^{(n)}(a)/n!$이고, 전개 (2)의 식에 넣으면 마지막 식이다.

**3의 증명.** $|z - a| = r$이면 [[power-of-a-complex-number]]의 (4)와 [[modulus-of-complex-number]]의 (4)에 의해 $\bigl|f(z)/(z - a)^{n+1}\bigr| = |f(z)|/r^{n+1} \le M/r^{n+1}$이다. [[path-in-the-complex-plane|경로]]의 (3)에 의해 $\gamma_{a,r}$의 상은 그런 $z$ 전체이고, [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (2)의 (i)과 (1)의 $\ell(\gamma_{a,r}) = 2\pi r$에 의해
$$
\begin{aligned}
&\left| \int_{\gamma_{a,r}} \frac{f(z)}{(z - a)^{n+1}}\,dz \right| \\
&\quad \le \frac{M}{r^{n+1}} \cdot 2\pi r = \frac{2\pi M}{r^n}
\end{aligned}
$$
이다. $|2\pi i| = 2\pi$이므로([[definition-of-pi|원주율]]의 (1)에서 $0 < \pi$) (2)에 의해 $|f^{(n)}(a)| = \frac{n!}{2\pi}\bigl|\int\bigr| \le n!\,M/r^n$이다.

**4의 증명.** $0 < r < R$이면 $|z - a| = r$인 $z$는 $B(a, R)$에 드므로 (3)에 의해 $|f^{(n)}(a)| \le n!\,M/r^n$, 곧 $|f^{(n)}(a)|\,r^n \le n!\,M$이다([[order-properties-of-reals]]의 (6)의 (iv), [[power-of-a-real-number]]의 (6)의 (i)). 특히 $a \in B(a, R)$이므로 $0 \le |f(a)| \le M$이다.

$n = 0$이면 $r^0 = 1 = R^0$이므로 결론은 $|f(a)| \le M$이고 이미 얻었다. $n \ge 1$이라 하고 $x = |f^{(n)}(a)|$로 두자. $x R^n > n!\,M$이라 가정하자. $0 \le M$이므로 $0 < x R^n$이고 $0 < x$이다. $q = n!\,M\,x^{-1}$로 두면 $0 \le q < R^n$이다. [[nth-root|n제곱근]]의 (5)의 (ii)에 의해 $b = \sqrt[n]{q}$는 $0 \le b < R$을 만족하고, $r = (b + R)/2$로 두면 [[order-properties-of-reals]]의 (8)에 의해 $b < r < R$이며 $0 < r$이다. 같은 (5)의 (ii)에 의해 $q < r^n$이고, 양변에 $x$를 곱하면 $n!\,M < x r^n$이다. 이것은 첫 문단의 $x r^n \le n!\,M$과 어긋난다. 따라서 $x R^n \le n!\,M$이고, $0 < R^n$이므로 $x \le n!\,M / R^n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\exp(3z)/z^4$의 원 위의 적분]
$f(z) = \exp(3z)$는 정함수이고 [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (3)에 의해 $f'''(z) = 27\exp(3z)$이므로 $f'''(0) = 27$입니다. (2)를 $a = 0$, $n = 3$, 아무 $R > 1$과 $r = 1$로 쓰면
$$
\int_{\gamma_{0,1}} \frac{\exp(3z)}{z^4}\,dz = \frac{2\pi i}{3!}\,f'''(0) = 9\pi i
$$
입니다.
:::

:::example[$\exp$의 계수와 계승의 어림]
$f = \exp$, $a = 0$이면 모든 $n$에서 $f^{(n)}(0) = 1$입니다([[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (2)). $|z| = r$인 $z$에서 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (6)에 의해 $|\exp(z)| = \exp(\operatorname{Re} z) \le \exp(r)$이므로, (3)에 의해 $1 \le n!\exp(r)/r^n$입니다. $n \ge 1$에서 $r = n$으로 두면 $n^n \le n!\exp(n)$을 얻습니다. $\operatorname{Re} z \le |z|$는 [[modulus-of-complex-number]]의 (6)이고, 실수의 $\exp$가 증가한다는 것은 [[exponential-function|지수함수]]의 (2)입니다.
:::

## 확인 질문

:::check[정함수 $f$가 $|z| = 3$에서 늘 $|f(z)| \le 6$이면 $|f'(0)|$은 얼마 이하인가?]
(3)을 $n = 1$, $r = 3$, $M = 6$으로 쓰면 $|f'(0)| \le 1! \cdot 6/3 = 2$입니다.
:::

:::check[$f(z) = z^5$이면 (2)의 적분 공식으로 얻는 $f^{(5)}(0)$은?]
$\int_{\gamma_{0,1}} z^5/z^6\,dz = \int_{\gamma_{0,1}} z^{-1}\,dz = 2\pi i$([[integrals-over-circles|원 경로 위의 적분]]의 (1))이므로 $f^{(5)}(0) = \frac{5!}{2\pi i} \cdot 2\pi i = 120$입니다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)을 다섯 번 쓴 $5! = 120$과 맞습니다.
:::
