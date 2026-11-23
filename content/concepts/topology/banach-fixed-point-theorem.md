---
title: 바나흐 고정점 정리
title_en: Banach Fixed Point Theorem
aliases: [축소 사상 원리, 바나흐의 고정점 정리, 반복열, contraction mapping principle, Banach fixed point theorem, sequence of iterates]
kind: theorem
field: topology
msc: ["54E50", "47H10"]
level: undergrad
summary: 공집합이 아닌 완비 거리공간에서 자기 자신으로 가는 축소 사상은 고정점을 정확히 하나 갖는다. 어느 점에서 시작한 반복열도 그 고정점으로 수렴하고, n 번째 항과 고정점 사이의 거리는 k^(n−1)/(1 − k) 에 첫 두 항의 거리를 곱한 값 이하이다. 반복열의 어림은 완비가 아니어도 성립하고, 유한 합 없이 귀납으로 증명한다.
requires: [set, function, quantifiers, recursion-theorem, mathematical-induction, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, geometric-sequence-limit, limits-preserve-inequalities, metric-space, metric-space-examples, metric-space-is-hausdorff, sequence-in-a-space, convergence-in-metric-spaces, continuity-in-metric-spaces, continuity-preserves-convergence, limit-unique-in-hausdorff, cauchy-sequence-in-metric-space, complete-metric-space, contraction-mapping]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.1절 Fixed point theorem, Theorem 7.6.2 와 그 뒤 문장, 증명, 증명 뒤 문단 (pp.296–297); 7.6.3절 연습문제 7.6.4 (p.299), 7.6.6, 7.6.8 (p.300)"
    checked: original
    note: "(2)는 출처 Theorem 7.6.2(p.296, 공집합이 아닌 완비 거리공간에서 자기 자신으로 가는 축소 사상은 고정점을 하나만 갖는다)와 같다. 출처의 증명은 x₀ 을 잡아 x_{n+1} = φ(x_n) 으로 수열을 정하고, d(x_{n+1}, x_n) ≤ kⁿ d(x₁, x₀) 를 'Repeating n times' 로 얻은 뒤 m > n 에서 d(x_m, x_n) 을 유한 합과 등비급수 Σ kⁱ 의 합으로 눌러 kⁿ d(x₁, x₀)/(1 − k) 이하로 보이고, 코시라는 것은 '(why?)' 로 독자에게 남긴다. 이 항목은 수열을 재귀 정리로 정하고 첨자를 1 부터 세며(그래서 출처의 kⁿ 이 k^{n−1} 이 된다), (1)의 (i)을 n 에 대한 귀납으로, (ii)를 m 에 대한 귀납으로 증명해 유한 합과 급수를 쓰지 않고, (iii)의 코시를 등비수열의 극한으로 보인다. (1)의 (i)에서 (iii)으로 가는 경로(이웃한 항의 거리가 C < 1 배씩 줄면 코시이다)는 출처 연습문제 2.4.2(p.86: 양수 C < 1 과 n ≥ 2 에서 |x_{n+1} − x_n| ≤ C|x_n − x_{n−1}| 인 실수열은 코시이다)와 같은 발상이다. (3)은 출처 Theorem 7.6.2 의 가정 '공집합이 아닌(nonempty)'을 빼면 결론이 성립하지 않는 경우이다. 고정점이라는 것은 출처처럼 연속성과 극한으로 보이되, 출처의 φ(lim x_n) = lim φ(x_n) = lim x_{n+1} 을 수렴의 보존, 꼬리, 극한의 유일성의 세 번호로 나누었다. 유일성은 출처가 같은 증명 안에서 보이는 것을 축소 사상 항목의 (2)로 인용한다. 출처는 정리 뒤에서 완비와 축소라는 두 낱말이 필요하다고 적고 연습문제 7.6.6 을 가리킨다. 반례 '0 보다 크고 1 이하인 실수 위의 x/2'는 그 연습문제 a)(완비가 아닌 공간에서 고정점이 없는 축소 사상을 찾아라)에 답하는 예이다. (2)의 어림 d(x_n, p) ≤ k^{n−1} d(x₁, x₂)/(1 − k) 는 출처 연습문제 7.6.8 a)(p.300, 0 번부터 센 반복열에서 d(x, x_n) ≤ kⁿ d(x₁, x₀)/(1 − k))와 첨자를 하나 민 같은 부등식이다. 출처는 증명 뒤 문단(p.297)에서 이 증명이 구성적이어서 아무 점에서 시작해 φ 를 거듭 적용하면 고정점에 점점 가까워지고 얼마나 가까운지도 알 수 있다고 적는다. (2)의 '모든 a 에서 반복열이 고정점으로 수렴한다'는 그 문장을 진술로 올린 것이다. 예시 'ℝ 위의 x/2 + 1 의 반복열'의 함수는 출처 연습문제 7.6.4(p.299)의 kx + b 꼴이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 다른 항목의 예시에 기대던 계산 1건, 근거가 빠진 반례 1건, 근거 없이 단정하던 문장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간은 [[metric-space]]의 것이고, 수열, 수렴, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이며, 거리공간에는 늘 거리위상을 준다. 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이고, 완비는 [[complete-metric-space]]의 것이며, 축소 사상, 축소 상수, 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이다. 거듭제곱 $k^n$은 [[power-of-a-real-number]]의 것이고 $k^0 = 1$이다($0^0 = 1$ 포함). 아래에서 $(X, d)$는 거리공간이다.

