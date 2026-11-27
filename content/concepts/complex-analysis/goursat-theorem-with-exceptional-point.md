---
title: 예외점이 있는 구르사 정리
title_en: Goursat's Theorem with an Exceptional Point
aliases: [예외점 구르사 정리, 한 점을 뺀 구르사 정리, Goursat theorem with an exceptional point]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 열린집합 U 위의 연속함수가 U 의 한 점 p 를 뺀 곳에서 정칙이면, U 에 드는 모든 닫힌 삼각형의 둘레 적분이 0 이다. 삼각형을 p 를 꼭짓점으로 하는 세 조각으로 나누고, 퇴화한 조각은 바로 0 이며, 퇴화하지 않은 조각은 꼭짓점 쪽의 작은 삼각형만 남겨 그 둘레를 줄여 누른다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, open-set-in-metric-space, open-sets-of-a-metric-space, subspace-and-continuity, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-plane-as-metric-space, continuity-of-complex-operations, compact-subsets-of-complex-plane, limit-of-complex-function, complex-derivative, complex-derivative-rules, derivative-of-complex-exponential, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, closed-triangle, goursat-theorem]
proof: full
sources:
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.3 과 그 증명 (k.txt 248–272줄, p.5), H_X 의 정의 (274–282줄, p.5), Proposition 2.4 의 2. 와 그 증명 (k.txt 285–312줄, p.6)"
    checked: original
    note: "출처 Proposition 2.4 의 2. 는 f 가 C − {a} 에서 정칙이고 a 근처에서 유계이면 a 를 안쪽에 품은 직사각형의 둘레 적분이 0 이라는 것이다(291줄). 출처의 Proposition 2.4 는 콤팩트 집합 X 의 밖 ℂ − X 전체에서 정칙인 함수만 다루고(274–282줄), 2. 의 증명은 '직사각형을 a 로 줄인다'(312줄)는 한 줄이다. 줄여도 적분값이 같다는 것은 직사각형을 아홉 조각으로 나누어 값이 직사각형의 선택에 상관없음을 보이는 논법(299–310줄)에서 온다. 이 항목은 열린집합 U 와 그 안의 아무 닫힌 삼각형으로 진술하고, 예외점에서는 유계 대신 연속을 가정한다. 증명은 출처와 달리 삼각형을 예외점 p 를 꼭짓점으로 하는 세 조각으로 나누고(닫힌 삼각형 (6)), 퇴화한 조각은 닫힌 삼각형 (9)의 (iii)으로, 퇴화하지 않은 조각은 꼭짓점 쪽 작은 삼각형((7))과 ML 부등식으로 처리하며, '줄인다'의 극한 대신 모든 0 < λ < 1 에서 성립하는 부등식으로 끝낸다. 꼭짓점이 한 직선 위에 있을 때 p 를 피하는 두 조각이 p 를 품을 수 있으므로 그 경우를 따로 둔다. 반례 '0 에서 연속이 아닌 함수의 둘레 적분'은 출처 Proposition 2.3(248–272줄, p.5: 꼭짓점이 ±1 ± i 인 정사각형의 둘레에서 1/z 의 적분이 0 이 아니며, 변마다 적분의 허수부가 1 이상이다)과 같은 함수를 같은 발상(변마다 적분의 허수부가 양수)으로 다룬 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(구르사 증명의 재귀와 어림 통독, 둘레 적분 예 재계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
닫힌 삼각형 $\Delta(a, b, c)$와 둘레 경로열 $\partial\Delta(a, b, c)$는 [[closed-triangle|닫힌 삼각형]]의 것이고, 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이다. 열린집합은 $(\mathbb{C}, d)$의 것이고, "열린집합에서 정칙"은 [[complex-derivative|복소 미분]]의 것이며, 연속은 $U$에 $(\mathbb{C}, d)$의 부분공간 위상을 준 것이다.

**예외점이 있는 구르사 정리.** $U$가 $(\mathbb{C}, d)$의 열린집합이고 $p \in U$이며 $f : U \to \mathbb{C}$가 연속이라 하자. $U - \{p\}$는 열린집합이고, $f$가 $U - \{p\}$에서 정칙이면, $\Delta(a, b, c) \subseteq U$인 모든 복소수 $a$, $b$, $c$에서
$$
\int_{\partial\Delta(a, b, c)} f = 0
$$
이다.
:::

