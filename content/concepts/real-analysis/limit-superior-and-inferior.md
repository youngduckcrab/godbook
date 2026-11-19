---
title: 상극한과 하극한
title_en: Limit Superior and Limit Inferior
aliases: [상극한, 하극한, limsup, liminf, limit superior, limit inferior, upper limit, lower limit]
kind: definition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 유계인 수열 (x_n) 에 대하여 a_n 을 n 번째 항부터의 값의 상한, b_n 을 하한으로 두면 (a_n) 은 단조감소, (b_n) 은 단조증가이고 유계이다. 그 극한을 상극한, 하극한이라 하며 하극한은 상극한 이하이다.
requires: [subset, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, archimedean-property, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, monotone-convergence-theorem, limits-preserve-inequalities, subsequence]
sources:
  - ref: lebl-basic-analysis
    loc: 2.3.1절 Definition 2.3.1, Proposition 2.3.2 와 그 증명 (p.73–74), Example 2.3.3 (p.74–75), 연습문제 2.3.1, 2.3.2 (p.80)
    checked: original
    note: "출처의 Definition 2.3.1(p.73)은 유계인 수열 {x_n} 에 대해 a_n := sup{x_k : k ≥ n}, b_n := inf{x_k : k ≥ n} 으로 두고, 극한이 있으면 lim sup x_n := lim a_n, lim inf x_n := lim b_n 으로 정의한다. 출처는 그 앞 문단에서 {x_k : k ≥ n} 이 유계인 집합의 부분집합이므로 유계라고 적는다. 이 항목은 그 집합을 S_n 으로 쓰고, a_n 과 b_n 이 실수 하나로 정해지므로 sequence 의 (1)로 수열이 된다는 것을 밝혔다. 출처의 Proposition 2.3.2(p.73)는 (i) {a_n} 은 유계이고 단조감소, {b_n} 은 유계이고 단조증가이며 따라서 두 극한이 있다, (ii) lim sup x_n = inf{a_n : n ∈ ℕ}, lim inf x_n = sup{b_n : n ∈ ℕ}, (iii) lim inf x_n ≤ lim sup x_n 이다. 이 항목의 (3), (4), (5)이다. 출처는 (a_n) 의 단조감소만 증명하고 (b_n) 의 단조증가는 '비슷하게(연습문제)'(연습문제 2.3.2), 두 수열의 유계는 연습문제(연습문제 2.3.1)로 둔다. 이 항목은 둘 다 증명했다. 출처는 (iii)을 b_n ≤ a_n('공집합이 아닌 집합의 inf 는 sup 이하')과 Lemma 2.2.3 으로 증명하며, 이 항목도 같은 경로(limits-preserve-inequalities)이다. (1)과 (2)(b_n ≤ x_k ≤ a_n)는 출처에 명제로 없다(검색한 범위). 출처는 Proposition 2.3.5 의 증명(p.77)에서 b_n ≤ x_n ≤ a_n 을 쓴다. (4)의 '모든 j 에서 b_j ≤ 하극한, 상극한 ≤ a_j'는 monotone-convergence-theorem 의 (1), (2)에서 온다. 출처는 확장 실수를 쓰는 경우를 2.3.4절에서 다루지만, 이 항목은 유계인 수열에만 정의한다. 출처는 2.3절 첫머리(p.73)에서 {(−1)ⁿ} 을 유계이지만 발산하는 수열로 들고 그래도 어떤 극한은 계산할 수 있다고 이어 간다. 예시 '번갈아 바뀌는 수열'은 그 문장을 이 수열에서 구체화한 것이고, 출처 Example 2.3.3(홀수 번째가 (n+1)/n, 짝수 번째가 0 인 수열의 하극한 0, 상극한 1)과 '수렴하지 않는 수열의 상극한과 하극한을 구한다'는 발상이 같고, 수열은 basic-limits 의 (3)의 것이다. 출처의 연습문제 2.3.5 a)는 (−1)ⁿ/n 의 상극한과 하극한을 구하라는 것이다. 예시 'n⁻¹'의 b_n = 0 과 '(b_n) 은 부분수열이 아니다'는 출처 p.75 의 문장('{a_n}, {b_n} 은 부분수열이 아니고 같은 수로 이루어질 필요도 없다. 수열이 {1/n} 이면 모든 n 에서 b_n = 0')과 같은 내용이다. 반례 '유계가 아닌 수열'은 출처 Example 2.3.14(p.80; 홀수 번째 0, 짝수 번째 n 인 수열에서 a_n = ∞, b_n = 0)와 같은 발상이다. 출처는 확장 실수로 a_n = ∞ 라 쓰고, 이 항목은 상한이 없다고 쓴다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 가장 작은 첨자와 재귀 정리로 부분수열을 만든다. 출처 메모, 근거 인용, 완비성이라는 이름을 고침"
