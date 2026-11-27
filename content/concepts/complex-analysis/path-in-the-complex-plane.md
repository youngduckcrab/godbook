---
title: 경로
title_en: Paths in the Complex Plane
aliases: [C¹ 경로, 연속미분가능한 경로, 선분 경로, 원 경로, 뒤집은 경로, 경로열, 닫힌 경로, path, C1 path, line segment path, circle path, reversed path, closed path]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: "닫힌구간에서 복소평면으로 가는 연속미분가능한 함수를 C¹ 경로라 하고, 시작점과 끝점, 닫힌 경로, 상을 정한다. 도함수가 0 이 아니기를 요구하지 않는다. 상이 공집합이 아닌 콤팩트 집합이고 도함수의 절댓값이 유계라는 것, 선분 경로와 열린 공의 볼록성, 원 경로와 그 상, 뒤집은 경로, 끝과 처음이 이어진 유한 개의 경로로 된 경로열, 평행이동과 복소수배를 함께 진술한다."
requires: [function, image-and-preimage, mathematical-induction, interval, real-number-arithmetic, order-properties-of-reals, absolute-value, real-valued-function, extreme-value-theorem, continuous-map, continuity-agrees-with-analysis, standard-topology-on-reals, closed-interval-is-compact, compact-space, continuous-image-of-compact, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, complex-plane-as-metric-space, continuity-of-complex-operations, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, definition-of-pi, unit-circle-parametrization, derivative-of-complex-valued-function]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Elementary Topology of the Plane 절의 Definition def_smooth 와 그 뒤 문단, Example example-paths 와 그 뒤 문단, 단순·닫힌 경로의 정의와 단위원의 예, source/sec_topologyintro.ptx:239–357; Definition and Basic Properties 절의 조각마다 매끄러운 경로의 적분의 정의, Proposition intprop 의 (b)(c)와 그 증명, source/sec_intdef.ptx:26–71, 317–339, 390–414; Cauchy's Integral Formula 절의 기호 C[a, r] 와 평균값 공식의 계산, source/sec_CIF.ptx:3–17, 124–131; 1장 연습문제 ex_parametrizations, source/exercises-chap1.ptx:834–892"
    checked: original
    note: "출처는 연속함수 γ : [a, b] → ℂ 를 경로(path)라 하고, γ′ 이 연속이고 0 이 아니며 끝점에서 한쪽 극한 lim γ′ 이 있으면 매끄럽다(smooth)고 한다(sec_topologyintro.ptx:239–264). 이 항목의 C¹ 경로는 γ′ ≠ 0 을 요구하지 않는다. 그래서 상수 경로와 두 끝점이 같은 선분(퇴화한 선분)도 C¹ 경로이다. 끝점의 미분계수는 derivative 의 정의대로 한쪽에서만 다가가는 차분몫의 극한이고, 출처의 '한쪽 극한 lim γ′' 조건은 두지 않는다. 출처는 경로와 그 매개화에 같은 글자를 쓰는 것이 관습이라고 적는다(323–330). 이 항목은 경로를 함수 γ 자신으로 정한다. 닫힌 경로의 정의(332–346)는 출처와 같고, 출처의 단순 경로는 두지 않는다. 출처는 조각마다 매끄러운 경로를 분할점으로 정하고(sec_intdef.ptx:41–68), 두 경로를 이은 경로 γ₁γ₂ 를 한 매개화로 만든다(329–334, 그 매개화는 증명 390–399). 이 항목은 이은 경로를 한 함수로 만들지 않고 끝과 처음이 이어진 C¹ 경로의 유한 열(경로열)로 둔다. 뒤집은 경로 −γ(t) := γ(a + b − t)(317–320)는 출처와 같은 함수이고, 이 항목은 γ⁻ 로 쓴다(− 는 복소수배와 헷갈리기 때문이다). (3)의 원 경로 a + r exp(it) 는 출처의 원 C[a, r](sec_CIF.ptx:3–17, 반시계 방향으로 둔다) 의 매개화와 같은 함수이고, 출처는 sec_CIF.ptx:124–131 에서 C[w, R] 위의 적분을 w + R e^{it} 로 계산한다. 출처의 기호 C[a, r] 은 이 사이트의 닫힌 공 C(a, r) 와 부딪치므로 쓰지 않는다. 예시 '반원 경로'는 출처 Example example-paths(sec_topologyintro.ptx:279–296)의 γ₁(t) = −2 + 2e^{it}(π/2 ≤ t ≤ 2π)과 같은 꼴(원의 일부를 도는 원 경로)이고, 출처 1장 연습문제 ex_parametrizations(exercises-chap1.ptx:834–892)의 셋째 물음(C[0, 34] 의 위쪽 반원의 매개화)과 같은 대상이다. 같은 연습문제의 첫째·둘째 물음(C[1 + i, 1] 의 매개화 (1 + i) + e^{it}, −1 − i 에서 2i 로의 선분의 매개화 −1 − i + (1 + 3i)t)은 (3)의 원 경로와 (2)의 선분 경로와 같은 함수이고, 넷째 물음(꼭짓점이 ±1 ± 2i 인 직사각형)은 예시 '삼각형의 둘레를 도는 닫힌 경로열'과 같은 발상(다각형의 둘레를 선분으로 잇기)이다."
  - ref: lebl-basic-analysis-2
    loc: "11.4절 Complex exponential and trigonometric functions, 11.4.3소절 The unit circle and polar coordinates (p.167)"
    checked: original
    note: "출처 11.4.3소절(p.167)은 e^{it} 가 t ∈ [0, 2π) 에서 원을 매개화한다고 적고 그 도함수 ie^{it} 를 쓴다. (3)의 원 경로의 상과 도함수는 같은 내용이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(원 경로의 길이, 상수 경로, 길이로 나누지 않는 어림). 독립 검토 없음."
