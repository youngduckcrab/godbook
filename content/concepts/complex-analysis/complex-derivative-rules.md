---
title: 복소 미분의 법칙
title_en: Rules of Complex Differentiation
aliases: [복소 미분의 곱의 법칙, 복소 미분의 몫의 법칙, 복소 연쇄법칙, 복소 다항함수의 도함수, rules of complex differentiation, complex chain rule]
kind: theorem
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 복소 미분가능한 두 함수의 합, 차, 상수배, 곱은 미분가능하고 실함수와 같은 공식을 따른다. 미분가능하고 0 이 아닌 점의 둘레에는 함수가 0 이 아닌 열린 공이 있고, 그 위에서 역수와 몫이 미분가능하다. 정수 지수의 거듭제곱과 복소 다항함수의 도함수를 구하고, 연쇄법칙을 카라테오도리 꼴로 증명한다.
requires: [function, function-composition, mathematical-induction, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-polynomial-function, open-ball, open-ball-is-open, open-set-in-metric-space, continuous-map, subspace-and-continuity, composition-of-continuous-maps, complex-plane-as-metric-space, continuity-of-complex-operations, limit-of-complex-function, limit-laws-for-complex-functions, complex-derivative]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Differentiability and Holomorphicity 절의 Proposition derivativerules 와 그 증명, source/sec_diffholom.ptx:190–273; 연습문제 1/z 의 도함수, ex_diffrules, (az + b)/(cz + d) 의 도함수, polynomialsholomorphic (source/exercises-chap2.ptx:165–174, 182–209)"
    checked: original
    note: "출처 Proposition derivativerules(sec_diffholom.ptx:196–240)는 f, g 가 z 에서 미분가능하고 h 가 g(z) 에서 미분가능하면 (f + cg)′ = f′ + cg′, (fg)′ = f′g + fg′, g(z)² ≠ 0 일 때 (f/g)′ = (f′g − fg′)/g², 0 이 아닌 모든 정수 n 에서 (zⁿ)′ = nz^{n−1}, g 는 z 에서 연속, (h(g(z)))′ = h′(g(z))g′(z) 라고 진술한다. 출처는 곱의 법칙만 h 꼴의 극한 법칙으로 증명하고(241–272줄. 그 안에서 lim f(z + h) = f(z) 를 말없이 쓴다) 나머지는 연습문제 ex_diffrules(exercises-chap2.ptx:182–188)로 남긴다. 이 항목은 곱의 법칙과 연쇄법칙을 카라테오도리 꼴로 증명하고, 미분가능하면 연속이라는 것은 복소 미분의 (3)으로 따로 둔다. 출처의 진술(196–240줄)은 몫과 연쇄법칙에서 함수의 정의역을 적지 않는다. 이 항목은 몫을 g 가 0 이 아닌 열린 공 위에서((3)의 (i)이 그런 공이 있음을 보인다) 또는 g 가 0 이 아닌 점의 열린집합 위에서 다루고, 연쇄법칙은 g 의 값이 모두 h 의 정의역 H 에 드는 경우로 진술한다. (4)의 (i), (ii)는 출처의 (zⁿ)′ = nz^{n−1} 이다. (4)의 (iii)은 출처 연습문제 polynomialsholomorphic(exercises-chap2.ptx:199–209: z 의 다항식이면 정함수)과 같은 내용이고 이 항목은 도함수의 계수까지 진술한다. 출처의 등각성(dernonzeroconformal, 282–327줄)은 각이 이 사이트에 없어 싣지 않았다. 예시 '다항함수 $2z^3 - iz + 5$ 의 도함수'는 출처 연습문제 polynomialsholomorphic 와 같은 종류(다항식의 도함수)이다. 예시 '$1/(z^2 + 1)$ 의 도함수'의 함수 1/(z² + 1) 은 출처 sec_diffholom.ptx:330–336 의 그림 예와 sec_powerseriesholom.ptx:360 의 예, 연습문제 exercises-chap8.ptx:79 에도 나온다. 확인 질문 '$z^{-2}$의 $i$에서의 미분계수는 무엇인가?'는 출처 연습문제(exercises-chap2.ptx:165–174, 1/z 의 도함수를 정의로 구하기)와 같은 종류의 음의 지수의 도함수이다. 반례 '곱의 도함수가 도함수의 곱과 다른 예'의 (z²)′ = 2z 는 출처 sec_diffholom.ptx:180–187 의 SageMath 계산과 sec_antiderivatives.ptx:38–42 의 예에 나온다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(정의역 안으로 좁힌 진술, 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱 $z^n$은 [[power-of-a-complex-number]]의 것이다. 열린 공 $B(a, r)$와 $\mathbb{C}$의 부분집합에 주는 거리와 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 복소 미분가능, 미분계수 $f'(z_0)$, 차분몫, 정칙, 정칙함수, 도함수, 정함수는 [[complex-derivative|복소 미분]]의 것이다. 함수 $f + g$, $f - g$, $cf$, $fg$와, 모든 값이 $0$이 아닌 $g$의 $1/g$, $f/g$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 진술에서 $Z$를 여기의 정의역으로 둔 것이다. 복소 다항함수와 그 표현, 계수, 끝 번호는 [[complex-polynomial-function]]의 것이다. 합성은 [[function-composition|함수의 합성]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합, $f$, $g : G \to \mathbb{C}$는 복소함수, $z_0$은 $G$의 점, $c$는 복소수이다.

