---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 18 (b) (p.57) — 문제 '(1 + i)ⁿ 의 전개와 계수 사이의 등식'의 (3)의 마지막 계산과 같은 계산(출처는 (1 − i)⁶ 을 계산하게 한다)"
added: 2026-11-26
---

:::exercise[(1 + i)ⁿ 의 전개와 계수 사이의 등식]
$0$ 이상인 정수 $n$과 $0 \le k \le n$인 정수 $k$에서 $b_{n,k} = \dfrac{n!}{k!\,(n - k)!}$로 둔다(실수이다).

1. $\operatorname{Re}\bigl((1 + i)^n\bigr) = \sum_{k=0}^{n} b_{n,k} \operatorname{Re}(i^k)$이고 $\operatorname{Im}\bigl((1 + i)^n\bigr) = \sum_{k=0}^{n} b_{n,k} \operatorname{Im}(i^k)$임을 보여라.
2. $0$ 이상인 정수 $m$과 $n = 4m$에서 $\sum_{k=0}^{n} b_{n,k} \operatorname{Re}(i^k) = (-4)^m$이고 $\sum_{k=0}^{n} b_{n,k} \operatorname{Im}(i^k) = 0$임을 보여라.
3. $n = 6$에서 (1)의 두 합을 직접 계산해 $(1 + i)^6$을 구하고, $(1 + i)^6 = (1 + i)^4 (1 + i)^2$로 구한 값과 맞는지 확인하라. 또 $(1 - i)^6$을 구하라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산은 [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$가 체라는 것([[ring|환]]과 [[field|가역원과 체]]의 정의)으로 하고, 실수는 복소수체의 (3)의 약속대로 읽는다. "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]], "유한 합"은 [[complex-finite-sum|복소수의 유한 합]]의 번호이다.

**(1)** [[factorial-form-of-binomial-expansion|계승 꼴의 이항 전개]]의 (2)를 $z = i$, $w = 1$에 쓰면, 거듭제곱의 (3)의 (i)의 $1^{n-k} = 1$과 덧셈의 교환법칙에 의해
$$
(1 + i)^n = \sum_{k=0}^{n} \iota(b_{n,k})\, i^k
$$
이다. 유한 합의 (8)에 의해 (1)이 $0$부터의 합에도 성립하므로 이 합의 실수부는 각 항의 실수부의 합이고 허수부도 같다. 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re}\bigl(\iota(b_{n,k})\, i^k\bigr) = b_{n,k} \operatorname{Re}(i^k)$이고 $\operatorname{Im}\bigl(\iota(b_{n,k})\, i^k\bigr) = b_{n,k} \operatorname{Im}(i^k)$이므로 두 등식이 성립한다.

**(2)** [[complex-arithmetic-examples|복소수 계산의 예]]의 (2)에 의해 $(1 + i)^{4m} = (-4)^m$이고, 거듭제곱의 (5)에 의해 오른쪽은 실수 $(-4)^m$을 옮긴 $\iota\bigl((-4)^m\bigr)$이다. 복소수체의 (2)의 (ii)에 의해 그 실수부는 $(-4)^m$, 허수부는 $0$이므로 (1)에 의해 두 등식이 성립한다. 예컨대 $m = 1$이면 $b_{4,k}$는 $k = 0, \dots, 4$에서 $1, 4, 6, 4, 1$이고, 거듭제곱의 (6)의 표로 $1 - 6 + 1 = -4$, $4 - 4 = 0$이다.

**(3)** [[factorial-from-zero|0부터의 계승]]의 (1)을 되풀이해 $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$이다. 따라서 $b_{6,0} = 720/720 = 1$, $b_{6,1} = 720/120 = 6$, $b_{6,2} = 720/(2 \cdot 24) = 15$, $b_{6,3} = 720/(6 \cdot 6) = 20$이고, $k = 4, 5, 6$은 $k$와 $6 - k$를 바꾼 것이라 $15, 6, 1$이다. 거듭제곱의 (6)의 표에서 $\operatorname{Re}(i^k)$와 $\operatorname{Im}(i^k)$를 읽으면 다음과 같다.

