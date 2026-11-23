---
title: 콤팩트 거리공간 위의 연속 사상은 고르게 연속이다
title_en: Continuous Maps on Compact Metric Spaces Are Uniformly Continuous
aliases: [콤팩트 위의 연속은 고른 연속, continuous on compact implies uniformly continuous]
kind: theorem
field: topology
msc: ["54E45", "54C05"]
level: undergrad
summary: 콤팩트 거리공간에서 거리공간으로 가는 연속 사상은 고르게 연속이다. 증명은 열린 공의 역상으로 된 덮개에 르베그 수 보조정리를 쓴다. 콤팩트 부분집합의 점과 그 가까이의 점에도 하나의 δ 가 통하고, 닫힌구간 위의 연속함수가 고르게 연속이라는 해석학 입문의 정리를 다시 얻는다.
requires: [set, subset, function, image-and-preimage, family-of-sets, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, interval, power-of-a-real-number, real-valued-function, continuous-function, power-function-is-continuous, uniform-continuity, continuous-on-closed-interval-is-uniformly-continuous, metric-space, metric-space-examples, open-ball, open-ball-is-open, topology-examples, standard-topology-on-reals, metric-subspace-topology, open-and-closed-sets-of-reals, continuous-map, continuity-agrees-with-analysis, compact-space, closed-interval-is-compact, compact-metric-closed-and-bounded, compact-metric-space-sequences, lebesgue-number-lemma, uniformly-continuous-map]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.5.4소절 Uniform continuity 의 Definition 7.5.10, Theorem 7.5.11 과 그 증명 (p.291); 3.4.1소절 Example 3.4.2 (p.138), Theorem 3.4.4 (p.139)"
    checked: original
    note: "출처 Theorem 7.5.11(p.291)은 거리공간 X, Y 에서 f : X → Y 가 연속이고 X 가 콤팩트이면 f 가 고르게 연속이라고 진술한다. 이 항목의 (1)은 같은 진술이다. 출처의 증명은 점 c 마다 d_Y(f(x), f(c)) < ε/2 가 B(c, δ_c) 에서 성립하는 δ_c 를 잡고, 공 B(c, δ_c) 들의 덮개에 르베그 덮개 보조정리를 쓴다. 이 항목은 점마다 δ_c 를 잡지 않고 식으로 정한 덮개 {f⁻¹(B_Y(y, ε/2)) : y ∈ Y} 에 lebesgue-number-lemma 를 쓴다. 마지막의 삼각부등식 단계(ε/2 + ε/2)는 출처와 같다. 출처 Definition 7.5.10(p.291)의 고른 연속은 uniformly-continuous-map 의 정의와 같다. (2)의 콤팩트 부분집합 꼴은 이 항목이 덧붙인 것이다. (3)은 출처 3장의 Theorem 3.4.4(p.139: [a, b] 위의 연속함수는 고르게 연속이다)와 같은 진술이고, 출처는 그것을 수열과 볼차노–바이어슈트라스 정리로 증명한다. 예시 '콤팩트 집합 근처에서 통하는 δ' 의 함수 x² 는 출처 Example 3.4.2(p.138: [0, 1] 위의 x² 는 고르게 연속이고 ℝ 위의 x² 는 고르게 연속이 아니다)와 같은 함수이고, 그 예시의 δ 를 정하는 계산(|x² − c²| = |x + c||x − c|)도 같은 발상이다. 반례 '콤팩트가 아니어도 고르게 연속일 수 있다'가 쓰는 '이산 거리의 무한집합은 콤팩트가 아니다'는 출처 연습문제 7.4.3 b)(p.285)와 Example 7.4.15 (iii)(p.285)의 내용이다. 첫째 확인 질문이 쓰는 '두 콤팩트 집합의 합집합은 콤팩트'는 출처 연습문제 7.4.4 a)(p.285)이다. 둘째 확인 질문의 함수(0 을 뺀 실수에서 음수는 0, 양수는 1 로 보내는 연속함수)는 출처 연습문제 7.5.1 b)(p.293: 연결되지 않은 X 에서 ℕ 으로 가는 상수가 아닌 연속함수를 찾아라)와 같은 발상의 함수이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 근거 없던 설명 문장 5건, 틀린 인용 번호 2건, 메모의 쪽 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 부분공간 거리 $d_K$는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B_X(x, r)$, $B_Y(y, r)$는 [[open-ball]]의 것이다. 거리공간에는 거리위상을 주고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이며, 고른 연속과 제한 $f|_K$는 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이다. 콤팩트 부분집합은 [[compact-space]]의 것이고, 거리공간이 콤팩트라는 것은 [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 머리에서 정한 뜻이다. 아래에서 $(X, d_X)$와 $(Y, d_Y)$는 거리공간이다.

