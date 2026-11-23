---
title: 완비성은 위상만으로 정해지지 않는다
title_en: Completeness Is Not a Topological Property
aliases: [완비성과 위상동형, completeness and homeomorphism, 같은 위상의 두 거리와 완비성]
kind: proposition
field: topology
msc: ["54E50", "54C05"]
level: undergrad
summary: 열린구간 (−1, 1) 과 ℝ 은 위상동형이지만 ℝ 만 완비이고, 그 위상동형사상은 코시 수열을 코시 수열로 보내지 않는다. ℝ 위에는 보통 거리와 같은 위상을 주면서 완비가 아닌 거리가 있다. 그래서 거리공간이 완비인지는 거리위상만으로 정해지지 않는다.
requires: [function, function-composition, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, archimedean-property, interval, sequence, limit-of-sequence, basic-limits, comparison-with-null-sequence, metric-space, metric-space-examples, topology-examples, standard-topology-on-reals, continuous-map, composition-of-continuous-maps, homeomorphism, homeomorphism-examples, sequence-in-a-space, convergence-in-metric-spaces, continuity-preserves-convergence, metric-space-is-hausdorff, limit-unique-in-hausdorff, bounded-sequence-in-metric-space, cauchy-sequence-in-metric-space, complete-metric-space, continuity-in-metric-spaces]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4절 7.4.2소절 Remark 7.4.16 (p.285); 7.4.3소절 연습문제 7.4.19 (p.286); 7.3.4소절 연습문제 7.3.10 (p.278)"
    checked: original
    note: "출처 Remark 7.4.16(p.285)은 콤팩트성과 수렴은 위상(어느 집합이 열린집합인가)에만 달려 있지만 코시 수열과 완비성은 거리 자체에 달려 있다고 적고 연습문제 7.4.19 를 가리킨다. 출처 연습문제 7.4.19(p.286)는 ℝ 위의 d′(x, y) = |x/(1+|x|) − y/(1+|y|)| 가 거리이고(a), 보통 거리와 위상이 같으며(b), d′ 로는 코시이지만 보통 거리로는 코시가 아닌 수열이 있고(e), (ℝ, d) 는 완비이지만 (ℝ, d′) 은 완비가 아님(f)을 보이라고 한다. (3)은 그 연습문제의 a), b), f)와 같은 대상, 같은 결론이고, 이 항목은 위상이 같다는 것을 열린집합을 직접 비교하지 않고 위상동형사상 f 와 그 역함수 g 를 거쳐 보인다. 같은 꼴의 거리는 출처 연습문제 7.3.10(p.278)이 확장된 실수 위에 정의한다. (1)과 (2)의 열린구간 (−1, 1) 과 위상동형사상은 homeomorphism-examples 의 (2)의 것이다. 출처의 연습문제 7.4.19 e)는 d′ 로 코시이고 d 로 코시가 아닌 수열을 찾게 하고, 이 항목의 (3)의 수열 (n) 이 그런 수열이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 단원 항목을 인용하던 근거 2곳을 앞 단원의 것으로 바꾸고 이름 없이 쓴 근거 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 부분공간 거리)는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이며, $\mathbb{R}$에는 보통 거리 $d$(곧 $d(x, y) = |x - y|$)와 그 거리위상인 보통 위상을 준다. 위상동형사상과 $\simeq$는 [[homeomorphism|위상동형사상]]의 것이다. 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이며, 완비는 [[complete-metric-space]]의 것이다. 아래에서 $I = (-1, 1)$에는 보통 거리의 부분공간 거리 $d_I$를 주고, $f : I \to \mathbb{R}$와 $g : \mathbb{R} \to I$는 [[homeomorphism-examples]]의 (2)의 함수 $f(x) = x\,(1 - |x|)^{-1}$, $g(y) = y\,(1 + |y|)^{-1}$이다. 그 (2)에 의해 $f$는 위상동형사상이고 $g$는 그 역함수이다.

