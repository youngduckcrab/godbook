---
title: 콤팩트 거리공간의 수열은 수렴하는 부분수열을 갖는다
title_en: Sequences in Compact Metric Spaces Have Convergent Subsequences
aliases: [콤팩트 거리공간의 수열, 콤팩트이면 수렴하는 부분수열이 있다, compact implies sequentially compact, 서로 떨어진 항의 수열]
kind: theorem
field: topology
msc: ["54E45", "54D30"]
level: undergrad
summary: 콤팩트 공간의 수열에는 모든 근방에 항이 끝없이 드는 점이 있고, 거리공간에서는 그런 점으로 수렴하는 부분수열을 가장 작은 첨자와 재귀 정리로 만든다. 콤팩트 거리공간과 콤팩트 부분집합의 수열은 수렴하는 부분수열을 갖고, 서로 일정한 거리 이상 떨어진 항의 수열은 수렴하는 부분수열을 갖지 않는다. 닫힌구간의 콤팩트성으로 볼차노–바이어슈트라스 정리를 다시 얻는다.
requires: [set, subset, set-operations, function, power-set, family-of-sets, negation-of-quantified-statements, negation-of-conditional, proof-by-contradiction, even-and-odd, prime-number, well-ordering-principle, natural-numbers-are-infinite, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, interval, upper-bound-and-supremum, sequence, limit-of-sequence, limit-is-unique, basic-limits, subsequence, bolzano-weierstrass-theorem, topological-space, neighborhood, topology-examples, standard-topology-on-reals, metric-space, metric-space-examples, open-ball, metric-subspace-topology, sequence-in-a-space, convergence-in-metric-spaces, compact-space, closed-interval-is-compact, compact-metric-closed-and-bounded]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.2소절 Compactness 의 sequentially compact 문단, Lemma 7.4.10 아래 문단, Theorem 7.4.11 (p.282)과 그 증명 (p.283), Example 7.4.12 (p.284), Example 7.4.15 (p.285); 7.4.3소절 연습문제 7.4.2 (p.285), 7.4.8 (p.286); 7.3.4소절 연습문제 7.3.2 (p.277); 2.1.4소절 연습문제 2.1.15, 2.1.16 (p.59–60); 2.3.1소절 Example 2.3.3 (p.74)"
    checked: original
    note: "출처 Theorem 7.4.11(p.282)은 거리공간 X 의 부분집합 K 가 콤팩트인 것이 정확히 K 의 모든 수열이 K 의 점으로 수렴하는 부분수열을 가질 때라고 진술한다. 이 항목은 콤팩트이면 그런 부분수열이 있다는 방향만 (2), (3)으로 싣고 거꾸로의 방향은 싣지 않는다. 출처는 이 성질을 가진 집합을 sequentially compact 라 부르고(p.282) 이 항목은 그 이름을 정의하지 않는다. 출처의 증명(p.283)은 먼저 'K 의 점 x 마다 x_n 이 유한 개의 n 에서만 드는 공 B(x, α_x) 가 있으면 K 는 콤팩트가 아니다'라는 Claim 을 보이고(점마다 반지름 α_x 를 잡는다), 그 대우로 얻은 점 x 에서 B(x, 1/j) 에 드는 항의 첨자 k 를 차례로 잡아 부분수열을 귀납적으로 정의한다. 이 항목의 (1)은 그 대우를 위상공간의 근방으로 진술한 것이고, 증명은 점마다 공을 잡지 않고 '어떤 번호부터 항이 들어오지 않는 집합' 전체의 집합족에 compact-space 의 (1)을 쓴다. '유한 개의 n 에서만'은 이 사이트의 말투인 '어떤 번호 M 부터는 들어오지 않는다'로 바꾸었다. (2)의 (i)의 첨자열은 출처처럼 공 B(p, j⁻¹) 에 드는 항을 쓰되, 조건을 만족하는 가장 작은 첨자를 정렬 원리로 정하고 재귀 정리로 이어 붙인다. 출처의 거꾸로의 방향의 증명(p.283)은 서로 다른 n, k 에서 d(x_n, x_k) ≥ δ 인 수열을 만들고 그 부분수열이 코시 수열이 아니므로 수렴하지 않는다고 적는다. (4)는 같은 결론이고, 이 항목은 코시 수열을 거치지 않고 거리의 삼각부등식으로 보인다. 출처 연습문제 7.4.8(p.286)의 힌트는 서로 다른 n, k 에서 d(f_n, f_k) = 1 인 함수들의 집합이 콤팩트가 아님을 보이라고 하며, (4)의 둘째 문장과 같은 발상이다. 연습문제 7.3.2 c)(p.277)는 거리 min{1, |x − y|} 를 준 ℝ 에서 유계이지만 수렴하는 부분수열이 없는 수열을 찾게 한다. (5)는 출처 Example 7.4.12(p.284)와 방향이 거꾸로이다. 출처는 2장의 볼차노–바이어슈트라스 정리(Theorem 2.3.8)로 [a, b] 의 수열이 [a, b] 의 점으로 수렴하는 부분수열을 갖는다는 것을 보이고, 이 항목은 닫힌구간이 콤팩트라는 것(closed-interval-is-compact)에서 볼차노–바이어슈트라스 정리를 다시 얻는다. 반례 '콤팩트가 아닌 공간에서는 수렴하는 부분수열이 없을 수 있다'의 ℕ ⊆ ℝ 은 출처가 p.282 에서 sequentially compact 가 아니라고 적는 것과 같은 대상이고, 같은 반례의 이산 거리를 준 ℕ 은 출처 Example 7.4.15 (iii)(p.285, 이산 거리의 무한집합에서 콤팩트 부분집합은 유한집합뿐이다)와 같은 결론을 다른 길로 본 것이다. 반례 '콤팩트가 아닌 부분집합에서는 극한이 바깥으로 나갈 수 있다'의 집합은 출처가 p.282 에서 ℝ 에서 닫혀 있지 않다고 적는 (0, 1] 이고, 그 반례와 첫째 확인 질문의 수열 n⁻¹ 의 값의 집합은 출처 연습문제 7.4.2(p.285: A = {1/n : n ∈ ℕ} 이 콤팩트가 아님을 정의로 보이라)의 A 이다. 예시 '두 점으로 다가가는 수열'은 출처 Example 2.3.3(p.74: 홀수 번째 항이 (n + 1)/n, 짝수 번째 항이 0 인 수열의 상극한과 하극한)과 같은 발상(홀짝으로 나눠 두 값으로 다가가는 수열)이고, 홀짝으로 정한 수열의 수렴하는 부분수열을 찾는 것은 연습문제 2.1.15(p.59)와, 극한이 다른 두 부분수열이 있으면 수열이 수렴하지 않는다는 그 예시의 끝 문단은 연습문제 2.1.16(p.60)과 같은 내용이다."
  - ref: fuglede-basic-topology
    loc: "Sequential compactness 소절, content/compactness.tex:131–154 (정의 134–136, Theorem seq-compact-vs-compact 139–146, (i)의 증명 147–154)와 같은 증명의 158–162; Compactness in ℝⁿ 소절의 Theorem Bolzano–Weierstrass, 221–226; Local compactness and one-point compactification 소절의 ℓ^p 명제와 그 증명, 441–458; Compactness 소절의 예, 19–31"
    checked: original
    note: "출처는 위상공간에 sequentially compact 를 정의하고(135), 첫째 가산 공간에서 콤팩트이면 sequentially compact 이고 거리공간에서는 둘이 같다고 진술한다(139–146). 출처의 (i)의 증명(147–154)은 '모든 근방 U 에 x_n ∈ U 인 n 이 무한히 많은 점 x' 가 있는 경우와 없는 경우로 나눈다. 있으면 x 의 가산 기저로 x_{n_k} 를 차례로 고르고, 없으면 점 x 마다 항이 유한 개만 드는 근방 U_x 를 잡아 덮개 {U_x} 의 유한 부분덮개로 모순을 얻는다. 이 항목의 (1)의 점은 출처의 첫째 경우의 점이고 '무한히 많은 n' 을 '모든 M 에 n ≥ M 인 n' 으로 바꾸었다. (1)의 증명은 점마다 U_x 를 잡는 대신 조건으로 정한 열린집합들의 족을 쓴다. 출처는 거리공간의 경우의 증명에서 서로 다른 n, m 에서 d(x_n, x_m) > r 인 수열은 수렴하는 부분수열을 가질 수 없다고 적고(162), ℓ^p 명제의 증명에서 서로 다른 n, m 에서 d_p(y_n, y_m) ≥ ε/2 이므로 수렴하는 부분수열이 없다고 적는다(453–457). (4)는 이 두 곳과 같은 내용이다. 출처의 Bolzano–Weierstrass 정리(222–226)는 ℝⁿ 의 부분집합이 sequentially compact 인 것이 정확히 닫혀 있고 유계일 때라고 하고, 증명은 위의 정리와 하이네–보렐 정리를 합친다. (5)는 n = 1 에서 같은 방향(콤팩트성에서 수열의 성질로)의 결론을 닫힌구간에 대해 얻는다. 출처 Compactness 소절의 예(21, 24, 30)는 ℝ, A = {1/n | n ∈ ℕ}, (0, 1] 이 콤팩트가 아님을 덮개로 보인다. 두 반례의 ℝ 과 (0, 1] 은 같은 대상, 같은 결론을 수열로 본 것이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 넓던 설명 문장 4건, 메모의 틀린 장 번호 1건과 줄 범위 4건, 겹치는 이름표 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 콤팩트 공간과 콤팩트 부분집합은 [[compact-space]]의 것이다. 위상공간의 수열, 그 부분수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 첨자열은 [[subsequence]]의 것이다. 거리공간과 부분공간 거리 $d_K$는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 거리공간에는 거리위상 $\mathcal{T}_d$([[topology-examples]]의 (4))를 주고, 거리공간 $(X, d)$가 **콤팩트**라는 것은 $(X, \mathcal{T}_d)$가 콤팩트 공간이라는 뜻이다.

