---
title: 점과 집합 사이의 거리
title_en: Distance from a Point to a Set
aliases: [점과 집합의 거리, 집합까지의 거리, dist, distance to a set, distance from a point to a set]
kind: definition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간의 공집합이 아닌 부분집합 A 와 점 x 에 대하여 x 에서 A 의 점들까지의 거리의 하한을 dist(x, A) 로 정의한다. 값은 0 이상이고 A 의 점에서는 0 이며, x 를 dist(x, A) 로 보내는 사상은 1-립시츠라 연속이고, dist(x, A) = 0 인 것은 정확히 x 가 A 의 폐포에 들 때이며, 닫힌집합 밖의 점에서는 양수이다.
requires: [set, subset, function, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, upper-bound-and-supremum, infimum-exists, interval, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, topology-examples, closed-set, interior-and-closure, closure-in-a-metric-space, dense-subset, uniformly-continuous-map, lipschitz-map]
sources:
  - ref: fuglede-basic-topology
    loc: "Proofs of lifting lemmas 절의 첫머리 문단, content/homotopy.tex:398–402; 같은 절의 Lemma lebesgue-number-lemma 의 증명, content/homotopy.tex:413–417"
    checked: original
    note: "정의는 출처(398–400)와 같다. 출처도 A 가 공집합이 아닐 때만 d(x, A) = inf{d(x, a) | a ∈ A} 로 정의한다. 이 사이트는 거리 d(x, y) 와 글자가 겹치지 않게 dist(x, A) 로 쓴다. 출처는 A 를 고정하면 x 를 d(x, A) 로 보내는 함수가 연속임을 쉽게 알 수 있다(It is easy to see)고만 적는다(402). 이 항목은 그것을 (3)에서 1-립시츠로 증명했다. 출처는 르베그 수 보조정리의 증명(417)에서 B(x, ε) ⊆ U_i 이면 닫힌집합 C_i = X − U_i 까지의 거리가 ε 이상이라고 증명 없이 쓴다. 이 항목의 (5)는 같은 방향의 사실(닫힌집합 밖의 점에서 거리가 양수)을 진술한다."
  - ref: lebl-basic-analysis
    loc: "7.1.1절 연습문제 7.1.8 (p.262); 7.5.6절 연습문제 7.5.10 c) (p.294)"
    checked: original
    note: "출처 연습문제 7.1.8(p.262)은 공집합이 아니고 유계인 B 에 대하여 d(x, B) := inf{d(x, b) : b ∈ B} 로 정하고 그것으로 하우스도르프 거리를 만든다. 이 항목은 유계를 가정하지 않는다(하한은 0 이 하계라서 늘 있다). 연습문제 7.5.10 c)(p.294)는 두 콤팩트 집합의 점 사이의 거리의 하한 inf{d(x, y) : x ∈ K₁, y ∈ K₂} 가 최솟값임을 묻는다. 이 항목은 두 집합 사이의 거리와 하우스도르프 거리를 다루지 않는다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 출처 메모의 넘겨짚은 해석 3건과 틀린 소절 1건, 경계 경우에서 흐리던 설명 문장 4건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, 최대 거리)는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 거리공간에는 늘 거리위상([[topology-examples]])을 주고, 폐포 $\overline{A}$는 [[interior-and-closure]]의 것이다. 하계와 하한은 [[upper-bound-and-supremum]]의 것이고, 사상, 고른 연속, 립시츠 사상은 [[uniformly-continuous-map|거리공간 사이의 고르게 연속인 사상]]과 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 아래에서 $(X, d)$는 거리공간이고, $A$는 $X$의 공집합이 아닌 부분집합이며, $x$는 $X$의 점이다.

**점과 집합 사이의 거리.** $t = d(x, a)$인 $a \in A$가 있는 실수 $t$ 전체의 집합을 $\{d(x, a) : a \in A\}$로 쓴다. 이 집합은 $A \ne \emptyset$이므로 공집합이 아니고, 거리의 조건 (i)에 의해 $0$이 그 하계이다. 따라서 [[infimum-exists|하한의 존재]]의 (4)에 의해 이 집합은 하한을 갖는다. 그 하한을
$$
\operatorname{dist}(x, A) = \inf\,\{d(x, a) : a \in A\}
$$
로 쓰고 $x$와 $A$ 사이의 **거리**(distance from $x$ to $A$)라 한다. $A = \emptyset$이면 $\operatorname{dist}(x, A)$는 정의하지 않는다.

