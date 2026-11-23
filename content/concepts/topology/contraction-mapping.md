---
title: 축소 사상과 고정점
title_en: Contraction Mappings and Fixed Points
aliases: [축소 사상, 축소 상수, 고정점, contraction, contraction mapping, contractive map, fixed point]
kind: definition
field: topology
msc: ["54E40", "47H10"]
level: undergrad
summary: 거리공간 사이의 사상이 0 ≤ k < 1 인 어떤 k 로 k-립시츠이면 축소 사상이라 하고, f(p) = p 인 점 p 를 고정점이라 한다. 축소 사상은 고르게 연속이고, 자기 자신으로 가는 축소 사상의 고정점은 완비가 아니어도 많아야 하나이며, 축소 상수 0 의 축소 사상은 상수 사상이고, 이산 거리의 공간 사이의 축소 사상도 상수 사상이다.
requires: [set, subset, function, real-number-arithmetic, order-properties-of-reals, absolute-value, archimedean-property, interval, metric-space, metric-space-examples, uniformly-continuous-map, lipschitz-map]
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.1절 Fixed point theorem, Definition 7.6.1 과 Theorem 7.6.2 의 증명 (pp.296–297); 7.6.3절 연습문제 7.6.4 (p.299), 7.6.5, 7.6.6, 7.6.10 (p.300)"
    checked: original
    note: "정의는 출처 Definition 7.6.1(p.296)과 같다. 출처는 축소 사상을 'k < 1 인 어떤 k 로 k-립시츠인 사상'이라 하고 k 의 아래 한계를 적지 않는다. 이 항목은 립시츠 상수를 0 이상으로 두는 이 사이트의 약속대로 0 ≤ k < 1 로 쓴다. 고정점의 정의도 같은 Definition 의 것이다. (2)는 출처가 Theorem 7.6.2 의 증명 안(p.297, 'Unique?')에서 완비성을 쓰지 않고 보이는 것을 정리와 떼어 진술한 것이다. (1)은 출처가 같은 증명에서 '축소 사상은 립시츠 연속이다'라고 쓰는 것과 같다. (4)는 출처 연습문제 7.6.10(p.300, 이산 거리의 공간 X 에서 X 로 가는 축소 사상은 상수이다)을 정의역과 공역이 다를 수 있게 넓힌 것이다. 예시 'ℝ 위의 kx + b'는 출처 연습문제 7.6.4(p.299, 0 < k < 1 인 F(x) = kx + b 가 축소 사상이고 고정점이 하나임을 보여라)와 같은 함수이다. 확인 질문 '[0, 1/4] 위의 x²'는 출처 연습문제 7.6.5(p.300)와 같은 함수이다. 반례 '1 이상인 실수 위의 x + 1/x'와 확인 질문 'ℝ 위의 x + 1'은 출처 연습문제 7.6.6 b)(p.300, 완비 거리공간에서 고정점이 없는 1-립시츠 사상을 찾아라)와 같은 물음(축소 사상이 아닌 사상은 고정점이 없을 수 있다)을 다룬다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 다른 항목의 예시에 기대던 계산 1건, 근거가 빠진 반례 1건, 근거 없이 단정하던 문장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리)는 [[metric-space]], [[metric-space-examples]]의 것이고, 사상과 고른 연속은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]의 것이며, $K$-립시츠와 립시츠 사상은 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 아래에서 $(X, d_X)$, $(Y, d_Y)$는 거리공간이고, $X$에서 $X$로의 사상을 말할 때는 $X$의 거리를 $d$로 쓴다.

**축소 사상.** 사상 $f : X \to Y$가 **축소 사상**(contraction)이라는 것은 정확히 $0 \le k < 1$인 실수 $k$가 있어 $f$가 $k$-립시츠일 때, 곧 $X$의 모든 점 $p$, $q$에서
$$
d_Y(f(p), f(q)) \le k\, d_X(p, q)
$$
일 때이다. 이런 $k$를 $f$의 **축소 상수**(contraction constant)라 하고, $f$를 "축소 상수 $k$의 축소 사상"이라 한다.

**고정점.** $f : X \to X$가 사상일 때, $f(p) = p$인 $p \in X$를 $f$의 **고정점**(fixed point)이라 한다.

다음이 성립한다.

