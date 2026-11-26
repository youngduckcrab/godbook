---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "4.5절, Exercise 17, 18 (p.57) — 문제 '$3 - \\sqrt{3}\\,i$의 극형식과 거듭제곱'과 같은 발상(출처는 1 − i, √3 + i 등을 극형식으로 바꾸고 (√3 + i)⁵, (1 − i)⁶ 등을 계산하게 한다. 수는 다르다)"
  - ref: judson-abstract-algebra
    loc: "4.5절, Exercise 44 (p.58) — 문제 '$\\mu_m \\subseteq \\mu_n$이 되는 조건'과 같은 대상(출처는 𝕋 의 원소 α 에서 αᵐ = 1 이고 αⁿ = 1 인 것이 α^d = 1(d = gcd(m, n))과 같다는 것을 보이게 한다. 이 문제는 μ_m ⊆ μ_n 과 m | n 이 같다는 것을 보인다)"
  - ref: judson-abstract-algebra
    loc: "23.3절, Lemma 23.28 의 증명 (p.304) — 문제 '$z^n = w^n$이지만 $z \\ne w$인 예'의 (2)와 같은 결론(출처는 xⁿ − a 의 근 하나 ζ 에 1 의 원시 n제곱근 ω 의 거듭제곱을 곱한 ζ, ωζ, …, ω^{n−1}ζ 가 근 전체라고 적는다)"
added: 2026-11-26
---

:::exercise[$3 - \sqrt{3}\,i$의 극형식과 거듭제곱]
$z = 3 - \sqrt{3}\,i$라 하자.

1. $|z| = 2\sqrt{3}$이고 $-\pi/6 \in \arg z$임을 보여라.
2. $z^3$을 [[de-moivre-formula|드무아브르 공식]]으로 구하고, 곱셈으로 다시 계산하여 맞춰 보라.
3. 자연수 $n$에 대하여 $z^n$이 양의 실수를 옮긴 복소수인 것(곧 $0 < x$인 어떤 실수 $x$에서 $z^n = \iota(x)$인 것)은 정확히 $n$이 $12$의 배수일 때임을 보이고, $z^{12}$를 구하라.
:::

:::solution
아래에서 "극형식"은 [[polar-form|극형식과 편각]], "드무아브르"는 [[de-moivre-formula|드무아브르 공식]], "주기성"은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 번호이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, 실수는 [[complex-field|복소수체]]의 (3)의 약속대로 복소수 자리에 쓴다.

**(1)** [[square-root-exists|제곱근]]의 (1)에 의해 $\sqrt{3}\sqrt{3} = 3$이므로, [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 $|z|^2 = 3^2 + (-\sqrt{3})^2 = 9 + 3 = 12$이다. 한편 $(2\sqrt{3})(2\sqrt{3}) = 4 \cdot 3 = 12$이고 $0 \le 2\sqrt{3}$, $0 \le |z|$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (7)의 (iv)에 의해 $|z| = 2\sqrt{3}$이다. 따라서
$$
\begin{aligned}
\operatorname{Re} z / |z| &= 3 / (2\sqrt{3}) = \sqrt{3}/2, \\
\operatorname{Im} z / |z| &= -\sqrt{3} / (2\sqrt{3}) = -1/2
\end{aligned}
$$
이다(첫 줄은 $3 = \sqrt{3}\sqrt{3}$으로 약분한 것이다). [[cosine-and-sine|코사인과 사인]]의 (3)과 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\cos(-\pi/6) = \cos(\pi/6) = \sqrt{3}/2$이고 $\sin(-\pi/6) = -\sin(\pi/6) = -1/2$이다. 극형식의 (4)에 의해 $-\pi/6 \in \arg z$이다.

**(2)** $r = 2\sqrt{3}$이라 하자. 드무아브르의 (3)을 $n = 3$, $\theta = -\pi/6$에 쓰면 $z^3 = r^3 \exp(i \cdot 3 \cdot (-\pi/6)) = r^3 \exp(-i\pi/2)$이다. $r^3 = 8\,\sqrt{3}\sqrt{3}\sqrt{3} = 24\sqrt{3}$이다. 코사인과 사인의 (1), (3)과 [[definition-of-pi|원주율]]의 (1), (3)의 (ii)에 의해 $\exp(-i\pi/2) = \cos(\pi/2) - i\sin(\pi/2) = -i$이므로 $z^3 = -24\sqrt{3}\,i$이다.

곱셈으로 계산하면, [[complex-number|복소수]]의 (2)에 의해 $z^2 = zz$의 실수부는 $9 - 3 = 6$, 허수부는 $3(-\sqrt{3}) + (-\sqrt{3})3 = -6\sqrt{3}$이므로 $z^2 = 6 - 6\sqrt{3}\,i$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)에 의해 $z^3 = z^2 z$이고, 그 실수부는 $6 \cdot 3 - (-6\sqrt{3})(-\sqrt{3}) = 18 - 18 = 0$, 허수부는 $6(-\sqrt{3}) + (-6\sqrt{3})3 = -24\sqrt{3}$이다. 두 결과가 같다.

