---
title: 복소 미분
title_en: Complex Derivative
aliases: [복소 미분가능, 복소 미분계수, 정칙함수, 정함수, 도함수, 카라테오도리 꼴, complex differentiable, holomorphic function, entire function, complex derivative]
kind: definition
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 열린집합 G 위의 복소함수 f 가 z₀ 에서 복소 미분가능하다는 것을 차분몫의 극한으로 정의하고, 정칙함수와 도함수, 정함수를 정한다. h 꼴, 카라테오도리 꼴 f(z) − f(z₀) = φ(z)(z − z₀), 미분가능하면 연속이라는 것, 열린 부분집합으로의 제한, 일차함수의 도함수, 실수를 실수로 보내는 함수에서 실함수의 도함수와의 일치를 증명한다.
requires: [set-operations, function, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, cluster-point, limit-of-a-function, derivative, complex-number, complex-field, modulus-of-complex-number, open-set-in-metric-space, cluster-point-in-a-space, continuous-map, continuity-in-metric-spaces, complex-plane-as-metric-space, continuity-of-complex-operations, composition-of-continuous-maps, complex-polynomial-function, power-of-a-complex-number, limit-of-complex-function, limit-laws-for-complex-functions]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Differentiability and Holomorphicity 절의 정의(미분, 정칙, 정함수)와 h 꼴의 문단, Example exam_zcubedentire, Proposition derivativerules 의 (e), Proposition inversederivative 의 증명, source/sec_diffholom.ptx:24–63, 65–86, 89–97, 228–232, 403–411; Elementary Topology of the Plane 절의 내부점의 정의, source/sec_topologyintro.ptx:66–69"
    checked: original
    note: "출처의 정의(sec_diffholom.ptx:24–37)는 z₀ 이 G 의 내부점(interior point, sec_topologyintro.ptx:66–69: z₀ 중심의 어떤 열린 원판이 G 에 들어 있는 점)일 때 f′(z₀) 을 (f(z) − f(z₀))/(z − z₀) 의 극한으로 정의한다. 이 항목은 정의역 G 를 열린집합으로 두어 모든 점이 내부점이게 하고, 차분몫을 G − {z₀} 위의 함수로 두며, z₀ 이 그 집적점이라는 것을 복소함수의 극한의 (1)의 (ii)로 확인한다. 출처는 원판에서 미분가능하면 'z₀ 에서 정칙', 열린집합 E 의 모든 점에서 미분가능하면 'E 에서 정칙', ℂ 전체에서 미분가능하면 정함수(entire)라 한다(40–59줄). 이 항목은 'U 에서 정칙'과 정함수만 두고 'z₀ 에서 정칙'은 두지 않는다. 출처는 holomorphic 대신 analytic 을 쓰는 책도 있다고 적는다(42–50줄). 이 사이트의 낱말은 정칙(holomorphic)이고 '해석적'은 쓰지 않는다. (1)은 출처가 정의 뒤(89–97줄)에서 h 꼴을 '같은 정의'라고만 적고 h 가 실수가 아니어도 된다고 덧붙이는 것을 명제로 적어 증명한 것이다. (2)의 카라테오도리 꼴은 출처가 Proposition inversederivative 의 증명(403–411줄)에서 z ≠ z₀ 이면 차분몫, z₀ 에서 f′(z₀) 인 함수 φ 를 두고 그것이 z₀ 에서 연속이라고 적는 것과 같은 함수이다. 출처는 그 연속을 증명 없이 적는다. '카라테오도리 꼴'이라는 이름은 출처에 나오지 않는다(검색어 Carath, Carathéodory, eodory 로 출처의 절과 연습문제 파일 전체를 찾아 0건). (3)은 출처 Proposition derivativerules 의 (e)(228–232줄: g 가 z 에서 미분가능하면 z 에서 연속)와 같은 내용이고, 출처는 그것을 연습문제 ex_diffrules(exercises-chap2.ptx:182–188)로 남긴다. 예시 '$iz^2 + z$ 의 카라테오도리 꼴'은 출처 Example exam_zcubedentire(65–86줄)가 z³ − z₀³ 을 (z² + zz₀ + z₀²)(z − z₀) 로 인수분해해 도함수를 구하는 것과 같은 발상이다. 확인 질문 '$f(z) = z^2$로 정한 $f : \\mathbb{C} \\to \\mathbb{C}$와 $h(x) = x^2$로 정한 $h : \\mathbb{R} \\to \\mathbb{R}$에 (6)을 쓰면 무엇을 얻는가?'의 z² 의 도함수 2z 는 출처 sec_diffholom.ptx:180–187 의 SageMath 계산과 sec_antiderivatives.ptx:38–42 의 예(z² 은 정함수이고 도함수가 2z)에 나온다. 직관 절의 ι(Re z) 는 출처 연습문제 ex_2_2 의 Im z(exercises-chap2.ptx:299–304, 어디서도 미분가능하지 않다)와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(정의역 안으로 좁힌 진술, 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. 열린 공 $B(a, r)$와 $\mathbb{C}$의 부분집합에 주는 거리와 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 복소함수, 집적점, 수렴, 극한의 기호 $\lim_{z \to z_0}$은 [[limit-of-complex-function|복소함수의 극한]]의 것이다. 연속과 "$z_0$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 구간은 [[interval]]의 것이고, 실함수의 미분가능, 미분계수와 그 기호 $h'(c)$, 실함수의 차분몫 $q^h_c$는 [[derivative]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$는 복소함수, $z_0$은 $G$의 점이다. [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (ii)에 의해 $z_0$은 $G$의 집적점이고 $G - \{z_0\}$의 집적점이다.

