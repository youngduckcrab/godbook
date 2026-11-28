---
title: 구르사 정리
title_en: Goursat's Theorem
aliases: [코시–구르사 정리, 삼각형에 대한 코시 정리, Cauchy–Goursat theorem, Goursat theorem for triangles]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 열린집합 U 위의 정칙함수와 U 에 드는 닫힌 삼각형에 대하여 둘레 경로열을 따른 적분이 0 이다. 삼각형을 넷으로 나누어 적분이 가장 덜 줄어드는 조각 가운데 가장 작은 번호를 재귀 정리로 이어 가고, 칸토어 교집합 정리로 얻은 점에서의 미분가능성으로 적분을 누른다.
requires: [derivative-of-complex-exponential, integrals-over-circles, real-number-arithmetic, order-properties-of-reals, absolute-value, mathematical-induction, well-ordering-principle, recursion-theorem, power-of-a-real-number, limit-of-sequence, limit-of-sum-and-product, geometric-sequence-limit, squeeze-lemma, cantor-intersection-theorem, diameter, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, complex-finite-sum, complex-plane-as-metric-space, continuity-of-complex-operations, complex-derivative, path-integral, length-of-path-and-ml-inequality, primitive-and-path-integral, closed-triangle]
proof: full
sources:
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.2 와 그 증명 (k.txt 189–245줄, p.4–5), Comments 의 구르사에 관한 문단 (395–398줄, p.7)"
    checked: original
    note: "출처 Proposition 2.2 의 2. 는 직사각형 R 이 통째로 U 에 들고 f 가 정칙이면 R 의 둘레 적분이 0 이라는 것이고(193–195줄), 이 항목은 같은 진술을 닫힌 삼각형으로 바꾼 것이다. 출처의 증명(212–245줄)은 R 을 넷으로 나누고 |∫_{R_j}| ≥ |∫_R|/4 인 j 를 '어떤 j' 로 잡는 일을 되풀이해 겹친 직사각형을 얻고(212–218줄), 그 교점을 'by the completeness of C' 로 얻은 뒤(220–227줄), f(z) = f(z₀) + f′(z₀)(z − z₀) + Δ(z)(z − z₀) 로 써서 일차 부분의 적분이 0 이고 나머지의 적분이 εp(R_n)² 보다 작음을 보인다(227–245줄). 이 항목은 (i) 되풀이해 고르는 대신 조건을 만족하는 j 가운데 가장 작은 것을 정렬 원리로 정해 재귀 정리로 삼각형의 열을 정하고, (ii) 교점은 칸토어 교집합 정리의 지름이 0 으로 가는 판으로 얻으며, (iii) 나머지 h 를 f 에서 일차 부분을 뺀 연속함수로 정의해 그 경로 적분이 정의되게 하고 |h(z)| ≤ ε|z − z₀| 는 카라테오도리 꼴의 φ 의 연속에서 얻으며, (iv) 출처의 코시 합 대신 매개화한 경로 적분과 ML 부등식을 쓴다. 출처의 Comments(395–398줄)는 구르사가 f′ 의 연속 없이 이 정리를 처음 증명했다고 적는다. 예시 '1/z 를 0 을 품지 않는 삼각형에서'는 출처가 Proposition 2.4 의 증명(301–305줄, p.6)에서 X 와 만나지 않는 조각 R_i 위의 적분을 Proposition 2.2 의 2. 로 0 이라 하는 것과 같은 쓰임이다."
  - ref: beck-first-course-complex-analysis
    loc: "Cauchy's Theorem 절, 정리 뒤의 역사 문단, source/sec_cauchythm.ptx:105–118; 연습문제 ex_varint, source/exercises-chap4.ptx:183–235"
    checked: original
    note: "출처는 코시 정리를 '코시–구르사 정리'라고도 부르는 까닭으로, 코시가 f 의 도함수가 연속이라고 가정했고 그 조건을 처음 없앤 사람이 구르사라고 적는다(113–118줄). 출처의 코시 정리 자체는 호모토피로 진술한 것이고 이 항목의 삼각형판과 진술이 다르다. 반례 '정칙이 아닌 Re z 의 삼각형 적분'의 함수 Re z 는 연습문제 ex_varint(183–235: 선분과 원에서 x, y, z, z̄ 를 적분하라)의 x 와 같은 함수이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(구르사 증명의 재귀와 어림 통독, 둘레 적분 예 재계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
