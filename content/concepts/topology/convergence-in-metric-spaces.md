---
title: 거리공간의 수렴과 해석학 입문의 수렴
title_en: Convergence in Metric Spaces and in Analysis
aliases: [거리공간의 수렴, convergence in a metric space, 엡실론-M 수렴, 실수열의 두 수렴, 성분별 수렴]
kind: theorem
field: topology
msc: ["54E35", "54A20", "40A05"]
level: undergrad
summary: 거리위상에서 수열이 p 로 수렴하는 것은 모든 양수 ε 에 대해 어떤 번호부터 d(x_n, p) < ε 인 것과 같고, 실수열 d(x_n, p) 가 0 으로 수렴하는 것과도 같다. 실수의 보통 위상에서는 위상의 수렴과 해석학 입문의 수렴이 같고 lim 도 같은 값이다. ℝ × ℝ 에서는 성분별 수렴과 같고, 이산 거리에서는 어느 번호부터 상수인 것과 같다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, cartesian-product, recursion-theorem, absolute-value, order-properties-of-reals, sequence, limit-of-sequence, limit-is-unique, basic-limits, metric-space, metric-space-examples, open-ball, topology-examples, standard-topology-on-reals, neighborhood, metric-space-is-hausdorff, sequence-in-a-space, limit-unique-in-hausdorff]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Sequences and convergence 절: Proposition metric-convergence 와 그 앞 문장, 증명 (content/topological-spaces.tex:706–718)"
    checked: original
    note: "(1)은 출처 Proposition metric-convergence(707–713)와 같은 내용이다. 출처는 조건을 '∀ε > 0, ∃N > 0 : n > N ⇒ d(x_n, x) < ε' 로 적고, 이 항목은 자연수 M 과 n ≥ M 꼴로 적는다. 출처의 증명(714–718)도 B_d(x, ε) 가 근방이라는 것과 근방이 공을 포함한다는 것(Remark remark-def-open-balls)을 쓴다. 출처는 앞 문장(706)에서 이 명제로 거리공간과 ℝⁿ 의 익숙한 수렴의 정의를 되찾는다고 적는다."
  - ref: lebl-basic-analysis
    loc: "7.3.1절 첫 문단과 Definition 7.3.2 (p.274), Proposition 7.3.5 (p.275), 7.3.2절 Proposition 7.3.9 (p.276), 7.3.3절 Proposition 7.3.11 (p.276), 연습문제 7.3.6 (p.277)"
    checked: original
    note: "출처는 거리공간의 수렴을 Definition 7.3.2(p.274)에서 ε–M 꼴(n ≥ M)로 정의하고, 7.3.1절 첫 문단에서 수열에 관한 정의들이 2장의 실수의 것과 본질적으로 같다고 적는다. 출처 Proposition 7.3.11(p.276)은 그 정의가 '모든 열린 근방 U 에 M 이 있어 n ≥ M 이면 x_n ∈ U' 와 같다는 것을 증명한다. 이 항목의 (1)은 같은 동치를 거꾸로(근방의 꼴을 정의로) 읽은 것이다. (2)는 출처 Proposition 7.3.5(p.275: x_n 이 p 로 수렴하는 것은 정확히 모든 n 에서 d(x_n, p) ≤ a_n 이고 0 으로 수렴하는 실수열 (a_n) 이 있을 때이다)에서 a_n = d(x_n, p) 로 둔 경우와 같은 내용이고, 확인 질문 '더 가까운 수열'은 같은 명제의 한 방향과 같은 발상이다. (4)는 출처 Proposition 7.3.9(p.276, ℝⁿ 의 유클리드 거리에서 수렴은 성분마다의 수렴과 같다)를 ℝ × ℝ 에서 최대 거리로 적은 것이다. (5)는 출처 연습문제 7.3.6(p.277, 이산 거리에서 수렴하는 수열은 어떤 K 부터 x_n = x_K)과 같은 결론이다. 예시 '성분별로 보기'의 n⁻¹ 은 출처 Example 2.1.4(p.53)의 수열이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 근거 없이 결론을 내린 확인 질문 1건, 상수 수열에서 거짓이던 반례 제목, 줄 범위와 빠진 근거를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$)는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리위상 $\mathcal{T}_d$는 [[topology-examples]]의 것이며, $\mathbb{R}$의 보통 위상은 [[standard-topology-on-reals]]의 (5)의 것이다. 위상공간의 수열과 그 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 하우스도르프 공간의 극한의 기호는 [[limit-unique-in-hausdorff]]의 것이다. 실수열의 해석학 입문의 뜻의 수렴과 극한의 기호는 [[limit-of-sequence]], [[limit-is-unique]]의 것이다. 거리공간에는 늘 그 거리위상을 준다.

