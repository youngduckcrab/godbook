---
title: 복소 미분가능하지 않은 함수의 예
title_en: Examples of Functions That Are Not Complex Differentiable
aliases: [실숫값 함수의 복소 미분, 켤레의 미분불가능성, 켤레를 취하는 함수는 미분가능하지 않다, 한 점에서만 미분가능한 함수, nowhere complex differentiable]
kind: proposition
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 값이 모두 실수인 복소함수가 한 점에서 복소 미분가능하면 그 점의 미분계수는 0 이고, f 와 그 켤레가 한 점에서 함께 미분가능하면 f 의 미분계수는 0 이다. 이로써 켤레를 취하는 함수, 실수부, 허수부는 어느 점에서도 복소 미분가능하지 않고, 절댓값의 제곱은 0 에서만 미분가능하다는 것을 보인다.
requires: [interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, derivative, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, open-set-in-metric-space, complex-plane-as-metric-space, continuity-of-complex-operations, limit-of-complex-function, limit-laws-for-complex-functions, complex-derivative, complex-derivative-rules]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Differentiability and Holomorphicity 절의 Example exam_zbarsquareddiff 와 그 뒤의 예(z̄), source/sec_diffholom.ptx:100–179; 연습문제 ex_2_2, 그 뒤의 셋째 연습문제(CR 은 만족하지만 미분가능하지 않은 함수), ex_realimpliesconst, ex_fandconjfimpliesconst (source/exercises-chap2.ptx:221–381, 395–431)"
    checked: original
    note: "(3)은 출처 sec_diffholom.ptx:167–179 의 예(f(z) = z̄ 는 어디서도 미분가능하지 않다)와 같은 결론이다. 출처는 차분몫을 z̄/z 의 극한으로 바꾸고 실수축과 허수축으로 제한한 극한이 다르다는 것(exam_limitdoesnotexist)으로 보이고, 이 항목은 (2)에서 얻는다. (1)은 출처 연습문제 ex_realimpliesconst(exercises-chap2.ptx:407–421: 영역에서 정칙이고 실숫값이면 상수, 힌트는 코시–리만으로 f′ = 0 을 보이라는 것)의 첫 단계와 같은 결론을 한 점에서 진술한 것이고, 이 항목은 코시–리만 방정식 없이 두 직선으로 다가가는 극한으로 증명한다. (2)는 출처 연습문제 ex_fandconjfimpliesconst(422–431: f 와 f̄ 가 영역에서 정칙이면 상수)의 한 점판이다. (4)의 허수부와 (5)는 출처 연습문제 ex_2_2 의 Im z(299–304, 어디서도 미분가능하지 않다)와 |z|² = x² + y²(311–316, 0 에서만 미분가능하고 미분계수 0)와 같은 결론이다. 실수부는 같은 발상이다. 출처 Example exam_zbarsquareddiff(104–165)는 z̄² 가 0 에서만 미분가능하다는 것을 극형식으로 보인다. (5)의 0 에서의 계산(차분몫이 z̄)은 그 예의 0 에서의 계산(z̄²/z 의 절댓값이 |z|)과 같은 발상이다. 예시 '$(\\operatorname{Re} z)^2$ 이 미분가능한 점'은 출처 연습문제 ex_2_2 의 x² + iy²(263–268, 직선 x = y 에서만 미분가능)와 같은 발상(한 직선에서만 미분가능)이다. 반례 '$z + 2\\overline{z}$ 가 미분가능하지 않은 예'는 출처 연습문제 ex_2_2 의 2xy − i(x + y)² 나 z² − z̄² 처럼 z 와 z̄ 를 섞은 함수이다. 확인 질문 '$|z|^2 + z$는 어느 점에서 미분가능한가?'는 (5)와 출처 연습문제 ex_2_2 의 |z|² 에 z 를 더한 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시–리만 (4)의 약한 가정 검토, |z|² 의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이고, 복소 미분가능, 미분계수, 정칙함수는 [[complex-derivative|복소 미분]]의 것이다. 함수 $\overline{f}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 진술에서 $Z$를 여기의 정의역으로 둔 것, 곧 $z$에서의 값이 $\overline{f(z)}$인 함수이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$는 복소함수, $z_0$은 $G$의 점이다.

