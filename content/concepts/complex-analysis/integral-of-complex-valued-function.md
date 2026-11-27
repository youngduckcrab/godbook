---
title: 복소수값 함수의 적분
title_en: Integral of a Complex-Valued Function
aliases: [실변수 복소수값 함수의 적분, 복소수값 함수의 리만 적분, 복소수값 함수의 방향 있는 적분, integral of a complex-valued function, Riemann integrable complex-valued function]
kind: definition
field: complex-analysis
msc: ["30", "26A42"]
level: undergrad
summary: "a < b 일 때 g : [a, b] → ℂ 는 실수부와 허수부가 리만 적분가능할 때 적분가능하다고 하고, 적분을 두 적분으로 만든 복소수로 정한다. 정의역이 더 큰 함수와 방향 있는 적분도 같은 방식으로 정한다. 실수부와 허수부, 실수값 함수를 ι 로 옮긴 함수의 적분이 실함수의 적분을 ι 로 옮긴 것이라는 것, 연속이면 적분가능하다는 것, 끝점 바꾸기와 세 점, 상수함수, 사이의 값만으로 정해진다는 것을 함께 진술한다."
requires: [function-composition, recursion-theorem, interval, real-number-arithmetic, real-valued-function, dirichlet-function, riemann-integral, oriented-integral, continuous-implies-integrable, fundamental-theorem-of-calculus-second-form, antiderivative-and-integral-of-power, linearity-of-the-integral, continuous-map, continuity-agrees-with-analysis, complex-number, complex-field, complex-plane-as-metric-space, continuity-of-complex-operations]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.3소절 Complex-valued functions (p.142)"
    checked: original
    note: "정의는 출처 11.1.3소절(p.142)의 것과 같다. 출처는 f : [a, b] → ℂ 를 실함수 u, v 로 f = u + iv 라 쓰고, u 와 v 가 리만 적분가능하면 f 가 리만 적분가능하다고 하며 ∫_a^b f := ∫_a^b u + i ∫_a^b v 로 정한다. 출처는 같은 정의를 '다른 모든 종류의 적분'에도 쓴다고 적는다. 이 항목은 그 말을 riemann-integral 의 (4)의 더 큰 정의역과 oriented-integral 의 방향 있는 적분에 대해 정의로 적는다. (1)은 정의를 다시 적은 것이다. (2)–(6)은 출처에 명제로 없다(11.1–11.2절에서 'integrable', 'integral', '∫' 를 줄을 이어 찾아 나온 곳을 모두 읽었고, 11.1.4·11.2.4소절 연습문제를 처음부터 읽었다. 11.2.2소절은 고른 수렴과 적분을 다룬다). 출처가 Proposition 11.2.11 의 뒤 문단(p.149)에서 증명은 1권 6장의 결과에서 바로 나온다며 연습문제(11.2.7, p.152: '실수의 결과로 돌려 증명하라')로 남기는 방식이 이 항목의 증명 방식과 같다."
  - ref: beck-first-course-complex-analysis
    loc: "Definition and Basic Properties 절 첫머리, source/sec_intdef.ptx:6–14; 같은 절의 Example firstintexample, source/sec_intdef.ptx:72–153; Theorems from Calculus 부록의 Theorem thm_realintegralproperties, source/app_calculus.ptx:91–102"
    checked: original
    note: "출처는 a, b ∈ ℝ 와 연속인 g : [a, b] → ℂ 에 대해서만 ∫_a^b g(t) dt := ∫_a^b Re g(t) dt + i ∫_a^b Im g(t) dt 로 정의한다(sec_intdef.ptx:6–14). 출처는 a < b 를 적지 않고 적분가능성을 따로 말하지 않는다. 이 항목은 Lebl 처럼 실수부와 허수부가 적분가능한 함수 전체에 정의하고, 연속이면 적분가능하다는 것을 (3)으로 둔다. 출처 부록의 Theorem thm_realintegralproperties(app_calculus.ptx:91–102)는 실수 상수의 선형성을 연속함수에 대해서만 적는다. 예시 't + t² i 의 적분'은 출처 Example firstintexample(sec_intdef.ptx:96–116)이 포물선 위의 경로 적분을 [0, 1] 위의 t 의 다항식인 복소수값 함수의 적분으로 바꿔 실수부와 허수부로 계산하는 것과 같은 발상이고, 함수 t + t² i 는 그 예의 경로 γ(t) = t + it² 와 같은 함수이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예·확인 질문의 계산, 반례 제목). 독립 검토 없음."