| $k$ | $b_{6,k}$ | $\operatorname{Re}(i^k)$ | $\operatorname{Im}(i^k)$ |
|---|---|---|---|
| $0$ | $1$ | $1$ | $0$ |
| $1$ | $6$ | $0$ | $1$ |
| $2$ | $15$ | $-1$ | $0$ |
| $3$ | $20$ | $0$ | $-1$ |
| $4$ | $15$ | $1$ | $0$ |
| $5$ | $6$ | $0$ | $1$ |
| $6$ | $1$ | $-1$ | $0$ |

(1)의 두 합은 $1 - 15 + 15 - 1 = 0$과 $6 - 20 + 6 = -8$이므로 $(1 + i)^6 = 0 + (-8)i = -8i$이다. 한편 복소수 계산의 예의 (2)에 의해 $(1 + i)^2 = 2i$, $(1 + i)^4 = -4$이고, 거듭제곱의 (3)의 (i)에 의해 $(1 + i)^6 = (1 + i)^4 (1 + i)^2 = (-4)(2i) = -8i$로 같다.

[[complex-conjugate|켤레복소수]]의 (1)에 의해 $1 - i = \overline{1 + i}$이므로, 거듭제곱의 (4)에 의해 $(1 - i)^6 = \overline{(1 + i)^6} = \overline{-8i} = 8i$이다.
:::

:::exercise[지수함수의 값의 절댓값]
1. 모든 복소수 $z$에서 $|\exp(iz)| = \exp(-\operatorname{Im} z)$임을 보이고, $|\exp(iz)| \le 1$인 것은 정확히 $0 \le \operatorname{Im} z$일 때임을 보여라.
2. $|\exp(z)| = \exp(|z|)$인 것은 정확히 $0 \le x$인 실수 $x$가 있어 $z = \iota(x)$일 때임을 보여라. (오른쪽의 $\exp$는 실수의 지수함수이다.)
:::