1. (근방마다 항이 끝없이 드는 점) $(X, \mathcal{T})$가 콤팩트 공간이고 $(x_n)$이 $X$의 수열이면, 다음을 만족하는 점 $p \in X$가 있다. $p$의 모든 근방 $U$와 모든 자연수 $M$에 대하여 $n \ge M$이고 $x_n \in U$인 자연수 $n$이 있다.
2. (거리공간) $(X, d)$가 거리공간이고 $(x_n)$이 $X$의 수열이라 하자.
   - (i) 점 $p \in X$가, 모든 실수 $r > 0$과 모든 자연수 $M$에 대하여 $n \ge M$이고 $d(x_n, p) < r$인 자연수 $n$을 가지면, $(x_n)$의 부분수열 가운데 $p$로 수렴하는 것이 있다. 여기서 $(X, d)$가 콤팩트일 필요는 없다.
   - (ii) $(X, d)$가 콤팩트이면 $(x_n)$의 부분수열 가운데 $X$의 점으로 수렴하는 것이 있다.
3. (콤팩트 부분집합) $(X, d)$가 거리공간이고 $K$가 $X$의 콤팩트 부분집합이며 $(x_n)$이 모든 항이 $K$에 드는 $X$의 수열이면, $(x_n)$의 부분수열 가운데 $K$의 점 $q$로 $(X, d)$에서 수렴하는 것이 있다. 이 부분수열은 부분공간 거리를 준 $(K, d_K)$에서도 $q$로 수렴한다. 또 $(K, d_K)$는 콤팩트 거리공간이다.
4. (서로 떨어진 항) $(X, d)$가 거리공간이고 $(x_n)$이 $X$의 수열이며, 실수 $c > 0$이 있어 $n \ne m$인 모든 자연수 $n$, $m$에서 $d(x_n, x_m) \ge c$라 하자. 그러면 $(x_n)$의 어떤 부분수열도 $X$의 어떤 점으로도 수렴하지 않는다. 따라서 $X$의 부분집합 $K$가 이런 수열의 모든 항을 원소로 가지면 $K$는 $X$의 콤팩트 부분집합이 아니다. 특히 이런 수열이 있는 거리공간 $(X, d)$는 콤팩트가 아니다.
5. (닫힌구간과 볼차노–바이어슈트라스 정리) 실수열, 부분수열, 유계는 [[sequence]], [[subsequence]]의 것이고, 수렴은 [[limit-of-sequence]]의 것이다.
   - (i) $a \le b$인 실수 $a$, $b$에 대하여 모든 자연수 $n$에서 $a \le x_n \le b$인 실수열 $(x_n)$은 $a \le L \le b$인 어떤 실수 $L$로 수렴하는 부분수열을 갖는다.
   - (ii) 유계인 실수열은 수렴하는 부분수열을 갖는다.

   (ii)는 해석학 입문의 [[bolzano-weierstrass-theorem|볼차노–바이어슈트라스 정리]]의 (1)이고, (i)은 그 (2)의 끝 문장이다. 여기서는 그 정리를 쓰지 않고 [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]와 (3)으로 얻는다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, neighborhoods as in the entry on neighborhoods, and compact spaces and compact subsets as in the entry on open covers and compact spaces. Sequences in a topological space, their subsequences and convergence are as in the entry on sequences and convergence in a topological space, and index sequences as in the entry on subsequences. Metric spaces and the subspace metric $d_K$ are as in the entries on metric spaces and their examples, and open balls $B(x, r)$ as in the entry on open balls. Metric spaces carry the metric topology $\mathcal{T}_d$, and a metric space $(X, d)$ is called **compact** when $(X, \mathcal{T}_d)$ is a compact space.

