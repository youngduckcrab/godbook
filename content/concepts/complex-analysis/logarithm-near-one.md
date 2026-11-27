---
title: 1 근처의 복소 로그
title_en: The Complex Logarithm near 1
aliases: [1 근처의 로그, 로그의 멱급수 (복소), 원판 B(1, 1) 위의 로그, complex logarithm near 1, logarithm on the disc around 1]
kind: theorem
field: complex-analysis
msc: ["30B10", "33B10"]
level: undergrad
summary: 중심이 1 이고 계수가 (−1)^(n+1)/n 인 복소 멱급수는 수렴 반지름이 1 이고, 그것이 원판 B(1, 1) 위에 나타내는 함수 lg 는 lg(1) = 0 이고 도함수가 1/z 인 정칙함수이며 exp(lg(z)) = z 를 만족한다. 따라서 lg(z) 의 실수부는 ln|z| 이고 허수부는 z 의 편각이며, 0 과 2 사이의 실수에서는 실수의 자연로그와 같다. 도함수가 1/z 이고 1 에서 0 인 B(1, 1) 위의 정칙함수는 lg 뿐이다.
requires: [function, adding-or-removing-an-element, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, series-indexed-from-zero, power-series, radius-of-convergence, natural-logarithm, exponential-function, logarithm-power-series, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, complex-series, absolute-convergence-of-complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, polar-form, complex-derivative, complex-derivative-rules, zero-derivative-on-a-region, complex-power-series-is-holomorphic, higher-complex-derivatives, taylor-coefficients-of-complex-power-series, derivative-of-complex-exponential]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Logarithms and Complex Exponentials 절의 첫 문단, 로그의 가지의 정의, 주 로그의 정의, 가지의 도함수의 명제와 그 증명, source/sec_logexp.ptx:4–29, 30–41, 43–61, 63–83, 120–156, 201–231; 7장 연습문제 ex_7_3, source/exercises-chap7.ptx:557–584"
    checked: original
    note: "출처는 로그를 exp 의 역으로 다루고(sec_logexp.ptx:4–29), 영역 G 위의 연속함수로서 exp(Log z) = z 를 만족하는 것을 로그의 가지라 하며(30–41줄), 주 로그를 ln|z| + i Arg z 로 정의한다(63–83줄). 가지의 도함수가 1/z 라는 명제(201–231줄)는 역함수의 미분(Proposition inversederivative)으로 증명한다. 이 항목은 주편각을 쓰지 않고, 원판 B(1, 1) 위에서 멱급수로 함수 lg 를 정의한 뒤 (2) lg′ = 1/z 를 복소 멱급수의 항별 미분과 등비급수로, (3) exp(lg(z)) = z 를 z·exp(−lg(z)) 의 도함수가 0 이라는 것으로 증명한다. 따라서 (3)에 의해 lg 는 출처의 뜻으로 B(1, 1) 위의 로그의 가지이다(lg 는 정칙이므로 연속). 이름 lg 와 '1 근처의 로그'는 이 항목 안의 이름이고 출처의 Log 와 다른 기호이다. 정의의 멱급수 Σ_{n≥1} (−1)^{n+1}(z − 1)ⁿ/n 과 그 반지름 1 은 출처 7장 연습문제 ex_7_3(exercises-chap7.ptx:557–584)이 Log z 의 중심 1 의 멱급수로 답에 적는 것과 같고, 같은 연습문제의 1/z 의 중심 1 의 멱급수 Σ (−1)ᵏ(z − 1)ᵏ 는 (2)의 증명에서 lg′ 의 급수로 나오는 것과 같다. 반례 '$w = 2\\pi i$에서 $\\operatorname{lg}(\\exp(w)) \\ne w$'는 출처 첫 문단(4–29줄)의 'exp 가 일대일이 아니어서 Log(exp z) = z 를 모두 바랄 수는 없다'는 말과 같은 발상이고, 출처 135–156줄은 Log(exp z) = z 가 정확히 Im z ∈ (−π, π] 일 때이며 어느 가지에서나 Log(exp z) ≠ z 인 z 가 많다고 적는다. 확인 질문 '$F : B(1, 1) \\to \\mathbb{C}$가 정칙함수이고 $F'(z) = 1/z$, $F(1) = 2\\pi i$이면 $\\exp(F(z))$는 무엇인가?'는 출처 127–132줄(어느 가지의 값도 Log 의 값과 2πi 의 배수만큼만 다르다)과 같은 발상이다. 예시 '$1 + i/2$에서의 값'의 Re lg(z) = ln|z| 는 출처 43–56줄이 가지의 실수부가 ln|z| 여야 한다고 보이는 것과 같은 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(등비급수의 고계 도함수 합, exp 의 항별 미분). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)의 것이다. 복소 멱급수, 수렴 반지름, 복소 멱급수가 나타내는 함수는 [[complex-power-series|복소 멱급수]]와 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 것이다. 복소 지수함수 $\exp$는 [[complex-exponential-function]], 편각의 집합 $\arg z$는 [[polar-form|극형식과 편각]]의 것이고, 실수의 자연로그 $\ln$은 [[natural-logarithm]]의 것이다. 정칙함수와 도함수는 [[complex-derivative|복소 미분]]의 것이다.

