---
title: 유계 사상의 공간은 완비이다
title_en: Completeness of the Space of Bounded Maps
aliases: [유계 사상 공간의 완비성, 유계 함수 공간의 완비성, completeness of the space of bounded functions]
kind: theorem
field: topology
msc: ["54E50", "54C35"]
level: undergrad
summary: 거리공간 Y 가 완비이면 집합 X 에서 Y 로의 유계 사상의 공간 Bd(X, Y) 는 고른 거리로 완비이다. X 가 공집합이 아니면 거꾸로 Bd(X, Y) 가 완비일 때 Y 도 완비이고, X 가 공집합이면 Y 와 상관없이 완비이다. 특히 유계인 실숫값 사상의 공간은 완비이다.
requires: [open-and-closed-sets-of-reals, closed-subset-of-complete-space, order-properties-of-reals, sequence, metric-space, metric-space-examples, sequence-in-a-space, convergence-in-metric-spaces, cauchy-sequence-in-metric-space, complete-metric-space, pointwise-convergence, uniform-convergence, uniformly-cauchy-sequence-of-maps, bounded-maps-and-uniform-metric]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.1.3소절 Convergence in uniform norm: Definition 6.1.12, Proposition 6.1.13 과 증명 (p.231–232); 7.4.1소절 Cauchy sequences and completeness: Proposition 7.4.5 와 그 앞 문단 (p.280); 7.6.2소절 Picard's theorem 첫 문단 (p.297); 7.4.1절 Proposition 7.4.6 (p.280); 7.4.2절 Example 7.4.15, 7.4.3절 연습문제 7.4.3 (p.285)"
    checked: original
    note: "출처 Proposition 6.1.13(p.231–232)은 유계인 실함수 f_n : S → ℝ 의 열이 고른 노름으로 코시인 것이 정확히 어떤 f : S → ℝ 로 고르게 수렴할 때라고 증명한다. 이 항목의 (1)은 그것을 공역이 완비 거리공간 Y 인 유계 사상의 공간의 완비로 진술한 것이고, 극한 f 가 유계라는 것(bounded-maps-and-uniform-metric 의 (7)의 (i))을 더해 극한이 그 공간 안에 있음을 보인다. 출처 p.280 은 Proposition 7.4.5 의 앞 문단에서 '6.2절의 연속에 관한 결과가 거리공간의 말로는 C([a, b], ℝ) 가 완비라는 것'이라고 적고 증명을 연습문제 7.4.7 로 돌리며, 7.6.2소절 첫 문단(p.297)도 이 거리의 수렴이 고른 수렴이므로 C([a, b], ℝ) 가 완비라고 적는다. 이 항목은 연속 사상의 공간을 다루지 않고 그 바탕이 되는 유계 사상의 공간의 완비를 먼저 보인다(연속 사상의 공간은 space-of-continuous-maps). (2)의 거꾸로(X ≠ ∅ 이면 Bd(X, Y) 가 완비일 때 Y 가 완비)와 (3)의 X = ∅ 의 경우는 이 항목이 덧붙인 것이고, (2)의 증명은 uniformly-cauchy-sequence-of-maps 의 (5)의 증명과 같은 발상(상수 사상의 열)이다. 반례 '완비가 아닌 공역 {x : 0 < x ≤ 1}'의 공간과 수열 n⁻¹ 은 complete-metric-space 의 (4)의 것이고, 출처 p.280 의 같은 문단(Proposition 7.4.6 앞)이 (0, 1] 과 1/n 을 같은 예로 든다. 확인 질문 'Y 에 이산 거리를 주면 Bd(X, Y) 는 완비인가?'가 쓰는 '이산 거리의 공간은 완비'는 출처 7.4.2절 Example 7.4.15 의 (i)과 7.4.3절 연습문제 7.4.3 a)(둘 다 p.285)와 같은 사실이고, 확인 질문 'Y = ℤ 이면 Bd(X, ℤ) 는 완비인가?'가 쓰는 '완비 공간의 닫힌 부분집합은 완비'는 출처 Proposition 7.4.6(p.280, 증명은 연습문제 7.4.16)과 같은 사실이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 이 사이트에 없는 방향을 사실처럼 말한 직관 1건과 단원 글 1건, 틀리거나 빠진 근거 번호 4곳, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
