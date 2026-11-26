---
title: 복소수 계산의 예
title_en: Examples of Complex Arithmetic
aliases: [복소수의 제곱근, 복소수 계수의 이차방정식, 근의 공식, square root of a complex number, complex quadratic equation]
kind: proposition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 2 − i 와 3 + 4i 의 합·차·곱·역수·몫·켤레·절댓값, i 와 1 + i 의 거듭제곱을 계산한다. 0 이 아닌 복소수 a + bi 의 제곱근은 정확히 둘이고 실수부와 허수부를 a, b, |a + bi| 의 제곱근으로 나타낼 수 있음을 보이고, 그것으로 복소수 계수의 이차방정식의 근을 구한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, division-theorem, ring, ring-basic-properties, integral-domain, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, Example 4.16 (p.49), Example 4.23 (p.52), Example 4.26 (p.53); 4.5절 Exercises 3, 15, 18 (p.56–57); 부록 B 4.5.18 의 답 (p.321); 17.6절 Additional Exercises 1, 3 (p.222)
    checked: original
    note: "(1)은 Example 4.16(p.49)이 z = 2 + 3i, w = 1 − 2i 로 합, 곱, 역수, 절댓값, 켤레를 구한 것과 같은 종류의 계산이고, 이 항목은 다른 두 수 2 − i, 3 + 4i 를 쓴다. 4.5절 연습문제 15(p.56)도 같은 종류의 계산이다. (2)의 (1 + i)⁻¹ = (1 − i)/2 는 연습문제 18(a)(p.57)의 답(부록 p.321)이고, (1 + i)ⁿ 은 Example 4.23(p.52)의 (1 + i)^{10} 과 같은 대상이다(출처는 극형식과 드무아브르 정리로 구하고, 이 항목은 (1 + i)² = 2i 와 지수법칙으로 구한다). 17.6절 연습문제 1(p.222)은 이차방정식 ax² + bx + c = 0 을 완전제곱으로 풀어 근의 공식을 얻게 하고, 판별식 Δ = b² − 4ac 가 양수이면 서로 다른 두 실근, 0 이면 중근, 음수이면 서로 다른 두 허근이 있다고 적는다. (4)는 같은 완전제곱의 발상을 복소수 계수에 쓰고, 근호 대신 (3)의 제곱근을 쓴다. 같은 절 연습문제 3(p.222)의 1 의 세제곱근 (−1 ± i√3)/2 는 z² + z + 1 = 0 의 두 근으로, (4)로 구할 수 있는 같은 대상이다. 예시 '5 − 12i, i, −1 의 제곱근'의 i 의 제곱근 √(1/2) + √(1/2) i 는 Example 4.26(p.53)의 원시 8제곱근 ω = √2/2 + (√2/2)i 와 같은 수이고, 4.5절 연습문제 3(l)(p.56)은 (1 + i)/√2 가 생성하는 ℂ* 의 부분군을 묻는다."
  - ref: lebl-basic-analysis-2
    loc: 11.1.1절 The complex plane (p.139)
    checked: original
    note: "출처는 p.139 에서 i 가 z² + 1 = 0 의 해라고 적는다. (3)을 w = −1 에 쓴 것이 그 두 해 ±i 이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(삼각부등식의 등호 조건, 예의 거듭제곱 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$와 체 $\mathbb{C}$의 연산, $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴, 켤레, 절댓값, 거듭제곱은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]], [[power-of-a-complex-number]]의 것이다. 제곱근 $\sqrt{t}$는 $0 \le t$인 실수에만 쓰는 [[square-root-exists]]의 것이다.

1. (사칙연산) $z = 2 - i$, $w = 3 + 4i$이면
   $$
   \begin{aligned}
   z + w &= 5 + 3i, \\
   z - w &= -1 - 5i, \\
   zw &= 10 + 5i, \\
   w^{-1} &= \tfrac{3}{25} - \tfrac{4}{25} i, \\
   z / w &= \tfrac{2}{25} - \tfrac{11}{25} i, \\
   \overline{zw} &= 10 - 5i
   \end{aligned}
   $$
   이고, $|z| = \sqrt{5}$, $|w| = 5$, $|zw| = 5\sqrt{5}$이다.
