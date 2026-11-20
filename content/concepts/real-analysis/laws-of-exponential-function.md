---
title: 지수함수의 덧셈 법칙
title_en: Addition Law of the Exponential Function
aliases: [지수함수의 성질, exp 의 덧셈 법칙, exp(x + y) = exp(x)exp(y), addition formula for the exponential, 1 + x ≤ exp(x)]
kind: theorem
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "실수 x, y 에 대하여 exp(x + y) = exp(x)exp(y) 이다. 여기서 exp(−x) 는 exp(x) 의 역수이고, 0 이상인 정수 n 에서 exp(nx) 는 exp(x) 의 n 제곱이다. 또 모든 실수 x 에서 1 + x ≤ exp(x) 이고, x < 1 이면 exp(x) ≤ (1 − x)⁻¹ 이며, 두 부등식의 등호는 정확히 x = 0 일 때 성립한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, mathematical-induction, power-of-a-real-number, natural-logarithm, laws-of-logarithm, exponential-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.2 소절 The exponential) Proposition 5.4.2 의 (iv), (v)와 그 증명 (p.209–210); 5.4.3 소절 연습문제 5.4.8, 5.4.10 (p.212–213)
    checked: original
    note: "(1)은 출처 Proposition 5.4.2 (iv)(p.209)이고, 증명은 출처(p.210)와 같은 길이다. 출처는 'L 이 전단사이므로 x = L(a), y = L(b) 인 a, b 를 찾는다'고 적는데, 이 항목은 a = exp(x), b = exp(y) 로 바로 정한다(고르는 단계가 없다). (3)은 출처 Proposition 5.4.2 (v)(유리수 q 에 대해 E(qx) = E(x)^q)의 정수 부분이다. 출처는 (v)를 유리수 지수의 정의(5.4절 첫머리, p.207)와 Proposition 5.4.1 (v)로 보이는데, 이 사이트는 유리수 지수를 따로 정의하지 않으므로 0 이상인 정수 n 에 대해 귀납법으로 보이고, 유리수와 실수 지수는 '양수의 실수 거듭제곱' 항목에 맡긴다. (2)는 '지수함수' 항목 (5)의 exp(x)exp(−x) = 1(출처 Proposition 5.4.2 의 유일성 증명 안에 있는 식)에서 나온다. (4)는 '자연로그'의 어림 (6)을 exp(x) 와 exp(−x) 에 쓴 것이다. (4)의 두 부등식은 출처 5.4절에서 명제로 찾지 못했다(검색어 '1 + 𝑥 ≤', '≥ 1 + 𝑥', '1 + 𝑥 <' 로 책 전체 0건, 'convex' 로 5건; 5.4.3 소절 연습문제 5.4.1–5.4.11 을 처음부터 읽었다). 출처 연습문제 5.4.8(p.212)은 eˣ 의 볼록성으로 다른 부등식을 묻는다. 예시 'exp(ln 2 + ln 3)'은 (1)이 '로그의 성질' (1)과 맞는다는 것을 보는 것으로, 출처 (iv)의 증명과 같은 발상이다. 반례 'exp(xy) 와 exp(x)exp(y)'에서 곱에 대한 옳은 꼴은 출처 Proposition 5.4.3 (i)(p.211; exp(xy) = exp(x)^y)이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 위치 2건, 경계 경우에서 맞지 않던 설명 문장 2건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
지수함수 $\exp$는 [[exponential-function]]의 것이고, $\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이다. 거듭제곱 $a^n$($n$은 $0$ 이상인 정수)은 [[power-of-a-real-number]]의 것이고, $a^{-1}$은 [[real-number-arithmetic]]의 역수이다. 아래에서 $x$, $y$는 실수이고 $n$은 $0$ 이상인 정수이다.

1. (덧셈) $\exp(x + y) = \exp(x)\exp(y)$이다.
2. (빼기와 역수) $\exp(-x) = \exp(x)^{-1}$이고 $\exp(x - y) = \exp(x)\exp(y)^{-1}$이다.
3. (정수배) $\exp(nx) = \exp(x)^n$이고 $\exp(-nx) = \bigl(\exp(x)^{-1}\bigr)^n$이다. 특히 $n = 0$이면 두 쪽이 모두 $1$이다.
4. (어림) $1 + x \le \exp(x)$이고, 등호는 정확히 $x = 0$일 때 성립한다. $x < 1$이면 $0 < 1 - x$이고 $\exp(x) \le (1 - x)^{-1}$이며, 등호는 정확히 $x = 0$일 때 성립한다.
:::

:::english
The exponential function $\exp$ is that of the entry on the exponential function; $\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm. Powers $a^n$ ($n$ a nonnegative integer) are those of the entry on powers of a real number, and $a^{-1}$ is the reciprocal of the entry on the arithmetic of real numbers. Below, $x$ and $y$ are real numbers and $n$ is a nonnegative integer.

