---
title: 주 로그
title_en: The Principal Logarithm
aliases: [주로그, 복소 로그, 복소수의 로그, principal logarithm, principal branch of the logarithm, complex logarithm, Log]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: "0 과 음의 실수를 뺀 복소평면 Ω 에서 1/z 를 1 에서 z 로 가는 선분을 따라 적분한 값을 z 의 주 로그 Log z 라 한다. Ω 가 1 에 대해 별 모양인 열린집합이라는 것, Log 가 1/z 의 복소 원시함수이고 exp(Log z) = z, Re Log z = ln|z| 이며 허수부가 −π 와 π 사이에 있는 하나뿐인 편각이라는 것, 이 조건이 Log 를 정한다는 것, 양의 실수와 1 근처의 로그에서의 일치, 곱과 역수의 법칙이 성립하는 조건을 증명한다."
requires: [function, injective-surjective-bijective, real-number-arithmetic, real-order-axioms, order-properties-of-reals, prime-number, absolute-value, natural-logarithm, exponential-function, cosine-and-sine, definition-of-pi, periodicity-of-trigonometric-functions, trigonometric-values-and-pi-estimates, connected-space, continuous-image-of-connected, connected-subsets-of-reals, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-triangle-inequality, open-ball-is-open, open-set-in-metric-space, complex-plane-as-metric-space, continuity-of-complex-operations, complex-exponential-function, addition-law-of-complex-exponential, continuity-of-complex-exponential, polar-form, complex-derivative, complex-derivative-rules, zero-derivative-on-a-region, derivative-of-complex-exponential, logarithm-near-one, path-in-the-complex-plane, path-integral, primitive-and-path-integral, star-shaped-open-set, cauchy-theorem-for-star-shaped-sets]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Logarithms and Complex Exponentials 절의 첫 문단, 로그의 가지의 정의, 주편각과 주 로그의 정의와 그 뒤의 예, 음의 실수 쪽에서의 불연속을 말하는 문단, Log(exp z) 를 따지는 문단, 로그의 합의 법칙을 다루는 문단, 가지의 도함수의 명제와 그 증명, source/sec_logexp.ptx:4–29, 30–41, 63–83, 84–99, 118–132, 135–156, 159–172, 201–231; Antiderivatives 절의 Log 의 예, source/sec_antiderivatives.ptx:63–75; Antiderivatives Again 절의 단순연결 영역의 예와 1/z 의 원시함수를 말하는 문단, source/sec_antiderivagain.ptx:70–83, 108–121; 3장 연습문제, source/exercises-chap3.ptx:669–711, 776–785, 886–988, 997–1005, 1006–1018; 7장 연습문제 ex_7_3, source/exercises-chap7.ptx:557–584; 1장 연습문제 ex_1_1 과 ex_1_3, source/exercises-chap1.ptx:73–117, 173–255; Optional Lab 의 첫 연습문제, source/sec_optionallab-alt.ptx:6–21"
    checked: original
    note: "출처는 영역 G 위의 연속함수로서 exp(Log z) = z 를 만족하는 것을 로그의 가지라 하고(sec_logexp.ptx:30–41), (−π, π] 안의 편각 Arg z 를 주편각이라 하여 주 로그를 ℂ − {0} 위에서 Log z := ln|z| + i Arg z 로 정의한다(63–83줄). 이 항목은 그 길을 따르지 않는다. Arg 를 두지 않고, 정의역을 0 과 음의 실수를 뺀 Ω 로 좁혀, Ω 가 1 에 대해 별 모양이라는 것(1)과 별 모양 열린집합의 원시함수(cauchy-theorem-for-star-shaped-sets 의 (1), (2))로 Log z 를 1 에서 z 로 가는 선분 위의 1/z 의 적분으로 정의한다. (4)에 의해 Ω 의 점에서 Log z = ln|z| + iθ 이고 θ 는 −π < θ < π 인 z 의 편각이므로, Ω 위에서 이 항목의 Log 는 출처의 Log 와 같은 값을 갖는다(Ω 의 점의 주편각은 π 가 아니다). 출처는 이 항목의 Ω 를 ℂ ∖ ℝ_{≤0} 으로 쓴다. 출처는 주 로그가 실수축의 음의 부분에서 연속이 아니므로 ℂ ∖ ℝ_{≤0} 위의 가지라고 적고(118–123줄), 가지의 도함수가 1/z 라는 것(201–231줄)을 역함수의 미분과 연습문제 ex_logexpinv(exercises-chap3.ptx:1006–1018, 가지가 그 상 H 로의 전단사이고 역이 exp 의 제한이라는 것)로 증명한다. 이 항목의 (2)는 코시 정리 쪽에서 오고, (5)는 그 상 H 가 띠 −π < Im w < π 라는 것을 진술한다. 출처의 Antiderivatives 절의 예(sec_antiderivatives.ptx:63–75)는 Log 가 ℂ ∖ ℝ_{≤0} 위의 1/z 의 원시함수라고 적고, Antiderivatives Again 절(sec_antiderivagain.ptx:108–121)은 같은 말을 단순연결 영역의 원시함수의 예로 다시 적는다. 출처는 ℂ ∖ ℝ_{≤0} 이 단순연결이라고 적고 닫힌 경로를 몇 개 그려 보라고 한다(sec_antiderivagain.ptx:70–83의 예 ex_simplyconn). (1)의 (iii)은 이 집합이 1 에 대해 별 모양이라는 것이다. 출처 3장 연습문제 997–1005줄은 극좌표의 코시–리만 방정식으로 Log 가 ℂ ∖ ℝ_{≤0} 에서 정칙임을 다시 보이게 한다. (4)는 출처 연습문제 ex_3_2(exercises-chap3.ptx:886–988)의 'Log(z) = 3πi/2 에는 해가 없다'와 같은 내용을 포함한다. (5)의 Log(exp w) = w 는 출처가 z = x + iy 에서 Log(exp z) = z 인 것은 정확히 y ∈ (−π, π] 일 때라고 적는 문단(135–156줄)과 같은 주제이고, 출처의 반열린 구간이 여기서 열린 구간이 되는 것은 Im w = π 이면 exp(w) 가 음의 실수가 되어 Ω 에 들지 않기 때문이다. (9)의 곱의 법칙이 성립하는 조건은 출처가 실수의 법칙 ln(xy) = ln x + ln y 가 ℂ 에서는 그대로 성립하지 않는다는 것을 Log i + Log(i − 1) 과 Log(i(i − 1)) 로 보이는 문단(159–172줄)과 같은 주제이다. (6)은 출처의 예 Log(2) = ln(2)(84–99줄)를 양의 실수 전체로 진술한 것이다. (7)은 출처 7장 연습문제 ex_7_3(exercises-chap7.ptx:557–584)이 Log 의 1 을 중심으로 하는 멱급수와 그 수렴 반지름을 구하게 하는 것과 같은 주제이다. 반례 '$z = -1 + \\sqrt{3}\\,i$, $w = -\\sqrt{3} + i$에서 $\\operatorname{Log}(zw) \\ne \\operatorname{Log} z + \\operatorname{Log} w$'는 출처의 159–172줄과 같은 발상이고, $w$의 편각 $5\\pi/6$은 출처 1장 연습문제 ex_1_3(exercises-chap1.ptx:173–255)이 $-3 + \\sqrt{3}\\,i$를 $2\\sqrt{3}\\,e^{i5\\pi/6}$로 쓰는 것과 같은 편각이며, $z = -1 + \\sqrt{3}\\,i$는 출처 1장 연습문제 ex_1_1(73–117줄)의 $(-1 + i\\sqrt{3})/2$의 2배이다. 예시 '$\\sqrt{3} + i$와 $-1 + \\sqrt{3}\\,i$에서의 값'은 출처의 Log 의 값의 예(84–99줄)와 3장 연습문제 ex_princval(669–711줄, Log(2i) 와 Log(−1 + i) 의 주값)과 같은 발상이고, 수 $\\sqrt{3} + i$는 Optional Lab 의 첫 연습문제(sec_optionallab-alt.ptx:6–21)가 극형식으로 바꾸게 하는 $-\\frac12(\\sqrt{3} + i)$의 $-2$배이다. 반례 '$-1$ 근처에서 $\\operatorname{Log}$의 허수부가 벌어지는 예'는 출처의 118–123줄(음의 실수 쪽에서 연속이 아니다)과 같은 주제이다. 확인 질문 '$z \\in \\Omega$이면 $\\operatorname{Log}\\overline{z}$는 $\\operatorname{Log} z$와 어떤 관계인가?'는 출처 3장 연습문제(exercises-chap3.ptx:776–785)가 Arg(z̄) = −Arg(z) 인지 묻는 것과 같은 주제이다. 확인 질문 '$\\operatorname{Log}(\\exp(1 + 4i))$는 무엇인가?'는 출처 135–156줄의 Log(exp z) 와 같은 주제이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 주 로그 값, 곱의 법칙의 조건). 독립 검토 없음."