1. (고른 연속) 축소 사상은 립시츠 사상이고, 따라서 고르게 연속이며 연속이다.
2. (고정점은 많아야 하나) $f : X \to X$가 축소 사상이고 $p$, $q$가 $f$의 고정점이면 $p = q$이다. 여기서 $X$에 다른 가정은 없다.
3. (축소 상수 $0$) $f : X \to Y$가 축소 상수 $0$의 축소 사상인 것은 정확히 $X$의 모든 점 $p$, $q$에서 $f(p) = f(q)$일 때이다. 특히 $y_0 \in Y$이고 모든 $x \in X$에서 $f(x) = y_0$인 상수 사상은 축소 사상이고, $X$가 공집합이거나 점이 하나뿐이면 모든 사상 $f : X \to Y$는 축소 상수 $0$의 축소 사상이다.
4. (이산 거리) $d_X$와 $d_Y$가 이산 거리이고 $f : X \to Y$가 축소 사상이면 $X$의 모든 점 $p$, $q$에서 $f(p) = f(q)$이다.
:::

:::english
Metric spaces and their examples (the standard metric, discrete metrics) are as in the entries on metric spaces, maps and uniform continuity are as in the entry on uniformly continuous maps between metric spaces, and $K$-Lipschitz maps and Lipschitz maps are as in the entry on Lipschitz maps between metric spaces. Throughout, $(X, d_X)$ and $(Y, d_Y)$ are metric spaces, and when we speak of a map from $X$ to $X$ we write $d$ for the metric of $X$.

**Contractions.** A map $f : X \to Y$ is a **contraction** exactly when there is a real number $k$ with $0 \le k < 1$ such that $f$ is $k$-Lipschitz, that is,
$$
d_Y(f(p), f(q)) \le k\, d_X(p, q)
$$
for all points $p$, $q$ of $X$. Such a $k$ is called a **contraction constant** of $f$, and $f$ is called a contraction with contraction constant $k$.

**Fixed points.** For a map $f : X \to X$, a point $p \in X$ with $f(p) = p$ is called a **fixed point** of $f$.

The following hold.

1. (Uniform continuity) A contraction is a Lipschitz map, hence uniformly continuous and continuous.
2. (At most one fixed point) If $f : X \to X$ is a contraction and $p$, $q$ are fixed points of $f$, then $p = q$. No further assumption on $X$ is made here.
3. (Contraction constant $0$) A map $f : X \to Y$ is a contraction with contraction constant $0$ exactly when $f(p) = f(q)$ for all points $p$, $q$ of $X$. In particular, if $y_0 \in Y$, the constant map with $f(x) = y_0$ for all $x \in X$ is a contraction, and if $X$ is empty or has only one point, every map $f : X \to Y$ is a contraction with contraction constant $0$.
4. (Discrete metrics) If $d_X$ and $d_Y$ are discrete metrics and $f : X \to Y$ is a contraction, then $f(p) = f(q)$ for all points $p$, $q$ of $X$.
:::

## 직관

축소 사상은 어느 두 점이든 그 사이의 거리를 일정한 비율 $k < 1$ 이하로 줄이는 사상입니다. 복사기로 원본을 $k$배로 줄여 찍는 것에 비유할 수 있습니다. 원본 위의 어느 두 점을 잡아도 사본 위에서는 거리가 $k$배가 되고, 줄이는 비율이 점마다 다르지 않습니다. 비유에서 "어느 두 점"이 정의의 "모든 $p$, $q$"에, "일정한 비율"이 $p$, $q$보다 먼저 정해지는 $k$에 맞습니다.

자기 자신으로 가는 축소 사상에서 고정점이 둘일 수는 없습니다((2)). 두 고정점 사이의 거리는 $f$를 거쳐도 그대로인데, 축소 사상은 그 거리를 $k$배로 줄여야 하기 때문입니다. 고정점이 하나라도 있는지는 다른 문제이고, 공간에 더 가정이 필요합니다.