**(3)** 드무아브르의 (3)에 의해 자연수 $n$에서 $z^n = r^n \exp(-in\pi/6)$이고 $-n\pi/6 \in \arg(z^n)$이다.

$z^n = \iota(x)$, $0 < x$라 하자. 극형식의 (6)에 의해 $\arg x = 2\pi\mathbb{Z}$이므로 $-n\pi/6 = 2\pi k$인 정수 $k$가 있다. 양변에 $-6\pi^{-1}$을 곱하면 $n = 12(-k)$이므로 $n$은 $12$의 배수이다.

거꾸로 $n = 12m$($m$은 정수)이면 $-n\pi/6 = 2\pi(-m)$이고, 주기성의 (2)의 $\exp(i(x + 2\pi k)) = \exp(ix)$를 $x = 0$, $k = -m$에 쓰고 [[complex-exponential-function|복소 지수함수]]의 (3)의 $\exp(0) = 1$을 쓰면 $\exp(-in\pi/6) = 1$이다. 따라서 $z^n = r^n$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 < r^n$이다.

특히 $r^2 = 12$이므로 실수의 거듭제곱의 (2)의 (ii)에 의해 $z^{12} = r^{12} = (r^2)^6 = 12^6 = 2985984$이다.
:::

:::exercise[$z^n$이 실수인 복소수가 되는 지수]
$\pi\mathbb{Z}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 기호이다. $z$를 $0$이 아닌 복소수, $\theta \in \arg z$라 하자.

1. 자연수 $n$에 대하여 $z^n$이 실수인 복소수인 것은 정확히 $n\theta \in \pi\mathbb{Z}$일 때임을 보여라.
2. 문제 1의 $z = 3 - \sqrt{3}\,i$에서 $z^n$이 실수인 복소수인 자연수 $n$은 정확히 $6$의 배수임을 보이고, $z^6$을 구하라.
3. 문제 1의 $z$에서 $n$이 $6$의 배수이지만 $12$의 배수가 아니면 $z^n$은 음의 실수를 옮긴 복소수임을 보여라.
:::

