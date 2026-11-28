---
title: 적분가능하면 균등 분할로 상합과 하합의 차가 0 으로 간다
title_en: Uniform Partitions Suffice for Riemann Integrability
aliases: [균등 분할의 다르부 합, 균등 분할로 하는 적분, uniform partitions suffice, Darboux sums of uniform partitions]
kind: theorem
field: measure-theory
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 의 n등분 균등 분할 P_n 에 대한 하합과 상합은 하적분과 상적분으로 수렴한다. 따라서 f 가 리만 적분가능한 것은 정확히 P_n 의 상합과 하합의 차가 0 으로 수렴할 때이고, 그때 하합과 상합은 적분으로 수렴한다. 분할 하나와 비교하는 부등식, 2ⁿ등분의 단조성과 작은 구간끼리의 포함, '차가 ε 보다 작은 가장 작은 번호', 상합과 하합의 차가 큰 작은 구간의 길이의 합을 누르는 부등식을 함께 진술한다."
requires: [set, subset, set-operations, mathematical-induction, archimedean-property, finite-set, adding-or-removing-an-element, subset-of-finite-set, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, real-valued-function, bounded-function, upper-bound-and-supremum, supremum-of-function-values, sequence, limit-of-sequence, finite-sum-of-reals, linearity-and-order-of-finite-sums, interval, partition-of-an-interval, refinement-of-a-partition, uniform-partition, darboux-sums, refinement-and-darboux-sums, riemann-integral, integrability-criterion]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "1장 The problem of integration, 분할의 norm ∥P∥ 의 정의 (p.10); 5.4절 Lemma 5.36 의 증명 첫 줄과 식 (5.2), (5.3) (p.150–151); 5.5절 Exercise 5.38 과 그 힌트 (p.161)"
    checked: original
    note: "출처의 Exercise 5.38(p.161)은 [a, b] 위의 0 이상인 유계함수 f 와 ∥P_k∥ → 0 인 분할열 (P_k) 에 대해 하합의 극한이 하적분, 상합의 극한이 상적분임을 보이라는 연습문제이고(f 의 적분가능을 가정하지 않는다), 힌트는 상합이 상적분에 ε 보다 가까운 분할 P = {t_0, …, t_n} 을 하나 잡고 ∥P_k∥ 가 P 의 가장 짧은 작은 구간보다 짧아지면 상합에 대해 S̄(f, P_k) < S̄(f, P) + nB∥P_k∥ (B 는 |f| 의 상한)를 보이라고 적는다. 이 항목의 (2)의 (i)과 (3)은 이 연습문제를 균등 분할로 좁히고 f 의 부호를 가정하지 않은 꼴이며, (2)의 부등식은 점을 하나씩 더하는 귀납((1))으로 증명했다(출처의 힌트와 달리 P_n 의 작은 구간이 P 의 것보다 짧을 것을 가정하지 않는다). ∥P∥ 는 출처 1장(p.10)이 max{x_i − x_{i−1}} 로 정의하는 분할의 norm 이고, Lemma 5.36 의 증명은 P_k ⊂ P_{k+1}, ∥P_k∥ → 0 인 분할열을 잡고(p.150), 식 (5.2)(p.150)와 (5.3)(p.151)에서 하합의 극한이 하적분, 상합의 극한이 상적분이라는 것을 Exercise 5.38 로 돌려 쓴다. 이름 '메시(mesh)'는 이 출처와 lebl-basic-analysis, lebl-basic-analysis-2, blackstone-mikusinski-daniell-integral 의 텍스트에서 'mesh' 로 찾았을 때 나오지 않는다(0건씩). 이 출처는 같은 값을 norm 이라 부른다."
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.4 소절) 연습문제 5.1.11 (p.189), 연습문제 5.1.12 (p.190); 5.1절(5.1.2 소절) Example 5.1.12 (p.186–187), Proposition 5.1.13 (p.187)
    checked: original
    note: "출처 연습문제 5.1.12(p.190, Challenging)는 f 가 리만 적분가능한 것이 정확히 모든 ε 에 δ 가 있어 모든 Δx_i < δ 인 분할 P 에서 L(P, f) 와 U(P, f) 가 어떤 수 I 와 ε 보다 가깝다는 것일 때임을 보이라는 물음으로, 이 항목의 (4), (5)를 작은 구간의 길이 일반으로 넓힌 꼴이다. 연습문제 5.1.11(p.189)은 [0, 1] 의 균등 분할의 오른쪽 끝점으로 만든 합 R_n 이 적분가능한 f 에서 적분으로 수렴함을 보이라는 물음이다. 판정의 다른 방향(분할 하나로 충분하다)은 출처의 Proposition 5.1.13(p.187)이고, 이 사이트에서는 integrability-criterion 의 (1), (6)이다. 이 항목의 (5)의 한 방향은 그 (6)을 인용한다. 예시 '계단 하나인 함수의 균등 분할'은 출처 Example 5.1.12(p.186–187, [0, 2] 에서 1 에서 한 번 뛰는 함수를 분할 {0, 1 − ε, 1 + ε, 2} 로 재어 상합과 하합의 차가 뛰는 점을 품는 작은 구간 하나에서만 생긴다는 것)와 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: 10.4절(10.4.2 소절) Theorem 10.4.3 의 증명 (p.120)
    checked: original
    note: "출처는 Theorem 10.4.3 의 증명의 둘째 방향(p.120)에서 U(P, f) − L(P, f) < ε 인 분할의 작은 직사각형 가운데 안쪽이 S_{1/k} 와 만나는 것들은 M_j − m_j ≥ 1/k 이므로 그 부피의 합이 kε 보다 작다고 적는다. 이 항목의 (7)은 같은 발상의 부등식을 '차가 r 이상인 작은 구간'으로 진술한 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b]$의 분할과 그 점, 작은 구간, 길이는 [[partition-of-an-interval]]의 것이고, 세분은 [[refinement-of-a-partition]]의 것이며, $n$등분 균등 분할 $P_n$과 $h_n = (b - a)/n$은 [[uniform-partition]]의 것이다. 다르부 합 $L(P, f)$, $U(P, f)$와 $m_i$, $M_i$는 [[darboux-sums]]의 것이고, 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$는 [[lower-and-upper-integrals]]의 것이며, 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이다. 원소의 개수는 [[finite-set]]의 것이고, 수열과 그 수렴은 [[sequence]], [[limit-of-sequence]]의 것이며, 거듭제곱 $2^n$은 [[power-of-a-real-number]]의 것이다. 유한 합과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고 $f : [a, b] \to \mathbb{R}$는 유계이며, $P_n$은 $[a, b]$의 $P_n$이다.