1. (콤팩트 거리공간 위의 연속 사상) $(X, d_X)$가 콤팩트이고 $f : X \to Y$가 연속이면 $f$는 고르게 연속이다.
2. (콤팩트 부분집합 근처) $K$가 $X$의 콤팩트 부분집합이고 $f : X \to Y$가 연속이면, 모든 실수 $\varepsilon > 0$에 대하여 실수 $\delta > 0$이 있어, $p \in K$, $q \in X$이고 $d_X(p, q) < \delta$인 모든 $p$, $q$에서 $d_Y(f(p), f(q)) < \varepsilon$이다. 특히 제한 $f|_K : (K, d_K) \to Y$는 고르게 연속이다.
3. (닫힌구간 위의 연속함수) $a < b$인 실수 $a$, $b$에 대하여, 실함수 $f : [a, b] \to \mathbb{R}$가 해석학 입문의 [[continuous-function|연속함수]]이면 $f$는 [[uniform-continuity|고른 연속]]의 뜻으로 고르게 연속이다. 이것은 해석학 입문의 [[continuous-on-closed-interval-is-uniformly-continuous|닫힌구간 위의 연속함수는 고르게 연속이다]]의 (1)이고, 여기서는 그 정리를 쓰지 않고 [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]와 (1)로 얻는다.
:::

:::english
Metric spaces and the subspace metric $d_K$ are as in the entries on metric spaces and their examples, and open balls $B_X(x, r)$, $B_Y(y, r)$ as in the entry on open balls. Metric spaces carry the metric topology; continuity is as in the entry on continuous maps between topological spaces, and uniform continuity and the restriction $f|_K$ as in the entry on uniformly continuous maps between metric spaces. Compact subsets are as in the entry on open covers and compact spaces, and a metric space is compact in the sense fixed at the head of the entry on sequences in compact metric spaces. Below, $(X, d_X)$ and $(Y, d_Y)$ are metric spaces.

1. (Continuous maps on a compact metric space) If $(X, d_X)$ is compact and $f : X \to Y$ is continuous, then $f$ is uniformly continuous.
2. (Near a compact subset) If $K$ is a compact subset of $X$ and $f : X \to Y$ is continuous, then for every real number $\varepsilon > 0$ there is a real number $\delta > 0$ such that $d_Y(f(p), f(q)) < \varepsilon$ for all $p \in K$ and $q \in X$ with $d_X(p, q) < \delta$. In particular, the restriction $f|_K : (K, d_K) \to Y$ is uniformly continuous.
3. (Continuous functions on a closed interval) For real numbers $a < b$, if a real function $f : [a, b] \to \mathbb{R}$ is continuous in the sense of the analysis course, then $f$ is uniformly continuous in the sense of the entry on uniform continuity. This is (1) of the analysis course's theorem that continuous functions on a closed interval are uniformly continuous; here it is obtained without that theorem, from the compactness of closed intervals and (1).
:::

## 직관

