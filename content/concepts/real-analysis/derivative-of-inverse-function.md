---
title: 역함수의 미분
title_en: Derivative of an Inverse Function
aliases: [역함수의 도함수, 역함수 정리, 역함수 미분법, derivative of the inverse, inverse function theorem]
kind: theorem
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "구간에서 구간으로 가는 순단조인 전사 f 가 한 점에서 미분가능하고 미분계수가 0 이 아니면, 역함수는 대응하는 점에서 미분가능하고 미분계수는 f 의 미분계수의 역수이다. 미분계수가 0 이면 역함수는 그 점에서 미분가능하지 않다. 연속미분가능한 f 는 미분계수가 0 이 아닌 점의 근처에서 연속미분가능한 역함수를 갖는다(역함수 정리)."
requires: [function, function-composition, injective-surjective-bijective, inverse-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function, continuity-of-sum-and-product, composition-of-continuous-functions, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, chain-rule, derivative-and-monotonicity, continuously-differentiable, power-of-a-real-number, square-root-exists, power-function-is-continuous, inverse-of-strictly-monotone-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.4절(4.4.1 소절 Inverse function theorem) 첫 문단, Lemma 4.4.1 과 증명, Figure 4.10 (p.176–177), Theorem 4.4.2 와 증명 (p.177), Corollary 4.4.3 (p.177–178), Example 4.4.4, 4.4.5 (p.178); 4.4.2 소절 연습문제 4.4.2, 4.4.3, 4.4.8 (p.179); 4.1절 4.1.1 소절 끝점에 관한 문단 (p.155), Example 4.1.4 (p.156); 4.1.3 소절 연습문제 4.1.3, 4.1.10 (p.160); 3.4절 3.4.3 소절 Example 3.4.10 (p.142)
    checked: original
    note: "(1)과 (2)는 출처 Lemma 4.4.1(p.176)이다. 출처는 I, J 가 구간이고 f : I → J 가 순단조인 전사일 때 x₀ 에서 미분가능하고 f′(x₀) ≠ 0 이면 역함수가 y₀ = f(x₀) 에서 미분가능하고 미분계수가 1/f′(x₀) 이라 하고, f 가 연속미분가능하고 f′ 이 0 이 되지 않으면 역함수도 연속미분가능하다고 한다. 이 항목의 증명은 출처의 증명(p.176–177)과 같은 길이다: 차분몫의 역수를 x₀ 에서 1/f′(x₀) 로 이어 붙인 함수 Q 가 x₀ 에서 연속이고, 역함수가 연속이므로(출처 Proposition 3.6.6, 이 사이트의 '순단조함수의 역함수' (3)) 연속함수의 합성으로 Q ∘ g 가 y₀ 에서 연속이며, y ≠ y₀ 에서 Q(g(y)) 가 g 의 차분몫이라는 것이다. 출처가 괄호로만 적는 것(Q 가 정의된다는 것, 곧 x ≠ x₀ 에서 f(x) ≠ f(x₀); 집적점에서 연속이 극한과 같다는 것; Q ∘ g 를 y₀ 을 뺀 집합으로 제한한 것이 차분몫이라는 것)을 이 항목은 번호를 달아 적고, x₀ 이 I 의 끝점이어도 된다는 것을 진술에 밝힌다(출처도 4.1.1 소절 p.155 에서 c 가 구간의 끝점이어도 된다고 적는다). (3)은 출처 Example 4.4.5(p.178; x³ 의 역함수는 0 에서 미분계수가 없다, f′(0) = 0)가 한 예로 보이는 것을 일반 진술로 쓴 것이고, 출처 연습문제 4.4.8 b)(p.179; g′(y) = 0 이면 f 는 x 에서 미분가능하지 않다)와 역할을 바꾼 같은 내용이며, 증명은 출처 연습문제 4.1.10(p.160)과 4.4.2(p.179)처럼 역함수가 미분가능하다고 놓고 연쇄 법칙을 쓰는 것이다. (4)의 '역함수 정리'는 출처 Theorem 4.4.2(p.177)의 이름이다. 출처는 열린구간 (a, b) 위의 연속미분가능한 f 와 열린구간 I 를 쓰는데, 이 항목은 아무 구간 I 와 그 끝점의 x₀ 도 허락하고 A 를 I 와 x₀ 의 δ-근방의 공통부분으로 두도록 넓혔다. 출처의 증명은 연습문제 3.2.11 로 f′ 의 부호가 유지되는 열린구간을 얻고 Proposition 4.2.8 과 Corollary 3.6.3 을 쓴다. 이 항목은 '연속함수'의 (7), '도함수와 증가·감소'의 (4), '순단조함수의 역함수'의 (4)로 같은 단계를 밟는다. 예시 '제곱근 함수의 도함수'는 출처 Corollary 4.4.3(p.177–178; 음이 아닌 n 제곱근과 그 도함수)의 n = 2 인 경우와 같은 발상이고, Example 4.4.4(p.178; x² 은 x₀ > 0 이면 (0, ∞) 에서 역함수를 갖는다)와 같은 함수를 쓴다. 그 예시의 마지막 문단(g′(4) 를 차분몫으로 직접 확인)은 출처 Example 4.1.4(4.1.1 소절, p.156; √x 의 차분몫을 1/(√x + √c) 로 고쳐 써서 미분계수 1/(2√c) 를 얻는다)와 같은 계산이다. 반례 '0 에서의 제곱근 함수'는 출처 Example 4.4.5 의 x³ 대신 x² 을 쓴 같은 발상이고, 그 반례의 '0 에서의 차분몫이 한없이 커진다'는 출처 Example 3.4.10(3.4.3 소절, p.142; [0, ∞) 위의 √x 는 립시츠 연속이 아니고 0 근처의 할선이 수직에 가까워진다)과 같은 관찰이다. 예시 '자기 자신이 역함수인 x⁻¹'의 도함수 −(x²)⁻¹ 은 출처 연습문제 4.1.3(p.160; 정수 n 에 대한 xⁿ 의 도함수)의 n = −1 인 경우이다. 둘째 확인 질문(T₋ = {x ∈ ℝ : x ≤ 0} 위의 f(x) = x² 의 역함수)은 출처 연습문제 4.4.3(p.179; 짝수 n 에 대해 양수의 음의 n 제곱근과 그 도함수)의 n = 2 인 경우와 같은 대상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 너무 넓던 설명 문장 9개, 틀린 위치 1건, 출처의 말을 옮긴 문장 4건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
실함수와 그 연산(몫 $1/g$ 포함)은 [[real-valued-function]]의 것이고, 순단조와 역함수의 성질은 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 것이며, 전사는 [[injective-surjective-bijective|단사·전사·전단사]] 항목의 것이다. 구간은 [[interval]]의 것이고, 미분가능, 미분계수, 차분몫, 미분가능한 함수와 도함수는 [[derivative]]의 것이며, 연속과 연속함수는 [[continuous-function]]의 것이고, 연속미분가능은 [[continuously-differentiable]]의 것이다.

(1)–(3)에서 $I$, $J$는 구간이고, $f : I \to J$는 순단조인 전사이며, $g : J \to I$는 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (2)에 의해 정해지는 $f$의 역함수이다. 곧 $y \in J$와 $x \in I$에 대하여 $g(y) = x$인 것은 정확히 $f(x) = y$일 때이다. $J \subseteq \mathbb{R}$, $I \subseteq \mathbb{R}$이므로 $f$는 $I$ 위의 실함수, $g$는 $J$ 위의 실함수이기도 하고, 미분가능과 미분계수는 이 실함수로서의 것이다.

1. (한 점에서) $f$가 $x_0 \in I$에서 미분가능하고 $f'(x_0) \ne 0$이면, $g$는 $y_0 = f(x_0)$에서 미분가능하고
   $$
   g'(y_0) = f'(x_0)^{-1} = f'(g(y_0))^{-1}
   $$
   이다. $x_0$이 $I$의 가장 큰 원소나 가장 작은 원소여도 된다. $f$가 $x_0$ 밖의 점에서 미분가능하거나 연속이라는 것은 가정하지 않는다.
2. (미분가능한 함수) $f$가 미분가능한 함수이고 모든 $x \in I$에서 $f'(x) \ne 0$이면, $g$는 미분가능한 함수이고 모든 $y \in J$에서 $g'(y) = f'(g(y))^{-1}$이다. 곧 $g' = 1/(f' \circ g)$이다. 여기에 더해 $f$가 연속미분가능하면 $g$도 연속미분가능하다.
3. (미분계수가 $0$인 점) $f$가 $x_0 \in I$에서 미분가능하고 $f'(x_0) = 0$이면, $g$는 $y_0 = f(x_0)$에서 미분가능하지 않다.
4. (**역함수 정리**, inverse function theorem) $I$가 구간이고 $f : I \to \mathbb{R}$가 연속미분가능하며, $x_0 \in I$에서 $f'(x_0) \ne 0$이라 하자. 그러면 양의 실수 $\delta$가 있어, $A = \{x \in I : |x - x_0| < \delta\}$로 둘 때 다음이 성립한다. $A$는 $x_0$을 원소로 갖는 구간이다. $0 < f'(x_0)$이면 모든 $x \in A$에서 $0 < f'(x)$이고, $f'(x_0) < 0$이면 모든 $x \in A$에서 $f'(x) < 0$이다. 제한 $f|_A$는 순단조이고 $B = f(A)$는 구간이다. $f|_A : A \to B$의 역함수 $h : B \to A$는 연속미분가능하고, 모든 $y \in B$에서 $h'(y) = f'(h(y))^{-1}$이다.
:::

:::english
Real-valued functions and their operations (including the quotient $1/g$) are those of the entry on real-valued functions; strict monotonicity and the properties of the inverse function are those of the entry on the inverse of a strictly monotone function; surjectivity is that of the entry on injective, surjective and bijective maps. Intervals are those of the entry on intervals; differentiability, the derivative at a point, difference quotients, differentiable functions and derivatives are those of the entry on derivatives; continuity and continuous functions are those of the entry on continuous functions; continuous differentiability is that of the entry on continuously differentiable functions.

In (1)–(3), $I$ and $J$ are intervals, $f : I \to J$ is a strictly monotone surjection, and $g : J \to I$ is the inverse function of $f$ given by (2) of the entry on the inverse of a strictly monotone function. That is, for $y \in J$ and $x \in I$, $g(y) = x$ precisely when $f(x) = y$. Since $J \subseteq \mathbb{R}$ and $I \subseteq \mathbb{R}$, $f$ is also a real-valued function on $I$ and $g$ a real-valued function on $J$, and differentiability and derivatives refer to these real-valued functions.

1. (At a point) If $f$ is differentiable at $x_0 \in I$ and $f'(x_0) \ne 0$, then $g$ is differentiable at $y_0 = f(x_0)$ and
   $$
   g'(y_0) = f'(x_0)^{-1} = f'(g(y_0))^{-1}.
   $$
   $x_0$ may be the largest or the smallest element of $I$. It is not assumed that $f$ is differentiable or continuous at points other than $x_0$.
2. (Differentiable functions) If $f$ is a differentiable function and $f'(x) \ne 0$ for all $x \in I$, then $g$ is a differentiable function and $g'(y) = f'(g(y))^{-1}$ for all $y \in J$; that is, $g' = 1/(f' \circ g)$. If, in addition, $f$ is continuously differentiable, then so is $g$.
3. (A point where the derivative is $0$) If $f$ is differentiable at $x_0 \in I$ and $f'(x_0) = 0$, then $g$ is not differentiable at $y_0 = f(x_0)$.
4. (**Inverse function theorem**) Let $I$ be an interval, let $f : I \to \mathbb{R}$ be continuously differentiable, and let $x_0 \in I$ with $f'(x_0) \ne 0$. Then there is a positive real number $\delta$ such that, with $A = \{x \in I : |x - x_0| < \delta\}$, the following hold. $A$ is an interval containing $x_0$. If $0 < f'(x_0)$, then $0 < f'(x)$ for all $x \in A$, and if $f'(x_0) < 0$, then $f'(x) < 0$ for all $x \in A$. The restriction $f|_A$ is strictly monotone and $B = f(A)$ is an interval. The inverse function $h : B \to A$ of $f|_A : A \to B$ is continuously differentiable, and $h'(y) = f'(h(y))^{-1}$ for all $y \in B$.
:::

## 직관

$f$의 그래프를 대각선 $y = x$에 대해 뒤집으면 $g$의 그래프가 됩니다. 이렇게 뒤집으면 가로와 세로가 바뀌므로, 기울기가 $0$이 아닌 $m$인 접선은 기울기가 $m^{-1}$인 접선이 됩니다. (1)이 이것입니다. 기울기가 $0$인 수평 접선은 뒤집으면 수직선이 되는데, 수직선의 기울기는 실수가 아니므로 $g$는 그 점에서 미분가능하지 않습니다. (3)이 이것이고, 아래 반례의 $\sqrt{y}$의 $0$에서가 그런 경우입니다.

증명은 그림의 말을 차분몫으로 옮깁니다. $x \ne x_0$이면 $f$의 차분몫과 $g$의 차분몫은 서로 역수이므로, $g$의 차분몫이 수렴한다는 것을 보일 때 "$y$가 $y_0$에 가까우면 $g(y)$도 $x_0$에 가깝다", 곧 $g$의 연속을 씁니다. 이것을 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (3)이 주고, 거기서 $I$가 구간이라는 가정이 쓰입니다. $g$에 미분계수를 말하려면 $g$의 정의역 $J$도 구간이어야 하므로 $J$가 구간이라는 것도 가정에 둡니다.

(4)의 역함수 정리는 $f$가 처음부터 순단조가 아니어도 됩니다. $f'$이 연속이고 $f'(x_0) \ne 0$이면 $x_0$ 근처에서 $f'$의 부호가 바뀌지 않으므로 그 근처로 제한한 $f$는 순단조가 되고, 거기에 (2)를 씁니다.

## 증명

:::idea
$x \ne x_0$에서 $f$의 차분몫의 역수로 정하고 $x_0$에서 $f'(x_0)^{-1}$로 정한 함수 $Q$는 $x_0$에서 연속이다. $g$가 연속이므로 합성 $Q \circ g$는 $y_0$에서 연속이고, $y_0$ 밖에서 $Q \circ g$는 $g$의 차분몫과 같다.
:::

:::hint
$y \ne y_0$이면 $x = g(y)$는 $x_0$과 다르고 $f(x) = y$입니다. $Q(g(y))$를 $x$와 $y$로 써 보세요.
:::

:::hint
(3)은 $f \circ g$가 $J$ 위의 항등함수라는 것에 연쇄 법칙을 쓰면 나옵니다.
:::

:::proof
"역함수 (n)"은 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (n), "실함수 (n)"은 [[real-valued-function]]의 (n), "극한 (n)"은 [[limit-of-a-function]]의 (n), "연속 (n)"은 [[continuous-function]]의 (n)이고, (K…)는 [[real-number-arithmetic]]의 번호이다.

**1의 증명.** $f$가 순단조이고 $f : I \to J$가 전사이므로 역함수 (2)에 의해 $J = f(I)$이고, $g$는 $f : I \to f(I)$의 역함수이며 단사인 $f$에 대해 $g(y) = x$인 것은 정확히 $f(x) = y$일 때이다. $I$가 구간이므로 역함수 (3)에 의해 $g : J \to I$는 연속함수이다. $f(x_0) = y_0$이므로 $g(y_0) = x_0$이다.

*$Q$의 정의.* $x \in I$이고 $x \ne x_0$이면 $f$가 단사이므로(역함수 (2)) $f(x) \ne f(x_0)$이고, (K12)의 (v)에 의해 $f(x) - f(x_0) \ne 0$이다. $f'(x_0) \ne 0$이다. 따라서 $x \ne x_0$이면 $Q(x) = (x - x_0)\bigl(f(x) - f(x_0)\bigr)^{-1}$, $x = x_0$이면 $Q(x_0) = f'(x_0)^{-1}$로 정한 함수 $Q : I \to \mathbb{R}$가 있다(실함수 (1); $I$의 각 원소는 두 경우 가운데 정확히 하나에 든다).

*$Q$는 $x_0$에서 연속이다.* $q = q^f_{x_0} : I - \{x_0\} \to \mathbb{R}$를 $f$의 $x_0$에서의 차분몫이라 하자. [[derivative]]의 정의에 의해 $x_0$은 $I - \{x_0\}$의 집적점이고 $q$는 $x_0$에서 $f'(x_0)$으로 수렴한다. $x \in I - \{x_0\}$이면 $x - x_0 \ne 0$이므로 $(x - x_0)^{-1}$이 있고, 이것은 $0$이 아니다($(x - x_0)^{-1} = 0$이면 (K9)에 의해 $1 = (x - x_0)(x - x_0)^{-1} = 0$이 되어 (K4)에 어긋난다). (K12)의 (vi)에 의해 $q(x) = \bigl(f(x) - f(x_0)\bigr)(x - x_0)^{-1} \ne 0$이다. 그러므로 [[limit-laws-for-functions|함수의 극한의 사칙연산]]의 (8)을 $S = I - \{x_0\}$, $Z = S$에 쓰면 $1/q : I - \{x_0\} \to \mathbb{R}$는 $x_0$에서 $f'(x_0)^{-1}$로 수렴한다. 한편 $x \in I - \{x_0\}$에서 $u = f(x) - f(x_0)$, $v = x - x_0$으로 두면 $Q(x) = vu^{-1}$, $q(x) = uv^{-1}$이고, (K1), (K2), (K4)와 역수의 정의에 의해 $Q(x)\,q(x) = v\,(u^{-1}u)\,v^{-1} = vv^{-1} = 1$이므로, (K8)의 (iii)(역수의 유일성)과 (K1)에 의해 $Q(x) = q(x)^{-1} = (1/q)(x)$이다. 실함수 (2), (6)에 의해 $Q|_{I - \{x_0\}} = 1/q$이므로, 극한 (6)에 의해 $Q$는 $x_0$에서 $f'(x_0)^{-1} = Q(x_0)$으로 수렴한다. $x_0$은 $I$의 집적점이므로([[cluster-point]]의 (6)) 연속 (3)에 의해 $Q$는 $x_0$에서 연속이다.

*$Q \circ g$.* $g : J \to I$는 $y_0$에서 연속이고 $Q : I \to \mathbb{R}$는 $g(y_0) = x_0$에서 연속이므로, [[composition-of-continuous-functions|연속함수의 합성]]의 (1)에 의해 $Q \circ g : J \to \mathbb{R}$는 $y_0$에서 연속이다. $J$가 구간이므로 $y_0$은 $J$의 집적점이고([[cluster-point]]의 (6)), 연속 (3)에 의해 $Q \circ g$는 $y_0$에서 $Q(g(y_0)) = Q(x_0) = f'(x_0)^{-1}$로 수렴한다. 극한 (6)에 의해 제한 $(Q \circ g)|_{J - \{y_0\}}$도 $y_0$에서 $f'(x_0)^{-1}$로 수렴한다.

*$Q \circ g$는 $y_0$ 밖에서 $g$의 차분몫이다.* $y \in J - \{y_0\}$이고 $x = g(y)$라 하자. $f(x) = y \ne y_0 = f(x_0)$이므로 $x \ne x_0$이다. 따라서 $Q$의 정의와 $g(y_0) = x_0$에 의해
$$
\begin{aligned}
Q(g(y)) &= \bigl(g(y) - x_0\bigr) \\
&\quad \cdot \bigl(f(g(y)) - f(x_0)\bigr)^{-1} \\
&= \bigl(g(y) - g(y_0)\bigr)(y - y_0)^{-1} \\
&= q^g_{y_0}(y)
\end{aligned}
$$
이다. 여기서 $q^g_{y_0} : J - \{y_0\} \to \mathbb{R}$는 $g$의 $y_0$에서의 차분몫이다. 실함수 (2), (6)에 의해 $(Q \circ g)|_{J - \{y_0\}} = q^g_{y_0}$이므로 $q^g_{y_0}$은 $y_0$에서 $f'(x_0)^{-1}$로 수렴한다. [[derivative]]의 정의에 의해 $g$는 $y_0$에서 미분가능하고 $g'(y_0) = f'(x_0)^{-1} = f'(g(y_0))^{-1}$이다.

**2의 증명.** $y \in J$라 하고 $x_0 = g(y)$로 두면 $x_0 \in I$이고 $f(x_0) = y$이다. 가정에 의해 $f$는 $x_0$에서 미분가능하고 $f'(x_0) \ne 0$이므로, 1에 의해 $g$는 $y$에서 미분가능하고 $g'(y) = f'(g(y))^{-1}$이다. $y$는 $J$의 아무 원소였으므로 $g$는 미분가능한 함수이다. $g : J \to I$와 $f' : I \to \mathbb{R}$의 합성 $f' \circ g : J \to \mathbb{R}$는 모든 $y \in J$에서 $(f' \circ g)(y) = f'(g(y)) \ne 0$이므로, 실함수 (5)에 의해 $1/(f' \circ g)$의 정의역은 $J$이고 그 값은 $f'(g(y))^{-1} = g'(y)$이다. 실함수 (2)에 의해 $g' = 1/(f' \circ g)$이다.