added: 2026-11-17
---

:::statement
수열, 유계, 단조, 값으로 정한 수열은 [[sequence]]의 것이고, 상계, 하계, 상한, 하한과 기호 $\sup$, $\inf$는 [[upper-bound-and-supremum]]의 것이며, 수렴과 기호 $\lim_{n \to \infty}$는 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이다. $(x_n)$을 유계인 수열이라 하고, $E = \{x_n : n \in \mathbb{N}\}$을 그 값의 집합이라 하자.

**$n$번째 항부터의 값의 집합.** 자연수 $n$에 대하여
$$
S_n = \{x_k : k \in \mathbb{N},\ k \ge n\}
$$
로 쓴다. 곧 실수 $y$가 $S_n$의 원소인 것은 정확히 $k \ge n$이고 $y = x_k$인 자연수 $k$가 있을 때이다. 아래 (1)에 의해 $S_n$은 공집합이 아니고 위로 유계이며 아래로 유계이므로, [[least-upper-bound-property|최소상계 성질]] (U)에 의해 상한을 갖고 [[infimum-exists|하한의 존재]]의 (4)에 의해 하한을 가지며, [[upper-bound-and-supremum]]의 (1)에 의해 그 각각은 실수 하나로 정해진다.

**상극한과 하극한.** 자연수 $n$에 대하여
$$
a_n = \sup S_n = \sup\{x_k : k \in \mathbb{N},\ k \ge n\}, \qquad b_n = \inf S_n = \inf\{x_k : k \in \mathbb{N},\ k \ge n\}
$$
으로 두면, [[sequence]]의 (1)(값으로 정한 수열)에 의해 $(a_n)$과 $(b_n)$은 수열이다($a_n$, $b_n$은 정확히 하나로 정해진 실수이므로 그 진술의 "이미 정해진 대상"이다). 아래 (4)에 의해 두 수열은 수렴한다. $(a_n)$의 극한을 $(x_n)$의 **상극한**(limit superior), $(b_n)$의 극한을 $(x_n)$의 **하극한**(limit inferior)이라 하고
$$
\limsup_{n \to \infty} x_n = \lim_{n \to \infty} a_n, \qquad \liminf_{n \to \infty} x_n = \lim_{n \to \infty} b_n
$$
으로 쓴다. 이 기호의 $\infty$는 수가 아니라 기호의 일부이다. 이 강의는 상극한과 하극한을 유계인 수열에만 정의하고, 유계가 아닌 수열에는 이 기호를 쓰지 않는다. 이 항목에서 $S_n$, $a_n$, $b_n$은 늘 위의 뜻이다.

다음이 성립한다.

