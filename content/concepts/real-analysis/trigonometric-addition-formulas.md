---
title: 삼각함수의 덧셈정리
title_en: Trigonometric Addition Formulas
aliases: [덧셈정리, 배각 공식, 3배각 공식, 삼배각 공식, angle addition formulas, double-angle formulas, triple-angle formula]
kind: theorem
field: real-analysis
msc: ["26A09", "33B10"]
level: undergrad
summary: 모든 실수 x, y 에서 cos(x + y) = cos x cos y − sin x sin y, sin(x + y) = sin x cos y + cos x sin y 이고, 빼기의 꼴과 배각 공식, 3배각 공식 cos(3x) = 4(cos x)³ − 3 cos x, sin(3x) = 3 sin x − 4(sin x)³ 이 따른다.
requires: [real-number-arithmetic, power-of-a-real-number, complex-number, complex-field, complex-exponential-function, addition-law-of-complex-exponential, cosine-and-sine]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.4절 Exercises, Exercise 11.4.7 (p.168); 11.8.5절 Localization, Theorem 11.8.10 의 증명 (p.202–203)
    checked: original
    note: "출처는 덧셈정리 sin(z + w) = sin(z)cos(w) + cos(z)sin(w), cos(z + w) = cos(z)cos(w) − sin(z)sin(w) 를 모든 복소수 z, w 에 대한 연습문제(Exercise 11.4.7, p.168)로 둔다. 이 항목은 실수 x, y 에서만 진술하고, 지수함수의 덧셈 법칙 exp(i(x + y)) = exp(ix)exp(iy) 의 양쪽의 실수부와 허수부를 비교해 증명한다. 출처는 Theorem 11.8.10 의 증명(p.203)에서 sin((N + 1/2)t) = cos(t/2)sin(Nt) + sin(t/2)cos(Nt) 로 덧셈정리를 쓴다. 예시 'y = −x 를 넣은 확인'이 얻는 제곱의 합 1 은 출처 Proposition 11.4.2 (vi)(p.165)의 실수판이고, 복소수에서의 (vi)는 Exercise 11.4.6(p.168)이다. Lebl I 의 Example 3.2.6(p.124)은 합을 곱으로 바꾸는 삼각 항등식('sum-to-product trigonometric identities')으로 sin(x) − sin(c) = 2 sin((x − c)/2) cos((x + c)/2) 를 쓰고 Exercise 4.1.7(p.160)도 그 항등식을 힌트로 주는데, 그 항등식은 (1)과 (2)를 더하고 빼서 얻는 것이다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, Proposition 4.20 (p.51), Theorem 4.22 의 증명 (p.51–52); 4.5절 Exercises, 연습문제 41 (p.58); 11.1절 Group Homomorphisms, Example 11.3 (p.134); 21.3절 Geometric Constructions, Trisecting an Angle (p.274)
    checked: original
    note: "Judson 의 Example 11.3(p.134)은 덧셈정리로 (cos α + i sin α)(cos β + i sin β) = cos(α + β) + i sin(α + β) 를 계산해 θ 를 cos θ + i sin θ 로 보내는 함수가 준동형임을 보이고, Theorem 4.22(드무아브르)의 증명(p.51–52)도 같은 계산을 한다. Proposition 4.20(p.51)의 zw = rs cis(θ + ϕ) 는 증명을 연습문제로 남기고, 연습문제 41(p.58)이 같은 것을 보이라고 한다. 이 항목의 증명은 같은 계산을 반대 방향으로 읽은 것이다(곱의 법칙에서 덧셈정리를 얻는다). (4)의 cos 3θ = 4cos³θ − 3cos θ 는 Judson 21.3절 'Trisecting an Angle'(p.274)이 cos(2θ + θ) 에 덧셈정리와 배각 공식, cos² + sin² = 1 을 써서 얻는 것과 같은 계산이다. 확인 질문 '$\\cos x = 1/3$이면 $\\cos(3x)$는 무엇인가?'는 같은 공식을 쓰는 것이고, Judson 은 반대로 cos 3θ = 1/2 에서 α = cos θ 가 4α³ − 3α = 1/2 를 만족한다는 것을 얻는다(p.274). 3.5절 연습문제 40(p.42)은 (cos θ, −sin θ; sin θ, cos θ) 꼴의 행렬 전체가 SL₂(ℝ) 의 부분군임을 보이게 하는데, 두 그런 행렬의 곱이 같은 꼴이라는 것이 (1)의 덧셈정리이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 어림 (4)의 증명 통독, cos 1·cos 2·x/3 ≤ sin x 와 cos(1/2) 예의 값 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