**반복열.** $f : X \to X$가 사상이고 $a \in X$라 하자. $g(n, t) = f(t)$로 정한 함수 $g : \mathbb{N} \times X \to X$에 [[recursion-theorem|재귀 정리]]를 쓰면
$$
x_1 = a, \qquad x_{n+1} = f(x_n) \quad (n \in \mathbb{N})
$$
인 $X$의 수열 $(x_n)$이 정확히 하나 있다. 이것을 $a$에서 시작하는 $f$의 **반복열**(sequence of iterates)이라 한다.

다음이 성립한다. 아래에서 $f : X \to X$는 축소 상수 $k$의 축소 사상이고, $(x_n)$은 어떤 $a \in X$에서 시작하는 $f$의 반복열이며, $D = d(x_1, x_2)$이다.

1. (반복열의 어림) $(X, d)$가 완비가 아니어도 다음이 성립한다.
   - (i) 모든 자연수 $n$에서 $d(x_n, x_{n+1}) \le k^{n-1} D$이다.
   - (ii) 모든 자연수 $n$과 $0$ 이상인 모든 정수 $m$에서
     $$
     d(x_n, x_{n+m}) \le \frac{k^{n-1}}{1 - k}\, D
     $$
     이다.
   - (iii) $(x_n)$은 코시 수열이다.
2. (바나흐 고정점 정리) $X$가 공집합이 아니고 $(X, d)$가 완비이면 $f$의 고정점이 정확히 하나 있다. 그 고정점을 $p$라 하면, $X$의 모든 점 $a$에 대하여 $a$에서 시작하는 $f$의 반복열 $(x_n)$은 $p$로 수렴하고, 모든 자연수 $n$에서
   $$
   d(x_n, p) \le \frac{k^{n-1}}{1 - k}\, d(x_1, x_2)
   $$
   이다.
3. (공집합) $X = \emptyset$이면 $X$에서 $X$로의 사상은 공집합 하나뿐이고, 이 사상은 축소 사상이지만 고정점이 없다.
:::

:::english
Metric spaces are as in the entry on metric spaces; sequences, convergence and $K$-tails are as in the entry on sequences in topological spaces; and metric spaces always carry their metric topology. Cauchy sequences, completeness, and contractions, contraction constants and fixed points are as in the corresponding entries. The power $k^n$ is that of the entry on powers of real numbers, with $k^0 = 1$ (including $0^0 = 1$). Throughout, $(X, d)$ is a metric space.

