---
title: 닫힌 직사각형 위의 연속함수
title_en: Continuous Functions on a Closed Rectangle
aliases: [두 변수 연속함수, 직사각형 위의 연속함수, 둘째 변수에 대한 립시츠 조건, 둘째 변수에 대하여 립시츠, continuous function of two variables, Lipschitz in the second variable]
kind: proposition
field: real-analysis
msc: ["26B05", "54C05"]
level: undergrad
summary: 두 구간의 곱 I × J 에 곱위상을 주어 그 위의 연속함수를 정의하고, 이 위상이 ℝ × ℝ 의 보통 위상의 부분공간 위상과 같다는 것, 합·곱과 한 변수만의 연속함수로 연속함수를 만든다는 것을 보인다. I, J 가 닫힌구간이면 I × J 는 콤팩트이고 연속함수는 유계이다. 연속함수 f 의 그래프를 넣어 t 를 F(t, f(t)) 로 보내는 함수는 연속이다. 둘째 변수에 대한 립시츠 조건을 정의하고 예를 든다.
requires: [set, subset, function, cartesian-product, function-composition, adding-or-removing-an-element, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, square-root-exists, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, power-function-is-continuous, composition-of-continuous-functions, metric-space, metric-space-examples, topological-space, standard-topology-on-reals, subspace-topology, metric-subspace-topology, product-topology, continuous-map, composition-of-continuous-maps, subspace-and-continuity, continuity-agrees-with-analysis, maps-into-a-product, max-metric-and-product-topology, compact-space, closed-interval-is-compact, product-of-compact-spaces, extreme-value-theorem-for-compact-spaces, lipschitz-map]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.3.4절 연습문제 6.3.1, 6.3.2 (p.252); 6.3.2절 Definition 6.3.1, Theorem 6.3.2 의 'Lipschitz in the second variable' (p.247); 7.6.3절 연습문제 7.6.2 (p.299); 7.6.2절 Theorem 7.6.3 증명 첫머리 (p.298)"
    checked: original
    note: "출처 Definition 6.3.1(p.247)은 ℝ² 의 부분집합 위의 함수의 연속을 수열로 정의한다('For simplicity, we give the following sequential definition'). 이 항목은 그것을 따르지 않고, I × J 에 곱위상(= ℝ × ℝ 의 보통 위상의 부분공간 위상, (1))을 주어 위상수학 입문의 연속으로 정의한다. 수열 판정은 위상수학 입문에서 한 방향만 있으므로 두 정의가 같다는 것은 진술하지 않는다. (4)는 출처 연습문제 6.3.1(p.252, I, J 구간, F 연속, f : I → J 연속이면 F(x, f(x)) 는 I 위의 연속함수)과 연습문제 7.6.2(p.299)의 앞부분(f : [−h, h] → J 가 연속이면 F(t, f(t)) 는 t 의 함수로 연속)과 같은 진술이고, 정의역을 구간 I′ ⊆ I 로 둔 것만 다르다. (3)의 유계는 출처 연습문제 6.3.2(p.252, I, J 가 닫힌 유계 구간이면 연속인 F 는 유계)와 같은 진술이고, 출처 Theorem 7.6.3 의 증명 첫머리(p.298)는 'I × J 가 콤팩트이고 F 가 연속이므로 F 는 유계'라고 적은 뒤 모든 점에서 |F| ≤ M 인 M > 0 을 잡는다. [a, b] × [c, d] 가 콤팩트라는 것은 출처 7.4.2절 Theorem 7.4.14(하이네–보렐, p.284)의 증명 안에서 수열로 보이고, 이 항목은 위상수학 입문의 product-of-compact-spaces (2)를 쓴다. '닫힌 직사각형'(closed rectangle)이라는 말은 출처 7.5.4절(p.291)의 Proposition 7.5.12 앞 문단에 있다. (2)의 합과 곱은 출처 7.5.1절 Example 7.5.3(p.288, 두 변수 다항식은 연속)과 같은 방향의 사실이고, 출처는 그것을 수열로 보인다. (5)의 정의는 출처 Theorem 6.3.2(p.247)와 Theorem 7.6.3(p.298)의 'Lipschitz in the second variable'(어떤 L ∈ ℝ 이 있어 모든 y, z ∈ J, x ∈ I 에서 |F(x, y) − F(x, z)| ≤ L|y − z|)과 같은 부등식이다. 출처는 L ∈ ℝ 이라고만 하고, 이 항목은 해석학 입문·거리공간의 립시츠 상수처럼 0 ≤ L 을 정의에 둔다(J 는 서로 다른 두 점을 가지므로 부등식을 만족하는 L 은 저절로 0 이상이다). 출처 연습문제 6.3.5(p.252)는 같은 조건을 다시 적는다. (6)의 (iv)는 출처 6.3.3절 Example 6.3.5(p.251)가 '연속이지만 y 에 대하여 립시츠가 아니다(why?)'라고 적는 F(x, y) = 2√|y| 와 같은 함수이고, 그 '(why?)'를 증명한 것이다. 반례 'ℝ × ℝ 위의 y²'는 출처 Example 6.3.4(pp.250–251)의 'y 를 y² 로 보내는 함수는 ℝ 전체에서 립시츠가 아니다'와 같은 대상이고, 출처 3.4.4절 연습문제 3.4.6(p.143, 차수 2 이상인 다항식 ℝ → ℝ 은 립시츠 연속이 아니다)의 한 경우이다. (6)의 (iii)은 출처 연습문제 3.4.13(p.144, [0, 1] 위의 x^m 과 다항식은 립시츠이다)과 같은 방향으로, 유계인 J 위의 y² 를 다룬다. (6)의 (iv)의 증명은 출처 3.4.3절 Example 3.4.10(p.142, [0, ∞) 위의 √x 는 립시츠 연속이 아니다)과 같은 발상(0 가까이에서 할선의 기울기가 커진다)이다. (5)의 (iii)은 출처 연습문제 3.4.12 a)(p.143, 립시츠 함수의 합은 립시츠)를 둘째 변수에 대한 조건으로 옮긴 것이다. 반례 '열린구간의 곱 (0, 1) × (0, 1) 위의 x⁻¹'의 함수는 출처 3.3.1절 Example 3.3.5(p.132)가 (0, 1) 이 닫혀 있지 않아 최대·최소 정리가 성립하지 않는 예로 드는 (0, 1) 위의 1/x 를 첫째 변수의 함수로 본 것이다. 확인 질문 'F(x, y) = |x − y|'의 부등식은 출처 1.3절 Corollary 1.3.3 (i)(p.37)의 역삼각부등식이고, 확인 질문 'F(x, y) = xy'의 F 는 출처 연습문제 6.3.4(p.252)의 방정식 f′(x) = x f(x) 의 오른쪽과 같은 함수이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이던 설명 문장 3건을 고치고 뒤 항목이 쓸 진술 3개를 더했으며 메모의 겹침 약 10건을 작성자가 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