added: 2026-11-27
---

:::statement
함수는 [[function]], 단사, 전사, 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]]의 것이다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 정칙함수와 도함수는 [[complex-derivative|복소 미분]], 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]], 복소 원시함수는 [[primitive-and-path-integral|복소 원시함수와 경로 적분]], 선분 경로 $\sigma_{z,w}$와 그 상은 [[path-in-the-complex-plane|경로]], 경로 적분은 [[path-integral|경로 적분]], "$p$에 대해 별 모양"과 별 모양 열린집합은 [[star-shaped-open-set|별 모양 열린집합]]의 것이다. 복소 지수함수 $\exp$는 [[complex-exponential-function]], 원주율 $\pi$는 [[definition-of-pi|원주율]], 편각과 편각의 집합 $\arg z$는 [[polar-form|극형식과 편각]]의 것이고, 실수의 자연로그 $\ln$과 지수함수는 [[natural-logarithm]]와 [[exponential-function]]의 것이다. 1 근처의 로그 $\operatorname{lg}$는 [[logarithm-near-one|1 근처의 복소 로그]]의 것이다.

**0 과 음의 실수를 뺀 평면.**
$$
\Omega = \mathbb{C} - \{\iota(t) : t \in \mathbb{R},\ t \le 0\}
$$
로 쓴다. 곧 $\Omega$는 $0$ 이하인 실수를 $\iota$로 옮긴 복소수를 모두 뺀 $\mathbb{C}$의 부분집합이다. 글자 $\Omega$는 이 항목과 이것을 인용하는 곳에서 이 뜻으로 쓴다.

**주 로그.** 아래 (1)에 의해 $\Omega$는 $1$에 대해 별 모양인 열린집합이고 $0 \notin \Omega$이다. $z \in \Omega$에서의 값이 $1/z$인 함수 $g : \Omega \to \mathbb{C}$는 정칙함수이다(아래 증명). $z \in \Omega$에서의 값이
$$
\operatorname{Log} z = \int_{\sigma_{1,z}} g = \int_{\sigma_{1,z}} \zeta^{-1}\,d\zeta
$$
인 함수 $\operatorname{Log} : \Omega \to \mathbb{C}$를 **주 로그**(principal logarithm)라 하고, $\operatorname{Log} z$를 $z$의 주 로그라 한다. $\Omega$가 $1$에 대해 별 모양이므로 $\sigma_{1,z}$의 상은 $\Omega$의 부분집합이고, $g$가 연속이므로 이 경로 적분이 정해진다. 인자가 한 글자나 한 수가 아니면 $\operatorname{Log}(zw)$, $\operatorname{Log}(\sqrt{3} + i)$처럼 괄호를 친다. $0$과 음의 실수를 옮긴 복소수에서는 $\operatorname{Log}$를 정하지 않는다. $\operatorname{Log}$는 $B(1, 1)$ 위의 함수 $\operatorname{lg}$와 다른 함수이고, 둘의 관계는 아래 (7)이다.

다음이 성립한다. 아래에서 $z$, $w$는 복소수이다.

1. ($\Omega$)
   - (i) $z \in \Omega$인 것은 정확히 $0 < \operatorname{Re} z$이거나 $\operatorname{Im} z \ne 0$일 때이다. 특히 $1 \in \Omega$이고 $0 \notin \Omega$이며, 양의 실수 $x$에서 $\iota(x) \in \Omega$이고, $0 < \operatorname{Re} z$이면 $z \in \Omega$이다.
   - (ii) $\Omega$는 열린집합이다.
   - (iii) $\Omega$는 $1$에 대해 별 모양이다. 따라서 $\Omega$는 별 모양 열린집합이고 영역이다.
2. (원시함수) $\operatorname{Log}$는 $\Omega$ 위의 $g$의 복소 원시함수이다. 곧 $\operatorname{Log}$는 정칙함수이고 모든 $z \in \Omega$에서 $\operatorname{Log}'(z) = 1/z$이다. $\operatorname{Log} 1 = 0$이고 $\operatorname{Log}$는 연속이다. $H$가 $\Omega$ 위의 $g$의 복소 원시함수이면 모든 $z \in \Omega$에서 $H(z) = \operatorname{Log} z + H(1)$이다.
3. (지수함수의 역, 실수부와 허수부) $z \in \Omega$이면 $\exp(\operatorname{Log} z) = z$이고, $\operatorname{Re} \operatorname{Log} z = \ln|z|$이며, $\operatorname{Im} \operatorname{Log} z \in \arg z$이고 $-\pi < \operatorname{Im} \operatorname{Log} z < \pi$이다.
4. ($\operatorname{Log}$를 정하는 조건) $z \in \Omega$라 하자. $\operatorname{Log} z = w$인 것은 정확히 $\exp(w) = z$이고 $-\pi < \operatorname{Im} w < \pi$일 때이다. 또 $z$의 편각 $\theta$ 가운데 $-\pi < \theta < \pi$인 것은 $\operatorname{Im} \operatorname{Log} z$ 하나뿐이고, $\operatorname{Log} z = \ln|z| + i \operatorname{Im} \operatorname{Log} z$이다.
5. (띠와 $\Omega$) $S = \{w \in \mathbb{C} : -\pi < \operatorname{Im} w < \pi\}$로 두자. $w \in S$이면 $\exp(w) \in \Omega$이고 $\operatorname{Log}(\exp(w)) = w$이다. 따라서 $w \in S$에서의 값이 $\exp(w)$인 함수 $E : S \to \Omega$는 전단사이고, 모든 $z \in \Omega$에서 $\operatorname{Log} z \in S$이고 $E(\operatorname{Log} z) = z$이다.
6. (양의 실수) $0 < x$인 실수 $x$에서 $\operatorname{Log} \iota(x) = \iota(\ln x)$이다.
7. (1 근처의 로그와의 일치) $B(1, 1) \subseteq \Omega$이고, 모든 $z \in B(1, 1)$에서 $\operatorname{Log} z = \operatorname{lg}(z)$이다.
8. (실수부가 양수인 곳) $z \in \Omega$라 하자. $0 < \operatorname{Re} z$인 것은 정확히 $-\pi/2 < \operatorname{Im} \operatorname{Log} z < \pi/2$일 때이다.
9. (곱과 역수)
   - (i) $z$, $w \in \Omega$이고 $-\pi < \operatorname{Im} \operatorname{Log} z + \operatorname{Im} \operatorname{Log} w < \pi$이면 $zw \in \Omega$이고 $\operatorname{Log}(zw) = \operatorname{Log} z + \operatorname{Log} w$이다. 특히 $0 < \operatorname{Re} z$이고 $0 < \operatorname{Re} w$이면 그렇다.
   - (ii) $z \in \Omega$이면 $1/z \in \Omega$이고 $\operatorname{Log}(1/z) = -\operatorname{Log} z$이다.
