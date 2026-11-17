---
title: 집적점
title_en: Cluster Point
aliases: [극한점, 쌓인 점, 고립점, cluster point, accumulation point, limit point of a set]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 실수 c 가 ℝ 의 부분집합 S 의 집적점인 것은 모든 양수 ε 에 대하여 c 와 다르고 c 와의 거리가 ε 보다 작은 S 의 원소가 있을 때이다. 그 부정, 부분집합과 큰 집합의 관계, 구간의 모든 점이 그 구간의 집적점이라는 것, 수열로 집적점을 보이는 법을 증명한다.
requires: [set, subset, set-operations, quantifiers, negation-of-quantified-statements, conditional-statement, logical-connectives, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, sequence, limit-of-sequence, basic-limits, interval]
sources:
  - ref: lebl-basic-analysis
    loc: 3.1.1절 Definition 3.1.1 과 그 뒤 문단의 예 (i)–(v) (p.113), Proposition 3.1.2 (p.113–114), 연습문제 3.1.5 (p.120); 2.3절 연습문제 2.3.9 (p.81)
    checked: original
    note: "출처의 Definition 3.1.1(p.113)은 '모든 ε > 0 에 대해 집합 (x − ε, x + ε) ∩ S \\ {x} 가 공집합이 아닐 때 x 를 S 의 cluster point 라 한다'이고, 바로 뒤에서 '모든 ε > 0 에 대해 y ∈ S, y ≠ x, |x − y| < ε 인 y 가 있다'고 바꿔 말하며 집적점이 S 에 속할 필요가 없다고 적는다. 이 항목은 구간 기호를 쓰지 않는 둘째 꼴을 정의로 삼았다. 같은 정의가 연습문제 2.3.9(p.81)에 먼저 나온다. 출처의 Proposition 3.1.2(p.113–114)는 '집적점인 것은 정확히 S \\ {x} 의 점으로 이루어지고 x 로 수렴하는 수열이 있을 때'이다. 출처는 '집적점이면 수열이 있다' 쪽을 각 n 마다 (x − 1/n, x + 1/n) ∩ S \\ {x} 의 점을 하나씩 골라 증명한다. 이 항목은 다른 쪽 방향만 (7)로 싣고, 출처와 같이 수렴의 정의가 주는 항 x_M 하나를 써서 증명한다. (5)는 출처가 p.113 에서 증명 없이 드는 예 (ii) 가운데 [0, 1] 의 점이 (0, 1) 의 집적점이라는 부분을 임의의 a < b 로 넓혀 명제로 올린 것이다. (2), (3), (6)은 출처에 명제로 없다(검색한 범위). (4)는 출처의 연습문제 3.1.5(p.120)이다. 출처는 p.113 에서 예 (i) {1/n : n ∈ ℕ} 의 집적점은 0 하나뿐이다, (ii) (0, 1) 의 집적점 전체는 [0, 1] 이다, (iii) ℚ 의 집적점 전체는 ℝ 이다, (iv) [0, 1) ∪ {2} 의 집적점 전체는 [0, 1] 이다, (v) ℕ 은 집적점이 없다를 증명 없이 든다. 예시 '1/n 꼴의 수의 집합'은 (i)에서 0 이 집적점이라는 부분과 그 집합의 원소 1 이 집적점이 아니라는 것을 증명한 것이고(0 이 유일하다는 것은 다루지 않는다), 예시 '자연수의 집합'은 (v)를 증명한 것이다. 확인 질문 1 은 (ii)에서 끝점 0 이 (0, 1) 의 집적점이라는 부분과 같은 발상이고, 확인 질문 2 는 (ii)에서 [0, 1] 밖의 점이 (0, 1) 의 집적점이 아니라는 부분과 같은 발상이다. 반례는 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 ε–δ 로 직접 증명. 출처 쪽수와 메모, 기호 |f| 와 'c 가까이에서'의 구별을 고침"
added: 2026-11-17
---