구간과 닫힌구간은 [[interval]]의 것이다. $\mathbb{R}$의 보통 거리 $d$와 보통 위상 $\mathcal{T}_d$는 [[metric-space-examples]]의 (1)과 [[standard-topology-on-reals]]의 (5)의 것이고, $\mathbb{R}$의 부분집합 $S$에는 [[metric-subspace-topology]]의 (2)에서처럼 부분공간 위상 $\mathcal{T}_d|_S$를 준다. $\mathbb{R} \times \mathbb{R}$ 위의 최대 거리 $d_{\max}$와 부분공간 거리는 [[metric-space-examples]]의 것이고, 곱위상 $\otimes$와 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이며, 부분공간 위상 $\mathcal{T}|_Y$는 [[subspace-topology]]의 것이다. 위상공간 사이의 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 실함수의 연속과 연속함수는 해석학 입문의 [[continuous-function|연속함수]]의 것이다. $K$-립시츠는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 아래에서 $I$, $J$는 구간이고, 이름을 붙인 함수는 모두 [[recursion-theorem|재귀 정리]]의 (1)에 의해 값으로 정한 함수이다.

**직사각형 위의 연속함수.** 곱집합 $I \times J$에 곱위상 $(\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)$를 준다. 함수 $F : I \times J \to \mathbb{R}$가 **연속**(continuous)인 것은 정확히 $F : (I \times J, (\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)) \to (\mathbb{R}, \mathcal{T}_d)$가 위상공간 사이의 함수로서 연속일 때이고, 이때 $F$를 $I \times J$ 위의 **연속함수**라 한다. $I$와 $J$가 둘 다 닫힌구간이면 $I \times J$를 **닫힌 직사각형**(closed rectangle)이라 부른다. $F$의 $(x, y)$에서의 값은 $F(x, y)$로 쓴다.