**차분몫.** $z \in G - \{z_0\}$이면 $z - z_0 \ne 0$이다. $z$에서의 값이
$$
q^f_{z_0}(z) = \frac{f(z) - f(z_0)}{z - z_0}
$$
인 복소함수 $q^f_{z_0} : G - \{z_0\} \to \mathbb{C}$를 $f$의 $z_0$에서의 **차분몫**(difference quotient)이라 한다. 어느 함수의 것인지 분명하면 $q_{z_0}$으로 쓴다.

**복소 미분.** $f$가 $z_0$에서 **복소 미분가능하다**(complex differentiable at $z_0$)는 것은 정확히 $q_{z_0}$이 $z_0$에서 수렴할 때이다. 이때 극한 $\lim_{z \to z_0} q_{z_0}(z)$를 $f$의 $z_0$에서의 **복소 미분계수**(complex derivative of $f$ at $z_0$)라 하고 $f'(z_0)$으로 쓴다. 곧 복소수 $L$에 대하여, $f$가 $z_0$에서 복소 미분가능하고 $f'(z_0) = L$인 것은 정확히 $q_{z_0}$이 $z_0$에서 $L$로 수렴할 때이다. $f'(z_0)$을 $\lim_{z \to z_0} \dfrac{f(z) - f(z_0)}{z - z_0}$로도 쓴다. $f$가 $z_0$에서 복소 미분가능하지 않으면 기호 $f'(z_0)$을 쓰지 않는다. 이 강의에서 정의역이 $\mathbb{C}$의 열린집합인 복소함수에 "미분가능", "미분계수"라고만 쓰면 이 뜻이다. 기호 $f'$은 실함수의 미분계수([[derivative]])와 같은 글자이지만, 정의역이 $\mathbb{C}$의 열린집합인 복소함수에 쓰면 이 뜻이다. 두 뜻이 함께 쓰이는 경우는 아래 (6)이 맞춘다.

**정칙함수, 도함수, 정함수.** $U \subseteq G$가 열린집합일 때 $f$가 **$U$에서 정칙이다**(holomorphic on $U$)는 것은 정확히 $U$의 모든 점에서 $f$가 복소 미분가능할 때이다. 여기서 각 점에서의 미분가능은 $G$ 위의 함수 $f$ 자신의 것이다. $f$가 $G$에서 정칙일 때 $f$를 **정칙함수**(holomorphic function)라 하고, 이때 $z \in G$에서의 값이 $f'(z)$인 복소함수 $f' : G \to \mathbb{C}$를 $f$의 **도함수**(derivative)라 한다. $G = \mathbb{C}$이고 $f$가 정칙함수이면 $f$를 **정함수**(entire function)라 한다.

다음이 성립한다.

1. ($h$ 꼴) $D = \{h \in \mathbb{C} : h \ne 0,\ z_0 + h \in G\}$로 두면 $0$은 $D$의 집적점이다. 복소수 $L$에 대하여, $f$가 $z_0$에서 복소 미분가능하고 $f'(z_0) = L$인 것은 정확히 $h$에서의 값이 $(f(z_0 + h) - f(z_0))/h$인 복소함수 $D \to \mathbb{C}$가 $0$에서 $L$로 수렴할 때이다.
2. (카라테오도리 꼴)
   - (i) $f$가 $z_0$에서 복소 미분가능한 것은 정확히, $z_0$에서 연속인 복소함수 $\varphi : G \to \mathbb{C}$가 있어 모든 $z \in G$에서
     $$
     f(z) - f(z_0) = \varphi(z)(z - z_0)
     $$
     일 때이다. 이때 $\varphi(z_0) = f'(z_0)$이다.
   - (ii) $f$가 $z_0$에서 복소 미분가능하면, $z \in G - \{z_0\}$에서
     $$
     \varphi(z) = \frac{f(z) - f(z_0)}{z - z_0}
     $$
     이고 $\varphi(z_0) = f'(z_0)$인 함수 $\varphi : G \to \mathbb{C}$는 $z_0$에서 연속이고 (i)의 등식을 만족한다. (i)의 조건을 만족하는 함수는 이 $\varphi$ 하나뿐이다.
