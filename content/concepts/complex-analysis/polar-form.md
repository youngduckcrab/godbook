---
title: 극형식과 편각
title_en: Polar Form and Argument
aliases: [극형식, 편각, 극좌표, polar form, argument of a complex number, polar coordinates]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 0 이 아닌 복소수 z 에서 z = |z| exp(iθ) 인 실수 θ 를 z 의 편각이라 하고, 그 전체를 arg z 로 쓴다. 편각은 있고, 실수 a 마다 a ≤ θ < a + 2π 인 편각은 정확히 하나이며, 편각 하나가 θ₀ 이면 arg z = θ₀ + 2πℤ 이다. r > 0 이면 r exp(iθ) = s exp(iφ) 인 것은 정확히 r = s 이고 θ − φ 가 2π 의 정수배일 때이다. 곱·역수·몫·켤레의 편각은 편각의 합·부호 바꿈·차로 얻는다.
requires: [prime-number, real-number-arithmetic, order-properties-of-reals, absolute-value, square-root-exists, interval, ring-basic-properties, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, definition-of-pi, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates, unit-circle-parametrization]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.3절 The unit circle and polar coordinates (p.167); 8.5.2절 Exercises, Exercise 8.5.8 (p.59)
    checked: original
    note: "출처(p.167)는 원의 모든 점이 어떤 t 의 e^{it} 이므로 복소수를 'z = re^{iθ} for some r ≥ 0 and θ ∈ ℝ' 로 쓸 수 있고 이것을 polar coordinates 라 부른다고 적은 뒤, 'The θ is, of course, not unique as θ or θ + 2π gives the same number' 라고 적고 곱의 공식 (re^{iθ})(se^{iγ}) = rse^{i(θ+γ)} 를 지수법칙에서 얻는다고 적는다. 출처는 r ≥ 0 을 허락하므로 0 도 이 꼴이다. 이 항목은 z ≠ 0 과 r > 0 으로 좁혀, 편각을 집합 arg z 로 정하고 (2)에서 그 집합이 θ₀ + 2πℤ 임을, (3)에서 r 이 |z| 로 정해진다는 것을 증명한다. (5)의 곱이 출처의 곱 공식이다. 확인 질문 '$z \\ne 0$이고 $\\theta \\in \\arg z$이면 $-z$의 편각 하나는 무엇인가?'는 출처가 11.4.2절의 증명(p.167)에서 'Multiplying by −1 is the same as multiplying by e^{iπ} or e^{−iπ}' 라고 적는 것과 같은 발상이다. 반례 'r 이 음수이면 θ 가 편각이 아닌 예'는 출처가 r ≥ 0 만 허락하는 것과 맞는다. 출처는 e^{iθ} 로 쓰고 이 항목은 exp(iθ) 로 쓴다. Exercise 8.5.8 의 d)(p.59)는 F(r, θ) = (r cos θ, r sin θ) 가 ℝ² 에서 ℝ² 로의 전사이고 각 점의 역상이 무한집합임을 보이라는 것으로, (1)·(2)와 같은 대상을 r 이 모든 실수인 꼴로 묻는다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, 극좌표 문단 (p.50–51), Proposition 4.20 (p.51); 4.5절 Exercises, 연습문제 16, 17, 41 (p.56–58)
    checked: original
    note: "출처(p.50–51)는 0 이 아닌 복소수를 그림(Figure 4.18)의 각 θ 와 거리 r 로 z = a + bi = r(cos θ + i sin θ), r = |z|, a = r cos θ, b = r sin θ 로 나타내고 'r cis θ' 로 줄여 쓰며, 'To assure that the representation of z is well-defined, we also require that 0° ≤ θ < 360°. If the measurement is in radians, then 0 ≤ θ < 2π' 라고 적는다. 이 항목의 (4)가 a = r cos θ, b = r sin θ 이고, (1)이 그 θ 가 [0, 2π) 에서 하나로 정해진다는 것을 증명한 것이다. 출처는 θ 를 그림의 각과 arctan(Example 4.19)으로 정하고, 이 항목은 각과 arctan 을 쓰지 않는다. Proposition 4.20(p.51)은 zw = rs cis(θ + ϕ) 이고 증명은 'straightforward and is left as an exercise' 라 하여 연습문제 41(p.58)이 묻는다. (5)의 곱이 그것이다. 예시 '−3√3 + 3i 의 편각'과 확인 질문 '$|z| = 4$이고 $7\\pi / 6 \\in \\arg z$인 복소수 $z$는 무엇인가?'는 연습문제 17(극형식으로 바꾸기, p.57)과 16(a + bi 꼴로 바꾸기, p.56)과 같은 종류의 계산이다(수는 다르다). 그 확인 질문의 답 −2√3 − 2i 는 연습문제 17(f)의 2i + 2√3 에 −1 을 곱한 수이다. 예시 'i 와 −1 의 곱과 몫'은 Example 4.21(p.51)이 3 cis(π/3) 과 2 cis(π/6) 의 곱을 6i 로 구하는 것과 같은 종류의 계산이고, 반례 '구간 안의 편각끼리 더하면 구간을 벗어날 수 있는 예'의 −i 의 거듭제곱은 연습문제 18(d)의 (−i)^{10} 과 같은 수의 계산이다. (6)의 b < 0 과 x < 0 의 경우는 연습문제 17(e)의 −3i 와 (b)의 −5 와 같은 대상이고, 부록 B 의 답(p.321)은 −3i 를 3 cis(3π/2) 로 적는다. 이름 cis 는 쓰지 않는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(드무아브르의 음의 지수 꼴에 경계값, 'Lebl 에 이름이 없다' 를 두 권 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 코사인과 사인은 [[cosine-and-sine|코사인과 사인]], 원주율 $\pi$는 [[definition-of-pi|원주율]], $2\pi\mathbb{Z}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 것이고, 원 $\mathbb{T}$와 $\theta_0 + 2\pi\mathbb{Z}$는 [[unit-circle-parametrization|원 𝕋 의 매개화]]의 것이다. 구간의 기호는 [[interval]]의 것이다.

