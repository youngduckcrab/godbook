---
title: 세분과 다르부 합
title_en: Refinement and Darboux Sums
aliases: [세분하면 하합은 줄지 않고 상합은 늘지 않는다, 하합은 상합 이하, refinement and Darboux sums, lower sum is at most upper sum]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: 분할에 점을 하나 더하면 다르부 하합은 줄지 않고 상합은 늘지 않으며 그 차를 식으로 쓸 수 있다. 따라서 세분하면 하합은 줄지 않고 상합은 늘지 않으며, 아무 두 분할에서 한쪽의 하합은 다른 쪽의 상합 이하이다. 상합과 하합의 차는 세분하면 늘지 않고, 이웃한 두 구간으로 나누어도 하합은 줄지 않고 상합은 늘지 않는다.
requires: [set, subset, set-operations, mathematical-induction, finite-set, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, supremum-and-arithmetic, real-valued-function, bounded-function, interval, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, partition-of-an-interval, refinement-of-a-partition, darboux-sums]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Proposition 5.1.7 과 그 증명 (p.183–184), Proposition 5.1.8 의 증명 (p.184–185), 5.1.4 소절 연습문제 5.1.4 (p.189); 5.2절(5.2.1 소절) Lemma 5.2.1 의 증명 (p.191–192)
    checked: original
    note: "(2)는 출처의 Proposition 5.1.7(p.183)이다. 출처의 증명(p.183–184)은 세분 P̃ 의 점에서 P 의 점이 놓인 번호 k_0 < k_1 < ⋯ < k_n 이 있다고 증명 없이 적고, Δx_i 를 Σ_{q=k_{i−1}+1}^{k_i} Δx̃_q 로 나누어 이중 합으로 비교하며, U 쪽은 연습문제 5.1.4(p.189)로 둔다. 이 항목은 그 대신 점 하나를 더하는 경우 (1)을 먼저 식으로 보이고, 일반 세분은 refinement-of-a-partition 의 (4)로 Q − P 의 원소의 개수에 대한 귀납법으로 보인다. U 쪽도 같은 방식으로 증명한다. (3)은 출처의 Proposition 5.1.8 의 증명(p.184–185)이 공통 세분 P_1 ∪ P_2 로 L(P_1, f) ≤ U(P_2, f) 를 보이는 단계를 진술로 올린 것이다. (5)는 출처의 Lemma 5.2.1 의 증명(p.191–192)이 [a, c] 의 분할 Q 에 대해 Q ∪ {b} 가 Q 의 세분이므로 L(Q, f) ≤ L(Q ∪ {b}, f) 라고 쓰는 단계를 이어 붙인 분할의 합(darboux-sums 의 (7))과 함께 진술로 올린 것이다. (1)의 차의 식과 (4)는 이 사이트가 진술했다. 예시 '한 점을 더할 때의 차'의 꺾인 함수는 darboux-sums 의 예시와 같은 함수이다. 반례 '세분이 아닌 분할에서는 하합이 줄 수 있다'는 출처 연습문제 5.1.10(5.1.4 소절, p.189, [0, 1] 의 균등 분할 P_n 에서 L(P_n, f) 가 늘 단조인지 묻는다)과 같은 발상이다(uniform-partition 의 (4)대로 P_{n+1} 은 P_n 의 세분이 아닐 수 있다). 확인 질문 1 의 상수함수는 출처 Example 5.1.11(p.186)과 같은 대상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 틀린 예시 논증 1건과 출처 메모 4곳, 등호를 가리는 말을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할, 그 점, 작은 구간, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이고, 세분과 점 하나 더하기, 이어 붙이기와 나누기는 [[refinement-of-a-partition]]의 것이며, 다르부 합 $L(P, f)$, $U(P, f)$와 $m_i$, $M_i$는 [[darboux-sums]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고 $f : [a, b] \to \mathbb{R}$는 유계이다.