:::solution
아래에서 "덧셈 법칙"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]], "실수의 지수함수"는 [[exponential-function|지수함수]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다.

**(1)** 곱셈의 교환법칙과 [[complex-number|복소수]]의 (4)에 의해 $\operatorname{Re}(iz) = \operatorname{Re}(zi) = -\operatorname{Im} z$이다. 덧셈 법칙의 (6)에 의해 $|\exp(iz)| = \exp(\operatorname{Re}(iz)) = \exp(-\operatorname{Im} z)$이다. 실수의 지수함수의 (1)에 의해 $\exp(0) = 1$이므로, 같은 항목의 (2)에 의해 $\exp(-\operatorname{Im} z) \le 1$인 것은 정확히 $-\operatorname{Im} z \le 0$일 때이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (iii)에 의해 이것은 정확히 $0 \le \operatorname{Im} z$일 때이다.

**(2)** 덧셈 법칙의 (6)에 의해 $|\exp(z)| = \exp(\operatorname{Re} z)$이다. 실수의 지수함수의 (2)에 의해 $\exp$는 순증가이므로, [[real-order-axioms|실수의 순서]]의 (W1)에 의해 $\exp(\operatorname{Re} z) = \exp(|z|)$인 것은 정확히 $\operatorname{Re} z = |z|$일 때이다($\operatorname{Re} z < |z|$이거나 $|z| < \operatorname{Re} z$이면 두 값의 대소가 같은 방향으로 갈린다).

$\operatorname{Re} z = |z|$라 하자. 절댓값의 (1)에 의해 $0 \le |z| = \operatorname{Re} z$이고 $|z|^2 = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$이므로, 양변에서 $(\operatorname{Re} z)^2 = |z|^2$을 빼면 $(\operatorname{Im} z)^2 = 0$이고 [[real-number-arithmetic|실수의 계산 법칙]]의 (K10)에 의해 $\operatorname{Im} z = 0$이다. [[complex-field|복소수체]]의 (2)의 (iii)에 의해 $z = \iota(x)$, $x = \operatorname{Re} z \ge 0$이다.

거꾸로 $z = \iota(x)$이고 $0 \le x$이면 복소수체의 (2)의 (ii)에 의해 $\operatorname{Re} z = x$이고, 절댓값의 (5)와 [[absolute-value|실수의 절댓값]]의 (1)에 의해 $|z| = |x| = x = \operatorname{Re} z$이다. 따라서 $|\exp(z)| = \exp(|z|)$이다.
:::

:::exercise[exp(z) − 1 − z 의 어림]
$z$를 복소수라 하자.

1. $|\exp(z) - 1 - z| \le \exp(|z|) - 1 - |z|$임을 보여라.
2. $|z| \le 1$이면 $|\exp(z) - 1 - z| \le \bigl(\exp(1) - 2\bigr)\,|z|^2 \le |z|^2$임을 보여라.
:::

:::solution
아래에서 "복소 급수"는 [[complex-series|복소 급수]], "절대수렴"은 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]], "0부터의 합"은 [[series-indexed-from-zero|0부터 번호가 붙은 수열의 합]], "급수의 합"은 [[sum-of-a-series|급수의 합의 기호]], "실수의 거듭제곱"은 [[power-of-a-real-number|실수의 거듭제곱]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. $0$ 이상인 정수 $n$에서 $t_n = z^n / n!$로 둔다.

**(1)** [[complex-exponential-function|복소 지수함수]]의 정의와 (1)에 의해 $\exp(z) = \sum_{n=0}^{\infty} t_n$이고, $(t_n)_{n \ge 0}$의 급수는 절대수렴하며 $\sum_{n=0}^{\infty} |t_n| = \exp(|z|)$이다. [[factorial-from-zero|0부터의 계승]]의 (1)과 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)에 의해 $t_0 = 1$, $t_1 = z$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|t_0| = 1$이다.

- 복소 급수의 (4)를 $m = 0$, $K = 1$에 쓰면 $n \ge 2$에서 정해진 항 $t_n$의 급수는 수렴하고, [[complex-finite-sum|복소수의 유한 합]]의 (8)에 의해 $\sum_{n=0}^{1} t_n = t_0 + t_1 = 1 + z$이므로
  $$
  \exp(z) - 1 - z = \sum_{n=2}^{\infty} t_n
  $$
  이다. 절대수렴의 (2)를 꼬리 $K = 1$에 쓰면 $\bigl|\sum_{n=2}^{\infty} t_n\bigr| \le \sum_{n=2}^{\infty} |t_n|$이다.
- 0부터의 합의 (8)을 $K = 1$과 실수 항 $|t_n|$에 쓰면 $\exp(|z|) = |t_0| + |t_1| + \sum_{n=2}^{\infty} |t_n| = 1 + |z| + \sum_{n=2}^{\infty} |t_n|$이다.

두 줄을 합치면 $|\exp(z) - 1 - z| \le \sum_{n=2}^{\infty} |t_n| = \exp(|z|) - 1 - |z|$이다.

**(2)** $|z| \le 1$이라 하자. $n \ge 2$에서 실수의 거듭제곱의 (2)의 (i)에 의해 $|z|^n = |z|^2\,|z|^{n-2}$이고, $0 \le |z| \le 1$이므로 실수의 거듭제곱의 (6)의 (ii)와 (2)의 (iv)에 의해 $|z|^{n-2} \le 1$이다. 순서 성질의 (4)의 (iii)을 $0 \le |z|^2$에 쓰면 $|z|^n \le |z|^2$이다. 복소수의 절댓값의 (3), (4), (5)와 복소수의 거듭제곱의 (4)에 의해 $|t_n| = |z|^n (n!)^{-1}$이고, 0부터의 계승의 (3)과 순서 성질의 (6)의 (i)에 의해 $0 < (n!)^{-1}$이므로 순서 성질의 (4)의 (iii)에 의해 $|t_n| \le |z|^2 (n!)^{-1}$이다.

