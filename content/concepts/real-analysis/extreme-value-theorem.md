---
title: 최대·최소 정리
title_en: Extreme Value Theorem
aliases: [최대최소 정리, 최대·최소값 정리, 최댓값, 최솟값, 절대 최댓값, 절대 최솟값, extreme value theorem, min-max theorem, absolute maximum, absolute minimum]
kind: theorem
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: 함수가 c 에서 최댓값을 갖는다는 것은 모든 x 에서 f(x) ≤ f(c) 라는 뜻이다. a < b 일 때 닫힌구간 [a, b] 위의 연속함수는 최댓값과 최솟값을 갖고, 최댓값은 sup f([a, b]), 최솟값은 inf f([a, b]) 이다.
requires: [subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, bounded-function, continuous-on-closed-interval-is-bounded]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.3.1절, 절대 최대·최소의 정의와 Theorem 3.3.2 와 그 증명 (p.130–131), Example 3.3.3 (p.131), Example 3.3.4–3.3.6 (p.132)
    checked: original
    note: "최댓값·최솟값을 갖는다는 정의는 출처 p.130 의 absolute maximum, absolute minimum 의 정의(번호 없음)와 같다. 출처는 그 값 f(c) 를 absolute maximum 이라 부른다. 이 항목은 '최댓값'이라 부르고, 그것이 집합 f(S) 의 최댓값(upper-bound-and-supremum 의 뜻)과 같다는 것을 (1)로 증명했다. (1)은 출처에 진술로 없다(검색한 범위). (2)는 출처의 Theorem 3.3.2(p.130)와 같다. 출처는 수열과 볼차노–바이어슈트라스 정리로 증명한다. 이 항목은 상한과 함수 1/(M − f) 로 증명한다. 출처는 1.4절(p.41)에서 구간 기호 [a, b] 를 a < b 일 때 정의하고, 3.3절에서는 [a, b] 를 '닫힌 유계 구간'이라 부른다. 진술의 a < b 는 그 정의와 같다. (2)의 '최댓값은 sup f([a, b]), 최솟값은 inf f([a, b])'는 출처가 증명의 끝(p.131)에서 얻는 등식을 진술로 올린 것이다. (3)은 출처에 없다(검색한 범위). 출처는 Theorem 3.3.8 뒤 문단(p.133)에서 사잇값 정리를 큰 집합 위의 함수에 제한해 쓴다고 적는다. 예시 '정의역에 따라 최댓값을 갖는 점이 바뀐다'는 출처의 Example 3.3.3(p.131; [−1, 2] 위의 x² + 1 은 2 에서 최댓값을 갖지만 [−10, 10] 위에서는 10 과 −10 두 점에서 갖는다)과 같은 발상이고 함수와 구간은 새로 골랐다. 반례 '열린구간 위의 항등함수'는 출처 Example 3.3.4(p.132; ℝ 위의 x)의 함수를 (0, 1) 로 제한한 것이고, 끝점이 빠져 값이 다가가는 수가 값으로 나타나지 않는다는 점은 Example 3.3.5(p.132; (0, 1) 위의 1/x 가 최솟값도 최댓값도 갖지 않고 1 에 다가가지만 1 이 되지 않는다)와 같은 발상이다. 반례 '닫힌구간 위의 불연속함수'는 출처의 Example 3.3.6(p.132)과 같은 발상이고, 출처의 연습문제 3.3.2(p.136)는 최솟값도 최댓값도 갖지 않는 유계인 불연속함수 [0, 1] → ℝ 를 찾으라고 한다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 출처의 수열 증명 대신 가산 선택 없이 상한 논법으로 증명. 단원 글의 출처 설명, 출처 메모, 직관 문구를 고침"
added: 2026-11-17
---

:::statement
실함수와 그 연산, 제한은 [[real-valued-function]]의 것이고, 상 $f(S)$는 [[image-and-preimage]]의 것이며, 집합의 상한, 하한, 최댓값 $\max E$, 최솟값 $\min E$는 [[upper-bound-and-supremum]]의 것이고, 구간은 [[interval]]의 것이며, 연속은 [[continuous-function]]의 것이다.

