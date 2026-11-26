---
title: 1 의 n제곱근
title_en: Roots of Unity
aliases: [1 의 거듭제곱근, 원시근, 원시 n제곱근, nth roots of unity, primitive root of unity]
kind: theorem
field: complex-analysis
msc: ["30", "20K01"]
level: undergrad
summary: 자연수 n 에서 zⁿ = 1 인 복소수 z 는 정확히 exp(2πik/n) (k = 0, 1, …, n − 1) 이고 이 n 개는 서로 다르다. 그 전체 μ_n 은 원 𝕋 의 부분군이고 ω = exp(2πi/n) 이 생성하는 위수 n 의 순환군이며 ℤ_n 과 동형이다. ω^k 가 μ_n 의 생성원(원시 n제곱근)인 것은 정확히 k 와 n 이 서로소일 때이고, 원시 n제곱근은 φ(n) 개이다. n ≥ 2 이면 1 의 n제곱근의 합은 0 이다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, greatest-common-divisor, euler-phi-function, finite-set, number-of-elements-is-unique, injective-surjective-bijective, integers-modulo-n, group-of-units-modulo-n, group, subgroup, power-in-a-group, cyclic-subgroup, order-of-an-element, order-of-a-power, group-isomorphism, classification-of-cyclic-groups, generators-of-zn, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-finite-sum, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, definition-of-pi, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates, unit-circle-parametrization, polar-form, de-moivre-formula]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "4.2절 Multiplicative Group of Complex Numbers 의 소절 The Circle Group and the Roots of Unity, 1 의 n제곱근과 원시근의 정의, Theorem 4.25 와 그 증명 (p.52), Example 4.26 (p.53); 4.4절 Reading Questions 4 (p.55); 4.5절 Exercises, 연습문제 20, 21, 40, 43 (p.57–58); 9.4절 Exercises, 연습문제 6, 13 (p.122); 3.2절 Definitions and Examples, Example 3.25 (p.38); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 3 (p.222); 23.1절 Field Automorphisms, Example 23.11 (p.296); 23.3절 Applications, Example 23.27 과 그 앞 문단 (p.303); 부록 B, 9.4.6 의 힌트 (p.325)"
    checked: original
    note: "출처(p.52)는 zⁿ = 1 인 복소수를 the nth roots of unity 라 부르고, Theorem 4.25 에서 그것이 cis(2kπ/n), k = 0, 1, …, n − 1 이고 T 의 위수 n 인 순환 부분군을 이룬다고 진술한다. 출처의 증명은 드무아브르 정리로 이 수들이 근임을 보이고, 서로 다르다는 것을 2kπ/n 이 [0, 2π) 의 서로 다른 수라는 것으로 보이며, 'The fact that these are all of the roots of the equation zⁿ = 1 follows from from Corollary 17.9, which states that a polynomial of degree n can have at most n roots' 라고 적고, 순환 부분군이라는 것은 연습문제(4.5절 연습문제 43, p.58)로 남긴다. 이 항목은 다항식의 근의 개수를 쓰지 않고, 극형식과 드무아브르 공식의 (4)로 zⁿ = 1 인 z 를 모두 구해 (1)을 증명하며, (2)의 순환군도 증명한다. 원시 n제곱근은 출처의 정의('A generator for the group of the nth roots of unity is called a primitive nth root of unity', p.52)와 같다. (3)의 동형은 9.4절 연습문제 6(p.122)이 묻는 것이고, 부록 B 의 힌트(p.325)는 k 를 cis(2kπ/n) 으로 보내라고 한다. Example 4.26(p.53)은 원시 8제곱근 ω, ω³, ω⁵, ω⁷ 을 적고, Reading Question 4(p.55)와 연습문제 20, 21(p.57)은 5제곱근과 6제곱근의 생성원과 원시근을 묻는다. 연습문제 40(p.58)은 −1 이 1 의 n제곱근인 n 을 묻는다. (5)의 μ₄ = {1, i, −1, −i} 는 Example 3.25(p.38)가 C∗ 의 부분군이라고 적는 H 이고, 출처는 p.52 에서 이 네 수가 z⁴ = 1 의 근이라고 적는다. 기호 μ_n 은 이 사이트가 붙였다(출처는 the nth roots of unity 라는 이름으로 부른다). ω_n 에 해당하는 수를 출처는 아래첨자 없이 ω 로 쓴다: 9.4절 연습문제 13(p.122)의 'ω = cis(2π/n)', 23.3절 Example 23.27(p.303)의 ω = cos(2π/n) + i sin(2π/n). Example 23.27 은 xⁿ − 1 의 근을 1, ω, ω², …, ω^{n−1} 로 적고, 그 앞 문단(p.303)은 Corollary 22.11 로 1 의 n제곱근이 순환군을 이룬다고 적는데, (1)·(2)와 같은 내용이다. Example 23.11(p.296)은 (x − 1)f(x) = x⁵ − 1 과 드무아브르 정리로 f(x) = x⁴ + x³ + x² + x + 1 의 근이 ω^i(i = 1, …, 4, ω = cos(2π/5) + i sin(2π/5))라고 적는데, ω 가 f 의 근이라는 것은 (6)의 n = 5 의 합 1 + ω + ω² + ω³ + ω⁴ = 0 과 같은 식이다. 출처의 연습문제 46(θ 가 유리수이면 cos θ + i sin θ 의 위수가 무한)은 π 의 무리성이 필요하므로 이 항목은 다루지 않는다. 예시 'n = 6 에서 μ₆ 과 원시근'은 연습문제 20 과 같은 대상이고, 확인 질문 '원시 $10$제곱근은 몇 개이고, $\\omega_{10}$의 어떤 거듭제곱인가?'는 Example 4.26 과 연습문제 20, 21 과 같은 종류의 물음이며, 확인 질문 '$-1 \\in \\mu_n$인 자연수 $n$은 어떤 것인가?'는 연습문제 40 과 같은 물음이다. 반례 'k 를 0 부터 n 까지 잡으면 같은 수가 두 번 나오는 예'는 출처가 Theorem 4.25 의 증명(p.52)에서 근이 서로 다르다는 것을 2kπ/n 이 0 이상 2π 미만이라는 것으로 보이는 것과 같은 발상이다. 예시 'μ₃ 의 원소는 μ₆ 에 든다'의 μ₃ 의 원소는 17.6절 연습문제 3(p.222)이 1 의 세제곱근이라고 증명하게 하는 1, (−1 + i√3)/2, (−1 − i√3)/2 이다."
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 의 증명 (p.166–167)
    checked: original
    note: "출처의 주기 증명(p.166–167)은 (e^{ix/4})⁴ = 1 을 쓰는데, 이것은 e^{ix/4} 가 1 의 4제곱근이라는 것을 쓴 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계산 예 (1 − √3i)⁶, 몫, −4 의 네제곱근, 원시 12제곱근의 수를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 곱셈군 $\mathbb{C}^{\times}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]], 유한 합 $\sum_{k=0}^{K}$는 [[complex-finite-sum]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 원주율 $\pi$는 [[definition-of-pi|원주율]], 원 $\mathbb{T}$는 [[unit-circle-parametrization|원 𝕋 의 매개화]], 편각은 [[polar-form|극형식과 편각]]의 것이다. 부분군, 순환 부분군 $\langle a \rangle$, 순환군과 생성원, 원소의 위수 $\operatorname{ord}$, 동형사상은 [[subgroup|부분군]], [[cyclic-subgroup|순환 부분군]], [[order-of-an-element|원소의 위수]], [[group-isomorphism|군의 동형]]의 것이고, $(\mathbb{Z}_n, +)$와 동치류 $[k]$는 [[integers-modulo-n|법 n의 정수]], $\gcd$는 [[greatest-common-divisor|최대공약수]], $\varphi(n)$은 [[euler-phi-function|오일러 피 함수]], 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수의 유일성]]의 것이다. 정수 $n$이 정수 $m$을 나눈다는 것은 $n \mid m$으로 쓴다.