3. (미분가능하면 연속) $f$가 $z_0$에서 복소 미분가능하면 $f$는 $z_0$에서 연속이고, $f$는 $z_0$에서 $f(z_0)$으로 수렴하며, 제한 $f|_{G - \{z_0\}}$도 $z_0$에서 $f(z_0)$으로 수렴한다. 따라서 $f$가 열린집합 $U \subseteq G$에서 정칙이면 $f$는 $U$의 모든 점에서 연속이고, 정칙함수는 연속함수이다.
4. (국소성)
   - (i) (열린 부분집합으로의 제한) $U \subseteq G$가 열린집합이고 $z_0 \in U$라 하자. $f$가 $z_0$에서 복소 미분가능한 것은 정확히 제한 $f|_U : U \to \mathbb{C}$가 $z_0$에서 복소 미분가능할 때이고, 이때 $(f|_U)'(z_0) = f'(z_0)$이다. 따라서 $f$가 $U$에서 정칙인 것은 정확히 $f|_U$가 정칙함수일 때이고, 이때 $(f|_U)' = f'|_U$이다.
   - (ii) (두 열린집합의 합집합) $U_1$, $U_2 \subseteq G$가 열린집합이고 $G = U_1 \cup U_2$이며 $f|_{U_1}$과 $f|_{U_2}$가 정칙함수이면, $f$는 정칙함수이고 $j = 1, 2$와 $z \in U_j$에서 $f'(z) = (f|_{U_j})'(z)$이다.
5. (일차함수, 상수함수, 항등함수) $a$, $b$가 복소수이고 모든 $z \in G$에서 $f(z) = az + b$이면 $f$는 정칙함수이고 모든 $z \in G$에서 $f'(z) = a$이다. 특히 $G$ 위의 상수함수는 정칙함수이고 모든 점에서 미분계수가 $0$이며, $z$에서의 값이 $z$인 함수 $G \to \mathbb{C}$는 정칙함수이고 모든 점에서 미분계수가 $1$이다.
6. (실함수의 도함수와의 일치) $I$가 구간이고 $h : I \to \mathbb{R}$가 실함수이며, 모든 $x \in I$에서 $\iota(x) \in G$이고 $f(\iota(x)) = \iota(h(x))$라 하자. $c \in I$이고 $f$가 $\iota(c)$에서 복소 미분가능하면, $h$는 [[derivative]]의 뜻으로 $c$에서 미분가능하고 $f'(\iota(c)) = \iota(h'(c))$이다. 특히 $f'(\iota(c))$는 실수인 복소수이다.
:::

:::english
Complex numbers and $\operatorname{Re}$, $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number. Open balls $B(a, r)$ and the metric and topology given to subsets of $\mathbb{C}$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Complex functions, cluster points, convergence, and the limit notation $\lim_{z \to z_0}$ are those of the entry on the limit of a complex function. Continuity and "continuous at $z_0$" are those of the entry on continuous maps between topological spaces. Intervals are those of the entry on intervals, and differentiability of a real-valued function, its derivative and the notation $h'(c)$, and the difference quotient $q^h_c$ of a real-valued function are those of the entry on the derivative.

Below, $G$ is an open set of $(\mathbb{C}, d)$, $f : G \to \mathbb{C}$ is a complex function, and $z_0$ is a point of $G$. By (1)(ii) of the entry on the limit of a complex function, $z_0$ is a cluster point of $G$ and of $G - \{z_0\}$.

**Difference quotient.** If $z \in G - \{z_0\}$ then $z - z_0 \ne 0$. The complex function $q^f_{z_0} : G - \{z_0\} \to \mathbb{C}$ whose value at $z$ is
$$
q^f_{z_0}(z) = \frac{f(z) - f(z_0)}{z - z_0}
$$
is called the **difference quotient** of $f$ at $z_0$. When the function is clear, we write $q_{z_0}$.

