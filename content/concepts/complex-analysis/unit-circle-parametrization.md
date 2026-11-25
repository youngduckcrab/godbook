---
title: 원 𝕋 의 매개화
title_en: Parametrization of the Circle Group
aliases: [원 T, circle group, 절댓값이 1 인 복소수, exp(iθ) 로 나타내기]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 절댓값이 1 인 복소수 전체 𝕋 는 곱셈군 ℂ^× 의 부분군이다. 모든 실수 θ 에서 exp(iθ) 는 𝕋 에 있고, 𝕋 의 모든 원소는 exp(iθ) 꼴이며, 실수 a 마다 a ≤ θ < a + 2π 인 그런 θ 는 정확히 하나이다. 실수 θ 를 exp(iθ) 로 보내는 함수는 [0, 2π) 에서 𝕋 로의 전단사이고, 덧셈군 (ℝ, +) 에서 𝕋 로의 전사인 준동형이며 핵은 2πℤ 이다.
requires: [prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, interval, injective-surjective-bijective, archimedean-property, ring-basic-properties, field, group, subgroup, subgroup-criteria, group-homomorphism, homomorphism-kernel-and-image, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, definition-of-pi, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (xiii) (p.165)와 그 증명 (p.167); 11.4.4절 Exercises, Exercise 11.4.3 (p.168)
    checked: original
    note: "출처의 Proposition 11.4.2 (xiii)(p.165)은 x 를 e^{ix} 로 보내는 함수가 [0, 2π) 에서 |z| = 1 인 z 전체로의 전단사라는 것이고, 이 항목의 (4)에서 a = 0 으로 둔 것이다. 출처의 증명(p.167)은 단사를 'e^{i(x−y)} = 1, meaning x − y is a multiple of 2π' 로 보이고(이 항목의 (5)와 같은 길), 전사는 a, b ≥ 0 이면 사잇값 정리로 cos x = a 인 x ∈ [0, π/2] 를 잡아 b = sin x 를 얻고, a > 0, b ≤ 0 이면 [−π/2, 0) 에서 같은 논법과 주기로, a < 0 인 경우는 'Multiplying by −1 is the same as multiplying by e^{iπ} or e^{−iπ}. So we can always assume that a ≥ 0 (details are left as an exercise)' 라고 적고 Exercise 11.4.3(p.168)으로 남긴다. 이 항목의 (3)은 출처의 첫째 경우와 같은 계산을 원주율 항목의 (6)(cos 를 [0, π/2] 로 제한한 전단사)으로 하고, 나머지 세 경우는 −iz, −z, iz 를 곱해 첫째 경우로 옮긴 뒤 i, −1, −i 를 exp(iπ/2), exp(iπ), exp(3πi/2) 로 쓴다. 구간 [a, a + 2π) 로 넓힌 꼴과 (1)의 부분군, (6)의 준동형은 출처의 이 명제에 없다. 출처는 이 집합을 'the unit circle' 이라 부르고(p.165 'the values lie on the unit circle'), 이 항목은 이 이름을 쓰지 않는다. (2)는 출처가 p.165 에서 'e^{ix} is unimodular for real x' 라고 적는 것과 같다. 출처의 다른 곳(11.6절 Exercise 11.6.6, p.177)은 이 집합을 S¹ 로 쓴다. 확인 질문 '$z = \\exp(i\\theta)$이면 $\\overline{z}$와 $-z$를 각각 실수 $\\varphi$로 $\\exp(i\\varphi)$ 꼴로 쓰면 무엇인가?'의 켤레는 출처가 p.165 에서 실수 x 에 대해 e^{ix} 의 켤레가 e^{−ix} 라고 계산하는 것과 같고, −z 는 출처가 p.167 에서 'Multiplying by −1 is the same as multiplying by e^{iπ} or e^{−iπ}' 라고 적는 것과 같은 발상이다. 확인 질문 '$\\exp(i\\theta) = -i$이고 $-\\pi \\le \\theta < \\pi$인 실수 $\\theta$는 무엇인가?'에서 −π/2 와 3π/2 를 오가는 것은 출처의 증명(p.167)이 [−π/2, 0) 의 x 를 주기로 [3π/2, 2π) 로 옮기는 것과 같은 계산이다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers 의 소절 The Circle Group and the Roots of Unity, Proposition 4.24 (p.52); 4.5절 Exercises, 연습문제 3(m), 42 (p.56, 58); 3.5절 Exercises, 연습문제 39 (p.42); 11.1절 Group Homomorphisms, Example 11.3 (p.134), Example 11.7 (p.135)
    checked: original
    note: "기호 𝕋 와 이름 circle group 은 Judson 의 것이다(p.52 'the circle group, T = {z ∈ C : |z| = 1}'). Proposition 4.24(p.52)는 'The circle group is a subgroup of C∗' 이고 출처는 'a direct result of Proposition 4.20' 이라고만 적으며, 3.5절 연습문제 39(p.42)와 4.5절 연습문제 42(p.58)가 그 증명을 묻는다. 이 항목의 (1)이 그것이다. Example 11.3(p.134)은 θ 를 cos θ + i sin θ 로 보내는 ϕ : ℝ → T 가 준동형임을 덧셈정리로 보이고, Example 11.7(p.135)은 그 ϕ 를 ℝ → C∗ 로 본 것의 핵이 {2πn : n ∈ Z} 라고 증명 없이 적는다. (6)은 같은 함수가 T 로의 전사라는 것을 더한 것이다. 예시 'z = 1/2 − (√3/2)i 를 exp(iθ) 로 쓰기'의 수는 4.5절 연습문제 3(m)(p.56)이 C∗ 에서 생성하는 부분군을 묻는 (1 + √3 i)/2 의 켤레이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(드무아브르의 음의 지수 꼴에 경계값, 'Lebl 에 이름이 없다' 를 두 권 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 곱셈군 $\mathbb{C}^{\times}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 코사인과 사인은 [[cosine-and-sine|코사인과 사인]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이고, $2\pi\mathbb{Z}$, 덧셈군 $(\mathbb{R}, +)$, 실수 $x$에서의 값이 $\exp(ix)$인 군 준동형 $E : \mathbb{R} \to \mathbb{C}^{\times}$는 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 것이다. 부분군은 [[subgroup|부분군]], 군 준동형과 핵 $\operatorname{Ker}$는 [[group-homomorphism|군 준동형]]과 [[homomorphism-kernel-and-image|준동형의 핵과 상]], 전사와 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]], 구간의 기호는 [[interval]]의 것이다. 실수 $\theta$에 대하여 $\exp(i\theta)$는 $\exp(i\,\iota(\theta))$이고, 실수 $\theta_0$에 대하여 $\theta_0 + 2\pi\mathbb{Z} = \{\theta_0 + 2\pi k : k \in \mathbb{Z}\}$로 쓴다.

**원 $\mathbb{T}$.** 절댓값이 $1$인 복소수 전체의 집합을
$$
\mathbb{T} = \{z \in \mathbb{C} : |z| = 1\}
$$
로 쓰고 **원 $\mathbb{T}$**(circle group)라 한다. 글자 $\mathbb{T}$는 선형사상의 이름으로 쓰는 $T$와 다른 글자이다.

다음이 성립한다. 아래에서 $z$는 복소수이고 $\theta$, $\theta'$, $\theta_0$, $a$는 실수이다.

1. (부분군) $\mathbb{T}$는 곱셈군 $\mathbb{C}^{\times}$의 부분군이고 아벨군이다. $1$, $-1$, $i$, $-i$는 $\mathbb{T}$의 원소이고, $z \in \mathbb{T}$이면 $z^{-1} = \overline{z}$이다. 또 $z \in \mathbb{T}$인 것은 정확히 $(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2 = 1$일 때이다.
2. ($\exp(i\theta)$의 절댓값) 모든 실수 $\theta$에서 $\exp(i\theta) \in \mathbb{T}$이다.
3. (실수부와 허수부가 $0$ 이상인 원소) $z \in \mathbb{T}$이고 $0 \le \operatorname{Re} z$, $0 \le \operatorname{Im} z$이면, $0 \le \theta \le \pi / 2$이고 $\exp(i\theta) = z$인 실수 $\theta$가 정확히 하나 있다.
4. (매개화) $\mathbb{T}$의 모든 원소 $z$에 대하여 $\exp(i\theta) = z$인 실수 $\theta$가 있다. 또 모든 실수 $a$에 대하여, 그런 $\theta$ 가운데 $a \le \theta < a + 2\pi$인 것은 정확히 하나이다. 특히 $[0, 2\pi)$의 원소 $\theta$에서의 값이 $\exp(i\theta)$인 함수 $[0, 2\pi) \to \mathbb{T}$는 전단사이다.
5. (같은 값을 주는 실수) $\exp(i\theta) = \exp(i\theta')$인 것은 정확히 $\theta - \theta' \in 2\pi\mathbb{Z}$일 때이다. 따라서 $z = \exp(i\theta_0)$이면 $\{\theta \in \mathbb{R} : \exp(i\theta) = z\} = \theta_0 + 2\pi\mathbb{Z}$이다.
6. (준동형) 공역을 $\mathbb{T}$로 둔 함수 $E : \mathbb{R} \to \mathbb{T}$, 곧 실수 $x$에서의 값이 $\exp(ix)$인 함수는 덧셈군 $(\mathbb{R}, +)$에서 군 $\mathbb{T}$로의 전사인 군 준동형이고 $\operatorname{Ker} E = 2\pi\mathbb{Z}$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$, the operations of the field $\mathbb{C}$, the multiplicative group $\mathbb{C}^{\times}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the conjugate $\overline{z}$, the modulus, and the complex exponential function are those of their entries. Cosine and sine are those of the entry on cosine and sine, and $\pi$ is that of the entry on the number π; $2\pi\mathbb{Z}$, the additive group $(\mathbb{R}, +)$, and the group homomorphism $E : \mathbb{R} \to \mathbb{C}^{\times}$ whose value at a real number $x$ is $\exp(ix)$ are those of the entry on periodicity of the trigonometric functions. Subgroups, group homomorphisms and kernels $\operatorname{Ker}$, surjections and bijections, and the notation for intervals are those of their entries. For a real number $\theta$, $\exp(i\theta)$ means $\exp(i\,\iota(\theta))$, and for a real number $\theta_0$ we write $\theta_0 + 2\pi\mathbb{Z} = \{\theta_0 + 2\pi k : k \in \mathbb{Z}\}$.

**The circle group $\mathbb{T}$.** The set of all complex numbers of modulus $1$ is written
$$
\mathbb{T} = \{z \in \mathbb{C} : |z| = 1\}
$$
and called the **circle group** $\mathbb{T}$. The letter $\mathbb{T}$ is different from the letter $T$ used for linear maps.

The following hold. Below, $z$ is a complex number and $\theta$, $\theta'$, $\theta_0$, $a$ are real numbers.

1. (Subgroup) $\mathbb{T}$ is a subgroup of the multiplicative group $\mathbb{C}^{\times}$ and is abelian. The numbers $1$, $-1$, $i$, $-i$ belong to $\mathbb{T}$, and if $z \in \mathbb{T}$ then $z^{-1} = \overline{z}$. Moreover, $z \in \mathbb{T}$ if and only if $(\operatorname{Re} z)^2 + (\operatorname{Im} z)^2 = 1$.
2. (Modulus of $\exp(i\theta)$) $\exp(i\theta) \in \mathbb{T}$ for every real number $\theta$.
3. (Elements with nonnegative real and imaginary parts) If $z \in \mathbb{T}$, $0 \le \operatorname{Re} z$ and $0 \le \operatorname{Im} z$, then there is exactly one real number $\theta$ with $0 \le \theta \le \pi / 2$ and $\exp(i\theta) = z$.
4. (Parametrization) For every element $z$ of $\mathbb{T}$ there is a real number $\theta$ with $\exp(i\theta) = z$. Moreover, for every real number $a$, exactly one such $\theta$ satisfies $a \le \theta < a + 2\pi$. In particular, the function $[0, 2\pi) \to \mathbb{T}$ whose value at an element $\theta$ of $[0, 2\pi)$ is $\exp(i\theta)$ is a bijection.
5. (Real numbers giving the same value) $\exp(i\theta) = \exp(i\theta')$ if and only if $\theta - \theta' \in 2\pi\mathbb{Z}$. Hence, if $z = \exp(i\theta_0)$, then $\{\theta \in \mathbb{R} : \exp(i\theta) = z\} = \theta_0 + 2\pi\mathbb{Z}$.
6. (Homomorphism) The function $E : \mathbb{R} \to \mathbb{T}$ with codomain $\mathbb{T}$, that is, the function whose value at a real number $x$ is $\exp(ix)$, is a surjective group homomorphism from the additive group $(\mathbb{R}, +)$ to the group $\mathbb{T}$, and $\operatorname{Ker} E = 2\pi\mathbb{Z}$.
:::

## 직관

복소수 $z$를 평면의 점 $(\operatorname{Re} z, \operatorname{Im} z)$로 보면, $\mathbb{T}$는 $a^2 + b^2 = 1$인 점 $(a, b)$ 전체입니다. 그래서 이 집합을 "원"이라 부르지만, 이 항목은 그 이름만 쓰고 곡선의 길이나 각도는 다루지 않습니다. 이 항목이 말하는 것은 $\mathbb{T}$의 원소가 모두 $\exp(i\theta)$ 꼴이고, 같은 원소를 주는 $\theta$들은 서로 $2\pi$의 정수배만큼 떨어져 있다는 것입니다.

달력의 날짜와 요일에 비유할 수 있습니다. 날짜(실수 $\theta$)마다 요일($\mathbb{T}$의 원소 $\exp(i\theta)$)이 하나 정해지고(2), 모든 요일이 어느 날짜에 나오며(4의 앞부분), 요일이 같은 두 날짜는 $7$일의 정수배만큼 떨어져 있고(5), 어느 날부터 세든 이어진 $7$일 안에는 각 요일이 정확히 한 번 나옵니다(4의 뒷부분, $[a, a + 2\pi)$). 비유가 맞지 않는 곳도 있습니다. 날짜는 정수이고 요일은 일곱 개뿐이지만, $\theta$는 모든 실수이고 $\mathbb{T}$의 원소는 무한히 많습니다.

증명의 중심은 (3)입니다. 실수부 $a$와 허수부 $b$가 모두 $0$ 이상이면, [[definition-of-pi|원주율]]의 (6)에 의해 $[0, \pi / 2]$에서 $\cos\theta = a$인 $\theta$가 하나 정해지고, 그 $\theta$에서 $\sin\theta$도 $0$ 이상이므로 제곱이 $b^2$인 $0$ 이상의 수는 $b$뿐이라는 것에서 $\sin\theta = b$입니다. 나머지 경우는 $z$에 $-i$, $-1$, $i$ 가운데 하나를 곱해 실수부와 허수부가 $0$ 이상인 원소로 옮깁니다. [[complex-number]]의 (4)에 의해 $i$를 곱하면 실수부와 허수부가 $(a, b)$에서 $(-b, a)$로 바뀌기 때문입니다. 곱한 수를 되돌리는 $i$, $-1$, $-i$가 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에서 $\exp(i\pi / 2)$, $\exp(i\pi)$, $\exp(3\pi i / 2)$이므로, $\theta$에 $\pi / 2$의 배수를 더하면 됩니다.

## 증명

:::idea
실수부와 허수부가 $0$ 이상인 원소는 $\cos$의 $[0, \pi / 2]$ 위의 전단사와 $0$ 이상인 제곱근의 유일성으로 $\exp(i\theta)$ 꼴이 된다. 나머지 원소는 $-i$, $-1$, $i$를 곱해 그 경우로 옮기고, 마지막으로 아르키메데스 성질로 $\theta$에서 $2\pi$의 정수배를 빼서 $[a, a + 2\pi)$에 넣는다. 유일성과 핵은 주기성의 (3′)과 (3)이다.
:::

:::hint
$z = a + bi$이고 $a < 0 \le b$이면 $-iz$의 실수부와 허수부는 무엇입니까? [[complex-number]]의 (4)의 $\operatorname{Re}(zi) = -\operatorname{Im} z$, $\operatorname{Im}(zi) = \operatorname{Re} z$를 보세요.
:::

:::hint
$[a, a + 2\pi)$의 두 원소의 차는 $-2\pi$보다 크고 $2\pi$보다 작습니다. 그 차가 $2\pi k$이면 정수 $k$는 무엇이어야 합니까?
:::

:::proof
"원주율의 (6)"처럼 쓴 것은 [[definition-of-pi]], "코사인과 사인의 (1)"은 [[cosine-and-sine]], "주기성의 (3′)"은 [[periodicity-of-trigonometric-functions]], "덧셈 법칙의 (1)"은 [[addition-law-of-complex-exponential]], "복소수체의 (2)"는 [[complex-field]], "복소수의 (4)"는 [[complex-number]], "절댓값의 (1)"은 [[modulus-of-complex-number]], "순서 성질의 (7)"은 [[order-properties-of-reals]], "실수의 거듭제곱의 (6)"은 [[power-of-a-real-number]]의 번호이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 묶는 곳과 분배하는 곳은 체의 조건에 의하고, 부호를 옮기는 곳은 [[ring-basic-properties|환의 기본 성질]]의 (2)와 (6)에 의한다. 실수의 거듭제곱의 (1)에 의해 실수 $x$에서 $x^2 = xx$이다. 실수 $s$, $t$에서 복소수체의 (2)와 분배법칙에 의해 $i\,\iota(s + t) = i\,\iota(s) + i\,\iota(t)$이므로 덧셈 법칙의 (1)에 의해
$$
\exp(i(s + t)) = \exp(is)\exp(it)
$$
이다. 이것을 (가)라 부른다.

**1의 증명.** $z \in \mathbb{T}$이면 $|z| = 1 \ne 0$이므로 절댓값의 (1)에 의해 $z \ne 0$이고, 복소수체의 (1)에 의해 $z \in \mathbb{C}^{\times}$이다. 따라서 $\mathbb{T} \subseteq \mathbb{C}^{\times}$이다. [[subgroup-criteria|부분군 판정법]]의 (1)의 세 조건을 확인한다. 군 $\mathbb{C}^{\times}$의 항등원은 $1$이고 $z$의 역원은 체의 역원 $z^{-1}$이다([[field|가역원과 체]]의 (1)). (i) 절댓값의 (5)와 [[absolute-value]]의 (1)에 의해 $|1| = |\iota(1)| = 1$이므로 $1 \in \mathbb{T}$이다. (ii) $z, w \in \mathbb{T}$이면 절댓값의 (3)에 의해 $|zw| = |z|\,|w| = 1$이다. (iii) $z \in \mathbb{T}$이면 절댓값의 (4)에 의해 $|z^{-1}| = |z|^{-1} = 1$이다. 따라서 $\mathbb{T}$는 $\mathbb{C}^{\times}$의 부분군이다. 복소수체의 (1)에 의해 $\mathbb{C}^{\times}$는 아벨군이므로 [[subgroup|부분군]]의 (7)에 의해 $\mathbb{T}$는 아벨군이다.

절댓값의 (2)의 $|-z| = |z|$와 (5)의 $|i| = 1$에 의해 $|-1| = |1| = 1$, $|i| = 1$, $|-i| = |i| = 1$이다. $z \in \mathbb{T}$이면 실수의 거듭제곱의 (2)의 (iv)에 의해 $|z|^2 = 1^2 = 1$이므로 절댓값의 (4)에 의해 $z^{-1} = \iota\bigl((|z|^2)^{-1}\bigr)\overline{z} = \iota(1)\overline{z} = \overline{z}$이다.

마지막 문장. 절댓값의 (1)에 의해 $|z|^2 = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$이다. $|z| = 1$이면 $|z|^2 = 1$이다. 거꾸로 $|z|^2 = 1 = 1^2$이면, 절댓값의 (1)의 $0 \le |z|$와 $0 \le 1$에 의해 실수의 거듭제곱의 (6)의 (iii)을 $n = 2$로 써서 $|z| = 1$이다.

**2의 증명.** 덧셈 법칙의 (5)에 의해 $|\exp(i\theta)| = 1$이다.

**3의 증명.** $a = \operatorname{Re} z$, $b = \operatorname{Im} z$로 두면 $0 \le a$, $0 \le b$이고 (1)에 의해 $a^2 + b^2 = 1$이다. 순서 성질의 (5)의 (iii)에 의해 $0 \le b^2$이므로 순서 성질의 (2)의 (i)에 의해 $a^2 = a^2 + 0 \le a^2 + b^2 = 1 = 1 \cdot 1$이고, $0 \le a$와 $0 \le 1$(순서 성질의 (5)의 (ii))에 의해 순서 성질의 (7)의 (iii)에서 $a \le 1$이다. 따라서 $a \in [0, 1]$이다.

원주율의 (6)에 의해 $\cos$를 $[0, \pi / 2]$로 제한하고 공역을 $[0, 1]$로 둔 함수는 전단사이다. 전사이므로 $\cos\theta = a$인 $\theta \in [0, \pi / 2]$가 있고, 단사이므로 그런 $\theta$는 하나뿐이다. 코사인과 사인의 (4)에 의해
$$
\begin{aligned}
(\sin\theta)^2 &= 1 - (\cos\theta)^2 \\
&= 1 - a^2 = b^2
\end{aligned}
$$
이다. $0 \le \theta$이므로 [[real-order-axioms]]의 $\le$의 정의에 의해 $\theta = 0$이거나 $0 < \theta$이다. $\theta = 0$이면 코사인과 사인의 (2)에 의해 $\sin\theta = 0$이고, $0 < \theta \le \pi / 2$이면 원주율의 (3)의 (i)에 의해 $0 < \sin\theta$이다. 어느 경우든 $0 \le \sin\theta$이고 $0 \le b$이므로 순서 성질의 (7)의 (iv)에 의해 $\sin\theta = b$이다. 따라서 코사인과 사인의 (1)과 복소수체의 (4)에 의해
$$
\begin{aligned}
\exp(i\theta) &= \cos\theta + i\sin\theta \\
&= a + bi = z
\end{aligned}
$$
이다. 유일성: $\theta' \in [0, \pi / 2]$이고 $\exp(i\theta') = z$이면 코사인과 사인의 정의에 의해 $\cos\theta' = \operatorname{Re} z = a = \cos\theta$이고, 위의 함수가 단사이므로 $\theta' = \theta$이다.

**4의 증명.** 존재. $z \in \mathbb{T}$, $a_1 = \operatorname{Re} z$, $b_1 = \operatorname{Im} z$라 하자. 순서 성질의 (1)의 (iii)에 의해 $a_1$은 $0 \le a_1$이거나 $a_1 < 0$이고 $b_1$도 그렇다. 복소수의 (4)와 곱셈의 교환법칙에 의해 $\operatorname{Re}(iz) = -b_1$, $\operatorname{Im}(iz) = a_1$이고, 복소수체의 (1)의 $-u = (-\operatorname{Re} u, -\operatorname{Im} u)$에 의해 $\operatorname{Re}(-iz) = \operatorname{Re}(-(iz)) = b_1$, $\operatorname{Im}(-iz) = -a_1$, $\operatorname{Re}(-z) = -a_1$, $\operatorname{Im}(-z) = -b_1$이다. 네 경우에 $m$과 $w$를 다음과 같이 정한다.

| 경우 | $m$ | $w$ | $\operatorname{Re} w$ | $\operatorname{Im} w$ |
|---|---|---|---|---|
| $0 \le a_1$, $0 \le b_1$ | $0$ | $z$ | $a_1$ | $b_1$ |
| $a_1 < 0$, $0 \le b_1$ | $1$ | $-iz$ | $b_1$ | $-a_1$ |
| $a_1 < 0$, $b_1 < 0$ | $2$ | $-z$ | $-a_1$ | $-b_1$ |
| $0 \le a_1$, $b_1 < 0$ | $3$ | $iz$ | $-b_1$ | $a_1$ |

순서 성질의 (3)의 (ii)에 의해 $a_1 < 0$이면 $0 < -a_1$이고 $b_1 < 0$이면 $0 < -b_1$이므로, 네 경우 모두 $0 \le \operatorname{Re} w$이고 $0 \le \operatorname{Im} w$이다. (1)에 의해 $\mathbb{T}$는 곱에 닫혀 있고 $-1$, $i$, $-i$를 포함하므로 $w \in \mathbb{T}$이다. (3)에 의해 $\exp(it) = w$인 $t \in [0, \pi / 2]$가 있다.

$c_0 = 1$, $c_1 = i$, $c_2 = -1$, $c_3 = -i$로 두면 네 경우 모두 $c_m w = z$이다. 복소수체의 (5)의 $ii = -1$과 환의 기본 성질의 (6)의 $(-1)u = -u$, $(-1)(-1) = 1$에 의해 $i(-i) = (-1)(ii) = (-1)(-1) = 1$, $(-1)(-z) = (-1)(-1)z = z$, $(-i)(iz) = (-1)(ii)z = z$이기 때문이다. 한편 [[complex-exponential-function]]의 (3)에 의해 $\exp(i \cdot 0) = \exp(0) = 1$이고, 주기성의 (1)에 의해 $\exp(i\pi / 2) = i$, $\exp(i\pi) = -1$, $\exp(3\pi i / 2) = -i$이다. 실수의 계산으로 $0 \cdot \pi / 2 = 0$, $1 \cdot \pi / 2 = \pi / 2$, $2 \cdot \pi / 2 = \pi$, $3 \cdot \pi / 2 = 3\pi / 2$이므로 네 경우 모두 $\exp(i\,m\pi / 2) = c_m$이다. 따라서 $\theta_1 = t + m\pi / 2$로 두면 (가)에 의해
$$
\begin{aligned}
\exp(i\theta_1) &= \exp(it)\exp(i\,m\pi / 2) \\
&= w\,c_m = z
\end{aligned}
$$
이다.

구간 $[a, a + 2\pi)$에 넣기. 원주율의 (4)에 의해 $0 < \pi$이므로 $0 < 2\pi$이다. [[archimedean-property|아르키메데스 성질]]의 (4)를 $s = (\theta_1 - a)(2\pi)^{-1}$에 쓰면 $n - 1 \le s < n$인 정수 $n$이 있다. $k = n - 1$로 두면 $k \le s < k + 1$이고, 순서 성질의 (4)의 (i), (iii)에 의해 각 변에 $2\pi$를 곱해 $2\pi k \le \theta_1 - a < 2\pi k + 2\pi$이며, 순서 성질의 (2)의 (ii)에 의해 각 변에 $a - 2\pi k$를 더해 $a \le \theta_1 - 2\pi k < a + 2\pi$이다. $\theta = \theta_1 - 2\pi k = \theta_1 + 2\pi(-k)$로 두면 주기성의 (2)에 의해 $\exp(i\theta) = \exp(i\theta_1) = z$이다.

유일성. $\theta$와 $\theta''$이 모두 $[a, a + 2\pi)$에 있고 $\exp(i\theta) = \exp(i\theta'') = z$라 하자. 주기성의 (3′)에 의해 $\theta - \theta'' = 2\pi k$인 정수 $k$가 있다. $\theta < a + 2\pi$이고 순서 성질의 (3)의 (iii)에 의해 $-\theta'' \le -a$이므로 순서 성질의 (2)의 (iv)에 의해 $\theta - \theta'' < 2\pi$이다. $\theta$와 $\theta''$을 바꾸어 같은 방법으로 $\theta'' - \theta < 2\pi$, 곧 순서 성질의 (3)의 (iii)에 의해 $-2\pi < \theta - \theta''$이다. 따라서 $-2\pi < 2\pi k < 2\pi$이고, 순서 성질의 (6)의 (iv)에 의해 $-1 < k < 1$이다. 순서 성질의 (10)에 의해 이것은 정수의 부등식이고, [[prime-number]]의 (Z1)에 의해 $-1 + 1 \le k$이고 $k + 1 \le 1$이다. 곧 $0 \le k$이고, 순서 성질의 (2)의 (ii)에 의해 $k \le 0$이므로 순서 성질의 (1)의 (ii)에 의해 $k = 0$이다. 따라서 $\theta = \theta''$이다.

끝으로 (2)에 의해 $[0, 2\pi)$의 원소 $\theta$에서의 값 $\exp(i\theta)$는 $\mathbb{T}$에 있으므로 함수 $[0, 2\pi) \to \mathbb{T}$가 정해진다. $a = 0$으로 둔 위의 존재가 이 함수가 전사라는 것이고, 유일성이 단사라는 것이다.

**5의 증명.** 앞 문장은 주기성의 (3′)이다. $z = \exp(i\theta_0)$이면, 실수 $\theta$가 $\exp(i\theta) = z$를 만족하는 것은 앞 문장에 의해 정확히 $\theta - \theta_0 = 2\pi k$인 정수 $k$가 있을 때, 곧 $\theta = \theta_0 + 2\pi k$일 때이다.

**6의 증명.** 주기성의 (6)에 의해 $E : \mathbb{R} \to \mathbb{C}^{\times}$는 군 준동형이고, (2)에 의해 그 값은 모두 $\mathbb{T}$에 있으며, (1)에 의해 $\mathbb{T}$는 $\mathbb{C}^{\times}$의 부분군이다. 따라서 [[group-homomorphism|군 준동형]]의 (5)의 (ii)에 의해 $E : \mathbb{R} \to \mathbb{T}$는 군 준동형이다. (4)에 의해 $\mathbb{T}$의 모든 원소가 $E$의 값이므로 $E : \mathbb{R} \to \mathbb{T}$는 전사이다. [[subgroup|부분군]]의 (1)에 의해 군 $\mathbb{T}$의 항등원은 $1$이므로 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 정의에 의해 $\operatorname{Ker} E = \{x \in \mathbb{R} : \exp(ix) = 1\}$이고, 주기성의 (3)에 의해 이것은 $2\pi\mathbb{Z}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[z = 1/2 − (√3/2)i 를 exp(iθ) 로 쓰기]
$z = 1/2 - (\sqrt{3}/2) i$이면 [[square-root-exists]]의 (1)의 $\sqrt{3}\sqrt{3} = 3$에 의해 $(1/2)^2 + (\sqrt{3}/2)^2 = 1/4 + 3/4 = 1$이므로 (1)에 의해 $z \in \mathbb{T}$입니다. 실수부가 $0$ 이상이고 허수부가 음수이므로 (4)의 증명의 넷째 경우이고, $w = iz$의 실수부는 $\sqrt{3}/2$, 허수부는 $1/2$입니다. [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\cos(\pi / 6) = \sqrt{3}/2$, $\sin(\pi / 6) = 1/2$이므로 $w = \exp(i\pi / 6)$이고, $\theta = \pi / 6 + 3\pi / 2 = 5\pi / 3$에서 $\exp(i\theta) = z$입니다. $0 \le 5\pi / 3 < 2\pi$이므로 이것이 (4)에서 $a = 0$일 때의 하나뿐인 $\theta$이고, (5)에 의해 $\exp(i\theta) = z$인 실수 전체는 $5\pi / 3 + 2\pi\mathbb{Z}$입니다.
:::

:::example[z = −1 에서 구간에 따라 달라지는 θ]
$z = -1$은 실수부가 음수이고 허수부가 $0$이므로 (4)의 증명의 둘째 경우입니다. $w = -iz = i = \exp(i\pi / 2)$이므로 $\theta_1 = \pi / 2 + \pi / 2 = \pi$입니다. $a = 0$이면 $\pi \in [0, 2\pi)$이므로 $\theta = \pi$입니다. $a = -\pi$이면 $\pi$는 $[-\pi, \pi)$에 들지 않고, $\pi - 2\pi = -\pi$가 그 구간에 드는 하나뿐인 $\theta$입니다. 하나뿐인 $\theta$는 구간을 정해야 정해집니다.
:::

:::counterexample[닫힌구간 [0, 2π] 에서는 θ 가 둘일 수 있는 예]
(4)의 구간은 오른쪽 끝을 뺀 $[a, a + 2\pi)$입니다. 닫힌구간 $[0, 2\pi]$로 바꾸면 $z = 1$에서 [[complex-exponential-function]]의 (3)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(i \cdot 0) = 1 = \exp(2\pi i)$이므로, $[0, 2\pi]$ 안에서 $\exp(i\theta) = 1$인 $\theta$는 $0$과 $2\pi$ 둘입니다. 그래서 $[0, 2\pi]$에서 $\mathbb{T}$로의 함수는 단사가 아닙니다.
:::

## 확인 질문

:::check[$z = \exp(i\theta)$이면 $\overline{z}$와 $-z$를 각각 실수 $\varphi$로 $\exp(i\varphi)$ 꼴로 쓰면 무엇인가?]
(1)에 의해 $\overline{z} = z^{-1}$이고, [[addition-law-of-complex-exponential|덧셈 법칙]]의 (2)에 의해 $z^{-1} = \exp(-i\theta)$입니다. 또 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)의 $\cos(\theta + \pi) = -\cos\theta$, $\sin(\theta + \pi) = -\sin\theta$와 [[cosine-and-sine|코사인과 사인]]의 (1)에 의해 $-z = \exp(i(\theta + \pi))$입니다.
:::

:::check[$\exp(i\theta) = -i$이고 $-\pi \le \theta < \pi$인 실수 $\theta$는 무엇인가?]
[[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(3\pi i / 2) = -i$이므로 (5)에 의해 그런 $\theta$는 $3\pi / 2 + 2\pi k$ 꼴입니다. $3\pi / 2 - 2\pi = -\pi / 2$는 $[-\pi, \pi)$에 들므로, (4)에서 $a = -\pi$일 때의 하나뿐인 $\theta$는 $-\pi / 2$입니다.
:::
