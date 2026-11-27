---
title: 복소 원시함수와 경로 적분
title_en: Complex Primitives and Path Integrals
aliases: [원시함수와 경로 적분, 복소 원시함수, 경로를 따른 연쇄법칙, 경로 적분의 기본정리, complex primitive, complex antiderivative, primitive, chain rule along a path, fundamental theorem for path integrals]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 열린집합 위에서 도함수가 f 인 정칙함수를 f 의 복소 원시함수라 하고, 경로를 따른 연쇄법칙으로 원시함수가 있으면 경로 적분이 끝점의 값의 차이고 닫힌 경로열에서 0 임을 보인다. 거듭제곱 (z − a)^k(k ≠ −1)의 원시함수, 원시함수의 차가 영역에서 상수라는 것, 실함수의 원시함수와의 관계를 함께 진술한다.
requires: [function, function-composition, mathematical-induction, interval, real-number-arithmetic, absolute-value, real-valued-function, continuous-function, limit-of-a-function, limit-laws-for-functions, derivative, antiderivative-and-integral-of-power, continuous-map, subspace-and-continuity, composition-of-continuous-maps, continuity-agrees-with-analysis, open-set-in-metric-space, open-sets-of-a-metric-space, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, continuity-of-complex-operations, complex-finite-sum, limit-of-complex-function, complex-derivative, complex-derivative-rules, zero-derivative-on-a-region, derivative-of-complex-valued-function, fundamental-theorem-for-complex-valued-functions, path-in-the-complex-plane, path-integral, addition-law-of-complex-exponential]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Antiderivatives 절의 원시함수의 정의, 세 예, Theorem antiderthm 과 그 증명, 그 뒤의 예, Corollary antidercor, Example ex_antiderivnotexist, source/sec_antiderivatives.ptx:24–155; Constant Functions 절의 연결이 필요한 예, source/sec_constantfcts.ptx:57–68; 연습문제 ex_4_3 과 다항식의 닫힌 경로 적분을 묻는 연습문제, source/exercises-chap4.ptx:415–425, 679–686; Differentiability and Holomorphicity 절의 Example exam_zcubedentire 와 Proposition dernonzeroconformal 의 증명, source/sec_diffholom.ptx:65–86, 303–327"
    checked: original
    note: "출처는 원시함수(antiderivative, primitive)를 영역(region) G 위에서만 정의한다: F 가 G 에서 정칙이고 모든 z ∈ G 에서 F′(z) = f(z) 이면 F 를 G 위의 f 의 원시함수라 한다(24–37줄). 이 항목은 같은 조건을 열린집합 G 에서 정의하고 '복소 원시함수'라 부른다(출처의 Corollary antidercor(124–137줄)가 열린 G 에 원시함수를 말하는 것과 맞춘 것이다). 출처 Theorem antiderthm(79–94줄)은 이 항목의 (2)의 (i)에 해당하며, 영역 G, 조각마다 매끄러운 경로, G 위의 연속인 f 를 가정한다. 이 항목은 열린 G, C¹ 경로(와 경로열), 상 위에서 연속인 f 로 진술한다. 출처의 증명(95–106줄)은 d/dt F(γ(t)) = f(γ(t))γ′(t) 를 증명 없이 쓰고 실함수의 미적분의 기본정리를 부른다. 이 항목은 그 등식을 (1)의 경로를 따른 연쇄법칙으로 따로 진술하고, 복소 미분의 카라테오도리 꼴과 실함수의 극한 법칙으로 증명한다. (3)은 출처 Corollary antidercor 와 같은 내용이고, (3)의 마지막 문장(닫힌 경로열의 적분이 0 이 아니면 원시함수가 없다)은 출처가 그 따름 정리를 '원시함수가 있는지의 판정'으로 쓴다는 문장(139–141줄)과 Example ex_antiderivnotexist(142–155줄)의 쓰임과 같다. (4)의 (iii)의 거듭제곱의 닫힌 경로열 적분이 0 이라는 것은 출처 연습문제 ex_4_3(exercises-chap4.ptx:415–425: n ≠ −1 이면 닫힌 경로에서 ∫zⁿ dz = 0, n < 0 이면 경로가 원점을 지나지 않는다고 가정)과 같은 내용이다. (5)의 (i)은 출처가 정의 뒤의 예(38–49줄)에서 z² 와 함께 z² + c 도 2z 의 원시함수라고 적는 것과 같은 발상이다. 반례 '연결이 아닌 열린집합 위의 두 원시함수'는 출처 sec_constantfcts.ptx:57–68 의 예(Re z > 0 이면 1, Re z < 0 이면 2 인 함수의 도함수가 0)와 같은 두 반평면을 쓴다. 출처는 Proposition dernonzeroconformal 의 증명(sec_diffholom.ptx:303–327)에서도 t = 0 에서의 (d/dt) f(γ₁(t)) = f′(γ₁(0))γ₁′(0) 을 증명 없이 쓰는데(314–315줄), 이것은 (1)의 경로를 따른 연쇄법칙과 같은 등식이다. 예시 '단위원을 따라 본 z³ 의 연쇄법칙'의 F(z) = z³ 은 출처 Example exam_zcubedentire(sec_diffholom.ptx:65–86: z³ 은 정함수이고 도함수가 3z²)와 같은 함수이다. (4)의 (iii)의 마지막 문장(일차함수의 닫힌 경로열 적분이 0)은 출처 연습문제 exercises-chap4.ptx:679–686(다항식의 닫힌 경로 적분이 0)과 같은 결론의 특별한 경우이다."
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.2 의 1. 과 그 증명 (k.txt 189–209줄, p.4)"
    checked: original
    note: "출처는 직사각형 R 의 둘레에서 일차함수 αz + β 의 적분이 0 이라는 것(Proposition 2.2 의 1.)을 코시 합을 직접 계산해 g(z) = αz²/2 + βz 의 끝값의 차로 보인다. 이 항목의 (4)의 (iii)의 마지막 문장은 닫힌 경로열 일반에서 같은 결론이고, 증명은 (z − a)^0, (z − a)^1 의 원시함수와 (3)으로 한다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 경로 적분 넷을 원시함수로 다시 계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 거듭제곱(음의 정수 지수는 $0$이 아닌 복소수에만)은 [[power-of-a-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, $\mathbb{C}$의 부분집합에 주는 거리와 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 복소함수는 [[limit-of-complex-function|복소함수의 극한]]의 것이고, 복소 미분가능, 미분계수 $F'(z_0)$, 정칙함수와 도함수 $F'$은 [[complex-derivative|복소 미분]]의 것이며, 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 것이다. 구간은 [[interval]]의 것이고, 함수 $\gamma : I \to \mathbb{C}$의 미분가능, 미분계수 $\gamma'(c)$, 미분가능한 함수, 도함수, 연속미분가능은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 것이다. C¹ 경로, 시작점, 끝점, 상, 닫힌 경로, 경로열과 그 시작점, 끝점, 상, 닫힌 경로열은 [[path-in-the-complex-plane|경로]]의 것이고, "상 위에서 연속", 경로 적분 $\int_\gamma f$, 경로열의 경로 적분 $\int_\Gamma f$는 [[path-integral|경로 적분]]의 것이다. 합성은 [[function-composition|함수의 합성]]의 것이다.

