---
title: 코시 수열의 부분수열과 극한
title_en: Subsequences and Limits of Cauchy Sequences
aliases: [수렴하는 부분수열을 가진 코시 수열, Cauchy sequence with a convergent subsequence, 꼬리의 지름, 두 거리의 비교, comparing two metrics]
kind: proposition
field: topology
msc: ["54E35", "54E50"]
level: undergrad
summary: 거리공간의 코시 수열의 부분수열과 꼬리는 코시 수열이고, 수렴하는 부분수열을 가진 코시 수열은 그 극한으로 수렴한다. 코시 수열인 것은 꼬리의 값의 집합의 지름이 얼마든지 작아지는 것과 같다. 한 거리가 다른 거리의 상수배 이하이면 코시 수열, 수렴, 유계가 옮겨 간다.
requires: [subset, natural-numbers-are-infinite, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, sequence, basic-limits, subsequence, metric-space, metric-space-examples, open-ball, compact-metric-closed-and-bounded, sequence-in-a-space, convergence-in-metric-spaces, limit-unique-in-hausdorff, metric-space-is-hausdorff, bounded-sequence-in-metric-space, diameter, cauchy-sequence-in-metric-space]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.3절 7.3.1소절 Proposition 7.3.6 (p.275); 7.3.4소절 연습문제 7.3.12, 7.3.14 (p.278); 7.2.4소절 연습문제 7.2.9 (p.272); 2.4절 Example 2.4.2, Example 2.4.3 (p.84), 2.4.1소절 연습문제 2.4.7 (p.86); 2.1절 2.1.3소절 Example 2.1.18 (p.58)"
    checked: original
    note: "출처에서 이 항목의 진술들을 거리공간의 명제로 찾지 못했다(7장 전체와 7.3.4소절, 7.4.3소절의 연습문제를 찾고 읽은 범위). (1)의 두 경우(부분수열, K-꼬리)는 출처 Proposition 7.3.6(p.275)이 수렴에 대해 진술하는 두 경우를 코시 수열에 대해 적은 것이다(출처는 그 명제의 증명을 연습문제 7.3.12(p.278)로 돌린다). (2)는 출처 연습문제 2.4.7(p.86: 무한히 많은 n 에서 x_n = c 인 실수의 코시 수열은 c 로 수렴한다)과 같은 발상을 거리공간에서 적은 것이다. 해석학 입문 cauchy-iff-convergent 의 (2)가 실수열에 대한 같은 진술이고, 이 항목의 증명도 그 경로(코시 조건의 번호와 부분수열의 번호를 더한 첨자 하나)를 따른다. (4)의 가정(d′ ≤ c·d 꼴의 부등식)은 출처 연습문제 7.2.9(p.272: αd ≤ d′ ≤ βd 이면 두 거리의 열린집합이 같다)의 가정과 같은 꼴이고, 출처 연습문제 7.3.14(p.278: ℝⁿ 의 세 거리에서 수렴하는 수열이 같다)도 같은 발상이다. 예시 '평면의 세 거리'는 그 연습문제를 ℝ × ℝ 에서 코시 수열과 수렴에 대해 본 것이다. 예시 '꼬리의 지름으로 보는 n⁻¹'의 수열은 출처 Example 2.4.2(p.84)가 코시 수열임을 보이는 수열과 같다. 반례 '수렴하는 부분수열을 가진 발산하는 수열'은 출처 Example 2.1.18(p.58: 0, 1, 0, 1, … 은 발산하지만 짝수 번째와 홀수 번째 부분수열은 수렴한다)과 같은 발상이다. 확인 질문 '짝수 번째는 1, 홀수 번째는 −1 인 수열'의 수열은 출처 Example 2.4.3(p.84)이 코시 수열이 아님을 보이는 {(−1)ⁿ} 과 같은 수열이고 결론도 같다. 출처는 짝수 n ≥ M 과 k = n + 1 로 보이고, 이 항목은 꼬리의 지름으로 보인다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 단원 글의 거짓 문장 1건, 뒤 항목을 예고하던 문장 1건, 근거 없이 쓴 작은 사실 4건, 메모의 위치 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이다. 수열, 수렴, 부분수열, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 첨자열은 [[subsequence]]의 것이며, 거리공간에는 늘 거리위상을 준다. 수열의 값의 집합과 유계인 수열은 [[bounded-sequence-in-metric-space]]의 것이고, 지름은 [[diameter]]의 것이며, 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이다. 아래에서 $(X, d)$는 거리공간이고 $(x_n)$은 $X$의 수열이다.

