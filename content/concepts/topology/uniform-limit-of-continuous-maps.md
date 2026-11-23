---
title: 연속 사상의 고른 극한은 연속이다
title_en: The Uniform Limit of Continuous Maps Is Continuous
aliases: [고른 극한의 연속성, 연속함수열의 고른 극한, uniform limit theorem, uniform limit of continuous functions, 고른 극한과 고른 연속, 립시츠 사상의 점별 극한]
kind: theorem
field: topology
msc: ["54C35", "40A30"]
level: undergrad
summary: 위상공간에서 거리공간으로의 사상들이 한 점에서 연속이고 사상 f 로 고르게 수렴하면 f 도 그 점에서 연속이다. 따라서 연속 사상의 고른 극한은 연속이다. 정의역이 거리공간이면 고르게 연속인 사상의 고른 극한은 고르게 연속이고, 공통 상수 K 의 K-립시츠 사상의 점별 극한은 K-립시츠이다. 점별 극한은 연속이 아닐 수 있다. 모든 양수 ε 마다 한 점에서 연속이고 모든 점에서 ε 가까운 사상이 하나 있으면 f 도 그 점에서 연속이라는 판정을 함께 둔다.
requires: [basic-limits, limit-of-sum-and-product, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, continuous-function, power-function-is-continuous, metric-space, metric-space-examples, topology-examples, open-ball, open-ball-is-open, open-set-in-metric-space, topological-space, continuous-map, continuity-criteria, continuity-agrees-with-analysis, uniformly-continuous-map, lipschitz-map, pointwise-convergence, uniform-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.1절 Continuity of the limit: Example 6.2.1 (p.234), Theorem 6.2.2 와 증명 (p.235); 6.2.5절 연습문제 6.2.6 (p.243), 6.2.18 (p.245)"
    checked: original
    note: "출처 Theorem 6.2.2(p.235)는 S ⊂ ℝ 위의 연속함수 f_n : S → ℝ 가 f 로 고르게 수렴하면 f 가 연속이라는 것이고, 이 항목의 (3)이 그 진술이다. 출처의 증명은 x 로 수렴하는 수열 (x_n) 을 잡아 f(x_m) 이 f(x) 로 수렴함을 ε/3 으로 보이고 '따라서 f 는 x 에서 연속'이라 맺는다. 이것은 수열 판정의 역방향(수열로 수렴을 보존하면 연속)이고, 해석학 입문 sequences-and-continuity 는 이 방향을 싣지 않았다. 이 항목은 수열을 쓰지 않고, 열린 공과 근방으로 (1)을 같은 ε/3 의 삼각부등식으로 직접 증명한다. 정의역을 위상공간, 공역을 거리공간으로 넓힌 것과 한 점에서의 꼴 (1)은 이 항목의 것이다. (4)는 출처 6장에서 진술로 찾지 못했다(6장 p.227–252 에서 'uniformly continuous' 는 0건이고, 'uniform limit' 과 'uniformly convergent' 로 나온 5곳은 Theorem 6.2.10 의 증명, 거듭제곱급수(6.2.4절), 연습문제 6.2.18 a), 피카르 정리(6.3절)의 문장이다). (5)는 출처 연습문제 6.2.18 b)(p.245: 같은 상수 K 로 립시츠인 f_n : S → ℝ 가 f 로 점별 수렴하면 f 는 상수 K 로 립시츠)와 같은 진술을 거리공간 사이의 사상으로 적은 것이다. (7)은 (1)의 ε/3 논법을 사상의 열 대신 가까운 사상 하나로 적은 것이고, 출처 Theorem 6.2.2 의 증명과 같은 세 항의 어림을 쓴다. (6)은 출처 Example 6.2.1(p.234: [0, 1] 위의 연속함수 f_n 의 점별 극한이 0 에서 불연속)과 같은 발상이고, 이 항목은 함수를 uniform-convergence 의 (9)의 xⁿ 으로 바꾸었다. 확인 'ℝ 에서 ℝ 로의 열에서 n번째 사상이 0 에서 n⁻¹, 다른 점에서 0 이면, 각 사상은 0 에서 연속인가? 고른 극한은 0 에서 연속인가?'은 출처 연습문제 6.2.6(p.243: 어디서나 불연속인 함수열의 고른 극한도 어디서나 불연속인가)과 같은 발상이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 연속과 "$c$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 거리공간, 열린 공 $B(y, r)$, 실수의 보통 거리는 [[metric-space]], [[open-ball]], [[metric-space-examples]]의 것이고, 거리공간에는 늘 거리위상([[topology-examples]])을 준다. 고르게 연속인 사상과 $K$-립시츠 사상은 [[uniformly-continuous-map]], [[lipschitz-map]]의 것이다. 사상의 열과 점별 수렴은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이다. 실함수의 연속은 해석학 입문의 [[continuous-function|연속함수]]의 것이다. 아래에서 $(Y, d_Y)$는 거리공간이고, (1)과 (2)에서 $(X, \mathcal{T})$는 위상공간이며 $(f_n)$은 $X$에서 $Y$로의 사상의 열, $f : X \to Y$는 사상이다.

1. (한 점에서) $c \in X$라 하자. 모든 자연수 $n$에서 $f_n$이 $c$에서 연속이고 $(f_n)$이 $f$로 고르게 수렴하면, $f$는 $c$에서 연속이다.
2. (연속 사상) 모든 자연수 $n$에서 $f_n$이 연속이고 $(f_n)$이 $f$로 고르게 수렴하면, $f$는 연속이다.
3. (실함수) $S$가 $\mathbb{R}$의 부분집합이고, $f_n : S \to \mathbb{R}$가 모두 해석학 입문의 뜻의 연속함수이며, $f : S \to \mathbb{R}$에 대하여 모든 양의 실수 $\varepsilon$마다 자연수 $N$이 있어 $n \ge N$과 $S$의 모든 $x$에서 $|f_n(x) - f(x)| < \varepsilon$이면, $f$는 해석학 입문의 뜻의 연속함수이다.
4. (고르게 연속) $(X, d_X)$가 거리공간이고 $f_n : X \to Y$가 모두 고르게 연속이며 $(f_n)$이 $f : X \to Y$로 고르게 수렴하면, $f$는 고르게 연속이다.
5. (립시츠, 점별 극한) $(X, d_X)$가 거리공간이고 $K$가 실수이며 $f_n : X \to Y$가 모두 $K$-립시츠이고 $(f_n)$이 $f : X \to Y$로 점별 수렴하면, $f$는 $K$-립시츠이다.
6. (점별 극한은 연속이 아닐 수 있다) [[uniform-convergence|고른 수렴]]의 (9)의 열 $(p_n)$에서 $p_n : [0, 1] \to \mathbb{R}$는 모두 연속함수이지만, 그 점별 극한 $h$는 $1$에서 불연속이다. 따라서 (2)와 (3)의 "고르게 수렴"을 "점별 수렴"으로 바꾸면 결론이 성립하지 않을 수 있다.
7. (가까운 사상 하나로 하는 판정) $(X, \mathcal{T})$가 위상공간이고 $f : X \to Y$가 사상이며 $c \in X$라 하자. 모든 양의 실수 $\varepsilon$에 대하여 $c$에서 연속인 사상 $g : X \to Y$로서 $X$의 모든 점 $x$에서 $d_Y(g(x), f(x)) < \varepsilon$인 것이 있으면, $f$는 $c$에서 연속이다. 따라서 모든 양의 실수 $\varepsilon$에 대하여 연속인 사상 $g : X \to Y$로서 $X$의 모든 점 $x$에서 $d_Y(g(x), f(x)) < \varepsilon$인 것이 있으면, $f$는 연속이다.
:::

:::english
Topological spaces and open sets are as defined earlier, and continuity and "continuous at $c$" are those of continuous maps between topological spaces. Metric spaces, open balls $B(y, r)$ and the standard metric on $\mathbb{R}$ are as defined earlier, and a metric space always carries its metric topology. Uniformly continuous maps and $K$-Lipschitz maps are as defined earlier. Sequences of maps and pointwise convergence are those of sequences of maps and pointwise convergence, and uniform convergence is that of uniform convergence. Continuity of real functions is that of introductory analysis. Below, $(Y, d_Y)$ is a metric space; in (1) and (2), $(X, \mathcal{T})$ is a topological space, $(f_n)$ is a sequence of maps from $X$ to $Y$, and $f : X \to Y$ is a map.

1. (At a point) Let $c \in X$. If $f_n$ is continuous at $c$ for every natural number $n$ and $(f_n)$ converges uniformly to $f$, then $f$ is continuous at $c$.
2. (Continuous maps) If $f_n$ is continuous for every natural number $n$ and $(f_n)$ converges uniformly to $f$, then $f$ is continuous.
3. (Real functions) Let $S$ be a subset of $\mathbb{R}$, let all $f_n : S \to \mathbb{R}$ be continuous functions in the sense of introductory analysis, and let $f : S \to \mathbb{R}$ be such that for every positive real number $\varepsilon$ there is a natural number $N$ with $|f_n(x) - f(x)| < \varepsilon$ for all $n \ge N$ and all $x$ in $S$. Then $f$ is a continuous function in the sense of introductory analysis.
4. (Uniformly continuous) If $(X, d_X)$ is a metric space, all $f_n : X \to Y$ are uniformly continuous, and $(f_n)$ converges uniformly to $f : X \to Y$, then $f$ is uniformly continuous.
5. (Lipschitz, pointwise limit) If $(X, d_X)$ is a metric space, $K$ is a real number, all $f_n : X \to Y$ are $K$-Lipschitz, and $(f_n)$ converges pointwise to $f : X \to Y$, then $f$ is $K$-Lipschitz.
6. (A pointwise limit need not be continuous) For the sequence $(p_n)$ of (9) in uniform convergence, every $p_n : [0, 1] \to \mathbb{R}$ is a continuous function, but its pointwise limit $h$ is discontinuous at $1$. Hence if "converges uniformly" in (2) and (3) is replaced by "converges pointwise", the conclusion may fail.
7. (Criterion by a single nearby map) Let $(X, \mathcal{T})$ be a topological space, $f : X \to Y$ a map, and $c \in X$. If for every positive real number $\varepsilon$ there is a map $g : X \to Y$ continuous at $c$ with $d_Y(g(x), f(x)) < \varepsilon$ for all points $x$ of $X$, then $f$ is continuous at $c$. Hence, if for every positive real number $\varepsilon$ there is a continuous map $g : X \to Y$ with $d_Y(g(x), f(x)) < \varepsilon$ for all points $x$ of $X$, then $f$ is continuous.
:::

## 직관

$f(y)$가 $f(c)$에 가깝다는 것을 세 걸음으로 잇습니다. $f(y)$에서 $f_N(y)$로, $f_N(y)$에서 $f_N(c)$로, $f_N(c)$에서 $f(c)$로 갑니다. 첫째와 셋째 걸음은 고른 수렴이 한꺼번에 작게 만들고, 둘째 걸음은 $f_N$ 하나의 연속이 $c$ 둘레에서 작게 만듭니다. 세 걸음을 각각 $\varepsilon$의 셋째 몫보다 짧게 하면 모두 합쳐 $\varepsilon$보다 짧습니다.

첫째 걸음에서 "고르게"가 쓰이는 곳은, 잇는 점 $y$가 $c$ 둘레의 아무 점이어서 미리 정할 수 없다는 데 있습니다. 번호 $N$이 $y$마다 다르면 둘째 걸음의 $f_N$이 $y$마다 바뀌어 $c$ 둘레를 하나로 잡을 수 없습니다. 점별 수렴만으로는 (6)처럼 극한이 연속이 아닐 수 있습니다.

(4)의 고른 연속도 같은 세 걸음으로 되고, 둘째 걸음의 $\delta$가 점에 따르지 않으므로 결론도 점에 따르지 않습니다. 반면 (5)의 립시츠 부등식은 두 점 $p$, $q$를 먼저 정해 놓고 따지는 부등식이라, 그 두 점에서만 극한을 쓰면 되므로 점별 수렴으로 충분합니다.

## 증명

:::idea
$f_N$이 $f$에 고르게 $\varepsilon/3$ 가까운 번호 $N$을 하나 정하고, $f_N$의 연속이 주는 $c$의 근방에서 거리의 삼각부등식을 두 번 쓴다.
:::

:::hint
$f(c)$를 원소로 갖는 열린집합 $V$에는 $B(f(c), \varepsilon) \subseteq V$인 $\varepsilon$이 있습니다. $f_N$의 연속을 열린 공 $B(f_N(c), \varepsilon/3)$에 써 보세요.
:::

:::hint
(5)에서는 고정한 두 점 $p$, $q$에서만 값의 수열이 수렴하면 됩니다. $d_Y(f(p), f(q)) - K d_X(p, q)$가 모든 양수보다 작다는 것을 보이세요.
:::

:::proof
아래에서 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). 자연수 $P$, $Q$에 대하여 $P + Q$는 자연수이고 $P < P + Q$, $Q < P + Q$이다([[even-and-odd]], [[well-ordering-principle]]의 (Z6), (Z7), [[prime-number]]의 (Z1)). 실수의 부등식은 [[order-properties-of-reals]]의 번호로 인용하고, $\varepsilon \cdot 3^{-1}$의 세 배가 $\varepsilon$이라는 것과 $\varepsilon \cdot 2^{-1}$의 두 배가 $\varepsilon$이라는 것은 [[real-number-arithmetic]]의 계산이다. 양수 $\varepsilon$에 대하여 $0 < \varepsilon \cdot 2^{-1}$, $0 < \varepsilon \cdot 3^{-1}$이다(같은 항목의 (10)과 (6)의 (i), (4)의 (iv)). 거리의 삼각부등식과 대칭은 [[metric-space]]의 조건 (iv), (iii)이고, 네 점의 부등식 $d(x, w) \le d(x, y) + d(y, z) + d(z, w)$는 그 항목의 (3)이다. [[uniform-convergence|고른 수렴]]과 [[pointwise-convergence|사상의 열과 점별 수렴]]을 줄여 "고른 수렴의 항목", "점별 수렴의 항목"이라 쓴다.

