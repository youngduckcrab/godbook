---
title: 가측함수
title_en: Measurable Function
aliases: [가측 함수, 보렐 가측함수, 보렐 가측, measurable function, Borel measurable function, measurable map]
kind: definition
field: measure-theory
msc: ["28A20"]
level: undergrad
summary: 가측공간 사이의 함수가 가측집합의 역상을 가측집합으로 보낼 때 가측이라 하고, 실숫값 함수의 가측성을 반직선의 역상 네 꼴로 판정하는 것, 합성과 연속함수와의 합성, 상수함수와 지시함수, 두 가측함수를 비교한 집합과 최대·최소, 가측집합 위로 이어 붙인 함수를 증명한다.
requires: [set, subset, set-operations, power-set, function, function-composition, image-and-preimage, preimage-and-set-operations, recursion-theorem, family-of-sets, sequence-of-sets, indicator-function, sigma-algebra, generated-sigma-algebra, borel-sigma-algebra-on-reals, continuous-function, continuity-of-sum-and-product, real-valued-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, positive-and-negative-parts, even-and-odd, interval, rationals-are-dense, rationals-are-countable, rational-and-irrational-numbers, archimedean-property]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.1절 Definition and examples, Definition 3.1–3.2 와 Theorem 3.3 (p.59–60), Proposition 3.4 (p.60–61), Example 3.5–3.6 (p.61), Example 3.9 와 Proposition 3.10 (p.62), Proposition 3.13 (p.63–64), Proposition 3.17 과 그 앞 문단 (p.65–66); 3.5절 Exercise 3.2, 3.6–3.9 (p.82–83), Exercise 3.10–3.11, 3.14 (p.83)
    checked: original
    note: "출처 Definition 3.2(p.59)는 가측공간 (X, S), (Y, T) 사이의 함수가 모든 B ∈ T 에서 f⁻¹(B) ∈ S 일 때 S 와 T 에 대하여 가측이라 하고, Y = R, T = B(R) 이면 'S-measurable', X = Y = R 이고 S = T = B(R) 이면 'Borel measurable'이라 부른다(p.60). 이 항목의 정의와 같다. 출처 Theorem 3.3(p.60)은 σ(C) = T 이고 f⁻¹(C) ⊂ S 이면 f 가 가측이라는 것을 Proposition 2.25 의 σ(f⁻¹(C)) = f⁻¹(σ(C)) 로 증명한다. 이 항목의 (1)은 같은 진술을 sigma-algebra (7)의 집합족 {B : f⁻¹(B) ∈ 𝓜} 이 σ-대수라는 것으로 증명한다. 출처 Proposition 3.4(p.60–61)는 (c, +∞), (−∞, c], (−∞, c), [c, +∞) 의 역상 네 꼴의 동치를 (b)⇒(c)⇒(d)⇒(e)⇒(a) 의 순환으로 증명하고 마지막 단계에서 [c, +∞) 꼴이 B(R) 를 생성한다는 것을 Exercise 2.27 로 돌린다. 이 항목의 (2)는 borel-sigma-algebra-on-reals (3)의 네 생성 집합족을 써서 각 꼴에서 바로 (a)로 간다. 출처 Example 3.5–3.6(p.61)은 항등함수와 상수함수가 가측이라고 적고, Example 3.9(p.62)는 연속함수 ℝ → ℝ 가 보렐 가측이라는 것을 반연속함수(Example 3.7–3.8)를 거쳐 증명한다. 이 항목의 (4)의 (iii)은 borel-sigma-algebra-on-reals (5)로 증명한다. Exercise 3.11 (c)(p.83)는 위상공간 사이의 연속함수가 보렐 σ-대수들에 대하여 가측이라는 것을 증명하라고 한다. 출처 Proposition 3.10(p.62)은 이 항목의 (4)의 (ii)와 같다. 출처 Proposition 3.13(p.63–64)은 이 항목의 (6)의 지시함수 쪽과 같고 증명도 {χ_A > c} 가 ∅, A, X 가운데 하나라는 같은 경로이다. 출처는 p.65 에서 f⁺ = max{f, 0}, f⁻ = max{−f, 0} 을 정의하고 f = f⁺ − f⁻, |f| = f⁺ + f⁻ 를 Exercise 3.2 로 돌리며, Proposition 3.17(p.65–66)에서 f⁺ 의 가측성을 c ≥ 0, c < 0 의 두 경우로 증명하고 f⁻ 를 Exercise 3.2 로 돌린다. 이 항목의 (5)는 두 함수를 연속함수 t ↦ max{t, 0}, t ↦ max{−t, 0} 과의 합성으로 다룬다. 출처 Exercise 3.10(p.83)은 이 항목의 (8)과 같은 진술이다. 출처 Exercise 3.14(p.83)는 f(x) + g(x) < c 를 유리수 r_x, s_x 로 바꾸어 f + g 의 가측성을 증명하라고 한다. 이 항목의 (7)의 {f < g} 는 유리수의 열거로 같은 발상의 합집합을 쓴다. '가측함수'라는 이름은 출처의 measurable function 을 옮긴 것이다. 예시 '짝을 이룬 두 수에서 같은 값을 갖는 함수'는 출처 Exercise 3.9(p.83)가 유한 분할이 생성하는 σ-대수에 대한 가측함수는 분할의 각 조각에서 상수라는 것을 증명하라고 하는 것과 같은 발상이다(이 예시의 분할은 가산 개의 조각이다). 반례 '절댓값은 가측이지만 함수는 가측이 아닌 예'는 출처 Exercise 3.8(p.82–83)이 X = {−1, 0, 1}, S = {∅, {0}, {−1, 1}, X} 에서 |id| 와 id² 는 가측이고 id 는 가측이 아니라는 것을 보이라고 하는 것과 같은 발상이고, 그 반례의 σ-대수 {∅, X} 는 출처 Exercise 3.7(p.82)이 그 σ-대수에 대한 가측함수가 상수함수뿐이라는 것을 보이라고 하는 것과 같은 대상이다. 출처 Exercise 3.2 의 3(p.82)은 f⁺ 와 f⁻ 가 가측이면 f 가 가측인지 묻는다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(표준 근사열의 단조성과 오차의 f(x) < k 조건, 출처 Proposition 3.15 에 대한 메모를 원문 대조). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간, σ-대수, 가측집합, (σ1)–(σ3)은 [[sigma-algebra|σ-대수와 가측공간]]의 것이고, 생성한 σ-대수 $\sigma(\mathcal{C})$는 [[generated-sigma-algebra|생성한 σ-대수]]의 것이며, $\mathbb{R}$의 보렐 σ-대수 $\mathscr{B}(\mathbb{R})$와 보렐 집합은 [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 것이다. 함수, 합성, 역상은 [[function]], [[function-composition|함수의 합성]], [[image-and-preimage|상과 역상]]의 것이고, 지시함수 $\chi_A$는 [[indicator-function]]의 것이다. 두 실수의 최대·최소와 절댓값은 [[absolute-value]]의 것이고, 실수의 양의 부분과 음의 부분은 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 것이다. 아래에서 $X$는 집합이다.