1. (부분수열과 꼬리) $(x_n)$이 코시 수열이면 $(x_n)$의 모든 부분수열은 코시 수열이다. 또 자연수 $K$에 대하여, $(x_n)$이 코시 수열인 것은 정확히 $(x_n)$의 $K$-꼬리가 코시 수열일 때이다.
2. (수렴하는 부분수열을 가진 코시 수열) $(x_n)$이 코시 수열이고 $(x_n)$의 어떤 부분수열이 $p \in X$로 수렴하면, $(x_n)$은 $p$로 수렴한다.
3. (꼬리의 값의 집합과 지름) 자연수 $m$에 대하여 $T_m = \{y \in X : y = x_k \text{인 자연수 } k \ge m \text{이 있다}\}$로 둔다. $T_1$은 $(x_n)$의 값의 집합이고, $m \ge 2$이면 $T_m$은 $(x_n)$의 $(m - 1)$-꼬리의 값의 집합이다.
   - (i) $T_m$은 $x_m$을 원소로 가지므로 공집합이 아니고, $m \le m'$이면 $T_{m'} \subseteq T_m$이다. $(x_n)$이 유계이면 모든 $T_m$은 유계이다.
   - (ii) $(x_n)$이 코시 수열인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $T_M$이 유계이고 $\operatorname{diam} T_M < \varepsilon$인 자연수 $M$이 있을 때이다.
   - (iii) $T_M$이 유계이고 $\operatorname{diam} T_M < \varepsilon$이면, $m \ge M$인 모든 자연수 $m$에서 $T_m$은 유계이고 $\operatorname{diam} T_m < \varepsilon$이다.
4. (두 거리의 비교) $d$와 $d'$이 같은 집합 $X$ 위의 거리이고, $0 \le c$인 실수 $c$가 있어 모든 $x, y \in X$에서 $d'(x, y) \le c \cdot d(x, y)$라 하자. $p \in X$라 하자.
   - (i) $(x_n)$이 $d$로 코시이면 $d'$으로 코시이다.
   - (ii) $(x_n)$이 $(X, d)$에서 $p$로 수렴하면 $(X, d')$에서 $p$로 수렴한다.
   - (iii) $X$의 부분집합이 $d$로 유계이면 $d'$으로 유계이다. 따라서 $(x_n)$이 $d$로 유계이면 $d'$으로 유계이다.
   - (iv) 거꾸로 $0 \le c'$인 실수 $c'$이 있어 모든 $x, y \in X$에서 $d(x, y) \le c' \cdot d'(x, y)$이기도 하면, $X$의 수열이 $d$로 코시인 것은 정확히 $d'$으로 코시일 때이고, $X$의 수열이 $(X, d)$에서 $p$로 수렴하는 것은 정확히 $(X, d')$에서 $p$로 수렴할 때이며, $X$의 부분집합과 수열이 $d$로 유계인 것은 정확히 $d'$으로 유계일 때이다.
:::

:::english
Metric spaces and their examples are as in the entries on metric spaces and examples of metric spaces. Sequences, convergence, subsequences and $K$-tails are as in the entry on sequences and convergence in a topological space, index sequences are as in the entry on subsequences, and a metric space always carries its metric topology. The set of values of a sequence and bounded sequences are as in the entry on bounded sequences in a metric space, the diameter is as in the entry on diameter, and Cauchy sequences are as in the entry on Cauchy sequences in a metric space. Below, $(X, d)$ is a metric space and $(x_n)$ is a sequence in $X$.

1. (Subsequences and tails) If $(x_n)$ is a Cauchy sequence, then every subsequence of $(x_n)$ is a Cauchy sequence. Moreover, for a natural number $K$, $(x_n)$ is a Cauchy sequence exactly when the $K$-tail of $(x_n)$ is a Cauchy sequence.
2. (Cauchy sequences with a convergent subsequence) If $(x_n)$ is a Cauchy sequence and some subsequence of $(x_n)$ converges to $p \in X$, then $(x_n)$ converges to $p$.
3. (Sets of values of tails and the diameter) For a natural number $m$, let $T_m = \{y \in X : y = x_k \text{ for some natural number } k \ge m\}$; $T_1$ is the set of values of $(x_n)$, and for $m \ge 2$, $T_m$ is the set of values of the $(m - 1)$-tail of $(x_n)$.
   - (i) $T_m$ contains $x_m$, so it is nonempty, and if $m \le m'$ then $T_{m'} \subseteq T_m$. If $(x_n)$ is bounded, then every $T_m$ is bounded.
   - (ii) $(x_n)$ is a Cauchy sequence exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $T_M$ is bounded and $\operatorname{diam} T_M < \varepsilon$.
   - (iii) If $T_M$ is bounded and $\operatorname{diam} T_M < \varepsilon$, then for every natural number $m \ge M$, $T_m$ is bounded and $\operatorname{diam} T_m < \varepsilon$.
