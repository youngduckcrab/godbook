---
title: 실수의 하이네–보렐 정리
title_en: The Heine–Borel Theorem on the Real Line
aliases: [하이네-보렐 정리, Heine–Borel theorem, Heine-Borel theorem, 실수의 콤팩트 집합, compact subsets of the real line, 콤팩트 집합의 최댓값]
kind: theorem
field: topology
msc: ["54D30", "26A03"]
level: undergrad
summary: 보통 위상을 준 ℝ 의 부분집합이 콤팩트인 것은 정확히 닫혀 있고 유계일 때이다. 공집합이 아닌 콤팩트 부분집합은 최댓값과 최솟값을 갖는다. 0 과 역수 1/n 전체의 집합은 콤팩트이고, ℤ, 반열린구간, 0 과 1 사이의 유리수 전체는 콤팩트가 아니다.
requires: [set, subset, set-operations, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, upper-bound-and-supremum, infimum-exists, least-upper-bound-property, archimedean-property, rational-and-irrational-numbers, rationals-are-dense, metric-space-examples, metric-subspace-topology, open-ball, open-set-in-metric-space, topological-space, closed-set, standard-topology-on-reals, open-and-closed-sets-of-reals, homeomorphism-examples, compact-space, continuous-image-of-compact, closed-subset-of-compact, closed-interval-is-compact, compact-metric-closed-and-bounded]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Example 7.4.8 (p.280), Prop 7.4.9 아래 문단 (p.281–282), Lemma 7.4.10 아래 문단 (p.282), Proposition 7.4.13, Theorem 7.4.14 와 그 아래 문단, n = 1 의 증명 (p.284); 7.5.2절 Theorem 7.5.6 의 증명 (p.290); 연습문제 7.4.2 (p.285)"
    checked: original
    note: "(1)의 '닫혀 있고 유계이면 콤팩트'는 출처 Theorem 7.4.14(p.284)를 n = 1 로 좁힌 것이고, 증명도 출처의 n = 1 증명(K ⊆ [a, b], [a, b] 는 콤팩트, 콤팩트 집합의 닫힌 부분집합은 콤팩트)과 같은 길이다. 출처는 정리 아래 문단에서 ℝⁿ 의 부분집합은 정확히 닫히고 유계일 때 콤팩트이고, 일반 거리공간과 ℝⁿ 의 부분공간에서는 이 정리가 성립하지 않는다고 적는다. 반례 '열린구간 안에서 닫히고 유계인 집합'의 공간 (0, 1) 은 출처가 p.281–282 의 문단에서 닫히고 유계이지만 콤팩트가 아닌 예로 드는 공간과 같다. (2)와 관련해 출처 Theorem 7.5.6 의 증명(p.290)은 f(X) 가 닫히고 유계라는 것에서 상한과 하한이 '수열로 다가갈 수 있고 f(X) 가 닫혀 있으므로' f(X) 에 든다고 적는다. 이 항목은 수열을 쓰지 않고 상한의 성질과 열린집합의 정의로 보인다. (3)의 (i)의 집합은 출처 연습문제 7.4.2 b)(p.285, {1/n : n ∈ ℕ} ∪ {0} 은 콤팩트임을 정의로 보이라)와 같은 대상, 같은 결론이다. 출처의 연습문제는 열린 덮개로 보이라고 하고, 이 항목은 닫혀 있고 유계라는 것으로 보인다. (3)의 (ii)의 ℤ 는 출처가 p.282 에서 수열 콤팩트가 아니라고 적는 ℕ ⊆ ℝ 과 비슷한 대상이다. (3)의 (iii)의 (a, b) 는 Example 7.4.8(p.280)이 (0, 1) 에 대해 콤팩트가 아님을 보이는 것과 같은 꼴의 집합이다. 확인 질문 'K 가 콤팩트이고 F 가 닫힌집합이면 K ∩ F 는 콤팩트인가'의 결론은 Proposition 7.4.13(p.284: 콤팩트 집합 K 의 닫힌 부분집합 E 는 콤팩트)과 같은 꼴이다."
  - ref: fuglede-basic-topology
    loc: "Compactness in ℝⁿ 절의 유계의 정의와 Theorem heine-borel, 증명, content/compactness.tex:191–204; Compactness 절의 예 23–31; content/topological-spaces.tex:626"
    checked: original
    note: "출처 Theorem heine-borel(196–199)은 A ⊆ ℝⁿ 이 정확히 닫히고 유계일 때 콤팩트라고 진술한다(유계는 어떤 K > 0 으로 A ⊆ [−K, K]ⁿ, 193). 이 항목의 (1)은 n = 1 인 경우이다. 출처의 증명(200–204)은 콤팩트이면 닫혀 있다는 것을 compact-in-Hausdorff 로, 유계라는 것을 각 k 마다 d(x_k, 0) > k 인 x_k 를 고르는 귀류법으로 보이고, 거꾸로는 [−K, K]ⁿ 의 콤팩트와 닫힌 부분집합으로 보인다. 이 항목은 compact-metric-closed-and-bounded 의 (3)을 쓰고 점을 고르지 않는다. (3)의 (i)의 집합은 출처의 예(26–28)의 X = A ∪ {0} 과 같은 대상이고 결론(콤팩트)도 같다. (3)의 (iii)의 '(0, 1] 은 콤팩트가 아니다'는 출처의 예(29–31)와 같은 결론이고, 같은 예는 (0, 1) 도 콤팩트가 아니라고 적는다. (3)의 (iv)의 집합이 닫혀 있지 않다는 것과 관련해, 출처 content/topological-spaces.tex:626 은 ℚ 의 폐포가 ℝ 이라는 것(ℚ 가 조밀하다)을 보인다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 곳 3군데, 근거 없는 연속 주장, 단원 글의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
