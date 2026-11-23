---
title: 고르게 코시인 사상의 열
title_en: Uniformly Cauchy Sequences of Maps
aliases: [고르게 코시, 고른 코시 조건, uniformly Cauchy, Cauchy in the uniform norm, uniform Cauchy criterion]
kind: theorem
field: topology
msc: ["40A30", "54E50"]
level: undergrad
summary: 모든 양수 ε 에 대해 점에 상관없는 번호 N 이 있어 그 뒤의 두 사상이 모든 점에서 거리 ε 미만인 사상의 열을 고르게 코시라 한다. 고르게 수렴하는 열은 고르게 코시이고, 공역이 완비 거리공간이면 고르게 코시인 열은 점별 극한으로 고르게 수렴한다. 공역이 완비가 아니면 그렇지 않을 수 있다.
requires: [function, interval, basic-limits, limit-of-sum-and-product, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, metric-space, metric-space-examples, sequence-in-a-space, convergence-in-metric-spaces, cauchy-sequence-in-metric-space, complete-metric-space, pointwise-convergence, uniform-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.1.3절 Convergence in uniform norm: Definition 6.1.12, Proposition 6.1.13 과 증명 (p.231–232)"
    checked: original
    note: "출처 Definition 6.1.12(p.231)는 유계인 실함수 f_n : S → ℝ 의 열이 고른 노름으로 코시(uniformly Cauchy)라는 것을 '모든 ε > 0 에 N 이 있어 m, k ≥ N 이면 ‖f_m − f_k‖_S < ε' 로 정의하고, Proposition 6.1.13(p.231–232)은 그런 열이 고른 노름으로 코시인 것이 정확히 어떤 f : S → ℝ 로 고르게 수렴할 때라고 증명한다. 이 항목은 고른 노름을 정의하지 않으므로 '모든 x 에서 d_Y(f_m(x), f_k(x)) < ε' 로 정의하고, 그래서 유계라는 가정이 필요 없다. 공역은 거리공간 (Y, d_Y) 로 넓혔고, 출처의 '실수의 코시 수열은 수렴한다'는 Y 의 완비로 바꾸었다(Y = ℝ 이면 (4)가 출처의 명제와 같은 결론이다). 출처의 증명은 x 마다 f(x) = lim f_n(x) 로 정한 뒤 |f_m(x) − f_k(x)| < ε/2 에서 'k 를 무한대로 보내' |f_m(x) − f(x)| ≤ ε/2 를 얻는다. 이 항목의 (3)의 증명은 극한을 보내지 않고, x 마다 f_k(x) 가 f(x) 에 가까운 번호 k 하나를 잡아 거리의 삼각부등식으로 끝낸다. (1)은 출처의 증명 둘째 단락(ε/4 와 삼각부등식)과 같은 발상이다. 반례 '완비가 아닌 공역 {x : 0 < x ≤ 1} 에서는 고르게 코시인 열이 수렴하지 않을 수 있다'의 수열 n⁻¹ 과 공간 {x : 0 < x ≤ 1} 은 complete-metric-space 의 (4)의 것이고, 그 (4)는 출처 p.280 의 문단과 같은 대상이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
사상의 열, 값의 수열 $(f_n(x))$, 점별 수렴과 점별 극한은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴과 고른 극한은 [[uniform-convergence|고른 수렴]]의 것이다. 거리공간의 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이고, 완비 거리공간은 [[complete-metric-space]]의 것이다. 아래에서 $X$는 집합, $(Y, d_Y)$는 거리공간, $(f_n)$은 $X$에서 $Y$로의 사상의 열이다.

**고르게 코시.** $(f_n)$이 **고르게 코시**(uniformly Cauchy)라는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $m \ge N$, $k \ge N$인 모든 자연수 $m$, $k$와 $X$의 모든 점 $x$에서 $d_Y(f_m(x), f_k(x)) < \varepsilon$일 때이다. 여기서 $N$은 $\varepsilon$에만 따르고 점 $x$에 따르지 않는다.

다음이 성립한다.

1. (고르게 수렴하면 고르게 코시) $(f_n)$이 어떤 사상 $f : X \to Y$로 고르게 수렴하면 $(f_n)$은 고르게 코시이다.
2. (값의 수열은 코시 수열) $(f_n)$이 고르게 코시이면, $X$의 모든 점 $x$에서 값의 수열 $(f_n(x))$는 $(Y, d_Y)$의 코시 수열이다.
3. (완비인 공역) $(Y, d_Y)$가 완비이고 $(f_n)$이 고르게 코시이면, $(f_n)$은 점별 극한 $f$를 갖고(곧 모든 $x \in X$에서 $(f_n(x))$가 수렴하고 $f(x) = \lim_{n \to \infty} f_n(x)$이다) $(f_n)$은 $f$로 고르게 수렴한다. 따라서 $(Y, d_Y)$가 완비이면, $(f_n)$이 고르게 코시인 것은 정확히 $(f_n)$이 어떤 사상으로 고르게 수렴할 때이다.
4. (실숫값 사상) $Y = \mathbb{R}$이고 $d_Y$가 보통 거리이면, $(f_n)$이 고르게 코시인 것은 정확히 $(f_n)$이 어떤 사상 $X \to \mathbb{R}$로 고르게 수렴할 때이고, 이것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $m, k \ge N$과 $X$의 모든 점 $x$에서 $|f_m(x) - f_k(x)| < \varepsilon$일 때이다.
5. (완비가 필요하다) $X \ne \emptyset$이면, $(Y, d_Y)$가 완비인 것은 정확히 $X$에서 $Y$로의 고르게 코시인 사상의 열이 모두 어떤 사상으로 고르게 수렴할 때이다. $X = \emptyset$이면 $X$에서 $Y$로의 사상의 열은 모두 고르게 코시이고 고르게 수렴한다.
:::

:::english
Sequences of maps, the sequence of values $(f_n(x))$, pointwise convergence and the pointwise limit are those of sequences of maps and pointwise convergence, and uniform convergence and the uniform limit are those of uniform convergence. Cauchy sequences in a metric space and complete metric spaces are as defined earlier. Below, $X$ is a set, $(Y, d_Y)$ is a metric space, and $(f_n)$ is a sequence of maps from $X$ to $Y$.

**Uniformly Cauchy.** $(f_n)$ is **uniformly Cauchy** exactly when, for every positive real number $\varepsilon$, there is a natural number $N$ such that $d_Y(f_m(x), f_k(x)) < \varepsilon$ for all natural numbers $m \ge N$, $k \ge N$ and all points $x$ of $X$. Here $N$ depends only on $\varepsilon$ and not on the point $x$.

The following hold.

1. (Uniformly convergent implies uniformly Cauchy) If $(f_n)$ converges uniformly to some map $f : X \to Y$, then $(f_n)$ is uniformly Cauchy.
2. (Sequences of values are Cauchy) If $(f_n)$ is uniformly Cauchy, then for every point $x$ of $X$ the sequence of values $(f_n(x))$ is a Cauchy sequence in $(Y, d_Y)$.
3. (Complete codomain) If $(Y, d_Y)$ is complete and $(f_n)$ is uniformly Cauchy, then $(f_n)$ has a pointwise limit $f$ (that is, $(f_n(x))$ converges for every $x \in X$ and $f(x) = \lim_{n \to \infty} f_n(x)$), and $(f_n)$ converges uniformly to $f$. Hence, if $(Y, d_Y)$ is complete, $(f_n)$ is uniformly Cauchy exactly when $(f_n)$ converges uniformly to some map.
4. (Real-valued maps) If $Y = \mathbb{R}$ with the standard metric $d_Y$, then $(f_n)$ is uniformly Cauchy exactly when $(f_n)$ converges uniformly to some map $X \to \mathbb{R}$, and this happens exactly when for every positive real number $\varepsilon$ there is a natural number $N$ such that $|f_m(x) - f_k(x)| < \varepsilon$ for all $m, k \ge N$ and all points $x$ of $X$.
5. (Completeness is needed) If $X \ne \emptyset$, then $(Y, d_Y)$ is complete exactly when every uniformly Cauchy sequence of maps from $X$ to $Y$ converges uniformly to some map. If $X = \emptyset$, every sequence of maps from $X$ to $Y$ is uniformly Cauchy and converges uniformly.
:::

## 직관

해석학 입문의 코시 수열은 극한을 미리 알지 못해도 항끼리의 거리만으로 수렴을 판정하게 해 주었습니다. 고르게 코시는 같은 일을 사상의 열에서 하되, 점마다 따로가 아니라 모든 점에 함께 들어맞는 한 번호 $N$으로 합니다. [[uniform-convergence|고른 수렴]]이 점별 수렴의 "고른" 판이듯, 고르게 코시는 "모든 점에서 값의 수열이 코시"의 고른 판입니다.

비유하자면 두 사진 $f_m$과 $f_k$를 겹쳐 놓았을 때, 어느 사진부터는 어떤 두 장을 겹쳐도 모든 시계의 바늘이 거의 같은 자리에 있다는 것입니다. "어떤 두 장을 겹쳐도"가 "$m, k \ge N$인 모든 $m$, $k$"에, "모든 시계"가 "$X$의 모든 점 $x$"에 맞습니다. 목표가 어디인지는 말하지 않습니다.

목표가 실제로 있으려면 공역에 "구멍"이 없어야 합니다. 그래서 (3)에 공역의 완비가 들어갑니다. 완비는 극한 사상을 만드는 단계, 곧 각 점에서 값의 코시 수열이 수렴한다는 단계에서만 쓰이고, 그 극한으로 고르게 수렴한다는 단계에서는 쓰이지 않습니다. (5)와 반례는 완비를 빼면 이 결론이 깨질 수 있다는 것을 보입니다.

## 증명

:::idea
점마다 값의 수열이 코시이므로 완비성으로 극한 사상을 정하고, 거리의 삼각부등식으로 $d_Y(f_m(x), f(x)) \le d_Y(f_m(x), f_k(x)) + d_Y(f_k(x), f(x))$에서 둘째 항이 작은 번호 $k$를 점 $x$마다 하나 잡는다.
:::

:::hint
(1)은 $\varepsilon \cdot 2^{-1}$로 고른 수렴의 $N$을 잡고 $f(x)$를 사이에 끼웁니다.
:::

:::hint
(3)에서 극한 사상은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 (4)로 정합니다. 고른 어림을 얻을 때, $m$과 $x$를 정한 뒤에 $k$를 고르기만 하면 됩니다. $k$는 $m$과 $x$에 따라 달라도 결론에는 나타나지 않습니다.
:::

:::proof
아래에서 자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 양의 정수이다. 정수의 합은 정수이고([[even-and-odd]]), 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z6), (Z7)을 쓴다. 자연수 $P$, $Q$에 대하여 $P + Q$는 자연수이고 $P < P + Q$, $Q < P + Q$이다((Z7)과 (Z6)). 실수의 부등식은 [[order-properties-of-reals]]의 번호로 인용하고, $\varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon$은 [[real-number-arithmetic]]의 계산이다. 거리의 삼각부등식은 [[metric-space]]의 조건 (iv)이고 대칭은 (iii)이다. [[pointwise-convergence|사상의 열과 점별 수렴]]과 [[uniform-convergence|고른 수렴]]을 줄여 "점별 수렴의 항목", "고른 수렴의 항목"이라 쓴다.