**복소 원시함수.** $G$를 $(\mathbb{C}, d)$의 열린집합, $f : G \to \mathbb{C}$를 복소함수라 하자. 복소함수 $F : G \to \mathbb{C}$가 $G$ 위의 $f$의 **복소 원시함수**(complex primitive)인 것은 정확히 $F$가 정칙함수이고 모든 $z \in G$에서 $F'(z) = f(z)$일 때, 곧 $F$의 도함수가 $f$일 때이다. $G$가 영역이 아니어도 된다. 구간 위의 실함수의 원시함수([[antiderivative-and-integral-of-power]])는 실함수의 미분으로 정한 다른 정의이고, 둘의 관계는 아래 (6)이다.

다음이 성립한다. 아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이다.

1. (**경로를 따른 연쇄법칙**) $I$를 구간, $\gamma : I \to \mathbb{C}$를 모든 $t \in I$에서 $\gamma(t) \in G$인 함수, $F : G \to \mathbb{C}$를 복소함수라 하고, $\gamma$를 $I$에서 $G$로의 함수로 보아 합성 $F \circ \gamma : I \to \mathbb{C}$를 정한다. $c \in I$에서 $\gamma$가 미분가능하고 $F$가 $\gamma(c)$에서 복소 미분가능하면, $F \circ \gamma$는 $c$에서 미분가능하고
   $$
   (F \circ \gamma)'(c) = F'(\gamma(c))\,\gamma'(c)
   $$
   이다. 따라서 $\gamma$가 미분가능한 함수이고 $F$가 정칙함수이면 $F \circ \gamma$는 미분가능한 함수이고 모든 $t \in I$에서 $(F \circ \gamma)'(t) = F'(\gamma(t))\,\gamma'(t)$이다. 여기에 더해 $\gamma$가 연속미분가능하고 $F'$이 $\gamma(I) = \{\gamma(t) : t \in I\}$ 위에서 연속이면 $F \circ \gamma$는 연속미분가능하다.
2. (원시함수가 있으면 끝점만으로 정해진다) $f : G \to \mathbb{C}$이고 $F$가 $G$ 위의 $f$의 복소 원시함수라 하자.
   - (i) $\gamma : [a, b] \to \mathbb{C}$가 상이 $G$의 부분집합인 C¹ 경로이고 $f$가 $\gamma$의 상 위에서 연속이면
     $$
     \int_\gamma f = F(\gamma(b)) - F(\gamma(a))
     $$
     이다.
   - (ii) (경로열) 경로열 $\Gamma = (\gamma_1, \dots, \gamma_k)$의 상이 $G$의 부분집합이고 $f$가 모든 $j$에서 $\gamma_j$의 상 위에서 연속이라 하자. $\Gamma$의 시작점이 $u$이고 끝점이 $v$이면 $\int_\Gamma f = F(v) - F(u)$이다.
   - (iii) 따라서 (ii)의 조건을 만족하는 두 경로열 $\Gamma$, $\Delta$의 시작점이 같고 끝점이 같으면 $\int_\Gamma f = \int_\Delta f$이다.

   $f$가 연속이면 "$\gamma_j$의 상 위에서 연속"은 언제나 성립한다.
