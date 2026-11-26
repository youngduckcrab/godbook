---
title: 극형식의 계산 예
title_en: Computations with the Polar Form
aliases: [극형식 계산, 드무아브르 공식의 계산 예, polar form examples]
kind: proposition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: (1 − √3 i)⁶ = 64 이다. (1 + √3 i)/(1 − √3 i) = −1/2 + (√3/2)i 이다. −4 의 네제곱근은 정확히 1 + i, −1 + i, −1 − i, 1 − i 이다. 원시 12제곱근은 정확히 ±√3/2 ± i/2 의 네 수이다. exp(z) = −i 인 것은 정확히 z 가 (3π/2 + 2πk)i (k 는 정수) 일 때이다.
requires: [real-number-arithmetic, order-properties-of-reals, square-root-exists, power-of-a-real-number, nth-root, greatest-common-divisor, euler-phi-function, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, natural-logarithm, definition-of-pi, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates, polar-form, de-moivre-formula, roots-of-unity, nth-roots-of-complex-numbers, complex-exponential-is-onto]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "4.2절 Multiplicative Group of Complex Numbers, Example 4.19, Example 4.21 (p.51), Example 4.23 (p.52), Example 4.26 (p.53); 4.5절 Exercises, 연습문제 3(m), 16, 17, 18, 20, 21 (p.56–57); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 3 (p.222); 18.2절 Factorization in Integral Domains, Example 18.10 (p.229)"
    checked: original
    note: "출처의 Example 4.19(p.51)는 극형식과 a + bi 꼴을 서로 바꾸고, Example 4.21(p.51)은 3 cis(π/3)·2 cis(π/6) = 6i 를, Example 4.23(p.52)은 (1 + i)^{10} = 32i 를 극형식으로 구한다. 연습문제 16–18(p.56–57)은 같은 종류의 바꾸기와 거듭제곱 계산이다. (1)은 연습문제 18 의 (b)(1 − i)⁶, (c)(√3 + i)⁵ 와 같은 종류의 계산이고, (2)의 몫은 Example 4.21 과 같은 종류의 계산이며 그 값 −1/2 + (√3/2)i 는 17.6절 연습문제 3(p.222)이 1 의 세제곱근이라고 증명하게 하는 ω 이다. (4)의 원시 12제곱근은 Example 4.26(p.53)이 원시 8제곱근을 적는 것과, 연습문제 20, 21(p.57)이 6제곱근과 5제곱근의 원시근을 묻는 것과 같은 종류이다. (1)과 (2)의 1 ± √3 i 는 18.2절 Factorization in Integral Domains 의 Example 18.10(p.229)이 Z[√3 i] 에서 4 = (1 − √3 i)(1 + √3 i) 로 쓰는 두 수이다. (3)의 근 1 + i 와 1 − i 는 Example 4.23 과 연습문제 17(a), 18(a)(b)가 쓰는 수이다. 확인 질문 '$(1 + \\sqrt{3}\\,i)^{-3}$은 무엇인가?'의 수를 2 로 나눈 (1 + √3 i)/2 는 연습문제 3(m)(p.56)이 C∗ 에서 생성하는 부분군을 묻는 수이고, 그 부분군의 원소가 이 수의 정수 거듭제곱이다."
  - ref: lebl-basic-analysis-2
    loc: 11.4.4절 Exercises, Exercise 11.4.4 (p.168)
    checked: original
    note: "(5)는 출처의 Exercise 11.4.4(p.168)가 묻는 e^z = w 의 해를 w = −i 에서 적은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계산 예 (1 − √3i)⁶, 몫, −4 의 네제곱근, 원시 12제곱근의 수를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 제곱근 $\sqrt{a}$는 [[square-root-exists]], 원주율 $\pi$는 [[definition-of-pi|원주율]], 편각과 $\arg z$는 [[polar-form|극형식과 편각]], 원시 $n$제곱근과 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이다.

다음이 성립한다.

1. (거듭제곱) $|1 - \sqrt{3}\,i| = 2$이고 $-\pi / 3 \in \arg(1 - \sqrt{3}\,i)$이다. 따라서 $(1 - \sqrt{3}\,i)^6 = 64$이다.
2. (몫) $\pi / 3 \in \arg(1 + \sqrt{3}\,i)$이고
   $$
   \begin{aligned}
   \frac{1 + \sqrt{3}\,i}{1 - \sqrt{3}\,i} &= \exp(2\pi i / 3) \\
   &= -\frac{1}{2} + \frac{\sqrt{3}}{2}\, i
   \end{aligned}
   $$
   이다.