**Sequences of iterates.** Let $f : X \to X$ be a map and $a \in X$. Applying the recursion theorem to the function $g : \mathbb{N} \times X \to X$ given by $g(n, t) = f(t)$, there is exactly one sequence $(x_n)$ in $X$ with
$$
x_1 = a, \qquad x_{n+1} = f(x_n) \quad (n \in \mathbb{N}).
$$
It is called the **sequence of iterates** of $f$ starting at $a$.

The following hold. Below, $f : X \to X$ is a contraction with contraction constant $k$, $(x_n)$ is the sequence of iterates of $f$ starting at some $a \in X$, and $D = d(x_1, x_2)$.

1. (Estimates for the iterates) The following hold even if $(X, d)$ is not complete.
   - (i) For every natural number $n$, $d(x_n, x_{n+1}) \le k^{n-1} D$.
   - (ii) For every natural number $n$ and every integer $m \ge 0$,
     $$
     d(x_n, x_{n+m}) \le \frac{k^{n-1}}{1 - k}\, D.
     $$
   - (iii) $(x_n)$ is a Cauchy sequence.
2. (Banach fixed point theorem) If $X$ is nonempty and $(X, d)$ is complete, then $f$ has exactly one fixed point. Calling it $p$, for every point $a$ of $X$ the sequence of iterates $(x_n)$ of $f$ starting at $a$ converges to $p$, and for every natural number $n$,
   $$
   d(x_n, p) \le \frac{k^{n-1}}{1 - k}\, d(x_1, x_2).
   $$
3. (The empty set) If $X = \emptyset$, the only map from $X$ to $X$ is the empty set; it is a contraction but has no fixed point.
:::

## 직관

축소 사상을 한 번 적용할 때마다 두 점 사이의 거리는 $k$배 이하로 줄어듭니다. 반복열의 이웃한 두 항 $x_n$, $x_{n+1}$에 $f$를 적용하면 다음 두 항 $x_{n+1}$, $x_{n+2}$가 되므로, 이웃한 항 사이의 거리는 $D$, $kD$, $k^2 D$, …처럼 등비수열 이하로 줄어듭니다((1)의 (i)). $x_n$에서 $x_{n+m}$까지는 이 작은 걸음들을 이어 가는 것이고, 걸음의 합은 $k^{n-1}D$에서 시작하는 등비급수의 합 $k^{n-1}D/(1 - k)$를 넘지 않습니다. 이 사이트는 이 합을 직접 쓰지 않고 "한 걸음 더 가도 어림이 그대로 유지된다"를 귀납으로 보입니다((1)의 (ii)).

그래서 반복열은 코시 수열이고, 공간이 완비이면 어떤 점 $p$로 수렴합니다. $f$가 연속이므로 $f(x_n) = x_{n+1}$의 극한은 $f(p)$이면서 $p$이고, 곧 $p$는 고정점입니다. 비유를 들자면, 어떤 땅을 줄여 그린 지도를 그 땅 위에 펼쳐 놓으면 지도 위의 한 점이 그 점이 가리키는 땅의 자리와 정확히 겹칩니다. 지도는 땅을 줄여 그린 것(축소 사상)이고, 겹치는 점이 고정점입니다. 비유가 맞지 않는 곳은, 이 정리가 그 점을 찾는 방법(반복열)과 그 점까지의 거리(어림)까지 준다는 것입니다.

(2)의 어림은 고정점 $p$를 모르고도 첫 두 항만으로 $x_n$이 $p$에서 얼마나 떨어져 있는지 알려 줍니다. 두 가정 가운데 완비를 빼면 고정점이 없을 수 있고(아래 반례), 공집합이면 고정점이 있을 자리가 없습니다((3)). 축소를 "거리를 줄이기만 한다"로 약하게 하면 고정점이 없을 수 있다는 것은 [[contraction-mapping|축소 사상과 고정점]]의 반례가 보입니다.