**(1).** $V$가 $Y$의 열린집합이고 $f(c) \in V$라 하자. [[topology-examples]]의 (4)에 의해 $V$는 $(Y, d_Y)$에서 열린집합이므로, [[open-set-in-metric-space]]의 정의에 의해 양의 실수 $\varepsilon$이 있어 $B(f(c), \varepsilon) \subseteq V$이다. 고른 수렴의 정의를 $\varepsilon \cdot 3^{-1}$에 쓰면 자연수 $N$이 있어 $n \ge N$이고 $y \in X$이면 $d_Y(f_n(y), f(y)) < \varepsilon \cdot 3^{-1}$이다. 특히 $n = N$에서 모든 $y \in X$에 대하여 $d_Y(f_N(y), f(y)) < \varepsilon \cdot 3^{-1}$이다.

[[open-ball-is-open|열린 공이 열린집합이라는 정리]]의 (1)과 [[topology-examples]]의 (4)에 의해 $W = B(f_N(c), \varepsilon \cdot 3^{-1})$은 $Y$의 열린집합이고, [[open-ball]]의 (1)에 의해 $f_N(c) \in W$이다. $f_N$이 $c$에서 연속이므로 [[continuous-map|위상공간 사이의 연속함수]]의 "$c$에서 연속"의 정의에 의해 $X$의 열린집합 $U$가 있어 $c \in U$이고 $f_N(U) \subseteq W$이다.