유계 사상, $\operatorname{Bd}(X, Y)$, 고른 거리 $d_\infty$, 상수 사상 $\kappa_y$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이다. 완비 거리공간은 [[complete-metric-space]]의 것이고, $\mathbb{R}$에는 보통 거리를 준다. 아래에서 $X$는 집합이고 $(Y, d_Y)$는 거리공간이다.

1. (완비인 공역) $(Y, d_Y)$가 완비이면 $(\operatorname{Bd}(X, Y), d_\infty)$는 완비이다. 곧 $\operatorname{Bd}(X, Y)$의 수열 $(f_n)$이 $d_\infty$로 코시이면, $(f_n)$은 점별 극한 $f$를 갖고, $f$는 유계이며, $(f_n)$은 $(\operatorname{Bd}(X, Y), d_\infty)$에서 $f$로 수렴한다.
2. (거꾸로) $X \ne \emptyset$이면, $(\operatorname{Bd}(X, Y), d_\infty)$가 완비인 것은 정확히 $(Y, d_Y)$가 완비일 때이다.
3. (정의역이 공집합) $X = \emptyset$이면 $(\operatorname{Bd}(X, Y), d_\infty)$는 $(Y, d_Y)$가 완비이든 아니든 완비이다. 따라서 (2)에서 $X \ne \emptyset$이라는 가정은 뺄 수 없다.
4. (실숫값 사상) 모든 집합 $X$에 대하여 $(\operatorname{Bd}(X, \mathbb{R}), d_\infty)$는 완비이다. 특히 $S \subseteq \mathbb{R}$이면 $S$ 위의 유계인 실함수 전체의 집합 $\operatorname{Bd}(S, \mathbb{R})$은 $d_\infty$로 완비이다.
:::

:::english
Bounded maps, $\operatorname{Bd}(X, Y)$, the uniform metric $d_\infty$ and the constant maps $\kappa_y$ are as in the entry on the space of bounded maps and the uniform metric. Complete metric spaces are as in the entry on complete metric spaces, and $\mathbb{R}$ carries the standard metric. Below, $X$ is a set and $(Y, d_Y)$ is a metric space.

1. (Complete codomain) If $(Y, d_Y)$ is complete, then $(\operatorname{Bd}(X, Y), d_\infty)$ is complete. That is, if a sequence $(f_n)$ in $\operatorname{Bd}(X, Y)$ is Cauchy for $d_\infty$, then $(f_n)$ has a pointwise limit $f$, $f$ is bounded, and $(f_n)$ converges to $f$ in $(\operatorname{Bd}(X, Y), d_\infty)$.
2. (Converse) If $X \ne \emptyset$, then $(\operatorname{Bd}(X, Y), d_\infty)$ is complete exactly when $(Y, d_Y)$ is complete.
3. (Empty domain) If $X = \emptyset$, then $(\operatorname{Bd}(X, Y), d_\infty)$ is complete whether or not $(Y, d_Y)$ is complete. Hence the assumption $X \ne \emptyset$ in (2) cannot be dropped.
4. (Real-valued maps) For every set $X$, $(\operatorname{Bd}(X, \mathbb{R}), d_\infty)$ is complete. In particular, if $S \subseteq \mathbb{R}$, then the set $\operatorname{Bd}(S, \mathbb{R})$ of bounded real functions on $S$ is complete for $d_\infty$.
:::

## 직관

[[uniformly-cauchy-sequence-of-maps|고르게 코시인 사상의 열]]은 공역이 완비이면 고르게 코시인 열이 고르게 수렴한다는 것을 보였습니다. 유계 사상의 공간에서는 $d_\infty$로 코시라는 것이 고르게 코시라는 것과 같고, $d_\infty$로 수렴한다는 것이 고르게 수렴한다는 것과 같습니다. 그래서 이 정리는 그 결과를 거리공간 하나의 말로 옮긴 것입니다. 옮길 때 새로 확인할 것은 하나, 극한 사상이 다시 유계 사상의 공간 안에 있느냐입니다. 한 번호 이후의 사상들이 극한에 고르게 가까우므로, 극한의 상은 그 사상 하나의 상을 감싸는 공을 조금 키운 공에 들어갑니다.