:::english
Closed triangles $\Delta(a, b, c)$ and boundary chains $\partial\Delta(a, b, c)$ are as in the entry on closed triangles, and path integrals along chains are as in the entry on path integrals. Open sets are those of $(\mathbb{C}, d)$, "holomorphic on an open set" is as in the entry on the complex derivative, and continuity refers to the subspace topology of $(\mathbb{C}, d)$ on $U$.

**Goursat's theorem with an exceptional point.** Let $U$ be an open set of $(\mathbb{C}, d)$, $p \in U$, and $f : U \to \mathbb{C}$ continuous. Then $U - \{p\}$ is an open set, and if $f$ is holomorphic on $U - \{p\}$, then for all complex numbers $a$, $b$, $c$ with $\Delta(a, b, c) \subseteq U$,
$$
\int_{\partial\Delta(a, b, c)} f = 0.
$$
:::

## 직관

$p$가 삼각형 밖에 있으면 삼각형 전체에서 $f$가 정칙이므로 [[goursat-theorem|구르사 정리]]입니다. $p$가 삼각형 안에 있으면 삼각형을 $p$를 꼭짓점으로 하는 세 조각으로 나눌 수 있으므로, $p$가 꼭짓점인 삼각형만 보면 됩니다.

꼭짓점 $p$ 쪽에 닮은꼴의 작은 삼각형(비율 $\lambda$)을 떼어 내면 남는 부분은 $p$를 품지 않는 두 삼각형이고, 그 둘의 둘레 적분은 구르사 정리로 $0$입니다. 그러니 원래 둘레 적분은 작은 삼각형의 둘레 적분과 같고, $f$가 연속이라 삼각형 위에서 유계이므로 그 값은 $\lambda$에 비례하는 수 이하입니다. $\lambda$를 얼마든지 작게 잡을 수 있으므로 적분은 $0$입니다. 극한을 쓰지 않고 "모든 $\lambda$에서 이 부등식이 성립한다"로 끝냅니다.

꼭짓점이 한 직선 위에 있으면 남는 두 삼각형이 $p$를 품을 수 있어 이 논법이 그대로 되지 않습니다. 그때는 둘레 경로열이 선분을 갔다가 되돌아오는 길이라 적분이 바로 $0$입니다. 비유하면 바늘구멍 하나가 난 천은 그 구멍 둘레를 아무리 작게 꿰매도 새는 양이 꿰맨 둘레에 비례하므로, 구멍 근처에서 물(함숫값)이 넘치지 않는 한 결국 새지 않는 셈입니다. 이 비유의 "넘치지 않는다"가 $p$에서의 연속(유계)에 해당합니다.

## 증명

:::idea
$p$가 삼각형 밖이면 구르사 정리이고, 안이면 닫힌 삼각형의 (6)으로 $p$를 꼭짓점으로 하는 삼각형으로 줄인다. 그 삼각형이 퇴화했으면 (9)의 (iii)으로 $0$이고, 아니면 (7)의 작은 삼각형만 남겨 ML 부등식으로 모든 $0 < \lambda < 1$에서 $|\int| \le M\lambda\ell$을 얻는다.
:::

:::hint
$x = p + \lambda(b - p)$, $y = p + \lambda(c - p)$로 두면 $\Delta(x, b, c)$와 $\Delta(x, c, y)$는 꼭짓점이 한 직선 위에 있지 않은 한 $p$를 품지 않습니다.
:::

:::hint
실수 $I \ge 0$과 $K \ge 0$이 모든 $0 < \lambda < 1$에서 $I \le K\lambda$를 만족하면, $I > 0$일 때 $\lambda$를 $\tfrac{1}{2}$과 $I/(2K)$ 가운데 작은 것으로 잡아 모순을 얻습니다.
:::

:::proof
"삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]]의 번호이다.