1. (점 하나 더하기) $P$를 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할, $y$를 $[a, b] - P$의 원소라 하고, $x_{k-1} < y < x_k$인 정수 $k$($1 \le k \le n$, [[refinement-of-a-partition]]의 (3)의 (i))를 생각하자.
   $$
   \begin{gathered}
   m' = \inf f([x_{k-1}, y]), \quad m'' = \inf f([y, x_k]), \\
   M' = \sup f([x_{k-1}, y]), \quad M'' = \sup f([y, x_k])
   \end{gathered}
   $$
   로 두면 $m_k \le m'$, $m_k \le m''$, $M' \le M_k$, $M'' \le M_k$이고
   $$
   \begin{aligned}
   L(P \cup \{y\}, f) - L(P, f) &= (m' - m_k)(y - x_{k-1}) \\
   &\quad + (m'' - m_k)(x_k - y), \\
   U(P, f) - U(P \cup \{y\}, f) &= (M_k - M')(y - x_{k-1}) \\
   &\quad + (M_k - M'')(x_k - y)
   \end{aligned}
   $$
   이다. 따라서 $L(P, f) \le L(P \cup \{y\}, f)$이고 $U(P \cup \{y\}, f) \le U(P, f)$이다.
2. (세분) $Q$가 $[a, b]$의 분할 $P$의 세분이면
   $$
   L(P, f) \le L(Q, f) \le U(Q, f) \le U(P, f)
   $$
   이다.
3. (두 분할) $P_1$, $P_2$가 $[a, b]$의 분할이면 $L(P_1, f) \le U(P_2, f)$이다.
4. (상합과 하합의 차) $Q$가 $P$의 세분이면 $U(Q, f) - L(Q, f) \le U(P, f) - L(P, f)$이다.
5. (한 점에서 나누기) $a < b < c$인 실수 $c$와 유계인 $g : [a, c] \to \mathbb{R}$, $g_1 = g|_{[a, b]}$, $g_2 = g|_{[b, c]}$를 생각하자. $[a, c]$의 분할 $P$에 대하여 $P' = P \cup \{b\}$로 두면($b \in P$이면 $P' = P$이다) $P'$은 $P$의 세분이고 $b$를 원소로 가지며
   $$
   \begin{gathered}
   L(P, g) \le L(P' \cap [a, b], g_1) + L(P' \cap [b, c], g_2), \\
   U(P' \cap [a, b], g_1) + U(P' \cap [b, c], g_2) \le U(P, g)
   \end{gathered}
   $$
   이다. 여기서 $P' \cap [a, b]$와 $P' \cap [b, c]$는 각각 $[a, b]$와 $[b, c]$의 분할이다.
:::

:::english
Partitions of $[a, b]$, their points, subintervals, and lengths $\Delta x_i$ are those of the entry on partitions of an interval; refinements, adding one point, joining, and splitting are those of the entry on refinements of a partition; and the Darboux sums $L(P, f)$, $U(P, f)$ and $m_i$, $M_i$ are those of the entry on Darboux sums. Below, $a$ and $b$ are real numbers with $a < b$, and $f : [a, b] \to \mathbb{R}$ is bounded.

1. (Adding one point) Let $P$ be a partition of $[a, b]$ with points $x_0, \dots, x_n$, let $y$ be an element of $[a, b] - P$, and consider the integer $k$ ($1 \le k \le n$, item (3)(i) of the entry on refinements) with $x_{k-1} < y < x_k$. Putting
   $$
   \begin{gathered}
   m' = \inf f([x_{k-1}, y]), \quad m'' = \inf f([y, x_k]), \\
   M' = \sup f([x_{k-1}, y]), \quad M'' = \sup f([y, x_k]),
   \end{gathered}
   $$
   we have $m_k \le m'$, $m_k \le m''$, $M' \le M_k$, $M'' \le M_k$, and
   $$
   \begin{aligned}
   L(P \cup \{y\}, f) - L(P, f) &= (m' - m_k)(y - x_{k-1}) \\
   &\quad + (m'' - m_k)(x_k - y), \\
   U(P, f) - U(P \cup \{y\}, f) &= (M_k - M')(y - x_{k-1}) \\
   &\quad + (M_k - M'')(x_k - y) .
   \end{aligned}
   $$
   Hence $L(P, f) \le L(P \cup \{y\}, f)$ and $U(P \cup \{y\}, f) \le U(P, f)$.
2. (Refinement) If $Q$ is a refinement of a partition $P$ of $[a, b]$, then
   $$
   L(P, f) \le L(Q, f) \le U(Q, f) \le U(P, f) .
   $$
3. (Two partitions) If $P_1$ and $P_2$ are partitions of $[a, b]$, then $L(P_1, f) \le U(P_2, f)$.
4. (Difference of upper and lower sums) If $Q$ is a refinement of $P$, then $U(Q, f) - L(Q, f) \le U(P, f) - L(P, f)$.
5. (Splitting at a point) Consider a real number $c$ with $a < b < c$, a bounded $g : [a, c] \to \mathbb{R}$, $g_1 = g|_{[a, b]}$, and $g_2 = g|_{[b, c]}$. For a partition $P$ of $[a, c]$, put $P' = P \cup \{b\}$ (if $b \in P$ then $P' = P$). Then $P'$ is a refinement of $P$ containing $b$, and
   $$
   \begin{gathered}
   L(P, g) \le L(P' \cap [a, b], g_1) + L(P' \cap [b, c], g_2), \\
   U(P' \cap [a, b], g_1) + U(P' \cap [b, c], g_2) \le U(P, g) .
   \end{gathered}
   $$
   Here $P' \cap [a, b]$ and $P' \cap [b, c]$ are partitions of $[a, b]$ and $[b, c]$, respectively.
:::

## 직관

하합은 그래프 아래로 들어가는 직사각형들의 넓이였습니다. 작은 구간 하나를 점 $y$에서 둘로 나누면, 새로 생긴 두 작은 구간 $[x_{k-1}, y]$와 $[y, x_k]$ 각각에서 바닥을 다시 잴 수 있습니다. 두 작은 구간은 원래 작은 구간의 일부이므로 그 위의 값은 원래 바닥 $m_k$ 아래로 내려가지 않고, 바닥은 그대로이거나 올라갑니다. 그래서 하합은 줄지 않습니다((1)). 바닥이 올라가는 만큼에 새 작은 구간의 길이를 곱한 것이 늘어난 양이고, 나머지 작은 구간의 직사각형은 그대로입니다. 상합은 거꾸로 천장이 내려가거나 그대로여서 늘지 않습니다.

점을 여럿 더한 세분은 점을 하나씩 더한 것이므로((2)), 세분하면 하합은 줄지 않고 상합은 늘지 않습니다. 아무 두 분할 $P_1$, $P_2$는 공통 세분 $P_1 \cup P_2$를 가지므로, $P_1$의 하합은 공통 세분의 하합 이하, 그것은 공통 세분의 상합 이하, 그것은 $P_2$의 상합 이하입니다((3)). 그래프 아래로 들어가는 넓이의 어림은 어떻게 나누어도 그래프를 덮는 넓이의 어림을 넘지 않는다는 뜻입니다.

## 증명

:::idea
점 하나를 더하면 바뀌는 항은 $k$번째 항 하나가 두 항으로 갈라진 것뿐이므로 유한 합의 "한 항을 둘로 나누기"로 차를 계산한다. 일반 세분은 $Q - P$의 원소의 개수에 대한 귀납법, 두 분할은 공통 세분으로 잇는다.
:::

:::hint
(1): $Q = P \cup \{y\}$의 다르부 하합의 $i$번째 항을 $q_i$, $P$의 것을 $p_i$라 하면 $i \le k - 1$에서 $q_i = p_i$, $k + 1 \le i \le n$에서 $q_{i+1} = p_i$이다.
:::

:::hint
(2): 정수 $d \ge 0$에 대한 명제 "$Q - P$가 원소를 $d$개 갖는 $P$의 모든 세분 $Q$에서 $L(P, f) \le L(Q, f)$이고 $U(Q, f) \le U(P, f)$"를 귀납법으로 보인다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로, 순서는 [[order-properties-of-reals]]로 다룬다. "분할 ($n$)", "세분 ($n$)", "선형 ($n$)", "다르부 ($n$)"은 각각 [[partition-of-an-interval]], [[refinement-of-a-partition]], [[linearity-and-order-of-finite-sums]], [[darboux-sums]]의 번호이다. 선형 (8)에 의해 [[splitting-and-shifting-finite-sums]]의 번호를 범위에서만 정해진 항에 그대로 쓴다.

**1의 증명.** $Q = P \cup \{y\}$로 두자. 세분 (3)의 (ii)에 의해 $Q$는 점이 $z_0, \dots, z_{n+1}$인 $[a, b]$의 분할이고, 세분 (3)의 (iii)에 의해 $1 \le i \le k - 1$이면 $Q$의 $i$번째 작은 구간은 $P$의 $i$번째 작은 구간이며, $Q$의 $k$번째와 $(k + 1)$번째 작은 구간은 $[x_{k-1}, y]$와 $[y, x_k]$이고, $k + 1 \le i \le n$이면 $Q$의 $(i + 1)$번째 작은 구간은 $P$의 $i$번째 작은 구간이다.

$P$의 하합의 $i$번째 항을 $p_i = m_i \Delta x_i$($1 \le i \le n$), $Q$의 하합의 $i$번째 항을 $q_i = \inf f([z_{i-1}, z_i]) \cdot \Delta z_i$($1 \le i \le n + 1$)라 하자. 항은 작은 구간만으로 정해지므로 $1 \le i \le k - 1$에서 $q_i = p_i$이고, $k + 1 \le i \le n$에서 $q_{i+1} = p_i$이며, $q_k = m'(y - x_{k-1})$, $q_{k+1} = m''(x_k - y)$이다. [[splitting-and-shifting-finite-sums]]의 (4)에 의해
$$
\begin{aligned}
L(Q, f) - L(P, f) &= \sum_{i=1}^{n+1} q_i - \sum_{i=1}^{n} p_i \\
&= (q_k + q_{k+1}) - p_k
\end{aligned}
$$
이다. 세분 (3)의 (iii)에 의해 $\Delta x_k = (y - x_{k-1}) + (x_k - y)$이므로 $p_k = m_k(y - x_{k-1}) + m_k(x_k - y)$이고, 분배법칙으로
$$
\begin{aligned}
(q_k + q_{k+1}) - p_k &= (m' - m_k)(y - x_{k-1}) \\
&\quad + (m'' - m_k)(x_k - y)
\end{aligned}
$$
이다. 세분 (3)의 (iii)에 의해 $[x_{k-1}, y]$와 $[y, x_k]$는 $[x_{k-1}, x_k]$의 부분집합이고, $x_{k-1} < y < x_k$이므로 다르부 (4)를 쓸 수 있어 $m_k \le m'$, $m_k \le m''$, $M' \le M_k$, $M'' \le M_k$이다. $y - x_{k-1} > 0$, $x_k - y > 0$이므로([[order-properties-of-reals]]의 (3)의 (i)) 그 (4)의 (iv)에 의해 두 곱은 $0$ 이상이고, 그 (2)의 (iii)에 의해 차는 $0$ 이상이다. 곧 $L(P, f) \le L(Q, f)$이다.

상합도 같다. $P$의 상합의 항 $M_i \Delta x_i$와 $Q$의 상합의 항 $\sup f([z_{i-1}, z_i]) \cdot \Delta z_i$에 같은 대응이 성립하므로 [[splitting-and-shifting-finite-sums]]의 (4)에 의해 $U(Q, f) - U(P, f) = M'(y - x_{k-1}) + M''(x_k - y) - M_k \Delta x_k$이고, 양변에 $-1$을 곱해 정리하면 진술의 식이 된다. $M_k - M' \ge 0$, $M_k - M'' \ge 0$이므로 같은 까닭으로 $U(Q, f) \le U(P, f)$이다.

**2의 증명.** $P$를 고정하고, $0$ 이상의 정수 $d$에 대한 명제 $S_d$를 "$Q - P$가 원소를 $d$개 갖는 $P$의 모든 세분 $Q$에서 $L(P, f) \le L(Q, f)$이고 $U(Q, f) \le U(P, f)$"로 두어 시작점이 $0$인 [[mathematical-induction]]을 쓴다. 세분 (1)에 의해 $Q - P$는 유한집합이므로 모든 세분 $Q$는 어떤 $S_d$의 대상이다.

기초 단계: $Q - P$가 원소를 $0$개 가지면 세분 (1)에 의해 $Q = P$이고, 두 부등식은 등식으로 성립한다.

귀납 단계: $S_d$가 참이라 하고 $Q$가 $Q - P$가 원소를 $d + 1$개 갖는 $P$의 세분이라 하자. $d + 1 \ge 1$이므로 [[finite-set]]의 (F2)에 의해 $Q - P \ne \emptyset$이고 $P \ne Q$이다. $Q - P$의 원소 $y$가 있다. 세분 (4)에 의해 $Q' = Q - \{y\}$는 $P$의 세분인 $[a, b]$의 분할이고, $Q' - P$는 원소를 $d$개 가지며, $y \in [a, b] - Q'$이고 $Q = Q' \cup \{y\}$이다. $S_d$에 의해 $L(P, f) \le L(Q', f)$, $U(Q', f) \le U(P, f)$이고, (1)을 $Q'$과 $y$에 쓰면 $L(Q', f) \le L(Q, f)$, $U(Q, f) \le U(Q', f)$이다. [[order-properties-of-reals]]의 (1)의 (v)에 의해 $S_{d+1}$이 성립한다.

가운데 부등식 $L(Q, f) \le U(Q, f)$는 다르부 (2)이다.

**3의 증명.** 세분 (2)에 의해 $R = P_1 \cup P_2$는 $P_1$과 $P_2$의 공통 세분이다. (2)를 $P_1$과 $R$에, 또 $P_2$와 $R$에 쓰면 $L(P_1, f) \le L(R, f) \le U(R, f) \le U(P_2, f)$이다.

**4의 증명.** (2)에 의해 $L(P, f) \le L(Q, f)$이고 $U(Q, f) \le U(P, f)$이므로 [[order-properties-of-reals]]의 (2)의 (iii)과 (3)의 (iii)에 의해 $U(Q, f) - L(Q, f) \le U(P, f) - L(P, f)$이다.

**5의 증명.** $b \in P$이면 $P' = P \cup \{b\} = P$이고, 세분 (6)에 의해 $P$는 $P$의 세분이다. $b \notin P$이면 세분 (5)의 (iii)에 의해 $P'$은 $b$를 원소로 갖는 $[a, c]$의 분할이고 $P$의 세분이다. 어느 경우나 $b \in P'$이므로 세분 (5)의 (ii)에 의해 $P' \cap [a, b]$와 $P' \cap [b, c]$는 각각 $[a, b]$와 $[b, c]$의 분할이고, 다르부 (7)의 (ii)에 의해 $L(P', g) = L(P' \cap [a, b], g_1) + L(P' \cap [b, c], g_2)$이며 $U$도 같다. (2)를 $[a, c]$ 위의 $g$와 $P$, $P'$에 쓰면 $L(P, g) \le L(P', g)$이고 $U(P', g) \le U(P, g)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점을 더할 때의 차]
$[-1, 2]$ 위의 $f(x) = |x|$와 분할 $P = \{-1, 2\}$에서 $L(P, f) = 0 \cdot 3 = 0$, $U(P, f) = 2 \cdot 3 = 6$입니다. $y = 0$을 더하면 $k = 1$이고, $[-1, 0]$에서 $m' = 0$, $M' = 1$, $[0, 2]$에서 $m'' = 0$, $M'' = 2$입니다. $m_1 = 0$, $M_1 = 2$이므로 (1)의 식으로
$$
\begin{gathered}
L(P \cup \{0\}, f) - L(P, f) = 0 \cdot 1 + 0 \cdot 2 = 0, \\
U(P, f) - U(P \cup \{0\}, f) = (2 - 1) \cdot 1 + (2 - 2) \cdot 2 = 1
\end{gathered}
$$
이고, 실제로 $U(\{-1, 0, 2\}, f) = 1 \cdot 1 + 2 \cdot 2 = 5$입니다. 하합은 그대로이고 상합만 $1$ 줄었습니다. 이처럼 (1)의 부등식은 등호일 수 있습니다.

$y = 1$을 더하면 $k = 1$이고 $[-1, 1]$에서 $m' = 0$, $M' = 1$, $[1, 2]$에서 $m'' = 1$, $M'' = 2$이어서 하합은 $(1 - 0) \cdot 1 = 1$만큼 늘고 상합은 $(2 - 1) \cdot 2 = 2$만큼 줄어 $L = 1$, $U = 4$가 됩니다.
:::

:::counterexample[세분이 아닌 분할에서는 하합이 줄 수 있다]
위의 $f(x) = |x|$에서 $P_1 = \{-1, 1, 2\}$의 하합은 $0 \cdot 2 + 1 \cdot 1 = 1$이고, $P_2 = \{-1, 0, 2\}$의 하합은 $0 \cdot 1 + 0 \cdot 2 = 0$입니다. $P_2$는 $P_1$보다 점이 많지 않고 $P_1$의 세분도 아니며($1 \notin P_2$), 하합이 $1$에서 $0$으로 작습니다. (2)는 세분에 대해서만 말하고, "점이 같은 개수이거나 다른 분할이면 하합이 커진다"는 뜻이 아닙니다. 그래도 (3)대로 $L(P_1, f) = 1 \le 5 = U(P_2, f)$이고 $L(P_2, f) = 0 \le 4 = U(P_1, f)$입니다.
:::

## 확인 질문

:::check[$f$가 값이 $k$인 상수함수이면 (1)의 두 차는 무엇인가?]
둘 다 $0$입니다. 상수함수에서는 모든 작은 구간과 점 $y$로 나눈 두 작은 구간에서 하한과 상한이 $k$이므로 $m' = m'' = m_k = k$, $M' = M'' = M_k = k$이고, (1)의 식의 괄호가 모두 $0$입니다. [[darboux-sums|다르부 하합과 상합]]의 (5)대로 모든 분할에서 하합과 상합이 $k(b - a)$인 것과 맞습니다.
:::

:::check[$P_1 = P_2$이면 (3)은 무엇을 말하는가?]
$L(P_1, f) \le U(P_1, f)$, 곧 한 분할의 하합이 상합 이하라는 것입니다. 이것은 [[darboux-sums|다르부 하합과 상합]]의 (2)이기도 하고, (3)의 증명에서는 공통 세분이 $P_1 \cup P_1 = P_1$ 자신이 됩니다.
:::