3. ($-4$의 네제곱근) $z^4 = -4$인 복소수 $z$는 정확히 $1 + i$, $-1 + i$, $-1 - i$, $1 - i$이다.
4. (원시 $12$제곱근) 원시 $12$제곱근은 정확히 $\omega_{12}$, $\omega_{12}^5$, $\omega_{12}^7$, $\omega_{12}^{11}$이고, 차례로
   $$
   \begin{aligned}
   &\tfrac{\sqrt{3}}{2} + \tfrac{1}{2} i, \quad -\tfrac{\sqrt{3}}{2} + \tfrac{1}{2} i, \\
   &-\tfrac{\sqrt{3}}{2} - \tfrac{1}{2} i, \quad \tfrac{\sqrt{3}}{2} - \tfrac{1}{2} i
   \end{aligned}
   $$
   이다.
5. ($\exp(z) = -i$) $\exp(z) = -i$인 복소수 $z$는 정확히 $(3\pi / 2 + 2\pi k)\, i$($k$는 정수)이다. 특히 $-\pi i / 2$는 그런 수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$, the operations of the field $\mathbb{C}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the modulus, powers, and the complex exponential function are those of their entries. Square roots $\sqrt{a}$, the number $\pi$, arguments and $\arg z$, and primitive $n$th roots of unity and $\omega_n$ are those of the entries on square roots, on π, on polar form, and on roots of unity.

The following hold.

1. (A power) $|1 - \sqrt{3}\,i| = 2$ and $-\pi / 3 \in \arg(1 - \sqrt{3}\,i)$. Hence $(1 - \sqrt{3}\,i)^6 = 64$.
2. (A quotient) $\pi / 3 \in \arg(1 + \sqrt{3}\,i)$ and
   $$
   \begin{aligned}
   \frac{1 + \sqrt{3}\,i}{1 - \sqrt{3}\,i} &= \exp(2\pi i / 3) \\
   &= -\frac{1}{2} + \frac{\sqrt{3}}{2}\, i.
   \end{aligned}
   $$
3. (Fourth roots of $-4$) The complex numbers $z$ with $z^4 = -4$ are exactly $1 + i$, $-1 + i$, $-1 - i$, $1 - i$.
4. (Primitive $12$th roots of unity) The primitive $12$th roots of unity are exactly $\omega_{12}$, $\omega_{12}^5$, $\omega_{12}^7$, $\omega_{12}^{11}$, which are, in this order,
   $$
   \begin{aligned}
   &\tfrac{\sqrt{3}}{2} + \tfrac{1}{2} i, \quad -\tfrac{\sqrt{3}}{2} + \tfrac{1}{2} i, \\
   &-\tfrac{\sqrt{3}}{2} - \tfrac{1}{2} i, \quad \tfrac{\sqrt{3}}{2} - \tfrac{1}{2} i.
   \end{aligned}
   $$
5. ($\exp(z) = -i$) $\exp(z) = -i$ if and only if $z = (3\pi / 2 + 2\pi k)\, i$ for some integer $k$. In particular $-\pi i / 2$ is such a number.
:::

## 직관

극형식은 곱셈, 나눗셈, 거듭제곱, 거듭제곱근을 절댓값의 계산과 편각의 계산으로 나눕니다. 절댓값은 실수끼리 곱하고 나누고 거듭제곱하면 되고, 편각은 더하고 빼고 정수배하면 됩니다. 이 항목의 다섯 계산은 모두 이 한 가지 생각을 쓰고, 마지막에 편각에서 실수부와 허수부로 돌아갈 때만 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 $\pi / 6$, $\pi / 4$, $\pi / 3$에서의 값을 씁니다.

장부를 금액과 통화로 나눠 적는 것에 비유할 수 있습니다. 곱할 때 금액끼리 곱하고 표시는 따로 더하는 식으로 두 칸을 따로 계산하면 편합니다. 비유가 맞지 않는 곳은 편각 칸이 $2\pi$를 더하거나 빼도 같은 수를 나타낸다는 것입니다. 그래서 (1)에서 편각의 $6$배 $-2\pi$는 편각 $0$과 같은 수를 나타냅니다.

(3)과 (4)는 거듭제곱근의 개수를 확인하는 예이기도 합니다. $-4$의 네제곱근이 넷이라는 것은 [[nth-roots-of-complex-numbers|복소수의 n제곱근]]의 (1)이고, 원시 $12$제곱근이 넷이라는 것은 $\varphi(12) = 4$와 [[roots-of-unity|1 의 n제곱근]]의 (4)가 맞는다는 것입니다.

## 증명

