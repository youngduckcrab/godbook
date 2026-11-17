---
title: 닫힌구간 위의 연속함수는 유계이다
title_en: A Continuous Function on a Closed Interval Is Bounded
aliases: [연속함수의 유계성, 닫힌 구간 위의 연속함수는 유계, boundedness of continuous functions on closed intervals]
kind: lemma
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: a < b 일 때 닫힌구간 [a, b] 위의 연속함수는 유계이다. 그래서 그 상은 상한과 하한을 갖는다. 증명은 수열을 쓰지 않고 상한으로 한다.
requires: [subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, least-upper-bound-property, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, bounded-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.3.1절, Lemma 3.3.1 과 그 증명 (p.130)
    checked: original
    note: "진술 (1)은 출처의 Lemma 3.3.1(p.130)과 같다. 출처는 수열과 볼차노–바이어슈트라스 정리로 증명한다. 이 항목은 상한으로 증명한다. 출처는 [a, b] 를 '닫힌 유계 구간'이라 부르며 a < b 를 따로 적지 않는다. 이 항목은 interval 항목의 약속대로 a < b 를 둔다. (1)의 마지막 문장(상한과 하한)과 (2)(더 큰 정의역 위의 함수)는 출처의 Lemma 3.3.1 에 없다. 출처는 Theorem 3.3.2 의 증명 첫 문장(p.131)에서 이 보조정리로 f([a, b]) 가 상한과 하한을 갖는다고 적고, Theorem 3.3.8 뒤 문단(p.133)에서 연속함수의 제한이 연속이라는 것을 들어 큰 집합 위의 함수에 정리를 쓴다고 적는다. 반례 '반열린구간'의 함수는 새로 만들었다. 출처의 Example 3.3.5(p.132)는 열린구간 (0, 1) 위의 1/x 가 0 가까이에서 유계가 아니라고 적으며, 반례는 그것과 같은 발상(끝점 하나가 빠진 구간에서 값이 커진다)이다. 반례 '한 점에서 불연속'은 출처의 Example 3.3.6(p.132; [0, 1] 위에서 x > 0 이면 1/x, 0 에서 0 인 함수가 최댓값을 갖지 않는다)과 같은 발상이다. 확인 질문은 출처에 없다(검색한 범위). 출처의 연습문제 3.3.13(p.137)은 ℤ 위로 제한해 유계인 연속함수 ℝ → ℝ 가 유계인지를 묻는다."
status: source-checked
added: 2026-11-17
---

:::statement
구간과 닫힌구간 $[a, b]$는 [[interval]]의 것이고, 실함수와 제한은 [[real-valued-function]]의 것이며, 연속은 [[continuous-function]]의 것이고, 유계인 함수는 [[bounded-function]]의 것이다. $a < b$인 실수 $a$, $b$에 대하여 다음이 성립한다.

1. $f : [a, b] \to \mathbb{R}$가 연속함수이면 $f$는 유계이다. 곧 모든 $x \in [a, b]$에서 $|f(x)| \le B$인 실수 $B$가 있다. 따라서 $\sup f([a, b])$와 $\inf f([a, b])$가 있고, 모든 $x \in [a, b]$에서 $\inf f([a, b]) \le f(x) \le \sup f([a, b])$이다.
2. $S$가 $\mathbb{R}$의 부분집합이고 $[a, b] \subseteq S$이며 $f : S \to \mathbb{R}$가 $[a, b]$에서 연속이면, 모든 $x \in [a, b]$에서 $|f(x)| \le B$인 실수 $B$가 있다.
:::

:::english
Intervals and the closed interval $[a, b]$ are those of the entry on intervals; real-valued functions and restrictions are those of the entry on real-valued functions; continuity is that of the entry on continuous functions; and bounded functions are those of the entry on bounded functions. For real numbers $a$, $b$ with $a < b$, the following hold.

1. If $f : [a, b] \to \mathbb{R}$ is a continuous function, then $f$ is bounded; that is, there is a real number $B$ such that $|f(x)| \le B$ for all $x \in [a, b]$. Consequently $\sup f([a, b])$ and $\inf f([a, b])$ exist, and $\inf f([a, b]) \le f(x) \le \sup f([a, b])$ for all $x \in [a, b]$.
2. If $S$ is a subset of $\mathbb{R}$ with $[a, b] \subseteq S$ and $f : S \to \mathbb{R}$ is continuous on $[a, b]$, then there is a real number $B$ such that $|f(x)| \le B$ for all $x \in [a, b]$.
:::

## 직관

연속함수는 한 점에서 값이 정해지면 그 점 가까이에서도 값이 크게 벗어나지 않습니다([[continuous-function]]의 (8)). 그래서 한 점마다 "그 근처에서는 유계"입니다. 문제는 이 국소적인 정보를 구간 전체로 넓히는 일입니다.

왼쪽 끝 $a$에서 출발해 오른쪽으로 걸어간다고 생각해 봅시다. "$a$부터 $t$까지는 어떤 $B$로 누를 수 있다"는 $t$들을 모으면, 이 집합은 $a$를 포함하고 $b$를 넘지 않으므로 상한 $s$가 있습니다. $s$에서의 연속이 $s$의 양쪽 근방을 누르게 해 주므로, $s$보다 조금 왼쪽까지 누른 것과 이어 붙이면 $s$보다 조금 오른쪽까지 누를 수 있습니다. $s$가 상한이므로 그 "오른쪽"이 있을 자리가 없고, 그러면 $s$가 $b$에 닿아 있어야 합니다. 비유가 맞는 곳은 "걸어간 끝 $s$에서 한 걸음 더 갈 수 있다"는 부분이고, 맞지 않는 곳은 실제 걸음은 유한 번이지만 이 논증은 걸음을 세지 않고 상한 하나로 한 번에 끝낸다는 점입니다.

닫힌구간이라는 가정은 두 군데에서 쓰입니다. 오른쪽 끝 $b$가 정의역에 있어서 마지막에 "$b$까지 누른다"가 곧 "정의역 전체를 누른다"가 되고, $s \le b$이므로 $s$가 정의역의 점이어서 $s$에서의 연속을 쓸 수 있습니다. 아래 첫째 반례는 끝점이 하나 빠지면 결론이 깨질 수 있음을 보입니다.

## 증명

:::idea
"$x \le t$인 $[a, b]$의 모든 점에서 $|f(x)| \le B$인 $B$가 있다"는 $t$들의 집합 $A$의 상한 $s$를 잡는다. $s$에서의 연속으로 $s$의 근방을 누르면, $s$ 조금 왼쪽의 $A$의 원소에서 $s$ 조금 오른쪽까지 누를 수 있어 $s = b$이고 $b \in A$이다.
:::

:::hint
$a$는 $A$의 원소이고 $b$는 $A$의 상계이다. $s = \sup A$에서 [[continuous-function]]의 (8)로 $\delta$를 얻고, 상한의 성질로 $s - \delta < t \le s$인 $t \in A$를 얻는다.
:::

:::hint
$t' = \min\{s + \delta/2, b\}$가 $A$의 원소임을 보인다. $x \le t$인 점과 $t < x \le t'$인 점을 나누어 누른다. 그러면 $t' \le s$이므로 $t'$은 $s + \delta/2$일 수 없다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (8)"은 [[absolute-value]]의 번호, "상한 (4)"는 [[upper-bound-and-supremum]]의 번호, "구간 (3)"은 [[interval]]의 번호, "연속 (8)"은 [[continuous-function]]의 번호, "유계 (3)"은 [[bounded-function]]의 번호이다.

**1의 증명.** $f : [a, b] \to \mathbb{R}$가 연속함수라 하자. 집합
$$
A = \bigl\{\, t \in [a, b] : \text{어떤 실수 } B \text{가 있어, } x \in [a, b] \text{이고 } x \le t \text{인 모든 } x \text{에서 } |f(x)| \le B \,\bigr\}
$$
를 둔다. $t \in A$이고 $B$가 이 조건을 만족할 때 "$B$가 $t$에서 쓰인다"고 하자.

*첫째 단계: $s = \sup A$가 있고 $a \le s \le b$이다.* 구간 (3)에 의해 $a \in [a, b]$이다. $x \in [a, b]$이고 $x \le a$이면, $[a, b]$의 정의에서 $a \le x$이므로 순서 성질 (1)의 (ii)에 의해 $x = a$이고, 순서 성질 (1)의 (iv)에 의해 $|f(x)| = |f(a)| \le |f(a)|$이다. 따라서 $B = |f(a)|$가 $a$에서 쓰이고 $a \in A$이다. 특히 $A$는 공집합이 아니다. $A$의 원소는 $[a, b]$의 원소이므로 $b$ 이하이고, $b$는 $A$의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $s = \sup A$가 있다. $s$는 $A$의 상계이고 $a \in A$이므로 $a \le s$이고, $b$는 $A$의 상계이므로 상한의 정의에 의해 $s \le b$이다. 따라서 $s \in [a, b]$이다.

*둘째 단계: $s$ 근방의 상계.* $f$는 $s$에서 연속이므로 연속 (8)에 의해 양의 실수 $\delta$가 있어, $x \in [a, b]$이고 $|x - s| < \delta$인 모든 $x$에서 $|f(x)| < |f(s)| + 1$이다.

*셋째 단계: $s - \delta < t \le s$인 $t \in A$.* $0 < \delta$이므로 순서 성질 (3)의 (ii)에 의해 $-\delta < 0$이고, 순서 성질 (2)의 (ii)로 양변에 $s$를 더하면 $s - \delta < s$이다((K1), (K4)). 상한 (4)에 의해 $s - \delta$는 $A$의 상계가 아니므로 $s - \delta < t$인 $A$의 원소 $t$가 있다. $s$는 $A$의 상계이므로 $t \le s$이다. $t \in A$이므로 $t$에서 쓰이는 실수 $B_t$가 있다.

*넷째 단계: $t' = \min\{s + \delta/2, b\}$는 $A$의 원소이다.* 순서 성질 (8)에 의해 $0 < \delta/2 < \delta$이고, 순서 성질 (2)의 (ii)로 $s$를 더하면 $s < s + \delta/2 < s + \delta$이다((K1), (K4)). 절댓값 (10)에 의해 $t' \le s + \delta/2$, $t' \le b$이고 $t'$은 $s + \delta/2$이거나 $b$이다.

- $t' \in [a, b]$이다. $t' \le b$이다. $t' = b$이면 $a < b$에서 $a \le t'$이다. $t' = s + \delta/2$이면 $a \le s < s + \delta/2$와 순서 성질 (1)의 (v)에 의해 $a \le t'$이다.
- $B' = \max\{B_t, |f(s)| + 1\}$로 두면 $B'$이 $t'$에서 쓰인다. $x \in [a, b]$이고 $x \le t'$이라 하자. 순서 성질 (1)의 (iii)에 의해 $x \le t$이거나 $t < x$이다.
  - $x \le t$이면 $B_t$가 $t$에서 쓰이므로 $|f(x)| \le B_t$이고, 절댓값 (10)에 의해 $B_t \le B'$이므로 순서 성질 (1)의 (v)에 의해 $|f(x)| \le B'$이다.
  - $t < x$이면 $s - \delta < t < x$이므로 (W2)에 의해 $s - \delta < x$이다. 또 $x \le t' \le s + \delta/2 < s + \delta$이므로 순서 성질 (1)의 (v)에 의해 $x < s + \delta$이다. 절댓값 (8)에 의해 $|x - s| < \delta$이고, 둘째 단계에 의해 $|f(x)| < |f(s)| + 1$이다. 절댓값 (10)에 의해 $|f(s)| + 1 \le B'$이므로 순서 성질 (1)의 (v)에 의해 $|f(x)| < B'$, 따라서 $|f(x)| \le B'$이다.

  따라서 $t' \in A$이다.

*다섯째 단계: $b \in A$이다.* $s$는 $A$의 상계이고 $t' \in A$이므로 $t' \le s$이다. $t' = s + \delta/2$라면 $s < s + \delta/2 = t'$이 되어 $t' \le s$와 함께 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $t' \ne s + \delta/2$이고, $t'$은 $s + \delta/2$이거나 $b$이므로 $t' = b$이다. 그러면 $b = t' \le s \le b$이므로 순서 성질 (1)의 (ii)에 의해 $s = b$이고, $b = t' \in A$이다.

$b \in A$이므로 $b$에서 쓰이는 실수 $B$가 있다. $[a, b]$의 모든 원소 $x$는 $x \le b$이므로 모든 $x \in [a, b]$에서 $|f(x)| \le B$이고, $f$는 유계이다.

마지막 문장을 보인다. 구간 (3)에 의해 $a \in [a, b]$이므로 $[a, b]$는 공집합이 아니다. $f$가 유계이므로 유계 (2)에 의해 $f$는 위로 유계이고 아래로 유계이며, 유계 (3)에 의해 $\sup f([a, b])$와 $\inf f([a, b])$가 있고 모든 $x \in [a, b]$에서 $\inf f([a, b]) \le f(x) \le \sup f([a, b])$이다.

**2의 증명.** 연속 (5)에 의해 제한 $f|_{[a, b]}$는 연속함수 $[a, b] \to \mathbb{R}$이다. (1)에 의해 모든 $x \in [a, b]$에서 $|f|_{[a, b]}(x)| \le B$인 실수 $B$가 있고, [[real-valued-function]]의 (6)에 의해 $x \in [a, b]$에서 $f|_{[a, b]}(x) = f(x)$이므로 $|f(x)| \le B$이다. $\blacksquare$
:::

## 예시와 반례

:::counterexample[반열린구간: 끝점 하나가 빠지면 깨질 수 있다]
$g(x) = 1 - x$로 정한 함수 $g : [0, 1) \to \mathbb{R}$은 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다(값이 $1$인 상수함수에서 항등함수를 뺀 것). $x \in [0, 1)$이면 $x < 1$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < g(x)$이고, 그 항목의 (1)의 (i)에 의해 $g(x) \ne 0$이므로 $Z = \{x \in [0, 1) : g(x) \ne 0\} = [0, 1)$입니다. 그러면 $h = 1/g : [0, 1) \to \mathbb{R}$, 곧 $h(x) = (1 - x)^{-1}$도 연속함수입니다.

그러나 $h$는 유계가 아닙니다. 실수 $B$를 아무것이나 잡고 $N = |B| + 1$로 둡니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다. [[absolute-value|절댓값]]의 (2)의 $0 \le |B|$에 순서 성질 (2)의 (i)로 $1$을 더하면 $1 \le N$이고, $0 < 1$(순서 성질 (5)의 (ii))과 순서 성질 (1)의 (v)에 의해 $0 < N$입니다. $N = 1$이면 $N^{-1} = 1$이고, $1 < N$이면 순서 성질 (6)의 (ii)에 의해 $N^{-1} < 1$이므로 $N^{-1} \le 1$이며, 순서 성질 (6)의 (i)에 의해 $0 < N^{-1}$입니다. $x = 1 - N^{-1}$로 두면 순서 성질 (3)의 (i)에 의해 $0 \le x$이고, $0 < N^{-1}$에서 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $x < 1$이므로 $x \in [0, 1)$입니다. $1 - x = N^{-1}$이므로 (K8)의 (iii)에 의해 $h(x) = (N^{-1})^{-1} = N$이고, 절댓값 (6)에 의해 $B \le |B| < N = h(x)$이며 $|h(x)| = h(x)$(절댓값 (1))입니다. 이 $x$에서 $|h(x)| \le B$가 성립하지 않으므로(순서 성질 (1)의 (i)) 어떤 $B$도 $h$를 누르지 못합니다.

$h$는 $[0, 1)$의 모든 점에서 연속이지만 오른쪽 끝 $1$이 정의역에 없습니다.
:::

:::counterexample[연속이 아니면 깨질 수 있다]
$[-1, 1]$ 위에서 $x \ne 0$이면 $k(x) = x^{-1}$, $x = 0$이면 $k(0) = 0$으로 정한 함수 $k : [-1, 1] \to \mathbb{R}$을 봅니다. $[-1, 1]$의 각 원소는 $x \ne 0$과 $x = 0$ 가운데 정확히 한 경우에 들므로 [[real-valued-function]]의 (1)에 의해 $k$는 실함수입니다.

$k$는 위로 유계가 아닙니다. 실수 $B$에 대하여 위 반례와 같은 $N = |B| + 1$을 잡으면 위 반례에서 본 대로 $0 < N^{-1} \le 1$입니다. [[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0$이므로 $-1 < N^{-1} \le 1$, 곧 $N^{-1} \in [-1, 1]$이고, 그 항목의 (1)의 (i)에 의해 $N^{-1} \ne 0$입니다. (K8)의 (iii)에 의해 $k(N^{-1}) = (N^{-1})^{-1} = N$이고, [[absolute-value|절댓값]]의 (6)에 의해 $B \le |B| < N$이므로 이 점에서 $k(N^{-1}) \le B$는 성립하지 않습니다. 따라서 $k$는 위로 유계가 아니고, [[bounded-function]]의 (2)에 의해 유계도 아닙니다. 이 보조정리의 (1)의 대우에 의해 $k$는 연속함수가 아닙니다. 정의역이 닫힌구간이어도 연속함수가 아니면 결론이 깨질 수 있습니다.
:::

## 확인 질문

:::check[$f : [a, b] \to \mathbb{R}$가 값이 $5$인 상수함수이면 증명의 집합 $A$는 무엇인가?]
$A = [a, b]$입니다. $t \in [a, b]$를 아무것이나 잡으면, $x \in [a, b]$이고 $x \le t$인 모든 $x$에서 $|f(x)| = |5| = 5 \le 5$이므로([[absolute-value|절댓값]]의 (1)과 [[order-properties-of-reals]]의 (10)의 $0 \le 5$, (1)의 (iv)) $B = 5$가 $t$에서 쓰입니다. 정의에 의해 $A \subseteq [a, b]$이므로 $A = [a, b]$입니다. $b$는 $A$의 원소이면서 $A$의 상계이므로 $A$의 최댓값이고, [[upper-bound-and-supremum]]의 (2)에 의해 상한은 $s = b$입니다.
:::

:::check[$[a, b]$ 위의 연속함수 $f$와 $g$에 대하여, $x$에서의 값이 $f(x)\,g(x) + 3 f(x)$인 함수는 유계인가?]
유계입니다. 그 함수는 $fg + 3f$이고([[real-valued-function]]의 (2)로 값을 비교합니다), [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이므로 이 보조정리의 (1)에 의해 유계입니다. [[bounded-function]]의 (5)로 $f$와 $g$가 유계라는 것에서 곧바로 얻을 수도 있습니다.
:::