1. (균등 분할의 세분) $n$을 자연수, $Q$를 $P_n$의 세분이라 하고, $Q - P_n$이 원소를 $d$개 갖는다고 하자. 그러면
   - (i) $Q$의 모든 작은 구간의 길이는 $h_n$ 이하이다.
   - (ii) 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족하면
     $$
     \begin{aligned}
     0 &\le U(P_n, f) - U(Q, f) \\
     &\le 2Bd\,h_n, \\
     0 &\le L(Q, f) - L(P_n, f) \\
     &\le 2Bd\,h_n
     \end{aligned}
     $$
     이다.
2. (분할 하나와 비교하기) 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족하고, $P$가 원소를 $p + 1$개 갖는 $[a, b]$의 분할이라 하자($p \ge 1$). 그러면 모든 자연수 $n$에서 다음이 성립한다.
   - (i) $U(P_n, f) \le U(P, f) + 2B(p - 1)h_n$이고 $L(P, f) - 2B(p - 1)h_n \le L(P_n, f)$이다.
   - (ii) 상합과 하합의 차는
     $$
     \begin{aligned}
     &U(P_n, f) - L(P_n, f) \\
     &\quad \le U(P, f) - L(P, f) \\
     &\qquad + 4B(p - 1)h_n
     \end{aligned}
     $$
     이다.
3. (하적분과 상적분으로) $n$번째 항이 $L(P_n, f)$인 수열은 하적분 $\underline{\int_a^b} f$로, $U(P_n, f)$인 수열은 상적분 $\overline{\int_a^b} f$로 수렴한다. $f$가 적분가능하지 않아도 된다.
4. (적분가능하면) $f$가 적분가능하다고 하자.
   - (i) 모든 양수 $\varepsilon$에 대하여 자연수 $N$이 있어, $N \le n$인 모든 자연수 $n$에서 $U(P_n, f) - L(P_n, f) < \varepsilon$이다.
   - (ii) 그런 $n$에서 $0 \le U(P_n, f) - \int_a^b f < \varepsilon$이고 $0 \le \int_a^b f - L(P_n, f) < \varepsilon$이다.
   - (iii) $n$번째 항이 $L(P_n, f)$인 수열과 $U(P_n, f)$인 수열은 $\int_a^b f$로 수렴하고, $n$번째 항이 $U(P_n, f) - L(P_n, f)$인 수열은 $0$으로 수렴한다.
5. (판정) $f$가 적분가능한 것은 정확히 $n$번째 항이 $U(P_n, f) - L(P_n, f)$인 수열이 $0$으로 수렴할 때이다.
6. ($2^n$등분) 모든 자연수 $n$에서 $2^n$은 자연수이고 $n \le 2^n$이다.
   - (i) 자연수 $k$, $n$이 $k \le n$이면 $P_{2^n}$은 $P_{2^k}$의 세분이고
     $$
     \begin{aligned}
     &L(P_{2^k}, f) \le L(P_{2^n}, f), \\
     &U(P_{2^n}, f) \le U(P_{2^k}, f), \\
     &U(P_{2^n}, f) - L(P_{2^n}, f) \\
     &\quad \le U(P_{2^k}, f) - L(P_{2^k}, f)
     \end{aligned}
     $$
     이다.
   - (ii) $f$가 적분가능하면 $n$번째 항이 $L(P_{2^n}, f)$인 수열과 $U(P_{2^n}, f)$인 수열은 $\int_a^b f$로 수렴한다. 또 모든 양수 $\varepsilon$에 대하여 집합 $A_\varepsilon = \{n \in \mathbb{N} : U(P_{2^n}, f) - L(P_{2^n}, f) < \varepsilon\}$은 공집합이 아니므로 최소 원소 $k$를 갖고, $A_\varepsilon = \{n \in \mathbb{N} : k \le n\}$이다. 이 $k$는 $a$, $b$, $f$, $\varepsilon$만으로 정해진다.
   - (iii) 자연수 $k$, $n$이 $k \le n$이고 $K = 2^{n-k}$라 하자. $1 \le j \le 2^n$인 정수 $j$마다 $(i - 1)K < j \le iK$인 정수 $i$가 정확히 하나 있다. 이 $i$는 $i - 1 \le (j - 1)/K < i$인 정수, 곧 $(j - 1)/K$ 이하인 가장 큰 정수에 $1$을 더한 것이고, $1 \le i \le 2^k$이다. 그리고 $P_{2^n}$의 $j$번째 작은 구간은 $P_{2^k}$의 $i$번째 작은 구간의 부분집합이다. 따라서 $P_{2^n}$의 작은 구간은 모두 $P_{2^k}$의 한 작은 구간 안에 든다.