두 점 사이의 거리를 늘 줄이기만 해서는 축소 사상이 되지 않을 수 있습니다. 아래 반례의 사상은 서로 다른 두 점의 거리를 언제나 줄이지만, 줄이는 비율이 $1$에 얼마든지 가까워져서 하나의 $k < 1$로 누를 수 없고, 고정점도 없습니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (ii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "거리의 (1)"은 [[metric-space]]의 번호이다.

**1의 증명.** 축소 상수 $k$의 축소 사상은 $k$-립시츠이므로 립시츠 사상이다. [[lipschitz-map|립시츠 사상]]의 (3)에 의해 고르게 연속이고 연속이다.

**2의 증명.** $k$를 $f$의 축소 상수라 하고 $t = d(p, q)$라 하자. $f(p) = p$, $f(q) = q$이므로 $t = d(f(p), f(q)) \le k t$이다. 순서 성질 (2)의 (i)로 양변에서 $kt$를 빼고 (K1), (K3), (K4)로 정리하면 $(1 - k)\,t \le 0$이다. $k < 1$이므로 순서 성질 (3)의 (i)에 의해 $0 < 1 - k$이다. $0 < t$라면 순서 성질 (4)의 (i)과 (K9)에 의해 $0 = 0 \cdot t < (1 - k)\,t$가 되어 순서 성질 (1)의 (i)에 어긋난다. 따라서 $0 < t$가 아니고, 거리의 조건 (i)의 $0 \le t$와 순서 성질 (1)의 (iii), (ii)에 의해 $t = 0$이다. 거리의 조건 (ii)에 의해 $p = q$이다.

**3의 증명.** $f$가 축소 상수 $0$의 축소 사상이라 하자. $p$, $q \in X$이면 (K9)에 의해 $d_Y(f(p), f(q)) \le 0 \cdot d_X(p, q) = 0$이고, 거리의 조건 (i)의 $0 \le d_Y(f(p), f(q))$와 순서 성질 (1)의 (ii)에 의해 $d_Y(f(p), f(q)) = 0$이다. 거리의 조건 (ii)에 의해 $f(p) = f(q)$이다. 거꾸로 모든 $p$, $q$에서 $f(p) = f(q)$이면 거리의 (1)과 (K9)에 의해 $d_Y(f(p), f(q)) = 0 = 0 \cdot d_X(p, q)$이고, 순서 성질 (1)의 (iv)의 $0 \le 0$과 (5)의 (ii)의 $0 < 1$에 의해 $0$은 축소 상수의 조건 $0 \le 0 < 1$을 만족한다. 상수 사상에서는 모든 $p$, $q$에서 $f(p) = y_0 = f(q)$이다. $X$가 공집합이면 "모든 점 $p$, $q$에서 $f(p) = f(q)$"는 따질 점이 없어 참이고, $X = \{x_0\}$이면 $p = q = x_0$뿐이므로 $f(p) = f(q)$이다.

**4의 증명.** $k$를 $f$의 축소 상수라 하고 $p$, $q \in X$라 하자. $p = q$이면 $f(p) = f(q)$이다. $p \ne q$이면 이산 거리의 정의([[metric-space-examples]]의 (2))에 의해 $d_X(p, q) = 1$이므로 (K4)에 의해 $d_Y(f(p), f(q)) \le k \cdot 1 = k < 1$이다. $f(p) \ne f(q)$라면 $d_Y(f(p), f(q)) = 1$이 되어 $1 < 1$이 나와 순서 성질 (1)의 (i)에 어긋난다. 따라서 $f(p) = f(q)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{R}$ 위의 $kx + b$]
$\mathbb{R}$에 보통 거리를 주고 $0 \le k < 1$인 실수 $k$와 실수 $b$에 대하여 $f(x) = kx + b$로 정한 $f : \mathbb{R} \to \mathbb{R}$를 봅니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$x$, $y \in \mathbb{R}$이면 (K1)–(K3), (K12)로 $f(x) - f(y) = k(x - y)$이고, [[absolute-value]]의 (4)와 $0 \le k$에서의 (1)에 의해 $|f(x) - f(y)| = k\,|x - y|$입니다. 따라서 $f$는 축소 상수 $k$의 축소 사상입니다.

$k < 1$이므로 순서 성질 (3)의 (i)에 의해 $0 < 1 - k$이고 $1 - k \ne 0$입니다. $p = b\,(1 - k)^{-1}$로 두면 (K3), (K8)의 (iii)으로 $p - kp = (1 - k)\,p = b$이므로 $f(p) = kp + b = p$입니다. 곧 $p$는 $f$의 고정점이고, (2)에 의해 고정점은 $p$ 하나뿐입니다. 예를 들어 $k = 1/2$, $b = 1$이면 고정점은 $1 \cdot (1/2)^{-1} = 2$이고, 실제로 $f(2) = 1 + 1 = 2$입니다.
:::

:::counterexample[1 이상인 실수 위의 $x + 1/x$]
$J = \{x \in \mathbb{R} : 1 \le x\}$에 보통 거리의 부분공간 거리를 주고 $f(x) = x + x^{-1}$로 정한 $f : J \to J$를 봅니다. $f$는 서로 다른 두 점 사이의 거리를 언제나 줄이지만 축소 사상이 아니고, 고정점이 없습니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

*$f$는 $J$에서 $J$로 간다.* $x \in J$이면 $0 < 1 \le x$이므로 순서 성질 (6)의 (i)에 의해 $0 < x^{-1}$이고, 순서 성질 (2)의 (ii)에 의해 $x < x + x^{-1}$이므로 $1 \le f(x)$입니다(순서 성질 (1)의 (v)).