**최댓값과 최솟값.** $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자. $f$가 $c$에서 **최댓값**(absolute maximum)을 갖는다는 것은 정확히 모든 $x \in S$에서 $f(x) \le f(c)$일 때이고, $f$가 $c$에서 **최솟값**(absolute minimum)을 갖는다는 것은 정확히 모든 $x \in S$에서 $f(c) \le f(x)$일 때이다. 이때 $f(c)$를 각각 $f$의 최댓값, 최솟값이라 한다. $f$가 $S$의 어떤 원소에서 최댓값을 가지면 "$f$가 최댓값을 갖는다"고 하고, 최솟값도 같은 방식으로 말한다.

다음이 성립한다.

1. (집합의 최댓값과의 관계) $f$가 $c$에서 최댓값을 갖는 것은 정확히 $f(c)$가 집합 $f(S)$의 최댓값일 때이고, 이때 $f(c) = \max f(S) = \sup f(S)$이다. $f$가 $c$에서 최솟값을 갖는 것은 정확히 $f(c)$가 $f(S)$의 최솟값일 때이고, 이때 $f(c) = \min f(S) = \inf f(S)$이다. 따라서 $f$가 $c$와 $c'$ 두 점에서 최댓값을 가지면 $f(c) = f(c')$이고, 최솟값도 그렇다.
2. (**최대·최소 정리**) $a < b$인 실수 $a$, $b$에 대하여 $f : [a, b] \to \mathbb{R}$가 연속함수이면, $f$가 최댓값을 갖는 점 $c \in [a, b]$와 최솟값을 갖는 점 $d \in [a, b]$가 있다. 곧 모든 $x \in [a, b]$에서
   $$
   f(d) \le f(x) \le f(c)
   $$
   이고, $f(c) = \max f([a, b]) = \sup f([a, b])$, $f(d) = \min f([a, b]) = \inf f([a, b])$이다.
3. (더 큰 정의역) $S$가 $\mathbb{R}$의 부분집합이고 $a < b$, $[a, b] \subseteq S$이며 $f : S \to \mathbb{R}$가 $[a, b]$에서 연속이면, 모든 $x \in [a, b]$에서 $f(d) \le f(x) \le f(c)$인 $c$, $d \in [a, b]$가 있다.
:::

:::english
Real-valued functions, their operations and restrictions are those of the entry on real-valued functions; the image $f(S)$ is that of the entry on images and preimages; the supremum, infimum, maximum $\max E$ and minimum $\min E$ of a set are those of the entry on upper bounds and suprema; intervals are those of the entry on intervals; and continuity is that of the entry on continuous functions.

**Maximum and minimum.** Let $S$ be a subset of $\mathbb{R}$, $f : S \to \mathbb{R}$ a real-valued function on $S$, and $c$ an element of $S$. The function $f$ **achieves an absolute maximum** at $c$ exactly when $f(x) \le f(c)$ for all $x \in S$, and $f$ **achieves an absolute minimum** at $c$ exactly when $f(c) \le f(x)$ for all $x \in S$. In these cases $f(c)$ is called the absolute maximum, respectively the absolute minimum, of $f$. If $f$ achieves an absolute maximum at some element of $S$, we say that "$f$ achieves an absolute maximum", and similarly for the minimum.

The following hold.

1. (Relation to the maximum of a set) $f$ achieves an absolute maximum at $c$ exactly when $f(c)$ is the maximum of the set $f(S)$, and then $f(c) = \max f(S) = \sup f(S)$. $f$ achieves an absolute minimum at $c$ exactly when $f(c)$ is the minimum of $f(S)$, and then $f(c) = \min f(S) = \inf f(S)$. Hence if $f$ achieves an absolute maximum at two points $c$ and $c'$, then $f(c) = f(c')$, and likewise for the minimum.
2. (**Extreme value theorem**) Let $a$, $b$ be real numbers with $a < b$. If $f : [a, b] \to \mathbb{R}$ is a continuous function, then there are a point $c \in [a, b]$ at which $f$ achieves an absolute maximum and a point $d \in [a, b]$ at which $f$ achieves an absolute minimum. That is, for all $x \in [a, b]$,
   $$
   f(d) \le f(x) \le f(c),
   $$
   and $f(c) = \max f([a, b]) = \sup f([a, b])$, $f(d) = \min f([a, b]) = \inf f([a, b])$.
3. (A larger domain) If $S$ is a subset of $\mathbb{R}$, $a < b$, $[a, b] \subseteq S$, and $f : S \to \mathbb{R}$ is continuous on $[a, b]$, then there are $c$, $d \in [a, b]$ such that $f(d) \le f(x) \le f(c)$ for all $x \in [a, b]$.
:::

## 직관