**1 근처의 로그.** 중심이 $1$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (-1)^{n+1} n^{-1}$인 복소 멱급수를 생각한다. 아래 (1)에 의해 이 복소 멱급수의 수렴 반지름은 $1$이다. 이것이 $B(1, 1)$ 위에 나타내는 함수를 이 항목에서 $\operatorname{lg} : B(1, 1) \to \mathbb{C}$로 쓰고 **1 근처의 로그**라 부른다. 곧 $|z - 1| < 1$인 모든 $z$에서
$$
\operatorname{lg}(z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\,(z - 1)^n
$$
이다. 이름 "1 근처의 로그"와 기호 $\operatorname{lg}$는 이 항목과 이것을 인용하는 곳에서만 쓰는 이름이다.

다음이 성립한다. 아래에서 $z$는 $B(1, 1)$의 원소이다.

1. (반지름과 중심) 이 복소 멱급수의 수렴 반지름은 $1$이고, $\operatorname{lg}$는 그것이 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 $D = B(1, 1)$ 위에 나타내는 함수이다. $\operatorname{lg}(1) = 0$이다. $B(1, 1)$의 모든 점은 $0$이 아니다.
2. (도함수) $\operatorname{lg}$는 정칙함수이고 $\operatorname{lg}'(z) = 1/z$이다. 특히 $\operatorname{lg}'(1) = 1$이다.
3. (지수함수의 역) $\exp(\operatorname{lg}(z)) = z$이다. 따라서 $\operatorname{Re} \operatorname{lg}(z) = \ln|z|$이고 $\operatorname{Im} \operatorname{lg}(z) \in \arg z$이다.
4. (실수의 자연로그와의 일치) $0 < x < 2$인 실수 $x$에서 $\iota(x) \in B(1, 1)$이고 $\operatorname{lg}(\iota(x)) = \iota(\ln x)$이다.
5. (도함수와 한 점의 값으로 정해진다) $F : B(1, 1) \to \mathbb{C}$가 정칙함수이고 모든 $z \in B(1, 1)$에서 $F'(z) = 1/z$이며 $F(1) = 0$이면 $F = \operatorname{lg}$이다. 더 일반적으로 $F'(z) = 1/z$인 정칙함수 $F : B(1, 1) \to \mathbb{C}$는 모든 $z$에서 $F(z) = \operatorname{lg}(z) + F(1)$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number, and powers are those of the entry on powers of a complex number. The open ball $B(a, r)$ is that of (3) of the entry on the metric of the complex plane. Complex power series, the radius of convergence, and the function represented by a complex power series are those of the entry on complex power series and of (7) of the entry on the radius of convergence of a complex power series. The complex exponential function $\exp$ is that of the entry on the complex exponential function, the set $\arg z$ of arguments is that of the entry on polar form and arguments, and the real natural logarithm $\ln$ is that of the entry on the natural logarithm. Holomorphic functions and derivatives are those of the entry on the complex derivative.

**The logarithm near 1.** Consider the complex power series with center $1$, $c_0 = 0$, and $c_n = (-1)^{n+1} n^{-1}$ for natural numbers $n$. By (1) below its radius of convergence is $1$. In this entry the function it represents on $B(1, 1)$ is written $\operatorname{lg} : B(1, 1) \to \mathbb{C}$ and called the **logarithm near 1**. That is, for every $z$ with $|z - 1| < 1$
$$
\operatorname{lg}(z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\,(z - 1)^n.
$$
The name "logarithm near 1" and the symbol $\operatorname{lg}$ are used only in this entry and where it is cited.

The following hold. Below, $z$ is an element of $B(1, 1)$.

1. (Radius and center) The radius of convergence of this complex power series is $1$, and $\operatorname{lg}$ is the function it represents on $D = B(1, 1)$ of (7) of the entry on the radius of convergence of a complex power series. $\operatorname{lg}(1) = 0$. No point of $B(1, 1)$ is $0$.
2. (Derivative) $\operatorname{lg}$ is a holomorphic function and $\operatorname{lg}'(z) = 1/z$. In particular $\operatorname{lg}'(1) = 1$.
3. (Inverse of the exponential function) $\exp(\operatorname{lg}(z)) = z$. Hence $\operatorname{Re} \operatorname{lg}(z) = \ln|z|$ and $\operatorname{Im} \operatorname{lg}(z) \in \arg z$.
4. (Agreement with the real natural logarithm) For real $x$ with $0 < x < 2$, $\iota(x) \in B(1, 1)$ and $\operatorname{lg}(\iota(x)) = \iota(\ln x)$.
5. (Determined by the derivative and one value) If $F : B(1, 1) \to \mathbb{C}$ is a holomorphic function with $F'(z) = 1/z$ for every $z \in B(1, 1)$ and $F(1) = 0$, then $F = \operatorname{lg}$. More generally, every holomorphic function $F : B(1, 1) \to \mathbb{C}$ with $F'(z) = 1/z$ satisfies $F(z) = \operatorname{lg}(z) + F(1)$ for every $z$.
:::

## 직관

실수의 자연로그는 $|x - 1| < 1$에서 멱급수 $\sum (-1)^{n+1}(x - 1)^n/n$의 합입니다. 같은 계수로 복소 멱급수를 만들면 반지름이 같아서, $1$을 중심으로 하는 반지름 $1$인 원판 위에 함수 $\operatorname{lg}$가 생깁니다. 이 함수를 항마다 미분하면 등비급수 $\sum (1 - z)^n$이 되고 그 합이 $1/z$이므로, $\operatorname{lg}$는 $1/z$의 원시함수 역할을 합니다. 그러면 $z\exp(-\operatorname{lg}(z))$의 도함수가 $0$이어서 $\exp(\operatorname{lg}(z)) = z$, 곧 $\operatorname{lg}$는 원판 위에서 지수함수를 되돌리는 함수입니다.

지수함수는 $2\pi i$만큼 옮겨도 같은 값을 주므로 복소평면 전체에서 되돌릴 수는 없습니다. 이 항목은 $1$ 둘레의 작은 원판에서만 되돌리는 함수 하나를 멱급수로 직접 만듭니다. 원판 위에서 그 값의 실수부는 $\ln|z|$로 정해지고, 허수부는 $z$의 편각 가운데 하나입니다.

비유하면 $\operatorname{lg}$는 원판이라는 작은 지역 안에서만 쓰는 지도입니다. 지역 안에서는 지수함수가 보낸 점을 어디서 왔는지 되짚어 주지만, 지역의 바깥이나 지수함수가 같은 점으로 보내는 여러 출발점은 구별하지 않습니다(아래 반례). 비유의 "지역"은 정의역 $B(1, 1)$이고, "되짚기"는 (3)의 $\exp(\operatorname{lg}(z)) = z$입니다.

## 증명

:::idea
반지름은 실수의 로그 급수에서 가져온다. 항별 미분한 급수가 등비급수 $\sum (1 - z)^n$이 되어 $\operatorname{lg}' = 1/z$이고, $z\exp(-\operatorname{lg}(z))$의 도함수가 $0$이므로 원판에서 상수 $1$이다.
:::

:::hint
$(n + 1)\,c_{n+1} = (-1)^n$이고 $(-1)^n (z - 1)^n = (1 - z)^n$입니다.
:::

:::hint
$\operatorname{Re} \operatorname{lg}(z) = \ln|z|$는 $|\exp(w)| = \exp(\operatorname{Re} w)$에서 나옵니다.
:::

:::proof
"복소 멱급수 (n)"은 [[complex-power-series|복소 멱급수]], "복소 반지름 (n)"은 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]], "항별 미분 (n)"은 [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "덧셈 법칙 (n)"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]], "복소 거듭제곱 (n)"은 [[power-of-a-complex-number]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이고, 체 $\mathbb{C}$의 계산은 [[complex-field]]의 (1)의 체의 법칙이다. 실수 $e_0 = 0$, 자연수 $n$에서 $e_n = (-1)^{n+1} n^{-1}$로 두면 $c_n = \iota(e_n)$이다([[complex-field]]의 (2), [[power-of-a-complex-number]]의 (5)).

**1의 증명.** 중심이 $1$이고 계수가 $(e_n)_{n \ge 0}$인 실멱급수를 $P_1$, 중심이 $0$이고 계수가 $(e_n)_{n \ge 0}$인 실멱급수를 $P_0$이라 하자. [[radius-of-convergence]]의 집합 $A$는 계수의 절댓값 $|e_n|$만으로 정해지므로 $P_0$과 $P_1$의 $A$는 같은 집합이다. [[logarithm-power-series|로그의 멱급수]]의 (3)에 의해 $P_0$의 수렴 반지름은 $1$이므로 $P_1$의 수렴 반지름도 $1$이다. 복소 멱급수 (5)의 (iii)을 $a_0 = 1$($\iota(1) = 1$)과 $(e_n)$에 쓰면 이 복소 멱급수의 $A$는 $P_1$의 $A$와 같으므로 수렴 반지름은 $1$이고, 복소 반지름 (7)의 (i)에 의해 $D = B(1, 1)$이다. 진술의 식의 합은 복소 반지름 (7)의 (ii)의 합 $\sum_{n=0}^{\infty} c_n (z - 1)^n$에서 $c_0 = 0$인 $0$번째 항을 [[complex-series|복소 급수]]의 (4)로 뗀 것이다. 같은 (7)의 (ii)에 의해 $\operatorname{lg}(1) = c_0 = 0$이다. $z \in B(1, 1)$이면 $|z - 1| < 1$이므로 $z \ne 0$이다($|0 - 1| = 1$).

**2의 증명.** 항별 미분 (2)에 의해 $\operatorname{lg}$는 정칙함수이고 $\operatorname{lg}'(z) = \sum_{n=0}^{\infty} (n + 1)\,c_{n+1} (z - 1)^n$이다. 실수의 계산으로 $(n + 1)\,e_{n+1} = (n + 1)(-1)^{n+2}(n + 1)^{-1} = (-1)^{n+2} = (-1)^n$이고((K8), [[power-of-a-real-number]]의 (2)의 (i)과 $(-1)^2 = 1$), 복소 거듭제곱 (5), (3)의 (i)에 의해
$$
\begin{aligned}
&(n + 1)\,c_{n+1}\,(z - 1)^n \\
&= (-1)^n (z - 1)^n \\
&= \bigl((-1)(z - 1)\bigr)^n = (1 - z)^n
\end{aligned}
$$
이다. $|1 - z| = |z - 1| < 1$이므로 [[absolute-convergence-of-complex-series|복소 급수의 절대수렴]]의 (6)의 (i)에 의해 $\operatorname{lg}'(z) = \sum_{n=0}^{\infty} (1 - z)^n = \bigl(1 - (1 - z)\bigr)^{-1} = 1/z$이다. $z = 1$이면 $1/1 = 1$이다.

**3의 증명.** $z$에서의 값이 $\exp(-\operatorname{lg}(z))$인 함수 $u : B(1, 1) \to \mathbb{C}$는, [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)과 법칙 (1), (5)에 의해 정칙함수이고 $u'(z) = \exp(-\operatorname{lg}(z)) \cdot (-\operatorname{lg}'(z)) = -u(z)/z$이다. $h(z) = z\,u(z)$로 두면 [[complex-derivative|복소 미분]]의 (5)와 법칙 (2)에 의해 $h$는 정칙함수이고
$$
h'(z) = u(z) + z \cdot \bigl(-u(z)/z\bigr) = 0
$$
이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (2)에 의해 모든 $z \in B(1, 1)$에서 $h(z) = h(1) = 1 \cdot \exp(-0) = 1$이다([[complex-exponential-function|복소 지수함수]]의 (3)). 덧셈 법칙 (2)에 의해 $u(z) = \exp(\operatorname{lg}(z))^{-1}$이므로 $z\,\exp(\operatorname{lg}(z))^{-1} = 1$, 곧 $\exp(\operatorname{lg}(z)) = z$이다.