**1 의 $n$제곱근.** $n$을 자연수라 하자. 복소수 $z$가 **1 의 $n$제곱근**(nth root of unity)인 것은 정확히 $z^n = 1$일 때이다. 그 전체의 집합을
$$
\mu_n = \{z \in \mathbb{C} : z^n = 1\}
$$
로 쓰고, 정수 $k$에 대하여 $\exp(2\pi i k / n)$은 $\exp(i\,\iota(2\pi k / n))$이다. 특히 $\omega_n = \exp(2\pi i / n)$으로 쓴다. $\mu_n$의 생성원(아래 (2)에 의해 $\mu_n$은 곱셈으로 군이다)을 **원시 $n$제곱근**(primitive nth root of unity)이라 한다. 기호 $\mu_n$은 [[group-of-units-modulo-n|법 n의 단원군]] $U(n)$과 다른 것이다.

다음이 성립한다. 아래에서 $n$은 자연수이고 $k$, $j$는 정수이다.

1. (근 전체) $\mu_n = \{\exp(2\pi i k / n) : k \in \mathbb{Z},\ 0 \le k \le n - 1\}$이고, $0 \le j < k \le n - 1$이면 $\exp(2\pi i j / n) \ne \exp(2\pi i k / n)$이다. 따라서 $\mu_n$은 유한집합이고 $|\mu_n| = n$이다. 모든 정수 $k$에서 $\exp(2\pi i k / n) \in \mu_n$이고, $\exp(2\pi i j / n) = \exp(2\pi i k / n)$인 것은 정확히 $n \mid k - j$일 때이다.
2. (순환군) $\mu_n \subseteq \mathbb{T}$이고, $\mu_n$은 $\mathbb{T}$의 부분군이자 $\mathbb{C}^{\times}$의 부분군이다. 모든 정수 $k$에서 $\omega_n^k = \exp(2\pi i k / n)$이고, $\mu_n = \langle \omega_n \rangle$이며 $\operatorname{ord}(\omega_n) = n$이다. 곧 $\mu_n$은 $\omega_n$이 생성하는 순환군이다.
3. (동형) 함수 $\bar\gamma : \mathbb{Z}_n \to \mu_n$으로서 모든 정수 $k$에서 $\bar\gamma([k]) = \omega_n^k$인 것이 정확히 하나 있고, $\bar\gamma$는 $(\mathbb{Z}_n, +)$에서 $\mu_n$으로의 동형사상이다.
4. (원시근) $\omega_n^k$가 원시 $n$제곱근인 것은 정확히 $\gcd(k, n) = 1$일 때이다. 원시 $n$제곱근 전체의 집합은 $\{\omega_n^k : k \in \mathbb{Z},\ 1 \le k \le n,\ \gcd(k, n) = 1\}$이고, 유한집합이며 원소가 $\varphi(n)$개이다.
5. (작은 $n$) $\mu_1 = \{1\}$, $\mu_2 = \{1, -1\}$, $\mu_4 = \{1, i, -1, -i\}$이다.
6. (합) $n \ge 2$이면 $\sum_{k=0}^{n-1} \omega_n^k = 0$이다. $n = 1$이면 이 합은 $1$이다.
:::