$y \in U$라 하자. $f_N(y) \in W$이므로 $d_Y(f_N(c), f_N(y)) < \varepsilon \cdot 3^{-1}$이다. 네 점의 부등식과 대칭에 의해
$$
\begin{aligned}
&d_Y(f(c), f(y)) \\
&\quad \le d_Y(f(c), f_N(c)) \\
&\qquad + d_Y(f_N(c), f_N(y)) \\
&\qquad + d_Y(f_N(y), f(y)) < \varepsilon
\end{aligned}
$$
이다(세 항이 모두 $\varepsilon \cdot 3^{-1}$보다 작으므로 [[order-properties-of-reals]]의 (2)의 (iv)를 두 번 쓴다). 따라서 $f(y) \in B(f(c), \varepsilon) \subseteq V$이다. 곧 $f(U) \subseteq V$이다. $V$를 아무렇게나 잡았으므로 $f$는 $c$에서 연속이다.

**(2).** $c \in X$를 잡으면 $f_n$이 모두 연속이므로 [[continuity-criteria]]의 (2)에 의해 모두 $c$에서 연속이고, (1)에 의해 $f$는 $c$에서 연속이다. 이것이 $X$의 모든 점에서 성립하므로 같은 (2)에 의해 $f$는 연속이다.

**(3).** $S$에 보통 거리의 부분공간 거리 $d_S$를 주고 그 거리위상을 준다([[metric-space-examples]]의 (3)). [[continuity-agrees-with-analysis]]의 (3)에 의해 해석학 입문의 뜻의 연속함수 $f_n$은 $\mathbb{R}$에 보통 위상을 줄 때 위상의 뜻으로 연속이고, 같은 (3)에 의해 $\mathbb{R}$의 보통 거리의 거리위상이 보통 위상이다. 가정은 고른 수렴의 항목의 (8)의 조건이므로 $(f_n)$은 $f$로 고르게 수렴한다. (2)에 의해 $f$는 위상의 뜻으로 연속이고, 다시 [[continuity-agrees-with-analysis]]의 (3)에 의해 해석학 입문의 뜻의 연속함수이다.

