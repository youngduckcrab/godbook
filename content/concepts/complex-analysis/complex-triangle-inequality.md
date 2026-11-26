---
title: 복소수의 삼각부등식
title_en: Triangle Inequality for Complex Numbers
aliases: [삼각부등식, 역삼각부등식, 복소수의 코시–슈바르츠 부등식, triangle inequality, reverse triangle inequality]
kind: theorem
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수 z, w 에 대하여 |z + w|² = |z|² + |w|² + 2 Re(z w̄) 이고 |Re(z w̄)| ≤ |z||w| 이다. 이로부터 삼각부등식 |z + w| ≤ |z| + |w| 를 얻고, 등호는 정확히 w = 0 이거나 z 가 w 의 0 이상인 실수배일 때 성립한다. 역삼각부등식 ||z| − |w|| ≤ |z − w| 와 |z − w| ≤ |z − u| + |u − w| 도 보인다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, ring, ring-basic-properties, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1.1절 The complex plane (p.140); 8.2절 Analysis with vector spaces, Theorem 8.2.2 (p.20)
    checked: original
    note: "출처는 p.140 에서 |z| 가 ℝ² 의 유클리드 노름이므로 두 가지 삼각부등식 |z + w| ≤ |z| + |w| 와 ||z| − |w|| ≤ |z − w| 가 성립한다고 적고(PDF 그림으로 바깥 막대 확인), 증명은 유클리드 노름의 성질에 넘긴다. 이 항목은 켤레복소수와 절댓값의 진술로 (1)의 등식을 먼저 보이고 그것으로 (2)와 (4)를 증명한다. (1)의 Re(z w̄) = (Re z)(Re w) + (Im z)(Im w) 와 |Re(z w̄)| ≤ |z||w| 는 위상수학 입문의 두 항의 코시–슈바르츠 부등식과 같은 내용이다. 출처는 p.140 에서 |z − w| = d(z, w) 라 적는다. (5)는 이 거리의 삼각부등식이다. 8.2절 Theorem 8.2.2(p.20)는 ℝⁿ 의 코시–슈바르츠 부등식 |x · y| ≤ ∥x∥ ∥y∥ 를 진술하고 등호는 정확히 한 벡터가 다른 벡터의 실수배일 때라고 적는다. (1)의 |Re(z w̄)| ≤ |z||w| 는 n = 2 인 경우와 같은 내용이고, (3)과 확인 질문 '$z \\ne 0$, $w \\ne 0$이고 $|z + w| = |z| + |w|$이면 $z / w$는 어떤 수인가?'의 등호 조건은 그 실수배에 0 이상이라는 조건을 더한 것이다."
  - ref: judson-abstract-algebra
    loc: 4.5절 Exercises 19 (p.57)
    checked: original
    note: "4.5절 연습문제 19(p.57, PDF 그림으로 확인)의 (d) |z + w| ≤ |z| + |w| 와 (e) |z − w| ≥ ||z| − |w|| 가 이 항목의 (2)와 (4)이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(삼각부등식의 등호 조건, 예의 거듭제곱 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 아래에서 $z$, $w$, $u$는 복소수이다.

1. (켤레와의 곱의 실수부)
   $$
   \begin{aligned}
   \operatorname{Re}(z \overline{w}) &= (\operatorname{Re} z)(\operatorname{Re} w) \\
   &\qquad + (\operatorname{Im} z)(\operatorname{Im} w)
   \end{aligned}
   $$
   이고 $|\operatorname{Re}(z \overline{w})| \le |z|\,|w|$이다. 또
   $$
   \begin{aligned}
   |z + w|^2 &= |z|^2 + |w|^2 \\
   &\qquad + 2 \operatorname{Re}(z \overline{w}), \\
   |z - w|^2 &= |z|^2 + |w|^2 \\
   &\qquad - 2 \operatorname{Re}(z \overline{w})
   \end{aligned}
   $$
   이다.
