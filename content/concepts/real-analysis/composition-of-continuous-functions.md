---
title: 연속함수의 합성
title_en: Composition of Continuous Functions
aliases: [합성함수의 연속, continuity of composition, composition of continuous functions]
kind: proposition
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: "A, B 가 ℝ 의 부분집합이고 g : A → B 가 c 에서, f : B → ℝ 가 g(c) 에서 연속이면 합성 f ∘ g : A → ℝ 는 c 에서 연속이다. 연속함수끼리의 합성은 연속함수이다."
requires: [subset, function, function-composition, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, real-valued-function, continuous-function, continuity-of-sum-and-product, power-function-is-continuous]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.2.2절 Proposition 3.2.7 과 그 증명, Example 3.2.8 (p.125)
    checked: original
    note: "출처의 Proposition 3.2.7(p.125)은 A, B ⊂ ℝ, f : B → ℝ, g : A → B 이고 g 가 c ∈ A 에서, f 가 g(c) 에서 연속이면 f ∘ g : A → ℝ 가 c 에서 연속이라는 것이고, 이 항목의 (1)이다. 출처는 c 로 수렴하는 A 의 수열을 잡아 Proposition 3.2.2 (iii)의 두 방향으로 증명한다. 그 가운데 수열에서 연속을 끌어내는 방향의 증명은 각 n 마다 점을 잡는다(p.123). 이 항목은 ε–δ 로 직접 증명한다. g 를 A 에서 ℝ 로의 함수로도 보는 것과 g 의 값이 f 의 정의역에 들 때 합성을 정하는 것은 function 과 function-composition 의 진술을 쓴다. 출처의 Example 3.2.8(p.125)은 삼각함수를 써서 합성의 연속을 보이고, 정의역을 치역에 맞추어 보는 같은 발상을 쓴다. 예시 '제곱근과 다항식 꼴의 합성', 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 ε–δ 로 직접 증명. 출처 쪽수와 메모, 기호 |f| 와 'c 가까이에서'의 구별을 고침"
added: 2026-11-17
---

:::statement
함수, 공역과 합성은 [[function|함수]]와 [[function-composition]]의 것이고, 연속은 [[continuous-function]]의 것이다. $A$, $B$를 $\mathbb{R}$의 부분집합이라 하자. $B \subseteq \mathbb{R}$이므로 [[function]]의 진술("공역은 선언하기 나름이다")에 의해 함수 $g : A \to B$는 $A$에서 $\mathbb{R}$로의 함수, 곧 $A$ 위의 실함수이기도 하고, $g$의 연속은 이 실함수로서의 연속을 뜻한다.

1. (한 점에서) $g : A \to B$가 $c \in A$에서 연속이고 $f : B \to \mathbb{R}$가 $g(c)$에서 연속이면, 합성 $f \circ g : A \to \mathbb{R}$는 $c$에서 연속이다.
2. (연속함수) $g : A \to B$와 $f : B \to \mathbb{R}$가 연속함수이면 $f \circ g : A \to \mathbb{R}$는 연속함수이다.
3. (공역을 맞추기) $g$가 $A$ 위의 실함수이고 모든 $x \in A$에서 $g(x) \in B$이면, [[function-composition]]의 진술에 의해 $g$를 $g : A \to B$로 선언해 $f \circ g$를 정할 수 있고, 이때 (1), (2)가 그대로 성립한다.
:::

:::english
Functions, codomains and composition are those of the entries on functions and on composition, and continuity is that of the entry on continuous functions. Let $A$ and $B$ be subsets of $\mathbb{R}$. Since $B \subseteq \mathbb{R}$, by the entry on functions ("the codomain is a matter of declaration") a function $g : A \to B$ is also a function from $A$ to $\mathbb{R}$, that is, a real-valued function on $A$, and continuity of $g$ means continuity as this real-valued function.

1. (At a point) If $g : A \to B$ is continuous at $c \in A$ and $f : B \to \mathbb{R}$ is continuous at $g(c)$, then the composition $f \circ g : A \to \mathbb{R}$ is continuous at $c$.
2. (Continuous functions) If $g : A \to B$ and $f : B \to \mathbb{R}$ are continuous functions, then $f \circ g : A \to \mathbb{R}$ is a continuous function.
3. (Matching the codomain) If $g$ is a real-valued function on $A$ and $g(x) \in B$ for all $x \in A$, then by the entry on composition $g$ may be declared as $g : A \to B$ to define $f \circ g$, and then (1) and (2) hold as stated.
:::

## 직관

$x$를 $c$ 가까이 두면 $g(x)$가 $g(c)$ 가까이 오고, $g(c)$ 가까이 있는 점에서는 $f$의 값이 $f(g(c))$ 가까이 옵니다. 두 단계를 이으면 $f(g(x))$가 $f(g(c))$ 가까이 옵니다. 두 개의 톱니바퀴를 맞물린 장치에서 첫 바퀴를 조금 돌리면 둘째 바퀴도 조금만 돌고, 그 끝에 달린 바늘도 조금만 움직이는 것과 같습니다. 비유가 맞는 곳은 "허용 오차를 거꾸로 전달한다"는 점입니다. 바늘의 허용 오차 $\varepsilon$에서 둘째 바퀴의 허용 범위 $\delta_1$을 정하고, 그 $\delta_1$을 첫 바퀴의 허용 오차로 삼아 $\delta$를 정합니다. 맞지 않는 곳은 함수가 바퀴처럼 늘 같은 비율로 움직이지는 않는다는 점입니다.

