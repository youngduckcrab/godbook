---
title: 원 경로 위의 적분
title_en: Integrals over Circles
aliases: [원 위의 적분, 원 경로 적분, 1/(z − w) 의 원 적분, integral over a circle, circle integral]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 원 경로 γ_{a,r} 를 따른 (z − a)^k 의 적분이 k = −1 이면 2πi, 그 밖의 정수에서 0 임을 직접 계산하고, 원 위에서 1/(z − w) 를 기하급수로 전개해 항별로 적분하여 |w − a| < r 이면 2πi, |w − a| > r 이면 0 임을 보인다. −1 이 아닌 지수의 (z − w)^k 의 적분이 0 이라는 것과, 원의 안쪽의 점 w 에 대해 1/(z − w) 가 원을 포함하는 열린집합 위에서 복소 원시함수를 갖지 않는다는 것을 함께 진술한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, definition-of-pi, series-indexed-from-zero, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, continuity-of-complex-operations, complex-series, absolute-convergence-of-complex-series, complex-exponential-function, addition-law-of-complex-exponential, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, derivative-of-complex-valued-function, fundamental-theorem-for-complex-valued-functions, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, primitive-and-path-integral]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "연습문제 ex_circleint, ex_4_2, ex_4_3, ex_laurentoutlook, ex_circleint2, source/exercises-chap4.ptx:114–182, 415–425, 438–453, 653–678; Antiderivatives 절의 Example ex_antiderivnotexist, source/sec_antiderivatives.ptx:142–155; Taylor and Laurent Series 장의 Theorem thm_holomorphicpower 의 증명, source/sec_powerseriesholom.ptx:268–318"
    checked: original
    note: "출처는 이 항목의 내용을 연습문제로 둔다. ex_circleint(114–127)는 단위원 위의 ∫dz/z 와 중심이 w 인 원 위의 ∫dz/(z − w) = 2πi 를 묻고(이 항목의 (1)의 k = −1), ex_circleint2(653–678)는 중심 0 인 원에서 I(r) = ∫dz/(z − a) 가 r < |a| 이면 0, r > |a| 이면 2πi 임을 묻는다(이 항목의 (3), (4)의 중심이 0 인 경우). 출처의 힌트는 한쪽은 수축 가능, 다른 쪽은 ex_circleint 와 ex_circlehomotopy(578–588: 호모토피)를 합치라는 것이다. 이 항목은 호모토피를 쓰지 않고, 원 위에서 1/(z − w) 를 기하급수로 전개해 항별로 적분한다((2)–(4)). 그 전개는 출처가 Theorem thm_holomorphicpower 의 증명(sec_powerseriesholom.ptx:277–289)에서 원 C[0, r] 위의 1/(w − z) 를 (1/w)Σ(z/w)^k 로 펼치고 고른 수렴으로 항별 적분하는 것(prob_geomseriesfunky, exercises-chap7.ptx:619–629)과 같은 꼴이다. ex_4_3(415–425: 닫힌 경로에서 n ≠ −1 이면 ∫zⁿ dz = 0)과 ex_laurentoutlook(438–453: 단순 닫힌 경로의 안의 z₀ 에 ∫(z − z₀)ⁿ dz 가 n = −1 이면 2πi, 아니면 0)은 이 항목의 (1), (5)와 같은 내용이고, ex_4_2(128–182)의 C[0, 2] 위의 1/z⁴ 의 적분 0 은 (1)의 k = −4 인 경우이다. (6)의 특히 문장(w = a)의 a = 0 인 경우는 출처 Example ex_antiderivnotexist(1/z 는 ℂ − {0} 에서 원시함수가 없다)와 같은 진술이고 같은 방법(원 위의 적분이 0 이 아니다)으로 보인다. 예시 '세 항으로 된 함수의 원 적분'은 ex_laurentoutlook 의 거듭제곱의 적분과 ex_4_2 의 둘째 물음(C[0, 2] 위의 z² − 2z + 3 의 적분 0)과 같은 발상의 항들을 합친 것이다. 반례 '원 위에 놓인 점 w 의 예'는 ex_4_3 의 괄호(n 이 음수일 때 경로가 원점을 지나면 적분이 정의되지 않는다)와 같은 발상이다. 확인 질문 '$\\int_{\\gamma_{2,1}} \\frac{1}{z - 3i}\\,dz$는?'은 ex_circleint2 의 바깥쪽 경우와 같은 발상이고, 확인 질문 '$\\int_{\\gamma_{0,2}} (z - 1)^{-2}\\,dz$는?'은 ex_laurentoutlook 의 n = −2 와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 경로 적분 넷을 원시함수로 다시 계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱(음의 정수 지수는 $0$이 아닌 복소수에만)은 [[power-of-a-complex-number]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다. 열린집합과 $\mathbb{C}$의 부분집합의 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이다. 복소 급수와 그 합 $\sum_{n=0}^{\infty}$, 절대수렴은 [[complex-series|복소 급수]]와 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 것이고, 실수 항의 0부터 번호가 붙은 급수의 합은 [[series-indexed-from-zero]]의 것이다. 원 경로 $\gamma_{a,r}$와 그 상, 닫힌 C¹ 경로는 [[path-in-the-complex-plane|경로]]의 (3)의 것이고, "상 위에서 연속"과 경로 적분은 [[path-integral|경로 적분]]의 것이며, 복소 원시함수는 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 것이다.