1. ($S_n$의 성질) 모든 자연수 $n$에서 $x_n \in S_n$이고 $S_n \subseteq E$이다. 자연수 $n$, $m$이 $n \le m$이면 $S_m \subseteq S_n$이다. $E$의 상계는 모두 $S_n$의 상계이고 $E$의 하계는 모두 $S_n$의 하계이다. 그래서 $S_n$은 공집합이 아니고 위로 유계이며 아래로 유계이다.
2. (항과의 비교) 자연수 $n$, $k$가 $k \ge n$이면 $b_n \le x_k \le a_n$이다. 특히 모든 자연수 $n$에서 $b_n \le x_n \le a_n$이다.
3. (단조와 유계) $(a_n)$은 단조감소이고 $(b_n)$은 단조증가이다. 따라서 자연수 $n$, $m$이 $n \le m$이면 $b_n \le b_m \le a_m \le a_n$이다. 또 실수 $B$가 모든 자연수 $n$에서 $|x_n| \le B$를 만족하면, 모든 자연수 $n$에서 $-B \le b_n \le a_n \le B$이고 $|a_n| \le B$, $|b_n| \le B$이다. 따라서 $(a_n)$과 $(b_n)$은 유계이다.
4. (극한의 존재) $(a_n)$은 $\inf\{a_n : n \in \mathbb{N}\}$으로 수렴하고 $(b_n)$은 $\sup\{b_n : n \in \mathbb{N}\}$으로 수렴한다. 곧
   $$
   \limsup_{n \to \infty} x_n = \inf\{a_n : n \in \mathbb{N}\}, \qquad \liminf_{n \to \infty} x_n = \sup\{b_n : n \in \mathbb{N}\}
   $$
   이다. 특히 모든 자연수 $j$에서 $b_j \le \liminf_{n \to \infty} x_n$이고 $\limsup_{n \to \infty} x_n \le a_j$이다.
5. (대소) $\liminf_{n \to \infty} x_n \le \limsup_{n \to \infty} x_n$이다.
:::

:::english
Sequences, boundedness, monotonicity and sequences defined by their values are those of the entry on sequences; upper and lower bounds, suprema, infima and the symbols $\sup$, $\inf$ are those of the entry on upper bounds and suprema; convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on the limit of a sequence and on uniqueness of limits. Let $(x_n)$ be a bounded sequence and let $E = \{x_n : n \in \mathbb{N}\}$ be its set of values.

**The set of values from the $n$th term on.** For a natural number $n$ we write
$$
S_n = \{x_k : k \in \mathbb{N},\ k \ge n\}.
$$
That is, a real number $y$ belongs to $S_n$ exactly when there is a natural number $k$ with $k \ge n$ and $y = x_k$. By (1) below, $S_n$ is nonempty, bounded above and bounded below, so it has a supremum by the least-upper-bound property (U) and an infimum by item (4) of the entry on existence of infima, and each of them is a single real number by item (1) of the entry on upper bounds and suprema.

**Limit superior and limit inferior.** For a natural number $n$ put
$$
a_n = \sup S_n = \sup\{x_k : k \in \mathbb{N},\ k \ge n\}, \qquad b_n = \inf S_n = \inf\{x_k : k \in \mathbb{N},\ k \ge n\};
$$
then $(a_n)$ and $(b_n)$ are sequences by item (1) (sequences defined by their values) of the entry on sequences ($a_n$ and $b_n$ are uniquely determined real numbers, so they are "already determined objects" in the sense of that statement). By (4) below, both sequences converge. The limit of $(a_n)$ is called the **limit superior** of $(x_n)$ and the limit of $(b_n)$ the **limit inferior** of $(x_n)$, and we write
$$
\limsup_{n \to \infty} x_n = \lim_{n \to \infty} a_n, \qquad \liminf_{n \to \infty} x_n = \lim_{n \to \infty} b_n.
$$
The $\infty$ in these symbols is not a number but part of the symbol. This course defines the limit superior and the limit inferior only for bounded sequences and does not use these symbols for unbounded sequences. In this entry $S_n$, $a_n$, $b_n$ always have the meaning above.

The following hold.