[[continuous-on-closed-interval-is-bounded|앞의 보조정리]]는 닫힌구간 위의 연속함수가 유계라는 것, 곧 값들의 상한 $M$이 있다는 것까지 말했습니다. 이 정리는 그 상한이 실제로 어떤 점의 값이라는 것입니다. 산길을 따라 $a$에서 $b$까지 걷는다고 해 봅시다. 고도에 천장이 있다는 것(유계)과 길 위에 가장 높은 지점이 실제로 있다는 것(최댓값)은 다른 말입니다. 길이 끊기지 않고(연속) 양 끝이 길에 포함되어 있으면(닫힌구간) 가장 높은 지점이 있다는 것이 이 정리입니다. 비유가 맞는 곳은 "천장이 있다"와 "가장 높은 지점이 있다"를 구별하는 부분이고, 맞지 않는 곳은 실제 산길에서는 가장 높은 지점이 있다는 것을 당연하게 여기지만 여기서는 바로 그것이 증명할 내용이라는 점입니다.

증명은 귀류법입니다. 상한 $M$이 어떤 점의 값도 아니라면 모든 점에서 $M - f(x)$가 양수이므로 $1/(M - f)$가 $[a, b]$ 전체에서 정의된 연속함수가 됩니다. 앞의 보조정리를 이 함수에 다시 쓰면 $M - f(x)$가 어떤 양수 이상이 되어, $M$보다 작은 상계가 생깁니다. 이것은 $M$이 가장 작은 상계라는 데 어긋납니다. 닫힌구간이라는 가정은 앞의 보조정리를 두 번(그 $f$와 $1/(M - f)$에) 쓰는 데서 쓰이고, 연속이라는 가정은 $1/(M - f)$가 연속이라는 데서도 쓰입니다.

## 증명

:::idea
$M = \sup f([a, b])$가 값으로 나타나지 않는다면 $h = 1/(M - f)$가 $[a, b]$ 위의 연속함수이고, 앞의 보조정리로 유계이다. 그 상계 $B$에서 $M - B^{-1}$이 $f([a, b])$의 상계가 되어 모순이다. 최솟값은 $-f$의 최댓값으로 얻는다.
:::

:::hint
(1)은 [[bounded-function]]의 (1)로 "$f(c)$가 $f(S)$의 상계"를 "모든 $x$에서 $f(x) \le f(c)$"로 바꾸어 읽는다.
:::