1. (세 위상은 같다) $d_{\max}$를 $\mathbb{R} \times \mathbb{R}$ 위의 두 보통 거리의 최대 거리라 하고 $d'$을 $I \times J$ 위의 그 부분공간 거리라 하면
   $$
   \begin{aligned}
   (\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J) &= (\mathcal{T}_d \otimes \mathcal{T}_d)|_{I \times J} \\
   &= \mathcal{T}_{d'}
   \end{aligned}
   $$
   이다. 곧 $I \times J$의 위상은 $\mathbb{R} \times \mathbb{R}$의 보통 위상의 부분공간 위상이고, $(I \times J, d')$의 거리위상이기도 하다.
2. (연속함수 만들기)
   - (i) (한 변수만의 함수) $\varphi : I \to \mathbb{R}$와 $g : J \to \mathbb{R}$가 연속함수이면, $(x, y)$에서의 값이 $\varphi(x)$인 함수와 $g(y)$인 함수 $I \times J \to \mathbb{R}$는 연속이다. 특히 값이 $x$인 함수, 값이 $y$인 함수, 값이 상수인 함수는 연속이다.
   - (ii) (합과 곱) $F$, $G : I \times J \to \mathbb{R}$가 연속이고 $k$가 실수이면, $(x, y)$에서의 값이 $F(x, y) + G(x, y)$, $F(x, y)\,G(x, y)$, $k\,F(x, y)$인 함수 $I \times J \to \mathbb{R}$는 연속이다.
   - (iii) (작은 직사각형으로 제한) $I_1$, $J_1$이 구간이고 $I_1 \subseteq I$, $J_1 \subseteq J$이며 $F : I \times J \to \mathbb{R}$가 연속이면, $I_1 \times J_1 \subseteq I \times J$이고 제한 $F|_{I_1 \times J_1} : I_1 \times J_1 \to \mathbb{R}$는 이 항목의 뜻으로 $I_1 \times J_1$ 위의 연속함수이다.
3. (닫힌 직사각형은 콤팩트이고 연속함수는 유계) $I$와 $J$가 닫힌구간이라 하자. 그러면 $I \times J$는 콤팩트 공간이다. $F : I \times J \to \mathbb{R}$가 연속이면 $F$가 최댓값을 갖는 점과 최솟값을 갖는 점이 $I \times J$에 있고([[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 최대·최소 정리]]의 (1)의 뜻), $0 < M$이고 $I \times J$의 모든 점 $(x, y)$에서 $|F(x, y)| \le M$인 실수 $M$이 있다.
4. (그래프를 넣은 함수) $F : I \times J \to \mathbb{R}$가 연속이고, $I'$이 구간이며 $I' \subseteq I$라 하자. $f : I' \to \mathbb{R}$가 연속함수이고 모든 $t \in I'$에서 $f(t) \in J$이면, $t$에서의 값이 $F(t, f(t))$인 함수 $G : I' \to \mathbb{R}$는 연속함수이다.
5. (둘째 변수에 대한 립시츠 조건) $F : I \times J \to \mathbb{R}$가 함수이고 $L$이 실수라 하자. $F$가 **둘째 변수에 대하여 $L$-립시츠**(Lipschitz in the second variable)라는 것은 정확히 $0 \le L$이고 모든 $x \in I$와 모든 $y$, $z \in J$에서
   $$
   |F(x, y) - F(x, z)| \le L\,|y - z|
   $$
   일 때이다. $F$가 **둘째 변수에 대하여 립시츠**라는 것은 정확히 $F$가 둘째 변수에 대하여 $L$-립시츠인 실수 $L$이 있을 때이다. 이 정의는 $F$의 연속을 요구하지 않는다.
   - (i) (거리공간의 립시츠 사상과의 관계) $J$에 보통 거리의 부분공간 거리 $d_J$를 주자. $F$가 둘째 변수에 대하여 $L$-립시츠인 것은 정확히, 모든 $x \in I$에서 $y$를 $F(x, y)$로 보내는 사상 $(J, d_J) \to \mathbb{R}$가 $L$-립시츠일 때이다.
   - (ii) (상수를 키우기) $F$가 둘째 변수에 대하여 $L$-립시츠이고 $L \le L'$이면 $F$는 둘째 변수에 대하여 $L'$-립시츠이다.
   - (iii) (합) $F$가 둘째 변수에 대하여 $L_1$-립시츠이고 $G : I \times J \to \mathbb{R}$가 둘째 변수에 대하여 $L_2$-립시츠이면, $(x, y)$에서의 값이 $F(x, y) + G(x, y)$인 함수는 둘째 변수에 대하여 $(L_1 + L_2)$-립시츠이다.
   - (iv) (제한) $I_1$, $J_1$이 구간이고 $I_1 \subseteq I$, $J_1 \subseteq J$이며 $F$가 둘째 변수에 대하여 $L$-립시츠이면, $F|_{I_1 \times J_1}$도 둘째 변수에 대하여 $L$-립시츠이다.
6. (예) 아래에서 $\varphi : I \to \mathbb{R}$는 함수이다.
   - (i) (둘째 변수에 의존하지 않는 함수) $F(x, y) = \varphi(x)$이면 $F$는 둘째 변수에 대하여 $0$-립시츠이다.
   - (ii) (둘째 변수에 대하여 일차인 함수) 실수 $r$가 모든 $x \in I$에서 $|\varphi(x)| \le r$를 만족하고 $F(x, y) = \varphi(x)\,y$이면, $0 \le r$이고 $F$는 둘째 변수에 대하여 $r$-립시츠이다. 특히 $F(x, y) = y$는 둘째 변수에 대하여 $1$-립시츠이다.
   - (iii) (제곱) 실수 $r$가 모든 $y \in J$에서 $|y| \le r$를 만족하고 $F(x, y) = y^2$이면, $0 \le r$이고 $F$는 둘째 변수에 대하여 $2r$-립시츠이다.
   - (iv) (제곱근) $0 \in J$이고 $F(x, y) = 2\sqrt{|y|}$이면, $F$는 연속이지만 둘째 변수에 대하여 립시츠가 아니다.

   (i), (ii)에서 $\varphi$가 연속함수이면 $F$는 연속이고, (iii)의 $F$는 연속이다.
:::

:::english
Intervals and closed intervals are as in the entry on intervals. The standard metric $d$ and the standard topology $\mathcal{T}_d$ of $\mathbb{R}$ are as in the entries on examples of metric spaces and on the standard topology, and a subset $S$ of $\mathbb{R}$ carries the subspace topology $\mathcal{T}_d|_S$. The max metric $d_{\max}$ on $\mathbb{R} \times \mathbb{R}$ and subspace metrics are as in the entry on examples of metric spaces, the product topology $\otimes$ and the projections $\pi_1$, $\pi_2$ are as in the entry on the product topology, and subspace topologies $\mathcal{T}|_Y$ are as in the entry on subspace topologies. Continuity between topological spaces is as in the entry on continuous maps, continuity and continuous functions of a real variable are as in the introductory analysis entry, and $K$-Lipschitz maps are as in the entry on Lipschitz maps. Throughout, $I$ and $J$ are intervals, and every function given a name is defined by its values via the recursion theorem, part (1).

**Continuous functions on a rectangle.** Give $I \times J$ the product topology $(\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)$. A function $F : I \times J \to \mathbb{R}$ is **continuous** precisely when $F : (I \times J, (\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)) \to (\mathbb{R}, \mathcal{T}_d)$ is continuous as a function between topological spaces, and then $F$ is called a **continuous function** on $I \times J$. When $I$ and $J$ are both closed intervals, $I \times J$ is called a **closed rectangle**. The value of $F$ at $(x, y)$ is written $F(x, y)$.

1. (The three topologies agree) If $d_{\max}$ is the max metric of the two standard metrics on $\mathbb{R} \times \mathbb{R}$ and $d'$ is its subspace metric on $I \times J$, then
   $$
   \begin{aligned}
   (\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J) &= (\mathcal{T}_d \otimes \mathcal{T}_d)|_{I \times J} \\
   &= \mathcal{T}_{d'}.
   \end{aligned}
   $$
   That is, the topology of $I \times J$ is the subspace topology of the standard topology of $\mathbb{R} \times \mathbb{R}$, and it is also the metric topology of $(I \times J, d')$.
2. (Building continuous functions)
   - (i) (Functions of one variable) If $\varphi : I \to \mathbb{R}$ and $g : J \to \mathbb{R}$ are continuous functions, then the functions $I \times J \to \mathbb{R}$ whose values at $(x, y)$ are $\varphi(x)$ and $g(y)$ are continuous. In particular, the function with value $x$, the function with value $y$, and constant functions are continuous.
   - (ii) (Sums and products) If $F$, $G : I \times J \to \mathbb{R}$ are continuous and $k$ is a real number, then the functions $I \times J \to \mathbb{R}$ whose values at $(x, y)$ are $F(x, y) + G(x, y)$, $F(x, y)\,G(x, y)$ and $k\,F(x, y)$ are continuous.
   - (iii) (Restricting to a smaller rectangle) If $I_1$ and $J_1$ are intervals with $I_1 \subseteq I$ and $J_1 \subseteq J$, and $F : I \times J \to \mathbb{R}$ is continuous, then $I_1 \times J_1 \subseteq I \times J$ and the restriction $F|_{I_1 \times J_1} : I_1 \times J_1 \to \mathbb{R}$ is a continuous function on $I_1 \times J_1$ in the sense of this entry.
3. (A closed rectangle is compact and continuous functions are bounded) Let $I$ and $J$ be closed intervals. Then $I \times J$ is a compact space. If $F : I \times J \to \mathbb{R}$ is continuous, then $I \times J$ contains a point where $F$ attains its maximum and a point where it attains its minimum (in the sense of part (1) of the extreme value theorem for compact spaces), and there is a real number $M$ with $0 < M$ such that $|F(x, y)| \le M$ at every point $(x, y)$ of $I \times J$.
4. (Plugging in a graph) Let $F : I \times J \to \mathbb{R}$ be continuous, and let $I'$ be an interval with $I' \subseteq I$. If $f : I' \to \mathbb{R}$ is a continuous function with $f(t) \in J$ for all $t \in I'$, then the function $G : I' \to \mathbb{R}$ whose value at $t$ is $F(t, f(t))$ is a continuous function.
5. (Lipschitz condition in the second variable) Let $F : I \times J \to \mathbb{R}$ be a function and $L$ a real number. We say $F$ is **$L$-Lipschitz in the second variable** precisely when $0 \le L$ and
   $$
   |F(x, y) - F(x, z)| \le L\,|y - z|
   $$
   for all $x \in I$ and all $y$, $z \in J$. We say $F$ is **Lipschitz in the second variable** precisely when there is a real number $L$ such that $F$ is $L$-Lipschitz in the second variable. This definition does not require $F$ to be continuous.
   - (i) (Relation to Lipschitz maps of metric spaces) Give $J$ the subspace metric $d_J$ of the standard metric. Then $F$ is $L$-Lipschitz in the second variable precisely when, for every $x \in I$, the map $(J, d_J) \to \mathbb{R}$ sending $y$ to $F(x, y)$ is $L$-Lipschitz.
   - (ii) (Enlarging the constant) If $F$ is $L$-Lipschitz in the second variable and $L \le L'$, then $F$ is $L'$-Lipschitz in the second variable.
   - (iii) (Sums) If $F$ is $L_1$-Lipschitz in the second variable and $G : I \times J \to \mathbb{R}$ is $L_2$-Lipschitz in the second variable, then the function with value $F(x, y) + G(x, y)$ at $(x, y)$ is $(L_1 + L_2)$-Lipschitz in the second variable.
   - (iv) (Restriction) If $I_1$ and $J_1$ are intervals with $I_1 \subseteq I$ and $J_1 \subseteq J$, and $F$ is $L$-Lipschitz in the second variable, then so is $F|_{I_1 \times J_1}$.
6. (Examples) Below, $\varphi : I \to \mathbb{R}$ is a function.
   - (i) (Functions not depending on the second variable) If $F(x, y) = \varphi(x)$, then $F$ is $0$-Lipschitz in the second variable.
   - (ii) (Functions linear in the second variable) If a real number $r$ satisfies $|\varphi(x)| \le r$ for all $x \in I$ and $F(x, y) = \varphi(x)\,y$, then $0 \le r$ and $F$ is $r$-Lipschitz in the second variable. In particular, $F(x, y) = y$ is $1$-Lipschitz in the second variable.
   - (iii) (The square) If a real number $r$ satisfies $|y| \le r$ for all $y \in J$ and $F(x, y) = y^2$, then $0 \le r$ and $F$ is $2r$-Lipschitz in the second variable.
   - (iv) (The square root) If $0 \in J$ and $F(x, y) = 2\sqrt{|y|}$, then $F$ is continuous but not Lipschitz in the second variable.

   In (i) and (ii), $F$ is continuous when $\varphi$ is a continuous function, and the $F$ in (iii) is continuous.
:::

## 직관

평면 위의 함수 $F$가 연속이라는 것은 점 $(x, y)$를 조금 움직이면 값 $F(x, y)$도 조금만 움직인다는 것입니다. 위상수학 입문에서 평면 $\mathbb{R} \times \mathbb{R}$에는 곱위상을 주었고, 이것이 최대 거리 $d_{\max}$의 거리위상과 같았습니다. 직사각형 $I \times J$에 주는 위상은 평면의 이 위상을 $I \times J$로 줄인 것이고((1)), 최대 거리로 말하면 두 좌표를 함께 조금 움직이는 것을 재는 위상입니다.

닫힌 직사각형은 닫힌구간 둘의 곱이므로 공집합이 아닌 콤팩트 공간이고, 공집합이 아닌 콤팩트 공간 위의 실숫값 연속함수는 최댓값과 최솟값을 가집니다((3)). 그래서 $|F| \le M$인 상수 $M$을 양수로 잡을 수 있습니다. 미분방정식 $f'(x) = F(x, f(x))$를 다룰 때는 $F$에 미지의 함수의 그래프를 넣은 $t$에서 $F(t, f(t))$로 가는 함수가 나오는데, (4)는 $f$가 연속이고 값이 $J$에 들면 이 함수도 연속이라는 것입니다. 점 $t$를 평면의 점 $(t, f(t))$로 보내는 함수가 연속이고, 연속함수끼리 합성했기 때문입니다.

둘째 변수에 대한 립시츠 조건은 첫째 변수 $x$를 고정한 채 $y$만 움직일 때 값의 변화가 $y$의 변화의 $L$배를 넘지 않는다는 것입니다. 같은 $L$이 모든 $x$에 함께 통해야 합니다. 높이가 $F(x, y)$인 땅에 비유하면, 남북 방향으로만 걸을 때의 높이 변화가 어디서나 걸은 거리의 $L$배 이하라는 것이고, 동서 방향으로 걸을 때의 높이 변화에는 아무 조건도 없습니다. $J$가 $0$을 포함할 때 $2\sqrt{|y|}$에서는 $0$과 $y$ 사이의 높이 변화가 $2\sqrt{|y|}$이고, 이것을 거리 $|y|$로 나눈 $2/\sqrt{|y|}$는 $y$를 $0$에 가까이 잡을수록 어떤 $L$보다도 커집니다((6)의 (iv)).

## 증명

:::idea
(1)은 곱위상과 부분공간 위상, 최대 거리의 위상에 관한 위상수학 입문의 등식을 잇는다. (2)와 (4)는 사영과 짝지은 함수가 연속이라는 것에 합성을 쓰고, 위상의 연속과 해석학 입문의 연속을 오간다. (3)은 콤팩트 공간의 곱과 최대·최소 정리이고, (5), (6)은 절댓값의 계산이다.
:::

:::hint
(4)에서 $t$를 $(t, f(t))$로 보내는 함수는 포함함수 $I' \to I$와 $f$를 짝지은 것입니다. 둘이 연속이면 짝지은 함수도 연속입니다.
:::

:::hint
(6)의 (iv)에서 $L$이 있다고 하고 $0$이 아닌 $y$를 $0$에 아주 가까이 잡아 $|y|\,L < 2\sqrt{|y|}$가 되게 해 봅니다. $\sqrt{|y|} \le (L + 1)^{-1}$이면 충분합니다.
:::

:::proof
"순서 성질"은 [[order-properties-of-reals]]의 번호이고, "절댓값"은 [[absolute-value]]의 번호이다. $I$와 $J$는 구간이므로 공집합이 아니다([[interval]]의 정의 (i)).

**(1).** [[product-topology|두 공간의 곱위상]]의 (7)을 $X_1 = X_2 = \mathbb{R}$, $\mathcal{T}_1 = \mathcal{T}_2 = \mathcal{T}_d$, $A = I$, $B = J$에 쓰면 $(\mathcal{T}_d \otimes \mathcal{T}_d)|_{I \times J} = (\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)$이다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)에 의해 $\mathcal{T}_{d_{\max}} = \mathcal{T}_d \otimes \mathcal{T}_d$이고, [[metric-subspace-topology]]의 (1)을 거리공간 $(\mathbb{R} \times \mathbb{R}, d_{\max})$와 그 부분집합 $I \times J$에 쓰면 $\mathcal{T}_{d'} = \mathcal{T}_{d_{\max}}|_{I \times J}$이다. 세 등식을 이으면 (1)을 얻는다.

**(2).** (i) 사영 $\pi_1 : I \times J \to I$와 $\pi_2 : I \times J \to J$는 [[maps-into-a-product|곱으로 가는 함수]]의 (1)의 (i)에 의해 연속이다. 여기서 $I$, $J$에는 $\mathcal{T}_d|_I$, $\mathcal{T}_d|_J$를 준다. $g : J \to \mathbb{R}$가 연속함수이면, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)과 [[metric-subspace-topology]]의 (2)에 의해 $g : (J, \mathcal{T}_d|_J) \to (\mathbb{R}, \mathcal{T}_d)$는 위상의 뜻으로 연속이다. $\pi_2$의 공역과 $g$의 정의역은 같은 위상공간 $(J, \mathcal{T}_d|_J)$이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $g \circ \pi_2 : I \times J \to \mathbb{R}$는 연속이고, 그 $(x, y)$에서의 값은 $g(y)$이다. 같은 두 항목을 $\varphi : (I, \mathcal{T}_d|_I) \to (\mathbb{R}, \mathcal{T}_d)$와 $\pi_1$에 쓰면 $\varphi \circ \pi_1 : I \times J \to \mathbb{R}$는 연속이고 그 값은 $\varphi(x)$이다.

값이 $y$인 함수는 같은 집합 $\pi_2$를 $I \times J$에서 $\mathbb{R}$로의 함수로 본 것이다. [[subspace-and-continuity|부분공간 위상과 연속]]의 (3)의 (i)을 $X = \mathbb{R}$, $Y = J$, $Z = I \times J$에 쓰면, $\pi_2 : I \times J \to J$가 연속이므로 이 함수는 연속이다. 값이 $x$인 함수는 같은 집합 $\pi_1$을 $I \times J$에서 $\mathbb{R}$로의 함수로 본 것이고, 같은 (3)의 (i)을 $X = \mathbb{R}$, $Y = I$에 쓰면 $\pi_1 : I \times J \to I$가 연속이므로 연속이다. 값이 상수인 함수는 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이다.

(ii) [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (3)의 둘째 문장을 위상공간 $Z = I \times J$에 쓰면, 값이 $F(x, y) + G(x, y)$인 함수와 $F(x, y)\,G(x, y)$인 함수는 연속이다. 값이 $k$인 상수함수는 (i)에 의해 연속이므로, 같은 문장으로 값이 $k\,F(x, y)$인 함수도 연속이다.

(iii) $A = I_1 \times J_1$이라 하자. [[product-topology|두 공간의 곱위상]]의 (1)의 (c)에 의해 $A \subseteq I \times J \subseteq \mathbb{R} \times \mathbb{R}$이다. (1)을 $I_1$, $J_1$에 쓰고, [[subspace-topology]]의 (4)를 쓰고, (1)을 $I$, $J$에 다시 쓰면
$$
\begin{aligned}
&(\mathcal{T}_d|_{I_1}) \otimes (\mathcal{T}_d|_{J_1}) \\
&\quad = (\mathcal{T}_d \otimes \mathcal{T}_d)|_{A} \\
&\quad = \bigl((\mathcal{T}_d \otimes \mathcal{T}_d)|_{I \times J}\bigr)\big|_{A} \\
&\quad = \bigl((\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)\bigr)\big|_{A}
\end{aligned}
$$
이다. 곧 이 항목이 $A$에 주는 위상은 $I \times J$의 위상의 부분공간 위상이다. [[subspace-and-continuity|부분공간 위상과 연속]]의 (2)에 의해 $F|_A$는 이 위상에 대해 연속이다.

**(3).** $I = [a_1, b_1]$, $J = [a_2, b_2]$라 하자($a_1 < b_1$, $a_2 < b_2$). [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)에 의해 $(I, \mathcal{T}_d|_I)$와 $(J, \mathcal{T}_d|_J)$는 콤팩트 공간이고, [[product-of-compact-spaces|콤팩트 공간의 곱]]의 (2)에 의해 곱위상을 준 $I \times J$는 콤팩트 공간이다. [[interval]]의 (3)에 의해 $a_1 \in I$, $a_2 \in J$이므로 $(a_1, a_2) \in I \times J$이고 $I \times J \ne \emptyset$이다.

$F$가 연속이면 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 최대·최소 정리]]의 (2)에 의해 $I \times J$의 점 $q$, $q'$이 있어 모든 점 $p$에서 $F(q') \le F(p) \le F(q)$이다. 곧 $F$는 $q$에서 최댓값을, $q'$에서 최솟값을 갖는다. $M = |F(q)| + (|F(q')| + 1)$로 두자. 절댓값 (2)에 의해 $0 \le |F(q)|$, $0 \le |F(q')|$이고 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로, 순서 성질 (2)의 (iv)에 의해 $0 < |F(q')| + 1$이고 $0 < M$이다. 같은 이유로 $|F(q)| \le M$이고 $|F(q')| \le M$이다. 점 $p$에서 절댓값 (6)과 순서 성질 (2)에 의해
$$
\begin{aligned}
F(p) &\le F(q) \le |F(q)| \le M, \\
-F(p) &\le -F(q') \le |F(q')| \le M
\end{aligned}
$$
이다(둘째 줄의 첫 부등식은 $F(q') \le F(p)$에 순서 성질 (3)의 (iii)을 쓴 것이다). 그러므로 $-M \le F(p) \le M$이고, 절댓값 (7)에 의해 $|F(p)| \le M$이다.

**(4).** 위상을 먼저 정리한다. $I' \subseteq I \subseteq \mathbb{R}$이므로 [[subspace-topology]]의 (4)에 의해 $(\mathcal{T}_d|_I)|_{I'} = \mathcal{T}_d|_{I'}$이다. [[subspace-and-continuity|부분공간 위상과 연속]]의 (1)을 $X = I$, $Y = I'$에 쓰면 포함함수 $\iota : (I', \mathcal{T}_d|_{I'}) \to (I, \mathcal{T}_d|_I)$는 연속이다.

모든 $t \in I'$에서 $f(t) \in J$이므로 [[function]]의 진술에 의해 같은 집합 $f$는 $I'$에서 $J$로의 함수이기도 하다. 이것을 $f_J : I' \to J$라 쓰자. 실함수 $f$가 연속함수이므로, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (2)를 $S = I'$, $T = J$에 쓰고 [[metric-subspace-topology]]의 (2)로 위상을 읽으면 $f_J : (I', \mathcal{T}_d|_{I'}) \to (J, \mathcal{T}_d|_J)$는 연속이다.

[[maps-into-a-product|곱으로 가는 함수]]의 (4)의 (i)을 $Z = I'$, $g_1 = \iota$, $g_2 = f_J$에 쓰면, $h(t) = (t, f(t))$로 정한 함수 $h : I' \to I \times J$는 곱위상 $(\mathcal{T}_d|_I) \otimes (\mathcal{T}_d|_J)$에 대해 연속이다. $h$의 공역과 $F$의 정의역은 같은 위상공간이므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $F \circ h : (I', \mathcal{T}_d|_{I'}) \to (\mathbb{R}, \mathcal{T}_d)$는 연속이다. 모든 $t \in I'$에서 $(F \circ h)(t) = F(t, f(t)) = G(t)$이므로 [[real-valued-function]]의 (2)에 의해 $F \circ h = G$이다. 마지막으로 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)과 [[metric-subspace-topology]]의 (2)에 의해 $G$는 해석학 입문의 뜻의 연속함수이다.