1. (Properties of $S_n$) For every natural number $n$, $x_n \in S_n$ and $S_n \subseteq E$. For natural numbers $n$, $m$ with $n \le m$, $S_m \subseteq S_n$. Every upper bound of $E$ is an upper bound of $S_n$, and every lower bound of $E$ is a lower bound of $S_n$. Hence $S_n$ is nonempty, bounded above and bounded below.
2. (Comparison with the terms) For natural numbers $n$, $k$ with $k \ge n$, $b_n \le x_k \le a_n$. In particular, $b_n \le x_n \le a_n$ for every natural number $n$.
3. (Monotonicity and boundedness) $(a_n)$ is monotone decreasing and $(b_n)$ is monotone increasing. Hence, for natural numbers $n$, $m$ with $n \le m$, $b_n \le b_m \le a_m \le a_n$. Moreover, if a real number $B$ satisfies $|x_n| \le B$ for every natural number $n$, then $-B \le b_n \le a_n \le B$ and $|a_n| \le B$, $|b_n| \le B$ for every natural number $n$. Hence $(a_n)$ and $(b_n)$ are bounded.
4. (Existence of the limits) $(a_n)$ converges to $\inf\{a_n : n \in \mathbb{N}\}$ and $(b_n)$ converges to $\sup\{b_n : n \in \mathbb{N}\}$. That is,
   $$
   \limsup_{n \to \infty} x_n = \inf\{a_n : n \in \mathbb{N}\}, \qquad \liminf_{n \to \infty} x_n = \sup\{b_n : n \in \mathbb{N}\}.
   $$
   In particular, $b_j \le \liminf_{n \to \infty} x_n$ and $\limsup_{n \to \infty} x_n \le a_j$ for every natural number $j$.
5. (Comparison) $\liminf_{n \to \infty} x_n \le \limsup_{n \to \infty} x_n$.
:::

## 직관

수열을 앞에서부터 지나가며, 지금 서 있는 자리 $n$에서 앞으로 남은 모든 항을 내다본다고 해 봅시다. $a_n$은 남은 항들 위에 그을 수 있는 가장 낮은 천장이고, $b_n$은 그 아래에 깔 수 있는 가장 높은 바닥입니다. 앞으로 나아갈수록 내다보는 항이 줄어들기만 하므로($S_{n+1} \subseteq S_n$) 천장은 내려오거나 그대로이고 바닥은 올라가거나 그대로입니다. 이것이 (3)의 단조입니다. 비유가 맞지 않는 곳은, 이 천장과 바닥이 어떤 항에 닿아 있을 수도 있고 어느 항에도 닿지 않을 수도 있다는 점입니다. 아래 예시 "$n^{-1}$"에서 천장 $a_n$은 항 $x_n$과 같고, 바닥 $b_n = 0$은 어느 항과도 같지 않습니다.

단조이고 유계인 수열은 [[monotone-convergence-theorem|단조수렴정리]]에 의해 수렴하므로, 내려오는 천장도 올라가는 바닥도 어떤 수로 다가갑니다. 그 두 수가 상극한과 하극한입니다. 수열 자체가 수렴하지 않아도, 유계이기만 하면 이 두 수는 언제나 있다는 것이 이 정의의 쓸모입니다. 수열이 유계라는 가정은 $S_n$이 상한과 하한을 갖는다는 정의의 첫 단계에서 쓰이고, 그다음 $(a_n)$과 $(b_n)$이 유계라는 (3)을 거쳐 단조수렴정리를 쓰는 단계에서 다시 쓰입니다.

바닥은 언제나 천장 아래에 있으므로(공집합이 아닌 $S_n$의 원소 $x_n$이 그 사이에 있으므로) 하극한은 상극한 이하입니다. 이것이 (5)입니다.

## 성질의 증명

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (7)"은 [[absolute-value]]의 번호, "상한 (1)"은 [[upper-bound-and-supremum]]의 번호, "수열 (2)"는 [[sequence]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 순서에는 [[well-ordering-principle]]의 (Z6), (L3)을 쓴다. $(x_n)$이 유계이므로 모든 자연수 $n$에서 $|x_n| \le B_0$인 실수 $B_0$이 있고, 수열 (3)과 (2)에 의해 $E$는 위로 유계이며 아래로 유계이다.

