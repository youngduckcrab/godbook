---
title: 리만 적분가능성의 판정
title_en: Criterion for Riemann Integrability
aliases: [적분가능성의 판정, 리만 판정법, 리만 적분가능성 판정법, Riemann criterion, Riemann's criterion for integrability, integrability criterion]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 가 리만 적분가능한 것은 정확히 모든 양수 ε 에 대하여 상합과 하합의 차가 ε 보다 작은 분할이 있을 때이다. 그 분할을 세분해도 차가 유지되고, 적분가능한 두 함수에 한 분할을 함께 쓸 수 있으며, 하합과 상합 사이에 있는 수를 적분값으로 맞히는 판정, ε 보다 작음 대신 ε 이하로 쓴 꼴, 균등 분할만으로 하는 판정을 함께 진술한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, bounded-function, interval, finite-sum-of-reals, partition-of-an-interval, refinement-of-a-partition, uniform-partition, darboux-sums, refinement-and-darboux-sums, lower-and-upper-integrals, dirichlet-function, riemann-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.2 소절) Proposition 5.1.13 과 그 증명, Example 5.1.12 (p.186–187); 5.1.4 소절 연습문제 5.1.3, 5.1.5 (p.189); 5.2절(5.2.5 소절) 연습문제 5.2.2 와 그 힌트 (p.197)
    checked: original
    note: "출처의 Proposition 5.1.13(p.187)은 'f is Riemann integrable if for every ε > 0, there exists a partition P … such that U(P, f) − L(P, f) < ε' 로, 이 항목 (1)의 한 방향(분할이 있으면 적분가능)만 진술한다. 출처의 증명은 0 ≤ 상적분 − 하적분 ≤ U(P, f) − L(P, f) < ε 에서 ε 이 임의라는 것으로 끝나고, 이 항목도 같은 경로이다(lower-and-upper-integrals 의 (5)와 order-properties-of-reals 의 (9)). 거꾸로 방향(적분가능하면 그런 분할이 있다)은 출처가 명제로 적지 않고, 연습문제 5.1.7(p.189, 적분가능하면 리만 합이 적분에 ε 보다 가까운 분할이 있음을 보이라)은 이 방향을 쓰는 물음이며, 연습문제 5.2.2 의 힌트(p.197, 'use Proposition 5.1.7 to find a single partition P such that U(P, f) − L(P, f) < ε/2 and U(P, g) − L(P, g) < ε/2')가 말없이 쓴다. 이 항목은 거꾸로 방향을 lower-and-upper-integrals 의 (4)(하적분과 상적분에 가까운 두 분할의 합집합)로 증명한다. (3)은 그 힌트가 쓰는 '한 분할'을 진술로 올린 것이다. (4)와 (6)의 둘째 문장은 출처 연습문제 5.1.3(p.189, 분할의 수열에서 U(P_k, f) − L(P_k, f) 가 0 으로 가면 적분가능하고 적분은 그 극한)과 같은 결론을 극한 없이 ε 꼴로 쓴 것이다. (4)의 '하합과 상합 사이의 수와 차가 ε 보다 작은 분할로 적분값을 맞힌다'는 출처의 Example 5.1.12(p.186–187)가 [0, 2] 의 계단 함수에서 1 − ε = L(P, f) ≤ ∫ ≤ U(P, f) = 1 + ε 로 하는 계산과 같은 발상이다. 출처 p.187 은 Proposition 5.1.13 앞에서 이 예의 기법을 명제로 뽑는다고 적는다. (2)는 출처 Proposition 5.1.7(세분하면 하합은 커지고 상합은 작아진다)에서 바로 나오는 것이다. (5)의 '≤ ε' 꼴은 출처에 명제로 진술되지 않았다(검색어 'U(P, f) − L(P, f) ≤', '≤ 𝜖', 'at most 𝜖', 'less than or equal to 𝜖' 를 책 전체에서 찾았고 5.1.4 소절과 5.2.5 소절 연습문제를 처음부터 읽었다). 다만 출처의 Example 5.1.12(p.186)는 U(P, f) − L(P, f) = 2ε 인 분할로 상적분 − 하적분 ≤ 2ε 을 얻고 ε 이 임의라는 것으로 끝내어, '<' 가 아닌 꼴의 같은 논법을 쓴다. (6)의 첫 문장은 출처 Example 5.1.14(p.187–188)가 쓰는 방법, 곧 [0, b] 를 x_i = ib/n 으로 고르게 나누어 U(P, f) − L(P, f) 를 n 의 식으로 계산하고 그것이 ε 보다 작아지는 n 을 잡는 방법을 진술로 올린 것이다. 출처는 연습문제 5.2.14 a) 의 힌트(p.199)에서도 균등 분할을 쓰라고 한다. 예시 '한 점에서 뛰는 함수' 는 출처 Example 5.1.12([0, 2] 에서 1 에서 뛰는 함수, 분할 {0, 1 − ε, 1 + ε, 2})와 연습문제 5.1.5([−1, 1] 에서 0 에서 뛰는 함수)와 같은 발상이고, 그 함수는 출처 연습문제 5.2.12(p.198)의 기본 계단 함수 φ_I 에서 I = [2, 3] 으로 둔 것을 [0, 3] 에 제한한 것과 같다. 반례 'ε 하나에서만 맞는 분할' 의 디리클레 함수는 출처 Example 5.1.4(p.183)의 함수를 [a, b] 로 넓힌 것이다. 확인 질문 1 의 상수함수는 출처 Example 5.1.11(p.186)과 같은 대상이다(출처는 Proposition 5.1.8 로 한다). 확인 질문 2 의 '한 분할의 하합으로 적분을 가깝게 맞힌다'는 출처 연습문제 5.1.7(p.189)과 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 거꾸로 쓴 직관 문장 1건과 출처 메모의 틀린 주장 3건을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할과 그 점은 [[partition-of-an-interval]]의 것이고, 세분과 공통 세분은 [[refinement-of-a-partition]]의 것이며, $[a, b]$의 $n$등분 균등 분할 $P_n$은 [[uniform-partition]]의 것이다. 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이고, 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고, $f : [a, b] \to \mathbb{R}$는 유계이다.

1. (판정) $f$가 리만 적분가능한 것은 정확히 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) < \varepsilon$인 $[a, b]$의 분할 $P$가 있을 때이다.
2. (세분해도 유지) 양수 $\varepsilon$과 $[a, b]$의 분할 $P$가 $U(P, f) - L(P, f) < \varepsilon$을 만족하면, $P$의 모든 세분 $Q$에서도 $U(Q, f) - L(Q, f) < \varepsilon$이다.
3. (두 함수에 한 분할) $f$와 $g : [a, b] \to \mathbb{R}$가 적분가능하면, 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) < \varepsilon$과 $U(P, g) - L(P, g) < \varepsilon$이 함께 성립하는 $[a, b]$의 분할 $P$가 있다. 그런 $P$의 모든 세분에서도 두 부등식이 함께 성립한다.
4. (값을 맞히는 판정) 실수 $I$에 대하여, 모든 양수 $\varepsilon$마다
   $$
   \begin{gathered}
   L(P, f) \le I \le U(P, f), \\
   U(P, f) - L(P, f) < \varepsilon
   \end{gathered}
   $$
   을 만족하는 $[a, b]$의 분할 $P$가 있으면, $f$는 적분가능하고 $\int_a^b f = I$이다. 여기서 $f$가 적분가능하다는 것은 가정하지 않는다.