*거리를 줄인다.* $x$, $y \in J$라 합시다. 순서 성질 (11)의 (i)에 의해 $1 = 1 \cdot 1 \le xy$이고, $xy = 1$이면 $(xy)^{-1} = 1$, $1 < xy$이면 순서 성질 (6)의 (ii)에 의해 $(xy)^{-1} < 1$이며, 순서 성질 (6)의 (i)에 의해 $0 < (xy)^{-1}$입니다. 따라서 $c = 1 - (xy)^{-1}$은 $0 \le c < 1$입니다(순서 성질 (3)의 (i)). (K1)–(K3), (K8), (K12)로 계산하면 $x^{-1} - y^{-1} = (y - x)(xy)^{-1}$이므로
$$
\begin{aligned}
&f(x) - f(y) \\
&\quad = (x - y) - (x - y)(xy)^{-1} \\
&\quad = c\,(x - y)
\end{aligned}
$$
이고, [[absolute-value]]의 (4)와 (1)에 의해 $|f(x) - f(y)| = c\,|x - y|$입니다. $x \ne y$이면 [[metric-space]]의 (1)에 의해 $0 < |x - y|$이고, $c < 1$과 순서 성질 (4)의 (i)에 의해 $|f(x) - f(y)| < |x - y|$입니다.

*축소 사상이 아니다.* $f$가 축소 상수 $k$의 축소 사상이라 해 봅시다. $0 < 1 - k$이므로 [[archimedean-property]]의 (3)에 의해 $n^{-1} < 1 - k$인 자연수 $n$이 있습니다. $x = n$, $y = n + 1$은 $J$의 점이고(순서 성질 (10)), 위의 계산에서 $|f(y) - f(x)| = 1 - (n(n + 1))^{-1}$입니다. $n \le n(n + 1)$이므로($1 \le n + 1$에 $0 < n$을 곱했다. 순서 성질 (4)의 (iii)) 순서 성질 (6)의 (ii)나 등호에 의해 $(n(n + 1))^{-1} \le n^{-1}$이고, 순서 성질 (3)의 (iii)과 (2)의 (i)에 의해
$$
\begin{aligned}
&|f(y) - f(x)| = 1 - (n(n + 1))^{-1} \\
&\quad \ge 1 - n^{-1} > 1 - (1 - k) \\
&\quad = k\,|y - x|
\end{aligned}
$$
입니다. 이것은 $|f(y) - f(x)| \le k\,|y - x|$에 어긋나므로 $f$는 축소 사상이 아닙니다.

*고정점이 없다.* $f(x) = x$이면 $x^{-1} = 0$이 되어 $1 = x \cdot x^{-1} = x \cdot 0 = 0$이므로 (K4), (K9)에 어긋납니다.
:::

## 확인 질문

:::check[$[0, 1/4]$에 보통 거리의 부분공간 거리를 줄 때, $x$를 $x^2$으로 보내는 사상 $[0, 1/4] \to [0, 1/4]$는 축소 사상인가?]
그렇습니다. 축소 상수로 $1/2$을 쓸 수 있습니다. $x$, $y \in [0, 1/4]$이면 $0 \le x + y \le 1/2$이고 $x^2 - y^2 = (x + y)(x - y)$이므로 $|x^2 - y^2| = (x + y)\,|x - y| \le \frac{1}{2}\,|x - y|$입니다([[absolute-value]]의 (4), (1), [[order-properties-of-reals]]의 (4)의 (iii)). 또 $0 \le x^2 \le x \cdot \frac{1}{4} \le \frac{1}{16} \le \frac{1}{4}$이므로 상은 $[0, 1/4]$에 듭니다. $0^2 = 0$이므로 $0$은 고정점이고, (2)에 의해 고정점은 $0$ 하나뿐입니다.
:::

:::check[$\mathbb{R}$(보통 거리)에서 $x$를 $x + 1$로 보내는 사상은 축소 사상인가?]
아닙니다. 모든 $x$, $y$에서 $|(x + 1) - (y + 1)| = |x - y|$입니다. $0 \le k < 1$인 $k$로 $k$-립시츠라면 $x = 1$, $y = 0$에서 $1 \le k \cdot 1 = k$가 되어 $k < 1$에 어긋납니다. 이 사상은 $1$-립시츠이지만 $x + 1 = x$인 실수 $x$가 없으므로($1 = 0$이 되어 (K4)에 어긋난다) 고정점이 없습니다.
:::