1. (실숫값 함수) $f$의 모든 값이 실수인 복소수이고 $f$가 $z_0$에서 미분가능하면 $f'(z_0) = 0$이다. 따라서 모든 값이 실수인 복소수인 정칙함수의 도함수는 영함수이다.
2. (켤레와 함께 미분가능한 함수) $f$와 $\overline{f}$가 둘 다 $z_0$에서 미분가능하면 $f'(z_0) = 0$이다.
3. (켤레를 취하는 함수) $z$에서의 값이 $\overline{z}$인 함수 $\mathbb{C} \to \mathbb{C}$는 어느 점에서도 미분가능하지 않다.
4. (실수부와 허수부) $z$에서의 값이 $\operatorname{Re} z$인 함수와 $\operatorname{Im} z$인 함수 $\mathbb{C} \to \mathbb{C}$(값은 실수인 복소수로 읽는다)는 어느 점에서도 미분가능하지 않다.
5. (절댓값의 제곱) $z$에서의 값이 $|z|^2$인 함수 $\mathbb{C} \to \mathbb{C}$는 $0$에서 미분가능하고 미분계수는 $0$이며, $0$이 아닌 점에서는 미분가능하지 않다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the conjugate $\overline{z}$ and the modulus $|z|$ are those of the entries on complex conjugates and the modulus of a complex number. Open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and complex differentiability, derivatives, and holomorphic functions are those of the entry on the complex derivative. The function $\overline{f}$ is that of the statement of the entry on the continuity of the complex operations with $Z$ there taken to be the domain here, that is, the function whose value at $z$ is $\overline{f(z)}$.

Below, $G$ is an open set of $(\mathbb{C}, d)$, $f : G \to \mathbb{C}$ is a complex function, and $z_0$ is a point of $G$.

1. (Real-valued functions) If every value of $f$ is a real complex number and $f$ is differentiable at $z_0$, then $f'(z_0) = 0$. Hence the derivative of a holomorphic function all of whose values are real complex numbers is the zero function.
2. (Functions differentiable together with their conjugate) If $f$ and $\overline{f}$ are both differentiable at $z_0$, then $f'(z_0) = 0$.
3. (The conjugation function) The function $\mathbb{C} \to \mathbb{C}$ whose value at $z$ is $\overline{z}$ is differentiable at no point.
4. (Real and imaginary parts) The functions $\mathbb{C} \to \mathbb{C}$ whose values at $z$ are $\operatorname{Re} z$ and $\operatorname{Im} z$ (the values read as real complex numbers) are differentiable at no point.
5. (The square of the modulus) The function $\mathbb{C} \to \mathbb{C}$ whose value at $z$ is $|z|^2$ is differentiable at $0$ with derivative $0$, and is not differentiable at any nonzero point.
:::

## 직관

복소 미분계수는 $z$가 $z_0$에 어느 방향에서 다가가든 차분몫이 같은 값으로 가야 정해집니다. 값이 실수인 함수에서 실수축 방향으로 다가가면 차분몫은 실수를 실수로 나눈 것이라 실수이고, 허수축 방향으로 다가가면 실수를 순허수로 나눈 것이라 실수부가 $0$입니다. 두 방향의 극한이 같으려면 그 값은 실수이면서 실수부가 $0$, 곧 $0$일 수밖에 없습니다((1)). 높이를 재는 함수에 비유하면, 실수축 방향의 기울기와 허수축 방향의 기울기가 한 복소수의 실수부와 허수부 자리를 서로 다르게 차지해서, 둘이 맞으려면 둘 다 $0$이어야 한다는 뜻입니다.

켤레는 이것의 따름입니다. $f$와 $\overline{f}$가 함께 미분가능하면 $f + \overline{f}$는 값이 $2 \operatorname{Re} f$인 실숫값 함수이므로 (1)에 의해 미분계수가 $0$이고, 허수부도 마찬가지입니다((2)). 항등함수는 미분계수가 $1$이므로 그 켤레는 미분가능할 수 없습니다((3)). 실수부와 허수부도 $\overline{z} = 2 \operatorname{Re} z - z$에서 같은 결론이 나옵니다((4)).

