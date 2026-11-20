---
title: 연속함수의 적분가능성
title_en: Continuous Functions Are Integrable
aliases: [연속함수는 적분가능하다, continuous functions are Riemann integrable]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "닫힌구간 [a, b] 위의 연속함수는 리만 적분가능하다. 고른 연속성으로, 작은 구간의 길이가 모두 δ 보다 짧은 분할에서는 상합과 하합의 차가 ε 이하가 되게 하는 δ 가 있음을 보인다. 작은 구간마다 최대점이나 최소점을 고르지 않는다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, bounded-function, interval, continuous-function, uniform-continuity, continuous-on-closed-interval-is-bounded, continuous-on-closed-interval-is-uniformly-continuous, power-function-is-continuous, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, uniform-partition, darboux-sums, supremum-of-function-values, riemann-integral, integrability-criterion, monotone-implies-integrable]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.3 소절) Lemma 5.2.7 과 그 증명 (p.195)
    checked: original
    note: "(1)은 출처의 Lemma 5.2.7(p.195)이다. 출처의 증명은 f 가 유계이고 고르게 연속이라는 것에서 시작해 |x − y| < δ 이면 |f(x) − f(y)| < ε/(b − a) 인 δ 와 (b − a)/n < δ 인 균등 분할을 잡고, 'As f is continuous on [x_{i−1}, x_i], it attains a maximum and a minimum on this interval. Let x be a point where f attains the maximum and y be a point where f attains the minimum' 이라 하여 작은 구간마다 최대점과 최소점을 잡아 M_i − m_i = f(x) − f(y) < ε/(b − a) 를 얻는다. 이 항목은 그 점들을 잡지 않고, 작은 구간의 모든 x, y 에서 |f(x) − f(y)| < ε′ 이라는 것에서 supremum-of-function-values 의 (4)로 M_i − m_i ≤ ε′ 을 얻는다. 그래서 출처의 '< ε' 대신 '≤ ε' 꼴의 판정(integrability-criterion 의 (5))으로 끝낸다. (3)(작은 구간이 모두 짧은 분할)은 출처의 증명이 균등 분할에 대해 하는 계산을 모든 분할로 적은 것이다. 출처는 리만 합과 메시를 연습문제 5.1.12(p.190)에서 다루고, 이 항목은 (3)만 진술한다. 반례 '한 점에서 뛰는 단조함수' 는 출처 연습문제 5.1.5(p.189)와 Example 5.1.12(p.186)의 함수와 같은 발상(한 점에서 뛰는 계단 모양)이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 부정 주장 1건과 넘겨짚은 일반 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