닫힌 삼각형 $\Delta(a, b, c)$, 둘레 경로열 $\partial\Delta(a, b, c)$와 둘레의 길이는 [[closed-triangle|닫힌 삼각형]]의 것이고, 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이다. 열린집합은 $(\mathbb{C}, d)$의 것이고, 정칙함수는 [[complex-derivative|복소 미분]]의 것이다.

**구르사 정리.** $U$가 $(\mathbb{C}, d)$의 열린집합이고 $f : U \to \mathbb{C}$가 정칙함수라 하자. 복소수 $a$, $b$, $c$에 대하여 $\Delta(a, b, c) \subseteq U$이면
$$
\int_{\partial\Delta(a, b, c)} f = 0
$$
이다. 삼각형이 퇴화해도 된다.
:::

:::english
Closed triangles $\Delta(a, b, c)$, boundary chains $\partial\Delta(a, b, c)$ and the length of the boundary are as in the entry on closed triangles, and path integrals along chains are as in the entry on path integrals. Open sets are those of $(\mathbb{C}, d)$, and holomorphic functions are as in the entry on the complex derivative.

**Goursat's theorem.** Let $U$ be an open set of $(\mathbb{C}, d)$ and $f : U \to \mathbb{C}$ a holomorphic function. For complex numbers $a$, $b$, $c$, if $\Delta(a, b, c) \subseteq U$, then
$$
\int_{\partial\Delta(a, b, c)} f = 0.
$$
The triangle may be degenerate.
:::

## 직관

삼각형을 넷으로 나누면 둘레 적분은 네 조각의 둘레 적분의 합입니다. 그러니 적분의 절댓값이 원래의 $1/4$ 이상인 조각이 적어도 하나 있고, 그런 조각을 골라 다시 넷으로 나누는 일을 되풀이하면 둘레가 절반씩 줄어드는 삼각형들이 한 점 $z_0$으로 오그라듭니다. $n$번째 삼각형의 적분의 절댓값은 원래 적분의 절댓값의 $1/4^{n-1}$ 이상입니다.

한편 $z_0$ 근처에서 $f$는 일차함수 $f(z_0) + f'(z_0)(z - z_0)$와 거의 같고, 그 차의 절댓값은 $\varepsilon|z - z_0|$ 이하입니다. 일차함수의 둘레 적분은 $0$이므로 $n$번째 삼각형의 적분은 그 차의 적분뿐이고, ML 부등식으로 $\varepsilon \times (\text{둘레})^2$, 곧 $\varepsilon \times (\text{원래 둘레})^2/4^{n-1}$ 이하입니다. 두 어림을 맞대면 원래 적분이 $\varepsilon \times (\text{원래 둘레})^2$ 이하이고, $\varepsilon$은 아무 양수이므로 $0$입니다.

비유하면, 넓은 땅의 오르내림의 합을 알려고 땅을 넷으로 나눠 가장 굴곡이 남는 곳으로 계속 확대해 들어가는 셈입니다. 끝까지 확대하면 그 점에서 땅은 평평한 경사면(일차함수)처럼 보이고, 경사면을 한 바퀴 돌면 오르내림이 $0$입니다. 이 증명은 $f'$의 연속을 쓰지 않습니다. 미분가능성은 오그라드는 점 $z_0$에서만 쓰지만, 그 점이 어디일지 미리 알 수 없으므로 삼각형 전체에서 정칙이라는 가정이 필요합니다. 조각을 "고르는" 대목은 조건을 만족하는 번호 가운데 가장 작은 것으로 정해 선택을 쓰지 않습니다.

## 증명

:::idea
넷으로 나눈 조각 가운데 적분의 절댓값이 $1/4$ 이상인 가장 작은 번호의 조각을 재귀 정리로 이어 가 삼각형의 감소열을 만들고, 칸토어 교집합 정리로 얻은 점 $z_0$에서 $f$에서 일차 부분을 뺀 함수를 ML 부등식으로 누른다.
:::

:::hint
$|I| \le |I_1| + |I_2| + |I_3| + |I_4|$이면 $|I_j| \ge |I|/4$인 $j$가 있습니다. 그런 $j$의 집합은 $\{1, 2, 3, 4\}$의 공집합이 아닌 부분집합이므로 가장 작은 원소가 하나로 정해집니다.
:::

