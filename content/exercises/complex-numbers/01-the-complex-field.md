---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 3 (p.222) — 문제 '세제곱이 1 인 복소수'의 (2)와 같은 결론(출처는 1 의 세제곱근이 (−1 ± i√3)/2 와 1 임을 보이라고 한다)"
added: 2026-11-26
---

:::exercise[세제곱이 1 인 복소수]
1. 실수 $a$, $b$에 대하여 $z = a + bi$이면
   $$
   \begin{aligned}
   \operatorname{Re}(z^3) &= a^3 - 3ab^2, \\
   \operatorname{Im}(z^3) &= 3a^2 b - b^3
   \end{aligned}
   $$
   임을 보여라.
2. $z^3 = 1$인 복소수 $z$를 모두 구하라.
3. (2)에서 구한 복소수 가운데 실수인 복소수가 아닌 것에 대하여, (1)의 두 식으로 $z^3$을 다시 계산해 $1$이 되는 것을 확인하라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산(덧셈과 곱셈의 교환·결합·분배법칙, $0$, $1$, $-z$, 뺄셈, 역원)은 [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$가 체라는 것, 곧 [[ring|환]]과 [[field|가역원과 체]]의 정의와 [[ring-basic-properties|환의 기본 성질]]로 한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 하고, 실수를 복소수 자리에 쓰는 것은 복소수체의 (3)의 약속대로 읽는다. "실수의 거듭제곱"은 [[power-of-a-real-number|실수의 거듭제곱]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이다.

**(1)** 복소수체의 (4)에 의해 $\operatorname{Re} z = a$, $\operatorname{Im} z = b$이다. 거듭제곱의 (1)에 의해 $z^2 = zz$이고 $z^3 = z^2 z$이다. [[complex-number|복소수]]의 (2)와 실수의 거듭제곱의 (1)에 의해
$$
\begin{aligned}
\operatorname{Re}(z^2) &= aa - bb = a^2 - b^2, \\
\operatorname{Im}(z^2) &= ab + ba = 2ab
\end{aligned}
$$
이다((K1), (K3)). 다시 복소수의 (2)를 $z^2$과 $z$에 쓰면, (K1)–(K3)과 실수의 거듭제곱의 (1)의 $a^3 = a^2 a$, $b^3 = b^2 b$에 의해
$$
\begin{aligned}
\operatorname{Re}(z^3) &= (a^2 - b^2)\,a - (2ab)\,b \\
&= a^3 - 3ab^2, \\
\operatorname{Im}(z^3) &= (a^2 - b^2)\,b + (2ab)\,a \\
&= 3a^2 b - b^3
\end{aligned}
$$
이다.

**(2)** 모든 복소수 $z$에서 분배법칙과 환의 기본 성질의 (4)에 의해
$$
\begin{aligned}
&(z - 1)(zz + z + 1) \\
&\quad = (zzz + zz + z) - (zz + z + 1) \\
&\quad = z^3 - 1
\end{aligned}
$$
이다(거듭제곱의 (1)의 $z^3 = (zz)z$). 가역원과 체의 (3)에 의해 체 $\mathbb{C}$는 [[integral-domain|정역]]이므로, $z^3 = 1$, 곧 $z^3 - 1 = 0$인 것은 정확히 $z - 1 = 0$이거나 $zz + z + 1 = 0$일 때이다. 앞의 것은 $z = 1$이다.

뒤의 것에는 [[complex-arithmetic-examples|복소수 계산의 예]]의 (4)를 $\alpha = \beta = \gamma = 1$에 쓴다. $D = 1 \cdot 1 - 4 \cdot 1 \cdot 1 = -3$이다. $u = \sqrt{3}\, i$로 두면 [[square-root-exists|제곱근]]의 (1)의 $\sqrt{3}\sqrt{3} = 3$과 복소수체의 (5)의 $ii = -1$, 복소수체의 (2)에 의해 $uu = (\sqrt{3}\sqrt{3})(ii) = 3 \cdot (-1) = -3 = D$이다. 따라서 $zz + z + 1 = 0$인 복소수 $z$는 정확히
$$
\begin{aligned}
w_1 &= \frac{-1 + \sqrt{3}\, i}{2} = -\frac{1}{2} + \frac{\sqrt{3}}{2} i, \\
w_2 &= \frac{-1 - \sqrt{3}\, i}{2} = -\frac{1}{2} - \frac{\sqrt{3}}{2} i
\end{aligned}
$$
이고(복소수체의 (2)의 (i)에 의해 $\iota(2)^{-1} = \iota(2^{-1})$), $D \ne 0$이므로 같은 항목의 (4)에 의해 $w_1 \ne w_2$이다. 제곱근의 (1)에 의해 $0 < \sqrt{3}$이므로 $w_1$, $w_2$의 허수부는 $0$이 아니고, 복소수체의 (4)에 의해 둘 다 $1 = 1 + 0i$와 다르다. 따라서 $z^3 = 1$인 복소수는 정확히 $1$, $w_1$, $w_2$의 셋이다.

**(3)** 실수인 복소수가 아닌 것은 $w_1$과 $w_2$이다. $w_1$에서 $a = -\tfrac{1}{2}$, $b = \tfrac{\sqrt{3}}{2}$이다. 실수의 거듭제곱의 (2)의 (iii)과 제곱근의 (1)에 의해 $b^2 = 3 \cdot \tfrac{1}{4} = \tfrac{3}{4}$이고, $a^2 = \tfrac{1}{4}$, $a^3 = -\tfrac{1}{8}$이다. (1)의 식에 넣으면
$$
\begin{aligned}
a^3 - 3ab^2 &= -\tfrac{1}{8} - 3 \cdot \bigl(-\tfrac{1}{2}\bigr) \cdot \tfrac{3}{4} \\
&= -\tfrac{1}{8} + \tfrac{9}{8} = 1, \\
3a^2 b - b^3 &= 3 \cdot \tfrac{1}{4} \cdot \tfrac{\sqrt{3}}{2} - \tfrac{3}{4} \cdot \tfrac{\sqrt{3}}{2} \\
&= 0
\end{aligned}
$$
이다($b^3 = b^2 b$). $w_2$에서는 $b = -\tfrac{\sqrt{3}}{2}$이고, (K12)의 (iii)에 의해 $b^2$은 같으며 $3a^2 b - b^3 = (3a^2 - b^2)\,b$는 $3 \cdot \tfrac{1}{4} - \tfrac{3}{4} = 0$을 곱한 것이라 $0$이다. 두 경우 모두 복소수의 (1)과 복소수체의 (4)에 의해 $z^3 = 1 + 0i = 1$이다.
:::

:::exercise[켤레가 제곱과 같은 복소수]
$\overline{z} = zz$인 복소수 $z$를 모두 구하라. (문제 1의 결과를 써도 된다.)
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "거듭제곱"은 [[power-of-a-complex-number|복소수의 거듭제곱]]의 번호이고, $\mathbb{C}$와 실수의 계산은 문제 1의 풀이 첫머리와 같다. 문제 1의 $w_1$, $w_2$를 그대로 쓴다. 답은 $0$, $1$, $w_1$, $w_2$의 넷이다.

**이 넷만 될 수 있다.** $\overline{z} = zz$라 하자. 절댓값의 (2)와 (3)에 의해 $|z| = |\overline{z}| = |zz| = |z|\,|z|$이다. (K3), (K4), (K12)의 (ii)에 의해 $|z|\,(|z| - 1) = |z|\,|z| - |z| = 0$이므로 (K10)과 (K12)의 (v)에 의해 $|z| = 0$이거나 $|z| = 1$이다.

- $|z| = 0$이면 절댓값의 (1)에 의해 $z = 0$이다.
- $|z| = 1$이면 절댓값의 (2)에 의해 $z\overline{z} = \iota(|z|^2) = \iota(1) = 1$이다([[complex-field|복소수체]]의 (2)의 (i)). 거듭제곱의 (1)에 의해 $z^3 = (zz)z = \overline{z} z = z\overline{z} = 1$이므로, 문제 1의 (2)에 의해 $z$는 $1$, $w_1$, $w_2$ 가운데 하나이다.

**넷 모두 된다.** [[complex-conjugate|켤레복소수]]의 (4)에 의해 실수인 복소수 $0$은 $\overline{0} = 0 = 0 \cdot 0$을 만족한다. $w$가 $1$, $w_1$, $w_2$ 가운데 하나라 하자. 문제 1의 (2)에 의해 $w^3 = 1$이다. 거듭제곱의 (3)의 (i)에 의해 $0^3 = 0 \ne 1$이므로 $w \ne 0$이다. 거듭제곱의 (4)와 절댓값의 (5)에 의해 $|w|^3 = |w^3| = |1| = 1 = 1^3$이고, $0 \le |w|$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (iii)에 의해 $|w| = 1$이다. 그러면 절댓값의 (4)에 의해 $w^{-1} = \iota\bigl((1^2)^{-1}\bigr)\overline{w} = \overline{w}$이다. 한편 $w\,(ww) = w^3 = 1$이므로 [[field|가역원과 체]]의 (5)에 의해 $ww = w^{-1} \cdot 1 = w^{-1}$이다. 따라서 $\overline{w} = ww$이다.
:::

:::exercise[합과 차의 절댓값]
$z$, $w$를 복소수라 하자.

1. $|z + w|^2 + |z - w|^2 = 2|z|^2 + 2|w|^2$임을 보여라.
2. $|z + w| = |z - w|$인 것은 정확히 $(\operatorname{Re} z)(\operatorname{Re} w) + (\operatorname{Im} z)(\operatorname{Im} w) = 0$일 때임을 보여라.
3. $z = 2 + i$일 때 $|w| = |z|$이고 $|z + w| = |z - w|$인 복소수 $w$를 모두 구하고, 그것이 $iz$와 $-iz$임을 보여라.
:::

:::solution
아래에서 "삼각부등식"은 [[complex-triangle-inequality|복소수의 삼각부등식]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. $p = \operatorname{Re}(z\overline{w})$로 둔다.

**(1)** 삼각부등식의 (1)에 의해 $|z + w|^2 = |z|^2 + |w|^2 + 2p$이고 $|z - w|^2 = |z|^2 + |w|^2 - 2p$이다. 두 식을 더하면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K5)에 의해 $2p$와 $-2p$가 지워져 $2|z|^2 + 2|w|^2$이다.

**(2)** 같은 두 식을 빼면 $|z + w|^2 - |z - w|^2 = 4p$이다. $|z + w| = |z - w|$이면 두 제곱이 같으므로 $4p = 0$이고, $4 \ne 0$이므로 (K10)에 의해 $p = 0$이다. 거꾸로 $p = 0$이면 $|z + w|^2 = |z - w|^2$이고, 절댓값의 (1)에 의해 두 절댓값은 $0$ 이상이므로 순서 성질의 (7)의 (iv)에 의해 $|z + w| = |z - w|$이다. 삼각부등식의 (1)에 의해 $p = (\operatorname{Re} z)(\operatorname{Re} w) + (\operatorname{Im} z)(\operatorname{Im} w)$이므로 주장이 성립한다.

**(3)** $w = a + bi$($a$, $b$는 실수)로 쓰면 [[complex-field|복소수체]]의 (4)에 의해 $\operatorname{Re} w = a$, $\operatorname{Im} w = b$이다. 절댓값의 (1)에 의해 $|z|^2 = 4 + 1 = 5$이고 $|w|^2 = a^2 + b^2$이며, 순서 성질의 (7)의 (iv)에 의해 $|w| = |z|$인 것은 정확히 $a^2 + b^2 = 5$일 때이다. (2)에 의해 $|z + w| = |z - w|$인 것은 정확히 $2a + b = 0$, 곧 $b = -2a$일 때이다. 두 조건을 함께 쓰면 $a^2 + 4a^2 = 5a^2 = 5$이므로 $a^2 = 1$이고, $(a - 1)(a + 1) = a^2 - 1 = 0$이므로 (K10)에 의해 $a = 1$이거나 $a = -1$이다. 따라서 $w = 1 - 2i$이거나 $w = -1 + 2i$이고, 거꾸로 이 둘은 $a^2 + b^2 = 1 + 4 = 5$, $2a + b = 0$을 만족하므로 두 조건을 만족한다.

한편 복소수체의 (5)의 $ii = -1$에 의해 $iz = i(2 + i) = 2i + ii = -1 + 2i$이고 $-iz = 1 - 2i$이다. 곧 구한 두 복소수는 $iz$와 $-iz$이다.
:::

:::exercise[단위원 위의 점에서 두 거리가 같은 것]
$z$, $a$를 복소수라 하고 $|z| = 1$이라 하자.

1. $|z - a| = |1 - \overline{a}\,z|$임을 보여라.
2. $1 - \overline{a}\,z \ne 0$이면 $\left| \dfrac{z - a}{1 - \overline{a}\,z} \right| = 1$임을 보여라.
3. $|a| \ne 1$이면 $1 - \overline{a}\,z \ne 0$임을 보여라. 또 $a = z = 1$이면 $1 - \overline{a}\,z = 0$임을 보여라.
:::

:::solution
아래에서 "켤레"는 [[complex-conjugate|켤레복소수]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이고, $\mathbb{C}$ 안의 계산은 문제 1의 풀이 첫머리와 같다.

**(1)** 절댓값의 (2)에 의해 $z\overline{z} = \iota(|z|^2) = \iota(1) = 1$이다. 따라서 곱셈의 교환법칙과 환의 기본 성질의 (4), 켤레의 (2)에 의해
$$
\begin{aligned}
1 - \overline{a}\,z &= z\overline{z} - z\overline{a} \\
&= z\,(\overline{z} - \overline{a}) = z\,\overline{z - a}
\end{aligned}
$$
이다. 절댓값의 (3)과 (2)에 의해 $|1 - \overline{a}\,z| = |z|\,\bigl|\overline{z - a}\bigr| = 1 \cdot |z - a| = |z - a|$이다.

**(2)** 절댓값의 (1)에 의해 $|1 - \overline{a}\,z| \ne 0$이고, 절댓값의 (4)와 (1)에 의해 구하는 절댓값은 $|z - a|\,|1 - \overline{a}\,z|^{-1} = 1$이다.

**(3)** 절댓값의 (3), (2)에 의해 $|\overline{a}\,z| = |a|\,|z| = |a|$이다. $1 - \overline{a}\,z = 0$이라면 $\overline{a}\,z = 1$이고, 절댓값의 (5)에 의해 $|a| = |1| = 1$이 되어 가정에 어긋난다. 따라서 $1 - \overline{a}\,z \ne 0$이다. $a = z = 1$이면 켤레의 (4)에 의해 $\overline{1} = 1$이므로 $1 - \overline{a}\,z = 1 - 1 = 0$이다. 이때 $|z| = 1$이고 $|a| = 1$이어서 (3)의 가정은 성립하지 않는다.
:::

:::exercise[두 점 1, −1 까지의 거리의 합이 2 인 복소수]
$|z - 1| + |z + 1| = 2$인 것은 정확히 $-1 \le x \le 1$인 실수 $x$가 있어 $z = \iota(x)$일 때임을 보여라.
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "실수의 절댓값"은 [[absolute-value|절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, $\mathbb{C}$와 실수의 계산은 문제 1의 풀이 첫머리와 같다.

**$z = \iota(x)$, $-1 \le x \le 1$이면 등식이 성립한다.** [[complex-field|복소수체]]의 (2)의 (i)에 의해 $z - 1 = \iota(x - 1)$, $z + 1 = \iota(x + 1)$이고, 절댓값의 (5)에 의해 $|z - 1| = |x - 1|$, $|z + 1| = |x + 1|$이다. 순서 성질의 (3)의 (i)에 의해 $0 \le 1 - x$이고 $0 \le x + 1$이므로, 실수의 절댓값의 (3), (1)에 의해 $|x - 1| = |1 - x| = 1 - x$, $|x + 1| = x + 1$이고 합은 $2$이다.

**등식이 성립하면 $z$는 그런 꼴이다.** $p = 1 - z$, $q = z + 1$로 두면 $p + q = 2$이고, 절댓값의 (2)에 의해 $|p| = |-(z - 1)| = |z - 1|$이다. [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)와 절댓값의 (5), 실수의 절댓값의 (1)에 의해
$$
\begin{aligned}
2 &= |2| = |p + q| \le |p| + |q| \\
&= |z - 1| + |z + 1| = 2
\end{aligned}
$$
이므로, 순서 성질의 (1)의 (ii)에 의해 $|p + q| = |p| + |q|$이다. 삼각부등식의 (3)에 의해 $q = 0$이거나, $0 \le c$이고 $p = cq$인 실수 $c$가 있다.

- $q = 0$이면 $z = -1 = \iota(-1)$이고 $x = -1$로 두면 된다.
- $p = cq$이면 $1 - z = cz + c$이므로 $1 - c = (1 + c)\,z$이다. 순서 성질의 (2)의 (iii)과 (5)의 (ii)에 의해 $0 < 1 \le 1 + c$이므로 $1 + c \ne 0$이고, 복소수체의 (2)의 (i)에 의해 $z = \iota\bigl((1 - c)(1 + c)^{-1}\bigr)$이다. $x = (1 - c)(1 + c)^{-1}$로 두면 $(1 + c)(1 + c)^{-1} = 1$과 (K3), (K12)의 (i)에 의해 $x + 1 = 2(1 + c)^{-1}$이고 $1 - x = 2c\,(1 + c)^{-1}$이다. 순서 성질의 (6)의 (i)에 의해 $0 < (1 + c)^{-1}$이므로, (4)의 (iv)에 의해 $0 < x + 1$이고 $0 \le 1 - x$이다. 곧 $-1 < x \le 1$이다.

따라서 두 경우 모두 $-1 \le x \le 1$인 실수 $x$로 $z = \iota(x)$이다.
:::

:::exercise[절댓값으로 정한 관계가 만족하는 순서의 조건]
$\mathbb{C}$ 위의 관계 $\lhd$를, 복소수 $z$, $w$에 대하여 $z \lhd w$인 것이 정확히 $|z| < |w|$일 때로 정하자. [[complex-field|복소수체]]의 (6)의 네 조건, 곧 [[real-order-axioms|실수의 순서]]의 (W1)–(W4)에서 $\mathbb{R}$, $<$와 실수의 연산을 $\mathbb{C}$, $\lhd$와 $\mathbb{C}$의 연산으로 바꾼 것 가운데 $\lhd$가 만족하는 것과 만족하지 않는 것을 가려라. 만족하지 않는 조건에는 그 조건이 깨지는 복소수를 들어라.
:::

:::solution
$\lhd$는 (W2)와 (W4)를 만족하고 (W1)과 (W3)을 만족하지 않는다. 아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

- **(W2)** $z \lhd w$이고 $w \lhd u$이면 $|z| < |w|$이고 $|w| < |u|$이므로, 실수의 (W2)에 의해 $|z| < |u|$, 곧 $z \lhd u$이다.
- **(W4)** $0 \lhd z$이고 $0 \lhd w$라 하자. 절댓값의 (1)에 의해 $|0| = 0$이므로 $0 < |z|$이고 $0 < |w|$이다. 실수의 (W4)와 절댓값의 (3)에 의해 $0 < |z|\,|w| = |zw|$, 곧 $0 \lhd zw$이다.
- **(W1)이 깨지는 예.** $z = 1$, $w = i$이면 절댓값의 (5)에 의해 $|1| = 1$, $|i| = 1$이다. 순서 성질의 (1)의 (i)에 의해 $1 < 1$은 성립하지 않으므로 $1 \lhd i$도 $i \lhd 1$도 성립하지 않는다. [[complex-number|복소수]]의 (1)에 의해 $1 = (1, 0)$과 $i = (0, 1)$은 실수부가 달라 $1 \ne i$이다. 따라서 세 가지 가운데 어느 것도 성립하지 않는다.
- **(W3)이 깨지는 예.** $z = 0$, $w = 1$, 더하는 수를 $-1$로 두자. 순서 성질의 (5)의 (ii)에 의해 $|0| = 0 < 1 = |1|$이므로 $0 \lhd 1$이다. 그런데 $0 + (-1) = -1$이고 $1 + (-1) = 0$이며, 절댓값의 (5)에 의해 $|-1| = 1$, $|0| = 0$이다. $-1 \lhd 0$이려면 $1 < 0$이어야 하는데, $0 < 1$이므로 순서 성질의 (1)의 (i)에 의해 그렇지 않다.

두 조건이 깨지므로 이것은 복소수체의 (6)과 어긋나지 않는다.
:::