2. (**삼각부등식**) $|z + w| \le |z| + |w|$이다. 또 $|z - w| \le |z| + |w|$이다.
3. (등호) $|z + w| = |z| + |w|$인 것은 정확히 $w = 0$이거나, $0 \le c$이고 $z = cw$인 실수 $c$가 있을 때이다.
4. (**역삼각부등식**) $\bigl|\,|z| - |w|\,\bigr| \le |z - w|$이다.
5. $|z - w| \le |z - u| + |u - w|$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, and $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the conjugate $\overline{z}$ is that of the entry on complex conjugates, and the modulus $|z|$ is that of the entry on the modulus. Below, $z$, $w$, $u$ are complex numbers.

1. (Real part of the product with a conjugate)
   $$
   \begin{aligned}
   \operatorname{Re}(z \overline{w}) &= (\operatorname{Re} z)(\operatorname{Re} w) \\
   &\qquad + (\operatorname{Im} z)(\operatorname{Im} w)
   \end{aligned}
   $$
   and $|\operatorname{Re}(z \overline{w})| \le |z|\,|w|$. Moreover
   $$
   \begin{aligned}
   |z + w|^2 &= |z|^2 + |w|^2 \\
   &\qquad + 2 \operatorname{Re}(z \overline{w}), \\
   |z - w|^2 &= |z|^2 + |w|^2 \\
   &\qquad - 2 \operatorname{Re}(z \overline{w}).
   \end{aligned}
   $$
2. (**Triangle inequality**) $|z + w| \le |z| + |w|$. Moreover $|z - w| \le |z| + |w|$.
3. (Equality) $|z + w| = |z| + |w|$ exactly when $w = 0$ or there is a real number $c$ with $0 \le c$ and $z = cw$.
4. (**Reverse triangle inequality**) $\bigl|\,|z| - |w|\,\bigr| \le |z - w|$.
5. $|z - w| \le |z - u| + |u - w|$.
:::

## 직관

복소수를 평면의 점으로 보면 $|z|$는 원점에서 $z$까지의 거리이고, $z + w$는 원점에서 $z$만큼 간 뒤 다시 $w$만큼 간 자리입니다. 두 번에 나눠 가는 길은 곧장 가는 길보다 짧을 수 없다는 것이 삼각부등식 (2)입니다. 길이 같아지는 것은 두 걸음이 같은 방향일 때이고, "같은 방향"을 수로 말한 것이 (3)의 "$z$가 $w$의 $0$ 이상인 실수배"입니다. 한 걸음이 $0$이면 방향을 따질 것 없이 등호이고, (3)에서 $w = 0$이면 앞쪽 조건, $z = 0$이면 $c = 0$이 그 경우입니다.

증명의 열쇠는 (1)입니다. 실수에서 $(x + y)^2 = x^2 + y^2 + 2xy$이던 것이 복소수에서는 가운데 항이 $2 \operatorname{Re}(z\overline{w})$로 바뀌고, 이 실수부는 두 성분의 곱의 합 $(\operatorname{Re} z)(\operatorname{Re} w) + (\operatorname{Im} z)(\operatorname{Im} w)$입니다. 이것이 $|z|\,|w|$를 넘지 않는다는 것은 위상수학 입문의 두 항의 코시–슈바르츠 부등식과 같은 내용이고, 여기서는 [[modulus-of-complex-number|복소수의 절댓값]]의 "실수부의 절댓값은 절댓값 이하"로 얻습니다.

## 증명

:::idea
$|z + w|^2$을 켤레로 $(z + w)(\overline{z} + \overline{w})$로 펼치면 $|z|^2 + |w|^2 + 2\operatorname{Re}(z\overline{w})$가 되고, $\operatorname{Re}(z\overline{w}) \le |z\overline{w}| = |z|\,|w|$이므로 오른쪽은 $(|z| + |w|)^2$ 이하이다. 등호는 $z\overline{w}$가 $0$ 이상인 실수일 때이다.
:::