연속이라는 것은 점마다 "그 점에서 $\delta$ 안에 있으면 값이 $\varepsilon$ 안에 있다"는 $\delta$가 있다는 것이고, 그 $\delta$는 점마다 다를 수 있습니다. 고른 연속은 모든 점에 한꺼번에 통하는 $\delta$가 있다는 것입니다. 점마다의 $\delta$들 가운데 가장 작은 것을 잡으면 될 것 같지만, 점이 무한히 많으면 가장 작은 것이 없거나 $0$으로 내려갈 수 있습니다. 2단원의 [[uniformly-continuous-map|고르게 연속인 사상]]의 반례 "점 1/n 들 위의 x⁻¹"이 그런 예입니다.

콤팩트 공간에서는 [[lebesgue-number-lemma|르베그 수 보조정리]]가 이 일을 합니다. 값의 공간 $Y$의 점 $y$마다 $f$의 값이 $y$에서 $\varepsilon/2$ 안에 드는 점들의 집합 $f^{-1}(B_Y(y, \varepsilon/2))$를 생각하면, 이 집합들은 열린집합이고 정의역을 덮습니다. 르베그 수 $\delta$는 어느 점에서든 반지름 $\delta$인 공이 그 가운데 하나에 통째로 들어가게 해 주므로, 거리가 $\delta$보다 가까운 두 점의 값은 같은 $y$에서 $\varepsilon/2$ 안에 있고 서로 $\varepsilon$ 안에 있습니다. 덮개는 $y$로 이름 붙인 식으로 정해지므로 점마다 무엇을 고르는 단계가 없습니다.

거꾸로 고르게 연속인 사상의 정의역이 콤팩트일 필요는 없습니다. 무한집합에 이산 거리를 주면 콤팩트가 아니지만 그 위의 모든 사상은 고르게 연속입니다(아래 반례).

## 증명

:::idea
$\varepsilon$에 대하여 덮개 $\{f^{-1}(B_Y(y, \varepsilon/2)) : y \in Y\}$의 $K$에 대한 르베그 수를 $\delta$로 잡는다.
:::

:::hint
$p \in K$이고 $d_X(p, q) < \delta$이면 $p$와 $q$가 모두 $B_X(p, \delta)$에 들고, 그 공은 어떤 $f^{-1}(B_Y(y, \varepsilon/2))$에 들어 있습니다. 거리의 삼각부등식을 $f(p)$, $y$, $f(q)$에 씁니다.
:::

:::proof
"순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이며, 실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고 "계산"이라고만 적는다. 역상 $f^{-1}(V)$는 [[image-and-preimage|상과 역상]]의 것이다.

**(2).** 실수 $\varepsilon > 0$을 잡는다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. $Y$의 점 $y$마다 $X$의 부분집합 $f^{-1}(B_Y(y, \varepsilon/2))$가 식으로 정해지므로, [[family-of-sets]]의 식으로 정한 집합족
$$
\mathcal{U} = \{f^{-1}(B_Y(y, \varepsilon/2)) : y \in Y\}
$$
는 $X$의 집합족이다. [[open-ball-is-open|열린 공은 열린집합이다]]의 (1)과 [[topology-examples]]의 (4)에 의해 $B_Y(y, \varepsilon/2)$는 $Y$의 거리위상의 원소이고, $f$가 연속이므로 [[continuous-map]]의 정의에 의해 그 역상은 $X$의 거리위상의 원소, 곧 $(X, d_X)$에서 열린집합이다. 따라서 $\mathcal{U}$는 $(X, d_X)$의 열린집합들의 집합족이다. $p \in K$이면 [[open-ball]]의 (1)에 의해 $f(p) \in B_Y(f(p), \varepsilon/2)$이므로 $p \in f^{-1}(B_Y(f(p), \varepsilon/2))$이고, [[family-of-sets]]의 (9)에 의해 $p \in \bigcup \mathcal{U}$이다. 곧 $K \subseteq \bigcup \mathcal{U}$이다.