아래에서 $(X, d)$는 거리공간이고, $(x_n)$은 $X$의 수열이며, $p \in X$이다. 각 자연수 $n$에 대하여 $d(x_n, p)$는 이미 정해진 실수이므로 $n$번째 항이 $d(x_n, p)$인 실수열이 있다([[sequence]]의 (1)).

1. (ε–M 꼴) $(x_n)$이 $(X, \mathcal{T}_d)$에서 $p$로 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $d(x_n, p) < \varepsilon$일 때이다.
2. (거리의 수열) $(x_n)$이 $(X, \mathcal{T}_d)$에서 $p$로 수렴하는 것은 정확히, $n$번째 항이 $d(x_n, p)$인 실수열이 해석학 입문의 뜻으로 $0$으로 수렴할 때이다.
3. (실수의 보통 위상) $(x_n)$이 실수열이고 $L$이 실수이면, $(x_n)$이 보통 위상의 $\mathbb{R}$에서 $L$로 수렴하는 것은 정확히 $(x_n)$이 [[limit-of-sequence]]의 뜻으로 $L$로 수렴할 때이다. 따라서 실수열이 한 뜻으로 수렴하는 것은 정확히 다른 뜻으로 수렴할 때이고, 이때 보통 위상의 $\mathbb{R}$(하우스도르프 공간)에서의 $\lim_{n \to \infty} x_n$과 해석학 입문의 $\lim_{n \to \infty} x_n$은 같은 실수이다. 그래서 실수열에서는 두 뜻의 수렴, 발산, 극한, 극한의 기호를 같은 이름으로 부르고 구별하지 않는다. 이것은 $\mathbb{R}$에 보통 위상을 줄 때의 말이고, $\mathbb{R}$에 다른 위상을 주면 수렴하는 수열이 달라질 수 있다.
4. ($\mathbb{R} \times \mathbb{R}$에서 성분별로 보기) $(z_n)$이 곱집합 $\mathbb{R} \times \mathbb{R}$의 수열이고 $z_n = (a_n, b_n)$이라 하자. 곧 $a_n$과 $b_n$은 순서쌍 $z_n$의 첫째 성분과 둘째 성분이고, $(a_n)$, $(b_n)$은 그것을 $n$번째 항으로 하는 실수열이다. $p$, $q$가 실수이면, $\mathbb{R} \times \mathbb{R}$에 $d_{\max}$를 줄 때 $(z_n)$이 $(p, q)$로 수렴하는 것은 정확히 $(a_n)$이 $p$로 수렴하고 $(b_n)$이 $q$로 수렴할 때이다. $d_{\max}$ 대신 $d_{\mathrm{sum}}$이나 $d_E$를 주어도 같다.
5. (이산 거리) $d$가 $X$ 위의 이산 거리이면, $(x_n)$이 $p$로 수렴하는 것은 정확히 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n = p$일 때이다.
:::

:::english
Metric spaces and their examples (the standard metric, the discrete metric, $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$) are as in the entries on metric spaces and examples of metric spaces, the metric topology $\mathcal{T}_d$ is as in the entry on examples of topologies, and the standard topology on $\mathbb{R}$ is as in (5) of the entry on the standard topology on the reals. Sequences in a topological space and their convergence are as in the entry on sequences and convergence in a topological space, and the notation for limits in Hausdorff spaces is as in the entry on uniqueness of limits in Hausdorff spaces. Convergence of real sequences in the sense of the analysis course and the notation for their limits are as in the entries on limits of sequences and uniqueness of limits. A metric space always carries its metric topology.

Below, $(X, d)$ is a metric space, $(x_n)$ is a sequence in $X$ and $p \in X$. For each natural number $n$, $d(x_n, p)$ is an already determined real number, so there is a real sequence whose $n$th term is $d(x_n, p)$.