1. (위상동형인데 하나만 완비) $\mathbb{R}$은 완비이고 $I$는 완비가 아니다. 더 자세히, $n$번째 항이 $x_n = 1 - n^{-1}$인 수열은 $I$의 코시 수열이지만 $I$의 어떤 점으로도 수렴하지 않는다. 따라서 거리위상으로 서로 위상동형인 두 거리공간 가운데 하나만 완비일 수 있다.
2. (코시 수열의 상) (1)의 수열 $(x_n)$에 대하여 모든 자연수 $n$에서 $f(x_n) = n - 1$이고, 실수열 $(f(x_n))$은 $\mathbb{R}$의 코시 수열이 아니다. 따라서 위상동형사상은 코시 수열을 코시 수열로 보내지 않을 수 있다.
3. (같은 위상을 주는 두 거리) 실수 $x$, $y$에 대하여 $d'(x, y) = |g(x) - g(y)|$로 정하면 $(\mathbb{R}, d')$은 거리공간이고, 두 거리위상은 같다($\mathcal{T}_{d'} = \mathcal{T}_d$). $(\mathbb{R}, d)$는 완비이지만 $(\mathbb{R}, d')$은 완비가 아니다. 더 자세히, $n$번째 항이 $n$인 수열은 $d'$으로 코시이지만 $(\mathbb{R}, d')$에서 어떤 점으로도 수렴하지 않고, $d$로는 코시가 아니다. 따라서 같은 집합 위의 두 거리가 같은 위상을 주어도 하나만 완비일 수 있다.
4. (상수배로 눌리지 않는다) (3)의 $d$, $d'$에 대하여, 모든 실수 $x$, $y$에서 $d'(x, y) \le c \cdot d(x, y)$이고 $d(x, y) \le c' \cdot d'(x, y)$인 $0$ 이상의 실수 $c$, $c'$은 없다.
:::

:::english
Metric spaces and their examples (the standard metric, subspace metrics) are as in the entries on metric spaces and examples of metric spaces, the metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies, and $\mathbb{R}$ carries the standard metric $d$ (that is, $d(x, y) = |x - y|$) and its metric topology, the standard topology. Homeomorphisms and $\simeq$ are as in the entry on homeomorphisms. Sequences and convergence are as in the entry on sequences and convergence in a topological space, Cauchy sequences are as in the entry on Cauchy sequences in a metric space, and completeness is as in the entry on complete metric spaces. Below, $I = (-1, 1)$ carries the subspace metric $d_I$ of the standard metric, and $f : I \to \mathbb{R}$ and $g : \mathbb{R} \to I$ are the functions $f(x) = x\,(1 - |x|)^{-1}$, $g(y) = y\,(1 + |y|)^{-1}$ of (2) of the entry on examples of homeomorphisms. By that (2), $f$ is a homeomorphism and $g$ is its inverse.

1. (Homeomorphic, but only one is complete) $\mathbb{R}$ is complete and $I$ is not. More precisely, the sequence whose $n$th term is $x_n = 1 - n^{-1}$ is a Cauchy sequence in $I$ but converges to no point of $I$. Hence of two metric spaces that are homeomorphic with their metric topologies, only one may be complete.
2. (Images of Cauchy sequences) For the sequence $(x_n)$ of (1), $f(x_n) = n - 1$ for every natural number $n$, and the real sequence $(f(x_n))$ is not a Cauchy sequence in $\mathbb{R}$. Hence a homeomorphism may fail to send Cauchy sequences to Cauchy sequences.
3. (Two metrics giving the same topology) For real numbers $x$, $y$ define $d'(x, y) = |g(x) - g(y)|$. Then $(\mathbb{R}, d')$ is a metric space and the two metric topologies are equal ($\mathcal{T}_{d'} = \mathcal{T}_d$). $(\mathbb{R}, d)$ is complete but $(\mathbb{R}, d')$ is not. More precisely, the sequence whose $n$th term is $n$ is Cauchy with respect to $d'$ but converges to no point in $(\mathbb{R}, d')$, and it is not Cauchy with respect to $d$. Hence two metrics on the same set may give the same topology while only one of them is complete.
4. (Not bounded by multiples of each other) For the $d$, $d'$ of (3) there are no real numbers $c$, $c'$ at least $0$ such that $d'(x, y) \le c \cdot d(x, y)$ and $d(x, y) \le c' \cdot d'(x, y)$ for all real numbers $x$, $y$.
:::

## 직관