$f$가 연속미분가능하다고 하자. 그러면 $f'$은 연속함수이고, 역함수 (3)에 의해 $g$는 연속함수이므로, 연속함수의 합성의 (2)에 의해 $f' \circ g$는 연속함수이다. [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $1/(f' \circ g) = g'$은 연속함수이다. 따라서 $g$는 연속미분가능하다.

**3의 증명.** $g$가 $y_0$에서 미분가능하다고 하자. $g : J \to I$는 $y_0$에서 미분가능하고 $f$는 $I$ 위의 실함수로서 $g(y_0) = x_0$에서 미분가능하므로, [[chain-rule|연쇄 법칙]]의 (1)에 의해 $f \circ g : J \to \mathbb{R}$는 $y_0$에서 미분가능하고 $(f \circ g)'(y_0) = f'(x_0)\,g'(y_0) = 0 \cdot g'(y_0) = 0$이다((K9)). 한편 모든 $y \in J$에서 $f(g(y)) = y$이므로 실함수 (2), (3)에 의해 $f \circ g$는 $J$ 위의 항등함수 $i_J$이고, [[derivative]]의 (1)에 의해 $(f \circ g)'(y_0) = i_J'(y_0) = 1$이다. 그러면 $1 = 0$이 되어 (K4)에 어긋난다. 따라서 $g$는 $y_0$에서 미분가능하지 않다.

**4의 증명.** $f'$은 연속함수이므로 $x_0$에서 연속이다. $f'(x_0) \ne 0$이므로 [[real-order-axioms]]의 (W1)에 의해 $0 < f'(x_0)$이거나 $f'(x_0) < 0$이다. $0 < f'(x_0)$이면 연속 (7)을 $a = 0$으로 써서, 양의 실수 $\delta$가 있어 $x \in I$이고 $|x - x_0| < \delta$인 모든 $x$에서 $0 < f'(x)$이다. $f'(x_0) < 0$이면 연속 (7)을 $b = 0$으로 써서, 양의 실수 $\delta$가 있어 같은 꼴로 $f'(x) < 0$이다. 이 $\delta$로 $A$를 정한다. 그러면 $A \subseteq I$이고, $A$의 모든 원소에서 $f'$의 부호는 진술대로이다.

*$A$는 $x_0$을 원소로 갖는 구간이다.* $|x_0 - x_0| = 0 < \delta$이므로([[absolute-value]]의 (2)) $x_0 \in A$이다. $x_0$은 $I$의 집적점이므로([[cluster-point]]의 (6)) $x \ne x_0$이고 $|x - x_0| < \delta$인 $x \in I$가 있고, 이 $x$는 $A$의 원소이다. 따라서 $A$는 서로 다른 두 원소를 갖는다. $x$, $z$가 $A$의 원소이고 $x < y < z$라 하자. $I$가 구간이므로 $y \in I$이다. [[absolute-value]]의 (8)에 의해 $x_0 - \delta < x$이고 $z < x_0 + \delta$이므로 $x_0 - \delta < y < x_0 + \delta$이고, 다시 절댓값의 (8)에 의해 $|y - x_0| < \delta$, 곧 $y \in A$이다. 따라서 $A$는 [[interval]]의 두 조건을 만족한다.

*$f|_A$와 그 역함수.* [[continuously-differentiable|연속미분가능한 함수]]의 (2)에 의해 $f|_A : A \to \mathbb{R}$는 연속미분가능하고 $(f|_A)' = f'|_A$이다. 따라서 $A$의 모든 원소에서 $(f|_A)'(x) = f'(x)$는 모두 양수이거나 모두 음수이고, [[derivative-and-monotonicity|도함수와 증가·감소]]의 (4)에 의해 $f|_A$는 순증가이거나 순감소, 곧 순단조이다. 연속미분가능한 함수의 (1)에 의해 $f|_A$는 연속함수이므로, 역함수 (4)에 의해 $f|_A(A)$는 구간이다. 실함수 (6)에 의해 $A$의 모든 원소에서 $f|_A(x) = f(x)$이므로 $f|_A(A) = f(A) = B$이다. 역함수 (2)에 의해 $f|_A : A \to B$는 순단조인 전사이고 역함수 $h : B \to A$를 갖는다. $A$와 $B$는 구간이고, $f|_A$는 연속미분가능하며 모든 $x \in A$에서 $(f|_A)'(x) \ne 0$이므로, 2를 $f|_A : A \to B$에 쓰면 $h$는 연속미분가능하고 모든 $y \in B$에서 $h'(y) = (f|_A)'(h(y))^{-1} = f'(h(y))^{-1}$이다($h(y) \in A$). $\blacksquare$
:::

## 예시와 반례

:::example[제곱근 함수의 도함수]
$T = \{x \in \mathbb{R} : 0 \le x\}$로 두면 $T$는 구간이고([[interval]]의 (2)), $f(x) = x^2$으로 정한 $f : T \to T$는 순증가인 전사입니다. $0 \le x < x'$이면 [[power-of-a-real-number]]의 (6)의 (ii)에 의해 $x^2 < x'^2$이고, $y \in T$이면 [[square-root-exists]]의 (1)에 의해 $\sqrt{y} \in T$이며 $f(\sqrt{y}) = y$이기 때문입니다(거듭제곱의 (1)과 (6)의 (i)로 $f$의 값은 $T$에 속합니다). 역함수 $g : T \to T$는 $g(y) = x$인 것이 정확히 $x \in T$이고 $x^2 = y$일 때이므로, 제곱근의 (1)의 유일성에 의해 $g(y) = \sqrt{y}$입니다.

$f$는 $p_2$를 $T$로 제한한 것이므로 [[derivative-of-power|거듭제곱 함수의 미분]]의 (2)에 의해 미분가능하고 $f'(x) = 2x$입니다. $0 < y$이면 제곱근의 (1)에 의해 $0 < \sqrt{y}$이므로 $f'(\sqrt{y}) = 2\sqrt{y} \ne 0$이고, (1)에 의해
$$
g'(y) = \bigl(2\sqrt{y}\bigr)^{-1}
$$
입니다. 예를 들어 $\sqrt{4} = 2$이므로 $g'(4) = 4^{-1} = 1/4$입니다. $T_+ = \{x \in \mathbb{R} : 0 < x\}$로 제한해도 $f|_{T_+} : T_+ \to T_+$는 순증가인 전사이고, [[continuously-differentiable|연속미분가능한 함수]]의 (4)에 의해 연속미분가능하며 도함수 $2x$는 $T_+$에서 $0$이 아니므로, (2)에 의해 $T_+$ 위의 제곱근 함수는 연속미분가능합니다.

$g'(4)$를 차분몫으로 직접 확인해 봅니다. $y \in T$이고 $y \ne 4$이면 $\sqrt{y} \ne 2$이고 $y - 4 = (\sqrt{y} - 2)(\sqrt{y} + 2)$이므로 $g$의 차분몫은 $(\sqrt{y} - 2)(y - 4)^{-1} = (\sqrt{y} + 2)^{-1}$입니다. $s(y) = (\sqrt{y} + 2)^{-1}$로 정한 $s : T \to \mathbb{R}$는 [[power-function-is-continuous]]의 (2), 상수함수의 연속([[continuous-function]]의 (4))과 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이고($2 \le \sqrt{y} + 2$이므로 분모는 $0$이 아닙니다), $4$는 $T$의 집적점이므로([[cluster-point]]의 (6)) [[continuous-function]]의 (3)에 의해 $s$는 $4$에서 $s(4) = 4^{-1}$로 수렴합니다. 차분몫은 $s$를 $T - \{4\}$로 제한한 것이므로 [[limit-of-a-function]]의 (6)에 의해 같은 값 $1/4$로 수렴합니다.
:::

:::example[자기 자신이 역함수인 $x^{-1}$]
$T_+ = \{x \in \mathbb{R} : 0 < x\}$로 두고 $r(x) = x^{-1}$로 정한 $r : T_+ \to T_+$를 생각합니다. [[order-properties-of-reals]]의 (6)의 (i), (ii)에 의해 $r$의 값은 양수이고, $0 < x < x'$이면 $x'^{-1} < x^{-1}$이므로 $r$은 순감소입니다. $y \in T_+$이면 $y \cdot y^{-1} = 1$이므로 [[real-number-arithmetic]]의 (K8)의 (iii)과 (K1)에 의해 $y$는 $y^{-1}$의 역수, 곧 $(y^{-1})^{-1} = y$이고 $r(y^{-1}) = y$입니다. 따라서 $r : T_+ \to T_+$는 전사이고, 역함수 $g$에서 $g(y) = x$인 것은 정확히 $x^{-1} = y$일 때, 곧 $x = r(y)$일 때이므로 $g = r$입니다.

$r$은 $T_+$ 위의 항등함수 $i$의 역수 $1/i$이므로 [[derivative-rules|미분의 규칙]]의 (5)와 [[derivative]]의 (1)에 의해 미분가능하고 $r'(x) = -(x^2)^{-1}$이며, 이것은 $0$이 아닙니다. (2)의 공식을 계산해 봅니다. [[power-of-a-real-number]]의 (3)을 $y^{-1}$에 쓰고 앞 문단의 $(y^{-1})^{-1} = y$를 쓰면 $\bigl((y^{-1})^2\bigr)^{-1} = y^2$이므로 $r'(g(y)) = r'(y^{-1}) = -y^2$이고,
$$
\begin{aligned}
g'(y) &= r'(g(y))^{-1} \\
&= (-y^2)^{-1} \\
&= -(y^2)^{-1}
\end{aligned}
$$
입니다. 마지막 등호는 $(-y^2)\bigl(-(y^2)^{-1}\bigr) = y^2 (y^2)^{-1} = 1$((K12)의 (iii))과 (K8)의 (iii)에서 나옵니다. 이것은 $r'(y)$와 같으므로 $g = r$과 맞습니다. 예를 들어 $y = 2$이면 $r'(1/2) = -(1/4)^{-1} = -4$이고 $g'(2) = (-4)^{-1} = -1/4 = r'(2)$입니다. 순감소인 함수에서도 (1), (2)가 그대로 성립합니다.
:::

:::counterexample[$0$에서의 제곱근 함수]
첫째 예시의 $f(x) = x^2$, $f : T \to T$에서 $x_0 = 0$은 $T$의 가장 작은 원소이고 $f'(0) = 2 \cdot 0 = 0$입니다. (3)에 의해 역함수 $g(y) = \sqrt{y}$는 $y_0 = 0$에서 미분가능하지 않습니다. (1)의 가정 $f'(x_0) \ne 0$을 빼면 결론이 깨지는 예입니다. 실제로 $0 < y$에서 $g$의 차분몫은 $\sqrt{y}\,y^{-1} = (\sqrt{y})^{-1}$이고, $y$가 $0$에 가까워질수록 한없이 커집니다.
:::

:::remark[역함수의 정의역이 구간이라는 가정]
[[derivative]]의 미분계수는 구간 위의 함수에만 정의되므로, $g$의 미분계수를 말하려면 $g$의 정의역 $J = f(I)$가 구간이어야 합니다. [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (4)에 의해 $f$가 연속함수이면 $f(I)$는 구간이므로, 구간 $I$ 위의 연속인 순단조함수 $f : I \to \mathbb{R}$는 공역을 $f(I)$로 선언하면 언제나 (1)–(3)의 가정을 만족합니다. (1)은 $f$가 $x_0$ 밖의 점에서 연속이라는 것을 가정하지 않으므로, $J$가 구간이라는 것을 따로 가정합니다.
:::

## 확인 질문

:::check[$f(x) = x^2 + 2x$로 정한 $f : [0, 1] \to \mathbb{R}$에서, 공역을 $f([0, 1])$로 둔 역함수 $g$의 $3$에서의 미분계수는?]
$1/4$입니다. [[derivative-of-power|거듭제곱 함수의 미분]]의 (2), [[derivative-rules|미분의 규칙]]의 (6), [[derivative]]의 (1)에 의해 $f$는 미분가능하고 $f'(x) = 2x + 2$입니다. $0 \le x$이면 $0 < 2 \le 2x + 2$이므로 [[derivative-and-monotonicity|도함수와 증가·감소]]의 (4)에 의해 $f$는 순증가이고, [[differentiable-implies-continuous|미분가능하면 연속이다]]의 (2)에 의해 연속함수이므로 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (4)에 의해 $J = f([0, 1])$는 구간입니다. $f(1) = 3$이므로 (1)을 $x_0 = 1$에 쓰면 $g'(3) = f'(1)^{-1} = 4^{-1}$입니다. $x_0 = 1$은 $[0, 1]$의 오른쪽 끝점이고, $y_0 = 3$은 $J$의 가장 큰 원소입니다.
:::

:::check[$T_- = \{x \in \mathbb{R} : x \le 0\}$ 위에서 $f(x) = x^2$으로 정한 $f : T_- \to T$의 역함수 $g$에 대해 $g'(9)$는? ($T = \{x \in \mathbb{R} : 0 \le x\}$)]
$-1/6$입니다. $x < x' \le 0$이면 $0 \le -x' < -x$이므로 [[power-of-a-real-number]]의 (6)의 (ii)에 의해 $(-x')^2 < (-x)^2$이고, (K12)의 (iii)에 의해 $(-a)^2 = a^2$이므로 $x'^2 < x^2$입니다. 곧 $f$는 순감소입니다. $y \in T$이면 $-\sqrt{y} \in T_-$이고 $f(-\sqrt{y}) = y$이므로 $f : T_- \to T$는 전사이고, $T_-$와 $T$는 [[interval]]의 (2)에 의해 구간입니다. $(-3)^2 = 9$이므로 $g(9) = -3$이고, [[derivative-of-power|거듭제곱 함수의 미분]]의 (2)에 의해 $f'(-3) = 2 \cdot (-3) = -6 \ne 0$이므로 (1)에 의해 $g'(9) = (-6)^{-1} = -1/6$입니다. $g$는 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (2)에 의해 순감소이고, 미분계수 $-1/6$도 음수입니다.
:::