아래에서 $a$는 복소수, $r$은 양의 실수, $K = \{z \in \mathbb{C} : |z - a| = r\}$는 원 경로 $\gamma_{a,r}(t) = a + r\exp(it)$($0 \le t \le 2\pi$)의 상이다. 복소수 $w$와 정수 $k$에 대하여 "$(z - w)^k$의 함수"는 $k \ge 0$이면 $z$에서의 값이 $(z - w)^k$인 함수 $\mathbb{C} \to \mathbb{C}$이고, $k < 0$이면 같은 식의 함수 $\mathbb{C} - \{w\} \to \mathbb{C}$이다. $|w - a| \ne r$이면 $w \notin K$이므로 이 함수는 $K$ 위에서 연속이고(아래 증명), $\int_{\gamma_{a,r}} (z - w)^k\,dz$가 정해진다. $\frac{1}{z - w}$는 $(z - w)^{-1}$이다.

1. (중심의 거듭제곱) 모든 정수 $k$에서
   $$
   \begin{aligned}
   &\int_{\gamma_{a,r}} (z - a)^k\,dz \\
   &\quad =
   \begin{cases}
   2\pi i & (k = -1), \\
   0 & (k \ne -1)
   \end{cases}
   \end{aligned}
   $$
   이다.
2. (원 위의 기하급수 전개) $w$를 복소수라 하고 $z \in K$라 하자.
   - (i) $|w - a| < r$이면 $\kappa = |w - a|\,r^{-1}$은 $0 \le \kappa < 1$이고, $n$에서의 값이 $(w - a)^n (z - a)^{-n-1}$인 0부터 번호가 붙은 복소수열의 급수는 절대수렴하며
     $$
     \begin{aligned}
     &\sum_{n=0}^{\infty} (w - a)^n (z - a)^{-n-1} \\
     &\quad = \frac{1}{z - w}
     \end{aligned}
     $$
     이다. $0$ 이상인 모든 정수 $n$에서 $\bigl|(w - a)^n (z - a)^{-n-1}\bigr| = r^{-1}\kappa^n$이고, 실수 항 $r^{-1}\kappa^n$의 급수는 수렴하며 그 합은 $(r - |w - a|)^{-1}$이다.
   - (ii) $|w - a| > r$이면 $\kappa' = r\,|w - a|^{-1}$은 $0 < \kappa' < 1$이고, $n$에서의 값이 $t_n = -(z - a)^n (w - a)^{-n-1}$인 0부터 번호가 붙은 복소수열의 급수는 절대수렴하며
     $$
     \sum_{n=0}^{\infty} t_n = \frac{1}{z - w}
     $$
     이다. $0$ 이상인 모든 정수 $n$에서 $\bigl|(z - a)^n (w - a)^{-n-1}\bigr| = |w - a|^{-1}\kappa'^n$이고, 실수 항 $|w - a|^{-1}\kappa'^n$의 급수는 수렴하며 그 합은 $(|w - a| - r)^{-1}$이다.
3. (안쪽의 점) $|w - a| < r$이면
   $$
   \int_{\gamma_{a,r}} \frac{1}{z - w}\,dz = 2\pi i
   $$
   이다.