1. (A point whose every neighborhood the terms keep entering) If $(X, \mathcal{T})$ is a compact space and $(x_n)$ is a sequence in $X$, then there is a point $p \in X$ with the following property. For every neighborhood $U$ of $p$ and every natural number $M$ there is a natural number $n$ with $n \ge M$ and $x_n \in U$.
2. (Metric spaces) Let $(X, d)$ be a metric space and $(x_n)$ a sequence in $X$.
   - (i) If a point $p \in X$ is such that for every real number $r > 0$ and every natural number $M$ there is a natural number $n$ with $n \ge M$ and $d(x_n, p) < r$, then some subsequence of $(x_n)$ converges to $p$. Here $(X, d)$ need not be compact.
   - (ii) If $(X, d)$ is compact, then some subsequence of $(x_n)$ converges to a point of $X$.
3. (Compact subsets) If $(X, d)$ is a metric space, $K$ is a compact subset of $X$, and $(x_n)$ is a sequence in $X$ all of whose terms lie in $K$, then some subsequence of $(x_n)$ converges in $(X, d)$ to a point $q$ of $K$. This subsequence also converges to $q$ in $(K, d_K)$ with the subspace metric. Moreover, $(K, d_K)$ is a compact metric space.
4. (Terms kept apart) Let $(X, d)$ be a metric space and $(x_n)$ a sequence in $X$, and suppose there is a real number $c > 0$ with $d(x_n, x_m) \ge c$ for all natural numbers $n \ne m$. Then no subsequence of $(x_n)$ converges to any point of $X$. Consequently, if a subset $K$ of $X$ contains all terms of such a sequence, then $K$ is not a compact subset of $X$. In particular, a metric space $(X, d)$ that has such a sequence is not compact.
5. (Closed intervals and the Bolzano–Weierstrass theorem) Real sequences, subsequences and boundedness are as in the entries on sequences and subsequences, and convergence is as in the entry on limits of sequences.
   - (i) If $a \le b$ are real numbers and $(x_n)$ is a real sequence with $a \le x_n \le b$ for all natural numbers $n$, then $(x_n)$ has a subsequence converging to some real number $L$ with $a \le L \le b$.
   - (ii) Every bounded real sequence has a convergent subsequence.

   (ii) is (1) of the Bolzano–Weierstrass theorem of the analysis course, and (i) is the last sentence of its (2). Here they are obtained without that theorem, from the compactness of closed intervals and (3).
:::

## 직관