코사인 $\cos$와 사인 $\sin$, 값의 거듭제곱을 괄호를 쳐서 쓰는 약속은 [[cosine-and-sine|코사인과 사인]]의 것이고, 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 $x$, $y$는 실수이다.

1. (덧셈정리)
   $$
   \begin{aligned}
   \cos(x + y) &= \cos x \cos y \\
   &\qquad - \sin x \sin y, \\
   \sin(x + y) &= \sin x \cos y \\
   &\qquad + \cos x \sin y
   \end{aligned}
   $$
   이다.
2. (빼기의 꼴)
   $$
   \begin{aligned}
   \cos(x - y) &= \cos x \cos y \\
   &\qquad + \sin x \sin y, \\
   \sin(x - y) &= \sin x \cos y \\
   &\qquad - \cos x \sin y
   \end{aligned}
   $$
   이다.
3. (배각 공식)
   $$
   \begin{aligned}
   \cos(2x) &= (\cos x)^2 - (\sin x)^2 \\
   &= 2(\cos x)^2 - 1 \\
   &= 1 - 2(\sin x)^2, \\
   \sin(2x) &= 2 \sin x \cos x
   \end{aligned}
   $$
   이다.
4. (3배각 공식)
   $$
   \begin{aligned}
   \cos(3x) &= 4(\cos x)^3 - 3 \cos x, \\
   \sin(3x) &= 3 \sin x - 4(\sin x)^3
   \end{aligned}
   $$
   이다.
:::

:::english
The cosine $\cos$, the sine $\sin$, and the convention of writing powers of values with parentheses are those of the entry on cosine and sine; powers of real numbers are those of their entry. Below, $x$ and $y$ are real numbers.

1. (Addition formulas)
   $$
   \begin{aligned}
   \cos(x + y) &= \cos x \cos y \\
   &\qquad - \sin x \sin y, \\
   \sin(x + y) &= \sin x \cos y \\
   &\qquad + \cos x \sin y.
   \end{aligned}
   $$
2. (Subtraction formulas)
   $$
   \begin{aligned}
   \cos(x - y) &= \cos x \cos y \\
   &\qquad + \sin x \sin y, \\
   \sin(x - y) &= \sin x \cos y \\
   &\qquad - \cos x \sin y.
   \end{aligned}
   $$
3. (Double-angle formulas)
   $$
   \begin{aligned}
   \cos(2x) &= (\cos x)^2 - (\sin x)^2 \\
   &= 2(\cos x)^2 - 1 \\
   &= 1 - 2(\sin x)^2, \\
   \sin(2x) &= 2 \sin x \cos x.
   \end{aligned}
   $$
4. (Triple-angle formulas)
   $$
   \begin{aligned}
   \cos(3x) &= 4(\cos x)^3 - 3 \cos x, \\
   \sin(3x) &= 3 \sin x - 4(\sin x)^3.
   \end{aligned}
   $$
:::

## 직관

코사인과 사인은 $\exp(iy)$의 실수부와 허수부였습니다. 그런데 지수함수는 합을 곱으로 바꿉니다: $\exp(i(x + y)) = \exp(ix)\exp(iy)$. 오른쪽은 두 복소수 $\cos x + i \sin x$와 $\cos y + i \sin y$의 곱이고, 복소수의 곱의 실수부와 허수부는 정의에 적힌 식 $(ac - bd,\ ad + bc)$로 계산됩니다. 그 식을 그대로 읽은 것이 (1)입니다. 외울 것은 복소수의 곱셈 규칙 하나이고, 덧셈정리는 그 규칙을 $\exp(ix)$와 $\exp(iy)$에 쓴 결과입니다.

비유하자면 두 번 연달아 하는 일을 한 번에 하는 것과 같습니다. $\exp(ix)$를 곱하는 일을 하고 이어서 $\exp(iy)$를 곱하는 일을 하면, 결과는 $\exp(i(x + y))$를 한 번 곱한 것과 같습니다. 덧셈정리는 그 한 번의 결과의 좌표를 두 번의 좌표로 적은 것입니다. 이 비유는 곱셈의 결합법칙과 덧셈 법칙에 해당하고, 좌표의 식이 왜 그런 꼴인지는 복소수의 곱셈의 정의가 말합니다.