:::statement
절댓값은 [[absolute-value]]의 것이고, 구간과 그 기호는 [[interval]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $c$를 실수라 하자.

**집적점.** $c$가 $S$의 **집적점**(cluster point)인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $x \in S$이고 $x \ne c$이며 $|x - c| < \varepsilon$인 실수 $x$가 있을 때이다. [[quantifiers|한정 기호]]로 쓰면, $c$가 $S$의 집적점인 것은 정확히
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists x \in S,\ (x \ne c \land |x - c| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. $c$가 $S$에 속할 필요는 없다.

다음이 성립한다.

1. ($0 < |x - c|$의 꼴) 실수 $x$에 대하여 $x \ne c$인 것은 정확히 $0 < |x - c|$일 때이다. 따라서 $c$가 $S$의 집적점인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0 < |x - c| < \varepsilon$인 $x \in S$가 있을 때이다.
2. (집적점이 아니라는 것) $c$가 $S$의 집적점이 아닌 것은 정확히
   $$
   \exists \delta \in \mathbb{R},\ \Bigl(\delta > 0 \land \bigl(\forall x \in S,\ (x \ne c \Rightarrow |x - c| \ge \delta)\bigr)\Bigr)
   $$
   가 참일 때이다. 곧 어떤 양의 실수 $\delta$가 있어, $c$와 다른 $S$의 모든 원소 $x$에서 $|x - c| \ge \delta$일 때이다.
3. ($c$를 빼도 같다) $c$가 $S$의 집적점인 것은 정확히 $c$가 $S - \{c\}$의 집적점일 때이다.
4. (더 큰 집합) $A \subseteq S$이고 $c$가 $A$의 집적점이면 $c$는 $S$의 집적점이다.
5. (닫힌구간의 점) $a < b$인 실수 $a$, $b$와 $c \in [a, b]$에 대하여, $c$는 열린구간 $(a, b)$의 집적점이고, 따라서 $(a, b]$, $[a, b)$, $[a, b]$의 집적점이다. 구체적으로, 양의 실수 $\varepsilon$에 대하여
   - $c < b$이면 $h = 2^{-1}\min\{\varepsilon, b - c\}$로 두고 $x = c + h$로,
   - $c = b$이면 $h = 2^{-1}\min\{\varepsilon, b - a\}$로 두고 $x = b - h$로
   정한 $x$가 $x \in (a, b)$, $x \ne c$, $|x - c| < \varepsilon$을 만족한다.
6. (구간의 점) $I$가 구간이고 $c \in I$이면 $c$는 $I$의 집적점이다. 곧 구간의 모든 점은 그 구간의 집적점이다.
7. (수열로 보이기) [[sequence|수열]] $(x_n)$이 모든 자연수 $n$에서 $x_n \in S$이고 $x_n \ne c$이며 $c$로 수렴하면([[limit-of-sequence]]), $c$는 $S$의 집적점이다.
:::

:::english
The absolute value is that of the entry on absolute value, and intervals and their notation are those of the entry on intervals. Let $S$ be a subset of $\mathbb{R}$ and $c$ a real number.

**Cluster points.** $c$ is a **cluster point** of $S$ exactly when for every positive real number $\varepsilon$ there is a real number $x$ with $x \in S$, $x \ne c$ and $|x - c| < \varepsilon$. In terms of quantifiers, $c$ is a cluster point of $S$ exactly when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists x \in S,\ (x \ne c \land |x - c| < \varepsilon)\bigr)\Bigr)
$$
is true. $c$ need not belong to $S$.

The following hold.

1. (The form $0 < |x - c|$) For a real number $x$, $x \ne c$ exactly when $0 < |x - c|$. Hence $c$ is a cluster point of $S$ exactly when for every positive real number $\varepsilon$ there is $x \in S$ with $0 < |x - c| < \varepsilon$.
2. (Not being a cluster point) $c$ is not a cluster point of $S$ exactly when
   $$
   \exists \delta \in \mathbb{R},\ \Bigl(\delta > 0 \land \bigl(\forall x \in S,\ (x \ne c \Rightarrow |x - c| \ge \delta)\bigr)\Bigr)
   $$
   is true; that is, exactly when there is a positive real number $\delta$ such that $|x - c| \ge \delta$ for every element $x$ of $S$ different from $c$.
