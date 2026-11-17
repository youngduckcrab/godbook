---
title: 단조수렴정리
title_en: Monotone Convergence Theorem
aliases: [단조 수렴 정리, 유계인 단조수열은 수렴한다, monotone convergence theorem]
kind: theorem
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 단조증가이고 위로 유계인 수열은 값의 집합의 상한으로 수렴하고, 단조감소이고 아래로 유계인 수열은 하한으로 수렴한다. 단조인 수열은 유계인 것과 수렴하는 것이 같다.
requires: [real-number-arithmetic, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, archimedean-property, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.1.1절 Definition 2.1.9, Theorem 2.1.10 (p.55, 증명은 p.55–56), Example 2.1.11 (p.56), 연습문제 2.1.10, 2.1.11 (p.59)
    checked: original
    note: "출처의 Theorem 2.1.10(p.55)은 '단조인 수열은 유계인 것과 수렴하는 것이 같다'(이 항목의 (3))와, 단조증가이고 유계이면 극한이 sup{x_n : n ∈ ℕ}, 단조감소이고 유계이면 inf{x_n : n ∈ ℕ} 라는 것이다. 출처는 단조증가이고 유계인 경우만 증명하고(상한 x 와 ε 에 대해 x_M > x − ε 인 M 을 잡고, 귀납으로 n ≥ M 이면 x_n ≥ x_M 임을 '쉽게 볼 수 있다'고 넘긴다), 단조감소의 경우는 연습문제 2.1.11 로 둔다. 이 항목은 (1)과 (2)를 '위로 유계'·'아래로 유계'만 가정해 진술하고 두 경우를 모두 증명하며, 귀납 부분은 sequence 의 (4)를 인용한다. (1), (2)의 '모든 n 에서 x_n ≤ lim x_n'(또는 ≥)은 출처에 명제로 없다(검색한 범위). 출처는 p.56 에서 단조증가 수열은 x_1 이 하계이므로 위로 유계인지만 보면 된다고 적는다. 예시 '1 − n⁻¹ 의 극한'은 출처의 Example 2.1.11(1/√n 이 단조감소이고 아래로 유계이므로 수렴하고, 극한인 하한을 아르키메데스 성질로 0 으로 구한다)과 같은 발상이고, 수열은 출처의 연습문제 2.1.10({(n+1)/n} 이 단조이고 유계임을 보이고 극한을 구하라)과 같은 꼴이다. 반례는 출처 p.55 의 '{(−1)ⁿ} 은 단조가 아니다'와 p.54 의 '{(−1)ⁿ} 은 유계이지만 수렴하지 않는다'를 합친 것이다. 확인 질문 1 은 출처 p.55 의 '{1/n} 은 단조감소'와 Corollary 1.2.5(inf{1/n : n ∈ ℕ} = 0)를 합친 것이고, 확인 질문 2 는 출처의 연습문제 2.1.10({(n+1)/n}, 곧 1 + 1/n 이 단조이고 유계임을 보이고 극한을 구하라)과 같은 발상이다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 수학 오류 없음. 출처 메모 보완, 수열 (1)의 전제를 좁힘, 근거 인용 보완"
added: 2026-11-17
---

:::statement
수열, 단조, 유계, 값의 집합은 [[sequence]]의 것이고, 수렴과 기호 $\lim_{n \to \infty}$는 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이다. $(x_n)$을 수열, $E = \{x_n : n \in \mathbb{N}\}$을 그 값의 집합이라 하자.

1. (단조증가) $(x_n)$이 단조증가이고 위로 유계이면 $\sup E$가 있고, $(x_n)$은 $\sup E$로 수렴한다. 곧 $\lim_{n \to \infty} x_n = \sup\{x_n : n \in \mathbb{N}\}$이다. 특히 모든 자연수 $n$에서 $x_n \le \lim_{n \to \infty} x_n$이다.
2. (단조감소) $(x_n)$이 단조감소이고 아래로 유계이면 $\inf E$가 있고, $(x_n)$은 $\inf E$로 수렴한다. 곧 $\lim_{n \to \infty} x_n = \inf\{x_n : n \in \mathbb{N}\}$이다. 특히 모든 자연수 $n$에서 $\lim_{n \to \infty} x_n \le x_n$이다.
3. (단조인 수열) $(x_n)$이 단조이면, $(x_n)$이 유계인 것은 정확히 $(x_n)$이 수렴할 때이다.
:::

:::english
Sequences, monotonicity, boundedness and the set of values are those of the entry on sequences, and convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on the limit of a sequence and on uniqueness of limits. Let $(x_n)$ be a sequence and $E = \{x_n : n \in \mathbb{N}\}$ its set of values.

1. (Increasing) If $(x_n)$ is monotone increasing and bounded above, then $\sup E$ exists and $(x_n)$ converges to $\sup E$; that is, $\lim_{n \to \infty} x_n = \sup\{x_n : n \in \mathbb{N}\}$. In particular, $x_n \le \lim_{n \to \infty} x_n$ for every natural number $n$.
2. (Decreasing) If $(x_n)$ is monotone decreasing and bounded below, then $\inf E$ exists and $(x_n)$ converges to $\inf E$; that is, $\lim_{n \to \infty} x_n = \inf\{x_n : n \in \mathbb{N}\}$. In particular, $\lim_{n \to \infty} x_n \le x_n$ for every natural number $n$.
3. (Monotone sequences) If $(x_n)$ is monotone, then $(x_n)$ is bounded exactly when $(x_n)$ converges.
:::

## 직관

계단을 한 칸씩 오르기만 하는 사람이 있는데, 천장이 있어 어느 높이 위로는 올라갈 수 없다고 해 봅시다. 이 사람은 끝없이 오르지만 천장을 뚫지 못하므로, 어떤 높이에 한없이 다가갑니다. 그 높이는 이 사람이 밟은 모든 높이의 상한, 곧 "밟은 높이보다 낮지 않은 높이 가운데 가장 낮은 것"입니다. (1)이 이것입니다.

증명에서 상한이 하는 일은 두 가지입니다. 상한은 상계이므로 모든 항이 상한 이하이고, 상한보다 조금이라도 낮은 높이는 상계가 아니므로 어떤 항이 그 높이를 넘습니다. 단조증가이므로 그 항 뒤의 항들은 모두 그 높이를 넘은 채로 상한 이하에 머뭅니다. 상한이 있다는 것은 실수의 최소상계 성질 (U)에서 옵니다.

비유가 맞지 않는 곳은 실제 천장은 오르는 사람이 닿는 높이와 상관없이 정해져 있다는 점입니다. 상한은 천장(상계) 가운데 가장 낮은 것이고, 처음에 주어진 천장보다 낮을 수 있습니다.

## 증명

:::idea
$s = \sup E$로 두면, 주어진 $\varepsilon$에 대해 $s - \varepsilon$은 상계가 아니므로 $s - \varepsilon < x_M$인 항이 있고, 단조증가이므로 $n \ge M$이면 $s - \varepsilon < x_M \le x_n \le s$이다.
:::

:::hint
$E$가 공집합이 아니고 위로 유계라는 것은 [[sequence]]의 (2)에서 나온다. 상한의 존재는 [[least-upper-bound-property]]이다.
:::

:::hint
$x_M \le x_n$($n \ge M$)은 [[sequence]]의 (4)이다. 수렴은 [[limit-of-sequence]]의 (1)의 두 부등식 꼴로 확인한다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "상한 항목의 (4)"는 [[upper-bound-and-supremum]]의 번호, "수열 (2)"는 [[sequence]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호이다. 먼저 실수 $a$와 양의 실수 $\varepsilon$에 대하여 $a - \varepsilon < a < a + \varepsilon$임을 적어 둔다. 순서 성질 (3)의 (ii)에 의해 $-\varepsilon < 0 < \varepsilon$이고, 순서 성질 (2)의 (ii)로 $a$를 더하면 (K1), (K4)에 의해 $a + (-\varepsilon) < a < a + \varepsilon$이다.

**1의 증명.** 수열 (2)에 의해 $E$는 공집합이 아니고, $(x_n)$이 위로 유계이므로 $E$도 위로 유계이다. [[least-upper-bound-property]]의 (U)에 의해 $E$의 상한 $s = \sup E$가 있다. $s$는 $E$의 상계이므로 수열 (2)에 의해 모든 자연수 $n$에서 $x_n \le s$이다.

양의 실수 $\varepsilon$을 잡는다. $s - \varepsilon < s$이므로 상한 항목의 (4)에 의해 $s - \varepsilon < z$인 $E$의 원소 $z$가 있고, $z \in E$이므로 $z = x_M$인 자연수 $M$이 있다. $n \ge M$인 자연수 $n$을 잡으면, $(x_n)$이 단조증가이므로 수열 (4)에 의해 $x_M \le x_n$이다. 따라서 순서 성질 (1)의 (v)에 의해 $s - \varepsilon < x_n$이고, $x_n \le s < s + \varepsilon$이므로 같은 성질에 의해 $x_n < s + \varepsilon$이다. 곧 $n \ge M$인 모든 자연수 $n$에서 $s - \varepsilon < x_n < s + \varepsilon$이다. $\varepsilon$은 임의였으므로 극한 (1)에 의해 $(x_n)$은 $s$로 수렴하고, [[limit-is-unique]]에 의해 $\lim_{n \to \infty} x_n = s$이다. 앞에서 본 대로 모든 $n$에서 $x_n \le s$이다.

**2의 증명.** 수열 (2)에 의해 $E$는 공집합이 아니고, $(x_n)$이 아래로 유계이므로 $E$도 아래로 유계이다. [[infimum-exists]]의 (4)에 의해 $E$의 하한 $t = \inf E$가 있다. $t$는 $E$의 하계이므로 수열 (2)에 의해 모든 자연수 $n$에서 $t \le x_n$이다.

양의 실수 $\varepsilon$을 잡는다. $t < t + \varepsilon$이므로 상한 항목의 (4)의 하한에 관한 문장에 의해 $z < t + \varepsilon$인 $E$의 원소 $z$가 있고, $z = x_M$인 자연수 $M$이 있다. $n \ge M$인 자연수 $n$을 잡으면, $(x_n)$이 단조감소이므로 수열 (4)에 의해 $x_n \le x_M$이다. 따라서 순서 성질 (1)의 (v)에 의해 $x_n < t + \varepsilon$이고, $t - \varepsilon < t \le x_n$이므로 같은 성질에 의해 $t - \varepsilon < x_n$이다. 곧 $n \ge M$인 모든 자연수 $n$에서 $t - \varepsilon < x_n < t + \varepsilon$이다. 극한 (1)에 의해 $(x_n)$은 $t$로 수렴하고, [[limit-is-unique]]에 의해 $\lim_{n \to \infty} x_n = t$이다. 앞에서 본 대로 모든 $n$에서 $t \le x_n$이다.

**3의 증명.** $(x_n)$이 단조이고 유계라 하자. 수열 (3)에 의해 $(x_n)$은 위로 유계이고 아래로 유계이다. $(x_n)$이 단조증가이면 (1)에 의해, 단조감소이면 (2)에 의해 $(x_n)$은 수렴한다. 거꾸로 $(x_n)$이 수렴하면 [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 유계이다. 이 방향에는 단조라는 가정이 쓰이지 않는다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $1 - n^{-1}$인 수열의 극한]
[[sequence]]의 예시에서 이 수열이 단조증가이고 모든 항이 $1$보다 작다는 것을 보았습니다. 다시 적으면, 자연수 $n$에서 $0 < n^{-1}$이므로 [[order-properties-of-reals]]의 (3)의 (ii)와 (2)의 (ii)에 의해 $1 - n^{-1} < 1$이고, $n < n + 1$에서 그 항목의 (6)의 (ii), (3)의 (iii), (2)의 (ii)에 의해 $1 - n^{-1} < 1 - (n + 1)^{-1}$입니다. 따라서 (1)에 의해 이 수열은 수렴하고 극한은 $s = \sup\{1 - n^{-1} : n \in \mathbb{N}\}$입니다.

$s = 1$임을 보입니다. $1$은 값의 집합의 상계이므로 $s \le 1$입니다. $b < 1$인 실수 $b$가 상계가 아님을 보이면 됩니다. [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < 1 - b$이므로, [[archimedean-property]]의 (3)에 의해 $n^{-1} < 1 - b$인 자연수 $n$이 있습니다. 그 항목의 (2)의 (ii)로 양변에 $b - n^{-1}$을 더하면, (K1), (K2), $-b$와 $-n^{-1}$의 정의((K8)의 (ii)), (K4)에 의해 $n^{-1} + (b - n^{-1}) = b$이고 $(1 - b) + (b - n^{-1}) = 1 - n^{-1}$이므로 $b < 1 - n^{-1}$입니다. 따라서 $b$는 상계가 아닙니다. 따라서 모든 상계 $b$에 대해 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $1 \le b$이고, $1$은 상한이며, 상한의 유일성([[upper-bound-and-supremum]]의 (1))에 의해 $s = 1$입니다. 곧 $\lim_{n \to \infty} (1 - n^{-1}) = 1$입니다.
:::

:::counterexample[단조가 아니면 유계여도 수렴하지 않을 수 있다]
[[basic-limits]]의 (3)의 수열 $(a_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)은 모든 $n$에서 $|a_n| \le 1$이므로 유계이지만 발산합니다. 이 수열은 단조가 아닙니다. $a_1 = -1 < 1 = a_2$이므로 단조감소가 아니고, $a_3 = -1 < 1 = a_2$이므로 단조증가도 아닙니다. (3)에서 "단조"라는 가정을 뺄 수 없습니다. 거꾸로 $n$번째 항이 $n$인 수열은 단조증가이지만 위로 유계가 아니고, [[basic-limits]]의 (4)에 의해 발산합니다. (1)에서 "위로 유계"도 뺄 수 없습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $n^{-1}$인 수열에 (2)를 쓰면 극한은 무엇인가?]
이 수열은 단조감소이고([[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$) 모든 항이 양수이므로 $0$이 하계입니다. (2)에 의해 극한은 $\inf\{n^{-1} : n \in \mathbb{N}\}$이고, [[archimedean-property]]의 (3)에 의해 이 하한은 $0$입니다. [[basic-limits]]의 (2)와 같은 결과입니다.
:::

:::check[$n$번째 항이 $2 + n^{-1}$인 수열은 (2)의 가정을 만족하는가? 값의 집합의 하한은 무엇인가?]
만족합니다. $(n + 1)^{-1} < n^{-1}$의 양변에 $2$를 더하면 $2 + (n + 1)^{-1} < 2 + n^{-1}$이므로 단조감소이고, $0 < n^{-1}$이므로 $2 < 2 + n^{-1}$이어서 $2$가 하계입니다. 하한은 $2$입니다. $2 < c$인 실수 $c$에 대해 [[archimedean-property]]의 (3)으로 $n^{-1} < c - 2$인 $n$을 잡으면 $2 + n^{-1} < c$이므로 $c$는 하계가 아닙니다. 따라서 (2)에 의해 $\lim_{n \to \infty} (2 + n^{-1}) = 2$입니다. [[basic-limits]]의 예시에서 정의로 직접 얻은 것과 같은 값입니다.
:::