(2)–(4)는 (1)에 특별한 값을 넣은 것입니다. $y$를 $-y$로 바꾸고 짝과 홀을 쓰면 (2), $y = x$로 두면 (3), $3x = 2x + x$에 (1)과 (3)을 쓰면 (4)입니다. $x = 0$이면 (3)의 식들은 모두 $\cos 0 = 1$, $\sin 0 = 0$과 맞습니다.

## 증명

:::idea
$\exp(i(x + y)) = \exp(ix)\exp(iy)$의 양쪽의 실수부와 허수부를 비교한다. 왼쪽은 정의에 의해 $\cos(x + y)$와 $\sin(x + y)$이고, 오른쪽은 복소수의 곱셈의 정의로 계산한다.
:::

:::hint
$u = \exp(ix)$, $v = \exp(iy)$로 두면 $\operatorname{Re}(uv) = (\operatorname{Re} u)(\operatorname{Re} v) - (\operatorname{Im} u)(\operatorname{Im} v)$입니다. [[complex-number]]의 (2)를 보세요.
:::

:::hint
(3)의 둘째, 셋째 꼴과 (4)는 $(\cos x)^2 + (\sin x)^2 = 1$([[cosine-and-sine|코사인과 사인]]의 (4))로 한쪽을 없앤 것입니다.
:::