수열을 한 여행자가 날마다 머무는 곳으로 생각해 봅시다. $n$번째 날에 머문 곳이 $x_n$입니다. (1)은 공간이 콤팩트이면 "그 둘레의 동네를 아무리 작게 잡아도, 어느 날 이후로든 그 동네에 머무는 날이 다시 오는" 곳 $p$가 있다는 말입니다. 비유의 "동네"가 $p$의 근방이고, "어느 날 이후로든 다시 온다"가 "모든 자연수 $M$에 대하여 $n \ge M$이고 $x_n \in U$인 $n$이 있다"입니다.

그런 곳이 하나도 없다면 모든 점에 "어느 날부터는 다시 오지 않는 동네"가 있습니다. 그런 동네들이 공간 전체를 덮으므로 콤팩트성에 의해 그 가운데 유한 개로 공간이 덮이고, 유한 개의 동네를 모두 어느 날부터 피한다면 그 뒤의 날에 여행자는 공간 어디에도 없어야 합니다. 이것이 모순입니다. 콤팩트라는 가정은 이 "유한 개로 덮인다"에서만 쓰입니다. 이 항목은 동네마다 피하기 시작하는 날을 모아 가장 늦은 날을 잡지 않고, "어느 날부터 피하는 집합" 전체가 공집합을 포함하고 두 집합의 합집합에 닫혀 있다는 것만 보인 뒤 [[compact-space]]의 유한 합집합의 보조정리를 씁니다. 두 집합을 피하기 시작하는 날이 $M_1$, $M_2$이면 $M_1 + M_2$부터는 둘 다 피하기 때문입니다.

거리공간에서는 $p$의 근방으로 반지름 $1, 2^{-1}, 3^{-1}, \dots$인 열린 공을 차례로 씁니다. $j$번째 단계에서는 바로 앞 단계에서 정한 날보다 뒤의 날 가운데, $p$에서 $j^{-1}$보다 가까이 머문 가장 이른 날을 잡습니다. 가장 이른 날은 [[well-ordering-principle|정렬 원리]]에 의해 하나로 정해지므로, 날마다 하나를 고르는 일 없이 [[recursion-theorem|재귀 정리]]가 첨자열을 줍니다. $j$번째로 잡은 날의 항은 $p$에서 $j^{-1}$보다 가까우므로, 잡은 날들의 항은 $p$로 수렴합니다.

(4)는 수렴하는 부분수열이 없다는 것을 보이는 판정입니다. 부분수열이 어떤 점으로 수렴하면 그 뒤쪽 항들은 그 점에서 $c/2$ 안에 모이므로 서로 $c$보다 가까워야 하는데, 첨자가 다른 두 항은 늘 $c$ 이상 떨어져 있습니다. 실수에서는 닫힌구간이 콤팩트이므로 (3)이 해석학 입문의 볼차노–바이어슈트라스 정리를 다시 줍니다((5)). 해석학 입문은 그 정리를 상극한으로 수렴하는 부분수열로 증명했고, 여기서는 닫힌구간의 콤팩트성을 거칩니다.

출처는 거꾸로 거리공간의 부분집합의 모든 수열이 그 집합의 점으로 수렴하는 부분수열을 가지면 그 집합이 콤팩트라는 것도 증명합니다. 그 증명은 점을 차례로 잡아 수열을 만들고, 이 강의는 그 방향을 싣지 않습니다.

## 증명

:::idea
어떤 번호부터 항이 들어오지 않는 집합 전체에 유한 합집합의 보조정리를 써서 (1)의 점을 얻는다. 거리공간에서는 그 점을 중심으로 반지름이 $j^{-1}$인 공에 드는 항의 가장 작은 첨자로 첨자열을 재귀적으로 정한다.
:::

:::hint
(1)은 귀류법으로 보입니다. 그런 점이 없으면 모든 점에 "어떤 번호부터는 항이 들어오지 않는" 근방이 있고, 그런 열린집합 전체가 열린 덮개가 됩니다.
:::

:::hint
(2)의 (i)에서는 $m \ge M$이고 $d(x_m, p) < j^{-1}$인 가장 작은 자연수 $m$을 $h(j, M)$으로 두고, $n_1 = h(1, 1)$, $n_{j+1} = h(j + 1, n_j + 1)$로 첨자열을 정합니다.
:::

:::hint
(4)에서는 부분수열이 $q$로 수렴한다고 하고 $\varepsilon = c/2$에 대한 번호 $M$을 잡은 뒤, 그 부분수열의 $M$번째 항과 $M + 1$번째 항을 비교합니다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "콤팩트 (1)"은 [[compact-space]]의 번호, "재귀 (1)"은 [[recursion-theorem]]의 번호, "수열 (3)"은 [[sequence-in-a-space]]의 번호, "수렴 (1)"은 [[convergence-in-metric-spaces]]의 번호이다. 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 순서에는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰며, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다. 정수의 합과 차는 정수이다([[even-and-odd]]). 실수의 계산에는 [[real-number-arithmetic]]의 (K1)–(K12)를 쓰고 "계산"이라고만 적는다.

**(1).** $\mathscr{P}(X)$의 원소 $S$ 가운데 "자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n \notin S$"를 만족하는 것 전체를 $\mathcal{K}$라 하자. [[family-of-sets]]의 조건으로 정한 부분집합이므로 $\mathcal{K}$는 $X$의 집합족이다. $\mathcal{K}$가 [[compact-space|콤팩트 (1)]]의 가정을 만족함을 보인다.