3. (Removing $c$ changes nothing) $c$ is a cluster point of $S$ exactly when $c$ is a cluster point of $S - \{c\}$.
4. (A larger set) If $A \subseteq S$ and $c$ is a cluster point of $A$, then $c$ is a cluster point of $S$.
5. (Points of a closed interval) For real numbers $a$, $b$ with $a < b$ and $c \in [a, b]$, $c$ is a cluster point of the open interval $(a, b)$, and hence of $(a, b]$, $[a, b)$ and $[a, b]$. Specifically, for a positive real number $\varepsilon$, the number $x$ defined by
   - $x = c + h$ with $h = 2^{-1}\min\{\varepsilon, b - c\}$ if $c < b$,
   - $x = b - h$ with $h = 2^{-1}\min\{\varepsilon, b - a\}$ if $c = b$,
   satisfies $x \in (a, b)$, $x \ne c$ and $|x - c| < \varepsilon$.
6. (Points of an interval) If $I$ is an interval and $c \in I$, then $c$ is a cluster point of $I$. That is, every point of an interval is a cluster point of that interval.
7. (Showing it with a sequence) If a sequence $(x_n)$ satisfies $x_n \in S$ and $x_n \ne c$ for every natural number $n$ and converges to $c$, then $c$ is a cluster point of $S$.
:::

## 직관

$c$가 $S$의 집적점이라는 것은 $c$ 바로 옆에 $S$의 점들이 "쌓여" 있다는 뜻입니다. 망원경의 배율을 아무리 높여 $c$ 주변의 좁은 창($c$와의 거리가 $\varepsilon$보다 작은 곳)만 보아도, 그 창 안에 $c$가 아닌 $S$의 점이 늘 하나는 보입니다. 창의 폭이 $\varepsilon$이고, "늘 보인다"가 "모든 양수 $\varepsilon$에 대하여"입니다. 비유가 맞지 않는 곳은 망원경은 실제로 유한한 배율까지만 쓸 수 있지만 정의는 모든 양수 $\varepsilon$을 요구한다는 점입니다.

"$x \ne c$"라는 조건이 중요합니다. 이 조건이 없으면 $S$의 모든 원소가 자기 자신 덕분에 저절로 그 조건을 만족합니다(아래 반례). 반대로 $c$가 $S$에 속하지 않아도 됩니다. 아래 예시의 $0$처럼, $S$ 밖의 점에 $S$의 점들이 쌓일 수 있습니다.

다음 항목에서 함수의 극한은 집적점에서만 정의됩니다. 극한은 "$c$에 가까운 점에서의 함숫값"을 보는 것이므로, $c$에 가까운 $S$의 점이 없으면 볼 것이 없기 때문입니다. (6)은 구간 위의 함수라면 구간의 모든 점에서, 끝점에서까지 극한을 말할 수 있다는 것을 보장합니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "구간 (3)"은 [[interval]]의 번호, "이 항목의 (4)"는 위 진술의 번호이다. 순서 성질 (8)의 둘째 문장에 의해, 양의 실수 $m$에 대하여 $0 < 2^{-1}m < m$이다($2^{-1}m = m/2$). 이것을 (ㄱ)이라 하자.

**1의 증명.** 절댓값 (2)에 의해 $0 \le |x - c|$이고, $|x - c| = 0$인 것은 정확히 $x - c = 0$, 곧 ((K12)의 (v)에 의해) $x = c$일 때이다. 따라서 $x \ne c$이면 $|x - c| \ne 0$이고 $0 \le |x - c|$이므로 [[real-order-axioms]]의 $\le$의 뜻에 의해 $0 < |x - c|$이다. 거꾸로 $0 < |x - c|$이면 순서 성질 (1)의 (i)에 의해 $|x - c| \ne 0$이므로 $x \ne c$이다. 정의의 "$x \ne c \land |x - c| < \varepsilon$"을 이것과 진릿값이 같은 "$0 < |x - c| < \varepsilon$"으로 바꾸면 둘째 문장을 얻는다.