[[exponential-power-series|지수함수의 멱급수]]의 (1)을 $x = 1$에 쓰면 실수의 거듭제곱의 (2)의 (iv)의 $1^n = 1$에 의해 $\exp(1) = \sum_{n=0}^{\infty} (n!)^{-1}$이고, 0부터의 합의 (8)을 $K = 1$에 쓰면 $\sum_{n=2}^{\infty} (n!)^{-1} = \exp(1) - 2$이다. 모든 항이 $0$인 실수 항의 급수는 수렴하고 합이 $0$이므로(급수의 합의 (6)의 (i)을 $a = 0$, $r = 0$에 쓴다) 급수의 합의 (3)을 $c = |z|^2$에 쓰면 $\sum_{n=2}^{\infty} |z|^2 (n!)^{-1} = |z|^2(\exp(1) - 2)$이다. 급수의 합의 (4)의 (i)에 의해 $\sum_{n=2}^{\infty} |t_n| \le |z|^2(\exp(1) - 2)$이고, (1)의 첫 부등식과 합치면 왼쪽 부등식을 얻는다.

[[real-power|양수의 실수 거듭제곱]]의 정의와 (8)에 의해 $\exp(1) = e < 3$이므로 $\exp(1) - 2 < 1$이고, 순서 성질의 (4)의 (iii)을 $0 \le |z|^2$에 쓰면 $(\exp(1) - 2)\,|z|^2 \le |z|^2$이다.
:::

:::exercise[n(exp(z/n) − 1) 의 극한]
1. 모든 복소수 $z$에서, $n$번째 항이 $n\bigl(\exp(z/n) - 1\bigr)$인 복소수열이 $z$로 수렴함을 보여라. ($n$은 $\iota(n)$, $z/n$은 $z\,\iota(n)^{-1}$이다.)
2. 실수 $x$에서 $n$번째 항이 $n\bigl(\exp(x/n) - 1\bigr)$인 실수열이 $x$로 수렴함을 보여라. (여기서 $\exp$는 실수의 지수함수이다.)
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 문제 3의 (2)를 쓴다. $w_n = n\bigl(\exp(z/n) - 1\bigr)$로 둔다.