1. (합, 차, 상수배) $f$와 $g$가 $z_0$에서 미분가능하면 $f + g$, $f - g$, $cf$는 $z_0$에서 미분가능하고
   $$
   \begin{aligned}
   (f + g)'(z_0) &= f'(z_0) + g'(z_0), \\
   (f - g)'(z_0) &= f'(z_0) - g'(z_0), \\
   (cf)'(z_0) &= c\, f'(z_0)
   \end{aligned}
   $$
   이다. $cf$에 대한 문장은 $f$의 미분가능만 가정한다.
2. (곱의 법칙) $f$와 $g$가 $z_0$에서 미분가능하면 $fg$는 $z_0$에서 미분가능하고 $(fg)'(z_0) = f'(z_0)\, g(z_0) + f(z_0)\, g'(z_0)$이다.
3. (역수와 몫) $g$가 $z_0$에서 미분가능하고 $g(z_0) \ne 0$이라 하자.
   - (i) 어떤 실수 $r > 0$이 있어 $B(z_0, r) \subseteq G$이고, $B(z_0, r)$의 모든 점 $z$에서 $|g(z_0)| / 2 < |g(z)|$이다. 따라서 $B(z_0, r)$ 위에서 $g$는 $0$이 아니다.
   - (ii) (i)의 $r$에 대하여 $V = B(z_0, r)$로 두면 $V$는 열린집합이고 $g|_V$의 모든 값은 $0$이 아니다. $1/(g|_V) : V \to \mathbb{C}$는 $z_0$에서 미분가능하고
     $$
     \bigl(1/(g|_V)\bigr)'(z_0) = -\frac{g'(z_0)}{g(z_0)^2}
     $$
     이다. $f$도 $z_0$에서 미분가능하면 $f|_V / g|_V : V \to \mathbb{C}$는 $z_0$에서 미분가능하고
     $$
     \begin{aligned}
     &\bigl(f|_V / g|_V\bigr)'(z_0) \\
     &\quad = \bigl(f'(z_0)\, g(z_0) \\
     &\qquad - f(z_0)\, g'(z_0)\bigr) \\
     &\qquad \cdot \bigl(g(z_0)^2\bigr)^{-1}
     \end{aligned}
     $$
     이다.
   - (iii) $G$의 모든 점에서 $g$가 $0$이 아니면 $1/g$, $f/g : G \to \mathbb{C}$에 대해 (ii)의 두 문장이 $V$를 $G$로 바꾸어 그대로 성립한다.
   - (iv) $g$가 정칙함수이면 $Z = \{z \in G : g(z) \ne 0\}$은 $(\mathbb{C}, d)$의 열린집합이고, $1/(g|_Z) : Z \to \mathbb{C}$는 정칙함수이며 $Z$의 모든 점 $z$에서 그 미분계수는 $-g'(z)/g(z)^2$이다. $f$도 정칙함수이면 $f|_Z / g|_Z$는 정칙함수이고 $Z$의 모든 점 $z$에서 그 미분계수는 $(f'(z) g(z) - f(z) g'(z))/g(z)^2$이다.
4. (거듭제곱과 다항함수)
   - (i) 자연수 $n$에 대하여 $z$에서의 값이 $z^n$인 함수 $\mathbb{C} \to \mathbb{C}$는 정함수이고 모든 $z$에서 그 미분계수는 $n z^{n-1}$이다. $z^0$의 함수는 값이 $1$인 상수함수이다.
   - (ii) 음의 정수 $n$에 대하여 $\mathbb{C} - \{0\}$은 열린집합이고, $z$에서의 값이 $z^n$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$는 정칙함수이며 모든 $z \ne 0$에서 그 미분계수는 $n z^{n-1}$이다.
   - (iii) 복소 다항함수 $p$의 표현이 $p(z) = \sum_{k=0}^{d} a_k z^k$라 하자. $p$는 정함수이다. $d = 0$이면 $p'$은 영함수이고, $d \ge 1$이면 $p'$은 계수가 $(k + 1) a_{k+1}$($0 \le k \le d - 1$)인 복소 다항함수이다. 곧 모든 복소수 $z$에서
     $$
     p'(z) = \sum_{k=0}^{d-1} (k + 1)\, a_{k+1} z^k
     $$
     이다. 여기서 $(k + 1) a_{k+1}$은 $\iota(k + 1) a_{k+1}$이다.
5. (연쇄법칙) $H$가 $(\mathbb{C}, d)$의 열린집합이고 모든 $z \in G$에서 $g(z) \in H$이며 $h : H \to \mathbb{C}$가 복소함수라 하자. $g$를 $G$에서 $H$로의 함수로 보아 합성 $h \circ g : G \to \mathbb{C}$를 정한다. $g$가 $z_0$에서 미분가능하고 $h$가 $g(z_0)$에서 미분가능하면 $h \circ g$는 $z_0$에서 미분가능하고
   $$
   (h \circ g)'(z_0) = h'(g(z_0))\, g'(z_0)
   $$
   이다. 따라서 $g$와 $h$가 정칙함수이면 $h \circ g$는 정칙함수이고 모든 $z \in G$에서 $(h \circ g)'(z) = h'(g(z))\, g'(z)$이다.
:::

:::english
Complex numbers and $\operatorname{Re}$, $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus $|z|$ and powers $z^n$ are those of the entries on the modulus and powers of a complex number. Open balls $B(a, r)$ and the metric and topology given to subsets of $\mathbb{C}$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Complex differentiability, the derivative $f'(z_0)$, difference quotients, holomorphic, holomorphic functions, derivatives, and entire functions are those of the entry on the complex derivative. The functions $f + g$, $f - g$, $cf$, $fg$, and, for $g$ with no zero value, $1/g$ and $f/g$, are those of the statement of the entry on the continuity of the complex operations, with $Z$ there taken to be the domain here. Complex polynomial functions and their representations, coefficients, and end indices are those of the entry on complex polynomial functions. Composition is that of the entry on composition of functions.

Below, $G$ is an open set of $(\mathbb{C}, d)$, $f$, $g : G \to \mathbb{C}$ are complex functions, $z_0$ is a point of $G$, and $c$ is a complex number.

1. (Sum, difference, constant multiple) If $f$ and $g$ are differentiable at $z_0$, then $f + g$, $f - g$, $cf$ are differentiable at $z_0$ and
   $$
   \begin{aligned}
   (f + g)'(z_0) &= f'(z_0) + g'(z_0), \\
   (f - g)'(z_0) &= f'(z_0) - g'(z_0), \\
   (cf)'(z_0) &= c\, f'(z_0).
   \end{aligned}
   $$
   The statement on $cf$ assumes only that $f$ is differentiable.
2. (Product rule) If $f$ and $g$ are differentiable at $z_0$, then $fg$ is differentiable at $z_0$ and $(fg)'(z_0) = f'(z_0)\, g(z_0) + f(z_0)\, g'(z_0)$.
3. (Reciprocals and quotients) Suppose $g$ is differentiable at $z_0$ and $g(z_0) \ne 0$.
   - (i) There is a real $r > 0$ with $B(z_0, r) \subseteq G$ such that $|g(z_0)| / 2 < |g(z)|$ at every point $z$ of $B(z_0, r)$. Hence $g$ is nonzero on $B(z_0, r)$.
   - (ii) For $r$ as in (i), put $V = B(z_0, r)$. Then $V$ is an open set and no value of $g|_V$ is $0$. $1/(g|_V) : V \to \mathbb{C}$ is differentiable at $z_0$ and
     $$
     \bigl(1/(g|_V)\bigr)'(z_0) = -\frac{g'(z_0)}{g(z_0)^2}.
     $$
     If $f$ is also differentiable at $z_0$, then $f|_V / g|_V : V \to \mathbb{C}$ is differentiable at $z_0$ and
     $$
     \begin{aligned}
     &\bigl(f|_V / g|_V\bigr)'(z_0) \\
     &\quad = \bigl(f'(z_0)\, g(z_0) \\
     &\qquad - f(z_0)\, g'(z_0)\bigr) \\
     &\qquad \cdot \bigl(g(z_0)^2\bigr)^{-1}.
     \end{aligned}
     $$
   - (iii) If $g$ is nonzero at every point of $G$, then the two statements of (ii) hold as they stand for $1/g$, $f/g : G \to \mathbb{C}$, with $V$ replaced by $G$.
   - (iv) If $g$ is a holomorphic function, then $Z = \{z \in G : g(z) \ne 0\}$ is an open set of $(\mathbb{C}, d)$, $1/(g|_Z) : Z \to \mathbb{C}$ is a holomorphic function, and its derivative at every point $z$ of $Z$ is $-g'(z)/g(z)^2$. If $f$ is also a holomorphic function, then $f|_Z / g|_Z$ is a holomorphic function whose derivative at every point $z$ of $Z$ is $(f'(z) g(z) - f(z) g'(z))/g(z)^2$.
4. (Powers and polynomials)
   - (i) For a natural number $n$, the function $\mathbb{C} \to \mathbb{C}$ whose value at $z$ is $z^n$ is entire, and its derivative at every $z$ is $n z^{n-1}$. The function of $z^0$ is the constant function with value $1$.
   - (ii) For a negative integer $n$, $\mathbb{C} - \{0\}$ is an open set, and the function $\mathbb{C} - \{0\} \to \mathbb{C}$ whose value at $z$ is $z^n$ is a holomorphic function whose derivative at every $z \ne 0$ is $n z^{n-1}$.
   - (iii) Let a complex polynomial function $p$ have the representation $p(z) = \sum_{k=0}^{d} a_k z^k$. Then $p$ is entire. If $d = 0$, $p'$ is the zero function; if $d \ge 1$, $p'$ is the complex polynomial function with coefficients $(k + 1) a_{k+1}$ ($0 \le k \le d - 1$). That is, for every complex number $z$,
     $$
     p'(z) = \sum_{k=0}^{d-1} (k + 1)\, a_{k+1} z^k.
     $$
     Here $(k + 1) a_{k+1}$ is $\iota(k + 1) a_{k+1}$.
5. (Chain rule) Let $H$ be an open set of $(\mathbb{C}, d)$, suppose $g(z) \in H$ for all $z \in G$, and let $h : H \to \mathbb{C}$ be a complex function. Regarding $g$ as a function from $G$ to $H$, define the composite $h \circ g : G \to \mathbb{C}$. If $g$ is differentiable at $z_0$ and $h$ is differentiable at $g(z_0)$, then $h \circ g$ is differentiable at $z_0$ and
   $$
   (h \circ g)'(z_0) = h'(g(z_0))\, g'(z_0).
   $$
   Hence if $g$ and $h$ are holomorphic functions, then $h \circ g$ is a holomorphic function and $(h \circ g)'(z) = h'(g(z))\, g'(z)$ for all $z \in G$.
:::

## 직관

공식은 실함수의 [[derivative-rules|미분법]], [[chain-rule|연쇄법칙]]과 같습니다. 복소 미분계수도 차분몫의 극한이고, 복소함수의 극한 법칙이 실함수의 것과 같은 꼴이기 때문입니다. 다른 것은 정의역입니다. 미분은 열린집합 위에서만 말하므로, 역수 $1/g$나 합성 $h \circ g$를 만들 때 새 함수의 정의역이 열린집합인지를 따로 확인해야 합니다. 역수에서는 $g(z_0) \ne 0$이면 $z_0$ 둘레에 $g$가 $0$이 아닌 열린 공이 있다는 (3)의 (i)이 그 일을 합니다. $g$가 $0$인 점이 $G$의 다른 곳에 있어도($g(z) = z - 1$, $z_0 = 0$) 그 공 위에서는 역수가 정해집니다.

곱의 법칙과 연쇄법칙은 [[complex-derivative|복소 미분]]의 카라테오도리 꼴로 증명합니다. 연쇄법칙을 차분몫으로 증명하면 $(h(g(z)) - h(g(z_0)))/(g(z) - g(z_0))$의 분모가 $0$이 되는 점을 따로 다뤄야 합니다. $g$가 상수함수이면 모든 점에서 분모가 $0$입니다. 카라테오도리 꼴은 나눗셈이 없어서 이 경우를 따로 보지 않습니다.

다항함수의 도함수 (4)의 (iii)은 계수를 한 칸씩 내리며 번호를 곱하는 규칙입니다. 증명은 복소 다항함수의 호너 꼴 $p(z) = a_0 + z\, p_1(z)$에 곱의 법칙을 쓰는 귀납법입니다. 상수함수($d = 0$)는 영함수가 도함수이고, $d = 1$이면 도함수는 상수 $a_1$입니다.

## 증명

:::idea
합과 상수배는 차분몫이 차분몫의 합과 상수배라는 것과 극한 법칙으로, 곱과 연쇄법칙은 카라테오도리 꼴 $f(z) - f(z_0) = \varphi(z)(z - z_0)$를 이어 붙여 새 배율이 $z_0$에서 연속임을 보이는 것으로 증명한다. 역수는 차분몫을 직접 계산하고, 다항함수는 호너 꼴로 끝 번호에 대한 귀납법을 쓴다.
:::

:::hint
곱의 법칙에서 $f(z) g(z) - f(z_0) g(z_0) = (f(z) - f(z_0))\, g(z) + f(z_0)\,(g(z) - g(z_0))$이므로 배율은 $\varphi(z) g(z) + f(z_0) \psi(z)$입니다. 이것이 $z_0$에서 연속이려면 $g$가 $z_0$에서 연속이어야 합니다.
:::

:::hint
연쇄법칙의 배율은 $\psi(g(z))\, \varphi(z)$입니다. $\psi \circ g$가 $z_0$에서 연속인 것은 위상수학 입문의 "한 점에서의 연속함수의 합성"입니다.
:::

:::proof
"미분 (n)"은 [[complex-derivative|복소 미분]], "극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]], "극한 법칙 (n)"은 [[limit-laws-for-complex-functions|복소함수의 극한 법칙]], "거듭제곱 (n)"은 [[power-of-a-complex-number|복소수의 거듭제곱]], "다항함수 (n)"은 [[complex-polynomial-function]], "복소수체 (n)"은 [[complex-field]]의 번호이다. $\mathbb{C}$의 부분집합에는 부분공간 거리와 그 거리위상을 준다. 먼저 다음을 본다.

- (ㄱ) $A$가 열린집합이고 $a \in A$이며 $\chi : A \to \mathbb{C}$가 복소함수라 하자. 극한 (1)의 (ii)에 의해 $a$는 $A$의 집적점이다. $\chi$가 $a$에서 연속인 것은 정확히 $\chi$가 $a$에서 $\chi(a)$로 수렴할 때이다(극한 (11)의 (i)). 따라서 $a$에서 연속인 함수들의 합, 차, 곱, 상수배는 $a$에서 연속이다(극한 법칙 (3), (4)).

**1의 증명.** $z \in G - \{z_0\}$에서 체의 계산으로
$$
\begin{aligned}
&\frac{(f + g)(z) - (f + g)(z_0)}{z - z_0} \\
&\quad = q^f_{z_0}(z) + q^g_{z_0}(z)
\end{aligned}
$$
이고, 차와 상수배도 같은 꼴로 $q^f_{z_0}(z) - q^g_{z_0}(z)$, $c\, q^f_{z_0}(z)$이다. 곧 $f + g$의 차분몫은 $q^f_{z_0} + q^g_{z_0}$이고, 극한 법칙 (3)에 의해 $f'(z_0) + g'(z_0)$으로 수렴한다. 차와 상수배도 극한 법칙 (3)으로 같다.

**2의 증명.** 미분 (2)의 (i)에 의해 $z_0$에서 연속인 $\varphi$, $\psi : G \to \mathbb{C}$가 있어 모든 $z \in G$에서 $f(z) - f(z_0) = \varphi(z)(z - z_0)$, $g(z) - g(z_0) = \psi(z)(z - z_0)$이고 $\varphi(z_0) = f'(z_0)$, $\psi(z_0) = g'(z_0)$이다. 체의 계산으로
$$
\begin{aligned}
&f(z) g(z) - f(z_0) g(z_0) \\
&\quad = (f(z) - f(z_0))\, g(z) \\
&\qquad + f(z_0)\,(g(z) - g(z_0)) \\
&\quad = \chi(z)\,(z - z_0)
\end{aligned}
$$
이다. 여기서 $\chi(z) = \varphi(z) g(z) + f(z_0) \psi(z)$이다. 미분 (3)에 의해 $g$는 $z_0$에서 연속이고, 상수함수는 연속이므로(극한 (5)와 (ㄱ)) (ㄱ)에 의해 $\chi$는 $z_0$에서 연속이다. 미분 (2)의 (i)에 의해 $fg$는 $z_0$에서 미분가능하고 $(fg)'(z_0) = \chi(z_0) = f'(z_0) g(z_0) + f(z_0) g'(z_0)$이다.

**3의 증명.** (i) $G$가 열린집합이므로 $B(z_0, \rho) \subseteq G$인 실수 $\rho > 0$이 있다. 미분 (3)에 의해 $g$는 $z_0$에서 연속이므로 극한 법칙 (9)를 $S = G$, $a = z_0$, $q = g$에 쓰면 된다.

(ii) [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $V$는 열린집합이다. (i)에 의해 $g|_V$의 모든 값은 $0$이 아니다. 미분 (4)의 (i)에 의해 $g|_V$는 $z_0$에서 미분가능하고 미분계수는 $g'(z_0)$이며, 미분 (3)에 의해 $g|_V$는 $z_0$에서 연속이다. $u = 1/(g|_V)$로 두면 $z \in V - \{z_0\}$에서
$$
\begin{aligned}
&\frac{u(z) - u(z_0)}{z - z_0} \\
&\quad = -\, q^g_{z_0}(z) \cdot \bigl(g(z)\, g(z_0)\bigr)^{-1}
\end{aligned}
$$
이다($g(z)^{-1} - g(z_0)^{-1} = (g(z_0) - g(z))\, g(z)^{-1} g(z_0)^{-1}$). $z_0$은 $V - \{z_0\}$의 집적점이다(극한 (1)의 (ii)). 극한 (7)의 (i)에 의해 $q^g_{z_0}$을 $V - \{z_0\}$로 제한한 것은 $g'(z_0)$으로 수렴하고, 미분 (3)과 극한 (7)의 (i)에 의해 $g$를 $V - \{z_0\}$로 제한한 것은 $g(z_0)$으로 수렴한다. 극한 법칙 (3)에 의해 $z$에서의 값이 $g(z) g(z_0)$인 $V - \{z_0\}$ 위의 함수는 $g(z_0)^2$으로 수렴하고, 그 값은 모두 $0$이 아니며 $g(z_0)^2 \ne 0$이므로(거듭제곱 (2)) 극한 법칙 (7)에 의해 그 역수는 $(g(z_0)^2)^{-1}$로 수렴한다. 극한 법칙 (4)와 (3)에 의해 $u$의 차분몫은 $-g'(z_0)\,(g(z_0)^2)^{-1}$로 수렴한다. 몫은 $f|_V / g|_V = (f|_V)\, u$이고, 미분 (4)의 (i)에 의해 $f|_V$는 $z_0$에서 미분가능하며 미분계수는 $f'(z_0)$이므로, (2)를 $V$ 위의 두 함수에 쓰면
$$
\begin{aligned}
&\bigl((f|_V) u\bigr)'(z_0) \\
&\quad = f'(z_0)\, g(z_0)^{-1} \\
&\qquad - f(z_0)\, g'(z_0)\,(g(z_0)^2)^{-1} \\
&\quad = \bigl(f'(z_0) g(z_0) - f(z_0) g'(z_0)\bigr) \\
&\qquad \cdot (g(z_0)^2)^{-1}
\end{aligned}
$$
이다(체의 계산과 거듭제곱 (1)의 $g(z_0)^2 = g(z_0) g(z_0)$).

(iii) $g$가 $G$에서 $0$이 아니면 $1/g$의 $V$로의 제한은 $1/(g|_V)$이고, $f/g$의 $V$로의 제한은 $f|_V / g|_V$이다. 미분 (4)의 (i)에 의해 $1/g$와 $f/g$는 $z_0$에서 미분가능하고 미분계수는 (ii)의 것과 같다.

(iv) $z_1 \in Z$이면 $g$는 $z_1$에서 미분가능하고 $g(z_1) \ne 0$이므로, (i)을 $z_1$에 쓰면 $B(z_1, r_1) \subseteq G$이고 그 위에서 $g$가 $0$이 아닌 실수 $r_1 > 0$이 있다. 곧 $B(z_1, r_1) \subseteq Z$이므로 $Z$는 열린집합이다. 미분 (4)의 (i)에 의해 $g|_Z$와 $f|_Z$는 정칙함수이고 도함수는 $g'$, $f'$의 제한이며, $g|_Z$는 $Z$에서 $0$이 아니므로 (iii)을 $Z$ 위의 두 함수와 $Z$의 각 점에 쓴다.

**4의 증명.** (i) $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 거듭제곱 (1)에 의해 $z^1 = z$이므로 미분 (5)에 의해 미분계수는 $1 = 1 \cdot z^0$이다. $n$에서 성립한다고 하자. 거듭제곱 (1)에 의해 $z^{n+1} = z^n z$이므로 $z^{n+1}$의 함수는 $z^n$의 함수와 항등함수의 곱이고, (2)에 의해
$$
\begin{aligned}
(z^{n+1})' &= n z^{n-1} \cdot z + z^n \cdot 1 \\
&= n z^n + z^n = (n + 1) z^n
\end{aligned}
$$
이다. 여기서 $n \ge 1$이므로 $n - 1 \ge 0$이고 거듭제곱 (1)에 의해 $z^{n-1} z = z^n$이며, 복소수체 (2)에 의해 $\iota(n) + 1 = \iota(n + 1)$이다. 마지막 문장은 거듭제곱의 정의의 $z^0 = 1$이다.

(ii) 한 점 집합 $\{0\}$은 닫힌집합이므로([[open-set-in-metric-space]]의 (5)) $\mathbb{C} - \{0\}$은 열린집합이다. $m = -n$은 자연수이다. $g(z) = z^m$으로 정한 $g : \mathbb{C} - \{0\} \to \mathbb{C}$는 (i)과 미분 (4)의 (i)에 의해 정칙함수이고 도함수는 $m z^{m-1}$이며, 거듭제곱 (2)에 의해 $0$이 아니다. 거듭제곱 (3)의 (ii)에 의해 $z \ne 0$이면 $z^n = z^{-m} = (z^m)^{-1}$이므로 $z^n$의 함수는 $1/g$이고, (3)의 (iii)에 의해 그 미분계수는
$$
\begin{aligned}
-\frac{m z^{m-1}}{(z^m)^2} &= -m\, z^{m-1} z^{-2m} \\
&= -m\, z^{-m-1} = n z^{n-1}
\end{aligned}
$$
이다(거듭제곱 (3)의 (ii)).

(iii) 끝 번호 $d$에 대한 수학적 귀납법으로, "끝 번호가 $d$인 표현을 갖는 모든 복소 다항함수 $p$에 대하여 진술의 결론이 성립한다"를 보인다. $d = 0$이면 다항함수 (1)의 (i)에 의해 $p$는 상수함수이고, 미분 (5)에 의해 정함수이며 $p'$은 영함수이다.

$d \ge 1$이고 끝 번호가 $d - 1$인 표현을 갖는 복소 다항함수에서 결론이 성립한다고 하자. 다항함수 (2)에 의해 $p_1$을 계수가 $a_1, \dots, a_d$인(끝 번호 $d - 1$, $k$번째 계수 $a_{k+1}$) 복소 다항함수라 하면 모든 $z$에서 $p(z) = a_0 + z\, p_1(z)$이다. 귀납 가정에 의해 $p_1$은 정함수이다. 미분 (5)와 (1), (2)에 의해 $p$는 정함수이고 모든 $z$에서
$$
\begin{aligned}
p'(z) &= 0 + 1 \cdot p_1(z) + z\, p_1'(z) \\
&= p_1(z) + z\, p_1'(z)
\end{aligned}
$$
이다.

- $d = 1$이면 $p_1$은 값이 $a_1$인 상수함수이고 $p_1' = 0$이므로 $p'(z) = a_1 = (0 + 1) a_{0+1}$이다. 이것은 계수가 $a_1$ 하나인 복소 다항함수이다.
- $d \ge 2$이면 귀납 가정에 의해 $p_1'$은 계수가 $e_j = (j + 1) a_{j+2}$($0 \le j \le d - 2$)인 복소 다항함수이다. 다항함수 (3)의 (i)에 의해 $z\, p_1'(z)$의 함수는 끝 번호가 $d - 1$이고 $0$번째 계수가 $0$, $1 \le k \le d - 1$에서 $k$번째 계수가 $e_{k-1} = k\, a_{k+1}$인 복소 다항함수이다. $p_1$도 끝 번호가 $d - 1$이므로 다항함수 (1)의 (iii)에 의해 $p'$은 계수가 $b_0 = a_1 + 0 = a_1$, $b_k = a_{k+1} + k\, a_{k+1} = (k + 1) a_{k+1}$($1 \le k \le d - 1$)인 복소 다항함수이다. $b_0 = (0 + 1) a_{0+1}$이므로 모든 $0 \le k \le d - 1$에서 $b_k = (k + 1) a_{k+1}$이다. 여기서 $a_{k+1} + k\, a_{k+1} = (1 + \iota(k)) a_{k+1} = \iota(k + 1) a_{k+1}$이다(복소수체 (2)).

$p$의 표현이 여럿이어도 각 표현에 이 결론을 쓸 수 있다.

**5의 증명.** $w_0 = g(z_0)$으로 둔다. 미분 (2)의 (i)에 의해 $z_0$에서 연속인 $\varphi : G \to \mathbb{C}$와 $w_0$에서 연속인 $\psi : H \to \mathbb{C}$가 있어, 모든 $z \in G$에서 $g(z) - g(z_0) = \varphi(z)(z - z_0)$이고 모든 $w \in H$에서 $h(w) - h(w_0) = \psi(w)(w - w_0)$이며, $\varphi(z_0) = g'(z_0)$, $\psi(w_0) = h'(w_0)$이다. $z \in G$이면 $g(z) \in H$이므로
$$
\begin{aligned}
&h(g(z)) - h(g(z_0)) \\
&\quad = \psi(g(z))\,(g(z) - g(z_0)) \\
&\quad = \psi(g(z))\, \varphi(z)\,(z - z_0)
\end{aligned}
$$
이다. 미분 (3)에 의해 $g$는 $z_0$에서 연속이고, [[subspace-and-continuity|부분공간과 연속]]의 (3)의 (ii)에 의해 $G$에서 $H$로의 함수로 본 $g$도 $z_0$에서 연속이다. [[composition-of-continuous-maps|연속함수의 합성]]의 (2)에 의해 $\psi \circ g : G \to \mathbb{C}$는 $z_0$에서 연속이고, (ㄱ)에 의해 $z$에서의 값이 $\psi(g(z)) \varphi(z)$인 함수 $\chi$는 $z_0$에서 연속이다. 미분 (2)의 (i)에 의해 $h \circ g$는 $z_0$에서 미분가능하고 $(h \circ g)'(z_0) = \chi(z_0) = h'(g(z_0))\, g'(z_0)$이다. 마지막 문장은 $G$의 각 점에 앞 문장을 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[다항함수 $2z^3 - iz + 5$ 의 도함수]
$p(z) = 5 + (-i) z + 0 z^2 + 2 z^3$은 끝 번호가 $3$이고 계수가 $a_0 = 5$, $a_1 = -i$, $a_2 = 0$, $a_3 = 2$인 복소 다항함수입니다. (4)의 (iii)에 의해 $p$는 정함수이고 $p'$의 계수는 $1 \cdot a_1 = -i$, $2 \cdot a_2 = 0$, $3 \cdot a_3 = 6$이므로, 모든 $z$에서 $p'(z) = -i + 6 z^2$입니다. 예컨대 $p'(i) = -i + 6 i^2 = -6 - i$입니다.
:::

:::example[$1/(z^2 + 1)$ 의 도함수]
$g(z) = z^2 + 1$로 정한 $g : \mathbb{C} \to \mathbb{C}$는 계수가 $1$, $0$, $1$인 복소 다항함수이므로 (4)의 (iii)에 의해 정함수이고 $g'(z) = 0 + 2z = 2z$입니다. $g(z) = 0$인 것은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)의 $z^2 = zz$와 [[complex-field|복소수체]]의 (5)에 의해 정확히 $z = i$이거나 $z = -i$일 때이므로, (3)의 (iv)의 $Z$는 $\mathbb{C} - \{i, -i\}$입니다. (3)의 (iv)에 의해 $Z$ 위의 $1/(g|_Z)$는 정칙함수이고, $Z$의 점 $z$에서 미분계수는 $-2z/(z^2 + 1)^2$입니다. 예컨대 $z = 1$에서는 $-2/2^2 = -1/2$입니다.
:::

:::counterexample[곱의 도함수가 도함수의 곱과 다른 예]
$f(z) = z$, $g(z) = z$로 정한 두 정함수를 생각합니다. (2)에 의해 $(fg)'(z) = 1 \cdot z + z \cdot 1 = 2z$이고, $f'(z) g'(z) = 1 \cdot 1 = 1$입니다. $z = 0$에서 $(fg)'(0) = 0$이지만 $f'(0) g'(0) = 1$이므로 곱의 도함수는 도함수의 곱과 다를 수 있습니다. (4)의 (i)의 $(z^2)' = 2z$와도 맞습니다.
:::

## 확인 질문

:::check[$z^{-2}$의 $i$에서의 미분계수는 무엇인가?]
$-2i$입니다. (4)의 (ii)에 의해 $\mathbb{C} - \{0\}$ 위의 $z^{-2}$의 미분계수는 $-2 z^{-3}$입니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 $i^3 = -i$이고, 그 (3)의 (ii)에 의해 $i^{-3} = (i^3)^{-1} = (-i)^{-1} = i$입니다($(-i) i = -i^2 = 1$). 따라서 미분계수는 $-2 i$입니다.
:::

:::check[$z$에서의 값이 $(iz + 2)^3$인 함수의 $0$에서의 미분계수는 무엇인가?]
$12i$입니다. $g(z) = iz + 2$는 [[complex-derivative|복소 미분]]의 (5)에 의해 정함수이고 $g' = i$이며, $h(w) = w^3$은 (4)의 (i)에 의해 정함수이고 $h'(w) = 3w^2$입니다. (5)에 의해 $(h \circ g)'(0) = 3 g(0)^2 \cdot i = 3 \cdot 4 \cdot i = 12i$입니다.
:::