**실숫값 함수의 연산과 집합의 기호.** 함수 $f : X \to \mathbb{R}$를 $X$ 위의 **실숫값 함수**라 한다. $f$, $g$가 $X$ 위의 실숫값 함수이고 $c$가 실수이면, $X$의 원소 $x$마다 값이 식으로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $x$에서의 값이 각각 $f(x) + g(x)$, $f(x) - g(x)$, $f(x)\,g(x)$, $c\,f(x)$, $c + f(x)$, $|f(x)|$, $\max\{f(x), g(x)\}$, $\min\{f(x), g(x)\}$, $\max\{f(x), 0\}$, $\max\{-f(x), 0\}$인 $X$ 위의 실숫값 함수가 하나씩 있다. 이것들을 차례로 $f + g$, $f - g$, $fg$, $cf$, $c + f$, $|f|$, $\max\{f, g\}$, $\min\{f, g\}$, $f^+$, $f^-$로 쓰고, $f^+$를 $f$의 **양의 부분**, $f^-$를 $f$의 **음의 부분**이라 한다. 모든 $x$에서 값이 $c$인 함수를 값이 $c$인 **상수함수**라 하고 $c$로도 쓴다. 실수 $c$에 대하여
$$
\begin{aligned}
\{f > c\} &= \{x \in X : c < f(x)\}, \\
\{f \ge c\} &= \{x \in X : c \le f(x)\}, \\
\{f < c\} &= \{x \in X : f(x) < c\}, \\
\{f \le c\} &= \{x \in X : f(x) \le c\}
\end{aligned}
$$
로 쓰고, $\{f = c\}$, $\{f \ne c\}$, $\{f < g\}$, $\{f \le g\}$, $\{f = g\}$, $\{f \ne g\}$도 같은 방식으로 조건으로 정한 $X$의 부분집합을 뜻한다.