**(4).** 양의 실수 $\varepsilon$을 잡는다. (1)에서처럼 자연수 $N$이 있어 모든 $y \in X$에서 $d_Y(f_N(y), f(y)) < \varepsilon \cdot 3^{-1}$이다. $f_N$이 고르게 연속이므로 [[uniformly-continuous-map]]의 정의에 의해 양의 실수 $\delta$가 있어 $d_X(p, q) < \delta$인 모든 $p, q \in X$에서 $d_Y(f_N(p), f_N(q)) < \varepsilon \cdot 3^{-1}$이다. 그런 $p$, $q$에서 (1)의 계산처럼
$$
\begin{aligned}
&d_Y(f(p), f(q)) \\
&\quad \le d_Y(f(p), f_N(p)) \\
&\qquad + d_Y(f_N(p), f_N(q)) \\
&\qquad + d_Y(f_N(q), f(q)) < \varepsilon
\end{aligned}
$$
이다. 따라서 $f$는 고르게 연속이다.

**(5).** 먼저 $X = \emptyset$이면 [[lipschitz-map]]의 조건 가운데 "$X$의 모든 점 $p$, $q$에서"는 따질 점이 없으므로, $0 \le K$만 확인하면 된다. $f_1$이 $K$-립시츠이므로 그 정의에 의해 $0 \le K$이다. 이것은 $X$가 공집합이 아닐 때도 같다.