4. (Comparing two metrics) Let $d$ and $d'$ be metrics on the same set $X$, and suppose there is a real number $c$ with $0 \le c$ such that $d'(x, y) \le c \cdot d(x, y)$ for all $x, y \in X$. Let $p \in X$.
   - (i) If $(x_n)$ is Cauchy with respect to $d$, then it is Cauchy with respect to $d'$.
   - (ii) If $(x_n)$ converges to $p$ in $(X, d)$, then it converges to $p$ in $(X, d')$.
   - (iii) If a subset of $X$ is bounded with respect to $d$, then it is bounded with respect to $d'$. Hence if $(x_n)$ is bounded with respect to $d$, then it is bounded with respect to $d'$.
   - (iv) If conversely there is also a real number $c'$ with $0 \le c'$ such that $d(x, y) \le c' \cdot d'(x, y)$ for all $x, y \in X$, then a sequence in $X$ is Cauchy with respect to $d$ exactly when it is Cauchy with respect to $d'$, a sequence in $X$ converges to $p$ in $(X, d)$ exactly when it converges to $p$ in $(X, d')$, and a subset or a sequence of $X$ is bounded with respect to $d$ exactly when it is bounded with respect to $d'$.
:::

## 직관

(2)는 코시 수열이 극한을 찾는 방법을 줍니다. 코시 수열의 항들은 끝내 서로 가까이 붙어 가므로, 그 가운데 일부(부분수열)가 어떤 점 $p$에 모여들면 나머지 항들도 그 부분수열의 항에 붙어서 $p$ 가까이 옵니다. 무리 지어 걷는 사람들 가운데 몇 사람이 어떤 깃발에 가까이 가는 것이 보이면, 그 사람들과 붙어 걷는 다른 사람들도 깃발에 가까이 있다는 것과 같습니다. 코시라는 가정이 없으면 이것은 틀릴 수 있습니다(아래 반례). 증명에서 코시 조건이 쓰이는 곳은 "아무 항과 부분수열의 어떤 항이 가깝다"는 단계 하나입니다.

(3)은 코시 조건을 "번호 $M$ 이후의 항들이 지름이 작은 집합 안에 들어간다"는 그림으로 바꿉니다. 꼬리를 뒤로 미루면 $T_m$은 앞의 $T_m$에 포함되므로 지름이 커지지 않습니다. 정의의 "아무 두 항 $x_n$, $x_k$"가 지름의 "집합 안의 아무 두 점"에 해당합니다.

(4)는 거리를 바꿀 때 무엇이 남는지 말합니다. 새 거리가 옛 거리의 상수배를 넘지 않으면, 옛 거리로 가까워지는 것은 새 거리로도 가까워집니다. 두 방향의 부등식이 모두 있으면 코시 수열, 수렴하는 수열과 그 극한, 유계가 두 거리에서 같습니다.

## 증명

:::idea
(2)에서는 코시 조건의 번호 $M$과 부분수열의 수렴의 번호 $K$를 더한 첨자 $i = M + K$ 하나를 잡아, 아무 항 $x_n$과 부분수열의 항 $x_{n_i}$, 그리고 $p$를 삼각부등식으로 잇는다. (4)에서는 $\varepsilon$ 대신 $\varepsilon (c + 1)^{-1}$을 쓴다.
:::

:::hint
(2)에서 $n_i \ge i$라는 것([[subsequence]]의 (1))이 $x_{n_i}$를 코시 조건의 범위 안에 넣어 줍니다.
:::

:::hint
(4)에서 $c = 0$일 수도 있으므로 $\varepsilon / c$로 나누지 말고 $c + 1$로 나눕니다.
:::

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이고, 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이다. "코시 (n)"은 [[cauchy-sequence-in-metric-space]]의 번호, "지름 (n)"은 [[diameter]]의 번호, "유계 수열 (n)"은 [[bounded-sequence-in-metric-space]]의 번호이다. 자연수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 정수로 읽으나 실수로 읽으나 같다.