:::hint
(2)에서 $M - f(x) > 0$이 모든 $x$에서 성립하면, $h(x) = (M - f(x))^{-1} \le B$에서 $M - f(x) \ge B^{-1}$을 얻는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)의 (ii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "상한 (2)"는 [[upper-bound-and-supremum]]의 번호, "실함수 (5)"는 [[real-valued-function]]의 번호, "연속 (4)"는 [[continuous-function]]의 번호, "연산 (3)"은 [[continuity-of-sum-and-product|연속함수의 연산]]의 번호, "유계 (1)"은 [[bounded-function]]의 번호, "보조정리 (1)"은 [[continuous-on-closed-interval-is-bounded|닫힌구간 위의 연속함수의 유계성]]의 번호이다.

**1의 증명.** $c \in S$이므로 [[image-and-preimage]]의 (1)에 의해 $f(c) \in f(S)$이다. 상한과 최댓값의 정의에 의해 $f(c)$가 $f(S)$의 최댓값인 것은 정확히 $f(c) \in f(S)$이고 $f(c)$가 $f(S)$의 상계일 때이며, 앞의 조건은 늘 성립하므로 정확히 $f(c)$가 $f(S)$의 상계일 때이다. 유계 (1)에 의해 이것은 정확히 모든 $x \in S$에서 $f(x) \le f(c)$일 때, 곧 $f$가 $c$에서 최댓값을 가질 때이다. 이때 상한 (1)의 기호로 $f(c) = \max f(S)$이고, 상한 (2)에 의해 $\max f(S) = \sup f(S)$이다.

최솟값도 같은 순서로 쓴다. $f(c)$가 $f(S)$의 최솟값인 것은 정확히 $f(c)$가 $f(S)$의 하계일 때이고, 유계 (1)에 의해 이것은 정확히 모든 $x \in S$에서 $f(c) \le f(x)$일 때, 곧 $f$가 $c$에서 최솟값을 가질 때이다. 이때 $f(c) = \min f(S)$이고 상한 (2)에 의해 $\min f(S) = \inf f(S)$이다.

$f$가 $c$와 $c'$에서 최댓값을 가지면 방금 보인 것에 의해 $f(c)$와 $f(c')$이 모두 $f(S)$의 최댓값이고, 상한 (1)의 유일성에 의해 $f(c) = f(c')$이다. 최솟값도 상한 (1)의 최솟값의 유일성에 의해 같다.

**2의 증명.** $f : [a, b] \to \mathbb{R}$가 연속함수라 하자. 보조정리 (1)에 의해 $M = \sup f([a, b])$가 있고 모든 $x \in [a, b]$에서 $f(x) \le M$이다.

*최댓값.* $f(c) = M$인 $c \in [a, b]$가 있음을 귀류법으로 보인다. 그런 $c$가 없다고 하자. 그러면 모든 $x \in [a, b]$에서 $f(x) \ne M$이고 $f(x) \le M$이므로 $f(x) < M$이다. $[a, b]$ 위의 값이 $M$인 상수함수를 $u$로 두고 $g = u - f$로 두면, 실함수 (4)에 의해 모든 $x \in [a, b]$에서 $g(x) = M - f(x)$이고 순서 성질 (3)의 (i)에 의해 $0 < g(x)$이다. 순서 성질 (1)의 (i)에 의해 모든 $x$에서 $g(x) \ne 0$이므로, 실함수 (5)에 의해 $h = 1/g$는 $[a, b]$ 전체에서 정의된 실함수이고 $h(x) = g(x)^{-1}$이다.

$u$는 연속 (4)에 의해, $f$는 가정에 의해 연속함수이므로 연산 (3)에 의해 $g = u - f$는 연속함수이고, 같은 (3)에 의해 $h = 1/g : [a, b] \to \mathbb{R}$도 연속함수이다(여기서 $Z = \{x \in [a, b] : g(x) \ne 0\} = [a, b]$). 보조정리 (1)에 의해 모든 $x \in [a, b]$에서 $|h(x)| \le B$인 실수 $B$가 있다.

$x \in [a, b]$를 하나 잡는다. 순서 성질 (6)의 (i)에 의해 $0 < g(x)^{-1} = h(x)$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $h(x) = |h(x)| \le B$이다. 특히 $x = a$에서 $0 < h(a) \le B$이므로 순서 성질 (1)의 (v)에 의해 $0 < B$이다. 이제 $0 < h(x) \le B$에서 $B^{-1} \le g(x)$를 얻는다. $h(x) = B$이면 $B^{-1} = h(x)^{-1}$이고, $h(x) < B$이면 순서 성질 (6)의 (ii)에 의해 $B^{-1} < h(x)^{-1}$이다. 또 $g(x)\,g(x)^{-1} = 1$이므로 (K1)과 (K8)의 (iii)에 의해 $h(x)^{-1} = (g(x)^{-1})^{-1} = g(x)$이다. 따라서 $B^{-1} \le g(x) = M - f(x)$이다. 순서 성질 (3)의 (i)에 의해 $0 \le (M - f(x)) - B^{-1}$이고, (K1), (K2), (K12)의 (iv)에 의해 $(M - f(x)) - B^{-1} = (M - B^{-1}) - f(x)$이므로 다시 순서 성질 (3)의 (i)에 의해 $f(x) \le M - B^{-1}$이다.

$x$는 $[a, b]$의 임의의 원소였으므로 유계 (1)에 의해 $M - B^{-1}$은 $f([a, b])$의 상계이다. 그런데 $0 < B$이므로 순서 성질 (6)의 (i)에 의해 $0 < B^{-1}$이고, 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $M - B^{-1} < M$이다. $M$은 $f([a, b])$의 상한이므로 상계 $M - B^{-1}$에 대하여 $M \le M - B^{-1}$이어야 하는데, 이것은 $M - B^{-1} < M$과 함께 성립할 수 없다(순서 성질 (1)의 (i)). 이 모순으로 $f(c) = M$인 $c \in [a, b]$가 있다. 모든 $x \in [a, b]$에서 $f(x) \le M = f(c)$이므로 $f$는 $c$에서 최댓값을 갖고, (1)에 의해 $f(c) = \max f([a, b]) = \sup f([a, b])$이다.

*최솟값.* $k = (-1)f$로 두면 연산 (3)에 의해 $k$는 연속함수이고, 실함수 (4)와 (K9)에 의해 모든 $x \in [a, b]$에서 $k(x) = (-1)f(x) = -f(x)$이다. 위의 *최댓값* 부분을 연속함수 $k$에 쓰면 $k$가 최댓값을 갖는 점 $d \in [a, b]$가 있다. 곧 모든 $x \in [a, b]$에서 $-f(x) \le -f(d)$이고, 순서 성질 (3)의 (iii)에 의해 $f(d) \le f(x)$이다. 따라서 $f$는 $d$에서 최솟값을 갖고, (1)에 의해 $f(d) = \min f([a, b]) = \inf f([a, b])$이다.

두 결과를 합치면 모든 $x \in [a, b]$에서 $f(d) \le f(x) \le f(c)$이다.

**3의 증명.** 연속 (5)에 의해 제한 $f|_{[a, b]}$는 연속함수 $[a, b] \to \mathbb{R}$이다. (2)에 의해 모든 $x \in [a, b]$에서 $f|_{[a, b]}(d) \le f|_{[a, b]}(x) \le f|_{[a, b]}(c)$인 $c$, $d \in [a, b]$가 있고, 실함수 (6)에 의해 $[a, b]$의 점에서 $f|_{[a, b]}$의 값은 $f$의 값과 같으므로 $f(d) \le f(x) \le f(c)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[정의역에 따라 최댓값을 갖는 점이 바뀐다]
$x$에서의 값이 $x\,x - 2x$인 함수를 두 정의역에서 봅니다. 모든 실수 $x$에서 (K1)–(K3), (K12)로 전개하면
$$
x\,x - 2x = (x - 1)(x - 1) - 1
$$
입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

먼저 정의역이 $[0, 3]$일 때, 곧 $f(x) = x\,x - 2x$로 정한 $f : [0, 3] \to \mathbb{R}$([[real-valued-function]]의 (1))입니다. 순서 성질 (5)의 (iii)에 의해 $0 \le (x - 1)(x - 1)$이므로 순서 성질 (2)의 (i)로 $1$을 빼면 $-1 \le f(x)$이고, $f(1) = 1 - 2 = -1$입니다. 따라서 $f$는 $1$에서 최솟값 $-1$을 갖습니다. $x \in [0, 3]$이면 순서 성질 (2)의 (i)로 $1$을 빼서 $-1 \le x - 1 \le 2$이고, $-2 < -1$이므로 $-2 \le x - 1 \le 2$이어서 [[absolute-value|절댓값]]의 (7)에 의해 $|x - 1| \le 2$이고, 절댓값 (5), (2)와 순서 성질 (7)의 (ii)에 의해 $(x - 1)(x - 1) = |x - 1|\,|x - 1| \le 2 \cdot 2 = 4$이므로 순서 성질 (2)의 (i)에 의해 $f(x) \le 4 - 1 = 3$입니다. $f(3) = 9 - 6 = 3$이므로 $f$는 $3$에서 최댓값 $3$을 갖습니다.

다음으로 정의역이 $[0, 2]$일 때, 곧 같은 식으로 정한 함수 $f_2 : [0, 2] \to \mathbb{R}$입니다. $x \in [0, 2]$이면 $-1 \le x - 1 \le 1$이므로 같은 이유로 $(x - 1)(x - 1) \le 1$이고 $f_2(x) \le 0$입니다. $f_2(0) = 0$이고 $f_2(2) = 4 - 4 = 0$이므로 $f_2$는 $0$과 $2$ 두 점에서 최댓값 $0$을 갖습니다. (1)에 의해 최댓값 $0$은 하나로 정해지지만, 그것을 갖는 점은 둘입니다. 최댓값을 갖는 점은 하나가 아닐 수 있습니다.
:::

:::counterexample[열린구간 위의 항등함수: 닫힌구간이 아니면 깨질 수 있다]
$(0, 1)$ 위의 항등함수 $p(x) = x$는 [[continuous-function]]의 (4)에 의해 연속함수이고, $x \in (0, 1)$이면 $-1 < 0 < x < 1$이므로 [[absolute-value|절댓값]]의 (7)에 의해 $|p(x)| \le 1$이어서 유계입니다. 그러나 최댓값도 최솟값도 갖지 않습니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$p$가 어떤 $c \in (0, 1)$에서 최댓값을 갖는다고 합시다. 순서 성질 (8)에 의해 $c < \dfrac{c + 1}{2} < 1$이고 $0 < c$이므로 $\dfrac{c + 1}{2} \in (0, 1)$이며, 이 점에서 $p\bigl(\tfrac{c + 1}{2}\bigr) = \dfrac{c + 1}{2} > c = p(c)$입니다. 이것은 최댓값의 정의에 어긋납니다(순서 성질 (1)의 (i)). $p$가 $c \in (0, 1)$에서 최솟값을 갖는다고 하면, 순서 성질 (8)에 의해 $0 < \dfrac{c}{2} < c$이므로 $\dfrac{c}{2} \in (0, 1)$이고 $p\bigl(\tfrac{c}{2}\bigr) < p(c)$이어서 역시 어긋납니다. 정의역의 끝점 $0$과 $1$이 빠져 있어서, 값이 다가가는 $0$과 $1$이 값으로 나타나지 않습니다.
:::

:::counterexample[닫힌구간 위의 불연속함수: 연속이 아니면 깨질 수 있다]
$[0, 1]$ 위에서 $x < 1$이면 $f(x) = x$, $x = 1$이면 $f(1) = 0$으로 정한 함수 $f : [0, 1] \to \mathbb{R}$를 봅니다. $[0, 1]$의 각 원소는 $x < 1$과 $x = 1$ 가운데 정확히 한 경우에 들므로([[order-properties-of-reals]]의 (1)의 (i), (iii)) [[real-valued-function]]의 (1)에 의해 $f$는 실함수입니다. 모든 값이 $0$ 이상 $1$ 미만이므로 $f$는 유계입니다.

$f$는 최댓값을 갖지 않습니다. $f$가 $c \in [0, 1]$에서 최댓값을 갖는다고 합시다. [[order-properties-of-reals]]의 (8)에 의해 $0 < 2^{-1} < 1$이므로 $f(2^{-1}) = 2^{-1}$이고, 최댓값의 정의에 의해 $2^{-1} \le f(c)$이므로 $0 < f(c)$이어야 하고, $f(1) = 0$이므로 $c \ne 1$, 곧 $c < 1$입니다. 그러면 위 반례와 같이 [[order-properties-of-reals]]의 (8)에 의해 $c < \dfrac{c + 1}{2} < 1$이고, $\dfrac{c + 1}{2} \in [0, 1)$에서 $f\bigl(\tfrac{c + 1}{2}\bigr) = \dfrac{c + 1}{2} > c = f(c)$이어서 최댓값의 정의에 어긋납니다. 따라서 $f$는 최댓값을 갖지 않고, (2)의 대우에 의해 연속함수가 아닙니다. 정의역이 닫힌구간이고 함수가 유계여도 연속이 아니면 결론이 깨질 수 있습니다. (이 $f$는 $0$에서 최솟값 $0$을 갖습니다. 모든 값이 $0$ 이상이고 $f(0) = 0$이기 때문입니다.)
:::

## 확인 질문

:::check[$[-1, 1]$ 위에서 $x$에서의 값이 $|x|$인 함수는 어느 점에서 최댓값과 최솟값을 갖는가?]
최댓값 $1$을 $-1$과 $1$ 두 점에서, 최솟값 $0$을 $0$ 한 점에서 갖습니다. $x \in [-1, 1]$이면 $-1 \le x \le 1$이므로 [[absolute-value|절댓값]]의 (7)에 의해 $|x| \le 1$이고, 절댓값 (1), (3)에 의해 $|1| = |-1| = 1$이므로 $-1$과 $1$에서 최댓값을 갖습니다. 다른 점에서는 갖지 않습니다. $|x| = 1$이면 절댓값의 정의에 의해 $0 \le x$일 때 $x = 1$이고 $x < 0$일 때 $-x = 1$, 곧 $x = -1$이기 때문입니다. 또 절댓값 (2)에 의해 $0 \le |x|$이고 $|0| = 0$이므로 $0$에서 최솟값을 갖습니다. $d$에서 최솟값을 가지면 $|d| \le |0| = 0 \le |d|$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $|d| = 0$이고, 절댓값 (2)에 의해 $d = 0$입니다.
:::

:::check[$f : [a, b] \to \mathbb{R}$가 연속이고 상수함수가 아니면, (2)의 $c$와 $d$는 서로 다른가?]
그렇습니다. $c = d$라면 모든 $x \in [a, b]$에서 $f(c) = f(d) \le f(x) \le f(c)$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $f(x) = f(c)$이고, $f$는 값이 $f(c)$인 상수함수가 됩니다([[real-valued-function]]의 (2), (3)). 따라서 상수함수가 아니면 최댓값을 갖는 어떤 점도 최솟값을 갖는 어떤 점과 같지 않습니다.
:::