$p, q \in X$와 양의 실수 $\varepsilon$을 잡는다. 점별 수렴의 항목의 (2)에 의해 자연수 $M_1$이 있어 $n \ge M_1$이면 $d_Y(f_n(p), f(p)) < \varepsilon \cdot 2^{-1}$이고, 자연수 $M_2$가 있어 $n \ge M_2$이면 $d_Y(f_n(q), f(q)) < \varepsilon \cdot 2^{-1}$이다. $n = M_1 + M_2$로 두면 두 부등식이 함께 성립하고, $f_n$이 $K$-립시츠이므로 $d_Y(f_n(p), f_n(q)) \le K\,d_X(p, q)$이다. 네 점의 부등식에 의해
$$
\begin{aligned}
&d_Y(f(p), f(q)) \\
&\quad \le d_Y(f(p), f_n(p)) \\
&\qquad + d_Y(f_n(p), f_n(q)) \\
&\qquad + d_Y(f_n(q), f(q)) \\
&\quad < \varepsilon + K\,d_X(p, q)
\end{aligned}
$$
이다([[order-properties-of-reals]]의 (2)의 (iii), (iv)). $t = d_Y(f(p), f(q)) - K\,d_X(p, q)$로 두면 같은 항목의 (3)의 (i)에 의해 $t < \varepsilon$이고, 따라서 $t \le \varepsilon$이다. 이것이 모든 양수 $\varepsilon$에서 성립하므로 같은 항목의 (9)에 의해 $t \le 0$, 곧 $d_Y(f(p), f(q)) \le K\,d_X(p, q)$이다. $p$, $q$를 아무렇게나 잡았으므로 $f$는 $K$-립시츠이다.

