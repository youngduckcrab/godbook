---
title: 연속함수 공간의 닫힌 공이 콤팩트가 아닌 예
title_en: A Closed Ball in a Space of Continuous Functions That Is Not Compact
aliases: [닫혀 있고 유계이지만 콤팩트가 아닌 집합, 연속함수 공간의 단위 닫힌 공, closed unit ball is not compact]
kind: proposition
field: topology
msc: ["54C35", "54D30"]
level: undergrad
summary: 닫힌구간 [0, 1] 위의 연속 실함수의 공간에서, 서로 고른 거리가 1 인 연속함수들의 열을 식으로 만들어, 값이 0 인 상수함수를 중심으로 하는 반지름 1 의 닫힌 공이 닫혀 있고 유계이며 완비인데도 콤팩트가 아님을 보인다. ℝ 에서는 닫혀 있고 유계인 집합이 콤팩트이다.
requires: [function, even-and-odd, real-order-axioms, topological-space, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, interval, lipschitz-continuity, metric-space, metric-space-examples, open-ball, open-ball-is-open, topology-examples, continuity-agrees-with-analysis, compact-space, continuous-image-of-compact, closed-interval-is-compact, compact-metric-closed-and-bounded, heine-borel-on-reals, compact-metric-space-sequences, complete-metric-space, lipschitz-map, sequence-in-a-space, pointwise-convergence, bounded-maps-and-uniform-metric, space-of-continuous-maps]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.3소절 연습문제 7.4.8 (p.286); 7.4.2소절 Compactness: Proposition 7.4.9 와 Lemma 7.4.10 사이의 문단 (p.281–282); 7.1절 Example 7.1.8 (p.259–260); 7.4.2절 Theorem 7.4.14 (p.284); 7.2.1절 Example 7.2.2 (p.264)"
    checked: original
    note: "출처 연습문제 7.4.8(Challenging, p.286)은 Example 7.1.8 의 거리공간 C([0, 1], ℝ) 에서 값이 0 인 함수를 0 이라 할 때 닫힌 공 C(0, 1) 이 (닫혀 있고 유계인데도) 콤팩트가 아님을 보이라고 하고, 힌트로 d(f_n, 0) = 1 이고 n ≠ k 이면 d(f_n, f_k) = 1 인 서로 다른 연속함수들의 열을 만들어 {f_n : n ∈ ℕ} 이 닫혀 있지만 콤팩트가 아님을 보이라고 한다. 이 항목의 (1)과 (2)는 그 연습문제를 푼 것이고, 같은 발상(서로 거리 1 인 열)이다. 열의 식은 이 사이트가 정했다(서로 겹치지 않는 열린구간 ((n + 1)⁻¹, n⁻¹) 위의 꺾은선). 이 항목은 {f_n} 이 닫혀 있음을 보이지 않고, 서로 일정한 거리 이상 떨어진 항들의 수열은 수렴하는 부분수열을 갖지 않는다는 compact-metric-space-sequences 의 (4)로 끝낸다. 출처 p.281–282 의 문단(Proposition 7.4.9 와 Lemma 7.4.10 사이)은 모든 거리공간에서 닫혀 있고 유계인 것이 콤팩트와 같지는 않다고 적고, 완비가 아닌 (0, 1) 을 간단한 예로, 'C([a, b], ℝ) 는 완비 거리공간이지만 닫힌 단위 공 C(0, 1) 은 콤팩트가 아니다'를 연습문제 7.4.8 로 든다. (3)의 대비는 그 문단과 같은 내용을 ℝ 의 하이네–보렐 정리(출처 7.4.2절 Theorem 7.4.14, p.284 는 ℝⁿ 에서 진술한다)로 적은 것이다. (3)의 'ℝ 의 닫힌 공 C(y, r) = [y − r, y + r]' 는 출처 7.2.1절 Example 7.2.2(p.264)와 같다. 예시 '정의역이 한 점이면 닫힌 공이 콤팩트인 예'의 고른 거리 공간과 ℝ 의 대응은 bounded-maps-and-uniform-metric 의 (10)의 (iii)이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 이 사이트에 없는 방향을 사실처럼 말한 직관 1건과 단원 글 1건, 틀리거나 빠진 근거 번호 4곳, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