다음이 성립한다.

1. (아래와 위에서 누르기) 모든 $a \in A$에서 $0 \le \operatorname{dist}(x, A) \le d(x, a)$이다. 특히 $x \in A$이면 $\operatorname{dist}(x, A) = 0$이다. $A = \{a\}$이면 $\operatorname{dist}(x, A) = d(x, a)$이다.
2. (하한에 가까운 점) 실수 $\varepsilon > 0$이면 $d(x, a) < \operatorname{dist}(x, A) + \varepsilon$인 $a \in A$가 있다.
3. ($1$-립시츠) $X$의 모든 점 $x$, $y$에서 $\bigl|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)\bigr| \le d(x, y)$이다. 따라서 $\mathbb{R}$에 보통 거리를 줄 때, $x$를 $\operatorname{dist}(x, A)$로 보내는 사상 $X \to \mathbb{R}$는 $1$-립시츠이고, 고르게 연속이며 연속이다.
4. (거리가 $0$인 점과 폐포) $\operatorname{dist}(x, A) = 0$인 것은 정확히 $x \in \overline{A}$일 때이다.
5. (닫힌집합) $A$가 $(X, d)$에서 닫힌집합이면, $\operatorname{dist}(x, A) = 0$인 것은 정확히 $x \in A$일 때이다. 따라서 $A$가 닫힌집합이고 $x \notin A$이면 $0 < \operatorname{dist}(x, A)$이다.
:::

:::english
Metric spaces and their examples (the standard, discrete and max metrics) are as in the entries on metric spaces, and the open ball $B(x, r)$ is as in the entry on open balls. Metric spaces always carry their metric topology, and the closure $\overline{A}$ is as in the entry on interior and closure. Lower bounds and infima are as in the entry on upper bounds and suprema, and maps, uniform continuity and Lipschitz maps are as in the entries on uniformly continuous maps and Lipschitz maps between metric spaces. Throughout, $(X, d)$ is a metric space, $A$ is a nonempty subset of $X$, and $x$ is a point of $X$.

**Distance from a point to a set.** We write $\{d(x, a) : a \in A\}$ for the set of all real numbers $t$ such that $t = d(x, a)$ for some $a \in A$. This set is nonempty because $A \ne \emptyset$, and $0$ is a lower bound of it by condition (i) of a metric. Hence, by item (4) of the entry on the existence of infima, this set has an infimum. We write it
$$
\operatorname{dist}(x, A) = \inf\,\{d(x, a) : a \in A\}
$$
and call it the **distance from $x$ to $A$**. If $A = \emptyset$, $\operatorname{dist}(x, A)$ is not defined.

The following hold.

1. (Bounds) For every $a \in A$, $0 \le \operatorname{dist}(x, A) \le d(x, a)$. In particular, if $x \in A$ then $\operatorname{dist}(x, A) = 0$. If $A = \{a\}$, then $\operatorname{dist}(x, A) = d(x, a)$.
2. (Points close to the infimum) If $\varepsilon > 0$ is a real number, there is an $a \in A$ with $d(x, a) < \operatorname{dist}(x, A) + \varepsilon$.
3. ($1$-Lipschitz) For all points $x$, $y$ of $X$, $\bigl|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)\bigr| \le d(x, y)$. Hence, giving $\mathbb{R}$ the standard metric, the map $X \to \mathbb{R}$ sending $x$ to $\operatorname{dist}(x, A)$ is $1$-Lipschitz, uniformly continuous and continuous.
4. (Distance zero and closure) $\operatorname{dist}(x, A) = 0$ exactly when $x \in \overline{A}$.
5. (Closed sets) If $A$ is a closed set in $(X, d)$, then $\operatorname{dist}(x, A) = 0$ exactly when $x \in A$. Hence if $A$ is closed and $x \notin A$, then $0 < \operatorname{dist}(x, A)$.
:::

## 직관

$\operatorname{dist}(x, A)$는 $x$에서 $A$의 점까지 잰 거리들 가운데 "가장 짧은 것"에 해당하는 수입니다. 다만 가장 짧은 거리를 주는 점이 꼭 $A$ 안에 있지는 않아서 최솟값 대신 하한으로 정의합니다. 집에서 호수까지의 거리를 떠올려 보세요. 집에서 가장 가까운 곳이 호숫가의 둑 위에 있는데 둑을 호수에 넣지 않으면, 호수 안의 점으로는 그 거리에 얼마든지 가까워질 뿐 그 거리를 주는 점은 호수 안에 없습니다. 비유에서 "호수"가 $A$, "얼마든지 가까워진다"가 (2), "그 거리를 주는 점이 $A$ 밖에 있을 수 있다"가 아래의 반례입니다.