:::

:::english
Functions are those of the entry on functions, and injective, surjective, bijective are those of the entry on injective, surjective, and bijective functions. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers in place of complex numbers, and the form $a + bi$ are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Holomorphic functions and derivatives are those of the entry on complex differentiation, regions are those of the entry on regions and functions with zero derivative, complex primitives are those of the entry on complex primitives and path integrals, segment paths $\sigma_{z,w}$ and their images are those of the entry on paths, path integrals are those of the entry on path integrals, and "star-shaped with respect to $p$" and star-shaped open sets are those of the entry on star-shaped open sets. The complex exponential function $\exp$ is that of the entry on the complex exponential function, the number $\pi$ is that of the entry on the definition of pi, arguments and the set of arguments $\arg z$ are those of the entry on polar form and arguments, and the natural logarithm $\ln$ and the exponential function of real numbers are those of the entries on the natural logarithm and the exponential function. The logarithm near 1, $\operatorname{lg}$, is that of the entry on the complex logarithm near 1.

**The plane without $0$ and the negative reals.** We write
$$
\Omega = \mathbb{C} - \{\iota(t) : t \in \mathbb{R},\ t \le 0\}.
$$
That is, $\Omega$ is the subset of $\mathbb{C}$ obtained by removing all complex numbers that are images under $\iota$ of real numbers at most $0$. The letter $\Omega$ has this meaning in this entry and wherever this entry is cited.

**The principal logarithm.** By (1) below, $\Omega$ is an open set that is star-shaped with respect to $1$, and $0 \notin \Omega$. The function $g : \Omega \to \mathbb{C}$ whose value at $z \in \Omega$ is $1/z$ is holomorphic (proved below). The function $\operatorname{Log} : \Omega \to \mathbb{C}$ whose value at $z \in \Omega$ is
$$
\operatorname{Log} z = \int_{\sigma_{1,z}} g = \int_{\sigma_{1,z}} \zeta^{-1}\,d\zeta
$$
is called the **principal logarithm**, and $\operatorname{Log} z$ is called the principal logarithm of $z$. Since $\Omega$ is star-shaped with respect to $1$, the image of $\sigma_{1,z}$ is a subset of $\Omega$, and since $g$ is continuous, this path integral is defined. When the argument is not a single letter or a single number we use parentheses, as in $\operatorname{Log}(zw)$ and $\operatorname{Log}(\sqrt{3} + i)$. $\operatorname{Log}$ is not defined at $0$ or at the images of negative real numbers. $\operatorname{Log}$ is a different function from the function $\operatorname{lg}$ on $B(1, 1)$; their relation is (7) below.

The following hold. Below, $z$ and $w$ are complex numbers.

1. ($\Omega$)
   - (i) $z \in \Omega$ exactly when $0 < \operatorname{Re} z$ or $\operatorname{Im} z \ne 0$. In particular $1 \in \Omega$ and $0 \notin \Omega$, $\iota(x) \in \Omega$ for every positive real $x$, and $z \in \Omega$ whenever $0 < \operatorname{Re} z$.
   - (ii) $\Omega$ is an open set.
   - (iii) $\Omega$ is star-shaped with respect to $1$. Hence $\Omega$ is a star-shaped open set and a region.
2. (Primitive) $\operatorname{Log}$ is a complex primitive of $g$ on $\Omega$. That is, $\operatorname{Log}$ is holomorphic and $\operatorname{Log}'(z) = 1/z$ for every $z \in \Omega$. Moreover $\operatorname{Log} 1 = 0$ and $\operatorname{Log}$ is continuous. If $H$ is a complex primitive of $g$ on $\Omega$, then $H(z) = \operatorname{Log} z + H(1)$ for every $z \in \Omega$.
3. (Inverse of the exponential; real and imaginary parts) If $z \in \Omega$, then $\exp(\operatorname{Log} z) = z$, $\operatorname{Re} \operatorname{Log} z = \ln|z|$, $\operatorname{Im} \operatorname{Log} z \in \arg z$, and $-\pi < \operatorname{Im} \operatorname{Log} z < \pi$.
4. (Conditions that determine $\operatorname{Log}$) Let $z \in \Omega$. Then $\operatorname{Log} z = w$ exactly when $\exp(w) = z$ and $-\pi < \operatorname{Im} w < \pi$. Moreover, among the arguments $\theta$ of $z$, the only one with $-\pi < \theta < \pi$ is $\operatorname{Im} \operatorname{Log} z$, and $\operatorname{Log} z = \ln|z| + i \operatorname{Im} \operatorname{Log} z$.
5. (The strip and $\Omega$) Let $S = \{w \in \mathbb{C} : -\pi < \operatorname{Im} w < \pi\}$. If $w \in S$, then $\exp(w) \in \Omega$ and $\operatorname{Log}(\exp(w)) = w$. Hence the function $E : S \to \Omega$ whose value at $w \in S$ is $\exp(w)$ is bijective, and for every $z \in \Omega$ we have $\operatorname{Log} z \in S$ and $E(\operatorname{Log} z) = z$.
6. (Positive reals) For a real number $x$ with $0 < x$, $\operatorname{Log} \iota(x) = \iota(\ln x)$.
7. (Agreement with the logarithm near 1) $B(1, 1) \subseteq \Omega$, and $\operatorname{Log} z = \operatorname{lg}(z)$ for every $z \in B(1, 1)$.
8. (Where the real part is positive) Let $z \in \Omega$. Then $0 < \operatorname{Re} z$ exactly when $-\pi/2 < \operatorname{Im} \operatorname{Log} z < \pi/2$.
9. (Products and reciprocals)
   - (i) If $z$, $w \in \Omega$ and $-\pi < \operatorname{Im} \operatorname{Log} z + \operatorname{Im} \operatorname{Log} w < \pi$, then $zw \in \Omega$ and $\operatorname{Log}(zw) = \operatorname{Log} z + \operatorname{Log} w$. In particular this holds when $0 < \operatorname{Re} z$ and $0 < \operatorname{Re} w$.
   - (ii) If $z \in \Omega$, then $1/z \in \Omega$ and $\operatorname{Log}(1/z) = -\operatorname{Log} z$.