**2의 증명.** 정의의 명제를 부정한다. [[negation-of-quantified-statements]]의 1과 [[conditional-statement|조건문]]의 진리표(조건문이 거짓인 것은 정확히 가정이 참이고 결론이 거짓일 때)에 의해, 그 부정은 "$\exists \varepsilon \in \mathbb{R},\ \bigl(\varepsilon > 0 \land \lnot(\exists x \in S,\ (x \ne c \land |x - c| < \varepsilon))\bigr)$"와 진릿값이 같고, [[negation-of-quantified-statements]]의 2에 의해 안쪽의 부정은 "$\forall x \in S,\ \lnot(x \ne c \land |x - c| < \varepsilon)$"와 진릿값이 같다. $x$를 정해 두면 "$\lnot(P \land Q)$"와 "$P \Rightarrow \lnot Q$"는 [[logical-connectives]]와 [[conditional-statement]]의 진리표에서 둘 다 정확히 $P$와 $Q$가 모두 참인 줄에서만 거짓이므로 진릿값이 같다. 따라서 안쪽은 "$\forall x \in S,\ (x \ne c \Rightarrow \lnot(|x - c| < \varepsilon))$"와 같고, 순서 성질 (1)의 (iii)에 의해 "$|x - c| < \varepsilon$이 성립하지 않는다"는 $|x - c| \ge \varepsilon$이다. 문자 $\varepsilon$을 $\delta$로 바꾸면 (2)의 명제이다.

**3의 증명.** $c$가 $S$의 집적점이라 하자. 양의 실수 $\varepsilon$에 대하여 $x \in S$, $x \ne c$, $|x - c| < \varepsilon$인 $x$가 있고, $x \ne c$이므로 $x \in S - \{c\}$이다. 따라서 $c$는 $S - \{c\}$의 집적점이다. 거꾸로 $S - \{c\} \subseteq S$이므로 이 항목의 (4)에 의해 $S - \{c\}$의 집적점은 $S$의 집적점이다. (4)의 증명은 (3)을 쓰지 않는다.

**4의 증명.** 양의 실수 $\varepsilon$에 대하여 $c$가 $A$의 집적점이므로 $x \in A$, $x \ne c$, $|x - c| < \varepsilon$인 $x$가 있다. $A \subseteq S$이므로 $x \in S$이다.

**5의 증명.** $c \in [a, b]$이므로 $a \le c$이고 $c \le b$이다. 양의 실수 $\varepsilon$을 잡는다.

$c < b$인 경우. 순서 성질 (3)의 (i)에 의해 $0 < b - c$이다. 절댓값 (10)에 의해 $m = \min\{\varepsilon, b - c\}$는 $\varepsilon$이거나 $b - c$이므로 양수이고, $m \le \varepsilon$, $m \le b - c$이다. $h = 2^{-1}m$으로 두면 (ㄱ)에 의해 $0 < h < m$이다. $x = c + h$로 두자. 순서 성질 (2)의 (ii)로 $0 < h$의 양변에 $c$를 더하면 (K1), (K4)에 의해 $c < x$이다. $h < m \le b - c$이므로 순서 성질 (1)의 (v)에 의해 $h < b - c$이고, 양변에 $c$를 더하면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $x < b$이다. $a \le c < x$이므로 순서 성질 (1)의 (v)에 의해 $a < x$이다. 따라서 $x \in (a, b)$이다. 순서 성질 (1)의 (i)에 의해 $x \ne c$이다. (K1), (K2), (K8)의 (ii), (K4)에 의해 $x - c = h$이고 $0 < h$이므로 절댓값 (1)에 의해 $|x - c| = h$이며, $h < m \le \varepsilon$이므로 $|x - c| < \varepsilon$이다.

$c = b$인 경우. $a < b$이므로 $0 < b - a$이고, $m = \min\{\varepsilon, b - a\}$는 위와 같이 양수이며 $m \le \varepsilon$, $m \le b - a$이다. $h = 2^{-1}m$으로 두면 $0 < h < m$이다. $x = b - h$로 두자. 순서 성질 (3)의 (ii)에 의해 $-h < 0$이고 양변에 $b$를 더하면 $x < b$이다. $h < m \le b - a$이므로 순서 성질 (1)의 (v)에 의해 $h < b - a$이고, 양변에 $a - h$를 더하면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $a < b - h = x$이다. 따라서 $x \in (a, b)$이고 순서 성질 (1)의 (i)에 의해 $x \ne b = c$이다. $x - c = -h$이므로 절댓값 (3), (1)에 의해 $|x - c| = |h| = h < \varepsilon$이다.