**가측함수.** $(X, \mathcal{M})$과 $(Y, \mathcal{N})$이 가측공간이고 $f : X \to Y$가 함수라 하자. $f$가 **$\mathcal{M}$과 $\mathcal{N}$에 대하여 가측**(measurable)인 것은 정확히 $\mathcal{N}$의 모든 원소 $B$에서 $f^{-1}(B) \in \mathcal{M}$일 때이다. $Y = \mathbb{R}$이고 $\mathcal{N} = \mathscr{B}(\mathbb{R})$일 때, 곧 모든 보렐 집합 $B$에서 $f^{-1}(B) \in \mathcal{M}$일 때 $f : X \to \mathbb{R}$를 **$\mathcal{M}$-가측**이라 하고 **$\mathcal{M}$-가측함수**라 한다. $X = \mathbb{R}$이고 $\mathcal{M} = \mathscr{B}(\mathbb{R})$일 때 $\mathscr{B}(\mathbb{R})$-가측인 함수 $\mathbb{R} \to \mathbb{R}$를 **보렐 가측**이라 한다. 가측인지는 두 σ-대수를 함께 정해야 뜻이 정해진다.

다음이 성립한다. 아래에서 $(X, \mathcal{M})$은 가측공간이고, $f$, $g$는 $X$ 위의 실숫값 함수이다.

1. (생성하는 집합족으로 판정) $(Y, \mathcal{N})$이 가측공간이고 $f : X \to Y$가 함수라 하자. $\sigma(\mathcal{C}) = \mathcal{N}$인 $Y$의 집합족 $\mathcal{C}$가 있고 $\mathcal{C}$의 모든 원소 $C$에서 $f^{-1}(C) \in \mathcal{M}$이면 $f$는 $\mathcal{M}$과 $\mathcal{N}$에 대하여 가측이다.
2. (반직선으로 판정) 다음 다섯은 서로 같은 말이다.
   - (a) $f$는 $\mathcal{M}$-가측이다.
   - (b) 모든 실수 $c$에서 $\{f > c\} \in \mathcal{M}$이다.
   - (c) 모든 실수 $c$에서 $\{f \ge c\} \in \mathcal{M}$이다.
   - (d) 모든 실수 $c$에서 $\{f < c\} \in \mathcal{M}$이다.
   - (e) 모든 실수 $c$에서 $\{f \le c\} \in \mathcal{M}$이다.
3. (보렐 집합의 역상) $f$가 $\mathcal{M}$-가측이면, $a < b$인 실수 $a$, $b$와 실수 $c$에서 $\{f = c\}$, $\{f \ne c\}$와
   $$
   \begin{gathered}
   \{x \in X : a < f(x) < b\}, \\
   \{x \in X : a \le f(x) < b\}, \\
   \{x \in X : a < f(x) \le b\}, \\
   \{x \in X : a \le f(x) \le b\}
   \end{gathered}
   $$
   는 $\mathcal{M}$의 원소이다.
4. (합성)
   - (i) $(Y, \mathcal{N})$, $(Z, \mathcal{K})$가 가측공간이고 $h : X \to Y$가 $\mathcal{M}$과 $\mathcal{N}$에 대하여, $k : Y \to Z$가 $\mathcal{N}$과 $\mathcal{K}$에 대하여 가측이면 $k \circ h$는 $\mathcal{M}$과 $\mathcal{K}$에 대하여 가측이다.
   - (ii) $\varphi : \mathbb{R} \to \mathbb{R}$가 보렐 가측이고 $f$가 $\mathcal{M}$-가측이면 $\varphi \circ f$는 $\mathcal{M}$-가측이다.
   - (iii) [[continuous-function|연속함수]] $\varphi : \mathbb{R} \to \mathbb{R}$는 보렐 가측이다. 따라서 $f$가 $\mathcal{M}$-가측이면 $\varphi \circ f$는 $\mathcal{M}$-가측이다.
5. (한 함수에서 얻는 함수) $f$가 $\mathcal{M}$-가측이고 $c$가 실수이면 $cf$, $c + f$, $|f|$, $ff$, $f^+$, $f^-$는 $\mathcal{M}$-가측이다. 또 모든 $x \in X$에서 $f^+(x) \ge 0$, $f^-(x) \ge 0$, $f(x) = f^+(x) - f^-(x)$, $|f(x)| = f^+(x) + f^-(x)$이다.
6. (상수함수와 지시함수) 상수함수는 $\mathcal{M}$-가측이다. $A \subseteq X$이면 $\chi_A$가 $\mathcal{M}$-가측인 것은 정확히 $A \in \mathcal{M}$일 때이다.
7. (두 가측함수의 비교) $f$, $g$가 $\mathcal{M}$-가측이면 $\{f < g\}$, $\{f \le g\}$, $\{f = g\}$, $\{f \ne g\}$는 $\mathcal{M}$의 원소이고, $\max\{f, g\}$와 $\min\{f, g\}$는 $\mathcal{M}$-가측이다.
8. (가측집합 위로 이어 붙이기) $f$, $g$가 $\mathcal{M}$-가측이고 $A \in \mathcal{M}$이면, $x \in A$일 때 $f(x)$, $x \notin A$일 때 $g(x)$를 값으로 하는 함수 $h : X \to \mathbb{R}$는 $\mathcal{M}$-가측이다.
:::