3. (닫힌 경로열) (2)의 (ii)의 가정에서 $\Gamma$가 닫힌 경로열이면 $\int_\Gamma f = 0$이다. 특히 상이 $G$의 부분집합인 닫힌 C¹ 경로 $\gamma$에서 $f$가 $\gamma$의 상 위에서 연속이면 $\int_\gamma f = 0$이다. 따라서 $f : G \to \mathbb{C}$에 대하여, 상이 $G$의 부분집합이고 $f$가 각 경로의 상 위에서 연속인 닫힌 경로열 $\Gamma$가 있어 $\int_\Gamma f \ne 0$이면, $f$는 $G$ 위에서 복소 원시함수를 갖지 않는다.
4. (거듭제곱) $a$를 복소수, $k$를 정수라 하자. $k \ge 0$이면 $D_k = \mathbb{C}$로, $k < 0$이면 $D_k = \mathbb{C} - \{a\}$로 두고, $z$에서의 값이 $(z - a)^k$인 함수 $f_k : D_k \to \mathbb{C}$를 정한다($z \ne a$이면 $z - a \ne 0$이므로 음의 지수에서도 정해진다).
   - (i) $D_k$는 열린집합이고 $f_k$는 정칙함수이다. 따라서 $f_k$는 연속이다.
   - (ii) $k \ne -1$이면 $k + 1 \ne 0$이고, $z$에서의 값이 $(z - a)^{k+1} (k + 1)^{-1}$인 함수 $D_k \to \mathbb{C}$는 $D_k$ 위의 $f_k$의 복소 원시함수이다. 여기서 $k \le -2$이면 $k + 1$도 음의 정수이고, $(k + 1)^{-1}$은 실수 $k + 1$의 역수이다.
   - (iii) $k \ne -1$이고 $\Gamma$가 상이 $D_k$의 부분집합인 닫힌 경로열이면 $\int_\Gamma f_k = 0$이다. 곧 $k \ge 0$이면 모든 닫힌 경로열에서, $k \le -2$이면 상이 $a$를 원소로 갖지 않는 모든 닫힌 경로열에서 그렇다. 또 복소수 $\alpha$, $\beta$에 대하여 $z$에서의 값이 $\alpha + \beta(z - a)$인 함수 $h : \mathbb{C} \to \mathbb{C}$는 모든 닫힌 경로열 $\Gamma$에서 $\int_\Gamma h = 0$을 만족한다.
5. (원시함수의 차) $f : G \to \mathbb{C}$이고 $F$가 $G$ 위의 $f$의 복소 원시함수라 하자.
   - (i) 복소수 $C$에 대하여 $z$에서의 값이 $F(z) + C$인 함수 $G \to \mathbb{C}$도 $G$ 위의 $f$의 복소 원시함수이다.
   - (ii) $G$가 영역이고 $H$도 $G$ 위의 $f$의 복소 원시함수이면, 어떤 복소수 $C$가 있어 모든 $z \in G$에서 $H(z) = F(z) + C$이다.
6. (실함수의 원시함수와의 관계) $f : G \to \mathbb{C}$이고 $F$가 $G$ 위의 $f$의 복소 원시함수라 하자. $I$가 구간이고 $u, U : I \to \mathbb{R}$가 실함수이며, 모든 $x \in I$에서 $\iota(x) \in G$, $f(\iota(x)) = \iota(u(x))$, $F(\iota(x)) = \iota(U(x))$이면, $U$는 [[antiderivative-and-integral-of-power]]의 뜻으로 $u$의 원시함수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$ are as in the entry on complex numbers; the field operations of $\mathbb{C}$, the map $\iota$ and the convention of writing real numbers in place of complex numbers are as in the entry on the complex field; powers (with negative integer exponents only for nonzero complex numbers) are as in the entry on powers of a complex number. The metric and topology of $\mathbb{C}$ and of its subsets are those of the metric of the complex plane, and open sets are open sets of $(\mathbb{C}, d)$. Complex functions are as in the entry on limits of complex functions; complex differentiability, the derivative $F'(z_0)$, holomorphic functions and the derivative $F'$ are as in the entry on the complex derivative; regions are as in the entry on regions and functions with zero derivative. Intervals are as in the entry on intervals, and differentiability, the derivative $\gamma'(c)$, differentiable functions, derivatives and continuous differentiability of a function $\gamma : I \to \mathbb{C}$ are as in the entry on derivatives of complex-valued functions of a real variable. C¹ paths, initial and terminal points, images, closed paths, chains of paths with their initial points, terminal points and images, and closed chains are as in the entry on paths; "continuous on the image", the path integral $\int_\gamma f$ and the path integral $\int_\Gamma f$ along a chain are as in the entry on path integrals. Composition is as in the entry on composition of functions.

**Complex primitive.** Let $G$ be an open set of $(\mathbb{C}, d)$ and $f : G \to \mathbb{C}$ a complex function. A complex function $F : G \to \mathbb{C}$ is a **complex primitive** of $f$ on $G$ exactly when $F$ is a holomorphic function and $F'(z) = f(z)$ for every $z \in G$, that is, when the derivative of $F$ is $f$. $G$ need not be a region. The antiderivative of a real function on an interval is a different definition made with the derivative of real functions; the relation between the two is (6) below.

The following hold. Below, $G$ is an open set of $(\mathbb{C}, d)$.