:::

## 직관

실수의 자연로그는 $\ln x = \int_1^x t^{-1}\,dt$였습니다. 주 로그는 같은 식을 복소수로 옮긴 것입니다. $1$에서 $z$까지 곧게 가면서 $1/\zeta$를 적분합니다. 이 적분이 뜻을 가지려면 가는 길에 $0$이 없어야 하고, $1$에서 $\Omega$의 어느 점으로 가는 곧은 길도 $\Omega$를 벗어나지 않는다는 것이 (1)의 (iii)입니다. 별 모양 열린집합 위의 정칙함수는 이렇게 적분해서 원시함수를 얻으므로((2)), $\operatorname{Log}$의 도함수는 $1/z$입니다. $0$만 빼고 음의 실수를 남겨 두면 어떻게 되는지는 두 곳에서 볼 수 있습니다. 아래 반례에서 $-1$ 가까이의 두 점 $\exp(\pm it)$는 $\operatorname{Log}$ 값의 허수부가 $2t$만큼, 곧 $\pi$보다 크게 벌어집니다. [[integrals-over-circles|원 경로 위의 적분]]은 $\mathbb{C} - \{0\}$ 위에서는 $1/z$의 복소 원시함수가 없다는 것을 보였습니다.

$\operatorname{Im} \operatorname{Log} z$는 $z$의 편각 가운데 $-\pi$와 $\pi$ 사이에 있는 것입니다((3), (4)). 원점에 꽂은 시곗바늘이 $z$ 쪽을 가리키게 하려고 양의 실수 쪽에서부터 바늘을 돌린다고 해 봅시다. 같은 방향을 가리키는 돌림은 한 바퀴씩 더하거나 뺀 것이 모두 있고, 이것이 편각의 집합 $\arg z$가 $\theta + 2\pi\mathbb{Z}$ 꼴이라는 것에 해당합니다. $\operatorname{Log}$는 그 가운데 반 바퀴보다 적게 돌린 것 하나를 고릅니다. 바늘이 정확히 반 바퀴 돌아 음의 실수 쪽을 가리키는 경우가 $\Omega$에서 뺀 $0$이 아닌 점들이고, 그래서 $\Omega$의 점에서는 그 하나가 정해집니다. 비유가 맞지 않는 곳은 바늘의 길이입니다. 바늘은 방향만 나타내고, $\operatorname{Re} \operatorname{Log} z = \ln|z|$는 따로 정해집니다.

(3)의 $\exp(\operatorname{Log} z) = z$는 $\Omega$의 모든 점에서 성립하지만, 거꾸로 $\operatorname{Log}(\exp(w)) = w$는 허수부가 $-\pi$와 $\pi$ 사이인 $w$에서만 성립합니다((5). $\exp(w) \in \Omega$이면 $\operatorname{Log}(\exp(w))$의 허수부는 (3)에 의해 그 사이에 있습니다). $w$, $w + 2\pi i$, $w - 2\pi i$, … 는 $\exp$로 모두 같은 점에 가는데, $\operatorname{Log}$는 그 가운데 띠 안에 있는 것 하나만 돌려주기 때문입니다. 같은 까닭으로 곱의 법칙 $\operatorname{Log}(zw) = \operatorname{Log} z + \operatorname{Log} w$는 두 허수부의 합이 $-\pi$와 $\pi$ 사이에 있을 때 성립합니다((9)). 그 합이 이 범위 밖에 있으면, $zw \in \Omega$일 때 왼쪽의 허수부는 (3)에 의해 범위 안에 있으므로 두 쪽이 같을 수 없습니다.

## 증명

:::idea
$\Omega$가 $1$에 대해 별 모양이므로 별 모양 열린집합의 코시 정리가 $1/z$의 원시함수를 준다. $z\exp(-\operatorname{Log} z)$의 도함수가 $0$이어서 $\exp(\operatorname{Log} z) = z$이고, 허수부가 $-\pi$와 $\pi$ 사이에 있다는 것은 연결인 $\Omega$의 연속인 상이 $\pi$와 $-\pi$를 건너뛸 수 없다는 것에서 나온다. (4)는 $\exp(v) = 1$인 $v$가 $2\pi i$의 정수배뿐이라는 것으로, (5)는 (4)와 음의 실수의 편각으로 따진다.
:::

:::hint
(1)의 (iii)에서 $1 + t(z - 1)$의 허수부는 $t \operatorname{Im} z$이고 실수부는 $(1 - t) + t\operatorname{Re} z$입니다.
:::

:::hint
(3)의 범위는 $\operatorname{Im} \operatorname{Log} z = \pi$인 점이 있다면 그 점이 $-|z|$, 곧 음의 실수가 된다는 것에서 나옵니다. 상이 $0$을 포함하고 사이의 점을 모두 가지므로, $\pi$ 이상인 값이 있으면 $\pi$ 자신도 값이 됩니다.
:::

:::proof
"복소수체 (n)"은 [[complex-field]], "절댓값 (n)"은 [[modulus-of-complex-number]], "실수 절댓값 (n)"은 [[absolute-value]], "순서 성질 (n)"은 [[order-properties-of-reals]], "복소 미분 (n)"은 [[complex-derivative|복소 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "덧셈 법칙 (n)"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]], "극형식 (n)"은 [[polar-form|극형식과 편각]], "주기성 (n)"은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]], "원주율 (n)"은 [[definition-of-pi|원주율]], "코시 (n)"은 [[cauchy-theorem-for-star-shaped-sets|별 모양 집합의 원시함수와 코시 정리]]의 번호이다. (K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]], (Z1)은 [[prime-number]]의 것이다. 실수를 복소수 자리에 쓴 식은 복소수체 (3)의 약속대로 읽고, 복소수의 계산은 복소수체 (1)의 체의 법칙과 (2)의 $\iota$의 성질로 한다. [[complex-number]]의 (2)에 의해 $\operatorname{Re}$와 $\operatorname{Im}$은 합을 합으로 보내고, 복소수체 (1)에 의해 차를 차로, $-z$를 $(-\operatorname{Re} z, -\operatorname{Im} z)$로 보낸다. 원주율 (4)에 의해 $0 < \pi$이다.

**1의 증명.** (i) 복소수체 (2)의 (ii), (iii)에 의해 $z \in \iota(\mathbb{R})$인 것은 정확히 $\operatorname{Im} z = 0$일 때이고, 이때 $z = \iota(\operatorname{Re} z)$이다. 따라서 $z \notin \Omega$, 곧 어떤 실수 $t \le 0$에서 $z = \iota(t)$인 것은 정확히 $\operatorname{Im} z = 0$이고 $\operatorname{Re} z \le 0$일 때이다($z = \iota(t)$이면 $\operatorname{Re} z = t$이다). 이것의 부정을 취하고 순서 성질 (1)의 (iii)을 쓰면, $z \in \Omega$인 것은 정확히 $\operatorname{Im} z \ne 0$이거나 $0 < \operatorname{Re} z$일 때이다. $\operatorname{Re} 1 = 1$은 순서 성질 (5)의 (ii)에 의해 양수이므로 $1 \in \Omega$이다. $0 = \iota(0)$이고 $0 \le 0$이므로 $0 \notin \Omega$이다. $0 < x$이면 $\operatorname{Re} \iota(x) = x$이므로 $\iota(x) \in \Omega$이다.