- $\emptyset \in \mathcal{K}$이다. $M = 1$로 두면 모든 $n$에서 $x_n \notin \emptyset$이다.
- $S, T \in \mathcal{K}$라 하고 각각의 번호를 $M_S$, $M_T$라 하자. $M = M_S + M_T$는 정수이다. (Z1)에 의해 $M_T \ge 1$이므로 (Z7)에 의해 $M \ge M_S + 1$이고, (L3)과 (Z6)에 의해 $M > M_S$이다. 같은 방법으로 $M > M_T$이다. $M_S \ge 1 > 0$((Z1), (Z8))이므로 (Z6)에 의해 $M > 0$, 곧 $M$은 자연수이다. $n \ge M$인 자연수 $n$은 (Z6)에 의해 $n > M_S$이고 $n > M_T$이므로 $x_n \notin S$이고 $x_n \notin T$이며, 따라서 $x_n \notin S \cup T$이다. 그러므로 $S \cup T \in \mathcal{K}$이다.

이제 (1)의 점 $p$가 없다고 하자([[proof-by-contradiction|귀류법]]). 점 $x$가 (1)의 조건을 만족한다는 것은 "모든 $U$에 대하여 ($U$가 $x$의 근방이면 모든 $M$에 대하여 $n \ge M$이고 $x_n \in U$인 $n$이 있다)"이다. [[negation-of-quantified-statements|한정 명제의 부정]]과 [[negation-of-conditional|조건문의 부정]]에 의해, 그런 점이 없다는 것은 모든 $x \in X$에 대하여 "$x$의 근방 $U$와 자연수 $M$이 있어, $n \ge M$인 모든 자연수 $n$에서 $x_n \notin U$"라는 것과 같다. 곧 모든 $x \in X$에 대하여 $x$의 근방 $U$로서 $U \in \mathcal{K}$인 것이 있다.

$\mathcal{V} = \{U \in \mathcal{T} : U \in \mathcal{K}\}$로 둔다. 조건으로 정한 $\mathcal{T}$의 부분집합이므로 $\mathcal{V} \subseteq \mathcal{T}$이고 $\mathcal{V} \subseteq \mathcal{K}$이다. $\mathcal{V}$의 원소는 $X$의 부분집합이므로 $\bigcup \mathcal{V} \subseteq X$이다. $x \in X$이면 위에서 본 $x$의 근방 $U \in \mathcal{K}$는 열린집합이므로([[neighborhood]]의 정의) $U \in \mathcal{V}$이고 $x \in U$이므로 $x \in \bigcup \mathcal{V}$이다. 따라서 $\bigcup \mathcal{V} = X$이고 $\mathcal{V}$는 $X$의 열린 덮개이다. $(X, \mathcal{T})$가 콤팩트이므로 $\mathcal{V}$는 유한 부분덮개 $\mathcal{F}$를 갖는다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이고 $\mathcal{F}$는 유한집합이므로 콤팩트 (1)의 (i)에 의해 $X = \bigcup \mathcal{F} \in \mathcal{K}$이다. 곧 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $x_n \notin X$이고, 특히 $M \ge M$이므로 $x_M \notin X$이다. 그러나 $x$는 $\mathbb{N}$에서 $X$로의 함수이므로 $x_M \in X$이다. 이 모순에 의해 (1)의 점 $p$가 있다.

**(2)의 (i).** 이 증명에서는 [[sequence-in-a-space]]의 (3)처럼 수열을 $(x_m)$으로 쓰고 글자 $n$을 첨자열의 이름으로 쓴다. 가정은 모든 실수 $r > 0$과 모든 자연수 $M$에 대하여 $m \ge M$이고 $d(x_m, p) < r$인 자연수 $m$이 있다는 것이다.

*함수 $h$.* 자연수 $j$, $M$에 대하여, $m \ge M$이고 $d(x_m, p) < j^{-1}$인 자연수 $m$ 전체의 집합을 $T(j, M)$으로 둔다. 순서 성질 (10)에 의해 $0 < j^{-1}$이므로 가정을 $r = j^{-1}$에 쓰면 $T(j, M)$은 공집합이 아니다. [[well-ordering-principle|정렬 원리]]의 2에 의해 $T(j, M)$은 최소 원소를 갖고, 그 1에 의해 최소 원소는 하나뿐이다. 이것을 $h(j, M)$으로 쓴다. 재귀 (1)(정확히 하나임이 증명된 원소를 값으로 쓰는 경우)에 의해 $h : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이다. $h(j, M) \in T(j, M)$이므로 모든 자연수 $j$, $M$에서 다음이 성립한다. 이것을 "$h$의 성질"이라 부른다.
$$
\begin{aligned}
& h(j, M) \ge M \quad \text{이고} \\
& d\bigl(x_{h(j, M)}, p\bigr) < j^{-1}
\end{aligned}
$$

*첨자열 $(n_j)$.* 자연수 $j$, $t$에 대하여 $j + 1$과 $t + 1$은 자연수이므로((L3)과 (Z6)) $g(j, t) = h(j + 1, t + 1)$로 두면 재귀 (1)에 의해 $g : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 함수이다. $h$의 성질과 (L3), (Z6)에 의해 $g(j, t) \ge t + 1 > t$이다. [[recursion-theorem|재귀 정리]]를 집합 $\mathbb{N}$, 처음 값 $h(1, 1)$, 함수 $g$에 쓰면, 함수 $n : \mathbb{N} \to \mathbb{N}$으로서
$$
\begin{aligned}
n_1 &= h(1, 1), \\
n_{j+1} &= g(j, n_j) = h(j + 1, n_j + 1)
\end{aligned}
$$
(둘째 줄은 모든 자연수 $j$에서)인 것이 정확히 하나 있다. 모든 $j$, $t$에서 $g(j, t) > t$이므로 재귀 (4)에 의해 $n$은 순증가이다. 곧 $(n_j)$는 [[subsequence]]의 뜻의 첨자열이고, 수열 (3)에 의해 $(x_{n_j})$는 $(x_m)$의 부분수열이다.