**(5).** (i) $x \in I$를 고정하고 $y$를 $F(x, y)$로 보내는 사상을 $h_x : J \to \mathbb{R}$라 하자. [[metric-space-examples]]의 (1), (3)에 의해 $y$, $z \in J$에서 $d_J(y, z) = |y - z|$이고 $d(h_x(y), h_x(z)) = |F(x, y) - F(x, z)|$이다. 따라서 [[lipschitz-map|립시츠 사상]]의 정의에 의해 $h_x$가 $L$-립시츠인 것은 정확히 $0 \le L$이고 모든 $y$, $z \in J$에서 $|F(x, y) - F(x, z)| \le L\,|y - z|$일 때이다. 이것이 모든 $x \in I$에서 성립하는 것은 정확히 $F$가 둘째 변수에 대하여 $L$-립시츠일 때이다.

(ii) $0 \le L \le L'$이므로 순서 성질 (1)의 (v)에 의해 $0 \le L'$이다. 절댓값 (2)에 의해 $0 \le |y - z|$이므로 순서 성질 (4)의 (iii)에 의해 $L\,|y - z| \le L'\,|y - z|$이고, 섞인 추이성으로 $|F(x, y) - F(x, z)| \le L'\,|y - z|$이다.

(iii) 순서 성질 (2)의 (iii)에 의해 $0 \le L_1 + L_2$이다. $x \in I$, $y$, $z \in J$라 하고 $a = F(x, y) - F(x, z)$, $b = G(x, y) - G(x, z)$로 두자. (K1)–(K3)에 의해 $(F(x, y) + G(x, y)) - (F(x, z) + G(x, z)) = a + b$이고, [[triangle-inequality]]의 (1)과 순서 성질 (2)의 (iii)에 의해
$$
\begin{aligned}
|a + b| &\le |a| + |b| \\
&\le (L_1 + L_2)\,|y - z|
\end{aligned}
$$
이다.