added: 2026-11-27
---

:::statement
구간과 닫힌구간은 [[interval]]의 것이고, 실함수와 제한은 [[real-valued-function]]의 것이다. 실함수의 리만 적분가능, 적분 $\int_a^b f$, 정의역이 $[a, b]$보다 큰 함수가 "$[a, b]$에서 적분가능"하다는 것과 그 적분, 적분 변수의 약속은 [[riemann-integral]]의 것이고(그 항목의 (4)), "$\alpha$와 $\beta$ 사이에 있다", "사이에서 적분가능", 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속과 $a + bi$ 꼴은 [[complex-field]]의 것이다. 함수 $g : S \to \mathbb{C}$($S \subseteq \mathbb{R}$)의 실수부 $\operatorname{Re} g$와 허수부 $\operatorname{Im} g : S \to \mathbb{R}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 머리말의 것이고, 실함수 $u : S \to \mathbb{R}$에 대하여 $\iota \circ u : S \to \mathbb{C}$는 [[function-composition|합성]]이다. $\mathbb{R}$의 부분집합에는 보통 거리의 부분공간 거리와 그 거리위상을 주고, $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]]와 그 거리위상을 주며, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다.

**적분가능과 적분.** $a$, $b$를 $a < b$인 실수라 하고 $g : [a, b] \to \mathbb{C}$를 함수라 하자. $g$가 **리만 적분가능**(Riemann integrable), 줄여서 **적분가능**하다는 것은 정확히 두 실함수 $\operatorname{Re} g$와 $\operatorname{Im} g$가 둘 다 [[riemann-integral]]의 뜻으로 적분가능할 때이다. 이때 복소수
$$
\int_a^b g = \int_a^b \operatorname{Re} g + \Bigl(\int_a^b \operatorname{Im} g\Bigr)\, i
$$
를 $g$의 $[a, b]$ 위의 **적분**이라 한다. 오른쪽은 실함수의 적분 두 개로 만든 복소수 $\iota\bigl(\int_a^b \operatorname{Re} g\bigr) + \iota\bigl(\int_a^b \operatorname{Im} g\bigr)\, i$이다. $g$가 적분가능하지 않으면 $\int_a^b g$를 정의하지 않는다. 실함수의 적분과 같은 기호를 쓰지만, 값이 복소수인 함수에서는 이 항목의 뜻이다. 실함수 $u$를 $\iota$로 옮긴 함수에서 두 뜻이 맞는다는 것이 아래 (2)이다. $\int_a^b g$를 $\int_a^b g(t)\,dt$로도 쓰고, 적분 변수의 약속은 [[riemann-integral]]의 것과 같다. 곧 $[a, b]$의 각 원소 $t$에서 정해지는 복소수의 식을 써서 "$\int_a^b (t\text{에 대한 식})\,dt$"라 쓰면, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $t$에서의 값이 그 식이 되게 정한 함수 $[a, b] \to \mathbb{C}$의 적분을 뜻한다.

**더 큰 정의역.** $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{C}$라 하자. $h$가 $[a, b]$**에서 적분가능**하다는 것은 정확히 제한 $h|_{[a, b]} : [a, b] \to \mathbb{C}$가 적분가능할 때이고, 그때 $\int_a^b h$와 $\int_a^b h(t)\,dt$는 $\int_a^b h|_{[a, b]}$를 뜻한다. $\operatorname{Re}(h|_{[a, b]}) = (\operatorname{Re} h)|_{[a, b]}$이고 허수부도 같으므로, $h$가 $[a, b]$에서 적분가능한 것은 정확히 $\operatorname{Re} h$와 $\operatorname{Im} h$가 [[riemann-integral]]의 (4)의 뜻으로 $[a, b]$에서 적분가능할 때이고, 그때 $\int_a^b h = \int_a^b \operatorname{Re} h + \bigl(\int_a^b \operatorname{Im} h\bigr) i$이다.