7. (차가 큰 작은 구간의 길이) $Q$를 점이 $y_0, \dots, y_q$인 $[a, b]$의 분할, $m_i$, $M_i$를 $Q$와 $f$의 것이라 하고 $r$을 양수라 하자. $1 \le i \le q$인 정수 $i$마다 $M_i - m_i \ge r$이면 $t_i = \Delta y_i$, 아니면 $t_i = 0$으로 둔다. 그러면
   - (i) $0 \le \sum_{i=1}^{q} t_i$이고 $r \sum_{i=1}^{q} t_i \le U(Q, f) - L(Q, f)$이다.
   - (ii) 양수 $\eta$에 대하여 $U(Q, f) - L(Q, f) < r\eta$이면 $\sum_{i=1}^{q} t_i < \eta$이다.
:::

:::english
Partitions of $[a, b]$, their points, subintervals and lengths are as in the entry on partitions of an interval, refinements as in the entry on refinements, and the uniform partition $P_n$ into $n$ parts with $h_n = (b - a)/n$ as in the entry on uniform partitions. The Darboux sums $L(P, f)$, $U(P, f)$ and $m_i$, $M_i$ are as in the entry on Darboux sums, the lower and upper integrals as in the entry on them, and Riemann integrability and $\int_a^b f$ as in the entry on the Riemann integral. The number of elements, sequences and their convergence, the power $2^n$, finite sums and sums of terms defined only on a range are as defined earlier. Below, $a < b$ are real numbers, $f : [a, b] \to \mathbb{R}$ is bounded, and $P_n$ is the $P_n$ of $[a, b]$.

1. (Refinements of a uniform partition) Let $n$ be a natural number, let $Q$ be a refinement of $P_n$, and suppose $Q - P_n$ has $d$ elements. Then
   - (i) every subinterval of $Q$ has length at most $h_n$;
   - (ii) if a real number $B$ satisfies $|f(x)| \le B$ for all $x \in [a, b]$, then
     $$
     \begin{aligned}
     0 &\le U(P_n, f) - U(Q, f) \\
     &\le 2Bd\,h_n, \\
     0 &\le L(Q, f) - L(P_n, f) \\
     &\le 2Bd\,h_n.
     \end{aligned}
     $$
2. (Comparison with one partition) Let $B$ be a real number with $|f(x)| \le B$ for all $x \in [a, b]$, and let $P$ be a partition of $[a, b]$ with $p + 1$ elements ($p \ge 1$). Then for every natural number $n$ the following hold.
   - (i) $U(P_n, f) \le U(P, f) + 2B(p - 1)h_n$ and $L(P, f) - 2B(p - 1)h_n \le L(P_n, f)$.
   - (ii) For the difference of the upper and lower sums,
     $$
     \begin{aligned}
     &U(P_n, f) - L(P_n, f) \\
     &\quad \le U(P, f) - L(P, f) \\
     &\qquad + 4B(p - 1)h_n.
     \end{aligned}
     $$
3. (To the lower and upper integrals) The sequence whose $n$th term is $L(P_n, f)$ converges to the lower integral $\underline{\int_a^b} f$, and the sequence whose $n$th term is $U(P_n, f)$ converges to the upper integral $\overline{\int_a^b} f$. Here $f$ need not be integrable.
4. (If $f$ is integrable) Suppose $f$ is integrable.
   - (i) For every $\varepsilon > 0$ there is a natural number $N$ such that $U(P_n, f) - L(P_n, f) < \varepsilon$ for every natural number $n \ge N$.
   - (ii) For such $n$, $0 \le U(P_n, f) - \int_a^b f < \varepsilon$ and $0 \le \int_a^b f - L(P_n, f) < \varepsilon$.
   - (iii) The sequences whose $n$th terms are $L(P_n, f)$ and $U(P_n, f)$ converge to $\int_a^b f$, and the sequence whose $n$th term is $U(P_n, f) - L(P_n, f)$ converges to $0$.
5. (Criterion) $f$ is integrable if and only if the sequence whose $n$th term is $U(P_n, f) - L(P_n, f)$ converges to $0$.
6. (Division into $2^n$ parts) For every natural number $n$, $2^n$ is a natural number and $n \le 2^n$.
   - (i) If $k \le n$ are natural numbers, then $P_{2^n}$ is a refinement of $P_{2^k}$ and
     $$
     \begin{aligned}
     &L(P_{2^k}, f) \le L(P_{2^n}, f), \\
     &U(P_{2^n}, f) \le U(P_{2^k}, f), \\
     &U(P_{2^n}, f) - L(P_{2^n}, f) \\
     &\quad \le U(P_{2^k}, f) - L(P_{2^k}, f).
     \end{aligned}
     $$
   - (ii) If $f$ is integrable, the sequences whose $n$th terms are $L(P_{2^n}, f)$ and $U(P_{2^n}, f)$ converge to $\int_a^b f$. Moreover, for every $\varepsilon > 0$ the set $A_\varepsilon = \{n \in \mathbb{N} : U(P_{2^n}, f) - L(P_{2^n}, f) < \varepsilon\}$ is nonempty, so it has a least element $k$, and $A_\varepsilon = \{n \in \mathbb{N} : k \le n\}$. This $k$ is determined by $a$, $b$, $f$ and $\varepsilon$ alone.
   - (iii) Let $k \le n$ be natural numbers and $K = 2^{n-k}$. For each integer $j$ with $1 \le j \le 2^n$ there is exactly one integer $i$ with $(i - 1)K < j \le iK$. This $i$ is the integer with $i - 1 \le (j - 1)/K < i$, that is, one plus the largest integer not exceeding $(j - 1)/K$, and $1 \le i \le 2^k$. The $j$th subinterval of $P_{2^n}$ is a subset of the $i$th subinterval of $P_{2^k}$. Hence every subinterval of $P_{2^n}$ lies in a subinterval of $P_{2^k}$.