:::hint
$z\overline{w}$와 $\overline{z}w$는 서로의 켤레이므로 둘의 합은 $2 \operatorname{Re}(z\overline{w})$이다.
:::

:::hint
복소수 $v$에서 $\operatorname{Re} v = |v|$이면 $|v|^2 = (\operatorname{Re} v)^2 + (\operatorname{Im} v)^2$에서 $\operatorname{Im} v = 0$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (7)"은 [[order-properties-of-reals]]의 번호, "절댓값의 (6)"은 [[absolute-value]]의 번호, "복소수체의 (2)", "켤레의 (2)", "모듈러스의 (6)"은 [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]]의 번호이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 실수 $a$에서 $a^2 = aa$이다.

**1의 증명.** $z = (a, b)$, $w = (c, d)$로 두면 $\overline{w} = (c, -d)$이고, 곱셈의 정의와 (K12)에 의해 $z\overline{w} = (ac - b(-d),\ a(-d) + bc) = (ac + bd,\ bc - ad)$이다. 따라서 $\operatorname{Re}(z\overline{w}) = ac + bd$이다. 모듈러스의 (6), (3), (2)에 의해 $|\operatorname{Re}(z\overline{w})| \le |z\overline{w}| = |z|\,|\overline{w}| = |z|\,|w|$이다.

켤레의 (2), (1)에 의해 $\overline{z\overline{w}} = \overline{z}\,w$이므로, 켤레의 (3)에 의해 $z\overline{w} + \overline{z}w = \iota\bigl(2 \operatorname{Re}(z\overline{w})\bigr)$이다. 모듈러스의 (2), 켤레의 (2), 분배법칙과 교환법칙에 의해
$$
\begin{aligned}
\iota(|z + w|^2) &= (z + w)(\overline{z} + \overline{w}) \\
&= z\overline{z} + w\overline{w} + (z\overline{w} + \overline{z}w) \\
&= \iota(|z|^2) + \iota(|w|^2) \\
&\qquad + \iota\bigl(2 \operatorname{Re}(z\overline{w})\bigr) \\
&= \iota\bigl(|z|^2 + |w|^2 \\
&\qquad + 2 \operatorname{Re}(z\overline{w})\bigr)
\end{aligned}
$$
이다. 마지막 등호는 복소수체의 (2)이다. 복소수체의 (2)에 의해 $\iota$는 단사이므로 첫째 등식이 나온다. 이것을 $z$와 $-w$에 쓰면 모듈러스의 (2)에 의해 $|-w| = |w|$이고, 켤레의 (2)와 [[ring-basic-properties|환의 기본 성질]]의 (2)에 의해 $z\overline{-w} = z(-\overline{w}) = -(z\overline{w})$이며, 복소수체의 (1)에 의해 $\operatorname{Re}(-(z\overline{w})) = -\operatorname{Re}(z\overline{w})$이다. 따라서 둘째 등식이 나온다.

**2의 증명.** 절댓값의 (6)과 (1)에 의해 $\operatorname{Re}(z\overline{w}) \le |\operatorname{Re}(z\overline{w})| \le |z|\,|w|$이다. 순서 성질 (10)에 의해 $0 \le 2$이므로 순서 성질 (4)의 (iii)과 (2)의 (i)에 의해 (1)에서
$$
\begin{aligned}
|z + w|^2 &\le |z|^2 + |w|^2 + 2\,|z|\,|w| \\
&= (|z| + |w|)^2
\end{aligned}
$$
이다. 등호는 (K1)–(K3)과 (K7)로 전개한 것이다. 모듈러스의 (1)에 의해 $0 \le |z + w|$이고 순서 성질 (2)의 (iii)에 의해 $0 \le |z| + |w|$이므로, 순서 성질 (7)의 (iii)에 의해 $|z + w| \le |z| + |w|$이다. 이것을 $z$와 $-w$에 쓰고 $|-w| = |w|$를 쓰면 $|z - w| \le |z| + |w|$이다.