2. ($1 + i$의 거듭제곱) $(1 + i)^2 = 2i$, $(1 + i)^4 = -4$, $(1 + i)^{-1} = \tfrac{1}{2} - \tfrac{1}{2} i$이다. 모든 정수 $k$에서 $(1 + i)^{4k} = (-4)^k$이다. 여기서 $k < 0$이면 오른쪽은 실수 $(-4)^{-k}$의 역수를 옮긴 것이다.
3. (복소수의 제곱근) $a$, $b$를 실수, $w = a + bi$라 하자.
   - (i) $w = 0$이면 $zz = w$인 복소수 $z$는 $0$뿐이다.
   - (ii) $w \ne 0$이면 $0 \le |w| + a$이고 $0 \le |w| - a$이다. $0 \le b$이면 $s = 1$, $b < 0$이면 $s = -1$로 두고
     $$
     z_0 = \sqrt{\tfrac{|w| + a}{2}} + s \sqrt{\tfrac{|w| - a}{2}}\, i
     $$
     라 하면, $zz = w$인 복소수 $z$는 정확히 $z_0$과 $-z_0$이고 $z_0 \ne -z_0$이다.
4. (이차방정식) $\alpha$, $\beta$, $\gamma$가 복소수이고 $\alpha \ne 0$이라 하자. $D = \beta\beta - 4\alpha\gamma$로 두고, $u$를 $uu = D$인 복소수라 하자((3)에 의해 그런 $u$가 있다). 그러면 $\alpha zz + \beta z + \gamma = 0$인 복소수 $z$는 정확히
   $$
   z = \frac{-\beta + u}{2\alpha}, \qquad z = \frac{-\beta - u}{2\alpha}
   $$
   이다. 이 둘이 같은 것은 정확히 $D = 0$일 때이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$, the operations of the field $\mathbb{C}$, $\iota$, the convention for writing real numbers where complex numbers are required, the form $a + bi$, conjugates, moduli, and powers are those of their entries. The square root $\sqrt{t}$ is that of the entry on square roots and is used only for real $t \ge 0$.

1. (Arithmetic) If $z = 2 - i$ and $w = 3 + 4i$, then
   $$
   \begin{aligned}
   z + w &= 5 + 3i, \\
   z - w &= -1 - 5i, \\
   zw &= 10 + 5i, \\
   w^{-1} &= \tfrac{3}{25} - \tfrac{4}{25} i, \\
   z / w &= \tfrac{2}{25} - \tfrac{11}{25} i, \\
   \overline{zw} &= 10 - 5i,
   \end{aligned}
   $$
   and $|z| = \sqrt{5}$, $|w| = 5$, $|zw| = 5\sqrt{5}$.
2. (Powers of $1 + i$) $(1 + i)^2 = 2i$, $(1 + i)^4 = -4$, and $(1 + i)^{-1} = \tfrac{1}{2} - \tfrac{1}{2} i$. For every integer $k$, $(1 + i)^{4k} = (-4)^k$; when $k < 0$, the right side is the image of the reciprocal of the real number $(-4)^{-k}$.
3. (Square roots of complex numbers) Let $a$, $b$ be real numbers and $w = a + bi$.
   - (i) If $w = 0$, the only complex number $z$ with $zz = w$ is $0$.
   - (ii) If $w \ne 0$, then $0 \le |w| + a$ and $0 \le |w| - a$. Put $s = 1$ if $0 \le b$ and $s = -1$ if $b < 0$, and let
     $$
     z_0 = \sqrt{\tfrac{|w| + a}{2}} + s \sqrt{\tfrac{|w| - a}{2}}\, i.
     $$
     Then the complex numbers $z$ with $zz = w$ are exactly $z_0$ and $-z_0$, and $z_0 \ne -z_0$.
4. (Quadratic equations) Let $\alpha$, $\beta$, $\gamma$ be complex numbers with $\alpha \ne 0$. Put $D = \beta\beta - 4\alpha\gamma$ and let $u$ be a complex number with $uu = D$ (such a $u$ exists by (3)). Then the complex numbers $z$ with $\alpha zz + \beta z + \gamma = 0$ are exactly
   $$
   z = \frac{-\beta + u}{2\alpha}, \qquad z = \frac{-\beta - u}{2\alpha}.
   $$
   These two are equal exactly when $D = 0$.
:::

## 직관

(1)과 (2)는 앞 항목들의 정의와 성질을 실제 수에 써 본 것입니다. 역수와 몫은 [[modulus-of-complex-number|복소수의 절댓값]]의 $w^{-1} = \overline{w} / |w|^2$로 구하면, "분모의 켤레를 곱해 분모를 실수로 만든다"는 손계산과 같은 일이 됩니다.