1. (The ε–M form) $(x_n)$ converges to $p$ in $(X, \mathcal{T}_d)$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $d(x_n, p) < \varepsilon$ for every natural number $n \ge M$.
2. (The sequence of distances) $(x_n)$ converges to $p$ in $(X, \mathcal{T}_d)$ exactly when the real sequence whose $n$th term is $d(x_n, p)$ converges to $0$ in the sense of the analysis course.
3. (The standard topology on the reals) If $(x_n)$ is a real sequence and $L$ is a real number, then $(x_n)$ converges to $L$ in $\mathbb{R}$ with the standard topology exactly when $(x_n)$ converges to $L$ in the sense of the entry on limits of sequences. Hence a real sequence converges in one sense exactly when it converges in the other, and then $\lim_{n \to \infty} x_n$ in $\mathbb{R}$ with the standard topology (a Hausdorff space) and $\lim_{n \to \infty} x_n$ of the analysis course are the same real number. So for real sequences the two meanings of convergence, divergence, limit and the limit symbol are called by the same names and not distinguished. This refers to $\mathbb{R}$ with the standard topology; with another topology on $\mathbb{R}$, the convergent sequences may change.
4. (Componentwise in $\mathbb{R} \times \mathbb{R}$) Let $(z_n)$ be a sequence in the product set $\mathbb{R} \times \mathbb{R}$ with $z_n = (a_n, b_n)$; that is, $a_n$ and $b_n$ are the first and second components of the ordered pair $z_n$, and $(a_n)$, $(b_n)$ are the real sequences having them as $n$th terms. If $p$, $q$ are real numbers, then with $d_{\max}$ on $\mathbb{R} \times \mathbb{R}$, $(z_n)$ converges to $(p, q)$ exactly when $(a_n)$ converges to $p$ and $(b_n)$ converges to $q$. The same holds with $d_{\mathrm{sum}}$ or $d_E$ in place of $d_{\max}$.
5. (The discrete metric) If $d$ is the discrete metric on $X$, then $(x_n)$ converges to $p$ exactly when there is a natural number $M$ such that $x_n = p$ for every natural number $n \ge M$.
:::

## 직관

해석학 입문에서 실수열의 수렴은 "어떤 폭 $\varepsilon$을 잡아도 어느 번호부터 $|x_n - L| < \varepsilon$"이었고, 이 강의의 위상공간의 수렴은 "어떤 근방을 잡아도 어느 번호부터 항이 그 근방 안"이었습니다. 거리위상에서는 근방과 열린 공이 서로를 품습니다. 모든 열린 공 $B(p, \varepsilon)$는 $p$의 근방이고, $p$의 근방은 언제나 어떤 열린 공 $B(p, \varepsilon)$를 포함합니다. 그래서 "모든 근방"을 "모든 공"으로 바꿔도 같은 조건이 되고, 공 안에 든다는 것은 $d(x_n, p) < \varepsilon$이라는 것이므로 (1)이 나옵니다.

$\mathbb{R}$의 보통 거리는 $d(x, y) = |x - y|$이므로 (1)의 조건은 해석학 입문의 수렴의 정의와 글자 그대로 같습니다((3)). 그래서 이 강의는 위상의 수렴을 해석학 입문의 수렴과 같은 이름으로 부르고, 해석학 입문에서 증명한 극한의 성질을 보통 위상의 $\mathbb{R}$로 옮겨 쓸 수 있습니다. 다만 같은 집합 $\mathbb{R}$이라도 이산 거리나 아래끝 위상을 주면 수렴하는 수열이 달라집니다.

(4)는 평면에서 점이 다가가는 것을 두 좌표가 각각 다가가는 것으로 읽게 해 줍니다. 최대 거리는 두 좌표의 차 가운데 큰 쪽이므로, 그것이 $\varepsilon$보다 작다는 것은 두 차가 모두 $\varepsilon$보다 작다는 것입니다.

## 증명

:::idea
열린 공은 근방이고 근방은 열린 공을 품는다는 것([[neighborhood]]의 (4))으로 근방의 조건과 공의 조건을 오간다. 나머지는 거리를 실제 식으로 바꾸는 계산이다.
:::

:::hint
(1)의 한 방향에서는 근방 $U$ 안에 든 공 $B(p, r)$를 잡고 $\varepsilon = r$로 두세요.
:::