4. (바깥쪽의 점) $|w - a| > r$이면 $\displaystyle\int_{\gamma_{a,r}} \frac{1}{z - w}\,dz = 0$이다.
5. ($-1$이 아닌 지수) $|w - a| \ne r$이고 $k$가 $-1$이 아닌 정수이면 $\displaystyle\int_{\gamma_{a,r}} (z - w)^k\,dz = 0$이다.
6. (원시함수가 없다) $|w - a| < r$이고 $G$가 $K \subseteq G \subseteq \mathbb{C} - \{w\}$인 열린집합이면, $z$에서의 값이 $\frac{1}{z - w}$인 함수 $G \to \mathbb{C}$는 $G$ 위에서 복소 원시함수를 갖지 않는다. 특히 $z$에서의 값이 $\frac{1}{z - a}$인 함수 $\mathbb{C} - \{a\} \to \mathbb{C}$는 $\mathbb{C} - \{a\}$ 위에서 복소 원시함수를 갖지 않는다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$ are as in the entry on complex numbers; the field operations of $\mathbb{C}$, the map $\iota$ and the convention of writing real numbers in place of complex numbers are as in the entry on the complex field; the modulus is as in the entry on the modulus; powers (with negative integer exponents only for nonzero complex numbers) are as in the entry on powers of a complex number; $\pi$ is as in the entry on the definition of pi. Open sets and the topology of subsets of $\mathbb{C}$ are those of the metric of the complex plane. Complex series, their sums $\sum_{n=0}^{\infty}$ and absolute convergence are as in the entries on complex series and absolute convergence of complex series, and sums of real series indexed from zero are as in the entry on series indexed from zero. The circular path $\gamma_{a,r}$, its image and closed C¹ paths are as in (3) of the entry on paths; "continuous on the image" and path integrals are as in the entry on path integrals; complex primitives are as in the entry on complex primitives and path integrals.

Below, $a$ is a complex number, $r$ is a positive real number, and $K = \{z \in \mathbb{C} : |z - a| = r\}$ is the image of the circular path $\gamma_{a,r}(t) = a + r\exp(it)$ ($0 \le t \le 2\pi$). For a complex number $w$ and an integer $k$, "the function of $(z - w)^k$" means the function $\mathbb{C} \to \mathbb{C}$ whose value at $z$ is $(z - w)^k$ if $k \ge 0$, and the function $\mathbb{C} - \{w\} \to \mathbb{C}$ given by the same formula if $k < 0$. If $|w - a| \ne r$, then $w \notin K$, so this function is continuous on $K$ (proved below) and $\int_{\gamma_{a,r}} (z - w)^k\,dz$ is defined. $\frac{1}{z - w}$ means $(z - w)^{-1}$.

1. (Powers about the center) For every integer $k$,
   $$
   \begin{aligned}
   &\int_{\gamma_{a,r}} (z - a)^k\,dz \\
   &\quad =
   \begin{cases}
   2\pi i & (k = -1), \\
   0 & (k \ne -1).
   \end{cases}
   \end{aligned}
   $$
2. (Geometric series expansion on the circle) Let $w$ be a complex number and $z \in K$.
   - (i) If $|w - a| < r$, then $\kappa = |w - a|\,r^{-1}$ satisfies $0 \le \kappa < 1$, the series of the sequence indexed from zero whose value at $n$ is $(w - a)^n (z - a)^{-n-1}$ converges absolutely, and
     $$
     \begin{aligned}
     &\sum_{n=0}^{\infty} (w - a)^n (z - a)^{-n-1} \\
     &\quad = \frac{1}{z - w}.
     \end{aligned}
     $$
     For every integer $n \ge 0$, $\bigl|(w - a)^n (z - a)^{-n-1}\bigr| = r^{-1}\kappa^n$, and the series of the real terms $r^{-1}\kappa^n$ converges with sum $(r - |w - a|)^{-1}$.
   - (ii) If $|w - a| > r$, then $\kappa' = r\,|w - a|^{-1}$ satisfies $0 < \kappa' < 1$, the series of the sequence indexed from zero whose value at $n$ is $t_n = -(z - a)^n (w - a)^{-n-1}$ converges absolutely, and
     $$
     \sum_{n=0}^{\infty} t_n = \frac{1}{z - w}.
     $$
     For every integer $n \ge 0$, $\bigl|(z - a)^n (w - a)^{-n-1}\bigr| = |w - a|^{-1}\kappa'^n$, and the series of the real terms $|w - a|^{-1}\kappa'^n$ converges with sum $(|w - a| - r)^{-1}$.