**(1).** 양의 실수 $\varepsilon$을 잡는다. [[order-properties-of-reals]]의 (8)에 의해 $0 < \varepsilon \cdot 2^{-1}$이므로, 고른 수렴의 정의에 의해 자연수 $N$이 있어 $n \ge N$인 모든 $n$과 모든 $x \in X$에서 $d_Y(f_n(x), f(x)) < \varepsilon \cdot 2^{-1}$이다. $m, k \ge N$이고 $x \in X$이면 거리의 삼각부등식과 대칭에 의해
$$
\begin{aligned}
&d_Y(f_m(x), f_k(x)) \\
&\quad \le d_Y(f_m(x), f(x)) \\
&\qquad + d_Y(f_k(x), f(x)) \\
&\quad < \varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon
\end{aligned}
$$
이다(둘째 줄은 [[order-properties-of-reals]]의 (2)의 (iv)와 (1)의 (v)). 따라서 $(f_n)$은 고르게 코시이다.

**(2).** $x \in X$와 양의 실수 $\varepsilon$을 잡는다. 고르게 코시의 정의로 얻은 $N$에 대하여 $m, k \ge N$이면 $d_Y(f_m(x), f_k(x)) < \varepsilon$이다. 이것은 [[cauchy-sequence-in-metric-space]]의 정의에서 $M = N$으로 둔 조건이므로 $(f_n(x))$는 코시 수열이다.