:::english
Measurable spaces, σ-algebras, measurable sets, and (σ1)–(σ3) are as in [[sigma-algebra]], the generated σ-algebra $\sigma(\mathcal{C})$ is as in [[generated-sigma-algebra]], and the Borel σ-algebra $\mathscr{B}(\mathbb{R})$ of $\mathbb{R}$ and Borel sets are as in [[borel-sigma-algebra-on-reals]]. Functions, composition, and preimages are as in [[function]], [[function-composition]], and [[image-and-preimage]], and the indicator function $\chi_A$ is as in [[indicator-function]]. The maximum and minimum of two real numbers and the absolute value are as in [[absolute-value]], and the positive and negative parts of a real number are as in [[positive-and-negative-parts]]. Below, $X$ is a set.

**Operations on real-valued functions and notation for sets.** A function $f : X \to \mathbb{R}$ is called a **real-valued function** on $X$. If $f$ and $g$ are real-valued functions on $X$ and $c$ is a real number, then for each element $x$ of $X$ the value is given by a formula, so by item (1) of the [[recursion-theorem]] there is exactly one real-valued function on $X$ whose value at $x$ is $f(x) + g(x)$, $f(x) - g(x)$, $f(x)\,g(x)$, $c\,f(x)$, $c + f(x)$, $|f(x)|$, $\max\{f(x), g(x)\}$, $\min\{f(x), g(x)\}$, $\max\{f(x), 0\}$, $\max\{-f(x), 0\}$, respectively. We write these as $f + g$, $f - g$, $fg$, $cf$, $c + f$, $|f|$, $\max\{f, g\}$, $\min\{f, g\}$, $f^+$, $f^-$, and call $f^+$ the **positive part** of $f$ and $f^-$ the **negative part** of $f$. The function whose value is $c$ at every $x$ is called the **constant function** with value $c$ and is also written $c$. For a real number $c$ we write
$$
\begin{aligned}
\{f > c\} &= \{x \in X : c < f(x)\}, \\
\{f \ge c\} &= \{x \in X : c \le f(x)\}, \\
\{f < c\} &= \{x \in X : f(x) < c\}, \\
\{f \le c\} &= \{x \in X : f(x) \le c\},
\end{aligned}
$$
and $\{f = c\}$, $\{f \ne c\}$, $\{f < g\}$, $\{f \le g\}$, $\{f = g\}$, $\{f \ne g\}$ likewise denote subsets of $X$ defined by a condition.

**Measurable functions.** Let $(X, \mathcal{M})$ and $(Y, \mathcal{N})$ be measurable spaces and let $f : X \to Y$ be a function. $f$ is **measurable with respect to $\mathcal{M}$ and $\mathcal{N}$** exactly when $f^{-1}(B) \in \mathcal{M}$ for every element $B$ of $\mathcal{N}$. When $Y = \mathbb{R}$ and $\mathcal{N} = \mathscr{B}(\mathbb{R})$, that is, when $f^{-1}(B) \in \mathcal{M}$ for every Borel set $B$, the function $f : X \to \mathbb{R}$ is called **$\mathcal{M}$-measurable** and an **$\mathcal{M}$-measurable function**. When $X = \mathbb{R}$ and $\mathcal{M} = \mathscr{B}(\mathbb{R})$, a $\mathscr{B}(\mathbb{R})$-measurable function $\mathbb{R} \to \mathbb{R}$ is called **Borel measurable**. Whether a function is measurable depends on both σ-algebras.

The following hold. Below, $(X, \mathcal{M})$ is a measurable space and $f$, $g$ are real-valued functions on $X$.

1. (Test by a generating family) Let $(Y, \mathcal{N})$ be a measurable space and $f : X \to Y$ a function. If there is a family $\mathcal{C}$ of subsets of $Y$ with $\sigma(\mathcal{C}) = \mathcal{N}$ and $f^{-1}(C) \in \mathcal{M}$ for every element $C$ of $\mathcal{C}$, then $f$ is measurable with respect to $\mathcal{M}$ and $\mathcal{N}$.
2. (Test by rays) The following five statements are equivalent.
   - (a) $f$ is $\mathcal{M}$-measurable.
   - (b) $\{f > c\} \in \mathcal{M}$ for every real number $c$.
   - (c) $\{f \ge c\} \in \mathcal{M}$ for every real number $c$.
   - (d) $\{f < c\} \in \mathcal{M}$ for every real number $c$.
   - (e) $\{f \le c\} \in \mathcal{M}$ for every real number $c$.