**(6).** [[power-function-is-continuous]]의 (1)에 의해 $x$를 $x^n$으로 보내는 함수 $\mathbb{R} \to \mathbb{R}$은 연속함수이고, [[continuous-function]]의 (5)에 의해 그 $[0, 1]$로의 제한 $p_n$은 연속함수이다. 고른 수렴의 항목의 (9)의 (i)에 의해 $(p_n)$은 $h$로 점별 수렴하고, $h$는 $0 \le x < 1$에서 $0$이고 $h(1) = 1$이다.

$h$가 $1$에서 불연속임을 [[continuous-function]]의 (1)로 보인다. $\varepsilon = 2^{-1}$로 두고 양의 실수 $\delta$를 잡는다. $t = 2^{-1}\min\{\delta, 1\}$, $x_0 = 1 - t$로 두면, [[absolute-value]]의 (10)에 의해 $\min\{\delta, 1\}$은 양수이고 $\delta$ 이하, $1$ 이하이므로, [[order-properties-of-reals]]의 (8)과 (1)의 (v)에 의해 $0 < t < \delta$, $t < 1$이고, 같은 항목의 (3)의 (i)에 의해 $0 < x_0 < 1$이므로 $x_0 \in [0, 1]$, $h(x_0) = 0$이며, [[absolute-value]]의 (3)과 (1)에 의해 $|x_0 - 1| = t < \delta$이다. 그런데 $|h(x_0) - h(1)| = |0 - 1| = 1 \ge 2^{-1}$이다. 따라서 $h$는 $1$에서 불연속이다.

이 열은 (3)의 가정 가운데 고른 수렴만 빼고 모두 만족하고 결론을 만족하지 않으므로, "고르게"를 "점별로"로 바꾸면 (3)이 성립하지 않는다. [[continuity-agrees-with-analysis]]의 (3)에 의해 $[0, 1]$에 부분공간 거리의 거리위상을 주면 위상의 뜻으로도 같으므로 (2)도 그렇다.

**(7).** $V$가 $Y$의 열린집합이고 $f(c) \in V$라 하자. (1)의 증명에서처럼 양의 실수 $\varepsilon$이 있어 $B(f(c), \varepsilon) \subseteq V$이다. 가정을 $\varepsilon \cdot 3^{-1}$에 쓰면 $c$에서 연속인 사상 $g : X \to Y$가 있어 모든 $y \in X$에서 $d_Y(g(y), f(y)) < \varepsilon \cdot 3^{-1}$이다. [[open-ball-is-open|열린 공이 열린집합이라는 정리]]의 (1)과 [[topology-examples]]의 (4)에 의해 $W = B(g(c), \varepsilon \cdot 3^{-1})$은 $Y$의 열린집합이고 [[open-ball]]의 (1)에 의해 $g(c) \in W$이므로, $g$가 $c$에서 연속이라는 것에 의해 $X$의 열린집합 $U$가 있어 $c \in U$이고 $g(U) \subseteq W$이다. $y \in U$이면 $d_Y(g(c), g(y)) < \varepsilon \cdot 3^{-1}$이고, 네 점의 부등식과 대칭에 의해
$$
\begin{aligned}
&d_Y(f(c), f(y)) \\
&\quad \le d_Y(f(c), g(c)) \\
&\qquad + d_Y(g(c), g(y)) \\
&\qquad + d_Y(g(y), f(y)) < \varepsilon
\end{aligned}
$$
이므로 $f(y) \in B(f(c), \varepsilon) \subseteq V$이다. 곧 $f(U) \subseteq V$이고 $f$는 $c$에서 연속이다. (1)은 이 (7)에서 $g = f_N$으로 둔 경우와 같다.