**방향 있는 적분.** $I$를 구간, $g : I \to \mathbb{C}$를 함수, $\alpha$, $\beta$를 $I$의 원소라 하자. $g$가 $\alpha$**와** $\beta$ **사이에서 적분가능**하다는 것은 정확히 $\operatorname{Re} g$와 $\operatorname{Im} g$가 둘 다 [[oriented-integral]]의 뜻으로 $\alpha$와 $\beta$ 사이에서 적분가능할 때이다. 이때 복소수
$$
\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Re} g + \Bigl(\int_\alpha^\beta \operatorname{Im} g\Bigr)\, i
$$
를 $g$의 $\alpha$에서 $\beta$까지의 **방향 있는 적분**이라 한다. 오른쪽의 두 적분은 실함수의 방향 있는 적분이다. 아래 (4)의 (i)에 의해, $\alpha < \beta$이면 이것은 앞의 "더 큰 정의역"의 $[\alpha, \beta]$ 위의 적분과 같으므로 두 기호는 부딪치지 않는다. $\int_\alpha^\beta g(t)\,dt$처럼 적분 변수를 써도 같은 뜻이다.

다음이 성립한다. 아래에서 $a$, $b$는 $a < b$인 실수이고, $I$는 구간이며, $\alpha$, $\beta$는 $I$의 원소이다.

1. (실수부와 허수부) $g : [a, b] \to \mathbb{C}$가 적분가능하면
   $$
   \begin{gathered}
   \operatorname{Re} \int_a^b g = \int_a^b \operatorname{Re} g, \\
   \operatorname{Im} \int_a^b g = \int_a^b \operatorname{Im} g
   \end{gathered}
   $$
   이다. $g : I \to \mathbb{C}$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $\operatorname{Re}\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Re} g$이고 $\operatorname{Im}\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Im} g$이다.
2. (실수값 함수를 옮긴 함수) $u : [a, b] \to \mathbb{R}$가 실함수이면, $\iota \circ u$가 적분가능한 것은 정확히 $u$가 적분가능할 때이고, 그때
   $$
   \int_a^b \iota \circ u = \iota\Bigl(\int_a^b u\Bigr)
   $$
   이다. 왼쪽은 이 항목의 적분, 오른쪽의 안쪽은 [[riemann-integral]]의 적분이다. 같은 식이 방향 있는 적분에서도 성립한다. 곧 $u : I \to \mathbb{R}$이면, $\iota \circ u$가 $\alpha$와 $\beta$ 사이에서 적분가능한 것은 정확히 $u$가 그럴 때이고, 그때 $\int_\alpha^\beta \iota \circ u = \iota\bigl(\int_\alpha^\beta u\bigr)$이다. 따라서 [[complex-field]]의 (3)의 약속대로 실수값 함수의 적분을 복소수 자리에 써도 두 뜻의 값이 맞는다.
3. (연속이면 적분가능) 연속인 $g : [a, b] \to \mathbb{C}$는 적분가능하다. $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{C}$의 제한 $h|_{[a, b]}$가 연속이면 $h$는 $[a, b]$에서 적분가능하다. 연속인 $g : I \to \mathbb{C}$는 $I$의 어느 두 점 사이에서도 적분가능하다.
4. (방향 있는 적분의 계산) $g : I \to \mathbb{C}$라 하자.
   - (i) (세 경우) $g$가 $\alpha$와 $\beta$ 사이에서 적분가능하다고 하자. $\alpha < \beta$이면 $g$는 $[\alpha, \beta]$에서 적분가능하고 $\int_\alpha^\beta g$는 그 $[\alpha, \beta]$ 위의 적분이다. $\beta < \alpha$이면 $g$는 $[\beta, \alpha]$에서 적분가능하고 $\int_\alpha^\beta g = -\int_\beta^\alpha g$이며, 오른쪽은 $[\beta, \alpha]$ 위의 적분이다. $\alpha = \beta$이면 $\int_\alpha^\beta g = 0$이다. 거꾸로, $\alpha < \beta$이고 $g$가 $[\alpha, \beta]$에서 적분가능하면 $g$는 $\alpha$와 $\beta$ 사이에서 적분가능하다.
   - (ii) (끝점 바꾸기) $g$가 $\alpha$와 $\beta$ 사이에서 적분가능한 것은 정확히 $\beta$와 $\alpha$ 사이에서 적분가능할 때이고, 그때 $\int_\alpha^\beta g = -\int_\beta^\alpha g$이다.
   - (iii) (세 점) $[a, b] \subseteq I$이고 $g$가 $[a, b]$에서 적분가능하다고 하자. $\alpha$, $\beta$, $\mu$가 $[a, b]$의 원소이면(순서와 같음은 아무래도 좋다) $g$는 셋 가운데 어느 두 점 사이에서도 적분가능하고
     $$
     \int_\alpha^\mu g = \int_\alpha^\beta g + \int_\beta^\mu g
     $$
     이다.