$c \le b$이므로 두 경우가 전부이다. 따라서 $c$는 $(a, b)$의 집적점이다. 구간 (3)에 의해 $(a, b)$는 $(a, b]$, $[a, b)$, $[a, b]$의 부분집합이므로, 이 항목의 (4)에 의해 $c$는 그 세 집합의 집적점이기도 하다.

**6의 증명.** $I$는 구간이므로 서로 다른 두 원소 $x_0$, $z_0$을 갖는다. $x_0 \ne c$이면 $d = x_0$으로, $x_0 = c$이면 $z_0 \ne x_0 = c$이므로 $d = z_0$으로 둔다. 그러면 $d \in I$이고 $d \ne c$이다. (W1)에 의해 $c < d$이거나 $d < c$이다.

- $c < d$이면 구간 (4)에 의해 $[c, d] \subseteq I$이고, 구간 (3)에 의해 $c \in [c, d]$이다. 이 항목의 (5)를 $a = c$, $b = d$에 쓰면 $c$는 $[c, d]$의 집적점이다.
- $d < c$이면 같은 방식으로 $[d, c] \subseteq I$이고 $c \in [d, c]$이며, (5)를 $a = d$, $b = c$에 쓰면 $c$는 $[d, c]$의 집적점이다.

어느 경우든 이 항목의 (4)에 의해 $c$는 $I$의 집적점이다.

**7의 증명.** 양의 실수 $\varepsilon$을 잡는다. $(x_n)$이 $c$로 수렴하므로 $M$ 이상인 모든 자연수 $n$에서 $|x_n - c| < \varepsilon$인 자연수 $M$이 있다. $n = M$으로 두면 $x_M \in S$, $x_M \ne c$, $|x_M - c| < \varepsilon$이다. 따라서 $x = x_M$이 정의의 조건을 만족한다. 이 증명은 $\varepsilon$마다 수렴의 정의가 주는 항 하나를 쓸 뿐이다. $\blacksquare$
:::

## 예시와 반례

:::example[$1/n$ 꼴의 수의 집합]
$E = \{n^{-1} : n \in \mathbb{N}\}$로 둡니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

**$0$은 $E$의 집적점이고 $E$에 속하지 않는다.** $n$번째 항이 $n^{-1}$인 수열은 모든 항이 $E$에 속하고, 순서 성질 (10)에 의해 $0 < n^{-1}$이므로 모든 항이 $0$과 다르며, [[basic-limits]]의 (2)에 의해 $0$으로 수렴합니다. 이 항목의 (7)에 의해 $0$은 $E$의 집적점입니다. $E$의 원소는 모두 양수이므로 $0 \notin E$입니다.

**$1$은 $E$에 속하지만 집적점이 아니다.** $1 = 1^{-1} \in E$입니다. (2)를 $\delta = 2^{-1}$로 확인합니다. $x \in E$이고 $x \ne 1$이면 $x = n^{-1}$인 자연수 $n$이 있고, $n = 1$이면 $x = 1$이므로 $n \ne 1$입니다. [[prime-number]]의 (Z1)에 의해 $1 \le n$이고, $n \ne 1$이므로 $1 < n$이며 다시 (Z1)에 의해 $2 \le n$입니다(순서 성질 (10)로 실수의 부등식으로 씁니다). 순서 성질 (6)의 (ii)(등호인 경우는 그대로)에 의해 $n^{-1} \le 2^{-1}$이고, $0 < n^{-1} < 1$이므로 [[absolute-value|절댓값]]의 (3), (1)에 의해 $|x - 1| = 1 - n^{-1} \ge 1 - 2^{-1} = 2^{-1}$입니다(순서 성질 (3)의 (iii)과 (2)의 (i)). 따라서 $1$은 $E$의 집적점이 아닙니다.
:::