**편각과 극형식.** $z$를 $0$이 아닌 복소수라 하자. 실수 $\theta$가 $z$의 **편각**(argument)인 것은 정확히
$$
z = |z| \exp(i\theta)
$$
일 때이다. 오른쪽의 $|z|$는 [[complex-field]]의 (3)의 약속대로 $\iota(|z|)$이다. $z$의 편각 전체의 집합을 $\arg z$로 쓴다. 곧 $\arg z = \{\theta \in \mathbb{R} : z = |z| \exp(i\theta)\}$이다. 편각 하나를 가리킬 때는 "$[0, 2\pi)$ 안의 편각"처럼 구간을 밝힌다. $0$에는 편각을 정하지 않는다. 양의 실수 $r$와 실수 $\theta$로 $z = r\exp(i\theta)$라고 쓴 것을 $z$의 **극형식**(polar form)이라 한다.

다음이 성립한다. 아래에서 $z$, $w$는 $0$이 아닌 복소수이고, $r$, $s$는 양의 실수이며, $\theta$, $\varphi$, $\theta_0$, $a$는 실수이다.

1. (편각의 존재와 구간 안의 편각) $z$의 편각이 있다. 모든 실수 $a$에 대하여 $a \le \theta < a + 2\pi$인 $z$의 편각 $\theta$는 정확히 하나이다. 특히 $[0, 2\pi)$ 안의 편각은 정확히 하나이다. $u \in \mathbb{T}$이면 $\arg u = \{\theta \in \mathbb{R} : \exp(i\theta) = u\}$이다.
2. (편각의 집합) $\theta_0 \in \arg z$이면 $\arg z = \theta_0 + 2\pi\mathbb{Z}$이다.
3. (극형식의 유일성) $r\exp(i\theta) \ne 0$이고 $|r\exp(i\theta)| = r$이며 $\theta \in \arg\bigl(r\exp(i\theta)\bigr)$이다. 따라서 $r\exp(i\theta) = s\exp(i\varphi)$인 것은 정확히 $r = s$이고 $\theta - \varphi \in 2\pi\mathbb{Z}$일 때이다.
4. (실수부와 허수부) $\theta \in \arg z$인 것은 정확히 $\cos\theta = \operatorname{Re} z / |z|$이고 $\sin\theta = \operatorname{Im} z / |z|$일 때이다. 따라서 $\theta \in \arg z$이면 $z = |z|(\cos\theta + i\sin\theta)$이고 $\operatorname{Re} z = |z|\cos\theta$, $\operatorname{Im} z = |z|\sin\theta$이다.
5. (곱, 역수, 몫, 켤레) $\theta \in \arg z$이고 $\varphi \in \arg w$이면
   $$
   \begin{aligned}
   zw &= |z|\,|w| \exp(i(\theta + \varphi)), \\
   z^{-1} &= |z|^{-1} \exp(i(-\theta)), \\
   z / w &= \bigl(|z| / |w|\bigr) \exp(i(\theta - \varphi)), \\
   \overline{z} &= |z| \exp(i(-\theta))
   \end{aligned}
   $$
   이다. 따라서 $\theta + \varphi \in \arg(zw)$, $-\theta \in \arg(z^{-1})$, $\theta - \varphi \in \arg(z / w)$, $-\theta \in \arg \overline{z}$이다.