공역의 완비는 극한 사상의 값을 만드는 곳에서만 쓰입니다. 각 점에서 값의 수열이 코시이므로 그 극한이 공역 안에 있어야 합니다. 거꾸로 공역에 "구멍"이 있으면, 정의역이 공집합이 아닐 때 값이 그 구멍으로 다가가는 상수 사상들의 열이 유계 사상의 공간에서도 수렴하지 않습니다((2)). 정의역이 공집합이면 사상이 하나뿐이어서 수렴하지 않을 수열이 없습니다((3)).

## 증명

:::idea
$d_\infty$로 코시인 열은 고르게 코시이므로, 공역이 완비이면 점별 극한으로 고르게 수렴하고, 유계 사상의 고른 극한은 유계이므로 그 극한이 공간 안에 있다. 거꾸로는 상수 사상의 열로 공역의 코시 수열을 옮긴다.
:::

:::hint
[[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (5), (6), (7)과 [[uniformly-cauchy-sequence-of-maps|고르게 코시인 사상의 열]]의 (3)을 차례로 씁니다.
:::

:::hint
(2)의 거꾸로에서는 $Y$의 코시 수열 $(y_n)$에 대해 $n$번째 항이 $\kappa_{y_n}$인 수열을 봅니다. 그 극한 $f$의 한 점에서의 값이 $(y_n)$의 극한입니다.
:::

:::proof
"고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호이다. 거리의 조건은 [[metric-space]]의 것이다.

**(1).** $(f_n)$을 $(\operatorname{Bd}(X, Y), d_\infty)$의 코시 수열이라 하자. 고른 거리 (5)에 의해 $(f_n)$은 $X$에서 $Y$로의 사상의 열이기도 하고, 고른 거리 (6)에 의해 고르게 코시이다. $(Y, d_Y)$가 완비이므로 [[uniformly-cauchy-sequence-of-maps|고르게 코시인 사상의 열]]의 (3)에 의해 $(f_n)$은 점별 극한 $f$를 갖고 $f$로 고르게 수렴한다. 모든 $f_n$이 유계이므로 고른 거리 (7)의 (i)에 의해 $f$는 유계, 곧 $f \in \operatorname{Bd}(X, Y)$이다. 고른 거리 (5)에 의해 $(f_n)$은 $(\operatorname{Bd}(X, Y), d_\infty)$에서 $f$로 수렴한다. $(f_n)$은 아무 코시 수열이었으므로 $(\operatorname{Bd}(X, Y), d_\infty)$는 완비이다.

**(2).** $Y$가 완비이면 (1)에 의해 $\operatorname{Bd}(X, Y)$는 완비이다. 거꾸로 $X \ne \emptyset$이고 $(\operatorname{Bd}(X, Y), d_\infty)$가 완비라 하자. $X$의 점 $x_0$을 잡고, $(y_n)$을 $(Y, d_Y)$의 코시 수열이라 하자. 각 자연수 $n$마다 $\kappa_{y_n}$은 이미 정해진 사상이고 고른 거리 (9)의 (i)에 의해 $\operatorname{Bd}(X, Y)$의 원소이므로, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 값으로 정한 수열에 의해 $n$번째 항이 $\kappa_{y_n}$인 $\operatorname{Bd}(X, Y)$의 수열이 있다. 고른 거리 (9)의 (ii)에 의해 모든 자연수 $m$, $k$에서 $d_\infty(\kappa_{y_m}, \kappa_{y_k}) = d_Y(y_m, y_k)$이므로, $(y_n)$의 코시 수열의 정의가 주는 자연수 $M$이 그대로 $(\kappa_{y_n})$의 코시 수열의 정의의 조건을 만족한다([[cauchy-sequence-in-metric-space]]). 가정에 의해 $(\kappa_{y_n})$은 어떤 $f \in \operatorname{Bd}(X, Y)$로 수렴한다.

$(y_n)$이 $f(x_0)$로 수렴함을 보인다. 양의 실수 $\varepsilon$을 잡으면 [[convergence-in-metric-spaces]]의 (1)에 의해 자연수 $M$이 있어 $n \ge M$이면 $d_\infty(\kappa_{y_n}, f) < \varepsilon$이다. 고른 거리 (2)의 (i)을 점 $x_0$에서 쓰면 $n \ge M$에서
$$
\begin{aligned}
d_Y(y_n, f(x_0)) &= d_Y(\kappa_{y_n}(x_0), f(x_0)) \\
&\le d_\infty(\kappa_{y_n}, f) < \varepsilon
\end{aligned}
$$
이다([[order-properties-of-reals]]의 (1)의 (v)). 다시 [[convergence-in-metric-spaces]]의 (1)에 의해 $(y_n)$은 $Y$의 점 $f(x_0)$로 수렴한다. 따라서 $(Y, d_Y)$는 완비이다.

**(3).** 고른 거리 (10)의 (i)에 의해 $\operatorname{Bd}(\emptyset, Y) = \{\emptyset\}$은 원소가 하나인 거리공간이므로 [[complete-metric-space]]의 (3)의 (ii)에 의해 완비이다. 이것은 $Y$와 상관없다. $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$(보통 거리의 부분공간 거리)은 [[complete-metric-space]]의 (4)에 의해 완비가 아니지만 $\operatorname{Bd}(\emptyset, Y)$는 완비이므로, (2)의 "완비이면 $Y$가 완비"는 $X = \emptyset$에서 성립하지 않는다.

**(4).** [[complete-metric-space]]의 (2)에 의해 $\mathbb{R}$은 완비이므로 (1)에 의해 $\operatorname{Bd}(X, \mathbb{R})$은 완비이다. $S \subseteq \mathbb{R}$이면 고른 거리 (4)의 (ii)에 의해 $\operatorname{Bd}(S, \mathbb{R})$의 원소는 정확히 $S$ 위의 유계인 실함수이다.
:::

## 예시와 반례

:::example[유계인 실수열의 공간]
$X = \mathbb{N}$으로 두면 $\mathbb{N}$에서 $\mathbb{R}$로의 사상은 실수열이고, 고른 거리 (4)의 (i)에 의해 그 가운데 유계인 것은 모든 $n$에서 $|x_n| \le B$인 실수 $B$가 있는 수열, 곧 [[sequence]]의 뜻으로 유계인 실수열입니다. 두 유계인 실수열 $(x_n)$, $(z_n)$의 거리는 $d_\infty = \sup\{|x_n - z_n| : n \in \mathbb{N}\}$입니다. (4)에 의해 이 공간은 완비입니다. 곧 "유계인 실수열들의 수열"이 이 거리로 코시이면 어떤 유계인 실수열로 이 거리로 수렴합니다.
:::

:::counterexample[완비가 아닌 공역 {x : 0 < x ≤ 1}]
$Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리를 주고, $X$를 공집합이 아닌 집합이라 합시다. [[complete-metric-space]]의 (4)에 의해 $n$번째 항이 $n^{-1}$인 수열은 $Y$의 코시 수열이지만 $Y$의 점으로 수렴하지 않으므로 $Y$는 완비가 아닙니다. (2)에 의해 $\operatorname{Bd}(X, Y)$도 완비가 아닙니다. 실제로 (2)의 증명에서처럼 상수 사상의 열 $(\kappa_{n^{-1}})$은 $d_\infty$로 코시이지만, 이것이 어떤 $f$로 수렴한다면 한 점 $x_0$에서 $(n^{-1})$이 $f(x_0) \in Y$로 수렴하게 되어 맞지 않습니다.
:::

## 확인 질문

:::check[$Y$에 이산 거리를 주면 $\operatorname{Bd}(X, Y)$는 완비인가?]
완비입니다. [[complete-metric-space]]의 (3)의 (iii)에 의해 이산 거리의 $Y$는 완비이므로 (1)에 의해 그렇습니다. 고른 거리 (10)의 (iv)에 의해 $d_\infty$가 $\operatorname{Bd}(X, Y)$ 위의 이산 거리이므로, [[complete-metric-space]]의 (3)의 (iii)을 $\operatorname{Bd}(X, Y)$에 바로 써도 같은 답이 나옵니다.
:::

:::check[$Y = \mathbb{Z}$(보통 거리의 부분공간 거리)이면 $\operatorname{Bd}(X, \mathbb{Z})$는 완비인가?]
완비입니다. [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 닫힌집합이고 [[complete-metric-space]]의 (2)에 의해 $\mathbb{R}$은 완비이므로, [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 $\mathbb{Z}$는 완비입니다. 따라서 (1)에 의해 $\operatorname{Bd}(X, \mathbb{Z})$는 완비입니다.
:::
