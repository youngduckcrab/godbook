---
title: 삼각함수의 주기성
title_en: Periodicity of the Trigonometric Functions
aliases: [코사인과 사인의 주기, 주기 2π, exp(2πi) = 1, periodicity of sine and cosine, period 2π]
kind: theorem
field: real-analysis
msc: ["26A09", "33B10"]
level: undergrad
summary: exp(iπ) = −1, exp(2πi) = 1 이고 exp(z + 2πi) = exp(z) 이다. 실수 x 에서 exp(ix) = 1 인 것은 정확히 x 가 2π 의 정수배일 때이고, 따라서 exp(ix) = exp(iy) 인 것은 정확히 x − y 가 2π 의 정수배일 때이다. cos 와 sin 은 2π 를 주기로 갖고, 모든 x 에서 cos(x + p) = cos x 인 p 는 정확히 2π 의 정수배이다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, archimedean-property, power-of-a-real-number, ring, ring-examples, group, group-homomorphism, homomorphism-kernel-and-image, complex-number, complex-field, power-of-a-complex-number, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine, trigonometric-addition-formulas, definition-of-pi]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (xi)(xii) (p.165)와 그 증명 (p.166–167); 11.8.1소절 Trigonometric polynomials (p.192)
    checked: original
    note: "출처의 Proposition 11.4.2 (xi)(p.165)는 모든 z ∈ ℂ 에서 e^{2πi} = 1, e^{z+i2π} = e^z 이고, (xii)는 사인과 코사인이 2π-주기이고 더 작은 주기를 갖지 않는다는 것('2π is the smallest number such that …')이다. 출처의 증명(p.166–167)은 sin(π/2) = 1, e^{iπ/2} = i 에서 지수법칙으로 e^{iπ} = −1, e^{i2π} = 1 을 얻는다. 이것이 이 항목의 (1)(2)의 길과 같다. 더 작은 주기가 없다는 것은 'Let x be the smallest positive x such that e^{ix} = 1' 로 시작해 (e^{ix/4})⁴ = 1 과 e^{ix/4} = a + ib 의 네제곱을 전개해 보이는데, 그런 가장 작은 양수가 있다는 것은 적지 않는다. 이 항목은 그 수를 쓰지 않고, 아르키메데스 성질로 x 를 2π 의 정수배와 [0, 2π) 의 나머지로, 그 나머지를 π/2 의 배수와 [0, π/2) 의 나머지로 나눈 뒤 i 를 곱한 네 경우를 실수부·허수부의 부호로 가르는 길로 (3)을 증명한다. (4)가 출처 (xii)를 '모든 x 에서 cos(x + p) = cos x 인 p 는 정확히 2π 의 정수배' 꼴로 적은 것이다. (3′)은 출처가 (xiii)의 증명(p.167)에서 'Suppose e^{ix} = e^{iy} and x > y. Then e^{i(x−y)} = 1, meaning x − y is a multiple of 2π' 라고 적는 것과 같다. 11.8.1소절(p.192)은 'The functions cos(nx), sin(nx), and e^{inx} are 2π-periodic' 이라고 적는데, n = 1 에서 (2)의 2π 를 더하는 꼴과 같은 내용이다."
  - ref: judson-abstract-algebra
    loc: 11.1절 Group Homomorphisms, Example 11.3 (p.134), Example 11.7 (p.135)
    checked: original
    note: "Judson 의 Example 11.3(p.134)은 θ 를 cos θ + i sin θ 로 보내는 ϕ : ℝ → 𝕋 가 준동형임을 덧셈정리로 보이고, Example 11.7(p.135)은 ϕ : ℝ → ℂ* 의 핵이 {2πn : n ∈ ℤ} 라고 증명 없이 적는다. 이 항목의 (6)이 그 핵을 (3)으로 증명한 것이다."
  - ref: lebl-basic-analysis
    loc: 0.3.3절 Functions, Example 0.3.14 (p.15); 3.1.3절 Sequential limits, Example 3.1.8 (p.116–117); 3.5.1절 Limits at infinity, Example 3.5.4 (p.145–146)
    checked: original
    note: "Lebl I 의 Example 3.1.8(p.117)은 sin(πn + π/2) = (−1)ⁿ 을, Example 3.5.4(p.145–146)는 sin(π(2n + 1/2)) = 1, sin(π(2n + 3/2)) = −1, sin(πn) = 0 을 쓴다. 이 등식들은 이 항목의 (1), (2), (5)에서 나온다. Example 0.3.14(p.15)는 f(x) = sin(πx) 에 대해 f^{−1}({0}) = ℤ 라고 적는데, 이것은 (5)의 '사인이 0 인 것은 정확히 x ∈ πℤ 일 때' 를 πx 에 쓴 것과 같은 내용이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(π 의 어림 cos(3/2), cos(8/5) 의 분수와 3배각 인수분해를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
