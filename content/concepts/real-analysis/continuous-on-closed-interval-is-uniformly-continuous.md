---
title: 닫힌구간 위의 연속함수는 고르게 연속이다
title_en: A Continuous Function on a Closed Interval Is Uniformly Continuous
aliases: [하이네–칸토어 정리, 고른 연속 정리, Heine–Cantor theorem, uniform continuity on closed intervals]
kind: theorem
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: a < b 일 때 닫힌구간 [a, b] 위의 연속함수는 고르게 연속이다. 증명은 수열을 쓰지 않고 상한으로 한다.
requires: [subset, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, upper-bound-and-supremum, least-upper-bound-property, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, power-of-a-real-number, uniform-continuity]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.4.1절, Example 3.4.3 뒤 문단과 Theorem 3.4.4 와 그 증명과 뒤 문단 (p.138–139)
    checked: original
    note: "(1)은 출처의 Theorem 3.4.4(p.139)와 같다. 출처는 수열 둘과 볼차노–바이어슈트라스 정리로 증명한다. 이 항목은 상한으로 증명한다. 출처는 1.4절(p.41)에서 구간 기호 [a, b] 를 a < b 일 때 정의한다. 진술의 a < b 는 그 정의와 같다. (2)는 출처의 Theorem 3.4.4 에 없다(검색한 범위). 출처는 3.4절 끝(p.143)에서 √x 가 [0, 1] 로 제한하면 이 정리로 고르게 연속이라고 적는다. 이름 '하이네–칸토어 정리'는 출처에 나오지 않는다. 반례 '오른쪽 끝이 빠진 구간 위의 1/(1 − x)'([0, 1) 위의 함수)는 새로 골랐다. 출처의 Example 3.4.3(p.138)은 (0, 1) 위의 1/x 를 들고, Example 3.4.3 뒤 문단(p.139)은 닫히지 않거나 유계가 아닌 구간에서 연속이지만 고르게 연속이 아닐 수 있다고 적는다. 반례는 그것과 같은 발상이다. 확인 질문 1 의 [0, 2] 위의 x² 는 출처의 Example 3.4.2(p.138)의 부등식과 같은 발상이고, 확인 질문 2 는 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
닫힌구간 $[a, b]$는 [[interval]]의 것이고, 실함수와 제한은 [[real-valued-function]]의 것이며, 연속은 [[continuous-function]]의 것이고, 고른 연속은 [[uniform-continuity]]의 것이다. $a < b$인 실수 $a$, $b$에 대하여 다음이 성립한다.

1. $f : [a, b] \to \mathbb{R}$가 연속함수이면 $f$는 고르게 연속이다. 곧 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $x$, $w \in [a, b]$이고 $|x - w| < \delta$이면 $|f(x) - f(w)| < \varepsilon$이다.
2. $S$가 $\mathbb{R}$의 부분집합이고 $[a, b] \subseteq S$이며 $f : S \to \mathbb{R}$가 $[a, b]$에서 연속이면, 제한 $f|_{[a, b]}$는 고르게 연속이다. 곧 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $x$, $w \in [a, b]$이고 $|x - w| < \delta$이면 $|f(x) - f(w)| < \varepsilon$이다.
:::

:::english
The closed interval $[a, b]$ is that of the entry on intervals; real-valued functions and restrictions are those of the entry on real-valued functions; continuity is that of the entry on continuous functions; and uniform continuity is that of the entry on uniform continuity. For real numbers $a$, $b$ with $a < b$, the following hold.

1. If $f : [a, b] \to \mathbb{R}$ is a continuous function, then $f$ is uniformly continuous; that is, for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(x) - f(w)| < \varepsilon$ whenever $x$, $w \in [a, b]$ and $|x - w| < \delta$.
2. If $S$ is a subset of $\mathbb{R}$ with $[a, b] \subseteq S$ and $f : S \to \mathbb{R}$ is continuous on $[a, b]$, then the restriction $f|_{[a, b]}$ is uniformly continuous; that is, for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(x) - f(w)| < \varepsilon$ whenever $x$, $w \in [a, b]$ and $|x - w| < \delta$.
:::