**Complex derivative.** $f$ is **complex differentiable at $z_0$** exactly when $q_{z_0}$ converges at $z_0$. In that case the limit $\lim_{z \to z_0} q_{z_0}(z)$ is called the **complex derivative of $f$ at $z_0$** and is written $f'(z_0)$. That is, for a complex number $L$, $f$ is complex differentiable at $z_0$ with $f'(z_0) = L$ exactly when $q_{z_0}$ converges to $L$ at $z_0$. We also write $f'(z_0)$ as $\lim_{z \to z_0} \dfrac{f(z) - f(z_0)}{z - z_0}$. If $f$ is not complex differentiable at $z_0$, the symbol $f'(z_0)$ is not used. In this course, "differentiable" and "derivative" said of a complex function whose domain is an open set of $\mathbb{C}$ have this meaning. The symbol $f'$ is the same letter as the derivative of a real-valued function, but used for a complex function whose domain is an open set of $\mathbb{C}$ it has this meaning. Where both meanings occur together, (6) below reconciles them.

**Holomorphic functions, derivatives, entire functions.** For an open set $U \subseteq G$, $f$ is **holomorphic on $U$** exactly when $f$ is complex differentiable at every point of $U$. Here differentiability at each point is that of $f$ itself as a function on $G$. When $f$ is holomorphic on $G$, $f$ is called a **holomorphic function**, and the complex function $f' : G \to \mathbb{C}$ whose value at $z \in G$ is $f'(z)$ is called the **derivative** of $f$. If $G = \mathbb{C}$ and $f$ is a holomorphic function, $f$ is called an **entire function**.

The following hold.

1. (The $h$ form) If $D = \{h \in \mathbb{C} : h \ne 0,\ z_0 + h \in G\}$, then $0$ is a cluster point of $D$. For a complex number $L$, $f$ is complex differentiable at $z_0$ with $f'(z_0) = L$ exactly when the complex function $D \to \mathbb{C}$ whose value at $h$ is $(f(z_0 + h) - f(z_0))/h$ converges to $L$ at $0$.
2. (Carathéodory form)
   - (i) $f$ is complex differentiable at $z_0$ exactly when there is a complex function $\varphi : G \to \mathbb{C}$, continuous at $z_0$, such that for all $z \in G$
     $$
     f(z) - f(z_0) = \varphi(z)(z - z_0).
     $$
     In that case $\varphi(z_0) = f'(z_0)$.
   - (ii) If $f$ is complex differentiable at $z_0$, then the function $\varphi : G \to \mathbb{C}$ with
     $$
     \varphi(z) = \frac{f(z) - f(z_0)}{z - z_0}
     $$
     for $z \in G - \{z_0\}$ and $\varphi(z_0) = f'(z_0)$ is continuous at $z_0$ and satisfies the identity in (i). This $\varphi$ is the only function satisfying the condition in (i).
3. (Differentiable implies continuous) If $f$ is complex differentiable at $z_0$, then $f$ is continuous at $z_0$, $f$ converges to $f(z_0)$ at $z_0$, and the restriction $f|_{G - \{z_0\}}$ also converges to $f(z_0)$ at $z_0$. Hence if $f$ is holomorphic on an open set $U \subseteq G$, then $f$ is continuous at every point of $U$, and a holomorphic function is a continuous function.
4. (Locality)
   - (i) (Restriction to an open subset) Let $U \subseteq G$ be an open set with $z_0 \in U$. $f$ is complex differentiable at $z_0$ exactly when the restriction $f|_U : U \to \mathbb{C}$ is complex differentiable at $z_0$, and then $(f|_U)'(z_0) = f'(z_0)$. Hence $f$ is holomorphic on $U$ exactly when $f|_U$ is a holomorphic function, and then $(f|_U)' = f'|_U$.
   - (ii) (Union of two open sets) If $U_1$, $U_2 \subseteq G$ are open sets with $G = U_1 \cup U_2$ and $f|_{U_1}$, $f|_{U_2}$ are holomorphic functions, then $f$ is a holomorphic function and $f'(z) = (f|_{U_j})'(z)$ for $j = 1, 2$ and $z \in U_j$.
5. (Affine, constant, and identity functions) If $a$, $b$ are complex numbers and $f(z) = az + b$ for all $z \in G$, then $f$ is a holomorphic function and $f'(z) = a$ for all $z \in G$. In particular a constant function on $G$ is a holomorphic function whose derivative is $0$ at every point, and the function $G \to \mathbb{C}$ whose value at $z$ is $z$ is a holomorphic function whose derivative is $1$ at every point.
6. (Agreement with the derivative of a real-valued function) Let $I$ be an interval and $h : I \to \mathbb{R}$ a real-valued function, and suppose $\iota(x) \in G$ and $f(\iota(x)) = \iota(h(x))$ for all $x \in I$. If $c \in I$ and $f$ is complex differentiable at $\iota(c)$, then $h$ is differentiable at $c$ in the sense of the entry on the derivative and $f'(\iota(c)) = \iota(h'(c))$. In particular $f'(\iota(c))$ is a real complex number.
:::