added: 2026-11-27
---

:::statement
닫힌구간은 [[interval]]의 것이고, 실변수 복소수값 함수의 미분가능, 미분계수, 도함수, 연속미분가능은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 것이다. 함수는 [[function]]의 것이고, 상 $f(A)$는 [[image-and-preimage]]의 것이다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 복소 지수함수는 [[complex-exponential-function]], 원주율 $\pi$는 [[definition-of-pi|원주율]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]]와 그 거리위상을 주고, 열린 공 $B(c, \varepsilon)$는 그 항목의 (3)의 것이다. 콤팩트 부분집합은 [[compact-space]]의 것이다.

**C¹ 경로.** $a$, $b$를 $a < b$인 실수라 하자. 함수 $\gamma : [a, b] \to \mathbb{C}$가 연속미분가능할 때 $\gamma$를 $[a, b]$ 위의 **C¹ 경로**(C¹ path), 줄여서 **경로**라 한다. 도함수 $\gamma'$이 $0$이 아니기를 요구하지 않는다. $\gamma(a)$를 $\gamma$의 **시작점**, $\gamma(b)$를 **끝점**이라 하고, $\gamma(a) = \gamma(b)$이면 $\gamma$를 **닫힌 경로**라 한다. $\gamma$의 **상**은 $\gamma([a, b]) = \{\gamma(t) : a \le t \le b\}$이다. 모든 $t$에서 $\gamma(t) = z_0$인 경로를 **상수 경로**라 한다. 경로의 글자 $\gamma$는 [[oriented-integral]]의 세 점의 실수 $\gamma$와 다른 것이다.

**경로열.** $k$를 자연수라 하고, $1 \le j \le k$인 정수 $j$마다 $[a_j, b_j]$ 위의 C¹ 경로 $\gamma_j$가 정해져 있으며, $1 \le j < k$인 모든 $j$에서 $\gamma_j$의 끝점이 $\gamma_{j+1}$의 시작점이라 하자. 이때 $\{1, \dots, k\}$에서 $j$를 $\gamma_j$로 보내는 함수를 **경로열**(chain of paths)이라 하고 $(\gamma_1, \dots, \gamma_k)$로 쓴다. 그 **시작점**은 $\gamma_1$의 시작점, **끝점**은 $\gamma_k$의 끝점이고, 둘이 같으면 **닫힌 경로열**이라 한다. 경로열의 **상**은 $k$개의 상의 합집합, 곧 어떤 $j$에서 $z \in \gamma_j([a_j, b_j])$인 복소수 $z$ 전체의 집합이다. $k = 1$인 경로열 $(\gamma_1)$은 경로 $\gamma_1$과 시작점, 끝점, 상이 같다.

다음이 성립한다. 아래에서 $\gamma : [a, b] \to \mathbb{C}$는 C¹ 경로이다.