## 증명

:::idea
이웃한 항의 거리를 $n$에 대한 귀납으로, 떨어진 항의 거리를 $m$에 대한 귀납으로 누르고, 등비수열 $k^n$이 $0$으로 가는 것으로 코시 수열임을 보인다. 완비로 극한 $p$를 얻고, 연속성과 극한의 유일성으로 $p$가 고정점임을 보인다. 고정점까지의 어림은 (1)의 (ii)에서 $m$을 키우는 극한이다.
:::

:::hint
(1)의 (ii)의 귀납 단계에서는 $d(x_n, x_{n+m+1}) \le d(x_n, x_{n+1}) + d(x_{n+1}, x_{(n+1)+m})$로 나누고, 뒤 항에는 귀납 가정을 $n + 1$에 씁니다. 그래서 귀납할 명제는 "모든 $n$에서"를 품어야 합니다.
:::

:::hint
$k^{n-1}D + \dfrac{k^n}{1 - k} D$를 $\dfrac{k^{n-1}}{1 - k} D$로 묶어 보세요.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (4)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "거듭제곱 (6)"은 [[power-of-a-real-number]]의 번호, "거리의 (1)"은 [[metric-space]]의 번호이다. $k$는 축소 상수이므로 $0 \le k < 1$이고, 순서 성질 (3)의 (i)에 의해 $0 < 1 - k$, 순서 성질 (6)의 (i)에 의해 $0 < (1 - k)^{-1}$이다. 거리의 조건 (i)에 의해 $0 \le D$이다. $0$ 이상인 정수 $j$에서 거듭제곱 (6)의 (i)에 의해 $0 \le k^j$이고, $0 \le k \le 1$이므로 거듭제곱 (6)의 (ii)와 (2)의 (iv)에 의해 $k^j \le 1^j = 1$이다. 이것을 (ㄱ)이라 하자. 자연수 $n$에 대하여 $C_n = k^{n-1}(1 - k)^{-1} D$라 쓰면, 순서 성질 (4)의 (iv)에 의해 $0 \le C_n$이다.

**반복열.** 각 $(n, t) \in \mathbb{N} \times X$에서 $f(t)$는 $X$의 원소 하나로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g$는 $\mathbb{N} \times X$에서 $X$로의 함수이다. 재귀 정리에 의해 $x(1) = a$, $x(n + 1) = g(n, x(n)) = f(x(n))$인 함수 $x : \mathbb{N} \to X$가 정확히 하나 있고, 이것이 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 뜻의 $X$의 수열이다.

**(1)의 (i).** 자연수 $n$에 대한 명제 "$d(x_n, x_{n+1}) \le k^{n-1} D$"를 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 $k^0 = 1$이므로 오른쪽은 $1 \cdot D = D = d(x_1, x_2)$이다((K1), (K4)). 자연수 $n$에서 성립한다고 하자. $x_{n+1} = f(x_n)$, $x_{n+2} = f(x_{n+1})$이고 $f$가 $k$-립시츠이므로 $d(x_{n+1}, x_{n+2}) \le k\, d(x_n, x_{n+1})$이다. $0 \le k$이므로 귀납 가정과 순서 성질 (4)의 (iii)에 의해 $k\, d(x_n, x_{n+1}) \le k\, k^{n-1} D$이고, 거듭제곱 (1)에 의해 $k\, k^{n-1} = k^{n}$이다($n - 1 \ge 0$이고 $k^{(n-1)+1} = k\,k^{n-1}$). 순서 성질 (1)의 (v)에 의해 $d(x_{n+1}, x_{n+2}) \le k^n D$이다.