6. (실수인 복소수와 순허수) $x$, $b$를 $0$이 아닌 실수라 하자. $0 < x$이면 $\arg x = 2\pi\mathbb{Z}$이고, $x < 0$이면 $\arg x = \pi + 2\pi\mathbb{Z}$이다. $0 < b$이면 $\arg(bi) = \pi / 2 + 2\pi\mathbb{Z}$이고, $b < 0$이면 $\arg(bi) = 3\pi / 2 + 2\pi\mathbb{Z}$이다. 네 경우의 $[0, 2\pi)$ 안의 편각은 차례로 $0$, $\pi$, $\pi / 2$, $3\pi / 2$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$, the operations of the field $\mathbb{C}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the conjugate $\overline{z}$, the modulus, and the complex exponential function are those of their entries. Cosine and sine are those of the entry on cosine and sine, $\pi$ is that of the entry on the number π, $2\pi\mathbb{Z}$ is that of the entry on periodicity of the trigonometric functions, and the circle group $\mathbb{T}$ and $\theta_0 + 2\pi\mathbb{Z}$ are those of the entry on the parametrization of the circle group. The notation for intervals is that of its entry.

**Argument and polar form.** Let $z$ be a nonzero complex number. A real number $\theta$ is an **argument** of $z$ if and only if
$$
z = |z| \exp(i\theta).
$$
Here $|z|$ on the right means $\iota(|z|)$, by convention (3) of the entry on the complex field. The set of all arguments of $z$ is written $\arg z$; that is, $\arg z = \{\theta \in \mathbb{R} : z = |z| \exp(i\theta)\}$. When one argument is meant, the interval is stated, as in "the argument in $[0, 2\pi)$". No argument is defined for $0$. Writing $z = r\exp(i\theta)$ with a positive real number $r$ and a real number $\theta$ is called a **polar form** of $z$.

The following hold. Below, $z$, $w$ are nonzero complex numbers, $r$, $s$ are positive real numbers, and $\theta$, $\varphi$, $\theta_0$, $a$ are real numbers.