(4)는 이 거리가 $0$이 되는 점을 정확히 말합니다. $A$의 점으로 $x$에 얼마든지 가까이 갈 수 있는 것, 곧 $x$를 중심으로 하는 모든 공이 $A$와 만나는 것이 [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)이 말하는 폐포의 점이기 때문입니다. 그래서 $A$가 닫혀 있으면 $A$ 밖의 점은 $A$에서 양수만큼 떨어져 있습니다((5)).

(3)은 $x$를 움직이면 $A$까지의 거리가 움직인 거리보다 더 많이 바뀌지 않는다는 뜻입니다. $A$가 한 점 $\{p\}$이면 이것은 [[lipschitz-map|립시츠 사상]]의 (6)의 (iii), 곧 한 점까지의 거리가 $1$-립시츠라는 것과 같은 말이 됩니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (ii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "상한 (4)"는 [[upper-bound-and-supremum]]의 번호, "거리의 (1)"은 [[metric-space]]의 번호이다. 점 $y \in X$에 대하여 $D_y = \{d(y, a) : a \in A\}$라 쓴다. 정의에 의해 $\operatorname{dist}(y, A)$는 $D_y$의 하한, 곧 $D_y$의 하계이면서 $D_y$의 모든 하계 이상인 수이다.

**1의 증명.** 거리의 조건 (i)에 의해 $0$은 $D_x$의 하계이므로 하한의 정의에 의해 $0 \le \operatorname{dist}(x, A)$이다. $a \in A$이면 $d(x, a) \in D_x$이고 $\operatorname{dist}(x, A)$는 $D_x$의 하계이므로 $\operatorname{dist}(x, A) \le d(x, a)$이다. $x \in A$이면 이것을 $a = x$에 쓰고 거리의 (1)을 쓰면 $\operatorname{dist}(x, A) \le d(x, x) = 0$이므로, 순서 성질 (1)의 (ii)에 의해 $\operatorname{dist}(x, A) = 0$이다. $A = \{a\}$이면 $t \in D_x$인 것은 정확히 $t = d(x, a)$일 때이므로 $D_x = \{d(x, a)\}$이고, $d(x, a)$는 $D_x$의 원소이면서 하계(순서 성질 (1)의 (iv)의 $d(x, a) \le d(x, a)$)이므로 $D_x$의 최솟값이다. 상한 (2)에 의해 $\operatorname{dist}(x, A) = \min D_x = d(x, a)$이다.

**2의 증명.** $0 < \varepsilon$이므로 순서 성질 (2)의 (ii)에 의해 $\operatorname{dist}(x, A) + 0 < \operatorname{dist}(x, A) + \varepsilon$이고, (K4)에 의해 $\operatorname{dist}(x, A) < \operatorname{dist}(x, A) + \varepsilon$이다. 상한 (4)의 하한판에 의해 $\operatorname{dist}(x, A) + \varepsilon$은 $D_x$의 하계가 아니므로, $t < \operatorname{dist}(x, A) + \varepsilon$인 $t \in D_x$가 있다. $D_x$의 정의에 의해 $t = d(x, a)$인 $a \in A$가 있고, 이 $a$가 구하는 점이다.

**3의 증명.** $x$, $y \in X$라 하자. $a \in A$이면 (1)과 거리의 조건 (iv)에 의해 $\operatorname{dist}(x, A) \le d(x, a) \le d(x, y) + d(y, a)$이고, 순서 성질 (1)의 (v)와 (2)의 (i)(양변에 $-d(x, y)$를 더하고 (K1), (K2), (K5)로 정리)에 의해 $\operatorname{dist}(x, A) - d(x, y) \le d(y, a)$이다. $D_y$의 원소는 모두 어떤 $a \in A$에 대한 $d(y, a)$이므로 $\operatorname{dist}(x, A) - d(x, y)$는 $D_y$의 하계이고, 하한의 정의에 의해 $\operatorname{dist}(x, A) - d(x, y) \le \operatorname{dist}(y, A)$이다. 다시 순서 성질 (2)의 (i)로 정리하면
$$
\operatorname{dist}(x, A) - \operatorname{dist}(y, A) \le d(x, y)
$$
이다. 같은 논증을 $x$와 $y$의 자리를 바꾸어 하면, $a \in A$에서 $\operatorname{dist}(y, A) \le d(y, a) \le d(y, x) + d(x, a)$이므로 $\operatorname{dist}(y, A) - d(y, x)$는 $D_x$의 하계이고 $\operatorname{dist}(y, A) - d(y, x) \le \operatorname{dist}(x, A)$이다. 거리의 조건 (iii)의 $d(y, x) = d(x, y)$를 쓰고 정리하면 $\operatorname{dist}(y, A) - \operatorname{dist}(x, A) \le d(x, y)$이고, 순서 성질 (3)의 (iii)과 (K9), (K12)의 (iv)에 의해 $-d(x, y) \le \operatorname{dist}(x, A) - \operatorname{dist}(y, A)$이다. 두 부등식과 [[absolute-value]]의 (7)에 의해 $\bigl|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)\bigr| \le d(x, y)$이다.