:::hint
$h(z) = f(z) - f(z_0) - f'(z_0)(z - z_0)$는 $U$ 위의 연속함수이고, 카라테오도리 꼴의 $\varphi$로 쓰면 $h(z) = (\varphi(z) - \varphi(z_0))(z - z_0)$입니다.
:::

:::proof
"삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]]의 번호, "길이 (n)"은 [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 번호, "적분 (n)"은 [[path-integral|경로 적분]]의 번호이다. $f$는 정칙함수이므로 [[complex-derivative|복소 미분]]의 (3)에 의해 연속이다.

**1단계: 조각을 정하는 함수.** 복소수의 세 쌍 $(u, v, w)$ 가운데 $\Delta(u, v, w) \subseteq \Delta(a, b, c)$인 것 전체의 집합을 $X$라 하자. $(a, b, c) \in X$이다. $x = (u, v, w) \in X$이면 $\Delta(x) = \Delta(u, v, w) \subseteq U$이고 $f$는 그 위에서 연속이므로 삼각형 (2)에 의해 $I(x) = \int_{\partial\Delta(x)} f$가 정해진다. 삼각형 (5)의 네 조각의 꼭짓점의 세 쌍을 $T_1(x)$, $T_2(x)$, $T_3(x)$, $T_4(x)$라 하자(꼭짓점의 식으로 정해진다). 삼각형 (5)에 의해 $\Delta(T_j(x)) \subseteq \Delta(x) \subseteq \Delta(a, b, c)$이므로 $T_j(x) \in X$이고, $\ell(\partial\Delta(T_j(x))) = \ell(\partial\Delta(x))/2$이며
$$
\begin{aligned}
I(x) &= I(T_1(x)) + I(T_2(x)) \\
&\quad + I(T_3(x)) + I(T_4(x))
\end{aligned}
$$
이다(삼각형 (5)의 등식을 $\sum_{j=1}^{4}$로 적은 것). [[complex-finite-sum|복소수의 유한 합]]의 (7)에 의해 $|I(x)| \le \sum_{j=1}^{4} |I(T_j(x))|$이다. 모든 $j$에서 $|I(T_j(x))| < |I(x)|/4$이면 합이 $|I(x)|$보다 작아 어긋나므로, $J(x) = \{j \in \{1, 2, 3, 4\} : |I(T_j(x))| \ge |I(x)|/4\}$는 $\mathbb{N}$의 공집합이 아닌 부분집합이다. [[well-ordering-principle|정렬 원리]]의 (2)와 (1)에 의해 $J(x)$의 최소 원소 $j^*(x)$는 하나로 정해진다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, x) = T_{j^*(x)}(x)$로 정한 함수 $g : \mathbb{N} \times X \to X$가 있다. 이것은 정해진 대상으로 정한 함수이고, 아무것도 고르지 않는다.

**2단계: 삼각형의 열.** 재귀 정리에 의해 $x(1) = (a, b, c)$이고 모든 자연수 $n$에서 $x(n + 1) = g(n, x(n))$인 함수 $x : \mathbb{N} \to X$가 하나 있다. $\Delta_n = \Delta(x(n))$, $\ell_n = \ell(\partial\Delta_n)$, $I_n = I(x(n))$으로 두면 1단계에 의해 모든 $n$에서
$$
\begin{gathered}
\Delta_{n+1} \subseteq \Delta_n, \quad \ell_{n+1} = \tfrac{1}{2}\ell_n, \\
|I_n| \le 4\,|I_{n+1}|
\end{gathered}
$$
이다. [[mathematical-induction|수학적 귀납법]]으로 모든 자연수 $n$에서
$$
\begin{gathered}
|I_1| \le 4^{n-1}|I_n|, \qquad 4^{n-1}\ell_n^2 = \ell_1^2, \\
\ell_n = \ell_1 \bigl(\tfrac{1}{2}\bigr)^{n-1}
\end{gathered}
$$
이다. $n = 1$이면 $4^0 = (\tfrac{1}{2})^0 = 1$이므로 세 식이 성립하고, $n$에서 성립하면 $|I_1| \le 4^{n-1} \cdot 4|I_{n+1}| = 4^n|I_{n+1}|$, $4^n\ell_{n+1}^2 = 4^{n-1} \cdot 4 \cdot \tfrac{1}{4}\ell_n^2 = \ell_1^2$, $\ell_{n+1} = \ell_1(\tfrac{1}{2})^{n-1} \cdot \tfrac{1}{2} = \ell_1(\tfrac{1}{2})^n$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1)).