1. (상과 도함수) $\gamma$와 $\gamma'$은 연속이다. 상 $\gamma([a, b])$는 $\mathbb{C}$의 공집합이 아닌 콤팩트 부분집합이다. $[a, b]$의 모든 $t$에서 $|\gamma'(t)| \le B$인 실수 $B$가 있다. 경로열의 상도 $\mathbb{C}$의 공집합이 아닌 콤팩트 부분집합이다.
2. (**선분 경로**) 복소수 $z$, $w$에 대하여
   $$
   \sigma_{z,w}(t) = z + t(w - z)
   $$
   로 정한 $\sigma_{z,w} : [0, 1] \to \mathbb{C}$는 $[0, 1]$ 위의 C¹ 경로이고, 모든 $t$에서 $\sigma_{z,w}'(t) = w - z$이며, 시작점은 $z$, 끝점은 $w$이다. $z = w$이면 $\sigma_{z,w}$는 상수 경로이다. 이것을 $z$에서 $w$로 가는 **선분 경로**라 한다. 또 복소수 $c$와 양의 실수 $\varepsilon$에 대하여 $z$와 $w$가 열린 공 $B(c, \varepsilon)$의 원소이면 $\sigma_{z,w}$의 상은 $B(c, \varepsilon)$의 부분집합이다. 글자 $\sigma$는 치환의 글자와 다른 것이다.
3. (**원 경로**) 복소수 $a_0$과 양의 실수 $r$에 대하여
   $$
   \gamma_{a_0,r}(t) = a_0 + r \exp(it)
   $$
   로 정한 $\gamma_{a_0,r} : [0, 2\pi] \to \mathbb{C}$는 $[0, 2\pi]$ 위의 닫힌 C¹ 경로이고, 모든 $t$에서 $\gamma_{a_0,r}'(t) = i r \exp(it)$이며 $|\gamma_{a_0,r}'(t)| = r$이다. 시작점과 끝점은 $a_0 + r$이고, 상은 $\{z \in \mathbb{C} : |z - a_0| = r\}$이다. 이것을 중심이 $a_0$이고 반지름이 $r$인 **원 경로**라 한다. 상인 점의 집합에는 기호를 두지 않는다. 닫힌 공 $C(a_0, r)$는 이것과 다른 집합이다.
4. (**뒤집은 경로**) $\gamma^-(t) = \gamma(a + b - t)$로 정한 $\gamma^- : [a, b] \to \mathbb{C}$는 $[a, b]$ 위의 C¹ 경로이고, 모든 $t$에서 $(\gamma^-)'(t) = -\gamma'(a + b - t)$이며, 시작점은 $\gamma(b)$, 끝점은 $\gamma(a)$이고, 상은 $\gamma$의 상과 같다. $(\gamma^-)^- = \gamma$이다. 복소수 $z$, $w$에 대하여 $(\sigma_{z,w})^- = \sigma_{w,z}$이다.
5. (평행이동과 복소수배) 복소수 $c$, $w$에 대하여 $t$에서의 값이 $\gamma(t) + c$인 함수와 $w\gamma(t)$인 함수 $[a, b] \to \mathbb{C}$는 $[a, b]$ 위의 C¹ 경로이고, 도함수의 $t$에서의 값은 각각 $\gamma'(t)$와 $w\gamma'(t)$이다. 이것을 $\gamma + c$, $w\gamma$로 쓴다.
:::

:::english
Closed intervals are those of the entry on intervals, and differentiability, derivatives, and continuous differentiability of complex-valued functions of a real variable are those of the entry on that topic. Functions and images $f(A)$ are those of the entries on functions and on images and preimages. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$, the operations of the field $\mathbb{C}$, the function $\iota$, the convention of writing real numbers in place of complex numbers, the modulus, the complex exponential, and $\pi$ are those of their entries. $\mathbb{C}$ carries the metric of the complex plane and its metric topology, and the open ball $B(c, \varepsilon)$ is that of item (3) of that entry. Compact subsets are those of the entry on compact spaces.

**C¹ paths.** Let $a$, $b$ be real numbers with $a < b$. When a function $\gamma : [a, b] \to \mathbb{C}$ is continuously differentiable, $\gamma$ is called a **C¹ path** on $[a, b]$, or a **path** for short. The derivative $\gamma'$ is not required to be nonzero. $\gamma(a)$ is the **initial point** of $\gamma$ and $\gamma(b)$ its **terminal point**; if $\gamma(a) = \gamma(b)$, $\gamma$ is a **closed path**. The **image** of $\gamma$ is $\gamma([a, b]) = \{\gamma(t) : a \le t \le b\}$. A path with $\gamma(t) = z_0$ for all $t$ is a **constant path**. The letter $\gamma$ for a path is different from the real number $\gamma$ in the three-point statement of the entry on the oriented integral.

