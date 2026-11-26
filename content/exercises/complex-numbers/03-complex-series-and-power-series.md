---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "2.5.7절 Exercises, Exercise 2.5.9 a) (p.98) — 문제 '절대수렴하는 급수와 유계인 수열의 곱'의 (2)와 같은 결론의 실수판(출처는 두 실수 급수가 절대수렴하면 항끼리 곱한 급수도 절대수렴함을 보이게 한다)"
  - ref: lebl-basic-analysis
    loc: "2.6.6절 Exercises, Exercise 2.6.7 (p.111) — 문제 '계수가 iⁿ + (−i)ⁿ 인 복소 멱급수'와 같은 발상(출처는 x/(4 − x²) 을 0 에서 멱급수로 전개하고 수렴 반지름을 구하게 한다. 이 문제는 2/(1 + zz) 를 두 등비급수의 합으로 얻는다)"
  - ref: lebl-basic-analysis-2
    loc: "11.3.6소절 Exercises, Exercise 11.3.2 b) (p.161) — 문제 '계수가 iⁿ + (−i)ⁿ 인 복소 멱급수'와 같은 대상(출처는 1/(1 + x²) 의 원점에서의 멱급수의 수렴 반지름이 1 임을 보이게 한다. 이 문제의 멱급수의 합은 그 함수의 2배인 2/(1 + zz) 이다)"
added: 2026-11-26
---

:::exercise[공비가 (z − 1)/(z + 1)인 등비급수]
$z$를 $z \ne -1$인 복소수라 하고 $q = \dfrac{z - 1}{z + 1}$로 둔다.

1. $n$에서의 값이 $q^n$인 0부터 번호가 붙은 복소수열의 급수가 수렴하는 것은 정확히 $0 < \operatorname{Re} z$일 때임을 보여라.
2. 그때 $\displaystyle \sum_{n=0}^{\infty} q^n = \frac{z + 1}{2}$임을 보여라.
3. $z = 1 + i$에서 $q$와 합을 구하라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산은 [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$가 체라는 것([[ring|환]]과 [[field|가역원과 체]]의 정의, [[ring-basic-properties|환의 기본 성질]])으로 하고, 실수는 복소수체의 (3)의 약속대로 읽는다. "절대수렴"은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** 절대수렴의 (6)의 (iii)을 $a = 1$에 쓰면, 급수가 수렴하는 것은 정확히 $|q| < 1$일 때이다. $z + 1 \ne 0$이므로 절댓값의 (1)에 의해 $0 < |z + 1|$이고, 절댓값의 (4)에 의해 $|q| = |z - 1|\,|z + 1|^{-1}$이다. 순서 성질의 (6)의 (iv)를 $c = |z + 1|$에 쓰면 $|q| < 1$인 것은 정확히 $|z - 1| < |z + 1|$일 때이고, 두 수가 $0$ 이상이므로 순서 성질의 (7)의 (i), (iii)에 의해 이것은 정확히 $|z - 1|^2 < |z + 1|^2$일 때이다.

[[complex-conjugate|켤레복소수]]의 (4)에 의해 $\overline{1} = 1$이므로 $\operatorname{Re}(z\overline{1}) = \operatorname{Re} z$이고, 절댓값의 (5)에 의해 $|1| = 1$이다. [[complex-triangle-inequality|복소수의 삼각부등식]]의 (1)을 $w = 1$에 쓰면
$$
\begin{aligned}
|z + 1|^2 &= |z|^2 + 1 + 2\operatorname{Re} z, \\
|z - 1|^2 &= |z|^2 + 1 - 2\operatorname{Re} z
\end{aligned}
$$
이다. 순서 성질의 (2)의 (ii)에 의해 $|z - 1|^2 < |z + 1|^2$인 것은 정확히 $-2\operatorname{Re} z < 2\operatorname{Re} z$일 때이고, 같은 성질로 양변에 $2\operatorname{Re} z$를 더하면 정확히 $0 < 4\operatorname{Re} z$일 때이며, 순서 성질의 (6)의 (iv)를 $c = 4^{-1}$에 쓰면 정확히 $0 < \operatorname{Re} z$일 때이다.

**(2)** $0 < \operatorname{Re} z$이면 (1)에서 $|q| < 1$이므로 절대수렴의 (6)의 (i)에 의해 $\sum_{n=0}^{\infty} q^n = (1 - q)^{-1}$이다. 분배법칙에 의해
$$
\begin{aligned}
1 - q &= \bigl((z + 1) - (z - 1)\bigr)(z + 1)^{-1} \\
&= 2\,(z + 1)^{-1}
\end{aligned}
$$
이므로 가역원과 체의 (1)의 $(ab)^{-1} = b^{-1}a^{-1}$에 의해 $(1 - q)^{-1} = (z + 1)\,2^{-1} = \frac{z + 1}{2}$이다.

**(3)** $z = 1 + i$이면 복소수체의 (4)에 의해 $\operatorname{Re} z = 1 > 0$이고, 합은 (2)에 의해 $\frac{2 + i}{2} = 1 + \frac{1}{2} i$이다. 또 $q = i\,(2 + i)^{-1}$이고, 복소수체의 (1)의 역원의 식에 의해 $(2 + i)^{-1} = \frac{2}{5} - \frac{1}{5} i$이므로 [[complex-number|복소수]]의 곱셈과 $ii = -1$에 의해 $q = \frac{1}{5} + \frac{2}{5} i$이다. 절댓값의 정의로 $|q| = \sqrt{\tfrac{1}{25} + \tfrac{4}{25}} = \sqrt{\tfrac{1}{5}}$이고, $\tfrac{1}{5} < 1$이므로 [[square-root-exists|제곱근]]의 (2)에 의해 $|q| < 1$이어서 (1)과 맞는다.
:::

:::exercise[절대수렴하는 급수와 유계인 수열의 곱]
$(z_n)$, $(w_n)$을 복소수열이라 하자.

1. $(z_n)$의 급수가 절대수렴하고, 모든 자연수 $n$에서 $|w_n| \le B$인 실수 $B$가 있다고 하자. $n$번째 항이 $z_n w_n$인 복소수열의 급수는 절대수렴하고
   $$
   \Bigl| \sum_{n=1}^{\infty} z_n w_n \Bigr| \le B \sum_{n=1}^{\infty} |z_n|
   $$
   임을 보여라.
2. $(z_n)$의 급수와 $(w_n)$의 급수가 둘 다 절대수렴하면 $n$번째 항이 $z_n w_n$인 복소수열의 급수도 절대수렴함을 보여라.
:::

:::solution
아래에서 "절대수렴"은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]], "급수의 합"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다.