1. (Existence of arguments and the argument in an interval) $z$ has an argument. For every real number $a$, exactly one argument $\theta$ of $z$ satisfies $a \le \theta < a + 2\pi$. In particular, there is exactly one argument in $[0, 2\pi)$. If $u \in \mathbb{T}$, then $\arg u = \{\theta \in \mathbb{R} : \exp(i\theta) = u\}$.
2. (The set of arguments) If $\theta_0 \in \arg z$, then $\arg z = \theta_0 + 2\pi\mathbb{Z}$.
3. (Uniqueness of the polar form) $r\exp(i\theta) \ne 0$, $|r\exp(i\theta)| = r$, and $\theta \in \arg\bigl(r\exp(i\theta)\bigr)$. Hence $r\exp(i\theta) = s\exp(i\varphi)$ if and only if $r = s$ and $\theta - \varphi \in 2\pi\mathbb{Z}$.
4. (Real and imaginary parts) $\theta \in \arg z$ if and only if $\cos\theta = \operatorname{Re} z / |z|$ and $\sin\theta = \operatorname{Im} z / |z|$. Hence, if $\theta \in \arg z$, then $z = |z|(\cos\theta + i\sin\theta)$, $\operatorname{Re} z = |z|\cos\theta$ and $\operatorname{Im} z = |z|\sin\theta$.
5. (Products, inverses, quotients, conjugates) If $\theta \in \arg z$ and $\varphi \in \arg w$, then
   $$
   \begin{aligned}
   zw &= |z|\,|w| \exp(i(\theta + \varphi)), \\
   z^{-1} &= |z|^{-1} \exp(i(-\theta)), \\
   z / w &= \bigl(|z| / |w|\bigr) \exp(i(\theta - \varphi)), \\
   \overline{z} &= |z| \exp(i(-\theta)).
   \end{aligned}
   $$
   Hence $\theta + \varphi \in \arg(zw)$, $-\theta \in \arg(z^{-1})$, $\theta - \varphi \in \arg(z / w)$ and $-\theta \in \arg \overline{z}$.
6. (Real complex numbers and purely imaginary numbers) Let $x$ and $b$ be nonzero real numbers. If $0 < x$ then $\arg x = 2\pi\mathbb{Z}$, and if $x < 0$ then $\arg x = \pi + 2\pi\mathbb{Z}$. If $0 < b$ then $\arg(bi) = \pi / 2 + 2\pi\mathbb{Z}$, and if $b < 0$ then $\arg(bi) = 3\pi / 2 + 2\pi\mathbb{Z}$. The arguments in $[0, 2\pi)$ in the four cases are $0$, $\pi$, $\pi / 2$ and $3\pi / 2$, respectively.
:::

## 직관

$0$이 아닌 복소수 $z$를 절댓값으로 나누면 절댓값이 $1$인 복소수 $u = z / |z|$가 남습니다. [[unit-circle-parametrization|원 𝕋 의 매개화]]에 의해 $u$는 $\exp(i\theta)$ 꼴이므로 $z = |z|\exp(i\theta)$로 쓸 수 있고, 이 $\theta$가 편각입니다. 곧 $z$를 "크기" $|z|$와 "절댓값이 $1$인 부분" $\exp(i\theta)$의 곱으로 나누는 것이 극형식입니다. 크기는 하나로 정해지지만, $\exp(i\theta)$를 주는 $\theta$는 $2\pi$의 정수배만큼씩 여러 개이므로 편각은 수 하나가 아니라 집합 $\theta_0 + 2\pi\mathbb{Z}$로 둡니다.

시계의 시각에 비유할 수 있습니다. $3$시와 $15$시와 $27$시는 바늘이 같은 자리에 오는 시각이어서, 바늘 자리 하나에 시각이 $12$시간씩 떨어진 여러 수가 대응합니다. 그래서 시각 하나를 고르려면 "$0$시 이상 $12$시 미만"처럼 범위를 정합니다. 편각도 같아서, $\exp(i\theta)$가 같은 $\theta$들은 $2\pi$씩 떨어져 있고(2), 하나를 고르려면 $[0, 2\pi)$ 같은 구간을 정해야 합니다(1). 비유가 맞지 않는 곳은 크기 $|z|$입니다. 시계에는 그에 해당하는 것이 없고, 이 항목은 $\theta$를 바늘이 돈 각도로 해석하지 않습니다.

