---
title: 복소 지수함수의 상
title_en: Image of the Complex Exponential
aliases: [복소 지수함수는 전사, exp 의 전사, exp(z) = w 의 해, exponential is onto, kernel of the complex exponential]
kind: proposition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소 지수함수의 값은 0 이 아닌 복소수 전체이다. 0 이 아닌 w 에서 exp(z) = w 인 것은 정확히 Re z = ln |w| 이고 Im z 가 w 의 편각일 때이므로 그런 z 는 무한히 많다. exp(z) = exp(z′) 인 것은 정확히 z − z′ 가 2πi 의 정수배일 때이고, exp 는 덧셈군 ℂ 에서 곱셈군 ℂ^× 로의 전사인 준동형이며 핵은 2πiℤ 이다.
requires: [prime-number, real-number-arithmetic, order-properties-of-reals, natural-logarithm, exponential-function, finite-set, subset-of-finite-set, countably-infinite-set, natural-numbers-are-infinite, injective-surjective-bijective, group, group-homomorphism, homomorphism-kernel-and-image, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-exponential-function, addition-law-of-complex-exponential, definition-of-pi, periodicity-of-trigonometric-functions, polar-form]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.1절 The complex exponential, Proposition 11.4.1 뒤 문단 (p.164); 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (xi)와 그 증명 (p.165–166); 11.4.4절 Exercises, Exercise 11.4.4, Exercise 11.4.5 (p.168); 8.5.2절 Exercises, Exercise 8.5.3 (p.58)
    checked: original
    note: "출처의 Exercise 11.4.4(p.168)는 'Show that the exponential is onto ℂ \\ {0}, and in fact, that for every nonzero w, there are infinitely many z ∈ ℂ such that e^z = w' 이다. 이 항목의 (1)과 (4)가 그것이다. (2)의 해의 꼴과 (3)의 같은 값의 조건, (5)의 핵은 이 연습문제가 묻지 않은 것을 더한 것이다. Exercise 11.4.5(p.168)는 모든 w ≠ 0 과 ε > 0 에 |z| < ε 이고 e^{1/z} = w 인 z 가 있음을 보이라는 것으로, (2)의 해에 허수부가 얼마든지 큰 것이 있다는 것을 쓰는 응용이다. 출처는 e^z 로 쓰고 이 항목은 exp(z) 로 쓴다. 이 항목은 복소수의 로그를 정의하지 않는다. (1)의 '값은 모두 0 이 아니다' 는 출처가 11.4.1절(p.164)에서 'e^z ≠ 0 for all z ∈ ℂ, as e^z e^{−z} = e^{z−z} = 1' 이라고 적는 것과 같다. 반례 '0 과 2πi 에서 값이 같은 예'는 출처 Proposition 11.4.2 (xi)(p.165)의 e^{z+i2π} = e^z 를 z = 0 에 쓴 것이고, 출처는 증명(p.166)에서 'So e^{i2π} = 1 = e^0' 이라고 적는다. 8.5.2절 Exercise 8.5.3(p.58)은 f(x, y) = (eˣcos(y), eˣsin(y)) 가 ℝ² \\ {(0, 0)} 로의 전사이고 각 점의 역상이 무한집합임을 보이게 하는데, 이 f 는 실수부와 허수부로 본 exp 이므로 (1)과 (4)와 같은 내용이다."
  - ref: judson-abstract-algebra
    loc: 11.1절 Group Homomorphisms, Example 11.7 (p.135)
    checked: original
    note: "Judson 의 Example 11.7(p.135)은 θ 를 cos θ + i sin θ 로 보내는 ℝ → C∗ 의 핵이 {2πn : n ∈ Z} 라고 적는다. 이 항목의 (5)는 정의역을 ℂ 전체로 넓힌 exp 의 핵 2πiℤ 이고, 그 허수부에 해당하는 것이 출처의 핵이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계산 예 (1 − √3i)⁶, 몫, −4 의 네제곱근, 원시 12제곱근의 수를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 곱셈군 $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 [[complex-exponential-function]]의 것이다. 실수의 자연로그 $\ln$은 [[natural-logarithm]], 실수의 지수함수는 [[exponential-function]], 원주율 $\pi$는 [[definition-of-pi|원주율]], $2\pi\mathbb{Z}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]], 편각과 $\arg w$는 [[polar-form|극형식과 편각]]의 것이다. 덧셈군 $(\mathbb{C}, +)$와 군 준동형, 핵 $\operatorname{Ker}$는 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)와 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 것이다. 무한집합은 [[finite-set|유한집합]]의 것이다. $2\pi i\mathbb{Z} = \{2\pi k\, i : k \in \mathbb{Z}\}$로 쓴다. 이 항목은 복소수의 로그를 정의하지 않는다.