1. (**Chain rule along a path**) Let $I$ be an interval, $\gamma : I \to \mathbb{C}$ a function with $\gamma(t) \in G$ for every $t \in I$, and $F : G \to \mathbb{C}$ a complex function; regarding $\gamma$ as a function from $I$ to $G$, form the composite $F \circ \gamma : I \to \mathbb{C}$. If $\gamma$ is differentiable at $c \in I$ and $F$ is complex differentiable at $\gamma(c)$, then $F \circ \gamma$ is differentiable at $c$ and
   $$
   (F \circ \gamma)'(c) = F'(\gamma(c))\,\gamma'(c).
   $$
   Hence, if $\gamma$ is a differentiable function and $F$ is a holomorphic function, then $F \circ \gamma$ is a differentiable function and $(F \circ \gamma)'(t) = F'(\gamma(t))\,\gamma'(t)$ for every $t \in I$. If moreover $\gamma$ is continuously differentiable and $F'$ is continuous on $\gamma(I) = \{\gamma(t) : t \in I\}$, then $F \circ \gamma$ is continuously differentiable.
2. (With a primitive, the integral depends only on the endpoints) Let $f : G \to \mathbb{C}$ and let $F$ be a complex primitive of $f$ on $G$.
   - (i) If $\gamma : [a, b] \to \mathbb{C}$ is a C¹ path whose image is a subset of $G$ and $f$ is continuous on the image of $\gamma$, then
     $$
     \int_\gamma f = F(\gamma(b)) - F(\gamma(a)).
     $$
   - (ii) (Chains) Suppose the image of a chain $\Gamma = (\gamma_1, \dots, \gamma_k)$ is a subset of $G$ and $f$ is continuous on the image of $\gamma_j$ for every $j$. If the initial point of $\Gamma$ is $u$ and its terminal point is $v$, then $\int_\Gamma f = F(v) - F(u)$.
   - (iii) Hence, if two chains $\Gamma$, $\Delta$ satisfying the conditions of (ii) have the same initial point and the same terminal point, then $\int_\Gamma f = \int_\Delta f$.

   If $f$ is continuous, then "continuous on the image of $\gamma_j$" always holds.
3. (Closed chains) Under the assumptions of (2)(ii), if $\Gamma$ is a closed chain then $\int_\Gamma f = 0$. In particular, if $\gamma$ is a closed C¹ path whose image is a subset of $G$ and $f$ is continuous on the image of $\gamma$, then $\int_\gamma f = 0$. Hence, for $f : G \to \mathbb{C}$, if there is a closed chain $\Gamma$ whose image is a subset of $G$, with $f$ continuous on the image of each path, such that $\int_\Gamma f \ne 0$, then $f$ has no complex primitive on $G$.
4. (Powers) Let $a$ be a complex number and $k$ an integer. Put $D_k = \mathbb{C}$ if $k \ge 0$ and $D_k = \mathbb{C} - \{a\}$ if $k < 0$, and let $f_k : D_k \to \mathbb{C}$ be the function whose value at $z$ is $(z - a)^k$ (if $z \ne a$ then $z - a \ne 0$, so this is defined also for negative exponents).
   - (i) $D_k$ is an open set and $f_k$ is a holomorphic function. Hence $f_k$ is continuous.
   - (ii) If $k \ne -1$, then $k + 1 \ne 0$, and the function $D_k \to \mathbb{C}$ whose value at $z$ is $(z - a)^{k+1} (k + 1)^{-1}$ is a complex primitive of $f_k$ on $D_k$. Here, if $k \le -2$, then $k + 1$ is also a negative integer, and $(k + 1)^{-1}$ is the reciprocal of the real number $k + 1$.
   - (iii) If $k \ne -1$ and $\Gamma$ is a closed chain whose image is a subset of $D_k$, then $\int_\Gamma f_k = 0$; that is, this holds for every closed chain if $k \ge 0$, and for every closed chain whose image does not contain $a$ if $k \le -2$. Moreover, for complex numbers $\alpha$, $\beta$, the function $h : \mathbb{C} \to \mathbb{C}$ whose value at $z$ is $\alpha + \beta(z - a)$ satisfies $\int_\Gamma h = 0$ for every closed chain $\Gamma$.
5. (Difference of primitives) Let $f : G \to \mathbb{C}$ and let $F$ be a complex primitive of $f$ on $G$.
   - (i) For a complex number $C$, the function $G \to \mathbb{C}$ whose value at $z$ is $F(z) + C$ is also a complex primitive of $f$ on $G$.
   - (ii) If $G$ is a region and $H$ is also a complex primitive of $f$ on $G$, then there is a complex number $C$ with $H(z) = F(z) + C$ for every $z \in G$.
6. (Relation to antiderivatives of real functions) Let $f : G \to \mathbb{C}$ and let $F$ be a complex primitive of $f$ on $G$. If $I$ is an interval, $u, U : I \to \mathbb{R}$ are real functions, and $\iota(x) \in G$, $f(\iota(x)) = \iota(u(x))$ and $F(\iota(x)) = \iota(U(x))$ for every $x \in I$, then $U$ is an antiderivative of $u$ in the sense of the entry on antiderivatives of real functions.
:::

## 직관

실함수에서 연속인 $f$의 원시함수 $F$가 있으면 $\int_\alpha^\beta f = F(\beta) - F(\alpha)$였습니다. 경로 적분에서도 같은 일이 일어납니다. 점 $\gamma(t)$가 경로를 따라 움직일 때 $F(\gamma(t))$가 변하는 빠르기는 "그 자리의 $F$의 미분계수 × 그 순간의 움직임 $\gamma'(t)$"이고((1)), 이것이 바로 경로 적분의 피적분함수 $f(\gamma(t))\,\gamma'(t)$입니다. 그래서 그것을 쌓은 경로 적분은 $F$의 처음 값과 나중 값의 차가 됩니다((2)). 어느 길로 갔는지는 상관이 없고, 제자리로 돌아오면 $0$입니다((3)).