극형식은 곱셈과 잘 맞습니다. [[addition-law-of-complex-exponential|덧셈 법칙]] $\exp(i\theta)\exp(i\varphi) = \exp(i(\theta + \varphi))$에 의해 곱의 크기는 크기의 곱이고 곱의 편각은 편각의 합입니다(5). 다만 $[0, 2\pi)$ 안의 편각끼리 더한 수는 $[0, 2\pi)$를 벗어날 수 있으므로, "$[0, 2\pi)$ 안의 편각"을 고르는 규칙은 곱셈과 맞지 않을 수 있습니다. 아래 반례가 그런 예입니다.

## 증명

:::idea
$u = z / |z|$는 $\mathbb{T}$의 원소이고, $\theta$가 $z$의 편각인 것은 정확히 $\exp(i\theta) = u$일 때이다. 그러면 (1)과 (2)는 원 $\mathbb{T}$의 매개화의 (4)와 (5)이다. 나머지는 덧셈 법칙과 절댓값의 곱셈 성질로 계산한다.
:::

:::hint
$|r\exp(i\theta)|$를 절댓값의 곱 $|r|\,|\exp(i\theta)|$로 계산해 보세요. $r$이 양수라는 것이 어디에 쓰입니까?
:::

:::hint
$z^{-1}$의 극형식은 $\bigl(|z|\exp(i\theta)\bigr)^{-1}$을 두 인수의 역수의 곱으로 나누어 얻습니다. 군 $\mathbb{C}^{\times}$는 아벨군입니다.
:::

