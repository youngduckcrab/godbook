---
title: 복소 지수함수의 예
title_en: Examples of the Complex Exponential
aliases: [지수함수를 다른 중심에서 전개하기, exponential at another center]
kind: proposition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수 a 를 중심으로 한 복소 지수함수의 전개 exp(z) = Σ exp(a)(z − a)ⁿ/n!, 양수 a 에서 exp(z + ln a) = a·exp(z), 자연수 n 에서 exp(z/n)ⁿ = exp(z), 그리고 |exp(z)| ≥ 1 + Re z 를 덧셈 법칙과 실수 지수함수의 성질로 보인다.
requires: [natural-logarithm, exponential-function, laws-of-exponential-function, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-exponential-function, addition-law-of-complex-exponential]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.1절 The complex exponential, Proposition 11.4.1 뒤 문단 (p.164); 11.4.2절, Proposition 11.4.2 의 증명 (p.165); 11.4.4절 Exercise 11.4.4 (p.168); 11.5절, 대수학의 기본정리의 증명 뒤 문단 (p.170)
    checked: original
    note: "(1)은 출처 p.164 가 덧셈 법칙의 'yet more complicated consequence' 로 적는 중심 a 의 전개 e^z = e^a e^{z−a} = Σ_{k=0}^∞ (e^a/k!)(z − a)^k 와 같은 등식이고 같은 방법(덧셈 법칙과 정의의 급수)으로 보인다. 이 항목은 그 복소 멱급수가 모든 복소수에서 수렴하는 복소 멱급수라는 것을 덧붙인다. 반례 'z = i 에서 |exp(z)| 와 exp(|z|) 가 다른 예'의 |exp(i)| = 1 은 출처 p.165(Proposition 11.4.2 의 증명)의 'e^{ix} is unimodular for real x' 의 x = 1 인 경우이다. 출처 p.170 은 'The exponential e^z is an analytic function on ℂ with no zeros' 라고 적는다. 확인 질문 '복소수 $w$가 $\\exp(w) = -1$을 만족하면, (3)으로 얻는 수 가운데 제곱이 $-1$인 것은 무엇이고 그 값은 무엇일 수 있는가?'가 가정하는 그런 w 가 있다는 것은 출처 Exercise 11.4.4(p.168)가 보이게 하는 전사성의 w = −1 인 경우이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(연속 증명 통독, 예 (2)–(4)에 경계값, 보조정리 n = 0). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 복소 급수의 합은 [[complex-series|복소 급수]], 복소 멱급수와 모든 복소수에서 수렴하는 복소 멱급수는 [[complex-power-series|복소 멱급수]]의 것이다. 복소 지수함수 $\exp$는 [[complex-exponential-function]]의 것이고, 실수의 지수함수는 [[exponential-function]], 양의 실수 전체의 집합 $\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이다.

아래에서 $z$, $a$는 복소수이다.

1. (다른 중심에서의 전개) 중심이 $a$이고 계수가 $\bigl(\exp(a) / n!\bigr)_{n \ge 0}$인 복소 멱급수는 모든 복소수에서 수렴하는 복소 멱급수이고, 모든 복소수 $z$에서
   $$
   \exp(z) = \sum_{n=0}^{\infty} \frac{\exp(a)}{n!} (z - a)^n
   $$
   이다.
2. (양수의 자연로그) $r \in \mathbb{R}_{>0}$이면 $\exp(\ln r) = r$, 곧 $\exp(\iota(\ln r)) = \iota(r)$이고, 모든 복소수 $z$에서 $\exp(z + \ln r) = r \exp(z)$이다.
3. (거듭제곱이 되는 값) 자연수 $n$에서 $\exp(z / n)^n = \exp(z)$이다. 여기서 $z / n$은 $z\,\iota(n)^{-1}$이다.
4. (절댓값의 아래 어림) $1 + \operatorname{Re} z \le |\exp(z)|$이고, 등호는 정확히 $\operatorname{Re} z = 0$일 때 성립한다.
:::

:::english
Complex numbers, $\operatorname{Re}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; moduli and powers are those of their entries. Sums of complex series are those of the entry on complex series, and complex power series and complex power series converging at every complex number are those of the entry on complex power series. The complex exponential function $\exp$ is that of its entry; the real exponential function is that of its entry, and the set $\mathbb{R}_{>0}$ of positive reals and the natural logarithm $\ln$ are those of the entry on the natural logarithm.