5. (상수함수) 복소수 $w$에 대하여 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $g(t) = w$인 $g : I \to \mathbb{C}$는 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta g = w(\beta - \alpha)$이다. 특히 $I$ 위의 값이 $w$인 상수함수는 $I$의 어느 두 점 사이에서도 적분가능하고 $\int_\alpha^\beta w\,dt = w(\beta - \alpha)$이며, $\int_a^b w\,dt = w(b - a)$이다.
6. (사이의 값만으로 정해진다) $J$를 구간, $g : I \to \mathbb{C}$, $h : J \to \mathbb{C}$라 하고 $\alpha$, $\beta$가 $I \cap J$의 원소라 하자. $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $g(t) = h(t)$이면, $g$가 $\alpha$와 $\beta$ 사이에서 적분가능한 것은 정확히 $h$가 그럴 때이고, 그때 $\int_\alpha^\beta g = \int_\alpha^\beta h$이다.
:::

:::english
Intervals and closed intervals are those of the entry on intervals, and real-valued functions and restrictions are those of the entry on real-valued functions. Riemann integrability of real-valued functions, the integral $\int_a^b f$, "integrable on $[a, b]$" for a function with a larger domain and its integral, and the convention on the variable of integration are those of the entry on the Riemann integral (its item (4)); "between $\alpha$ and $\beta$", "integrable between", and the oriented integral $\int_\alpha^\beta f$ are those of the entry on the oriented integral. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention of writing real numbers in place of complex numbers, and the form $a + bi$ are those of the entry on the field of complex numbers. For a function $g : S \to \mathbb{C}$ ($S \subseteq \mathbb{R}$), the real part $\operatorname{Re} g$ and imaginary part $\operatorname{Im} g : S \to \mathbb{R}$ are those of the opening paragraph of the entry on continuity of the complex operations, and for a real-valued function $u : S \to \mathbb{R}$, $\iota \circ u : S \to \mathbb{C}$ is the composition. Subsets of $\mathbb{R}$ carry the subspace metric of the usual metric and its metric topology, $\mathbb{C}$ carries the metric of the complex plane and its metric topology, and continuity is that of the entry on continuous maps between topological spaces.

**Integrability and the integral.** Let $a$, $b$ be real numbers with $a < b$ and $g : [a, b] \to \mathbb{C}$ a function. $g$ is **Riemann integrable**, or **integrable** for short, exactly when the two real-valued functions $\operatorname{Re} g$ and $\operatorname{Im} g$ are both integrable in the sense of the entry on the Riemann integral. In that case the complex number
$$
\int_a^b g = \int_a^b \operatorname{Re} g + \Bigl(\int_a^b \operatorname{Im} g\Bigr)\, i
$$
is the **integral** of $g$ over $[a, b]$. The right side is the complex number $\iota\bigl(\int_a^b \operatorname{Re} g\bigr) + \iota\bigl(\int_a^b \operatorname{Im} g\bigr)\, i$ made from two integrals of real-valued functions. If $g$ is not integrable, $\int_a^b g$ is not defined. The same symbol as for the integral of a real-valued function is used, but for a function with complex values it has the meaning of this entry. Item (2) below says the two meanings agree for a real-valued function $u$ carried over by $\iota$. We also write $\int_a^b g$ as $\int_a^b g(t)\,dt$, with the same convention on the variable of integration as in the entry on the Riemann integral. That is, writing "$\int_a^b (\text{an expression in } t)\,dt$" with a complex expression determined at each element $t$ of $[a, b]$ means the integral of the function $[a, b] \to \mathbb{C}$ whose value at $t$ is that expression, defined by item (1) of the recursion theorem.