5. ($\varepsilon$ 이하의 꼴) $f$가 적분가능한 것은 정확히 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) \le \varepsilon$인 $[a, b]$의 분할 $P$가 있을 때이다. (4)에서도 "$U(P, f) - L(P, f) < \varepsilon$"을 "$U(P, f) - L(P, f) \le \varepsilon$"으로 바꾸어도 결론이 같다.
6. (균등 분할로 하는 판정) 모든 양수 $\varepsilon$에 대하여 $U(P_n, f) - L(P_n, f) < \varepsilon$인 자연수 $n$이 있으면 $f$는 적분가능하다. 또 실수 $I$에 대하여, 모든 양수 $\varepsilon$마다 $L(P_n, f) \le I \le U(P_n, f)$이고 $U(P_n, f) - L(P_n, f) < \varepsilon$인 자연수 $n$이 있으면 $f$는 적분가능하고 $\int_a^b f = I$이다. 이 항목은 거꾸로 방향, 곧 적분가능한 모든 $f$에 대해 이런 $n$이 있다는 것은 진술하지 않는다.
:::

:::english
Partitions of $[a, b]$ and their points are as in the entry on partitions of an interval; refinements and common refinements are as in the entry on refinements of a partition; the uniform partition $P_n$ of $[a, b]$ into $n$ pieces is as in the entry on uniform partitions. The Darboux sums $L(P, f)$ and $U(P, f)$ are as in the entry on Darboux sums, and Riemann integrability and $\int_a^b f$ are as in the entry on the Riemann integral. Below, $a$ and $b$ are real numbers with $a < b$, and $f : [a, b] \to \mathbb{R}$ is bounded.