**(1)** [[modulus-of-complex-number|복소수의 절댓값]]의 (3)에 의해 $|z_n w_n| = |z_n|\,|w_n|$이다. 같은 항목의 (1)에 의해 $0 \le |z_n|$이므로, $|w_n| \le B$에 [[order-properties-of-reals|실수의 순서의 성질]]의 (4)의 (iii)을 쓰면 $|z_n w_n| \le B\,|z_n|$이다.

모든 항이 $0$인 실수열의 급수는 수렴하고 합이 $0$이다. 급수의 합의 (6)의 (i)을 $a = 0$, $r = 0$에 쓰면 되기 때문이다([[real-number-arithmetic|실수의 계산 법칙]]의 (K9)에 의해 $0 \cdot 0^{n-1} = 0$). 가정에 의해 $n$번째 항이 $|z_n|$인 실수열의 급수는 수렴하므로, 급수의 합의 (3)을 $c = B$와 모든 항이 $0$인 수열에 쓰면 $n$번째 항이 $B\,|z_n|$인 실수열의 급수는 수렴하고 그 합은 $B \sum_{n=1}^{\infty} |z_n|$이다. 절대수렴의 (3)(비교 판정법)을 $m = 1$에 쓰면, 항이 $z_n w_n$인 급수는 절대수렴하고
$$
\begin{aligned}
\Bigl| \sum_{n=1}^{\infty} z_n w_n \Bigr| &\le \sum_{n=1}^{\infty} |z_n w_n| \\
&\le \sum_{n=1}^{\infty} B\,|z_n| = B \sum_{n=1}^{\infty} |z_n|
\end{aligned}
$$
이다.

**(2)** 절대수렴의 (2)에 의해 $(w_n)$의 급수는 수렴하고, [[complex-series|복소 급수]]의 (7)에 의해 $(w_n)$은 $0$으로 수렴한다. [[convergence-of-complex-sequences|복소수열의 수렴]]의 (4)에 의해 수렴하는 복소수열 $(w_n)$은 유계이고, 같은 (4)에 의해 모든 자연수 $n$에서 $|w_n| \le B$인 실수 $B$가 있다. (1)에 의해 주장이 성립한다.
:::