다음이 성립한다. 아래에서 $z$, $z'$, $w$는 복소수이다.

1. (상) $\exp$의 값은 모두 $0$이 아니고, $0$이 아닌 모든 복소수는 $\exp$의 값이다. 곧 $\exp(\mathbb{C}) = \mathbb{C}^{\times}$이다. 구체적으로 $w \ne 0$이고 $\varphi \in \arg w$이면 $\exp(\ln|w| + \varphi i) = w$이다.
2. (방정식 $\exp(z) = w$의 해) $w \ne 0$이면 $\exp(z) = w$인 것은 정확히 $\operatorname{Re} z = \ln|w|$이고 $\operatorname{Im} z \in \arg w$일 때이다. 따라서 $\varphi \in \arg w$이면
   $$
   \begin{aligned}
   &\{z \in \mathbb{C} : \exp(z) = w\} \\
   &\quad = \{\ln|w| + (\varphi + 2\pi k) i \\
   &\qquad\quad : k \in \mathbb{Z}\}
   \end{aligned}
   $$
   이다.
3. (같은 값) $\exp(z) = \exp(z')$인 것은 정확히 $z - z' \in 2\pi i\mathbb{Z}$일 때이다.
4. (해가 무한히 많다) $w \ne 0$이면 $\{z \in \mathbb{C} : \exp(z) = w\}$는 무한집합이다.
5. (준동형과 핵) $\exp : \mathbb{C} \to \mathbb{C}^{\times}$는 덧셈군 $(\mathbb{C}, +)$에서 곱셈군 $\mathbb{C}^{\times}$로의 전사인 군 준동형이고, $\operatorname{Ker} \exp = 2\pi i\mathbb{Z}$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$, the operations of the field $\mathbb{C}$, the multiplicative group $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, the function $\iota$, the convention for writing real numbers where complex numbers are required and the form $a + bi$, the modulus, and the complex exponential function $\exp : \mathbb{C} \to \mathbb{C}$ are those of their entries. The real natural logarithm $\ln$, the real exponential function, the number $\pi$, $2\pi\mathbb{Z}$, and arguments and $\arg w$ are those of their entries. The additive group $(\mathbb{C}, +)$, group homomorphisms and kernels $\operatorname{Ker}$ are those of item (2) of the entry on the addition law of the complex exponential and of the entry on kernels and images. Infinite sets are those of the entry on finite sets. We write $2\pi i\mathbb{Z} = \{2\pi k\, i : k \in \mathbb{Z}\}$. This entry does not define a logarithm of complex numbers.

The following hold. Below, $z$, $z'$, $w$ are complex numbers.

1. (Image) No value of $\exp$ is $0$, and every nonzero complex number is a value of $\exp$; that is, $\exp(\mathbb{C}) = \mathbb{C}^{\times}$. Concretely, if $w \ne 0$ and $\varphi \in \arg w$, then $\exp(\ln|w| + \varphi i) = w$.
2. (Solutions of $\exp(z) = w$) If $w \ne 0$, then $\exp(z) = w$ if and only if $\operatorname{Re} z = \ln|w|$ and $\operatorname{Im} z \in \arg w$. Hence, if $\varphi \in \arg w$, then
   $$
   \begin{aligned}
   &\{z \in \mathbb{C} : \exp(z) = w\} \\
   &\quad = \{\ln|w| + (\varphi + 2\pi k) i \\
   &\qquad\quad : k \in \mathbb{Z}\}.
   \end{aligned}
   $$
3. (Equal values) $\exp(z) = \exp(z')$ if and only if $z - z' \in 2\pi i\mathbb{Z}$.
4. (Infinitely many solutions) If $w \ne 0$, then $\{z \in \mathbb{C} : \exp(z) = w\}$ is an infinite set.
5. (Homomorphism and kernel) $\exp : \mathbb{C} \to \mathbb{C}^{\times}$ is a surjective group homomorphism from the additive group $(\mathbb{C}, +)$ to the multiplicative group $\mathbb{C}^{\times}$, and $\operatorname{Ker} \exp = 2\pi i\mathbb{Z}$.
:::

## 직관

[[addition-law-of-complex-exponential|덧셈 법칙]]의 (4)에 의해 $\exp(x + iy) = \exp(x)\exp(iy)$이고, 앞의 인수는 양의 실수, 뒤의 인수는 절댓값이 $1$인 수입니다. 이것은 $\exp(x + iy)$를 [[polar-form|극형식]]으로 적은 것이어서, 실수부 $x$가 절댓값 $\exp(x)$를 정하고 허수부 $y$가 편각이 됩니다. 그래서 $0$이 아닌 $w$를 값으로 얻으려면 실수부를 $\ln|w|$로, 허수부를 $w$의 편각으로 두면 되고(1), 해는 그것뿐입니다(2).

실수부는 실수의 지수함수가 단사이므로 하나로 정해지지만, 편각은 $2\pi$의 정수배만큼씩 여러 개이므로 해는 $2\pi i$씩 떨어진 무한히 많은 수입니다. 실수의 지수함수가 단사인 것과 달리 복소 지수함수는 단사가 아니고, 그 정도를 재는 것이 핵 $2\pi i\mathbb{Z}$입니다.

나선 계단에 비유할 수 있습니다. 위에서 내려다본 자리(값 $w$)가 같은 층계참이 층마다 하나씩 있고, 층 사이의 높이가 $2\pi$입니다. 비유의 높이가 해의 허수부, 내려다본 자리가 값에 해당합니다. 맞지 않는 곳은 실수부입니다. 계단에는 실수부에 해당하는 것이 따로 없고, 여기서 실수부는 값의 절댓값을 정합니다. 이 항목은 해 가운데 하나를 골라 "복소수의 로그"라는 함수로 정하지 않습니다.

## 증명

:::idea
$z = x + yi$이면 덧셈 법칙의 (4)에 의해 $\exp(z) = \exp(x)\exp(iy)$이고 $\exp(x) > 0$이므로, 극형식의 (3)에 의해 $\exp(z) = |w|\exp(i\varphi)$는 $\exp(x) = |w|$와 $y - \varphi \in 2\pi\mathbb{Z}$로 나뉜다. 나머지는 이것을 $w = 1$에 쓰고, 해의 집합에 자연수를 단사로 넣어 무한집합임을 보인다.
:::

:::hint
$\exp(z) = \exp(z')$은 덧셈 법칙의 (2)에 의해 $\exp(z - z') = 1$과 같습니다. (2)를 $w = 1$에 쓰면 $\ln 1$과 $\arg 1$은 무엇입니까?
:::

:::hint
$k$를 $\ln|w| + (\varphi + 2\pi k) i$로 보내는 함수가 단사라는 것은 두 수의 허수부를 비교하면 됩니다.
:::

:::proof
"덧셈 법칙의 (4)"처럼 쓴 것은 [[addition-law-of-complex-exponential]], "극형식의 (3)"은 [[polar-form]], "복소수체의 (4)"는 [[complex-field]], "실수 지수함수의 (1)"은 [[exponential-function]]의 번호이다.

**2의 증명.** $w \ne 0$이고 $\varphi \in \arg w$라 하자. [[modulus-of-complex-number]]의 (1)에 의해 $0 < |w|$이고 편각의 정의에 의해 $w = |w|\exp(i\varphi)$이다. 복소수체의 (4)에 의해 $z = x + yi$, $x = \operatorname{Re} z$, $y = \operatorname{Im} z$이고, 덧셈 법칙의 (4)에 의해 $\exp(z) = \iota(\exp(x))\exp(iy)$이며, 실수 지수함수의 (1)에 의해 $0 < \exp(x)$이다. 극형식의 (3)에 의해 $\iota(\exp(x))\exp(iy) = \iota(|w|)\exp(i\varphi)$인 것은 정확히 $\exp(x) = |w|$이고 $y - \varphi \in 2\pi\mathbb{Z}$일 때이다. 실수 지수함수의 (1)에 의해 $\exp(x) = |w|$인 것은 정확히 $x = \ln|w|$일 때이고, 극형식의 (2)에 의해 $\arg w = \varphi + 2\pi\mathbb{Z}$이므로 $y - \varphi \in 2\pi\mathbb{Z}$인 것은 정확히 $y \in \arg w$일 때이다. 이것이 앞 문장이다. 집합의 등식은 복소수체의 (4)에 의해 실수부가 $\ln|w|$이고 허수부가 $\varphi + 2\pi k$($k$는 정수)인 복소수가 정확히 $\ln|w| + (\varphi + 2\pi k) i$라는 것이다.

**1의 증명.** 덧셈 법칙의 (2)에 의해 $\exp$의 값은 $0$이 아니다. $w \ne 0$이고 $\varphi \in \arg w$이면 $\ln|w| + \varphi i$는 실수부가 $\ln|w|$이고 허수부가 $\varphi$이므로 (2)에 의해 $\exp(\ln|w| + \varphi i) = w$이다. 극형식의 (1)에 의해 $0$이 아닌 모든 $w$에 편각이 있으므로 $\exp(\mathbb{C}) = \mathbb{C}^{\times}$이다.

**3의 증명.** 덧셈 법칙의 (1), (2)에 의해 $\exp(z) = \exp(z - z')\exp(z')$이고 $\exp(z') \ne 0$이므로, $\exp(z) = \exp(z')$인 것은 정확히 $\exp(z - z') = 1$일 때이다. (2)를 $w = 1$에 쓰면 $|1| = 1$, [[natural-logarithm]]의 (1)의 $\ln 1 = 0$, 극형식의 (6)의 $\arg 1 = 2\pi\mathbb{Z}$에 의해, 이것은 정확히 $\operatorname{Re}(z - z') = 0$이고 $\operatorname{Im}(z - z') = 2\pi k$인 정수 $k$가 있을 때, 곧 복소수체의 (4)에 의해 $z - z' = 2\pi k\, i$일 때이다.

**4의 증명.** $w \ne 0$, $\varphi \in \arg w$, $S = \{z \in \mathbb{C} : \exp(z) = w\}$라 하고, 자연수 $k$에서의 값이 $\ln|w| + (\varphi + 2\pi k) i$인 함수 $f : \mathbb{N} \to S$를 두자((2)에 의해 값은 $S$에 있다). $f(k) = f(k')$이면 복소수체의 (4)에 의해 허수부가 같아 $2\pi k = 2\pi k'$이고, $0 < 2\pi$([[definition-of-pi|원주율]]의 (4))이므로 $k = k'$이다. 따라서 공역을 상 $f(\mathbb{N})$으로 둔 $f : \mathbb{N} \to f(\mathbb{N})$은 전단사이고, [[countably-infinite-set|가산 무한 집합]]의 정의에 의해 $f(\mathbb{N})$은 가산 무한이며, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 무한집합이다. $S$가 유한집합이라면 어떤 정수 $m \ge 0$에 대해 원소를 $m$개 갖고, $f(\mathbb{N}) \subseteq S$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $f(\mathbb{N})$이 유한집합이 되어 모순이다. 따라서 $S$는 무한집합이다.

**5의 증명.** 덧셈 법칙의 (2)에 의해 $\exp : \mathbb{C} \to \mathbb{C}^{\times}$는 덧셈군 $(\mathbb{C}, +)$에서 곱셈군 $\mathbb{C}^{\times}$로의 군 준동형이고, (1)에 의해 전사이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 정의에 의해 $\operatorname{Ker} \exp = \{z \in \mathbb{C} : \exp(z) = 1\}$이고, [[complex-exponential-function]]의 (3)의 $\exp(0) = 1$과 (3)을 $z' = 0$에 쓴 것에 의해 이 집합은 $2\pi i\mathbb{Z}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[exp(z) = −2 의 해]
$|-2| = 2$이고 [[polar-form|극형식과 편각]]의 (6)에 의해 $\arg(-2) = \pi + 2\pi\mathbb{Z}$입니다. (2)에 의해 $\exp(z) = -2$인 것은 정확히 $z = \ln 2 + (\pi + 2\pi k) i$($k$는 정수)일 때입니다. $k = 0$이면 $z = \ln 2 + \pi i$이고, [[addition-law-of-complex-exponential|덧셈 법칙]]의 (4)와 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 실제로 $\exp(\ln 2 + \pi i) = 2 \cdot (-1) = -2$입니다. 해 가운데 실수인 복소수는 없습니다. 허수부 $\pi + 2\pi k$가 $0$이려면 $k = -1/2$이어야 하는데, $-1 < -1/2 < 0$인 정수는 없기 때문입니다([[prime-number]]의 (Z1)).
:::

:::example[exp(z) = 1 의 해와 핵]
$w = 1$이면 $\ln 1 = 0$이고 $\arg 1 = 2\pi\mathbb{Z}$이므로 해는 $2\pi k\, i$($k$는 정수)이고, 이것이 (5)의 핵입니다. 실수인 해는 $k = 0$의 $0$뿐이고, 이것은 [[exponential-function|지수함수]]의 (1)에서 실수의 $\exp$가 $\exp(x) = 1$을 $x = 0$에서만 만족하는 것과 맞습니다.
:::

:::counterexample[0 과 2πi 에서 값이 같은 예]
실수의 지수함수는 순증가여서 단사이지만, 복소 지수함수는 그렇지 않습니다. (3)에 의해 $\exp(0) = \exp(2\pi i) = 1$이고 $0 \ne 2\pi i$입니다. 같은 수 $w$를 주는 $z$를 하나로 정하려면 허수부를 $[0, 2\pi)$ 같은 구간으로 제한해야 하고, 이 항목은 그런 제한으로 함수를 따로 정하지 않습니다.
:::

## 확인 질문

:::check[$\exp(z) = i$이고 $0 \le \operatorname{Im} z < 2\pi$인 복소수 $z$는 무엇인가?]
$|i| = 1$이고 [[polar-form|극형식과 편각]]의 (6)에 의해 $\arg i = \pi / 2 + 2\pi\mathbb{Z}$입니다. (2)에 의해 해는 $(\pi / 2 + 2\pi k) i$이고, 허수부가 $[0, 2\pi)$에 드는 것은 $k = 0$의 $z = \pi i / 2$ 하나입니다.
:::

:::check[$\exp(z) = \exp(\overline{z})$인 복소수 $z$는 어떤 것인가?]
(3)에 의해 정확히 $z - \overline{z} \in 2\pi i\mathbb{Z}$일 때입니다. [[complex-conjugate|켤레복소수]]의 (3)에 의해 $z - \overline{z} = 2(\operatorname{Im} z) i$이므로, 이것은 $2\operatorname{Im} z = 2\pi k$, 곧 $\operatorname{Im} z = \pi k$($k$는 정수)일 때입니다.
:::