위상은 "어느 점들이 서로 가까이 있는가"만 알려 주고, "얼마나 가까운가"를 재는 눈금은 알려 주지 않습니다. 코시 수열은 그 눈금으로 정의되므로, 위상을 그대로 두고 눈금만 바꾸면 코시 수열이 달라질 수 있습니다. 고무줄 위에 찍은 점들에 빗대면, 고무줄을 늘이고 줄여도 점들의 이웃 관계(위상)는 그대로이지만 점 사이의 길이(거리)는 바뀝니다. 위상동형사상 $f$는 $(-1, 1)$이라는 짧은 고무줄을 양 끝으로 한없이 늘여 $\mathbb{R}$ 전체로 만드는 사상입니다.

$I$에서 $1$을 향해 서로 붙어 가는 점들 $x_n = 1 - n^{-1}$은 $I$의 코시 수열이지만, 모일 곳인 $1$이 $I$에 없습니다. $f$로 늘이면 그 점들은 $0, 1, 2, \dots$로 서로 멀어져서 더는 코시 수열이 아닙니다((2)). 반대로 $\mathbb{R}$에 $g$로 줄여 잰 거리 $d'$을 주면, $\mathbb{R}$의 수열 $1, 2, 3, \dots$이 $d'$으로는 서로 붙어 가지만 모일 곳이 없습니다((3)). 두 경우 모두 위상은 같고 눈금만 다릅니다.

[[complete-metric-space|완비 거리공간]]의 (5)는 두 거리가 서로의 상수배로 눌리면 완비성이 같다고 말합니다. (4)는 (3)의 두 거리가 그렇게 눌리지 않는다는 것을 그 대우로 보여 줍니다.

## 증명

:::idea
(1)과 (2)는 수열 하나를 계산하고, (3)은 $d'$이 $g$를 거쳐 $I$의 거리를 그대로 옮긴 것이라는 데서 나온다. 위상이 같다는 것은 항등함수를 위상동형사상 $f$, $g$와 거리를 보존하는 사상의 합성으로 써서 보인다.
:::

:::hint
$d'(x, y) = d_I(g(x), g(y))$이고, $u, v \in I$이면 $d'(f(u), f(v)) = d_I(u, v)$입니다. 거리를 바꾸지 않는 함수는 $\delta = \varepsilon$으로 연속입니다.
:::

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "수렴 (n)"은 [[convergence-in-metric-spaces]]의 번호, "코시 (n)"은 [[cauchy-sequence-in-metric-space]]의 번호, "완비 (n)"은 [[complete-metric-space]]의 번호이다. 실수의 계산은 [[real-number-arithmetic]]의 (K…)로 한다.

**(1).** $\mathbb{R}$은 완비 (2)에 의해 완비이다. 자연수 $n$에서 (Z1)([[prime-number]]의 진술)과 순서 성질 (10)에 의해 $1 \le n$이고 $0 < n^{-1}$이며, $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 순서 성질 (6)의 (ii)에 의해 $n^{-1} < 1$이다. 따라서 $0 \le 1 - n^{-1} < 1$이고(순서 성질 (3)의 (i)과 (2)의 (ii)), $-1 < 0$이므로 $x_n \in I$이다.

$|x_n - 1| = |-n^{-1}| = n^{-1}$(절댓값 (3), (1))이고 [[basic-limits]]의 (2)에 의해 $(n^{-1})$은 $0$으로 수렴하므로, [[comparison-with-null-sequence]]의 (3)에 의해 $(x_n)$은 $\mathbb{R}$에서 $1$로 수렴한다(수렴 (3)으로 거리위상의 수렴이기도 하다). 코시 (3)에 의해 $(x_n)$은 $\mathbb{R}$의 코시 수열이고, 코시 (6)에 의해 $I$의 코시 수열이다. $(x_n)$이 $I$의 점 $p$로 수렴한다면, [[metric-space-examples]]의 (3)에 의해 $d_I(x_n, p) = d(x_n, p)$이므로 수렴 (1)에 의해 $\mathbb{R}$에서도 $p$로 수렴한다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)과 [[limit-unique-in-hausdorff]]의 (1)에 의해 $p = 1$인데, $1 \notin I$이므로 어긋난다. 따라서 $I$는 완비가 아니다. [[homeomorphism-examples]]의 (2)에 의해 $I \simeq \mathbb{R}$이므로 마지막 문장이 나온다.