둘째 문장: $g$가 연속이면 [[continuity-criteria]]의 (2)에 의해 $g$는 모든 점에서 연속이므로, 첫째 문장에 의해 $f$는 $X$의 모든 점에서 연속이고, 같은 (2)에 의해 연속이다.
:::

## 예시와 반례

:::example[점별 극한에서 거꾸로 읽기]
(6)의 열은 (3)의 대우로 다시 볼 수 있습니다. $(p_n)$이 어떤 함수 $g$로 고르게 수렴했다면 [[uniform-convergence|고른 수렴]]의 (2)에 의해 $g = h$이고, (3)에 의해 $h$는 연속이어야 합니다. $h$는 $1$에서 불연속이므로 $(p_n)$은 $[0, 1]$ 위에서 고르게 수렴하지 않습니다. 이것은 고른 수렴의 (9)의 (ii)의 첫 문장을 다른 길로 얻은 것입니다. 극한이 연속이 아니라는 것은 고르게 수렴하지 않는다는 것을 보이는 간편한 방법이지만, 극한이 연속이라고 해서 고르게 수렴하는 것은 아닙니다. 예를 들어 같은 열을 $\{x : 0 \le x < 1\}$ 위에서 보면 극한은 상수함수 $0$이어서 연속이지만, 고른 수렴의 (9)의 (ii)에 의해 고르게 수렴하지 않습니다.
:::

:::example[공통 상수의 립시츠 사상]
$X = Y = \mathbb{R}$(보통 거리)이고 $n$번째 사상이 $x$를 $x + n^{-1}$로 보내는 열을 봅시다([[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)). 모든 $n$과 $x$, $y$에서 $|(x + n^{-1}) - (y + n^{-1})| = |x - y|$이므로 각 사상은 $1$-립시츠입니다. 점마다 $x + n^{-1}$은 $x$로 수렴하므로 점별 극한은 항등함수이고, (5)에 의해 항등함수는 $1$-립시츠입니다. 이것은 [[lipschitz-map]]의 (6)의 (i)과 맞습니다.
:::

## 확인 질문

:::check[ℝ 에서 ℝ 로의 열에서 n번째 사상이 0 에서 n⁻¹, 다른 점에서 0 이면, 각 사상은 0 에서 연속인가? 고른 극한은 0 에서 연속인가?]
각 사상은 $0$에서 불연속이지만 고른 극한은 연속입니다. $n$번째 사상을 $g_n$이라 하면, $\varepsilon = n^{-1}$로 두었을 때 어떤 $\delta > 0$에도 $x = 2^{-1}\delta$는 $0 < |x| < \delta$이고 $|g_n(x) - g_n(0)| = n^{-1} \ge \varepsilon$이므로 [[continuous-function]]의 (1)에 의해 $g_n$은 $0$에서 불연속입니다. 그러나 모든 $x$에서 $|g_n(x) - 0| \le n^{-1}$이고 $n^{-1}$은 $0$으로 수렴하므로, [[uniform-convergence|고른 수렴]]의 (4)에 의해 $(g_n)$은 값이 $0$인 상수함수로 고르게 수렴하고, 이 함수는 연속입니다. (1)의 거꾸로, 곧 고른 극한이 연속이면 $f_n$들도 연속이라는 것은 성립하지 않을 수 있습니다.
:::

:::check[(5)에서 열 (x/n) 을 ℝ 위에서 보면, 극한에 대해 무엇을 알려 주는가?]
$n$번째 사상 $x \cdot n^{-1}$은 모든 $x$, $y$에서 $|x \cdot n^{-1} - y \cdot n^{-1}| = n^{-1}|x - y| \le |x - y|$이므로 모두 $1$-립시츠이고, 점별 극한은 값이 $0$인 상수함수입니다. (5)는 극한이 $1$-립시츠라고만 알려 줍니다. 실제로 극한은 [[lipschitz-map]]의 (6)의 (i)에 의해 $0$-립시츠이므로, (5)가 주는 상수가 가장 작은 상수는 아닐 수 있습니다.
:::