3. (Preimages of Borel sets) If $f$ is $\mathcal{M}$-measurable, then for real numbers $a < b$ and a real number $c$, the sets $\{f = c\}$, $\{f \ne c\}$ and
   $$
   \begin{gathered}
   \{x \in X : a < f(x) < b\}, \\
   \{x \in X : a \le f(x) < b\}, \\
   \{x \in X : a < f(x) \le b\}, \\
   \{x \in X : a \le f(x) \le b\}
   \end{gathered}
   $$
   are elements of $\mathcal{M}$.
4. (Composition)
   - (i) If $(Y, \mathcal{N})$ and $(Z, \mathcal{K})$ are measurable spaces, $h : X \to Y$ is measurable with respect to $\mathcal{M}$ and $\mathcal{N}$, and $k : Y \to Z$ is measurable with respect to $\mathcal{N}$ and $\mathcal{K}$, then $k \circ h$ is measurable with respect to $\mathcal{M}$ and $\mathcal{K}$.
   - (ii) If $\varphi : \mathbb{R} \to \mathbb{R}$ is Borel measurable and $f$ is $\mathcal{M}$-measurable, then $\varphi \circ f$ is $\mathcal{M}$-measurable.
   - (iii) A continuous function $\varphi : \mathbb{R} \to \mathbb{R}$ is Borel measurable. Hence if $f$ is $\mathcal{M}$-measurable, then $\varphi \circ f$ is $\mathcal{M}$-measurable.
5. (Functions obtained from one function) If $f$ is $\mathcal{M}$-measurable and $c$ is a real number, then $cf$, $c + f$, $|f|$, $ff$, $f^+$, $f^-$ are $\mathcal{M}$-measurable. Moreover, $f^+(x) \ge 0$, $f^-(x) \ge 0$, $f(x) = f^+(x) - f^-(x)$, and $|f(x)| = f^+(x) + f^-(x)$ for every $x \in X$.
6. (Constant functions and indicator functions) Constant functions are $\mathcal{M}$-measurable. If $A \subseteq X$, then $\chi_A$ is $\mathcal{M}$-measurable exactly when $A \in \mathcal{M}$.
7. (Comparing two measurable functions) If $f$ and $g$ are $\mathcal{M}$-measurable, then $\{f < g\}$, $\{f \le g\}$, $\{f = g\}$, $\{f \ne g\}$ are elements of $\mathcal{M}$, and $\max\{f, g\}$ and $\min\{f, g\}$ are $\mathcal{M}$-measurable.
8. (Gluing along a measurable set) If $f$ and $g$ are $\mathcal{M}$-measurable and $A \in \mathcal{M}$, then the function $h : X \to \mathbb{R}$ whose value is $f(x)$ for $x \in A$ and $g(x)$ for $x \notin A$ is $\mathcal{M}$-measurable.
:::

## 직관

σ-대수가 "판정할 수 있는 사건들"의 목록이라면, 가측함수는 그 목록만 보고도 값에 관한 물음에 답할 수 있는 함수입니다. "$f(x)$가 $c$보다 큰가"라는 물음의 답이 예인 점들의 집합 $\{f > c\}$가 판정할 수 있는 사건이어야 한다는 것이 (2)의 (b)입니다. 정의는 모든 보렐 집합의 역상을 요구하지만, 보렐 σ-대수가 반직선으로 생성되므로 반직선 한 꼴만 확인하면 충분합니다((2)). 이것은 [[generated-sigma-algebra|생성한 σ-대수]]의 "생성하는 족만 확인하면 된다"는 논법을 역상에 쓴 것입니다.

가측인지는 함수 하나만으로 정해지지 않고 σ-대수에 달려 있습니다. σ-대수가 $\mathscr{P}(X)$이면 모든 함수가 가측이고, 더 작은 σ-대수에서는 가측인 함수가 더 적을 수 있습니다(아래 예시와 반례). 연속함수와 합성해도 가측성이 남는 것((4))은 연속함수에 의한 보렐 집합의 역상이 보렐 집합이기 때문입니다.

(7)의 $\{f < g\}$는 두 함수를 반직선 하나로 비교할 수 없어서, 그 사이에 유리수 하나를 끼워 넣습니다. $f(x) < g(x)$이면 $f(x) < r < g(x)$인 유리수 $r$가 있으므로 $\{f < g\}$는 유리수마다 정한 집합 $\{f < r\} \cap \{r < g\}$의 합집합이고, 유리수에는 [[rationals-are-countable|유리수의 가산성]]의 번호가 이미 붙어 있어 이것이 집합열의 합집합이 됩니다.