:::english
Complex numbers and $i$, the operations of the field $\mathbb{C}$, the multiplicative group $\mathbb{C}^{\times}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the modulus, powers, finite sums $\sum_{k=0}^{K}$, and the complex exponential function are those of their entries. The number $\pi$, the circle group $\mathbb{T}$, and arguments are those of the entries on π, on the parametrization of the circle group, and on polar form. Subgroups, cyclic subgroups $\langle a \rangle$, cyclic groups and generators, orders $\operatorname{ord}$ of elements, and isomorphisms are those of their entries; $(\mathbb{Z}_n, +)$ and classes $[k]$, $\gcd$, Euler's function $\varphi(n)$, and the number of elements $|A|$ are those of their entries. That an integer $n$ divides an integer $m$ is written $n \mid m$.

**Roots of unity.** Let $n$ be a natural number. A complex number $z$ is an **nth root of unity** if and only if $z^n = 1$. The set of all of them is written
$$
\mu_n = \{z \in \mathbb{C} : z^n = 1\},
$$
and for an integer $k$, $\exp(2\pi i k / n)$ means $\exp(i\,\iota(2\pi k / n))$. In particular we write $\omega_n = \exp(2\pi i / n)$. A generator of $\mu_n$ (which is a group under multiplication by (2) below) is called a **primitive nth root of unity**. The symbol $\mu_n$ is different from the group of units $U(n)$ modulo $n$.