(iv) $x \in I_1$, $y$, $z \in J_1$이면 $x \in I$, $y$, $z \in J$이고 [[adding-or-removing-an-element]]의 진술에 의해 $F|_{I_1 \times J_1}$의 값은 $F$의 값과 같으므로, $F$의 부등식이 그대로 $F|_{I_1 \times J_1}$의 부등식이다.

**(6).** (i) $F(x, y) - F(x, z) = \varphi(x) - \varphi(x) = 0$이므로 절댓값 (2)에 의해 왼쪽은 $0$이고, 오른쪽 $0 \cdot |y - z|$도 $0$이다. $0 \le 0$이다.

(ii) $I$는 공집합이 아니므로 원소 $x_1$이 있고, 절댓값 (2)와 가정에 의해 $0 \le |\varphi(x_1)| \le r$이다. $x \in I$, $y$, $z \in J$이면 (K1)–(K3)과 절댓값 (4)에 의해 $|\varphi(x)\,y - \varphi(x)\,z| = |\varphi(x)|\,|y - z|$이고, $0 \le |y - z|$와 $|\varphi(x)| \le r$에 순서 성질 (4)의 (iii)을 쓰면 $|\varphi(x)|\,|y - z| \le r\,|y - z|$이다. $\varphi$가 값이 $1$인 상수함수이면 $r = 1$로 둘 수 있고 $F(x, y) = 1 \cdot y = y$이다.