**(1).** *부분수열.* $(y_i)$가 $(x_n)$의 부분수열이면 어떤 첨자열 $(n_i)$에 대하여 모든 $i$에서 $y_i = x_{n_i}$이다. $\varepsilon$을 양의 실수라 하고 $M$을 $(x_n)$의 코시 조건이 주는 자연수라 하자. $i \ge M$이고 $j \ge M$이면 [[subsequence]]의 (1)에 의해 $n_i \ge M$이고 $n_j \ge M$이므로 $d(y_i, y_j) = d(x_{n_i}, x_{n_j}) < \varepsilon$이다. 따라서 $(y_i)$는 코시 수열이다.

*꼬리.* $(z_n)$을 $(x_n)$의 $K$-꼬리, 곧 모든 $n$에서 $z_n = x_{n+K}$인 수열이라 하자. [[subsequence]]의 (4)에 의해 $i$에서의 값이 $i + K$인 함수는 첨자열이고 그것으로 얻은 부분수열이 $(z_n)$이므로, $(x_n)$이 코시 수열이면 앞 문단에 의해 $(z_n)$도 코시 수열이다. 거꾸로 $(z_n)$이 코시 수열이라 하고 $\varepsilon$을 양의 실수라 하자. $n \ge M'$이고 $k \ge M'$인 모든 $n$, $k$에서 $d(z_n, z_k) < \varepsilon$인 자연수 $M'$이 있다. $M = M' + K$로 두자. $n \ge M$이고 $k \ge M$이면 $n - K \ge M' \ge 1$이고 $k - K \ge M'$이므로 $n - K$와 $k - K$는 자연수이고, $d(x_n, x_k) = d(z_{n-K}, z_{k-K}) < \varepsilon$이다. 따라서 $(x_n)$은 코시 수열이다.

**(2).** 첨자열 $(n_i)$로 얻은 부분수열 $(x_{n_i})$가 $p$로 수렴한다고 하자. $\varepsilon$을 양의 실수라 하면 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. 코시 수열의 정의에 의해 $n \ge M$이고 $k \ge M$인 모든 $n$, $k$에서 $d(x_n, x_k) < \varepsilon/2$인 자연수 $M$이 있고, [[convergence-in-metric-spaces]]의 (1)에 의해 $i \ge K$인 모든 $i$에서 $d(x_{n_i}, p) < \varepsilon/2$인 자연수 $K$가 있다.

$i = M + K$로 두자. $M$과 $K$는 양의 정수이므로 $i \ge K$이고 $i \ge M$이며, [[subsequence]]의 (1)에 의해 $n_i \ge i \ge M$이다. 이제 $n \ge M$이라 하자. $n \ge M$이고 $n_i \ge M$이므로 $d(x_n, x_{n_i}) < \varepsilon/2$이고, $i \ge K$이므로 $d(x_{n_i}, p) < \varepsilon/2$이다. 거리의 삼각부등식 (iv)와 순서 성질 (2)의 (iv), (1)의 (v)에 의해
$$
\begin{aligned}
d(x_n, p) &\le d(x_n, x_{n_i}) + d(x_{n_i}, p) \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이다. [[convergence-in-metric-spaces]]의 (1)에 의해 $(x_n)$은 $p$로 수렴한다.

**(3).** $E$를 $(x_n)$의 값의 집합이라 하자.

(i) $m \ge m$이므로 $x_m \in T_m$이다. $m \le m'$이고 $y \in T_{m'}$이면 $y = x_k$인 $k \ge m'$이 있고 $k \ge m$이므로 $y \in T_m$이다. $T_m$의 원소는 $(x_n)$의 항이므로 $T_m \subseteq E$이다. $(x_n)$이 유계이면 정의에 의해 $E$가 유계이고, [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 (1)의 (i)에 의해 $T_m$은 유계이다.

(ii) $(x_n)$이 코시 수열이라 하고 $\varepsilon$을 양의 실수라 하자. 코시 (4)에 의해 $(x_n)$은 유계이므로 (i)에 의해 모든 $T_m$은 유계이다. $\varepsilon/2$에 대하여 코시 수열의 정의가 주는 자연수를 $M$이라 하자. $y, z \in T_M$이면 $y = x_n$, $z = x_k$인 $n \ge M$, $k \ge M$이 있으므로 $d(y, z) = d(x_n, x_k) < \varepsilon/2$이다. 지름 (2)의 (iii)에 의해 $\operatorname{diam} T_M \le \varepsilon/2$이고, 순서 성질 (8)에 의해 $\varepsilon/2 < \varepsilon$이므로 $\operatorname{diam} T_M < \varepsilon$이다.

