---
title: 완비 거리공간
title_en: Complete Metric Space
aliases: [complete metric space, 거리공간의 완비성, completeness of a metric space, Cauchy-complete]
kind: definition
field: topology
msc: ["54E50"]
level: undergrad
summary: "거리공간의 모든 코시 수열이 그 공간의 점으로 수렴하면 완비라 한다. 보통 거리의 ℝ 은 완비이고(코시 완비성), 공집합과 한 점 공간과 이산 거리의 공간도 완비이며, ℝ 의 부분공간 {x : 0 < x ≤ 1} 은 완비가 아니다. 서로 상수배로 눌리는 두 거리는 완비성이 같다."
requires: [subset, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, basic-limits, cauchy-iff-convergent, metric-space, standard-topology-on-reals, metric-space-examples, sequence-in-a-space, convergence-in-metric-spaces, metric-space-is-hausdorff, limit-unique-in-hausdorff, cauchy-sequence-in-metric-space, cauchy-subsequence-and-limit]
sources:
  - ref: lebl-basic-analysis
    loc: "7.4절 7.4.1소절 Definition 7.4.3, Proposition 7.4.4 아래 첫 문장 (p.279), Proposition 7.4.6 앞 문단 (p.280); 7.4.2소절 Example 7.4.15 (i), Remark 7.4.16 (p.285); 7.4.3소절 연습문제 7.4.3 a) (p.285); 2.4절 Remark 2.4.6 (p.85)"
    checked: original
    note: "정의는 출처 Definition 7.4.3(p.279: 모든 코시 수열이 X 의 점으로 수렴하면 complete 또는 Cauchy-complete)과 같다. (2)는 출처가 Proposition 7.4.4 아래에서 'ℝ = ℝ¹ 의 완비성은 2장에서 증명했다'고 적는 사실이고, 출처 Remark 2.4.6(p.85)은 코시 수열이 모두 그 집합 안에서 수렴하는 집합을 Cauchy-complete 라 부르며 이 이름이 거리공간으로 일반화된다고 적는다. 해석학 입문 cauchy-iff-convergent 는 같은 성질을 '코시 완비성'이라 불렀고, (2)는 그것을 이 항목의 정의로 옮긴 것이다. (3)의 (iii)은 출처 Example 7.4.15 (i)(p.285: 이산 거리를 준 무한집합은 완비)과 연습문제 7.4.3 a)(p.285: 이산 거리를 준 공간은 완비)와 같은 내용이다. 출처는 증명을 연습문제로 돌린다. (4)는 출처 p.280 의 문단('{1/n} 은 (0, 1] 의 코시 수열이지만 (0, 1] 안에 극한이 없다')과 같은 대상, 같은 결론이다. (5)는 출처 Remark 7.4.16(p.285: 코시 수열과 완비성은 거리 자체에 달려 있다)과 같은 주제를 두 거리가 서로 상수배로 눌리는 경우에 본 것이고, 출처 연습문제 7.4.19 f)(p.286: 열린집합이 같은 ℝ 위의 두 거리 d, d′ 가운데 d 로는 완비이고 d′ 로는 완비가 아니다)는 상수배로 눌리지 않는 두 거리에서 결론이 달라지는 예이다. (3)의 (ii)의 한 원소 집합 위의 거리공간은 출처 연습문제 7.1.2(p.261: X = {0} 을 거리공간으로 만들 수 있는가)가 다루는 대상이다. 반례 '0 을 뺀 실수의 집합'은 (4)와 같은 발상이다. 첫째 확인 질문(d′(x, y) = 2 d(x, y) 인 공간)의 가정은 출처 연습문제 7.2.9(p.272: αd ≤ d′ ≤ βd 이면 열린집합이 같다)의 가정과 같은 꼴이다. 둘째 확인 질문의 이산 거리를 준 ℝ 은 출처 p.261(Definition 7.1.12 아래 문단: 이산 거리를 준 실수는 유계인 거리공간이다)과 Example 7.4.15(p.285)가 다루는 공간이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 단원 항목을 인용하던 근거 2곳을 앞 단원의 것으로 바꾸고 이름 없이 쓴 근거 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, 부분공간 거리 $d_Y$)는 [[metric-space]], [[metric-space-examples]]의 것이다. 수열과 그 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 거리공간에는 늘 거리위상을 준다. 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이다. 실수의 코시 완비성은 해석학 입문의 [[cauchy-iff-convergent|코시 수열은 수렴한다는 정리]]의 것이다.