:::example[자연수의 집합은 집적점이 없다]
실수 $c$를 아무것이나 잡고 (2)의 $\delta$를 찾습니다. [[archimedean-property]]의 (4)에 의해 $m - 1 \le c < m$인 정수 $m$이 있습니다. 자연수는 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수 $x$와 $m - 1$에 대하여 [[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)에 의해 $x \le m - 1$이거나 $x \ge m$입니다($m - 1$은 정수의 차이므로 정수, [[even-and-odd]]). [[order-properties-of-reals]]의 (10)에 의해 이 부등식들을 실수의 부등식으로 씁니다.

- $c = m - 1$이면 $\delta = 1$로 둡니다. $x \in \mathbb{N}$이고 $x \ne c$라 하면, $x$와 $c$는 서로 다른 정수이므로 (Z5)와 (Z1)에 의해 $x \le c - 1$이거나 $c + 1 \le x$이고, 어느 쪽이든 $|x - c| \ge 1$입니다.
- $m - 1 < c$이면 $\delta = \min\{c - (m - 1), m - c\}$로 둡니다. 두 수가 모두 양수이므로 $\delta$는 양수입니다. $x \in \mathbb{N}$이 $x \le m - 1$이면 $c - x \ge c - (m - 1) \ge \delta$이고 $c - x > 0$이므로 $|x - c| = c - x \ge \delta$입니다. $x \ge m$이면 $x - c \ge m - c \ge \delta$이고 $x - c > 0$이므로 $|x - c| \ge \delta$입니다.

어느 경우든 $c$와 다른 모든 $x \in \mathbb{N}$에서 $|x - c| \ge \delta$이므로 (2)에 의해 $c$는 $\mathbb{N}$의 집적점이 아닙니다. $c$는 임의였으므로 $\mathbb{N}$은 집적점이 없습니다. (부등식을 옮기고 절댓값을 푸는 데는 순서 성질 (2), (3)과 [[absolute-value|절댓값]]의 (1), (3)을 씁니다.)
:::

:::counterexample[정의에서 "$x \ne c$"를 빼면 뜻이 달라진다]
"모든 양수 $\varepsilon$에 대하여 $x \in S$이고 $|x - c| < \varepsilon$인 $x$가 있다"를 조건으로 잘못 쓰면, $S$의 모든 원소 $c$는 $x = c$로 이 조건을 만족합니다. $|c - c| = |0| = 0 < \varepsilon$이기 때문입니다. 위의 예시의 $E$에서 $1$은 이 잘못된 조건을 만족하지만, 예시에서 보았듯이 $c$와 다른 $E$의 원소는 $1$에서 $2^{-1}$ 이상 떨어져 있어 집적점이 아닙니다. "$x \ne c$"가 있어야 "$c$ 주변에 $c$ 말고 다른 점이 쌓여 있다"는 뜻이 됩니다.
:::

## 확인 질문

:::check[$0$은 $\mathbb{R} - \{0\}$의 집적점인가?]
그렇습니다. 열린구간 $(0, 1)$의 원소는 양수이므로 $(0, 1) \subseteq \mathbb{R} - \{0\}$입니다. $0 \in [0, 1]$이므로 이 항목의 (5)에 의해 $0$은 $(0, 1)$의 집적점이고, (4)에 의해 $\mathbb{R} - \{0\}$의 집적점입니다. $\mathbb{R} - \{0\}$은 [[interval|구간]]이 아니므로 (6)은 바로 쓸 수 없습니다.
:::

:::check[$3$은 열린구간 $(0, 1)$의 집적점인가?]
아닙니다. (2)를 $\delta = 2$로 확인합니다. $x \in (0, 1)$이면 $x < 1$이므로 $3 - x > 3 - 1 = 2$이고([[order-properties-of-reals]]의 (3)의 (iii), (2)의 (ii)), $3 - x$가 양수이므로 [[absolute-value|절댓값]]의 (3), (1)에 의해 $|x - 3| = 3 - x \ge 2$입니다.
:::