## 성질의 증명

:::proof
**준비.** 실수의 순서는 [[real-order-axioms]]와 [[order-properties-of-reals]]로 다룬다. 아래에서 "원소 판정"은 [[sequence-of-sets|집합열]]의 (1)이다. 실수 $c$에 대하여 [[preimage-and-set-operations|역상과 집합의 연산]]의 뜻으로 $\{f > c\} = f^{-1}(\{t \in \mathbb{R} : c < t\})$이고, 다른 세 반직선 꼴과 $\{f = c\} = f^{-1}(\{c\})$, $\{f \ne c\} = f^{-1}(\mathbb{R} - \{c\})$도 같다. 이것은 역상의 정의([[image-and-preimage|상과 역상]]의 (2))에서 바로 나온다.

**(1)** $\mathcal{S} = \{B \in \mathscr{P}(Y) : f^{-1}(B) \in \mathcal{M}\}$로 두면 [[sigma-algebra|σ-대수]]의 (7)에 의해 $\mathcal{S}$는 $Y$ 위의 σ-대수이고, 가정에 의해 $\mathcal{C} \subseteq \mathcal{S}$이다. [[generated-sigma-algebra|생성한 σ-대수]]의 (2)의 (ii)에 의해 $\mathcal{N} = \sigma(\mathcal{C}) \subseteq \mathcal{S}$이다. 곧 $\mathcal{N}$의 모든 원소 $B$에서 $f^{-1}(B) \in \mathcal{M}$이다.