**3단계: 한 점으로 오그라든다.** [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $(\tfrac{1}{2})^n \to 0$이고, $\ell_n = 2\ell_1 (\tfrac{1}{2})^n$이므로 [[limit-of-sum-and-product|합과 곱의 극한]]의 (5)에 의해 $(\ell_n)$은 $0$으로 수렴한다. 삼각형 (3)에 의해 각 $\Delta_n$은 $\mathbb{C}$의 공집합이 아닌 콤팩트 부분집합이고, 삼각형 (4)와 [[diameter]]의 (2)의 (i)에 의해 $0 \le \operatorname{diam}\Delta_n \le \ell_n$이다. 모든 항이 $0$인 수열은 $0$으로 수렴하므로([[limit-of-sequence]]의 정의) [[squeeze-lemma|조임 정리]]의 (1)에 의해 $(\operatorname{diam}\Delta_n)$은 $0$으로 수렴한다. $(\Delta_n)$은 감소하므로 [[cantor-intersection-theorem|칸토어 교집합 정리]]의 (4)를 거리공간 $(\mathbb{C}, d)$에 쓰면 $\bigcap\{\Delta_n : n \in \mathbb{N}\} = \{z_0\}$인 점 $z_0$이 있다. 모든 $n$에서 $z_0 \in \Delta_n \subseteq \Delta_1 \subseteq U$이다.

**4단계: 일차 부분을 뺀 함수.** $z \in U$에서 $h(z) = f(z) - f(z_0) - f'(z_0)(z - z_0)$로 정한 $h : U \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 연속이다. 복소 미분의 (2)의 (i)에 의해 $z_0$에서 연속인 $\varphi : U \to \mathbb{C}$가 있어 $f(z) - f(z_0) = \varphi(z)(z - z_0)$이고 $\varphi(z_0) = f'(z_0)$이므로, 모든 $z \in U$에서 $h(z) = (\varphi(z) - \varphi(z_0))(z - z_0)$이다. $\varepsilon > 0$이라 하자. 복소수 연산의 연속의 (6)의 (i)에 의해 $\delta > 0$이 있어 $z \in U$, $|z - z_0| < \delta$이면 $|\varphi(z) - \varphi(z_0)| < \varepsilon$이고, 따라서 $|h(z)| \le \varepsilon\,|z - z_0|$이다([[modulus-of-complex-number|절댓값]]의 (3)).

**5단계: 누르기.** $(\ell_n)$이 $0$으로 수렴하므로 수렴의 정의에 의해 $\ell_n < \delta$인 자연수 $n$이 있다. 그 $n$에서 $z \in \Delta_n$이면 $z_0 \in \Delta_n$이므로 삼각형 (4)에 의해 $|z - z_0| \le \ell_n < \delta$이고, 따라서 $|h(z)| \le \varepsilon\,\ell_n$이다. $f(z) = \bigl(f(z_0) + f'(z_0)(z - z_0)\bigr) + h(z)$이므로 적분 (1)(선형성과 상 위의 값)과 삼각형 (10)에 의해 $I_n = 0 + \int_{\partial\Delta_n} h$이다. $\partial\Delta_n$의 상은 $\Delta_n$의 부분집합이므로(삼각형 (2)) 길이 (2)의 (i)(경로열판)에 의해
$$
|I_n| \le \varepsilon\,\ell_n \cdot \ell_n = \varepsilon\,\ell_n^2
$$
이다. 2단계에 의해 $|I_1| \le 4^{n-1}\varepsilon\,\ell_n^2 = \varepsilon\,\ell_1^2$이다.

**6단계: 결론.** $\varepsilon$은 아무 양수였으므로 모든 양수 $\varepsilon$에서 $|I_1| \le \varepsilon\,\ell_1^2$이다. $\ell_1 = 0$이면 $|I_1| \le 0$이다. $\ell_1 > 0$이고 $|I_1| > 0$이면 $\varepsilon = |I_1|\,(2\ell_1^2)^{-1}$에서 $|I_1| \le |I_1|/2$가 되어 어긋난다. 어느 경우든 [[modulus-of-complex-number|절댓값]]의 (1)에 의해 $I_1 = \int_{\partial\Delta(a, b, c)} f = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[1/z 를 0 을 품지 않는 삼각형에서]
$U = \mathbb{C} - \{0\}$은 열린집합이고 $f(z) = z^{-1}$로 정한 $f : U \to \mathbb{C}$는 정칙함수입니다([[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 (4)의 (i), $a = 0$, $k = -1$). $\Delta(1, 2, 1 + i)$의 점은 [[closed-triangle|닫힌 삼각형]]의 (1)의 무게 꼴 $\lambda_1 + 2\lambda_2 + \lambda_3(1 + i)$이고 그 실수부는 $\lambda_1 + 2\lambda_2 + \lambda_3 \ge 1$이므로 $0$이 아닙니다. 곧 $\Delta(1, 2, 1 + i) \subseteq U$이고, 구르사 정리에 의해 $\int_{\partial\Delta(1, 2, 1 + i)} z^{-1}\,dz = 0$입니다. $\frac{1}{z}$는 $U$ 위에서 복소 원시함수를 갖지 않지만([[integrals-over-circles|원 경로 위의 적분]]의 (6)), 이 삼각형의 둘레 적분은 $0$입니다.
:::

:::counterexample[정칙이 아닌 Re z 의 삼각형 적분]
$f(z) = \operatorname{Re} z$, 곧 $\iota(\operatorname{Re} z)$로 정한 $f : \mathbb{C} \to \mathbb{C}$는 연속이지만, $\partial\Delta(0, 1, i)$를 따른 적분은 $0$이 아닙니다. $\sigma_{0,1}(t) = t$에서 $\int_0^1 t\,dt = \tfrac{1}{2}$이고, $\sigma_{1,i}(t) = (1 - t) + ti$에서 피적분함수가 $(1 - t)(i - 1)$이므로 $\tfrac{1}{2}(i - 1)$이며, $\sigma_{i,0}(t) = (1 - t)i$에서 실수부가 $0$이라 $0$입니다. 합은 $\tfrac{1}{2}i \ne 0$입니다. 구르사 정리의 대우에 의해 $\Delta(0, 1, i)$를 포함하는 어떤 열린집합 위에서도 $\operatorname{Re} z$는 정칙함수가 아닙니다. 정칙이라는 가정을 연속으로 바꾸면 결론이 성립하지 않을 수 있습니다.
:::

## 역사와 맥락

Beck 등은 코시 정리가 흔히 코시–구르사 정리라 불린다고 적고, 그 까닭으로 코시는 도함수가 연속이라고 가정했고 그 조건을 처음 없앤 사람이 구르사(1858–1936)라고 적습니다. Klazar 도 구르사가 도함수의 존재만 가정하고 연속은 가정하지 않은 채 코시 정리를 처음 증명했다고 적습니다. 이 항목의 증명도 $f'$의 연속을 쓰지 않습니다.

## 확인 질문

:::check[구르사 정리를 $f(z) = \exp(z)$와 $\Delta(0, 3, 3i)$에 쓸 수 있는가?]
[[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp$는 정함수, 곧 $U = \mathbb{C}$ 위의 정칙함수이고 $\Delta(0, 3, 3i) \subseteq \mathbb{C}$이므로 쓸 수 있습니다. 둘레 적분은 $0$입니다.
:::

:::check[$f(z) = z^{-1}$로 정한 $f : \mathbb{C} - \{0\} \to \mathbb{C}$와 $\Delta(-1, 1, i)$에 구르사 정리를 쓸 수 있는가?]
쓸 수 없습니다. $0 = \tfrac{1}{2}(-1) + \tfrac{1}{2} \cdot 1 + 0 \cdot i$이므로 [[closed-triangle|닫힌 삼각형]]의 (1)에 의해 $0 \in \Delta(-1, 1, i)$이고, 삼각형이 $f$의 정의역에 들지 않습니다. $0$은 변 $\sigma_{-1,1}$의 상에도 들어서 둘레 적분 자체가 정해지지 않습니다.
:::