(ii) $z \in \Omega$라 하자. (i)에 의해 다음 두 경우 가운데 하나이다.
- $0 < \operatorname{Re} z$인 경우. $\rho = \operatorname{Re} z$로 두고 $v \in B(z, \rho)$라 하자. [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $|v - z| < \rho$이고, 절댓값 (6)에 의해 $|\operatorname{Re} v - \operatorname{Re} z| = |\operatorname{Re}(v - z)| \le |v - z| < \rho$이다. 실수 절댓값 (8)에 의해 $\operatorname{Re} z - \rho < \operatorname{Re} v$, 곧 $0 < \operatorname{Re} v$이므로 (i)에 의해 $v \in \Omega$이다.
- $\operatorname{Im} z \ne 0$인 경우. 실수 절댓값 (2)에 의해 $\rho = |\operatorname{Im} z|$는 양수이다. $v \in B(z, \rho)$이면 같은 이유로 $|\operatorname{Im} v - \operatorname{Im} z| < \rho$이다. $\operatorname{Im} v = 0$이라면 실수 절댓값 (3)에 의해 $|\operatorname{Im} v - \operatorname{Im} z| = |\operatorname{Im} z| = \rho$이어서 순서 성질 (1)의 (i)에 어긋나므로 $\operatorname{Im} v \ne 0$이고, (i)에 의해 $v \in \Omega$이다.

어느 경우든 $B(z, \rho) \subseteq \Omega$이므로 [[open-set-in-metric-space]]의 정의에 의해 $\Omega$는 열린집합이다.

(iii) $z \in \Omega$이고 $0 \le t \le 1$이라 하고 $v = \sigma_{1,z}(t) = 1 + t(z - 1)$로 두자. 복소수체 (2)의 (ii)와 $\operatorname{Re} 1 = 1$, $\operatorname{Im} 1 = 0$에 의해 $\operatorname{Re} v = 1 + t(\operatorname{Re} z - 1) = (1 - t) + t \operatorname{Re} z$이고 $\operatorname{Im} v = t \operatorname{Im} z$이다. $t = 0$이면 $v = 1 \in \Omega$이다. $0 < t$라 하자. $\operatorname{Im} z \ne 0$이면 (K12)의 (vi)에 의해 $\operatorname{Im} v \ne 0$이므로 $v \in \Omega$이다. $\operatorname{Im} z = 0$이면 (i)에 의해 $0 < \operatorname{Re} z$이므로 (W4)에 의해 $0 < t \operatorname{Re} z$이고, 순서 성질 (3)의 (i)에 의해 $0 \le 1 - t$이므로 순서 성질 (2)의 (iv)에 의해 $0 < t\operatorname{Re} z + (1 - t) = \operatorname{Re} v$이고, (i)에 의해 $v \in \Omega$이다. 곧 $\sigma_{1,z}$의 상은 $\Omega$의 부분집합이다. (i)과 (ii)에 의해 $1 \in \Omega$이고 $\Omega$는 열린집합이므로, [[star-shaped-open-set|별 모양 열린집합]]의 정의에 의해 $\Omega$는 $1$에 대해 별 모양이고 별 모양 열린집합이며, 그 항목의 (2)에 의해 영역이다.

**정의에 쓴 사실.** $z \in \Omega$에서의 값이 $z$인 함수 $\Omega \to \mathbb{C}$는 복소 미분 (5)에 의해 정칙함수이고 모든 점에서 미분계수가 $1$이며, (1)의 (i)에 의해 $\Omega$의 모든 점에서 $0$이 아니다. 법칙 (3)의 (iii)을 값이 $1$인 상수함수와 이 함수에 쓰면 $g$는 정칙함수이다. 복소 미분 (3)에 의해 $g$는 연속이다.

**2의 증명.** (1)의 (iii)에 의해 $\Omega$는 $1$에 대해 별 모양인 열린집합이고, $g$는 정칙함수이다. 코시 (2)의 (가)를 $G = \Omega$, $p = 1$, $f = g$로 쓰면 코시 (1)의 함수 $F(z) = \int_{\sigma_{1,z}} g$는 $\Omega$ 위의 $g$의 복소 원시함수이고, 코시 (1)에 의해 $F(1) = 0$이다. 정의에 의해 $F = \operatorname{Log}$이므로 $\operatorname{Log}$는 정칙함수이고 $\operatorname{Log}'(z) = g(z) = 1/z$이며 $\operatorname{Log} 1 = 0$이다. 복소 미분 (3)에 의해 $\operatorname{Log}$는 연속이다. $H$가 $\Omega$ 위의 $g$의 복소 원시함수이면 코시 (6)에 의해 모든 $z \in \Omega$에서 $H(z) = F(z) + H(1) = \operatorname{Log} z + H(1)$이다.

**3의 증명.** *지수함수의 역.* 법칙 (1)에 의해 $z$에서의 값이 $-\operatorname{Log} z$인 함수는 정칙함수이고 그 미분계수는 $-1/z$이다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp' = \exp$이므로, 법칙 (5)를 $G = \Omega$, $H = \mathbb{C}$로 쓰면 $z$에서의 값이 $\exp(-\operatorname{Log} z)$인 함수 $u : \Omega \to \mathbb{C}$는 정칙함수이고 $u'(z) = \exp(-\operatorname{Log} z) \cdot (-1/z) = -u(z)/z$이다. $h(z) = z\,u(z)$로 정한 $h : \Omega \to \mathbb{C}$는 복소 미분 (5)와 법칙 (2)에 의해 정칙함수이고
$$
h'(z) = 1 \cdot u(z) + z \cdot \bigl(-u(z)/z\bigr) = 0
$$
이다. (1)의 (iii)에 의해 $\Omega$는 영역이므로 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (3)에 의해 $h$는 상수이고, (2)와 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 모든 $z \in \Omega$에서 $h(z) = h(1) = 1 \cdot \exp(-0) = 1$이다. 덧셈 법칙 (2)에 의해 $u(z) = \exp(\operatorname{Log} z)^{-1}$이므로 $z\exp(\operatorname{Log} z)^{-1} = 1$, 곧 $\exp(\operatorname{Log} z) = z$이다.

*실수부와 편각.* $w = \operatorname{Log} z$, $x = \operatorname{Re} w$, $y = \operatorname{Im} w$로 두자. 덧셈 법칙 (6)에 의해 $|z| = |\exp(w)| = \exp(x)$이고, (1)의 (i)에 의해 $z \ne 0$이므로 절댓값 (1)에 의해 $|z|$는 양수이다. [[exponential-function]]의 (1)을 $a = |z|$에 쓰면 $x = \ln|z|$이다. 복소수체 (4)에 의해 $w = x + iy$이므로 덧셈 법칙 (4)에 의해
$$
\begin{aligned}
z = \exp(w) &= \iota(\exp(x))\exp(iy) \\
&= |z|\exp(iy)
\end{aligned}
$$
이고, 극형식의 정의에 의해 $y \in \arg z$이다.

*허수부의 범위.* $\varphi(z) = \operatorname{Im} \operatorname{Log} z$로 정한 $\varphi : \Omega \to \mathbb{R}$를 보자. (2)에 의해 $\operatorname{Log}$는 연속이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (1)을 $Z = \Omega$(부분공간 위상)로 쓰면 $\varphi$는 연속이다. $\Omega$는 영역이므로 $\mathbb{C}$의 연결 부분집합, 곧 [[connected-space|연결공간]]의 정의에 의해 부분공간 위상으로 연결공간이다. [[continuous-image-of-connected|연결공간의 연속인 상]]의 (1)에 의해 $\varphi(\Omega)$는 $\mathbb{R}$의 연결 부분집합이고, [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (1)에 의해 사이의 점을 모두 갖는다. (2)에 의해 $\varphi(1) = \operatorname{Im} 0 = 0$이므로 $0 \in \varphi(\Omega)$이다.

어떤 $z \in \Omega$에서 $\pi \le \varphi(z)$라 하자. $\varphi(z) = \pi$이면 $z' = z$로 두고, $\pi < \varphi(z)$이면 $0 < \pi < \varphi(z)$이므로 사이의 점으로서 $\pi \in \varphi(\Omega)$이어서 $\varphi(z') = \pi$인 $z' \in \Omega$가 있다. 어느 쪽이든 위의 편각의 계산과 주기성 (1)의 $\exp(i\pi) = -1$에 의해 $z' = |z'|\exp(i\pi) = \iota(|z'|)\iota(-1) = \iota(-|z'|)$이고, 순서 성질 (3)의 (iii)과 절댓값 (1)에 의해 $-|z'| \le 0$이다. 이것은 $z' \in \Omega$에 어긋난다. 따라서 순서 성질 (1)의 (iii)에 의해 모든 $z \in \Omega$에서 $\varphi(z) < \pi$이다.

어떤 $z \in \Omega$에서 $\varphi(z) \le -\pi$이면 같은 방법으로 $\varphi(z') = -\pi$인 $z' \in \Omega$가 있다($\varphi(z) < -\pi$이면 $\varphi(z) < -\pi < 0$이다). 덧셈 법칙 (2)와 주기성 (1)에 의해 $\exp(-i\pi) = \exp(i\pi)^{-1} = (-1)^{-1} = -1$이므로 $z' = |z'|\exp(-i\pi) = \iota(-|z'|)$이고, 같은 모순이 나온다. 따라서 모든 $z \in \Omega$에서 $-\pi < \varphi(z) < \pi$이다.

**4의 증명.** $\operatorname{Log} z = w$이면 (3)에 의해 $\exp(w) = z$이고 $-\pi < \operatorname{Im} w < \pi$이다. 거꾸로 $\exp(w) = z$이고 $-\pi < \operatorname{Im} w < \pi$라 하고 $v = w - \operatorname{Log} z$로 두자. 덧셈 법칙 (2)와 (3)에 의해 $\exp(v) = \exp(w) / \exp(\operatorname{Log} z) = z / z = 1$이다. 덧셈 법칙 (6)에 의해 $\exp(\operatorname{Re} v) = |\exp(v)| = |1| = 1$이므로, [[exponential-function]]의 (1)과 [[natural-logarithm]]의 (1)에 의해 $\operatorname{Re} v = \ln 1 = 0$이다. 복소수체 (4)에 의해 $v = 0 + (\operatorname{Im} v) i = i \operatorname{Im} v$이고 $\exp(i\operatorname{Im} v) = 1$이므로, 주기성 (3)에 의해 어떤 정수 $k$에서 $\operatorname{Im} v = 2\pi k$이다. 한편 $\operatorname{Im} v = \operatorname{Im} w - \operatorname{Im} \operatorname{Log} z$이고, (3)과 가정에 순서 성질 (3)의 (iii)과 (2)의 (iv)를 쓰면 $-2\pi < \operatorname{Im} v < 2\pi$이다. 순서 성질 (6)의 (iv)로 양수 $2\pi$를 나누면 $-1 < k < 1$이다. 순서 성질 (10)에 의해 이것을 정수의 부등식으로 읽고 (Z1)을 쓰면 $0 \le k$이고 $k + 1 \le 1$, 곧 $k \le 0$이므로 순서 성질 (1)의 (ii)에 의해 $k = 0$이다. 따라서 $\operatorname{Im} v = 0$이고 $v = 0$, 곧 $w = \operatorname{Log} z$이다.

$z$의 편각 $\theta$가 $-\pi < \theta < \pi$를 만족한다 하고 $w = \ln|z| + i\theta$로 두자. 복소수체 (4)에 의해 $\operatorname{Re} w = \ln|z|$, $\operatorname{Im} w = \theta$이다. 덧셈 법칙 (4)와 [[exponential-function]]의 (1)에 의해 $\exp(w) = \iota(\exp(\ln|z|))\exp(i\theta) = |z|\exp(i\theta)$이고, 극형식의 정의에 의해 이것은 $z$이다. 앞 문단에 의해 $\operatorname{Log} z = w$이므로 $\theta = \operatorname{Im} w = \operatorname{Im} \operatorname{Log} z$이다. 한편 (3)에 의해 $\operatorname{Im} \operatorname{Log} z$ 자신이 이런 편각이다. 끝으로 복소수체 (4)와 (3)에 의해 $\operatorname{Log} z = \operatorname{Re} \operatorname{Log} z + (\operatorname{Im} \operatorname{Log} z) i = \ln|z| + i \operatorname{Im} \operatorname{Log} z$이다.

**5의 증명.** $w \in S$라 하고 $z = \exp(w)$로 두자. 덧셈 법칙 (2)에 의해 $z \ne 0$이다. $z \notin \Omega$라 하자. 그러면 어떤 실수 $t \le 0$에서 $z = \iota(t)$이고, $z \ne 0$이므로 $t \ne 0$, 곧 $t < 0$이다. 덧셈 법칙 (6)에 의해 $|z| = \exp(\operatorname{Re} w)$이고, 복소수체 (4)와 덧셈 법칙 (4)에 의해 $z = \iota(\exp(\operatorname{Re} w))\exp(i\operatorname{Im} w) = |z|\exp(i\operatorname{Im} w)$이므로 극형식의 정의에 의해 $\operatorname{Im} w \in \arg z$이다. 극형식 (6)에 의해 $\arg \iota(t) = \pi + 2\pi\mathbb{Z}$이므로 어떤 정수 $k$에서 $\operatorname{Im} w = \pi + 2\pi k$이다. $-\pi < \pi + 2\pi k < \pi$에서 순서 성질 (2)의 (ii)와 (6)의 (iv)에 의해 $-1 < k < 0$이고, (Z1)에 의해 $-1 < k$에서 $0 \le k$이므로 순서 성질 (1)의 (i)에 어긋난다. 따라서 $z = \exp(w) \in \Omega$이다. $\exp(w) = z$이고 $-\pi < \operatorname{Im} w < \pi$이므로 (4)에 의해 $\operatorname{Log}(\exp(w)) = w$이다.

그러므로 $E$는 $S$에서 $\Omega$로의 함수이다. $E(w) = E(w')$이면 $w = \operatorname{Log}(E(w)) = \operatorname{Log}(E(w')) = w'$이므로 $E$는 단사이다. $z \in \Omega$이면 (3)에 의해 $\operatorname{Log} z \in S$이고 $E(\operatorname{Log} z) = \exp(\operatorname{Log} z) = z$이므로 $E$는 전사이다. 따라서 $E$는 전단사이다.

**6의 증명.** $0 < x$이면 (1)의 (i)에 의해 $\iota(x) \in \Omega$이다. $w = \iota(\ln x)$로 두면 복소수체 (2)의 (ii)에 의해 $\operatorname{Im} w = 0$이고 $-\pi < 0 < \pi$이다. [[complex-exponential-function|복소 지수함수]]의 (2)와 [[exponential-function]]의 (1)에 의해 $\exp(w) = \iota(\exp(\ln x)) = \iota(x)$이다. (4)에 의해 $\operatorname{Log} \iota(x) = \iota(\ln x)$이다.

**7의 증명.** $z \in B(1, 1)$이면 복소평면의 거리 (3)에 의해 $|z - 1| < 1$이고, 절댓값 (6)에 의해 $|\operatorname{Re} z - 1| = |\operatorname{Re}(z - 1)| \le |z - 1| < 1$이다. 실수 절댓값 (8)에 의해 $1 - 1 < \operatorname{Re} z$, 곧 $0 < \operatorname{Re} z$이므로 (1)의 (i)에 의해 $z \in \Omega$이다. 따라서 $B(1, 1) \subseteq \Omega$이다. [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B(1, 1)$은 열린집합이므로, 복소 미분 (4)의 (i)을 $G = \Omega$, $U = B(1, 1)$로 쓰면 제한 $F = \operatorname{Log}|_{B(1, 1)}$은 정칙함수이고 모든 $z \in B(1, 1)$에서 $F'(z) = \operatorname{Log}'(z) = 1/z$이다. (2)에 의해 $F(1) = \operatorname{Log} 1 = 0$이다. [[logarithm-near-one|1 근처의 복소 로그]]의 (5)에 의해 $F = \operatorname{lg}$, 곧 모든 $z \in B(1, 1)$에서 $\operatorname{Log} z = \operatorname{lg}(z)$이다.

**8의 증명.** $\theta = \operatorname{Im} \operatorname{Log} z$로 두면 (3)에 의해 $\theta \in \arg z$이고 $-\pi < \theta < \pi$이다. 극형식 (4)에 의해 $\operatorname{Re} z = |z|\cos\theta$이고, $|z|$는 양수이므로 순서 성질 (6)의 (iv)와 (K9)에 의해 $0 < \operatorname{Re} z$인 것은 정확히 $0 < \cos\theta$일 때이다. 실수 절댓값 (7)에 의해 $-\pi/2 < \theta < \pi/2$는 $|\theta| < \pi/2$와 같은 말이다. 따라서 $-\pi < \theta < \pi$일 때 $0 < \cos\theta$인 것이 정확히 $|\theta| < \pi/2$일 때라는 것을 보이면 된다.

$|\theta| < \pi/2$이면 원주율 (2)의 (iii)에 의해 $0 < \cos\theta$이다. 거꾸로 $|\theta| < \pi/2$가 아니라 하자. 순서 성질 (1)의 (iii)에 의해 $\pi/2 \le |\theta|$이고, 실수 절댓값 (7)에 의해 $|\theta| < \pi$이다. 실수 절댓값 (1)에 의해 $|\theta|$는 $\theta$이거나 $-\theta$이므로 [[cosine-and-sine|코사인과 사인]]의 (3)에 의해 $\cos\theta = \cos|\theta|$이다.
- $|\theta| = \pi/2$이면 원주율 (1)에 의해 $\cos\theta = 0$이다.
- $\pi/2 < |\theta| < \pi$이면 $x = |\theta| - \pi$로 둘 때 순서 성질 (2)의 (ii)에 의해 $-\pi/2 < x < 0$이고, 실수 절댓값 (7)에 의해 $|x| < \pi/2$이므로 원주율 (2)의 (iii)에 의해 $0 < \cos x$이다. 주기성 (2)의 $\cos(x + \pi) = -\cos x$에 의해 $\cos|\theta| = -\cos x$이고, 순서 성질 (3)의 (ii)에 의해 이것은 음수이다.

어느 경우든 $\cos\theta \le 0$이므로 순서 성질 (1)의 (iii)에 의해 $0 < \cos\theta$가 아니다.

**9의 증명.** (i) $a = \operatorname{Log} z + \operatorname{Log} w$로 두면 $\operatorname{Im} a = \operatorname{Im} \operatorname{Log} z + \operatorname{Im} \operatorname{Log} w$이므로 가정에 의해 $a \in S$이다. 덧셈 법칙 (1)과 (3)에 의해 $\exp(a) = \exp(\operatorname{Log} z)\exp(\operatorname{Log} w) = zw$이다. (5)에 의해 $zw = \exp(a) \in \Omega$이고 $\operatorname{Log}(zw) = \operatorname{Log}(\exp(a)) = a$이다. $0 < \operatorname{Re} z$이고 $0 < \operatorname{Re} w$이면 (8)에 의해 두 허수부가 모두 $-\pi/2$보다 크고 $\pi/2$보다 작으므로, 순서 성질 (2)의 (iv)에 의해 그 합은 $-\pi/2 + (-\pi/2) = -\pi$보다 크고 $\pi/2 + \pi/2 = \pi$보다 작다.

(ii) $a = -\operatorname{Log} z$로 두면 $\operatorname{Im} a = -\operatorname{Im} \operatorname{Log} z$이고, (3)과 순서 성질 (3)의 (iii)에 의해 $-\pi < \operatorname{Im} a < \pi$이므로 $a \in S$이다. 덧셈 법칙 (2)와 (3)에 의해 $\exp(a) = \exp(\operatorname{Log} z)^{-1} = z^{-1} = 1/z$이다. (5)에 의해 $1/z \in \Omega$이고 $\operatorname{Log}(1/z) = a = -\operatorname{Log} z$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\sqrt{3} + i$와 $-1 + \sqrt{3}\,i$에서의 값]
[[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)와 [[cosine-and-sine|코사인과 사인]]의 (1)에 의해 $\exp(i\pi/6) = \sqrt{3}/2 + i/2$이고 $\exp(i\pi/3) = 1/2 + (\sqrt{3}/2)\,i$입니다.

$z_1 = \sqrt{3} + i$는 허수부가 $1$이므로 (1)의 (i)에 의해 $\Omega$에 듭니다. $w_1 = \ln 2 + i\pi/6$이면 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (4)와 [[exponential-function]]의 (1)에 의해 $\exp(w_1) = 2\exp(i\pi/6) = \sqrt{3} + i$이고, $-\pi < \pi/6 < \pi$입니다. (4)에 의해
$$
\operatorname{Log}(\sqrt{3} + i) = \ln 2 + \frac{\pi}{6}\,i
$$
입니다. $(\sqrt{3} + i)(\sqrt{3} - i) = 3 + 1 = 4$이므로 $1/z_1 = (\sqrt{3} - i)/4$이고, (9)의 (ii)에 의해 $\operatorname{Log}((\sqrt{3} - i)/4) = -\ln 2 - (\pi/6)\,i$입니다.

$z_2 = -1 + \sqrt{3}\,i$도 허수부가 $0$이 아니므로 $\Omega$에 듭니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)의 $\exp(i(x + \pi/2)) = i\exp(ix)$를 $x = \pi/6$에 쓰면 $\exp(2\pi i/3) = i(\sqrt{3}/2 + i/2) = -1/2 + (\sqrt{3}/2)\,i$입니다. 따라서 $\exp(\ln 2 + 2\pi i/3) = -1 + \sqrt{3}\,i$이고 $-\pi < 2\pi/3 < \pi$이므로 (4)에 의해
$$
\operatorname{Log}(-1 + \sqrt{3}\,i) = \ln 2 + \frac{2\pi}{3}\,i
$$
입니다. (8)과 맞춰 보면, $\operatorname{Re} z_1 = \sqrt{3} > 0$이고 $|\pi/6| < \pi/2$이며, $\operatorname{Re} z_2 = -1 < 0$이고 $2\pi/3 > \pi/2$입니다.
:::

:::counterexample[$z = -1 + \sqrt{3}\,i$, $w = -\sqrt{3} + i$에서 $\operatorname{Log}(zw) \ne \operatorname{Log} z + \operatorname{Log} w$]
위 예시에 의해 $\operatorname{Log} z = \ln 2 + (2\pi/3)\,i$입니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)를 $x = \pi/3$에 쓰면 $\exp(5\pi i/6) = i(1/2 + (\sqrt{3}/2)\,i) = -\sqrt{3}/2 + i/2$이므로 $\exp(\ln 2 + 5\pi i/6) = -\sqrt{3} + i$이고, $-\pi < 5\pi/6 < \pi$이므로 (4)에 의해 $\operatorname{Log} w = \ln 2 + (5\pi/6)\,i$입니다. 두 허수부의 합은 $2\pi/3 + 5\pi/6 = 3\pi/2$로 $\pi$보다 크므로 (9)의 (i)의 가정이 깨집니다.

곱은
$$
\begin{aligned}
zw &= (-1)(-\sqrt{3}) + (-1)i \\
&\quad + \sqrt{3}\,i(-\sqrt{3}) + \sqrt{3}\,i \cdot i \\
&= \sqrt{3} - i - 3i - \sqrt{3} = -4i
\end{aligned}
$$
이고, 허수부가 $-4 \ne 0$이므로 $\Omega$에 듭니다. 같은 항목의 (1)의 $\exp(i\pi/2) = i$와 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp(-i\pi/2) = i^{-1} = -i$이므로 $\exp(\ln 4 - i\pi/2) = -4i$이고, (4)에 의해 $\operatorname{Log}(-4i) = \ln 4 - (\pi/2)\,i$입니다. 그러므로 $\operatorname{Im}\operatorname{Log}(zw) = -\pi/2$이지만 $\operatorname{Im}(\operatorname{Log} z + \operatorname{Log} w) = 3\pi/2$이고, 둘이 다르므로 $\operatorname{Log}(zw) \ne \operatorname{Log} z + \operatorname{Log} w$입니다. 두 허수부의 차는 $2\pi$이고, $\operatorname{Log} z + \operatorname{Log} w$도 $\exp$로는 $zw$에 갑니다.
:::

:::counterexample[$-1$ 근처에서 $\operatorname{Log}$의 허수부가 벌어지는 예]
$-1 \notin \Omega$이지만, $\Omega \cup \{-1\}$ 위의 함수 $L$이 $\Omega$의 모든 점에서 $\operatorname{Log}$와 같은 값을 갖도록 $L(-1)$을 어떻게 정해도 $L$은 $-1$에서 연속이 아닙니다.

$L$이 $-1$에서 연속이라 해 봅시다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)을 $\varepsilon = \pi/2$로 쓰면 양수 $\delta$가 있어, $|v + 1| < \delta$인 모든 $v \in \Omega \cup \{-1\}$에서 $|L(v) - L(-1)| < \pi/2$입니다. 실수 $\eta = \min\{\delta/4, 1/2\}$([[absolute-value]]의 최소)로 두고 $t = \pi - \eta$라 합시다. [[definition-of-pi|원주율]]의 (4)에 의해 $\pi > 2$이므로 $\pi/2 < t < \pi$입니다.