거꾸로 오른쪽 조건이 성립한다고 하고 $\varepsilon$을 양의 실수라 하자. $T_M$이 유계이고 $\operatorname{diam} T_M < \varepsilon$인 $M$이 있다. $n \ge M$이고 $k \ge M$이면 $x_n, x_k \in T_M$이므로 지름 (2)의 (ii)에 의해 $d(x_n, x_k) \le \operatorname{diam} T_M < \varepsilon$이다. 따라서 $(x_n)$은 코시 수열이다.

(iii) $m \ge M$이면 (i)에 의해 $T_m$은 $T_M$의 공집합이 아닌 부분집합이므로, 지름 (4)에 의해 $T_m$은 유계이고 $\operatorname{diam} T_m \le \operatorname{diam} T_M < \varepsilon$이다.

**(4).** 순서 성질 (5)의 (ii)와 (2)의 (iv)에 의해 $0 < c + 1$이고, 순서 성질 (6)의 (i)에 의해 $0 < (c + 1)^{-1}$이다. 양의 실수 $\varepsilon$에 대하여 $\varepsilon' = \varepsilon (c + 1)^{-1}$로 두면 순서 성질 (4)의 (i)에 의해 $0 < \varepsilon'$이다. 실수 $t$가 $0 \le t < \varepsilon'$이면, $0 \le c$이므로 순서 성질 (4)의 (iii)에 의해 $c t \le c \varepsilon'$이고, $0 < \varepsilon'$이므로 $c \varepsilon' < c \varepsilon' + \varepsilon' = (c + 1)\varepsilon' = \varepsilon$이다(순서 성질 (2)의 (ii)와 계산 법칙). 따라서 다음이 성립한다.

(가) $0 \le t < \varepsilon'$이면 $c t < \varepsilon$이다.

(i) $(x_n)$이 $d$로 코시라 하고 $\varepsilon$을 양의 실수라 하자. $\varepsilon'$에 대하여 $d$의 코시 조건이 주는 자연수 $M$을 잡으면, $n \ge M$이고 $k \ge M$인 모든 $n$, $k$에서 $0 \le d(x_n, x_k) < \varepsilon'$이므로 (가)에 의해 $d'(x_n, x_k) \le c \cdot d(x_n, x_k) < \varepsilon$이다. 따라서 $(x_n)$은 $d'$으로 코시이다.