:::idea
각 수의 절댓값과 편각 하나를 [[polar-form|극형식과 편각]]의 (4)로 정하고, 드무아브르 공식, 극형식의 (5), n제곱근 항목, 1 의 n제곱근 항목, 복소 지수함수의 상 항목에 넣은 뒤, 편각에서 실수부와 허수부를 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]으로 읽는다.
:::

:::hint
$\cos(-\pi / 3)$과 $\sin(-\pi / 3)$은 [[cosine-and-sine|코사인과 사인]]의 (3)으로 $\pi / 3$에서의 값에서 얻습니다.
:::

:::hint
$\gcd(k, 12) = 1$인 $1 \le k \le 12$는 $2$로도 $3$으로도 나누어지지 않는 $k$입니다.
:::

:::proof
"극형식의 (4)"처럼 쓴 것은 [[polar-form]], "드무아브르의 (3)"은 [[de-moivre-formula]], "값의 (2)"는 [[trigonometric-values-and-pi-estimates]], "주기성의 (2)"는 [[periodicity-of-trigonometric-functions]], "코사인과 사인의 (3)"은 [[cosine-and-sine]]의 번호이다. [[square-root-exists]]의 (1)에 의해 $\sqrt{3}\sqrt{3} = 3$, $\sqrt{4} = 2$이고, $\sqrt{2}\sqrt{2} = 2$이다. 값의 (2)에 의해 $\cos(\pi / 3) = 1/2$, $\sin(\pi / 3) = \sqrt{3}/2$, $\cos(\pi / 6) = \sqrt{3}/2$, $\sin(\pi / 6) = 1/2$이다.

**1의 증명.** $|1 - \sqrt{3}\,i| = \sqrt{1 + 3} = 2$이고, 실수부와 허수부를 $2$로 나누면 $1/2$과 $-\sqrt{3}/2$이다. 코사인과 사인의 (3)에 의해 $\cos(-\pi / 3) = 1/2$, $\sin(-\pi / 3) = -\sqrt{3}/2$이므로 극형식의 (4)에 의해 $-\pi / 3 \in \arg(1 - \sqrt{3}\,i)$이다. 드무아브르의 (3)에 의해 $(1 - \sqrt{3}\,i)^6 = 2^6\exp(i \cdot 6 \cdot (-\pi / 3)) = 64\exp(-2\pi i)$이고, 주기성의 (2)에서 $x = 0$, $k = -1$로 두면 $\exp(-2\pi i) = \exp(0) = 1$이다.

**2의 증명.** $|1 + \sqrt{3}\,i| = 2$이고 실수부와 허수부를 $2$로 나누면 $1/2$과 $\sqrt{3}/2$이므로 극형식의 (4)에 의해 $\pi / 3 \in \arg(1 + \sqrt{3}\,i)$이다. 극형식의 (5)의 몫을 (1)과 함께 쓰면 절댓값의 몫은 $2/2 = 1$이고
$$
\begin{aligned}
\frac{1 + \sqrt{3}\,i}{1 - \sqrt{3}\,i} &= \exp\bigl(i(\pi / 3 - (-\pi / 3))\bigr) \\
&= \exp(2\pi i / 3)
\end{aligned}
$$
이다. $2\pi / 3 = \pi / 6 + \pi / 2$이므로 주기성의 (2)에 의해 $\cos(2\pi / 3) = -\sin(\pi / 6) = -1/2$, $\sin(2\pi / 3) = \cos(\pi / 6) = \sqrt{3}/2$이고, [[cosine-and-sine|코사인과 사인]]의 (1)에 의해 마지막 등식이 나온다.

**3의 증명.** $|-4| = 4$이고 극형식의 (6)에 의해 $\pi \in \arg(-4)$이다. $(\sqrt{2})^4 = (\sqrt{2}\sqrt{2})^2 = 4$이고 $0 \le \sqrt{2}$이므로 [[nth-root|n제곱근]]의 (1)에 의해 $\sqrt[4]{4} = \sqrt{2}$이다. [[nth-roots-of-complex-numbers|복소수의 n제곱근]]의 (1)에 의해 $z^4 = -4$인 $z$는 정확히 $z_k = \sqrt{2}\exp\bigl(i(\pi + 2\pi k)/4\bigr)$, $k = 0, 1, 2, 3$이다. 값의 (1)에 의해 $z_0 = \sqrt{2}\exp(i\pi / 4) = \sqrt{2}(\sqrt{2}/2)(1 + i) = 1 + i$이다. 같은 항목의 (5)에 의해 $z_k = z_0\,\omega_4^k$이고, [[roots-of-unity|1 의 n제곱근]]의 (2), (5)에 의해 $\omega_4 = i$, $\omega_4^2 = -1$, $\omega_4^3 = -i$이므로 $z_1 = (1 + i)i = -1 + i$, $z_2 = -1 - i$, $z_3 = (1 + i)(-i) = 1 - i$이다.