**$U - \{p\}$는 열린집합.** [[open-set-in-metric-space]]의 (5)에 의해 $\{p\}$는 닫힌집합이므로 $\mathbb{C} - \{p\}$는 열린집합이고, $U - \{p\} = U \cap (\mathbb{C} - \{p\})$는 [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (3)에 의해 열린집합이다. $f$가 $U - \{p\}$에서 정칙이므로 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 제한 $f_0 = f|_{U - \{p\}}$는 정칙함수이다.

**구르사 정리의 쓰임.** $V$가 $\Delta(V) \subseteq U - \{p\}$인 꼭짓점의 세 쌍이면, [[goursat-theorem|구르사 정리]]를 $U - \{p\}$와 $f_0$에 써서 $\int_{\partial\Delta(V)} f_0 = 0$이고, 둘레의 상 위에서 $f_0$와 $f$의 값이 같으므로 [[path-integral|경로 적분]]의 (1)에 의해 $\int_{\partial\Delta(V)} f = 0$이다. 아래에서 이것을 (가)라 부른다.

**보조: 꼭짓점이 $p$인 삼각형.** 복소수 $b$, $c$에 대하여 $\Delta(p, b, c) \subseteq U$이면 $\int_{\partial\Delta(p, b, c)} f = 0$임을 보인다. $f$는 $U$ 위에서 연속이므로 삼각형 (2)에 의해 이 적분은 정해진다. $u = b - p$, $v = c - p$로 두자.

*퇴화한 경우.* $\operatorname{Im}(\overline{u}v) = 0$이면 삼각형 (9)의 (iii)에 의해 적분은 $0$이다.

*퇴화하지 않은 경우.* $\operatorname{Im}(\overline{u}v) \ne 0$이라 하자. 삼각형 (3)에 의해 $\Delta(p, b, c)$는 공집합이 아닌 콤팩트 부분집합이므로 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (4)의 (ii)에 의해 그 위에서 $|f(z)| \le M$인 실수 $M$이 있다($M = |f(c_1)|$, $c_1$은 그 항목이 주는 점). $0 \le M$이다. $K = M\,\ell(\partial\Delta(p, b, c))$로 두면 $0 \le K$이다. $0 < \lambda < 1$인 실수 $\lambda$를 아무것이나 잡고 $x = p + \lambda u$, $y = p + \lambda v$라 하자. 삼각형 (7)에 의해
$$
\begin{aligned}
\int_{\partial\Delta(p, b, c)} f &= \int_{\partial\Delta(p, x, y)} f \\
&\quad + \int_{\partial\Delta(x, b, c)} f \\
&\quad + \int_{\partial\Delta(x, c, y)} f
\end{aligned}
$$
이다. 삼각형 (7)에 의해 $\Delta(x, b, c)$와 $\Delta(x, c, y)$는 $\Delta(p, b, c) \subseteq U$의 부분집합이고, 삼각형 (9)의 (ii)에 의해 $p$를 원소로 갖지 않으므로 $U - \{p\}$의 부분집합이다. (가)에 의해 둘째, 셋째 적분은 $0$이다. $\partial\Delta(p, x, y)$의 상은 $\Delta(p, x, y) \subseteq \Delta(p, b, c)$에 들고(삼각형 (2), (7)) 그 위에서 $|f| \le M$이므로, [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (2)의 (i)과 삼각형 (7)에 의해
$$
\begin{aligned}
\Bigl|\int_{\partial\Delta(p, b, c)} f\Bigr| &\le M\,\lambda\,\ell(\partial\Delta(p, b, c)) \\
&= K\lambda
\end{aligned}
$$
이다. 이 부등식은 $0 < \lambda < 1$인 모든 $\lambda$에서 성립한다. $I = \bigl|\int_{\partial\Delta(p, b, c)} f\bigr|$라 하고 $0 < I$라 가정하자. $K = 0$이면 $I \le 0$이 되어 어긋난다. $0 < K$이면 $\lambda = \min\{\tfrac{1}{2},\ I(2K)^{-1}\}$은 $0 < \lambda < 1$이고([[absolute-value]]의 (10)) $I \le K\lambda \le I/2$가 되어 어긋난다. 따라서 $I = 0$이고, [[modulus-of-complex-number|절댓값]]의 (1)에 의해 적분은 $0$이다.

**정리의 증명.** $\Delta = \Delta(a, b, c) \subseteq U$라 하자. $p \notin \Delta$이면 $\Delta \subseteq U - \{p\}$이므로 (가)에 의해 적분은 $0$이다. $p \in \Delta$이면 삼각형 (6)에 의해
$$
\begin{aligned}
\int_{\partial\Delta} f &= \int_{\partial\Delta(a, b, p)} f \\
&\quad + \int_{\partial\Delta(b, c, p)} f \\
&\quad + \int_{\partial\Delta(c, a, p)} f
\end{aligned}
$$
이고 세 삼각형은 $\Delta \subseteq U$의 부분집합이다. 삼각형 (1)에 의해 $\int_{\partial\Delta(a, b, p)} f = \int_{\partial\Delta(p, a, b)} f$이고(순환을 두 번), 나머지 둘도 같다. 보조에 의해 세 적분은 모두 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[(exp(z) − 1)/z 와 0 에서의 값 1]
$f(z) = (\exp(z) - 1)z^{-1}$($z \ne 0$), $f(0) = 1$로 정한 $f : \mathbb{C} \to \mathbb{C}$를 봅시다. [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수이고 $\exp'(0) = 1$입니다. $z \ne 0$에서 $f(z)$는 $\exp$의 $0$에서의 차분몫($\exp(0) = 1$)이므로, 미분계수의 정의와 [[limit-of-complex-function|복소함수의 극한]]의 (6)의 (i)에 의해 $f$는 $0$에서 $1 = f(0)$으로 수렴하고 같은 항목의 (11)의 (i)에 의해 $0$에서 연속입니다. $\mathbb{C} - \{0\}$에서는 [[complex-derivative-rules|복소 미분의 법칙]]의 (1), (3)의 (iii)과 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 정칙이고, 그 점들에서 연속입니다. 따라서 이 정리를 $U = \mathbb{C}$, $p = 0$에 쓸 수 있고, 모든 닫힌 삼각형의 둘레 적분이 $0$입니다.
:::

:::counterexample[0 에서 연속이 아닌 함수의 둘레 적분]
$f(z) = z^{-1}$($z \ne 0$), $f(0) = 0$으로 정한 $f : \mathbb{C} \to \mathbb{C}$는 $\mathbb{C} - \{0\}$에서 정칙이지만($z^{-1}$의 함수의 제한) $0$에서 연속이 아닙니다. $0 < |z| < 1$이면 $|f(z) - f(0)| = |z|^{-1} > 1$이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)의 조건이 $\varepsilon = 1$에서 성립하지 않습니다. $\Delta = \Delta(-1 - i,\ 1 - i,\ i)$이고 $(a_1, a_2, a_3) = (-1 - i, 1 - i, i)$로 둡시다. 변 $\sigma_{z_1,z_2}$의 점 $\sigma(t) = z_1 + t(z_2 - z_1)$에서 $(z_2 - z_1)\overline{\sigma(t)} = (z_2 - z_1)\overline{z_1} + t|z_2 - z_1|^2$이므로 $\operatorname{Im}\bigl((z_2 - z_1)\overline{\sigma(t)}\bigr) = \operatorname{Im}\bigl((z_2 - z_1)\overline{z_1}\bigr)$이고, 세 변에서 이 값은 $\operatorname{Im}(2(-1 + i)) = 2$, $\operatorname{Im}((-1 + 2i)(1 + i)) = 1$, $\operatorname{Im}((-1 - 2i)(-i)) = 1$로 모두 양수입니다. 그래서 변 위에서 $\sigma(t) \ne 0$이고, 피적분함수 $(z_2 - z_1)\sigma(t)^{-1} = (z_2 - z_1)\overline{\sigma(t)}\,|\sigma(t)|^{-2}$의 허수부는 양수인 연속함수입니다. [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (1)과 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (5)에 의해 각 변의 적분의 허수부는 양수이므로 $\operatorname{Im}\int_{\partial\Delta} f > 0$이고, 적분은 $0$이 아닙니다. $0 = \tfrac{1}{4}(-1 - i) + \tfrac{1}{4}(1 - i) + \tfrac{1}{2}i$이므로 $0 \in \Delta$입니다. 예외점에서 연속이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$p$가 삼각형의 밖에 있으면 이 정리는 무엇을 말하는가?]
$\Delta(a, b, c) \subseteq U - \{p\}$이고 $f$가 거기서 정칙이므로 [[goursat-theorem|구르사 정리]]가 말하는 것과 같습니다. $p$에서의 연속은 $p$가 삼각형에 들 때만 쓰입니다.
:::

:::check[$f$가 $U$ 전체에서 정칙이면 이 정리를 쓸 수 있는가?]
쓸 수 있습니다. [[complex-derivative|복소 미분]]의 (3)에 의해 $f$는 연속이고, $U$의 아무 점을 $p$로 잡으면 $f$는 $U - \{p\}$에서 정칙입니다. 결론은 구르사 정리와 같습니다.
:::
