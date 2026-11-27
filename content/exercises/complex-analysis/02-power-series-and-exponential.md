---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "7장 연습문제, source/exercises-chap7.ptx:725 — 문제 '$n^2 z^n$ 의 급수의 합'과 같은 발상(출처는 항이 $k(k - 1) z^k$ 이거나 $k (z - 1)^{k-1}$ 인 급수가 나타내는 함수를 찾게 한다)"
  - ref: beck-first-course-complex-analysis
    loc: "Power Series and Holomorphic Functions 절의 Example ex_sinpowerser, source/sec_powerseriesholom.ptx:137 — 문제 '$f'' = -f$ 인 복소 멱급수의 계수'와 같은 계수(출처는 지수함수의 멱급수로 sin z 의 계수 (−1)^j/(2j + 1)! 을 구한다)"
added: 2026-11-27
---

:::exercise[$n^2 z^n$ 의 급수의 합]
1. $|z| < 1$인 복소수 $z$에서 $n$에서의 값이 $n^2 z^n$인 0부터 번호가 붙은 복소수열의 급수가 수렴하고
   $$
   \sum_{n=0}^{\infty} n^2 z^n = \frac{z(1 + z)}{(1 - z)^3}
   $$
   임을 보여라.
2. $z = i/2$에서 이 합을 $a + bi$($a$, $b$는 실수) 꼴로 구하라.
:::

:::solution
**(1)** [[factorial-from-zero|0부터의 계승]]의 (1)에 의해 $0$ 이상인 정수 $n$에서 $(n + 1)! = n!\,(n + 1)$, $(n + 2)! = n!\,(n + 1)(n + 2)$이고 $n! \ne 0$(같은 항목의 (3))이므로
$$
\begin{aligned}
\frac{n!}{n!} &= 1, \quad \frac{(n + 1)!}{n!} = n + 1, \\
\frac{(n + 2)!}{n!} &= (n + 1)(n + 2)
\end{aligned}
$$
이다. $|z| < 1$이므로 [[complex-derivative-examples|복소 미분의 예]]의 (2)의 (ii)를 $\ell = 0, 1, 2$에 쓰면($0! = 1$, $1! = 1$, $2! = 2$), 세 급수가 수렴하고
$$
\begin{aligned}
\sum_{n=0}^{\infty} z^n &= \frac{1}{1 - z}, \\
\sum_{n=0}^{\infty} (n + 1) z^n &= \frac{1}{(1 - z)^2}, \\
\sum_{n=0}^{\infty} (n + 1)(n + 2) z^n &= \frac{2}{(1 - z)^3}
\end{aligned}
$$
이다. 실수의 계산으로 $(n + 1)(n + 2) - 3(n + 1) + 1 = n^2 + 3n + 2 - 3n - 3 + 1 = n^2$이므로, [[complex-series|복소 급수]]의 (5)의 선형성을 두 번 쓰면 항이 $n^2 z^n$인 급수가 수렴하고
$$
\begin{aligned}
&\sum_{n=0}^{\infty} n^2 z^n \\
&= \frac{2}{(1 - z)^3} - \frac{3}{(1 - z)^2} \\
&\qquad + \frac{1}{1 - z} \\
&= \frac{2 - 3(1 - z) + (1 - z)^2}{(1 - z)^3}
\end{aligned}
$$
이다($|z| < 1$이면 $z \ne 1$이다). 분자는 $2 - 3 + 3z + 1 - 2z + z^2 = z + z^2 = z(1 + z)$이다.