3. (A point inside) If $|w - a| < r$, then
   $$
   \int_{\gamma_{a,r}} \frac{1}{z - w}\,dz = 2\pi i.
   $$
4. (A point outside) If $|w - a| > r$, then $\displaystyle\int_{\gamma_{a,r}} \frac{1}{z - w}\,dz = 0$.
5. (Exponents other than $-1$) If $|w - a| \ne r$ and $k$ is an integer other than $-1$, then $\displaystyle\int_{\gamma_{a,r}} (z - w)^k\,dz = 0$.
6. (No primitive) If $|w - a| < r$ and $G$ is an open set with $K \subseteq G \subseteq \mathbb{C} - \{w\}$, then the function $G \to \mathbb{C}$ whose value at $z$ is $\frac{1}{z - w}$ has no complex primitive on $G$. In particular, the function $\mathbb{C} - \{a\} \to \mathbb{C}$ whose value at $z$ is $\frac{1}{z - a}$ has no complex primitive on $\mathbb{C} - \{a\}$.
:::

## 직관

원 경로를 따라 $(z - a)^k$를 적분하면, 점 $z = a + r\exp(it)$에서 $(z - a)^k$는 $r^k\exp(ikt)$이고 움직임은 $ir\exp(it)$이므로 피적분함수는 $ir^{k+1}\exp(i(k + 1)t)$입니다. 이것은 $k + 1 \ne 0$이면 한 바퀴 도는 동안 정확히 상쇄되고, $k = -1$일 때만 상수 $i$가 되어 $2\pi i$가 남습니다((1)). 이 차이는 원시함수로도 볼 수 있습니다. $k \ne -1$이면 $(z - a)^k$에는 복소 원시함수 $(z - a)^{k+1}/(k + 1)$이 있어 닫힌 경로에서 적분이 $0$이 되지만, $(z - a)^{-1}$에는 $\mathbb{C} - \{a\}$ 위의 복소 원시함수가 없습니다((6)).

원 위에 있지 않은 점 $w$에 대한 $\frac{1}{z - w}$는 원 위에서 $z - a$의 거듭제곱들의 무한 합으로 펼쳐집니다((2)). $w$가 원의 안쪽에 있으면 $(z - a)^{-1}$의 항이 하나 남아 $2\pi i$가 되고, 바깥쪽에 있으면 남는 항이 모두 $0$ 이상의 지수라서 $0$이 됩니다. 비유하면 원을 한 바퀴 돌며 $w$를 바라보는 방향이 한 바퀴 돌았는지를 세는 셈입니다. 안쪽의 $w$는 한 바퀴 돌고, 바깥쪽의 $w$는 돌다가 되돌아옵니다. 이 비유의 "방향"은 이 강의가 정의하지 않은 편각의 연속적인 변화라서, 증명에는 쓰지 않습니다.

## 증명

:::idea
(1)은 원 경로 위의 적분의 꼴과 $\int_0^{2\pi} \exp(imt)\,dt$의 계산이다. (2)는 복소 등비급수, (3)과 (4)는 (2)의 전개를 M 판정법으로 항별 적분하고 (1)을 쓴 것이다. (5)와 (6)은 복소 원시함수 항목의 (4)와 (3)이다.
:::

:::hint
$z = a + r\exp(it)$이면 $(z - a)^k = r^k\exp(ikt)$입니다. 음의 $k$에도 거듭제곱의 지수법칙과 지수함수의 정수배 법칙이 그대로 쓰입니다.
:::

:::hint
$w$가 안쪽에 있으면 $\frac{1}{z - w} = \frac{1}{z - a} \cdot \frac{1}{1 - q}$, $q = \frac{w - a}{z - a}$로 쓰고 $|q| < 1$을 씁니다. 바깥쪽에 있으면 $z - a$와 $w - a$의 역할을 바꿉니다.
:::