:::proof
"매개화의 (4)"처럼 쓴 것은 [[unit-circle-parametrization]], "덧셈 법칙의 (1)"은 [[addition-law-of-complex-exponential]], "코사인과 사인의 (1)"은 [[cosine-and-sine]], "주기성의 (1)"은 [[periodicity-of-trigonometric-functions]], "복소수체의 (2)"는 [[complex-field]], "복소수의 (1)"은 [[complex-number]], "절댓값의 (1)"은 [[modulus-of-complex-number]], "켤레의 (2)"는 [[complex-conjugate]], "순서 성질의 (6)"은 [[order-properties-of-reals]], "환의 기본 성질의 (2)"는 [[ring-basic-properties]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 묶는 곳과 분배하는 곳은 체의 조건에 의한다. 실수 $s'$, $t'$에서 복소수체의 (2)와 분배법칙에 의해 $i\,\iota(s' + t') = i\,\iota(s') + i\,\iota(t')$이므로 덧셈 법칙의 (1)에 의해 $\exp(i(s' + t')) = \exp(is')\exp(it')$이다. 이것을 (가)라 부른다.

**준비.** $z \ne 0$이므로 절댓값의 (1)에 의해 $0 < |z|$이고, 순서 성질의 (6)의 (i)에 의해 $0 < |z|^{-1}$이다. $u = \iota(|z|^{-1})\,z$로 두면 절댓값의 (5)와 [[absolute-value]]의 (1)에 의해 $|u| = |z|^{-1}|z| = 1$이므로 $u \in \mathbb{T}$이다. 복소수체의 (2)에 의해 $\iota(|z|)\,\iota(|z|^{-1}) = \iota(1) = 1$이다. 따라서 $z = \iota(|z|)\exp(i\theta)$이면 양쪽에 $\iota(|z|^{-1})$을 곱해 $u = \exp(i\theta)$이고, 거꾸로 $u = \exp(i\theta)$이면 양쪽에 $\iota(|z|)$를 곱해 $z = \iota(|z|)\exp(i\theta)$이다. 곧
$$
\arg z = \{\theta \in \mathbb{R} : \exp(i\theta) = u\}
$$
이다. 이것을 (나)라 부른다. 특히 $z \in \mathbb{T}$이면 $|z|^{-1} = 1$이므로 $u = z$이고, (1)의 마지막 문장이 나온다.

**1의 증명.** (나)와 매개화의 (4)에 의해 $\exp(i\theta) = u$인 실수 $\theta$가 있고, 모든 실수 $a$에 대하여 그 가운데 $a \le \theta < a + 2\pi$인 것은 정확히 하나이다. $a = 0$이면 $[0, 2\pi)$ 안의 편각이다.

**2의 증명.** $\theta_0 \in \arg z$이면 (나)에 의해 $u = \exp(i\theta_0)$이고, 매개화의 (5)에 의해 $\{\theta \in \mathbb{R} : \exp(i\theta) = u\} = \theta_0 + 2\pi\mathbb{Z}$이다.

**3의 증명.** $v = \iota(r)\exp(i\theta)$로 두자. 절댓값의 (3), (5)와 덧셈 법칙의 (5), [[absolute-value]]의 (1)에 의해 $|v| = |r|\,|\exp(i\theta)| = r \cdot 1 = r$이다. $0 < r$이므로 $|v| \ne 0$이고 절댓값의 (1)에 의해 $v \ne 0$이다. $v = \iota(|v|)\exp(i\theta)$이므로 $\theta \in \arg v$이다.

$r\exp(i\theta) = s\exp(i\varphi)$이면 이 수를 $v$라 할 때 앞 문단에 의해 $r = |v| = s$이고 $\theta$와 $\varphi$가 모두 $\arg v$에 있다. (2)에 의해 $\arg v = \theta + 2\pi\mathbb{Z}$이므로 $\varphi = \theta + 2\pi k$인 정수 $k$가 있고 $\theta - \varphi = 2\pi(-k) \in 2\pi\mathbb{Z}$이다. 거꾸로 $r = s$이고 $\theta - \varphi \in 2\pi\mathbb{Z}$이면 매개화의 (5)에 의해 $\exp(i\theta) = \exp(i\varphi)$이므로 $r\exp(i\theta) = s\exp(i\varphi)$이다.

**4의 증명.** 코사인과 사인의 (1)에 의해 $\exp(i\theta)$의 실수부는 $\cos\theta$, 허수부는 $\sin\theta$이고, 복소수체의 (2)의 (ii)에 의해 $u = \iota(|z|^{-1})z$의 실수부는 $|z|^{-1}\operatorname{Re} z = \operatorname{Re} z / |z|$, 허수부는 $\operatorname{Im} z / |z|$이다. 복소수의 (1)에 의해 $\exp(i\theta) = u$인 것은 정확히 실수부와 허수부가 각각 같을 때이므로, (나)에 의해 앞 문장이 나온다. 이때 $z = \iota(|z|)\exp(i\theta)$와 코사인과 사인의 (1)에서 $z = |z|(\cos\theta + i\sin\theta)$이고, $\cos\theta = \operatorname{Re} z \cdot |z|^{-1}$의 양변에 $|z|$를 곱하면 $\operatorname{Re} z = |z|\cos\theta$이다. 허수부도 같다.

**5의 증명.** $z = \iota(|z|)\exp(i\theta)$, $w = \iota(|w|)\exp(i\varphi)$이다. 곱. 곱의 순서를 바꾸고 복소수체의 (2)의 $\iota(|z|)\iota(|w|) = \iota(|z|\,|w|)$와 (가)를 쓰면
$$
\begin{aligned}
zw &= \iota(|z|)\iota(|w|)\exp(i\theta)\exp(i\varphi) \\
&= \iota(|z|\,|w|) \exp(i(\theta + \varphi))
\end{aligned}
$$
이다. $0 < |z|$이고 $0 < |w|$이므로 순서 성질의 (4)의 (i)과 [[real-number-arithmetic]]의 (K9)에 의해 $0 = 0 \cdot |w| < |z|\,|w|$이고, (3)에 의해 $\theta + \varphi \in \arg(zw)$이다.

역수. [[field|가역원과 체]]의 (1)에 의해 $\mathbb{C}^{\times}$는 아벨군이고 $(ab)^{-1} = b^{-1}a^{-1} = a^{-1}b^{-1}$이다. 복소수체의 (2)의 (i)에 의해 $\iota(|z|)^{-1} = \iota(|z|^{-1})$이고, 덧셈 법칙의 (2)에 의해 $\exp(i\theta)^{-1} = \exp(-(i\theta))$이다. 환의 기본 성질의 (2)와 복소수체의 (2)의 (i)에 의해 $-(i\,\iota(\theta)) = i\,(-\iota(\theta)) = i\,\iota(-\theta)$이므로 $z^{-1} = \iota(|z|^{-1})\exp(i(-\theta))$이다. $0 < |z|^{-1}$이므로 (3)에 의해 $-\theta \in \arg(z^{-1})$이다.

몫. $z / w = z w^{-1}$이고, 방금 보인 것에서 $-\varphi \in \arg(w^{-1})$이며 [[modulus-of-complex-number]]의 (4)에 의해 $|w^{-1}| = |w|^{-1}$이다. 곱의 경우를 $z$와 $w^{-1}$에 쓰면 $z / w = \iota(|z|\,|w|^{-1})\exp(i(\theta + (-\varphi)))$이고, $|z|\,|w|^{-1} = |z| / |w|$, $\theta + (-\varphi) = \theta - \varphi$이다. $0 < |z| / |w|$이므로 (3)에 의해 $\theta - \varphi \in \arg(z / w)$이다.

켤레. 켤레의 (2)의 곱, (4)의 $\overline{\iota(|z|)} = \iota(|z|)$, 덧셈 법칙의 (5)의 $\overline{\exp(i\theta)} = \exp(-i\theta)$와 역수의 경우의 $-(i\,\iota(\theta)) = i\,\iota(-\theta)$에 의해 $\overline{z} = \iota(|z|)\exp(i(-\theta))$이다. $0 < |z|$이므로 (3)에 의해 $-\theta \in \arg\overline{z}$이다.

**6의 증명.** [[complex-exponential-function]]의 (3)에 의해 $\exp(i \cdot 0) = \exp(0) = 1$이고, 주기성의 (1)에 의해 $\exp(i\pi) = -1$, $\exp(i\pi / 2) = i$, $\exp(3\pi i / 2) = -i$이다. 복소수체의 (2)의 (i)와 환의 기본 성질의 (2), (6)에 의해 실수 $t$에서 $\iota(t) = \iota(-t)(-1)$이고 $\iota(t)i = \iota(-t)(-i)$이다.
- $0 < x$이면 $\iota(x) = \iota(x)\exp(i \cdot 0)$이다.
- $x < 0$이면 순서 성질의 (3)의 (ii)에 의해 $0 < -x$이고 $\iota(x) = \iota(-x)\exp(i\pi)$이다.
- $0 < b$이면 $\iota(b)i = \iota(b)\exp(i\pi / 2)$이다.
- $b < 0$이면 $0 < -b$이고 $\iota(b)i = \iota(-b)\exp(3\pi i / 2)$이다.

각 경우 앞의 인수가 양의 실수이므로 (3)에 의해 차례로 $0$, $\pi$, $\pi / 2$, $3\pi / 2$가 편각이고, (2)에 의해 편각의 집합은 적은 대로이다. [[definition-of-pi|원주율]]의 (4)에 의해 $0 < \pi$이므로 순서 성질의 (8)에 의해 $0 < \pi / 2 < \pi$이고, $3\pi / 2 = \pi + \pi / 2$와 $2\pi = 3\pi / 2 + \pi / 2$에 순서 성질의 (2)의 (ii)를 써서 $\pi < 3\pi / 2 < 2\pi$이며 $0 \le 0 < 2\pi$이다. 따라서 네 수는 $[0, 2\pi)$에 있고, (1)에 의해 각각이 $[0, 2\pi)$ 안의 하나뿐인 편각이다. $\blacksquare$
:::

## 예시와 반례

:::example[−3√3 + 3i 의 편각]
$z = -3\sqrt{3} + 3i$이면 $(3\sqrt{3})^2 + 3^2 = 27 + 9 = 36$이므로 [[square-root-exists]]의 (1)에 의해 $\sqrt{3}\sqrt{3} = 3$이고 $6 \cdot 6 = 36$이므로 $|z| = 6$입니다. 그래서 (4)에 의해 $\theta$가 편각인 것은 정확히 $\cos\theta = -\sqrt{3}/2$이고 $\sin\theta = 1/2$일 때입니다. $\theta = 5\pi / 6 = \pi / 3 + \pi / 2$로 두면 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)와 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\cos(5\pi / 6) = -\sin(\pi / 3) = -\sqrt{3}/2$, $\sin(5\pi / 6) = \cos(\pi / 3) = 1/2$입니다. 따라서 $z = 6\exp(5\pi i / 6)$이고, $0 \le 5\pi / 6 < 2\pi$이므로 $5\pi / 6$이 $[0, 2\pi)$ 안의 편각이며, (2)에 의해 $\arg z = 5\pi / 6 + 2\pi\mathbb{Z}$입니다.
:::