**Chains of paths.** Let $k$ be a natural number, let a C¹ path $\gamma_j$ on $[a_j, b_j]$ be given for each integer $j$ with $1 \le j \le k$, and suppose that for every $j$ with $1 \le j < k$ the terminal point of $\gamma_j$ is the initial point of $\gamma_{j+1}$. Then the function from $\{1, \dots, k\}$ sending $j$ to $\gamma_j$ is called a **chain of paths** and written $(\gamma_1, \dots, \gamma_k)$. Its **initial point** is the initial point of $\gamma_1$, its **terminal point** is the terminal point of $\gamma_k$, and if they are equal it is a **closed chain of paths**. The **image** of the chain is the union of the $k$ images, that is, the set of complex numbers $z$ with $z \in \gamma_j([a_j, b_j])$ for some $j$. A chain $(\gamma_1)$ with $k = 1$ has the same initial point, terminal point, and image as the path $\gamma_1$.

The following hold. Below, $\gamma : [a, b] \to \mathbb{C}$ is a C¹ path.

1. (Image and derivative) $\gamma$ and $\gamma'$ are continuous. The image $\gamma([a, b])$ is a nonempty compact subset of $\mathbb{C}$. There is a real number $B$ with $|\gamma'(t)| \le B$ for all $t \in [a, b]$. The image of a chain of paths is also a nonempty compact subset of $\mathbb{C}$.
2. (**Segment paths**) For complex numbers $z$, $w$, the function $\sigma_{z,w} : [0, 1] \to \mathbb{C}$ defined by
   $$
   \sigma_{z,w}(t) = z + t(w - z)
   $$
   is a C¹ path on $[0, 1]$ with $\sigma_{z,w}'(t) = w - z$ for all $t$, initial point $z$, and terminal point $w$. If $z = w$, then $\sigma_{z,w}$ is a constant path. It is called the **segment path** from $z$ to $w$. Also, for a complex number $c$ and a positive real number $\varepsilon$, if $z$ and $w$ belong to the open ball $B(c, \varepsilon)$, then the image of $\sigma_{z,w}$ is a subset of $B(c, \varepsilon)$. The letter $\sigma$ is different from the letter for permutations.
3. (**Circle paths**) For a complex number $a_0$ and a positive real number $r$, the function $\gamma_{a_0,r} : [0, 2\pi] \to \mathbb{C}$ defined by
   $$
   \gamma_{a_0,r}(t) = a_0 + r \exp(it)
   $$
   is a closed C¹ path on $[0, 2\pi]$ with $\gamma_{a_0,r}'(t) = i r \exp(it)$ and $|\gamma_{a_0,r}'(t)| = r$ for all $t$. Its initial and terminal points are $a_0 + r$, and its image is $\{z \in \mathbb{C} : |z - a_0| = r\}$. It is called the **circle path** with center $a_0$ and radius $r$. No symbol is given to the set of points that is its image; the closed ball $C(a_0, r)$ is a different set.
4. (**Reversed paths**) The function $\gamma^- : [a, b] \to \mathbb{C}$ defined by $\gamma^-(t) = \gamma(a + b - t)$ is a C¹ path on $[a, b]$ with $(\gamma^-)'(t) = -\gamma'(a + b - t)$ for all $t$, initial point $\gamma(b)$, terminal point $\gamma(a)$, and the same image as $\gamma$. $(\gamma^-)^- = \gamma$. For complex numbers $z$, $w$, $(\sigma_{z,w})^- = \sigma_{w,z}$.
5. (Translation and complex multiples) For complex numbers $c$, $w$, the functions $[a, b] \to \mathbb{C}$ with values $\gamma(t) + c$ and $w\gamma(t)$ at $t$ are C¹ paths on $[a, b]$, and the values of their derivatives at $t$ are $\gamma'(t)$ and $w\gamma'(t)$. They are written $\gamma + c$ and $w\gamma$.
:::

## 직관

