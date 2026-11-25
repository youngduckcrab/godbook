---
title: 복소수의 n제곱근
title_en: nth Roots of Complex Numbers
aliases: [복소수의 거듭제곱근, n제곱근, nth roots of a complex number, complex roots]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 0 이 아닌 복소수 w 와 자연수 n 에서 zⁿ = w 인 복소수 z 는 정확히 n 개이고, w 의 편각을 φ 라 하면 그것은 |w| 의 실수 n제곱근에 exp(i(φ + 2πk)/n) (k = 0, …, n − 1) 을 곱한 수들이다. w = 0 이면 근은 0 하나이다. 근 하나가 z₀ 이면 근 전체는 z₀ 에 1 의 n제곱근을 곱한 수들이고, |w| = 1 이면 근은 모두 원 𝕋 에 있다.
requires: [prime-number, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, nth-root, division-theorem, finite-set, number-of-elements-is-unique, injective-surjective-bijective, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-arithmetic-examples, complex-exponential-function, addition-law-of-complex-exponential, definition-of-pi, trigonometric-values-and-pi-estimates, periodicity-of-trigonometric-functions, unit-circle-parametrization, polar-form, de-moivre-formula, roots-of-unity]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.5절 Maximum principle and the fundamental theorem of algebra, Lemma 11.5.1 의 증명 (p.169)
    checked: original
    note: "출처는 이 정리를 진술하지 않고, Lemma 11.5.1 의 증명(p.169)에서 'Pick t such that a_k e^{ikt} = −|a_k|, which we can do by the discussion on trigonometric functions' 라고 쓴다. 그런 t 가 있다는 것은 절댓값이 1 인 수 −|a_k|/a_k 의 k제곱근 e^{it} 가 있다는 것이고, 이 항목의 (4)가 그것을 진술한다."
  - ref: judson-abstract-algebra
    loc: 23.3절 Applications, Lemma 23.28 의 증명 (p.304)
    checked: original
    note: "출처는 Lemma 23.28 의 증명(p.304)에서 체 F 위의 xⁿ − a 의 근이 ⁿ√a, ωⁿ√a, …, ω^{n−1}ⁿ√a (ω 는 원시 n제곱근)이고, 근 ζ 하나에 대해 서로 다른 근이 ζ, ωζ, …, ω^{n−1}ζ 라고 증명 없이 적는다. 이 항목의 (5)가 ℂ 에서 이것을 증명한 것이고, (1)의 근 z_k 는 z_0 에 ω_n^k 를 곱한 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계산 예 (1 − √3i)⁶, 몫, −4 의 네제곱근, 원시 12제곱근의 수를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. $0$ 이상인 실수 $a$의 $n$제곱근 $\sqrt[n]{a}$는 [[nth-root|n제곱근]]의 것이고, 복소수에는 이 기호를 쓰지 않는다. 원주율 $\pi$는 [[definition-of-pi|원주율]], 원 $\mathbb{T}$는 [[unit-circle-parametrization|원 𝕋 의 매개화]], 편각과 $\arg w$는 [[polar-form|극형식과 편각]], 1 의 $n$제곱근 전체 $\mu_n$과 $\omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이다. 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수의 유일성]]의 것이다.

**복소수의 $n$제곱근.** 복소수 $w$와 자연수 $n$에 대하여, $z^n = w$인 복소수 $z$를 $w$의 **$n$제곱근**($n$th root)이라 하고, 그 전체의 집합을 $R_n(w) = \{z \in \mathbb{C} : z^n = w\}$로 쓴다. 기호 $R_n(w)$는 이 항목 안에서만 쓰는 이름이다. 특히 $R_n(1) = \mu_n$이다.

다음이 성립한다. 아래에서 $n$은 자연수이고, $w$는 복소수, $k$, $j$는 정수이다.