## 직관

연속함수는 점 $c$마다 "$c$ 근처에서는 이만큼의 $\delta$면 된다"는 약속을 줍니다. 이 정리는 닫힌구간에서는 그 약속들을 모아 구간 전체에 쓸 수 있는 $\delta$ 하나로 만들 수 있다는 것입니다.

증명은 왼쪽 끝 $a$에서 오른쪽으로 걸어가는 방식입니다. 오차 $\varepsilon$을 하나 정해 두고, "$a$부터 $t$까지의 두 점에서는 어떤 $\delta$가 통한다"는 $t$들을 모아 그 상한 $s$를 잡습니다. $s$에서의 연속은 $s$ 근처의 두 점이 함숫값으로도 가깝다는 것을 줍니다. $s$보다 조금 왼쪽까지 통하던 $\delta$와 $s$ 근처에서 통하는 $\delta$ 가운데 작은 것을 쓰면 $s$보다 조금 오른쪽까지 통하게 할 수 있고, $s$가 상한이므로 그것은 $s$가 이미 $b$라는 뜻입니다. 거리가 작은 두 점이 하나는 왼쪽 부분에, 하나는 $s$ 근처에 걸쳐 있을 수 있는데, 그때는 두 점이 모두 $s$ 근처에 있도록 $\delta$를 충분히 작게 잡는 것이 요점입니다. 비유가 맞는 곳은 "걸어간 끝에서 한 걸음 더"이고, 맞지 않는 곳은 이 논증이 걸음을 세지 않고 상한 하나로 끝낸다는 점입니다.

닫힌구간이라는 가정은 이렇게 쓰입니다. 왼쪽 끝 $a$가 정의역에 있어서 $a$가 모으는 집합의 원소가 되고 상한이 생깁니다. $a \le s \le b$이므로 $s$에서의 연속을 쓸 수 있습니다. 오른쪽 끝 $b$가 정의역에 있어서 마지막에 "$b$까지 통한다"가 곧 "구간 전체에서 통한다"가 됩니다. 아래 반례는 오른쪽 끝이 빠지면 결론이 깨질 수 있음을 보입니다.

## 증명

:::idea
$\varepsilon$을 고정하고 "$t$ 이하인 $[a, b]$의 두 점에서 통하는 $\delta$가 있다"는 $t$들의 집합 $A$의 상한 $s$를 잡는다. $s$에서 $\varepsilon/2$의 연속으로 얻은 $\delta_1$로 $s$ 근처의 두 점을 다루고, $s$ 조금 왼쪽의 $A$의 원소 $t$에서 통하는 $\delta_t$와 $\delta_1/2$ 가운데 작은 것을 쓰면 $t' = \min\{s + \delta_1/2, b\}$도 $A$의 원소이다. 따라서 $s = b \in A$이다.
:::

:::hint
$s$에서의 연속으로 $|x - s| < \delta_1$이면 $|f(x) - f(s)| < \varepsilon/2$인 $\delta_1$을 얻으면, $s$와의 거리가 $\delta_1$ 미만인 두 점 $x$, $w$에서 $|f(x) - f(w)| < \varepsilon$이다.
:::

:::hint
두 점 $x$, $w$가 $t' $ 이하이고 $|x - w| < \min\{\delta_t, \delta_1/2\}$일 때, 둘 다 $t$ 이하이면 $\delta_t$를 쓴다. 하나가 $t$보다 크면 그 점은 $s$와의 거리가 $\delta_1/2$ 미만이고, 다른 점은 그 점과의 거리가 $\delta_1/2$ 미만이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (8)"은 [[absolute-value]]의 번호, "삼각부등식 (4)"는 [[triangle-inequality]]의 번호, 상계와 상한은 [[upper-bound-and-supremum]]의 것이고 "상한 (4)"는 그 항목의 번호, "구간 (3)"은 [[interval]]의 번호, "연속 (5)"는 [[continuous-function]]의 번호이다. 두 양수 $p$, $q$의 $\min\{p, q\}$는 절댓값 (10)에 의해 $p$이거나 $q$이므로 양수이고, $p$ 이하이며 $q$ 이하이다.

