---
title: 복소 지수함수의 도함수
title_en: Derivative of the Complex Exponential Function
aliases: [exp 의 도함수, 지수함수는 정함수이다, 복소 지수함수의 미분, exp′ = exp, derivative of exp, exp is entire]
kind: theorem
field: complex-analysis
msc: ["30D20"]
level: undergrad
summary: 복소 지수함수는 정함수이고 도함수가 자기 자신이므로 무한 번 미분가능하고 모든 계의 도함수가 자기 자신이다. 일차식과의 합성 exp(cz + b) 의 n계 도함수는 cⁿ exp(cz + b) 이고, 영역에서 f′ = cf 인 정칙함수는 f(a) exp(c(z − a)) 꼴뿐이다. 실수에서는 실수의 지수함수의 도함수와 맞는다.
requires: [function, mathematical-induction, prime-number, well-ordering-principle, real-number-arithmetic, factorial-from-zero, exponential-function, complex-number, complex-field, complex-conjugate, power-of-a-complex-number, complex-power-series, radius-of-convergence-of-complex-power-series, complex-exponential-function, addition-law-of-complex-exponential, periodicity-of-trigonometric-functions, complex-derivative, complex-derivative-rules, complex-differentiability-examples, zero-derivative-on-a-region, complex-power-series-is-holomorphic, higher-complex-derivatives]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Exponential and Trigonometric Functions 절의 정의와 Proposition expproperties, 그 뒤 문단과 증명, source/sec_exptrigfcts.ptx:29–41, 50–93, 100–138; Power Series and Holomorphic Functions 절의 Example ex_exptaylor, source/sec_powerseriesholom.ptx:93–127; 2장 연습문제 ex_2_2, source/exercises-chap2.ptx:221–381; 3장 연습문제 ex_3_1, source/exercises-chap3.ptx:801–885"
    checked: original
    note: "출처는 복소 지수함수를 exp(x + iy) = eˣ(cos y + i sin y) 로 정의하고(sec_exptrigfcts.ptx:29–41), Proposition expproperties(50–93)의 한 항목으로 exp 의 도함수가 exp 라고 진술하며, 그 증명(118–138줄)은 편도함수를 계산해 코시–리만 방정식과 그 역의 정리로 얻는다. 그 앞 문단(108–111줄)은 이것이 exp 가 정함수라는 뜻이라고 적는다. 이 사이트의 exp 는 복소수 강의에서 멱급수 Σ zⁿ/n! 로 정의했으므로, 이 항목의 (1)은 복소 멱급수의 항별 미분으로 증명한다. 출처 Example ex_exptaylor(sec_powerseriesholom.ptx:93–127)는 거꾸로 멱급수 f(z) = Σ zᵏ/k! 를 항별 미분해 f′ = f 를 얻고, (f(z)exp(−z))′ = 0 과 도함수가 0 인 함수의 정리로 f = exp 를 보인다. 이 항목 (4)의 증명(f·exp(−c(z − a)) 의 도함수가 0)은 그것과 같은 발상이다. (2)의 고계 도함수와 (3)의 일차식과의 합성은 이 항목이 진술에 올린 것이다. 반례 'exp(z̄) 는 어디서도 미분가능하지 않다'의 함수는 출처 2장 연습문제 ex_2_2 의 f(z) = eˣe^{−iy}(exercises-chap2.ptx:221–381)와 같은 함수이고, 3장 연습문제 ex_3_1(exercises-chap3.ptx:801–885)은 exp(z̄) 가 어디서도 미분가능하지 않다는 것을 답으로 적는다. 확인 질문 '영역 $G$가 $0$을 원소로 갖고 $f : G \\to \\mathbb{C}$가 정칙함수이며 모든 $z$에서 $f'(z) = f(z)$, $f(0) = 2$이면 $f$는 어떤 함수인가?'는 출처 Example ex_exptaylor 의 논법(도함수가 자기 자신이고 0 에서의 값이 정해진 함수)과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(등비급수의 고계 도함수 합, exp 의 항별 미분). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 [[complex-exponential-function]]의 것이고, 실수의 지수함수는 [[exponential-function]]의 것이다. 복소 미분가능, 미분계수, 정칙함수, 도함수, 정함수는 [[complex-derivative|복소 미분]]의 것이고, 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 것이며, $n$번 미분가능, 무한 번 미분가능, $k$계 도함수 $f^{(k)}$는 [[higher-complex-derivatives|고계 복소 도함수]]의 것이다.