:::exercise[계수가 iⁿ + (−i)ⁿ 인 복소 멱급수]
$0$ 이상인 정수 $n$에서 $c_n = i^n + (-i)^n$으로 두고, 중심이 $0$이고 계수가 $(c_n)_{n \ge 0}$인 [[complex-power-series|복소 멱급수]]를 생각한다.

1. $c_n = 2\operatorname{Re}(i^n)$임을 보이고, $n = 4k + r$($k$, $r$은 정수, $0 \le r < 4$)일 때 $c_n$의 값을 $r$에 따라 구하라.
2. $|z| < 1$이면 이 복소 멱급수는 $z$에서 수렴하고 그 합이 $\dfrac{2}{1 + zz}$임을 보여라.
3. $|z| = 1$인 모든 $z$에서 이 복소 멱급수가 발산함을 보이고, 수렴 반지름이 $1$이며 수렴하는 복소수 전체의 집합이 $B(0, 1)$임을 보여라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산과 실수를 복소수 자리에 쓰는 약속은 문제 1의 풀이 첫머리와 같다. "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]], "켤레"는 [[complex-conjugate|켤레복소수]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "반지름"은 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 번호이다.

**(1)** 켤레의 (1)에 의해 $\overline{i} = \overline{0 + 1i} = 0 - 1i = -i$이므로, 거듭제곱의 (4)에 의해 $(-i)^n = (\overline{i})^n = \overline{i^n}$이다. 켤레의 (3)에 의해 $c_n = i^n + \overline{i^n} = 2\operatorname{Re}(i^n)$이다. 거듭제곱의 (6)의 표에 의해 $\operatorname{Re}(i^n)$은 $r = 0, 1, 2, 3$에서 $1, 0, -1, 0$이므로 $c_n$은 각각 $2, 0, -2, 0$이다. 특히 모든 $n$에서 $|c_n| \le 2$이고, 모든 자연수 $k$에서 $c_{4k} = 2$이다.

**(2)** $|z| < 1$이라 하자. 거듭제곱의 (3)의 (i)에 의해 $i^n z^n = (iz)^n$이고 $(-i)^n z^n = (-iz)^n$이므로, 분배법칙에 의해 $z$에서의 항은 $c_n z^n = (iz)^n + (-iz)^n$이다. 절댓값의 (3), (5), (2)에 의해 $|iz| = |-iz| = |z| < 1$이므로, [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)에 의해 두 등비급수는 수렴하고 합은 $(1 - iz)^{-1}$, $(1 + iz)^{-1}$이다. 여기서 $1 - iz \ne 0$이고 $1 + iz \ne 0$이다. $1 - iz = 0$이면 $iz = 1$이고 절댓값의 (5)에 의해 $|iz| = 1$이 되어 $|iz| < 1$에 어긋나며, $1 + iz$도 같다. [[complex-series|복소 급수]]의 (5)를 $c = 1$에 쓰면 $z$에서 복소 멱급수는 수렴하고
$$
\sum_{n=0}^{\infty} c_n z^n = (1 - iz)^{-1} + (1 + iz)^{-1}
$$
이다. 분배법칙과 $ii = -1$([[complex-field|복소수체]]의 (5))에 의해 $(1 - iz) + (1 + iz) = 2$이고 $(1 - iz)(1 + iz) = 1 - (ii)(zz) = 1 + zz$이다. 체에서 $0$이 아닌 $p$, $q$에 대하여 $p^{-1} + q^{-1} = (q + p)(pq)^{-1}$이므로(양변에 $pq$를 곱해 비교한다, 가역원과 체의 (1)) 합은 $2\,(1 + zz)^{-1}$이다. 특히 $1 + zz \ne 0$이다.