$\mathbb{R}$에는 보통 위상([[standard-topology-on-reals]]의 (5))을 주고, $\mathbb{R}$의 부분집합에는 그 부분공간 위상을 준다. 콤팩트 부분집합은 [[compact-space]]의 것이고, 유계는 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (2)에 의해 [[upper-bound-and-supremum]]의 뜻(위로 유계이고 아래로 유계)과 보통 거리로 본 뜻이 같다. 최댓값 $\max K$와 최솟값 $\min K$, 상한과 하한은 [[upper-bound-and-supremum]]의 것이다.

1. (하이네–보렐 정리) $K \subseteq \mathbb{R}$가 $\mathbb{R}$의 콤팩트 부분집합인 것은 정확히 $K$가 $\mathbb{R}$의 닫힌집합이고 유계일 때이다.
2. (최댓값과 최솟값) $K$가 $\mathbb{R}$의 콤팩트 부분집합이고 $K \ne \emptyset$이면 $K$는 최댓값과 최솟값을 갖고, $\max K = \sup K$, $\min K = \inf K$이다.
3. (예)
   - (i) $\{0\} \cup \{n^{-1} : n \in \mathbb{N}\}$은 콤팩트 부분집합이다.
   - (ii) $\mathbb{Z}$는 닫혀 있지만 유계가 아니므로 콤팩트 부분집합이 아니다.
   - (iii) $a < b$이면 $(a, b]$, $[a, b)$, $(a, b)$는 유계이지만 닫혀 있지 않으므로 콤팩트 부분집합이 아니다.
   - (iv) $\{q \in \mathbb{Q} : 0 \le q \le 1\}$은 유계이지만 닫혀 있지 않으므로 콤팩트 부분집합이 아니다.
:::

:::english
$\mathbb{R}$ carries the standard topology ((5) of the entry on the standard topology on the reals), and subsets of $\mathbb{R}$ carry its subspace topology. Compact subsets are as in the entry on open covers and compact spaces, and by (2) of the entry on compact sets in metric spaces, "bounded" in the sense of the entry on upper bounds and suprema (bounded above and bounded below) and in the sense of the standard metric are the same. Maxima $\max K$, minima $\min K$, suprema and infima are as in the entry on upper bounds and suprema.

1. (The Heine–Borel theorem) $K \subseteq \mathbb{R}$ is a compact subset of $\mathbb{R}$ exactly when $K$ is a closed set of $\mathbb{R}$ and is bounded.
2. (Maxima and minima) If $K$ is a compact subset of $\mathbb{R}$ and $K \ne \emptyset$, then $K$ has a maximum and a minimum, and $\max K = \sup K$, $\min K = \inf K$.
3. (Examples)
   - (i) $\{0\} \cup \{n^{-1} : n \in \mathbb{N}\}$ is a compact subset.
   - (ii) $\mathbb{Z}$ is closed but not bounded, so it is not a compact subset.
   - (iii) If $a < b$, then $(a, b]$, $[a, b)$ and $(a, b)$ are bounded but not closed, so they are not compact subsets.
   - (iv) $\{q \in \mathbb{Q} : 0 \le q \le 1\}$ is bounded but not closed, so it is not a compact subset.