비유하면 $F$는 땅의 높이이고, 경로 적분은 걷는 동안 오르내린 양을 모두 더한 것입니다. 높이를 알려 주는 지도($F$)가 있으면 출발점과 도착점의 높이만 보면 되고, 한 바퀴 돌아오면 오르내림의 합은 $0$입니다. 비유가 맞지 않는 곳은 복소수의 "높이 차"가 복소수라는 것과, 지도가 없는 함수도 많다는 것입니다. 거꾸로 어떤 닫힌 경로열에서 적분이 $0$이 아니면 그 함수에는 그런 지도가 없습니다((3)의 마지막 문장).

증명의 중심은 (1)입니다. 실변수 복소수값 함수의 미분은 실수부와 허수부의 미분으로 정의했으므로, 복소 미분의 카라테오도리 꼴 $F(z) - F(\gamma(c)) = \varphi(z)(z - \gamma(c))$에 $z = \gamma(t)$를 넣고, 곱의 실수부와 허수부를 실함수의 극한 법칙으로 따로 다룹니다. (5)에서 영역이라는 가정이 빠지면 차가 상수가 아닐 수 있다는 것은 아래 반례에서 봅니다.

## 증명

:::idea
(1)은 카라테오도리 꼴의 $\varphi$로 $F \circ \gamma$의 차분몫을 $\varphi(\gamma(t))$와 $\gamma$의 차분몫의 곱으로 쓰고, 실수부와 허수부를 실함수의 극한 법칙으로 보낸다. (2)는 (1)과 미적분의 기본정리이고, 나머지는 (2)와 복소 미분의 법칙에서 나온다.
:::

:::hint
$\varphi(\gamma(t))$의 실수부를 $A(t)$, 허수부를 $B(t)$라 하면, $\operatorname{Re} F(\gamma(t))$의 $c$에서의 차분몫은 $A(t)$와 $\operatorname{Re}\gamma$의 차분몫의 곱에서 $B(t)$와 $\operatorname{Im}\gamma$의 차분몫의 곱을 뺀 것입니다.
:::

:::hint
(2)의 (i)에서 $F \circ \gamma$의 도함수는 $t$에서의 값이 $f(\gamma(t))\,\gamma'(t)$인 함수이고, 이것은 경로 적분의 정의에서 적분하는 함수와 같습니다.
:::

:::proof
"미분 (n)"은 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 번호, "복소 미분 (n)"은 [[complex-derivative|복소 미분]]의 번호, "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]]의 번호이다.

**1의 증명.** $z_c = \gamma(c)$로 둔다. 복소 미분 (2)의 (i)에 의해 $z_c$에서 연속인 복소함수 $\varphi : G \to \mathbb{C}$가 있어 모든 $z \in G$에서 $F(z) - F(z_c) = \varphi(z)(z - z_c)$이고 $\varphi(z_c) = F'(z_c)$이다.

*$\varphi \circ \gamma$의 연속.* 미분 (1)에 의해 $\gamma : I \to \mathbb{C}$는 $c$에서 연속이고, [[continuity-agrees-with-analysis]]의 (1)(공역을 줄이기)에 의해 $\gamma$를 $I$에서 $G$로의 함수로 보아도 $c$에서 연속이다. [[composition-of-continuous-maps|연속함수의 합성]]의 (2)에 의해 $\varphi \circ \gamma : I \to \mathbb{C}$는 $c$에서 연속이다. $A(t) = \operatorname{Re} \varphi(\gamma(t))$, $B(t) = \operatorname{Im} \varphi(\gamma(t))$로 정한 실함수 $A, B : I \to \mathbb{R}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (1)에 의해 위상의 뜻으로 $c$에서 연속이고, [[continuity-agrees-with-analysis]]의 (3)에 의해 [[continuous-function|연속함수]]의 뜻으로 $c$에서 연속이다. 그 정의의 $\delta$는 $t \in I - \{c\}$이고 $|t - c| < \delta$인 $t$에서도 $|A(t) - A(c)| < \varepsilon$을 주므로, [[limit-of-a-function]]의 수렴의 정의에 의해 $A$와 $B$를 $I - \{c\}$로 제한한 함수는 $c$에서 각각 $A(c)$, $B(c)$로 수렴한다. [[derivative]]에 의해 $c$는 $I - \{c\}$의 집적점이다.