**Larger domains.** Let $[a, b] \subseteq S \subseteq \mathbb{R}$ and $h : S \to \mathbb{C}$. $h$ is **integrable on $[a, b]$** exactly when the restriction $h|_{[a, b]} : [a, b] \to \mathbb{C}$ is integrable, and then $\int_a^b h$ and $\int_a^b h(t)\,dt$ mean $\int_a^b h|_{[a, b]}$. Since $\operatorname{Re}(h|_{[a, b]}) = (\operatorname{Re} h)|_{[a, b]}$ and likewise for imaginary parts, $h$ is integrable on $[a, b]$ exactly when $\operatorname{Re} h$ and $\operatorname{Im} h$ are integrable on $[a, b]$ in the sense of item (4) of the entry on the Riemann integral, and then $\int_a^b h = \int_a^b \operatorname{Re} h + \bigl(\int_a^b \operatorname{Im} h\bigr) i$.

**Oriented integral.** Let $I$ be an interval, $g : I \to \mathbb{C}$ a function, and $\alpha$, $\beta$ elements of $I$. $g$ is **integrable between $\alpha$ and $\beta$** exactly when $\operatorname{Re} g$ and $\operatorname{Im} g$ are both integrable between $\alpha$ and $\beta$ in the sense of the entry on the oriented integral. In that case the complex number
$$
\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Re} g + \Bigl(\int_\alpha^\beta \operatorname{Im} g\Bigr)\, i
$$
is the **oriented integral** of $g$ from $\alpha$ to $\beta$. The two integrals on the right are oriented integrals of real-valued functions. By item (4)(i) below, if $\alpha < \beta$ this equals the integral over $[\alpha, \beta]$ in the sense of "larger domains" above, so the two symbols do not conflict. Writing a variable of integration as in $\int_\alpha^\beta g(t)\,dt$ has the same meaning.

The following hold. Below, $a$, $b$ are real numbers with $a < b$, $I$ is an interval, and $\alpha$, $\beta$ are elements of $I$.

1. (Real and imaginary parts) If $g : [a, b] \to \mathbb{C}$ is integrable, then
   $$
   \begin{gathered}
   \operatorname{Re} \int_a^b g = \int_a^b \operatorname{Re} g, \\
   \operatorname{Im} \int_a^b g = \int_a^b \operatorname{Im} g.
   \end{gathered}
   $$
   If $g : I \to \mathbb{C}$ is integrable between $\alpha$ and $\beta$, then $\operatorname{Re}\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Re} g$ and $\operatorname{Im}\int_\alpha^\beta g = \int_\alpha^\beta \operatorname{Im} g$.
2. (Real-valued functions carried over) If $u : [a, b] \to \mathbb{R}$ is a real-valued function, then $\iota \circ u$ is integrable exactly when $u$ is integrable, and then
   $$
   \int_a^b \iota \circ u = \iota\Bigl(\int_a^b u\Bigr).
   $$
   The left side is the integral of this entry, and the inner integral on the right is that of the entry on the Riemann integral. The same holds for oriented integrals: if $u : I \to \mathbb{R}$, then $\iota \circ u$ is integrable between $\alpha$ and $\beta$ exactly when $u$ is, and then $\int_\alpha^\beta \iota \circ u = \iota\bigl(\int_\alpha^\beta u\bigr)$. Hence, under the convention of item (3) of the entry on the field of complex numbers, writing the integral of a real-valued function in place of a complex number gives the same value under both meanings.
