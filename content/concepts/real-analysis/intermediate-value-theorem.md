---
title: 사잇값 정리
title_en: Intermediate Value Theorem
aliases: [중간값 정리, 볼차노 정리, 볼차노의 사잇값 정리, 연속함수의 상은 구간, intermediate value theorem, Bolzano's theorem, bisection method, 이분법]
kind: theorem
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: a < b 이고 f 가 닫힌구간 [a, b] 위의 연속함수일 때, y 가 f(a) 와 f(b) 사이에 있으면 f(c) = y 인 c 가 a 와 b 사이에 있다. 그 결과 f([a, b]) 는 최솟값부터 최댓값까지의 닫힌구간이거나 한 점 집합이다.
requires: [set, subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, least-upper-bound-property, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, power-of-a-real-number, power-function-is-continuous, extreme-value-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.3.2절, Lemma 3.3.7 과 그 증명 (p.132–133), Theorem 3.3.8 과 그 증명과 뒤 문단 (p.133), Example 3.3.9 와 뒤 문단 (p.134), Corollary 3.3.13 (p.135)
    checked: original
    note: "(1)은 출처의 Theorem 3.3.8(p.133)과 같다. 출처는 먼저 Lemma 3.3.7(p.132; f(a) < 0 < f(b) 이면 f(c) = 0 인 c ∈ (a, b) 가 있다)을 이분법으로 증명한다. a_1 = a, b_1 = b 에서 시작해 중점에서 f 의 값이 0 이상이면 오른쪽 끝을, 음수이면 왼쪽 끝을 중점으로 바꾸는 두 수열을 귀납적으로 정의하고, 두 수열이 단조이고 유계라 수렴하며 b_n − a_n = 2^{1−n}(b − a) 이므로 극한이 같고, f(a_n) < 0 ≤ f(b_n) 에서 극한을 취해 f(c) = 0 을 얻는다. Theorem 3.3.8 은 g(x) = f(x) − y 또는 y − f(x) 에 보조정리를 쓴다. 이 항목은 이분법을 증명으로 싣지 않고 상한으로 증명하며, 반대 방향은 −f 에 앞의 경우를 쓴다. (2)는 출처에 진술로 없다(검색한 범위). (3)은 출처가 Theorem 3.3.8 뒤 문단(p.133)에서 '연속함수의 제한은 연속이므로 큰 집합 위의 연속함수에 정리를 쓴다'고 적는 것을 진술로 올렸다. (4)는 출처의 Corollary 3.3.13(p.135)과 같고, 출처는 증명을 연습문제 3.3.7(p.136)로 둔다. 이분법이라는 이름은 출처 p.133 에 있다. 예시 '이분법'의 함수 x³ − 2x² + x − 1 과 1, 3/2, 7/4, 15/8 에서의 계산은 출처의 Example 3.3.9(p.134)를 따랐고, 값은 분수로 다시 계산했다(출처는 f(1.5) = −0.625, f(1.75) ≈ −0.016, f(1.875) ≈ 0.44 로 적는다). 출처는 p.134 에서 f(c) = y 인 c 가 여럿일 수 있다고 적지만 예를 들지 않는다. 예시 'c 가 여럿인 경우'의 함수는 새로 골랐다(검색한 범위). 반례 '계단 함수'는 출처의 연습문제 3.3.1(p.136; 사잇값 정리의 결론이 성립하지 않는 불연속함수 [0, 1] → ℝ 를 찾으라)의 답이 될 수 있는 것이다. 확인 질문 2 는 출처의 연습문제 3.3.15 a)(p.137; f(c) f(−c) < 0 이면 근이 있다)와 가까운 발상이다. 확인 질문 1 은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 출처의 수열 증명 대신 가산 선택 없이 상한 논법으로 증명. 단원 글의 출처 설명, 출처 메모, 직관 문구를 고침"
added: 2026-11-17
---

:::statement
닫힌구간 $[a, b]$와 열린구간 $(a, b)$는 [[interval]]의 것이고, 실함수와 제한은 [[real-valued-function]]의 것이며, 연속은 [[continuous-function]]의 것이고, 상 $f([a, b])$는 [[image-and-preimage]]의 것이며, 함수의 최댓값과 최솟값은 [[extreme-value-theorem|최대·최소 정리]] 항목의 것이고, 집합의 $\min$, $\max$는 [[upper-bound-and-supremum]]의 것이다. $a < b$인 실수 $a$, $b$와 연속함수 $f : [a, b] \to \mathbb{R}$, 실수 $y$에 대하여 다음이 성립한다.

1. (**사잇값 정리**) $f(a) < y < f(b)$이거나 $f(b) < y < f(a)$이면, $f(c) = y$인 $c \in (a, b)$가 있다. 곧 $a < c < b$이고 $f(c) = y$인 실수 $c$가 있다.
2. (닫힌 꼴) $f(a) \le y \le f(b)$이거나 $f(b) \le y \le f(a)$이면, $f(c) = y$인 $c \in [a, b]$가 있다.
3. (더 큰 정의역) $S$가 $\mathbb{R}$의 부분집합이고 $[a, b] \subseteq S$이며 $g : S \to \mathbb{R}$가 $[a, b]$에서 연속이면, (1)과 (2)는 $f$ 자리에 $g$를 넣어도 성립한다.
4. (상) [[extreme-value-theorem|최대·최소 정리]]에 의해 $m = \min f([a, b])$와 $M = \max f([a, b])$가 있다. $m < M$이면 $f([a, b]) = [m, M]$이고, $m = M$이면 $f([a, b]) = \{m\}$이다. 따라서 $f([a, b])$는 닫힌구간이거나 원소가 하나인 집합이다.
:::

:::english
The closed interval $[a, b]$ and the open interval $(a, b)$ are those of the entry on intervals; real-valued functions and restrictions are those of the entry on real-valued functions; continuity is that of the entry on continuous functions; the image $f([a, b])$ is that of the entry on images and preimages; the absolute maximum and minimum of a function are those of the entry on the extreme value theorem, and $\min$, $\max$ of a set are those of the entry on upper bounds and suprema. For real numbers $a$, $b$ with $a < b$, a continuous function $f : [a, b] \to \mathbb{R}$, and a real number $y$, the following hold.

1. (**Intermediate value theorem**) If $f(a) < y < f(b)$ or $f(b) < y < f(a)$, then there is a $c \in (a, b)$ with $f(c) = y$; that is, there is a real number $c$ with $a < c < b$ and $f(c) = y$.
2. (Closed form) If $f(a) \le y \le f(b)$ or $f(b) \le y \le f(a)$, then there is a $c \in [a, b]$ with $f(c) = y$.
3. (A larger domain) If $S$ is a subset of $\mathbb{R}$ with $[a, b] \subseteq S$ and $g : S \to \mathbb{R}$ is continuous on $[a, b]$, then (1) and (2) hold with $g$ in place of $f$.
4. (The image) By the extreme value theorem, $m = \min f([a, b])$ and $M = \max f([a, b])$ exist. If $m < M$, then $f([a, b]) = [m, M]$; if $m = M$, then $f([a, b]) = \{m\}$. Hence $f([a, b])$ is a closed interval or a set with exactly one element.
:::

## 직관

해수면보다 낮은 골짜기에서 출발해 해수면보다 높은 언덕 꼭대기까지 끊기지 않는 길로 걸어가면, 어딘가에서 꼭 해수면 높이를 지납니다. 고도가 길을 따라 연속으로 변하고 출발점과 도착점이 해수면의 양쪽에 있다는 것이 이 정리의 두 가정에 해당하고, "해수면 높이를 지나는 지점"이 $c$입니다. 비유가 맞지 않는 곳은 실제 길에서는 "지난다"는 것을 당연하게 여기지만, 수학에서는 그것이 증명할 내용이고 증명에 [[least-upper-bound-property|최소상계 성질]]이 쓰인다는 점입니다.

이 항목의 증명은 상한으로 합니다. $f(a) < y < f(b)$일 때 "$f(x) < y$인 점들"의 상한 $c$를 잡습니다. $f(c) < y$라면 연속이므로 $c$ 조금 오른쪽에도 $f(x) < y$인 점이 있어 $c$가 상계라는 데 어긋나고, $f(c) > y$라면 $c$ 조금 왼쪽의 점들이 모두 $f(x) > y$여서 $c$보다 작은 상계가 생겨 어긋납니다. 남는 것은 $f(c) = y$입니다.

다른 방법으로 **이분법**(bisection method)이 있습니다. $f(a) < y < f(b)$일 때 구간의 가운데 점에서 $f$의 값을 보고, 그 값이 $y$보다 작으면 오른쪽 절반을, 아니면 왼쪽 절반을 남깁니다. 남은 구간의 왼쪽 끝에서는 값이 $y$보다 작고 오른쪽 끝에서는 $y$ 이상이라는 성질이 유지되고, 구간의 길이는 매번 반으로 줄어듭니다. 이 과정을 끝없이 되풀이해 두 끝이 모이는 점을 찾으면 그 점이 $f(c) = y$인 $c$입니다. 출처는 이 방법으로 증명하는데, 이 항목은 그것을 증명으로 싣지 않고 아래 예시에서 몇 단계를 계산해 보입니다. 이분법은 $c$가 있는 곳을 원하는 만큼 좁혀 주는 계산 방법이기도 합니다.

## 증명

:::idea
$f(a) < y < f(b)$이면 $E = \{x \in [a, b] : f(x) < y\}$의 상한 $c$를 잡고, [[continuous-function]]의 (7)로 $f(c) < y$와 $f(c) > y$를 각각 배제한다. 반대 방향 $f(b) < y < f(a)$는 $-f$에 이 경우를 쓴다.
:::

:::hint
$f(c) < y$이면 $c < b$이고, $c$보다 조금 큰 $[a, b]$의 점에서도 $f(x) < y$이다. 그 점은 $E$의 원소인데 $c$보다 크다.
:::

:::hint
$f(c) > y$이면 $c$와의 거리가 $\delta$ 미만인 점에서 모두 $f(x) > y$이다. 그러면 $E$의 원소는 모두 $c - \delta$ 이하이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, 상계와 상한은 [[upper-bound-and-supremum]]의 것이고, "구간 (3)"은 [[interval]]의 번호, "실함수 (4)"는 [[real-valued-function]]의 번호, "연속 (7)"은 [[continuous-function]]의 번호, "연산 (3)"은 [[continuity-of-sum-and-product|연속함수의 연산]]의 번호, "최대·최소 (2)"는 [[extreme-value-theorem|최대·최소 정리]]의 번호이다. 연속 (7)의 진술에 쓰인 글자 $a$, $b$는 그 진술 안의 실수이고 이 항목의 구간의 끝점과 다르다. 아래에서는 그 자리에 $y$를 넣어 인용한다.

**1의 증명.**

*경우 A: $f(a) < y < f(b)$.* 집합
$$
E = \{x \in [a, b] : f(x) < y\}
$$
를 둔다. 구간 (3)에 의해 $a \in [a, b]$이고 $f(a) < y$이므로 $a \in E$이고, $E$는 공집합이 아니다. $E$의 원소는 $[a, b]$의 원소이므로 $b$ 이하이고, $b$는 $E$의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $c = \sup E$가 있다. $a \in E$이므로 $a \le c$이고, 상한의 정의에 의해 $c \le b$이다. 따라서 $c \in [a, b]$이다. (W1)에 의해 $f(c) < y$, $f(c) = y$, $y < f(c)$ 가운데 정확히 하나가 성립한다. 앞의 것과 뒤의 것이 성립하지 않음을 보인다.

$f(c) < y$라 하자. 연속 (7)의 둘째 문장에 의해 양의 실수 $\delta$가 있어, $x \in [a, b]$이고 $|x - c| < \delta$인 모든 $x$에서 $f(x) < y$이다. $c = b$라면 $f(c) = f(b)$이고 $y < f(b)$이므로 $f(c) < y$와 함께 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $c \ne b$이고, $c \le b$이므로 $c < b$이다. 순서 성질 (3)의 (i)에 의해 $0 < b - c$이다. $\eta = \min\{\delta, b - c\}$로 두면 절댓값 (10)에 의해 $\eta$는 $\delta$이거나 $b - c$이므로 $0 < \eta$이고, $\eta \le \delta$, $\eta \le b - c$이다. $x_1 = c + \eta/2$로 둔다. 순서 성질 (8)에 의해 $0 < \eta/2 < \eta$이므로, 순서 성질 (2)의 (ii)로 $c$를 더하면 $c < x_1 < c + \eta$이다((K1), (K4)). 순서 성질 (2)의 (i)로 $\eta \le b - c$의 양변에 $c$를 더하면 $c + \eta \le c + (b - c) = b$이므로 $x_1 < b$이다(순서 성질 (1)의 (v)). $a \le c < x_1 < b$이므로 $x_1 \in [a, b]$이다. 또 $x_1 - c = \eta/2$이고 $0 < \eta/2$이므로 절댓값 (1)에 의해 $|x_1 - c| = \eta/2 < \eta \le \delta$이다. 따라서 $f(x_1) < y$이고 $x_1 \in E$이다. 그런데 $c$는 $E$의 상계이므로 $x_1 \le c$이어야 하고, 이것은 $c < x_1$과 함께 성립할 수 없다. 따라서 $f(c) < y$가 아니다.

$y < f(c)$라 하자. 연속 (7)의 첫 문장에 의해 양의 실수 $\delta$가 있어, $x \in [a, b]$이고 $|x - c| < \delta$인 모든 $x$에서 $y < f(x)$이다. $c - \delta$가 $E$의 상계임을 보인다. $x \in E$를 잡고 $c - \delta < x$라 하자. $c$는 $E$의 상계이므로 $x \le c$이고, 순서 성질 (2)의 (ii)로 $0 < \delta$에 $c$를 더하면 $c < c + \delta$이므로 $x < c + \delta$이다. $c - \delta < x < c + \delta$이므로 절댓값 (8)에 의해 $|x - c| < \delta$이고, $x \in [a, b]$이므로 $y < f(x)$이다. 이것은 $x \in E$에서 나오는 $f(x) < y$와 함께 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $c - \delta < x$는 성립하지 않고, 순서 성질 (1)의 (iii)에 의해 $x \le c - \delta$이다. $x$는 $E$의 임의의 원소였으므로 $c - \delta$는 $E$의 상계이고, 상한의 정의에 의해 $c \le c - \delta$이다. 그런데 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $c - \delta < c$이므로, 이것은 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $y < f(c)$가 아니다.

남은 것은 $f(c) = y$이다. $f(a) < y = f(c)$이므로 순서 성질 (1)의 (i)에 의해 $f(a) \ne f(c)$이고 $a \ne c$이다. $f(c) = y < f(b)$이므로 같은 이유로 $c \ne b$이다. $a \le c$, $c \le b$이고 $c$는 $a$와도 $b$와도 같지 않으므로 $a < c < b$, 곧 $c \in (a, b)$이다.

*경우 B: $f(b) < y < f(a)$.* $k = (-1)f$로 두면 연산 (3)에 의해 $k$는 연속함수 $[a, b] \to \mathbb{R}$이고, 실함수 (4)와 (K9)에 의해 모든 $x \in [a, b]$에서 $k(x) = (-1)f(x) = -f(x)$이다. 순서 성질 (3)의 (iii)을 $f(b) < y$와 $y < f(a)$에 쓰면 $-y < -f(b)$이고 $-f(a) < -y$이므로 $k(a) < -y < k(b)$이다. 경우 A를 연속함수 $k$와 실수 $-y$에 쓰면 $k(c) = -y$인 $c \in (a, b)$가 있다. 곧 $-f(c) = -y$이고, (K9)의 $-(-t) = t$에 의해 $f(c) = -(-f(c)) = -(-y) = y$이다.

**2의 증명.** $f(a) \le y \le f(b)$인 경우를 본다. $y = f(a)$이면 $c = a$가, $y = f(b)$이면 $c = b$가 $[a, b]$의 원소이고(구간 (3)) $f(c) = y$이다. $y \ne f(a)$이고 $y \ne f(b)$이면, $\le$의 정의([[real-order-axioms]])에 의해 $f(a) \le y$와 $f(a) \ne y$에서 $f(a) < y$이고, 같은 방식으로 $y < f(b)$이다. (1)에 의해 $f(c) = y$인 $c \in (a, b)$가 있고, 구간 (3)에 의해 $(a, b) \subseteq [a, b]$이므로 $c \in [a, b]$이다.

$f(b) \le y \le f(a)$인 경우도 같은 순서로 쓴다. $y = f(b)$이면 $c = b$가, $y = f(a)$이면 $c = a$가 $f(c) = y$를 만족한다. $y \ne f(b)$이고 $y \ne f(a)$이면 $f(b) < y < f(a)$이고, (1)에 의해 $f(c) = y$인 $c \in (a, b) \subseteq [a, b]$가 있다.

**3의 증명.** 연속 (5)에 의해 제한 $g|_{[a, b]}$는 연속함수 $[a, b] \to \mathbb{R}$이고, 실함수 (6)에 의해 $[a, b]$의 모든 점에서 $g|_{[a, b]}$의 값은 $g$의 값과 같다. 특히 $g|_{[a, b]}(a) = g(a)$, $g|_{[a, b]}(b) = g(b)$이므로 (1)과 (2)의 가정은 $g$에 대해서나 $g|_{[a, b]}$에 대해서나 같다. (1)과 (2)를 $g|_{[a, b]}$에 쓰면 $g|_{[a, b]}(c) = y$인 $c$가 각각 $(a, b)$, $[a, b]$에 있고, $c \in [a, b]$이므로 $g(c) = g|_{[a, b]}(c) = y$이다.

**4의 증명.** 최대·최소 (2)에 의해 $f$가 최댓값을 갖는 점 $c \in [a, b]$와 최솟값을 갖는 점 $d \in [a, b]$가 있고, $M = f(c) = \max f([a, b])$, $m = f(d) = \min f([a, b])$이며, 모든 $x \in [a, b]$에서 $m \le f(x) \le M$이다. [[image-and-preimage]]의 (1)에 의해 실수 $z$가 $f([a, b])$의 원소인 것은 정확히 $z = f(x)$인 $x \in [a, b]$가 있을 때이다.

$m = M$이라 하자. $z \in f([a, b])$이면 $z = f(x)$인 $x \in [a, b]$가 있고 $m \le z \le M = m$이므로 순서 성질 (1)의 (ii)에 의해 $z = m$이다. 거꾸로 $m = f(d)$이고 $d \in [a, b]$이므로 $m \in f([a, b])$이다. 두 집합 $f([a, b])$와 $\{m\}$의 원소가 일치하므로 [[set]]의 같음에 의해 $f([a, b]) = \{m\}$이다.

$m < M$이라 하자. $z \in f([a, b])$이면 $z = f(x)$인 $x \in [a, b]$가 있고 $m \le z \le M$이므로 $z \in [m, M]$이다. 거꾸로 $z \in [m, M]$, 곧 $m \le z \le M$이라 하자. $c = d$라면 $m = f(d) = f(c) = M$이 되어 $m < M$과 함께 성립할 수 없으므로(순서 성질 (1)의 (i)) $c \ne d$이고, 순서 성질 (1)의 (iii)과 (i)에 의해 $d < c$이거나 $c < d$이다. 구간 (1)에 의해 $[a, b]$는 구간이고 $f$는 $[a, b]$ 위의 연속함수이다.

- $d < c$이면 구간 (4)에 의해 $[d, c] \subseteq [a, b]$이다. $f(d) = m \le z \le M = f(c)$이므로 (3)을 $S = [a, b]$, 구간 $[d, c]$, 함수 $f$에 쓰면 (2)의 첫 경우에 의해 $f(x) = z$인 $x \in [d, c]$가 있다.
- $c < d$이면 구간 (4)에 의해 $[c, d] \subseteq [a, b]$이다. 구간 $[c, d]$의 왼쪽 끝의 값은 $f(c) = M$, 오른쪽 끝의 값은 $f(d) = m$이고 $m \le z \le M$이므로, (3)과 (2)의 둘째 경우에 의해 $f(x) = z$인 $x \in [c, d]$가 있다.

어느 경우든 $x \in [a, b]$이고 $f(x) = z$이므로 $z \in f([a, b])$이다. 두 집합의 원소가 일치하므로 $f([a, b]) = [m, M]$이다.

마지막 문장을 보인다. $a \in [a, b]$에서 $m \le f(a) \le M$이므로 순서 성질 (1)의 (v)에 의해 $m \le M$이고, 따라서 $m < M$이거나 $m = M$이다. $m < M$이면 구간 (1)에 의해 $[m, M]$은 닫힌구간이다. $\blacksquare$
:::

## 예시와 반례

:::example[이분법으로 근의 자리를 좁히기]
$h(x) = x^3 - 2x^2 + x - 1$로 정한 $h : \mathbb{R} \to \mathbb{R}$를 봅니다. [[power-function-is-continuous]]의 (1)의 $p_3$, $p_2$, $p_1$과 값이 $1$인 상수함수 $u$로 $h = \bigl((p_3 + (-2)\,p_2) + p_1\bigr) - u$이고(모든 실수 $x$에서 두 함수의 값이 같으므로 [[real-valued-function]]의 (2)), [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $h$는 연속함수입니다. 그래서 $h$는 모든 닫힌구간에서 연속이고 (3)을 쓸 수 있습니다.

$h(1) = 1 - 2 + 1 - 1 = -1$이고 $h(2) = 8 - 8 + 2 - 1 = 1$이므로 $h(1) < 0 < h(2)$입니다. (3)과 (1)에 의해 $h(c) = 0$인 $c$가 $1 < c < 2$에 있습니다. 이제 구간을 반씩 줄여 봅니다. 분수의 계산은 [[real-number-arithmetic]]의 법칙으로 합니다.

- 가운데 점 $\tfrac{3}{2}$에서 $h\bigl(\tfrac{3}{2}\bigr) = \tfrac{27}{8} - \tfrac{36}{8} + \tfrac{12}{8} - \tfrac{8}{8} = -\tfrac{5}{8} < 0$입니다. $h\bigl(\tfrac{3}{2}\bigr) < 0 < h(2)$이므로 (3)과 (1)을 구간 $\bigl[\tfrac{3}{2}, 2\bigr]$에 쓰면 근이 $\tfrac{3}{2}$와 $2$ 사이에 있습니다.
- 가운데 점 $\tfrac{7}{4}$에서 $h\bigl(\tfrac{7}{4}\bigr) = \tfrac{343}{64} - \tfrac{392}{64} + \tfrac{112}{64} - \tfrac{64}{64} = -\tfrac{1}{64} < 0$이므로 근이 $\tfrac{7}{4}$와 $2$ 사이에 있습니다.
- 가운데 점 $\tfrac{15}{8}$에서 $h\bigl(\tfrac{15}{8}\bigr) = \tfrac{3375}{512} - \tfrac{3600}{512} + \tfrac{960}{512} - \tfrac{512}{512} = \tfrac{223}{512} > 0$이므로, $h\bigl(\tfrac{7}{4}\bigr) < 0 < h\bigl(\tfrac{15}{8}\bigr)$에서 근이 $\tfrac{7}{4}$와 $\tfrac{15}{8}$ 사이에 있습니다.

세 단계 만에 근이 있는 구간의 길이가 $1$에서 $\tfrac{1}{8}$로 줄었습니다. 이 계산은 근이 그 구간에 적어도 하나 있다는 것만 말하고, 근이 그 구간에 하나뿐인지는 말하지 않습니다.
:::

:::example[$c$가 여럿인 경우]
$q(x) = x^3 - x$로 정한 $q : \mathbb{R} \to \mathbb{R}$는 위 예시와 같은 이유로 연속함수입니다($q = p_3 - p_1$). $[-2, 2]$에서 $q(-2) = -8 + 2 = -6$이고 $q(2) = 8 - 2 = 6$이므로 $q(-2) < 0 < q(2)$이고, (3)과 (1)에 의해 $q(c) = 0$인 $c \in (-2, 2)$가 있습니다. 실제로 $q(-1) = -1 + 1 = 0$, $q(0) = 0$, $q(1) = 1 - 1 = 0$이므로 $-1$, $0$, $1$이 모두 그런 $c$입니다. 정리는 $c$가 적어도 하나 있다는 것만 말하며, $c$는 하나가 아닐 수 있습니다.
:::

:::counterexample[계단 함수: 연속이 아니면 깨질 수 있다]
$[0, 1]$ 위에서 $x < \tfrac{1}{2}$이면 $f(x) = 0$, $\tfrac{1}{2} \le x$이면 $f(x) = 1$로 정한 함수 $f : [0, 1] \to \mathbb{R}$를 봅니다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 각 $x$는 두 경우 가운데 정확히 한 경우에 들므로 [[real-valued-function]]의 (1)에 의해 $f$는 실함수입니다. $f(0) = 0 < \tfrac{1}{2} < 1 = f(1)$이지만, $f$의 값은 $0$ 아니면 $1$이고 둘 다 $\tfrac{1}{2}$과 다르므로 $f(c) = \tfrac{1}{2}$인 $c$는 없습니다. 따라서 (1)의 대우에 의해 $f$는 연속함수가 아닙니다. 값이 한 번에 건너뛰면 그 사이의 값을 지나지 않을 수 있습니다.
:::

## 확인 질문

:::check[$y$가 $f(a)$와 $f(b)$ 사이에 있지 않으면 $f(c) = y$인 $c \in [a, b]$는 없는가?]
그렇다고 할 수 없습니다. (1)과 (2)는 $c$가 있기 위한 충분조건만 말합니다. 예컨대 $[-1, 2]$ 위에서 값이 $x\,x$인 함수 $f$는 $f(-1) = 1$, $f(2) = 4$이고 $y = \tfrac{1}{4}$은 $1$과 $4$ 사이에 있지 않지만, $c = \tfrac{1}{2} \in [-1, 2]$에서 $f(c) = \tfrac{1}{4}$입니다.
:::

:::check[$a < b$이고 $f : [a, b] \to \mathbb{R}$가 연속이며 모든 $x \in [a, b]$에서 $f(x) \ne 0$이면, $f$의 값은 모두 양수이거나 모두 음수인가?]
그렇습니다. $f(p) < 0 < f(q)$인 $p$, $q \in [a, b]$가 있다고 해 봅시다. $f(p) \ne f(q)$이므로 $p \ne q$입니다. [[interval]]의 (1), (4)에 의해 $p$와 $q$ 가운데 작은 쪽부터 큰 쪽까지의 닫힌구간은 $[a, b]$에 포함되고, $f$는 그 구간에서 연속이므로 (3)과 (1)에 의해(왼쪽 끝이 $p$이면 첫 경우, $q$이면 둘째 경우) $f(c) = 0$인 $c$가 그 구간에 있습니다. 이것은 가정에 어긋나므로 그런 $p$, $q$는 없습니다. 각 $f(x)$는 $0$이 아니므로 (W1)에 의해 양수이거나 음수인데, 양수인 값과 음수인 값이 함께 있을 수 없으므로 값은 모두 양수이거나 모두 음수입니다.
:::