**3의 증명.** 먼저 다음을 보인다: 복소수 $v$에서 $\operatorname{Re} v = |v|$이면 $\operatorname{Im} v = 0$이고 $0 \le \operatorname{Re} v$이다. 모듈러스의 (1)에 의해 $|v|^2 = (\operatorname{Re} v)^2 + (\operatorname{Im} v)^2$이므로 $\operatorname{Re} v = |v|$이면 양변에서 $(\operatorname{Re} v)^2$을 빼어 $(\operatorname{Im} v)(\operatorname{Im} v) = 0$이고, (K10)에 의해 $\operatorname{Im} v = 0$이다. 또 $0 \le |v| = \operatorname{Re} v$이다.

$|z + w| = |z| + |w|$라 하자. 그러면 $|z + w|^2 = (|z| + |w|)^2$이고, (1)과 2의 증명의 전개에 의해 $2 \operatorname{Re}(z\overline{w}) = 2\,|z|\,|w|$이다. $2 \ne 0$이므로 (K11)에 의해 $\operatorname{Re}(z\overline{w}) = |z|\,|w| = |z\overline{w}|$이다(모듈러스의 (3), (2)). $w = 0$이면 결론의 앞쪽이 성립한다. $w \ne 0$이라 하자. $v = z\overline{w}$에 위의 사실을 쓰면 $\operatorname{Im} v = 0$이고 $t = \operatorname{Re} v$는 $0 \le t$이며, 복소수체의 (2)의 (iii)에 의해 $v = \iota(t)$이다. 모듈러스의 (1)에 의해 $|w|^2 \ne 0$이다. 모듈러스의 (4)에 의해 $w^{-1} = \iota\bigl((|w|^2)^{-1}\bigr)\overline{w}$이고, 켤레의 (2), (1), (4)에 의해 $(\overline{w})^{-1} = \overline{w^{-1}} = \iota\bigl((|w|^2)^{-1}\bigr) w$이다. 따라서 체의 계산과 복소수체의 (2)에 의해
$$
\begin{aligned}
z &= (z\overline{w})(\overline{w})^{-1} \\
&= \iota(t)\,\iota\bigl((|w|^2)^{-1}\bigr) w \\
&= \iota\bigl(t (|w|^2)^{-1}\bigr) w
\end{aligned}
$$
이다. $c = t(|w|^2)^{-1}$로 두면 순서 성질 (6)의 (i)과 (4)의 (iv)에 의해 $0 \le c$이고 $z = cw$이다.

거꾸로, $w = 0$이면 $|z + w| = |z| = |z| + |w|$이다(모듈러스의 (1)). $0 \le c$이고 $z = cw$이면 분배법칙과 복소수체의 (2)에 의해 $z + w = \iota(c)w + \iota(1)w = \iota(c + 1)w$이다. 순서 성질 (5)의 (ii)와 (2)의 (iii)에 의해 $0 \le c + 1$이므로 절댓값의 (1)에 의해 $|c + 1| = c + 1$, $|c| = c$이고, 모듈러스의 (5)에 의해
$$
\begin{aligned}
|z + w| &= (c + 1)\,|w| = c\,|w| + |w| \\
&= |cw| + |w| = |z| + |w|
\end{aligned}
$$
이다.

**4의 증명.** $z = (z - w) + w$이므로 (2)에 의해 $|z| \le |z - w| + |w|$이고, 양변에서 $|w|$를 빼면 $|z| - |w| \le |z - w|$이다(순서 성질 (2)의 (i)). $z$와 $w$를 바꾸면 $|w| - |z| \le |w - z|$이고, $w - z = -(z - w)$이므로 모듈러스의 (2)에 의해 $|w - z| = |z - w|$이다. 따라서 순서 성질 (3)의 (iii)에 의해 $-|z - w| \le |z| - |w| \le |z - w|$이고, 절댓값의 (7)에 의해 $\bigl|\,|z| - |w|\,\bigr| \le |z - w|$이다.