코사인과 사인은 [[cosine-and-sine|코사인과 사인]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다. 복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 곱셈군 $\mathbb{C}^{\times}$, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 거듭제곱은 [[power-of-a-complex-number]], 복소 지수함수는 [[complex-exponential-function]]의 것이다. 군과 그 준동형, 핵 $\operatorname{Ker}$는 [[group-homomorphism|군 준동형]]과 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 것이고, 덧셈군 $(\mathbb{R}, +)$는 환 $\mathbb{R}$([[ring-examples|환의 예]]의 (2))의 덧셈이 이루는 군([[ring|환]])이다. 실수 $a$에 대하여 $a\mathbb{Z} = \{ak : k \in \mathbb{Z}\}$로 쓴다. 특히 $2\pi\mathbb{Z} = \{2\pi k : k \in \mathbb{Z}\}$이고 $\pi\mathbb{Z} = \{\pi k : k \in \mathbb{Z}\}$이다.

아래에서 $x$, $y$, $p$는 실수이고 $z$는 복소수이며 $k$는 정수이다.

1. (특수값) $\exp(i\pi / 2) = i$, $\exp(i\pi) = -1$, $\exp(3\pi i / 2) = -i$, $\exp(2\pi i) = 1$이다. 따라서
   $$
   \begin{aligned}
   \cos(\pi / 2) &= 0,\ \sin(\pi / 2) = 1, \\
   \cos \pi &= -1,\ \sin \pi = 0, \\
   \cos(3\pi / 2) &= 0,\ \sin(3\pi / 2) = -1, \\
   \cos(2\pi) &= 1,\ \sin(2\pi) = 0
   \end{aligned}
   $$
   이다.
2. (옮기기) $\exp(i(x + \pi / 2)) = i \exp(ix)$이고 $\exp(z + 2\pi i) = \exp(z)$이며, $\exp(i(x + 2\pi k)) = \exp(ix)$이다. 또
   $$
   \begin{aligned}
   \cos(x + \pi / 2) &= -\sin x, \\
   \sin(x + \pi / 2) &= \cos x, \\
   \cos(x + \pi) &= -\cos x, \\
   \sin(x + \pi) &= -\sin x, \\
   \cos(x + 2\pi k) &= \cos x, \\
   \sin(x + 2\pi k) &= \sin x
   \end{aligned}
   $$
   이다.
3. (값이 $1$인 곳) $\exp(ix) = 1$인 것은 정확히 $x \in 2\pi\mathbb{Z}$일 때이다. 따라서 [[cosine-and-sine|코사인과 사인]]의 (6)에 의해 $\cos x = 1$인 것도 정확히 $x \in 2\pi\mathbb{Z}$일 때이다.
   - (3′) $\exp(ix) = \exp(iy)$인 것은 정확히 $x - y \in 2\pi\mathbb{Z}$일 때이다. 곧 정확히 $\cos x = \cos y$이고 $\sin x = \sin y$일 때이다.
4. (주기) 다음 세 조건은 모두 $p \in 2\pi\mathbb{Z}$와 같다. (i) 모든 실수 $x$에서 $\cos(x + p) = \cos x$이다. (ii) 모든 실수 $x$에서 $\sin(x + p) = \sin x$이다. (iii) 모든 복소수 $z$에서 $\exp(z + ip) = \exp(z)$이다. 특히 $0 < p < 2\pi$이면 $p$는 (i)–(iii)을 만족하지 않는다.
5. (근) $\sin x = 0$인 것은 정확히 $x \in \pi\mathbb{Z}$일 때이고, $\cos x = 0$인 것은 정확히 $x - \pi / 2 \in \pi\mathbb{Z}$일 때이다.
6. (준동형과 핵) 실수 $x$에서의 값이 $\exp(ix)$인 함수 $E : \mathbb{R} \to \mathbb{C}^{\times}$는 덧셈군 $(\mathbb{R}, +)$에서 곱셈군 $\mathbb{C}^{\times}$로의 군 준동형이고 $\operatorname{Ker} E = 2\pi\mathbb{Z}$이다.
:::

:::english
Cosine and sine are those of the entry on cosine and sine, and $\pi$ is that of the entry on the number π. Complex numbers and $i$, the operations of the field $\mathbb{C}$, the multiplicative group $\mathbb{C}^{\times}$, the function $\iota$ and the convention for writing real numbers where complex numbers are required, powers of complex numbers, and the complex exponential function are those of their entries. Groups, homomorphisms and kernels $\operatorname{Ker}$ are those of the entries on group homomorphisms and on kernels and images; the additive group $(\mathbb{R}, +)$ is the group formed by the addition of the ring $\mathbb{R}$. For a real number $a$ we write $a\mathbb{Z} = \{ak : k \in \mathbb{Z}\}$; in particular $2\pi\mathbb{Z} = \{2\pi k : k \in \mathbb{Z}\}$ and $\pi\mathbb{Z} = \{\pi k : k \in \mathbb{Z}\}$.

Below, $x$, $y$, $p$ are real numbers, $z$ is a complex number, and $k$ is an integer.

1. (Special values) $\exp(i\pi / 2) = i$, $\exp(i\pi) = -1$, $\exp(3\pi i / 2) = -i$, $\exp(2\pi i) = 1$. Hence
   $$
   \begin{aligned}
   \cos(\pi / 2) &= 0,\ \sin(\pi / 2) = 1, \\
   \cos \pi &= -1,\ \sin \pi = 0, \\
   \cos(3\pi / 2) &= 0,\ \sin(3\pi / 2) = -1, \\
   \cos(2\pi) &= 1,\ \sin(2\pi) = 0.
   \end{aligned}
   $$
2. (Shifts) $\exp(i(x + \pi / 2)) = i \exp(ix)$, $\exp(z + 2\pi i) = \exp(z)$, and $\exp(i(x + 2\pi k)) = \exp(ix)$. Moreover
   $$
   \begin{aligned}
   \cos(x + \pi / 2) &= -\sin x, \\
   \sin(x + \pi / 2) &= \cos x, \\
   \cos(x + \pi) &= -\cos x, \\
   \sin(x + \pi) &= -\sin x, \\
   \cos(x + 2\pi k) &= \cos x, \\
   \sin(x + 2\pi k) &= \sin x.
   \end{aligned}
   $$
3. (Where the value is $1$) $\exp(ix) = 1$ if and only if $x \in 2\pi\mathbb{Z}$. Hence, by item (6) of the entry on cosine and sine, $\cos x = 1$ if and only if $x \in 2\pi\mathbb{Z}$.
   - (3′) $\exp(ix) = \exp(iy)$ if and only if $x - y \in 2\pi\mathbb{Z}$, that is, if and only if $\cos x = \cos y$ and $\sin x = \sin y$.
4. (Periods) Each of the following three conditions is equivalent to $p \in 2\pi\mathbb{Z}$: (i) $\cos(x + p) = \cos x$ for every real number $x$; (ii) $\sin(x + p) = \sin x$ for every real number $x$; (iii) $\exp(z + ip) = \exp(z)$ for every complex number $z$. In particular, if $0 < p < 2\pi$, then $p$ satisfies none of (i)–(iii).
5. (Zeros) $\sin x = 0$ if and only if $x \in \pi\mathbb{Z}$, and $\cos x = 0$ if and only if $x - \pi / 2 \in \pi\mathbb{Z}$.
6. (Homomorphism and kernel) The function $E : \mathbb{R} \to \mathbb{C}^{\times}$ whose value at a real number $x$ is $\exp(ix)$ is a group homomorphism from the additive group $(\mathbb{R}, +)$ to the multiplicative group $\mathbb{C}^{\times}$, and $\operatorname{Ker} E = 2\pi\mathbb{Z}$.
:::

## 직관

[[definition-of-pi|원주율]]에서 $\exp(i\pi / 2) = i$를 얻었습니다. 덧셈 법칙에 의해 $x$에 $\pi / 2$를 더하는 것은 $\exp(ix)$에 $i$를 곱하는 것이고, $i$를 네 번 곱하면 $i^4 = 1$이므로 제자리입니다. 그래서 $\pi / 2$를 네 번 더한 $2\pi$를 더해도 $\exp(ix)$는 그대로입니다. 이것이 (1)과 (2)입니다.

거꾸로 (3)은 $2\pi$의 정수배가 아닌 곳에서는 $\exp(ix) = 1$이 될 수 없다는 것입니다. 시계의 분침에 비유할 수 있습니다. 분침이 제자리(값 $1$)로 오는 것은 정확히 한 시간의 정수배가 지났을 때이고, 그 사이 어느 때든 15분 단위의 네 구간 가운데 한 곳에 있습니다. 증명도 그렇게 합니다. 먼저 $x$에서 $2\pi$의 정수배를 떼어 $[0, 2\pi)$의 나머지 $r$을 남기고, 다시 $r$에서 $\pi / 2$의 배수를 떼어 $[0, \pi / 2)$의 나머지 $s$를 남깁니다. 그러면 $\exp(ir)$는 $\exp(is)$에 $1$, $i$, $-1$, $-i$ 가운데 하나를 곱한 것이고, $[0, \pi / 2)$에서 코사인은 양수, 사인은 $0$ 이상이므로 네 경우의 실수부와 허수부의 부호를 보면 $s = 0$이고 곱한 것이 $1$일 때만 값이 $1$입니다. 비유가 맞지 않는 곳은 "시간"입니다. 여기서 $x$는 분침이 돈 각도나 거리를 뜻하지 않고, 이 강의는 곡선의 길이를 다루지 않습니다.

(4)는 "$2\pi$보다 작은 양의 주기는 없다"를 포함합니다. 출처는 이것을 "$\exp(ix) = 1$인 가장 작은 양수"를 잡아서 보이는데, 이 항목은 그런 수가 있는지 따로 묻지 않고 (3)에서 바로 얻습니다. $p = 0$은 $2\pi\mathbb{Z}$의 원소이므로 (4)의 세 조건을 만족하고, 음수 $p = -2\pi$도 그렇습니다.

## 증명

:::idea
$\exp(i\pi / 2) = i$와 덧셈 법칙으로 (1), (2)를 얻는다. (3)은 아르키메데스 성질로 $x = 2\pi k + r$($0 \le r < 2\pi$), $r = j\pi / 2 + s$($j \in \{0, 1, 2, 3\}$, $0 \le s < \pi / 2$)로 나누고, $\exp(ir) = i^j \exp(is)$의 실수부와 허수부를 $[0, \pi / 2)$에서의 코사인과 사인의 부호로 따진다.
:::

:::hint
$\exp(ir) = 1$이고 $j = 1$이면 $\exp(ir) = i\exp(is)$의 허수부는 $\cos s$입니다. [[complex-number]]의 (4)를 보세요. 이것은 양수입니다.
:::

:::hint
$\sin p = 0$만으로는 $p \in 2\pi\mathbb{Z}$가 아닐 수 있습니다($p = \pi$). (4)의 (ii)에서는 $x = 0$과 $x = \pi / 2$를 둘 다 넣어 보세요.
:::

:::proof
"원주율의 (2)"처럼 쓴 것은 [[definition-of-pi]], "코사인과 사인의 (6)"은 [[cosine-and-sine]], "덧셈정리의 (1)"은 [[trigonometric-addition-formulas]], "덧셈 법칙의 (3)"은 [[addition-law-of-complex-exponential]], "복소수체의 (5)"는 [[complex-field]], "복소수의 (4)"는 [[complex-number]], "거듭제곱의 (3)"은 [[power-of-a-complex-number]], "순서 성질의 (4)"는 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸거나 분배하는 곳은 체의 조건에 의한다. 실수 $a$, $b$에서 $i\,\iota(a + b) = i\,\iota(a) + i\,\iota(b)$이므로(복소수체의 (2)와 분배법칙) 덧셈 법칙의 (1)에 의해
$$
\exp(i(a + b)) = \exp(ia)\exp(ib)
$$
이다(가). 또 정수 $k$와 실수 $a$에서 복소수체의 (2)에 의해 $i\,\iota(ka) = \iota(k)\,(i\,\iota(a))$이므로 덧셈 법칙의 (3)에 의해 $\exp(i\,ka) = \exp(ia)^k$이다(나).

**1의 증명.** 원주율의 (3)의 (ii)에 의해 $\exp(i\pi / 2) = i$이다. (K…)의 계산으로 $\pi = \pi / 2 + \pi / 2$, $3\pi / 2 = \pi + \pi / 2$, $2\pi = \pi + \pi$이므로 (가)와 복소수체의 (5)의 $ii = -1$에 의해
$$
\begin{aligned}
\exp(i\pi) &= ii = -1, \\
\exp(3\pi i / 2) &= (-1)\, i = -i, \\
\exp(2\pi i) &= (-1)(-1) = 1
\end{aligned}
$$
이다. 코사인과 사인의 정의와 [[complex-field]]의 (2)의 (ii), (4)에 의해 $-1 = \iota(-1)$의 실수부는 $-1$, 허수부는 $0$이고, $-i = 0 + (-1) i$의 실수부는 $0$, 허수부는 $-1$이며, $1$과 $i$도 같은 방법으로 읽으면 값들이 나온다.

**2의 증명.** (가)와 (1)에 의해 $\exp(i(x + \pi / 2)) = \exp(ix)\, i$이다. $z + 2\pi i$에서 덧셈 법칙의 (1)과 (1)에 의해 $\exp(z + 2\pi i) = \exp(z)\exp(2\pi i) = \exp(z)$이다. (나)와 (1)에 의해 $\exp(i\,2\pi k) = 1^k = 1$이고(거듭제곱의 (3)), (가)에 의해 $\exp(i(x + 2\pi k)) = \exp(ix)$이다. 코사인과 사인에 대한 식은 [[trigonometric-addition-formulas|덧셈정리]]의 (1)에 (1)의 값을 넣은 것이다. 예컨대 $\cos(x + \pi / 2) = \cos x \cdot 0 - \sin x \cdot 1 = -\sin x$이고 $\sin(x + \pi) = \sin x \cdot (-1) + \cos x \cdot 0 = -\sin x$이다. 마지막 두 식은 $\exp(i(x + 2\pi k)) = \exp(ix)$의 실수부와 허수부이다.

**3의 증명.** $x \in 2\pi\mathbb{Z}$이면 (2)에서 $x = 0 + 2\pi k$로 두면 $\exp(ix) = \exp(0) = 1$이다([[complex-exponential-function]]의 (3)). 거꾸로 $\exp(ix) = 1$이라 하자. 원주율의 (4)에 의해 $0 < \pi$이므로 $0 < 2\pi$이다.

첫째 나누기. [[archimedean-property|아르키메데스 성질]]의 (4)를 $t = x\,(2\pi)^{-1}$에 쓰면 $n - 1 \le t < n$인 정수 $n$이 있다. $k = n - 1$로 두고 $r = x - 2\pi k$로 두면, 순서 성질의 (4)의 (i), (iii)과 (2)의 (ii)에 의해 각 변에 $2\pi$를 곱하고 $-2\pi k$를 더해 $0 \le r < 2\pi$이다. (가)와 (2)에 의해 $1 = \exp(ix) = \exp(ir)\exp(i\,2\pi k) = \exp(ir)$이다.

둘째 나누기. 같은 (4)를 $t' = r\,(\pi / 2)^{-1}$에 쓰면 $m - 1 \le t' < m$인 정수 $m$이 있고, $j = m - 1$, $s = r - j\pi / 2$로 두면 같은 방법으로 $0 \le s < \pi / 2$이다. $0 \le t' < 4$이므로 $0 \le t' < m$에서 $0 < m$이고, [[prime-number]]의 (Z1)에 의해 $1 \le m$, 곧 $0 \le j$이다. 또 $j \le t' < 4$이므로 (Z1)에 의해 $j \le 3$이다. 따라서 $j$는 $0$, $1$, $2$, $3$ 가운데 하나이다([[well-ordering-principle]]의 (Z5)와 (Z1)). (가), (나), (1)에 의해
$$
\begin{aligned}
1 = \exp(ir) &= \exp(i\pi / 2)^j \exp(is) \\
&= i^j u
\end{aligned}
$$
이다. 여기서 $u = \exp(is)$이고, 코사인과 사인의 정의에 의해 $\operatorname{Re} u = \cos s$, $\operatorname{Im} u = \sin s$이다. 원주율의 (2)의 (ii)에 의해 $0 < \cos s$이다. $s = 0$이거나 $0 < s < \pi / 2$이고, 앞의 경우 $\sin s = 0$(코사인과 사인의 (2)), 뒤의 경우 원주율의 (3)의 (i)에 의해 $0 < \sin s$이다. $1$의 실수부는 $1$이고 허수부는 $0$이다.
- $j = 1$이면 복소수의 (4)에 의해 $\operatorname{Im}(iu) = \operatorname{Re} u = \cos s > 0$이어서 허수부가 $0$이 아니다.
- $j = 2$이면 거듭제곱의 (6)에 의해 $i^2 u = -u$이고 실수부 $-\cos s$는 순서 성질의 (3)의 (ii)에 의해 음수여서 $1$이 아니다.
- $j = 3$이면 $i^3 u = -(iu)$이고 허수부 $-\cos s$가 음수여서 $0$이 아니다.

따라서 $j = 0$이고 $u = 1$이다. 그러면 $\sin s = 0$이므로 $0 < s$일 수 없고 $s = 0$이다. 그러므로 $r = 0 \cdot \pi / 2 + 0 = 0$이고 $x = 2\pi k \in 2\pi\mathbb{Z}$이다. 끝으로 $\cos x = 1$에 관한 문장은 코사인과 사인의 (6)과 방금 보인 것이다.

**3′의 증명.** (가)와 덧셈 법칙의 (2)에 의해 $\exp(i(x - y)) = \exp(ix)\exp(iy)^{-1}$이므로, $\exp(ix) = \exp(iy)$인 것은 정확히 $\exp(i(x - y)) = 1$일 때이고, (3)에 의해 정확히 $x - y \in 2\pi\mathbb{Z}$일 때이다. 마지막 문장은 코사인과 사인의 (1)이다.

**4의 증명.** $p \in 2\pi\mathbb{Z}$이면 (2)에 의해 (i)–(iii)이 모두 성립한다. 거꾸로 (i)이면 $x = 0$에서 $\cos p = \cos 0 = 1$이므로 (3)에 의해 $p \in 2\pi\mathbb{Z}$이다. (ii)이면 $x = 0$에서 $\sin p = 0$이고, $x = \pi / 2$에서 (2)의 $\sin(y + \pi / 2) = \cos y$를 $y = p$에 써서 $\cos p = \sin(\pi / 2 + p) = \sin(\pi / 2) = 1$이므로 (3)에 의해 $p \in 2\pi\mathbb{Z}$이다. (iii)이면 $z = 0$에서 $\exp(ip) = \exp(0) = 1$이므로 (3)에 의해 $p \in 2\pi\mathbb{Z}$이다. $0 < p < 2\pi$이고 $p = 2\pi k$이면 순서 성질의 (6)의 (iv)에 의해 $0 < k < 1$인데, 이런 정수는 (Z1)에 의해 없다. 따라서 그런 $p$는 $2\pi\mathbb{Z}$에 들지 않는다.

**5의 증명.** $\sin x = 0$이면 코사인과 사인의 (4)에 의해 $(\cos x)^2 = 1$이므로 (K10)에 의해 $\cos x$는 $1$이거나 $-1$이고, 코사인과 사인의 (6)에 의해 $\exp(ix)$는 $1$이거나 $-1$이다. (나)에 의해 $\exp(i\,2x) = \exp(ix)^2 = 1$이므로 (3)에 의해 $2x = 2\pi k$인 정수 $k$가 있고, $x = \pi k$이다. 거꾸로 $x = \pi k$이면 (나)와 (1)에 의해 $\exp(ix) = (-1)^k$이고, 거듭제곱의 (5)와 [[complex-field]]의 (2)의 (ii)에 의해 그 허수부는 $0$이다. 코사인 쪽: $y = x - \pi / 2$로 두면 (K…)의 계산으로 $x = y + \pi / 2$이므로 (2)에 의해 $\cos x = \cos(y + \pi / 2) = -\sin y$이다. 따라서 $\cos x = 0$인 것은 정확히 $\sin y = 0$일 때이고, 앞의 결과에 의해 정확히 $x - \pi / 2 \in \pi\mathbb{Z}$일 때이다.

**6의 증명.** [[addition-law-of-complex-exponential|덧셈 법칙]]의 (2)에 의해 $E$의 값은 $\mathbb{C}^{\times}$에 있고, (가)는 [[group-homomorphism|군 준동형]]의 정의의 등식 $E(a + b) = E(a)E(b)$이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 정의에 의해 $\operatorname{Ker} E = \{x \in \mathbb{R} : \exp(ix) = 1\}$이고 $\mathbb{C}^{\times}$의 항등원은 $1$이므로, (3)에 의해 이 집합은 $2\pi\mathbb{Z}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[x = 5π/2 에서의 값]
$5\pi / 2 = \pi / 2 + 2\pi \cdot 1$이므로 (2)에 의해 $\cos(5\pi / 2) = \cos(\pi / 2) = 0$이고 $\sin(5\pi / 2) = \sin(\pi / 2) = 1$입니다. 곧 $\exp(5\pi i / 2) = i$입니다. (3′)에 의해 $\exp(ix) = i$인 실수 $x$는 정확히 $\pi / 2 + 2\pi k$ 꼴의 수입니다.
:::

:::example[음수에서의 근]
(5)에 의해 $\sin(-\pi) = 0$이고 $\cos(-\pi / 2) = 0$입니다. $-\pi = \pi \cdot (-1)$이고 $-\pi / 2 - \pi / 2 = \pi \cdot (-1)$이기 때문입니다. 한편 $\sin(-\pi / 2) = -1$이므로 $-\pi / 2 \notin \pi\mathbb{Z}$와 맞습니다.
:::

:::counterexample[sin p = 0 이지만 주기가 아닌 예]
$p = \pi$이면 (1)에 의해 $\sin(0 + \pi) = 0 = \sin 0$이지만, (2)에 의해 $\sin(x + \pi) = -\sin x$이므로 $x = \pi / 2$에서 $\sin(\pi / 2 + \pi) = -1 \ne 1 = \sin(\pi / 2)$입니다. 그래서 한 점에서 값이 같다는 것만으로는 주기라고 할 수 없고, (4)의 증명이 $x = \pi / 2$를 따로 넣은 까닭이 이것입니다.
:::

## 확인 질문

:::check[$\exp(ix) = -1$인 실수 $x$는 정확히 어떤 수인가?]
(1)에 의해 $\exp(i\pi) = -1$이므로 (3′)에 의해 $\exp(ix) = \exp(i\pi)$인 것은 정확히 $x - \pi \in 2\pi\mathbb{Z}$일 때, 곧 $x = \pi + 2\pi k$($k$는 정수)일 때입니다.
:::

:::check[$\cos(x + 3\pi / 2)$를 $\sin x$나 $\cos x$로 나타내면 무엇인가?]
(2)를 두 번 쓰면 $\cos(x + \pi + \pi / 2) = -\sin(x + \pi) = \sin x$입니다.
:::