*차분몫.* $t \in I - \{c\}$에서 $\Delta(t) = \gamma(t) - z_c$로 두면 $F(\gamma(t)) - F(z_c) = \varphi(\gamma(t))\,\Delta(t)$이다. [[complex-number]]의 곱셈의 정의와 [[complex-field|복소수체]]의 (1)($\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$, 허수부도 같다)에 의해
$$
\begin{aligned}
&\operatorname{Re} F(\gamma(t)) - \operatorname{Re} F(z_c) \\
&\quad = A(t) \operatorname{Re}\Delta(t) - B(t) \operatorname{Im}\Delta(t), \\
&\operatorname{Im} F(\gamma(t)) - \operatorname{Im} F(z_c) \\
&\quad = A(t) \operatorname{Im}\Delta(t) + B(t) \operatorname{Re}\Delta(t)
\end{aligned}
$$
이고, $\operatorname{Re}\Delta(t) = \operatorname{Re}\gamma(t) - \operatorname{Re}\gamma(c)$, $\operatorname{Im}\Delta(t) = \operatorname{Im}\gamma(t) - \operatorname{Im}\gamma(c)$이다. 양변에 실수 $(t - c)^{-1}$을 곱하면([[real-number-arithmetic]]의 분배법칙), $P = q^{\operatorname{Re}\gamma}_c$, $Q = q^{\operatorname{Im}\gamma}_c$를 [[derivative]]의 차분몫이라 할 때 $I - \{c\}$의 모든 $t$에서
$$
\begin{aligned}
q^{\operatorname{Re}(F \circ \gamma)}_c(t) &= A(t)P(t) - B(t)Q(t), \\
q^{\operatorname{Im}(F \circ \gamma)}_c(t) &= A(t)Q(t) + B(t)P(t)
\end{aligned}
$$
이다. 여기서 $\operatorname{Re}(F \circ \gamma)$는 $t$에서의 값이 $\operatorname{Re} F(\gamma(t))$인 실함수이다. $\gamma$가 $c$에서 미분가능하므로 정의에 의해 $P$, $Q$는 $c$에서 각각 $(\operatorname{Re}\gamma)'(c)$, $(\operatorname{Im}\gamma)'(c)$로 수렴한다. [[limit-laws-for-functions|함수의 극한 법칙]]의 (5)(곱), (4)(차), (3)(합)에 의해 두 차분몫은 $c$에서 각각
$$
\begin{aligned}
&A(c)(\operatorname{Re}\gamma)'(c) - B(c)(\operatorname{Im}\gamma)'(c), \\
&A(c)(\operatorname{Im}\gamma)'(c) + B(c)(\operatorname{Re}\gamma)'(c)
\end{aligned}
$$
로 수렴한다. 따라서 $\operatorname{Re}(F \circ \gamma)$와 $\operatorname{Im}(F \circ \gamma)$는 $c$에서 미분가능하고, 미분계수의 정의(미분의 머리말)와 곱셈의 정의, [[complex-field]]의 (4)에 의해 $(F \circ \gamma)'(c)$는 위의 두 실수를 실수부와 허수부로 하는 복소수, 곧 $\varphi(z_c)\,\gamma'(c) = F'(\gamma(c))\,\gamma'(c)$이다.

*도함수와 연속미분가능.* $\gamma$가 미분가능한 함수이고 $F$가 정칙함수이면 모든 $t \in I$에서 앞 문단이 성립한다. $\gamma$가 연속미분가능하고 $F'$이 $K = \gamma(I)$ 위에서 연속이면, [[subspace-and-continuity]]의 (3)의 (i)에 의해 공역을 $K$로 줄인 $\gamma_K : I \to K$는 연속이고(미분 (1)), $t$에서의 값이 $F'(\gamma(t))$인 함수는 $F'|_K \circ \gamma_K$이므로 연속이다([[composition-of-continuous-maps|연속함수의 합성]]의 (1)). 미분 (1)에 의해 $\gamma'$도 연속이므로 [[continuity-of-complex-operations]]의 (3)에 의해 $(F \circ \gamma)'$은 연속이고, 미분 (1)에 의해 $F \circ \gamma$는 연속미분가능하다.

**2의 증명.** (i) $K$를 $\gamma$의 상이라 하자. [[path-in-the-complex-plane|경로]]의 정의에 의해 $\gamma$는 연속미분가능하고, $F$는 정칙함수이며 $F' = f$는 $K$ 위에서 연속이다. (1)에 의해 $F \circ \gamma : [a, b] \to \mathbb{C}$는 연속미분가능하고 도함수의 $t$에서의 값은 $f(\gamma(t))\,\gamma'(t)$이다. [[fundamental-theorem-for-complex-valued-functions|복소수값 함수의 미적분의 기본정리]]의 (1)의 마지막 문장에 의해
$$
\begin{aligned}
\int_\gamma f &= \int_a^b (F \circ \gamma)' \\
&= F(\gamma(b)) - F(\gamma(a))
\end{aligned}
$$
이다. 첫 등호는 [[path-integral|경로 적분]]의 정의이다.

(ii) $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 "길이가 $k$이고 (ii)의 조건을 만족하는 모든 경로열에서 $\int_\Gamma f = F(v) - F(u)$"를 보인다. $\gamma_j$가 $[a_j, b_j]$ 위의 경로라 하자. $k = 1$이면 경로 적분의 정의에 의해 $\int_{(\gamma_1)} f = \int_{\gamma_1} f$이고, $(\gamma_1)$의 시작점과 끝점은 $\gamma_1$의 것이므로 (i)이다. $k$에서 성립한다고 하고 $\Gamma = (\gamma_1, \dots, \gamma_{k+1})$을 보자. $(\gamma_1, \dots, \gamma_k)$는 경로열의 정의의 조건을 만족하는 경로열이고, 그 상은 $\Gamma$의 상의 부분집합이며, 시작점은 $u$, 끝점은 $\gamma_k(b_k)$이다. 경로열의 정의에 의해 $\gamma_k(b_k) = \gamma_{k+1}(a_{k+1})$이다. [[complex-finite-sum]]의 (2)(끝항 떼기), 귀납 가정과 (i)에 의해
$$
\begin{aligned}
\int_\Gamma f &= \sum_{j=1}^{k} \int_{\gamma_j} f + \int_{\gamma_{k+1}} f \\
&= \bigl(F(\gamma_k(b_k)) - F(u)\bigr) \\
&\qquad + \bigl(F(v) - F(\gamma_{k+1}(a_{k+1}))\bigr) \\
&= F(v) - F(u)
\end{aligned}
$$
이다. 마지막 문단의 문장은 경로 적분의 "상 위에서 연속"의 정의 뒤 문장이다.

