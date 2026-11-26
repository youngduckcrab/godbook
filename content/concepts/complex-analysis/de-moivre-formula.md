---
title: 드무아브르 공식
title_en: De Moivre's Formula
aliases: [드무아브르 정리, 드 무아브르 공식, De Moivre's theorem, DeMoivre]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 실수 θ 와 정수 n 에서 exp(iθ)ⁿ = exp(inθ), 곧 (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ) 이다. 0 이 아닌 복소수 z 의 편각이 θ 이면 nθ 는 zⁿ 의 편각이고, n ≥ 0 이면 zⁿ = |z|ⁿ exp(inθ) 이다. 자연수 n 에서 zⁿ = w 인 것은 정확히 |z|ⁿ = |w| 이고 nθ − φ 가 2π 의 정수배일 때이다(φ 는 w 의 편각).
requires: [real-number-arithmetic, order-properties-of-reals, square-root-exists, power-of-a-real-number, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, definition-of-pi, trigonometric-addition-formulas, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates, polar-form]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, Theorem 4.22 (DeMoivre)와 그 증명 (p.51–52), Example 4.23 (p.52); 소절 The Circle Group and the Roots of Unity, Theorem 4.25 의 증명 (p.52); 4.5절 Exercises, 연습문제 18 (p.57); 23.1절 Field Automorphisms, Example 23.11 (p.296)
    checked: original
    note: "출처의 Theorem 4.22(p.51)는 0 이 아닌 z = r cis θ 와 n = 1, 2, … 에서 [r cis θ]ⁿ = rⁿ cis(nθ) 이고, 증명(p.51–52)은 n 에 대한 귀납법으로 rⁿ(cos nθ + i sin nθ)·r(cos θ + i sin θ) 를 전개해 덧셈정리로 묶는다. 이 항목은 귀납법 대신 복소 지수함수의 덧셈 법칙의 (3)(정수배)으로 (1)을 모든 정수 n 에 대해 얻고, (3)에서 극형식의 거듭제곱을 음의 정수까지 적는다. Example 4.23(p.52)은 (1 + i)^{10} = 32i 를 이 정리로 구하고, Theorem 4.25 의 증명(p.52)은 cis(2kπ/n)ⁿ = cis(2kπ) = 1 을, Example 23.11(p.296)은 x⁵ − 1 의 근을 이 정리로 얻는다. 연습문제 18(p.57)은 (1 − i)⁶, (√3 + i)⁵, (−2 + 2i)^{−5} 같은 거듭제곱을 계산하게 한다. 예시 '(−1 + √3 i)³ 의 계산'은 그 연습문제와 같은 종류의 계산이고, 그 수를 2 로 나눈 (−1 + i√3)/2 는 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations 의 연습문제 3(p.222)이 1 의 세제곱근이라고 증명하게 하는 ω 이다. 예시 'n = 3 에서 3배각 공식 다시 얻기'는 Theorem 4.22 의 증명과 같은 전개를 거꾸로 한 것이고, 21.3절 Geometric Constructions 의 Trisecting an Angle(p.274)이 덧셈정리로 cos 3θ = 4cos³θ − 3cos θ 를 얻는 것과 같은 결론이다. 확인 질문 '$\\exp(i\\pi / 4)^n = 1$인 정수 $n$은 어떤 것인가?'의 수 exp(iπ/4) 는 Example 4.26(p.53)의 원시 8제곱근 ω = √2/2 + (√2/2)i 이고, 4.5절 연습문제 3(l)(p.56)이 C∗ 에서 생성하는 부분군을 묻는 (1 + i)/√2 이다. 확인 질문 '$z = 2\\exp(i\\pi / 5)$이면 $z^{-2}$의 절댓값과 편각 하나는 무엇인가?'는 연습문제 18(a), (g)의 음의 지수와 같은 종류의 계산이다. 출처는 이름을 'DeMoivre' 로 적는다."
  - ref: lebl-basic-analysis-2
    loc: 11.4.1절 The complex exponential, Proposition 11.4.1 뒤 문단 (p.164); 11.4.3절 The unit circle and polar coordinates (p.167)
    checked: original
    note: "출처(p.167)는 'The law of exponents e^{a+b} = e^a e^b leads to a useful formula for powers and products of complex numbers in polar coordinates' 라고 적고 (re^{iθ})ⁿ = rⁿe^{inθ} 를 보인다. 그 자리에서는 지수 n 의 범위를 적지 않는다. 출처는 11.4.1절(p.164)에서 지수법칙과 (e^z)^{−1} = e^{−z} 로 '(e^z)ⁿ = e^{nz} for all n ∈ ℤ' 라고 적는데, z = iθ 에서 이것이 (1)이다. 이 항목의 (3)이 p.167 의 공식이고, 출처처럼 지수법칙(덧셈 법칙)에서 얻는다. 출처에 이 공식의 이름은 없다(출처 텍스트 전체 검색 'Moivre' 0건)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(드무아브르의 음의 지수 꼴에 경계값, 'Lebl 에 이름이 없다' 를 두 권 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 곱셈군 $\mathbb{C}^{\times}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 복소수의 거듭제곱(음의 정수 지수는 $\mathbb{C}^{\times}$에서의 거듭제곱)은 [[power-of-a-complex-number]], 실수의 거듭제곱은 [[power-of-a-real-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 코사인과 사인은 [[cosine-and-sine|코사인과 사인]], $2\pi\mathbb{Z}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]], 편각과 그 집합 $\arg z$는 [[polar-form|극형식과 편각]]의 것이다. 실수 $\theta$와 정수 $n$에 대하여 $n\theta$는 실수의 곱이고, $\exp(in\theta)$는 $\exp(i\,\iota(n\theta))$이다.

다음이 성립한다. 아래에서 $\theta$, $\varphi$는 실수이고 $n$은 정수이다.

1. (드무아브르 공식) $\exp(i\theta)^n = \exp(in\theta)$이다. 곧
   $$
   \begin{aligned}
   &(\cos\theta + i\sin\theta)^n \\
   &\qquad = \cos(n\theta) + i\sin(n\theta)
   \end{aligned}
   $$
   이다. 왼쪽은 $0$이 아닌 복소수 $\exp(i\theta)$의 거듭제곱이다. 따라서 $\exp(i\theta)^n = 1$인 것은 정확히 $n\theta \in 2\pi\mathbb{Z}$일 때이다.
2. (실수부와 허수부) $\operatorname{Re}\bigl((\cos\theta + i\sin\theta)^n\bigr) = \cos(n\theta)$이고 $\operatorname{Im}\bigl((\cos\theta + i\sin\theta)^n\bigr) = \sin(n\theta)$이다.
3. (극형식의 거듭제곱) $z$가 $0$이 아닌 복소수이고 $\theta \in \arg z$이며 $r = |z|$라 하자. $0 \le n$이면 $z^n = r^n \exp(in\theta)$이고, $n < 0$이면 $z^n = (r^{-n})^{-1} \exp(in\theta)$이다. 두 경우 모두 앞의 인수는 양의 실수이고 $n\theta \in \arg(z^n)$이다. 또 $0 \le n$이면 $\operatorname{Re}(z^n) = r^n\cos(n\theta)$이고 $\operatorname{Im}(z^n) = r^n\sin(n\theta)$이다.
4. (거듭제곱이 같을 조건) $z$, $w$가 $0$이 아닌 복소수이고 $\theta \in \arg z$, $\varphi \in \arg w$이며 $n$이 자연수라 하자. $z^n = w$인 것은 정확히 $|z|^n = |w|$이고 $n\theta - \varphi \in 2\pi\mathbb{Z}$일 때이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$, the operations of the field $\mathbb{C}$, the multiplicative group $\mathbb{C}^{\times}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the modulus, powers of complex numbers (a negative integer exponent being the power in $\mathbb{C}^{\times}$), powers of real numbers, and the complex exponential function are those of their entries. Cosine and sine are those of the entry on cosine and sine, $2\pi\mathbb{Z}$ is that of the entry on periodicity of the trigonometric functions, and arguments and the set $\arg z$ are those of the entry on polar form and argument. For a real number $\theta$ and an integer $n$, $n\theta$ is the product of real numbers, and $\exp(in\theta)$ means $\exp(i\,\iota(n\theta))$.

The following hold. Below, $\theta$, $\varphi$ are real numbers and $n$ is an integer.

1. (De Moivre's formula) $\exp(i\theta)^n = \exp(in\theta)$; that is,
   $$
   \begin{aligned}
   &(\cos\theta + i\sin\theta)^n \\
   &\qquad = \cos(n\theta) + i\sin(n\theta).
   \end{aligned}
   $$
   The left side is a power of the nonzero complex number $\exp(i\theta)$. Hence $\exp(i\theta)^n = 1$ if and only if $n\theta \in 2\pi\mathbb{Z}$.
2. (Real and imaginary parts) $\operatorname{Re}\bigl((\cos\theta + i\sin\theta)^n\bigr) = \cos(n\theta)$ and $\operatorname{Im}\bigl((\cos\theta + i\sin\theta)^n\bigr) = \sin(n\theta)$.
3. (Powers in polar form) Let $z$ be a nonzero complex number, $\theta \in \arg z$, and $r = |z|$. If $0 \le n$ then $z^n = r^n \exp(in\theta)$, and if $n < 0$ then $z^n = (r^{-n})^{-1} \exp(in\theta)$. In both cases the first factor is a positive real number and $n\theta \in \arg(z^n)$. Moreover, if $0 \le n$, then $\operatorname{Re}(z^n) = r^n\cos(n\theta)$ and $\operatorname{Im}(z^n) = r^n\sin(n\theta)$.
4. (When two powers agree) Let $z$, $w$ be nonzero complex numbers, $\theta \in \arg z$, $\varphi \in \arg w$, and let $n$ be a natural number. Then $z^n = w$ if and only if $|z|^n = |w|$ and $n\theta - \varphi \in 2\pi\mathbb{Z}$.
:::

## 직관

[[addition-law-of-complex-exponential|덧셈 법칙]]은 $\exp$가 합을 곱으로 바꾼다는 것입니다. 자연수 $n$에 대하여 같은 수 $i\theta$를 $n$번 더하면 $in\theta$이고, 같은 수 $\exp(i\theta)$를 $n$번 곱하면 $\exp(i\theta)^n$이므로 둘이 같다는 것이 (1)입니다. 이것을 [[cosine-and-sine|코사인과 사인]]의 오일러 공식 $\exp(i\theta) = \cos\theta + i\sin\theta$로 옮겨 적으면 드무아브르 공식이 됩니다. 곧 $\cos\theta + i\sin\theta$를 거듭제곱하는 일은 $\theta$에 $n$을 곱하는 일입니다.

거듭제곱의 횟수를 세는 대신 눈금을 곱하는 계산자에 비유할 수 있습니다. 계산자는 곱셈을 눈금의 덧셈으로 바꾸므로, 같은 수를 $n$번 곱하는 것은 눈금을 $n$배 하는 것입니다. 여기서 눈금에 해당하는 것이 $\theta$이고, 곱셈을 덧셈으로 바꾸는 장치가 덧셈 법칙입니다. 비유가 맞지 않는 곳은 같은 값을 주는 눈금이 여럿이라는 것입니다. $\theta$와 $\theta + 2\pi$는 같은 $\exp(i\theta)$를 주므로, (4)처럼 두 거듭제곱이 같은지 물을 때는 편각이 같은지가 아니라 차가 $2\pi$의 정수배인지를 봅니다.

$n = 0$이면 양쪽이 모두 $1$이고, $n = -1$이면 $\exp(i\theta)^{-1} = \exp(-i\theta)$, 곧 $\cos\theta - i\sin\theta$입니다. 이 항목의 공식은 이런 정수 $n$까지 한 번에 다룹니다.

## 증명

:::idea
덧셈 법칙의 (3)(모든 정수 $n$에서 $\exp(nz) = \exp(z)^n$)에 $z = i\theta$를 넣는다. 극형식의 거듭제곱은 두 인수의 거듭제곱의 곱으로 나누고, (4)는 극형식의 유일성이다.
:::

:::hint
$\iota(n)\,(i\,\iota(\theta))$를 $i\,\iota(n\theta)$로 바꾸는 데 [[complex-field]]의 (2)의 어느 성질을 씁니까?
:::

:::hint
$z^n = w$의 양쪽을 극형식으로 적으면 $r^n\exp(in\theta) = |w|\exp(i\varphi)$입니다. [[polar-form|극형식과 편각]]의 (3)을 보세요.
:::

:::proof
"덧셈 법칙의 (3)"처럼 쓴 것은 [[addition-law-of-complex-exponential]], "극형식의 (3)"은 [[polar-form]], "주기성의 (3)"은 [[periodicity-of-trigonometric-functions]], "코사인과 사인의 (1)"은 [[cosine-and-sine]], "복소수체의 (2)"는 [[complex-field]], "복소수의 거듭제곱의 (3)"은 [[power-of-a-complex-number]], "실수의 거듭제곱의 (6)"은 [[power-of-a-real-number]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 묶는 곳은 체의 조건에 의한다.

**1의 증명.** 덧셈 법칙의 (2)에 의해 $\exp(i\theta) \ne 0$이다. 정수 $n$은 실수이고([[real-number-arithmetic]]의 (K7)), 복소수체의 (2)에 의해 $\iota(n)\,\iota(\theta) = \iota(n\theta)$이므로 곱의 순서를 바꾸면
$$
\iota(n)\,\bigl(i\,\iota(\theta)\bigr) = i\,\iota(n\theta)
$$
이다. 덧셈 법칙의 (3)을 $z = i\theta$에 쓰면 $\exp(i\theta)^n = \exp\bigl(\iota(n)(i\theta)\bigr) = \exp(in\theta)$이다. 코사인과 사인의 (1)에 의해 $\exp(i\theta) = \cos\theta + i\sin\theta$이고 $\exp(in\theta) = \cos(n\theta) + i\sin(n\theta)$이므로 둘째 등식이 나온다. 마지막 문장은 첫 등식과 주기성의 (3)이다.

**2의 증명.** (1)의 오른쪽은 [[complex-field]]의 (4)에 의해 실수부가 $\cos(n\theta)$, 허수부가 $\sin(n\theta)$인 복소수이다.

**3의 증명.** 편각의 정의에 의해 $z = \iota(r)\exp(i\theta)$이고, $z \ne 0$이므로 [[modulus-of-complex-number]]의 (1)에 의해 $0 < r$이며, 복소수체의 (2)의 (i)에 의해 $\iota(r) \ne 0$이다. $\exp(i\theta) \ne 0$이므로 복소수의 거듭제곱의 (3)의 (i)($0 \le n$)과 (ii)(모든 정수 $n$)에 의해
$$
z^n = \iota(r)^n \exp(i\theta)^n = \iota(r)^n \exp(in\theta)
$$
이다. 마지막 등식은 (1)이다. $0 \le n$이면 복소수의 거듭제곱의 (5)에 의해 $\iota(r)^n = \iota(r^n)$이고, 실수의 거듭제곱의 (6)의 (i)에 의해 $0 < r^n$이다. $n < 0$이면 $m = -n$은 자연수이고 같은 (5)에 의해 $\iota(r)^n = \iota(r)^{-m} = \iota\bigl((r^m)^{-1}\bigr)$이며, $0 < r^m$이므로 [[order-properties-of-reals]]의 (6)의 (i)에 의해 $0 < (r^m)^{-1}$이다. 어느 경우든 $z^n$은 양의 실수와 $\exp(in\theta)$의 곱이므로 극형식의 (3)에 의해 $n\theta \in \arg(z^n)$이다. $0 \le n$일 때의 실수부와 허수부는 복소수체의 (2)의 (ii)와 코사인과 사인의 (1)에 의해 $\operatorname{Re}(z^n) = r^n \operatorname{Re}\exp(in\theta) = r^n\cos(n\theta)$이고 허수부도 같다.

**4의 증명.** $n$은 자연수이므로 $0 \le n$이고, (3)에 의해 $z^n = |z|^n \exp(in\theta)$이며 $0 < |z|^n$이다. 편각의 정의에 의해 $w = |w|\exp(i\varphi)$이고 [[modulus-of-complex-number]]의 (1)에 의해 $0 < |w|$이다. 극형식의 (3)의 둘째 문장을 $r = |z|^n$, $s = |w|$에 쓰면, $|z|^n\exp(in\theta) = |w|\exp(i\varphi)$인 것은 정확히 $|z|^n = |w|$이고 $n\theta - \varphi \in 2\pi\mathbb{Z}$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 3 에서 3배각 공식 다시 얻기]
$c = \cos\theta$, $s = \sin\theta$로 두고 [[complex-number]]의 (2)로 곱을 계산하면 $(c + is)^2 = (c^2 - s^2) + 2cs\,i$이고
$$
\begin{aligned}
(c + is)^3 &= \bigl(c(c^2 - s^2) - s \cdot 2cs\bigr) \\
&\qquad + \bigl(c \cdot 2cs \\
&\qquad\quad + s(c^2 - s^2)\bigr) i \\
&= (c^3 - 3cs^2) \\
&\qquad + (3c^2 s - s^3) i
\end{aligned}
$$
입니다. (2)에 의해 $\cos(3\theta) = c^3 - 3cs^2$이고 $\sin(3\theta) = 3c^2 s - s^3$입니다. [[cosine-and-sine|코사인과 사인]]의 (4)의 $s^2 = 1 - c^2$를 넣으면 $\cos(3\theta) = 4c^3 - 3c$, $\sin(3\theta) = 3s - 4s^3$이고, 이것은 [[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (4)의 3배각 공식과 같습니다.
:::

:::example[(−1 + √3 i)³ 의 계산]
$z = -1 + \sqrt{3}\,i$이면 [[square-root-exists]]의 (1)에 의해 $|z| = \sqrt{1 + 3} = \sqrt{4} = 2$이고 $\operatorname{Re} z / |z| = -1/2$, $\operatorname{Im} z / |z| = \sqrt{3}/2$입니다. $2\pi / 3 = \pi / 6 + \pi / 2$이므로 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)와 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\cos(2\pi / 3) = -\sin(\pi / 6) = -1/2$, $\sin(2\pi / 3) = \cos(\pi / 6) = \sqrt{3}/2$이므로, [[polar-form|극형식과 편각]]의 (4)에 의해 $2\pi / 3 \in \arg z$입니다. (3)에 의해 $z^3 = 2^3\exp(2\pi i) = 8$입니다(주기성의 (1)). 직접 곱해도 $z^2 = -2 - 2\sqrt{3}\,i$이고 $z^3 = z^2 z = 8$입니다.
:::

:::counterexample[cos(nθ) 를 (cos θ)ⁿ 으로 바꾸면 틀리는 예]
(2)는 $(\cos\theta + i\sin\theta)^n$의 실수부가 $\cos(n\theta)$라는 것이고, $(\cos\theta)^n$이라는 것이 아닙니다. $\theta = \pi / 2$, $n = 2$이면 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\cos(2 \cdot \pi / 2) = \cos\pi = -1$이지만 $(\cos(\pi / 2))^2 = 0$입니다. $\theta = 0$이면 $0$ 이상인 모든 정수 $n$에서 둘 다 $1$이어서 같습니다.
:::

## 확인 질문

:::check[$\exp(i\pi / 4)^n = 1$인 정수 $n$은 어떤 것인가?]
(1)에 의해 정확히 $n\pi / 4 \in 2\pi\mathbb{Z}$일 때, 곧 $n\pi / 4 = 2\pi k$인 정수 $k$가 있을 때입니다. 양변에 $4\pi^{-1}$을 곱하면 이것은 $n = 8k$이므로, $n$이 $8$의 배수일 때입니다.
:::

:::check[$z = 2\exp(i\pi / 5)$이면 $z^{-2}$의 절댓값과 편각 하나는 무엇인가?]
$2$는 양수이므로 [[polar-form|극형식과 편각]]의 (3)에 의해 $|z| = 2$이고 $\pi / 5 \in \arg z$입니다. (3)에서 $n = -2$이면 $z^{-2} = (2^2)^{-1}\exp(-2\pi i / 5) = (1/4)\exp(-2\pi i / 5)$이므로, 극형식의 (3)에 의해 절댓값은 $1/4$이고 $-2\pi / 5$가 편각입니다.
:::