**(3).** $(Y, d_Y)$가 완비이고 $(f_n)$이 고르게 코시라 하자. $x \in X$이면 (2)에 의해 $(f_n(x))$는 코시 수열이고, [[complete-metric-space]]의 완비의 정의에 의해 $Y$의 어떤 점으로 수렴한다. 따라서 점별 수렴의 항목의 (4)에 의해 $(f_n)$은 점별 극한 $f$를 갖고, 모든 $x \in X$에서 $(f_n(x))$는 $f(x)$로 수렴하며 $f(x) = \lim_{n \to \infty} f_n(x)$이다.

$(f_n)$이 $f$로 고르게 수렴함을 보인다. 양의 실수 $\varepsilon$을 잡는다. $0 < \varepsilon \cdot 2^{-1}$이므로 고르게 코시의 정의에 의해 자연수 $N$이 있어 $m, k \ge N$과 모든 $x \in X$에서 $d_Y(f_m(x), f_k(x)) < \varepsilon \cdot 2^{-1}$이다. 이제 $m \ge N$인 자연수 $m$과 $x \in X$를 잡는다. $(f_n(x))$는 $f(x)$로 수렴하므로 [[convergence-in-metric-spaces]]의 (1)에 의해 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $d_Y(f_n(x), f(x)) < \varepsilon \cdot 2^{-1}$이다. $k = N + M$으로 두면 $k$는 자연수이고 $k > N$, $k > M$이므로 두 부등식을 함께 쓸 수 있어
$$
\begin{aligned}
&d_Y(f_m(x), f(x)) \\
&\quad \le d_Y(f_m(x), f_k(x)) \\
&\qquad + d_Y(f_k(x), f(x)) \\
&\quad < \varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon
\end{aligned}
$$
이다. $m \ge N$과 $x \in X$를 아무렇게나 잡았으므로, $N$은 고른 수렴의 정의의 조건을 만족한다. 따라서 $(f_n)$은 $f$로 고르게 수렴한다.