**(2).** $0 \le x_n$이므로 절댓값 (1)에 의해 $|x_n| = x_n$이고, $1 - |x_n| = n^{-1}$이다. 따라서 $f(x_n) = (1 - n^{-1}) \cdot n = n - 1$이다((K…)). 실수열 $(f(x_n))$이 유계라면 모든 $n$에서 $|n - 1| \le B$인 실수 $B$가 있다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B + 1 < m$인 자연수 $m$이 있고, $0 \le m - 1$이므로 $|m - 1| = m - 1 > B$가 되어 어긋난다(순서 성질 (2)의 (ii)). 따라서 $(f(x_n))$은 [[sequence]]의 뜻으로 유계가 아니고, [[bounded-sequence-in-metric-space]]의 (2)에 의해 보통 거리로 유계가 아니며, 코시 (4)의 대우에 의해 코시 수열이 아니다.

**(3).** *거리이다.* 실수 $x$, $y$, $z$에 대하여 $d'(x, y) = |g(x) - g(y)| \ge 0$이다(절댓값 (2)). $d'(x, y) = 0$인 것은 절댓값 (2)에 의해 정확히 $g(x) = g(y)$일 때이다. $g(x) = g(y)$이면 $g$가 $f$의 역함수이므로 $x = f(g(x)) = f(g(y)) = y$이고, 거꾸로 $x = y$이면 $g(x) = g(y)$이다. 절댓값 (3)에 의해 $d'(x, y) = d'(y, x)$이다. [[triangle-inequality|삼각부등식]]의 (4)에 의해 $|g(x) - g(z)| \le |g(x) - g(y)| + |g(y) - g(z)|$이다. 따라서 $d'$은 거리이다.

*거리를 옮긴다.* [[metric-space-examples]]의 (3)에 의해 $u, v \in I$이면 $d_I(u, v) = |u - v|$이다. 따라서 모든 실수 $x$, $y$에서 $d_I(g(x), g(y)) = d'(x, y)$이고, $u, v \in I$이면 $g(f(u)) = u$, $g(f(v)) = v$이므로 $d'(f(u), f(v)) = d_I(u, v)$이다. 그래서 $g : (\mathbb{R}, d') \to (I, d_I)$와 $f : (I, d_I) \to (\mathbb{R}, d')$은 거리를 바꾸지 않는다. 양의 실수 $\varepsilon$에 $\delta = \varepsilon$으로 두면 두 점의 거리가 $\delta$보다 작을 때 상의 거리도 $\varepsilon$보다 작으므로, [[continuity-in-metric-spaces]]의 (2)에 의해 두 함수는 거리위상에 대하여 연속이다.