## 직관

실함수의 미분계수는 할선의 기울기 $(f(x) - f(c))/(x - c)$의 극한이었습니다. 복소 미분계수도 같은 꼴의 몫의 극한이지만, 분모 $z - z_0$이 복소수이고 $z$가 $z_0$ 둘레의 원판 어느 방향에서나 다가올 수 있습니다. 정의역을 열린집합으로 두는 것은 $z_0$의 모든 방향에 정의역의 점이 있게 하려는 것입니다. 열린집합의 점 $z_0$은 그 둘레에 정의역에 든 원판이 있으므로, 차분몫의 정의역 $G - \{z_0\}$의 집적점입니다.

카라테오도리 꼴 (2)는 몫 대신 곱으로 쓴 같은 조건입니다. $f(z) - f(z_0)$이 $z - z_0$에 "$z_0$에서 연속인 배율" $\varphi(z)$를 곱한 것이라는 뜻이고, 그 배율의 $z_0$에서의 값이 미분계수입니다. 나눗셈이 없으므로 $z = z_0$에서도 식이 성립하고, 뒤의 연쇄법칙처럼 함수를 이어 붙일 때 분모가 $0$이 되는 점을 따로 다루지 않아도 됩니다. 비유하면 $\varphi$는 $z_0$ 둘레에서 $f$가 거리를 몇 배로 늘리는지 적어 둔 축척표이고, 미분가능하다는 것은 그 축척표가 $z_0$에서 끊어지지 않는다는 것입니다. 비유가 맞지 않는 곳은 $\varphi$의 값이 복소수라서 크기만이 아니라 회전도 담는다는 것입니다.

(6)은 $f$가 실수를 실수로 보낼 때, 실수축 위에서의 복소 미분계수가 실함수의 미분계수와 같다는 것입니다. 실수축을 따라 다가가는 것은 원판의 여러 방향 가운데 하나이므로 복소 미분가능에서 실함수의 미분가능이 나옵니다. 거꾸로는 성립하지 않을 수 있습니다. $f(z) = \iota(\operatorname{Re} z)$는 실수축 위에서 $f(\iota(x)) = \iota(x)$이므로 $h(x) = x$와 맞고 $h$는 미분가능하지만, 실수 $t \ne 0$에서 $z_0 + \iota(t) i$로 허수축 방향을 따라가면 차분몫은 $\iota(0)/(\iota(t) i) = 0$이고 실수축 방향으로는 $\iota(t)/\iota(t) = 1$이어서 $f$는 어느 점에서도 복소 미분가능하지 않습니다.

## 성질의 증명

:::proof
"극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]]의 번호, "극한 법칙 (n)"은 [[limit-laws-for-complex-functions|복소함수의 극한 법칙]]의 번호, "복소수체 (n)"은 [[complex-field]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]]의 번호이다. $G$에는 부분공간 거리와 그 거리위상을 준다.

정의 첫머리의 두 문장을 본다. $z \in G - \{z_0\}$이면 $z \ne z_0$이므로 $z - z_0 \ne 0$이다. $G$는 열린집합이고 $z_0 \in G$이므로 극한 (1)의 (ii)에 의해 $z_0$은 $G$와 $G - \{z_0\}$의 집적점이다. 따라서 차분몫의 수렴을 말할 수 있다.

**1의 증명.** $G$가 열린집합이므로 $B(z_0, r) \subseteq G$인 실수 $r > 0$이 있다. $0 < |h| < r$이면 $|(z_0 + h) - z_0| = |h| < r$이므로 $z_0 + h \in G$이고 $h \in D$이다. 실수 $\rho > 0$을 잡고 $s = \min\{r, \rho\} / 2$로 두면 $h = \iota(s)$는 $0 < |h| = s < r$, $s < \rho$를 만족하므로(복소 절댓값 (5), [[order-properties-of-reals]]의 (8), [[absolute-value]]의 (10)) $h \in D$, $h \ne 0$, $|h - 0| < \rho$이다. 극한 (1)의 (i)에 의해 $0$은 $D$의 집적점이다.