The following hold. Below, $n$ is a natural number and $k$, $j$ are integers.

1. (All the roots) $\mu_n = \{\exp(2\pi i k / n) : k \in \mathbb{Z},\ 0 \le k \le n - 1\}$, and if $0 \le j < k \le n - 1$ then $\exp(2\pi i j / n) \ne \exp(2\pi i k / n)$. Hence $\mu_n$ is a finite set and $|\mu_n| = n$. For every integer $k$, $\exp(2\pi i k / n) \in \mu_n$, and $\exp(2\pi i j / n) = \exp(2\pi i k / n)$ if and only if $n \mid k - j$.
2. (Cyclic group) $\mu_n \subseteq \mathbb{T}$, and $\mu_n$ is a subgroup of $\mathbb{T}$ and of $\mathbb{C}^{\times}$. For every integer $k$, $\omega_n^k = \exp(2\pi i k / n)$; moreover $\mu_n = \langle \omega_n \rangle$ and $\operatorname{ord}(\omega_n) = n$. That is, $\mu_n$ is the cyclic group generated by $\omega_n$.
3. (Isomorphism) There is exactly one function $\bar\gamma : \mathbb{Z}_n \to \mu_n$ with $\bar\gamma([k]) = \omega_n^k$ for every integer $k$, and $\bar\gamma$ is an isomorphism from $(\mathbb{Z}_n, +)$ to $\mu_n$.
4. (Primitive roots) $\omega_n^k$ is a primitive nth root of unity if and only if $\gcd(k, n) = 1$. The set of all primitive nth roots of unity is $\{\omega_n^k : k \in \mathbb{Z},\ 1 \le k \le n,\ \gcd(k, n) = 1\}$; it is a finite set with $\varphi(n)$ elements.
5. (Small $n$) $\mu_1 = \{1\}$, $\mu_2 = \{1, -1\}$, $\mu_4 = \{1, i, -1, -i\}$.
6. (Sum) If $n \ge 2$, then $\sum_{k=0}^{n-1} \omega_n^k = 0$. If $n = 1$, this sum is $1$.
:::

## 직관

$z^n = 1$이면 절댓값을 보아 $|z|^n = 1$이므로 $|z| = 1$이고, $z$는 $\exp(i\theta)$ 꼴입니다. [[de-moivre-formula|드무아브르 공식]]에 의해 $z^n = \exp(in\theta)$이므로, 조건은 $n\theta$가 $2\pi$의 정수배라는 것, 곧 $\theta$가 $2\pi / n$의 정수배라는 것이 됩니다. $[0, 2\pi)$ 안에 $2\pi / n$의 정수배는 $0, 2\pi / n, \dots, 2\pi(n - 1)/n$의 $n$개뿐이므로 근은 정확히 $n$개입니다. 출처는 "근이 $n$개를 넘지 않는다"를 다항식의 근의 개수로 보이지만, 이 항목은 이렇게 근을 직접 모두 구해서 셉니다.

시계의 눈금에 비유할 수 있습니다. $12$시간짜리 시계에서 바늘을 한 시간씩 $12$번 옮기면 제자리로 돌아오고, 한 시간 눈금의 배수인 열두 자리만이 "12번 옮겨 제자리로 오는" 자리입니다. $\omega_n$을 곱하는 것이 바늘을 한 눈금 옮기는 것에 해당하고, $\mu_n$이 그 $n$개의 눈금입니다. 비유가 맞지 않는 곳은 "자리"라는 말입니다. 이 항목은 $\exp(2\pi i k / n)$을 각도로 해석하지 않고, 눈금이 고르게 놓였다는 것도 말하지 않습니다.