:::example[i 와 −1 의 곱과 몫]
(6)에 의해 $\pi / 2 \in \arg i$이고 $\pi \in \arg(-1)$입니다. (5)에 의해 $\pi / 2 + \pi = 3\pi / 2 \in \arg(i \cdot (-1))$이고 $\pi / 2 - \pi = -\pi / 2 \in \arg(i / (-1))$입니다. 실제로 $i \cdot (-1) = -i$이고 $i / (-1) = -i$이며, (6)에 의해 $\arg(-i) = 3\pi / 2 + 2\pi\mathbb{Z}$에 $3\pi / 2$와 $-\pi / 2 = 3\pi / 2 - 2\pi$가 모두 들어 있습니다.
:::

:::counterexample[구간 안의 편각끼리 더하면 구간을 벗어날 수 있는 예]
$z = w = -i$이면 (6)에 의해 두 수의 $[0, 2\pi)$ 안의 편각은 $3\pi / 2$입니다. 곱 $zw = (-i)(-i) = -1$의 $[0, 2\pi)$ 안의 편각은 $\pi$인데, 두 편각의 합은 $3\pi$입니다. (5)는 $3\pi \in \arg(-1)$을 말할 뿐이고 실제로 $3\pi = \pi + 2\pi$입니다. 그래서 "곱의 $[0, 2\pi)$ 안의 편각은 두 수의 $[0, 2\pi)$ 안의 편각의 합"은 이 경우 틀립니다. $z = w = i$이면 합 $\pi$가 $[0, 2\pi)$에 있어 맞습니다.
:::