다음이 성립한다. 아래에서 $c$, $b$, $a$는 복소수이고 $n$은 $0$ 이상인 정수이다.

1. (도함수) $\exp$는 정함수이고 모든 복소수 $z$에서 $\exp'(z) = \exp(z)$이다. 곧 $\exp' = \exp$이다. 특히 $\exp'(0) = 1$이다.
2. (고계 도함수) $\exp$는 무한 번 미분가능하고 모든 $n$에서 $\exp^{(n)} = \exp$이다. 특히 $\exp^{(n)}(0) = 1$이다.
3. (일차식과의 합성) $z$에서의 값이 $\exp(cz + b)$인 함수 $E : \mathbb{C} \to \mathbb{C}$는 정함수이고 모든 $z$에서 $E'(z) = c\exp(cz + b)$이다. $E$는 무한 번 미분가능하고 모든 $n$과 $z$에서 $E^{(n)}(z) = c^n \exp(cz + b)$이다.
4. (도함수가 자기의 상수배인 정칙함수) $G$가 영역이고 $a \in G$이며 $f : G \to \mathbb{C}$가 정칙함수이고 모든 $z \in G$에서 $f'(z) = c f(z)$이면, 모든 $z \in G$에서
   $$
   f(z) = f(a) \exp\bigl(c(z - a)\bigr)
   $$
   이다.
5. (실수의 지수함수와의 일치) 모든 실수 $x$에서 $\exp'(\iota(x)) = \iota(\exp(x))$이다. 오른쪽의 $\exp$는 실수의 지수함수이다. 이것에 [[complex-derivative|복소 미분]]의 (6)을 쓰면 실수의 지수함수는 미분가능하고 모든 실수 $x$에서 그 미분계수가 $\exp(x)$라는 것이 다시 나온다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; powers are those of the entry on powers of a complex number. The complex exponential function $\exp : \mathbb{C} \to \mathbb{C}$ is that of the entry on the complex exponential function, and the real exponential function is that of the entry on the exponential function. Complex differentiability, derivatives at a point, holomorphic functions, derivatives, and entire functions are those of the entry on the complex derivative; regions are those of the entry on regions and functions with zero derivative; $n$ times differentiable, infinitely differentiable, and the $k$th derivative $f^{(k)}$ are those of the entry on higher complex derivatives.

The following hold. Below, $c$, $b$, $a$ are complex numbers and $n$ is an integer at least $0$.

1. (The derivative) $\exp$ is an entire function and $\exp'(z) = \exp(z)$ for every complex number $z$; that is, $\exp' = \exp$. In particular $\exp'(0) = 1$.
2. (Higher derivatives) $\exp$ is infinitely differentiable and $\exp^{(n)} = \exp$ for every $n$. In particular $\exp^{(n)}(0) = 1$.
3. (Composition with an affine function) The function $E : \mathbb{C} \to \mathbb{C}$ whose value at $z$ is $\exp(cz + b)$ is an entire function and $E'(z) = c\exp(cz + b)$ for every $z$. $E$ is infinitely differentiable and $E^{(n)}(z) = c^n \exp(cz + b)$ for every $n$ and $z$.
4. (Holomorphic functions whose derivative is a constant multiple of themselves) If $G$ is a region, $a \in G$, $f : G \to \mathbb{C}$ is a holomorphic function, and $f'(z) = c f(z)$ for every $z \in G$, then for every $z \in G$
   $$
   f(z) = f(a) \exp\bigl(c(z - a)\bigr).
   $$