Below, $z$ and $a$ are complex numbers.

1. (Expansion at another center) The complex power series with center $a$ and coefficients $\bigl(\exp(a) / n!\bigr)_{n \ge 0}$ converges at every complex number, and for every complex number $z$,
   $$
   \exp(z) = \sum_{n=0}^{\infty} \frac{\exp(a)}{n!} (z - a)^n.
   $$
2. (Natural logarithms of positive numbers) If $r \in \mathbb{R}_{>0}$, then $\exp(\ln r) = r$, that is, $\exp(\iota(\ln r)) = \iota(r)$, and $\exp(z + \ln r) = r \exp(z)$ for every complex number $z$.
3. (Values that are powers) For every natural number $n$, $\exp(z / n)^n = \exp(z)$, where $z / n$ means $z\,\iota(n)^{-1}$.
4. (Lower bound for the modulus) $1 + \operatorname{Re} z \le |\exp(z)|$, with equality exactly when $\operatorname{Re} z = 0$.
:::

## 직관

네 성질은 모두 [[addition-law-of-complex-exponential|덧셈 법칙]]을 한 번씩 쓴 것입니다. (1)은 $z$를 $a + (z - a)$로 나누어 $\exp(z) = \exp(a)\exp(z - a)$로 쓰고, 뒤의 인수를 급수로 펼친 것입니다. 중심을 어디에 두어도 지수함수는 같은 꼴의 급수로 쓰이고, 계수에 상수 $\exp(a)$가 곱해질 뿐입니다.

(2)와 (3)은 덧셈 법칙을 곱셈의 말로 읽은 것입니다. $\ln r$을 더하는 것은 $\exp$의 값에 $r$을 곱하는 것이고, $z$를 $n$등분한 $z / n$에서의 값을 $n$번 곱하면 $z$에서의 값이 됩니다. 케이크를 $n$조각으로 나눈 한 조각을 $n$번 모으면 케이크 하나가 되는 것과 같은데, 덧셈 쪽에서 나눈 것이 곱셈 쪽에서는 거듭제곱근이 된다는 점이 비유와 다릅니다.

(4)는 [[laws-of-exponential-function|지수함수의 성질]]의 실수의 어림 $1 + x \le \exp(x)$를 $|\exp(z)| = \exp(\operatorname{Re} z)$에 옮긴 것입니다. 허수부는 아무 값이어도 되므로, 등호는 $z$가 순허수이거나 $0$일 때, 곧 $\operatorname{Re} z = 0$일 때입니다.

## 증명

:::idea
모두 덧셈 법칙에서 나온다. (1)은 $\exp(z) = \exp(a)\exp(z - a)$와 복소 급수의 선형성, (2)는 정의의 실수 일치, (3)은 덧셈 법칙의 정수배, (4)는 $|\exp(z)| = \exp(\operatorname{Re} z)$와 실수의 어림이다.
:::

:::hint
(1)에서 모든 복소수에서 수렴하는 복소 멱급수라는 것은, 모든 점에서 수렴한다는 것으로부터 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (3)의 뒷부분으로 얻습니다.
:::