*위상이 같다.* $f(g(x)) = x$이므로 항등함수 $i_{\mathbb{R}}$은 합성 $f \circ g$이다. $g : (\mathbb{R}, \mathcal{T}_d) \to (I, \mathcal{T}_{d_I})$는 위상동형사상 $f$의 역함수이므로 [[homeomorphism|위상동형사상]]의 정의에 의해 연속이고, $f : (I, \mathcal{T}_{d_I}) \to (\mathbb{R}, \mathcal{T}_{d'})$은 위 문단에 의해 연속이다. [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $i_{\mathbb{R}} : (\mathbb{R}, \mathcal{T}_d) \to (\mathbb{R}, \mathcal{T}_{d'})$은 연속이고, [[continuous-map|위상공간 사이의 연속함수]]의 (5)에 의해 $\mathcal{T}_{d'} \subseteq \mathcal{T}_d$이다. 거꾸로 $g : (\mathbb{R}, \mathcal{T}_{d'}) \to (I, \mathcal{T}_{d_I})$는 위 문단에 의해 연속이고 $f : (I, \mathcal{T}_{d_I}) \to (\mathbb{R}, \mathcal{T}_d)$는 위상동형사상이라 연속이므로, 같은 방식으로 $i_{\mathbb{R}} : (\mathbb{R}, \mathcal{T}_{d'}) \to (\mathbb{R}, \mathcal{T}_d)$가 연속이고 $\mathcal{T}_d \subseteq \mathcal{T}_{d'}$이다. 두 포함에 의해 $\mathcal{T}_{d'} = \mathcal{T}_d$이다.

*$(\mathbb{R}, d')$은 완비가 아니다.* $(\mathbb{R}, d)$는 완비 (2)에 의해 완비이다. $y_n = n$으로 두자. $0 < n$이므로 $g(n) = n(1 + n)^{-1}$이고 $|g(n) - 1| = (n + 1)^{-1} \le n^{-1}$이다(순서 성질 (6)의 (ii)). [[comparison-with-null-sequence]]의 (3)과 [[basic-limits]]의 (2)에 의해 실수열 $(g(n))$은 $1$로 수렴하고, 코시 (3)에 의해 보통 거리로 코시이다. 모든 $n$, $k$에서 $d'(n, k) = |g(n) - g(k)|$이므로 $(y_n)$은 $d'$으로 코시이다.

$(y_n)$이 $(\mathbb{R}, d')$에서 어떤 실수 $p$로 수렴한다고 하자. 수렴 (1)에 의해 모든 양의 실수 $\varepsilon$에 대하여 $n \ge M$이면 $|g(n) - g(p)| = d'(n, p) < \varepsilon$인 자연수 $M$이 있으므로, 실수열 $(g(n))$은 $g(p)$로 수렴한다. 극한의 유일성(위와 같이 [[limit-unique-in-hausdorff]]의 (1))에 의해 $g(p) = 1$인데, $g(p) \in I$이므로 $g(p) < 1$이어서 어긋난다. 따라서 $(\mathbb{R}, d')$은 완비가 아니다.

$(y_n)$은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 보통 거리로 유계가 아니므로([[bounded-sequence-in-metric-space]]의 (2)) 코시 (4)의 대우에 의해 $d$로 코시가 아니다.

**(4).** 그런 $c$, $c'$이 있다면 완비 (5)에 의해 $(\mathbb{R}, d)$가 완비인 것과 $(\mathbb{R}, d')$이 완비인 것이 같아야 하는데, (3)에 의해 앞의 것만 성립하므로 어긋난다.
:::

## 예시와 반례

:::example[위상을 보존하는 성질과 그렇지 않은 성질]
$I = (-1, 1)$과 $\mathbb{R}$은 위상동형이므로 위상만으로 정해지는 성질은 둘이 같이 갖거나 같이 갖지 않습니다. 예컨대 수열이 어느 점으로 수렴하는지는 위상의 말로 정의되므로, $I$의 수열 $(u_n)$이 $u \in I$로 수렴하는 것은 정확히 $(f(u_n))$이 $f(u)$로 수렴할 때입니다([[continuity-preserves-convergence|연속함수와 수열의 수렴]]의 (2)를 연속함수 $f$와 $g$에 씁니다). 반면 코시 수열인지, 공간이 완비인지는 (1)과 (2)가 보이듯 $f$로 옮겨지지 않습니다.
:::

:::counterexample[거리를 바꾸면 유계도 달라질 수 있다]
(3)의 $d'$으로는 $\mathbb{R}$ 전체가 유계입니다. 모든 실수 $x$에서 $g(x) \in I$이므로 $d'(x, 0) = |g(x) - g(0)| = |g(x)| < 1$이고, $\mathbb{R} \subseteq B_{d'}(0, 1)$입니다. 그러나 보통 거리 $d$로는 $\mathbb{R}$이 유계가 아닙니다(위 증명의 수열 $(y_n)$). 그래서 같은 위상을 주는 두 거리에서 유계인 집합도 다를 수 있습니다.
:::

## 확인 질문

:::check[위상동형사상 $f : I \to \mathbb{R}$로 옮겨도 코시 수열이 코시 수열로 가는 경우가 있는가?]
있습니다. 예컨대 모든 항이 $0$인 상수 수열은 $I$의 코시 수열이고, $f(0) = 0$이므로 그 상도 모든 항이 $0$인 상수 수열이어서 코시 수열입니다(상수 수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 수렴하고 [[cauchy-sequence-in-metric-space]]의 (3)에 의해 코시 수열입니다). (2)는 "늘 그렇지는 않다"는 것이지 "늘 그렇지 않다"는 것이 아닙니다.
:::

:::check[$(\mathbb{R}, d')$에서 $n$번째 항이 $-n$인 수열은 코시 수열인가? 수렴하는가?]
코시 수열이지만 수렴하지 않습니다. $g(-n) = -n(1 + n)^{-1} = -g(n)$이므로 $d'(-n, -k) = |g(n) - g(k)| = d'(n, k)$이고, (3)에 의해 $d'$으로 코시입니다. 어떤 $p$로 수렴한다면 (3)의 증명과 같이 실수열 $(g(-n))$이 $g(p)$로 수렴해야 하는데, 이 실수열은 $-1$로 수렴하므로 $g(p) = -1$이 되어 $g(p) \in I$에 어긋납니다.
:::