(3)은 실수에서 음수에는 제곱근이 없던 것과 달리, 복소수에서는 $0$이 아닌 모든 수가 제곱근을 정확히 둘 가진다는 것입니다. $z = x + yi$를 제곱하면 실수부 $x^2 - y^2$와 허수부 $2xy$가 나오므로, 이것을 $a$, $b$와 같게 하는 $x$, $y$를 찾으면 됩니다. $x^2$과 $y^2$은 합이 $|w|$(절댓값이 곱을 보존하므로 $|z|^2 = |w|$)이고 차가 $a$이므로 그 둘로 정해지고, $x$와 $y$의 부호는 곱 $2xy$가 $b$와 같은 부호가 되게 고릅니다. 그것이 $s$입니다. $b = 0$이고 $a > 0$이면 $s = 1$이어도 $y = 0$이므로 부호는 상관없습니다.

(4)는 중학교에서 배우는 완전제곱이 복소수 계수에서도 그대로 통한다는 것입니다. 실수에서는 판별식이 음수이면 근이 없었지만, 복소수에서는 (3)이 판별식의 제곱근을 언제나 주므로 근이 언제나 있습니다.

## 증명

:::idea
(1), (2)는 정의대로 계산한다. (3)은 $z_0z_0 = w$를 실수부와 허수부로 확인하고, $zz = z_0z_0$이면 $(z - z_0)(z + z_0) = 0$이므로 체가 정역이라는 것에서 $z = \pm z_0$이다. (4)는 $\alpha zz + \beta z + \gamma$를 완전제곱 꼴로 바꾸어 (3)과 같은 논법을 쓴다.
:::

:::hint
$z_0 = x + yi$이면 $z_0z_0$의 허수부는 $2xy$이다. $x$와 $y$의 곱의 제곱근을 [[square-root-exists|제곱근]]의 (2)로 하나로 묶는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (7)"은 [[order-properties-of-reals]], "절댓값의 (5)"는 [[absolute-value]], "제곱근의 (2)"는 [[square-root-exists]]의 번호이다. "복소수의 (2)", "복소수체의 (1)", "켤레의 (1)", "모듈러스의 (4)", "거듭제곱의 (6)"은 [[complex-number]], [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]], [[power-of-a-complex-number]]의 번호이다. 복소수의 곱은 복소수의 (2)로, $a + bi$의 실수부와 허수부는 복소수체의 (4)로 계산한다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 실수 $a$에서 $a^2 = aa$이다.

**1의 증명.** $z = (2, -1)$, $w = (3, 4)$이다. 덧셈의 정의와 복소수체의 (1)에 의해 $z + w = (5, 3)$, $z - w = (2 - 3, -1 - 4) = (-1, -5)$이다. 곱셈의 정의에 의해 $zw = (2 \cdot 3 - (-1) \cdot 4,\ 2 \cdot 4 + (-1) \cdot 3) = (10, 5)$이다. $|w| = \sqrt{9 + 16} = \sqrt{25} = 5$($5 \cdot 5 = 25$, $0 \le 5$이고 제곱근은 하나뿐)이므로 모듈러스의 (4)에 의해 $w^{-1} = \iota(25^{-1})(3 - 4i) = \tfrac{3}{25} - \tfrac{4}{25}i$이다. 곱셈의 정의에 의해
$$
\begin{aligned}
z / w &= z w^{-1} \\
&= \bigl(2 \cdot \tfrac{3}{25} - (-1)(-\tfrac{4}{25}), \\
&\qquad 2(-\tfrac{4}{25}) + (-1)\tfrac{3}{25}\bigr) \\
&= \bigl(\tfrac{2}{25}, -\tfrac{11}{25}\bigr)
\end{aligned}
$$
이다. 켤레의 (1)에 의해 $\overline{zw} = 10 - 5i$이다. $|z| = \sqrt{4 + 1} = \sqrt{5}$이고, 모듈러스의 (3)에 의해 $|zw| = |z|\,|w| = 5\sqrt{5}$이다.