1. (근의 꼴과 개수) $w \ne 0$이고 $\varphi \in \arg w$이며 $r = \sqrt[n]{|w|}$이라 하자. 정수 $k$에 대하여
   $$
   z_k = r \exp\bigl(i(\varphi + 2\pi k) / n\bigr)
   $$
   로 두면 $R_n(w) = \{z_k : k \in \mathbb{Z},\ 0 \le k \le n - 1\}$이고, $z_j = z_k$인 것은 정확히 $n \mid k - j$일 때이다. 따라서 $0$이 아닌 모든 복소수 $w$와 모든 자연수 $n$에 대하여 $z^n = w$인 복소수 $z$는 정확히 $n$개이다. 곧 $R_n(w)$는 유한집합이고 $|R_n(w)| = n$이다.
2. ($w = 0$) $R_n(0) = \{0\}$이다.
3. (존재) 모든 복소수 $w$와 모든 자연수 $n$에 대하여 $z^n = w$인 복소수 $z$가 있다.
4. (절댓값이 $1$인 수) $z^n = w$이면 $|z|^n = |w|$이다. 따라서 $|w| = 1$이면 $R_n(w) \subseteq \mathbb{T}$이고, 특히 $u^n = w$이고 $|u| = 1$인 복소수 $u$가 있다.
5. (근 하나로 나타내기) $w \ne 0$이고 $z_0^n = w$이면 $R_n(w) = \{z_0 u : u \in \mu_n\}$이다. (1)의 근에 대해서는 모든 정수 $k$에서 $z_k = z_0\,\omega_n^k$이다.
6. (작은 $n$) $R_1(w) = \{w\}$이다. $w \ne 0$이면 $R_2(w) = \{z_0, -z_0\}$이고 $z_0 \ne -z_0$이다.
:::

:::english
Complex numbers and $i$, the operations of the field $\mathbb{C}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, the modulus, powers, and the complex exponential function are those of their entries. For a real number $a \ge 0$, the $n$th root $\sqrt[n]{a}$ is that of its entry, and this symbol is not used for complex numbers. The number $\pi$, the circle group $\mathbb{T}$, arguments and $\arg w$, and the set $\mu_n$ of all nth roots of unity and $\omega_n$ are those of the entries on π, on the parametrization of the circle group, on polar form, and on roots of unity. The number of elements $|A|$ is that of its entry.

**nth roots of complex numbers.** For a complex number $w$ and a natural number $n$, a complex number $z$ with $z^n = w$ is called an **$n$th root** of $w$, and the set of all of them is written $R_n(w) = \{z \in \mathbb{C} : z^n = w\}$. The symbol $R_n(w)$ is a name used only in this entry. In particular $R_n(1) = \mu_n$.

The following hold. Below, $n$ is a natural number, $w$ is a complex number, and $k$, $j$ are integers.

1. (Form and number of the roots) Let $w \ne 0$, $\varphi \in \arg w$ and $r = \sqrt[n]{|w|}$. For an integer $k$ put
   $$
   z_k = r \exp\bigl(i(\varphi + 2\pi k) / n\bigr).
   $$
   Then $R_n(w) = \{z_k : k \in \mathbb{Z},\ 0 \le k \le n - 1\}$, and $z_j = z_k$ if and only if $n \mid k - j$. Hence for every nonzero complex number $w$ and every natural number $n$ there are exactly $n$ complex numbers $z$ with $z^n = w$; that is, $R_n(w)$ is a finite set and $|R_n(w)| = n$.
2. ($w = 0$) $R_n(0) = \{0\}$.
3. (Existence) For every complex number $w$ and every natural number $n$ there is a complex number $z$ with $z^n = w$.
4. (Numbers of modulus $1$) If $z^n = w$, then $|z|^n = |w|$. Hence if $|w| = 1$, then $R_n(w) \subseteq \mathbb{T}$; in particular there is a complex number $u$ with $u^n = w$ and $|u| = 1$.
5. (In terms of one root) If $w \ne 0$ and $z_0^n = w$, then $R_n(w) = \{z_0 u : u \in \mu_n\}$. For the roots in (1), $z_k = z_0\,\omega_n^k$ for every integer $k$.
6. (Small $n$) $R_1(w) = \{w\}$. If $w \ne 0$, then $R_2(w) = \{z_0, -z_0\}$ and $z_0 \ne -z_0$.
:::