둘째 문장: 고르게 코시이면 앞 문단에 의해 $f$로 고르게 수렴하고, 거꾸로 어떤 사상으로 고르게 수렴하면 (1)에 의해 고르게 코시이다.

**(4).** [[complete-metric-space]]의 (2)에 의해 보통 거리의 $\mathbb{R}$은 완비이므로 첫째 문장은 (3)의 둘째 문장이다. [[metric-space-examples]]의 (1)에 의해 $d_Y(u, v) = |u - v|$이므로, 고르게 코시의 정의에 이것을 넣으면 마지막 조건이 된다.

**(5).** $X = \emptyset$이면 고르게 코시의 정의와 고른 수렴의 정의는 $N = 1$에서 "$X$의 모든 점에서"가 따질 점이 없어 성립한다. 고른 극한으로는 $\emptyset$에서 $Y$로의 사상 $\emptyset$을 쓴다. $\emptyset$이 이런 사상이라는 것은 [[function]]의 두 조건이 정의역 $\emptyset$에서 따질 원소가 없어 성립한다는 것이다.

$X \ne \emptyset$이라 하고 $X$의 점 $x_0$을 하나 잡는다. $(Y, d_Y)$가 완비이면 (3)에 의해 고르게 코시인 열은 고르게 수렴한다. 거꾸로 $X$에서 $Y$로의 고르게 코시인 열이 모두 고르게 수렴한다고 하고, $(y_n)$을 $(Y, d_Y)$의 코시 수열이라 하자. 각 자연수 $n$과 $x \in X$에 $Y$의 원소 $y_n$이 정해져 있으므로, 점별 수렴의 항목의 (1)에 의해 $n$번째 사상이 모든 $x$를 $y_n$으로 보내는 열 $(c_n)$이 있다. 양의 실수 $\varepsilon$에 대하여 코시 수열의 정의로 얻은 자연수 $M$은, $m, k \ge M$과 모든 $x \in X$에서 $d_Y(c_m(x), c_k(x)) = d_Y(y_m, y_k) < \varepsilon$을 주므로 $(c_n)$은 고르게 코시이다. 가정에 의해 $(c_n)$은 어떤 사상 $g$로 고르게 수렴하고, 고른 수렴의 항목의 (1)에 의해 점별로도 $g$로 수렴하므로, 값의 수열 $(c_n(x_0)) = (y_n)$은 $g(x_0)$로 수렴한다. 따라서 $Y$의 모든 코시 수열이 $Y$의 점으로 수렴하므로 $(Y, d_Y)$는 완비이다.
:::