닫힌구간 $[0, 1]$은 [[interval]]의 것이고, 보통 거리의 부분공간 거리를 준다. 유계인 연속 사상의 공간 $C_b(X, Y)$와 그 위의 고른 거리 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, 상수 사상 $\kappa_y$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이다. 닫힌 공 $C(g, r)$는 [[open-ball]]의 것이고, 거리공간의 유계는 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 것이며, 콤팩트 부분집합과 콤팩트 거리공간은 [[compact-space]], [[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 것이다. 두 수의 최대 $\max\{a, b\}$는 [[absolute-value]]의 것이다.

[[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (3)에 의해 $C_b([0, 1], \mathbb{R})$의 원소는 정확히 해석학 입문의 뜻의 연속함수 $f : [0, 1] \to \mathbb{R}$이고, $(C_b([0, 1], \mathbb{R}), d_\infty)$는 완비 거리공간이다. 아래에서 $K$는 이 공간에서 중심이 $\kappa_0$이고 반지름이 $1$인 닫힌 공 $C(\kappa_0, 1)$이다. 그 항목의 (5)에 의해 $K$의 원소는 정확히 연속함수 $f : [0, 1] \to \mathbb{R}$ 가운데 모든 $x \in [0, 1]$에서 $|f(x)| \le 1$인 것이다.

1. (서로 거리가 $1$인 연속함수들의 열) 자연수 $n$과 $x \in [0, 1]$에 대하여 $a_n(x) = 2n(n + 1)x - 2n - 1$, $c_n = (2n + 1)\bigl(2n(n + 1)\bigr)^{-1}$로 두고, $f_n : [0, 1] \to \mathbb{R}$를 $f_n(x) = \max\{0,\ 1 - |a_n(x)|\}$로 정한다. $n$번째 항이 $f_n$인 사상의 열 $(f_n)$이 있고 다음이 성립한다.
   - (i) $f_n$은 연속함수이고(실수 $2n(n + 1)$이 $f_n$의 립시츠 상수이다), 모든 $x \in [0, 1]$에서 $0 \le f_n(x) \le 1$이다. 따라서 $f_n \in K$이다.
   - (ii) $(n + 1)^{-1} < c_n < n^{-1}$이고 $c_n \in [0, 1]$이며 $f_n(c_n) = 1$이다. $x \in [0, 1]$에서 $f_n(x) \ne 0$이면 $(n + 1)^{-1} < x < n^{-1}$이다.
   - (iii) $d_\infty(f_n, \kappa_0) = 1$이고, $n \ne m$인 자연수 $n$, $m$에서 $d_\infty(f_n, f_m) = 1$이다.
2. (닫혀 있고 유계이며 완비이지만 콤팩트가 아니다) $K$는 $(C_b([0, 1], \mathbb{R}), d_\infty)$에서 닫혀 있고 유계이며, 부분공간 거리로 완비이다. 그러나 $K$는 $C_b([0, 1], \mathbb{R})$의 콤팩트 부분집합이 아니고, 부분공간 거리를 준 $K$는 콤팩트 거리공간이 아니다.
3. (실수와의 대비) 보통 거리를 준 $\mathbb{R}$에서는 닫혀 있고 유계인 부분집합이 콤팩트이다. 특히 실수 $y$와 양의 실수 $r$에 대하여 $\mathbb{R}$의 닫힌 공 $C(y, r) = [y - r, y + r]$는 콤팩트 부분집합이다. 따라서 "닫혀 있고 유계인 부분집합은 콤팩트이다"는 $\mathbb{R}$에서는 성립하고 $C_b([0, 1], \mathbb{R})$에서는 성립하지 않는다.
:::

:::english
The closed interval $[0, 1]$ is as in the entry on intervals and carries the subspace metric of the standard metric. The space $C_b(X, Y)$ of bounded continuous maps and the uniform metric $d_\infty$ on it are as in the entry on the space of bounded continuous maps, and the constant maps $\kappa_y$ are as in the entry on the space of bounded maps and the uniform metric. Closed balls $C(g, r)$ are as in the entry on open balls, boundedness in a metric space is as in the entry on boundedness and compactness in metric spaces, and compact subsets and compact metric spaces are as in the entries on compact spaces and on sequences in compact metric spaces. The maximum $\max\{a, b\}$ of two numbers is as in the entry on absolute value.

By (3) of the entry on the space of bounded continuous maps, the elements of $C_b([0, 1], \mathbb{R})$ are exactly the continuous functions $f : [0, 1] \to \mathbb{R}$ in the sense of introductory analysis, and $(C_b([0, 1], \mathbb{R}), d_\infty)$ is a complete metric space. Below, $K$ is the closed ball $C(\kappa_0, 1)$ in this space with center $\kappa_0$ and radius $1$. By (5) of that entry, the elements of $K$ are exactly the continuous functions $f : [0, 1] \to \mathbb{R}$ with $|f(x)| \le 1$ for every $x \in [0, 1]$.

1. (A sequence of continuous functions at mutual distance $1$) For a natural number $n$ and $x \in [0, 1]$, let $a_n(x) = 2n(n + 1)x - 2n - 1$ and $c_n = (2n + 1)\bigl(2n(n + 1)\bigr)^{-1}$, and define $f_n : [0, 1] \to \mathbb{R}$ by $f_n(x) = \max\{0,\ 1 - |a_n(x)|\}$. There is a sequence of maps $(f_n)$ whose $n$th term is $f_n$, and the following hold.
   - (i) $f_n$ is continuous (the real number $2n(n + 1)$ is a Lipschitz constant of $f_n$), and $0 \le f_n(x) \le 1$ for every $x \in [0, 1]$. Hence $f_n \in K$.
   - (ii) $(n + 1)^{-1} < c_n < n^{-1}$, $c_n \in [0, 1]$ and $f_n(c_n) = 1$. If $x \in [0, 1]$ and $f_n(x) \ne 0$, then $(n + 1)^{-1} < x < n^{-1}$.
   - (iii) $d_\infty(f_n, \kappa_0) = 1$, and $d_\infty(f_n, f_m) = 1$ for natural numbers $n \ne m$.
2. (Closed, bounded and complete but not compact) $K$ is closed and bounded in $(C_b([0, 1], \mathbb{R}), d_\infty)$ and complete with the subspace metric. However, $K$ is not a compact subset of $C_b([0, 1], \mathbb{R})$, and $K$ with the subspace metric is not a compact metric space.
3. (Contrast with the reals) In $\mathbb{R}$ with the standard metric, a subset that is closed and bounded is compact. In particular, for a real number $y$ and a positive real number $r$, the closed ball $C(y, r) = [y - r, y + r]$ of $\mathbb{R}$ is a compact subset. Hence "a closed and bounded subset is compact" holds in $\mathbb{R}$ and fails in $C_b([0, 1], \mathbb{R})$.
:::

## 직관

$\mathbb{R}$에서는 닫혀 있고 유계인 집합이 콤팩트이고(하이네–보렐 정리), 그 집합 안의 수열은 늘 수렴하는 부분수열을 갖습니다. 닫힌 공 $K$도 닫혀 있고 유계이며 완비이지만, $K$ 안에는 서로 늘 $1$만큼 떨어진 함수가 끝없이 많아서 그 성질이 깨집니다. $f_n$은 $[0, 1]$을 겹치지 않는 작은 구간 $\bigl((n + 1)^{-1}, n^{-1}\bigr)$들로 나누어 $n$번째 구간에만 높이 $1$인 뾰족한 봉우리를 세운 함수입니다. 두 함수의 봉우리는 서로 다른 곳에 있으므로, 한쪽의 꼭대기에서 다른 쪽은 $0$이고 두 함수의 고른 거리는 늘 $1$입니다.

비유하자면 칸막이로 나뉜 끝없이 많은 서랍에 전등이 하나씩 있고, $f_n$은 $n$번째 서랍의 전등만 켜는 것입니다. 서랍이 $[0, 1]$의 작은 구간에, 전등의 밝기가 함숫값에, "밝기가 모두 $1$ 이하"가 닫힌 공 $K$에 맞습니다. 서로 다른 두 $f_n$은 어느 한 서랍에서 밝기가 $1$만큼 차이 나므로 서로 $1$씩 떨어져 있고, 어디로도 모여들지 않습니다. 콤팩트 거리공간의 수열은 수렴하는 부분수열을 가져야 하므로([[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 (3)), 이런 열이 들어 있는 $K$는 콤팩트가 아닙니다. 비유가 맞지 않는 곳은, 실제 전등은 켜고 끄는 두 가지이지만 $f_n$의 값은 서랍 안에서 $0$부터 $1$까지 연속으로 오르내린다는 점입니다.

위상수학 입문의 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (4)는 무한집합 위의 이산 거리로, 닫혀 있고 유계이지만 콤팩트가 아닌 집합의 예를 보였습니다. 이 항목은 같은 현상을 닫힌구간 위의 연속함수의 공간에서 보입니다.

## 증명

:::idea
$f_n$의 값이 $0$이 아닌 곳은 열린구간 $\bigl((n + 1)^{-1}, n^{-1}\bigr)$ 안에만 있고, 이 구간들은 서로 겹치지 않는다. 그래서 두 함수 가운데 하나는 모든 점에서 $0$이고, 고른 거리는 정확히 $1$이다.
:::

:::hint
$f_n$의 연속은 립시츠 부등식으로 보입니다. $|\max\{0, s\} - \max\{0, t\}| \le |s - t|$와 역삼각부등식을 이어 씁니다.
:::

:::hint
$|2n(n + 1)x - 2n - 1| < 1$은 $2n < 2n(n + 1)x < 2n + 2$와 같고, 양변에 $\bigl(2n(n + 1)\bigr)^{-1}$을 곱하면 구간이 나옵니다. 콤팩트가 아니라는 것은 서로 떨어진 항들의 수열에 관한 [[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 (4)로 끝냅니다.
:::

:::proof
"순서 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호, "공간 (n)"은 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 번호이다. 자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 양의 정수이고, 순서 (10)에 의해 정수의 부등식((Z1)([[prime-number]]), (Z6), (Z7)([[well-ordering-principle]]))을 실수의 부등식으로 쓴다. 실수의 계산은 [[real-number-arithmetic]]의 것이다. 자연수 $n$에 대하여 $k_n = 2n(n + 1)$로 두면 $k_n$은 정수이고([[even-and-odd]]), 순서 (10)에 의해 $2$, $n$, $n + 1$이 양의 실수이므로 (W4)([[real-order-axioms]])에 의해 $0 < k_n$이며, 순서 (6)의 (i)에 의해 $0 < k_n^{-1}$이다.

**(가) 최대의 두 성질.** 절댓값의 두 수의 최대의 정의에 의해 실수 $s$에 대하여 $0 \le s$이면 $\max\{0, s\} = s$이고, $s < 0$이면 $\max\{0, s\} = 0$이다. 다음을 보인다. (a) $s \le 1$이면 $0 \le \max\{0, s\} \le 1$이다. (b) 실수 $s$, $t$에 대하여 $|\max\{0, s\} - \max\{0, t\}| \le |s - t|$이다.

(a): 절댓값 (10)에 의해 $0 \le \max\{0, s\}$이고, 순서 (5)의 (ii)에 의해 $0 \le 1$이며 $s \le 1$이므로 $\max\{0, s\} \le 1$이다.

(b): 네 경우로 나눈다. $0 \le s$, $0 \le t$이면 왼쪽은 $|s - t|$이다. $s < 0$, $t < 0$이면 왼쪽은 $|0 - 0| = 0$이고 절댓값 (2)에 의해 $0 \le |s - t|$이다. $0 \le s$, $t < 0$이면 왼쪽은 $|s - 0| = s$(절댓값 (1))이고, 순서 (3)의 (ii)에 의해 $0 < -t$이므로 순서 (2)의 (ii)에 의해 $s < s - t$이며, $0 \le s - t$이므로 절댓값 (1)에 의해 $s - t = |s - t|$이다. $s < 0 \le t$이면 같은 방법으로 왼쪽은 $t \le t - s = |t - s| = |s - t|$이다(절댓값 (3)).

**(1).** 각 자연수 $n$과 $x \in [0, 1]$에서 $f_n(x)$는 식으로 정해진 실수이므로, [[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)에 의해 $n$번째 사상이 $x$를 $f_n(x)$로 보내는 사상의 열 $(f_n)$이 있다. $k_n$으로 쓰면 $a_n(x) = k_n x - 2n - 1$이다.

(i) 절댓값 (2)에 의해 $0 \le |a_n(x)|$이므로 $1 - |a_n(x)| \le 1$이고, (가)의 (a)에 의해 $0 \le f_n(x) \le 1$이다. $x$, $w \in [0, 1]$이면 (가)의 (b), 절댓값 (3), [[triangle-inequality]]의 (2), 절댓값 (4)와 (1)에 의해
$$
\begin{aligned}
&|f_n(x) - f_n(w)| \\
&\quad \le \bigl|\,|a_n(w)| - |a_n(x)|\,\bigr| \\
&\quad \le |a_n(w) - a_n(x)| \\
&\quad = |k_n(w - x)| = k_n |x - w|
\end{aligned}
$$
이고 $0 \le k_n$이다. 따라서 $k_n$은 [[lipschitz-continuity|립시츠 연속]]의 뜻으로 $f_n$의 립시츠 상수이고, 그 항목의 (2)에 의해 $f_n$은 연속함수이다. 공간 (3)에 의해 $f_n \in C_b([0, 1], \mathbb{R})$이고, 절댓값 (1)에 의해 $|f_n(x)| = f_n(x) \le 1$이므로 공간 (5)에 의해 $f_n \in K$이다.

(ii) $2n < 2n + 1 < 2n + 2$이고 $0 < k_n^{-1}$이므로 순서 (4)의 (i)에 의해 $2n k_n^{-1} < c_n < (2n + 2)k_n^{-1}$이며, 계산하면 $2n k_n^{-1} = (n + 1)^{-1}$, $(2n + 2) k_n^{-1} = n^{-1}$이다. 순서 (10)과 (6)의 (i)에 의해 $0 < (n + 1)^{-1}$이고, (Z1)에 의해 $1 \le n$이므로 $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 순서 (6)의 (ii)에 의해 $n^{-1} < 1$이다. 따라서 $0 < c_n < 1$이고 $c_n \in [0, 1]$이다. $a_n(c_n) = k_n c_n - 2n - 1 = (2n + 1) - (2n + 1) = 0$이므로 $f_n(c_n) = \max\{0, 1\} = 1$이다.

$f_n(x) \ne 0$이라 하자. (가)의 첫 문장에 의해 $s = 1 - |a_n(x)|$에 대하여 $s < 0$이면 $f_n(x) = 0$이므로 $0 \le s$이고, 그때 $f_n(x) = s \ne 0$이므로 $0 < s$, 곧 $|a_n(x)| < 1$이다. 절댓값 (7)에 의해 $-1 < a_n(x) < 1$이고, 양변에 $2n + 1$을 더하면(순서 (2)의 (ii)) $2n < k_n x < 2n + 2$이다. 양변에 $k_n^{-1}$을 곱하면(순서 (4)의 (i)) $(n + 1)^{-1} < x < n^{-1}$이다.

(iii) 모든 $x$에서 (i)과 절댓값 (1)에 의해 $|f_n(x) - \kappa_0(x)| = f_n(x) \le 1$이므로, 고른 거리 (4)의 (iii)과 (2)의 (ii)에 의해 $d_\infty(f_n, \kappa_0) \le 1$이다. (ii)와 고른 거리 (2)의 (i)에 의해 $1 = |f_n(c_n) - 0| \le d_\infty(f_n, \kappa_0)$이다. 순서 (1)의 (ii)에 의해 $d_\infty(f_n, \kappa_0) = 1$이다.

$n \ne m$이라 하자. [[metric-space]]의 조건 (iii)과 고른 거리 (3)에 의해 $d_\infty(f_n, f_m) = d_\infty(f_m, f_n)$이므로 $n < m$인 경우만 보면 된다. (Z1)에 의해 $n + 1 \le m$이고, 같으면 $m^{-1} = (n + 1)^{-1}$, $n + 1 < m$이면 순서 (6)의 (ii)에 의해 $m^{-1} < (n + 1)^{-1}$이므로 $m^{-1} \le (n + 1)^{-1}$이다. $x \in [0, 1]$에서 $f_m(x) \ne 0$이면 (ii)에 의해 $x < m^{-1} \le (n + 1)^{-1}$이므로 (ii)의 둘째 문장의 대우에 의해 $f_n(x) = 0$이다. 따라서 모든 $x$에서 $f_m(x) = 0$이거나 $f_n(x) = 0$이고, 각각의 경우 절댓값 (1), (3)과 (i)에 의해 $|f_n(x) - f_m(x)|$는 $f_n(x)$이거나 $f_m(x)$이어서 $1$ 이하이다. 고른 거리 (4)의 (iii)과 (2)의 (ii)에 의해 $d_\infty(f_n, f_m) \le 1$이다. 한편 (ii)에 의해 $c_n > (n + 1)^{-1} \ge m^{-1}$이므로 $f_m(c_n) = 0$이고, $|f_n(c_n) - f_m(c_n)| = 1$이다. 고른 거리 (2)의 (i)에 의해 $1 \le d_\infty(f_n, f_m)$이므로 $d_\infty(f_n, f_m) = 1$이다.

**(2).** [[open-ball-is-open|열린 공은 열린집합이다]]의 (2)에 의해 $K$는 닫혀 있고, [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (1)의 (iv)에 의해 유계이다. [[complete-metric-space]]의 (2)에 의해 $\mathbb{R}$이 완비이므로 공간 (5)에 의해 $K$는 완비이다.

(1)의 (i)에 의해 사상의 열 $(f_n)$의 모든 항은 $C_b([0, 1], \mathbb{R})$의 원소이므로, [[function]]의 "공역은 선언하기 나름이다"에 의해 이 열은 $C_b([0, 1], \mathbb{R})$의 수열이기도 하고 모든 항이 $K$에 든다. (1)의 (iii)에 의해 $n \ne m$이면 $d_\infty(f_n, f_m) = 1 \ge 1$이다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 (4)를 $c = 1$로 쓰면 $K$는 $C_b([0, 1], \mathbb{R})$의 콤팩트 부분집합이 아니다. 같은 수열은 $K$의 수열이기도 하고, 부분공간 거리로 잰 항 사이의 거리는 [[metric-space-examples]]의 (3)에 의해 $d_\infty(f_n, f_m)$과 같으므로, 그 (4)의 마지막 문장에 의해 부분공간 거리를 준 $K$는 콤팩트 거리공간이 아니다.

**(3).** 첫 문장은 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (1)이다. [[open-ball]]의 (5)에 의해 $\mathbb{R}$의 닫힌 공 $C(y, r)$는 닫힌구간 $[y - r, y + r]$이고, [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)에 의해 콤팩트 부분집합이다. 마지막 문장은 이것과 (2)이다.
:::

## 예시와 반례

:::example[정의역이 한 점이면 닫힌 공이 콤팩트인 예]
$[0, 1]$ 대신 한 점 집합 $X = \{p\}$를 정의역으로 두면 결과가 달라집니다. [[topological-space]]의 위상의 조건 (i)에 의해 $X$ 위의 위상은 $\emptyset$과 $X$를 원소로 갖는 $\mathscr{P}(X) = \{\emptyset, X\}$의 부분집합이므로 이산위상 $\mathscr{P}(X)$뿐이고([[topology-examples]]), [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (6)의 (i)에 의해 $C_b(X, \mathbb{R}) = \operatorname{Bd}(X, \mathbb{R})$입니다. [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 (10)의 (iii)에 의해 모든 원소 $h$는 $\kappa_{h(p)}$이고 $d_\infty(h, \kappa_0) = |h(p)|$이므로, 닫힌 공 $C(\kappa_0, 1)$의 원소는 정확히 $h(p) \in [-1, 1]$인 $h$입니다([[absolute-value]]의 (7)).

$y$를 $\kappa_y$로 보내는 사상 $\mathbb{R} \to C_b(X, \mathbb{R})$은 같은 항목의 (9)의 (ii)에 의해 거리를 보존하므로 $1$-립시츠이고, [[lipschitz-map]]의 (3)에 의해 연속입니다. [[closed-interval-is-compact|닫힌구간은 콤팩트이다]]의 (1)에 의해 $[-1, 1]$은 $\mathbb{R}$의 콤팩트 부분집합이고, [[continuous-image-of-compact|콤팩트 집합의 연속 상]]의 (1)에 의해 그 상 $\{\kappa_y : y \in [-1, 1]\}$, 곧 $C(\kappa_0, 1)$은 콤팩트 부분집합입니다. 그래서 이 항목의 결론은 정의역이 $[0, 1]$일 때의 것이고, 정의역에 따라 닫힌 공이 콤팩트일 수도 있습니다.
:::

## 확인 질문

:::check[같은 공간에서 반지름이 $2^{-1}$인 닫힌 공 $C(\kappa_0, 2^{-1})$은 콤팩트인가?]
콤팩트가 아닙니다. $g_n(x) = 2^{-1} f_n(x)$로 두면 [[lipschitz-continuity|립시츠 연속]]의 뜻으로 $2^{-1}k_n$이 립시츠 상수이므로 $g_n$은 연속함수이고, 모든 $x$에서 $0 \le g_n(x) \le 2^{-1}$이므로 $g_n \in C(\kappa_0, 2^{-1})$입니다. $n \ne m$이면 모든 $x$에서 $|g_n(x) - g_m(x)| = 2^{-1}|f_n(x) - f_m(x)| \le 2^{-1}$이고 $x = c_n$에서 $2^{-1}$이므로, (1)의 (iii)과 같은 계산으로 $d_\infty(g_n, g_m) = 2^{-1}$입니다. [[compact-metric-space-sequences|콤팩트 거리공간의 수열]]의 (4)를 $c = 2^{-1}$로 쓰면 콤팩트 부분집합이 아닙니다.
:::

:::check[정의역이 공집합이면 $C_b(\emptyset, \mathbb{R})$의 닫힌 공 $C(\kappa_0, 1)$은 콤팩트인가?]
콤팩트입니다. [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 (6)의 (ii)에 의해 $C_b(\emptyset, \mathbb{R}) = \{\emptyset\}$이고 $\kappa_0 = \emptyset$이므로 $C(\kappa_0, 1) = \{\emptyset\}$입니다. [[topological-space]]의 위상의 조건 (i)에 의해 원소가 하나인 집합 $\{\emptyset\}$ 위의 위상은 그 멱집합 $\{\emptyset, \{\emptyset\}\}$뿐이고, 이것은 밀착위상이므로([[topology-examples]]), [[compact-space]]의 (8)의 (iii)에 의해 그 모든 부분집합은 콤팩트 부분집합입니다.
:::
