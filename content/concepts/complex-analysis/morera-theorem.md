---
title: 모레라 정리
title_en: Morera's Theorem
aliases: [모레라의 정리, 삼각형 조건과 정칙, Morera's theorem]
kind: theorem
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: "열린집합 위의 연속함수가 그 안에 드는 모든 닫힌 삼각형의 둘레에서 적분이 0 이면 정칙함수이다. 원판마다 별 모양 집합의 원시함수를 만들고, 원시함수의 도함수가 다시 정칙이라는 것을 쓴다. 따라서 연속함수가 정칙인 것은 삼각형 조건과 같고, 한 점에서 연속이고 나머지에서 정칙인 함수는 그 점에서도 정칙이다."
requires: [complex-plane-as-metric-space, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, order-properties-of-reals, subspace-and-continuity, complex-number, complex-field, modulus-of-complex-number, continuity-of-complex-operations, limit-of-complex-function, complex-derivative, complex-derivative-rules, complex-exponential-function, derivative-of-complex-exponential, path-integral, closed-triangle, goursat-theorem, goursat-theorem-with-exceptional-point, star-shaped-open-set, cauchy-theorem-for-star-shaped-sets, holomorphic-derivatives-and-cauchy-estimates, complex-differentiability-examples]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Antiderivatives Again 절의 Corollary morera 와 그 증명, 그 뒤 문단, source/sec_antiderivagain.ptx:16–50"
    checked: original
    note: "출처 Corollary morera(sec_antiderivagain.ptx:16–29)는 영역 G 에서 연속인 f 가 G 안의 모든 조각마다 매끄러운 닫힌 경로에서 적분이 0 이면 정칙이라고 진술하고, 증명(30–38)은 Theorem thm_FTC1 의 원시함수 F 와 Corollary infdiff 로 F′ = f 가 정칙이라고 한다. 출처는 그 뒤 문단(40–50)에서 닫힌 다각형 경로만으로 조건을 바꾸면 더 강한 판이 된다고 적는다. 이 항목의 (1)은 조건을 G 에 드는 닫힌 삼각형의 둘레로 더 줄이고, 정의역을 영역 대신 열린집합으로 둔다. 원시함수는 G 전체가 아니라 각 점의 원판에서만 만든다(별 모양 집합의 원시함수). (3)의 이름은 붙이지 않는다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시 부등식의 수열 없는 귀류, 계수 유일성의 번호). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수는 [[complex-number]], 체 $\mathbb{C}$의 연산은 [[complex-field]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, R)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이며, 연속은 정의역에 부분공간 위상을 준 것이다. 정칙함수와 "열린집합에서 정칙"은 [[complex-derivative|복소 미분]]의 것이다. 닫힌 삼각형 $\Delta(a, b, c)$와 둘레 경로열 $\partial\Delta(a, b, c)$는 [[closed-triangle|닫힌 삼각형]]의 것이고, 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이고 $f : G \to \mathbb{C}$는 연속이다.

1. (**모레라 정리**) $\Delta(a, b, c) \subseteq G$인 모든 복소수 $a$, $b$, $c$에서
   $$
   \int_{\partial\Delta(a, b, c)} f = 0
   $$
   이면 $f$는 정칙함수이다.
2. (삼각형 조건과 정칙) $f$가 정칙함수인 것은 정확히 (1)의 조건이 성립할 때이다.
3. (한 점) $q \in G$이고 $f$가 $G - \{q\}$에서 정칙이면 $f$는 정칙함수이다. 곧 $f$는 $q$에서도 복소 미분가능하다.
:::

:::english
Complex numbers are those of the entry on complex numbers, and the operations of the field $\mathbb{C}$ are those of the entry on the field of complex numbers. The metric and topology of $\mathbb{C}$ and open balls $B(a, R)$ are those of the entry on the metric of the complex plane, open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and continuity is with the subspace topology on the domain. Holomorphic functions and "holomorphic on an open set" are those of the entry on the complex derivative. Closed triangles $\Delta(a, b, c)$ and boundary chains $\partial\Delta(a, b, c)$ are those of the entry on closed triangles, and path integrals along chains are those of the entry on path integrals.

Below, $G$ is an open set of $(\mathbb{C}, d)$ and $f : G \to \mathbb{C}$ is continuous.

1. (**Morera's theorem**) If
   $$
   \int_{\partial\Delta(a, b, c)} f = 0
   $$
   for all complex numbers $a$, $b$, $c$ with $\Delta(a, b, c) \subseteq G$, then $f$ is a holomorphic function.
2. (Triangle condition and holomorphy) $f$ is a holomorphic function exactly when the condition of (1) holds.
3. (One point) If $q \in G$ and $f$ is holomorphic on $G - \{q\}$, then $f$ is a holomorphic function. That is, $f$ is complex differentiable at $q$ as well.
:::

## 직관

구르사 정리는 정칙함수가 삼각형 조건을 만족한다는 것이고, 모레라 정리는 그 역입니다. 연속함수가 삼각형 조건을 만족하면 각 점의 원판에서 별 모양 집합의 원시함수 $F$가 생깁니다. $F$는 정칙이므로 무한 번 미분가능하고, 그 도함수 $F' = f$도 정칙입니다. 정칙인지는 점마다 그 둘레의 원판에서만 따지면 되므로 $G$ 전체에서 원시함수를 만들 필요가 없습니다.

(3)은 쓸모가 큽니다. 한 점에서 미분가능한지 직접 보이기 어려울 때, 그 점에서 연속이고 나머지에서 정칙이라는 것만 보이면 됩니다. 예외점이 있는 구르사 정리가 삼각형 조건을 주기 때문입니다. 연속이라는 가정은 뺄 수 없습니다(아래 반례).

비유하면, 둘레를 한 바퀴 돌아 제자리에 오면 늘 높이 변화가 $0$인 땅에는 높이 함수가 있고, 그 높이 함수가 매끄러우니 땅의 기울기도 매끄럽다는 것입니다. 비유가 맞지 않는 곳은 여기서 "기울기"가 $f$ 자신이고 값이 복소수라는 것입니다.

## 증명

:::idea
각 점 $b$의 원판 $B(b, R) \subseteq G$는 $b$에 대해 별 모양이므로, 삼각형 조건으로 그 원판 위의 원시함수 $F$를 얻는다. $F$가 정칙이면 $F'$도 정칙이므로 $f$는 $b$에서 미분가능하다.
:::

:::hint
$f$를 원판 $B = B(b, R)$로 제한한 함수는 $B$에 드는 삼각형에서 둘레의 적분이 $f$의 것과 같습니다.
:::

:::proof
"코시 (n)"은 [[cauchy-theorem-for-star-shaped-sets|별 모양 집합의 원시함수와 코시 정리]], "미분 (n)"은 [[complex-derivative|복소 미분]], "삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]]의 번호이다.

**1의 증명.** $b \in G$를 잡는다. $G$가 열린집합이므로 $B = B(b, R) \subseteq G$인 $R > 0$이 있다. [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B$는 열린집합이고, [[star-shaped-open-set|별 모양 열린집합]]의 (1)에 의해 $b$에 대해 별 모양이다. $h = f|_B$는 [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 연속이다. $z$, $w$가 복소수이고 $\Delta(b, z, w) \subseteq B$이면 $\Delta(b, z, w) \subseteq G$이고, 삼각형 (2)에 의해 세 변의 상은 $B$의 부분집합이며 그 위에서 $h$와 $f$는 같은 값을 가지므로 [[path-integral|경로 적분]]의 (1)과 가정에 의해 $\int_{\partial\Delta(b, z, w)} h = \int_{\partial\Delta(b, z, w)} f = 0$이다. 코시 (1)을 $G = B$, $p = b$, 함수 $h$로 쓰면 $B$ 위의 $h$의 복소 원시함수 $F$가 있다. $F$는 정칙함수이므로 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 그 도함수 $F' = h$는 정칙함수이다. 미분 (4)의 (i)을 $f$와 $B$에 쓰면 $f$는 $b$에서 복소 미분가능하다. $b$는 아무 점이었으므로 $f$는 정칙함수이다.

**2의 증명.** $f$가 정칙함수이면 [[goursat-theorem|구르사 정리]]를 $U = G$로 쓰면 (1)의 조건이 성립한다. 거꾸로는 (1)이다.

**3의 증명.** $G - \{q\}$는 열린집합이다([[open-set-in-metric-space]]의 (5)와 [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (3)). [[goursat-theorem-with-exceptional-point|예외점이 있는 구르사 정리]]를 $U = G$, 예외점 $q$로 쓰면 (1)의 조건이 성립하므로 (1)에 의해 $f$는 정칙함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점을 메운 함수]
$f : \mathbb{C} \to \mathbb{C}$를 $z \ne 0$이면 $f(z) = (\exp(2z) - \exp(z))/z$, $f(0) = 1$로 정합시다. $h(z) = \exp(2z) - \exp(z)$는 [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (3)과 [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 정함수이고 $h'(0) = 2 - 1 = 1$이며, [[complex-exponential-function]]의 (3)에 의해 $h(0) = 0$입니다. 그래서 $f$는 [[complex-derivative|복소 미분]]의 (2)의 (ii)에서 $h$와 $z_0 = 0$으로 만든 함수 $\varphi$이고 $0$에서 연속입니다. $\mathbb{C} - \{0\}$에서는 몫이라 정칙이고 연속입니다([[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (iii)). [[limit-of-complex-function|복소함수의 극한]]의 (11)의 (iii)에 의해 $f$는 연속이고, (3)에 의해 $f$는 정함수입니다. [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 무한 번 미분가능하기도 합니다.
:::

:::counterexample[원점에서 0 으로 정한 $1/z$]
$f(0) = 0$, $z \ne 0$이면 $f(z) = 1/z$로 정한 $f : \mathbb{C} \to \mathbb{C}$는 $\mathbb{C} - \{0\}$에서 정칙이지만 $0$에서 연속이 아닙니다. $0 < |z| < 1$이면 [[modulus-of-complex-number]]의 (4)와 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $|f(z) - f(0)| = 1/|z| > 1$이어서 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)의 조건이 $\varepsilon = 1$에서 깨지기 때문입니다. 그래서 (3)을 쓸 수 없고, 실제로 [[complex-derivative|복소 미분]]의 (3)에 의해 $f$는 $0$에서 복소 미분가능하지 않습니다. 곧 (3)에서 연속이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $|z|^2$인 함수는 $B(0, 1)$에 드는 모든 닫힌 삼각형에서 둘레의 적분이 $0$인가?]
아닙니다. 그렇다면 연속인 이 함수의 $B(0, 1)$로의 제한이 (1)에 의해 정칙함수가 되는데, [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (5)에 의해 $0$이 아닌 점에서는 미분가능하지 않습니다([[complex-derivative|복소 미분]]의 (4)의 (i)로 제한에서도 같습니다). 따라서 둘레의 적분이 $0$이 아닌 닫힌 삼각형이 $B(0, 1)$ 안에 있습니다.
:::

:::check[정함수 $f$에서 $z \ne 0$이면 $g(z) = (f(z) - f(0))/z$, $g(0) = f'(0)$으로 정한 $g$는 정함수인가?]
그렇습니다. [[complex-derivative|복소 미분]]의 (2)의 (ii)에 의해 $g$는 $0$에서 연속이고, $\mathbb{C} - \{0\}$에서는 [[complex-derivative-rules|복소 미분의 법칙]]의 (1), (3)의 (iii)에 의해 정칙이라 연속입니다. 그래서 $g$는 연속이고 (3)을 $q = 0$으로 쓰면 정함수입니다.
:::
