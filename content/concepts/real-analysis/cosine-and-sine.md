---
title: 코사인과 사인
title_en: Cosine and Sine
aliases: [코사인, 사인, 삼각함수, 오일러 공식, cosine, sine, trigonometric functions, Euler's formula]
kind: definition
field: real-analysis
msc: ["26A09", "33B10"]
level: undergrad
summary: 실수 y 에서 cos y 와 sin y 를 exp(iy) 의 실수부와 허수부로 정의한다. 따라서 exp(iy) = cos y + i sin y 이고, cos 0 = 1, sin 0 = 0, cos(−y) = cos y, sin(−y) = −sin y 이며, cos y 의 제곱과 sin y 의 제곱의 합은 1 이다. exp(iy) = 1 인 것은 정확히 cos y = 1 일 때이다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, real-valued-function, natural-logarithm, exponential-function, laws-of-exponential-function, ring-basic-properties, complex-number, complex-field, complex-conjugate, complex-exponential-function, addition-law-of-complex-exponential]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, 첫 문단의 정의와 Proposition 11.4.2 (i)–(iii) (p.164), (v)–(vii) (p.165), 그 증명 (p.165–166); 11.4.4절 Exercises, Exercise 11.4.6 (p.168)
    checked: original
    note: "출처는 11.4.2절 첫머리(p.164)에서 'e^{x+iy} = eˣ(cos(y) + i sin(y))' 로 사인과 코사인을 정의한다고 적은 뒤, 모든 복소수 z 에서 cos(z) = (e^{iz} + e^{−iz})/2, sin(z) = (e^{iz} − e^{−iz})/(2i) 로 정의하고, 실수 x 에서 cos(x) = Re(e^{ix}), sin(x) = Im(e^{ix}) 라는 것을 Proposition 11.4.2 (v)(p.165)로 증명한다(켤레를 취하는 함수의 연속으로 e^{ix} 의 켤레가 e^{−ix} 임을 얻는다). 이 항목은 복소 변수의 cos, sin 을 두지 않고 (v)를 실수 위의 정의로 삼는다. (1)은 출처 (i)(Euler's formula)를, (3)은 (iii)을 실수로 좁힌 것이고 (2)는 (ii)이다. (4)의 제곱의 합은 출처 (vi)의 실수판이고, 출처는 증명(p.165)에서 실수 x 에 대해 1 = e^{ix}e^{−ix} = |e^{ix}|² = cos(x)² + sin(x)² 으로 계산한다. 복소수 z 에서의 (vi)는 Exercise 11.4.6(p.168)이다. (4)의 |cos y| ≤ 1, |sin y| ≤ 1 은 출처 (vii)이고, 출처는 sin(x)² = 1 − cos(x)² ≤ 1 로 보인다(p.165–166). (5)의 꼴은 출처가 11.4.2절 첫 문장(p.164)에 정의로 적은 식과 같고, 그 실수부와 허수부 eˣcos(y), eˣsin(y) 는 8.5.2절 Exercise 8.5.3(p.58)의 사상 f(x, y) = (eˣcos(y), eˣsin(y)) 의 두 성분이다. 예시 '(5)로 exp(1 + 2i) 의 두 부분 적기'는 (5)를 한 점에 쓴 것이다. (6)은 뒤에서 exp(ix) = 1 인 실수 x 를 찾을 때 쓰도록 진술에 둔다. 출처는 11.8.1소절 Trigonometric polynomials(p.192)에서도 오일러 공식 e^{iθ} = cos(θ) + i sin(θ) 를 (1)과 같은 꼴로 다시 적는다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, Theorem 4.22 (p.51–52); 12.1절 Matrix Groups, Example 12.5 (p.144), Example 12.7 (p.145)
    checked: original
    note: "Judson 은 4.2절(p.51)에서 복소수를 z = r(cos θ + i sin θ) 로 쓴다. 확인 질문 '$\\exp(iy)^2$의 실수부와 허수부를 $\\cos y$와 $\\sin y$로 쓰면 무엇인가?'의 계산은 Theorem 4.22(드무아브르, p.51–52)의 증명이 (cos nθ + i sin nθ)(cos θ + i sin θ) 를 전개하는 것과 같은 계산을 n = 1 에서 한 것이다. 예시 'cos y = 3/5 이면 sin y 는 두 값 가운데 하나'의 수의 쌍 3/5, 4/5 는 Example 12.5(p.144)와 Example 12.7(p.145)의 직교행렬의 성분에도 나온다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 어림 (4)의 증명 통독, cos 1·cos 2·x/3 ≤ sin x 와 cos(1/2) 예의 값 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속과 $a + bi$ 꼴은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]]의 것이다. 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 [[complex-exponential-function]], 실수의 지수함수는 [[exponential-function]]의 것이다. 실함수와 값으로 정한 함수는 [[real-valued-function]], 실수의 거듭제곱은 [[power-of-a-real-number]], 실수의 절댓값은 [[absolute-value]]의 것이다. 실수 $y$에 대하여 $\exp(iy)$는 $\exp(i\,\iota(y))$이다.