**1의 증명.** 자연수 $n$에 대하여 $k = n$으로 두면 $k \ge n$이고 $x_n = x_k$이므로 $x_n \in S_n$이다. $S_n$의 원소 $y$는 어떤 자연수 $k$에 대하여 $y = x_k$이므로 $E$의 원소이다. 따라서 $S_n \subseteq E$이다. $n \le m$이고 $y \in S_m$이면 $k \ge m$이고 $y = x_k$인 자연수 $k$가 있고, (Z6)에 의해 $k \ge n$이므로 $y \in S_n$이다. 따라서 $S_m \subseteq S_n$이다.

$c$가 $E$의 상계이면, $S_n$의 원소 $y$는 $E$의 원소이므로 $y \le c$이다. 곧 $c$는 $S_n$의 상계이다. 같은 방법으로, $c$가 $E$의 하계이면 $S_n$의 모든 원소 $y$가 $E$의 원소이므로 $c \le y$이고, $c$는 $S_n$의 하계이다. $E$는 상계와 하계를 가지므로 $S_n$도 상계와 하계를 갖고, $x_n \in S_n$이므로 $S_n$은 공집합이 아니다.

**2의 증명.** $k \ge n$이면 정의에 의해 $x_k \in S_n$이다. $a_n$은 $S_n$의 상한이므로 $S_n$의 상계이고, 따라서 $x_k \le a_n$이다. $b_n$은 $S_n$의 하한이므로 $S_n$의 하계이고, 따라서 $b_n \le x_k$이다. $k = n$으로 두면 둘째 문장이 나온다.

**3의 증명.** 자연수 $n$에 대하여 (L3)에 의해 $n \le n + 1$이므로 (1)에 의해 $S_{n+1} \subseteq S_n$이다. $a_n$은 $S_n$의 상계이므로, $S_{n+1}$의 모든 원소 $y$는 $S_n$의 원소이어서 $y \le a_n$이다. 곧 $a_n$은 $S_{n+1}$의 상계이다. $a_{n+1}$은 $S_{n+1}$의 상한, 곧 $S_{n+1}$의 모든 상계 이하인 상계이므로 $a_{n+1} \le a_n$이다. 같은 방법으로 $b_n$은 $S_n$의 하계이므로, $S_{n+1}$의 모든 원소 $y$에 대하여 $b_n \le y$이어서 $b_n$은 $S_{n+1}$의 하계이다. $b_{n+1}$은 $S_{n+1}$의 하한, 곧 $S_{n+1}$의 모든 하계 이상인 하계이므로 $b_n \le b_{n+1}$이다. 따라서 $(a_n)$은 단조감소이고 $(b_n)$은 단조증가이다.

$n \le m$이면 수열 (4)에 의해 $a_m \le a_n$이고 $b_n \le b_m$이다. (2)를 $k = m$, $n = m$에 쓰면 $b_m \le x_m \le a_m$이므로 순서 성질 (1)의 (v)에 의해 $b_m \le a_m$이다. 이것들을 이으면 $b_n \le b_m \le a_m \le a_n$이다.

실수 $B$가 모든 자연수 $n$에서 $|x_n| \le B$를 만족한다고 하자. 절댓값 (7)에 의해 모든 $n$에서 $-B \le x_n \le B$이므로, $B$는 $E$의 상계이고 $-B$는 $E$의 하계이다. (1)에 의해 자연수 $n$마다 $B$는 $S_n$의 상계이고 $-B$는 $S_n$의 하계이다. 상한은 모든 상계 이하이므로 $a_n \le B$이고, 하한은 모든 하계 이상이므로 $-B \le b_n$이다. 위에서 $n = m$으로 둔 것에 의해 $b_n \le a_n$이다. 따라서 $-B \le b_n \le a_n \le B$이다. 순서 성질 (1)의 (v)에 의해 $-B \le a_n \le B$이고 $-B \le b_n \le B$이므로, 절댓값 (7)에 의해 $|a_n| \le B$이고 $|b_n| \le B$이다. $B = B_0$으로 두면 $(a_n)$과 $(b_n)$이 유계라는 것이 나온다.