(iii) (ii)에 의해 둘 다 $F(v) - F(u)$이다.

**3의 증명.** 닫힌 경로열에서는 $u = v$이므로 (2)의 (ii)에 의해 $\int_\Gamma f = F(u) - F(u) = 0$이다. 닫힌 경로 $\gamma$는 길이 $1$인 닫힌 경로열 $(\gamma)$와 적분이 같다. 마지막 문장: $f$가 $G$ 위에서 복소 원시함수를 가지면 첫 문장에 의해 그런 $\Gamma$에서 $\int_\Gamma f = 0$이어야 하므로, $\int_\Gamma f \ne 0$인 $\Gamma$가 있으면 복소 원시함수가 없다.

**4의 증명.** (i) $k \ge 0$이면 $D_k = \mathbb{C}$는 열린집합이다([[open-set-in-metric-space]]의 (1)). $k < 0$이면 [[open-set-in-metric-space]]의 (5)에 의해 $\{a\}$는 닫힌집합이므로 닫힌집합의 정의에 의해 $\mathbb{C} - \{a\}$는 열린집합이다. $g(z) = z - a$로 정한 $g : D_k \to \mathbb{C}$는 복소 미분 (5)에 의해 정칙함수이고 모든 점에서 $g'(z) = 1$이다. $k = 0$이면 $f_0$은 값이 $1$인 상수함수이므로([[power-of-a-complex-number]]의 정의 $w^0 = 1$) 복소 미분 (5)에 의해 정칙함수이다. 0이 아닌 정수 $m$에 대하여 $e_m(w) = w^m$으로 정한 함수를 $m \ge 1$이면 $\mathbb{C}$ 위에, $m < 0$이면 $\mathbb{C} - \{0\}$ 위에 두면, 법칙 (4)의 (i), (ii)에 의해 $e_m$은 정칙함수이다. $k \ne 0$이면 $k < 0$일 때 $g$의 값은 $\mathbb{C} - \{0\}$에 들고, 어느 경우든 $f_k = e_k \circ g$이므로 법칙 (5)(연쇄법칙)에 의해 정칙함수이고, 복소 미분 (3)에 의해 연속이다.

(ii) $k \ge 0$이면 $k + 1$은 자연수이고, $k \le -2$이면 $k + 1 \le -1$이다. 어느 쪽이든 $k + 1 \ne 0$이다. (i)의 증명의 $e_{k+1}$($k \ge 0$이면 $\mathbb{C}$ 위, $k \le -2$이면 $\mathbb{C} - \{0\}$ 위)은 정칙함수이고 $w$에서의 미분계수는 $(k + 1) w^k$이다(법칙 (4)의 (i), (ii)). (i)의 $g$의 값은 $e_{k+1}$의 정의역에 들므로 법칙 (5)에 의해 $e_{k+1} \circ g$는 정칙함수이고 $(e_{k+1} \circ g)'(z) = (k + 1)(z - a)^k \cdot 1$이다. 법칙 (1)의 상수배를 $c = \iota\bigl((k + 1)^{-1}\bigr)$로 쓰면, $z$에서의 값이 $(z - a)^{k+1}(k + 1)^{-1}$인 함수는 정칙함수이고 미분계수는 $(k + 1)^{-1}(k + 1)(z - a)^k = (z - a)^k$이다([[complex-field]]의 (2)의 (i)과 (3)의 (ii)).

(iii) (i)에 의해 $f_k$는 연속이므로 각 경로의 상 위에서 연속이다([[path-integral]]의 "상 위에서 연속"의 정의 뒤 문장). (ii)의 원시함수와 (3)에 의해 $\int_\Gamma f_k = 0$이다. $k \le -2$이면 "상이 $D_k = \mathbb{C} - \{a\}$의 부분집합"은 "상이 $a$를 원소로 갖지 않음"과 같다. 마지막 문장: 모든 $z$에서 $h(z) = \alpha f_0(z) + \beta f_1(z)$이고(여기서 $f_0$, $f_1$은 $D_0 = D_1 = \mathbb{C}$ 위의 함수), [[path-integral]]의 (1)(선형성, 경로열에서도 같다)과 앞 문장의 $k = 0$, $1$에 의해 $\int_\Gamma h = \alpha \cdot 0 + \beta \cdot 0 = 0$이다.

**5의 증명.** (i) 값이 $C$인 상수함수 $G \to \mathbb{C}$는 복소 미분 (5)에 의해 정칙함수이고 미분계수가 $0$이다. 법칙 (1)(합)에 의해 $z$에서의 값이 $F(z) + C$인 함수는 정칙함수이고 미분계수는 $F'(z) + 0 = f(z)$이다.

(ii) $F$와 $H$는 정칙함수이고 모든 $z \in G$에서 $H'(z) = f(z) = F'(z)$이므로 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (4)이다.