뒤 문장. 각 $x \in X$에서 $\operatorname{dist}(x, A)$는 실수 하나로 정해지므로 [[recursion-theorem]]의 (1)에 의해 $x$를 $\operatorname{dist}(x, A)$로 보내는 함수 $X \to \mathbb{R}$가 있다. $\mathbb{R}$의 보통 거리에서 두 값의 거리는 $\bigl|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)\bigr|$이므로([[metric-space-examples]]의 (1)) 앞 문장과 (K1), (K4), 순서 성질 (5)의 (ii)의 $0 \le 1$에 의해 이 사상은 $1$-립시츠이다. [[lipschitz-map|립시츠 사상]]의 (3)에 의해 고르게 연속이고 연속이다.

**4의 증명.** $\operatorname{dist}(x, A) = 0$이라 하고 실수 $r > 0$을 잡는다. (2)를 $\varepsilon = r$로 쓰면 $d(x, a) < 0 + r = r$인 $a \in A$가 있고, [[open-ball]]의 정의에 의해 $a \in B(x, r) \cap A$이다. 곧 모든 $r > 0$에서 $B(x, r) \cap A \ne \emptyset$이므로 [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)에 의해 $x \in \overline{A}$이다.

거꾸로 $x \in \overline{A}$라 하자. $0 < \operatorname{dist}(x, A)$라 해 보고 $r = \operatorname{dist}(x, A)$로 두면, [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)에 의해 $B(x, r) \cap A$의 원소 $a$가 있고 $d(x, a) < r = \operatorname{dist}(x, A)$이다. 한편 (1)에 의해 $\operatorname{dist}(x, A) \le d(x, a)$이므로 순서 성질 (1)의 (i)에 어긋난다. 따라서 $0 < \operatorname{dist}(x, A)$가 아니고, 순서 성질 (1)의 (iii)에 의해 $\operatorname{dist}(x, A) \le 0$이다. (1)의 $0 \le \operatorname{dist}(x, A)$와 순서 성질 (1)의 (ii)에 의해 $\operatorname{dist}(x, A) = 0$이다.

**5의 증명.** $A$가 $(X, d)$에서 닫힌집합이면 [[closed-set]]의 (6)에 의해 $(X, \mathcal{T}_d)$에서 닫힌집합이고, [[interior-and-closure]]의 (3)에 의해 $\overline{A} = A$이다. (4)에 의해 $\operatorname{dist}(x, A) = 0$인 것은 정확히 $x \in A$일 때이다. $x \notin A$이면 $\operatorname{dist}(x, A) \ne 0$이고, (1)의 $0 \le \operatorname{dist}(x, A)$와 순서 성질 (1)의 (iii)에 의해 $0 < \operatorname{dist}(x, A)$이다($\operatorname{dist}(x, A) \le 0$이었다면 순서 성질 (1)의 (ii)에 의해 $0$이 되었을 것이다). $\blacksquare$
:::

## 예시와 반례