**완비 거리공간.** 거리공간 $(X, d)$가 **완비**(complete)인 것은 정확히 $(X, d)$의 모든 코시 수열이 $X$의 어떤 점으로 수렴할 때이다. 이때 $(X, d)$를 **완비 거리공간**(complete metric space)이라 하고 "$(X, d)$는 완비이다"라고 쓴다. 거리를 밝혀야 할 때는 "$d$로 완비"라고 쓴다. $Y \subseteq X$에 대하여 "$Y$는 완비이다"는 $(Y, d_Y)$가 완비라는 뜻이다.

다음이 성립한다. 아래에서 $(X, d)$는 거리공간이다.

1. (완비 공간에서 수렴과 코시) $(X, d)$가 완비이면, $X$의 수열이 수렴하는 것은 정확히 그 수열이 코시 수열일 때이다.
2. (실수) 보통 거리를 준 $\mathbb{R}$은 완비 거리공간이다. 이것은 [[cauchy-iff-convergent|코시 수열은 수렴한다는 정리]]의 (1)의 코시 완비성을 거리공간의 말로 옮긴 것이다.
3. (공집합, 한 점, 이산 거리)
   - (i) 거리공간 $(\emptyset, \emptyset)$은 완비이다.
   - (ii) $X$가 한 원소 집합이면 $X$ 위의 거리공간 $(X, d)$는 완비이다.
   - (iii) $d$가 $X$ 위의 이산 거리이면 $(X, d)$는 완비이다.
