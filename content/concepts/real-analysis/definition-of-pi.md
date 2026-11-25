---
title: 원주율
title_en: The Number π
aliases: [파이, π, pi, 원주율 π, definition of pi]
kind: definition
field: real-analysis
msc: ["26A09", "33B10"]
level: undergrad
summary: 코사인은 닫힌구간 [0, 2] 에서 순감소하고 그 안에서 0 이 되는 점이 정확히 하나 있다. 그 점의 2배를 π 로 정의한다. 그러면 cos(π/2) = 0, sin(π/2) = 1, exp(iπ/2) = i 이고 2 < π < 4 이며, π/2 는 cos x = 0 인 양수 x 가운데 가장 작은 것이다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, square-root-exists, interval, real-valued-function, injective-surjective-bijective, upper-bound-and-supremum, derivative, differentiable-implies-continuous, mean-value-theorem, intermediate-value-theorem, complex-number, complex-field, cosine-and-sine, derivatives-of-cosine-and-sine]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.4.2절 Trigonometric functions and π, Proposition 11.4.2 (x) (p.165)와 그 증명 (p.166); 11.4.3절 The unit circle and polar coordinates (p.167)
    checked: original
    note: "출처의 Proposition 11.4.2 (x)(p.165)는 'cos(x) = 0 인 x > 0 이 있다' 이고 π := 2 inf{x > 0 : cos(x) = 0} 으로 정의한다. 출처의 증명(p.166)은 cos(0) = 1 > 0 에서 [0, y) 위에서 cos > 0 인 y > 0 을 잡고, a ∈ (0, y) 에 평균값 정리를 써서 2 ≥ cos(a) − cos(y) = sin(c)(y − a) ≥ sin(a)(y − a), 곧 y ≤ 2/sin(a) + a 를 얻은 뒤, 'there is some largest y such that cos(x) > 0 in [0, y)' 를 잡고 연속성으로 cos(y) = 0 이라고 적으며 π 를 2y 로 둔다. 이 항목은 상한을 거치지 않는다. 코사인과 사인의 도함수 항목의 테일러 어림 cos 2 ≤ −1/3 과 사잇값 정리로 [0, 2] 의 근을 얻고, [0, 2] 의 두 점에 평균값 정리를 바로 써서 순감소와 근의 유일성을 보인 뒤 π 를 그 근의 2배로 정한다. 출처의 정의와 같은 수라는 것이 (5)이다. sin(π/2) = 1 과 e^{iπ/2} = i 는 출처가 같은 증명(p.166)에서 'As cos(π/2) = 0, we find (sin(π/2))² = 1. As sin is positive on (0, π/2), we have sin(π/2) = 1' 이라고 적은 것과 같다. 출처는 11.4.3절(p.167)에서 호의 길이 적분으로 원의 둘레가 2π 임을 계산하지만, 이 항목은 호의 길이를 쓰지 않는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(π 의 어림 cos(3/2), cos(8/5) 의 분수와 3배각 인수분해를 다시 계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
코사인 $\cos$와 사인 $\sin$은 [[cosine-and-sine|코사인과 사인]]의 것이고, 닫힌구간과 열린구간은 [[interval]], 최솟값과 하한 $\min$, $\inf$는 [[upper-bound-and-supremum]], 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]], 제한은 [[real-valued-function]]의 것이다. 복소수와 $i$는 [[complex-number]], 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이다.

**원주율.** 닫힌구간 $[0, 2]$의 원소 $c$ 가운데 $\cos c = 0$인 것은 정확히 하나 있다(아래 (1)). 그 수의 $2$배를 **원주율**(pi)이라 하고 $\pi$로 쓴다. 곧 $\pi = 2c$이고 $\pi / 2 = c$이다. 사영 $\pi_1$, $\pi_2$나 몫군의 표준 준동형 $\pi$와 같은 글자이지만, 아래첨자가 없고 함수로 쓰이지 않으면 이 수이다.

다음이 성립한다. 아래에서 $x$, $y$는 실수이다.