**(2)** $|i/2| = 1/2 < 1$이다([[modulus-of-complex-number|복소수의 절댓값]]의 (5)). $z = i/2$이면 $z(1 + z) = i/2 + i^2/4 = -1/4 + i/2$이고, $(1 - i/2)^2 = 1 - i + i^2/4 = 3/4 - i$, $(1 - i/2)^3 = (3/4 - i)(1 - i/2) = 3/4 - 3i/8 - i + i^2/2 = 1/4 - 11i/8$이다. 분자와 분모에 $8$을 곱하고 분모의 켤레 $2 + 11i$를 곱하면
$$
\begin{aligned}
\frac{-2 + 4i}{2 - 11i} &= \frac{(-2 + 4i)(2 + 11i)}{(2 - 11i)(2 + 11i)} \\
&= \frac{-4 - 22i + 8i + 44 i^2}{4 + 121} \\
&= -\frac{48}{125} - \frac{14}{125}\, i
\end{aligned}
$$
이다.
:::

:::exercise[$z \exp(z)$ 의 고계 도함수]
$f(z) = z\exp(z)$로 정한 $f : \mathbb{C} \to \mathbb{C}$가 무한 번 미분가능하고, $0$ 이상인 모든 정수 $n$과 모든 복소수 $z$에서 $f^{(n)}(z) = (z + n)\exp(z)$임을 보여라. 특히 $f^{(n)}(0) = n$이다.
:::

:::solution
아래에서 "고계"는 [[higher-complex-derivatives|고계 복소 도함수]]의 번호이다. $0$ 이상인 정수 $n$에 대한 명제 $P(n)$을 "$f$는 $n$번 미분가능하고 모든 $z$에서 $f^{(n)}(z) = (z + n)\exp(z)$이다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 보인다.

$n = 0$이면 $f$는 $0$번 미분가능하고(고계의 정의) 고계의 (1)에 의해 $f^{(0)} = f$이며 $z + 0 = z$이므로 $P(0)$이 참이다.

$P(n)$이 참이라 하자. [[complex-derivative|복소 미분]]의 (5)를 $a = 1$, $b = n$에 쓰면 $z + n$의 함수는 정함수이고 도함수의 값이 $1$이다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp' = \exp$이다. [[complex-derivative-rules|복소 미분의 법칙]]의 (2)의 곱의 법칙에 의해 $(z + n)\exp(z)$의 함수, 곧 $f^{(n)}$은 정칙함수이고 모든 $z$에서
$$
\begin{aligned}
(f^{(n)})'(z) &= 1 \cdot \exp(z) \\
&\quad + (z + n)\exp(z) \\
&= (z + n + 1)\exp(z)
\end{aligned}
$$
이다. 고계의 (2)에 의해 $f$는 $n + 1$번 미분가능하고, 고계의 (1)에 의해 $f^{(n+1)} = (f^{(n)})'$이므로 $P(n + 1)$이 참이다.

