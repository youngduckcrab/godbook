---
title: 해석학 입문의 연속과 같다
title_en: Agreement with Continuity in Analysis
aliases: [연속의 일치, 위상의 연속과 ε–δ 연속, 공역 줄이기, continuity agrees with analysis]
kind: theorem
field: topology
msc: ["54C05", "26A15"]
level: undergrad
summary: 거리공간 사이의 함수는 공역을 부분공간 거리를 준 부분집합으로 줄여도 연속 여부가 같다. 실수의 부분집합에 보통 거리의 부분공간 거리를 주면, 위상공간 사이의 연속은 해석학 입문의 ε–δ 연속과 한 점마다 같다.
requires: [set, subset, function, absolute-value, order-properties-of-reals, metric-space, metric-space-examples, open-ball, topology-examples, standard-topology-on-reals, continuous-map, continuity-criteria, continuity-in-metric-spaces, real-valued-function, continuous-function, power-function-is-continuous, power-of-a-real-number, square-root-exists]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.5.1절, Definition 7.5.1 과 그 뒤 문장 (p.288)"
    checked: original
    note: "출처는 거리공간 사이의 연속을 정의한 뒤(Definition 7.5.1, p.288) 'f 가 실직선 위의 실함수이고 ℝ 에 보통 거리를 주면 이 정의는 3장의 정의와 같다'고 적고 증명은 적지 않는다. (2)와 (3)은 이 문장을 정의역이 실수의 부분집합인 경우까지 진술로 올린 것이다. 출처의 3장 정의는 해석학 입문의 continuous-function 의 근거이다."
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 정의와 그 뒤 문장, content/topological-spaces.tex:318–324"
    checked: original
    note: "출처는 ℝⁿ 에서 ℝ 로의 함수의 ε–δ 연속을 다시 적고(320–322), 이 정의를 일반의 거리공간으로 옮길 수 있다고 적은 뒤(323) 거리공간의 정리로 넘어간다. 실수의 부분집합 위의 함수와 공역을 줄이는 것((1))은 적지 않는다."
  - ref: lebl-basic-analysis
    loc: "3.2.1절, Proposition 3.2.2 (p.122); 3.2.3절, Example 3.2.10 (p.125)"
    checked: original
    note: "확인 질문 '0 과 1 이상인 수로 된 S' 의 결론은 출처 Proposition 3.2.2 (i)(p.122, c 가 S 의 집적점이 아니면 f 는 c 에서 연속)을 이 S 에서 위상의 말로 확인한 것과 같다. 반례 '정의역에 이산 거리를 주면' 의 h 가 보통 거리에서 0 에서 연속이 아니라는 것은 출처 Example 3.2.10(p.125, x < 0 에서 −1, x ≥ 0 에서 1 인 함수)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 부분공간 거리 $d_S$, $\mathbb{R}$의 보통 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리위상은 [[topology-examples]]의 것이며, $\mathbb{R}$의 보통 위상은 [[standard-topology-on-reals]]의 (5)의 것이다. 위상의 뜻의 연속과 "$x$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 실함수의 "$c$에서 연속"과 연속함수는 해석학 입문의 [[continuous-function|연속함수]]의 것이다. 아래에서 거리공간에는 늘 그 거리위상을 준다.

1. (공역을 줄이기) $(X, d_X)$와 $(Y, d_Y)$가 거리공간이고 $T \subseteq Y$에 부분공간 거리 $d_T$를 주며, $f : X \to T$가 함수라 하자. $T \subseteq Y$이므로 같은 집합 $f$는 $X$에서 $Y$로의 함수이기도 하다. $x \in X$이면, $f : (X, d_X) \to (T, d_T)$가 $x$에서 연속인 것은 정확히 $f : (X, d_X) \to (Y, d_Y)$가 $x$에서 연속일 때이다. 따라서 두 함수 가운데 하나가 연속인 것은 정확히 다른 하나가 연속일 때이다.
2. (해석학 입문의 연속과 같다) $S$, $T$가 $\mathbb{R}$의 부분집합이고 각각 보통 거리의 부분공간 거리 $d_S$, $d_T$를 주며, $f : S \to T$가 함수라 하자. $T \subseteq \mathbb{R}$이므로 $f$는 $S$ 위의 실함수이기도 하다. $c \in S$이면 다음 셋은 서로 같은 말이다.
   - (a) $f : (S, d_S) \to (T, d_T)$는 위상의 뜻으로 $c$에서 연속이다.
   - (b) $f : (S, d_S) \to \mathbb{R}$는 $\mathbb{R}$에 보통 위상을 줄 때 위상의 뜻으로 $c$에서 연속이다.
   - (c) 실함수 $f$는 [[continuous-function|연속함수]]의 뜻으로 $c$에서 연속이다.

   따라서 $f : (S, d_S) \to (T, d_T)$가 위상의 뜻으로 연속인 것은 정확히 실함수 $f$가 해석학 입문의 뜻의 연속함수일 때이다.