**4의 증명.** (3)에 의해 $(a_n)$은 단조감소이고 유계이므로, 수열 (3)에 의해 아래로 유계이다. [[monotone-convergence-theorem|단조수렴정리]]의 (2)에 의해 $\inf\{a_n : n \in \mathbb{N}\}$이 있고 $(a_n)$은 그것으로 수렴하며, 모든 자연수 $j$에서 $\lim_{n \to \infty} a_n \le a_j$이다. 같은 (3)에 의해 $(b_n)$은 단조증가이고 위로 유계이므로, 단조수렴정리의 (1)에 의해 $\sup\{b_n : n \in \mathbb{N}\}$이 있고 $(b_n)$은 그것으로 수렴하며, 모든 자연수 $j$에서 $b_j \le \lim_{n \to \infty} b_n$이다. 상극한과 하극한의 정의와 [[limit-is-unique]]의 기호로 진술의 식이 나온다.

**5의 증명.** (3)에 의해 모든 자연수 $n$에서 $b_n \le a_n$이고, (4)에 의해 $(a_n)$과 $(b_n)$은 수렴한다. [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 $\lim_{n \to \infty} b_n \le \lim_{n \to \infty} a_n$, 곧 $\liminf_{n \to \infty} x_n \le \limsup_{n \to \infty} x_n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[번갈아 바뀌는 수열]
[[basic-limits]]의 (3)의 수열, 곧 $n$이 짝수이면 $x_n = 1$, 홀수이면 $x_n = -1$인 수열 $(x_n)$을 생각합니다. 모든 $n$에서 $|x_n| = 1$이므로 유계입니다. 자연수 $n$에 대하여 $S_n = \{-1, 1\}$임을 봅니다. $S_n$의 원소는 어떤 항 $x_k$이므로 $-1$이거나 $1$입니다. 거꾸로 $0 < n$과 [[well-ordering-principle]]의 (Z7)에 의해 $2n = n + n \ge n$이고 $2n$은 짝수이므로([[even-and-odd]]의 정의) $1 = x_{2n} \in S_n$이고, 같은 (Z7)에 의해 $2n + 1 \ge 2n \ge n$이고 $2n + 1$은 홀수이므로 $-1 = x_{2n+1} \in S_n$입니다.

[[absolute-value|절댓값]]의 (11)에 의해 $\sup\{-1, 1\} = \max\{-1, 1\} = 1$이고 $\inf\{-1, 1\} = \min\{-1, 1\} = -1$입니다($-1 < 1$). 그래서 모든 $n$에서 $a_n = 1$, $b_n = -1$이고, [[basic-limits]]의 (1)에 의해
$$
\limsup_{n \to \infty} x_n = 1, \qquad \liminf_{n \to \infty} x_n = -1
$$
입니다. 수열은 발산하지만 상극한과 하극한은 있고, (5)의 부등식이 등호 없이 성립합니다.
:::

:::example[$n^{-1}$: 바닥이 어느 항과도 같지 않은 경우]
$x_n = n^{-1}$인 수열을 생각합니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고, [[prime-number]]의 (Z1)에 의해 $1 \le n$이므로 그 항목의 (6)의 (ii)에 의해 $n^{-1} \le 1$이어서($n = 1$이면 등호) 모든 $n$에서 $|x_n| \le 1$, 곧 유계입니다. 자연수 $k \ge n$이면 $\le$의 뜻([[well-ordering-principle]])에 의해 $k = n$이거나 $n < k$이고, 뒤의 경우 그 항목의 (6)의 (ii)에 의해 $k^{-1} < n^{-1}$이므로 $S_n$의 모든 원소는 $n^{-1}$ 이하입니다. $n^{-1} = x_n \in S_n$이므로 $n^{-1}$은 $S_n$의 최댓값이고, [[upper-bound-and-supremum]]의 (2)에 의해 $a_n = n^{-1}$입니다.

$b_n = 0$임을 봅니다. $S_n$의 원소는 양수이므로 $0$은 $S_n$의 하계입니다. 양수 $c$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $N$ 이상인 모든 자연수 $m$에서 $m^{-1} < c$인 자연수 $N$이 있고, $k = \max\{N, n\}$은 [[absolute-value|절댓값]]의 (10)에 의해 $N$이거나 $n$이어서 자연수이며 $k \ge n$, $k \ge N$이므로 $k^{-1} \in S_n$이고 $k^{-1} < c$입니다. 곧 양수는 $S_n$의 하계가 아니므로, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $S_n$의 하계는 모두 $0$ 이하이고, $0$은 하계이므로 $\inf S_n = 0$입니다. 따라서 $\limsup_{n \to \infty} x_n = \lim_{n \to \infty} n^{-1} = 0$이고 $\liminf_{n \to \infty} x_n = 0$입니다([[basic-limits]]의 (1), (2)).

$(b_n)$의 항 $0$은 $(x_n)$의 어느 항과도 같지 않으므로, $(b_n)$은 $(x_n)$의 [[subsequence|부분수열]]이 아닙니다. 첨자열 $(p_i)$로 $b_i = x_{p_i}$라면 $0 = b_1 = x_{p_1} = p_1^{-1} > 0$이 되기 때문입니다.
:::

:::counterexample[유계가 아닌 수열]
$x_n = n$인 수열을 생각합니다. 자연수 $n$과 실수 $t$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $t < N$인 자연수 $N$이 있고, $k = \max\{N, n\}$으로 두면 [[absolute-value|절댓값]]의 (10)에 의해 $k$는 자연수이고 $k \ge n$이므로 $x_k = k \in S_n$이며 $t < N \le k$입니다. 곧 어떤 실수도 $S_n$의 상계가 아니므로 $S_n$은 상한을 갖지 않고, $a_n$이 정해지지 않습니다. 하한 쪽은 $b_n = n$(이 경우 $S_n$의 최솟값)으로 정해지지만, 이 강의는 이런 수열에 상극한과 하극한을 정의하지 않습니다. 유계라는 가정은 정의의 첫 단계에서 빠질 수 없습니다.
:::

## 확인 질문

:::check[실수 $c$의 상수 수열의 상극한과 하극한은 무엇인가?]
둘 다 $c$입니다. 모든 자연수 $n$에서 $S_n = \{c\}$이고, [[absolute-value|절댓값]]의 (11)에 의해 $\sup\{c\} = \max\{c, c\} = c$, $\inf\{c\} = c$이므로 $a_n = b_n = c$입니다. 두 수열은 모든 항이 $c$인 상수 수열이므로 [[basic-limits]]의 (1)에 의해 $c$로 수렴합니다.
:::

:::check[$x_1 = 5$이고 $n \ge 2$이면 $x_n = 0$인 수열의 $a_1$, $a_2$와 상극한, 하극한은 무엇인가?]
$S_1 = \{5, 0\}$, $n \ge 2$이면 $S_n = \{0\}$입니다. 그래서 $a_1 = \max\{5, 0\} = 5$이고 $n \ge 2$이면 $a_n = 0$이며, 모든 $n$에서 $b_n = 0$입니다([[absolute-value|절댓값]]의 (11)). (4)에 의해 상극한은 $\inf\{a_n : n \in \mathbb{N}\} = \inf\{5, 0\} = 0$이고, 하극한은 $\sup\{b_n : n \in \mathbb{N}\} = \sup\{0\} = 0$입니다. 첫 항 $5$는 $a_1$을 바꾸지만 상극한은 바꾸지 못합니다.
:::