*핵심 부등식.* 모든 자연수 $j$에서 $d(x_{n_j}, p) < j^{-1}$임을 보인다. (Z1)에 의해 $j \ge 1$이고, (Z5)에 의해 $j = 1$이거나 $1 < j$이며, 뒤의 경우 (Z1)에 의해 $j \ge 2$이다.

- $j = 1$이면 $n_1 = h(1, 1)$이므로 $h$의 성질에 의해 $d(x_{n_1}, p) < 1^{-1}$이다.
- $j \ge 2$이면 $i = j - 1$은 (Z7)에 의해 $i \ge 1$인 정수, 곧 자연수이고 $j = i + 1$이다. $n_{i+1} = h(i + 1, n_i + 1)$이므로 $h$의 성질을 $i + 1$과 $n_i + 1$에 쓰면 $d(x_{n_{i+1}}, p) < (i + 1)^{-1}$, 곧 $d(x_{n_j}, p) < j^{-1}$이다.

*수렴.* 양의 실수 $\varepsilon$을 잡는다. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 자연수 $N$이 있어 $N$ 이상인 모든 자연수 $j$에서 $1/j < \varepsilon$이다. 계산에 의해 $1/j = 1 \cdot j^{-1} = j^{-1}$이다. $j \ge N$이면 핵심 부등식과 순서 성질 (1)의 (v)에 의해 $d(x_{n_j}, p) < j^{-1} < \varepsilon$이다. 수렴 (1)에 의해 $(x_{n_j})$는 $p$로 수렴한다. 이 단락에서 $(X, d)$가 콤팩트라는 것은 쓰지 않았다.

**(2)의 (ii).** $(X, \mathcal{T}_d)$가 콤팩트 공간이므로 (1)에 의해 점 $p \in X$가 있어, $p$의 모든 근방 $U$와 모든 자연수 $M$에 대하여 $n \ge M$이고 $x_n \in U$인 자연수 $n$이 있다. 실수 $r > 0$과 자연수 $M$을 잡는다. [[neighborhood]]의 (4)의 (a)에 의해 $B(p, r)$는 $p$의 근방이므로 $n \ge M$이고 $x_n \in B(p, r)$인 자연수 $n$이 있다. 열린 공의 정의에 의해 $d(p, x_n) < r$이고, 거리의 조건 (iii)에 의해 $d(x_n, p) = d(p, x_n) < r$이다. 따라서 $p$는 (i)의 가정을 만족하고, (i)에 의해 $(x_n)$의 부분수열 가운데 $p$로 수렴하는 것이 있다.