$w = \operatorname{lg}(z)$로 두자. 덧셈 법칙 (6)에 의해 $|z| = |\exp(w)| = \exp(\operatorname{Re} w)$이고, (1)에 의해 $z \ne 0$이므로 $|z|$는 양의 실수이다. [[exponential-function]]의 (1)에 의해 $\operatorname{Re} w = \ln|z|$이다. 덧셈 법칙 (4)를 $x = \operatorname{Re} w$, $y = \operatorname{Im} w$에 쓰면($w = x + iy$, [[complex-field]]의 (4)) $z = \exp(w) = \iota(\exp(x))\exp(iy) = |z|\exp(i \operatorname{Im} w)$이므로, [[polar-form|극형식과 편각]]의 정의에 의해 $\operatorname{Im} w \in \arg z$이다.

**4의 증명.** $0 < x < 2$이면 $|x - 1| < 1$이므로([[absolute-value]]의 정의, 순서는 [[order-properties-of-reals]]) [[complex-plane-as-metric-space|복소평면의 거리]]의 (6)에 의해 $\iota(x) \in B(\iota(1), 1) = B(1, 1)$이다. 복소 반지름 (7)의 (iv)에 의해 $P_1$이 $I = \{x : |x - 1| < 1\}$ 위에 나타내는 함수를 $g$라 하면 $\operatorname{lg}(\iota(x)) = \iota(g(x))$이다. $g(x) = \sum_{n=0}^{\infty} e_n (x - 1)^n$이고, [[series-indexed-from-zero]]의 (8)로 $e_0 = 0$인 항을 떼면 $g(x) = \sum_{n=1}^{\infty} (-1)^{n+1}(x - 1)^n n^{-1}$이다. $-1 < x - 1 < 1$이므로 [[logarithm-power-series|로그의 멱급수]]의 (1)을 $x - 1$에 쓰면 이 합은 $\ln(1 + (x - 1)) = \ln x$이다. 따라서 $\operatorname{lg}(\iota(x)) = \iota(\ln x)$이다.