## 직관

[[de-moivre-formula|드무아브르 공식]]에 의해 $z = |z|\exp(i\theta)$의 $n$제곱은 $|z|^n\exp(in\theta)$입니다. 그래서 $z^n = w$는 두 조건으로 나뉩니다. 절댓값은 $|z|^n = |w|$이어서 실수의 $n$제곱근으로 $|z| = \sqrt[n]{|w|}$ 하나로 정해지고, 편각은 $n\theta$가 $w$의 편각 $\varphi$와 $2\pi$의 정수배만큼 다르면 됩니다. 곧 $\theta = (\varphi + 2\pi k)/n$입니다. $k$를 $n$만큼 바꾸면 $\theta$가 $2\pi$만큼 바뀌어 같은 수가 되므로, 서로 다른 근은 $k = 0, 1, \dots, n - 1$의 $n$개입니다.

같은 일을 [[roots-of-unity|1 의 n제곱근]]으로 말하면, 근 하나 $z_0$를 찾은 뒤 나머지는 $z_0$에 $\mu_n$의 원소를 곱해 얻습니다(5). 열쇠 하나를 복사할 때 같은 모양의 열쇠가 여러 개 나오듯, 근 하나에 "$n$제곱하면 $1$이 되는 수"를 곱해도 $n$제곱은 그대로이기 때문입니다. 비유가 맞지 않는 곳은 열쇠는 똑같지만 $z_0 u$들은 서로 다른 복소수라는 것입니다.

$w = 0$은 예외입니다. $0$에는 편각이 없고, $z^n = 0$이면 $z = 0$이므로 근은 하나뿐입니다. $n = 1$이면 근은 $w$ 자신 하나이고, $n = 2$이면 [[complex-arithmetic-examples|복소수 계산의 예]]의 (3)이 식으로 구한 두 제곱근과 같은 두 수입니다.

## 증명

:::idea
$z^n = w$($w \ne 0$)이면 $z \ne 0$이므로 $z$의 편각 $\theta$를 잡을 수 있고, 드무아브르 공식의 (4)에 의해 조건은 $|z|^n = |w|$와 $n\theta - \varphi \in 2\pi\mathbb{Z}$이다. 앞의 것은 실수의 $n$제곱근의 유일성으로 $|z| = r$이고, 뒤의 것은 $\theta = (\varphi + 2\pi m)/n$이다. 나눗셈 정리로 $m$을 $0, \dots, n - 1$로 줄인다.
:::

:::hint
$z_m$과 $z_k$가 같을 조건은 [[polar-form|극형식과 편각]]의 (3)에 의해 두 편각의 차가 $2\pi$의 정수배인 것입니다. 그 차는 $2\pi(m - k)/n$입니다.
:::

:::hint
(5)에서 $z^n = w$이면 $u = z z_0^{-1}$의 $n$제곱은 무엇입니까?
:::

:::proof
"드무아브르의 (4)"처럼 쓴 것은 [[de-moivre-formula]], "극형식의 (3)"은 [[polar-form]], "1 의 n제곱근의 (1)"은 [[roots-of-unity]], "복소수의 거듭제곱의 (3)"은 [[power-of-a-complex-number]], "n제곱근의 (1)"은 [[nth-root]], "순서 성질의 (6)"은 [[order-properties-of-reals]]의 번호이다. 정수의 부등식은 [[prime-number]]의 (Z1)을 쓴다. 정수 $k$에 대하여 $\theta_k = (\varphi + 2\pi k)/n$으로 두면 $z_k = r\exp(i\theta_k)$이다.

**1의 증명.** $w \ne 0$이므로 [[modulus-of-complex-number]]의 (1)에 의해 $0 < |w|$이고, n제곱근의 (1)에 의해 $0 < r$이며 $r^n = |w|$이다. 극형식의 (3)에 의해 $|z_k| = r$이고 $\theta_k \in \arg z_k$이다.

근이다. $n\theta_k - \varphi = 2\pi k \in 2\pi\mathbb{Z}$이고 $|z_k|^n = r^n = |w|$이므로 드무아브르의 (4)에 의해 $z_k^n = w$이다. 이것은 모든 정수 $k$에서 성립한다.