**1의 증명.** $f : [a, b] \to \mathbb{R}$가 연속함수라 하고 양의 실수 $\varepsilon$을 하나 잡아 고정한다. 집합
$$
A = \bigl\{\, t \in [a, b] : \text{어떤 양의 실수 } \delta \text{가 있어, } x, w \in [a, b],\ x \le t,\ w \le t,\ |x - w| < \delta \text{이면 } |f(x) - f(w)| < \varepsilon \,\bigr\}
$$
를 둔다. $t \in A$이고 양의 실수 $\delta$가 이 조건을 만족할 때 "$\delta$가 $t$에서 통한다"고 하자.

*첫째 단계: $s = \sup A$가 있고 $a \le s \le b$이다.* 구간 (3)에 의해 $a \in [a, b]$이다. $x$, $w \in [a, b]$이고 $x \le a$, $w \le a$이면 $[a, b]$의 정의에서 $a \le x$, $a \le w$이므로 순서 성질 (1)의 (ii)에 의해 $x = w = a$이고, (K5)와 절댓값 (2)에 의해 $|f(x) - f(w)| = |f(a) - f(a)| = 0 < \varepsilon$이다. 따라서 $\delta = 1$이 $a$에서 통하고(순서 성질 (5)의 (ii)) $a \in A$이다. $A$의 원소는 $[a, b]$의 원소이므로 $b$ 이하이고 $b$는 $A$의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $s = \sup A$가 있다. $a \in A$이므로 $a \le s$이고, 상한의 정의에 의해 $s \le b$이다.

*둘째 단계: $s$ 근처의 두 점.* 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. $f$는 $s$에서 연속이므로 양의 실수 $\delta_1$이 있어, $x \in [a, b]$이고 $|x - s| < \delta_1$이면 $|f(x) - f(s)| < \varepsilon/2$이다. 이제 $x$, $w \in [a, b]$이고 $|x - s| < \delta_1$, $|w - s| < \delta_1$이라 하자. 삼각부등식 (4)와 절댓값 (3)에 의해
$$
|f(x) - f(w)| \le |f(x) - f(s)| + |f(s) - f(w)| = |f(x) - f(s)| + |f(w) - f(s)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다(순서 성질 (2)의 (iv)와 (1)의 (v)). 이것을 (ㄱ)이라 하자.

*셋째 단계: $s - \delta_1/2 < t \le s$인 $t \in A$.* 순서 성질 (8)에 의해 $0 < \delta_1/2 < \delta_1$이다. 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $s - \delta_1/2 < s$이므로, 상한 (4)에 의해 $s - \delta_1/2 < t$인 $A$의 원소 $t$가 있다. $s$는 $A$의 상계이므로 $t \le s$이다. $t \in A$이므로 $t$에서 통하는 양의 실수 $\delta_t$가 있다.

*넷째 단계: $t' = \min\{s + \delta_1/2, b\}$는 $A$의 원소이다.* 순서 성질 (2)의 (ii)로 $0 < \delta_1/2$에 $s$를 더하면 $s < s + \delta_1/2$이다. 절댓값 (10)에 의해 $t' \le s + \delta_1/2$, $t' \le b$이고 $t'$은 $s + \delta_1/2$이거나 $b$이다. $t' = b$이면 $a < b$에서, $t' = s + \delta_1/2$이면 $a \le s < s + \delta_1/2$에서 $a \le t'$이다(순서 성질 (1)의 (v)). 따라서 $t' \in [a, b]$이다.