(1)은 미분계수가 $0$이라고만 말합니다. 실숫값 함수가 미분가능한 점이 있을 수 있습니다. $|z|^2$는 $0$에서 미분가능하고((5)), 상수함수는 모든 점에서 미분가능합니다. 미분가능한 점에서 미분계수가 $0$이라는 것만이 정해집니다.

## 증명

:::idea
(1)은 [[limit-of-complex-function|복소함수의 극한]]의 (10)으로 차분몫을 실수축 방향과 허수축 방향으로 제한해, 극한의 허수부와 실수부가 각각 $0$임을 보인다. (2)는 $f + \overline{f}$와 $i(\overline{f} - f)$가 실숫값 함수라는 것으로 (1)에 넘기고, (3)–(5)는 (2)와 미분의 법칙으로 모순을 낸다.
:::

:::hint
(1)에서 $t$가 $0$이 아닌 실수이면 $\iota(a) / \iota(t)$는 실수인 복소수이고, $\iota(a) / (\iota(t) i) = -\iota(a/t)\, i$는 실수부가 $0$입니다.
:::

:::hint
(5)의 $0$이 아닌 점에서는, 미분가능하다고 하면 $\mathbb{C} - \{0\}$ 위에서 $\overline{z} = |z|^2 / z$가 그 점에서 미분가능해져 (3)에 어긋납니다.
:::

:::proof
"극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]], "미분 (n)"은 [[complex-derivative|복소 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "복소수체 (n)"은 [[complex-field]], "켤레 (n)"은 [[complex-conjugate]]의 번호이다.

**1의 증명.** $L = f'(z_0)$이라 하자. $G$가 열린집합이므로 $B(z_0, r) \subseteq G$인 실수 $r > 0$이 있다. $J = (-r, r) - \{0\}$으로 두면 [[derivative]]의 진술에 의해 $0$은 $J$의 집적점이다. 차분몫 $q = q_{z_0} : G - \{z_0\} \to \mathbb{C}$에 극한 (10)을 $c = 0$과 방향을 나타내는 복소수 $1$, $i$에 쓴다. $t \in J$이고 $e$가 $1$ 또는 $i$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (3), (5)와 $|1| = |i| = 1$에 의해 $|\iota(t) e| = |t| < r$이므로 $z_0 + \iota(t) e \in B(z_0, r) \subseteq G$이고, 극한 (1)의 (iii)에 의해 $z_0 + \iota(t) e \ne z_0$이다. 곧 이 점은 $q$의 정의역에 있다.

$t \in J$에서 $f(z_0 + \iota(t) e) - f(z_0)$은 실수인 복소수의 차이므로 실수인 복소수이고(복소수체 (2)의 (i), (iii)), 그것을 $\iota(a_t)$로 쓴다. 복소수체 (2)의 (i)에 의해 $\iota(t)^{-1} = \iota(t^{-1})$이다.

- $e = 1$이면 $q(z_0 + \iota(t)) = \iota(a_t)\,\iota(t^{-1}) = \iota(a_t t^{-1})$이므로 그 허수부는 $0$이다(복소수체 (2)의 (ii)). 극한 (10)의 (i)에 의해 $J$ 위의 값이 $0$인 상수함수가 $c = 0$에서 $\operatorname{Im} L$로 수렴하고, [[limit-of-a-function]]의 (4), (3)에 의해 $\operatorname{Im} L = 0$이다.
- $e = i$이면 $i^{-1} = -i$이므로($i(-i) = -i^2 = 1$, 복소수체 (5)) $q(z_0 + \iota(t) i) = \iota(a_t t^{-1}) (-i)$이고, 복소수체 (2)의 (ii)에 의해 그 실수부는 $a_t t^{-1} \operatorname{Re}(-i) = 0$이다. 극한 (10)의 (i)과 같은 이유로 $\operatorname{Re} L = 0$이다.

복소수체 (4)에 의해 $L = \operatorname{Re} L + (\operatorname{Im} L) i = 0$이다. 둘째 문장은 $G$의 각 점에 첫째 문장을 쓴 것이다.