$Q : D \to \mathbb{C}$를 $Q(h) = (f(z_0 + h) - f(z_0))/h$로 둔다. $h \in D$이면 $z = z_0 + h \in G - \{z_0\}$이고 $Q(h) = q_{z_0}(z_0 + h)$이며 $|h - 0| = |z - z_0|$이다. 거꾸로 $z \in G - \{z_0\}$이면 $h = z - z_0 \in D$이고 $z = z_0 + h$이다. 따라서 양의 실수 $\varepsilon$, $\delta$에 대하여 "$h \in D$, $h \ne 0$, $|h - 0| < \delta$이면 $|Q(h) - L| < \varepsilon$"인 것은 정확히 "$z \in G - \{z_0\}$, $z \ne z_0$, $|z - z_0| < \delta$이면 $|q_{z_0}(z) - L| < \varepsilon$"일 때이고, 두 수렴의 정의는 같다.

**2의 증명.** (i)의 두 방향과 (ii)를 함께 보인다. 먼저 다음을 본다.

- (가) $\varphi : G \to \mathbb{C}$가 모든 $z \in G$에서 $f(z) - f(z_0) = \varphi(z)(z - z_0)$를 만족하면, 모든 $z \in G - \{z_0\}$에서 $\varphi(z) = q_{z_0}(z)$이다. $z - z_0 \ne 0$이므로 양변에 $(z - z_0)^{-1}$을 곱하면 된다.

($\Rightarrow$) $f$가 $z_0$에서 복소 미분가능하고 $L = f'(z_0)$이라 하자. $z \in G - \{z_0\}$이면 $\varphi(z) = q_{z_0}(z)$, $\varphi(z_0) = L$로 정한다. $G$의 각 점은 $z_0$이거나 $G - \{z_0\}$의 점이고 둘 중 정확히 하나이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $\varphi : G \to \mathbb{C}$가 정해진다. $z \ne z_0$이면 $\varphi(z)(z - z_0) = (f(z) - f(z_0))(z - z_0)^{-1}(z - z_0) = f(z) - f(z_0)$이고, $z = z_0$이면 양변이 $0$이다. $\varphi|_{G - \{z_0\}} = q_{z_0}$은 $z_0$에서 $L$로 수렴하므로 극한 (6)의 (ii)에 의해 $\varphi$는 $z_0$에서 $L = \varphi(z_0)$으로 수렴하고, $z_0$은 $G$의 집적점이므로 극한 (11)의 (i)에 의해 $\varphi$는 $z_0$에서 연속이다.

($\Leftarrow$) 그런 $\varphi$가 있다고 하자. (가)에 의해 $\varphi|_{G - \{z_0\}} = q_{z_0}$이다. $\varphi$가 $z_0$에서 연속이고 $z_0$이 $G$의 집적점이므로 극한 (11)의 (i)에 의해 $\varphi$는 $z_0$에서 $\varphi(z_0)$으로 수렴하고, 극한 (6)의 (ii)에 의해 $q_{z_0}$도 $\varphi(z_0)$으로 수렴한다. 따라서 $f$는 $z_0$에서 복소 미분가능하고 $f'(z_0) = \varphi(z_0)$이다.

(ii)는 ($\Rightarrow$)에서 만든 함수가 바로 이 $\varphi$라는 것이다. 하나뿐이라는 것: (i)의 조건을 만족하는 $\varphi$는 ($\Leftarrow$)에 의해 $\varphi(z_0) = f'(z_0)$이고 (가)에 의해 $z \ne z_0$에서 $\varphi(z) = q_{z_0}(z)$이므로, 모든 점에서 값이 정해진다. 두 함수는 모든 점에서 값이 같으면 같으므로([[function|함수]]의 같음) 그런 $\varphi$는 하나뿐이다.

**3의 증명.** (2)의 $\varphi$를 잡는다. 모든 $z \in G$에서 $f(z) = f(z_0) + \varphi(z)(z - z_0)$이다. 극한 (11)의 (i)에 의해 $\varphi$는 $z_0$에서 $\varphi(z_0)$으로 수렴하고, 극한 (5)와 극한 법칙 (3)에 의해 $z$에서의 값이 $z - z_0$인 함수는 $z_0 - z_0 = 0$으로 수렴한다. 극한 법칙 (4)에 의해 $z$에서의 값이 $\varphi(z)(z - z_0)$인 함수는 $\varphi(z_0) \cdot 0 = 0$으로 수렴하고, 극한 (5)와 극한 법칙 (3)에 의해 $f$는 $f(z_0) + 0 = f(z_0)$으로 수렴한다. 극한 (11)의 (i)에 의해 $f$는 $z_0$에서 연속이고, 극한 (6)의 (ii)에 의해 $f|_{G - \{z_0\}}$도 $f(z_0)$으로 수렴한다. 마지막 문장은 각 점에 앞 문장을 쓰고, 정칙함수에 대해서는 극한 (11)의 (iii)을 쓴다.