모든 근이 $\omega_n$의 거듭제곱이므로 $\mu_n$은 순환군이고, 생성원이 무엇인지는 추상대수의 [[order-of-a-power|거듭제곱의 위수]]가 알려 줍니다. $\omega_n^k$의 위수는 $n$을 $\gcd(k, n)$으로 나눈 몫이어서, $k$와 $n$이 서로소일 때만 $\omega_n^k$가 다시 $\mu_n$ 전체를 만듭니다. $n = 1$이면 $\mu_1 = \{1\}$이고 $1$이 그 생성원입니다.

## 증명

:::idea
$z^n = 1$이면 $z \ne 0$이므로 $[0, 2\pi)$ 안의 편각 $\theta$를 잡고 드무아브르 공식의 (4)를 $w = 1$에 쓴다. 그러면 $|z| = 1$이고 $n\theta \in 2\pi\mathbb{Z}$이므로 $\theta = 2\pi k / n$, $0 \le k \le n - 1$이다. 군에 관한 것은 $\omega_n^k = \exp(2\pi i k / n)$과 추상대수의 순환군 항목들로 얻는다.
:::

:::hint
$\exp(2\pi i j / n) = \exp(2\pi i k / n)$은 [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (5)에 의해 $2\pi(k - j)/n \in 2\pi\mathbb{Z}$와 같습니다. 이것을 정수의 나눗셈으로 바꿔 보세요.
:::

:::hint
$\omega_n^k = 1$인 것은 정확히 $n \mid k$일 때입니다. [[order-of-an-element|원소의 위수]]의 정의에서 $\operatorname{ord}(\omega_n)$은 이런 자연수 $k$ 가운데 가장 작은 것입니다.
:::

:::proof
"드무아브르의 (4)"처럼 쓴 것은 [[de-moivre-formula]], "극형식의 (1)"은 [[polar-form]], "매개화의 (5)"는 [[unit-circle-parametrization]], "주기성의 (1)"은 [[periodicity-of-trigonometric-functions]], "복소수의 거듭제곱의 (3)"은 [[power-of-a-complex-number]], "순서 성질의 (6)"은 [[order-properties-of-reals]]의 번호이다. 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)를 쓰고, 순서 성질의 (10)에 의해 정수의 부등식과 실수의 부등식을 오간다. [[definition-of-pi|원주율]]의 (4)에 의해 $0 < \pi$이다.

**준비.** 정수 $k$에 대하여 $\theta_k = 2\pi k / n$으로 두면 $\exp(2\pi i k / n) = \exp(i\theta_k)$이다. 매개화의 (5)에 의해 정수 $j$, $k$에서 $\exp(i\theta_j) = \exp(i\theta_k)$인 것은 정확히 $\theta_k - \theta_j = 2\pi m$인 정수 $m$이 있을 때이고, 양변에 $n(2\pi)^{-1}$을 곱하면 이것은 $k - j = nm$, 곧 $n \mid k - j$이다. 이것을 (가)라 부른다.

**1의 증명.** 포함 $\supseteq$와 마지막 문장의 앞부분. 정수 $k$에서 $n\theta_k = 2\pi k \in 2\pi\mathbb{Z}$이므로 드무아브르의 (1)의 마지막 문장에 의해 $\exp(i\theta_k)^n = 1$이다. 곧 $\exp(2\pi i k / n) \in \mu_n$이다.