:::hint
(4)의 거꾸로에서는 두 번호 $M_1$, $M_2$를 더한 번호를 쓰고, 최대 거리가 두 수 가운데 하나라는 것([[absolute-value]]의 (10))을 씁니다.
:::

:::proof
아래에서 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z6), (Z7)을 쓴다. 실수의 순서는 [[order-properties-of-reals|실수의 순서의 성질]]을 쓴다. 열린 공 $B(p, r) = \{y \in X : d(p, y) < r\}$은 [[open-ball]]의 것이고, 거리의 조건 (iii)에 의해 $d(x_n, p) = d(p, x_n)$이므로 $x_n \in B(p, r)$인 것은 정확히 $d(x_n, p) < r$일 때이다.

**(1).** $(x_n)$이 $p$로 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 [[neighborhood]]의 (4)의 (a)에 의해 $B(p, \varepsilon)$은 $p$의 근방이므로, $n \ge M$인 모든 $n$에서 $x_n \in B(p, \varepsilon)$, 곧 $d(x_n, p) < \varepsilon$인 자연수 $M$이 있다.

거꾸로 진술의 조건이 성립한다고 하자. $p$의 근방 $U$를 잡으면 [[neighborhood]]의 (4)의 (b)에 의해 $B(p, r) \subseteq U$인 실수 $r > 0$이 있다. 조건을 $\varepsilon = r$에 쓰면 $n \ge M$인 모든 $n$에서 $d(x_n, p) < r$, 곧 $x_n \in B(p, r) \subseteq U$인 자연수 $M$이 있다. 따라서 $(x_n)$은 $p$로 수렴한다.

**(2).** 거리의 조건 (i)에 의해 $0 \le d(x_n, p)$이므로 [[absolute-value]]의 정의에 의해 $|d(x_n, p) - 0| = d(x_n, p)$이다. 따라서 [[limit-of-sequence]]의 정의에서 $L = 0$으로 둔 조건 "모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $|d(x_n, p) - 0| < \varepsilon$"은 (1)의 조건과 같은 문장이다.

**(3).** $d$가 $\mathbb{R}$의 보통 거리이면 [[metric-space-examples]]의 (1)에 의해 $d(x_n, L) = |x_n - L|$이고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상은 $\mathcal{T}_d$이다. (1)에 의해 $(x_n)$이 보통 위상에서 $L$로 수렴하는 것은 정확히 "모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $|x_n - L| < \varepsilon$"일 때이고, 이것은 [[limit-of-sequence]]의 수렴의 정의와 같은 문장이다. 실수열 $(x_n)$은 [[sequence-in-a-space]]의 진술에 의해 $X = \mathbb{R}$인 위상공간의 수열과 같은 대상이므로 두 조건은 같은 수열에 대한 것이다.

따라서 $(x_n)$이 한 뜻으로 어떤 $L$로 수렴하면 다른 뜻으로도 같은 $L$로 수렴한다. [[metric-space-is-hausdorff|거리공간이 하우스도르프라는 정리]]의 (3)의 (i)에 의해 보통 위상의 $\mathbb{R}$은 하우스도르프 공간이므로 [[limit-unique-in-hausdorff]]의 (2)의 기호가 쓰이고, 그 값은 위상의 뜻의 극한 $L$이다. [[limit-is-unique]]에 의해 해석학 입문의 기호의 값도 $L$이다. 그러므로 두 값은 같다. 마지막 문장은 아래 반례에서 본다.

**(4).** [[metric-space-examples]]의 (5)에 의해 $d_{\max}(z_n, (p, q)) = \max\{|a_n - p|, |b_n - q|\}$이다. (3)에 의해 실수열 $(a_n)$, $(b_n)$의 수렴은 어느 뜻으로 읽어도 같다.

$(z_n)$이 $(p, q)$로 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 (1)에 의해 $n \ge M$인 모든 $n$에서 $\max\{|a_n - p|, |b_n - q|\} < \varepsilon$인 자연수 $M$이 있다. [[absolute-value]]의 (10)에 의해 $|a_n - p| \le \max\{|a_n - p|, |b_n - q|\}$이므로 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $|a_n - p| < \varepsilon$이고, 같은 방식으로 $|b_n - q| < \varepsilon$이다. 따라서 $(a_n)$은 $p$로, $(b_n)$은 $q$로 수렴한다.