**(1)의 (ii).** $0$ 이상인 정수 $m$에 대한 명제 $T_m$: "모든 자연수 $n$에서 $d(x_n, x_{n+m}) \le C_n$"을 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. $T_0$: 거리의 (1)에 의해 $d(x_n, x_n) = 0 \le C_n$이다. $T_m$이 성립한다고 하고 $n$을 자연수라 하자. $n + m + 1 = (n + 1) + m$이므로 거리의 조건 (iv), (1)의 (i), 그리고 $T_m$을 자연수 $n + 1$에 쓴 것에 의해
$$
\begin{aligned}
d(x_n, x_{n+m+1}) &\le d(x_n, x_{n+1}) \\
&\quad + d(x_{n+1}, x_{(n+1)+m}) \\
&\le k^{n-1} D + C_{n+1}
\end{aligned}
$$
이다(순서 성질 (2)의 (iii)). 거듭제곱 (1)의 $k^n = k^{n-1}k$와 (K1)–(K4), (K8)의 (iii)으로 계산하면
$$
\begin{aligned}
&k^{n-1} D + \frac{k^{n}}{1 - k} D \\
&\quad = \frac{k^{n-1}D\,(1 - k) + k^{n-1}D\,k}{1 - k} \\
&\quad = \frac{k^{n-1}}{1 - k}\,D = C_n
\end{aligned}
$$
이므로 $d(x_n, x_{n+m+1}) \le C_n$이다. 따라서 $T_{m+1}$이 성립하고, 귀납법에 의해 $0$ 이상인 모든 정수 $m$에서 $T_m$이 성립한다.

**(1)의 (iii).** 실수 $\varepsilon > 0$을 잡고 $C = (1 - k)^{-1} D$라 하자. $0 \le C$이고 순서 성질 (2)의 (ii)와 (5)의 (ii)에 의해 $C < C + 1$, 순서 성질 (1)의 (v)에 의해 $0 < C + 1$이므로, $\eta = \varepsilon\,(C + 1)^{-1}$은 순서 성질 (6)의 (i)과 (4)의 (i)에 의해 양수이다. $|k| = k < 1$이므로([[absolute-value]]의 (1)) [[geometric-sequence-limit]]의 (1)에 의해 수열 $(k^j)$는 $0$으로 수렴하고, [[limit-of-sequence]]의 정의에 의해 자연수 $M$이 있어 $j \ge M$이면 $|k^j - 0| < \eta$이다. 특히 (ㄱ)과 [[absolute-value]]의 (1)에 의해 $k^M < \eta$이다.