**코사인과 사인.** 실수 $y$에서
$$
\begin{aligned}
\cos y &= \operatorname{Re} \exp(iy), \\
\sin y &= \operatorname{Im} \exp(iy)
\end{aligned}
$$
로 정한다. 두 값은 실수이므로 [[real-valued-function|실함수]]의 (1)에 의해 이렇게 정한 실함수 $\cos : \mathbb{R} \to \mathbb{R}$와 $\sin : \mathbb{R} \to \mathbb{R}$가 있다. $\cos$를 **코사인**(cosine), $\sin$을 **사인**(sine)이라 한다. 인수가 글자 하나나 수 하나가 아니면 $\cos(x + y)$, $\sin(2x)$, $\cos(-y)$처럼 괄호를 치고, 값의 거듭제곱은 $(\cos y)^2$처럼 괄호를 쳐서 쓴다. 이 사이트는 코사인과 사인을 실수 위에서만 정의하며, 복소수 $z$에서의 $\cos z$, $\sin z$는 정의하지 않는다.

다음이 성립한다. 아래에서 $x$, $y$, $y'$은 실수이고 $z$는 복소수이다.

1. (오일러 공식) $\exp(iy) = \cos y + i \sin y$, 곧 $\exp(iy) = \iota(\cos y) + \iota(\sin y)\, i$이다. 따라서 $\exp(iy) = \exp(iy')$인 것은 정확히 $\cos y = \cos y'$이고 $\sin y = \sin y'$일 때이다.
2. ($0$에서의 값) $\cos 0 = 1$이고 $\sin 0 = 0$이다.
3. (짝과 홀) $\cos(-y) = \cos y$이고 $\sin(-y) = -\sin y$이다.
4. (제곱의 합과 값의 범위) $(\cos y)^2 + (\sin y)^2 = 1$이다. 또 $|\cos y| \le 1$이고 $|\sin y| \le 1$이며, 곧 $-1 \le \cos y \le 1$이고 $-1 \le \sin y \le 1$이다.
5. ($\exp$의 실수부와 허수부) $\exp(x + iy) = \exp(x)\,(\cos y + i \sin y)$이고, 오른쪽의 $\exp(x)$는 실수의 지수함수의 값이다. 따라서
   $$
   \begin{aligned}
   &\operatorname{Re} \exp(z) \\
   &\qquad = \exp(\operatorname{Re} z) \cos(\operatorname{Im} z), \\
   &\operatorname{Im} \exp(z) \\
   &\qquad = \exp(\operatorname{Re} z) \sin(\operatorname{Im} z)
   \end{aligned}
   $$
   이다.
6. (값이 $1$이나 $-1$인 곳) $\exp(iy) = 1$인 것은 정확히 $\cos y = 1$일 때이고, $\exp(iy) = -1$인 것은 정확히 $\cos y = -1$일 때이다. 두 경우 모두 $\sin y = 0$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers where complex numbers are required, and the form $a + bi$ are those of the entry on the field of complex numbers; the conjugate $\overline{z}$ is that of its entry. The complex exponential function $\exp : \mathbb{C} \to \mathbb{C}$ and the real exponential function are those of their entries. Real-valued functions and functions defined by their values, powers of real numbers, and absolute values of real numbers are those of their entries. For a real number $y$, $\exp(iy)$ means $\exp(i\,\iota(y))$.

**Cosine and sine.** For a real number $y$, set
$$
\begin{aligned}
\cos y &= \operatorname{Re} \exp(iy), \\
\sin y &= \operatorname{Im} \exp(iy).
\end{aligned}
$$
Both values are real numbers, so this defines real-valued functions $\cos : \mathbb{R} \to \mathbb{R}$ and $\sin : \mathbb{R} \to \mathbb{R}$. The function $\cos$ is called the **cosine** and $\sin$ the **sine**. When the argument is not a single letter or a single number, we use parentheses, as in $\cos(x + y)$, $\sin(2x)$, $\cos(-y)$, and powers of values are written with parentheses, as in $(\cos y)^2$. This site defines cosine and sine only on the real numbers; $\cos z$ and $\sin z$ for a complex number $z$ are not defined.

The following hold. Below, $x$, $y$, $y'$ are real numbers and $z$ is a complex number.

1. (Euler's formula) $\exp(iy) = \cos y + i \sin y$, that is, $\exp(iy) = \iota(\cos y) + \iota(\sin y)\, i$. Hence $\exp(iy) = \exp(iy')$ if and only if $\cos y = \cos y'$ and $\sin y = \sin y'$.
2. (Values at $0$) $\cos 0 = 1$ and $\sin 0 = 0$.
3. (Even and odd) $\cos(-y) = \cos y$ and $\sin(-y) = -\sin y$.
4. (Sum of squares and range of values) $(\cos y)^2 + (\sin y)^2 = 1$. Moreover $|\cos y| \le 1$ and $|\sin y| \le 1$, that is, $-1 \le \cos y \le 1$ and $-1 \le \sin y \le 1$.
5. (Real and imaginary parts of $\exp$) $\exp(x + iy) = \exp(x)\,(\cos y + i \sin y)$, where $\exp(x)$ on the right is the value of the real exponential function. Hence
   $$
   \begin{aligned}
   &\operatorname{Re} \exp(z) \\
   &\qquad = \exp(\operatorname{Re} z) \cos(\operatorname{Im} z), \\
   &\operatorname{Im} \exp(z) \\
   &\qquad = \exp(\operatorname{Re} z) \sin(\operatorname{Im} z).
   \end{aligned}
   $$
6. (Where the value is $1$ or $-1$) $\exp(iy) = 1$ if and only if $\cos y = 1$, and $\exp(iy) = -1$ if and only if $\cos y = -1$. In both cases $\sin y = 0$.
:::

## 직관

[[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (5)에 의해 실수 $y$에서 $\exp(iy)$의 절댓값은 $1$입니다. 그래서 $\exp(iy)$는 복소평면에서 원점까지의 거리가 $1$인 점이고, 코사인과 사인은 그 점의 두 좌표에 이름을 붙인 것입니다. (4)의 $(\cos y)^2 + (\sin y)^2 = 1$은 "원점까지의 거리가 $1$"을 좌표로 옮겨 적은 것이고, 두 좌표가 $-1$ 이상 $1$ 이하라는 것도 여기서 나옵니다.

지도 위의 한 지점을 동서 좌표와 남북 좌표로 적는 것에 비유할 수 있습니다. 지점이 $\exp(iy)$이고, 동서 좌표가 실수부 $\cos y$, 남북 좌표가 허수부 $\sin y$입니다. 두 좌표를 알면 지점이 정해지고 거꾸로도 그렇다는 것이 (1)의 뒷문장입니다. 비유가 맞지 않는 곳은 $y$의 뜻입니다. 이 정의는 $y$가 점까지 돌아간 거리나 각도라고 말하지 않습니다. 이 강의는 곡선의 길이를 다루지 않으므로 $y$는 $\exp(iy)$를 정하는 실수일 뿐입니다.

(3)은 켤레에서 나옵니다. $\exp(-iy)$는 $\exp(iy)$의 켤레이므로 실수부는 같고 허수부는 부호만 바뀝니다. (6)은 실수부가 $1$이면 (4)에 의해 허수부가 $0$일 수밖에 없다는 것입니다. 실수부가 $1$이나 $-1$이면 실수부만으로 점이 정해집니다. 실수부 $c$가 $-1 < c < 1$이면 허수부의 제곱 $1 - c^2$이 양수여서 허수부가 $0$이 아니고, $y$ 대신 $-y$를 넣으면 실수부는 그대로이고 허수부의 부호만 바뀌므로 실수부만으로는 점이 정해지지 않습니다(예시).

## 성질의 증명

:::proof
"복소수체의 (2)"처럼 쓴 것은 [[complex-field]], "복소수의 (2)"는 [[complex-number]], "켤레의 (1)"은 [[complex-conjugate]], "정의의 (3)"은 [[complex-exponential-function]], "덧셈 법칙의 (5)"는 [[addition-law-of-complex-exponential]], "순서 성질의 (5)"는 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로 곱의 순서를 바꾸는 곳은 체의 조건에 의한다. 아래에서 $u = \exp(iy)$로 둔다. 정의에 의해 $\operatorname{Re} u = \cos y$이고 $\operatorname{Im} u = \sin y$이다.

**1의 증명.** 복소수체의 (4)에 의해 $u = \operatorname{Re} u + (\operatorname{Im} u) i = \cos y + (\sin y) i$이고, 이것은 약속에 의해 $\iota(\cos y) + \iota(\sin y)\, i$이며, 곱셈의 교환법칙에 의해 $\cos y + i \sin y$로도 쓴다. $u' = \exp(iy')$로 두면 복소수체의 (4)에 의해 $\cos y + (\sin y) i = \cos y' + (\sin y') i$인 것은 정확히 $\cos y = \cos y'$이고 $\sin y = \sin y'$일 때이다.

**2의 증명.** 복소수체의 (2)의 (i)과 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $i\,\iota(0) = i \cdot 0 = 0$이므로, 정의의 (3)에 의해 $\exp(i\,\iota(0)) = \exp(0) = 1$이다. 복소수체의 (2)의 (i)에 의해 $1 = \iota(1)$이고, 그 (ii)에 의해 $\operatorname{Re} \iota(1) = 1$, $\operatorname{Im} \iota(1) = 0$이다.

**3의 증명.** 복소수체의 (2)의 (i)에 의해 $\iota(-y) = -\iota(y)$이고, 환의 기본 성질의 (2)에 의해 $i\,\iota(-y) = i\,(-\iota(y)) = -(i\,\iota(y))$이다. 덧셈 법칙의 (5)에 의해 $\exp(-(i\,\iota(y))) = \overline{u}$이다. 따라서 켤레의 (1)에 의해 $\cos(-y) = \operatorname{Re} \overline{u} = \operatorname{Re} u = \cos y$이고 $\sin(-y) = \operatorname{Im} \overline{u} = -\operatorname{Im} u = -\sin y$이다.

**4의 증명.** 덧셈 법칙의 (5)에 의해 $(\operatorname{Re} u)^2 + (\operatorname{Im} u)^2 = 1$이고, 이것이 첫 등식이다. $c = \cos y$, $s = \sin y$로 두자. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $s^2 = ss$이고 순서 성질의 (5)의 (iii)에 의해 $0 \le ss$이므로, 순서 성질의 (2)의 (i)에 의해 $c^2 = c^2 + 0 \le c^2 + s^2 = 1$이다. [[absolute-value]]의 (5)에 의해 $|c|\,|c| = cc = c^2 \le 1 = 1 \cdot 1$이고, 같은 항목의 (2)에 의해 $0 \le |c|$이며 순서 성질의 (5)의 (ii)에 의해 $0 \le 1$이므로, 순서 성질의 (7)의 (iii)에 의해 $|c| \le 1$이다. [[absolute-value]]의 (7)에 의해 이것은 $-1 \le c \le 1$과 같다. $c$와 $s$의 자리를 바꾸어 같은 논증을 하면 $|s| \le 1$이고 $-1 \le s \le 1$이다.

**5의 증명.** 덧셈 법칙의 (4)에 의해 $\exp(x + iy) = \iota(\exp(x))\, u$이고 (1)에 의해 $u = \cos y + i \sin y$이므로 첫 등식이 나온다. 같은 (4)에 의해 $\operatorname{Re} \exp(x + iy) = \exp(x) \operatorname{Re} u = \exp(x) \cos y$이고 $\operatorname{Im} \exp(x + iy) = \exp(x) \sin y$이다. 복소수 $z$는 복소수체의 (4)와 곱셈의 교환법칙에 의해 $x = \operatorname{Re} z$, $y = \operatorname{Im} z$로 둔 $x + iy$와 같으므로 둘째 등식들이 나온다.

**6의 증명.** $c = \cos y$, $s = \sin y$로 두자. $u = 1$이면 $1 = \iota(1)$이므로 복소수체의 (2)의 (ii)에 의해 $c = \operatorname{Re} u = 1$이다. $u = -1$이면 복소수체의 (2)의 (i)에 의해 $-1 = -\iota(1) = \iota(-1)$이므로 $c = -1$이다. 거꾸로 $c = 1$이거나 $c = -1$이라 하자. 두 경우 모두 $cc = 1$이다((K4)와 (K12)의 (iii)). (4)의 첫 등식과 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $1 + ss = 1$이므로 양변에 $-1$을 더하면 (K1), (K2), (K4), (K5)에 의해 $ss = 0$이고, (K10)에 의해 $s = 0$이다. 그러면 (1)과 복소수체의 (4)의 $a + 0i = a$에 의해 $u = \iota(c) + \iota(0)\, i = \iota(c)$이고, 이것은 $c = 1$이면 $1$, $c = -1$이면 $\iota(-1) = -1$이다. 어느 방향에서든 $u$가 $1$이나 $-1$이면 방금 보인 대로 $c$가 $1$이나 $-1$이므로 $s = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[cos y = 3/5 이면 sin y 는 두 값 가운데 하나]
실수 $y$가 $\cos y = 3/5$를 만족한다고 합시다. (4)에 의해 $(\sin y)^2 = 1 - 9/25 = 16/25$입니다. $s = \sin y$로 두면 $ss - (4/5)(4/5) = (s - 4/5)(s + 4/5) = 0$이므로 [[real-number-arithmetic]]의 (K10)에 의해 $\sin y$는 $4/5$이거나 $-4/5$입니다. 어느 쪽인지는 $\cos y$만으로 정해지지 않습니다. (3)에 의해 $-y$도 $\cos(-y) = 3/5$를 만족하고 $\sin(-y) = -\sin y$이므로, $\sin y = 4/5$이면 $\sin(-y) = -4/5$입니다. 그래서 (1)에 의해 $\exp(iy) = 3/5 + (4/5) i$이거나 $3/5 - (4/5) i$입니다.
:::

:::example[(5)로 exp(1 + 2i) 의 두 부분 적기]
(5)를 $z = 1 + 2i$에 쓰면 $\operatorname{Re} \exp(1 + 2i) = \exp(1) \cos 2$이고 $\operatorname{Im} \exp(1 + 2i) = \exp(1) \sin 2$입니다. (4)에 의해 두 값은 모두 $-\exp(1)$ 이상 $\exp(1)$ 이하입니다. 같은 실수부를 가진 $z = 1 - 2i$에서는 (3)에 의해 실수부가 같고 허수부의 부호만 바뀝니다.
:::

:::counterexample[i 를 빠뜨리면 다른 값이 되는 예]
코사인은 $\exp(iy)$의 실수부로 정의했고, $\exp(y)$의 실수부와는 값이 다를 수 있습니다. $y = 1$이면 [[complex-exponential-function|복소 지수함수]]의 (2)에 의해 $\operatorname{Re} \exp(\iota(1)) = \exp(1)$이고, [[laws-of-exponential-function|지수함수의 성질]]의 (4)에 의해 $1 + 1 < \exp(1)$이므로 이 값은 $2$보다 큽니다. 한편 (4)에 의해 $\cos 1 \le 1$입니다. 따라서 $\operatorname{Re} \exp(\iota(1)) \ne \cos 1$입니다. $y = 0$이면 두 값은 모두 $1$이어서 같습니다.
:::

## 확인 질문

:::check[$\exp(iy)^2$의 실수부와 허수부를 $\cos y$와 $\sin y$로 쓰면 무엇인가?]
(1)에 의해 $\exp(iy) = \cos y + i \sin y$이고, [[complex-number]]의 (2)의 곱의 실수부와 허수부에 의해 $\exp(iy)^2 = \exp(iy)\exp(iy)$의 실수부는 $(\cos y)^2 - (\sin y)^2$, 허수부는 $\cos y \sin y + \sin y \cos y = 2 \sin y \cos y$입니다. $y = 0$이면 (2)에 의해 실수부 $1$, 허수부 $0$입니다.
:::

:::check[$\operatorname{Re} \exp(\ln 2 + 3i)$는 무엇인가?]
(5)에 의해 $\exp(\ln 2) \cos 3$이고, [[exponential-function]]의 (1)에 의해 $\exp(\ln 2) = 2$이므로 $2 \cos 3$입니다. 허수부는 $2 \sin 3$입니다.
:::