$\delta' = \min\{\delta_t, \delta_1/2\}$로 두면 $\delta'$은 양수이고 $\delta' \le \delta_t$, $\delta' \le \delta_1/2$이다. $\delta'$이 $t'$에서 통함을 보인다. $x$, $w \in [a, b]$이고 $x \le t'$, $w \le t'$, $|x - w| < \delta'$이라 하자. 순서 성질 (1)의 (iii)에 의해 "$x \le t$이고 $w \le t$"이거나, $t < x$이거나, $t < w$이다.

- $x \le t$이고 $w \le t$인 경우. $|x - w| < \delta' \le \delta_t$이므로 $|x - w| < \delta_t$이고, $\delta_t$가 $t$에서 통하므로 $|f(x) - f(w)| < \varepsilon$이다.
- $t < x$인 경우. $s - \delta_1/2 < t < x$이므로 (W2)에 의해 $s - \delta_1/2 < x$이고, $x \le t' \le s + \delta_1/2$이므로 순서 성질 (1)의 (v)에 의해 $x \le s + \delta_1/2$이다. 절댓값 (8)의 둘째 문장에 의해 $|x - s| \le \delta_1/2$이고, $\delta_1/2 < \delta_1$이므로 $|x - s| < \delta_1$이다. 또 $|w - x| = |x - w| < \delta' \le \delta_1/2$이므로(절댓값 (3)) 삼각부등식 (4)에 의해
  $$
  |w - s| \le |w - x| + |x - s| < \frac{\delta_1}{2} + \frac{\delta_1}{2} = \delta_1
  $$
  이다(순서 성질 (2)의 (iv)와 (1)의 (v)). $x$, $w$ 모두 $s$와의 거리가 $\delta_1$ 미만이므로 (ㄱ)에 의해 $|f(x) - f(w)| < \varepsilon$이다.
- $t < w$인 경우. 위 경우에서 $x$와 $w$의 자리를 바꾸어 같은 계산을 한다. $s - \delta_1/2 < t < w$이므로 $s - \delta_1/2 < w$이고, $w \le t' \le s + \delta_1/2$이므로 $w \le s + \delta_1/2$이다. 절댓값 (8)의 둘째 문장에 의해 $|w - s| \le \delta_1/2 < \delta_1$이다. 또 $|x - w| < \delta' \le \delta_1/2$이므로 삼각부등식 (4)에 의해 $|x - s| \le |x - w| + |w - s| < \delta_1/2 + \delta_1/2 = \delta_1$이다. (ㄱ)에 의해 $|f(x) - f(w)| < \varepsilon$이다.

어느 경우든 $|f(x) - f(w)| < \varepsilon$이므로 $\delta'$이 $t'$에서 통하고 $t' \in A$이다.

*다섯째 단계: $b \in A$이다.* $s$는 $A$의 상계이고 $t' \in A$이므로 $t' \le s$이다. $t' = s + \delta_1/2$라면 $s < t'$이 되어 $t' \le s$와 함께 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $t' = b$이고, $b = t' \le s \le b$에서 순서 성질 (1)의 (ii)에 의해 $s = b$이며, $b = t' \in A$이다.

$b$에서 통하는 양의 실수 $\delta$가 있다. $[a, b]$의 모든 원소는 $b$ 이하이므로, $x$, $w \in [a, b]$이고 $|x - w| < \delta$이면 $|f(x) - f(w)| < \varepsilon$이다. $\varepsilon$은 임의의 양의 실수였으므로 [[uniform-continuity|고른 연속]]의 정의에 의해 $f$는 고르게 연속이다.

**2의 증명.** 연속 (5)에 의해 제한 $f|_{[a, b]}$는 연속함수 $[a, b] \to \mathbb{R}$이고, (1)에 의해 고르게 연속이다. [[real-valued-function]]의 (6)에 의해 $x \in [a, b]$에서 $(f|_{[a, b]})(x) = f(x)$이므로 마지막 문장의 꼴로 쓸 수 있다. $\blacksquare$
:::

## 예시와 반례