:::proof
"경로 (n)", "적분 (n)", "길이 (n)", "원시 (n)"은 [[path-in-the-complex-plane|경로]], [[path-integral|경로 적분]], [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]], [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 번호이다.

**머리말의 연속.** $z \in K$이면 $|z - a| = r > 0$이다. $|w - a| \ne r$이면 $w \notin K$이다. 원시 (4)의 (i)를 $a$ 대신 $w$에 쓰면 $(z - w)^k$의 함수는 연속이고, $k < 0$이면 그 정의역 $\mathbb{C} - \{w\}$가 $K$를 포함하므로 적분의 "상 위에서 연속"의 정의 뒤 문장에 의해 $K$ 위에서 연속이다. 특히 $w = a$이면 $|w - a| = 0 \ne r$이다.

**1의 증명.** $0 \le t \le 2\pi$에서 $u = \exp(it)$로 두면 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $u \ne 0$이고, $r \ne 0$이므로 $ru \ne 0$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i), (ii)(지수법칙, 음의 지수에서는 두 수가 $0$이 아니므로)와 덧셈 법칙의 (3)($u^k = \exp(ikt)$), (1)에 의해
$$
\begin{aligned}
&(ru)^k \cdot iru \\
&\quad = i\, r^{k+1} \exp(ikt)\exp(it) \\
&\quad = i\, r^{k+1} \exp\bigl(i(k + 1)t\bigr)
\end{aligned}
$$
이다. 여기서 $r^k r = r^{k+1}$은 거듭제곱의 (2)이다. 적분 (8)에 의해 $\int_{\gamma_{a,r}} (z - a)^k\,dz = \int_0^{2\pi} i\,r^{k+1}\exp(i(k + 1)t)\,dt$이다. $t$에서의 값이 $\exp(i(k + 1)t)$인 함수는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (8)에 의해 연속미분가능하므로 같은 항목의 (1)에 의해 연속이고, [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (3)에 의해 적분가능하다. [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)(복소수배)과 [[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]의 (4)의 (ii)를 $m = k + 1$에 쓰면, $k \ne -1$이면 적분은 $i\,r^{k+1} \cdot 0 = 0$이고, $k = -1$이면 $r^0 = 1$이므로 $i \cdot 2\pi = 2\pi i$이다.

**2의 증명.** (i) $z \in K$이므로 $z - a \ne 0$이고 $|z - a| = r$이다. $q = (w - a)(z - a)^{-1}$, $c = (z - a)^{-1}$로 두면 [[modulus-of-complex-number|절댓값]]의 (3), (4)에 의해 $|q| = |w - a|\,r^{-1} = \kappa$이고 $|c| = r^{-1}$이다. $0 \le |w - a| < r$이므로 $0 \le \kappa < 1$이다([[order-properties-of-reals]]). [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)에 의해 $n$에서의 값이 $c\,q^n$인 0부터 번호가 붙은 복소수열의 급수는 수렴하고 합은 $c(1 - q)^{-1}$이다. $(z - a)(1 - q) = (z - a) - (w - a) = z - w$이므로 $c(1 - q)^{-1} = \bigl((z - a)(1 - q)\bigr)^{-1} = (z - w)^{-1}$이다([[complex-field]]의 (1), $\mathbb{C}^{\times}$는 아벨군). 거듭제곱의 (3)에 의해
$$
\begin{aligned}
c\,q^n &= (z - a)^{-1}(w - a)^n (z - a)^{-n} \\
&= (w - a)^n (z - a)^{-n-1}
\end{aligned}
$$
이다($(xy)^n = x^n y^n$은 (3)의 (i), $((z - a)^{-1})^n = (z - a)^{-n}$과 $(z - a)^{-1}(z - a)^{-n} = (z - a)^{-n-1}$은 (3)의 (ii)). 절댓값의 (3)과 거듭제곱의 (4)에 의해 $|c\,q^n| = |c|\,|q|^n = r^{-1}\kappa^n$이다. $0 \le \kappa$이므로 $|\kappa| = \kappa < 1$이고([[absolute-value]]의 (1)), [[series-indexed-from-zero]]의 (13)의 (ii)를 그 항목의 $a$, $r$에 각각 $r^{-1}$, $\kappa$를 넣어 쓰면 $r^{-1}\kappa^n$의 급수는 수렴하고 합은 $r^{-1}(1 - \kappa)^{-1}$이며, $r(1 - \kappa) = r - |w - a|$이므로 그 합은 $(r - |w - a|)^{-1}$이다. 그러므로 급수는 절대수렴한다.

(ii) $|w - a| > r > 0$이므로 $w - a \ne 0$이다. $p = (z - a)(w - a)^{-1}$, $c' = -(w - a)^{-1}$로 두면 $|p| = r\,|w - a|^{-1} = \kappa'$이고 $0 < \kappa' < 1$이다. 복소 등비급수에 의해 $n$에서의 값이 $c' p^n$인 급수의 합은 $c'(1 - p)^{-1}$이고, $(w - a)(1 - p) = w - z$이므로 $c'(1 - p)^{-1} = -(w - z)^{-1} = (z - w)^{-1}$이다. (i)과 같은 계산으로 $c' p^n = -(z - a)^n (w - a)^{-n-1}$이고 $|c' p^n| = |w - a|^{-1}\kappa'^n$이다. 실수 항의 급수는 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 수렴하고 합은 $|w - a|^{-1}(1 - \kappa')^{-1} = (|w - a| - r)^{-1}$이므로, 급수는 절대수렴한다.

**3의 증명.** $0$ 이상인 정수 $n$마다 $z$에서의 값이 $f_n(z) = (w - a)^n (z - a)^{-n-1}$인 함수 $f_n : \mathbb{C} - \{a\} \to \mathbb{C}$를 둔다. 원시 (4)의 (i)에 의해 $(z - a)^{-n-1}$의 함수는 연속이고 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)(상수배)에 의해 $f_n$도 연속이며, $K \subseteq \mathbb{C} - \{a\}$이므로 $K$ 위에서 연속이다. $M_n = r^{-1}\kappa^n$으로 두면 (2)의 (i)에 의해 $K$의 모든 $z$에서 $|f_n(z)| = M_n$이고 $(M_n)_{n \ge 0}$의 급수는 수렴한다. 길이 (4)의 (ii)(0부터 번호가 붙은 열)에 의해, $z$에서의 값이 $T(z) = \sum_{n=0}^{\infty} f_n(z)$인 함수 $T : K \to \mathbb{C}$는 연속이고
$$
\sum_{n=0}^{\infty} \int_{\gamma_{a,r}} f_n = \int_{\gamma_{a,r}} T
$$
이다. (2)의 (i)에 의해 $K$의 모든 $z$에서 $T(z) = (z - w)^{-1}$이므로 적분 (1)의 둘째 문장에 의해 $\int_{\gamma_{a,r}} T = \int_{\gamma_{a,r}} \frac{1}{z - w}\,dz$이다. 한편 적분 (1)(상수배)과 (1)에 의해 $\int_{\gamma_{a,r}} f_n = (w - a)^n \int_{\gamma_{a,r}} (z - a)^{-n-1}\,dz$이고, $-n - 1 = -1$인 것은 정확히 $n = 0$일 때이므로 $n = 0$이면 $(w - a)^0 \cdot 2\pi i = 2\pi i$, $n \ge 1$이면 $0$이다. [[complex-series|복소 급수]]의 (4)(꼬리로 쪼개기)를 첫 항 뒤에서 쓰고 (3)(모든 항이 $0$인 급수의 합은 $0$)을 쓰면 왼쪽의 합은 $2\pi i + 0 = 2\pi i$이다.