**(1)** [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $|z| < N$인 자연수 $N$이 있다. $n \ge N$인 자연수 $n$을 잡자. 순서 성질의 (10)에 의해 $0 < n^{-1}$이고, 절댓값의 (3), (4), (5)에 의해 $|z/n| = |z|\,n^{-1}$이다. $|z| < N \le n$이므로 순서 성질의 (1)의 (v)와 (6)의 (iv)에 의해 $|z|\,n^{-1} < n\,n^{-1} = 1$이다. 따라서 문제 3의 (2)를 $z/n$에 쓸 수 있다.

체의 계산으로 $\iota(n)(z/n) = z$이므로 분배법칙에 의해 $w_n - z = \iota(n)\bigl(\exp(z/n) - 1 - z/n\bigr)$이다. 절댓값의 (3), (5)와 문제 3의 (2)에 의해
$$
\begin{aligned}
|w_n - z| &= n\,\bigl|\exp(z/n) - 1 - z/n\bigr| \\
&\le n\,(\exp(1) - 2)\,|z|^2 (n^{-1})^2 \\
&= (\exp(1) - 2)\,|z|^2\, n^{-1}
\end{aligned}
$$
이다(순서 성질의 (4)의 (iii)을 $0 < n$에 쓴다). $n$번째 항이 $(\exp(1) - 2)\,|z|^2 n^{-1}$인 실수열은 [[basic-limits|기본적인 극한]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $0$으로 수렴한다. [[absolute-value|실수의 절댓값]]의 (2), (1)에 의해 $\bigl|\,|w_n - z| - 0\,\bigr| = |w_n - z|$이므로, [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)을 $K = N$, $L = 0$에 쓰면 $n$번째 항이 $|w_n - z|$인 실수열은 $0$으로 수렴한다. [[convergence-of-complex-sequences|복소수열의 수렴]]의 (1)에 의해 $(w_n)$은 $z$로 수렴한다.

**(2)** (1)을 $z = \iota(x)$에 쓴다. [[complex-field|복소수체]]의 (2)의 (i)에 의해 $\iota(x)/n = \iota(x/n)$이고, [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $\exp(\iota(x/n)) = \iota(\exp(x/n))$이므로, 다시 복소수체의 (2)에 의해 $w_n = \iota\bigl(n(\exp(x/n) - 1)\bigr)$이다. (1)에 의해 $(w_n)$은 $\iota(x)$로 수렴하므로, [[limit-laws-for-complex-sequences|복소수열의 극한 법칙]]의 (6)의 (i)에 의해 $n$번째 항이 $n(\exp(x/n) - 1)$인 실수열은 $x$로 수렴한다.
:::

:::exercise[부등식 |1 + z| ≤ |exp(z)| 가 깨지는 두 점]
실수 $x$에서 $1 + x \le \exp(x)$이다([[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (4)). 이것을 복소수로 옮긴 꼴 $|1 + z| \le |\exp(z)|$를 생각한다.

1. $z = i$에서 이 부등식이 성립하지 않음을 보여라.
2. $z = -3$, 곧 $z = \iota(-3)$에서도 성립하지 않음을 보여라.
3. $-1 \le x$인 실수 $x$에서는 $z = \iota(x)$에서 이 부등식이 성립함을 보여라.
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "실수의 지수함수"는 [[exponential-function|지수함수]]의 번호이다.

**(1)** 절댓값의 정의에 의해 $|1 + i| = \sqrt{1^2 + 1^2} = \sqrt{2}$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)를 $y = 1$에 쓰면 $|\exp(i)| = 1$이다. $1 < 2$이므로 [[square-root-exists|제곱근]]의 (2)에 의해 $\sqrt{1} < \sqrt{2}$이고, 같은 항목의 (2)의 $\sqrt{1 \cdot 1} = 1$에 의해 $1 < \sqrt{2}$이다. 곧 $|\exp(i)| < |1 + i|$이다.

**(2)** [[complex-field|복소수체]]의 (2)에 의해 $1 + \iota(-3) = \iota(-2)$이고, 절댓값의 (5)와 [[absolute-value|실수의 절댓값]]의 (1)에 의해 $|1 + z| = |-2| = 2$이다. [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $\exp(\iota(-3)) = \iota(\exp(-3))$이고, 실수의 지수함수의 (1)에 의해 $0 < \exp(-3)$이므로 같은 이유로 $|\exp(z)| = \exp(-3)$이다. $-3 < 0$이므로 실수의 지수함수의 (2), (1)에 의해 $\exp(-3) < \exp(0) = 1 < 2$이다. 곧 $|\exp(z)| < |1 + z|$이다.

**(3)** $-1 \le x$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (2)의 (i)에 의해 $0 \le 1 + x$이다. (2)와 같은 이유로 $|1 + \iota(x)| = |\iota(1 + x)| = 1 + x$이고 $|\exp(\iota(x))| = \exp(x)$이므로, 지수함수의 덧셈 법칙의 (4)에 의해 $|1 + \iota(x)| = 1 + x \le \exp(x) = |\exp(\iota(x))|$이다.

(1)에서는 허수부 때문에 $|1 + i| = \sqrt{2}$가 $1 + \operatorname{Re} i = 1$보다 크고, (2)에서는 $1 + (-3) < 0$이라 $|1 + z| = 2$가 $1 + \operatorname{Re} z = -2$보다 크다. 왼쪽을 $1 + \operatorname{Re} z$로 바꾼 부등식은 [[complex-exponential-examples|복소 지수함수의 예]]의 (4)에 의해 모든 복소수에서 성립한다.
:::
