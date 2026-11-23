---
title: 고르게 연속인 사상은 코시 수열을 보존한다
title_en: Uniformly Continuous Maps Preserve Cauchy Sequences
aliases: [코시 수열의 보존, 고른 연속과 코시 수열, uniformly continuous maps preserve Cauchy sequences]
kind: theorem
field: topology
msc: ["54E35", "54E50"]
level: undergrad
summary: 거리공간 사이의 고르게 연속인 사상은 코시 수열을 코시 수열로 보낸다. 정의역이 완비이면 연속인 사상만으로도 그렇고, 사상과 그 역함수가 모두 고르게 연속인 전단사는 한쪽이 완비이면 다른 쪽도 완비이게 한다. 연속이기만 한 사상은 코시 수열을 코시 수열로 보내지 않을 수 있다.
requires: [set, subset, function, function-composition, inverse-function, real-number-arithmetic, order-properties-of-reals, absolute-value, metric-space, metric-space-examples, sequence-in-a-space, continuity-preserves-convergence, continuity-agrees-with-analysis, real-valued-function, continuous-function, continuity-of-sum-and-product, power-of-a-real-number, power-function-is-continuous, cauchy-sequence-in-metric-space, complete-metric-space, uniformly-continuous-map, lipschitz-map]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "3.4.2절 Continuous extension, Lemma 3.4.5 와 그 앞 문단과 증명 (pp.139–140); 3.4.4절 연습문제 3.4.10 (p.143)"
    checked: original
    note: "(1)은 출처 Lemma 3.4.5(p.139, S ⊆ ℝ 위의 고르게 연속인 실함수는 S 의 코시 수열을 코시 수열로 보낸다)를 거리공간 사이의 사상으로 넓힌 것이고, 증명도 출처(p.140)처럼 고른 연속의 δ 를 코시 수열의 정의에 넣는다. 출처는 앞 문단에서 코시 수열의 극한이 정의역 밖에 있을 수 있다는 것이 새로운 문제라고 적는다. (2)는 출처 연습문제 3.4.10 b)(p.143, 연속함수 f : ℝ → ℝ 은 코시 수열을 코시 수열로 보낸다)를 정의역이 완비 거리공간인 경우로 넓힌 것이다. 반례 '0 보다 크고 1 이하인 실수 위의 x⁻¹'은 출처 연습문제 3.4.10 a)(p.143, (0, 1) 위의 연속함수와 코시 수열로 상이 코시 수열이 아닌 것을 찾아라)와 같은 물음에 답한다. 확인 질문 'ℝ 위의 x²'는 같은 연습문제 b)의 한 경우이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 다른 항목의 예시에 기대던 계산 1건, 근거가 빠진 반례 1건, 근거 없이 단정하던 문장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이며, 거리공간에는 늘 거리위상을 준다. 함숫값의 수열 $(f(x_n))$은 [[continuity-preserves-convergence|연속함수는 수열의 수렴을 보존한다]]의 것이다. 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이고, 완비는 [[complete-metric-space]]의 것이며, 사상과 고른 연속은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이다. 역함수는 [[inverse-function]]의 것이다. 아래에서 $(X, d_X)$, $(Y, d_Y)$는 거리공간이다.

1. (고르게 연속인 사상) $f : X \to Y$가 고르게 연속이고 $(x_n)$이 $X$의 코시 수열이면 $(f(x_n))$은 $Y$의 코시 수열이다.
2. (정의역이 완비인 경우) $(X, d_X)$가 완비이고 $f : X \to Y$가 연속이며 $(x_n)$이 $X$의 코시 수열이면 $(f(x_n))$은 $Y$의 코시 수열이다.
3. (완비성을 옮기는 전단사) $f : X \to Y$가 전단사이고 $f$와 역함수 $f^{-1} : Y \to X$가 모두 고르게 연속이면, $(X, d_X)$가 완비인 것은 정확히 $(Y, d_Y)$가 완비일 때이다.
:::

:::english
Metric spaces and their examples are as in the entries on metric spaces, sequences and convergence are as in the entry on sequences in topological spaces, and metric spaces always carry their metric topology. The sequence of values $(f(x_n))$ is that of the entry on continuous maps preserving convergence. Cauchy sequences, completeness, maps and uniform continuity are as in the corresponding entries, and inverse functions are as in the entry on inverse functions. Throughout, $(X, d_X)$ and $(Y, d_Y)$ are metric spaces.

1. (Uniformly continuous maps) If $f : X \to Y$ is uniformly continuous and $(x_n)$ is a Cauchy sequence in $X$, then $(f(x_n))$ is a Cauchy sequence in $Y$.
2. (Complete domain) If $(X, d_X)$ is complete, $f : X \to Y$ is continuous and $(x_n)$ is a Cauchy sequence in $X$, then $(f(x_n))$ is a Cauchy sequence in $Y$.
3. (Bijections transferring completeness) If $f : X \to Y$ is a bijection and both $f$ and its inverse $f^{-1} : Y \to X$ are uniformly continuous, then $(X, d_X)$ is complete exactly when $(Y, d_Y)$ is complete.
:::