**2의 증명.** 곱셈의 정의에 의해 $(1 + i)(1 + i) = (1 - 1, 1 + 1) = (0, 2) = 2i$이고, 거듭제곱의 (1)에 의해 이것이 $(1 + i)^2$이다. 거듭제곱의 (3), (5), (6)에 의해 $(1 + i)^4 = ((1 + i)^2)^2 = (2i)^2 = 2^2 i^2 = 4 \cdot (-1) = -4$이다. $|1 + i|^2 = 1 + 1 = 2$이므로 모듈러스의 (4)에 의해 $(1 + i)^{-1} = \iota(2^{-1})(1 - i) = \tfrac{1}{2} - \tfrac{1}{2}i$이다. $1 + i \ne 0$이므로 거듭제곱의 (3)의 (ii)에 의해 모든 정수 $k$에서 $(1 + i)^{4k} = ((1 + i)^4)^k = \iota(-4)^k$이고, 거듭제곱의 (5)에 의해 $k \ge 0$이면 이것은 $\iota((-4)^k)$, $k < 0$이면 $\iota\bigl(((-4)^{-k})^{-1}\bigr)$이다.

**3의 증명.** (i) $z = 0$이면 $zz = 0$이다([[ring-basic-properties|환의 기본 성질]]의 (1)). $zz = 0$이면 [[field|가역원과 체]]의 (3)에 의해 체 $\mathbb{C}$는 [[integral-domain|정역]]이므로 $z = 0$이다.

(ii) $w = (a, b)$이다. 모듈러스의 (6)에 의해 $|a| \le |w|$이므로 절댓값의 (7)에 의해 $-|w| \le a \le |w|$이고, [[order-properties-of-reals]]의 (3)의 (i)과 (2)에 의해 $0 \le |w| + a$, $0 \le |w| - a$이다. 순서 성질 (10), (6)의 (i)에 의해 $0 < 2^{-1}$이므로 두 수 $P = (|w| + a)/2$, $Q = (|w| - a)/2$도 $0$ 이상이고(순서 성질 (4)의 (iii)), $x = \sqrt{P}$, $y = s\sqrt{Q}$로 두면 $z_0 = (x, y)$이다.

$x^2 = P$이고 $y^2 = ss\,Q = Q$이므로($ss = 1$) $x^2 - y^2 = P - Q = a$이다. 또 $PQ = (|w|^2 - a^2)/4$이고 모듈러스의 (1)에 의해 $|w|^2 = a^2 + b^2$이므로 $PQ = b^2/4 = (b/2)(b/2)$이다. 제곱근의 (2)와 절댓값의 (5), (2)에 의해 $\sqrt{P}\sqrt{Q} = \sqrt{PQ} = \sqrt{|b/2|\,|b/2|} = |b/2| = |b|/2$이다(절댓값의 (4)). 따라서 $2xy = 2s\sqrt{P}\sqrt{Q} = s\,|b|$이고, 절댓값의 (1)에 의해 $0 \le b$이면 $s|b| = b$, $b < 0$이면 $s|b| = -(-b) = b$이다. 곱셈의 정의에 의해 $z_0z_0 = (x^2 - y^2,\ 2xy) = (a, b) = w$이다.

$z$가 복소수이면 곱셈의 교환법칙과 분배법칙에 의해 $(z - z_0)(z + z_0) = zz - z_0z_0$이다. 따라서 $zz = w$인 것은 정확히 $(z - z_0)(z + z_0) = 0$일 때이고, (i)의 정역의 성질에 의해 정확히 $z = z_0$이거나 $z = -z_0$일 때이다. 끝으로 $z_0z_0 = w \ne 0$이므로 환의 기본 성질의 (1)에 의해 $z_0 \ne 0$이다. $z_0 = -z_0$이라면 $z_0 + z_0 = \iota(2)z_0 = 0$이고 $\iota(2) \ne 0$이므로 정역의 성질에 의해 $z_0 = 0$이 되어 모순이다. 따라서 $z_0 \ne -z_0$이다.