4. (완비가 아닌 부분공간) $\mathbb{R}$의 부분집합 $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리 $d_Y$를 주면, $n$번째 항이 $n^{-1}$인 수열은 $(Y, d_Y)$의 코시 수열이지만 $Y$의 어떤 점으로도 수렴하지 않는다. 따라서 $(Y, d_Y)$는 완비가 아니다. 특히 완비 거리공간의 부분공간은 완비가 아닐 수 있다.
5. (상수배로 눌리는 두 거리) $d$, $d'$이 집합 $X$ 위의 거리이고, $0 \le c$, $0 \le c'$인 실수 $c$, $c'$이 있어 $X$의 모든 점 $x$, $y$에서 $d'(x, y) \le c \cdot d(x, y)$이고 $d(x, y) \le c' \cdot d'(x, y)$이면, $(X, d)$가 완비인 것은 정확히 $(X, d')$이 완비일 때이다.
:::

:::english
Metric spaces and their examples (the standard metric, the discrete metric, the subspace metric $d_Y$) are as in the entries on metric spaces and examples of metric spaces. Sequences and their convergence are as in the entry on sequences and convergence in a topological space, and a metric space always carries its metric topology. Cauchy sequences are as in the entry on Cauchy sequences in a metric space. Cauchy completeness of the reals is as in the analysis entry stating that Cauchy sequences converge.

**Complete metric spaces.** A metric space $(X, d)$ is **complete** exactly when every Cauchy sequence in $(X, d)$ converges to some point of $X$. Then $(X, d)$ is called a **complete metric space**, and we write "$(X, d)$ is complete". When the metric must be named we say "complete with respect to $d$". For $Y \subseteq X$, "$Y$ is complete" means that $(Y, d_Y)$ is complete.

The following hold. Below, $(X, d)$ is a metric space.

1. (Convergence and Cauchy sequences in a complete space) If $(X, d)$ is complete, then a sequence in $X$ converges exactly when it is a Cauchy sequence.
2. (The reals) $\mathbb{R}$ with the standard metric is a complete metric space. This is Cauchy completeness, (1) of the analysis entry stating that Cauchy sequences converge, put in the language of metric spaces.
3. (The empty space, one point, the discrete metric)
   - (i) The metric space $(\emptyset, \emptyset)$ is complete.
   - (ii) If $X$ is a one-element set, then every metric space $(X, d)$ on it is complete.
   - (iii) If $d$ is the discrete metric on $X$, then $(X, d)$ is complete.
4. (An incomplete subspace) Give the subset $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$ of $\mathbb{R}$ the subspace metric $d_Y$ of the standard metric. Then the sequence whose $n$th term is $n^{-1}$ is a Cauchy sequence in $(Y, d_Y)$ but converges to no point of $Y$. Hence $(Y, d_Y)$ is not complete. In particular, a subspace of a complete metric space may fail to be complete.
5. (Two metrics bounded by multiples of each other) If $d$, $d'$ are metrics on a set $X$ and there are real numbers $c$, $c'$ with $0 \le c$, $0 \le c'$ such that $d'(x, y) \le c \cdot d(x, y)$ and $d(x, y) \le c' \cdot d'(x, y)$ for all points $x$, $y$ of $X$, then $(X, d)$ is complete exactly when $(X, d')$ is complete.
:::

## 직관

완비 거리공간은 "끝내 서로 가까이 붙어 가는 수열은 반드시 모일 곳이 있는 공간"입니다. 코시 수열의 직관에서 쓴 행진의 비유로 말하면, 사람들이 서로 붙어 걸어갈 때 그들이 다가가는 깃발이 늘 공간 안에 꽂혀 있다는 것입니다. 정의의 "모든 코시 수열"이 "서로 붙어 걷는 모든 무리"에, "$X$의 어떤 점으로 수렴"이 "공간 안의 깃발"에 해당합니다.

완비인지는 공간에서 점이 빠져 있는지와 관계가 있습니다. $\mathbb{R}$은 해석학 입문에서 증명한 코시 완비성에 의해 완비입니다((2)). 그런데 $\mathbb{R}$에서 $0$ 근처를 잘라 낸 부분공간 $\{x : 0 < x \le 1\}$에서는 $n^{-1}$이 $0$을 향해 서로 붙어 가지만 $0$이 공간에 없어서 모일 곳이 없습니다((4)). 반대로 이산 거리에서는 코시 수열이 어느 번호부터 한 점에 머물러서 그 점으로 수렴하므로 늘 완비입니다((3)).

코시 수열은 거리로 정해지므로 완비인지도 거리에 달려 있습니다. 다만 두 거리가 서로의 상수배로 눌리면 코시 수열과 수렴하는 수열이 두 거리에서 같아서 완비성도 같습니다((5)).

## 성질의 증명

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "코시 (n)"은 [[cauchy-sequence-in-metric-space]]의 번호, "수렴 (n)"은 [[convergence-in-metric-spaces]]의 번호이다.

**(1).** 수렴하는 수열은 코시 (3)에 의해 코시 수열이다. 거꾸로 코시 수열은 완비의 정의에 의해 $X$의 어떤 점으로 수렴한다.

**(2).** $(x_n)$을 보통 거리를 준 $\mathbb{R}$의 코시 수열이라 하자. 코시 (2)에 의해 $(x_n)$은 [[cauchy-iff-convergent|코시 수열은 수렴한다는 정리]]가 쓰는 해석학 입문의 뜻으로 코시 수열이고, 그 항목의 (1)에 의해 어떤 실수 $L$로 해석학 입문의 뜻으로 수렴한다. 보통 거리의 거리위상은 [[standard-topology-on-reals]]의 (5)의 보통 위상이므로 수렴 (3)에 의해 $(x_n)$은 $L$로 수렴한다.

**(3).** (i) [[sequence-in-a-space|위상공간의 수열과 수렴]]의 정의에 의해 공집합의 수열은 없으므로, "$(\emptyset, \emptyset)$의 모든 코시 수열은 수렴한다"는 따질 수열이 없어 참이다.

(ii) $X = \{a\}$라 하자. $X$의 수열 $(x_n)$의 모든 항은 $X$의 원소이므로 $a$이고, $(x_n)$은 모든 항이 $a$인 상수 수열이다. [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 이 수열은 $a$로 수렴한다. 따라서 모든 수열이, 특히 모든 코시 수열이 수렴한다.

(iii) $(x_n)$이 $(X, d)$의 코시 수열이면 코시 (5)에 의해 $n \ge M$인 모든 $n$에서 $x_n = x_M$인 자연수 $M$이 있다. 수렴 (5)를 $p = x_M$에 쓰면 $(x_n)$은 $x_M$으로 수렴한다.

**(4).** 자연수 $n$에서 순서 성질 (10)에 의해 $0 < n^{-1}$이고, (Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이므로, $n = 1$이면 $n^{-1} = 1$이고 $1 < n$이면 순서 성질 (6)의 (ii)에 의해 $n^{-1} < 1$이다. 따라서 $n^{-1} \in Y$이고, $n$번째 항이 $n^{-1}$인 수열 $(y_n)$은 $Y$의 수열이다.

[[basic-limits]]의 (2)에 의해 $(y_n)$은 해석학 입문의 뜻으로 $0$으로 수렴하고, 수렴 (3)에 의해 보통 거리의 $\mathbb{R}$에서 $0$으로 수렴한다. 코시 (3)에 의해 $(y_n)$은 $\mathbb{R}$의 코시 수열이고, 코시 (6)에 의해 $(Y, d_Y)$의 코시 수열이다.

$(y_n)$이 $(Y, d_Y)$에서 어떤 점 $p \in Y$로 수렴한다고 하자. 수렴 (1)에 의해 모든 양의 실수 $\varepsilon$에 대하여 $n \ge M$인 모든 $n$에서 $d_Y(y_n, p) < \varepsilon$인 자연수 $M$이 있고, [[metric-space-examples]]의 (3)에 의해 $d_Y(y_n, p) = |y_n - p|$이다. 수렴 (1)을 $\mathbb{R}$에 쓰면 $(y_n)$은 $\mathbb{R}$에서 $p$로도 수렴한다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $\mathbb{R}$은 하우스도르프 공간이므로 [[limit-unique-in-hausdorff]]의 (1)에 의해 $p = 0$이다. 그런데 $0 < 0$이 아니므로 $0 \notin Y$이고, $p \in Y$에 어긋난다. 따라서 $(y_n)$은 $Y$의 어떤 점으로도 수렴하지 않고, $(Y, d_Y)$는 완비가 아니다. 마지막 문장은 (2)와 함께 $\mathbb{R}$이 완비이고 그 부분공간 $Y$가 완비가 아니라는 것이다.

**(5).** $(X, d)$가 완비라 하고 $(x_n)$을 $d'$으로 코시인 수열이라 하자. [[cauchy-subsequence-and-limit]]의 (4)의 (iv)에 의해 $(x_n)$은 $d$로 코시이고, $(X, d)$가 완비이므로 $(X, d)$에서 어떤 점 $p$로 수렴한다. 같은 (4)의 (iv)에 의해 $(x_n)$은 $(X, d')$에서 $p$로 수렴한다. 따라서 $(X, d')$은 완비이다. 두 가정은 $d$와 $d'$의 자리를 바꾸어도 같은 꼴이므로, 같은 논증으로 $(X, d')$이 완비이면 $(X, d)$가 완비이다.
:::

## 예시와 반례

:::example[정수의 부분공간]
$\mathbb{Z} \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리를 주면 $(\mathbb{Z}, d_{\mathbb{Z}})$는 완비입니다. $(x_n)$이 $\mathbb{Z}$의 코시 수열이면 $\varepsilon = 1$에 대하여 $n \ge M$일 때 $|x_n - x_M| < 1$인 자연수 $M$이 있습니다. 정수 $c = x_n - x_M$은 [[absolute-value]]의 (7)에 의해 $-1 < c < 1$이고, (Z1)([[prime-number]]의 진술, [[order-properties-of-reals]]의 (10))에 의해 $0 \le c$이고 $c \le 0$이므로 $c = 0$입니다. 곧 $n \ge M$이면 $x_n = x_M$이고, 이때 $n \ge M$인 모든 $n$에서 $d_{\mathbb{Z}}(x_n, x_M) = 0$이므로 [[convergence-in-metric-spaces]]의 (1)에 의해 $(x_n)$은 $x_M \in \mathbb{Z}$로 수렴합니다.
:::

:::counterexample[0 을 뺀 실수의 집합]
$Z = \{x \in \mathbb{R} : x \ne 0\}$에 보통 거리의 부분공간 거리를 줍니다. $n$번째 항이 $-n^{-1}$인 수열은 $Z$의 수열이고([[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 $-n^{-1} < 0$입니다), (4)와 같은 논증으로 $Z$의 코시 수열이지만 $\mathbb{R}$에서 $0$으로 수렴하므로 $Z$의 어떤 점으로도 수렴하지 않습니다. 따라서 $Z$는 완비가 아닙니다. $\mathbb{R}$에서 점 하나를 빼기만 해도 완비가 아닐 수 있습니다.
:::

## 확인 질문

:::check[$(X, d)$가 완비이고 $d'(x, y) = 2\,d(x, y)$이면 $(X, d')$은 완비인가?]
완비입니다. 먼저 $d'$은 거리입니다. $d$의 네 조건 (i)–(iv)의 양변에 양수 $2$를 곱하면 $d'$의 네 조건이 나옵니다([[order-properties-of-reals]]의 (4)와 (5)의 (ii)). 모든 $x$, $y$에서 $d' \le 2\,d$이고 $d \le 2^{-1} d'$이므로, (5)를 $c = 2$, $c' = 2^{-1}$에 쓰면 $(X, d')$은 완비입니다.
:::

:::check[이산 거리를 준 $\mathbb{R}$은 완비인가? 그 공간에서 $n$번째 항이 $n^{-1}$인 수열은 수렴하는가?]
완비입니다((3)의 (iii)). 그런데 이 수열은 수렴하지 않습니다. $n < m$이면 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $m^{-1} < n^{-1}$이므로 서로 다른 번호의 두 항은 다르고 그 거리는 $1$이어서 어느 번호부터 상수인 수열이 아니므로 [[cauchy-sequence-in-metric-space]]의 (5)에 의해 코시 수열이 아니고, (1)에 의해 수렴하지 않습니다. 완비라는 것은 코시 수열이 모두 수렴한다는 것이지, 모든 수열이 수렴한다는 것이 아닙니다.
:::