:::

## 직관

콤팩트라는 성질은 "모든 열린 덮개에 유한 부분덮개가 있다"여서 직접 확인하기 어렵습니다. 실수에서는 이것이 "닫혀 있고 유계"라는, 하나하나 확인할 수 있는 두 성질과 같아집니다. 한쪽 방향은 거리공간 일반에서 성립하는 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계이다]]입니다. 다른 방향은 실수에만 있는 사실입니다. 유계인 집합은 닫힌구간 하나 안에 들고, [[closed-interval-is-compact|닫힌구간은 콤팩트]]이며, [[closed-subset-of-compact|콤팩트 집합의 닫힌 부분집합은 콤팩트]]입니다. 닫힌구간이 콤팩트라는 데에 최소상계 성질 (U)이 들어 있습니다.

(2)는 해석학 입문에서 상한이 늘 최댓값은 아니었던 것(예컨대 $(0, 1)$의 상한 $1$은 그 집합에 없다)과 대조됩니다. 콤팩트 집합은 닫혀 있으므로 상한을 놓치지 않습니다. 상한 $s$가 $K$ 밖에 있다면 $K$의 바깥이 열린집합이라 $s$ 둘레의 작은 열린구간이 $K$와 만나지 않아야 하는데, 상한보다 조금 작은 수는 상계가 아니므로 그 열린구간 안에 $K$의 원소가 있기 때문입니다.

비유하자면 실수 위의 콤팩트 집합은 "울타리 안에 있고(유계) 경계선까지 제 것으로 갖는(닫힘)" 땅입니다. 울타리가 없으면 $\mathbb{Z}$처럼 끝없이 뻗어 나가고, 경계선이 빠지면 $(0, 1]$의 $0$처럼 다가갈 수는 있지만 닿지 않는 점이 생깁니다. "울타리"가 유계의 정의의 열린 공에, "경계선을 갖는다"가 닫혀 있다는 것에 맞습니다.

## 증명

:::idea
닫히고 유계인 집합을 닫힌구간 $[-r, r]$ 안에 넣어 그 닫힌 부분집합으로 보고, 최댓값은 상한이 닫힌집합의 바깥에 있을 수 없음으로 보인다.
:::

:::hint
(1)의 오른쪽에서 왼쪽은 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (2)의 끝 문장과 [[closed-subset-of-compact]]의 (2)를 씁니다.
:::

:::hint
(2)에서 $s = \sup K$가 $K$에 없다고 합시다. $\mathbb{R} - K$가 열려 있으므로 $(s - r, s + r) \subseteq \mathbb{R} - K$인 $r > 0$이 있습니다. $s - r$은 상계가 아닙니다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "상한 (4)"는 [[upper-bound-and-supremum]]의 번호이다. 보통 위상은 보통 거리의 거리위상이므로, [[closed-set]]의 (6)에 의해 $\mathbb{R}$의 부분집합이 보통 위상에서 닫혀 있는 것과 보통 거리에서 닫혀 있는 것은 같고, [[standard-topology-on-reals]]의 (5)에 의해 열린 것도 같다.

**(1).** $K$가 콤팩트 부분집합이면 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (3)을 $(\mathbb{R}, d)$에 써서 $K$는 닫혀 있고 유계이다.