**(3)** $|z| = 1$이라 하고 $t_n = c_n z^n$으로 둔다. 거듭제곱의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $|z^n| = 1^n = 1$이므로, (1)과 절댓값의 (3)에 의해 모든 자연수 $k$에서 $|t_{4k}| = 2$이다. 복소 멱급수가 $z$에서 수렴한다고 하자. 복소 급수의 (7)에 의해 $(t_n)_{n \ge 0}$은 $0$으로 수렴하고, [[convergence-of-complex-sequences|복소수열의 수렴]]의 (6)의 (ii)를 $\varepsilon = 1$에 쓰면 $0$ 이상인 정수 $M$이 있어 $n \ge M$인 모든 $n$에서 $|t_n| < 1$이다. $n = 4(M + 1)$은 $M$ 이상이므로 $2 = |t_n| < 1$이 되어 어긋난다. 따라서 $|z| = 1$인 모든 $z$에서 복소 멱급수는 발산한다.

수렴 반지름: $0 \le r \le 1$이면 실수의 거듭제곱의 (6)의 (ii)와 (2)의 (iv)에 의해 $0 \le r^n \le 1$이고, (1)의 $|c_n| \le 2$와 [[order-properties-of-reals|실수의 순서의 성질]]의 (11)의 (i)에 의해 $|c_n|\, r^n \le 2$이다. 따라서 $(|c_n|\, r^n)_{n \ge 0}$은 유계이고, 복소 멱급수의 집합 $A$의 정의에 의해 $r \in A$이다. 특히 $1 \in A$이다. 한편 위에서 본 것처럼 복소 멱급수는 $z_1 = 1$에서 발산하므로, 반지름의 (5)의 (ii)에 의해 $A$는 위로 유계이고 $\rho \le |1 - 0| = 1$이다. $\rho = \sup A$는 $A$의 상계이고 $1 \in A$이므로 $1 \le \rho$이다. 따라서 실수의 순서의 성질의 (1)의 (ii)에 의해 $\rho = 1$이다.

수렴하는 점의 집합 $E$: 반지름의 (7)의 (iii)에 의해 $B(0, 1) \subseteq E \subseteq C(0, 1)$이다. $z \in C(0, 1)$이고 $z \notin B(0, 1)$이면 $|z| \le 1$이고 $|z| < 1$이 아니므로 $|z| = 1$이고, 위에서 보인 대로 $z \notin E$이다. 따라서 $E = B(0, 1)$이다.
:::

:::exercise[실수 계수의 복소 멱급수와 켤레]
$a_0$을 실수, $(e_n)_{n \ge 0}$을 0부터 번호가 붙은 실수열이라 하고, 중심이 $a = \iota(a_0)$이고 계수가 $c_n = \iota(e_n)$인 복소 멱급수를 생각한다.

1. 이 복소 멱급수가 $z$에서 수렴하면 $\overline{z}$에서도 수렴하고
   $$
   \sum_{n=0}^{\infty} c_n (\overline{z} - a)^n = \overline{\sum_{n=0}^{\infty} c_n (z - a)^n}
   $$
   임을 보여라.
2. 이 복소 멱급수가 $z$에서 수렴하는 것은 정확히 $\overline{z}$에서 수렴할 때임을 보여라.
3. [[complex-series-examples|복소 급수의 예]]의 (6)의 복소 멱급수(중심 $0$, 계수 $i\,(1/2)^n$)에서는 $z = 0$에서 (1)의 등식이 성립하지 않음을 보여라.
:::