**2의 증명.** 법칙 (1)에 의해 $g_1 = f + \overline{f}$와 $g_2 = i \overline{f} - i f$는 $z_0$에서 미분가능하다. 켤레 (3)에 의해 모든 $z \in G$에서 $g_1(z) = f(z) + \overline{f(z)} = 2 \operatorname{Re} f(z)$이고, $f(z) - \overline{f(z)} = 2 (\operatorname{Im} f(z)) i$이므로 $g_2(z) = -i (f(z) - \overline{f(z)}) = -i \cdot 2 (\operatorname{Im} f(z)) i = 2 \operatorname{Im} f(z)$이다. 곧 $g_1$, $g_2$의 값은 모두 실수인 복소수이고, (1)에 의해 $g_1'(z_0) = g_2'(z_0) = 0$이다. 모든 $z$에서 $g_1(z) + i g_2(z) = 2 \operatorname{Re} f(z) + 2 (\operatorname{Im} f(z)) i = 2 f(z)$이므로(복소수체 (4)) $f = 2^{-1} (g_1 + i g_2)$이고, 법칙 (1)에 의해 $f'(z_0) = 2^{-1}(g_1'(z_0) + i g_2'(z_0)) = 0$이다.

**3의 증명.** $h(z) = z$로 정한 $h : \mathbb{C} \to \mathbb{C}$는 미분 (5)에 의해 모든 점에서 미분가능하고 미분계수가 $1$이다. 켤레를 취하는 함수는 $\overline{h}$이다. 어떤 점 $z_0$에서 $\overline{h}$가 미분가능하다면 (2)에 의해 $h'(z_0) = 0$인데, $h'(z_0) = 1 \ne 0$이므로 모순이다.

**4의 증명.** $\rho(z) = \operatorname{Re} z$, $\sigma(z) = \operatorname{Im} z$로 둔다(값은 $\iota$로 옮긴 복소수). 켤레 (3)에 의해 모든 $z$에서 $\overline{z} = 2\rho(z) - z$이고 $\overline{z} = z - 2 \sigma(z) i$이다. $\rho$가 어떤 점 $z_0$에서 미분가능하면 미분 (5)와 법칙 (1)에 의해 $z$에서의 값이 $2\rho(z) - z$인 함수, 곧 켤레를 취하는 함수가 $z_0$에서 미분가능해 (3)에 어긋난다. $\sigma$도 $z - 2\sigma(z) i$로 같다.