1. (정의의 근) $[0, 2]$에서 $\cos$가 $0$이 되는 점은 정확히 하나이고, 그것이 $\pi / 2$이다. $0 < \pi / 2 < 2$이고 $\cos(\pi / 2) = 0$이다.
2. (코사인의 감소와 부호)
   - (i) $0 \le x < y \le 2$이면 $\cos y < \cos x$이다. 곧 $\cos$는 $[0, 2]$에서 순감소이다.
   - (ii) $0 \le x < \pi / 2$이면 $0 < \cos x$이고, $\pi / 2 < x \le 2$이면 $\cos x < 0$이다.
   - (iii) $|x| < \pi / 2$이면 $0 < \cos x$이다.
3. (사인의 부호와 값)
   - (i) $0 < x \le \pi / 2$이면 $0 < \sin x$이고, $-\pi / 2 \le x < 0$이면 $\sin x < 0$이다.
   - (ii) $\sin(\pi / 2) = 1$이고 $\exp(i\pi / 2) = i$이다.
4. (어림) $2 < \pi < 4$이다. 곧 $1 < \pi / 2 < 2$이다.
5. (출처의 정의와 같은 수) 집합 $E = \{x \in \mathbb{R} : 0 < x \text{ 이고 } \cos x = 0\}$는 최솟값을 갖고 $\min E = \pi / 2$이다. 따라서 $\inf E = \pi / 2$이고 $\pi = 2 \inf E$이다.
6. ($[0, \pi / 2]$ 위의 코사인) $0 \le x \le \pi / 2$이면 $0 \le \cos x \le 1$이고, $\cos$를 $[0, \pi / 2]$로 제한하고 공역을 $[0, 1]$로 둔 함수 $[0, \pi / 2] \to [0, 1]$은 전단사이다.
:::

:::english
The cosine $\cos$ and sine $\sin$ are those of the entry on cosine and sine; closed and open intervals, minima and infima $\min$, $\inf$, bijections, and restrictions are those of their entries. Complex numbers and $i$, and the convention for writing real numbers where complex numbers are required, are those of the entries on complex numbers and the field of complex numbers.

**The number π.** There is exactly one element $c$ of the closed interval $[0, 2]$ with $\cos c = 0$ (item (1) below). Twice this number is called **pi** and is denoted by $\pi$; that is, $\pi = 2c$ and $\pi / 2 = c$. The same letter is used for the projections $\pi_1$, $\pi_2$ and for the canonical homomorphism $\pi$ onto a quotient group, but without a subscript and when not used as a function it denotes this number.

The following hold. Below, $x$ and $y$ are real numbers.

1. (The defining zero) $\cos$ has exactly one zero in $[0, 2]$, namely $\pi / 2$. We have $0 < \pi / 2 < 2$ and $\cos(\pi / 2) = 0$.
2. (Decrease and sign of cosine)
   - (i) If $0 \le x < y \le 2$, then $\cos y < \cos x$; that is, $\cos$ is strictly decreasing on $[0, 2]$.
   - (ii) If $0 \le x < \pi / 2$, then $0 < \cos x$; if $\pi / 2 < x \le 2$, then $\cos x < 0$.
   - (iii) If $|x| < \pi / 2$, then $0 < \cos x$.
3. (Sign and value of sine)
   - (i) If $0 < x \le \pi / 2$, then $0 < \sin x$; if $-\pi / 2 \le x < 0$, then $\sin x < 0$.
   - (ii) $\sin(\pi / 2) = 1$ and $\exp(i\pi / 2) = i$.