## 직관

코시 수열은 항들이 끝내 서로 얼마든지 가까워지는 수열입니다. 고르게 연속인 사상은 "가까운 두 점을 가까운 두 점으로" 보내는데, 그 가까움의 기준 $\delta$가 점에 따라 달라지지 않습니다. 그래서 코시 수열의 꼬리에 있는 두 항이 $\delta$보다 가까워지는 번호부터는 상끼리도 $\varepsilon$보다 가까워집니다((1)).

연속이기만 하면 $\delta$가 점마다 다르므로, 코시 수열이 정의역 안의 점으로 수렴하지 않고 정의역의 "구멍"으로 다가갈 때 그 근처에서 $\delta$가 한없이 작아질 수 있습니다. 아래 반례가 그런 경우입니다. 정의역이 완비이면 코시 수열은 정의역 안의 점으로 수렴하므로 구멍이 없고, 연속만으로 충분합니다((2)).

(3)은 거리공간의 완비성이 고르게 연속인 사상과 그 역으로 짝지어진 두 공간 사이에서는 함께 성립하거나 함께 성립하지 않는다는 것입니다.

## 증명

:::idea
(1)은 코시 수열의 정의에 고른 연속의 $\delta$를 $\varepsilon$ 자리에 넣습니다. (2)는 코시 수열이 수렴하고, 연속인 사상이 수렴을 보존하고, 수렴하는 수열이 코시라는 것을 잇습니다. (3)은 (1)을 $f$와 $f^{-1}$에 번갈아 씁니다.
:::

:::hint
(3)에서 $X$의 코시 수열 $(x_n)$에 대하여, $(f(x_n))$의 극한 $q$를 $f^{-1}$로 되돌리면 무엇이 되는지 보세요.
:::

:::proof
**(1).** 실수 $\varepsilon > 0$을 잡는다. $f$가 고르게 연속이므로 실수 $\delta > 0$이 있어 $p$, $q \in X$이고 $d_X(p, q) < \delta$이면 $d_Y(f(p), f(q)) < \varepsilon$이다. $(x_n)$이 코시 수열이므로 이 $\delta$에 대하여 자연수 $M$이 있어 $n \ge M$, $k \ge M$인 모든 자연수 $n$, $k$에서 $d_X(x_n, x_k) < \delta$이다. 그런 $n$, $k$에서 $x_n$, $x_k$를 두 점으로 쓰면 $d_Y(f(x_n), f(x_k)) < \varepsilon$이다. [[continuity-preserves-convergence|연속함수는 수열의 수렴을 보존한다]]의 함숫값의 수열의 정의에 의해 $(f(x_n))$의 $n$번째 항은 $f(x_n)$이므로, [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]의 정의에 의해 $(f(x_n))$은 코시 수열이다.

**(2).** [[complete-metric-space|완비 거리공간]]의 정의에 의해 $(x_n)$은 $X$의 어떤 점 $p$로 수렴한다. $f$가 연속이므로 [[continuity-preserves-convergence|수렴의 보존]]의 (2)에 의해 $(f(x_n))$은 $f(p)$로 수렴하고, [[cauchy-sequence-in-metric-space]]의 (3)에 의해 $(f(x_n))$은 코시 수열이다.

**(3).** $g = f^{-1}$이라 쓴다. [[inverse-function]]에 의해 $g \circ f = i_X$, $f \circ g = i_Y$이므로 모든 $x \in X$에서 $g(f(x)) = x$이고 모든 $y \in Y$에서 $f(g(y)) = y$이다([[function-composition]]). [[uniformly-continuous-map|고르게 연속인 사상]]의 (2)에 의해 $f$와 $g$는 연속이다.

$(Y, d_Y)$가 완비라 하고 $(x_n)$을 $X$의 코시 수열이라 하자. (1)에 의해 $(f(x_n))$은 $Y$의 코시 수열이므로 완비의 정의에 의해 어떤 $q \in Y$로 수렴한다. $g$가 연속이므로 [[continuity-preserves-convergence|수렴의 보존]]의 (2)에 의해 $(g(f(x_n)))$은 $g(q)$로 수렴한다. 모든 $n$에서 $g(f(x_n)) = x_n$이므로 이 수열은 $(x_n)$과 같은 수열이다([[sequence-in-a-space|위상공간의 수열과 수렴]]의 수열의 같음). 따라서 $(x_n)$은 $X$의 점 $g(q)$로 수렴하고, $(X, d_X)$는 완비이다.