**4의 증명.** (i) $f|_U$의 $z_0$에서의 차분몫은 $U - \{z_0\}$ 위의 함수이고, 그 값은 $z \in U - \{z_0\}$에서 $q_{z_0}(z)$와 같다. 곧 그것은 $q_{z_0}|_{U - \{z_0\}}$이다. $U$는 열린집합이므로 극한 (1)의 (ii)에 의해 $z_0$은 $U - \{z_0\}$의 집적점이다.

$q_{z_0}$이 $L$로 수렴하면 극한 (7)의 (i)에 의해 $q_{z_0}|_{U - \{z_0\}}$도 $L$로 수렴한다. 거꾸로 $q_{z_0}|_{U - \{z_0\}}$이 $L$로 수렴한다고 하자. $B(z_0, r) \subseteq U$인 실수 $r > 0$을 잡고 $A = \{z \in G - \{z_0\} : |z - z_0| < r\}$로 두면 $A \subseteq U - \{z_0\}$이다. 극한 (7)의 (ii)에 의해 $z_0$은 $A$의 집적점이므로 극한 (7)의 (i)에 의해 $q_{z_0}|_{U - \{z_0\}}$을 $A$로 제한한 것, 곧 $q_{z_0}|_A$는 $L$로 수렴하고, 극한 (7)의 (ii)에 의해 $q_{z_0}$도 $L$로 수렴한다. 둘째 문장은 $U$의 각 점에 첫째 문장을 쓴 것이다.

(ii) $z \in G$이면 $z \in U_1$이거나 $z \in U_2$이다. $z \in U_j$이면 $f|_{U_j}$는 $z$에서 복소 미분가능하므로 (i)에 의해 $f$도 $z$에서 복소 미분가능하고 $f'(z) = (f|_{U_j})'(z)$이다. 따라서 $f$는 $G$의 모든 점에서 복소 미분가능하다.

**5의 증명.** $z \in G - \{z_0\}$이면 $q_{z_0}(z) = (az + b - az_0 - b)/(z - z_0) = a(z - z_0)/(z - z_0) = a$이다. 곧 $q_{z_0}$은 값이 $a$인 상수함수이고, 극한 (5)에 의해 $a$로 수렴한다. $z_0$은 $G$의 임의의 점이었다. 상수함수는 $a = 0$, 항등함수는 $a = 1$, $b = 0$인 경우이다.

**6의 증명.** $J = I - \{c\}$로 둔다. [[derivative]]의 진술에 의해 $c$는 $J$의 집적점이다. $L = f'(\iota(c))$로 두고, [[limit-of-complex-function|복소함수의 극한]]의 (10)을 $S = G - \{\iota(c)\}$ 위의 복소함수 $q_{\iota(c)}$, 점 $z_0 = \iota(c)$, $J$, $c$, $u = 1$에 쓴다. $t \in J$이면 $\lambda(t) = \iota(c) + \iota(t - c) = \iota(t)$이고(복소수체 (2)), $t \in I$이므로 $\iota(t) \in G$이며, $t \ne c$이므로 복소수체 (2)에 의해 $\iota(t) \ne \iota(c)$이다. 곧 $\lambda(t) \in S$이다. 복소수체 (2)의 (i)에 의해
$$
\begin{aligned}
q_{\iota(c)}(\iota(t)) &= \frac{\iota(h(t)) - \iota(h(c))}{\iota(t) - \iota(c)} \\
&= \frac{\iota(h(t) - h(c))}{\iota(t - c)} \\
&= \iota\bigl(q^h_c(t)\bigr)
\end{aligned}
$$
이다. 여기서 $q^h_c(t) = (h(t) - h(c))(t - c)^{-1}$은 [[derivative]]의 실함수의 차분몫이다. 복소수체 (2)의 (ii)에 의해 $F_1(t) = \operatorname{Re} q_{\iota(c)}(\iota(t)) = q^h_c(t)$이고 $F_2(t) = 0$이다. 극한 (10)의 (i)에 의해 $q^h_c$는 $c$에서 $\operatorname{Re} L$로 수렴하므로 $h$는 $c$에서 미분가능하고 $h'(c) = \operatorname{Re} L$이다. 또 $F_2$는 $J$ 위의 값이 $0$인 상수함수이므로 [[limit-of-a-function]]의 (4)에 의해 $0$으로 수렴하고, 극한 (10)의 (i)과 [[limit-of-a-function]]의 (3)에 의해 $\operatorname{Im} L = 0$이다. 복소수체 (2)의 (iii)에 의해 $L = \iota(\operatorname{Re} L) = \iota(h'(c))$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$iz^2 + z$ 의 카라테오도리 꼴]
$f(z) = iz^2 + z$로 정한 $f : \mathbb{C} \to \mathbb{C}$와 복소수 $z_0$을 생각합니다. 체의 계산으로
$$
\begin{aligned}
f(z) - f(z_0) &= i(z^2 - z_0^2) \\
&\quad + (z - z_0) \\
&= \bigl(i(z + z_0) + 1\bigr) \\
&\qquad \cdot (z - z_0)
\end{aligned}
$$
입니다($z^2 - z_0^2 = (z + z_0)(z - z_0)$). $\varphi(z) = iz + (iz_0 + 1)$로 두면 $\varphi$는 계수가 $iz_0 + 1$, $i$인 복소 다항함수이므로 [[complex-polynomial-function]]의 (5)에 의해 연속이고, 모든 $z$에서 $f(z) - f(z_0) = \varphi(z)(z - z_0)$입니다. (2)의 (i)에 의해 $f$는 $z_0$에서 복소 미분가능하고 $f'(z_0) = \varphi(z_0) = 2iz_0 + 1$입니다. $z_0$은 임의였으므로 $f$는 정함수이고, 예컨대 $f'(i) = 2i \cdot i + 1 = -1$입니다.
:::