같을 조건. $0 < r$이므로 극형식의 (3)에 의해 $z_j = z_k$인 것은 정확히 $\theta_k - \theta_j = 2\pi(k - j)/n \in 2\pi\mathbb{Z}$일 때이고, 양변에 $n(2\pi)^{-1}$을 곱하면 이것은 정확히 $k - j = nm$인 정수 $m$이 있을 때, 곧 $n \mid k - j$일 때이다.

모든 근이 이 꼴이다. $z^n = w$라 하자. $n \ge 1$이므로 복소수의 거듭제곱의 (3)의 (i)에 의해 $0^n = 0 \ne w$이고, 따라서 $z \ne 0$이다. 극형식의 (1)에 의해 $z$의 편각 $\theta$가 있고, 드무아브르의 (4)에 의해 $|z|^n = |w|$이고 $n\theta - \varphi = 2\pi m$인 정수 $m$이 있다. $0 \le |z|$이므로 n제곱근의 (1)의 유일성에 의해 $|z| = r$이고, $\theta = (\varphi + 2\pi m)/n = \theta_m$이므로 $z = r\exp(i\theta_m) = z_m$이다. [[division-theorem|나눗셈 정리]]에 의해 $m = qn + k$, $0 \le k \le n - 1$인 정수 $q$, $k$가 있고, $n \mid m - k$이므로 앞 문단에 의해 $z_m = z_k$이다.

개수. $0 \le j < k \le n - 1$이면 $0 < k - j < n$이고, $k - j = nm$이라면 순서 성질의 (6)의 (iv)에 의해 $0 < m < 1$인데 이런 정수는 (Z1)에 의해 없다. 따라서 $z_j \ne z_k$이다. $\{1, \dots, n\}$의 원소 $t$에서의 값이 $z_{t-1}$인 함수 $\{1, \dots, n\} \to R_n(w)$는 앞의 두 문단에 의해 전사이고 지금 문단에 의해 단사이므로, [[finite-set|유한집합]]의 정의와 [[number-of-elements-is-unique|원소의 개수의 유일성]]에 의해 $|R_n(w)| = n$이다.

**2의 증명.** 복소수의 거듭제곱의 (3)의 (i)에 의해 $0^n = 0$이므로 $0 \in R_n(0)$이다. $z \ne 0$이면 복소수의 거듭제곱의 (2)에 의해 $z^n \ne 0$이므로 $z \notin R_n(0)$이다.

**3의 증명.** $w \ne 0$이면 (1)의 $z_0$가, $w = 0$이면 (2)의 $0$이 그런 수이다.

**4의 증명.** $z^n = w$이면 복소수의 거듭제곱의 (4)에 의해 $|w| = |z^n| = |z|^n$이다. $|w| = 1$이면 $|z|^n = 1 = 1^n$이고 $0 \le |z|$이므로 [[power-of-a-real-number]]의 (6)의 (iii)에 의해 $|z| = 1$, 곧 $z \in \mathbb{T}$이다. $|w| = 1$이면 $w \ne 0$이므로 (3)에 의해 그런 $z$가 있다.

**5의 증명.** $z_0^n = w \ne 0$이므로 앞과 같이 $z_0 \ne 0$이다. $u \in \mu_n$이면 복소수의 거듭제곱의 (3)의 (i)에 의해 $(z_0 u)^n = z_0^n u^n = w \cdot 1 = w$이다. 거꾸로 $z^n = w$이면 $u = z z_0^{-1}$로 두어 $z = z_0 u$이고, 복소수의 거듭제곱의 (3)의 (ii)에 의해 $u^n = z^n (z_0^n)^{-1} = w w^{-1} = 1$이므로 $u \in \mu_n$이다.

(1)의 근에 대해서는, $\theta_k = \theta_0 + 2\pi k / n$이므로 [[addition-law-of-complex-exponential|덧셈 법칙]]의 (1)과 1 의 n제곱근의 (2)의 $\omega_n^k = \exp(2\pi i k / n)$에 의해 $z_k = r\exp(i\theta_0)\exp(2\pi i k / n) = z_0\,\omega_n^k$이다.