1. (Criterion) $f$ is Riemann integrable exactly when for every positive $\varepsilon$ there is a partition $P$ of $[a, b]$ with $U(P, f) - L(P, f) < \varepsilon$.
2. (Preserved under refinement) If a positive $\varepsilon$ and a partition $P$ of $[a, b]$ satisfy $U(P, f) - L(P, f) < \varepsilon$, then $U(Q, f) - L(Q, f) < \varepsilon$ for every refinement $Q$ of $P$.
3. (One partition for two functions) If $f$ and $g : [a, b] \to \mathbb{R}$ are integrable, then for every positive $\varepsilon$ there is a partition $P$ of $[a, b]$ for which both $U(P, f) - L(P, f) < \varepsilon$ and $U(P, g) - L(P, g) < \varepsilon$ hold. Both inequalities also hold for every refinement of such a $P$.
4. (Criterion that identifies the value) Let $I$ be a real number. If for every positive $\varepsilon$ there is a partition $P$ of $[a, b]$ with
   $$
   \begin{gathered}
   L(P, f) \le I \le U(P, f), \\
   U(P, f) - L(P, f) < \varepsilon,
   \end{gathered}
   $$
   then $f$ is integrable and $\int_a^b f = I$. Here integrability of $f$ is not assumed.
5. (The "at most $\varepsilon$" form) $f$ is integrable exactly when for every positive $\varepsilon$ there is a partition $P$ of $[a, b]$ with $U(P, f) - L(P, f) \le \varepsilon$. In (4), too, replacing "$U(P, f) - L(P, f) < \varepsilon$" by "$U(P, f) - L(P, f) \le \varepsilon$" gives the same conclusion.
6. (Criterion with uniform partitions) If for every positive $\varepsilon$ there is a natural number $n$ with $U(P_n, f) - L(P_n, f) < \varepsilon$, then $f$ is integrable. Moreover, for a real number $I$, if for every positive $\varepsilon$ there is a natural number $n$ with $L(P_n, f) \le I \le U(P_n, f)$ and $U(P_n, f) - L(P_n, f) < \varepsilon$, then $f$ is integrable and $\int_a^b f = I$. This entry does not state the converse, namely that such an $n$ exists for every integrable $f$.
:::

## 직관

하적분과 상적분이 같은지는 정의만으로는 확인하기 어렵습니다. 모든 분할에 대한 상한과 하한을 구해야 하기 때문입니다. (1)은 그 일을 "분할을 하나 잘 찾는 일"로 바꿉니다. 주어진 오차 $\varepsilon$마다 상합과 하합이 $\varepsilon$ 안으로 가까워지는 분할을 하나씩 찾으면 됩니다. 하적분과 상적분은 언제나 그 사이에 끼어 있으므로, 둘의 차도 $\varepsilon$보다 작아지고, $\varepsilon$을 얼마든지 작게 잡을 수 있으니 차는 $0$입니다.

$f \ge 0$인 그림으로 보면 $U(P, f) - L(P, f)$는 그래프를 덮는 직사각형들에서 그래프 아래를 채우는 직사각형들을 뺀 넓이, 곧 그래프 둘레의 "틈"의 넓이입니다. 적분가능하다는 것은 분할을 잘 고르면 이 틈을 원하는 만큼 줄일 수 있다는 것입니다. 점을 더하면 틈은 늘지 않으므로((2)), 두 함수에 각각 좋은 분할을 합치면 두 함수 모두에 좋은 분할이 됩니다((3)).

(4)는 적분값을 미리 짐작했을 때 쓰는 꼴입니다. 짐작한 수 $I$가 하합과 상합 사이에 있고 그 둘의 차가 얼마든지 작아지면, 적분도 같은 두 수 사이에 있으므로 $I$와 적분의 차가 얼마든지 작아져 둘은 같습니다.