**(2)** [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 네 집합족 $\mathcal{R}_1$, $\mathcal{R}_2$, $\mathcal{R}_3$, $\mathcal{R}_4$를 쓴다. (a)이면 같은 항목의 (4)의 (i)에 의해 네 꼴의 반직선은 보렐 집합이므로 준비에 의해 (b)–(e)가 모두 성립한다. 거꾸로 (b)가 성립하면 $\mathcal{R}_1$의 모든 원소 $C = \{t : c < t\}$에서 $f^{-1}(C) = \{f > c\} \in \mathcal{M}$이고, 같은 항목의 (3)의 (iii)에 의해 $\sigma(\mathcal{R}_1) = \mathscr{B}(\mathbb{R})$이므로 (1)을 $\mathcal{N} = \mathscr{B}(\mathbb{R})$, $\mathcal{C} = \mathcal{R}_1$에 쓰면 (a)이다. (c), (d), (e)에서 (a)로 가는 것도 같은 방식으로 $\mathcal{R}_2$, $\mathcal{R}_3$, $\mathcal{R}_4$와 같은 항목의 (3)의 (iv), (v), (vi)을 쓴다.

**(3)** [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (4)의 (i)과 (ii)에 의해 $(a, b)$, $[a, b)$, $(a, b]$, $[a, b]$와 $\{c\}$는 보렐 집합이고, (σ2)에 의해 $\mathbb{R} - \{c\}$도 보렐 집합이다. 이 집합들의 역상이 차례로 문장의 집합들이므로([[interval]]의 정의와 준비) 정의에 의해 $\mathcal{M}$의 원소이다.

**(4)** (i) $B \in \mathcal{K}$이면 $k^{-1}(B) \in \mathcal{N}$이고, 따라서 $h^{-1}(k^{-1}(B)) \in \mathcal{M}$이다. [[preimage-and-set-operations|역상과 집합의 연산]]의 (4)에 의해 이 집합은 $(k \circ h)^{-1}(B)$이다. (ii)는 (i)을 $(Y, \mathcal{N}) = (Z, \mathcal{K}) = (\mathbb{R}, \mathscr{B}(\mathbb{R}))$에 쓴 것이다. (iii) [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (5)에 의해 연속함수 $\varphi$에서 모든 보렐 집합의 역상은 보렐 집합이므로 $\varphi$는 보렐 가측이고, 뒷문장은 (ii)이다.

**(5)** $\mathbb{R}$ 위의 실함수 $\varphi_1(t) = ct$, $\varphi_2(t) = c + t$, $\varphi_3(t) = |t|$, $\varphi_4(t) = tt$를 생각하자. [[continuous-function|연속함수]]의 (4)에 의해 상수함수와 항등함수는 연속이고, [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 그 합, 곱, 상수배, 절댓값은 연속이므로([[real-valued-function]]의 (4)의 연산) 넷은 연속함수이다. 또 $\varphi_5(t) = \tfrac{1}{2}(t + |t|)$, $\varphi_6(t) = \tfrac{1}{2}(-t + |t|)$도 같은 이유로 연속함수이다. [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 실수 $t$의 양의 부분 $p$와 음의 부분 $q$는 $t = p - q$, $|t| = p + q$를 만족하므로 $p = \tfrac{1}{2}(t + |t|) = \varphi_5(t)$이고 $q = \tfrac{1}{2}(-t + |t|) = \varphi_6(t)$이며, 같은 (1)에 의해 $p \ge 0$, $q \ge 0$이다. 각 $x$에서 $(\varphi_1 \circ f)(x) = c\,f(x)$, …, $(\varphi_5 \circ f)(x) = f^+(x)$, $(\varphi_6 \circ f)(x) = f^-(x)$이므로 여섯 함수는 차례로 $cf$, $c + f$, $|f|$, $ff$, $f^+$, $f^-$이고, (4)의 (iii)에 의해 $\mathcal{M}$-가측이다. 마지막 문장은 $t = f(x)$에 위의 사실을 쓴 것이다.

**(6)** 값이 $c$인 상수함수 $f$에서 $\{f > a\}$는 $a < c$이면 $X$, 그렇지 않으면 $\emptyset$이므로 (σ1)과 [[sigma-algebra|σ-대수]]의 (1)에 의해 $\mathcal{M}$의 원소이고, (2)에 의해 $f$는 가측이다. [[indicator-function]]의 (1)에 의해 $\chi_A$의 값은 $0$이거나 $1$이고, $\chi_A(x) = 1$인 것은 정확히 $x \in A$일 때이다. 따라서 실수 $a$에 대하여 $\{\chi_A > a\}$는 $a < 0$이면 $X$, $0 \le a < 1$이면 $A$, $1 \le a$이면 $\emptyset$이다. $A \in \mathcal{M}$이면 세 집합이 모두 $\mathcal{M}$의 원소이므로 (2)에 의해 $\chi_A$는 가측이다. 거꾸로 $\chi_A$가 가측이면 (2)에 의해 $A = \{\chi_A > 0\} \in \mathcal{M}$이다.

**(7)** [[rationals-are-countable|유리수의 가산성]]의 (5)의 유리수의 열거를 $(r_m)$이라 하자. 곧 $m$에서의 값이 $r_m$인 함수 $\mathbb{N} \to \mathbb{Q}$는 전단사이다. $m$번째 항이 $\{f < r_m\} \cap \{r_m < g\}$인 집합열은 (2)와 [[sigma-algebra|σ-대수]]의 (1)에 의해 $\mathcal{M}$의 원소로 된 집합열이다. 원소 판정에 의해 $x$가 그 합집합에 속하는 것은 $f(x) < r_m < g(x)$인 $m$이 있을 때이다. $f(x) < g(x)$이면 [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $f(x) < r < g(x)$인 유리수 $r$가 있고, 전사이므로 $r = r_m$인 $m$이 있다. 거꾸로 $f(x) < r_m < g(x)$이면 $f(x) < g(x)$이다. 따라서
$$
\begin{aligned}
\{f < g\} &= \bigcup_{m=1}^{\infty} \bigl(\{f < r_m\} \\
&\qquad \cap \{r_m < g\}\bigr)
\end{aligned}
$$
이고 (σ3)에 의해 $\{f < g\} \in \mathcal{M}$이다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $\{f \le g\} = X - \{g < f\}$이고, 방금 보인 것을 $g$, $f$에 쓰면 $\{g < f\} \in \mathcal{M}$이므로 (σ2)에 의해 $\{f \le g\} \in \mathcal{M}$이다. 같은 항목의 (1)의 (ii)와 (iv)에 의해 $\{f = g\} = \{f \le g\} \cap \{g \le f\}$이고 $\{f \ne g\} = X - \{f = g\}$이므로 σ-대수의 (1)과 (σ2)에 의해 둘 다 $\mathcal{M}$의 원소이다.

최대와 최소: 실수 $c$에 대하여 [[absolute-value]]의 (10)에 의해 $c < \max\{f(x), g(x)\}$인 것은 정확히 $c < f(x)$이거나 $c < g(x)$일 때이고(최대는 둘 가운데 하나이고 둘 다보다 크거나 같다), $c < \min\{f(x), g(x)\}$인 것은 정확히 $c < f(x)$이고 $c < g(x)$일 때이다. 따라서 $\{\max\{f, g\} > c\} = \{f > c\} \cup \{g > c\}$이고 $\{\min\{f, g\} > c\} = \{f > c\} \cap \{g > c\}$이며, σ-대수의 (1)과 (2)에 의해 두 함수는 가측이다.

**(8)** 실수 $c$에 대하여 $x \in A$이면 $h(x) = f(x)$이고 $x \notin A$이면 $h(x) = g(x)$이므로
$$
\begin{aligned}
\{h > c\} &= \bigl(A \cap \{f > c\}\bigr) \\
&\qquad \cup \bigl((X - A) \cap \{g > c\}\bigr)
\end{aligned}
$$
이다. (σ2), (2), [[sigma-algebra|σ-대수]]의 (1)에 의해 이 집합은 $\mathcal{M}$의 원소이고, (2)에 의해 $h$는 가측이다.
:::

## 예시와 반례

:::example[짝을 이룬 두 수에서 같은 값을 갖는 함수]
$\mathbb{N}$ 위에서 "모든 자연수 $k$에서 $2k - 1 \in A$인 것은 정확히 $2k \in A$일 때"를 만족하는 $A \subseteq \mathbb{N}$ 전체를 $\mathcal{M}$이라 하면 $\mathcal{M}$은 σ-대수입니다. $\mathbb{N}$은 조건을 만족하고, $A \in \mathcal{M}$이면 $2k - 1 \notin A$인 것은 정확히 $2k \notin A$일 때이므로 $\mathbb{N} - A \in \mathcal{M}$이며, 집합열의 합집합에 $2k - 1$이 속하는 것은 어떤 항에 $2k - 1$이 속할 때, 곧 그 항에 $2k$가 속할 때이기 때문입니다([[sequence-of-sets|집합열]]의 (1)). $f : \mathbb{N} \to \mathbb{R}$가 $\mathcal{M}$-가측인 것은 정확히 모든 자연수 $k$에서 $f(2k - 1) = f(2k)$일 때입니다.

$f(2k - 1) = f(2k)$가 모든 $k$에서 성립하면, 실수 $c$에 대하여 $2k - 1 \in \{f > c\}$인 것은 $c < f(2k - 1) = f(2k)$, 곧 $2k \in \{f > c\}$일 때이므로 $\{f > c\} \in \mathcal{M}$이고 (2)에 의해 $f$는 가측입니다. 거꾸로 어떤 $k$에서 $f(2k - 1) \ne f(2k)$라 합시다. 작은 쪽 값을 $c$로 두면 $\{f > c\}$는 큰 쪽 값을 갖는 수는 담고 작은 쪽 값을 갖는 수는 담지 않으므로 $\mathcal{M}$의 원소가 아니고, (2)에 의해 $f$는 가측이 아닙니다. 예컨대 $f(n) = n$은 가측이 아닙니다. [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 자연수 $n$은 짝수이거나 홀수이므로, $n$이 짝수이면 $n/2$, 홀수이면 $(n + 1)/2$를 값으로 하는 함수 $g$가 정해지고, $g(2k - 1) = g(2k) = k$이므로 $g$는 가측입니다.
:::

:::counterexample[절댓값은 가측이지만 함수는 가측이 아닌 예]
$X = \{1, 2\}$에 σ-대수 $\{\emptyset, X\}$를 주고 $f(1) = 1$, $f(2) = -1$로 둡시다. $|f|$는 값이 $1$인 상수함수이므로 (6)에 의해 가측입니다. 그러나 $\{f > 0\} = \{1\}$은 $\{\emptyset, X\}$의 원소가 아니므로 (2)에 의해 $f$는 가측이 아닙니다. $ff$도 값이 $1$인 상수함수라 가측입니다. 그래서 (5)의 거꾸로, 곧 "$|f|$나 $ff$가 가측이면 $f$가 가측이다"는 이 σ-대수에서 성립하지 않습니다. 한편 $f^+ = \chi_{\{1\}}$이고 $f^- = \chi_{\{2\}}$이므로 (6)에 의해 둘 다 가측이 아닙니다.
:::

## 확인 질문

:::check[$f$가 $\mathcal{M}$-가측이면 $\{x \in X : f(x) \in \mathbb{Q}\}$는 가측집합인가?]
그렇습니다. 이 집합은 $f^{-1}(\mathbb{Q})$이고, [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (4)의 (iii)에 의해 $\mathbb{Q}$는 보렐 집합이므로 가측함수의 정의에 의해 $\mathcal{M}$의 원소입니다.
:::

:::check[$f$, $g$가 $\mathcal{M}$-가측일 때 $\{x \in X : f(x) \le g(x) + 1\}$은 가측집합인가?]
그렇습니다. (5)에 의해 $1 + g$는 가측이고, 이 집합은 $\{f \le 1 + g\}$이므로 (7)에 의해 $\mathcal{M}$의 원소입니다.
:::