## 증명

:::idea
$f$의 연속에서 $\varepsilon$에 대한 $\delta_1$을 얻고, $g$의 연속을 $\delta_1$을 허용 오차로 하여 써서 $\delta$를 얻는다.
:::

:::hint
$g$의 연속의 정의에서 "$\varepsilon$" 자리에 $f$의 연속이 준 양수 $\delta_1$을 넣는다.
:::

:::proof
**1의 증명.** $d = g(c)$로 두고 양의 실수 $\varepsilon$을 잡는다. $f$가 $d$에서 연속이므로, $y \in B$이고 $|y - d| < \delta_1$인 모든 $y$에서 $|f(y) - f(d)| < \varepsilon$인 양수 $\delta_1$이 있다. $g$가 $c$에서 연속이므로 연속의 정의를 양수 $\delta_1$에 쓰면, $x \in A$이고 $|x - c| < \delta$인 모든 $x$에서 $|g(x) - g(c)| < \delta_1$인 양수 $\delta$가 있다.

$x \in A$이고 $|x - c| < \delta$라 하자. $y = g(x)$로 두면 $g : A \to B$이므로 $y \in B$이고 $|y - d| < \delta_1$이다. 따라서 $|f(g(x)) - f(g(c))| = |f(y) - f(d)| < \varepsilon$이다. [[function-composition]]의 진술에 의해 $(f \circ g)(x) = f(g(x))$이고 $(f \circ g)(c) = f(g(c))$이므로 $|(f \circ g)(x) - (f \circ g)(c)| < \varepsilon$이다. 따라서 $f \circ g$는 $c$에서 연속이다.

**2의 증명.** $c \in A$이면 $g$는 $c$에서 연속이고 $g(c) \in B$이므로 $f$는 $g(c)$에서 연속이다. (1)에 의해 $f \circ g$는 $c$에서 연속이고, $c$는 $A$의 임의의 원소였다.

**3의 증명.** [[function]]의 진술에 의해 같은 집합 $g$는 $A$에서 $B$로의 함수이기도 하고, [[function-composition]]의 진술에 의해 이렇게 선언해 정한 $f \circ g$는 선언한 공역과 무관하게 같은 집합이다. 연속의 정의는 정의역 $A$와 값 $g(x)$만 쓰므로 $g$를 어느 공역으로 선언하든 $g$가 $c$에서 연속인지는 같다. 따라서 (1), (2)를 그대로 쓸 수 있다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱근과 다항식 꼴의 합성]
$r(x) = \sqrt{x x + 1}$로 정한 $r : \mathbb{R} \to \mathbb{R}$는 연속함수입니다. $g(x) = x x + 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 [[power-function-is-continuous]]의 (1)과 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다($g = p_2 + u$, $u$는 값이 $1$인 상수함수). 모든 실수 $x$에서 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le x x$이므로 $0 \le x x + 1$이고, $g$의 값은 모두 $T = \{x \in \mathbb{R} : 0 \le x\}$에 속합니다. (3)에 의해 $g$를 $g : \mathbb{R} \to T$로 선언하고 [[power-function-is-continuous]]의 (2)의 연속함수 $q : T \to \mathbb{R}$와 합성하면 $r = q \circ g$이고, (2)에 의해 $r$는 연속함수입니다.
:::

:::counterexample[$f$가 $g(c)$에서 불연속이어도 합성은 연속일 수 있다]
$H(y) = 0$ ($y < 0$일 때), $H(y) = 1$ ($0 \le y$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$는 $0$에서 불연속입니다(양수 $\delta$마다 $y = -2^{-1}\delta$에서 $|H(y) - H(0)| = 1$이므로 [[continuous-function]]의 (1)이 $\varepsilon = 2^{-1}$로 성립합니다). $g(x) = x x$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 $g(0) = 0$입니다. 그러나 모든 $x$에서 $0 \le x x$이므로 $(H \circ g)(x) = 1$이고, $H \circ g$는 상수함수여서 $0$에서 연속입니다([[continuous-function]]의 (4)). (1)의 가정은 합성이 연속이기 위한 충분조건일 뿐 필요조건은 아닙니다.
:::

## 확인 질문

:::check[$x$에서의 값이 $|x x - 4|$인 함수 $\mathbb{R} \to \mathbb{R}$는 연속함수인가?]
그렇습니다. 그 함수는 $|p_2 - 4u|$($u$는 값이 $1$인 상수함수)이고, [[power-function-is-continuous]]의 (1)과 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. 합성으로 보아도 됩니다. $\mathbb{R}$ 위의 절댓값 함수 $|i_{\mathbb{R}}|$는 같은 항목의 (3)에 의해 연속함수이고, 그 함수와 $p_2 - 4u$의 합성은 (2)에 의해 연속함수입니다.
:::

:::check[$q$를 $0$ 이상인 실수 위의 제곱근 함수, $g(x) = x - 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$라 하면 $q \circ g$를 정할 수 있는가?]
정할 수 없습니다. $g(0) = -1$은 $q$의 정의역에 속하지 않으므로, [[function-composition]]의 진술에 의해 $q \circ g$는 정의하지 않습니다. $g$를 $\{x \in \mathbb{R} : 1 \le x\}$로 제한하면 값이 모두 $0$ 이상이므로 $q \circ (g|_{\{x \in \mathbb{R} : 1 \le x\}})$를 정할 수 있고, (3)과 (2)에 의해 연속함수입니다([[continuous-function]]의 (5)).
:::
