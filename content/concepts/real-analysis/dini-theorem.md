---
title: 디니 정리
title_en: Dini's Theorem
aliases: [디니의 정리, Dini's theorem, 단조 수렴과 고른 수렴]
kind: theorem
field: real-analysis
msc: ["40A30", "54D30"]
level: undergrad
summary: 콤팩트 공간 위의 실숫값 연속 사상의 열이 연속인 사상으로 점별 수렴하고 점마다 값의 수열이 단조이면, 그 수렴은 고르다. 닫힌구간 위에서 0 으로 줄어드는 연속함수열의 꼴을 함께 다루고, 콤팩트, 극한의 연속, 단조 가운데 하나를 뺀 반례를 든다.
requires: [subset, power-set, family-of-sets, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, interval, power-of-a-real-number, sequence, limit-of-sequence, limits-preserve-inequalities, limit-of-sum-and-product, continuous-function, power-function-is-continuous, continuity-of-sum-and-product, geometric-sequence-limit, intermediate-value-theorem, metric-space-examples, topology-examples, open-ball, open-ball-is-open, topological-space, continuous-map, continuity-agrees-with-analysis, metric-subspace-topology, compact-space, closed-interval-is-compact, pointwise-convergence, uniform-convergence, uniform-limit-of-continuous-maps]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.5절 Exercises: 연습문제 6.2.10, 6.2.11 (p.244), 6.2.5 (p.243)"
    checked: original
    note: "'디니 정리'라는 이름은 출처 연습문제 6.2.10(p.244, Hard: 'Prove Dini's theorem')의 것이다. 그 연습문제는 [a, b] 위의 연속함수 f_n 이 0 ≤ f_{n+1}(x) ≤ f_n(x) 이고 0 으로 점별 수렴하면 0 으로 고르게 수렴함을 보이라는 것이고, 이 항목의 (3)이 그 진술이다. 출처 연습문제 6.2.11(p.244)은 [a, b] 위의 연속함수 f_n 이 연속인 f 로 점별 수렴하고 모든 x 에서 (f_n(x) − f(x)) 가 단조이면 고르게 수렴함을 보이라는 것이고, 이 항목의 (1)은 그것을 콤팩트 위상공간 위로 넓힌 것이다(단조의 방향은 점마다 달라도 된다). 출처는 두 연습문제의 증명을 주지 않는다. 이 항목의 증명은 점마다 번호를 고르지 않고, '어떤 번호 N 에서 차가 ε 보다 작은 점들의 집합'들이 이루는 집합족이 두 원소의 합집합에 닫혀 있다는 것과 compact-space 의 (1)(유한 합집합의 보조정리)을 쓴다. 두 번호는 최댓값 대신 합으로 넘는다. (3)의 가정 0 ≤ f_n(x) 는 (1)에 쓰이지 않는다(단조감소이고 0 으로 수렴하면 저절로 0 이상이다). 반례 '단조가 아닌 경우의 예: 닫힌구간 [0, 1] 위의 xⁿ − x²ⁿ'의 xⁿ − x²ⁿ 은 출처 연습문제 6.2.5(p.243: (0, 1) 위의 연속함수열이 연속함수로 점별 수렴하지만 고르지 않은 예를 찾으라, 더 어려운 판은 [0, 1])와 같은 물음에 대한 예이다. 반례 '극한이 연속이 아닌 경우의 예'의 열은 uniform-convergence 의 (9)의 것이고, 그 (9)는 출처 Example 6.1.8 과 같은 발상이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
위상공간, 열린집합은 [[topological-space]]의 것이고, 콤팩트 공간과 열린 덮개는 [[compact-space]]의 것이며, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. $\mathbb{R}$에는 보통 거리의 거리위상을 주고, 이것은 $\mathbb{R}$의 보통 위상이다([[continuity-agrees-with-analysis]]의 (3)). 사상의 열, 값의 수열 $(f_n(x))$, 점별 수렴은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이다. 실수열의 단조증가, 단조감소, 단조는 [[sequence]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고, $(f_n)$은 $X$에서 $\mathbb{R}$로의 사상의 열, $f : X \to \mathbb{R}$는 사상이다.

1. (**디니 정리**, Dini's theorem) $(X, \mathcal{T})$가 콤팩트이고, 모든 $f_n$과 $f$가 연속이며, $(f_n)$이 $f$로 점별 수렴하고, $X$의 모든 점 $x$에서 실수열 $(f_n(x))$가 단조라 하자(단조증가인지 단조감소인지는 점마다 달라도 된다). 그러면 $(f_n)$은 $f$로 고르게 수렴한다.
2. (줄어드는 열과 늘어나는 열) (1)에서 단조의 가정을 "$X$의 모든 점 $x$와 모든 자연수 $n$에서 $f_{n+1}(x) \le f_n(x)$"로 바꾸어도, "모든 $x$와 $n$에서 $f_n(x) \le f_{n+1}(x)$"로 바꾸어도 결론이 성립한다.
3. (닫힌구간에서 $0$으로 줄어드는 열) $a < b$이고 $f_n : [a, b] \to \mathbb{R}$가 모두 해석학 입문의 뜻의 연속함수이며, $[a, b]$의 모든 $x$와 모든 자연수 $n$에서 $0 \le f_{n+1}(x) \le f_n(x)$이고, 모든 $x$에서 실수열 $(f_n(x))$가 $0$으로 수렴한다고 하자. 그러면 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$과 $[a, b]$의 모든 $x$에서 $0 \le f_n(x) < \varepsilon$이다. 곧 $(f_n)$은 값이 $0$인 상수함수로 고르게 수렴한다.
:::

:::english
Topological spaces and open sets are as defined earlier, compact spaces and open covers are those of compact spaces, and continuity is that of continuous maps between topological spaces. $\mathbb{R}$ carries the metric topology of the standard metric, which is the standard topology of $\mathbb{R}$. Sequences of maps, the sequence of values $(f_n(x))$ and pointwise convergence are those of sequences of maps and pointwise convergence, and uniform convergence is that of uniform convergence. Monotone increasing, monotone decreasing and monotone real sequences are as defined earlier. Below, $(X, \mathcal{T})$ is a topological space, $(f_n)$ is a sequence of maps from $X$ to $\mathbb{R}$, and $f : X \to \mathbb{R}$ is a map.

1. (**Dini's theorem**) Suppose $(X, \mathcal{T})$ is compact, all $f_n$ and $f$ are continuous, $(f_n)$ converges pointwise to $f$, and for every point $x$ of $X$ the real sequence $(f_n(x))$ is monotone (whether it is increasing or decreasing may depend on the point). Then $(f_n)$ converges uniformly to $f$.
2. (Decreasing and increasing sequences) The conclusion of (1) still holds if the monotonicity assumption is replaced by "$f_{n+1}(x) \le f_n(x)$ for all points $x$ of $X$ and all natural numbers $n$", or by "$f_n(x) \le f_{n+1}(x)$ for all $x$ and $n$".
3. (Sequences decreasing to $0$ on a closed interval) Let $a < b$, let all $f_n : [a, b] \to \mathbb{R}$ be continuous functions in the sense of introductory analysis, suppose $0 \le f_{n+1}(x) \le f_n(x)$ for all $x$ in $[a, b]$ and all natural numbers $n$, and suppose the real sequence $(f_n(x))$ converges to $0$ for every $x$. Then for every positive real number $\varepsilon$ there is a natural number $N$ such that $0 \le f_n(x) < \varepsilon$ for all $n \ge N$ and all $x$ in $[a, b]$. That is, $(f_n)$ converges uniformly to the constant function with value $0$.
:::

## 직관

점별 수렴에서는 점마다 "어느 번호부터 오차가 $\varepsilon$보다 작다"는 번호가 따로 있습니다. 디니 정리는 세 가지가 함께 있으면 이 번호들을 하나로 묶을 수 있다고 말합니다. 단조이면 한 번 작아진 오차가 다시 커지지 않으므로, 어떤 점에서 번호 $N$이 통하면 그보다 큰 번호도 모두 통합니다. 연속이면 한 점에서 통한 번호 $N$이 그 점의 근방 전체에서도 통합니다. 콤팩트이면 그런 근방 유한 개로 공간 전체를 덮을 수 있어, 그 유한 개의 번호를 넘는 번호 하나가 모든 점에서 통합니다.

비유하자면 물이 빠지는 갯벌의 여러 웅덩이입니다. 웅덩이마다 물이 줄기만 하고 다시 차지 않는다면(단조), 수위는 이웃한 웅덩이끼리 비슷하고(연속), 웅덩이가 유한 개의 구역으로 나뉜다면(콤팩트), 구역마다 기다릴 시간을 모두 합친 만큼 기다리면 어느 웅덩이든 수위가 $\varepsilon$ 아래에 있습니다. "줄기만 한다"가 단조에, "이웃끼리 비슷하다"가 $f_N$과 $f$의 연속에, "유한 개의 구역"이 유한 부분덮개에 맞습니다. 비유와 다른 점은, 수학에서는 구역의 번호를 고르지 않고 "이 번호로 통하는 점들의 집합"이 합집합에 닫혀 있다는 것으로 유한 개를 한꺼번에 처리한다는 것입니다.

세 가정은 모두 증명에 쓰입니다. 반례들이 하나씩 빠진 경우를 보여 줍니다.

## 증명

:::idea
점마다 오차 $\theta_n(x) = |f_n(x) - f(x)|$가 $n$에 대해 줄어든다. "어떤 번호 $N$에서 오차가 $\varepsilon$보다 작은 점들만으로 된 집합" 전체의 집합족은 두 원소의 합집합에 닫혀 있고, 연속성에 의해 모든 점이 그런 열린집합에 든다. 콤팩트성과 유한 합집합의 보조정리로 $X$ 자신이 그 집합족에 든다.
:::

:::hint
먼저 단조인 실수열 $(f_n(x))$가 $f(x)$로 수렴하면 $|f_n(x) - f(x)|$가 $n$에 대해 단조감소임을 보이세요. 증가하는 경우와 감소하는 경우를 나눕니다.
:::

:::hint
집합 $S$에서 번호 $N_1$이, 집합 $T$에서 번호 $N_2$가 통하면 $S \cup T$에서는 $N_1 + N_2$가 통합니다. 이것이 [[compact-space]]의 (1)의 가정입니다.
:::

:::proof
아래에서 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). 자연수 $P$, $Q$에 대하여 $P + Q$는 자연수이고 $P < P + Q$, $Q < P + Q$이다([[even-and-odd]], [[well-ordering-principle]]의 (Z6), (Z7), [[prime-number]]의 (Z1)). 실수의 부등식은 [[order-properties-of-reals]]의 번호로, 절댓값은 [[absolute-value|절댓값]]과 [[triangle-inequality]]의 번호로 인용한다. $\mathbb{R}$의 보통 거리는 $d(u, v) = |u - v|$이다([[metric-space-examples]]의 (1)). [[pointwise-convergence|사상의 열과 점별 수렴]]과 [[uniform-convergence|고른 수렴]]을 줄여 "점별 수렴의 항목", "고른 수렴의 항목"이라 쓴다.

**1단계: 오차는 줄어든다.** (1)의 가정에서 $x \in X$와 자연수 $n$에 대하여 $\theta_n(x) = |f_n(x) - f(x)|$로 둔다. 점별 수렴의 항목의 (8)에 의해 실수열 $(f_n(x))$는 해석학 입문의 뜻으로 $f(x)$로 수렴한다. 모든 자연수 $n$, $m$에서 $n \le m$이면 $\theta_m(x) \le \theta_n(x)$임을 보인다.

- $(f_n(x))$가 단조감소이면 [[sequence]]의 (4)에 의해 $n \le m$에서 $f_m(x) \le f_n(x)$이다. $n$을 정하면 $m \ge n$인 모든 $m$에서 $f(x)$로 수렴하는 수열의 항이 $f_n(x)$ 이하이므로, [[limits-preserve-inequalities]]의 (3)(어떤 번호 이상에서만 성립하는 꼴)에 의해 $f(x) \le f_n(x)$이다. 따라서 [[order-properties-of-reals]]의 (3)의 (i)과 [[absolute-value]]의 (1)에 의해 $\theta_n(x) = f_n(x) - f(x)$이고, $n \le m$이면 [[order-properties-of-reals]]의 (2)의 (i)에 의해 $\theta_m(x) = f_m(x) - f(x) \le f_n(x) - f(x) = \theta_n(x)$이다.
- $(f_n(x))$가 단조증가이면 같은 두 항목에 의해 $n \le m$에서 $f_n(x) \le f_m(x)$이고 $f_n(x) \le f(x)$이다. 따라서 $\theta_n(x) = f(x) - f_n(x)$이고([[absolute-value]]의 (1), (3)), $n \le m$이면 [[order-properties-of-reals]]의 (3)의 (iii)과 (2)의 (i)에 의해 $\theta_m(x) = f(x) - f_m(x) \le f(x) - f_n(x) = \theta_n(x)$이다.

[[sequence]]의 정의에 의해 단조인 수열은 둘 가운데 하나이므로 어느 경우든 성립한다.

**2단계: 집합족.** 양의 실수 $\varepsilon$을 잡고, $\mathcal{K}$를 $\mathscr{P}(X)$의 원소 $S$ 가운데 "자연수 $N$이 있어 $S$의 모든 점 $y$에서 $\theta_N(y) < \varepsilon$"을 만족하는 것 전체로 둔다([[family-of-sets]]의 조건으로 정한 부분집합). 이것은 $X$의 집합족이다.

- $\emptyset \in \mathcal{K}$이다. $N = 1$이면 $\emptyset$에는 따질 점이 없다.
- $S, T \in \mathcal{K}$이면 $S \cup T \in \mathcal{K}$이다. $S$에서 통하는 번호 $N_1$과 $T$에서 통하는 번호 $N_2$를 얻고 $N = N_1 + N_2$로 둔다. $y \in S$이면 $N_1 \le N$이므로 1단계에 의해 $\theta_N(y) \le \theta_{N_1}(y) < \varepsilon$이고, $y \in T$이면 같은 까닭으로 $\theta_N(y) \le \theta_{N_2}(y) < \varepsilon$이다([[order-properties-of-reals]]의 (1)의 (v)). $S \cup T$의 점은 $S$나 $T$에 들므로 $N$이 $S \cup T$에서 통한다.

따라서 [[compact-space]]의 (1)의 가정이 성립한다.

**3단계: 모든 점은 $\mathcal{K}$에 드는 열린집합에 속한다.** $\mathcal{U} = \{U \in \mathcal{T} : U \in \mathcal{K}\}$로 두면 $\mathcal{U} \subseteq \mathcal{T}$이고 $\mathcal{U} \subseteq \mathcal{K}$이다. $x \in X$를 잡는다. 점별 수렴의 항목의 (2)에 의해 자연수 $N$이 있어 $n \ge N$이면 $|f_n(x) - f(x)| < \varepsilon$이고, 특히 $\theta_N(x) < \varepsilon$이다. $\eta = \varepsilon - \theta_N(x)$로 두면 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < \eta$이고 같은 항목의 (8)에 의해 $0 < \eta \cdot 2^{-1}$이다.

[[open-ball-is-open|열린 공이 열린집합이라는 정리]]의 (1)과 [[topology-examples]]의 (4)에 의해 열린 공 $W_1 = B(f_N(x), \eta \cdot 2^{-1})$과 $W_2 = B(f(x), \eta \cdot 2^{-1})$은 $\mathbb{R}$의 열린집합이고 [[open-ball]]의 (1)에 의해 각각 $f_N(x)$와 $f(x)$를 원소로 갖는다. $f_N$과 $f$는 연속이므로 [[continuous-map|위상공간 사이의 연속함수]]의 정의에 의해 역상 $U_1 = f_N^{-1}(W_1)$과 $U_2 = f^{-1}(W_2)$는 $X$의 열린집합이고 둘 다 $x$를 원소로 갖는다. $U = U_1 \cap U_2$로 두면 [[topological-space]]의 위상의 조건 (iii)에 의해 $U \in \mathcal{T}$이고 $x \in U$이다.

$y \in U$이면 $|f_N(y) - f_N(x)| < \eta \cdot 2^{-1}$이고 $|f(x) - f(y)| < \eta \cdot 2^{-1}$이다([[absolute-value]]의 (3)). 실수의 계산으로 $f_N(y) - f(y) = (f_N(x) - f(x)) + (f_N(y) - f_N(x)) + (f(x) - f(y))$이므로, [[triangle-inequality]]의 (5)와 [[order-properties-of-reals]]의 (2)의 (iii), (iv)에 의해
$$
\begin{aligned}
\theta_N(y) &\le \theta_N(x) + |f_N(y) - f_N(x)| \\
&\quad + |f(x) - f(y)| \\
&< \theta_N(x) + \eta = \varepsilon
\end{aligned}
$$
이다. 따라서 번호 $N$이 $U$에서 통하므로 $U \in \mathcal{K}$이고 $U \in \mathcal{U}$이다. 곧 $x \in \bigcup \mathcal{U}$이다. $x$를 아무렇게나 잡았으므로 $\bigcup \mathcal{U} = X$이고 $\mathcal{U}$는 $X$의 열린 덮개이다.

**4단계: 유한 부분덮개.** $(X, \mathcal{T})$가 콤팩트이므로 $\mathcal{U}$의 유한 부분덮개 $\mathcal{V}$가 있다. $\mathcal{V} \subseteq \mathcal{U} \subseteq \mathcal{K}$이고 $\mathcal{V}$는 유한집합이므로, [[compact-space]]의 (1)의 (i)에 의해 $X = \bigcup \mathcal{V} \in \mathcal{K}$이다. 곧 자연수 $N$이 있어 $X$의 모든 점 $y$에서 $\theta_N(y) < \varepsilon$이다. $n \ge N$이고 $y \in X$이면 1단계에 의해 $|f_n(y) - f(y)| = \theta_n(y) \le \theta_N(y) < \varepsilon$이다. 고른 수렴의 항목의 (8)에 의해 $(f_n)$은 $f$로 고르게 수렴한다. 이것이 (1)이다.

**(2).** 모든 $x$와 $n$에서 $f_{n+1}(x) \le f_n(x)$이면 [[sequence]]의 정의에 의해 모든 $x$에서 $(f_n(x))$는 단조감소이므로 단조이고, 늘어나는 꼴이면 단조증가이므로 단조이다. 어느 쪽이든 (1)이 적용된다.

**(3).** $[a, b]$에 보통 거리의 부분공간 거리의 거리위상을 준다. [[metric-subspace-topology]]의 (1)에 의해 이것은 $\mathbb{R}$의 보통 위상의 부분공간 위상이므로, [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 콤팩트 공간이다. [[continuity-agrees-with-analysis]]의 (3)에 의해 $f_n$은 위상의 뜻으로 연속이고, 값이 $0$인 상수함수 $f$는 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이다. 가정과 점별 수렴의 항목의 (8)에 의해 $(f_n)$은 $f$로 점별 수렴하고, (2)에 의해 $f$로 고르게 수렴한다. 고른 수렴의 항목의 (8)에 의해 양의 실수 $\varepsilon$마다 자연수 $N$이 있어 $n \ge N$과 모든 $x$에서 $|f_n(x) - 0| < \varepsilon$이고, 가정 $0 \le f_n(x)$와 [[absolute-value]]의 (1)에 의해 $0 \le f_n(x) < \varepsilon$이다.
:::

## 예시와 반례

:::counterexample[콤팩트가 아닌 정의역의 예]
$D = \{x \in \mathbb{R} : 0 \le x < 1\}$에 보통 거리의 부분공간 거리를 주고, $f_n$을 [[uniform-convergence|고른 수렴]]의 (9)의 $p_n$의 $D$로의 제한이라 합시다. $f_n(x) = x^n$입니다. [[power-function-is-continuous]]의 (1)과 [[continuous-function]]의 (5), [[continuity-agrees-with-analysis]]의 (3)에 의해 $f_n$은 연속입니다. $0 < x < 1$이면 [[power-of-a-real-number]]의 (6)의 (iv)에 의해 $x^{n+1} < x^n$이고, $x = 0$이면 같은 항목의 (2)의 (iv)에 의해 $0^{n+1} = 0 = 0^n$이므로, 모든 점에서 $(f_n(x))$는 단조감소입니다. (9)의 (i)과 [[pointwise-convergence|사상의 열과 점별 수렴]]의 (7)에 의해 $(f_n)$은 연속인 상수함수 $0$으로 점별 수렴합니다. 그런데 (9)의 (ii)에 의해 $(f_n)$은 $D$ 위에서 고르게 수렴하지 않습니다. 디니 정리의 가정 가운데 콤팩트만 빠졌으므로, 이 예는 거꾸로 $D$가 콤팩트가 아님도 보여 줍니다.
:::

:::counterexample[극한이 연속이 아닌 경우의 예]
같은 $x^n$을 $[0, 1]$ 위에서 보면, $[0, 1]$은 [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (1)에 의해 콤팩트이고 앞 반례와 같은 까닭으로 각 $p_n$은 연속이며 점마다 단조감소입니다. 그러나 점별 극한 $h$는 [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한에 관한 정리]]의 (6)에 의해 $1$에서 불연속이고, (9)의 (ii)에 의해 $(p_n)$은 고르게 수렴하지 않습니다. 극한의 연속이라는 가정만 빠진 예입니다.
:::

:::counterexample[단조가 아닌 경우의 예: 닫힌구간 [0, 1] 위의 xⁿ − x²ⁿ]
$[0, 1]$ 위에서 $q_n(x) = x^n - x^{2n}$으로 정한 열을 생각합시다([[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)). [[power-function-is-continuous]]의 (1)과 [[continuous-function]]의 (5), [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 $q_n$은 연속함수입니다. [[power-of-a-real-number]]의 (2)의 (i)에 의해 $x^{2n} = x^n x^n$입니다.

- $0 \le x < 1$이면 [[geometric-sequence-limit]]의 (1)에 의해 $(x^n)$은 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (3)과 (2)에 의해 $x^n - x^n x^n$은 $0 - 0 \cdot 0 = 0$으로 수렴합니다.
- $x = 1$이면 모든 $n$에서 $q_n(1) = 1 - 1 = 0$입니다.

그래서 $(q_n)$은 연속인 상수함수 $0$으로 점별 수렴합니다. 이 수렴은 고르지 않습니다. 고르게 수렴한다면 [[uniform-convergence|고른 수렴]]의 (2)에 의해 그 극한은 $0$이고, $\varepsilon = 4^{-1}$에 대한 번호 $N$이 있어 모든 $x$에서 $|q_N(x)| < 4^{-1}$이어야 합니다. 그런데 $x$를 $x^N$으로 보내는 함수는 $[0, 1]$에서 연속이고 $0$에서 $0$, $1$에서 $1$이므로, [[intermediate-value-theorem]]의 (1)에 의해 $c^N = 2^{-1}$인 $c \in (0, 1)$이 있고, $q_N(c) = 2^{-1} - 2^{-1} \cdot 2^{-1} = 4^{-1}$이어서 $|q_N(c)| < 4^{-1}$이 아닙니다. 따라서 $(q_n)$은 고르게 수렴하지 않습니다. $[0, 1]$은 콤팩트이고 $q_n$과 극한은 연속이므로, 디니 정리에 의해 어떤 점 $x$에서는 $(q_n(x))$가 단조가 아니어야 합니다. 단조라는 가정만 빠진 예입니다.
:::

## 확인 질문

:::check[X 가 유한집합이고 이산위상을 주면, 디니 정리의 가정 가운데 무엇이 저절로 성립하는가?]
콤팩트와 연속이 저절로 성립합니다. [[compact-space]]의 (8)의 (ii)에 의해 유한집합 위의 위상공간은 콤팩트이고, [[continuous-map|위상공간 사이의 연속함수]]의 (3)에 의해 이산위상에서 나가는 함수는 모두 연속입니다. 그래서 이때 디니 정리는 "점마다 단조이고 점별 수렴하면 고르게 수렴한다"가 됩니다.
:::

:::check[(3)의 가정에서 0 ≤ f_n(x) 를 빼도 결론의 "고르게 수렴한다"는 성립하는가?]
성립합니다. (2)의 줄어드는 꼴은 $0 \le f_n(x)$를 가정하지 않습니다. 실제로 줄어들면서 $0$으로 수렴하는 실수열은 증명의 1단계에서처럼 모든 항이 $0$ 이상이므로, 그 가정은 다른 가정에서 나옵니다.
:::