**5의 증명.** 덧셈의 결합법칙과 역원에 의해 $z - w = (z - u) + (u - w)$이므로 (2)에서 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[3 + 4i 와 5 − 12i]
$z = 3 + 4i$, $w = 5 - 12i$라 합시다. $|z| = \sqrt{9 + 16} = 5$, $|w| = \sqrt{25 + 144} = 13$입니다. $z + w = 8 - 8i$이므로 $|z + w| = \sqrt{128}$이고, $128 < 324 = 18 \cdot 18$이므로 [[square-root-exists|제곱근]]의 (2)에 의해 $\sqrt{128} < 18 = |z| + |w|$입니다. (1)로 확인하면 $\operatorname{Re}(z\overline{w}) = 3 \cdot 5 + 4 \cdot (-12) = -33$이고 $25 + 169 + 2 \cdot (-33) = 128$입니다. 또 $z - w = -2 + 16i$이므로 $|z - w| = \sqrt{260}$이고, $8 \cdot 8 = 64 \le 260$이므로 $\bigl|\,|z| - |w|\,\bigr| = 8 \le \sqrt{260}$입니다((4)).
:::

:::example[등호가 성립하는 예]
$w = 3 - i$, $z = 2w = 6 - 2i$라 합시다. (3)의 $c = 2$입니다. $z + w = 9 - 3i$이므로 $|z + w| = \sqrt{90}$이고, $|z| = \sqrt{40}$, $|w| = \sqrt{10}$입니다. $\sqrt{90} = 3\sqrt{10}$, $\sqrt{40} = 2\sqrt{10}$이므로(각각 $(3\sqrt{10})^2 = 90$, $(2\sqrt{10})^2 = 40$이고 제곱근은 하나뿐) $|z + w| = |z| + |w|$입니다. $z = 0$이고 $w \ne 0$이어도 $c = 0$으로 등호입니다.
:::

:::counterexample[등호가 성립하지 않는 두 예]
$w = -z$이고 $z \ne 0$이면 $|z + w| = |0| = 0$이지만 $|z| + |w| = 2\,|z| > 0$입니다. 이때 $z = (-1)w$로, $z$는 $w$의 실수배이지만 그 실수가 음수입니다. $z = 1$, $w = i$이면 $|1 + i| = \sqrt{2}$이고 $|1| + |i| = 2$이며, $\sqrt{2} \cdot \sqrt{2} = 2 < 4$이므로 $\sqrt{2} < 2$입니다. $1 = ci$인 실수 $c$는 없습니다(허수부를 비교하면 $c = 0$인데 그러면 실수부가 맞지 않습니다).
:::

## 확인 질문

:::check[$z \ne 0$, $w \ne 0$이고 $|z + w| = |z| + |w|$이면 $z / w$는 어떤 수인가?]
(3)에 의해 $0 \le c$이고 $z = cw$인 실수 $c$가 있으므로 $z / w = cww^{-1} = c$, 곧 실수인 복소수 $\iota(c)$입니다. $z \ne 0$이므로 $c \ne 0$이고 따라서 $0 < c$입니다. 거꾸로 $z / w$가 양수 $c$를 옮긴 것이면 $z = cw$이므로 (3)에 의해 등호가 성립합니다.
:::

:::check[$|z| = |w| = 1$이고 $|z + w| = 2$이면 $z$와 $w$는 어떤 관계인가?]
$|z + w| = 2 = |z| + |w|$이고 $w \ne 0$(모듈러스의 (1))이므로 (3)에 의해 $0 \le c$이고 $z = cw$인 실수 $c$가 있습니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $1 = |z| = |c|\,|w| = c$이므로 $z = w$입니다.
:::