**4의 증명.** $1 \le k \le 12$에서 $\gcd(k, 12) = 1$인 것은 $k = 1, 5, 7, 11$이다. 짝수인 $k$는 $2$가 $k$와 $12$의 공약수이고, $k = 3, 9$는 $3$이 공약수이며, $k = 1, 5, 7, 11$의 양의 약수 가운데 $12$를 나누는 것은 $1$뿐이기 때문이다([[greatest-common-divisor|최대공약수]]의 정의). 1 의 n제곱근의 (4)에 의해 원시 $12$제곱근은 정확히 이 $k$의 $\omega_{12}^k$이고, 같은 항목의 (2)에 의해 $\omega_{12}^k = \exp(i\pi k / 6)$이다. 값의 (2)에 의해 $\exp(i\pi / 6) = \sqrt{3}/2 + i/2$이다. $5\pi / 6 = \pi / 3 + \pi / 2$, $7\pi / 6 = \pi / 6 + \pi$, $11\pi / 6 = 5\pi / 6 + \pi$이므로 주기성의 (2)에 의해
$$
\begin{aligned}
\cos(5\pi / 6) &= -\sin(\pi / 3) = -\tfrac{\sqrt{3}}{2}, \\
\sin(5\pi / 6) &= \cos(\pi / 3) = \tfrac{1}{2}
\end{aligned}
$$
이고, $7\pi / 6$과 $11\pi / 6$에서의 값은 $\pi / 6$과 $5\pi / 6$에서의 값의 부호를 바꾼 것이다. 이것이 적은 네 수이다. [[euler-phi-function|오일러 피 함수]]로 보면 $\varphi(12) = |\{1, 5, 7, 11\}| = 4$이다.

**5의 증명.** $|-i| = 1$이고 극형식의 (6)에 의해 $\arg(-i) = 3\pi / 2 + 2\pi\mathbb{Z}$이다. [[natural-logarithm]]의 (1)에 의해 $\ln 1 = 0$이므로 [[complex-exponential-is-onto|복소 지수함수의 상]]의 (2)에 의해 $\exp(z) = -i$인 것은 정확히 $z = 0 + (3\pi / 2 + 2\pi k) i$일 때이다. $k = -1$이면 $3\pi / 2 - 2\pi = -\pi / 2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[(1)을 곱셈으로 확인하기]
$(1 - \sqrt{3}\,i)^2 = 1 - 3 - 2\sqrt{3}\,i = -2 - 2\sqrt{3}\,i$이고, 여기에 한 번 더 곱하면 $(1 - \sqrt{3}\,i)^3 = (-2 - 2\sqrt{3}\,i)(1 - \sqrt{3}\,i) = -2 - 6 + (2\sqrt{3} - 2\sqrt{3}) i = -8$입니다. 따라서 $(1 - \sqrt{3}\,i)^6 = (-8)^2 = 64$이고, (1)과 같습니다. 극형식으로는 $(1 - \sqrt{3}\,i)^3 = 8\exp(-\pi i) = -8$입니다.
:::

:::counterexample[절댓값을 n 배하면 틀리는 예]
거듭제곱의 절댓값은 절댓값의 거듭제곱이고, 절댓값의 $n$배가 아닙니다. $z = 1 + \sqrt{3}\,i$, $n = 3$이면 [[de-moivre-formula|드무아브르 공식]]의 (3)에 의해 $z^3 = 2^3\exp(i\pi) = -8$이므로 $|z^3| = 8$이지만 $3|z| = 6$입니다. 편각 쪽은 반대로 $n$배가 맞습니다($3 \cdot \pi / 3 = \pi$). $n = 1$이면 두 값이 같습니다.
:::

## 확인 질문

:::check[$(1 + \sqrt{3}\,i)^{-3}$은 무엇인가?]
(2)의 증명처럼 $|1 + \sqrt{3}\,i| = 2$이고 $\pi / 3$이 편각이므로 [[de-moivre-formula|드무아브르 공식]]의 (3)에서 $n = -3$이면 $(1 + \sqrt{3}\,i)^{-3} = (2^3)^{-1}\exp(-\pi i) = -1/8$입니다.
:::

:::check[원시 $12$제곱근 네 개의 합은 무엇인가?]
(4)의 네 수를 더하면 실수부는 $\sqrt{3}/2 - \sqrt{3}/2 - \sqrt{3}/2 + \sqrt{3}/2 = 0$, 허수부는 $1/2 + 1/2 - 1/2 - 1/2 = 0$이므로 합은 $0$입니다.
:::