:::example[$[a, b]$ 바깥의 점]
$\mathbb{R}$에 보통 거리를 주고 $a < b$인 실수 $a$, $b$와 $x < a$인 실수 $x$를 잡으면 $\operatorname{dist}(x, [a, b]) = a - x$입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$t \in [a, b]$이면 $x < a \le t$이므로 순서 성질 (1)의 (v)에 의해 $x < t$이고, 순서 성질 (3)의 (i)에 의해 $0 < t - x$입니다. [[absolute-value]]의 (3)과 (1)에 의해 $d(x, t) = |x - t| = |t - x| = t - x$이고, $a \le t$와 순서 성질 (2)의 (i)에 의해 $a - x \le t - x$입니다. 따라서 $a - x$는 $\{d(x, t) : t \in [a, b]\}$의 하계입니다. 또 [[interval]]의 (3)에 의해 $a \in [a, b]$이고 같은 계산으로 $d(x, a) = a - x$이므로, $a - x$는 이 집합의 원소이기도 하여 최솟값입니다. [[upper-bound-and-supremum]]의 (2)에 의해 $\operatorname{dist}(x, [a, b]) = a - x$입니다. 이 경우에는 가장 가까운 점 $a$가 집합 안에 있습니다.
:::

:::example[이산 거리에서의 거리]
$d$가 $X$ 위의 이산 거리이면 $\operatorname{dist}(x, A)$는 $x \in A$일 때 $0$, $x \notin A$일 때 $1$입니다. 앞의 것은 (1)입니다. $x \notin A$이면 모든 $a \in A$에서 $a \ne x$이므로 $d(x, a) = 1$이고([[metric-space-examples]]의 (2)), $A \ne \emptyset$이므로 $\{d(x, a) : a \in A\} = \{1\}$입니다. $1$은 이 집합의 원소이면서 하계이므로 최솟값이고, [[upper-bound-and-supremum]]의 (2)에 의해 $\operatorname{dist}(x, A) = 1$입니다.
:::

:::counterexample[열린구간 $(0, 1)$과 점 $0$]
$\mathbb{R}$에 보통 거리를 주면 $\operatorname{dist}(0, (0, 1)) = 0$이지만 $0 \notin (0, 1)$입니다. [[closure-in-a-metric-space|거리공간의 폐포]]의 (6)에 의해 $\overline{(0, 1)} = [0, 1]$이고 [[interval]]의 (3)에 의해 $0 \in [0, 1]$이므로, (4)에 의해 $\operatorname{dist}(0, (0, 1)) = 0$입니다. 한편 $0 < 0$은 성립하지 않으므로([[order-properties-of-reals]]의 (1)의 (i)) $0 \notin (0, 1)$입니다. 따라서 $(0, 1)$에서는 (5)의 결론 "$\operatorname{dist}(x, A) = 0$이면 $x \in A$"가 $x = 0$에서 깨지고, (5)에 의해 $(0, 1)$은 닫힌집합이 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를 주고 $L = \{p \in \mathbb{R} \times \mathbb{R} : p = (s, 1)\text{인 실수 } s\text{가 있다}\}$라 할 때, $\operatorname{dist}((0, 0), L)$은 얼마인가?]
$1$입니다. $p = (s, 1)$이면 [[metric-space-examples]]의 (5)에 의해 $d_{\max}((0, 0), p) = \max\{|0 - s|,\ |0 - 1|\} = \max\{|s|,\ 1\}$이고, [[absolute-value]]의 (10)에 의해 이것은 $1$ 이상입니다. 따라서 $1$은 $\{d_{\max}((0, 0), p) : p \in L\}$의 하계입니다. $s = 0$이면 $\max\{0, 1\}$은 $0$이거나 $1$이고 $1$ 이상이므로($1 \le 0$은 성립하지 않는다) $1$입니다. 곧 $1$은 이 집합의 원소이기도 하여 최솟값이고, [[upper-bound-and-supremum]]의 (2)에 의해 $\operatorname{dist}((0, 0), L) = 1$입니다.
:::

:::check[$x$를 $\operatorname{dist}(x, A)$로 보내는 사상이 $X$의 모든 점에서 값 $0$을 갖는 것은 언제인가?]
정확히 $A$가 $X$에서 조밀할 때, 곧 $\overline{A} = X$일 때입니다([[dense-subset]]). (4)에 의해 모든 점에서 값이 $0$인 것은 정확히 $X$의 모든 점이 $\overline{A}$에 드는 것, 곧 $X \subseteq \overline{A}$인 것이고, $\overline{A} \subseteq X$는 늘 성립하므로 이것은 $\overline{A} = X$와 같습니다.
:::