**4의 증명.** $f_n(z) = -(z - a)^n (w - a)^{-n-1}$로 정한 $f_n : \mathbb{C} \to \mathbb{C}$는 원시 (4)의 (i)와 복소수 연산의 연속의 (3)에 의해 연속이다. $M_n = |w - a|^{-1}\kappa'^n$으로 두고 (2)의 (ii)와 길이 (4)의 (ii)를 3의 증명과 같이 쓰면 $\sum_{n=0}^{\infty} \int_{\gamma_{a,r}} f_n = \int_{\gamma_{a,r}} \frac{1}{z - w}\,dz$이다. $n \ge 0$이면 $n \ne -1$이므로 (1)에 의해 $\int_{\gamma_{a,r}} f_n = -(w - a)^{-n-1} \cdot 0 = 0$이고, 복소 급수의 (3)에 의해 합은 $0$이다.

**5의 증명.** 경로 (3)에 의해 $\gamma_{a,r}$는 상이 $K$인 닫힌 C¹ 경로이다. $k \ge 0$이면 원시 (4)의 (iii)을 $a$ 대신 $w$에 쓴다. $k \le -2$이면 $w \notin K$이므로 $K \subseteq \mathbb{C} - \{w\}$이고, 같은 (iii)을 쓴다. 길이 $1$인 경로열 $(\gamma_{a,r})$의 적분은 $\int_{\gamma_{a,r}}$이다(적분의 경로열의 정의).