포함 $\subseteq$. $z \in \mu_n$이라 하자. $n \ge 1$이므로 복소수의 거듭제곱의 (3)의 (i)에 의해 $0^n = 0 \ne 1$이고, 따라서 $z \ne 0$이다. 극형식의 (1)에 의해 $0 \le \theta < 2\pi$인 $z$의 편각 $\theta$가 있다. 극형식의 (6)에 의해 $0 \in \arg 1$이므로, 드무아브르의 (4)를 $w = 1$, $\varphi = 0$에 쓰면 $|z|^n = |1| = 1$이고 $n\theta \in 2\pi\mathbb{Z}$이다. [[modulus-of-complex-number]]의 (1)의 $0 \le |z|$와 $1^n = 1$에 의해 [[power-of-a-real-number]]의 (6)의 (iii)에서 $|z| = 1$이다. $n\theta = 2\pi k$인 정수 $k$를 잡으면 $\theta = 2\pi k / n = \theta_k$이다. $0 \le \theta_k < 2\pi$의 각 변에 $n(2\pi)^{-1} > 0$을 곱하면 순서 성질의 (4)의 (i), (iii)에 의해 $0 \le k < n$이고, (Z1)에 의해 $k \le n - 1$이다. 따라서 $z = \iota(1)\exp(i\theta_k) = \exp(2\pi i k / n)$이고 $0 \le k \le n - 1$이다.

서로 다름. $0 \le j < k \le n - 1$이면 $0 < k - j \le n - 1 < n$이다. $n \mid k - j$라면 $k - j = nm$인 정수 $m$이 있고, $0 < nm < n$에서 순서 성질의 (6)의 (iv)에 의해 $0 < m < 1$인데 이런 정수는 (Z1)에 의해 없다. 따라서 (가)에 의해 $\exp(2\pi i j / n) \ne \exp(2\pi i k / n)$이다. 마지막 문장의 뒷부분은 (가)이다.

개수. $\{1, \dots, n\}$의 원소 $t$에서의 값이 $\exp(2\pi i (t - 1) / n)$인 함수 $h : \{1, \dots, n\} \to \mu_n$은 위의 두 포함에 의해 전사이고 서로 다름에 의해 단사이다. 따라서 [[finite-set|유한집합]]의 정의에 의해 $\mu_n$은 원소를 $n$개 갖고, [[number-of-elements-is-unique|원소의 개수의 유일성]]에 의해 $|\mu_n| = n$이다.