**5의 증명.** $F - \operatorname{lg}$는 법칙 (1)에 의해 정칙함수이고 도함수가 모든 점에서 $1/z - 1/z = 0$이므로, [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (2)에 의해 모든 $z$에서 $F(z) - \operatorname{lg}(z) = F(1) - \operatorname{lg}(1) = F(1)$이다((1)의 $\operatorname{lg}(1) = 0$). $F(1) = 0$이면 $F = \operatorname{lg}$이다([[function]]의 같음). $\blacksquare$
:::

## 예시와 반례

:::example[$1 + i/2$에서의 값]
$z = 1 + i/2$이면 $|z - 1| = 1/2 < 1$이므로 $z \in B(1, 1)$입니다. (3)에 의해 $\operatorname{Re} \operatorname{lg}(z) = \ln|z|$이고 $|z| = \sqrt{1 + 1/4} = \sqrt{5}/2$이므로 $\operatorname{Re}\operatorname{lg}(z) = \ln(\sqrt{5}/2)$입니다. 또 $\operatorname{Im}\operatorname{lg}(z)$는 $z$의 편각 가운데 하나입니다. 급수의 항을 차례로 쓰면 $n = 1, 2, 3, 4$에서 $i/2$, $-(i/2)^2/2 = 1/8$, $(i/2)^3/3 = -i/24$, $-(i/2)^4/4 = -1/64$이므로, 실수부의 부분합은 $1/8$, $1/8 - 1/64 = 7/64$로 바뀌어 가고 그 극한이 $\ln(\sqrt{5}/2)$입니다([[complex-series|복소 급수]]의 (2)). 허수부의 부분합은 $1/2$, $1/2 - 1/24 = 11/24$입니다.
:::

:::counterexample[$w = 2\pi i$에서 $\operatorname{lg}(\exp(w)) \ne w$]
(3)은 $\exp(\operatorname{lg}(z)) = z$를 말하지만, 거꾸로 $\operatorname{lg}(\exp(w)) = w$는 $\exp(w) \in B(1, 1)$이어도 성립하지 않을 수 있습니다. $w = 2\pi i$이면 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(2\pi i) = 1 \in B(1, 1)$이지만, (1)에 의해 $\operatorname{lg}(1) = 0 \ne 2\pi i$입니다. 지수함수가 $0$과 $2\pi i$를 같은 점 $1$로 보내므로, $\operatorname{lg}$는 둘 가운데 하나인 $0$만 돌려줍니다.
:::

## 확인 질문

:::check[$\operatorname{lg}$의 $1$에서의 이계도함수와 $c_2$는 어떻게 맞는가?]
$\operatorname{lg}''(1) = -1$이고 $c_2 = -1/2 = \operatorname{lg}''(1)/2!$입니다. (2)에 의해 $\operatorname{lg}'$은 $z$에서의 값이 $z^{-1}$인 함수를 $B(1, 1)$로 제한한 것이고, [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (ii)와 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 그 도함수의 값은 $-z^{-2}$이므로 $\operatorname{lg}''(1) = -1$입니다([[higher-complex-derivatives|고계 복소 도함수]]의 (1)). [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]]의 (4)에 의해 $c_2 = \operatorname{lg}''(1)/2 = -1/2$이고, 이것은 정의의 $c_2 = (-1)^3/2$와 같습니다.
:::

:::check[$F : B(1, 1) \to \mathbb{C}$가 정칙함수이고 $F'(z) = 1/z$, $F(1) = 2\pi i$이면 $\exp(F(z))$는 무엇인가?]
$z$입니다. (5)에 의해 $F(z) = \operatorname{lg}(z) + 2\pi i$이고, [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1), [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(F(z)) = \exp(\operatorname{lg}(z))\exp(2\pi i) = z \cdot 1 = z$입니다.
:::
