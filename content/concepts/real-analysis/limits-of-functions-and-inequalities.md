---
title: 함수의 극한과 부등식
title_en: Limits of Functions and Inequalities
aliases: [함수의 조임 정리, 함수의 샌드위치 정리, 극한의 부호 보존, squeeze theorem for functions, limits preserve inequalities, sign preservation]
kind: proposition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 함수의 극한이 L 이면 L 보다 작은 수는 c 가까이에서 함숫값보다 작다. 두 함수 사이의 ≤ 가 c 가까이에서 성립하면 극한에서도 성립하고, 상수 사이에 놓인 함수의 극한도 그 사이에 있으며, 같은 극한을 갖는 두 함수 사이에 끼인 함수도 그 극한으로 수렴한다.
requires: [proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-valued-function, cluster-point, limit-of-a-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.1.3절 Corollary 3.1.9 와 그 증명, Corollary 3.1.10 과 그 앞 문단 (p.117), Corollary 3.1.11 과 그 앞 문단 (p.118), 연습문제 3.1.2, 3.1.3 (p.120); 2.2.1절 Corollary 2.2.4 뒤 문단 (p.62); 3.2절 연습문제 3.2.11 (p.128)
    checked: original
    note: "출처의 Corollary 3.1.9(p.117)는 S \\ {c} 의 모든 x 에서 f(x) ≤ g(x) 이고 두 극한이 있으면 lim f ≤ lim g 라는 것이고, 이 항목의 (2)이다. 출처는 S \\ {c} 의 점으로 이루어지고 c 로 수렴하는 수열을 잡아 Lemma 3.1.7(수열로 본 극한)과 수열의 Lemma 2.2.3 으로 증명한다. 그런 수열이 있다는 것은 출처의 Proposition 3.1.2 의 한 방향(p.113)이고, 출처는 그것을 각 n 마다 점을 하나씩 골라 증명한다. 이 항목은 ε–δ 로 직접 증명한다(귀류법으로, 집적점의 정의가 주는 점 하나를 쓴다). 출처의 Corollary 3.1.10(p.117, 상수 사이)과 Corollary 3.1.11(p.118, 조임)은 이 항목의 (3), (4)이고, 출처는 각각 '상수함수를 적용하면'과 'Lemma 3.1.7 을 같은 방식으로 쓰면' 얻는다고 하며 증명을 연습문제 3.1.2, 3.1.3(p.120)으로 둔다. 이 항목은 (3)을 (2)와 상수함수로, (4)를 ε–δ 로 직접 증명한다. 출처의 세 따름정리는 부등식이 S \\ {c} 전체에서 성립한다고 가정하고, 이 항목은 c 가까이에서만 성립해도 되는 꼴로 적는다. 그 꼴은 출처에 없다(검색한 범위). (1)은 출처에 명제로 없다(검색한 범위). 연속함수에 대한 비슷한 사실(f(c) > 0 이면 c 의 어떤 열린구간에서 f > 0)이 출처의 연습문제 3.2.11(p.128)이다. 반례 '엄격한 부등식'은 출처가 p.62 에서 수열 −1/n < 1/n 의 극한이 모두 0 이라는 예로 드는 경고를 함수에 옮긴 같은 발상이다. 예시 '|x| 로 누르기'는 출처의 Example 3.1.8 의 둘째 부분(p.117, |x sin(1/x)| ≤ |x| 로 극한 0 을 얻는 것)과 같은 발상이다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 상수함수는 [[real-valued-function]]의 것이고, 집적점은 [[cluster-point]]의 것이며, 수렴, "$c$ 가까이에서 성립한다", 기호 $\lim_{x \to c}$는 [[limit-of-a-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $c$를 $S$의 집적점, $f$, $g$, $h$를 $S$ 위의 실함수라 하자.

1. (극한에 가까운 함숫값) $f$가 $c$에서 $L$로 수렴한다고 하자. 실수 $a$가 $a < L$이면 "$a < f(x)$"가 $c$ 가까이에서 성립하고, 실수 $b$가 $L < b$이면 "$f(x) < b$"가 $c$ 가까이에서 성립한다. 특히 $0 < L$이면 "$2^{-1}L < f(x)$"가, $L < 0$이면 "$f(x) < 2^{-1}L$"이 $c$ 가까이에서 성립하고, 어느 경우든 "$f(x) \ne 0$"이 $c$ 가까이에서 성립한다.
2. (극한과 부등식) $f$가 $c$에서 $L_1$로, $g$가 $c$에서 $L_2$로 수렴하고 "$f(x) \le g(x)$"가 $c$ 가까이에서 성립하면 $L_1 \le L_2$이다. 특히 $c$와 다른 $S$의 모든 원소 $x$에서 $f(x) \le g(x)$이면 $\lim_{x \to c} f(x) \le \lim_{x \to c} g(x)$이다.
3. (상수 사이) $f$가 $c$에서 $L$로 수렴하고 $a$, $b$가 실수라 하자. "$a \le f(x)$"가 $c$ 가까이에서 성립하면 $a \le L$이고, "$f(x) \le b$"가 $c$ 가까이에서 성립하면 $L \le b$이다. 특히 $c$와 다른 $S$의 모든 원소 $x$에서 $a \le f(x) \le b$이면 $a \le \lim_{x \to c} f(x) \le b$이다.
4. (**조임 정리**, squeeze theorem) "$f(x) \le g(x) \le h(x)$"가 $c$ 가까이에서 성립하고 $f$와 $h$가 $c$에서 같은 실수 $L$로 수렴하면, $g$도 $c$에서 $L$로 수렴한다. 곧 $\lim_{x \to c} g(x) = L$이다.
:::

:::english
Real-valued functions and constant functions are those of the entry on real-valued functions; cluster points are those of the entry on cluster points; and convergence, "holds near $c$", and the symbol $\lim_{x \to c}$ are those of the entry on the limit of a function. Let $S$ be a subset of $\mathbb{R}$, $c$ a cluster point of $S$, and $f$, $g$, $h$ real-valued functions on $S$.

1. (Function values near the limit) Suppose $f$ converges to $L$ at $c$. If a real number $a$ satisfies $a < L$, then "$a < f(x)$" holds near $c$; if a real number $b$ satisfies $L < b$, then "$f(x) < b$" holds near $c$. In particular, if $0 < L$ then "$2^{-1}L < f(x)$" holds near $c$, if $L < 0$ then "$f(x) < 2^{-1}L$" holds near $c$, and in either case "$f(x) \ne 0$" holds near $c$.
2. (Limits and inequalities) If $f$ converges to $L_1$ and $g$ converges to $L_2$ at $c$, and "$f(x) \le g(x)$" holds near $c$, then $L_1 \le L_2$. In particular, if $f(x) \le g(x)$ for every element $x$ of $S$ different from $c$, then $\lim_{x \to c} f(x) \le \lim_{x \to c} g(x)$.
3. (Between constants) Suppose $f$ converges to $L$ at $c$ and $a$, $b$ are real numbers. If "$a \le f(x)$" holds near $c$, then $a \le L$; if "$f(x) \le b$" holds near $c$, then $L \le b$. In particular, if $a \le f(x) \le b$ for every element $x$ of $S$ different from $c$, then $a \le \lim_{x \to c} f(x) \le b$.
4. (**Squeeze theorem**) If "$f(x) \le g(x) \le h(x)$" holds near $c$ and $f$ and $h$ converge at $c$ to the same real number $L$, then $g$ also converges to $L$ at $c$. That is, $\lim_{x \to c} g(x) = L$.
:::

## 직관

(1)은 극한이 함숫값들의 "도착점"이라는 말을 부등식으로 옮긴 것입니다. $L$보다 조금 작은 수 $a$를 정하면, $c$에 충분히 가까운 곳의 함숫값은 $L$ 가까이에 모여 있으므로 $a$를 넘어섭니다. 수위계에 비유하면, 물이 결국 $L$의 높이에 이르는 수조에서 $L$보다 낮게 그은 선은 마지막 무렵에는 늘 물에 잠깁니다. 비유가 맞지 않는 곳은 "마지막 무렵"이 시간이 아니라 "$c$와의 거리가 작은 곳"이라는 점입니다.

(2)는 (1)에서 바로 나옵니다. $L_2 < L_1$이었다면 두 극한 사이에 수 $m$을 두고, $c$ 가까이에서 $g(x) < m < f(x)$가 되어 $f(x) \le g(x)$와 어긋납니다. 이때 "$c$ 가까이에서"인 $x$가 실제로 있어야 모순이 나오는데, 그것을 보장하는 것이 $c$가 집적점이라는 가정입니다. 조임 정리 (4)는 $g(x)$가 $L$ 가까이에 모인 두 값 $f(x)$, $h(x)$ 사이에 갇혀 있으니 $g(x)$도 그 근처에 있다는 것입니다.

세 성질 모두 부등식이 $c$ 가까이에서만 성립하면 충분합니다. 극한은 $c$에서 떨어진 곳의 함숫값에 상관하지 않기 때문입니다.

## 증명

:::idea
(1)은 정의를 $\varepsilon = L - a$로 쓰면 나온다. (2)는 귀류법으로 두 극한 사이의 수 $m$을 잡고 (1)을 쓴다. 조임 정리는 $L - \varepsilon < f(x) \le g(x) \le h(x) < L + \varepsilon$을 쓴다.
:::

:::hint
(1)에서 $|f(x) - L| < \varepsilon$을 [[absolute-value|절댓값]]의 (8)로 두 부등식 $L - \varepsilon < f(x) < L + \varepsilon$으로 바꾼다.
:::

:::hint
여러 조건이 각각 $c$ 가까이에서 성립할 때 모두가 함께 성립하는 점이 있다는 것은 [[limit-of-a-function]]의 (2)의 (i), (ii)이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (8)"은 [[absolute-value]]의 번호, "극한 (2)"는 [[limit-of-a-function]]의 번호이다.

**1의 증명.** $a < L$이라 하자. 순서 성질 (3)의 (i)에 의해 $\varepsilon = L - a$는 양수이므로, 수렴의 정의에 의해 "$|f(x) - L| < \varepsilon$"이 $c$ 가까이에서 성립한다. 그런 $x$에서 절댓값 (8)에 의해 $L - \varepsilon < f(x)$이고, (K12)의 (iv), (K9), (K2), (K8)의 (ii), (K4)에 의해 $L - \varepsilon = L - (L - a) = a$이다. 따라서 "$a < f(x)$"가 $c$ 가까이에서 성립한다(같은 $\delta_0$을 쓴다).

$L < b$이면 $\varepsilon = b - L$이 양수이고, "$|f(x) - L| < \varepsilon$"이 성립하는 $x$에서 절댓값 (8)에 의해 $f(x) < L + \varepsilon = L + (b - L) = b$이다((K1), (K2), (K8)의 (ii), (K4)).

$0 < L$이면 순서 성질 (8)을 $0 < L$에 쓰면 $0 < 2^{-1}L < L$이므로($(0 + L)/2 = 2^{-1}L$), 첫 문장을 $a = 2^{-1}L$로 쓰면 "$2^{-1}L < f(x)$"가 $c$ 가까이에서 성립하고, 그런 $x$에서 (W2)에 의해 $0 < f(x)$이다. $L < 0$이면 순서 성질 (8)을 $L < 0$에 쓰면 $L < 2^{-1}L < 0$이므로, $b = 2^{-1}L$로 쓰면 "$f(x) < 2^{-1}L$"이 $c$ 가까이에서 성립하고, 그런 $x$에서 (W2)에 의해 $f(x) < 0$이다. 어느 경우든 순서 성질 (1)의 (i)에 의해 $f(x) \ne 0$이다.

**2의 증명.** [[proof-by-contradiction|귀류법]]을 쓴다. $L_1 \le L_2$가 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $L_2 < L_1$이다. $m = \dfrac{L_2 + L_1}{2}$로 두면 순서 성질 (8)에 의해 $L_2 < m < L_1$이다. 이 항목의 (1)을 $f$와 $a = m$에 쓰면 "$m < f(x)$"가, $g$와 $b = m$에 쓰면 "$g(x) < m$"이 $c$ 가까이에서 성립한다. 가정에 의해 "$f(x) \le g(x)$"도 $c$ 가까이에서 성립한다. 극한 (2)의 (i)을 두 번 쓰면 세 부등식이 함께 $c$ 가까이에서 성립하고, 극한 (2)의 (ii)에 의해 세 부등식이 모두 성립하는 $x \in S$가 있다. 그 $x$에서 $g(x) < m < f(x) \le g(x)$이므로 (W2)와 순서 성질 (1)의 (v)에 의해 $g(x) < g(x)$인데, 이것은 (W1)에 어긋난다. 따라서 $L_1 \le L_2$이다.

둘째 문장: 극한 (2)의 (iii)에 의해 "$f(x) \le g(x)$"가 $c$ 가까이에서 성립하므로 첫 문장을 쓸 수 있고, 기호 $\lim$의 약속([[limit-of-a-function]])에 의해 $L_1 = \lim_{x \to c} f(x)$, $L_2 = \lim_{x \to c} g(x)$이다.

**3의 증명.** $S$ 위의 값이 $a$인 상수함수를 $u$라 하자. 극한 (4)에 의해 $u$는 $c$에서 $a$로 수렴한다. "$a \le f(x)$"는 "$u(x) \le f(x)$"와 같으므로, 이 항목의 (2)를 $u$와 $f$에 쓰면 $a \le L$이다. 같은 방식으로 값이 $b$인 상수함수를 $w$라 하면 $w$는 $c$에서 $b$로 수렴하고, "$f(x) \le b$"는 "$f(x) \le w(x)$"와 같으므로 (2)를 $f$와 $w$에 쓰면 $L \le b$이다. 마지막 문장은 극한 (2)의 (iii)에 의해 두 부등식이 $c$ 가까이에서 성립하므로 앞의 두 문장에서 나온다.

**4의 증명.** 양의 실수 $\varepsilon$을 잡는다. 수렴의 정의에 의해 "$|f(x) - L| < \varepsilon$"과 "$|h(x) - L| < \varepsilon$"이 각각 $c$ 가까이에서 성립하고, 가정에 의해 "$f(x) \le g(x) \le h(x)$"도 $c$ 가까이에서 성립한다. 극한 (2)의 (i)을 두 번 쓰면 셋이 함께 $c$ 가까이에서 성립한다. 그런 $x$에서 절댓값 (8)에 의해 $L - \varepsilon < f(x)$이고 $h(x) < L + \varepsilon$이므로, 순서 성질 (1)의 (v)에 의해
$$
L - \varepsilon < f(x) \le g(x) \le h(x) < L + \varepsilon
$$
에서 $L - \varepsilon < g(x) < L + \varepsilon$이고, 절댓값 (8)에 의해 $|g(x) - L| < \varepsilon$이다. 따라서 모든 양의 실수 $\varepsilon$에 대하여 "$|g(x) - L| < \varepsilon$"이 $c$ 가까이에서 성립하고, 이것이 $g$가 $c$에서 $L$로 수렴한다는 정의이다. $\blacksquare$
:::

## 예시와 반례

:::example[$|x|$로 누르기]
$g(x) = x x$ ($0 \le x$일 때), $g(x) = 0$ ($x < 0$일 때)로 정한 $g : \mathbb{R} \to \mathbb{R}$가 $0$에서 $0$으로 수렴함을 조임 정리로 보입니다. $\mathbb{R}$은 [[interval|구간]]이므로 [[cluster-point]]의 (6)에 의해 $0$은 $\mathbb{R}$의 집적점입니다.

먼저 $a(x) = |x|$로 정한 함수가 $0$에서 $0$으로 수렴합니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon$으로 두면 $|x - 0| < \delta$인 $x$에서 $\bigl||x| - 0\bigr| = |x| < \varepsilon$이기 때문입니다([[absolute-value|절댓값]]의 (2), (1)). 값이 $0$인 상수함수는 $0$으로 수렴합니다([[limit-of-a-function]]의 (4)).

다음으로 "$0 \le g(x) \le |x|$"가 $0$ 가까이에서 성립함을 $\delta_0 = 1$로 봅니다. $|x| < 1$이라 합시다. $x < 0$이면 $g(x) = 0 \le |x|$입니다. $0 \le x$이면 $x < 1$이고, [[order-properties-of-reals]]의 (4)의 (iii)으로 $x \le 1$의 양변에 $x \ge 0$을 곱하면 $g(x) = x x \le 1 \cdot x = x = |x|$이며, 같은 항목의 (4)의 (iv)에 의해 $0 \le x x$입니다. 조임 정리 (4)에 의해 $g$는 $0$에서 $0$으로 수렴합니다. 부등식 $g(x) \le |x|$는 $x = 2$에서 $4 \le 2$가 되어 깨지므로, 정의역 전체가 아니라 $0$ 가까이에서만 성립하는 꼴이 필요했습니다.
:::

:::counterexample[엄격한 부등식은 극한에서 $\le$로 약해질 수 있다]
$f$를 $\mathbb{R}$ 위의 값이 $0$인 상수함수, $g(x) = |x|$로 정한 함수라 합시다. $0$과 다른 모든 실수 $x$에서 [[cluster-point]]의 (1)에 의해 $0 < |x|$, 곧 $f(x) < g(x)$입니다. 그러나 위의 예시에서 보았듯이 두 함수는 모두 $0$에서 $0$으로 수렴합니다. 따라서 (2)에서 가정의 $\le$를 $<$로 바꾸어도 결론은 $L_1 < L_2$가 아니라 $L_1 \le L_2$까지만 얻습니다. 같은 이유로 (1)에서 $a < L$을 $a \le L$로 바꿀 수 없습니다. 값이 $0$인 상수함수 $f$는 $0$으로 수렴하지만, $a = 0$에서 "$0 < f(x)$"는 어느 점에서도 성립하지 않습니다.
:::

## 확인 질문

:::check[$\lim_{x \to c} f(x) = 3$이면 "$\dfrac{5}{2} < f(x) < \dfrac{7}{2}$"가 $c$ 가까이에서 성립하는가?]
성립합니다. $\dfrac{5}{2} < 3 < \dfrac{7}{2}$이므로 (1)에 의해 "$\dfrac{5}{2} < f(x)$"와 "$f(x) < \dfrac{7}{2}$"가 각각 $c$ 가까이에서 성립하고, [[limit-of-a-function]]의 (2)의 (i)에 의해 함께 성립합니다. 정의를 $\varepsilon = \dfrac{1}{2}$로 쓴 것과 같습니다.
:::

:::check[조임 정리에서 $f$와 $h$의 극한이 서로 다르면 $g$의 극한에 대해 무엇을 알 수 있는가?]
극한이 하나로 정해지지 않습니다. $\mathbb{R}$ 위의 값이 $-1$과 $1$인 상수함수를 $f$, $h$라 하면 $0$에서 각각 $-1$, $1$로 수렴합니다([[limit-of-a-function]]의 (4)). 값이 $0$인 상수함수와 값이 $2^{-1}$인 상수함수는 둘 다 $f$와 $h$ 사이에 놓이지만, $0$에서 각각 $0$과 $2^{-1}$로 수렴합니다. 이 정리가 말해 주는 것은 $g$가 수렴할 때 (3)에 의해 그 극한이 $-1$ 이상 $1$ 이하라는 것뿐입니다.
:::