따라서 $0$ 이상인 모든 $n$에서 $P(n)$이 참이고, $f$는 무한 번 미분가능하다(고계의 정의). [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\exp(0) = 1$이므로 $f^{(n)}(0) = (0 + n) \cdot 1 = n$이다.
:::

:::exercise[$f' = 2zf$ 이고 $f(0) = 1$ 인 정함수]
정함수 $f$가 모든 복소수 $z$에서 $f'(z) = 2z f(z)$를 만족하고 $f(0) = 1$이면, 모든 $z$에서 $f(z) = \exp(z^2)$임을 보여라. 또 $z^2$에서의 지수함수의 값 $\exp(z^2)$의 함수가 이 두 조건을 만족함을 확인하라.
:::

:::solution
아래에서 "법칙"은 [[complex-derivative-rules|복소 미분의 법칙]], "덧셈 법칙"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 번호이다.

$p(z) = -z^2$은 계수가 $0$, $0$, $-1$인 복소 다항함수이고 법칙의 (4)의 (iii)에 의해 $p'(z) = -2z$이다. [[complex-derivative-examples|복소 미분의 예]]의 (3)에 의해 $E(z) = \exp(-z^2)$로 정한 $E$는 정함수이고 $E'(z) = -2z\exp(-z^2)$이다. 법칙의 (2)의 곱의 법칙에 의해 $g = fE$는 정함수이고 모든 $z$에서
$$
\begin{aligned}
g'(z) &= f'(z) E(z) + f(z) E'(z) \\
&= 2z f(z) E(z) - 2z f(z) E(z) \\
&= 0
\end{aligned}
$$
이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)에 의해 $\mathbb{C}$는 영역이므로, 같은 항목의 (3)에 의해 $g$는 상수이고 모든 $z$에서 $g(z) = g(0) = f(0)\exp(0) = 1$이다([[complex-exponential-function|복소 지수함수]]의 (3)).

덧셈 법칙의 (1)과 복소 지수함수의 (3)에 의해 $\exp(z^2)\exp(-z^2) = \exp(0) = 1$이므로, 모든 $z$에서
$$
\begin{aligned}
f(z) &= f(z)\,\bigl(E(z)\exp(z^2)\bigr) \\
&= g(z)\exp(z^2) = \exp(z^2)
\end{aligned}
$$
이다.

거꾸로 복소 미분의 예의 (3)을 계수가 $0$, $0$, $1$인 복소 다항함수 $z^2$(법칙의 (4)의 (iii)에 의해 도함수가 $2z$)에 쓰면, $\exp(z^2)$의 함수는 정함수이고 도함수의 값이 $2z\exp(z^2)$이다. $z = 0$에서 값은 $\exp(0) = 1$이다. 따라서 두 조건을 만족하는 정함수는 이것 하나뿐이다.
:::

:::exercise[$f'' = -f$ 인 복소 멱급수의 계수]
중심이 $0$이고 계수가 $(c_n)_{n \ge 0}$인 복소 멱급수가 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 두 경우 가운데 하나이고, 그것이 $D$ 위에 나타내는 함수를 $f : D \to \mathbb{C}$라 하자.

1. $f'' = -f$이고 $f(0) = 0$, $f'(0) = 1$이면, $0$ 이상인 모든 정수 $k$에서
   $$
   c_{2k} = 0, \qquad c_{2k+1} = \frac{(-1)^k}{(2k + 1)!}
   $$
   임을 보여라.
2. 거꾸로 계수가 1의 식으로 주어진 중심 $0$의 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이고, 그것이 $\mathbb{C}$ 위에 나타내는 함수 $f$는 $f'' = -f$, $f(0) = 0$, $f'(0) = 1$을 만족함을 보여라.
:::

:::solution
아래에서 "계수"는 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]], "고계"는 [[higher-complex-derivatives|고계 복소 도함수]]의 번호이다.