**6의 증명.** $n = 1$이면 $z^1 = z$이므로 $R_1(w) = \{w\}$이다. $n = 2$이고 $w \ne 0$이면 (5)와 1 의 n제곱근의 (5)의 $\mu_2 = \{1, -1\}$에 의해 $R_2(w) = \{z_0, -z_0\}$이다. $z_0 \ne 0$이고 $2 \ne 0$이므로 $z_0 - (-z_0) = 2z_0 \ne 0$이어서 $z_0 \ne -z_0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[w = 16i 의 네제곱근]
$|16i| = 16$이고 [[polar-form|극형식과 편각]]의 (6)에 의해 $\pi / 2 \in \arg(16i)$입니다. $2^4 = 16$이고 $0 \le 2$이므로 [[nth-root|n제곱근]]의 (1)에 의해 $\sqrt[4]{16} = 2$입니다. (1)에 의해 네제곱근은
$$
\begin{aligned}
z_k &= 2\exp\bigl(i(\pi / 2 + 2\pi k)/4\bigr) \\
&= 2\exp\bigl(i(\pi / 8 + k\pi / 2)\bigr),
\end{aligned}
$$
$k = 0, 1, 2, 3$의 네 수이고, (5)에 의해 이것은 $z_0 = 2\exp(i\pi / 8)$에 $1$, $i$, $-1$, $-i$를 곱한 수입니다. $z_0$의 실수부와 허수부를 근호로 적지 않아도 근의 개수와 꼴은 이것으로 정해집니다.
:::

:::example[n = 2 에서 계산의 예와 맞추기]
$w = -9$이면 $\sqrt[2]{9} = 3$이고 $\pi \in \arg(-9)$이므로 (1)의 두 근은 $3\exp(i\pi / 2) = 3i$와 $3\exp(3\pi i / 2) = -3i$입니다. [[complex-arithmetic-examples|복소수 계산의 예]]의 (3)의 식에 $a = -9$, $b = 0$을 넣어도 $s = 1$, $z_0 = \sqrt{0} + \sqrt{9}\,i = 3i$이고 두 근은 $3i$와 $-3i$입니다.
:::

:::counterexample[w = 0 이면 근이 n 개가 아닌 예]
(1)은 $w \ne 0$일 때의 것입니다. $w = 0$, $n = 3$이면 $z^3 = 0$인 $z$는 (2)에 의해 $0$ 하나뿐입니다. $0$에는 편각이 없어서 (1)의 식을 쓸 수 없습니다. $n = 1$이면 $w = 0$이어도 근은 $1$개이므로 개수가 $n$과 같습니다.
:::

## 확인 질문

:::check[$z^3 = -1$인 복소수 $z$를 모두 구하라.]
$|-1| = 1$이고 $\pi \in \arg(-1)$이므로 (1)에서 $r = 1$이고 근은 $\exp(i(\pi + 2\pi k)/3)$, $k = 0, 1, 2$입니다. $k = 0$이면 $\exp(i\pi / 3) = \tfrac{1}{2} + \tfrac{\sqrt{3}}{2} i$([[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)), $k = 1$이면 $\exp(i\pi) = -1$, $k = 2$이면 $\exp(5\pi i / 3) = \tfrac{1}{2} - \tfrac{\sqrt{3}}{2} i$입니다(이 수는 $\exp(i\pi / 3)$의 켤레이다. [[polar-form|극형식과 편각]]의 (5)에 의해 켤레의 편각 $-\pi / 3$이 있고, (2)에 의해 $5\pi / 3 = -\pi / 3 + 2\pi$도 편각이다).
:::

:::check[$|w| = 1$이고 $u^5 = w$이면 $|u|$는 무엇이고, $u^5 = w$인 $u$는 몇 개인가?]
(4)에 의해 $|u| = 1$입니다. $|w| = 1$이므로 $w \ne 0$이고, (1)에 의해 그런 $u$는 정확히 $5$개입니다.
:::