:::proof
"덧셈 법칙의 (1)"은 [[addition-law-of-complex-exponential]], "정의의 (2)"는 [[complex-exponential-function]], "복소수체의 (2)"는 [[complex-field]], "복소 급수의 (5)"는 [[complex-series]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 괄호를 옮기는 곳은 체의 조건에 의한다.

**1의 증명.** 복소수 $z$를 잡자. 정의에 의해 $(z - a)^n / n!$의 급수($n \ge 0$)는 수렴하고 그 합은 $\exp(z - a)$이다. 복소 급수의 (5)의 상수배에 의해 $\exp(a) \cdot (z - a)^n / n!$의 급수도 수렴하고 그 합은 $\exp(a)\exp(z - a)$이다. $a + (z - a) = z$이므로 덧셈 법칙의 (1)에 의해 이것은 $\exp(z)$이다. 한편 $\exp(a) \cdot (z - a)^n / n! = \bigl(\exp(a) / n!\bigr)(z - a)^n$이므로, 이 급수는 중심이 $a$이고 계수가 $\bigl(\exp(a) / n!\bigr)_{n \ge 0}$인 복소 멱급수의 $z$에서의 항의 급수이다. 따라서 이 복소 멱급수는 모든 복소수에서 수렴하고 그 합은 $\exp(z)$이다. [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (3)의 뒷부분에 의해 집합 $A$는 위로 유계가 아니므로, [[complex-power-series|복소 멱급수]]의 정의에 의해 이것은 모든 복소수에서 수렴하는 복소 멱급수이다.

**2의 증명.** 정의의 (2)와 [[exponential-function]]의 (1)의 $\exp(\ln r) = r$에 의해 $\exp(\iota(\ln r)) = \iota(\exp(\ln r)) = \iota(r)$이다. 덧셈 법칙의 (1)에 의해 $\exp(z + \ln r) = \exp(z)\exp(\iota(\ln r)) = \iota(r)\exp(z)$이다.

**3의 증명.** 자연수 $n$은 $0$이 아니므로 복소수체의 (2)의 (i)에 의해 $\iota(n) \ne 0$이고, $\iota(n)(z / n) = \iota(n)\iota(n)^{-1} z = z$이다. 덧셈 법칙의 (3)을 복소수 $z / n$과 정수 $n$에 쓰면 $\exp(z) = \exp(\iota(n)(z / n)) = \exp(z / n)^n$이다.

**4의 증명.** 덧셈 법칙의 (6)에 의해 $|\exp(z)| = \exp(\operatorname{Re} z)$이다. [[laws-of-exponential-function|지수함수의 성질]]의 (4)를 실수 $x = \operatorname{Re} z$에 쓰면 $1 + \operatorname{Re} z \le \exp(\operatorname{Re} z)$이고, 등호는 정확히 $\operatorname{Re} z = 0$일 때 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[a = i 를 중심으로 한 전개]
(1)을 $a = i$에 쓰면 모든 복소수 $z$에서 $\exp(z) = \sum_{n=0}^{\infty} \frac{\exp(i)}{n!} (z - i)^n$입니다. $z = 0$을 넣으면 오른쪽은 $\exp(i) \sum_{n=0}^{\infty} (-i)^n / n! = \exp(i)\exp(-i)$이고, [[addition-law-of-complex-exponential|덧셈 법칙]]의 (2)에 의해 이것은 $1 = \exp(0)$이어서 왼쪽과 맞습니다.
:::

:::example[exp(z + ln 2) 의 절댓값]
(2)를 $r = 2$에 쓰면 $\exp(5i + \ln 2) = 2\exp(5i)$이고, [[addition-law-of-complex-exponential|덧셈 법칙]]의 (5)에 의해 $|\exp(5i)| = 1$이므로 $|\exp(\ln 2 + 5i)| = 2$입니다. 같은 항목의 (6)으로 보아도 $\exp(\ln 2) = 2$입니다.
:::

:::counterexample[z = i 에서 |exp(z)| 와 exp(|z|) 가 다른 예]
[[complex-exponential-function|복소 지수함수]]의 (1)의 부등식 $|\exp(z)| \le \exp(|z|)$는 등호가 아닐 수 있습니다. $z = i$이면 [[addition-law-of-complex-exponential|덧셈 법칙]]의 (5)에 의해 $|\exp(i)| = 1$이고, $|i| = 1$이므로 오른쪽은 $\exp(1)$이며 [[laws-of-exponential-function|지수함수의 성질]]의 (4)에 의해 $2 < \exp(1)$입니다. 한편 (4)의 등호 $1 + \operatorname{Re} i = 1 = |\exp(i)|$는 성립합니다. $z$가 $0$ 이상인 실수를 옮긴 것이면 $|\exp(z)| = \exp(|z|)$입니다.
:::

## 확인 질문

:::check[$a = 0$이면 (1)은 무엇을 말하는가?]
[[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\exp(0) = 1$이므로 계수는 $1 / n!$이고, (1)은 복소 지수함수의 정의 $\exp(z) = \sum_{n=0}^{\infty} z^n / n!$ 자신입니다.
:::

:::check[복소수 $w$가 $\exp(w) = -1$을 만족하면, (3)으로 얻는 수 가운데 제곱이 $-1$인 것은 무엇이고 그 값은 무엇일 수 있는가?]
(3)을 $n = 2$에 쓰면 $\exp(w / 2)^2 = \exp(w) = -1$입니다. [[complex-field|복소수체]]의 (5)에 의해 제곱이 $-1$인 복소수는 $i$와 $-i$뿐이므로 $\exp(w / 2)$는 $i$이거나 $-i$입니다.
:::