**(1)** 계수의 (3)에 의해 $f$는 무한 번 미분가능하다. 고계의 (1)에 의해 $f'$은 정칙함수이고, 고계의 (4)에 의해 $f'$도 무한 번 미분가능하며 $0$ 이상인 모든 $k$에서 $(f')^{(k)} = f^{(k+1)}$이다. 고계의 (1)에 의해 $f'' = (f')'$이고, $f'$에 고계의 (4)를 다시 쓰면 $(f'')^{(k)} = ((f')')^{(k)} = (f')^{(k+1)} = f^{(k+2)}$이다. 한편 가정 $f'' = -f$와 고계의 (6)($c = -1$)에 의해 $(f'')^{(k)} = (-f)^{(k)} = -f^{(k)}$이다. 따라서 $0$ 이상인 모든 $k$에서
$$
f^{(k+2)} = -f^{(k)}
$$
이다.

$a_k = f^{(k)}(0)$으로 두자. 고계의 (1)에 의해 $a_0 = f(0) = 0$, $a_1 = f'(0) = 1$이고, 위 식에서 $a_{k+2} = -a_k$이다. $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 $a_{2k} = 0$이고 $a_{2k+1} = (-1)^k$이다($k = 0$이면 $a_0 = 0$, $a_1 = 1$이고, $k$에서 참이면 $a_{2k+2} = -a_{2k} = 0$, $a_{2k+3} = -a_{2k+1} = (-1)^{k+1}$). 계수의 (4)에 의해 $c_n = a_n / n!$이므로 $c_{2k} = 0$이고 $c_{2k+1} = (-1)^k / (2k + 1)!$이다.

**(2)** *모든 복소수에서 수렴한다.* $0$ 이상인 모든 $n$에서 $|c_n| \le 1/n!$이다(짝수 번째는 $0$이고, 홀수 번째는 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)와 $|(-1)^k| = 1$에 의해 절댓값이 $1/n!$). $r$을 $0$ 이상인 실수라 하자. [[complex-exponential-function|복소 지수함수]]의 정의에 의해 계수가 $(1/n!)_{n \ge 0}$인 중심 $0$의 복소 멱급수는 $\iota(r)$에서 수렴하므로, [[complex-power-series|복소 멱급수]]의 (3)의 (ii)와 (1)에 의해 $n$에서의 값이 $r^n / n!$인 실수의 열은 유계이다. 곧 실수 $B$가 있어 모든 $n$에서 $r^n/n! \le B$이고, 따라서 $|c_n|\, r^n \le r^n / n! \le B$이다. 그러므로 $0$ 이상인 모든 실수 $r$이 이 복소 멱급수의 집합 $A$에 들고, $A$는 위로 유계가 아니다. 복소 멱급수의 정의에 의해 이것은 모든 복소수에서 수렴하는 복소 멱급수이다.

*$f'' = -f$.* 계수의 (3)을 $\ell = 2$에 쓰면 모든 $z$에서 $f''(z) = f^{(2)}(z) = \sum_{n=0}^{\infty} \frac{(n + 2)!}{n!}\, c_{n+2} z^n$이다. [[factorial-from-zero|0부터의 계승]]의 (1)에 의해 $(n + 2)! = n!\,(n + 1)(n + 2)$이다. $n = 2k$이면 $c_{n+2} = 0 = -c_n$이고, $n = 2k + 1$이면
$$
\begin{aligned}
&\frac{(2k + 3)!}{(2k + 1)!} \cdot \frac{(-1)^{k+1}}{(2k + 3)!} \\
&= \frac{(-1)^{k+1}}{(2k + 1)!} = -c_{2k+1}
\end{aligned}
$$
이다. 따라서 모든 $n$에서 $\frac{(n + 2)!}{n!} c_{n+2} = -c_n$이고, [[complex-series|복소 급수]]의 (5)의 선형성에 의해 $f''(z) = \sum_{n=0}^{\infty} (-c_n) z^n = -f(z)$이다. 또 수렴 반지름의 (7)의 (ii)에 의해 $f(0) = c_0 = 0$이고, [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]의 (2)에 의해 $f'(0) = c_1 = 1$이다.
:::

:::exercise[1 근처의 로그의 곱셈 법칙]
$\operatorname{lg}$는 [[logarithm-near-one|1 근처의 복소 로그]]의 것이다. $w \in B(1, 1)$이라 하고 $U = \{z \in B(1, 1) : wz \in B(1, 1)\}$로 둔다.

1. $U$가 $1$을 원소로 갖는 영역임을 보여라.
2. 모든 $z \in U$에서 $\operatorname{lg}(wz) = \operatorname{lg}(z) + \operatorname{lg}(w)$임을 보여라.
3. $w^{-1}$도 $B(1, 1)$의 원소이면 $\operatorname{lg}(w^{-1}) = -\operatorname{lg}(w)$임을 보여라.
:::

:::solution
아래에서 "로그"는 [[logarithm-near-one|1 근처의 복소 로그]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "영역"은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 번호이다. 로그의 (1)에 의해 $w \ne 0$이다.

**(1)** *공 두 개의 교집합.* $z$가 복소수이면 절댓값의 (3)에 의해 $|wz - 1| = |w|\,|z - w^{-1}|$이므로, $wz \in B(1, 1)$인 것은 정확히 $|z - w^{-1}| < |w|^{-1}$일 때이다($|w| > 0$, 절댓값의 (1)). 따라서 $U = B(1, 1) \cap B(w^{-1}, |w|^{-1})$이다. [[open-ball-is-open|열린 공은 열린집합이다]]의 (1)과 [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 (3)에 의해 $U$는 열린집합이다. $1 \in B(1, 1)$이고 $w \cdot 1 = w \in B(1, 1)$이므로 $1 \in U$이다.

*선분.* 복소수 $c$, 양의 실수 $\rho$와 $p, z \in B(c, \rho)$, $0 \le s \le 1$인 실수 $s$에 대하여 $p + \iota(s)(z - p) \in B(c, \rho)$이다. $p + \iota(s)(z - p) - c = \iota(1 - s)(p - c) + \iota(s)(z - c)$이므로, [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)와 절댓값의 (5)($0 \le 1 - s$, $0 \le s$)에 의해 그 절댓값은 $(1 - s)|p - c| + s|z - c|$ 이하이다. $s = 1$이면 이것은 $|z - c| < \rho$이고, $s < 1$이면 $(1 - s)|p - c| < (1 - s)\rho$이고 $s|z - c| \le s\rho$이므로 합은 $\rho$보다 작다.

$z \in U$이고 $0 \le s \le 1$이면, $1$과 $z$가 둘 다 $B(1, 1)$과 $B(w^{-1}, |w|^{-1})$의 원소이므로 위 사실을 두 공에 쓰면 $1 + \iota(s)(z - 1) \in U$이다. 영역의 (1)의 (i)을 $T = U$, $a = 1$에 쓰면 $U$는 연결 부분집합이고, 열린집합이므로 영역이다.

**(2)** $m(z) = wz$로 정한 $m : \mathbb{C} \to \mathbb{C}$는 [[complex-derivative|복소 미분]]의 (5)에 의해 정함수이고 $m' = w$이며, 같은 항목의 (4)의 (i)에 의해 $m|_U$는 정칙함수이고 $(m|_U)' = w$이다. $U$의 정의에 의해 모든 $z \in U$에서 $m(z) \in B(1, 1)$이다. 로그의 (2)에 의해 $\operatorname{lg} : B(1, 1) \to \mathbb{C}$는 정칙함수이고 $\operatorname{lg}'(\zeta) = 1/\zeta$이므로, [[complex-derivative-rules|복소 미분의 법칙]]의 (5)의 연쇄법칙에 의해 $\operatorname{lg} \circ m|_U$는 정칙함수이고 $z \in U$에서
$$
(\operatorname{lg} \circ m|_U)'(z) = \frac{1}{wz} \cdot w = \frac{1}{z}
$$
이다. 복소 미분의 (4)의 (i)에 의해 $\operatorname{lg}|_U$도 정칙함수이고 도함수의 값이 $1/z$이다. 법칙의 (1)에 의해 $H = \operatorname{lg} \circ m|_U - \operatorname{lg}|_U$는 정칙함수이고 모든 점에서 $H'(z) = 0$이다. (1)에 의해 $U$는 영역이므로, 영역의 (3)에 의해 $H$는 상수이고, 로그의 (1)의 $\operatorname{lg}(1) = 0$에 의해 모든 $z \in U$에서 $H(z) = H(1) = \operatorname{lg}(w) - \operatorname{lg}(1) = \operatorname{lg}(w)$이다. 곧 $\operatorname{lg}(wz) = \operatorname{lg}(z) + \operatorname{lg}(w)$이다.

**(3)** $z = w^{-1}$이면 $z \in B(1, 1)$이고 $wz = 1 \in B(1, 1)$이므로 $z \in U$이다. (2)에 의해 $0 = \operatorname{lg}(1) = \operatorname{lg}(w^{-1}) + \operatorname{lg}(w)$이므로 $\operatorname{lg}(w^{-1}) = -\operatorname{lg}(w)$이다. 예컨대 $w = 1 + i/2$이면 $w^{-1} = 4/5 - (2/5)i$이고 $|w^{-1} - 1| = |-1/5 - (2/5)i| = \sqrt{5}/5 < 1$이므로 이 경우에 해당한다.
:::

:::exercise[위아래 반평면에서 부호가 다른 지수함수]
$U_+ = \{z \in \mathbb{C} : 0 < \operatorname{Im} z\}$, $U_- = \{z \in \mathbb{C} : \operatorname{Im} z < 0\}$, $G = U_+ \cup U_-$로 두고, $z \in U_+$이면 $f(z) = \exp(z)$, $z \in U_-$이면 $f(z) = -\exp(z)$인 $f : G \to \mathbb{C}$를 생각한다.

1. $U_+$, $U_-$, $G$가 열린집합이고 $f$가 정칙함수이며 모든 $z \in G$에서 $f'(z) = f(z)$임을 보여라.
2. $f(-i) \ne f(i)\exp(-i - i)$임을 보이고, 이것으로 $G$가 연결 부분집합이 아님을 보여라.
:::

:::solution
**(1)** $a \in U_+$이고 $r = \operatorname{Im} a$로 두면 $0 < r$이다. $|z - a| < r$이면 [[complex-field|복소수체]]의 (1)과 [[modulus-of-complex-number|복소수의 절댓값]]의 (6), [[absolute-value|절댓값]]의 (6)에 의해 $\operatorname{Im} a - \operatorname{Im} z = \operatorname{Im}(a - z) \le |a - z| < r = \operatorname{Im} a$이므로 $0 < \operatorname{Im} z$이다. 곧 $B(a, r) \subseteq U_+$이고, [[open-set-in-metric-space]]의 정의에 의해 $U_+$는 열린집합이다. $a \in U_-$이면 $r = -\operatorname{Im} a > 0$으로 두고, $|z - a| < r$에서 $\operatorname{Im} z - \operatorname{Im} a \le |z - a| < -\operatorname{Im} a$이므로 $\operatorname{Im} z < 0$이다. 따라서 $U_-$도 열린집합이다. [[open-sets-of-a-metric-space|거리공간의 열린집합의 성질]]의 (2)에 의해 $G$도 열린집합이다.

[[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp' = \exp$이며, [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 $(-1)\exp$도 정함수이고 도함수가 $-\exp$이다. $f|_{U_+}$와 $f|_{U_-}$는 이 두 정함수를 $U_+$, $U_-$로 제한한 것이므로, [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 정칙함수이고 도함수는 각각 $\exp|_{U_+}$, $-\exp|_{U_-}$이다. 복소 미분의 (4)의 (ii)를 $U_1 = U_+$, $U_2 = U_-$에 쓰면 $f$는 정칙함수이고, $z \in U_+$에서 $f'(z) = \exp(z) = f(z)$, $z \in U_-$에서 $f'(z) = -\exp(z) = f(z)$이다.

**(2)** $i \in U_+$, $-i \in U_-$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1)에 의해 $f(i)\exp(-i - i) = \exp(i)\exp(-2i) = \exp(-i)$이고, $f(-i) = -\exp(-i)$이다. 덧셈 법칙의 (2)에 의해 $\exp(-i) \ne 0$이므로 $2\exp(-i) \ne 0$이고, 따라서 $-\exp(-i) \ne \exp(-i)$이다.

$G$가 영역이라면, 복소 지수함수의 도함수의 (4)를 $c = 1$, $a = i$에 쓰면 모든 $z \in G$에서 $f(z) = f(i)\exp(z - i)$이어야 하는데, $z = -i$에서 이것이 성립하지 않는다. 따라서 $G$는 영역이 아니다. (1)에 의해 $G$는 열린집합이므로, 영역의 정의([[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]])에 의해 $G$는 $\mathbb{C}$의 연결 부분집합이 아니다.
:::