경로는 시각 $a$부터 $b$까지 평면 위를 움직이는 점의 기록입니다. 같은 자리를 지나도 언제 어떤 방향으로 지나는지가 다르면 다른 경로입니다. 예컨대 $\sigma_{z,w}$와 $\sigma_{w,z}$는 상이 같은 선분이지만 방향이 반대입니다((4)). 이 사이트의 경로는 점이 멈춰 있어도 되고(상수 경로), 선분의 두 끝점이 같아도 됩니다. 뒤 항목들이 삼각형을 넷으로 나누거나 세 꼭짓점이 한 직선 위에 있는 경우를 다룰 때, 그런 경로를 빼지 않아도 되게 하려는 것입니다.

꺾인 길은 한 함수로 만들지 않고, 끝과 처음이 이어진 경로들을 차례로 늘어놓은 경로열로 둡니다. 비유의 "여러 구간을 이어 걷는다"에서 각 구간이 경로열의 한 경로이고, "앞 구간이 끝난 자리에서 다음 구간이 시작한다"가 끝점과 시작점의 조건입니다.

## 증명

:::idea
(1)은 닫힌구간의 콤팩트성과 연속 상, 최대·최소 정리이다. (2)–(5)는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (6), (9)와 계산이다. 원의 상은 [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (4)로 얻는다.
:::

:::hint
(2)의 볼록성에서는 $z + t(w - z) - c = (1 - t)(z - c) + t(w - c)$로 적고 삼각부등식을 씁니다.
:::

:::proof
"미분 (n)"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 번호, "절댓값 (n)"은 [[modulus-of-complex-number]]의 번호이다.

**1의 증명.** 미분 (1)에 의해 $\gamma$와 $\gamma'$은 연속이다. [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $[a, b]$는 콤팩트이고, [[continuous-image-of-compact|연속 상의 콤팩트성]]의 (1)에 의해 $\gamma([a, b])$는 $\mathbb{C}$의 콤팩트 부분집합이다. $\gamma(a)$가 그 원소이므로 공집합이 아니다. [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)에 의해 $|\gamma'| : [a, b] \to \mathbb{R}$는 연속이고, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 해석학 입문의 뜻의 연속함수이므로, [[extreme-value-theorem|최대·최소 정리]]의 (2)에 의해 최댓값을 갖는 점 $c$가 있고 $B = |\gamma'(c)|$로 둘 수 있다. 경로열의 상: $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $k = 1$이면 앞 문장이다. $(\gamma_1, \dots, \gamma_{k+1})$의 상은 $(\gamma_1, \dots, \gamma_k)$의 상과 $\gamma_{k+1}$의 상의 합집합이고, [[compact-space]]의 (6)의 첫 문장에 의해 콤팩트 집합 둘의 합집합은 콤팩트이다. $\gamma_1(a_1)$이 원소이므로 공집합이 아니다.

**2의 증명.** 미분 (9)에 의해 $\sigma_{z,w}$는 연속미분가능하고 도함수는 값이 $w - z$인 상수함수이다. $\sigma_{z,w}(0) = z$이고 $\sigma_{z,w}(1) = z + (w - z) = w$이다. $z = w$이면 모든 $t$에서 $\sigma_{z,w}(t) = z$이다. 볼록성: $0 \le t \le 1$이면 [[complex-field]]의 계산(체의 분배법칙)으로 $\sigma_{z,w}(t) - c = (1 - t)(z - c) + t(w - c)$이고, [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)와 절댓값 (3), (5)에 의해($0 \le 1 - t$, $0 \le t$이므로 $|1 - t| = 1 - t$, $|t| = t$)
$$
\begin{aligned}
&|\sigma_{z,w}(t) - c| \\
&\quad \le (1 - t)|z - c| + t|w - c|
\end{aligned}
$$
이다. $|z - c| < \varepsilon$, $|w - c| < \varepsilon$이다. $0 < 1 - t$이면 $(1 - t)|z - c| < (1 - t)\varepsilon$이고 $t|w - c| \le t\varepsilon$이며, $1 - t = 0$이면 $t = 1$이라 $t|w - c| < t\varepsilon$이고 $(1 - t)|z - c| = 0 = (1 - t)\varepsilon$이다. 어느 경우든 [[order-properties-of-reals|순서 성질]]의 (4)의 (i), (iii)과 (2)의 (iv)에 의해 오른쪽은 $(1 - t)\varepsilon + t\varepsilon = \varepsilon$보다 작다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $\sigma_{z,w}(t) \in B(c, \varepsilon)$이다.

**3의 증명.** 미분 (9)에 의해 $\gamma_{a_0,r}$은 연속미분가능하고 $\gamma_{a_0,r}'(t) = i r \exp(it)$이다. 절댓값 (3), (5)와 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)에 의해 $|i r \exp(it)| = |i|\,|r|\,|\exp(it)| = r$이다($0 < r$). [[complex-exponential-function|복소 지수함수]]의 (3)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(i \cdot 0) = 1 = \exp(2\pi i)$이므로 시작점과 끝점은 $a_0 + r$이고 닫힌 경로이다. 상: $|\gamma_{a_0,r}(t) - a_0| = |r \exp(it)| = r$이므로 상은 $\{z : |z - a_0| = r\}$에 든다. 거꾸로 $|z - a_0| = r$이면 절댓값 (4)에 의해 $u = (z - a_0)/r$은 $|u| = 1$이고, [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (4)에 의해 $0 \le \theta < 2\pi$이고 $\exp(i\theta) = u$인 실수 $\theta$가 있으므로 $z = \gamma_{a_0,r}(\theta)$이다.

**4의 증명.** $s$에서의 값이 $a + b - s$인 일차함수는 $[a, b]$를 $[a, b]$로 보내므로($a \le s \le b$이면 $a \le a + b - s \le b$) 미분 (6)의 마지막 문장을 $m = -1$, $k = a + b$에 쓰면 $\gamma^-$는 연속미분가능하고 $(\gamma^-)'(t) = -\gamma'(a + b - t)$이다. $\gamma^-(a) = \gamma(b)$, $\gamma^-(b) = \gamma(a)$이다. 상: $t \in [a, b]$이면 $a + b - t \in [a, b]$이고 그 역도 그러므로 두 상은 서로의 부분집합이다. $(\gamma^-)^-(t) = \gamma(a + b - (a + b - t)) = \gamma(t)$이다. $(\sigma_{z,w})^-(t) = z + (1 - t)(w - z) = w + t(z - w) = \sigma_{w,z}(t)$이다.

**5의 증명.** 미분 (9)의 상수함수와 미분 (4)에 의해 $\gamma + c$와 $w\gamma$는 연속미분가능하고 도함수의 값은 $\gamma'(t) + 0$과 $w\gamma'(t)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[반원 경로]
$t$에서의 값이 $\exp(it)$인 함수 $\gamma : [0, \pi] \to \mathbb{C}$는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (8)과 (2)에 의해 C¹ 경로이고, 시작점은 $1$, 끝점은 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $-1$입니다. $1 \ne -1$이므로 닫힌 경로가 아닙니다. 뒤집은 경로 $\gamma^-$는 $-1$에서 $1$로 같은 반원을 돕니다.
:::

:::example[삼각형의 둘레를 도는 닫힌 경로열]
$(\sigma_{0,1}, \sigma_{1,i}, \sigma_{i,0})$은 각 경로의 끝점이 다음 경로의 시작점이므로 경로열이고, 시작점과 끝점이 모두 $0$이므로 닫힌 경로열입니다. 상은 세 선분의 합집합입니다.
:::

:::counterexample[도함수가 0 인 경로]
상수 경로 $\sigma_{2i,2i}$는 도함수가 모든 점에서 $0$이지만 이 사이트의 C¹ 경로입니다. 출처의 "매끄러운 경로"는 도함수가 $0$이 아니기를 요구하므로 이것을 경로로 치지 않습니다. 또 $t$에서의 값이 $t^2$인 경로 $[-1, 1] \to \mathbb{C}$는 $t = 0$에서 도함수가 $0$이지만 C¹ 경로이고, 상은 $0$과 $1$ 사이의 선분입니다.
:::

## 확인 질문

:::check[$\gamma_{1,2}$의 시작점과 상은?]
(3)에 의해 시작점은 $1 + 2 = 3$이고, 상은 $\{z : |z - 1| = 2\}$입니다.
:::

:::check[$z = 1 + i$, $w = 2$, $c = 1$, $\varepsilon = 3/2$이면 $\sigma_{z,w}$의 상은 $B(c, \varepsilon)$에 드는가?]
$|z - c| = |i| = 1 < 3/2$이고 $|w - c| = 1 < 3/2$이므로 (2)에 의해 상은 $B(1, 3/2)$에 듭니다.
:::