3. (공역이 $\mathbb{R}$인 경우) 특히 $S \subseteq \mathbb{R}$에 $d_S$를 주고 $f : S \to \mathbb{R}$가 실함수이면, $c \in S$에서 $f$가 위상의 뜻으로 연속인 것($\mathbb{R}$에는 보통 위상)은 정확히 해석학 입문의 뜻으로 $c$에서 연속일 때이다. $S = \mathbb{R}$이면 $d_{\mathbb{R}}$은 보통 거리 자신이고 그 거리위상은 보통 위상이므로, 보통 위상의 $\mathbb{R}$에서 보통 위상의 $\mathbb{R}$로의 함수에서 두 뜻의 연속이 같다.

그래서 두 뜻의 연속을 같은 이름으로 부른다.
:::

:::english
Metric spaces, the subspace metric $d_S$ and the standard metric on $\mathbb{R}$ are as in the earlier entries; so are metric topologies and the standard topology on $\mathbb{R}$. Continuity and "continuity at $x$" in the topological sense are as in the entry on continuous maps between topological spaces, and continuity at $c$ and continuous functions for real-valued functions are as in the analysis entry on continuous functions. Throughout, every metric space is given its metric topology.

1. (Shrinking the codomain) Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, give $T \subseteq Y$ the subspace metric $d_T$, and let $f : X \to T$ be a function. Since $T \subseteq Y$, the same set $f$ is also a function from $X$ to $Y$. For $x \in X$, $f : (X, d_X) \to (T, d_T)$ is continuous at $x$ exactly when $f : (X, d_X) \to (Y, d_Y)$ is continuous at $x$. Hence one of the two functions is continuous exactly when the other is.
2. (Agreement with continuity in analysis) Let $S$ and $T$ be subsets of $\mathbb{R}$, give them the subspace metrics $d_S$, $d_T$ of the standard metric, and let $f : S \to T$ be a function. Since $T \subseteq \mathbb{R}$, $f$ is also a real-valued function on $S$. For $c \in S$ the following three statements are equivalent.
   - (a) $f : (S, d_S) \to (T, d_T)$ is continuous at $c$ in the topological sense.
   - (b) $f : (S, d_S) \to \mathbb{R}$ is continuous at $c$ in the topological sense, where $\mathbb{R}$ has the standard topology.
   - (c) The real-valued function $f$ is continuous at $c$ in the sense of the analysis entry on continuous functions.

   Hence $f : (S, d_S) \to (T, d_T)$ is continuous in the topological sense exactly when the real-valued function $f$ is a continuous function in the sense of analysis.
3. (Codomain $\mathbb{R}$) In particular, if $S \subseteq \mathbb{R}$ has $d_S$ and $f : S \to \mathbb{R}$ is a real-valued function, then $f$ is continuous at $c \in S$ in the topological sense ($\mathbb{R}$ with the standard topology) exactly when it is continuous at $c$ in the sense of analysis. When $S = \mathbb{R}$, $d_{\mathbb{R}}$ is the standard metric itself and its metric topology is the standard topology, so for functions from $\mathbb{R}$ with the standard topology to $\mathbb{R}$ with the standard topology the two notions of continuity agree.

This is why both notions are called by the same name.
:::

## 직관

해석학 입문의 연속은 "$|x - c| < \delta$이면 $|f(x) - f(c)| < \varepsilon$"이었고, [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]는 위상의 연속이 거리공간에서 "$d(c, x) < \delta$이면 $d(f(c), f(x)) < \varepsilon$"과 같다는 것이었습니다. 실수의 부분집합에 보통 거리의 부분공간 거리를 주면 $d_S(c, x)$는 그냥 $|c - x|$이므로 두 문장이 글자까지 같아집니다. 이 정리는 그 관찰을 적어 둔 것입니다.