(ii) [[convergence-in-metric-spaces]]의 (1)에 의해 $\varepsilon'$에 대하여 $n \ge M$인 모든 $n$에서 $d(x_n, p) < \varepsilon'$인 자연수 $M$이 있고, (가)에 의해 이 $n$들에서 $d'(x_n, p) \le c \cdot d(x_n, p) < \varepsilon$이다. 같은 항목의 (1)을 $(X, d')$에 쓰면 $(x_n)$은 $(X, d')$에서 $p$로 수렴한다.

(iii) $S \subseteq X$가 $d$로 유계라 하자. $S = \emptyset$이면 $d'$으로도 유계이다. 아니면 $S \subseteq B_d(q, r)$인 $q \in X$와 $r > 0$이 있다. 순서 성질 (5)의 (ii)와 (2)의 (iv)에 의해 $c r < c r + 1$이고, $0 \le c r$(순서 성질 (4)의 (iv))이므로 $0 < c r + 1$이다. $x \in S$이면 $d(q, x) < r$이므로 순서 성질 (4)의 (iii)에 의해 $d'(q, x) \le c \cdot d(q, x) \le c r < c r + 1$이고, $S \subseteq B_{d'}(q, c r + 1)$이다. 따라서 $S$는 $d'$으로 유계이다. 수열이 유계라는 것은 그 값의 집합이 유계라는 것이므로 뒤 문장도 성립한다.

(iv) $d$와 $d'$의 자리를 바꾸어 (i)–(iii)을 쓰면 거꾸로의 방향이 나온다.
:::

## 예시와 반례

:::example[꼬리의 지름으로 보는 n⁻¹]
$\mathbb{R}$에 보통 거리를 주고 $x_n = n^{-1}$로 둡니다. $k \ge m$이면 [[order-properties-of-reals]]의 (10)에 의해 $0 < k^{-1}$이고, $k = m$이면 $k^{-1} = m^{-1}$, $m < k$이면 같은 항목의 (6)의 (ii)에 의해 $k^{-1} < m^{-1}$이므로 $T_m \subseteq [0, m^{-1}]$입니다. $T_m$은 닫힌구간 $[0, m^{-1}]$의 공집합이 아닌 부분집합이므로, [[diameter]]의 (7)과 (4)에 의해 $T_m$은 유계이고 $\operatorname{diam} T_m \le \operatorname{diam} [0, m^{-1}] = m^{-1}$입니다. 양의 실수 $\varepsilon$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $M^{-1} < \varepsilon$인 자연수 $M$이 있고, $\operatorname{diam} T_M \le M^{-1} < \varepsilon$입니다. (3)의 (ii)에 의해 $(x_n)$은 코시 수열입니다.
:::

:::example[평면의 세 거리]
곱집합 $\mathbb{R} \times \mathbb{R}$ 위의 세 거리 $d_{\max}$, $d_E$, $d_{\mathrm{sum}}$은 [[metric-space-examples]]의 (7)에 의해 모든 점 $p$, $q$에서
$$
\begin{aligned}
d_{\max}(p, q) &\le d_E(p, q) \\
&\le d_{\mathrm{sum}}(p, q) \\
&\le 2\, d_{\max}(p, q)
\end{aligned}
$$
를 만족합니다. 그래서 세 거리 가운데 어느 두 거리 $d$, $d'$에도 $d' \le c \cdot d$와 $d \le c' \cdot d'$인 실수 $c, c' \in \{1, 2\}$가 있습니다(예: $d_{\mathrm{sum}} \le 2\, d_{\max} \le 2\, d_E$). (4)의 (iv)에 의해 $\mathbb{R} \times \mathbb{R}$의 수열이 코시 수열인지, 어느 점으로 수렴하는지, 유계인지는 세 거리 가운데 어느 것을 주어도 같습니다.
:::

:::counterexample[수렴하는 부분수열을 가진 발산하는 수열]
자연수 $n$이 홀수이면 $x_n = 0$, 짝수이면 $x_n = n$인 실수열을 봅시다([[even-and-odd]]에 의해 자연수는 짝수이거나 홀수이고 둘 다는 아닙니다). $n_i = 2i - 1$로 정한 함수 $\mathbb{N} \to \mathbb{N}$은 $n_i < n_{i+1}$이므로 [[subsequence]]의 (2)에 의해 첨자열이고, $n_i$는 홀수이므로 그것으로 얻은 부분수열은 모든 항이 $0$인 상수 수열이고, [[basic-limits]]의 (1)에 의해 $0$으로 수렴합니다. 그러나 $(x_n)$은 유계가 아닙니다([[bounded-sequence-in-metric-space]]의 (2)에 의해 [[sequence]]의 뜻으로 따져도 됩니다). 실수 $B$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < m$인 자연수 $m$이 있고, $x_{2m} = 2m$이며 $B < m \le 2m$이기 때문입니다. [[cauchy-sequence-in-metric-space]]의 (4)의 대우에 의해 $(x_n)$은 코시 수열이 아니고, 같은 항목의 (3)의 대우에 의해 발산합니다. (2)에서 코시라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[거리공간의 코시 수열의 한 부분수열이 $p$로, 다른 부분수열이 $q$로 수렴하면 $p$와 $q$는 어떤 관계인가?]
$p = q$입니다. (2)에 의해 수열 자신이 $p$로 수렴하고, 같은 (2)에 의해 $q$로도 수렴합니다. 거리공간은 하우스도르프 공간이므로([[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)) [[limit-unique-in-hausdorff]]의 (1)에 의해 $p = q$입니다.
:::

:::check[자연수 $n$이 짝수이면 $x_n = 1$, 홀수이면 $x_n = -1$인 실수열에서 $\operatorname{diam} T_M$은 얼마인가? 이 수열은 코시 수열인가?]
모든 $M$에서 $\operatorname{diam} T_M = 2$입니다. $T_M$의 원소는 $1$이나 $-1$이고, $M$ 이상인 짝수 $2M$과 홀수 $2M + 1$이 있으므로 $T_M = \{-1, 1\}$입니다. 두 점의 거리는 $0$이나 $2$이므로 [[diameter]]의 (2)의 (ii)와 (iii)에 의해 지름은 $2$입니다. $\varepsilon = 2$에 대하여 $\operatorname{diam} T_M < 2$인 $M$이 없으므로, (3)의 (ii)에 의해 이 수열은 코시 수열이 아닙니다.
:::