**6의 증명.** $c \in I$라 하자. $F$는 정칙함수이므로 $\iota(c)$에서 복소 미분가능하다. 복소 미분 (6)을 $h = U$에 쓰면 $U$는 $c$에서 미분가능하고 $F'(\iota(c)) = \iota(U'(c))$이다. 한편 $F'(\iota(c)) = f(\iota(c)) = \iota(u(c))$이므로 $\iota(U'(c)) = \iota(u(c))$이고, [[complex-field]]의 (2)($\iota$는 단사)에 의해 $U'(c) = u(c)$이다. $c$는 $I$의 아무 원소이므로 $U$는 미분가능한 함수이고 $U' = u$이다. 이것이 [[antiderivative-and-integral-of-power]]의 원시함수의 정의이다. $\blacksquare$
:::

## 예시와 반례

:::example[단위원을 따라 본 z³ 의 연쇄법칙]
$F(z) = z^3$으로 정한 $F : \mathbb{C} \to \mathbb{C}$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)에 의해 정함수이고 $F'(z) = 3z^2$입니다. $\gamma(t) = \exp(it)$로 정한 $\gamma : \mathbb{R} \to \mathbb{C}$는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]]의 (8)에 의해 미분가능한 함수이고 $\gamma'(t) = i\exp(it)$입니다. (1)에 의해
$$
\begin{aligned}
(F \circ \gamma)'(t) &= 3\exp(it)^2 \cdot i\exp(it) \\
&= 3i\exp(3it)
\end{aligned}
$$
입니다. 마지막 등호는 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)의 $z^2 z = z^3$과 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (3)($\exp(3it) = \exp(it)^3$)입니다. 같은 (3)에 의해 $(F \circ \gamma)(t) = \exp(3it)$이므로, 실변수 복소수값 함수의 미분의 (8)을 $c_0 = 3i$에 직접 써도 도함수의 값이 $3i\exp(3it)$로 같습니다.
:::

:::counterexample[연결이 아닌 열린집합 위의 두 원시함수]
$U_1 = \{z \in \mathbb{C} : \operatorname{Re} z > 0\}$, $U_2 = \{z \in \mathbb{C} : \operatorname{Re} z < 0\}$, $G = U_1 \cup U_2$로 둡시다. $z \in U_1$이고 $|z - w| < \operatorname{Re} z$이면 [[complex-field|복소수체]]의 (1), 실수의 $x \le |x|$([[absolute-value]]의 (6)), [[modulus-of-complex-number|복소수의 절댓값]]의 (6)에 의해 $\operatorname{Re} z - \operatorname{Re} w = \operatorname{Re}(z - w) \le |\operatorname{Re}(z - w)| \le |z - w| < \operatorname{Re} z$이므로 $\operatorname{Re} w > 0$입니다. 곧 $B(z, \operatorname{Re} z) \subseteq U_1$이고 $U_1$은 열린집합입니다. $z \in U_2$이고 $|z - w| < -\operatorname{Re} z$이면 같은 근거와 절댓값의 (2)($|w - z| = |z - w|$)에 의해 $\operatorname{Re} w - \operatorname{Re} z \le |w - z| < -\operatorname{Re} z$이므로 $\operatorname{Re} w < 0$입니다. 곧 $B(z, -\operatorname{Re} z) \subseteq U_2$이고 $U_2$도 열린집합이며, [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (2)에 의해 $G$도 열린집합입니다.

$f(z) = 2z$, $F(z) = z^2$으로 정한 $f, F : G \to \mathbb{C}$와, $z \in U_1$이면 $H(z) = z^2 + 1$, $z \in U_2$이면 $H(z) = z^2$으로 정한 $H : G \to \mathbb{C}$를 봅시다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i), (1)과 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 $F$와 $H|_{U_1}$, $H|_{U_2}$는 정칙함수이고 미분계수는 $2z$이며, 복소 미분의 (4)의 (ii)에 의해 $H$도 정칙함수이고 $H'(z) = 2z$입니다. 따라서 $F$와 $H$는 둘 다 $G$ 위의 $f$의 복소 원시함수이지만 $H(1) - F(1) = 1$이고 $H(-1) - F(-1) = 0$이어서, $H(z) = F(z) + C$인 복소수 $C$는 없습니다. (5)의 (ii)에서 영역이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$z$에서의 값이 $(z + i)^{-3}$인 함수 $\mathbb{C} - \{-i\} \to \mathbb{C}$의 복소 원시함수를 하나 쓰면?]
(4)의 (ii)를 $a = -i$, $k = -3$에 쓰면 $z$에서의 값이 $(z + i)^{-2}(-2)^{-1}$, 곧 $-\tfrac{1}{2}(z + i)^{-2}$인 함수입니다. (5)의 (i)에 의해 여기에 상수를 더한 함수도 복소 원시함수입니다.
:::

:::check[연속인 $f : G \to \mathbb{C}$가 $G$ 위에서 복소 원시함수 $F$를 갖고 $F(1) = 2$, $F(i) = 5i$이면, 상이 $G$에 드는 $i$에서 $1$로 가는 C¹ 경로 $\gamma$를 따른 $\int_\gamma f$는?]
(2)의 (i)에 의해 $F(1) - F(i) = 2 - 5i$입니다. 경로가 어떤 모양이든 상이 $G$에 들기만 하면 값이 같습니다.
:::