연속과 "$A$에서 연속"은 [[continuous-function]]의 것이고, $[a, b]$의 분할, 작은 구간, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이며, 다르부 합은 [[darboux-sums]]의 것이고, 리만 적분가능은 [[riemann-integral]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

1. (연속함수) $f : [a, b] \to \mathbb{R}$가 연속함수이면 $f$는 리만 적분가능하다.
2. (더 큰 정의역) $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $f : S \to \mathbb{R}$가 $[a, b]$에서 연속이면 $f$는 $[a, b]$에서 리만 적분가능하다.
3. (작은 구간이 모두 짧은 분할) $f : [a, b] \to \mathbb{R}$가 연속함수이면, 모든 양수 $\varepsilon$에 대하여 양수 $\delta$가 있어, 모든 작은 구간의 길이가 $\delta$보다 작은 $[a, b]$의 모든 분할 $P$에서 $U(P, f) - L(P, f) \le \varepsilon$이다.
:::

:::english
Continuity and "continuous on $A$" are as in the entry on continuous functions; partitions of $[a, b]$, subintervals and lengths $\Delta x_i$ are as in the entry on partitions of an interval; Darboux sums are as in the entry on Darboux sums; and Riemann integrability is as in the entry on the Riemann integral. Below, $a$ and $b$ are real numbers with $a < b$.

1. (Continuous functions) If $f : [a, b] \to \mathbb{R}$ is a continuous function, then $f$ is Riemann integrable.
2. (Larger domains) If $[a, b] \subseteq S \subseteq \mathbb{R}$ and $f : S \to \mathbb{R}$ is continuous on $[a, b]$, then $f$ is Riemann integrable on $[a, b]$.
3. (Partitions with all subintervals short) If $f : [a, b] \to \mathbb{R}$ is a continuous function, then for every positive $\varepsilon$ there is a positive $\delta$ such that $U(P, f) - L(P, f) \le \varepsilon$ for every partition $P$ of $[a, b]$ all of whose subintervals have length less than $\delta$.
:::

## 직관

연속함수라도 작은 구간 하나 안에서는 값이 흔들립니다. 그 흔들림의 폭, 곧 진동 $M_i - m_i$가 상합과 하합의 차를 만듭니다. 고른 연속성은 "가까운 두 점의 값은 가깝다"를 구간 전체에서 한 $\delta$로 보장하므로, 모든 작은 구간을 $\delta$보다 짧게 하면 모든 작은 구간에서 진동이 함께 작아집니다. 그러면 상합과 하합의 차는 (진동의 상한) × (길이의 합) $= \varepsilon' (b - a)$ 이하로 눌립니다.

출처는 작은 구간마다 최댓값과 최솟값이 나오는 점을 잡아 진동을 두 값의 차로 씁니다. 이 항목은 점을 잡지 않습니다. 작은 구간의 **모든** 두 점에서 값의 차가 $\varepsilon'$ 미만이라는 것만으로 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (4)가 진동을 $\varepsilon'$ 이하로 누르기 때문입니다.

## 증명

:::idea
고른 연속의 $\delta$를 잡으면, 길이가 $\delta$보다 짧은 작은 구간의 모든 두 점에서 값의 차가 $\varepsilon/(b - a)$보다 작다. 진동의 판정으로 $M_i - m_i \le \varepsilon/(b - a)$이고, 길이를 곱해 더하면 $U - L \le \varepsilon$이다. 균등 분할로 그런 분할이 있음을 보이면 적분가능하다.
:::

:::hint
$x$, $y$가 모두 $[x_{i-1}, x_i]$에 있으면 $|x - y| \le \Delta x_i$입니다. 이것을 [[absolute-value]]의 (7)로 확인해 보세요.
:::

:::proof
번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다.

**이 항목의 (3).** $f$는 [[continuous-on-closed-interval-is-bounded|닫힌구간 위의 연속함수의 유계성]] 항목의 (1)에 의해 유계이므로 다르부 합이 정의된다. 양수 $\varepsilon$이 주어지면 $\varepsilon' = \varepsilon \cdot (b - a)^{-1}$로 둔다. $0 < b - a$이므로 (6)의 (i)과 (4)의 (i)에 의해 $0 < \varepsilon'$이다. [[continuous-on-closed-interval-is-uniformly-continuous|닫힌구간 위의 고른 연속]] 항목의 (1)에 의해 양수 $\delta$가 있어, $x$, $w \in [a, b]$이고 $|x - w| < \delta$이면 $|f(x) - f(w)| < \varepsilon'$이다.

$P$를 점이 $x_0, \dots, x_n$이고 모든 $i$에서 $\Delta x_i < \delta$인 $[a, b]$의 분할이라 하자. $1 \le i \le n$인 $i$를 하나 정하고 $D = [x_{i-1}, x_i]$라 하자. $D$는 공집합이 아니고 $[a, b]$의 부분집합이다([[partition-of-an-interval]]의 (2)). $x$, $y \in D$이면 $x_{i-1} \le x \le x_i$이고 $x_{i-1} \le y \le x_i$이므로 (3)의 (iii)과 (2)의 (iii)에 의해 $x - y \le x_i - x_{i-1}$이고 $y - x \le x_i - x_{i-1}$이다. 둘째 부등식에서 (3)의 (iii)과 (K9), (K12)의 (iv)에 의해 $-\Delta x_i \le x - y$이므로, [[absolute-value]]의 (7)에 의해 $|x - y| \le \Delta x_i < \delta$이다. 따라서 $|f(x) - f(y)| < \varepsilon'$이고, 특히 $|f(x) - f(y)| \le \varepsilon'$이다.

$f$는 유계이므로 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 단락의 둘째 문장에 의해 $D$ 위에서 유계이다. 그 항목의 (4)의 (iii)에서 (i)로 가는 방향을 $r = \varepsilon'$에 쓰면 $\sup f(D) - \inf f(D) \le \varepsilon'$, 곧 $M_i - m_i \le \varepsilon'$이다([[darboux-sums]]의 정의에 의해 $m_i = \inf f(D)$, $M_i = \sup f(D)$이다). $0 < \Delta x_i$이므로 (4)의 (iii)에 의해 $(M_i - m_i)\Delta x_i \le \varepsilon'\Delta x_i$이다.

이것이 $1 \le i \le n$인 모든 $i$에서 성립하므로 [[darboux-sums]]의 (3), [[linearity-and-order-of-finite-sums]]의 (3), (1), (8)과 [[partition-of-an-interval]]의 (7)에 의해
$$
U(P, f) - L(P, f) = \sum_{i=1}^{n} (M_i - m_i)\Delta x_i \le \sum_{i=1}^{n} \varepsilon'\Delta x_i = \varepsilon' \sum_{i=1}^{n} \Delta x_i = \varepsilon'(b - a) = \varepsilon
$$
이다(마지막 등식은 (K2), (K4), (K8)의 (iii)).

**이 항목의 (1).** $f$는 유계이다. 양수 $\varepsilon$이 주어지면 (3)의 $\delta$에 대하여 [[uniform-partition]]의 (2)에 의해 $h_n < \delta$인 자연수 $n$이 있고, 그 항목의 (1)에 의해 $P_n$의 모든 작은 구간의 길이는 $h_n$이다. (3)에 의해 $U(P_n, f) - L(P_n, f) \le \varepsilon$이다. 모든 양수 $\varepsilon$에 대해 이런 분할이 있으므로 [[integrability-criterion|리만 적분가능성의 판정]]의 (5)에 의해 $f$는 적분가능하다.

**이 항목의 (2).** [[continuous-function]]의 (5)에 의해 제한 $f|_{[a, b]}$는 연속함수이고, (1)에 의해 적분가능하다. [[riemann-integral]]의 (4)에 의해 $f$는 $[a, b]$에서 적분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[구간에 따라 단조가 아닌 x²]
$p_2(x) = x^2$으로 정한 $p_2 : \mathbb{R} \to \mathbb{R}$는 [[power-function-is-continuous]]의 (1)에 의해 연속함수이고, 따라서 $[a, b]$에서 연속입니다. (2)에 의해 $p_2$는 모든 $[a, b]$에서 적분가능합니다. $a < 0 < b$이면 $p_2$는 $[a, b]$ 위에서 단조가 아니므로($p_2(a) > 0 = p_2(0)$이고 $p_2(0) < p_2(b)$) [[monotone-implies-integrable|단조함수의 적분가능성]]으로는 이 결론을 얻을 수 없습니다. 예컨대 $[-1, 1]$에서 적분가능하다는 것은 이 항목에서 나옵니다(적분값은 이 항목이 주지 않습니다).
:::

:::counterexample[한 점에서 뛰는 단조함수]
$[0, 2]$ 위에서 $x < 1$이면 $f(x) = 0$, $1 \le x$이면 $f(x) = 1$인 함수는 $1$에서 연속이 아닙니다. $\varepsilon = 1/2$에 대해 어떤 양수 $\delta$를 잡아도 $x = 1 - \min\{\delta, 1\}/2$는 $|x - 1| < \delta$이고 $x < 1$이므로 $|f(x) - f(1)| = 1 > 1/2$입니다. 그러나 이 함수는 단조증가이므로($x < y$이면 $f(x)$와 $f(y)$는 $0$ 또는 $1$이고, $f(x) = 1$이면 $1 \le x < y$이어서 $f(y) = 1$이므로 $f(x) \le f(y)$, [[derivative-and-monotonicity|도함수와 증가·감소]]의 정의) [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 적분가능합니다. 연속은 적분가능하기 위한 충분조건일 뿐 필요조건은 아닙니다.
:::

## 확인 질문

:::check[$f(x) = 3x$인 $f : [0, 1] \to \mathbb{R}$에서 (3)의 $\varepsilon = 1/10$에 맞는 $\delta$ 하나는?]
$\delta = 1/30$이면 됩니다. 증명대로 $\varepsilon' = \varepsilon/(1 - 0) = 1/10$이고, $|x - w| < 1/30$이면 $|3x - 3w| = 3|x - w| < 1/10$입니다([[absolute-value]]의 (4)). 그러면 모든 작은 구간의 길이가 $1/30$보다 짧은 분할에서 $U(P, f) - L(P, f) \le 1/10$입니다.
:::

:::check[$f : [a, b] \to \mathbb{R}$가 $[a, b]$의 한 점 $c$를 뺀 모든 점에서 연속이면 이 항목으로 적분가능하다고 할 수 있는가?]
이 항목만으로는 할 수 없습니다. (1)은 $f$가 $[a, b]$의 모든 점에서 연속이라고 가정합니다. 위 반례의 함수는 한 점에서 연속이 아니지만 단조이므로 다른 항목으로 적분가능합니다. 한편 한 점을 뺀 곳에서 연속이더라도 유계가 아닌 함수라면 [[riemann-integral]]의 (6)에 의해 적분가능하지 않습니다. 그래서 답은 함수에 따라 달라지고, 이 항목은 어느 쪽도 말하지 않습니다.
:::