:::counterexample[오른쪽 끝이 빠진 구간 위의 $1/(1 - x)$: 깨질 수 있다]
$h(x) = (1 - x)^{-1}$로 정한 $h : [0, 1) \to \mathbb{R}$를 봅니다. 값이 $1$인 상수함수에서 항등함수를 뺀 $g(x) = 1 - x$는 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이고, $x < 1$이면 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < 1 - x$이어서 $g$는 $[0, 1)$의 어디서도 $0$이 아니므로, 같은 (3)에 의해 $h = 1/g$는 연속함수입니다. 그러나 $h$는 고르게 연속이 아닙니다. [[uniform-continuity|고른 연속]]의 (1)의 꼴을 $\varepsilon = 1$로 보입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

양의 실수 $\delta$를 아무것이나 잡고 $t = \min\{\delta, 2^{-1}\}$, $x = 1 - t$, $w = 1 - t/2$로 둡니다. [[absolute-value|절댓값]]의 (10)에 의해 $0 < t \le \delta$이고 $t \le 2^{-1}$입니다. 순서 성질 (8)에 의해 $0 < t/2 < t \le 2^{-1} < 1$이므로 순서 성질 (3)의 (i), (iii)과 (2)의 (ii)에 의해 $0 < x < w < 1$, 곧 $x$, $w \in [0, 1)$입니다. $w - x = t/2$이므로 $|x - w| = t/2 < t \le \delta$입니다(절댓값 (1), (3)). 한편 $1 - x = t$, $1 - w = t/2$이므로 $h(w) - h(x) = 2t^{-1} - t^{-1} = t^{-1}$입니다((K12)의 (vi), (K8)의 (iii)). $t = 2^{-1}$이면 $t^{-1} = 2$이고, $t < 2^{-1}$이면 순서 성질 (6)의 (ii)에 의해 $2 < t^{-1}$이므로 $|h(x) - h(w)| = t^{-1} \ge 2 > 1$입니다. 어떤 $\delta$에 대해서도 거리가 $\delta$ 미만인데 함숫값의 거리가 $1$ 이상인 두 점이 있으므로 $h$는 고르게 연속이 아닙니다. 두 점은 $\delta$가 작을수록 정의역에 없는 오른쪽 끝 $1$로 다가갑니다.
:::

## 확인 질문

:::check[$[0, 2]$ 위의 $f(x) = x^2$에 대하여 $\varepsilon = 1$에 맞는 $\delta$를 하나 구하라.]
$\delta = 4^{-1}$이면 됩니다. $x$, $w \in [0, 2]$이면 ([[power-of-a-real-number]]의 (1)의 $x^2 = xx$와 (K1)–(K3), (K12)로) $x^2 - w^2 = (x + w)(x - w)$이고, $0 \le x + w \le 4$이므로 [[absolute-value|절댓값]]의 (1), (4)와 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $|x^2 - w^2| = (x + w)\,|x - w| \le 4\,|x - w|$입니다. $|x - w| < 4^{-1}$이면 같은 항목의 (4)의 (i)에 의해 $4\,|x - w| < 4 \cdot 4^{-1} = 1$입니다. 이 정리는 그런 $\delta$가 있다는 것만 말하고 값을 주지는 않으므로, 구체적인 $\delta$는 이렇게 식을 보고 찾습니다.
:::

:::check[$(0, 1)$ 위의 연속함수 $f$가 어떤 연속함수 $g : [0, 1] \to \mathbb{R}$의 제한이면 $f$는 고르게 연속인가?]
그렇습니다. (1)에 의해 $g$는 고르게 연속이고, [[uniform-continuity|고른 연속]]의 (3)에 의해 그 제한 $f = g|_{(0, 1)}$도 고르게 연속입니다. 그러므로 $(0, 1)$ 위의 연속함수이면서 고르게 연속이 아닌 함수는 $[0, 1]$ 위의 어떤 연속함수의 제한도 아닙니다.
:::