## 증명

:::idea
분할이 있으면 적분가능하다는 방향은 [[lower-and-upper-integrals|하적분과 상적분]]의 (5)(상적분 − 하적분 ≤ 상합 − 하합)로 끝난다. 거꾸로는 그 항목의 (4)로 하적분과 상적분에 각각 $\varepsilon/2$보다 가까운 두 분할의 합집합을 쓴다. 나머지는 이 둘과 "세분하면 상합과 하합의 차가 늘지 않는다"를 조합한다.
:::

:::hint
적분가능하면 하적분과 상적분이 같은 수 $J$입니다. $J - \varepsilon/2 < L(R, f)$이고 $U(R, f) < J + \varepsilon/2$인 분할 $R$이 있다면 $U(R, f) - L(R, f)$는 얼마보다 작을까요?
:::

:::hint
(4)에서는 $I$와 $\int_a^b f$가 둘 다 같은 $L(P, f)$와 $U(P, f)$ 사이에 있다는 것을 쓰고, [[order-properties-of-reals]]의 (9)("모든 양수 이하인 수는 $0$ 이하")로 마무리합니다.
:::

:::proof
번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다. 양수 $\varepsilon$에 대하여 $\varepsilon/2 = \varepsilon \cdot 2^{-1}$은 (8)에 의해 $0 < \varepsilon/2 < \varepsilon$이고, (K3), (K4), (K7)과 $2 \cdot 2^{-1} = 1$에 의해 $\varepsilon/2 + \varepsilon/2 = \varepsilon$이다. 하적분과 상적분을 각각 $\underline{J} = \underline{\int_a^b} f$, $\overline{J} = \overline{\int_a^b} f$로 줄여 쓴다.

**이 항목의 (1).** 먼저 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) < \varepsilon$인 분할 $P$가 있다고 하자. 양수 $\varepsilon$이 주어지면 그런 $P$에 대하여 [[lower-and-upper-integrals|하적분과 상적분]]의 (5)에 의해 $0 \le \overline{J} - \underline{J} \le U(P, f) - L(P, f) < \varepsilon$이고, (1)의 (v)에 의해 $\overline{J} - \underline{J} \le \varepsilon$이다. 이것이 모든 양수 $\varepsilon$에서 성립하므로 (9)에 의해 $\overline{J} - \underline{J} \le 0$이고, $0 \le \overline{J} - \underline{J}$와 (1)의 (ii)에 의해 $\overline{J} - \underline{J} = 0$이다. (K12)의 (v)에 의해 $\overline{J} = \underline{J}$이고, $f$는 유계이므로 [[riemann-integral]]의 정의에 의해 적분가능하다.

거꾸로 $f$가 적분가능하다고 하고 $J = \int_a^b f = \underline{J} = \overline{J}$로 둔다. 양수 $\varepsilon$이 주어지면 $\varepsilon/2$는 양수이므로, [[lower-and-upper-integrals|하적분과 상적분]]의 (4)에 의해 $J - \varepsilon/2 < L(R, f)$와 $U(R, f) < J + \varepsilon/2$가 함께 성립하는 분할 $R$이 있다(그 항목의 $P_1 \cup P_2$). 첫 부등식에서 (3)의 (iii)에 의해 $-L(R, f) < -(J - \varepsilon/2)$이고, 이것과 둘째 부등식을 (2)의 (iv)로 더하면
$$
\begin{aligned}
U(R, f) - L(R, f) &< (J + \varepsilon/2) - (J - \varepsilon/2) \\
&= \varepsilon/2 + \varepsilon/2 = \varepsilon
\end{aligned}
$$
이다(가운데 등식은 (K1), (K2), (K9), (K12)의 (iv)). 그러므로 $R$이 찾는 분할이다.

**이 항목의 (2).** $Q$가 $P$의 세분이면 [[refinement-and-darboux-sums|세분과 다르부 합]]의 (4)에 의해 $U(Q, f) - L(Q, f) \le U(P, f) - L(P, f)$이고, 가정과 (1)의 (v)에 의해 $U(Q, f) - L(Q, f) < \varepsilon$이다.