**(3).** [[metric-space-examples]]의 (3)에 의해 $(K, d_K)$는 거리공간이고 $K$의 점 $y$, $y'$에서 $d_K(y, y') = d(y, y')$이다. [[metric-subspace-topology]]의 (1)에 의해 $\mathcal{T}_{d_K} = \mathcal{T}_d|_K$이고, $K$가 $(X, \mathcal{T}_d)$의 콤팩트 부분집합이라는 것은 [[compact-space]]의 정의에 의해 $(K, \mathcal{T}_d|_K)$가 콤팩트 공간이라는 것이다. 따라서 $(K, d_K)$는 콤팩트 거리공간이다. 수열 $x : \mathbb{N} \to X$의 모든 값이 $K$에 속하므로 [[function]]의 진술(공역은 선언하기 나름이다)에 의해 같은 집합 $x$는 $\mathbb{N}$에서 $K$로의 함수, 곧 $K$의 수열이다. 이것에 (2)의 (ii)를 쓰면 첨자열 $(n_i)$와 $q \in K$가 있어 $(x_{n_i})$가 $(K, d_K)$에서 $q$로 수렴한다.

수렴 (1)에 의해 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $i \ge M$인 모든 자연수 $i$에서 $d_K(x_{n_i}, q) < \varepsilon$이다. $x_{n_i}$와 $q$는 $K$의 점이므로 $d(x_{n_i}, q) = d_K(x_{n_i}, q) < \varepsilon$이다. 합성 $x \circ n$은 $X$의 수열로 보아도 같은 집합이므로 $(x_{n_i})$는 $X$의 수열 $(x_n)$의 부분수열이고, 수렴 (1)에 의해 $(X, d)$에서 $q$로 수렴한다.

**(4).** $(x_n)$의 어떤 부분수열 $(x_{n_i})$가 점 $q \in X$로 수렴한다고 하자. 순서 성질 (8)에 의해 $0 < c/2$이므로 수렴 (1)에 의해 자연수 $M$이 있어 $i \ge M$인 모든 자연수 $i$에서 $d(x_{n_i}, q) < c/2$이다. $M + 1$은 자연수이고 (L3)에 의해 $M < M + 1$이므로 $i = M$과 $i = M + 1$이 모두 이 범위에 든다. 첨자열의 정의에 의해 $n_M < n_{M+1}$이므로 (Z5)에 의해 $n_M \ne n_{M+1}$이다. $u = x_{n_M}$, $v = x_{n_{M+1}}$로 두면 거리의 삼각부등식과 조건 (iii)에 의해
$$
\begin{aligned}
d(u, v) &\le d(u, q) + d(q, v) \\
&= d(u, q) + d(v, q)
\end{aligned}
$$
이고, 순서 성질 (2)의 (iv)와 계산에 의해 오른쪽은 $c/2 + c/2 = c$보다 작다. 순서 성질 (1)의 (v)에 의해 $d(u, v) < c$이다. 그러나 $n_M \ne n_{M+1}$이므로 가정에 의해 $d(u, v) \ge c$이고, 순서 성질 (1)의 (i)에 의해 두 부등식은 함께 성립하지 않는다. 따라서 $(x_n)$의 어떤 부분수열도 수렴하지 않는다.

둘째 문장: $K$가 $X$의 콤팩트 부분집합이라면 $(x_n)$의 모든 항이 $K$에 들므로 (3)에 의해 $(x_n)$의 부분수열 가운데 $K$의 점으로 수렴하는 것이 있어, 위에서 보인 것과 어긋난다. 따라서 $K$는 콤팩트 부분집합이 아니다. 셋째 문장: $K = X$로 두면 $X$는 $X$의 콤팩트 부분집합이 아니고, [[compact-space]]의 콤팩트 집합 단락에 의해 이것은 $(X, \mathcal{T}_d)$가 콤팩트가 아니라는 뜻이다.

**(5).** $\mathbb{R}$에 보통 거리 $d$를 준다. [[standard-topology-on-reals]]의 (5)에 의해 $\mathcal{T}_d$는 $\mathbb{R}$의 보통 위상이다. 실수열은 [[sequence-in-a-space]]의 수열 단락에 의해 $\mathbb{R}$의 수열이고, 수열 (3)에 의해 그 부분수열은 [[subsequence]]의 부분수열과 같은 것이다.

(i) $K = \{x \in \mathbb{R} : a \le x \le b\}$로 둔다. [[closed-interval-is-compact|닫힌구간이 콤팩트라는 정리]]의 (2)에 의해 $K$는 보통 위상의 $\mathbb{R}$의 콤팩트 부분집합, 곧 거리공간 $(\mathbb{R}, d)$의 콤팩트 부분집합이다. $(x_n)$의 모든 항이 $K$에 들므로 (3)에 의해 $(x_n)$의 부분수열 $(x_{n_i})$와 $L \in K$가 있어 $(x_{n_i})$가 $(\mathbb{R}, \mathcal{T}_d)$에서 $L$로 수렴한다. 수렴 (3)에 의해 $(x_{n_i})$는 [[limit-of-sequence]]의 뜻으로 $L$로 수렴하고, $L \in K$이므로 $a \le L \le b$이다.

(ii) $(x_n)$이 유계이고 $E = \{x_n : n \in \mathbb{N}\}$이 그 값의 집합이라 하자. [[sequence]]의 (3)에 의해 $E$는 [[upper-bound-and-supremum]]의 뜻으로 유계이고, [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (2)에 의해 $E \subseteq [-r, r]$인 실수 $r > 0$이 있다. 따라서 모든 자연수 $n$에서 $-r \le x_n \le r$이고, 순서 성질 (3)의 (ii)와 (1)의 (v)에 의해 $-r < 0 < r$이므로 $-r \le r$이다. (i)을 $a = -r$, $b = r$에 쓰면 $(x_n)$은 수렴하는 부분수열을 갖는다.
:::

## 예시와 반례

:::example[두 점으로 다가가는 수열]
자연수 $n$이 홀수이면 $x_n = n^{-1}$, 짝수이면 $x_n = 1 - n^{-1}$로 정합니다. [[even-and-odd]]에 의해 모든 자연수는 홀수와 짝수 가운데 정확히 하나이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 수열입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고, $n = 1$이면 $n^{-1} = 1$, $n > 1$이면 같은 항목의 (6)의 (ii)에 의해 $n^{-1} < 1$이므로 $0 < n^{-1} \le 1$입니다. 같은 항목의 (3)의 (i)과 (2)의 (ii)에 의해 $0 \le 1 - n^{-1} < 1$입니다. 그래서 모든 항이 $0$ 이상 $1$ 이하이고, (5)의 (i)에 의해 수렴하는 부분수열이 있습니다. 실제로 두 가지를 적을 수 있습니다.

자연수 $i$에 대하여 $2i - 1 = i + (i - 1) \ge i \ge 1$이므로 $i$에서의 값이 $2i - 1$인 함수와 $2i$인 함수는 $\mathbb{N}$에서 $\mathbb{N}$으로의 함수이고, 이웃한 두 값의 차가 $2 > 0$이므로 [[subsequence]]의 (2)에 의해 첨자열입니다. $2i - 1 = 2(i - 1) + 1$은 홀수이므로 $x_{2i-1} = (2i - 1)^{-1}$이고, 이것은 $n$번째 항이 $n^{-1}$인 수열 $(y_n)$의 부분수열입니다. [[basic-limits]]의 (2)에 의해 $(y_n)$은 $0$으로 수렴하므로 [[subsequence]]의 (3)에 의해 $(x_{2i-1})$은 $0$으로 수렴합니다. $2i$는 짝수이므로 $x_{2i} = 1 - (2i)^{-1}$이고 $|x_{2i} - 1| = (2i)^{-1} = |y_{2i} - 0|$입니다. $(y_{2i})$가 $0$으로 수렴하므로 [[limit-of-sequence]]의 정의를 그대로 옮기면 $(x_{2i})$는 $1$로 수렴합니다.

$0 \ne 1$이므로 (5)가 주는 극한은 하나로 정해지지 않을 수 있습니다. 또 $(x_n)$ 자신은 수렴하지 않습니다. 수렴한다면 그 극한을 $L$이라 할 때 [[subsequence]]의 (3)에 의해 두 부분수열이 모두 $L$로 수렴하고, [[limit-is-unique]]에 의해 $L = 0$이고 $L = 1$이어야 하기 때문입니다.
:::

:::counterexample[콤팩트가 아닌 공간에서는 수렴하는 부분수열이 없을 수 있다]
보통 거리의 $\mathbb{R}$에서 $n$번째 항이 $n$인 수열을 봅시다. 서로 다른 자연수 $n$, $m$에 대하여 [[well-ordering-principle]]의 (Z5)에 의해 $n < m$이거나 $m < n$입니다. $n < m$이면 [[prime-number]]의 (Z1)에 의해 $m \ge n + 1$이므로 $m - n \ge 1$이고, [[absolute-value]]의 정의에 의해 $|n - m| = |m - n| = m - n \ge 1$입니다. $m < n$이면 같은 방법으로 $n - m \ge 1$이고 $|n - m| = n - m \ge 1$입니다. 따라서 $c = 1$로 (4)의 가정이 성립하고, 이 수열의 어떤 부분수열도 수렴하지 않으며 $\mathbb{R}$은 콤팩트가 아닙니다. 이것은 [[compact-space]]의 (8)의 (vi)과 맞습니다.

같은 집합 $\mathbb{N}$에 이산 거리([[metric-space-examples]]의 (2))를 주어도, $n \ne m$이면 거리가 $1$이므로 $n$번째 항이 $n$인 수열에 (4)를 쓸 수 있습니다. 그래서 이산 거리를 준 $\mathbb{N}$은 콤팩트가 아닙니다. 이것은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (4)와 같은 결론을 다른 길로 얻은 것입니다.
:::

:::counterexample[콤팩트가 아닌 부분집합에서는 극한이 바깥으로 나갈 수 있다]
$K = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리 $d_K$를 주고, $n$번째 항이 $n^{-1}$인 수열 $(y_n)$을 $K$의 수열로 봅시다(위 예시와 같이 $0 < n^{-1} \le 1$). 이 수열의 어떤 부분수열도 $(K, d_K)$의 점으로 수렴하지 않습니다. 부분수열 $(y_{n_i})$가 $(K, d_K)$에서 $q \in K$로 수렴한다면, [[metric-space-examples]]의 (3)에 의해 $K$의 두 점 사이의 $d_K$의 값은 보통 거리의 값과 같으므로 [[convergence-in-metric-spaces]]의 (1)을 두 번 쓰고 (3)을 쓰면 $(y_{n_i})$는 해석학 입문의 뜻으로 $q$로 수렴합니다. 한편 [[basic-limits]]의 (2)와 [[subsequence]]의 (3)에 의해 $(y_{n_i})$는 $0$으로 수렴하므로 [[limit-is-unique]]에 의해 $q = 0$인데, $0 \notin K$입니다.

그래서 (3)에 의해 $K$는 $\mathbb{R}$의 콤팩트 부분집합이 아닙니다. 모든 항이 $K$에 드는 수열의 부분수열이 $\mathbb{R}$에서는 수렴해도, 그 극한이 $K$ 밖에 있을 수 있습니다. (3)이 "$K$의 점으로" 수렴한다고 말하는 것이 콤팩트성이 주는 것입니다.
:::

## 확인 질문

:::check[거리공간의 수열에서 항이 모두 서로 다르기만 하면(곧 $n \ne m$이면 $x_n \ne x_m$이면) 수렴하는 부분수열이 없는가?]
그렇지 않습니다. 보통 거리의 $\mathbb{R}$에서 $n$번째 항이 $n^{-1}$인 수열은, $n < m$이면 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $m^{-1} < n^{-1}$이므로 항이 모두 서로 다릅니다. 그러나 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 이 수열은 $0$으로 수렴하고, [[subsequence]]의 (4)에 의해 수열 자신이 수렴하는 부분수열입니다. 항이 서로 다르면 두 항의 거리는 쌍마다 양수이지만, (4)는 모든 쌍에 공통인 양수 $c$를 요구합니다. 이 수열에는 수렴하는 부분수열이 있으므로 (4)에 의해 그런 $c$가 없습니다.
:::

:::check[유한집합 $X$에 이산 거리를 주면, $X$의 모든 수열 $(x_n)$에 대하여 어떤 점 $p$가 있어 모든 자연수 $M$에 $n \ge M$이고 $x_n = p$인 $n$이 있는가?]
그렇습니다. [[compact-space]]의 (8)의 (ii)에 의해 유한집합 $X$는 어떤 위상으로도 콤팩트이므로 (1)의 점 $p$가 있습니다. [[topology-examples]]의 (5)에 의해 이산 거리의 거리위상은 이산위상이고, [[neighborhood]]의 (5)에 의해 $\{p\}$는 $p$의 근방입니다. (1)을 $U = \{p\}$에 쓰면 모든 자연수 $M$에 $n \ge M$이고 $x_n \in \{p\}$, 곧 $x_n = p$인 $n$이 있습니다. 유한 개의 값만 갖는 수열에서는 어떤 값이 끝없이 되풀이된다는 것을, 값마다 되풀이 횟수를 세지 않고 얻은 셈입니다.
:::