:::solution
**(1)** $r = |z|$로 두면 [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 $0 < r$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 < r^n$이다. [[de-moivre-formula|드무아브르 공식]]의 (3)에 의해 $\operatorname{Im}(z^n) = r^n \sin(n\theta)$이다. [[complex-field|복소수체]]의 (3)에 의해 $z^n$이 실수인 복소수인 것은 정확히 $\operatorname{Im}(z^n) = 0$일 때이고, $r^n \ne 0$이므로 [[real-number-arithmetic|실수의 계산 법칙]]의 (K10), (K9)에 의해 이것은 정확히 $\sin(n\theta) = 0$일 때이다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (5)에 의해 이것은 정확히 $n\theta \in \pi\mathbb{Z}$일 때이다.

**(2)** 문제 1의 (1)에 의해 $\theta = -\pi/6$으로 둘 수 있다. (1)에 의해 $z^n$이 실수인 복소수인 것은 정확히 $-n\pi/6 = \pi k$인 정수 $k$가 있을 때, 곧 양변에 $-6\pi^{-1}$을 곱해 $n = 6(-k)$일 때이다. 따라서 그런 $n$은 정확히 $6$의 배수이다.

드무아브르 공식의 (3)에 의해 $z^6 = r^6 \exp(-i\pi)$이고, 실수의 거듭제곱의 (2)의 (ii)와 문제 1의 $r^2 = 12$에 의해 $r^6 = 12^3 = 1728$이다. [[cosine-and-sine|코사인과 사인]]의 (1), (3)과 주기성의 (1)에 의해 $\exp(-i\pi) = \cos\pi - i\sin\pi = -1$이므로 $z^6 = -1728$이다.

**(3)** $n = 6m$($m$은 자연수)이 $12$의 배수가 아니라 하자. $m$이 짝수 $2l$이면 $n = 12l$이 되므로, [[even-and-odd|짝수와 홀수]]에 의해 $m$은 홀수이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)과 (5)에 의해 $z^n = (z^6)^m = \iota\bigl((-1728)^m\bigr)$이고, 실수의 거듭제곱의 (2)의 (iii), (5)에 의해 $(-1728)^m = (-1)^m 1728^m = -1728^m$이다. 같은 (6)의 (i)에 의해 $0 < 1728^m$이므로 $z^n$은 음의 실수 $-1728^m$을 옮긴 것이다.
:::

:::exercise[$\mu_m \subseteq \mu_n$이 되는 조건]
$\mu_n$과 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이다. $m$, $n$을 자연수라 하자.

1. $\mu_m \subseteq \mu_n$인 것은 정확히 $m \mid n$일 때임을 보여라.
2. 이를 써서 $\mu_4 \subseteq \mu_6$이 아님을 보이고, $\mu_4$의 원소 가운데 $\mu_6$에 들지 않는 것을 하나 찾아 직접 확인하라.
:::