**이 항목의 (3).** $g$도 적분가능하므로 [[riemann-integral]]의 (6)에 의해 유계이고, 이 항목의 (1)을 $g$에도 쓸 수 있다. 양수 $\varepsilon$이 주어지면 이 항목의 (1)에 의해 $U(P_1, f) - L(P_1, f) < \varepsilon$인 분할 $P_1$과 $U(P_2, g) - L(P_2, g) < \varepsilon$인 분할 $P_2$가 있다. [[refinement-of-a-partition]]의 (2)에 의해 $P = P_1 \cup P_2$는 $[a, b]$의 분할이고 $P_1$과 $P_2$의 공통 세분이다. 이 항목의 (2)를 $f$, $P_1$과 $g$, $P_2$에 쓰면 $P$에서 두 부등식이 함께 성립한다. $Q$가 $P$의 세분이면 [[refinement-of-a-partition]]의 (6)에 의해 $Q$는 $P_1$의 세분이자 $P_2$의 세분이므로, 같은 방법으로 $Q$에서도 두 부등식이 성립한다.

**이 항목의 (4).** 가정에 의해 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) < \varepsilon$인 분할 $P$가 있으므로, 이 항목의 (1)에 의해 $f$는 적분가능하다. $J = \int_a^b f$로 둔다. 양수 $\varepsilon$이 주어지면 가정의 분할 $P$에서 $L(P, f) \le I \le U(P, f)$이고, [[riemann-integral]]의 (1)에 의해 $L(P, f) \le J \le U(P, f)$이다. $J \le U(P, f)$와 (3)의 (iii)으로 얻은 $-I \le -L(P, f)$를 (2)의 (iii)으로 더하면 $J - I \le U(P, f) - L(P, f) < \varepsilon$이다. 같은 방법으로 $I \le U(P, f)$와 $-J \le -L(P, f)$에서 $I - J < \varepsilon$이고, (3)의 (iii)과 (K9), (K12)의 (iv)에 의해 $-\varepsilon < J - I$이다. [[absolute-value]]의 (7)에 의해 $|J - I| < \varepsilon$이므로 $|J - I| \le \varepsilon$이다. 이것이 모든 양수 $\varepsilon$에서 성립하므로 (9)에 의해 $|J - I| \le 0$이고, [[absolute-value]]의 (2)에 의해 $0 \le |J - I|$이므로 (1)의 (ii)에 의해 $|J - I| = 0$이다. 다시 [[absolute-value]]의 (2)에 의해 $J - I = 0$이고, (K12)의 (v)에 의해 $I = J$이다.

**이 항목의 (5).** $f$가 적분가능하면 이 항목의 (1)의 분할 $P$에서 $U(P, f) - L(P, f) < \varepsilon$이므로 $\le \varepsilon$이다. 거꾸로 모든 양수 $\varepsilon$에 대하여 $U(P, f) - L(P, f) \le \varepsilon$인 분할이 있다고 하자. 양수 $\varepsilon$이 주어지면 $\varepsilon/2$에 대한 그런 분할 $P$에서 $U(P, f) - L(P, f) \le \varepsilon/2 < \varepsilon$이고((1)의 (v)), 이 항목의 (1)에 의해 $f$는 적분가능하다. (4)의 "$\le \varepsilon$" 꼴도 같다. 양수 $\varepsilon$마다 $\varepsilon/2$에 대한 가정의 분할을 쓰면 $L(P, f) \le I \le U(P, f)$이고 $U(P, f) - L(P, f) < \varepsilon$이므로 (4)의 가정이 성립한다.

**이 항목의 (6).** [[uniform-partition]]의 (1)에 의해 모든 자연수 $n$에서 $P_n$은 $[a, b]$의 분할이다. 따라서 첫 문장의 가정이 성립하면 이 항목의 (1)의 가정이 $P = P_n$으로 성립하고, 둘째 문장의 가정이 성립하면 이 항목의 (4)의 가정이 $P = P_n$으로 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점에서 뛰는 함수]
$f : [0, 3] \to \mathbb{R}$를 $x < 2$이면 $f(x) = 0$, $2 \le x$이면 $f(x) = 1$로 정합니다([[real-valued-function]]의 (1)). $|f(x)| \le 1$이므로 유계입니다. (4)로 $\int_0^3 f = 1$임을 보입니다.