거꾸로 $(a_n)$이 $p$로, $(b_n)$이 $q$로 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 $n \ge M_1$인 모든 $n$에서 $|a_n - p| < \varepsilon$인 자연수 $M_1$과, $n \ge M_2$인 모든 $n$에서 $|b_n - q| < \varepsilon$인 자연수 $M_2$가 있다. $M = M_1 + M_2$로 두면 $0 < M_1$, $0 < M_2$와 (Z6), (Z7)에 의해 $M$은 자연수이고 $M_1 < M$, $M_2 < M$이다. $n \ge M$이면 (Z6)에 의해 $n \ge M_1$이고 $n \ge M_2$이므로 $|a_n - p| < \varepsilon$이고 $|b_n - q| < \varepsilon$이다. [[absolute-value]]의 (10)에 의해 $\max\{|a_n - p|, |b_n - q|\}$는 두 수 가운데 하나이므로 $\varepsilon$보다 작다. (1)에 의해 $(z_n)$은 $(p, q)$로 수렴한다.

$d_{\mathrm{sum}}$과 $d_E$의 거리위상은 [[standard-topology-on-reals]]의 (4)에 의해 $d_{\max}$의 거리위상과 같다. 수렴은 [[sequence-in-a-space]]의 정의에 의해 위상만으로 정해지므로, 세 거리에서 $(z_n)$이 $(p, q)$로 수렴하는지는 같다.

**(5).** [[topology-examples]]의 (5)에 의해 이산 거리의 거리위상은 이산위상이므로, [[sequence-in-a-space]]의 (4)가 바로 (5)이다.
:::

## 예시와 반례

:::example[성분별로 보기]
$\mathbb{R} \times \mathbb{R}$에서 $n$번째 항이 $z_n = (n^{-1}, 1)$인 수열을 봅니다. 첫째 성분의 수열은 [[basic-limits]]의 (2)에 의해 $0$으로, 둘째 성분의 수열은 상수 수열이므로 [[basic-limits]]의 (1)에 의해 $1$로 수렴합니다. (4)에 의해 $(z_n)$은 $d_{\max}$, $d_{\mathrm{sum}}$, $d_E$ 어느 거리에서나 $(0, 1)$로 수렴합니다. 반대로 $n$번째 항이 $(1, a_n)$이고 $a_n$이 $n$이 짝수이면 $1$, 홀수이면 $-1$인 수열은, 둘째 성분의 수열이 [[basic-limits]]의 (3)에 의해 발산하므로 (4)에 의해 어떤 점으로도 수렴하지 않습니다.
:::

:::counterexample[같은 실수열, 다른 거리]
$n$번째 항이 $n^{-1}$인 실수열은 보통 위상에서 $0$으로 수렴하지만([[basic-limits]]의 (2)와 이 항목의 (3)), $\mathbb{R}$에 이산 거리를 주면 어떤 점으로도 수렴하지 않습니다. (5)에 의해 수렴한다면 어느 번호 $M$부터 항이 모두 같은 점 $p$여야 하는데, $M^{-1}$과 $(M + 1)^{-1}$은 서로 다르기 때문입니다($M < M + 1$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(M + 1)^{-1} < M^{-1}$). 그래서 (3)은 보통 위상에 대한 말이고, 같은 집합 $\mathbb{R}$에 거리를 바꾸면 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}$에 거리 $2d$($d$는 보통 거리)를 주면, $n$번째 항이 $n^{-1}$인 수열은 수렴하는가?]
$0$으로 수렴합니다. [[standard-topology-on-reals]]의 (3)에 의해 $2d$의 거리위상은 $d$의 거리위상, 곧 보통 위상과 같고, 수렴은 위상만으로 정해지므로 (3)과 [[basic-limits]]의 (2)에 의해 $0$으로 수렴합니다.
:::

:::check[거리공간 $(X, d)$에서 $(x_n)$이 $p$로 수렴하고 모든 $n$에서 $d(y_n, p) \le d(x_n, p)$이면, $(y_n)$도 $p$로 수렴하는가?]
수렴합니다. 양의 실수 $\varepsilon$에 대하여 (1)에 의해 $n \ge M$이면 $d(x_n, p) < \varepsilon$인 자연수 $M$이 있고, 그런 $n$에서 $d(y_n, p) \le d(x_n, p) < \varepsilon$입니다. (1)에 의해 $(y_n)$은 $p$로 수렴합니다.
:::