3. (Continuous functions are integrable) A continuous $g : [a, b] \to \mathbb{C}$ is integrable. If $[a, b] \subseteq S \subseteq \mathbb{R}$ and the restriction $h|_{[a, b]}$ of $h : S \to \mathbb{C}$ is continuous, then $h$ is integrable on $[a, b]$. A continuous $g : I \to \mathbb{C}$ is integrable between any two points of $I$.
4. (Computing oriented integrals) Let $g : I \to \mathbb{C}$.
   - (i) (The three cases) Suppose $g$ is integrable between $\alpha$ and $\beta$. If $\alpha < \beta$, then $g$ is integrable on $[\alpha, \beta]$ and $\int_\alpha^\beta g$ is its integral over $[\alpha, \beta]$. If $\beta < \alpha$, then $g$ is integrable on $[\beta, \alpha]$ and $\int_\alpha^\beta g = -\int_\beta^\alpha g$, where the right side is the integral over $[\beta, \alpha]$. If $\alpha = \beta$, then $\int_\alpha^\beta g = 0$. Conversely, if $\alpha < \beta$ and $g$ is integrable on $[\alpha, \beta]$, then $g$ is integrable between $\alpha$ and $\beta$.
   - (ii) (Swapping endpoints) $g$ is integrable between $\alpha$ and $\beta$ exactly when it is integrable between $\beta$ and $\alpha$, and then $\int_\alpha^\beta g = -\int_\beta^\alpha g$.
   - (iii) (Three points) Suppose $[a, b] \subseteq I$ and $g$ is integrable on $[a, b]$. If $\alpha$, $\beta$, $\mu$ are elements of $[a, b]$ (in any order, possibly equal), then $g$ is integrable between any two of them and
     $$
     \int_\alpha^\mu g = \int_\alpha^\beta g + \int_\beta^\mu g.
     $$
5. (Constant functions) For a complex number $w$, a function $g : I \to \mathbb{C}$ with $g(t) = w$ for all $t$ between $\alpha$ and $\beta$ is integrable between $\alpha$ and $\beta$ and $\int_\alpha^\beta g = w(\beta - \alpha)$. In particular the constant function on $I$ with value $w$ is integrable between any two points of $I$, $\int_\alpha^\beta w\,dt = w(\beta - \alpha)$, and $\int_a^b w\,dt = w(b - a)$.
6. (Determined by the values in between) Let $J$ be an interval, $g : I \to \mathbb{C}$, $h : J \to \mathbb{C}$, and let $\alpha$, $\beta$ be elements of $I \cap J$. If $g(t) = h(t)$ for all $t$ between $\alpha$ and $\beta$, then $g$ is integrable between $\alpha$ and $\beta$ exactly when $h$ is, and then $\int_\alpha^\beta g = \int_\alpha^\beta h$.
:::

## 직관

평면 위를 움직이는 점의 위치 $g(t)$를 시간에 대해 쌓으면, 동서 좌표를 쌓은 양과 남북 좌표를 쌓은 양이 따로 나옵니다. 그 둘을 한 복소수로 묶은 것이 $\int_a^b g$입니다. 비유의 "두 좌표를 따로 쌓는다"가 정의의 "$\operatorname{Re} g$와 $\operatorname{Im} g$를 따로 적분한다"이고, 두 좌표가 모두 쌓일 수 있어야 한다는 것이 "둘 다 적분가능"이라는 조건입니다.

그래서 이 항목의 성질은 실함수의 적분의 성질을 실수부와 허수부에 따로 쓴 것입니다. 방향 있는 적분도 실함수의 것을 두 번 쓴 것이므로, 끝점의 순서를 바꾸면 부호가 바뀌고 세 점을 어떤 순서로 놓아도 적분이 더해집니다((4)). 적분 기호는 실함수의 것과 같지만, 실수값 함수를 $\iota$로 옮겨 적분하면 실함수의 적분을 옮긴 것과 같으므로((2)) 같은 기호를 써도 값이 갈리지 않습니다.

## 증명

:::idea
모든 번호는 실수부와 허수부에 [[riemann-integral]]과 [[oriented-integral]]의 해당 번호를 쓰고, [[complex-field]]의 (4)로 두 실수를 한 복소수로 묶는 것이다.
:::

:::hint
(2)에서 $\operatorname{Im}(\iota \circ u)$는 값이 $0$인 상수함수입니다.
:::

:::proof
"복소수체 (n)"은 [[complex-field]]의 번호이고, "적분 (n)"과 "방향 (n)"은 [[riemann-integral]]과 [[oriented-integral]]의 번호이다. 복소수 $p + qi$($p$, $q$ 실수)의 실수부가 $p$, 허수부가 $q$라는 것은 복소수체 (4)이다.