:::solution
아래에서 "1 의 n제곱근"은 [[roots-of-unity|1 의 n제곱근]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이다.

**(1)** $m \mid n$이라 하자. $n = mk$인 정수 $k$가 있고, $0 < m$, $0 < n$이므로 $k \le 0$이면 [[prime-number|소수]] 항목의 (Z2)에 의해 $mk \le 0$이 되어 어긋나므로 $0 < k$이다. $z \in \mu_m$이면 $z^m = 1$이고, 거듭제곱의 (3)의 (i)에 의해 $z^n = (z^m)^k = 1^k = 1$이므로 $z \in \mu_n$이다.

거꾸로 $\mu_m \subseteq \mu_n$이라 하자. 1 의 n제곱근의 (1)에 의해 $\omega_m = \exp(2\pi i \cdot 1/m) \in \mu_m$이므로 $\omega_m \in \mu_n$, 곧 $\omega_m^n = 1$이다. 1 의 n제곱근의 (2)에 의해 $\omega_m^n = \exp(2\pi i n/m)$이고, [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $1 = \exp(0) = \exp(2\pi i \cdot 0/m)$이다. 따라서 $\exp(2\pi i \cdot 0/m) = \exp(2\pi i n/m)$이고, 1 의 n제곱근의 (1)을 $m$에 대해 쓰면 $m \mid n - 0$, 곧 $m \mid n$이다.

**(2)** $6 = 4k$인 정수 $k$가 있다면 [[order-properties-of-reals|실수의 순서의 성질]]로 $1 < k = 3/2 < 2$인데, (Z1)에 의해 $1 < k$이면 $2 \le k$이므로 어긋난다. 따라서 $4 \mid 6$이 아니고, (1)에 의해 $\mu_4 \subseteq \mu_6$이 아니다.

실제로 1 의 n제곱근의 (5)에 의해 $i \in \mu_4$이고, 거듭제곱의 (6)에 의해 $6 = 4 \cdot 1 + 2$이므로 $i^6 = i^2 = -1$이다. $-1 \ne 1$이므로 $i \notin \mu_6$이다.
:::

:::exercise[1 의 $n$제곱근의 거듭제곱의 합]
$n$을 자연수라 하고 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이라 하자.

1. 정수 $j$에 대하여, $n \mid j$이면 $\sum_{k=0}^{n-1} \omega_n^{jk} = n$이고, $n \mid j$가 아니면 $\sum_{k=0}^{n-1} \omega_n^{jk} = 0$임을 보여라.
2. $n \ge 3$이면
   $$
   \begin{aligned}
   \sum_{k=0}^{n-1} \cos(4\pi k/n) &= 0, \\
   \sum_{k=0}^{n-1} \bigl(\cos(2\pi k/n)\bigr)^2 &= n/2
   \end{aligned}
   $$
   임을 보여라.
3. $n = 1$과 $n = 2$에서 (2)의 두 합을 직접 구하여, 두 등식이 모두 성립하지 않음을 보여라.
:::

:::solution
아래에서 "1 의 n제곱근"은 [[roots-of-unity|1 의 n제곱근]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]], "유한 합"은 [[complex-finite-sum|복소수의 유한 합]]의 번호이다.

**(1)** 1 의 n제곱근의 (1)에 의해 $\omega_n \in \mu_n$이므로 $\omega_n^n = 1$이고, $\omega_n \ne 0$이다($\omega_n = 0$이면 거듭제곱의 (3)의 (i)에 의해 $\omega_n^n = 0$이 되어 어긋난다). $u = \omega_n^j$로 두면 거듭제곱의 (3)의 (ii)에 의해 $0 \le k$인 모든 정수 $k$에서 $\omega_n^{jk} = u^k$이고, $u^n = \omega_n^{jn} = (\omega_n^n)^j = 1^j = 1$이다.

- $n \mid j$이면 $j = nl$인 정수 $l$이 있고 $u = (\omega_n^n)^l = 1^l = 1$이므로 모든 항이 $u^k = 1$이다. 유한 합의 (8)의 상수의 합에 의해 $\sum_{k=0}^{n-1} \omega_n^{jk} = n \cdot 1 = n$이다.
- $n \mid j$가 아니라 하자. 1 의 n제곱근의 (2)에 의해 $u = \exp(2\pi i j/n)$이고, [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $1 = \exp(2\pi i \cdot 0/n)$이다. 1 의 n제곱근의 (1)에 의해 두 수가 같은 것은 정확히 $n \mid j - 0$일 때이므로 $u \ne 1$이다. 유한 합의 (9)를 $K = n - 1$에 쓰면 $(1 - u)\sum_{k=0}^{n-1} u^k = 1 - u^n = 0$이고, $1 - u \ne 0$이므로 [[complex-field|복소수체]]의 (1)에 의해 양변에 $(1 - u)^{-1}$을 곱하여 $\sum_{k=0}^{n-1} \omega_n^{jk} = 0$이다.

**(2)** $n \ge 3$이면 $n \mid 2$가 아니다. $2 = nl$인 정수 $l$이 있다면 [[prime-number|소수]] 항목의 (Z2)에 의해 $0 < l$, (Z1)에 의해 $1 \le l$이고, (Z3)에 의해 $2 = nl \ge n \ge 3$이 되어 어긋나기 때문이다. 따라서 (1)을 $j = 2$에 쓰면 $\sum_{k=0}^{n-1} \omega_n^{2k} = 0$이다. 1 의 n제곱근의 (2)에 의해 $\omega_n^{2k} = \exp(2\pi i \cdot 2k/n) = \exp(i\,\iota(4\pi k/n))$이므로 [[cosine-and-sine|코사인과 사인]]의 정의에 의해 $\operatorname{Re}(\omega_n^{2k}) = \cos(4\pi k/n)$이다. 유한 합의 (8)과 (1)에 의해
$$
\begin{aligned}
\sum_{k=0}^{n-1} \cos(4\pi k/n) &= \operatorname{Re} \sum_{k=0}^{n-1} \omega_n^{2k} \\
&= \operatorname{Re} 0 = 0
\end{aligned}
$$
이다.

[[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (3)의 $\cos(2t) = 2(\cos t)^2 - 1$을 $t = 2\pi k/n$에 쓰면 $(\cos(2\pi k/n))^2 = 2^{-1} \cdot 1 + 2^{-1}\cos(4\pi k/n)$이다. [[series-indexed-from-zero|0부터 번호가 붙은 수열]]의 (5)(선형성)를 두 번 쓰고, 같은 항목의 (13)의 (i)을 $r = 1$에 써서 $\sum_{k=0}^{n-1} 1 = \sum_{k=0}^{n-1} 1^k = n$을 쓰면
$$
\begin{aligned}
\sum_{k=0}^{n-1} \bigl(\cos(2\pi k/n)\bigr)^2 &= 2^{-1} n + 2^{-1} \cdot 0 \\
&= n/2
\end{aligned}
$$
이다.

**(3)** $n = 1$이면 각 합은 $k = 0$의 항 하나이고([[series-indexed-from-zero|0부터 번호가 붙은 수열]]의 (1)), 코사인과 사인의 (2)에 의해 $\cos 0 = 1$, $(\cos 0)^2 = 1$이다. $1 \ne 0$이고 $1 \ne 1/2$이다.

$n = 2$이면 각 합은 $k = 0, 1$의 두 항이고, [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\cos(2\pi) = 1$, $\cos\pi = -1$이므로 첫째 합은 $\cos 0 + \cos(2\pi) = 2$, 둘째 합은 $1^2 + (-1)^2 = 2$이다. $2 \ne 0$이고 $2 \ne 2/2 = 1$이다.

두 경우 모두 $n \mid 2$이어서 (1)의 첫째 경우가 되고, $\sum_{k=0}^{n-1} \omega_n^{2k} = n$이 $0$이 아니기 때문이다. (2)에서 $n \ge 3$이 쓰인 곳은 $n \mid 2$가 아니라는 것 하나이다.
:::

:::exercise[$z^n = \overline{z}$의 해]
$n$을 $2$ 이상인 자연수라 하자.

1. $z^n = \overline{z}$인 복소수 $z$는 정확히 $0$과 $\mu_{n+1}$의 원소임을 보여라. $\mu_{n+1}$은 [[roots-of-unity|1 의 n제곱근]]의 것이다.
2. 그런 $z$가 정확히 $n + 2$개임을 보여라.
3. $n = 1$이면 $z = \overline{z}$인 복소수는 정확히 실수인 복소수이고, 그런 수가 $n + 2 = 3$개보다 많음을 보여라. (1)의 증명에서 $n \ge 2$가 쓰이는 곳을 말하라.
:::

:::solution
아래에서 "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]], "실수의 거듭제곱"은 [[power-of-a-real-number|실수의 거듭제곱]], "켤레"는 [[complex-conjugate|켤레복소수]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다.

**(1)** 거듭제곱의 (3)의 (i)에 의해 $0^n = 0$이고 켤레의 (4)에 의해 $\overline{0} = 0$이므로 $0$은 해이다.

$z \ne 0$이 $z^n = \overline{z}$를 만족한다고 하자. 거듭제곱의 (4)와 절댓값의 (2)에 의해 $|z|^n = |z^n| = |\overline{z}| = |z|$이다. $s = |z|$로 두면 절댓값의 (1)에 의해 $0 < s$이고, $n - 1 \ge 1$이므로 실수의 거듭제곱의 (1)에 의해 $s^n = s^{n-1}s$이다. 따라서 $s^{n-1}s = 1 \cdot s$이고 $s \ne 0$이므로 [[real-number-arithmetic|실수의 계산 법칙]]의 (K11)에 의해 $s^{n-1} = 1 = 1^{n-1}$이다. $0 \le s$, $0 \le 1$, $n - 1 \ge 1$이므로 실수의 거듭제곱의 (6)의 (iii)에 의해 $s = 1$, 곧 $z \in \mathbb{T}$이다. [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (1)에 의해 $\overline{z} = z^{-1}$이므로, 거듭제곱의 (1)에 의해 $z^{n+1} = z^n z = z^{-1}z = 1$이고 $z \in \mu_{n+1}$이다.

거꾸로 $z \in \mu_{n+1}$이라 하자. [[roots-of-unity|1 의 n제곱근]]의 (2)에 의해 $\mu_{n+1} \subseteq \mathbb{T}$이므로 $z \ne 0$이고 원 𝕋 의 매개화의 (1)에 의해 $\overline{z} = z^{-1}$이다. $z^n z = z^{n+1} = 1$의 양변에 $z^{-1}$을 곱하면 $z^n = z^{-1} = \overline{z}$이다.

**(2)** 1 의 n제곱근의 (1)에 의해 $\mu_{n+1}$은 원소가 $n + 1$개인 유한집합이다. 거듭제곱의 (3)의 (i)에 의해 $0^{n+1} = 0 \ne 1$이므로 $0 \notin \mu_{n+1}$이다. [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\mu_{n+1} \cup \{0\}$은 원소가 $n + 2$개이고, (1)에 의해 이것이 해 전체의 집합이다.

**(3)** 켤레의 (4)에 의해 $z = \overline{z}$인 것은 정확히 $z$가 실수인 복소수일 때이다. [[complex-field|복소수체]]의 (2)에 의해 $\iota$는 단사이므로 $\iota(0)$, $\iota(1)$, $\iota(2)$, $\iota(3)$은 서로 다른 네 해이고, 해는 $3$개보다 많다.

(1)에서 $n \ge 2$가 쓰인 곳은 $s^{n-1} = 1$에서 $s = 1$을 이끈 단계이다. $n = 1$이면 $s^{0} = 1$은 모든 $s$에서 성립하므로 $|z| = 1$이 나오지 않는다.
:::

:::exercise[$z^n = w^n$이지만 $z \ne w$인 예]
$\mu_n$과 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이다.

1. $\omega_3^3 = 1^3$이지만 $\omega_3 \ne 1$임을 보여라. 따라서 "$z^3 = w^3$이면 $z = w$"는 성립하지 않는다.
2. 자연수 $n$과 복소수 $w$에 대하여, 복소수 $z$가 $z^n = w^n$을 만족하는 것은 정확히 어떤 $u \in \mu_n$에 대하여 $z = wu$일 때임을 보여라.
3. $z^2 = w^2$인 것은 정확히 $z = w$이거나 $z = -w$일 때임을 보여라.
:::

:::solution
아래에서 "1 의 n제곱근"은 [[roots-of-unity|1 의 n제곱근]], "n제곱근"은 [[nth-roots-of-complex-numbers|복소수의 n제곱근]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이다.

**(1)** 1 의 n제곱근의 (1)에 의해 $\omega_3 \in \mu_3$이므로 $\omega_3^3 = 1$이고, 거듭제곱의 (3)의 (i)에 의해 $1^3 = 1$이다. 같은 (1)을 $n = 3$, $j = 0$, $k = 1$에 쓰면 $0 \le 0 < 1 \le 2$이므로 $\exp(2\pi i \cdot 0/3) \ne \exp(2\pi i \cdot 1/3)$이고, [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 왼쪽은 $1$, 오른쪽은 $\omega_3$이다.

**(2)** $w = 0$이면 거듭제곱의 (3)의 (i)에 의해 $w^n = 0$이고, n제곱근의 (2)에 의해 $z^n = 0$인 것은 정확히 $z = 0$일 때이다. 한편 $1 \in \mu_n$이고 모든 $u$에서 $0u = 0$이므로, "어떤 $u \in \mu_n$에 대하여 $z = 0u$"인 것도 정확히 $z = 0$일 때이다.

$w \ne 0$이면 거듭제곱의 (2)에 의해 $w^n \ne 0$이다. n제곱근의 (5)를 $0$이 아닌 복소수 $w^n$과 그 $n$제곱근 $z_0 = w$에 쓰면, $w^n$의 $n$제곱근 전체의 집합은 $\{wu : u \in \mu_n\}$이다. 곧 $z^n = w^n$인 것은 정확히 어떤 $u \in \mu_n$에 대하여 $z = wu$일 때이다.

**(3)** 1 의 n제곱근의 (5)에 의해 $\mu_2 = \{1, -1\}$이므로, (2)를 $n = 2$에 쓰면 $z^2 = w^2$인 것은 정확히 $z = w \cdot 1 = w$이거나 $z = w(-1) = -w$일 때이다.
:::