$n \ge M + 1$, $l \ge M + 1$인 자연수 $n$, $l$을 잡는다. 둘 가운데 작은 것을 $s$, 큰 것을 $t$라 하면($n = l$이면 둘 다 $n$) $t = s + m$인 $0$ 이상인 정수 $m$이 있고, 거리의 조건 (iii)에 의해 $d(x_n, x_l) = d(x_s, x_t)$이다. (1)의 (ii)에 의해 $d(x_s, x_t) \le C_s = C\,k^{s-1}$이다((K1), (K2)). $s - 1 \ge M$이므로 거듭제곱 (2)의 (i)에 의해 $k^{s-1} = k^M k^{s-1-M}$이고, (ㄱ)의 $0 \le k^{s-1-M} \le 1$과 $0 \le k^M$, 순서 성질 (4)의 (iii)에 의해 $k^{s-1} \le k^M$이다. $0 \le C$이므로 순서 성질 (4)의 (iii)에 의해 $C\,k^{s-1} \le C\,k^M \le C\eta$이고, $0 < \eta$와 $C < C + 1$, 순서 성질 (4)의 (i)에 의해 $C\eta < (C + 1)\,\eta = \varepsilon$이다((K1), (K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해 $d(x_n, x_l) < \varepsilon$이다. 자연수 $M + 1$이 [[cauchy-sequence-in-metric-space|거리공간의 코시 수열]]의 정의의 번호이므로 $(x_n)$은 코시 수열이다.

**(2).** *반복열은 고정점으로 수렴한다.* $a \in X$를 아무것이나 잡고 $(x_n)$을 $a$에서 시작하는 반복열이라 하자. (1)의 (iii)에 의해 $(x_n)$은 코시 수열이고, $(X, d)$가 완비이므로 [[complete-metric-space|완비 거리공간]]의 정의에 의해 어떤 $q \in X$로 수렴한다. [[contraction-mapping|축소 사상과 고정점]]의 (1)에 의해 $f$는 연속이므로 [[continuity-preserves-convergence|수렴의 보존]]의 (2)에 의해 $(f(x_n))$은 $f(q)$로 수렴한다. 한편 $(f(x_n))$의 $n$번째 항은 $f(x_n) = x_{n+1}$이므로 이 수열은 $(x_n)$의 $1$-꼬리이고, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (6)에 의해 $q$로 수렴한다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $X$는 하우스도르프 공간이므로 [[limit-unique-in-hausdorff|하우스도르프 공간에서 극한의 유일성]]의 (1)에 의해 $f(q) = q$이다. 곧 $q$는 $f$의 고정점이다.

*고정점은 정확히 하나.* $X \ne \emptyset$이므로 점 $a \in X$가 있고, 위 문단에 의해 $f$의 고정점이 있다. [[contraction-mapping|축소 사상과 고정점]]의 (2)에 의해 고정점은 하나뿐이다. 그것을 $p$라 하면, 위 문단에서 어느 $a$에서 시작한 반복열의 극한 $q$도 고정점이므로 $q = p$이다. 곧 모든 반복열은 $p$로 수렴한다.

*고정점까지의 어림.* 자연수 $n$을 고정한다. [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (3)에 의해 $r(y) = d(y, x_n)$으로 정한 $r : X \to \mathbb{R}$는 연속이다($\mathbb{R}$에는 보통 거리). $(x_n)$의 $n$-꼬리 $(x_{n+j})_j$는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (6)에 의해 $p$로 수렴하므로, [[continuity-preserves-convergence|수렴의 보존]]의 (2)에 의해 $j$번째 항이 $r(x_{n+j}) = d(x_{n+j}, x_n)$인 실수열은 보통 위상의 $\mathbb{R}$에서 $r(p) = d(p, x_n)$으로 수렴한다. [[convergence-in-metric-spaces]]의 (3)에 의해 이 실수열은 해석학 입문의 뜻으로도 $d(p, x_n)$으로 수렴한다. 거리의 조건 (iii)과 (1)의 (ii)에 의해 모든 자연수 $j$에서 $d(x_{n+j}, x_n) = d(x_n, x_{n+j}) \le C_n$이므로, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $d(p, x_n) \le C_n$이다. 거리의 조건 (iii)에 의해 $d(x_n, p) = d(p, x_n) \le C_n$이다.

**(3).** $X = \emptyset$이면 $X \times X = \emptyset$이므로 $X$에서 $X$로의 함수는 공집합 하나뿐이다([[function]]). [[contraction-mapping|축소 사상과 고정점]]의 (3)에 의해 이 사상은 축소 상수 $0$의 축소 사상이다. $X$에 점이 없으므로 $f(p) = p$인 $p \in X$도 없다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{R}$ 위의 $x/2 + 1$의 반복열]
$\mathbb{R}$에 보통 거리를 주고 $f(x) = x/2 + 1$로 정합니다. 모든 $x$, $y$에서 (K1)–(K3), (K12)로 $f(x) - f(y) = \frac{1}{2}(x - y)$이고 [[absolute-value]]의 (4), (1)에 의해 $|f(x) - f(y)| = \frac{1}{2}|x - y|$이므로 $f$는 축소 상수 $1/2$의 축소 사상이고, [[complete-metric-space|완비 거리공간]]의 (2)에 의해 $\mathbb{R}$은 완비이므로 (2)가 적용됩니다. $f(2) = 1 + 1 = 2$이므로 고정점은 $p = 2$입니다.

$a = 0$에서 시작하면 $x_1 = 0$, $x_2 = 1$, $x_3 = 3/2$, $x_4 = 7/4$이고 $D = d(x_1, x_2) = 1$입니다. (2)의 어림의 오른쪽은 $(1/2)^{n-1} \cdot 2 \cdot 1$이고, 처음 세 항에서
$$
\begin{aligned}
|x_1 - 2| &= 2 \le 2, \\
|x_2 - 2| &= 1 \le 1, \\
|x_3 - 2| &= \tfrac{1}{2} \le \tfrac{1}{2}
\end{aligned}
$$
로 모두 등호입니다. 이 경우에는 어림을 더 좋게 할 수 없습니다.
:::

:::counterexample[0 보다 크고 1 이하인 실수 위의 $x/2$]
$Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리를 주고 $f(x) = x/2$로 정한 $f : Y \to Y$를 봅니다. $x \in Y$이면 [[order-properties-of-reals]]의 (8)에 의해 $0 < x/2 < x \le 1$이므로 $f(x) \in Y$입니다. 모든 $x$, $y \in Y$에서 $|f(x) - f(y)| = \frac{1}{2}|x - y|$이므로([[absolute-value]]의 (4), (1)) $f$는 축소 상수 $1/2$의 축소 사상입니다. 그러나 $f(x) = x$이면 $x - x/2 = x/2 = 0$이 되어 $x = 0$인데 $0 \notin Y$이므로 고정점이 없습니다.

(1)은 완비를 가정하지 않으므로, $1$에서 시작하는 반복열 $1, 1/2, 1/4, \dots$은 $Y$의 코시 수열입니다. 그러나 이 수열이 다가가는 $0$이 $Y$에 없습니다. [[complete-metric-space|완비 거리공간]]의 (4)에 의해 $Y$는 완비가 아니고, (2)의 완비 가정이 바로 여기서 깨집니다.
:::

## 역사와 맥락

출처(Lebl)는 이 정리를 "축소 사상 원리 또는 바나흐 고정점 정리"라 부르고, 각주에서 이 이름이 1922년에 이 정리를 처음 진술한 폴란드 수학자 스테판 바나흐(Stefan Banach, 1892–1945)에서 왔다고 적습니다. 또 증명 뒤에서 이 증명이 구성적이어서, 아무 점에서 시작해 사상을 거듭 적용하면 고정점에 점점 가까워지고 얼마나 가까운지도 알 수 있다고 적습니다.

## 확인 질문

:::check[축소 상수 $0$의 축소 사상 $f : X \to X$($X \ne \emptyset$)에서 점 $a$에서 시작하는 반복열은 어떻게 되는가? (2)의 어림을 $n = 1$, $n = 2$에 넣어 확인하라.]
[[contraction-mapping|축소 사상과 고정점]]의 (3)에 의해 $f$의 값은 모두 같은 점 $c$이므로 $x_1 = a$이고 $n \ge 2$에서 $x_n = c$입니다. $f(c) = c$이므로 고정점은 $c$입니다. $D = d(a, c)$이고, $n = 1$이면 오른쪽은 $0^0 \cdot 1^{-1} \cdot D = d(a, c)$이므로 $d(x_1, c) = d(a, c) \le d(a, c)$로 등호입니다. $n = 2$이면 오른쪽은 $0^1 D = 0$이고 왼쪽도 $d(c, c) = 0$입니다([[power-of-a-real-number]]의 (1), (2)의 (iv)).
:::

:::check[시작점 $a$가 이미 $f$의 고정점이면 반복열과 어림은 어떻게 되는가?]
$x_1 = a$이고, $x_n = a$이면 $x_{n+1} = f(x_n) = f(a) = a$이므로 [[mathematical-induction|수학적 귀납법]]에 의해 반복열은 모든 항이 $a$인 상수 수열입니다. $D = d(a, a) = 0$이므로 (1)과 (2)의 어림의 오른쪽은 모두 $0$이고, 왼쪽도 $0$입니다.
:::