7. (Lengths of subintervals with a large difference) Let $Q$ be a partition of $[a, b]$ with points $y_0, \dots, y_q$, let $m_i$, $M_i$ be those of $Q$ and $f$, and let $r > 0$. For each integer $i$ with $1 \le i \le q$, put $t_i = \Delta y_i$ if $M_i - m_i \ge r$ and $t_i = 0$ otherwise. Then
   - (i) $0 \le \sum_{i=1}^{q} t_i$ and $r \sum_{i=1}^{q} t_i \le U(Q, f) - L(Q, f)$;
   - (ii) if $\eta > 0$ and $U(Q, f) - L(Q, f) < r\eta$, then $\sum_{i=1}^{q} t_i < \eta$.
:::

## 직관

[[integrability-criterion|리만 적분가능성의 판정]]은 적분가능한 함수마다 상합과 하합의 차가 작은 분할이 "어딘가에" 있다고 말합니다. 그 분할은 함수에 맞춰 불연속점 둘레만 잘게 자른 것일 수 있습니다. 이 항목은 아무 함수에나 같은 모양으로 자르는 균등 분할만으로도 충분하다는 것을 보입니다.

까닭은 (2)의 부등식입니다. 잘 맞춘 분할 $P$의 점을 $P_n$에 하나 더할 때마다 상합은 늘지 않고 하합은 줄지 않습니다. 그 변화는 점이 떨어진 작은 구간 하나에서만 일어나고, 그 구간의 길이가 $h_n$ 이하이며 함숫값이 $-B$와 $B$ 사이에 있으므로 변화량은 많아야 $2Bh_n$입니다((1)). $P_n$에 없는 $P$의 점은 $a$, $b$가 아니므로 많아야 $p - 1$개이고, 그래서 $P_n$은 $P \cup P_n$보다 상합과 하합의 차가 많아야 $4B(p - 1)h_n$ 클 뿐이고, $P \cup P_n$은 $P$보다 차가 크지 않습니다. $n$을 키우면 이 덧붙는 몫을 원하는 만큼 작게 할 수 있습니다.

분할의 작은 구간 가운데 가장 긴 것의 길이를 그 분할의 **메시**(mesh)라 부르기도 하고, 이 강의의 출처인 Sandoval-Romero 등의 강의록은 같은 값을 분할의 norm $\|P\|$이라 부릅니다. 이 항목은 메시를 정의하지 않고 균등 분할만 다룹니다. $P_n$의 작은 구간은 모두 길이가 $h_n$이고([[uniform-partition|균등 분할]]의 (1)), $P_n$의 세분의 작은 구간은 길이가 $h_n$ 이하입니다((1)의 (i)).

## 증명

:::idea
(1)은 $Q - P_n$의 원소의 개수에 대한 귀납으로, 점 하나를 더할 때의 [[refinement-and-darboux-sums]]의 (1)의 등식에 $|f| \le B$를 넣는다. (2)는 $R = P \cup P_n$에 (1)을 쓰고 $R$과 $P$를 비교한다. (3)과 (4)는 상합이 상적분에 가깝거나 차가 작은 분할 $P$ 하나를 잡고 (2)의 덧붙는 몫을 $h_n$으로 작게 한다.
:::

:::hint
점 $y$를 $Q'$의 $k$번째 작은 구간 $[z_{k-1}, z_k]$에 더하면 상합의 감소량은 $(M_k - M')(y - z_{k-1}) + (M_k - M'')(z_k - y)$이고, 괄호 안은 모두 $0$ 이상 $2B$ 이하이다.
:::

:::hint
$P \cup P_n$의 점 가운데 $P_n$에 없는 것은 모두 $P$의 점이고 $a$, $b$가 아니다.
:::

:::proof
실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다루며, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽는다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). "분할 ($k$)", "세분 ($k$)", "균등 ($k$)", "다르부 ($k$)", "세분과 합 ($k$)"은 각각 [[partition-of-an-interval]], [[refinement-of-a-partition]], [[uniform-partition]], [[darboux-sums]], [[refinement-and-darboux-sums]]의 번호이다.

**작은 사실.** 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족하면 $0 \le |f(a)| \le B$이므로 $0 \le B$이고, [[absolute-value]]의 (7)에 의해 모든 $x$에서 $-B \le f(x) \le B$이다. 따라서 $c < d$, $[c, d] \subseteq [a, b]$, $u \in [c, d]$이면 [[supremum-of-function-values]]의 첫 목록 둘째·넷째 줄과 [[upper-bound-and-supremum]]의 상한·하한의 정의($-B$는 $f([c, d])$의 하계, $B$는 상계)에 의해
$$
\begin{aligned}
-B &\le \inf f([c, d]) \le f(u) \\
&\le \sup f([c, d]) \le B
\end{aligned}
$$
이다. 이것을 (가)라 부른다.