(1)은 공역을 얼마나 크게 잡든 상관없다는 것입니다. 값들 사이의 거리는 $T$에서 재든 $Y$에서 재든 같으므로, $\varepsilon$–$\delta$ 조건이 바뀌지 않습니다. 해석학 입문에서 $f : S \to T$를 $S$ 위의 실함수로도 보던 것이 위상의 연속에서도 문제를 일으키지 않는다는 뜻입니다.

이 일치는 정의역에 보통 거리에서 온 거리를 줄 때의 것입니다. 같은 집합에 다른 거리, 예컨대 이산 거리를 주면 위상의 연속이 달라질 수 있습니다(아래 반례).

## 증명

:::idea
모든 연속을 [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (1)의 (c)로 바꾸면, 비교할 것은 거리의 값뿐이고 부분공간 거리의 값은 원래 거리의 값과 같습니다.
:::

:::hint
$d_T(f(x), f(y)) = d_Y(f(x), f(y))$이고 $d_S(c, x) = |c - x| = |x - c|$입니다.
:::

:::proof
[[metric-space-examples]]의 (3)에 의해 $T$의 점 $t$, $t'$에서 $d_T(t, t') = d_Y(t, t')$이고, 같은 항목의 (1)에 의해 $\mathbb{R}$의 보통 거리는 $d(s, t) = |s - t|$이다.

**(1).** [[continuity-in-metric-spaces]]의 (1)에 의해 $f : (X, d_X) \to (T, d_T)$가 $x$에서 연속인 것은 정확히
"모든 $\varepsilon > 0$에 대하여 $\delta > 0$이 있어, $d_X(x, y) < \delta$인 모든 $y \in X$에서 $d_T(f(x), f(y)) < \varepsilon$"일 때이고, $f : (X, d_X) \to (Y, d_Y)$가 $x$에서 연속인 것은 정확히 같은 문장에서 $d_T$를 $d_Y$로 바꾼 것이 성립할 때이다. $f(x)$와 $f(y)$는 $T$의 점이므로 $d_T(f(x), f(y)) = d_Y(f(x), f(y))$이고, 두 문장은 같은 문장이다. 끝 문장은 [[continuity-criteria]]의 (2)에 의해 연속이 모든 점에서의 연속과 같으므로 나온다.

**(2).** (a)와 (b). (1)을 $X = S$, $Y = \mathbb{R}$($d_Y$는 보통 거리)로 쓰면 된다. [[standard-topology-on-reals]]의 (5)에 의해 보통 거리의 거리위상은 보통 위상이다.

(b)와 (c). [[continuity-in-metric-spaces]]의 (1)에 의해 (b)는 "모든 $\varepsilon > 0$에 대하여 $\delta > 0$이 있어, $d_S(c, x) < \delta$인 모든 $x \in S$에서 $d(f(c), f(x)) < \varepsilon$"과 같다. $d_S(c, x) = d(c, x) = |c - x|$이고 $d(f(c), f(x)) = |f(c) - f(x)|$이며, [[absolute-value]]의 (3)에 의해 $|c - x| = |x - c|$, $|f(c) - f(x)| = |f(x) - f(c)|$이다. 따라서 이 문장은 "모든 $\varepsilon > 0$에 대하여 $\delta > 0$이 있어, $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $|f(x) - f(c)| < \varepsilon$"이고, 이것은 [[continuous-function]]의 정의의 "$c$에서 연속"이다.

끝 문장. [[continuity-criteria]]의 (2)에 의해 (a)의 함수가 연속인 것은 모든 $c \in S$에서 (a)가 성립할 때이고, 이것은 모든 $c \in S$에서 (c)가 성립할 때, 곧 [[continuous-function]]의 정의에 의해 $f$가 $S$에서 연속, 곧 연속함수일 때이다.

**(3).** 앞 문장은 (2)를 $T = \mathbb{R}$로 둔 것의 (b)와 (c)이다. $S = \mathbb{R}$이면 모든 실수 $s$, $t$에서 $d_{\mathbb{R}}(s, t) = d(s, t)$이므로 [[function]]의 함수의 같음에 의해 $d_{\mathbb{R}} = d$이고, 그 거리위상은 [[standard-topology-on-reals]]의 (5)에 의해 보통 위상이다.
:::

## 예시와 반례

:::example[공역을 음이 아닌 실수로 줄인 제곱 함수]
$T = \{y \in \mathbb{R} : 0 \le y\}$에 보통 거리의 부분공간 거리를 주고, $p_2(x) = x^2$으로 정한 함수를 생각합니다. [[power-function-is-continuous]]의 (1)에 의해 $p_2 : \mathbb{R} \to \mathbb{R}$는 연속함수입니다. [[power-of-a-real-number]]의 (1)에 의해 $x^2 = xx$이고 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le xx$이므로 모든 값이 $T$에 들고, $p_2$는 $\mathbb{R}$에서 $T$로의 함수이기도 합니다. (2)를 $S = \mathbb{R}$로 쓰면 $p_2 : \mathbb{R} \to (T, d_T)$는 위상의 뜻으로 연속입니다. 여기서 정의역의 $d_{\mathbb{R}}$은 (3)에 의해 보통 거리이고 그 위상은 보통 위상입니다.
:::

:::counterexample[정의역에 이산 거리를 주면 일치하지 않는다]
이 정리는 정의역에 보통 거리의 부분공간 거리를 줄 때의 것입니다. $\mathbb{R}$에 이산 거리 $e$를 주면 [[topology-examples]]의 (5)에 의해 그 거리위상은 이산위상이고, [[continuous-map]]의 (3)에 의해 $(\mathbb{R}, e)$에서 보통 위상의 $\mathbb{R}$로 가는 함수는 모두 위상의 뜻으로 연속입니다. 그런데 $x < 0$이면 $0$, $0 \le x$이면 $1$인 실함수 $h$([[real-valued-function]]의 (1))는 해석학 입문의 뜻으로 $0$에서 연속이 아닙니다. $\varepsilon = 1/2$로 두면 $\delta > 0$이 무엇이든 $x = -\delta/2$는 [[order-properties-of-reals]]의 (8)과 (3)의 (iii)에 의해 $-\delta < x < 0$이어서 $|x - 0| < \delta$이고([[absolute-value]]의 (8)), $|h(x) - h(0)| = |0 - 1| = 1$은 $1/2$보다 작지 않기 때문입니다. 같은 집합 $h$가 정의역의 거리에 따라 위상의 뜻으로 연속이기도 하고 아니기도 합니다.
:::

## 확인 질문

:::check[$S = \{x \in \mathbb{R} : x = 0 \text{ 또는 } 1 \le x\}$에 보통 거리의 부분공간 거리를 줄 때, 실함수 $f : S \to \mathbb{R}$는 $0$에서 위상의 뜻으로 연속인가?]
어떤 $f$든 그렇습니다. $y \in S$이고 $|y - 0| < 1$이면 $y = 0$입니다. $1 \le y$라면 [[absolute-value]]의 (1)에 의해 $|y| = y \ge 1$이 되기 때문입니다. 곧 $B_S(0, 1) = \{0\}$이고, $\varepsilon > 0$이 무엇이든 $\delta = 1$에서 $f(B_S(0, 1)) = \{f(0)\} \subseteq B(f(0), \varepsilon)$입니다([[open-ball]]의 (1)). [[continuity-in-metric-spaces]]의 (1)에 의해 $f$는 $0$에서 연속입니다. (3)에 의해 이것은 해석학 입문의 뜻으로도 연속이라는 것과 같습니다.
:::

:::check[$I = \{x \in \mathbb{R} : 0 \le x \le 1\}$에 보통 거리의 부분공간 거리를 줄 때, $x$를 $\sqrt{x}$로 보내는 함수 $I \to I$는 위상의 뜻으로 연속인가?]
그렇습니다. [[power-function-is-continuous]]의 (2)에 의해 $q(x) = \sqrt{x}$로 정한 $q : \{x : 0 \le x\} \to \mathbb{R}$는 연속함수이고, [[continuous-function]]의 (5)에 의해 그 제한 $q|_I$도 연속함수입니다. $0 \le x \le 1$이면 $0 \le \sqrt{x}$이고 $\sqrt{x}\sqrt{x} = x \le 1 = 1 \cdot 1$이므로 [[order-properties-of-reals]]의 (7)의 (iii)에 의해 $\sqrt{x} \le 1$입니다([[square-root-exists]]). 곧 모든 값이 $I$에 들고, (2)에 의해 이 함수는 $(I, d_I)$에서 $(I, d_I)$로의 함수로서 위상의 뜻으로 연속입니다.
:::