4. (Estimate) $2 < \pi < 4$; that is, $1 < \pi / 2 < 2$.
5. (Agreement with the source's definition) The set $E = \{x \in \mathbb{R} : 0 < x \text{ and } \cos x = 0\}$ has a minimum, and $\min E = \pi / 2$. Hence $\inf E = \pi / 2$ and $\pi = 2 \inf E$.
6. (Cosine on $[0, \pi / 2]$) If $0 \le x \le \pi / 2$, then $0 \le \cos x \le 1$, and the restriction of $\cos$ to $[0, \pi / 2]$ with codomain $[0, 1]$ is a bijection $[0, \pi / 2] \to [0, 1]$.
:::

## 직관

$\cos 0 = 1$은 양수이고, 앞 항목의 어림에서 $\cos 2 \le -1/3$은 음수입니다. 연속함수가 양수에서 음수로 바뀌었으므로 그 사이 어딘가에서 $0$을 지나고, $(0, 2]$에서는 사인이 양수라서 코사인이 계속 줄어들기만 하므로 $0$을 지나는 점은 하나뿐입니다. 이 점을 $\pi / 2$라 부르는 것이 이 항목의 정의입니다. 정해진 수를 가리켜 이름을 붙이므로 무엇을 고를 일이 없습니다.

내리막길에서 해수면 높이를 지나는 지점을 표시하는 것에 비유할 수 있습니다. 출발점(높이 $1$)은 해수면 위, 도착점(높이 $\cos 2$)은 해수면 아래이고, 길이 오르막 없이 내리막이기만 하면 해수면을 지나는 지점은 정확히 하나입니다. 출발점과 도착점의 높이가 사잇값 정리에, "내리막이기만 하다"가 (2)의 (i)에 해당합니다. 비유가 맞지 않는 곳은 길 바깥입니다. $[0, 2]$ 밖에서는 코사인이 다시 올라가 $0$을 또 지날 수 있고, 이 항목은 그 점들에 대해 아무것도 말하지 않습니다.

이름 "원주율"은 원의 둘레와 지름의 비라는 뜻이지만, 이 강의는 곡선의 길이를 다루지 않으므로 그 뜻은 이 정의의 일부도 아니고 증명된 사실도 아닙니다. 출처는 $[0, 2]$ 대신 "$\cos x = 0$인 양수 $x$ 전체의 하한"으로 정의하는데, (5)가 두 정의가 같은 수를 준다는 것을 보입니다. $x$가 음수인 근 $-\pi / 2$는 양수의 집합 $E$에 들지 않습니다.

## 성질의 증명

:::proof
"코사인과 사인의 (4)"처럼 쓴 것은 [[cosine-and-sine]], "도함수의 (4)"는 [[derivatives-of-cosine-and-sine]], "순서 성질의 (4)"는 [[order-properties-of-reals]], "절댓값의 (7)"은 [[absolute-value]]의 번호이다. 증명은 (2)의 (i)을 먼저 보이고 (1)로 간다.

**2의 (i)의 증명.** $0 \le x < y \le 2$라 하자. [[interval]]의 (1)에 의해 $[x, y]$는 구간이다. 도함수의 (1)에 의해 $\cos$는 미분가능한 함수이므로 [[derivative]]의 (2)에 의해 제한 $\cos|_{[x, y]}$는 미분가능한 함수이고 그 미분계수는 $-\sin$의 값이며, [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 연속함수이다. [[mean-value-theorem|평균값 정리]]에 의해 $\cos y - \cos x = -\sin(\xi)\,(y - x)$인 $\xi \in (x, y)$가 있다. $0 \le x < \xi < y \le 2$이므로 $0 < \xi \le 2$이고, 도함수의 (4)의 (iv)에 의해 $0 < \sin \xi$이다. 순서 성질의 (3)의 (i)에 의해 $0 < y - x$이므로 순서 성질의 (4)의 (iv)에 의해 $0 < \sin(\xi)(y - x)$이고, 순서 성질의 (3)의 (ii)에 의해 $\cos y - \cos x < 0$, 곧 $\cos y < \cos x$이다.

**1의 증명.** 코사인과 사인의 (2)에 의해 $\cos 0 = 1$이고, 도함수의 (4)의 (iv)에 의해 $\cos 2 \le -1/3 < 0$이다. 도함수의 (1)에 의해 $\cos$는 연속함수이므로 $[0, 2]$에서 연속이고, $\cos 2 < 0 < \cos 0$이므로 [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (1)에 의해 $\cos c = 0$인 $c \in (0, 2)$가 있다. $c'$도 $[0, 2]$의 원소이고 $\cos c' = 0$이라 하자. $c' < c$이면 (2)의 (i)에 의해 $\cos c < \cos c'$, 곧 $0 < 0$이 되어 순서 성질의 (1)의 (i)에 어긋나고, $c < c'$이어도 같다. 따라서 순서 성질의 (1)의 (iii)에 의해 $c' = c$이다. 그래서 정의의 $c$가 하나로 정해지고, (K…)의 계산으로 $\pi / 2 = (2c)\,2^{-1} = c$이다. $c \in (0, 2)$이므로 $0 < \pi / 2 < 2$이다.

**2의 (ii)와 (iii)의 증명.** $0 \le x < \pi / 2$이면 $\pi / 2 \le 2$이므로 (2)의 (i)에 의해 $0 = \cos(\pi / 2) < \cos x$이다. $\pi / 2 < x \le 2$이면 $0 \le \pi / 2$이므로 같은 (i)에 의해 $\cos x < \cos(\pi / 2) = 0$이다. $|x| < \pi / 2$이면 $0 \le x$일 때 [[absolute-value]]의 (1)에 의해 $x = |x| < \pi / 2$이므로 방금 보인 것이다. $x < 0$이면 절댓값의 (1)에 의해 $-x = |x|$이고 $0 < -x < \pi / 2$이므로 방금 보인 것과 코사인과 사인의 (3)에 의해 $0 < \cos(-x) = \cos x$이다.

**3의 증명.** (i) $0 < x \le \pi / 2$이면 (1)에 의해 $x < 2$이므로 도함수의 (4)의 (iv)에 의해 $0 < \sin x$이다. $-\pi / 2 \le x < 0$이면 순서 성질의 (3)의 (ii), (iii)에 의해 $0 < -x \le \pi / 2$이므로 $0 < \sin(-x) = -\sin x$(코사인과 사인의 (3))이고, 순서 성질의 (3)의 (ii)에 의해 $\sin x < 0$이다. (ii) 코사인과 사인의 (4)와 $\cos(\pi / 2) = 0$에 의해 $s = \sin(\pi / 2)$는 $ss = 1 = 1 \cdot 1$을 만족한다. (i)에 의해 $0 < s$이고 순서 성질의 (5)의 (ii)에 의해 $0 < 1$이므로, 순서 성질의 (7)의 (iv)에 의해 $s = 1$이다. 코사인과 사인의 (1)과 [[complex-field]]의 (4)의 $0 + bi = bi$, $1i = i$에 의해 $\exp(i\pi / 2) = \iota(0) + \iota(1)\, i = i$이다.

**4의 증명.** (1)에 의해 $\pi / 2 < 2$이다. $\pi / 2 \le 1$이라 하자. $\pi / 2 = 1$이면 $\cos 1 = 0$이고, $\pi / 2 < 1$이면 $1 \le 2$이므로 (2)의 (ii)에 의해 $\cos 1 < 0$이다. 어느 경우든 $\cos 1 \le 0$인데, 도함수의 (4)의 (iv)에 의해 $\cos 1 \ge 1/2 > 0$이어서 어긋난다. 따라서 순서 성질의 (1)의 (iii)에 의해 $1 < \pi / 2$이다. 양변에 $2$를 곱하면 순서 성질의 (4)의 (i)에 의해 $2 < \pi < 4$이다.

**5의 증명.** (1)에 의해 $0 < \pi / 2$이고 $\cos(\pi / 2) = 0$이므로 $\pi / 2 \in E$이다. $x \in E$라 하자. $x < \pi / 2$이면 $0 < x < \pi / 2$이므로 (2)의 (ii)에 의해 $0 < \cos x$가 되어 $\cos x = 0$과 어긋난다. 따라서 순서 성질의 (1)의 (iii)에 의해 $\pi / 2 \le x$이고, $\pi / 2$는 $E$의 하계이다. [[upper-bound-and-supremum]]의 최솟값의 정의에 의해 $\min E = \pi / 2$이고, 같은 항목의 (2)에 의해 $\inf E = \pi / 2$이다. (K…)의 계산으로 $\pi = 2 \cdot (\pi / 2) = 2 \inf E$이다.

**6의 증명.** $0 \le x \le \pi / 2$라 하자. $x < \pi / 2$이면 (2)의 (ii)에 의해 $0 < \cos x$이고, $x = \pi / 2$이면 $\cos x = 0$이므로 어느 경우든 $0 \le \cos x$이다. 코사인과 사인의 (4)에 의해 $\cos x \le 1$이다. 따라서 값이 모두 $[0, 1]$에 들므로 공역을 $[0, 1]$로 둘 수 있다. 단사: $[0, \pi / 2]$의 두 원소 $x \ne y$에 대하여 순서 성질의 (1)의 (iii)에 의해 $x < y$이거나 $y < x$이고, $\pi / 2 < 2$이므로 (2)의 (i)에 의해 두 값은 다르다. 전사: $0 \le a \le 1$이라 하자. $[0, \pi / 2]$는 [[interval]]의 (1)에 의해 구간이고($0 < \pi / 2$), $\cos$는 그 위에서 연속이며 $\cos(\pi / 2) = 0 \le a \le 1 = \cos 0$이므로 [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (2)에 의해 $\cos x = a$인 $x \in [0, \pi / 2]$가 있다. $\blacksquare$
:::

## 예시와 반례

:::example[π/2 보다 조금 작은 점과 조금 큰 점]
(4)에 의해 $1 < \pi / 2 < 2$이므로 $x = 1$에서 (2)의 (ii)는 $0 < \cos 1$을 말하고, 이것은 [[derivatives-of-cosine-and-sine|코사인과 사인의 도함수]]의 (4)의 (iv)의 $\cos 1 \ge 1/2$과 맞습니다. $x = 2$에서는 $\cos 2 < 0$이고 같은 (iv)의 $\cos 2 \le -1/3$과 맞습니다. (3)의 (i)에 의해 $\sin 1 > 0$이고 $\sin(-1) < 0$입니다.
:::

:::example[(6)으로 cos x = 1/2 인 점 찾기]
(6)에 의해 $\cos x = 1/2$인 $x \in [0, \pi / 2]$가 정확히 하나 있습니다. 그 점에서 [[cosine-and-sine|코사인과 사인]]의 (4)에 의해 $(\sin x)^2 = 3/4$이고, $\cos 0 = 1 \ne 1/2$이므로 $x \ne 0$이고 (3)의 (i)에 의해 $0 < \sin x$이므로 $\sin x = \sqrt{3}/2$입니다($(\sqrt{3}/2)^2 = 3/4$와 [[square-root-exists]]의 (1)의 유일성). 이 점이 무엇인지($\pi$를 써서 어떻게 적히는지)는 이 항목만으로는 알 수 없습니다.
:::

:::counterexample[구간을 −2 부터로 넓히면 근이 둘인 예]
(1)의 "정확히 하나"는 $[0, 2]$ 안에서의 말입니다. $[-2, 2]$에서는 근이 둘입니다. [[cosine-and-sine|코사인과 사인]]의 (3)에 의해 $\cos(-\pi / 2) = \cos(\pi / 2) = 0$이고, $-\pi / 2 \ne \pi / 2$이며 (4)에 의해 $-2 < -\pi / 2$이기 때문입니다. 같은 이유로 (2)의 (i)의 순감소도 $[-2, 2]$로 넓히면 성립하지 않습니다. $-1 < 0$이지만 $\cos(-1) = \cos 1 < \cos 0$입니다.
:::

## 확인 질문

:::check[$\cos x = 0$이고 $0 \le x \le 1$인 실수 $x$가 있는가?]
없습니다. (4)에 의해 $1 < \pi / 2$이므로 $0 \le x \le 1$이면 $0 \le x < \pi / 2$이고, (2)의 (ii)에 의해 $0 < \cos x$입니다.
:::

:::check[$\exp(-i\pi / 2)$는 무엇인가?]
[[cosine-and-sine|코사인과 사인]]의 (1)과 (3)에 의해 $\exp(-i\pi / 2) = \cos(\pi / 2) - i \sin(\pi / 2)$이고, (1)과 (3)의 (ii)에 의해 이것은 $0 - 1 \cdot i = -i$입니다.
:::