5. (Agreement with the real exponential function) For every real number $x$, $\exp'(\iota(x)) = \iota(\exp(x))$, where $\exp$ on the right is the real exponential function. Applying (6) of the entry on the complex derivative to this recovers that the real exponential function is differentiable with derivative $\exp(x)$ at every real number $x$.
:::

## 직관

복소수 강의는 지수함수를 멱급수 $\sum z^n/n!$로 정의했습니다. 이 멱급수를 항마다 미분하면 $n$번째 항 $z^n/n!$이 $n z^{n-1}/n! = z^{n-1}/(n-1)!$, 곧 바로 앞의 항이 됩니다. 그래서 항별 미분한 급수가 원래 급수와 같고, [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]에 의해 $\exp' = \exp$입니다. 한 번 미분해 자기 자신으로 돌아오므로 몇 번 미분해도 자기 자신입니다.

(4)는 거꾸로, 도함수가 자기 자신의 상수배인 정칙함수는 지수함수의 꼴밖에 없다는 것입니다. $f$를 $\exp(c(z - a))$로 나눈 몫의 도함수가 $0$이 되므로 영역에서 상수입니다. 영역이라는 가정은 이 "도함수가 $0$이면 상수"에서 쓰입니다. 정의역이 연결되어 있지 않으면 조각마다 다른 상수가 붙을 수 있습니다.

비유하면 $\exp$는 "지금의 크기에 비례해 자라는 양"이고, (4)는 처음 양 $f(a)$와 비율 $c$가 정해지면 그 양이 하나로 정해진다는 것입니다. 비유가 맞지 않는 곳은, 복소수의 곱이 크기만이 아니라 방향도 바꾼다는 점입니다. 예컨대 $c = i$이면 $|\exp(i(z - a))|$는 $z - a$가 실수인 동안 $1$로 그대로이고 값은 원을 따라 돕니다.

## 증명

:::idea
$\exp$를 나타내는 복소 멱급수를 항별 미분하면 같은 계수가 나온다. 나머지는 연쇄법칙, 고계 도함수의 성질, 영역에서 도함수가 $0$인 함수가 상수라는 것으로 얻는다.
:::

:::hint
항별 미분한 계수 $(n + 1)\bigl((n + 1)!\bigr)^{-1}$을 [[factorial-from-zero]]의 (4)로 계산합니다.
:::

:::hint
(4)는 $h(z) = f(z)\exp\bigl(-c(z - a)\bigr)$의 도함수를 곱의 법칙과 (3)으로 계산합니다.
:::