$K$가 콤팩트 부분집합이므로 [[lebesgue-number-lemma|르베그 수 보조정리]]의 (1)에 의해 $K$에 대한 $\mathcal{U}$의 르베그 수 $\delta > 0$이 있다. $p \in K$, $q \in X$이고 $d_X(p, q) < \delta$라 하자. 르베그 수의 정의에 의해 $B_X(p, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있고, $\mathcal{U}$의 정의에 의해 $U = f^{-1}(B_Y(y, \varepsilon/2))$인 $y \in Y$가 있다. 열린 공의 정의와 [[open-ball]]의 (1)에 의해 $p$와 $q$는 $B_X(p, \delta)$에 들므로 $U$에 들고, 역상의 정의에 의해 $f(p)$와 $f(q)$는 $B_Y(y, \varepsilon/2)$에 든다. 곧 $d_Y(y, f(p)) < \varepsilon/2$이고 $d_Y(y, f(q)) < \varepsilon/2$이다. 거리의 삼각부등식과 조건 (iii)에 의해
$$
\begin{aligned}
&d_Y(f(p), f(q)) \\
&\quad \le d_Y(f(p), y) + d_Y(y, f(q)) \\
&\quad = d_Y(y, f(p)) + d_Y(y, f(q))
\end{aligned}
$$
이고, 순서 성질 (2)의 (iv), (1)의 (v)와 계산에 의해 $d_Y(f(p), f(q)) < \varepsilon/2 + \varepsilon/2 = \varepsilon$이다.

끝 문장: [[metric-space-examples]]의 (3)에 의해 $p$, $q \in K$이면 $d_K(p, q) = d_X(p, q)$이고, 제한의 정의에 의해 $f|_K(p) = f(p)$, $f|_K(q) = f(q)$이다. 따라서 위의 $\delta$로 $p$, $q \in K$이고 $d_K(p, q) < \delta$이면 $d_Y(f|_K(p), f|_K(q)) < \varepsilon$이고, [[uniformly-continuous-map|고르게 연속인 사상]]의 정의에 의해 $f|_K$는 고르게 연속이다.

**(1).** [[compact-space]]의 콤팩트 집합 단락에 의해 $X$는 $X$의 콤팩트 부분집합이다. (2)를 $K = X$에 쓰면, 모든 $\varepsilon > 0$에 대하여 $\delta > 0$이 있어 $p$, $q \in X$이고 $d_X(p, q) < \delta$이면 $d_Y(f(p), f(q)) < \varepsilon$이다. 이것이 고른 연속의 정의이다.

**(3).** $S = [a, b]$에 보통 거리의 부분공간 거리 $d_S$를 준다. [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 $S$는 보통 위상의 $\mathbb{R}$의 콤팩트 부분집합이고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상은 보통 거리의 거리위상이다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (3)의 끝 문장에 의해 $(S, d_S)$는 콤팩트 거리공간이다. $f$가 해석학 입문의 연속함수이므로 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (2)를 $T = \mathbb{R}$에 쓰면(같은 항목의 (3)에 의해 $\mathbb{R}$의 부분공간 거리 $d_{\mathbb{R}}$은 보통 거리 자신이다) $f : (S, d_S) \to \mathbb{R}$는 연속이다. (1)에 의해 $f$는 고르게 연속인 사상이고, [[uniformly-continuous-map|고르게 연속인 사상]]의 (3)에 의해 실함수 $f$는 [[uniform-continuity|고른 연속]]의 뜻으로 고르게 연속이다.
:::

## 예시와 반례

:::example[콤팩트 집합 근처에서 통하는 δ]
$x$에서의 값이 $x^2$인 $f : \mathbb{R} \to \mathbb{R}$(보통 거리)와 $K = [-1, 1]$을 봅시다. [[power-function-is-continuous|거듭제곱 함수의 연속]]의 (1)과 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f$는 연속이고, [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 $K$는 콤팩트 부분집합이므로 (2)가 적용됩니다. 여기서는 그 $\delta$를 식으로 적을 수 있습니다.

실수 $\varepsilon > 0$에 대하여 $\delta = \min\{1, \varepsilon/3\}$으로 둡니다([[absolute-value]]의 (10)에 의해 $\delta$는 양수이고 $\delta \le 1$, $\delta \le \varepsilon/3$). $p \in K$, $q \in \mathbb{R}$이고 $|p - q| < \delta$라 합시다. [[absolute-value]]의 (7)에 의해 $|p| \le 1$이고, [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|q| \le |p| + |q - p| < 1 + 1 = 2$이며, 다시 $|p + q| \le |p| + |q| < 3$입니다. [[power-of-a-real-number]]의 (1)에 의해 $p^2 = pp$, $q^2 = qq$이므로 계산에 의해 $p^2 - q^2 = (p - q)(p + q)$이고, [[absolute-value]]의 (4)에 의해
$$
\begin{aligned}
|p^2 - q^2| &= |p - q|\,|p + q| \\
&< \frac{\varepsilon}{3} \cdot 3 = \varepsilon
\end{aligned}
$$
입니다([[order-properties-of-reals]]의 (11)의 (ii)). $q$는 $K$ 밖의 점이어도 되지만, $p$를 $K$ 안에 두었기 때문에 $|p + q|$를 $3$으로 누를 수 있었습니다.
:::

:::counterexample[콤팩트가 아니어도 고르게 연속일 수 있다]
$X$가 무한집합이고 $d_X$가 이산 거리이면, [[uniformly-continuous-map|고르게 연속인 사상]]의 (7)에 의해 모든 사상 $f : X \to Y$는 고르게 연속입니다. 그러나 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (4)에 의해 $(X, d_X)$는 콤팩트가 아닙니다. 그래서 (1)의 거꾸로, 곧 "어떤 공간 위의 연속 사상이 모두 고르게 연속이면 그 공간은 콤팩트이다"는 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}$의 부분집합 $K = \{x : 0 \le x \le 1\} \cup \{x : 2 \le x \le 3\}$에 부분공간 거리를 주면, 연속함수 $f : K \to \mathbb{R}$는 고르게 연속인가?]
그렇습니다. [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 두 닫힌구간은 콤팩트 부분집합이고, [[compact-space]]의 (6)에 의해 그 합집합 $K$도 콤팩트 부분집합입니다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (3)의 끝 문장에 의해 $(K, d_K)$는 콤팩트 거리공간이므로 (1)에 의해 $f$는 고르게 연속입니다. $K$는 구간이 아니므로 해석학 입문의 닫힌구간 정리는 이 경우를 직접 다루지 않습니다.
:::

:::check[공역이 콤팩트이면 정의역이 콤팩트가 아니어도 연속 사상은 고르게 연속인가?]
그렇지 않을 수 있습니다. $X = \{x \in \mathbb{R} : x \ne 0\}$에 보통 거리의 부분공간 거리를, $Y = \{0, 1\}$에 이산 거리를 주고, $x < 0$이면 $f(x) = 0$, $0 < x$이면 $f(x) = 1$로 둡니다($Y$는 유한집합이므로 [[compact-space]]의 (8)의 (ii)에 의해 콤팩트입니다). $N = \{x \in X : x < 0\}$, $P = \{x \in X : 0 < x\}$는 [[open-and-closed-sets-of-reals]]의 (1)과 [[metric-subspace-topology]]의 (1)에 의해 $X$에서 열린집합이고, $Y$의 부분집합의 역상은 $\emptyset$, $N$, $P$, $X$ 가운데 하나이므로 $f$는 연속입니다. 그러나 $\varepsilon = 1$에서 어떤 $\delta > 0$을 잡아도 $p = -\delta/3$, $q = \delta/3$은 $X$의 점이고 $d_X(p, q) = 2\delta/3 < \delta$인데 $d_Y(f(p), f(q)) = 1$이므로, [[uniformly-continuous-map|고르게 연속인 사상]]의 (1)에 의해 $f$는 고르게 연속이 아닙니다. (1)에서 콤팩트여야 하는 것은 정의역입니다.
:::