:::counterexample[절댓값 함수의 $0$ 에서의 차분몫]
$f(z) = \iota(|z|)$로 정한 $f : \mathbb{C} \to \mathbb{C}$는 연속이지만 $0$에서 복소 미분가능하지 않습니다. 연속인 것은 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에서 $z$에서의 값이 $|z|$인 함수와 $\iota$가 연속이므로 그 합성이 연속이기 때문입니다([[composition-of-continuous-maps|연속함수의 합성]]의 (1)).

$0$에서의 차분몫은 $q_0(z) = \iota(|z|)/z$ ($z \ne 0$)입니다. [[limit-of-complex-function|복소함수의 극한]]의 (10)의 (ii)를 $u = 1$과 두 집합 $J_1 = (0, 1)$, $J_2 = (-1, 0)$, $c = 0$에 씁니다. [[cluster-point]]의 (5)에 의해 $0$은 두 열린구간의 집적점이고, $t \ne 0$이면 $\iota(t) \ne 0$입니다. $t \in J_1$이면 $|\iota(t)| = t$이므로 $q_0(\iota(t)) = \iota(t)/\iota(t) = 1$이고, $t \in J_2$이면 $|\iota(t)| = -t$이므로 $q_0(\iota(t)) = \iota(-t)/\iota(t) = -1$입니다([[absolute-value]]의 정의). 실수부의 두 함수는 각각 $J_1$, $J_2$ 위의 상수함수 $1$, $-1$이므로 $1$과 $-1$로 수렴하고, $1 \ne -1$이므로 $q_0$은 $0$에서 발산합니다. 곧 (3)의 거꾸로("연속이면 미분가능")는 이 함수의 $0$에서 성립하지 않습니다.
:::

## 확인 질문

:::check[$f(z) = z^2$로 정한 $f : \mathbb{C} \to \mathbb{C}$와 $h(x) = x^2$로 정한 $h : \mathbb{R} \to \mathbb{R}$에 (6)을 쓰면 무엇을 얻는가?]
$z^2 - z_0^2 = (z + z_0)(z - z_0)$이고 $z$에서의 값이 $z + z_0$인 함수는 복소 다항함수이므로 연속이고([[complex-polynomial-function]]의 (5)), (2)의 (i)에 의해 $f'(z_0) = 2z_0$입니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)에 의해 $f(\iota(x)) = \iota(x)^2 = \iota(x^2) = \iota(h(x))$이고 $\mathbb{R}$은 구간이므로, (6)에 의해 $h$는 모든 실수 $c$에서 미분가능하고 $\iota(h'(c)) = f'(\iota(c)) = 2\iota(c) = \iota(2c)$, 곧 $h'(c) = 2c$입니다.
:::

:::check[$f(z) = (1 + i) z - 3$일 때 $z_0 = 2$에서 (2)의 (ii)의 $\varphi$는 무엇인가?]
값이 $1 + i$인 상수함수입니다. $z \ne 2$이면 $q_2(z) = (1 + i)(z - 2)/(z - 2) = 1 + i$이고, (5)에 의해 $f'(2) = 1 + i$입니다. (2)의 (ii)에 의해 $\varphi$는 $z \ne 2$에서 $q_2(z)$, $z = 2$에서 $f'(2)$이므로 모든 점에서 값이 $1 + i$입니다.
:::