(iii) $J$는 공집합이 아니므로 원소 $y_1$이 있고 $0 \le |y_1| \le r$이다. [[power-of-a-real-number]]의 (1)에 의해 $y^2 = yy$이다. $y$, $z \in J$이면 (K1)–(K3)에 의해 $yy - zz = (y + z)(y - z)$이므로, 절댓값 (4), [[triangle-inequality]]의 (1), 순서 성질 (2)의 (iii)과 (4)의 (iii)에 의해
$$
\begin{aligned}
|y^2 - z^2| &= |y + z|\,|y - z| \\
&\le (|y| + |z|)\,|y - z| \\
&\le 2r\,|y - z|
\end{aligned}
$$
이다. $0 \le 2r$이다.

(iv) *연속.* $J$ 위의 항등함수 $i_J$는 [[continuous-function]]의 (4)에 의해 연속함수이고, [[continuity-of-sum-and-product|합과 곱의 연속]]의 (3)에 의해 $|i_J|$, 곧 값이 $|y|$인 함수는 연속함수이다. 그 값은 모두 $T = \{s \in \mathbb{R} : 0 \le s\}$에 들고, [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (2)에 의해 값이 $\sqrt{s}$인 함수 $q : T \to \mathbb{R}$는 연속함수이므로, [[composition-of-continuous-functions|연속함수의 합성]]의 (3)과 (2)에 의해 값이 $\sqrt{|y|}$인 함수 $J \to \mathbb{R}$는 연속함수이다. [[continuity-of-sum-and-product|합과 곱의 연속]]의 (3)에 의해 값이 $2\sqrt{|y|}$인 함수 $g$도 연속함수이고, (2)의 (i)에 의해 $F$는 연속이다.

*립시츠가 아니다.* 실수 $L$이 있어 $F$가 둘째 변수에 대하여 $L$-립시츠라고 하자. $J$는 서로 다른 두 원소를 가지므로 그 가운데 $0$이 아닌 원소 $z$가 있다. $u = (L + 1)^{-1}$로 두면 $0 \le L$에서 $0 < L + 1$이고 순서 성질 (6)의 (i)에 의해 $0 < u$이다. $w = \min\{|z|, uu\}$로 두자. 절댓값 (10)에 의해 $w$는 $|z|$이거나 $uu$이고, 절댓값 (2)와 순서 성질 (5)의 (i)에 의해 둘 다 양수이므로 $0 < w$이며, $w \le |z|$이고 $w \le uu$이다.

$0 < z$이면 $y = w$로, $z < 0$이면 $y = -w$로 둔다. $0 < z$인 경우 $0 \le y \le z$이고, [[interval]]의 (4)에 의해 $[0, z] \subseteq J$이므로 $y \in J$이다. $z < 0$인 경우 절댓값 (1)에 의해 $|z| = -z$이므로 $z \le -w = y \le 0$이고, [[interval]]의 (4)에 의해 $[z, 0] \subseteq J$이므로 $y \in J$이다. 두 경우 모두 절댓값 (1), (3)에 의해 $|y| = w$이다.

$I$의 원소 $x$를 하나 잡는다. $\sqrt{0} = 0$이므로([[square-root-exists|제곱근의 존재]]의 (1)의 유일성, $0 \cdot 0 = 0$) $|F(x, y) - F(x, 0)| = |2\sqrt{w} - 0| = 2\sqrt{w}$이다. 같은 항목의 (1)에 의해 $0 < \sqrt{w}$이고, (2)에 의해 $w \le uu$에서 $\sqrt{w} \le \sqrt{uu} = u$이다($w < uu$이면 $\sqrt{w} < \sqrt{uu}$이고, $w = uu$이면 같다). 그러면 순서 성질 (4)의 (iii)과 (i)에 의해
$$
\begin{aligned}
L\,|y - 0| = L\,w &= L\sqrt{w}\,\sqrt{w} \\
&\le L u\,\sqrt{w} \\
&< \sqrt{w} < 2\sqrt{w}
\end{aligned}
$$
이다. 둘째 줄은 $\sqrt{w} \le u$에 $0 \le L\sqrt{w}$를 곱한 것이다. 셋째 줄의 첫 부등식은 $L < L + 1$에 $0 < u$를 곱해 얻은 $Lu < (L + 1)u = 1$에 $0 < \sqrt{w}$를 곱한 것이고, 둘째 부등식은 $0 < \sqrt{w}$에서 $\sqrt{w} < \sqrt{w} + \sqrt{w}$인 것이다. 이것은 $|F(x, y) - F(x, 0)| \le L\,|y - 0|$에 어긋난다. 그러므로 $F$는 둘째 변수에 대하여 립시츠가 아니다.

*연속에 관한 마지막 문장.* $\varphi$가 연속함수이면 (i)의 $F$는 (2)의 (i)에 의해 연속이고, (ii)의 $F$는 (2)의 (i)의 두 함수(값이 $\varphi(x)$, 값이 $y$)의 곱이므로 (2)의 (ii)에 의해 연속이다. (iii)의 $F$는 값이 $y$인 함수끼리의 곱이므로 연속이다. $\blacksquare$
:::

## 예시와 반례

:::example[$[0, 1] \times [-1, 2]$ 위의 $x - y^2$]
$I = [0, 1]$, $J = [-1, 2]$이고 $F(x, y) = x - y^2$이라 합시다. 값이 $x$인 함수와 값이 $y$인 함수는 (2)의 (i)에 의해 연속이고, (2)의 (ii)에 의해 $y^2 = yy$와 $-y^2 = (-1)y^2$, 그리고 합 $x + (-y^2)$이 차례로 연속입니다. 따라서 $F$는 연속입니다.

*유계.* $0 \le x \le 1$이고 $J$에서 $|y| \le 2$이므로 $0 \le y^2 \le 4$입니다([[power-of-a-real-number]]의 (4), (6)의 (ii)). 따라서 $-4 \le x - y^2 \le 1$이고 $|F(x, y)| \le 4$입니다. $M = 4$로 (3)의 결론이 성립합니다. 실제로 $F(0, 2) = -4$이므로 $4$보다 작은 $M$은 쓸 수 없습니다. (3)의 증명이 주는 $M$은 최댓값 $F(1, 0) = 1$과 최솟값 $F(0, 2) = -4$에서 $M = 1 + 4 + 1 = 6$이고, 이것도 조건을 만족합니다. $M$은 하나로 정해지지 않습니다.

*립시츠 상수.* $J$의 모든 $y$에서 $|y| \le 2$이므로 (6)의 (iii)에 의해 $y^2$은 둘째 변수에 대하여 $4$-립시츠입니다. $x - y^2$에서 $x$를 고정하면 $|F(x, y) - F(x, z)| = |y^2 - z^2|$이므로 $F$도 둘째 변수에 대하여 $4$-립시츠입니다. $4$보다 작은 상수는 쓸 수 없습니다. $0 \le L < 4$이면 $t = (4 - L)/2$로 두어 $0 < t \le 2$이고, $y = 2$, $z = 2 - t \in J$에서 $|y^2 - z^2| = (4 - t)\,t$입니다. $t < 4 - L$이므로 $L < 4 - t$이고, 이 값은 $L\,|y - z| = Lt$보다 큽니다.
:::

:::counterexample[열린구간의 곱 $(0, 1) \times (0, 1)$ 위의 $x^{-1}$]
$I = J = (0, 1)$이고 $F(x, y) = x^{-1}$이라 합시다. $(0, 1)$ 위에서 $x$는 $0$이 아니므로 [[continuity-of-sum-and-product|합과 곱의 연속]]의 (3)에 의해 값이 $x^{-1}$인 함수 $(0, 1) \to \mathbb{R}$는 연속함수이고, (2)의 (i)에 의해 $F$는 연속입니다.

그러나 $F$는 유계가 아닙니다. 양수 $M$이 주어지면 $x = (M + 1)^{-1}$로 둡니다. $1 < M + 1$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $0 < x < 1$이고, $F(x, \tfrac{1}{2}) = M + 1 > M$입니다. 그러므로 $|F| \le M$인 $M$은 없습니다. $(0, 1)$은 유계인 구간이지만 닫힌구간이 아니므로 (3)의 가정을 만족하지 않습니다.
:::

:::counterexample[$\mathbb{R} \times \mathbb{R}$ 위의 $y^2$]
$I = J = \mathbb{R}$이고 $F(x, y) = y^2$이라 합시다. $F$는 (6)의 마지막 문장에 의해 연속이지만, 둘째 변수에 대하여 립시츠가 아닙니다. $0 \le L$인 $L$이 주어지면 $y = L + 1$, $z = 0$에서 $|y - z| = L + 1 > 0$이고 $|F(x, y) - F(x, z)| = (L + 1)^2 = (L + 1)\,|y - z|$이므로, 이것은 $L\,|y - z|$보다 큽니다. (6)의 (iii)은 $J$의 모든 $y$에서 $|y| \le r$인 $r$이 있을 때만 상수를 주고, $J = \mathbb{R}$에는 그런 $r$가 없습니다($y = r + 1$이면 $|y| > r$입니다).
:::

## 확인 질문

:::check[$I = J = [0, 1]$에서 $F(x, y) = |x - y|$는 둘째 변수에 대하여 립시츠인가? 상수는 무엇인가?]
그렇습니다. [[triangle-inequality]]의 (2)(역삼각부등식)에 의해 $\bigl|\,|x - y| - |x - z|\,\bigr| \le |(x - y) - (x - z)| = |z - y| = |y - z|$이므로 $F$는 둘째 변수에 대하여 $1$-립시츠입니다. $x = 0$, $y = 1$, $z = 0$이면 왼쪽과 오른쪽이 모두 $1$이므로 $1$보다 작은 상수는 쓸 수 없습니다.
:::

:::check[$I = [0, 2]$, $J = [-1, 1]$에서 $F(x, y) = xy$에 대해, (3)의 $M$과 (5)의 $L$로 쓸 수 있는 수를 하나씩 찾아라.]
$|xy| = |x|\,|y| \le 2 \cdot 1 = 2$이므로 $M = 2$를 쓸 수 있습니다($0 < 2$). $I$의 모든 $x$에서 $|x| \le 2$이므로 (6)의 (ii)에 $\varphi(x) = x$, $r = 2$를 넣으면 $F$는 둘째 변수에 대하여 $2$-립시츠이고, $L = 2$를 쓸 수 있습니다. $M$이나 $L$로 이보다 큰 수를 써도 조건은 그대로 성립합니다.
:::