양수 $\varepsilon$이 주어지면 $t = \min\{1, \varepsilon/2\}$로 둡니다. [[absolute-value]]의 (10)과 [[order-properties-of-reals]]의 (8)에 의해 $0 < t \le 1$이고 $t \le \varepsilon/2 < \varepsilon$입니다. $0 < 2 - t < 2 < 3$이므로 [[partition-of-an-interval|구간의 분할]]의 (5)에 의해 $P = \{0, 2 - t, 2, 3\}$은 점이 $x_0 = 0$, $x_1 = 2 - t$, $x_2 = 2$, $x_3 = 3$인 $[0, 3]$의 분할입니다. 작은 구간마다 $f$의 값을 보면

- $[0, 2 - t]$의 점은 모두 $2$보다 작으므로 값의 집합은 $\{0\}$이고 $m_1 = M_1 = 0$, $\Delta x_1 = 2 - t$입니다.
- $[2 - t, 2]$에서는 $f(2 - t) = 0$, $f(2) = 1$이고 다른 점의 값도 $0$이나 $1$이므로 값의 집합은 $\{0, 1\}$이고 $m_2 = 0$, $M_2 = 1$, $\Delta x_2 = t$입니다.
- $[2, 3]$의 점은 모두 $2$ 이상이므로 값의 집합은 $\{1\}$이고 $m_3 = M_3 = 1$, $\Delta x_3 = 1$입니다.

([[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 최솟값과 최댓값이 하한과 상한입니다.) [[finite-sum-of-reals|실수의 유한 합]]의 (2), (3)으로 세 항을 더하면
$$
\begin{aligned}
L(P, f) &= 0 \cdot (2 - t) + 0 \cdot t + 1 \cdot 1 = 1, \\
U(P, f) &= 0 \cdot (2 - t) + 1 \cdot t + 1 \cdot 1 = 1 + t
\end{aligned}
$$
입니다. 따라서 $L(P, f) \le 1 \le U(P, f)$이고 $U(P, f) - L(P, f) = t < \varepsilon$입니다. (4)를 $I = 1$에 쓰면 $f$는 적분가능하고 $\int_0^3 f = 1$입니다. 뛰는 점 $2$를 짧은 작은 구간 하나에 가두면 틈이 그 구간의 길이만큼만 남습니다.
:::

:::counterexample[ε 하나에서만 맞는 분할]
$[a, b]$ 위의 디리클레 함수 $D$는 [[dirichlet-function]]의 (3)에 의해 모든 분할 $P$에서 $U(P, D) - L(P, D) = b - a$입니다. 그래서 $\varepsilon = 2(b - a)$처럼 $b - a$보다 큰 $\varepsilon$에 대해서는 $U(P, D) - L(P, D) < \varepsilon$인 분할이 있지만(아무 분할이나 됩니다), $\varepsilon = b - a$에 대해서는 그런 분할이 없습니다. (1)은 **모든** 양수 $\varepsilon$에 대해 분할이 있기를 요구하므로, 큰 $\varepsilon$ 몇 개에서 분할이 있다는 것만으로는 적분가능하다고 할 수 없습니다. 실제로 $D$는 [[riemann-integral]]의 (5)에 의해 적분가능하지 않습니다.
:::

## 확인 질문

:::check[값이 $k$인 상수함수는 (1)의 조건을 어떤 분할로 만족하는가?]
분할 $\{a, b\}$ 하나로 모든 $\varepsilon$에 대해 만족합니다. [[darboux-sums]]의 (5)에 의해 $L(\{a, b\}, f) = U(\{a, b\}, f) = k(b - a)$이므로 차는 $0$이고, 모든 양수 $\varepsilon$에 대해 $0 < \varepsilon$입니다. (4)를 $I = k(b - a)$에 쓰면 적분이 $k(b - a)$라는 것도 나옵니다.
:::

:::check[적분가능한 $f$와 분할 $P$가 $U(P, f) - L(P, f) < 1/100$을 만족하면 $L(P, f)$는 $\int_a^b f$와 얼마나 다를 수 있는가?]
$1/100$보다 덜 다릅니다. [[riemann-integral]]의 (1)에 의해 $L(P, f) \le \int_a^b f \le U(P, f)$이므로 $0 \le \int_a^b f - L(P, f) \le U(P, f) - L(P, f) < 1/100$입니다. 그래서 그런 분할 하나의 하합은 적분의 근삿값이 되고, 오차는 $1/100$ 미만입니다.
:::