**1의 증명.** 세분 (1)에 의해 $Q - P_n$은 유한집합이므로 $d$는 $0$ 이상인 정수이다. $0$ 이상인 정수 $d$에 대한 명제 $S(d)$를 "$Q - P_n$이 원소를 $d$개 갖는 $P_n$의 모든 세분 $Q$에서 (i)과 (ii)가 성립한다"로 두고 [[mathematical-induction|수학적 귀납법]]으로 보인다.

$d = 0$이면 세분 (1)에 의해 $Q = P_n$이다. 균등 (1)에 의해 모든 작은 구간의 길이는 $h_n$이고, (ii)의 네 차는 모두 $0$이며 $2B \cdot 0 \cdot h_n = 0$이다.

$S(d)$가 참이라 하고 $Q - P_n$이 원소를 $d + 1$개 갖는 세분 $Q$를 생각하자. $d + 1 \ge 1$이므로 $Q \ne P_n$이고(세분 (1)), 세분 (4)에 의해 $Q - P_n$의 원소 $y$가 있으며, $Q' = Q - \{y\}$는 $P_n$의 세분이고 $Q' - P_n$은 원소를 $d$개 가지며, $y \in [a, b] - Q'$이고 $Q = Q' \cup \{y\}$이다. 귀납 가정에 의해 $Q'$에서 (i), (ii)가 성립한다. $Q'$의 점을 $z_0, \dots, z_s$라 하고, 세분 (3)의 (i)에 의해 $z_{k-1} < y < z_k$인 정수 $k$를 잡는다.

(i) 세분 (3)의 (iii)에 의해 $Q$의 작은 구간은 $Q'$의 작은 구간이거나 $[z_{k-1}, y]$, $[y, z_k]$이다. 앞의 것은 귀납 가정에 의해 길이가 $h_n$ 이하이다. 뒤의 두 구간의 길이 $y - z_{k-1}$, $z_k - y$는 양수이고 합이 $z_k - z_{k-1}$이므로 각각 $z_k - z_{k-1}$보다 작으며, $z_k - z_{k-1}$은 $Q'$의 작은 구간의 길이이므로 $h_n$ 이하이다.