1. (Addition) $\exp(x + y) = \exp(x)\exp(y)$.
2. (Differences and reciprocals) $\exp(-x) = \exp(x)^{-1}$ and $\exp(x - y) = \exp(x)\exp(y)^{-1}$.
3. (Integer multiples) $\exp(nx) = \exp(x)^n$ and $\exp(-nx) = \bigl(\exp(x)^{-1}\bigr)^n$. In particular, both sides equal $1$ when $n = 0$.
4. (Estimates) $1 + x \le \exp(x)$, with equality precisely when $x = 0$. If $x < 1$, then $0 < 1 - x$ and $\exp(x) \le (1 - x)^{-1}$, with equality precisely when $x = 0$.
:::

## 직관

자연로그는 곱을 합으로 바꾸므로([[laws-of-logarithm|로그의 성질]]의 (1)), 그 역함수인 지수함수는 합을 곱으로 바꿉니다. (1)이 이것이고, (2)와 (3)은 (1)을 되풀이해 쓴 것입니다. $x$만큼 가고 $y$만큼 더 가는 것이 배율 $\exp(x)$와 $\exp(y)$를 차례로 곱하는 것과 같다고 생각하면 됩니다.

(4)는 $\exp$의 그래프가 $0$에서의 접선 $1 + x$보다 위에 있다는 것입니다. 접선과는 $x = 0$에서만 만납니다. 둘째 부등식은 첫째 부등식을 $-x$에 쓰고 양변의 역수를 취한 것입니다. 역수를 취해 부등호를 뒤집는 단계에서 $1 - x$가 양수라는 것을 쓰므로 $x < 1$이라는 조건이 붙습니다.

## 증명

:::idea
$a = \exp(x)$, $b = \exp(y)$로 두면 $\ln(ab) = \ln a + \ln b = x + y$이므로 $\exp(x + y) = ab$이다. (4)는 자연로그의 어림 $\ln a \le a - 1$에 $a = \exp(x)$를 넣는다.
:::

:::hint
(3)은 $n$에 대한 귀납법으로, $(n + 1)x = nx + x$에 (1)을 씁니다.
:::

:::hint
(4)의 둘째 부등식은 첫째 부등식을 $-x$에 쓴 $1 - x \le \exp(-x) = \exp(x)^{-1}$에서 시작합니다.
:::

:::proof
"지수함수 (n)"은 [[exponential-function]]의 (n), "자연로그 (n)"은 [[natural-logarithm]]의 (n), "순서 (n)"은 [[order-properties-of-reals]]의 (n)이고, (K…)는 [[real-number-arithmetic]]의 번호이다.

**1의 증명.** $a = \exp(x)$, $b = \exp(y)$로 두면 지수함수 (1)에 의해 $a$, $b \in \mathbb{R}_{>0}$이고 $\ln a = x$, $\ln b = y$이다. [[laws-of-logarithm|로그의 성질]]의 진술에 의해 $ab \in \mathbb{R}_{>0}$이고, 그 (1)에 의해 $\ln(ab) = \ln a + \ln b = x + y$이다. 지수함수 (1)에 의해 $\exp(x + y) = ab = \exp(x)\exp(y)$이다.

**2의 증명.** 지수함수 (5)에 의해 $\exp(x)\exp(-x) = 1$이고 지수함수 (1)에 의해 $\exp(x) \ne 0$이므로, (K8)의 (iii)(역수의 유일성)에 의해 $\exp(-x) = \exp(x)^{-1}$이다. $x - y = x + (-y)$이므로 1과 방금 보인 것을 $y$에 쓰면 $\exp(x - y) = \exp(x)\exp(-y) = \exp(x)\exp(y)^{-1}$이다.

**3의 증명.** $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 $\exp(nx) = \exp(x)^n$을 보인다. $n = 0$이면 $0x = 0$이므로((K9)) 지수함수 (1)에 의해 $\exp(0x) = 1$이고, [[power-of-a-real-number]]의 정의에 의해 $\exp(x)^0 = 1$이다. $\exp(nx) = \exp(x)^n$이라 하면 $(n + 1)x = nx + x$((K12)의 (i), (K4))이므로 1과 거듭제곱의 정의에 의해
$$
\begin{aligned}
\exp((n + 1)x) &= \exp(nx)\exp(x) \\
&= \exp(x)^n \exp(x) \\
&= \exp(x)^{n + 1}
\end{aligned}
$$
이다. 다음으로 $-nx = n(-x)$((K9), (K12)의 (ii), (K1), (K2))이므로 방금 보인 것을 $-x$에 쓰고 2를 쓰면 $\exp(-nx) = \exp(-x)^n = \bigl(\exp(x)^{-1}\bigr)^n$이다. $n = 0$이면 두 쪽은 거듭제곱의 정의에 의해 $1$이다.

**4의 증명.** $a = \exp(x)$로 두면 $a \in \mathbb{R}_{>0}$이고 $\ln a = x$이다. 자연로그 (6)에 의해 $\ln a \le a - 1$, 곧 $x \le \exp(x) - 1$이고, 순서 (2)의 (ii)에 의해 $1 + x \le \exp(x)$이다. 자연로그 (6)에 의해 $a \ne 1$이면 $\ln a < a - 1$이고 $a = 1$이면 $\ln a = a - 1$이다. 지수함수 (1)과 자연로그 (1)에 의해 $a = \exp(x) = 1$인 것은 정확히 $x = \ln 1 = 0$일 때이다. 따라서 $1 + x = \exp(x)$인 것은 정확히 $x = 0$일 때이다.