:::proof
"코사인과 사인의 (4)"처럼 쓴 것은 [[cosine-and-sine]], "복소수체의 (2)"는 [[complex-field]], "복소수의 (2)"는 [[complex-number]], "거듭제곱의 (1)"은 [[power-of-a-real-number]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 실수의 계산에서 항의 순서를 바꾸거나 괄호를 옮기는 곳은 (K1)–(K3)과 (K12)에 의한다. 아래에서 $c = \cos x$, $s = \sin x$로 두기도 한다.

**1의 증명.** 복소수체의 (2)에 의해 $\iota(x + y) = \iota(x) + \iota(y)$이고, 복소수체의 (1)의 체의 분배법칙에 의해 $i\,\iota(x + y) = i\,\iota(x) + i\,\iota(y)$이다. [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (1)에 의해 $\exp(i(x + y)) = uv$이다. 여기서 $u = \exp(ix)$, $v = \exp(iy)$이다. 코사인과 사인의 정의에 의해 $\operatorname{Re} u = \cos x$, $\operatorname{Im} u = \sin x$, $\operatorname{Re} v = \cos y$, $\operatorname{Im} v = \sin y$이다. 다시 정의와 복소수의 (2)에 의해
$$
\begin{aligned}
\cos(x + y) &= \operatorname{Re}(uv) \\
&= \cos x \cos y \\
&\qquad - \sin x \sin y, \\
\sin(x + y) &= \operatorname{Im}(uv) \\
&= \cos x \sin y \\
&\qquad + \sin x \cos y
\end{aligned}
$$
이고, 마지막 식은 (K1)에 의해 $\sin x \cos y + \cos x \sin y$이다.

**2의 증명.** [[real-number-arithmetic]]의 뺄셈의 정의에 의해 $x - y = x + (-y)$이다. (1)을 $x$와 $-y$에 쓰고 코사인과 사인의 (3)의 $\cos(-y) = \cos y$, $\sin(-y) = -\sin y$를 넣으면, (K12)의 (ii)의 $a(-b) = -(ab)$에 의해
$$
\begin{aligned}
\cos(x - y) &= \cos x \cos y \\
&\qquad - \sin x\,(-\sin y) \\
&= \cos x \cos y \\
&\qquad + \sin x \sin y, \\
\sin(x - y) &= \sin x \cos y \\
&\qquad + \cos x\,(-\sin y) \\
&= \sin x \cos y \\
&\qquad - \cos x \sin y
\end{aligned}
$$
이다. 첫 식의 둘째 줄은 뺄셈의 정의와 (K9)의 $-(-a) = a$에 의한 $a - (-b) = a + b$이다.

**3의 증명.** (K7)의 $1 + 1 = 2$, (K12)의 (i), (K4)와 (K1)에 의해 $2x = (1 + 1)x = x + x$이다. (1)을 $y = x$에 쓰고 거듭제곱의 (1)의 $a^2 = aa$를 쓰면 $\cos(2x) = cc - ss = c^2 - s^2$이고 $\sin(2x) = sc + cs = 2sc$이다. 코사인과 사인의 (4)에 의해 $c^2 + s^2 = 1$이므로 $s^2 = 1 - c^2$이고 $c^2 = 1 - s^2$이다. 따라서
$$
\begin{aligned}
c^2 - s^2 &= c^2 - (1 - c^2) = 2c^2 - 1, \\
c^2 - s^2 &= (1 - s^2) - s^2 = 1 - 2s^2
\end{aligned}
$$
이다.

**4의 증명.** (K7)의 $2 + 1 = 3$, (K12)의 (i), (K4)와 (K1)에 의해 $3x = (2 + 1)x = 2x + x$이다. (1)을 $2x$와 $x$에 쓰고 (3)을 넣으면, 거듭제곱의 (1)에 의해 $c^3 = c^2 c$이므로
$$
\begin{aligned}
\cos(3x) &= \cos(2x)\,c - \sin(2x)\,s \\
&= (2c^2 - 1)c - 2sc \cdot s \\
&= 2c^3 - c - 2c\,s^2 \\
&= 2c^3 - c - 2c(1 - c^2) \\
&= 4c^3 - 3c
\end{aligned}
$$
이다. 넷째 줄은 위의 $s^2 = 1 - c^2$이다. 같은 방법으로
$$
\begin{aligned}
\sin(3x) &= \sin(2x)\,c + \cos(2x)\,s \\
&= 2sc \cdot c + (1 - 2s^2)s \\
&= 2s\,c^2 + s - 2s^3 \\
&= 2s(1 - s^2) + s - 2s^3 \\
&= 3s - 4s^3
\end{aligned}
$$
이다. 넷째 줄은 $c^2 = 1 - s^2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[y = −x 를 넣은 확인]
(1)에 $y = -x$를 넣으면 왼쪽은 $\cos 0 = 1$, $\sin 0 = 0$입니다([[cosine-and-sine|코사인과 사인]]의 (2)). 오른쪽은 같은 항목의 (3)에 의해 $\cos x \cos x - \sin x\,(-\sin x) = (\cos x)^2 + (\sin x)^2$과 $\sin x \cos x + \cos x\,(-\sin x) = 0$입니다. 첫째 등식은 같은 항목의 (4)의 제곱의 합이 $1$이라는 것이고, 둘째 등식은 저절로 맞습니다.
:::

:::example[cos(4x) 를 cos x 로 쓰기]
(3)을 $2x$에 쓰고 다시 (3)을 쓰면, $c = \cos x$에 대하여
$$
\begin{aligned}
\cos(4x) &= 2(\cos(2x))^2 - 1 \\
&= 2(2c^2 - 1)^2 - 1 \\
&= 8c^4 - 8c^2 + 1
\end{aligned}
$$
입니다. $(2c^2 - 1)^2 = 4c^4 - 4c^2 + 1$이기 때문입니다. $x = 0$이면 $c = 1$이고 양쪽이 모두 $1$입니다.
:::

:::counterexample[합의 코사인을 코사인의 합으로 쓰면 틀리는 예]
$\cos(x + y)$는 $\cos x + \cos y$와 다를 수 있습니다. $x = y = 0$이면 $\cos(0 + 0) = \cos 0 = 1$이지만 $\cos 0 + \cos 0 = 2$입니다. 배각을 "$\sin(2x) = 2 \sin x$"로 착각하는 것도 같은 종류입니다. (3)에 의해 $\sin(2x) = 2 \sin x \cos x$이므로, $\sin(2x) = 2 \sin x$인 것은 $2 \sin x\,(\cos x - 1) = 0$일 때, 곧 [[real-number-arithmetic]]의 (K10)에 의해 정확히 $\sin x = 0$이거나 $\cos x = 1$일 때입니다.
:::

## 확인 질문

:::check[모든 실수 $x$에서 $(\cos x + \sin x)^2$을 $\sin(2x)$로 나타내면 무엇인가?]
전개하면 $(\cos x)^2 + 2 \sin x \cos x + (\sin x)^2$이고, [[cosine-and-sine|코사인과 사인]]의 (4)와 이 항목의 (3)에 의해 $1 + \sin(2x)$입니다. $x = 0$이면 양쪽이 $1$입니다.
:::

:::check[$\cos x = 1/3$이면 $\cos(3x)$는 무엇인가?]
(4)에 의해 $\cos(3x) = 4 \cdot (1/27) - 3 \cdot (1/3) = 4/27 - 1 = -23/27$입니다.
:::