$v_+ = \exp(it)$, $v_- = \exp(-it)$로 두면 $-\pi < \pm t < \pi$이므로 (5)에 의해 $v_\pm \in \Omega$이고 $\operatorname{Log} v_+ = it$, $\operatorname{Log} v_- = -it$입니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(i\pi) = -1$이고, [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp(-i\pi) = \exp(i\pi)^{-1} = -1$이므로, [[continuity-of-complex-exponential|복소 지수함수의 연속]]의 (4)를 $|t - \pi| = \eta \le 1/2$에 쓰면
$$
|v_\pm + 1| \le 2\eta \le \delta/2 < \delta
$$
입니다. 따라서 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (5)에 의해
$$
\begin{aligned}
|2it| &= |\operatorname{Log} v_+ - \operatorname{Log} v_-| \\
&\le |L(v_+) - L(-1)| \\
&\quad + |L(-1) - L(v_-)| \\
&< \pi/2 + \pi/2 = \pi
\end{aligned}
$$
입니다. 그런데 [[modulus-of-complex-number]]의 (5)에 의해 $|2it| = 2t$이고 $t > \pi/2$이므로 $2t > \pi$이어서 모순입니다. $v_+$의 $\operatorname{Log}$의 허수부 $t$는 $\pi$ 가까이, $v_-$의 것 $-t$는 $-\pi$ 가까이에 있기 때문입니다.
:::

## 확인 질문

:::check[$z \in \Omega$이면 $\operatorname{Log}\overline{z}$는 $\operatorname{Log} z$와 어떤 관계인가?]
$\operatorname{Log}\overline{z} = \overline{\operatorname{Log} z}$입니다. [[complex-conjugate]]의 (1)에 의해 $\operatorname{Re}\overline{z} = \operatorname{Re} z$, $\operatorname{Im}\overline{z} = -\operatorname{Im} z$이므로 (1)의 (i)에 의해 $\overline{z} \in \Omega$입니다. $w = \overline{\operatorname{Log} z}$로 두면 [[complex-exponential-function|복소 지수함수]]의 (4)와 이 항목의 (3)에 의해 $\exp(w) = \overline{\exp(\operatorname{Log} z)} = \overline{z}$이고, $\operatorname{Im} w = -\operatorname{Im}\operatorname{Log} z$는 (3)과 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $-\pi$와 $\pi$ 사이에 있습니다. (4)에 의해 $\operatorname{Log}\overline{z} = w$입니다.
:::

:::check[$\operatorname{Log}(\exp(1 + 4i))$는 무엇인가?]
$1 + (4 - 2\pi)\,i$입니다. $4 > \pi$이므로 $1 + 4i$는 (5)의 띠 $S$에 들지 않습니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)의 $\exp(z + 2\pi i) = \exp(z)$를 $z = 1 + (4 - 2\pi)\,i$에 쓰면 $\exp(1 + 4i) = \exp(1 + (4 - 2\pi)\,i)$입니다. [[definition-of-pi|원주율]]의 (4)의 $2 < \pi < 4$에서 $-\pi < 4 - 2\pi$($\pi < 4$와 같은 말)이고 $4 - 2\pi < \pi$($4 < 3\pi$와 같은 말이고 $3\pi > 6$)이므로 $1 + (4 - 2\pi)\,i \in S$이고, (5)에 의해 그 값은 $1 + (4 - 2\pi)\,i$입니다.
:::