**5의 증명.** $k(z) = |z|^2$으로 둔다(값은 실수인 복소수로 읽는다). [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $k(z) = z \overline{z}$이다. $0$에서의 차분몫은 $z \ne 0$에서 $q_0(z) = z \overline{z} / z = \overline{z}$이다. [[limit-laws-for-complex-functions|복소함수의 극한 법칙]]의 (5)와 극한 (5)에 의해 $q_0$은 $0$에서 $\overline{0} = 0$으로 수렴하므로 $k$는 $0$에서 미분가능하고 $k'(0) = 0$이다.

$z_0 \ne 0$에서 $k$가 미분가능하다고 하자. $G' = \mathbb{C} - \{0\}$은 열린집합이고(법칙 (4)의 (ii)) $z_0 \in G'$이므로, 미분 (4)의 (i)에 의해 $k|_{G'}$은 $z_0$에서 미분가능하다. $z$에서의 값이 $z$인 함수 $G' \to \mathbb{C}$는 미분 (5)에 의해 미분가능하고 $0$이 아니므로, 법칙 (3)의 (iii)에 의해 $z$에서의 값이 $k(z)/z = \overline{z}$인 함수 $G' \to \mathbb{C}$는 $z_0$에서 미분가능하다. 이것은 켤레를 취하는 함수를 $G'$으로 제한한 것이므로 미분 (4)의 (i)에 의해 켤레를 취하는 함수가 $z_0$에서 미분가능해 (3)에 어긋난다. $\blacksquare$
:::

## 예시와 반례

:::example[$(\operatorname{Re} z)^2$ 이 미분가능한 점]
$p(z) = \iota\bigl((\operatorname{Re} z)^2\bigr)$로 정한 $p : \mathbb{C} \to \mathbb{C}$는 정확히 실수부가 $0$인 점에서 미분가능하고, 그 점의 미분계수는 $0$입니다.

$\operatorname{Re} z_0 = 0$이라 합시다. $z \ne z_0$이면 [[complex-field|복소수체]]의 (1)에 의해 $\operatorname{Re} z = \operatorname{Re}(z - z_0)$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (6)에 의해 $|\operatorname{Re}(z - z_0)| \le |z - z_0|$이므로
$$
\begin{aligned}
|q_{z_0}(z)| &= \frac{(\operatorname{Re}(z - z_0))^2}{|z - z_0|} \\
&\le \frac{|z - z_0|^2}{|z - z_0|} = |z - z_0|
\end{aligned}
$$
입니다([[order-properties-of-reals]]의 (7)의 (ii)와 (4)의 (iii)). 양의 실수 $\varepsilon$에 $\delta = \varepsilon$을 대응시키면 $|z - z_0| < \delta$에서 $|q_{z_0}(z) - 0| < \varepsilon$이므로 $p'(z_0) = 0$입니다.

$x_0 = \operatorname{Re} z_0 \ne 0$이면 $p$는 $z_0$에서 미분가능하지 않습니다. 미분가능하다면 $p$의 값이 모두 실수이므로 (1)에 의해 $p'(z_0) = 0$입니다. 그런데 $0$이 아닌 실수 $t$에서 $p(z_0 + \iota(t)) - p(z_0) = \iota\bigl((x_0 + t)^2 - x_0^2\bigr) = \iota\bigl(t(2x_0 + t)\bigr)$이므로 $q_{z_0}(z_0 + \iota(t)) = \iota(2x_0 + t)$이고, [[limit-of-complex-function|복소함수의 극한]]의 (10)의 (i)을 $J = (-1, 1) - \{0\}$, $c = 0$, 방향 $1$에 쓰면 $t$에서의 값이 $2x_0 + t$인 $J$ 위의 실함수가 $0$에서 $\operatorname{Re} p'(z_0) = 0$으로 수렴해야 합니다. 이 함수는 [[limit-laws-for-functions|함수의 극한 법칙]]의 (3)과 [[limit-of-a-function]]의 (4)에 의해 $2x_0 \ne 0$으로 수렴하므로 모순입니다.
:::

:::counterexample[$z + 2\overline{z}$ 가 미분가능하지 않은 예]
$g(z) = z + 2\overline{z}$로 정한 $g : \mathbb{C} \to \mathbb{C}$는 어느 점에서도 미분가능하지 않습니다. 어떤 점 $z_0$에서 미분가능하다면, 모든 $z$에서 $\overline{z} = 2^{-1}(g(z) - z)$이므로 [[complex-derivative-rules|복소 미분의 법칙]]의 (1)과 [[complex-derivative|복소 미분]]의 (5)에 의해 켤레를 취하는 함수가 $z_0$에서 미분가능해 (3)에 어긋납니다. $g$는 미분가능한 함수 $z$와 미분가능하지 않은 함수 $2\overline{z}$의 합이고, 그런 합은 미분가능하지 않을 수 있습니다.
:::

## 확인 질문

:::check[값이 모두 실수인 복소수인 정함수 $f$에 대하여 $f'(i)$는 무엇인가?]
$0$입니다. $\mathbb{C}$는 열린집합이고 $f$는 $i$에서 미분가능하므로 (1)에 의해 $f'(i) = 0$입니다.
:::

:::check[$|z|^2 + z$는 어느 점에서 미분가능한가?]
$0$에서만 미분가능하고 그 미분계수는 $1$입니다. $0$에서는 (5)와 [[complex-derivative|복소 미분]]의 (5), [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 미분계수가 $0 + 1 = 1$입니다. $0$이 아닌 점 $z_0$에서 미분가능하다면, $|z|^2 = (|z|^2 + z) - z$가 법칙의 (1)에 의해 $z_0$에서 미분가능해 (5)에 어긋납니다.
:::