## 예시와 반례

:::example[닫힌구간 [0, 1] 위에서 1/n 만큼 옮긴 열]
$X = [0, 1]$, $Y = \mathbb{R}$(보통 거리)이고 $n$번째 사상이 $x$를 $x + n^{-1}$로 보내는 열 $(f_n)$을 생각합시다(점별 수렴의 항목의 (1)). $m, k$가 자연수이면 모든 $x$에서 $|f_m(x) - f_k(x)| = |m^{-1} - k^{-1}|$이고, 이것은 $x$에 따르지 않습니다. [[basic-limits]]의 (2)에 의해 실수열 $(n^{-1})$은 수렴하므로 [[cauchy-sequence-in-metric-space]]의 (3)에 의해 코시 수열이고, 그 정의의 $M$이 그대로 고르게 코시의 $N$이 됩니다. (4)에 의해 $(f_n)$은 어떤 사상으로 고르게 수렴하고, (3)에 의해 그 사상은 점별 극한입니다. 점 $x$마다 [[limit-of-sum-and-product]]의 (5)에 의해 $x + n^{-1}$은 $x + 0 = x$로 수렴하므로 고른 극한은 항등함수입니다.
:::

:::counterexample[완비가 아닌 공역 {x : 0 < x ≤ 1} 에서는 고르게 코시인 열이 수렴하지 않을 수 있다]
$Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리를 주고, $X$를 공집합이 아닌 집합이라 합시다. [[complete-metric-space]]의 (4)에 의해 $n$번째 항이 $n^{-1}$인 수열은 $Y$의 코시 수열이지만 $Y$의 어떤 점으로도 수렴하지 않습니다. 점별 수렴의 항목의 (1)로 $n$번째 사상이 모든 점을 $n^{-1}$로 보내는 열 $(c_n)$을 만들면, (5)의 증명에서처럼 $(c_n)$은 고르게 코시입니다. 그러나 $(c_n)$이 어떤 사상 $g : X \to Y$로 고르게 수렴한다면 $X$의 한 점 $x_0$에서 $(n^{-1})$이 $Y$의 점 $g(x_0)$로 수렴하게 되어 앞의 사실과 어긋납니다. 그래서 $(c_n)$은 고르게 코시이지만 $X$에서 $Y$로의 어떤 사상으로도 고르게 수렴하지 않습니다. 같은 열을 공역 $\mathbb{R}$로 보면 값이 $0$인 상수함수로 고르게 수렴하지만, $0$은 $Y$에 없습니다.
:::

## 확인 질문

:::check[X 가 한 점 p 로 이루어진 집합이면, 사상의 열이 고르게 코시라는 것은 무엇과 같은가?]
값의 수열 $(f_n(p))$가 $(Y, d_Y)$의 코시 수열이라는 것과 같습니다. $X$의 점이 $p$뿐이므로 고르게 코시의 정의는 "모든 $\varepsilon$에 $N$이 있어 $m, k \ge N$이면 $d_Y(f_m(p), f_k(p)) < \varepsilon$"이 되고, 이것이 [[cauchy-sequence-in-metric-space]]의 정의입니다.
:::

:::check[Y 에 이산 거리를 주면, 고르게 코시인 사상의 열은 어떤 모양인가?]
어떤 번호부터 모든 사상이 같은 열입니다. 이산 거리의 값은 $0$이나 $1$이므로 $\varepsilon = 1$에 대한 $N$에서 $m, k \ge N$이면 모든 $x$에서 $d_Y(f_m(x), f_k(x)) = 0$, 곧 [[metric-space]]의 (ii)에 의해 $f_m(x) = f_k(x)$이고, [[function]]의 함수의 같음에 의해 $m \ge N$이면 $f_m = f_N$입니다. 거꾸로 그런 열은 모든 $\varepsilon$에 같은 $N$으로 고르게 코시입니다. [[complete-metric-space]]의 (3)의 (iii)에 의해 이산 거리의 공간은 완비이므로, (3)과도 맞게 이 열은 $f_N$으로 고르게 수렴합니다.
:::