**더 큰 정의역의 문장.** $[a, b]$의 모든 $t$에서 $\operatorname{Re}(h|_{[a, b]})(t) = \operatorname{Re} h(t) = (\operatorname{Re} h)|_{[a, b]}(t)$이므로 두 실함수는 같고([[real-valued-function]]의 (2)), 허수부도 같다. 나머지는 정의와 적분 (4)이다.

**1의 증명.** 정의의 오른쪽은 실수부가 $\int_a^b \operatorname{Re} g$, 허수부가 $\int_a^b \operatorname{Im} g$인 복소수이다. 방향 있는 적분도 같다.

**2의 증명.** 복소수체 (2)의 (ii)에 의해 $\operatorname{Re}(\iota \circ u) = u$이고 $\operatorname{Im}(\iota \circ u)$는 값이 $0$인 상수함수이다. 적분 (5)에 의해 값이 $0$인 상수함수는 적분가능하고 적분이 $0$이므로, $\iota \circ u$가 적분가능한 것은 정확히 $u$가 적분가능할 때이고, 그때 $\int_a^b \iota \circ u = \int_a^b u + 0i$이다. 복소수체 (4)에 의해 이것은 $\iota(\int_a^b u)$이다. 방향 있는 적분은 방향 (4)에 의해 값이 $0$인 상수함수가 어느 두 점 사이에서도 적분가능하고 적분이 $0(\beta - \alpha) = 0$이므로 같은 논법이다.

**3의 증명.** $g : [a, b] \to \mathbb{C}$가 연속이면 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (1)에 의해 $\operatorname{Re} g$, $\operatorname{Im} g$는 위상의 뜻으로 연속이고, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 [[continuous-function]]의 뜻의 연속함수이다. [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)에 의해 두 실함수는 적분가능하므로 $g$는 적분가능하다. 둘째 문장은 이것을 $h|_{[a, b]}$에 쓴 것이다. 셋째 문장: 같은 논법으로 $\operatorname{Re} g$, $\operatorname{Im} g : I \to \mathbb{R}$는 연속함수이고, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 $I$의 어느 두 점 사이에서도 적분가능하다.

**4의 증명.** (i). $\alpha < \beta$이면 방향 있는 적분의 정의에 의해 $\operatorname{Re} g$와 $\operatorname{Im} g$는 $[\alpha, \beta]$에서 적분가능하고 $\int_\alpha^\beta \operatorname{Re} g$, $\int_\alpha^\beta \operatorname{Im} g$는 적분 (4)의 $[\alpha, \beta]$ 위의 적분이다. 더 큰 정의역의 문장에 의해 $g$는 $[\alpha, \beta]$에서 적분가능하고, 두 적분은 같은 복소수를 만든다. $\beta < \alpha$이면 같은 정의에 의해 $\int_\alpha^\beta \operatorname{Re} g = -\int_\beta^\alpha \operatorname{Re} g$이고 허수부도 같으므로
$$
\begin{aligned}
\int_\alpha^\beta g &= -\int_\beta^\alpha \operatorname{Re} g + \Bigl(-\int_\beta^\alpha \operatorname{Im} g\Bigr) i \\
&= -\int_\beta^\alpha g
\end{aligned}
$$
이다(복소수체 (1)의 $-z$). $\alpha = \beta$이면 두 실수가 $0$이므로 $\int_\alpha^\beta g = 0 + 0i = 0$이다. 마지막 문장은 방향 있는 적분의 정의를 $\operatorname{Re} g$, $\operatorname{Im} g$에 쓴 것이다.

(ii). 방향 (1)을 $\operatorname{Re} g$와 $\operatorname{Im} g$에 쓰고 (i)의 계산처럼 묶는다.

(iii). 더 큰 정의역의 문장에 의해 $\operatorname{Re} g$와 $\operatorname{Im} g$는 $[a, b]$에서 적분가능하므로, 방향 (2)를 두 실함수에 쓰면 셋 가운데 어느 두 점 사이에서도 적분가능하고 $\int_\alpha^\mu \operatorname{Re} g = \int_\alpha^\beta \operatorname{Re} g + \int_\beta^\mu \operatorname{Re} g$이며 허수부도 같다. [[complex-number]]의 (2)에 의해 두 복소수의 합의 실수부와 허수부는 실수부끼리, 허수부끼리의 합이므로 진술의 등식이 나온다.