$x < 1$이라 하자. 순서 (3)의 (i)에 의해 $0 < 1 - x$이다. 앞 문단을 $-x$에 쓰고 2를 쓰면 $1 - x = 1 + (-x) \le \exp(-x) = \exp(x)^{-1}$이고, 등호는 정확히 $-x = 0$, 곧 $x = 0$일 때 성립한다. $1 - x < \exp(x)^{-1}$이면 순서 (6)의 (ii)에 의해 $\bigl(\exp(x)^{-1}\bigr)^{-1} < (1 - x)^{-1}$이다. $\exp(x)\exp(x)^{-1} = 1$이므로 (K8)의 (iii)과 (K1)에 의해 $\bigl(\exp(x)^{-1}\bigr)^{-1} = \exp(x)$이고, 따라서 $\exp(x) < (1 - x)^{-1}$이다. $1 - x = \exp(x)^{-1}$이면 같은 이유로 $(1 - x)^{-1} = \exp(x)$이다. 그러므로 $x < 1$이면 $\exp(x) \le (1 - x)^{-1}$이고, 등호는 정확히 $x = 0$일 때 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[$\exp(\ln 2 + \ln 3)$]
(1)에 의해 $\exp(\ln 2 + \ln 3) = \exp(\ln 2)\exp(\ln 3) = 2 \cdot 3 = 6$입니다([[exponential-function|지수함수]]의 (1)). 한편 [[laws-of-logarithm|로그의 성질]]의 (1)에 의해 $\ln 2 + \ln 3 = \ln 6$이므로 지수함수의 (1)에 의해 바로 $\exp(\ln 6) = 6$이기도 합니다. 같은 방식으로 (3)과 (2)에 의해 $\exp(2\ln 3) = \exp(\ln 3)^2 = 9$이고 $\exp(-2\ln 3) = (3^{-1})^2 = 1/9$입니다.
:::

:::example[$\exp(1/2)$의 어림]
(4)를 $x = 1/2$에 쓰면 $x \ne 0$이므로 등호가 없어 $3/2 < \exp(1/2)$이고, $1/2 < 1$이므로 $\exp(1/2) < (1 - 1/2)^{-1} = 2$입니다. 곧 $3/2 < \exp(1/2) < 2$입니다. (3)에 의해 $\exp(1) = \exp(2 \cdot (1/2)) = \exp(1/2)^2$이므로, [[power-of-a-real-number]]의 (6)의 (ii)에 의해 $9/4 < \exp(1) < 4$도 나옵니다.
:::

:::counterexample[$\exp(xy)$와 $\exp(x)\exp(y)$]
$\exp$는 합을 곱으로 보내지만 곱을 곱으로 보내지는 않을 수 있습니다. $x = y = 1$이면 $\exp(xy) = \exp(1)$이고 $\exp(x)\exp(y) = \exp(1)^2$입니다. [[exponential-function|지수함수]]의 (1), (2)에 의해 $1 = \exp(0) < \exp(1)$이므로 $\exp(1) \ne 1$이고, $\exp(1) \ne 0$이므로 $\exp(1)^2 \ne \exp(1)$입니다([[real-number-arithmetic]]의 (K11)). 반면 $x = 0$이면 두 쪽이 모두 $1$이므로, 두 식이 같은 $x$, $y$도 있습니다.
:::

:::counterexample[$1 \le x$에서의 둘째 어림]
(4)의 둘째 부등식에는 $x < 1$이 필요합니다. $x = 2$이면 $(1 - x)^{-1} = (-1)^{-1} = -1$인데 $\exp(2)$는 양수이므로 $\exp(2) \le -1$이 아닙니다. $x = 1$이면 $1 - x = 0$이어서 $(1 - x)^{-1}$이 정의되지 않습니다.
:::

## 확인 질문

:::check[$\exp(3x) = 8$인 실수 $x$는?]
$x = \ln 2$입니다. (3)에 의해 $\exp(3x) = \exp(x)^3$이므로 $\exp(x)^3 = 8 = 2^3$이고, $\exp(x)$와 $2$는 양수이므로 [[power-of-a-real-number]]의 (6)의 (iii)에 의해 $\exp(x) = 2$입니다. [[exponential-function|지수함수]]의 (1)에 의해 $x = \ln 2$입니다.
:::

:::check[$x = -1$에서 (4)의 두 부등식은 무엇을 말하는가?]
$0 = 1 + (-1) < \exp(-1)$이고, $-1 < 1$이므로 $\exp(-1) < (1 - (-1))^{-1} = 1/2$입니다. 곧 $0 < \exp(-1) < 1/2$입니다. (2)에 의해 $\exp(-1) = \exp(1)^{-1}$이므로, 이것은 $2 < \exp(1)$과 같은 말입니다([[order-properties-of-reals]]의 (6)의 (ii)).
:::