거꾸로 $K$가 닫혀 있고 유계라 하자. [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (2)에 의해 $K \subseteq [-r, r]$인 실수 $r > 0$이 있다. 순서 성질 (3)의 (ii)와 (W2)에 의해 $-r < 0 < r$이므로 [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $[-r, r]$는 콤팩트 부분집합이다. $K$는 닫힌집합이고 $K = [-r, r] \cap K$이므로, [[closed-subset-of-compact]]의 (2)에 의해 $K$는 콤팩트 부분집합이다.

**(2).** (1)에 의해 $K$는 닫혀 있고 유계이므로 위로 유계이고 아래로 유계이다. $K \ne \emptyset$이므로 [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $s = \sup K$가 있다. $s \in K$임을 보인다. $s \notin K$라 하자. $K$가 닫혀 있으므로 $\mathbb{R} - K$는 보통 거리에서 열린집합이고 $s \in \mathbb{R} - K$이므로, [[open-set-in-metric-space]]의 정의와 [[open-ball]]의 (5)에 의해 $(s - r, s + r) \subseteq \mathbb{R} - K$인 실수 $r > 0$이 있다. 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $s - r < s$이므로, 상한 (4)에 의해 $s - r < x$인 $x \in K$가 있다. $x \le s$이고 $s < s + r$이므로 순서 성질 (1)의 (v)에 의해 $x < s + r$이고, $x \in (s - r, s + r) \subseteq \mathbb{R} - K$이다. 이것은 $x \in K$와 모순이다. 따라서 $s \in K$이고, 상한 (3)에 의해 $s$는 $K$의 최댓값이다.

최솟값: [[infimum-exists|하한의 존재]]의 (4)에 의해 $t = \inf K$가 있다. 위와 같은 논증을 하계에 대해 한다. $t \notin K$라 하면 $(t - r, t + r) \subseteq \mathbb{R} - K$인 $r > 0$이 있고, $t < t + r$이므로 상한 (4)의 하계에 관한 문장에 의해 $x < t + r$인 $x \in K$가 있다. $t \le x$이고 $t - r < t$이므로 $t - r < x$이고, $x \in (t - r, t + r)$이어서 모순이다. 따라서 $t \in K$이고, 상한 (3)에 의해 $t$는 $K$의 최솟값이다.

**(3).** (i) $A = \{n^{-1} : n \in \mathbb{N}\}$, $K = \{0\} \cup A$라 하자. 자연수 $n$에 대하여 순서 성질 (10)에 의해 $0 < n^{-1}$이고, $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 순서 성질 (6)의 (ii)에 의해 $n^{-1} < 1$이다. 따라서 $K$의 원소 $y$는 모두 $0 \le y \le 1$이고 $K$는 유계이다. $K$가 닫혀 있음을 보이려고 $x \in \mathbb{R} - K$에 대하여 $x \in J$이고 $J \cap K = \emptyset$인 열린집합 $J$를 찾는다. 그러면 [[topological-space]]의 (3)에 의해 $\mathbb{R} - K$가 열린집합이다.
- $x < 0$이면 $J = \{y : y < 0\}$으로 둔다. [[open-and-closed-sets-of-reals]]의 (1)에 의해 열린집합이고 $K$의 원소는 $0$ 이상이다.
- $1 < x$이면 $J = \{y : 1 < y\}$로 둔다. 같은 이유로 열린집합이고 $K$의 원소는 $1$ 이하이다.
- $0 \le x \le 1$이면 $x \ne 0$이므로 $0 < x$이다. $t = x^{-1}$이라 하면 [[order-properties-of-reals]]의 (6)에 의해 $1 \le t$이다($x = 1$이면 $t = 1$, $x < 1$이면 (6)의 (ii)로 $1 < t$). [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $m - 1 \le t < m$인 정수 $m$이 있다. $1 \le t < m$이므로 [[prime-number]]의 (Z1)에 의해 $2 \le m$이고 $m - 1$은 자연수이다. $t = m - 1$이면 $x = (m - 1)^{-1} \in A$이어서 $x \notin K$와 모순이므로 $m - 1 < t < m$이고, 순서 성질 (6)의 (ii)에 의해 $m^{-1} < x < (m - 1)^{-1}$이다. $J$를 열린구간 $(m^{-1}, (m - 1)^{-1})$로 둔다. $0 < m^{-1}$이므로 $0 \notin J$이다. 자연수 $n$은 [[well-ordering-principle]]의 (Z5)와 (Z1)에 의해 $n \le m - 1$이거나 $m \le n$이고, 앞의 경우 $(m - 1)^{-1} \le n^{-1}$, 뒤의 경우 $n^{-1} \le m^{-1}$이므로(순서 성질 (6)의 (ii), 같으면 같다) $n^{-1} \notin J$이다. 따라서 $J \cap K = \emptyset$이다.

(1)에 의해 $K$는 콤팩트 부분집합이다.

(ii) $\mathbb{Z}$는 [[open-and-closed-sets-of-reals]]의 (5)에 의해 닫혀 있고, $\mathbb{Z} \subseteq (p - r, p + r)$이면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $p + r < n$인 자연수 $n \in \mathbb{Z}$가 있어 모순이므로 유계가 아니다. (1)에 의해 콤팩트가 아니다.

(iii) 세 집합은 $a$가 하계이고 $b$가 상계이므로 유계이다. $(a, b]$와 $[a, b)$는 [[open-and-closed-sets-of-reals]]의 (3)에 의해, $(a, b)$는 같은 항목의 (4)에 의해 닫혀 있지 않다. (1)에 의해 콤팩트가 아니다.

(iv) $Q = \{q \in \mathbb{Q} : 0 \le q \le 1\}$은 $0$이 하계이고 $1$이 상계이므로 유계이다. [[open-and-closed-sets-of-reals]]의 (6)의 (i)에 의해 $0 < z < 1$인 무리수 $z$가 있고, $z \notin Q$이다. 실수 $r > 0$마다 $u = \max\{z - r, 0\}$, $v = \min\{z + r, 1\}$로 두면 [[absolute-value]]의 (10)과 순서 성질 (3)의 (ii)에 의해 $u < z < v$이고, [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $u < q < v$인 유리수 $q$가 있다. 이 $q$는 $0 \le u < q < v \le 1$이므로 $Q$의 원소이고, $z - r \le u < q < v \le z + r$이므로 $q \in (z - r, z + r) = B(z, r)$이다. 곧 모든 $r > 0$에서 $B(z, r) \cap Q \ne \emptyset$이므로, [[open-set-in-metric-space]]의 (3)에 의해 $Q$는 닫힌집합이 아니다. (1)에 의해 콤팩트가 아니다.
:::

## 예시와 반례

:::example[두 닫힌구간과 유한집합의 합집합]
$K = [0, 1] \cup [2, 3] \cup \{5\}$는 콤팩트 부분집합입니다. 세 집합은 [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1), (2)에 의해 콤팩트이고 [[compact-space]]의 (6)에 의해 합집합도 콤팩트입니다. (1)에 따라 닫혀 있고 유계인지로 보아도 같은 결론입니다. (2)에 의해 $\max K = 5$이고 $\min K = 0$입니다.
:::

:::counterexample[열린구간 안에서 닫히고 유계인 집합]
(1)은 $\mathbb{R}$ 자신의 부분집합에 대한 것입니다. 거리공간 $X = (0, 1)$(보통 거리의 부분공간 거리)에서는 $X$ 자신이 $X$에서 닫혀 있고, $X \subseteq B_X(1/2, 1)$이므로 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 뜻으로 유계입니다. 그러나 [[compact-space]]의 (8)의 (vi)에 의해 $(0, 1)$은 콤팩트가 아닙니다. 그래서 "닫혀 있고 유계이면 콤팩트"는 $\mathbb{R}$의 부분공간인 거리공간에서는 성립하지 않을 수 있고, (1)의 "$\mathbb{R}$의 닫힌집합"을 "어떤 부분공간에서 닫힌 집합"으로 바꿀 수 없습니다.
:::

## 확인 질문

:::check[$K \subseteq \mathbb{R}$가 콤팩트이고 $c$가 실수이면 $\{x + c : x \in K\}$는 콤팩트인가?]
그렇습니다. $g(x) = x + c$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 [[homeomorphism-examples|위상동형의 예]]의 (1)에 의해 연속이고, [[continuous-image-of-compact]]의 (1)에 의해 $g(K) = \{x + c : x \in K\}$는 콤팩트 부분집합입니다. (1)로 보아도 됩니다. 평행이동은 닫혀 있다는 것과 유계라는 것을 모두 지킵니다.
:::

:::check[$K \subseteq \mathbb{R}$가 콤팩트이고 $F \subseteq \mathbb{R}$가 닫힌집합이면 $K \cap F$는 콤팩트인가? (1)로 판정해 보라.]
콤팩트입니다. (1)에 의해 $K$는 닫혀 있고 유계입니다. $K \cap F$는 두 닫힌집합의 교집합이므로 [[closed-set]]의 (2)에 의해 닫혀 있고, 유계인 $K$의 부분집합이므로 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 (1)의 (i)에 의해 유계입니다. (1)에 의해 $K \cap F$는 콤팩트입니다. [[closed-subset-of-compact]]의 (2)와 같은 결론을 실수에서 닫힘과 유계만으로 얻은 것입니다.
:::