**4의 증명.** $\alpha \ne 0$이므로 $\iota(2)\alpha \ne 0$이고 $\iota(4)\alpha \ne 0$이다(정역). $v = z + \beta / (2\alpha)$로 두면 체의 계산으로
$$
\begin{aligned}
\alpha zz + \beta z + \gamma &= \alpha\Bigl(vv - \dfrac{\beta\beta}{4\alpha\alpha}\Bigr) + \gamma \\
&= \alpha\Bigl(vv - \dfrac{D}{4\alpha\alpha}\Bigr)
\end{aligned}
$$
이다. 첫 등호는 $\alpha vv = \alpha zz + \beta z + \beta\beta/(4\alpha)$를 전개한 것이고, 둘째 등호는 $D = \beta\beta - 4\alpha\gamma$를 쓴 것이다. $\alpha \ne 0$이므로 정역의 성질에 의해 $\alpha zz + \beta z + \gamma = 0$인 것은 정확히 $vv = D/(4\alpha\alpha) = tt$일 때이다. 여기서 $t = u/(2\alpha)$이고 $tt = uu/(4\alpha\alpha) = D/(4\alpha\alpha)$이다. (3)의 증명의 마지막 문단과 같이 $vv = tt$인 것은 정확히 $(v - t)(v + t) = 0$, 곧 $v = t$이거나 $v = -t$일 때이다. $v = \pm t$는 $z = (-\beta \pm u)/(2\alpha)$와 같다. 두 근이 같은 것은 정확히 $u = -u$일 때이고, (3)의 증명과 같이 이것은 정확히 $u = 0$, 곧 $D = uu = 0$일 때이다($D = 0$이면 (3)의 (i)에 의해 $u = 0$). $\blacksquare$
:::

## 예시와 반례

:::example[5 − 12i, i, −1 의 제곱근]
$w = 5 - 12i$이면 $|w| = \sqrt{25 + 144} = 13$이고 $b < 0$이므로 $s = -1$입니다. (3)에 의해 $z_0 = \sqrt{9} - \sqrt{4}\,i = 3 - 2i$이고, 실제로 $(3 - 2i)(3 - 2i) = (9 - 4,\ -6 - 6) = 5 - 12i$입니다. 제곱근은 $3 - 2i$와 $-3 + 2i$입니다.

$w = i$이면 $a = 0$, $b = 1$, $|w| = 1$이므로 $z_0 = \sqrt{1/2} + \sqrt{1/2}\,i$입니다. $w = -1$이면 $a = -1$, $b = 0$, $s = 1$이므로 $z_0 = \sqrt{0} + \sqrt{1}\,i = i$이고, 제곱근은 $\pm i$로 [[complex-field|복소수체]]의 (5)와 맞습니다. $w = 4$이면 $z_0 = \sqrt{4} + \sqrt{0}\,i = 2$입니다.
:::

:::example[z² + 2z + 5 = 0 의 근]
(4)에서 $\alpha = 1$, $\beta = 2$, $\gamma = 5$이면 $D = 4 - 20 = -16$이고, (3)에 의해 $uu = -16$인 $u = 4i$를 잡을 수 있습니다. 근은 $(-2 + 4i)/2 = -1 + 2i$와 $(-2 - 4i)/2 = -1 - 2i$입니다. 확인하면 $(-1 + 2i)(-1 + 2i) = (1 - 4,\ -2 - 2) = -3 - 4i$이고 $-3 - 4i + 2(-1 + 2i) + 5 = 0$입니다. 실수 계수인데 판별식이 음수여서 실수인 근은 없고, 두 근은 서로의 켤레입니다.
:::

:::counterexample[부호 s 를 빼면 나오는 다른 수]
(3)에서 $s$를 늘 $1$로 두면 $w = 5 - 12i$에서 $3 + 2i$가 나오는데, $(3 + 2i)(3 + 2i) = 5 + 12i$로 $w$가 아니라 $\overline{w}$의 제곱근입니다. 허수부의 부호 $s$는 $z_0z_0$의 허수부 $2xy$가 $b$와 같은 부호가 되게 하려고 둔 것입니다.
:::

## 확인 질문

:::check[$3 - 4i$의 제곱근은 무엇인가?]
$|3 - 4i| = 5$이고 $b = -4 < 0$이므로 $s = -1$, $z_0 = \sqrt{(5 + 3)/2} - \sqrt{(5 - 3)/2}\,i = 2 - i$입니다. 제곱근은 $2 - i$와 $-2 + i$입니다. (1)의 $z = 2 - i$의 제곱이 $3 - 4i$라는 뜻이기도 합니다.
:::

:::check[$zz = -4$인 복소수 $z$를 모두 구하라.]
(3)에서 $a = -4$, $b = 0$, $|w| = 4$, $s = 1$이므로 $z_0 = \sqrt{0} + \sqrt{4}\,i = 2i$이고, 답은 $2i$와 $-2i$입니다. 실제로 $(2i)(2i) = 4(ii) = -4$입니다.
:::