**2의 증명.** (1)의 증명에서 $\mu_n$의 원소 $z$는 $|z| = 1$이므로 $\mu_n \subseteq \mathbb{T}$이다. 정수 $k$에서 $\iota(k)(2\pi i / n) = i\,\iota(2\pi k / n)$이므로(복소수체의 (2)와 곱의 교환법칙) [[addition-law-of-complex-exponential|덧셈 법칙]]의 (3)에 의해 $\omega_n^k = \exp(2\pi i k / n)$이다. 따라서 [[cyclic-subgroup|순환 부분군]]의 정의와 (1)에 의해
$$
\begin{aligned}
\langle \omega_n \rangle &= \{\omega_n^k : k \in \mathbb{Z}\} \\
&= \{\exp(2\pi i k / n) : k \in \mathbb{Z}\} = \mu_n
\end{aligned}
$$
이다. 마지막 등식은 (1)의 두 포함과 "모든 정수 $k$에서 $\exp(2\pi i k / n) \in \mu_n$"이다. [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (1)에 의해 $\mathbb{T}$는 $\mathbb{C}^{\times}$의 부분군이고, 거듭제곱은 군 $\mathbb{C}^{\times}$의 거듭제곱과 같으며(복소수의 거듭제곱의 (2)) [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 $\mathbb{T}$에서 정한 것과도 같다. 순환 부분군의 (1)에 의해 $\mu_n = \langle \omega_n \rangle$은 $\mathbb{T}$의 부분군이고, [[subgroup|부분군]]의 (6)에 의해 $\mathbb{C}^{\times}$의 부분군이다.

위수. (가)를 $j = 0$에 쓰면 $\omega_n^k = 1$인 것은 정확히 $n \mid k$일 때이다. 특히 $\omega_n^n = 1$이므로 $\omega_n$의 위수는 유한하다. 자연수 $k$가 $\omega_n^k = 1$을 만족하면 $k = nm$인 정수 $m$이 있고, $0 < k$와 $0 < n$에서 순서 성질의 (6)의 (iii)에 의해 $0 < m$, (Z1)에 의해 $1 \le m$이므로 $n \le nm = k$이다. 따라서 [[order-of-an-element|원소의 위수]]의 정의의 마지막 문장에 의해 $\operatorname{ord}(\omega_n) = n$이다.

**3의 증명.** (1), (2)에 의해 $\mu_n$은 원소가 $n$개인 유한군이고 순환군이며 $\omega_n$이 그 생성원이다. [[classification-of-cyclic-groups|순환군의 분류]]의 (2)를 $G = \mu_n$, $a = \omega_n$에 쓰면 된다.

**4의 증명.** (2)에 의해 $\operatorname{ord}(\omega_n) = n$이고 $\langle \omega_n \rangle = \mu_n$이므로, [[order-of-a-power|거듭제곱의 위수]]의 (6)에 의해 $\omega_n^k$가 $\mu_n$의 생성원인 것은 정확히 $\gcd(k, n) = 1$일 때이다.

개수. [[generators-of-zn|ℤn 의 생성원]]의 (3)에 의해 $(\mathbb{Z}_n, +)$의 생성원 전체의 집합 $U(n)$은 원소가 $\varphi(n)$개인 유한집합이다. (3)의 동형사상 $\bar\gamma$에 대하여 [[group-isomorphism|군의 동형]]의 (3)의 (ii)에 의해 $[k]$가 $\mathbb{Z}_n$의 생성원인 것은 정확히 $\bar\gamma([k])$가 $\mu_n$의 생성원일 때이다. $\bar\gamma$는 단사이고 $\mu_n$의 모든 원소는 $\bar\gamma$의 값이므로, $\bar\gamma$를 $U(n)$으로 제한하고 공역을 원시 $n$제곱근 전체의 집합으로 둔 함수는 전단사이다. 따라서 [[finite-set|유한집합]]의 (F4)에 의해 원시 $n$제곱근 전체의 집합은 원소를 $\varphi(n)$개 갖는다.

집합의 꼴. 원시 $n$제곱근 $u$는 (1), (2)에 의해 $u = \omega_n^k$, $0 \le k \le n - 1$인 정수 $k$로 쓰인다. $k = 0$이면 $u = \omega_n^n$이므로((가)), 어느 경우든 $1 \le k \le n$인 정수 $k$로 $u = \omega_n^k$이고, 앞 문단의 판정에 의해 $\gcd(k, n) = 1$이다. 거꾸로 그런 $k$의 $\omega_n^k$는 판정에 의해 원시 $n$제곱근이다.

**5의 증명.** (1)에서 $n = 1$이면 $k = 0$뿐이고 $\exp(0) = 1$([[complex-exponential-function]]의 (3)). $n = 2$이면 $k = 0, 1$이고 $\exp(2\pi i / 2) = \exp(i\pi) = -1$(주기성의 (1)). $n = 4$이면 $k = 0, 1, 2, 3$이고 $2\pi k / 4$는 $0$, $\pi / 2$, $\pi$, $3\pi / 2$이므로 주기성의 (1)에 의해 값은 $1$, $i$, $-1$, $-i$이다.

**6의 증명.** [[complex-finite-sum|복소수의 유한 합]]의 (9)를 $z = \omega_n$, $K = n - 1$에 쓰면 $(1 - \omega_n)\sum_{k=0}^{n-1} \omega_n^k = 1 - \omega_n^n = 0$이다. $n \ge 2$이면 (가)에서 $n \mid 1 - 0$이 아니므로($0 < 1 < n$, (1)의 서로 다름과 같은 논법) $\omega_n \ne \omega_n^0 = 1$이고, $1 - \omega_n \ne 0$이므로 체에서 양변에 $(1 - \omega_n)^{-1}$을 곱해 합은 $0$이다. $n = 1$이면 같은 항목의 (8)에 의해 합은 $\omega_1^0 = 1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 6 에서 μ₆ 과 원시근]
(1)에 의해 $\mu_6$의 원소는 $\exp(2\pi i k / 6) = \exp(i\pi k / 3)$, $k = 0, \dots, 5$입니다. [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)와 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1), (2)로 계산하면 차례로
$$
\begin{aligned}
&1, \quad \tfrac{1}{2} + \tfrac{\sqrt{3}}{2} i, \quad -\tfrac{1}{2} + \tfrac{\sqrt{3}}{2} i, \\
&-1, \quad -\tfrac{1}{2} - \tfrac{\sqrt{3}}{2} i, \quad \tfrac{1}{2} - \tfrac{\sqrt{3}}{2} i
\end{aligned}
$$
입니다($2\pi / 3 = \pi / 6 + \pi / 2$, $4\pi / 3 = \pi / 3 + \pi$, $5\pi / 3 = 2\pi / 3 + \pi$를 쓴다). $1 \le k \le 6$에서 $\gcd(k, 6) = 1$인 것은 $k = 1, 5$뿐이므로 (4)에 의해 원시 $6$제곱근은 $\omega_6$과 $\omega_6^5 = \tfrac{1}{2} - \tfrac{\sqrt{3}}{2} i$의 둘이고, $\varphi(6) = 2$와 맞습니다.
:::