**5의 증명.** $p = \operatorname{Re} w$, $q = \operatorname{Im} w$로 두면 $\alpha$와 $\beta$ 사이의 모든 $t$에서 $\operatorname{Re} g(t) = p$, $\operatorname{Im} g(t) = q$이다. 방향 (4)에 의해 두 실함수는 $\alpha$와 $\beta$ 사이에서 적분가능하고 적분은 $p(\beta - \alpha)$, $q(\beta - \alpha)$이다. 복소수체 (2)의 (ii)에 의해 이것은 $\iota(\beta - \alpha) w$의 실수부와 허수부이므로 $\int_\alpha^\beta g = w(\beta - \alpha)$이다(복소수체 (3)의 약속과 곱셈의 교환법칙). 상수함수에 관한 문장은 이것의 특수한 경우이고, $\int_a^b w\,dt$는 (4)의 (i)에 의해 $[a, b]$를 $I$로 두고 $\alpha = a$, $\beta = b$로 둔 것과 같다.

**6의 증명.** 가정에 의해 $\alpha$와 $\beta$ 사이의 모든 $t$에서 $\operatorname{Re} g(t) = \operatorname{Re} h(t)$이고 허수부도 같으므로, 방향 (5)를 두 실함수에 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[t + t² i 의 적분]
$t$에서의 값이 $t + t^2 i$인 함수 $g : [0, 1] \to \mathbb{C}$를 봅시다. $\operatorname{Re} g(t) = t$, $\operatorname{Im} g(t) = t^2$이고, [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)에 의해 $\int_0^1 t\,dt = 1/2$, $\int_0^1 t^2\,dt = 1/3$입니다. 따라서 $g$는 적분가능하고
$$
\int_0^1 (t + t^2 i)\,dt = \frac{1}{2} + \frac{1}{3} i
$$
입니다. 끝점을 바꾸면 (4)의 (ii)에 의해 $\int_1^0 (t + t^2 i)\,dt = -\tfrac{1}{2} - \tfrac{1}{3} i$입니다.
:::

:::counterexample[허수부만 적분가능하지 않은 1 + D i]
$D$를 $[0, 1]$ 위의 디리클레 함수([[dirichlet-function]])라 하고 $t$에서의 값이 $1 + D(t)\, i$인 함수 $g : [0, 1] \to \mathbb{C}$를 봅시다. 실수부는 값이 $1$인 상수함수라 [[riemann-integral]]의 (5)에 의해 적분가능하지만, 허수부 $D$는 같은 번호에 의해 적분가능하지 않습니다. 정의는 두 실함수가 모두 적분가능하기를 요구하므로 $g$는 적분가능하지 않고 $\int_0^1 g$는 정의되지 않습니다. 이때 [[dirichlet-function]]의 정의에 의해 $D$의 값은 $0$이나 $1$이므로 $g$의 실수부와 허수부는 둘 다 유계입니다. 이 $g$가 적분가능하지 않은 것은 값이 유계가 아니어서가 아닙니다.
:::

## 확인 질문

:::check[$\int_0^3 (2 - 5i)\,dt$와 $\int_3^0 (2 - 5i)\,dt$는?]
(5)에 의해 $\int_0^3 (2 - 5i)\,dt = (2 - 5i)(3 - 0) = 6 - 15i$이고, $\int_3^0 (2 - 5i)\,dt = (2 - 5i)(0 - 3) = -6 + 15i$입니다. 둘의 합이 $0$인 것은 (4)의 (ii)와 맞습니다.
:::

:::check[실함수 $u(t) = 4t^3$에 대하여 $\int_0^1 \iota(4t^3)\,dt$는?]
(2)에 의해 이것은 $\iota\bigl(\int_0^1 4t^3\,dt\bigr)$이고, [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_0^1 4t^3\,dt = 4 \cdot \tfrac{1}{4} = 1$이므로 값은 $\iota(1) = 1$입니다.
:::
