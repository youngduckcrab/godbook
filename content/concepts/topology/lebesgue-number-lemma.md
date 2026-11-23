---
title: 르베그 수 보조정리
title_en: Lebesgue Number Lemma
aliases: [르베그 수, Lebesgue number, 르베그 덮개 보조정리, Lebesgue covering lemma, Lebesgue's number lemma]
kind: lemma
field: topology
msc: ["54E45", "54D30"]
level: undergrad
summary: 거리공간의 콤팩트 부분집합을 덮는 열린집합들의 족에는 양수 δ 가 있어, 그 집합의 모든 점에서 반지름 δ 인 열린 공이 족의 한 원소에 들어간다. 이 δ 를 르베그 수라 하고, 더 작은 양수도 르베그 수이며, 지름이 δ 보다 작은 집합은 족의 한 원소에 들어간다. 이산 거리에서는 콤팩트가 아니어도 르베그 수가 있고, 콤팩트가 아닌 실수의 부분공간에는 르베그 수가 없는 덮개가 있을 수 있다.
requires: [set, subset, set-operations, power-set, family-of-sets, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-ball-is-open, topology-examples, metric-subspace-topology, open-and-closed-sets-of-reals, compact-metric-closed-and-bounded, compact-space, diameter]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.2소절 Compactness 의 Lemma 7.4.10 과 그 증명, 뒤 문단, 각주 (p.282), Theorem 7.4.11 의 증명 (p.283), Example 7.4.15 (iv) (p.285); 7.4.3소절 연습문제 7.4.13 (p.286)"
    checked: original
    note: "출처 Lemma 7.4.10(Lebesgue covering lemma, p.282)은 거리공간 X 의 부분집합 K 의 모든 수열이 K 에서 수렴하는 부분수열을 가지면, K 의 열린 덮개 {U_λ} 마다 δ > 0 이 있어 K 의 모든 점 x 에 B(x, δ) ⊆ U_λ 인 λ 가 있다고 진술한다. 공 B(x, δ) 는 X 의 공이다. 이 항목의 (1)은 같은 결론을 가정 'K 가 콤팩트'에서 얻는다. 출처의 증명은 대우로, n 마다 B(x_n, 1/n) 이 어떤 U_λ 에도 들지 않는 x_n ∈ K 를 잡아 수열을 만든다. 이 항목은 수열을 만들지 않고 '하나의 δ 가 통하는 집합' 전체의 집합족에 compact-space 의 (1)을 쓴다. 두 δ 를 합칠 때 두 수의 min 을 쓰는 것과, 공 B(y, ε/2) ⊆ B(x, ε) 를 거리의 삼각부등식으로 얻는 단계는 출처의 증명에도 있다. 출처의 각주(p.282)는 δ 를 덮개의 Lebesgue number 라 부르기도 한다고 적고, 이 항목은 그 이름을 쓴다. 출처는 Theorem 7.4.11 의 증명(p.283)에서 이 보조정리를 쓴다. 출처는 보조정리 뒤 문단에서 K = [−10, 10] 과 덮개 U_n = (n, n + 2) 에서 δ = 1/2 이 통하고, 덮개 (n/2, (n + 2)/2) 에서는 통하는 가장 큰 δ 가 1/4 라고 적는다. 예시 '구간을 덮는 두 열린집합'은 같은 발상(구간의 덮개에서 통하는 가장 큰 δ 를 찾는다)이다. (5)의 (i)은 출처 Example 7.4.15 (iv)(p.285: 이산 거리의 무한집합에서 보조정리의 결론은 예컨대 δ = 1/2 로 늘 성립하고, 콤팩트가 아닌 K 에서도 그렇다)와 같은 내용이다. 반례 '공을 어느 공간에서 재는지에 따라 달라질 수 있다'의 첫째 단락은 출처 연습문제 7.4.13(p.286: 보통 거리의 ℕ ⊆ ℝ 에서 보조정리의 결론이 성립하지 않는 열린 덮개를 찾으라)과 같은 대상이고, 출처가 보조정리 뒤 문단에서 ℕ ⊆ ℝ 이 sequentially compact 가 아니라고 적는 것과도 같은 대상이다."
  - ref: fuglede-basic-topology
    loc: "Proofs of lifting lemmas 소절, 점과 집합의 거리와 지름 (content/homotopy.tex:398–405), Lemma lebesgue-number-lemma (406–409)와 그 증명 (410–424)"
    checked: original
    note: "출처는 콤팩트 거리공간 (X, d) 의 열린 덮개 𝒰 에 δ > 0 이 있어 지름이 δ 보다 작은 모든 부분집합 A 가 𝒰 의 한 원소에 포함된다고 진술하고 δ 를 Lebesgue number 라 부른다(406–409). 이 항목은 르베그 수를 공의 꼴로 정의하고, 출처의 지름의 꼴은 (3)에서 공집합이 아니고 유계인 집합에 대해 진술한다(diameter 는 공집합에 정의하지 않는다). 출처의 증명(410–424)은 X ∈ 𝒰 이면 아무 δ 나 된다고 한 뒤, 유한 부분덮개 U_1, …, U_n 과 C_i = X − U_i 로 함수 f(x) = (1/n)Σ d(x, C_i) 를 만들고 그 최솟값을 δ 로 잡는다. 이 항목의 (4)의 (ii)는 출처의 첫 문장과 같은 내용이다. 이 항목의 증명은 유한 합, 점과 집합의 거리, 연속함수의 최솟값을 쓰지 않는다. 출처는 지름 꼴의 증명에서 a ∈ A 이면 A ⊆ B_d(a, δ) 라고 적고(419), (3)의 증명도 diameter 의 (2)의 (v)로 같은 단계를 밟는다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 근거 없던 설명 문장 5건, 틀린 인용 번호 2건, 메모의 쪽 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예, 부분공간 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$와 $B_Y(x, r)$는 [[open-ball]]의 것이며, $(X, d)$에서 열린집합은 [[open-set-in-metric-space]]의 것이다. 거리공간에는 거리위상 $\mathcal{T}_d$([[topology-examples]]의 (4))를 주고, 열린 덮개와 콤팩트 부분집합은 [[compact-space]]의 것이며, 거리공간이 콤팩트라는 것은 $(X, \mathcal{T}_d)$가 콤팩트 공간이라는 뜻이다. 집합족과 그 합집합은 [[family-of-sets]]의 것이고, 유계와 지름 $\operatorname{diam}$은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]와 [[diameter]]의 것이다. 아래에서 $(X, d)$는 거리공간이고, $K \subseteq X$이며, $\mathcal{U}$는 $(X, d)$의 열린집합들의 집합족으로서 $K \subseteq \bigcup \mathcal{U}$인 것이다.

**르베그 수.** 실수 $\delta > 0$이 **$K$에 대한 $\mathcal{U}$의 르베그 수**(Lebesgue number)인 것은 정확히 $K$의 모든 점 $x$에 대하여 $B(x, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있을 때이다. 여기서 $B(x, \delta)$는 $X$의 공이다. $K = X$이면, 곧 $\mathcal{U}$가 $X$의 열린 덮개이면, 줄여서 **$\mathcal{U}$의 르베그 수**라 한다.

1. (르베그 수 보조정리) $K$가 $X$의 콤팩트 부분집합이면 $K$에 대한 $\mathcal{U}$의 르베그 수가 있다. 특히 $(X, d)$가 콤팩트이면 $X$의 모든 열린 덮개는 르베그 수를 갖는다.
2. (더 작은 수) $\delta$가 $K$에 대한 $\mathcal{U}$의 르베그 수이고 $0 < \delta' \le \delta$이면 $\delta'$도 $K$에 대한 $\mathcal{U}$의 르베그 수이다.
3. (지름 꼴) $\delta$가 $K$에 대한 $\mathcal{U}$의 르베그 수이고, $S \subseteq X$가 공집합이 아니고 유계이며 $\operatorname{diam} S < \delta$이고 $S \cap K \ne \emptyset$이면, $S \subseteq U$인 $U \in \mathcal{U}$가 있다. 특히 $\delta$가 $X$의 열린 덮개 $\mathcal{U}$의 르베그 수이면, 공집합이 아니고 유계이며 지름이 $\delta$보다 작은 $X$의 모든 부분집합은 $\mathcal{U}$의 한 원소에 포함된다.
4. (늘 성립하는 경우)
   - (i) $K = \emptyset$이면 모든 실수 $\delta > 0$이 $K$에 대한 $\mathcal{U}$의 르베그 수이다. 특히 $X = \emptyset$이면 그렇다.
   - (ii) $X \in \mathcal{U}$이면 모든 실수 $\delta > 0$이 $K$에 대한 $\mathcal{U}$의 르베그 수이다.
5. (예)
   - (i) (이산 거리) $d$가 $X$ 위의 이산 거리이면 $0 < \delta \le 1$인 모든 실수 $\delta$가 $K$에 대한 $\mathcal{U}$의 르베그 수이다. 따라서 $X$가 무한집합이어서 $(X, d)$가 콤팩트가 아니어도 $X$의 모든 열린 덮개는 르베그 수를 갖는다.
   - (ii) (르베그 수가 없는 덮개) $\mathbb{R}$의 부분집합 $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리 $d_Y$를 주고, 자연수 $n$마다 $U_n = \{x \in Y : n^{-1} < x\}$로 두자. 그러면 $\{U_n : n \in \mathbb{N}\}$은 $(Y, d_Y)$의 열린 덮개이고 르베그 수를 갖지 않는다.
:::

:::english
Metric spaces, their examples and subspace metrics are as in the entries on metric spaces and their examples, open balls $B(x, r)$ and $B_Y(x, r)$ as in the entry on open balls, and open sets in $(X, d)$ as in the entry on open sets in a metric space. Metric spaces carry the metric topology $\mathcal{T}_d$; open covers and compact subsets are as in the entry on open covers and compact spaces, and a metric space is compact when $(X, \mathcal{T}_d)$ is a compact space. Families of sets and their unions are as in the entry on families of sets, and boundedness and the diameter $\operatorname{diam}$ are as in the entries on compact sets in metric spaces and on the diameter. Below, $(X, d)$ is a metric space, $K \subseteq X$, and $\mathcal{U}$ is a family of open sets of $(X, d)$ with $K \subseteq \bigcup \mathcal{U}$.

**Lebesgue number.** A real number $\delta > 0$ is a **Lebesgue number of $\mathcal{U}$ for $K$** exactly when for every point $x$ of $K$ there is a $U \in \mathcal{U}$ with $B(x, \delta) \subseteq U$. Here $B(x, \delta)$ is a ball of $X$. When $K = X$, that is, when $\mathcal{U}$ is an open cover of $X$, we simply say a **Lebesgue number of $\mathcal{U}$**.

1. (Lebesgue number lemma) If $K$ is a compact subset of $X$, then $\mathcal{U}$ has a Lebesgue number for $K$. In particular, if $(X, d)$ is compact, then every open cover of $X$ has a Lebesgue number.
2. (Smaller numbers) If $\delta$ is a Lebesgue number of $\mathcal{U}$ for $K$ and $0 < \delta' \le \delta$, then $\delta'$ is also a Lebesgue number of $\mathcal{U}$ for $K$.
3. (Diameter form) If $\delta$ is a Lebesgue number of $\mathcal{U}$ for $K$, and $S \subseteq X$ is nonempty and bounded with $\operatorname{diam} S < \delta$ and $S \cap K \ne \emptyset$, then there is a $U \in \mathcal{U}$ with $S \subseteq U$. In particular, if $\delta$ is a Lebesgue number of an open cover $\mathcal{U}$ of $X$, then every nonempty bounded subset of $X$ of diameter less than $\delta$ is contained in a member of $\mathcal{U}$.
4. (Cases where it always holds)
   - (i) If $K = \emptyset$, then every real number $\delta > 0$ is a Lebesgue number of $\mathcal{U}$ for $K$. In particular this is so when $X = \emptyset$.
   - (ii) If $X \in \mathcal{U}$, then every real number $\delta > 0$ is a Lebesgue number of $\mathcal{U}$ for $K$.
5. (Examples)
   - (i) (Discrete metric) If $d$ is the discrete metric on $X$, then every real number $\delta$ with $0 < \delta \le 1$ is a Lebesgue number of $\mathcal{U}$ for $K$. Hence even when $X$ is infinite, so that $(X, d)$ is not compact, every open cover of $X$ has a Lebesgue number.
   - (ii) (A cover without a Lebesgue number) Give the subset $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$ of $\mathbb{R}$ the subspace metric $d_Y$ of the standard metric, and for each natural number $n$ let $U_n = \{x \in Y : n^{-1} < x\}$. Then $\{U_n : n \in \mathbb{N}\}$ is an open cover of $(Y, d_Y)$ with no Lebesgue number.
:::

## 직관

열린 덮개는 점마다 그 점을 품은 열린집합이 있다는 것만 보장합니다. 점 $x$를 품은 열린집합 안에 $x$를 중심으로 한 공이 들어가지만, 그 공의 반지름은 점마다 다를 수 있습니다. 르베그 수는 모든 점에 한꺼번에 통하는 반지름입니다. 어느 점을 중심으로 잡아도 반지름 $\delta$인 공은 덮개의 한 원소 안에 통째로 들어갑니다.

비유하자면 덮개의 원소는 지붕이고 공은 우산을 편 자리입니다. 르베그 수는 "어디에 서든 이 크기의 우산을 펴면 한 지붕 아래에 다 들어간다"는 크기입니다. "어디에 서든"이 "$K$의 모든 점 $x$에 대하여"이고, "한 지붕"이 "어떤 $U \in \mathcal{U}$"입니다. 지붕 사이의 이음매 근처에서 우산이 두 지붕에 걸치지 않으려면 우산이 작아야 하고, 콤팩트성은 그런 이음매들이 유한 개로 충분하다는 것을 보장해서 모든 자리에 통하는 크기를 줍니다.

이 항목은 점마다 반지름을 하나씩 고르지 않습니다. "어떤 하나의 $\delta$가 그 집합의 모든 점에서 통하는" 부분집합 전체를 집합족으로 놓으면, 두 집합의 $\delta$ 가운데 작은 것이 두 집합의 합집합에서 통하므로 이 집합족은 두 원소의 합집합에 닫혀 있습니다. $K$의 점마다 그런 열린 공이 있으므로 [[compact-space|유한 합집합의 보조정리]]가 $K$ 전체에 통하는 $\delta$를 줍니다.

거꾸로 르베그 수가 있다고 해서 콤팩트인 것은 아닙니다. 이산 거리에서는 반지름 $1$ 이하의 공이 한 점뿐이어서, 공간이 무한집합이어도 모든 열린 덮개가 르베그 수를 갖습니다((5)의 (i)).

## 증명

:::idea
"하나의 $\delta$가 그 집합과 $K$의 공통점 모두에서 통하는" $X$의 부분집합 전체의 집합족이 두 원소의 합집합에 닫혀 있음을 두 수의 최소로 보이고, $K$의 점마다 그런 열린 공이 있다는 것과 유한 합집합의 보조정리를 쓴다.
:::

:::hint
$x \in K$가 $U \in \mathcal{U}$에 속하고 $B(x, r) \subseteq U$이면, $B(x, r/2)$의 모든 점 $y$에서 $B(y, r/2) \subseteq U$입니다. 거리의 삼각부등식을 씁니다.
:::

:::proof
"공 (2)"처럼 쓴 것은 [[open-ball]]의 번호, "콤팩트 (1)"은 [[compact-space]]의 번호, "순서 성질 (8)"은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다. 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이고, 실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하며 "계산"이라고만 적는다. [[topology-examples]]의 (4)에 의해 $\mathcal{T}_d$의 원소는 정확히 $(X, d)$에서 열린집합이다.

**(1).** $\mathscr{P}(X)$의 원소 $S$ 가운데 "실수 $\delta > 0$이 있어 $S \cap K$의 모든 점 $x$에 대하여 $B(x, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있다"를 만족하는 것 전체를 $\mathcal{K}$라 하자. [[family-of-sets]]의 조건으로 정한 부분집합이므로 $\mathcal{K}$는 $X$의 집합족이다.

- $\emptyset \in \mathcal{K}$이다. $\delta = 1$로 두면 $\emptyset \cap K = \emptyset$의 점이 없으므로 조건이 성립한다.
- $S, T \in \mathcal{K}$이고 각각의 수를 $\delta_S$, $\delta_T$라 하자. $\delta = \min\{\delta_S, \delta_T\}$는 절댓값 (10)에 의해 $\delta_S$이거나 $\delta_T$이므로 양수이고, $\delta \le \delta_S$, $\delta \le \delta_T$이다. $x \in (S \cup T) \cap K$이면 $x \in S \cap K$이거나 $x \in T \cap K$이다. 앞의 경우 $B(x, \delta_S) \subseteq U$인 $U \in \mathcal{U}$가 있고 공 (2)에 의해 $B(x, \delta) \subseteq B(x, \delta_S) \subseteq U$이다. 뒤의 경우도 같다. 따라서 $S \cup T \in \mathcal{K}$이다.

그러므로 $\mathcal{K}$는 콤팩트 (1)의 가정을 만족한다.

$x \in K$라 하자. $K \subseteq \bigcup \mathcal{U}$이므로 $x \in U$인 $U \in \mathcal{U}$가 있고, $U$는 $(X, d)$에서 열린집합이므로 [[open-set-in-metric-space]]의 정의에 의해 $B(x, r) \subseteq U$인 실수 $r > 0$이 있다. 순서 성질 (8)에 의해 $0 < r/2$이다. $B(x, r/2) \in \mathcal{K}$임을 $\delta = r/2$로 보인다. $y \in B(x, r/2) \cap K$이고 $z \in B(y, r/2)$이면 거리의 삼각부등식에 의해 $d(x, z) \le d(x, y) + d(y, z)$이고, 순서 성질 (2)의 (iv), (1)의 (v)와 계산에 의해 $d(x, z) < r/2 + r/2 = r$이다. 따라서 $B(y, r/2) \subseteq B(x, r) \subseteq U$이다.

$\mathcal{T}_d$의 원소 $V$ 가운데 $V \in \mathcal{K}$인 것 전체를 $\mathcal{V}$라 하자. $x \in K$이면 위의 $B(x, r/2)$는 [[open-ball-is-open|열린 공은 열린집합이다]]의 (1)에 의해 $\mathcal{T}_d$의 원소이고 $\mathcal{K}$의 원소이므로 $\mathcal{V}$에 속하며, 공 (1)에 의해 $x \in B(x, r/2)$이다. 따라서 $\mathcal{V}$는 $K \subseteq \bigcup \mathcal{V}$인 열린집합들의 집합족이다. $K$가 콤팩트 부분집합이므로 콤팩트 (3)에 의해 $K \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이므로 콤팩트 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이다. 곧 실수 $\delta > 0$이 있어 $\bigcup \mathcal{F} \cap K$의 모든 점 $x$에서 $B(x, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있다. $K \subseteq \bigcup \mathcal{F}$이므로 $\bigcup \mathcal{F} \cap K = K$이고, $\delta$는 $K$에 대한 $\mathcal{U}$의 르베그 수이다.

둘째 문장: $(X, d)$가 콤팩트이면 [[compact-space]]의 콤팩트 집합 단락에 의해 $X$는 $X$의 콤팩트 부분집합이고, 열린 덮개 $\mathcal{U}$는 $X \subseteq \bigcup \mathcal{U}$인 열린집합들의 집합족이므로 앞 문장을 $K = X$에 쓴다.

**(2).** $x \in K$이면 $B(x, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있고, 공 (2)에 의해 $B(x, \delta') \subseteq B(x, \delta) \subseteq U$이다.

**(3).** $S \cap K$의 점 $s$를 잡는다. [[diameter]]의 (2)의 (v)에 의해 $S \subseteq B(s, \delta)$이고, $s \in K$이므로 $B(s, \delta) \subseteq U$인 $U \in \mathcal{U}$가 있다. 따라서 $S \subseteq U$이다. 끝 문장: $K = X$이면 공집합이 아닌 $S$에서 $S \cap X = S \ne \emptyset$이다.

**(4).** (i) $K$의 점이 없으므로 조건이 성립한다. $X = \emptyset$이면 $K \subseteq X$이므로 $K = \emptyset$이다. (ii) $x \in K$이면 $B(x, \delta)$는 $X$의 부분집합이므로 $U = X \in \mathcal{U}$로 $B(x, \delta) \subseteq U$이다.

**(5).** (i) $x \in K$이면 $x \in U$인 $U \in \mathcal{U}$가 있다. 공 (6)에 의해 $0 < \delta \le 1$이면 $B(x, \delta) = \{x\} \subseteq U$이다. [[topology-examples]]의 (5)에 의해 이산 거리의 거리위상은 이산위상이므로 $X$의 모든 부분집합의 족은 열린집합들의 족이고, 특히 $X$의 모든 열린 덮개에 대하여 $K = X$로 위의 것이 성립한다. $X$가 무한집합이면 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (4)와 [[compact-space]]의 콤팩트 집합 단락에 의해 $(X, d)$는 콤팩트가 아니다.

(ii) *열린 덮개.* 자연수 $n$에 대하여 [[open-and-closed-sets-of-reals]]의 (1)에 의해 $\{x \in \mathbb{R} : n^{-1} < x\}$는 보통 거리의 $\mathbb{R}$에서 열린집합이고, $U_n$은 이것과 $Y$의 교집합이므로 [[metric-subspace-topology]]의 (1)에 의해 $(Y, d_Y)$에서 열린집합이다. $x \in Y$이면 $0 < x$이므로 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/n < x$인 자연수 $n$이 있고, 계산에 의해 $1/n = n^{-1}$이므로 $x \in U_n$이다. 따라서 [[family-of-sets]]의 (9)에 의해 $\bigcup \{U_n : n \in \mathbb{N}\} = Y$이다.

*르베그 수가 없다.* 실수 $\delta > 0$을 잡는다. 아르키메데스 성질의 (3)에 의해 $1/m < \delta$인 자연수 $m$이 있다. $x = m^{-1}$로 두면 순서 성질 (10)과 (6)에 의해 $0 < x \le 1$이므로 $x \in Y$이고 $x < \delta$이다. 어떤 자연수 $n$에서 $B_Y(x, \delta) \subseteq U_n$이라 하자. $y = \min\{x, n^{-1}\}$로 두면 절댓값 (10)에 의해 $y$는 $x$이거나 $n^{-1}$이므로 $y \in Y$이고($0 < n^{-1} \le 1$), $y \le x$이며 $y \le n^{-1}$이다. 순서 성질 (3)의 (i)에 의해 $0 \le x - y$이고, $0 < y$이므로 순서 성질 (3)의 (ii), (2)의 (ii)와 계산에 의해 $x - y < x$이다. [[absolute-value]]의 (1)과 [[metric-space-examples]]의 (1), (3)에 의해 $d_Y(x, y) = |x - y| = x - y$이고, 순서 성질 (1)의 (v)에 의해 $d_Y(x, y) < x < \delta$이다. 따라서 $y \in B_Y(x, \delta) \subseteq U_n$이고 $n^{-1} < y$이다. 그러나 $y \le n^{-1}$이므로 순서 성질 (1)의 (i)에 의해 모순이다. 그러므로 어떤 $n$에서도 $B_Y(x, \delta) \subseteq U_n$이 아니고, $\delta$는 르베그 수가 아니다.
:::

## 예시와 반례

:::example[구간을 덮는 두 열린집합]
$X = \{x \in \mathbb{R} : 0 \le x \le 2\}$에 보통 거리의 부분공간 거리를 주고 $U_1 = \{x \in X : x < \frac{3}{2}\}$, $U_2 = \{x \in X : \frac{1}{2} < x\}$로 둡니다. [[open-and-closed-sets-of-reals]]의 (1)과 [[metric-subspace-topology]]의 (1)에 의해 둘 다 $X$에서 열린집합이고, $X$의 점은 $\frac{3}{2}$보다 작거나 $\frac{1}{2}$보다 크므로 $\{U_1, U_2\}$는 $X$의 열린 덮개입니다.

$\delta = \frac{1}{2}$은 르베그 수입니다. $x \in X$가 $x \le 1$이면 $|x - y| < \frac{1}{2}$인 $y$는 $y < x + \frac{1}{2} \le \frac{3}{2}$이므로 $B(x, \frac{1}{2}) \subseteq U_1$이고, $1 < x$이면 $y > x - \frac{1}{2} > \frac{1}{2}$이므로 $B(x, \frac{1}{2}) \subseteq U_2$입니다([[absolute-value]]의 (8)).

$\frac{1}{2}$보다 큰 $\delta$는 르베그 수가 아닙니다. $x = 1$에서 $|1 - \frac{3}{2}| = |1 - \frac{1}{2}| = \frac{1}{2} < \delta$이므로 $\frac{3}{2}$과 $\frac{1}{2}$이 모두 $B(1, \delta)$에 듭니다. $\frac{3}{2} \notin U_1$이고 $\frac{1}{2} \notin U_2$이므로 $B(1, \delta)$는 $U_1$에도 $U_2$에도 들지 않습니다. 그래서 이 덮개의 르베그 수는 정확히 $0 < \delta \le \frac{1}{2}$인 $\delta$입니다((2)).
:::

:::counterexample[공을 어느 공간에서 재는지에 따라 달라질 수 있다]
보통 거리의 $\mathbb{R}$에서 $K = \mathbb{N}$, $\mathcal{U} = \{B(n, (2n)^{-1}) : n \in \mathbb{N}\}$로 둡니다. 자연수 $n$은 $B(n, (2n)^{-1})$에 들므로 $K \subseteq \bigcup \mathcal{U}$입니다. 그러나 $K$에 대한 $\mathcal{U}$의 르베그 수는 없습니다. 실수 $\delta > 0$에 대하여 [[archimedean-property|아르키메데스 성질]]의 (3)으로 $1/n < \delta$인 자연수 $n$을 잡읍시다. $B(n, \delta) \subseteq B(m, (2m)^{-1})$인 자연수 $m$이 있다면, $n$이 그 공에 들므로 $|n - m| < (2m)^{-1} \le \frac{1}{2}$이고, 서로 다른 자연수의 차의 절댓값은 $1$ 이상이므로([[well-ordering-principle]]의 (Z5), [[prime-number]]의 (Z1)) $m = n$입니다. 그런데 $y = n + (2n)^{-1}$은 $|y - n| = (2n)^{-1} < n^{-1} < \delta$이므로 $B(n, \delta)$에 들지만 $|y - n| < (2n)^{-1}$이 아니므로 $B(n, (2n)^{-1})$에 들지 않습니다. 모순입니다. 이 $\mathbb{N}$은 콤팩트 부분집합이 아니므로 (1)과 어긋나지 않습니다.

같은 집합 $\mathbb{N}$에 부분공간 거리 $d_{\mathbb{N}}$을 주고 덮개를 $\{B(n, (2n)^{-1}) \cap \mathbb{N} : n \in \mathbb{N}\}$로 보면 사정이 다릅니다. 서로 다른 자연수의 거리는 $1$ 이상이므로 $B_{\mathbb{N}}(n, 1) = \{n\}$이고, $\{n\} \subseteq B(n, (2n)^{-1}) \cap \mathbb{N}$이므로 $\delta = 1$이 르베그 수입니다. 르베그 수의 정의에서 공은 바깥 공간의 공이므로, 같은 점들이라도 어느 거리공간의 공으로 재는지에 따라 결론이 달라집니다.
:::

## 확인 질문

:::check[$\delta$가 르베그 수이면 $2\delta$도 르베그 수인가?]
그렇지 않을 수 있습니다. 예시 "구간을 덮는 두 열린집합"에서 $\frac{1}{2}$은 르베그 수이지만 $1$은 아닙니다. 르베그 수보다 작은 양수는 늘 르베그 수이지만((2)), 큰 수는 그렇지 않을 수 있습니다.
:::

:::check[$(X, d)$가 콤팩트이고 공집합이 아니며, $\mathcal{U}$가 열린 덮개이고 $\delta$가 그 르베그 수라 하자. $\operatorname{diam} X < \delta$이면 무엇을 알 수 있는가?]
$X$는 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (3)에 의해 유계이므로 지름이 정의됩니다. (3)에 의해 $X \subseteq U$인 $U \in \mathcal{U}$가 있고, $U \subseteq X$이므로 $U = X$입니다. 곧 $X$ 자신이 덮개의 원소입니다.
:::