:::solution
아래에서 "켤레"는 [[complex-conjugate|켤레복소수]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이다.

**(1)** 켤레의 (4)에 의해 실수인 복소수 $a$와 $c_n$은 $\overline{a} = a$, $\overline{c_n} = c_n$이다. 켤레의 (2)(곱과 차)와 거듭제곱의 (4)에 의해 $0$ 이상인 모든 정수 $n$에서
$$
\begin{aligned}
\overline{c_n (z - a)^n} &= \overline{c_n}\;\bigl(\overline{z - a}\bigr)^n \\
&= c_n (\overline{z} - \overline{a})^n \\
&= c_n (\overline{z} - a)^n
\end{aligned}
$$
이다. 곧 $\overline{z}$에서의 항은 $z$에서의 항의 켤레로 이루어진 0부터 번호가 붙은 복소수열이다. [[complex-series|복소 급수]]의 (6)을 $m = 0$, $t_n = c_n (z - a)^n$에 쓰면, $z$에서의 항의 급수가 수렴하므로 $\overline{z}$에서의 항의 급수도 수렴하고 그 합은 $z$에서의 합의 켤레이다.

**(2)** (1)에 의해 $z$에서 수렴하면 $\overline{z}$에서 수렴한다. 거꾸로 $\overline{z}$에서 수렴하면 (1)을 $\overline{z}$에 쓰고 켤레의 (1)의 $\overline{\overline{z}} = z$를 쓰면 $z$에서 수렴한다.

**(3)** 그 복소 멱급수의 계수는 $c_0 = i\,(1/2)^0 = i$이다. [[complex-power-series|복소 멱급수]]의 (2)에 의해 중심 $0$에서 수렴하고 합은 $c_0 = i$이다. $\overline{0} = 0$이므로 (1)의 왼쪽은 $i$이고 오른쪽은 $\overline{i} = -i$이다. [[complex-number|복소수]]의 (1)에 의해 허수부 $1$과 $-1$이 달라 $i \ne -i$이므로 등식이 성립하지 않는다. 이 계수는 실수인 복소수가 아니어서($\operatorname{Im} c_0 = 1$) (1)의 가정을 만족하지 않는다.
:::

:::exercise[수렴하는 두 급수의 항끼리의 곱이 발산하는 예]
$x_n = (-1)^n n^{-1/2}$이라 하고, $z_n = w_n = \iota(x_n)\, i$인 복소수열 $(z_n)$, $(w_n)$을 생각한다.

1. $(z_n)$의 급수는 수렴하지만 절대수렴하지 않음을 보여라.
2. $(w_n)$은 유계임을 보여라.
3. $n$번째 항이 $z_n w_n$인 복소수열의 급수는 발산함을 보여라. 따라서 문제 2의 (1)에서 "$(z_n)$의 급수가 절대수렴한다"를 "$(z_n)$의 급수가 수렴한다"로 바꾸면 결론이 성립하지 않을 수 있다.
:::

:::solution
아래에서 "조건수렴의 예"는 [[conditional-convergence-examples|조건수렴하는 급수의 예]], "복소 급수"는 [[complex-series|복소 급수]]의 번호이다.

**(1)** [[complex-field|복소수체]]의 (2)의 (ii)와 (4)에 의해 $z_n = 0 + x_n i$이므로 $\operatorname{Re} z_n = 0$, $\operatorname{Im} z_n = x_n$이다. 모든 항이 $0$인 실수열의 급수는 수렴한다([[sum-of-a-series|급수의 합의 기호]]의 (6)의 (i)을 $a = 0$, $r = 0$에 쓴다). 조건수렴의 예의 (1)의 (i)을 $p = 1/2$에 쓰면 $0 < 1/2$이므로 $(x_n)$의 급수는 수렴한다. 복소 급수의 (2)에 의해 $(z_n)$의 급수는 수렴한다. 한편 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z_n| = |x_n|\,|i| = |x_n|$이고, 조건수렴의 예의 (1)의 (ii)에 의해 $1 < 1/2$가 아니므로 $(x_n)$의 급수는 절대수렴하지 않는다. 곧 $n$번째 항이 $|z_n|$인 실수열의 급수는 발산하고, [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 정의에 의해 $(z_n)$의 급수는 절대수렴하지 않는다.

**(2)** (1)에 의해 $(w_n) = (z_n)$의 급수는 수렴하므로 복소 급수의 (7)에 의해 $(w_n)$은 $0$으로 수렴하고, [[convergence-of-complex-sequences|복소수열의 수렴]]의 (4)에 의해 유계이다.

**(3)** 복소수체의 (2)와 (5)에 의해 $z_n w_n = \iota(x_n)\iota(x_n)\,(ii) = -\iota(x_n^2)$이다. 이 급수가 수렴한다면 복소 급수의 (5)를 $c = -1$에 써서 $n$번째 항이 $\iota(x_n^2)$인 복소수열의 급수가 수렴하고, 복소 급수의 (3)에 의해 $n$번째 항이 $x_n^2$인 실수열의 급수가 수렴해야 한다. 그런데 조건수렴의 예의 (4)의 (i)에 의해 그 급수는 발산한다. 따라서 $n$번째 항이 $z_n w_n$인 복소수열의 급수는 발산한다.

(1), (2)에 의해 $(z_n)$의 급수는 수렴하고 $(w_n)$은 유계이므로, 문제 2의 (1)의 가정에서 "절대수렴"만 "수렴"으로 바꾼 조건이 성립한다. 그런데 (3)에 의해 결론의 "급수가 절대수렴한다"는 물론 "급수가 수렴한다"도 성립하지 않는다.
:::