:::counterexample[r 이 음수이면 θ 가 편각이 아닌 예]
$-2 = (-2)\exp(i \cdot 0)$이지만 $0$은 $-2$의 편각이 아닙니다. (6)에 의해 $\arg(-2) = \pi + 2\pi\mathbb{Z}$이고, $0 = \pi + 2\pi k$인 정수 $k$가 있다면 $k = -1/2$이어야 하는데, $-1 < -1/2 < 0$인 정수는 없기 때문입니다([[prime-number]]의 (Z1)). (3)이 $r$을 양수로 둔 까닭이 이것입니다. 앞의 인수를 $|-2| = 2$로 바꾸면 $-2 = 2\exp(i\pi)$가 극형식입니다.
:::

## 확인 질문

:::check[$z \ne 0$이고 $\theta \in \arg z$이면 $-z$의 편각 하나는 무엇인가?]
$-z = (-1)z$이고 (6)에 의해 $\pi \in \arg(-1)$이므로, (5)에 의해 $\theta + \pi \in \arg(-z)$입니다. 따라서 $\arg(-z) = \theta + \pi + 2\pi\mathbb{Z}$입니다.
:::

:::check[$|z| = 4$이고 $7\pi / 6 \in \arg z$인 복소수 $z$는 무엇인가?]
(4)에 의해 $z = 4(\cos(7\pi / 6) + i\sin(7\pi / 6))$입니다. $7\pi / 6 = \pi / 6 + \pi$이므로 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)와 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\cos(7\pi / 6) = -\sqrt{3}/2$, $\sin(7\pi / 6) = -1/2$이고, $z = -2\sqrt{3} - 2i$입니다.
:::