**6의 증명.** $h(z) = \frac{1}{z - w}$로 정한 $h : G \to \mathbb{C}$는 $(z - w)^{-1}$의 함수 $\mathbb{C} - \{w\} \to \mathbb{C}$와 $K$ 위에서 값이 같으므로 머리말의 연속과 적분 (1)의 둘째 문장에 의해 $K$ 위에서 연속이고, (3)에 의해 $\int_{\gamma_{a,r}} h = 2\pi i$이다. [[definition-of-pi|원주율]]의 (4)에 의해 $2 < \pi$이므로 $\operatorname{Im}(2\pi i) = 2\pi \ne 0$이고 $2\pi i \ne 0$이다. $\gamma_{a,r}$는 상이 $K \subseteq G$인 닫힌 C¹ 경로이므로 원시 (3)의 마지막 문장에 의해 $h$는 $G$ 위에서 복소 원시함수를 갖지 않는다. 특히 $w = a$이면 $|w - a| = 0 < r$이고, 원시 (4)의 (i)에 의해 $\mathbb{C} - \{a\}$는 열린집합이며 $K \subseteq \mathbb{C} - \{a\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 항으로 된 함수의 원 적분]
$S = \mathbb{C} - \{1 + i,\ i\}$ 위에서 $f(z) = 3(z - 1 - i)^{-1} + 5(z - i)^{-2} + z^2$으로 정한 함수를 원 경로 $\gamma_{i,2}$를 따라 적분해 봅시다. $|(1 + i) - i| = 1 \ne 2$이고 $|i - i| = 0 \ne 2$이므로 상은 $S$의 부분집합입니다. $|(1 + i) - i| = 1 < 2$이므로 (3)에 의해 $\int_{\gamma_{i,2}} \frac{1}{z - (1 + i)}\,dz = 2\pi i$이고, (1)의 $k = -2$에 의해 $\int_{\gamma_{i,2}} (z - i)^{-2}\,dz = 0$이며, $|0 - i| = 1 \ne 2$이므로 (5)의 $w = 0$, $k = 2$에 의해 $\int_{\gamma_{i,2}} z^2\,dz = 0$입니다. 세 함수를 $S$로 제한해도 $\gamma_{i,2}$의 상 위의 값이 같으므로 [[path-integral|경로 적분]]의 (1)의 둘째 문장에 의해 적분은 그대로이고, 같은 (1)의 선형성에 의해
$$
\int_{\gamma_{i,2}} f = 3 \cdot 2\pi i + 5 \cdot 0 + 0 = 6\pi i
$$
입니다.
:::

:::counterexample[원 위에 놓인 점 w 의 예]
$a = 0$, $r = 1$, $w = 1$이면 $|w - a| = r$입니다. 이때 $1 = \gamma_{0,1}(0)$은 상 $K$의 점이므로 $K$는 $\frac{1}{z - 1}$의 함수의 정의역 $\mathbb{C} - \{1\}$의 부분집합이 아니고, [[path-integral|경로 적분]]의 정의는 상을 포함하는 집합 위의 함수에만 적분을 정하므로 $\int_{\gamma_{0,1}} \frac{1}{z - 1}\,dz$는 정의되지 않습니다. (3)과 (4)는 $|w - a| < r$과 $|w - a| > r$의 두 경우만 말하고, 그 사이의 $|w - a| = r$은 다루지 않습니다.
:::

## 확인 질문

:::check[$\int_{\gamma_{2,1}} \frac{1}{z - 3i}\,dz$는?]
$|3i - 2|^2 = 4 + 9 = 13 > 1$이므로 $|3i - 2| > 1$이고, (4)에 의해 $0$입니다.
:::

:::check[$\int_{\gamma_{0,2}} (z - 1)^{-2}\,dz$는?]
$|1 - 0| = 1 \ne 2$이고 지수가 $-2 \ne -1$이므로 (5)에 의해 $0$입니다. 점 $1$이 원의 안쪽에 있어도 지수가 $-1$이 아니면 $0$입니다.
:::