:::example[μ₃ 의 원소는 μ₆ 에 든다]
$\omega_3 = \exp(2\pi i / 3) = \omega_6^2$이므로 $\omega_3^3 = 1$이고 $\omega_3^6 = (\omega_3^3)^2 = 1$입니다. 곧 $\mu_3 = \{1, \omega_6^2, \omega_6^4\} \subseteq \mu_6$입니다. 그러나 $\omega_6^2$는 $\gcd(2, 6) = 2$이므로 원시 $6$제곱근이 아닙니다. [[order-of-a-power|거듭제곱의 위수]]의 (3)에 의해 그 위수는 $6 = 2 \cdot 3$의 $3$입니다.
:::

:::counterexample[k 를 0 부터 n 까지 잡으면 같은 수가 두 번 나오는 예]
(1)의 범위 $0 \le k \le n - 1$을 $0 \le k \le n$으로 넓히면 $k = 0$과 $k = n$이 모두 $\exp(0) = \exp(2\pi i) = 1$을 주므로([[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)), 수를 $n + 1$번 적어도 서로 다른 수는 $n$개입니다. 예컨대 $n = 2$이면 $1, -1, 1$입니다. 그래서 (1)은 $k$의 범위를 길이가 정확히 $n$인 정수의 범위로 둡니다. (4)의 원시근의 범위 $1 \le k \le n$도 $n$개의 정수이고, $k = n$은 $n = 1$일 때만 $\gcd(k, n) = 1$을 만족합니다.
:::

## 확인 질문

:::check[$-1 \in \mu_n$인 자연수 $n$은 어떤 것인가?]
[[power-of-a-complex-number]]의 (5)에 의해 $(-1)^n = \iota\bigl((-1)^n\bigr)$이고, [[power-of-a-real-number]]의 (5)에 의해 실수 $(-1)^n$은 $n$이 짝수이면 $1$, 홀수이면 $-1$입니다. $-1 \ne 1$이므로 $-1 \in \mu_n$인 것은 정확히 $n$이 짝수일 때입니다. $n = 2$이면 (5)의 $\mu_2 = \{1, -1\}$과 맞습니다.
:::

:::check[원시 $10$제곱근은 몇 개이고, $\omega_{10}$의 어떤 거듭제곱인가?]
$1 \le k \le 10$에서 $\gcd(k, 10) = 1$인 $k$는 $2$로도 $5$로도 나누어지지 않는 $1, 3, 7, 9$입니다. 따라서 (4)에 의해 원시 $10$제곱근은 $\omega_{10}$, $\omega_{10}^3$, $\omega_{10}^7$, $\omega_{10}^9$의 네 개이고, $\varphi(10) = 4$입니다.
:::