(ii) $Q'$과 $f$의 $k$번째 값을 $M_k$, $m_k$라 하고 세분과 합 (1)의 $m'$, $m''$, $M'$, $M''$을 쓰면
$$
\begin{aligned}
&U(Q', f) - U(Q, f) \\
&\quad = (M_k - M')(y - z_{k-1}) \\
&\qquad + (M_k - M'')(z_k - y)
\end{aligned}
$$
이고 $M' \le M_k$, $M'' \le M_k$이다. (가)에 의해 $M_k \le B$이고, $y \in [z_{k-1}, y]$이므로 $-B \le M'$, $y \in [y, z_k]$이므로 $-B \le M''$이다. 따라서 $0 \le M_k - M' \le 2B$, $0 \le M_k - M'' \le 2B$이고, $y - z_{k-1}$과 $z_k - y$가 양수이므로([[order-properties-of-reals]]의 (4)의 (iii))
$$
\begin{aligned}
0 &\le U(Q', f) - U(Q, f) \\
&\le 2B(y - z_{k-1}) + 2B(z_k - y) \\
&= 2B(z_k - z_{k-1}) \le 2Bh_n
\end{aligned}
$$
이다. 마지막 부등식은 $0 \le B$와 귀납 가정의 (i)에서 나온다. 같은 방법으로 세분과 합 (1)의 하합의 등식과 $m_k \le m'$, $m_k \le m''$, (가)에서 나온 $-B \le m_k$, $m' \le f(y) \le B$, $m'' \le f(y) \le B$에 의해 $0 \le L(Q, f) - L(Q', f) \le 2Bh_n$이다. 귀납 가정의 (ii)와 더하면
$$
\begin{aligned}
&U(P_n, f) - U(Q, f) \\
&\quad = \bigl(U(P_n, f) - U(Q', f)\bigr) \\
&\qquad + \bigl(U(Q', f) - U(Q, f)\bigr) \\
&\quad \le 2Bd\,h_n + 2Bh_n \\
&\quad = 2B(d + 1)h_n
\end{aligned}
$$
이고 이 값은 $0$ 이상인 두 수의 합이므로 $0$ 이상이다. 하합도 같다. 따라서 $S(d + 1)$이 참이다.

**2의 증명.** $n$을 자연수라 하고 $R = P \cup P_n$으로 두자. 세분 (2)에 의해 $R$은 $P$와 $P_n$의 공통 세분이다. 집합의 계산으로 $R - P_n = P - P_n$이다. 균등 (1)에 의해 $P_n$은 $[a, b]$의 분할이므로 $a, b \in P_n$이고, 따라서 $P - P_n \subseteq P - \{a, b\}$이다. $P$는 원소를 $p + 1$개 갖고 $a \in P$이므로 [[adding-or-removing-an-element]]의 (b)에 의해 $P - \{a\}$는 원소를 $p$개 갖고, $a < b$에서 $b \ne a$이므로 $b \in P - \{a\}$이며, 다시 (b)에 의해 $(P - \{a\}) - \{b\} = P - \{a, b\}$는 원소를 $p - 1$개 갖는다. [[subset-of-finite-set]]의 (1)에 의해 $R - P_n$이 원소를 $d$개 가지면 $d \le p - 1$이다.

(i) (1)의 (ii)를 $R$에 쓰고 $0 \le B$, $0 < h_n$을 쓰면 $U(P_n, f) - U(R, f) \le 2Bd\,h_n \le 2B(p - 1)h_n$이고 $L(R, f) - L(P_n, f) \le 2B(p - 1)h_n$이다. $R$은 $P$의 세분이므로 세분과 합 (2)에 의해 $U(R, f) \le U(P, f)$이고 $L(P, f) \le L(R, f)$이다. 따라서
$$
\begin{aligned}
U(P_n, f) &\le U(R, f) + 2B(p - 1)h_n \\
&\le U(P, f) + 2B(p - 1)h_n, \\
L(P_n, f) &\ge L(R, f) - 2B(p - 1)h_n \\
&\ge L(P, f) - 2B(p - 1)h_n
\end{aligned}
$$
이다.

(ii) (i)의 첫 부등식에서 둘째 부등식을 빼면 된다. 곧 $U(P_n, f) - L(P_n, f) \le \bigl(U(P, f) + 2B(p - 1)h_n\bigr) - \bigl(L(P, f) - 2B(p - 1)h_n\bigr)$이고, 오른쪽은 $U(P, f) - L(P, f) + 4B(p - 1)h_n$이다.

**덧붙는 몫을 작게 하기.** (3)과 (4)에서 함께 쓴다. [[bounded-function]]의 (2)에 의해 모든 $x$에서 $|f(x)| \le B$인 양수 $B$가 있다. $P$가 원소를 $p + 1$개 갖는 $[a, b]$의 분할이고 $\theta$가 양수이면, 자연수 $N$이 있어 $N \le n$인 모든 자연수 $n$에서 $4B(p - 1)h_n < \theta$이다. 실제로 $C = 4Bp$로 두면 $0 < C$이고 $4B(p - 1) \le C$이다. 균등 (2)를 양수 $\delta = \theta/C$에 쓰면 자연수 $N$이 있어 $N \le n$인 모든 자연수 $n$에서 $h_n < \delta$이고, 그런 $n$에서 $0 < h_n$이므로 $4B(p - 1)h_n \le Ch_n < C\delta = \theta$이다. 이것을 (나)라 부른다. (나)에서 $2B(p - 1)h_n < \theta/2 < \theta$이기도 하다.

**3의 증명.** $\varepsilon > 0$이라 하자. [[lower-and-upper-integrals]]의 (4)에 의해 $U(P, f) < \overline{\int_a^b} f + \varepsilon/2$인 $[a, b]$의 분할 $P$가 있다. $P$가 원소를 $p + 1$개 갖게 하는 정수 $p \ge 1$을 두고(분할 (1)), (나)를 $\theta = \varepsilon/2$에 써서 $N$을 잡는다. $N \le n$이면 [[lower-and-upper-integrals]]의 (2)와 (2)의 (i)에 의해
$$
\begin{aligned}
\overline{\int_a^b} f &\le U(P_n, f) \\
&\le U(P, f) + 2B(p - 1)h_n \\
&< \overline{\int_a^b} f + \frac{\varepsilon}{2} + \frac{\varepsilon}{2}
\end{aligned}
$$
이므로 $|U(P_n, f) - \overline{\int_a^b} f| < \varepsilon$이다([[absolute-value]]의 (1)). 따라서 $n$번째 항이 $U(P_n, f)$인 수열은 상적분으로 수렴한다([[limit-of-sequence]]의 수렴의 정의). 하합 쪽은 [[lower-and-upper-integrals]]의 (4)의 $\underline{\int_a^b} f - \varepsilon/2 < L(P', f)$인 분할 $P'$과 (2)의 (i)의 둘째 부등식으로 같은 방법으로 보인다. 곧 $N$을 $P'$에 대해 잡으면 $N \le n$에서 $\underline{\int_a^b} f - \varepsilon < L(P', f) - 2B(p' - 1)h_n \le L(P_n, f) \le \underline{\int_a^b} f$이다($P'$은 원소를 $p' + 1$개 갖는다).

**4의 증명.** (i) $\varepsilon > 0$이라 하자. [[integrability-criterion]]의 (1)에 의해 $U(P, f) - L(P, f) < \varepsilon/2$인 $[a, b]$의 분할 $P$가 있고, 분할 (1)에 의해 $P$가 원소를 $p + 1$개 갖게 하는 정수 $p \ge 1$이 있다. (나)를 $\theta = \varepsilon/2$에 써서 $N$을 잡으면 $N \le n$인 모든 자연수 $n$에서 (2)의 (ii)에 의해
$$
U(P_n, f) - L(P_n, f) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다.

(ii) [[riemann-integral]]의 (1)에 의해 $L(P_n, f) \le \int_a^b f \le U(P_n, f)$이다. 따라서 $0 \le U(P_n, f) - \int_a^b f$이고, $U(P_n, f) - \int_a^b f \le U(P_n, f) - L(P_n, f) < \varepsilon$이다. 하합 쪽도 같다.

(iii) 양수 $\varepsilon$마다 (i)의 $N$을 잡으면 $N \le n$인 모든 $n$에서 (ii)와 [[absolute-value]]의 (1)에 의해 $|U(P_n, f) - \int_a^b f| = U(P_n, f) - \int_a^b f < \varepsilon$이고, $|L(P_n, f) - \int_a^b f| = \int_a^b f - L(P_n, f) < \varepsilon$이며, [[darboux-sums]]의 (3)에 의해 $0 \le U(P_n, f) - L(P_n, f)$이므로 $|(U(P_n, f) - L(P_n, f)) - 0| < \varepsilon$이다. [[limit-of-sequence]]의 수렴의 정의에 의해 세 수열은 각각 $\int_a^b f$, $\int_a^b f$, $0$으로 수렴한다.

**5의 증명.** $f$가 적분가능하면 (4)의 (iii)에 의해 그 수열은 $0$으로 수렴한다. 거꾸로 그 수열이 $0$으로 수렴한다고 하고 $\varepsilon > 0$이라 하자. 수렴의 정의에 의해 자연수 $M$이 있어 $|U(P_M, f) - L(P_M, f)| < \varepsilon$이고, [[absolute-value]]의 (6)에 의해 $U(P_M, f) - L(P_M, f) < \varepsilon$이다. 따라서 모든 양수 $\varepsilon$에 대하여 $U(P_n, f) - L(P_n, f) < \varepsilon$인 자연수 $n$이 있고, [[integrability-criterion]]의 (6)에 의해 $f$는 적분가능하다.

**6의 증명.** [[power-of-a-real-number]]의 (7)에 의해 $0$ 이상인 정수 $j$에서 $2^j$는 자연수이다. $n \le 2^n$은 $n$에 대한 귀납법으로 보인다. $n = 1$이면 $2^1 = 2$이고 $1 \le 2$이다. $n \le 2^n$이면 [[power-of-a-real-number]]의 (6)의 (iv)에 의해 $1 \le 2^n$이므로 $n + 1 \le 2^n + 2^n = 2^n \cdot 2 = 2^{n+1}$이다.

(i) $k \le n$이면 $n - k$는 $0$ 이상인 정수이고, [[power-of-a-real-number]]의 (2)의 (i)에 의해 $2^n = 2^{n-k} \cdot 2^k$이며 $2^{n-k}$는 자연수이다. 균등 (3)을 자연수 $2^{n-k}$과 $2^k$에 쓰면 $P_{2^n}$은 $P_{2^k}$의 세분이다. 세분과 합 (2), (4)에 의해 세 부등식이 성립한다.

(ii) $f$가 적분가능하다고 하자. 양수 $\varepsilon$마다 (4)의 (i)의 $N$을 잡으면, $N \le n$인 자연수 $n$에서 $N \le n \le 2^n$이므로 (4)의 (ii)가 $2^n$에서 성립한다. 곧 $|U(P_{2^n}, f) - \int_a^b f| < \varepsilon$이고 $|L(P_{2^n}, f) - \int_a^b f| < \varepsilon$이다. 따라서 두 수열은 $\int_a^b f$로 수렴한다. 같은 $n = N$에서 $U(P_{2^N}, f) - L(P_{2^N}, f) < \varepsilon$이므로 $N \in A_\varepsilon$이고 $A_\varepsilon$은 공집합이 아닌 $\mathbb{N}$의 부분집합이다. [[well-ordering-principle]]의 (2)에 의해 $A_\varepsilon$은 최소 원소 $k$를 갖고, 그 (1)에 의해 $k$는 하나뿐이므로 $A_\varepsilon$, 곧 $a$, $b$, $f$, $\varepsilon$만으로 정해진다. $n \in A_\varepsilon$이면 최소 원소의 정의에 의해 $k \le n$이다. 거꾸로 $k \le n$이면 (i)에 의해 $U(P_{2^n}, f) - L(P_{2^n}, f) \le U(P_{2^k}, f) - L(P_{2^k}, f) < \varepsilon$이므로 $n \in A_\varepsilon$이다.

(iii) $k \le n$이고 $K = 2^{n-k}$라 하자. (i)의 증명대로 $K$는 자연수이고 $2^n = K \cdot 2^k$이다. $1 \le j \le 2^n$인 정수 $j$에 대하여 $t = (j - 1)/K$로 두면 $0 \le t$이므로 [[archimedean-property]]의 (4)에 의해 $i - 1 \le t < i$인 정수 $i$가 정확히 하나 있고 $i$는 자연수이다. 양변에 양수 $K$를 곱하면([[order-properties-of-reals]]의 (4)의 (i), (iii)) 이 조건은 $(i - 1)K \le j - 1 < iK$와 같고, 정수의 순서((Z5)–(Z7))에 의해 $(i - 1)K \le j - 1$은 $(i - 1)K < j$와, $j - 1 < iK$는 $j \le iK$와 같다. 그래서 $(i - 1)K < j \le iK$인 정수 $i$는 정확히 하나이다. 또 $(i - 1)K < j \le 2^n = 2^k K$이므로 $i - 1 < 2^k$, 곧 $i \le 2^k$이다.

$h' = h_{2^n}$, $h = h_{2^k}$로 두면 $h = (b - a)(2^k)^{-1} = K\,(b - a)(K 2^k)^{-1} = K(b - a)(2^n)^{-1} = Kh'$이다([[real-number-arithmetic]]). 균등 (1)에 의해 $P_{2^n}$의 $j$번째 작은 구간은 $[a + (j - 1)h', a + jh']$이고 $P_{2^k}$의 $i$번째 작은 구간은 $[a + (i - 1)h, a + ih]$이다. $(i - 1)K \le j - 1$이고 $0 < h'$이므로 $a + (i - 1)h = a + (i - 1)Kh' \le a + (j - 1)h'$이고, $j \le iK$이므로 $a + jh' \le a + iKh' = a + ih$이다. 따라서 $a + (j - 1)h' \le u \le a + jh'$인 실수 $u$는 $a + (i - 1)h \le u \le a + ih$를 만족하고, $j$번째 작은 구간은 $i$번째 작은 구간의 부분집합이다.

**7의 증명.** $t_i$는 $1 \le i \le q$에서만 정해진 항이다. 분할 (2)에 의해 $0 < \Delta y_i$이므로 모든 $i$에서 $0 \le t_i$이고, [[linearity-and-order-of-finite-sums]]의 (6)과 (8)에 의해 $0 \le \sum_{i=1}^{q} t_i$이다. $1 \le i \le q$인 $i$마다 $r t_i \le (M_i - m_i)\Delta y_i$이다. $M_i - m_i \ge r$이면 양변에 양수 $\Delta y_i$를 곱해 $r\Delta y_i \le (M_i - m_i)\Delta y_i$이고([[order-properties-of-reals]]의 (4)의 (iii)), 아니면 다르부 (1)의 $m_i \le M_i$와 $0 < \Delta y_i$에서 $r t_i = 0 \le (M_i - m_i)\Delta y_i$이기 때문이다. [[linearity-and-order-of-finite-sums]]의 (1), (3), (8)과 다르부 (3)에 의해
$$
\begin{aligned}
r \sum_{i=1}^{q} t_i &= \sum_{i=1}^{q} r t_i \\
&\le \sum_{i=1}^{q} (M_i - m_i)\Delta y_i \\
&= U(Q, f) - L(Q, f)
\end{aligned}
$$
이다. 이것이 (i)이다. (ii)는 (i)에서 $r \sum_{i=1}^{q} t_i < r\eta$이고 $0 < r$이므로 [[order-properties-of-reals]]의 (6)의 (iv)에 의해 $\sum_{i=1}^{q} t_i < \eta$이다. $\blacksquare$
:::

## 예시와 반례

:::example[계단 하나인 함수의 균등 분할]
$0 < s < 1$인 실수 $s$를 정하고 $[0, 1]$ 위의 $f$를 $x < s$이면 $f(x) = 0$, $s \le x$이면 $f(x) = 1$로 둡니다. $P_n$의 점은 $i/n$이고 $h_n = 1/n$입니다. 작은 구간 가운데 $s$보다 작은 점과 $s$ 자신을 함께 품는 것에서만 $M_i - m_i = 1$이고, 나머지 작은 구간에서는 $f$가 상수여서 $M_i - m_i = 0$입니다.

- $s$가 $P_n$의 점 $j/n$($1 \le j \le n - 1$)이면 그런 작은 구간은 $[(j - 1)/n, s]$ 하나입니다. $[s, (j + 1)/n]$에서는 값이 모두 $1$입니다.
- $s$가 $P_n$의 점이 아니면 [[partition-of-an-interval|구간의 분할]]의 (3)의 (iii)대로 $x_{i-1} < s < x_i$인 $i$가 하나뿐이고, 그 작은 구간만 두 값을 다 가집니다.

어느 경우나 $U(P_n, f) - L(P_n, f) = 1 \cdot (1/n) = 1/n$이고, 이 수열은 $0$으로 수렴하므로 (5)에 의해 $f$는 적분가능합니다. (7)을 $r = 1/2$에 쓰면 $M_i - m_i \ge 1/2$인 작은 구간은 하나뿐이고 길이의 합은 $1/n$입니다.
:::

:::counterexample[점의 개수만 늘리는 분할열에서 차가 줄지 않는 예]
$[0, 1]$에서 첫 예시의 $f$를 $s = 3/4$로 두고, 자연수 $n$마다 $Q_n = \{i/(2n) : 0 \le i \le n\} \cup \{1\}$을 봅니다. $Q_n$은 원소가 $n + 2$개인 $[0, 1]$의 분할이고, 점의 개수는 $n$과 함께 끝없이 늘어납니다. 그러나 마지막 작은 구간 $[1/2, 1]$은 늘 그대로이고, 그 안에 $1/2$(값 $0$)과 $3/4$(값 $1$)가 있어 $M - m = 1$입니다. $[0, 1/2]$ 안의 작은 구간에서는 값이 모두 $0$이므로 모든 $n$에서 $U(Q_n, f) - L(Q_n, f) = 1/2$입니다. 이 $f$의 균등 분할에서는 차가 $1/n$으로 $0$에 가는데, 그것은 (2)에서 덧붙는 몫이 작은 구간의 길이 $h_n$에 비례하기 때문입니다. $Q_n$은 가장 긴 작은 구간의 길이가 $1/2$에서 줄지 않습니다.
:::

## 확인 질문

:::check[$[a, b]$의 분할 $Q$에서 $U(Q, f) - L(Q, f) = 1/100$이면, $M_i - m_i \ge 1/10$인 작은 구간의 길이의 합은 얼마 이하인가?]
$1/10$ 이하입니다. (7)의 (i)을 $r = 1/10$에 쓰면 $(1/10)\sum t_i \le 1/100$이므로 $\sum t_i \le 1/10$입니다. 차가 큰 작은 구간이 길면 그 구간들만으로도 상합과 하합의 차가 커지기 때문입니다.
:::

:::check[(2)의 (ii)에서 $P = \{a, b\}$이면 부등식은 무엇이 되고, 왜 따로도 알 수 있는가?]
$P$의 원소가 $2$개이므로 $p = 1$이고 덧붙는 몫 $4B(p - 1)h_n$이 $0$이어서 $U(P_n, f) - L(P_n, f) \le U(\{a, b\}, f) - L(\{a, b\}, f)$가 됩니다. $P_n$은 $a$, $b$를 원소로 가지므로 $\{a, b\}$의 세분이고, [[refinement-and-darboux-sums|분할의 세분과 다르부 합]]의 (4)에서 바로 같은 부등식이 나옵니다.
:::