거꾸로 $(X, d_X)$가 완비라 하고 $(y_n)$을 $Y$의 코시 수열이라 하자. (1)을 $g$에 쓰면 $(g(y_n))$은 $X$의 코시 수열이므로 어떤 $p \in X$로 수렴한다. $f$가 연속이므로 $(f(g(y_n)))$은 $f(p)$로 수렴하고, 모든 $n$에서 $f(g(y_n)) = y_n$이므로 $(y_n)$은 $Y$의 점 $f(p)$로 수렴한다. 따라서 $(Y, d_Y)$는 완비이다. $\blacksquare$
:::

## 예시와 반례

:::example[곱의 코시 수열의 성분]
$(X_1, d_1)$, $(X_2, d_2)$가 거리공간이고 곱집합 $X_1 \times X_2$에 최대 거리 $d_{\max}$를 줍니다. $(z_n)$이 $(X_1 \times X_2, d_{\max})$의 코시 수열이고 $z_n = (a_n, b_n)$이면, 첫째 성분의 수열 $(a_n)$은 $(X_1, d_1)$의 코시 수열이고 둘째 성분의 수열 $(b_n)$은 $(X_2, d_2)$의 코시 수열입니다.

[[lipschitz-map|립시츠 사상]]의 (6)의 (iv)에 의해 사영 $\pi_1$, $\pi_2$는 $1$-립시츠이고, 그 항목의 (3)에 의해 고르게 연속입니다. 모든 $n$에서 $\pi_1(z_n) = a_n$, $\pi_2(z_n) = b_n$이므로 $(a_n)$, $(b_n)$은 함숫값의 수열 $(\pi_1(z_n))$, $(\pi_2(z_n))$과 같고, (1)에 의해 코시 수열입니다.
:::

:::counterexample[0 보다 크고 1 이하인 실수 위의 $x^{-1}$]
$Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리 $d_Y$를, $\mathbb{R}$에 보통 거리를 주고, $f(x) = x^{-1}$로 정한 $f : Y \to \mathbb{R}$를 봅니다. $f$는 연속이지만, $Y$의 코시 수열 $(n^{-1})$의 상 $(f(n^{-1}))$은 코시 수열이 아닙니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

*연속.* $Y$의 모든 점에서 항등함수의 값은 $0$이 아니므로, [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $x$에서의 값이 $x^{-1}$인 $Y$ 위의 함수는 해석학 입문의 뜻의 연속함수이고, [[real-valued-function]]의 (2), (3), (5)에 의해 그 함수는 $f$입니다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (2)를 $S = Y$, $T = \mathbb{R}$로 쓰면($d_{\mathbb{R}}$은 보통 거리 자신이다. 같은 항목의 (3)) $f : (Y, d_Y) \to \mathbb{R}$는 연속입니다.

*코시 수열의 상.* [[complete-metric-space|완비 거리공간]]의 (4)에 의해 $n$번째 항이 $n^{-1}$인 수열은 $(Y, d_Y)$의 코시 수열입니다. (K8)의 (iii)에 의해 $(n^{-1})^{-1} = n$이므로 $(f(n^{-1}))$의 $n$번째 항은 $n$입니다. 이 수열은 코시 수열이 아닙니다. $\varepsilon = 1$로 두면, 자연수 $M$이 무엇이든 $n = M$, $k = M + 1$은 $M$ 이상이고 $|n - k| = |-1| = 1 \ge 1$이기 때문입니다([[absolute-value]]의 (3), (1)과 [[cauchy-sequence-in-metric-space]]의 (1)).

(2)의 대우에 의해 $(Y, d_Y)$는 완비가 아니라는 것도 여기서 다시 나옵니다. 코시 수열 $(n^{-1})$이 다가가는 $0$이 $Y$ 밖에 있고, $0$ 근처에서 $f$의 값이 한없이 커집니다.
:::

## 확인 질문

:::check[$x$를 $x^2$으로 보내는 사상 $\mathbb{R} \to \mathbb{R}$(보통 거리)는 코시 수열을 코시 수열로 보내는가?]
보냅니다. [[power-function-is-continuous]]의 (1)에 의해 이 함수는 해석학 입문의 뜻의 연속함수이고(모든 $x$에서 [[power-of-a-real-number]]의 (1)에 의해 $x^2$은 $p_2(x)$와 같다), [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 보통 거리의 $\mathbb{R}$ 사이의 사상으로 연속입니다. [[complete-metric-space|완비 거리공간]]의 (2)에 의해 $\mathbb{R}$은 완비이므로 (2)에 의해 코시 수열을 코시 수열로 보냅니다. 여기서는 (1)이 아니라 (2)를 썼습니다. (1)은 고른 연속을 가정하고, (2)는 정의역의 완비와 연속만 가정합니다.
:::

:::check[$f : X \to Y$가 전단사이고 $f$와 $f^{-1}$이 모두 립시츠 사상이면, $X$와 $Y$ 가운데 하나만 완비일 수 있는가?]
없습니다. [[lipschitz-map|립시츠 사상]]의 (3)에 의해 $f$와 $f^{-1}$은 고르게 연속이므로, (3)에 의해 $X$가 완비인 것은 정확히 $Y$가 완비일 때입니다.
:::