:::proof
"복소 미분 (n)"은 [[complex-derivative|복소 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "덧셈 법칙 (n)"은 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 번호이다. 체 $\mathbb{C}$의 계산은 [[complex-field]]의 (1)의 체의 법칙이다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다. 두 함수가 같은 것은 정확히 모든 점에서 값이 같을 때이다([[function]]의 같음).

**1의 증명.** [[complex-exponential-function|복소 지수함수]]의 정의에 의해 $\exp$는 중심이 $0$이고 계수가 $c_n = (n!)^{-1}$인 모든 복소수에서 수렴하는 복소 멱급수가 $\mathbb{C}$ 위에 나타내는 함수이다. [[complex-power-series-is-holomorphic|복소 멱급수의 항별 미분]]의 (4)와 (2)에 의해 $\exp$는 정함수이고, $\exp'$은 계수가 $(n + 1)\,c_{n+1}$인 복소 멱급수가 $\mathbb{C}$ 위에 나타내는 함수이다. [[factorial-from-zero]]의 (4)의 셋째 식에 의해 $(n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}$이므로([[complex-field]]의 (2)로 $\iota$로 옮긴다) $(n + 1)\,c_{n+1} = c_n$이다. 계수가 모두 같으므로 두 복소 멱급수는 같고, 모든 $z$에서 $\exp'(z) = \sum_{n=0}^{\infty} c_n z^n = \exp(z)$이다. [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\exp'(0) = \exp(0) = 1$이다.

**2의 증명.** (1)에 의해 $\exp$는 정칙함수이고 $\exp' = \exp$이므로 고계 (9)에 의해 무한 번 미분가능하고 모든 $n$에서 $\exp^{(n)} = \exp$이다. 값은 [[complex-exponential-function|복소 지수함수]]의 (3)이다.

**3의 증명.** $g(z) = cz + b$로 정한 $g : \mathbb{C} \to \mathbb{C}$는 복소 미분 (5)에 의해 정칙함수이고 모든 점에서 $g'(z) = c$이다. $E = \exp \circ g$이고 (1)에 의해 $\exp$는 정칙함수이므로, 법칙 (5)에 의해 $E$는 정칙함수이고 $E'(z) = \exp'(g(z))\,g'(z) = c\exp(cz + b)$이다. 곧 $E' = cE$이다.

$n$에 대한 명제 "$E$는 $n$번 미분가능하고 $E^{(n)} = c^n E$"를 귀납으로 보인다. $n = 0$이면 고계 (1)에 의해 $E^{(0)} = E = c^0 E$이다. $n$에서 참이라 하자. $E$가 정칙함수이므로 법칙 (1)에 의해 $c^n E$는 정칙함수이고 $(c^n E)' = c^n E' = c^n c E = c^{n+1} E$이다([[power-of-a-complex-number]]의 (1)). 귀납 가정에 의해 $E^{(n)} = c^n E$가 정칙함수이므로 고계 (2)에 의해 $E$는 $n + 1$번 미분가능하고, 고계 (1)에 의해 $E^{(n+1)} = (E^{(n)})' = c^{n+1} E$이다. 모든 $n$에서 $n$번 미분가능하므로 $E$는 무한 번 미분가능하다.

**4의 증명.** (3)을 $-c$와 $ca$에 쓰면, $z$에서의 값이 $\exp(-cz + ca) = \exp\bigl(-c(z - a)\bigr)$인 함수 $\mathbb{C} \to \mathbb{C}$는 정함수이고 그 도함수의 값은 $-c\exp\bigl(-c(z - a)\bigr)$이다. 이 함수를 $G$로 제한한 것을 $u$라 하면, $G$는 열린집합이므로 복소 미분 (4)의 (i)에 의해 $u$는 정칙함수이고 $u' = -cu$이다. $h = fu : G \to \mathbb{C}$로 두면 법칙 (2)에 의해 $h$는 정칙함수이고, 모든 $z \in G$에서
$$
\begin{aligned}
h'(z) &= f'(z)\,u(z) + f(z)\,u'(z) \\
&= c f(z) u(z) - c f(z) u(z) = 0
\end{aligned}
$$
이다. $G$가 영역이므로 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (3)에 의해 $h$는 상수이고, $a \in G$이므로 모든 $z \in G$에서 $h(z) = h(a) = f(a)\exp(0) = f(a)$이다([[complex-exponential-function|복소 지수함수]]의 (3)). 덧셈 법칙 (2)에 의해 $\exp\bigl(-c(z - a)\bigr)^{-1} = \exp\bigl(c(z - a)\bigr)$이므로, $f(z)\exp\bigl(-c(z - a)\bigr) = f(a)$의 양변에 $\exp\bigl(c(z - a)\bigr)$를 곱하면 $f(z) = f(a)\exp\bigl(c(z - a)\bigr)$이다.

**5의 증명.** (1)과 [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $\exp'(\iota(x)) = \exp(\iota(x)) = \iota(\exp(x))$이다. 실함수 $\exp : \mathbb{R} \to \mathbb{R}$와 $I = \mathbb{R}$(구간), $G = \mathbb{C}$에 대하여 같은 (2)에 의해 모든 실수 $x$에서 $\exp(\iota(x)) = \iota(\exp(x))$이므로, 복소 미분 (6)에 의해 실수의 지수함수는 모든 실수 $x$에서 미분가능하고 $\iota(\exp'(x)) = \exp'(\iota(x)) = \iota(\exp(x))$이다. $\iota$는 단사이므로([[complex-field]]의 (2)) 실수의 지수함수의 미분계수는 $\exp(x)$이다. 이것은 [[exponential-function]]의 (3)과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[$\exp(2iz - 1)$의 고계 도함수]
$E(z) = \exp(2iz - 1)$은 (3)의 $c = 2i$, $b = -1$인 경우입니다. 따라서 $E$는 정함수이고 $E'(z) = 2i\exp(2iz - 1)$, $E''(z) = (2i)^2\exp(2iz - 1) = -4\exp(2iz - 1)$, $E^{(3)}(z) = (2i)^3 \exp(2iz - 1) = -8i\exp(2iz - 1)$, $E^{(4)}(z) = 16\exp(2iz - 1)$입니다. 예컨대 $z = \pi/2$에서 $2iz - 1 = -1 + \pi i$이고, [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1)과 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (1)에 의해 $\exp(-1 + \pi i) = \exp(-1)\exp(\pi i) = -\exp(-1)$이므로 $E'(\pi/2) = -2i\exp(-1)$입니다. 여기서 $\exp(-1)$은 실수의 지수함수의 값을 옮긴 것입니다([[complex-exponential-function|복소 지수함수]]의 (2)).
:::

:::counterexample[$\exp(\overline{z})$는 어디서도 미분가능하지 않다]
$f(z) = \exp(\overline{z})$로 정한 $f : \mathbb{C} \to \mathbb{C}$를 봅시다. [[complex-exponential-function|복소 지수함수]]의 (4)와 [[complex-conjugate|켤레복소수]]의 (1)($\overline{\overline{z}} = z$)에 의해 $\overline{f(z)} = \exp(\overline{\overline{z}}) = \exp(z)$이므로, 함수 $\overline{f}$는 $\exp$입니다.

$f$가 어떤 점 $z_0$에서 미분가능하다고 해 봅시다. $\exp$도 $z_0$에서 미분가능하므로, [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (2)를 함수 $\exp$에 쓰면($\exp$와 $\overline{\exp} = f$가 둘 다 $z_0$에서 미분가능) $\exp'(z_0) = 0$입니다. 그런데 (1)에 의해 $\exp'(z_0) = \exp(z_0)$이고 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp(z_0) \ne 0$이므로 모순입니다. 따라서 $f$는 어느 점에서도 미분가능하지 않습니다. 실수축 위에서는 $f(\iota(x)) = \exp(\iota(x))$로 $\exp$와 값이 같지만, 미분가능성은 원판의 모든 방향에서의 차분몫으로 정해지므로 실수축 위의 값만으로는 정해지지 않습니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $\exp(iz)$인 함수의 $4$계 도함수는 무엇인가?]
자기 자신입니다. (3)을 $c = i$, $b = 0$에 쓰면 $4$계 도함수의 값은 $i^4 \exp(iz)$이고, [[power-of-a-complex-number]]의 (6)에 의해 $i^4 = 1$이므로 $\exp(iz)$입니다.
:::

:::check[영역 $G$가 $0$을 원소로 갖고 $f : G \to \mathbb{C}$가 정칙함수이며 모든 $z$에서 $f'(z) = f(z)$, $f(0) = 2$이면 $f$는 어떤 함수인가?]
모든 $z \in G$에서 $f(z) = 2\exp(z)$인 함수입니다. (4)를 $c = 1$, $a = 0$에 쓰면 $f(z) = f(0)\exp(1 \cdot (z - 0)) = 2\exp(z)$입니다. 거꾸로 이 함수는 (1)과 [[complex-derivative-rules|복소 미분의 법칙]]의 (1), [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 $G$에서 정칙이고 도함수가 자기 자신이며 $0$에서 $2$입니다.
:::
